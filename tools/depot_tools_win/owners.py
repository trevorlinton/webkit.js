# Copyright (c) 2012 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

"""A database of OWNERS files.

OWNERS files indicate who is allowed to approve changes in a specific directory
(or who is allowed to make changes without needing approval of another OWNER).
Note that all changes must still be reviewed by someone familiar with the code,
so you may need approval from both an OWNER and a reviewer in many cases.

The syntax of the OWNERS file is, roughly:

lines     := (\s* line? \s* "\n")*

line      := directive
          | "per-file" \s+ glob \s* "=" \s* directive
          | comment

directive := "set noparent"
          |  email_address
          |  "*"

glob      := [a-zA-Z0-9_-*?]+

comment   := "#" [^"\n"]*

Email addresses must follow the foo@bar.com short form (exact syntax given
in BASIC_EMAIL_REGEXP, below). Filename globs follow the simple unix
shell conventions, and relative and absolute paths are not allowed (i.e.,
globs only refer to the files in the current directory).

If a user's email is one of the email_addresses in the file, the user is
considered an "OWNER" for all files in the directory.

If the "per-file" directive is used, the line only applies to files in that
directory that match the filename glob specified.

If the "set noparent" directive used, then only entries in this OWNERS file
apply to files in this directory; if the "set noparent" directive is not
used, then entries in OWNERS files in enclosing (upper) directories also
apply (up until a "set noparent is encountered").

If "per-file glob=set noparent" is used, then global directives are ignored
for the glob, and only the "per-file" owners are used for files matching that
glob.

Examples for all of these combinations can be found in tests/owners_unittest.py.
"""

import collections
import random
import re


# If this is present by itself on a line, this means that everyone can review.
EVERYONE = '*'


# Recognizes 'X@Y' email addresses. Very simplistic.
BASIC_EMAIL_REGEXP = r'^[\w\-\+\%\.]+\@[\w\-\+\%\.]+$'


def _assert_is_collection(obj):
  assert not isinstance(obj, basestring)
  # Module 'collections' has no 'Iterable' member
  # pylint: disable=E1101
  if hasattr(collections, 'Iterable') and hasattr(collections, 'Sized'):
    assert (isinstance(obj, collections.Iterable) and
            isinstance(obj, collections.Sized))


class SyntaxErrorInOwnersFile(Exception):
  def __init__(self, path, lineno, msg):
    super(SyntaxErrorInOwnersFile, self).__init__((path, lineno, msg))
    self.path = path
    self.lineno = lineno
    self.msg = msg

  def __str__(self):
    return '%s:%d syntax error: %s' % (self.path, self.lineno, self.msg)


class Database(object):
  """A database of OWNERS files for a repository.

  This class allows you to find a suggested set of reviewers for a list
  of changed files, and see if a list of changed files is covered by a
  list of reviewers."""

  def __init__(self, root, fopen, os_path, glob):
    """Args:
      root: the path to the root of the Repository
      open: function callback to open a text file for reading
      os_path: module/object callback with fields for 'abspath', 'dirname',
          'exists', and 'join'
      glob: function callback to list entries in a directory match a glob
          (i.e., glob.glob)
    """
    self.root = root
    self.fopen = fopen
    self.os_path = os_path
    self.glob = glob

    # Pick a default email regexp to use; callers can override as desired.
    self.email_regexp = re.compile(BASIC_EMAIL_REGEXP)

    # Mapping of owners to the paths they own.
    self.owned_by = {EVERYONE: set()}

    # Mapping of paths to authorized owners.
    self.owners_for = {}

    # Mapping reviewers to the preceding comment per file in the OWNERS files.
    self.comments = {}

    # Set of paths that stop us from looking above them for owners.
    # (This is implicitly true for the root directory).
    self.stop_looking = set([''])

  def reviewers_for(self, files, author):
    """Returns a suggested set of reviewers that will cover the files.

    files is a sequence of paths relative to (and under) self.root.
    If author is nonempty, we ensure it is not included in the set returned
    in order avoid suggesting the author as a reviewer for their own changes."""
    self._check_paths(files)
    self.load_data_needed_for(files)
    suggested_owners = self._covering_set_of_owners_for(files, author)
    if EVERYONE in suggested_owners:
      if len(suggested_owners) > 1:
        suggested_owners.remove(EVERYONE)
      else:
        suggested_owners = set(['<anyone>'])
    return suggested_owners

  def files_not_covered_by(self, files, reviewers):
    """Returns the files not owned by one of the reviewers.

    Args:
        files is a sequence of paths relative to (and under) self.root.
        reviewers is a sequence of strings matching self.email_regexp.
    """
    self._check_paths(files)
    self._check_reviewers(reviewers)
    self.load_data_needed_for(files)

    covered_objs = self._objs_covered_by(reviewers)
    uncovered_files = [f for f in files
                       if not self._is_obj_covered_by(f, covered_objs)]

    return set(uncovered_files)

  def _check_paths(self, files):
    def _is_under(f, pfx):
      return self.os_path.abspath(self.os_path.join(pfx, f)).startswith(pfx)
    _assert_is_collection(files)
    assert all(not self.os_path.isabs(f) and
                _is_under(f, self.os_path.abspath(self.root)) for f in files)

  def _check_reviewers(self, reviewers):
    _assert_is_collection(reviewers)
    assert all(self.email_regexp.match(r) for r in reviewers)

  def _objs_covered_by(self, reviewers):
    objs = self.owned_by[EVERYONE]
    for r in reviewers:
      objs = objs | self.owned_by.get(r, set())
    return objs

  def _stop_looking(self, objname):
    return objname in self.stop_looking

  def _is_obj_covered_by(self, objname, covered_objs):
    while not objname in covered_objs and not self._stop_looking(objname):
      objname = self.os_path.dirname(objname)
    return objname in covered_objs

  def _enclosing_dir_with_owners(self, objname):
    """Returns the innermost enclosing directory that has an OWNERS file."""
    dirpath = objname
    while not dirpath in self.owners_for:
      if self._stop_looking(dirpath):
        break
      dirpath = self.os_path.dirname(dirpath)
    return dirpath

  def load_data_needed_for(self, files):
    for f in files:
      dirpath = self.os_path.dirname(f)
      while not dirpath in self.owners_for:
        self._read_owners_in_dir(dirpath)
        if self._stop_looking(dirpath):
          break
        dirpath = self.os_path.dirname(dirpath)

  def _read_owners_in_dir(self, dirpath):
    owners_path = self.os_path.join(self.root, dirpath, 'OWNERS')
    if not self.os_path.exists(owners_path):
      return
    comment = []
    in_comment = False
    lineno = 0
    for line in self.fopen(owners_path):
      lineno += 1
      line = line.strip()
      if line.startswith('#'):
        if not in_comment:
          comment = []
        comment.append(line[1:].strip())
        in_comment = True
        continue
      if line == '':
        continue
      in_comment = False

      if line == 'set noparent':
        self.stop_looking.add(dirpath)
        continue

      m = re.match('per-file (.+)=(.+)', line)
      if m:
        glob_string = m.group(1).strip()
        directive = m.group(2).strip()
        full_glob_string = self.os_path.join(self.root, dirpath, glob_string)
        if '/' in glob_string or '\\' in glob_string:
          raise SyntaxErrorInOwnersFile(owners_path, lineno,
              'per-file globs cannot span directories or use escapes: "%s"' %
              line)
        baselines = self.glob(full_glob_string)
        for baseline in (self.os_path.relpath(b, self.root) for b in baselines):
          self._add_entry(baseline, directive, 'per-file line',
                          owners_path, lineno, '\n'.join(comment))
        continue

      if line.startswith('set '):
        raise SyntaxErrorInOwnersFile(owners_path, lineno,
            'unknown option: "%s"' % line[4:].strip())

      self._add_entry(dirpath, line, 'line', owners_path, lineno,
                      ' '.join(comment))

  def _add_entry(self, path, directive,
                 line_type, owners_path, lineno, comment):
    if directive == 'set noparent':
      self.stop_looking.add(path)
    elif self.email_regexp.match(directive) or directive == EVERYONE:
      self.comments.setdefault(directive, {})
      self.comments[directive][path] = comment
      self.owned_by.setdefault(directive, set()).add(path)
      self.owners_for.setdefault(path, set()).add(directive)
    else:
      raise SyntaxErrorInOwnersFile(owners_path, lineno,
          ('%s is not a "set" directive, "*", '
           'or an email address: "%s"' % (line_type, directive)))

  def _covering_set_of_owners_for(self, files, author):
    dirs_remaining = set(self._enclosing_dir_with_owners(f) for f in files)
    all_possible_owners = self.all_possible_owners(dirs_remaining, author)
    suggested_owners = set()
    while dirs_remaining:
      owner = self.lowest_cost_owner(all_possible_owners, dirs_remaining)
      suggested_owners.add(owner)
      dirs_to_remove = set(el[0] for el in all_possible_owners[owner])
      dirs_remaining -= dirs_to_remove
    return suggested_owners

  def all_possible_owners(self, dirs, author):
    """Returns a list of (potential owner, distance-from-dir) tuples; a
    distance of 1 is the lowest/closest possible distance (which makes the
    subsequent math easier)."""
    all_possible_owners = {}
    for current_dir in dirs:
      dirname = current_dir
      distance = 1
      while True:
        for owner in self.owners_for.get(dirname, []):
          if author and owner == author:
            continue
          all_possible_owners.setdefault(owner, [])
          # If the same person is in multiple OWNERS files above a given
          # directory, only count the closest one.
          if not any(current_dir == el[0] for el in all_possible_owners[owner]):
            all_possible_owners[owner].append((current_dir, distance))
        if self._stop_looking(dirname):
          break
        dirname = self.os_path.dirname(dirname)
        distance += 1
    return all_possible_owners

  @staticmethod
  def total_costs_by_owner(all_possible_owners, dirs):
    # We want to minimize both the number of reviewers and the distance
    # from the files/dirs needing reviews. The "pow(X, 1.75)" below is
    # an arbitrarily-selected scaling factor that seems to work well - it
    # will select one reviewer in the parent directory over three reviewers
    # in subdirs, but not one reviewer over just two.
    result = {}
    for owner in all_possible_owners:
      total_distance = 0
      num_directories_owned = 0
      for dirname, distance in all_possible_owners[owner]:
        if dirname in dirs:
          total_distance += distance
          num_directories_owned += 1
      if num_directories_owned:
        result[owner] = (total_distance /
                         pow(num_directories_owned, 1.75))
    return result

  @staticmethod
  def lowest_cost_owner(all_possible_owners, dirs):
    total_costs_by_owner = Database.total_costs_by_owner(all_possible_owners,
                                                         dirs)
    # Return the lowest cost owner. In the case of a tie, pick one randomly.
    lowest_cost = min(total_costs_by_owner.itervalues())
    lowest_cost_owners = filter(
        lambda owner: total_costs_by_owner[owner] == lowest_cost,
        total_costs_by_owner)
    return random.Random().choice(lowest_cost_owners)

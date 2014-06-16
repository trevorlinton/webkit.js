#!/usr/bin/env python
# Copyright (c) 2012 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

"""Meta checkout manager supporting both Subversion and GIT."""
# Files
#   .gclient      : Current client configuration, written by 'config' command.
#                   Format is a Python script defining 'solutions', a list whose
#                   entries each are maps binding the strings "name" and "url"
#                   to strings specifying the name and location of the client
#                   module, as well as "custom_deps" to a map similar to the
#                   deps section of the DEPS file below, as well as
#                   "custom_hooks" to a list similar to the hooks sections of
#                   the DEPS file below.
#   .gclient_entries : A cache constructed by 'update' command.  Format is a
#                   Python script defining 'entries', a list of the names
#                   of all modules in the client
#   <module>/DEPS : Python script defining var 'deps' as a map from each
#                   requisite submodule name to a URL where it can be found (via
#                   one SCM)
#
# Hooks
#   .gclient and DEPS files may optionally contain a list named "hooks" to
#   allow custom actions to be performed based on files that have changed in the
#   working copy as a result of a "sync"/"update" or "revert" operation.  This
#   can be prevented by using --nohooks (hooks run by default). Hooks can also
#   be forced to run with the "runhooks" operation.  If "sync" is run with
#   --force, all known but not suppressed hooks will run regardless of the state
#   of the working copy.
#
#   Each item in a "hooks" list is a dict, containing these two keys:
#     "pattern"  The associated value is a string containing a regular
#                expression.  When a file whose pathname matches the expression
#                is checked out, updated, or reverted, the hook's "action" will
#                run.
#     "action"   A list describing a command to run along with its arguments, if
#                any.  An action command will run at most one time per gclient
#                invocation, regardless of how many files matched the pattern.
#                The action is executed in the same directory as the .gclient
#                file.  If the first item in the list is the string "python",
#                the current Python interpreter (sys.executable) will be used
#                to run the command. If the list contains string
#                "$matching_files" it will be removed from the list and the list
#                will be extended by the list of matching files.
#     "name"     An optional string specifying the group to which a hook belongs
#                for overriding and organizing.
#
#   Example:
#     hooks = [
#       { "pattern": "\\.(gif|jpe?g|pr0n|png)$",
#         "action":  ["python", "image_indexer.py", "--all"]},
#       { "pattern": ".",
#         "name": "gyp",
#         "action":  ["python", "src/build/gyp_chromium"]},
#     ]
#
# Pre-DEPS Hooks
#   DEPS files may optionally contain a list named "pre_deps_hooks".  These are
#   the same as normal hooks, except that they run before the DEPS are
#   processed. Pre-DEPS run with "sync" and "revert" unless the --noprehooks
#   flag is used.
#
# Specifying a target OS
#   An optional key named "target_os" may be added to a gclient file to specify
#   one or more additional operating systems that should be considered when
#   processing the deps_os dict of a DEPS file.
#
#   Example:
#     target_os = [ "android" ]
#
#   If the "target_os_only" key is also present and true, then *only* the
#   operating systems listed in "target_os" will be used.
#
#   Example:
#     target_os = [ "ios" ]
#     target_os_only = True

__version__ = '0.7'

import copy
import json
import logging
import optparse
import os
import platform
import posixpath
import pprint
import re
import sys
import time
import urllib
import urlparse

import breakpad  # pylint: disable=W0611

import fix_encoding
import gclient_scm
import gclient_utils
import git_cache
from third_party.repo.progress import Progress
import subcommand
import subprocess2
from third_party import colorama


class GClientKeywords(object):
  class FromImpl(object):
    """Used to implement the From() syntax."""

    def __init__(self, module_name, sub_target_name=None):
      """module_name is the dep module we want to include from.  It can also be
      the name of a subdirectory to include from.

      sub_target_name is an optional parameter if the module name in the other
      DEPS file is different. E.g., you might want to map src/net to net."""
      self.module_name = module_name
      self.sub_target_name = sub_target_name

    def __str__(self):
      return 'From(%s, %s)' % (repr(self.module_name),
                               repr(self.sub_target_name))

  class FileImpl(object):
    """Used to implement the File('') syntax which lets you sync a single file
    from a SVN repo."""

    def __init__(self, file_location):
      self.file_location = file_location

    def __str__(self):
      return 'File("%s")' % self.file_location

    def GetPath(self):
      return os.path.split(self.file_location)[0]

    def GetFilename(self):
      rev_tokens = self.file_location.split('@')
      return os.path.split(rev_tokens[0])[1]

    def GetRevision(self):
      rev_tokens = self.file_location.split('@')
      if len(rev_tokens) > 1:
        return rev_tokens[1]
      return None

  class VarImpl(object):
    def __init__(self, custom_vars, local_scope):
      self._custom_vars = custom_vars
      self._local_scope = local_scope

    def Lookup(self, var_name):
      """Implements the Var syntax."""
      if var_name in self._custom_vars:
        return self._custom_vars[var_name]
      elif var_name in self._local_scope.get("vars", {}):
        return self._local_scope["vars"][var_name]
      raise gclient_utils.Error("Var is not defined: %s" % var_name)


class DependencySettings(GClientKeywords):
  """Immutable configuration settings."""
  def __init__(
      self, parent, url, safesync_url, managed, custom_deps, custom_vars,
      custom_hooks, deps_file, should_process):
    GClientKeywords.__init__(self)

    # These are not mutable:
    self._parent = parent
    self._safesync_url = safesync_url
    self._deps_file = deps_file
    self._url = url
    # 'managed' determines whether or not this dependency is synced/updated by
    # gclient after gclient checks it out initially.  The difference between
    # 'managed' and 'should_process' is that the user specifies 'managed' via
    # the --unmanaged command-line flag or a .gclient config, where
    # 'should_process' is dynamically set by gclient if it goes over its
    # recursion limit and controls gclient's behavior so it does not misbehave.
    self._managed = managed
    self._should_process = should_process
    # This is a mutable value that overrides the normal recursion limit for this
    # dependency.  It is read from the actual DEPS file so cannot be set on
    # class instantiation.
    self.recursion_override = None
    # This is a mutable value which has the list of 'target_os' OSes listed in
    # the current deps file.
    self.local_target_os = None

    # These are only set in .gclient and not in DEPS files.
    self._custom_vars = custom_vars or {}
    self._custom_deps = custom_deps or {}
    self._custom_hooks = custom_hooks or []

    # TODO(iannucci): Remove this when all masters are correctly substituting
    # the new blink url.
    if (self._custom_vars.get('webkit_trunk', '') ==
        'svn://svn-mirror.golo.chromium.org/webkit-readonly/trunk'):
      new_url = 'svn://svn-mirror.golo.chromium.org/blink/trunk'
      print 'Overwriting Var("webkit_trunk") with %s' % new_url
      self._custom_vars['webkit_trunk'] = new_url

    # Post process the url to remove trailing slashes.
    if isinstance(self._url, basestring):
      # urls are sometime incorrectly written as proto://host/path/@rev. Replace
      # it to proto://host/path@rev.
      self._url = self._url.replace('/@', '@')
    elif not isinstance(self._url,
        (self.FromImpl, self.FileImpl, None.__class__)):
      raise gclient_utils.Error(
          ('dependency url must be either a string, None, '
           'File() or From() instead of %s') % self._url.__class__.__name__)
    # Make any deps_file path platform-appropriate.
    for sep in ['/', '\\']:
      self._deps_file = self._deps_file.replace(sep, os.sep)

  @property
  def deps_file(self):
    return self._deps_file

  @property
  def managed(self):
    return self._managed

  @property
  def parent(self):
    return self._parent

  @property
  def root(self):
    """Returns the root node, a GClient object."""
    if not self.parent:
      # This line is to signal pylint that it could be a GClient instance.
      return self or GClient(None, None)
    return self.parent.root

  @property
  def safesync_url(self):
    return self._safesync_url

  @property
  def should_process(self):
    """True if this dependency should be processed, i.e. checked out."""
    return self._should_process

  @property
  def custom_vars(self):
    return self._custom_vars.copy()

  @property
  def custom_deps(self):
    return self._custom_deps.copy()

  @property
  def custom_hooks(self):
    return self._custom_hooks[:]

  @property
  def url(self):
    return self._url

  @property
  def recursion_limit(self):
    """Returns > 0 if this dependency is not too recursed to be processed."""
    if self.recursion_override is not None:
      return self.recursion_override
    return max(self.parent.recursion_limit - 1, 0)

  @property
  def target_os(self):
    if self.local_target_os is not None:
      return tuple(set(self.local_target_os).union(self.parent.target_os))
    else:
      return self.parent.target_os

  def get_custom_deps(self, name, url):
    """Returns a custom deps if applicable."""
    if self.parent:
      url = self.parent.get_custom_deps(name, url)
    # None is a valid return value to disable a dependency.
    return self.custom_deps.get(name, url)


class Dependency(gclient_utils.WorkItem, DependencySettings):
  """Object that represents a dependency checkout."""

  def __init__(self, parent, name, url, safesync_url, managed, custom_deps,
               custom_vars, custom_hooks, deps_file, should_process):
    gclient_utils.WorkItem.__init__(self, name)
    DependencySettings.__init__(
        self, parent, url, safesync_url, managed, custom_deps, custom_vars,
        custom_hooks, deps_file, should_process)

    # This is in both .gclient and DEPS files:
    self._deps_hooks = []

    self._pre_deps_hooks = []

    # Calculates properties:
    self._parsed_url = None
    self._dependencies = []
    # A cache of the files affected by the current operation, necessary for
    # hooks.
    self._file_list = []
    # If it is not set to True, the dependency wasn't processed for its child
    # dependency, i.e. its DEPS wasn't read.
    self._deps_parsed = False
    # This dependency has been processed, i.e. checked out
    self._processed = False
    # This dependency had its pre-DEPS hooks run
    self._pre_deps_hooks_ran = False
    # This dependency had its hook run
    self._hooks_ran = False
    # This is the scm used to checkout self.url. It may be used by dependencies
    # to get the datetime of the revision we checked out.
    self._used_scm = None
    # The actual revision we ended up getting, or None if that information is
    # unavailable
    self._got_revision = None

    if not self.name and self.parent:
      raise gclient_utils.Error('Dependency without name')

  @property
  def requirements(self):
    """Calculate the list of requirements."""
    requirements = set()
    # self.parent is implicitly a requirement. This will be recursive by
    # definition.
    if self.parent and self.parent.name:
      requirements.add(self.parent.name)

    # For a tree with at least 2 levels*, the leaf node needs to depend
    # on the level higher up in an orderly way.
    # This becomes messy for >2 depth as the DEPS file format is a dictionary,
    # thus unsorted, while the .gclient format is a list thus sorted.
    #
    # * _recursion_limit is hard coded 2 and there is no hope to change this
    # value.
    #
    # Interestingly enough, the following condition only works in the case we
    # want: self is a 2nd level node. 3nd level node wouldn't need this since
    # they already have their parent as a requirement.
    if self.parent and self.parent.parent and not self.parent.parent.parent:
      requirements |= set(i.name for i in self.root.dependencies if i.name)

    if isinstance(self.url, self.FromImpl):
      requirements.add(self.url.module_name)

    if self.name:
      requirements |= set(
          obj.name for obj in self.root.subtree(False)
          if (obj is not self
              and obj.name and
              self.name.startswith(posixpath.join(obj.name, ''))))
    requirements = tuple(sorted(requirements))
    logging.info('Dependency(%s).requirements = %s' % (self.name, requirements))
    return requirements

  def verify_validity(self):
    """Verifies that this Dependency is fine to add as a child of another one.

    Returns True if this entry should be added, False if it is a duplicate of
    another entry.
    """
    logging.info('Dependency(%s).verify_validity()' % self.name)
    if self.name in [s.name for s in self.parent.dependencies]:
      raise gclient_utils.Error(
          'The same name "%s" appears multiple times in the deps section' %
              self.name)
    if not self.should_process:
      # Return early, no need to set requirements.
      return True

    # This require a full tree traversal with locks.
    siblings = [d for d in self.root.subtree(False) if d.name == self.name]
    for sibling in siblings:
      self_url = self.LateOverride(self.url)
      sibling_url = sibling.LateOverride(sibling.url)
      # Allow to have only one to be None or ''.
      if self_url != sibling_url and bool(self_url) == bool(sibling_url):
        raise gclient_utils.Error(
            ('Dependency %s specified more than once:\n'
            '  %s [%s]\n'
            'vs\n'
            '  %s [%s]') % (
              self.name,
              sibling.hierarchy(),
              sibling_url,
              self.hierarchy(),
              self_url))
      # In theory we could keep it as a shadow of the other one. In
      # practice, simply ignore it.
      logging.warn('Won\'t process duplicate dependency %s' % sibling)
      return False
    return True

  def LateOverride(self, url):
    """Resolves the parsed url from url.

    Manages From() keyword accordingly. Do not touch self.parsed_url nor
    self.url because it may called with other urls due to From()."""
    assert self.parsed_url == None or not self.should_process, self.parsed_url
    parsed_url = self.get_custom_deps(self.name, url)
    if parsed_url != url:
      logging.info(
          'Dependency(%s).LateOverride(%s) -> %s' %
          (self.name, url, parsed_url))
      return parsed_url

    if isinstance(url, self.FromImpl):
      # Requires tree traversal.
      ref = [
          dep for dep in self.root.subtree(True) if url.module_name == dep.name
      ]
      if not ref:
        raise gclient_utils.Error('Failed to find one reference to %s. %s' % (
            url.module_name, ref))
      # It may happen that len(ref) > 1 but it's no big deal.
      ref = ref[0]
      sub_target = url.sub_target_name or self.name
      found_deps = [d for d in ref.dependencies if d.name == sub_target]
      if len(found_deps) != 1:
        raise gclient_utils.Error(
            'Couldn\'t find %s in %s, referenced by %s (parent: %s)\n%s' % (
                sub_target, ref.name, self.name, self.parent.name,
                str(self.root)))

      # Call LateOverride() again.
      found_dep = found_deps[0]
      parsed_url = found_dep.LateOverride(found_dep.url)
      logging.info(
          'Dependency(%s).LateOverride(%s) -> %s (From)' %
          (self.name, url, parsed_url))
      return parsed_url

    if isinstance(url, basestring):
      parsed_url = urlparse.urlparse(url)
      if not parsed_url[0]:
        # A relative url. Fetch the real base.
        path = parsed_url[2]
        if not path.startswith('/'):
          raise gclient_utils.Error(
              'relative DEPS entry \'%s\' must begin with a slash' % url)
        # Create a scm just to query the full url.
        parent_url = self.parent.parsed_url
        if isinstance(parent_url, self.FileImpl):
          parent_url = parent_url.file_location
        scm = gclient_scm.CreateSCM(
            parent_url, self.root.root_dir, None, self.outbuf)
        parsed_url = scm.FullUrlForRelativeUrl(url)
      else:
        parsed_url = url
      logging.info(
          'Dependency(%s).LateOverride(%s) -> %s' %
          (self.name, url, parsed_url))
      return parsed_url

    if isinstance(url, self.FileImpl):
      logging.info(
          'Dependency(%s).LateOverride(%s) -> %s (File)' %
          (self.name, url, url))
      return url

    if url is None:
      logging.info(
          'Dependency(%s).LateOverride(%s) -> %s' % (self.name, url, url))
      return url

    raise gclient_utils.Error('Unknown url type')

  @staticmethod
  def MergeWithOsDeps(deps, deps_os, target_os_list):
    """Returns a new "deps" structure that is the deps sent in updated
    with information from deps_os (the deps_os section of the DEPS
    file) that matches the list of target os."""
    os_overrides = {}
    for the_target_os in target_os_list:
      the_target_os_deps = deps_os.get(the_target_os, {})
      for os_dep_key, os_dep_value in the_target_os_deps.iteritems():
        overrides = os_overrides.setdefault(os_dep_key, [])
        overrides.append((the_target_os, os_dep_value))

    # If any os didn't specify a value (we have fewer value entries
    # than in the os list), then it wants to use the default value.
    for os_dep_key, os_dep_value in os_overrides.iteritems():
      if len(os_dep_value) != len(target_os_list):
        # Record the default value too so that we don't accidently
        # set it to None or miss a conflicting DEPS.
        if os_dep_key in deps:
          os_dep_value.append(('default', deps[os_dep_key]))

    target_os_deps = {}
    for os_dep_key, os_dep_value in os_overrides.iteritems():
      # os_dep_value is a list of (os, value) pairs.
      possible_values = set(x[1] for x in os_dep_value if x[1] is not None)
      if not possible_values:
        target_os_deps[os_dep_key] = None
      else:
        if len(possible_values) > 1:
          # It would be possible to abort here but it would be
          # unfortunate if we end up preventing any kind of checkout.
          logging.error('Conflicting dependencies for %s: %s. (target_os=%s)',
                        os_dep_key, os_dep_value, target_os_list)
        # Sorting to get the same result every time in case of conflicts.
        target_os_deps[os_dep_key] = sorted(possible_values)[0]

    new_deps = deps.copy()
    new_deps.update(target_os_deps)
    return new_deps

  def ParseDepsFile(self):
    """Parses the DEPS file for this dependency."""
    assert not self.deps_parsed
    assert not self.dependencies
    # One thing is unintuitive, vars = {} must happen before Var() use.
    local_scope = {}
    var = self.VarImpl(self.custom_vars, local_scope)
    global_scope = {
      'File': self.FileImpl,
      'From': self.FromImpl,
      'Var': var.Lookup,
      'deps_os': {},
    }
    filepath = os.path.join(self.root.root_dir, self.name, self.deps_file)
    if not os.path.isfile(filepath):
      logging.info(
          'ParseDepsFile(%s): No %s file found at %s' % (
            self.name, self.deps_file, filepath))
    else:
      deps_content = gclient_utils.FileRead(filepath)
      logging.debug('ParseDepsFile(%s) read:\n%s' % (self.name, deps_content))
      # Eval the content.
      try:
        exec(deps_content, global_scope, local_scope)
      except SyntaxError, e:
        gclient_utils.SyntaxErrorToError(filepath, e)
    deps = local_scope.get('deps', {})
    if 'recursion' in local_scope:
      self.recursion_override = local_scope.get('recursion')
      logging.warning(
          'Setting %s recursion to %d.', self.name, self.recursion_limit)
    # If present, save 'target_os' in the local_target_os property.
    if 'target_os' in local_scope:
      self.local_target_os = local_scope['target_os']
    # load os specific dependencies if defined.  these dependencies may
    # override or extend the values defined by the 'deps' member.
    target_os_list = self.target_os
    if 'deps_os' in local_scope and target_os_list:
      deps = self.MergeWithOsDeps(deps, local_scope['deps_os'], target_os_list)

    # If a line is in custom_deps, but not in the solution, we want to append
    # this line to the solution.
    for d in self.custom_deps:
      if d not in deps:
        deps[d] = self.custom_deps[d]

    # If use_relative_paths is set in the DEPS file, regenerate
    # the dictionary using paths relative to the directory containing
    # the DEPS file.
    use_relative_paths = local_scope.get('use_relative_paths', False)
    if use_relative_paths:
      rel_deps = {}
      for d, url in deps.items():
        # normpath is required to allow DEPS to use .. in their
        # dependency local path.
        rel_deps[os.path.normpath(os.path.join(self.name, d))] = url
      deps = rel_deps

    # Convert the deps into real Dependency.
    deps_to_add = []
    for name, url in deps.iteritems():
      should_process = self.recursion_limit and self.should_process
      deps_to_add.append(Dependency(
          self, name, url, None, None, None, None, None,
          self.deps_file, should_process))
    deps_to_add.sort(key=lambda x: x.name)

    # override named sets of hooks by the custom hooks
    hooks_to_run = []
    hook_names_to_suppress = [c.get('name', '') for c in self.custom_hooks]
    for hook in local_scope.get('hooks', []):
      if hook.get('name', '') not in hook_names_to_suppress:
        hooks_to_run.append(hook)

    # add the replacements and any additions
    for hook in self.custom_hooks:
      if 'action' in hook:
        hooks_to_run.append(hook)

    self._pre_deps_hooks = [self.GetHookAction(hook, []) for hook in
                            local_scope.get('pre_deps_hooks', [])]

    self.add_dependencies_and_close(deps_to_add, hooks_to_run)
    logging.info('ParseDepsFile(%s) done' % self.name)

  def add_dependencies_and_close(self, deps_to_add, hooks):
    """Adds the dependencies, hooks and mark the parsing as done."""
    for dep in deps_to_add:
      if dep.verify_validity():
        self.add_dependency(dep)
    self._mark_as_parsed(hooks)

  def maybeGetParentRevision(
      self, command, options, parsed_url, parent_name, revision_overrides):
    """Uses revision/timestamp of parent if no explicit revision was specified.

    If we are performing an update and --transitive is set, use
    - the parent's revision if 'self.url' is in the same repository
    - the parent's timestamp otherwise
    to update 'self.url'. The used revision/timestamp will be set in
    'options.revision'.
    If we have an explicit revision do nothing.
    """
    if command == 'update' and options.transitive and not options.revision:
      _, revision = gclient_utils.SplitUrlRevision(parsed_url)
      if not revision:
        options.revision = revision_overrides.get(parent_name)
        if (options.revision and
            not gclient_utils.IsDateRevision(options.revision)):
          assert self.parent and self.parent.used_scm
          # If this dependency is in the same repository as parent it's url will
          # start with a slash. If so we take the parent revision instead of
          # it's timestamp.
          # (The timestamps of commits in google code are broken -- which can
          # result in dependencies to be checked out at the wrong revision)
          if self.url.startswith('/'):
            if options.verbose:
              print('Using parent\'s revision %s since we are in the same '
                    'repository.' % options.revision)
          else:
            parent_revision_date = self.parent.used_scm.GetRevisionDate(
                options.revision)
            options.revision = gclient_utils.MakeDateRevision(
                parent_revision_date)
            if options.verbose:
              print('Using parent\'s revision date %s since we are in a '
                    'different repository.' % options.revision)
          revision_overrides[self.name] = options.revision

  # Arguments number differs from overridden method
  # pylint: disable=W0221
  def run(self, revision_overrides, command, args, work_queue, options):
    """Runs |command| then parse the DEPS file."""
    logging.info('Dependency(%s).run()' % self.name)
    assert self._file_list == []
    if not self.should_process:
      return
    # When running runhooks, there's no need to consult the SCM.
    # All known hooks are expected to run unconditionally regardless of working
    # copy state, so skip the SCM status check.
    run_scm = command not in ('runhooks', 'recurse', None)
    parsed_url = self.LateOverride(self.url)
    file_list = [] if not options.nohooks else None
    if run_scm and parsed_url:
      if isinstance(parsed_url, self.FileImpl):
        # Special support for single-file checkout.
        if not command in (None, 'cleanup', 'diff', 'pack', 'status'):
          # Sadly, pylint doesn't realize that parsed_url is of FileImpl.
          # pylint: disable=E1103
          options.revision = parsed_url.GetRevision()
          self._used_scm = gclient_scm.SVNWrapper(
              parsed_url.GetPath(), self.root.root_dir, self.name,
              out_cb=work_queue.out_cb)
          self._used_scm.RunCommand('updatesingle',
              options, args + [parsed_url.GetFilename()], file_list)
      else:
        # Create a shallow copy to mutate revision.
        options = copy.copy(options)
        options.revision = revision_overrides.get(self.name)
        self.maybeGetParentRevision(
            command, options, parsed_url, self.parent.name, revision_overrides)
        self._used_scm = gclient_scm.CreateSCM(
            parsed_url, self.root.root_dir, self.name, self.outbuf,
            out_cb=work_queue.out_cb)
        self._got_revision = self._used_scm.RunCommand(command, options, args,
                                                       file_list)
        if file_list:
          file_list = [os.path.join(self.name, f.strip()) for f in file_list]

      # TODO(phajdan.jr): We should know exactly when the paths are absolute.
      # Convert all absolute paths to relative.
      for i in range(len(file_list or [])):
        # It depends on the command being executed (like runhooks vs sync).
        if not os.path.isabs(file_list[i]):
          continue
        prefix = os.path.commonprefix(
            [self.root.root_dir.lower(), file_list[i].lower()])
        file_list[i] = file_list[i][len(prefix):]
        # Strip any leading path separators.
        while file_list[i].startswith(('\\', '/')):
          file_list[i] = file_list[i][1:]

    # Always parse the DEPS file.
    self.ParseDepsFile()
    self._run_is_done(file_list or [], parsed_url)
    if command in ('update', 'revert') and not options.noprehooks:
      self.RunPreDepsHooks()

    if self.recursion_limit:
      # Parse the dependencies of this dependency.
      for s in self.dependencies:
        work_queue.enqueue(s)

    if command == 'recurse':
      if not isinstance(parsed_url, self.FileImpl):
        # Skip file only checkout.
        scm = gclient_scm.GetScmName(parsed_url)
        if not options.scm or scm in options.scm:
          cwd = os.path.normpath(os.path.join(self.root.root_dir, self.name))
          # Pass in the SCM type as an env variable.  Make sure we don't put
          # unicode strings in the environment.
          env = os.environ.copy()
          if scm:
            env['GCLIENT_SCM'] = str(scm)
          if parsed_url:
            env['GCLIENT_URL'] = str(parsed_url)
          env['GCLIENT_DEP_PATH'] = str(self.name)
          if options.prepend_dir and scm == 'git':
            print_stdout = False
            def filter_fn(line):
              """Git-specific path marshaling. It is optimized for git-grep."""

              def mod_path(git_pathspec):
                match = re.match('^(\\S+?:)?([^\0]+)$', git_pathspec)
                modified_path = os.path.join(self.name, match.group(2))
                branch = match.group(1) or ''
                return '%s%s' % (branch, modified_path)

              match = re.match('^Binary file ([^\0]+) matches$', line)
              if match:
                print 'Binary file %s matches\n' % mod_path(match.group(1))
                return

              items = line.split('\0')
              if len(items) == 2 and items[1]:
                print '%s : %s' % (mod_path(items[0]), items[1])
              elif len(items) >= 2:
                # Multiple null bytes or a single trailing null byte indicate
                # git is likely displaying filenames only (such as with -l)
                print '\n'.join(mod_path(path) for path in items if path)
              else:
                print line
          else:
            print_stdout = True
            filter_fn = None

          if parsed_url is None:
            print >> sys.stderr, 'Skipped omitted dependency %s' % cwd
          elif os.path.isdir(cwd):
            try:
              gclient_utils.CheckCallAndFilter(
                  args, cwd=cwd, env=env, print_stdout=print_stdout,
                  filter_fn=filter_fn,
                  )
            except subprocess2.CalledProcessError:
              if not options.ignore:
                raise
          else:
            print >> sys.stderr, 'Skipped missing %s' % cwd


  @gclient_utils.lockedmethod
  def _run_is_done(self, file_list, parsed_url):
    # Both these are kept for hooks that are run as a separate tree traversal.
    self._file_list = file_list
    self._parsed_url = parsed_url
    self._processed = True

  @staticmethod
  def GetHookAction(hook_dict, matching_file_list):
    """Turns a parsed 'hook' dict into an executable command."""
    logging.debug(hook_dict)
    logging.debug(matching_file_list)
    command = hook_dict['action'][:]
    if command[0] == 'python':
      # If the hook specified "python" as the first item, the action is a
      # Python script.  Run it by starting a new copy of the same
      # interpreter.
      command[0] = sys.executable
    if '$matching_files' in command:
      splice_index = command.index('$matching_files')
      command[splice_index:splice_index + 1] = matching_file_list
    return command

  def GetHooks(self, options):
    """Evaluates all hooks, and return them in a flat list.

    RunOnDeps() must have been called before to load the DEPS.
    """
    result = []
    if not self.should_process or not self.recursion_limit:
      # Don't run the hook when it is above recursion_limit.
      return result
    # If "--force" was specified, run all hooks regardless of what files have
    # changed.
    if self.deps_hooks:
      # TODO(maruel): If the user is using git or git-svn, then we don't know
      # what files have changed so we always run all hooks. It'd be nice to fix
      # that.
      if (options.force or
          isinstance(self.parsed_url, self.FileImpl) or
          gclient_scm.GetScmName(self.parsed_url) in ('git', None) or
          os.path.isdir(os.path.join(self.root.root_dir, self.name, '.git'))):
        for hook_dict in self.deps_hooks:
          result.append(self.GetHookAction(hook_dict, []))
      else:
        # Run hooks on the basis of whether the files from the gclient operation
        # match each hook's pattern.
        for hook_dict in self.deps_hooks:
          pattern = re.compile(hook_dict['pattern'])
          matching_file_list = [
              f for f in self.file_list_and_children if pattern.search(f)
          ]
          if matching_file_list:
            result.append(self.GetHookAction(hook_dict, matching_file_list))
    for s in self.dependencies:
      result.extend(s.GetHooks(options))
    return result

  def RunHooksRecursively(self, options):
    assert self.hooks_ran == False
    self._hooks_ran = True
    for hook in self.GetHooks(options):
      try:
        start_time = time.time()
        gclient_utils.CheckCallAndFilterAndHeader(
            hook, cwd=self.root.root_dir, always=True)
      except (gclient_utils.Error, subprocess2.CalledProcessError), e:
        # Use a discrete exit status code of 2 to indicate that a hook action
        # failed.  Users of this script may wish to treat hook action failures
        # differently from VC failures.
        print >> sys.stderr, 'Error: %s' % str(e)
        sys.exit(2)
      finally:
        elapsed_time = time.time() - start_time
        if elapsed_time > 10:
          print "Hook '%s' took %.2f secs" % (
              gclient_utils.CommandToStr(hook), elapsed_time)

  def RunPreDepsHooks(self):
    assert self.processed
    assert self.deps_parsed
    assert not self.pre_deps_hooks_ran
    assert not self.hooks_ran
    for s in self.dependencies:
      assert not s.processed
    self._pre_deps_hooks_ran = True
    for hook in self.pre_deps_hooks:
      try:
        start_time = time.time()
        gclient_utils.CheckCallAndFilterAndHeader(
            hook, cwd=self.root.root_dir, always=True)
      except (gclient_utils.Error, subprocess2.CalledProcessError), e:
        # Use a discrete exit status code of 2 to indicate that a hook action
        # failed.  Users of this script may wish to treat hook action failures
        # differently from VC failures.
        print >> sys.stderr, 'Error: %s' % str(e)
        sys.exit(2)
      finally:
        elapsed_time = time.time() - start_time
        if elapsed_time > 10:
          print "Hook '%s' took %.2f secs" % (
              gclient_utils.CommandToStr(hook), elapsed_time)


  def subtree(self, include_all):
    """Breadth first recursion excluding root node."""
    dependencies = self.dependencies
    for d in dependencies:
      if d.should_process or include_all:
        yield d
    for d in dependencies:
      for i in d.subtree(include_all):
        yield i

  def depth_first_tree(self):
    """Depth-first recursion including the root node."""
    yield self
    for i in self.dependencies:
      for j in i.depth_first_tree():
        if j.should_process:
          yield j

  @gclient_utils.lockedmethod
  def add_dependency(self, new_dep):
    self._dependencies.append(new_dep)

  @gclient_utils.lockedmethod
  def _mark_as_parsed(self, new_hooks):
    self._deps_hooks.extend(new_hooks)
    self._deps_parsed = True

  @property
  @gclient_utils.lockedmethod
  def dependencies(self):
    return tuple(self._dependencies)

  @property
  @gclient_utils.lockedmethod
  def deps_hooks(self):
    return tuple(self._deps_hooks)

  @property
  @gclient_utils.lockedmethod
  def pre_deps_hooks(self):
    return tuple(self._pre_deps_hooks)

  @property
  @gclient_utils.lockedmethod
  def parsed_url(self):
    return self._parsed_url

  @property
  @gclient_utils.lockedmethod
  def deps_parsed(self):
    """This is purely for debugging purposes. It's not used anywhere."""
    return self._deps_parsed

  @property
  @gclient_utils.lockedmethod
  def processed(self):
    return self._processed

  @property
  @gclient_utils.lockedmethod
  def pre_deps_hooks_ran(self):
    return self._pre_deps_hooks_ran

  @property
  @gclient_utils.lockedmethod
  def hooks_ran(self):
    return self._hooks_ran

  @property
  @gclient_utils.lockedmethod
  def file_list(self):
    return tuple(self._file_list)

  @property
  def used_scm(self):
    """SCMWrapper instance for this dependency or None if not processed yet."""
    return self._used_scm

  @property
  @gclient_utils.lockedmethod
  def got_revision(self):
    return self._got_revision

  @property
  def file_list_and_children(self):
    result = list(self.file_list)
    for d in self.dependencies:
      result.extend(d.file_list_and_children)
    return tuple(result)

  def __str__(self):
    out = []
    for i in ('name', 'url', 'parsed_url', 'safesync_url', 'custom_deps',
              'custom_vars', 'deps_hooks', 'file_list', 'should_process',
              'processed', 'hooks_ran', 'deps_parsed', 'requirements'):
      # First try the native property if it exists.
      if hasattr(self, '_' + i):
        value = getattr(self, '_' + i, False)
      else:
        value = getattr(self, i, False)
      if value:
        out.append('%s: %s' % (i, value))

    for d in self.dependencies:
      out.extend(['  ' + x for x in str(d).splitlines()])
      out.append('')
    return '\n'.join(out)

  def __repr__(self):
    return '%s: %s' % (self.name, self.url)

  def hierarchy(self):
    """Returns a human-readable hierarchical reference to a Dependency."""
    out = '%s(%s)' % (self.name, self.url)
    i = self.parent
    while i and i.name:
      out = '%s(%s) -> %s' % (i.name, i.url, out)
      i = i.parent
    return out


class GClient(Dependency):
  """Object that represent a gclient checkout. A tree of Dependency(), one per
  solution or DEPS entry."""

  DEPS_OS_CHOICES = {
    "win32": "win",
    "win": "win",
    "cygwin": "win",
    "darwin": "mac",
    "mac": "mac",
    "unix": "unix",
    "linux": "unix",
    "linux2": "unix",
    "linux3": "unix",
    "android": "android",
  }

  DEFAULT_CLIENT_FILE_TEXT = ("""\
solutions = [
  { "name"        : "%(solution_name)s",
    "url"         : "%(solution_url)s",
    "deps_file"   : "%(deps_file)s",
    "managed"     : %(managed)s,
    "custom_deps" : {
    },
    "safesync_url": "%(safesync_url)s",
  },
]
cache_dir = %(cache_dir)r
""")

  DEFAULT_SNAPSHOT_SOLUTION_TEXT = ("""\
  { "name"        : "%(solution_name)s",
    "url"         : "%(solution_url)s",
    "deps_file"   : "%(deps_file)s",
    "managed"     : %(managed)s,
    "custom_deps" : {
%(solution_deps)s    },
    "safesync_url": "%(safesync_url)s",
  },
""")

  DEFAULT_SNAPSHOT_FILE_TEXT = ("""\
# Snapshot generated with gclient revinfo --snapshot
solutions = [
%(solution_list)s]
""")

  def __init__(self, root_dir, options):
    # Do not change previous behavior. Only solution level and immediate DEPS
    # are processed.
    self._recursion_limit = 2
    Dependency.__init__(self, None, None, None, None, True, None, None, None,
                        'unused', True)
    self._options = options
    if options.deps_os:
      enforced_os = options.deps_os.split(',')
    else:
      enforced_os = [self.DEPS_OS_CHOICES.get(sys.platform, 'unix')]
    if 'all' in enforced_os:
      enforced_os = self.DEPS_OS_CHOICES.itervalues()
    self._enforced_os = tuple(set(enforced_os))
    self._root_dir = root_dir
    self.config_content = None

  def _CheckConfig(self):
    """Verify that the config matches the state of the existing checked-out
    solutions."""
    for dep in self.dependencies:
      if dep.managed and dep.url:
        scm = gclient_scm.CreateSCM(
            dep.url, self.root_dir, dep.name, self.outbuf)
        actual_url = scm.GetActualRemoteURL(self._options)
        if actual_url and not scm.DoesRemoteURLMatch(self._options):
          raise gclient_utils.Error('''
Your .gclient file seems to be broken. The requested URL is different from what
is actually checked out in %(checkout_path)s.

The .gclient file contains:
%(expected_url)s (%(expected_scm)s)

The local checkout in %(checkout_path)s reports:
%(actual_url)s (%(actual_scm)s)

You should ensure that the URL listed in .gclient is correct and either change
it or fix the checkout. If you're managing your own git checkout in
%(checkout_path)s but the URL in .gclient is for an svn repository, you probably
want to set 'managed': False in .gclient.
'''  % {'checkout_path': os.path.join(self.root_dir, dep.name),
        'expected_url': dep.url,
        'expected_scm': gclient_scm.GetScmName(dep.url),
        'actual_url': actual_url,
        'actual_scm': gclient_scm.GetScmName(actual_url)})

  def SetConfig(self, content):
    assert not self.dependencies
    config_dict = {}
    self.config_content = content
    try:
      exec(content, config_dict)
    except SyntaxError, e:
      gclient_utils.SyntaxErrorToError('.gclient', e)

    # Append any target OS that is not already being enforced to the tuple.
    target_os = config_dict.get('target_os', [])
    if config_dict.get('target_os_only', False):
      self._enforced_os = tuple(set(target_os))
    else:
      self._enforced_os = tuple(set(self._enforced_os).union(target_os))

    gclient_scm.GitWrapper.cache_dir = config_dict.get('cache_dir')
    git_cache.Mirror.SetCachePath(config_dict.get('cache_dir'))

    if not target_os and config_dict.get('target_os_only', False):
      raise gclient_utils.Error('Can\'t use target_os_only if target_os is '
                                'not specified')

    deps_to_add = []
    for s in config_dict.get('solutions', []):
      try:
        deps_to_add.append(Dependency(
            self, s['name'], s['url'],
            s.get('safesync_url', None),
            s.get('managed', True),
            s.get('custom_deps', {}),
            s.get('custom_vars', {}),
            s.get('custom_hooks', []),
            s.get('deps_file', 'DEPS'),
            True))
      except KeyError:
        raise gclient_utils.Error('Invalid .gclient file. Solution is '
                                  'incomplete: %s' % s)
    self.add_dependencies_and_close(deps_to_add, config_dict.get('hooks', []))
    logging.info('SetConfig() done')

  def SaveConfig(self):
    gclient_utils.FileWrite(os.path.join(self.root_dir,
                                         self._options.config_filename),
                            self.config_content)

  @staticmethod
  def LoadCurrentConfig(options):
    """Searches for and loads a .gclient file relative to the current working
    dir. Returns a GClient object."""
    if options.spec:
      client = GClient('.', options)
      client.SetConfig(options.spec)
    else:
      path = gclient_utils.FindGclientRoot(os.getcwd(), options.config_filename)
      if not path:
        return None
      client = GClient(path, options)
      client.SetConfig(gclient_utils.FileRead(
          os.path.join(path, options.config_filename)))

    if (options.revisions and
        len(client.dependencies) > 1 and
        any('@' not in r for r in options.revisions)):
      print >> sys.stderr, (
          'You must specify the full solution name like --revision %s@%s\n'
          'when you have multiple solutions setup in your .gclient file.\n'
          'Other solutions present are: %s.') % (
              client.dependencies[0].name,
              options.revisions[0],
              ', '.join(s.name for s in client.dependencies[1:]))
    return client

  def SetDefaultConfig(self, solution_name, deps_file, solution_url,
                       safesync_url, managed=True, cache_dir=None):
    self.SetConfig(self.DEFAULT_CLIENT_FILE_TEXT % {
      'solution_name': solution_name,
      'solution_url': solution_url,
      'deps_file': deps_file,
      'safesync_url' : safesync_url,
      'managed': managed,
      'cache_dir': cache_dir,
    })

  def _SaveEntries(self):
    """Creates a .gclient_entries file to record the list of unique checkouts.

    The .gclient_entries file lives in the same directory as .gclient.
    """
    # Sometimes pprint.pformat will use {', sometimes it'll use { ' ... It
    # makes testing a bit too fun.
    result = 'entries = {\n'
    for entry in self.root.subtree(False):
      # Skip over File() dependencies as we can't version them.
      if not isinstance(entry.parsed_url, self.FileImpl):
        result += '  %s: %s,\n' % (pprint.pformat(entry.name),
            pprint.pformat(entry.parsed_url))
    result += '}\n'
    file_path = os.path.join(self.root_dir, self._options.entries_filename)
    logging.debug(result)
    gclient_utils.FileWrite(file_path, result)

  def _ReadEntries(self):
    """Read the .gclient_entries file for the given client.

    Returns:
      A sequence of solution names, which will be empty if there is the
      entries file hasn't been created yet.
    """
    scope = {}
    filename = os.path.join(self.root_dir, self._options.entries_filename)
    if not os.path.exists(filename):
      return {}
    try:
      exec(gclient_utils.FileRead(filename), scope)
    except SyntaxError, e:
      gclient_utils.SyntaxErrorToError(filename, e)
    return scope['entries']

  def _EnforceRevisions(self):
    """Checks for revision overrides."""
    revision_overrides = {}
    if self._options.head:
      return revision_overrides
    # Do not check safesync_url if one or more --revision flag is specified.
    if not self._options.revisions:
      for s in self.dependencies:
        if not s.managed:
          self._options.revisions.append('%s@unmanaged' % s.name)
        elif s.safesync_url:
          self._ApplySafeSyncRev(dep=s)
    if not self._options.revisions:
      return revision_overrides
    solutions_names = [s.name for s in self.dependencies]
    index = 0
    for revision in self._options.revisions:
      if not '@' in revision:
        # Support for --revision 123
        revision = '%s@%s' % (solutions_names[index], revision)
      sol, rev = revision.split('@', 1)
      if not sol in solutions_names:
        #raise gclient_utils.Error('%s is not a valid solution.' % sol)
        print >> sys.stderr, ('Please fix your script, having invalid '
                              '--revision flags will soon considered an error.')
      else:
        revision_overrides[sol] = rev
      index += 1
    return revision_overrides

  def _ApplySafeSyncRev(self, dep):
    """Finds a valid revision from the content of the safesync_url and apply it
    by appending revisions to the revision list. Throws if revision appears to
    be invalid for the given |dep|."""
    assert len(dep.safesync_url) > 0
    handle = urllib.urlopen(dep.safesync_url)
    rev = handle.read().strip()
    handle.close()
    if not rev:
      raise gclient_utils.Error(
          'It appears your safesync_url (%s) is not working properly\n'
          '(as it returned an empty response). Check your config.' %
          dep.safesync_url)
    scm = gclient_scm.CreateSCM(
        dep.url, dep.root.root_dir, dep.name, self.outbuf)
    safe_rev = scm.GetUsableRev(rev, self._options)
    if self._options.verbose:
      print('Using safesync_url revision: %s.\n' % safe_rev)
    self._options.revisions.append('%s@%s' % (dep.name, safe_rev))

  def RunOnDeps(self, command, args, ignore_requirements=False, progress=True):
    """Runs a command on each dependency in a client and its dependencies.

    Args:
      command: The command to use (e.g., 'status' or 'diff')
      args: list of str - extra arguments to add to the command line.
    """
    if not self.dependencies:
      raise gclient_utils.Error('No solution specified')

    self._CheckConfig()

    revision_overrides = {}
    # It's unnecessary to check for revision overrides for 'recurse'.
    # Save a few seconds by not calling _EnforceRevisions() in that case.
    if command not in ('diff', 'recurse', 'runhooks', 'status'):
      revision_overrides = self._EnforceRevisions()
    pm = None
    # Disable progress for non-tty stdout.
    if (sys.stdout.isatty() and not self._options.verbose and progress):
      if command in ('update', 'revert'):
        pm = Progress('Syncing projects', 1)
      elif command == 'recurse':
        pm = Progress(' '.join(args), 1)
    work_queue = gclient_utils.ExecutionQueue(
        self._options.jobs, pm, ignore_requirements=ignore_requirements,
        verbose=self._options.verbose)
    for s in self.dependencies:
      work_queue.enqueue(s)
    work_queue.flush(revision_overrides, command, args, options=self._options)

    # Once all the dependencies have been processed, it's now safe to run the
    # hooks.
    if not self._options.nohooks:
      self.RunHooksRecursively(self._options)

    if command == 'update':
      # Notify the user if there is an orphaned entry in their working copy.
      # Only delete the directory if there are no changes in it, and
      # delete_unversioned_trees is set to true.
      entries = [i.name for i in self.root.subtree(False) if i.url]
      full_entries = [os.path.join(self.root_dir, e.replace('/', os.path.sep))
                      for e in entries]

      for entry, prev_url in self._ReadEntries().iteritems():
        if not prev_url:
          # entry must have been overridden via .gclient custom_deps
          continue
        # Fix path separator on Windows.
        entry_fixed = entry.replace('/', os.path.sep)
        e_dir = os.path.join(self.root_dir, entry_fixed)

        def _IsParentOfAny(parent, path_list):
          parent_plus_slash = parent + '/'
          return any(
              path[:len(parent_plus_slash)] == parent_plus_slash
              for path in path_list)

        # Use entry and not entry_fixed there.
        if (entry not in entries and
            (not any(path.startswith(entry + '/') for path in entries)) and
            os.path.exists(e_dir)):
          scm = gclient_scm.CreateSCM(
              prev_url, self.root_dir, entry_fixed, self.outbuf)

          # Check to see if this directory is now part of a higher-up checkout.
          if scm.GetCheckoutRoot() in full_entries:
            logging.info('%s is part of a higher level checkout, not '
                         'removing.', scm.GetCheckoutRoot())
            continue

          file_list = []
          scm.status(self._options, [], file_list)
          modified_files = file_list != []
          if (not self._options.delete_unversioned_trees or
              (modified_files and not self._options.force)):
            # There are modified files in this entry. Keep warning until
            # removed.
            print(('\nWARNING: \'%s\' is no longer part of this client.  '
                   'It is recommended that you manually remove it.\n') %
                      entry_fixed)
          else:
            # Delete the entry
            print('\n________ deleting \'%s\' in \'%s\'' % (
                entry_fixed, self.root_dir))
            gclient_utils.rmtree(e_dir)
      # record the current list of entries for next time
      self._SaveEntries()
    return 0

  def PrintRevInfo(self):
    if not self.dependencies:
      raise gclient_utils.Error('No solution specified')
    # Load all the settings.
    work_queue = gclient_utils.ExecutionQueue(
        self._options.jobs, None, False, verbose=self._options.verbose)
    for s in self.dependencies:
      work_queue.enqueue(s)
    work_queue.flush({}, None, [], options=self._options)

    def GetURLAndRev(dep):
      """Returns the revision-qualified SCM url for a Dependency."""
      if dep.parsed_url is None:
        return None
      if isinstance(dep.parsed_url, self.FileImpl):
        original_url = dep.parsed_url.file_location
      else:
        original_url = dep.parsed_url
      url, _ = gclient_utils.SplitUrlRevision(original_url)
      scm = gclient_scm.CreateSCM(
          original_url, self.root_dir, dep.name, self.outbuf)
      if not os.path.isdir(scm.checkout_path):
        return None
      return '%s@%s' % (url, scm.revinfo(self._options, [], None))

    if self._options.snapshot:
      new_gclient = ''
      # First level at .gclient
      for d in self.dependencies:
        entries = {}
        def GrabDeps(dep):
          """Recursively grab dependencies."""
          for d in dep.dependencies:
            entries[d.name] = GetURLAndRev(d)
            GrabDeps(d)
        GrabDeps(d)
        custom_deps = []
        for k in sorted(entries.keys()):
          if entries[k]:
            # Quotes aren't escaped...
            custom_deps.append('      \"%s\": \'%s\',\n' % (k, entries[k]))
          else:
            custom_deps.append('      \"%s\": None,\n' % k)
        new_gclient += self.DEFAULT_SNAPSHOT_SOLUTION_TEXT % {
            'solution_name': d.name,
            'solution_url': d.url,
            'deps_file': d.deps_file,
            'safesync_url' : d.safesync_url or '',
            'managed': d.managed,
            'solution_deps': ''.join(custom_deps),
        }
      # Print the snapshot configuration file
      print(self.DEFAULT_SNAPSHOT_FILE_TEXT % {'solution_list': new_gclient})
    else:
      entries = {}
      for d in self.root.subtree(False):
        if self._options.actual:
          entries[d.name] = GetURLAndRev(d)
        else:
          entries[d.name] = d.parsed_url
      keys = sorted(entries.keys())
      for x in keys:
        print('%s: %s' % (x, entries[x]))
    logging.info(str(self))

  def ParseDepsFile(self):
    """No DEPS to parse for a .gclient file."""
    raise gclient_utils.Error('Internal error')

  @property
  def root_dir(self):
    """Root directory of gclient checkout."""
    return self._root_dir

  @property
  def enforced_os(self):
    """What deps_os entries that are to be parsed."""
    return self._enforced_os

  @property
  def recursion_limit(self):
    """How recursive can each dependencies in DEPS file can load DEPS file."""
    return self._recursion_limit

  @property
  def target_os(self):
    return self._enforced_os


#### gclient commands.


def CMDcleanup(parser, args):
  """Cleans up all working copies.

  Mostly svn-specific. Simply runs 'svn cleanup' for each module.
  """
  parser.add_option('--deps', dest='deps_os', metavar='OS_LIST',
                    help='override deps for the specified (comma-separated) '
                         'platform(s); \'all\' will process all deps_os '
                         'references')
  (options, args) = parser.parse_args(args)
  client = GClient.LoadCurrentConfig(options)
  if not client:
    raise gclient_utils.Error('client not configured; see \'gclient config\'')
  if options.verbose:
    # Print out the .gclient file.  This is longer than if we just printed the
    # client dict, but more legible, and it might contain helpful comments.
    print(client.config_content)
  return client.RunOnDeps('cleanup', args)


@subcommand.usage('[command] [args ...]')
def CMDrecurse(parser, args):
  """Operates [command args ...] on all the dependencies.

  Runs a shell command on all entries.
  Sets GCLIENT_DEP_PATH enviroment variable as the dep's relative location to
  root directory of the checkout.
  """
  # Stop parsing at the first non-arg so that these go through to the command
  parser.disable_interspersed_args()
  parser.add_option('-s', '--scm', action='append', default=[],
                    help='Choose scm types to operate upon.')
  parser.add_option('-i', '--ignore', action='store_true',
                    help='Ignore non-zero return codes from subcommands.')
  parser.add_option('--prepend-dir', action='store_true',
                    help='Prepend relative dir for use with git <cmd> --null.')
  parser.add_option('--no-progress', action='store_true',
                    help='Disable progress bar that shows sub-command updates')
  options, args = parser.parse_args(args)
  if not args:
    print >> sys.stderr, 'Need to supply a command!'
    return 1
  root_and_entries = gclient_utils.GetGClientRootAndEntries()
  if not root_and_entries:
    print >> sys.stderr, (
        'You need to run gclient sync at least once to use \'recurse\'.\n'
        'This is because .gclient_entries needs to exist and be up to date.')
    return 1

  # Normalize options.scm to a set()
  scm_set = set()
  for scm in options.scm:
    scm_set.update(scm.split(','))
  options.scm = scm_set

  options.nohooks = True
  client = GClient.LoadCurrentConfig(options)
  return client.RunOnDeps('recurse', args, ignore_requirements=True,
                          progress=not options.no_progress)


@subcommand.usage('[args ...]')
def CMDfetch(parser, args):
  """Fetches upstream commits for all modules.

  Completely git-specific. Simply runs 'git fetch [args ...]' for each module.
  """
  (options, args) = parser.parse_args(args)
  return CMDrecurse(OptionParser(), [
      '--jobs=%d' % options.jobs, '--scm=git', 'git', 'fetch'] + args)


def CMDgrep(parser, args):
  """Greps through git repos managed by gclient.

  Runs 'git grep [args...]' for each module.
  """
  # We can't use optparse because it will try to parse arguments sent
  # to git grep and throw an error. :-(
  if not args or re.match('(-h|--help)$', args[0]):
    print >> sys.stderr, (
        'Usage: gclient grep [-j <N>] git-grep-args...\n\n'
        'Example: "gclient grep -j10 -A2 RefCountedBase" runs\n"git grep '
        '-A2 RefCountedBase" on each of gclient\'s git\nrepos with up to '
        '10 jobs.\n\nBonus: page output by appending "|& less -FRSX" to the'
        ' end of your query.'
        )
    return 1

  jobs_arg = ['--jobs=1']
  if re.match(r'(-j|--jobs=)\d+$', args[0]):
    jobs_arg, args = args[:1], args[1:]
  elif re.match(r'(-j|--jobs)$', args[0]):
    jobs_arg, args = args[:2], args[2:]

  return CMDrecurse(
      parser,
      jobs_arg + ['--ignore', '--prepend-dir', '--no-progress', '--scm=git',
                  'git', 'grep', '--null', '--color=Always'] + args)


@subcommand.usage('[url] [safesync url]')
def CMDconfig(parser, args):
  """Creates a .gclient file in the current directory.

  This specifies the configuration for further commands. After update/sync,
  top-level DEPS files in each module are read to determine dependent
  modules to operate on as well. If optional [url] parameter is
  provided, then configuration is read from a specified Subversion server
  URL.
  """
  # We do a little dance with the --gclientfile option.  'gclient config' is the
  # only command where it's acceptable to have both '--gclientfile' and '--spec'
  # arguments.  So, we temporarily stash any --gclientfile parameter into
  # options.output_config_file until after the (gclientfile xor spec) error
  # check.
  parser.remove_option('--gclientfile')
  parser.add_option('--gclientfile', dest='output_config_file',
                    help='Specify an alternate .gclient file')
  parser.add_option('--name',
                    help='overrides the default name for the solution')
  parser.add_option('--deps-file', default='DEPS',
                    help='overrides the default name for the DEPS file for the'
                         'main solutions and all sub-dependencies')
  parser.add_option('--unmanaged', action='store_true', default=False,
                    help='overrides the default behavior to make it possible '
                         'to have the main solution untouched by gclient '
                         '(gclient will check out unmanaged dependencies but '
                         'will never sync them)')
  parser.add_option('--git-deps', action='store_true',
                    help='sets the deps file to ".DEPS.git" instead of "DEPS"')
  parser.add_option('--cache-dir',
                    help='(git only) Cache all git repos into this dir and do '
                         'shared clones from the cache, instead of cloning '
                         'directly from the remote. (experimental)')
  parser.set_defaults(config_filename=None)
  (options, args) = parser.parse_args(args)
  if options.output_config_file:
    setattr(options, 'config_filename', getattr(options, 'output_config_file'))
  if ((options.spec and args) or len(args) > 2 or
      (not options.spec and not args)):
    parser.error('Inconsistent arguments. Use either --spec or one or 2 args')

  client = GClient('.', options)
  if options.spec:
    client.SetConfig(options.spec)
  else:
    base_url = args[0].rstrip('/')
    if not options.name:
      name = base_url.split('/')[-1]
      if name.endswith('.git'):
        name = name[:-4]
    else:
      # specify an alternate relpath for the given URL.
      name = options.name
    deps_file = options.deps_file
    if options.git_deps:
      deps_file = '.DEPS.git'
    safesync_url = ''
    if len(args) > 1:
      safesync_url = args[1]
    client.SetDefaultConfig(name, deps_file, base_url, safesync_url,
                            managed=not options.unmanaged,
                            cache_dir=options.cache_dir)
  client.SaveConfig()
  return 0


@subcommand.epilog("""Example:
  gclient pack > patch.txt
    generate simple patch for configured client and dependences
""")
def CMDpack(parser, args):
  """Generates a patch which can be applied at the root of the tree.

  Internally, runs 'svn diff'/'git diff' on each checked out module and
  dependencies, and performs minimal postprocessing of the output. The
  resulting patch is printed to stdout and can be applied to a freshly
  checked out tree via 'patch -p0 < patchfile'.
  """
  parser.add_option('--deps', dest='deps_os', metavar='OS_LIST',
                    help='override deps for the specified (comma-separated) '
                         'platform(s); \'all\' will process all deps_os '
                         'references')
  parser.remove_option('--jobs')
  (options, args) = parser.parse_args(args)
  # Force jobs to 1 so the stdout is not annotated with the thread ids
  options.jobs = 1
  client = GClient.LoadCurrentConfig(options)
  if not client:
    raise gclient_utils.Error('client not configured; see \'gclient config\'')
  if options.verbose:
    # Print out the .gclient file.  This is longer than if we just printed the
    # client dict, but more legible, and it might contain helpful comments.
    print(client.config_content)
  return client.RunOnDeps('pack', args)


def CMDstatus(parser, args):
  """Shows modification status for every dependencies."""
  parser.add_option('--deps', dest='deps_os', metavar='OS_LIST',
                    help='override deps for the specified (comma-separated) '
                         'platform(s); \'all\' will process all deps_os '
                         'references')
  (options, args) = parser.parse_args(args)
  client = GClient.LoadCurrentConfig(options)
  if not client:
    raise gclient_utils.Error('client not configured; see \'gclient config\'')
  if options.verbose:
    # Print out the .gclient file.  This is longer than if we just printed the
    # client dict, but more legible, and it might contain helpful comments.
    print(client.config_content)
  return client.RunOnDeps('status', args)


@subcommand.epilog("""Examples:
  gclient sync
      update files from SCM according to current configuration,
      *for modules which have changed since last update or sync*
  gclient sync --force
      update files from SCM according to current configuration, for
      all modules (useful for recovering files deleted from local copy)
  gclient sync --revision src@31000
      update src directory to r31000

JSON output format:
If the --output-json option is specified, the following document structure will
be emitted to the provided file. 'null' entries may occur for subprojects which
are present in the gclient solution, but were not processed (due to custom_deps,
os_deps, etc.)

{
  "solutions" : {
    "<name>": {  # <name> is the posix-normalized path to the solution.
      "revision": [<svn rev int>|<git id hex string>|null],
      "scm": ["svn"|"git"|null],
    }
  }
}
""")
def CMDsync(parser, args):
  """Checkout/update all modules."""
  parser.add_option('-f', '--force', action='store_true',
                    help='force update even for unchanged modules')
  parser.add_option('-n', '--nohooks', action='store_true',
                    help='don\'t run hooks after the update is complete')
  parser.add_option('-p', '--noprehooks', action='store_true',
                    help='don\'t run pre-DEPS hooks', default=False)
  parser.add_option('-r', '--revision', action='append',
                    dest='revisions', metavar='REV', default=[],
                    help='Enforces revision/hash for the solutions with the '
                         'format src@rev. The src@ part is optional and can be '
                         'skipped. -r can be used multiple times when .gclient '
                         'has multiple solutions configured and will work even '
                         'if the src@ part is skipped. Note that specifying '
                         '--revision means your safesync_url gets ignored.')
  parser.add_option('--with_branch_heads', action='store_true',
                    help='Clone git "branch_heads" refspecs in addition to '
                         'the default refspecs. This adds about 1/2GB to a '
                         'full checkout. (git only)')
  parser.add_option('-t', '--transitive', action='store_true',
                    help='When a revision is specified (in the DEPS file or '
                          'with the command-line flag), transitively update '
                          'the dependencies to the date of the given revision. '
                          'Only supported for SVN repositories.')
  parser.add_option('-H', '--head', action='store_true',
                    help='skips any safesync_urls specified in '
                         'configured solutions and sync to head instead')
  parser.add_option('-D', '--delete_unversioned_trees', action='store_true',
                    help='Deletes from the working copy any dependencies that '
                         'have been removed since the last sync, as long as '
                         'there are no local modifications. When used with '
                         '--force, such dependencies are removed even if they '
                         'have local modifications. When used with --reset, '
                         'all untracked directories are removed from the '
                         'working copy, excluding those which are explicitly '
                         'ignored in the repository.')
  parser.add_option('-R', '--reset', action='store_true',
                    help='resets any local changes before updating (git only)')
  parser.add_option('-M', '--merge', action='store_true',
                    help='merge upstream changes instead of trying to '
                         'fast-forward or rebase')
  parser.add_option('--deps', dest='deps_os', metavar='OS_LIST',
                    help='override deps for the specified (comma-separated) '
                         'platform(s); \'all\' will process all deps_os '
                         'references')
  parser.add_option('-m', '--manually_grab_svn_rev', action='store_true',
                    help='Skip svn up whenever possible by requesting '
                         'actual HEAD revision from the repository')
  parser.add_option('--upstream', action='store_true',
                    help='Make repo state match upstream branch.')
  parser.add_option('--output-json',
                    help='Output a json document to this path containing '
                         'summary information about the sync.')
  (options, args) = parser.parse_args(args)
  client = GClient.LoadCurrentConfig(options)

  if not client:
    raise gclient_utils.Error('client not configured; see \'gclient config\'')

  if options.revisions and options.head:
    # TODO(maruel): Make it a parser.error if it doesn't break any builder.
    print('Warning: you cannot use both --head and --revision')

  if options.verbose:
    # Print out the .gclient file.  This is longer than if we just printed the
    # client dict, but more legible, and it might contain helpful comments.
    print(client.config_content)
  ret = client.RunOnDeps('update', args)
  if options.output_json:
    slns = {}
    for d in client.subtree(True):
      normed = d.name.replace('\\', '/').rstrip('/') + '/'
      slns[normed] = {
          'revision': d.got_revision,
          'scm': d.used_scm.name if d.used_scm else None,
      }
    with open(options.output_json, 'wb') as f:
      json.dump({'solutions': slns}, f)
  return ret


CMDupdate = CMDsync


def CMDdiff(parser, args):
  """Displays local diff for every dependencies."""
  parser.add_option('--deps', dest='deps_os', metavar='OS_LIST',
                    help='override deps for the specified (comma-separated) '
                         'platform(s); \'all\' will process all deps_os '
                         'references')
  (options, args) = parser.parse_args(args)
  client = GClient.LoadCurrentConfig(options)
  if not client:
    raise gclient_utils.Error('client not configured; see \'gclient config\'')
  if options.verbose:
    # Print out the .gclient file.  This is longer than if we just printed the
    # client dict, but more legible, and it might contain helpful comments.
    print(client.config_content)
  return client.RunOnDeps('diff', args)


def CMDrevert(parser, args):
  """Reverts all modifications in every dependencies.

  That's the nuclear option to get back to a 'clean' state. It removes anything
  that shows up in svn status."""
  parser.add_option('--deps', dest='deps_os', metavar='OS_LIST',
                    help='override deps for the specified (comma-separated) '
                         'platform(s); \'all\' will process all deps_os '
                         'references')
  parser.add_option('-n', '--nohooks', action='store_true',
                    help='don\'t run hooks after the revert is complete')
  parser.add_option('-p', '--noprehooks', action='store_true',
                    help='don\'t run pre-DEPS hooks', default=False)
  parser.add_option('--upstream', action='store_true',
                    help='Make repo state match upstream branch.')
  (options, args) = parser.parse_args(args)
  # --force is implied.
  options.force = True
  options.reset = False
  options.delete_unversioned_trees = False
  client = GClient.LoadCurrentConfig(options)
  if not client:
    raise gclient_utils.Error('client not configured; see \'gclient config\'')
  return client.RunOnDeps('revert', args)


def CMDrunhooks(parser, args):
  """Runs hooks for files that have been modified in the local working copy."""
  parser.add_option('--deps', dest='deps_os', metavar='OS_LIST',
                    help='override deps for the specified (comma-separated) '
                         'platform(s); \'all\' will process all deps_os '
                         'references')
  parser.add_option('-f', '--force', action='store_true', default=True,
                    help='Deprecated. No effect.')
  (options, args) = parser.parse_args(args)
  client = GClient.LoadCurrentConfig(options)
  if not client:
    raise gclient_utils.Error('client not configured; see \'gclient config\'')
  if options.verbose:
    # Print out the .gclient file.  This is longer than if we just printed the
    # client dict, but more legible, and it might contain helpful comments.
    print(client.config_content)
  options.force = True
  options.nohooks = False
  return client.RunOnDeps('runhooks', args)


def CMDrevinfo(parser, args):
  """Outputs revision info mapping for the client and its dependencies.

  This allows the capture of an overall 'revision' for the source tree that
  can be used to reproduce the same tree in the future. It is only useful for
  'unpinned dependencies', i.e. DEPS/deps references without a svn revision
  number or a git hash. A git branch name isn't 'pinned' since the actual
  commit can change.
  """
  parser.add_option('--deps', dest='deps_os', metavar='OS_LIST',
                    help='override deps for the specified (comma-separated) '
                         'platform(s); \'all\' will process all deps_os '
                         'references')
  parser.add_option('-a', '--actual', action='store_true',
                    help='gets the actual checked out revisions instead of the '
                         'ones specified in the DEPS and .gclient files')
  parser.add_option('-s', '--snapshot', action='store_true',
                    help='creates a snapshot .gclient file of the current '
                         'version of all repositories to reproduce the tree, '
                         'implies -a')
  (options, args) = parser.parse_args(args)
  client = GClient.LoadCurrentConfig(options)
  if not client:
    raise gclient_utils.Error('client not configured; see \'gclient config\'')
  client.PrintRevInfo()
  return 0


def CMDhookinfo(parser, args):
  """Outputs the hooks that would be run by `gclient runhooks`."""
  (options, args) = parser.parse_args(args)
  options.force = True
  client = GClient.LoadCurrentConfig(options)
  if not client:
    raise gclient_utils.Error('client not configured; see \'gclient config\'')
  client.RunOnDeps(None, [])
  print '; '.join(' '.join(hook) for hook in client.GetHooks(options))
  return 0


class OptionParser(optparse.OptionParser):
  gclientfile_default = os.environ.get('GCLIENT_FILE', '.gclient')

  def __init__(self, **kwargs):
    optparse.OptionParser.__init__(
        self, version='%prog ' + __version__, **kwargs)

    # Some arm boards have issues with parallel sync.
    if platform.machine().startswith('arm'):
      jobs = 1
    else:
      jobs = max(8, gclient_utils.NumLocalCpus())
    # cmp: 2013/06/19
    # Temporary workaround to lower bot-load on SVN server.
    # Bypassed if a bot_update flag is detected.
    if (os.environ.get('CHROME_HEADLESS') == '1' and
        not os.path.exists('update.flag')):
      jobs = 1

    self.add_option(
        '-j', '--jobs', default=jobs, type='int',
        help='Specify how many SCM commands can run in parallel; defaults to '
             '%default on this machine')
    self.add_option(
        '-v', '--verbose', action='count', default=0,
        help='Produces additional output for diagnostics. Can be used up to '
             'three times for more logging info.')
    self.add_option(
        '--gclientfile', dest='config_filename',
        help='Specify an alternate %s file' % self.gclientfile_default)
    self.add_option(
        '--spec',
        help='create a gclient file containing the provided string. Due to '
            'Cygwin/Python brokenness, it can\'t contain any newlines.')
    self.add_option(
        '--no-nag-max', default=False, action='store_true',
        help='Ignored for backwards compatibility.')

  def parse_args(self, args=None, values=None):
    """Integrates standard options processing."""
    options, args = optparse.OptionParser.parse_args(self, args, values)
    levels = [logging.ERROR, logging.WARNING, logging.INFO, logging.DEBUG]
    logging.basicConfig(
        level=levels[min(options.verbose, len(levels) - 1)],
        format='%(module)s(%(lineno)d) %(funcName)s:%(message)s')
    if options.config_filename and options.spec:
      self.error('Cannot specifiy both --gclientfile and --spec')
    if (options.config_filename and
        options.config_filename != os.path.basename(options.config_filename)):
      self.error('--gclientfile target must be a filename, not a path')
    if not options.config_filename:
      options.config_filename = self.gclientfile_default
    options.entries_filename = options.config_filename + '_entries'
    if options.jobs < 1:
      self.error('--jobs must be 1 or higher')

    # These hacks need to die.
    if not hasattr(options, 'revisions'):
      # GClient.RunOnDeps expects it even if not applicable.
      options.revisions = []
    if not hasattr(options, 'head'):
      options.head = None
    if not hasattr(options, 'nohooks'):
      options.nohooks = True
    if not hasattr(options, 'noprehooks'):
      options.noprehooks = True
    if not hasattr(options, 'deps_os'):
      options.deps_os = None
    if not hasattr(options, 'manually_grab_svn_rev'):
      options.manually_grab_svn_rev = None
    if not hasattr(options, 'force'):
      options.force = None
    return (options, args)


def disable_buffering():
  # Make stdout auto-flush so buildbot doesn't kill us during lengthy
  # operations. Python as a strong tendency to buffer sys.stdout.
  sys.stdout = gclient_utils.MakeFileAutoFlush(sys.stdout)
  # Make stdout annotated with the thread ids.
  sys.stdout = gclient_utils.MakeFileAnnotated(sys.stdout)


def Main(argv):
  """Doesn't parse the arguments here, just find the right subcommand to
  execute."""
  if sys.hexversion < 0x02060000:
    print >> sys.stderr, (
        '\nYour python version %s is unsupported, please upgrade.\n' %
        sys.version.split(' ', 1)[0])
    return 2
  if not sys.executable:
    print >> sys.stderr, (
        '\nPython cannot find the location of it\'s own executable.\n')
    return 2
  fix_encoding.fix_encoding()
  disable_buffering()
  colorama.init()
  dispatcher = subcommand.CommandDispatcher(__name__)
  try:
    return dispatcher.execute(OptionParser(), argv)
  except KeyboardInterrupt:
    gclient_utils.GClientChildren.KillAllRemainingChildren()
    raise
  except (gclient_utils.Error, subprocess2.CalledProcessError), e:
    print >> sys.stderr, 'Error: %s' % str(e)
    return 1
  finally:
    gclient_utils.PrintWarnings()


if '__main__' == __name__:
  sys.exit(Main(sys.argv[1:]))

# vim: ts=2:sw=2:tw=80:et:

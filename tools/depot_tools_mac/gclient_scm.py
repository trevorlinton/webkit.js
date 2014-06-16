# Copyright (c) 2012 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

"""Gclient-specific SCM-specific operations."""

from __future__ import print_function

import logging
import os
import posixpath
import re
import shlex
import sys
import tempfile
import traceback
import urlparse

import download_from_google_storage
import gclient_utils
import git_cache
import scm
import subprocess2


THIS_FILE_PATH = os.path.abspath(__file__)

GSUTIL_DEFAULT_PATH = os.path.join(
    os.path.dirname(os.path.abspath(__file__)),
    'third_party', 'gsutil', 'gsutil')

CHROMIUM_SRC_URL = 'https://chromium.googlesource.com/chromium/src.git'
class DiffFiltererWrapper(object):
  """Simple base class which tracks which file is being diffed and
  replaces instances of its file name in the original and
  working copy lines of the svn/git diff output."""
  index_string = None
  original_prefix = "--- "
  working_prefix = "+++ "

  def __init__(self, relpath, print_func):
    # Note that we always use '/' as the path separator to be
    # consistent with svn's cygwin-style output on Windows
    self._relpath = relpath.replace("\\", "/")
    self._current_file = None
    self._print_func = print_func

  def SetCurrentFile(self, current_file):
    self._current_file = current_file

  @property
  def _replacement_file(self):
    return posixpath.join(self._relpath, self._current_file)

  def _Replace(self, line):
    return line.replace(self._current_file, self._replacement_file)

  def Filter(self, line):
    if (line.startswith(self.index_string)):
      self.SetCurrentFile(line[len(self.index_string):])
      line = self._Replace(line)
    else:
      if (line.startswith(self.original_prefix) or
          line.startswith(self.working_prefix)):
        line = self._Replace(line)
    self._print_func(line)


class SvnDiffFilterer(DiffFiltererWrapper):
  index_string = "Index: "


class GitDiffFilterer(DiffFiltererWrapper):
  index_string = "diff --git "

  def SetCurrentFile(self, current_file):
    # Get filename by parsing "a/<filename> b/<filename>"
    self._current_file = current_file[:(len(current_file)/2)][2:]

  def _Replace(self, line):
    return re.sub("[a|b]/" + self._current_file, self._replacement_file, line)


### SCM abstraction layer

# Factory Method for SCM wrapper creation

def GetScmName(url):
  if url:
    url, _ = gclient_utils.SplitUrlRevision(url)
    if (url.startswith('git://') or url.startswith('ssh://') or
        url.startswith('git+http://') or url.startswith('git+https://') or
        url.endswith('.git') or url.startswith('sso://')):
      return 'git'
    elif (url.startswith('http://') or url.startswith('https://') or
          url.startswith('svn://') or url.startswith('svn+ssh://')):
      return 'svn'
  return None


def CreateSCM(url, root_dir=None, relpath=None, out_fh=None, out_cb=None):
  SCM_MAP = {
    'svn' : SVNWrapper,
    'git' : GitWrapper,
  }

  scm_name = GetScmName(url)
  if not scm_name in SCM_MAP:
    raise gclient_utils.Error('No SCM found for url %s' % url)
  scm_class = SCM_MAP[scm_name]
  if not scm_class.BinaryExists():
    raise gclient_utils.Error('%s command not found' % scm_name)
  return scm_class(url, root_dir, relpath, out_fh, out_cb)


# SCMWrapper base class

class SCMWrapper(object):
  """Add necessary glue between all the supported SCM.

  This is the abstraction layer to bind to different SCM.
  """

  def __init__(self, url=None, root_dir=None, relpath=None, out_fh=None,
               out_cb=None):
    self.url = url
    self._root_dir = root_dir
    if self._root_dir:
      self._root_dir = self._root_dir.replace('/', os.sep)
    self.relpath = relpath
    if self.relpath:
      self.relpath = self.relpath.replace('/', os.sep)
    if self.relpath and self._root_dir:
      self.checkout_path = os.path.join(self._root_dir, self.relpath)
    if out_fh is None:
      out_fh = sys.stdout
    self.out_fh = out_fh
    self.out_cb = out_cb

  def Print(self, *args, **kwargs):
    kwargs.setdefault('file', self.out_fh)
    if kwargs.pop('timestamp', True):
      self.out_fh.write('[%s] ' % gclient_utils.Elapsed())
    print(*args, **kwargs)

  def RunCommand(self, command, options, args, file_list=None):
    commands = ['cleanup', 'update', 'updatesingle', 'revert',
                'revinfo', 'status', 'diff', 'pack', 'runhooks']

    if not command in commands:
      raise gclient_utils.Error('Unknown command %s' % command)

    if not command in dir(self):
      raise gclient_utils.Error('Command %s not implemented in %s wrapper' % (
          command, self.__class__.__name__))

    return getattr(self, command)(options, args, file_list)

  def GetActualRemoteURL(self, options):
    """Attempt to determine the remote URL for this SCMWrapper."""
    # Git
    if os.path.exists(os.path.join(self.checkout_path, '.git')):
      actual_remote_url = shlex.split(self._Capture(
          ['config', '--local', '--get-regexp', r'remote.*.url'],
          self.checkout_path))[1]

      # If a cache_dir is used, obtain the actual remote URL from the cache.
      if getattr(self, 'cache_dir', None):
        mirror = git_cache.Mirror(self.url)
        if (mirror.exists() and mirror.mirror_path.replace('\\', '/') ==
            actual_remote_url.replace('\\', '/')):
          actual_remote_url = shlex.split(self._Capture(
              ['config', '--local', '--get-regexp', r'remote.*.url'],
              cwd=mirror.mirror_path))[1]
      return actual_remote_url

    # Svn
    if os.path.exists(os.path.join(self.checkout_path, '.svn')):
      return scm.SVN.CaptureLocalInfo([], self.checkout_path)['URL']
    return None

  def DoesRemoteURLMatch(self, options):
    """Determine whether the remote URL of this checkout is the expected URL."""
    if not os.path.exists(self.checkout_path):
      # A checkout which doesn't exist can't be broken.
      return True

    actual_remote_url = self.GetActualRemoteURL(options)
    if actual_remote_url:
      return (gclient_utils.SplitUrlRevision(actual_remote_url)[0].rstrip('/')
              == gclient_utils.SplitUrlRevision(self.url)[0].rstrip('/'))
    else:
      # This may occur if the self.checkout_path exists but does not contain a
      # valid git or svn checkout.
      return False

  # TODO(borenet): Remove this once SCMWrapper._DeleteOrMove is enabled.
  # pylint: disable=R0201
  def _DeleteOrMove(self, force):
    """Delete the checkout directory or move it out of the way.

    Args:
        force: bool; if True, delete the directory. Otherwise, just move it.
    """
    gclient_utils.AddWarning('WARNING: Upcoming change in '
                             'https://codereview.chromium.org/225403015 would '
                             'cause %s to be deleted or moved to the side. '
                             'This is intended to ease changes to DEPS in the '
                             'future. If you are seeing this warning and '
                             'haven\'t changed the DEPS file, please contact '
                             'borenet@ immediately.' % self.checkout_path)


class GitWrapper(SCMWrapper):
  """Wrapper for Git"""
  name = 'git'
  remote = 'origin'

  cache_dir = None

  def __init__(self, url=None, *args):
    """Removes 'git+' fake prefix from git URL."""
    if url.startswith('git+http://') or url.startswith('git+https://'):
      url = url[4:]
    SCMWrapper.__init__(self, url, *args)
    filter_kwargs = { 'time_throttle': 1, 'out_fh': self.out_fh }
    if self.out_cb:
      filter_kwargs['predicate'] = self.out_cb
    self.filter = gclient_utils.GitFilter(**filter_kwargs)

  @staticmethod
  def BinaryExists():
    """Returns true if the command exists."""
    try:
      # We assume git is newer than 1.7.  See: crbug.com/114483
      result, version = scm.GIT.AssertVersion('1.7')
      if not result:
        raise gclient_utils.Error('Git version is older than 1.7: %s' % version)
      return result
    except OSError:
      return False

  def GetCheckoutRoot(self):
    return scm.GIT.GetCheckoutRoot(self.checkout_path)

  def GetRevisionDate(self, _revision):
    """Returns the given revision's date in ISO-8601 format (which contains the
    time zone)."""
    # TODO(floitsch): get the time-stamp of the given revision and not just the
    # time-stamp of the currently checked out revision.
    return self._Capture(['log', '-n', '1', '--format=%ai'])

  @staticmethod
  def cleanup(options, args, file_list):
    """'Cleanup' the repo.

    There's no real git equivalent for the svn cleanup command, do a no-op.
    """

  def diff(self, options, _args, _file_list):
    merge_base = self._Capture(['merge-base', 'HEAD', self.remote])
    self._Run(['diff', merge_base], options)

  def pack(self, _options, _args, _file_list):
    """Generates a patch file which can be applied to the root of the
    repository.

    The patch file is generated from a diff of the merge base of HEAD and
    its upstream branch.
    """
    merge_base = self._Capture(['merge-base', 'HEAD', self.remote])
    gclient_utils.CheckCallAndFilter(
        ['git', 'diff', merge_base],
        cwd=self.checkout_path,
        filter_fn=GitDiffFilterer(self.relpath).Filter, print_func=self.Print)

  def _FetchAndReset(self, revision, file_list, options):
    """Equivalent to git fetch; git reset."""
    quiet = []
    if not options.verbose:
      quiet = ['--quiet']
    self._UpdateBranchHeads(options, fetch=False)

    cfg = gclient_utils.DefaultIndexPackConfig(self.url)
    fetch_cmd = cfg + ['fetch', self.remote, '--prune']
    self._Run(fetch_cmd + quiet, options, retry=True)
    self._Run(['reset', '--hard', revision] + quiet, options)
    if file_list is not None:
      files = self._Capture(['ls-files']).splitlines()
      file_list.extend([os.path.join(self.checkout_path, f) for f in files])

  def update(self, options, args, file_list):
    """Runs git to update or transparently checkout the working copy.

    All updated files will be appended to file_list.

    Raises:
      Error: if can't get URL for relative path.
    """
    if args:
      raise gclient_utils.Error("Unsupported argument(s): %s" % ",".join(args))

    self._CheckMinVersion("1.6.6")

    # If a dependency is not pinned, track the default remote branch.
    default_rev = 'refs/remotes/%s/master' % self.remote
    url, deps_revision = gclient_utils.SplitUrlRevision(self.url)
    rev_str = ""
    revision = deps_revision
    managed = True
    if options.revision:
      # Override the revision number.
      revision = str(options.revision)
    if revision == 'unmanaged':
      revision = None
      managed = False
    if not revision:
      revision = default_rev

    if gclient_utils.IsDateRevision(revision):
      # Date-revisions only work on git-repositories if the reflog hasn't
      # expired yet. Use rev-list to get the corresponding revision.
      #  git rev-list -n 1 --before='time-stamp' branchname
      if options.transitive:
        self.Print('Warning: --transitive only works for SVN repositories.')
        revision = default_rev

    rev_str = ' at %s' % revision
    files = [] if file_list is not None else None

    printed_path = False
    verbose = []
    if options.verbose:
      self.Print('_____ %s%s' % (self.relpath, rev_str), timestamp=False)
      verbose = ['--verbose']
      printed_path = True

    url = self._CreateOrUpdateCache(url, options)

    if revision.startswith('refs/'):
      rev_type = "branch"
    elif revision.startswith(self.remote + '/'):
      # For compatibility with old naming, translate 'origin' to 'refs/heads'
      revision = revision.replace(self.remote + '/', 'refs/heads/')
      rev_type = "branch"
    else:
      # hash is also a tag, only make a distinction at checkout
      rev_type = "hash"

    if (not os.path.exists(self.checkout_path) or
        (os.path.isdir(self.checkout_path) and
         not os.path.exists(os.path.join(self.checkout_path, '.git')))):
      if (os.path.isdir(self.checkout_path) and
          not os.path.exists(os.path.join(self.checkout_path, '.git'))):
        self._DeleteOrMove(options.force)
      self._Clone(revision, url, options)
      self._UpdateBranchHeads(options, fetch=True)
      if file_list is not None:
        files = self._Capture(['ls-files']).splitlines()
        file_list.extend([os.path.join(self.checkout_path, f) for f in files])
      if not verbose:
        # Make the output a little prettier. It's nice to have some whitespace
        # between projects when cloning.
        self.Print('')
      return self._Capture(['rev-parse', '--verify', 'HEAD'])

    if not managed:
      self._UpdateBranchHeads(options, fetch=False)
      self.Print('________ unmanaged solution; skipping %s' % self.relpath)
      return self._Capture(['rev-parse', '--verify', 'HEAD'])

    # See if the url has changed (the unittests use git://foo for the url, let
    # that through).
    current_url = self._Capture(['config', 'remote.%s.url' % self.remote])
    return_early = False
    # TODO(maruel): Delete url != 'git://foo' since it's just to make the
    # unit test pass. (and update the comment above)
    # Skip url auto-correction if remote.origin.gclient-auto-fix-url is set.
    # This allows devs to use experimental repos which have a different url
    # but whose branch(s) are the same as official repos.
    if (current_url.rstrip('/') != url.rstrip('/') and
        url != 'git://foo' and
        subprocess2.capture(
            ['git', 'config', 'remote.%s.gclient-auto-fix-url' % self.remote],
            cwd=self.checkout_path).strip() != 'False'):
      self.Print('_____ switching %s to a new upstream' % self.relpath)
      # Make sure it's clean
      self._CheckClean(rev_str)
      # Switch over to the new upstream
      self._Run(['remote', 'set-url', self.remote, url], options)
      self._FetchAndReset(revision, file_list, options)
      return_early = True

    if return_early:
      return self._Capture(['rev-parse', '--verify', 'HEAD'])

    cur_branch = self._GetCurrentBranch()

    # Cases:
    # 0) HEAD is detached. Probably from our initial clone.
    #   - make sure HEAD is contained by a named ref, then update.
    # Cases 1-4. HEAD is a branch.
    # 1) current branch is not tracking a remote branch (could be git-svn)
    #   - try to rebase onto the new hash or branch
    # 2) current branch is tracking a remote branch with local committed
    #    changes, but the DEPS file switched to point to a hash
    #   - rebase those changes on top of the hash
    # 3) current branch is tracking a remote branch w/or w/out changes,
    #    no switch
    #   - see if we can FF, if not, prompt the user for rebase, merge, or stop
    # 4) current branch is tracking a remote branch, switches to a different
    #    remote branch
    #   - exit

    # GetUpstreamBranch returns something like 'refs/remotes/origin/master' for
    # a tracking branch
    # or 'master' if not a tracking branch (it's based on a specific rev/hash)
    # or it returns None if it couldn't find an upstream
    if cur_branch is None:
      upstream_branch = None
      current_type = "detached"
      logging.debug("Detached HEAD")
    else:
      upstream_branch = scm.GIT.GetUpstreamBranch(self.checkout_path)
      if not upstream_branch or not upstream_branch.startswith('refs/remotes'):
        current_type = "hash"
        logging.debug("Current branch is not tracking an upstream (remote)"
                      " branch.")
      elif upstream_branch.startswith('refs/remotes'):
        current_type = "branch"
      else:
        raise gclient_utils.Error('Invalid Upstream: %s' % upstream_branch)

    if not scm.GIT.IsValidRevision(self.checkout_path, revision, sha_only=True):
      # Update the remotes first so we have all the refs.
      remote_output = scm.GIT.Capture(['remote'] + verbose + ['update'],
              cwd=self.checkout_path)
      if verbose:
        self.Print(remote_output)

      self._UpdateBranchHeads(options, fetch=True)

    # This is a big hammer, debatable if it should even be here...
    if options.force or options.reset:
      target = 'HEAD'
      if options.upstream and upstream_branch:
        target = upstream_branch
      self._Run(['reset', '--hard', target], options)

    if current_type == 'detached':
      # case 0
      self._CheckClean(rev_str)
      self._CheckDetachedHead(rev_str, options)
      if self._Capture(['rev-list', '-n', '1', 'HEAD']) == revision:
        self.Print('Up-to-date; skipping checkout.')
      else:
        self._Capture(['checkout', '--quiet', '%s' % revision])
      if not printed_path:
        self.Print('_____ %s%s' % (self.relpath, rev_str), timestamp=False)
    elif current_type == 'hash':
      # case 1
      if scm.GIT.IsGitSvn(self.checkout_path) and upstream_branch is not None:
        # Our git-svn branch (upstream_branch) is our upstream
        self._AttemptRebase(upstream_branch, files, options,
                            newbase=revision, printed_path=printed_path,
                            merge=options.merge)
        printed_path = True
      else:
        # Can't find a merge-base since we don't know our upstream. That makes
        # this command VERY likely to produce a rebase failure. For now we
        # assume origin is our upstream since that's what the old behavior was.
        upstream_branch = self.remote
        if options.revision or deps_revision:
          upstream_branch = revision
        self._AttemptRebase(upstream_branch, files, options,
                            printed_path=printed_path, merge=options.merge)
        printed_path = True
    elif rev_type == 'hash':
      # case 2
      self._AttemptRebase(upstream_branch, files, options,
                          newbase=revision, printed_path=printed_path,
                          merge=options.merge)
      printed_path = True
    elif revision.replace('heads', 'remotes/' + self.remote) != upstream_branch:
      # case 4
      new_base = revision.replace('heads', 'remotes/' + self.remote)
      if not printed_path:
        self.Print('_____ %s%s' % (self.relpath, rev_str), timestamp=False)
      switch_error = ("Switching upstream branch from %s to %s\n"
                     % (upstream_branch, new_base) +
                     "Please merge or rebase manually:\n" +
                     "cd %s; git rebase %s\n" % (self.checkout_path, new_base) +
                     "OR git checkout -b <some new branch> %s" % new_base)
      raise gclient_utils.Error(switch_error)
    else:
      # case 3 - the default case
      if files is not None:
        files = self._Capture(['diff', upstream_branch, '--name-only']).split()
      if verbose:
        self.Print('Trying fast-forward merge to branch : %s' % upstream_branch)
      try:
        merge_args = ['merge']
        if options.merge:
          merge_args.append('--ff')
        else:
          merge_args.append('--ff-only')
        merge_args.append(upstream_branch)
        merge_output = self._Capture(merge_args)
      except subprocess2.CalledProcessError as e:
        if re.match('fatal: Not possible to fast-forward, aborting.', e.stderr):
          files = []
          if not printed_path:
            self.Print('_____ %s%s' % (self.relpath, rev_str), timestamp=False)
            printed_path = True
          while True:
            try:
              action = self._AskForData(
                  'Cannot %s, attempt to rebase? '
                  '(y)es / (q)uit / (s)kip : ' %
                      ('merge' if options.merge else 'fast-forward merge'),
                  options)
            except ValueError:
              raise gclient_utils.Error('Invalid Character')
            if re.match(r'yes|y', action, re.I):
              self._AttemptRebase(upstream_branch, files, options,
                                  printed_path=printed_path, merge=False)
              printed_path = True
              break
            elif re.match(r'quit|q', action, re.I):
              raise gclient_utils.Error("Can't fast-forward, please merge or "
                                        "rebase manually.\n"
                                        "cd %s && git " % self.checkout_path
                                        + "rebase %s" % upstream_branch)
            elif re.match(r'skip|s', action, re.I):
              self.Print('Skipping %s' % self.relpath)
              return
            else:
              self.Print('Input not recognized')
        elif re.match("error: Your local changes to '.*' would be "
                      "overwritten by merge.  Aborting.\nPlease, commit your "
                      "changes or stash them before you can merge.\n",
                      e.stderr):
          if not printed_path:
            self.Print('_____ %s%s' % (self.relpath, rev_str), timestamp=False)
            printed_path = True
          raise gclient_utils.Error(e.stderr)
        else:
          # Some other problem happened with the merge
          logging.error("Error during fast-forward merge in %s!" % self.relpath)
          self.Print(e.stderr)
          raise
      else:
        # Fast-forward merge was successful
        if not re.match('Already up-to-date.', merge_output) or verbose:
          if not printed_path:
            self.Print('_____ %s%s' % (self.relpath, rev_str), timestamp=False)
            printed_path = True
          self.Print(merge_output.strip())
          if not verbose:
            # Make the output a little prettier. It's nice to have some
            # whitespace between projects when syncing.
            self.Print('')

    if file_list is not None:
      file_list.extend([os.path.join(self.checkout_path, f) for f in files])

    # If the rebase generated a conflict, abort and ask user to fix
    if self._IsRebasing():
      raise gclient_utils.Error('\n____ %s%s\n'
                                '\nConflict while rebasing this branch.\n'
                                'Fix the conflict and run gclient again.\n'
                                'See man git-rebase for details.\n'
                                % (self.relpath, rev_str))

    if verbose:
      self.Print('Checked out revision %s' % self.revinfo(options, (), None),
                 timestamp=False)

    # If --reset and --delete_unversioned_trees are specified, remove any
    # untracked directories.
    if options.reset and options.delete_unversioned_trees:
      # GIT.CaptureStatus() uses 'dit diff' to compare to a specific SHA1 (the
      # merge-base by default), so doesn't include untracked files. So we use
      # 'git ls-files --directory --others --exclude-standard' here directly.
      paths = scm.GIT.Capture(
          ['ls-files', '--directory', '--others', '--exclude-standard'],
          self.checkout_path)
      for path in (p for p in paths.splitlines() if p.endswith('/')):
        full_path = os.path.join(self.checkout_path, path)
        if not os.path.islink(full_path):
          self.Print('_____ removing unversioned directory %s' % path)
          gclient_utils.rmtree(full_path)

    return self._Capture(['rev-parse', '--verify', 'HEAD'])


  def revert(self, options, _args, file_list):
    """Reverts local modifications.

    All reverted files will be appended to file_list.
    """
    if not os.path.isdir(self.checkout_path):
      # revert won't work if the directory doesn't exist. It needs to
      # checkout instead.
      self.Print('_____ %s is missing, synching instead' % self.relpath)
      # Don't reuse the args.
      return self.update(options, [], file_list)

    default_rev = "refs/heads/master"
    if options.upstream:
      if self._GetCurrentBranch():
        upstream_branch = scm.GIT.GetUpstreamBranch(self.checkout_path)
        default_rev = upstream_branch or default_rev
    _, deps_revision = gclient_utils.SplitUrlRevision(self.url)
    if not deps_revision:
      deps_revision = default_rev
    if deps_revision.startswith('refs/heads/'):
      deps_revision = deps_revision.replace('refs/heads/', self.remote + '/')
    deps_revision = self.GetUsableRev(deps_revision, options)

    if file_list is not None:
      files = self._Capture(['diff', deps_revision, '--name-only']).split()

    self._Run(['reset', '--hard', deps_revision], options)
    self._Run(['clean', '-f', '-d'], options)

    if file_list is not None:
      file_list.extend([os.path.join(self.checkout_path, f) for f in files])

  def revinfo(self, _options, _args, _file_list):
    """Returns revision"""
    return self._Capture(['rev-parse', 'HEAD'])

  def runhooks(self, options, args, file_list):
    self.status(options, args, file_list)

  def status(self, options, _args, file_list):
    """Display status information."""
    if not os.path.isdir(self.checkout_path):
      self.Print('________ couldn\'t run status in %s:\n'
                 'The directory does not exist.' % self.checkout_path)
    else:
      merge_base = self._Capture(['merge-base', 'HEAD', self.remote])
      self._Run(['diff', '--name-status', merge_base], options,
                stdout=self.out_fh)
      if file_list is not None:
        files = self._Capture(['diff', '--name-only', merge_base]).split()
        file_list.extend([os.path.join(self.checkout_path, f) for f in files])

  def GetUsableRev(self, rev, options):
    """Finds a useful revision for this repository.

    If SCM is git-svn and the head revision is less than |rev|, git svn fetch
    will be called on the source."""
    sha1 = None
    if not os.path.isdir(self.checkout_path):
      raise gclient_utils.Error(
          ( 'We could not find a valid hash for safesync_url response "%s".\n'
            'Safesync URLs with a git checkout currently require the repo to\n'
            'be cloned without a safesync_url before adding the safesync_url.\n'
            'For more info, see: '
            'http://code.google.com/p/chromium/wiki/UsingNewGit'
            '#Initial_checkout' ) % rev)
    elif rev.isdigit() and len(rev) < 7:
      # Handles an SVN rev.  As an optimization, only verify an SVN revision as
      # [0-9]{1,6} for now to avoid making a network request.
      if scm.GIT.IsGitSvn(cwd=self.checkout_path):
        local_head = scm.GIT.GetGitSvnHeadRev(cwd=self.checkout_path)
        if not local_head or local_head < int(rev):
          try:
            logging.debug('Looking for git-svn configuration optimizations.')
            if scm.GIT.Capture(['config', '--get', 'svn-remote.svn.fetch'],
                             cwd=self.checkout_path):
              scm.GIT.Capture(['fetch'], cwd=self.checkout_path)
          except subprocess2.CalledProcessError:
            logging.debug('git config --get svn-remote.svn.fetch failed, '
                          'ignoring possible optimization.')
          if options.verbose:
            self.Print('Running git svn fetch. This might take a while.\n')
          scm.GIT.Capture(['svn', 'fetch'], cwd=self.checkout_path)
        try:
          sha1 = scm.GIT.GetBlessedSha1ForSvnRev(
              cwd=self.checkout_path, rev=rev)
        except gclient_utils.Error, e:
          sha1 = e.message
          self.Print('Warning: Could not find a git revision with accurate\n'
                 '.DEPS.git that maps to SVN revision %s.  Sync-ing to\n'
                 'the closest sane git revision, which is:\n'
                 '  %s\n' % (rev, e.message))
        if not sha1:
          raise gclient_utils.Error(
              ( 'It appears that either your git-svn remote is incorrectly\n'
                'configured or the revision in your safesync_url is\n'
                'higher than git-svn remote\'s HEAD as we couldn\'t find a\n'
                'corresponding git hash for SVN rev %s.' ) % rev)
    else:
      if scm.GIT.IsValidRevision(cwd=self.checkout_path, rev=rev):
        sha1 = rev
      else:
        # May exist in origin, but we don't have it yet, so fetch and look
        # again.
        scm.GIT.Capture(['fetch', self.remote], cwd=self.checkout_path)
        if scm.GIT.IsValidRevision(cwd=self.checkout_path, rev=rev):
          sha1 = rev

    if not sha1:
      raise gclient_utils.Error(
          ( 'We could not find a valid hash for safesync_url response "%s".\n'
            'Safesync URLs with a git checkout currently require a git-svn\n'
            'remote or a safesync_url that provides git sha1s. Please add a\n'
            'git-svn remote or change your safesync_url. For more info, see:\n'
            'http://code.google.com/p/chromium/wiki/UsingNewGit'
            '#Initial_checkout' ) % rev)

    return sha1

  def FullUrlForRelativeUrl(self, url):
    # Strip from last '/'
    # Equivalent to unix basename
    base_url = self.url
    return base_url[:base_url.rfind('/')] + url

  def _CreateOrUpdateCache(self, url, options):
    """Make a new git mirror or update existing mirror for |url|, and return the
    mirror URI to clone from.

    If no cache-dir is specified, just return |url| unchanged.
    """
    if not self.cache_dir:
      return url
    mirror_kwargs = { 'print_func': self.filter }
    if url == CHROMIUM_SRC_URL or url + '.git' == CHROMIUM_SRC_URL:
      mirror_kwargs['refs'] = ['refs/tags/lkgr', 'refs/tags/lkcr']
    mirror = git_cache.Mirror(url, **mirror_kwargs)
    mirror.populate(verbose=options.verbose, bootstrap=True)
    mirror.unlock()
    return mirror.mirror_path if mirror.exists() else None

  def _Clone(self, revision, url, options):
    """Clone a git repository from the given URL.

    Once we've cloned the repo, we checkout a working branch if the specified
    revision is a branch head. If it is a tag or a specific commit, then we
    leave HEAD detached as it makes future updates simpler -- in this case the
    user should first create a new branch or switch to an existing branch before
    making changes in the repo."""
    if not options.verbose:
      # git clone doesn't seem to insert a newline properly before printing
      # to stdout
      self.Print('')
    template_path = os.path.join(
        os.path.dirname(THIS_FILE_PATH), 'git-templates')
    cfg = gclient_utils.DefaultIndexPackConfig(self.url)
    clone_cmd = cfg + [
        'clone', '--no-checkout', '--progress', '--template=%s' % template_path]
    if self.cache_dir:
      clone_cmd.append('--shared')
    if options.verbose:
      clone_cmd.append('--verbose')
    clone_cmd.append(url)
    # If the parent directory does not exist, Git clone on Windows will not
    # create it, so we need to do it manually.
    parent_dir = os.path.dirname(self.checkout_path)
    gclient_utils.safe_makedirs(parent_dir)
    tmp_dir = tempfile.mkdtemp(
        prefix='_gclient_%s_' % os.path.basename(self.checkout_path),
        dir=parent_dir)
    try:
      clone_cmd.append(tmp_dir)
      self._Run(clone_cmd, options, cwd=self._root_dir, retry=True)
      gclient_utils.safe_makedirs(self.checkout_path)
      gclient_utils.safe_rename(os.path.join(tmp_dir, '.git'),
                                os.path.join(self.checkout_path, '.git'))
    except:
      traceback.print_exc(file=self.out_fh)
      raise
    finally:
      if os.listdir(tmp_dir):
        self.Print('_____ removing non-empty tmp dir %s' % tmp_dir)
      gclient_utils.rmtree(tmp_dir)
    if revision.startswith('refs/heads/'):
      self._Run(
          ['checkout', '--quiet', revision.replace('refs/heads/', '')], options)
    else:
      # Squelch git's very verbose detached HEAD warning and use our own
      self._Run(['checkout', '--quiet', revision], options)
      self.Print(
        ('Checked out %s to a detached HEAD. Before making any commits\n'
         'in this repo, you should use \'git checkout <branch>\' to switch to\n'
         'an existing branch or use \'git checkout %s -b <branch>\' to\n'
         'create a new branch for your work.') % (revision, self.remote))

  @staticmethod
  def _AskForData(prompt, options):
    if options.jobs > 1:
      raise gclient_utils.Error("Background task requires input. Rerun "
                                "gclient with --jobs=1 so that\n"
                                "interaction is possible.")
    try:
      return raw_input(prompt)
    except KeyboardInterrupt:
      # Hide the exception.
      sys.exit(1)


  def _AttemptRebase(self, upstream, files, options, newbase=None,
                     branch=None, printed_path=False, merge=False):
    """Attempt to rebase onto either upstream or, if specified, newbase."""
    if files is not None:
      files.extend(self._Capture(['diff', upstream, '--name-only']).split())
    revision = upstream
    if newbase:
      revision = newbase
    action = 'merge' if merge else 'rebase'
    if not printed_path:
      self.Print('_____ %s : Attempting %s onto %s...' % (
          self.relpath, action, revision))
      printed_path = True
    else:
      self.Print('Attempting %s onto %s...' % (action, revision))

    if merge:
      merge_output = self._Capture(['merge', revision])
      if options.verbose:
        self.Print(merge_output)
      return

    # Build the rebase command here using the args
    # git rebase [options] [--onto <newbase>] <upstream> [<branch>]
    rebase_cmd = ['rebase']
    if options.verbose:
      rebase_cmd.append('--verbose')
    if newbase:
      rebase_cmd.extend(['--onto', newbase])
    rebase_cmd.append(upstream)
    if branch:
      rebase_cmd.append(branch)

    try:
      rebase_output = scm.GIT.Capture(rebase_cmd, cwd=self.checkout_path)
    except subprocess2.CalledProcessError, e:
      if (re.match(r'cannot rebase: you have unstaged changes', e.stderr) or
          re.match(r'cannot rebase: your index contains uncommitted changes',
                   e.stderr)):
        while True:
          rebase_action = self._AskForData(
              'Cannot rebase because of unstaged changes.\n'
              '\'git reset --hard HEAD\' ?\n'
              'WARNING: destroys any uncommitted work in your current branch!'
              ' (y)es / (q)uit / (s)how : ', options)
          if re.match(r'yes|y', rebase_action, re.I):
            self._Run(['reset', '--hard', 'HEAD'], options)
            # Should this be recursive?
            rebase_output = scm.GIT.Capture(rebase_cmd, cwd=self.checkout_path)
            break
          elif re.match(r'quit|q', rebase_action, re.I):
            raise gclient_utils.Error("Please merge or rebase manually\n"
                                      "cd %s && git " % self.checkout_path
                                      + "%s" % ' '.join(rebase_cmd))
          elif re.match(r'show|s', rebase_action, re.I):
            self.Print('%s' % e.stderr.strip())
            continue
          else:
            gclient_utils.Error("Input not recognized")
            continue
      elif re.search(r'^CONFLICT', e.stdout, re.M):
        raise gclient_utils.Error("Conflict while rebasing this branch.\n"
                                  "Fix the conflict and run gclient again.\n"
                                  "See 'man git-rebase' for details.\n")
      else:
        self.Print(e.stdout.strip())
        self.Print('Rebase produced error output:\n%s' % e.stderr.strip())
        raise gclient_utils.Error("Unrecognized error, please merge or rebase "
                                  "manually.\ncd %s && git " %
                                  self.checkout_path
                                  + "%s" % ' '.join(rebase_cmd))

    self.Print(rebase_output.strip())
    if not options.verbose:
      # Make the output a little prettier. It's nice to have some
      # whitespace between projects when syncing.
      self.Print('')

  @staticmethod
  def _CheckMinVersion(min_version):
    (ok, current_version) = scm.GIT.AssertVersion(min_version)
    if not ok:
      raise gclient_utils.Error('git version %s < minimum required %s' %
                                (current_version, min_version))

  def _IsRebasing(self):
    # Check for any of REBASE-i/REBASE-m/REBASE/AM. Unfortunately git doesn't
    # have a plumbing command to determine whether a rebase is in progress, so
    # for now emualate (more-or-less) git-rebase.sh / git-completion.bash
    g = os.path.join(self.checkout_path, '.git')
    return (
      os.path.isdir(os.path.join(g, "rebase-merge")) or
      os.path.isdir(os.path.join(g, "rebase-apply")))

  def _CheckClean(self, rev_str):
    # Make sure the tree is clean; see git-rebase.sh for reference
    try:
      scm.GIT.Capture(['update-index', '--ignore-submodules', '--refresh'],
                      cwd=self.checkout_path)
    except subprocess2.CalledProcessError:
      raise gclient_utils.Error('\n____ %s%s\n'
                                '\tYou have unstaged changes.\n'
                                '\tPlease commit, stash, or reset.\n'
                                  % (self.relpath, rev_str))
    try:
      scm.GIT.Capture(['diff-index', '--cached', '--name-status', '-r',
                       '--ignore-submodules', 'HEAD', '--'],
                       cwd=self.checkout_path)
    except subprocess2.CalledProcessError:
      raise gclient_utils.Error('\n____ %s%s\n'
                                '\tYour index contains uncommitted changes\n'
                                '\tPlease commit, stash, or reset.\n'
                                  % (self.relpath, rev_str))

  def _CheckDetachedHead(self, rev_str, _options):
    # HEAD is detached. Make sure it is safe to move away from (i.e., it is
    # reference by a commit). If not, error out -- most likely a rebase is
    # in progress, try to detect so we can give a better error.
    try:
      scm.GIT.Capture(['name-rev', '--no-undefined', 'HEAD'],
          cwd=self.checkout_path)
    except subprocess2.CalledProcessError:
      # Commit is not contained by any rev. See if the user is rebasing:
      if self._IsRebasing():
        # Punt to the user
        raise gclient_utils.Error('\n____ %s%s\n'
                                  '\tAlready in a conflict, i.e. (no branch).\n'
                                  '\tFix the conflict and run gclient again.\n'
                                  '\tOr to abort run:\n\t\tgit-rebase --abort\n'
                                  '\tSee man git-rebase for details.\n'
                                   % (self.relpath, rev_str))
      # Let's just save off the commit so we can proceed.
      name = ('saved-by-gclient-' +
              self._Capture(['rev-parse', '--short', 'HEAD']))
      self._Capture(['branch', '-f', name])
      self.Print('_____ found an unreferenced commit and saved it as \'%s\'' %
          name)

  def _GetCurrentBranch(self):
    # Returns name of current branch or None for detached HEAD
    branch = self._Capture(['rev-parse', '--abbrev-ref=strict', 'HEAD'])
    if branch == 'HEAD':
      return None
    return branch

  def _Capture(self, args, cwd=None, **kwargs):
    kwargs.setdefault('cwd', self.checkout_path)
    kwargs.setdefault('stderr', subprocess2.PIPE)
    return subprocess2.check_output(['git'] + args, **kwargs).strip()

  def _UpdateBranchHeads(self, options, fetch=False):
    """Adds, and optionally fetches, "branch-heads" refspecs if requested."""
    if hasattr(options, 'with_branch_heads') and options.with_branch_heads:
      config_cmd = ['config', 'remote.%s.fetch' % self.remote,
                    '+refs/branch-heads/*:refs/remotes/branch-heads/*',
                    '^\\+refs/branch-heads/\\*:.*$']
      self._Run(config_cmd, options)
      if fetch:
        cfg = gclient_utils.DefaultIndexPackConfig(self.url)
        fetch_cmd =  cfg + ['fetch', self.remote]
        if options.verbose:
          fetch_cmd.append('--verbose')
        self._Run(fetch_cmd, options, retry=True)

  def _Run(self, args, options, **kwargs):
    cwd = kwargs.setdefault('cwd', self.checkout_path)
    kwargs.setdefault('stdout', self.out_fh)
    kwargs['filter_fn'] = self.filter
    kwargs.setdefault('print_stdout', False)
    # Don't prompt for passwords; just fail quickly and noisily.
    # By default, git will use an interactive terminal prompt when a username/
    # password is needed.  That shouldn't happen in the chromium workflow,
    # and if it does, then gclient may hide the prompt in the midst of a flood
    # of terminal spew.  The only indication that something has gone wrong
    # will be when gclient hangs unresponsively.  Instead, we disable the
    # password prompt and simply allow git to fail noisily.  The error
    # message produced by git will be copied to gclient's output.
    env = kwargs.get('env') or kwargs.setdefault('env', os.environ.copy())
    env.setdefault('GIT_ASKPASS', 'true')
    env.setdefault('SSH_ASKPASS', 'true')

    cmd = ['git'] + args
    header = "running '%s' in '%s'" % (' '.join(cmd), cwd)
    self.filter(header)
    return gclient_utils.CheckCallAndFilter(cmd, **kwargs)


class SVNWrapper(SCMWrapper):
  """ Wrapper for SVN """
  name = 'svn'

  @staticmethod
  def BinaryExists():
    """Returns true if the command exists."""
    try:
      result, version = scm.SVN.AssertVersion('1.4')
      if not result:
        raise gclient_utils.Error('SVN version is older than 1.4: %s' % version)
      return result
    except OSError:
      return False

  def GetCheckoutRoot(self):
    return scm.SVN.GetCheckoutRoot(self.checkout_path)

  def GetRevisionDate(self, revision):
    """Returns the given revision's date in ISO-8601 format (which contains the
    time zone)."""
    date = scm.SVN.Capture(
        ['propget', '--revprop', 'svn:date', '-r', revision],
        os.path.join(self.checkout_path, '.'))
    return date.strip()

  def cleanup(self, options, args, _file_list):
    """Cleanup working copy."""
    self._Run(['cleanup'] + args, options)

  def diff(self, options, args, _file_list):
    # NOTE: This function does not currently modify file_list.
    if not os.path.isdir(self.checkout_path):
      raise gclient_utils.Error('Directory %s is not present.' %
          self.checkout_path)
    self._Run(['diff'] + args, options)

  def pack(self, _options, args, _file_list):
    """Generates a patch file which can be applied to the root of the
    repository."""
    if not os.path.isdir(self.checkout_path):
      raise gclient_utils.Error('Directory %s is not present.' %
          self.checkout_path)
    gclient_utils.CheckCallAndFilter(
        ['svn', 'diff', '-x', '--ignore-eol-style'] + args,
        cwd=self.checkout_path,
        print_stdout=False,
        filter_fn=SvnDiffFilterer(self.relpath).Filter, print_func=self.Print)

  def update(self, options, args, file_list):
    """Runs svn to update or transparently checkout the working copy.

    All updated files will be appended to file_list.

    Raises:
      Error: if can't get URL for relative path.
    """
    # Only update if hg is not controlling the directory.
    hg_path = os.path.join(self.checkout_path, '.hg')
    if os.path.exists(hg_path):
      self.Print('________ found .hg directory; skipping %s' % self.relpath)
      return

    if args:
      raise gclient_utils.Error("Unsupported argument(s): %s" % ",".join(args))

    # revision is the revision to match. It is None if no revision is specified,
    # i.e. the 'deps ain't pinned'.
    url, revision = gclient_utils.SplitUrlRevision(self.url)
    # Keep the original unpinned url for reference in case the repo is switched.
    base_url = url
    managed = True
    if options.revision:
      # Override the revision number.
      revision = str(options.revision)
    if revision:
      if revision != 'unmanaged':
        forced_revision = True
        # Reconstruct the url.
        url = '%s@%s' % (url, revision)
        rev_str = ' at %s' % revision
      else:
        managed = False
        revision = None
    else:
      forced_revision = False
      rev_str = ''

    exists = os.path.exists(self.checkout_path)
    if exists and managed:
      # Git is only okay if it's a git-svn checkout of the right repo.
      if scm.GIT.IsGitSvn(self.checkout_path):
        remote_url = scm.GIT.Capture(['config', '--local', '--get',
                                      'svn-remote.svn.url'],
                                     cwd=self.checkout_path).rstrip()
        if remote_url.rstrip('/') == base_url.rstrip('/'):
          print('\n_____ %s looks like a git-svn checkout. Skipping.'
                % self.relpath)
          return # TODO(borenet): Get the svn revision number?

    # Get the existing scm url and the revision number of the current checkout.
    if exists and managed:
      try:
        from_info = scm.SVN.CaptureLocalInfo(
            [], os.path.join(self.checkout_path, '.'))
      except (gclient_utils.Error, subprocess2.CalledProcessError):
        self._DeleteOrMove(options.force)
        exists = False

    BASE_URLS = {
        '/chrome/trunk/src': 'gs://chromium-svn-checkout/chrome/',
        '/blink/trunk': 'gs://chromium-svn-checkout/blink/',
    }
    WHITELISTED_ROOTS = [
        'svn://svn.chromium.org',
        'svn://svn-mirror.golo.chromium.org',
    ]
    if not exists:
      try:
        # Split out the revision number since it's not useful for us.
        base_path = urlparse.urlparse(url).path.split('@')[0]
        # Check to see if we're on a whitelisted root.  We do this because
        # only some svn servers have matching UUIDs.
        local_parsed = urlparse.urlparse(url)
        local_root = '%s://%s' % (local_parsed.scheme, local_parsed.netloc)
        if ('CHROME_HEADLESS' in os.environ
            and sys.platform == 'linux2'  # TODO(hinoka): Enable for win/mac.
            and base_path in BASE_URLS
            and local_root in WHITELISTED_ROOTS):

          # Use a tarball for initial sync if we are on a bot.
          # Get an unauthenticated gsutil instance.
          gsutil = download_from_google_storage.Gsutil(
              GSUTIL_DEFAULT_PATH, boto_path=os.devnull)

          gs_path = BASE_URLS[base_path]
          _, out, _ = gsutil.check_call('ls', gs_path)
          # So that we can get the most recent revision.
          sorted_items = sorted(out.splitlines())
          latest_checkout = sorted_items[-1]

          tempdir = tempfile.mkdtemp()
          self.Print('Downloading %s...' % latest_checkout)
          code, out, err = gsutil.check_call('cp', latest_checkout, tempdir)
          if code:
            self.Print('%s\n%s' % (out, err))
            raise Exception()
          filename = latest_checkout.split('/')[-1]
          tarball = os.path.join(tempdir, filename)
          self.Print('Unpacking into %s...' % self.checkout_path)
          gclient_utils.safe_makedirs(self.checkout_path)
          # TODO(hinoka): Use 7z for windows.
          cmd = ['tar', '--extract', '--ungzip',
                  '--directory', self.checkout_path,
                  '--file', tarball]
          gclient_utils.CheckCallAndFilter(
              cmd, stdout=sys.stdout, print_stdout=True)

          self.Print('Deleting temp file')
          gclient_utils.rmtree(tempdir)

          # Rewrite the repository root to match.
          tarball_url = scm.SVN.CaptureLocalInfo(
              ['.'], self.checkout_path)['Repository Root']
          tarball_parsed = urlparse.urlparse(tarball_url)
          tarball_root = '%s://%s' % (tarball_parsed.scheme,
                                      tarball_parsed.netloc)

          if tarball_root != local_root:
            self.Print('Switching repository root to %s' % local_root)
            self._Run(['switch', '--relocate', tarball_root,
                       local_root, self.checkout_path],
                      options)
      except Exception as e:
        self.Print('We tried to get a source tarball but failed.')
        self.Print('Resuming normal operations.')
        self.Print(str(e))

      gclient_utils.safe_makedirs(os.path.dirname(self.checkout_path))
      # We need to checkout.
      command = ['checkout', url, self.checkout_path]
      command = self._AddAdditionalUpdateFlags(command, options, revision)
      self._RunAndGetFileList(command, options, file_list, self._root_dir)
      return self.Svnversion()

    if not managed:
      self.Print(('________ unmanaged solution; skipping %s' % self.relpath))
      if os.path.exists(os.path.join(self.checkout_path, '.svn')):
        return self.Svnversion()
      return

    if 'URL' not in from_info:
      raise gclient_utils.Error(
          ('gclient is confused. Couldn\'t get the url for %s.\n'
           'Try using @unmanaged.\n%s') % (
            self.checkout_path, from_info))

    # Look for locked directories.
    dir_info = scm.SVN.CaptureStatus(
        None, os.path.join(self.checkout_path, '.'))
    if any(d[0][2] == 'L' for d in dir_info):
      try:
        self._Run(['cleanup', self.checkout_path], options)
      except subprocess2.CalledProcessError, e:
        # Get the status again, svn cleanup may have cleaned up at least
        # something.
        dir_info = scm.SVN.CaptureStatus(
            None, os.path.join(self.checkout_path, '.'))

        # Try to fix the failures by removing troublesome files.
        for d in dir_info:
          if d[0][2] == 'L':
            if d[0][0] == '!' and options.force:
              # We don't pass any files/directories to CaptureStatus and set
              # cwd=self.checkout_path, so we should get relative paths here.
              assert not os.path.isabs(d[1])
              path_to_remove = os.path.normpath(
                  os.path.join(self.checkout_path, d[1]))
              self.Print('Removing troublesome path %s' % path_to_remove)
              gclient_utils.rmtree(path_to_remove)
            else:
              self.Print(
                  'Not removing troublesome path %s automatically.' % d[1])
              if d[0][0] == '!':
                self.Print('You can pass --force to enable automatic removal.')
              raise e

    # Retrieve the current HEAD version because svn is slow at null updates.
    if options.manually_grab_svn_rev and not revision:
      from_info_live = scm.SVN.CaptureRemoteInfo(from_info['URL'])
      revision = str(from_info_live['Revision'])
      rev_str = ' at %s' % revision

    if from_info['URL'].rstrip('/') != base_url.rstrip('/'):
      # The repository url changed, need to switch.
      try:
        to_info = scm.SVN.CaptureRemoteInfo(url)
      except (gclient_utils.Error, subprocess2.CalledProcessError):
        # The url is invalid or the server is not accessible, it's safer to bail
        # out right now.
        raise gclient_utils.Error('This url is unreachable: %s' % url)
      can_switch = ((from_info['Repository Root'] != to_info['Repository Root'])
                    and (from_info['UUID'] == to_info['UUID']))
      if can_switch:
        self.Print('_____ relocating %s to a new checkout' % self.relpath)
        # We have different roots, so check if we can switch --relocate.
        # Subversion only permits this if the repository UUIDs match.
        # Perform the switch --relocate, then rewrite the from_url
        # to reflect where we "are now."  (This is the same way that
        # Subversion itself handles the metadata when switch --relocate
        # is used.)  This makes the checks below for whether we
        # can update to a revision or have to switch to a different
        # branch work as expected.
        # TODO(maruel):  TEST ME !
        command = ['switch', '--relocate',
                   from_info['Repository Root'],
                   to_info['Repository Root'],
                   self.relpath]
        self._Run(command, options, cwd=self._root_dir)
        from_info['URL'] = from_info['URL'].replace(
            from_info['Repository Root'],
            to_info['Repository Root'])
      else:
        if not options.force and not options.reset:
          # Look for local modifications but ignore unversioned files.
          for status in scm.SVN.CaptureStatus(None, self.checkout_path):
            if status[0][0] != '?':
              raise gclient_utils.Error(
                  ('Can\'t switch the checkout to %s; UUID don\'t match and '
                   'there is local changes in %s. Delete the directory and '
                   'try again.') % (url, self.checkout_path))
        # Ok delete it.
        self.Print('_____ switching %s to a new checkout' % self.relpath)
        gclient_utils.rmtree(self.checkout_path)
        # We need to checkout.
        command = ['checkout', url, self.checkout_path]
        command = self._AddAdditionalUpdateFlags(command, options, revision)
        self._RunAndGetFileList(command, options, file_list, self._root_dir)
        return self.Svnversion()

    # If the provided url has a revision number that matches the revision
    # number of the existing directory, then we don't need to bother updating.
    if not options.force and str(from_info['Revision']) == revision:
      if options.verbose or not forced_revision:
        self.Print('_____ %s%s' % (self.relpath, rev_str), timestamp=False)
    else:
      command = ['update', self.checkout_path]
      command = self._AddAdditionalUpdateFlags(command, options, revision)
      self._RunAndGetFileList(command, options, file_list, self._root_dir)

    # If --reset and --delete_unversioned_trees are specified, remove any
    # untracked files and directories.
    if options.reset and options.delete_unversioned_trees:
      for status in scm.SVN.CaptureStatus(None, self.checkout_path):
        full_path = os.path.join(self.checkout_path, status[1])
        if (status[0][0] == '?'
            and os.path.isdir(full_path)
            and not os.path.islink(full_path)):
          self.Print('_____ removing unversioned directory %s' % status[1])
          gclient_utils.rmtree(full_path)
    return self.Svnversion()

  def updatesingle(self, options, args, file_list):
    filename = args.pop()
    if scm.SVN.AssertVersion("1.5")[0]:
      if not os.path.exists(os.path.join(self.checkout_path, '.svn')):
        # Create an empty checkout and then update the one file we want.  Future
        # operations will only apply to the one file we checked out.
        command = ["checkout", "--depth", "empty", self.url, self.checkout_path]
        self._Run(command, options, cwd=self._root_dir)
        if os.path.exists(os.path.join(self.checkout_path, filename)):
          os.remove(os.path.join(self.checkout_path, filename))
        command = ["update", filename]
        self._RunAndGetFileList(command, options, file_list)
      # After the initial checkout, we can use update as if it were any other
      # dep.
      self.update(options, args, file_list)
    else:
      # If the installed version of SVN doesn't support --depth, fallback to
      # just exporting the file.  This has the downside that revision
      # information is not stored next to the file, so we will have to
      # re-export the file every time we sync.
      if not os.path.exists(self.checkout_path):
        gclient_utils.safe_makedirs(self.checkout_path)
      command = ["export", os.path.join(self.url, filename),
                 os.path.join(self.checkout_path, filename)]
      command = self._AddAdditionalUpdateFlags(command, options,
          options.revision)
      self._Run(command, options, cwd=self._root_dir)

  def revert(self, options, _args, file_list):
    """Reverts local modifications. Subversion specific.

    All reverted files will be appended to file_list, even if Subversion
    doesn't know about them.
    """
    if not os.path.isdir(self.checkout_path):
      if os.path.exists(self.checkout_path):
        gclient_utils.rmtree(self.checkout_path)
      # svn revert won't work if the directory doesn't exist. It needs to
      # checkout instead.
      self.Print('_____ %s is missing, synching instead' % self.relpath)
      # Don't reuse the args.
      return self.update(options, [], file_list)

    if not os.path.isdir(os.path.join(self.checkout_path, '.svn')):
      if os.path.isdir(os.path.join(self.checkout_path, '.git')):
        self.Print('________ found .git directory; skipping %s' % self.relpath)
        return
      if os.path.isdir(os.path.join(self.checkout_path, '.hg')):
        self.Print('________ found .hg directory; skipping %s' % self.relpath)
        return
      if not options.force:
        raise gclient_utils.Error('Invalid checkout path, aborting')
      self.Print(
          '\n_____ %s is not a valid svn checkout, synching instead' %
          self.relpath)
      gclient_utils.rmtree(self.checkout_path)
      # Don't reuse the args.
      return self.update(options, [], file_list)

    def printcb(file_status):
      if file_list is not None:
        file_list.append(file_status[1])
      if logging.getLogger().isEnabledFor(logging.INFO):
        logging.info('%s%s' % (file_status[0], file_status[1]))
      else:
        self.Print(os.path.join(self.checkout_path, file_status[1]))
    scm.SVN.Revert(self.checkout_path, callback=printcb)

    # Revert() may delete the directory altogether.
    if not os.path.isdir(self.checkout_path):
      # Don't reuse the args.
      return self.update(options, [], file_list)

    try:
      # svn revert is so broken we don't even use it. Using
      # "svn up --revision BASE" achieve the same effect.
      # file_list will contain duplicates.
      self._RunAndGetFileList(['update', '--revision', 'BASE'], options,
          file_list)
    except OSError, e:
      # Maybe the directory disapeared meanwhile. Do not throw an exception.
      logging.error('Failed to update:\n%s' % str(e))

  def revinfo(self, _options, _args, _file_list):
    """Display revision"""
    try:
      return scm.SVN.CaptureRevision(self.checkout_path)
    except (gclient_utils.Error, subprocess2.CalledProcessError):
      return None

  def runhooks(self, options, args, file_list):
    self.status(options, args, file_list)

  def status(self, options, args, file_list):
    """Display status information."""
    command = ['status'] + args
    if not os.path.isdir(self.checkout_path):
      # svn status won't work if the directory doesn't exist.
      self.Print(('\n________ couldn\'t run \'%s\' in \'%s\':\n'
             'The directory does not exist.') %
                (' '.join(command), self.checkout_path))
      # There's no file list to retrieve.
    else:
      self._RunAndGetFileList(command, options, file_list)

  def GetUsableRev(self, rev, _options):
    """Verifies the validity of the revision for this repository."""
    if not scm.SVN.IsValidRevision(url='%s@%s' % (self.url, rev)):
      raise gclient_utils.Error(
        ( '%s isn\'t a valid revision. Please check that your safesync_url is\n'
          'correct.') % rev)
    return rev

  def FullUrlForRelativeUrl(self, url):
    # Find the forth '/' and strip from there. A bit hackish.
    return '/'.join(self.url.split('/')[:4]) + url

  def _Run(self, args, options, **kwargs):
    """Runs a commands that goes to stdout."""
    kwargs.setdefault('cwd', self.checkout_path)
    gclient_utils.CheckCallAndFilterAndHeader(['svn'] + args,
        always=options.verbose, **kwargs)

  def Svnversion(self):
    """Runs the lowest checked out revision in the current project."""
    info = scm.SVN.CaptureLocalInfo([], os.path.join(self.checkout_path, '.'))
    return info['Revision']

  def _RunAndGetFileList(self, args, options, file_list, cwd=None):
    """Runs a commands that goes to stdout and grabs the file listed."""
    cwd = cwd or self.checkout_path
    scm.SVN.RunAndGetFileList(
        options.verbose,
        args + ['--ignore-externals'],
        cwd=cwd,
        file_list=file_list)

  @staticmethod
  def _AddAdditionalUpdateFlags(command, options, revision):
    """Add additional flags to command depending on what options are set.
    command should be a list of strings that represents an svn command.

    This method returns a new list to be used as a command."""
    new_command = command[:]
    if revision:
      new_command.extend(['--revision', str(revision).strip()])
    # We don't want interaction when jobs are used.
    if options.jobs > 1:
      new_command.append('--non-interactive')
    # --force was added to 'svn update' in svn 1.5.
    # --accept was added to 'svn update' in svn 1.6.
    if not scm.SVN.AssertVersion('1.5')[0]:
      return new_command

    # It's annoying to have it block in the middle of a sync, just sensible
    # defaults.
    if options.force:
      new_command.append('--force')
      if command[0] != 'checkout' and scm.SVN.AssertVersion('1.6')[0]:
        new_command.extend(('--accept', 'theirs-conflict'))
    elif options.manually_grab_svn_rev:
      new_command.append('--force')
      if command[0] != 'checkout' and scm.SVN.AssertVersion('1.6')[0]:
        new_command.extend(('--accept', 'postpone'))
    elif command[0] != 'checkout' and scm.SVN.AssertVersion('1.6')[0]:
      new_command.extend(('--accept', 'postpone'))
    return new_command

#!/usr/bin/env python
# Copyright (c) 2012 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

# Copyright (C) 2008 Evan Martin <martine@danga.com>

"""A git-command for integrating reviews on Rietveld."""

from distutils.version import LooseVersion
import glob
import json
import logging
import optparse
import os
import Queue
import re
import stat
import sys
import textwrap
import threading
import urllib2
import urlparse
import webbrowser

try:
  import readline  # pylint: disable=F0401,W0611
except ImportError:
  pass


from third_party import colorama
from third_party import upload
import breakpad  # pylint: disable=W0611
import clang_format
import fix_encoding
import gclient_utils
import git_common
import owners_finder
import presubmit_support
import rietveld
import scm
import subcommand
import subprocess2
import watchlists

__version__ = '1.0'

DEFAULT_SERVER = 'https://codereview.appspot.com'
POSTUPSTREAM_HOOK_PATTERN = '.git/hooks/post-cl-%s'
DESCRIPTION_BACKUP_FILE = '~/.git_cl_description_backup'
GIT_INSTRUCTIONS_URL = 'http://code.google.com/p/chromium/wiki/UsingGit'
CHANGE_ID = 'Change-Id:'

# Valid extensions for files we want to lint.
DEFAULT_LINT_REGEX = r"(.*\.cpp|.*\.cc|.*\.h)"
DEFAULT_LINT_IGNORE_REGEX = r"$^"

# Shortcut since it quickly becomes redundant.
Fore = colorama.Fore

# Initialized in main()
settings = None


def DieWithError(message):
  print >> sys.stderr, message
  sys.exit(1)


def GetNoGitPagerEnv():
  env = os.environ.copy()
  # 'cat' is a magical git string that disables pagers on all platforms.
  env['GIT_PAGER'] = 'cat'
  return env

def RunCommand(args, error_ok=False, error_message=None, **kwargs):
  try:
    return subprocess2.check_output(args, shell=False, **kwargs)
  except subprocess2.CalledProcessError as e:
    logging.debug('Failed running %s', args)
    if not error_ok:
      DieWithError(
          'Command "%s" failed.\n%s' % (
            ' '.join(args), error_message or e.stdout or ''))
    return e.stdout


def RunGit(args, **kwargs):
  """Returns stdout."""
  return RunCommand(['git'] + args, **kwargs)


def RunGitWithCode(args, suppress_stderr=False):
  """Returns return code and stdout."""
  try:
    if suppress_stderr:
      stderr = subprocess2.VOID
    else:
      stderr = sys.stderr
    out, code = subprocess2.communicate(['git'] + args,
                                        env=GetNoGitPagerEnv(),
                                        stdout=subprocess2.PIPE,
                                        stderr=stderr)
    return code, out[0]
  except ValueError:
    # When the subprocess fails, it returns None.  That triggers a ValueError
    # when trying to unpack the return value into (out, code).
    return 1, ''


def IsGitVersionAtLeast(min_version):
  prefix = 'git version '
  version = RunGit(['--version']).strip()
  return (version.startswith(prefix) and
      LooseVersion(version[len(prefix):]) >= LooseVersion(min_version))


def ask_for_data(prompt):
  try:
    return raw_input(prompt)
  except KeyboardInterrupt:
    # Hide the exception.
    sys.exit(1)


def git_set_branch_value(key, value):
  branch = Changelist().GetBranch()
  if not branch:
    return

  cmd = ['config']
  if isinstance(value, int):
    cmd.append('--int')
  git_key = 'branch.%s.%s' % (branch, key)
  RunGit(cmd + [git_key, str(value)])


def git_get_branch_default(key, default):
  branch = Changelist().GetBranch()
  if branch:
    git_key = 'branch.%s.%s' % (branch, key)
    (_, stdout) = RunGitWithCode(['config', '--int', '--get', git_key])
    try:
      return int(stdout.strip())
    except ValueError:
      pass
  return default


def add_git_similarity(parser):
  parser.add_option(
      '--similarity', metavar='SIM', type='int', action='store',
      help='Sets the percentage that a pair of files need to match in order to'
           ' be considered copies (default 50)')
  parser.add_option(
      '--find-copies', action='store_true',
      help='Allows git to look for copies.')
  parser.add_option(
      '--no-find-copies', action='store_false', dest='find_copies',
      help='Disallows git from looking for copies.')

  old_parser_args = parser.parse_args
  def Parse(args):
    options, args = old_parser_args(args)

    if options.similarity is None:
      options.similarity = git_get_branch_default('git-cl-similarity', 50)
    else:
      print('Note: Saving similarity of %d%% in git config.'
            % options.similarity)
      git_set_branch_value('git-cl-similarity', options.similarity)

    options.similarity = max(0, min(options.similarity, 100))

    if options.find_copies is None:
      options.find_copies = bool(
          git_get_branch_default('git-find-copies', True))
    else:
      git_set_branch_value('git-find-copies', int(options.find_copies))

    print('Using %d%% similarity for rename/copy detection. '
          'Override with --similarity.' % options.similarity)

    return options, args
  parser.parse_args = Parse


def is_dirty_git_tree(cmd):
  # Make sure index is up-to-date before running diff-index.
  RunGit(['update-index', '--refresh', '-q'], error_ok=True)
  dirty = RunGit(['diff-index', '--name-status', 'HEAD'])
  if dirty:
    print 'Cannot %s with a dirty tree. You must commit locally first.' % cmd
    print 'Uncommitted files: (git diff-index --name-status HEAD)'
    print dirty[:4096]
    if len(dirty) > 4096:
      print '... (run "git diff-index --name-status HEAD" to see full output).'
    return True
  return False


def MatchSvnGlob(url, base_url, glob_spec, allow_wildcards):
  """Return the corresponding git ref if |base_url| together with |glob_spec|
  matches the full |url|.

  If |allow_wildcards| is true, |glob_spec| can contain wildcards (see below).
  """
  fetch_suburl, as_ref = glob_spec.split(':')
  if allow_wildcards:
    glob_match = re.match('(.+/)?(\*|{[^/]*})(/.+)?', fetch_suburl)
    if glob_match:
      # Parse specs like "branches/*/src:refs/remotes/svn/*" or
      # "branches/{472,597,648}/src:refs/remotes/svn/*".
      branch_re = re.escape(base_url)
      if glob_match.group(1):
        branch_re += '/' + re.escape(glob_match.group(1))
      wildcard = glob_match.group(2)
      if wildcard == '*':
        branch_re += '([^/]*)'
      else:
        # Escape and replace surrounding braces with parentheses and commas
        # with pipe symbols.
        wildcard = re.escape(wildcard)
        wildcard = re.sub('^\\\\{', '(', wildcard)
        wildcard = re.sub('\\\\,', '|', wildcard)
        wildcard = re.sub('\\\\}$', ')', wildcard)
        branch_re += wildcard
      if glob_match.group(3):
        branch_re += re.escape(glob_match.group(3))
      match = re.match(branch_re, url)
      if match:
        return re.sub('\*$', match.group(1), as_ref)

  # Parse specs like "trunk/src:refs/remotes/origin/trunk".
  if fetch_suburl:
    full_url = base_url + '/' + fetch_suburl
  else:
    full_url = base_url
  if full_url == url:
    return as_ref
  return None


def print_stats(similarity, find_copies, args):
  """Prints statistics about the change to the user."""
  # --no-ext-diff is broken in some versions of Git, so try to work around
  # this by overriding the environment (but there is still a problem if the
  # git config key "diff.external" is used).
  env = GetNoGitPagerEnv()
  if 'GIT_EXTERNAL_DIFF' in env:
    del env['GIT_EXTERNAL_DIFF']

  if find_copies:
    similarity_options = ['--find-copies-harder', '-l100000',
                          '-C%s' % similarity]
  else:
    similarity_options = ['-M%s' % similarity]

  return subprocess2.call(
      ['git',
       'diff', '--no-ext-diff', '--stat'] + similarity_options + args,
      env=env)


class Settings(object):
  def __init__(self):
    self.default_server = None
    self.cc = None
    self.root = None
    self.is_git_svn = None
    self.svn_branch = None
    self.tree_status_url = None
    self.viewvc_url = None
    self.updated = False
    self.is_gerrit = None
    self.git_editor = None

  def LazyUpdateIfNeeded(self):
    """Updates the settings from a codereview.settings file, if available."""
    if not self.updated:
      # The only value that actually changes the behavior is
      # autoupdate = "false". Everything else means "true".
      autoupdate = RunGit(['config', 'rietveld.autoupdate'],
                          error_ok=True
                          ).strip().lower()

      cr_settings_file = FindCodereviewSettingsFile()
      if autoupdate != 'false' and cr_settings_file:
        LoadCodereviewSettingsFromFile(cr_settings_file)
        # set updated to True to avoid infinite calling loop
        # through DownloadHooks
        self.updated = True
        DownloadHooks(False)
      self.updated = True

  def GetDefaultServerUrl(self, error_ok=False):
    if not self.default_server:
      self.LazyUpdateIfNeeded()
      self.default_server = gclient_utils.UpgradeToHttps(
          self._GetRietveldConfig('server', error_ok=True))
      if error_ok:
        return self.default_server
      if not self.default_server:
        error_message = ('Could not find settings file. You must configure '
                         'your review setup by running "git cl config".')
        self.default_server = gclient_utils.UpgradeToHttps(
            self._GetRietveldConfig('server', error_message=error_message))
    return self.default_server

  @staticmethod
  def GetRelativeRoot():
    return RunGit(['rev-parse', '--show-cdup']).strip()

  def GetRoot(self):
    if self.root is None:
      self.root = os.path.abspath(self.GetRelativeRoot())
    return self.root

  def GetIsGitSvn(self):
    """Return true if this repo looks like it's using git-svn."""
    if self.is_git_svn is None:
      # If you have any "svn-remote.*" config keys, we think you're using svn.
      self.is_git_svn = RunGitWithCode(
          ['config', '--local', '--get-regexp', r'^svn-remote\.'])[0] == 0
    return self.is_git_svn

  def GetSVNBranch(self):
    if self.svn_branch is None:
      if not self.GetIsGitSvn():
        DieWithError('Repo doesn\'t appear to be a git-svn repo.')

      # Try to figure out which remote branch we're based on.
      # Strategy:
      # 1) iterate through our branch history and find the svn URL.
      # 2) find the svn-remote that fetches from the URL.

      # regexp matching the git-svn line that contains the URL.
      git_svn_re = re.compile(r'^\s*git-svn-id: (\S+)@', re.MULTILINE)

      # We don't want to go through all of history, so read a line from the
      # pipe at a time.
      # The -100 is an arbitrary limit so we don't search forever.
      cmd = ['git', 'log', '-100', '--pretty=medium']
      proc = subprocess2.Popen(cmd, stdout=subprocess2.PIPE,
                               env=GetNoGitPagerEnv())
      url = None
      for line in proc.stdout:
        match = git_svn_re.match(line)
        if match:
          url = match.group(1)
          proc.stdout.close()  # Cut pipe.
          break

      if url:
        svn_remote_re = re.compile(r'^svn-remote\.([^.]+)\.url (.*)$')
        remotes = RunGit(['config', '--get-regexp',
                          r'^svn-remote\..*\.url']).splitlines()
        for remote in remotes:
          match = svn_remote_re.match(remote)
          if match:
            remote = match.group(1)
            base_url = match.group(2)
            rewrite_root = RunGit(
                ['config', 'svn-remote.%s.rewriteRoot' % remote],
                error_ok=True).strip()
            if rewrite_root:
              base_url = rewrite_root
            fetch_spec = RunGit(
                ['config', 'svn-remote.%s.fetch' % remote],
                error_ok=True).strip()
            if fetch_spec:
              self.svn_branch = MatchSvnGlob(url, base_url, fetch_spec, False)
              if self.svn_branch:
                break
            branch_spec = RunGit(
                ['config', 'svn-remote.%s.branches' % remote],
                error_ok=True).strip()
            if branch_spec:
              self.svn_branch = MatchSvnGlob(url, base_url, branch_spec, True)
              if self.svn_branch:
                break
            tag_spec = RunGit(
                ['config', 'svn-remote.%s.tags' % remote],
                error_ok=True).strip()
            if tag_spec:
              self.svn_branch = MatchSvnGlob(url, base_url, tag_spec, True)
              if self.svn_branch:
                break

      if not self.svn_branch:
        DieWithError('Can\'t guess svn branch -- try specifying it on the '
            'command line')

    return self.svn_branch

  def GetTreeStatusUrl(self, error_ok=False):
    if not self.tree_status_url:
      error_message = ('You must configure your tree status URL by running '
                       '"git cl config".')
      self.tree_status_url = self._GetRietveldConfig(
          'tree-status-url', error_ok=error_ok, error_message=error_message)
    return self.tree_status_url

  def GetViewVCUrl(self):
    if not self.viewvc_url:
      self.viewvc_url = self._GetRietveldConfig('viewvc-url', error_ok=True)
    return self.viewvc_url

  def GetBugPrefix(self):
    return self._GetRietveldConfig('bug-prefix', error_ok=True)

  def GetDefaultCCList(self):
    return self._GetRietveldConfig('cc', error_ok=True)

  def GetDefaultPrivateFlag(self):
    return self._GetRietveldConfig('private', error_ok=True)

  def GetIsGerrit(self):
    """Return true if this repo is assosiated with gerrit code review system."""
    if self.is_gerrit is None:
      self.is_gerrit = self._GetConfig('gerrit.host', error_ok=True)
    return self.is_gerrit

  def GetGitEditor(self):
    """Return the editor specified in the git config, or None if none is."""
    if self.git_editor is None:
      self.git_editor = self._GetConfig('core.editor', error_ok=True)
    return self.git_editor or None

  def GetLintRegex(self):
    return (self._GetRietveldConfig('cpplint-regex', error_ok=True) or
            DEFAULT_LINT_REGEX)

  def GetLintIgnoreRegex(self):
    return (self._GetRietveldConfig('cpplint-ignore-regex', error_ok=True) or
            DEFAULT_LINT_IGNORE_REGEX)

  def _GetRietveldConfig(self, param, **kwargs):
    return self._GetConfig('rietveld.' + param, **kwargs)

  def _GetConfig(self, param, **kwargs):
    self.LazyUpdateIfNeeded()
    return RunGit(['config', param], **kwargs).strip()


def ShortBranchName(branch):
  """Convert a name like 'refs/heads/foo' to just 'foo'."""
  return branch.replace('refs/heads/', '')


class Changelist(object):
  def __init__(self, branchref=None, issue=None):
    # Poke settings so we get the "configure your server" message if necessary.
    global settings
    if not settings:
      # Happens when git_cl.py is used as a utility library.
      settings = Settings()
    settings.GetDefaultServerUrl()
    self.branchref = branchref
    if self.branchref:
      self.branch = ShortBranchName(self.branchref)
    else:
      self.branch = None
    self.rietveld_server = None
    self.upstream_branch = None
    self.lookedup_issue = False
    self.issue = issue or None
    self.has_description = False
    self.description = None
    self.lookedup_patchset = False
    self.patchset = None
    self._rpc_server = None
    self.cc = None
    self.watchers = ()
    self._remote = None
    self._props = None

  def GetCCList(self):
    """Return the users cc'd on this CL.

    Return is a string suitable for passing to gcl with the --cc flag.
    """
    if self.cc is None:
      base_cc = settings.GetDefaultCCList()
      more_cc = ','.join(self.watchers)
      self.cc = ','.join(filter(None, (base_cc, more_cc))) or ''
    return self.cc

  def GetCCListWithoutDefault(self):
    """Return the users cc'd on this CL excluding default ones."""
    if self.cc is None:
      self.cc = ','.join(self.watchers)
    return self.cc

  def SetWatchers(self, watchers):
    """Set the list of email addresses that should be cc'd based on the changed
       files in this CL.
    """
    self.watchers = watchers

  def GetBranch(self):
    """Returns the short branch name, e.g. 'master'."""
    if not self.branch:
      self.branchref = RunGit(['symbolic-ref', 'HEAD']).strip()
      self.branch = ShortBranchName(self.branchref)
    return self.branch

  def GetBranchRef(self):
    """Returns the full branch name, e.g. 'refs/heads/master'."""
    self.GetBranch()  # Poke the lazy loader.
    return self.branchref

  @staticmethod
  def FetchUpstreamTuple(branch):
    """Returns a tuple containing remote and remote ref,
       e.g. 'origin', 'refs/heads/master'
    """
    remote = '.'
    upstream_branch = RunGit(['config', 'branch.%s.merge' % branch],
                             error_ok=True).strip()
    if upstream_branch:
      remote = RunGit(['config', 'branch.%s.remote' % branch]).strip()
    else:
      upstream_branch = RunGit(['config', 'rietveld.upstream-branch'],
                               error_ok=True).strip()
      if upstream_branch:
        remote = RunGit(['config', 'rietveld.upstream-remote']).strip()
      else:
        # Fall back on trying a git-svn upstream branch.
        if settings.GetIsGitSvn():
          upstream_branch = settings.GetSVNBranch()
        else:
          # Else, try to guess the origin remote.
          remote_branches = RunGit(['branch', '-r']).split()
          if 'origin/master' in remote_branches:
            # Fall back on origin/master if it exits.
            remote = 'origin'
            upstream_branch = 'refs/heads/master'
          elif 'origin/trunk' in remote_branches:
            # Fall back on origin/trunk if it exists. Generally a shared
            # git-svn clone
            remote = 'origin'
            upstream_branch = 'refs/heads/trunk'
          else:
            DieWithError("""Unable to determine default branch to diff against.
Either pass complete "git diff"-style arguments, like
  git cl upload origin/master
or verify this branch is set up to track another (via the --track argument to
"git checkout -b ...").""")

    return remote, upstream_branch

  def GetCommonAncestorWithUpstream(self):
    return git_common.get_or_create_merge_base(self.GetBranch(),
                                               self.GetUpstreamBranch())

  def GetUpstreamBranch(self):
    if self.upstream_branch is None:
      remote, upstream_branch = self.FetchUpstreamTuple(self.GetBranch())
      if remote is not '.':
        upstream_branch = upstream_branch.replace('heads', 'remotes/' + remote)
      self.upstream_branch = upstream_branch
    return self.upstream_branch

  def GetRemoteBranch(self):
    if not self._remote:
      remote, branch = None, self.GetBranch()
      seen_branches = set()
      while branch not in seen_branches:
        seen_branches.add(branch)
        remote, branch = self.FetchUpstreamTuple(branch)
        branch = ShortBranchName(branch)
        if remote != '.' or branch.startswith('refs/remotes'):
          break
      else:
        remotes = RunGit(['remote'], error_ok=True).split()
        if len(remotes) == 1:
          remote, = remotes
        elif 'origin' in remotes:
          remote = 'origin'
          logging.warning('Could not determine which remote this change is '
                          'associated with, so defaulting to "%s".  This may '
                          'not be what you want.  You may prevent this message '
                          'by running "git svn info" as documented here:  %s',
                          self._remote,
                          GIT_INSTRUCTIONS_URL)
        else:
          logging.warn('Could not determine which remote this change is '
                       'associated with.  You may prevent this message by '
                       'running "git svn info" as documented here:  %s',
                       GIT_INSTRUCTIONS_URL)
        branch = 'HEAD'
      if branch.startswith('refs/remotes'):
        self._remote = (remote, branch)
      else:
        self._remote = (remote, 'refs/remotes/%s/%s' % (remote, branch))
    return self._remote

  def GitSanityChecks(self, upstream_git_obj):
    """Checks git repo status and ensures diff is from local commits."""

    # Verify the commit we're diffing against is in our current branch.
    upstream_sha = RunGit(['rev-parse', '--verify', upstream_git_obj]).strip()
    common_ancestor = RunGit(['merge-base', upstream_sha, 'HEAD']).strip()
    if upstream_sha != common_ancestor:
      print >> sys.stderr, (
          'ERROR: %s is not in the current branch.  You may need to rebase '
          'your tracking branch' % upstream_sha)
      return False

    # List the commits inside the diff, and verify they are all local.
    commits_in_diff = RunGit(
        ['rev-list', '^%s' % upstream_sha, 'HEAD']).splitlines()
    code, remote_branch = RunGitWithCode(['config', 'gitcl.remotebranch'])
    remote_branch = remote_branch.strip()
    if code != 0:
      _, remote_branch = self.GetRemoteBranch()

    commits_in_remote = RunGit(
        ['rev-list', '^%s' % upstream_sha, remote_branch]).splitlines()

    common_commits = set(commits_in_diff) & set(commits_in_remote)
    if common_commits:
      print >> sys.stderr, (
          'ERROR: Your diff contains %d commits already in %s.\n'
          'Run "git log --oneline %s..HEAD" to get a list of commits in '
          'the diff.  If you are using a custom git flow, you can override'
          ' the reference used for this check with "git config '
          'gitcl.remotebranch <git-ref>".' % (
              len(common_commits), remote_branch, upstream_git_obj))
      return False
    return True

  def GetGitBaseUrlFromConfig(self):
    """Return the configured base URL from branch.<branchname>.baseurl.

    Returns None if it is not set.
    """
    return RunGit(['config', 'branch.%s.base-url' % self.GetBranch()],
                  error_ok=True).strip()

  def GetRemoteUrl(self):
    """Return the configured remote URL, e.g. 'git://example.org/foo.git/'.

    Returns None if there is no remote.
    """
    remote, _ = self.GetRemoteBranch()
    return RunGit(['config', 'remote.%s.url' % remote], error_ok=True).strip()

  def GetIssue(self):
    """Returns the issue number as a int or None if not set."""
    if self.issue is None and not self.lookedup_issue:
      issue = RunGit(['config', self._IssueSetting()], error_ok=True).strip()
      self.issue = int(issue) or None if issue else None
      self.lookedup_issue = True
    return self.issue

  def GetRietveldServer(self):
    if not self.rietveld_server:
      # If we're on a branch then get the server potentially associated
      # with that branch.
      if self.GetIssue():
        self.rietveld_server = gclient_utils.UpgradeToHttps(RunGit(
            ['config', self._RietveldServer()], error_ok=True).strip())
      if not self.rietveld_server:
        self.rietveld_server = settings.GetDefaultServerUrl()
    return self.rietveld_server

  def GetIssueURL(self):
    """Get the URL for a particular issue."""
    if not self.GetIssue():
      return None
    return '%s/%s' % (self.GetRietveldServer(), self.GetIssue())

  def GetDescription(self, pretty=False):
    if not self.has_description:
      if self.GetIssue():
        issue = self.GetIssue()
        try:
          self.description = self.RpcServer().get_description(issue).strip()
        except urllib2.HTTPError, e:
          if e.code == 404:
            DieWithError(
                ('\nWhile fetching the description for issue %d, received a '
                 '404 (not found)\n'
                 'error. It is likely that you deleted this '
                 'issue on the server. If this is the\n'
                 'case, please run\n\n'
                 '    git cl issue 0\n\n'
                 'to clear the association with the deleted issue. Then run '
                 'this command again.') % issue)
          else:
            DieWithError(
                '\nFailed to fetch issue description. HTTP error %d' % e.code)
      self.has_description = True
    if pretty:
      wrapper = textwrap.TextWrapper()
      wrapper.initial_indent = wrapper.subsequent_indent = '  '
      return wrapper.fill(self.description)
    return self.description

  def GetPatchset(self):
    """Returns the patchset number as a int or None if not set."""
    if self.patchset is None and not self.lookedup_patchset:
      patchset = RunGit(['config', self._PatchsetSetting()],
                        error_ok=True).strip()
      self.patchset = int(patchset) or None if patchset else None
      self.lookedup_patchset = True
    return self.patchset

  def SetPatchset(self, patchset):
    """Set this branch's patchset.  If patchset=0, clears the patchset."""
    if patchset:
      RunGit(['config', self._PatchsetSetting(), str(patchset)])
      self.patchset = patchset
    else:
      RunGit(['config', '--unset', self._PatchsetSetting()],
             stderr=subprocess2.PIPE, error_ok=True)
      self.patchset = None

  def GetMostRecentPatchset(self):
    return self.GetIssueProperties()['patchsets'][-1]

  def GetPatchSetDiff(self, issue, patchset):
    return self.RpcServer().get(
        '/download/issue%s_%s.diff' % (issue, patchset))

  def GetIssueProperties(self):
    if self._props is None:
      issue = self.GetIssue()
      if not issue:
        self._props = {}
      else:
        self._props = self.RpcServer().get_issue_properties(issue, True)
    return self._props

  def GetApprovingReviewers(self):
    return get_approving_reviewers(self.GetIssueProperties())

  def SetIssue(self, issue):
    """Set this branch's issue.  If issue=0, clears the issue."""
    if issue:
      self.issue = issue
      RunGit(['config', self._IssueSetting(), str(issue)])
      if self.rietveld_server:
        RunGit(['config', self._RietveldServer(), self.rietveld_server])
    else:
      current_issue = self.GetIssue()
      if current_issue:
        RunGit(['config', '--unset', self._IssueSetting()])
      self.issue = None
      self.SetPatchset(None)

  def GetChange(self, upstream_branch, author):
    if not self.GitSanityChecks(upstream_branch):
      DieWithError('\nGit sanity check failure')

    root = settings.GetRelativeRoot()
    if not root:
      root = '.'
    absroot = os.path.abspath(root)

    # We use the sha1 of HEAD as a name of this change.
    name = RunGitWithCode(['rev-parse', 'HEAD'])[1].strip()
    # Need to pass a relative path for msysgit.
    try:
      files = scm.GIT.CaptureStatus([root], '.', upstream_branch)
    except subprocess2.CalledProcessError:
      DieWithError(
          ('\nFailed to diff against upstream branch %s\n\n'
           'This branch probably doesn\'t exist anymore. To reset the\n'
           'tracking branch, please run\n'
           '    git branch --set-upstream %s trunk\n'
           'replacing trunk with origin/master or the relevant branch') %
          (upstream_branch, self.GetBranch()))

    issue = self.GetIssue()
    patchset = self.GetPatchset()
    if issue:
      description = self.GetDescription()
    else:
      # If the change was never uploaded, use the log messages of all commits
      # up to the branch point, as git cl upload will prefill the description
      # with these log messages.
      args = ['log', '--pretty=format:%s%n%n%b', '%s...' % (upstream_branch)]
      description = RunGitWithCode(args)[1].strip()

    if not author:
      author = RunGit(['config', 'user.email']).strip() or None
    return presubmit_support.GitChange(
        name,
        description,
        absroot,
        files,
        issue,
        patchset,
        author)

  def RunHook(self, committing, may_prompt, verbose, change):
    """Calls sys.exit() if the hook fails; returns a HookResults otherwise."""

    try:
      return presubmit_support.DoPresubmitChecks(change, committing,
          verbose=verbose, output_stream=sys.stdout, input_stream=sys.stdin,
          default_presubmit=None, may_prompt=may_prompt,
          rietveld_obj=self.RpcServer())
    except presubmit_support.PresubmitFailure, e:
      DieWithError(
          ('%s\nMaybe your depot_tools is out of date?\n'
           'If all fails, contact maruel@') % e)

  def UpdateDescription(self, description):
    self.description = description
    return self.RpcServer().update_description(
        self.GetIssue(), self.description)

  def CloseIssue(self):
    """Updates the description and closes the issue."""
    return self.RpcServer().close_issue(self.GetIssue())

  def SetFlag(self, flag, value):
    """Patchset must match."""
    if not self.GetPatchset():
      DieWithError('The patchset needs to match. Send another patchset.')
    try:
      return self.RpcServer().set_flag(
          self.GetIssue(), self.GetPatchset(), flag, value)
    except urllib2.HTTPError, e:
      if e.code == 404:
        DieWithError('The issue %s doesn\'t exist.' % self.GetIssue())
      if e.code == 403:
        DieWithError(
            ('Access denied to issue %s. Maybe the patchset %s doesn\'t '
             'match?') % (self.GetIssue(), self.GetPatchset()))
      raise

  def RpcServer(self):
    """Returns an upload.RpcServer() to access this review's rietveld instance.
    """
    if not self._rpc_server:
      self._rpc_server = rietveld.CachingRietveld(
          self.GetRietveldServer(), None, None)
    return self._rpc_server

  def _IssueSetting(self):
    """Return the git setting that stores this change's issue."""
    return 'branch.%s.rietveldissue' % self.GetBranch()

  def _PatchsetSetting(self):
    """Return the git setting that stores this change's most recent patchset."""
    return 'branch.%s.rietveldpatchset' % self.GetBranch()

  def _RietveldServer(self):
    """Returns the git setting that stores this change's rietveld server."""
    return 'branch.%s.rietveldserver' % self.GetBranch()


def GetCodereviewSettingsInteractively():
  """Prompt the user for settings."""
  # TODO(ukai): ask code review system is rietveld or gerrit?
  server = settings.GetDefaultServerUrl(error_ok=True)
  prompt = 'Rietveld server (host[:port])'
  prompt += ' [%s]' % (server or DEFAULT_SERVER)
  newserver = ask_for_data(prompt + ':')
  if not server and not newserver:
    newserver = DEFAULT_SERVER
  if newserver:
    newserver = gclient_utils.UpgradeToHttps(newserver)
    if newserver != server:
      RunGit(['config', 'rietveld.server', newserver])

  def SetProperty(initial, caption, name, is_url):
    prompt = caption
    if initial:
      prompt += ' ("x" to clear) [%s]' % initial
    new_val = ask_for_data(prompt + ':')
    if new_val == 'x':
      RunGit(['config', '--unset-all', 'rietveld.' + name], error_ok=True)
    elif new_val:
      if is_url:
        new_val = gclient_utils.UpgradeToHttps(new_val)
      if new_val != initial:
        RunGit(['config', 'rietveld.' + name, new_val])

  SetProperty(settings.GetDefaultCCList(), 'CC list', 'cc', False)
  SetProperty(settings.GetDefaultPrivateFlag(),
              'Private flag (rietveld only)', 'private', False)
  SetProperty(settings.GetTreeStatusUrl(error_ok=True), 'Tree status URL',
              'tree-status-url', False)
  SetProperty(settings.GetViewVCUrl(), 'ViewVC URL', 'viewvc-url', True)
  SetProperty(settings.GetBugPrefix(), 'Bug Prefix', 'bug-prefix', False)

  # TODO: configure a default branch to diff against, rather than this
  # svn-based hackery.


class ChangeDescription(object):
  """Contains a parsed form of the change description."""
  R_LINE = r'^[ \t]*(TBR|R)[ \t]*=[ \t]*(.*?)[ \t]*$'
  BUG_LINE = r'^[ \t]*(BUG)[ \t]*=[ \t]*(.*?)[ \t]*$'

  def __init__(self, description):
    self._description_lines = (description or '').strip().splitlines()

  @property               # www.logilab.org/ticket/89786
  def description(self):  # pylint: disable=E0202
    return '\n'.join(self._description_lines)

  def set_description(self, desc):
    if isinstance(desc, basestring):
      lines = desc.splitlines()
    else:
      lines = [line.rstrip() for line in desc]
    while lines and not lines[0]:
      lines.pop(0)
    while lines and not lines[-1]:
      lines.pop(-1)
    self._description_lines = lines

  def update_reviewers(self, reviewers):
    """Rewrites the R=/TBR= line(s) as a single line each."""
    assert isinstance(reviewers, list), reviewers
    if not reviewers:
      return
    reviewers = reviewers[:]

    # Get the set of R= and TBR= lines and remove them from the desciption.
    regexp = re.compile(self.R_LINE)
    matches = [regexp.match(line) for line in self._description_lines]
    new_desc = [l for i, l in enumerate(self._description_lines)
                if not matches[i]]
    self.set_description(new_desc)

    # Construct new unified R= and TBR= lines.
    r_names = []
    tbr_names = []
    for match in matches:
      if not match:
        continue
      people = cleanup_list([match.group(2).strip()])
      if match.group(1) == 'TBR':
        tbr_names.extend(people)
      else:
        r_names.extend(people)
    for name in r_names:
      if name not in reviewers:
        reviewers.append(name)
    new_r_line = 'R=' + ', '.join(reviewers) if reviewers else None
    new_tbr_line = 'TBR=' + ', '.join(tbr_names) if tbr_names else None

    # Put the new lines in the description where the old first R= line was.
    line_loc = next((i for i, match in enumerate(matches) if match), -1)
    if 0 <= line_loc < len(self._description_lines):
      if new_tbr_line:
        self._description_lines.insert(line_loc, new_tbr_line)
      if new_r_line:
        self._description_lines.insert(line_loc, new_r_line)
    else:
      if new_r_line:
        self.append_footer(new_r_line)
      if new_tbr_line:
        self.append_footer(new_tbr_line)

  def prompt(self):
    """Asks the user to update the description."""
    self.set_description([
      '# Enter a description of the change.',
      '# This will be displayed on the codereview site.',
      '# The first line will also be used as the subject of the review.',
      '#--------------------This line is 72 characters long'
      '--------------------',
    ] + self._description_lines)

    regexp = re.compile(self.BUG_LINE)
    if not any((regexp.match(line) for line in self._description_lines)):
      self.append_footer('BUG=%s' % settings.GetBugPrefix())
    content = gclient_utils.RunEditor(self.description, True,
                                      git_editor=settings.GetGitEditor())
    if not content:
      DieWithError('Running editor failed')
    lines = content.splitlines()

    # Strip off comments.
    clean_lines = [line.rstrip() for line in lines if not line.startswith('#')]
    if not clean_lines:
      DieWithError('No CL description, aborting')
    self.set_description(clean_lines)

  def append_footer(self, line):
    if self._description_lines:
      # Add an empty line if either the last line or the new line isn't a tag.
      last_line = self._description_lines[-1]
      if (not presubmit_support.Change.TAG_LINE_RE.match(last_line) or
          not presubmit_support.Change.TAG_LINE_RE.match(line)):
        self._description_lines.append('')
    self._description_lines.append(line)

  def get_reviewers(self):
    """Retrieves the list of reviewers."""
    matches = [re.match(self.R_LINE, line) for line in self._description_lines]
    reviewers = [match.group(2).strip() for match in matches if match]
    return cleanup_list(reviewers)


def get_approving_reviewers(props):
  """Retrieves the reviewers that approved a CL from the issue properties with
  messages.

  Note that the list may contain reviewers that are not committer, thus are not
  considered by the CQ.
  """
  return sorted(
      set(
        message['sender']
        for message in props['messages']
        if message['approval'] and message['sender'] in props['reviewers']
      )
  )


def FindCodereviewSettingsFile(filename='codereview.settings'):
  """Finds the given file starting in the cwd and going up.

  Only looks up to the top of the repository unless an
  'inherit-review-settings-ok' file exists in the root of the repository.
  """
  inherit_ok_file = 'inherit-review-settings-ok'
  cwd = os.getcwd()
  root = settings.GetRoot()
  if os.path.isfile(os.path.join(root, inherit_ok_file)):
    root = '/'
  while True:
    if filename in os.listdir(cwd):
      if os.path.isfile(os.path.join(cwd, filename)):
        return open(os.path.join(cwd, filename))
    if cwd == root:
      break
    cwd = os.path.dirname(cwd)


def LoadCodereviewSettingsFromFile(fileobj):
  """Parse a codereview.settings file and updates hooks."""
  keyvals = gclient_utils.ParseCodereviewSettingsContent(fileobj.read())

  def SetProperty(name, setting, unset_error_ok=False):
    fullname = 'rietveld.' + name
    if setting in keyvals:
      RunGit(['config', fullname, keyvals[setting]])
    else:
      RunGit(['config', '--unset-all', fullname], error_ok=unset_error_ok)

  SetProperty('server', 'CODE_REVIEW_SERVER')
  # Only server setting is required. Other settings can be absent.
  # In that case, we ignore errors raised during option deletion attempt.
  SetProperty('cc', 'CC_LIST', unset_error_ok=True)
  SetProperty('private', 'PRIVATE', unset_error_ok=True)
  SetProperty('tree-status-url', 'STATUS', unset_error_ok=True)
  SetProperty('viewvc-url', 'VIEW_VC', unset_error_ok=True)
  SetProperty('bug-prefix', 'BUG_PREFIX', unset_error_ok=True)
  SetProperty('cpplint-regex', 'LINT_REGEX', unset_error_ok=True)
  SetProperty('cpplint-ignore-regex', 'LINT_IGNORE_REGEX', unset_error_ok=True)

  if 'GERRIT_HOST' in keyvals:
    RunGit(['config', 'gerrit.host', keyvals['GERRIT_HOST']])

  if 'PUSH_URL_CONFIG' in keyvals and 'ORIGIN_URL_CONFIG' in keyvals:
    #should be of the form
    #PUSH_URL_CONFIG: url.ssh://gitrw.chromium.org.pushinsteadof
    #ORIGIN_URL_CONFIG: http://src.chromium.org/git
    RunGit(['config', keyvals['PUSH_URL_CONFIG'],
            keyvals['ORIGIN_URL_CONFIG']])


def urlretrieve(source, destination):
  """urllib is broken for SSL connections via a proxy therefore we
  can't use urllib.urlretrieve()."""
  with open(destination, 'w') as f:
    f.write(urllib2.urlopen(source).read())


def hasSheBang(fname):
  """Checks fname is a #! script."""
  with open(fname) as f:
    return f.read(2).startswith('#!')


def DownloadHooks(force):
  """downloads hooks

  Args:
    force: True to update hooks. False to install hooks if not present.
  """
  if not settings.GetIsGerrit():
    return
  src = 'https://gerrit-review.googlesource.com/tools/hooks/commit-msg'
  dst = os.path.join(settings.GetRoot(), '.git', 'hooks', 'commit-msg')
  if not os.access(dst, os.X_OK):
    if os.path.exists(dst):
      if not force:
        return
    try:
      urlretrieve(src, dst)
      if not hasSheBang(dst):
        DieWithError('Not a script: %s\n'
                     'You need to download from\n%s\n'
                     'into .git/hooks/commit-msg and '
                     'chmod +x .git/hooks/commit-msg' % (dst, src))
      os.chmod(dst, stat.S_IRUSR | stat.S_IWUSR | stat.S_IXUSR)
    except Exception:
      if os.path.exists(dst):
        os.remove(dst)
      DieWithError('\nFailed to download hooks.\n'
                   'You need to download from\n%s\n'
                   'into .git/hooks/commit-msg and '
                   'chmod +x .git/hooks/commit-msg' % src)


@subcommand.usage('[repo root containing codereview.settings]')
def CMDconfig(parser, args):
  """Edits configuration for this tree."""

  parser.add_option('--activate-update', action='store_true',
                    help='activate auto-updating [rietveld] section in '
                         '.git/config')
  parser.add_option('--deactivate-update', action='store_true',
                    help='deactivate auto-updating [rietveld] section in '
                         '.git/config')
  options, args = parser.parse_args(args)

  if options.deactivate_update:
    RunGit(['config', 'rietveld.autoupdate', 'false'])
    return

  if options.activate_update:
    RunGit(['config', '--unset', 'rietveld.autoupdate'])
    return

  if len(args) == 0:
    GetCodereviewSettingsInteractively()
    DownloadHooks(True)
    return 0

  url = args[0]
  if not url.endswith('codereview.settings'):
    url = os.path.join(url, 'codereview.settings')

  # Load code review settings and download hooks (if available).
  LoadCodereviewSettingsFromFile(urllib2.urlopen(url))
  DownloadHooks(True)
  return 0


def CMDbaseurl(parser, args):
  """Gets or sets base-url for this branch."""
  branchref = RunGit(['symbolic-ref', 'HEAD']).strip()
  branch = ShortBranchName(branchref)
  _, args = parser.parse_args(args)
  if not args:
    print("Current base-url:")
    return RunGit(['config', 'branch.%s.base-url' % branch],
                  error_ok=False).strip()
  else:
    print("Setting base-url to %s" % args[0])
    return RunGit(['config', 'branch.%s.base-url' % branch, args[0]],
                  error_ok=False).strip()


def CMDstatus(parser, args):
  """Show status of changelists.

  Colors are used to tell the state of the CL unless --fast is used:
    - Red      not sent for review or broken
    - Blue     waiting for review
    - Yellow   waiting for you to reply to review
    - Green    LGTM'ed
    - Magenta  in the commit queue
    - Cyan     was committed, branch can be deleted

  Also see 'git cl comments'.
  """
  parser.add_option('--field',
                    help='print only specific field (desc|id|patch|url)')
  parser.add_option('-f', '--fast', action='store_true',
                    help='Do not retrieve review status')
  (options, args) = parser.parse_args(args)
  if args:
    parser.error('Unsupported args: %s' % args)

  if options.field:
    cl = Changelist()
    if options.field.startswith('desc'):
      print cl.GetDescription()
    elif options.field == 'id':
      issueid = cl.GetIssue()
      if issueid:
        print issueid
    elif options.field == 'patch':
      patchset = cl.GetPatchset()
      if patchset:
        print patchset
    elif options.field == 'url':
      url = cl.GetIssueURL()
      if url:
        print url
    return 0

  branches = RunGit(['for-each-ref', '--format=%(refname)', 'refs/heads'])
  if not branches:
    print('No local branch found.')
    return 0

  changes = (Changelist(branchref=b) for b in branches.splitlines())
  branches = dict((c.GetBranch(), c.GetIssueURL()) for c in changes)
  alignment = max(5, max(len(b) for b in branches))
  print 'Branches associated with reviews:'
  # Adhoc thread pool to request data concurrently.
  output = Queue.Queue()

  # Silence upload.py otherwise it becomes unweldly.
  upload.verbosity = 0

  if not options.fast:
    def fetch(b):
      """Fetches information for an issue and returns (branch, issue, color)."""
      c = Changelist(branchref=b)
      i = c.GetIssueURL()
      props = {}
      r = None
      if i:
        try:
          props = c.GetIssueProperties()
          r = c.GetApprovingReviewers() if i else None
        except urllib2.HTTPError:
          # The issue probably doesn't exist anymore.
          i += ' (broken)'

      msgs = props.get('messages') or []

      if not i:
        color = Fore.WHITE
      elif props.get('closed'):
        # Issue is closed.
        color = Fore.CYAN
      elif props.get('commit'):
        # Issue is in the commit queue.
        color = Fore.MAGENTA
      elif r:
        # Was LGTM'ed.
        color = Fore.GREEN
      elif not msgs:
        # No message was sent.
        color = Fore.RED
      elif msgs[-1]['sender'] != props.get('owner_email'):
        color = Fore.YELLOW
      else:
        color = Fore.BLUE
      output.put((b, i, color))

    threads = [threading.Thread(target=fetch, args=(b,)) for b in branches]
    for t in threads:
      t.daemon = True
      t.start()
  else:
    # Do not use GetApprovingReviewers(), since it requires an HTTP request.
    for b in branches:
      c = Changelist(branchref=b)
      url = c.GetIssueURL()
      output.put((b, url, Fore.BLUE if url else Fore.WHITE))

  tmp = {}
  alignment = max(5, max(len(ShortBranchName(b)) for b in branches))
  for branch in sorted(branches):
    while branch not in tmp:
      b, i, color = output.get()
      tmp[b] = (i, color)
    issue, color = tmp.pop(branch)
    reset = Fore.RESET
    if not sys.stdout.isatty():
      color = ''
      reset = ''
    print '  %*s : %s%s%s' % (
          alignment, ShortBranchName(branch), color, issue, reset)

  cl = Changelist()
  print
  print 'Current branch:',
  if not cl.GetIssue():
    print 'no issue assigned.'
    return 0
  print cl.GetBranch()
  print 'Issue number: %s (%s)' % (cl.GetIssue(), cl.GetIssueURL())
  print 'Issue description:'
  print cl.GetDescription(pretty=True)
  return 0


def colorize_CMDstatus_doc():
  """To be called once in main() to add colors to git cl status help."""
  colors = [i for i in dir(Fore) if i[0].isupper()]

  def colorize_line(line):
    for color in colors:
      if color in line.upper():
        # Extract whitespaces first and the leading '-'.
        indent = len(line) - len(line.lstrip(' ')) + 1
        return line[:indent] + getattr(Fore, color) + line[indent:] + Fore.RESET
    return line

  lines = CMDstatus.__doc__.splitlines()
  CMDstatus.__doc__ = '\n'.join(colorize_line(l) for l in lines)


@subcommand.usage('[issue_number]')
def CMDissue(parser, args):
  """Sets or displays the current code review issue number.

  Pass issue number 0 to clear the current issue.
  """
  _, args = parser.parse_args(args)

  cl = Changelist()
  if len(args) > 0:
    try:
      issue = int(args[0])
    except ValueError:
      DieWithError('Pass a number to set the issue or none to list it.\n'
          'Maybe you want to run git cl status?')
    cl.SetIssue(issue)
  print 'Issue number: %s (%s)' % (cl.GetIssue(), cl.GetIssueURL())
  return 0


def CMDcomments(parser, args):
  """Shows review comments of the current changelist."""
  (_, args) = parser.parse_args(args)
  if args:
    parser.error('Unsupported argument: %s' % args)

  cl = Changelist()
  if cl.GetIssue():
    data = cl.GetIssueProperties()
    for message in sorted(data['messages'], key=lambda x: x['date']):
      if message['disapproval']:
        color = Fore.RED
      elif message['approval']:
        color = Fore.GREEN
      elif message['sender'] == data['owner_email']:
        color = Fore.MAGENTA
      else:
        color = Fore.BLUE
      print '\n%s%s  %s%s' % (
          color, message['date'].split('.', 1)[0], message['sender'],
          Fore.RESET)
      if message['text'].strip():
        print '\n'.join('  ' + l for l in message['text'].splitlines())
  return 0


def CMDdescription(parser, args):
  """Brings up the editor for the current CL's description."""
  cl = Changelist()
  if not cl.GetIssue():
    DieWithError('This branch has no associated changelist.')
  description = ChangeDescription(cl.GetDescription())
  description.prompt()
  cl.UpdateDescription(description.description)
  return 0


def CreateDescriptionFromLog(args):
  """Pulls out the commit log to use as a base for the CL description."""
  log_args = []
  if len(args) == 1 and not args[0].endswith('.'):
    log_args = [args[0] + '..']
  elif len(args) == 1 and args[0].endswith('...'):
    log_args = [args[0][:-1]]
  elif len(args) == 2:
    log_args = [args[0] + '..' + args[1]]
  else:
    log_args = args[:]  # Hope for the best!
  return RunGit(['log', '--pretty=format:%s\n\n%b'] + log_args)


def CMDlint(parser, args):
  """Runs cpplint on the current changelist."""
  parser.add_option('--filter', action='append', metavar='-x,+y',
                    help='Comma-separated list of cpplint\'s category-filters')
  (options, args) = parser.parse_args(args)

  # Access to a protected member _XX of a client class
  # pylint: disable=W0212
  try:
    import cpplint
    import cpplint_chromium
  except ImportError:
    print "Your depot_tools is missing cpplint.py and/or cpplint_chromium.py."
    return 1

  # Change the current working directory before calling lint so that it
  # shows the correct base.
  previous_cwd = os.getcwd()
  os.chdir(settings.GetRoot())
  try:
    cl = Changelist()
    change = cl.GetChange(cl.GetCommonAncestorWithUpstream(), None)
    files = [f.LocalPath() for f in change.AffectedFiles()]

    # Process cpplints arguments if any.
    command = args + files
    if options.filter:
      command = ['--filter=' + ','.join(options.filter)] + command
    filenames = cpplint.ParseArguments(command)

    white_regex = re.compile(settings.GetLintRegex())
    black_regex = re.compile(settings.GetLintIgnoreRegex())
    extra_check_functions = [cpplint_chromium.CheckPointerDeclarationWhitespace]
    for filename in filenames:
      if white_regex.match(filename):
        if black_regex.match(filename):
          print "Ignoring file %s" % filename
        else:
          cpplint.ProcessFile(filename, cpplint._cpplint_state.verbose_level,
                              extra_check_functions)
      else:
        print "Skipping file %s" % filename
  finally:
    os.chdir(previous_cwd)
  print "Total errors found: %d\n" % cpplint._cpplint_state.error_count
  if cpplint._cpplint_state.error_count != 0:
    return 1
  return 0


def CMDpresubmit(parser, args):
  """Runs presubmit tests on the current changelist."""
  parser.add_option('-u', '--upload', action='store_true',
                    help='Run upload hook instead of the push/dcommit hook')
  parser.add_option('-f', '--force', action='store_true',
                    help='Run checks even if tree is dirty')
  (options, args) = parser.parse_args(args)

  if not options.force and is_dirty_git_tree('presubmit'):
    print 'use --force to check even if tree is dirty.'
    return 1

  cl = Changelist()
  if args:
    base_branch = args[0]
  else:
    # Default to diffing against the common ancestor of the upstream branch.
    base_branch = cl.GetCommonAncestorWithUpstream()

  cl.RunHook(
      committing=not options.upload,
      may_prompt=False,
      verbose=options.verbose,
      change=cl.GetChange(base_branch, None))
  return 0


def AddChangeIdToCommitMessage(options, args):
  """Re-commits using the current message, assumes the commit hook is in
  place.
  """
  log_desc = options.message or CreateDescriptionFromLog(args)
  git_command = ['commit', '--amend', '-m', log_desc]
  RunGit(git_command)
  new_log_desc = CreateDescriptionFromLog(args)
  if CHANGE_ID in new_log_desc:
    print 'git-cl: Added Change-Id to commit message.'
  else:
    print >> sys.stderr, 'ERROR: Gerrit commit-msg hook not available.'


def GerritUpload(options, args, cl):
  """upload the current branch to gerrit."""
  # We assume the remote called "origin" is the one we want.
  # It is probably not worthwhile to support different workflows.
  remote = 'origin'
  branch = 'master'
  if options.target_branch:
    branch = options.target_branch

  change_desc = ChangeDescription(
      options.message or CreateDescriptionFromLog(args))
  if not change_desc.description:
    print "Description is empty; aborting."
    return 1
  if CHANGE_ID not in change_desc.description:
    AddChangeIdToCommitMessage(options, args)
  if options.reviewers:
    change_desc.update_reviewers(options.reviewers)

  receive_options = []
  cc = cl.GetCCList().split(',')
  if options.cc:
    cc.extend(options.cc)
  cc = filter(None, cc)
  if cc:
    receive_options += ['--cc=' + email for email in cc]
  if change_desc.get_reviewers():
    receive_options.extend(
        '--reviewer=' + email for email in change_desc.get_reviewers())

  git_command = ['push']
  if receive_options:
    git_command.append('--receive-pack=git receive-pack %s' %
                       ' '.join(receive_options))
  git_command += [remote, 'HEAD:refs/for/' + branch]
  RunGit(git_command)
  # TODO(ukai): parse Change-Id: and set issue number?
  return 0


def RietveldUpload(options, args, cl):
  """upload the patch to rietveld."""
  upload_args = ['--assume_yes']  # Don't ask about untracked files.
  upload_args.extend(['--server', cl.GetRietveldServer()])
  if options.emulate_svn_auto_props:
    upload_args.append('--emulate_svn_auto_props')

  change_desc = None

  if options.email is not None:
    upload_args.extend(['--email', options.email])

  if cl.GetIssue():
    if options.title:
      upload_args.extend(['--title', options.title])
    if options.message:
      upload_args.extend(['--message', options.message])
    upload_args.extend(['--issue', str(cl.GetIssue())])
    print ("This branch is associated with issue %s. "
           "Adding patch to that issue." % cl.GetIssue())
  else:
    if options.title:
      upload_args.extend(['--title', options.title])
    message = options.title or options.message or CreateDescriptionFromLog(args)
    change_desc = ChangeDescription(message)
    if options.reviewers:
      change_desc.update_reviewers(options.reviewers)
    if not options.force:
      change_desc.prompt()

    if not change_desc.description:
      print "Description is empty; aborting."
      return 1

    upload_args.extend(['--message', change_desc.description])
    if change_desc.get_reviewers():
      upload_args.append('--reviewers=' + ','.join(change_desc.get_reviewers()))
    if options.send_mail:
      if not change_desc.get_reviewers():
        DieWithError("Must specify reviewers to send email.")
      upload_args.append('--send_mail')

    # We check this before applying rietveld.private assuming that in
    # rietveld.cc only addresses which we can send private CLs to are listed
    # if rietveld.private is set, and so we should ignore rietveld.cc only when
    # --private is specified explicitly on the command line.
    if options.private:
      logging.warn('rietveld.cc is ignored since private flag is specified.  '
                   'You need to review and add them manually if necessary.')
      cc = cl.GetCCListWithoutDefault()
    else:
      cc = cl.GetCCList()
    cc = ','.join(filter(None, (cc, ','.join(options.cc))))
    if cc:
      upload_args.extend(['--cc', cc])

  if options.private or settings.GetDefaultPrivateFlag() == "True":
    upload_args.append('--private')

  upload_args.extend(['--git_similarity', str(options.similarity)])
  if not options.find_copies:
    upload_args.extend(['--git_no_find_copies'])

  # Include the upstream repo's URL in the change -- this is useful for
  # projects that have their source spread across multiple repos.
  remote_url = cl.GetGitBaseUrlFromConfig()
  if not remote_url:
    if settings.GetIsGitSvn():
      # URL is dependent on the current directory.
      data = RunGit(['svn', 'info'], cwd=settings.GetRoot())
      if data:
        keys = dict(line.split(': ', 1) for line in data.splitlines()
                    if ': ' in line)
        remote_url = keys.get('URL', None)
    else:
      if cl.GetRemoteUrl() and '/' in cl.GetUpstreamBranch():
        remote_url = (cl.GetRemoteUrl() + '@'
                      + cl.GetUpstreamBranch().split('/')[-1])
  if remote_url:
    upload_args.extend(['--base_url', remote_url])

  try:
    upload_args = ['upload'] + upload_args + args
    logging.info('upload.RealMain(%s)', upload_args)
    issue, patchset = upload.RealMain(upload_args)
    issue = int(issue)
    patchset = int(patchset)
  except KeyboardInterrupt:
    sys.exit(1)
  except:
    # If we got an exception after the user typed a description for their
    # change, back up the description before re-raising.
    if change_desc:
      backup_path = os.path.expanduser(DESCRIPTION_BACKUP_FILE)
      print '\nGot exception while uploading -- saving description to %s\n' \
          % backup_path
      backup_file = open(backup_path, 'w')
      backup_file.write(change_desc.description)
      backup_file.close()
    raise

  if not cl.GetIssue():
    cl.SetIssue(issue)
  cl.SetPatchset(patchset)

  if options.use_commit_queue:
    cl.SetFlag('commit', '1')
  return 0


def cleanup_list(l):
  """Fixes a list so that comma separated items are put as individual items.

  So that "--reviewers joe@c,john@c --reviewers joa@c" results in
  options.reviewers == sorted(['joe@c', 'john@c', 'joa@c']).
  """
  items = sum((i.split(',') for i in l), [])
  stripped_items = (i.strip() for i in items)
  return sorted(filter(None, stripped_items))


@subcommand.usage('[args to "git diff"]')
def CMDupload(parser, args):
  """Uploads the current changelist to codereview."""
  parser.add_option('--bypass-hooks', action='store_true', dest='bypass_hooks',
                    help='bypass upload presubmit hook')
  parser.add_option('--bypass-watchlists', action='store_true',
                    dest='bypass_watchlists',
                    help='bypass watchlists auto CC-ing reviewers')
  parser.add_option('-f', action='store_true', dest='force',
                    help="force yes to questions (don't prompt)")
  parser.add_option('-m', dest='message', help='message for patchset')
  parser.add_option('-t', dest='title', help='title for patchset')
  parser.add_option('-r', '--reviewers',
                    action='append', default=[],
                    help='reviewer email addresses')
  parser.add_option('--cc',
                    action='append', default=[],
                    help='cc email addresses')
  parser.add_option('-s', '--send-mail', action='store_true',
                    help='send email to reviewer immediately')
  parser.add_option("--emulate_svn_auto_props", action="store_true",
                    dest="emulate_svn_auto_props",
                    help="Emulate Subversion's auto properties feature.")
  parser.add_option('-c', '--use-commit-queue', action='store_true',
                    help='tell the commit queue to commit this patchset')
  parser.add_option('--private', action='store_true',
                    help='set the review private (rietveld only)')
  parser.add_option('--target_branch',
                    help='When uploading to gerrit, remote branch to '
                         'use for CL.  Default: master')
  parser.add_option('--email', default=None,
                    help='email address to use to connect to Rietveld')

  add_git_similarity(parser)
  (options, args) = parser.parse_args(args)

  if options.target_branch and not settings.GetIsGerrit():
    parser.error('Use --target_branch for non gerrit repository.')

  if is_dirty_git_tree('upload'):
    return 1

  options.reviewers = cleanup_list(options.reviewers)
  options.cc = cleanup_list(options.cc)

  cl = Changelist()
  if args:
    # TODO(ukai): is it ok for gerrit case?
    base_branch = args[0]
  else:
    # Default to diffing against common ancestor of upstream branch
    base_branch = cl.GetCommonAncestorWithUpstream()
    args = [base_branch, 'HEAD']

  # Apply watchlists on upload.
  change = cl.GetChange(base_branch, None)
  watchlist = watchlists.Watchlists(change.RepositoryRoot())
  files = [f.LocalPath() for f in change.AffectedFiles()]
  if not options.bypass_watchlists:
    cl.SetWatchers(watchlist.GetWatchersForPaths(files))

  if not options.bypass_hooks:
    if options.reviewers:
      # Set the reviewer list now so that presubmit checks can access it.
      change_description = ChangeDescription(change.FullDescriptionText())
      change_description.update_reviewers(options.reviewers)
      change.SetDescriptionText(change_description.description)
    hook_results = cl.RunHook(committing=False,
                              may_prompt=not options.force,
                              verbose=options.verbose,
                              change=change)
    if not hook_results.should_continue():
      return 1
    if not options.reviewers and hook_results.reviewers:
      options.reviewers = hook_results.reviewers.split(',')

  if cl.GetIssue():
    latest_patchset = cl.GetMostRecentPatchset()
    local_patchset = cl.GetPatchset()
    if latest_patchset and local_patchset and local_patchset != latest_patchset:
      print ('The last upload made from this repository was patchset #%d but '
            'the most recent patchset on the server is #%d.'
            % (local_patchset, latest_patchset))
      print ('Uploading will still work, but if you\'ve uploaded to this issue '
            'from another machine or branch the patch you\'re uploading now '
            'might not include those changes.')
      ask_for_data('About to upload; enter to confirm.')

  print_stats(options.similarity, options.find_copies, args)
  if settings.GetIsGerrit():
    return GerritUpload(options, args, cl)
  ret = RietveldUpload(options, args, cl)
  if not ret:
    git_set_branch_value('last-upload-hash',
                         RunGit(['rev-parse', 'HEAD']).strip())

  return ret


def IsSubmoduleMergeCommit(ref):
  # When submodules are added to the repo, we expect there to be a single
  # non-git-svn merge commit at remote HEAD with a signature comment.
  pattern = '^SVN changes up to revision [0-9]*$'
  cmd = ['rev-list', '--merges', '--grep=%s' % pattern, '%s^!' % ref]
  return RunGit(cmd) != ''


def SendUpstream(parser, args, cmd):
  """Common code for CmdPush and CmdDCommit

  Squashed commit into a single.
  Updates changelog with metadata (e.g. pointer to review).
  Pushes/dcommits the code upstream.
  Updates review and closes.
  """
  parser.add_option('--bypass-hooks', action='store_true', dest='bypass_hooks',
                    help='bypass upload presubmit hook')
  parser.add_option('-m', dest='message',
                    help="override review description")
  parser.add_option('-f', action='store_true', dest='force',
                    help="force yes to questions (don't prompt)")
  parser.add_option('-c', dest='contributor',
                    help="external contributor for patch (appended to " +
                         "description and used as author for git). Should be " +
                         "formatted as 'First Last <email@example.com>'")
  add_git_similarity(parser)
  (options, args) = parser.parse_args(args)
  cl = Changelist()

  if not args or cmd == 'push':
    # Default to merging against our best guess of the upstream branch.
    args = [cl.GetUpstreamBranch()]

  if options.contributor:
    if not re.match('^.*\s<\S+@\S+>$', options.contributor):
      print "Please provide contibutor as 'First Last <email@example.com>'"
      return 1

  base_branch = args[0]
  base_has_submodules = IsSubmoduleMergeCommit(base_branch)

  if is_dirty_git_tree(cmd):
    return 1

  # This rev-list syntax means "show all commits not in my branch that
  # are in base_branch".
  upstream_commits = RunGit(['rev-list', '^' + cl.GetBranchRef(),
                             base_branch]).splitlines()
  if upstream_commits:
    print ('Base branch "%s" has %d commits '
           'not in this branch.' % (base_branch, len(upstream_commits)))
    print 'Run "git merge %s" before attempting to %s.' % (base_branch, cmd)
    return 1

  # This is the revision `svn dcommit` will commit on top of.
  svn_head = RunGit(['log', '--grep=^git-svn-id:', '-1',
                     '--pretty=format:%H'])

  if cmd == 'dcommit':
    # If the base_head is a submodule merge commit, the first parent of the
    # base_head should be a git-svn commit, which is what we're interested in.
    base_svn_head = base_branch
    if base_has_submodules:
      base_svn_head += '^1'

    extra_commits = RunGit(['rev-list', '^' + svn_head, base_svn_head])
    if extra_commits:
      print ('This branch has %d additional commits not upstreamed yet.'
             % len(extra_commits.splitlines()))
      print ('Upstream "%s" or rebase this branch on top of the upstream trunk '
             'before attempting to %s.' % (base_branch, cmd))
      return 1

  base_branch = RunGit(['merge-base', base_branch, 'HEAD']).strip()
  if not options.bypass_hooks:
    author = None
    if options.contributor:
      author = re.search(r'\<(.*)\>', options.contributor).group(1)
    hook_results = cl.RunHook(
        committing=True,
        may_prompt=not options.force,
        verbose=options.verbose,
        change=cl.GetChange(base_branch, author))
    if not hook_results.should_continue():
      return 1

    if cmd == 'dcommit':
      # Check the tree status if the tree status URL is set.
      status = GetTreeStatus()
      if 'closed' == status:
        print('The tree is closed.  Please wait for it to reopen. Use '
              '"git cl dcommit --bypass-hooks" to commit on a closed tree.')
        return 1
      elif 'unknown' == status:
        print('Unable to determine tree status.  Please verify manually and '
              'use "git cl dcommit --bypass-hooks" to commit on a closed tree.')
  else:
    breakpad.SendStack(
        'GitClHooksBypassedCommit',
        'Issue %s/%s bypassed hook when committing (tree status was "%s")' %
        (cl.GetRietveldServer(), cl.GetIssue(), GetTreeStatus()),
        verbose=False)

  change_desc = ChangeDescription(options.message)
  if not change_desc.description and cl.GetIssue():
    change_desc = ChangeDescription(cl.GetDescription())

  if not change_desc.description:
    if not cl.GetIssue() and options.bypass_hooks:
      change_desc = ChangeDescription(CreateDescriptionFromLog([base_branch]))
    else:
      print 'No description set.'
      print 'Visit %s/edit to set it.' % (cl.GetIssueURL())
      return 1

  # Keep a separate copy for the commit message, because the commit message
  # contains the link to the Rietveld issue, while the Rietveld message contains
  # the commit viewvc url.
  # Keep a separate copy for the commit message.
  if cl.GetIssue():
    change_desc.update_reviewers(cl.GetApprovingReviewers())

  commit_desc = ChangeDescription(change_desc.description)
  if cl.GetIssue():
    commit_desc.append_footer('Review URL: %s' % cl.GetIssueURL())
  if options.contributor:
    commit_desc.append_footer('Patch from %s.' % options.contributor)

  print('Description:')
  print(commit_desc.description)

  branches = [base_branch, cl.GetBranchRef()]
  if not options.force:
    print_stats(options.similarity, options.find_copies, branches)
    ask_for_data('About to commit; enter to confirm.')

  # We want to squash all this branch's commits into one commit with the proper
  # description. We do this by doing a "reset --soft" to the base branch (which
  # keeps the working copy the same), then dcommitting that.  If origin/master
  # has a submodule merge commit, we'll also need to cherry-pick the squashed
  # commit onto a branch based on the git-svn head.
  MERGE_BRANCH = 'git-cl-commit'
  CHERRY_PICK_BRANCH = 'git-cl-cherry-pick'
  # Delete the branches if they exist.
  for branch in [MERGE_BRANCH, CHERRY_PICK_BRANCH]:
    showref_cmd = ['show-ref', '--quiet', '--verify', 'refs/heads/%s' % branch]
    result = RunGitWithCode(showref_cmd)
    if result[0] == 0:
      RunGit(['branch', '-D', branch])

  # We might be in a directory that's present in this branch but not in the
  # trunk.  Move up to the top of the tree so that git commands that expect a
  # valid CWD won't fail after we check out the merge branch.
  rel_base_path = settings.GetRelativeRoot()
  if rel_base_path:
    os.chdir(rel_base_path)

  # Stuff our change into the merge branch.
  # We wrap in a try...finally block so if anything goes wrong,
  # we clean up the branches.
  retcode = -1
  try:
    RunGit(['checkout', '-q', '-b', MERGE_BRANCH])
    RunGit(['reset', '--soft', base_branch])
    if options.contributor:
      RunGit(
          [
            'commit', '--author', options.contributor,
            '-m', commit_desc.description,
          ])
    else:
      RunGit(['commit', '-m', commit_desc.description])
    if base_has_submodules:
      cherry_pick_commit = RunGit(['rev-list', 'HEAD^!']).rstrip()
      RunGit(['branch', CHERRY_PICK_BRANCH, svn_head])
      RunGit(['checkout', CHERRY_PICK_BRANCH])
      RunGit(['cherry-pick', cherry_pick_commit])
    if cmd == 'push':
      # push the merge branch.
      remote, branch = cl.FetchUpstreamTuple(cl.GetBranch())
      retcode, output = RunGitWithCode(
          ['push', '--porcelain', remote, 'HEAD:%s' % branch])
      logging.debug(output)
    else:
      # dcommit the merge branch.
      retcode, output = RunGitWithCode(['svn', 'dcommit',
                                        '-C%s' % options.similarity,
                                        '--no-rebase', '--rmdir'])
  finally:
    # And then swap back to the original branch and clean up.
    RunGit(['checkout', '-q', cl.GetBranch()])
    RunGit(['branch', '-D', MERGE_BRANCH])
    if base_has_submodules:
      RunGit(['branch', '-D', CHERRY_PICK_BRANCH])

  if cl.GetIssue():
    if cmd == 'dcommit' and 'Committed r' in output:
      revision = re.match('.*?\nCommitted r(\\d+)', output, re.DOTALL).group(1)
    elif cmd == 'push' and retcode == 0:
      match = (re.match(r'.*?([a-f0-9]{7})\.\.([a-f0-9]{7})$', l)
               for l in output.splitlines(False))
      match = filter(None, match)
      if len(match) != 1:
        DieWithError("Couldn't parse ouput to extract the committed hash:\n%s" %
            output)
      revision = match[0].group(2)
    else:
      return 1
    viewvc_url = settings.GetViewVCUrl()
    if viewvc_url and revision:
      change_desc.append_footer('Committed: ' + viewvc_url + revision)
    elif revision:
      change_desc.append_footer('Committed: ' + revision)
    print ('Closing issue '
           '(you may be prompted for your codereview password)...')
    cl.UpdateDescription(change_desc.description)
    cl.CloseIssue()
    props = cl.GetIssueProperties()
    patch_num = len(props['patchsets'])
    comment = "Committed patchset #%d manually as r%s" % (patch_num, revision)
    if options.bypass_hooks:
      comment += ' (tree was closed).' if GetTreeStatus() == 'closed' else '.'
    else:
      comment += ' (presubmit successful).'
    cl.RpcServer().add_comment(cl.GetIssue(), comment)
    cl.SetIssue(None)

  if retcode == 0:
    hook = POSTUPSTREAM_HOOK_PATTERN % cmd
    if os.path.isfile(hook):
      RunCommand([hook, base_branch], error_ok=True)

  return 0


@subcommand.usage('[upstream branch to apply against]')
def CMDdcommit(parser, args):
  """Commits the current changelist via git-svn."""
  if not settings.GetIsGitSvn():
    message = """This doesn't appear to be an SVN repository.
If your project has a git mirror with an upstream SVN master, you probably need
to run 'git svn init', see your project's git mirror documentation.
If your project has a true writeable upstream repository, you probably want
to run 'git cl push' instead.
Choose wisely, if you get this wrong, your commit might appear to succeed but
will instead be silently ignored."""
    print(message)
    ask_for_data('[Press enter to dcommit or ctrl-C to quit]')
  return SendUpstream(parser, args, 'dcommit')


@subcommand.usage('[upstream branch to apply against]')
def CMDpush(parser, args):
  """Commits the current changelist via git."""
  if settings.GetIsGitSvn():
    print('This appears to be an SVN repository.')
    print('Are you sure you didn\'t mean \'git cl dcommit\'?')
    ask_for_data('[Press enter to push or ctrl-C to quit]')
  return SendUpstream(parser, args, 'push')


@subcommand.usage('<patch url or issue id>')
def CMDpatch(parser, args):
  """Patches in a code review."""
  parser.add_option('-b', dest='newbranch',
                    help='create a new branch off trunk for the patch')
  parser.add_option('-f', '--force', action='store_true',
                    help='with -b, clobber any existing branch')
  parser.add_option('-d', '--directory', action='store', metavar='DIR',
                    help='Change to the directory DIR immediately, '
                         'before doing anything else.')
  parser.add_option('--reject', action='store_true',
                    help='failed patches spew .rej files rather than '
                        'attempting a 3-way merge')
  parser.add_option('-n', '--no-commit', action='store_true', dest='nocommit',
                    help="don't commit after patch applies")
  (options, args) = parser.parse_args(args)
  if len(args) != 1:
    parser.print_help()
    return 1
  issue_arg = args[0]

  # TODO(maruel): Use apply_issue.py
  # TODO(ukai): use gerrit-cherry-pick for gerrit repository?

  if options.newbranch:
    if options.force:
      RunGit(['branch', '-D', options.newbranch],
          stderr=subprocess2.PIPE, error_ok=True)
    RunGit(['checkout', '-b', options.newbranch,
            Changelist().GetUpstreamBranch()])

  return PatchIssue(issue_arg, options.reject, options.nocommit,
                    options.directory)


def PatchIssue(issue_arg, reject, nocommit, directory):
  if type(issue_arg) is int or issue_arg.isdigit():
    # Input is an issue id.  Figure out the URL.
    issue = int(issue_arg)
    cl = Changelist(issue=issue)
    patchset = cl.GetMostRecentPatchset()
    patch_data = cl.GetPatchSetDiff(issue, patchset)
  else:
    # Assume it's a URL to the patch. Default to https.
    issue_url = gclient_utils.UpgradeToHttps(issue_arg)
    match = re.match(r'.*?/issue(\d+)_(\d+).diff', issue_url)
    if not match:
      DieWithError('Must pass an issue ID or full URL for '
          '\'Download raw patch set\'')
    issue = int(match.group(1))
    patchset = int(match.group(2))
    patch_data = urllib2.urlopen(issue_arg).read()

  # Switch up to the top-level directory, if necessary, in preparation for
  # applying the patch.
  top = settings.GetRelativeRoot()
  if top:
    os.chdir(top)

  # Git patches have a/ at the beginning of source paths.  We strip that out
  # with a sed script rather than the -p flag to patch so we can feed either
  # Git or svn-style patches into the same apply command.
  # re.sub() should be used but flags=re.MULTILINE is only in python 2.7.
  try:
    patch_data = subprocess2.check_output(
        ['sed', '-e', 's|^--- a/|--- |; s|^+++ b/|+++ |'], stdin=patch_data)
  except subprocess2.CalledProcessError:
    DieWithError('Git patch mungling failed.')
  logging.info(patch_data)

  # We use "git apply" to apply the patch instead of "patch" so that we can
  # pick up file adds.
  # The --index flag means: also insert into the index (so we catch adds).
  cmd = ['git', 'apply', '--index', '-p0']
  if directory:
    cmd.extend(('--directory', directory))
  if reject:
    cmd.append('--reject')
  elif IsGitVersionAtLeast('1.7.12'):
    cmd.append('--3way')
  try:
    subprocess2.check_call(cmd, env=GetNoGitPagerEnv(),
                           stdin=patch_data, stdout=subprocess2.VOID)
  except subprocess2.CalledProcessError:
    DieWithError('Failed to apply the patch')

  # If we had an issue, commit the current state and register the issue.
  if not nocommit:
    RunGit(['commit', '-m', 'patch from issue %s' % issue])
    cl = Changelist()
    cl.SetIssue(issue)
    cl.SetPatchset(patchset)
    print "Committed patch locally."
  else:
    print "Patch applied to index."
  return 0


def CMDrebase(parser, args):
  """Rebases current branch on top of svn repo."""
  # Provide a wrapper for git svn rebase to help avoid accidental
  # git svn dcommit.
  # It's the only command that doesn't use parser at all since we just defer
  # execution to git-svn.

  return RunGitWithCode(['svn', 'rebase'] + args)[1]


def GetTreeStatus(url=None):
  """Fetches the tree status and returns either 'open', 'closed',
  'unknown' or 'unset'."""
  url = url or settings.GetTreeStatusUrl(error_ok=True)
  if url:
    status = urllib2.urlopen(url).read().lower()
    if status.find('closed') != -1 or status == '0':
      return 'closed'
    elif status.find('open') != -1 or status == '1':
      return 'open'
    return 'unknown'
  return 'unset'


def GetTreeStatusReason():
  """Fetches the tree status from a json url and returns the message
  with the reason for the tree to be opened or closed."""
  url = settings.GetTreeStatusUrl()
  json_url = urlparse.urljoin(url, '/current?format=json')
  connection = urllib2.urlopen(json_url)
  status = json.loads(connection.read())
  connection.close()
  return status['message']


def CMDtree(parser, args):
  """Shows the status of the tree."""
  _, args = parser.parse_args(args)
  status = GetTreeStatus()
  if 'unset' == status:
    print 'You must configure your tree status URL by running "git cl config".'
    return 2

  print "The tree is %s" % status
  print
  print GetTreeStatusReason()
  if status != 'open':
    return 1
  return 0


def CMDtry(parser, args):
  """Triggers a try job through Rietveld."""
  group = optparse.OptionGroup(parser, "Try job options")
  group.add_option(
      "-b", "--bot", action="append",
      help=("IMPORTANT: specify ONE builder per --bot flag. Use it multiple "
            "times to specify multiple builders. ex: "
            "'-bwin_rel:ui_tests,webkit_unit_tests -bwin_layout'. See "
            "the try server waterfall for the builders name and the tests "
            "available. Can also be used to specify gtest_filter, e.g. "
            "-bwin_rel:base_unittests:ValuesTest.*Value"))
  group.add_option(
      "-m", "--master", default='',
      help=("Specify a try master where to run the tries."))
  group.add_option(
      "-r", "--revision",
      help="Revision to use for the try job; default: the "
           "revision will be determined by the try server; see "
           "its waterfall for more info")
  group.add_option(
      "-c", "--clobber", action="store_true", default=False,
      help="Force a clobber before building; e.g. don't do an "
           "incremental build")
  group.add_option(
      "--project",
      help="Override which project to use. Projects are defined "
           "server-side to define what default bot set to use")
  group.add_option(
      "-t", "--testfilter", action="append", default=[],
      help=("Apply a testfilter to all the selected builders. Unless the "
            "builders configurations are similar, use multiple "
            "--bot <builder>:<test> arguments."))
  group.add_option(
      "-n", "--name", help="Try job name; default to current branch name")
  parser.add_option_group(group)
  options, args = parser.parse_args(args)

  if args:
    parser.error('Unknown arguments: %s' % args)

  cl = Changelist()
  if not cl.GetIssue():
    parser.error('Need to upload first')

  if not options.name:
    options.name = cl.GetBranch()

  if options.bot and not options.master:
    parser.error('For manually specified bots please also specify the '
                 'tryserver master, e.g. "-m tryserver.chromium".')

  def GetMasterMap():
    # Process --bot and --testfilter.
    if not options.bot:
      change = cl.GetChange(cl.GetCommonAncestorWithUpstream(), None)

      # Get try masters from PRESUBMIT.py files.
      masters = presubmit_support.DoGetTryMasters(
          change,
          change.LocalPaths(),
          settings.GetRoot(),
          None,
          None,
          options.verbose,
          sys.stdout)
      if masters:
        return masters

      # Fall back to deprecated method: get try slaves from PRESUBMIT.py files.
      options.bot = presubmit_support.DoGetTrySlaves(
          change,
          change.LocalPaths(),
          settings.GetRoot(),
          None,
          None,
          options.verbose,
          sys.stdout)
    if not options.bot:
      parser.error('No default try builder to try, use --bot')

    builders_and_tests = {}
    # TODO(machenbach): The old style command-line options don't support
    # multiple try masters yet.
    old_style = filter(lambda x: isinstance(x, basestring), options.bot)
    new_style = filter(lambda x: isinstance(x, tuple), options.bot)

    for bot in old_style:
      if ':' in bot:
        builder, tests = bot.split(':', 1)
        builders_and_tests.setdefault(builder, []).extend(tests.split(','))
      elif ',' in bot:
        parser.error('Specify one bot per --bot flag')
      else:
        builders_and_tests.setdefault(bot, []).append('defaulttests')

    for bot, tests in new_style:
      builders_and_tests.setdefault(bot, []).extend(tests)

    # Return a master map with one master to be backwards compatible. The
    # master name defaults to an empty string, which will cause the master
    # not to be set on rietveld (deprecated).
    return {options.master: builders_and_tests}

  masters = GetMasterMap()

  if options.testfilter:
    forced_tests = sum((t.split(',') for t in options.testfilter), [])
    masters = dict((master, dict(
        (b, forced_tests) for b, t in slaves.iteritems()
        if t != ['compile'])) for master, slaves in masters.iteritems())

  for builders in masters.itervalues():
    if any('triggered' in b for b in builders):
      print >> sys.stderr, (
          'ERROR You are trying to send a job to a triggered bot. This type of'
          ' bot requires an\ninitial job from a parent (usually a builder).  '
          'Instead send your job to the parent.\n'
          'Bot list: %s' % builders)
      return 1

  patchset = cl.GetMostRecentPatchset()
  if patchset and patchset != cl.GetPatchset():
    print(
        '\nWARNING Mismatch between local config and server. Did a previous '
        'upload fail?\ngit-cl try always uses latest patchset from rietveld. '
        'Continuing using\npatchset %s.\n' % patchset)
  try:
    cl.RpcServer().trigger_distributed_try_jobs(
        cl.GetIssue(), patchset, options.name, options.clobber,
        options.revision, masters)
  except urllib2.HTTPError, e:
    if e.code == 404:
      print('404 from rietveld; '
            'did you mean to use "git try" instead of "git cl try"?')
      return 1
  print('Tried jobs on:')

  for (master, builders) in masters.iteritems():
    if master:
      print 'Master: %s' % master
    length = max(len(builder) for builder in builders)
    for builder in sorted(builders):
      print '  %*s: %s' % (length, builder, ','.join(builders[builder]))
  return 0


@subcommand.usage('[new upstream branch]')
def CMDupstream(parser, args):
  """Prints or sets the name of the upstream branch, if any."""
  _, args = parser.parse_args(args)
  if len(args) > 1:
    parser.error('Unrecognized args: %s' % ' '.join(args))

  cl = Changelist()
  if args:
    # One arg means set upstream branch.
    RunGit(['branch', '--set-upstream', cl.GetBranch(), args[0]])
    cl = Changelist()
    print "Upstream branch set to " + cl.GetUpstreamBranch()
  else:
    print cl.GetUpstreamBranch()
  return 0


def CMDweb(parser, args):
  """Opens the current CL in the web browser."""
  _, args = parser.parse_args(args)
  if args:
    parser.error('Unrecognized args: %s' % ' '.join(args))

  issue_url = Changelist().GetIssueURL()
  if not issue_url:
    print >> sys.stderr, 'ERROR No issue to open'
    return 1

  webbrowser.open(issue_url)
  return 0


def CMDset_commit(parser, args):
  """Sets the commit bit to trigger the Commit Queue."""
  _, args = parser.parse_args(args)
  if args:
    parser.error('Unrecognized args: %s' % ' '.join(args))
  cl = Changelist()
  cl.SetFlag('commit', '1')
  return 0


def CMDset_close(parser, args):
  """Closes the issue."""
  _, args = parser.parse_args(args)
  if args:
    parser.error('Unrecognized args: %s' % ' '.join(args))
  cl = Changelist()
  # Ensure there actually is an issue to close.
  cl.GetDescription()
  cl.CloseIssue()
  return 0


def CMDdiff(parser, args):
  """shows differences between local tree and last upload."""
  cl = Changelist()
  issue = cl.GetIssue()
  branch = cl.GetBranch()
  if not issue:
    DieWithError('No issue found for current branch (%s)' % branch)
  TMP_BRANCH = 'git-cl-diff'
  base_branch = cl.GetCommonAncestorWithUpstream()

  # Create a new branch based on the merge-base
  RunGit(['checkout', '-q', '-b', TMP_BRANCH, base_branch])
  try:
    # Patch in the latest changes from rietveld.
    rtn = PatchIssue(issue, False, False, None)
    if rtn != 0:
      return rtn

    # Switch back to starting brand and diff against the temporary
    # branch containing the latest rietveld patch.
    subprocess2.check_call(['git', 'diff', TMP_BRANCH, branch])
  finally:
    RunGit(['checkout', '-q', branch])
    RunGit(['branch', '-D', TMP_BRANCH])

  return 0


def CMDowners(parser, args):
  """interactively find the owners for reviewing"""
  parser.add_option(
      '--no-color',
      action='store_true',
      help='Use this option to disable color output')
  options, args = parser.parse_args(args)

  author = RunGit(['config', 'user.email']).strip() or None

  cl = Changelist()

  if args:
    if len(args) > 1:
      parser.error('Unknown args')
    base_branch = args[0]
  else:
    # Default to diffing against the common ancestor of the upstream branch.
    base_branch = cl.GetCommonAncestorWithUpstream()

  change = cl.GetChange(base_branch, None)
  return owners_finder.OwnersFinder(
      [f.LocalPath() for f in
          cl.GetChange(base_branch, None).AffectedFiles()],
      change.RepositoryRoot(), author,
      fopen=file, os_path=os.path, glob=glob.glob,
      disable_color=options.no_color).run()


@subcommand.usage('[files or directories to diff]')
def CMDformat(parser, args):
  """Runs clang-format on the diff."""
  CLANG_EXTS = ['.cc', '.cpp', '.h', '.mm', '.proto']
  parser.add_option('--full', action='store_true',
                    help='Reformat the full content of all touched files')
  parser.add_option('--dry-run', action='store_true',
                    help='Don\'t modify any file on disk.')
  parser.add_option('--diff', action='store_true',
                    help='Print diff to stdout rather than modifying files.')
  opts, args = parser.parse_args(args)

  # git diff generates paths against the root of the repository.  Change
  # to that directory so clang-format can find files even within subdirs.
  rel_base_path = settings.GetRelativeRoot()
  if rel_base_path:
    os.chdir(rel_base_path)

  # Generate diff for the current branch's changes.
  diff_cmd = ['diff', '--no-ext-diff', '--no-prefix']
  if opts.full:
    # Only list the names of modified files.
    diff_cmd.append('--name-only')
  else:
    # Only generate context-less patches.
    diff_cmd.append('-U0')

  # Grab the merge-base commit, i.e. the upstream commit of the current
  # branch when it was created or the last time it was rebased. This is
  # to cover the case where the user may have called "git fetch origin",
  # moving the origin branch to a newer commit, but hasn't rebased yet.
  upstream_commit = None
  cl = Changelist()
  upstream_branch = cl.GetUpstreamBranch()
  if upstream_branch:
    upstream_commit = RunGit(['merge-base', 'HEAD', upstream_branch])
    upstream_commit = upstream_commit.strip()

  if not upstream_commit:
    DieWithError('Could not find base commit for this branch. '
                 'Are you in detached state?')

  diff_cmd.append(upstream_commit)

  # Handle source file filtering.
  diff_cmd.append('--')
  if args:
    for arg in args:
      if os.path.isdir(arg):
        diff_cmd += [os.path.join(arg, '*' + ext) for ext in CLANG_EXTS]
      elif os.path.isfile(arg):
        diff_cmd.append(arg)
      else:
        DieWithError('Argument "%s" is not a file or a directory' % arg)
  else:
    diff_cmd += ['*' + ext for ext in CLANG_EXTS]
  diff_output = RunGit(diff_cmd)

  top_dir = os.path.normpath(
      RunGit(["rev-parse", "--show-toplevel"]).rstrip('\n'))

  # Locate the clang-format binary in the checkout
  try:
    clang_format_tool = clang_format.FindClangFormatToolInChromiumTree()
  except clang_format.NotFoundError, e:
    DieWithError(e)

  if opts.full:
    # diff_output is a list of files to send to clang-format.
    files = diff_output.splitlines()
    if not files:
      print "Nothing to format."
      return 0
    cmd = [clang_format_tool]
    if not opts.dry_run and not opts.diff:
      cmd.append('-i')
    stdout = RunCommand(cmd + files, cwd=top_dir)
    if opts.diff:
      sys.stdout.write(stdout)
  else:
    env = os.environ.copy()
    env['PATH'] = os.path.dirname(clang_format_tool)
    # diff_output is a patch to send to clang-format-diff.py
    try:
      script = clang_format.FindClangFormatScriptInChromiumTree(
          'clang-format-diff.py')
    except clang_format.NotFoundError, e:
      DieWithError(e)

    cmd = [sys.executable, script, '-p0']
    if not opts.dry_run and not opts.diff:
      cmd.append('-i')

    stdout = RunCommand(cmd, stdin=diff_output, cwd=top_dir, env=env)
    if opts.diff:
      sys.stdout.write(stdout)
    if opts.dry_run and len(stdout) > 0:
      return 2

  return 0


class OptionParser(optparse.OptionParser):
  """Creates the option parse and add --verbose support."""
  def __init__(self, *args, **kwargs):
    optparse.OptionParser.__init__(
        self, *args, prog='git cl', version=__version__, **kwargs)
    self.add_option(
        '-v', '--verbose', action='count', default=0,
        help='Use 2 times for more debugging info')

  def parse_args(self, args=None, values=None):
    options, args = optparse.OptionParser.parse_args(self, args, values)
    levels = [logging.WARNING, logging.INFO, logging.DEBUG]
    logging.basicConfig(level=levels[min(options.verbose, len(levels) - 1)])
    return options, args


def main(argv):
  if sys.hexversion < 0x02060000:
    print >> sys.stderr, (
        '\nYour python version %s is unsupported, please upgrade.\n' %
        sys.version.split(' ', 1)[0])
    return 2

  # Reload settings.
  global settings
  settings = Settings()

  colorize_CMDstatus_doc()
  dispatcher = subcommand.CommandDispatcher(__name__)
  try:
    return dispatcher.execute(OptionParser(), argv)
  except urllib2.HTTPError, e:
    if e.code != 500:
      raise
    DieWithError(
        ('AppEngine is misbehaving and returned HTTP %d, again. Keep faith '
          'and retry or visit go/isgaeup.\n%s') % (e.code, str(e)))


if __name__ == '__main__':
  # These affect sys.stdout so do it outside of main() to simplify mocks in
  # unit testing.
  fix_encoding.fix_encoding()
  colorama.init()
  sys.exit(main(sys.argv[1:]))

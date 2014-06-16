#!/usr/bin/env python
# Copyright (c) 2012 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

"""Unit tests for git_cl.py."""

import os
import StringIO
import stat
import sys
import unittest

sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from testing_support.auto_stub import TestCase

import git_cl
import git_common
import subprocess2


class PresubmitMock(object):
  def __init__(self, *args, **kwargs):
    self.reviewers = []
  @staticmethod
  def should_continue():
    return True


class RietveldMock(object):
  def __init__(self, *args, **kwargs):
    pass

  @staticmethod
  def get_description(issue):
    return 'Issue: %d' % issue

  @staticmethod
  def get_issue_properties(_issue, _messages):
    return {
      'reviewers': ['joe@chromium.org', 'john@chromium.org'],
      'messages': [
        {
          'approval': True,
          'sender': 'john@chromium.org',
        },
      ],
    }


class WatchlistsMock(object):
  def __init__(self, _):
    pass
  @staticmethod
  def GetWatchersForPaths(_):
    return ['joe@example.com']


class CodereviewSettingsFileMock(object):
  def __init__(self):
    pass
  # pylint: disable=R0201
  def read(self):
    return ("CODE_REVIEW_SERVER: gerrit.chromium.org\n" +
            "GERRIT_HOST: gerrit.chromium.org\n" +
            "GERRIT_PORT: 29418\n")


class TestGitCl(TestCase):
  def setUp(self):
    super(TestGitCl, self).setUp()
    self.calls = []
    self._calls_done = 0
    self.mock(subprocess2, 'call', self._mocked_call)
    self.mock(subprocess2, 'check_call', self._mocked_call)
    self.mock(subprocess2, 'check_output', self._mocked_call)
    self.mock(subprocess2, 'communicate', self._mocked_call)
    self.mock(subprocess2, 'Popen', self._mocked_call)
    self.mock(git_common, 'get_or_create_merge_base',
              lambda *a: (
                  self._mocked_call(['get_or_create_merge_base']+list(a))))
    self.mock(git_cl, 'FindCodereviewSettingsFile', lambda: '')
    self.mock(git_cl, 'ask_for_data', self._mocked_call)
    self.mock(git_cl.breakpad, 'post', self._mocked_call)
    self.mock(git_cl.breakpad, 'SendStack', self._mocked_call)
    self.mock(git_cl.presubmit_support, 'DoPresubmitChecks', PresubmitMock)
    self.mock(git_cl.rietveld, 'Rietveld', RietveldMock)
    self.mock(git_cl.rietveld, 'CachingRietveld', RietveldMock)
    self.mock(git_cl.upload, 'RealMain', self.fail)
    self.mock(git_cl.watchlists, 'Watchlists', WatchlistsMock)
    # It's important to reset settings to not have inter-tests interference.
    git_cl.settings = None

  def tearDown(self):
    if not self.has_failed():
      self.assertEquals([], self.calls)
    super(TestGitCl, self).tearDown()

  def _mocked_call(self, *args, **_kwargs):
    self.assertTrue(
        self.calls,
        '@%d  Expected: <Missing>   Actual: %r' % (self._calls_done, args))
    expected_args, result = self.calls.pop(0)
    # Also logs otherwise it could get caught in a try/finally and be hard to
    # diagnose.
    if expected_args != args:
      msg = '@%d  Expected: %r   Actual: %r' % (
          self._calls_done, expected_args, args)
      git_cl.logging.error(msg)
      self.fail(msg)
    self._calls_done += 1
    return result

  @classmethod
  def _upload_calls(cls, similarity, find_copies, private):
    return (cls._git_base_calls(similarity, find_copies) +
            cls._git_upload_calls(private))

  @classmethod
  def _upload_no_rev_calls(cls, similarity, find_copies):
    return (cls._git_base_calls(similarity, find_copies) +
            cls._git_upload_no_rev_calls())

  @classmethod
  def _git_base_calls(cls, similarity, find_copies):
    if similarity is None:
      similarity = '50'
      similarity_call = ((['git', 'config', '--int', '--get',
                         'branch.master.git-cl-similarity'],), '')
    else:
      similarity_call = ((['git', 'config', '--int',
                         'branch.master.git-cl-similarity', similarity],), '')

    if find_copies is None:
      find_copies = True
      find_copies_call = ((['git', 'config', '--int', '--get',
                          'branch.master.git-find-copies'],), '')
    else:
      val = str(int(find_copies))
      find_copies_call = ((['git', 'config', '--int',
                          'branch.master.git-find-copies', val],), '')

    if find_copies:
      stat_call = ((['git', 'diff', '--no-ext-diff', '--stat',
                   '--find-copies-harder', '-l100000', '-C'+similarity,
                   'fake_ancestor_sha', 'HEAD'],), '+dat')
    else:
      stat_call = ((['git', 'diff', '--no-ext-diff', '--stat',
                   '-M'+similarity, 'fake_ancestor_sha', 'HEAD'],), '+dat')

    return [
      ((['git', 'config', 'rietveld.autoupdate'],), ''),
      ((['git', 'config', 'rietveld.server'],),
       'codereview.example.com'),
      ((['git', 'symbolic-ref', 'HEAD'],), 'master'),
      similarity_call,
      ((['git', 'symbolic-ref', 'HEAD'],), 'master'),
      find_copies_call,
      ((['git', 'update-index', '--refresh', '-q'],), ''),
      ((['git', 'diff-index', '--name-status', 'HEAD'],), ''),
      ((['git', 'symbolic-ref', 'HEAD'],), 'master'),
      ((['git', 'config', 'branch.master.merge'],), 'master'),
      ((['git', 'config', 'branch.master.remote'],), 'origin'),
      ((['get_or_create_merge_base', 'master', 'master'],),
       'fake_ancestor_sha'),
      ] + cls._git_sanity_checks('fake_ancestor_sha', 'master') + [
      ((['git', 'rev-parse', '--show-cdup'],), ''),
      ((['git', 'rev-parse', 'HEAD'],), '12345'),
      ((['git', 'diff', '--name-status', '--no-renames', '-r',
         'fake_ancestor_sha...', '.'],),
        'M\t.gitignore\n'),
      ((['git', 'config', 'branch.master.rietveldissue'],), ''),
      ((['git', 'config', 'branch.master.rietveldpatchset'],),
       ''),
      ((['git', 'log', '--pretty=format:%s%n%n%b',
         'fake_ancestor_sha...'],),
       'foo'),
      ((['git', 'config', 'user.email'],), 'me@example.com'),
      stat_call,
      ((['git', 'config', 'gerrit.host'],), ''),
      ((['git', 'log', '--pretty=format:%s\n\n%b',
         'fake_ancestor_sha..HEAD'],),
       'desc\n'),
      ((['git', 'config', 'rietveld.bug-prefix'],), ''),
    ]

  @classmethod
  def _git_upload_no_rev_calls(cls):
    return [
      ((['git', 'config', 'core.editor'],), ''),
    ]

  @classmethod
  def _git_upload_calls(cls, private):
    if private:
      cc_call = []
      private_call = []
    else:
      cc_call = [((['git', 'config', 'rietveld.cc'],), '')]
      private_call = [
          ((['git', 'config', 'rietveld.private'],), '')]

    return [
        ((['git', 'config', 'core.editor'],), ''),
    ] + cc_call + private_call + [
        ((['git', 'config', 'branch.master.base-url'],), ''),
        ((['git',
           'config', '--local', '--get-regexp', '^svn-remote\\.'],),
         (('', None), 0)),
        ((['git', 'rev-parse', '--show-cdup'],), ''),
        ((['git', 'svn', 'info'],), ''),
        ((['git',
           'config', 'branch.master.rietveldissue', '1'],), ''),
        ((['git', 'config', 'branch.master.rietveldserver',
           'https://codereview.example.com'],), ''),
        ((['git',
           'config', 'branch.master.rietveldpatchset', '2'],), ''),
        ((['git', 'rev-parse', 'HEAD'],), 'hash'),
        ((['git', 'symbolic-ref', 'HEAD'],), 'hash'),
        ((['git',
           'config', 'branch.hash.last-upload-hash', 'hash'],), ''),
    ]

  @staticmethod
  def _git_sanity_checks(diff_base, working_branch):
    fake_ancestor = 'fake_ancestor'
    fake_cl = 'fake_cl_for_patch'
    return [
      # Calls to verify branch point is ancestor
      ((['git',
         'rev-parse', '--verify', diff_base],), fake_ancestor),
      ((['git',
         'merge-base', fake_ancestor, 'HEAD'],), fake_ancestor),
      ((['git',
         'rev-list', '^' + fake_ancestor, 'HEAD'],), fake_cl),
      # Mock a config miss (error code 1)
      ((['git',
         'config', 'gitcl.remotebranch'],), (('', None), 1)),
      # Call to GetRemoteBranch()
      ((['git',
         'config', 'branch.%s.merge' % working_branch],),
       'refs/heads/master'),
      ((['git',
         'config', 'branch.%s.remote' % working_branch],), 'origin'),
      ((['git', 'rev-list', '^' + fake_ancestor,
         'refs/remotes/origin/master'],), ''),
       ]

  @classmethod
  def _dcommit_calls_1(cls):
    return [
      ((['git',
         'config', '--local', '--get-regexp', '^svn-remote\\.'],),
       ((('svn-remote.svn.url svn://svn.chromium.org/chrome\n'
          'svn-remote.svn.fetch trunk/src:refs/remotes/origin/master'),
         None),
        0)),
      ((['git', 'config', 'rietveld.autoupdate'],),
       ''),
      ((['git',
         'config', 'rietveld.server'],), 'codereview.example.com'),
      ((['git', 'symbolic-ref', 'HEAD'],), 'refs/heads/working'),
      ((['git', 'config', '--int', '--get',
        'branch.working.git-cl-similarity'],), ''),
      ((['git', 'symbolic-ref', 'HEAD'],), 'refs/heads/working'),
      ((['git', 'config', '--int', '--get',
        'branch.working.git-find-copies'],), ''),
      ((['git', 'symbolic-ref', 'HEAD'],), 'refs/heads/working'),
      ((['git',
         'config', 'branch.working.merge'],), 'refs/heads/master'),
      ((['git', 'config', 'branch.working.remote'],), 'origin'),
      ((['git', 'rev-list', '--merges',
         '--grep=^SVN changes up to revision [0-9]*$',
         'refs/remotes/origin/master^!'],), ''),
      ((['git', 'update-index', '--refresh', '-q'],), ''),
      ((['git', 'diff-index', '--name-status', 'HEAD'],), ''),
      ((['git', 'rev-list', '^refs/heads/working',
         'refs/remotes/origin/master'],),
         ''),
      ((['git',
         'log', '--grep=^git-svn-id:', '-1', '--pretty=format:%H'],),
         '3fc18b62c4966193eb435baabe2d18a3810ec82e'),
      ((['git',
         'rev-list', '^3fc18b62c4966193eb435baabe2d18a3810ec82e',
         'refs/remotes/origin/master'],), ''),
      ((['git',
         'merge-base', 'refs/remotes/origin/master', 'HEAD'],),
       'fake_ancestor_sha'),
    ]

  @classmethod
  def _dcommit_calls_normal(cls):
    return [
      ((['git', 'rev-parse', '--show-cdup'],), ''),
      ((['git', 'rev-parse', 'HEAD'],),
          '00ff397798ea57439712ed7e04ab96e13969ef40'),
      ((['git',
         'diff', '--name-status', '--no-renames', '-r', 'fake_ancestor_sha...',
         '.'],),
        'M\tPRESUBMIT.py'),
      ((['git',
         'config', 'branch.working.rietveldissue'],), '12345'),
      ((['git',
         'config', 'branch.working.rietveldpatchset'],), '31137'),
      ((['git', 'config', 'branch.working.rietveldserver'],),
         'codereview.example.com'),
      ((['git', 'config', 'user.email'],), 'author@example.com'),
      ((['git', 'config', 'rietveld.tree-status-url'],), ''),
  ]

  @classmethod
  def _dcommit_calls_bypassed(cls):
    return [
      ((['git',
         'config', 'branch.working.rietveldissue'],), '12345'),
      ((['git', 'config', 'branch.working.rietveldserver'],),
         'codereview.example.com'),
      ((['git', 'config', 'rietveld.tree-status-url'],), ''),
      (('GitClHooksBypassedCommit',
        'Issue https://codereview.example.com/12345 bypassed hook when '
        'committing (tree status was "unset")'), None),
  ]

  @classmethod
  def _dcommit_calls_3(cls):
    return [
      ((['git',
         'diff', '--no-ext-diff', '--stat', '--find-copies-harder',
         '-l100000', '-C50', 'fake_ancestor_sha',
         'refs/heads/working'],),
       (' PRESUBMIT.py |    2 +-\n'
        ' 1 files changed, 1 insertions(+), 1 deletions(-)\n')),
      (('About to commit; enter to confirm.',), None),
      ((['git', 'show-ref', '--quiet', '--verify',
         'refs/heads/git-cl-commit'],),
       (('', None), 0)),
      ((['git', 'branch', '-D', 'git-cl-commit'],), ''),
      ((['git', 'show-ref', '--quiet', '--verify',
         'refs/heads/git-cl-cherry-pick'],), ''),
      ((['git', 'rev-parse', '--show-cdup'],), '\n'),
      ((['git', 'checkout', '-q', '-b', 'git-cl-commit'],), ''),
      ((['git', 'reset', '--soft', 'fake_ancestor_sha'],), ''),
      ((['git', 'commit', '-m',
         'Issue: 12345\n\nR=john@chromium.org\n\n'
         'Review URL: https://codereview.example.com/12345'],),
       ''),
      ((['git',
         'svn', 'dcommit', '-C50', '--no-rebase', '--rmdir'],),
       (('', None), 0)),
      ((['git', 'checkout', '-q', 'working'],), ''),
      ((['git', 'branch', '-D', 'git-cl-commit'],), ''),
  ]

  @staticmethod
  def _cmd_line(description, args, similarity, find_copies, private):
    """Returns the upload command line passed to upload.RealMain()."""
    return [
        'upload', '--assume_yes', '--server',
        'https://codereview.example.com',
        '--message', description
    ] + args + [
        '--cc', 'joe@example.com',
    ] + (['--private'] if private else []) + [
        '--git_similarity', similarity or '50'
    ] + (['--git_no_find_copies'] if find_copies == False else []) + [
        'fake_ancestor_sha', 'HEAD'
    ]

  def _run_reviewer_test(
      self,
      upload_args,
      expected_description,
      returned_description,
      final_description,
      reviewers,
      private=False):
    """Generic reviewer test framework."""
    try:
      similarity = upload_args[upload_args.index('--similarity')+1]
    except ValueError:
      similarity = None

    if '--find-copies' in upload_args:
      find_copies = True
    elif '--no-find-copies' in upload_args:
      find_copies = False
    else:
      find_copies = None

    private = '--private' in upload_args

    self.calls = self._upload_calls(similarity, find_copies, private)

    def RunEditor(desc, _, **kwargs):
      self.assertEquals(
          '# Enter a description of the change.\n'
          '# This will be displayed on the codereview site.\n'
          '# The first line will also be used as the subject of the review.\n'
          '#--------------------This line is 72 characters long'
          '--------------------\n' +
          expected_description,
          desc)
      return returned_description
    self.mock(git_cl.gclient_utils, 'RunEditor', RunEditor)

    def check_upload(args):
      cmd_line = self._cmd_line(final_description, reviewers, similarity,
                                find_copies, private)
      self.assertEquals(cmd_line, args)
      return 1, 2
    self.mock(git_cl.upload, 'RealMain', check_upload)

    git_cl.main(['upload'] + upload_args)

  def test_no_reviewer(self):
    self._run_reviewer_test(
        [],
        'desc\n\nBUG=',
        '# Blah blah comment.\ndesc\n\nBUG=',
        'desc\n\nBUG=',
        [])

  def test_keep_similarity(self):
    self._run_reviewer_test(
        ['--similarity', '70'],
        'desc\n\nBUG=',
        '# Blah blah comment.\ndesc\n\nBUG=',
        'desc\n\nBUG=',
        [])

  def test_keep_find_copies(self):
    self._run_reviewer_test(
        ['--no-find-copies'],
        'desc\n\nBUG=',
        '# Blah blah comment.\ndesc\n\nBUG=\n',
        'desc\n\nBUG=',
        [])

  def test_private(self):
    self._run_reviewer_test(
        ['--private'],
        'desc\n\nBUG=',
        '# Blah blah comment.\ndesc\n\nBUG=\n',
        'desc\n\nBUG=',
        [])

  def test_reviewers_cmd_line(self):
    # Reviewer is passed as-is
    description = 'desc\n\nR=foo@example.com\nBUG='
    self._run_reviewer_test(
        ['-r' 'foo@example.com'],
        description,
        '\n%s\n' % description,
        description,
        ['--reviewers=foo@example.com'])

  def test_reviewer_tbr_overriden(self):
    # Reviewer is overriden with TBR
    # Also verifies the regexp work without a trailing LF
    description = 'Foo Bar\n\nTBR=reviewer@example.com'
    self._run_reviewer_test(
        ['-r' 'foo@example.com'],
        'desc\n\nR=foo@example.com\nBUG=',
        description.strip('\n'),
        description,
        ['--reviewers=reviewer@example.com'])

  def test_reviewer_multiple(self):
    # Handles multiple R= or TBR= lines.
    description = (
        'Foo Bar\nTBR=reviewer@example.com\nBUG=\nR=another@example.com')
    self._run_reviewer_test(
        [],
        'desc\n\nBUG=',
        description,
        description,
        ['--reviewers=another@example.com,reviewer@example.com'])

  def test_reviewer_send_mail(self):
    # --send-mail can be used without -r if R= is used
    description = 'Foo Bar\nR=reviewer@example.com'
    self._run_reviewer_test(
        ['--send-mail'],
        'desc\n\nBUG=',
        description.strip('\n'),
        description,
        ['--reviewers=reviewer@example.com', '--send_mail'])

  def test_reviewer_send_mail_no_rev(self):
    # Fails without a reviewer.
    stdout = StringIO.StringIO()
    stderr = StringIO.StringIO()
    try:
      self.calls = self._upload_no_rev_calls(None, None)
      def RunEditor(desc, _, **kwargs):
        return desc
      self.mock(git_cl.gclient_utils, 'RunEditor', RunEditor)
      self.mock(sys, 'stdout', stdout)
      self.mock(sys, 'stderr', stderr)
      git_cl.main(['upload', '--send-mail'])
      self.fail()
    except SystemExit:
      self.assertEqual(
          'Using 50% similarity for rename/copy detection. Override with '
          '--similarity.\n',
          stdout.getvalue())
      self.assertEqual(
          'Must specify reviewers to send email.\n', stderr.getvalue())

  def test_dcommit(self):
    self.calls = (
        self._dcommit_calls_1() +
        self._git_sanity_checks('fake_ancestor_sha', 'working') +
        self._dcommit_calls_normal() +
        self._dcommit_calls_3())
    git_cl.main(['dcommit'])

  def test_dcommit_bypass_hooks(self):
    self.calls = (
        self._dcommit_calls_1() +
        self._dcommit_calls_bypassed() +
        self._dcommit_calls_3())
    git_cl.main(['dcommit', '--bypass-hooks'])


  @classmethod
  def _gerrit_base_calls(cls):
    return [
        ((['git', 'config', 'rietveld.autoupdate'],),
         ''),
        ((['git',
           'config', 'rietveld.server'],), 'codereview.example.com'),
        ((['git', 'symbolic-ref', 'HEAD'],), 'master'),
        ((['git', 'config', '--int', '--get',
          'branch.master.git-cl-similarity'],), ''),
        ((['git', 'symbolic-ref', 'HEAD'],), 'master'),
        ((['git', 'config', '--int', '--get',
          'branch.master.git-find-copies'],), ''),
        ((['git', 'update-index', '--refresh', '-q'],), ''),
        ((['git', 'diff-index', '--name-status', 'HEAD'],), ''),
        ((['git', 'symbolic-ref', 'HEAD'],), 'master'),
        ((['git', 'config', 'branch.master.merge'],), 'master'),
        ((['git', 'config', 'branch.master.remote'],), 'origin'),
        ((['get_or_create_merge_base', 'master', 'master'],),
         'fake_ancestor_sha'),
        ] + cls._git_sanity_checks('fake_ancestor_sha', 'master') + [
        ((['git', 'rev-parse', '--show-cdup'],), ''),
        ((['git', 'rev-parse', 'HEAD'],), '12345'),
        ((['git',
           'diff', '--name-status', '--no-renames', '-r',
           'fake_ancestor_sha...', '.'],),
         'M\t.gitignore\n'),
        ((['git', 'config', 'branch.master.rietveldissue'],), ''),
        ((['git',
           'config', 'branch.master.rietveldpatchset'],), ''),
        ((['git',
           'log', '--pretty=format:%s%n%n%b', 'fake_ancestor_sha...'],),
         'foo'),
        ((['git', 'config', 'user.email'],), 'me@example.com'),
        ((['git',
           'diff', '--no-ext-diff', '--stat', '--find-copies-harder',
           '-l100000', '-C50', 'fake_ancestor_sha', 'HEAD'],),
         '+dat'),
        ]

  @staticmethod
  def _gerrit_upload_calls(description, reviewers):
    calls = [
        ((['git', 'config', 'gerrit.host'],),
         'gerrit.example.com'),
        ((['git', 'log', '--pretty=format:%s\n\n%b',
           'fake_ancestor_sha..HEAD'],),
         description)
        ]
    if git_cl.CHANGE_ID not in description:
      calls += [
          ((['git', 'log', '--pretty=format:%s\n\n%b',
             'fake_ancestor_sha..HEAD'],),
           description),
          ((['git', 'commit', '--amend', '-m', description],),
           ''),
          ((['git', 'log', '--pretty=format:%s\n\n%b',
             'fake_ancestor_sha..HEAD'],),
           description)
          ]
    calls += [
        ((['git', 'config', 'rietveld.cc'],), '')
        ]
    receive_pack = '--receive-pack=git receive-pack '
    receive_pack += '--cc=joe@example.com'  # from watch list
    if reviewers:
      receive_pack += ' '
      receive_pack += ' '.join(
          '--reviewer=' + email for email in sorted(reviewers))
    receive_pack += ''
    calls += [
        ((['git',
           'push', receive_pack, 'origin', 'HEAD:refs/for/master'],),
         '')
        ]
    return calls

  def _run_gerrit_upload_test(
      self,
      upload_args,
      description,
      reviewers):
    """Generic gerrit upload test framework."""
    self.calls = self._gerrit_base_calls()
    self.calls += self._gerrit_upload_calls(description, reviewers)
    git_cl.main(['upload'] + upload_args)

  def test_gerrit_upload_without_change_id(self):
    self._run_gerrit_upload_test(
        [],
        'desc\n\nBUG=\n',
        [])

  def test_gerrit_no_reviewer(self):
    self._run_gerrit_upload_test(
        [],
        'desc\n\nBUG=\nChange-Id:123456789\n',
        [])

  def test_gerrit_reviewers_cmd_line(self):
    self._run_gerrit_upload_test(
        ['-r', 'foo@example.com'],
        'desc\n\nBUG=\nChange-Id:123456789',
        ['foo@example.com'])

  def test_gerrit_reviewer_multiple(self):
    self._run_gerrit_upload_test(
        [],
        'desc\nTBR=reviewer@example.com\nBUG=\nR=another@example.com\n'
        'Change-Id:123456789\n',
        ['reviewer@example.com', 'another@example.com'])


  def test_config_gerrit_download_hook(self):
    self.mock(git_cl, 'FindCodereviewSettingsFile', CodereviewSettingsFileMock)
    def ParseCodereviewSettingsContent(content):
      keyvals = {}
      keyvals['CODE_REVIEW_SERVER'] = 'gerrit.chromium.org'
      keyvals['GERRIT_HOST'] = 'gerrit.chromium.org'
      keyvals['GERRIT_PORT'] = '29418'
      return keyvals
    self.mock(git_cl.gclient_utils, 'ParseCodereviewSettingsContent',
              ParseCodereviewSettingsContent)
    self.mock(git_cl.os, 'access', self._mocked_call)
    self.mock(git_cl.os, 'chmod', self._mocked_call)
    src_dir = os.path.join(os.path.sep, 'usr', 'local', 'src')
    def AbsPath(path):
      if not path.startswith(os.path.sep):
        return os.path.join(src_dir, path)
      return path
    self.mock(git_cl.os.path, 'abspath', AbsPath)
    commit_msg_path = os.path.join(src_dir, '.git', 'hooks', 'commit-msg')
    def Exists(path):
      if path == commit_msg_path:
        return False
      # others paths, such as /usr/share/locale/....
      return True
    self.mock(git_cl.os.path, 'exists', Exists)
    self.mock(git_cl, 'urlretrieve', self._mocked_call)
    self.mock(git_cl, 'hasSheBang', self._mocked_call)
    self.calls = [
        ((['git', 'config', 'rietveld.autoupdate'],),
         ''),
        ((['git', 'config', 'rietveld.server',
           'gerrit.chromium.org'],), ''),
        ((['git', 'config', '--unset-all', 'rietveld.cc'],), ''),
        ((['git', 'config', '--unset-all',
           'rietveld.private'],), ''),
        ((['git', 'config', '--unset-all',
           'rietveld.tree-status-url'],), ''),
        ((['git', 'config', '--unset-all',
           'rietveld.viewvc-url'],), ''),
        ((['git', 'config', '--unset-all',
           'rietveld.bug-prefix'],), ''),
        ((['git', 'config', '--unset-all',
           'rietveld.cpplint-regex'],), ''),
        ((['git', 'config', '--unset-all',
           'rietveld.cpplint-ignore-regex'],), ''),
        ((['git', 'config', 'gerrit.host',
           'gerrit.chromium.org'],), ''),
        # DownloadHooks(False)
        ((['git', 'config', 'gerrit.host'],),
         'gerrit.chromium.org'),
        ((['git', 'rev-parse', '--show-cdup'],), ''),
        ((commit_msg_path, os.X_OK,), False),
        (('https://gerrit-review.googlesource.com/tools/hooks/commit-msg',
          commit_msg_path,), ''),
        ((commit_msg_path,), True),
        ((commit_msg_path, stat.S_IRUSR | stat.S_IWUSR | stat.S_IXUSR,), ''),
        # GetCodereviewSettingsInteractively
        ((['git', 'config', 'rietveld.server'],),
         'gerrit.chromium.org'),
        (('Rietveld server (host[:port]) [https://gerrit.chromium.org]:',),
         ''),
        ((['git', 'config', 'rietveld.cc'],), ''),
        (('CC list:',), ''),
        ((['git', 'config', 'rietveld.private'],), ''),
        (('Private flag (rietveld only):',), ''),
        ((['git', 'config', 'rietveld.tree-status-url'],), ''),
        (('Tree status URL:',), ''),
        ((['git', 'config', 'rietveld.viewvc-url'],), ''),
        (('ViewVC URL:',), ''),
        # DownloadHooks(True)
        ((['git', 'config', 'rietveld.bug-prefix'],), ''),
        (('Bug Prefix:',), ''),
        ((commit_msg_path, os.X_OK,), True),
        ]
    git_cl.main(['config'])

  def test_update_reviewers(self):
    data = [
      ('foo', [], 'foo'),
      ('foo\nR=xx', [], 'foo\nR=xx'),
      ('foo\nTBR=xx', [], 'foo\nTBR=xx'),
      ('foo', ['a@c'], 'foo\n\nR=a@c'),
      ('foo\nR=xx', ['a@c'], 'foo\n\nR=a@c, xx'),
      ('foo\nTBR=xx', ['a@c'], 'foo\n\nR=a@c\nTBR=xx'),
      ('foo\nTBR=xx\nR=yy', ['a@c'], 'foo\n\nR=a@c, yy\nTBR=xx'),
      ('foo\nBUG=', ['a@c'], 'foo\nBUG=\nR=a@c'),
      ('foo\nR=xx\nTBR=yy\nR=bar', ['a@c'], 'foo\n\nR=a@c, xx, bar\nTBR=yy'),
      ('foo', ['a@c', 'b@c'], 'foo\n\nR=a@c, b@c'),
      ('foo\nBar\n\nR=\nBUG=', ['c@c'], 'foo\nBar\n\nR=c@c\nBUG='),
      ('foo\nBar\n\nR=\nBUG=\nR=', ['c@c'], 'foo\nBar\n\nR=c@c\nBUG='),
      # Same as the line before, but full of whitespaces.
      (
        'foo\nBar\n\n R = \n BUG = \n R = ', ['c@c'],
        'foo\nBar\n\nR=c@c\n BUG =',
      ),
      # Whitespaces aren't interpreted as new lines.
      ('foo BUG=allo R=joe ', ['c@c'], 'foo BUG=allo R=joe\n\nR=c@c'),
    ]
    expected = [i[2] for i in data]
    actual = []
    for orig, reviewers, _expected in data:
      obj = git_cl.ChangeDescription(orig)
      obj.update_reviewers(reviewers)
      actual.append(obj.description)
    self.assertEqual(expected, actual)


if __name__ == '__main__':
  git_cl.logging.basicConfig(
      level=git_cl.logging.DEBUG if '-v' in sys.argv else git_cl.logging.ERROR)
  unittest.main()

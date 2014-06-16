#!/usr/bin/env python
# Copyright (c) 2012 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

"""Unit tests for trychange.py."""

import os
import sys
import unittest

sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from testing_support.super_mox import SuperMoxTestBase

import subprocess2
import trychange


class TryChangeTestsBase(SuperMoxTestBase):
  """Setups and tear downs the mocks but doesn't test anything as-is."""
  def setUp(self):
    SuperMoxTestBase.setUp(self)
    self.mox.StubOutWithMock(subprocess2, 'communicate')
    self.mox.StubOutWithMock(trychange, 'RunGit')
    self.mox.StubOutWithMock(trychange.scm.GIT, 'Capture')
    self.mox.StubOutWithMock(trychange.scm.GIT, 'GenerateDiff')
    self.mox.StubOutWithMock(trychange.scm.GIT, 'GetCheckoutRoot')
    self.mox.StubOutWithMock(trychange.scm.GIT, 'GetEmail')
    self.mox.StubOutWithMock(trychange.scm.GIT, 'GetPatchName')
    self.mox.StubOutWithMock(trychange.scm.GIT, 'GetUpstreamBranch')
    self.mox.StubOutWithMock(trychange.scm.SVN, 'GenerateDiff')
    self.mox.StubOutWithMock(trychange.scm.SVN, 'GetCheckoutRoot')
    self.mox.StubOutWithMock(trychange.scm.SVN, 'GetEmail')
    self.fake_root = self.Dir()
    self.expected_files = ['foo.txt', 'bar.txt']
    self.options = trychange.optparse.Values()
    self.options.files = self.expected_files
    self.options.diff = None
    self.options.name = None
    self.options.email = None
    self.options.exclude = []


class TryChangeUnittest(TryChangeTestsBase):
  """General trychange.py tests."""
  def testMembersChanged(self):
    members = [
      'DieWithError', 'EPILOG', 'Escape', 'GIT', 'GIT_PATCH_DIR_BASENAME',
      'GetMungedDiff', 'GuessVCS', 'GIT_BRANCH_FILE',
      'HELP_STRING', 'InvalidScript', 'NoTryServerAccess', 'OptionParser',
      'PrintSuccess',
      'RunCommand', 'RunGit', 'SCM', 'SVN', 'TryChange', 'USAGE', 'contextlib',
      'breakpad',
      'datetime', 'errno', 'fix_encoding', 'gcl', 'gclient_utils', 'gen_parser',
      'getpass', 'itertools', 'json', 'logging', 'optparse', 'os', 'posixpath',
      're', 'scm', 'shutil', 'subprocess2', 'sys', 'tempfile', 'urllib',
      'urllib2']
    # If this test fails, you should add the relevant test.
    self.compareMembers(trychange, members)


class TryChangeSimpleTest(unittest.TestCase):
  # Doesn't require supermox to run.
  def test_flags(self):
    cmd = [
      '--bot', 'bot1,bot2',
      '--testfilter', 'test1',
      '--testfilter', 'test2',
      '--user', 'joe',
      '--email', 'joe@example.com',
    ]
    options, args = trychange.gen_parser(None).parse_args(cmd)
    self.assertEquals([], args)
    # pylint: disable=W0212
    bot_spec = trychange._ParseBotList(options.bot, options.testfilter)
    if options.testfilter:
      bot_spec = trychange._ApplyTestFilter(options.testfilter, bot_spec)
    values = trychange._ParseSendChangeOptions(bot_spec, options)
    self.assertEquals(
        [
          ('user', 'joe'),
          ('name', None),
          ('email', 'joe@example.com'),
          ('bot', 'bot1:test1,test2'),
          ('bot', 'bot2:test1,test2'),
        ],
        values)

  def test_flags_bad_combination(self):
    cmd = [
      '--bot', 'bot1:test1',
      '--testfilter', 'test2',
    ]
    options, args = trychange.gen_parser(None).parse_args(cmd)
    self.assertEquals([], args)
    try:
      # pylint: disable=W0212
      trychange._ParseBotList(options.bot, options.testfilter)
      self.fail()
    except ValueError:
      pass


class SVNUnittest(TryChangeTestsBase):
  """trychange.SVN tests."""
  def testMembersChanged(self):
    members = [
      'AutomagicalSettings', 'CaptureStatus', 'GetCodeReviewSetting',
      'ReadRootFile', 'GenerateDiff', 'GetFileNames', 'files', 'file_tuples',
    ]
    # If this test fails, you should add the relevant test.
    self.compareMembers(trychange.SVN, members)

  def testBasic(self):
    # pylint: disable=E1103
    trychange.os.path.abspath(self.fake_root).AndReturn(self.fake_root)
    trychange.scm.SVN.GetCheckoutRoot(self.fake_root).AndReturn(self.fake_root)
    trychange.scm.SVN.GenerateDiff(['foo.txt', 'bar.txt'],
                                   self.fake_root,
                                   full_move=True,
                                   revision=None).AndReturn('A diff')
    trychange.scm.SVN.GetEmail(self.fake_root).AndReturn('georges@example.com')
    self.mox.ReplayAll()
    svn = trychange.SVN(self.options, self.fake_root, self.options.files)
    self.assertEqual(svn.GetFileNames(), self.expected_files)
    self.assertEqual(svn.checkout_root, self.fake_root)
    self.assertEqual(svn.GenerateDiff(), 'A diff')


class GITUnittest(TryChangeTestsBase):
  """trychange.GIT tests."""
  def testMembersChanged(self):
    members = [
      'AutomagicalSettings', 'CaptureStatus', 'GetCodeReviewSetting',
      'ReadRootFile', 'GenerateDiff', 'GetFileNames', 'files', 'file_tuples',
    ]
    # If this test fails, you should add the relevant test.
    self.compareMembers(trychange.GIT, members)

  def testBasic(self):
    # pylint: disable=E1103
    trychange.os.path.abspath(self.fake_root).AndReturn(self.fake_root)
    trychange.scm.GIT.GetCheckoutRoot(self.fake_root).AndReturn(self.fake_root)
    trychange.scm.GIT.GetUpstreamBranch(self.fake_root).AndReturn('somewhere')
    trychange.RunGit(['diff-index', 'HEAD'])
    trychange.scm.GIT.GenerateDiff(self.fake_root,
                                   full_move=True,
                                   files=['foo.txt', 'bar.txt'],
                                   branch='somewhere').AndReturn('A diff')
    trychange.scm.GIT.GetPatchName(self.fake_root).AndReturn('bleh-1233')
    trychange.scm.GIT.GetEmail(self.fake_root).AndReturn('georges@example.com')
    self.mox.ReplayAll()
    git = trychange.GIT(self.options, self.fake_root, self.options.files)
    self.assertEqual(git.GetFileNames(), self.expected_files)
    self.assertEqual(git.checkout_root, self.fake_root)
    self.assertEqual(git.GenerateDiff(), 'A diff')


if __name__ == '__main__':
  unittest.main()

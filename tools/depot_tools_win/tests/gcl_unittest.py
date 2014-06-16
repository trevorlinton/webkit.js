#!/usr/bin/env python
# Copyright (c) 2012 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

"""Unit tests for gcl.py."""

# pylint: disable=E1103,E1101,E1120

import os
import sys

sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from testing_support.super_mox import mox, SuperMoxTestBase

import gcl
import presubmit_support


class GclTestsBase(SuperMoxTestBase):
  """Setups and tear downs the mocks but doesn't test anything as-is."""
  def setUp(self):
    SuperMoxTestBase.setUp(self)
    self.fake_root_dir = self.RootDir()
    self.mox.StubOutWithMock(gcl, 'RunShell')
    self.mox.StubOutWithMock(gcl.SVN, '_CaptureInfo')
    self.mox.StubOutWithMock(gcl.SVN, 'GetCheckoutRoot')
    self.mox.StubOutWithMock(gcl, 'tempfile')
    self.mox.StubOutWithMock(gcl.upload, 'RealMain')
    self.mox.StubOutWithMock(gcl.gclient_utils, 'FileRead')
    self.mox.StubOutWithMock(gcl.gclient_utils, 'FileWrite')
    gcl.REPOSITORY_ROOT = None
    self.old_review_settings = gcl.CODEREVIEW_SETTINGS
    self.assertEquals(gcl.CODEREVIEW_SETTINGS, {})

  def tearDown(self):
    gcl.CODEREVIEW_SETTINGS = self.old_review_settings

  def fakeChange(self, files=None):  # pylint: disable=R0201
    if files == None:
      files = [('A', 'aa'), ('M', 'bb')]

    change_info = self.mox.CreateMock(gcl.ChangeInfo)
    change_info.name = 'naame'
    change_info.issue = 1
    change_info.patchset = 0
    change_info.description = 'deescription'
    change_info.files = files
    change_info.GetFiles = lambda : change_info.files
    change_info.GetIssueDescription = lambda : change_info.description
    change_info.GetFileNames = lambda : [f[1] for f in change_info.files]
    change_info.GetLocalRoot = lambda : 'proout'
    change_info.patch = None
    change_info.rietveld = 'https://my_server'
    change_info._closed = False
    change_info._deleted = False
    change_info._comments_added = []

    class RpcServer(object):
      # pylint: disable=R0201,W0613
      def get_issue_properties(self, issue, messages):
        return { 'patchsets': [1337] }
    change_info.RpcServer = RpcServer

    def AddComment(comment):
      # pylint: disable=W0212
      change_info._comments_added.append(comment)
    change_info.AddComment = AddComment

    def Delete():
      change_info._deleted = True
    change_info.Delete = Delete

    def CloseIssue():
      change_info._closed = True
    change_info.CloseIssue = CloseIssue

    return change_info


class GclUnittest(GclTestsBase):
  """General gcl.py tests."""
  def tearDown(self):
    gcl.CODEREVIEW_SETTINGS = {}

  def testMembersChanged(self):
    self.mox.ReplayAll()
    members = [
        'CODEREVIEW_SETTINGS', 'CODEREVIEW_SETTINGS_FILE',
        'CODEREVIEW_SETTINGS_FILE_NOT_FOUND',
        'CMDchange', 'CMDchanges', 'CMDcommit', 'CMDdelete', 'CMDdeleteempties',
        'CMDdescription', 'CMDdiff', 'CMDhelp', 'CMDlint', 'CMDnothave',
        'CMDopened', 'CMDpassthru', 'CMDpresubmit', 'CMDrename', 'CMDsettings',
        'CMDstatus', 'CMDtry', 'CMDupload',
        'ChangeInfo', 'Command', 'DEFAULT_LINT_IGNORE_REGEX',
        'DEFAULT_LINT_REGEX', 'CheckHomeForFile', 'DoPresubmitChecks',
        'ErrorExit', 'FILES_CACHE', 'FilterFlag', 'GenUsage',
        'GenerateChangeName', 'GenerateDiff', 'GetCLs', 'GetCacheDir',
        'GetCachedFile', 'GetChangelistInfoFile', 'GetChangesDir',
        'GetCodeReviewSetting', 'GetFilesNotInCL', 'GetInfoDir',
        'GetModifiedFiles', 'GetRepositoryRoot', 'ListFiles',
        'LoadChangelistInfoForMultiple', 'MISSING_TEST_MSG',
        'OptionallyDoPresubmitChecks', 'REPOSITORY_ROOT',
        'RunShell', 'RunShellWithReturnCode', 'SVN',
        'TryChange', 'UnknownFiles', 'Warn',
        'attrs', 'breakpad', 'defer_attributes', 'fix_encoding',
        'gclient_utils', 'git_cl', 'json', 'main', 'need_change',
        'need_change_and_args', 'no_args', 'optparse', 'os',
        'presubmit_support', 'random', 're', 'rietveld',
        'string', 'subprocess2', 'sys', 'tempfile', 'time',
        'upload', 'urllib2',
    ]
    # If this test fails, you should add the relevant test.
    self.compareMembers(gcl, members)

  def testIsSVNMoved(self):
    # TODO(maruel): TEST ME
    pass

  def testGetSVNFileProperty(self):
    # TODO(maruel): TEST ME
    pass

  def testUnknownFiles(self):
    # TODO(maruel): TEST ME
    pass

  def testCheckHomeForFile(self):
    # TODO(maruel): TEST ME
    pass

  def testDefaultSettings(self):
    self.assertEquals({}, gcl.CODEREVIEW_SETTINGS)

  def testGetCodeReviewSettingOk(self):
    self.mox.StubOutWithMock(gcl, 'GetCachedFile')
    gcl.GetCachedFile(gcl.CODEREVIEW_SETTINGS_FILE).AndReturn(
        'foo:bar\n'
        '# comment\n'
        ' c : d \n\r'
        'e: f')
    self.mox.ReplayAll()
    self.assertEquals('bar', gcl.GetCodeReviewSetting('foo'))
    self.assertEquals('d', gcl.GetCodeReviewSetting('c'))
    self.assertEquals('f', gcl.GetCodeReviewSetting('e'))
    self.assertEquals('', gcl.GetCodeReviewSetting('other'))
    self.assertEquals(
        {'foo': 'bar', 'c': 'd', 'e': 'f', '__just_initialized': None},
        gcl.CODEREVIEW_SETTINGS)

  def testGetCodeReviewSettingFail(self):
    self.mox.StubOutWithMock(gcl, 'GetCachedFile')
    gcl.GetCachedFile(gcl.CODEREVIEW_SETTINGS_FILE).AndReturn(
        'aaa\n'
        ' c : d \n\r'
        'e: f')
    self.mox.ReplayAll()
    try:
      gcl.GetCodeReviewSetting('c')
      self.fail()
    except gcl.gclient_utils.Error:
      pass
    self.assertEquals({}, gcl.CODEREVIEW_SETTINGS)

  def testGetRepositoryRootNone(self):
    gcl.os.getcwd().AndReturn(self.fake_root_dir)
    gcl.SVN.GetCheckoutRoot(self.fake_root_dir).AndReturn(None)
    self.mox.ReplayAll()
    self.assertRaises(gcl.gclient_utils.Error, gcl.GetRepositoryRoot)

  def testGetRepositoryRootGood(self):
    root_path = gcl.os.path.join('bleh', 'prout', 'pouet')
    gcl.os.getcwd().AndReturn(root_path)
    gcl.SVN.GetCheckoutRoot(root_path).AndReturn(root_path + '.~')
    self.mox.ReplayAll()
    self.assertEquals(gcl.GetRepositoryRoot(), root_path + '.~')

  def testHelp(self):
    gcl.sys.stdout.write = lambda x: None
    self.mox.ReplayAll()
    gcl.CMDhelp([])


class ChangeInfoUnittest(GclTestsBase):
  def setUp(self):
    GclTestsBase.setUp(self)
    self.mox.StubOutWithMock(gcl, 'GetChangelistInfoFile')
    self.mox.StubOutWithMock(gcl, 'GetRepositoryRoot')

  def testChangeInfoMembers(self):
    self.mox.ReplayAll()
    members = [
      'AddComment', 'CloseIssue', 'Delete', 'Exists', 'GetFiles',
      'GetApprovingReviewers', 'GetFileNames', 'GetIssueDescription',
      'GetLocalRoot', 'Load',
      'MissingTests', 'NeedsUpload', 'PrimeLint', 'RpcServer', 'Save',
      'SendToRietveld',
      'SEPARATOR',
      'UpdateDescriptionFromIssue', 'UpdateRietveldDescription',
      'append_footer',
      'description', 'force_description', 'get_reviewers', 'issue', 'name',
      'needs_upload', 'patch', 'patchset', 'rietveld', 'update_reviewers',
    ]
    # If this test fails, you should add the relevant test.
    self.compareMembers(
        gcl.ChangeInfo('', 0, 0, '', None, self.fake_root_dir, 'foo', False),
        members)

  def testChangeInfoBase(self):
    files = [('M', 'foo'), ('A', 'bar')]
    self.mox.ReplayAll()
    o = gcl.ChangeInfo(
        'name2',
        '42',
        '53',
        'description2',
        files,
        self.fake_root_dir,
        'foo',
        False)
    self.assertEquals(o.name, 'name2')
    self.assertEquals(o.issue, 42)
    self.assertEquals(o.patchset, 53)
    self.assertEquals(o.description, 'description2')
    self.assertEquals(o.patch, None)
    self.assertEquals(o.GetFileNames(), ['foo', 'bar'])
    self.assertEquals(o.GetFiles(), files)
    self.assertEquals(o.GetLocalRoot(), self.fake_root_dir)

  def testLoadWithIssue(self):
    self.mox.StubOutWithMock(gcl, 'GetCodeReviewSetting')
    description = ["This is some description.", "force an extra separator."]
    gcl.GetChangelistInfoFile('bleh').AndReturn('bleeeh')
    gcl.os.path.exists('bleeeh').AndReturn(True)
    gcl.gclient_utils.FileRead('bleeeh').AndReturn(
      gcl.ChangeInfo.SEPARATOR.join(["42, 53", "G      b.cc"] + description))
    gcl.GetCodeReviewSetting('CODE_REVIEW_SERVER').AndReturn('foo')
    # Does an upgrade.
    gcl.GetChangelistInfoFile('bleh').AndReturn('bleeeh')
    gcl.gclient_utils.FileWrite('bleeeh', mox.IgnoreArg())
    self.mox.ReplayAll()

    change_info = gcl.ChangeInfo.Load('bleh', self.fake_root_dir, True, False)
    self.assertEquals(change_info.name, 'bleh')
    self.assertEquals(change_info.issue, 42)
    self.assertEquals(change_info.patchset, 53)
    self.assertEquals(change_info.description,
                      gcl.ChangeInfo.SEPARATOR.join(description))
    self.assertEquals(change_info.GetFiles(), [('G      ', 'b.cc')])

  def testLoadEmpty(self):
    self.mox.StubOutWithMock(gcl, 'GetCodeReviewSetting')
    gcl.GetChangelistInfoFile('bleh').AndReturn('bleeeh')
    gcl.os.path.exists('bleeeh').AndReturn(True)
    gcl.gclient_utils.FileRead('bleeeh').AndReturn(
        gcl.ChangeInfo.SEPARATOR.join(["", "", ""]))
    gcl.GetCodeReviewSetting('CODE_REVIEW_SERVER').AndReturn('foo')
    # Does an upgrade.
    gcl.GetChangelistInfoFile('bleh').AndReturn('bleeeh')
    gcl.gclient_utils.FileWrite('bleeeh', mox.IgnoreArg())
    self.mox.ReplayAll()

    change_info = gcl.ChangeInfo.Load('bleh', self.fake_root_dir, True, False)
    self.assertEquals(change_info.name, 'bleh')
    self.assertEquals(change_info.issue, 0)
    self.assertEquals(change_info.patchset, 0)
    self.assertEquals(change_info.description, "")
    self.assertEquals(change_info.GetFiles(), [])

  def testSaveEmpty(self):
    gcl.GetChangelistInfoFile('').AndReturn('foo')
    values = {
        'description': '', 'patchset': 2, 'issue': 1,
        'files': [], 'needs_upload': False, 'rietveld': 'https://foo'}
    gcl.gclient_utils.FileWrite(
        'foo', gcl.json.dumps(values, sort_keys=True, indent=2))
    self.mox.ReplayAll()

    change_info = gcl.ChangeInfo(
        '', 1, 2, '', None, self.fake_root_dir, 'foo', False)
    change_info.Save()

  def testSaveDirty(self):
    gcl.GetChangelistInfoFile('n').AndReturn('foo')
    values = {
        'description': 'des', 'patchset': 0, 'issue': 0,
        'files': [], 'needs_upload': True, 'rietveld': 'https://foo'}
    gcl.gclient_utils.FileWrite(
        'foo', gcl.json.dumps(values, sort_keys=True, indent=2))
    self.mox.ReplayAll()

    change_info = gcl.ChangeInfo('n', 0, 0, 'des', None, self.fake_root_dir,
                                 'foo', needs_upload=True)
    change_info.Save()


class CMDuploadUnittest(GclTestsBase):
  def setUp(self):
    GclTestsBase.setUp(self)
    self.mox.StubOutWithMock(gcl, 'CheckHomeForFile')
    self.mox.StubOutWithMock(gcl, 'DoPresubmitChecks')
    self.mox.StubOutWithMock(gcl, 'GenerateDiff')
    self.mox.StubOutWithMock(gcl, 'GetCodeReviewSetting')
    self.mox.StubOutWithMock(gcl, 'GetRepositoryRoot')
    self.mox.StubOutWithMock(gcl.ChangeInfo, 'SendToRietveld')
    self.mox.StubOutWithMock(gcl, 'TryChange')
    self.mox.StubOutWithMock(gcl.ChangeInfo, 'Load')

  def testNew(self):
    change_info = self.mox.CreateMock(gcl.ChangeInfo)
    change_info.name = 'naame'
    change_info.issue = 1
    change_info.patchset = 0
    change_info.description = 'deescription\n\nR=foo@bar.com',
    change_info.files = [('A', 'aa'), ('M', 'bb')]
    change_info.patch = None
    change_info.rietveld = 'https://my_server'
    files = [item[1] for item in change_info.files]
    output = presubmit_support.PresubmitOutput()
    gcl.DoPresubmitChecks(change_info, False, True).AndReturn(output)
    #gcl.GetCodeReviewSetting('CODE_REVIEW_SERVER').AndReturn('my_server')
    gcl.os.getcwd().AndReturn('somewhere')
    change_info.GetFiles().AndReturn(change_info.files)
    gcl.os.chdir('proout')
    change_info.get_reviewers().AndReturn('foo@bar.com')
    change_info.GetFileNames().AndReturn(files)
    gcl.GenerateDiff(files)
    gcl.upload.RealMain(['upload.py', '-y', '--server=https://my_server',
                         '-r', 'georges@example.com',
                         '--issue=1', '--title= '],
                         change_info.patch).AndReturn(("1",
                                                                    "2"))
    change_info.GetLocalRoot().AndReturn('proout')
    change_info.Save()
    change_info.PrimeLint()
    gcl.os.chdir('somewhere')
    gcl.sys.stdout.write("*** Upload does not submit a try; use gcl try to"
                         " submit a try. ***")
    gcl.sys.stdout.write("\n")
    gcl.GetRepositoryRoot().AndReturn(self.fake_root_dir)
    gcl.ChangeInfo.Load('naame', self.fake_root_dir, True, True
        ).AndReturn(change_info)
    self.mox.ReplayAll()

    gcl.CMDupload(['naame', '-r', 'georges@example.com'])
    self.checkstdout('*** Upload does not submit a try; use gcl try to submit '
        'a try. ***\n'
        '*** Upload does not submit a try; use gcl try to submit a try. ***\n')

  def testServerOverride(self):
    change_info = gcl.ChangeInfo(
        'naame',
        0,
        0,
        'deescription',
        [('A', 'aa'), ('M', 'bb')],
        self.fake_root_dir,
        'my_server',
        False)
    self.mox.StubOutWithMock(change_info, 'Save')
    change_info.Save()
    output = presubmit_support.PresubmitOutput()
    gcl.DoPresubmitChecks(change_info, False, True).AndReturn(output)
    gcl.tempfile.mkstemp(text=True).AndReturn((42, 'descfile'))
    gcl.os.write(42, change_info.description)
    gcl.os.close(42)
    gcl.GetCodeReviewSetting('CC_LIST')
    gcl.GetCodeReviewSetting('PRIVATE')
    gcl.os.getcwd().AndReturn('somewhere')
    gcl.os.chdir(change_info.GetLocalRoot())
    gcl.GenerateDiff(change_info.GetFileNames())
    gcl.upload.RealMain(
        [ 'upload.py', '-y', '--server=https://my_server', '--server=a',
          '--file=descfile'],
        change_info.patch).AndReturn(("1", "2"))
    gcl.os.remove('descfile')
    change_info.SendToRietveld("/lint/issue%s_%s" % ('1', '2'), timeout=10)
    gcl.os.chdir('somewhere')
    gcl.sys.stdout.write("*** Upload does not submit a try; use gcl try to"
                         " submit a try. ***")
    gcl.sys.stdout.write("\n")
    gcl.GetRepositoryRoot().AndReturn(self.fake_root_dir)
    gcl.ChangeInfo.Load('naame', self.fake_root_dir, True, True
        ).AndReturn(change_info)
    self.mox.ReplayAll()

    gcl.CMDupload(['naame', '--server=a', '--no_watchlists'])
    self.checkstdout('*** Upload does not submit a try; use gcl try to submit '
        'a try. ***\n'
        '*** Upload does not submit a try; use gcl try to submit a try. ***\n')

  def testNormal(self):
    change_info = gcl.ChangeInfo(
        'naame',
        0,
        0,
        'deescription',
        [('A', 'aa'), ('M', 'bb')],
        self.fake_root_dir,
        'my_server',
        False)
    self.mox.StubOutWithMock(change_info, 'Save')
    change_info.Save()
    output = presubmit_support.PresubmitOutput()
    gcl.DoPresubmitChecks(change_info, False, True).AndReturn(output)
    gcl.tempfile.mkstemp(text=True).AndReturn((42, 'descfile'))
    gcl.os.write(42, change_info.description)
    gcl.os.close(42)
    gcl.GetCodeReviewSetting('CC_LIST')
    gcl.GetCodeReviewSetting('PRIVATE')
    gcl.os.getcwd().AndReturn('somewhere')
    gcl.os.chdir(change_info.GetLocalRoot())
    gcl.GenerateDiff(change_info.GetFileNames())
    gcl.upload.RealMain(
        ['upload.py', '-y', '--server=https://my_server', "--file=descfile" ],
        change_info.patch).AndReturn(("1", "2"))
    gcl.os.remove('descfile')
    change_info.SendToRietveld("/lint/issue%s_%s" % ('1', '2'), timeout=10)
    gcl.os.chdir('somewhere')
    gcl.sys.stdout.write("*** Upload does not submit a try; use gcl try to"
                         " submit a try. ***")
    gcl.sys.stdout.write("\n")
    gcl.GetRepositoryRoot().AndReturn(self.fake_root_dir)
    gcl.ChangeInfo.Load('naame', self.fake_root_dir, True, True
        ).AndReturn(change_info)
    self.mox.ReplayAll()

    gcl.CMDupload(['naame', '--no_watchlists'])
    self.assertEquals(change_info.issue, 1)
    self.assertEquals(change_info.patchset, 2)
    self.checkstdout('*** Upload does not submit a try; use gcl try to submit '
        'a try. ***\n'
        '*** Upload does not submit a try; use gcl try to submit a try. ***\n')

  def testNoServer(self):
    self.mox.StubOutWithMock(gcl.sys, 'stderr')
    gcl.sys.stderr.write(
        'Don\'t use the -s flag, fix codereview.settings instead')
    gcl.sys.stderr.write('\n')
    gcl.GetRepositoryRoot().AndReturn(self.fake_root_dir)
    gcl.ChangeInfo.Load('naame', self.fake_root_dir, True, True
        ).AndReturn(1)
    self.mox.ReplayAll()

    try:
      gcl.CMDupload(['naame', '-s', 'foo'])
      self.fail()
    except SystemExit:
      pass

  def testReviewersInDescription(self):
    change_info = self.mox.CreateMock(gcl.ChangeInfo)
    change_info.name = 'naame'
    change_info.issue = 1
    change_info.patchset = 0
    change_info.description = 'deescription\n\nR=georges@example.com',
    change_info.files = [('A', 'aa'), ('M', 'bb')]
    change_info.patch = None
    change_info.rietveld = 'https://my_server'
    files = [item[1] for item in change_info.files]
    output = presubmit_support.PresubmitOutput()
    gcl.DoPresubmitChecks(change_info, False, True).AndReturn(output)
    #gcl.GetCodeReviewSetting('CODE_REVIEW_SERVER').AndReturn('my_server')
    gcl.os.getcwd().AndReturn('somewhere')
    change_info.GetFiles().AndReturn(change_info.files)
    change_info.get_reviewers().AndReturn(['georges@example.com'])
    change_info.GetFileNames().AndReturn(files)
    change_info.GetLocalRoot().AndReturn('proout')
    gcl.os.chdir('proout')
    gcl.GenerateDiff(files)
    gcl.upload.RealMain(['upload.py', '-y', '--server=https://my_server',
                         '--reviewers=georges@example.com',
                         '--issue=1', '--title= '],
                         change_info.patch).AndReturn(("1", "2"))
    change_info.Save()
    change_info.PrimeLint()
    gcl.os.chdir('somewhere')
    gcl.sys.stdout.write("*** Upload does not submit a try; use gcl try to"
                         " submit a try. ***")
    gcl.sys.stdout.write("\n")
    gcl.GetRepositoryRoot().AndReturn(self.fake_root_dir)
    gcl.ChangeInfo.Load('naame', self.fake_root_dir, True, True
        ).AndReturn(change_info)
    self.mox.ReplayAll()

    gcl.CMDupload(['naame'])
    self.checkstdout('*** Upload does not submit a try; use gcl try to submit '
        'a try. ***\n'
        '*** Upload does not submit a try; use gcl try to submit a try. ***\n')

  def testSuggestReviewers(self):
    change_info = self.fakeChange()
    output = presubmit_support.PresubmitOutput()
    output.reviewers = ['foo@example.com', 'bar@example.com']
    gcl.DoPresubmitChecks(change_info, False, True).AndReturn(output)
    #gcl.GetCodeReviewSetting('CODE_REVIEW_SERVER').AndReturn('my_server')
    gcl.os.getcwd().AndReturn('somewhere')
    gcl.os.chdir('proout')
    gcl.GenerateDiff(change_info.GetFileNames())
    gcl.upload.RealMain(['upload.py', '-y', '--server=https://my_server',
                         '--reviewers=foo@example.com,bar@example.com',
                         '--issue=1', '--title= '],
                         change_info.patch).AndReturn(("1", "2"))
    change_info.get_reviewers().AndReturn(['foo@example.com,bar@example.com'])
    change_info.Save()
    change_info.PrimeLint()
    gcl.os.chdir('somewhere')
    gcl.sys.stdout.write("*** Upload does not submit a try; use gcl try to"
                         " submit a try. ***")
    gcl.sys.stdout.write("\n")
    gcl.GetRepositoryRoot().AndReturn(self.fake_root_dir)
    gcl.ChangeInfo.Load('naame', self.fake_root_dir, True, True
        ).AndReturn(change_info)
    self.mox.ReplayAll()

    gcl.CMDupload(['naame'])
    self.checkstdout('*** Upload does not submit a try; use gcl try to submit '
        'a try. ***\n'
        '*** Upload does not submit a try; use gcl try to submit a try. ***\n')


class CMDCommitUnittest(GclTestsBase):
  def mockLoad(self, files=None):
    self.mox.StubOutWithMock(gcl, 'GetRepositoryRoot')
    self.mox.StubOutWithMock(gcl.ChangeInfo, 'Load')
    gcl.GetRepositoryRoot().AndReturn(self.fake_root_dir)
    change_info = self.fakeChange(files)
    gcl.ChangeInfo.Load('naame', self.fake_root_dir, True, True
        ).AndReturn(change_info)
    return change_info

  def mockPresubmit(self, change_info, fail):
    self.mox.StubOutWithMock(gcl, 'OptionallyDoPresubmitChecks')
    output = presubmit_support.PresubmitOutput()
    if fail:
      output.fail()
    gcl.OptionallyDoPresubmitChecks(change_info, True, []).AndReturn(output)

  def mockCommit(self, change_info, commit_message, shell_output):
    gcl.tempfile.mkstemp(text=True).AndReturn((42, 'commit'))
    gcl.os.write(42, commit_message)
    gcl.os.close(42)
    gcl.tempfile.mkstemp(text=True).AndReturn((43, 'files'))
    gcl.os.write(43, '\n'.join(change_info.GetFileNames()))
    gcl.os.close(43)

    gcl.RunShell(['svn', 'commit', '--file=commit', '--targets=files'],
        True).AndReturn(shell_output)
    if 'Committed' in shell_output:
      self.mox.StubOutWithMock(gcl, 'GetCodeReviewSetting')
      gcl.GetCodeReviewSetting('VIEW_VC').AndReturn('http://view/')

    gcl.os.remove('commit')
    gcl.os.remove('files')

  def testPresubmitEmpty(self):
    self.mockLoad(files=[])
    self.mox.ReplayAll()

    retval = gcl.CMDcommit(['naame'])

    self.assertEquals(retval, 1)

  def testPresubmitFails(self):
    change_info = self.mockLoad()
    self.mockPresubmit(change_info, fail=True)
    self.mox.ReplayAll()

    retval = gcl.CMDcommit(['naame'])

    self.assertEquals(retval, 1)

  def testPresubmitSucceeds(self):
    change_info = self.mockLoad()
    self.mockPresubmit(change_info, fail=False)
    self.mockCommit(
        change_info, 'deescription\n\nReview URL: https://my_server/1', '')
    change_info.UpdateDescriptionFromIssue()
    change_info.GetApprovingReviewers().AndReturn(['a@c'])
    change_info.update_reviewers(['a@c'])
    self.mox.ReplayAll()

    retval = gcl.CMDcommit(['naame'])

    self.assertEquals(retval, 0)
    self.assertEquals(change_info.description, 'deescription')
    # pylint: disable=W0212
    self.assertFalse(change_info._deleted)
    self.assertFalse(change_info._closed)

  def testPresubmitSucceedsWithCommittedMessage(self):
    change_info = self.mockLoad()
    self.mockPresubmit(change_info, fail=False)
    self.mockCommit(
        change_info,
        'deescription\n\nReview URL: https://my_server/1',
        '\nCommitted revision 12345')
    change_info.UpdateDescriptionFromIssue()
    change_info.GetApprovingReviewers().AndReturn(['a@c'])
    change_info.update_reviewers(['a@c'])
    change_info.append_footer('Committed: http://view/12345')
    self.mox.ReplayAll()

    retval = gcl.CMDcommit(['naame'])
    self.assertEquals(retval, 0)
    # This is because append_footer is mocked.
    self.assertEquals(change_info.description, 'deescription')
    # pylint: disable=W0212
    self.assertTrue(change_info._deleted)
    self.assertTrue(change_info._closed)
    self.assertEqual(
        change_info._comments_added,
        ["Committed patchset #1 manually as r12345 (presubmit successful)."])


if __name__ == '__main__':
  import unittest
  unittest.main()

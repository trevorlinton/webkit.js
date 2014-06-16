#!/usr/bin/env python
# Copyright (c) 2012 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

"""Unit tests for presubmit_support.py and presubmit_canned_checks.py."""

# pylint: disable=E1101,E1103

import functools
import itertools
import logging
import os
import StringIO
import sys
import time
import unittest

_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, _ROOT)

from testing_support.super_mox import mox, SuperMoxTestBase

import owners
import subprocess2 as subprocess
import presubmit_support as presubmit
import rietveld

# Shortcut.
presubmit_canned_checks = presubmit.presubmit_canned_checks


# Access to a protected member XXX of a client class
# pylint: disable=W0212


class PresubmitTestsBase(SuperMoxTestBase):
  """Setups and tear downs the mocks but doesn't test anything as-is."""
  presubmit_text = """
def CheckChangeOnUpload(input_api, output_api):
  if not input_api.change.NOSUCHKEY:
    return [output_api.PresubmitError("!!")]
  elif not input_api.change.REALLYNOSUCHKEY:
    return [output_api.PresubmitPromptWarning("??")]
  elif not input_api.change.REALLYABSOLUTELYNOSUCHKEY:
    return [output_api.PresubmitPromptWarning("??"),
            output_api.PresubmitError("XX!!XX")]
  else:
    return ()
"""
  presubmit_tryslave = """
def GetPreferredTrySlaves():
  return %s
"""

  presubmit_tryslave_project = """
def GetPreferredTrySlaves(project):
  if project == %s:
    return %s
  else:
    return %s
"""

  presubmit_trymaster = """
def GetPreferredTryMasters(project, change):
  return %s
"""

  presubmit_diffs = """
--- file1       2011-02-09 10:38:16.517224845 -0800
+++ file2       2011-02-09 10:38:53.177226516 -0800
@@ -1,6 +1,5 @@
 this is line number 0
 this is line number 1
-this is line number 2 to be deleted
 this is line number 3
 this is line number 4
 this is line number 5
@@ -8,7 +7,7 @@
 this is line number 7
 this is line number 8
 this is line number 9
-this is line number 10 to be modified
+this is line number 10
 this is line number 11
 this is line number 12
 this is line number 13
@@ -21,9 +20,8 @@
 this is line number 20
 this is line number 21
 this is line number 22
-this is line number 23
-this is line number 24
-this is line number 25
+this is line number 23.1
+this is line number 25.1
 this is line number 26
 this is line number 27
 this is line number 28
@@ -31,6 +29,7 @@
 this is line number 30
 this is line number 31
 this is line number 32
+this is line number 32.1
 this is line number 33
 this is line number 34
 this is line number 35
@@ -38,14 +37,14 @@
 this is line number 37
 this is line number 38
 this is line number 39
-
 this is line number 40
-this is line number 41
+this is line number 41.1
 this is line number 42
 this is line number 43
 this is line number 44
 this is line number 45
+
 this is line number 46
 this is line number 47
-this is line number 48
+this is line number 48.1
 this is line number 49
"""

  def setUp(self):
    SuperMoxTestBase.setUp(self)
    class FakeChange(object):
      def __init__(self, obj):
        self._root = obj.fake_root_dir
      def RepositoryRoot(self):
        return self._root

    self.mox.StubOutWithMock(presubmit, 'random')
    self.mox.StubOutWithMock(presubmit, 'warn')
    presubmit._ASKED_FOR_FEEDBACK = False
    self.fake_root_dir = self.RootDir()
    self.fake_change = FakeChange(self)

    # Special mocks.
    def MockAbsPath(f):
      return f
    def MockChdir(f):
      return None
    # SuperMoxTestBase already mock these but simplify our life.
    presubmit.os.path.abspath = MockAbsPath
    presubmit.os.getcwd = self.RootDir
    presubmit.os.chdir = MockChdir
    self.mox.StubOutWithMock(presubmit.scm, 'determine_scm')
    self.mox.StubOutWithMock(presubmit.scm.SVN, '_CaptureInfo')
    self.mox.StubOutWithMock(presubmit.scm.SVN, 'GetFileProperty')
    self.mox.StubOutWithMock(presubmit.gclient_utils, 'FileRead')
    self.mox.StubOutWithMock(presubmit.gclient_utils, 'FileWrite')
    self.mox.StubOutWithMock(presubmit.scm.SVN, 'GenerateDiff')
    self.mox.StubOutWithMock(presubmit.scm.GIT, 'GenerateDiff')


class PresubmitUnittest(PresubmitTestsBase):
  """General presubmit_support.py tests (excluding InputApi and OutputApi)."""

  _INHERIT_SETTINGS = 'inherit-review-settings-ok'

  def testMembersChanged(self):
    self.mox.ReplayAll()
    members = [
      'AffectedFile', 'Change', 'DoGetTrySlaves', 'DoPresubmitChecks',
      'GetTrySlavesExecuter', 'GitAffectedFile', 'CallCommand', 'CommandData',
      'GitChange', 'InputApi', 'ListRelevantPresubmitFiles', 'Main',
      'NonexistantCannedCheckFilter', 'OutputApi', 'ParseFiles',
      'PresubmitFailure', 'PresubmitExecuter', 'PresubmitOutput', 'ScanSubDirs',
      'SvnAffectedFile', 'SvnChange', 'cPickle', 'cpplint', 'cStringIO',
      'contextlib', 'canned_check_filter', 'fix_encoding', 'fnmatch',
      'gclient_utils', 'glob', 'inspect', 'json', 'load_files', 'logging',
      'marshal', 'normpath', 'optparse', 'os', 'owners', 'pickle',
      'presubmit_canned_checks', 'random', 're', 'rietveld', 'scm',
      'subprocess', 'sys', 'tempfile', 'time', 'traceback', 'types', 'unittest',
      'urllib2', 'warn', 'multiprocessing', 'DoGetTryMasters',
      'GetTryMastersExecuter', 'itertools',
    ]
    # If this test fails, you should add the relevant test.
    self.compareMembers(presubmit, members)

  def testCannedCheckFilter(self):
    canned = presubmit.presubmit_canned_checks
    orig = canned.CheckOwners
    with presubmit.canned_check_filter(['CheckOwners']):
      self.assertNotEqual(canned.CheckOwners, orig)
      self.assertEqual(canned.CheckOwners(None, None), [])
    self.assertEqual(canned.CheckOwners, orig)

  def testCannedCheckFilterFail(self):
    canned = presubmit.presubmit_canned_checks
    orig = canned.CheckOwners
    def failAttempt():
      with presubmit.canned_check_filter(['CheckOwners', 'Spazfleem']):
        pass
    self.assertRaises(presubmit.NonexistantCannedCheckFilter, failAttempt)
    self.assertEqual(canned.CheckOwners, orig)

  def testListRelevantPresubmitFiles(self):
    join = presubmit.os.path.join
    files = [
      'blat.cc',
      join('foo', 'haspresubmit', 'yodle', 'smart.h'),
      join('moo', 'mat', 'gat', 'yo.h'),
      join('foo', 'luck.h'),
    ]
    inherit_path = presubmit.os.path.join(self.fake_root_dir,
                                          self._INHERIT_SETTINGS)
    presubmit.os.path.isfile(inherit_path).AndReturn(False)
    presubmit.os.path.isfile(join(self.fake_root_dir,
                                  'PRESUBMIT.py')).AndReturn(True)
    presubmit.os.path.isfile(join(self.fake_root_dir, 'foo',
                                  'PRESUBMIT.py')).AndReturn(False)
    presubmit.os.path.isfile(join(self.fake_root_dir, 'foo', 'haspresubmit',
                                  'PRESUBMIT.py')).AndReturn(True)
    presubmit.os.path.isfile(join(self.fake_root_dir, 'foo', 'haspresubmit',
                                  'yodle', 'PRESUBMIT.py')).AndReturn(True)
    presubmit.os.path.isfile(join(self.fake_root_dir, 'moo',
                                  'PRESUBMIT.py')).AndReturn(False)
    presubmit.os.path.isfile(join(self.fake_root_dir, 'moo', 'mat',
                                  'PRESUBMIT.py')).AndReturn(False)
    presubmit.os.path.isfile(join(self.fake_root_dir, 'moo', 'mat', 'gat',
                                  'PRESUBMIT.py')).AndReturn(False)
    self.mox.ReplayAll()

    presubmit_files = presubmit.ListRelevantPresubmitFiles(files,
                                                           self.fake_root_dir)
    self.assertEqual(presubmit_files,
        [
          join(self.fake_root_dir, 'PRESUBMIT.py'),
          join(self.fake_root_dir, 'foo', 'haspresubmit', 'PRESUBMIT.py'),
          join(self.fake_root_dir, 'foo', 'haspresubmit', 'yodle',
               'PRESUBMIT.py')
        ])

  def testListRelevantPresubmitFilesInheritSettings(self):
    join = presubmit.os.path.join
    sys_root_dir = self._OS_SEP
    root_dir = join(sys_root_dir, 'foo', 'bar')
    files = [
      'test.cc',
      join('moo', 'test2.cc'),
      join('zoo', 'test3.cc')
    ]
    inherit_path = presubmit.os.path.join(root_dir, self._INHERIT_SETTINGS)
    presubmit.os.path.isfile(inherit_path).AndReturn(True)
    presubmit.os.path.isfile(join(sys_root_dir,
                                  'PRESUBMIT.py')).AndReturn(False)
    presubmit.os.path.isfile(join(sys_root_dir, 'foo',
                                  'PRESUBMIT.py')).AndReturn(True)
    presubmit.os.path.isfile(join(sys_root_dir, 'foo', 'bar',
                                  'PRESUBMIT.py')).AndReturn(False)
    presubmit.os.path.isfile(join(sys_root_dir, 'foo', 'bar', 'moo',
                                  'PRESUBMIT.py')).AndReturn(True)
    presubmit.os.path.isfile(join(sys_root_dir, 'foo', 'bar', 'zoo',
                                  'PRESUBMIT.py')).AndReturn(False)
    self.mox.ReplayAll()

    presubmit_files = presubmit.ListRelevantPresubmitFiles(files, root_dir)
    self.assertEqual(presubmit_files,
        [
          join(sys_root_dir, 'foo', 'PRESUBMIT.py'),
          join(sys_root_dir, 'foo', 'bar', 'moo', 'PRESUBMIT.py')
        ])

  def testTagLineRe(self):
    self.mox.ReplayAll()
    m = presubmit.Change.TAG_LINE_RE.match(' BUG =1223, 1445  \t')
    self.failUnless(m)
    self.failUnlessEqual(m.group('key'), 'BUG')
    self.failUnlessEqual(m.group('value'), '1223, 1445')

  def testGclChange(self):
    description_lines = ('Hello there',
                         'this is a change',
                         'BUG=123',
                         ' STORY =http://foo/  \t',
                         'and some more regular text  \t')
    files = [
      ['A', 'foo/blat.cc'],
      ['M', 'binary.dll'],  # a binary file
      ['A', 'isdir'],  # a directory
      ['?', 'flop/notfound.txt'],  # not found in SVN, still exists locally
      ['D', 'boo/flap.h'],
    ]
    blat = presubmit.os.path.join('foo', 'blat.cc')
    notfound = presubmit.os.path.join('flop', 'notfound.txt')
    flap = presubmit.os.path.join('boo', 'flap.h')
    binary = 'binary.dll'
    isdir = 'isdir'
    f_blat = presubmit.os.path.join(self.fake_root_dir, blat)
    f_notfound = presubmit.os.path.join(self.fake_root_dir, notfound)
    f_flap = presubmit.os.path.join(self.fake_root_dir, flap)
    f_binary = presubmit.os.path.join(self.fake_root_dir, binary)
    f_isdir = presubmit.os.path.join(self.fake_root_dir, isdir)
    presubmit.os.path.exists(f_blat).AndReturn(True)
    presubmit.os.path.isdir(f_blat).AndReturn(False)
    presubmit.os.path.exists(f_binary).AndReturn(True)
    presubmit.os.path.isdir(f_binary).AndReturn(False)
    presubmit.os.path.exists(f_isdir).AndReturn(True)
    presubmit.os.path.isdir(f_isdir).AndReturn(True)
    presubmit.os.path.exists(f_notfound).AndReturn(True)
    presubmit.os.path.isdir(f_notfound).AndReturn(False)
    presubmit.os.path.exists(f_flap).AndReturn(False)
    presubmit.scm.SVN._CaptureInfo([flap], self.fake_root_dir
        ).AndReturn({'Node Kind': 'file'})
    presubmit.scm.SVN.GetFileProperty(
        blat, 'svn:mime-type', self.fake_root_dir).AndReturn(None)
    presubmit.scm.SVN.GetFileProperty(
        binary, 'svn:mime-type', self.fake_root_dir
        ).AndReturn('application/octet-stream')
    presubmit.scm.SVN.GetFileProperty(
        notfound, 'svn:mime-type', self.fake_root_dir).AndReturn('')
    presubmit.scm.SVN._CaptureInfo([blat], self.fake_root_dir).AndReturn(
            {'URL': 'svn:/foo/foo/blat.cc'})
    presubmit.scm.SVN._CaptureInfo([binary], self.fake_root_dir).AndReturn(
        {'URL': 'svn:/foo/binary.dll'})
    presubmit.scm.SVN._CaptureInfo([notfound], self.fake_root_dir).AndReturn({})
    presubmit.scm.SVN._CaptureInfo([flap], self.fake_root_dir).AndReturn(
            {'URL': 'svn:/foo/boo/flap.h'})
    presubmit.scm.SVN.GenerateDiff([blat], self.fake_root_dir, False, None
        ).AndReturn(self.presubmit_diffs)
    presubmit.scm.SVN.GenerateDiff([notfound], self.fake_root_dir, False, None
        ).AndReturn(self.presubmit_diffs)

    self.mox.ReplayAll()

    change = presubmit.SvnChange(
        'mychange',
        '\n'.join(description_lines),
        self.fake_root_dir,
        files,
        0,
        0,
        None)
    self.failUnless(change.Name() == 'mychange')
    self.failUnless(change.DescriptionText() ==
                    'Hello there\nthis is a change\nand some more regular text')
    self.failUnless(change.FullDescriptionText() ==
                    '\n'.join(description_lines))

    self.failUnless(change.BUG == '123')
    self.failUnless(change.STORY == 'http://foo/')
    self.failUnless(change.BLEH == None)

    self.failUnless(len(change.AffectedFiles()) == 4)
    self.failUnless(len(change.AffectedFiles(include_dirs=True)) == 5)
    self.failUnless(len(change.AffectedFiles(include_deletes=False)) == 3)
    self.failUnless(len(change.AffectedFiles(include_dirs=True,
                                             include_deletes=False)) == 4)

    affected_text_files = change.AffectedTextFiles()
    self.failUnless(len(affected_text_files) == 2)
    self.failIf(filter(lambda x: x.LocalPath() == 'binary.dll',
                       affected_text_files))

    local_paths = change.LocalPaths()
    expected_paths = [presubmit.normpath(f[1]) for f in files]
    self.failUnless(
        len(filter(lambda x: x in expected_paths, local_paths)) == 4)

    server_paths = change.ServerPaths()
    expected_paths = ['svn:/foo/%s' % f[1] for f in files if
                      f[1] != 'flop/notfound.txt']
    expected_paths.append('')  # one unknown file
    self.assertEqual(
      len(filter(lambda x: x in expected_paths, server_paths)), 4)

    files = [[x[0], presubmit.normpath(x[1])] for x in files]

    rhs_lines = []
    for line in change.RightHandSideLines():
      rhs_lines.append(line)
    self.assertEquals(rhs_lines[0][0].LocalPath(), files[0][1])
    self.assertEquals(rhs_lines[0][1], 10)
    self.assertEquals(rhs_lines[0][2],'this is line number 10')

    self.assertEquals(rhs_lines[3][0].LocalPath(), files[0][1])
    self.assertEquals(rhs_lines[3][1], 32)
    self.assertEquals(rhs_lines[3][2], 'this is line number 32.1')

    self.assertEquals(rhs_lines[8][0].LocalPath(), files[3][1])
    self.assertEquals(rhs_lines[8][1], 23)
    self.assertEquals(rhs_lines[8][2], 'this is line number 23.1')

    self.assertEquals(rhs_lines[12][0].LocalPath(), files[3][1])
    self.assertEquals(rhs_lines[12][1], 46)
    self.assertEquals(rhs_lines[12][2], '')

    self.assertEquals(rhs_lines[13][0].LocalPath(), files[3][1])
    self.assertEquals(rhs_lines[13][1], 49)
    self.assertEquals(rhs_lines[13][2], 'this is line number 48.1')

  def testGitChange(self):
    description_lines = ('Hello there',
                         'this is a change',
                         'BUG=123',
                         ' STORY =http://foo/  \t',
                         'and some more regular text  \t')
    unified_diff = [
        'diff --git binary_a.png binary_a.png',
        'new file mode 100644',
        'index 0000000..6fbdd6d',
        'Binary files /dev/null and binary_a.png differ',
        'diff --git binary_d.png binary_d.png',
        'deleted file mode 100644',
        'index 6fbdd6d..0000000',
        'Binary files binary_d.png and /dev/null differ',
        'diff --git binary_md.png binary_md.png',
        'index 6fbdd6..be3d5d8 100644',
        'GIT binary patch',
        'delta 109',
        'zcmeyihjs5>)(Opwi4&WXB~yyi6N|G`(i5|?i<2_a@)OH5N{Um`D-<SM@g!_^W9;SR',
        'zO9b*W5{pxTM0slZ=F42indK9U^MTyVQlJ2s%1BMmEKMv1Q^gtS&9nHn&*Ede;|~CU',
        'CMJxLN',
        '',
        'delta 34',
        'scmV+-0Nww+y#@BX1(1W0gkzIp3}CZh0gVZ>`wGVcgW(Rh;SK@ZPa9GXlK=n!',
        '',
        'diff --git binary_m.png binary_m.png',
        'index 6fbdd6d..be3d5d8 100644',
        'Binary files binary_m.png and binary_m.png differ',
        'diff --git boo/blat.cc boo/blat.cc',
        'new file mode 100644',
        'index 0000000..37d18ad',
        '--- boo/blat.cc',
        '+++ boo/blat.cc',
        '@@ -0,0 +1,5 @@',
        '+This is some text',
        '+which lacks a copyright warning',
        '+but it is nonetheless interesting',
        '+and worthy of your attention.',
        '+Its freshness factor is through the roof.',
        'diff --git floo/delburt.cc floo/delburt.cc',
        'deleted file mode 100644',
        'index e06377a..0000000',
        '--- floo/delburt.cc',
        '+++ /dev/null',
        '@@ -1,14 +0,0 @@',
        '-This text used to be here',
        '-but someone, probably you,',
        '-having consumed the text',
        '-  (absorbed its meaning)',
        '-decided that it should be made to not exist',
        '-that others would not read it.',
        '-  (What happened here?',
        '-was the author incompetent?',
        '-or is the world today so different from the world',
        '-   the author foresaw',
        '-and past imaginination',
        '-   amounts to rubble, insignificant,',
        '-something to be tripped over',
        '-and frustrated by)',
        'diff --git foo/TestExpectations foo/TestExpectations',
        'index c6e12ab..d1c5f23 100644',
        '--- foo/TestExpectations',
        '+++ foo/TestExpectations',
        '@@ -1,12 +1,24 @@',
        '-Stranger, behold:',
        '+Strange to behold:',
        '   This is a text',
        ' Its contents existed before.',
        '',
        '-It is written:',
        '+Weasel words suggest:',
        '   its contents shall exist after',
        '   and its contents',
        ' with the progress of time',
        ' will evolve,',
        '-   snaillike,',
        '+   erratically,',
        ' into still different texts',
        '-from this.',
        '\ No newline at end of file',
        '+from this.',
        '+',
        '+For the most part,',
        '+I really think unified diffs',
        '+are elegant: the way you can type',
        '+diff --git inside/a/text inside/a/text',
        '+or something silly like',
        '+@@ -278,6 +278,10 @@',
        '+and have this not be interpreted',
        '+as the start of a new file',
        '+or anything messed up like that,',
        '+because you parsed the header',
        '+correctly.',
        '\ No newline at end of file',
            '']
    files = [('A      ', 'binary_a.png'),
             ('D      ', 'binary_d.png'),
             ('M      ', 'binary_m.png'),
             ('M      ', 'binary_md.png'),  # Binary w/ diff
             ('A      ', 'boo/blat.cc'),
             ('D      ', 'floo/delburt.cc'),
             ('M      ', 'foo/TestExpectations')]

    for op, path in files:
      full_path = presubmit.os.path.join(self.fake_root_dir, *path.split('/'))
      if op.startswith('D'):
        os.path.exists(full_path).AndReturn(False)
      else:
        os.path.exists(full_path).AndReturn(False)
        os.path.isfile(full_path).AndReturn(True)

    presubmit.scm.GIT.GenerateDiff(self.fake_root_dir, files=[], full_move=True
        ).AndReturn('\n'.join(unified_diff))

    self.mox.ReplayAll()

    change = presubmit.GitChange(
        'mychange',
        '\n'.join(description_lines),
        self.fake_root_dir,
        files,
        0,
        0,
        None)
    self.failUnless(change.Name() == 'mychange')
    self.failUnless(change.DescriptionText() ==
                    'Hello there\nthis is a change\nand some more regular text')
    self.failUnless(change.FullDescriptionText() ==
                    '\n'.join(description_lines))

    self.failUnless(change.BUG == '123')
    self.failUnless(change.STORY == 'http://foo/')
    self.failUnless(change.BLEH == None)

    self.failUnless(len(change.AffectedFiles()) == 7)
    self.failUnless(len(change.AffectedFiles(include_dirs=True)) == 7)
    self.failUnless(len(change.AffectedFiles(include_deletes=False)) == 5)
    self.failUnless(len(change.AffectedFiles(include_dirs=True,
                                             include_deletes=False)) == 5)

    # Note that on git, there's no distinction between binary files and text
    # files; everything that's not a delete is a text file.
    affected_text_files = change.AffectedTextFiles()
    self.failUnless(len(affected_text_files) == 5)

    local_paths = change.LocalPaths()
    expected_paths = [os.path.normpath(f) for op, f in files]
    self.assertEqual(local_paths, expected_paths)

    try:
      _ = change.ServerPaths()
      self.fail("ServerPaths implemented.")
    except NotImplementedError:
      pass

    actual_rhs_lines = []
    for f, linenum, line in change.RightHandSideLines():
      actual_rhs_lines.append((f.LocalPath(), linenum, line))

    f_blat = os.path.normpath('boo/blat.cc')
    f_test_expectations = os.path.normpath('foo/TestExpectations')
    expected_rhs_lines = [
        (f_blat, 1, 'This is some text'),
        (f_blat, 2, 'which lacks a copyright warning'),
        (f_blat, 3, 'but it is nonetheless interesting'),
        (f_blat, 4, 'and worthy of your attention.'),
        (f_blat, 5, 'Its freshness factor is through the roof.'),
        (f_test_expectations, 1, 'Strange to behold:'),
        (f_test_expectations, 5, 'Weasel words suggest:'),
        (f_test_expectations, 10, '   erratically,'),
        (f_test_expectations, 13, 'from this.'),
        (f_test_expectations, 14, ''),
        (f_test_expectations, 15, 'For the most part,'),
        (f_test_expectations, 16, 'I really think unified diffs'),
        (f_test_expectations, 17, 'are elegant: the way you can type'),
        (f_test_expectations, 18, 'diff --git inside/a/text inside/a/text'),
        (f_test_expectations, 19, 'or something silly like'),
        (f_test_expectations, 20, '@@ -278,6 +278,10 @@'),
        (f_test_expectations, 21, 'and have this not be interpreted'),
        (f_test_expectations, 22, 'as the start of a new file'),
        (f_test_expectations, 23, 'or anything messed up like that,'),
        (f_test_expectations, 24, 'because you parsed the header'),
        (f_test_expectations, 25, 'correctly.')]

    self.assertEquals(expected_rhs_lines, actual_rhs_lines)

  def testInvalidChange(self):
    try:
      presubmit.SvnChange(
          'mychange',
          'description',
          self.fake_root_dir,
          ['foo/blat.cc', 'bar'],
          0,
          0,
          None)
      self.fail()
    except AssertionError:
      pass

  def testExecPresubmitScript(self):
    description_lines = ('Hello there',
                         'this is a change',
                         'STORY=http://tracker/123')
    files = [
      ['A', 'foo\\blat.cc'],
    ]
    fake_presubmit = presubmit.os.path.join(self.fake_root_dir, 'PRESUBMIT.py')
    self.mox.ReplayAll()

    change = presubmit.Change(
        'mychange',
        '\n'.join(description_lines),
        self.fake_root_dir,
        files,
        0,
        0,
        None)
    executer = presubmit.PresubmitExecuter(change, False, None, False)
    self.failIf(executer.ExecPresubmitScript('', fake_presubmit))
    # No error if no on-upload entry point
    self.failIf(executer.ExecPresubmitScript(
      ('def CheckChangeOnCommit(input_api, output_api):\n'
       '  return (output_api.PresubmitError("!!"))\n'),
      fake_presubmit
    ))

    executer = presubmit.PresubmitExecuter(change, True, None, False)
    # No error if no on-commit entry point
    self.failIf(executer.ExecPresubmitScript(
      ('def CheckChangeOnUpload(input_api, output_api):\n'
       '  return (output_api.PresubmitError("!!"))\n'),
      fake_presubmit
    ))

    self.failIf(executer.ExecPresubmitScript(
      ('def CheckChangeOnUpload(input_api, output_api):\n'
       '  if not input_api.change.STORY:\n'
       '    return (output_api.PresubmitError("!!"))\n'
       '  else:\n'
       '    return ()'),
      fake_presubmit
    ))

    self.failUnless(executer.ExecPresubmitScript(
      ('def CheckChangeOnCommit(input_api, output_api):\n'
       '  if not input_api.change.NOSUCHKEY:\n'
       '    return [output_api.PresubmitError("!!")]\n'
       '  else:\n'
       '    return ()'),
      fake_presubmit
    ))

    self.assertRaises(presubmit.PresubmitFailure,
      executer.ExecPresubmitScript,
      'def CheckChangeOnCommit(input_api, output_api):\n'
      '  return "foo"',
      fake_presubmit)

    self.assertRaises(presubmit.PresubmitFailure,
      executer.ExecPresubmitScript,
      'def CheckChangeOnCommit(input_api, output_api):\n'
      '  return ["foo"]',
      fake_presubmit)

  def testDoPresubmitChecks(self):
    join = presubmit.os.path.join
    description_lines = ('Hello there',
                         'this is a change',
                         'STORY=http://tracker/123')
    files = [
      ['A', join('haspresubmit', 'blat.cc')],
    ]
    haspresubmit_path = join(self.fake_root_dir, 'haspresubmit', 'PRESUBMIT.py')
    root_path = join(self.fake_root_dir, 'PRESUBMIT.py')
    inherit_path = presubmit.os.path.join(self.fake_root_dir,
                                          self._INHERIT_SETTINGS)
    presubmit.os.path.isfile(inherit_path).AndReturn(False)
    presubmit.os.path.isfile(root_path).AndReturn(True)
    presubmit.os.path.isfile(haspresubmit_path).AndReturn(True)
    presubmit.gclient_utils.FileRead(root_path,
                                     'rU').AndReturn(self.presubmit_text)
    presubmit.gclient_utils.FileRead(haspresubmit_path,
                                     'rU').AndReturn(self.presubmit_text)
    presubmit.random.randint(0, 4).AndReturn(1)
    self.mox.ReplayAll()

    input_buf = StringIO.StringIO('y\n')
    change = presubmit.Change(
        'mychange',
        '\n'.join(description_lines),
        self.fake_root_dir,
        files,
        0,
        0,
        None)
    output = presubmit.DoPresubmitChecks(
        change, False, True, None, input_buf, None, False, None)
    self.failIf(output.should_continue())
    self.assertEqual(output.getvalue().count('!!'), 2)
    self.assertEqual(output.getvalue().count(
        'Running presubmit upload checks ...\n'), 1)

  def testDoPresubmitChecksPromptsAfterWarnings(self):
    join = presubmit.os.path.join
    description_lines = ('Hello there',
                         'this is a change',
                         'NOSUCHKEY=http://tracker/123')
    files = [
      ['A', join('haspresubmit', 'blat.cc')],
    ]
    presubmit_path = join(self.fake_root_dir, 'PRESUBMIT.py')
    haspresubmit_path = join(self.fake_root_dir, 'haspresubmit', 'PRESUBMIT.py')
    inherit_path = presubmit.os.path.join(self.fake_root_dir,
                                          self._INHERIT_SETTINGS)
    for _ in range(2):
      presubmit.os.path.isfile(inherit_path).AndReturn(False)
      presubmit.os.path.isfile(presubmit_path).AndReturn(True)
      presubmit.os.path.isfile(haspresubmit_path).AndReturn(True)
      presubmit.gclient_utils.FileRead(presubmit_path, 'rU'
          ).AndReturn(self.presubmit_text)
      presubmit.gclient_utils.FileRead(haspresubmit_path, 'rU'
          ).AndReturn(self.presubmit_text)
    presubmit.random.randint(0, 4).AndReturn(1)
    presubmit.random.randint(0, 4).AndReturn(1)
    self.mox.ReplayAll()

    input_buf = StringIO.StringIO('n\n')  # say no to the warning
    change = presubmit.Change(
        'mychange',
        '\n'.join(description_lines),
        self.fake_root_dir,
        files,
        0,
        0,
        None)
    output = presubmit.DoPresubmitChecks(
        change, False, True, None, input_buf, None, True, None)
    self.failIf(output.should_continue())
    self.assertEqual(output.getvalue().count('??'), 2)

    input_buf = StringIO.StringIO('y\n')  # say yes to the warning
    output = presubmit.DoPresubmitChecks(
        change, False, True, None, input_buf, None, True, None)
    self.failUnless(output.should_continue())
    self.assertEquals(output.getvalue().count('??'), 2)
    self.assertEqual(output.getvalue().count(
        'Running presubmit upload checks ...\n'), 1)

  def testDoPresubmitChecksNoWarningPromptIfErrors(self):
    join = presubmit.os.path.join
    description_lines = ('Hello there',
                         'this is a change',
                         'NOSUCHKEY=http://tracker/123',
                         'REALLYNOSUCHKEY=http://tracker/123')
    files = [
      ['A', join('haspresubmit', 'blat.cc')],
    ]
    presubmit_path = join(self.fake_root_dir, 'PRESUBMIT.py')
    haspresubmit_path = join(self.fake_root_dir, 'haspresubmit',
                             'PRESUBMIT.py')
    inherit_path = presubmit.os.path.join(self.fake_root_dir,
                                          self._INHERIT_SETTINGS)
    presubmit.os.path.isfile(inherit_path).AndReturn(False)
    presubmit.os.path.isfile(presubmit_path).AndReturn(True)
    presubmit.os.path.isfile(haspresubmit_path).AndReturn(True)
    presubmit.gclient_utils.FileRead(presubmit_path, 'rU'
                                     ).AndReturn(self.presubmit_text)
    presubmit.gclient_utils.FileRead(haspresubmit_path, 'rU').AndReturn(
        self.presubmit_text)
    presubmit.random.randint(0, 4).AndReturn(1)
    self.mox.ReplayAll()

    change = presubmit.Change(
        'mychange',
        '\n'.join(description_lines),
        self.fake_root_dir,
        files,
        0,
        0,
        None)
    output = presubmit.DoPresubmitChecks(change, False, True, None, None,
        None, False, None)
    self.assertEqual(output.getvalue().count('??'), 2)
    self.assertEqual(output.getvalue().count('XX!!XX'), 2)
    self.assertEqual(output.getvalue().count('(y/N)'), 0)
    self.assertEqual(output.getvalue().count(
        'Running presubmit upload checks ...\n'), 1)

  def testDoDefaultPresubmitChecksAndFeedback(self):
    join = presubmit.os.path.join
    description_lines = ('Hello there',
                         'this is a change',
                         'STORY=http://tracker/123')
    files = [
      ['A', join('haspresubmit', 'blat.cc')],
    ]
    DEFAULT_SCRIPT = """
def CheckChangeOnUpload(input_api, output_api):
  return [output_api.PresubmitError("!!")]
def CheckChangeOnCommit(input_api, output_api):
  raise Exception("Test error")
"""
    inherit_path = presubmit.os.path.join(self.fake_root_dir,
                                          self._INHERIT_SETTINGS)
    presubmit.os.path.isfile(inherit_path).AndReturn(False)
    presubmit.os.path.isfile(join(self.fake_root_dir, 'PRESUBMIT.py')
        ).AndReturn(False)
    presubmit.os.path.isfile(join(self.fake_root_dir,
                                  'haspresubmit',
                                  'PRESUBMIT.py')).AndReturn(False)
    presubmit.random.randint(0, 4).AndReturn(0)
    self.mox.ReplayAll()

    input_buf = StringIO.StringIO('y\n')
    # Always fail.
    change = presubmit.Change(
        'mychange',
        '\n'.join(description_lines),
        self.fake_root_dir,
        files,
        0,
        0,
        None)
    output = presubmit.DoPresubmitChecks(
        change, False, True, None, input_buf, DEFAULT_SCRIPT, False, None)
    self.failIf(output.should_continue())
    text = (
        'Running presubmit upload checks ...\n'
        'Warning, no PRESUBMIT.py found.\n'
        'Running default presubmit script.\n'
        '\n'
        '** Presubmit ERRORS **\n!!\n\n'
        'Was the presubmit check useful? If not, run "git cl presubmit -v"\n'
        'to figure out which PRESUBMIT.py was run, then run git blame\n'
        'on the file to figure out who to ask for help.\n')
    self.assertEquals(output.getvalue(), text)

  def testDirectoryHandling(self):
    files = [
      ['A', 'isdir'],
      ['A', presubmit.os.path.join('isdir', 'blat.cc')],
    ]
    isdir = presubmit.os.path.join(self.fake_root_dir, 'isdir')
    blat = presubmit.os.path.join(isdir, 'blat.cc')
    presubmit.os.path.exists(isdir).AndReturn(True)
    presubmit.os.path.isdir(isdir).AndReturn(True)
    presubmit.os.path.exists(blat).AndReturn(True)
    presubmit.os.path.isdir(blat).AndReturn(False)
    self.mox.ReplayAll()

    change = presubmit.Change(
        'mychange', 'foo', self.fake_root_dir, files, 0, 0, None)
    affected_files = change.AffectedFiles(include_dirs=False)
    self.failUnless(len(affected_files) == 1)
    self.failUnless(affected_files[0].LocalPath().endswith('blat.cc'))
    affected_files_and_dirs = change.AffectedFiles(include_dirs=True)
    self.failUnless(len(affected_files_and_dirs) == 2)

  def testTags(self):
    DEFAULT_SCRIPT = """
def CheckChangeOnUpload(input_api, output_api):
  if input_api.change.tags['BUG'] != 'boo':
    return [output_api.PresubmitError('Tag parsing failed. 1')]
  if input_api.change.tags['STORY'] != 'http://tracker.com/42':
    return [output_api.PresubmitError('Tag parsing failed. 2')]
  if input_api.change.BUG != 'boo':
    return [output_api.PresubmitError('Tag parsing failed. 6')]
  if input_api.change.STORY != 'http://tracker.com/42':
    return [output_api.PresubmitError('Tag parsing failed. 7')]
  try:
    y = False
    x = input_api.change.invalid
  except AttributeError:
    y = True
  if not y:
    return [output_api.PresubmitError('Tag parsing failed. 8')]
  if 'TEST' in input_api.change.tags:
    return [output_api.PresubmitError('Tag parsing failed. 3')]
  if input_api.change.DescriptionText() != 'Blah Blah':
    return [output_api.PresubmitError('Tag parsing failed. 4 ' +
                                      input_api.change.DescriptionText())]
  if (input_api.change.FullDescriptionText() !=
      'Blah Blah\\n\\nSTORY=http://tracker.com/42\\nBUG=boo\\n'):
    return [output_api.PresubmitError('Tag parsing failed. 5 ' +
                                      input_api.change.FullDescriptionText())]
  return [output_api.PresubmitNotifyResult(input_api.change.tags['STORY'])]
def CheckChangeOnCommit(input_api, output_api):
  raise Exception("Test error")
"""
    presubmit.random.randint(0, 4).AndReturn(1)
    inherit_path = presubmit.os.path.join(self.fake_root_dir,
                                          self._INHERIT_SETTINGS)
    presubmit.os.path.isfile(inherit_path).AndReturn(False)
    self.mox.ReplayAll()

    output = StringIO.StringIO()
    input_buf = StringIO.StringIO('y\n')
    change = presubmit.Change(
        'foo',
        'Blah Blah\n\nSTORY=http://tracker.com/42\nBUG=boo\n',
        self.fake_root_dir,
        None,
        0,
        0,
        None)
    self.failUnless(presubmit.DoPresubmitChecks(
        change, False, True, output, input_buf, DEFAULT_SCRIPT, False, None))
    self.assertEquals(output.getvalue(),
                      ('Running presubmit upload checks ...\n'
                       'Warning, no PRESUBMIT.py found.\n'
                       'Running default presubmit script.\n'
                       '\n'
                       '** Presubmit Messages **\n'
                       'http://tracker.com/42\n'
                       '\n'
                       'Presubmit checks passed.\n'))

  def testGetTrySlavesExecuter(self):
    self.mox.ReplayAll()
    change = presubmit.Change(
        'foo',
        'Blah Blah\n\nSTORY=http://tracker.com/42\nBUG=boo\n',
        self.fake_root_dir,
        None,
        0,
        0,
        None)
    executer = presubmit.GetTrySlavesExecuter()
    self.assertEqual([], executer.ExecPresubmitScript('', '', '', change))
    self.assertEqual([],
        executer.ExecPresubmitScript('def foo():\n  return\n', '', '', change))

    # bad results
    starts_with_space_result = ['  starts_with_space']
    not_list_result1 = "'foo'"
    not_list_result2 = "('a', 'tuple')"
    mixed_old_and_new = ['bot', ('bot2', set(['test']))]
    not_set = [('bot2', ['test'])]
    for result in (
        starts_with_space_result, not_list_result1, not_list_result2,
        mixed_old_and_new, not_set):
      self.assertRaises(presubmit.PresubmitFailure,
                        executer.ExecPresubmitScript,
                        self.presubmit_tryslave % result, '', '', change)

    # good results
    expected_result = ['1', '2', '3']
    empty_result = []
    space_in_name_result = ['foo bar', '1\t2 3']
    new_style = [('bot', set(['cool', 'tests']))]
    for result in (
        expected_result, empty_result, space_in_name_result, new_style):
      self.assertEqual(
          result,
          executer.ExecPresubmitScript(
              self.presubmit_tryslave % result, '', '', change))

  def testGetTrySlavesExecuterWithProject(self):
    self.mox.ReplayAll()

    change = presubmit.Change(
        'foo',
        'Blah Blah\n\nSTORY=http://tracker.com/42\nBUG=boo\n',
        self.fake_root_dir,
        None,
        0,
        0,
        None)

    executer = presubmit.GetTrySlavesExecuter()
    expected_result1 = ['1', '2']
    expected_result2 = ['a', 'b', 'c']
    script = self.presubmit_tryslave_project % (
        repr('foo'), repr(expected_result1), repr(expected_result2))
    self.assertEqual(
        expected_result1, executer.ExecPresubmitScript(script, '', 'foo',
                                                       change))
    self.assertEqual(
        expected_result2, executer.ExecPresubmitScript(script, '', 'bar',
                                                       change))

  def testDoGetTrySlaves(self):
    join = presubmit.os.path.join
    filename = 'foo.cc'
    filename_linux = join('linux_only', 'penguin.cc')
    root_presubmit = join(self.fake_root_dir, 'PRESUBMIT.py')
    linux_presubmit = join(self.fake_root_dir, 'linux_only', 'PRESUBMIT.py')
    inherit_path = presubmit.os.path.join(self.fake_root_dir,
                                          self._INHERIT_SETTINGS)

    presubmit.os.path.isfile(inherit_path).AndReturn(False)
    presubmit.os.path.isfile(root_presubmit).AndReturn(True)
    presubmit.gclient_utils.FileRead(root_presubmit, 'rU').AndReturn(
        self.presubmit_tryslave % '["win"]')

    presubmit.os.path.isfile(inherit_path).AndReturn(False)
    presubmit.os.path.isfile(root_presubmit).AndReturn(True)
    presubmit.os.path.isfile(linux_presubmit).AndReturn(True)
    presubmit.gclient_utils.FileRead(root_presubmit, 'rU').AndReturn(
        self.presubmit_tryslave % '["win"]')
    presubmit.gclient_utils.FileRead(linux_presubmit, 'rU').AndReturn(
        self.presubmit_tryslave % '["linux"]')
    self.mox.ReplayAll()

    change = presubmit.Change(
        'mychange', '', self.fake_root_dir, [], 0, 0, None)

    output = StringIO.StringIO()
    self.assertEqual(['win'],
                     presubmit.DoGetTrySlaves(change, [filename],
                                              self.fake_root_dir,
                                              None, None, False, output))
    output = StringIO.StringIO()
    self.assertEqual(['win', 'linux'],
                     presubmit.DoGetTrySlaves(change,
                                              [filename, filename_linux],
                                              self.fake_root_dir, None, None,
                                              False, output))

  def testGetTrySlavesExecuter_ok(self):
    script_text = (
        'def GetPreferredTrySlaves():\n'
        '  return ["foo", "bar"]\n')
    results = presubmit.GetTrySlavesExecuter.ExecPresubmitScript(
        script_text, 'path', 'project', None)
    self.assertEquals(['foo', 'bar'], results)

  def testGetTrySlavesExecuter_comma(self):
    script_text = (
        'def GetPreferredTrySlaves():\n'
        '  return ["foo,bar"]\n')
    try:
      presubmit.GetTrySlavesExecuter.ExecPresubmitScript(
          script_text, 'path', 'project', None)
      self.fail()
    except presubmit.PresubmitFailure:
      pass

  def testGetTryMastersExecuter(self):
    self.mox.ReplayAll()
    change = presubmit.Change(
        'foo',
        'Blah Blah\n\nSTORY=http://tracker.com/42\nBUG=boo\n',
        self.fake_root_dir,
        None,
        0,
        0,
        None)
    executer = presubmit.GetTryMastersExecuter()
    self.assertEqual({}, executer.ExecPresubmitScript('', '', '', change))
    self.assertEqual({},
        executer.ExecPresubmitScript('def foo():\n  return\n', '', '', change))

    expected_result = {'m1': {'s1': set(['t1', 't2'])},
                       'm2': {'s1': set(['defaulttests']),
                              's2': set(['defaulttests'])}}
    empty_result1 = {}
    empty_result2 = {'m': {}}
    space_in_name_result = {'m r': {'s\tv': set(['t1'])}}
    for result in (
        expected_result, empty_result1, empty_result2, space_in_name_result):
      self.assertEqual(
          result,
          executer.ExecPresubmitScript(
              self.presubmit_trymaster % result, '', '', change))

  def testMergeMasters(self):
    merge = presubmit._MergeMasters
    self.assertEqual({}, merge({}, {}))
    self.assertEqual({'m1': {}}, merge({}, {'m1': {}}))
    self.assertEqual({'m1': {}}, merge({'m1': {}}, {}))
    parts = [
      {'try1.cr': {'win': set(['defaulttests'])}},
      {'try1.cr': {'linux1': set(['test1'])},
       'try2.cr': {'linux2': set(['defaulttests'])}},
      {'try1.cr': {'mac1': set(['defaulttests']),
                   'mac2': set(['test1', 'test2']),
                   'linux1': set(['defaulttests'])}},
    ]
    expected = {
      'try1.cr': {'win': set(['defaulttests']),
                  'linux1': set(['defaulttests', 'test1']),
                  'mac1': set(['defaulttests']),
                  'mac2': set(['test1', 'test2'])},
      'try2.cr': {'linux2': set(['defaulttests'])},
    }
    for permutation in itertools.permutations(parts):
      self.assertEqual(expected, reduce(merge, permutation, {}))

  def testDoGetTryMasters(self):
    root_text = (self.presubmit_trymaster
        % '{"t1.cr": {"win": set(["defaulttests"])}}')
    linux_text = (self.presubmit_trymaster
        % ('{"t1.cr": {"linux1": set(["t1"])},'
           ' "t2.cr": {"linux2": set(["defaulttests"])}}'))

    join = presubmit.os.path.join
    isfile = presubmit.os.path.isfile
    FileRead = presubmit.gclient_utils.FileRead
    filename = 'foo.cc'
    filename_linux = join('linux_only', 'penguin.cc')
    root_presubmit = join(self.fake_root_dir, 'PRESUBMIT.py')
    linux_presubmit = join(self.fake_root_dir, 'linux_only', 'PRESUBMIT.py')
    inherit_path = join(self.fake_root_dir, self._INHERIT_SETTINGS)

    isfile(inherit_path).AndReturn(False)
    isfile(root_presubmit).AndReturn(True)
    FileRead(root_presubmit, 'rU').AndReturn(root_text)

    isfile(inherit_path).AndReturn(False)
    isfile(root_presubmit).AndReturn(True)
    isfile(linux_presubmit).AndReturn(True)
    FileRead(root_presubmit, 'rU').AndReturn(root_text)
    FileRead(linux_presubmit, 'rU').AndReturn(linux_text)
    self.mox.ReplayAll()

    change = presubmit.Change(
        'mychange', '', self.fake_root_dir, [], 0, 0, None)

    output = StringIO.StringIO()
    self.assertEqual({'t1.cr': {'win': ['defaulttests']}},
                     presubmit.DoGetTryMasters(change, [filename],
                                               self.fake_root_dir,
                                               None, None, False, output))
    output = StringIO.StringIO()
    expected = {
      't1.cr': {'win': ['defaulttests'], 'linux1': ['t1']},
      't2.cr': {'linux2': ['defaulttests']},
    }
    self.assertEqual(expected,
                     presubmit.DoGetTryMasters(change,
                                               [filename, filename_linux],
                                               self.fake_root_dir, None, None,
                                               False, output))

  def testMainUnversioned(self):
    # OptParser calls presubmit.os.path.exists and is a pain when mocked.
    self.UnMock(presubmit.os.path, 'exists')
    self.mox.StubOutWithMock(presubmit, 'DoPresubmitChecks')
    self.mox.StubOutWithMock(presubmit, 'ParseFiles')
    presubmit.scm.determine_scm(self.fake_root_dir).AndReturn(None)
    presubmit.ParseFiles(['random_file.txt'], None
        ).AndReturn([('M', 'random_file.txt')])
    output = self.mox.CreateMock(presubmit.PresubmitOutput)
    output.should_continue().AndReturn(False)

    presubmit.DoPresubmitChecks(mox.IgnoreArg(), False, False,
                                mox.IgnoreArg(),
                                mox.IgnoreArg(),
                                None, False, None).AndReturn(output)
    self.mox.ReplayAll()

    self.assertEquals(
        True,
        presubmit.Main(['--root', self.fake_root_dir, 'random_file.txt']))

  def testMainUnversionedFail(self):
    # OptParser calls presubmit.os.path.exists and is a pain when mocked.
    self.UnMock(presubmit.os.path, 'exists')
    self.mox.StubOutWithMock(presubmit, 'DoPresubmitChecks')
    self.mox.StubOutWithMock(presubmit, 'ParseFiles')
    presubmit.scm.determine_scm(self.fake_root_dir).AndReturn(None)
    self.mox.StubOutWithMock(presubmit.sys, 'stderr')
    presubmit.sys.stderr.write(
        'Usage: presubmit_unittest.py [options] <files...>\n')
    presubmit.sys.stderr.write('\n')
    presubmit.sys.stderr.write(
        'presubmit_unittest.py: error: For unversioned directory, <files> is '
        'not optional.\n')
    self.mox.ReplayAll()

    try:
      presubmit.Main(['--root', self.fake_root_dir])
      self.fail()
    except SystemExit, e:
      self.assertEquals(2, e.code)


class InputApiUnittest(PresubmitTestsBase):
  """Tests presubmit.InputApi."""
  def testMembersChanged(self):
    self.mox.ReplayAll()
    members = [
      'AbsoluteLocalPaths', 'AffectedFiles', 'AffectedSourceFiles',
      'AffectedTextFiles',
      'DEFAULT_BLACK_LIST', 'DEFAULT_WHITE_LIST',
      'DepotToLocalPath', 'FilterSourceFile', 'LocalPaths',
      'LocalToDepotPath', 'Command', 'RunTests',
      'PresubmitLocalPath', 'ReadFile', 'RightHandSideLines', 'ServerPaths',
      'basename', 'cPickle', 'cpplint', 'cStringIO', 'canned_checks', 'change',
      'environ', 'glob', 'host_url', 'is_committing', 'json', 'logging',
      'marshal', 'os_listdir', 'os_walk', 'os_path', 'owners_db', 'pickle',
      'platform', 'python_executable', 're', 'rietveld', 'subprocess', 'tbr',
      'tempfile', 'time', 'traceback', 'unittest', 'urllib2', 'version',
      'verbose',
    ]
    # If this test fails, you should add the relevant test.
    self.compareMembers(
        presubmit.InputApi(self.fake_change, './.', False, None, False),
        members)

  def testDepotToLocalPath(self):
    presubmit.scm.SVN._CaptureInfo(['svn://foo/smurf'], self.fake_root_dir
        ).AndReturn({'Path': 'prout'})
    presubmit.scm.SVN._CaptureInfo(
        ['svn:/foo/notfound/burp'], self.fake_root_dir
        ).AndReturn({})
    self.mox.ReplayAll()

    path = presubmit.InputApi(
        self.fake_change, './p', False, None, False).DepotToLocalPath(
            'svn://foo/smurf')
    self.failUnless(path == 'prout')
    path = presubmit.InputApi(
        self.fake_change, './p', False, None, False).DepotToLocalPath(
            'svn:/foo/notfound/burp')
    self.failUnless(path == None)

  def testLocalToDepotPath(self):
    presubmit.scm.SVN._CaptureInfo(['smurf'], self.fake_root_dir
        ).AndReturn({'URL': 'svn://foo'})
    presubmit.scm.SVN._CaptureInfo(['notfound-food'], self.fake_root_dir
        ).AndReturn({})
    self.mox.ReplayAll()
    path = presubmit.InputApi(
        self.fake_change, './p', False, None, False).LocalToDepotPath(
            'smurf')
    self.assertEqual(path, 'svn://foo')
    path = presubmit.InputApi(
        self.fake_change, './p', False, None, False).LocalToDepotPath(
            'notfound-food')
    self.assertEquals(path, None)

  def testInputApiConstruction(self):
    self.mox.ReplayAll()
    api = presubmit.InputApi(
        self.fake_change,
        presubmit_path='foo/path/PRESUBMIT.py',
        is_committing=False, rietveld_obj=None, verbose=False)
    self.assertEquals(api.PresubmitLocalPath(), 'foo/path')
    self.assertEquals(api.change, self.fake_change)
    self.assertEquals(api.host_url, 'http://codereview.chromium.org')

  def testInputApiPresubmitScriptFiltering(self):
    join = presubmit.os.path.join
    description_lines = ('Hello there',
                         'this is a change',
                         'BUG=123',
                         ' STORY =http://foo/  \t',
                         'and some more regular text')
    files = [
      ['A', join('foo', 'blat.cc')],
      ['M', join('foo', 'blat', 'READ_ME2')],
      ['M', join('foo', 'blat', 'binary.dll')],
      ['M', join('foo', 'blat', 'weird.xyz')],
      ['M', join('foo', 'blat', 'another.h')],
      ['M', join('foo', 'third_party', 'third.cc')],
      ['D', join('foo', 'mat', 'beingdeleted.txt')],
      ['M', join('flop', 'notfound.txt')],
      ['A', join('boo', 'flap.h')],
    ]
    blat = presubmit.normpath(join(self.fake_root_dir, files[0][1]))
    readme = presubmit.normpath(join(self.fake_root_dir, files[1][1]))
    binary = presubmit.normpath(join(self.fake_root_dir, files[2][1]))
    weird = presubmit.normpath(join(self.fake_root_dir, files[3][1]))
    another = presubmit.normpath(join(self.fake_root_dir, files[4][1]))
    third_party = presubmit.normpath(join(self.fake_root_dir, files[5][1]))
    beingdeleted = presubmit.normpath(join(self.fake_root_dir, files[6][1]))
    notfound = presubmit.normpath(join(self.fake_root_dir, files[7][1]))
    flap = presubmit.normpath(join(self.fake_root_dir, files[8][1]))
    for i in (blat, readme, binary, weird, another, third_party):
      presubmit.os.path.exists(i).AndReturn(True)
      presubmit.os.path.isdir(i).AndReturn(False)
    presubmit.os.path.exists(beingdeleted).AndReturn(False)
    presubmit.os.path.exists(notfound).AndReturn(False)
    presubmit.os.path.exists(flap).AndReturn(True)
    presubmit.os.path.isdir(flap).AndReturn(False)
    presubmit.scm.SVN._CaptureInfo(
        [files[6][1]], self.fake_root_dir).AndReturn({})
    presubmit.scm.SVN._CaptureInfo(
        [files[7][1]], self.fake_root_dir).AndReturn({})
    presubmit.scm.SVN.GetFileProperty(
        files[0][1], 'svn:mime-type', self.fake_root_dir
        ).AndReturn(None)
    presubmit.scm.SVN.GetFileProperty(
        files[1][1], 'svn:mime-type', self.fake_root_dir
        ).AndReturn(None)
    presubmit.scm.SVN.GetFileProperty(
        files[2][1], 'svn:mime-type', self.fake_root_dir
        ).AndReturn('application/octet-stream')
    presubmit.scm.SVN.GetFileProperty(
        files[3][1], 'svn:mime-type', self.fake_root_dir
        ).AndReturn(None)
    presubmit.scm.SVN.GetFileProperty(
        files[4][1], 'svn:mime-type', self.fake_root_dir
        ).AndReturn(None)
    presubmit.scm.SVN.GetFileProperty(
        files[5][1], 'svn:mime-type', self.fake_root_dir
        ).AndReturn(None)
    presubmit.scm.SVN.GenerateDiff(
        [files[0][1]], self.fake_root_dir, False, None
        ).AndReturn(self.presubmit_diffs)
    presubmit.scm.SVN.GenerateDiff(
        [files[4][1]], self.fake_root_dir, False, None
        ).AndReturn(self.presubmit_diffs)

    self.mox.ReplayAll()

    change = presubmit.SvnChange(
        'mychange',
        '\n'.join(description_lines),
        self.fake_root_dir,
        files,
        0,
        0,
        None)
    input_api = presubmit.InputApi(
        change,
        join(self.fake_root_dir, 'foo', 'PRESUBMIT.py'),
        False, None, False)
    # Doesn't filter much
    got_files = input_api.AffectedFiles()
    self.assertEquals(len(got_files), 7)
    self.assertEquals(got_files[0].LocalPath(), presubmit.normpath(files[0][1]))
    self.assertEquals(got_files[1].LocalPath(), presubmit.normpath(files[1][1]))
    self.assertEquals(got_files[2].LocalPath(), presubmit.normpath(files[2][1]))
    self.assertEquals(got_files[3].LocalPath(), presubmit.normpath(files[3][1]))
    self.assertEquals(got_files[4].LocalPath(), presubmit.normpath(files[4][1]))
    self.assertEquals(got_files[5].LocalPath(), presubmit.normpath(files[5][1]))
    self.assertEquals(got_files[6].LocalPath(), presubmit.normpath(files[6][1]))
    # Ignores weird because of whitelist, third_party because of blacklist,
    # binary isn't a text file and beingdeleted doesn't exist. The rest is
    # outside foo/.
    rhs_lines = [x for x in input_api.RightHandSideLines(None)]
    self.assertEquals(len(rhs_lines), 14)
    self.assertEqual(rhs_lines[0][0].LocalPath(),
                     presubmit.normpath(files[0][1]))
    self.assertEqual(rhs_lines[3][0].LocalPath(),
                     presubmit.normpath(files[0][1]))
    self.assertEqual(rhs_lines[7][0].LocalPath(),
                     presubmit.normpath(files[4][1]))
    self.assertEqual(rhs_lines[13][0].LocalPath(),
                     presubmit.normpath(files[4][1]))

  def testDefaultWhiteListBlackListFilters(self):
    def f(x):
      return presubmit.AffectedFile(x, 'M', self.fake_root_dir)
    files = [
      (
        [
          # To be tested.
          f('testing_support/google_appengine/b'),
          f('testing_support/not_google_appengine/foo.cc'),
        ],
        [
          # Expected.
          'testing_support/not_google_appengine/foo.cc',
        ],
      ),
      (
        [
          # To be tested.
          f('a/experimental/b'),
          f('experimental/b'),
          f('a/experimental'),
          f('a/experimental.cc'),
          f('a/experimental.S'),
        ],
        [
          # Expected.
          'a/experimental.cc',
          'a/experimental.S',
        ],
      ),
      (
        [
          # To be tested.
          f('a/third_party/b'),
          f('third_party/b'),
          f('a/third_party'),
          f('a/third_party.cc'),
        ],
        [
          # Expected.
          'a/third_party.cc',
        ],
      ),
      (
        [
          # To be tested.
          f('a/LOL_FILE/b'),
          f('b.c/LOL_FILE'),
          f('a/PRESUBMIT.py'),
          f('a/FOO.json'),
          f('a/FOO.java'),
        ],
        [
          # Expected.
          'a/PRESUBMIT.py',
          'a/FOO.java',
        ],
      ),
      (
        [
          # To be tested.
          f('a/.git'),
          f('b.c/.git'),
          f('a/.git/bleh.py'),
          f('.git/bleh.py'),
          f('bleh.diff'),
          f('foo/bleh.patch'),
        ],
        [
          # Expected.
        ],
      ),
    ]
    input_api = presubmit.InputApi(
        self.fake_change, './PRESUBMIT.py', False, None, False)
    self.mox.ReplayAll()

    self.assertEqual(len(input_api.DEFAULT_WHITE_LIST), 22)
    self.assertEqual(len(input_api.DEFAULT_BLACK_LIST), 12)
    for item in files:
      results = filter(input_api.FilterSourceFile, item[0])
      for i in range(len(results)):
        self.assertEquals(results[i].LocalPath(),
                          presubmit.normpath(item[1][i]))
      # Same number of expected results.
      self.assertEquals(sorted([f.LocalPath().replace(presubmit.os.sep, '/')
                                for f in results]),
                        sorted(item[1]))

  def testCustomFilter(self):
    def FilterSourceFile(affected_file):
      return 'a' in affected_file.LocalPath()
    files = [('A', 'eeaee'), ('M', 'eeabee'), ('M', 'eebcee')]
    for _, item in files:
      full_item = presubmit.os.path.join(self.fake_root_dir, item)
      presubmit.os.path.exists(full_item).AndReturn(True)
      presubmit.os.path.isdir(full_item).AndReturn(False)
      presubmit.scm.SVN.GetFileProperty(
          item, 'svn:mime-type', self.fake_root_dir).AndReturn(None)
    self.mox.ReplayAll()

    change = presubmit.SvnChange(
        'mychange', '', self.fake_root_dir, files, 0, 0, None)
    input_api = presubmit.InputApi(
        change,
        presubmit.os.path.join(self.fake_root_dir, 'PRESUBMIT.py'),
        False, None, False)
    got_files = input_api.AffectedSourceFiles(FilterSourceFile)
    self.assertEquals(len(got_files), 2)
    self.assertEquals(got_files[0].LocalPath(), 'eeaee')
    self.assertEquals(got_files[1].LocalPath(), 'eeabee')

  def testLambdaFilter(self):
    white_list = presubmit.InputApi.DEFAULT_BLACK_LIST + (r".*?a.*?",)
    black_list = [r".*?b.*?"]
    files = [('A', 'eeaee'), ('M', 'eeabee'), ('M', 'eebcee'), ('M', 'eecaee')]
    for _, item in files:
      full_item = presubmit.os.path.join(self.fake_root_dir, item)
      presubmit.os.path.exists(full_item).AndReturn(True)
      presubmit.os.path.isdir(full_item).AndReturn(False)
      presubmit.scm.SVN.GetFileProperty(
          item, 'svn:mime-type', self.fake_root_dir).AndReturn(None)
    self.mox.ReplayAll()

    change = presubmit.SvnChange(
        'mychange', '', self.fake_root_dir, files, 0, 0, None)
    input_api = presubmit.InputApi(
        change, './PRESUBMIT.py', False, None, False)
    # Sample usage of overiding the default white and black lists.
    got_files = input_api.AffectedSourceFiles(
        lambda x: input_api.FilterSourceFile(x, white_list, black_list))
    self.assertEquals(len(got_files), 2)
    self.assertEquals(got_files[0].LocalPath(), 'eeaee')
    self.assertEquals(got_files[1].LocalPath(), 'eecaee')

  def testGetAbsoluteLocalPath(self):
    join = presubmit.os.path.join
    normpath = presubmit.normpath
    # Regression test for bug of presubmit stuff that relies on invoking
    # SVN (e.g. to get mime type of file) not working unless gcl invoked
    # from the client root (e.g. if you were at 'src' and did 'cd base' before
    # invoking 'gcl upload' it would fail because svn wouldn't find the files
    # the presubmit script was asking about).
    files = [
      ['A', 'isdir'],
      ['A', join('isdir', 'blat.cc')],
      ['M', join('elsewhere', 'ouf.cc')],
    ]
    self.mox.ReplayAll()

    change = presubmit.Change(
        'mychange', '', self.fake_root_dir, files, 0, 0, None)
    affected_files = change.AffectedFiles(include_dirs=True)
    # Local paths should remain the same
    self.assertEquals(affected_files[0].LocalPath(), normpath('isdir'))
    self.assertEquals(affected_files[1].LocalPath(), normpath('isdir/blat.cc'))
    # Absolute paths should be prefixed
    self.assertEquals(affected_files[0].AbsoluteLocalPath(),
                      normpath(join(self.fake_root_dir, 'isdir')))
    self.assertEquals(affected_files[1].AbsoluteLocalPath(),
                      normpath(join(self.fake_root_dir, 'isdir/blat.cc')))

    # New helper functions need to work
    paths_from_change = change.AbsoluteLocalPaths(include_dirs=True)
    self.assertEqual(len(paths_from_change), 3)
    presubmit_path = join(self.fake_root_dir, 'isdir', 'PRESUBMIT.py')
    api = presubmit.InputApi(
        change=change, presubmit_path=presubmit_path,
        is_committing=True, rietveld_obj=None, verbose=False)
    paths_from_api = api.AbsoluteLocalPaths(include_dirs=True)
    self.assertEqual(len(paths_from_api), 2)
    for absolute_paths in [paths_from_change, paths_from_api]:
      self.assertEqual(absolute_paths[0],
                       normpath(join(self.fake_root_dir, 'isdir')))
      self.assertEqual(absolute_paths[1],
                       normpath(join(self.fake_root_dir, 'isdir', 'blat.cc')))

  def testDeprecated(self):
    presubmit.warn(mox.IgnoreArg(), category=mox.IgnoreArg(), stacklevel=2)
    self.mox.ReplayAll()

    change = presubmit.Change(
        'mychange', '', self.fake_root_dir, [], 0, 0, None)
    api = presubmit.InputApi(
        change,
        presubmit.os.path.join(self.fake_root_dir, 'foo', 'PRESUBMIT.py'), True,
        None, False)
    api.AffectedTextFiles(include_deletes=False)

  def testReadFileStringDenied(self):
    self.mox.ReplayAll()

    change = presubmit.Change(
        'foo', 'foo', self.fake_root_dir, [('M', 'AA')], 0, 0, None)
    input_api = presubmit.InputApi(
        change, presubmit.os.path.join(self.fake_root_dir, '/p'), False,
        None, False)
    self.assertRaises(IOError, input_api.ReadFile, 'boo', 'x')

  def testReadFileStringAccepted(self):
    path = presubmit.os.path.join(self.fake_root_dir, 'AA/boo')
    presubmit.gclient_utils.FileRead(path, 'x').AndReturn(None)
    self.mox.ReplayAll()

    change = presubmit.Change(
        'foo', 'foo', self.fake_root_dir, [('M', 'AA')], 0, 0, None)
    input_api = presubmit.InputApi(
        change, presubmit.os.path.join(self.fake_root_dir, '/p'), False,
        None, False)
    input_api.ReadFile(path, 'x')

  def testReadFileAffectedFileDenied(self):
    fileobj = presubmit.AffectedFile('boo', 'M', 'Unrelated',
                                     diff_cache=mox.IsA(presubmit._DiffCache))
    self.mox.ReplayAll()

    change = presubmit.Change(
        'foo', 'foo', self.fake_root_dir, [('M', 'AA')], 0, 0, None)
    input_api = presubmit.InputApi(
        change, presubmit.os.path.join(self.fake_root_dir, '/p'), False,
        None, False)
    self.assertRaises(IOError, input_api.ReadFile, fileobj, 'x')

  def testReadFileAffectedFileAccepted(self):
    fileobj = presubmit.AffectedFile('AA/boo', 'M', self.fake_root_dir,
                                     diff_cache=mox.IsA(presubmit._DiffCache))
    presubmit.gclient_utils.FileRead(fileobj.AbsoluteLocalPath(), 'x'
                                     ).AndReturn(None)
    self.mox.ReplayAll()

    change = presubmit.Change(
        'foo', 'foo', self.fake_root_dir, [('M', 'AA')], 0, 0, None)
    input_api = presubmit.InputApi(
        change, presubmit.os.path.join(self.fake_root_dir, '/p'), False,
        None, False)
    input_api.ReadFile(fileobj, 'x')


class OutputApiUnittest(PresubmitTestsBase):
  """Tests presubmit.OutputApi."""

  def testMembersChanged(self):
    self.mox.ReplayAll()
    members = [
      'MailTextResult', 'PresubmitAddReviewers', 'PresubmitError',
      'PresubmitNotifyResult', 'PresubmitPromptWarning',
      'PresubmitPromptOrNotify', 'PresubmitResult', 'is_committing',
    ]
    # If this test fails, you should add the relevant test.
    self.compareMembers(presubmit.OutputApi(False), members)

  def testOutputApiBasics(self):
    self.mox.ReplayAll()
    self.failUnless(presubmit.OutputApi.PresubmitError('').fatal)
    self.failIf(presubmit.OutputApi.PresubmitError('').should_prompt)

    self.failIf(presubmit.OutputApi.PresubmitPromptWarning('').fatal)
    self.failUnless(
        presubmit.OutputApi.PresubmitPromptWarning('').should_prompt)

    self.failIf(presubmit.OutputApi.PresubmitNotifyResult('').fatal)
    self.failIf(presubmit.OutputApi.PresubmitNotifyResult('').should_prompt)

    self.failIf(presubmit.OutputApi.PresubmitAddReviewers(
        ['foo']).fatal)
    self.failIf(presubmit.OutputApi.PresubmitAddReviewers(
        ['foo']).should_prompt)

    # TODO(joi) Test MailTextResult once implemented.

  def testOutputApiHandling(self):
    self.mox.ReplayAll()

    output = presubmit.PresubmitOutput()
    presubmit.OutputApi.PresubmitAddReviewers(
        ['ben@example.com']).handle(output)
    self.failUnless(output.should_continue())
    self.failUnlessEqual(output.reviewers, ['ben@example.com'])

    output = presubmit.PresubmitOutput()
    presubmit.OutputApi.PresubmitError('!!!').handle(output)
    self.failIf(output.should_continue())
    self.failUnless(output.getvalue().count('!!!'))

    output = presubmit.PresubmitOutput()
    presubmit.OutputApi.PresubmitNotifyResult('?see?').handle(output)
    self.failUnless(output.should_continue())
    self.failUnless(output.getvalue().count('?see?'))

    output = presubmit.PresubmitOutput(input_stream=StringIO.StringIO('y'))
    presubmit.OutputApi.PresubmitPromptWarning('???').handle(output)
    output.prompt_yes_no('prompt: ')
    self.failUnless(output.should_continue())
    self.failUnless(output.getvalue().count('???'))

    output = presubmit.PresubmitOutput(input_stream=StringIO.StringIO('\n'))
    presubmit.OutputApi.PresubmitPromptWarning('???').handle(output)
    output.prompt_yes_no('prompt: ')
    self.failIf(output.should_continue())
    self.failUnless(output.getvalue().count('???'))

    output_api = presubmit.OutputApi(True)
    output = presubmit.PresubmitOutput(input_stream=StringIO.StringIO('y'))
    output_api.PresubmitPromptOrNotify('???').handle(output)
    output.prompt_yes_no('prompt: ')
    self.failUnless(output.should_continue())
    self.failUnless(output.getvalue().count('???'))

    output_api = presubmit.OutputApi(False)
    output = presubmit.PresubmitOutput(input_stream=StringIO.StringIO('y'))
    output_api.PresubmitPromptOrNotify('???').handle(output)
    self.failUnless(output.should_continue())
    self.failUnless(output.getvalue().count('???'))

    output_api = presubmit.OutputApi(True)
    output = presubmit.PresubmitOutput(input_stream=StringIO.StringIO('\n'))
    output_api.PresubmitPromptOrNotify('???').handle(output)
    output.prompt_yes_no('prompt: ')
    self.failIf(output.should_continue())
    self.failUnless(output.getvalue().count('???'))


class AffectedFileUnittest(PresubmitTestsBase):
  def testMembersChanged(self):
    self.mox.ReplayAll()
    members = [
      'AbsoluteLocalPath', 'Action', 'ChangedContents', 'DIFF_CACHE',
      'GenerateScmDiff', 'IsDirectory', 'IsTextFile', 'LocalPath',
      'NewContents', 'Property', 'ServerPath',
    ]
    # If this test fails, you should add the relevant test.
    self.compareMembers(
        presubmit.AffectedFile('a', 'b', self.fake_root_dir), members)
    self.compareMembers(
        presubmit.SvnAffectedFile('a', 'b', self.fake_root_dir), members)
    self.compareMembers(
        presubmit.GitAffectedFile('a', 'b', self.fake_root_dir), members)

  def testAffectedFile(self):
    path = presubmit.os.path.join('foo', 'blat.cc')
    f_path = presubmit.os.path.join(self.fake_root_dir, path)
    presubmit.os.path.exists(f_path).AndReturn(True)
    presubmit.os.path.isdir(f_path).AndReturn(False)
    presubmit.gclient_utils.FileRead(f_path, 'rU').AndReturn('whatever\ncookie')
    presubmit.scm.SVN._CaptureInfo([path], self.fake_root_dir).AndReturn(
        {'URL': 'svn:/foo/foo/blat.cc'})
    self.mox.ReplayAll()
    af = presubmit.SvnAffectedFile('foo/blat.cc', 'M', self.fake_root_dir)
    self.assertEquals('svn:/foo/foo/blat.cc', af.ServerPath())
    self.assertEquals(presubmit.normpath('foo/blat.cc'), af.LocalPath())
    self.assertEquals('M', af.Action())
    self.assertEquals(['whatever', 'cookie'], af.NewContents())

  def testAffectedFileNotExists(self):
    notfound = 'notfound.cc'
    f_notfound = presubmit.os.path.join(self.fake_root_dir, notfound)
    presubmit.os.path.exists(f_notfound).AndReturn(False)
    presubmit.gclient_utils.FileRead(f_notfound, 'rU').AndRaise(IOError)
    self.mox.ReplayAll()
    af = presubmit.AffectedFile(notfound, 'A', self.fake_root_dir)
    self.assertEquals('', af.ServerPath())
    self.assertEquals([], af.NewContents())

  def testProperty(self):
    presubmit.scm.SVN.GetFileProperty(
        'foo.cc', 'svn:secret-property', self.fake_root_dir
        ).AndReturn('secret-property-value')
    self.mox.ReplayAll()
    affected_file = presubmit.SvnAffectedFile('foo.cc', 'A', self.fake_root_dir)
    # Verify cache coherency.
    self.assertEquals('secret-property-value',
                      affected_file.Property('svn:secret-property'))
    self.assertEquals('secret-property-value',
                      affected_file.Property('svn:secret-property'))

  def testIsDirectoryNotExists(self):
    filename = 'foo.cc'
    f_filename = presubmit.os.path.join(self.fake_root_dir, filename)
    presubmit.os.path.exists(f_filename).AndReturn(False)
    presubmit.scm.SVN._CaptureInfo([filename], self.fake_root_dir).AndReturn({})
    self.mox.ReplayAll()
    affected_file = presubmit.SvnAffectedFile(filename, 'A', self.fake_root_dir)
    # Verify cache coherency.
    self.failIf(affected_file.IsDirectory())
    self.failIf(affected_file.IsDirectory())

  def testIsDirectory(self):
    filename = 'foo.cc'
    f_filename = presubmit.os.path.join(self.fake_root_dir, filename)
    presubmit.os.path.exists(f_filename).AndReturn(True)
    presubmit.os.path.isdir(f_filename).AndReturn(True)
    self.mox.ReplayAll()
    affected_file = presubmit.SvnAffectedFile(filename, 'A', self.fake_root_dir)
    # Verify cache coherency.
    self.failUnless(affected_file.IsDirectory())
    self.failUnless(affected_file.IsDirectory())

  def testIsTextFile(self):
    files = [
        presubmit.SvnAffectedFile('foo/blat.txt', 'M', self.fake_root_dir),
        presubmit.SvnAffectedFile('foo/binary.blob', 'M', self.fake_root_dir),
        presubmit.SvnAffectedFile('blat/flop.txt', 'D', self.fake_root_dir)
    ]
    blat = presubmit.os.path.join('foo', 'blat.txt')
    blob = presubmit.os.path.join('foo', 'binary.blob')
    f_blat = presubmit.os.path.join(self.fake_root_dir, blat)
    f_blob = presubmit.os.path.join(self.fake_root_dir, blob)
    presubmit.os.path.exists(f_blat).AndReturn(True)
    presubmit.os.path.isdir(f_blat).AndReturn(False)
    presubmit.os.path.exists(f_blob).AndReturn(True)
    presubmit.os.path.isdir(f_blob).AndReturn(False)
    presubmit.scm.SVN.GetFileProperty(blat, 'svn:mime-type', self.fake_root_dir
        ).AndReturn(None)
    presubmit.scm.SVN.GetFileProperty(blob, 'svn:mime-type', self.fake_root_dir
        ).AndReturn('application/octet-stream')
    self.mox.ReplayAll()

    output = filter(lambda x: x.IsTextFile(), files)
    self.assertEquals(1, len(output))
    self.assertEquals(files[0], output[0])


class ChangeUnittest(PresubmitTestsBase):
  def testMembersChanged(self):
    members = [
        'AbsoluteLocalPaths', 'AffectedFiles', 'AffectedTextFiles',
        'DescriptionText', 'FullDescriptionText', 'LocalPaths', 'Name',
        'RepositoryRoot', 'RightHandSideLines', 'ServerPaths',
        'SetDescriptionText', 'TAG_LINE_RE',
        'author_email', 'issue', 'patchset', 'scm', 'tags',
    ]
    # If this test fails, you should add the relevant test.
    self.mox.ReplayAll()

    change = presubmit.Change(
        'foo', 'foo', self.fake_root_dir, [('M', 'AA')], 0, 0, 'foo')
    self.compareMembers(change, members)

  def testMembers(self):
    change = presubmit.Change(
        'foo1', 'foo2\nDRU=ro', self.fake_root_dir, [('Y', 'AA')], 3, 5, 'foo3')
    self.assertEquals('foo1', change.Name())
    self.assertEquals('foo2', change.DescriptionText())
    self.assertEquals('foo3', change.author_email)
    self.assertEquals('ro', change.DRU)
    self.assertEquals(3, change.issue)
    self.assertEquals(5, change.patchset)
    self.assertEquals(self.fake_root_dir, change.RepositoryRoot())
    self.assertEquals(1, len(change.AffectedFiles(include_dirs=True)))
    self.assertEquals('Y', change.AffectedFiles(include_dirs=True)[0].Action())

  def testSetDescriptionText(self):
    change = presubmit.Change(
        '', 'foo\nDRU=ro', self.fake_root_dir, [], 3, 5, '')
    self.assertEquals('foo', change.DescriptionText())
    self.assertEquals('foo\nDRU=ro', change.FullDescriptionText())
    self.assertEquals('ro', change.DRU)

    change.SetDescriptionText('bar\nWHIZ=bang')
    self.assertEquals('bar', change.DescriptionText())
    self.assertEquals('bar\nWHIZ=bang', change.FullDescriptionText())
    self.assertEquals('bang', change.WHIZ)
    self.assertFalse(change.DRU)


def CommHelper(input_api, cmd, ret=None, **kwargs):
  ret = ret or (('', None), 0)
  input_api.subprocess.communicate(
      cmd, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, **kwargs
      ).AndReturn(ret)


class CannedChecksUnittest(PresubmitTestsBase):
  """Tests presubmit_canned_checks.py."""

  def MockInputApi(self, change, committing):
    # pylint: disable=R0201
    input_api = self.mox.CreateMock(presubmit.InputApi)
    input_api.cStringIO = presubmit.cStringIO
    input_api.json = presubmit.json
    input_api.logging = logging
    input_api.os_listdir = self.mox.CreateMockAnything()
    input_api.os_walk = self.mox.CreateMockAnything()
    input_api.os_path = presubmit.os.path
    input_api.re = presubmit.re
    input_api.rietveld = self.mox.CreateMock(rietveld.Rietveld)
    input_api.traceback = presubmit.traceback
    input_api.urllib2 = self.mox.CreateMock(presubmit.urllib2)
    input_api.unittest = unittest
    input_api.subprocess = self.mox.CreateMock(subprocess)
    presubmit.subprocess = input_api.subprocess
    class fake_CalledProcessError(Exception):
      def __str__(self):
        return 'foo'
    input_api.subprocess.CalledProcessError = fake_CalledProcessError
    input_api.verbose = False

    input_api.change = change
    input_api.host_url = 'http://localhost'
    input_api.is_committing = committing
    input_api.tbr = False
    input_api.python_executable = 'pyyyyython'
    input_api.platform = sys.platform
    input_api.time = time
    input_api.canned_checks = presubmit_canned_checks
    input_api.Command = presubmit.CommandData
    input_api.RunTests = functools.partial(
        presubmit.InputApi.RunTests, input_api)
    return input_api

  def testMembersChanged(self):
    self.mox.ReplayAll()
    members = [
      'CheckBuildbotPendingBuilds',
      'CheckChangeHasBugField', 'CheckChangeHasDescription',
      'CheckChangeHasNoStrayWhitespace',
      'CheckChangeHasOnlyOneEol', 'CheckChangeHasNoCR',
      'CheckChangeHasNoCrAndHasOnlyOneEol', 'CheckChangeHasNoTabs',
      'CheckChangeTodoHasOwner',
      'CheckChangeHasQaField', 'CheckChangeHasTestedField',
      'CheckChangeHasTestField',
      'CheckChangeLintsClean',
      'CheckChangeSvnEolStyle',
      'CheckChangeWasUploaded',
      'CheckDoNotSubmit',
      'CheckDoNotSubmitInDescription', 'CheckDoNotSubmitInFiles',
      'CheckLongLines', 'CheckTreeIsOpen', 'PanProjectChecks',
      'CheckLicense',
      'CheckOwners',
      'CheckPatchFormatted',
      'CheckRietveldTryJobExecution',
      'CheckSingletonInHeaders',
      'CheckSvnModifiedDirectories',
      'CheckSvnForCommonMimeTypes', 'CheckSvnProperty',
      'RunPythonUnitTests', 'RunPylint',
      'RunUnitTests', 'RunUnitTestsInDirectory',
      'GetPythonUnitTests', 'GetPylint',
      'GetUnitTests', 'GetUnitTestsInDirectory',
    ]
    # If this test fails, you should add the relevant test.
    self.compareMembers(presubmit_canned_checks, members)

  def DescriptionTest(self, check, description1, description2, error_type,
                      committing):
    change1 = presubmit.Change(
        'foo1', description1, self.fake_root_dir, None, 0, 0, None)
    input_api1 = self.MockInputApi(change1, committing)
    change2 = presubmit.Change(
        'foo2', description2, self.fake_root_dir, None, 0, 0, None)
    input_api2 = self.MockInputApi(change2, committing)
    self.mox.ReplayAll()

    results1 = check(input_api1, presubmit.OutputApi)
    self.assertEquals(results1, [])
    results2 = check(input_api2, presubmit.OutputApi)
    self.assertEquals(len(results2), 1)
    self.assertEquals(results2[0].__class__, error_type)

  def ContentTest(self, check, content1, content1_path, content2,
                  content2_path, error_type):
    """Runs a test of a content-checking rule.

      Args:
        check: the check to run.
        content1: content which is expected to pass the check.
        content1_path: file path for content1.
        content2: content which is expected to fail the check.
        content2_path: file path for content2.
        error_type: the type of the error expected for content2.
    """
    change1 = presubmit.Change(
        'foo1', 'foo1\n', self.fake_root_dir, None, 0, 0, None)
    input_api1 = self.MockInputApi(change1, False)
    affected_file = self.mox.CreateMock(presubmit.SvnAffectedFile)
    input_api1.AffectedFiles(
        include_deletes=False,
        file_filter=mox.IgnoreArg()).AndReturn([affected_file])
    affected_file.LocalPath().AndReturn(content1_path)
    affected_file.NewContents().AndReturn([
        'afoo',
        content1,
        'bfoo',
        'cfoo',
        'dfoo'])

    change2 = presubmit.Change(
        'foo2', 'foo2\n', self.fake_root_dir, None, 0, 0, None)
    input_api2 = self.MockInputApi(change2, False)

    input_api2.AffectedFiles(
        include_deletes=False,
        file_filter=mox.IgnoreArg()).AndReturn([affected_file])
    affected_file.LocalPath().AndReturn(content2_path)
    affected_file.NewContents().AndReturn([
        'dfoo',
        content2,
        'efoo',
        'ffoo',
        'gfoo'])
    # It falls back to ChangedContents when there is a failure. This is an
    # optimization since NewContents() is much faster to execute than
    # ChangedContents().
    affected_file.ChangedContents().AndReturn([
        (42, content2),
        (43, 'hfoo'),
        (23, 'ifoo')])
    affected_file.LocalPath().AndReturn('foo.cc')

    self.mox.ReplayAll()

    results1 = check(input_api1, presubmit.OutputApi, None)
    self.assertEquals(results1, [])
    results2 = check(input_api2, presubmit.OutputApi, None)
    self.assertEquals(len(results2), 1)
    self.assertEquals(results2[0].__class__, error_type)

  def ReadFileTest(self, check, content1, content2, error_type):
    change1 = presubmit.Change(
        'foo1', 'foo1\n', self.fake_root_dir, None, 0, 0, None)
    input_api1 = self.MockInputApi(change1, False)
    affected_file1 = self.mox.CreateMock(presubmit.SvnAffectedFile)
    input_api1.AffectedSourceFiles(None).AndReturn([affected_file1])
    input_api1.ReadFile(affected_file1, 'rb').AndReturn(content1)
    change2 = presubmit.Change(
        'foo2', 'foo2\n', self.fake_root_dir, None, 0, 0, None)
    input_api2 = self.MockInputApi(change2, False)
    affected_file2 = self.mox.CreateMock(presubmit.SvnAffectedFile)
    input_api2.AffectedSourceFiles(None).AndReturn([affected_file2])
    input_api2.ReadFile(affected_file2, 'rb').AndReturn(content2)
    affected_file2.LocalPath().AndReturn('bar.cc')
    self.mox.ReplayAll()

    results = check(input_api1, presubmit.OutputApi)
    self.assertEquals(results, [])
    results2 = check(input_api2, presubmit.OutputApi)
    self.assertEquals(len(results2), 1)
    self.assertEquals(results2[0].__class__, error_type)

  def SvnPropertyTest(self, check, property_name, value1, value2, committing,
                      error_type, use_source_file):
    change1 = presubmit.SvnChange(
        'mychange', '', self.fake_root_dir, [], 0, 0, None)
    input_api1 = self.MockInputApi(change1, committing)
    files1 = [
      presubmit.SvnAffectedFile('foo/bar.cc', 'A', self.fake_root_dir),
      presubmit.SvnAffectedFile('foo.cc', 'M', self.fake_root_dir),
    ]
    if use_source_file:
      input_api1.AffectedSourceFiles(None).AndReturn(files1)
    else:
      input_api1.AffectedFiles(include_deleted=False).AndReturn(files1)
    presubmit.scm.SVN.GetFileProperty(
        presubmit.normpath('foo/bar.cc'), property_name, self.fake_root_dir
        ).AndReturn(value1)
    presubmit.scm.SVN.GetFileProperty(
        presubmit.normpath('foo.cc'), property_name, self.fake_root_dir
        ).AndReturn(value1)
    change2 = presubmit.SvnChange(
        'mychange', '', self.fake_root_dir, [], 0, 0, None)
    input_api2 = self.MockInputApi(change2, committing)
    files2 = [
      presubmit.SvnAffectedFile('foo/bar.cc', 'A', self.fake_root_dir),
      presubmit.SvnAffectedFile('foo.cc', 'M', self.fake_root_dir),
    ]
    if use_source_file:
      input_api2.AffectedSourceFiles(None).AndReturn(files2)
    else:
      input_api2.AffectedFiles(include_deleted=False).AndReturn(files2)

    presubmit.scm.SVN.GetFileProperty(
        presubmit.normpath('foo/bar.cc'), property_name, self.fake_root_dir
        ).AndReturn(value2)
    presubmit.scm.SVN.GetFileProperty(
        presubmit.normpath('foo.cc'), property_name, self.fake_root_dir
        ).AndReturn(value2)
    self.mox.ReplayAll()

    results1 = check(input_api1, presubmit.OutputApi, None)
    self.assertEquals(results1, [])
    results2 = check(input_api2, presubmit.OutputApi, None)
    self.assertEquals(len(results2), 1)
    self.assertEquals(results2[0].__class__, error_type)

  def testCannedCheckChangeHasBugField(self):
    self.DescriptionTest(presubmit_canned_checks.CheckChangeHasBugField,
                         'Foo\nBUG=1234', 'Foo\n',
                         presubmit.OutputApi.PresubmitNotifyResult,
                         False)

  def testCheckChangeHasDescription(self):
    self.DescriptionTest(presubmit_canned_checks.CheckChangeHasDescription,
                         'Bleh', '',
                         presubmit.OutputApi.PresubmitNotifyResult,
                         False)
    self.mox.VerifyAll()
    self.DescriptionTest(presubmit_canned_checks.CheckChangeHasDescription,
                         'Bleh', '',
                         presubmit.OutputApi.PresubmitError,
                         True)

  def testCannedCheckChangeHasTestField(self):
    self.DescriptionTest(presubmit_canned_checks.CheckChangeHasTestField,
                         'Foo\nTEST=did some stuff', 'Foo\n',
                         presubmit.OutputApi.PresubmitNotifyResult,
                         False)

  def testCannedCheckChangeHasTestedField(self):
    self.DescriptionTest(presubmit_canned_checks.CheckChangeHasTestedField,
                         'Foo\nTESTED=did some stuff', 'Foo\n',
                         presubmit.OutputApi.PresubmitError,
                         False)

  def testCannedCheckChangeHasQAField(self):
    self.DescriptionTest(presubmit_canned_checks.CheckChangeHasQaField,
                         'Foo\nQA=BSOD your machine', 'Foo\n',
                         presubmit.OutputApi.PresubmitError,
                         False)

  def testCannedCheckDoNotSubmitInDescription(self):
    self.DescriptionTest(presubmit_canned_checks.CheckDoNotSubmitInDescription,
                         'Foo\nDO NOTSUBMIT', 'Foo\nDO NOT ' + 'SUBMIT',
                         presubmit.OutputApi.PresubmitError,
                         False)

  def testCannedCheckDoNotSubmitInFiles(self):
    self.ContentTest(
        lambda x,y,z: presubmit_canned_checks.CheckDoNotSubmitInFiles(x, y),
        'DO NOTSUBMIT', None, 'DO NOT ' + 'SUBMIT', None,
        presubmit.OutputApi.PresubmitError)

  def testCheckChangeHasNoStrayWhitespace(self):
    self.ContentTest(
        lambda x,y,z:
            presubmit_canned_checks.CheckChangeHasNoStrayWhitespace(x, y),
        'Foo', None, 'Foo ', None,
        presubmit.OutputApi.PresubmitPromptWarning)

  def testCheckSingletonInHeaders(self):
    change1 = presubmit.Change(
        'foo1', 'foo1\n', self.fake_root_dir, None, 0, 0, None)
    input_api1 = self.MockInputApi(change1, False)
    affected_file1 = self.mox.CreateMock(presubmit.SvnAffectedFile)
    affected_file2 = self.mox.CreateMock(presubmit.SvnAffectedFile)
    input_api1.AffectedSourceFiles(None).AndReturn(
        [affected_file1, affected_file2])
    affected_file1.LocalPath().AndReturn('foo.h')
    input_api1.ReadFile(affected_file1).AndReturn(
        '// Comment mentioning Singleton<Foo>.\n' +
        'friend class Singleton<Foo>;')
    for _ in range(4):
      affected_file2.LocalPath().AndReturn('foo.cc')

    change2 = presubmit.Change(
        'foo2', 'foo2\n', self.fake_root_dir, None, 0, 0, None)
    input_api2 = self.MockInputApi(change2, False)

    affected_file3 = self.mox.CreateMock(presubmit.SvnAffectedFile)
    input_api2.AffectedSourceFiles(None).AndReturn([affected_file3])
    affected_file3.LocalPath().AndReturn('foo.h')
    input_api2.ReadFile(affected_file3).AndReturn(
        'Foo* foo = Singleton<Foo>::get();')

    self.mox.ReplayAll()

    results1 = presubmit_canned_checks.CheckSingletonInHeaders(
        input_api1, presubmit.OutputApi)
    self.assertEquals(results1, [])
    results2 = presubmit_canned_checks.CheckSingletonInHeaders(
        input_api2, presubmit.OutputApi)
    self.assertEquals(len(results2), 1)
    self.assertEquals(results2[0].__class__, presubmit.OutputApi.PresubmitError)

  def testCheckChangeHasOnlyOneEol(self):
    self.ReadFileTest(presubmit_canned_checks.CheckChangeHasOnlyOneEol,
                      "Hey!\nHo!\n", "Hey!\nHo!\n\n",
                      presubmit.OutputApi.PresubmitPromptWarning)

  def testCheckChangeHasNoCR(self):
    self.ReadFileTest(presubmit_canned_checks.CheckChangeHasNoCR,
                      "Hey!\nHo!\n", "Hey!\r\nHo!\r\n",
                      presubmit.OutputApi.PresubmitPromptWarning)

  def testCheckChangeHasNoCrAndHasOnlyOneEol(self):
    self.ReadFileTest(
        presubmit_canned_checks.CheckChangeHasNoCrAndHasOnlyOneEol,
        "Hey!\nHo!\n", "Hey!\nHo!\n\n",
        presubmit.OutputApi.PresubmitPromptWarning)
    self.mox.VerifyAll()
    self.ReadFileTest(
        presubmit_canned_checks.CheckChangeHasNoCrAndHasOnlyOneEol,
        "Hey!\nHo!\n", "Hey!\r\nHo!\r\n",
        presubmit.OutputApi.PresubmitPromptWarning)

  def testCheckChangeTodoHasOwner(self):
    self.ContentTest(presubmit_canned_checks.CheckChangeTodoHasOwner,
                     "TODO(foo): bar", None, "TODO: bar", None,
                     presubmit.OutputApi.PresubmitPromptWarning)

  def testCannedCheckChangeHasNoTabs(self):
    self.ContentTest(presubmit_canned_checks.CheckChangeHasNoTabs,
                     'blah blah', None, 'blah\tblah', None,
                     presubmit.OutputApi.PresubmitPromptWarning)

    # Make sure makefiles are ignored.
    change1 = presubmit.Change(
        'foo1', 'foo1\n', self.fake_root_dir, None, 0, 0, None)
    input_api1 = self.MockInputApi(change1, False)
    affected_file1 = self.mox.CreateMock(presubmit.SvnAffectedFile)
    affected_file1.LocalPath().AndReturn('foo.cc')
    affected_file2 = self.mox.CreateMock(presubmit.SvnAffectedFile)
    affected_file2.LocalPath().AndReturn('foo/Makefile')
    affected_file3 = self.mox.CreateMock(presubmit.SvnAffectedFile)
    affected_file3.LocalPath().AndReturn('makefile')
    # Only this one will trigger.
    affected_file4 = self.mox.CreateMock(presubmit.SvnAffectedFile)
    affected_file1.LocalPath().AndReturn('foo.cc')
    affected_file1.NewContents().AndReturn(['yo, '])
    affected_file4.LocalPath().AndReturn('makefile.foo')
    affected_file4.LocalPath().AndReturn('makefile.foo')
    affected_file4.NewContents().AndReturn(['ye\t'])
    affected_file4.ChangedContents().AndReturn([(46, 'ye\t')])
    affected_file4.LocalPath().AndReturn('makefile.foo')
    affected_files = (affected_file1, affected_file2,
                      affected_file3, affected_file4)

    def test(file_filter, include_deletes):
      self.assertFalse(include_deletes)
      for x in affected_files:
        if file_filter(x):
          yield x
    # Override the mock of these functions.
    input_api1.FilterSourceFile = lambda x: x
    input_api1.AffectedFiles = test
    self.mox.ReplayAll()

    results1 = presubmit_canned_checks.CheckChangeHasNoTabs(input_api1,
        presubmit.OutputApi, None)
    self.assertEquals(len(results1), 1)
    self.assertEquals(results1[0].__class__,
        presubmit.OutputApi.PresubmitPromptWarning)
    self.assertEquals(results1[0]._long_text,
        'makefile.foo:46')

  def testCannedCheckLongLines(self):
    check = lambda x, y, z: presubmit_canned_checks.CheckLongLines(x, y, 10, z)
    self.ContentTest(check, '0123456789', None, '01234567890', None,
                     presubmit.OutputApi.PresubmitPromptWarning)

  def testCannedCheckJavaLongLines(self):
    check = lambda x, y, _: presubmit_canned_checks.CheckLongLines(x, y, 80)
    self.ContentTest(check, 'A ' * 50, 'foo.java', 'A ' * 50 + 'B', 'foo.java',
                     presubmit.OutputApi.PresubmitPromptWarning)

  def testCannedCheckSpecialJavaLongLines(self):
    check = lambda x, y, _: presubmit_canned_checks.CheckLongLines(x, y, 80)
    self.ContentTest(check, 'import ' + 'A ' * 150, 'foo.java',
                     'importSomething ' + 'A ' * 50, 'foo.java',
                     presubmit.OutputApi.PresubmitPromptWarning)

  def testCannedCheckObjCExceptionLongLines(self):
    check = lambda x, y, _: presubmit_canned_checks.CheckLongLines(x, y, 80)
    self.ContentTest(check, '#import ' + 'A ' * 150, 'foo.mm',
                     'import' + 'A ' * 150, 'foo.mm',
                     presubmit.OutputApi.PresubmitPromptWarning)

  def testCannedCheckMakefileLongLines(self):
    check = lambda x, y, _: presubmit_canned_checks.CheckLongLines(x, y, 80)
    self.ContentTest(check, 'A ' * 100, 'foo.mk', 'A ' * 100 + 'B', 'foo.mk',
                     presubmit.OutputApi.PresubmitPromptWarning)

  def testCannedCheckLongLinesLF(self):
    check = lambda x, y, z: presubmit_canned_checks.CheckLongLines(x, y, 10, z)
    self.ContentTest(check, '012345678\n', None, '0123456789\n', None,
                     presubmit.OutputApi.PresubmitPromptWarning)

  def testCannedCheckCppExceptionLongLines(self):
    check = lambda x, y, z: presubmit_canned_checks.CheckLongLines(x, y, 10, z)
    self.ContentTest(
        check,
        '#if 56 89 12 45 9191919191919',
        'foo.cc',
        '#nif 56 89 12 45 9191919191919',
        'foo.cc',
        presubmit.OutputApi.PresubmitPromptWarning)

  def testCannedCheckLongLinesHttp(self):
    check = lambda x, y, z: presubmit_canned_checks.CheckLongLines(x, y, 10, z)
    self.ContentTest(
        check,
        ' http:// 0 23 5',
        None,
        ' http:// 0 23 56',
        None,
        presubmit.OutputApi.PresubmitPromptWarning)

  def testCannedCheckLongLinesLongSymbol(self):
    check = lambda x, y, z: presubmit_canned_checks.CheckLongLines(x, y, 10, z)
    self.ContentTest(
        check,
        ' TUP5D_LoNG_SY ',
        None,
        ' TUP5D_LoNG_SY5 ',
        None,
        presubmit.OutputApi.PresubmitPromptWarning)

  def testCheckChangeSvnEolStyleCommit(self):
    # Test CheckSvnProperty at the same time.
    self.SvnPropertyTest(presubmit_canned_checks.CheckChangeSvnEolStyle,
                         'svn:eol-style', 'LF', '', True,
                         presubmit.OutputApi.PresubmitError, True)

  def testCheckChangeSvnEolStyleUpload(self):
    self.SvnPropertyTest(presubmit_canned_checks.CheckChangeSvnEolStyle,
                         'svn:eol-style', 'LF', '', False,
                         presubmit.OutputApi.PresubmitNotifyResult, True)

  def _LicenseCheck(self, text, license_text, committing, expected_result,
      **kwargs):
    change = self.mox.CreateMock(presubmit.SvnChange)
    change.scm = 'svn'
    input_api = self.MockInputApi(change, committing)
    affected_file = self.mox.CreateMock(presubmit.SvnAffectedFile)
    input_api.AffectedSourceFiles(42).AndReturn([affected_file])
    input_api.ReadFile(affected_file, 'rb').AndReturn(text)
    if expected_result:
      affected_file.LocalPath().AndReturn('bleh')

    self.mox.ReplayAll()
    result = presubmit_canned_checks.CheckLicense(
                 input_api, presubmit.OutputApi, license_text,
                 source_file_filter=42,
                 **kwargs)
    if expected_result:
      self.assertEqual(len(result), 1)
      self.assertEqual(result[0].__class__, expected_result)
    else:
      self.assertEqual(result, [])

  def testCheckLicenseSuccess(self):
    text = (
        "#!/bin/python\n"
        "# Copyright (c) 2037 Nobody.\n"
        "# All Rights Reserved.\n"
        "print 'foo'\n"
    )
    license_text = (
        r".*? Copyright \(c\) 2037 Nobody." "\n"
        r".*? All Rights Reserved\." "\n"
    )
    self._LicenseCheck(text, license_text, True, None)

  def testCheckLicenseFailCommit(self):
    text = (
        "#!/bin/python\n"
        "# Copyright (c) 2037 Nobody.\n"
        "# All Rights Reserved.\n"
        "print 'foo'\n"
    )
    license_text = (
        r".*? Copyright \(c\) 0007 Nobody." "\n"
        r".*? All Rights Reserved\." "\n"
    )
    self._LicenseCheck(text, license_text, True,
                       presubmit.OutputApi.PresubmitPromptWarning)

  def testCheckLicenseFailUpload(self):
    text = (
        "#!/bin/python\n"
        "# Copyright (c) 2037 Nobody.\n"
        "# All Rights Reserved.\n"
        "print 'foo'\n"
    )
    license_text = (
        r".*? Copyright \(c\) 0007 Nobody." "\n"
        r".*? All Rights Reserved\." "\n"
    )
    self._LicenseCheck(text, license_text, False,
                       presubmit.OutputApi.PresubmitNotifyResult)

  def testCheckLicenseEmptySuccess(self):
    text = ''
    license_text = (
        r".*? Copyright \(c\) 2037 Nobody." "\n"
        r".*? All Rights Reserved\." "\n"
    )
    self._LicenseCheck(text, license_text, True, None, accept_empty_files=True)

  def testCannedCheckSvnAccidentalSubmission(self):
    modified_dir_file = 'foo/'
    accidental_submssion_file = 'foo/bar.cc'

    change = self.mox.CreateMock(presubmit.SvnChange)
    change.scm = 'svn'
    change.GetModifiedFiles().AndReturn([modified_dir_file])
    change.GetAllModifiedFiles().AndReturn([modified_dir_file,
                                            accidental_submssion_file])
    input_api = self.MockInputApi(change, True)

    affected_file = self.mox.CreateMock(presubmit.SvnAffectedFile)
    affected_file.Action().AndReturn('M')
    affected_file.IsDirectory().AndReturn(True)
    affected_file.AbsoluteLocalPath().AndReturn(accidental_submssion_file)
    affected_file.LocalPath().AndReturn(accidental_submssion_file)
    input_api.AffectedFiles(file_filter=None).AndReturn([affected_file])

    self.mox.ReplayAll()

    check = presubmit_canned_checks.CheckSvnModifiedDirectories
    results = check(input_api, presubmit.OutputApi, None)
    self.assertEquals(len(results), 1)
    self.assertEquals(results[0].__class__,
                      presubmit.OutputApi.PresubmitPromptWarning)

  def testCheckSvnForCommonMimeTypes(self):
    self.mox.StubOutWithMock(presubmit_canned_checks, 'CheckSvnProperty')
    input_api = self.MockInputApi(None, False)
    output_api = presubmit.OutputApi(False)
    A = lambda x: presubmit.AffectedFile(x, 'M', self.fake_root_dir)
    files = [
      A('a.pdf'), A('b.bmp'), A('c.gif'), A('d.png'), A('e.jpg'), A('f.jpe'),
      A('random'), A('g.jpeg'), A('h.ico'),
    ]
    input_api.AffectedFiles(include_deletes=False).AndReturn(files)
    presubmit_canned_checks.CheckSvnProperty(
        input_api, output_api, 'svn:mime-type', 'application/pdf', [files[0]]
        ).AndReturn([1])
    presubmit_canned_checks.CheckSvnProperty(
        input_api, output_api, 'svn:mime-type', 'image/bmp', [files[1]]
        ).AndReturn([2])
    presubmit_canned_checks.CheckSvnProperty(
        input_api, output_api, 'svn:mime-type', 'image/gif', [files[2]]
        ).AndReturn([3])
    presubmit_canned_checks.CheckSvnProperty(
        input_api, output_api, 'svn:mime-type', 'image/png', [files[3]]
        ).AndReturn([4])
    presubmit_canned_checks.CheckSvnProperty(
        input_api, output_api, 'svn:mime-type', 'image/jpeg',
        [files[4], files[5], files[7]]
        ).AndReturn([5])
    presubmit_canned_checks.CheckSvnProperty(
        input_api, output_api, 'svn:mime-type', 'image/vnd.microsoft.icon',
        [files[8]]).AndReturn([6])
    self.mox.ReplayAll()

    results = presubmit_canned_checks.CheckSvnForCommonMimeTypes(
        input_api, output_api)
    self.assertEquals(results, [1, 2, 3, 4, 5, 6])

  def testCannedCheckTreeIsOpenOpen(self):
    input_api = self.MockInputApi(None, True)
    connection = self.mox.CreateMockAnything()
    input_api.urllib2.urlopen('url_to_open').AndReturn(connection)
    connection.read().AndReturn('The tree is open')
    connection.close()
    self.mox.ReplayAll()
    results = presubmit_canned_checks.CheckTreeIsOpen(
        input_api, presubmit.OutputApi, url='url_to_open', closed='.*closed.*')
    self.assertEquals(results, [])

  def testCannedCheckTreeIsOpenClosed(self):
    input_api = self.MockInputApi(None, True)
    connection = self.mox.CreateMockAnything()
    input_api.urllib2.urlopen('url_to_closed').AndReturn(connection)
    connection.read().AndReturn('Tree is closed for maintenance')
    connection.close()
    self.mox.ReplayAll()
    results = presubmit_canned_checks.CheckTreeIsOpen(
        input_api, presubmit.OutputApi,
        url='url_to_closed', closed='.*closed.*')
    self.assertEquals(len(results), 1)
    self.assertEquals(results[0].__class__,
                      presubmit.OutputApi.PresubmitError)

  def testCannedCheckJsonTreeIsOpenOpen(self):
    input_api = self.MockInputApi(None, True)
    connection = self.mox.CreateMockAnything()
    input_api.urllib2.urlopen('url_to_open').AndReturn(connection)
    status = {
        'can_commit_freely': True,
        'general_state': 'open',
        'message': 'The tree is open'
    }
    connection.read().AndReturn(input_api.json.dumps(status))
    connection.close()
    self.mox.ReplayAll()
    results = presubmit_canned_checks.CheckTreeIsOpen(
        input_api, presubmit.OutputApi, json_url='url_to_open')
    self.assertEquals(results, [])

  def testCannedCheckJsonTreeIsOpenClosed(self):
    input_api = self.MockInputApi(None, True)
    connection = self.mox.CreateMockAnything()
    input_api.urllib2.urlopen('url_to_closed').AndReturn(connection)
    status = {
        'can_commit_freely': False,
        'general_state': 'closed',
        'message': 'The tree is close',
    }
    connection.read().AndReturn(input_api.json.dumps(status))
    connection.close()
    self.mox.ReplayAll()
    results = presubmit_canned_checks.CheckTreeIsOpen(
        input_api, presubmit.OutputApi, json_url='url_to_closed')
    self.assertEquals(len(results), 1)
    self.assertEquals(results[0].__class__,
                      presubmit.OutputApi.PresubmitError)

  def testRunPythonUnitTestsNoTest(self):
    input_api = self.MockInputApi(None, False)
    self.mox.ReplayAll()
    results = presubmit_canned_checks.RunPythonUnitTests(
        input_api, presubmit.OutputApi, [])
    self.assertEquals(results, [])

  def testRunPythonUnitTestsNonExistentUpload(self):
    input_api = self.MockInputApi(None, False)
    CommHelper(input_api, ['pyyyyython', '-m', '_non_existent_module'],
                    ret=(('foo', None), 1), cwd=None, env=None)
    self.mox.ReplayAll()

    results = presubmit_canned_checks.RunPythonUnitTests(
        input_api, presubmit.OutputApi, ['_non_existent_module'])
    self.assertEquals(len(results), 1)
    self.assertEquals(results[0].__class__,
                      presubmit.OutputApi.PresubmitNotifyResult)

  def testRunPythonUnitTestsNonExistentCommitting(self):
    input_api = self.MockInputApi(None, True)
    CommHelper(input_api, ['pyyyyython', '-m', '_non_existent_module'],
                    ret=(('foo', None), 1), cwd=None, env=None)
    self.mox.ReplayAll()

    results = presubmit_canned_checks.RunPythonUnitTests(
        input_api, presubmit.OutputApi, ['_non_existent_module'])
    self.assertEquals(len(results), 1)
    self.assertEquals(results[0].__class__, presubmit.OutputApi.PresubmitError)

  def testRunPythonUnitTestsFailureUpload(self):
    input_api = self.MockInputApi(None, False)
    input_api.unittest = self.mox.CreateMock(unittest)
    input_api.cStringIO = self.mox.CreateMock(presubmit.cStringIO)
    CommHelper(input_api, ['pyyyyython', '-m', 'test_module'],
                    ret=(('foo', None), 1), cwd=None, env=None)
    self.mox.ReplayAll()

    results = presubmit_canned_checks.RunPythonUnitTests(
        input_api, presubmit.OutputApi, ['test_module'])
    self.assertEquals(len(results), 1)
    self.assertEquals(results[0].__class__,
                      presubmit.OutputApi.PresubmitNotifyResult)
    self.assertEquals('test_module (0.00s) failed\nfoo', results[0]._message)

  def testRunPythonUnitTestsFailureCommitting(self):
    input_api = self.MockInputApi(None, True)
    CommHelper(input_api, ['pyyyyython', '-m', 'test_module'],
                    ret=(('foo', None), 1), cwd=None, env=None)
    self.mox.ReplayAll()

    results = presubmit_canned_checks.RunPythonUnitTests(
        input_api, presubmit.OutputApi, ['test_module'])
    self.assertEquals(len(results), 1)
    self.assertEquals(results[0].__class__, presubmit.OutputApi.PresubmitError)
    self.assertEquals('test_module (0.00s) failed\nfoo', results[0]._message)

  def testRunPythonUnitTestsSuccess(self):
    input_api = self.MockInputApi(None, False)
    input_api.cStringIO = self.mox.CreateMock(presubmit.cStringIO)
    input_api.unittest = self.mox.CreateMock(unittest)
    CommHelper(input_api, ['pyyyyython', '-m', 'test_module'],
                    cwd=None, env=None)
    self.mox.ReplayAll()

    results = presubmit_canned_checks.RunPythonUnitTests(
        input_api, presubmit.OutputApi, ['test_module'])
    self.assertEquals(len(results), 0)

  def testCannedRunPylint(self):
    input_api = self.MockInputApi(None, True)
    input_api.environ = self.mox.CreateMock(os.environ)
    input_api.environ.copy().AndReturn({})
    input_api.AffectedSourceFiles(mox.IgnoreArg()).AndReturn(True)
    input_api.PresubmitLocalPath().AndReturn('/foo')
    input_api.PresubmitLocalPath().AndReturn('/foo')
    input_api.os_walk('/foo').AndReturn([('/foo', [], ['file1.py'])])
    pylint = os.path.join(_ROOT, 'third_party', 'pylint.py')
    pylintrc = os.path.join(_ROOT, 'pylintrc')

    CommHelper(input_api,
        ['pyyyyython', pylint, '--args-on-stdin'],
        env=mox.IgnoreArg(), stdin='file1.py\n--rcfile=%s' % pylintrc)
    self.mox.ReplayAll()

    results = presubmit_canned_checks.RunPylint(
        input_api, presubmit.OutputApi)
    self.assertEquals([], results)
    self.checkstdout('')

  def testCheckBuildbotPendingBuildsBad(self):
    input_api = self.MockInputApi(None, True)
    connection = self.mox.CreateMockAnything()
    input_api.urllib2.urlopen('uurl').AndReturn(connection)
    connection.read().AndReturn('foo')
    connection.close()
    self.mox.ReplayAll()

    results = presubmit_canned_checks.CheckBuildbotPendingBuilds(
        input_api, presubmit.OutputApi, 'uurl', 2, ('foo'))
    self.assertEquals(len(results), 1)
    self.assertEquals(results[0].__class__,
        presubmit.OutputApi.PresubmitNotifyResult)

  def testCheckBuildbotPendingBuildsGood(self):
    input_api = self.MockInputApi(None, True)
    connection = self.mox.CreateMockAnything()
    input_api.urllib2.urlopen('uurl').AndReturn(connection)
    connection.read().AndReturn("""
    {
      'b1': { 'pending_builds': [0, 1, 2, 3, 4, 5, 6, 7] },
      'foo': { 'pending_builds': [0, 1, 2, 3, 4, 5, 6, 7] },
      'b2': { 'pending_builds': [0] }
    }""")
    connection.close()
    self.mox.ReplayAll()

    results = presubmit_canned_checks.CheckBuildbotPendingBuilds(
        input_api, presubmit.OutputApi, 'uurl', 2, ('foo'))
    self.assertEquals(len(results), 1)
    self.assertEquals(results[0].__class__,
        presubmit.OutputApi.PresubmitNotifyResult)

  def AssertOwnersWorks(self, tbr=False, issue='1', approvers=None,
      reviewers=None, is_committing=True, rietveld_response=None,
      uncovered_files=None, expected_output='', author_counts_as_owner=True,
      manually_specified_reviewers=None):
    if approvers is None:
      # The set of people who lgtm'ed a change.
      approvers = set()
    if reviewers is None:
      # The set of people needed to lgtm a change. We default to
      # the same list as the people who approved it. We use 'reviewers'
      # to avoid a name collision w/ owners.py.
      reviewers = approvers
    if uncovered_files is None:
      uncovered_files = set()
    if manually_specified_reviewers is None:
      manually_specified_reviewers = []

    change = self.mox.CreateMock(presubmit.Change)
    change.issue = issue
    change.author_email = 'john@example.com'
    change.R = ','.join(manually_specified_reviewers)
    change.TBR = ''
    affected_file = self.mox.CreateMock(presubmit.SvnAffectedFile)
    input_api = self.MockInputApi(change, False)
    fake_db = self.mox.CreateMock(owners.Database)
    fake_db.email_regexp = input_api.re.compile(owners.BASIC_EMAIL_REGEXP)
    input_api.owners_db = fake_db
    input_api.is_committing = is_committing
    input_api.tbr = tbr

    if not is_committing or (not tbr and issue):
      affected_file.LocalPath().AndReturn('foo/xyz.cc')
      change.AffectedFiles(file_filter=None).AndReturn([affected_file])
      if issue and not rietveld_response:
        rietveld_response = {
          "owner_email": change.author_email,
          "messages": [
            {"sender": a, "text": "I approve", "approval": True}
            for a in approvers
          ],
          "reviewers": reviewers
        }

      if is_committing:
        people = approvers
      else:
        people = reviewers

      if issue:
        input_api.rietveld.get_issue_properties(
            issue=int(input_api.change.issue), messages=True).AndReturn(
                rietveld_response)

      if author_counts_as_owner:
        people.add(change.author_email)
        fake_db.files_not_covered_by(set(['foo/xyz.cc']),
            people).AndReturn(uncovered_files)
      else:
        people.discard(change.author_email)
        fake_db.files_not_covered_by(set(['foo/xyz.cc']),
            people).AndReturn(uncovered_files)
      if not is_committing and uncovered_files:
        fake_db.reviewers_for(set(['foo']),
            change.author_email).AndReturn(change.author_email)

    self.mox.ReplayAll()
    output = presubmit.PresubmitOutput()
    results = presubmit_canned_checks.CheckOwners(input_api,
        presubmit.OutputApi, author_counts_as_owner=author_counts_as_owner)
    if results:
      results[0].handle(output)
    self.assertEquals(output.getvalue(), expected_output)

  def testCannedCheckOwners_Approved(self):
    response = {
      "owner_email": "john@example.com",
      "messages": [
        {
          "sender": "ben@example.com", "text": "foo", "approval": True,
        },
      ],
      "reviewers": ["ben@example.com"],
    }
    self.AssertOwnersWorks(approvers=set(['ben@example.com']),
        rietveld_response=response,
        expected_output='')

    self.AssertOwnersWorks(approvers=set(['ben@example.com']),
        is_committing=False,
        rietveld_response=response,
        expected_output='')

  def testCannedCheckOwners_NotApproved(self):
    response = {
      "owner_email": "john@example.com",
      "messages": [
        {
          "sender": "ben@example.com", "text": "foo", "approval": False,
        },
      ],
      "reviewers": ["ben@example.com"],
    }
    self.AssertOwnersWorks(
        approvers=set(),
        reviewers=set(["ben@example.com"]),
        rietveld_response=response,
        expected_output=
            'Missing LGTM from someone other than john@example.com\n')

    self.AssertOwnersWorks(
        approvers=set(),
        reviewers=set(["ben@example.com"]),
        is_committing=False,
        rietveld_response=response,
        expected_output='')

  def testCannedCheckOwners_NoReviewers(self):
    response = {
      "owner_email": "john@example.com",
      "messages": [
        {
          "sender": "ben@example.com", "text": "foo", "approval": False,
        },
      ],
      "reviewers":[],
    }
    self.AssertOwnersWorks(
        approvers=set(),
        reviewers=set(),
        rietveld_response=response,
        expected_output=
            'Missing LGTM from someone other than john@example.com\n')

    self.AssertOwnersWorks(
        approvers=set(),
        reviewers=set(),
        is_committing=False,
        rietveld_response=response,
        expected_output='')

  def testCannedCheckOwners_NoIssueNoFiles(self):
    self.AssertOwnersWorks(issue=None,
        expected_output="OWNERS check failed: this change has no Rietveld "
                        "issue number, so we can't check it for approvals.\n")
    self.AssertOwnersWorks(issue=None, is_committing=False,
        expected_output="")

  def testCannedCheckOwners_NoIssue(self):
    self.AssertOwnersWorks(issue=None,
        uncovered_files=set(['foo']),
        expected_output="OWNERS check failed: this change has no Rietveld "
                        "issue number, so we can't check it for approvals.\n")
    self.AssertOwnersWorks(issue=None,
        is_committing=False,
        uncovered_files=set(['foo']),
        expected_output='Missing OWNER reviewers for these files:\n'
                        '    foo\n')

  def testCannedCheckOwners_NoIssueLocalReviewers(self):
    self.AssertOwnersWorks(issue=None,
        reviewers=set(['jane@example.com']),
        manually_specified_reviewers=['jane@example.com'],
        expected_output="OWNERS check failed: this change has no Rietveld "
                        "issue number, so we can't check it for approvals.\n")
    self.AssertOwnersWorks(issue=None,
        reviewers=set(['jane@example.com']),
        manually_specified_reviewers=['jane@example.com'],
        is_committing=False,
        expected_output='')

  def testCannedCheckOwners_NoIssueLocalReviewersDontInferEmailDomain(self):
    self.AssertOwnersWorks(issue=None,
        reviewers=set(['jane']),
        manually_specified_reviewers=['jane@example.com'],
        expected_output="OWNERS check failed: this change has no Rietveld "
                        "issue number, so we can't check it for approvals.\n")
    self.AssertOwnersWorks(issue=None,
        uncovered_files=set(['foo']),
        manually_specified_reviewers=['jane'],
        is_committing=False,
        expected_output='Missing OWNER reviewers for these files:\n'
                        '    foo\n')

  def testCannedCheckOwners_NoLGTM(self):
    self.AssertOwnersWorks(expected_output='Missing LGTM from someone '
                                           'other than john@example.com\n')
    self.AssertOwnersWorks(is_committing=False, expected_output='')

  def testCannedCheckOwners_OnlyOwnerLGTM(self):
    self.AssertOwnersWorks(approvers=set(['john@example.com']),
                           expected_output='Missing LGTM from someone '
                                           'other than john@example.com\n')
    self.AssertOwnersWorks(approvers=set(['john@example.com']),
                           is_committing=False,
                           expected_output='')

  def testCannedCheckOwners_AuthorCountsAsOwner(self):
    self.AssertOwnersWorks(approvers=set(['john@example.com',
                                          'brett@example.com']),
                           reviewers=set(['john@example.com',
                                          'ben@example.com']),
                           uncovered_files=set(['foo/xyz.cc', 'foo/bar.cc']),
                           expected_output='Missing LGTM from an OWNER '
                                           'for these files:\n'
                                           '    foo/bar.cc\n'
                                           '    foo/xyz.cc\n',
                           author_counts_as_owner=False)

  def testCannedCheckOwners_TBR(self):
    self.AssertOwnersWorks(tbr=True,
        expected_output='--tbr was specified, skipping OWNERS check\n')
    self.AssertOwnersWorks(tbr=True, is_committing=False, expected_output='')

  def testCannedCheckOwners_WithoutOwnerLGTM(self):
    self.AssertOwnersWorks(uncovered_files=set(['foo']),
        expected_output='Missing LGTM from an OWNER for these files:\n'
                        '    foo\n')
    self.AssertOwnersWorks(uncovered_files=set(['foo']),
        is_committing=False,
        expected_output='Missing OWNER reviewers for these files:\n'
                        '    foo\n')

  def testCannedCheckOwners_WithLGTMs(self):
    self.AssertOwnersWorks(approvers=set(['ben@example.com']),
                           uncovered_files=set())
    self.AssertOwnersWorks(approvers=set(['ben@example.com']),
                           is_committing=False,
                           uncovered_files=set())

  def testCannedRunUnitTests(self):
    change = presubmit.Change(
        'foo1', 'description1', self.fake_root_dir, None, 0, 0, None)
    input_api = self.MockInputApi(change, False)
    input_api.verbose = True
    unit_tests = ['allo', 'bar.py']
    input_api.PresubmitLocalPath().AndReturn(self.fake_root_dir)
    input_api.PresubmitLocalPath().AndReturn(self.fake_root_dir)
    CommHelper(input_api, ['allo', '--verbose'], cwd=self.fake_root_dir)
    cmd = ['bar.py', '--verbose']
    if input_api.platform == 'win32':
      cmd.insert(0, input_api.python_executable)
    CommHelper(input_api, cmd, cwd=self.fake_root_dir, ret=(('', None), 1))

    self.mox.ReplayAll()
    results = presubmit_canned_checks.RunUnitTests(
        input_api,
        presubmit.OutputApi,
        unit_tests)
    self.assertEqual(2, len(results))
    self.assertEqual(
        presubmit.OutputApi.PresubmitNotifyResult, results[0].__class__)
    self.assertEqual(
        presubmit.OutputApi.PresubmitPromptWarning, results[1].__class__)
    self.checkstdout('')

  def testCannedRunUnitTestsInDirectory(self):
    change = presubmit.Change(
        'foo1', 'description1', self.fake_root_dir, None, 0, 0, None)
    input_api = self.MockInputApi(change, False)
    input_api.verbose = True
    input_api.logging = self.mox.CreateMock(logging)
    input_api.PresubmitLocalPath().AndReturn(self.fake_root_dir)
    input_api.PresubmitLocalPath().AndReturn(self.fake_root_dir)
    path = presubmit.os.path.join(self.fake_root_dir, 'random_directory')
    input_api.os_listdir(path).AndReturn(['.', '..', 'a', 'b', 'c'])
    input_api.os_path.isfile = lambda x: not x.endswith('.')
    CommHelper(
        input_api,
        [presubmit.os.path.join('random_directory', 'b'), '--verbose'],
        cwd=self.fake_root_dir)
    input_api.logging.debug('Found 5 files, running 1')

    self.mox.ReplayAll()
    results = presubmit_canned_checks.RunUnitTestsInDirectory(
        input_api,
        presubmit.OutputApi,
        'random_directory',
        whitelist=['^a$', '^b$'],
        blacklist=['a'])
    self.assertEqual(1, len(results))
    self.assertEqual(
        presubmit.OutputApi.PresubmitNotifyResult, results[0].__class__)
    self.checkstdout('')

  def testPanProjectChecks(self):
    # Make sure it accepts both list and tuples.
    change = presubmit.Change(
        'foo1', 'description1', self.fake_root_dir, None, 0, 0, None)
    input_api = self.MockInputApi(change, False)
    affected_file = self.mox.CreateMock(presubmit.SvnAffectedFile)
    for _ in range(3):
      input_api.AffectedFiles(file_filter=mox.IgnoreArg(), include_deletes=False
          ).AndReturn([affected_file])
      affected_file.LocalPath()
      affected_file.NewContents().AndReturn('Hey!\nHo!\nHey!\nHo!\n\n')
    affected_file.ChangedContents().AndReturn([
        (0, 'Hey!\n'),
        (1, 'Ho!\n'),
        (2, 'Hey!\n'),
        (3, 'Ho!\n'),
        (4, '\n')])
    for _ in range(5):
      affected_file.LocalPath().AndReturn('hello.py')
    input_api.AffectedSourceFiles(mox.IgnoreArg()).AndReturn([affected_file])
    input_api.ReadFile(affected_file).AndReturn('Hey!\nHo!\nHey!\nHo!\n\n')
    input_api.AffectedSourceFiles(mox.IgnoreArg()).AndReturn([affected_file])
    for _ in range(4):
      affected_file.LocalPath().AndReturn('hello.py')

    self.mox.ReplayAll()
    results = presubmit_canned_checks.PanProjectChecks(
        input_api,
        presubmit.OutputApi,
        excluded_paths=None,
        text_files=None,
        license_header=None,
        project_name=None,
        owners_check=False)
    self.assertEqual(1, len(results))
    self.assertEqual(
        'Found line ending with white spaces in:', results[0]._message)
    self.checkstdout('')


if __name__ == '__main__':
  import unittest
  unittest.main()

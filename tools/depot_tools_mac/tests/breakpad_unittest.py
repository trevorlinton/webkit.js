#!/usr/bin/env python
# Copyright (c) 2012 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

"""Unit tests for breakpad.py."""

import os
import sys

sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from testing_support.super_mox import SuperMoxTestBase

import breakpad


class Breakpad(SuperMoxTestBase):
  """Setups and tear downs the mocks but doesn't test anything as-is."""
  def setUp(self):
    super(Breakpad, self).setUp()
    self.mox.StubOutWithMock(breakpad.atexit, 'register')
    self.mox.StubOutWithMock(breakpad.getpass, 'getuser')
    self.mox.StubOutWithMock(breakpad.urllib2, 'urlopen')
    breakpad._HOST_NAME = 'bozo'
    self.assertEquals(False, breakpad.IS_ENABLED)
    breakpad.IS_ENABLED = True
    self._old_sys_argv = breakpad.sys.argv
    breakpad.sys.argv = ['my_test']
    self._old_sys_version = breakpad.sys.version
    breakpad.sys.version = 'random python'

  def tearDown(self):
    breakpad.IS_ENABLED = False
    breakpad.sys.version = self._old_sys_version
    breakpad.sys.argv = self._old_sys_argv
    super(Breakpad, self).tearDown()

  def testMembersChanged(self):
    members = [
        'CheckForException', 'DEFAULT_URL', 'FormatException', 'IS_ENABLED',
        'Register', 'SendProfiling', 'SendStack',
        'atexit', 'getpass', 'os', 'post', 'socket', 'sys', 'time', 'traceback',
        'urllib', 'urllib2',
    ]
    # If this test fails, you should add the relevant test.
    self.compareMembers(breakpad, members)

  def _part_1_setup_mocks(self, exception):
    breakpad.os.getcwd().AndReturn('/tmp/asdf')
    breakpad.getpass.getuser().AndReturn('georges')
    obj = self.mox.CreateMockAnything()
    kwargs = {}
    if (breakpad.sys.version_info[0] * 10 + breakpad.sys.version_info[1]) >= 26:
      kwargs['timeout'] = 4
    breakpad.urllib2.urlopen(
        'https://chromium-status.appspot.com/breakpad',
        breakpad.urllib.urlencode([('exception', exception)]) + (
         '&args=%5B%27my_test%27%5D'
         '&stack=bar'
         '&host=bozo'
         '&version=random+python'
         '&user=georges'
         '&cwd=%2Ftmp%2Fasdf'),
        **kwargs).AndReturn(obj)
    obj.read().AndReturn('ok')
    obj.close()

  def _part_2_verify_stdout(self, exception):
    self.checkstdout(
        ( "Sending crash report ...\n"
          "  args: ['my_test']\n"
          "  cwd: /tmp/asdf\n"
          "  exception: %s\n"
          "  host: bozo\n"
          "  stack: bar\n"
          "  user: georges\n"
          "  version: random python\n"
          "ok\n") % exception)

  def _check(self, obj, result):
    self._part_1_setup_mocks(result)
    self.mox.ReplayAll()
    breakpad.SendStack(obj, 'bar')
    self._part_2_verify_stdout(result)

  def testSendBase(self):
    self._check('foo', 'foo')

  def testSendReprThrows(self):
    class Throws(object):
      def __repr__(self):
        raise NotImplementedError()
      def __str__(self):
        return '[foo]'
    self._check(Throws(), '[foo]')

  def testSendStrThrows(self):
    class Throws(object):
      def __repr__(self):
        return '[foo]'
      def __str__(self):
        raise NotImplementedError()
    self._check(Throws(), '[foo]')

  def testSendBoth(self):
    class Both(object):
      def __repr__(self):
        return '[foo]'
      def __str__(self):
        return '[bar]'
    self._check(Both(), '[bar]')

  def testSendException(self):
    obj = Exception('foo')
    obj.msg = 'a message'
    self._check(obj, 'foo\nMsg: a message')



if __name__ == '__main__':
  import unittest
  unittest.main()

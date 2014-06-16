# Copyright (c) 2011 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import inspect
import unittest


class OrderedDict(object):
  """Incomplete and inefficient implementation of collections.OrderedDict."""
  def __init__(self):
    self._keys = []

  def setdefault(self, key, value):
    try:
      self._getindex(key)
    except KeyError:
      self._keys.append((key, value))
    return self[key]

  def _getindex(self, key):
    for i, v in enumerate(self._keys):
      if v[0] == key:
        return i
    raise KeyError(key)

  def __getitem__(self, key):
    return self._keys[self._getindex(key)][1]

  def iteritems(self):
    for i in self._keys:
      yield i


class AutoStubMixIn(object):
  """Automatically restores stubbed functions on unit test teardDown.

  It's an extremely lightweight mocking class that doesn't require bookeeping.
  """
  _saved = None

  def mock(self, obj, member, mock):
    self._saved = self._saved or OrderedDict()
    old_value = self._saved.setdefault(
        obj, OrderedDict()).setdefault(member, getattr(obj, member))
    setattr(obj, member, mock)
    return old_value

  def tearDown(self):
    """Restore all the mocked members."""
    if self._saved:
      for obj, items in self._saved.iteritems():
        for member, previous_value in items.iteritems():
          setattr(obj, member, previous_value)


class SimpleMock(object):
  """Really simple manual class mock."""
  def __init__(self, unit_test):
    """Do not call __init__ if you want to use the global call list to detect
    ordering across different instances.
    """
    self.calls = []
    self.unit_test = unit_test
    self.assertEqual = unit_test.assertEqual

  def pop_calls(self):
    """Returns the list of calls up to date.

    Good to do self.assertEqual(expected, mock.pop_calls()).
    """
    calls = self.calls
    self.calls = []
    return calls

  def check_calls(self, expected):
    self.assertEqual(expected, self.pop_calls())

  def _register_call(self, *args, **kwargs):
    """Registers the name of the caller function."""
    caller_name = kwargs.pop('caller_name', None) or inspect.stack()[1][3]
    str_args = ', '.join(repr(arg) for arg in args)
    str_kwargs = ', '.join('%s=%r' % (k, v) for k, v in kwargs.iteritems())
    self.calls.append('%s(%s)' % (
        caller_name, ', '.join(filter(None, [str_args, str_kwargs]))))


class TestCase(unittest.TestCase, AutoStubMixIn):
  """Adds python 2.7 functionality."""

  def tearDown(self):
    AutoStubMixIn.tearDown(self)
    unittest.TestCase.tearDown(self)

  def has_failed(self):
    """Returns True if the test has failed."""
    if hasattr(self, '_exc_info'):
      # Only present in python <= 2.6
      # pylint: disable=E1101
      return bool(self._exc_info()[0])

    # Only present in python >= 2.7
    # pylint: disable=E1101
    return not self._resultForDoCleanups.wasSuccessful()

  def assertIs(self, expr1, expr2, msg=None):
    if hasattr(super(TestCase, self), 'assertIs'):
      return super(TestCase, self).assertIs(expr1, expr2, msg)
    if expr1 is not expr2:
      self.fail(msg or '%r is not %r' % (expr1, expr2))

  def assertIsNot(self, expr1, expr2, msg=None):
    if hasattr(super(TestCase, self), 'assertIsNot'):
      return super(TestCase, self).assertIsNot(expr1, expr2, msg)
    if expr1 is expr2:
      self.fail(msg or 'unexpectedly identical: %r' % expr1)

  def assertIn(self, expr1, expr2, msg=None):
    if hasattr(super(TestCase, self), 'assertIn'):
      return super(TestCase, self).assertIn(expr1, expr2, msg)
    if expr1 not in expr2:
      self.fail(msg or '%r not in %r' % (expr1, expr2))

  def assertLess(self, a, b, msg=None):
    if hasattr(super(TestCase, self), 'assertLess'):
      return super(TestCase, self).assertLess(a, b, msg)
    if not a < b:
      self.fail(msg or '%r not less than %r' % (a, b))

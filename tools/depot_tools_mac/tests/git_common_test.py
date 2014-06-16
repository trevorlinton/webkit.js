#!/usr/bin/env python
# Copyright 2013 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

"""Unit tests for git_common.py"""

import binascii
import collections
import os
import signal
import sys
import tempfile
import time
import unittest

DEPOT_TOOLS_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, DEPOT_TOOLS_ROOT)

from testing_support import coverage_utils
from testing_support import git_test_utils


class GitCommonTestBase(unittest.TestCase):
  @classmethod
  def setUpClass(cls):
    super(GitCommonTestBase, cls).setUpClass()
    import git_common
    cls.gc = git_common
    cls.gc.TEST_MODE = True


class Support(GitCommonTestBase):
  def _testMemoizeOneBody(self, threadsafe):
    calls = collections.defaultdict(int)
    def double_if_even(val):
      calls[val] += 1
      return val * 2 if val % 2 == 0 else None
    # Use this explicitly as a wrapper fn instead of a decorator. Otherwise
    # pylint crashes (!!)
    double_if_even = self.gc.memoize_one(threadsafe=threadsafe)(double_if_even)

    self.assertEqual(4, double_if_even(2))
    self.assertEqual(4, double_if_even(2))
    self.assertEqual(None, double_if_even(1))
    self.assertEqual(None, double_if_even(1))
    self.assertDictEqual({1: 2, 2: 1}, calls)

    double_if_even.set(10, 20)
    self.assertEqual(20, double_if_even(10))
    self.assertDictEqual({1: 2, 2: 1}, calls)

    double_if_even.clear()
    self.assertEqual(4, double_if_even(2))
    self.assertEqual(4, double_if_even(2))
    self.assertEqual(None, double_if_even(1))
    self.assertEqual(None, double_if_even(1))
    self.assertEqual(20, double_if_even(10))
    self.assertDictEqual({1: 4, 2: 2, 10: 1}, calls)

  def testMemoizeOne(self):
    self._testMemoizeOneBody(threadsafe=False)

  def testMemoizeOneThreadsafe(self):
    self._testMemoizeOneBody(threadsafe=True)

  def testOnce(self):
    testlist = []

    # This works around a bug in pylint
    once = self.gc.once

    @once
    def add_to_list():
      testlist.append('dog')

    add_to_list()
    add_to_list()
    add_to_list()
    add_to_list()

    self.assertEquals(testlist, ['dog'])


def slow_square(i):
  """Helper for ScopedPoolTest.

  Must be global because non top-level functions aren't pickleable.
  """
  return i ** 2


class ScopedPoolTest(GitCommonTestBase):
  CTRL_C = signal.CTRL_C_EVENT if sys.platform == 'win32' else signal.SIGINT

  def testThreads(self):
    result = []
    with self.gc.ScopedPool(kind='threads') as pool:
      result = list(pool.imap(slow_square, xrange(10)))
    self.assertEqual([0, 1, 4, 9, 16, 25, 36, 49, 64, 81], result)

  def testThreadsCtrlC(self):
    result = []
    with self.assertRaises(KeyboardInterrupt):
      with self.gc.ScopedPool(kind='threads') as pool:
        # Make sure this pool is interrupted in mid-swing
        for i in pool.imap(slow_square, xrange(20)):
          if i > 32:
            os.kill(os.getpid(), self.CTRL_C)
          result.append(i)
    self.assertEqual([0, 1, 4, 9, 16, 25], result)

  def testProcs(self):
    result = []
    with self.gc.ScopedPool() as pool:
      result = list(pool.imap(slow_square, xrange(10)))
    self.assertEqual([0, 1, 4, 9, 16, 25, 36, 49, 64, 81], result)

  def testProcsCtrlC(self):
    result = []
    with self.assertRaises(KeyboardInterrupt):
      with self.gc.ScopedPool() as pool:
        # Make sure this pool is interrupted in mid-swing
        for i in pool.imap(slow_square, xrange(20)):
          if i > 32:
            os.kill(os.getpid(), self.CTRL_C)
          result.append(i)
    self.assertEqual([0, 1, 4, 9, 16, 25], result)


class ProgressPrinterTest(GitCommonTestBase):
  class FakeStream(object):
    def __init__(self):
      self.data = set()
      self.count = 0

    def write(self, line):
      self.data.add(line)

    def flush(self):
      self.count += 1

  @unittest.expectedFailure
  def testBasic(self):
    """This test is probably racy, but I don't have a better alternative."""
    fmt = '%(count)d/10'
    stream = self.FakeStream()

    pp = self.gc.ProgressPrinter(fmt, enabled=True, fout=stream, period=0.01)
    with pp as inc:
      for _ in xrange(10):
        time.sleep(0.02)
        inc()

    filtered = {x.strip() for x in stream.data}
    rslt = {fmt % {'count': i} for i in xrange(11)}
    self.assertSetEqual(filtered, rslt)
    self.assertGreaterEqual(stream.count, 10)


class GitReadOnlyFunctionsTest(git_test_utils.GitRepoReadOnlyTestBase,
                               GitCommonTestBase):
  REPO_SCHEMA = """
  A B C D
    B E D
  """

  COMMIT_A = {
    'some/files/file1': {'data': 'file1'},
    'some/files/file2': {'data': 'file2'},
    'some/files/file3': {'data': 'file3'},
    'some/other/file':  {'data': 'otherfile'},
  }

  COMMIT_C = {
    'some/files/file2': {
      'mode': 0755,
      'data': 'file2 - vanilla'},
  }

  COMMIT_E = {
    'some/files/file2': {'data': 'file2 - merged'},
  }

  COMMIT_D = {
    'some/files/file2': {'data': 'file2 - vanilla\nfile2 - merged'},
  }

  def testHashes(self):
    ret = self.repo.run(
      self.gc.hash_multi, *[
        'master',
        'master~3',
        self.repo['E']+'~',
        self.repo['D']+'^2',
        'tag_C^{}',
      ]
    )
    self.assertEqual([
      self.repo['D'],
      self.repo['A'],
      self.repo['B'],
      self.repo['E'],
      self.repo['C'],
    ], ret)
    self.assertEquals(
      self.repo.run(self.gc.hash_one, 'branch_D'),
      self.repo['D']
    )

  def testStream(self):
    items = set(self.repo.commit_map.itervalues())

    def testfn():
      for line in self.gc.run_stream('log', '--format=%H').xreadlines():
        line = line.strip()
        self.assertIn(line, items)
        items.remove(line)

    self.repo.run(testfn)

  def testCurrentBranch(self):
    def cur_branch_out_of_git():
      os.chdir('..')
      return self.gc.current_branch()
    self.assertIsNone(self.repo.run(cur_branch_out_of_git))

    self.repo.git('checkout', 'branch_D')
    self.assertEqual(self.repo.run(self.gc.current_branch), 'branch_D')

  def testBranches(self):
    self.assertEqual(self.repo.run(set, self.gc.branches()),
                     {'master', 'branch_D', 'root_A'})

  def testDormant(self):
    self.assertFalse(self.repo.run(self.gc.is_dormant, 'master'))
    self.repo.git('config', 'branch.master.dormant', 'true')
    self.assertTrue(self.repo.run(self.gc.is_dormant, 'master'))

  def testParseCommitrefs(self):
    ret = self.repo.run(
      self.gc.parse_commitrefs, *[
        'master',
        'master~3',
        self.repo['E']+'~',
        self.repo['D']+'^2',
        'tag_C^{}',
      ]
    )
    self.assertEqual(ret, map(binascii.unhexlify, [
      self.repo['D'],
      self.repo['A'],
      self.repo['B'],
      self.repo['E'],
      self.repo['C'],
    ]))

    with self.assertRaisesRegexp(Exception, r"one of \('master', 'bananas'\)"):
      self.repo.run(self.gc.parse_commitrefs, 'master', 'bananas')

  def testTags(self):
    self.assertEqual(set(self.repo.run(self.gc.tags)),
                     {'tag_'+l for l in 'ABCDE'})

  def testTree(self):
    tree = self.repo.run(self.gc.tree, 'master:some/files')
    file1 = self.COMMIT_A['some/files/file1']['data']
    file2 = self.COMMIT_D['some/files/file2']['data']
    file3 = self.COMMIT_A['some/files/file3']['data']
    self.assertEquals(
        tree['file1'],
        ('100644', 'blob', git_test_utils.git_hash_data(file1)))
    self.assertEquals(
        tree['file2'],
        ('100755', 'blob', git_test_utils.git_hash_data(file2)))
    self.assertEquals(
        tree['file3'],
        ('100644', 'blob', git_test_utils.git_hash_data(file3)))

    tree = self.repo.run(self.gc.tree, 'master:some')
    self.assertEquals(len(tree), 2)
    # Don't check the tree hash because we're lazy :)
    self.assertEquals(tree['files'][:2], ('040000', 'tree'))

    tree = self.repo.run(self.gc.tree, 'master:wat')
    self.assertEqual(tree, None)

  def testTreeRecursive(self):
    tree = self.repo.run(self.gc.tree, 'master:some', recurse=True)
    file1 = self.COMMIT_A['some/files/file1']['data']
    file2 = self.COMMIT_D['some/files/file2']['data']
    file3 = self.COMMIT_A['some/files/file3']['data']
    other = self.COMMIT_A['some/other/file']['data']
    self.assertEquals(
        tree['files/file1'],
        ('100644', 'blob', git_test_utils.git_hash_data(file1)))
    self.assertEquals(
        tree['files/file2'],
        ('100755', 'blob', git_test_utils.git_hash_data(file2)))
    self.assertEquals(
        tree['files/file3'],
        ('100644', 'blob', git_test_utils.git_hash_data(file3)))
    self.assertEquals(
        tree['other/file'],
        ('100644', 'blob', git_test_utils.git_hash_data(other)))


class GitMutableFunctionsTest(git_test_utils.GitRepoReadWriteTestBase,
                              GitCommonTestBase):
  REPO_SCHEMA = ''

  def _intern_data(self, data):
    with tempfile.TemporaryFile() as f:
      f.write(data)
      f.seek(0)
      return self.repo.run(self.gc.intern_f, f)

  def testInternF(self):
    data = 'CoolBobcatsBro'
    data_hash = self._intern_data(data)
    self.assertEquals(git_test_utils.git_hash_data(data), data_hash)
    self.assertEquals(data, self.repo.git('cat-file', 'blob', data_hash).stdout)

  def testMkTree(self):
    tree = {}
    for i in 1, 2, 3:
      name = 'file%d' % i
      tree[name] = ('100644', 'blob', self._intern_data(name))
    tree_hash = self.repo.run(self.gc.mktree, tree)
    self.assertEquals('37b61866d6e061c4ba478e7eb525be7b5752737d', tree_hash)

  def testConfig(self):
    self.repo.git('config', '--add', 'happy.derpies', 'food')
    self.assertEquals(self.repo.run(self.gc.config_list, 'happy.derpies'),
                      ['food'])
    self.assertEquals(self.repo.run(self.gc.config_list, 'sad.derpies'), [])

    self.repo.git('config', '--add', 'happy.derpies', 'cat')
    self.assertEquals(self.repo.run(self.gc.config_list, 'happy.derpies'),
                      ['food', 'cat'])

    self.assertEquals('cat', self.repo.run(self.gc.config, 'dude.bob', 'cat'))

    self.repo.run(self.gc.set_config, 'dude.bob', 'dog')

    self.assertEquals('dog', self.repo.run(self.gc.config, 'dude.bob', 'cat'))

    self.repo.run(self.gc.del_config, 'dude.bob')

    # This should work without raising an exception
    self.repo.run(self.gc.del_config, 'dude.bob')

    self.assertEquals('cat', self.repo.run(self.gc.config, 'dude.bob', 'cat'))

    self.assertEquals('origin/master', self.repo.run(self.gc.root))

    self.repo.git('config', 'depot-tools.upstream', 'catfood')

    self.assertEquals('catfood', self.repo.run(self.gc.root))

  def testUpstream(self):
    self.repo.git('commit', '--allow-empty', '-am', 'foooooo')
    self.assertEquals(self.repo.run(self.gc.upstream, 'bobly'), None)
    self.assertEquals(self.repo.run(self.gc.upstream, 'master'), None)
    self.repo.git('checkout', '-tb', 'happybranch', 'master')
    self.assertEquals(self.repo.run(self.gc.upstream, 'happybranch'),
                      'master')


class GitMutableStructuredTest(git_test_utils.GitRepoReadWriteTestBase,
                               GitCommonTestBase):
  REPO_SCHEMA = """
  A B C D E F G
    B H I J K
          J L

  X Y Z
  """

  COMMIT_B = {'file': {'data': 'B'}}
  COMMIT_H = {'file': {'data': 'H'}}
  COMMIT_I = {'file': {'data': 'I'}}
  COMMIT_J = {'file': {'data': 'J'}}
  COMMIT_K = {'file': {'data': 'K'}}
  COMMIT_L = {'file': {'data': 'L'}}

  def setUp(self):
    super(GitMutableStructuredTest, self).setUp()
    self.repo.git('branch', '--set-upstream-to', 'root_X', 'branch_Z')
    self.repo.git('branch', '--set-upstream-to', 'branch_G', 'branch_K')
    self.repo.git('branch', '--set-upstream-to', 'branch_K', 'branch_L')
    self.repo.git('branch', '--set-upstream-to', 'root_A', 'branch_G')
    self.repo.git('branch', '--set-upstream-to', 'root_X', 'root_A')

  def testMergeBase(self):
    self.repo.git('checkout', 'branch_K')

    self.assertEqual(
      self.repo['B'],
      self.repo.run(self.gc.get_or_create_merge_base, 'branch_K', 'branch_G')
    )

    self.assertEqual(
      self.repo['J'],
      self.repo.run(self.gc.get_or_create_merge_base, 'branch_L', 'branch_K')
    )

    self.assertEqual(
      self.repo['B'], self.repo.run(self.gc.config, 'branch.branch_K.base')
    )

    # deadbeef is a bad hash, so this will result in repo['B']
    self.repo.run(self.gc.manual_merge_base, 'branch_K', 'deadbeef')

    self.assertEqual(
      self.repo['B'],
      self.repo.run(self.gc.get_or_create_merge_base, 'branch_K', 'branch_G')
    )

    # but if we pick a real ancestor, then it'll work
    self.repo.run(self.gc.manual_merge_base, 'branch_K', self.repo['I'])

    self.assertEqual(
      self.repo['I'],
      self.repo.run(self.gc.get_or_create_merge_base, 'branch_K', 'branch_G')
    )

    self.assertEqual({'branch_K': self.repo['I'], 'branch_L': self.repo['J']},
                     self.repo.run(self.gc.branch_config_map, 'base'))

    self.repo.run(self.gc.remove_merge_base, 'branch_K')
    self.repo.run(self.gc.remove_merge_base, 'branch_L')

    self.assertEqual(None,
                     self.repo.run(self.gc.config, 'branch.branch_K.base'))

    self.assertEqual({}, self.repo.run(self.gc.branch_config_map, 'base'))

    # if it's too old, then it caps at merge-base
    self.repo.run(self.gc.manual_merge_base, 'branch_K', self.repo['A'])

    self.assertEqual(
      self.repo['B'],
      self.repo.run(self.gc.get_or_create_merge_base, 'branch_K', 'branch_G')
    )

  def testGetBranchTree(self):
    skipped, tree = self.repo.run(self.gc.get_branch_tree)
    self.assertEqual(skipped, {'master', 'root_X'})
    self.assertEqual(tree, {
      'branch_G': 'root_A',
      'root_A': 'root_X',
      'branch_K': 'branch_G',
      'branch_L': 'branch_K',
      'branch_Z': 'root_X'
    })

    topdown = list(self.gc.topo_iter(tree))
    bottomup = list(self.gc.topo_iter(tree, top_down=False))

    self.assertEqual(topdown, [
      ('branch_Z', 'root_X'),
      ('root_A', 'root_X'),
      ('branch_G', 'root_A'),
      ('branch_K', 'branch_G'),
      ('branch_L', 'branch_K'),
    ])

    self.assertEqual(bottomup, [
      ('branch_L', 'branch_K'),
      ('branch_Z', 'root_X'),
      ('branch_K', 'branch_G'),
      ('branch_G', 'root_A'),
      ('root_A', 'root_X'),
    ])

  def testSquashBranch(self):
    self.repo.git('checkout', 'branch_K')

    self.repo.run(self.gc.squash_current_branch, 'cool message')

    lines = ['cool message', '']
    for l in 'HIJK':
      lines.extend((self.repo[l], l, ''))
    lines.pop()
    msg = '\n'.join(lines)

    self.assertEquals(self.repo.run(self.gc.run, 'log', '-n1', '--format=%B'),
                      msg)

    self.assertEquals(
      self.repo.git('cat-file', 'blob', 'branch_K:file').stdout,
      'K'
    )

  def testRebase(self):
    self.assertSchema("""
    A B C D E F G
      B H I J K
            J L

    X Y Z
    """)

    rslt = self.repo.run(
      self.gc.rebase, 'branch_G', 'branch_K~4', 'branch_K')
    self.assertTrue(rslt.success)

    self.assertSchema("""
    A B C D E F G H I J K
      B H I J L

    X Y Z
    """)

    rslt = self.repo.run(
      self.gc.rebase, 'branch_K', 'branch_L~1', 'branch_L', abort=True)
    self.assertFalse(rslt.success)

    self.assertFalse(self.repo.run(self.gc.in_rebase))

    rslt = self.repo.run(
      self.gc.rebase, 'branch_K', 'branch_L~1', 'branch_L', abort=False)
    self.assertFalse(rslt.success)

    self.assertTrue(self.repo.run(self.gc.in_rebase))

    self.assertEqual(self.repo.git('status', '--porcelain').stdout, 'UU file\n')
    self.repo.git('checkout', '--theirs', 'file')
    self.repo.git('add', 'file')
    self.repo.git('rebase', '--continue')

    self.assertSchema("""
    A B C D E F G H I J K L

    X Y Z
    """)


class GitFreezeThaw(git_test_utils.GitRepoReadWriteTestBase):
  @classmethod
  def setUpClass(cls):
    super(GitFreezeThaw, cls).setUpClass()
    import git_common
    cls.gc = git_common
    cls.gc.TEST_MODE = True

  REPO_SCHEMA = """
  A B C D
    B E D
  """

  COMMIT_A = {
    'some/files/file1': {'data': 'file1'},
    'some/files/file2': {'data': 'file2'},
    'some/files/file3': {'data': 'file3'},
    'some/other/file':  {'data': 'otherfile'},
  }

  COMMIT_C = {
    'some/files/file2': {
      'mode': 0755,
      'data': 'file2 - vanilla'},
  }

  COMMIT_E = {
    'some/files/file2': {'data': 'file2 - merged'},
  }

  COMMIT_D = {
    'some/files/file2': {'data': 'file2 - vanilla\nfile2 - merged'},
  }

  def testNothing(self):
    self.assertIsNotNone(self.repo.run(self.gc.thaw))  # 'Nothing to thaw'
    self.assertIsNotNone(self.repo.run(self.gc.freeze))  # 'Nothing to freeze'

  def testAll(self):
    def inner():
      with open('some/files/file2', 'a') as f2:
        print >> f2, 'cool appended line'
      os.mkdir('some/other_files')
      with open('some/other_files/subdir_file', 'w') as f3:
        print >> f3, 'new file!'
      with open('some/files/file5', 'w') as f5:
        print >> f5, 'New file!1!one!'

      STATUS_1 = '\n'.join((
        ' M some/files/file2',
        'A  some/files/file5',
        '?? some/other_files/'
      )) + '\n'

      self.repo.git('add', 'some/files/file5')

      # Freeze group 1
      self.assertEquals(self.repo.git('status', '--porcelain').stdout, STATUS_1)
      self.assertIsNone(self.gc.freeze())
      self.assertEquals(self.repo.git('status', '--porcelain').stdout, '')

      # Freeze group 2
      with open('some/files/file2', 'a') as f2:
        print >> f2, 'new! appended line!'
      self.assertEquals(self.repo.git('status', '--porcelain').stdout,
                        ' M some/files/file2\n')
      self.assertIsNone(self.gc.freeze())
      self.assertEquals(self.repo.git('status', '--porcelain').stdout, '')

      # Thaw it out!
      self.assertIsNone(self.gc.thaw())
      self.assertIsNotNone(self.gc.thaw())  # One thaw should thaw everything

      self.assertEquals(self.repo.git('status', '--porcelain').stdout, STATUS_1)

    self.repo.run(inner)


if __name__ == '__main__':
  sys.exit(coverage_utils.covered_main(
    os.path.join(DEPOT_TOOLS_ROOT, 'git_common.py')
  ))

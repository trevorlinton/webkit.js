#!/usr/bin/env python
# Copyright (c) 2012 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

"""Unit tests for checkout.py."""

import logging
import os
import shutil
import sys
import unittest
from xml.etree import ElementTree

ROOT_DIR = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.dirname(ROOT_DIR))

from testing_support import fake_repos
from testing_support.patches_data import GIT, RAW

import checkout
import patch
import subprocess2


# pass -v to enable it.
DEBUGGING = False

# A patch that will fail to apply.
BAD_PATCH = ''.join(
    [l for l in GIT.PATCH.splitlines(True) if l.strip() != 'e'])


class FakeRepos(fake_repos.FakeReposBase):
  TEST_GIT_REPO = 'repo_1'

  def populateSvn(self):
    """Creates a few revisions of changes files."""
    subprocess2.check_call(
        ['svn', 'checkout', self.svn_base, self.svn_checkout, '-q',
         '--non-interactive', '--no-auth-cache',
         '--username', self.USERS[0][0], '--password', self.USERS[0][1]])
    assert os.path.isdir(os.path.join(self.svn_checkout, '.svn'))
    self._commit_svn(self._svn_tree_1())
    self._commit_svn(self._svn_tree_2())

  def populateGit(self):
    """Creates a few revisions of changes files."""
    self._commit_git(self.TEST_GIT_REPO, self._git_tree())
    # Fix for the remote rejected error. For more details see:
    # http://stackoverflow.com/questions/2816369/git-push-error-remote
    subprocess2.check_output(
        ['git', '--git-dir',
         os.path.join(self.git_root, self.TEST_GIT_REPO, '.git'),
         'config', '--bool', 'core.bare', 'true'])

    assert os.path.isdir(
        os.path.join(self.git_root, self.TEST_GIT_REPO, '.git'))

  @staticmethod
  def _git_tree():
    fs = {}
    fs['origin'] = 'git@1'
    fs['extra'] = 'dummy\n'  # new
    fs['codereview.settings'] = (
        '# Test data\n'
        'bar: pouet\n')
    fs['chrome/file.cc'] = (
        'a\n'
        'bb\n'
        'ccc\n'
        'dd\n'
        'e\n'
        'ff\n'
        'ggg\n'
        'hh\n'
        'i\n'
        'jj\n'
        'kkk\n'
        'll\n'
        'm\n'
        'nn\n'
        'ooo\n'
        'pp\n'
        'q\n')
    fs['chromeos/views/DOMui_menu_widget.h'] = (
      '// Copyright (c) 2010\n'
      '// Use of this source code\n'
      '// found in the LICENSE file.\n'
      '\n'
      '#ifndef DOM\n'
      '#define DOM\n'
      '#pragma once\n'
      '\n'
      '#include <string>\n'
      '#endif\n')
    return fs

  @staticmethod
  def _svn_tree_1():
    fs = {}
    fs['trunk/origin'] = 'svn@1'
    fs['trunk/codereview.settings'] = (
        '# Test data\n'
        'bar: pouet\n')
    fs['trunk/chrome/file.cc'] = (
        'a\n'
        'bb\n'
        'ccc\n'
        'dd\n'
        'e\n'
        'ff\n'
        'ggg\n'
        'hh\n'
        'i\n'
        'jj\n'
        'kkk\n'
        'll\n'
        'm\n'
        'nn\n'
        'ooo\n'
        'pp\n'
        'q\n')
    return fs

  @classmethod
  def _svn_tree_2(cls):
    fs = cls._svn_tree_1()
    fs['trunk/origin'] = 'svn@2\n'
    fs['trunk/extra'] = 'dummy\n'
    fs['trunk/bin_file'] = '\x00'
    fs['trunk/chromeos/views/DOMui_menu_widget.h'] = (
      '// Copyright (c) 2010\n'
      '// Use of this source code\n'
      '// found in the LICENSE file.\n'
      '\n'
      '#ifndef DOM\n'
      '#define DOM\n'
      '#pragma once\n'
      '\n'
      '#include <string>\n'
      '#endif\n')
    return fs


# pylint: disable=R0201
class BaseTest(fake_repos.FakeReposTestBase):
  name = 'foo'
  FAKE_REPOS_CLASS = FakeRepos
  is_read_only = False

  def setUp(self):
    # Need to enforce subversion_config first.
    checkout.SvnMixIn.svn_config_dir = os.path.join(
        ROOT_DIR, 'subversion_config')
    super(BaseTest, self).setUp()
    self._old_call = subprocess2.call
    def redirect_call(args, **kwargs):
      if not DEBUGGING:
        kwargs.setdefault('stdout', subprocess2.PIPE)
        kwargs.setdefault('stderr', subprocess2.STDOUT)
      return self._old_call(args, **kwargs)
    subprocess2.call = redirect_call
    self.usr, self.pwd = self.FAKE_REPOS.USERS[0]
    self.previous_log = None

  def tearDown(self):
    subprocess2.call = self._old_call
    super(BaseTest, self).tearDown()

  def get_patches(self):
    return patch.PatchSet([
        patch.FilePatchDiff('new_dir/subdir/new_file', GIT.NEW_SUBDIR, []),
        patch.FilePatchDiff('chrome/file.cc', GIT.PATCH, []),
        # TODO(maruel): Test with is_new == False.
        patch.FilePatchBinary('bin_file', '\x00', [], is_new=True),
        patch.FilePatchDelete('extra', False),
    ])

  def get_trunk(self, modified):
    raise NotImplementedError()

  def _check_base(self, co, root, expected):
    raise NotImplementedError()

  def _check_exception(self, co, err_msg):
    co.prepare(None)
    try:
      co.apply_patch([patch.FilePatchDiff('chrome/file.cc', BAD_PATCH, [])])
      self.fail()
    except checkout.PatchApplicationFailed, e:
      self.assertEquals(e.filename, 'chrome/file.cc')
      self.assertEquals(e.status, err_msg)

  def _log(self):
    raise NotImplementedError()

  def _test_process(self, co_lambda):
    """Makes sure the process lambda is called correctly."""
    post_processors = [lambda *args: results.append(args)]
    co = co_lambda(post_processors)
    self.assertEquals(post_processors, co.post_processors)
    co.prepare(None)
    ps = self.get_patches()
    results = []
    co.apply_patch(ps)
    expected_co = getattr(co, 'checkout', co)
    # Because of ReadOnlyCheckout.
    expected = [(expected_co, p) for p in ps.patches]
    self.assertEquals(len(expected), len(results))
    self.assertEquals(expected, results)

  def _check_move(self, co):
    """Makes sure file moves are handled correctly."""
    co.prepare(None)
    patchset = patch.PatchSet([
        patch.FilePatchDelete('chromeos/views/DOMui_menu_widget.h', False),
        patch.FilePatchDiff(
          'chromeos/views/webui_menu_widget.h', GIT.RENAME_PARTIAL, []),
    ])
    co.apply_patch(patchset)
    # Make sure chromeos/views/DOMui_menu_widget.h is deleted and
    # chromeos/views/webui_menu_widget.h is correctly created.
    root = os.path.join(self.root_dir, self.name)
    tree = self.get_trunk(False)
    del tree['chromeos/views/DOMui_menu_widget.h']
    tree['chromeos/views/webui_menu_widget.h'] = (
        '// Copyright (c) 2011\n'
        '// Use of this source code\n'
        '// found in the LICENSE file.\n'
        '\n'
        '#ifndef WEB\n'
        '#define WEB\n'
        '#pragma once\n'
        '\n'
        '#include <string>\n'
        '#endif\n')
    #print patchset[0].get()
    #print fake_repos.read_tree(root)
    self.assertTree(tree, root)


class SvnBaseTest(BaseTest):
  def setUp(self):
    super(SvnBaseTest, self).setUp()
    self.enabled = self.FAKE_REPOS.set_up_svn()
    self.assertTrue(self.enabled)
    self.svn_trunk = 'trunk'
    self.svn_url = self.svn_base + self.svn_trunk
    self.previous_log = self._log()

  def _log(self):
    # Don't use the local checkout in case of caching incorrency.
    out = subprocess2.check_output(
        ['svn', 'log', self.svn_url,
         '--non-interactive', '--no-auth-cache',
         '--username', self.usr, '--password', self.pwd,
         '--with-all-revprops', '--xml',
         '--limit', '1'])
    logentry = ElementTree.XML(out).find('logentry')
    if logentry == None:
      return {'revision': 0}
    data = {
        'revision': int(logentry.attrib['revision']),
    }
    def set_item(name):
      item = logentry.find(name)
      if item != None:
        data[name] = item.text
    set_item('author')
    set_item('msg')
    revprops = logentry.find('revprops')
    if revprops != None:
      data['revprops'] = []
      for prop in revprops.getiterator('property'):
        data['revprops'].append((prop.attrib['name'], prop.text))
    return data

  def _check_base(self, co, root, expected):
    read_only = isinstance(co, checkout.ReadOnlyCheckout)
    self.assertEquals(not read_only, bool(expected))
    self.assertEquals(read_only, self.is_read_only)
    if not read_only:
      self.FAKE_REPOS.svn_dirty = True

    self.assertEquals(root, co.project_path)
    svn_rev = co.prepare(None)
    self.assertEquals(int, type(svn_rev))
    self.assertEquals(self.previous_log['revision'], svn_rev)
    self.assertEquals('pouet', co.get_settings('bar'))
    self.assertTree(self.get_trunk(False), root)
    patches = self.get_patches()
    co.apply_patch(patches)
    self.assertEquals(
        ['bin_file', 'chrome/file.cc', 'new_dir/subdir/new_file', 'extra'],
        patches.filenames)

    # Verify that the patch is applied even for read only checkout.
    self.assertTree(self.get_trunk(True), root)
    fake_author = self.FAKE_REPOS.USERS[1][0]
    revision = co.commit(u'msg', fake_author)
    # Nothing changed.
    self.assertTree(self.get_trunk(True), root)

    if read_only:
      self.assertEquals('FAKE', revision)
      self.assertEquals(self.previous_log['revision'], co.prepare(None))
      # Changes should be reverted now.
      self.assertTree(self.get_trunk(False), root)
      expected = self.previous_log
    else:
      self.assertEquals(self.previous_log['revision'] + 1, revision)
      self.assertEquals(self.previous_log['revision'] + 1, co.prepare(None))
      self.assertTree(self.get_trunk(True), root)
      expected = expected.copy()
      expected['msg'] = 'msg'
      expected['revision'] = self.previous_log['revision'] + 1
      expected.setdefault('author', fake_author)

    actual = self._log()
    self.assertEquals(expected, actual)

  def _test_prepare(self, co):
    self.assertEquals(1, co.prepare(1))

  def get_trunk(self, modified):
    tree = {}
    subroot = 'trunk/'
    for k, v in self.FAKE_REPOS.svn_revs[-1].iteritems():
      if k.startswith(subroot):
        f = k[len(subroot):]
        assert f not in tree
        tree[f] = v

    if modified:
      content_lines = tree['chrome/file.cc'].splitlines(True)
      tree['chrome/file.cc'] = ''.join(
          content_lines[0:5] + ['FOO!\n'] + content_lines[5:])
      del tree['extra']
      tree['new_dir/subdir/new_file'] = 'A new file\nshould exist.\n'
    return tree


class GitBaseTest(BaseTest):
  def setUp(self):
    super(GitBaseTest, self).setUp()
    self.enabled = self.FAKE_REPOS.set_up_git()
    self.assertTrue(self.enabled)
    self.previous_log = self._log()

  # pylint: disable=W0221
  def _log(self, log_from_local_repo=False):
    if log_from_local_repo:
      repo_root = os.path.join(self.root_dir, self.name)
    else:
      repo_root = os.path.join(self.FAKE_REPOS.git_root,
                               self.FAKE_REPOS.TEST_GIT_REPO)
    out = subprocess2.check_output(
        ['git',
         '--git-dir',
         os.path.join(repo_root, '.git'),
         'log', '--pretty=format:"%H%x09%ae%x09%ad%x09%s"',
         '--max-count=1']).strip('"')
    if out and len(out.split()) != 0:
      revision = out.split()[0]
    else:
      return {'revision': 0}

    return {
        'revision': revision,
        'author': out.split()[1],
        'msg': out.split()[-1],
    }

  def _check_base(self, co, root, expected):
    read_only = isinstance(co, checkout.ReadOnlyCheckout)
    self.assertEquals(read_only, self.is_read_only)
    if not read_only:
      self.FAKE_REPOS.git_dirty = True

    self.assertEquals(root, co.project_path)
    git_rev = co.prepare(None)
    self.assertEquals(unicode, type(git_rev))
    self.assertEquals(self.previous_log['revision'], git_rev)
    self.assertEquals('pouet', co.get_settings('bar'))
    self.assertTree(self.get_trunk(False), root)
    patches = self.get_patches()
    co.apply_patch(patches)
    self.assertEquals(
        ['bin_file', 'chrome/file.cc', 'new_dir/subdir/new_file', 'extra'],
        patches.filenames)

    # Hackish to verify _branches() internal function.
    # pylint: disable=W0212
    self.assertEquals(
        (['master', 'working_branch'], 'working_branch'),
        co._branches())

    # Verify that the patch is applied even for read only checkout.
    self.assertTree(self.get_trunk(True), root)
    fake_author = self.FAKE_REPOS.USERS[1][0]
    revision = co.commit(u'msg', fake_author)
    # Nothing changed.
    self.assertTree(self.get_trunk(True), root)

    if read_only:
      self.assertEquals('FAKE', revision)
      self.assertEquals(self.previous_log['revision'], co.prepare(None))
      # Changes should be reverted now.
      self.assertTree(self.get_trunk(False), root)
      expected = self.previous_log
    else:
      self.assertEquals(self._log()['revision'], revision)
      self.assertEquals(self._log()['revision'], co.prepare(None))
      self.assertTree(self.get_trunk(True), root)
      expected = self._log()

    actual = self._log(log_from_local_repo=True)
    self.assertEquals(expected, actual)

  def get_trunk(self, modified):
    tree = {}
    for k, v in self.FAKE_REPOS.git_hashes[
        self.FAKE_REPOS.TEST_GIT_REPO][1][1].iteritems():
      assert k not in tree
      tree[k] = v 

    if modified:
      content_lines = tree['chrome/file.cc'].splitlines(True)
      tree['chrome/file.cc'] = ''.join(
          content_lines[0:5] + ['FOO!\n'] + content_lines[5:])
      tree['bin_file'] = '\x00'
      del tree['extra']
      tree['new_dir/subdir/new_file'] = 'A new file\nshould exist.\n'
    return tree

  def _test_prepare(self, co):
    print co.prepare(None)


class GitCheckout(GitBaseTest):
  def _get_co(self, post_processors):
    self.assertNotEqual(False, post_processors)
    return checkout.GitCheckout(
      root_dir=self.root_dir,
      project_name=self.name,
      remote_branch='master',
      git_url=os.path.join(self.FAKE_REPOS.git_root,
                           self.FAKE_REPOS.TEST_GIT_REPO),
      commit_user=self.usr,
      post_processors=post_processors)

  def testAll(self):
    root = os.path.join(self.root_dir, self.name)
    self._check_base(self._get_co(None), root, None)

  def testException(self):
    self._check_exception(
        self._get_co(None),
        'While running git apply --index -p1;\n  fatal: corrupt patch at line '
        '12\n')

  def testProcess(self):
    self._test_process(self._get_co)

  def _testPrepare(self):
    self._test_prepare(self._get_co(None))

  def testMove(self):
    co = self._get_co(None)
    self._check_move(co)
    out = subprocess2.check_output(
        ['git', 'diff', 'HEAD~', '--name-status'], cwd=co.project_path)
    out = sorted(out.splitlines())
    expected = sorted(
      [
        'A\tchromeos/views/webui_menu_widget.h',
        'D\tchromeos/views/DOMui_menu_widget.h',
      ])
    self.assertEquals(expected, out)


class SvnCheckout(SvnBaseTest):
  def _get_co(self, post_processors):
    self.assertNotEqual(False, post_processors)
    return checkout.SvnCheckout(
        self.root_dir, self.name, self.usr, self.pwd, self.svn_url,
        post_processors)

  def testAll(self):
    expected = {
        'author': self.FAKE_REPOS.USERS[0][0],
        'revprops': [('realauthor', self.FAKE_REPOS.USERS[1][0])]
    }
    root = os.path.join(self.root_dir, self.name)
    self._check_base(self._get_co(None), root, expected)

  def testException(self):
    self._check_exception(
        self._get_co(None),
        'While running patch -p1 --forward --force --no-backup-if-mismatch;\n'
        '  patching file chrome/file.cc\n'
        '  Hunk #1 FAILED at 3.\n'
        '  1 out of 1 hunk FAILED -- saving rejects to file '
        'chrome/file.cc.rej\n')

  def testSvnProps(self):
    co = self._get_co(None)
    co.prepare(None)
    try:
      # svn:ignore can only be applied to directories.
      svn_props = [('svn:ignore', 'foo')]
      co.apply_patch(
          [patch.FilePatchDiff('chrome/file.cc', RAW.PATCH, svn_props)])
      self.fail()
    except checkout.PatchApplicationFailed, e:
      self.assertEquals(e.filename, 'chrome/file.cc')
      self.assertEquals(
          e.status,
          'While running svn propset svn:ignore foo chrome/file.cc '
          '--non-interactive;\n'
          '  patching file chrome/file.cc\n'
          '  svn: Cannot set \'svn:ignore\' on a file (\'chrome/file.cc\')\n')
    co.prepare(None)
    svn_props = [('svn:eol-style', 'LF'), ('foo', 'bar')]
    co.apply_patch(
        [patch.FilePatchDiff('chrome/file.cc', RAW.PATCH, svn_props)])
    filepath = os.path.join(self.root_dir, self.name, 'chrome/file.cc')
    # Manually verify the properties.
    props = subprocess2.check_output(
        ['svn', 'proplist', filepath],
        cwd=self.root_dir).splitlines()[1:]
    props = sorted(p.strip() for p in props)
    expected_props = dict(svn_props)
    self.assertEquals(sorted(expected_props.iterkeys()), props)
    for k, v in expected_props.iteritems():
      value = subprocess2.check_output(
        ['svn', 'propget', '--strict', k, filepath],
        cwd=self.root_dir).strip()
      self.assertEquals(v, value)

  def testWithRevPropsSupport(self):
    # Add the hook that will commit in a way that removes the race condition.
    hook = os.path.join(self.FAKE_REPOS.svn_repo, 'hooks', 'pre-commit')
    shutil.copyfile(os.path.join(ROOT_DIR, 'sample_pre_commit_hook'), hook)
    os.chmod(hook, 0755)
    expected = {
        'revprops': [('commit-bot', 'user1@example.com')],
    }
    root = os.path.join(self.root_dir, self.name)
    self._check_base(self._get_co(None), root, expected)

  def testWithRevPropsSupportNotCommitBot(self):
    # Add the hook that will commit in a way that removes the race condition.
    hook = os.path.join(self.FAKE_REPOS.svn_repo, 'hooks', 'pre-commit')
    shutil.copyfile(os.path.join(ROOT_DIR, 'sample_pre_commit_hook'), hook)
    os.chmod(hook, 0755)
    co = checkout.SvnCheckout(
        self.root_dir, self.name,
        self.FAKE_REPOS.USERS[1][0], self.FAKE_REPOS.USERS[1][1],
        self.svn_url)
    root = os.path.join(self.root_dir, self.name)
    expected = {
        'author': self.FAKE_REPOS.USERS[1][0],
    }
    self._check_base(co, root, expected)

  def testAutoProps(self):
    co = self._get_co(None)
    co.svn_config = checkout.SvnConfig(
        os.path.join(ROOT_DIR, 'subversion_config'))
    co.prepare(None)
    patches = self.get_patches()
    co.apply_patch(patches)
    self.assertEquals(
        ['bin_file', 'chrome/file.cc', 'new_dir/subdir/new_file', 'extra'],
        patches.filenames)
    # *.txt = svn:eol-style=LF in subversion_config/config.
    out = subprocess2.check_output(
        ['svn', 'pget', 'svn:eol-style', 'chrome/file.cc'],
        cwd=co.project_path)
    self.assertEquals('LF\n', out)

  def testProcess(self):
    self._test_process(self._get_co)

  def testPrepare(self):
    self._test_prepare(self._get_co(None))

  def testMove(self):
    co = self._get_co(None)
    self._check_move(co)
    out = subprocess2.check_output(
        ['svn', 'status'], cwd=co.project_path)
    out = sorted(out.splitlines())
    expected = sorted(
      [
        'A  +    chromeos/views/webui_menu_widget.h',
        'D       chromeos/views/DOMui_menu_widget.h',
      ])
    self.assertEquals(expected, out)
    # Make sure ancestry is what is expected;
    env = os.environ.copy()
    env['LANGUAGE'] = 'en_US.UTF-8'
    out = subprocess2.check_output(
        ['svn', 'info', 'chromeos/views/webui_menu_widget.h'],
        cwd=co.project_path,
        env=env)
    values = dict(l.split(': ', 1) for l in out.splitlines() if l)
    expected = {
      'Checksum': '65837bb3da662c8fa88a4a50940ea7c6',
      'Copied From Rev': '2',
      'Copied From URL':
          '%strunk/chromeos/views/DOMui_menu_widget.h' % self.svn_base,
      'Name': 'webui_menu_widget.h',
      'Node Kind': 'file',
      'Path': 'chromeos/views/webui_menu_widget.h',
      'Repository Root': '%s' % self.svn_base.rstrip('/'),
      'Revision': '2',
      'Schedule': 'add',
      'URL': '%strunk/chromeos/views/webui_menu_widget.h' % self.svn_base,
    }
    self.assertEquals(expected, values)


class RawCheckout(SvnBaseTest):
  def setUp(self):
    super(RawCheckout, self).setUp()
    # Use a svn checkout as the base.
    self.base_co = checkout.SvnCheckout(
        self.root_dir, self.name, None, None, self.svn_url)
    self.base_co.prepare(None)

  def _get_co(self, post_processors):
    self.assertNotEqual(False, post_processors)
    return checkout.RawCheckout(self.root_dir, self.name, post_processors)

  def testAll(self):
    # Can't use self._check_base() since it's too different.
    root = os.path.join(self.root_dir, self.name)
    co = self._get_co(None)

    # A copy of BaseTest._check_base()
    self.assertEquals(root, co.project_path)
    self.assertEquals(None, co.prepare(None))
    self.assertEquals('pouet', co.get_settings('bar'))
    self.assertTree(self.get_trunk(False), root)
    patches = self.get_patches()
    co.apply_patch(patches)
    self.assertEquals(
        ['bin_file', 'chrome/file.cc', 'new_dir/subdir/new_file', 'extra'],
        patches.filenames)

    # Verify that the patch is applied even for read only checkout.
    self.assertTree(self.get_trunk(True), root)
    try:
      co.commit(u'msg', self.FAKE_REPOS.USERS[1][0])
      self.fail()
    except NotImplementedError:
      pass
    self.assertTree(self.get_trunk(True), root)
    # Verify that prepare() is a no-op.
    self.assertEquals(None, co.prepare(None))
    self.assertTree(self.get_trunk(True), root)

  def testException(self):
    self._check_exception(
        self._get_co(None),
        'While running patch -u --binary -p1;\n'
        '  patching file chrome/file.cc\n'
        '  Hunk #1 FAILED at 3.\n'
        '  1 out of 1 hunk FAILED -- saving rejects to file '
        'chrome/file.cc.rej\n')

  def testProcess(self):
    self._test_process(self._get_co)

  def testPrepare(self):
    # RawCheckout doesn't support prepare() but emulate it.
    co = self._get_co(None)
    revs = [1]
    def prepare(asked):
      self.assertEquals(1, asked)
      return revs.pop(0)
    co.prepare = prepare
    self._test_prepare(co)
    self.assertEquals([], revs)

  def testMove(self):
    self._check_move(self._get_co(None))


class ReadOnlyCheckout(SvnBaseTest):
  # Use SvnCheckout as the backed since it support read-only checkouts too.
  is_read_only = True

  def _get_co(self, post_processors):
    self.assertNotEqual(False, post_processors)
    return checkout.ReadOnlyCheckout(
        checkout.SvnCheckout(
            self.root_dir, self.name, None, None, self.svn_url, None),
        post_processors)

  def testAll(self):
    root = os.path.join(self.root_dir, self.name)
    self._check_base(self._get_co(None), root, None)

  def testException(self):
    self._check_exception(
        self._get_co(None),
        'While running patch -p1 --forward --force --no-backup-if-mismatch;\n'
        '  patching file chrome/file.cc\n'
        '  Hunk #1 FAILED at 3.\n'
        '  1 out of 1 hunk FAILED -- saving rejects to file '
        'chrome/file.cc.rej\n')

  def testProcess(self):
    self._test_process(self._get_co)

  def testPrepare(self):
    self._test_prepare(self._get_co(None))

  def testMove(self):
    self._check_move(self._get_co(None))


if __name__ == '__main__':
  if '-v' in sys.argv:
    DEBUGGING = True
    logging.basicConfig(
        level=logging.DEBUG,
        format='%(levelname)5s %(filename)15s(%(lineno)3d): %(message)s')
  else:
    logging.basicConfig(
        level=logging.ERROR,
        format='%(levelname)5s %(filename)15s(%(lineno)3d): %(message)s')
  unittest.main()

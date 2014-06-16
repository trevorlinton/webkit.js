#!/usr/bin/env python
# Copyright (c) 2011 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

"""Generate fake repositories for testing."""

import atexit
import datetime
import errno
import logging
import os
import pprint
import re
import socket
import sys
import tempfile
import time

# trial_dir must be first for non-system libraries.
from testing_support import trial_dir
import gclient_utils
import scm
import subprocess2


def write(path, content):
  f = open(path, 'wb')
  f.write(content)
  f.close()


join = os.path.join


def read_tree(tree_root):
  """Returns a dict of all the files in a tree. Defaults to self.root_dir."""
  tree = {}
  for root, dirs, files in os.walk(tree_root):
    for d in filter(lambda x: x.startswith('.'), dirs):
      dirs.remove(d)
    for f in [join(root, f) for f in files if not f.startswith('.')]:
      filepath = f[len(tree_root) + 1:].replace(os.sep, '/')
      assert len(filepath), f
      tree[filepath] = open(join(root, f), 'rU').read()
  return tree


def dict_diff(dict1, dict2):
  diff = {}
  for k, v in dict1.iteritems():
    if k not in dict2:
      diff[k] = v
    elif v != dict2[k]:
      diff[k] = (v, dict2[k])
  for k, v in dict2.iteritems():
    if k not in dict1:
      diff[k] = v
  return diff


def commit_svn(repo, usr, pwd):
  """Commits the changes and returns the new revision number."""
  to_add = []
  to_remove = []
  for status, filepath in scm.SVN.CaptureStatus(None, repo):
    if status[0] == '?':
      to_add.append(filepath)
    elif status[0] == '!':
      to_remove.append(filepath)
  if to_add:
    subprocess2.check_output(
        ['svn', 'add', '--no-auto-props', '-q'] + to_add, cwd=repo)
  if to_remove:
    subprocess2.check_output(['svn', 'remove', '-q'] + to_remove, cwd=repo)

  out = subprocess2.check_output(
      ['svn', 'commit', repo, '-m', 'foo', '--non-interactive',
        '--no-auth-cache',
        '--username', usr, '--password', pwd],
      cwd=repo)
  match = re.search(r'(\d+)', out)
  if not match:
    raise Exception('Commit failed', out)
  rev = match.group(1)
  status = subprocess2.check_output(['svn', 'status'], cwd=repo)
  assert len(status) == 0, status
  logging.debug('At revision %s' % rev)
  return rev


def commit_git(repo):
  """Commits the changes and returns the new hash."""
  subprocess2.check_call(['git', 'add', '-A', '-f'], cwd=repo)
  subprocess2.check_call(['git', 'commit', '-q', '--message', 'foo'], cwd=repo)
  rev = subprocess2.check_output(
      ['git', 'show-ref', '--head', 'HEAD'], cwd=repo).split(' ', 1)[0]
  logging.debug('At revision %s' % rev)
  return rev


def test_port(host, port):
  s = socket.socket()
  try:
    return s.connect_ex((host, port)) == 0
  finally:
    s.close()


def find_free_port(host, base_port):
  """Finds a listening port free to listen to."""
  while base_port < (2<<16):
    if not test_port(host, base_port):
      return base_port
    base_port += 1
  assert False, 'Having issues finding an available port'


def wait_for_port_to_bind(host, port, process):
  sock = socket.socket()

  if sys.platform == 'darwin':
    # On Mac SnowLeopard, if we attempt to connect to the socket
    # immediately, it fails with EINVAL and never gets a chance to
    # connect (putting us into a hard spin and then failing).
    # Linux doesn't need this.
    time.sleep(0.2)

  try:
    start = datetime.datetime.utcnow()
    maxdelay = datetime.timedelta(seconds=30)
    while (datetime.datetime.utcnow() - start) < maxdelay:
      try:
        sock.connect((host, port))
        logging.debug('%d is now bound' % port)
        return
      except (socket.error, EnvironmentError):
        pass
      logging.debug('%d is still not bound' % port)
  finally:
    sock.close()
  # The process failed to bind. Kill it and dump its ouput.
  process.kill()
  logging.error('%s' % process.communicate()[0])
  assert False, '%d is still not bound' % port


def wait_for_port_to_free(host, port):
  start = datetime.datetime.utcnow()
  maxdelay = datetime.timedelta(seconds=30)
  while (datetime.datetime.utcnow() - start) < maxdelay:
    try:
      sock = socket.socket()
      sock.connect((host, port))
      logging.debug('%d was bound, waiting to free' % port)
    except (socket.error, EnvironmentError):
      logging.debug('%d now free' % port)
      return
    finally:
      sock.close()
  assert False, '%d is still bound' % port


class FakeReposBase(object):
  """Generate both svn and git repositories to test gclient functionality.

  Many DEPS functionalities need to be tested: Var, File, From, deps_os, hooks,
  use_relative_paths.

  And types of dependencies: Relative urls, Full urls, both svn and git.

  populateSvn() and populateGit() need to be implemented by the subclass.
  """
  # Hostname
  NB_GIT_REPOS = 1
  USERS = [
      ('user1@example.com', 'foo'),
      ('user2@example.com', 'bar'),
  ]

  def __init__(self, host=None):
    self.trial = trial_dir.TrialDir('repos')
    self.host = host or '127.0.0.1'
    # Format is [ None, tree, tree, ...]
    # i.e. revisions are 1-based.
    self.svn_revs = [None]
    # Format is { repo: [ None, (hash, tree), (hash, tree), ... ], ... }
    # so reference looks like self.git_hashes[repo][rev][0] for hash and
    # self.git_hashes[repo][rev][1] for it's tree snapshot.
    # For consistency with self.svn_revs, it is 1-based too.
    self.git_hashes = {}
    self.svnserve = None
    self.gitdaemon = None
    self.git_pid_file = None
    self.git_root = None
    self.svn_checkout = None
    self.svn_repo = None
    self.git_dirty = False
    self.svn_dirty = False
    self.svn_port = None
    self.git_port = None
    self.svn_base = None
    self.git_base = None

  @property
  def root_dir(self):
    return self.trial.root_dir

  def set_up(self):
    """All late initialization comes here."""
    self.cleanup_dirt()
    if not self.root_dir:
      try:
        # self.root_dir is not set before this call.
        self.trial.set_up()
        self.git_root = join(self.root_dir, 'git')
        self.svn_checkout = join(self.root_dir, 'svn_checkout')
        self.svn_repo = join(self.root_dir, 'svn')
      finally:
        # Registers cleanup.
        atexit.register(self.tear_down)

  def cleanup_dirt(self):
    """For each dirty repository, destroy it."""
    if self.svn_dirty:
      if not self.tear_down_svn():
        logging.error('Using both leaking checkout and svn dirty checkout')
    if self.git_dirty:
      if not self.tear_down_git():
        logging.error('Using both leaking checkout and git dirty checkout')

  def tear_down(self):
    """Kills the servers and delete the directories."""
    self.tear_down_svn()
    self.tear_down_git()
    # This deletes the directories.
    self.trial.tear_down()
    self.trial = None

  def tear_down_svn(self):
    if self.svnserve:
      logging.debug('Killing svnserve pid %s' % self.svnserve.pid)
      try:
        self.svnserve.kill()
      except OSError as e:
        if e.errno != errno.ESRCH:   # no such process
          raise
      wait_for_port_to_free(self.host, self.svn_port)
      self.svnserve = None
      self.svn_port = None
      self.svn_base = None
      if not self.trial.SHOULD_LEAK:
        logging.debug('Removing %s' % self.svn_repo)
        gclient_utils.rmtree(self.svn_repo)
        logging.debug('Removing %s' % self.svn_checkout)
        gclient_utils.rmtree(self.svn_checkout)
      else:
        return False
    return True

  def tear_down_git(self):
    if self.gitdaemon:
      logging.debug('Killing git-daemon pid %s' % self.gitdaemon.pid)
      self.gitdaemon.kill()
      self.gitdaemon = None
      if self.git_pid_file:
        pid = int(self.git_pid_file.read())
        self.git_pid_file.close()
        logging.debug('Killing git daemon pid %s' % pid)
        try:
          subprocess2.kill_pid(pid)
        except OSError as e:
          if e.errno != errno.ESRCH:  # no such process
            raise
        self.git_pid_file = None
      wait_for_port_to_free(self.host, self.git_port)
      self.git_port = None
      self.git_base = None
      if not self.trial.SHOULD_LEAK:
        logging.debug('Removing %s' % self.git_root)
        gclient_utils.rmtree(self.git_root)
      else:
        return False
    return True

  @staticmethod
  def _genTree(root, tree_dict):
    """For a dictionary of file contents, generate a filesystem."""
    if not os.path.isdir(root):
      os.makedirs(root)
    for (k, v) in tree_dict.iteritems():
      k_os = k.replace('/', os.sep)
      k_arr = k_os.split(os.sep)
      if len(k_arr) > 1:
        p = os.sep.join([root] + k_arr[:-1])
        if not os.path.isdir(p):
          os.makedirs(p)
      if v is None:
        os.remove(join(root, k))
      else:
        write(join(root, k), v)

  def set_up_svn(self):
    """Creates subversion repositories and start the servers."""
    self.set_up()
    if self.svnserve:
      return True
    try:
      subprocess2.check_call(['svnadmin', 'create', self.svn_repo])
    except (OSError, subprocess2.CalledProcessError):
      return False
    write(join(self.svn_repo, 'conf', 'svnserve.conf'),
        '[general]\n'
        'anon-access = read\n'
        'auth-access = write\n'
        'password-db = passwd\n')
    text = '[users]\n'
    text += ''.join('%s = %s\n' % (usr, pwd) for usr, pwd in self.USERS)
    write(join(self.svn_repo, 'conf', 'passwd'), text)

    # Necessary to be able to change revision properties
    revprop_hook_filename = join(self.svn_repo, 'hooks', 'pre-revprop-change')
    if sys.platform == 'win32':
      # TODO(kustermann): Test on Windows one day.
      write("%s.bat" % revprop_hook_filename, "")
    else:
      write(revprop_hook_filename,
          '#!/bin/sh\n'
          'exit 0\n')
      os.chmod(revprop_hook_filename, 0755)

    # Mac 10.6 ships with a buggy subversion build and we need this line
    # to work around the bug.
    write(join(self.svn_repo, 'db', 'fsfs.conf'),
        '[rep-sharing]\n'
        'enable-rep-sharing = false\n')

    # Start the daemon.
    self.svn_port = find_free_port(self.host, 10000)
    logging.debug('Using port %d' % self.svn_port)
    cmd = ['svnserve', '-d', '--foreground', '-r', self.root_dir,
        '--listen-port=%d' % self.svn_port]
    if self.host == '127.0.0.1':
      cmd.append('--listen-host=' + self.host)
    self.check_port_is_free(self.svn_port)
    self.svnserve = subprocess2.Popen(
        cmd,
        cwd=self.svn_repo,
        stdout=subprocess2.PIPE,
        stderr=subprocess2.PIPE)
    wait_for_port_to_bind(self.host, self.svn_port, self.svnserve)
    self.svn_base = 'svn://%s:%d/svn/' % (self.host, self.svn_port)
    self.populateSvn()
    self.svn_dirty = False
    return True

  def set_up_git(self):
    """Creates git repositories and start the servers."""
    self.set_up()
    if self.gitdaemon:
      return True
    assert self.git_pid_file == None
    try:
      subprocess2.check_output(['git', '--version'])
    except (OSError, subprocess2.CalledProcessError):
      return False
    for repo in ['repo_%d' % r for r in range(1, self.NB_GIT_REPOS + 1)]:
      subprocess2.check_call(['git', 'init', '-q', join(self.git_root, repo)])
      self.git_hashes[repo] = [None]
    self.git_port = find_free_port(self.host, 20000)
    self.git_base = 'git://%s:%d/git/' % (self.host, self.git_port)
    # Start the daemon.
    self.git_pid_file = tempfile.NamedTemporaryFile()
    cmd = ['git', 'daemon',
        '--export-all',
        '--reuseaddr',
        '--base-path=' + self.root_dir,
        '--pid-file=' + self.git_pid_file.name,
        '--port=%d' % self.git_port]
    if self.host == '127.0.0.1':
      cmd.append('--listen=' + self.host)
    self.check_port_is_free(self.git_port)
    self.gitdaemon = subprocess2.Popen(
        cmd,
        cwd=self.root_dir,
        stdout=subprocess2.PIPE,
        stderr=subprocess2.PIPE)
    wait_for_port_to_bind(self.host, self.git_port, self.gitdaemon)
    self.populateGit()
    self.git_dirty = False
    return True

  def _commit_svn(self, tree):
    self._genTree(self.svn_checkout, tree)
    commit_svn(self.svn_checkout, self.USERS[0][0], self.USERS[0][1])
    if self.svn_revs and self.svn_revs[-1]:
      new_tree = self.svn_revs[-1].copy()
      new_tree.update(tree)
    else:
      new_tree = tree.copy()
    self.svn_revs.append(new_tree)

  def _set_svn_commit_date(self, revision, date):
    subprocess2.check_output(
        ['svn', 'propset', 'svn:date', '--revprop', '-r', revision, date,
         self.svn_base,
         '--username', self.USERS[0][0],
         '--password', self.USERS[0][1],
         '--non-interactive'])

  def _commit_git(self, repo, tree):
    repo_root = join(self.git_root, repo)
    self._genTree(repo_root, tree)
    commit_hash = commit_git(repo_root)
    if self.git_hashes[repo][-1]:
      new_tree = self.git_hashes[repo][-1][1].copy()
      new_tree.update(tree)
    else:
      new_tree = tree.copy()
    self.git_hashes[repo].append((commit_hash, new_tree))

  def check_port_is_free(self, port):
    sock = socket.socket()
    try:
      sock.connect((self.host, port))
      # It worked, throw.
      assert False, '%d shouldn\'t be bound' % port
    except (socket.error, EnvironmentError):
      pass
    finally:
      sock.close()

  def populateSvn(self):
    raise NotImplementedError()

  def populateGit(self):
    raise NotImplementedError()


class FakeRepos(FakeReposBase):
  """Implements populateSvn() and populateGit()."""
  NB_GIT_REPOS = 5

  def populateSvn(self):
    """Creates a few revisions of changes including DEPS files."""
    # Repos
    subprocess2.check_call(
        ['svn', 'checkout', self.svn_base, self.svn_checkout,
         '-q', '--non-interactive', '--no-auth-cache',
         '--username', self.USERS[0][0], '--password', self.USERS[0][1]])
    assert os.path.isdir(join(self.svn_checkout, '.svn'))
    def file_system(rev, DEPS, DEPS_ALT=None):
      fs = {
        'origin': 'svn@%(rev)d\n',
        'trunk/origin': 'svn/trunk@%(rev)d\n',
        'trunk/src/origin': 'svn/trunk/src@%(rev)d\n',
        'trunk/src/third_party/origin': 'svn/trunk/src/third_party@%(rev)d\n',
        'trunk/other/origin': 'src/trunk/other@%(rev)d\n',
        'trunk/third_party/origin': 'svn/trunk/third_party@%(rev)d\n',
        'trunk/third_party/foo/origin': 'svn/trunk/third_party/foo@%(rev)d\n',
        'trunk/third_party/prout/origin': 'svn/trunk/third_party/foo@%(rev)d\n',
      }
      for k in fs.iterkeys():
        fs[k] = fs[k] % { 'rev': rev }
      fs['trunk/src/DEPS'] = DEPS
      if DEPS_ALT:
        fs['trunk/src/DEPS.alt'] = DEPS_ALT
      return fs

    # Testing:
    # - dependency disapear
    # - dependency renamed
    # - versioned and unversioned reference
    # - relative and full reference
    # - deps_os
    # - var
    # - hooks
    # - From
    # - File
    # TODO(maruel):
    # - $matching_files
    # - use_relative_paths
    DEPS = """
vars = {
  'DummyVariable': 'third_party',
}
deps = {
  'src/other': '%(svn_base)strunk/other@1',
  'src/third_party/fpp': '/trunk/' + Var('DummyVariable') + '/foo',
}
deps_os = {
  'mac': {
    'src/third_party/prout': '/trunk/third_party/prout',
  },
}""" % { 'svn_base': self.svn_base }

    DEPS_ALT = """
deps = {
  'src/other2': '%(svn_base)strunk/other@2'
}
""" % { 'svn_base': self.svn_base }

    fs = file_system(1, DEPS, DEPS_ALT)
    self._commit_svn(fs)

    fs = file_system(2, """
deps = {
  'src/other': '%(svn_base)strunk/other',
  # Load another DEPS and load a dependency from it. That's an example of
  # WebKit's chromium checkout flow. Verify it works out of order.
  'src/third_party/foo': From('src/file/other', 'foo/bar'),
  'src/file/other': File('%(svn_base)strunk/other/DEPS'),
}
# I think this is wrong to have the hooks run from the base of the gclient
# checkout. It's maybe a bit too late to change that behavior.
hooks = [
  {
    'pattern': '.',
    'action': ['python', '-c',
               'open(\\'src/svn_hooked1\\', \\'w\\').write(\\'svn_hooked1\\')'],
  },
  {
    # Should not be run.
    'pattern': 'nonexistent',
    'action': ['python', '-c',
               'open(\\'src/svn_hooked2\\', \\'w\\').write(\\'svn_hooked2\\')'],
  },
]
""" % { 'svn_base': self.svn_base })
    fs['trunk/other/DEPS'] = """
deps = {
  'foo/bar': '/trunk/third_party/foo@1',
  # Only the requested deps should be processed.
  'invalid': '/does_not_exist',
}
"""
    # WebKit abuses this.
    fs['trunk/webkit/.gclient'] = """
solutions = [
  {
    'name': './',
    'url': None,
  },
]
"""
    fs['trunk/webkit/DEPS'] = """
deps = {
  'foo/bar': '%(svn_base)strunk/third_party/foo@1'
}

hooks = [
  {
    'pattern': '.*',
    'action': ['echo', 'foo'],
  },
]
""" % { 'svn_base': self.svn_base }
    self._commit_svn(fs)

  def populateGit(self):
    # Testing:
    # - dependency disappear
    # - dependency renamed
    # - versioned and unversioned reference
    # - relative and full reference
    # - deps_os
    # - var
    # - hooks
    # - From
    # TODO(maruel):
    # - File: File is hard to test here because it's SVN-only. It's
    #         implementation should probably be replaced to use urllib instead.
    # - $matching_files
    # - use_relative_paths
    self._commit_git('repo_3', {
      'origin': 'git/repo_3@1\n',
    })

    self._commit_git('repo_3', {
      'origin': 'git/repo_3@2\n',
    })

    self._commit_git('repo_1', {
      'DEPS': """
vars = {
  'DummyVariable': 'repo',
}
deps = {
  'src/repo2': '%(git_base)srepo_2',
  'src/repo2/repo3': '/' + Var('DummyVariable') + '_3@%(hash3)s',
}
deps_os = {
  'mac': {
    'src/repo4': '/repo_4',
  },
}""" % {
            'git_base': self.git_base,
            # See self.__init__() for the format. Grab's the hash of the first
            # commit in repo_2. Only keep the first 7 character because of:
            # TODO(maruel): http://crosbug.com/3591 We need to strip the hash..
            # duh.
            'hash3': self.git_hashes['repo_3'][1][0][:7]
        },
        'origin': 'git/repo_1@1\n',
    })

    self._commit_git('repo_2', {
      'origin': 'git/repo_2@1\n',
      'DEPS': """
deps = {
  'foo/bar': '/repo_3',
}
""",
    })

    self._commit_git('repo_2', {
      'origin': 'git/repo_2@2\n',
    })

    self._commit_git('repo_4', {
      'origin': 'git/repo_4@1\n',
    })

    self._commit_git('repo_4', {
      'origin': 'git/repo_4@2\n',
    })

    self._commit_git('repo_1', {
      'DEPS': """
deps = {
  'src/repo2': '%(git_base)srepo_2@%(hash)s',
  #'src/repo2/repo_renamed': '/repo_3',
  'src/repo2/repo_renamed': From('src/repo2', 'foo/bar'),
}
# I think this is wrong to have the hooks run from the base of the gclient
# checkout. It's maybe a bit too late to change that behavior.
hooks = [
  {
    'pattern': '.',
    'action': ['python', '-c',
               'open(\\'src/git_hooked1\\', \\'w\\').write(\\'git_hooked1\\')'],
  },
  {
    # Should not be run.
    'pattern': 'nonexistent',
    'action': ['python', '-c',
               'open(\\'src/git_hooked2\\', \\'w\\').write(\\'git_hooked2\\')'],
  },
]
""" % {
        'git_base': self.git_base,
        # See self.__init__() for the format. Grab's the hash of the first
        # commit in repo_2. Only keep the first 7 character because of:
        # TODO(maruel): http://crosbug.com/3591 We need to strip the hash.. duh.
        'hash': self.git_hashes['repo_2'][1][0][:7]
      },
      'origin': 'git/repo_1@2\n',
    })

    self._commit_git('repo_5', {'origin': 'git/repo_5@1\n'})
    self._commit_git('repo_5', {
      'DEPS': """
deps = {
  'src/repo1': '%(git_base)srepo_1@%(hash1)s',
  'src/repo2': '%(git_base)srepo_2@%(hash2)s',
}

# Hooks to run after a project is processed but before its dependencies are
# processed.
pre_deps_hooks = [
  {
    'action': ['python', '-c',
               'print "pre-deps hook"; open(\\'src/git_pre_deps_hooked\\', \\'w\\').write(\\'git_pre_deps_hooked\\')'],
  }
]
""" % {
         'git_base': self.git_base,
         'hash1': self.git_hashes['repo_1'][2][0][:7],
         'hash2': self.git_hashes['repo_2'][1][0][:7],
      },
    'origin': 'git/repo_5@2\n',
    })
    self._commit_git('repo_5', {
      'DEPS': """
deps = {
  'src/repo1': '%(git_base)srepo_1@%(hash1)s',
  'src/repo2': '%(git_base)srepo_2@%(hash2)s',
}

# Hooks to run after a project is processed but before its dependencies are
# processed.
pre_deps_hooks = [
  {
    'action': ['python', '-c',
               'print "pre-deps hook"; open(\\'src/git_pre_deps_hooked\\', \\'w\\').write(\\'git_pre_deps_hooked\\')'],
  },
  {
    'action': ['python', '-c', 'import sys; sys.exit(1)'],
  }
]
""" % {
         'git_base': self.git_base,
         'hash1': self.git_hashes['repo_1'][2][0][:7],
         'hash2': self.git_hashes['repo_2'][1][0][:7],
      },
    'origin': 'git/repo_5@3\n',
    })


class FakeRepoTransitive(FakeReposBase):
  """Implements populateSvn()"""

  def populateSvn(self):
    """Creates a few revisions of changes including a DEPS file."""
    # Repos
    subprocess2.check_call(
        ['svn', 'checkout', self.svn_base, self.svn_checkout,
         '-q', '--non-interactive', '--no-auth-cache',
         '--username', self.USERS[0][0], '--password', self.USERS[0][1]])
    assert os.path.isdir(join(self.svn_checkout, '.svn'))

    def file_system(rev):
      DEPS = """deps = {
                'src/different_repo': '%(svn_base)strunk/third_party',
                'src/different_repo_fixed': '%(svn_base)strunk/third_party@1',
                'src/same_repo': '/trunk/third_party',
                'src/same_repo_fixed': '/trunk/third_party@1',
             }""" % { 'svn_base': self.svn_base }
      return {
        'trunk/src/DEPS': DEPS,
        'trunk/src/origin': 'svn/trunk/src@%(rev)d' % { 'rev': rev },
        'trunk/third_party/origin':
            'svn/trunk/third_party@%(rev)d' % { 'rev': rev },
      }

    # We make three commits. We use always the same DEPS contents but
    # - 'trunk/src/origin' contains 'svn/trunk/src/origin@rX'
    # - 'trunk/third_party/origin' contains 'svn/trunk/third_party/origin@rX'
    # where 'X' is the revision number.
    # So the 'origin' files will change in every commit.
    self._commit_svn(file_system(1))
    self._commit_svn(file_system(2))
    self._commit_svn(file_system(3))
    # We rewrite the timestamps so we can test that '--transitive' will take the
    # parent timestamp on different repositories and the parent revision
    # otherwise.
    self._set_svn_commit_date('1', '2011-10-01T03:00:00.000000Z')
    self._set_svn_commit_date('2', '2011-10-09T03:00:00.000000Z')
    self._set_svn_commit_date('3', '2011-10-02T03:00:00.000000Z')

  def populateGit(self):
    pass


class FakeRepoSkiaDEPS(FakeReposBase):
  """Simulates the Skia DEPS transition in Chrome."""

  NB_GIT_REPOS = 5

  DEPS_svn_pre = """deps = {
  'src/third_party/skia/gyp': '%(svn_base)sskia/gyp',
  'src/third_party/skia/include': '%(svn_base)sskia/include',
  'src/third_party/skia/src': '%(svn_base)sskia/src',
}"""

  DEPS_git_pre = """deps = {
  'src/third_party/skia/gyp': '%(git_base)srepo_3',
  'src/third_party/skia/include': '%(git_base)srepo_4',
  'src/third_party/skia/src': '%(git_base)srepo_5',
}"""

  DEPS_post = """deps = {
  'src/third_party/skia': '%(git_base)srepo_1',
}"""

  def populateSvn(self):
    """Create revisions which simulate the Skia DEPS transition in Chrome."""
    subprocess2.check_call(
        ['svn', 'checkout', self.svn_base, self.svn_checkout,
         '-q', '--non-interactive', '--no-auth-cache',
         '--username', self.USERS[0][0], '--password', self.USERS[0][1]])
    assert os.path.isdir(join(self.svn_checkout, '.svn'))

    # Skia repo.
    self._commit_svn({
        'skia/skia_base_file': 'root-level file.',
        'skia/gyp/gyp_file': 'file in the gyp directory',
        'skia/include/include_file': 'file in the include directory',
        'skia/src/src_file': 'file in the src directory',
    })

    # Chrome repo.
    self._commit_svn({
        'trunk/src/DEPS': self.DEPS_svn_pre % {'svn_base': self.svn_base},
        'trunk/src/myfile': 'svn/trunk/src@1'
    })
    self._commit_svn({
        'trunk/src/DEPS': self.DEPS_post % {'git_base': self.git_base},
        'trunk/src/myfile': 'svn/trunk/src@2'
    })

  def populateGit(self):
    # Skia repo.
    self._commit_git('repo_1', {
        'skia_base_file': 'root-level file.',
        'gyp/gyp_file': 'file in the gyp directory',
        'include/include_file': 'file in the include directory',
        'src/src_file': 'file in the src directory',
    })
    self._commit_git('repo_3', { # skia/gyp
        'gyp_file': 'file in the gyp directory',
    })
    self._commit_git('repo_4', { # skia/include
        'include_file': 'file in the include directory',
    })
    self._commit_git('repo_5', { # skia/src
        'src_file': 'file in the src directory',
    })

    # Chrome repo.
    self._commit_git('repo_2', {
        'DEPS': self.DEPS_git_pre % {'git_base': self.git_base},
        'myfile': 'svn/trunk/src@1'
    })
    self._commit_git('repo_2', {
        'DEPS': self.DEPS_post % {'git_base': self.git_base},
        'myfile': 'svn/trunk/src@2'
    })


class FakeReposTestBase(trial_dir.TestCase):
  """This is vaguely inspired by twisted."""
  # Static FakeRepos instances. Lazy loaded.
  CACHED_FAKE_REPOS = {}
  # Override if necessary.
  FAKE_REPOS_CLASS = FakeRepos

  def setUp(self):
    super(FakeReposTestBase, self).setUp()
    if not self.FAKE_REPOS_CLASS in self.CACHED_FAKE_REPOS:
      self.CACHED_FAKE_REPOS[self.FAKE_REPOS_CLASS] = self.FAKE_REPOS_CLASS()
    self.FAKE_REPOS = self.CACHED_FAKE_REPOS[self.FAKE_REPOS_CLASS]
    # No need to call self.FAKE_REPOS.setUp(), it will be called by the child
    # class.
    # Do not define tearDown(), since super's version does the right thing and
    # self.FAKE_REPOS is kept across tests.

  @property
  def svn_base(self):
    """Shortcut."""
    return self.FAKE_REPOS.svn_base

  @property
  def git_base(self):
    """Shortcut."""
    return self.FAKE_REPOS.git_base

  def checkString(self, expected, result, msg=None):
    """Prints the diffs to ease debugging."""
    if expected != result:
      # Strip the begining
      while expected and result and expected[0] == result[0]:
        expected = expected[1:]
        result = result[1:]
      # The exception trace makes it hard to read so dump it too.
      if '\n' in result:
        print result
    self.assertEquals(expected, result, msg)

  def check(self, expected, results):
    """Checks stdout, stderr, returncode."""
    self.checkString(expected[0], results[0])
    self.checkString(expected[1], results[1])
    self.assertEquals(expected[2], results[2])

  def assertTree(self, tree, tree_root=None):
    """Diff the checkout tree with a dict."""
    if not tree_root:
      tree_root = self.root_dir
    actual = read_tree(tree_root)
    diff = dict_diff(tree, actual)
    if diff:
      logging.debug('Actual %s\n%s' % (tree_root, pprint.pformat(actual)))
      logging.debug('Expected\n%s' % pprint.pformat(tree))
      logging.debug('Diff\n%s' % pprint.pformat(diff))
      self.assertEquals(diff, [])

  def mangle_svn_tree(self, *args):
    """Creates a 'virtual directory snapshot' to compare with the actual result
    on disk."""
    result = {}
    for item, new_root in args:
      old_root, rev = item.split('@', 1)
      tree = self.FAKE_REPOS.svn_revs[int(rev)]
      for k, v in tree.iteritems():
        if not k.startswith(old_root):
          continue
        item = k[len(old_root) + 1:]
        if item.startswith('.'):
          continue
        result[join(new_root, item).replace(os.sep, '/')] = v
    return result

  def mangle_git_tree(self, *args):
    """Creates a 'virtual directory snapshot' to compare with the actual result
    on disk."""
    result = {}
    for item, new_root in args:
      repo, rev = item.split('@', 1)
      tree = self.gittree(repo, rev)
      for k, v in tree.iteritems():
        result[join(new_root, k)] = v
    return result

  def githash(self, repo, rev):
    """Sort-hand: Returns the hash for a git 'revision'."""
    return self.FAKE_REPOS.git_hashes[repo][int(rev)][0]

  def gittree(self, repo, rev):
    """Sort-hand: returns the directory tree for a git 'revision'."""
    return self.FAKE_REPOS.git_hashes[repo][int(rev)][1]


def main(argv):
  fake = FakeRepos()
  print 'Using %s' % fake.root_dir
  try:
    fake.set_up_svn()
    fake.set_up_git()
    print('Fake setup, press enter to quit or Ctrl-C to keep the checkouts.')
    sys.stdin.readline()
  except KeyboardInterrupt:
    trial_dir.TrialDir.SHOULD_LEAK.leak = True
  return 0


if __name__ == '__main__':
  sys.exit(main(sys.argv))

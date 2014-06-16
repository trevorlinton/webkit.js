#!/usr/bin/env python
# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

"""A git command for managing a local cache of git repositories."""

from __future__ import print_function
import errno
import logging
import optparse
import os
import tempfile
import subprocess
import sys
import urlparse

from download_from_google_storage import Gsutil
import gclient_utils
import subcommand

try:
  # pylint: disable=E0602
  WinErr = WindowsError
except NameError:
  class WinErr(Exception):
    pass

class LockError(Exception):
  pass


class Lockfile(object):
  """Class to represent a cross-platform process-specific lockfile."""

  def __init__(self, path):
    self.path = os.path.abspath(path)
    self.lockfile = self.path + ".lock"
    self.pid = os.getpid()

  def _read_pid(self):
    """Read the pid stored in the lockfile.

    Note: This method is potentially racy. By the time it returns the lockfile
    may have been unlocked, removed, or stolen by some other process.
    """
    try:
      with open(self.lockfile, 'r') as f:
        pid = int(f.readline().strip())
    except (IOError, ValueError):
      pid = None
    return pid

  def _make_lockfile(self):
    """Safely creates a lockfile containing the current pid."""
    open_flags = (os.O_CREAT | os.O_EXCL | os.O_WRONLY)
    fd = os.open(self.lockfile, open_flags, 0o644)
    f = os.fdopen(fd, 'w')
    print(self.pid, file=f)
    f.close()

  def _remove_lockfile(self):
    """Delete the lockfile. Complains (implicitly) if it doesn't exist."""
    os.remove(self.lockfile)

  def lock(self):
    """Acquire the lock.

    Note: This is a NON-BLOCKING FAIL-FAST operation.
    Do. Or do not. There is no try.
    """
    try:
      self._make_lockfile()
    except OSError as e:
      if e.errno == errno.EEXIST:
        raise LockError("%s is already locked" % self.path)
      else:
        raise LockError("Failed to create %s (err %s)" % (self.path, e.errno))

  def unlock(self):
    """Release the lock."""
    if not self.is_locked():
      raise LockError("%s is not locked" % self.path)
    if not self.i_am_locking():
      raise LockError("%s is locked, but not by me" % self.path)
    self._remove_lockfile()

  def break_lock(self):
    """Remove the lock, even if it was created by someone else."""
    try:
      self._remove_lockfile()
      return True
    except OSError as exc:
      if exc.errno == errno.ENOENT:
        return False
      else:
        raise

  def is_locked(self):
    """Test if the file is locked by anyone.

    Note: This method is potentially racy. By the time it returns the lockfile
    may have been unlocked, removed, or stolen by some other process.
    """
    return os.path.exists(self.lockfile)

  def i_am_locking(self):
    """Test if the file is locked by this process."""
    return self.is_locked() and self.pid == self._read_pid()

  def __enter__(self):
    self.lock()
    return self

  def __exit__(self, *_exc):
    # Windows is unreliable when it comes to file locking.  YMMV.
    try:
      self.unlock()
    except WinErr:
      pass


class Mirror(object):

  git_exe = 'git.bat' if sys.platform.startswith('win') else 'git'
  gsutil_exe = os.path.join(
    os.path.dirname(os.path.abspath(__file__)),
    'third_party', 'gsutil', 'gsutil')
  bootstrap_bucket = 'chromium-git-cache'

  def __init__(self, url, refs=None, print_func=None):
    self.url = url
    self.refs = refs or []
    self.basedir = self.UrlToCacheDir(url)
    self.mirror_path = os.path.join(self.GetCachePath(), self.basedir)
    self.print = print_func or print

  @staticmethod
  def UrlToCacheDir(url):
    """Convert a git url to a normalized form for the cache dir path."""
    parsed = urlparse.urlparse(url)
    norm_url = parsed.netloc + parsed.path
    if norm_url.endswith('.git'):
      norm_url = norm_url[:-len('.git')]
    return norm_url.replace('-', '--').replace('/', '-').lower()

  @staticmethod
  def FindExecutable(executable):
    """This mimics the "which" utility."""
    path_folders = os.environ.get('PATH').split(os.pathsep)

    for path_folder in path_folders:
      target = os.path.join(path_folder, executable)
      # Just incase we have some ~/blah paths.
      target = os.path.abspath(os.path.expanduser(target))
      if os.path.isfile(target) and os.access(target, os.X_OK):
        return target
      if sys.platform.startswith('win'):
        for suffix in ('.bat', '.cmd', '.exe'):
          alt_target = target + suffix
          if os.path.isfile(alt_target) and os.access(alt_target, os.X_OK):
            return alt_target
    return None

  @classmethod
  def SetCachePath(cls, cachepath):
    setattr(cls, 'cachepath', cachepath)

  @classmethod
  def GetCachePath(cls):
    if not hasattr(cls, 'cachepath'):
      try:
        cachepath = subprocess.check_output(
            [cls.git_exe, 'config', '--global', 'cache.cachepath']).strip()
      except subprocess.CalledProcessError:
        cachepath = None
      if not cachepath:
        raise RuntimeError('No global cache.cachepath git configuration found.')
      setattr(cls, 'cachepath', cachepath)
    return getattr(cls, 'cachepath')

  def RunGit(self, cmd, **kwargs):
    """Run git in a subprocess."""
    cwd = kwargs.setdefault('cwd', self.mirror_path)
    kwargs.setdefault('print_stdout', False)
    kwargs.setdefault('filter_fn', self.print)
    env = kwargs.get('env') or kwargs.setdefault('env', os.environ.copy())
    env.setdefault('GIT_ASKPASS', 'true')
    env.setdefault('SSH_ASKPASS', 'true')
    self.print('running "git %s" in "%s"' % (' '.join(cmd), cwd))
    gclient_utils.CheckCallAndFilter([self.git_exe] + cmd, **kwargs)

  def config(self, cwd=None):
    if cwd is None:
      cwd = self.mirror_path
    self.RunGit(['config', 'core.deltaBaseCacheLimit',
                 gclient_utils.DefaultDeltaBaseCacheLimit()], cwd=cwd)
    self.RunGit(['config', 'remote.origin.url', self.url], cwd=cwd)
    self.RunGit(['config', '--replace-all', 'remote.origin.fetch',
                 '+refs/heads/*:refs/heads/*'], cwd=cwd)
    for ref in self.refs:
      ref = ref.lstrip('+').rstrip('/')
      if ref.startswith('refs/'):
        refspec = '+%s:%s' % (ref, ref)
      else:
        refspec = '+refs/%s/*:refs/%s/*' % (ref, ref)
      self.RunGit(['config', '--add', 'remote.origin.fetch', refspec], cwd=cwd)

  def bootstrap_repo(self, directory):
    """Bootstrap the repo from Google Stroage if possible.

    Requires 7z on Windows and Unzip on Linux/Mac.
    """
    if sys.platform.startswith('win'):
      if not self.FindExecutable('7z'):
        self.print('''
Cannot find 7z in the path.  If you want git cache to be able to bootstrap from
Google Storage, please install 7z from:

http://www.7-zip.org/download.html
''')
        return False
    else:
      if not self.FindExecutable('unzip'):
        self.print('''
Cannot find unzip in the path.  If you want git cache to be able to bootstrap
from Google Storage, please ensure unzip is present on your system.
''')
        return False

    gs_folder = 'gs://%s/%s' % (self.bootstrap_bucket, self.basedir)
    gsutil = Gsutil(
        self.gsutil_exe, boto_path=os.devnull, bypass_prodaccess=True)
    # Get the most recent version of the zipfile.
    _, ls_out, _ = gsutil.check_call('ls', gs_folder)
    ls_out_sorted = sorted(ls_out.splitlines())
    if not ls_out_sorted:
      # This repo is not on Google Storage.
      return False
    latest_checkout = ls_out_sorted[-1]

    # Download zip file to a temporary directory.
    try:
      tempdir = tempfile.mkdtemp()
      self.print('Downloading %s' % latest_checkout)
      code, out, err = gsutil.check_call('cp', latest_checkout, tempdir)
      if code:
        self.print('%s\n%s' % (out, err))
        return False
      filename = os.path.join(tempdir, latest_checkout.split('/')[-1])

      # Unpack the file with 7z on Windows, or unzip everywhere else.
      if sys.platform.startswith('win'):
        cmd = ['7z', 'x', '-o%s' % directory, '-tzip', filename]
      else:
        cmd = ['unzip', filename, '-d', directory]
      retcode = subprocess.call(cmd)
    finally:
      # Clean up the downloaded zipfile.
      gclient_utils.rmtree(tempdir)

    if retcode:
      self.print(
          'Extracting bootstrap zipfile %s failed.\n'
          'Resuming normal operations.' % filename)
      return False
    return True

  def exists(self):
    return os.path.isfile(os.path.join(self.mirror_path, 'config'))

  def populate(self, depth=None, shallow=False, bootstrap=False,
               verbose=False):
    if shallow and not depth:
      depth = 10000
    gclient_utils.safe_makedirs(self.GetCachePath())

    v = []
    if verbose:
      v = ['-v', '--progress']

    d = []
    if depth:
      d = ['--depth', str(depth)]


    with Lockfile(self.mirror_path):
      # Setup from scratch if the repo is new or is in a bad state.
      tempdir = None
      if not os.path.exists(os.path.join(self.mirror_path, 'config')):
        gclient_utils.rmtree(self.mirror_path)
        tempdir = tempfile.mkdtemp(
            suffix=self.basedir, dir=self.GetCachePath())
        bootstrapped = not depth and bootstrap and self.bootstrap_repo(tempdir)
        if not bootstrapped:
          self.RunGit(['init', '--bare'], cwd=tempdir)
      else:
        if depth and os.path.exists(os.path.join(self.mirror_path, 'shallow')):
          logging.warn(
              'Shallow fetch requested, but repo cache already exists.')
        d = []

      rundir = tempdir or self.mirror_path
      self.config(rundir)
      fetch_cmd = ['fetch'] + v + d + ['origin']
      fetch_specs = subprocess.check_output(
          [self.git_exe, 'config', '--get-all', 'remote.origin.fetch'],
          cwd=rundir).strip().splitlines()
      for spec in fetch_specs:
        try:
          self.RunGit(fetch_cmd + [spec], cwd=rundir, retry=True)
        except subprocess.CalledProcessError:
          logging.warn('Fetch of %s failed' % spec)
      if tempdir:
        os.rename(tempdir, self.mirror_path)

  def update_bootstrap(self):
    # The files are named <git number>.zip
    gen_number = subprocess.check_output(
        [self.git_exe, 'number', 'master'], cwd=self.mirror_path).strip()
    self.RunGit(['gc'])  # Run Garbage Collect to compress packfile.
    # Creating a temp file and then deleting it ensures we can use this name.
    _, tmp_zipfile = tempfile.mkstemp(suffix='.zip')
    os.remove(tmp_zipfile)
    subprocess.call(['zip', '-r', tmp_zipfile, '.'], cwd=self.mirror_path)
    gsutil = Gsutil(path=self.gsutil_exe, boto_path=None)
    dest_name = 'gs://%s/%s/%s.zip' % (
        self.bootstrap_bucket, self.basedir, gen_number)
    gsutil.call('cp', tmp_zipfile, dest_name)
    os.remove(tmp_zipfile)

  def unlock(self):
    lf = Lockfile(self.mirror_path)
    config_lock = os.path.join(self.mirror_path, 'config.lock')
    if os.path.exists(config_lock):
      os.remove(config_lock)
    lf.break_lock()

@subcommand.usage('[url of repo to check for caching]')
def CMDexists(parser, args):
  """Check to see if there already is a cache of the given repo."""
  _, args = parser.parse_args(args)
  if not len(args) == 1:
    parser.error('git cache exists only takes exactly one repo url.')
  url = args[0]
  mirror = Mirror(url)
  if mirror.exists():
    print(mirror.mirror_path)
    return 0
  return 1


@subcommand.usage('[url of repo to create a bootstrap zip file]')
def CMDupdate_bootstrap(parser, args):
  """Create and uploads a bootstrap tarball."""
  # Lets just assert we can't do this on Windows.
  if sys.platform.startswith('win'):
    print('Sorry, update bootstrap will not work on Windows.', file=sys.stderr)
    return 1

  # First, we need to ensure the cache is populated.
  populate_args = args[:]
  populate_args.append('--no_bootstrap')
  CMDpopulate(parser, populate_args)

  # Get the repo directory.
  _, args = parser.parse_args(args)
  url = args[0]
  mirror = Mirror(url)
  mirror.update_bootstrap()
  return 0


@subcommand.usage('[url of repo to add to or update in cache]')
def CMDpopulate(parser, args):
  """Ensure that the cache has all up-to-date objects for the given repo."""
  parser.add_option('--depth', type='int',
                    help='Only cache DEPTH commits of history')
  parser.add_option('--shallow', '-s', action='store_true',
                    help='Only cache 10000 commits of history')
  parser.add_option('--ref', action='append',
                    help='Specify additional refs to be fetched')
  parser.add_option('--no_bootstrap', action='store_true',
                    help='Don\'t bootstrap from Google Storage')

  options, args = parser.parse_args(args)
  if not len(args) == 1:
    parser.error('git cache populate only takes exactly one repo url.')
  url = args[0]

  mirror = Mirror(url, refs=options.ref)
  kwargs = {
      'verbose': options.verbose,
      'shallow': options.shallow,
      'bootstrap': not options.no_bootstrap,
  }
  if options.depth:
    kwargs['depth'] = options.depth
  mirror.populate(**kwargs)


@subcommand.usage('[url of repo to unlock, or -a|--all]')
def CMDunlock(parser, args):
  """Unlock one or all repos if their lock files are still around."""
  parser.add_option('--force', '-f', action='store_true',
                    help='Actually perform the action')
  parser.add_option('--all', '-a', action='store_true',
                    help='Unlock all repository caches')
  options, args = parser.parse_args(args)
  if len(args) > 1 or (len(args) == 0 and not options.all):
    parser.error('git cache unlock takes exactly one repo url, or --all')

  repo_dirs = []
  if not options.all:
    url = args[0]
    repo_dirs.append(Mirror(url).mirror_path)
  else:
    cachepath = Mirror.GetCachePath()
    repo_dirs = [os.path.join(cachepath, path)
                 for path in os.listdir(cachepath)
                 if os.path.isdir(os.path.join(cachepath, path))]
    repo_dirs.extend([os.path.join(cachepath,
                                   lockfile.replace('.lock', ''))
                      for lockfile in os.listdir(cachepath)
                      if os.path.isfile(os.path.join(cachepath,
                                                     lockfile))
                      and lockfile.endswith('.lock')
                      and os.path.join(cachepath, lockfile)
                          not in repo_dirs])
  lockfiles = [repo_dir + '.lock' for repo_dir in repo_dirs
               if os.path.exists(repo_dir + '.lock')]

  if not options.force:
    parser.error('git cache unlock requires -f|--force to do anything. '
                 'Refusing to unlock the following repo caches: '
                 ', '.join(lockfiles))

  unlocked_repos = []
  untouched_repos = []
  for repo_dir in repo_dirs:
    lf = Lockfile(repo_dir)
    config_lock = os.path.join(repo_dir, 'config.lock')
    unlocked = False
    if os.path.exists(config_lock):
      os.remove(config_lock)
      unlocked = True
    if lf.break_lock():
      unlocked = True

    if unlocked:
      unlocked_repos.append(repo_dir)
    else:
      untouched_repos.append(repo_dir)

  if unlocked_repos:
    logging.info('Broke locks on these caches:\n  %s' % '\n  '.join(
        unlocked_repos))
  if untouched_repos:
    logging.debug('Did not touch these caches:\n %s' % '\n  '.join(
        untouched_repos))


class OptionParser(optparse.OptionParser):
  """Wrapper class for OptionParser to handle global options."""

  def __init__(self, *args, **kwargs):
    optparse.OptionParser.__init__(self, *args, prog='git cache', **kwargs)
    self.add_option('-c', '--cache-dir',
                    help='Path to the directory containing the cache')
    self.add_option('-v', '--verbose', action='count', default=0,
                    help='Increase verbosity (can be passed multiple times)')

  def parse_args(self, args=None, values=None):
    options, args = optparse.OptionParser.parse_args(self, args, values)

    try:
      global_cache_dir = Mirror.GetCachePath()
    except RuntimeError:
      global_cache_dir = None
    if options.cache_dir:
      if global_cache_dir and (
          os.path.abspath(options.cache_dir) !=
          os.path.abspath(global_cache_dir)):
        logging.warn('Overriding globally-configured cache directory.')
      Mirror.SetCachePath(options.cache_dir)

    levels = [logging.WARNING, logging.INFO, logging.DEBUG]
    logging.basicConfig(level=levels[min(options.verbose, len(levels) - 1)])

    return options, args


def main(argv):
  dispatcher = subcommand.CommandDispatcher(__name__)
  return dispatcher.execute(OptionParser(), argv)


if __name__ == '__main__':
  sys.exit(main(sys.argv[1:]))

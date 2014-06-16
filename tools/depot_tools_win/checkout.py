# coding=utf8
# Copyright (c) 2012 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.
"""Manages a project checkout.

Includes support for svn, git-svn and git.
"""

import ConfigParser
import fnmatch
import logging
import os
import re
import shutil
import subprocess
import sys
import tempfile

import patch
import scm
import subprocess2


if sys.platform in ('cygwin', 'win32'):
  # Disable timeouts on Windows since we can't have shells with timeouts.
  GLOBAL_TIMEOUT = None
  FETCH_TIMEOUT = None
else:
  # Default timeout of 15 minutes.
  GLOBAL_TIMEOUT = 15*60
  # Use a larger timeout for checkout since it can be a genuinely slower
  # operation.
  FETCH_TIMEOUT = 30*60


def get_code_review_setting(path, key,
    codereview_settings_file='codereview.settings'):
  """Parses codereview.settings and return the value for the key if present.

  Don't cache the values in case the file is changed."""
  # TODO(maruel): Do not duplicate code.
  settings = {}
  try:
    settings_file = open(os.path.join(path, codereview_settings_file), 'r')
    try:
      for line in settings_file.readlines():
        if not line or line.startswith('#'):
          continue
        if not ':' in line:
          # Invalid file.
          return None
        k, v = line.split(':', 1)
        settings[k.strip()] = v.strip()
    finally:
      settings_file.close()
  except IOError:
    return None
  return settings.get(key, None)


def align_stdout(stdout):
  """Returns the aligned output of multiple stdouts."""
  output = ''
  for item in stdout:
    item = item.strip()
    if not item:
      continue
    output += ''.join('  %s\n' % line for line in item.splitlines())
  return output


class PatchApplicationFailed(Exception):
  """Patch failed to be applied."""
  def __init__(self, p, status):
    super(PatchApplicationFailed, self).__init__(p, status)
    self.patch = p
    self.status = status

  @property
  def filename(self):
    if self.patch:
      return self.patch.filename

  def __str__(self):
    out = []
    if self.filename:
      out.append('Failed to apply patch for %s:' % self.filename)
    if self.status:
      out.append(self.status)
    if self.patch:
      out.append('Patch: %s' % self.patch.dump())
    return '\n'.join(out)


class CheckoutBase(object):
  # Set to None to have verbose output.
  VOID = subprocess2.VOID

  def __init__(self, root_dir, project_name, post_processors):
    """
    Args:
      post_processor: list of lambda(checkout, patches) to call on each of the
                      modified files.
    """
    super(CheckoutBase, self).__init__()
    self.root_dir = root_dir
    self.project_name = project_name
    if self.project_name is None:
      self.project_path = self.root_dir
    else:
      self.project_path = os.path.join(self.root_dir, self.project_name)
    # Only used for logging purposes.
    self._last_seen_revision = None
    self.post_processors = post_processors
    assert self.root_dir
    assert self.project_path
    assert os.path.isabs(self.project_path)

  def get_settings(self, key):
    return get_code_review_setting(self.project_path, key)

  def prepare(self, revision):
    """Checks out a clean copy of the tree and removes any local modification.

    This function shouldn't throw unless the remote repository is inaccessible,
    there is no free disk space or hard issues like that.

    Args:
      revision: The revision it should sync to, SCM specific.
    """
    raise NotImplementedError()

  def apply_patch(self, patches, post_processors=None, verbose=False):
    """Applies a patch and returns the list of modified files.

    This function should throw patch.UnsupportedPatchFormat or
    PatchApplicationFailed when relevant.

    Args:
      patches: patch.PatchSet object.
    """
    raise NotImplementedError()

  def commit(self, commit_message, user):
    """Commits the patch upstream, while impersonating 'user'."""
    raise NotImplementedError()

  def revisions(self, rev1, rev2):
    """Returns the count of revisions from rev1 to rev2, e.g. len(]rev1, rev2]).

    If rev2 is None, it means 'HEAD'.

    Returns None if there is no link between the two.
    """
    raise NotImplementedError()


class RawCheckout(CheckoutBase):
  """Used to apply a patch locally without any intent to commit it.

  To be used by the try server.
  """
  def prepare(self, revision):
    """Stubbed out."""
    pass

  def apply_patch(self, patches, post_processors=None, verbose=False):
    """Ignores svn properties."""
    post_processors = post_processors or self.post_processors or []
    for p in patches:
      stdout = []
      try:
        filepath = os.path.join(self.project_path, p.filename)
        if p.is_delete:
          os.remove(filepath)
          stdout.append('Deleted.')
        else:
          dirname = os.path.dirname(p.filename)
          full_dir = os.path.join(self.project_path, dirname)
          if dirname and not os.path.isdir(full_dir):
            os.makedirs(full_dir)
            stdout.append('Created missing directory %s.' % dirname)

          if p.is_binary:
            content = p.get()
            with open(filepath, 'wb') as f:
              f.write(content)
            stdout.append('Added binary file %d bytes.' % len(content))
          else:
            if p.source_filename:
              if not p.is_new:
                raise PatchApplicationFailed(
                    p,
                    'File has a source filename specified but is not new')
              # Copy the file first.
              if os.path.isfile(filepath):
                raise PatchApplicationFailed(
                    p, 'File exist but was about to be overwriten')
              shutil.copy2(
                  os.path.join(self.project_path, p.source_filename), filepath)
              stdout.append('Copied %s -> %s' % (p.source_filename, p.filename))
            if p.diff_hunks:
              cmd = ['patch', '-u', '--binary', '-p%s' % p.patchlevel]
              if verbose:
                cmd.append('--verbose')
              env = os.environ.copy()
              env['TMPDIR'] = tempfile.mkdtemp(prefix='crpatch')
              try:
                stdout.append(
                    subprocess2.check_output(
                        cmd,
                        stdin=p.get(False),
                        stderr=subprocess2.STDOUT,
                        cwd=self.project_path,
                        timeout=GLOBAL_TIMEOUT,
                        env=env))
              finally:
                shutil.rmtree(env['TMPDIR'])
            elif p.is_new and not os.path.exists(filepath):
              # There is only a header. Just create the file.
              open(filepath, 'w').close()
              stdout.append('Created an empty file.')
        for post in post_processors:
          post(self, p)
        if verbose:
          print p.filename
          print align_stdout(stdout)
      except OSError, e:
        raise PatchApplicationFailed(p, '%s%s' % (align_stdout(stdout), e))
      except subprocess.CalledProcessError, e:
        raise PatchApplicationFailed(
            p,
            'While running %s;\n%s%s' % (
              ' '.join(e.cmd),
              align_stdout(stdout),
              align_stdout([getattr(e, 'stdout', '')])))

  def commit(self, commit_message, user):
    """Stubbed out."""
    raise NotImplementedError('RawCheckout can\'t commit')

  def revisions(self, _rev1, _rev2):
    return None


class SvnConfig(object):
  """Parses a svn configuration file."""
  def __init__(self, svn_config_dir=None):
    super(SvnConfig, self).__init__()
    self.svn_config_dir = svn_config_dir
    self.default = not bool(self.svn_config_dir)
    if not self.svn_config_dir:
      if sys.platform == 'win32':
        self.svn_config_dir = os.path.join(os.environ['APPDATA'], 'Subversion')
      else:
        self.svn_config_dir = os.path.join(os.environ['HOME'], '.subversion')
    svn_config_file = os.path.join(self.svn_config_dir, 'config')
    parser = ConfigParser.SafeConfigParser()
    if os.path.isfile(svn_config_file):
      parser.read(svn_config_file)
    else:
      parser.add_section('auto-props')
    self.auto_props = dict(parser.items('auto-props'))


class SvnMixIn(object):
  """MixIn class to add svn commands common to both svn and git-svn clients."""
  # These members need to be set by the subclass.
  commit_user = None
  commit_pwd = None
  svn_url = None
  project_path = None
  # Override at class level when necessary. If used, --non-interactive is
  # implied.
  svn_config = SvnConfig()
  # Set to True when non-interactivity is necessary but a custom subversion
  # configuration directory is not necessary.
  non_interactive = False

  def _add_svn_flags(self, args, non_interactive, credentials=True):
    args = ['svn'] + args
    if not self.svn_config.default:
      args.extend(['--config-dir', self.svn_config.svn_config_dir])
    if not self.svn_config.default or self.non_interactive or non_interactive:
      args.append('--non-interactive')
    if credentials:
      if self.commit_user:
        args.extend(['--username', self.commit_user])
      if self.commit_pwd:
        args.extend(['--password', self.commit_pwd])
    return args

  def _check_call_svn(self, args, **kwargs):
    """Runs svn and throws an exception if the command failed."""
    kwargs.setdefault('cwd', self.project_path)
    kwargs.setdefault('stdout', self.VOID)
    kwargs.setdefault('timeout', GLOBAL_TIMEOUT)
    return subprocess2.check_call_out(
        self._add_svn_flags(args, False), **kwargs)

  def _check_output_svn(self, args, credentials=True, **kwargs):
    """Runs svn and throws an exception if the command failed.

     Returns the output.
    """
    kwargs.setdefault('cwd', self.project_path)
    return subprocess2.check_output(
        self._add_svn_flags(args, True, credentials),
        stderr=subprocess2.STDOUT,
        timeout=GLOBAL_TIMEOUT,
        **kwargs)

  @staticmethod
  def _parse_svn_info(output, key):
    """Returns value for key from svn info output.

    Case insensitive.
    """
    values = {}
    key = key.lower()
    for line in output.splitlines(False):
      if not line:
        continue
      k, v = line.split(':', 1)
      k = k.strip().lower()
      v = v.strip()
      assert not k in values
      values[k] = v
    return values.get(key, None)


class SvnCheckout(CheckoutBase, SvnMixIn):
  """Manages a subversion checkout."""
  def __init__(self, root_dir, project_name, commit_user, commit_pwd, svn_url,
      post_processors=None):
    CheckoutBase.__init__(self, root_dir, project_name, post_processors)
    SvnMixIn.__init__(self)
    self.commit_user = commit_user
    self.commit_pwd = commit_pwd
    self.svn_url = svn_url
    assert bool(self.commit_user) >= bool(self.commit_pwd)

  def prepare(self, revision):
    # Will checkout if the directory is not present.
    assert self.svn_url
    if not os.path.isdir(self.project_path):
      logging.info('Checking out %s in %s' %
          (self.project_name, self.project_path))
    return self._revert(revision)

  def apply_patch(self, patches, post_processors=None, verbose=False):
    post_processors = post_processors or self.post_processors or []
    for p in patches:
      stdout = []
      try:
        filepath = os.path.join(self.project_path, p.filename)
        # It is important to use credentials=False otherwise credentials could
        # leak in the error message. Credentials are not necessary here for the
        # following commands anyway.
        if p.is_delete:
          stdout.append(self._check_output_svn(
              ['delete', p.filename, '--force'], credentials=False))
          stdout.append('Deleted.')
        else:
          # svn add while creating directories otherwise svn add on the
          # contained files will silently fail.
          # First, find the root directory that exists.
          dirname = os.path.dirname(p.filename)
          dirs_to_create = []
          while (dirname and
              not os.path.isdir(os.path.join(self.project_path, dirname))):
            dirs_to_create.append(dirname)
            dirname = os.path.dirname(dirname)
          for dir_to_create in reversed(dirs_to_create):
            os.mkdir(os.path.join(self.project_path, dir_to_create))
            stdout.append(
                self._check_output_svn(
                  ['add', dir_to_create, '--force'], credentials=False))
            stdout.append('Created missing directory %s.' % dir_to_create)

          if p.is_binary:
            content = p.get()
            with open(filepath, 'wb') as f:
              f.write(content)
            stdout.append('Added binary file %d bytes.' % len(content))
          else:
            if p.source_filename:
              if not p.is_new:
                raise PatchApplicationFailed(
                    p,
                    'File has a source filename specified but is not new')
              # Copy the file first.
              if os.path.isfile(filepath):
                raise PatchApplicationFailed(
                    p, 'File exist but was about to be overwriten')
              stdout.append(
                  self._check_output_svn(
                    ['copy', p.source_filename, p.filename]))
              stdout.append('Copied %s -> %s' % (p.source_filename, p.filename))
            if p.diff_hunks:
              cmd = [
                'patch',
                '-p%s' % p.patchlevel,
                '--forward',
                '--force',
                '--no-backup-if-mismatch',
              ]
              env = os.environ.copy()
              env['TMPDIR'] = tempfile.mkdtemp(prefix='crpatch')
              try:
                stdout.append(
                    subprocess2.check_output(
                      cmd,
                      stdin=p.get(False),
                      cwd=self.project_path,
                      timeout=GLOBAL_TIMEOUT,
                      env=env))
              finally:
                shutil.rmtree(env['TMPDIR'])

            elif p.is_new and not os.path.exists(filepath):
              # There is only a header. Just create the file if it doesn't
              # exist.
              open(filepath, 'w').close()
              stdout.append('Created an empty file.')
          if p.is_new and not p.source_filename:
            # Do not run it if p.source_filename is defined, since svn copy was
            # using above.
            stdout.append(
                self._check_output_svn(
                  ['add', p.filename, '--force'], credentials=False))
          for name, value in p.svn_properties:
            if value is None:
              stdout.append(
                  self._check_output_svn(
                    ['propdel', '--quiet', name, p.filename],
                    credentials=False))
              stdout.append('Property %s deleted.' % name)
            else:
              stdout.append(
                  self._check_output_svn(
                    ['propset', name, value, p.filename], credentials=False))
              stdout.append('Property %s=%s' % (name, value))
          for prop, values in self.svn_config.auto_props.iteritems():
            if fnmatch.fnmatch(p.filename, prop):
              for value in values.split(';'):
                if '=' not in value:
                  params = [value, '.']
                else:
                  params = value.split('=', 1)
                if params[1] == '*':
                  # Works around crbug.com/150960 on Windows.
                  params[1] = '.'
                stdout.append(
                    self._check_output_svn(
                      ['propset'] + params + [p.filename], credentials=False))
                stdout.append('Property (auto) %s' % '='.join(params))
        for post in post_processors:
          post(self, p)
        if verbose:
          print p.filename
          print align_stdout(stdout)
      except OSError, e:
        raise PatchApplicationFailed(p, '%s%s' % (align_stdout(stdout), e))
      except subprocess.CalledProcessError, e:
        raise PatchApplicationFailed(
            p,
            'While running %s;\n%s%s' % (
              ' '.join(e.cmd),
              align_stdout(stdout),
              align_stdout([getattr(e, 'stdout', '')])))

  def commit(self, commit_message, user):
    logging.info('Committing patch for %s' % user)
    assert self.commit_user
    assert isinstance(commit_message, unicode)
    handle, commit_filename = tempfile.mkstemp(text=True)
    try:
      # Shouldn't assume default encoding is UTF-8. But really, if you are using
      # anything else, you are living in another world.
      os.write(handle, commit_message.encode('utf-8'))
      os.close(handle)
      # When committing, svn won't update the Revision metadata of the checkout,
      # so if svn commit returns "Committed revision 3.", svn info will still
      # return "Revision: 2". Since running svn update right after svn commit
      # creates a race condition with other committers, this code _must_ parse
      # the output of svn commit and use a regexp to grab the revision number.
      # Note that "Committed revision N." is localized but subprocess2 forces
      # LANGUAGE=en.
      args = ['commit', '--file', commit_filename]
      # realauthor is parsed by a server-side hook.
      if user and user != self.commit_user:
        args.extend(['--with-revprop', 'realauthor=%s' % user])
      out = self._check_output_svn(args)
    finally:
      os.remove(commit_filename)
    lines = filter(None, out.splitlines())
    match = re.match(r'^Committed revision (\d+).$', lines[-1])
    if not match:
      raise PatchApplicationFailed(
          None,
          'Couldn\'t make sense out of svn commit message:\n' + out)
    return int(match.group(1))

  def _revert(self, revision):
    """Reverts local modifications or checks out if the directory is not
    present. Use depot_tools's functionality to do this.
    """
    flags = ['--ignore-externals']
    if revision:
      flags.extend(['--revision', str(revision)])
    if os.path.isdir(self.project_path):
      # This may remove any part (or all) of the checkout.
      scm.SVN.Revert(self.project_path, no_ignore=True)

    if os.path.isdir(self.project_path):
      # Revive files that were deleted in scm.SVN.Revert().
      self._check_call_svn(['update', '--force'] + flags,
                           timeout=FETCH_TIMEOUT)
    else:
      logging.info(
          'Directory %s is not present, checking it out.' % self.project_path)
      self._check_call_svn(
          ['checkout', self.svn_url, self.project_path] + flags, cwd=None,
          timeout=FETCH_TIMEOUT)
    return self._get_revision()

  def _get_revision(self):
    out = self._check_output_svn(['info', '.'])
    revision = int(self._parse_svn_info(out, 'revision'))
    if revision != self._last_seen_revision:
      logging.info('Updated to revision %d' % revision)
      self._last_seen_revision = revision
    return revision

  def revisions(self, rev1, rev2):
    """Returns the number of actual commits, not just the difference between
    numbers.
    """
    rev2 = rev2 or 'HEAD'
    # Revision range is inclusive and ordering doesn't matter, they'll appear in
    # the order specified.
    try:
      out = self._check_output_svn(
          ['log', '-q', self.svn_url, '-r', '%s:%s' % (rev1, rev2)])
    except subprocess.CalledProcessError:
      return None
    # Ignore the '----' lines.
    return len([l for l in out.splitlines() if l.startswith('r')]) - 1


class GitCheckout(CheckoutBase):
  """Manages a git checkout."""
  def __init__(self, root_dir, project_name, remote_branch, git_url,
      commit_user, post_processors=None):
    super(GitCheckout, self).__init__(root_dir, project_name, post_processors)
    self.git_url = git_url
    self.commit_user = commit_user
    self.remote_branch = remote_branch
    # The working branch where patches will be applied. It will track the
    # remote branch.
    self.working_branch = 'working_branch'
    # There is no reason to not hardcode origin.
    self.remote = 'origin'
    # There is no reason to not hardcode master.
    self.master_branch = 'master'

  def prepare(self, revision):
    """Resets the git repository in a clean state.

    Checks it out if not present and deletes the working branch.
    """
    assert self.remote_branch
    assert self.git_url

    if not os.path.isdir(self.project_path):
      # Clone the repo if the directory is not present.
      logging.info(
          'Checking out %s in %s', self.project_name, self.project_path)
      self._check_call_git(
          ['clone', self.git_url, '-b', self.remote_branch, self.project_path],
          cwd=None, timeout=FETCH_TIMEOUT)
    else:
      # Throw away all uncommitted changes in the existing checkout.
      self._check_call_git(['checkout', self.remote_branch])
      self._check_call_git(
          ['reset', '--hard', '--quiet',
           '%s/%s' % (self.remote, self.remote_branch)])

    if revision:
      try:
        # Look if the commit hash already exist. If so, we can skip a
        # 'git fetch' call.
        revision = self._check_output_git(['rev-parse', revision])
      except subprocess.CalledProcessError:
        self._check_call_git(
            ['fetch', self.remote, self.remote_branch, '--quiet'])
        revision = self._check_output_git(['rev-parse', revision])
      self._check_call_git(['checkout', '--force', '--quiet', revision])
    else:
      branches, active = self._branches()
      if active != self.master_branch:
        self._check_call_git(
            ['checkout', '--force', '--quiet', self.master_branch])
      self._sync_remote_branch()

      if self.working_branch in branches:
        self._call_git(['branch', '-D', self.working_branch])
    return self._get_head_commit_hash()

  def _sync_remote_branch(self):
    """Syncs the remote branch."""
    # We do a 'git pull origin master:refs/remotes/origin/master' instead of
    # 'git pull origin master' because from the manpage for git-pull: 
    #   A parameter <ref> without a colon is equivalent to <ref>: when
    #   pulling/fetching, so it merges <ref> into the current branch without
    #   storing the remote branch anywhere locally.
    remote_tracked_path = 'refs/remotes/%s/%s' % (
        self.remote, self.remote_branch)
    self._check_call_git(
        ['pull', self.remote,
         '%s:%s' % (self.remote_branch, remote_tracked_path),
         '--quiet'])

  def _get_head_commit_hash(self):
    """Gets the current revision (in unicode) from the local branch."""
    return unicode(self._check_output_git(['rev-parse', 'HEAD']).strip())

  def apply_patch(self, patches, post_processors=None, verbose=False):
    """Applies a patch on 'working_branch' and switches to it.

    Also commits the changes on the local branch.

    Ignores svn properties and raise an exception on unexpected ones.
    """
    post_processors = post_processors or self.post_processors or []
    # It this throws, the checkout is corrupted. Maybe worth deleting it and
    # trying again?
    if self.remote_branch:
      self._check_call_git(
          ['checkout', '-b', self.working_branch, '-t', self.remote_branch,
           '--quiet'])

    for index, p in enumerate(patches):
      stdout = []
      try:
        filepath = os.path.join(self.project_path, p.filename)
        if p.is_delete:
          if (not os.path.exists(filepath) and
              any(p1.source_filename == p.filename for p1 in patches[0:index])):
            # The file was already deleted if a prior patch with file rename
            # was already processed because 'git apply' did it for us.
            pass
          else:
            stdout.append(self._check_output_git(['rm', p.filename]))
            stdout.append('Deleted.')
        else:
          dirname = os.path.dirname(p.filename)
          full_dir = os.path.join(self.project_path, dirname)
          if dirname and not os.path.isdir(full_dir):
            os.makedirs(full_dir)
            stdout.append('Created missing directory %s.' % dirname)
          if p.is_binary:
            content = p.get()
            with open(filepath, 'wb') as f:
              f.write(content)
            stdout.append('Added binary file %d bytes' % len(content))
            cmd = ['add', p.filename]
            if verbose:
              cmd.append('--verbose')
            stdout.append(self._check_output_git(cmd))
          else:
            # No need to do anything special with p.is_new or if not
            # p.diff_hunks. git apply manages all that already.
            cmd = ['apply', '--index', '-p%s' % p.patchlevel]
            if verbose:
              cmd.append('--verbose')
            stdout.append(self._check_output_git(cmd, stdin=p.get(True)))
          for name, value in p.svn_properties:
            # Ignore some known auto-props flags through .subversion/config,
            # bails out on the other ones.
            # TODO(maruel): Read ~/.subversion/config and detect the rules that
            # applies here to figure out if the property will be correctly
            # handled.
            stdout.append('Property %s=%s' % (name, value))
            if not name in (
                'svn:eol-style', 'svn:executable', 'svn:mime-type'):
              raise patch.UnsupportedPatchFormat(
                  p.filename,
                  'Cannot apply svn property %s to file %s.' % (
                        name, p.filename))
        for post in post_processors:
          post(self, p)
        if verbose:
          print p.filename
          print align_stdout(stdout)
      except OSError, e:
        raise PatchApplicationFailed(p, '%s%s' % (align_stdout(stdout), e))
      except subprocess.CalledProcessError, e:
        raise PatchApplicationFailed(
            p,
            'While running %s;\n%s%s' % (
              ' '.join(e.cmd),
              align_stdout(stdout),
              align_stdout([getattr(e, 'stdout', '')])))
    # Once all the patches are processed and added to the index, commit the
    # index.
    cmd = ['commit', '-m', 'Committed patch']
    if verbose:
      cmd.append('--verbose')
    self._check_call_git(cmd)
    found_files = self._check_output_git(
        ['diff', '%s/%s' % (self.remote,
                            self.remote_branch or self.master_branch),
         '--name-only']).splitlines(False)
    assert sorted(patches.filenames) == sorted(found_files), (
        sorted(patches.filenames), sorted(found_files))

  def commit(self, commit_message, user):
    """Commits, updates the commit message and pushes."""
    assert self.commit_user
    assert isinstance(commit_message, unicode)
    current_branch = self._check_output_git(
        ['rev-parse', '--abbrev-ref', 'HEAD']).strip()
    assert current_branch == self.working_branch
 
    commit_cmd = ['commit', '--amend', '-m', commit_message]
    if user and user != self.commit_user:
      # We do not have the first or last name of the user, grab the username
      # from the email and call it the original author's name.
      # TODO(rmistry): Do not need the below if user is already in
      #                "Name <email>" format.
      name = user.split('@')[0]
      commit_cmd.extend(['--author', '%s <%s>' % (name, user)])
    self._check_call_git(commit_cmd)

    # Push to the remote repository.
    self._check_call_git(
        ['push', 'origin', '%s:%s' % (self.working_branch, self.remote_branch),
         '--force', '--quiet'])
    # Get the revision after the push.
    revision = self._get_head_commit_hash()
    # Switch back to the remote_branch and sync it.
    self._check_call_git(['checkout', self.remote_branch])
    self._sync_remote_branch()
    # Delete the working branch since we are done with it.
    self._check_call_git(['branch', '-D', self.working_branch])

    return revision

  def _check_call_git(self, args, **kwargs):
    kwargs.setdefault('cwd', self.project_path)
    kwargs.setdefault('stdout', self.VOID)
    kwargs.setdefault('timeout', GLOBAL_TIMEOUT)
    return subprocess2.check_call_out(['git'] + args, **kwargs)

  def _call_git(self, args, **kwargs):
    """Like check_call but doesn't throw on failure."""
    kwargs.setdefault('cwd', self.project_path)
    kwargs.setdefault('stdout', self.VOID)
    kwargs.setdefault('timeout', GLOBAL_TIMEOUT)
    return subprocess2.call(['git'] + args, **kwargs)

  def _check_output_git(self, args, **kwargs):
    kwargs.setdefault('cwd', self.project_path)
    kwargs.setdefault('timeout', GLOBAL_TIMEOUT)
    return subprocess2.check_output(
        ['git'] + args, stderr=subprocess2.STDOUT, **kwargs)

  def _branches(self):
    """Returns the list of branches and the active one."""
    out = self._check_output_git(['branch']).splitlines(False)
    branches = [l[2:] for l in out]
    active = None
    for l in out:
      if l.startswith('*'):
        active = l[2:]
        break
    return branches, active

  def revisions(self, rev1, rev2):
    """Returns the number of actual commits between both hash."""
    self._fetch_remote()

    rev2 = rev2 or '%s/%s' % (self.remote, self.remote_branch)
    # Revision range is ]rev1, rev2] and ordering matters.
    try:
      out = self._check_output_git(
          ['log', '--format="%H"' , '%s..%s' % (rev1, rev2)])
    except subprocess.CalledProcessError:
      return None
    return len(out.splitlines())

  def _fetch_remote(self):
    """Fetches the remote without rebasing."""
    # git fetch is always verbose even with -q, so redirect its output.
    self._check_output_git(['fetch', self.remote, self.remote_branch],
                           timeout=FETCH_TIMEOUT)


class ReadOnlyCheckout(object):
  """Converts a checkout into a read-only one."""
  def __init__(self, checkout, post_processors=None):
    super(ReadOnlyCheckout, self).__init__()
    self.checkout = checkout
    self.post_processors = (post_processors or []) + (
        self.checkout.post_processors or [])

  def prepare(self, revision):
    return self.checkout.prepare(revision)

  def get_settings(self, key):
    return self.checkout.get_settings(key)

  def apply_patch(self, patches, post_processors=None, verbose=False):
    return self.checkout.apply_patch(
        patches, post_processors or self.post_processors, verbose)

  def commit(self, message, user):  # pylint: disable=R0201
    logging.info('Would have committed for %s with message: %s' % (
        user, message))
    return 'FAKE'

  def revisions(self, rev1, rev2):
    return self.checkout.revisions(rev1, rev2)

  @property
  def project_name(self):
    return self.checkout.project_name

  @property
  def project_path(self):
    return self.checkout.project_path

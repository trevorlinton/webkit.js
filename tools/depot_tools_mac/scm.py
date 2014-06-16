# Copyright (c) 2012 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

"""SCM-specific utility classes."""

import cStringIO
import glob
import logging
import os
import re
import sys
import tempfile
import time
from xml.etree import ElementTree

import gclient_utils
import subprocess2


def ValidateEmail(email):
  return (re.match(r"^[a-zA-Z0-9._%-+]+@[a-zA-Z0-9._%-]+.[a-zA-Z]{2,6}$", email)
          is not None)


def GetCasedPath(path):
  """Elcheapos way to get the real path case on Windows."""
  if sys.platform.startswith('win') and os.path.exists(path):
    # Reconstruct the path.
    path = os.path.abspath(path)
    paths = path.split('\\')
    for i in range(len(paths)):
      if i == 0:
        # Skip drive letter.
        continue
      subpath = '\\'.join(paths[:i+1])
      prev = len('\\'.join(paths[:i]))
      # glob.glob will return the cased path for the last item only. This is why
      # we are calling it in a loop. Extract the data we want and put it back
      # into the list.
      paths[i] = glob.glob(subpath + '*')[0][prev+1:len(subpath)]
    path = '\\'.join(paths)
  return path


def GenFakeDiff(filename):
  """Generates a fake diff from a file."""
  file_content = gclient_utils.FileRead(filename, 'rb').splitlines(True)
  filename = filename.replace(os.sep, '/')
  nb_lines = len(file_content)
  # We need to use / since patch on unix will fail otherwise.
  data = cStringIO.StringIO()
  data.write("Index: %s\n" % filename)
  data.write('=' * 67 + '\n')
  # Note: Should we use /dev/null instead?
  data.write("--- %s\n" % filename)
  data.write("+++ %s\n" % filename)
  data.write("@@ -0,0 +1,%d @@\n" % nb_lines)
  # Prepend '+' to every lines.
  for line in file_content:
    data.write('+')
    data.write(line)
  result = data.getvalue()
  data.close()
  return result


def determine_scm(root):
  """Similar to upload.py's version but much simpler.

  Returns 'svn', 'git' or None.
  """
  if os.path.isdir(os.path.join(root, '.svn')):
    return 'svn'
  elif os.path.isdir(os.path.join(root, '.git')):
    return 'git'
  else:
    try:
      subprocess2.check_call(
          ['git', 'rev-parse', '--show-cdup'],
          stdout=subprocess2.VOID,
          stderr=subprocess2.VOID,
          cwd=root)
      return 'git'
    except (OSError, subprocess2.CalledProcessError):
      return None


def only_int(val):
  if val.isdigit():
    return int(val)
  else:
    return 0


class GIT(object):
  current_version = None

  @staticmethod
  def Capture(args, cwd, strip_out=True, **kwargs):
    env = os.environ.copy()
    # 'cat' is a magical git string that disables pagers on all platforms.
    env['GIT_PAGER'] = 'cat'
    output = subprocess2.check_output(
        ['git'] + args,
        cwd=cwd, stderr=subprocess2.PIPE, env=env, **kwargs)
    return output.strip() if strip_out else output

  @staticmethod
  def CaptureStatus(files, cwd, upstream_branch):
    """Returns git status.

    @files can be a string (one file) or a list of files.

    Returns an array of (status, file) tuples."""
    if upstream_branch is None:
      upstream_branch = GIT.GetUpstreamBranch(cwd)
      if upstream_branch is None:
        raise gclient_utils.Error('Cannot determine upstream branch')
    command = ['diff', '--name-status', '--no-renames',
               '-r', '%s...' % upstream_branch]
    if not files:
      pass
    elif isinstance(files, basestring):
      command.append(files)
    else:
      command.extend(files)
    status = GIT.Capture(command, cwd)
    results = []
    if status:
      for statusline in status.splitlines():
        # 3-way merges can cause the status can be 'MMM' instead of 'M'. This
        # can happen when the user has 2 local branches and he diffs between
        # these 2 branches instead diffing to upstream.
        m = re.match('^(\w)+\t(.+)$', statusline)
        if not m:
          raise gclient_utils.Error(
              'status currently unsupported: %s' % statusline)
        # Only grab the first letter.
        results.append(('%s      ' % m.group(1)[0], m.group(2)))
    return results

  @staticmethod
  def IsWorkTreeDirty(cwd):
    return GIT.Capture(['status', '-s'], cwd=cwd) != ''

  @staticmethod
  def GetEmail(cwd):
    """Retrieves the user email address if known."""
    # We could want to look at the svn cred when it has a svn remote but it
    # should be fine for now, users should simply configure their git settings.
    try:
      return GIT.Capture(['config', 'user.email'], cwd=cwd)
    except subprocess2.CalledProcessError:
      return ''

  @staticmethod
  def ShortBranchName(branch):
    """Converts a name like 'refs/heads/foo' to just 'foo'."""
    return branch.replace('refs/heads/', '')

  @staticmethod
  def GetBranchRef(cwd):
    """Returns the full branch reference, e.g. 'refs/heads/master'."""
    return GIT.Capture(['symbolic-ref', 'HEAD'], cwd=cwd)

  @staticmethod
  def GetBranch(cwd):
    """Returns the short branch name, e.g. 'master'."""
    return GIT.ShortBranchName(GIT.GetBranchRef(cwd))

  @staticmethod
  def IsGitSvn(cwd):
    """Returns True if this repo looks like it's using git-svn."""
    # If you have any "svn-remote.*" config keys, we think you're using svn.
    try:
      GIT.Capture(['config', '--local', '--get-regexp', r'^svn-remote\.'],
                  cwd=cwd)
      return True
    except subprocess2.CalledProcessError:
      return False

  @staticmethod
  def MatchSvnGlob(url, base_url, glob_spec, allow_wildcards):
    """Return the corresponding git ref if |base_url| together with |glob_spec|
    matches the full |url|.

    If |allow_wildcards| is true, |glob_spec| can contain wildcards (see below).
    """
    fetch_suburl, as_ref = glob_spec.split(':')
    if allow_wildcards:
      glob_match = re.match('(.+/)?(\*|{[^/]*})(/.+)?', fetch_suburl)
      if glob_match:
        # Parse specs like "branches/*/src:refs/remotes/svn/*" or
        # "branches/{472,597,648}/src:refs/remotes/svn/*".
        branch_re = re.escape(base_url)
        if glob_match.group(1):
          branch_re += '/' + re.escape(glob_match.group(1))
        wildcard = glob_match.group(2)
        if wildcard == '*':
          branch_re += '([^/]*)'
        else:
          # Escape and replace surrounding braces with parentheses and commas
          # with pipe symbols.
          wildcard = re.escape(wildcard)
          wildcard = re.sub('^\\\\{', '(', wildcard)
          wildcard = re.sub('\\\\,', '|', wildcard)
          wildcard = re.sub('\\\\}$', ')', wildcard)
          branch_re += wildcard
        if glob_match.group(3):
          branch_re += re.escape(glob_match.group(3))
        match = re.match(branch_re, url)
        if match:
          return re.sub('\*$', match.group(1), as_ref)

    # Parse specs like "trunk/src:refs/remotes/origin/trunk".
    if fetch_suburl:
      full_url = base_url + '/' + fetch_suburl
    else:
      full_url = base_url
    if full_url == url:
      return as_ref
    return None

  @staticmethod
  def GetSVNBranch(cwd):
    """Returns the svn branch name if found."""
    # Try to figure out which remote branch we're based on.
    # Strategy:
    # 1) iterate through our branch history and find the svn URL.
    # 2) find the svn-remote that fetches from the URL.

    # regexp matching the git-svn line that contains the URL.
    git_svn_re = re.compile(r'^\s*git-svn-id: (\S+)@', re.MULTILINE)

    # We don't want to go through all of history, so read a line from the
    # pipe at a time.
    # The -100 is an arbitrary limit so we don't search forever.
    cmd = ['git', 'log', '-100', '--pretty=medium']
    proc = subprocess2.Popen(cmd, cwd=cwd, stdout=subprocess2.PIPE)
    url = None
    for line in proc.stdout:
      match = git_svn_re.match(line)
      if match:
        url = match.group(1)
        proc.stdout.close()  # Cut pipe.
        break

    if url:
      svn_remote_re = re.compile(r'^svn-remote\.([^.]+)\.url (.*)$')
      remotes = GIT.Capture(
          ['config', '--local', '--get-regexp', r'^svn-remote\..*\.url'],
          cwd=cwd).splitlines()
      for remote in remotes:
        match = svn_remote_re.match(remote)
        if match:
          remote = match.group(1)
          base_url = match.group(2)
          try:
            fetch_spec = GIT.Capture(
                ['config', '--local', 'svn-remote.%s.fetch' % remote],
                cwd=cwd)
            branch = GIT.MatchSvnGlob(url, base_url, fetch_spec, False)
          except subprocess2.CalledProcessError:
            branch = None
          if branch:
            return branch
          try:
            branch_spec = GIT.Capture(
                ['config', '--local', 'svn-remote.%s.branches' % remote],
                cwd=cwd)
            branch = GIT.MatchSvnGlob(url, base_url, branch_spec, True)
          except subprocess2.CalledProcessError:
            branch = None
          if branch:
            return branch
          try:
            tag_spec = GIT.Capture(
                ['config', '--local', 'svn-remote.%s.tags' % remote],
                cwd=cwd)
            branch = GIT.MatchSvnGlob(url, base_url, tag_spec, True)
          except subprocess2.CalledProcessError:
            branch = None
          if branch:
            return branch

  @staticmethod
  def FetchUpstreamTuple(cwd):
    """Returns a tuple containg remote and remote ref,
       e.g. 'origin', 'refs/heads/master'
       Tries to be intelligent and understand git-svn.
    """
    remote = '.'
    branch = GIT.GetBranch(cwd)
    try:
      upstream_branch = GIT.Capture(
          ['config', '--local', 'branch.%s.merge' % branch], cwd=cwd)
    except subprocess2.CalledProcessError:
      upstream_branch = None
    if upstream_branch:
      try:
        remote = GIT.Capture(
            ['config', '--local', 'branch.%s.remote' % branch], cwd=cwd)
      except subprocess2.CalledProcessError:
        pass
    else:
      try:
        upstream_branch = GIT.Capture(
            ['config', '--local', 'rietveld.upstream-branch'], cwd=cwd)
      except subprocess2.CalledProcessError:
        upstream_branch = None
      if upstream_branch:
        try:
          remote = GIT.Capture(
              ['config', '--local', 'rietveld.upstream-remote'], cwd=cwd)
        except subprocess2.CalledProcessError:
          pass
      else:
        # Fall back on trying a git-svn upstream branch.
        if GIT.IsGitSvn(cwd):
          upstream_branch = GIT.GetSVNBranch(cwd)
        else:
          # Else, try to guess the origin remote.
          remote_branches = GIT.Capture(['branch', '-r'], cwd=cwd).split()
          if 'origin/master' in remote_branches:
            # Fall back on origin/master if it exits.
            remote = 'origin'
            upstream_branch = 'refs/heads/master'
          elif 'origin/trunk' in remote_branches:
            # Fall back on origin/trunk if it exists. Generally a shared
            # git-svn clone
            remote = 'origin'
            upstream_branch = 'refs/heads/trunk'
          else:
            # Give up.
            remote = None
            upstream_branch = None
    return remote, upstream_branch

  @staticmethod
  def GetUpstreamBranch(cwd):
    """Gets the current branch's upstream branch."""
    remote, upstream_branch = GIT.FetchUpstreamTuple(cwd)
    if remote != '.' and upstream_branch:
      upstream_branch = upstream_branch.replace('heads', 'remotes/' + remote)
    return upstream_branch

  @staticmethod
  def GenerateDiff(cwd, branch=None, branch_head='HEAD', full_move=False,
                   files=None):
    """Diffs against the upstream branch or optionally another branch.

    full_move means that move or copy operations should completely recreate the
    files, usually in the prospect to apply the patch for a try job."""
    if not branch:
      branch = GIT.GetUpstreamBranch(cwd)
    command = ['diff', '-p', '--no-color', '--no-prefix', '--no-ext-diff',
               branch + "..." + branch_head]
    if full_move:
      command.append('--no-renames')
    else:
      command.append('-C')
    # TODO(maruel): --binary support.
    if files:
      command.append('--')
      command.extend(files)
    diff = GIT.Capture(command, cwd=cwd, strip_out=False).splitlines(True)
    for i in range(len(diff)):
      # In the case of added files, replace /dev/null with the path to the
      # file being added.
      if diff[i].startswith('--- /dev/null'):
        diff[i] = '--- %s' % diff[i+1][4:]
    return ''.join(diff)

  @staticmethod
  def GetDifferentFiles(cwd, branch=None, branch_head='HEAD'):
    """Returns the list of modified files between two branches."""
    if not branch:
      branch = GIT.GetUpstreamBranch(cwd)
    command = ['diff', '--name-only', branch + "..." + branch_head]
    return GIT.Capture(command, cwd=cwd).splitlines(False)

  @staticmethod
  def GetPatchName(cwd):
    """Constructs a name for this patch."""
    short_sha = GIT.Capture(['rev-parse', '--short=4', 'HEAD'], cwd=cwd)
    return "%s#%s" % (GIT.GetBranch(cwd), short_sha)

  @staticmethod
  def GetCheckoutRoot(cwd):
    """Returns the top level directory of a git checkout as an absolute path.
    """
    root = GIT.Capture(['rev-parse', '--show-cdup'], cwd=cwd)
    return os.path.abspath(os.path.join(cwd, root))

  @staticmethod
  def GetGitDir(cwd):
    return os.path.abspath(GIT.Capture(['rev-parse', '--git-dir'], cwd=cwd))

  @staticmethod
  def IsInsideWorkTree(cwd):
    try:
      return GIT.Capture(['rev-parse', '--is-inside-work-tree'], cwd=cwd)
    except (OSError, subprocess2.CalledProcessError):
      return False

  @staticmethod
  def GetGitSvnHeadRev(cwd):
    """Gets the most recently pulled git-svn revision."""
    try:
      output = GIT.Capture(['svn', 'info'], cwd=cwd)
      match = re.search(r'^Revision: ([0-9]+)$', output, re.MULTILINE)
      return int(match.group(1)) if match else None
    except (subprocess2.CalledProcessError, ValueError):
      return None

  @staticmethod
  def ParseGitSvnSha1(output):
    """Parses git-svn output for the first sha1."""
    match = re.search(r'[0-9a-fA-F]{40}', output)
    return match.group(0) if match else None

  @staticmethod
  def GetSha1ForSvnRev(cwd, rev):
    """Returns a corresponding git sha1 for a SVN revision."""
    if not GIT.IsGitSvn(cwd=cwd):
      return None
    try:
      output = GIT.Capture(['svn', 'find-rev', 'r' + str(rev)], cwd=cwd)
      return GIT.ParseGitSvnSha1(output)
    except subprocess2.CalledProcessError:
      return None

  @staticmethod
  def GetBlessedSha1ForSvnRev(cwd, rev):
    """Returns a git commit hash from the master branch history that has
    accurate .DEPS.git and git submodules.  To understand why this is more
    complicated than a simple call to `git svn find-rev`, refer to:

    http://www.chromium.org/developers/how-tos/git-repo
    """
    git_svn_rev = GIT.GetSha1ForSvnRev(cwd, rev)
    if not git_svn_rev:
      return None
    try:
      output = GIT.Capture(
          ['rev-list', '--ancestry-path', '--reverse',
          '--grep', 'SVN changes up to revision [0-9]*',
          '%s..refs/remotes/origin/master' % git_svn_rev], cwd=cwd)
      if not output:
        return None
      sha1 = output.splitlines()[0]
      if not sha1:
        return None
      output = GIT.Capture(['rev-list', '-n', '1', '%s^1' % sha1], cwd=cwd)
      if git_svn_rev != output.rstrip():
        raise gclient_utils.Error(sha1)
      return sha1
    except subprocess2.CalledProcessError:
      return None

  @staticmethod
  def IsValidRevision(cwd, rev, sha_only=False):
    """Verifies the revision is a proper git revision.

    sha_only: Fail unless rev is a sha hash.
    """
    # 'git rev-parse foo' where foo is *any* 40 character hex string will return
    # the string and return code 0. So strip one character to force 'git
    # rev-parse' to do a hash table look-up and returns 128 if the hash is not
    # present.
    lookup_rev = rev
    if re.match(r'^[0-9a-fA-F]{40}$', rev):
      lookup_rev = rev[:-1]
    try:
      sha = GIT.Capture(['rev-parse', lookup_rev], cwd=cwd).lower()
      if lookup_rev != rev:
        # Make sure we get the original 40 chars back.
        return rev.lower() == sha
      if sha_only:
        return sha.startswith(rev.lower())
      return True
    except subprocess2.CalledProcessError:
      return False

  @classmethod
  def AssertVersion(cls, min_version):
    """Asserts git's version is at least min_version."""
    if cls.current_version is None:
      current_version = cls.Capture(['--version'], '.')
      matched = re.search(r'version ([0-9\.]+)', current_version)
      cls.current_version = matched.group(1)
    current_version_list = map(only_int, cls.current_version.split('.'))
    for min_ver in map(int, min_version.split('.')):
      ver = current_version_list.pop(0)
      if ver < min_ver:
        return (False, cls.current_version)
      elif ver > min_ver:
        return (True, cls.current_version)
    return (True, cls.current_version)


class SVN(object):
  current_version = None

  @staticmethod
  def Capture(args, cwd, **kwargs):
    """Always redirect stderr.

    Throws an exception if non-0 is returned.
    """
    return subprocess2.check_output(
        ['svn'] + args, stderr=subprocess2.PIPE, cwd=cwd, **kwargs)

  @staticmethod
  def RunAndGetFileList(verbose, args, cwd, file_list, stdout=None):
    """Runs svn checkout, update, or status, output to stdout.

    The first item in args must be either "checkout", "update", or "status".

    svn's stdout is parsed to collect a list of files checked out or updated.
    These files are appended to file_list.  svn's stdout is also printed to
    sys.stdout as in Run.

    Args:
      verbose: If True, uses verbose output
      args: A sequence of command line parameters to be passed to svn.
      cwd: The directory where svn is to be run.

    Raises:
      Error: An error occurred while running the svn command.
    """
    stdout = stdout or sys.stdout
    if file_list is None:
      # Even if our caller doesn't care about file_list, we use it internally.
      file_list = []

    # svn update and svn checkout use the same pattern: the first three columns
    # are for file status, property status, and lock status.  This is followed
    # by two spaces, and then the path to the file.
    update_pattern = '^...  (.*)$'

    # The first three columns of svn status are the same as for svn update and
    # svn checkout.  The next three columns indicate addition-with-history,
    # switch, and remote lock status.  This is followed by one space, and then
    # the path to the file.
    status_pattern = '^...... (.*)$'

    # args[0] must be a supported command.  This will blow up if it's something
    # else, which is good.  Note that the patterns are only effective when
    # these commands are used in their ordinary forms, the patterns are invalid
    # for "svn status --show-updates", for example.
    pattern = {
          'checkout': update_pattern,
          'status':   status_pattern,
          'update':   update_pattern,
        }[args[0]]
    compiled_pattern = re.compile(pattern)
    # Place an upper limit.
    backoff_time = 5
    retries = 0
    while True:
      retries += 1
      previous_list_len = len(file_list)
      failure = []

      def CaptureMatchingLines(line):
        match = compiled_pattern.search(line)
        if match:
          file_list.append(match.group(1))
        if line.startswith('svn: '):
          failure.append(line)

      try:
        gclient_utils.CheckCallAndFilterAndHeader(
            ['svn'] + args,
            cwd=cwd,
            always=verbose,
            filter_fn=CaptureMatchingLines,
            stdout=stdout)
      except subprocess2.CalledProcessError:
        def IsKnownFailure():
          for x in failure:
            if (x.startswith('svn: OPTIONS of') or
                x.startswith('svn: PROPFIND of') or
                x.startswith('svn: REPORT of') or
                x.startswith('svn: Unknown hostname') or
                x.startswith('svn: Server sent unexpected return value') or
                x.startswith('svn: Can\'t connect to host')):
              return True
          return False

        # Subversion client is really misbehaving with Google Code.
        if args[0] == 'checkout':
          # Ensure at least one file was checked out, otherwise *delete* the
          # directory.
          if len(file_list) == previous_list_len:
            if not IsKnownFailure():
              # No known svn error was found, bail out.
              raise
            # No file were checked out, so make sure the directory is
            # deleted in case it's messed up and try again.
            # Warning: It's bad, it assumes args[2] is the directory
            # argument.
            if os.path.isdir(args[2]):
              gclient_utils.rmtree(args[2])
          else:
            # Progress was made, convert to update since an aborted checkout
            # is now an update.
            args = ['update'] + args[1:]
        else:
          # It was an update or export.
          # We enforce that some progress has been made or a known failure.
          if len(file_list) == previous_list_len and not IsKnownFailure():
            # No known svn error was found and no progress, bail out.
            raise
        if retries == 10:
          raise
        print "Sleeping %.1f seconds and retrying...." % backoff_time
        time.sleep(backoff_time)
        backoff_time *= 1.3
        continue
      break

  @staticmethod
  def CaptureRemoteInfo(url):
    """Returns a dictionary from the svn info output for the given url.

    Throws an exception if svn info fails.
    """
    assert isinstance(url, str)
    return SVN._CaptureInfo([url], None)

  @staticmethod
  def CaptureLocalInfo(files, cwd):
    """Returns a dictionary from the svn info output for the given files.

    Throws an exception if svn info fails.
    """
    assert isinstance(files, (list, tuple))
    return SVN._CaptureInfo(files, cwd)

  @staticmethod
  def _CaptureInfo(files, cwd):
    """Returns a dictionary from the svn info output for the given file.

    Throws an exception if svn info fails."""
    result = {}
    info = ElementTree.XML(SVN.Capture(['info', '--xml'] + files, cwd))
    if info is None:
      return result
    entry = info.find('entry')
    if entry is None:
      return result

    # Use .text when the item is not optional.
    result['Path'] = entry.attrib['path']
    rev = entry.attrib['revision']
    try:
      result['Revision'] = int(rev)
    except ValueError:
      result['Revision'] = None
    result['Node Kind'] = entry.attrib['kind']
    # Differs across versions.
    if result['Node Kind'] == 'dir':
      result['Node Kind'] = 'directory'
    result['URL'] = entry.find('url').text
    repository = entry.find('repository')
    result['Repository Root'] = repository.find('root').text
    result['UUID'] = repository.find('uuid')
    wc_info = entry.find('wc-info')
    if wc_info is not None:
      result['Schedule'] = wc_info.find('schedule').text
      result['Copied From URL'] = wc_info.find('copy-from-url')
      result['Copied From Rev'] = wc_info.find('copy-from-rev')
    else:
      result['Schedule'] = None
      result['Copied From URL'] = None
      result['Copied From Rev'] = None
    for key in result.keys():
      if isinstance(result[key], unicode):
        # Unicode results interferes with the higher layers matching up things
        # in the deps dictionary.
        result[key] = result[key].encode()
      # Automatic conversion of optional parameters.
      result[key] = getattr(result[key], 'text', result[key])
    return result

  @staticmethod
  def CaptureRevision(cwd):
    """Get the base revision of a SVN repository.

    Returns:
      Int base revision
    """
    return SVN.CaptureLocalInfo([], cwd).get('Revision')

  @staticmethod
  def CaptureStatus(files, cwd, no_ignore=False):
    """Returns the svn 1.5 svn status emulated output.

    @files can be a string (one file) or a list of files.

    Returns an array of (status, file) tuples."""
    command = ["status", "--xml"]
    if no_ignore:
      command.append('--no-ignore')
    if not files:
      pass
    elif isinstance(files, basestring):
      command.append(files)
    else:
      command.extend(files)

    status_letter = {
      None: ' ',
      '': ' ',
      'added': 'A',
      'conflicted': 'C',
      'deleted': 'D',
      'external': 'X',
      'ignored': 'I',
      'incomplete': '!',
      'merged': 'G',
      'missing': '!',
      'modified': 'M',
      'none': ' ',
      'normal': ' ',
      'obstructed': '~',
      'replaced': 'R',
      'unversioned': '?',
    }
    dom = ElementTree.XML(SVN.Capture(command, cwd))
    results = []
    if dom is None:
      return results
    # /status/target/entry/(wc-status|commit|author|date)
    for target in dom.findall('target'):
      for entry in target.findall('entry'):
        file_path = entry.attrib['path']
        wc_status = entry.find('wc-status')
        # Emulate svn 1.5 status ouput...
        statuses = [' '] * 7
        # Col 0
        xml_item_status = wc_status.attrib['item']
        if xml_item_status in status_letter:
          statuses[0] = status_letter[xml_item_status]
        else:
          raise gclient_utils.Error(
              'Unknown item status "%s"; please implement me!' %
                  xml_item_status)
        # Col 1
        xml_props_status = wc_status.attrib['props']
        if xml_props_status == 'modified':
          statuses[1] = 'M'
        elif xml_props_status == 'conflicted':
          statuses[1] = 'C'
        elif (not xml_props_status or xml_props_status == 'none' or
              xml_props_status == 'normal'):
          pass
        else:
          raise gclient_utils.Error(
              'Unknown props status "%s"; please implement me!' %
                  xml_props_status)
        # Col 2
        if wc_status.attrib.get('wc-locked') == 'true':
          statuses[2] = 'L'
        # Col 3
        if wc_status.attrib.get('copied') == 'true':
          statuses[3] = '+'
        # Col 4
        if wc_status.attrib.get('switched') == 'true':
          statuses[4] = 'S'
        # TODO(maruel): Col 5 and 6
        item = (''.join(statuses), file_path)
        results.append(item)
    return results

  @staticmethod
  def IsMoved(filename, cwd):
    """Determine if a file has been added through svn mv"""
    assert isinstance(filename, basestring)
    return SVN.IsMovedInfo(SVN.CaptureLocalInfo([filename], cwd))

  @staticmethod
  def IsMovedInfo(info):
    """Determine if a file has been added through svn mv"""
    return (info.get('Copied From URL') and
            info.get('Copied From Rev') and
            info.get('Schedule') == 'add')

  @staticmethod
  def GetFileProperty(filename, property_name, cwd):
    """Returns the value of an SVN property for the given file.

    Args:
      filename: The file to check
      property_name: The name of the SVN property, e.g. "svn:mime-type"

    Returns:
      The value of the property, which will be the empty string if the property
      is not set on the file.  If the file is not under version control, the
      empty string is also returned.
    """
    try:
      return SVN.Capture(['propget', property_name, filename], cwd)
    except subprocess2.CalledProcessError:
      return ''

  @staticmethod
  def GenerateDiff(filenames, cwd, full_move, revision):
    """Returns a string containing the diff for the given file list.

    The files in the list should either be absolute paths or relative to the
    given root. If no root directory is provided, the repository root will be
    used.
    The diff will always use relative paths.
    """
    assert isinstance(filenames, (list, tuple))
    # If the user specified a custom diff command in their svn config file,
    # then it'll be used when we do svn diff, which we don't want to happen
    # since we want the unified diff.
    if SVN.AssertVersion("1.7")[0]:
      # On svn >= 1.7, the "--internal-diff" flag will solve this.
      return SVN._GenerateDiffInternal(filenames, cwd, full_move, revision,
                                       ["diff", "--internal-diff"],
                                       ["diff", "--internal-diff"])
    else:
      # On svn < 1.7, the "--internal-diff" flag doesn't exist.  Using
      # --diff-cmd=diff doesn't always work, since e.g. Windows cmd users may
      # not have a "diff" executable in their path at all.  So we use an empty
      # temporary directory as the config directory, which bypasses any user
      # settings for the diff-cmd.  However, we don't pass this for the
      # remote_safe_diff_command parameter, since when a new config-dir is
      # specified for an svn diff against a remote URL, it triggers
      # authentication prompts.  In this case there isn't really a good
      # alternative to svn 1.7's --internal-diff flag.
      bogus_dir = tempfile.mkdtemp()
      try:
        return SVN._GenerateDiffInternal(filenames, cwd, full_move, revision,
                                         ["diff", "--config-dir", bogus_dir],
                                         ["diff"])
      finally:
        gclient_utils.rmtree(bogus_dir)

  @staticmethod
  def _GenerateDiffInternal(filenames, cwd, full_move, revision, diff_command,
                            remote_safe_diff_command):
    root = os.path.normcase(os.path.join(cwd, ''))
    def RelativePath(path, root):
      """We must use relative paths."""
      if os.path.normcase(path).startswith(root):
        return path[len(root):]
      return path
    # Cleanup filenames
    filenames = [RelativePath(f, root) for f in filenames]
    # Get information about the modified items (files and directories)
    data = dict((f, SVN.CaptureLocalInfo([f], root)) for f in filenames)
    diffs = []
    if full_move:
      # Eliminate modified files inside moved/copied directory.
      for (filename, info) in data.iteritems():
        if SVN.IsMovedInfo(info) and info.get("Node Kind") == "directory":
          # Remove files inside the directory.
          filenames = [f for f in filenames
                       if not f.startswith(filename + os.path.sep)]
      for filename in data.keys():
        if not filename in filenames:
          # Remove filtered out items.
          del data[filename]
    else:
      metaheaders = []
      for (filename, info) in data.iteritems():
        if SVN.IsMovedInfo(info):
          # for now, the most common case is a head copy,
          # so let's just encode that as a straight up cp.
          srcurl = info.get('Copied From URL')
          file_root = info.get('Repository Root')
          rev = int(info.get('Copied From Rev'))
          assert srcurl.startswith(file_root)
          src = srcurl[len(file_root)+1:]
          try:
            srcinfo = SVN.CaptureRemoteInfo(srcurl)
          except subprocess2.CalledProcessError, e:
            if not 'Not a valid URL' in e.stderr:
              raise
            # Assume the file was deleted. No idea how to figure out at which
            # revision the file was deleted.
            srcinfo = {'Revision': rev}
          if (srcinfo.get('Revision') != rev and
              SVN.Capture(remote_safe_diff_command + ['-r', '%d:head' % rev,
                                                      srcurl], cwd)):
            metaheaders.append("#$ svn cp -r %d %s %s "
                               "### WARNING: note non-trunk copy\n" %
                               (rev, src, filename))
          else:
            metaheaders.append("#$ cp %s %s\n" % (src,
                                                  filename))
      if metaheaders:
        diffs.append("### BEGIN SVN COPY METADATA\n")
        diffs.extend(metaheaders)
        diffs.append("### END SVN COPY METADATA\n")
    # Now ready to do the actual diff.
    for filename in sorted(data):
      diffs.append(SVN._DiffItemInternal(
          filename, cwd, data[filename], diff_command, full_move, revision))
    # Use StringIO since it can be messy when diffing a directory move with
    # full_move=True.
    buf = cStringIO.StringIO()
    for d in filter(None, diffs):
      buf.write(d)
    result = buf.getvalue()
    buf.close()
    return result

  @staticmethod
  def _DiffItemInternal(filename, cwd, info, diff_command, full_move, revision):
    """Grabs the diff data."""
    command = diff_command + [filename]
    if revision:
      command.extend(['--revision', revision])
    data = None
    if SVN.IsMovedInfo(info):
      if full_move:
        if info.get("Node Kind") == "directory":
          # Things become tricky here. It's a directory copy/move. We need to
          # diff all the files inside it.
          # This will put a lot of pressure on the heap. This is why StringIO
          # is used and converted back into a string at the end. The reason to
          # return a string instead of a StringIO is that StringIO.write()
          # doesn't accept a StringIO object. *sigh*.
          for (dirpath, dirnames, filenames) in os.walk(filename):
            # Cleanup all files starting with a '.'.
            for d in dirnames:
              if d.startswith('.'):
                dirnames.remove(d)
            for f in filenames:
              if f.startswith('.'):
                filenames.remove(f)
            for f in filenames:
              if data is None:
                data = cStringIO.StringIO()
              data.write(GenFakeDiff(os.path.join(dirpath, f)))
          if data:
            tmp = data.getvalue()
            data.close()
            data = tmp
        else:
          data = GenFakeDiff(filename)
      else:
        if info.get("Node Kind") != "directory":
          # svn diff on a mv/cp'd file outputs nothing if there was no change.
          data = SVN.Capture(command, cwd)
          if not data:
            # We put in an empty Index entry so upload.py knows about them.
            data = "Index: %s\n" % filename.replace(os.sep, '/')
        # Otherwise silently ignore directories.
    else:
      if info.get("Node Kind") != "directory":
        # Normal simple case.
        try:
          data = SVN.Capture(command, cwd)
        except subprocess2.CalledProcessError:
          if revision:
            data = GenFakeDiff(filename)
          else:
            raise
      # Otherwise silently ignore directories.
    return data

  @staticmethod
  def GetEmail(cwd):
    """Retrieves the svn account which we assume is an email address."""
    try:
      infos = SVN.CaptureLocalInfo([], cwd)
    except subprocess2.CalledProcessError:
      return None

    # Should check for uuid but it is incorrectly saved for https creds.
    root = infos['Repository Root']
    realm = root.rsplit('/', 1)[0]
    uuid = infos['UUID']
    if root.startswith('https') or not uuid:
      regexp = re.compile(r'<%s:\d+>.*' % realm)
    else:
      regexp = re.compile(r'<%s:\d+> %s' % (realm, uuid))
    if regexp is None:
      return None
    if sys.platform.startswith('win'):
      if not 'APPDATA' in os.environ:
        return None
      auth_dir = os.path.join(os.environ['APPDATA'], 'Subversion', 'auth',
                              'svn.simple')
    else:
      if not 'HOME' in os.environ:
        return None
      auth_dir = os.path.join(os.environ['HOME'], '.subversion', 'auth',
                              'svn.simple')
    for credfile in os.listdir(auth_dir):
      cred_info = SVN.ReadSimpleAuth(os.path.join(auth_dir, credfile))
      if regexp.match(cred_info.get('svn:realmstring')):
        return cred_info.get('username')

  @staticmethod
  def ReadSimpleAuth(filename):
    f = open(filename, 'r')
    values = {}
    def ReadOneItem(item_type):
      m = re.match(r'%s (\d+)' % item_type, f.readline())
      if not m:
        return None
      data = f.read(int(m.group(1)))
      if f.read(1) != '\n':
        return None
      return data

    while True:
      key = ReadOneItem('K')
      if not key:
        break
      value = ReadOneItem('V')
      if not value:
        break
      values[key] = value
    return values

  @staticmethod
  def GetCheckoutRoot(cwd):
    """Returns the top level directory of the current repository.

    The directory is returned as an absolute path.
    """
    cwd = os.path.abspath(cwd)
    try:
      info = SVN.CaptureLocalInfo([], cwd)
      cur_dir_repo_root = info['Repository Root']
      url = info['URL']
    except subprocess2.CalledProcessError:
      return None
    while True:
      parent = os.path.dirname(cwd)
      try:
        info = SVN.CaptureLocalInfo([], parent)
        if (info['Repository Root'] != cur_dir_repo_root or
            info['URL'] != os.path.dirname(url)):
          break
        url = info['URL']
      except subprocess2.CalledProcessError:
        break
      cwd = parent
    return GetCasedPath(cwd)

  @staticmethod
  def IsValidRevision(url):
    """Verifies the revision looks like an SVN revision."""
    try:
      SVN.Capture(['info', url], cwd=None)
      return True
    except subprocess2.CalledProcessError:
      return False

  @classmethod
  def AssertVersion(cls, min_version):
    """Asserts svn's version is at least min_version."""
    if cls.current_version is None:
      cls.current_version = cls.Capture(['--version', '--quiet'], None)
    current_version_list = map(only_int, cls.current_version.split('.'))
    for min_ver in map(int, min_version.split('.')):
      ver = current_version_list.pop(0)
      if ver < min_ver:
        return (False, cls.current_version)
      elif ver > min_ver:
        return (True, cls.current_version)
    return (True, cls.current_version)

  @staticmethod
  def Revert(cwd, callback=None, ignore_externals=False, no_ignore=False):
    """Reverts all svn modifications in cwd, including properties.

    Deletes any modified files or directory.

    A "svn update --revision BASE" call is required after to revive deleted
    files.
    """
    for file_status in SVN.CaptureStatus(None, cwd, no_ignore=no_ignore):
      file_path = os.path.join(cwd, file_status[1])
      if (ignore_externals and
          file_status[0][0] == 'X' and
          file_status[0][1:].isspace()):
        # Ignore externals.
        logging.info('Ignoring external %s' % file_status[1])
        continue

      # This is the case where '! L    .' is returned by 'svn status'. Just
      # strip off the '/.'.
      if file_path.endswith(os.path.sep + '.'):
        file_path = file_path[:-2]

      if callback:
        callback(file_status)

      if os.path.exists(file_path):
        # svn revert is really stupid. It fails on inconsistent line-endings,
        # on switched directories, etc. So take no chance and delete everything!
        # In theory, it wouldn't be necessary for property-only change but then
        # it'd have to look for switched directories, etc so it's not worth
        # optimizing this use case.
        if os.path.isfile(file_path) or os.path.islink(file_path):
          logging.info('os.remove(%s)' % file_path)
          os.remove(file_path)
        elif os.path.isdir(file_path):
          logging.info('rmtree(%s)' % file_path)
          gclient_utils.rmtree(file_path)
        else:
          logging.critical(
            ('No idea what is %s.\nYou just found a bug in gclient'
              ', please ping maruel@chromium.org ASAP!') % file_path)

      if (file_status[0][0] in ('D', 'A', '!') or
          not file_status[0][1:].isspace()):
        # Added, deleted file requires manual intervention and require calling
        # revert, like for properties.
        if not os.path.isdir(cwd):
          # '.' was deleted. It's not worth continuing.
          return
        try:
          SVN.Capture(['revert', file_status[1]], cwd=cwd)
        except subprocess2.CalledProcessError:
          if not os.path.exists(file_path):
            continue
          raise

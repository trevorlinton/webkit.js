#!/usr/bin/env python
# Copyright (c) 2012 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

"""\
Wrapper script around Rietveld's upload.py that simplifies working with groups
of files.
"""

import json
import optparse
import os
import random
import re
import ssl
import string
import sys
import tempfile
import time
import urllib2

import breakpad  # pylint: disable=W0611


import fix_encoding
import gclient_utils
import git_cl
import presubmit_support
import rietveld
from scm import SVN
import subprocess2
from third_party import upload

__version__ = '1.2.1'


CODEREVIEW_SETTINGS = {
  # To make gcl send reviews to a server, check in a file named
  # "codereview.settings" (see |CODEREVIEW_SETTINGS_FILE| below) to your
  # project's base directory and add the following line to codereview.settings:
  # CODE_REVIEW_SERVER: codereview.yourserver.org
}

# globals that store the root of the current repository and the directory where
# we store information about changelists.
REPOSITORY_ROOT = ""

# Filename where we store repository specific information for gcl.
CODEREVIEW_SETTINGS_FILE = "codereview.settings"
CODEREVIEW_SETTINGS_FILE_NOT_FOUND = (
    'No %s file found. Please add one.' % CODEREVIEW_SETTINGS_FILE)

# Warning message when the change appears to be missing tests.
MISSING_TEST_MSG = "Change contains new or modified methods, but no new tests!"

# Global cache of files cached in GetCacheDir().
FILES_CACHE = {}

# Valid extensions for files we want to lint.
DEFAULT_LINT_REGEX = r"(.*\.cpp|.*\.cc|.*\.h)"
DEFAULT_LINT_IGNORE_REGEX = r"$^"

def CheckHomeForFile(filename):
  """Checks the users home dir for the existence of the given file.  Returns
  the path to the file if it's there, or None if it is not.
  """
  home_vars = ['HOME']
  if sys.platform in ('cygwin', 'win32'):
    home_vars.append('USERPROFILE')
  for home_var in home_vars:
    home = os.getenv(home_var)
    if home != None:
      full_path = os.path.join(home, filename)
      if os.path.exists(full_path):
        return full_path
  return None


def UnknownFiles():
  """Runs svn status and returns unknown files."""
  return [
      item[1] for item in SVN.CaptureStatus([], GetRepositoryRoot())
      if item[0][0] == '?'
  ]


def GetRepositoryRoot():
  """Returns the top level directory of the current repository.

  The directory is returned as an absolute path.
  """
  global REPOSITORY_ROOT
  if not REPOSITORY_ROOT:
    REPOSITORY_ROOT = SVN.GetCheckoutRoot(os.getcwd())
    if not REPOSITORY_ROOT:
      raise gclient_utils.Error("gcl run outside of repository")
  return REPOSITORY_ROOT


def GetInfoDir():
  """Returns the directory where gcl info files are stored."""
  return os.path.join(GetRepositoryRoot(), '.svn', 'gcl_info')


def GetChangesDir():
  """Returns the directory where gcl change files are stored."""
  return os.path.join(GetInfoDir(), 'changes')


def GetCacheDir():
  """Returns the directory where gcl change files are stored."""
  return os.path.join(GetInfoDir(), 'cache')


def GetCachedFile(filename, max_age=60*60*24*3, use_root=False):
  """Retrieves a file from the repository and caches it in GetCacheDir() for
  max_age seconds.

  use_root: If False, look up the arborescence for the first match, otherwise go
            directory to the root repository.

  Note: The cache will be inconsistent if the same file is retrieved with both
        use_root=True and use_root=False. Don't be stupid.
  """
  if filename not in FILES_CACHE:
    # Don't try to look up twice.
    FILES_CACHE[filename] = None
    # First we check if we have a cached version.
    try:
      cached_file = os.path.join(GetCacheDir(), filename)
    except (gclient_utils.Error, subprocess2.CalledProcessError):
      return None
    if (not os.path.exists(cached_file) or
        (time.time() - os.stat(cached_file).st_mtime) > max_age):
      dir_info = SVN.CaptureLocalInfo([], '.')
      repo_root = dir_info['Repository Root']
      if use_root:
        url_path = repo_root
      else:
        url_path = dir_info['URL']
      while True:
        # Look in the repository at the current level for the file.
        for _ in range(5):
          content = None
          try:
            # Take advantage of the fact that svn won't output to stderr in case
            # of success but will do in case of failure so don't mind putting
            # stderr into content_array.
            content_array = []
            svn_path = url_path + '/' + filename
            args = ['svn', 'cat', svn_path]
            if sys.platform != 'darwin':
              # MacOSX 10.5.2 has a bug with svn 1.4.4 that will trigger the
              # 'Can\'t get username or password' and can be fixed easily.
              # The fix doesn't work if the user upgraded to svn 1.6.x. Bleh.
              # I don't have time to fix their broken stuff.
              args.append('--non-interactive')
            gclient_utils.CheckCallAndFilter(
                args, cwd='.', filter_fn=content_array.append)
            # Exit the loop if the file was found. Override content.
            content = '\n'.join(content_array)
            break
          except (gclient_utils.Error, subprocess2.CalledProcessError):
            if content_array[0].startswith(
                'svn: Can\'t get username or password'):
              ErrorExit('Your svn credentials expired. Please run svn update '
                        'to fix the cached credentials')
            if content_array[0].startswith('svn: Can\'t get password'):
              ErrorExit('If are using a Mac and svn --version shows 1.4.x, '
                  'please hack gcl.py to remove --non-interactive usage, it\'s'
                  'a bug on your installed copy')
            if (content_array[0].startswith('svn: File not found:') or
                content_array[0].endswith('path not found')):
              break
            # Otherwise, fall through to trying again.
        if content:
          break
        if url_path == repo_root:
          # Reached the root. Abandoning search.
          break
        # Go up one level to try again.
        url_path = os.path.dirname(url_path)
      if content is not None or filename != CODEREVIEW_SETTINGS_FILE:
        # Write a cached version even if there isn't a file, so we don't try to
        # fetch it each time. codereview.settings must always be present so do
        # not cache negative.
        gclient_utils.FileWrite(cached_file, content or '')
    else:
      content = gclient_utils.FileRead(cached_file, 'r')
    # Keep the content cached in memory.
    FILES_CACHE[filename] = content
  return FILES_CACHE[filename]


def GetCodeReviewSetting(key):
  """Returns a value for the given key for this repository."""
  # Use '__just_initialized' as a flag to determine if the settings were
  # already initialized.
  if '__just_initialized' not in CODEREVIEW_SETTINGS:
    settings_file = GetCachedFile(CODEREVIEW_SETTINGS_FILE)
    if settings_file:
      CODEREVIEW_SETTINGS.update(
          gclient_utils.ParseCodereviewSettingsContent(settings_file))
    CODEREVIEW_SETTINGS.setdefault('__just_initialized', None)
  return CODEREVIEW_SETTINGS.get(key, "")


def Warn(msg):
  print >> sys.stderr, msg


def ErrorExit(msg):
  print >> sys.stderr, msg
  sys.exit(1)


def RunShellWithReturnCode(command, print_output=False):
  """Executes a command and returns the output and the return code."""
  p = subprocess2.Popen(
      command,
      cwd=GetRepositoryRoot(),
      stdout=subprocess2.PIPE,
      stderr=subprocess2.STDOUT,
      universal_newlines=True)
  if print_output:
    output_array = []
    while True:
      line = p.stdout.readline()
      if not line:
        break
      if print_output:
        print line.strip('\n')
      output_array.append(line)
    output = "".join(output_array)
  else:
    output = p.stdout.read()
  p.wait()
  p.stdout.close()
  return output, p.returncode


def RunShell(command, print_output=False):
  """Executes a command and returns the output."""
  return RunShellWithReturnCode(command, print_output)[0]


def FilterFlag(args, flag):
  """Returns True if the flag is present in args list.

  The flag is removed from args if present.
  """
  if flag in args:
    args.remove(flag)
    return True
  return False


class ChangeInfo(object):
  """Holds information about a changelist.

    name: change name.
    issue: the Rietveld issue number or 0 if it hasn't been uploaded yet.
    patchset: the Rietveld latest patchset number or 0.
    description: the description.
    files: a list of 2 tuple containing (status, filename) of changed files,
           with paths being relative to the top repository directory.
    local_root: Local root directory
    rietveld: rietveld server for this change
  """
  # Kept for unit test support. This is for the old format, it's deprecated.
  SEPARATOR = "\n-----\n"

  def __init__(self, name, issue, patchset, description, files, local_root,
               rietveld_url, needs_upload):
    # Defer the description processing to git_cl.ChangeDescription.
    self._desc = git_cl.ChangeDescription(description)
    self.name = name
    self.issue = int(issue)
    self.patchset = int(patchset)
    self._files = files or  []
    self.patch = None
    self._local_root = local_root
    self.needs_upload = needs_upload
    self.rietveld = gclient_utils.UpgradeToHttps(
        rietveld_url or GetCodeReviewSetting('CODE_REVIEW_SERVER'))
    self._rpc_server = None

  @property
  def description(self):
    return self._desc.description

  def force_description(self, new_description):
    self._desc = git_cl.ChangeDescription(new_description)
    self.needs_upload = True

  def append_footer(self, line):
    self._desc.append_footer(line)

  def get_reviewers(self):
    return self._desc.get_reviewers()

  def update_reviewers(self, reviewers):
    self._desc.update_reviewers(reviewers)

  def NeedsUpload(self):
    return self.needs_upload

  def GetFileNames(self):
    """Returns the list of file names included in this change."""
    return [f[1] for f in self._files]

  def GetFiles(self):
    """Returns the list of files included in this change with their status."""
    return self._files

  def GetLocalRoot(self):
    """Returns the local repository checkout root directory."""
    return self._local_root

  def Exists(self):
    """Returns True if this change already exists (i.e., is not new)."""
    return (self.issue or self.description or self._files)

  def _NonDeletedFileList(self):
    """Returns a list of files in this change, not including deleted files."""
    return [f[1] for f in self.GetFiles()
            if not f[0].startswith("D")]

  def _AddedFileList(self):
    """Returns a list of files added in this change."""
    return [f[1] for f in self.GetFiles() if f[0].startswith("A")]

  def Save(self):
    """Writes the changelist information to disk."""
    data = json.dumps({
          'issue': self.issue,
          'patchset': self.patchset,
          'needs_upload': self.NeedsUpload(),
          'files': self.GetFiles(),
          'description': self.description,
          'rietveld': self.rietveld,
        }, sort_keys=True, indent=2)
    gclient_utils.FileWrite(GetChangelistInfoFile(self.name), data)

  def Delete(self):
    """Removes the changelist information from disk."""
    os.remove(GetChangelistInfoFile(self.name))

  def RpcServer(self):
    if not self._rpc_server:
      if not self.rietveld:
        ErrorExit(CODEREVIEW_SETTINGS_FILE_NOT_FOUND)
      self._rpc_server = rietveld.CachingRietveld(self.rietveld, None, None)
    return self._rpc_server

  def CloseIssue(self):
    """Closes the Rietveld issue for this changelist."""
    # Newer versions of Rietveld require us to pass an XSRF token to POST, so
    # we fetch it from the server.
    xsrf_token = self.SendToRietveld(
        '/xsrf_token',
        extra_headers={'X-Requesting-XSRF-Token': '1'})

    # You cannot close an issue with a GET.
    # We pass an empty string for the data so it is a POST rather than a GET.
    data = [("description", self.description),
            ("xsrf_token", xsrf_token)]
    ctype, body = upload.EncodeMultipartFormData(data, [])
    self.SendToRietveld('/%d/close' % self.issue, payload=body,
        content_type=ctype)

  def UpdateRietveldDescription(self):
    """Sets the description for an issue on Rietveld."""
    data = [("description", self.description),]
    ctype, body = upload.EncodeMultipartFormData(data, [])
    self.SendToRietveld('/%d/description' % self.issue, payload=body,
        content_type=ctype)
    self.needs_upload = False

  def GetIssueDescription(self):
    """Returns the issue description from Rietveld."""
    return self.SendToRietveld('/%d/description' % self.issue).replace('\r\n',
                                                                       '\n')

  def UpdateDescriptionFromIssue(self):
    """Updates self.description with the issue description from Rietveld."""
    self._desc = git_cl.ChangeDescription(self.GetIssueDescription())

  def GetApprovingReviewers(self):
    """Returns the issue reviewers list from Rietveld."""
    return git_cl.get_approving_reviewers(
        self.RpcServer().get_issue_properties(self.issue, True))

  def AddComment(self, comment):
    """Adds a comment for an issue on Rietveld.
    As a side effect, this will email everyone associated with the issue."""
    return self.RpcServer().add_comment(self.issue, comment)

  def PrimeLint(self):
    """Do background work on Rietveld to lint the file so that the results are
    ready when the issue is viewed."""
    if self.issue and self.patchset:
      try:
        self.SendToRietveld('/lint/issue%s_%s' % (self.issue, self.patchset),
            timeout=10)
      except ssl.SSLError as e:
        # It takes more than 10 seconds to lint some CLs. Silently ignore
        # the expected timeout.
        if e.message != 'The read operation timed out':
          raise

  def SendToRietveld(self, request_path, timeout=None, **kwargs):
    """Send a POST/GET to Rietveld.  Returns the response body."""
    try:
      return self.RpcServer().Send(request_path, timeout=timeout, **kwargs)
    except urllib2.URLError:
      if timeout is None:
        ErrorExit('Error accessing url %s' % request_path)
      else:
        return None

  def MissingTests(self):
    """Returns True if the change looks like it needs unit tests but has none.

    A change needs unit tests if it contains any new source files or methods.
    """
    SOURCE_SUFFIXES = [".cc", ".cpp", ".c", ".m", ".mm"]
    # Ignore third_party entirely.
    files = [f for f in self._NonDeletedFileList()
             if f.find("third_party") == -1]
    added_files = [f for f in self._AddedFileList()
                   if f.find("third_party") == -1]

    # If the change is entirely in third_party, we're done.
    if len(files) == 0:
      return False

    # Any new or modified test files?
    # A test file's name ends with "test.*" or "tests.*".
    test_files = [test for test in files
                  if os.path.splitext(test)[0].rstrip("s").endswith("test")]
    if len(test_files) > 0:
      return False

    # Any new source files?
    source_files = [item for item in added_files
                    if os.path.splitext(item)[1] in SOURCE_SUFFIXES]
    if len(source_files) > 0:
      return True

    # Do the long test, checking the files for new methods.
    return self._HasNewMethod()

  def _HasNewMethod(self):
    """Returns True if the changeset contains any new functions, or if a
    function signature has been changed.

    A function is identified by starting flush left, containing a "(" before
    the next flush-left line, and either ending with "{" before the next
    flush-left line or being followed by an unindented "{".

    Currently this returns True for new methods, new static functions, and
    methods or functions whose signatures have been changed.

    Inline methods added to header files won't be detected by this. That's
    acceptable for purposes of determining if a unit test is needed, since
    inline methods should be trivial.
    """
    # To check for methods added to source or header files, we need the diffs.
    # We'll generate them all, since there aren't likely to be many files
    # apart from source and headers; besides, we'll want them all if we're
    # uploading anyway.
    if self.patch is None:
      self.patch = GenerateDiff(self.GetFileNames())

    definition = ""
    for line in self.patch.splitlines():
      if not line.startswith("+"):
        continue
      line = line.strip("+").rstrip(" \t")
      # Skip empty lines, comments, and preprocessor directives.
      # TODO(pamg): Handle multiline comments if it turns out to be a problem.
      if line == "" or line.startswith("/") or line.startswith("#"):
        continue

      # A possible definition ending with "{" is complete, so check it.
      if definition.endswith("{"):
        if definition.find("(") != -1:
          return True
        definition = ""

      # A { or an indented line, when we're in a definition, continues it.
      if (definition != "" and
          (line == "{" or line.startswith(" ") or line.startswith("\t"))):
        definition += line

      # A flush-left line starts a new possible function definition.
      elif not line.startswith(" ") and not line.startswith("\t"):
        definition = line

    return False

  @staticmethod
  def Load(changename, local_root, fail_on_not_found, update_status):
    """Gets information about a changelist.

    Args:
      fail_on_not_found: if True, this function will quit the program if the
        changelist doesn't exist.
      update_status: if True, the svn status will be updated for all the files
        and unchanged files will be removed.

    Returns: a ChangeInfo object.
    """
    info_file = GetChangelistInfoFile(changename)
    if not os.path.exists(info_file):
      if fail_on_not_found:
        ErrorExit("Changelist " + changename + " not found.")
      return ChangeInfo(changename, 0, 0, '', None, local_root, None, False)
    content = gclient_utils.FileRead(info_file)
    save = False
    try:
      values = ChangeInfo._LoadNewFormat(content)
    except ValueError:
      try:
        values = ChangeInfo._LoadOldFormat(content)
        save = True
      except ValueError:
        ErrorExit(
            ('Changelist file %s is corrupt.\n'
            'Either run "gcl delete %s" or manually edit the file') % (
                info_file, changename))
    files = values['files']
    if update_status:
      for item in files[:]:
        status_result = SVN.CaptureStatus(item[1], local_root)
        if not status_result or not status_result[0][0]:
          # File has been reverted.
          save = True
          files.remove(item)
          continue
        status = status_result[0][0]
        if status != item[0]:
          save = True
          files[files.index(item)] = (status, item[1])
    change_info = ChangeInfo(
        changename,
        values['issue'],
        values['patchset'],
        values['description'],
        files,
        local_root,
        values.get('rietveld'),
        values['needs_upload'])
    if save:
      change_info.Save()
    return change_info

  @staticmethod
  def _LoadOldFormat(content):
    # The info files have the following format:
    # issue_id, patchset\n   (, patchset is optional)
    # SEPARATOR\n
    # filepath1\n
    # filepath2\n
    # .
    # .
    # filepathn\n
    # SEPARATOR\n
    # description
    split_data = content.split(ChangeInfo.SEPARATOR, 2)
    if len(split_data) != 3:
      raise ValueError('Bad change format')
    values = {
      'issue': 0,
      'patchset': 0,
      'needs_upload': False,
      'files': [],
    }
    items = split_data[0].split(', ')
    if items[0]:
      values['issue'] = int(items[0])
    if len(items) > 1:
      values['patchset'] = int(items[1])
    if len(items) > 2:
      values['needs_upload'] = (items[2] == "dirty")
    for line in split_data[1].splitlines():
      status = line[:7]
      filename = line[7:]
      values['files'].append((status, filename))
    values['description'] = split_data[2]
    return values

  @staticmethod
  def _LoadNewFormat(content):
    return json.loads(content)

  def __str__(self):
    out = ['%s:' % self.__class__.__name__]
    for k in dir(self):
      if k.startswith('__'):
        continue
      v = getattr(self, k)
      if v is self or callable(getattr(self, k)):
        continue
      out.append('  %s: %r' % (k, v))
    return '\n'.join(out)


def GetChangelistInfoFile(changename):
  """Returns the file that stores information about a changelist."""
  if not changename or re.search(r'[^\w-]', changename):
    ErrorExit("Invalid changelist name: " + changename)
  return os.path.join(GetChangesDir(), changename)


def LoadChangelistInfoForMultiple(changenames, local_root, fail_on_not_found,
                                  update_status):
  """Loads many changes and merge their files list into one pseudo change.

  This is mainly usefull to concatenate many changes into one for a 'gcl try'.
  """
  changes = changenames.split(',')
  aggregate_change_info = ChangeInfo(
      changenames, 0, 0, '', None, local_root, None, False)
  for change in changes:
    aggregate_change_info._files += ChangeInfo.Load(
        change, local_root, fail_on_not_found, update_status).GetFiles()
  return aggregate_change_info


def GetCLs():
  """Returns a list of all the changelists in this repository."""
  cls = os.listdir(GetChangesDir())
  if CODEREVIEW_SETTINGS_FILE in cls:
    cls.remove(CODEREVIEW_SETTINGS_FILE)
  return cls


def GenerateChangeName():
  """Generate a random changelist name."""
  random.seed()
  current_cl_names = GetCLs()
  while True:
    cl_name = (random.choice(string.ascii_lowercase) +
               random.choice(string.digits) +
               random.choice(string.ascii_lowercase) +
               random.choice(string.digits))
    if cl_name not in current_cl_names:
      return cl_name


def GetModifiedFiles():
  """Returns a set that maps from changelist name to (status,filename) tuples.

  Files not in a changelist have an empty changelist name.  Filenames are in
  relation to the top level directory of the current repository.  Note that
  only the current directory and subdirectories are scanned, in order to
  improve performance while still being flexible.
  """
  files = {}

  # Since the files are normalized to the root folder of the repositary, figure
  # out what we need to add to the paths.
  dir_prefix = os.getcwd()[len(GetRepositoryRoot()):].strip(os.sep)

  # Get a list of all files in changelists.
  files_in_cl = {}
  for cl in GetCLs():
    change_info = ChangeInfo.Load(cl, GetRepositoryRoot(),
                                  fail_on_not_found=True, update_status=False)
    for status, filename in change_info.GetFiles():
      files_in_cl[filename] = change_info.name

  # Get all the modified files down the current directory.
  for line in SVN.CaptureStatus(None, os.getcwd()):
    status = line[0]
    filename = line[1]
    if status[0] == "?":
      continue
    if dir_prefix:
      filename = os.path.join(dir_prefix, filename)
    change_list_name = ""
    if filename in files_in_cl:
      change_list_name = files_in_cl[filename]
    files.setdefault(change_list_name, []).append((status, filename))

  return files


def GetFilesNotInCL():
  """Returns a list of tuples (status,filename) that aren't in any changelists.

  See docstring of GetModifiedFiles for information about path of files and
  which directories are scanned.
  """
  modified_files = GetModifiedFiles()
  if "" not in modified_files:
    return []
  return modified_files[""]


def ListFiles(show_unknown_files):
  files = GetModifiedFiles()
  cl_keys = files.keys()
  cl_keys.sort()
  for cl_name in cl_keys:
    if not cl_name:
      continue
    note = ""
    change_info = ChangeInfo.Load(cl_name, GetRepositoryRoot(),
                                  fail_on_not_found=True, update_status=False)
    if len(change_info.GetFiles()) != len(files[cl_name]):
      note = " (Note: this changelist contains files outside this directory)"
    print "\n--- Changelist " + cl_name + note + ":"
    for filename in files[cl_name]:
      print "".join(filename)
  if show_unknown_files:
    unknown_files = UnknownFiles()
  if (files.get('') or (show_unknown_files and len(unknown_files))):
    print "\n--- Not in any changelist:"
    for item in files.get('', []):
      print "".join(item)
    if show_unknown_files:
      for filename in unknown_files:
        print "?      %s" % filename
  return 0


def GenerateDiff(files):
  return SVN.GenerateDiff(
      files, GetRepositoryRoot(), full_move=False, revision=None)


def GetTreeStatus():
  tree_status_url = GetCodeReviewSetting('STATUS')
  return git_cl.GetTreeStatus(tree_status_url) if tree_status_url else "unset"


def OptionallyDoPresubmitChecks(change_info, committing, args):
  if FilterFlag(args, "--no_presubmit") or FilterFlag(args, "--force"):
    breakpad.SendStack(
        breakpad.DEFAULT_URL + '/breakpad',
        'GclHooksBypassedCommit',
        'Issue %s/%s bypassed hook when committing (tree status was "%s")' %
        (change_info.rietveld, change_info.issue, GetTreeStatus()),
        verbose=False)
    return presubmit_support.PresubmitOutput()
  return DoPresubmitChecks(change_info, committing, True)


def defer_attributes(a, b):
  """Copy attributes from an object (like a function) to another."""
  for x in dir(a):
    if not getattr(b, x, None):
      setattr(b, x, getattr(a, x))


def need_change(function):
  """Converts args -> change_info."""
  # pylint: disable=W0612,W0621
  def hook(args):
    if not len(args) == 1:
      ErrorExit("You need to pass a change list name")
    change_info = ChangeInfo.Load(args[0], GetRepositoryRoot(), True, True)
    return function(change_info)
  defer_attributes(function, hook)
  hook.need_change = True
  hook.no_args = True
  return hook


def need_change_and_args(function):
  """Converts args -> change_info."""
  # pylint: disable=W0612,W0621
  def hook(args):
    if not args:
      ErrorExit("You need to pass a change list name")
    change_info = ChangeInfo.Load(args.pop(0), GetRepositoryRoot(), True, True)
    return function(change_info, args)
  defer_attributes(function, hook)
  hook.need_change = True
  return hook


def no_args(function):
  """Make sure no args are passed."""
  # pylint: disable=W0612,W0621
  def hook(args):
    if args:
      ErrorExit("Doesn't support arguments")
    return function()
  defer_attributes(function, hook)
  hook.no_args = True
  return hook


def attrs(**kwargs):
  """Decorate a function with new attributes."""
  def decorate(function):
    for k in kwargs:
      setattr(function, k, kwargs[k])
    return function
  return decorate


@no_args
def CMDopened():
  """Lists modified files in the current directory down."""
  return ListFiles(False)


@no_args
def CMDstatus():
  """Lists modified and unknown files in the current directory down."""
  return ListFiles(True)


@need_change_and_args
@attrs(usage='[--no_presubmit] [--no_watchlists]')
def CMDupload(change_info, args):
  """Uploads the changelist to the server for review.

  This does not submit a try job; use gcl try to submit a try job.
  """
  if '-s' in args or '--server' in args:
    ErrorExit('Don\'t use the -s flag, fix codereview.settings instead')
  if not change_info.GetFiles():
    print "Nothing to upload, changelist is empty."
    return 0

  output = OptionallyDoPresubmitChecks(change_info, False, args)
  if not output.should_continue():
    return 1
  no_watchlists = (FilterFlag(args, "--no_watchlists") or
                   FilterFlag(args, "--no-watchlists"))

  # Map --send-mail to --send_mail
  if FilterFlag(args, "--send-mail"):
    args.append("--send_mail")

  # Replace -m with -t and --message with --title, but make sure to
  # preserve anything after the -m/--message.
  found_deprecated_arg = [False]
  def replace_message(a):
    if a.startswith('-m'):
      found_deprecated_arg[0] = True
      return '-t' + a[2:]
    elif a.startswith('--message'):
      found_deprecated_arg[0] = True
      return '--title' + a[9:]
    return a
  args = map(replace_message, args)
  if found_deprecated_arg[0]:
    print >> sys.stderr, (
        '\nWARNING: Use -t or --title to set the title of the patchset.\n'
        'In the near future, -m or --message will send a message instead.\n'
        'See http://goo.gl/JGg0Z for details.\n')

  upload_arg = ["upload.py", "-y"]
  upload_arg.append("--server=%s" % change_info.rietveld.encode('utf-8'))

  reviewers = change_info.get_reviewers() or output.reviewers
  if (reviewers and
      not any(arg.startswith('-r') or arg.startswith('--reviewer') for
              arg in args)):
    upload_arg.append('--reviewers=%s' % ','.join(reviewers))

  upload_arg.extend(args)

  desc_file = None
  try:
    if change_info.issue:
      # Uploading a new patchset.
      upload_arg.append("--issue=%d" % change_info.issue)

      if not any(i.startswith('--title') or i.startswith('-t') for i in args):
        upload_arg.append('--title= ')
    else:
      # First time we upload.
      handle, desc_file = tempfile.mkstemp(text=True)
      os.write(handle, change_info.description)
      os.close(handle)

      # Watchlist processing -- CC people interested in this changeset
      # http://dev.chromium.org/developers/contributing-code/watchlists
      if not no_watchlists:
        import watchlists
        watchlist = watchlists.Watchlists(change_info.GetLocalRoot())
        watchers = watchlist.GetWatchersForPaths(change_info.GetFileNames())

      # We check this before applying the "PRIVATE" parameter of codereview
      # settings assuming that the author of the settings file has put
      # addresses which we can send private CLs to, and so we should ignore
      # CC_LIST only when --private is specified explicitly on the command
      # line.
      if "--private" in upload_arg:
        Warn("WARNING: CC_LIST is ignored since private flag is specified.  "
             "You need to review and add them manually if necessary.")
        cc_list = ""
      else:
        cc_list = GetCodeReviewSetting("CC_LIST")
      if not no_watchlists and watchers:
        # Filter out all empty elements and join by ','
        cc_list = ','.join(filter(None, [cc_list] + watchers))
      if cc_list:
        upload_arg.append("--cc=" + cc_list)
      upload_arg.append("--file=%s" % desc_file)

      if GetCodeReviewSetting("PRIVATE") == "True":
        upload_arg.append("--private")

    # If we have a lot of files with long paths, then we won't be able to fit
    # the command to "svn diff".  Instead, we generate the diff manually for
    # each file and concatenate them before passing it to upload.py.
    if change_info.patch is None:
      change_info.patch = GenerateDiff(change_info.GetFileNames())

    # Change the current working directory before calling upload.py so that it
    # shows the correct base.
    previous_cwd = os.getcwd()
    os.chdir(change_info.GetLocalRoot())
    try:
      try:
        issue, patchset = upload.RealMain(upload_arg, change_info.patch)
      except KeyboardInterrupt:
        sys.exit(1)
      if issue and patchset:
        change_info.issue = int(issue)
        change_info.patchset = int(patchset)
        change_info.Save()
      change_info.PrimeLint()
    finally:
      os.chdir(previous_cwd)
  finally:
    if desc_file:
      os.remove(desc_file)
  print "*** Upload does not submit a try; use gcl try to submit a try. ***"
  return 0


@need_change_and_args
@attrs(usage='[--upload]')
def CMDpresubmit(change_info, args):
  """Runs presubmit checks on the change.

  The actual presubmit code is implemented in presubmit_support.py and looks
  for PRESUBMIT.py files."""
  if not change_info.GetFiles():
    print('Nothing to presubmit check, changelist is empty.')
    return 0
  parser = optparse.OptionParser()
  parser.add_option('--upload', action='store_true')
  options, args = parser.parse_args(args)
  if args:
    parser.error('Unrecognized args: %s' % args)
  if options.upload:
    print('*** Presubmit checks for UPLOAD would report: ***')
    return not DoPresubmitChecks(change_info, False, False)
  else:
    print('*** Presubmit checks for COMMIT would report: ***')
    return not DoPresubmitChecks(change_info, True, False)


def TryChange(change_info, args, swallow_exception):
  """Create a diff file of change_info and send it to the try server."""
  try:
    import trychange
  except ImportError:
    if swallow_exception:
      return 1
    ErrorExit("You need to install trychange.py to use the try server.")

  trychange_args = []
  if change_info:
    trychange_args.extend(['--name', change_info.name])
    if change_info.issue:
      trychange_args.extend(["--issue", str(change_info.issue)])
    if change_info.patchset:
      trychange_args.extend(["--patchset", str(change_info.patchset)])
    change = presubmit_support.SvnChange(change_info.name,
                                         change_info.description,
                                         change_info.GetLocalRoot(),
                                         change_info.GetFiles(),
                                         change_info.issue,
                                         change_info.patchset,
                                         None)
  else:
    change = None

  trychange_args.extend(args)
  return trychange.TryChange(
      trychange_args,
      change=change,
      swallow_exception=swallow_exception,
      prog='gcl try',
      extra_epilog='\n'
          'When called from gcl, use the format gcl try <change_name>.\n')


@need_change_and_args
@attrs(usage='[--no_presubmit]')
def CMDcommit(change_info, args):
  """Commits the changelist to the repository."""
  if not change_info.GetFiles():
    print "Nothing to commit, changelist is empty."
    return 1

  # OptionallyDoPresubmitChecks has a side-effect which eats these flags.
  bypassed = '--no_presubmit' in args or '--force' in args
  output = OptionallyDoPresubmitChecks(change_info, True, args)
  if not output.should_continue():
    return 1

  # We face a problem with svn here: Let's say change 'bleh' modifies
  # svn:ignore on dir1\. but another unrelated change 'pouet' modifies
  # dir1\foo.cc. When the user `gcl commit bleh`, foo.cc is *also committed*.
  # The only fix is to use --non-recursive but that has its issues too:
  # Let's say if dir1 is deleted, --non-recursive must *not* be used otherwise
  # you'll get "svn: Cannot non-recursively commit a directory deletion of a
  # directory with child nodes". Yay...
  commit_cmd = ["svn", "commit"]
  if change_info.issue:
    # Get the latest description from Rietveld.
    change_info.UpdateDescriptionFromIssue()

  change_info.update_reviewers(change_info.GetApprovingReviewers())

  commit_desc = git_cl.ChangeDescription(change_info.description)
  if change_info.issue:
    server = change_info.rietveld
    if not server.startswith("http://") and not server.startswith("https://"):
      server = "http://" + server
    commit_desc.append_footer('Review URL: %s/%d' % (server, change_info.issue))

  handle, commit_filename = tempfile.mkstemp(text=True)
  os.write(handle, commit_desc.description)
  os.close(handle)
  try:
    handle, targets_filename = tempfile.mkstemp(text=True)
    os.write(handle, "\n".join(change_info.GetFileNames()))
    os.close(handle)
    try:
      commit_cmd += ['--file=' + commit_filename]
      commit_cmd += ['--targets=' + targets_filename]
      # Change the current working directory before calling commit.
      output = ''
      try:
        output = RunShell(commit_cmd, True)
      except subprocess2.CalledProcessError, e:
        ErrorExit('Commit failed.\n%s' % e)
    finally:
      os.remove(commit_filename)
  finally:
    os.remove(targets_filename)
  if output.find("Committed revision") != -1:
    change_info.Delete()

    if change_info.issue:
      revision = re.compile(".*?\nCommitted revision (\d+)",
                            re.DOTALL).match(output).group(1)
      viewvc_url = GetCodeReviewSetting('VIEW_VC')
      if viewvc_url and revision:
        change_info.append_footer('Committed: ' + viewvc_url + revision)
      elif revision:
        change_info.append_footer('Committed: ' + revision)
      change_info.CloseIssue()
      props = change_info.RpcServer().get_issue_properties(
          change_info.issue, False)
      patch_num = len(props['patchsets'])
      comment = "Committed patchset #%d manually as r%s" % (patch_num, revision)
      if bypassed:
        comment += ' (tree was closed).' if GetTreeStatus() == 'closed' else '.'
      else:
        comment += ' (presubmit successful).'
      change_info.AddComment(comment)
  return 0


def CMDchange(args):
  """Creates or edits a changelist.

  Only scans the current directory and subdirectories.
  """
  # Verify the user is running the change command from a read-write checkout.
  svn_info = SVN.CaptureLocalInfo([], '.')
  if not svn_info:
    ErrorExit("Current checkout is unversioned.  Please retry with a versioned "
              "directory.")

  if len(args) == 0:
    # Generate a random changelist name.
    changename = GenerateChangeName()
  elif args[0] == '--force':
    changename = GenerateChangeName()
  else:
    changename = args[0]
  change_info = ChangeInfo.Load(changename, GetRepositoryRoot(), False, True)

  if len(args) == 2:
    if not os.path.isfile(args[1]):
      ErrorExit('The change "%s" doesn\'t exist.' % args[1])
    f = open(args[1], 'rU')
    override_description = f.read()
    f.close()
  else:
    override_description = None

  if change_info.issue and not change_info.NeedsUpload():
    try:
      description = change_info.GetIssueDescription()
    except urllib2.HTTPError, err:
      if err.code == 404:
        # The user deleted the issue in Rietveld, so forget the old issue id.
        description = change_info.description
        change_info.issue = 0
        change_info.Save()
      else:
        ErrorExit("Error getting the description from Rietveld: " + err)
  else:
    if override_description:
      description = override_description
    else:
      description = change_info.description

  other_files = GetFilesNotInCL()

  # Edited files (as opposed to files with only changed properties) will have
  # a letter for the first character in the status string.
  file_re = re.compile(r"^[a-z].+\Z", re.IGNORECASE)
  affected_files = [x for x in other_files if file_re.match(x[0])]
  unaffected_files = [x for x in other_files if not file_re.match(x[0])]

  description = description.rstrip() + '\n'

  separator1 = ("\n---All lines above this line become the description.\n"
                "---Repository Root: " + change_info.GetLocalRoot() + "\n"
                "---Paths in this changelist (" + change_info.name + "):\n")
  separator2 = "\n\n---Paths modified but not in any changelist:\n\n"

  text = (description + separator1 + '\n' +
          '\n'.join([f[0] + f[1] for f in change_info.GetFiles()]))

  if change_info.Exists():
    text += (separator2 +
            '\n'.join([f[0] + f[1] for f in affected_files]) + '\n')
  else:
    text += ('\n'.join([f[0] + f[1] for f in affected_files]) + '\n' +
            separator2)
  text += '\n'.join([f[0] + f[1] for f in unaffected_files]) + '\n'

  result = gclient_utils.RunEditor(text, False)
  if not result:
    ErrorExit('Running editor failed')

  split_result = result.split(separator1, 1)
  if len(split_result) != 2:
    ErrorExit("Don't modify the text starting with ---!\n\n%r" % result)

  # Update the CL description if it has changed.
  new_description = split_result[0]
  cl_files_text = split_result[1]
  if new_description != description or override_description:
    change_info.force_description(new_description)

  new_cl_files = []
  for line in cl_files_text.splitlines():
    if not len(line):
      continue
    if line.startswith("---"):
      break
    status = line[:7]
    filename = line[7:]
    new_cl_files.append((status, filename))

  if (not len(change_info.GetFiles()) and not change_info.issue and
      not len(new_description) and not new_cl_files):
    ErrorExit("Empty changelist not saved")

  change_info._files = new_cl_files
  change_info.Save()
  if svn_info.get('URL', '').startswith('http:'):
    Warn("WARNING: Creating CL in a read-only checkout.  You will need to "
         "commit using a commit queue!")

  print change_info.name + " changelist saved."
  if change_info.MissingTests():
    Warn("WARNING: " + MISSING_TEST_MSG)

  # Update the Rietveld issue.
  if change_info.issue and change_info.NeedsUpload():
    change_info.UpdateRietveldDescription()
    change_info.Save()
  return 0


@need_change_and_args
def CMDlint(change_info, args):
  """Runs cpplint.py on all the files in the change list.

  Checks all the files in the changelist for possible style violations.
  """
  # Access to a protected member _XX of a client class
  # pylint: disable=W0212
  try:
    import cpplint
    import cpplint_chromium
  except ImportError:
    ErrorExit("You need to install cpplint.py to lint C++ files.")
  # Change the current working directory before calling lint so that it
  # shows the correct base.
  previous_cwd = os.getcwd()
  os.chdir(change_info.GetLocalRoot())
  try:
    # Process cpplints arguments if any.
    filenames = cpplint.ParseArguments(args + change_info.GetFileNames())

    white_list = GetCodeReviewSetting("LINT_REGEX")
    if not white_list:
      white_list = DEFAULT_LINT_REGEX
    white_regex = re.compile(white_list)
    black_list = GetCodeReviewSetting("LINT_IGNORE_REGEX")
    if not black_list:
      black_list = DEFAULT_LINT_IGNORE_REGEX
    black_regex = re.compile(black_list)
    extra_check_functions = [cpplint_chromium.CheckPointerDeclarationWhitespace]
    for filename in filenames:
      if white_regex.match(filename):
        if black_regex.match(filename):
          print "Ignoring file %s" % filename
        else:
          cpplint.ProcessFile(filename, cpplint._cpplint_state.verbose_level,
                              extra_check_functions)
      else:
        print "Skipping file %s" % filename
  finally:
    os.chdir(previous_cwd)

  print "Total errors found: %d\n" % cpplint._cpplint_state.error_count
  return 1


def DoPresubmitChecks(change_info, committing, may_prompt):
  """Imports presubmit, then calls presubmit.DoPresubmitChecks."""
  root_presubmit = GetCachedFile('PRESUBMIT.py', use_root=True)
  change = presubmit_support.SvnChange(change_info.name,
                                       change_info.description,
                                       change_info.GetLocalRoot(),
                                       change_info.GetFiles(),
                                       change_info.issue,
                                       change_info.patchset,
                                       None)
  output = presubmit_support.DoPresubmitChecks(
      change=change,
      committing=committing,
      verbose=False,
      output_stream=sys.stdout,
      input_stream=sys.stdin,
      default_presubmit=root_presubmit,
      may_prompt=may_prompt,
      rietveld_obj=change_info.RpcServer())
  if not output.should_continue() and may_prompt:
    # TODO(dpranke): move into DoPresubmitChecks(), unify cmd line args.
    print "\nPresubmit errors, can't continue (use --no_presubmit to bypass)"

  return output


@no_args
def CMDchanges():
  """Lists all the changelists and their files."""
  for cl in GetCLs():
    change_info = ChangeInfo.Load(cl, GetRepositoryRoot(), True, True)
    print "\n--- Changelist " + change_info.name + ":"
    for filename in change_info.GetFiles():
      print "".join(filename)
  return 0


@no_args
def CMDdeleteempties():
  """Delete all changelists that have no files."""
  print "\n--- Deleting:"
  for cl in GetCLs():
    change_info = ChangeInfo.Load(cl, GetRepositoryRoot(), True, True)
    if not len(change_info.GetFiles()):
      print change_info.name
      change_info.Delete()
  return 0


@no_args
def CMDnothave():
  """Lists files unknown to Subversion."""
  for filename in UnknownFiles():
    print "?      " + "".join(filename)
  return 0


@attrs(usage='<svn options>')
def CMDdiff(args):
  """Diffs all files in the changelist or all files that aren't in a CL."""
  files = None
  if args:
    change_info = ChangeInfo.Load(args.pop(0), GetRepositoryRoot(), True, True)
    files = change_info.GetFileNames()
  else:
    files = [f[1] for f in GetFilesNotInCL()]

  root = GetRepositoryRoot()
  cmd = ['svn', 'diff']
  cmd.extend([os.path.join(root, x) for x in files])
  cmd.extend(args)
  return RunShellWithReturnCode(cmd, print_output=True)[1]


@no_args
def CMDsettings():
  """Prints code review settings for this checkout."""
  # Force load settings
  GetCodeReviewSetting("UNKNOWN")
  del CODEREVIEW_SETTINGS['__just_initialized']
  print '\n'.join(("%s: %s" % (str(k), str(v))
                    for (k,v) in CODEREVIEW_SETTINGS.iteritems()))
  return 0


@need_change
def CMDdescription(change_info):
  """Prints the description of the specified change to stdout."""
  print change_info.description
  return 0


def CMDdelete(args):
  """Deletes a changelist."""
  if not len(args) == 1:
    ErrorExit('You need to pass a change list name')
  filepath = GetChangelistInfoFile(args[0])
  if not os.path.isfile(filepath):
    ErrorExit('You need to pass a valid change list name')
  os.remove(filepath)
  return 0


def CMDtry(args):
  """Sends the change to the tryserver to do a test run on your code.

  To send multiple changes as one path, use a comma-separated list of
  changenames. Use 'gcl help try' for more information!"""
  # When the change contains no file, send the "changename" positional
  # argument to trychange.py.
  # When the command is 'try' and --patchset is used, the patch to try
  # is on the Rietveld server.
  if not args:
    ErrorExit("You need to pass a change list name")
  if args[0].find(',') != -1:
    change_info = LoadChangelistInfoForMultiple(args[0], GetRepositoryRoot(),
                                                True, True)
  else:
    change_info = ChangeInfo.Load(args[0], GetRepositoryRoot(),
                                  True, True)
  if change_info.GetFiles():
    args = args[1:]
  else:
    change_info = None
  return TryChange(change_info, args, swallow_exception=False)


@attrs(usage='<old-name> <new-name>')
def CMDrename(args):
  """Renames an existing change."""
  if len(args) != 2:
    ErrorExit("Usage: gcl rename <old-name> <new-name>.")
  src, dst = args
  src_file = GetChangelistInfoFile(src)
  if not os.path.isfile(src_file):
    ErrorExit("Change '%s' does not exist." % src)
  dst_file = GetChangelistInfoFile(dst)
  if os.path.isfile(dst_file):
    ErrorExit("Change '%s' already exists; pick a new name." % dst)
  os.rename(src_file, dst_file)
  print "Change '%s' renamed '%s'." % (src, dst)
  return 0


def CMDpassthru(args):
  """Everything else that is passed into gcl we redirect to svn.

  It assumes a change list name is passed and is converted with the files names.
  """
  if not args or len(args) < 2:
    ErrorExit("You need to pass a change list name for this svn fall-through "
              "command")
  cl_name = args[1]
  args = ["svn", args[0]]
  if len(args) > 1:
    root = GetRepositoryRoot()
    change_info = ChangeInfo.Load(cl_name, root, True, True)
    args.extend([os.path.join(root, x) for x in change_info.GetFileNames()])
  return RunShellWithReturnCode(args, print_output=True)[1]


def Command(name):
  return getattr(sys.modules[__name__], 'CMD' + name, None)


def GenUsage(command):
  """Modify an OptParse object with the function's documentation."""
  obj = Command(command)
  display = command
  more = getattr(obj, 'usage', '')
  if command == 'help':
    display = '<command>'
  need_change_val = ''
  if getattr(obj, 'need_change', None):
    need_change_val = ' <change_list>'
  options = ' [options]'
  if getattr(obj, 'no_args', None):
    options = ''
  res = 'Usage: gcl %s%s%s %s\n\n' % (display, need_change_val, options, more)
  res += re.sub('\n  ', '\n', obj.__doc__)
  return res


def CMDhelp(args):
  """Prints this help or help for the given command."""
  if args and 'CMD' + args[0] in dir(sys.modules[__name__]):
    print GenUsage(args[0])

    # These commands defer to external tools so give this info too.
    if args[0] == 'try':
      TryChange(None, ['--help'], swallow_exception=False)
    if args[0] == 'upload':
      upload.RealMain(['upload.py', '--help'])
    return 0

  print GenUsage('help')
  print sys.modules[__name__].__doc__
  print 'version ' + __version__ + '\n'

  print('Commands are:\n' + '\n'.join([
        '  %-12s %s' % (fn[3:], Command(fn[3:]).__doc__.split('\n')[0].strip())
        for fn in dir(sys.modules[__name__]) if fn.startswith('CMD')]))
  return 0


def main(argv):
  if sys.hexversion < 0x02060000:
    print >> sys.stderr, (
        '\nYour python version %s is unsupported, please upgrade.\n' %
        sys.version.split(' ', 1)[0])
    return 2
  if not argv:
    argv = ['help']
  command = Command(argv[0])
  # Help can be run from anywhere.
  if command == CMDhelp:
    return command(argv[1:])

  try:
    GetRepositoryRoot()
  except (gclient_utils.Error, subprocess2.CalledProcessError):
    print >> sys.stderr, 'To use gcl, you need to be in a subversion checkout.'
    return 1

  # Create the directories where we store information about changelists if it
  # doesn't exist.
  try:
    if not os.path.exists(GetInfoDir()):
      os.mkdir(GetInfoDir())
    if not os.path.exists(GetChangesDir()):
      os.mkdir(GetChangesDir())
    if not os.path.exists(GetCacheDir()):
      os.mkdir(GetCacheDir())

    if command:
      return command(argv[1:])
    # Unknown command, try to pass that to svn
    return CMDpassthru(argv)
  except (gclient_utils.Error, subprocess2.CalledProcessError), e:
    print >> sys.stderr, 'Got an exception'
    print >> sys.stderr, str(e)
    return 1
  except upload.ClientLoginError, e:
    print >> sys.stderr, 'Got an exception logging in to Rietveld'
    print >> sys.stderr, str(e)
    return 1
  except urllib2.HTTPError, e:
    if e.code != 500:
      raise
    print >> sys.stderr, (
        'AppEngine is misbehaving and returned HTTP %d, again. Keep faith '
        'and retry or visit go/isgaeup.\n%s') % (e.code, str(e))
    return 1


if __name__ == "__main__":
  fix_encoding.fix_encoding()
  sys.exit(main(sys.argv[1:]))

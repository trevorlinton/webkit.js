#!/usr/bin/env python
# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

"""Redirects to the version of clang-format checked into the Chrome tree.

clang-format binaries are pulled down from Google Cloud Storage whenever you
sync Chrome, to platform-specific locations. This script knows how to locate
those tools, assuming the script is invoked from inside a Chromium checkout."""

import gclient_utils
import os
import subprocess
import sys


class NotFoundError(Exception):
  """A file could not be found."""
  def __init__(self, e):
    Exception.__init__(self,
        'Problem while looking for clang-format in Chromium source tree:\n'
        '  %s' % e)


def _FindChromiumSourceRoot():
  """Return the source root of the current chromium checkout, or die trying."""
  # The use of .gn is somewhat incongruous here, but we need a file uniquely
  # existing at src/. GN does the same thing at least.
  source_root = gclient_utils.FindFileUpwards('.gn')
  if not source_root:
    raise NotFoundError(
        '.gn file not found in any parent of the current path.')
  return source_root


def FindClangFormatToolInChromiumTree():
  """Return a path to the clang-format executable, or die trying."""
  tool_path = os.path.join(_FindChromiumSourceRoot(), 'third_party',
                           'clang_format', 'bin',
                           gclient_utils.GetMacWinOrLinux(),
                           'clang-format' + gclient_utils.GetExeSuffix())
  if not os.path.exists(tool_path):
    raise NotFoundError('File does not exist: %s' % tool_path)
  return tool_path


def FindClangFormatScriptInChromiumTree(script_name):
  """Return a path to a clang-format helper script, or die trying."""
  script_path = os.path.join(_FindChromiumSourceRoot(), 'third_party',
                             'clang_format', 'script', script_name)
  if not os.path.exists(script_path):
    raise NotFoundError('File does not exist: %s' % script_path)
  return script_path


def main(args):
  try:
    tool = FindClangFormatToolInChromiumTree()
  except NotFoundError, e:
    print >> sys.stderr, e
    sys.exit(1)

  # Add some visibility to --help showing where the tool lives, since this
  # redirection can be a little opaque.
  help_syntax = ('-h', '--help', '-help', '-help-list', '--help-list')
  if any(match in args for match in help_syntax):
    print '\nDepot tools redirects you to the clang-format at:\n    %s\n' % tool

  return subprocess.call([tool] + sys.argv[1:])


if __name__ == '__main__':
  sys.exit(main(sys.argv))

#!/usr/bin/env python
# Copyright 2013 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

"""This script is a wrapper around the GN binary that is pulled from Google
Cloud Storage when you sync Chrome. The binaries go into platform-specific
subdirectories in the source tree.

This script makes there be one place for forwarding to the correct platform's
binary. It will also automatically try to find the gn binary when run inside
the chrome source tree, so users can just type "gn" on the command line
(normally depot_tools is on the path)."""

import gclient_utils
import os
import subprocess
import sys


def RunGN(sourceroot):
  # The binaries in platform-specific subdirectories in src/tools/gn/bin.
  gnpath = os.path.join(sourceroot,
                        'tools', 'gn', 'bin', gclient_utils.GetMacWinOrLinux(),
                        'gn' + gclient_utils.GetExeSuffix())
  return subprocess.call([gnpath] + sys.argv[1:])


def main(args):
  for arg in sys.argv:
    if arg.startswith('--root='):
      sourceroot = arg.replace('--root=', '')
      dotfile_path = os.path.join(sourceroot, '.gn')
      if not os.path.exists(dotfile_path):
        print >> sys.stderr, 'gn.py: "%s" not found, exiting.' % dotfile_path
        sys.exit(1)
      return RunGN(sourceroot)

  sourceroot = gclient_utils.FindFileUpwards('.gn')
  if not sourceroot:
    print >> sys.stderr, ('gn.py: No .gn file found in any parent of '
                          'the current path.')
    print >> sys.stderr, ('\nYou need to either be inside a checkout, '
                          'or use --root to specify the checkout root.')
    sys.exit(1)
  return RunGN(sourceroot)


if __name__ == '__main__':
  sys.exit(main(sys.argv))

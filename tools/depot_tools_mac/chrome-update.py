#!/usr/bin/env python
# Copyright (c) 2011 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import os
import re
import subprocess
import sys
import urllib

IS_WIN = sys.platform.startswith('win')
BASE_URL = 'http://src.chromium.org/svn/trunk/tools/buildbot/scripts/'
COMPILE_URL = BASE_URL + 'slave/compile.py'
UTILS_URL = BASE_URL + 'common/chromium_utils.py'


def Fetch(url, filename):
  if not os.path.exists(filename):
    urllib.urlretrieve(url, filename)


def GetLastestRevision():
  """Returns the revision number of the last build that was archived, or
  None on failure."""
  url = 'http://build.chromium.org/buildbot/continuous/'
  if sys.platform.startswith('win'):
    url += 'win/'
  elif sys.platform.startswith('linux'):
    url += 'linux/'
  elif sys.platform.startswith('darwin'):
    url += 'mac/'
  else:
    # This path is actually win.
    pass
  url += 'LATEST/REVISION'
  text = urllib.urlopen(url).read()
  if text:
    match = re.search(r"(\d+)", text)
    if match:
      return int(match.group(1))
  return None


def DoUpdate(chrome_root):
  """gclient sync to the latest build."""
  cmd = ["gclient", "sync"]
  rev = GetLastestRevision()
  if rev:
    cmd.extend(['--revision', 'src@%d' % rev])
  return subprocess.call(cmd, cwd=chrome_root, shell=IS_WIN)


def DoBuild(chrome_root, args):
  """Download compile.py and run it."""
  compile_path = os.path.join(chrome_root, 'compile.py')
  Fetch(COMPILE_URL, compile_path)
  Fetch(UTILS_URL, os.path.join(chrome_root, 'chromium_utils.py'))
  cmd = ['python', compile_path] + args
  return subprocess.call(cmd, cwd=chrome_root, shell=IS_WIN)


def Main(args):
  if len(args) < 3:
    print('Usage: chrome-update.py <path> [options]')
    print('See options from compile.py at')
    print('  %s' % COMPILE_URL)
    print('\nFor more example, see the compile steps on the waterfall')
    return 1

  chrome_root = args[1]
  if not os.path.isdir(chrome_root):
    print('Path to chrome root (%s) not found.' % chrome_root)
    return 1

  rv = DoUpdate(chrome_root)
  if rv != 0:
    print('Update Failed.  Bailing.')
    return rv

  DoBuild(chrome_root, args[2:])
  print('Success!')
  return 0


if __name__ == "__main__":
  sys.exit(Main(sys.argv))

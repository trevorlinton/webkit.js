#!/usr/bin/env python
# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import argparse
import sys

from git_common import squash_current_branch

def main(args):
  parser = argparse.ArgumentParser()
  parser.add_argument(
      '-m', '--message', metavar='<msg>', default='git squash commit.',
      help='Use the given <msg> as the first line of the commit message.')
  opts = parser.parse_args(args)
  squash_current_branch(opts.message)

if __name__ == '__main__':
  sys.exit(main(sys.argv[1:]))

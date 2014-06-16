#!/usr/bin/env python
# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import argparse
import sys

import subprocess2

import git_common as git

def main(args):
  default_args = git.config_list('depot-tools.upstream-diff.default-args')
  args = default_args + args

  parser = argparse.ArgumentParser()
  parser.add_argument('--wordwise', action='store_true', default=False,
                      help=(
                        'Print a colorized wordwise diff '
                        'instead of line-wise diff'))
  opts, extra_args = parser.parse_known_args(args)

  cur = git.current_branch()
  if not cur or cur == 'HEAD':
    print 'fatal: Cannot perform git-upstream-diff while not on a branch'
    return 1

  par = git.upstream(cur)
  if not par:
    print 'fatal: No upstream configured for branch \'%s\'' % cur
    return 1

  cmd = [git.GIT_EXE, 'diff', '--patience', '-C', '-C']
  if opts.wordwise:
    cmd += ['--word-diff=color', r'--word-diff-regex=(\w+|[^[:space:]])']
  cmd += [git.get_or_create_merge_base(cur, par)]

  cmd += extra_args

  subprocess2.check_call(cmd)


if __name__ == '__main__':
  sys.exit(main(sys.argv[1:]))

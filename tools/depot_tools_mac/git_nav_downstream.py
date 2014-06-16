#!/usr/bin/env python
# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

"""
Checks out a downstream branch from the currently checked out branch. If there
is more than one downstream branch, then this script will prompt you to select
which branch.
"""

import sys

from git_common import current_branch, branches, upstream, run, hash_one


def main(argv):
  assert len(argv) == 1, "No arguments expected"
  upfn = upstream
  cur = current_branch()
  if cur == 'HEAD':
    def _upfn(b):
      parent = upstream(b)
      if parent:
        return hash_one(parent)
    upfn = _upfn
    cur = hash_one(cur)
  downstreams = [b for b in branches() if upfn(b) == cur]
  if not downstreams:
    return "No downstream branches"
  elif len(downstreams) == 1:
    run('checkout', downstreams[0])
  else:
    high = len(downstreams) - 1
    print
    while True:
      print "Please select a downstream branch"
      for i, b in enumerate(downstreams):
        print "  %d. %s" % (i, b)
      r = raw_input("Selection (0-%d)[0]: " % high).strip() or '0'
      if not r.isdigit() or (0 > int(r) > high):
        print "Invalid choice."
      else:
        run('checkout', downstreams[int(r)])
        break


if __name__ == '__main__':
  sys.exit(main(sys.argv))

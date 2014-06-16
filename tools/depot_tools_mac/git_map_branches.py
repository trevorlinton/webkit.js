#!/usr/bin/env python
# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

"""
Provides a short mapping of all the branches in your local repo, organized by
their upstream ('tracking branch') layout. Example:

origin/master
  cool_feature
    dependent_feature
    other_dependent_feature
  other_feature

Branches are colorized as follows:
  * Red - a remote branch (usually the root of all local branches)
  * Cyan - a local branch which is the same as HEAD
    * Note that multiple branches may be Cyan, if they are all on the same
      commit, and you have that commit checked out.
  * Green - a local branch
  * Magenta - a tag
  * Magenta '{NO UPSTREAM}' - If you have local branches which do not track any
    upstream, then you will see this.
"""

import collections
import sys

from third_party import colorama
from third_party.colorama import Fore, Style

from git_common import current_branch, branches, upstream, hash_one, hash_multi
from git_common import tags

NO_UPSTREAM = '{NO UPSTREAM}'

def color_for_branch(branch, branch_hash, cur_hash, tag_set):
  if branch.startswith('origin'):
    color = Fore.RED
  elif branch == NO_UPSTREAM or branch in tag_set:
    color = Fore.MAGENTA
  elif branch_hash == cur_hash:
    color = Fore.CYAN
  else:
    color = Fore.GREEN

  if branch_hash == cur_hash:
    color += Style.BRIGHT
  else:
    color += Style.NORMAL

  return color


def print_branch(cur, cur_hash, branch, branch_hashes, par_map, branch_map,
                 tag_set, depth=0):
  branch_hash = branch_hashes[branch]

  color = color_for_branch(branch, branch_hash, cur_hash, tag_set)

  suffix = ''
  if cur == 'HEAD':
    if branch_hash == cur_hash:
      suffix = ' *'
  elif branch == cur:
    suffix = ' *'

  print color + "  "*depth + branch + suffix
  for child in par_map.pop(branch, ()):
    print_branch(cur, cur_hash, child, branch_hashes, par_map, branch_map,
                 tag_set, depth=depth+1)


def main(argv):
  colorama.init()
  assert len(argv) == 1, "No arguments expected"
  branch_map = {}
  par_map = collections.defaultdict(list)
  for branch in branches():
    par = upstream(branch) or NO_UPSTREAM
    branch_map[branch] = par
    par_map[par].append(branch)

  current = current_branch()
  hashes = hash_multi(current, *branch_map.keys())
  current_hash = hashes[0]
  par_hashes = {k: hashes[i+1] for i, k in enumerate(branch_map.iterkeys())}
  par_hashes[NO_UPSTREAM] = 0
  tag_set = tags()
  while par_map:
    for parent in par_map:
      if parent not in branch_map:
        if parent not in par_hashes:
          par_hashes[parent] = hash_one(parent)
        print_branch(current, current_hash, parent, par_hashes, par_map,
                     branch_map, tag_set)
        break


if __name__ == '__main__':
  sys.exit(main(sys.argv))


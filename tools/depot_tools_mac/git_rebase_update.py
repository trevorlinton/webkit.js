#!/usr/bin/env python
# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

"""
Tool to update all branches to have the latest changes from their upstreams.
"""

import argparse
import collections
import logging
import sys
import textwrap

from pprint import pformat

import git_common as git


STARTING_BRANCH_KEY = 'depot-tools.rebase-update.starting-branch'


def find_return_branch():
  """Finds the branch which we should return to after rebase-update completes.

  This value may persist across multiple invocations of rebase-update, if
  rebase-update runs into a conflict mid-way.
  """
  return_branch = git.config(STARTING_BRANCH_KEY)
  if return_branch is None:
    return_branch = git.current_branch()
    if return_branch != 'HEAD':
      git.set_config(STARTING_BRANCH_KEY, return_branch)

  return return_branch


def fetch_remotes(branch_tree):
  """Fetches all remotes which are needed to update |branch_tree|."""
  fetch_tags = False
  remotes = set()
  tag_set = git.tags()
  for parent in branch_tree.itervalues():
    if parent in tag_set:
      fetch_tags = True
    else:
      full_ref = git.run('rev-parse', '--symbolic-full-name', parent)
      if full_ref.startswith('refs/remotes'):
        parts = full_ref.split('/')
        remote_name = parts[2]
        remotes.add(remote_name)

  fetch_args = []
  if fetch_tags:
    # Need to fetch all because we don't know what remote the tag comes from :(
    # TODO(iannucci): assert that the tags are in the remote fetch refspec
    fetch_args = ['--all']
  else:
    fetch_args.append('--multiple')
    fetch_args.extend(remotes)
  # TODO(iannucci): Should we fetch git-svn?

  if not fetch_args:  # pragma: no cover
    print 'Nothing to fetch.'
  else:
    out, err = git.run_with_stderr('fetch', *fetch_args)
    for data, stream in zip((out, err), (sys.stdout, sys.stderr)):
      if data:
        print >> stream, data


def remove_empty_branches(branch_tree):
  tag_set = git.tags()
  ensure_root_checkout = git.once(lambda: git.run('checkout', git.root()))

  deletions = set()
  downstreams = collections.defaultdict(list)
  for branch, parent in git.topo_iter(branch_tree, top_down=False):
    downstreams[parent].append(branch)

    if git.hash_one(branch) == git.hash_one(parent):
      ensure_root_checkout()

      logging.debug('branch %s merged to %s', branch, parent)

      for down in downstreams[branch]:
        if down in deletions:
          continue

        if parent in tag_set:
          git.set_branch_config(down, 'remote', '.')
          git.set_branch_config(down, 'merge', 'refs/tags/%s' % parent)
          print ('Reparented %s to track %s [tag] (was tracking %s)'
                 % (down, parent, branch))
        else:
          git.run('branch', '--set-upstream-to', parent, down)
          print ('Reparented %s to track %s (was tracking %s)'
                 % (down, parent, branch))

      deletions.add(branch)
      print git.run('branch', '-d', branch)


def rebase_branch(branch, parent, start_hash):
  logging.debug('considering %s(%s) -> %s(%s) : %s',
                branch, git.hash_one(branch), parent, git.hash_one(parent),
                start_hash)

  # If parent has FROZEN commits, don't base branch on top of them. Instead,
  # base branch on top of whatever commit is before them.
  back_ups = 0
  orig_parent = parent
  while git.run('log', '-n1', '--format=%s',
                parent, '--').startswith(git.FREEZE):
    back_ups += 1
    parent = git.run('rev-parse', parent+'~')

  if back_ups:
    logging.debug('Backed parent up by %d from %s to %s',
                  back_ups, orig_parent, parent)

  if git.hash_one(parent) != start_hash:
    # Try a plain rebase first
    print 'Rebasing:', branch
    if not git.rebase(parent, start_hash, branch, abort=True).success:
      # TODO(iannucci): Find collapsible branches in a smarter way?
      print "Failed! Attempting to squash", branch, "...",
      squash_branch = branch+"_squash_attempt"
      git.run('checkout', '-b', squash_branch)
      git.squash_current_branch(merge_base=start_hash)

      # Try to rebase the branch_squash_attempt branch to see if it's empty.
      squash_ret = git.rebase(parent, start_hash, squash_branch, abort=True)
      empty_rebase = git.hash_one(squash_branch) == git.hash_one(parent)
      git.run('checkout', branch)
      git.run('branch', '-D', squash_branch)
      if squash_ret.success and empty_rebase:
        print 'Success!'
        git.squash_current_branch(merge_base=start_hash)
        git.rebase(parent, start_hash, branch)
      else:
        # rebase and leave in mid-rebase state.
        git.rebase(parent, start_hash, branch)
        print "Failed!"
        print
        print "Here's what git-rebase had to say:"
        print squash_ret.message
        print
        print textwrap.dedent(
        """
        Squashing failed. You probably have a real merge conflict.

        Your working copy is in mid-rebase. Either:
         * completely resolve like a normal git-rebase; OR
         * abort the rebase and mark this branch as dormant:
               git config branch.%s.dormant true

        And then run `git rebase-update` again to resume.
        """ % branch)
        return False
  else:
    print '%s up-to-date' % branch

  git.remove_merge_base(branch)
  git.get_or_create_merge_base(branch)

  return True


def main(args=()):
  parser = argparse.ArgumentParser()
  parser.add_argument('--verbose', '-v', action='store_true')
  parser.add_argument('--no_fetch', '-n', action='store_true',
                      help='Skip fetching remotes.')
  opts = parser.parse_args(args)

  if opts.verbose:  # pragma: no cover
    logging.getLogger().setLevel(logging.DEBUG)

  # TODO(iannucci): snapshot all branches somehow, so we can implement
  #                 `git rebase-update --undo`.
  #   * Perhaps just copy packed-refs + refs/ + logs/ to the side?
  #     * commit them to a secret ref?
  #       * Then we could view a summary of each run as a
  #         `diff --stat` on that secret ref.

  if git.in_rebase():
    # TODO(iannucci): Be able to resume rebase with flags like --continue,
    # etc.
    print (
      'Rebase in progress. Please complete the rebase before running '
      '`git rebase-update`.'
    )
    return 1

  return_branch = find_return_branch()

  if git.current_branch() == 'HEAD':
    if git.run('status', '--porcelain'):
      print 'Cannot rebase-update with detached head + uncommitted changes.'
      return 1
  else:
    git.freeze()  # just in case there are any local changes.

  skipped, branch_tree = git.get_branch_tree()
  for branch in skipped:
    print 'Skipping %s: No upstream specified' % branch

  if not opts.no_fetch:
    fetch_remotes(branch_tree)

  merge_base = {}
  for branch, parent in branch_tree.iteritems():
    merge_base[branch] = git.get_or_create_merge_base(branch, parent)

  logging.debug('branch_tree: %s' % pformat(branch_tree))
  logging.debug('merge_base: %s' % pformat(merge_base))

  retcode = 0
  # Rebase each branch starting with the root-most branches and working
  # towards the leaves.
  for branch, parent in git.topo_iter(branch_tree):
    if git.is_dormant(branch):
      print 'Skipping dormant branch', branch
    else:
      ret = rebase_branch(branch, parent, merge_base[branch])
      if not ret:
        retcode = 1
        break

  if not retcode:
    remove_empty_branches(branch_tree)

    # return_branch may not be there any more.
    if return_branch in git.branches():
      git.run('checkout', return_branch)
      git.thaw()
    else:
      root_branch = git.root()
      if return_branch != 'HEAD':
        print (
          "%r was merged with its parent, checking out %r instead."
          % (return_branch, root_branch)
        )
      git.run('checkout', root_branch)
    git.del_config(STARTING_BRANCH_KEY)

  return retcode


if __name__ == '__main__':  # pragma: no cover
  sys.exit(main(sys.argv[1:]))

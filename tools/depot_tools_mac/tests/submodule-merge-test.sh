#!/bin/bash

# Copyright (c) 2012 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

set -e

. ./test-lib.sh

setup_initsvn
setup_gitsvn_submodule

(
  set -e
  prev_svn_revision=`svn info file://$PWD/svnrepo | grep ^Revision | \
      sed s/^.*:// | xargs`
  cd git-svn-submodule
  git config rietveld.server localhost:1
  git checkout -q --track -b work
  echo "some work done" >> test
  git add test; git commit -q -m "work \
TBR=foo"

  git_diff=`git diff HEAD^ | sed -n '/^@@/,$p' | xargs`

  test_expect_success "dcommitted code" \
      "$GIT_CL dcommit -f --bypass-hooks -m 'dcommit'"

  cd ..

  next_svn_revision=`svn info file://$PWD/svnrepo | grep ^Revision | \
      sed s/^.*:// | xargs`

  test_expect_success "svn got new revision" \
      "test $next_svn_revision = `expr $prev_svn_revision + 1`"

  svn_diff=`svn diff -c $next_svn_revision file://$PWD/svnrepo | \
      sed -n '/^@@/,$p' | xargs`

  test_expect_success "svn diff is correct" \
      "test \"$git_diff\" = \"$svn_diff\""

  cd git-svn-submodule
  git svn fetch
  last_svn_rev=`git show refs/remotes/trunk | grep git-svn-id: | \
      grep -o trunk@[0-9]* | xargs`

  test_expect_success "git svn fetch gets new svn revision" \
      "test $last_svn_rev = trunk@$next_svn_revision"
)
SUCCESS=$?

#cleanup

if [ $SUCCESS == 0 ]; then
  echo PASS
fi

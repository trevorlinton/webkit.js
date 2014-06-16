#!/bin/bash

# Copyright (c) 2012 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

# Check that abandoning a branch also abandons its issue.

set -e

. ./test-lib.sh

setup_initsvn
setup_gitsvn

(
  set -e
  cd git-svn
  git config rietveld.server localhost:10000

  # Create a branch and give it an issue.
  git checkout -q -b abandoned
  echo "some work done on a branch" >> test
  git add test; git commit -q -m "branch work"
  export GIT_EDITOR=$(which true)
  test_expect_success "upload succeeds" \
    "$GIT_CL upload -m test master  | grep -q 'Issue created'"

  # Switch back to master, delete the branch.
  git checkout master
  git branch -D abandoned

  # Verify that "status" doesn't know about it anymore.
  # The "exit" trickiness is inverting the exit status of grep.
  test_expect_success "git-cl status dropped abandoned branch" \
    "$GIT_CL_STATUS | grep -q abandoned && exit 1 || exit 0"
)

SUCCESS=$?

cleanup

if [ $SUCCESS == 0 ]; then
  echo PASS
fi

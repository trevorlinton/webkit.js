#!/bin/bash

# Copyright (c) 2012 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

# Check that we're able to submit from a directory that doesn't exist on the
# trunk.  This tests for a previous bug where we ended up with an invalid CWD
# after switching to the merge branch.

set -e

. ./test-lib.sh

setup_initsvn
setup_gitsvn

(
  set -e
  cd git-svn
  git config rietveld.server localhost:8080

  # Create a branch and give it an issue.
  git checkout -q -b new
  mkdir dir
  cd dir
  echo "some work done on a branch" >> test
  git add test; git commit -q -m "branch work"
  export GIT_EDITOR=$(which true)
  test_expect_success "upload succeeds" \
    "$GIT_CL upload -m test master | grep -q 'Issue created'"
  test_expect_success "git-cl dcommits ok" \
    "$GIT_CL dcommit -f"
)

SUCCESS=$?

cleanup

if [ $SUCCESS == 0 ]; then
  echo PASS
fi

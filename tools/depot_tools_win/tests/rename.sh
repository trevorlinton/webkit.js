#!/bin/bash

# Copyright (c) 2012 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

# Renaming a file should show up as a rename in the review.

set -e

. ./test-lib.sh

setup_initsvn
setup_gitsvn

(
  set -e
  cd git-svn
  git config rietveld.server localhost:8080

  # Create a branch, rename a file, upload it.
  git checkout -q -b rename
  git mv test test2
  git commit -q -m "renamed"
  export GIT_EDITOR=$(which true)
  test_expect_success "upload succeeds" \
    "$GIT_CL upload -m test master | grep -q 'Issue created'"

  # Look at the uploaded patch and verify it is a rename patch.
  echo "Rename test not fully implemented yet.  :("
  exit 1
)

SUCCESS=$?

cleanup

if [ $SUCCESS == 0 ]; then
  echo PASS
fi

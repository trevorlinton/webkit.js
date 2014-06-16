#!/bin/bash

# Copyright (c) 2012 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

set -e

. ./test-lib.sh

setup_initgit
setup_gitgit

(
  set -e
  cd git-git
  git checkout -q -b work HEAD^
  echo "some work done on a branch" >> test
  git add test; git commit -q -m "branch work"

  git config rietveld.server localhost:8080

  # Prevent the editor from coming up when you upload.
  export GIT_EDITOR=$(which true)
  test_expect_success "upload succeeds (needs a server running on localhost)" \
    "$GIT_CL upload -m test | grep -q 'Issue created'"

  test_expect_failure "description shouldn't contain unrelated commits" \
    "$GIT_CL_STATUS | grep -q 'second commit'"
)
SUCCESS=$?

cleanup

if [ $SUCCESS == 0 ]; then
  echo PASS
fi

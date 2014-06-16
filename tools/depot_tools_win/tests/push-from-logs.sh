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
  git checkout -q --track -b work origin
  echo "some work done on a branch" >> test
  git add test; git commit -q -m "branch work"
  echo "some other work done on a branch" >> test
  git add test; git commit -q -m "branch work"

  test_expect_success "git-cl upload wants a server" \
    "$GIT_CL upload 2>&1 | grep -q 'You must configure'"

  git config rietveld.server localhost:8080

  test_expect_success "git-cl status has no issue" \
    "$GIT_CL_STATUS | grep -q 'no issue'"

  # Prevent the editor from coming up when you upload.
  export EDITOR=$(which true)
  test_expect_success "upload succeeds (needs a server running on localhost)" \
      "$GIT_CL upload -m test master | \
      grep -q 'Issue created'"

  test_expect_success "git-cl status now knows the issue" \
      "$GIT_CL_STATUS | grep -q 'Issue number'"

  # Check to see if the description contains the local commit messages.
  # Should contain 'branch work' x 2.
  test_expect_success "git-cl status has the right description for the log" \
      "$GIT_CL_STATUS --field desc | [ $( egrep -q '^branch work$' -c ) -eq 2 ]
  
  test_expect_success "git-cl status has the right subject from message" \
      "$GIT_CL_STATUS --field desc | \
      [ $( egrep -q '^test$' --byte-offset) | grep '^0:' ]

  test_expect_success "git-cl push ok" \
    "$GIT_CL push -f"

  git checkout -q master > /dev/null 2>&1
  git pull -q > /dev/null 2>&1

  test_expect_success "committed code has proper description" \
      "git show | [ $( egrep -q '^branch work$' -c ) -eq 2 ]

  test_expect_success "issue no longer has a branch" \
      "$GIT_CL_STATUS | grep -q 'work: None'"

  cd $GITREPO_PATH
  test_expect_success "upstream repo has our commit" \
      "git log master 2>/dev/null | [ $( egrep -q '^branch work$' -c ) -eq 2 ]
)
SUCCESS=$?

cleanup

if [ $SUCCESS == 0 ]; then
  echo PASS
fi

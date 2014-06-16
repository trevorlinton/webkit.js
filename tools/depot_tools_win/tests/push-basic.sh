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
  export GIT_EDITOR=$(which true)
  test_expect_success "upload succeeds (needs a server running on localhost)" \
    "$GIT_CL upload -m test master | grep -q 'Issue created'"

  test_expect_success "git-cl status now knows the issue" \
    "$GIT_CL_STATUS | grep -q 'Issue number'"

  # Push a description to this URL.
  URL=$($GIT_CL_STATUS | sed -ne '/Issue number/s/[^(]*(\(.*\))/\1/p')
  curl --cookie dev_appserver_login="test@example.com:False" \
       --data-urlencode subject="test" \
       --data-urlencode description="foo-quux" \
       --data-urlencode xsrf_token="$(print_xsrf_token)" \
       $URL/edit

  test_expect_success "Base URL contains branch name" \
      "curl -s $($GIT_CL_STATUS --field=url) | grep 'URL:' | grep -q '@master'"

  test_expect_success "git-cl push ok" \
    "$GIT_CL push -f"

  git checkout -q master > /dev/null 2>&1
  git pull -q > /dev/null 2>&1

  test_expect_success "committed code has proper description" \
      "git show | grep -q 'foo-quux'"

  test_expect_success "issue no longer has a branch" \
      "$GIT_CL_STATUS | grep -q 'work: None'"

  cd $GITREPO_PATH
  test_expect_success "upstream repo has our commit" \
      "git log master 2>/dev/null | grep -q 'foo-quux'"
)
SUCCESS=$?

cleanup

if [ $SUCCESS == 0 ]; then
  echo PASS
fi

#!/bin/bash

# Copyright (c) 2012 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

set -e

. ./test-lib.sh

setup_initsvn
setup_gitsvn

(

  set -e
  cd git-svn
  git config rietveld.server localhost:10000
  export GIT_EDITOR=$(which true)

  git checkout -q -b work
  echo "ben@chromium.org" > OWNERS
  cat <<END > PRESUBMIT.py
def CheckChangeOnCommit(input_api, output_api):
  return input_api.canned_checks.CheckOwners(input_api, output_api)

CheckChangeOnUpload = CheckChangeOnCommit
END

  git add OWNERS PRESUBMIT.py ; git commit -q -m "add OWNERS"

  test_expect_success "upload succeeds (needs a server running on localhost)" \
    "$GIT_CL upload -m test master | grep -q 'Issue created'"

  test_expect_success "git-cl status has a suggested reviewer" \
    "$GIT_CL_STATUS | grep -q 'R=ben@chromium.org'"

  test_expect_failure "git-cl dcommit fails w/ missing LGTM" \
    "$GIT_CL dcommit -f"

  test_expect_success "git-cl dcommit --tbr succeeds" \
    "$GIT_CL dcommit --tbr -f | grep -q -- '--tbr was specified'"
)
SUCCESS=$?

cleanup

if [ $SUCCESS == 0 ]; then
  echo PASS
fi

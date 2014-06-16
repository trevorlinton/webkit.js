#!/bin/bash

# Copyright (c) 2012 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

# We should save a change's description when an upload fails.

set -e

. ./test-lib.sh

# Back up any previously-saved description the user might have.
BACKUP_FILE="$HOME/.git_cl_description_backup"
BACKUP_FILE_TMP="$BACKUP_FILE.tmp"
if [ -e "$BACKUP_FILE" ]; then
  mv "$BACKUP_FILE" "$BACKUP_FILE_TMP"
fi

setup_initgit
setup_gitgit

(
  set -e
  cd git-git

  DESC="this is the description"

  # Create a branch and check in a file.
  git checkout -q --track -b work origin
  echo foo >> test
  git add test; git commit -q -m "$DESC"

  # Try to upload the change to an unresolvable hostname; git-cl should fail.
  export GIT_EDITOR=$(which true)
  git config rietveld.server bogus.example.com:80
  test_expect_failure "uploading to bogus server" "$GIT_CL upload 2>/dev/null"

  # Check that the change's description was saved.
  test_expect_success "description was backed up" \
    "grep -q '$DESC' '$BACKUP_FILE'"
)

SUCCESS=$?

cleanup

# Restore the previously-saved description.
rm -f "$BACKUP_FILE"
if [ -e "$BACKUP_FILE_TMP" ]; then
  mv "$BACKUP_FILE_TMP" "$BACKUP_FILE"
fi

if [ $SUCCESS == 0 ]; then
  echo PASS
fi

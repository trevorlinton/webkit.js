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

  cat > .git/hooks/post-cl-dcommit << _EOF
#!/bin/bash
git branch -m COMMITTED
_EOF
  chmod +x .git/hooks/post-cl-dcommit

  git config rietveld.server localhost:1
  git checkout -q --track -b work
  echo "some work done" >> test
  git add test; git commit -q -m "work \
TBR=foo"

  test_expect_success "dcommitted code" \
      "$GIT_CL dcommit -f --bypass-hooks -m 'dcommit'"

  test_expect_success "post-cl-dcommit hook executed" \
      "git symbolic-ref HEAD | grep -q COMMITTED"
)
SUCCESS=$?

cleanup

if [ $SUCCESS == 0 ]; then
  echo PASS
fi

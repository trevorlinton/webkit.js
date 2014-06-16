#!/bin/bash

# Copyright (c) 2012 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

# Abort on error.
set -e

export DEPOT_TOOLS_UPDATE=0

PWD=`pwd`
REPO_URL=file://$PWD/svnrepo
TRUNK_URL=$REPO_URL/trunk
BRANCH_URL=$REPO_URL/branches/some_branch
GITREPO_PATH=$PWD/gitrepo
GITREPO_URL=file://$GITREPO_PATH
PATH="$PWD/..:$PATH"
GIT_CL=$PWD/../git-cl
GIT_CL_STATUS="$GIT_CL status -f"

# Set up an SVN repo that has a few commits to trunk.
setup_initsvn() {
  echo "Setting up test SVN repo..."
  rm -rf svnrepo
  svnadmin create svnrepo
  # Need this in order for Mac SnowLeopard to work
  echo "enable-rep-sharing = false" >> svnrepo/db/fsfs.conf

  svn mkdir -q -m 'creating trunk' --parents $TRUNK_URL

  rm -rf svn
  svn co -q $TRUNK_URL svn
  (
    cd svn
    echo "test" > test
    svn add -q test
    svn commit -q -m "initial commit"
    echo "test2" >> test
    svn commit -q -m "second commit"
  )

  svn cp -q -m 'branching' --parents $TRUNK_URL $BRANCH_URL
}

# Set up a git-svn checkout of the repo.
setup_gitsvn() {
  echo "Setting up test git-svn repo..."
  rm -rf git-svn
  # There appears to be no way to make git-svn completely shut up, so we
  # redirect its output.
  git svn --prefix origin/ -q clone -s $REPO_URL git-svn >/dev/null 2>&1
  (
    cd git-svn
    git remote add origin https://example.com/fake_refspec
    git config user.name 'TestDood'
    git config user.email 'TestDood@example.com'
  )
}

# Set up a git-svn checkout of the repo and apply merge commits
# (like the submodule repo layout).
setup_gitsvn_submodule() {
  echo "Setting up test remote git-svn-submodule repo..."
  rm -rf git-svn-submodule
  git svn -q clone -s $REPO_URL git-svn-submodule >/dev/null 2>&1
  svn_revision=`svn info file://$PWD/svnrepo | grep ^Revision | \
                sed s/^.*:// | xargs`
  (
    cd git-svn-submodule
    git config user.name 'TestDood'
    git config user.email 'TestDood@example.com'
    echo 'merge-file line 1' > merge-file
    git add merge-file; git commit -q -m 'First non-svn commit on master'
    git checkout -q refs/remotes/trunk
    git merge -q --no-commit --no-ff refs/heads/master >/dev/null 2>&1
    echo 'merge-edit-file line 1' > merge-edit-file
    git add merge-edit-file
    git commit -q -m "SVN changes up to revision $svn_revision"
    git update-ref refs/heads/master HEAD
    git checkout master
  )
}

# Set up a git repo that has a few commits to master.
setup_initgit() {
  echo "Setting up test upstream git repo..."
  rm -rf gitrepo
  mkdir gitrepo

  (
    cd gitrepo
    git init -q
    git config user.name 'TestDood'
    git config user.email 'TestDood@example.com'
    echo "test" > test
    git add test
    git commit -qam "initial commit"
    echo "test2" >> test
    git commit -qam "second commit"
    # Hack: make sure master is not the current branch
    #       otherwise push will give a warning
    git checkout -q --detach master
  )
}

# Set up a git checkout of the repo.
setup_gitgit() {
  echo "Setting up test git repo..."
  rm -rf git-git
  git clone -q $GITREPO_URL git-git
  (
    cd git-git
    git config user.name 'TestDood'
    git config user.email 'TestDood@example.com'
  )
}

cleanup() {
  rm -rf gitrepo svnrepo svn git-git git-svn git-svn-submodule
}

# Usage: test_expect_success "description of test" "test code".
test_expect_success() {
  echo "TESTING: $1"
  exit_code=0
  sh -c "$2" || exit_code=$?
  if [ $exit_code != 0 ]; then
    echo "FAILURE: $1"
    return $exit_code
  fi
}

# Usage: test_expect_failure "description of test" "test code".
test_expect_failure() {
  echo "TESTING: $1"
  exit_code=0
  sh -c "$2" || exit_code=$?
  if [ $exit_code = 0 ]; then
    echo "SUCCESS, BUT EXPECTED FAILURE: $1"
    return $exit_code
  fi
}

# Grab the XSRF token from the review server and print it to stdout.
print_xsrf_token() {
  curl --cookie dev_appserver_login="test@example.com:False" \
    --header 'X-Requesting-XSRF-Token: 1' \
    http://localhost:10000/xsrf_token 2>/dev/null
}

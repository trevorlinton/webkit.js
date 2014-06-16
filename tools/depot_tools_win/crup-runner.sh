#!/bin/bash

update_toplevel () {
  # Don't "pull" if checkout is not on a named branch
  if test "$2" = "pull" && ( ! git symbolic-ref HEAD >/dev/null 2>/dev/null ); then
    first_args="$1 fetch"
  else
    first_args="$1 $2"
  fi
  shift 2
  echo "[$solution] $first_args $@" 1>&2
  $first_args $@ | sed "s/^/[$solution] /g" 1>&2
  status=$?
  if [ "$status" -ne 0 ]; then
    exit $status
  fi
}

set_target_os () {
  # Get the os we're building for.  On first run, this will be unset.
  target_os=$(git config --get-all target.os 2>/dev/null)
  if [ -z "$target_os" ]; then
    case $(uname -s) in
      Linux) target_os=unix ;;
      Darwin) target_os=mac ;;
      CYGWIN*|MINGW*) target_os=win ;;
      *)
        echo "[$solution] *** No target.os set in .git/config, and I can't" 1>&2
        echo "[$solution] *** figure it out from 'uname -s'" 1>&2
        exit 1
        ;;
    esac
    git config target.os "$target_os"
  fi
}

update_submodule_url () {
  # If the submodule's URL in .gitmodules has changed, propagate the new
  # new URL down.  This is the same as `git submodule sync`, but we do it
  # this way because `git submodule sync` is absurdly slow.
  new_url=$(git config -f .gitmodules "submodule.$1.url" 2>/dev/null)
  old_url=$(git config "submodule.$1.url" 2>/dev/null)
  if [ -n "$old_url" -a "$new_url" != "$old_url" ]; then
    git config "submodule.$1.url" "$new_url"
    if [ -e "$1"/.git ]; then
      ( cd $submod && git config remote.origin.url "$new_url" )
    fi
  fi
}

process_submodule () {
  # Check whether this submodule should be ignored or updated.
  # If it's a new submodule, match the os specified in .gitmodules against
  # the os specified in .git/config.
  update_policy=$(git config --get "submodule.$1.update")
  if [ -z "$update_policy" ]; then
    submod_os=$(git config -f .gitmodules --get "submodule.$1.os")
    if [ -n "$submod_os" -a "$submod_os" != "all" ]; then
      update_policy=none
      for os in $target_os; do
        if [ "${submod_os/${os}/}" != "${submod_os}" ]; then
          update_policy=checkout
        fi
      done
    else
      update_policy=checkout
    fi
    if [ "$update_policy" != "none" ]; then
      git submodule --quiet init "$1"
    fi
    git config "submodule.$1.update" $update_policy
  fi
  ignore_policy=$(git config --get "submodule.$1.ignore")
  if [ -z "$ignore_policy" ]; then
    git config "submodule.$1.ignore" all
  fi
  if [ "$update_policy" != "none" ]; then
    update_submodule_url "$1"
    echo "$solution/$1"
  fi
}

if [ -z "$*" ]; then
  exit 0
fi
set -o pipefail
dir="$1"
solution="${1%%/*}"
cd "$solution" 1>/dev/null

if [ "$solution" = "$1" ]; then
  # Skip git checkouts not managed by crup.
  if ! grep -q -s "The Chromium Authors" ".git/description"; then
    echo "Skipping unmanaged git directory $1" 1>&2
    exit 0
  fi

  # Set default behavior to ignore diffs in submodule checkouts
  diff_policy=$(git config --get "diff.ignoreSubmodules")
  if [ -z "$diff_policy" ]; then
    git config diff.ignoreSubmodules all
  fi

  # Don't "pull" if checkout is not on a named branch
  shift
  if test $# -ne 0; then
    update_toplevel "$@"
  fi

  set_target_os

  git ls-files -s | grep ^160000 | awk '{print $4}' |
  while read submod; do
    process_submodule "$submod"
  done
  status=$?
else
  submodule="${1#*/}"
  echo "[$solution] updating $submodule"
  git submodule update --recursive --quiet "$submodule" |
  ( grep -v '^Skipping submodule' || true ) | sed "s|^|[$1] |g" 2>/dev/null
  status=$?
  if [ "$status" -ne "0" ]; then
    echo "[$solution] FAILED to update $submodule"
  fi
fi
exit $status

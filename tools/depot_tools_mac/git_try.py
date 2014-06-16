#!/usr/bin/python
# Copyright (c) 2011 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.
"""Wrapper for trychange.py for git checkout."""

import logging
import sys

import breakpad  # pylint: disable=W0611

from scm import GIT
import subprocess2
import third_party.upload
import trychange
import git_cl


def GetRietveldIssueNumber():
  try:
    return GIT.Capture(
        ['config', 'branch.%s.rietveldissue' % GIT.GetBranch('.')],
        '.').strip()
  except subprocess2.CalledProcessError:
    return None


def GetRietveldPatchsetNumber():
  try:
    return GIT.Capture(
        ['config', 'branch.%s.rietveldpatchset' % GIT.GetBranch('.')],
        '.').strip()
  except subprocess2.CalledProcessError:
    return None


def GetRietveldServerUrl():
  try:
    return GIT.Capture(['config', 'rietveld.server'], '.').strip()
  except subprocess2.CalledProcessError:
    return None


if __name__ == '__main__':
  args = sys.argv[1:]
  patchset = GetRietveldPatchsetNumber()
  if patchset:
    args.extend([
        '--issue', GetRietveldIssueNumber(),
        '--patchset', patchset,
    ])
  else:
    rietveld_url = GetRietveldServerUrl()
    if rietveld_url:
      args.extend(['--rietveld_url', GetRietveldServerUrl()])
  try:
    cl = git_cl.Changelist()
    change = cl.GetChange(cl.GetUpstreamBranch(), None)
    # Hack around a limitation in logging.
    logging.getLogger().handlers = []
    sys.exit(trychange.TryChange(
        args, change, swallow_exception=False,
        prog='git try',
        extra_epilog='\n'
                     'git try will diff against your tracked branch and will '
                     'detect your rietveld\n'
                     'code review if you are using git-cl\n'))
  except third_party.upload.ClientLoginError, e:
    print('Got an exception while trying to log in to Rietveld.')
    print(str(e))

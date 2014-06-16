#!/usr/bin/env python
# Copyright 2014 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import sys
import optparse

import subcommand

from git_common import freeze, thaw

def CMDfreeze(parser, args):
  """Freeze a branch's changes."""
  parser.parse_args(args)
  return freeze()


def CMDthaw(parser, args):
  """Returns a frozen branch to the state before it was frozen."""
  parser.parse_args(args)
  return thaw()


def main():
  dispatcher = subcommand.CommandDispatcher(__name__)
  ret = dispatcher.execute(optparse.OptionParser(), sys.argv[1:])
  if ret:
    print ret


if __name__ == '__main__':
  main()

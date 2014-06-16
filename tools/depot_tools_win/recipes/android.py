# Copyright (c) 2013 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import sys

import recipe_util  # pylint: disable=F0401


# This class doesn't need an __init__ method, so we disable the warning
# pylint: disable=W0232
class Android(recipe_util.Recipe):
  """Basic Recipe alias for Android -> Chromium."""

  @staticmethod
  def fetch_spec(props):
    return {
      'alias': {
        'recipe': 'chromium',
        'props': ['--target_os=android'],
      },
    }


def main(argv=None):
  return Android().handle_args(argv)


if __name__ == '__main__':
  sys.exit(main(sys.argv))

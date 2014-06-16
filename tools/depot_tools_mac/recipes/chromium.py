# Copyright (c) 2013 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import sys

import recipe_util  # pylint: disable=F0401


# This class doesn't need an __init__ method, so we disable the warning
# pylint: disable=W0232
class Chromium(recipe_util.Recipe):
  """Basic Recipe class for Chromium."""

  @staticmethod
  def fetch_spec(props):
    url = 'https://chromium.googlesource.com/chromium/src.git'
    solution = { 'name'   :'src',
                 'url'    : url,
                 'deps_file': '.DEPS.git',
                 'managed'   : False,
                 'custom_deps': {},
                 'safesync_url': '',
    }
    if props.get('webkit_rev', '') == 'ToT':
      solution['custom_vars'] = {'webkit_rev': ''}
    spec = {
      'solutions': [solution],
      'svn_url': 'svn://svn.chromium.org/chrome',
      'svn_branch': 'trunk/src',
      'svn_ref': 'git-svn',
    }
    if props.get('submodule_git_svn_spec'):
      spec['submodule_git_svn_spec'] = props['submodule_git_svn_spec']
    if props.get('target_os'):
      spec['target_os'] = props['target_os'].split(',')
    if props.get('target_os_only'):
      spec['target_os_only'] = props['target_os_only']
    checkout_type = 'gclient_git_svn'
    if props.get('nosvn'):
      checkout_type = 'gclient_git'
    spec_type = '%s_spec' % checkout_type
    return {
      'type': checkout_type,
      spec_type: spec,
    }

  @staticmethod
  def expected_root(_props):
    return 'src'


def main(argv=None):
  return Chromium().handle_args(argv)


if __name__ == '__main__':
  sys.exit(main(sys.argv))

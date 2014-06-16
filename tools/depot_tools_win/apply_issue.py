#!/usr/bin/env python
# Copyright (c) 2012 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

"""Applies an issue from Rietveld.
"""

import getpass
import logging
import optparse
import os
import subprocess
import sys
import urllib2

import breakpad  # pylint: disable=W0611

import checkout
import fix_encoding
import gclient_utils
import rietveld
import scm

BASE_DIR = os.path.dirname(os.path.abspath(__file__))


class Unbuffered(object):
  """Disable buffering on a file object."""
  def __init__(self, stream):
    self.stream = stream

  def write(self, data):
    self.stream.write(data)
    self.stream.flush()

  def __getattr__(self, attr):
    return getattr(self.stream, attr)


def main():
  sys.stdout = Unbuffered(sys.stdout)
  parser = optparse.OptionParser(description=sys.modules[__name__].__doc__)
  parser.add_option(
      '-v', '--verbose', action='count', default=0,
      help='Prints debugging infos')
  parser.add_option(
      '-e', '--email',
      help='Email address to access rietveld.  If not specified, anonymous '
           'access will be used.')
  parser.add_option(
      '-w', '--password', default=None,
      help='Password for email addressed.  Use - to read password from stdin.')
  parser.add_option(
      '-i', '--issue', type='int', help='Rietveld issue number')
  parser.add_option(
      '-p', '--patchset', type='int', help='Rietveld issue\'s patchset number')
  parser.add_option(
      '-r',
      '--root_dir',
      default=os.getcwd(),
      help='Root directory to apply the patch')
  parser.add_option(
      '-s',
      '--server',
      default='http://codereview.chromium.org',
      help='Rietveld server')
  parser.add_option('--no-auth', action='store_true',
                    help='Do not attempt authenticated requests.')
  options, args = parser.parse_args()
  logging.basicConfig(
      format='%(levelname)5s %(module)11s(%(lineno)4d): %(message)s',
      level=[logging.WARNING, logging.INFO, logging.DEBUG][
          min(2, options.verbose)])
  if args:
    parser.error('Extra argument(s) "%s" not understood' % ' '.join(args))
  if not options.issue:
    parser.error('Require --issue')
  options.server = options.server.rstrip('/')
  if not options.server:
    parser.error('Require a valid server')

  if options.password == '-':
    print('Reading password')
    options.password = sys.stdin.readline().strip()

  print('Connecting to %s' % options.server)
  # Always try un-authenticated first.
  # TODO(maruel): Use OAuth2 properly so we don't hit rate-limiting on login
  # attempts.
  # Bad except clauses order (HTTPError is an ancestor class of
  # ClientLoginError)
  # pylint: disable=E0701
  obj = rietveld.Rietveld(options.server, '', None)
  properties = None
  try:
    properties = obj.get_issue_properties(options.issue, False)
  except urllib2.HTTPError, e:
    if e.getcode() != 302:
      raise
    elif options.no_auth:
      exit('FAIL: Login detected -- is issue private?')
    # TODO(maruel): A few 'Invalid username or password.' are printed first, we
    # should get rid of those.
  except rietveld.upload.ClientLoginError, e:
    # Fine, we'll do proper authentication.
    pass
  if properties is None:
    if options.email is not None:
      obj = rietveld.Rietveld(options.server, options.email, options.password)
      try:
        properties = obj.get_issue_properties(options.issue, False)
      except rietveld.upload.ClientLoginError, e:
        if sys.stdout.closed:
          print('Accessing the issue requires proper credentials.')
          return 1
    else:
      print('Accessing the issue requires login.')
      obj = rietveld.Rietveld(options.server, None, None)
      try:
        properties = obj.get_issue_properties(options.issue, False)
      except rietveld.upload.ClientLoginError, e:
        print('Accessing the issue requires proper credentials.')
        return 1

  if not options.patchset:
    options.patchset = properties['patchsets'][-1]
    print('No patchset specified. Using patchset %d' % options.patchset)

  print('Downloading the patch.')
  try:
    patchset = obj.get_patch(options.issue, options.patchset)
  except urllib2.HTTPError, e:
    print(
        'Failed to fetch the patch for issue %d, patchset %d.\n'
        'Try visiting %s/%d') % (
            options.issue, options.patchset,
            options.server, options.issue)
    return 1
  for patch in patchset.patches:
    print(patch)
  full_dir = os.path.abspath(options.root_dir)
  scm_type = scm.determine_scm(full_dir)
  if scm_type == 'svn':
    scm_obj = checkout.SvnCheckout(full_dir, None, None, None, None)
  elif scm_type == 'git':
    scm_obj = checkout.GitCheckout(full_dir, None, None, None, None)
  elif scm_type == None:
    scm_obj = checkout.RawCheckout(full_dir, None, None)
  else:
    parser.error('Couldn\'t determine the scm')

  # TODO(maruel): HACK, remove me.
  # When run a build slave, make sure buildbot knows that the checkout was
  # modified.
  if options.root_dir == 'src' and getpass.getuser() == 'chrome-bot':
    # See sourcedirIsPatched() in:
    # http://src.chromium.org/viewvc/chrome/trunk/tools/build/scripts/slave/
    #    chromium_commands.py?view=markup
    open('.buildbot-patched', 'w').close()

  print('\nApplying the patch.')
  try:
    scm_obj.apply_patch(patchset, verbose=True)
  except checkout.PatchApplicationFailed, e:
    print(str(e))
    print('CWD=%s' % os.getcwd())
    print('Checkout path=%s' % scm_obj.project_path)
    return 1

  if 'DEPS' in map(os.path.basename, patchset.filenames):
    gclient_root = gclient_utils.FindGclientRoot(full_dir)
    if gclient_root and scm_type:
      print(
          'A DEPS file was updated inside a gclient checkout, running gclient '
          'sync.')
      base_rev = 'BASE' if scm_type == 'svn' else 'HEAD'
      gclient_path = os.path.join(BASE_DIR, 'gclient')
      if sys.platform == 'win32':
        gclient_path += '.bat'
      return subprocess.call(
          [
            gclient_path, 'sync',
            '--revision', base_rev,
            '--nohooks',
            '--delete_unversioned_trees',
          ],
          cwd=gclient_root)
  return 0


if __name__ == "__main__":
  fix_encoding.fix_encoding()
  sys.exit(main())

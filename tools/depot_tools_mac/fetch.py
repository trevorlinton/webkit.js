#!/usr/bin/env python
# Copyright (c) 2013 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

"""
Tool to perform checkouts in one easy command line!

Usage:
  fetch <recipe> [--property=value [--property2=value2 ...]]

This script is a wrapper around various version control and repository
checkout commands. It requires a |recipe| name, fetches data from that
recipe in depot_tools/recipes, and then performs all necessary inits,
checkouts, pulls, fetches, etc.

Optional arguments may be passed on the command line in key-value pairs.
These parameters will be passed through to the recipe's main method.
"""

import json
import optparse
import os
import subprocess
import sys
import pipes

from distutils import spawn


SCRIPT_PATH = os.path.dirname(os.path.abspath(__file__))

#################################################
# Checkout class definitions.
#################################################
class Checkout(object):
  """Base class for implementing different types of checkouts.

  Attributes:
    |base|: the absolute path of the directory in which this script is run.
    |spec|: the spec for this checkout as returned by the recipe. Different
        subclasses will expect different keys in this dictionary.
    |root|: the directory into which the checkout will be performed, as returned
        by the recipe. This is a relative path from |base|.
  """
  def __init__(self, options, spec, root):
    self.base = os.getcwd()
    self.options = options
    self.spec = spec
    self.root = root

  def exists(self):
    pass

  def init(self):
    pass

  def sync(self):
    pass

  def run(self, cmd, **kwargs):
    print 'Running: %s' % (' '.join(pipes.quote(x) for x in cmd))
    if self.options.dry_run:
      return 0
    return subprocess.check_call(cmd, **kwargs)


class GclientCheckout(Checkout):

  def run_gclient(self, *cmd, **kwargs):
    if not spawn.find_executable('gclient'):
      cmd_prefix = (sys.executable, os.path.join(SCRIPT_PATH, 'gclient.py'))
    else:
      cmd_prefix = ('gclient',)
    return self.run(cmd_prefix + cmd, **kwargs)


class GitCheckout(Checkout):

  def run_git(self, *cmd, **kwargs):
    if sys.platform == 'win32' and not spawn.find_executable('git'):
      git_path = os.path.join(SCRIPT_PATH, 'git.bat')
    else:
      git_path = 'git'
    return self.run((git_path,) + cmd, **kwargs)


class SvnCheckout(Checkout):

  def run_svn(self, *cmd, **kwargs):
    if sys.platform == 'win32' and not spawn.find_executable('svn'):
      svn_path = os.path.join(SCRIPT_PATH, 'svn_bin', 'svn.exe')
    else:
      svn_path = 'svn'
    return self.run((svn_path,) + cmd, **kwargs)


class GclientGitCheckout(GclientCheckout, GitCheckout):

  def __init__(self, options, spec, root):
    super(GclientGitCheckout, self).__init__(options, spec, root)
    assert 'solutions' in self.spec
    keys = ['solutions', 'target_os', 'target_os_only']
    gclient_spec = '\n'.join('%s = %s' % (key, self.spec[key])
                             for key in keys if key in self.spec)
    self.spec['gclient_spec'] = gclient_spec

  def exists(self):
    return os.path.exists(os.path.join(os.getcwd(), self.root))

  def init(self):
    # Configure and do the gclient checkout.
    self.run_gclient('config', '--spec', self.spec['gclient_spec'])
    if self.options.nohooks:
      self.run_gclient('sync', '--nohooks')
    else:
      self.run_gclient('sync')

    # Configure git.
    wd = os.path.join(self.base, self.root)
    if self.options.dry_run:
      print 'cd %s' % wd
    self.run_git(
        'submodule', 'foreach',
        'git config -f $toplevel/.git/config submodule.$name.ignore all',
        cwd=wd)
    self.run_git(
        'config', '--add', 'remote.origin.fetch',
        '+refs/tags/*:refs/tags/*', cwd=wd)
    self.run_git('config', 'diff.ignoreSubmodules', 'all', cwd=wd)


class GclientGitSvnCheckout(GclientGitCheckout, SvnCheckout):

  def __init__(self, options, spec, root):
    super(GclientGitSvnCheckout, self).__init__(options, spec, root)
    assert 'svn_url' in self.spec
    assert 'svn_branch' in self.spec
    assert 'svn_ref' in self.spec

  def init(self):
    # Ensure we are authenticated with subversion for all submodules.
    git_svn_dirs = json.loads(self.spec.get('submodule_git_svn_spec', '{}'))
    git_svn_dirs.update({self.root: self.spec})
    for _, svn_spec in git_svn_dirs.iteritems():
      try:
        self.run_svn('ls', '--non-interactive', svn_spec['svn_url'])
      except subprocess.CalledProcessError:
        print 'Please run `svn ls %s`' % svn_spec['svn_url']
        return 1

    super(GclientGitSvnCheckout, self).init()

    # Configure git-svn.
    for path, svn_spec in git_svn_dirs.iteritems():
      real_path = os.path.join(*path.split('/'))
      if real_path != self.root:
        real_path = os.path.join(self.root, real_path)
      wd = os.path.join(self.base, real_path)
      if self.options.dry_run:
        print 'cd %s' % wd
      self.run_git('svn', 'init', '--prefix=origin/', '-T',
                   svn_spec['svn_branch'], svn_spec['svn_url'], cwd=wd)
      self.run_git('config', '--replace', 'svn-remote.svn.fetch',
                   svn_spec['svn_branch'] + ':refs/remotes/origin/' +
                   svn_spec['svn_ref'], cwd=wd)
      self.run_git('svn', 'fetch', cwd=wd)



CHECKOUT_TYPE_MAP = {
    'gclient':         GclientCheckout,
    'gclient_git':     GclientGitCheckout,
    'gclient_git_svn': GclientGitSvnCheckout,
    'git':             GitCheckout,
}


def CheckoutFactory(type_name, options, spec, root):
  """Factory to build Checkout class instances."""
  class_ = CHECKOUT_TYPE_MAP.get(type_name)
  if not class_:
    raise KeyError('unrecognized checkout type: %s' % type_name)
  return class_(options, spec, root)


#################################################
# Utility function and file entry point.
#################################################
def usage(msg=None):
  """Print help and exit."""
  if msg:
    print 'Error:', msg

  print (
"""
usage: %s [options] <recipe> [--property=value [--property2=value2 ...]]

This script can be used to download the Chromium sources. See
http://www.chromium.org/developers/how-tos/get-the-code
for full usage instructions.

Valid options:
   -h, --help, help   Print this message.
   --nohooks          Don't run hooks after checkout.
   -n, --dry-run      Don't run commands, only print them.
""" % os.path.basename(sys.argv[0]))
  sys.exit(bool(msg))


def handle_args(argv):
  """Gets the recipe name from the command line arguments."""
  if len(argv) <= 1:
    usage('Must specify a recipe.')
  if argv[1] in ('-h', '--help', 'help'):
    usage()

  dry_run = False
  nohooks = False
  while len(argv) >= 2:
    arg = argv[1]
    if not arg.startswith('-'):
      break
    argv.pop(1)
    if arg in ('-n', '--dry-run'):
      dry_run = True
    elif arg == '--nohooks':
      nohooks = True
    else:
      usage('Invalid option %s.' % arg)

  def looks_like_arg(arg):
    return arg.startswith('--') and arg.count('=') == 1

  bad_parms = [x for x in argv[2:] if not looks_like_arg(x)]
  if bad_parms:
    usage('Got bad arguments %s' % bad_parms)

  recipe = argv[1]
  props = argv[2:]
  return optparse.Values({'dry_run':dry_run, 'nohooks':nohooks }), recipe, props


def run_recipe_fetch(recipe, props, aliased=False):
  """Invoke a recipe's fetch method with the passed-through args
  and return its json output as a python object."""
  recipe_path = os.path.abspath(os.path.join(SCRIPT_PATH, 'recipes', recipe))
  if not os.path.exists(recipe_path + '.py'):
    print "Could not find a recipe for %s" % recipe
    sys.exit(1)

  cmd = [sys.executable, recipe_path + '.py', 'fetch'] + props
  result = subprocess.Popen(cmd, stdout=subprocess.PIPE).communicate()[0]

  spec = json.loads(result)
  if 'alias' in spec:
    assert not aliased
    return run_recipe_fetch(
        spec['alias']['recipe'], spec['alias']['props'] + props, aliased=True)
  cmd = [sys.executable, recipe_path + '.py', 'root']
  result = subprocess.Popen(cmd, stdout=subprocess.PIPE).communicate()[0]
  root = json.loads(result)
  return spec, root


def run(options, spec, root):
  """Perform a checkout with the given type and configuration.

    Args:
      options: Options instance.
      spec: Checkout configuration returned by the the recipe's fetch_spec
          method (checkout type, repository url, etc.).
      root: The directory into which the repo expects to be checkout out.
  """
  assert 'type' in spec
  checkout_type = spec['type']
  checkout_spec = spec['%s_spec' % checkout_type]
  try:
    checkout = CheckoutFactory(checkout_type, options, checkout_spec, root)
  except KeyError:
    return 1
  if checkout.exists():
    print 'You appear to already have a checkout. "fetch" is used only'
    print 'to get new checkouts. Use "gclient sync" to update the checkout.'
    print
    print 'Fetch also does not yet deal with partial checkouts, so if fetch'
    print 'failed, delete the checkout and start over (crbug.com/230691).'
    return 1
  return checkout.init()


def main():
  options, recipe, props = handle_args(sys.argv)
  spec, root = run_recipe_fetch(recipe, props)
  return run(options, spec, root)


if __name__ == '__main__':
  sys.exit(main())

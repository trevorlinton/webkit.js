# Copyright (c) 2012 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

"""Breakpad for Python.

Sends a notification when a process stops on an exception.

It is only enabled when all these conditions are met:
  1. hostname finishes with '.google.com' or 'chromium.org'
  2. main module name doesn't contain the word 'test'
  3. no NO_BREAKPAD environment variable is defined
"""

import atexit
import getpass
import os
import socket
import sys
import time
import traceback
import urllib
import urllib2


# Configure these values.
DEFAULT_URL = 'https://chromium-status.appspot.com'

# Global variable to prevent double registration.
_REGISTERED = False

_TIME_STARTED = time.time()

_HOST_NAME = socket.getfqdn()

# Skip unit tests and we don't want anything from non-googler.
IS_ENABLED = (
    not 'test' in getattr(sys.modules['__main__'], '__file__', '') and
    not 'NO_BREAKPAD' in os.environ and
    _HOST_NAME.endswith(('.google.com', '.chromium.org')))


def post(url, params):
  """HTTP POST with timeout when it's supported."""
  if not IS_ENABLED:
    # Make sure to not send anything for non googler.
    return
  kwargs = {}
  if (sys.version_info[0] * 10 + sys.version_info[1]) >= 26:
    kwargs['timeout'] = 4
  try:
    request = urllib2.urlopen(url, urllib.urlencode(params), **kwargs)
    out = request.read()
    request.close()
    return out
  except IOError:
    return 'There was a failure while trying to send the stack trace. Too bad.'


def FormatException(e):
  """Returns a human readable form of an exception.

  Adds the maximum number of interesting information in the safest way."""
  try:
    out = repr(e)
  except Exception:
    out = ''
  try:
    out = str(e)
    if isinstance(e, Exception):
      # urllib exceptions, usually the HTTP headers.
      if hasattr(e, 'headers'):
        out += '\nHeaders: %s' % e.headers
      if hasattr(e, 'url'):
        out += '\nUrl: %s' % e.url
      if hasattr(e, 'msg'):
        out += '\nMsg: %s' % e.msg
      # The web page in some urllib exceptions.
      if hasattr(e, 'read') and callable(e.read):
        out += '\nread(): %s' % e.read()
      if hasattr(e, 'info') and callable(e.info):
        out += '\ninfo(): %s' % e.info()
  except Exception:
    pass
  return out


def SendStack(last_tb, stack, url=None, maxlen=50, verbose=True):
  """Sends the stack trace to the breakpad server."""
  if not IS_ENABLED:
    return
  def p(o):
    if verbose:
      print(o)
  p('Sending crash report ...')
  params = {
    'args': sys.argv,
    'cwd': os.getcwd(),
    'exception': FormatException(last_tb),
    'host': _HOST_NAME,
    'stack': stack[0:4096],
    'user': getpass.getuser(),
    'version': sys.version,
  }
  p('\n'.join('  %s: %s' % (k, params[k][0:maxlen]) for k in sorted(params)))
  p(post(url or DEFAULT_URL + '/breakpad', params))


def SendProfiling(duration, url=None):
  params = {
    'argv': ' '.join(sys.argv),
    # Strip the hostname.
    'domain': _HOST_NAME.split('.', 1)[-1],
    'duration': duration,
    'platform': sys.platform,
  }
  post(url or DEFAULT_URL + '/profiling', params)


def CheckForException():
  """Runs at exit. Look if there was an exception active."""
  last_value = getattr(sys, 'last_value', None)
  if last_value:
    if not isinstance(last_value, KeyboardInterrupt):
      last_tb = getattr(sys, 'last_traceback', None)
      if last_tb:
        SendStack(last_value, ''.join(traceback.format_tb(last_tb)))
  else:
    duration = time.time() - _TIME_STARTED
    if duration > 90:
      SendProfiling(duration)


def Register():
  """Registers the callback at exit. Calling it multiple times is no-op."""
  global _REGISTERED
  if _REGISTERED:
    return
  _REGISTERED = True
  atexit.register(CheckForException)


if IS_ENABLED:
  Register()

# Uncomment this line if you want to test it out.
#Register()

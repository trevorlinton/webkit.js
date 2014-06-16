# Copyright 2013 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

"""AuthHandler plugin for gsutil's boto to support LOAS based auth."""

import getpass
import json
import os
import re
import subprocess
import time
import urllib2

from boto.auth_handler import AuthHandler
from boto.auth_handler import NotReadyToAuthenticate

CMD = ['stubby', '--proto2', 'call', 'blade:sso', 'CorpLogin.Exchange']

STUBBY_CMD = """target: {
  scope: GAIA_USER
  name: "%s"
}
target_credential: {
  type: OAUTH2_TOKEN
  oauth2_attributes: {
    scope: 'https://www.googleapis.com/auth/devstorage.read_write'
  }
}"""

COOKIE_LOCATION = os.path.expanduser('~/.devstore_token')

TOKEN_EXPIRY = 300


class SSOAuthError(Exception):
  pass


class SSOAuth(AuthHandler):
  """SSO based auth handler."""

  capability = ['google-oauth2', 's3']

  def __init__(self, path, config, provider):
    if provider.name == 'google' and self.has_prodaccess():
      # If we don't have a loas token, then bypass this auth handler.
      if subprocess.call(['loas_check', '-loas_check_retry_attempts=0'],
                         stdout=subprocess.PIPE,
                         stderr=subprocess.PIPE):
        raise NotReadyToAuthenticate()
    else:
      raise NotReadyToAuthenticate()
    self.token = None
    self.expire = 0

  def GetAccessToken(self):
    """Returns a valid devstore access token.

    This will return from an in-memory cache if the token is there already,
    then try a filesystem cache, and then runs a stubby call if none of the
    caches have a valid token.
    """
    if self.token and self.expire > time.time():
      return self.token

    # Try to retrieve token from filesystem cache.
    if os.path.exists(COOKIE_LOCATION):
      last_modified = os.path.getmtime(COOKIE_LOCATION)
      if time.time() - last_modified < TOKEN_EXPIRY:
        with open(COOKIE_LOCATION, 'rb') as f:
          self.token = f.read()
        self.expire = last_modified + TOKEN_EXPIRY
        return self.token

    # If the token is not in either caches, or has expired, then fetch token.
    username = '%s@google.com' % getpass.getuser()
    proc = subprocess.Popen(CMD, stdin=subprocess.PIPE, stdout=subprocess.PIPE)
    out, err = proc.communicate(STUBBY_CMD % username)
    if proc.returncode:
      raise SSOAuthError('Stubby returned %d\n%s' % (proc.returncode, err))
    token_match = re.search(r'oauth2_token: "(.*)"$', out)

    if not token_match:
      raise SSOAuthError('Oauth2 token not found in %s' % out)

    token = token_match.group(1)
    self.token = token
    self.expire = time.time() + TOKEN_EXPIRY
    with os.fdopen(os.open(COOKIE_LOCATION,
                           os.O_WRONLY | os.O_CREAT,
                           0600), 'wb') as f:
      f.write(token)
    return token

  def add_auth(self, http_request):
    http_request.headers['Authorization'] = 'OAuth %s' % self.GetAccessToken()

  @staticmethod
  def has_prodaccess():
    for path in os.environ['PATH'].split(os.pathsep):
      exe_file = os.path.join(path, 'prodaccess')
      if os.path.exists(exe_file) and os.access(exe_file, os.X_OK):
        return True
    return False

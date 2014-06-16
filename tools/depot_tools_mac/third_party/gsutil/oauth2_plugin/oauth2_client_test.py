# Copyright 2010 Google Inc. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

"""Unit tests for oauth2_client."""

import datetime
import logging
import os
import sys
import unittest
import urllib2
import urlparse
from stat import S_IMODE
from StringIO import StringIO

test_bin_dir = os.path.dirname(os.path.realpath(sys.argv[0]))

lib_dir = os.path.join(test_bin_dir, '..')
sys.path.insert(0, lib_dir)

# Needed for boto.cacerts
boto_lib_dir = os.path.join(test_bin_dir, '..', 'boto')
sys.path.insert(0, boto_lib_dir)

import oauth2_client

LOG = logging.getLogger('oauth2_client_test')

class MockOpener:
  def __init__(self):
    self.reset()

  def reset(self):
    self.open_error = None
    self.open_result = None
    self.open_capture_url = None
    self.open_capture_data = None

  def open(self, req, data=None):
    self.open_capture_url = req.get_full_url()
    self.open_capture_data = req.get_data()
    if self.open_error is not None:
      raise self.open_error
    else:
      return StringIO(self.open_result)


class MockDateTime:
  def __init__(self):
    self.mock_now = None

  def utcnow(self):
    return self.mock_now


class OAuth2ClientTest(unittest.TestCase):
  def setUp(self):
    self.opener = MockOpener()
    self.mock_datetime = MockDateTime()
    self.start_time = datetime.datetime(2011, 3, 1, 10, 25, 13, 300826)
    self.mock_datetime.mock_now = self.start_time
    self.client = oauth2_client.OAuth2Client(
        oauth2_client.OAuth2Provider(
            'Sample OAuth Provider',
            'https://provider.example.com/oauth/provider?mode=authorize',
            'https://provider.example.com/oauth/provider?mode=token'),
        'clid', 'clsecret',
        url_opener=self.opener, datetime_strategy=self.mock_datetime)

  def testFetchAccessToken(self):
    refresh_token = '1/ZaBrxdPl77Bi4jbsO7x-NmATiaQZnWPB51nTvo8n9Sw'
    access_token = '1/aalskfja-asjwerwj'
    self.opener.open_result = (
        '{"access_token":"%s","expires_in":3600}' % access_token)
    cred = oauth2_client.RefreshToken(self.client, refresh_token)
    token = self.client.FetchAccessToken(cred)

    self.assertEquals(
        self.opener.open_capture_url,
        'https://provider.example.com/oauth/provider?mode=token')
    self.assertEquals({
        'grant_type': ['refresh_token'],
        'client_id': ['clid'],
        'client_secret': ['clsecret'],
        'refresh_token': [refresh_token]},
        urlparse.parse_qs(self.opener.open_capture_data, keep_blank_values=True,
                      strict_parsing=True))
    self.assertEquals(access_token, token.token)
    self.assertEquals(
        datetime.datetime(2011, 3, 1, 11, 25, 13, 300826),
        token.expiry)

  def testFetchAccessTokenFailsForBadJsonResponse(self):
    self.opener.open_result = 'blah'
    cred = oauth2_client.RefreshToken(self.client, 'abc123')
    self.assertRaises(
        oauth2_client.AccessTokenRefreshError, self.client.FetchAccessToken, cred)

  def testFetchAccessTokenFailsForErrorResponse(self):
    self.opener.open_error = urllib2.HTTPError(
        None, 400, 'Bad Request', None, StringIO('{"error": "invalid token"}'))
    cred = oauth2_client.RefreshToken(self.client, 'abc123')
    self.assertRaises(
        oauth2_client.AccessTokenRefreshError, self.client.FetchAccessToken, cred)

  def testFetchAccessTokenFailsForHttpError(self):
    self.opener.open_result = urllib2.HTTPError(
        'foo', 400, 'Bad Request', None, None)
    cred = oauth2_client.RefreshToken(self.client, 'abc123')
    self.assertRaises(
        oauth2_client.AccessTokenRefreshError, self.client.FetchAccessToken, cred)

  def testGetAccessToken(self):
    refresh_token = 'ref_token'
    access_token_1 = 'abc123'
    self.opener.open_result = (
        '{"access_token":"%s",' '"expires_in":3600}' % access_token_1)
    cred = oauth2_client.RefreshToken(self.client, refresh_token)

    token_1 = self.client.GetAccessToken(cred)

    # There's no access token in the cache; verify that we fetched a fresh
    # token.
    self.assertEquals({
        'grant_type': ['refresh_token'],
        'client_id': ['clid'],
        'client_secret': ['clsecret'],
        'refresh_token': [refresh_token]},
        urlparse.parse_qs(self.opener.open_capture_data, keep_blank_values=True,
                      strict_parsing=True))
    self.assertEquals(access_token_1, token_1.token)
    self.assertEquals(self.start_time + datetime.timedelta(minutes=60),
                      token_1.expiry)

    # Advance time by less than expiry time, and fetch another token.
    self.opener.reset()
    self.mock_datetime.mock_now = (
        self.start_time + datetime.timedelta(minutes=55))
    token_2 = self.client.GetAccessToken(cred)

    # Since the access token wasn't expired, we get the cache token, and there
    # was no refresh request.
    self.assertEquals(token_1, token_2)
    self.assertEquals(access_token_1, token_2.token)
    self.assertEquals(None, self.opener.open_capture_url)
    self.assertEquals(None, self.opener.open_capture_data)

    # Advance time past expiry time, and fetch another token.
    self.opener.reset()
    self.mock_datetime.mock_now = (
        self.start_time + datetime.timedelta(minutes=55, seconds=1))
    access_token_2 = 'zyx456'
    self.opener.open_result = (
        '{"access_token":"%s",' '"expires_in":3600}' % access_token_2)
    token_3 = self.client.GetAccessToken(cred)
    
    # This should have resulted in a refresh request and a fresh access token.
    self.assertEquals({
        'grant_type': ['refresh_token'],
        'client_id': ['clid'],
        'client_secret': ['clsecret'],
        'refresh_token': [refresh_token]},
        urlparse.parse_qs(self.opener.open_capture_data, keep_blank_values=True,
                      strict_parsing=True))
    self.assertEquals(access_token_2, token_3.token)
    self.assertEquals(self.mock_datetime.mock_now + datetime.timedelta(minutes=60),
                      token_3.expiry)

  def testGetAuthorizationUri(self):
    authn_uri = self.client.GetAuthorizationUri(
        'https://www.example.com/oauth/redir?mode=approve%20me',
        ('scope_foo', 'scope_bar'),
        {'state': 'this and that & sundry'})

    uri_parts = urlparse.urlsplit(authn_uri)
    self.assertEquals(('https', 'provider.example.com', '/oauth/provider'),
                      uri_parts[:3])

    self.assertEquals({
        'response_type': ['code'],
        'client_id': ['clid'],
        'redirect_uri':
            ['https://www.example.com/oauth/redir?mode=approve%20me'],
        'scope': ['scope_foo scope_bar'],
        'state': ['this and that & sundry'],
        'mode': ['authorize']},
        urlparse.parse_qs(uri_parts[3]))

  def testExchangeAuthorizationCode(self):
    code = 'codeABQ1234'
    exp_refresh_token = 'ref_token42'
    exp_access_token = 'access_tokenXY123'
    self.opener.open_result = (
        '{"access_token":"%s","expires_in":3600,"refresh_token":"%s"}'
        % (exp_access_token, exp_refresh_token))

    refresh_token, access_token = self.client.ExchangeAuthorizationCode(
        code, 'urn:ietf:wg:oauth:2.0:oob', ('scope1', 'scope2'))

    self.assertEquals({
        'grant_type': ['authorization_code'],
        'client_id': ['clid'],
        'client_secret': ['clsecret'],
        'code': [code],
        'redirect_uri': ['urn:ietf:wg:oauth:2.0:oob'],
        'scope': ['scope1 scope2'] },
        urlparse.parse_qs(self.opener.open_capture_data, keep_blank_values=True,
                      strict_parsing=True))
    self.assertEquals(exp_access_token, access_token.token)
    self.assertEquals(self.start_time + datetime.timedelta(minutes=60),
                      access_token.expiry)

    self.assertEquals(self.client, refresh_token.oauth2_client)
    self.assertEquals(exp_refresh_token, refresh_token.refresh_token)

    # Check that the access token was put in the cache.
    cached_token = self.client.access_token_cache.GetToken(
        refresh_token.CacheKey())
    self.assertEquals(access_token, cached_token)


class AccessTokenTest(unittest.TestCase):

  def testShouldRefresh(self):
    mock_datetime = MockDateTime()
    start = datetime.datetime(2011, 3, 1, 11, 25, 13, 300826)
    expiry = start + datetime.timedelta(minutes=60)
    token = oauth2_client.AccessToken(
        'foo', expiry, datetime_strategy=mock_datetime)

    mock_datetime.mock_now = start
    self.assertFalse(token.ShouldRefresh())

    mock_datetime.mock_now = start + datetime.timedelta(minutes=54)
    self.assertFalse(token.ShouldRefresh())

    mock_datetime.mock_now = start + datetime.timedelta(minutes=55)
    self.assertFalse(token.ShouldRefresh())

    mock_datetime.mock_now = start + datetime.timedelta(
        minutes=55, seconds=1)
    self.assertTrue(token.ShouldRefresh())

    mock_datetime.mock_now = start + datetime.timedelta(
        minutes=61)
    self.assertTrue(token.ShouldRefresh())

    mock_datetime.mock_now = start + datetime.timedelta(minutes=58)
    self.assertFalse(token.ShouldRefresh(time_delta=120))

    mock_datetime.mock_now = start + datetime.timedelta(
        minutes=58, seconds=1)
    self.assertTrue(token.ShouldRefresh(time_delta=120))

  def testShouldRefreshNoExpiry(self):
    mock_datetime = MockDateTime()
    start = datetime.datetime(2011, 3, 1, 11, 25, 13, 300826)
    token = oauth2_client.AccessToken(
        'foo', None, datetime_strategy=mock_datetime)

    mock_datetime.mock_now = start
    self.assertFalse(token.ShouldRefresh())

    mock_datetime.mock_now = start + datetime.timedelta(
        minutes=472)
    self.assertFalse(token.ShouldRefresh())

  def testSerialization(self):
    expiry = datetime.datetime(2011, 3, 1, 11, 25, 13, 300826)
    token = oauth2_client.AccessToken('foo', expiry)
    serialized_token = token.Serialize()
    LOG.debug('testSerialization: serialized_token=%s' % serialized_token)

    token2 = oauth2_client.AccessToken.UnSerialize(serialized_token)
    self.assertEquals(token, token2)


class RefreshTokenTest(unittest.TestCase):
  def setUp(self):
    self.opener = MockOpener()
    self.mock_datetime = MockDateTime()
    self.start_time = datetime.datetime(2011, 3, 1, 10, 25, 13, 300826)
    self.mock_datetime.mock_now = self.start_time
    self.client = oauth2_client.OAuth2Client(
        oauth2_client.OAuth2Provider(
            'Sample OAuth Provider',
            'https://provider.example.com/oauth/provider?mode=authorize',
            'https://provider.example.com/oauth/provider?mode=token'),
        'clid', 'clsecret',
        url_opener=self.opener, datetime_strategy=self.mock_datetime)

    self.cred = oauth2_client.RefreshToken(self.client, 'ref_token_abc123')

  def testUniqeId(self):
    cred_id = self.cred.CacheKey()
    self.assertEquals('0720afed6871f12761fbea3271f451e6ba184bf5', cred_id)

  def testGetAuthorizationHeader(self):
    access_token = 'access_123'
    self.opener.open_result = (
        '{"access_token":"%s","expires_in":3600}' % access_token)

    self.assertEquals('Bearer %s' % access_token,
                      self.cred.GetAuthorizationHeader())


class FileSystemTokenCacheTest(unittest.TestCase):

  def setUp(self):
    self.cache = oauth2_client.FileSystemTokenCache()
    self.start_time = datetime.datetime(2011, 3, 1, 10, 25, 13, 300826)
    self.token_1 = oauth2_client.AccessToken('token1', self.start_time)
    self.token_2 = oauth2_client.AccessToken(
        'token2', self.start_time + datetime.timedelta(seconds=492))
    self.key = 'token1key'

  def tearDown(self):
    try:
      os.unlink(self.cache.CacheFileName(self.key))
    except:
      pass

  def testPut(self):
    self.cache.PutToken(self.key, self.token_1)
    # Assert that the cache file exists and has correct permissions.
    self.assertEquals(
        0600, S_IMODE(os.stat(self.cache.CacheFileName(self.key)).st_mode))

  def testPutGet(self):
    # No cache file present.
    self.assertEquals(None, self.cache.GetToken(self.key))

    # Put a token
    self.cache.PutToken(self.key, self.token_1)
    cached_token = self.cache.GetToken(self.key)
    self.assertEquals(self.token_1, cached_token)

    # Put a different token
    self.cache.PutToken(self.key, self.token_2)
    cached_token = self.cache.GetToken(self.key)
    self.assertEquals(self.token_2, cached_token)

  def testGetBadFile(self):
    f = open(self.cache.CacheFileName(self.key), 'w')
    f.write('blah')
    f.close()
    self.assertEquals(None, self.cache.GetToken(self.key))

  def testCacheFileName(self):
    cache = oauth2_client.FileSystemTokenCache(
        path_pattern='/var/run/ccache/token.%(uid)s.%(key)s')
    self.assertEquals('/var/run/ccache/token.%d.abc123' % os.getuid(),
                      cache.CacheFileName('abc123'))

    cache = oauth2_client.FileSystemTokenCache(
        path_pattern='/var/run/ccache/token.%(key)s')
    self.assertEquals('/var/run/ccache/token.abc123',
                      cache.CacheFileName('abc123'))


if __name__ == '__main__':
  logging.basicConfig(level=logging.DEBUG)
  unittest.main()

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

"""An OAuth2 client library.

This library provides a client implementation of the OAuth2 protocol (see
http://code.google.com/apis/accounts/docs/OAuth2.html).

**** Experimental API ****

This module is experimental and is subject to modification or removal without
notice.
"""

# This implementation is inspired by the implementation in
# http://code.google.com/p/google-api-python-client/source/browse/oauth2client/,
# with the following main differences:
# - This library uses the fancy_urllib monkey patch for urllib to correctly
#   implement SSL certificate validation.
# - This library does not assume that client code is using the httplib2 library
#   to make HTTP requests.
# - This library implements caching of access tokens independent of refresh
#   tokens (in the python API client oauth2client, there is a single class that
#   encapsulates both refresh and access tokens).


import cgi
import datetime
import errno
from hashlib import sha1
import logging
import os
import tempfile
import threading
import urllib
import urllib2
import urlparse

from boto import cacerts
from third_party import fancy_urllib

try:
  import json
except ImportError:
  try:
    # Try to import from django, should work on App Engine
    from django.utils import simplejson as json
  except ImportError:
    # Try for simplejson
    import simplejson as json

LOG = logging.getLogger('oauth2_client')
# Lock used for checking/exchanging refresh token, so multithreaded
# operation doesn't attempt concurrent refreshes.
token_exchange_lock = threading.Lock()

class Error(Exception):
  """Base exception for the OAuth2 module."""
  pass


class AccessTokenRefreshError(Error):
  """Error trying to exchange a refresh token into an access token."""
  pass


class AuthorizationCodeExchangeError(Error):
  """Error trying to exchange an authorization code into a refresh token."""
  pass


class TokenCache(object):
  """Interface for OAuth2 token caches."""

  def PutToken(self, key, value):
    raise NotImplementedError

  def GetToken(self, key):
    raise NotImplementedError


class NoopTokenCache(TokenCache):
  """A stub implementation of TokenCache that does nothing."""

  def PutToken(self, key, value):
    pass

  def GetToken(self, key):
    return None


class InMemoryTokenCache(TokenCache):
  """An in-memory token cache.

  The cache is implemented by a python dict, and inherits the thread-safety
  properties of dict.
  """

  def __init__(self):
    super(InMemoryTokenCache, self).__init__()
    self.cache = dict()

  def PutToken(self, key, value):
    LOG.info('InMemoryTokenCache.PutToken: key=%s', key)
    self.cache[key] = value

  def GetToken(self, key):
    value = self.cache.get(key, None)
    LOG.info('InMemoryTokenCache.GetToken: key=%s%s present',
             key, ' not' if value is None else '')
    return value


class FileSystemTokenCache(TokenCache):
  """An implementation of a token cache that persists tokens on disk.

  Each token object in the cache is stored in serialized form in a separate
  file. The cache file's name can be configured via a path pattern that is
  parameterized by the key under which a value is cached and optionally the
  current processes uid as obtained by os.getuid().

  Since file names are generally publicly visible in the system, it is important
  that the cache key does not leak information about the token's value.  If
  client code computes cache keys from token values, a cryptographically strong
  one-way function must be used.
  """

  def __init__(self, path_pattern=None):
    """Creates a FileSystemTokenCache.

    Args:
      path_pattern: Optional string argument to specify the path pattern for
          cache files.  The argument should be a path with format placeholders
          '%(key)s' and optionally '%(uid)s'.  If the argument is omitted, the
          default pattern
            <tmpdir>/oauth2client-tokencache.%(uid)s.%(key)s
          is used, where <tmpdir> is replaced with the system temp dir as
          obtained from tempfile.gettempdir().
    """
    super(FileSystemTokenCache, self).__init__()
    self.path_pattern = path_pattern
    if not path_pattern:
      self.path_pattern = os.path.join(
          tempfile.gettempdir(), 'oauth2_client-tokencache.%(uid)s.%(key)s')

  def CacheFileName(self, key):
    uid = '_'
    try:
      # os.getuid() doesn't seem to work in Windows
      uid = str(os.getuid())
    except:
      pass
    return self.path_pattern % {'key': key, 'uid': uid}

  def PutToken(self, key, value):
    """Serializes the value to the key's filename.

    To ensure that written tokens aren't leaked to a different users, we
     a) unlink an existing cache file, if any (to ensure we don't fall victim
        to symlink attacks and the like),
     b) create a new file with O_CREAT | O_EXCL (to ensure nobody is trying to
        race us)
     If either of these steps fail, we simply give up (but log a warning). Not
     caching access tokens is not catastrophic, and failure to create a file
     can happen for either of the following reasons:
      - someone is attacking us as above, in which case we want to default to
        safe operation (not write the token);
      - another legitimate process is racing us; in this case one of the two
        will win and write the access token, which is fine;
      - we don't have permission to remove the old file or write to the
        specified directory, in which case we can't recover

    Args:
      key: the refresh_token hash key to store.
      value: the access_token value to serialize.
    """

    cache_file = self.CacheFileName(key)
    LOG.info('FileSystemTokenCache.PutToken: key=%s, cache_file=%s',
             key, cache_file)
    try:
      os.unlink(cache_file)
    except:
      # Ignore failure to unlink the file; if the file exists and can't be
      # unlinked, the subsequent open with O_CREAT | O_EXCL will fail.
      pass

    flags = os.O_RDWR | os.O_CREAT | os.O_EXCL

    # Accommodate Windows; stolen from python2.6/tempfile.py.
    if hasattr(os, 'O_NOINHERIT'):
      flags |= os.O_NOINHERIT
    if hasattr(os, 'O_BINARY'):
      flags |= os.O_BINARY

    try:
      fd = os.open(cache_file, flags, 0600)
    except (OSError, IOError), e:
      LOG.warning('FileSystemTokenCache.PutToken: '
                  'Failed to create cache file %s: %s', cache_file, e)
      return
    f = os.fdopen(fd, 'w+b')
    f.write(value.Serialize())
    f.close()

  def GetToken(self, key):
    """Returns a deserialized access token from the key's filename."""
    value = None
    cache_file = self.CacheFileName(key)
    try:
      f = open(cache_file)
      value = AccessToken.UnSerialize(f.read())
      f.close()
    except (IOError, OSError), e:
      if e.errno != errno.ENOENT:
        LOG.warning('FileSystemTokenCache.GetToken: '
                    'Failed to read cache file %s: %s', cache_file, e)
    except Exception, e:
      LOG.warning('FileSystemTokenCache.GetToken: '
                  'Failed to read cache file %s (possibly corrupted): %s',
                  cache_file, e)

    LOG.info('FileSystemTokenCache.GetToken: key=%s%s present (cache_file=%s)',
             key, ' not' if value is None else '', cache_file)
    return value


class OAuth2Provider(object):
  """Encapsulates information about an OAuth2 provider."""

  def __init__(self, label, authorization_uri, token_uri):
    """Creates an OAuth2Provider.

    Args:
      label: A string identifying this oauth2 provider, e.g. "Google".
      authorization_uri: The provider's authorization URI.
      token_uri: The provider's token endpoint URI.
    """
    self.label = label
    self.authorization_uri = authorization_uri
    self.token_uri = token_uri


class OAuth2Client(object):
  """An OAuth2 client."""

  def __init__(self, provider, client_id, client_secret,
               url_opener=None,
               proxy=None,
               access_token_cache=None,
               datetime_strategy=datetime.datetime):
    """Creates an OAuth2Client.

    Args:
      provider: The OAuth2Provider provider this client will authenticate
          against.
      client_id: The OAuth2 client ID of this client.
      client_secret: The OAuth2 client secret of this client.
      url_opener: An optinal urllib2.OpenerDirector to use for making HTTP
          requests to the OAuth2 provider's token endpoint.  The provided
          url_opener *must* be configured to validate server SSL certificates
          for requests to https connections, and to correctly handle proxying of
          https requests.  If this argument is omitted or None, a suitable
          opener based on fancy_urllib is used.
      proxy: An optional string specifying a HTTP proxy to be used, in the form
          '<proxy>:<port>'.  This option is only effective if the url_opener has
          been configured with a fancy_urllib.FancyProxyHandler (this is the
          case for the default url_opener).
      access_token_cache: An optional instance of a TokenCache. If omitted or
          None, an InMemoryTokenCache is used.
      datetime_strategy: datetime module strategy to use.
    """
    self.provider = provider
    self.client_id = client_id
    self.client_secret = client_secret
    # datetime_strategy is used to invoke utcnow() on; it is injected into the
    # constructor for unit testing purposes.
    self.datetime_strategy = datetime_strategy
    self._proxy = proxy

    self.access_token_cache = access_token_cache or InMemoryTokenCache()

    self.ca_certs_file = os.path.join(
        os.path.dirname(os.path.abspath(cacerts.__file__)), 'cacerts.txt')

    if url_opener is None:
      # TODO(Google): set user agent?
      url_opener = urllib2.build_opener(
          fancy_urllib.FancyProxyHandler(),
          fancy_urllib.FancyRedirectHandler(),
          fancy_urllib.FancyHTTPSHandler())
    self.url_opener = url_opener

  def _TokenRequest(self, request):
    """Make a requst to this client's provider's token endpoint.

    Args:
      request: A dict with the request parameteres.
    Returns:
      A tuple (response, error) where,
      - response is the parsed JSON response received from the token endpoint,
            or None if no parseable response was received, and
      - error is None if the request succeeded or
            an Exception if an error occurred.
    """

    body = urllib.urlencode(request)
    LOG.debug('_TokenRequest request: %s', body)
    response = None
    try:
      request = fancy_urllib.FancyRequest(
          self.provider.token_uri, data=body)
      if self._proxy:
        request.set_proxy(self._proxy, 'http')

      request.set_ssl_info(ca_certs=self.ca_certs_file)
      result = self.url_opener.open(request)
      resp_body = result.read()
      LOG.debug('_TokenRequest response: %s', resp_body)
    except urllib2.HTTPError, e:
      try:
        response = json.loads(e.read())
      except:
        pass
      return (response, e)

    try:
      response = json.loads(resp_body)
    except ValueError, e:
      return (None, e)

    return (response, None)

  def GetAccessToken(self, refresh_token):
    """Given a RefreshToken, obtains a corresponding access token.

    First, this client's access token cache is checked for an existing,
    not-yet-expired access token for the provided refresh token.  If none is
    found, the client obtains a fresh access token for the provided refresh
    token from the OAuth2 provider's token endpoint.

    Args:
      refresh_token: The RefreshToken object which to get an access token for.
    Returns:
      The cached or freshly obtained AccessToken.
    Raises:
      AccessTokenRefreshError if an error occurs.
    """
    # Ensure only one thread at a time attempts to get (and possibly refresh)
    # the access token. This doesn't prevent concurrent refresh attempts across
    # multiple gsutil instances, but at least protects against multiple threads
    # simultaneously attempting to refresh when gsutil -m is used.
    token_exchange_lock.acquire()
    try:
      cache_key = refresh_token.CacheKey()
      LOG.info('GetAccessToken: checking cache for key %s', cache_key)
      access_token = self.access_token_cache.GetToken(cache_key)
      LOG.debug('GetAccessToken: token from cache: %s', access_token)
      if access_token is None or access_token.ShouldRefresh():
        LOG.info('GetAccessToken: fetching fresh access token...')
        access_token = self.FetchAccessToken(refresh_token)
        LOG.debug('GetAccessToken: fresh access token: %s', access_token)
        self.access_token_cache.PutToken(cache_key, access_token)
      return access_token
    finally:
      token_exchange_lock.release()

  def FetchAccessToken(self, refresh_token):
    """Fetches an access token from the provider's token endpoint.

    Given a RefreshToken, fetches an access token from this client's OAuth2
    provider's token endpoint.

    Args:
      refresh_token: The RefreshToken object which to get an access token for.
    Returns:
      The fetched AccessToken.
    Raises:
      AccessTokenRefreshError: if an error occurs.
    """
    request = {
        'grant_type': 'refresh_token',
        'client_id': self.client_id,
        'client_secret': self.client_secret,
        'refresh_token': refresh_token.refresh_token,
        }
    LOG.debug('FetchAccessToken request: %s', request)

    response, error = self._TokenRequest(request)
    LOG.debug(
        'FetchAccessToken response (error = %s): %s', error, response)

    if error:
      oauth2_error = ''
      if response and response['error']:
        oauth2_error = '; OAuth2 error: %s' % response['error']
      raise AccessTokenRefreshError(
          'Failed to exchange refresh token into access token; '
          'request failed: %s%s' % (error, oauth2_error))

    if 'access_token' not in response:
      raise AccessTokenRefreshError(
          'Failed to exchange refresh token into access token; response: %s' %
          response)

    token_expiry = None
    if 'expires_in' in response:
      token_expiry = (
          self.datetime_strategy.utcnow() +
          datetime.timedelta(seconds=int(response['expires_in'])))

    return AccessToken(response['access_token'], token_expiry,
                       datetime_strategy=self.datetime_strategy)

  def GetAuthorizationUri(self, redirect_uri, scopes, extra_params=None):
    """Gets the OAuth2 authorization URI and the specified scope(s).

    Applications should navigate/redirect the user's user agent to this URI. The
    user will be shown an approval UI requesting the user to approve access of
    this client to the requested scopes under the identity of the authenticated
    end user.

    The application should expect the user agent to be redirected to the
    specified redirect_uri after the user's approval/disapproval.

    Installed applications may use the special redirect_uri
    'urn:ietf:wg:oauth:2.0:oob' to indicate that instead of redirecting the
    browser, the user be shown a confirmation page with a verification code.
    The application should query the user for this code.

    Args:
      redirect_uri: Either the string 'urn:ietf:wg:oauth:2.0:oob' for a
          non-web-based application, or a URI that handles the callback from the
          authorization server.
      scopes: A list of strings specifying the OAuth scopes the application
          requests access to.
      extra_params: Optional dictionary of additional parameters to be passed to
          the OAuth2 authorization URI.
    Returns:
      The authorization URI for the specified scopes as a string.
    """

    request = {
        'response_type': 'code',
        'client_id': self.client_id,
        'redirect_uri': redirect_uri,
        'scope': ' '.join(scopes),
        }

    if extra_params:
      request.update(extra_params)
    url_parts = list(urlparse.urlparse(self.provider.authorization_uri))
    # 4 is the index of the query part
    request.update(dict(cgi.parse_qsl(url_parts[4])))
    url_parts[4] = urllib.urlencode(request)
    return urlparse.urlunparse(url_parts)

  def ExchangeAuthorizationCode(self, code, redirect_uri, scopes):
    """Exchanges an authorization code for a refresh token.

    Invokes this client's OAuth2 provider's token endpoint to exchange an
    authorization code into a refresh token.

    Args:
      code: the authrorization code.
      redirect_uri: Either the string 'urn:ietf:wg:oauth:2.0:oob' for a
          non-web-based application, or a URI that handles the callback from the
          authorization server.
      scopes: A list of strings specifying the OAuth scopes the application
          requests access to.
    Returns:
      A tuple consting of the resulting RefreshToken and AccessToken.
    Raises:
      AuthorizationCodeExchangeError: if an error occurs.
    """
    request = {
        'grant_type': 'authorization_code',
        'client_id': self.client_id,
        'client_secret': self.client_secret,
        'code': code,
        'redirect_uri': redirect_uri,
        'scope': ' '.join(scopes),
        }
    LOG.debug('ExchangeAuthorizationCode request: %s', request)

    response, error = self._TokenRequest(request)
    LOG.debug(
        'ExchangeAuthorizationCode response (error = %s): %s',
        error, response)

    if error:
      oauth2_error = ''
      if response and response['error']:
        oauth2_error = '; OAuth2 error: %s' % response['error']
      raise AuthorizationCodeExchangeError(
          'Failed to exchange refresh token into access token; '
          'request failed: %s%s' % (str(error), oauth2_error))

    if not 'access_token' in response:
      raise AuthorizationCodeExchangeError(
          'Failed to exchange authorization code into access token; '
          'response: %s' % response)

    token_expiry = None
    if 'expires_in' in response:
      token_expiry = (
          self.datetime_strategy.utcnow() +
          datetime.timedelta(seconds=int(response['expires_in'])))

    access_token = AccessToken(response['access_token'], token_expiry,
                               datetime_strategy=self.datetime_strategy)

    refresh_token = None
    refresh_token_string = response.get('refresh_token', None)

    token_exchange_lock.acquire()
    try:
      if refresh_token_string:
        refresh_token = RefreshToken(self, refresh_token_string)
        self.access_token_cache.PutToken(refresh_token.CacheKey(), access_token)
    finally:
      token_exchange_lock.release()

    return (refresh_token, access_token)


class AccessToken(object):
  """Encapsulates an OAuth2 access token."""

  def __init__(self, token, expiry, datetime_strategy=datetime.datetime):
    self.token = token
    self.expiry = expiry
    self.datetime_strategy = datetime_strategy

  @staticmethod
  def UnSerialize(query):
    """Creates an AccessToken object from its serialized form."""

    def GetValue(d, key):
      return (d.get(key, [None]))[0]
    kv = cgi.parse_qs(query)
    if not kv['token']:
      return None
    expiry = None
    expiry_tuple = GetValue(kv, 'expiry')
    if expiry_tuple:
      try:
        expiry = datetime.datetime(
            *[int(n) for n in expiry_tuple.split(',')])
      except:
        return None
    return AccessToken(GetValue(kv, 'token'), expiry)

  def Serialize(self):
    """Serializes this object as URI-encoded key-value pairs."""
    # There's got to be a better way to serialize a datetime. Unfortunately,
    # there is no reliable way to convert into a unix epoch.
    kv = {'token': self.token}
    if self.expiry:
      t = self.expiry
      tupl = (t.year, t.month, t.day, t.hour, t.minute, t.second, t.microsecond)
      kv['expiry'] = ','.join([str(i) for i in tupl])
    return urllib.urlencode(kv)

  def ShouldRefresh(self, time_delta=300):
    """Whether the access token needs to be refreshed.

    Args:
      time_delta: refresh access token when it expires within time_delta secs.

    Returns:
      True if the token is expired or about to expire, False if the
      token should be expected to work.  Note that the token may still
      be rejected, e.g. if it has been revoked server-side.
    """
    if self.expiry is None:
      return False
    return (self.datetime_strategy.utcnow()
            + datetime.timedelta(seconds=time_delta) > self.expiry)

  def __eq__(self, other):
    return self.token == other.token and self.expiry == other.expiry

  def __ne__(self, other):
    return not self.__eq__(other)

  def __str__(self):
    return 'AccessToken(token=%s, expiry=%sZ)' % (self.token, self.expiry)


class RefreshToken(object):
  """Encapsulates an OAuth2 refresh token."""

  def __init__(self, oauth2_client, refresh_token):
    self.oauth2_client = oauth2_client
    self.refresh_token = refresh_token

  def CacheKey(self):
    """Computes a cache key for this refresh token.

    The cache key is computed as the SHA1 hash of the token, and as such
    satisfies the FileSystemTokenCache requirement that cache keys do not leak
    information about token values.

    Returns:
      A hash key for this refresh token.
    """
    h = sha1()
    h.update(self.refresh_token)
    return h.hexdigest()

  def GetAuthorizationHeader(self):
    """Gets the access token HTTP authorication header value.

    Returns:
      The value of an Authorization HTTP header that authenticates
      requests with an OAuth2 access token based on this refresh token.
    """
    return 'Bearer %s' % self.oauth2_client.GetAccessToken(self).token

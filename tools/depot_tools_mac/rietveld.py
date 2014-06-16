# coding: utf-8
# Copyright (c) 2012 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.
"""Defines class Rietveld to easily access a rietveld instance.

Security implications:

The following hypothesis are made:
- Rietveld enforces:
  - Nobody else than issue owner can upload a patch set
  - Verifies the issue owner credentials when creating new issues
  - A issue owner can't change once the issue is created
  - A patch set cannot be modified
"""

import copy
import json
import logging
import re
import ssl
import time
import urllib
import urllib2
import urlparse

import patch

from third_party import upload
import third_party.oauth2client.client as oa2client
from third_party import httplib2

upload.LOGGER.setLevel(logging.WARNING)  # pylint: disable=E1103


class Rietveld(object):
  """Accesses rietveld."""
  def __init__(self, url, email, password, extra_headers=None):
    self.url = url.rstrip('/')
    # Email and password are accessed by commit queue, keep them.
    self.email = email
    self.password = password
    # TODO(maruel): It's not awesome but maybe necessary to retrieve the value.
    # It happens when the presubmit check is ran out of process, the cookie
    # needed to be recreated from the credentials. Instead, it should pass the
    # email and the cookie.
    if email and password:
      get_creds = lambda: (email, password)
      self.rpc_server = upload.HttpRpcServer(
            self.url,
            get_creds,
            extra_headers=extra_headers or {})
    else:
      if email == '':
        # If email is given as an empty string, then assume we want to make
        # requests that do not need authentication.  Bypass authentication by
        # setting the auth_function to None.
        self.rpc_server = upload.HttpRpcServer(url, None)
      else:
        self.rpc_server = upload.GetRpcServer(url, email)

    self._xsrf_token = None
    self._xsrf_token_time = None

  def xsrf_token(self):
    if (not self._xsrf_token_time or
        (time.time() - self._xsrf_token_time) > 30*60):
      self._xsrf_token_time = time.time()
      self._xsrf_token = self.get(
          '/xsrf_token',
          extra_headers={'X-Requesting-XSRF-Token': '1'})
    return self._xsrf_token

  def get_pending_issues(self):
    """Returns an array of dict of all the pending issues on the server."""
    # TODO: Convert this to use Rietveld::search(), defined below.
    return json.loads(
        self.get('/search?format=json&commit=2&closed=3&'
                 'keys_only=True&limit=1000&order=__key__'))['results']

  def close_issue(self, issue):
    """Closes the Rietveld issue for this changelist."""
    logging.info('closing issue %d' % issue)
    self.post("/%d/close" % issue, [('xsrf_token', self.xsrf_token())])

  def get_description(self, issue):
    """Returns the issue's description.

    Converts any CRLF into LF and strip extraneous whitespace.
    """
    return '\n'.join(self.get('/%d/description' % issue).strip().splitlines())

  def get_issue_properties(self, issue, messages):
    """Returns all the issue's metadata as a dictionary."""
    url = '/api/%d' % issue
    if messages:
      url += '?messages=true'
    data = json.loads(self.get(url))
    data['description'] = '\n'.join(data['description'].strip().splitlines())
    return data

  def get_patchset_properties(self, issue, patchset):
    """Returns the patchset properties."""
    url = '/api/%d/%d' % (issue, patchset)
    return json.loads(self.get(url))

  def get_file_content(self, issue, patchset, item):
    """Returns the content of a new file.

    Throws HTTP 302 exception if the file doesn't exist or is not a binary file.
    """
    # content = 0 is the old file, 1 is the new file.
    content = 1
    url = '/%d/binary/%d/%d/%d' % (issue, patchset, item, content)
    return self.get(url)

  def get_file_diff(self, issue, patchset, item):
    """Returns the diff of the file.

    Returns a useless diff for binary files.
    """
    url = '/download/issue%d_%d_%d.diff' % (issue, patchset, item)
    return self.get(url)

  def get_patch(self, issue, patchset):
    """Returns a PatchSet object containing the details to apply this patch."""
    props = self.get_patchset_properties(issue, patchset) or {}
    out = []
    for filename, state in props.get('files', {}).iteritems():
      logging.debug('%s' % filename)
      # If not status, just assume it's a 'M'. Rietveld often gets it wrong and
      # just has status: null. Oh well.
      status = state.get('status') or 'M'
      if status[0] not in ('A', 'D', 'M', 'R'):
        raise patch.UnsupportedPatchFormat(
            filename, 'Change with status \'%s\' is not supported.' % status)

      svn_props = self.parse_svn_properties(
          state.get('property_changes', ''), filename)

      if state.get('is_binary'):
        if status[0] == 'D':
          if status[0] != status.strip():
            raise patch.UnsupportedPatchFormat(
                filename, 'Deleted file shouldn\'t have property change.')
          out.append(patch.FilePatchDelete(filename, state['is_binary']))
        else:
          content = self.get_file_content(issue, patchset, state['id'])
          if not content:
            # As a precaution due to a bug in upload.py for git checkout, refuse
            # empty files. If it's empty, it's not a binary file.
            raise patch.UnsupportedPatchFormat(
                filename,
                'Binary file is empty. Maybe the file wasn\'t uploaded in the '
                'first place?')
          out.append(patch.FilePatchBinary(
              filename,
              content,
              svn_props,
              is_new=(status[0] == 'A')))
        continue

      try:
        diff = self.get_file_diff(issue, patchset, state['id'])
      except urllib2.HTTPError, e:
        if e.code == 404:
          raise patch.UnsupportedPatchFormat(
              filename, 'File doesn\'t have a diff.')
        raise

      # FilePatchDiff() will detect file deletion automatically.
      p = patch.FilePatchDiff(filename, diff, svn_props)
      out.append(p)
      if status[0] == 'A':
        # It won't be set for empty file.
        p.is_new = True
      if (len(status) > 1 and
          status[1] == '+' and
          not (p.source_filename or p.svn_properties)):
        raise patch.UnsupportedPatchFormat(
            filename, 'Failed to process the svn properties')

    return patch.PatchSet(out)

  @staticmethod
  def parse_svn_properties(rietveld_svn_props, filename):
    """Returns a list of tuple [('property', 'newvalue')].

    rietveld_svn_props is the exact format from 'svn diff'.
    """
    rietveld_svn_props = rietveld_svn_props.splitlines()
    svn_props = []
    if not rietveld_svn_props:
      return svn_props
    # 1. Ignore svn:mergeinfo.
    # 2. Accept svn:eol-style and svn:executable.
    # 3. Refuse any other.
    # \n
    # Added: svn:ignore\n
    #    + LF\n

    spacer = rietveld_svn_props.pop(0)
    if spacer or not rietveld_svn_props:
      # svn diff always put a spacer between the unified diff and property
      # diff
      raise patch.UnsupportedPatchFormat(
          filename, 'Failed to parse svn properties.')

    while rietveld_svn_props:
      # Something like 'Added: svn:eol-style'. Note the action is localized.
      # *sigh*.
      action = rietveld_svn_props.pop(0)
      match = re.match(r'^(\w+): (.+)$', action)
      if not match or not rietveld_svn_props:
        raise patch.UnsupportedPatchFormat(
            filename,
            'Failed to parse svn properties: %s, %s' % (action, svn_props))

      if match.group(2) == 'svn:mergeinfo':
        # Silently ignore the content.
        rietveld_svn_props.pop(0)
        continue

      if match.group(1) not in ('Added', 'Modified'):
        # Will fail for our French friends.
        raise patch.UnsupportedPatchFormat(
            filename, 'Unsupported svn property operation.')

      if match.group(2) in ('svn:eol-style', 'svn:executable', 'svn:mime-type'):
        # '   + foo' where foo is the new value. That's fragile.
        content = rietveld_svn_props.pop(0)
        match2 = re.match(r'^   \+ (.*)$', content)
        if not match2:
          raise patch.UnsupportedPatchFormat(
              filename, 'Unsupported svn property format.')
        svn_props.append((match.group(2), match2.group(1)))
    return svn_props

  def update_description(self, issue, description):
    """Sets the description for an issue on Rietveld."""
    logging.info('new description for issue %d' % issue)
    self.post('/%d/description' % issue, [
        ('description', description),
        ('xsrf_token', self.xsrf_token())])

  def add_comment(self, issue, message, add_as_reviewer=False):
    max_message = 10000
    tail = '…\n(message too large)'
    if len(message) > max_message:
      message = message[:max_message-len(tail)] + tail
    logging.info('issue %d; comment: %s' % (issue, message.strip()[:300]))
    return self.post('/%d/publish' % issue, [
        ('xsrf_token', self.xsrf_token()),
        ('message', message),
        ('message_only', 'True'),
        ('add_as_reviewer', str(bool(add_as_reviewer))),
        ('send_mail', 'True'),
        ('no_redirect', 'True')])

  def add_inline_comment(
      self, issue, text, side, snapshot, patchset, patchid, lineno):
    logging.info('add inline comment for issue %d' % issue)
    return self.post('/inline_draft', [
        ('issue', str(issue)),
        ('text', text),
        ('side', side),
        ('snapshot', snapshot),
        ('patchset', str(patchset)),
        ('patch', str(patchid)),
         ('lineno', str(lineno))])

  def set_flag(self, issue, patchset, flag, value):
    return self.post('/%d/edit_flags' % issue, [
        ('last_patchset', str(patchset)),
        ('xsrf_token', self.xsrf_token()),
        (flag, str(value))])

  def search(
      self,
      owner=None, reviewer=None,
      base=None,
      closed=None, private=None, commit=None,
      created_before=None, created_after=None,
      modified_before=None, modified_after=None,
      per_request=None, keys_only=False,
      with_messages=False):
    """Yields search results."""
    # These are expected to be strings.
    string_keys = {
        'owner': owner,
        'reviewer': reviewer,
        'base': base,
        'created_before': created_before,
        'created_after': created_after,
        'modified_before': modified_before,
        'modified_after': modified_after,
    }
    # These are either None, False or True.
    three_state_keys = {
      'closed': closed,
      'private': private,
      'commit': commit,
    }

    url = '/search?format=json'
    # Sort the keys mainly to ease testing.
    for key in sorted(string_keys):
      value = string_keys[key]
      if value:
        url += '&%s=%s' % (key, urllib2.quote(value))
    for key in sorted(three_state_keys):
      value = three_state_keys[key]
      if value is not None:
        url += '&%s=%d' % (key, int(value) + 1)

    if keys_only:
      url += '&keys_only=True'
    if with_messages:
      url += '&with_messages=True'
    if per_request:
      url += '&limit=%d' % per_request

    cursor = ''
    while True:
      output = self.get(url + cursor)
      if output.startswith('<'):
        # It's an error message. Return as no result.
        break
      data = json.loads(output) or {}
      if not data.get('results'):
        break
      for i in data['results']:
        yield i
      cursor = '&cursor=%s' % data['cursor']

  def trigger_try_jobs(
      self, issue, patchset, reason, clobber, revision, builders_and_tests,
      master=None):
    """Requests new try jobs.

    |builders_and_tests| is a map of builders: [tests] to run.
    |master| is the name of the try master the builders belong to.

    Returns the keys of the new TryJobResult entites.
    """
    params = [
      ('reason', reason),
      ('clobber', 'True' if clobber else 'False'),
      ('builders', json.dumps(builders_and_tests)),
      ('xsrf_token', self.xsrf_token()),
    ]
    if revision:
      params.append(('revision', revision))
    if master:
      # Temporarily allow empty master names for old configurations. The try
      # job will not be associated with a master name on rietveld. This is
      # going to be deprecated.
      params.append(('master', master))
    return self.post('/%d/try/%d' % (issue, patchset), params)

  def trigger_distributed_try_jobs(
      self, issue, patchset, reason, clobber, revision, masters):
    """Requests new try jobs.

    |masters| is a map of masters: map of builders: [tests] to run.
    """
    for (master, builders_and_tests) in masters.iteritems():
      self.trigger_try_jobs(
          issue, patchset, reason, clobber, revision, builders_and_tests,
          master)

  def get_pending_try_jobs(self, cursor=None, limit=100):
    """Retrieves the try job requests in pending state.

    Returns a tuple of the list of try jobs and the cursor for the next request.
    """
    url = '/get_pending_try_patchsets?limit=%d' % limit
    extra = ('&cursor=' + cursor) if cursor else ''
    data = json.loads(self.get(url + extra))
    return data['jobs'], data['cursor']

  def get(self, request_path, **kwargs):
    kwargs.setdefault('payload', None)
    return self._send(request_path, **kwargs)

  def post(self, request_path, data, **kwargs):
    ctype, body = upload.EncodeMultipartFormData(data, [])
    return self._send(request_path, payload=body, content_type=ctype, **kwargs)

  def _send(self, request_path, **kwargs):
    """Sends a POST/GET to Rietveld.  Returns the response body."""
    # rpc_server.Send() assumes timeout=None by default; make sure it's set
    # to something reasonable.
    kwargs.setdefault('timeout', 15)
    logging.debug('POSTing to %s, args %s.', request_path, kwargs)
    try:
      # Sadly, upload.py calls ErrorExit() which does a sys.exit(1) on HTTP
      # 500 in AbstractRpcServer.Send().
      old_error_exit = upload.ErrorExit
      def trap_http_500(msg):
        """Converts an incorrect ErrorExit() call into a HTTPError exception."""
        m = re.search(r'(50\d) Server Error', msg)
        if m:
          # Fake an HTTPError exception. Cheezy. :(
          raise urllib2.HTTPError(
              request_path, int(m.group(1)), msg, None, None)
        old_error_exit(msg)
      upload.ErrorExit = trap_http_500

      maxtries = 5
      for retry in xrange(maxtries):
        try:
          logging.debug('%s' % request_path)
          result = self.rpc_server.Send(request_path, **kwargs)
          # Sometimes GAE returns a HTTP 200 but with HTTP 500 as the content.
          # How nice.
          return result
        except urllib2.HTTPError, e:
          if retry >= (maxtries - 1):
            raise
          if e.code not in (500, 502, 503):
            raise
        except urllib2.URLError, e:
          if retry >= (maxtries - 1):
            raise
          if (not 'Name or service not known' in e.reason and
              not 'EOF occurred in violation of protocol' in e.reason):
            # Usually internal GAE flakiness.
            raise
        except ssl.SSLError, e:
          if retry >= (maxtries - 1):
            raise
          if not 'timed out' in str(e):
            raise
        # If reaching this line, loop again. Uses a small backoff.
        time.sleep(1+maxtries*2)
    finally:
      upload.ErrorExit = old_error_exit

  # DEPRECATED.
  Send = get


class OAuthRpcServer(object):
  def __init__(self,
               host,
               client_id,
               client_private_key,
               private_key_password='notasecret',
               user_agent=None,
               timeout=None,
               extra_headers=None):
    """Wrapper around httplib2.Http() that handles authentication.

    client_id: client id for service account
    client_private_key: encrypted private key, as a string
    private_key_password: password used to decrypt the private key
    """

    # Enforce https
    host_parts = urlparse.urlparse(host)

    if host_parts.scheme == 'https':  # fine
      self.host = host
    elif host_parts.scheme == 'http':
      upload.logging.warning('Changing protocol to https')
      self.host = 'https' + host[4:]
    else:
      msg = 'Invalid url provided: %s' % host
      upload.logging.error(msg)
      raise ValueError(msg)

    self.host = self.host.rstrip('/')

    self.extra_headers = extra_headers or {}

    if not oa2client.HAS_OPENSSL:
      logging.error("Support for OpenSSL hasn't been found, "
                    "OAuth2 support requires it.")
      logging.error("Installing pyopenssl will probably solve this issue.")
      raise RuntimeError('No OpenSSL support')
    creds = oa2client.SignedJwtAssertionCredentials(
      client_id,
      client_private_key,
      'https://www.googleapis.com/auth/userinfo.email',
      private_key_password=private_key_password,
      user_agent=user_agent)

    self._http = creds.authorize(httplib2.Http(timeout=timeout))

  def Send(self,
           request_path,
           payload=None,
           content_type='application/octet-stream',
           timeout=None,
           extra_headers=None,
           **kwargs):
    """Send a POST or GET request to the server.

    Args:
      request_path: path on the server to hit. This is concatenated with the
        value of 'host' provided to the constructor.
      payload: request is a POST if not None, GET otherwise
      timeout: in seconds
      extra_headers: (dict)
    """
    # This method signature should match upload.py:AbstractRpcServer.Send()
    method = 'GET'

    headers = self.extra_headers.copy()
    headers.update(extra_headers or {})

    if payload is not None:
      method = 'POST'
      headers['Content-Type'] = content_type
      raise NotImplementedError('POST requests are not yet supported.')

    prev_timeout = self._http.timeout
    try:
      if timeout:
        self._http.timeout = timeout
      # TODO(pgervais) implement some kind of retry mechanism (see upload.py).
      url = self.host + request_path
      if kwargs:
        url += "?" + urllib.urlencode(kwargs)

      ret = self._http.request(url,
                               method=method,
                               body=payload,
                               headers=headers)
      if not ret[0]['content-location'].startswith(self.host):
        upload.logging.warning('Redirection to host %s detected: '
                               'login may have failed/expired.'
                               % urlparse.urlparse(
                                     ret[0]['content-location']).netloc)
      return ret[1]

    finally:
      self._http.timeout = prev_timeout


class JwtOAuth2Rietveld(Rietveld):
  """Access to Rietveld using OAuth authentication.

  This class is supposed to be used only by bots, since this kind of
  access is restricted to service accounts.
  """
  # The parent__init__ is not called on purpose.
  # pylint: disable=W0231
  def __init__(self,
               url,
               client_id,
               client_private_key_file,
               private_key_password=None,
               extra_headers=None):
    if private_key_password is None:  # '' means 'empty password'
      private_key_password = 'notasecret'

    self.url = url.rstrip('/')
    with open(client_private_key_file, 'rb') as f:
      client_private_key = f.read()
    self.rpc_server = OAuthRpcServer(url,
                                     client_id,
                                     client_private_key,
                                     private_key_password=private_key_password,
                                     extra_headers=extra_headers or {})
    self._xsrf_token = None
    self._xsrf_token_time = None


class CachingRietveld(Rietveld):
  """Caches the common queries.

  Not to be used in long-standing processes, like the commit queue.
  """
  def __init__(self, *args, **kwargs):
    super(CachingRietveld, self).__init__(*args, **kwargs)
    self._cache = {}

  def _lookup(self, function_name, args, update):
    """Caches the return values corresponding to the arguments.

    It is important that the arguments are standardized, like None vs False.
    """
    function_cache = self._cache.setdefault(function_name, {})
    if args not in function_cache:
      function_cache[args] = update(*args)
    return copy.deepcopy(function_cache[args])

  def get_description(self, issue):
    return self._lookup(
        'get_description',
        (issue,),
        super(CachingRietveld, self).get_description)

  def get_issue_properties(self, issue, messages):
    """Returns the issue properties.

    Because in practice the presubmit checks often ask without messages first
    and then with messages, always ask with messages and strip off if not asked
    for the messages.
    """
    # It's a tad slower to request with the message but it's better than
    # requesting the properties twice.
    data = self._lookup(
        'get_issue_properties',
        (issue, True),
        super(CachingRietveld, self).get_issue_properties)
    if not messages:
      # Assumes self._lookup uses deepcopy.
      del data['messages']
    return data

  def get_patchset_properties(self, issue, patchset):
    return self._lookup(
        'get_patchset_properties',
        (issue, patchset),
        super(CachingRietveld, self).get_patchset_properties)


class ReadOnlyRietveld(object):
  """
  Only provides read operations, and simulates writes locally.

  Intentionally do not inherit from Rietveld to avoid any write-issuing
  logic to be invoked accidentally.
  """

  # Dictionary of local changes, indexed by issue number as int.
  _local_changes = {}

  def __init__(self, *args, **kwargs):
    # We still need an actual Rietveld instance to issue reads, just keep
    # it hidden.
    self._rietveld = Rietveld(*args, **kwargs)

  @classmethod
  def _get_local_changes(cls, issue):
    """Returns dictionary of local changes for |issue|, if any."""
    return cls._local_changes.get(issue, {})

  @property
  def url(self):
    return self._rietveld.url

  @property
  def email(self):
    return self._rietveld.email

  @property
  def password(self):
    return self._rietveld.password

  def get_pending_issues(self):
    pending_issues = self._rietveld.get_pending_issues()

    # Filter out issues we've closed or unchecked the commit checkbox.
    return [issue for issue in pending_issues
            if not self._get_local_changes(issue).get('closed', False) and
            self._get_local_changes(issue).get('commit', True)]

  def close_issue(self, issue):  # pylint:disable=R0201
    logging.info('ReadOnlyRietveld: closing issue %d' % issue)
    ReadOnlyRietveld._local_changes.setdefault(issue, {})['closed'] = True

  def get_issue_properties(self, issue, messages):
    data = self._rietveld.get_issue_properties(issue, messages)
    data.update(self._get_local_changes(issue))
    return data

  def get_patchset_properties(self, issue, patchset):
    return self._rietveld.get_patchset_properties(issue, patchset)

  def get_patch(self, issue, patchset):
    return self._rietveld.get_patch(issue, patchset)

  def update_description(self, issue, description):  # pylint:disable=R0201
    logging.info('ReadOnlyRietveld: new description for issue %d: %s' %
        (issue, description))

  def add_comment(self,  # pylint:disable=R0201
                  issue,
                  message,
                  add_as_reviewer=False):
    logging.info('ReadOnlyRietveld: posting comment "%s" to issue %d' %
        (message, issue))

  def set_flag(self, issue, patchset, flag, value):  # pylint:disable=R0201
    logging.info('ReadOnlyRietveld: setting flag "%s" to "%s" for issue %d' %
        (flag, value, issue))
    ReadOnlyRietveld._local_changes.setdefault(issue, {})[flag] = value

  def trigger_try_jobs(  # pylint:disable=R0201
      self, issue, patchset, reason, clobber, revision, builders_and_tests,
      master=None):
    logging.info('ReadOnlyRietveld: triggering try jobs %r for issue %d' %
        (builders_and_tests, issue))

  def trigger_distributed_try_jobs(  # pylint:disable=R0201
      self, issue, patchset, reason, clobber, revision, masters):
    logging.info('ReadOnlyRietveld: triggering try jobs %r for issue %d' %
        (masters, issue))

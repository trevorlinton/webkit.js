# Copyright (c) 2013 The Chromium OS Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

"""
Utilities for requesting information for a gerrit server via https.

https://gerrit-review.googlesource.com/Documentation/rest-api.html
"""

import base64
import httplib
import json
import logging
import netrc
import os
import time
import urllib
from cStringIO import StringIO

try:
  NETRC = netrc.netrc()
except (IOError, netrc.NetrcParseError):
  NETRC = netrc.netrc(os.devnull)
LOGGER = logging.getLogger()
TRY_LIMIT = 5

# Controls the transport protocol used to communicate with gerrit.
# This is parameterized primarily to enable GerritTestCase.
GERRIT_PROTOCOL = 'https'


class GerritError(Exception):
  """Exception class for errors commuicating with the gerrit-on-borg service."""
  def __init__(self, http_status, *args, **kwargs):
    super(GerritError, self).__init__(*args, **kwargs)
    self.http_status = http_status
    self.message = '(%d) %s' % (self.http_status, self.message)


def _QueryString(param_dict, first_param=None):
  """Encodes query parameters in the key:val[+key:val...] format specified here:

  https://gerrit-review.googlesource.com/Documentation/rest-api-changes.html#list-changes
  """
  q = [urllib.quote(first_param)] if first_param else []
  q.extend(['%s:%s' % (key, val) for key, val in param_dict.iteritems()])
  return '+'.join(q)


def GetConnectionClass(protocol=None):
  if protocol is None:
    protocol = GERRIT_PROTOCOL
  if protocol == 'https':
    return httplib.HTTPSConnection
  elif protocol == 'http':
    return httplib.HTTPConnection
  else:
    raise RuntimeError(
        "Don't know how to work with protocol '%s'" % protocol)


def CreateHttpConn(host, path, reqtype='GET', headers=None, body=None):
  """Opens an https connection to a gerrit service, and sends a request."""
  headers = headers or {}
  bare_host = host.partition(':')[0]
  auth = NETRC.authenticators(bare_host)

  if auth:
    headers.setdefault('Authorization', 'Basic %s' % (
        base64.b64encode('%s:%s' % (auth[0], auth[2]))))
  else:
    LOGGER.debug('No authorization found in netrc.')

  if 'Authorization' in headers and not path.startswith('a/'):
    url = '/a/%s' % path
  else:
    url = '/%s' % path

  if body:
    body = json.JSONEncoder().encode(body)
    headers.setdefault('Content-Type', 'application/json')
  if LOGGER.isEnabledFor(logging.DEBUG):
    LOGGER.debug('%s %s://%s%s' % (reqtype, GERRIT_PROTOCOL, host, url))
    for key, val in headers.iteritems():
      if key == 'Authorization':
        val = 'HIDDEN'
      LOGGER.debug('%s: %s' % (key, val))
    if body:
      LOGGER.debug(body)
  conn = GetConnectionClass()(host)
  conn.req_host = host
  conn.req_params = {
      'url': url,
      'method': reqtype,
      'headers': headers,
      'body': body,
  }
  conn.request(**conn.req_params)
  return conn


def ReadHttpResponse(conn, expect_status=200, ignore_404=True):
  """Reads an http response from a connection into a string buffer.

  Args:
    conn: An HTTPSConnection or HTTPConnection created by CreateHttpConn, above.
    expect_status: Success is indicated by this status in the response.
    ignore_404: For many requests, gerrit-on-borg will return 404 if the request
                doesn't match the database contents.  In most such cases, we
                want the API to return None rather than raise an Exception.
  Returns: A string buffer containing the connection's reply.
  """

  sleep_time = 0.5
  for idx in range(TRY_LIMIT):
    response = conn.getresponse()
    # If response.status < 500 then the result is final; break retry loop.
    if response.status < 500:
      break
    # A status >=500 is assumed to be a possible transient error; retry.
    http_version = 'HTTP/%s' % ('1.1' if response.version == 11 else '1.0')
    msg = (
        'A transient error occured while querying %s:\n'
        '%s %s %s\n'
        '%s %d %s' % (
            conn.host, conn.req_params['method'], conn.req_params['url'],
            http_version, http_version, response.status, response.reason))
    if TRY_LIMIT - idx > 1:
      msg += '\n... will retry %d more times.' % (TRY_LIMIT - idx - 1)
      time.sleep(sleep_time)
      sleep_time = sleep_time * 2
      req_host = conn.req_host
      req_params = conn.req_params
      conn = GetConnectionClass()(req_host)
      conn.req_host = req_host
      conn.req_params = req_params
      conn.request(**req_params)
    LOGGER.warn(msg)
  if ignore_404 and response.status == 404:
    return StringIO()
  if response.status != expect_status:
    raise GerritError(response.status, response.reason)
  return StringIO(response.read())


def ReadHttpJsonResponse(conn, expect_status=200, ignore_404=True):
  """Parses an https response as json."""
  fh = ReadHttpResponse(
      conn, expect_status=expect_status, ignore_404=ignore_404)
  # The first line of the response should always be: )]}'
  s = fh.readline()
  if s and s.rstrip() != ")]}'":
    raise GerritError(200, 'Unexpected json output: %s' % s)
  s = fh.read()
  if not s:
    return None
  return json.loads(s)


def QueryChanges(host, param_dict, first_param=None, limit=None, o_params=None,
                 sortkey=None):
  """
  Queries a gerrit-on-borg server for changes matching query terms.

  Args:
    param_dict: A dictionary of search parameters, as documented here:
        http://gerrit-documentation.googlecode.com/svn/Documentation/2.6/user-search.html
    first_param: A change identifier
    limit: Maximum number of results to return.
    o_params: A list of additional output specifiers, as documented here:
        https://gerrit-review.googlesource.com/Documentation/rest-api-changes.html#list-changes
  Returns:
    A list of json-decoded query results.
  """
  # Note that no attempt is made to escape special characters; YMMV.
  if not param_dict and not first_param:
    raise RuntimeError('QueryChanges requires search parameters')
  path = 'changes/?q=%s' % _QueryString(param_dict, first_param)
  if sortkey:
    path = '%s&N=%s' % (path, sortkey)
  if limit:
    path = '%s&n=%d' % (path, limit)
  if o_params:
    path = '%s&%s' % (path, '&'.join(['o=%s' % p for p in o_params]))
  # Don't ignore 404; a query should always return a list, even if it's empty.
  return ReadHttpJsonResponse(CreateHttpConn(host, path), ignore_404=False)


def GenerateAllChanges(host, param_dict, first_param=None, limit=500,
                       o_params=None, sortkey=None):
  """
  Queries a gerrit-on-borg server for all the changes matching the query terms.

  A single query to gerrit-on-borg is limited on the number of results by the
  limit parameter on the request (see QueryChanges) and the server maximum
  limit. This function uses the "_more_changes" and "_sortkey" attributes on
  the returned changes to iterate all of them making multiple queries to the
  server, regardless the query limit.

  Args:
    param_dict, first_param: Refer to QueryChanges().
    limit: Maximum number of requested changes per query.
    o_params: Refer to QueryChanges().
    sortkey: The value of the "_sortkey" attribute where starts from. None to
        start from the first change.

  Returns:
    A generator object to the list of returned changes, possibly unbound.
  """
  more_changes = True
  while more_changes:
    page = QueryChanges(host, param_dict, first_param, limit, o_params, sortkey)
    for cl in page:
      yield cl

    more_changes = [cl for cl in page if '_more_changes' in cl]
    if len(more_changes) > 1:
      raise GerritError(
          200,
          'Received %d changes with a _more_changes attribute set but should '
          'receive at most one.' % len(more_changes))
    if more_changes:
      sortkey = more_changes[0]['_sortkey']


def MultiQueryChanges(host, param_dict, change_list, limit=None, o_params=None,
                      sortkey=None):
  """Initiate a query composed of multiple sets of query parameters."""
  if not change_list:
    raise RuntimeError(
        "MultiQueryChanges requires a list of change numbers/id's")
  q = ['q=%s' % '+OR+'.join([urllib.quote(str(x)) for x in change_list])]
  if param_dict:
    q.append(_QueryString(param_dict))
  if limit:
    q.append('n=%d' % limit)
  if sortkey:
    q.append('N=%s' % sortkey)
  if o_params:
    q.extend(['o=%s' % p for p in o_params])
  path = 'changes/?%s' % '&'.join(q)
  try:
    result = ReadHttpJsonResponse(CreateHttpConn(host, path), ignore_404=False)
  except GerritError as e:
    msg = '%s:\n%s' % (e.message, path)
    raise GerritError(e.http_status, msg)
  return result


def GetGerritFetchUrl(host):
  """Given a gerrit host name returns URL of a gerrit instance to fetch from."""
  return '%s://%s/' % (GERRIT_PROTOCOL, host)


def GetChangePageUrl(host, change_number):
  """Given a gerrit host name and change number, return change page url."""
  return '%s://%s/#/c/%d/' % (GERRIT_PROTOCOL, host, change_number)


def GetChangeUrl(host, change):
  """Given a gerrit host name and change id, return an url for the change."""
  return '%s://%s/a/changes/%s' % (GERRIT_PROTOCOL, host, change)


def GetChange(host, change):
  """Query a gerrit server for information about a single change."""
  path = 'changes/%s' % change
  return ReadHttpJsonResponse(CreateHttpConn(host, path))


def GetChangeDetail(host, change, o_params=None):
  """Query a gerrit server for extended information about a single change."""
  path = 'changes/%s/detail' % change
  if o_params:
    path += '?%s' % '&'.join(['o=%s' % p for p in o_params])
  return ReadHttpJsonResponse(CreateHttpConn(host, path))


def GetChangeCurrentRevision(host, change):
  """Get information about the latest revision for a given change."""
  return QueryChanges(host, {}, change, o_params=('CURRENT_REVISION',))


def GetChangeRevisions(host, change):
  """Get information about all revisions associated with a change."""
  return QueryChanges(host, {}, change, o_params=('ALL_REVISIONS',))


def GetChangeReview(host, change, revision=None):
  """Get the current review information for a change."""
  if not revision:
    jmsg = GetChangeRevisions(host, change)
    if not jmsg:
      return None
    elif len(jmsg) > 1:
      raise GerritError(200, 'Multiple changes found for ChangeId %s.' % change)
    revision = jmsg[0]['current_revision']
  path = 'changes/%s/revisions/%s/review'
  return ReadHttpJsonResponse(CreateHttpConn(host, path))


def AbandonChange(host, change, msg=''):
  """Abandon a gerrit change."""
  path = 'changes/%s/abandon' % change
  body = {'message': msg} if msg else None
  conn = CreateHttpConn(host, path, reqtype='POST', body=body)
  return ReadHttpJsonResponse(conn, ignore_404=False)


def RestoreChange(host, change, msg=''):
  """Restore a previously abandoned change."""
  path = 'changes/%s/restore' % change
  body = {'message': msg} if msg else None
  conn = CreateHttpConn(host, path, reqtype='POST', body=body)
  return ReadHttpJsonResponse(conn, ignore_404=False)


def SubmitChange(host, change, wait_for_merge=True):
  """Submits a gerrit change via Gerrit."""
  path = 'changes/%s/submit' % change
  body = {'wait_for_merge': wait_for_merge}
  conn = CreateHttpConn(host, path, reqtype='POST', body=body)
  return ReadHttpJsonResponse(conn, ignore_404=False)


def GetReviewers(host, change):
  """Get information about all reviewers attached to a change."""
  path = 'changes/%s/reviewers' % change
  return ReadHttpJsonResponse(CreateHttpConn(host, path))


def GetReview(host, change, revision):
  """Get review information about a specific revision of a change."""
  path = 'changes/%s/revisions/%s/review' % (change, revision)
  return ReadHttpJsonResponse(CreateHttpConn(host, path))


def AddReviewers(host, change, add=None):
  """Add reviewers to a change."""
  if not add:
    return
  if isinstance(add, basestring):
    add = (add,)
  path = 'changes/%s/reviewers' % change
  for r in add:
    body = {'reviewer': r}
    conn = CreateHttpConn(host, path, reqtype='POST', body=body)
    jmsg = ReadHttpJsonResponse(conn, ignore_404=False)
  return jmsg


def RemoveReviewers(host, change, remove=None):
  """Remove reveiewers from a change."""
  if not remove:
    return
  if isinstance(remove, basestring):
    remove = (remove,)
  for r in remove:
    path = 'changes/%s/reviewers/%s' % (change, r)
    conn = CreateHttpConn(host, path, reqtype='DELETE')
    try:
      ReadHttpResponse(conn, ignore_404=False)
    except GerritError as e:
      # On success, gerrit returns status 204; anything else is an error.
      if e.http_status != 204:
        raise
    else:
      raise GerritError(
          'Unexpectedly received a 200 http status while deleting reviewer "%s"'
          ' from change %s' % (r, change))


def SetReview(host, change, msg=None, labels=None, notify=None):
  """Set labels and/or add a message to a code review."""
  if not msg and not labels:
    return
  path = 'changes/%s/revisions/current/review' % change
  body = {}
  if msg:
    body['message'] = msg
  if labels:
    body['labels'] = labels
  if notify:
    body['notify'] = notify
  conn = CreateHttpConn(host, path, reqtype='POST', body=body)
  response = ReadHttpJsonResponse(conn)
  if labels:
    for key, val in labels.iteritems():
      if ('labels' not in response or key not in response['labels'] or
          int(response['labels'][key] != int(val))):
        raise GerritError(200, 'Unable to set "%s" label on change %s.' % (
            key, change))


def ResetReviewLabels(host, change, label, value='0', message=None,
                      notify=None):
  """Reset the value of a given label for all reviewers on a change."""
  # This is tricky, because we want to work on the "current revision", but
  # there's always the risk that "current revision" will change in between
  # API calls.  So, we check "current revision" at the beginning and end; if
  # it has changed, raise an exception.
  jmsg = GetChangeCurrentRevision(host, change)
  if not jmsg:
    raise GerritError(
        200, 'Could not get review information for change "%s"' % change)
  value = str(value)
  revision = jmsg[0]['current_revision']
  path = 'changes/%s/revisions/%s/review' % (change, revision)
  message = message or (
      '%s label set to %s programmatically.' % (label, value))
  jmsg = GetReview(host, change, revision)
  if not jmsg:
    raise GerritError(200, 'Could not get review information for revison %s '
                   'of change %s' % (revision, change))
  for review in jmsg.get('labels', {}).get(label, {}).get('all', []):
    if str(review.get('value', value)) != value:
      body = {
          'message': message,
          'labels': {label: value},
          'on_behalf_of': review['_account_id'],
      }
      if notify:
        body['notify'] = notify
      conn = CreateHttpConn(
          host, path, reqtype='POST', body=body)
      response = ReadHttpJsonResponse(conn)
      if str(response['labels'][label]) != value:
        username = review.get('email', jmsg.get('name', ''))
        raise GerritError(200, 'Unable to set %s label for user "%s"'
                       ' on change %s.' % (label, username, change))
  jmsg = GetChangeCurrentRevision(host, change)
  if not jmsg:
    raise GerritError(
        200, 'Could not get review information for change "%s"' % change)
  elif jmsg[0]['current_revision'] != revision:
    raise GerritError(200, 'While resetting labels on change "%s", '
                   'a new patchset was uploaded.' % change)

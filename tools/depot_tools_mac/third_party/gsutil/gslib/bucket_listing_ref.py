# Copyright 2012 Google Inc. All Rights Reserved.
#
# Permission is hereby granted, free of charge, to any person obtaining a
# copy of this software and associated documentation files (the
# "Software"), to deal in the Software without restriction, including
# without limitation the rights to use, copy, modify, merge, publish, dis-
# tribute, sublicense, and/or sell copies of the Software, and to permit
# persons to whom the Software is furnished to do so, subject to the fol-
# lowing conditions:
#
# The above copyright notice and this permission notice shall be included
# in all copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
# OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABIL-
# ITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT
# SHALL THE AUTHOR BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
# WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
# IN THE SOFTWARE.

import time


class BucketListingRef(object):
  """
  Container that holds a reference to one result from a bucket listing, allowing
  polymorphic iteration over wildcard-iterated URIs, Keys, or Prefixes. At a
  minimum, every reference contains a StorageUri. If the reference came from a
  bucket listing (as opposed to a manually instantiated ref that might populate
  only the StorageUri), it will additionally contain either a Key or a Prefix,
  depending on whether it was a reference to an object or was just a prefix of a
  path (i.e., bucket subdirectory). The latter happens when the bucket was
  listed using delimiter='/'.

  Note that Keys are shallow-populated, based on the contents extracted from
  parsing a bucket listing. This includes name, length, and other fields
  (basically, the info listed by gsutil ls -l), but does not include information
  like ACL and location (which require separate server requests, which is why
  there's a separate gsutil ls -L option to get this more detailed info).
  """

  def __init__(self, uri, key=None, prefix=None, headers=None):
    """Instantiate BucketListingRef from uri and (if available) key or prefix.

    Args:
      uri: StorageUri for the object (required).
      key: Key for the object, or None if not available.
      prefix: Prefix for the subdir, or None if not available.
      headers: Dictionary containing optional HTTP headers to pass to boto
          (which happens when GetKey() is called on an BucketListingRef which
          has no constructor-populated Key), or None if not available.

      At most one of key and prefix can be populated.
    """
    assert key is None or prefix is None
    self.uri = uri
    self.key = key
    self.prefix = prefix
    self.headers = headers or {}

  def GetUri(self):
    """Get URI form of listed URI.

    Returns:
      StorageUri.
    """
    return self.uri

  def GetUriString(self):
    """Get string URI form of listed URI.

    Returns:
      String.
    """
    return self.uri.uri

  def NamesBucket(self):
    """Determines if this BucketListingRef names a bucket.

    Returns:
      bool indicator.
    """
    return self.key is None and self.prefix is None and self.uri.names_bucket()

  def IsLatest(self):
    """Determines if this BucketListingRef names the latest version of an
    object.

    Returns:
      bool indicator.
    """
    return hasattr(self.uri, 'is_latest') and self.uri.is_latest

  def GetRStrippedUriString(self):
    """Get string URI form of listed URI, stripped of any right trailing
    delims, and without version string.

    Returns:
      String.
    """
    return self.uri.versionless_uri.rstrip('/')

  def HasKey(self):
    """Return bool indicator of whether this BucketListingRef has a Key."""
    return bool(self.key)

  def HasPrefix(self):
    """Return bool indicator of whether this BucketListingRef has a Prefix."""
    return bool(self.prefix)

  def GetKey(self):
    """Get Key form of listed URI.

    Returns:
      Subclass of boto.s3.key.Key.

    Raises:
      BucketListingRefException: for bucket-only uri.
    """
    # For gsutil ls -l gs://bucket self.key will be populated from (boto)
    # parsing the bucket listing. But as noted and handled below there are
    # cases where self.key isn't populated.
    if not self.key:
      if not self.uri.names_object():
        raise BucketListingRefException(
            'Attempt to call GetKey() on Key-less BucketListingRef (uri=%s) ' %
            self.uri)
      # This case happens when we do gsutil ls -l on a object name-ful
      # StorageUri with no object-name wildcard. Since the ls command
      # implementation only reads bucket info we need to read the object
      # for this case.
      self.key = self.uri.get_key(validate=False, headers=self.headers)
      # When we retrieve the object this way its last_modified timestamp
      # is formatted in RFC 1123 format, which is different from when we
      # retrieve from the bucket listing (which uses ISO 8601 format), so
      # convert so we consistently return ISO 8601 format.
      tuple_time = (time.strptime(self.key.last_modified,
                                  '%a, %d %b %Y %H:%M:%S %Z'))
      self.key.last_modified = time.strftime('%Y-%m-%dT%H:%M:%S', tuple_time)
    return self.key

  def GetPrefix(self):
    """Get Prefix form of listed URI.

    Returns:
      boto.s3.prefix.Prefix.

    Raises:
      BucketListingRefException: if this object has no Prefix.
    """
    if not self.prefix:
      raise BucketListingRefException(
          'Attempt to call GetPrefix() on Prefix-less BucketListingRef '
          '(uri=%s)' % self.uri)
    return self.prefix

  def __repr__(self):
    """Returns string representation of BucketListingRef."""
    return 'BucketListingRef(%s, HasKey=%s, HasPrefix=%s)' % (
        self.uri, self.HasKey(), self.HasPrefix())


class BucketListingRefException(StandardError):
  """Exception thrown for invalid BucketListingRef requests."""

  def __init__(self, reason):
    StandardError.__init__(self)
    self.reason = reason

  def __repr__(self):
    return 'BucketListingRefException: %s' % self.reason

  def __str__(self):
    return 'BucketListingRefException: %s' % self.reason

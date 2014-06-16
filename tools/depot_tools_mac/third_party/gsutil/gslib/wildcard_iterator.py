# Copyright 2010 Google Inc. All Rights Reserved.
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

"""Implementation of wildcarding over StorageUris.

StorageUri is an abstraction that Google introduced in the boto library,
for representing storage provider-independent bucket and object names with
a shorthand URI-like syntax (see boto/boto/storage_uri.py) The current
class provides wildcarding support for StorageUri objects (including both
bucket and file system objects), allowing one to express collections of
objects with syntax like the following:
  gs://mybucket/images/*.png
  file:///tmp/???abc???

We provide wildcarding support as part of gsutil rather than as part
of boto because wildcarding is really part of shell command-like
functionality.

A comment about wildcard semantics: We support both single path component
wildcards (e.g., using '*') and recursive wildcards (using '**'), for both
file and cloud URIs. For example,
  gs://bucket/doc/*/*.html
would enumerate HTML files one directory down from gs://bucket/doc, while
  gs://bucket/**/*.html
would enumerate HTML files in all objects contained in the bucket.

Note also that if you use file system wildcards it's likely your shell
interprets the wildcarding before passing the command to gsutil. For example:
  % gsutil cp /opt/eclipse/*/*.html gs://bucket/eclipse
would likely be expanded by the shell into the following before running gsutil:
  % gsutil cp /opt/eclipse/RUNNING.html gs://bucket/eclipse

Note also that most shells don't support '**' wildcarding (I think only
zsh does). If you want to use '**' wildcarding with such a shell you can
single quote each wildcarded string, so it gets passed uninterpreted by the
shell to gsutil (at which point gsutil will perform the wildcarding expansion):
  % gsutil cp '/opt/eclipse/**/*.html' gs://bucket/eclipse
"""

import boto
import fnmatch
import glob
import os
import re
import sys
import urllib

from boto.s3.prefix import Prefix
from boto.storage_uri import BucketStorageUri
from bucket_listing_ref import BucketListingRef

# Regex to determine if a string contains any wildcards.
WILDCARD_REGEX = re.compile('[*?\[\]]')

WILDCARD_OBJECT_ITERATOR = 'wildcard_object_iterator'
WILDCARD_BUCKET_ITERATOR = 'wildcard_bucket_iterator'


class WildcardIterator(object):
  """Base class for wildcarding over StorageUris.

  This class implements support for iterating over StorageUris that
  contain wildcards.

  The base class is abstract; you should instantiate using the
  wildcard_iterator() static factory method, which chooses the right
  implementation depending on the StorageUri.
  """

  def __repr__(self):
    """Returns string representation of WildcardIterator."""
    return 'WildcardIterator(%s)' % self.wildcard_uri


class CloudWildcardIterator(WildcardIterator):
  """WildcardIterator subclass for buckets and objects.

  Iterates over BucketListingRef matching the StorageUri wildcard. It's
  much more efficient to request the Key from the BucketListingRef (via
  GetKey()) than to request the StorageUri and then call uri.get_key()
  to retrieve the key, for cases where you want to get metadata that's
  available in the Bucket (for example to get the name and size of
  each object), because that information is available in the bucket GET
  results. If you were to iterate over URIs for such cases and then get
  the name and size info from each resulting StorageUri, it would cause
  an additional object GET request for each of the result URIs.
  """

  def __init__(self, wildcard_uri, proj_id_handler,
               bucket_storage_uri_class=BucketStorageUri, all_versions=False,
               headers=None, debug=0):
    """
    Instantiates an iterator over BucketListingRef matching given wildcard URI.

    Args:
      wildcard_uri: StorageUri that contains the wildcard to iterate.
      proj_id_handler: ProjectIdHandler to use for current command.
      bucket_storage_uri_class: BucketStorageUri interface.
                                Settable for testing/mocking.
      headers: Dictionary containing optional HTTP headers to pass to boto.
      debug: Debug level to pass in to boto connection (range 0..3).
    """
    self.wildcard_uri = wildcard_uri
    # Make a copy of the headers so any updates we make during wildcard
    # expansion aren't left in the input params (specifically, so we don't
    # include the x-goog-project-id header needed by a subset of cases, in
    # the data returned to caller, which could then be used in other cases
    # where that header must not be passed).
    if headers is None:
      self.headers = {}
    else:
      self.headers = headers.copy()
    self.proj_id_handler = proj_id_handler
    self.bucket_storage_uri_class = bucket_storage_uri_class
    self.all_versions = all_versions
    self.debug = debug

  def __iter__(self):
    """Python iterator that gets called when iterating over cloud wildcard.

    Yields:
      BucketListingRef, or empty iterator if no matches.
    """
    # First handle bucket wildcarding, if any.
    if ContainsWildcard(self.wildcard_uri.bucket_name):
      regex = fnmatch.translate(self.wildcard_uri.bucket_name)
      bucket_uris = []
      prog = re.compile(regex)
      self.proj_id_handler.FillInProjectHeaderIfNeeded(WILDCARD_BUCKET_ITERATOR,
                                                       self.wildcard_uri,
                                                       self.headers)
      for b in self.wildcard_uri.get_all_buckets(headers=self.headers):
        if prog.match(b.name):
          # Use str(b.name) because get_all_buckets() returns Unicode
          # string, which when used to construct x-goog-copy-src metadata
          # requests for object-to-object copies causes pathname '/' chars
          # to be entity-encoded (bucket%2Fdir instead of bucket/dir),
          # which causes the request to fail.
          uri_str = '%s://%s' % (self.wildcard_uri.scheme,
                                 urllib.quote_plus(str(b.name)))
          bucket_uris.append(
              boto.storage_uri(
                  uri_str, debug=self.debug,
                  bucket_storage_uri_class=self.bucket_storage_uri_class,
                  suppress_consec_slashes=False))
    else:
      bucket_uris = [self.wildcard_uri.clone_replace_name('')]

    # Now iterate over bucket(s), and handle object wildcarding, if any.
    self.proj_id_handler.FillInProjectHeaderIfNeeded(WILDCARD_OBJECT_ITERATOR,
                                                     self.wildcard_uri,
                                                     self.headers)
    for bucket_uri in bucket_uris:
      if self.wildcard_uri.names_bucket():
        # Bucket-only URI.
        yield BucketListingRef(bucket_uri, key=None, prefix=None,
                               headers=self.headers)
      else:
        # URI contains an object name. If there's no wildcard just yield
        # the needed URI.
        if not ContainsWildcard(self.wildcard_uri.object_name):
          uri_to_yield = bucket_uri.clone_replace_name(
              self.wildcard_uri.object_name)
          yield BucketListingRef(uri_to_yield, key=None, prefix=None,
                          headers=self.headers)
        else:
          # URI contains a wildcard. Expand iteratively by building
          # prefix/delimiter bucket listing request, filtering the results per
          # the current level's wildcard, and continuing with the next component
          # of the wildcard. See _BuildBucketFilterStrings() documentation
          # for details.
          #
          # Initialize the iteration with bucket name from bucket_uri but
          # object name from self.wildcard_uri. This is needed to handle cases
          # where both the bucket and object names contain wildcards.
          uris_needing_expansion = [
              bucket_uri.clone_replace_name(self.wildcard_uri.object_name)]
          while len(uris_needing_expansion) > 0:
            uri = uris_needing_expansion.pop(0)
            (prefix, delimiter, prefix_wildcard, suffix_wildcard) = (
                self._BuildBucketFilterStrings(uri.object_name))
            prog = re.compile(fnmatch.translate(prefix_wildcard))
            # List bucket for objects matching prefix up to delimiter.
            for key in bucket_uri.list_bucket(prefix=prefix,
                                              delimiter=delimiter,
                                              headers=self.headers,
                                              all_versions=self.all_versions):
              # Check that the prefix regex matches rstripped key.name (to
              # correspond with the rstripped prefix_wildcard from
              # _BuildBucketFilterStrings()).
              if prog.match(key.name.rstrip('/')):
                if suffix_wildcard and key.name.rstrip('/') != suffix_wildcard:
                  if isinstance(key, Prefix):
                    # There's more wildcard left to expand.
                    uris_needing_expansion.append(
                        uri.clone_replace_name(key.name.rstrip('/') + '/'
                        + suffix_wildcard))
                else:
                  # Done expanding.
                  expanded_uri = uri.clone_replace_key(key)

                  if isinstance(key, Prefix):
                    yield BucketListingRef(expanded_uri, key=None, prefix=key,
                                           headers=self.headers)
                  else:
                    if self.all_versions:
                      yield BucketListingRef(expanded_uri, key=key, prefix=None,
                                             headers=self.headers)
                    else:
                      # Yield BLR wrapping version-less URI.
                      yield BucketListingRef(expanded_uri.clone_replace_name(
                          expanded_uri.object_name), key=key, prefix=None,
                          headers=self.headers)

  def _BuildBucketFilterStrings(self, wildcard):
    """
    Builds strings needed for querying a bucket and filtering results to
    implement wildcard object name matching.

    Args:
      wildcard: The wildcard string to match to objects.

    Returns:
      (prefix, delimiter, prefix_wildcard, suffix_wildcard)
      where:
        prefix is the prefix to be sent in bucket GET request.
        delimiter is the delimiter to be sent in bucket GET request.
        prefix_wildcard is the wildcard to be used to filter bucket GET results.
        suffix_wildcard is wildcard to be appended to filtered bucket GET
          results for next wildcard expansion iteration.
      For example, given the wildcard gs://bucket/abc/d*e/f*.txt we
      would build prefix= abc/d, delimiter=/, prefix_wildcard=d*e, and
      suffix_wildcard=f*.txt. Using this prefix and delimiter for a bucket
      listing request will then produce a listing result set that can be
      filtered using this prefix_wildcard; and we'd use this suffix_wildcard
      to feed into the next call(s) to _BuildBucketFilterStrings(), for the
      next iteration of listing/filtering.

    Raises:
      AssertionError if wildcard doesn't contain any wildcard chars.
    """
    # Generate a request prefix if the object name part of the wildcard starts
    # with a non-wildcard string (e.g., that's true for 'gs://bucket/abc*xyz').
    match = WILDCARD_REGEX.search(wildcard)
    if not match:
      # Input "wildcard" has no wildcard chars, so just return tuple that will
      # cause a bucket listing to match the given input wildcard. Example: if
      # previous iteration yielded gs://bucket/dir/ with suffix_wildcard abc,
      # the next iteration will call _BuildBucketFilterStrings() with
      # gs://bucket/dir/abc, and we will return prefix ='dir/abc',
      # delimiter='/', prefix_wildcard='dir/abc', and suffix_wildcard=''.
      prefix = wildcard
      delimiter = '/'
      prefix_wildcard = wildcard
      suffix_wildcard = ''
    else:
      if match.start() > 0:
        # Wildcard does not occur at beginning of object name, so construct a
        # prefix string to send to server.
        prefix = wildcard[:match.start()]
        wildcard_part = wildcard[match.start():]
      else:
        prefix = None
        wildcard_part = wildcard
      end = wildcard_part.find('/')
      if end != -1:
        wildcard_part = wildcard_part[:end+1]
      # Remove trailing '/' so we will match gs://bucket/abc* as well as
      # gs://bucket/abc*/ with the same wildcard regex.
      prefix_wildcard = ((prefix or '') + wildcard_part).rstrip('/')
      suffix_wildcard = wildcard[match.end():]
      end = suffix_wildcard.find('/')
      if end == -1:
        suffix_wildcard = ''
      else:
        suffix_wildcard = suffix_wildcard[end+1:]
      # To implement recursive (**) wildcarding, if prefix_wildcard
      # suffix_wildcard starts with '**' don't send a delimiter, and combine
      # suffix_wildcard at end of prefix_wildcard.
      if prefix_wildcard.find('**') != -1:
        delimiter = None
        prefix_wildcard = prefix_wildcard + suffix_wildcard
        suffix_wildcard = ''
      else:
        delimiter = '/'
        delim_pos = suffix_wildcard.find(delimiter)
    # The following debug output is useful for tracing how the algorithm
    # walks through a multi-part wildcard like gs://bucket/abc/d*e/f*.txt
    if self.debug > 1:
      sys.stderr.write(
          'DEBUG: wildcard=%s, prefix=%s, delimiter=%s, '
          'prefix_wildcard=%s, suffix_wildcard=%s\n' %
          (wildcard, prefix, delimiter, prefix_wildcard, suffix_wildcard))
    return (prefix, delimiter, prefix_wildcard, suffix_wildcard)

  def IterKeys(self):
    """
    Convenience iterator that runs underlying iterator and returns Key for each
    iteration.

    Yields:
      Subclass of boto.s3.key.Key, or empty iterator if no matches.

    Raises:
      WildcardException: for bucket-only uri.
    """
    for bucket_listing_ref in self. __iter__():
      if bucket_listing_ref.HasKey():
        yield bucket_listing_ref.GetKey()

  def IterUris(self):
    """
    Convenience iterator that runs underlying iterator and returns StorageUri
    for each iteration.

    Yields:
      StorageUri, or empty iterator if no matches.
    """
    for bucket_listing_ref in self. __iter__():
      yield bucket_listing_ref.GetUri()

  def IterUrisForKeys(self):
    """
    Convenience iterator that runs underlying iterator and returns the
    StorageUri for each iterated BucketListingRef that has a Key.

    Yields:
      StorageUri, or empty iterator if no matches.
    """
    for bucket_listing_ref in self. __iter__():
      if bucket_listing_ref.HasKey():
        yield bucket_listing_ref.GetUri()


class FileWildcardIterator(WildcardIterator):
  """WildcardIterator subclass for files and directories.

  If you use recursive wildcards ('**') only a single such wildcard is
  supported. For example you could use the wildcard '**/*.txt' to list all .txt
  files in any subdirectory of the current directory, but you couldn't use a
  wildcard like '**/abc/**/*.txt' (which would, if supported, let you find .txt
  files in any subdirectory named 'abc').
  """

  def __init__(self, wildcard_uri, headers=None, debug=0):
    """
    Instantiate an iterator over BucketListingRefs matching given wildcard URI.

    Args:
      wildcard_uri: StorageUri that contains the wildcard to iterate.
      headers: Dictionary containing optional HTTP headers to pass to boto.
      debug: Debug level to pass in to boto connection (range 0..3).
    """
    self.wildcard_uri = wildcard_uri
    self.headers = headers
    self.debug = debug

  def __iter__(self):
    wildcard = self.wildcard_uri.object_name
    match = re.search('\*\*', wildcard)
    if match:
      # Recursive wildcarding request ('.../**/...').
      # Example input: wildcard = '/tmp/tmp2pQJAX/**/*'
      base_dir = wildcard[:match.start()-1]
      remaining_wildcard = wildcard[match.start()+2:]
      # At this point for the above example base_dir = '/tmp/tmp2pQJAX' and
      # remaining_wildcard = '/*'
      if remaining_wildcard.startswith('*'):
        raise WildcardException('Invalid wildcard with more than 2 consecutive '
                                '*s (%s)' % wildcard)
      # If there was no remaining wildcard past the recursive wildcard,
      # treat it as if it were a '*'. For example, file://tmp/** is equivalent
      # to file://tmp/**/*
      if not remaining_wildcard:
        remaining_wildcard = '*'
      # Skip slash(es).
      remaining_wildcard = remaining_wildcard.lstrip(os.sep)
      filepaths = []
      for dirpath, unused_dirnames, filenames in os.walk(base_dir):
        filepaths.extend(
            os.path.join(dirpath, f) for f in fnmatch.filter(filenames,
                                                             remaining_wildcard)
        )
    else:
      # Not a recursive wildcarding request.
      filepaths = glob.glob(wildcard)
    for filepath in filepaths:
      expanded_uri = self.wildcard_uri.clone_replace_name(filepath)
      yield BucketListingRef(expanded_uri)

  def IterKeys(self):
    """
    Placeholder to allow polymorphic use of WildcardIterator.

    Raises:
      WildcardException: in all cases.
    """
    raise WildcardException(
        'Iterating over Keys not possible for file wildcards')

  def IterUris(self):
    """
    Convenience iterator that runs underlying iterator and returns StorageUri
    for each iteration.

    Yields:
      StorageUri, or empty iterator if no matches.
    """
    for bucket_listing_ref in self. __iter__():
      yield bucket_listing_ref.GetUri()


class WildcardException(StandardError):
  """Exception thrown for invalid wildcard URIs."""

  def __init__(self, reason):
    StandardError.__init__(self)
    self.reason = reason

  def __repr__(self):
    return 'WildcardException: %s' % self.reason

  def __str__(self):
    return 'WildcardException: %s' % self.reason


def wildcard_iterator(uri_or_str, proj_id_handler,
                      bucket_storage_uri_class=BucketStorageUri,
                      all_versions=False,
                      headers=None, debug=0):
  """Instantiate a WildCardIterator for the given StorageUri.

  Args:
    uri_or_str: StorageUri or URI string naming wildcard objects to iterate.
    proj_id_handler: ProjectIdHandler to use for current command.
    bucket_storage_uri_class: BucketStorageUri interface.
        Settable for testing/mocking.
    headers: Dictionary containing optional HTTP headers to pass to boto.
    debug: Debug level to pass in to boto connection (range 0..3).

  Returns:
    A WildcardIterator that handles the requested iteration.
  """

  if isinstance(uri_or_str, basestring):
    # Disable enforce_bucket_naming, to allow bucket names containing wildcard
    # chars.
    uri = boto.storage_uri(
        uri_or_str, debug=debug, validate=False,
        bucket_storage_uri_class=bucket_storage_uri_class,
        suppress_consec_slashes=False)
  else:
    uri = uri_or_str

  if uri.is_cloud_uri():
    return CloudWildcardIterator(
        uri, proj_id_handler,
        bucket_storage_uri_class=bucket_storage_uri_class,
        all_versions=all_versions,
        headers=headers,
        debug=debug)
  elif uri.is_file_uri():
    return FileWildcardIterator(uri, headers=headers, debug=debug)
  else:
    raise WildcardException('Unexpected type of StorageUri (%s)' % uri)


def ContainsWildcard(uri_or_str):
  """Checks whether uri_or_str contains a wildcard.

  Args:
    uri_or_str: StorageUri or URI string to check.

  Returns:
    bool indicator.
  """
  if isinstance(uri_or_str, basestring):
    return bool(WILDCARD_REGEX.search(uri_or_str))
  else:
    return bool(WILDCARD_REGEX.search(uri_or_str.uri))

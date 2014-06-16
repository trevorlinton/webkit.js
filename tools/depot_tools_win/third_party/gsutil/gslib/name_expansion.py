# Copyright 2012 Google Inc. All Rights Reserved.
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

import copy
import threading
import wildcard_iterator

from bucket_listing_ref import BucketListingRef
from gslib.exception import CommandException
from gslib.plurality_checkable_iterator import PluralityCheckableIterator
from gslib.storage_uri_builder import StorageUriBuilder
from wildcard_iterator import ContainsWildcard

"""
Name expansion support for the various ways gsutil lets users refer to
collections of data (via explicit wildcarding as well as directory,
bucket, and bucket subdir implicit wildcarding). This class encapsulates
the various rules for determining how these expansions are done.
"""


class NameExpansionResult(object):
  """
  Holds one fully expanded result from iterating over NameExpansionIterator.

  The member data in this class need to be pickleable because
  NameExpansionResult instances are passed through Multiprocessing.Queue. In
  particular, don't include any boto state like StorageUri, since that pulls
  in a big tree of objects, some of which aren't pickleable (and even if
  they were, pickling/unpickling such a large object tree would result in
  significant overhead).

  The state held in this object is needed for handling the various naming cases
  (e.g., copying from a single source URI to a directory generates different
  dest URI names than copying multiple URIs to a directory, to be consistent
  with naming rules used by the Unix cp command). For more details see comments
  in _NameExpansionIterator.
  """

  def __init__(self, src_uri_str, is_multi_src_request,
               src_uri_expands_to_multi, names_container, expanded_uri_str,
               have_existing_dst_container=None, is_latest=False):
    """
    Args:
      src_uri_str: string representation of StorageUri that was expanded.
      is_multi_src_request: bool indicator whether src_uri_str expanded to more
          than 1 BucketListingRef.
      src_uri_expands_to_multi: bool indicator whether the current src_uri
          expanded to more than 1 BucketListingRef.
      names_container: Bool indicator whether src_uri names a container.
      expanded_uri_str: string representation of StorageUri to which src_uri_str
          expands.
      have_existing_dst_container: bool indicator whether this is a copy
          request to an existing bucket, bucket subdir, or directory. Default
          None value should be used in cases where this is not needed (commands
          other than cp).
      is_latest: Bool indicating that the result represents the object's current
          version.
    """
    self.src_uri_str = src_uri_str
    self.is_multi_src_request = is_multi_src_request
    self.src_uri_expands_to_multi = src_uri_expands_to_multi
    self.names_container = names_container
    self.expanded_uri_str = expanded_uri_str
    self.have_existing_dst_container = have_existing_dst_container
    self.is_latest = is_latest

  def __repr__(self):
    return '%s' % self.expanded_uri_str

  def IsEmpty(self):
    """Returns True if name expansion yielded no matches."""
    return self.expanded_blr is None

  def GetSrcUriStr(self):
    """Returns the string representation of the StorageUri that was expanded."""
    return self.src_uri_str

  def IsMultiSrcRequest(self):
    """
    Returns bool indicator whether name expansion resulted in more than 0
    BucketListingRef.
    """
    return self.is_multi_src_request

  def SrcUriExpandsToMulti(self):
    """
    Returns bool indicator whether the current src_uri expanded to more than
    1 BucketListingRef
    """
    return self.src_uri_expands_to_multi

  def NamesContainer(self):
    """
    Returns bool indicator of whether src_uri names a directory, bucket, or
    bucket subdir.
    """
    return self.names_container

  def GetExpandedUriStr(self):
    """
    Returns the string representation of StorageUri to which src_uri_str
    expands.
    """
    return self.expanded_uri_str

  def HaveExistingDstContainer(self):
    """Returns bool indicator whether this is a copy request to an
       existing bucket, bucket subdir, or directory, or None if not
       relevant."""
    return self.have_existing_dst_container


class _NameExpansionIterator(object):
  """
  Iterates over all src_uris, expanding wildcards, object-less bucket names,
  subdir bucket names, and directory names, generating a flat listing of all
  the matching objects/files.

  You should instantiate this object using the static factory function
  NameExpansionIterator, because consumers of this iterator need the
  PluralityCheckableIterator wrapper built by that function.

  Yields:
    gslib.name_expansion.NameExpansionResult.

  Raises:
    CommandException: if errors encountered.
  """

  def __init__(self, command_name, proj_id_handler, headers, debug,
               bucket_storage_uri_class, uri_strs, recursion_requested,
               have_existing_dst_container=None, flat=True,
               all_versions=False, for_all_version_delete=False):
    """
    Args:
      command_name: name of command being run.
      proj_id_handler: ProjectIdHandler to use for current command.
      headers: Dictionary containing optional HTTP headers to pass to boto.
      debug: Debug level to pass in to boto connection (range 0..3).
      bucket_storage_uri_class: Class to instantiate for cloud StorageUris.
          Settable for testing/mocking.
      uri_strs: PluralityCheckableIterator of URI strings needing expansion.
      recursion_requested: True if -R specified on command-line.
      have_existing_dst_container: Bool indicator whether this is a copy
          request to an existing bucket, bucket subdir, or directory. Default
          None value should be used in cases where this is not needed (commands
          other than cp).
      flat: Bool indicating whether bucket listings should be flattened, i.e.,
          so the mapped-to results contain objects spanning subdirectories.
      all_versions: Bool indicating whether to iterate over all object versions.
      for_all_version_delete: Bool indicating whether this is for an all-version
          delete.

    Examples of _NameExpansionIterator with flat=True:
      - Calling with one of the uri_strs being 'gs://bucket' will enumerate all
        top-level objects, as will 'gs://bucket/' and 'gs://bucket/*'.
      - 'gs://bucket/**' will enumerate all objects in the bucket.
      - 'gs://bucket/abc' will enumerate all next-level objects under directory
        abc (i.e., not including subdirectories of abc) if gs://bucket/abc/*
        matches any objects; otherwise it will enumerate the single name
        gs://bucket/abc
      - 'gs://bucket/abc/**' will enumerate all objects under abc or any of its
        subdirectories.
      - 'file:///tmp' will enumerate all files under /tmp, as will
        'file:///tmp/*'
      - 'file:///tmp/**' will enumerate all files under /tmp or any of its
        subdirectories.

    Example if flat=False: calling with gs://bucket/abc/* lists matching objects
    or subdirs, but not sub-subdirs or objects beneath subdirs.

    Note: In step-by-step comments below we give examples assuming there's a
    gs://bucket with object paths:
      abcd/o1.txt
      abcd/o2.txt
      xyz/o1.txt
      xyz/o2.txt
    and a directory file://dir with file paths:
      dir/a.txt
      dir/b.txt
      dir/c/
    """
    self.command_name = command_name
    self.proj_id_handler = proj_id_handler
    self.headers = headers
    self.debug = debug
    self.bucket_storage_uri_class = bucket_storage_uri_class
    self.suri_builder = StorageUriBuilder(debug, bucket_storage_uri_class)
    self.uri_strs = uri_strs
    self.recursion_requested = recursion_requested
    self.have_existing_dst_container = have_existing_dst_container
    self.flat = flat
    self.all_versions = all_versions

    # Map holding wildcard strings to use for flat vs subdir-by-subdir listings.
    # (A flat listing means show all objects expanded all the way down.)
    self._flatness_wildcard = {True: '**', False: '*'}

  def __iter__(self):
    for uri_str in self.uri_strs:
      # Step 1: Expand any explicitly specified wildcards. The output from this
      # step is an iterator of BucketListingRef.
      # Starting with gs://buck*/abc* this step would expand to gs://bucket/abcd
      if ContainsWildcard(uri_str):
        post_step1_iter = self._WildcardIterator(uri_str)
      else:
        suri = self.suri_builder.StorageUri(uri_str)
        post_step1_iter = iter([BucketListingRef(suri)])
      post_step1_iter = PluralityCheckableIterator(post_step1_iter)

      # Step 2: Expand bucket subdirs and versions. The output from this
      # step is an iterator of (names_container, BucketListingRef).
      # Starting with gs://bucket/abcd this step would expand to:
      #   iter([(True, abcd/o1.txt), (True, abcd/o2.txt)]).
      if self.flat and self.recursion_requested:
        post_step2_iter = _ImplicitBucketSubdirIterator(self,
            post_step1_iter, self.flat)
      elif self.all_versions:
        post_step2_iter = _AllVersionIterator(self, post_step1_iter,
                                              headers=self.headers)
      else:
        post_step2_iter = _NonContainerTuplifyIterator(post_step1_iter)
      post_step2_iter = PluralityCheckableIterator(post_step2_iter)

      # Step 3. Expand directories and buckets. This step yields the iterated
      # values. Starting with gs://bucket this step would expand to:
      #  [abcd/o1.txt, abcd/o2.txt, xyz/o1.txt, xyz/o2.txt]
      # Starting with file://dir this step would expand to:
      #  [dir/a.txt, dir/b.txt, dir/c/]
      exp_src_bucket_listing_refs = []
      wc = self._flatness_wildcard[self.flat]
      src_uri_expands_to_multi = (post_step1_iter.has_plurality()
                                  or post_step2_iter.has_plurality())
      is_multi_src_request = (self.uri_strs.has_plurality()
                              or src_uri_expands_to_multi)

      if post_step2_iter.is_empty():
        raise CommandException('No URIs matched: %s' % uri_str)
      for (names_container, blr) in post_step2_iter:
        if (not blr.GetUri().names_container()
            and (self.flat or not blr.HasPrefix())):
          yield NameExpansionResult(uri_str, is_multi_src_request,
                                    src_uri_expands_to_multi, names_container,
                                    blr.GetUriString(),
                                    self.have_existing_dst_container,
                                    is_latest=blr.IsLatest())
          continue
        if not self.recursion_requested:
          if blr.GetUri().is_file_uri():
            desc = 'directory'
          else:
            desc = 'bucket'
          print 'Omitting %s "%s". (Did you mean to do %s -R?)' % (
              desc, blr.GetUri(), self.command_name)
          continue
        if blr.GetUri().is_file_uri():
          # Convert dir to implicit recursive wildcard.
          uri_to_iterate = '%s/%s' % (blr.GetUriString(), wc)
        else:
          # Convert bucket to implicit recursive wildcard.
          uri_to_iterate = blr.GetUri().clone_replace_name(wc)
        wc_iter = PluralityCheckableIterator(
            self._WildcardIterator(uri_to_iterate))
        src_uri_expands_to_multi = (src_uri_expands_to_multi
                                    or wc_iter.has_plurality())
        is_multi_src_request = (self.uri_strs.has_plurality()
                                or src_uri_expands_to_multi)
        for blr in wc_iter:
          yield NameExpansionResult(uri_str, is_multi_src_request,
                                    src_uri_expands_to_multi, True,
                                    blr.GetUriString(),
                                    self.have_existing_dst_container,
                                    is_latest=blr.IsLatest())

  def _WildcardIterator(self, uri_or_str):
    """
    Helper to instantiate gslib.WildcardIterator. Args are same as
    gslib.WildcardIterator interface, but this method fills in most of the
    values from instance state.

    Args:
      uri_or_str: StorageUri or URI string naming wildcard objects to iterate.
    """
    return wildcard_iterator.wildcard_iterator(
        uri_or_str, self.proj_id_handler,
        bucket_storage_uri_class=self.bucket_storage_uri_class,
        headers=self.headers, debug=self.debug,
        all_versions=self.all_versions)


def NameExpansionIterator(command_name, proj_id_handler, headers, debug,
                          bucket_storage_uri_class, uri_strs,
                          recursion_requested,
                          have_existing_dst_container=None, flat=True,
                          all_versions=False,
                          for_all_version_delete=False):
  """
  Static factory function for instantiating _NameExpansionIterator, which
  wraps the resulting iterator in a PluralityCheckableIterator and checks
  that it is non-empty. Also, allows uri_strs can be either an array or an
  iterator.

  Args:
    command_name: name of command being run.
    proj_id_handler: ProjectIdHandler to use for current command.
    headers: Dictionary containing optional HTTP headers to pass to boto.
    debug: Debug level to pass in to boto connection (range 0..3).
    bucket_storage_uri_class: Class to instantiate for cloud StorageUris.
        Settable for testing/mocking.
    uri_strs: PluralityCheckableIterator of URI strings needing expansion.
    recursion_requested: True if -R specified on command-line.
    have_existing_dst_container: Bool indicator whether this is a copy
        request to an existing bucket, bucket subdir, or directory. Default
        None value should be used in cases where this is not needed (commands
        other than cp).
    flat: Bool indicating whether bucket listings should be flattened, i.e.,
        so the mapped-to results contain objects spanning subdirectories.
    all_versions: Bool indicating whether to iterate over all object versions.
    for_all_version_delete: Bool indicating whether this is for an all-version
        delete.

  Examples of ExpandWildcardsAndContainers with flat=True:
    - Calling with one of the uri_strs being 'gs://bucket' will enumerate all
      top-level objects, as will 'gs://bucket/' and 'gs://bucket/*'.
    - 'gs://bucket/**' will enumerate all objects in the bucket.
    - 'gs://bucket/abc' will enumerate all next-level objects under directory
      abc (i.e., not including subdirectories of abc) if gs://bucket/abc/*
      matches any objects; otherwise it will enumerate the single name
      gs://bucket/abc
    - 'gs://bucket/abc/**' will enumerate all objects under abc or any of its
      subdirectories.
    - 'file:///tmp' will enumerate all files under /tmp, as will
      'file:///tmp/*'
    - 'file:///tmp/**' will enumerate all files under /tmp or any of its
      subdirectories.

  Example if flat=False: calling with gs://bucket/abc/* lists matching objects
  or subdirs, but not sub-subdirs or objects beneath subdirs.

  Note: In step-by-step comments below we give examples assuming there's a
  gs://bucket with object paths:
    abcd/o1.txt
    abcd/o2.txt
    xyz/o1.txt
    xyz/o2.txt
  and a directory file://dir with file paths:
    dir/a.txt
    dir/b.txt
    dir/c/
  """
  uri_strs = PluralityCheckableIterator(uri_strs)
  name_expansion_iterator = _NameExpansionIterator(
      command_name, proj_id_handler, headers, debug, bucket_storage_uri_class,
      uri_strs, recursion_requested, have_existing_dst_container, flat,
      all_versions=all_versions, for_all_version_delete=for_all_version_delete)
  name_expansion_iterator = PluralityCheckableIterator(name_expansion_iterator)
  if name_expansion_iterator.is_empty():
    raise CommandException('No URIs matched')
  return name_expansion_iterator


class NameExpansionIteratorQueue(object):
  """
  Wrapper around NameExpansionIterator that provides a Multiprocessing.Queue
  facade.

  Only a blocking get() function can be called, and the block and timeout
  params on that function are ignored. All other class functions raise
  NotImplementedError.

  This class is thread safe.
  """

  def __init__(self, name_expansion_iterator, final_value):
    self.name_expansion_iterator = name_expansion_iterator
    self.final_value = final_value
    self.lock = threading.Lock()

  def qsize(self):
    raise NotImplementedError(
        "NameExpansionIteratorQueue.qsize() not implemented")

  def empty(self):
    raise NotImplementedError(
        "NameExpansionIteratorQueue.empty() not implemented")

  def full(self):
    raise NotImplementedError(
        "NameExpansionIteratorQueue.full() not implemented")

  def put(self, obj=None, block=None, timeout=None):
    raise NotImplementedError(
        "NameExpansionIteratorQueue.put() not implemented")

  def put_nowait(self, obj):
    raise NotImplementedError(
        "NameExpansionIteratorQueue.put_nowait() not implemented")

  def get(self, block=None, timeout=None):
    self.lock.acquire()
    try:
      if self.name_expansion_iterator.is_empty():
        return self.final_value
      return self.name_expansion_iterator.next()
    finally:
      self.lock.release()

  def get_nowait(self):
    raise NotImplementedError(
        "NameExpansionIteratorQueue.get_nowait() not implemented")

  def get_no_wait(self):
    raise NotImplementedError(
        "NameExpansionIteratorQueue.get_no_wait() not implemented")

  def close(self):
     raise NotImplementedError(
         "NameExpansionIteratorQueue.close() not implemented")

  def join_thread(self):
    raise NotImplementedError(
        "NameExpansionIteratorQueue.join_thread() not implemented")

  def cancel_join_thread(self):
    raise NotImplementedError(
        "NameExpansionIteratorQueue.cancel_join_thread() not implemented")


class _NonContainerTuplifyIterator(object):
  """
  Iterator that produces the tuple (False, blr) for each iteration
  of blr_iter. Used for cases where blr_iter iterates over a set of
  BucketListingRefs known not to name containers.
  """

  def __init__(self, blr_iter):
    """
    Args:
      blr_iter: iterator of BucketListingRef.
    """
    self.blr_iter = blr_iter

  def __iter__(self):
    for blr in self.blr_iter:
      yield (False, blr)


class _ImplicitBucketSubdirIterator(object):

  """
  Iterator wrapper that iterates over blr_iter, performing implicit bucket
  subdir expansion.

  Each iteration yields tuple (names_container, expanded BucketListingRefs)
    where names_container is true if URI names a directory, bucket,
    or bucket subdir (vs how StorageUri.names_container() doesn't
    handle latter case).

  For example, iterating over [BucketListingRef("gs://abc")] would expand to:
    [BucketListingRef("gs://abc/o1"), BucketListingRef("gs://abc/o2")]
  if those subdir objects exist, and [BucketListingRef("gs://abc") otherwise.
  """

  def __init__(self, name_expansion_instance, blr_iter, flat):
    """
    Args:
      name_expansion_instance: calling instance of NameExpansion class.
      blr_iter: iterator of BucketListingRef.
      flat: bool indicating whether bucket listings should be flattened, i.e.,
          so the mapped-to results contain objects spanning subdirectories.
    """
    self.blr_iter = blr_iter
    self.name_expansion_instance = name_expansion_instance
    self.flat = flat

  def __iter__(self):
    for blr in self.blr_iter:
      uri = blr.GetUri()
      if uri.names_object():
        # URI could be a bucket subdir.
        implicit_subdir_iterator = PluralityCheckableIterator(
            self.name_expansion_instance._WildcardIterator(
                self.name_expansion_instance.suri_builder.StorageUri(
                    '%s/%s' % (uri.uri.rstrip('/'),
                    self.name_expansion_instance._flatness_wildcard[
                        self.flat]))))
        if not implicit_subdir_iterator.is_empty():
          for exp_blr in implicit_subdir_iterator:
            yield (True, exp_blr)
        else:
          yield (False, blr)
      else:
        yield (False, blr)

class _AllVersionIterator(object):
  """
  Iterator wrapper that iterates over blr_iter, performing implicit version
  expansion.

  Output behavior is identical to that in _ImplicitBucketSubdirIterator above.

  For example, iterating over [BucketListingRef("gs://abc/o1")] would expand to:
    [BucketListingRef("gs://abc/o1#1234"), BucketListingRef("gs://abc/o1#1235")]
  """

  def __init__(self, name_expansion_instance, blr_iter, headers=None):
    """
    Args:
      name_expansion_instance: calling instance of NameExpansion class.
      blr_iter: iterator of BucketListingRef.
      flat: bool indicating whether bucket listings should be flattened, i.e.,
          so the mapped-to results contain objects spanning subdirectories.
    """
    self.blr_iter = blr_iter
    self.name_expansion_instance = name_expansion_instance
    self.headers = headers

  def __iter__(self):
    empty = True
    for blr in self.blr_iter:
      uri = blr.GetUri()
      if not uri.names_object():
        empty = False
        yield (True, blr)
        break
      for key in uri.list_bucket(
          prefix=uri.object_name, headers=self.headers, all_versions=True):
        if key.name != uri.object_name:
          # The desired entries will be alphabetically first in this listing.
          break
        version_blr = BucketListingRef(uri.clone_replace_key(key), key=key)
        empty = False
        yield (False, version_blr)
      # If no version exists, yield the unversioned blr, and let the consuming
      # operation fail. This mirrors behavior in _ImplicitBucketSubdirIterator.
      if empty:
        yield (False, blr)


# Copyright 2011 Google Inc. All Rights Reserved.
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

import boto

from boto.exception import GSResponseError
from gslib.command import Command
from gslib.command import COMMAND_NAME
from gslib.command import COMMAND_NAME_ALIASES
from gslib.command import CONFIG_REQUIRED
from gslib.command import FILE_URIS_OK
from gslib.command import MAX_ARGS
from gslib.command import MIN_ARGS
from gslib.command import PROVIDER_URIS_OK
from gslib.command import SUPPORTED_SUB_ARGS
from gslib.command import URIS_START_ARG
from gslib.exception import CommandException
from gslib.help_provider import HELP_NAME
from gslib.help_provider import HELP_NAME_ALIASES
from gslib.help_provider import HELP_ONE_LINE_SUMMARY
from gslib.help_provider import HELP_TEXT
from gslib.help_provider import HelpType
from gslib.help_provider import HELP_TYPE
from gslib.name_expansion import NameExpansionIterator
from gslib.util import NO_MAX

_detailed_help_text = ("""
<B>SYNOPSIS</B>
  gsutil rm [-f] [-R] uri...


<B>DESCRIPTION</B>
  The gsutil rm command removes objects.
  For example, the command:

    gsutil rm gs://bucket/subdir/*

  will remove all objects in gs://bucket/subdir, but not in any of its
  sub-directories. In contrast:

    gsutil rm gs://bucket/subdir/**

  will remove all objects under gs://bucket/subdir or any of its
  subdirectories.

  You can also use the -R option to specify recursive object deletion. Thus, for
  example, the following two commands will both remove all objects in a bucket:

    gsutil rm gs://bucket/**
    gsutil rm -R gs://bucket

  If you have a large number of objects to remove you might want to use the
  gsutil -m option, to perform a parallel (multi-threaded/multi-processing)
  removes:

    gsutil -m rm -R gs://my_bucket/subdir

  Note that gsutil rm will refuse to remove files from the local
  file system. For example this will fail:

    gsutil rm *.txt


<B>OPTIONS</B>
  -f          Continues silently (without printing error messages) despite
              errors when removing multiple objects.

  -R, -r      Causes bucket contents to be removed recursively (i.e., including
              all objects and subdirectories). Will not delete the bucket
              itself; you need to run the gsutil rb command separately to do
              that.

  -a          Delete all versions of an object.
""")


class RmCommand(Command):
  """Implementation of gsutil rm command."""

  # Command specification (processed by parent class).
  command_spec = {
    # Name of command.
    COMMAND_NAME : 'rm',
    # List of command name aliases.
    COMMAND_NAME_ALIASES : ['del', 'delete', 'remove'],
    # Min number of args required by this command.
    MIN_ARGS : 1,
    # Max number of args required by this command, or NO_MAX.
    MAX_ARGS : NO_MAX,
    # Getopt-style string specifying acceptable sub args.
    SUPPORTED_SUB_ARGS : 'afrRv',
    # True if file URIs acceptable for this command.
    FILE_URIS_OK : False,
    # True if provider-only URIs acceptable for this command.
    PROVIDER_URIS_OK : False,
    # Index in args of first URI arg.
    URIS_START_ARG : 0,
    # True if must configure gsutil before running command.
    CONFIG_REQUIRED : True,
  }
  help_spec = {
    # Name of command or auxiliary help info for which this help applies.
    HELP_NAME : 'rm',
    # List of help name aliases.
    HELP_NAME_ALIASES : ['del', 'delete', 'remove'],
    # Type of help:
    HELP_TYPE : HelpType.COMMAND_HELP,
    # One line summary of this help.
    HELP_ONE_LINE_SUMMARY : 'Remove objects',
    # The full help text.
    HELP_TEXT : _detailed_help_text,
  }

  # Command entry point.
  def RunCommand(self):
    # self.recursion_requested initialized in command.py (so can be checked
    # in parent class for all commands).
    self.continue_on_error = False
    self.all_versions = False
    if self.sub_opts:
      for o, unused_a in self.sub_opts:
        if o == '-a':
          self.all_versions = True
        elif o == '-f':
          self.continue_on_error = True
        elif o == '-r' or o == '-R':
          self.recursion_requested = True
        elif o == '-v':
          self.THREADED_LOGGER.info('WARNING: The %s -v option is no longer'
                                    ' needed, and will eventually be removed.\n'
                                    % self.command_name)

    # Used to track if any files failed to be removed.
    self.everything_removed_okay = True

    # Tracks if any URIs matched the given args.

    remove_func = self._MkRemoveFunc()
    exception_handler = self._MkRemoveExceptionHandler()

    try:
      # Expand wildcards, dirs, buckets, and bucket subdirs in URIs.
      name_expansion_iterator = NameExpansionIterator(
          self.command_name, self.proj_id_handler, self.headers, self.debug,
          self.bucket_storage_uri_class, self.args, self.recursion_requested,
          flat=self.recursion_requested, all_versions=self.all_versions)

      # Perform remove requests in parallel (-m) mode, if requested, using
      # configured number of parallel processes and threads. Otherwise,
      # perform requests with sequential function calls in current process.
      self.Apply(remove_func, name_expansion_iterator, exception_handler)

    # Assuming the bucket has versioning enabled, uri's that don't map to
    # objects should throw an error even with all_versions, since the prior
    # round of deletes only sends objects to a history table.
    # This assumption that rm -a is only called for versioned buckets should be
    # corrected, but the fix is non-trivial.
    except CommandException as e:
      if not self.continue_on_error:
        raise
    except GSResponseError, e:
      if not self.continue_on_error:
        raise

    if not self.everything_removed_okay and not self.continue_on_error:
      raise CommandException('Some files could not be removed.')

    # If this was a gsutil rm -r command covering any bucket subdirs,
    # remove any dir_$folder$ objects (which are created by various web UI
    # tools to simulate folders).
    if self.recursion_requested:
      folder_object_wildcards = []
      for uri_str in self.args:
        uri = self.suri_builder.StorageUri(uri_str)
        if uri.names_object:
          folder_object_wildcards.append('%s**_$folder$' % uri)
      if len(folder_object_wildcards):
        self.continue_on_error = True
        try:
          name_expansion_iterator = NameExpansionIterator(
              self.command_name, self.proj_id_handler, self.headers, self.debug,
              self.bucket_storage_uri_class, folder_object_wildcards,
              self.recursion_requested, flat=True,
              all_versions=self.all_versions)
          self.Apply(remove_func, name_expansion_iterator, exception_handler)
        except CommandException as e:
          # Ignore exception from name expansion due to an absent folder file.
          if not e.reason.startswith('No URIs matched:'):
            raise

    return 0

  def _MkRemoveExceptionHandler(self):
    def RemoveExceptionHandler(e):
      """Simple exception handler to allow post-completion status."""
      self.THREADED_LOGGER.error(str(e))
      self.everything_removed_okay = False
    return RemoveExceptionHandler

  def _MkRemoveFunc(self):
    def RemoveFunc(name_expansion_result):
      exp_src_uri = self.suri_builder.StorageUri(
          name_expansion_result.GetExpandedUriStr(),
          is_latest=name_expansion_result.is_latest)
      if exp_src_uri.names_container():
        if exp_src_uri.is_cloud_uri():
          # Before offering advice about how to do rm + rb, ensure those
          # commands won't fail because of bucket naming problems.
          boto.s3.connection.check_lowercase_bucketname(exp_src_uri.bucket_name)
        uri_str = exp_src_uri.object_name.rstrip('/')
        raise CommandException('"rm" command will not remove buckets. To '
                               'delete this/these bucket(s) do:\n\tgsutil rm '
                               '%s/*\n\tgsutil rb %s' % (uri_str, uri_str))

      # Perform delete.
      self.THREADED_LOGGER.info('Removing %s...',
                                name_expansion_result.expanded_uri_str)
      try:
        exp_src_uri.delete_key(validate=False, headers=self.headers)

      except:
        if self.continue_on_error:
          self.everything_removed_okay = False
        else:
          raise
    return RemoveFunc

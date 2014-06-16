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
from gslib.util import NO_MAX

_detailed_help_text = ("""
<B>SYNOPSIS</B>
  gsutil enablelogging -b logging_bucket [-o log_object_prefix] uri...


<B>DESCRIPTION</B>
  Google Cloud Storage offers access logs and storage data in the form of
  CSV files that you can download and view. Access logs provide information
  for all of the requests made on a specified bucket in the last 24 hours,
  while the storage logs provide information about the storage consumption of
  that bucket for the last 24 hour period. The logs and storage data files
  are automatically created as new objects in a bucket that you specify, in
  24 hour intervals.

  The gsutil enablelogging command will enable access logging of the
  buckets named by the specified uris, outputting log files in the specified
  logging_bucket. logging_bucket must already exist, and all URIs must name
  buckets (e.g., gs://bucket). For example, the command:

    gsutil enablelogging -b gs://my_logging_bucket -o AccessLog \\
        gs://my_bucket1 gs://my_bucket2

  will cause all read and write activity to objects in gs://mybucket1 and
  gs://mybucket2 to be logged to objects prefixed with the name "AccessLog",
  with those log objects written to the bucket gs://my_logging_bucket.

  Note that log data may contain sensitive information, so you should make
  sure to set an appropriate default bucket ACL to protect that data. (See
  "gsutil help setdefacl".)

  You can check logging status using the gsutil getlogging command. For log
  format details see "gsutil help getlogging".


<B>OPTIONS</B>
  -b bucket   Specifies the log bucket.

  -o prefix   Specifies the prefix for log object names. Default value
              is the bucket name.
""")


class EnableLoggingCommand(Command):
  """Implementation of gsutil enablelogging command."""

  # Command specification (processed by parent class).
  command_spec = {
    # Name of command.
    COMMAND_NAME : 'enablelogging',
    # List of command name aliases.
    COMMAND_NAME_ALIASES : [],
    # Min number of args required by this command.
    MIN_ARGS : 1,
    # Max number of args required by this command, or NO_MAX.
    MAX_ARGS : NO_MAX,
    # Getopt-style string specifying acceptable sub args.
    SUPPORTED_SUB_ARGS : 'b:o:',
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
    HELP_NAME : 'enablelogging',
    # List of help name aliases.
    HELP_NAME_ALIASES : ['logging', 'logs', 'log'],
    # Type of help:
    HELP_TYPE : HelpType.COMMAND_HELP,
    # One line summary of this help.
    HELP_ONE_LINE_SUMMARY : 'Enable logging on buckets',
    # The full help text.
    HELP_TEXT : _detailed_help_text,
  }

  # Command entry point.
  def RunCommand(self):
    # Disallow multi-provider enablelogging calls, because the schemas
    # differ.
    storage_uri = self.UrisAreForSingleProvider(self.args)
    if not storage_uri:
      raise CommandException('enablelogging command spanning providers not '
                             'allowed.')
    target_bucket_uri = None
    target_prefix = None
    for opt, opt_arg in self.sub_opts:
      if opt == '-b':
        target_bucket_uri = self.suri_builder.StorageUri(opt_arg)
      if opt == '-o':
        target_prefix = opt_arg

    if not target_bucket_uri:
      raise CommandException('enablelogging requires \'-b <log_bucket>\' '
                             'option')
    if not target_bucket_uri.names_bucket():
      raise CommandException('-b option must specify a bucket uri')

    did_some_work = False
    for uri_str in self.args:
      for uri in self.WildcardIterator(uri_str).IterUris():
        if uri.names_object():
          raise CommandException('enablelogging cannot be applied to objects')
        did_some_work = True
        print 'Enabling logging on %s...' % uri
        self.proj_id_handler.FillInProjectHeaderIfNeeded(
            'enablelogging', storage_uri, self.headers)
        uri.enable_logging(target_bucket_uri.bucket_name, target_prefix, False,
                           self.headers)
    if not did_some_work:
      raise CommandException('No URIs matched')

    return 0

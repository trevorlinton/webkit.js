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
  gsutil setversioning [on|off] bucket_uri...


<B>DESCRIPTION</B>
  The Versioning Configuration feature enables you to configure a Google Cloud
  Storage bucket to keep old versions of objects.

  The gsutil setversioning command allows you to enable or suspend versioning
  on one or more buckets.
""")

class SetVersioningCommand(Command):
  """Implementation of gsutil setversioning command."""

  # Command specification (processed by parent class).
  command_spec = {
    # Name of command.
    COMMAND_NAME : 'setversioning',
    # List of command name aliases.
    COMMAND_NAME_ALIASES : [],
    # Min number of args required by this command.
    MIN_ARGS : 1,
    # Max number of args required by this command, or NO_MAX.
    MAX_ARGS : NO_MAX,
    # Getopt-style string specifying acceptable sub args.
    SUPPORTED_SUB_ARGS : '',
    # True if file URIs acceptable for this command.
    FILE_URIS_OK : False,
    # True if provider-only URIs acceptable for this command.
    PROVIDER_URIS_OK : False,
    # Index in args of first URI arg.
    URIS_START_ARG : 1,
    # True if must configure gsutil before running command.
    CONFIG_REQUIRED : True,
  }
  help_spec = {
    # Name of command or auxiliary help info for which this help applies.
    HELP_NAME : 'setversioning',
    # List of help name aliases.
    HELP_NAME_ALIASES : [],
    # Type of help)
    HELP_TYPE : HelpType.COMMAND_HELP,
    # One line summary of this help.
    HELP_ONE_LINE_SUMMARY : 'Enable or suspend versioning for one or more '
                            'buckets',
    # The full help text.
    HELP_TEXT : _detailed_help_text,
  }


  # Command entry point.
  def RunCommand(self):
    versioning_arg = self.args[0].lower()
    if not versioning_arg in ('on', 'off'):
      raise CommandException('Argument to %s must be either [on|off]'
                             % (self.command_name))
    uri_args = self.args[1:]

    # Iterate over URIs, expanding wildcards, and setting the website
    # configuration on each.
    some_matched = False
    for uri_str in uri_args:
      for blr in self.WildcardIterator(uri_str):
        uri = blr.GetUri()
        if not uri.names_bucket():
          raise CommandException('URI %s must name a bucket for the %s command'
                                 % (str(uri), self.command_name))
        some_matched = True
        if versioning_arg == 'on':
          print 'Enabling versioning for %s...' % uri
          uri.configure_versioning(True)
        else:
          print 'Suspending versioning for %s...' % uri
          uri.configure_versioning(False)
    if not some_matched:
      raise CommandException('No URIs matched')

    return 0

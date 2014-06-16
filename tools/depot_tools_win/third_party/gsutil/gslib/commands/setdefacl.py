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
  gsutil setdefacl file-or-canned_acl_name uri...


<B>DESCRIPTION</B>

  The setdefacl command sets default object ACLs for the specified buckets. If
  you specify a default object ACL for a certain bucket, Google Cloud Storage
  applies the default object ACL to all new objects uploaded to that bucket.

  Similar to the setacl command, the file-or-canned_acl_name names either a
  canned ACL or the path to a file that contains ACL XML. (See "gsutil
  help setacl" for examples of editing and setting ACLs via the
  getacl/setacl commands.)

  If you don't set a default object ACL on a bucket, the bucket's default
  object ACL will be project-private.

  Setting a default object ACL on a bucket provides a convenient way
  to ensure newly uploaded objects have a specific ACL, and avoids the
  need to back after the fact and set ACLs on a large number of objects
  for which you forgot to set the ACL at object upload time (which can
  happen if you don't set a default object ACL on a bucket, and get the
  default project-private ACL).
""")


class SetDefAclCommand(Command):
  """Implementation of gsutil setdefacl command."""

  # Command specification (processed by parent class).
  command_spec = {
    # Name of command.
    COMMAND_NAME : 'setdefacl',
    # List of command name aliases.
    COMMAND_NAME_ALIASES : [],
    # Min number of args required by this command.
    MIN_ARGS : 2,
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
    HELP_NAME : 'setdefacl',
    # List of help name aliases.
    HELP_NAME_ALIASES : ['default acl'],
    # Type of help:
    HELP_TYPE : HelpType.COMMAND_HELP,
    # One line summary of this help.
    HELP_ONE_LINE_SUMMARY : 'Set default ACL on buckets',
    # The full help text.
    HELP_TEXT : _detailed_help_text,
  }

  # Command entry point.
  def RunCommand(self):
    if not self.suri_builder.StorageUri(self.args[-1]).names_bucket():
      raise CommandException('URI must name a bucket for the %s command' %
                             self.command_name)
    self.SetAclCommandHelper()
    return 0

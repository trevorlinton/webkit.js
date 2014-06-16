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
from gslib.util import NO_MAX

_detailed_help_text = ("""
<B>SYNOPSIS</B>
  gsutil rb uri...

<B>DESCRIPTION</B>
  The rb command deletes new bucket. Buckets must be empty before you can delete
  them.

  Be certain you want to delete a bucket before you do so, as once it is
  deleted the name becomes available and another user may create a bucket with
  that name. (But see also "DOMAIN NAMED BUCKETS" under "gsutil help naming"
  for help carving out parts of the bucket name space.)
""")


class RbCommand(Command):
  """Implementation of gsutil rb command."""

  # Command specification (processed by parent class).
  command_spec = {
    # Name of command.
    COMMAND_NAME : 'rb',
    # List of command name aliases.
    COMMAND_NAME_ALIASES : [
        'deletebucket', 'removebucket', 'removebuckets', 'rmdir'],
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
    URIS_START_ARG : 0,
    # True if must configure gsutil before running command.
    CONFIG_REQUIRED : True,
  }
  help_spec = {
    # Name of command or auxiliary help info for which this help applies.
    HELP_NAME : 'rb',
    # List of help name aliases.
    HELP_NAME_ALIASES :
        ['deletebucket', 'removebucket', 'removebuckets', 'rmdir'],
    # Type of help:
    HELP_TYPE : HelpType.COMMAND_HELP,
    # One line summary of this help.
    HELP_ONE_LINE_SUMMARY : 'Remove buckets',
    # The full help text.
    HELP_TEXT : _detailed_help_text,
  }

  # Command entry point.
  def RunCommand(self):
    # Expand bucket name wildcards, if any.
    did_some_work = False
    for uri_str in self.args:
      for uri in self.WildcardIterator(uri_str).IterUris():
        if uri.object_name:
          raise CommandException('"rb" command requires a URI with no object '
                                 'name')
        print 'Removing %s...' % uri
        try:
          uri.delete_bucket(self.headers)
        except GSResponseError as e:
          if e.code == 'BucketNotEmpty' and uri.get_versioning_config():
            raise CommandException('Bucket is not empty. Note: this is a '
                                   'versioned bucket, so to delete all objects'
                                   '\nyou need to use:\n\tgsutil rm -ra %s'
                                   % uri)
          else:
            raise
        did_some_work = True
    if not did_some_work:
      raise CommandException('No URIs matched')
    return 0


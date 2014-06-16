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

import sys
import xml

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

_detailed_help_text = ("""
<B>SYNOPSIS</B>
  gsutil getcors uri


<B>DESCRIPTION</B>
  Gets the Cross-Origin Resource Sharing (CORS) configuration for a given
  bucket. This command is supported for buckets only, not objects and you
  can get the CORS settings for only one bucket at a time. The output from
  getcors can be redirected into a file, edited and then updated via the
  setcors sub-command. The CORS configuration is expressed by an XML document
  with the following structure:

  <?xml version="1.0" ?>
  <CorsConfig>
      <Cors>
          <Origins>
              <Origin>origin1.example.com</Origin>
          </Origins>
          <Methods>
              <Method>GET</Method>
          </Methods>
          <ResponseHeaders>
              <ResponseHeader>Content-Type</ResponseHeader>
          </ResponseHeaders>
      </Cors>
  </CorsConfig>

  For more info about CORS, see http://www.w3.org/TR/cors/.
""")

class GetCorsCommand(Command):
  """Implementation of gsutil getcors command."""

  # Command specification (processed by parent class).
  command_spec = {
    # Name of command.
    COMMAND_NAME : 'getcors',
    # List of command name aliases.
    COMMAND_NAME_ALIASES : [],
    # Min number of args required by this command.
    MIN_ARGS : 1,
    # Max number of args required by this command, or NO_MAX.
    MAX_ARGS : 1,
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
    HELP_NAME : 'getcors',
    # List of help name aliases.
    HELP_NAME_ALIASES : [],
    # Type of help)
    HELP_TYPE : HelpType.COMMAND_HELP,
    # One line summary of this help.
    HELP_ONE_LINE_SUMMARY : 'Get a bucket\'s CORS XML document',
    # The full help text.
    HELP_TEXT : _detailed_help_text,
  }

  # Command entry point.
  def RunCommand(self):
    # Wildcarding is allowed but must resolve to just one bucket.
    uris = list(self.WildcardIterator(self.args[0]).IterUris())
    if len(uris) == 0:
      raise CommandException('No URIs matched')
    if len(uris) != 1:
      raise CommandException('%s matched more than one URI, which is not\n'
          'allowed by the %s command' % (self.args[0], self.command_name))
    uri = uris[0]
    if not uri.names_bucket():
      raise CommandException('"%s" command must specify a bucket' %
                             self.command_name)
    cors = uri.get_cors(False, self.headers)
    # Pretty-print the XML to make it more easily human editable.
    parsed_xml = xml.dom.minidom.parseString(cors.to_xml().encode('utf-8'))
    sys.stdout.write(parsed_xml.toprettyxml(indent='    '))
    return 0

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

import xml.sax
from boto import handler
from boto.gs.cors import Cors
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
  gsutil setcors cors-xml-file uri...


<B>DESCRIPTION</B>
  Sets the Cross-Origin Resource Sharing (CORS) configuration on one or more
  buckets. This command is supported for buckets only, not objects. The
  cors-xml-file specified on the command line should be a path to a local
  file containing an XML document with the following structure:

  <?xml version="1.0" ?>
  <CorsConfig>
      <Cors>
          <Origins>
              <Origin>http://origin1.example.com</Origin>
          </Origins>
          <Methods>
              <Method>GET</Method>
          </Methods>
          <ResponseHeaders>
              <ResponseHeader>Content-Type</ResponseHeader>
          </ResponseHeaders>
      </Cors>
  </CorsConfig>

  The above XML document explicitly allows cross-origin GET requests from
  http://origin1.example.com and may include the Content-Type response header.

  For more info about CORS, see http://www.w3.org/TR/cors/.
""")

class SetCorsCommand(Command):
  """Implementation of gsutil setcors command."""

  # Command specification (processed by parent class).
  command_spec = {
    # Name of command.
    COMMAND_NAME : 'setcors',
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
    HELP_NAME : 'setcors',
    # List of help name aliases.
    HELP_NAME_ALIASES : ['cors', 'cross-origin'],
    # Type of help)
    HELP_TYPE : HelpType.COMMAND_HELP,
    # One line summary of this help.
    HELP_ONE_LINE_SUMMARY : 'Set a CORS XML document for one or more buckets',
    # The full help text.
    HELP_TEXT : _detailed_help_text,
  }

  # Command entry point.
  def RunCommand(self):
    cors_arg = self.args[0]
    uri_args = self.args[1:]
    # Disallow multi-provider setcors requests.
    storage_uri = self.UrisAreForSingleProvider(uri_args)
    if not storage_uri:
      raise CommandException('"%s" command spanning providers not allowed.' %
                             self.command_name)

    # Open, read and parse file containing XML document.
    cors_file = open(cors_arg, 'r')
    cors_txt = cors_file.read()
    cors_file.close()
    cors_obj = Cors()

    # Parse XML document and convert into Cors object.
    h = handler.XmlHandler(cors_obj, None)
    try:
      xml.sax.parseString(cors_txt, h)
    except xml.sax._exceptions.SAXParseException, e:
      raise CommandException('Requested CORS is invalid: %s at line %s, '
                             'column %s' % (e.getMessage(), e.getLineNumber(),
                                            e.getColumnNumber()))

    # Iterate over URIs, expanding wildcards, and setting the CORS on each.
    some_matched = False
    for uri_str in uri_args:
      for blr in self.WildcardIterator(uri_str):
        uri = blr.GetUri()
        if not uri.names_bucket():
          raise CommandException('URI %s must name a bucket for the %s command'
                                 % (str(uri), self.command_name))
        some_matched = True
        print 'Setting CORS on %s...' % uri
        uri.set_cors(cors_obj, False, self.headers)
    if not some_matched:
      raise CommandException('No URIs matched')

    return 0

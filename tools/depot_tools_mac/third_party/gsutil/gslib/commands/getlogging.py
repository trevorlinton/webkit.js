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
from gslib.help_provider import HELP_NAME
from gslib.help_provider import HELP_NAME_ALIASES
from gslib.help_provider import HELP_ONE_LINE_SUMMARY
from gslib.help_provider import HELP_TEXT
from gslib.help_provider import HelpType
from gslib.help_provider import HELP_TYPE

_detailed_help_text = ("""
<B>SYNOPSIS</B>
  gsutil getlogging uri


<B>DESCRIPTION</B>
  If logging is enabled for the specified bucket uri, the server responds
  with a <Logging> XML element that looks something like this:

  <?xml version="1.0" ?>
  <Logging>
      <LogBucket>
          logs-bucket
      </LogBucket>
      <LogObjectPrefix>
          my-logs-enabled-bucket
      </LogObjectPrefix>
  </Logging>

  If logging is not enabled, an empty <Logging> element is returned.

  You can download log data from your log bucket using the gsutil cp command.


<B>ACCESS LOG FIELDS</B>
  Field               Type     Description
  time_micros         integer  The time that the request was completed, in
                                microseconds since the Unix epoch.
  c_ip                string   The IP address from which the request was made.
                               The "c" prefix indicates that this is information
                               about the client.
  c_ip_type           integer  The type of IP in the c_ip field:
                               A value of 1 indicates an IPV4 address.
                               A value of 2 indicates an IPV6 address.
  c_ip_region         string   Reserved for future use.
  cs_method           string   The HTTP method of this request. The "cs" prefix
                               indicates that this information was sent from the
                               client to the server.
  cs_uri              string   The URI of the request.
  sc_status           integer  The HTTP status code the server sent in response.
                               The "sc" prefix indicates that this information
                               was sent from the server to the client.
  cs_bytes            integer  The number of bytes sent in the request.
  sc_bytes            integer  The number of bytes sent in the response.
  time_taken_micros   integer  The time it took to serve the request in
                               microseconds.
  cs_host             string   The host in the original request.
  cs_referrer         string   The HTTP referrer for the request.
  cs_user_agent       string   The User-Agent of the request.
  s_request_id        string   The request identifier.
  cs_operation        string   The Google Cloud Storage operation e.g.
                               GET_Object.
  cs_bucket           string   The bucket specified in the request. If this is a
                               list buckets request, this can be null.
  cs_object           string   The object specified in this request. This can be
                               null.


<B>STORAGE DATA FIELDS</B>
  Field               Type     Description
  bucket              string   The name of the bucket.
  storage_byte_hours  integer  Average size in bytes/per hour of that bucket.
""")


class GetLoggingCommand(Command):
  """Implementation of gsutil getlogging command."""

  # Command specification (processed by parent class).
  command_spec = {
    # Name of command.
    COMMAND_NAME : 'getlogging',
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
    HELP_NAME : 'getlogging',
    # List of help name aliases.
    HELP_NAME_ALIASES : [],
    # Type of help:
    HELP_TYPE : HelpType.COMMAND_HELP,
    # One line summary of this help.
    HELP_ONE_LINE_SUMMARY : 'Get logging configuration for a bucket',
    # The full help text.
    HELP_TEXT : _detailed_help_text,
  }

  # Command entry point.
  def RunCommand(self):
    self.GetXmlSubresource('logging', self.args[0])
    return 0

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

from gslib.help_provider import HELP_NAME
from gslib.help_provider import HELP_NAME_ALIASES
from gslib.help_provider import HELP_ONE_LINE_SUMMARY
from gslib.help_provider import HelpProvider
from gslib.help_provider import HELP_TEXT
from gslib.help_provider import HelpType
from gslib.help_provider import HELP_TYPE

_detailed_help_text = ("""
<B>OVERVIEW</B>
  gsutil users can access publicly readable data without obtaining
  credentials. For example, the gs://uspto-pair bucket contains a number
  of publicly readable objects, so any user can run the following command
  without first obtaining credentials:

    gsutil ls gs://uspto-pair/applications/0800401*

  Users can similarly download objects they find via the above gsutil ls
  command.

  If a user without credentials attempts to access protected data using gsutil,
  they will be prompted to run "gsutil config" to obtain credentials.

  See "gsutil help acls" for more details about data protection.
""")


class CommandOptions(HelpProvider):
  """Additional help about Access Control Lists."""

  help_spec = {
    # Name of command or auxiliary help info for which this help applies.
    HELP_NAME : 'anon',
    # List of help name aliases.
    HELP_NAME_ALIASES : ['anonymous', 'public'],
    # Type of help:
    HELP_TYPE : HelpType.ADDITIONAL_HELP,
    # One line summary of this help.
    HELP_ONE_LINE_SUMMARY :
        'Accessing public data without obtaining credentials',
    # The full help text.
    HELP_TEXT : _detailed_help_text,
  }

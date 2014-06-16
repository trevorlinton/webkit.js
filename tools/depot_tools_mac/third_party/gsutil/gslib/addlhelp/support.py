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
<B>TECHNICAL SUPPORT</B>
  If you have any questions or encounter any problems with Google Cloud Storage,
  please first read the FAQ at https://developers.google.com/storage/docs/faq.
  If you still need help, please post your question to the gs-discussion forum
  (https://developers.google.com/storage/forum) or to Stack Overflow with the
  Google Cloud Storage tag
  (http://stackoverflow.com/questions/tagged/google-cloud-storage). Our support
  team actively monitors these forums and we'll do our best to respond. To help
  us diagnose any issues you encounter, please provide these details in addition
  to the description of your problem:

  - The resource you are attempting to access (bucket name, object name)
  - The operation you attempted (GET, PUT, etc.)
  - The time and date (including timezone) at which you encountered the problem
  - The tool or library you use to interact with Google Cloud Storage
  - If you can use gsutil to reproduce your issue, specify the -D option to
    display your request's HTTP details. Provide these details with your post
    to the forum as they can help us further troubleshoot your issue.

  Warning: The gsutil -D, -d, and -DD options will also print the authentication
  header with authentication credentials for your Google Cloud Storage account.
  Make sure to remove any "Authorization:" headers before you post HTTP details
  to the forum.

  If you make any local modifications to gsutil, please make sure to use
  a released copy of gsutil (instead of your locally modified copy) when
  providing the gsutil -D output noted above. We cannot support versions
  of gsutil that include local modifications. (However, we're open to user
  contributions; see "gsutil help dev".)

  As an alternative to posting to the gs-discussion forum, we also
  actively monitor http://stackoverflow.com for questions tagged with
  "google-cloud-storage".


<B>BILLING AND ACCOUNT QUESTIONS</B>
  For questions about billing or account issues, please visit
  http://code.google.com/apis/console-help/#billing.  If you want to cancel
  billing, you can do so on the Billing pane of the Google APIs Console. For
  more information, see
  http://code.google.com/apis/console-help/#BillingCancelled. Caution: When you
  disable billing, you also disable the Google Cloud Storage service. Make sure
  you want to disable the Google Cloud Storage service before you disable
  billing.
""")


class CommandOptions(HelpProvider):
  """Additional help about tech and billing support."""

  help_spec = {
    # Name of command or auxiliary help info for which this help applies.
    HELP_NAME : 'support',
    # List of help name aliases.
    HELP_NAME_ALIASES : ['techsupport', 'tech support', 'technical support',
                         'billing', 'faq', 'questions'],
    # Type of help:
    HELP_TYPE : HelpType.ADDITIONAL_HELP,
    # One line summary of this help.
    HELP_ONE_LINE_SUMMARY : 'How to get Google Cloud Storage support',
    # The full help text.
    HELP_TEXT : _detailed_help_text,
  }

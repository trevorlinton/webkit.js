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
  We're open to incorporating gsutil code changes authored by users. Here
  are some guidelines:

  1. Before we can accept code submissions, we have to jump a couple of legal
     hurdles. Please fill out either the individual or corporate Contributor
     License Agreement:
       - If you are an individual writing original source code and you're
         sure you own the intellectual property,
         then you'll need to sign an individual CLA
         (http://code.google.com/legal/individual-cla-v1.0.html).
       - If you work for a company that wants to allow you to contribute your
         work to gsutil, then you'll need to sign a corporate CLA
         (http://code.google.com/legal/corporate-cla-v1.0.html)

     Follow either of the two links above to access the appropriate CLA and
     instructions for how to sign and return it. Once we receive it, we'll
     add you to the official list of contributors and be able to accept
     your patches.

  2. If you found a bug or have an idea for a feature enhancement, we suggest
     you check http://code.google.com/p/gsutil/issues/list to see if it has
     already been reported by another user. From there you can also add yourself
     to the Cc list for an issue, so you will find out about any developments.

  3. It's usually worthwhile to send email to gs-team@google.com about your
     idea before sending actual code. Often we can discuss the idea and help
     propose things that could save you later revision work.

  4. We tend to avoid adding command line options that are of use to only
     a very small fraction of users, especially if there's some other way
     to accommodate such needs. Adding such options complicates the code and
     also adds overhead to users having to read through an "alphabet soup"
     list of option documentation.

  5. While gsutil has a number of features specific to Google Cloud Storage,
     it can also be used with other cloud storage providers. We're open to
     including changes for making gsutil support features specific to other
     providers, as long as those changes don't make gsutil work worse for Google
     Cloud Storage. If you do make such changes we recommend including someone
     with knowledge of the specific provider as a code reviewer (see below).

  6. You can check out the gsutil code from svn  - see
     http://code.google.com/p/gsutil/source/checkout. Then change directories
     into gsutil/src, and check out the boto code from github:

       git clone git://github.com/boto/boto.git

  7. Please make sure to run all tests against your modified code. To
     do this, change directories into the gsutil top-level directory and run:

       ./gsutil test

     The above tests take a long time to run because they send many requests to
     the production service. The gsutil test command has a -u argument that will
     only run unit tests. These run quickly, as they are executed with an
     in-memory mock storage service implementation. To run only the unit tests,
     run:

       ./gsutil test -u

    If you made mods to boto please run the boto tests. For these tests you
    need to use HMAC credentials (from gsutil config -a), because the current
    boto test suite doesn't import the OAuth2 handler. You'll also need to
    install some python modules: change directories into the top-level gsutil
    directory and run:

      pip install -qr boto/requirements.txt

    (You probably need to run this commad using sudo.)
    Make sure each of the individual installations succeeded. If they don't
    you may need to run individual ones again, e.g.,

      pip install unittest2

    Then ensure your .boto file has HMAC credentials defined (the boto tests
    don't load the OAUTH2 plugin), and then change directories into boto/tests
    and run:

      python test.py unit
      python test.py -t s3 -t gs -t ssl

  8. Please consider contributing test code for your change, especially if the
     change impacts any of the core gsutil code (like the gsutil cp command).

  9. When it's time to send us code, please use the Rietveld code review tool
     rather than simply sending us a code patch. Do this as follows:
      - check out the gsutil code from at
        http://code.google.com/p/gsutil/source/checkout and apply your changes
        in the checked out directory.
      - download the "upload.py" script from
        http://code.google.com/p/rietveld/wiki/UploadPyUsage
      - run upload.py from the above gsutil svn directory.
      - click the codereview.appspot.com link it generates, click "Edit Issue",
        and add mfschwartz@google.com as a reviewer, and Cc gs-team@google.com.
      - click Publish+Mail Comments.
""")



class CommandOptions(HelpProvider):
  """Additional help about Access Control Lists."""

  help_spec = {
    # Name of command or auxiliary help info for which this help applies.
    HELP_NAME : 'dev',
    # List of help name aliases.
    HELP_NAME_ALIASES : ['development', 'developer', 'code', 'mods',
                         'software'],
    # Type of help:
    HELP_TYPE : HelpType.ADDITIONAL_HELP,
    # One line summary of this help.
    HELP_ONE_LINE_SUMMARY : 'Making modifications to gsutil',
    # The full help text.
    HELP_TEXT : _detailed_help_text,
  }

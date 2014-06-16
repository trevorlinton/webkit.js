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
  This section provides details about how subdirectories work in gsutil.
  Most users probably don't need to know these details, and can simply use
  the commands (like cp -R) that work with subdirectories. We provide this
  additional documentation to help users understand how gsutil handles
  subdirectories differently than most GUI / web-based tools (e.g., why
  those other tools create "dir_$folder$" objects), and also to explain cost and
  performance implications of the gsutil approach, for those interested in such
  details.

  gsutil provides the illusion of a hierarchical file tree atop the "flat"
  name space supported by the Google Cloud Storage service. To the service,
  the object gs://bucket/abc/def/ghi.txt is just an object that happens to have
  "/" characters in its name. There are no "abc" or "abc/def" directories;
  just a single object with the given name.

  gsutil achieves the hierarchical file tree illusion by applying a variety of
  rules, to try to make naming work the way users would expect. For example, in
  order to determine whether to treat a destination URI as an object name or the
  root of a directory under which objects should be copied gsutil uses these
  rules:

  1. If the destination object ends with a "/" gsutil treats it as a directory.
     For example, if you run the command:

       gsutil cp file gs://bucket/abc/

     gsutil will create the object gs://bucket/abc/file.

  2. If you attempt to copy multiple source files to a destination URI, gsutil
     treats the destination URI as a directory. For example, if you run
     the command:

       gsutil cp -R dir gs://bucket/abc

     gsutil will create objects like gs://bucket/abc/dir/file1, etc. (assuming
     file1 is a file under the source dir).

  3. If neither of the above rules applies, gsutil performs a bucket listing to
     determine if the target of the operation is a prefix match to the
     specified string. For example, if you run the command:

       gsutil cp file gs://bucket/abc

     gsutil will make a bucket listing request for the named bucket, using
     delimiter="/" and prefix="abc". It will then examine the bucket listing
     results and determine whether there are objects in the bucket whose path
     starts with gs://bucket/abc/, to determine whether to treat the target as
     an object name or a directory name. In turn this impacts the name of the
     object you create: If the above check indicates there is an "abc" directory
     you will end up with the object gs://bucket/abc/file; otherwise you will
     end up with the object gs://bucket/abc. (See "HOW NAMES ARE CONSTRUCTED"
     under "gsutil help cp" for more details.)

  This rule-based approach stands in contrast to the way many tools work, which
  create objects to mark the existence of folders (such as "dir_$folder$").
  gsutil understands several conventions used by such tools but does not
  require such marker objects to implement naming behavior consistent with
  UNIX commands.

  A downside of the gsutil approach is it requires an extra bucket listing
  before performing the needed cp or mv command. However those listings are
  relatively inexpensive, because they use delimiter and prefix parameters to
  limit result data. Moreover, gsutil makes only one bucket listing request
  per cp/mv command, and thus amortizes the bucket listing cost across all
  transferred objects (e.g., when performing a recursive copy of a directory
  to the cloud).
""")


class CommandOptions(HelpProvider):
  """Additional help about subdirectory handling in gsutil."""

  help_spec = {
    # Name of command or auxiliary help info for which this help applies.
    HELP_NAME : 'subdirs',
    # List of help name aliases.
    HELP_NAME_ALIASES : ['dirs', 'directory', 'directories', 'folder',
                         'folders', 'hierarchy', 'subdir', 'subdirectory',
                         'subdirectories'],
    # Type of help:
    HELP_TYPE : HelpType.ADDITIONAL_HELP,
    # One line summary of this help.
    HELP_ONE_LINE_SUMMARY : 'How subdirectories work in gsutil',
    # The full help text.
    HELP_TEXT : _detailed_help_text,
  }

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

import boto
import os
import re
import sys

from boto.pyami.config import BotoConfigLocations
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
from hashlib import md5

_detailed_help_text = ("""
<B>SYNOPSIS</B>
  gsutil version


<B>DESCRIPTION</B>
  Prints information about the version of gsutil, boto, and Python being
  run on your system.
""")


class VersionCommand(Command):
  """Implementation of gsutil version command."""

  # Command specification (processed by parent class).
  command_spec = {
    # Name of command.
    COMMAND_NAME : 'version',
    # List of command name aliases.
    COMMAND_NAME_ALIASES : ['ver'],
    # Min number of args required by this command.
    MIN_ARGS : 0,
    # Max number of args required by this command, or NO_MAX.
    MAX_ARGS : 0,
    # Getopt-style string specifying acceptable sub args.
    SUPPORTED_SUB_ARGS : '',
    # True if file URIs acceptable for this command.
    FILE_URIS_OK : False,
    # True if provider-only URIs acceptable for this command.
    PROVIDER_URIS_OK : False,
    # Index in args of first URI arg.
    URIS_START_ARG : 0,
    # True if must configure gsutil before running command.
    CONFIG_REQUIRED : False,
  }
  help_spec = {
    # Name of command or auxiliary help info for which this help applies.
    HELP_NAME : 'version',
    # List of help name aliases.
    HELP_NAME_ALIASES : ['ver'],
    # Type of help:
    HELP_TYPE : HelpType.COMMAND_HELP,
    # One line summary of this help.
    HELP_ONE_LINE_SUMMARY : 'Print version info about gsutil',
    # The full help text.
    HELP_TEXT : _detailed_help_text,
  }

  # Command entry point.
  def RunCommand(self):
    for path in BotoConfigLocations:
      f = None
      try:
        f = open(path, 'r')
        break
      except IOError:
        pass
      finally:
        if f:
          f.close()
        else:
          path = "no config found"

    try:
      f = open(os.path.join(self.gsutil_bin_dir, 'CHECKSUM'))
      shipped_checksum = f.read().strip()
      f.close()
    except IOError:
      shipped_checksum = 'MISSING'
    try:
      cur_checksum = self._ComputeCodeChecksum()
    except IOError:
      cur_checksum = 'MISSING FILES'
    if shipped_checksum == cur_checksum:
      checksum_ok_str = 'OK'
    else:
      checksum_ok_str = '!= %s' % shipped_checksum
    sys.stderr.write(
        'gsutil version %s\nchecksum %s (%s)\n'
        'boto version %s\npython version %s\n'
        'config path: %s\ngsutil path: %s\n' % (
        self.gsutil_ver, cur_checksum, checksum_ok_str,
        boto.__version__, sys.version, path, os.path.realpath(sys.argv[0])))

    return 0

  def _ComputeCodeChecksum(self):
    """
    Computes a checksum of gsutil code so we can see if users locally modified
    gsutil when requesting support. (It's fine for users to make local mods,
    but when users ask for support we ask them to run a stock version of
    gsutil so we can reduce possible variables.)
    """
    m = md5()
    # Checksum gsutil and all .py files under gsutil bin (including bundled
    # libs). Although we will eventually make gsutil allow use of a centrally
    # installed boto (once boto shifts to more frequent releases), in that case
    # the local copies still should not have any user modifications.
    files_to_checksum = [os.path.join(self.gsutil_bin_dir, 'gsutil')]
    for root, sub_folders, files in os.walk(self.gsutil_bin_dir):
      for file in files:
        if file[-3:] == '.py':
          files_to_checksum.append(os.path.join(root, file))
    # Sort to ensure consistent checksum build, no matter how os.walk
    # orders the list.
    for file in sorted(files_to_checksum):
      f = open(file, 'r')
      content = f.read()
      content = re.sub(r'(\r\n|\r|\n)', '\n', content)
      m.update(content)
      f.close()
    return m.hexdigest()

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

from gslib.exception import CommandException

class HelpType(object):
  COMMAND_HELP = 'command_help'
  ADDITIONAL_HELP = 'additional_help'

ALL_HELP_TYPES = [HelpType.COMMAND_HELP, HelpType.ADDITIONAL_HELP]

# help_spec key constants.
HELP_NAME = 'help_name'
HELP_NAME_ALIASES = 'help_name_aliases'
HELP_TYPE = 'help_type'
HELP_ONE_LINE_SUMMARY = 'help_one_line_summary'
HELP_TEXT = 'help_text'

# Constants enforced by SanityCheck
MAX_HELP_NAME_LEN = 15
MIN_ONE_LINE_SUMMARY_LEN = 10
MAX_ONE_LINE_SUMMARY_LEN = 80 - MAX_HELP_NAME_LEN

REQUIRED_SPEC_KEYS = [HELP_NAME, HELP_NAME_ALIASES, HELP_TYPE,
                      HELP_ONE_LINE_SUMMARY, HELP_TEXT]

class HelpProvider(object):
  """Interface for providing help."""

  # Each subclass must define the following map.
  help_spec = {
    # Name of command or auxiliary help info for which this help applies.
    HELP_NAME : None,
    # List of help name aliases.
    HELP_NAME_ALIASES : None,
    # HelpType.
    HELP_TYPE : None,
    # One line summary of this help.
    HELP_ONE_LINE_SUMMARY : None,
    # The full help text.
    HELP_TEXT : None,
  }

# This is a static helper instead of a class method because the help loader
# (gslib.commands.help._LoadHelpMaps()) operates on classes not instances.
def SanityCheck(help_provider, help_name_map):
  """Helper for checking that a HelpProvider has minimally adequate content."""
  for k in REQUIRED_SPEC_KEYS:
    if k not in help_provider.help_spec or help_provider.help_spec[k] is None:
      raise CommandException('"%s" help implementation is missing %s '
                             'specification' % (help_provider.help_name, k))
  # Sanity check the content.
  assert (len(help_provider.help_spec[HELP_NAME]) > 1
          and len(help_provider.help_spec[HELP_NAME]) < MAX_HELP_NAME_LEN)
  for hna in help_provider.help_spec[HELP_NAME_ALIASES]:
    assert len(hna) > 0
  one_line_summary_len = len(help_provider.help_spec[HELP_ONE_LINE_SUMMARY])
  assert (one_line_summary_len > MIN_ONE_LINE_SUMMARY_LEN
          and one_line_summary_len < MAX_ONE_LINE_SUMMARY_LEN)
  assert len(help_provider.help_spec[HELP_TEXT]) > 10

  # Ensure there are no dupe help names or aliases across commands.
  name_check_list = [help_provider.help_spec[HELP_NAME]]
  name_check_list.extend(help_provider.help_spec[HELP_NAME_ALIASES])
  for name_or_alias in name_check_list:
    if help_name_map.has_key(name_or_alias):
      raise CommandException(
          'Duplicate help name/alias "%s" found while loading help from %s. '
          'That name/alias was already taken by %s' % (name_or_alias,
          help_provider.__module__, help_name_map[name_or_alias].__module__))

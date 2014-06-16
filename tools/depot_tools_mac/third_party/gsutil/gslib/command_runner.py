#!/usr/bin/env python
# coding=utf8
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

"""Class that runs a named gsutil command."""

import boto
import os

from boto.storage_uri import BucketStorageUri
from gslib.command import Command
from gslib.command import COMMAND_NAME
from gslib.command import COMMAND_NAME_ALIASES
from gslib.exception import CommandException


class CommandRunner(object):

  def __init__(self, gsutil_bin_dir, boto_lib_dir, config_file_list,
               gsutil_ver, bucket_storage_uri_class=BucketStorageUri):
    """
    Args:
      gsutil_bin_dir: Bin dir from which gsutil is running.
      boto_lib_dir: Lib dir where boto runs.
      config_file_list: Config file list returned by _GetBotoConfigFileList().
      gsutil_ver: Version string of currently running gsutil command.
      bucket_storage_uri_class: Class to instantiate for cloud StorageUris.
                                Settable for testing/mocking.
    """
    self.gsutil_bin_dir = gsutil_bin_dir
    self.boto_lib_dir = boto_lib_dir
    self.config_file_list = config_file_list
    self.gsutil_ver = gsutil_ver
    self.bucket_storage_uri_class = bucket_storage_uri_class
    self.command_map = self._LoadCommandMap()

  def _LoadCommandMap(self):
    """Returns dict mapping each command_name to implementing class."""
    # Walk gslib/commands and find all commands.
    commands_dir = os.path.join(self.gsutil_bin_dir, 'gslib', 'commands')
    for f in os.listdir(commands_dir):
      # Handles no-extension files, etc.
      (module_name, ext) = os.path.splitext(f)
      if ext == '.py':
        __import__('gslib.commands.%s' % module_name)
    command_map = {}
    # Only include Command subclasses in the dict.
    for command in Command.__subclasses__():
      command_map[command.command_spec[COMMAND_NAME]] = command
      for command_name_aliases in command.command_spec[COMMAND_NAME_ALIASES]:
        command_map[command_name_aliases] = command
    return command_map

  def RunNamedCommand(self, command_name, args=None, headers=None, debug=0,
                      parallel_operations=False, test_method=None,
                      bypass_prodaccess=True):
    """Runs the named command. Used by gsutil main, commands built atop
      other commands, and tests .

      Args:
        command_name: The name of the command being run.
        args: Command-line args (arg0 = actual arg, not command name ala bash).
        headers: Dictionary containing optional HTTP headers to pass to boto.
        debug: Debug level to pass in to boto connection (range 0..3).
        parallel_operations: Should command operations be executed in parallel?
        test_method: Optional general purpose method for testing purposes.
                     Application and semantics of this method will vary by
                     command and test type.

      Raises:
        CommandException: if errors encountered.
    """
    if not args:
      args = []

    # Include api_version header in all commands.
    api_version = boto.config.get_value('GSUtil', 'default_api_version', '1')
    if not headers:
      headers = {}
    headers['x-goog-api-version'] = api_version

    if command_name not in self.command_map:
      raise CommandException('Invalid command "%s".' % command_name)
    command_class = self.command_map[command_name]
    command_inst = command_class(self, args, headers, debug,
                                 parallel_operations, self.gsutil_bin_dir,
                                 self.boto_lib_dir, self.config_file_list,
                                 self.gsutil_ver, self.bucket_storage_uri_class,
                                 test_method, bypass_prodaccess)
    return command_inst.RunCommand()

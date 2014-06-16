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

import os
import platform
import shutil
import signal
import sys
import tarfile
import tempfile

from boto import config
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
gsutil update [-f] [uri]


<B>DESCRIPTION</B>
  The gsutil update command downloads the latest gsutil release, checks its
  version, and offers to let you update to it if it differs from the version
  you're currently running.

  Once you say "Y" to the prompt of whether to install the update, the gsutil
  update command locates where the running copy of gsutil is installed,
  unpacks the new version into an adjacent directory, moves the previous version
  aside, moves the new version to where the previous version was installed,
  and removes the moved-aside old version. Because of this, users are cautioned
  not to store data in the gsutil directory, since that data will be lost
  when you update gsutil. (Some users change directories into the gsutil
  directory to run the command. We advise against doing that, for this reason.)

  By default gsutil update will retrieve the new code from
  gs://pub/gsutil.tar.gz, but you can optionally specify a URI to use
  instead. This is primarily used for distributing pre-release versions of
  the code to a small group of early test users.


<B>OPTIONS</B>
  -f          Forces the update command to offer to let you update, even if you
              have the most current copy already. This can be useful if you have
              a corrupted local copy.
""")


class UpdateCommand(Command):
  """Implementation of gsutil update command."""

  # Command specification (processed by parent class).
  command_spec = {
    # Name of command.
    COMMAND_NAME : 'update',
    # List of command name aliases.
    COMMAND_NAME_ALIASES : ['refresh'],
    # Min number of args required by this command.
    MIN_ARGS : 0,
    # Max number of args required by this command, or NO_MAX.
    MAX_ARGS : 1,
    # Getopt-style string specifying acceptable sub args.
    SUPPORTED_SUB_ARGS : 'f',
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
    HELP_NAME : 'update',
    # List of help name aliases.
    HELP_NAME_ALIASES : ['refresh'],
    # Type of help:
    HELP_TYPE : HelpType.COMMAND_HELP,
    # One line summary of this help.
    HELP_ONE_LINE_SUMMARY : 'Update to the latest gsutil release',
    # The full help text.
    HELP_TEXT : _detailed_help_text,
  }

  def _ExplainIfSudoNeeded(self, tf, dirs_to_remove):
    """Explains what to do if sudo needed to update gsutil software.

    Happens if gsutil was previously installed by a different user (typically if
    someone originally installed in a shared file system location, using sudo).

    Args:
      tf: Opened TarFile.
      dirs_to_remove: List of directories to remove.

    Raises:
      CommandException: if errors encountered.
    """
    system = platform.system()
    # If running under Windows we don't need (or have) sudo.
    if system.lower().startswith('windows'):
      return

    user_id = os.getuid()
    if (os.stat(self.gsutil_bin_dir).st_uid == user_id
        and os.stat(self.boto_lib_dir).st_uid == user_id):
      return

    # Won't fail - this command runs after main startup code that insists on
    # having a config file.
    config_files = ' '.join(self.config_file_list)
    self._CleanUpUpdateCommand(tf, dirs_to_remove)
    raise CommandException(
        ('Since it was installed by a different user previously, you will need '
         'to update using the following commands.\nYou will be prompted for '
         'your password, and the install will run as "root". If you\'re unsure '
         'what this means please ask your system administrator for help:'
         '\n\tchmod 644 %s\n\tsudo env BOTO_CONFIG=%s gsutil update'
         '\n\tchmod 600 %s') % (config_files, config_files, config_files),
        informational=True)

  # This list is checked during gsutil update by doing a lowercased
  # slash-left-stripped check. For example "/Dev" would match the "dev" entry.
  unsafe_update_dirs = [
      'applications', 'auto', 'bin', 'boot', 'desktop', 'dev',
      'documents and settings', 'etc', 'export', 'home', 'kernel', 'lib',
      'lib32', 'library', 'lost+found', 'mach_kernel', 'media', 'mnt', 'net',
      'null', 'network', 'opt', 'private', 'proc', 'program files', 'python',
      'root', 'sbin', 'scripts', 'srv', 'sys', 'system', 'tmp', 'users', 'usr',
      'var', 'volumes', 'win', 'win32', 'windows', 'winnt',
  ]

  def _EnsureDirsSafeForUpdate(self, dirs):
    """Throws Exception if any of dirs is known to be unsafe for gsutil update.

    This provides a fail-safe check to ensure we don't try to overwrite
    or delete any important directories. (That shouldn't happen given the
    way we construct tmp dirs, etc., but since the gsutil update cleanup
    uses shutil.rmtree() it's prudent to add extra checks.)

    Args:
      dirs: List of directories to check.

    Raises:
      CommandException: If unsafe directory encountered.
    """
    for d in dirs:
      if not d:
        d = 'null'
      if d.lstrip(os.sep).lower() in self.unsafe_update_dirs:
        raise CommandException('EnsureDirsSafeForUpdate: encountered unsafe '
                               'directory (%s); aborting update' % d)

  def _CleanUpUpdateCommand(self, tf, dirs_to_remove):
    """Cleans up temp files etc. from running update command.

    Args:
      tf: Opened TarFile.
      dirs_to_remove: List of directories to remove.

    """
    tf.close()
    self._EnsureDirsSafeForUpdate(dirs_to_remove)
    for directory in dirs_to_remove:
      try:
        shutil.rmtree(directory)
      except OSError as e:
        # Ignore errors while attempting to remove old dirs under Windows. They
        # happen because of Windows exclusive file locking, and the update
        # actually succeeds but just leaves the old versions around in the
        # user's temp dir.
        if not platform.system().lower().startswith('windows'):
          raise

  # Command entry point.
  def RunCommand(self):
    for cfg_var in ('is_secure', 'https_validate_certificates'):
      if (config.has_option('Boto', cfg_var)
          and not config.getboolean('Boto', cfg_var)):
        raise CommandException('Your boto configuration has %s = False. '
                               'The update command\ncannot be run this way, for '
                               'security reasons.' % cfg_var)
    dirs_to_remove = []
    # Retrieve gsutil tarball and check if it's newer than installed code.
    # TODO: Store this version info as metadata on the tarball object and
    # change this command's implementation to check that metadata instead of
    # downloading the tarball to check the version info.
    tmp_dir = tempfile.mkdtemp()
    dirs_to_remove.append(tmp_dir)
    os.chdir(tmp_dir)
    print 'Checking for software update...'
    if len(self.args):
      update_from_uri_str = self.args[0]
      if not update_from_uri_str.endswith('.tar.gz'):
        raise CommandException(
          'The update command only works with tar.gz files.')
    else:
      update_from_uri_str = 'gs://pub/gsutil.tar.gz'
    self.command_runner.RunNamedCommand('cp', [update_from_uri_str,
                                        'file://gsutil.tar.gz'],
                                        self.headers, self.debug)
    # Note: tf is closed in _CleanUpUpdateCommand.
    tf = tarfile.open('gsutil.tar.gz')
    tf.errorlevel = 1  # So fatal tarball unpack errors raise exceptions.
    tf.extract('./gsutil/VERSION')

    ver_file = open('gsutil/VERSION', 'r')
    try:
      latest_version_string = ver_file.read().rstrip('\n')
    finally:
      ver_file.close()

    force_update = False
    if self.sub_opts:
      for o, unused_a in self.sub_opts:
        if o == '-f':
          force_update = True
    if not force_update and self.gsutil_ver == latest_version_string:
      self._CleanUpUpdateCommand(tf, dirs_to_remove)
      if len(self.args):
        raise CommandException('You already have %s installed.' %
                               update_from_uri_str, informational=True)
      else:
        raise CommandException('You already have the latest gsutil release '
                               'installed.', informational=True)

    print(('This command will update to the "%s" version of\ngsutil at %s') %
          (latest_version_string, self.gsutil_bin_dir))
    self._ExplainIfSudoNeeded(tf, dirs_to_remove)

    answer = raw_input('Proceed? [y/N] ')
    if not answer or answer.lower()[0] != 'y':
      self._CleanUpUpdateCommand(tf, dirs_to_remove)
      raise CommandException('Not running update.', informational=True)

    # Ignore keyboard interrupts during the update to reduce the chance someone
    # hitting ^C leaves gsutil in a broken state.
    signal.signal(signal.SIGINT, signal.SIG_IGN)

    # self.gsutil_bin_dir lists the path where the code should end up (like
    # /usr/local/gsutil), which is one level down from the relative path in the
    # tarball (since the latter creates files in ./gsutil). So, we need to
    # extract at the parent directory level.
    gsutil_bin_parent_dir = os.path.dirname(self.gsutil_bin_dir)

    # Extract tarball to a temporary directory in a sibling to gsutil_bin_dir.
    old_dir = tempfile.mkdtemp(dir=gsutil_bin_parent_dir)
    new_dir = tempfile.mkdtemp(dir=gsutil_bin_parent_dir)
    dirs_to_remove.append(old_dir)
    dirs_to_remove.append(new_dir)
    self._EnsureDirsSafeForUpdate(dirs_to_remove)
    try:
      tf.extractall(path=new_dir)
    except Exception, e:
      self._CleanUpUpdateCommand(tf, dirs_to_remove)
      raise CommandException('Update failed: %s.' % e)

    # For enterprise mode (shared/central) installation, users with
    # different user/group than the installation user/group must be
    # able to run gsutil so we need to do some permissions adjustments
    # here. Since enterprise mode is not not supported for Windows
    # users, we can skip this step when running on Windows, which
    # avoids the problem that Windows has no find or xargs command.
    system = platform.system()
    if not system.lower().startswith('windows'):
      # Make all files and dirs in updated area readable by other
      # and make all directories executable by other. These steps
      os.system('chmod -R o+r ' + new_dir)
      os.system('find ' + new_dir + ' -type d | xargs chmod o+x')

      # Make main gsutil script readable and executable by other.
      os.system('chmod o+rx ' + os.path.join(new_dir, 'gsutil'))

    # Move old installation aside and new into place.
    os.rename(self.gsutil_bin_dir, old_dir + os.sep + 'old')
    os.rename(new_dir + os.sep + 'gsutil', self.gsutil_bin_dir)
    self._CleanUpUpdateCommand(tf, dirs_to_remove)
    signal.signal(signal.SIGINT, signal.SIG_DFL)
    print 'Update complete.'
    return 0

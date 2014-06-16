# Copyright 2010 Google Inc. All Rights Reserved.
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

"""Base class for gsutil commands.

In addition to base class code, this file contains helpers that depend on base
class state (such as GetAclCommandHelper, which depends on self.gsutil_bin_dir,
self.bucket_storage_uri_class, etc.) In general, functions that depend on class
state and that are used by multiple commands belong in this file. Functions that
don't depend on class state belong in util.py, and non-shared helpers belong in
individual subclasses.
"""

import boto
import getopt
import gslib
import logging
import multiprocessing
import os
import platform
import re
import sys
import wildcard_iterator
import xml.dom.minidom

from boto import handler
from boto.storage_uri import StorageUri
from getopt import GetoptError
from gslib import util
from gslib.exception import CommandException
from gslib.help_provider import HelpProvider
from gslib.name_expansion import NameExpansionIterator
from gslib.name_expansion import NameExpansionIteratorQueue
from gslib.project_id import ProjectIdHandler
from gslib.storage_uri_builder import StorageUriBuilder
from gslib.thread_pool import ThreadPool
from gslib.util import HAVE_OAUTH2
from gslib.util import NO_MAX

from gslib.wildcard_iterator import ContainsWildcard


def _ThreadedLogger():
  """Creates a logger that resembles 'print' output, but is thread safe.

  The logger will display all messages logged with level INFO or above. Log
  propagation is disabled.

  Returns:
    A logger object.
  """
  log = logging.getLogger('threaded-logging')
  log.propagate = False
  log.setLevel(logging.INFO)
  log_handler = logging.StreamHandler()
  log_handler.setFormatter(logging.Formatter('%(message)s'))
  log.addHandler(log_handler)
  return log

# command_spec key constants.
COMMAND_NAME = 'command_name'
COMMAND_NAME_ALIASES = 'command_name_aliases'
MIN_ARGS = 'min_args'
MAX_ARGS = 'max_args'
SUPPORTED_SUB_ARGS = 'supported_sub_args'
FILE_URIS_OK = 'file_uri_ok'
PROVIDER_URIS_OK = 'provider_uri_ok'
URIS_START_ARG = 'uris_start_arg'
CONFIG_REQUIRED = 'config_required'

_EOF_NAME_EXPANSION_RESULT = ("EOF")


class Command(object):
  # Global instance of a threaded logger object.
  THREADED_LOGGER = _ThreadedLogger()

  REQUIRED_SPEC_KEYS = [COMMAND_NAME]

  # Each subclass must define the following map, minimally including the
  # keys in REQUIRED_SPEC_KEYS; other values below will be used as defaults,
  # although for readbility subclasses should specify the complete map.
  command_spec = {
    # Name of command.
    COMMAND_NAME : None,
    # List of command name aliases.
    COMMAND_NAME_ALIASES : [],
    # Min number of args required by this command.
    MIN_ARGS : 0,
    # Max number of args required by this command, or NO_MAX.
    MAX_ARGS : NO_MAX,
    # Getopt-style string specifying acceptable sub args.
    SUPPORTED_SUB_ARGS : '',
    # True if file URIs are acceptable for this command.
    FILE_URIS_OK : False,
    # True if provider-only URIs are acceptable for this command.
    PROVIDER_URIS_OK : False,
    # Index in args of first URI arg.
    URIS_START_ARG : 0,
    # True if must configure gsutil before running command.
    CONFIG_REQUIRED : True,
  }
  _default_command_spec = command_spec
  help_spec = HelpProvider.help_spec

  """Define an empty test specification, which derived classes must populate.

  This is a list of tuples containing the following values:

    step_name - mnemonic name for test, displayed when test is run
    cmd_line - shell command line to run test
    expect_ret or None - expected return code from test (None means ignore)
    (result_file, expect_file) or None - tuple of result file and expected
                                         file to diff for additional test
                                         verification beyond the return code
                                         (None means no diff requested)
  Notes:

  - Setting expected_ret to None means there is no expectation and,
    hence, any returned value will pass.

  - Any occurrences of the string 'gsutil' in the cmd_line parameter
    are expanded to the full path to the gsutil command under test.

  - The cmd_line, result_file and expect_file parameters may
    contain the following special substrings:

    $Bn - converted to one of 10 unique-for-testing bucket names (n=0..9)
    $On - converted to one of 10 unique-for-testing object names (n=0..9)
    $Fn - converted to one of 10 unique-for-testing file names (n=0..9)
    $G  - converted to the directory where gsutil is installed. Useful for
          referencing test data.

  - The generated file names are full pathnames, whereas the generated
    bucket and object names are simple relative names.

  - Tests with a non-None result_file and expect_file automatically
    trigger an implicit diff of the two files.

  - These test specifications, in combination with the conversion strings
    allow tests to be constructed parametrically. For example, here's an
    annotated subset of a test_steps for the cp command:

    # Copy local file to object, verify 0 return code.
    ('simple cp', 'gsutil cp $F1 gs://$B1/$O1', 0, None, None),
    # Copy uploaded object back to local file and diff vs. orig file.
    ('verify cp', 'gsutil cp gs://$B1/$O1 $F2', 0, '$F2', '$F1'),

  - After pattern substitution, the specs are run sequentially, in the
    order in which they appear in the test_steps list.
  """
  test_steps = []

  # Define a convenience property for command name, since it's used many places.
  def _GetDefaultCommandName(self):
    return self.command_spec[COMMAND_NAME]
  command_name = property(_GetDefaultCommandName)

  def __init__(self, command_runner, args, headers, debug, parallel_operations,
               gsutil_bin_dir, boto_lib_dir, config_file_list, gsutil_ver,
               bucket_storage_uri_class, test_method=None,
               bypass_prodaccess=True):
    """
    Args:
      command_runner: CommandRunner (for commands built atop other commands).
      args: Command-line args (arg0 = actual arg, not command name ala bash).
      headers: Dictionary containing optional HTTP headers to pass to boto.
      debug: Debug level to pass in to boto connection (range 0..3).
      parallel_operations: Should command operations be executed in parallel?
      gsutil_bin_dir: Bin dir from which gsutil is running.
      boto_lib_dir: Lib dir where boto runs.
      config_file_list: Config file list returned by _GetBotoConfigFileList().
      gsutil_ver: Version string of currently running gsutil command.
      bucket_storage_uri_class: Class to instantiate for cloud StorageUris.
                                Settable for testing/mocking.
      test_method: Optional general purpose method for testing purposes.
                   Application and semantics of this method will vary by
                   command and test type.
      bypass_prodaccess: Boolean to ignore the existance of prodaccess.

    Implementation note: subclasses shouldn't need to define an __init__
    method, and instead depend on the shared initialization that happens
    here. If you do define an __init__ method in a subclass you'll need to
    explicitly call super().__init__(). But you're encouraged not to do this,
    because it will make changing the __init__ interface more painful.
    """
    # Save class values from constructor params.
    self.command_runner = command_runner
    self.args = args
    self.unparsed_args = args
    self.headers = headers
    self.debug = debug
    self.parallel_operations = parallel_operations
    self.gsutil_bin_dir = gsutil_bin_dir
    self.boto_lib_dir = boto_lib_dir
    self.config_file_list = config_file_list
    self.gsutil_ver = gsutil_ver
    self.bucket_storage_uri_class = bucket_storage_uri_class
    self.test_method = test_method
    self.exclude_symlinks = False
    self.recursion_requested = False
    self.all_versions = False
    self.bypass_prodaccess = bypass_prodaccess

    # Process sub-command instance specifications.
    # First, ensure subclass implementation sets all required keys.
    for k in self.REQUIRED_SPEC_KEYS:
      if k not in self.command_spec or self.command_spec[k] is None:
        raise CommandException('"%s" command implementation is missing %s '
                               'specification' % (self.command_name, k))
    # Now override default command_spec with subclass-specified values.
    tmp = self._default_command_spec
    tmp.update(self.command_spec)
    self.command_spec = tmp
    del tmp

    # Make sure command provides a test specification.
    if not self.test_steps:
      # TODO: Uncomment following lines when test feature is ready.
      #raise CommandException('"%s" command implementation is missing test '
                             #'specification' % self.command_name)
      pass

    # Parse and validate args.
    try:
      (self.sub_opts, self.args) = getopt.getopt(
          args, self.command_spec[SUPPORTED_SUB_ARGS])
    except GetoptError, e:
      raise CommandException('%s for "%s" command.' % (e.msg,
                                                       self.command_name))
    if (len(self.args) < self.command_spec[MIN_ARGS]
        or len(self.args) > self.command_spec[MAX_ARGS]):
      raise CommandException('Wrong number of arguments for "%s" command.' %
                             self.command_name)
    if (not self.command_spec[FILE_URIS_OK]
        and self.HaveFileUris(self.args[self.command_spec[URIS_START_ARG]:])):
      raise CommandException('"%s" command does not support "file://" URIs. '
                             'Did you mean to use a gs:// URI?' %
                             self.command_name)
    if (not self.command_spec[PROVIDER_URIS_OK]
        and self._HaveProviderUris(
            self.args[self.command_spec[URIS_START_ARG]:])):
      raise CommandException('"%s" command does not support provider-only '
                             'URIs.' % self.command_name)
    if self.command_spec[CONFIG_REQUIRED]:
      self._ConfigureNoOpAuthIfNeeded()

    self.proj_id_handler = ProjectIdHandler()
    self.suri_builder = StorageUriBuilder(debug, bucket_storage_uri_class)

    # Cross-platform path to run gsutil binary.
    self.gsutil_cmd = ''
    # Cross-platform list containing gsutil path for use with subprocess.
    self.gsutil_exec_list = []
    # If running on Windows, invoke python interpreter explicitly.
    if platform.system() == "Windows":
      self.gsutil_cmd += 'python '
      self.gsutil_exec_list += ['python']
    # Add full path to gsutil to make sure we test the correct version.
    self.gsutil_path = os.path.join(self.gsutil_bin_dir, 'gsutil')
    self.gsutil_cmd += self.gsutil_path
    self.gsutil_exec_list += [self.gsutil_path]

    # We're treating recursion_requested like it's used by all commands, but
    # only some of the commands accept the -R option.
    if self.sub_opts:
      for o, unused_a in self.sub_opts:
        if o == '-r' or o == '-R':
          self.recursion_requested = True
          break

  def WildcardIterator(self, uri_or_str, all_versions=False):
    """
    Helper to instantiate gslib.WildcardIterator. Args are same as
    gslib.WildcardIterator interface, but this method fills in most of the
    values from instance state.

    Args:
      uri_or_str: StorageUri or URI string naming wildcard objects to iterate.
    """
    return wildcard_iterator.wildcard_iterator(
        uri_or_str, self.proj_id_handler,
        bucket_storage_uri_class=self.bucket_storage_uri_class,
        all_versions=all_versions,
        headers=self.headers, debug=self.debug)

  def RunCommand(self):
    """Abstract function in base class. Subclasses must implement this. The
    return value of this function will be used as the exit status of the
    process, so subclass commands should return an integer exit code (0 for
    success, a value in [1,255] for failure).
    """
    raise CommandException('Command %s is missing its RunCommand() '
                           'implementation' % self.command_name)

  ############################################################
  # Shared helper functions that depend on base class state. #
  ############################################################

  def UrisAreForSingleProvider(self, uri_args):
    """Tests whether the uris are all for a single provider.

    Returns: a StorageUri for one of the uris on success, None on failure.
    """
    provider = None
    uri = None
    for uri_str in uri_args:
      # validate=False because we allow wildcard uris.
      uri = boto.storage_uri(
          uri_str, debug=self.debug, validate=False,
          bucket_storage_uri_class=self.bucket_storage_uri_class)
      if not provider:
        provider = uri.scheme
      elif uri.scheme != provider:
        return None
    return uri

  def SetAclCommandHelper(self):
    """
    Common logic for setting ACLs. Sets the standard ACL or the default
    object ACL depending on self.command_name.
    """

    acl_arg = self.args[0]
    uri_args = self.args[1:]
    # Disallow multi-provider setacl requests, because there are differences in
    # the ACL models.
    storage_uri = self.UrisAreForSingleProvider(uri_args)
    if not storage_uri:
      raise CommandException('"%s" command spanning providers not allowed.' %
                             self.command_name)

    # Determine whether acl_arg names a file containing XML ACL text vs. the
    # string name of a canned ACL.
    if os.path.isfile(acl_arg):
      acl_file = open(acl_arg, 'r')
      acl_arg = acl_file.read()

      # TODO: Remove this workaround when GCS allows
      # whitespace in the Permission element on the server-side
      acl_arg = re.sub(r'<Permission>\s*(\S+)\s*</Permission>',
                       r'<Permission>\1</Permission>', acl_arg)

      acl_file.close()
      self.canned = False
    else:
      # No file exists, so expect a canned ACL string.
      canned_acls = storage_uri.canned_acls()
      if acl_arg not in canned_acls:
        raise CommandException('Invalid canned ACL "%s".' % acl_arg)
      self.canned = True

    # Used to track if any ACLs failed to be set.
    self.everything_set_okay = True

    def _SetAclExceptionHandler(e):
      """Simple exception handler to allow post-completion status."""
      self.THREADED_LOGGER.error(str(e))
      self.everything_set_okay = False

    def _SetAclFunc(name_expansion_result):
      exp_src_uri = self.suri_builder.StorageUri(
          name_expansion_result.GetExpandedUriStr())
      # We don't do bucket operations multi-threaded (see comment below).
      assert self.command_name != 'setdefacl'
      self.THREADED_LOGGER.info('Setting ACL on %s...' %
                                name_expansion_result.expanded_uri_str)
      if self.canned:
        exp_src_uri.set_acl(acl_arg, exp_src_uri.object_name, False,
                            self.headers)
      else:
        exp_src_uri.set_xml_acl(acl_arg, exp_src_uri.object_name, False,
                                self.headers)

    # If user specified -R option, convert any bucket args to bucket wildcards
    # (e.g., gs://bucket/*), to prevent the operation from being  applied to
    # the buckets themselves.
    if self.recursion_requested:
      for i in range(len(uri_args)):
        uri = self.suri_builder.StorageUri(uri_args[i])
        if uri.names_bucket():
          uri_args[i] = uri.clone_replace_name('*').uri
    else:
      # Handle bucket ACL setting operations single-threaded, because
      # our threading machinery currently assumes it's working with objects
      # (name_expansion_iterator), and normally we wouldn't expect users to need
      # to set ACLs on huge numbers of buckets at once anyway.
      for i in range(len(uri_args)):
        uri_str = uri_args[i]
        if self.suri_builder.StorageUri(uri_str).names_bucket():
          self._RunSingleThreadedSetAcl(acl_arg, uri_args)
          return

    name_expansion_iterator = NameExpansionIterator(
        self.command_name, self.proj_id_handler, self.headers, self.debug,
        self.bucket_storage_uri_class, uri_args, self.recursion_requested,
        self.recursion_requested, all_versions=self.all_versions)

    # Perform requests in parallel (-m) mode, if requested, using
    # configured number of parallel processes and threads. Otherwise,
    # perform requests with sequential function calls in current process.
    self.Apply(_SetAclFunc, name_expansion_iterator, _SetAclExceptionHandler)

    if not self.everything_set_okay:
      raise CommandException('ACLs for some objects could not be set.')

  def _RunSingleThreadedSetAcl(self, acl_arg, uri_args):
    some_matched = False
    for uri_str in uri_args:
      for blr in self.WildcardIterator(uri_str):
        if blr.HasPrefix():
          continue
        some_matched = True
        uri = blr.GetUri()
        if self.command_name == 'setdefacl':
          print 'Setting default object ACL on %s...' % uri
          if self.canned:
            uri.set_def_acl(acl_arg, uri.object_name, False, self.headers)
          else:
            uri.set_def_xml_acl(acl_arg, False, self.headers)
        else:
          print 'Setting ACL on %s...' % uri
          if self.canned:
            uri.set_acl(acl_arg, uri.object_name, False, self.headers)
          else:
            uri.set_xml_acl(acl_arg, uri.object_name, False, self.headers)
    if not some_matched:
      raise CommandException('No URIs matched')

  def GetAclCommandHelper(self):
    """Common logic for getting ACLs. Gets the standard ACL or the default
    object ACL depending on self.command_name."""

    # Resolve to just one object.
    # Handle wildcard-less URI specially in case this is a version-specific
    # URI, because WildcardIterator().IterUris() would lose the versioning info.
    if not ContainsWildcard(self.args[0]):
      uri = self.suri_builder.StorageUri(self.args[0])
    else:
      uris = list(self.WildcardIterator(self.args[0]).IterUris())
      if len(uris) == 0:
        raise CommandException('No URIs matched')
      if len(uris) != 1:
        raise CommandException('%s matched more than one URI, which is not '
            'allowed by the %s command' % (self.args[0], self.command_name))
      uri = uris[0]
    if not uri.names_bucket() and not uri.names_object():
      raise CommandException('"%s" command must specify a bucket or '
                             'object.' % self.command_name)
    if self.command_name == 'getdefacl':
      acl = uri.get_def_acl(False, self.headers)
    else:
      acl = uri.get_acl(False, self.headers)
    # Pretty-print the XML to make it more easily human editable.
    parsed_xml = xml.dom.minidom.parseString(acl.to_xml().encode('utf-8'))
    print parsed_xml.toprettyxml(indent='    ')

  def GetXmlSubresource(self, subresource, uri_arg):
    """Print an xml subresource, e.g. logging, for a bucket/object.

    Args:
      subresource: The subresource name.
      uri_arg: URI for the bucket/object. Wildcards will be expanded.

    Raises:
      CommandException: if errors encountered.
    """
    # Wildcarding is allowed but must resolve to just one bucket.
    uris = list(self.WildcardIterator(uri_arg).IterUris())
    if len(uris) != 1:
      raise CommandException('Wildcards must resolve to exactly one item for '
                             'get %s' % subresource)
    uri = uris[0]
    xml_str = uri.get_subresource(subresource, False, self.headers)
    # Pretty-print the XML to make it more easily human editable.
    parsed_xml = xml.dom.minidom.parseString(xml_str.encode('utf-8'))
    print parsed_xml.toprettyxml(indent='    ')

  def Apply(self, func, name_expansion_iterator, thr_exc_handler,
            shared_attrs=None):
    """Dispatch input URI assignments across a pool of parallel OS
       processes and/or Python threads, based on options (-m or not)
       and settings in the user's config file. If non-parallel mode
       or only one OS process requested, execute requests sequentially
       in the current OS process.

    Args:
      func: Function to call to process each URI.
      name_expansion_iterator: Iterator of NameExpansionResult.
      thr_exc_handler: Exception handler for ThreadPool class.
      shared_attrs: List of attributes to manage across sub-processes.

    Raises:
      CommandException if invalid config encountered.
    """

    # Set OS process and python thread count as a function of options
    # and config.
    if self.parallel_operations:
      process_count = boto.config.getint(
          'GSUtil', 'parallel_process_count',
          gslib.commands.config.DEFAULT_PARALLEL_PROCESS_COUNT)
      if process_count < 1:
        raise CommandException('Invalid parallel_process_count "%d".' %
                               process_count)
      thread_count = boto.config.getint(
          'GSUtil', 'parallel_thread_count',
          gslib.commands.config.DEFAULT_PARALLEL_THREAD_COUNT)
      if thread_count < 1:
        raise CommandException('Invalid parallel_thread_count "%d".' %
                               thread_count)
    else:
      # If -m not specified, then assume 1 OS process and 1 Python thread.
      process_count = 1
      thread_count = 1

    if self.debug:
      self.THREADED_LOGGER.info('process count: %d', process_count)
      self.THREADED_LOGGER.info('thread count: %d', thread_count)

    if self.parallel_operations and process_count > 1:
      procs = []
      # If any shared attributes passed by caller, create a dictionary of
      # shared memory variables for every element in the list of shared
      # attributes.
      shared_vars = None
      if shared_attrs:
        for name in shared_attrs:
          if not shared_vars:
            shared_vars = {}
          shared_vars[name] = multiprocessing.Value('i', 0)
      # Construct work queue for parceling out work to multiprocessing workers,
      # setting the max queue length of 50k so we will block if workers don't
      # empty the queue as fast as we can continue iterating over the bucket
      # listing. This number may need tuning; it should be large enough to
      # keep workers busy (overlapping bucket list next-page retrieval with
      # operations being fed from the queue) but small enough that we don't
      # overfill memory when runing across a slow network link.
      work_queue = multiprocessing.Queue(50000)
      for shard in range(process_count):
        # Spawn a separate OS process for each shard.
        if self.debug:
          self.THREADED_LOGGER.info('spawning process for shard %d', shard)
        p = multiprocessing.Process(target=self._ApplyThreads,
                                    args=(func, work_queue, shard,
                                          thread_count, thr_exc_handler,
                                          shared_vars))
        procs.append(p)
        p.start()

      last_name_expansion_result = None
      try:
        # Feed all work into the queue being emptied by the workers.
        for name_expansion_result in name_expansion_iterator:
          last_name_expansion_result = name_expansion_result
          work_queue.put(name_expansion_result)
      except:
        sys.stderr.write('Failed URI iteration. Last result (prior to '
                         'exception) was: %s\n'
                         % repr(last_name_expansion_result))
      finally:
        # We do all of the process cleanup in a finally cause in case the name
        # expansion iterator throws an exception. This will send EOF to all the
        # child processes and join them back into the parent process.

        # Send an EOF per worker.
        for shard in range(process_count):
          work_queue.put(_EOF_NAME_EXPANSION_RESULT)

        # Wait for all spawned OS processes to finish.
        failed_process_count = 0
        for p in procs:
          p.join()
          # Count number of procs that returned non-zero exit code.
          if p.exitcode != 0:
            failed_process_count += 1

        # Propagate shared variables back to caller's attributes.
        if shared_vars:
          for (name, var) in shared_vars.items():
            setattr(self, name, var.value)

      # Abort main process if one or more sub-processes failed. Note that this
      # is outside the finally clause, because we only want to raise a new
      # exception if an exception wasn't already raised in the try clause above.
      if failed_process_count:
        plural_str = ''
        if failed_process_count > 1:
          plural_str = 'es'
        raise Exception('unexpected failure in %d sub-process%s, '
                        'aborting...' % (failed_process_count, plural_str))

    else:
      # Using just 1 process, so funnel results to _ApplyThreads using facade
      # that makes NameExpansionIterator look like a Multiprocessing.Queue
      # that sends one EOF once the iterator empties.
      work_queue = NameExpansionIteratorQueue(name_expansion_iterator,
                                              _EOF_NAME_EXPANSION_RESULT)
      self._ApplyThreads(func, work_queue, 0, thread_count, thr_exc_handler,
                         None)

  def HaveFileUris(self, args_to_check):
    """Checks whether args_to_check contain any file URIs.

    Args:
      args_to_check: Command-line argument subset to check.

    Returns:
      True if args_to_check contains any file URIs.
    """
    for uri_str in args_to_check:
      if uri_str.lower().startswith('file://') or uri_str.find(':') == -1:
        return True
    return False

  ######################
  # Private functions. #
  ######################

  def _HaveProviderUris(self, args_to_check):
    """Checks whether args_to_check contains any provider URIs (like 'gs://').

    Args:
      args_to_check: Command-line argument subset to check.

    Returns:
      True if args_to_check contains any provider URIs.
    """
    for uri_str in args_to_check:
      if re.match('^[a-z]+://$', uri_str):
        return True
    return False

  def _ConfigureNoOpAuthIfNeeded(self):
    """Sets up no-op auth handler if no boto credentials are configured."""
    config = boto.config
    if not util.HasConfiguredCredentials(self.bypass_prodaccess):
      if self.config_file_list:
        if (config.has_option('Credentials', 'gs_oauth2_refresh_token')
            and not HAVE_OAUTH2):
          raise CommandException(
              'Your gsutil is configured with OAuth2 authentication '
              'credentials.\nHowever, OAuth2 is only supported when running '
              'under Python 2.6 or later\n(unless additional dependencies are '
              'installed, see README for details); you are running Python %s.' %
              sys.version)
        raise CommandException('You have no storage service credentials in any '
                               'of the following boto config\nfiles. Please '
                               'add your credentials as described in the '
                               'gsutil README file, or else\nre-run '
                               '"gsutil config" to re-create a config '
                               'file:\n%s' % self.config_file_list)
      else:
        # With no boto config file the user can still access publicly readable
        # buckets and objects.
        from gslib import no_op_auth_plugin

  def _ApplyThreads(self, func, work_queue, shard, num_threads,
                    thr_exc_handler=None, shared_vars=None):
    """
    Perform subset of required requests across a caller specified
    number of parallel Python threads, which may be one, in which
    case the requests are processed in the current thread.

    Args:
      func: Function to call for each request.
      work_queue: shared queue of NameExpansionResult to process.
      shard: Assigned subset (shard number) for this function.
      num_threads: Number of Python threads to spawn to process this shard.
      thr_exc_handler: Exception handler for ThreadPool class.
      shared_vars: Dict of shared memory variables to be managed.
                   (only relevant, and non-None, if this function is
                   run in a separate OS process).
    """
    # Each OS process needs to establish its own set of connections to
    # the server to avoid writes from different OS processes interleaving
    # onto the same socket (and garbling the underlying SSL session).
    # We ensure each process gets its own set of connections here by
    # closing all connections in the storage provider connection pool.
    connection_pool = StorageUri.provider_pool
    if connection_pool:
      for i in connection_pool:
        connection_pool[i].connection.close()

    if num_threads > 1:
      thread_pool = ThreadPool(num_threads, thr_exc_handler)
    try:
      while True: # Loop until we hit EOF marker.
        name_expansion_result = work_queue.get()
        if name_expansion_result == _EOF_NAME_EXPANSION_RESULT:
          break
        exp_src_uri = self.suri_builder.StorageUri(
            name_expansion_result.GetExpandedUriStr())
        if self.debug:
          self.THREADED_LOGGER.info('process %d shard %d is handling uri %s',
                                    os.getpid(), shard, exp_src_uri)
        if (self.exclude_symlinks and exp_src_uri.is_file_uri()
            and os.path.islink(exp_src_uri.object_name)):
          self.THREADED_LOGGER.info('Skipping symbolic link %s...', exp_src_uri)
        elif num_threads > 1:
          thread_pool.AddTask(func, name_expansion_result)
        else:
          func(name_expansion_result)
      # If any Python threads created, wait here for them to finish.
      if num_threads > 1:
        thread_pool.WaitCompletion()
    finally:
      if num_threads > 1:
        thread_pool.Shutdown()
    # If any shared variables (which means we are running in a separate OS
    # process), increment value for each shared variable.
    if shared_vars:
      for (name, var) in shared_vars.items():
        var.value += getattr(self, name)

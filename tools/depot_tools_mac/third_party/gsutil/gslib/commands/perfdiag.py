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

"""Contains the perfdiag gsutil command."""

import calendar
from collections import defaultdict
import contextlib
import datetime
import json
import math
import multiprocessing
import os
import re
import socket
import string
import subprocess
import tempfile
import time

import boto.gs.connection

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
from gslib.commands import config
from gslib.exception import CommandException
from gslib.help_provider import HELP_NAME
from gslib.help_provider import HELP_NAME_ALIASES
from gslib.help_provider import HELP_ONE_LINE_SUMMARY
from gslib.help_provider import HELP_TEXT
from gslib.help_provider import HELP_TYPE
from gslib.help_provider import HelpType
from gslib.util import IS_LINUX
from gslib.util import MakeBitsHumanReadable
from gslib.util import MakeHumanReadable
from gslib.util import Percentile

_detailed_help_text = ("""
<B>SYNOPSIS</B>
  gsutil perfdiag [-i in.json] [-o out.json]
                  [-n iterations] [-c concurrency] [-s size] [-t tests] uri...


<B>DESCRIPTION</B>
  The perfdiag command runs a suite of diagnostic tests for a given Google
  Storage bucket.

  The 'uri' parameter must name an existing bucket (e.g. gs://foo) to which
  the user has write permission. Several test files will be uploaded to and
  downloaded from this bucket. All test files will be deleted at the completion
  of the diagnostic if it finishes successfully.

  gsutil performance can be impacted by many factors at the client, server,
  and in-between, such as: CPU speed; available memory; the access path to the
  local disk; network bandwidth; contention and error rates along the path
  between gsutil and Google; operating system buffering configuration; and
  firewalls and other network elements. The perfdiag command is provided so
  that customers can run a known measurement suite when troubleshooting
  performance problems.


<B>PROVIDING DIAGNOSTIC OUTPUT TO GOOGLE CLOUD STORAGE TEAM</B>
  If the Google Cloud Storage Team asks you to run a performance diagnostic
  please use the following command, and email the output file (output.json)
  to gs-team@google.com:

    gsutil perfdiag -o output.json gs://your-bucket


<B>OPTIONS</B>
  -n          Sets the number of iterations performed when downloading and
              uploading files during latency and throughput tests. Defaults to
              5.

  -c          Sets the level of concurrency to use while running throughput
              experiments. The default value of 1 will only run a single read
              or write operation concurrently.

  -s          Sets the size (in bytes) of the test file used to perform read
              and write throughput tests. The default is 1 MiB.

  -t          Sets the list of diagnostic tests to perform. The default is to
              run all diagnostic tests. Must be a comma-separated list
              containing one or more of the following:

                  lat: Runs N iterations (set with -n) of writing the file,
                       retrieving its metadata, reading the file, and deleting
                       the file. Records the latency of each operation.

                rthru: Runs N (set with -n) read operations, with at most C
                       (set with -c) reads outstanding at any given time.

                wthru: Runs N (set with -n) write operations, with at most C
                       (set with -c) writes outstanding at any given time.

  -o          Writes the results of the diagnostic to an output file. The output
              is a JSON file containing system information and performance
              diagnostic results. The file can be read and reported later using
              the -i option.

  -i          Reads the JSON output file created using the -o command and prints
              a formatted description of the results.


<B>NOTE</B>
  The perfdiag command collects system information. It collects your IP address,
  executes DNS queries to Google servers and collects the results, and collects
  network statistics information from the output of netstat -s. None of this
  information will be sent to Google unless you choose to send it.
""")


class PerfDiagCommand(Command):
  """Implementation of gsutil perfdiag command."""

  # Command specification (processed by parent class).
  command_spec = {
      # Name of command.
      COMMAND_NAME: 'perfdiag',
      # List of command name aliases.
      COMMAND_NAME_ALIASES: ['diag', 'diagnostic', 'perf', 'performance'],
      # Min number of args required by this command.
      MIN_ARGS: 0,
      # Max number of args required by this command, or NO_MAX.
      MAX_ARGS: 1,
      # Getopt-style string specifying acceptable sub args.
      SUPPORTED_SUB_ARGS: 'n:c:s:t:i:o:',
      # True if file URIs acceptable for this command.
      FILE_URIS_OK: False,
      # True if provider-only URIs acceptable for this command.
      PROVIDER_URIS_OK: False,
      # Index in args of first URI arg.
      URIS_START_ARG: 0,
      # True if must configure gsutil before running command.
      CONFIG_REQUIRED: True,
  }
  help_spec = {
      # Name of command or auxiliary help info for which this help applies.
      HELP_NAME: 'perfdiag',
      # List of help name aliases.
      HELP_NAME_ALIASES: [],
      # Type of help:
      HELP_TYPE: HelpType.COMMAND_HELP,
      # One line summary of this help.
      HELP_ONE_LINE_SUMMARY: 'Run performance diagnostic',
      # The full help text.
      HELP_TEXT: _detailed_help_text,
  }

  # Byte sizes to use for testing files.
  # TODO: Consider letting the user specify these sizes with a configuration
  # parameter.
  test_file_sizes = (
      0,  # 0 bytes
      1024,  # 1 KB
      102400,  # 100 KB
      1048576,  # 1MB
  )

  # List of all diagnostic tests.
  ALL_DIAG_TESTS = ('rthru', 'wthru', 'lat')

  # Google Cloud Storage API endpoint host.
  GOOGLE_API_HOST = boto.gs.connection.GSConnection.DefaultHost

  def _WindowedExec(self, cmd, n, w, raise_on_error=True):
    """Executes a command n times with a window size of w.

    Up to w instances of the command will be executed and left outstanding at a
    time until n instances of the command have completed.

    Args:
      cmd: List containing the command to execute.
      n: Number of times the command will be executed.
      w: Window size of outstanding commands being executed.
      raise_on_error: See _Exec.

    Raises:
      Exception: If raise_on_error is set to True and any process exits with a
      non-zero return code.
    """
    if self.debug:
      print 'Running command:', cmd
    devnull_f = open(os.devnull, 'w')
    num_finished = 0
    running = []
    while len(running) or num_finished < n:
      # Fires off new commands that can be executed.
      while len(running) < w and num_finished + len(running) < n:
        print 'Starting concurrent command: %s' % (' '.join(cmd))
        p = subprocess.Popen(cmd, stdout=devnull_f, stderr=devnull_f)
        running.append(p)

      # Checks for finished commands.
      prev_running = running
      running = []
      for p in prev_running:
        retcode = p.poll()
        if retcode is None:
          running.append(p)
        elif raise_on_error and retcode:
          raise CommandException("Received non-zero return code (%d) from "
                                 "subprocess '%s'." % (retcode, ' '.join(cmd)))
        else:
          num_finished += 1

  def _Exec(self, cmd, raise_on_error=True, return_output=False,
            mute_stderr=False):
    """Executes a command in a subprocess.

    Args:
      cmd: List containing the command to execute.
      raise_on_error: Whether or not to raise an exception when a process exits
          with a non-zero return code.
      return_output: If set to True, the return value of the function is the
          stdout of the process.
      mute_stderr: If set to True, the stderr of the process is not printed to
          the console.

    Returns:
      The return code of the process or the stdout if return_output is set.

    Raises:
      Exception: If raise_on_error is set to True and any process exits with a
      non-zero return code.
    """
    if self.debug:
      print 'Running command:', cmd
    stderr = subprocess.PIPE if mute_stderr else None
    p = subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=stderr)
    (stdoutdata, stderrdata) = p.communicate()
    if raise_on_error and p.returncode:
      raise CommandException("Received non-zero return code (%d) from "
                             "subprocess '%s'." % (p.returncode, ' '.join(cmd)))
    return stdoutdata if return_output else p.returncode

  def _GsUtil(self, cmd, raise_on_error=True, return_output=False,
              mute_stderr=False):
    """Executes a gsutil command in a subprocess.

    Args:
      cmd: A list containing the arguments to the gsutil program, e.g. ['ls',
          'gs://foo'].
      raise_on_error: see _Exec.
      return_output: see _Exec.
      mute_stderr: see _Exec.

    Returns:
      The return code of the process or the stdout if return_output is set.
    """
    cmd = self.gsutil_exec_list + cmd
    return self._Exec(cmd, raise_on_error=raise_on_error,
                      return_output=return_output, mute_stderr=mute_stderr)

  def _SetUp(self):
    """Performs setup operations needed before diagnostics can be run."""

    # Stores test result data.
    self.results = {}
    # List of test files in a temporary location on disk for latency ops.
    self.latency_files = []
    # Maps each test file path to its size in bytes.
    self.file_sizes = {}
    # Maps each test file to its contents as a string.
    self.file_contents = {}

    def _MakeFile(file_size):
      """Creates a temporary file of the given size and returns its path."""
      fd, fpath = tempfile.mkstemp(suffix='.bin', prefix='gsutil_test_file',
                                   text=False)
      self.file_sizes[fpath] = file_size
      f = os.fdopen(fd, 'wb')
      f.write(os.urandom(file_size))
      f.close()
      f = open(fpath, 'rb')
      self.file_contents[fpath] = f.read()
      f.close()
      return fpath

    # Create files for latency tests.
    for file_size in self.test_file_sizes:
      fpath = _MakeFile(file_size)
      self.latency_files.append(fpath)

    # Local file on disk for write throughput tests.
    self.thru_local_file = _MakeFile(self.thru_filesize)
    # Remote file to write/read from during throughput tests.
    self.thru_remote_file = (str(self.bucket_uri) +
                             os.path.basename(self.thru_local_file))

  def _TearDown(self):
    """Performs operations to clean things up after performing diagnostics."""
    for fpath in self.latency_files + [self.thru_local_file]:
      try:
        os.remove(fpath)
      except OSError:
        pass

    self._GsUtil(['rm', self.thru_remote_file], raise_on_error=False,
                 mute_stderr=True)

  @contextlib.contextmanager
  def _Time(self, key, bucket):
    """A context manager that measures time.

    A context manager that prints a status message before and after executing
    the inner command and times how long the inner command takes. Keeps track of
    the timing, aggregated by the given key.

    Args:
      key: The key to insert the timing value into a dictionary bucket.
      bucket: A dictionary to place the timing value in.

    Yields:
      For the context manager.
    """
    print key, 'starting...'
    t0 = time.time()
    yield
    t1 = time.time()
    bucket[key].append(t1 - t0)
    print key, 'done.'

  def _RunLatencyTests(self):
    """Runs latency tests."""
    # Stores timing information for each category of operation.
    self.results['latency'] = defaultdict(list)

    for i in range(self.num_iterations):
      print
      print 'Running latency iteration %d...' % (i+1)
      for fpath in self.latency_files:
        basename = os.path.basename(fpath)
        gsbucket = str(self.bucket_uri)
        gsuri = gsbucket + basename
        file_size = self.file_sizes[fpath]
        readable_file_size = MakeHumanReadable(file_size)

        print
        print ("File of size %(size)s located on disk at '%(fpath)s' being "
               "diagnosed in the cloud at '%(gsuri)s'."
               % {'size': readable_file_size,
                  'fpath': fpath,
                  'gsuri': gsuri})

        k = self.bucket.key_class(self.bucket)
        k.key = basename

        with self._Time('UPLOAD_%d' % file_size, self.results['latency']):
          k.set_contents_from_string(self.file_contents[fpath])
        with self._Time('METADATA_%d' % file_size, self.results['latency']):
          k.exists()
        with self._Time('DOWNLOAD_%d' % file_size, self.results['latency']):
          k.get_contents_as_string()
        with self._Time('DELETE_%d' % file_size, self.results['latency']):
          k.delete()

  def _RunReadThruTests(self):
    """Runs read throughput tests."""
    self.results['read_throughput'] = {'file_size': self.thru_filesize,
                                       'num_times': self.num_iterations,
                                       'concurrency': self.concurrency}

    # Copy the file to remote location before reading.
    self._GsUtil(['cp', self.thru_local_file, self.thru_remote_file])

    if self.concurrency == 1:
      k = self.bucket.key_class(self.bucket)
      k.key = os.path.basename(self.thru_local_file)
      # Warm up the TCP connection by transferring a couple times first.
      for i in range(2):
        k.get_contents_as_string()
      t0 = time.time()
      for i in range(self.num_iterations):
        k.get_contents_as_string()
      t1 = time.time()
    else:
      cmd = self.gsutil_exec_list + ['cp', self.thru_remote_file, os.devnull]
      t0 = time.time()
      self._WindowedExec(cmd, self.num_iterations, self.concurrency)
      t1 = time.time()

    time_took = t1 - t0
    total_bytes_copied = self.thru_filesize * self.num_iterations
    bytes_per_second = total_bytes_copied / time_took

    self.results['read_throughput']['time_took'] = time_took
    self.results['read_throughput']['total_bytes_copied'] = total_bytes_copied
    self.results['read_throughput']['bytes_per_second'] = bytes_per_second

  def _RunWriteThruTests(self):
    """Runs write throughput tests."""
    self.results['write_throughput'] = {'file_size': self.thru_filesize,
                                        'num_copies': self.num_iterations,
                                        'concurrency': self.concurrency}

    if self.concurrency == 1:
      k = self.bucket.key_class(self.bucket)
      k.key = os.path.basename(self.thru_local_file)
      # Warm up the TCP connection by transferring a couple times first.
      for i in range(2):
        k.set_contents_from_string(self.file_contents[self.thru_local_file])
      t0 = time.time()
      for i in range(self.num_iterations):
        k.set_contents_from_string(self.file_contents[self.thru_local_file])
      t1 = time.time()
    else:
      cmd = self.gsutil_exec_list + ['cp', self.thru_local_file,
                                     self.thru_remote_file]
      t0 = time.time()
      self._WindowedExec(cmd, self.num_iterations, self.concurrency)
      t1 = time.time()

    time_took = t1 - t0
    total_bytes_copied = self.thru_filesize * self.num_iterations
    bytes_per_second = total_bytes_copied / time_took

    self.results['write_throughput']['time_took'] = time_took
    self.results['write_throughput']['total_bytes_copied'] = total_bytes_copied
    self.results['write_throughput']['bytes_per_second'] = bytes_per_second

  def _GetDiskCounters(self):
    """Retrieves disk I/O statistics for all disks.

    Adapted from the psutil module's psutil._pslinux.disk_io_counters:
      http://code.google.com/p/psutil/source/browse/trunk/psutil/_pslinux.py

    Originally distributed under under a BSD license.
    Original Copyright (c) 2009, Jay Loden, Dave Daeschler, Giampaolo Rodola.

    Returns:
      A dictionary containing disk names mapped to the disk counters from
      /disk/diskstats.
    """
    # iostat documentation states that sectors are equivalent with blocks and
    # have a size of 512 bytes since 2.4 kernels. This value is needed to
    # calculate the amount of disk I/O in bytes.
    sector_size = 512

    partitions = []
    with open('/proc/partitions', 'r') as f:
      lines = f.readlines()[2:]
      for line in lines:
        _, _, _, name = line.split()
        if name[-1].isdigit():
          partitions.append(name)

    retdict = {}
    with open('/proc/diskstats', 'r') as f:
      for line in f:
        values = line.split()[:11]
        _, _, name, reads, _, rbytes, rtime, writes, _, wbytes, wtime = values
        if name in partitions:
          rbytes = int(rbytes) * sector_size
          wbytes = int(wbytes) * sector_size
          reads = int(reads)
          writes = int(writes)
          rtime = int(rtime)
          wtime = int(wtime)
          retdict[name] = (reads, writes, rbytes, wbytes, rtime, wtime)
    return retdict

  def _GetTcpStats(self):
    """Tries to parse out TCP packet information from netstat output.

    Returns:
       A dictionary containing TCP information
    """
    # netstat return code is non-zero for -s on Linux, so don't raise on error.
    netstat_output = self._Exec(['netstat', '-s'], return_output=True,
                                raise_on_error=False)
    netstat_output = netstat_output.strip().lower()
    found_tcp = False
    tcp_retransmit = None
    tcp_received = None
    tcp_sent = None
    for line in netstat_output.split('\n'):
      # Header for TCP section is "Tcp:" in Linux/Mac and
      # "TCP Statistics for" in Windows.
      if 'tcp:' in line or 'tcp statistics' in line:
        found_tcp = True

      # Linux == "segments retransmited" (sic), Mac == "retransmit timeouts"
      # Windows == "segments retransmitted".
      if (found_tcp and tcp_retransmit is None and
          ('segments retransmited' in line or 'retransmit timeouts' in line or
           'segments retransmitted' in line)):
        tcp_retransmit = ''.join(c for c in line if c in string.digits)

      # Linux+Windows == "segments received", Mac == "packets received".
      if (found_tcp and tcp_received is None and
          ('segments received' in line or 'packets received' in line)):
        tcp_received = ''.join(c for c in line if c in string.digits)

      # Linux == "segments send out" (sic), Mac+Windows == "packets sent".
      if (found_tcp and tcp_sent is None and
          ('segments send out' in line or 'packets sent' in line or
           'segments sent' in line)):
        tcp_sent = ''.join(c for c in line if c in string.digits)

    result = {}
    try:
      result['tcp_retransmit'] = int(tcp_retransmit)
      result['tcp_received'] = int(tcp_received)
      result['tcp_sent'] = int(tcp_sent)
    except (ValueError, TypeError):
      result['tcp_retransmit'] = None
      result['tcp_received'] = None
      result['tcp_sent'] = None

    return result

  def _CollectSysInfo(self):
    """Collects system information."""
    sysinfo = {}

    # Get the local IP address from socket lib.
    sysinfo['ip_address'] = socket.gethostbyname(socket.gethostname())
    # Record the temporary directory used since it can affect performance, e.g.
    # when on a networked filesystem.
    sysinfo['tempdir'] = tempfile.gettempdir()

    # Produces an RFC 2822 compliant GMT timestamp.
    sysinfo['gmt_timestamp'] = time.strftime('%a, %d %b %Y %H:%M:%S +0000',
                                             time.gmtime())

    # Execute a CNAME lookup on Google DNS to find what Google server
    # it's routing to.
    cmd = ['nslookup', '-type=CNAME', self.GOOGLE_API_HOST]
    nslookup_cname_output = self._Exec(cmd, return_output=True)
    m = re.search(r' = (?P<googserv>[^.]+)\.', nslookup_cname_output)
    sysinfo['googserv_route'] = m.group('googserv') if m else None

    # Look up IP addresses for Google Server.
    (hostname, aliaslist, ipaddrlist) = socket.gethostbyname_ex(
        self.GOOGLE_API_HOST)
    sysinfo['googserv_ips'] = ipaddrlist

    # Reverse lookup the hostnames for the Google Server IPs.
    sysinfo['googserv_hostnames'] = []
    for googserv_ip in ipaddrlist:
      (hostname, aliaslist, ipaddrlist) = socket.gethostbyaddr(googserv_ip)
      sysinfo['googserv_hostnames'].append(hostname)

    # Query o-o to find out what the Google DNS thinks is the user's IP.
    cmd = ['nslookup', '-type=TXT', 'o-o.myaddr.google.com.']
    nslookup_txt_output = self._Exec(cmd, return_output=True)
    m = re.search(r'text\s+=\s+"(?P<dnsip>[\.\d]+)"', nslookup_txt_output)
    sysinfo['dns_o-o_ip'] = m.group('dnsip') if m else None

    # Try and find the number of CPUs in the system if available.
    try:
      sysinfo['cpu_count'] = multiprocessing.cpu_count()
    except NotImplementedError:
      sysinfo['cpu_count'] = None

    # For *nix platforms, obtain the CPU load.
    try:
      sysinfo['load_avg'] = list(os.getloadavg())
    except (AttributeError, OSError):
      sysinfo['load_avg'] = None

    # Try and collect memory information from /proc/meminfo if possible.
    mem_total = None
    mem_free = None
    mem_buffers = None
    mem_cached = None

    try:
      with open('/proc/meminfo', 'r') as f:
        for line in f:
          if line.startswith('MemTotal'):
            mem_total = (int(''.join(c for c in line if c in string.digits))
                         * 1000)
          elif line.startswith('MemFree'):
            mem_free = (int(''.join(c for c in line if c in string.digits))
                        * 1000)
          elif line.startswith('Buffers'):
            mem_buffers = (int(''.join(c for c in line if c in string.digits))
                           * 1000)
          elif line.startswith('Cached'):
            mem_cached = (int(''.join(c for c in line if c in string.digits))
                          * 1000)
    except (IOError, ValueError):
      pass

    sysinfo['meminfo'] = {'mem_total': mem_total,
                          'mem_free': mem_free,
                          'mem_buffers': mem_buffers,
                          'mem_cached': mem_cached}

    # Get configuration attributes from config module.
    sysinfo['gsutil_config'] = {}
    for attr in dir(config):
      attr_value = getattr(config, attr)
      # Filter out multiline strings that are not useful.
      if attr.isupper() and not (isinstance(attr_value, basestring) and
                                 '\n' in attr_value):
        sysinfo['gsutil_config'][attr] = attr_value

    self.results['sysinfo'] = sysinfo

  def _DisplayStats(self, trials):
    """Prints out mean, standard deviation, median, and 90th percentile."""
    n = len(trials)
    mean = float(sum(trials)) / n
    stdev = math.sqrt(sum((x - mean)**2 for x in trials) / n)

    print str(n).rjust(6), '',
    print ('%.1f' % (mean * 1000)).rjust(9), '',
    print ('%.1f' % (stdev * 1000)).rjust(12), '',
    print ('%.1f' % (Percentile(trials, 0.5) * 1000)).rjust(11), '',
    print ('%.1f' % (Percentile(trials, 0.9) * 1000)).rjust(11), ''

  def _DisplayResults(self):
    """Displays results collected from diagnostic run."""
    print
    print '=' * 78
    print 'DIAGNOSTIC RESULTS'.center(78)
    print '=' * 78

    if 'latency' in self.results:
      print
      print '-' * 78
      print 'Latency'.center(78)
      print '-' * 78
      print ('Operation       Size  Trials  Mean (ms)  Std Dev (ms)  '
             'Median (ms)  90th % (ms)')
      print ('=========  =========  ======  =========  ============  '
             '===========  ===========')
      for key in sorted(self.results['latency']):
        trials = sorted(self.results['latency'][key])
        op, numbytes = key.split('_')
        numbytes = int(numbytes)
        if op == 'METADATA':
          print 'Metadata'.rjust(9), '',
          print MakeHumanReadable(numbytes).rjust(9), '',
          self._DisplayStats(trials)
        if op == 'DOWNLOAD':
          print 'Download'.rjust(9), '',
          print MakeHumanReadable(numbytes).rjust(9), '',
          self._DisplayStats(trials)
        if op == 'UPLOAD':
          print 'Upload'.rjust(9), '',
          print MakeHumanReadable(numbytes).rjust(9), '',
          self._DisplayStats(trials)
        if op == 'DELETE':
          print 'Delete'.rjust(9), '',
          print MakeHumanReadable(numbytes).rjust(9), '',
          self._DisplayStats(trials)

    if 'write_throughput' in self.results:
      print
      print '-' * 78
      print 'Write Throughput'.center(78)
      print '-' * 78
      write_thru = self.results['write_throughput']
      print 'Copied a %s file %d times for a total transfer size of %s.' % (
          MakeHumanReadable(write_thru['file_size']),
          write_thru['num_copies'],
          MakeHumanReadable(write_thru['total_bytes_copied']))
      print 'Write throughput: %s/s.' % (
          MakeBitsHumanReadable(write_thru['bytes_per_second'] * 8))

    if 'read_throughput' in self.results:
      print
      print '-' * 78
      print 'Read Throughput'.center(78)
      print '-' * 78
      read_thru = self.results['read_throughput']
      print 'Copied a %s file %d times for a total transfer size of %s.' % (
          MakeHumanReadable(read_thru['file_size']),
          read_thru['num_times'],
          MakeHumanReadable(read_thru['total_bytes_copied']))
      print 'Read throughput: %s/s.' % (
          MakeBitsHumanReadable(read_thru['bytes_per_second'] * 8))

    if 'sysinfo' in self.results:
      print
      print '-' * 78
      print 'System Information'.center(78)
      print '-' * 78
      info = self.results['sysinfo']
      print 'IP Address: \n  %s' % info['ip_address']
      print 'Temporary Directory: \n  %s' % info['tempdir']
      print 'Bucket URI: \n  %s' % self.results['bucket_uri']

      if 'gmt_timestamp' in info:
        ts_string = info['gmt_timestamp']
        timetuple = None
        try:
          # Convert RFC 2822 string to Linux timestamp.
          timetuple = time.strptime(ts_string, '%a, %d %b %Y %H:%M:%S +0000')
        except ValueError:
          pass

        if timetuple:
          # Converts the GMT time tuple to local Linux timestamp.
          localtime = calendar.timegm(timetuple)
          localdt = datetime.datetime.fromtimestamp(localtime)
          print 'Measurement time: \n %s' % localdt.strftime(
              '%Y-%m-%d %I-%M-%S %p %Z')

      print 'Google Server: \n  %s' % info['googserv_route']
      print ('Google Server IP Addresses: \n  %s' %
             ('\n  '.join(info['googserv_ips'])))
      print ('Google Server Hostnames: \n  %s' %
             ('\n  '.join(info['googserv_hostnames'])))
      print 'Google DNS thinks your IP is: \n  %s' % info['dns_o-o_ip']
      print 'CPU Count: \n  %s' % info['cpu_count']
      print 'CPU Load Average: \n  %s' % info['load_avg']
      try:
        print ('Total Memory: \n  %s' %
               MakeHumanReadable(info['meminfo']['mem_total']))
        # Free memory is really MemFree + Buffers + Cached.
        print 'Free Memory: \n  %s' % MakeHumanReadable(
            info['meminfo']['mem_free'] +
            info['meminfo']['mem_buffers'] +
            info['meminfo']['mem_cached'])
      except TypeError:
        pass

      netstat_after = info['netstat_end']
      netstat_before = info['netstat_start']
      for tcp_type in ('sent', 'received', 'retransmit'):
        try:
          delta = (netstat_after['tcp_%s' % tcp_type] -
                   netstat_before['tcp_%s' % tcp_type])
          print 'TCP segments %s during test:\n  %d' % (tcp_type, delta)
        except TypeError:
          pass

      if 'disk_counters_end' in info and 'disk_counters_start' in info:
        print 'Disk Counter Deltas:\n',
        disk_after = info['disk_counters_end']
        disk_before = info['disk_counters_start']
        print '', 'disk'.rjust(6),
        for colname in ['reads', 'writes', 'rbytes', 'wbytes', 'rtime',
                        'wtime']:
          print colname.rjust(8),
        print
        for diskname in sorted(disk_after):
          before = disk_before[diskname]
          after = disk_after[diskname]
          (reads1, writes1, rbytes1, wbytes1, rtime1, wtime1) = before
          (reads2, writes2, rbytes2, wbytes2, rtime2, wtime2) = after
          print '', diskname.rjust(6),
          deltas = [reads2-reads1, writes2-writes1, rbytes2-rbytes1,
                    wbytes2-wbytes1, rtime2-rtime1, wtime2-wtime1]
          for delta in deltas:
            print str(delta).rjust(8),
          print

    if self.output_file:
      with open(self.output_file, 'w') as f:
        json.dump(self.results, f, indent=2)
      print
      print "Output file written to '%s'." % self.output_file

    print

  def _ParsePositiveInteger(self, val, msg):
    """Tries to convert val argument to a positive integer.

    Args:
      val: The value (as a string) to convert to a positive integer.
      msg: The error message to place in the CommandException on an error.

    Returns:
      A valid positive integer.

    Raises:
      CommandException: If the supplied value is not a valid positive integer.
    """
    try:
      val = int(val)
      if val < 1:
        raise CommandException(msg)
      return val
    except ValueError:
      raise CommandException(msg)

  def _ParseArgs(self):
    """Parses arguments for perfdiag command."""
    # From -n.
    self.num_iterations = 5
    # From -c.
    self.concurrency = 1
    # From -s.
    self.thru_filesize = 1048576
    # From -t.
    self.diag_tests = self.ALL_DIAG_TESTS
    # From -o.
    self.output_file = None
    # From -i.
    self.input_file = None

    if self.sub_opts:
      for o, a in self.sub_opts:
        if o == '-n':
          self.num_iterations = self._ParsePositiveInteger(
              a, 'The -n parameter must be a positive integer.')
        if o == '-c':
          self.concurrency = self._ParsePositiveInteger(
              a, 'The -c parameter must be a positive integer.')
        if o == '-s':
          self.thru_filesize = self._ParsePositiveInteger(
              a, 'The -s parameter must be a positive integer.')
        if o == '-t':
          self.diag_tests = []
          for test_name in a.strip().split(','):
            if test_name.lower() not in self.ALL_DIAG_TESTS:
              raise CommandException("List of test names (-t) contains invalid "
                                     "test name '%s'." % test_name)
            self.diag_tests.append(test_name)
        if o == '-o':
          self.output_file = os.path.abspath(a)
        if o == '-i':
          self.input_file = os.path.abspath(a)
          if not os.path.isfile(self.input_file):
            raise CommandException("Invalid input file (-i): '%s'." % a)
          try:
            with open(self.input_file, 'r') as f:
              self.results = json.load(f)
              print "Read input file: '%s'." % self.input_file
          except ValueError:
            raise CommandException("Could not decode input file (-i): '%s'." %
                                   a)
          return

    if not self.args:
      raise CommandException('Wrong number of arguments for "perfdiag" '
                             'command.')
    self.bucket_uri = self.suri_builder.StorageUri(self.args[0])
    if not self.bucket_uri.names_bucket():
      raise CommandException('The perfdiag command requires a URI that '
                             'specifies a bucket.\n"%s" is not '
                             'valid.' % self.bucket_uri)
    self.bucket = self.bucket_uri.get_bucket()

  # Command entry point.
  def RunCommand(self):
    """Called by gsutil when the command is being invoked."""
    self._ParseArgs()

    if self.input_file:
      self._DisplayResults()
      return 0

    print 'Number of iterations to run: %d' % self.num_iterations
    print 'Base bucket URI: %s' % self.bucket_uri
    print 'Concurrency level: %d' % self.concurrency
    print 'Throughput file size: %s' % MakeHumanReadable(self.thru_filesize)
    print 'Diagnostics to run: %s' % (', '.join(self.diag_tests))

    try:
      self._SetUp()

      # Collect generic system info.
      self._CollectSysInfo()
      # Collect netstat info and disk counters before tests (and again later).
      self.results['sysinfo']['netstat_start'] = self._GetTcpStats()
      if IS_LINUX:
        self.results['sysinfo']['disk_counters_start'] = self._GetDiskCounters()
      # Record bucket URI.
      self.results['bucket_uri'] = str(self.bucket_uri)

      if 'lat' in self.diag_tests:
        self._RunLatencyTests()
      if 'rthru' in self.diag_tests:
        self._RunReadThruTests()
      if 'wthru' in self.diag_tests:
        self._RunWriteThruTests()

      # Collect netstat info and disk counters after tests.
      self.results['sysinfo']['netstat_end'] = self._GetTcpStats()
      if IS_LINUX:
        self.results['sysinfo']['disk_counters_end'] = self._GetDiskCounters()

      self._DisplayResults()
    finally:
      self._TearDown()

    return 0

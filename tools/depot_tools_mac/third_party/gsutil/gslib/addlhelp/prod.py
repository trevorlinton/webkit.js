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
  If you use gsutil in large production tasks (such as uploading or
  downloading many GB of data each night), there are a number of things
  you can do to help ensure success. Specifically, this section discusses
  how to script large production tasks around gsutil's resumable transfer
  mechanism.


<B>BACKGROUND ON RESUMABLE TRANSFERS</B>
  First, it's helpful to understand gsutil's resumable transfer mechanism,
  and how your script needs to be implemented around this mechanism to work
  reliably. gsutil uses the resumable transfer support in the boto library
  when you attempt to upload or download a file larger than a configurable
  threshold (by default, this threshold is 1MB). When a transfer fails
  partway through (e.g., because of an intermittent network problem),
  boto uses a randomized binary exponential backoff-and-retry strategy:
  wait a random period between [0..1] seconds and retry; if that fails,
  wait a random period between [0..2] seconds and retry; and if that
  fails, wait a random period between [0..4] seconds, and so on, up to a
  configurable number of times (the default is 6 times). Thus, the retry
  actually spans a randomized period up to 1+2+4+8+16+32=63 seconds.

  If the transfer fails each of these attempts with no intervening
  progress, gsutil gives up on the transfer, but keeps a "tracker" file
  for it in a configurable location (the default location is ~/.gsutil/,
  in a file named by a combination of the SHA1 hash of the name of the
  bucket and object being transferred and the last 16 characters of the
  file name). When transfers fail in this fashion, you can rerun gsutil
  at some later time (e.g., after the networking problem has been
  resolved), and the resumable transfer picks up where it left off.


<B>SCRIPTING DATA TRANSFER TASKS</B>
  To script large production data transfer tasks around this mechanism,
  you can implement a script that runs periodically, determines which file
  transfers have not yet succeeded, and runs gsutil to copy them. Below,
  we offer a number of suggestions about how this type of scripting should
  be implemented:

  1. When resumable transfers fail without any progress 6 times in a row
  over the course of up to 63 seconds, it probably won't work to simply
  retry the transfer immediately. A more successful strategy would be to
  have a cron job that runs every 30 minutes, determines which transfers
  need to be run, and runs them. If the network experiences intermittent
  problems, the script picks up where it left off and will eventually
  succeed (once the network problem has been resolved).

  2. If your business depends on timely data transfer, you should consider
  implementing some network monitoring. For example, you can implement
  a task that attempts a small download every few minutes and raises an
  alert if the attempt fails for several attempts in a row (or more or less
  frequently depending on your requirements), so that your IT staff can
  investigate problems promptly. As usual with monitoring implementations,
  you should experiment with the alerting thresholds, to avoid false
  positive alerts that cause your staff to begin ignoring the alerts.

  3. There are a variety of ways you can determine what files remain to be
  transferred. We recommend that you avoid attempting to get a complete
  listing of a bucket containing many objects (e.g., tens of thousands
  or more). One strategy is to structure your object names in a way that
  represents your transfer process, and use gsutil prefix wildcards to
  request partial bucket listings. For example, if your periodic process
  involves downloading the current day's objects, you could name objects
  using a year-month-day-object-ID format and then find today's objects by
  using a command like gsutil ls gs://bucket/2011-09-27-*. Note that it
  is more efficient to have a non-wildcard prefix like this than to use
  something like gsutil ls gs://bucket/*-2011-09-27. The latter command
  actually requests a complete bucket listing and then filters in gsutil,
  while the former asks Google Storage to return the subset of objects
  whose names start with everything up to the *.

  For data uploads, another technique would be to move local files from a "to
  be processed" area to a "done" area as your script successfully copies files
  to the cloud. You can do this in parallel batches by using a command like:

    gsutil -m cp -R to_upload/subdir_$i gs://bucket/subdir_$i

  where i is a shell loop variable. Make sure to check the shell $status
  variable is 0 after each gsutil cp command, to detect if some of the copies
  failed, and rerun the affected copies.

  With this strategy, the file system keeps track of all remaining work to
  be done.

  4. If you have really large numbers of objects in a single bucket
  (say hundreds of thousands or more), you should consider tracking your
  objects in a database instead of using bucket listings to enumerate
  the objects. For example this database could track the state of your
  downloads, so you can determine what objects need to be downloaded by
  your periodic download script by querying the database locally instead
  of performing a bucket listing.

  5. Make sure you don't delete partially downloaded files after a transfer
  fails: gsutil picks up where it left off (and performs an MD5 check of
  the final downloaded content to ensure data integrity), so deleting
  partially transferred files will cause you to lose progress and make
  more wasteful use of your network. You should also make sure whatever
  process is waiting to consume the downloaded data doesn't get pointed
  at the partially downloaded files. One way to do this is to download
  into a staging directory and then move successfully downloaded files to
  a directory where consumer processes will read them.

  6. If you have a fast network connection, you can speed up the transfer of
  large numbers of files by using the gsutil -m (multi-threading /
  multi-processing) option. Be aware, however, that gsutil doesn't attempt to
  keep track of which files were downloaded successfully in cases where some
  files failed to download. For example, if you use multi-threaded transfers
  to download 100 files and 3 failed to download, it is up to your scripting
  process to determine which transfers didn't succeed, and retry them. A
  periodic check-and-run approach like outlined earlier would handle this case.

  If you use parallel transfers (gsutil -m) you might want to experiment with
  the number of threads being used (via the parallel_thread_count setting
  in the .boto config file). By default, gsutil uses 24 threads. Depending
  on your network speed, available memory, CPU load, and other conditions,
  this may or may not be optimal. Try experimenting with higher or lower
  numbers of threads, to find the best number of threads for your environment.
""")


class CommandOptions(HelpProvider):
  """Additional help about using gsutil for production tasks."""

  help_spec = {
    # Name of command or auxiliary help info for which this help applies.
    HELP_NAME : 'prod',
    # List of help name aliases.
    HELP_NAME_ALIASES : ['production', 'resumable', 'resumable upload',
                         'resumable transfer', 'resumable download',
                         'scripts', 'scripting'],
    # Type of help:
    HELP_TYPE : HelpType.ADDITIONAL_HELP,
    # One line summary of this help.
    HELP_ONE_LINE_SUMMARY : 'Scripting production data transfers with gsutil',
    # The full help text.
    HELP_TEXT : _detailed_help_text,
  }

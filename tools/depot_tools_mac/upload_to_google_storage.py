#!/usr/bin/env python
# Copyright (c) 2012 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

"""Uploads files to Google Storage content addressed."""

import hashlib
import optparse
import os
import Queue
import re
import stat
import sys
import threading
import time

from download_from_google_storage import check_bucket_permissions
from download_from_google_storage import get_sha1
from download_from_google_storage import Gsutil
from download_from_google_storage import printer_worker

GSUTIL_DEFAULT_PATH = os.path.join(
    os.path.dirname(os.path.abspath(__file__)),
    'third_party', 'gsutil', 'gsutil')

USAGE_STRING = """%prog [options] target [target2 ...].
Target is the file intended to be uploaded to Google Storage.
If target is "-", then a list of files will be taken from standard input

This script will generate a file (original filename).sha1 containing the
sha1 sum of the uploaded file.
It is recommended that the .sha1 file is checked into the repository,
the original file removed from the repository, and a hook added to the
DEPS file to call download_from_google_storage.py.

Example usages
--------------

Scan the current directory and upload all files larger than 1MB:
find . -name .svn -prune -o -size +1000k -type f -print0 | %prog -0 -b bkt -
(Replace "bkt" with the name of a writable bucket.)
"""


def get_md5(filename):
  md5_calculator = hashlib.md5()
  with open(filename, 'rb') as f:
    while True:
      chunk = f.read(1024*1024)
      if not chunk:
        break
      md5_calculator.update(chunk)
  return md5_calculator.hexdigest()


def get_md5_cached(filename):
  """Don't calculate the MD5 if we can find a .md5 file."""
  # See if we can find an existing MD5 sum stored in a file.
  if os.path.exists('%s.md5' % filename):
    with open('%s.md5' % filename, 'rb') as f:
      md5_match = re.search('([a-z0-9]{32})', f.read())
      if md5_match:
        return md5_match.group(1)
  else:
    md5_hash = get_md5(filename)
    with open('%s.md5' % filename, 'wb') as f:
      f.write(md5_hash)
    return md5_hash


def _upload_worker(
    thread_num, upload_queue, base_url, gsutil, md5_lock, force,
    use_md5, stdout_queue, ret_codes):
  while True:
    filename, sha1_sum = upload_queue.get()
    if not filename:
      break
    file_url = '%s/%s' % (base_url, sha1_sum)
    if gsutil.check_call('ls', file_url)[0] == 0 and not force:
      # File exists, check MD5 hash.
      _, out, _ = gsutil.check_call('ls', '-L', file_url)
      etag_match = re.search('ETag:\s+([a-z0-9]{32})', out)
      if etag_match:
        remote_md5 = etag_match.group(1)
        # Calculate the MD5 checksum to match it to Google Storage's ETag.
        with md5_lock:
          if use_md5:
            local_md5 = get_md5_cached(filename)
          else:
            local_md5 = get_md5(filename)
        if local_md5 == remote_md5:
          stdout_queue.put(
              '%d> File %s already exists and MD5 matches, upload skipped' %
              (thread_num, filename))
          continue
    stdout_queue.put('%d> Uploading %s...' % (
        thread_num, filename))
    code, _, err = gsutil.check_call('cp', '-q', filename, file_url)
    if code != 0:
      ret_codes.put(
          (code,
           'Encountered error on uploading %s to %s\n%s' %
           (filename, file_url, err)))
      continue

    # Mark executable files with the header "x-goog-meta-executable: 1" which
    # the download script will check for to preserve the executable bit.
    if not sys.platform.startswith('win'):
      if os.stat(filename).st_mode & stat.S_IEXEC:
        code, _, err = gsutil.check_call('setmeta', '-h',
                                         'x-goog-meta-executable:1', file_url)
        if code:
          ret_codes.put(
              (code,
               'Encountered error on setting metadata on %s\n%s' %
               (file_url, err)))


def get_targets(args, parser, use_null_terminator):
  if not args:
    parser.error('Missing target.')

  if len(args) == 1 and args[0] == '-':
    # Take stdin as a newline or null seperated list of files.
    if use_null_terminator:
      return sys.stdin.read().split('\0')
    else:
      return sys.stdin.read().splitlines()
  else:
    return args


def upload_to_google_storage(
    input_filenames, base_url, gsutil, force,
    use_md5, num_threads, skip_hashing):
  # We only want one MD5 calculation happening at a time to avoid HD thrashing.
  md5_lock = threading.Lock()

  # Start up all the worker threads plus the printer thread.
  all_threads = []
  ret_codes = Queue.Queue()
  ret_codes.put((0, None))
  upload_queue = Queue.Queue()
  upload_timer = time.time()
  stdout_queue = Queue.Queue()
  printer_thread = threading.Thread(target=printer_worker, args=[stdout_queue])
  printer_thread.daemon = True
  printer_thread.start()
  for thread_num in range(num_threads):
    t = threading.Thread(
        target=_upload_worker,
        args=[thread_num, upload_queue, base_url, gsutil, md5_lock,
              force, use_md5, stdout_queue, ret_codes])
    t.daemon = True
    t.start()
    all_threads.append(t)

  # We want to hash everything in a single thread since its faster.
  # The bottleneck is in disk IO, not CPU.
  hashing_start = time.time()
  for filename in input_filenames:
    if not os.path.exists(filename):
      stdout_queue.put('Main> Error: %s not found, skipping.' % filename)
      continue
    if os.path.exists('%s.sha1' % filename) and skip_hashing:
      stdout_queue.put(
          'Main> Found hash for %s, sha1 calculation skipped.' % filename)
      with open(filename + '.sha1', 'rb') as f:
        sha1_file = f.read(1024)
      if not re.match('^([a-z0-9]{40})$', sha1_file):
        print >> sys.stderr, 'Invalid sha1 hash file %s.sha1' % filename
        return 1
      upload_queue.put((filename, sha1_file))
      continue
    stdout_queue.put('Main> Calculating hash for %s...' % filename)
    sha1_sum = get_sha1(filename)
    with open(filename + '.sha1', 'wb') as f:
      f.write(sha1_sum)
    stdout_queue.put('Main> Done calculating hash for %s.' % filename)
    upload_queue.put((filename, sha1_sum))
  hashing_duration = time.time() - hashing_start

  # Wait for everything to finish.
  for _ in all_threads:
    upload_queue.put((None, None))  # To mark the end of the work queue.
  for t in all_threads:
    t.join()
  stdout_queue.put(None)
  printer_thread.join()

  # Print timing information.
  print 'Hashing %s files took %1f seconds' % (
      len(input_filenames), hashing_duration)
  print 'Uploading took %1f seconds' % (time.time() - upload_timer)

  # See if we ran into any errors.
  max_ret_code = 0
  for ret_code, message in ret_codes.queue:
    max_ret_code = max(ret_code, max_ret_code)
    if message:
      print >> sys.stderr, message

  if not max_ret_code:
    print 'Success!'

  return max_ret_code


def main(args):
  parser = optparse.OptionParser(USAGE_STRING)
  parser.add_option('-b', '--bucket',
                    help='Google Storage bucket to upload to.')
  parser.add_option('-e', '--boto', help='Specify a custom boto file.')
  parser.add_option('-f', '--force', action='store_true',
                    help='Force upload even if remote file exists.')
  parser.add_option('-g', '--gsutil_path', default=GSUTIL_DEFAULT_PATH,
                    help='Path to the gsutil script.')
  parser.add_option('-m', '--use_md5', action='store_true',
                    help='Generate MD5 files when scanning, and don\'t check '
                    'the MD5 checksum if a .md5 file is found.')
  parser.add_option('-t', '--num_threads', default=1, type='int',
                    help='Number of uploader threads to run.')
  parser.add_option('-s', '--skip_hashing', action='store_true',
                    help='Skip hashing if .sha1 file exists.')
  parser.add_option('-0', '--use_null_terminator', action='store_true',
                    help='Use \\0 instead of \\n when parsing '
                    'the file list from stdin.  This is useful if the input '
                    'is coming from "find ... -print0".')
  (options, args) = parser.parse_args()

  # Enumerate our inputs.
  input_filenames = get_targets(args, parser, options.use_null_terminator)

  # Make sure we can find a working instance of gsutil.
  if os.path.exists(GSUTIL_DEFAULT_PATH):
    gsutil = Gsutil(GSUTIL_DEFAULT_PATH, boto_path=options.boto,
                    bypass_prodaccess=True)
  else:
    gsutil = None
    for path in os.environ["PATH"].split(os.pathsep):
      if os.path.exists(path) and 'gsutil' in os.listdir(path):
        gsutil = Gsutil(os.path.join(path, 'gsutil'), boto_path=options.boto)
    if not gsutil:
      parser.error('gsutil not found in %s, bad depot_tools checkout?' %
                   GSUTIL_DEFAULT_PATH)

  # Check we have a valid bucket with valid permissions.
  base_url, code = check_bucket_permissions(options.bucket, gsutil)
  if code:
    return code

  return upload_to_google_storage(
      input_filenames, base_url, gsutil, options.force, options.use_md5,
      options.num_threads, options.skip_hashing)


if __name__ == '__main__':
  sys.exit(main(sys.argv))

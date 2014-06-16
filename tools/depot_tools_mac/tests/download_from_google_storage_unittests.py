#!/usr/bin/env python
# Copyright (c) 2012 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.
# pylint: disable=W0212

"""Unit tests for download_from_google_storage.py."""

import optparse
import os
import Queue
import shutil
import sys
import tempfile
import threading
import unittest

sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

import upload_to_google_storage
import download_from_google_storage

# ../third_party/gsutil/gsutil
GSUTIL_DEFAULT_PATH = os.path.join(
    os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
    'third_party', 'gsutil', 'gsutil')
TEST_DIR = os.path.dirname(os.path.abspath(__file__))


class GsutilMock(object):
  def __init__(self, path, boto_path, timeout=None):
    self.path = path
    self.timeout = timeout
    self.boto_path = boto_path
    self.expected = []
    self.history = []
    self.lock = threading.Lock()

  def add_expected(self, return_code, out, err):
    self.expected.append((return_code, out, err))

  def append_history(self, method, args):
    self.history.append((method, args))

  def call(self, *args):
    with self.lock:
      self.append_history('call', args)
      if self.expected:
        return self.expected.pop(0)[0]
      else:
        return 0

  def check_call(self, *args):
    with self.lock:
      self.append_history('check_call', args)
      if self.expected:
        return self.expected.pop(0)
      else:
        return (0, '', '')


class GstoolsUnitTests(unittest.TestCase):
  def setUp(self):
    self.temp_dir = tempfile.mkdtemp(prefix='gstools_test')
    self.base_path = os.path.join(self.temp_dir, 'test_files')
    shutil.copytree(os.path.join(TEST_DIR, 'gstools'), self.base_path)

  def cleanUp(self):
    shutil.rmtree(self.temp_dir)

  def test_gsutil(self):
    gsutil = download_from_google_storage.Gsutil(GSUTIL_DEFAULT_PATH, None)
    self.assertEqual(gsutil.path, GSUTIL_DEFAULT_PATH)
    code, _, err = gsutil.check_call()
    self.assertEqual(code, 0)
    self.assertEqual(err, '')

  def test_get_sha1(self):
    lorem_ipsum = os.path.join(self.base_path, 'lorem_ipsum.txt')
    self.assertEqual(
        download_from_google_storage.get_sha1(lorem_ipsum),
        '7871c8e24da15bad8b0be2c36edc9dc77e37727f')

  def test_get_md5(self):
    lorem_ipsum = os.path.join(self.base_path, 'lorem_ipsum.txt')
    self.assertEqual(
        upload_to_google_storage.get_md5(lorem_ipsum),
        '634d7c1ed3545383837428f031840a1e')

  def test_get_md5_cached_read(self):
    lorem_ipsum = os.path.join(self.base_path, 'lorem_ipsum.txt')
    # Use a fake 'stale' MD5 sum.  Expected behavior is to return stale sum.
    self.assertEqual(
        upload_to_google_storage.get_md5_cached(lorem_ipsum),
        '734d7c1ed3545383837428f031840a1e')

  def test_get_md5_cached_write(self):
    lorem_ipsum2 = os.path.join(self.base_path, 'lorem_ipsum2.txt')
    lorem_ipsum2_md5 = os.path.join(self.base_path, 'lorem_ipsum2.txt.md5')
    if os.path.exists(lorem_ipsum2_md5):
      os.remove(lorem_ipsum2_md5)
    # Use a fake 'stale' MD5 sum.  Expected behavior is to return stale sum.
    self.assertEqual(
        upload_to_google_storage.get_md5_cached(lorem_ipsum2),
        '4c02d1eb455a0f22c575265d17b84b6d')
    self.assertTrue(os.path.exists(lorem_ipsum2_md5))
    self.assertEqual(
        open(lorem_ipsum2_md5, 'rb').read(),
        '4c02d1eb455a0f22c575265d17b84b6d')
    os.remove(lorem_ipsum2_md5)  # Clean up.
    self.assertFalse(os.path.exists(lorem_ipsum2_md5))


class DownloadTests(unittest.TestCase):
  def setUp(self):
    self.gsutil = GsutilMock(GSUTIL_DEFAULT_PATH, None)
    self.temp_dir = tempfile.mkdtemp(prefix='gstools_test')
    self.checkout_test_files = os.path.join(
        TEST_DIR, 'gstools', 'download_test_data')
    self.base_path = os.path.join(
        self.temp_dir, 'download_test_data')
    shutil.copytree(self.checkout_test_files, self.base_path)
    self.base_url = 'gs://sometesturl'
    self.parser = optparse.OptionParser()
    self.queue = Queue.Queue()
    self.ret_codes = Queue.Queue()
    self.lorem_ipsum = os.path.join(self.base_path, 'lorem_ipsum.txt')
    self.lorem_ipsum_sha1 = '7871c8e24da15bad8b0be2c36edc9dc77e37727f'
    self.maxDiff = None

  def cleanUp(self):
    shutil.rmtree(self.temp_dir)

  def test_enumerate_files_non_recursive(self):
    queue_size = download_from_google_storage.enumerate_work_queue(
        self.base_path, self.queue, True, False, False, None, False, False)
    expected_queue = [
        ('e6c4fbd4fe7607f3e6ebf68b2ea4ef694da7b4fe',
            os.path.join(self.base_path, 'rootfolder_text.txt')),
       ('7871c8e24da15bad8b0be2c36edc9dc77e37727f',
            os.path.join(self.base_path, 'uploaded_lorem_ipsum.txt'))]
    self.assertEqual(sorted(expected_queue), sorted(self.queue.queue))
    self.assertEqual(queue_size, 2)

  def test_enumerate_files_recursive(self):
    queue_size = download_from_google_storage.enumerate_work_queue(
        self.base_path, self.queue, True, True, False, None, False, False)
    expected_queue = [
        ('e6c4fbd4fe7607f3e6ebf68b2ea4ef694da7b4fe',
            os.path.join(self.base_path, 'rootfolder_text.txt')),
        ('7871c8e24da15bad8b0be2c36edc9dc77e37727f',
            os.path.join(self.base_path, 'uploaded_lorem_ipsum.txt')),
        ('b5415aa0b64006a95c0c409182e628881d6d6463',
            os.path.join(self.base_path, 'subfolder', 'subfolder_text.txt'))]
    self.assertEqual(sorted(expected_queue), sorted(self.queue.queue))
    self.assertEqual(queue_size, 3)

  def test_download_worker_single_file(self):
    sha1_hash = '7871c8e24da15bad8b0be2c36edc9dc77e37727f'
    input_filename = '%s/%s' % (self.base_url, sha1_hash)
    output_filename = os.path.join(self.base_path, 'uploaded_lorem_ipsum.txt')
    self.queue.put((sha1_hash, output_filename))
    self.queue.put((None, None))
    stdout_queue = Queue.Queue()
    download_from_google_storage._downloader_worker_thread(
        0, self.queue, False, self.base_url, self.gsutil,
        stdout_queue, self.ret_codes, True)
    expected_calls = [
        ('check_call',
            ('ls', input_filename)),
        ('check_call',
            ('cp', '-q', input_filename, output_filename))]
    if sys.platform != 'win32':
      expected_calls.append(
          ('check_call',
           ('ls',
            '-L',
            'gs://sometesturl/7871c8e24da15bad8b0be2c36edc9dc77e37727f')))
    expected_output = [
        '0> Downloading %s...' % output_filename]
    expected_ret_codes = []
    self.assertEqual(list(stdout_queue.queue), expected_output)
    self.assertEqual(self.gsutil.history, expected_calls)
    self.assertEqual(list(self.ret_codes.queue), expected_ret_codes)

  def test_download_worker_skips_file(self):
    sha1_hash = 'e6c4fbd4fe7607f3e6ebf68b2ea4ef694da7b4fe'
    output_filename = os.path.join(self.base_path, 'rootfolder_text.txt')
    self.queue.put((sha1_hash, output_filename))
    self.queue.put((None, None))
    stdout_queue = Queue.Queue()
    download_from_google_storage._downloader_worker_thread(
        0, self.queue, False, self.base_url, self.gsutil,
        stdout_queue, self.ret_codes, True)
    expected_output = [
        '0> File %s exists and SHA1 matches. Skipping.' % output_filename
    ]
    self.assertEqual(list(stdout_queue.queue), expected_output)
    self.assertEqual(self.gsutil.history, [])

  def test_download_worker_skips_not_found_file(self):
    sha1_hash = '7871c8e24da15bad8b0be2c36edc9dc77e37727f'
    input_filename = '%s/%s' % (self.base_url, sha1_hash)
    output_filename = os.path.join(self.base_path, 'uploaded_lorem_ipsum.txt')
    self.queue.put((sha1_hash, output_filename))
    self.queue.put((None, None))
    stdout_queue = Queue.Queue()
    self.gsutil.add_expected(1, '', '')  # Return error when 'ls' is called.
    download_from_google_storage._downloader_worker_thread(
        0, self.queue, False, self.base_url, self.gsutil,
        stdout_queue, self.ret_codes, True)
    expected_output = [
        '0> File %s for %s does not exist, skipping.' % (
            input_filename, output_filename),
    ]
    expected_calls = [
        ('check_call',
            ('ls', input_filename))
    ]
    expected_ret_codes = [
        (1, 'File %s for %s does not exist.' % (
            input_filename, output_filename))
    ]
    self.assertEqual(list(stdout_queue.queue), expected_output)
    self.assertEqual(self.gsutil.history, expected_calls)
    self.assertEqual(list(self.ret_codes.queue), expected_ret_codes)

  def test_download_cp_fails(self):
    sha1_hash = '7871c8e24da15bad8b0be2c36edc9dc77e37727f'
    input_filename = '%s/%s' % (self.base_url, sha1_hash)
    output_filename = os.path.join(self.base_path, 'uploaded_lorem_ipsum.txt')
    self.gsutil.add_expected(0, '', '')
    self.gsutil.add_expected(101, '', 'Test error message.')
    code = download_from_google_storage.download_from_google_storage(
        input_filename=sha1_hash,
        base_url=self.base_url,
        gsutil=self.gsutil,
        num_threads=1,
        directory=False,
        recursive=False,
        force=True,
        output=output_filename,
        ignore_errors=False,
        sha1_file=False,
        verbose=True,
        auto_platform=False)
    expected_calls = [
        ('check_call',
            ('ls', input_filename)),
        ('check_call',
            ('cp', '-q', input_filename, output_filename))
    ]
    if sys.platform != 'win32':
      expected_calls.append(
          ('check_call',
           ('ls',
            '-L',
            'gs://sometesturl/7871c8e24da15bad8b0be2c36edc9dc77e37727f')))
    self.assertEqual(self.gsutil.history, expected_calls)
    self.assertEqual(code, 101)

  def test_download_directory_no_recursive_non_force(self):
    sha1_hash = '7871c8e24da15bad8b0be2c36edc9dc77e37727f'
    input_filename = '%s/%s' % (self.base_url, sha1_hash)
    output_filename = os.path.join(self.base_path, 'uploaded_lorem_ipsum.txt')
    code = download_from_google_storage.download_from_google_storage(
        input_filename=self.base_path,
        base_url=self.base_url,
        gsutil=self.gsutil,
        num_threads=1,
        directory=True,
        recursive=False,
        force=False,
        output=None,
        ignore_errors=False,
        sha1_file=False,
        verbose=True,
        auto_platform=False)
    expected_calls = [
        ('check_call',
            ('ls', input_filename)),
        ('check_call',
            ('cp', '-q', input_filename, output_filename))]
    if sys.platform != 'win32':
      expected_calls.append(
          ('check_call',
           ('ls',
            '-L',
            'gs://sometesturl/7871c8e24da15bad8b0be2c36edc9dc77e37727f')))
    self.assertEqual(self.gsutil.history, expected_calls)
    self.assertEqual(code, 0)


if __name__ == '__main__':
  unittest.main()

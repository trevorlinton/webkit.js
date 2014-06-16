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

"""Static data and helper functions."""

import math
import re
import os
import sys
import time

import boto
from third_party.retry_decorator.decorators import retry

# We don't use the oauth2 authentication plugin directly; importing it here
# ensures that it's loaded and available by default. Note: we made this static
# state instead of Command instance state because the top-level gsutil code
# needs to check it.
HAVE_OAUTH2 = False
try:
  from oauth2_plugin import oauth2_helper
  HAVE_OAUTH2 = True
except ImportError:
  pass

TWO_MB = 2 * 1024 * 1024

NO_MAX = sys.maxint

# Binary exponentiation strings.
_EXP_STRINGS = [
  (0, 'B', 'bit'),
  (10, 'KB', 'kbit'),
  (20, 'MB', 'Mbit'),
  (30, 'GB', 'Gbit'),
  (40, 'TB', 'Tbit'),
  (50, 'PB', 'Pbit'),
]

# Detect platform types.
IS_WINDOWS = 'win32' in str(sys.platform).lower()
IS_LINUX = 'linux' in str(sys.platform).lower()
IS_OSX = 'darwin' in str(sys.platform).lower()

Retry = retry

# Enum class for specifying listing style.
class ListingStyle(object):
  SHORT = 'SHORT'
  LONG = 'LONG'
  LONG_LONG = 'LONG_LONG'


def HasConfiguredCredentials(bypass_prodaccess):
  """Determines if boto credential/config file exists."""
  config = boto.config
  has_goog_creds = (config.has_option('Credentials', 'gs_access_key_id') and
                    config.has_option('Credentials', 'gs_secret_access_key'))
  has_amzn_creds = (config.has_option('Credentials', 'aws_access_key_id') and
                    config.has_option('Credentials', 'aws_secret_access_key'))
  has_oauth_creds = (HAVE_OAUTH2 and
      config.has_option('Credentials', 'gs_oauth2_refresh_token'))
  has_auth_plugins = config.has_option('Plugin', 'plugin_directory')
  # Pretend prodaccess doesn't exist if --bypass_prodaccess is passed in.
  has_prodaccess = HasExecutable('prodaccess') and not bypass_prodaccess
  return (has_goog_creds or has_amzn_creds or has_oauth_creds
          or has_auth_plugins or has_prodaccess)


def _RoundToNearestExponent(num):
  i = 0
  while i+1 < len(_EXP_STRINGS) and num >= (2 ** _EXP_STRINGS[i+1][0]):
    i += 1
  return i, round(float(num) / 2 ** _EXP_STRINGS[i][0], 2)

def MakeHumanReadable(num):
  """Generates human readable string for a number of bytes.

  Args:
    num: The number, in bytes.

  Returns:
    A string form of the number using size abbreviations (KB, MB, etc.).
  """
  i, rounded_val = _RoundToNearestExponent(num)
  return '%s %s' % (rounded_val, _EXP_STRINGS[i][1])

def MakeBitsHumanReadable(num):
  """Generates human readable string for a number of bits.

  Args:
    num: The number, in bits.

  Returns:
    A string form of the number using bit size abbreviations (kbit, Mbit, etc.)
  """
  i, rounded_val = _RoundToNearestExponent(num)
  return '%s %s' % (rounded_val, _EXP_STRINGS[i][2])

def Percentile(values, percent, key=lambda x:x):
  """Find the percentile of a list of values.

  Taken from: http://code.activestate.com/recipes/511478/

  Args:
    values: a list of numeric values. Note that the values MUST BE already
            sorted.
    percent: a float value from 0.0 to 1.0.
    key: optional key function to compute value from each element of the list
         of values.

  Returns:
    The percentile of the values.
  """
  if not values:
    return None
  k = (len(values) - 1) * percent
  f = math.floor(k)
  c = math.ceil(k)
  if f == c:
    return key(values[int(k)])
  d0 = key(values[int(f)]) * (c-k)
  d1 = key(values[int(c)]) * (k-f)
  return d0 + d1

def ExtractErrorDetail(e):
  """Extract <Details> text from XML content.

  Args:
    e: The GSResponseError that includes XML to be parsed.

  Returns:
    (exception_name, d), where d is <Details> text or None if not found.
  """
  exc_name_parts = re.split("[\.']", str(type(e)))
  if len(exc_name_parts) < 2:
    # Shouldn't happen, but have fallback in case.
    exc_name = str(type(e))
  else:
    exc_name = exc_name_parts[-2]
  if not hasattr(e, 'body'):
    return (exc_name, None)
  detail_start = e.body.find('<Details>')
  detail_end = e.body.find('</Details>')
  if detail_start != -1 and detail_end != -1:
    return (exc_name, e.body[detail_start+9:detail_end])
  return (exc_name, None)


def HasExecutable(filename):
  """Determines if an executable is available on the system."""
  for path in os.environ['PATH'].split(os.pathsep):
    exe_file = os.path.join(path, filename)
    if os.path.exists(exe_file) and os.access(exe_file, os.X_OK):
      return True
  return False

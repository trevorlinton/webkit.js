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

from gslib.exception import ProjectIdException
from gslib.wildcard_iterator import WILDCARD_BUCKET_ITERATOR

GOOG_PROJ_ID_HDR = 'x-goog-project-id'


class ProjectIdHandler(object):
  """Google Project ID header handling."""

  def __init__(self):
    """Instantiates Project ID handler. Call after boto config file loaded."""
    config = boto.config
    self.project_id = config.get_value('GSUtil', 'default_project_id')

  def SetProjectId(self, project_id):
    """Overrides project ID value from config file default.

    Args:
      project_id: Project ID to use.
    """
    self.project_id = project_id

  def FillInProjectHeaderIfNeeded(self, command, uri, headers):
    """Fills project ID header into headers if defined and applicable.

    Args:
      command: The command being run.
      uri: The URI against which this command is being run.
      headers: Dictionary containing optional HTTP headers to pass to boto.
          Must not be None.
    """

    # We only include the project ID header if it's a GS URI and a project_id
    # was specified and
    # (it's an 'mb', 'disablelogging, or 'enablelogging' command or
    #  a boto request in integration tests or
    #  (an 'ls' command that doesn't specify a bucket or wildcarded bucket)).
    if (uri.scheme.lower() == 'gs' and self.project_id
        and (command == 'mb' or command == 'disablelogging'
             or command == 'enablelogging'
             or command == 'test'
             or (command == 'ls' and not uri.names_bucket())
             or (command == WILDCARD_BUCKET_ITERATOR))):
      # Note: check for None (as opposed to "not headers") here because
      # it's ok to pass empty headers.
      if headers is None:
        raise ProjectIdException(
            'FillInProjectHeaderIfNeeded called with headers=None')
      headers[GOOG_PROJ_ID_HDR] = self.project_id
    elif headers.has_key(GOOG_PROJ_ID_HDR):
      del headers[GOOG_PROJ_ID_HDR]

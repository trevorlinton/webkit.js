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
  This section discusses how to work with projects in Google Cloud Storage.

  For more information about using the Google APIs Console to administer
  project memberships (which are automatically included in ACLs for buckets
  you create) see https://code.google.com/apis/console#:storage:access.


<B>PROJECT MEMBERS AND PERMISSIONS</B>
  There are three groups of users associated with each project:

    - Project Owners are allowed to list, create, and delete buckets,
      and can also perform administrative tasks like adding and removing team
      members and changing billing. The project owners group is the owner
      of all buckets within a project, regardless of who may be the original
      bucket creator.

    - Project Editors are allowed to list, create, and delete buckets.

    - All Project Team Members are allowed to list buckets within a project.

  These projects make it easy to set up a bucket and start uploading objects
  with access control appropriate for a project at your company, as the three
  group memberships can be configured by your administrative staff. Control
  over projects and their associated memberships is provided by the Google
  APIs Console (https://code.google.com/apis/console).


<B>HOW PROJECT MEMBERSHIP IS REFLECTED IN BUCKET ACLS</B>
  When you create a bucket without specifying an ACL the bucket is given a
  "project-private" ACL, which grants the permissions described in the previous
  section. Here's an example of such an ACL:

  <AccessControlList>
    <Owner>
      <ID>
        00b4903a9740e42c29800f53bd5a9a62a2f96eb3f64a4313a115df3f3a776bf7
      </ID>
    </Owner>
    <Entries>
      <Entry>
        <Scope type="GroupById">
          <ID>
            00b4903a9740e42c29800f53bd5a9a62a2f96eb3f64a4313a115df3f3a776bf7
          </ID>
        </Scope>
        <Permission>
          FULL_CONTROL
        </Permission>
      </Entry>
      <Entry>
        <Scope type="GroupById">
          <ID>
            00b4903a977fd817e9da167bc81306489181a110456bb635f466d71cf90a0d51
          </ID>
        </Scope>
        <Permission>
          FULL_CONTROL
        </Permission>
      </Entry>
      <Entry>
        <Scope type="GroupById">
          <ID>
            00b4903a974898cc8fc309f2f2835308ba3d3df1b889d3fc7e33e187d52d8e71
          </ID>
        </Scope>
        <Permission>
          READ
        </Permission>
      </Entry>
    </Entries>
  </AccessControlList>

  The three "GroupById" scopes are the canonical IDs for the Project Owners,
  Project Editors, and All Project Team Members groups.

  You can edit the bucket ACL if you want to (see "gsutil help setacl"),
  but for many cases you'll never need to, and instead can change group
  membership via the APIs console.

<B>IDENTIFYING PROJECTS WHEN CREATING AND LISTING BUCKETS</B>
  When you create a bucket or list your buckets, you need to provide the
  project ID that want to create or list (using the gsutil mb -p option or
  the gsutil ls -p option, respectively). The project's name shown in the
  Google APIs Console is a user-friendly name that you can choose; this is
  not the project ID required by the gsutil mb and ls commands. To find the
  project ID, go to the Storage Access pane in the Google APIs Console. Your
  project ID is listed under Identifying your project.
""")


class CommandOptions(HelpProvider):
  """Additional help about Access Control Lists."""

  help_spec = {
    # Name of command or auxiliary help info for which this help applies.
    HELP_NAME : 'projects',
    # List of help name aliases.
    HELP_NAME_ALIASES : ['apis console', 'console', 'dev console', 'project',
                         'proj', 'project-id'],
    # Type of help:
    HELP_TYPE : HelpType.ADDITIONAL_HELP,
    # One line summary of this help.
    HELP_ONE_LINE_SUMMARY : 'Working with projects',
    # The full help text.
    HELP_TEXT : _detailed_help_text,
  }

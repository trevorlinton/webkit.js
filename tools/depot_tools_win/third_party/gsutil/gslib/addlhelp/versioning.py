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
  Versioning-enabled buckets maintain an archive of objects, providing a way to
  un-delete data that you accidentally deleted, or to retrieve older versions of
  your data. You can turn versioning on or off for a bucket at any time. Turning
  versioning off leaves existing object versions in place, and simply causes the
  bucket to stop accumulating new object versions. In this case, if you upload
  to an existing object the current version is overwritten instead of creating
  a new version.

  Regardless of whether you have enabled versioning on a bucket, every object
  has two associated positive integer fields:
    - the generation, which is updated when the content of an object is
      overwritten.
    - the meta-generation, which identifies the metadata generation. It starts
      at 1; is updated every time the metadata (e.g., ACL or Content-Type) for a
      given content generation is updated; and gets reset when the generation
      number changes.

  Of these two integers, only the generation is used when working with versioned
  data. Both generation and meta-generation can be used with concurrency control
  (discussed in a later section).

  To work with object versioning in gsutil, you can use a flavor of storage URIs
  that that embed the object generation, which we refer to as version-specific URIs.
  For example, the version-less object URI:

    gs://bucket/object

  might have have two versions, with these version-specific URIs:

    gs://bucket/object#1360383693690000
    gs://bucket/object#1360383802725000
  
  The following sections discuss how to work with versioning and concurrency
  control.


<B>OBJECT VERSIONING</B>
  You can view, enable, and disable object versioning on a bucket using
  the getversioning and setversioning commands. For example:

    gsutil setversioning on gs://bucket

  will enable versioning for the named bucket. See 'gsutil help getversioning'
  and 'gsutil help setversioning' for additional details.

  To see all object versions in a versioning-enabled bucket along with
  their generation.meta-generation information, use gsutil ls -a:

    gsutil ls -a gs://bucket

  You can also specify particular objects for which you want to find the
  version-specific URI(s), or you can use wildcards:

    gsutil ls -a gs://bucket/object1 gs://bucket/images/*.jpg

  The generation values form a monotonically increasing sequence as you create
  additional object versions.  Because of this, the latest object version is
  always the last one listed in the gsutil ls output for a particular object.
  For example, if a bucket contains these three versions of gs://bucket/object:

    gs://bucket/object#1360035307075000
    gs://bucket/object#1360101007329000
    gs://bucket/object#1360102216114000

  then gs://bucket/object#1360102216114000 is the latest version and
  gs://bucket/object#1360035307075000 is the oldest available version.

  If you specify version-less URIs with gsutil, you will operate on the
  latest not-deleted version of an object, for example:

    gsutil cp gs://bucket/object ./dir

  or

    gsutil rm gs://bucket/object

  To operate on a specific object version, use a version-specific URI.
  For example, suppose the output of the above gsutil ls -a command is:

    gs://bucket/object#1360035307075000
    gs://bucket/object#1360101007329000

  In this case, the command:

    gsutil cp gs://bucket/object#1360035307075000 ./dir

  will retrieve the second most recent version of the object.

  Note that version-specific URIs cannot be the target of the gsutil cp
  command (trying to do so will result in an error), because writing to a
  versioned object always creates a new version.

  If an object has been deleted, it will not show up in a normal gsutil ls
  listing (i.e., ls without the -a option). You can restore a deleted object by
  running gsutil ls -a to find the available versions, and then copying one of
  the version-specific URIs to the version-less URI, for example:

    gsutil cp gs://bucket/object#1360101007329000 gs://bucket/object

  Note that when you do this it creates a new object version, which will incur
  additional charges. You can get rid of the extra copy by deleting the older
  version-specfic object:

    gsutil rm gs://bucket/object#1360101007329000

  Or you can combine the two steps by using the gsutil mv command:

    gsutil mv gs://bucket/object#1360101007329000 gs://bucket/object

  If you want to remove all versions of an object use the gsutil rm -a option:

    gsutil rm -a gs://bucket/object

  Note that there is no limit to the number of older versions of an object you
  will create if you continue to upload to the same object in a versioning-
  enabled bucket. It is your responsibility to delete versions beyond the ones
  you want to retain.


<B>CONCURRENCY CONTROL</B>
  If you are building an application using Google Cloud Storage, you may need to
  be careful about concurrency control. Normally gsutil itself isn't used for
  this purpose, but it's possible to write scripts around gsutil that perform
  concurrency control.

  For example, suppose you want to implement a "rolling update" system using
  gsutil, where a periodic job computes some data and uploads it to the cloud.
  On each run, the job starts with the data that it computed from last run, and
  computes a new value. To make this system robust, you need to have multiple
  machines on which the job can run, which raises the possibility that two
  simultaneous runs could attempt to update an object at the same time. This
  leads to the following potential race condition:
    - job 1 computes the new value to be written
    - job 2 computes the new value to be written
    - job 2 writes the new value
    - job 1 writes the new value

  In this case, the value that job 1 read is no longer current by the time
  it goes to write the updated object, and writing at this point would result
  in stale (or, depending on the application, corrupt) data.

  To prevent this, you can find the version-specific name of the object that was
  created, and then use the information contained in that URI to specify an
  x-goog-if-generation-match header on a subsequent gsutil cp command. You can
  do this in two steps. First, use the gsutil cp -v option at upload time to get
  the version-specific name of the object that was created, for example:

    gsutil cp -v file gs://bucket/object

  might output:

    Created: gs://bucket/object#1360432179236000

  You can extract the generation value from this object and then construct a
  subsequent gsutil command like this:

    gsutil -h x-goog-if-generation-match:1360432179236000 cp newfile \\
        gs://bucket/object

  This command requests Google Cloud Storage to attempt to upload newfile
  but to fail the request if the generation of newfile that is live at the
  time of the upload does not match that specified.

  If the command you use updates object metadata, you will need to find the
  current meta_generation for an object. To do this, use the gsutil ls -a and
  -l options. For example, the command:

    gsutil ls -l -a gs://bucket/object

  will output something like:

      64  2013-02-12T19:59:13  gs://bucket/object#1360699153986000  meta_generation=3
    1521  2013-02-13T02:04:08  gs://bucket/object#1360721048778000  meta_generation=2

  Given this information, you could use the following command to request setting
  the ACL on the older version of the object, such that the command will fail
  unless that is the current version of the data+metadata:

    gsutil -h x-goog-if-generation-match:1360699153986000 -h \\
      x-goog-if-metageneration-match:3 setacl public-read \\
      gs://bucket/object#1360699153986000

  Without adding these headers, the update would simply overwrite the existing
  ACL. Note that in contrast, the gsutil chacl command uses these headers
  automatically, because it performs a read-modify-write cycle in order to edit
  ACLs.

  If you want to experiment with how generations and metagenerations work, try
  the following. First, upload an object; then use gsutil ls -l -a to list all
  versions of the object, along with each version's meta_generation; then re-
  upload the object and repeat the gsutil ls -l -a. You should see two object
  versions, each with meta_generation=1. Now try setting the ACL, and rerun the
  gsutil ls -l -a. You should see the most recent object generation now has
  meta_generation=2.


<B>FOR MORE INFORMATION</B>
  For more details on how to use versioning and preconditions, see
  https://developers.google.com/storage/docs/object-versioning
""")


class CommandOptions(HelpProvider):
  """Additional help about object versioning."""

  help_spec = {
    # Name of command or auxiliary help info for which this help applies.
    HELP_NAME : 'versioning',
    # List of help name aliases.
    HELP_NAME_ALIASES : ['concurrency', 'concurrency control', 'versioning',
                         'versions'],
    # Type of help:
    HELP_TYPE : HelpType.ADDITIONAL_HELP,
    # One line summary of this help.
    HELP_ONE_LINE_SUMMARY : 'Working with object versions; concurrency control',
    # The full help text.
    HELP_TEXT : _detailed_help_text,
  }

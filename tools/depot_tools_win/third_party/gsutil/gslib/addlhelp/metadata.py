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
<B>OVERVIEW OF METADATA</B>
  Objects can have associated metadata, which control aspects of how
  GET requests are handled, including Content-Type, Cache-Control,
  Content-Disposition, and Content-Encoding (discussed in more detail in
  the subsections below). In addition, you can set custom metadata that
  can be used by applications (e.g., tagging that particular objects possess
  some property).

  There are two ways to set metadata on objects:

    - at upload time you can specify one or more headers to associate with
      objects, using the gsutil -h option.  For example, the following command
      would cause gsutil to set the Content-Type and Cache-Control for each
      of the files being uploaded:

        gsutil -h "Content-Type:text/html" -h "Cache-Control:public, max-age=3600" cp -r images gs://bucket/images

      Note that -h is an option on the gsutil command, not the cp sub-command.

    - You can set or remove metadata fields from already uploaded objects using
      the gsutil setmeta command. See "gsutil help setmeta".

  More details about specific pieces of metadata are discussed below.


<B>CONTENT TYPE</B>
  The most commonly set metadata is Content-Type (also known as MIME type),
  which allows browsers to render the object properly. 
  gsutil sets the Content-Type
  automatically at upload time, based on each filename extension. For
  example, uploading files with names ending in .txt will set Content-Type
  to text/plain. If you're running gsutil on Linux or MacOS and would prefer
  to have content type set based on naming plus content examination, see the
  use_magicfile configuration variable in the gsutil/boto configuration file
  (See also "gsutil help config"). In general, using use_magicfile is more
  robust and configurable, but is not available on Windows.

  If you specify a -h header when uploading content (like the example gsutil
  command given in the previous section), it overrides the Content-Type that
  would have been set based on filename extension or content.  This can be
  useful if the Content-Type detection algorithm doesn't work as desired
  for some of your files.

  You can also completely suppress content type detection in gsutil, by
  specifying an empty string on the Content-Type header:

    gsutil -h 'Content-Type:' cp -r images gs://bucket/images

  In this case, the Google Cloud Storage service will attempt to detect
  the content type. In general this approach will work better than using
  filename extension-based content detection in gsutil, because the list of
  filename extensions is kept more current in the server-side content detection
  system than in the Python library upon which gsutil content type detection
  depends. (For example, at the time of writing this, the filename extension
  ".webp" was recognized by the server-side content detection system, but
  not by gsutil.)


<B>CACHE-CONTROL</B>
  Another commonly set piece of metadata is Cache-Control, which allows
  you to control whether and for how long browser and Internet caches are
  allowed to cache your objects. Cache-Control only applies to objects with
  a public-read ACL. Non-public data are not cacheable.

  Here's an example of uploading an object set to allow caching:

    gsutil -h "Cache-Control:public,max-age=3600" cp -a public-read -r html gs://bucket/html

  This command would upload all files in the html directory (and subdirectories)
  and make them publicly readable and cacheable, with cache expiration of
  one hour.

  Note that if you allow caching, at download time you may see older versions
  of objects after uploading a newer replacement object. Note also that because
  objects can be cached at various places on the Internet there is no way to
  force a cached object to expire globally (unlike the way you can force your
  browser to refresh its cache).


<B>CONTENT-ENCODING</B>
  You could specify Content-Encoding to indicate that an object is compressed,
  using a command like:

    gsutil -h "Content-Encoding:gzip" cp *.gz gs://bucket/compressed

  Note that Google Cloud Storage does not compress or decompress objects. If
  you use this header to specify a compression type or compression algorithm
  (for example, deflate), Google Cloud Storage preserves the header but does
  not compress or decompress the object.  Instead, you need to ensure that
  the files have been compressed using the specified Content-Encoding before
  using gsutil to upload them.

  For compressible content, using Content-Encoding:gzip saves network and
  storage costs, and improves content serving performance (since most browsers
  are able to decompress objects served this way).

  Note also that gsutil provides an easy way to cause content to be compressed
  and stored with Content-Encoding:gzip: see the -z option in "gsutil help cp".


<B>CONTENT-DISPOSITION</B>
  You can set Content-Disposition on your objects, to specify presentation
  information about the data being transmitted. Here's an example:

    gsutil -h 'Content-Disposition:attachment; filename=filename.ext' \\
      cp -r attachments gs://bucket/attachments

  Setting the Content-Disposition allows you to control presentation style
  of the content, for example determining whether an attachment should be
  automatically displayed vs should require some form of action from the user to
  open it.  See http://www.w3.org/Protocols/rfc2616/rfc2616-sec19.html#sec19.5.1
  for more details about the meaning of Content-Disposition.


<B>CUSTOM METADATA</B>
  You can add your own custom metadata (e.g,. for use by your application)
  to an object by setting a header that starts with "x-goog-meta", for example:

    gsutil -h x-goog-meta-reviewer:jane cp mycode.java gs://bucket/reviews

  You can add multiple differently named custom metadata fields to each object.


<B>SETTABLE FIELDS; FIELD VALUES</B>
  You can't set some metadata fields, such as ETag and Content-Length. The
  fields you can set are:
    - Cache-Control
    - Content-Disposition
    - Content-Encoding
    - Content-Language
    - Content-MD5
    - Content-Type
    - Any field starting with X-GOOG-META- (i.e., custom metadata).

  Header names are case-insensitive.

  X-GOOG-META- fields can have data set to arbitrary Unicode values. All
  other fields must have ASCII values.


<B>VIEWING CURRENTLY SET METADATA</B>
  You can see what metadata is currently set on an object by using:

    gsutil ls -L gs://the_bucket/the_object
""")


class CommandOptions(HelpProvider):
  """Additional help about object metadata."""

  help_spec = {
    # Name of command or auxiliary help info for which this help applies.
    HELP_NAME : 'metadata',
    # List of help name aliases.
    HELP_NAME_ALIASES : ['cache-control', 'caching', 'content type',
                         'mime type', 'mime', 'type'],
    # Type of help:
    HELP_TYPE : HelpType.ADDITIONAL_HELP,
    # One line summary of this help.
    HELP_ONE_LINE_SUMMARY : 'Working with object metadata',
    # The full help text.
    HELP_TEXT : _detailed_help_text,
  }

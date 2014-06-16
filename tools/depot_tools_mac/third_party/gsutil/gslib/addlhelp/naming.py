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
<B>BUCKET NAME REQUIREMENTS</B>
  Google Cloud Storage has a single namespace, so you will not be allowed
  to create a bucket with a name already in use by another user. You can,
  however, carve out parts of the bucket name space corresponding to your
  company's domain name (see "DOMAIN NAMED BUCKETS").

  Bucket names must conform to standard DNS naming conventions. This is
  because a bucket name can appear in a DNS record as part of a CNAME
  redirect. In addition to meeting DNS naming requirements, Google Cloud
  Storage imposes other requirements on bucket naming. At a minimum, your
  bucket names must meet the following requirements:

    - Bucket names must contain only lowercase letters, numbers, dashes (-), and
      dots (.).

    - Bucket names must start and end with a number or letter.

    - Bucket names must contain 3 to 63 characters. Names containing dots can
      contain up to 222 characters, but each dot-separated component can be
      no longer than 63 characters.

    - Bucket names cannot be represented as an IPv4 address in dotted-decimal
      notation (for example, 192.168.5.4).

    - Bucket names cannot begin with the "goog" prefix.

    - For DNS compliance, you should not have a period adjacent to another
      period or dash. For example, ".." or "-." or ".-" are not acceptable.


<B>OBJECT NAME REQUIREMENTS</B>
  Object names can contain any sequence of Unicode characters, of length 1-1024
  bytes when UTF-8 encoded. Object names must not contain CarriageReturn,
  CarriageReturnLineFeed, or the XML-disallowed surrogate blocks (xFFFE
  or xFFFF).

  We highly recommend that you avoid using control characters that are illegal
  in XML 1.0 in your object names. These characters will cause XML listing
  issues when you try to list your objects.


<B>DOMAIN NAMED BUCKETS</B>
  You can carve out parts of the Google Cloud Storage bucket name space
  by creating buckets with domain names (like "example.com").

  Before you can create a bucket name containing one or more '.' characters,
  the following rules apply:
  - If the name is a syntactically valid DNS name ending with a
    currently-recognized top-level domain (such as .com), you will be required
    to verify domain ownership.
  - Otherwise you will be disallowed from creating the bucket.

  If your project needs to use a domain-named bucket, you need to have
  a team member both verify the domain and create the bucket. This is
  because Google Cloud Storage checks for domain ownership against the
  user who creates the bucket, so the user who creates the bucket must
  also be verified as an owner or manager of the domain.

  To verify as the owner or manager of a domain, use the Google Webmaster
  Tools verification process. The Webmaster Tools verification process
  provides three methods for verifying an owner or manager of a domain:

  1. Adding a special Meta tag to a site's homepage.
  2. Uploading a special HTML file to a site.
  3. Adding a DNS TXT record to a domain's DNS configuration.

  Meta tag verification and HTML file verification are easier to perform and
  are probably adequate for most situations. DNS TXT record verification is
  a domain-based verification method that is useful in situations where a
  site wants to tightly control who can create domain-named buckets. Once
  a site creates a DNS TXT record to verify ownership of a domain, it takes
  precedence over meta tag and HTML file verification. For example, you might
  have two IT staff members who are responsible for managing your site, called
  "example.com." If they complete the DNS TXT record verification, only they
  would be able to create buckets called "example.com", "reports.example.com",
  "downloads.example.com", and other domain-named buckets.

  Site-Based Verification

  If you have administrative control over the HTML files that make up a site,
  you can use one of the site-based verification methods to verify that you
  control or own a site. When you do this, Google Cloud Storage lets you
  create buckets representing the verified site and any sub-sites - provided
  nobody has used the DNS TXT record method to verify domain ownership of a
  parent of the site.

  As an example, assume that nobody has used the DNS TXT record method to verify
  ownership of the following domains: abc.def.example.com, def.example.com,
  and example.com. In this case, Google Cloud Storage lets you create a bucket
  named abc.def.example.com if you verify that you own or control any of the
  following sites:

  http://abc.def.example.com
  http://def.example.com
  http://example.com

  Domain-Based Verification

  If you have administrative control over a domain's DNS configuration, you can
  use the DNS TXT record verification method to verify that you own or control a
  domain. When you use the domain-based verification method to verify that you
  own or control a domain, Google Cloud Storage lets you create buckets that
  represent any subdomain under the verified domain. Furthermore, Google Cloud
  Storage prevents anybody else from creating buckets under that domain unless
  you add their name to the list of verified domain owners or they have verified
  their domain ownership by using the DNS TXT record verification method.

  For example, if you use the DNS TXT record verification method to verify your
  ownership of the domain example.com, Google Cloud Storage will let you create
  bucket names that represent any subdomain under the example.com domain, such
  as abc.def.example.com, example.com/music/jazz, or abc.example.com/music/jazz.

  Using the DNS TXT record method to verify domain ownership supersedes
  verification by site-based verification methods. For example, if you
  use the Meta tag method or HTML file method to verify domain ownership
  of http://example.com, but someone else uses the DNS TXT record method
  to verify ownership of the example.com domain, Google Cloud Storage will
  not allow you to create a bucket named example.com. To create the bucket
  example.com, the domain owner who used the DNS TXT method to verify domain
  ownership must add you to the list of verified domain owners for example.com.

  The DNS TXT record verification method is particularly useful if you manage
  a domain for a large organization that has numerous subdomains because it
  lets you control who can create buckets representing those domain names.

  Note: If you use the DNS TXT record verification method to verify ownership of
  a domain, you cannot create a CNAME record for that domain. RFC 1034 disallows
  inclusion of any other resource records if there is a CNAME resource record
  present. If you want to create a CNAME resource record for a domain, you must
  use the Meta tag verification method or the HTML file verification method.


""")


class CommandOptions(HelpProvider):
  """Additional help about gsutil object and bucket naming."""

  help_spec = {
    # Name of command or auxiliary help info for which this help applies.
    HELP_NAME : 'naming',
    # List of help name aliases.
    HELP_NAME_ALIASES : ['domain', 'limits', 'name', 'names'],
    # Type of help:
    HELP_TYPE : HelpType.ADDITIONAL_HELP,
    # One line summary of this help.
    HELP_ONE_LINE_SUMMARY : 'Object and bucket naming',
    # The full help text.
    HELP_TEXT : _detailed_help_text,
  }

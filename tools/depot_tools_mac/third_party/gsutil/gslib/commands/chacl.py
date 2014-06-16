# Copyright 2013 Google Inc. All Rights Reserved.
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
"""
This module provides the chacl command to gsutil.

This command allows users to easily specify changes to access control lists.
"""

import random
import re
import time
from xml.dom import minidom
from boto.exception import GSResponseError
from boto.gs import acl
from gslib import name_expansion
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
from gslib.exception import CommandException
from gslib.help_provider import HELP_NAME
from gslib.help_provider import HELP_NAME_ALIASES
from gslib.help_provider import HELP_ONE_LINE_SUMMARY
from gslib.help_provider import HELP_TEXT
from gslib.help_provider import HELP_TYPE
from gslib.help_provider import HelpType
from gslib.util import NO_MAX
from gslib.util import Retry


class ChangeType(object):
  USER = 'User'
  GROUP = 'Group'


class AclChange(object):
  """Represents a logical change to an access control list."""
  public_scopes = ['AllAuthenticatedUsers', 'AllUsers']
  id_scopes = ['UserById', 'GroupById']
  email_scopes = ['UserByEmail', 'GroupByEmail']
  domain_scopes = ['GroupByDomain']
  scope_types = public_scopes + id_scopes + email_scopes + domain_scopes

  permission_shorthand_mapping = {
      'R': 'READ',
      'W': 'WRITE',
      'FC': 'FULL_CONTROL',
      }

  def __init__(self, acl_change_descriptor, scope_type, logger):
    """Creates an AclChange object.

    acl_change_descriptor: An acl change as described in chacl help.
    scope_type: Either ChangeType.USER or ChangeType.GROUP, specifying the
                extent of the scope.
    logger: An instance of ThreadedLogger.
    """
    self.logger = logger
    self.identifier = ''

    self.raw_descriptor = acl_change_descriptor
    self._Parse(acl_change_descriptor, scope_type)
    self._Validate()

  def __str__(self):
    return 'AclChange<{0}|{1}|{2}>'.format(self.scope_type, self.perm,
                                        self.identifier)

  def _Parse(self, change_descriptor, scope_type):
    """Parses an ACL Change descriptor."""

    def _ClassifyScopeIdentifier(text):
      re_map = {
          'AllAuthenticatedUsers': r'^(AllAuthenticatedUsers|AllAuth)$',
          'AllUsers': '^(AllUsers|All)$',
          'Email': r'^.+@.+\..+$',
          'Id': r'^[0-9A-Fa-f]{64}$',
          'Domain': r'^[^@]+\..+$',
          }
      for type_string, regex in re_map.items():
        if re.match(regex, text, re.IGNORECASE):
          return type_string

    if change_descriptor.count(':') != 1:
      raise CommandException('{0} is an invalid change description.'
                             .format(change_descriptor))

    scope_string, perm_token = change_descriptor.split(':')

    perm_token = perm_token.upper()
    if perm_token in self.permission_shorthand_mapping:
      self.perm = self.permission_shorthand_mapping[perm_token]
    else:
      self.perm = perm_token

    scope_class = _ClassifyScopeIdentifier(scope_string)
    if scope_class == 'Domain':
      # This may produce an invalid UserByDomain scope,
      # which is good because then validate can complain.
      self.scope_type = '{0}ByDomain'.format(scope_type)
      self.identifier = scope_string
    elif scope_class in ['Email', 'Id']:
      self.scope_type = '{0}By{1}'.format(scope_type, scope_class)
      self.identifier = scope_string
    elif scope_class == 'AllAuthenticatedUsers':
      self.scope_type = 'AllAuthenticatedUsers'
    elif scope_class == 'AllUsers':
      self.scope_type = 'AllUsers'
    else:
      # This is just a fallback, so we set it to something
      # and the validate step has something to go on.
      self.scope_type = scope_string

  def _Validate(self):
    """Validates a parsed AclChange object."""

    def _ThrowError(msg):
      raise CommandException('{0} is not a valid ACL change\n{1}'
                             .format(self.raw_descriptor, msg))

    if self.scope_type not in self.scope_types:
      _ThrowError('{0} is not a valid scope type'.format(self.scope_type))

    if self.scope_type in self.public_scopes and self.identifier:
      _ThrowError('{0} requires no arguments'.format(self.scope_type))

    if self.scope_type in self.id_scopes and not self.identifier:
      _ThrowError('{0} requires an id'.format(self.scope_type))

    if self.scope_type in self.email_scopes and not self.identifier:
      _ThrowError('{0} requires an email address'.format(self.scope_type))

    if self.scope_type in self.domain_scopes and not self.identifier:
      _ThrowError('{0} requires domain'.format(self.scope_type))

    if self.perm not in self.permission_shorthand_mapping.values():
      perms = ', '.join(self.permission_shorthand_mapping.values())
      _ThrowError('Allowed permissions are {0}'.format(perms))

  def _YieldMatchingEntries(self, current_acl):
    """Generator that yields entries that match the change descriptor.

    current_acl: An instance of bogo.gs.acl.ACL which will be searched
                 for matching entries.
    """
    for entry in current_acl.entries.entry_list:
      if entry.scope.type == self.scope_type:
        if self.scope_type in ['UserById', 'GroupById']:
          if self.identifier == entry.scope.id:
            yield entry
        elif self.scope_type in ['UserByEmail', 'GroupByEmail']:
          if self.identifier == entry.scope.email_address:
            yield entry
        elif self.scope_type == 'GroupByDomain':
          if self.identifier == entry.scope.domain:
            yield entry
        elif self.scope_type in ['AllUsers', 'AllAuthenticatedUsers']:
          yield entry
        else:
          raise CommandException('Found an unrecognized ACL '
                                 'entry type, aborting.')

  def _AddEntry(self, current_acl):
    """Adds an entry to an ACL."""
    if self.scope_type in ['UserById', 'UserById', 'GroupById']:
      entry = acl.Entry(type=self.scope_type, permission=self.perm,
                        id=self.identifier)
    elif self.scope_type in ['UserByEmail', 'GroupByEmail']:
      entry = acl.Entry(type=self.scope_type, permission=self.perm,
                        email_address=self.identifier)
    elif self.scope_type == 'GroupByDomain':
      entry = acl.Entry(type=self.scope_type, permission=self.perm,
                        domain=self.identifier)
    else:
      entry = acl.Entry(type=self.scope_type, permission=self.perm)

    current_acl.entries.entry_list.append(entry)

  def Execute(self, uri, current_acl):
    """Executes the described change on an ACL.

    uri: The URI object to change.
    current_acl: An instance of boto.gs.acl.ACL to permute.
    """
    self.logger.debug('Executing {0} on {1}'
                      .format(self.raw_descriptor, uri))

    if self.perm == 'WRITE' and uri.names_object():
      self.logger.warn(
          'Skipping {0} on {1}, as WRITE does not apply to objects'
          .format(self.raw_descriptor, uri))
      return 0

    matching_entries = list(self._YieldMatchingEntries(current_acl))
    change_count = 0
    if matching_entries:
      for entry in matching_entries:
        if entry.permission != self.perm:
          entry.permission = self.perm
          change_count += 1
    else:
      self._AddEntry(current_acl)
      change_count = 1

    parsed_acl = minidom.parseString(current_acl.to_xml())
    self.logger.debug('New Acl:\n{0}'.format(parsed_acl.toprettyxml()))
    return change_count


class AclDel(AclChange):
  """Represents a logical change from an access control list."""
  scope_regexes = {
      r'All(Users)?': 'AllUsers',
      r'AllAuth(enticatedUsers)?': 'AllAuthenticatedUsers',
      }

  def __init__(self, identifier, logger):
    self.raw_descriptor = '-d {0}'.format(identifier)
    self.logger = logger
    self.identifier = identifier
    for regex, scope in self.scope_regexes.items():
      if re.match(regex, self.identifier, re.IGNORECASE):
        self.identifier = scope
    self.scope_type = 'Any'
    self.perm = 'NONE'

  def _YieldMatchingEntries(self, current_acl):
    for entry in current_acl.entries.entry_list:
      if self.identifier == entry.scope.id:
        yield entry
      elif self.identifier == entry.scope.email_address:
        yield entry
      elif self.identifier == entry.scope.domain:
        yield entry
      elif self.identifier == 'AllUsers' and entry.scope.type == 'AllUsers':
        yield entry
      elif (self.identifier == 'AllAuthenticatedUsers'
            and entry.scope.type == 'AllAuthenticatedUsers'):
        yield entry

  def Execute(self, uri, current_acl):
    self.logger.debug('Executing {0} on {1}'
                      .format(self.raw_descriptor, uri))
    matching_entries = list(self._YieldMatchingEntries(current_acl))
    for entry in matching_entries:
      current_acl.entries.entry_list.remove(entry)
    parsed_acl = minidom.parseString(current_acl.to_xml())
    self.logger.debug('New Acl:\n{0}'.format(parsed_acl.toprettyxml()))
    return len(matching_entries)


_detailed_help_text = ("""
<B>SYNOPSIS</B>
  gsutil chacl [-R] -u|-g|-d <grant>... uri...

  where each <grant> is one of the following forms:
  -u <id|email>:<perm>
  -g <id|email|domain|All|AllAuth>:<perm>
  -d <id|email|domain|All|AllAuth>

<B>DESCRIPTION</B>
  The chacl command updates access control lists, similar in spirit to the Linux
  chmod command. You can specify multiple access grant additions and deletions
  in a single command run; all changes will be made atomically to each object in
  turn. For example, if the command requests deleting one grant and adding a
  different grant, the ACLs being updated will never be left in an intermediate
  state where one grant has been deleted but the second grant not yet added.
  Each change specifies a user or group grant to add or delete, and for grant
  additions, one of R, W, FC (for the permission to be granted). A more formal
  description is provided in a later section; below we provide examples.

  Note: If you want to set a simple "canned" ACL on each object (such as
  project-private or public), or if you prefer to edit the XML representation
  for ACLs, you can do that with the setacl command (see 'gsutil help setacl').


<B>EXAMPLES</B>

  Grant the user john.doe@example.com WRITE access to the bucket
  example-bucket:

    gsutil chacl -u john.doe@example.com:WRITE gs://example-bucket

  Grant the group admins@example.com FULL_CONTROL access to all jpg files in
  the top level of example-bucket:

    gsutil chacl -g admins@example.com:FC gs://example-bucket/*.jpg

  Grant the user with the specified canonical ID READ access to all objects in
  example-bucket that begin with folder/:

    gsutil chacl -R \\
      -u 84fac329bceSAMPLE777d5d22b8SAMPLE77d85ac2SAMPLE2dfcf7c4adf34da46:R \\
      gs://example-bucket/folder/

  Grant all users from my-domain.org READ access to the bucket
  gcs.my-domain.org:

    gsutil chacl -g my-domain.org:R gs://gcs.my-domain.org

  Remove any current access by john.doe@example.com from the bucket
  example-bucket:

    gsutil chacl -d john.doe@example.com gs://example-bucket

  If you have a large number of objects to update, enabling multi-threading with
  the gsutil -m flag can significantly improve performance. The following
  command adds FULL_CONTROL for admin@example.org using multi-threading:

    gsutil -m chacl -R -u admin@example.org:FC gs://example-bucket

  Grant READ access to everyone from my-domain.org and to all authenticated
  users, and grant FULL_CONTROL to admin@mydomain.org, for the buckets
  my-bucket and my-other-bucket, with multi-threading enabled:

    gsutil -m chacl -R -g my-domain.org:R -g AllAuth:R \\
      -u admin@mydomain.org:FC gs://my-bucket/ gs://my-other-bucket


<B>SCOPES</B>
  There are four different scopes: Users, Groups, All Authenticated Users, and
  All Users.

  Users are added with -u and a plain ID or email address, as in
  "-u john-doe@gmail.com:r"

  Groups are like users, but specified with the -g flag, as in
  "-g power-users@example.com:fc". Groups may also be specified as a full
  domain, as in "-g my-company.com:r".

  AllAuthenticatedUsers and AllUsers are specified directly, as
  in "-g AllUsers:R" or "-g AllAuthenticatedUsers:FC". These are case
  insensitive, and may be shortened to "all" and "allauth", respectively.

  Removing permissions is specified with the -d flag and an ID, email
  address, domain, or one of AllUsers or AllAuthenticatedUsers.

  Many scopes can be specified on the same command line, allowing bundled
  changes to be executed in a single run. This will reduce the number of
  requests made to the server.


<B>PERMISSIONS</B>
  You may specify the following permissions with either their shorthand or
  their full name:

  R: READ
  W: WRITE
  FC: FULL_CONTROL


<B>OPTIONS</B>
  -R, -r      Performs chacl request recursively, to all objects under the
              specified URI.

  -u          Add or modify a user permission as specified in the SCOPES
              and PERMISSIONS sections.

  -g          Add or modify a group permission as specified in the SCOPES
              and PERMISSIONS sections.

  -d          Remove all permissions associated with the matching argument, as
              specified in the SCOPES and PERMISSIONS sections.
""")


class ChAclCommand(Command):
  """Implementation of gsutil chacl command."""

  # Command specification (processed by parent class).
  command_spec = {
    # Name of command.
    COMMAND_NAME : 'chacl',
    # List of command name aliases.
    COMMAND_NAME_ALIASES : [],
    # Min number of args required by this command.
    MIN_ARGS : 1,
    # Max number of args required by this command, or NO_MAX.
    MAX_ARGS : NO_MAX,
    # Getopt-style string specifying acceptable sub args.
    SUPPORTED_SUB_ARGS : 'Rrfg:u:d:',
    # True if file URIs acceptable for this command.
    FILE_URIS_OK : False,
    # True if provider-only URIs acceptable for this command.
    PROVIDER_URIS_OK : False,
    # Index in args of first URI arg.
    URIS_START_ARG : 1,
    # True if must configure gsutil before running command.
    CONFIG_REQUIRED : True,
  }
  help_spec = {
    # Name of command or auxiliary help info for which this help applies.
    HELP_NAME : 'chacl',
    # List of help name aliases.
    HELP_NAME_ALIASES : ['chmod'],
    # Type of help:
    HELP_TYPE : HelpType.COMMAND_HELP,
    # One line summary of this help.
    HELP_ONE_LINE_SUMMARY : 'Add / remove entries on bucket and/or object ACLs',
    # The full help text.
    HELP_TEXT : _detailed_help_text,
  }

  # Command entry point.
  def RunCommand(self):
    """This is the point of entry for the chacl command."""
    self.parse_versions = True
    self.changes = []

    if self.sub_opts:
      for o, a in self.sub_opts:
        if o == '-g':
          self.changes.append(AclChange(a, scope_type=ChangeType.GROUP,
                                        logger=self.THREADED_LOGGER))
        if o == '-u':
          self.changes.append(AclChange(a, scope_type=ChangeType.USER,
                                        logger=self.THREADED_LOGGER))
        if o == '-d':
          self.changes.append(AclDel(a, logger=self.THREADED_LOGGER))

    if not self.changes:
      raise CommandException(
          'Please specify at least one access change '
          'with the -g, -u, or -d flags')

    storage_uri = self.UrisAreForSingleProvider(self.args)
    if not (storage_uri and storage_uri.get_provider().name == 'google'):
      raise CommandException('The "{0}" command can only be used with gs:// URIs'
                             .format(self.command_name))

    bulk_uris = set()
    for uri_arg in self.args:
      for result in self.WildcardIterator(uri_arg):
        uri = result.uri
        if uri.names_bucket():
          if self.recursion_requested:
            bulk_uris.add(uri.clone_replace_name('*').uri)
          else:
            # If applying to a bucket directly, the threading machinery will
            # break, so we have to apply now, in the main thread.
            self.ApplyAclChanges(uri)
        else:
          bulk_uris.add(uri_arg)

    try:
      name_expansion_iterator = name_expansion.NameExpansionIterator(
          self.command_name, self.proj_id_handler, self.headers, self.debug,
          self.bucket_storage_uri_class, bulk_uris, self.recursion_requested)
    except CommandException as e:
      # NameExpansionIterator will complain if there are no URIs, but we don't
      # want to throw an error if we handled bucket URIs.
      if e.reason == 'No URIs matched':
        return 0
      else:
        raise e

    self.everything_set_okay = True
    self.Apply(self.ApplyAclChanges,
               name_expansion_iterator,
               self._ApplyExceptionHandler)
    if not self.everything_set_okay:
      raise CommandException('ACLs for some objects could not be set.')

    return 0

  def _ApplyExceptionHandler(self, exception):
    self.THREADED_LOGGER.error('Encountered a problem: {0}'.format(exception))
    self.everything_set_okay = False

  @Retry(GSResponseError, tries=3, delay=1, backoff=2)
  def ApplyAclChanges(self, uri_or_expansion_result):
    """Applies the changes in self.changes to the provided URI."""
    if isinstance(uri_or_expansion_result, name_expansion.NameExpansionResult):
      uri = self.suri_builder.StorageUri(
          uri_or_expansion_result.expanded_uri_str)
    else:
      uri = uri_or_expansion_result

    try:
      current_acl = uri.get_acl()
    except GSResponseError as e:
      self.THREADED_LOGGER.warning('Failed to set acl for {0}: {1}'
                                   .format(uri, e.reason))
      return

    modification_count = 0
    for change in self.changes:
      modification_count += change.Execute(uri, current_acl)
    if modification_count == 0:
      self.THREADED_LOGGER.info('No changes to {0}'.format(uri))
      return

    # TODO: Remove the concept of forcing when boto provides access to
    # bucket generation and meta_generation.
    headers = dict(self.headers)
    force = uri.names_bucket()
    if not force:
      key = uri.get_key()
      headers['x-goog-if-generation-match'] = key.generation
      headers['x-goog-if-metageneration-match'] = key.meta_generation
    
    # If this fails because of a precondition, it will raise a 
    # GSResponseError for @Retry to handle.
    uri.set_acl(current_acl, uri.object_name, False, headers)
    self.THREADED_LOGGER.info('Updated ACL on {0}'.format(uri))
    

#!/usr/bin/env python
# Copyright (c) 2012 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

import datetime
import optparse
import os
import re
import sys
import urlparse

import breakpad  # pylint: disable=W0611

import gclient_utils
import subprocess2

USAGE = """
WARNING: Please use this tool in an empty directory
(or at least one that you don't mind clobbering.)

REQUIRES: SVN 1.5+
NOTE: NO NEED TO CHECKOUT ANYTHING IN ADVANCE OF USING THIS TOOL.
Valid parameters:

[Merge from trunk to branch]
--merge <revision> --branch <branch_num>
Example: %(app)s --merge 12345 --branch 187

[Merge from trunk to local copy]
--merge <revision> --local
Example: %(app)s --merge 12345 --local

[Merge from branch to branch]
--merge <revision> --sbranch <branch_num> --branch <branch_num>
Example: %(app)s --merge 12345 --sbranch 248 --branch 249

[Revert from trunk]
--revert <revision>
Example: %(app)s --revert 12345

[Revert from branch]
--revert <revision> --branch <branch_num>
Example: %(app)s --revert 12345 --branch 187
"""

export_map_ = None
files_info_ = None
delete_map_ = None
file_pattern_ =  r"[ ]+([MADUC])[ ]+/((?:trunk|branches/.*?)/src(.*)/(.*))"
depot_tools_dir_ = os.path.dirname(os.path.abspath(__file__))


def runGcl(subcommand):
  gcl_path = os.path.join(depot_tools_dir_, "gcl")
  if not os.path.exists(gcl_path):
    print "WARNING: gcl not found beside drover.py. Using system gcl instead..."
    gcl_path = 'gcl'

  command = "%s %s" % (gcl_path, subcommand)
  return os.system(command)

def gclUpload(revision, author):
  command = ("upload " + str(revision) +
             " --send_mail --no_presubmit --reviewers=" + author)
  return runGcl(command)

def getSVNInfo(url, revision):
  info = {}
  svn_info = subprocess2.capture(
      ['svn', 'info', '--non-interactive', '%s@%s' % (url, revision)],
      stderr=subprocess2.VOID).splitlines()
  for line in svn_info:
    match = re.search(r"(.*?):(.*)", line)
    if match:
      info[match.group(1).strip()] = match.group(2).strip()
  return info

def isSVNDirty():
  svn_status = subprocess2.check_output(['svn', 'status']).splitlines()
  for line in svn_status:
    match = re.search(r"^[^X?]", line)
    if match:
      return True

  return False

def getAuthor(url, revision):
  info = getSVNInfo(url, revision)
  if (info.has_key("Last Changed Author")):
    return info["Last Changed Author"]
  return None

def isSVNFile(url, revision):
  info = getSVNInfo(url, revision)
  if (info.has_key("Node Kind")):
    if (info["Node Kind"] == "file"):
      return True
  return False

def isSVNDirectory(url, revision):
  info = getSVNInfo(url, revision)
  if (info.has_key("Node Kind")):
    if (info["Node Kind"] == "directory"):
      return True
  return False

def inCheckoutRoot(path):
  info = getSVNInfo(path, "HEAD")
  if (not info.has_key("Repository Root")):
    return False
  repo_root = info["Repository Root"]
  info = getSVNInfo(os.path.dirname(os.path.abspath(path)), "HEAD")
  if (info.get("Repository Root", None) != repo_root):
    return True
  return False

def getRevisionLog(url, revision):
  """Takes an svn url and gets the associated revision."""
  svn_log = subprocess2.check_output(
      ['svn', 'log', url, '-r', str(revision)],
      universal_newlines=True).splitlines(True)
  # Don't include the header lines and the trailing "---..." line.
  return ''.join(svn_log[3:-1])

def getSVNVersionInfo():
  """Extract version information from SVN"""
  svn_info = subprocess2.check_output(['svn', '--version']).splitlines()
  info = {}
  for line in svn_info:
    match = re.search(r"svn, version ((\d+)\.(\d+)\.(\d+))", line)
    if match:
      info['version'] = match.group(1)
      info['major'] = int(match.group(2))
      info['minor'] = int(match.group(3))
      info['patch'] = int(match.group(4))
      return info

  return None

def isMinimumSVNVersion(major, minor, patch=0):
  """Test for minimum SVN version"""
  return _isMinimumSVNVersion(getSVNVersionInfo(), major, minor, patch)

def _isMinimumSVNVersion(version, major, minor, patch=0):
  """Test for minimum SVN version, internal method"""
  if not version:
    return False

  if (version['major'] > major):
    return True
  elif (version['major'] < major):
    return False

  if (version['minor'] > minor):
    return True
  elif (version['minor'] < minor):
    return False

  if (version['patch'] >= patch):
    return True
  else:
    return False

def checkoutRevision(url, revision, branch_url, revert=False, pop=True):
  files_info = getFileInfo(url, revision)
  paths = getBestMergePaths2(files_info, revision)
  export_map = getBestExportPathsMap2(files_info, revision)

  command = 'svn checkout -N ' + branch_url
  print command
  os.system(command)

  match = re.search(r"^[a-z]+://.*/(.*)", branch_url)

  if match:
    os.chdir(match.group(1))

  # This line is extremely important due to the way svn behaves in the
  # set-depths action.  If parents aren't handled before children, the child
  # directories get clobbered and the merge step fails.
  paths.sort()

  # Checkout the directories that already exist
  for path in paths:
    if (export_map.has_key(path) and not revert):
      print "Exclude new directory " + path
      continue
    subpaths = path.split('/')
    #In the normal case, where no url override is specified and it's just
    # chromium source, it's necessary to remove the 'trunk' from the filepath,
    # since in the checkout we include 'trunk' or 'branch/\d+'.
    #
    # However, when a url is specified we want to preserve that because it's
    # a part of the filepath and necessary for path operations on svn (because
    # frankly, we are checking out the correct top level, and not hacking it).
    if pop:
      subpaths.pop(0)
    base = ''
    for subpath in subpaths:
      base += '/' + subpath
      # This logic ensures that you don't empty out any directories
      if not os.path.exists("." + base):
        command = ('svn update --depth empty ' + "." + base)
        print command
        os.system(command)

  if (revert):
    files = getAllFilesInRevision(files_info)
  else:
    files = getExistingFilesInRevision(files_info)

  for f in files:
   # Prevent the tool from clobbering the src directory
    if (f == ""):
      continue
    command = ('svn up ".' + f + '"')
    print command
    os.system(command)

def mergeRevision(url, revision):
  paths = getBestMergePaths(url, revision)
  export_map = getBestExportPathsMap(url, revision)

  for path in paths:
    if export_map.has_key(path):
      continue
    command = ('svn merge -N -r ' + str(revision-1) + ":" + str(revision) + " ")
    command += " --ignore-ancestry "
    command += " -x --ignore-eol-style "
    command += url + path + "@" + str(revision) + " ." + path

    print command
    os.system(command)

def exportRevision(url, revision):
  paths = getBestExportPathsMap(url, revision).keys()
  paths.sort()

  for path in paths:
    command = ('svn export -N ' + url + path + "@" + str(revision) + " ."  +
               path)
    print command
    os.system(command)

    command = 'svn add .' + path
    print command
    os.system(command)

def deleteRevision(url, revision):
  paths = getBestDeletePathsMap(url, revision).keys()
  paths.sort()
  paths.reverse()

  for path in paths:
    command = "svn delete ." + path
    print command
    os.system(command)

def revertExportRevision(url, revision):
  paths = getBestExportPathsMap(url, revision).keys()
  paths.sort()
  paths.reverse()

  for path in paths:
    command = "svn delete ." + path
    print command
    os.system(command)

def revertRevision(url, revision):
  command = ('svn merge --ignore-ancestry -c -%d %s .' % (revision, url))
  print command
  os.system(command)

def getFileInfo(url, revision):
  global files_info_

  if (files_info_ != None):
    return files_info_

  svn_log = subprocess2.check_output(
      ['svn', 'log', url, '-r', str(revision), '-v']).splitlines()

  info = []
  for line in svn_log:
    # A workaround to dump the (from .*) stuff, regex not so friendly in the 2nd
    # pass...
    match = re.search(r"(.*) \(from.*\)", line)
    if match:
      line = match.group(1)
    match = re.search(file_pattern_, line)
    if match:
      info.append([match.group(1).strip(), match.group(2).strip(),
                   match.group(3).strip(),match.group(4).strip()])

  files_info_ = info
  return info

def getBestMergePaths(url, revision):
  """Takes an svn url and gets the associated revision."""
  return getBestMergePaths2(getFileInfo(url, revision), revision)

def getBestMergePaths2(files_info, revision):
  """Takes an svn url and gets the associated revision."""
  return list(set([f[2] for f in files_info]))

def getBestExportPathsMap(url, revision):
  return getBestExportPathsMap2(getFileInfo(url, revision), revision)

def getBestExportPathsMap2(files_info, revision):
  """Takes an svn url and gets the associated revision."""
  global export_map_

  if export_map_:
    return export_map_

  result = {}
  for file_info in files_info:
    if (file_info[0] == "A"):
      if(isSVNDirectory("svn://svn.chromium.org/chrome/" + file_info[1],
                        revision)):
        result[file_info[2] + "/" + file_info[3]] = ""

  export_map_ = result
  return result

def getBestDeletePathsMap(url, revision):
  return getBestDeletePathsMap2(getFileInfo(url, revision), revision)

def getBestDeletePathsMap2(files_info, revision):
  """Takes an svn url and gets the associated revision."""
  global delete_map_

  if delete_map_:
    return delete_map_

  result = {}
  for file_info in files_info:
    if (file_info[0] == "D"):
      if(isSVNDirectory("svn://svn.chromium.org/chrome/" + file_info[1],
                        revision)):
        result[file_info[2] + "/" + file_info[3]] = ""

  delete_map_ = result
  return result


def getExistingFilesInRevision(files_info):
  """Checks for existing files in the revision.

  Anything that's A will require special treatment (either a merge or an
  export + add)
  """
  return ['%s/%s' % (f[2], f[3]) for f in files_info if f[0] != 'A']


def getAllFilesInRevision(files_info):
  """Checks for existing files in the revision.

  Anything that's A will require special treatment (either a merge or an
  export + add)
  """
  return ['%s/%s' % (f[2], f[3]) for f in files_info]


def getSVNAuthInfo(folder=None):
  """Fetches SVN authorization information in the subversion auth folder and
  returns it as a dictionary of dictionaries."""
  if not folder:
    if sys.platform == 'win32':
      folder = '%%APPDATA%\\Subversion\\auth'
    else:
      folder = '~/.subversion/auth'
  folder = os.path.expandvars(os.path.expanduser(folder))
  svn_simple_folder = os.path.join(folder, 'svn.simple')
  results = {}
  try:
    for auth_file in os.listdir(svn_simple_folder):
      # Read the SVN auth file, convert it into a dictionary, and store it.
      results[auth_file] = dict(re.findall(r'K [0-9]+\n(.*)\nV [0-9]+\n(.*)\n', 
          open(os.path.join(svn_simple_folder, auth_file)).read()))
  except Exception as _:
    pass
  return results


def getCurrentSVNUsers(url):
  """Tries to fetch the current SVN in the current checkout by scanning the
  SVN authorization folder for a match with the current SVN URL."""
  netloc = urlparse.urlparse(url)[1]
  auth_infos = getSVNAuthInfo()
  results = []
  for _, auth_info in auth_infos.iteritems():
    if ('svn:realmstring' in auth_info 
        and netloc in auth_info['svn:realmstring']):
      username = auth_info['username']
      results.append(username)
      if 'google.com' in username:
        results.append(username.replace('google.com', 'chromium.org'))
  return results


def prompt(question):
  while True:
    print question + " [y|n]:",
    answer = sys.stdin.readline()
    if answer.lower().startswith('n'):
      return False
    elif answer.lower().startswith('y'):
      return True


def text_prompt(question, default):
  print question + " [" + default + "]:"
  answer = sys.stdin.readline()
  if answer.strip() == "":
    return default
  return answer


def drover(options, args):
  revision = options.revert or options.merge

  # Initialize some variables used below. They can be overwritten by
  # the drover.properties file.
  BASE_URL = "svn://svn.chromium.org/chrome"
  REVERT_ALT_URLS = ['svn://svn.chromium.org/blink',
                     'svn://svn.chromium.org/chrome-internal',
                     'svn://svn.chromium.org/native_client']
  TRUNK_URL = BASE_URL + "/trunk/src"
  BRANCH_URL = BASE_URL + "/branches/$branch/src"
  SKIP_CHECK_WORKING = True
  PROMPT_FOR_AUTHOR = False
  NO_ALT_URLS = options.no_alt_urls

  DEFAULT_WORKING = "drover_" + str(revision)
  if options.branch:
    DEFAULT_WORKING += ("_" + options.branch)

  if not isMinimumSVNVersion(1, 5):
    print "You need to use at least SVN version 1.5.x"
    return 1

  # Override the default properties if there is a drover.properties file.
  global file_pattern_
  if os.path.exists("drover.properties"):
    print 'Using options from %s' % os.path.join(
        os.getcwd(), 'drover.properties')
    FILE_PATTERN = file_pattern_
    f = open("drover.properties")
    exec(f)
    f.close()
    if FILE_PATTERN:
      file_pattern_ = FILE_PATTERN
    NO_ALT_URLS = True

  if options.revert and options.branch:
    print 'Note: --branch is usually not needed for reverts.'
    url = BRANCH_URL.replace("$branch", options.branch)
  elif options.merge and options.sbranch:
    url = BRANCH_URL.replace("$branch", options.sbranch)
  elif options.revert:
    url = options.url or BASE_URL
    file_pattern_ = r"[ ]+([MADUC])[ ]+((/.*)/(.*))"
  else:
    url = TRUNK_URL

  working = options.workdir or DEFAULT_WORKING

  if options.local:
    working = os.getcwd()
    if not inCheckoutRoot(working):
      print "'%s' appears not to be the root of a working copy" % working
      return 1
    if (isSVNDirty() and not
        prompt("Working copy contains uncommitted files. Continue?")):
      return 1

  if options.revert and not NO_ALT_URLS and not options.url:
    for cur_url in [url] + REVERT_ALT_URLS:
      try:
        commit_date_str = getSVNInfo(
            cur_url, options.revert).get('Last Changed Date', 'x').split()[0]
        commit_date = datetime.datetime.strptime(commit_date_str, '%Y-%m-%d')
        if (datetime.datetime.now() - commit_date).days < 180:
          if cur_url != url:
            print 'Guessing svn repo: %s.' % cur_url,
            print 'Use --no-alt-urls to disable heuristic.'
            url = cur_url
          break
      except ValueError:
        pass
  command = 'svn log ' + url + " -r "+str(revision) + " -v"
  os.system(command)

  if not (options.revertbot or prompt("Is this the correct revision?")):
    return 0

  if (os.path.exists(working)) and not options.local:
    if not (options.revertbot or SKIP_CHECK_WORKING or
        prompt("Working directory: '%s' already exists, clobber?" % working)):
      return 0
    gclient_utils.rmtree(working)

  if not options.local:
    os.makedirs(working)
    os.chdir(working)

  if options.merge:
    action = "Merge"
    if not options.local:
      branch_url = BRANCH_URL.replace("$branch", options.branch)
      # Checkout everything but stuff that got added into a new dir
      checkoutRevision(url, revision, branch_url)
    # Merge everything that changed
    mergeRevision(url, revision)
    # "Export" files that were added from the source and add them to branch
    exportRevision(url, revision)
    # Delete directories that were deleted (file deletes are handled in the
    # merge).
    deleteRevision(url, revision)
  elif options.revert:
    action = "Revert"
    pop_em = not options.url
    checkoutRevision(url, revision, url, True, pop_em)
    revertRevision(url, revision)
    revertExportRevision(url, revision)

  # Check the base url so we actually find the author who made the change
  if options.auditor:
    author = options.auditor
  else:
    author = getAuthor(url, revision)
    if not author:
      author = getAuthor(TRUNK_URL, revision)

  # Check that the author of the CL is different than the user making
  # the revert.  If they're the same, then we'll want to prompt the user
  # for a different reviewer to TBR.
  current_users = getCurrentSVNUsers(BASE_URL)
  is_self_revert = options.revert and author in current_users

  filename = str(revision)+".txt"
  out = open(filename,"w")
  drover_title = '%s %s' % (action, revision)
  revision_log = getRevisionLog(url, revision).splitlines()
  if revision_log:
    commit_title = revision_log[0]
    # Limit title to 68 chars so git log --oneline is <80 chars.
    max_commit_title = 68 - (len(drover_title) + 3)
    if len(commit_title) > max_commit_title:
      commit_title = commit_title[:max_commit_title-3] + '...'
    drover_title += ' "%s"' % commit_title
  out.write(drover_title + '\n\n')
  for line in revision_log:
    out.write('> %s\n' % line)
  if author:
    out.write("\nTBR=" + author)
  out.close()

  change_cmd = 'change ' + str(revision) + " " + filename
  if options.revertbot:
    if sys.platform == 'win32':
      os.environ['SVN_EDITOR'] = 'cmd.exe /c exit'
    else:
      os.environ['SVN_EDITOR'] = 'true'
  runGcl(change_cmd)
  os.unlink(filename)

  if options.local:
    return 0

  print author
  print revision
  print ("gcl upload " + str(revision) +
         " --send_mail --no_presubmit --reviewers=" + author)

  if options.revertbot or prompt("Would you like to upload?"):
    if PROMPT_FOR_AUTHOR or is_self_revert:
      author = text_prompt("Enter new author or press enter to accept default",
                           author)
    if options.revertbot and options.revertbot_reviewers:
      author += ","
      author += options.revertbot_reviewers
    gclUpload(revision, author)
  else:
    print "Deleting the changelist."
    print "gcl delete " + str(revision)
    runGcl("delete " + str(revision))
    return 0

  # We commit if the reverbot is set to commit automatically, or if this is
  # not the revertbot and the user agrees.
  if options.revertbot_commit or (not options.revertbot and
                                  prompt("Would you like to commit?")):
    print "gcl commit " + str(revision) + " --no_presubmit --force"
    return runGcl("commit " + str(revision) + " --no_presubmit --force")
  else:
    return 0


def main():
  option_parser = optparse.OptionParser(usage=USAGE % {"app": sys.argv[0]})
  option_parser.add_option('-m', '--merge', type="int",
                           help='Revision to merge from trunk to branch')
  option_parser.add_option('-b', '--branch',
                           help='Branch to revert or merge from')
  option_parser.add_option('-l', '--local', action='store_true',
                           help='Local working copy to merge to')
  option_parser.add_option('-s', '--sbranch',
                           help='Source branch for merge')
  option_parser.add_option('-r', '--revert', type="int",
                           help='Revision to revert')
  option_parser.add_option('-w', '--workdir',
                           help='subdir to use for the revert')
  option_parser.add_option('-u', '--url',
                           help='svn url to use for the revert')
  option_parser.add_option('-a', '--auditor',
                           help='overrides the author for reviewer')
  option_parser.add_option('--revertbot', action='store_true',
                           default=False)
  option_parser.add_option('--no-alt-urls', action='store_true',
                           help='Disable heuristics used to determine svn url')
  option_parser.add_option('--revertbot-commit', action='store_true',
                           default=False)
  option_parser.add_option('--revertbot-reviewers')
  options, args = option_parser.parse_args()

  if not options.merge and not options.revert:
    option_parser.error("You need at least --merge or --revert")
    return 1

  if options.merge and not (options.branch or options.local):
    option_parser.error("--merge requires --branch or --local")
    return 1

  if options.local and (options.revert or options.branch):
    option_parser.error("--local cannot be used with --revert or --branch")
    return 1

  return drover(options, args)


if __name__ == "__main__":
  sys.exit(main())

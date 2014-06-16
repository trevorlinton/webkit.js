#!/usr/bin/env python

# Utilities to facilitate maintaining one master list of package contents 
# in MANIFEST.in and allow us to import that list into various packaging 
# tools (e.g. rpmbuid and setup.py).

# Define the file in which we maintain package contents. Rather than 
# hard-coding our package contents, to ease maintenance we read the 
# manifest file to obtain the list of files and directories to include.
MANIFEST_IN = 'MANIFEST.in'

# Define input and output files for customizing the rpm package spec.
SPEC_IN = 'gsutil.spec.in'
SPEC_OUT = 'gsutil.spec'

# Root of rpmbuild tree for file enumeration in gsutil.spec file.
RPM_ROOT = '%{_datadir}/%{name}/'

def parse_manifest(files, dirs):
  '''Parse contents of manifest file and append results to passed lists
     of files and directories.
  '''
  f = open(MANIFEST_IN, 'r')
  for line in f:
    line = line.strip()
    # Skip empty or comment lines.
    if (len(line) <= 0) or (line[0] == '#'):
      continue
    tokens = line.split()
    if len(tokens) >= 0:
      if tokens[0] == 'include':
        files.extend(tokens[1:])
      elif tokens[0] == 'recursive-include' and tokens[2] == '*':
        dirs.append(tokens[1])
      else:
        err = 'Unsupported type ' + tokens[0] + ' in ' + MANIFEST_IN + ' file.'
        raise Exception(err)
  f.close()

# When executed as a separate script, create a dynamically generated rpm 
# spec file. Otherwise, when loaded as a module by another script, no
# specific actions are taken, other than making utility functions available
# to the loading script.
if __name__ == '__main__':
  # Running as main so generate a new rpm spec file.
  files = []
  dirs = []
  parse_manifest(files, dirs)
  fin = open(SPEC_IN, 'r')
  fout = open(SPEC_OUT, 'w')
  for line in fin:
    if line.strip() == '###FILES_GO_HERE###':
      for file in files:
        fout.write(RPM_ROOT + file + '\n')
      for dir in dirs:
        fout.write(RPM_ROOT + dir + '/\n')
    else:
      fout.write(line)
  fout.close()
  fin.close()

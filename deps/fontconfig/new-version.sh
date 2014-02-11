#!/bin/sh

if [ "x`git status -s -uno`" != "x" ]; then
	echo 'Uncommited changes in repository' 1>&2
	exit 1
fi

version="$1"
case "$version" in
2.[0-9.]*)
	;;
*)
	echo 'Invalid version number:' "$version" 1>&2
	exit 1
	;;
esac

eval `echo $version | 
	awk -F. '{ printf ("major=%d\nminor=%d\nrevision=%d\n",
			   $1, $2, $3); }'`
			   
# Update the version numbers

sed -i configure.ac -e "/^AM_INIT_AUTOMAKE/s/2\.[0-9.]*/$version/"

sed -i fontconfig/fontconfig.h \
	-e "/^#define FC_MAJOR/s/[0-9][0-9]*/$major/" \
	-e "/^#define FC_MINOR/s/[0-9][0-9]*/$minor/" \
	-e "/^#define FC_REVISION/s/[0-9][0-9]*/$revision/"

#
# Compute pretty form of new version number
#
version_note=`echo $version | awk -F. '{ 
	if ($3 > 90) 
		printf ("%d.%d.%d (%d.%d RC%d)\n",
			$1, $2, $3, $1, $2 + 1, $3 - 90);
	else if ($3 == 0)
		printf ("%d.%d\n", $1, $2);
	else
		printf ("%d.%d.%d\n", $1, $2, $3); }'`
		
#
# Find previous version in README
#
last_note=`grep '^2\.[0-9.]*' README |
	head -1 |
	sed 's/ (2\.[0-9]* RC[0-9]*)//'`
case $last_note in
2.*.*)
	last=$last_note
	;;
2.*)
	last="$last_note.0"
	;;
*)
	echo 'cannot find previous changelog' 1>&2
	exit 1
esac

#
# Format the current date for the README header
#
date=`date '+%Y-%m-%d'`

#
# Update the readme file
# 
if [ $version != $last ]; then
	#
	# header
	#
	(sed '/^2\.[0-9.]*/,$d' README | 
		sed -r -e "s/Version.*/Version $version_note/" \
		    -e "s/[0-9]{4}\-[0-9]{2}\-[0-9]{2}$/$date/" | awk '
		    /^[ \t]/ {
				gsub ("^[ \t]*", "");
				gsub ("[ \t]*$", "");
				space=(70 - length) / 2;
				for (i = 0; i < space; i++)
					printf (" ");
				print 
				next
			      } 
			      { 
				print 
			      }'
	
	#
	# changelog
	#
	
	echo $version_note
	echo
	git log --pretty=short $last.. | git shortlog | cat
	
	#
	# previous changelogs
	#
	
	sed -n '/^2\.[0-9.]*/,$p' README) > README.tmp ||
		(echo "README update failed"; exit 1)
	
	mv README.tmp README
fi

$test git commit -m"Bump version to $version" \
	configure.ac \
	fontconfig/fontconfig.h \
	README

# tag the tree
$test git tag -s -m "Version $version" $version

# Make distributed change log

git log --stat $last.. > ChangeLog-$version


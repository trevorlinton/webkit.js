#!/bin/sh
echo "'$1': ["
./filelist.sh "$2" "$3" '\.cc$|\.cpp$|\.h$|\.c$' | sed -e "s/^/   \'<\@\(DEPTH\)\//" | sed -e "s/$/\',/"
echo '],'

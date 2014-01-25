#!/bin/sh
echo "'$1': ["
./filelist.sh "$2" "$3" '\.idl$|\.cpp$|\.h$|\.c$' | sed -e "s/^/   \'/" | sed -e "s/$/\',/"
echo '],'

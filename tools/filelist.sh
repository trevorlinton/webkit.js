#!/bin/sh
# base
cd $1
# target from base
find . -type fl | grep $2 | egrep $3 | sed 's/^.\/\(.*\)$/\1/'

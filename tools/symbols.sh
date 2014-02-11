#!/bin/sh
DATA=`paste -sd , export_symbols_webcore | sed "s/,/\',\'/g"`
llvm-nm libwebkitobj.o --defined-only -format=posix | cut -d ' ' -f 1 | sed 's/^/_/g'

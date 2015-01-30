#!/bin/sh
if [ "$1" == "debug" ]; then
	echo "building webkit.js (debug)"
	ninja -C Debug
else 
	echo "building webkit.js (release)"
	ninja -C Release
fi

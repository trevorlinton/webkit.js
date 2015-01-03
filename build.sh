#!/bin/sh
echo "Building webkit.js Debug.. (ninja -v -C Debug)"
ninja -v -C Debug
echo "Building webkit.js Release.. (ninja -v -C Release)"
ninja -v -C Release

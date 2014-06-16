#!/bin/sh
declare -x PATH="/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Users/tlinton/Library/Emscripten:/Users/tlinton/Library/Emscripten/clang/e1.16.0_64bit:/Users/tlinton/Library/Emscripten/node/0.10.18_64bit/bin:/Users/tlinton/Library/Emscripten/emscripten/1.16.0:/Tint/Runtime/depot_tools_mac"
ninja -v -C Debug
# ninja -v -C Release

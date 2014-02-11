#!/bin/sh


/Users/tlinton/Library/Emscripten/emscripten/1.8.2/em++ Release/libwebkitjs.dylib -s EXPORTED_FUNCTIONS="['_main', '_my_func']" -O2 Release/libwebkit.js
#!/bin/sh
if [ -d "$JAVA_HEAP_SIZE" ]; then
export JAVA_HEAP_SIZE="2048m"
fi

if [ -d "$JAVAFLAGS" ]; then
export JAVAFLAGS="-client -d32"
export JAVA_FLAGS=$JAVAFLAGS
fi
 
if [ ! "which ninja" ]; then
   echo "Cannot find ninja build tool.";
   exit 1
fi

if [ ! "which emcc" ] || [ ! "which em++" ]; then
  echo "config.sh: Error: Cannot find emscripten compiler."
  exit 1
fi

# if [ `uname`=='Darwin' ]; then
#   echo "Building Xcode and Ninja files."
#   export GYP_GENERATORS=xcode,ninja
# else
 echo "Building Ninja files."
 export GYP_GENERATORS=ninja
# fi

export GYP_DEFINES="clang=1"
./tools/gyp-emscripten/gyp -Dsource_arch=js -Dtarget_arch=js -Darch=js --toplevel-dir=$PWD --depth=. --generator-output=. -G output_dir=. webkit.gyp

if [ "$?" -ne "0" ]; then
  echo "Failed to configure webkit.js properly."
  exit 1
else
  echo "webkit.js project files successfully configured and built."
fi

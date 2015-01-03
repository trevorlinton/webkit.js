#!/bin/sh
if [ -d "$JAVA_HEAP_SIZE" ]; then
export JAVA_HEAP_SIZE="2048m"
fi

if [ -d "$JAVAFLAGS" ]; then
export JAVAFLAGS="-client -d32"
export JAVA_FLAGS=$JAVAFLAGS
fi

export EMSCRIPTEN_ROOT=`em-config EMSCRIPTEN_ROOT`
export NINJA_ROOT=`which ninja`
 
if [ ! "$NINJA_ROOT" ]; then
   echo "Cannot find ninja build tool.";
   exit 1
fi

if [ -d "$EMSCRIPTEN_ROOT" ]; then
  export EMSCRIPTEN_EMCC=$EMSCRIPTEN_ROOT/emcc
  export EMSCRIPTEN_EMCPP=$EMSCRIPTEN_ROOT/em++
  if [ -z "$EMSCRIPTEN_INCLUDE" ]; then
     export EMSCRIPTEN_INCLUDE=$EMSCRIPTEN_ROOT/system/include
  fi
  if [ ! -d "$EMSCRIPTEN_INCLUDE" ]; then
     echo "config.sh: Error: Cannot find system include directory for emscripten."
     exit 1
  fi
else
  echo "config.sh: Error: Cannot find root directory for emscripten."
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

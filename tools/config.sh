#!/bin/sh
# ./deps/WebKit/Source/WebCore/make-export-file-generator ./deps/WebKit/Source/WebCore/WebCore.exp.in ./webcore_bindings/derived/ExportFileGenerator.cpp
# if [ "$?" -ne "0" ]; then
#  echo "Failed to derive exports, check stdout for errors."
#  exit 1
# fi
# perl -I deps/WebKit/Source/WebCore/bindings/scripts deps/WebKit/Source/WebCore/dom/make_event_factory.pl --input deps/WebKit/Source/WebCore/dom/EventNames.in --outputDir=webcore_bindings/derived
#
# if [ "$?" -ne "0" ]; then
#  echo "Failed to generate derived sources, check stdout for errors."
#  exit 1
# fi
#
# echo "Getting the export list from webcore.exp.in"
# if [ ! "$CC" ]; then
#  export CC=`which cc`
# fi
# $CC ./webcore_bindings/derived/ExportFileGenerator.cpp -Ideps/WebKit/Source/WTF $CFLAGS -arch x86_64 -std=c++0x -o ./build/export_generator
# if [ "$?" -ne "0" ]; then
#  echo "Failed to build exports for webkit.js, perhaps specify CC or CFLAGS in your environment."
#  exit 1
# fi
# ./build/export_generator > ./webcore_bindings/derived/webcore.exp
#
# if [ "$?" -ne "0" ]; then
#  echo "Failed to run and store webcore exports, check stdout for errors."
#  exit 1
# fi
#
# export SRCROOT=$PWD/deps/WebKit/Source/WebCore
# export SOURCE_ROOT=$PWD/deps/WebKit/Source/WebCore
# export WebCore=$PWD/deps/WebKit/Source/WebCore
# export InspectorScripts=$PWD/deps/WebKit/Source/JavaScriptCore/inspector/scripts/
#
# make -C webcore_bindings/derived -f ../../deps/WebKit/Source/WebCore/DerivedSources.make
# 
# if [ "$1" == "-refresh" ]; then
#    echo "Generating webcore file lists (this may take a while)"
#    cd tools ; ./make_webcore_file_list.sh > ../build/sources.gypi
#   cd ..
# else
#   echo "Ignoring file system changes (use -refresh to rebuild files to compile)"
# fi;

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

if [ `uname`=='Darwin' ]; then
  echo "Building Xcode and Ninja files."
  export GYP_GENERATORS=xcode,ninja
else
 echo "Building Visual Studio and Ninja files."
  export GYP_GENERATORS=msvs,ninja
fi

export GYP_DEFINES="clang=1"

./tools/gyp-emscripten/gyp -Dsource_arch=js -Dtarget_arch=js -Darch=js --toplevel-dir=$PWD --depth=$PWD --generator-output=. -G output_dir=. tools/all.gyp

if [ "$?" -ne "0" ]; then
  echo "Failed to configure webkit.js properly."
  exit 1
else
  echo "webkit.js project files successfully configured and built."
fi

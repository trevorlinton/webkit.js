#!/bin/sh
./deps/WebKit/Source/WebCore/make-export-file-generator ./deps/WebKit/Source/WebCore/WebCore.exp.in ./webcore_bindings/derived/ExportFileGenerator.cpp
perl -I deps/WebKit/Source/WebCore/bindings/scripts deps/WebKit/Source/WebCore/dom/make_event_factory.pl --input deps/WebKit/Source/WebCore/dom/EventNames.in --outputDir=webcore_bindings/derived


export SRCROOT=$PWD/deps/WebKit/Source/WebCore
export SOURCE_ROOT=$PWD/deps/WebKit/Source/WebCore
export WebCore=$PWD/deps/WebKit/Source/WebCore
export InspectorScripts=$PWD/deps/WebKit/Source/JavaScriptCore/inspector/scripts/

make -C webcore_bindings/derived -f ../../deps/WebKit/Source/WebCore/DerivedSources.make $@

export EMSCRIPTEN_ROOT=`em-config EMSCRIPTEN_ROOT`
export NINJA_ROOT=`which ninja`

if [ ! "NINJA_ROOT" ]; then
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
     echo "./build/config.sh: Error: Cannot find system include directory for emscripten."
     exit 1
  fi
else
  echo "./build/config.sh: Error: Cannot find root directory for emscripten."
  exit 1
fi

if [ `uname`=='Darwin' ]; then
  export GYP_GENERATORS=xcode,ninja
else
  export GYP_GENERATORS=xcode,msvs
fi

export GYP_DEFINES="clang=1"

./tools/gyp/gyp -Dsource_arch=js -Dtarget_arch=js -Darch=js --toplevel-dir=$PWD --depth=$PWD --generator-output=. -G output_dir=. build/all.gyp

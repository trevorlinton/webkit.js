#!/bin/sh
./deps/WebKit/Source/WebCore/make-export-file-generator ./deps/WEbKit/Source/WebCore/WebCore.exp.in ./webcore_bindings/derived/ExportFileGenerator.cpp
perl -I deps/WebKit/Source/WebCore/bindings/scripts deps/WebKit/Source/WebCore/dom/make_event_factory.pl --input deps/WebKit/Source/WebCore/dom/EventNames.in --outputDir=webcore_bindings/derived

export SRCROOT=$PWD/deps/WebKit/Source/WebCore
export SOURCE_ROOT=$PWD/deps/WebKit/Source/WebCore
export WebCore=$PWD/deps/WebKit/Source/WebCore
export InspectorScripts=$PWD/deps/WebKit/Source/JavaScriptCore/inspector/scripts/
make -C webcore_bindings/derived -f ../../deps/WebKit/Source/WebCore/DerivedSources.make $@

export GYP_GENERATORS=xcode,ninja
export CC=/Users/tlinton/Library/Emscripten/emscripten/1.8.2/emcc
export CXX=/Users/tlinton/Library/Emscripten/emscripten/1.8.2/em++
export GYP_DEFINES="clang=1"
./tools/gyp/gyp -Dsource_arch=js -Dtarget_arch=js -Darch=js --debug general --toplevel-dir=$PWD --depth=$PWD --generator-output=build -G output_dir=../build build/all.gyp

#!/bin/sh
export PWD=`pwd`/..
/usr/bin/perl -I $PWD/deps/WebKit/Source/WebCore/bindings/scripts $PWD/deps/WebKit/Source/WebCore/dom/make_event_factory.pl --input  $PWD/deps/WebKit/Source/WebCore/dom/EventNames.in  --outputDir=$PWD/src/WebCoreDerived
export SRCROOT=$PWD/deps/WebKit/Source/WebCore
export SOURCE_ROOT=$PWD/deps/WebKit/Source/WebCore 
export WebCore=$PWD/deps/WebKit/Source/WebCore
export InspectorScripts=$PWD/deps/WebKit/Source/JavaScriptCore/inspector/scripts/
make -C $PWD/src/WebCoreDerived -f $PWD/deps/WebKit/Source/WebCore/DerivedSources.make

#!/bin/sh
$1 -C ../Release webkitjs
$1 -C ../Release xml
$1 -C ../Release jpeg_turbo
$1 -C ../Release png
$1 -C ../Release freetype2
$1 -C ../Release harfbuzz
$1 -C ../Release cairo
$1 -C ../Release fontconfig

echo "Linking JavaScript"

cp ../Release/libwebkitjs.a ../Release/libwebkitjs.o
cp ../Release/libxml.a ../Release/libxml.o
cp ../Release/libjpeg_turbo.a ../Release/libjpeg_turbo.o
cp ../Release/libpng.a ../Release/libpng.o
cp ../Release/libfreetype2.a ../Release/libfreetype2.o
cp ../Release/libharfbuzz.a ../Release/libharfbuzz.o
cp ../Release/libcairo.a ../Release/libcairo.o
cp ../Release/libfontconfig.o ../Release/libfontconfig.o

$2/em++ -s FULL_ES2=1 -s LEGACY_GL_EMULATION=1 ../Release/libwebkitjs.o ../Release/libxml.o ../Release/libjpeg_turbo.o ../Release/libpng.o ../Release/libfreetype2.o ../Release/libcairo.o ../Release/libharfbuzz.o -O2 -o ../Release/webkit.js

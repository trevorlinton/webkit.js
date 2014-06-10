#!/bin/sh
./tools/crunchme-0.4/src/crunchme -nostrip -noenc Release/webkit.js Release/webkit.bin.js.png
./tools/crunchme-0.4/src/crunchme -nostrip -noenc Debug/webkit.js Debug/webkit.bin.js.png
cp Release/webkit.bin.js.png bin/webkit.release.bin.js.png
cp Debug/webkit.bin.js.png bin/webkit.debug.bin.js.png
cp src/shells/demo.html bin/demo.html
cp src/webkit.api.js bin/webkit.js

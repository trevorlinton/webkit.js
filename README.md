webkit.js
=========

A port of WebKit (specifically, webcore+libs) to JavaScript aimed at running in both node.js and browsers. Currently available for contributors; and testers.  However this is not recommended for production or beta environments.

See the [webkit.js Google Group](https://groups.google.com/forum/#!forum/webkitjs) for Discussions & Questions

Goals
----

  - Produce a renderer in pure JavaScript that supports rendering to WebGL/Canvas contexts.
  - Develop frameworks for image/webpage capturing and automated web testing (similar to PhantomJS).
  - Develop a framework for prototyping CSS filters, HTML elements and attributes.
  - Experimental harness for pure JavaScript rendering performance.
  - Develop a JavaScript based browser in nodejs (just for fun).

Status
----

**Current Issues**

* Exploring the best way of debugging and painting in both node and browser contexts. Adding SDL to browsers to simplify setting up a canvas context and forwarding GL/ARGB bitblts and mouse events with ease.
* Firefox complains of too many variables, this is only in Debug mode, you may get ASM validation errors, this is mainly due to a globally initialized variable somewhere.. Release works fine.
* Chrome complains of heap space issues, this is only in Debug mode, 30+ will crash using debug. Release works fine.
* Node will run and produce bitblt png's to stdout, this needs some native opengl modules and somehow forward SDL calls to this native GL context (for non-headless), for headless capture we'll need to add snapshot functionality to the library.

**Supported Features**

The entire HTML5, CSS3 and SVG rendering is supported; the following features are not supported and probably will never be.

* CSS Orientation (Browser Only)
* Drag & Drop (Browser Only)
* Encrypted Media
* Input Speech
* Media Streams
* JavaScript Debugger / Inspector (Could be added, although huge penalty in code size -- greater than 5MB)
* Quota's and File System (Browser Only)
* Web Workers (Although can fall back to node/browser native solutions)
* Web Sockets (Although can fall back to node/browser native solutions)
* Shadow DOM (Unnessary in a pure JS renderer)
* Web Timing (Implemented, but inaccurate due to limitations in JS spec).
* Native OS Widgets (Input, Select, etc are support, but not native widget styles; this could be added at a considerable size penalty)
* IFrames (This can never be supported in the Browser but could be built out in node -- unfortunately the rendering contexts and iframes are extremely bound to javascript context and no work is being done to resolve this.  Not to mention blank-check cross domain XmlHttpRequest will never be supported by any major browser vendor.)

Fonts are rendered via freetype2, fontconfig and cairo for consistent font rendering across all platforms. Native video and audio decoding is supported but not included in the regular build. Eventually i'll post instructions on compiling in native video/audio support.

**Performance**

* Most webpages render with similar performance as any other browser (without Javascript DOM interactions or CSS animations).
* Animations in CSS tend to perform 3~10% slower than in browsers.
* Javascript based animations in isolated tests have shown a 30~35% gain in rendering speed, this, however seems to be limited by quite a bit of JIT factors and heavily influenced by the outlining limit set by emscripten (essentially too large of functions cannot be optimized heavily).  In addition it can take a white for the JIT optimizations (on V8) to kick in and thus has inconsistant performance. This will change based on the JS bindings used to produce a full DOM representation.
* Seems viable for a useful framework for rendering snapshots, unclear on using it as a live renderer.

Building
-----------

**Requirements**

* Xcode/Visual Studio or GCC toolchain
* [Cygwin](http://dev.chromium.org/developers/how-tos/cygwin) (Windows only)
* Command Line Utilities for Xcode (Mac OS X only, with `$ xcode-select --install`)
* [Depot Tools](http://dev.chromium.org/developers/how-tos/install-depot-tools) These are a small set of command line tools that make development so much easier for projects with dependencies and pre-/post-/cross-platform build needs.
* Git
* Emscripten 1.13+
* At least 16GB of free space (seriously)
* At least 4GB of RAM

**Building webkit.js step-by-step**

* Make sure you meet all of the requirements above.
* Write the following into a file named ```.gclient``` into your new repo.

```
solutions = [
  { "name"        : ".",
    "url"         : "https://github.com/trevorlinton/webkit.js.git",
    "deps_file"   : ".DEPS.git",
    "managed"     : True,
    "custom_deps" : {
    },
    "safesync_url": "",
  },
]
```

* Run this (getting dependencies):
```
gclient sync
```
* Then run this (generating project files based on your OS):
```
./config.sh
```
* Then to build; run this (generates the actual js file):
```
ninja -C Release
```
* OR if you want a debug version run this:
```
ninja -C Debug
```

Running in the Browser
--------------
See demo.html and webkit.js in the "bin" folder, runs best in Firefox (Chrome/Safari seem to have large long hiccups and freezes due to garbage collection).

Contributing
--------------

**Getting around the code**

* `/deps/WebKit/` This is a modified version of Apple's official repo.
* `/deps/WebKit/Source/WebCore` This is where 90% of the work is done.
* `/deps/WebKit/Source/WebCore/bindings/scripts` This is an important folder where WebKit autogenerates bindings
* `/deps/WebKit/Source/WTF/` is a cross-platform library for common tasks such as HashMaps, etc.
* `/deps/WebKit/Source/WTF/PlatformJS.h` these are C++ pre-process settings for PLATFORM(JS)
* `/features.gypi` You can turn various features in WebCore on and off here
* `/common.gypi` You can change various compiler settings, system paths, etc.
* `/all.gypi` This contains the build arch and is the first file used when generating project files with gyp.
* `/sources.gypi` This file contains the list of all of the sources to compile.
* `/derived.gypi` This file is auto-generated by make-source-files.sh in the tools directory, it hunts down any changes vs. what's in derived.gypi currently and adds it in.  This is convenient only when you've done a pull from WebKit and need to make sure you've properly added/removed files based on what's happened upstream. 
* `/config.sh` This autogenerates the project files, it also tries to find em++/emcc and all of your tools, if config files, check the file to make sure its finding emscripten and clang.
* `/src` This contains all of the derived sources, bindings, and custom code to link in with WebCore and bind it to canvas, node and javascript contexts. This will also be where the API will be built.
* `/bin` This contains the latest builds for debug and release modes.  Note that the debug builds are compressed for the sake of github.

**It's important to know**

* The code within the WebKit folder is pulled from upstream, be careful not to move any files, remove any files or heavily refactor any source file as it will cause headaches when merging.
* Enabling/disabling settings within the `features.gypi` will have a lot of consequences, most of the disabled features are disabled because there's no possible work around for including the platform specific or network layer code (bindings to forward this to the native browser/nodejs module will need to be built). In addition, if features.gypi is modified that you update featurs.make within the tools folder.
* A good amount of the bindings and code within the WebCore are auto generated from scripts, be careful when you have build errors to make sure you're not modifying a "Derived Sources" file, otherwise you'll find your changes will be just over-written the next time this script runs.
* Do not modify code within `src/WebCoreDerived`, it's autogenerated and will most likely be overwritten if the derived sources needs to rebuild.
* Becareful adding files/changing settings in your native IDE/toolchain, these settings are intially set in `config.sh` and `common.gypi` (and related gypi/gyp files). While not all settings will be overwritten with a new config, there's a chance some of your settings may need to be added to these files.

**Roadmap**

* **DONE** ~~A build toolchain similar to GYP/gconfig. QtWebkit has one already, possibly re-map that.~~
* **DONE** ~~Create "Debug" and "Release" modes that allow for easier debugging. In addition creating anything that helps debug and spot problems easier.~~
* **DONE** ~~Integration of WTF library into WebCore~~
* **Bad Idea -** ~~Start smaller with GYP and only develop one pass layout system from CSS/HTML/DOM code with minimal features and build up.~~
* **Bad Idea -** ~~Take each file one by one in ./webkitjs/debug/ and port?...~~
* **DONE** ~~Dependency and/or symbol graph that rebuilds automatically after a compile (expressed as a HTML doc?) The core reason for this is to visualize dependencies between classes, unresolved symbols still to be developed, and spot key integration points. This can be done by regex over the existing ./webkitjs/debug for symbols and building a D3 graph to show the symbols dependency possibly? Is there already key software that does this? Can emscripten/llvm spit this out?~~
* **DONE** ~~Identify what key import symbols may require significant retooling.~~
* **DONE** ~~Integrate libxml.js (rather than depending on browser pass through decoding to a buffer)~~
* **DONE** ~~Integrate libxslt.js (currently unsupported)~~
* **DONE** ~~Integrate ffmpeg.js ?.... pure JavaScript video support?..... .~~
* **DONE** ~~Integrate libpng.js (rather than depending on browser pass through decoding to a buffer)~~
* **DONE** ~~Integrate libjpeg-turbo.js/libjpeg.js (rather than depending on browser pass through decoding to a buffer)~~
* **DONE** ~~Integrate zlib (rather than depending on browser pass through decoding to a buffer)~~
* **DONE** ~~Integrate both node and web browser environments for testing demo of basic HTML~~
* **DONE** ~~Integrate support for font resource loading and virtual file system for fontconfig~~
* **Bad Idea -** ~~Use embind/cppfilter.js to automatically generate all the WebCore C++ interfaces (derived from WebCore.exp.in) directly into JavaScript, then simply reuse existing webcore demos/examples.~~
* **DONE** ~~Generate a webkit.js API based on the WebCore C++ interfaces exported to JavaScript.~~
* **DONE** ~~Explore best methods for creating demo's and painting within WebKitJS.cpp to the host context.~~
* **DONE** ~~Experiment with emscripten outlining, lto, and optimization techniques to prevent variable/heap/stack limitations and reduce code size.~~
* **DONE** ~~Generate simple JavaScript library to create, use and manage webkit.js rendering.~~
* **In Progress** Create examples, demos and how-to guides (documentation, etc).
* Create hooks into webkit layout tests to ensure functionality.
* Scripts to auto-generate code with Emscripten JavaScript Bindings to enable DOM interactions with JavaScript (e.g., IDL generation, and some other bindings/scripts tasks)
* Removal of "oddity" code (e.g., no mans land code, existing dead code, platform specific code) and optimization of file size and runtime
* Benchmark harnass between different browsers and webkit.js
* Everything else that's actually fun and note worthy (listed above in Goals).

License
----
[BSD License](http://www.webkit.org/coding/bsd-license.html). Use of this source code is governed by a BSD-style license that can be found in the LICENSE files contained in the root of the respective source code.

&copy; True Interactions 2014 (www.trueinteractions.com)

www.twitter.com/trevorlinton

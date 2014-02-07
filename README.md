webkit.js
=========

An experimental port of WebKit (Specifically, webcore) to JavaScript aimed at running in both node.js and browsers. This is currently non-functional and is intended for developers and contributors.

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

**Toolchain**
- (GOOD) The new build system compiles on Linux, Windows (cygwin) and MacOS X. Uses gyp to generate project files in addition custom scripts. So far these seems fairly stable and will not change significantly.

**Building**
- (GREAT) Currently the latest nightly WebKit builds with cairo, freetype, libjpeg, libpng and other dependencies.  

**Linking**
- (BAD) There's a list of undefined symbols that need to be resolved, use llvm-nm on a .a, .so, .lib to find and tackle unresolved issues.  The exported symbols need to be defined using embind. This will provide javascript to C++ api's quickly and easily, the classes that need to be bound are (initially): WebCore::Page, WebCore::PageClients, WebCore::Frame (and subsequent Clients mapped to javascript events) need to be built.  This is mostly grunt work, not a whole lot of thinking required, perhaps an automated script could be used to generate these, however it requires parsing C++. 

**Tests**
- (NON EXISTENT) Tests for JavaScript<->C++ needs to be developed (non-layout related code)
- (BAD) Unit tests that integrate with WebKit's LayoutTests

**Supported Features**
* (GOOD) Features that are *not* currently supported:

    * Accelerated 2D Canvas
    * CSS Image Resolution
    * CSS Image Orientation
    * CSS3 Text
    * Draggable Regions
    * Encrypted Media
    * Font Load Events
    * Input Speech
    * Audio
    * **Supported** ~~Video~~
    * Media Streams
    * JavaScript Debugger / Inspector
    * MHTML
    * PDF/PDFKit
    * Quota's
    * Web Workers
    * Web Sockets
    * Shadow DOM
    * Web Timing
    * **Supported** ~~XSLT~~
    * Native Widgets (IFRAME, Buttons, Text Boxes, etc.)
    * Any Resource Loaders
    * **Supported** ~~Font Rendering~~

**Frameworks**
- (NON EXISTENT) Frameworks to easily perform common tasks with the renderer under various contexts.

**Documentation**
- (BAD) Lots and lots of documentation, currently this is it.


Building
-----------

**Requirements**

* Xcode/Visual Studio or GCC toolchain
* [Cygwin](http://dev.chromium.org/developers/how-tos/cygwin) (Windows only)
* Command Line Utilities for Xcode (Mac OS X only, with `$ xcode-select --install`)
* [Depot Tools](http://dev.chromium.org/developers/how-tos/install-depot-tools)
* Git
* Emscripten 1.8.2+ 
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
* Note, you should change the git repo URL if you have forked this. 
* Open a terminal (or cygwin) and navigate to your folder, run:
```
gclient sync
```
* Execute:
```
./build/config.sh
```
* You should now have project files built for your platform. In Mac OS X you can open build/all.xcodeproj, or in windows build/all.vcproj. 
* Compiling, either build in Xcode/MSVS or execute: ```ninja -C Release``` at the root.

Contributing
--------------

There's so much to be done any help is appreciated, at the moment I have a brutal wrapper/harness that can render DIV's with various colors to a WebGL surface in Chrome 32. It's not impressive but its a proof of concept.

**Getting around the code**

* `/deps/WebKit/` This is a modified version of Apple's official repo.
* `/deps/WebKit/Source/WebCore` This is where 90% of the work is done.
* `/deps/WebKit/Source/WebCore/bindings/scripts` This is an important folder where WebKit autogenerates bindings
* `/deps/WebKit/Source/WTF/` is a cross-platform library for common tasks such as HashMaps, etc.
* `/deps/WebKit/Source/WTF/PlatformJS.h` these are C++ pre-process settings for PLATFORM(JS)
* `/build/features.gypi` You can turn various features in WebCore on and off here
* `/build/common.gypi` You can change various compiler settings, system paths, etc.
* `/build/all.gypi` This contains the build arch and is the first file used when generating project files with gyp.
* `/build/sources.gypi` This file contains the list of all of the sources to compile.
* `/build/config.sh` This autogenerates the project files, it also tries to find em++/emcc and all of your tools, if config files, check the file to make sure its finding emscripten and clang.

**It's important to know**

* The code within the WebKit folder is pulled from upstream, be careful not to move any files, remove any files or heavily refactor any source file as it will cause headaches when merging.
* Enabling/disabling settings within the `build/features.gypi` will have a lot of consequences, most of the disabled features are disabled because there's no possible work around for including the platform specific or network layer code (bindings to forward this to the native browser/nodejs module will need to be built).
* A good amount of the bindings and code within the WebCore are auto generated from scripts, be careful when you have build errors to make sure you're not modifying a "Derived Sources" file, otherwise you'll find your changes will be just over-written the next time this script runs.
* The current webkit.js "binary" was compiled exposing its symbols, this results in a heavy file size (current 111MB - 2/4/14). However with isolated symbols and -O2 optimizations plus minimization this will come down to 5MB from my tests once we have a proper list of exported symbols (and don't export everything).
* Do not modify code within `deps/WebKit/WebKitBuild`, `build/out`, `build/Release`, `Release`, `webcore_bindings/derived` or `build/Debug` these files are over-written when WebKit is built, so its somewhat pointless unless you're testing. 

**What's Desperately Needed**
* **DONE** A build toolchain similar to GYP/gconfig. QtWebkit has one already, possibly re-map that.
* **DONE** Create "Debug" and "Release" modes that allow for easier debugging. In addition creating anything that helps debug and spot problems easier.
* Scripts to auto-generate code with Emscripten JS Bindings (e.g., IDL generation, and some other bindings/scripts tasks)
* **DONE** Integration of WTF library into WebCore
* Closer examination of optimization/best practices/guidance on Emscripten.
* Closer examination of optimization/best practices/guidance on compiling WebCore/renderer.
* Removal of "oddity" code (e.g., no mans land code, existing dead code, platform specific code)
* **Bad Idea -** ~~Start smaller with GYP and only develop one pass layout system from CSS/HTML/DOM code with minimal features and build up.~~
* **Bad Idea -** ~~Take each file one by one in ./webkitjs/debug/ and port?...~~
* Conversation, topics, discussions on best practices, methods and use cases
* Dependency and/or symbol graph that rebuilds automatically after a compile (expressed as a HTML doc?) The core reason for this is to visualize dependencies between classes, unresolved symbols still to be developed, and spot key integration points. This can be done by regex over the existing ./webkitjs/debug for symbols and building a D3 graph to show the symbols dependency possibly? Is there already key software that does this? Can emscripten/llvm spit this out?
* Identify what key import symbols may require significant retooling.
* **DONE** ~~Integrate libxml.js (rather than depending on browser pass through decoding to a buffer)~~
* **DONE** ~~Integrate libxslt.js (currently unsupported)~~
* **DONE** ~~Integrate ffmpeg.js ?.... pure JavaScript video support?..... .~~
* **DONE** ~~Integrate libpng.js (rather than depending on browser pass through decoding to a buffer)~~
* **DONE** ~~Integrate libjpeg-turbo.js/libjpeg.js (rather than depending on browser pass through decoding to a buffer)~~
* **DONE** ~~Integrate zlib (rather than depending on browser pass through decoding to a buffer)~~
* **Bad Idea -** ~~Use embind/cppfilter.js to automatically generate all the WebCore C++ interfaces (derived from WebCore.exp.in) directly into JavaScript, then simply reuse existing webcore demos/examples.~~
* **In Progress -**Generate a webkit.js API based on the WebCore C++ interfaces exported to JavaScript with embind/cppfilter.js.


License
----
[BSD License](http://www.webkit.org/coding/bsd-license.html). Use of this source code is governed by a BSD-style license that can be found in the LICENSE files contained in the root of the respective source code.

&copy; True Interactions 2014

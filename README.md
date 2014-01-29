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
- (BAD) Currently will only compile with Emscripten 1.8.2 on Mac OS X in Xcode. 

**Building**
- (GOOD) Currently the latest nightly WebKit builds.

**Linking**
- (HORRIFIC) There are plenty of linking issues to be addressed; however visibility into this is minimal. Currently the system links but has quite a few unresolved symbols that will cause the renderer to crash. 

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
- (NON EXISTENT) Lots and lots of documentation, currently this is it.


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
* If your on windows execute:
```
export GYP_GENERATORS=msvs,ninja
```
* For Mac OS X execute:
```
export GYP_GENERATORS=xcode,ninja
```
* For all other platforms, execute:
```
export GYP_GENERATORS=ninja
```
* Finally execute:
```
./build/config.sh
```
* You should now have project files built for your platform. In Mac OS X you can open build/all.xcodeproj, or in windows build/all.vcproj. 
* Compiling, execute: ```ninja -C build/out/Default```

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

**It's important to know**

* The code within the WebKit folder is pulled from upstream, be careful not to move any files, remove any files or heavily refactor any source file as it will cause headaches when merging.
* Enabling/disabling settings within the `deps/WebKit/Source/WebCore/Configurations` folder will have a lot of consequences, most of the disabled features are disabled because there's no possible work around for including the platform specific or network layer code (bindings to forward this to the native browser/nodejs module will need to be built).
* A good amount of the bindings and code within the WebCore are auto generated from scripts, be careful when you have build errors to make sure you're not modifying a "Derived Sources" file, otherwise you'll find your changes will be just over-written the next time this script runs.
* The current webkit.js in `build/Release/` folder was compiled exposing its symbols, this results in a heavy file size (current 44MB - 1/15/14). This can come down considerably once a small list of export symbols is used, the unit tests are created and optimizations can become a priority. (Targeting module based ~10MB code size)
* Do not modify code within `deps/WebKit/WebKitBuild`, `build/out`, `build/Release` or `build/Debug` these files are over-written when WebKit is built, so its somewhat pointless unless you're testing. In addition any files within the debug folder or webkit.js are autogenerated from the build.

**What's Desperately Needed**
* **In Progress -** A build toolchain similar to GYP/gconfig. QtWebkit has one already, possibly re-map that.
* **In Progress -** Create "Debug" and "Release" modes that allow for easier debugging. In addition creating anything that helps debug and spot problems easier.
* Scripts to auto-generate code with Emscripten JS Bindings (e.g., IDL generation, and some other bindings/scripts tasks)
* **In Progress -** Integration of WTF library into WebCore
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
* Use embind/cppfilter.js to automatically generate all the WebCore C++ interfaces (derived from WebCore.exp.in) directly into JavaScript, then simply reuse existing webcore demos/examples.
* Generate a webkit.js API based on the WebCore C++ interfaces exported to JavaScript with embind/cppfilter.js.


License
----
[BSD License](http://www.webkit.org/coding/bsd-license.html). Use of this source code is governed by a BSD-style license that can be found in the LICENSE files contained in the root of the respective source code.

&copy; True Interactions 2014

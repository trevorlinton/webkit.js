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
  - Refactor webkit.cpp to a normalized set of JS classes.

Status
----

**Toolchain**

- webkit.js uses the same toolchain as Chromium -- gyp and ninja.  This was chosen for the greatest integration and output in addition to being easily modified to support javascript compilation via emscripten. 

*Why'd we use GYP?*

- Use your favoriate IDE, after configuring project files for Xcode, Visual Studio, make and ninja are produced.

- Simplifies development system to one project file for a large array of development environments.

- Downside is you MUST build with ninja (see building later).

**Building**

- Currently the build works on both Windows, Xcode and Linux (please file a bug if you have issues). All features listed below compile without any OS, Browser or JS dependencies.

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

**Performance & Capabilities**

Very --very-- limited tests has shown some animations and support have been 30~35% faster (in isolated circumstances) than Firefox, Chrome and Safari (however official tests need much more development before this is any sort of offical claim, right now it's alot of hope and excitement). 

**Tests**

- Unit tests for the webkit API are underway.
- Minimal support for WebKit LayoutTests supports 22% pass rate, this seems terrible until we found that these tests are failing because of XmlHttpRequest's can't get the appropriate resources and many of the unnecessary JavaScript <-> DOM API's are unnecessary as they're already implemented in the host systems but explicitly in WebCore. However both CSS3, HTML5, SVG, Filters, and Accelerated Compositing tests have performed very well.

**Frameworks and APIs**

- Currently the demo simply renders what HTML is passed in via the command line or a postMessage (as a worker).  Canvas objects and EGL windows are autocreated for it.  This simplistic approach does not give much control over rendering to the user but is a start for testing.

**Documentation**

- (BAD) Lots and lots of documentation, currently this is it.

**Debugging**

If you use `bin/webkit.js` you'll receive updates from the main loop's progress; however if there's a crash or you need to debug issues you'll most likely want to use `bin/webkit.debug.js`.  This allows you to see full stack traces of the C++ methods invoked if it hits a core dump/llvm-trap. In addition you can see the full function call trace for major classes such as Page, (all)Clients, WebFrame, Frame, GraphicsContext, etc. Unfortuantely without better debugging tools the traces are a good alternative.  You can also try using  Chrome's standard debugger, but it doesn't seem to enjoy 110MB files -- try Firefox instead.

- (GREAT) The new build system compiles on Linux, Windows (cygwin) and MacOS X. Uses gyp to generate project files in addition custom scripts. So far these seems fairly stable and will not change significantly.

**Building**
- (GREAT) Currently the latest nightly WebKit builds with cairo, freetype2, libjpeg, libpng and other dependencies.  

**Linking**
- (GOOD) Only a small few dependencies need to be brought in.  See UnresolvedSymbolsDemangled.md for more information.

**Supported Features**
* (GREAT) Nearly the entire HTML5, CSS3 and SVG rendering is supported; the following features are not supported and probably will never be.

    * CSS Orientation
    * Draggable Regions
    * Encrypted Media
    * Input Speech
    * Media Streams
    * JavaScript Debugger / Inspector
    * Quota's
    * Web Workers
    * Web Sockets
    * Shadow DOM
    * Web Timing
    * Native OS Widgets
    * IFrames (although this can be emulated on some platforms)
  
Fonts are rendered via freetype2, fontconfig and cairo for consistent font rendering across all platforms. Native video and audio decoding is supported but not included in the regular build. Eventually i'll post instructions on compiling in native video/audio support.

**Tests**
- (BAD) Tests for JavaScript<->C++ needs to be developed (non-layout related code)
- (BAD) Unit tests that integrate with WebKit's LayoutTests

**Frameworks**
- (BAD) Frameworks to easily perform common tasks with the renderer under various contexts.

**Documentation**
- (BAD) Lots and lots of documentation, currently this is it.

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
Currently this can be ran by using postMessage and Emscripten's standard way of posting arguments into a "main" method within a browser.  Make sure to run it as a webworker otherwise say goodbye to your UI. Debug messages are printed to the debug console.


Running in Node
--------------
This is the preferred way of running it, an EGL simple window should appear, if not file a bug. Debug messages are printed to stderr.

```
$ node webkit.js "<html><body>Some HTML</body></html>"
```

Contributing
--------------

There's so much to be done any help is appreciated, at the moment I have a brutal wrapper/harness that can render DIV's with various colors to a WebGL surface in Chrome 32. It's not impressive but its a proof of concept.

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
* `/derived.gypi` This file is autogenerated by make-source-files.sh in the tools directory, it hunts down any changes vs. what's in derived.gypi currently and adds it in.  This is convenient only when you've done a pull from WebKit and need to make sure you've properly added/removed files based on what's happened upstream. 
* `/config.sh` This autogenerates the project files, it also tries to find em++/emcc and all of your tools, if config files, check the file to make sure its finding emscripten and clang.
* `/src/` This contains all of the derived sources, bindings, and custom code to link in with WebCore and bind it to canvas, node and javascript contexts. This will also be where the API will be built.

**It's important to know**

* The code within the WebKit folder is pulled from upstream, be careful not to move any files, remove any files or heavily refactor any source file as it will cause headaches when merging.
* Enabling/disabling settings within the `build/features.gypi` will have a lot of consequences, most of the disabled features are disabled because there's no possible work around for including the platform specific or network layer code (bindings to forward this to the native browser/nodejs module will need to be built).
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
* **DONE** --Integrate both node and web browser environments for testing demo of basic HTML--
* **DONE** --Integrate support for Resource loading and proxy loading via emscripten--
* **Bad Idea -** ~~Use embind/cppfilter.js to automatically generate all the WebCore C++ interfaces (derived from WebCore.exp.in) directly into JavaScript, then simply reuse existing webcore demos/examples.~~
* **In Progress -**Generate a webkit.js API based on the WebCore C++ interfaces exported to JavaScript with embind/cppfilter.js.
* Generate simple JavaScript library to create, use and manage webkit.js rendering.
* Create examples, demos and how-to guides (documentation, etc).
* Create hooks into webkit layout tests to ensure functionality.
* Scripts to auto-generate code with Emscripten JavaScript Bindings to enable DOM interactions with JavaScript (e.g., IDL generation, and some other bindings/scripts tasks)
* Removal of "oddity" code (e.g., no mans land code, existing dead code, platform specific code) and optimization of file size and runtime
* Benchmark harnass between different browsers and webkit.js
* Everything else that's actually fun and note worthy (listed above in Goals).

License
----
[BSD License](http://www.webkit.org/coding/bsd-license.html). Use of this source code is governed by a BSD-style license that can be found in the LICENSE files contained in the root of the respective source code.

&copy; True Interactions 2014

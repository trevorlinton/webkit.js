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

* Fixing canvas size bitblt issues; canvas width and height can become inaccurate due to hi-dpi rendering.
* Alpha channels are being flattened for unknown reasons, in addition gradients and animations in css are not rendering.
* Inline SVG seg-faults. Most likely due to threading issue.
* Resource loader has yet to be implemented, callback for browser (and eventually node)
* Enhancing the API.  Adding mouse event callbacks, scrolling, keyboard callbacks, and snapshot to it.  Until there's a stable (well tested) API this will remain as an experiment.


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

Demo
--------------
http://trevorlinton.github.io/webkit.js/demo.html (Firefox only, Chrome/Safari cause huge pauses because of garbage collection).

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
* `/src/WebView.cpp` This is the main 'essential' class and loading class for everything.
* `/src/Main.cpp` This is a proxy from C++ to C, so we can use the emscripten exported symbols features.
* `/src/Symbols.exports` This contains a list of C functions that are exported to javascript (and thus accessible to the javascript API.
* `/src/webkit.api.js` This is the javascript file thats exposed to javascript programmers.

**Adding to the API**
The architecture to webkit.js is fairly straight forward, the program initalizes and ignores threads, but obeys timers.  There is no main loop.  This can be a bit of a surprise as most C++ rendering has a main loop that keeps syncronous rendering calls and handles window events.  Since javascript in effect IS the main loop we treat it as such. webkit.js uses SDL as a convenient proxy from web workers to canvas/GL contexts that has natural bindings to EGL/OpenGLESV2 and cairo surfaces that webkit uses to internally perform its work. Ultimately all of this is translated by SDL into javascript calls for mouse, keyboard, scroll events and handles translating C++ bitblts to canvas drawImage/putImage calls. In addition OpenGL contexts are done through a 1:1 translation of the OpenGLESV2 and WebGL api's.

Rendering

When HTML is loaded the render kicks off and exits retaining its memory state without destructors being called.  This allows us to 'mimick' a main loop and only execute rendering calls when absolutely necessary. Hardware acceleration can be alot of things to alot of people, it could mean hardware accelerated compositing, back tiling for smooth scrolling in the GPU, quite a few things. Webkit.js uses webgl/openglesv2 to store textures and 'hardware accelerate' rendering.  This is a bit of a misnomer, as it really hardware accelerates parts of rendering such as compositing and back buffer stores to make scrolling smooth. In reality, every draw command is the same expense regardless. Hardware acceleration just means there are fewer draw commands through the CPU and more memory use in the GPU, at certain times.

Some major issues with rendering is conversion of ARGB->RGBA (per to pre) formats. The file cairosdl.c in src helps aleviate the inconsistancies between cairo/sdl/canvas surfaces so colors come out correct and pre-alpha.  This can however be very confusing if you're bitblting out without knowing about cairosdl for testing/rendering dumps/snapshots as colors come out incorrectly.

Bitblts come out as SDL calls, and use an RGBA(32-bit) pre-multiplied alpha format (even though cairo calls create ARGB(32-bit) per-pixel alpha.

Initialization
When initalization begins, webkit grabs heap memory, runs the constructor of a handful of global classes for managing smart pointers and universal text handles, in addition WebKitStrategiesJS is created. If you have a llvm trap before calling any functions, its most likely in one of these initialization routines or emscirpten's expectations of code use.

Threads
There are no "threads" persay, this is obvious in a way since Javascript doesn't support shared memory states.  However this isn't as big of an issue, WebKit relys on timers (and one shot timers) for its rendering rather than threads.  This translates pretty easily to a C wrapper in emscripten that mimicks timers using setTimeout/setInterval.



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
* **DONE** ~~Investigate if SKIA might provide better rendering -- no, skia does not support accelerated back-tile compositing needed by WebKit~~
* **DONE** ~~Support for hidpi rendering on retina displays, support for device scale factors and clean font rendering~~
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

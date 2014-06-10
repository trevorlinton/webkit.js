CrunchMe v0.4
=============

2011-04-25


Description
-----------
CrunchMe is a simple command line tool that compresses JavaScript code. The
source code is stripped from comments and white-spaces and compressed using
either the LZG algorithm (http://liblzg.sf.net) or the DEFLATE algorithm
(through a PNG+canvas hack), and the generated file is a self-extracting
JavaScript program that should have the same function as the original
code.


Licensing
---------
The CrunchMe tool (written in C++) is released under the GNU General Public
License v3 (see src/COPYING), but the self extracting JavaScript code is
released under the zlib/libpng license, meaning that there should be no
practical restrictions to how you can use your packed sources (NOTE: in the
context of the zlib/libpng license, the unpackers that are embedded in the
compressed sources are considered "compiled").

Also, the CrunchMe tool uses the liblzg and zlib libraries, which themselves
are released under the zlib/libpng license.


Building from source
--------------------
Quick build instructions (requires gcc/make):

1) Enter the src/liblzg/lib folder and issue "make".

2) Enter the src/zlib folder and issue "./configure" and then "make".

3) Enter the src folder and issue "make".

Done!

For other compilers/systems, you may have to make your own build system, but
since both the liblzg library and the crunchme tool are quite minimal by design,
it should not be that hard (plus, the code _should_ be 100% portable).


Using
-----
The CrunchMe tool is called from the command line:

   crunchme [options] infile [outfile]

The program takes as input a JavaScript source file in Latin 1 (or ASCII) coding
(there is currently no support for UTF-8, UTF-16, etc), and outputs a compressed
JavaScript file.

Options:
 -nostrip  Do not strip/preprocess JavaScript source
 -utf16    Use UTF-16 output encoding (default)
 -latin1   Use Latin 1 (ISO-8859-1) output encoding
 -png      Use PNG compression (default)
 -lzg      Use LZG compression (most portable)
 -q        Be quiet
 -V        Show program version and exit

If no output file is given, stdout is used for output.


Some notes
----------
- Pre-process your source with the Google Closure Compiler
  (http://closure-compiler.appspot.com/home) whenever suitable.

- The LZG option gives the most portable code (pure ECMAScript), while the PNG
  option usually gives the best compression. For the PNG-based decoder to work,
  the browser must support the HTML canvas element (which is used for
  decompressing the PNG file, which in turn contains the packed JavaScript
  source).

- Use the Latin 1 output option for small files, and the UTF-16 option for large
  files (try both to see which gives the best result). Rationale: the UTF-16
  version of the decoder is slightly larger than the Latin 1 version, but on the
  other hand it has less overhead in the encoding of the binary data.

- Be aware that the built in code stripper (enabled by default) does not do any
  advanced JavaScript parsing. This means that things like automatic semicolon
  insertion is likely to get messed up - please do not rely on it in your code!
  If your program does not run after compression, try the -nostrip option.

  Common pitfall: var x = function(a){...};  <-- Do not forget the semicolon
  after a var declaration!

- CrunchMe has only been tested on very few JavaScript programs, so be warned
  that there may be cases that the tool does not deal well with.


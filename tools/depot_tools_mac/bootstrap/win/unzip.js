// Copyright (c) 2009 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function Unzip(file, path, verbose) {
  if (verbose) {
    WScript.StdOut.Write(" *  UNZIP " + file);
  }
  var shell_app;
  var fso;
  try {
    shell_app = new ActiveXObject("Shell.Application");
    fso = new ActiveXObject("Scripting.FileSystemObject");
  } catch (e) {
    WScript.StdOut.WriteLine("[-] OBJECTS " + new Number(e.number).toHex() + 
        ": Cannot create Active-X object (" + e.description) + ").";
    WScript.Quit(1);
  }
  // shell_app.Namespace() doesn't work with relative paths.
  //current_dir = fso.GetFolder('.').Path + '\\'
  //path = current_dir + path
  //file = current_dir + file
  var out;
  var zip;
  try {
    if (!fso.FolderExists(path)) {
      fso.CreateFolder(path);
    }
    out = shell_app.Namespace(path);
  } catch (e) {
    WScript.StdOut.WriteLine("[-] SHELL.APPLICATION " +
        new Number(e.number).toHex() + 
        ": Failed to open output directory.");
    WScript.Quit(1);
  }
  if (!out) {
    WScript.StdOut.WriteLine("[-] SHELL.APPLICATION : Failed to open output directory.");
    WScript.Quit(1);
  }

  try {
    zip = shell_app.Namespace(file);
  } catch (e) {
    WScript.StdOut.WriteLine("[-] SHELL.APPLICATION " +
        new Number(e.number).toHex() + 
        ": Failed to open zip file.");
    WScript.Quit(1);
  }
  if (!zip) {
    WScript.StdOut.WriteLine("[-] SHELL.APPLICATION " +
        ": Failed to open zip file.");
    WScript.Quit(1);
  }

  try {
    out.CopyHere(zip.Items());
  } catch (e) {
    WScript.StdOut.WriteLine("[-] SHELL.APPLICATION " +
        new Number(e.number).toHex() + 
        ": Failed to extract.");
    WScript.Quit(1);
  }
  if (verbose) {
    WScript.StdOut.WriteLine("ok.");
  }
}

// Utilities
Number.prototype.isInt = function NumberIsInt() {
  return this % 1 == 0; 
};
Number.prototype.toHex = function NumberToHex(length) {
  if (arguments.length == 0) length = 1;
  if (typeof(length) != "number" && !(length instanceof Number)) {
    throw Exception("Length must be a positive integer larger than 0.", 
        TypeError, 0);
  }
  if (length < 1 || !length.isInt()) {
    throw Exception("Length must be a positive integer larger than 0.", 
        "RangeError", 0);
  }
  var result = (this + (this < 0 ? 0x100000000 : 0)).toString(16);
  while (result.length < length) result = "0" + result;
  return result;
};

if (WScript.Arguments.length != 2) {
  WScript.StdOut.Write("Incorrect arguments to unzip.js")
} else {
  Unzip(WScript.Arguments(0), WScript.Arguments(1), false);
}

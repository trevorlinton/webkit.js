// Note: For maximum-speed code, see "Optimizing Code" on the Emscripten wiki, https://github.com/kripken/emscripten/wiki/Optimizing-Code
// Note: Some Emscripten settings may limit the speed of the generated code.
// Capture the output of this into a variable, if you want
(function(FUNCTION_TABLE_OFFSET, parentModule) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  Module.print = parentModule.print;
  Module.printErr = parentModule.printErr;
  Module.cleanups = [];
  var H_BASE = 0;
  // Each module has its own stack
  var STACKTOP = parentModule['_malloc'](TOTAL_STACK);
  assert(STACKTOP % 8 == 0);
  var STACK_MAX = STACKTOP + TOTAL_STACK;
  Module.cleanups.push(function() {
    parentModule['_free'](STACKTOP); // XXX ensure exported
    parentModule['_free'](H_BASE);
  });
// === Auto-generated preamble library stuff ===
//========================================
// Runtime essentials
//========================================
function callRuntimeCallbacks(callbacks) {
  while(callbacks.length > 0) {
    var callback = callbacks.pop();
    var func = callback.func;
    if (typeof func === 'number') {
      func = FUNCTION_TABLE[func];
    }
    func(callback.arg === undefined ? null : callback.arg);
  }
}
var __ATINIT__ = []; // functions called during startup
function initRuntime() {
  callRuntimeCallbacks(__ATINIT__);
}
// === Body ===
H_BASE = parentModule["_malloc"](3200 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 3200;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore16RenderListMarkerC1ERNS_14RenderListItemEN3WTF7PassRefINS_11RenderStyleEEE;
var __ZN7WebCore16RenderListMarkerD1Ev;
/* memory initializer */ allocate([82,101,110,100,101,114,76,105,115,116,77,97,114,107,101,114,0,0,0,0,0,0,0,0,32,0,0,0,0,0,0,0,45,48,0,0,0,0,0,0,208,5,228,5,225,5,0,0,73,86,88,76,67,68,77,0,105,118,120,108,99,100,109,0,217,5,219,5,220,5,222,5,224,5,225,5,226,5,228,5,230,5,0,0,0,0,0,0,233,16,234,16,235,16,236,16,237,16,238,16,244,16,239,16,240,16,0,0,0,0,0,0,224,16,225,16,226,16,243,16,228,16,229,16,230,16,231,16,232,16,0,0,0,0,0,0,216,16,217,16,218,16,219,16,220,16,242,16,221,16,222,16,223,16,0,0,0,0,0,0,208,16,209,16,210,16,211,16,212,16,213,16,214,16,241,16,215,16,0,0,0,0,0,0,44,132,4,81,70,81,65,83,126,118,67,83,246,150,0,78,140,78,9,78,219,86,148,78,109,81,3,78,107,81,93,78,0,18,8,18,16,18,24,18,40,18,48,18,56,18,64,18,96,18,112,18,120,18,144,18,152,18,160,18,168,18,200,18,232,18,240,18,248,18,0,19,8,19,32,19,40,19,56,19,48,19,72,19,0,0,0,0,0,18,8,18,16,18,24,18,32,18,40,18,48,18,56,18,64,18,80,18,96,18,112,18,120,18,128,18,144,18,152,18,160,18,168,18,184,18,200,18,208,18,216,18,224,18,232,18,240,18,0,19,8,19,32,19,40,19,48,19,56,19,64,19,72,19,80,19,0,0,0,0,0,18,8,18,16,18,24,18,40,18,48,18,56,18,64,18,80,18,96,18,112,18,120,18,144,18,152,18,160,18,168,18,184,18,200,18,208,18,216,18,224,18,232,18,240,18,0,19,8,19,32,19,40,19,48,19,56,19,72,19,80,19,0,0,0,18,8,18,16,18,24,18,40,18,48,18,56,18,64,18,96,18,112,18,144,18,160,18,168,18,184,18,200,18,208,18,232,18,240,18,0,19,8,19,56,19,72,19,0,0,0,0,0,18,8,18,24,18,40,18,48,18,56,18,64,18,96,18,112,18,120,18,144,18,152,18,160,18,168,18,200,18,232,18,240,18,248,18,0,19,8,19,32,19,40,19,56,19,48,19,72,19,0,0,0,0,0,0,0,18,8,18,16,18,24,18,32,18,40,18,48,18,56,18,64,18,96,18,112,18,120,18,128,18,144,18,152,18,160,18,168,18,184,18,200,18,208,18,216,18,224,18,232,18,240,18,0,19,8,19,32,19,40,19,48,19,56,19,64,19,72,19,80,19,0,0,0,0,0,0,0,18,8,18,16,18,24,18,40,18,48,18,96,18,112,18,144,18,160,18,168,18,200,18,208,18,232,18,240,18,8,19,56,19,72,19,0,0,0,0,0,18,8,18,16,18,24,18,40,18,48,18,56,18,64,18,96,18,112,18,120,18,144,18,160,18,168,18,200,18,208,18,216,18,232,18,240,18,0,19,8,19,32,19,40,19,56,19,48,19,72,19,80,19,0,0,0,18,8,18,16,18,24,18,32,18,40,18,48,18,64,18,96,18,112,18,128,18,144,18,160,18,168,18,200,18,208,18,216,18,232,18,240,18,8,19,32,19,48,19,56,19,64,19,72,19,80,19,0,0,0,0,160,18,96,18,8,19,240,18,0,19,0,18,200,18,216,18,224,18,16,18,32,19,40,19,232,18,168,18,184,18,8,18,24,18,144,18,152,18,32,18,208,18,72,19,56,19,64,18,80,18,40,18,48,18,56,18,112,18,120,18,128,18,64,19,48,19,80,19,0,0,0,0,160,18,96,18,8,19,240,18,0,19,0,18,200,18,216,18,224,18,16,18,32,19,40,19,232,18,168,18,184,18,8,18,24,18,144,18,152,18,208,18,72,19,56,19,64,18,80,18,40,18,48,18,56,18,112,18,120,18,48,19,80,19,0,0,160,18,96,18,8,19,240,18,0,19,0,18,200,18,216,18,224,18,16,18,32,19,40,19,232,18,168,18,184,18,8,18,24,18,144,18,152,18,32,18,208,18,72,19,56,19,64,18,40,18,48,18,56,18,112,18,120,18,128,18,64,19,48,19,80,19,0,0,0,0,0,0,160,18,96,18,8,19,240,18,0,18,200,18,216,18,16,18,32,19,232,18,168,18,8,18,24,18,144,18,32,18,208,18,72,19,56,19,64,18,40,18,48,18,112,18,128,18,64,19,48,19,80,19,0,0,0,0,48,49,50,51,52,53,54,55,56,57,65,66,67,68,69,70,48,49,50,51,52,53,54,55,56,57,97,98,99,100,101,102,80,91,17,78,197,91,111,83,176,143,243,93,72,83,42,103,51,117,73,145,12,98,165,78,49,49,52,49,55,49,57,49,65,49,66,49,69,49,71,49,72,49,74,49,75,49,76,49,77,49,78,49,0,0,0,0,50,117,89,78,25,78,1,78,10,98,241,93,154,94,155,143,236,88,120,118,0,0,0,0,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,198,216,197,0,0,0,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,230,248,229,0,0,0,164,48,237,48,207,48,203,48,219,48,216,48,200,48,193,48,234,48,204,48,235,48,242,48,239,48,171,48,232,48,191,48,236,48,189,48,196,48,205,48,202,48,233,48,224,48,166,48,240,48,206,48,170,48,175,48,228,48,222,48,177,48,213,48,179,48,168,48,198,48,162,48,181,48,173,48,230,48,225,48,223,48,183,48,241,48,210,48,226,48,187,48,185,48,0,0,68,48,141,48,111,48,107,48,123,48,120,48,104,48,97,48,138,48,108,48,139,48,146,48,143,48,75,48,136,48,95,48,140,48,93,48,100,48,109,48,106,48,137,48,128,48,70,48,144,48,110,48,74,48,79,48,132,48,126,48,81,48,117,48,83,48,72,48,102,48,66,48,85,48,77,48,134,48,129,48,127,48,87,48,145,48,114,48,130,48,91,48,89,48,0,0,96,6,97,6,98,6,99,6,100,6,101,6,102,6,103,6,104,6,105,6,0,0,0,0,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,0,0,0,0,0,0,145,3,146,3,147,3,148,3,149,3,150,3,151,3,152,3,153,3,154,3,155,3,156,3,157,3,158,3,159,3,160,3,161,3,163,3,164,3,165,3,166,3,167,3,168,3,169,3,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,0,0,0,0,0,0,177,3,178,3,179,3,180,3,181,3,182,3,183,3,184,3,185,3,186,3,187,3,188,3,189,3,190,3,191,3,192,3,193,3,195,3,196,3,197,3,198,3,199,3,200,3,201,3,102,9,103,9,104,9,105,9,106,9,107,9,108,9,109,9,110,9,111,9,0,0,0,0,16,24,17,24,18,24,19,24,20,24,21,24,22,24,23,24,24,24,25,24,0,0,0,0,102,13,103,13,104,13,105,13,106,13,107,13,108,13,109,13,110,13,111,13,0,0,0,0,162,48,164,48,166,48,168,48,170,48,171,48,173,48,175,48,177,48,179,48,181,48,183,48,185,48,187,48,189,48,191,48,193,48,196,48,198,48,200,48,202,48,203,48,204,48,205,48,206,48,207,48,210,48,213,48,216,48,219,48,222,48,223,48,224,48,225,48,226,48,228,48,230,48,232,48,233,48,234,48,235,48,236,48,237,48,239,48,240,48,241,48,242,48,243,48,66,48,68,48,70,48,72,48,74,48,75,48,77,48,79,48,81,48,83,48,85,48,87,48,89,48,91,48,93,48,95,48,97,48,100,48,102,48,104,48,106,48,107,48,108,48,109,48,110,48,111,48,114,48,117,48,120,48,123,48,126,48,127,48,128,48,129,48,130,48,132,48,134,48,136,48,137,48,138,48,139,48,140,48,141,48,143,48,144,48,145,48,146,48,147,48,102,10,103,10,104,10,105,10,106,10,107,10,108,10,109,10,110,10,111,10,0,0,0,0,230,10,231,10,232,10,233,10,234,10,235,10,236,10,237,10,238,10,239,10,0,0,0,0,42,0,81,32,32,32,33,32,32,15,33,15,34,15,35,15,36,15,37,15,38,15,39,15,40,15,41,15,0,0,0,0,64,16,65,16,66,16,67,16,68,16,69,16,70,16,71,16,72,16,73,16,0,0,0,0,230,12,231,12,232,12,233,12,234,12,235,12,236,12,237,12,238,12,239,12,0,0,0,0,230,9,231,9,232,9,233,9,234,9,235,9,236,9,237,9,238,9,239,9,0,0,0,0,102,12,103,12,104,12,105,12,106,12,107,12,108,12,109,12,110,12,111,12,0,0,0,0,0,172,152,176,228,178,124,183,200,185,20,188,172,192,68,197,144,199,40,204,116,206,192,208,12,211,88,213,0,0,0,0,48,49,0,0,0,0,0,0,102,11,103,11,104,11,105,11,106,11,107,11,108,11,109,11,110,11,111,11,0,0,0,0,48,49,50,51,52,53,54,55,224,23,225,23,226,23,227,23,228,23,229,23,230,23,231,23,232,23,233,23,0,0,0,0,240,6,241,6,242,6,243,6,244,6,245,6,246,6,247,6,248,6,249,6,0,0,0,0,80,14,81,14,82,14,83,14,84,14,85,14,86,14,87,14,88,14,89,14,0,0,0,0,208,14,209,14,210,14,211,14,212,14,213,14,214,14,215,14,216,14,217,14,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
var Math_min = Math.min;
function invoke_ii(index,a1) {
  try {
    return Module["dynCall_ii"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viiiii(index,a1,a2,a3,a4,a5) {
  try {
    Module["dynCall_viiiii"](index,a1,a2,a3,a4,a5);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_vi(index,a1) {
  try {
    Module["dynCall_vi"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_vii(index,a1,a2) {
  try {
    Module["dynCall_vii"](index,a1,a2);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_iiiiiii(index,a1,a2,a3,a4,a5,a6) {
  try {
    return Module["dynCall_iiiiiii"](index,a1,a2,a3,a4,a5,a6);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viiif(index,a1,a2,a3,a4) {
  try {
    Module["dynCall_viiif"](index,a1,a2,a3,a4);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_iiiifi(index,a1,a2,a3,a4,a5) {
  try {
    return Module["dynCall_iiiifi"](index,a1,a2,a3,a4,a5);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_iiii(index,a1,a2,a3) {
  try {
    return Module["dynCall_iiii"](index,a1,a2,a3);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viii(index,a1,a2,a3) {
  try {
    Module["dynCall_viii"](index,a1,a2,a3);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_v(index) {
  try {
    Module["dynCall_v"](index);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viiiiii(index,a1,a2,a3,a4,a5,a6) {
  try {
    Module["dynCall_viiiiii"](index,a1,a2,a3,a4,a5,a6);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_iii(index,a1,a2) {
  try {
    return Module["dynCall_iii"](index,a1,a2);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_iiiiii(index,a1,a2,a3,a4,a5) {
  try {
    return Module["dynCall_iiiiii"](index,a1,a2,a3,a4,a5);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viiii(index,a1,a2,a3,a4) {
  try {
    Module["dynCall_viiii"](index,a1,a2,a3,a4);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function asmPrintInt(x, y) {
  Module.print('int ' + x + ',' + y);// + ' ' + new Error().stack);
}
function asmPrintFloat(x, y) {
  Module.print('float ' + x + ',' + y);// + ' ' + new Error().stack);
}
// EMSCRIPTEN_START_ASM
var asm = (function(global, env, buffer) {
  'almost asm';
  var HEAP8 = new global.Int8Array(buffer);
  var HEAP16 = new global.Int16Array(buffer);
  var HEAP32 = new global.Int32Array(buffer);
  var HEAPU8 = new global.Uint8Array(buffer);
  var HEAPU16 = new global.Uint16Array(buffer);
  var HEAPU32 = new global.Uint32Array(buffer);
  var HEAPF32 = new global.Float32Array(buffer);
  var HEAPF64 = new global.Float64Array(buffer);
  var STACKTOP=env.STACKTOP|0;
  var STACK_MAX=env.STACK_MAX|0;
  var tempDoublePtr=env.tempDoublePtr|0;
  var ABORT=env.ABORT|0;
  var __ZN7WebCore7TextRun21s_allowsRoundingHacksE=env.__ZN7WebCore7TextRun21s_allowsRoundingHacksE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore16RenderListMarkerE=(H_BASE+2168)|0;
  var __THREW__ = 0;
  var threwValue = 0;
  var setjmpId = 0;
  var undef = 0;
  var tempInt = 0, tempBigInt = 0, tempBigIntP = 0, tempBigIntS = 0, tempBigIntR = 0.0, tempBigIntI = 0, tempBigIntD = 0, tempValue = 0, tempDouble = 0.0;
  var tempRet0 = 0;
  var tempRet1 = 0;
  var tempRet2 = 0;
  var tempRet3 = 0;
  var tempRet4 = 0;
  var tempRet5 = 0;
  var tempRet6 = 0;
  var tempRet7 = 0;
  var tempRet8 = 0;
  var tempRet9 = 0;
  var Math_floor=global.Math.floor;
  var Math_abs=global.Math.abs;
  var Math_sqrt=global.Math.sqrt;
  var Math_pow=global.Math.pow;
  var Math_cos=global.Math.cos;
  var Math_sin=global.Math.sin;
  var Math_tan=global.Math.tan;
  var Math_acos=global.Math.acos;
  var Math_asin=global.Math.asin;
  var Math_atan=global.Math.atan;
  var Math_atan2=global.Math.atan2;
  var Math_exp=global.Math.exp;
  var Math_log=global.Math.log;
  var Math_ceil=global.Math.ceil;
  var Math_imul=global.Math.imul;
  var abort=env.abort;
  var assert=env.assert;
  var asmPrintInt=env.asmPrintInt;
  var asmPrintFloat=env.asmPrintFloat;
  var Math_min=env.min;
  var invoke_ii=env.invoke_ii;
  var invoke_viiiii=env.invoke_viiiii;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_iiiiiii=env.invoke_iiiiiii;
  var invoke_viiif=env.invoke_viiif;
  var invoke_iiiifi=env.invoke_iiiifi;
  var invoke_iiii=env.invoke_iiii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_viiiiii=env.invoke_viiiiii;
  var invoke_iii=env.invoke_iii;
  var invoke_iiiiii=env.invoke_iiiiii;
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _round=env._round;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore16RenderListMarker5paintERNS_9PaintInfoERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i6 | 0;
 i8 = i6;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i11 = i10 | 0;
 i12 = i10;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i15 = i14;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i18 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i19 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i20 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i21 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i22 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i23 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i24 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i25 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i26 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i27 = STACKTOP;
 STACKTOP = STACKTOP + 36 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i28 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i29 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i30 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i31 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i32 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i33 = STACKTOP;
 STACKTOP = STACKTOP + 36 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i34 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i35 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i36 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i37 = STACKTOP;
 STACKTOP = STACKTOP + 36 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i38 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i39 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i40 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 if ((HEAP32[i2 + 20 >> 2] | 0) != 4) {
  STACKTOP = i4;
  return;
 }
 i41 = i1 | 0;
 i42 = i1 + 36 | 0;
 if ((HEAP32[(HEAP32[i42 >> 2] | 0) + 40 >> 2] & 6144 | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 i43 = i1 + 44 | 0;
 i44 = (HEAP32[i43 >> 2] | 0) + (HEAP32[i3 >> 2] | 0) | 0;
 i45 = (HEAP32[i43 + 4 >> 2] | 0) + (HEAP32[i3 + 4 >> 2] | 0) | 0;
 i3 = HEAP32[i1 + 88 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i43 = i1 + 52 | 0;
  i46 = HEAP32[i43 >> 2] | 0;
  i47 = HEAP32[i43 + 4 >> 2] | 0;
  HEAP32[i7 >> 2] = 0;
  HEAP32[i7 + 4 >> 2] = 0;
  i7 = i6 + 8 | 0;
  HEAP32[i7 >> 2] = i46;
  HEAP32[i7 + 4 >> 2] = i47;
  i48 = 0;
  i49 = 0;
  i50 = i46;
  i51 = i47;
  i52 = i6;
  i53 = i8 + 4 | 0;
  i54 = i7;
  i55 = i8 + 12 | 0;
 } else {
  i7 = i6;
  i47 = i3 + 20 | 0;
  HEAP32[i7 >> 2] = HEAP32[i47 >> 2];
  HEAP32[i7 + 4 >> 2] = HEAP32[i47 + 4 >> 2];
  HEAP32[i7 + 8 >> 2] = HEAP32[i47 + 8 >> 2];
  HEAP32[i7 + 12 >> 2] = HEAP32[i47 + 12 >> 2];
  i47 = i6;
  i7 = i8 + 4 | 0;
  i3 = i6 + 8 | 0;
  i6 = i8 + 12 | 0;
  i48 = HEAP32[i47 >> 2] | 0;
  i49 = HEAP32[i7 >> 2] | 0;
  i50 = HEAP32[i3 >> 2] | 0;
  i51 = HEAP32[i6 >> 2] | 0;
  i52 = i47;
  i53 = i7;
  i54 = i3;
  i55 = i6;
 }
 i6 = i48 + i44 | 0;
 HEAP32[i52 >> 2] = i6;
 i48 = i49 + i45 | 0;
 HEAP32[i53 >> 2] = i48;
 i49 = i1 | 0;
 i3 = __ZNK7WebCore12RenderObject18maximalOutlineSizeENS_10PaintPhaseE(i49, 4) | 0;
 HEAP32[i52 >> 2] = i6 - i3;
 i6 = i3 << 1;
 HEAP32[i54 >> 2] = i50 + i6;
 HEAP32[i53 >> 2] = i48 - i3;
 HEAP32[i55 >> 2] = i51 + i6;
 __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i9, i8);
 if (!(__ZNK7WebCore7IntRect10intersectsERKS0_(i2 + 4 | 0, i9) | 0)) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore16RenderListMarker21getRelativeMarkerRectEv(i12, i1);
 i9 = i10;
 HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + i44;
 i8 = i12 + 4 | 0;
 HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + i45;
 i6 = HEAP32[i2 >> 2] | 0;
 i2 = i1 + 96 | 0;
 i51 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i51 | 0) != 0) {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i51 >> 2] | 0) + 20 >> 2] & 511](i51) | 0) {
    break;
   }
   i55 = HEAP32[i2 >> 2] | 0;
   i3 = HEAP32[(HEAP32[i55 >> 2] | 0) + 56 >> 2] | 0;
   i48 = i10 + 8 | 0;
   i53 = HEAP32[i48 + 4 >> 2] | 0;
   HEAP32[i14 >> 2] = HEAP32[i48 >> 2];
   HEAP32[i14 + 4 >> 2] = i53;
   FUNCTION_TABLE_viiii[i3 & 31](i13, i55, i41, i15);
   i55 = i13 | 0;
   i3 = HEAP32[i55 >> 2] | 0;
   i53 = (HEAP32[(HEAP32[(HEAP32[i42 >> 2] | 0) + 24 >> 2] | 0) + 88 >> 2] | 0) >>> 17 & 1;
   HEAP32[i16 >> 2] = 0;
   HEAP32[i16 + 4 >> 2] = 1;
   __ZN7WebCore15GraphicsContext9drawImageEPNS_5ImageENS_10ColorSpaceERKNS_7IntRectENS_17CompositeOperatorENS_27ImageOrientationDescriptionEb(i6, i3, i53, i12, 2, i16, 0);
   i53 = HEAP32[i55 >> 2] | 0;
   do {
    if ((i53 | 0) != 0) {
     i55 = i53 + 4 | 0;
     i3 = i55 | 0;
     i48 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
     if ((i48 | 0) != 0) {
      HEAP32[i3 >> 2] = i48;
      break;
     }
     i48 = i55 - 4 | 0;
     if ((i48 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i48 >> 2] | 0) + 4 >> 2] & 31](i48);
    }
   } while (0);
   if ((HEAP32[i1 + 20 >> 2] & 234881024 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   __ZN7WebCore16RenderListMarker18localSelectionRectEv(i17, i1);
   i53 = i17 | 0;
   HEAP32[i53 >> 2] = (HEAP32[i53 >> 2] | 0) + i44;
   i53 = i17 + 4 | 0;
   HEAP32[i53 >> 2] = (HEAP32[i53 >> 2] | 0) + i45;
   __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i19, i17);
   __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i18, i19);
   __ZNK7WebCore12RenderObject24selectionBackgroundColorEv(i20, i49);
   __ZN7WebCore15GraphicsContext8fillRectERKNS_9FloatRectERKNS_5ColorENS_10ColorSpaceE(i6, i18, i20, (HEAP32[(HEAP32[(HEAP32[i42 >> 2] | 0) + 24 >> 2] | 0) + 88 >> 2] | 0) >>> 17 & 1);
   STACKTOP = i4;
   return;
  }
 } while (0);
 if ((HEAP32[i1 + 20 >> 2] & 234881024 | 0) != 0) {
  __ZN7WebCore16RenderListMarker18localSelectionRectEv(i21, i1);
  i20 = i21 | 0;
  HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + i44;
  i20 = i21 + 4 | 0;
  HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + i45;
  __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i23, i21);
  __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i22, i23);
  __ZNK7WebCore12RenderObject24selectionBackgroundColorEv(i24, i49);
  __ZN7WebCore15GraphicsContext8fillRectERKNS_9FloatRectERKNS_5ColorENS_10ColorSpaceE(i6, i22, i24, (HEAP32[(HEAP32[(HEAP32[i42 >> 2] | 0) + 24 >> 2] | 0) + 88 >> 2] | 0) >>> 17 & 1);
 }
 __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i25, HEAP32[i42 >> 2] | 0, 1);
 __ZN7WebCore15GraphicsContext14setStrokeColorERKNS_5ColorENS_10ColorSpaceE(i6, i25, (HEAP32[(HEAP32[(HEAP32[i42 >> 2] | 0) + 24 >> 2] | 0) + 88 >> 2] | 0) >>> 17 & 1);
 __ZN7WebCore15GraphicsContext14setStrokeStyleENS_11StrokeStyleE(i6, 1);
 __ZN7WebCore15GraphicsContext18setStrokeThicknessEf(i6, +1);
 __ZN7WebCore15GraphicsContext12setFillColorERKNS_5ColorENS_10ColorSpaceE(i6, i25, (HEAP32[(HEAP32[(HEAP32[i42 >> 2] | 0) + 24 >> 2] | 0) + 88 >> 2] | 0) >>> 17 & 1);
 i25 = HEAP32[i42 >> 2] | 0;
 i24 = (HEAP32[i25 + 40 >> 2] | 0) >>> 3 & 127;
 if ((i24 | 0) == 0) {
  __ZN7WebCore15GraphicsContext11drawEllipseERKNS_7IntRectE(i6, i12);
  STACKTOP = i4;
  return;
 } else if ((i24 | 0) == 1) {
  HEAP32[i26 >> 2] = 0;
  HEAP8[i26 + 4 | 0] = 1;
  __ZN7WebCore15GraphicsContext12setFillColorERKNS_5ColorENS_10ColorSpaceE(i6, i26, 0);
  __ZN7WebCore15GraphicsContext11drawEllipseERKNS_7IntRectE(i6, i12);
  STACKTOP = i4;
  return;
 } else if ((i24 | 0) == 2) {
  __ZN7WebCore15GraphicsContext8drawRectERKNS_7IntRectE(i6, i12);
  STACKTOP = i4;
  return;
 } else if ((i24 | 0) == 80) {
  STACKTOP = i4;
  return;
 } else {
  i26 = i1 + 92 | 0;
  i22 = i26 | 0;
  i23 = HEAP32[i22 >> 2] | 0;
  if ((i23 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  if ((HEAP32[i23 + 4 >> 2] | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i23 = __ZNK7WebCore11RenderStyle4fontEv(i25) | 0;
  __ZN7WebCore11RenderBlock16constructTextRunEPNS_12RenderObjectERKNS_4FontERKN3WTF6StringERKNS_11RenderStyleEjj(i27, i49, i23, i26, HEAP32[i42 >> 2] | 0, 1, 0);
  i26 = HEAP32[i42 >> 2] | 0;
  i25 = i26 + 44 | 0;
  i21 = (HEAP32[i25 >> 2] | 0) >>> 13 & 3;
  if ((i21 | 0) == 3 | (i21 | 0) == 0) {
   i56 = 0;
   i57 = i26;
  } else {
   i26 = (HEAP32[i9 >> 2] | 0) - i44 | 0;
   HEAP32[i9 >> 2] = i26;
   i21 = (HEAP32[i8 >> 2] | 0) - i45 | 0;
   i20 = i12 + 12 | 0;
   i12 = i10 + 8 | 0;
   i10 = HEAP32[i20 >> 2] | 0;
   i18 = HEAP32[i12 >> 2] | 0;
   HEAP32[i11 >> 2] = i21;
   HEAP32[i11 + 4 >> 2] = i26;
   HEAP32[i12 >> 2] = i10;
   HEAP32[i12 + 4 >> 2] = i18;
   i18 = (HEAP32[i25 >> 2] | 0) >>> 13 & 3;
   if ((i18 | 0) == 3 | (i18 | 0) == 0) {
    i58 = i1 + 56 | 0;
   } else {
    i58 = i1 + 52 | 0;
   }
   i18 = i45 - (HEAP32[i58 >> 2] | 0) | 0;
   HEAP32[i9 >> 2] = i21 + i44;
   HEAP32[i8 >> 2] = i18 + i26;
   __ZN7WebCore15GraphicsContext4saveEv(i6);
   __ZN7WebCore15GraphicsContext9translateEff(i6, +(HEAP32[i9 >> 2] | 0), +((HEAP32[i20 >> 2] | 0) + (HEAP32[i8 >> 2] | 0) | 0));
   __ZN7WebCore15GraphicsContext6rotateEf(i6, 1.5707963705062866);
   __ZN7WebCore15GraphicsContext9translateEff(i6, +(-(HEAP32[i9 >> 2] | 0) | 0), +(-((HEAP32[i20 >> 2] | 0) + (HEAP32[i8 >> 2] | 0) | 0) | 0));
   i56 = 1;
   i57 = HEAP32[i42 >> 2] | 0;
  }
  i20 = HEAP32[i9 >> 2] | 0;
  i9 = HEAP32[i8 >> 2] | 0;
  i8 = (_round(+(+HEAPF32[(__ZNK7WebCore11RenderStyle11fontMetricsEv(i57) | 0) + 4 >> 2])) | 0) + i9 | 0;
  i9 = i28 | 0;
  HEAP32[i9 >> 2] = i20;
  i20 = i28 + 4 | 0;
  HEAP32[i20 >> 2] = i8;
  do {
   if ((i24 - 68 | 0) >>> 0 < 2 >>> 0) {
    __ZN7WebCore10FloatPointC1ERKNS_8IntPointE(i29, i28);
    __ZN7WebCore15GraphicsContext8drawTextERKNS_4FontERKNS_7TextRunERKNS_10FloatPointEii(i6, i23, i27, i29, 0, -1);
   } else {
    i8 = HEAP32[i22 >> 2] | 0;
    do {
     if ((i8 | 0) == 0) {
      i59 = 0;
     } else {
      if ((HEAP32[i8 + 4 >> 2] | 0) == 0) {
       i59 = 0;
       break;
      }
      i57 = i8 + 8 | 0;
      if ((HEAP32[i8 + 16 >> 2] & 32 | 0) == 0) {
       i59 = HEAP16[HEAP32[i57 >> 2] >> 1] | 0;
       break;
      } else {
       i59 = HEAPU8[HEAP32[i57 >> 2] | 0] | 0;
       break;
      }
     }
    } while (0);
    i8 = (_u_charDirection(i59 & 65535) | 0) == 1;
    i57 = i30 | 0;
    HEAP32[i57 >> 2] = 0;
    i26 = i30 + 4 | 0;
    HEAP32[i26 >> 2] = 0;
    i18 = i30 + 8 | 0;
    HEAP32[i18 >> 2] = 0;
    i44 = i30 + 12 | 0;
    HEAP8[i44] = 1;
    i21 = i30 + 16 | 0;
    HEAP32[i21 >> 2] = 0;
    i58 = i30 + 20 | 0;
    HEAP32[i58 >> 2] = 0;
    if (i8) {
     i8 = HEAP32[i22 >> 2] | 0;
     do {
      if ((i8 | 0) == 0) {
       __ZN3WTF13StringBuilder15reserveCapacityEj(i30, 0);
       i60 = 0;
      } else {
       i45 = HEAP32[i8 + 4 >> 2] | 0;
       __ZN3WTF13StringBuilder15reserveCapacityEj(i30, i45);
       if ((i45 | 0) <= 0) {
        i60 = i45;
        break;
       }
       i25 = i30 + 20 | 0;
       i12 = i45;
       while (1) {
        i10 = i12 - 1 | 0;
        i11 = HEAP32[i22 >> 2] | 0;
        do {
         if ((i11 | 0) == 0) {
          i61 = 0;
         } else {
          if ((HEAP32[i11 + 4 >> 2] | 0) >>> 0 <= i10 >>> 0) {
           i61 = 0;
           break;
          }
          i19 = i11 + 8 | 0;
          if ((HEAP32[i11 + 16 >> 2] & 32 | 0) == 0) {
           i61 = HEAP16[(HEAP32[i19 >> 2] | 0) + (i10 << 1) >> 1] | 0;
           break;
          } else {
           i61 = HEAPU8[(HEAP32[i19 >> 2] | 0) + i10 | 0] | 0;
           break;
          }
         }
        } while (0);
        HEAP16[i5 >> 1] = i61;
        i11 = HEAP32[i18 >> 2] | 0;
        do {
         if ((i11 | 0) == 0) {
          i62 = 54;
         } else {
          i19 = HEAP32[i57 >> 2] | 0;
          if (i19 >>> 0 >= (HEAP32[i11 + 4 >> 2] | 0) >>> 0) {
           i62 = 54;
           break;
          }
          if ((HEAP32[i26 >> 2] | 0) != 0) {
           i62 = 54;
           break;
          }
          if ((HEAP8[i44] & 1) == 0) {
           HEAP32[i57 >> 2] = i19 + 1;
           HEAP16[(HEAP32[i25 >> 2] | 0) + (i19 << 1) >> 1] = i61;
           break;
          }
          if ((i61 & 65535) >>> 0 > 255 >>> 0) {
           i62 = 54;
           break;
          }
          HEAP32[i57 >> 2] = i19 + 1;
          HEAP8[(HEAP32[i58 >> 2] | 0) + i19 | 0] = i61;
         }
        } while (0);
        if ((i62 | 0) == 54) {
         i62 = 0;
         __ZN3WTF13StringBuilder6appendEPKtj(i30, i5, 1);
        }
        if ((i10 | 0) > 0) {
         i12 = i10;
        } else {
         i60 = i45;
         break;
        }
       }
      }
     } while (0);
     i58 = HEAP32[i57 >> 2] | 0;
     do {
      if ((i58 | 0) == 0) {
       i63 = 0;
      } else {
       i44 = HEAP32[i26 >> 2] | 0;
       if ((i44 | 0) != 0) {
        if ((HEAP32[i44 + 16 >> 2] & 32 | 0) == 0) {
         i63 = HEAP32[i44 + 8 >> 2] | 0;
         break;
        } else {
         i63 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i44) | 0;
         break;
        }
       }
       i44 = HEAP32[i18 >> 2] | 0;
       do {
        if ((HEAP32[i44 + 16 >> 2] & 64 | 0) == 0) {
         i64 = i58;
         i65 = i44;
        } else {
         i8 = HEAP32[i21 >> 2] | 0;
         if (i8 >>> 0 >= i58 >>> 0) {
          i64 = i58;
          i65 = i44;
          break;
         }
         __ZNK3WTF10StringImpl19upconvertCharactersEjj(i44, i8, i58);
         i64 = HEAP32[i57 >> 2] | 0;
         i65 = HEAP32[i18 >> 2] | 0;
        }
       } while (0);
       HEAP32[i21 >> 2] = i64;
       if ((HEAP32[i65 + 16 >> 2] & 32 | 0) == 0) {
        i63 = HEAP32[i65 + 8 >> 2] | 0;
        break;
       } else {
        i63 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i65) | 0;
        break;
       }
      }
     } while (0);
     HEAP32[i27 >> 2] = i63;
     HEAP32[i27 + 8 >> 2] = i60;
     i21 = i27 + 24 | 0;
     HEAP32[i21 >> 2] = HEAP32[i21 >> 2] & -5;
    }
    i21 = HEAP32[i1 + 100 >> 2] | 0;
    if ((HEAP8[i21 + 128 | 0] & 2) == 0) {
     __ZNK7WebCore14RenderListItem14updateValueNowEv(i21);
    }
    i57 = HEAP32[i21 + 124 >> 2] | 0;
    switch (i24 | 0) {
    case 71:
     {
      i66 = (i57 - 1 | 0) >>> 0 > 99999998 >>> 0 ? 3 : 71;
      break;
     }
    case 75:
     {
      i66 = (i57 >> 31 & -72) + 75 | 0;
      break;
     }
    case 74:
     {
      i66 = (i57 - 1 | 0) >>> 0 > 19998 >>> 0 ? 3 : 74;
      break;
     }
    case 70:
     {
      i66 = i57 >>> 0 > 999999 >>> 0 ? 3 : 70;
      break;
     }
    case 27:
    case 28:
     {
      i66 = (i57 - 1 | 0) >>> 0 > 3998 >>> 0 ? 3 : i24;
      break;
     }
    case 67:
    case 33:
    case 66:
    case 73:
    case 32:
    case 64:
    case 62:
    case 60:
    case 58:
    case 56:
    case 54:
    case 52:
    case 50:
    case 49:
    case 31:
    case 29:
    case 72:
    case 30:
    case 79:
    case 77:
    case 78:
    case 76:
    case 47:
    case 48:
    case 69:
    case 57:
    case 63:
    case 59:
    case 34:
    case 37:
    case 39:
    case 68:
    case 41:
    case 42:
    case 43:
    case 45:
    case 40:
    case 46:
    case 61:
    case 65:
    case 36:
    case 35:
    case 38:
    case 44:
    case 51:
    case 53:
    case 55:
     {
      i66 = (i57 | 0) < 1 ? 3 : i24;
      break;
     }
    default:
     {
      i66 = i24;
     }
    }
    switch (i66 | 0) {
    case 34:
    case 37:
    case 39:
    case 43:
    case 45:
    case 40:
    case 46:
    case 61:
    case 65:
    case 36:
    case 35:
    case 38:
    case 44:
    case 51:
    case 53:
    case 55:
    case 59:
    case 63:
    case 57:
    case 50:
    case 52:
    case 54:
    case 56:
    case 58:
    case 60:
    case 62:
    case 64:
     {
      i67 = 4966;
      break;
     }
    case 71:
    case 5:
    case 7:
    case 6:
    case 8:
    case 75:
    case 41:
    case 42:
    case 4:
    case 3:
    case 10:
    case 74:
    case 11:
    case 12:
    case 48:
    case 47:
    case 70:
    case 76:
    case 78:
    case 13:
    case 77:
    case 79:
    case 9:
    case 15:
    case 30:
    case 72:
    case 29:
    case 14:
    case 31:
    case 49:
    case 27:
    case 16:
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
    case 23:
    case 25:
    case 24:
    case 32:
    case 73:
    case 66:
    case 26:
    case 33:
    case 67:
    case 28:
    case 22:
     {
      i67 = 46;
      break;
     }
    case 68:
    case 1:
    case 0:
    case 69:
    case 80:
    case 2:
     {
      i67 = 32;
      break;
     }
    default:
     {
      i67 = 46;
     }
    }
    i57 = HEAP32[i42 >> 2] | 0;
    do {
     if ((HEAP32[i57 + 40 >> 2] & 1073741824 | 0) == 0) {
      i21 = i36 | 0;
      HEAP16[i21 >> 1] = 32;
      HEAP16[i36 + 2 >> 1] = i67;
      __ZN7WebCore11RenderBlock16constructTextRunEPNS_12RenderObjectERKNS_4FontEPKtiRKNS_11RenderStyleEj(i37, i49, i23, i21, 2, i57, 1);
      i21 = ~~+__ZNK7WebCore4Font5widthERKNS_7TextRunEPN3WTF7HashSetIPKNS_14SimpleFontDataENS4_7PtrHashIS8_EENS4_10HashTraitsIS8_EEEEPNS_13GlyphOverflowE(i23, i37, 0, 0);
      __ZN7WebCore10FloatPointC1ERKNS_8IntPointE(i38, i28);
      __ZN7WebCore15GraphicsContext8drawTextERKNS_4FontERKNS_7TextRunERKNS_10FloatPointEii(i6, i23, i37, i38, 0, -1);
      i58 = HEAP32[i20 >> 2] | 0;
      HEAP32[i40 >> 2] = (HEAP32[i9 >> 2] | 0) + i21;
      HEAP32[i40 + 4 >> 2] = i58;
      __ZN7WebCore10FloatPointC1ERKNS_8IntPointE(i39, i40);
      __ZN7WebCore15GraphicsContext8drawTextERKNS_4FontERKNS_7TextRunERKNS_10FloatPointEii(i6, i23, i27, i39, 0, -1);
      i58 = HEAP32[i37 + 32 >> 2] | 0;
      if ((i58 | 0) == 0) {
       break;
      }
      i21 = i58 + 4 | 0;
      i58 = i21 | 0;
      i44 = (HEAP32[i58 >> 2] | 0) - 1 | 0;
      if ((i44 | 0) != 0) {
       HEAP32[i58 >> 2] = i44;
       break;
      }
      i44 = i21 - 4 | 0;
      if ((i44 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i44 >> 2] | 0) + 4 >> 2] & 31](i44);
     } else {
      i44 = ~~+__ZNK7WebCore4Font5widthERKNS_7TextRunEPN3WTF7HashSetIPKNS_14SimpleFontDataENS4_7PtrHashIS8_EENS4_10HashTraitsIS8_EEEEPNS_13GlyphOverflowE(i23, i27, 0, 0);
      __ZN7WebCore10FloatPointC1ERKNS_8IntPointE(i31, i28);
      __ZN7WebCore15GraphicsContext8drawTextERKNS_4FontERKNS_7TextRunERKNS_10FloatPointEii(i6, i23, i27, i31, 0, -1);
      i21 = i32 | 0;
      HEAP16[i21 >> 1] = i67;
      HEAP16[i32 + 2 >> 1] = 32;
      __ZN7WebCore11RenderBlock16constructTextRunEPNS_12RenderObjectERKNS_4FontEPKtiRKNS_11RenderStyleEj(i33, i49, i23, i21, 2, HEAP32[i42 >> 2] | 0, 1);
      i21 = HEAP32[i20 >> 2] | 0;
      HEAP32[i35 >> 2] = (HEAP32[i9 >> 2] | 0) + i44;
      HEAP32[i35 + 4 >> 2] = i21;
      __ZN7WebCore10FloatPointC1ERKNS_8IntPointE(i34, i35);
      __ZN7WebCore15GraphicsContext8drawTextERKNS_4FontERKNS_7TextRunERKNS_10FloatPointEii(i6, i23, i33, i34, 0, -1);
      i21 = HEAP32[i33 + 32 >> 2] | 0;
      if ((i21 | 0) == 0) {
       break;
      }
      i44 = i21 + 4 | 0;
      i21 = i44 | 0;
      i58 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
      if ((i58 | 0) != 0) {
       HEAP32[i21 >> 2] = i58;
       break;
      }
      i58 = i44 - 4 | 0;
      if ((i58 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i58 >> 2] | 0) + 4 >> 2] & 31](i58);
     }
    } while (0);
    i57 = HEAP32[i18 >> 2] | 0;
    do {
     if ((i57 | 0) != 0) {
      i58 = i57 | 0;
      i44 = (HEAP32[i58 >> 2] | 0) - 2 | 0;
      if ((i44 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i57);
       break;
      } else {
       HEAP32[i58 >> 2] = i44;
       break;
      }
     }
    } while (0);
    i57 = HEAP32[i26 >> 2] | 0;
    if ((i57 | 0) == 0) {
     break;
    }
    i18 = i57 | 0;
    i44 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
    if ((i44 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i57);
     break;
    } else {
     HEAP32[i18 >> 2] = i44;
     break;
    }
   }
  } while (0);
  if (i56 << 24 >> 24 != 0) {
   __ZN7WebCore15GraphicsContext7restoreEv(i6);
  }
  i6 = HEAP32[i27 + 32 >> 2] | 0;
  if ((i6 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i27 = i6 + 4 | 0;
  i6 = i27 | 0;
  i56 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
  if ((i56 | 0) != 0) {
   HEAP32[i6 >> 2] = i56;
   STACKTOP = i4;
   return;
  }
  i56 = i27 - 4 | 0;
  if ((i56 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i56 >> 2] | 0) + 4 >> 2] & 31](i56);
  STACKTOP = i4;
  return;
 }
}
function runPostSets() {
 HEAP32[H_BASE + 2176 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 2180 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 2184 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 2188 >> 2] = F_BASE_vii + 70;
 HEAP32[H_BASE + 2192 >> 2] = F_BASE_ii + 230;
 HEAP32[H_BASE + 2196 >> 2] = F_BASE_viii + 20;
 HEAP32[H_BASE + 2200 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 2204 >> 2] = F_BASE_ii + 70;
 HEAP32[H_BASE + 2208 >> 2] = F_BASE_ii + 96;
 HEAP32[H_BASE + 2212 >> 2] = F_BASE_ii + 28;
 HEAP32[H_BASE + 2216 >> 2] = F_BASE_ii + 254;
 HEAP32[H_BASE + 2220 >> 2] = F_BASE_ii + 34;
 HEAP32[H_BASE + 2224 >> 2] = F_BASE_ii + 84;
 HEAP32[H_BASE + 2228 >> 2] = F_BASE_ii + 144;
 HEAP32[H_BASE + 2232 >> 2] = F_BASE_ii + 160;
 HEAP32[H_BASE + 2236 >> 2] = F_BASE_ii + 242;
 HEAP32[H_BASE + 2240 >> 2] = F_BASE_ii + 62;
 HEAP32[H_BASE + 2244 >> 2] = F_BASE_ii + 72;
 HEAP32[H_BASE + 2248 >> 2] = F_BASE_ii + 42;
 HEAP32[H_BASE + 2252 >> 2] = F_BASE_ii + 204;
 HEAP32[H_BASE + 2256 >> 2] = F_BASE_ii + 112;
 HEAP32[H_BASE + 2260 >> 2] = F_BASE_ii + 40;
 HEAP32[H_BASE + 2264 >> 2] = F_BASE_ii + 198;
 HEAP32[H_BASE + 2268 >> 2] = F_BASE_ii + 180;
 HEAP32[H_BASE + 2272 >> 2] = F_BASE_ii + 74;
 HEAP32[H_BASE + 2276 >> 2] = F_BASE_ii + 172;
 HEAP32[H_BASE + 2280 >> 2] = F_BASE_ii + 64;
 HEAP32[H_BASE + 2284 >> 2] = F_BASE_ii + 94;
 HEAP32[H_BASE + 2288 >> 2] = F_BASE_ii + 118;
 HEAP32[H_BASE + 2292 >> 2] = F_BASE_ii + 134;
 HEAP32[H_BASE + 2296 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 2300 >> 2] = F_BASE_ii + 170;
 HEAP32[H_BASE + 2304 >> 2] = F_BASE_ii + 80;
 HEAP32[H_BASE + 2308 >> 2] = F_BASE_ii + 110;
 HEAP32[H_BASE + 2312 >> 2] = F_BASE_ii + 124;
 HEAP32[H_BASE + 2316 >> 2] = F_BASE_ii + 190;
 HEAP32[H_BASE + 2320 >> 2] = F_BASE_ii + 266;
 HEAP32[H_BASE + 2324 >> 2] = F_BASE_ii + 224;
 HEAP32[H_BASE + 2328 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 2332 >> 2] = F_BASE_ii + 114;
 HEAP32[H_BASE + 2336 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 2340 >> 2] = F_BASE_ii + 222;
 HEAP32[H_BASE + 2344 >> 2] = F_BASE_ii + 214;
 HEAP32[H_BASE + 2348 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 2352 >> 2] = F_BASE_ii + 126;
 HEAP32[H_BASE + 2356 >> 2] = F_BASE_ii + 150;
 HEAP32[H_BASE + 2360 >> 2] = F_BASE_ii + 264;
 HEAP32[H_BASE + 2364 >> 2] = F_BASE_ii + 166;
 HEAP32[H_BASE + 2368 >> 2] = F_BASE_ii + 76;
 HEAP32[H_BASE + 2372 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 2376 >> 2] = F_BASE_ii + 194;
 HEAP32[H_BASE + 2380 >> 2] = F_BASE_ii + 268;
 HEAP32[H_BASE + 2384 >> 2] = F_BASE_ii + 156;
 HEAP32[H_BASE + 2388 >> 2] = F_BASE_ii + 100;
 HEAP32[H_BASE + 2392 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 2396 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 2400 >> 2] = F_BASE_ii + 78;
 HEAP32[H_BASE + 2404 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 2408 >> 2] = F_BASE_ii + 132;
 HEAP32[H_BASE + 2412 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 2416 >> 2] = F_BASE_ii + 248;
 HEAP32[H_BASE + 2420 >> 2] = F_BASE_ii + 168;
 HEAP32[H_BASE + 2424 >> 2] = F_BASE_ii + 102;
 HEAP32[H_BASE + 2428 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 2432 >> 2] = F_BASE_ii + 82;
 HEAP32[H_BASE + 2436 >> 2] = F_BASE_ii + 208;
 HEAP32[H_BASE + 2440 >> 2] = F_BASE_ii + 104;
 HEAP32[H_BASE + 2444 >> 2] = F_BASE_ii + 250;
 HEAP32[H_BASE + 2448 >> 2] = F_BASE_ii + 66;
 HEAP32[H_BASE + 2452 >> 2] = F_BASE_ii + 258;
 HEAP32[H_BASE + 2456 >> 2] = F_BASE_ii + 108;
 HEAP32[H_BASE + 2460 >> 2] = F_BASE_ii + 136;
 HEAP32[H_BASE + 2464 >> 2] = F_BASE_ii + 238;
 HEAP32[H_BASE + 2468 >> 2] = F_BASE_ii + 220;
 HEAP32[H_BASE + 2472 >> 2] = F_BASE_ii + 184;
 HEAP32[H_BASE + 2476 >> 2] = F_BASE_ii + 128;
 HEAP32[H_BASE + 2480 >> 2] = F_BASE_ii + 60;
 HEAP32[H_BASE + 2484 >> 2] = F_BASE_ii + 218;
 HEAP32[H_BASE + 2488 >> 2] = F_BASE_ii + 234;
 HEAP32[H_BASE + 2492 >> 2] = F_BASE_ii + 88;
 HEAP32[H_BASE + 2496 >> 2] = F_BASE_ii + 46;
 HEAP32[H_BASE + 2500 >> 2] = F_BASE_ii + 38;
 HEAP32[H_BASE + 2504 >> 2] = F_BASE_ii + 52;
 HEAP32[H_BASE + 2508 >> 2] = F_BASE_ii + 146;
 HEAP32[H_BASE + 2512 >> 2] = F_BASE_ii + 92;
 HEAP32[H_BASE + 2516 >> 2] = F_BASE_ii + 246;
 HEAP32[H_BASE + 2520 >> 2] = F_BASE_ii + 58;
 HEAP32[H_BASE + 2524 >> 2] = F_BASE_ii + 174;
 HEAP32[H_BASE + 2528 >> 2] = F_BASE_ii + 120;
 HEAP32[H_BASE + 2532 >> 2] = F_BASE_ii + 158;
 HEAP32[H_BASE + 2536 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 2540 >> 2] = F_BASE_ii + 206;
 HEAP32[H_BASE + 2544 >> 2] = F_BASE_ii + 48;
 HEAP32[H_BASE + 2548 >> 2] = F_BASE_ii + 68;
 HEAP32[H_BASE + 2552 >> 2] = F_BASE_ii + 210;
 HEAP32[H_BASE + 2556 >> 2] = F_BASE_ii + 56;
 HEAP32[H_BASE + 2560 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 2564 >> 2] = F_BASE_ii + 162;
 HEAP32[H_BASE + 2568 >> 2] = F_BASE_ii + 178;
 HEAP32[H_BASE + 2572 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 2576 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 2580 >> 2] = F_BASE_ii + 232;
 HEAP32[H_BASE + 2584 >> 2] = F_BASE_vii + 64;
 HEAP32[H_BASE + 2588 >> 2] = F_BASE_vii + 56;
 HEAP32[H_BASE + 2592 >> 2] = F_BASE_vii + 54;
 HEAP32[H_BASE + 2596 >> 2] = F_BASE_vii + 38;
 HEAP32[H_BASE + 2600 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 2604 >> 2] = F_BASE_iiiiii + 2;
 HEAP32[H_BASE + 2608 >> 2] = F_BASE_ii + 270;
 HEAP32[H_BASE + 2612 >> 2] = F_BASE_vii + 84;
 HEAP32[H_BASE + 2616 >> 2] = F_BASE_ii + 130;
 HEAP32[H_BASE + 2620 >> 2] = F_BASE_ii + 272;
 HEAP32[H_BASE + 2624 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 2628 >> 2] = F_BASE_vii + 42;
 HEAP32[H_BASE + 2632 >> 2] = F_BASE_viii + 16;
 HEAP32[H_BASE + 2636 >> 2] = F_BASE_iiiiiii + 2;
 HEAP32[H_BASE + 2640 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 2644 >> 2] = F_BASE_viiiii + 8;
 HEAP32[H_BASE + 2648 >> 2] = F_BASE_viii + 46;
 HEAP32[H_BASE + 2652 >> 2] = F_BASE_viii + 14;
 HEAP32[H_BASE + 2656 >> 2] = F_BASE_vii + 28;
 HEAP32[H_BASE + 2660 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 2664 >> 2] = F_BASE_vii + 24;
 HEAP32[H_BASE + 2668 >> 2] = F_BASE_ii + 176;
 HEAP32[H_BASE + 2672 >> 2] = F_BASE_iiii + 10;
 HEAP32[H_BASE + 2676 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 2680 >> 2] = F_BASE_viiii + 14;
 HEAP32[H_BASE + 2684 >> 2] = F_BASE_viiii + 8;
 HEAP32[H_BASE + 2688 >> 2] = F_BASE_viiii + 12;
 HEAP32[H_BASE + 2692 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 2696 >> 2] = F_BASE_viii + 26;
 HEAP32[H_BASE + 2700 >> 2] = F_BASE_ii + 192;
 HEAP32[H_BASE + 2704 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 2708 >> 2] = F_BASE_viiii + 6;
 HEAP32[H_BASE + 2712 >> 2] = F_BASE_ii + 216;
 HEAP32[H_BASE + 2716 >> 2] = F_BASE_ii + 154;
 HEAP32[H_BASE + 2720 >> 2] = F_BASE_viiiii + 6;
 HEAP32[H_BASE + 2724 >> 2] = F_BASE_ii + 240;
 HEAP32[H_BASE + 2728 >> 2] = F_BASE_ii + 260;
 HEAP32[H_BASE + 2732 >> 2] = F_BASE_ii + 196;
 HEAP32[H_BASE + 2736 >> 2] = F_BASE_ii + 86;
 HEAP32[H_BASE + 2740 >> 2] = F_BASE_ii + 186;
 HEAP32[H_BASE + 2744 >> 2] = F_BASE_ii + 148;
 HEAP32[H_BASE + 2748 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 2752 >> 2] = F_BASE_iii + 12;
 HEAP32[H_BASE + 2756 >> 2] = F_BASE_iii + 10;
 HEAP32[H_BASE + 2760 >> 2] = F_BASE_viii + 32;
 HEAP32[H_BASE + 2764 >> 2] = F_BASE_viiiii + 4;
 HEAP32[H_BASE + 2768 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 2772 >> 2] = F_BASE_iiii + 6;
 HEAP32[H_BASE + 2776 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 2780 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 2784 >> 2] = F_BASE_ii + 54;
 HEAP32[H_BASE + 2788 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 2792 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 2796 >> 2] = F_BASE_ii + 90;
 HEAP32[H_BASE + 2800 >> 2] = F_BASE_iiii + 2;
 HEAP32[H_BASE + 2804 >> 2] = F_BASE_viii + 22;
 HEAP32[H_BASE + 2808 >> 2] = F_BASE_viii + 36;
 HEAP32[H_BASE + 2812 >> 2] = F_BASE_vii + 46;
 HEAP32[H_BASE + 2816 >> 2] = F_BASE_ii + 138;
 HEAP32[H_BASE + 2820 >> 2] = F_BASE_vii + 34;
 HEAP32[H_BASE + 2824 >> 2] = F_BASE_viii + 24;
 HEAP32[H_BASE + 2828 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 2832 >> 2] = F_BASE_viii + 28;
 HEAP32[H_BASE + 2836 >> 2] = F_BASE_viii + 48;
 HEAP32[H_BASE + 2840 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 2844 >> 2] = F_BASE_ii + 202;
 HEAP32[H_BASE + 2848 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 2852 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 2856 >> 2] = F_BASE_vii + 52;
 HEAP32[H_BASE + 2860 >> 2] = F_BASE_vii + 68;
 HEAP32[H_BASE + 2864 >> 2] = F_BASE_vii + 94;
 HEAP32[H_BASE + 2868 >> 2] = F_BASE_ii + 182;
 HEAP32[H_BASE + 2872 >> 2] = F_BASE_ii + 106;
 HEAP32[H_BASE + 2876 >> 2] = F_BASE_vii + 88;
 HEAP32[H_BASE + 2880 >> 2] = F_BASE_vii + 86;
 HEAP32[H_BASE + 2884 >> 2] = F_BASE_vii + 82;
 HEAP32[H_BASE + 2888 >> 2] = F_BASE_vii + 32;
 HEAP32[H_BASE + 2892 >> 2] = F_BASE_vii + 72;
 HEAP32[H_BASE + 2896 >> 2] = F_BASE_vii + 40;
 HEAP32[H_BASE + 2900 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 2904 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 2908 >> 2] = F_BASE_vii + 62;
 HEAP32[H_BASE + 2912 >> 2] = F_BASE_ii + 236;
 HEAP32[H_BASE + 2916 >> 2] = F_BASE_ii + 44;
 HEAP32[H_BASE + 2920 >> 2] = F_BASE_ii + 252;
 HEAP32[H_BASE + 2924 >> 2] = F_BASE_ii + 30;
 HEAP32[H_BASE + 2928 >> 2] = F_BASE_ii + 164;
 HEAP32[H_BASE + 2932 >> 2] = F_BASE_ii + 200;
 HEAP32[H_BASE + 2936 >> 2] = F_BASE_ii + 262;
 HEAP32[H_BASE + 2940 >> 2] = F_BASE_ii + 32;
 HEAP32[H_BASE + 2944 >> 2] = F_BASE_vii + 76;
 HEAP32[H_BASE + 2948 >> 2] = F_BASE_vii + 66;
 HEAP32[H_BASE + 2952 >> 2] = F_BASE_vii + 92;
 HEAP32[H_BASE + 2956 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 2960 >> 2] = F_BASE_viii + 30;
 HEAP32[H_BASE + 2964 >> 2] = F_BASE_viii + 12;
 HEAP32[H_BASE + 2968 >> 2] = F_BASE_viii + 50;
 HEAP32[H_BASE + 2972 >> 2] = F_BASE_viii + 42;
 HEAP32[H_BASE + 2976 >> 2] = F_BASE_vii + 22;
 HEAP32[H_BASE + 2980 >> 2] = F_BASE_vii + 58;
 HEAP32[H_BASE + 2984 >> 2] = F_BASE_iiii + 4;
 HEAP32[H_BASE + 2988 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 2992 >> 2] = F_BASE_iiiiii + 4;
 HEAP32[H_BASE + 2996 >> 2] = F_BASE_vii + 80;
 HEAP32[H_BASE + 3e3 >> 2] = F_BASE_vii + 78;
 HEAP32[H_BASE + 3004 >> 2] = F_BASE_ii + 36;
 HEAP32[H_BASE + 3008 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 3012 >> 2] = F_BASE_ii + 188;
 HEAP32[H_BASE + 3016 >> 2] = F_BASE_ii + 228;
 HEAP32[H_BASE + 3020 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 3024 >> 2] = F_BASE_vii + 44;
 HEAP32[H_BASE + 3028 >> 2] = F_BASE_ii + 256;
 HEAP32[H_BASE + 3032 >> 2] = F_BASE_vii + 74;
 HEAP32[H_BASE + 3036 >> 2] = F_BASE_vii + 30;
 HEAP32[H_BASE + 3040 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 3044 >> 2] = F_BASE_vii + 36;
 HEAP32[H_BASE + 3048 >> 2] = F_BASE_vii + 90;
 HEAP32[H_BASE + 3052 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 3056 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 3060 >> 2] = F_BASE_viiii + 16;
 HEAP32[H_BASE + 3064 >> 2] = F_BASE_vii + 48;
 HEAP32[H_BASE + 3068 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 3072 >> 2] = F_BASE_vii + 26;
 HEAP32[H_BASE + 3076 >> 2] = F_BASE_vii + 60;
 HEAP32[H_BASE + 3080 >> 2] = F_BASE_viii + 40;
 HEAP32[H_BASE + 3084 >> 2] = F_BASE_ii + 98;
 HEAP32[H_BASE + 3088 >> 2] = F_BASE_iiiifi + 2;
 HEAP32[H_BASE + 3092 >> 2] = F_BASE_iiiifi + 4;
 HEAP32[H_BASE + 3096 >> 2] = F_BASE_ii + 142;
 HEAP32[H_BASE + 3100 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 3104 >> 2] = F_BASE_vi + 30;
 HEAP32[H_BASE + 3108 >> 2] = F_BASE_vii + 50;
 HEAP32[H_BASE + 3112 >> 2] = F_BASE_viiiiii + 2;
 HEAP32[H_BASE + 3116 >> 2] = F_BASE_viiiii + 10;
 HEAP32[H_BASE + 3120 >> 2] = F_BASE_ii + 116;
 HEAP32[H_BASE + 3124 >> 2] = F_BASE_viii + 38;
 HEAP32[H_BASE + 3128 >> 2] = F_BASE_viii + 34;
 HEAP32[H_BASE + 3132 >> 2] = F_BASE_viii + 18;
 HEAP32[H_BASE + 3136 >> 2] = F_BASE_viii + 44;
 HEAP32[H_BASE + 3140 >> 2] = F_BASE_ii + 152;
 HEAP32[H_BASE + 3144 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 3148 >> 2] = F_BASE_ii + 226;
 HEAP32[H_BASE + 3152 >> 2] = F_BASE_vi + 28;
 HEAP32[H_BASE + 3156 >> 2] = F_BASE_ii + 140;
 HEAP32[H_BASE + 3160 >> 2] = F_BASE_viiii + 10;
 HEAP32[H_BASE + 3164 >> 2] = F_BASE_ii + 212;
 HEAP32[H_BASE + 3168 >> 2] = F_BASE_ii + 244;
 HEAP32[H_BASE + 3172 >> 2] = F_BASE_iii + 14;
 HEAP32[H_BASE + 3176 >> 2] = F_BASE_iiii + 8;
 HEAP32[H_BASE + 3180 >> 2] = F_BASE_ii + 122;
 HEAP32[H_BASE + 3184 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 3188 >> 2] = F_BASE_vi + 4;
}
function __ZN7WebCore14listMarkerTextENS_14EListStyleTypeEi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i9 + 4 | 0;
 HEAP32[i10 >> 2] = 0;
 i11 = i9 + 8 | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP8[i9 + 12 | 0] = 1;
 HEAP32[i9 + 16 >> 2] = 0;
 HEAP32[i9 + 20 >> 2] = 0;
 switch (i2 | 0) {
 case 71:
  {
   i12 = (i3 - 1 | 0) >>> 0 > 99999998 >>> 0 ? 3 : 71;
   break;
  }
 case 75:
  {
   i12 = (i3 >> 31 & -72) + 75 | 0;
   break;
  }
 case 74:
  {
   i12 = (i3 - 1 | 0) >>> 0 > 19998 >>> 0 ? 3 : 74;
   break;
  }
 case 70:
  {
   i12 = i3 >>> 0 > 999999 >>> 0 ? 3 : 70;
   break;
  }
 case 27:
 case 28:
  {
   i12 = (i3 - 1 | 0) >>> 0 > 3998 >>> 0 ? 3 : i2;
   break;
  }
 case 67:
 case 33:
 case 66:
 case 73:
 case 32:
 case 64:
 case 62:
 case 60:
 case 58:
 case 56:
 case 54:
 case 52:
 case 50:
 case 49:
 case 31:
 case 29:
 case 72:
 case 30:
 case 79:
 case 77:
 case 78:
 case 76:
 case 47:
 case 48:
 case 69:
 case 57:
 case 63:
 case 59:
 case 34:
 case 37:
 case 39:
 case 68:
 case 41:
 case 42:
 case 43:
 case 45:
 case 40:
 case 46:
 case 61:
 case 65:
 case 36:
 case 35:
 case 38:
 case 44:
 case 51:
 case 53:
 case 55:
  {
   i12 = (i3 | 0) < 1 ? 3 : i2;
   break;
  }
 default:
  {
   i12 = i2;
  }
 }
 L9 : do {
  switch (i12 | 0) {
  case 80:
   {
    i2 = HEAP32[(__ZN3WTF11emptyStringEv() | 0) >> 2] | 0;
    HEAP32[i1 >> 2] = i2;
    if ((i2 | 0) == 0) {
     break L9;
    }
    i13 = i2 | 0;
    HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
    break;
   }
  case 68:
   {
    __ZN7WebCoreL10toSymbolicIhEEvRN3WTF13StringBuilderEiPKT_j(i9, i3);
    i14 = 76;
    break;
   }
  case 1:
   {
    HEAP16[i8 >> 1] = 9702;
    __ZN3WTF13StringBuilder6appendEPKtj(i9, i8, 1);
    i14 = 76;
    break;
   }
  case 0:
   {
    HEAP16[i7 >> 1] = 8226;
    __ZN3WTF13StringBuilder6appendEPKtj(i9, i7, 1);
    i14 = 76;
    break;
   }
  case 69:
   {
    __ZN7WebCoreL10toSymbolicItEEvRN3WTF13StringBuilderEiPKT_j(i9, i3);
    i14 = 76;
    break;
   }
  case 2:
   {
    HEAP16[i6 >> 1] = 9632;
    __ZN3WTF13StringBuilder6appendEPKtj(i9, i6, 1);
    i14 = 76;
    break;
   }
  case 3:
   {
    __ZN3WTF13StringBuilder12appendNumberEi(i9, i3);
    i14 = 76;
    break;
   }
  case 4:
   {
    if ((i3 + 9 | 0) >>> 0 > 18 >>> 0) {
     __ZN3WTF13StringBuilder12appendNumberEi(i9, i3);
     i14 = 76;
     break L9;
    }
    if ((i3 | 0) < 0) {
     __ZN3WTF13StringBuilder6appendEPKhj(i9, H_BASE + 40 | 0, 2);
     __ZN3WTF13StringBuilder12appendNumberEi(i9, -i3 | 0);
     i14 = 76;
     break L9;
    } else {
     HEAP8[i5] = 48;
     __ZN3WTF13StringBuilder6appendEPKhj(i9, i5, 1);
     __ZN3WTF13StringBuilder12appendNumberEi(i9, i3);
     i14 = 76;
     break L9;
    }
    break;
   }
  case 5:
   {
    __ZN7WebCoreL9toNumericItEEvRN3WTF13StringBuilderEiPKT_j(i9, i3, H_BASE + 1376 | 0);
    i14 = 76;
    break;
   }
  case 6:
   {
    __ZN7WebCoreL9toNumericIhEEvRN3WTF13StringBuilderEiPKT_j(i9, i3, H_BASE + 2032 | 0, 2);
    i14 = 76;
    break;
   }
  case 7:
   {
    __ZN7WebCoreL9toNumericItEEvRN3WTF13StringBuilderEiPKT_j(i9, i3, H_BASE + 1952 | 0);
    i14 = 76;
    break;
   }
  case 8:
  case 9:
   {
    __ZN7WebCoreL9toNumericItEEvRN3WTF13StringBuilderEiPKT_j(i9, i3, H_BASE + 2072 | 0);
    i14 = 76;
    break;
   }
  case 10:
   {
    __ZN7WebCoreL9toNumericItEEvRN3WTF13StringBuilderEiPKT_j(i9, i3, H_BASE + 1560 | 0);
    i14 = 76;
    break;
   }
  case 11:
   {
    __ZN7WebCoreL9toNumericItEEvRN3WTF13StringBuilderEiPKT_j(i9, i3, H_BASE + 1848 | 0);
    i14 = 76;
    break;
   }
  case 12:
   {
    __ZN7WebCoreL9toNumericItEEvRN3WTF13StringBuilderEiPKT_j(i9, i3, H_BASE + 1824 | 0);
    i14 = 76;
    break;
   }
  case 13:
   {
    __ZN7WebCoreL9toNumericItEEvRN3WTF13StringBuilderEiPKT_j(i9, i3, H_BASE + 1928 | 0);
    i14 = 76;
    break;
   }
  case 14:
   {
    __ZN7WebCoreL9toNumericIhEEvRN3WTF13StringBuilderEiPKT_j(i9, i3, H_BASE + 1024 | 0, 16);
    i14 = 76;
    break;
   }
  case 15:
   {
    __ZN7WebCoreL9toNumericItEEvRN3WTF13StringBuilderEiPKT_j(i9, i3, H_BASE + 2144 | 0);
    i14 = 76;
    break;
   }
  case 16:
   {
    __ZN7WebCoreL9toNumericItEEvRN3WTF13StringBuilderEiPKT_j(i9, i3, H_BASE + 1608 | 0);
    i14 = 76;
    break;
   }
  case 17:
   {
    __ZN7WebCoreL9toNumericItEEvRN3WTF13StringBuilderEiPKT_j(i9, i3, H_BASE + 1584 | 0);
    i14 = 76;
    break;
   }
  case 18:
   {
    __ZN7WebCoreL9toNumericItEEvRN3WTF13StringBuilderEiPKT_j(i9, i3, H_BASE + 1904 | 0);
    i14 = 76;
    break;
   }
  case 19:
   {
    __ZN7WebCoreL9toNumericIhEEvRN3WTF13StringBuilderEiPKT_j(i9, i3, H_BASE + 2064 | 0, 8);
    i14 = 76;
    break;
   }
  case 20:
   {
    __ZN7WebCoreL9toNumericItEEvRN3WTF13StringBuilderEiPKT_j(i9, i3, H_BASE + 2040 | 0);
    i14 = 76;
    break;
   }
  case 21:
  case 22:
   {
    __ZN7WebCoreL9toNumericItEEvRN3WTF13StringBuilderEiPKT_j(i9, i3, H_BASE + 2096 | 0);
    i14 = 76;
    break;
   }
  case 23:
   {
    __ZN7WebCoreL9toNumericItEEvRN3WTF13StringBuilderEiPKT_j(i9, i3, H_BASE + 1976 | 0);
    i14 = 76;
    break;
   }
  case 24:
   {
    __ZN7WebCoreL9toNumericItEEvRN3WTF13StringBuilderEiPKT_j(i9, i3, H_BASE + 1880 | 0);
    i14 = 76;
    break;
   }
  case 25:
   {
    __ZN7WebCoreL9toNumericItEEvRN3WTF13StringBuilderEiPKT_j(i9, i3, H_BASE + 2120 | 0);
    i14 = 76;
    break;
   }
  case 26:
   {
    __ZN7WebCoreL9toNumericIhEEvRN3WTF13StringBuilderEiPKT_j(i9, i3, H_BASE + 1008 | 0, 16);
    i14 = 76;
    break;
   }
  case 30:
  case 31:
   {
    __ZN7WebCoreL12toAlphabeticIhEEvRN3WTF13StringBuilderEiPKT_j(i9, i3, H_BASE + 1480 | 0, 26);
    i14 = 76;
    break;
   }
  case 32:
  case 33:
   {
    __ZN7WebCoreL12toAlphabeticIhEEvRN3WTF13StringBuilderEiPKT_j(i9, i3, H_BASE + 1400 | 0, 26);
    i14 = 76;
    break;
   }
  case 29:
   {
    __ZN7WebCoreL12toAlphabeticItEEvRN3WTF13StringBuilderEiPKT_j(i9, i3, H_BASE + 1512 | 0, 24);
    i14 = 76;
    break;
   }
  case 76:
   {
    __ZN7WebCoreL12toAlphabeticItEEvRN3WTF13StringBuilderEiPKT_j(i9, i3, H_BASE + 1728 | 0, 48);
    i14 = 76;
    break;
   }
  case 78:
   {
    __ZN7WebCoreL12toAlphabeticItEEvRN3WTF13StringBuilderEiPKT_j(i9, i3, H_BASE + 1280 | 0, 47);
    i14 = 76;
    break;
   }
  case 77:
   {
    __ZN7WebCoreL12toAlphabeticItEEvRN3WTF13StringBuilderEiPKT_j(i9, i3, H_BASE + 1632 | 0, 48);
    i14 = 76;
    break;
   }
  case 79:
   {
    __ZN7WebCoreL12toAlphabeticItEEvRN3WTF13StringBuilderEiPKT_j(i9, i3, H_BASE + 1184 | 0, 47);
    i14 = 76;
    break;
   }
  case 34:
  case 35:
  case 36:
   {
    __ZN7WebCoreL12toAlphabeticItEEvRN3WTF13StringBuilderEiPKT_j(i9, i3, H_BASE + 592 | 0, 18);
    i14 = 76;
    break;
   }
  case 37:
  case 38:
   {
    __ZN7WebCoreL12toAlphabeticItEEvRN3WTF13StringBuilderEiPKT_j(i9, i3, H_BASE + 520 | 0, 33);
    i14 = 76;
    break;
   }
  case 39:
  case 40:
   {
    __ZN7WebCoreL12toAlphabeticItEEvRN3WTF13StringBuilderEiPKT_j(i9, i3, H_BASE + 880 | 0, 33);
    i14 = 76;
    break;
   }
  case 41:
   {
    __ZN7WebCoreL12toAlphabeticItEEvRN3WTF13StringBuilderEiPKT_j(i9, i3, H_BASE + 1040 | 0, 12);
    i14 = 76;
    break;
   }
  case 42:
   {
    __ZN7WebCoreL12toAlphabeticItEEvRN3WTF13StringBuilderEiPKT_j(i9, i3, H_BASE + 1096 | 0, 10);
    i14 = 76;
    break;
   }
  case 43:
  case 44:
   {
    __ZN7WebCoreL12toAlphabeticItEEvRN3WTF13StringBuilderEiPKT_j(i9, i3, H_BASE + 688 | 0, 26);
    i14 = 76;
    break;
   }
  case 45:
  case 46:
   {
    __ZN7WebCoreL12toAlphabeticItEEvRN3WTF13StringBuilderEiPKT_j(i9, i3, H_BASE + 952 | 0, 26);
    i14 = 76;
    break;
   }
  case 47:
   {
    __ZN7WebCoreL12toAlphabeticItEEvRN3WTF13StringBuilderEiPKT_j(i9, i3, H_BASE + 1064 | 0, 14);
    i14 = 76;
    break;
   }
  case 48:
   {
    __ZN7WebCoreL12toAlphabeticItEEvRN3WTF13StringBuilderEiPKT_j(i9, i3, H_BASE + 2e3 | 0, 14);
    i14 = 76;
    break;
   }
  case 50:
  case 51:
   {
    __ZN7WebCoreL12toAlphabeticItEEvRN3WTF13StringBuilderEiPKT_j(i9, i3, H_BASE + 464 | 0, 25);
    i14 = 76;
    break;
   }
  case 52:
  case 53:
   {
    __ZN7WebCoreL12toAlphabeticItEEvRN3WTF13StringBuilderEiPKT_j(i9, i3, H_BASE + 224 | 0, 26);
    i14 = 76;
    break;
   }
  case 54:
  case 55:
   {
    __ZN7WebCoreL12toAlphabeticItEEvRN3WTF13StringBuilderEiPKT_j(i9, i3, H_BASE + 416 | 0, 22);
    i14 = 76;
    break;
   }
  case 56:
  case 57:
   {
    __ZN7WebCoreL12toAlphabeticItEEvRN3WTF13StringBuilderEiPKT_j(i9, i3, H_BASE + 632 | 0, 27);
    i14 = 76;
    break;
   }
  case 58:
  case 59:
   {
    __ZN7WebCoreL12toAlphabeticItEEvRN3WTF13StringBuilderEiPKT_j(i9, i3, H_BASE + 352 | 0, 31);
    i14 = 76;
    break;
   }
  case 60:
  case 61:
   {
    __ZN7WebCoreL12toAlphabeticItEEvRN3WTF13StringBuilderEiPKT_j(i9, i3, H_BASE + 816 | 0, 31);
    i14 = 76;
    break;
   }
  case 62:
  case 63:
   {
    __ZN7WebCoreL12toAlphabeticItEEvRN3WTF13StringBuilderEiPKT_j(i9, i3, H_BASE + 280 | 0, 34);
    i14 = 76;
    break;
   }
  case 64:
  case 65:
   {
    __ZN7WebCoreL12toAlphabeticItEEvRN3WTF13StringBuilderEiPKT_j(i9, i3, H_BASE + 744 | 0, 34);
    i14 = 76;
    break;
   }
  case 66:
   {
    __ZN7WebCoreL12toAlphabeticItEEvRN3WTF13StringBuilderEiPKT_j(i9, i3, H_BASE + 1432 | 0, 24);
    i14 = 76;
    break;
   }
  case 49:
   {
    __ZN7WebCoreL12toAlphabeticIhEEvRN3WTF13StringBuilderEiPKT_j(i9, i3, H_BASE + 1152 | 0, 29);
    i14 = 76;
    break;
   }
  case 67:
   {
    __ZN7WebCoreL12toAlphabeticIhEEvRN3WTF13StringBuilderEiPKT_j(i9, i3, H_BASE + 1120 | 0, 29);
    i14 = 76;
    break;
   }
  case 75:
   {
    __ZN7WebCoreL16toCJKIdeographicERN3WTF13StringBuilderEiPKt(i9, i3);
    i14 = 76;
    break;
   }
  case 27:
   {
    __ZN7WebCoreL7toRomanERN3WTF13StringBuilderEib(i9, i3, 0);
    i14 = 76;
    break;
   }
  case 28:
   {
    __ZN7WebCoreL7toRomanERN3WTF13StringBuilderEib(i9, i3, 1);
    i14 = 76;
    break;
   }
  case 71:
  case 73:
   {
    __ZN7WebCoreL10toArmenianERN3WTF13StringBuilderEib(i9, i3, 1);
    i14 = 76;
    break;
   }
  case 72:
   {
    __ZN7WebCoreL10toArmenianERN3WTF13StringBuilderEib(i9, i3, 0);
    i14 = 76;
    break;
   }
  case 74:
   {
    __ZN7WebCoreL10toGeorgianERN3WTF13StringBuilderEi(i9, i3);
    i14 = 76;
    break;
   }
  case 70:
   {
    __ZN7WebCoreL8toHebrewERN3WTF13StringBuilderEi(i9, i3);
    i14 = 76;
    break;
   }
  default:
   {
    i14 = 76;
   }
  }
 } while (0);
 do {
  if ((i14 | 0) == 76) {
   __ZN3WTF13StringBuilder11shrinkToFitEv(i9);
   i3 = HEAP32[i10 >> 2] | 0;
   if ((i3 | 0) == 0) {
    __ZNK3WTF13StringBuilder11reifyStringEv(i9);
    i5 = HEAP32[i10 >> 2] | 0;
    HEAP32[i1 >> 2] = i5;
    if ((i5 | 0) == 0) {
     break;
    } else {
     i15 = i5;
    }
   } else {
    HEAP32[i1 >> 2] = i3;
    i15 = i3;
   }
   i3 = i15 | 0;
   HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
  }
 } while (0);
 i15 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i11 = i15 | 0;
   i1 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i15);
    break;
   } else {
    HEAP32[i11 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i15 = HEAP32[i10 >> 2] | 0;
 if ((i15 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i10 = i15 | 0;
 i1 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i15);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i10 >> 2] = i1;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore16RenderListMarker21getRelativeMarkerRectEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 144 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 56 | 0;
 i8 = i3 + 96 | 0;
 i9 = i3 + 104 | 0;
 i10 = i2 + 96 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i11 >> 2] | 0) + 20 >> 2] & 511](i11) | 0) {
    break;
   }
   i12 = HEAP32[i10 >> 2] | 0;
   i13 = i2 | 0;
   i14 = i2 + 36 | 0;
   FUNCTION_TABLE_viiif[HEAP32[(HEAP32[i12 >> 2] | 0) + 24 >> 2] & 1](i4, i12, i13, +HEAPF32[(HEAP32[(HEAP32[i14 >> 2] | 0) + 24 >> 2] | 0) + 80 >> 2]);
   i12 = HEAP32[i4 >> 2] | 0;
   i15 = HEAP32[i10 >> 2] | 0;
   FUNCTION_TABLE_viiif[HEAP32[(HEAP32[i15 >> 2] | 0) + 24 >> 2] & 1](i5, i15, i13, +HEAPF32[(HEAP32[(HEAP32[i14 >> 2] | 0) + 24 >> 2] | 0) + 80 >> 2]);
   i14 = HEAP32[i5 + 4 >> 2] | 0;
   HEAP32[i1 >> 2] = 0;
   HEAP32[i1 + 4 >> 2] = 0;
   HEAP32[i1 + 8 >> 2] = i12;
   HEAP32[i1 + 12 >> 2] = i14;
   STACKTOP = i3;
   return;
  }
 } while (0);
 i5 = i2 + 36 | 0;
 i10 = HEAP32[i5 >> 2] | 0;
 i4 = (HEAP32[i10 + 40 >> 2] | 0) >>> 3 & 127;
 L6 : do {
  switch (i4 | 0) {
  case 34:
  case 37:
  case 39:
  case 5:
  case 71:
  case 6:
  case 7:
  case 8:
  case 75:
  case 41:
  case 42:
  case 4:
  case 3:
  case 10:
  case 43:
  case 45:
  case 40:
  case 46:
  case 61:
  case 65:
  case 36:
  case 35:
  case 38:
  case 44:
  case 51:
  case 53:
  case 55:
  case 59:
  case 63:
  case 57:
  case 74:
  case 11:
  case 12:
  case 48:
  case 47:
  case 70:
  case 76:
  case 78:
  case 13:
  case 77:
  case 79:
  case 9:
  case 15:
  case 30:
  case 72:
  case 29:
  case 14:
  case 31:
  case 49:
  case 27:
  case 16:
  case 17:
  case 18:
  case 19:
  case 20:
  case 50:
  case 21:
  case 52:
  case 54:
  case 23:
  case 25:
  case 24:
  case 56:
  case 58:
  case 60:
  case 62:
  case 64:
  case 32:
  case 73:
  case 66:
  case 26:
  case 33:
  case 67:
  case 28:
  case 22:
   {
    i11 = i2 + 92 | 0;
    i14 = HEAP32[i11 >> 2] | 0;
    do {
     if ((i14 | 0) != 0) {
      if ((HEAP32[i14 + 4 >> 2] | 0) == 0) {
       break;
      }
      i12 = __ZNK7WebCore11RenderStyle4fontEv(i10) | 0;
      __ZN7WebCore7TextRunC2ERKN3WTF6StringEffjNS_13TextDirectionEbbj(i7, i11, +0, +0, 1, 1, 0, 1, 3);
      i13 = ~~+__ZNK7WebCore4Font5widthERKNS_7TextRunEPN3WTF7HashSetIPKNS_14SimpleFontDataENS4_7PtrHashIS8_EENS4_10HashTraitsIS8_EEEEPNS_13GlyphOverflowE(i12, i7, 0, 0);
      i15 = HEAP32[i7 + 32 >> 2] | 0;
      do {
       if ((i15 | 0) != 0) {
        i16 = i15 + 4 | 0;
        i17 = i16 | 0;
        i18 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
        if ((i18 | 0) != 0) {
         HEAP32[i17 >> 2] = i18;
         break;
        }
        i18 = i16 - 4 | 0;
        if ((i18 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 31](i18);
       }
      } while (0);
      i15 = i8 | 0;
      i18 = HEAP32[i2 + 100 >> 2] | 0;
      if ((HEAP8[i18 + 128 | 0] & 2) == 0) {
       __ZNK7WebCore14RenderListItem14updateValueNowEv(i18);
      }
      i16 = HEAP32[i18 + 124 >> 2] | 0;
      switch (i4 | 0) {
      case 71:
       {
        i19 = (i16 - 1 | 0) >>> 0 > 99999998 >>> 0 ? 3 : 71;
        break;
       }
      case 75:
       {
        i19 = (i16 >> 31 & -72) + 75 | 0;
        break;
       }
      case 74:
       {
        i19 = (i16 - 1 | 0) >>> 0 > 19998 >>> 0 ? 3 : 74;
        break;
       }
      case 70:
       {
        i19 = i16 >>> 0 > 999999 >>> 0 ? 3 : 70;
        break;
       }
      case 27:
      case 28:
       {
        i19 = (i16 - 1 | 0) >>> 0 > 3998 >>> 0 ? 3 : i4;
        break;
       }
      case 67:
      case 33:
      case 66:
      case 73:
      case 32:
      case 64:
      case 62:
      case 60:
      case 58:
      case 56:
      case 54:
      case 52:
      case 50:
      case 49:
      case 31:
      case 29:
      case 72:
      case 30:
      case 79:
      case 77:
      case 78:
      case 76:
      case 47:
      case 48:
      case 69:
      case 57:
      case 63:
      case 59:
      case 34:
      case 37:
      case 39:
      case 68:
      case 41:
      case 42:
      case 43:
      case 45:
      case 40:
      case 46:
      case 61:
      case 65:
      case 36:
      case 35:
      case 38:
      case 44:
      case 51:
      case 53:
      case 55:
       {
        i19 = (i16 | 0) < 1 ? 3 : i4;
        break;
       }
      default:
       {
        i19 = i4;
       }
      }
      switch (i19 | 0) {
      case 68:
      case 1:
      case 0:
      case 69:
      case 80:
      case 2:
       {
        i20 = 32;
        break;
       }
      case 34:
      case 37:
      case 39:
      case 43:
      case 45:
      case 40:
      case 46:
      case 61:
      case 65:
      case 36:
      case 35:
      case 38:
      case 44:
      case 51:
      case 53:
      case 55:
      case 59:
      case 63:
      case 57:
      case 50:
      case 52:
      case 54:
      case 56:
      case 58:
      case 60:
      case 62:
      case 64:
       {
        i20 = 4966;
        break;
       }
      case 71:
      case 5:
      case 7:
      case 6:
      case 8:
      case 75:
      case 41:
      case 42:
      case 4:
      case 3:
      case 10:
      case 74:
      case 11:
      case 12:
      case 48:
      case 47:
      case 70:
      case 76:
      case 78:
      case 13:
      case 77:
      case 79:
      case 9:
      case 15:
      case 30:
      case 72:
      case 29:
      case 14:
      case 31:
      case 49:
      case 27:
      case 16:
      case 17:
      case 18:
      case 19:
      case 20:
      case 21:
      case 23:
      case 25:
      case 24:
      case 32:
      case 73:
      case 66:
      case 26:
      case 33:
      case 67:
      case 28:
      case 22:
       {
        i20 = 46;
        break;
       }
      default:
       {
        i20 = 46;
       }
      }
      HEAP16[i15 >> 1] = i20;
      HEAP16[i8 + 2 >> 1] = 32;
      __ZN7WebCore11RenderBlock16constructTextRunEPNS_12RenderObjectERKNS_4FontEPKtiRKNS_11RenderStyleEj(i9, i2 | 0, i12, i15, 2, HEAP32[i5 >> 2] | 0, 1);
      i15 = ~~+__ZNK7WebCore4Font5widthERKNS_7TextRunEPN3WTF7HashSetIPKNS_14SimpleFontDataENS4_7PtrHashIS8_EENS4_10HashTraitsIS8_EEEEPNS_13GlyphOverflowE(i12, i9, 0, 0);
      i16 = HEAP32[i9 + 32 >> 2] | 0;
      do {
       if ((i16 | 0) != 0) {
        i18 = i16 + 4 | 0;
        i17 = i18 | 0;
        i21 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
        if ((i21 | 0) != 0) {
         HEAP32[i17 >> 2] = i21;
         break;
        }
        i21 = i18 - 4 | 0;
        if ((i21 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 31](i21);
       }
      } while (0);
      i16 = HEAP32[i12 + 24 >> 2] | 0;
      i21 = i16 + 44 | 0;
      i18 = HEAP32[i21 >> 2] | 0;
      if ((i18 | 0) == 0) {
       i17 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i16, i12 | 0, 0) | 0;
       i16 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i17 >> 2] | 0) + 8 >> 2] & 15](i17, 32) | 0;
       HEAP32[i21 >> 2] = i16;
       i22 = i16;
      } else {
       i22 = i18;
      }
      i18 = _round(+(+HEAPF32[i22 + 16 >> 2])) | 0;
      i23 = 0;
      i24 = 0;
      i25 = (_round(+(+HEAPF32[i22 + 20 >> 2])) | 0) + i18 | 0;
      i26 = i15 + i13 | 0;
      break L6;
     }
    } while (0);
    _memset(i1 | 0, 0, 16) | 0;
    STACKTOP = i3;
    return;
   }
  case 68:
  case 69:
   {
    i11 = __ZNK7WebCore11RenderStyle4fontEv(i10) | 0;
    __ZN7WebCore7TextRunC2ERKN3WTF6StringEffjNS_13TextDirectionEbbj(i6, i2 + 92 | 0, +0, +0, 1, 1, 0, 1, 3);
    i14 = ~~+__ZNK7WebCore4Font5widthERKNS_7TextRunEPN3WTF7HashSetIPKNS_14SimpleFontDataENS4_7PtrHashIS8_EENS4_10HashTraitsIS8_EEEEPNS_13GlyphOverflowE(i11, i6, 0, 0);
    i18 = HEAP32[i11 + 24 >> 2] | 0;
    i16 = i18 + 44 | 0;
    i21 = HEAP32[i16 >> 2] | 0;
    if ((i21 | 0) == 0) {
     i17 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i18, i11 | 0, 0) | 0;
     i11 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i17 >> 2] | 0) + 8 >> 2] & 15](i17, 32) | 0;
     HEAP32[i16 >> 2] = i11;
     i27 = i11;
    } else {
     i27 = i21;
    }
    i21 = i14 | 0;
    i14 = (_round(+(+HEAPF32[i27 + 16 >> 2])) | 0) + (_round(+(+HEAPF32[i27 + 20 >> 2])) | 0) | 0;
    i11 = HEAP32[i6 + 32 >> 2] | 0;
    if ((i11 | 0) == 0) {
     i23 = 0;
     i24 = 0;
     i25 = i14;
     i26 = i21;
     break L6;
    }
    i16 = i11 + 4 | 0;
    i11 = i16 | 0;
    i17 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
    if ((i17 | 0) != 0) {
     HEAP32[i11 >> 2] = i17;
     i23 = 0;
     i24 = 0;
     i25 = i14;
     i26 = i21;
     break L6;
    }
    i17 = i16 - 4 | 0;
    if ((i17 | 0) == 0) {
     i23 = 0;
     i24 = 0;
     i25 = i14;
     i26 = i21;
     break L6;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 4 >> 2] & 31](i17);
    i23 = 0;
    i24 = 0;
    i25 = i14;
    i26 = i21;
    break;
   }
  case 0:
  case 1:
  case 2:
   {
    i21 = _round(+(+HEAPF32[(__ZNK7WebCore11RenderStyle11fontMetricsEv(i10) | 0) + 4 >> 2])) | 0;
    i14 = (i21 << 1 | 0) / 3 & -1;
    i17 = (i14 + 1 | 0) / 2 & -1;
    i23 = ((i21 - i14 | 0) * 3 & -1 | 0) / 2 & -1 | 0;
    i24 = 1;
    i25 = i17 | 0;
    i26 = i17 | 0;
    break;
   }
  case 80:
   {
    _memset(i1 | 0, 0, 16) | 0;
    STACKTOP = i3;
    return;
   }
  default:
   {
    i23 = 0;
    i24 = 0;
    i25 = 0;
    i26 = 0;
   }
  }
 } while (0);
 i10 = (HEAP32[(HEAP32[i5 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i10 | 0) == 3 | (i10 | 0) == 0) {
  i28 = i23;
  i29 = i24;
  i30 = i25;
  i31 = i26;
 } else {
  i10 = i25;
  i28 = i24 | 0;
  i29 = (HEAP32[i2 + 52 >> 2] | 0) - (i23 + i10) | 0;
  i30 = i26 | 0;
  i31 = i10 | 0;
 }
 i10 = i1;
 HEAP32[i10 >> 2] = i29;
 HEAP32[i10 + 4 >> 2] = i28;
 i28 = i1 + 8 | 0;
 HEAP32[i28 >> 2] = i31;
 HEAP32[i28 + 4 >> 2] = i30;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore16RenderListMarker29computePreferredLogicalWidthsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, d14 = +0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 136 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 48 | 0;
 i6 = i2 + 88 | 0;
 i7 = i2 + 96 | 0;
 __ZN7WebCore16RenderListMarker13updateContentEv(i1);
 i8 = i1 + 96 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 20 >> 2] & 511](i9) | 0) {
    break;
   }
   i10 = HEAP32[i8 >> 2] | 0;
   i11 = i1 + 36 | 0;
   FUNCTION_TABLE_viiif[HEAP32[(HEAP32[i10 >> 2] | 0) + 24 >> 2] & 1](i3, i10, i1 | 0, +HEAPF32[(HEAP32[(HEAP32[i11 >> 2] | 0) + 24 >> 2] | 0) + 80 >> 2]);
   i10 = (HEAP32[(HEAP32[i11 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if ((i10 | 0) == 3 | (i10 | 0) == 0) {
    i12 = HEAP32[i3 >> 2] | 0;
   } else {
    i12 = HEAP32[i3 + 4 >> 2] | 0;
   }
   HEAP32[i1 + 80 >> 2] = i12;
   HEAP32[i1 + 76 >> 2] = i12;
   __ZN7WebCore12RenderObject30setPreferredLogicalWidthsDirtyEbNS_15MarkingBehaviorE(i1 | 0, 0, 1);
   __ZN7WebCore16RenderListMarker13updateMarginsEv(i1);
   STACKTOP = i2;
   return;
  }
 } while (0);
 i12 = i1 + 36 | 0;
 i3 = __ZNK7WebCore11RenderStyle4fontEv(HEAP32[i12 >> 2] | 0) | 0;
 i8 = (HEAP32[(HEAP32[i12 >> 2] | 0) + 40 >> 2] | 0) >>> 3 & 127;
 L10 : do {
  switch (i8 | 0) {
  case 22:
  case 34:
  case 37:
  case 39:
  case 5:
  case 71:
  case 6:
  case 7:
  case 8:
  case 75:
  case 41:
  case 42:
  case 4:
  case 3:
  case 10:
  case 43:
  case 45:
  case 40:
  case 46:
  case 61:
  case 65:
  case 36:
  case 35:
  case 38:
  case 44:
  case 51:
  case 53:
  case 55:
  case 59:
  case 63:
  case 57:
  case 74:
  case 11:
  case 12:
  case 48:
  case 47:
  case 70:
  case 76:
  case 78:
  case 13:
  case 77:
  case 79:
  case 9:
  case 15:
  case 30:
  case 72:
  case 29:
  case 14:
  case 31:
  case 49:
  case 27:
  case 16:
  case 17:
  case 18:
  case 19:
  case 20:
  case 50:
  case 21:
  case 52:
  case 54:
  case 23:
  case 25:
  case 24:
  case 56:
  case 58:
  case 60:
  case 62:
  case 64:
  case 32:
  case 73:
  case 66:
  case 26:
  case 33:
  case 67:
  case 28:
   {
    i9 = i1 + 92 | 0;
    i10 = HEAP32[i9 >> 2] | 0;
    if ((i10 | 0) == 0) {
     i13 = 0;
     break L10;
    }
    if ((HEAP32[i10 + 4 >> 2] | 0) == 0) {
     i13 = 0;
     break L10;
    }
    __ZN7WebCore7TextRunC2ERKN3WTF6StringEffjNS_13TextDirectionEbbj(i5, i9, +0, +0, 1, 1, 0, 1, 3);
    d14 = +__ZNK7WebCore4Font5widthERKNS_7TextRunEPN3WTF7HashSetIPKNS_14SimpleFontDataENS4_7PtrHashIS8_EENS4_10HashTraitsIS8_EEEEPNS_13GlyphOverflowE(i3, i5, 0, 0);
    do {
     if (d14 < +2147483647) {
      if (d14 <= +-2147483648) {
       i15 = -2147483648;
       break;
      }
      i15 = ~~d14;
     } else {
      i15 = 2147483647;
     }
    } while (0);
    i9 = HEAP32[i5 + 32 >> 2] | 0;
    do {
     if ((i9 | 0) != 0) {
      i10 = i9 + 4 | 0;
      i11 = i10 | 0;
      i16 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
      if ((i16 | 0) != 0) {
       HEAP32[i11 >> 2] = i16;
       break;
      }
      i16 = i10 - 4 | 0;
      if ((i16 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 31](i16);
     }
    } while (0);
    i9 = i6 | 0;
    i16 = HEAP32[i1 + 100 >> 2] | 0;
    if ((HEAP8[i16 + 128 | 0] & 2) == 0) {
     __ZNK7WebCore14RenderListItem14updateValueNowEv(i16);
    }
    i10 = HEAP32[i16 + 124 >> 2] | 0;
    switch (i8 | 0) {
    case 71:
     {
      i17 = (i10 - 1 | 0) >>> 0 > 99999998 >>> 0 ? 3 : 71;
      break;
     }
    case 75:
     {
      i17 = (i10 >> 31 & -72) + 75 | 0;
      break;
     }
    case 74:
     {
      i17 = (i10 - 1 | 0) >>> 0 > 19998 >>> 0 ? 3 : 74;
      break;
     }
    case 70:
     {
      i17 = i10 >>> 0 > 999999 >>> 0 ? 3 : 70;
      break;
     }
    case 27:
    case 28:
     {
      i17 = (i10 - 1 | 0) >>> 0 > 3998 >>> 0 ? 3 : i8;
      break;
     }
    case 67:
    case 33:
    case 66:
    case 73:
    case 32:
    case 64:
    case 62:
    case 60:
    case 58:
    case 56:
    case 54:
    case 52:
    case 50:
    case 49:
    case 31:
    case 29:
    case 72:
    case 30:
    case 79:
    case 77:
    case 78:
    case 76:
    case 47:
    case 48:
    case 69:
    case 57:
    case 63:
    case 59:
    case 34:
    case 37:
    case 39:
    case 68:
    case 41:
    case 42:
    case 43:
    case 45:
    case 40:
    case 46:
    case 61:
    case 65:
    case 36:
    case 35:
    case 38:
    case 44:
    case 51:
    case 53:
    case 55:
     {
      i17 = (i10 | 0) < 1 ? 3 : i8;
      break;
     }
    default:
     {
      i17 = i8;
     }
    }
    switch (i17 | 0) {
    case 34:
    case 37:
    case 39:
    case 43:
    case 45:
    case 40:
    case 46:
    case 61:
    case 65:
    case 36:
    case 35:
    case 38:
    case 44:
    case 51:
    case 53:
    case 55:
    case 59:
    case 63:
    case 57:
    case 50:
    case 52:
    case 54:
    case 56:
    case 58:
    case 60:
    case 62:
    case 64:
     {
      i18 = 4966;
      break;
     }
    case 71:
    case 5:
    case 7:
    case 6:
    case 8:
    case 75:
    case 41:
    case 42:
    case 4:
    case 3:
    case 10:
    case 74:
    case 11:
    case 12:
    case 48:
    case 47:
    case 70:
    case 76:
    case 78:
    case 13:
    case 77:
    case 79:
    case 9:
    case 15:
    case 30:
    case 72:
    case 29:
    case 14:
    case 31:
    case 49:
    case 27:
    case 16:
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
    case 23:
    case 25:
    case 24:
    case 32:
    case 73:
    case 66:
    case 26:
    case 33:
    case 67:
    case 28:
    case 22:
     {
      i18 = 46;
      break;
     }
    case 68:
    case 1:
    case 0:
    case 69:
    case 80:
    case 2:
     {
      i18 = 32;
      break;
     }
    default:
     {
      i18 = 46;
     }
    }
    HEAP16[i9 >> 1] = i18;
    HEAP16[i6 + 2 >> 1] = 32;
    __ZN7WebCore11RenderBlock16constructTextRunEPNS_12RenderObjectERKNS_4FontEPKtiRKNS_11RenderStyleEj(i7, i1 | 0, i3, i9, 2, HEAP32[i12 >> 2] | 0, 1);
    d14 = +__ZNK7WebCore4Font5widthERKNS_7TextRunEPN3WTF7HashSetIPKNS_14SimpleFontDataENS4_7PtrHashIS8_EENS4_10HashTraitsIS8_EEEEPNS_13GlyphOverflowE(i3, i7, 0, 0);
    do {
     if (d14 < +2147483647) {
      if (d14 <= +-2147483648) {
       i19 = -2147483648;
       break;
      }
      i19 = ~~d14;
     } else {
      i19 = 2147483647;
     }
    } while (0);
    i9 = HEAP32[i7 + 32 >> 2] | 0;
    do {
     if ((i9 | 0) != 0) {
      i10 = i9 + 4 | 0;
      i16 = i10 | 0;
      i11 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
      if ((i11 | 0) != 0) {
       HEAP32[i16 >> 2] = i11;
       break;
      }
      i11 = i10 - 4 | 0;
      if ((i11 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 31](i11);
     }
    } while (0);
    i13 = i19 + i15 | 0;
    break;
   }
  case 68:
  case 69:
   {
    __ZN7WebCore7TextRunC2ERKN3WTF6StringEffjNS_13TextDirectionEbbj(i4, i1 + 92 | 0, +0, +0, 1, 1, 0, 1, 3);
    d14 = +__ZNK7WebCore4Font5widthERKNS_7TextRunEPN3WTF7HashSetIPKNS_14SimpleFontDataENS4_7PtrHashIS8_EENS4_10HashTraitsIS8_EEEEPNS_13GlyphOverflowE(i3, i4, 0, 0);
    do {
     if (d14 < +2147483647) {
      if (d14 <= +-2147483648) {
       i20 = -2147483648;
       break;
      }
      i20 = ~~d14;
     } else {
      i20 = 2147483647;
     }
    } while (0);
    i9 = HEAP32[i4 + 32 >> 2] | 0;
    if ((i9 | 0) == 0) {
     i13 = i20;
     break L10;
    }
    i11 = i9 + 4 | 0;
    i9 = i11 | 0;
    i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
    if ((i10 | 0) != 0) {
     HEAP32[i9 >> 2] = i10;
     i13 = i20;
     break L10;
    }
    i10 = i11 - 4 | 0;
    if ((i10 | 0) == 0) {
     i13 = i20;
     break L10;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 31](i10);
    i13 = i20;
    break;
   }
  case 1:
  case 0:
  case 2:
   {
    i10 = HEAP32[i3 + 24 >> 2] | 0;
    i11 = i10 + 44 | 0;
    i9 = HEAP32[i11 >> 2] | 0;
    if ((i9 | 0) == 0) {
     i16 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i10, i3 | 0, 0) | 0;
     i10 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i16 >> 2] | 0) + 8 >> 2] & 15](i16, 32) | 0;
     HEAP32[i11 >> 2] = i10;
     i21 = i10;
    } else {
     i21 = i9;
    }
    i13 = (((((_round(+(+HEAPF32[i21 + 16 >> 2])) | 0) << 1 | 0) / 3 & -1) + 1 | 0) / 2 & -1) + 2 | 0;
    break;
   }
  default:
   {
    i13 = 0;
   }
  }
 } while (0);
 HEAP32[i1 + 76 >> 2] = i13;
 HEAP32[i1 + 80 >> 2] = i13;
 __ZN7WebCore12RenderObject30setPreferredLogicalWidthsDirtyEbNS_15MarkingBehaviorE(i1 | 0, 0, 1);
 __ZN7WebCore16RenderListMarker13updateMarginsEv(i1);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore16RenderListMarker6layoutEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, d21 = +0, i22 = 0, d23 = +0, i24 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 40 | 0;
 i9 = i2 + 48 | 0;
 i10 = i2 + 56 | 0;
 i11 = i10;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i13 = i12;
 i14 = i1 + 96 | 0;
 i15 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i15 | 0) == 0) {
   i16 = 4;
  } else {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i15 >> 2] | 0) + 20 >> 2] & 511](i15) | 0) {
    i16 = 4;
    break;
   }
   __ZN7WebCore16RenderListMarker13updateContentEv(i1);
   __ZN7WebCore16RenderListMarker13updateMarginsEv(i1);
   i17 = HEAP32[i14 >> 2] | 0;
   i18 = i1 | 0;
   i19 = i1 + 36 | 0;
   FUNCTION_TABLE_viiif[HEAP32[(HEAP32[i17 >> 2] | 0) + 24 >> 2] & 1](i7, i17, i18, +HEAPF32[(HEAP32[(HEAP32[i19 >> 2] | 0) + 24 >> 2] | 0) + 80 >> 2]);
   HEAP32[i1 + 52 >> 2] = HEAP32[i7 >> 2];
   i17 = HEAP32[i14 >> 2] | 0;
   FUNCTION_TABLE_viiif[HEAP32[(HEAP32[i17 >> 2] | 0) + 24 >> 2] & 1](i8, i17, i18, +HEAPF32[(HEAP32[(HEAP32[i19 >> 2] | 0) + 24 >> 2] | 0) + 80 >> 2]);
   HEAP32[i1 + 56 >> 2] = HEAP32[i8 + 4 >> 2];
   i20 = HEAP32[i19 >> 2] | 0;
  }
 } while (0);
 do {
  if ((i16 | 0) == 4) {
   __ZNK7WebCore9RenderBox24minPreferredLogicalWidthEv(i9, i1 | 0);
   i8 = HEAP32[i9 >> 2] | 0;
   i14 = i1 + 36 | 0;
   i7 = HEAP32[i14 >> 2] | 0;
   i15 = (HEAP32[i7 + 44 >> 2] | 0) >>> 13 & 3;
   if ((i15 | 0) == 3 | (i15 | 0) == 0) {
    HEAP32[i1 + 52 >> 2] = i8;
   } else {
    HEAP32[i1 + 56 >> 2] = i8;
   }
   i8 = __ZNK7WebCore11RenderStyle11fontMetricsEv(i7) | 0;
   i7 = _round(+(+HEAPF32[i8 + 4 >> 2])) | 0;
   i15 = (_round(+(+HEAPF32[i8 + 8 >> 2])) | 0) + i7 | 0;
   i7 = HEAP32[i14 >> 2] | 0;
   i14 = (HEAP32[i7 + 44 >> 2] | 0) >>> 13 & 3;
   if ((i14 | 0) == 3 | (i14 | 0) == 0) {
    HEAP32[i1 + 56 >> 2] = i15;
    i20 = i7;
    break;
   } else {
    HEAP32[i1 + 52 >> 2] = i15;
    i20 = i7;
    break;
   }
  }
 } while (0);
 i9 = i1 + 36 | 0;
 i16 = i1 + 60 | 0;
 i7 = (HEAP32[i20 + 44 >> 2] | 0) >>> 13 & 3;
 i15 = (HEAP32[i20 + 40 >> 2] | 0) >>> 30 & 1;
 HEAP32[i3 >> 2] = 0;
 __ZN7WebCore15LayoutBoxExtent8setStartENS_11WritingModeENS_13TextDirectionENS_10LayoutUnitE(i16, i7, i15, i3);
 i3 = HEAP32[i9 >> 2] | 0;
 i15 = (HEAP32[i3 + 44 >> 2] | 0) >>> 13 & 3;
 i7 = (HEAP32[i3 + 40 >> 2] | 0) >>> 30 & 1;
 HEAP32[i4 >> 2] = 0;
 __ZN7WebCore15LayoutBoxExtent6setEndENS_11WritingModeENS_13TextDirectionENS_10LayoutUnitE(i16, i15, i7, i4);
 i4 = HEAP32[i9 >> 2] | 0;
 i7 = __ZNK7WebCore9LengthBox5startENS_11WritingModeENS_13TextDirectionE((HEAP32[i4 + 16 >> 2] | 0) + 36 | 0, (HEAP32[i4 + 44 >> 2] | 0) >>> 13 & 3, (HEAP32[i4 + 40 >> 2] | 0) >>> 30 & 1) | 0;
 i4 = HEAP32[i7 >> 2] | 0;
 i15 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i10 >> 2] = i4;
 HEAP32[i10 + 4 >> 2] = i15;
 if ((i4 & 0 | 0) == 0 & (i15 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i11);
 }
 i15 = HEAP32[i9 >> 2] | 0;
 i4 = __ZNK7WebCore9LengthBox3endENS_11WritingModeENS_13TextDirectionE((HEAP32[i15 + 16 >> 2] | 0) + 36 | 0, (HEAP32[i15 + 44 >> 2] | 0) >>> 13 & 3, (HEAP32[i15 + 40 >> 2] | 0) >>> 30 & 1) | 0;
 i15 = HEAP32[i4 >> 2] | 0;
 i7 = HEAP32[i4 + 4 >> 2] | 0;
 HEAP32[i12 >> 2] = i15;
 HEAP32[i12 + 4 >> 2] = i7;
 if ((i15 & 0 | 0) == 0 & (i7 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i13);
 }
 i7 = i11 + 5 | 0;
 if ((HEAP8[i7] | 0) == 3) {
  if ((HEAP8[i11 + 6 | 0] & 1) == 0) {
   d21 = +(HEAP32[i10 >> 2] | 0);
  } else {
   d21 = +HEAPF32[i10 >> 2];
  }
  do {
   if (d21 < +2147483647) {
    if (d21 <= +-2147483648) {
     i22 = -2147483648;
     break;
    }
    i22 = ~~d21;
   } else {
    i22 = 2147483647;
   }
  } while (0);
  i10 = HEAP32[i9 >> 2] | 0;
  i15 = (HEAP32[i10 + 44 >> 2] | 0) >>> 13 & 3;
  i4 = (HEAP32[i10 + 40 >> 2] | 0) >>> 30 & 1;
  HEAP32[i5 >> 2] = i22;
  __ZN7WebCore15LayoutBoxExtent8setStartENS_11WritingModeENS_13TextDirectionENS_10LayoutUnitE(i16, i15, i4, i5);
 }
 i5 = i13 + 5 | 0;
 if ((HEAP8[i5] | 0) == 3) {
  if ((HEAP8[i13 + 6 | 0] & 1) == 0) {
   d23 = +(HEAP32[i12 >> 2] | 0);
  } else {
   d23 = +HEAPF32[i12 >> 2];
  }
  do {
   if (d23 < +2147483647) {
    if (d23 <= +-2147483648) {
     i24 = -2147483648;
     break;
    }
    i24 = ~~d23;
   } else {
    i24 = 2147483647;
   }
  } while (0);
  i12 = HEAP32[i9 >> 2] | 0;
  i9 = (HEAP32[i12 + 44 >> 2] | 0) >>> 13 & 3;
  i4 = (HEAP32[i12 + 40 >> 2] | 0) >>> 30 & 1;
  HEAP32[i6 >> 2] = i24;
  __ZN7WebCore15LayoutBoxExtent6setEndENS_11WritingModeENS_13TextDirectionENS_10LayoutUnitE(i16, i9, i4, i6);
 }
 __ZN7WebCore12RenderObject16clearNeedsLayoutEv(i1 | 0);
 if ((HEAP8[i5] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i13);
 }
 if ((HEAP8[i7] | 0) != 10) {
  STACKTOP = i2;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i11);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore16RenderListMarker13updateMarginsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 40 | 0;
 i9 = i2 + 48 | 0;
 i10 = i2 + 56 | 0;
 i11 = i1 + 36 | 0;
 i12 = __ZNK7WebCore11RenderStyle11fontMetricsEv(HEAP32[i11 >> 2] | 0) | 0;
 do {
  if ((HEAP8[(HEAP32[i1 + 100 >> 2] | 0) + 128 | 0] & 4) == 0) {
   i13 = HEAP32[(HEAP32[i11 >> 2] | 0) + 40 >> 2] | 0;
   if ((i13 & 1024 | 0) != 0) {
    i14 = 3;
    break;
   }
   i15 = HEAP32[i1 + 96 >> 2] | 0;
   if ((i15 | 0) == 0) {
    i16 = 0;
   } else {
    i16 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i15 >> 2] | 0) + 20 >> 2] & 511](i15) | 0) ^ 1;
   }
   if ((i13 & 1073741824 | 0) == 0) {
    do {
     if (i16) {
      i17 = 7;
     } else {
      i13 = (_round(+(+HEAPF32[i12 + 4 >> 2])) | 0) << 1;
      i15 = (i13 | 0) / 3 & -1;
      i18 = (HEAP32[(HEAP32[i11 >> 2] | 0) + 40 >> 2] | 0) >>> 3 & 127;
      if ((i18 | 0) == 80) {
       i17 = 0;
       break;
      } else if ((i18 | 0) == 0 | (i18 | 0) == 1 | (i18 | 0) == 2) {
       __ZNK7WebCore9RenderBox24minPreferredLogicalWidthEv(i7, i1 | 0);
       i17 = i15 + 8 - (HEAP32[i7 >> 2] | 0) | 0;
       break;
      }
      i15 = HEAP32[i1 + 92 >> 2] | 0;
      if ((i15 | 0) == 0) {
       i17 = 0;
       break;
      }
      if ((HEAP32[i15 + 4 >> 2] | 0) == 0) {
       i17 = 0;
       break;
      }
      i17 = (i13 | 0) / 6 & -1;
     }
    } while (0);
    __ZNK7WebCore9RenderBox24minPreferredLogicalWidthEv(i8, i1 | 0);
    i19 = i17;
    i20 = -((HEAP32[i8 >> 2] | 0) + i17 | 0) | 0;
    break;
   }
   do {
    if (i16) {
     __ZNK7WebCore9RenderBox24minPreferredLogicalWidthEv(i4, i1 | 0);
     i21 = -7 - (HEAP32[i4 >> 2] | 0) | 0;
    } else {
     i13 = (_round(+(+HEAPF32[i12 + 4 >> 2])) | 0) << 1;
     i15 = (HEAP32[(HEAP32[i11 >> 2] | 0) + 40 >> 2] | 0) >>> 3 & 127;
     if ((i15 | 0) == 0 | (i15 | 0) == 1 | (i15 | 0) == 2) {
      i21 = ((i13 | 0) / -3 & -1) - 8 | 0;
      break;
     } else if ((i15 | 0) == 80) {
      i21 = 0;
      break;
     }
     i15 = HEAP32[i1 + 92 >> 2] | 0;
     if ((i15 | 0) == 0) {
      i21 = 0;
      break;
     }
     if ((HEAP32[i15 + 4 >> 2] | 0) == 0) {
      i21 = 0;
      break;
     }
     __ZNK7WebCore9RenderBox24minPreferredLogicalWidthEv(i5, i1 | 0);
     i21 = ((i13 | 0) / -6 & -1) - (HEAP32[i5 >> 2] | 0) | 0;
    }
   } while (0);
   __ZNK7WebCore9RenderBox24minPreferredLogicalWidthEv(i6, i1 | 0);
   i19 = -((HEAP32[i6 >> 2] | 0) + i21 | 0) | 0;
   i20 = i21;
  } else {
   i14 = 3;
  }
 } while (0);
 do {
  if ((i14 | 0) == 3) {
   i21 = HEAP32[i1 + 96 >> 2] | 0;
   if ((i21 | 0) != 0) {
    if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i21 >> 2] | 0) + 20 >> 2] & 511](i21) | 0)) {
     i19 = 7;
     i20 = 0;
     break;
    }
   }
   if ((HEAP32[(HEAP32[i11 >> 2] | 0) + 40 >> 2] & 1016) >>> 0 >= 24 >>> 0) {
    i19 = 0;
    i20 = 0;
    break;
   }
   i21 = _round(+(+HEAPF32[i12 + 4 >> 2])) | 0;
   __ZNK7WebCore9RenderBox24minPreferredLogicalWidthEv(i3, i1 | 0);
   i19 = i21 + 1 - (HEAP32[i3 >> 2] | 0) | 0;
   i20 = -1;
  }
 } while (0);
 i3 = HEAP32[i11 >> 2] | 0;
 HEAPF32[i9 >> 2] = +(i20 | 0);
 HEAP8[i9 + 4 | 0] = 0;
 i20 = i9 + 5 | 0;
 HEAP8[i20] = 3;
 HEAP8[i9 + 6 | 0] = 1;
 __ZN7WebCore11RenderStyle14setMarginStartENS_6LengthE(i3, i9);
 if ((HEAP8[i20] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i9);
 }
 i9 = HEAP32[i11 >> 2] | 0;
 HEAPF32[i10 >> 2] = +(i19 | 0);
 HEAP8[i10 + 4 | 0] = 0;
 i19 = i10 + 5 | 0;
 HEAP8[i19] = 3;
 HEAP8[i10 + 6 | 0] = 1;
 __ZN7WebCore11RenderStyle12setMarginEndENS_6LengthE(i9, i10);
 if ((HEAP8[i19] | 0) != 10) {
  STACKTOP = i2;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i10);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore16RenderListMarker13updateContentEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 if ((HEAP32[i1 + 20 >> 2] & 32 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZN3WTF6StringC1EPKc(i3, H_BASE + 3200 | 0);
 i7 = i3 | 0;
 i3 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i8 = i1 + 92 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = i3;
 do {
  if ((i9 | 0) != 0) {
   i3 = i9 | 0;
   i10 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i3 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i9 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i7 = i9 | 0;
   i10 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i7 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i9 = i1 + 96 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i10 | 0) == 0) {
   i11 = HEAP32[i1 + 36 >> 2] | 0;
  } else {
   i7 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 20 >> 2] & 511](i10) | 0;
   i3 = i1 + 36 | 0;
   i12 = HEAP32[i3 >> 2] | 0;
   if (i7) {
    i11 = i12;
    break;
   }
   i7 = (_round(+(+HEAPF32[(__ZNK7WebCore11RenderStyle11fontMetricsEv(i12) | 0) + 4 >> 2])) | 0) / 2 & -1;
   i12 = HEAP32[i9 >> 2] | 0;
   i13 = HEAP32[(HEAP32[i12 >> 2] | 0) + 44 >> 2] | 0;
   HEAP32[i4 >> 2] = i7;
   HEAP32[i4 + 4 >> 2] = i7;
   FUNCTION_TABLE_viiif[i13 & 1](i12, i1 | 0, i4, +HEAPF32[(HEAP32[(HEAP32[i3 >> 2] | 0) + 24 >> 2] | 0) + 80 >> 2]);
   STACKTOP = i2;
   return;
  }
 } while (0);
 i4 = (HEAP32[i11 + 40 >> 2] | 0) >>> 3 & 127;
 switch (i4 | 0) {
 case 1:
 case 0:
 case 2:
  {
   __ZN7WebCore14listMarkerTextENS_14EListStyleTypeEi(i5, i4, 0);
   i11 = i5 | 0;
   i5 = HEAP32[i11 >> 2] | 0;
   HEAP32[i11 >> 2] = 0;
   i11 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = i5;
   if ((i11 | 0) == 0) {
    STACKTOP = i2;
    return;
   }
   i5 = i11 | 0;
   i9 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    STACKTOP = i2;
    return;
   } else {
    HEAP32[i5 >> 2] = i9;
    STACKTOP = i2;
    return;
   }
   break;
  }
 case 22:
 case 68:
 case 69:
 case 34:
 case 37:
 case 39:
 case 5:
 case 71:
 case 6:
 case 7:
 case 8:
 case 75:
 case 41:
 case 42:
 case 4:
 case 3:
 case 10:
 case 43:
 case 45:
 case 40:
 case 46:
 case 61:
 case 65:
 case 36:
 case 35:
 case 38:
 case 44:
 case 51:
 case 53:
 case 55:
 case 59:
 case 63:
 case 57:
 case 74:
 case 11:
 case 12:
 case 48:
 case 47:
 case 70:
 case 76:
 case 78:
 case 13:
 case 77:
 case 79:
 case 9:
 case 15:
 case 30:
 case 72:
 case 29:
 case 14:
 case 31:
 case 49:
 case 27:
 case 16:
 case 17:
 case 18:
 case 19:
 case 20:
 case 50:
 case 21:
 case 52:
 case 54:
 case 23:
 case 25:
 case 24:
 case 56:
 case 58:
 case 60:
 case 62:
 case 64:
 case 32:
 case 73:
 case 66:
 case 26:
 case 33:
 case 67:
 case 28:
  {
   i9 = HEAP32[i1 + 100 >> 2] | 0;
   if ((HEAP8[i9 + 128 | 0] & 2) == 0) {
    __ZNK7WebCore14RenderListItem14updateValueNowEv(i9);
   }
   __ZN7WebCore14listMarkerTextENS_14EListStyleTypeEi(i6, i4, HEAP32[i9 + 124 >> 2] | 0);
   i9 = i6 | 0;
   i6 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = 0;
   i9 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = i6;
   if ((i9 | 0) == 0) {
    STACKTOP = i2;
    return;
   }
   i6 = i9 | 0;
   i8 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    STACKTOP = i2;
    return;
   } else {
    HEAP32[i6 >> 2] = i8;
    STACKTOP = i2;
    return;
   }
   break;
  }
 default:
  {
   STACKTOP = i2;
   return;
  }
 }
}
function __ZN7WebCoreL16toCJKIdeographicERN3WTF13StringBuilderEiPKt(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 200 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 136 | 0;
 if ((i2 | 0) == 0) {
  HEAP16[i4 >> 1] = -26890;
  i7 = HEAP32[i1 + 8 >> 2] | 0;
  do {
   if ((i7 | 0) != 0) {
    i8 = i1 | 0;
    i9 = HEAP32[i8 >> 2] | 0;
    if (i9 >>> 0 >= (HEAP32[i7 + 4 >> 2] | 0) >>> 0) {
     break;
    }
    if ((HEAP32[i1 + 4 >> 2] | 0) != 0) {
     break;
    }
    if ((HEAP8[i1 + 12 | 0] & 1) != 0) {
     break;
    }
    HEAP32[i8 >> 2] = i9 + 1;
    HEAP16[(HEAP32[i1 + 20 >> 2] | 0) + (i9 << 1) >> 1] = -26890;
    STACKTOP = i3;
    return;
   }
  } while (0);
  __ZN3WTF13StringBuilder6appendEPKtj(i1, i4, 1);
  STACKTOP = i3;
  return;
 }
 _memset(i5 | 0, 0, 128) | 0;
 i4 = i2;
 i2 = 0;
 while (1) {
  if ((i2 | 0) >= 4) {
   i10 = 0;
   i11 = 0;
   i12 = 0;
   break;
  }
  i7 = (i4 | 0) % 1e4 & -1;
  i9 = (i4 | 0) / 1e4 & -1;
  i8 = 3 - i2 << 3;
  i13 = i5 + (i8 << 2) | 0;
  if (!((i7 | 0) == 0 | (i2 | 0) == 0)) {
   HEAP32[i5 + ((i8 | 7) << 2) >> 2] = i2;
  }
  HEAP32[i5 + ((i8 | 6) << 2) >> 2] = ((i7 | 0) % 10 & -1) + 7;
  i14 = i4 + 9999 | 0;
  i15 = i14 >>> 0 > 19998 >>> 0;
  do {
   if (i15 | (i7 | 0) > 9) {
    i16 = ((i7 | 0) / 10 & -1 | 0) % 10 & -1;
    HEAP32[i5 + ((i8 | 4) << 2) >> 2] = i16 + 7;
    if ((i16 | 0) == 0) {
     break;
    }
    HEAP32[i5 + ((i8 | 5) << 2) >> 2] = 4;
   }
  } while (0);
  do {
   if (i15 | (i7 | 0) > 99) {
    i16 = ((i7 | 0) / 100 & -1 | 0) % 10 & -1;
    HEAP32[i5 + ((i8 | 2) << 2) >> 2] = i16 + 7;
    if ((i16 | 0) == 0) {
     break;
    }
    HEAP32[i5 + ((i8 | 3) << 2) >> 2] = 5;
   }
  } while (0);
  do {
   if (i15 | (i7 | 0) > 999) {
    HEAP32[i13 >> 2] = ((i7 | 0) / 1e3 & -1) + 7;
    if ((i7 + 999 | 0) >>> 0 <= 1998 >>> 0) {
     break;
    }
    HEAP32[i5 + ((i8 | 1) << 2) >> 2] = 6;
   }
  } while (0);
  if ((i7 | 0) < 20) {
   HEAP32[i5 + ((i8 | 4) << 2) >> 2] = 0;
  }
  if (i14 >>> 0 < 19999 >>> 0) {
   i10 = 0;
   i11 = 0;
   i12 = 0;
   break;
  } else {
   i4 = i9;
   i2 = i2 + 1 | 0;
  }
 }
 while (1) {
  i2 = HEAP32[i5 + (i12 << 2) >> 2] | 0;
  if ((i2 | 0) == 7) {
   if ((i11 | 0) == 7) {
    i17 = 7;
    i18 = i10;
   } else {
    i19 = 26;
   }
  } else if ((i2 | 0) == 0) {
   i17 = i11;
   i18 = i10;
  } else {
   i19 = 26;
  }
  if ((i19 | 0) == 26) {
   i19 = 0;
   HEAP16[i6 + (i10 << 1) >> 1] = HEAP16[H_BASE + 192 + (i2 - 1 << 1) >> 1] | 0;
   i17 = i2;
   i18 = i10 + 1 | 0;
  }
  i2 = i12 + 1 | 0;
  if ((i2 | 0) < 32) {
   i10 = i18;
   i11 = i17;
   i12 = i2;
  } else {
   break;
  }
 }
 __ZN3WTF13StringBuilder6appendEPKtj(i1, i6 | 0, (((i17 | 0) == 7) << 31 >> 31) + i18 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore16RenderListMarker23selectionRectForRepaintEPKNS_22RenderLayerModelObjectEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, d26 = +0, d27 = +0, d28 = +0, i29 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 32 | 0;
 i10 = i5 + 48 | 0;
 i11 = i5 + 56 | 0;
 i12 = i11 | 0;
 i13 = i11;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i15 = i14 | 0;
 i16 = i14;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i18 = i2 | 0;
 do {
  if ((HEAP32[i2 + 20 >> 2] & 234881024 | 0) != 0) {
   i19 = HEAP32[i2 + 84 >> 2] | 0;
   if ((i19 | 0) == 0) {
    break;
   }
   i20 = __ZN7WebCore9InlineBox4rootEv(i19 | 0) | 0;
   __ZNK7WebCore13RootInlineBox12selectionTopEv(i10, i20);
   i19 = (HEAP32[i10 >> 2] | 0) - (HEAP32[i2 + 48 >> 2] | 0) | 0;
   i21 = HEAP32[i2 + 52 >> 2] | 0;
   __ZNK7WebCore13RootInlineBox15selectionBottomEv(i6, i20);
   __ZNK7WebCore13RootInlineBox12selectionTopEv(i7, i20);
   i20 = (HEAP32[i6 >> 2] | 0) - (HEAP32[i7 >> 2] | 0) | 0;
   i22 = (i20 | 0) > 0 ? i20 : 0;
   i20 = i9 | 0;
   HEAP32[i20 >> 2] = 0;
   i23 = i9 + 4 | 0;
   HEAP32[i23 >> 2] = i19;
   i24 = i9 + 8 | 0;
   HEAP32[i24 >> 2] = i21;
   i25 = i9 + 12 | 0;
   HEAP32[i25 >> 2] = i22;
   if (i4) {
    __ZNK7WebCore9RenderBox21computeRectForRepaintEPKNS_22RenderLayerModelObjectERNS_10LayoutRectEb(i2 | 0, i3, i9, 0);
   } else {
    d26 = +(i19 | 0);
    d27 = +(i21 | 0);
    d28 = +d26;
    HEAP32[i15 >> 2] = 0;
    HEAPF32[i15 + 4 >> 2] = d28;
    HEAPF32[i14 + 8 >> 2] = d27;
    HEAPF32[i16 + 12 >> 2] = d26;
    d28 = +(i22 | 0) + d26;
    HEAPF32[i14 + 16 >> 2] = d27;
    HEAPF32[i16 + 20 >> 2] = d28;
    HEAPF32[i14 + 24 >> 2] = +0;
    HEAPF32[i16 + 28 >> 2] = d28;
    __ZNK7WebCore12RenderObject20localToContainerQuadERKNS_9FloatQuadEPKNS_22RenderLayerModelObjectEjPb(i17, i18, i16, i3, 0, 0);
    __ZNK7WebCore9FloatQuad11boundingBoxEv(i8, i17);
    __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i13, i8);
    i22 = HEAP32[i12 + 4 >> 2] | 0;
    i21 = i11 + 8 | 0;
    i19 = HEAP32[i21 >> 2] | 0;
    i29 = HEAP32[i21 + 4 >> 2] | 0;
    HEAP32[i20 >> 2] = HEAP32[i12 >> 2];
    HEAP32[i23 >> 2] = i22;
    HEAP32[i24 >> 2] = i19;
    HEAP32[i25 >> 2] = i29;
   }
   i29 = i1;
   i25 = i9;
   HEAP32[i29 >> 2] = HEAP32[i25 >> 2];
   HEAP32[i29 + 4 >> 2] = HEAP32[i25 + 4 >> 2];
   HEAP32[i29 + 8 >> 2] = HEAP32[i25 + 8 >> 2];
   HEAP32[i29 + 12 >> 2] = HEAP32[i25 + 12 >> 2];
   STACKTOP = i5;
   return;
  }
 } while (0);
 _memset(i1 | 0, 0, 16) | 0;
 STACKTOP = i5;
 return;
}
function __ZN7WebCoreL10toSymbolicItEEvRN3WTF13StringBuilderEiPKT_j(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i2 - 1 | 0;
 i2 = i6 & 3;
 i7 = HEAP16[H_BASE + 1872 + (i2 << 1) >> 1] | 0;
 HEAP16[i5 >> 1] = i7;
 i8 = i1 + 8 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i9 | 0) == 0) {
   i10 = 8;
  } else {
   i11 = i1 | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   if (i12 >>> 0 >= (HEAP32[i9 + 4 >> 2] | 0) >>> 0) {
    i10 = 8;
    break;
   }
   if ((HEAP32[i1 + 4 >> 2] | 0) != 0) {
    i10 = 8;
    break;
   }
   if ((HEAP8[i1 + 12 | 0] & 1) == 0) {
    HEAP32[i11 >> 2] = i12 + 1;
    HEAP16[(HEAP32[i1 + 20 >> 2] | 0) + (i12 << 1) >> 1] = i7;
    break;
   }
   if ((i2 | 0) != 0) {
    i10 = 8;
    break;
   }
   HEAP32[i11 >> 2] = i12 + 1;
   HEAP8[(HEAP32[i1 + 20 >> 2] | 0) + i12 | 0] = i7;
  }
 } while (0);
 if ((i10 | 0) == 8) {
  __ZN3WTF13StringBuilder6appendEPKtj(i1, i5, 1);
 }
 i5 = i6 >>> 2;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = i1 | 0;
 i9 = i1 + 4 | 0;
 i12 = i1 + 12 | 0;
 i11 = i1 + 20 | 0;
 i13 = i7 & 255;
 i14 = i1 + 20 | 0;
 if ((i2 | 0) == 0) {
  i15 = i5;
 } else {
  i2 = i5;
  while (1) {
   i2 = i2 - 1 | 0;
   HEAP16[i4 >> 1] = i7;
   i5 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i5 | 0) == 0) {
     i10 = 25;
    } else {
     i16 = HEAP32[i6 >> 2] | 0;
     if (i16 >>> 0 >= (HEAP32[i5 + 4 >> 2] | 0) >>> 0) {
      i10 = 25;
      break;
     }
     if ((HEAP32[i9 >> 2] | 0) != 0) {
      i10 = 25;
      break;
     }
     if ((HEAP8[i12] & 1) != 0) {
      i10 = 25;
      break;
     }
     HEAP32[i6 >> 2] = i16 + 1;
     HEAP16[(HEAP32[i11 >> 2] | 0) + (i16 << 1) >> 1] = i7;
    }
   } while (0);
   if ((i10 | 0) == 25) {
    i10 = 0;
    __ZN3WTF13StringBuilder6appendEPKtj(i1, i4, 1);
   }
   if ((i2 | 0) == 0) {
    break;
   }
  }
  STACKTOP = i3;
  return;
 }
 while (1) {
  i15 = i15 - 1 | 0;
  HEAP16[i4 >> 1] = i7;
  i2 = HEAP32[i8 >> 2] | 0;
  do {
   if ((i2 | 0) == 0) {
    i10 = 17;
   } else {
    i5 = HEAP32[i6 >> 2] | 0;
    if (i5 >>> 0 >= (HEAP32[i2 + 4 >> 2] | 0) >>> 0) {
     i10 = 17;
     break;
    }
    if ((HEAP32[i9 >> 2] | 0) != 0) {
     i10 = 17;
     break;
    }
    i16 = (HEAP8[i12] & 1) == 0;
    HEAP32[i6 >> 2] = i5 + 1;
    if (i16) {
     HEAP16[(HEAP32[i11 >> 2] | 0) + (i5 << 1) >> 1] = i7;
     break;
    } else {
     HEAP8[(HEAP32[i14 >> 2] | 0) + i5 | 0] = i13;
     break;
    }
   }
  } while (0);
  if ((i10 | 0) == 17) {
   i10 = 0;
   __ZN3WTF13StringBuilder6appendEPKtj(i1, i4, 1);
  }
  if ((i15 | 0) == 0) {
   break;
  }
 }
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore16RenderListMarker6suffixEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i2 + 36 | 0;
 i6 = (HEAP32[(HEAP32[i5 >> 2] | 0) + 40 >> 2] | 0) >>> 3 & 127;
 i7 = HEAP32[i2 + 100 >> 2] | 0;
 if ((HEAP8[i7 + 128 | 0] & 2) == 0) {
  __ZNK7WebCore14RenderListItem14updateValueNowEv(i7);
 }
 i2 = HEAP32[i7 + 124 >> 2] | 0;
 switch (i6 | 0) {
 case 71:
  {
   i8 = (i2 - 1 | 0) >>> 0 > 99999998 >>> 0 ? 3 : 71;
   break;
  }
 case 75:
  {
   i8 = (i2 >> 31 & -72) + 75 | 0;
   break;
  }
 case 74:
  {
   i8 = (i2 - 1 | 0) >>> 0 > 19998 >>> 0 ? 3 : 74;
   break;
  }
 case 70:
  {
   i8 = i2 >>> 0 > 999999 >>> 0 ? 3 : 70;
   break;
  }
 case 27:
 case 28:
  {
   i8 = (i2 - 1 | 0) >>> 0 > 3998 >>> 0 ? 3 : i6;
   break;
  }
 case 67:
 case 33:
 case 66:
 case 73:
 case 32:
 case 64:
 case 62:
 case 60:
 case 58:
 case 56:
 case 54:
 case 52:
 case 50:
 case 49:
 case 31:
 case 29:
 case 72:
 case 30:
 case 79:
 case 77:
 case 78:
 case 76:
 case 47:
 case 48:
 case 69:
 case 57:
 case 63:
 case 59:
 case 34:
 case 37:
 case 39:
 case 68:
 case 41:
 case 42:
 case 43:
 case 45:
 case 40:
 case 46:
 case 61:
 case 65:
 case 36:
 case 35:
 case 38:
 case 44:
 case 51:
 case 53:
 case 55:
  {
   i8 = (i2 | 0) < 1 ? 3 : i6;
   break;
  }
 default:
  {
   i8 = i6;
  }
 }
 switch (i8 | 0) {
 case 71:
 case 5:
 case 7:
 case 6:
 case 8:
 case 75:
 case 41:
 case 42:
 case 4:
 case 3:
 case 10:
 case 74:
 case 11:
 case 12:
 case 48:
 case 47:
 case 70:
 case 76:
 case 78:
 case 13:
 case 77:
 case 79:
 case 9:
 case 15:
 case 30:
 case 72:
 case 29:
 case 14:
 case 31:
 case 49:
 case 27:
 case 16:
 case 17:
 case 18:
 case 19:
 case 20:
 case 21:
 case 23:
 case 25:
 case 24:
 case 32:
 case 73:
 case 66:
 case 26:
 case 33:
 case 67:
 case 28:
 case 22:
  {
   i9 = 46;
   break;
  }
 case 68:
 case 1:
 case 0:
 case 69:
 case 80:
 case 2:
  {
   __ZN3WTF6StringC1EPKc(i1, H_BASE + 32 | 0);
   STACKTOP = i3;
   return;
  }
 case 34:
 case 37:
 case 39:
 case 43:
 case 45:
 case 40:
 case 46:
 case 61:
 case 65:
 case 36:
 case 35:
 case 38:
 case 44:
 case 51:
 case 53:
 case 55:
 case 59:
 case 63:
 case 57:
 case 50:
 case 52:
 case 54:
 case 56:
 case 58:
 case 60:
 case 62:
 case 64:
  {
   i9 = 4966;
   break;
  }
 default:
  {
   i9 = 46;
  }
 }
 i8 = i4 | 0;
 if ((HEAP32[(HEAP32[i5 >> 2] | 0) + 40 >> 2] & 1073741824 | 0) == 0) {
  HEAP16[i8 >> 1] = 32;
  HEAP16[i4 + 2 >> 1] = i9;
 } else {
  HEAP16[i8 >> 1] = i9;
  HEAP16[i4 + 2 >> 1] = 32;
 }
 __ZN3WTF6StringC1EPKtj(i1, i8, 2);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore16RenderListMarker18localSelectionRectEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, d15 = +0, d16 = +0, d17 = +0, i18 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = i2 + 84 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 if ((i11 | 0) == 0) {
  i12 = i2 + 52 | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  i14 = HEAP32[i12 + 4 >> 2] | 0;
  i12 = i1;
  HEAP32[i12 >> 2] = 0;
  HEAP32[i12 + 4 >> 2] = 0;
  i12 = i1 + 8 | 0;
  HEAP32[i12 >> 2] = i13;
  HEAP32[i12 + 4 >> 2] = i14;
  STACKTOP = i3;
  return;
 }
 i14 = __ZN7WebCore9InlineBox4rootEv(i11 | 0) | 0;
 i11 = (HEAP32[(HEAP32[(__ZNK7WebCore13RootInlineBox9blockFlowEv(i14) | 0) + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i11 | 0) == 3 | (i11 | 0) == 1) {
  i11 = HEAP32[i10 >> 2] | 0;
  d15 = +HEAPF32[((HEAP32[i11 + 32 >> 2] & 2048 | 0) == 0 ? i11 + 20 | 0 : i11 + 24 | 0) >> 2];
  d16 = d15 + +__ZNK7WebCore9InlineBox13logicalHeightEv(i11 | 0);
  __ZNK7WebCore13RootInlineBox15selectionBottomEv(i8, i14);
  d17 = d16 - +(HEAP32[i8 >> 2] | 0);
 } else {
  __ZNK7WebCore13RootInlineBox12selectionTopEv(i9, i14);
  i8 = HEAP32[i10 >> 2] | 0;
  d17 = +(HEAP32[i9 >> 2] | 0) - +HEAPF32[((HEAP32[i8 + 32 >> 2] & 2048 | 0) == 0 ? i8 + 20 | 0 : i8 + 24 | 0) >> 2];
 }
 do {
  if (d17 < +2147483647) {
   if (d17 <= +-2147483648) {
    i18 = -2147483648;
    break;
   }
   i18 = ~~d17;
  } else {
   i18 = 2147483647;
  }
 } while (0);
 i8 = (HEAP32[(HEAP32[(__ZNK7WebCore13RootInlineBox9blockFlowEv(i14) | 0) + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i8 | 0) == 3 | (i8 | 0) == 0) {
  i8 = HEAP32[i2 + 52 >> 2] | 0;
  __ZNK7WebCore13RootInlineBox15selectionBottomEv(i4, i14);
  __ZNK7WebCore13RootInlineBox12selectionTopEv(i5, i14);
  i9 = (HEAP32[i4 >> 2] | 0) - (HEAP32[i5 >> 2] | 0) | 0;
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = i18;
  HEAP32[i1 + 8 >> 2] = i8;
  HEAP32[i1 + 12 >> 2] = (i9 | 0) > 0 ? i9 : 0;
  STACKTOP = i3;
  return;
 } else {
  __ZNK7WebCore13RootInlineBox15selectionBottomEv(i6, i14);
  __ZNK7WebCore13RootInlineBox12selectionTopEv(i7, i14);
  i14 = (HEAP32[i6 >> 2] | 0) - (HEAP32[i7 >> 2] | 0) | 0;
  i7 = HEAP32[i2 + 56 >> 2] | 0;
  HEAP32[i1 >> 2] = i18;
  HEAP32[i1 + 4 >> 2] = 0;
  HEAP32[i1 + 8 >> 2] = (i14 | 0) > 0 ? i14 : 0;
  HEAP32[i1 + 12 >> 2] = i7;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore16RenderListMarker14styleDidChangeENS_15StyleDifferenceEPKNS_11RenderStyleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 __ZN7WebCore9RenderBox14styleDidChangeENS_15StyleDifferenceEPKNS_11RenderStyleE(i1 | 0, i2, i3);
 i2 = i1 + 36 | 0;
 do {
  if ((i3 | 0) != 0) {
   if (((HEAP32[i3 + 40 >> 2] ^ HEAP32[(HEAP32[i2 >> 2] | 0) + 40 >> 2]) & 2040 | 0) == 0) {
    break;
   }
   i4 = i1 | 0;
   i5 = i1 + 20 | 0;
   i6 = HEAP32[i5 >> 2] | 0;
   do {
    if ((i6 & 1 | 0) == 0) {
     HEAP32[i5 >> 2] = i6 | 1;
     __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i4, 1, 0);
     if ((HEAP32[i5 >> 2] & 32768 | 0) == 0) {
      break;
     }
     __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i4);
    }
   } while (0);
   __ZN7WebCore12RenderObject30setPreferredLogicalWidthsDirtyEbNS_15MarkingBehaviorE(i4, 1, 1);
  }
 } while (0);
 i3 = i1 | 0;
 i5 = __ZNK7WebCore11RenderStyle14listStyleImageEv(HEAP32[i2 >> 2] | 0) | 0;
 i6 = i1 + 96 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 if ((i1 | 0) == (i5 | 0)) {
  return;
 }
 if ((i1 | 0) != 0) {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 52 >> 2] & 127](i1, i3);
 }
 i1 = __ZNK7WebCore11RenderStyle14listStyleImageEv(HEAP32[i2 >> 2] | 0) | 0;
 if ((i1 | 0) != 0) {
  i2 = i1 + 4 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 }
 i2 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i1;
 if ((i2 | 0) == 0) {
  i7 = i1;
 } else {
  i1 = i2 + 4 | 0;
  i2 = i1 | 0;
  i5 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
  do {
   if ((i5 | 0) == 0) {
    i8 = i1 - 4 | 0;
    if ((i8 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 31](i8);
   } else {
    HEAP32[i2 >> 2] = i5;
   }
  } while (0);
  i7 = HEAP32[i6 >> 2] | 0;
 }
 if ((i7 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i7 >> 2] | 0) + 48 >> 2] & 127](i7, i3);
 return;
}
function __ZN7WebCore7TextRunC2ERKN3WTF6StringEffjNS_13TextDirectionEbbj(i1, i2, d3, d4, i5, i6, i7, i8, i9) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 d4 = +d4;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 var i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i10 = i2 | 0;
 i2 = HEAP32[i10 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i11 = 0;
 } else {
  i11 = HEAP32[i2 + 4 >> 2] | 0;
 }
 HEAP32[i1 + 4 >> 2] = i11;
 i11 = HEAP32[i10 >> 2] | 0;
 if ((i11 | 0) == 0) {
  i12 = 0;
 } else {
  i12 = HEAP32[i11 + 4 >> 2] | 0;
 }
 HEAP32[i1 + 8 >> 2] = i12;
 HEAPF32[i1 + 12 >> 2] = d3;
 HEAPF32[i1 + 16 >> 2] = +1;
 HEAPF32[i1 + 20 >> 2] = d4;
 i12 = i1 + 24 | 0;
 i11 = i6 << 4 & 16 | i5 & 3 | (i7 & 1) << 5 | (i8 & 1) << 6 | HEAP32[i12 >> 2] & -124;
 HEAP32[i12 >> 2] = i11;
 if ((i9 & 1 | 0) == 0) {
  i13 = 0;
 } else {
  i13 = (HEAPU8[__ZN7WebCore7TextRun21s_allowsRoundingHacksE] | 0) << 7 & 128;
 }
 i8 = i11 & -137 | i13;
 HEAP32[i12 >> 2] = i8;
 if ((i9 & 2 | 0) == 0) {
  i14 = 0;
 } else {
  i14 = (HEAPU8[__ZN7WebCore7TextRun21s_allowsRoundingHacksE] | 0) << 8 & 256;
 }
 i9 = i8 & -777 | i14;
 HEAP32[i12 >> 2] = i9;
 HEAP32[i1 + 28 >> 2] = 0;
 HEAP32[i1 + 32 >> 2] = 0;
 i14 = HEAP32[i10 >> 2] | 0;
 if ((i14 | 0) == 0) {
  i15 = 0;
  i16 = i9;
  i17 = i1 | 0;
  i18 = i15;
  HEAP32[i17 >> 2] = i18;
  i19 = i16 & -5;
  HEAP32[i12 >> 2] = i19;
  return;
 }
 if ((HEAP32[i14 + 16 >> 2] & 32 | 0) == 0) {
  i15 = HEAP32[i14 + 8 >> 2] | 0;
  i16 = i9;
  i17 = i1 | 0;
  i18 = i15;
  HEAP32[i17 >> 2] = i18;
  i19 = i16 & -5;
  HEAP32[i12 >> 2] = i19;
  return;
 } else {
  i9 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i14) | 0;
  i15 = i9;
  i16 = HEAP32[i12 >> 2] | 0;
  i17 = i1 | 0;
  i18 = i15;
  HEAP32[i17 >> 2] = i18;
  i19 = i16 & -5;
  HEAP32[i12 >> 2] = i19;
  return;
 }
}
function __ZN7WebCoreL10toSymbolicIhEEvRN3WTF13StringBuilderEiPKT_j(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 HEAP8[i5] = 42;
 i6 = i1 + 8 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i7 | 0) == 0) {
   i8 = 7;
  } else {
   i9 = i1 | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   if (i10 >>> 0 >= (HEAP32[i7 + 4 >> 2] | 0) >>> 0) {
    i8 = 7;
    break;
   }
   if ((HEAP32[i1 + 4 >> 2] | 0) != 0) {
    i8 = 7;
    break;
   }
   i11 = (HEAP8[i1 + 12 | 0] & 1) == 0;
   HEAP32[i9 >> 2] = i10 + 1;
   if (i11) {
    HEAP16[(HEAP32[i1 + 20 >> 2] | 0) + (i10 << 1) >> 1] = 42;
    break;
   } else {
    HEAP8[(HEAP32[i1 + 20 >> 2] | 0) + i10 | 0] = 42;
    break;
   }
  }
 } while (0);
 if ((i8 | 0) == 7) {
  __ZN3WTF13StringBuilder6appendEPKhj(i1, i5, 1);
 }
 i5 = i2 - 1 | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i2 = i1 | 0;
 i7 = i1 + 4 | 0;
 i10 = i1 + 12 | 0;
 i11 = i1 + 20 | 0;
 i9 = i1 + 20 | 0;
 i12 = i5;
 while (1) {
  HEAP8[i4] = 42;
  i5 = HEAP32[i6 >> 2] | 0;
  do {
   if ((i5 | 0) == 0) {
    i8 = 17;
   } else {
    i13 = HEAP32[i2 >> 2] | 0;
    if (i13 >>> 0 >= (HEAP32[i5 + 4 >> 2] | 0) >>> 0) {
     i8 = 17;
     break;
    }
    if ((HEAP32[i7 >> 2] | 0) != 0) {
     i8 = 17;
     break;
    }
    i14 = (HEAP8[i10] & 1) == 0;
    HEAP32[i2 >> 2] = i13 + 1;
    if (i14) {
     HEAP16[(HEAP32[i11 >> 2] | 0) + (i13 << 1) >> 1] = 42;
     break;
    } else {
     HEAP8[(HEAP32[i9 >> 2] | 0) + i13 | 0] = 42;
     break;
    }
   }
  } while (0);
  if ((i8 | 0) == 17) {
   i8 = 0;
   __ZN3WTF13StringBuilder6appendEPKhj(i1, i4, 1);
  }
  i12 = i12 - 1 | 0;
  if ((i12 | 0) == 0) {
   break;
  }
 }
 STACKTOP = i3;
 return;
}
function __ZN7WebCore16RenderListMarker12imageChangedEPKvPKNS_7IntRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 + 96 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 60 >> 2] & 511](i7) | 0) != (i2 | 0)) {
  STACKTOP = i3;
  return;
 }
 i2 = HEAP32[i1 + 52 >> 2] | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = i1 | 0;
 i9 = i1 + 36 | 0;
 FUNCTION_TABLE_viiif[HEAP32[(HEAP32[i7 >> 2] | 0) + 24 >> 2] & 1](i4, i7, i8, +HEAPF32[(HEAP32[(HEAP32[i9 >> 2] | 0) + 24 >> 2] | 0) + 80 >> 2]);
 do {
  if ((i2 | 0) == (HEAP32[i4 >> 2] | 0)) {
   i7 = HEAP32[i1 + 56 >> 2] | 0;
   i10 = HEAP32[i6 >> 2] | 0;
   FUNCTION_TABLE_viiif[HEAP32[(HEAP32[i10 >> 2] | 0) + 24 >> 2] & 1](i5, i10, i8, +HEAPF32[(HEAP32[(HEAP32[i9 >> 2] | 0) + 24 >> 2] | 0) + 80 >> 2]);
   if ((i7 | 0) != (HEAP32[i5 + 4 >> 2] | 0)) {
    break;
   }
   i7 = HEAP32[i6 >> 2] | 0;
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 20 >> 2] & 511](i7) | 0) {
    break;
   }
   __ZNK7WebCore12RenderObject7repaintEb(i1 | 0, 0);
   STACKTOP = i3;
   return;
  }
 } while (0);
 i6 = i1 | 0;
 i5 = i1 + 20 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i1 & 1 | 0) == 0) {
   HEAP32[i5 >> 2] = i1 | 1;
   __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i6, 1, 0);
   if ((HEAP32[i5 >> 2] & 32768 | 0) == 0) {
    break;
   }
   __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i6);
  }
 } while (0);
 __ZN7WebCore12RenderObject30setPreferredLogicalWidthsDirtyEbNS_15MarkingBehaviorE(i6, 1, 1);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore9RenderBox13requiresLayerEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((HEAP32[(HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0) + 692 >> 2] | 0) == (i2 | 0)) {
  i3 = 1;
  return i3 | 0;
 }
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i2 & 25165824 | 0) != 0) {
  i3 = 1;
  return i3 | 0;
 }
 i4 = HEAP32[i1 + 36 >> 2] | 0;
 i1 = HEAP32[i4 + 20 >> 2] | 0;
 if (+HEAPF32[i1 + 4 >> 2] < +1) {
  i3 = 1;
  return i3 | 0;
 }
 i5 = i1 + 116 | 0;
 while (1) {
  if ((HEAP32[i5 + 4 >> 2] | 0) != 0) {
   i3 = 1;
   i6 = 22;
   break;
  }
  i5 = HEAP32[i5 >> 2] | 0;
  if ((i5 | 0) == 0) {
   break;
  }
 }
 if ((i6 | 0) == 22) {
  return i3 | 0;
 }
 if ((HEAP32[(HEAP32[i1 + 164 >> 2] | 0) + 8 >> 2] | 0) != 0) {
  i3 = 1;
  return i3 | 0;
 }
 if ((HEAP32[(HEAP32[i1 + 76 >> 2] | 0) + 12 >> 2] | 0) != 0) {
  i3 = 1;
  return i3 | 0;
 }
 if ((HEAP32[i1 + 296 >> 2] & 4063232 | 0) != 0) {
  i3 = 1;
  return i3 | 0;
 }
 if ((HEAP32[i1 + 212 >> 2] | 0) != 0) {
  i3 = 1;
  return i3 | 0;
 }
 if ((i2 & 196608 | 0) != 0) {
  i3 = 1;
  return i3 | 0;
 }
 if ((HEAP32[i1 + 292 >> 2] & 1024 | 0) != 0) {
  i3 = 1;
  return i3 | 0;
 }
 if ((i2 & 262144 | 0) != 0) {
  i3 = 1;
  return i3 | 0;
 }
 i2 = (HEAP32[i1 + 68 >> 2] | 0) + 32 | 0;
 if ((HEAP8[i2] & 3) != 3) {
  i3 = 1;
  return i3 | 0;
 }
 i1 = (HEAP32[i2 >> 2] | 0) >>> 11 & 3;
 do {
  if ((i1 | 0) != 2) {
   i2 = (HEAP32[i4 + 44 >> 2] | 0) >>> 13 & 3;
   if (((i2 | 0) == 0 | (i2 | 0) == 3) ^ (i1 | 0) == 0) {
    i3 = 1;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 i3 = (HEAP32[(HEAP32[i4 + 4 >> 2] | 0) + 64 >> 2] & 1 | 0) == 0;
 return i3 | 0;
}
function __ZN7WebCoreL20toArmenianUnder10000EibbPt(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i5 = i2 ? 0 : 48;
 i2 = (i1 | 0) / 1e3 & -1;
 do {
  if ((i1 + 999 | 0) >>> 0 > 1998 >>> 0) {
   if ((i1 - 7e3 | 0) >>> 0 < 1e3 >>> 0) {
    HEAP16[i4 >> 1] = i5 + 1362;
    if (!i3) {
     i6 = 1;
     break;
    }
    HEAP16[i4 + 2 >> 1] = 770;
    i6 = 2;
    break;
   } else {
    HEAP16[i4 >> 1] = i2 + (i5 | 1355);
    if (!i3) {
     i6 = 1;
     break;
    }
    HEAP16[i4 + 2 >> 1] = 770;
    i6 = 2;
    break;
   }
  } else {
   i6 = 0;
  }
 } while (0);
 i2 = ((i1 | 0) / 100 & -1 | 0) % 10 & -1;
 do {
  if ((i2 | 0) == 0) {
   i7 = i6;
  } else {
   i8 = i6 + 1 | 0;
   HEAP16[i4 + (i6 << 1) >> 1] = i2 + (i5 | 1346);
   if (!i3) {
    i7 = i8;
    break;
   }
   HEAP16[i4 + (i8 << 1) >> 1] = 770;
   i7 = i6 + 2 | 0;
  }
 } while (0);
 i6 = ((i1 | 0) / 10 & -1 | 0) % 10 & -1;
 do {
  if ((i6 | 0) == 0) {
   i9 = i7;
  } else {
   i2 = i7 + 1 | 0;
   HEAP16[i4 + (i7 << 1) >> 1] = i5 + 1337 + i6;
   if (!i3) {
    i9 = i2;
    break;
   }
   HEAP16[i4 + (i2 << 1) >> 1] = 770;
   i9 = i7 + 2 | 0;
  }
 } while (0);
 i7 = (i1 | 0) % 10 & -1;
 if ((i7 | 0) == 0) {
  i10 = i9;
  return i10 | 0;
 }
 i1 = i9 + 1 | 0;
 HEAP16[i4 + (i9 << 1) >> 1] = i5 + 1328 + i7;
 if (!i3) {
  i10 = i1;
  return i10 | 0;
 }
 HEAP16[i4 + (i1 << 1) >> 1] = 770;
 i10 = i9 + 2 | 0;
 return i10 | 0;
}
function __ZN7WebCoreL7toRomanERN3WTF13StringBuilderEib(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i3 ? H_BASE + 56 : H_BASE + 64;
 i3 = i2;
 i2 = 0;
 i7 = 0;
 while (1) {
  i8 = (i3 | 0) % 10 & -1;
  i9 = (i8 | 0) % 5 & -1;
  if ((i9 - 1 | 0) >>> 0 < 3 >>> 0) {
   i10 = HEAP8[i6 + i2 | 0] | 0;
   i11 = i7;
   i12 = i9;
   while (1) {
    HEAP8[i5 + (14 - i11) | 0] = i10;
    i13 = i12 - 1 | 0;
    if ((i13 | 0) > 0) {
     i11 = i11 + 1 | 0;
     i12 = i13;
    } else {
     break;
    }
   }
   i14 = i7 + i9 | 0;
  } else {
   i14 = i7;
  }
  if ((i8 - 4 | 0) >>> 0 < 5 >>> 0) {
   HEAP8[i5 + (14 - i14) | 0] = HEAP8[i6 + (i2 | 1) | 0] | 0;
   i15 = i14 + 1 | 0;
  } else {
   i15 = i14;
  }
  if ((i8 | 0) == 9) {
   HEAP8[i5 + (14 - i15) | 0] = HEAP8[i6 + (i2 + 2) | 0] | 0;
   i16 = i15 + 1 | 0;
  } else {
   i16 = i15;
  }
  if ((i9 | 0) == 4) {
   HEAP8[i5 + (14 - i16) | 0] = HEAP8[i6 + i2 | 0] | 0;
   i17 = i16 + 1 | 0;
  } else {
   i17 = i16;
  }
  if ((i3 + 9 | 0) >>> 0 > 18 >>> 0) {
   i3 = (i3 | 0) / 10 & -1;
   i2 = i2 + 2 | 0;
   i7 = i17;
  } else {
   break;
  }
 }
 __ZN3WTF13StringBuilder6appendEPKhj(i1, i5 + (15 - i17) | 0, i17);
 STACKTOP = i4;
 return;
}
function __ZN7WebCoreL10toGeorgianERN3WTF13StringBuilderEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 if ((i2 | 0) > 9999) {
  HEAP16[i4 >> 1] = 4341;
  i5 = 1;
 } else {
  i5 = 0;
 }
 i6 = ((i2 | 0) / 1e3 & -1 | 0) % 10 & -1;
 if ((i6 | 0) == 0) {
  i7 = i5;
 } else {
  HEAP16[i4 + (i5 << 1) >> 1] = HEAP16[H_BASE + 96 + (i6 - 1 << 1) >> 1] | 0;
  i7 = i5 + 1 | 0;
 }
 i5 = ((i2 | 0) / 100 & -1 | 0) % 10 & -1;
 if ((i5 | 0) == 0) {
  i8 = i7;
 } else {
  HEAP16[i4 + (i7 << 1) >> 1] = HEAP16[H_BASE + 120 + (i5 - 1 << 1) >> 1] | 0;
  i8 = i7 + 1 | 0;
 }
 i7 = ((i2 | 0) / 10 & -1 | 0) % 10 & -1;
 if ((i7 | 0) == 0) {
  i9 = i8;
 } else {
  HEAP16[i4 + (i8 << 1) >> 1] = HEAP16[H_BASE + 144 + (i7 - 1 << 1) >> 1] | 0;
  i9 = i8 + 1 | 0;
 }
 i8 = (i2 | 0) % 10 & -1;
 if ((i8 | 0) == 0) {
  i10 = i9;
  i11 = i4 | 0;
  __ZN3WTF13StringBuilder6appendEPKtj(i1, i11, i10);
  STACKTOP = i3;
  return;
 }
 HEAP16[i4 + (i9 << 1) >> 1] = HEAP16[H_BASE + 168 + (i8 - 1 << 1) >> 1] | 0;
 i10 = i9 + 1 | 0;
 i11 = i4 | 0;
 __ZN3WTF13StringBuilder6appendEPKtj(i1, i11, i10);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore9RenderBox19contentLogicalWidthEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i10 | 0) == 3 | (i10 | 0) == 0) {
  __ZNK7WebCore9RenderBox11clientWidthEv(i4, i2);
  i10 = i2 | 0;
  i11 = i2;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i11 >> 2] | 0) + 712 >> 2] & 127](i5, i10);
  i12 = (HEAP32[i4 >> 2] | 0) - (HEAP32[i5 >> 2] | 0) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i11 >> 2] | 0) + 716 >> 2] & 127](i6, i10);
  HEAP32[i1 >> 2] = i12 - (HEAP32[i6 >> 2] | 0);
  STACKTOP = i3;
  return;
 } else {
  __ZNK7WebCore9RenderBox12clientHeightEv(i7, i2);
  i6 = i2 | 0;
  i12 = i2;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i12 >> 2] | 0) + 704 >> 2] & 127](i8, i6);
  i2 = (HEAP32[i7 >> 2] | 0) - (HEAP32[i8 >> 2] | 0) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i12 >> 2] | 0) + 708 >> 2] & 127](i9, i6);
  HEAP32[i1 >> 2] = i2 - (HEAP32[i9 >> 2] | 0);
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCoreL17toHebrewUnder1000EiPt(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = (i1 | 0) / 400 & -1;
 if ((i1 | 0) > 399) {
  i4 = (i3 | 0) > 1;
  i5 = 0;
  while (1) {
   i6 = i5 + 1 | 0;
   HEAP16[i2 + (i5 << 1) >> 1] = 1514;
   if ((i6 | 0) < (i3 | 0)) {
    i5 = i6;
   } else {
    break;
   }
  }
  i7 = i4 ? i3 : 1;
 } else {
  i7 = 0;
 }
 i3 = (i1 | 0) % 400 & -1;
 if ((i3 + 99 | 0) >>> 0 > 198 >>> 0) {
  HEAP16[i2 + (i7 << 1) >> 1] = ((i3 | 0) / 100 & -1) + 1510;
  i8 = i7 + 1 | 0;
 } else {
  i8 = i7;
 }
 i7 = (i3 | 0) % 100 & -1;
 if ((i7 - 15 | 0) >>> 0 < 2 >>> 0) {
  HEAP16[i2 + (i8 << 1) >> 1] = 1496;
  HEAP16[i2 + (i8 + 1 << 1) >> 1] = i7 + 1478;
  i9 = i8 + 2 | 0;
  return i9 | 0;
 }
 if ((i7 + 9 | 0) >>> 0 > 18 >>> 0) {
  HEAP16[i2 + (i8 << 1) >> 1] = HEAP16[H_BASE + 72 + (((i7 | 0) / 10 & -1) - 1 << 1) >> 1] | 0;
  i10 = i8 + 1 | 0;
 } else {
  i10 = i8;
 }
 i8 = (i7 | 0) % 10 & -1;
 if ((i8 | 0) == 0) {
  i9 = i10;
  return i9 | 0;
 }
 HEAP16[i2 + (i10 << 1) >> 1] = i8 + 1487;
 i9 = i10 + 1 | 0;
 return i9 | 0;
}
function __ZN7WebCoreL9toNumericIhEEvRN3WTF13StringBuilderEiPKT_j(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i6 = i5 | 0;
 i7 = (i2 | 0) < 0;
 i8 = i7 ? -i2 | 0 : i2;
 HEAP8[i6 + 32 | 0] = HEAP8[i3 + ((i8 >>> 0) % (i4 >>> 0) & -1) | 0] | 0;
 i2 = (i8 >>> 0) / (i4 >>> 0) & -1;
 if ((i2 | 0) == 0) {
  i9 = 1;
 } else {
  i8 = 1;
  i10 = i2;
  while (1) {
   i2 = i8 + 1 | 0;
   HEAP8[i6 + (32 - i8) | 0] = HEAP8[i3 + ((i10 >>> 0) % (i4 >>> 0) & -1) | 0] | 0;
   i11 = (i10 >>> 0) / (i4 >>> 0) & -1;
   if ((i11 | 0) == 0) {
    i9 = i2;
    break;
   } else {
    i8 = i2;
    i10 = i11;
   }
  }
 }
 if (!i7) {
  i12 = i9;
  i13 = 33 - i12 | 0;
  i14 = i6 + i13 | 0;
  __ZN3WTF13StringBuilder6appendEPKhj(i1, i14, i12);
  STACKTOP = i5;
  return;
 }
 HEAP8[i6 + (32 - i9) | 0] = 45;
 i12 = i9 + 1 | 0;
 i13 = 33 - i12 | 0;
 i14 = i6 + i13 | 0;
 __ZN3WTF13StringBuilder6appendEPKhj(i1, i14, i12);
 STACKTOP = i5;
 return;
}
function __ZN7WebCoreL9toNumericItEEvRN3WTF13StringBuilderEiPKT_j(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i5 = i4 | 0;
 i6 = (i2 | 0) < 0;
 i7 = i6 ? -i2 | 0 : i2;
 HEAP16[i5 + 64 >> 1] = HEAP16[i3 + (((i7 >>> 0) % 10 & -1) << 1) >> 1] | 0;
 if (i7 >>> 0 < 10 >>> 0) {
  i8 = 1;
 } else {
  i2 = 1;
  i9 = i7;
  while (1) {
   i7 = (i9 >>> 0) / 10 & -1;
   i10 = i2 + 1 | 0;
   HEAP16[i5 + (32 - i2 << 1) >> 1] = HEAP16[i3 + (((i7 >>> 0) % 10 & -1) << 1) >> 1] | 0;
   if (i9 >>> 0 < 100 >>> 0) {
    i8 = i10;
    break;
   } else {
    i2 = i10;
    i9 = i7;
   }
  }
 }
 if (!i6) {
  i11 = i8;
  i12 = 33 - i11 | 0;
  i13 = i5 + (i12 << 1) | 0;
  __ZN3WTF13StringBuilder6appendEPKtj(i1, i13, i11);
  STACKTOP = i4;
  return;
 }
 HEAP16[i5 + (32 - i8 << 1) >> 1] = 45;
 i11 = i8 + 1 | 0;
 i12 = 33 - i11 | 0;
 i13 = i5 + (i12 << 1) | 0;
 __ZN3WTF13StringBuilder6appendEPKtj(i1, i13, i11);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore16RenderListMarkerD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = H_BASE + 2176;
 i2 = i1 + 96 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 52 >> 2] & 127](i3, i1 | 0);
   i4 = HEAP32[i2 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   i5 = i4 + 4 | 0;
   i4 = i5 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i4 >> 2] = i6;
    break;
   }
   i6 = i5 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
  }
 } while (0);
 i2 = HEAP32[i1 + 92 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i7 = i1 | 0;
  __ZN7WebCore9RenderBoxD2Ev(i7);
  return;
 }
 i3 = i2 | 0;
 i6 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  i7 = i1 | 0;
  __ZN7WebCore9RenderBoxD2Ev(i7);
  return;
 } else {
  HEAP32[i3 >> 2] = i6;
  i7 = i1 | 0;
  __ZN7WebCore9RenderBoxD2Ev(i7);
  return;
 }
}
function __ZN7WebCore16RenderListMarkerD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = H_BASE + 2176;
 i2 = i1 + 96 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 52 >> 2] & 127](i3, i1 | 0);
   i4 = HEAP32[i2 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   i5 = i4 + 4 | 0;
   i4 = i5 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i4 >> 2] = i6;
    break;
   }
   i6 = i5 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
  }
 } while (0);
 i2 = HEAP32[i1 + 92 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i7 = i1 | 0;
  __ZN7WebCore9RenderBoxD2Ev(i7);
  return;
 }
 i3 = i2 | 0;
 i6 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  i7 = i1 | 0;
  __ZN7WebCore9RenderBoxD2Ev(i7);
  return;
 } else {
  HEAP32[i3 >> 2] = i6;
  i7 = i1 | 0;
  __ZN7WebCore9RenderBoxD2Ev(i7);
  return;
 }
}
function __ZN7WebCore16RenderListMarkerD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 HEAP32[i1 >> 2] = H_BASE + 2176;
 i2 = i1 + 96 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 52 >> 2] & 127](i3, i1 | 0);
   i4 = HEAP32[i2 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   i5 = i4 + 4 | 0;
   i4 = i5 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i4 >> 2] = i6;
    break;
   }
   i6 = i5 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
  }
 } while (0);
 i2 = HEAP32[i1 + 92 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i6 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i6;
    break;
   }
  }
 } while (0);
 __ZN7WebCore9RenderBoxD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZNK7WebCore20RenderBoxModelObject12paddingStartEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4;
 i6 = HEAP32[i2 + 36 >> 2] | 0;
 i7 = __ZNK7WebCore9LengthBox5startENS_11WritingModeENS_13TextDirectionE((HEAP32[i6 + 16 >> 2] | 0) + 68 | 0, (HEAP32[i6 + 44 >> 2] | 0) >>> 13 & 3, (HEAP32[i6 + 40 >> 2] | 0) >>> 30 & 1) | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 i8 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i6;
 HEAP32[i4 + 4 >> 2] = i8;
 if ((i6 & 0 | 0) == 0 & (i8 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i5);
 }
 __ZNK7WebCore20RenderBoxModelObject18computedCSSPaddingENS_6LengthE(i1, i2, i5);
 if ((HEAP8[i5 + 5 | 0] | 0) != 10) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i5);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore20RenderBoxModelObject10paddingEndEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4;
 i6 = HEAP32[i2 + 36 >> 2] | 0;
 i7 = __ZNK7WebCore9LengthBox3endENS_11WritingModeENS_13TextDirectionE((HEAP32[i6 + 16 >> 2] | 0) + 68 | 0, (HEAP32[i6 + 44 >> 2] | 0) >>> 13 & 3, (HEAP32[i6 + 40 >> 2] | 0) >>> 30 & 1) | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 i8 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i6;
 HEAP32[i4 + 4 >> 2] = i8;
 if ((i6 & 0 | 0) == 0 & (i8 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i5);
 }
 __ZNK7WebCore20RenderBoxModelObject18computedCSSPaddingENS_6LengthE(i1, i2, i5);
 if ((HEAP8[i5 + 5 | 0] | 0) != 10) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i5);
 STACKTOP = i3;
 return;
}
function __ZN7WebCoreL12toAlphabeticItEEvRN3WTF13StringBuilderEiPKT_j(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i6 = i5 | 0;
 i7 = i2 - 1 | 0;
 HEAP16[i6 + 64 >> 1] = HEAP16[i3 + (((i7 >>> 0) % (i4 >>> 0) & -1) << 1) >> 1] | 0;
 i2 = (i7 >>> 0) / (i4 >>> 0) & -1;
 if ((i2 | 0) == 0) {
  i8 = 1;
 } else {
  i7 = 1;
  i9 = i2;
  while (1) {
   i2 = i9 - 1 | 0;
   i10 = i7 + 1 | 0;
   HEAP16[i6 + (32 - i7 << 1) >> 1] = HEAP16[i3 + (((i2 >>> 0) % (i4 >>> 0) & -1) << 1) >> 1] | 0;
   i11 = (i2 >>> 0) / (i4 >>> 0) & -1;
   if ((i11 | 0) == 0) {
    i8 = i10;
    break;
   } else {
    i7 = i10;
    i9 = i11;
   }
  }
 }
 __ZN3WTF13StringBuilder6appendEPKtj(i1, i6 + (33 - i8 << 1) | 0, i8);
 STACKTOP = i5;
 return;
}
function __ZNK7WebCore20RenderBoxModelObject13paddingBeforeEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4;
 i6 = HEAP32[i2 + 36 >> 2] | 0;
 i7 = __ZNK7WebCore9LengthBox6beforeENS_11WritingModeE((HEAP32[i6 + 16 >> 2] | 0) + 68 | 0, (HEAP32[i6 + 44 >> 2] | 0) >>> 13 & 3) | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 i8 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i6;
 HEAP32[i4 + 4 >> 2] = i8;
 if ((i6 & 0 | 0) == 0 & (i8 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i5);
 }
 __ZNK7WebCore20RenderBoxModelObject18computedCSSPaddingENS_6LengthE(i1, i2, i5);
 if ((HEAP8[i5 + 5 | 0] | 0) != 10) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i5);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore20RenderBoxModelObject12paddingAfterEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4;
 i6 = HEAP32[i2 + 36 >> 2] | 0;
 i7 = __ZNK7WebCore9LengthBox5afterENS_11WritingModeE((HEAP32[i6 + 16 >> 2] | 0) + 68 | 0, (HEAP32[i6 + 44 >> 2] | 0) >>> 13 & 3) | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 i8 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i6;
 HEAP32[i4 + 4 >> 2] = i8;
 if ((i6 & 0 | 0) == 0 & (i8 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i5);
 }
 __ZNK7WebCore20RenderBoxModelObject18computedCSSPaddingENS_6LengthE(i1, i2, i5);
 if ((HEAP8[i5 + 5 | 0] | 0) != 10) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i5);
 STACKTOP = i3;
 return;
}
function __ZN7WebCoreL12toAlphabeticIhEEvRN3WTF13StringBuilderEiPKT_j(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i6 = i5 | 0;
 i7 = i2 - 1 | 0;
 HEAP8[i6 + 32 | 0] = HEAP8[i3 + ((i7 >>> 0) % (i4 >>> 0) & -1) | 0] | 0;
 i2 = (i7 >>> 0) / (i4 >>> 0) & -1;
 if ((i2 | 0) == 0) {
  i8 = 1;
 } else {
  i7 = 1;
  i9 = i2;
  while (1) {
   i2 = i9 - 1 | 0;
   i10 = i7 + 1 | 0;
   HEAP8[i6 + (32 - i7) | 0] = HEAP8[i3 + ((i2 >>> 0) % (i4 >>> 0) & -1) | 0] | 0;
   i11 = (i2 >>> 0) / (i4 >>> 0) & -1;
   if ((i11 | 0) == 0) {
    i8 = i10;
    break;
   } else {
    i7 = i10;
    i9 = i11;
   }
  }
 }
 __ZN3WTF13StringBuilder6appendEPKhj(i1, i6 + (33 - i8) | 0, i8);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore16RenderListMarkerC2ERNS_14RenderListItemEN3WTF7PassRefINS_11RenderStyleEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 i5 = i4 | 0;
 i6 = HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i3 >> 2];
 __ZN7WebCore9RenderBoxC2ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEEj(i1 | 0, i6, i5, 0);
 HEAP32[i1 >> 2] = H_BASE + 2176;
 HEAP32[i1 + 92 >> 2] = 0;
 HEAP32[i1 + 96 >> 2] = 0;
 HEAP32[i1 + 100 >> 2] = i2;
 i2 = i1 + 20 | 0;
 HEAP32[i2 >> 2] = HEAP32[i2 >> 2] | 3072;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore16RenderListMarkerC1ERNS_14RenderListItemEN3WTF7PassRefINS_11RenderStyleEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 i5 = i4 | 0;
 i6 = HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i3 >> 2];
 __ZN7WebCore9RenderBoxC2ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEEj(i1 | 0, i6, i5, 0);
 HEAP32[i1 >> 2] = H_BASE + 2176;
 HEAP32[i1 + 92 >> 2] = 0;
 HEAP32[i1 + 96 >> 2] = 0;
 HEAP32[i1 + 100 >> 2] = i2;
 i2 = i1 + 20 | 0;
 HEAP32[i2 >> 2] = HEAP32[i2 >> 2] | 3072;
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore16RenderListMarker16baselinePositionENS_12FontBaselineEbNS_17LineDirectionModeENS_16LinePositionModeE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0;
 i6 = HEAP32[i1 + 96 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 20 >> 2] & 511](i6) | 0) {
    break;
   }
   i7 = __ZNK7WebCore9RenderBox16baselinePositionENS_12FontBaselineEbNS_17LineDirectionModeENS_16LinePositionModeE(i1 | 0, i2, i3, i4, i5) | 0;
   return i7 | 0;
  }
 } while (0);
 i7 = __ZNK7WebCore11RenderBlock16baselinePositionENS_12FontBaselineEbNS_17LineDirectionModeENS_16LinePositionModeE(HEAP32[i1 + 100 >> 2] | 0, i2, i3, i4, 1) | 0;
 return i7 | 0;
}
function __ZNK7WebCore20RenderBoxModelObject13paddingBottomEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4;
 i6 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 16 >> 2] | 0) + 92 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i7;
 HEAP32[i4 + 4 >> 2] = i8;
 if ((i7 & 0 | 0) == 0 & (i8 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i5);
 }
 __ZNK7WebCore20RenderBoxModelObject18computedCSSPaddingENS_6LengthE(i1, i2, i5);
 if ((HEAP8[i5 + 5 | 0] | 0) != 10) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i5);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore20RenderBoxModelObject12paddingRightEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4;
 i6 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 16 >> 2] | 0) + 76 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i7;
 HEAP32[i4 + 4 >> 2] = i8;
 if ((i7 & 0 | 0) == 0 & (i8 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i5);
 }
 __ZNK7WebCore20RenderBoxModelObject18computedCSSPaddingENS_6LengthE(i1, i2, i5);
 if ((HEAP8[i5 + 5 | 0] | 0) != 10) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i5);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore20RenderBoxModelObject11paddingLeftEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4;
 i6 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 16 >> 2] | 0) + 68 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i7;
 HEAP32[i4 + 4 >> 2] = i8;
 if ((i7 & 0 | 0) == 0 & (i8 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i5);
 }
 __ZNK7WebCore20RenderBoxModelObject18computedCSSPaddingENS_6LengthE(i1, i2, i5);
 if ((HEAP8[i5 + 5 | 0] | 0) != 10) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i5);
 STACKTOP = i3;
 return;
}
function __ZN7WebCoreL8toHebrewERN3WTF13StringBuilderEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF13StringBuilder6appendEPKtj(i1, H_BASE + 48 | 0, 3);
  STACKTOP = i3;
  return;
 }
 if ((i2 | 0) < 1e3) {
  i5 = 0;
  i6 = i2;
  i7 = i4 | 0;
 } else {
  i8 = i4 | 0;
  i9 = __ZN7WebCoreL17toHebrewUnder1000EiPt((i2 | 0) / 1e3 & -1, i8) | 0;
  HEAP16[i4 + (i9 << 1) >> 1] = 39;
  i5 = i9 + 1 | 0;
  i6 = (i2 | 0) % 1e3 & -1;
  i7 = i8;
 }
 __ZN3WTF13StringBuilder6appendEPKtj(i1, i7, (__ZN7WebCoreL17toHebrewUnder1000EiPt(i6, i4 + (i5 << 1) | 0) | 0) + i5 | 0);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore20RenderBoxModelObject10paddingTopEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4;
 i6 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 16 >> 2] | 0) + 84 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i7;
 HEAP32[i4 + 4 >> 2] = i8;
 if ((i7 & 0 | 0) == 0 & (i8 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i5);
 }
 __ZNK7WebCore20RenderBoxModelObject18computedCSSPaddingENS_6LengthE(i1, i2, i5);
 if ((HEAP8[i5 + 5 | 0] | 0) != 10) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i5);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore16RenderListMarker10lineHeightEbNS_17LineDirectionModeENS_16LinePositionModeE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0;
 i6 = HEAP32[i2 + 96 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 20 >> 2] & 511](i6) | 0) {
    break;
   }
   __ZNK7WebCore9RenderBox10lineHeightEbNS_17LineDirectionModeENS_16LinePositionModeE(i1, i2 | 0, i3, i4, i5);
   return;
  }
 } while (0);
 __ZNK7WebCore11RenderBlock10lineHeightEbNS_17LineDirectionModeENS_16LinePositionModeE(i1, HEAP32[i2 + 100 >> 2] | 0, i3, i4, 1);
 return;
}
function __ZNK7WebCore9RenderBox18visualOverflowRectEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = HEAP32[i2 + 88 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = i2 + 52 | 0;
  i2 = HEAP32[i4 >> 2] | 0;
  i5 = HEAP32[i4 + 4 >> 2] | 0;
  i4 = i1;
  HEAP32[i4 >> 2] = 0;
  HEAP32[i4 + 4 >> 2] = 0;
  i4 = i1 + 8 | 0;
  HEAP32[i4 >> 2] = i2;
  HEAP32[i4 + 4 >> 2] = i5;
  return;
 } else {
  i5 = i1;
  i1 = i3 + 20 | 0;
  HEAP32[i5 >> 2] = HEAP32[i1 >> 2];
  HEAP32[i5 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
  HEAP32[i5 + 8 >> 2] = HEAP32[i1 + 8 >> 2];
  HEAP32[i5 + 12 >> 2] = HEAP32[i1 + 12 >> 2];
  return;
 }
}
function __ZN7WebCore16RenderListMarker17setSelectionStateENS_12RenderObject14SelectionStateE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 __ZN7WebCore20RenderBoxModelObject17setSelectionStateENS_12RenderObject14SelectionStateE(i1 | 0, i2);
 i3 = i1 + 84 | 0;
 if ((HEAP32[i3 >> 2] | 0) == 0) {
  return;
 }
 if (!(__ZN7WebCore12RenderObject33canUpdateSelectionOnRootLineBoxesEv(i1 | 0) | 0)) {
  return;
 }
 i1 = (__ZN7WebCore9InlineBox4rootEv(HEAP32[i3 >> 2] | 0) | 0) + 32 | 0;
 HEAP32[i1 >> 2] = HEAP32[i1 >> 2] & -8193 | ((i2 | 0) != 0) << 13;
 return;
}
function _memset(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = i1 + i3 | 0;
 if ((i3 | 0) >= 20) {
  i2 = i2 & 255;
  i5 = i1 & 3;
  i6 = i2 | i2 << 8 | i2 << 16 | i2 << 24;
  i7 = i4 & ~3;
  if (i5) {
   i5 = i1 + 4 - i5 | 0;
   while ((i1 | 0) < (i5 | 0)) {
    HEAP8[i1] = i2;
    i1 = i1 + 1 | 0;
   }
  }
  while ((i1 | 0) < (i7 | 0)) {
   HEAP32[i1 >> 2] = i6;
   i1 = i1 + 4 | 0;
  }
 }
 while ((i1 | 0) < (i4 | 0)) {
  HEAP8[i1] = i2;
  i1 = i1 + 1 | 0;
 }
 return i1 - i3 | 0;
}
function _memcpy(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = i1 | 0;
 if ((i1 & 3) == (i2 & 3)) {
  while (i1 & 3) {
   if ((i3 | 0) == 0) return i4 | 0;
   HEAP8[i1] = HEAP8[i2] | 0;
   i1 = i1 + 1 | 0;
   i2 = i2 + 1 | 0;
   i3 = i3 - 1 | 0;
  }
  while ((i3 | 0) >= 4) {
   HEAP32[i1 >> 2] = HEAP32[i2 >> 2];
   i1 = i1 + 4 | 0;
   i2 = i2 + 4 | 0;
   i3 = i3 - 4 | 0;
  }
 }
 while ((i3 | 0) > 0) {
  HEAP8[i1] = HEAP8[i2] | 0;
  i1 = i1 + 1 | 0;
  i2 = i2 + 1 | 0;
  i3 = i3 - 1 | 0;
 }
 return i4 | 0;
}
function __ZN7WebCoreL10toArmenianERN3WTF13StringBuilderEib(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i5 = i4 | 0;
 i6 = i5 | 0;
 i7 = __ZN7WebCoreL20toArmenianUnder10000EibbPt((i2 | 0) / 1e4 & -1, i3, 1, i6) | 0;
 __ZN3WTF13StringBuilder6appendEPKtj(i1, i6, (__ZN7WebCoreL20toArmenianUnder10000EibbPt((i2 | 0) % 1e4 & -1, i3, 0, i5 + (i7 << 1) | 0) | 0) + i7 | 0);
 STACKTOP = i4;
 return;
}
function iiiiiii___ZN7WebCore9RenderBox11nodeAtPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE__wrapper(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 return __ZN7WebCore9RenderBox11nodeAtPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0) | 0;
}
function __ZN7WebCore16RenderListMarker15createInlineBoxEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 __ZN7WebCore9RenderBox15createInlineBoxEv(i1, i2 | 0);
 i3 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[i2 + 96 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i4 = 131072;
 } else {
  i4 = ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 511](i1) | 0) & 1) << 17;
 }
 i1 = i3 + 32 | 0;
 HEAP32[i1 >> 2] = HEAP32[i1 >> 2] & -131073 | i4;
 return;
}
function viiiiii___ZN7WebCore9RenderBox16overflowClipRectERKNS_11LayoutPointEPNS_12RenderRegionENS_29OverlayScrollbarSizeRelevancyENS_10PaintPhaseE__wrapper(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 __ZN7WebCore9RenderBox16overflowClipRectERKNS_11LayoutPointEPNS_12RenderRegionENS_29OverlayScrollbarSizeRelevancyENS_10PaintPhaseE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
}
function copyTempDouble(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
 HEAP8[tempDoublePtr + 4 | 0] = HEAP8[i1 + 4 | 0];
 HEAP8[tempDoublePtr + 5 | 0] = HEAP8[i1 + 5 | 0];
 HEAP8[tempDoublePtr + 6 | 0] = HEAP8[i1 + 6 | 0];
 HEAP8[tempDoublePtr + 7 | 0] = HEAP8[i1 + 7 | 0];
}
function __ZNK7WebCore20RenderBoxModelObject12borderBottomEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 16 >> 2] | 0;
 i1 = HEAP32[i2 + 128 >> 2] | 0;
 do {
  if ((HEAP32[(HEAP32[i2 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0) {
   if ((i1 & 1879048192) >>> 0 < 268435456 >>> 0) {
    i3 = 0;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 i3 = i1 >>> 1 & 67108863;
 return i3 | 0;
}
function __ZNK7WebCore20RenderBoxModelObject11borderRightEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 16 >> 2] | 0;
 i1 = HEAP32[i2 + 112 >> 2] | 0;
 do {
  if ((HEAP32[(HEAP32[i2 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0) {
   if ((i1 & 1879048192) >>> 0 < 268435456 >>> 0) {
    i3 = 0;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 i3 = i1 >>> 1 & 67108863;
 return i3 | 0;
}
function __ZNK7WebCore20RenderBoxModelObject10borderLeftEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 16 >> 2] | 0;
 i1 = HEAP32[i2 + 104 >> 2] | 0;
 do {
  if ((HEAP32[(HEAP32[i2 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0) {
   if ((i1 & 1879048192) >>> 0 < 268435456 >>> 0) {
    i3 = 0;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 i3 = i1 >>> 1 & 67108863;
 return i3 | 0;
}
function __ZNK7WebCore20RenderBoxModelObject9borderTopEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 16 >> 2] | 0;
 i1 = HEAP32[i2 + 120 >> 2] | 0;
 do {
  if ((HEAP32[(HEAP32[i2 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0) {
   if ((i1 & 1879048192) >>> 0 < 268435456 >>> 0) {
    i3 = 0;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 i3 = i1 >>> 1 & 67108863;
 return i3 | 0;
}
function viiii___ZN7WebCore9RenderBox17addFocusRingRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore9RenderBox17addFocusRingRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function iiiiii___ZN7WebCore12RenderObject16nodeAtFloatPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_10FloatPointENS_13HitTestActionE__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return __ZN7WebCore12RenderObject16nodeAtFloatPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_10FloatPointENS_13HitTestActionE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
}
function __ZNK7WebCore9RenderBox11marginStartEPKNS_11RenderStyleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 if ((i3 | 0) == 0) {
  i4 = HEAP32[i2 + 36 >> 2] | 0;
 } else {
  i4 = i3;
 }
 __ZNK7WebCore15LayoutBoxExtent5startENS_11WritingModeENS_13TextDirectionE(i1, i2 + 60 | 0, (HEAP32[i4 + 44 >> 2] | 0) >>> 13 & 3, (HEAP32[i4 + 40 >> 2] | 0) >>> 30 & 1);
 return;
}
function __ZNK7WebCore9RenderBox9marginEndEPKNS_11RenderStyleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 if ((i3 | 0) == 0) {
  i4 = HEAP32[i2 + 36 >> 2] | 0;
 } else {
  i4 = i3;
 }
 __ZNK7WebCore15LayoutBoxExtent3endENS_11WritingModeENS_13TextDirectionE(i1, i2 + 60 | 0, (HEAP32[i4 + 44 >> 2] | 0) >>> 13 & 3, (HEAP32[i4 + 40 >> 2] | 0) >>> 30 & 1);
 return;
}
function iiiifi___ZN7WebCore9RenderBox13logicalScrollENS_22ScrollLogicalDirectionENS_17ScrollGranularityEfPPNS_7ElementE__wrapper(i1, i2, i3, d4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 return __ZN7WebCore9RenderBox13logicalScrollENS_22ScrollLogicalDirectionENS_17ScrollGranularityEfPPNS_7ElementE(i1 | 0, i2 | 0, i3 | 0, +d4, i5 | 0) | 0;
}
function iiii___ZNK7WebCore20RenderBoxModelObject36boxShadowShouldBeAppliedToBackgroundENS_24BackgroundBleedAvoidanceEPNS_13InlineFlowBoxE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return __ZNK7WebCore20RenderBoxModelObject36boxShadowShouldBeAppliedToBackgroundENS_24BackgroundBleedAvoidanceEPNS_13InlineFlowBoxE(i1 | 0, i2 | 0, i3 | 0) | 0;
}
function viiiii___ZNK7WebCore9RenderBox19mapLocalToContainerEPKNS_22RenderLayerModelObjectERNS_14TransformStateEjPb__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZNK7WebCore9RenderBox19mapLocalToContainerEPKNS_22RenderLayerModelObjectERNS_14TransformStateEjPb(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function iiiifi___ZN7WebCore9RenderBox6scrollENS_15ScrollDirectionENS_17ScrollGranularityEfPPNS_7ElementE__wrapper(i1, i2, i3, d4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 return __ZN7WebCore9RenderBox6scrollENS_15ScrollDirectionENS_17ScrollGranularityEfPPNS_7ElementE(i1 | 0, i2 | 0, i3 | 0, +d4, i5 | 0) | 0;
}
function viiii___ZNK7WebCore9RenderBox23outlineBoundsForRepaintEPKNS_22RenderLayerModelObjectEPKNS_17RenderGeometryMapE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZNK7WebCore9RenderBox23outlineBoundsForRepaintEPKNS_22RenderLayerModelObjectEPKNS_17RenderGeometryMapE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function viiii___ZNK7WebCore12RenderObject26computeFloatRectForRepaintEPKNS_22RenderLayerModelObjectERNS_9FloatRectEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZNK7WebCore12RenderObject26computeFloatRectForRepaintEPKNS_22RenderLayerModelObjectERNS_9FloatRectEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function __ZNK7WebCore9RenderBox12marginBeforeEPKNS_11RenderStyleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 if ((i3 | 0) == 0) {
  i4 = HEAP32[i2 + 36 >> 2] | 0;
 } else {
  i4 = i3;
 }
 __ZNK7WebCore15LayoutBoxExtent6beforeENS_11WritingModeE(i1, i2 + 60 | 0, (HEAP32[i4 + 44 >> 2] | 0) >>> 13 & 3);
 return;
}
function viiii___ZNK7WebCore12RenderObject25rectWithOutlineForRepaintEPKNS_22RenderLayerModelObjectENS_10LayoutUnitE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZNK7WebCore12RenderObject25rectWithOutlineForRepaintEPKNS_22RenderLayerModelObjectENS_10LayoutUnitE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function __ZNK7WebCore9RenderBox11marginAfterEPKNS_11RenderStyleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 if ((i3 | 0) == 0) {
  i4 = HEAP32[i2 + 36 >> 2] | 0;
 } else {
  i4 = i3;
 }
 __ZNK7WebCore15LayoutBoxExtent5afterENS_11WritingModeE(i1, i2 + 60 | 0, (HEAP32[i4 + 44 >> 2] | 0) >>> 13 & 3);
 return;
}
function viiii___ZNK7WebCore9RenderBox20computeLogicalHeightENS_10LayoutUnitES1_RNS0_27LogicalExtentComputedValuesE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZNK7WebCore9RenderBox20computeLogicalHeightENS_10LayoutUnitES1_RNS0_27LogicalExtentComputedValuesE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function __ZN7WebCore9RenderBox30overflowClipRectForChildLayersERKNS_11LayoutPointEPNS_12RenderRegionENS_29OverlayScrollbarSizeRelevancyE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiiiii[HEAP32[(HEAP32[i2 >> 2] | 0) + 936 >> 2] & 3](i1, i2, i3, i4, i5, 0);
 return;
}
function viiiii___ZNK7WebCore9RenderBox19offsetFromContainerEPNS_12RenderObjectERKNS_11LayoutPointEPb__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZNK7WebCore9RenderBox19offsetFromContainerEPNS_12RenderObjectERKNS_11LayoutPointEPb(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function viii___ZNK7WebCore9RenderBox13absoluteRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore9RenderBox13absoluteRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointE(i1 | 0, i2 | 0, i3 | 0);
}
function __ZNK7WebCore9RenderBox29frameRectForStickyPositioningEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1;
 i1 = i2 + 44 | 0;
 HEAP32[i3 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i3 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 HEAP32[i3 + 8 >> 2] = HEAP32[i1 + 8 >> 2];
 HEAP32[i3 + 12 >> 2] = HEAP32[i1 + 12 >> 2];
 return;
}
function viiii___ZNK7WebCore9RenderBox21computeRectForRepaintEPKNS_22RenderLayerModelObjectERNS_10LayoutRectEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZNK7WebCore9RenderBox21computeRectForRepaintEPKNS_22RenderLayerModelObjectERNS_10LayoutRectEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function iiii___ZNK7WebCore9RenderBox22pushMappingToContainerEPKNS_22RenderLayerModelObjectERNS_17RenderGeometryMapE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return __ZNK7WebCore9RenderBox22pushMappingToContainerEPKNS_22RenderLayerModelObjectERNS_17RenderGeometryMapE(i1 | 0, i2 | 0, i3 | 0) | 0;
}
function vii___ZN7WebCore12RenderObject19addAnnotatedRegionsERN3WTF6VectorINS_20AnnotatedRegionValueELj0ENS1_15CrashOnOverflowEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore12RenderObject19addAnnotatedRegionsERN3WTF6VectorINS_20AnnotatedRegionValueELj0ENS1_15CrashOnOverflowEEE(i1 | 0, i2 | 0);
}
function __ZNK7WebCore9RenderBox17borderBoundingBoxEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = HEAP32[i2 + 52 >> 2] | 0;
 i4 = HEAP32[i2 + 56 >> 2] | 0;
 i2 = i1;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i2 + 4 >> 2] = 0;
 i2 = i1 + 8 | 0;
 HEAP32[i2 >> 2] = i3;
 HEAP32[i2 + 4 >> 2] = i4;
 return;
}
function viiiii___ZN7WebCore9RenderBox14localCaretRectEPNS_9InlineBoxEiPNS_10LayoutUnitE__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZN7WebCore9RenderBox14localCaretRectEPNS_9InlineBoxEiPNS_10LayoutUnitE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function viii___ZNK7WebCore9RenderBox13absoluteQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEEPb__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore9RenderBox13absoluteQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEEPb(i1 | 0, i2 | 0, i3 | 0);
}
function vii___ZN7WebCore12RenderObject22absoluteFocusRingQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore12RenderObject22absoluteFocusRingQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEE(i1 | 0, i2 | 0);
}
function __ZNK7WebCore12RenderObject22outlineStyleForRepaintEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP32[i1 + 20 >> 2] & 768 | 0) == 256) {
  i2 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0;
  return i2 | 0;
 } else {
  i2 = HEAP32[i1 + 36 >> 2] | 0;
  return i2 | 0;
 }
 return 0;
}
function viii___ZN7WebCore12RenderObject19updateHitTestResultERNS_13HitTestResultERKNS_11LayoutPointE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore12RenderObject19updateHitTestResultERNS_13HitTestResultERKNS_11LayoutPointE(i1 | 0, i2 | 0, i3 | 0);
}
function __ZNK7WebCore9RenderBox27shouldComputeSizeAsReplacedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP32[i1 + 20 >> 2] & 2048 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 96 >> 2] & 511](i1 | 0) | 0) ^ 1;
 return i2 | 0;
}
function __ZNK7WebCore16RenderListMarker7isImageEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 96 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 511](i2) | 0) ^ 1;
 return i3 | 0;
}
function viii___ZNK7WebCore9RenderBox29clippedOverflowRectForRepaintEPKNS_22RenderLayerModelObjectE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore9RenderBox29clippedOverflowRectForRepaintEPKNS_22RenderLayerModelObjectE(i1 | 0, i2 | 0, i3 | 0);
}
function iiii___ZNK7WebCore9RenderBox33foregroundIsKnownToBeOpaqueInRectERKNS_10LayoutRectEj__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return __ZNK7WebCore9RenderBox33foregroundIsKnownToBeOpaqueInRectERKNS_10LayoutRectEj(i1 | 0, i2 | 0, i3 | 0) | 0;
}
function viii___ZNK7WebCore9RenderBox27computeReplacedLogicalWidthENS_22ShouldComputePreferredE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore9RenderBox27computeReplacedLogicalWidthENS_22ShouldComputePreferredE(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZNK7WebCore9RenderBox22availableLogicalHeightENS_26AvailableLogicalHeightTypeE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore9RenderBox22availableLogicalHeightENS_26AvailableLogicalHeightTypeE(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZN7WebCore9RenderBox15styleWillChangeENS_15StyleDifferenceERKNS_11RenderStyleE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore9RenderBox15styleWillChangeENS_15StyleDifferenceERKNS_11RenderStyleE(i1 | 0, i2 | 0, i3 | 0);
}
function __ZNK7WebCore16RenderListMarker8isInsideEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP8[(HEAP32[i1 + 100 >> 2] | 0) + 128 | 0] & 4) != 0) {
  i2 = 1;
  return i2 | 0;
 }
 i2 = (HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 40 >> 2] & 1024 | 0) != 0;
 return i2 | 0;
}
function viii___ZN7WebCore9RenderBox19paintBoxDecorationsERNS_9PaintInfoERKNS_11LayoutPointE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore9RenderBox19paintBoxDecorationsERNS_9PaintInfoERKNS_11LayoutPointE(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZNK7WebCore9RenderBox29computeIntrinsicLogicalWidthsERNS_10LayoutUnitES2___wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore9RenderBox29computeIntrinsicLogicalWidthsERNS_10LayoutUnitES2_(i1 | 0, i2 | 0, i3 | 0);
}
function iiii___ZNK7WebCore12RenderObject9getCursorERKNS_11LayoutPointERNS_6CursorE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return __ZNK7WebCore12RenderObject9getCursorERKNS_11LayoutPointERNS_6CursorE(i1 | 0, i2 | 0, i3 | 0) | 0;
}
function viii___ZN7WebCore12RenderObject12imageChangedEPNS_11CachedImageEPKNS_7IntRectE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore12RenderObject12imageChangedEPNS_11CachedImageEPKNS_7IntRectE(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZNK7WebCore9RenderBox23mapAbsoluteToLocalPointEjRNS_14TransformStateE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore9RenderBox23mapAbsoluteToLocalPointEjRNS_14TransformStateE(i1 | 0, i2 | 0, i3 | 0);
}
function iii___ZNK7WebCore9RenderBox33backgroundIsKnownToBeOpaqueInRectERKNS_10LayoutRectE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore9RenderBox33backgroundIsKnownToBeOpaqueInRectERKNS_10LayoutRectE(i1 | 0, i2 | 0) | 0;
}
function dynCall_iiiiiii(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 return FUNCTION_TABLE_iiiiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0) | 0;
}
function __ZNK7WebCore9RenderBox21collapsedMarginBeforeEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore15LayoutBoxExtent6beforeENS_11WritingModeE(i1, i2 + 60 | 0, (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
 return;
}
function viii___ZN7WebCore9RenderBox9paintMaskERNS_9PaintInfoERKNS_11LayoutPointE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore9RenderBox9paintMaskERNS_9PaintInfoERKNS_11LayoutPointE(i1 | 0, i2 | 0, i3 | 0);
}
function __ZNK7WebCore9RenderBox20collapsedMarginAfterEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore15LayoutBoxExtent5afterENS_11WritingModeE(i1, i2 + 60 | 0, (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
 return;
}
function __ZN7WebCore13RenderElement28addChildIgnoringContinuationEPNS_12RenderObjectES2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 628 >> 2] & 63](i1, i2, i3);
 return;
}
function dynCall_viiiiii(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 FUNCTION_TABLE_viiiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0);
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function viii___ZN7WebCore13RenderElement8addChildEPNS_12RenderObjectES2___wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore13RenderElement8addChildEPNS_12RenderObjectES2_(i1 | 0, i2 | 0, i3 | 0);
}
function iii___ZNK7WebCore12RenderObject33previousOffsetForBackwardDeletionEi__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore12RenderObject33previousOffsetForBackwardDeletionEi(i1 | 0, i2 | 0) | 0;
}
function dynCall_iiiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 return FUNCTION_TABLE_iiiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0) | 0;
}
function iii___ZN7WebCore12RenderObject15willRenderImageEPNS_11CachedImageE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore12RenderObject15willRenderImageEPNS_11CachedImageE(i1 | 0, i2 | 0) | 0;
}
function dynCall_iiiifi(i1, i2, i3, i4, d5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 i6 = i6 | 0;
 return FUNCTION_TABLE_iiiifi[i1 & 7](i2 | 0, i3 | 0, i4 | 0, +d5, i6 | 0) | 0;
}
function vii___ZNK7WebCore9RenderBox37containingBlockLogicalWidthForContentEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore9RenderBox37containingBlockLogicalWidthForContentEv(i1 | 0, i2 | 0);
}
function dynCall_viiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 FUNCTION_TABLE_viiiii[i1 & 15](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
}
function __ZN7WebCore16RenderListMarker23updateMarginsAndContentEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore16RenderListMarker13updateContentEv(i1);
 __ZN7WebCore16RenderListMarker13updateMarginsEv(i1);
 return;
}
function vii___ZNK7WebCore12RenderObject29repaintRectInLocalCoordinatesEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore12RenderObject29repaintRectInLocalCoordinatesEv(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore13RenderElement11removeChildERNS_12RenderObjectE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore13RenderElement11removeChildERNS_12RenderObjectE(i1 | 0, i2 | 0);
}
function vii___ZNK7WebCore9RenderBox31offsetFromLogicalTopOfFirstPageEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore9RenderBox31offsetFromLogicalTopOfFirstPageEv(i1 | 0, i2 | 0);
}
function vii___ZNK7WebCore9RenderBox28computeReplacedLogicalHeightEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore9RenderBox28computeReplacedLogicalHeightEv(i1 | 0, i2 | 0);
}
function ii___ZN7WebCore9RenderBox36computeBackgroundIsKnownToBeObscuredEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore9RenderBox36computeBackgroundIsKnownToBeObscuredEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore9RenderBox33needsPreferredWidthsRecalculationEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9RenderBox33needsPreferredWidthsRecalculationEv(i1 | 0) | 0;
}
function vii___ZNK7WebCore9RenderBox24minPreferredLogicalWidthEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore9RenderBox24minPreferredLogicalWidthEv(i1 | 0, i2 | 0);
}
function vii___ZNK7WebCore9RenderBox24maxPreferredLogicalWidthEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore9RenderBox24maxPreferredLogicalWidthEv(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore12RenderObject28canBeReplacedWithInlineRunInEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore12RenderObject28canBeReplacedWithInlineRunInEv(i1 | 0) | 0;
}
function __ZNK7WebCore20RenderBoxModelObject12borderBeforeEv(i1) {
 i1 = i1 | 0;
 return (__ZNK7WebCore11RenderStyle17borderBeforeWidthEv(HEAP32[i1 + 36 >> 2] | 0) | 0) & 65535 | 0;
}
function iii___ZNK7WebCore12RenderObject14previousOffsetEi__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore12RenderObject14previousOffsetEi(i1 | 0, i2 | 0) | 0;
}
function vii___ZN7WebCore9RenderBox24repaintOverhangingFloatsEb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore9RenderBox24repaintOverhangingFloatsEb(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore9RenderBox10autoscrollERKNS_8IntPointE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore9RenderBox10autoscrollERKNS_8IntPointE(i1 | 0, i2 | 0);
}
function ii___ZN7WebCore12RenderObject28toRenderSVGResourceContainerEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore12RenderObject28toRenderSVGResourceContainerEv(i1 | 0) | 0;
}
function __ZNK7WebCore20RenderBoxModelObject11borderStartEv(i1) {
 i1 = i1 | 0;
 return (__ZNK7WebCore11RenderStyle16borderStartWidthEv(HEAP32[i1 + 36 >> 2] | 0) | 0) & 65535 | 0;
}
function __ZNK7WebCore20RenderBoxModelObject11borderAfterEv(i1) {
 i1 = i1 | 0;
 return (__ZNK7WebCore11RenderStyle16borderAfterWidthEv(HEAP32[i1 + 36 >> 2] | 0) | 0) & 65535 | 0;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 31](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function vii___ZNK7WebCore12RenderObject17strokeBoundingBoxEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore12RenderObject17strokeBoundingBoxEv(i1 | 0, i2 | 0);
}
function vii___ZNK7WebCore12RenderObject17objectBoundingBoxEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore12RenderObject17objectBoundingBoxEv(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore9RenderBox9panScrollERKNS_8IntPointE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore9RenderBox9panScrollERKNS_8IntPointE(i1 | 0, i2 | 0);
}
function __ZNK7WebCore20RenderBoxModelObject9borderEndEv(i1) {
 i1 = i1 | 0;
 return (__ZNK7WebCore11RenderStyle14borderEndWidthEv(HEAP32[i1 + 36 >> 2] | 0) | 0) & 65535 | 0;
}
function ii___ZNK7WebCore9RenderBox28canBeProgramaticallyScrolledEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9RenderBox28canBeProgramaticallyScrolledEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore12RenderObject24canHaveGeneratedChildrenEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore12RenderObject24canHaveGeneratedChildrenEv(i1 | 0) | 0;
}
function iii___ZNK7WebCore12RenderObject10nextOffsetEi__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore12RenderObject10nextOffsetEi(i1 | 0, i2 | 0) | 0;
}
function dynCall_viiif(i1, i2, i3, i4, d5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 FUNCTION_TABLE_viiif[i1 & 1](i2 | 0, i3 | 0, i4 | 0, +d5);
}
function vii___ZNK7WebCore12RenderObject14localTransformEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore12RenderObject14localTransformEv(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore12RenderObject15updateDragStateEb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore12RenderObject15updateDragStateEb(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore12RenderObject22localToParentTransformEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore12RenderObject22localToParentTransformEv(i1 | 0) | 0;
}
function __ZNK7WebCore9RenderBox32computeIntrinsicRatioInformationERNS_9FloatSizeERdRb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return;
}
function ii___ZNK7WebCore9RenderBox24pixelSnappedOffsetHeightEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9RenderBox24pixelSnappedOffsetHeightEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore9RenderBox24hasRelativeLogicalHeightEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9RenderBox24hasRelativeLogicalHeightEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore9RenderBox23pixelSnappedOffsetWidthEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9RenderBox23pixelSnappedOffsetWidthEv(i1 | 0) | 0;
}
function __ZNK7WebCore9RenderBox15controlClipRectERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 _memset(i1 | 0, 0, 16) | 0;
 return;
}
function ii___ZNK7WebCore9RenderBox22verticalScrollbarWidthEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9RenderBox22verticalScrollbarWidthEv(i1 | 0) | 0;
}
function dynCall_iiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iiii[i1 & 15](i2 | 0, i3 | 0, i4 | 0) | 0;
}
function __ZNK7WebCore9RenderBox21availableLogicalWidthEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore9RenderBox19contentLogicalWidthEv(i1, i2);
 return;
}
function vi___ZN7WebCore12RenderObject24setNeedsBoundariesUpdateEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore12RenderObject24setNeedsBoundariesUpdateEv(i1 | 0);
}
function __ZNK7WebCore13RenderElement14isChildAllowedERKNS_12RenderObjectERKNS_11RenderStyleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return 1;
}
function ii___ZNK7WebCore9RenderBox21hasRelativeDimensionsEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9RenderBox21hasRelativeDimensionsEv(i1 | 0) | 0;
}
function __ZNK7WebCore12RenderObject7isEmptyEv(i1) {
 i1 = i1 | 0;
 return (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] & 511](i1) | 0) == 0 | 0;
}
function vii___ZN7WebCore9RenderBox13setScrollLeftEi__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore9RenderBox13setScrollLeftEi(i1 | 0, i2 | 0);
}
function vi___ZN7WebCore13RenderElement21willBeRemovedFromTreeEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore13RenderElement21willBeRemovedFromTreeEv(i1 | 0);
}
function __ZNK7WebCore12RenderObject16adjustForColumnsERNS_10LayoutSizeERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return;
}
function vii___ZN7WebCore9RenderBox12setScrollTopEi__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore9RenderBox12setScrollTopEi(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore12RenderObject15innerLineHeightEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore12RenderObject15innerLineHeightEv(i1 | 0) | 0;
}
function vii___ZNK7WebCore9RenderBox10offsetLeftEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore9RenderBox10offsetLeftEv(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore13RenderElement13hoverAncestorEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore13RenderElement13hoverAncestorEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore12RenderObject14firstLineBlockEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore12RenderObject14firstLineBlockEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore12RenderObject14caretMinOffsetEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore12RenderObject14caretMinOffsetEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore12RenderObject14caretMaxOffsetEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore12RenderObject14caretMaxOffsetEv(i1 | 0) | 0;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 63](i2 | 0, i3 | 0, i4 | 0);
}
function vii___ZNK7WebCore9RenderBox9offsetTopEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore9RenderBox9offsetTopEv(i1 | 0, i2 | 0);
}
function v___ZN7WebCore9RenderBox16positionForPointERKNS_11LayoutPointE__wrapper() {
 __ZN7WebCore9RenderBox16positionForPointERKNS_11LayoutPointE();
}
function __ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function vi___ZN7WebCore13RenderElement16insertedIntoTreeEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore13RenderElement16insertedIntoTreeEv(i1 | 0);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function __ZNK7WebCore9RenderBox13intrinsicSizeEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 return;
}
function __ZN7WebCore9RenderBox11paintObjectERNS_9PaintInfoERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return;
}
function b4(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(4);
 return 0;
}
function vi___ZN7WebCore9RenderBox19updateLogicalHeightEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9RenderBox19updateLogicalHeightEv(i1 | 0);
}
function ii___ZNK7WebCore9RenderBox12scrollHeightEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9RenderBox12scrollHeightEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore9RenderBox12avoidsFloatsEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9RenderBox12avoidsFloatsEv(i1 | 0) | 0;
}
function vi___ZN7WebCore9RenderBox18updateLogicalWidthEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9RenderBox18updateLogicalWidthEv(i1 | 0);
}
function ii___ZNK7WebCore9RenderBox11scrollWidthEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9RenderBox11scrollWidthEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore9RenderBox10scrollLeftEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9RenderBox10scrollLeftEv(i1 | 0) | 0;
}
function __ZNK7WebCore9RenderBox32createAnonymousBoxWithSameTypeAsEPKNS_12RenderObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 0;
}
function __ZNK7WebCore9RenderBox12offsetHeightEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = HEAP32[i2 + 56 >> 2];
 return;
}
function __ZNK7WebCore9RenderBox12marginBottomEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = HEAP32[i2 + 68 >> 2];
 return;
}
function __ZNK7WebCore9RenderBox11offsetWidthEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = HEAP32[i2 + 52 >> 2];
 return;
}
function __ZNK7WebCore9RenderBox11marginRightEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = HEAP32[i2 + 64 >> 2];
 return;
}
function vi___ZN7WebCore9RenderBox15willBeDestroyedEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9RenderBox15willBeDestroyedEv(i1 | 0);
}
function vi___ZN7WebCore9RenderBox15updateFromStyleEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9RenderBox15updateFromStyleEv(i1 | 0);
}
function b10(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(10);
}
function __ZNK7WebCore9RenderBox10marginLeftEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = HEAP32[i2 + 72 >> 2];
 return;
}
function ii___ZNK7WebCore9RenderBox9scrollTopEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9RenderBox9scrollTopEv(i1 | 0) | 0;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 15](i2 | 0, i3 | 0) | 0;
}
function __ZNK7WebCore9RenderBox9marginTopEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = HEAP32[i2 + 60 >> 2];
 return;
}
function __ZN7WebCore20RenderBoxModelObject20childBecameNonInlineEPNS_12RenderObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZNK7WebCore9RenderBox19inlineBlockBaselineENS_17LineDirectionModeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return -1 | 0;
}
function __ZN7WebCore13RenderElement26dirtyLinesFromChangedChildEPNS_12RenderObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore20CachedResourceClient14notifyFinishedEPNS_14CachedResourceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function b12(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(12);
 return 0;
}
function _strlen(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1;
 while (HEAP8[i2] | 0) {
  i2 = i2 + 1 | 0;
 }
 return i2 - i1 | 0;
}
function setThrew(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((__THREW__ | 0) == 0) {
  __THREW__ = i1;
  threwValue = i2;
 }
}
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 127](i2 | 0, i3 | 0);
}
function b6(i1, i2, i3, d4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 abort(6);
 return 0;
}
function b1(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(1);
}
function __ZNK7WebCore13RenderElement14firstChildSlowEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 28 >> 2] | 0;
}
function __ZNK7WebCore13RenderElement13lastChildSlowEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 32 >> 2] | 0;
}
function __ZNK7WebCore12RenderObject36requiresForcedStyleRecalcPropagationEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 511](i2 | 0) | 0;
}
function __ZNK7WebCore12RenderObject29isRenderFullScreenPlaceholderEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject28isSVGResourceFilterPrimitiveEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject28isRenderMathMLScriptsWrapperEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b13(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(13);
}
function __ZNK7WebCore16RenderListMarker10renderNameEv(i1) {
 i1 = i1 | 0;
 return H_BASE + 8 | 0;
}
function __ZNK7WebCore12RenderObject27isSVGTransformableContainerEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject26isInlineBlockOrInlineTableEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore9RenderBox33markForPaginationRelayoutIfNeededEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore12RenderObject25isRenderNamedFlowFragmentEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject24shouldPaintSelectionGapsEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject24isRenderMultiColumnBlockEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject24isRenderMathMLSquareRootEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 31](i2 | 0);
}
function __ZNK7WebCore17CachedImageClient18resourceClientTypeEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore12RenderObject23isTextControlInnerBlockEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject23isRenderNamedFlowThreadEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject23isRenderMathMLUnderOverEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject23isDeprecatedFlexibleBoxEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject23createsAnonymousWrapperEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b5(i1, i2, i3, d4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 abort(5);
}
function __ZNK7WebCore16RenderListMarker18canBeSelectionLeafEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore12RenderObject22isSVGViewportContainerEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject22isSVGResourceContainerEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject22isRenderSVGModelObjectEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject22isRenderMultiColumnSetEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject22isRenderMathMLOperatorEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject22isRenderMathMLFractionEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject21isRenderScrollbarPartEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject21isRenderMathMLScriptsEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject20isStretchingChildrenEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject20isSVGHiddenContainerEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject20isRenderMathMLFencedEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore12RenderObject23setNeedsTransformUpdateEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore12RenderObject21needsBoundariesUpdateEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore16RenderListMarker15canHaveChildrenEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject19virtualContinuationEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject19isSnapshottedPlugInEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject19isSVGResourceFilterEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject19isRenderMathMLSpaceEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject19isRenderMathMLBlockEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject19isFileUploadControlEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b7(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(7);
 return 0;
}
function __ZNK7WebCore9RenderBox17firstLineBaselineEv(i1) {
 i1 = i1 | 0;
 return -1 | 0;
}
function __ZNK7WebCore12RenderObject18isSVGForeignObjectEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject18isRenderMathMLRootEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject18isRenderMathMLMathEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject18isRenderFullScreenEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject18isRenderFlowThreadEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore9RenderBox21isSelfCollapsingBlockEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject17isSVGGradientStopEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject17isRenderMathMLRowEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore16RenderListMarker12isListMarkerEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore12RenderObject16isRenderTableColEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject16isRenderSVGBlockEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject16isEmbeddedObjectEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject15isSVGInlineTextEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject15isDetailsMarkerEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject14isTableSectionEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject14isTableCaptionEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject14isSVGContainerEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject14isRenderRegionEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject14isRenderIFrameEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject14isRenderButtonEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore12RenderObject17updateFromElementEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore12RenderObject13isTextControlEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject13isSliderThumbEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject13isSVGTextPathEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject13isRenderImageEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject13isFlexibleBoxEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject13isCombineTextEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject12isRenderGridEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject11isTextFieldEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject11isTableCellEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject11isSVGInlineEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore9RenderBox14hasControlClipEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isTextAreaEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isTableRowEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isSVGShapeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isSVGImageEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isRubyTextEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isRubyBaseEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isProgressEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isMenuListEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isListItemEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isFrameSetEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isFieldsetEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject9isSVGTextEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject9isSVGRootEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject9isSVGPathEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject9isRubyRunEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject9isReplicaEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject9isListBoxEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject9isCounterEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b8(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(8);
}
function __ZNK7WebCore12RenderObject8isWidgetEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject8isSliderEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject8isCanvasEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore9RenderBox14stopAutoscrollEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore12RenderObject7isVideoEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject7isTableEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject7isQuoteEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject7isMeterEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject7isMediaEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject7isFrameEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject6lengthEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore12RenderObject6isRubyEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject5isWBREv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b11(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(11);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 3]();
}
function b3(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(3);
}
function stackRestore(i1) {
 i1 = i1 | 0;
 STACKTOP = i1;
}
function setTempRet9(i1) {
 i1 = i1 | 0;
 tempRet9 = i1;
}
function setTempRet8(i1) {
 i1 = i1 | 0;
 tempRet8 = i1;
}
function setTempRet7(i1) {
 i1 = i1 | 0;
 tempRet7 = i1;
}
function setTempRet6(i1) {
 i1 = i1 | 0;
 tempRet6 = i1;
}
function setTempRet5(i1) {
 i1 = i1 | 0;
 tempRet5 = i1;
}
function setTempRet4(i1) {
 i1 = i1 | 0;
 tempRet4 = i1;
}
function setTempRet3(i1) {
 i1 = i1 | 0;
 tempRet3 = i1;
}
function setTempRet2(i1) {
 i1 = i1 | 0;
 tempRet2 = i1;
}
function setTempRet1(i1) {
 i1 = i1 | 0;
 tempRet1 = i1;
}
function setTempRet0(i1) {
 i1 = i1 | 0;
 tempRet0 = i1;
}
function b0(i1) {
 i1 = i1 | 0;
 abort(0);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b2(i1) {
 i1 = i1 | 0;
 abort(2);
}
function b9() {
 abort(9);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_ii = [b0,b0,__ZNK7WebCore12RenderObject19isSVGResourceFilterEv,b0,__ZNK7WebCore12RenderObject13isSVGTextPathEv,b0,__ZNK7WebCore12RenderObject23isTextControlInnerBlockEv,b0,__ZNK7WebCore12RenderObject10isRubyTextEv,b0,__ZNK7WebCore12RenderObject6isRubyEv,b0,ii___ZNK7WebCore9RenderBox9scrollTopEv__wrapper,b0,__ZNK7WebCore12RenderObject23isRenderNamedFlowThreadEv,b0,__ZNK7WebCore12RenderObject25isRenderNamedFlowFragmentEv,b0,ii___ZNK7WebCore12RenderObject22localToParentTransformEv__wrapper,b0,__ZNK7WebCore12RenderObject14isTableCaptionEv,b0,__ZNK7WebCore12RenderObject8isWidgetEv,b0,__ZNK7WebCore12RenderObject11isTextFieldEv,b0,__ZNK7WebCore12RenderObject18isRenderFullScreenEv,b0,__ZNK7WebCore13RenderElement13lastChildSlowEv
  ,b0,__ZNK7WebCore20RenderBoxModelObject11borderRightEv,b0,__ZNK7WebCore20RenderBoxModelObject9borderEndEv,b0,ii___ZNK7WebCore12RenderObject14firstLineBlockEv__wrapper,b0,ii___ZNK7WebCore9RenderBox10scrollLeftEv__wrapper,b0,__ZNK7WebCore12RenderObject9isSVGRootEv,b0,__ZNK7WebCore12RenderObject7isFrameEv,b0,__ZNK7WebCore12RenderObject16isEmbeddedObjectEv,b0,__ZNK7WebCore20RenderBoxModelObject12borderBottomEv,b0,__ZNK7WebCore12RenderObject22isRenderSVGModelObjectEv,b0,__ZNK7WebCore12RenderObject15isSVGInlineTextEv,b0,__ZNK7WebCore12RenderObject7isMeterEv,b0,__ZNK7WebCore12RenderObject14isSVGContainerEv,b0,ii___ZNK7WebCore12RenderObject28canBeReplacedWithInlineRunInEv__wrapper,b0,__ZNK7WebCore12RenderObject22isSVGResourceContainerEv,b0,__ZNK7WebCore12RenderObject20isSVGHiddenContainerEv
  ,b0,__ZNK7WebCore12RenderObject24isRenderMathMLSquareRootEv,b0,__ZNK7WebCore12RenderObject7isQuoteEv,b0,__ZNK7WebCore12RenderObject10isListItemEv,b0,__ZNK7WebCore12RenderObject19isRenderMathMLBlockEv,b0,__ZNK7WebCore12RenderObject10isSVGImageEv,b0,__ZNK7WebCore16RenderListMarker10renderNameEv,b0,__ZNK7WebCore12RenderObject15isDetailsMarkerEv,b0,__ZNK7WebCore12RenderObject26isInlineBlockOrInlineTableEv,b0,__ZNK7WebCore12RenderObject16isRenderTableColEv,b0,__ZNK7WebCore12RenderObject7isVideoEv,b0,__ZNK7WebCore12RenderObject10isProgressEv,b0,__ZNK7WebCore12RenderObject24isRenderMultiColumnBlockEv,b0,__ZNK7WebCore16RenderListMarker15canHaveChildrenEv,b0,__ZNK7WebCore12RenderObject13isCombineTextEv,b0,__ZNK7WebCore12RenderObject23isRenderMathMLUnderOverEv
  ,b0,__ZNK7WebCore12RenderObject5isWBREv,b0,__ZNK7WebCore12RenderObject22isSVGViewportContainerEv,b0,__ZNK7WebCore16RenderListMarker12isListMarkerEv,b0,__ZNK7WebCore13RenderElement14firstChildSlowEv,b0,ii___ZNK7WebCore9RenderBox22verticalScrollbarWidthEv__wrapper,b0,__ZNK7WebCore12RenderObject10isTextAreaEv,b0,__ZNK7WebCore12RenderObject18isRenderFlowThreadEv,b0,__ZNK7WebCore12RenderObject21isRenderScrollbarPartEv,b0,ii___ZNK7WebCore9RenderBox24pixelSnappedOffsetHeightEv__wrapper,b0,__ZNK7WebCore12RenderObject17isRenderMathMLRowEv,b0,__ZNK7WebCore12RenderObject16isRenderSVGBlockEv,b0,__ZNK7WebCore12RenderObject19isFileUploadControlEv,b0,__ZNK7WebCore12RenderObject9isReplicaEv,b0,__ZNK7WebCore9RenderBox14hasControlClipEv,b0,__ZNK7WebCore12RenderObject7isMediaEv
  ,b0,__ZNK7WebCore12RenderObject10isSVGShapeEv,b0,__ZNK7WebCore9RenderBox27shouldComputeSizeAsReplacedEv,b0,__ZNK7WebCore12RenderObject14isRenderButtonEv,b0,__ZNK7WebCore12RenderObject8isSliderEv,b0,__ZNK7WebCore12RenderObject19isRenderMathMLSpaceEv,b0,ii___ZN7WebCore9RenderBox36computeBackgroundIsKnownToBeObscuredEv__wrapper,b0,__ZNK7WebCore12RenderObject8isCanvasEv,b0,__ZNK7WebCore12RenderObject10isMenuListEv,b0,__ZNK7WebCore12RenderObject18isRenderMathMLMathEv,b0,ii___ZNK7WebCore13RenderElement13hoverAncestorEv__wrapper,b0,ii___ZNK7WebCore9RenderBox33needsPreferredWidthsRecalculationEv__wrapper,b0,ii___ZNK7WebCore9RenderBox28canBeProgramaticallyScrolledEv__wrapper,b0,ii___ZNK7WebCore12RenderObject24canHaveGeneratedChildrenEv__wrapper,b0,__ZNK7WebCore12RenderObject27isSVGTransformableContainerEv,b0,ii___ZNK7WebCore12RenderObject14caretMaxOffsetEv__wrapper
  ,b0,__ZNK7WebCore12RenderObject13isSliderThumbEv,b0,__ZNK7WebCore9RenderBox17firstLineBaselineEv,b0,__ZNK7WebCore12RenderObject24shouldPaintSelectionGapsEv,b0,__ZNK7WebCore12RenderObject13isTextControlEv,b0,__ZNK7WebCore12RenderObject9isSVGTextEv,b0,__ZNK7WebCore12RenderObject23createsAnonymousWrapperEv,b0,__ZNK7WebCore12RenderObject28isSVGResourceFilterPrimitiveEv,b0,__ZNK7WebCore20RenderBoxModelObject12borderBeforeEv,b0,__ZNK7WebCore12RenderObject11isTableCellEv,b0,__ZNK7WebCore12RenderObject12isRenderGridEv,b0,__ZNK7WebCore12RenderObject19isSnapshottedPlugInEv,b0,__ZNK7WebCore12RenderObject9isListBoxEv,b0,__ZNK7WebCore12RenderObject9isSVGPathEv,b0,__ZNK7WebCore12RenderObject22outlineStyleForRepaintEv,b0,ii___ZN7WebCore12RenderObject28toRenderSVGResourceContainerEv__wrapper
  ,b0,__ZNK7WebCore16RenderListMarker7isImageEv,b0,ii___ZNK7WebCore9RenderBox23pixelSnappedOffsetWidthEv__wrapper,b0,__ZNK7WebCore12RenderObject18isRenderMathMLRootEv,b0,ii___ZNK7WebCore12RenderObject14caretMinOffsetEv__wrapper,b0,ii___ZNK7WebCore9RenderBox11scrollWidthEv__wrapper,b0,__ZNK7WebCore12RenderObject14isRenderIFrameEv,b0,__ZNK7WebCore12RenderObject6lengthEv,b0,__ZNK7WebCore12RenderObject10isTableRowEv,b0,__ZNK7WebCore12RenderObject13isFlexibleBoxEv,b0,__ZNK7WebCore12RenderObject10isFrameSetEv,b0,__ZNK7WebCore20RenderBoxModelObject11borderAfterEv,b0,__ZNK7WebCore9RenderBox13requiresLayerEv,b0,__ZNK7WebCore12RenderObject10isFieldsetEv,b0,__ZNK7WebCore12RenderObject11isSVGInlineEv,b0,__ZNK7WebCore12RenderObject22isRenderMultiColumnSetEv
  ,b0,__ZNK7WebCore12RenderObject18isSVGForeignObjectEv,b0,ii___ZNK7WebCore9RenderBox21hasRelativeDimensionsEv__wrapper,b0,__ZNK7WebCore12RenderObject9isRubyRunEv,b0,__ZNK7WebCore16RenderListMarker18canBeSelectionLeafEv,b0,__ZNK7WebCore12RenderObject21isRenderMathMLScriptsEv,b0,__ZNK7WebCore12RenderObject22isRenderMathMLFractionEv,b0,__ZNK7WebCore12RenderObject10isRubyBaseEv,b0,__ZNK7WebCore12RenderObject14isRenderRegionEv,b0,ii___ZNK7WebCore9RenderBox12avoidsFloatsEv__wrapper,b0,ii___ZNK7WebCore9RenderBox12scrollHeightEv__wrapper,b0,__ZNK7WebCore17CachedImageClient18resourceClientTypeEv,b0,__ZN7WebCore12RenderObject21needsBoundariesUpdateEv,b0,__ZNK7WebCore12RenderObject28isRenderMathMLScriptsWrapperEv,b0,__ZNK7WebCore20RenderBoxModelObject9borderTopEv,b0,__ZNK7WebCore12RenderObject20isRenderMathMLFencedEv
  ,b0,__ZNK7WebCore12RenderObject23isDeprecatedFlexibleBoxEv,b0,__ZNK7WebCore12RenderObject9isCounterEv,b0,ii___ZNK7WebCore9RenderBox24hasRelativeLogicalHeightEv__wrapper,b0,__ZNK7WebCore12RenderObject17isSVGGradientStopEv,b0,__ZNK7WebCore12RenderObject29isRenderFullScreenPlaceholderEv,b0,__ZNK7WebCore12RenderObject36requiresForcedStyleRecalcPropagationEv,b0,__ZNK7WebCore20RenderBoxModelObject10borderLeftEv,b0,__ZNK7WebCore12RenderObject7isEmptyEv,b0,__ZNK7WebCore9RenderBox21isSelfCollapsingBlockEv,b0,__ZNK7WebCore12RenderObject22isRenderMathMLOperatorEv,b0,__ZNK7WebCore12RenderObject20isStretchingChildrenEv,b0,__ZNK7WebCore20RenderBoxModelObject11borderStartEv,b0,__ZNK7WebCore12RenderObject7isTableEv,b0,__ZNK7WebCore12RenderObject13isRenderImageEv,b0,__ZNK7WebCore12RenderObject14isTableSectionEv
  ,b0,__ZNK7WebCore12RenderObject19virtualContinuationEv,b0,ii___ZNK7WebCore12RenderObject15innerLineHeightEv__wrapper,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
  ,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
  ,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
  ,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
  ,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
  ,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
  ,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
  ,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
  ,b0,b0,b0];
  var FUNCTION_TABLE_viiiii = [b1,b1,__ZNK7WebCore16RenderListMarker10lineHeightEbNS_17LineDirectionModeENS_16LinePositionModeE,b1,viiiii___ZNK7WebCore9RenderBox19mapLocalToContainerEPKNS_22RenderLayerModelObjectERNS_14TransformStateEjPb__wrapper,b1,viiiii___ZN7WebCore9RenderBox14localCaretRectEPNS_9InlineBoxEiPNS_10LayoutUnitE__wrapper,b1,viiiii___ZNK7WebCore9RenderBox19offsetFromContainerEPNS_12RenderObjectERKNS_11LayoutPointEPb__wrapper,b1,__ZN7WebCore9RenderBox30overflowClipRectForChildLayersERKNS_11LayoutPointEPNS_12RenderRegionENS_29OverlayScrollbarSizeRelevancyE,b1,b1,b1,b1,b1];
  var FUNCTION_TABLE_vi = [b2,b2,vi___ZN7WebCore12RenderObject24setNeedsBoundariesUpdateEv__wrapper,b2,__ZN7WebCore16RenderListMarker29computePreferredLogicalWidthsEv,b2,__ZN7WebCore12RenderObject17updateFromElementEv,b2,vi___ZN7WebCore9RenderBox15updateFromStyleEv__wrapper,b2,vi___ZN7WebCore13RenderElement21willBeRemovedFromTreeEv__wrapper,b2,__ZN7WebCore16RenderListMarkerD2Ev,b2,vi___ZN7WebCore9RenderBox15willBeDestroyedEv__wrapper,b2,__ZN7WebCore16RenderListMarker6layoutEv,b2,vi___ZN7WebCore13RenderElement16insertedIntoTreeEv__wrapper,b2,vi___ZN7WebCore9RenderBox18updateLogicalWidthEv__wrapper,b2,__ZN7WebCore12RenderObject23setNeedsTransformUpdateEv,b2,__ZN7WebCore16RenderListMarkerD0Ev,b2,vi___ZN7WebCore9RenderBox19updateLogicalHeightEv__wrapper,b2,__ZN7WebCore9RenderBox33markForPaginationRelayoutIfNeededEv
  ,b2,__ZN7WebCore9RenderBox14stopAutoscrollEv,b2];
  var FUNCTION_TABLE_vii = [b3,b3,__ZNK7WebCore9RenderBox11marginRightEv,b3,__ZN7WebCore16RenderListMarker17setSelectionStateENS_12RenderObject14SelectionStateE,b3,vii___ZN7WebCore9RenderBox10autoscrollERKNS_8IntPointE__wrapper,b3,vii___ZNK7WebCore9RenderBox24minPreferredLogicalWidthEv__wrapper,b3,vii___ZN7WebCore9RenderBox13setScrollLeftEi__wrapper,b3,vii___ZNK7WebCore9RenderBox10offsetLeftEv__wrapper,b3,__ZNK7WebCore20RenderBoxModelObject12paddingStartEv,b3,__ZN7WebCore20CachedResourceClient14notifyFinishedEPNS_14CachedResourceE,b3,vii___ZNK7WebCore9RenderBox31offsetFromLogicalTopOfFirstPageEv__wrapper,b3,__ZNK7WebCore20RenderBoxModelObject12paddingAfterEv,b3,vii___ZNK7WebCore9RenderBox37containingBlockLogicalWidthForContentEv__wrapper,b3,vii___ZNK7WebCore9RenderBox24maxPreferredLogicalWidthEv__wrapper,b3,vii___ZNK7WebCore9RenderBox28computeReplacedLogicalHeightEv__wrapper,b3,vii___ZN7WebCore12RenderObject22absoluteFocusRingQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEE__wrapper
  ,b3,__ZNK7WebCore9RenderBox20collapsedMarginAfterEv,b3,__ZNK7WebCore20RenderBoxModelObject11paddingLeftEv,b3,__ZN7WebCore13RenderElement26dirtyLinesFromChangedChildEPNS_12RenderObjectE,b3,__ZN7WebCore16RenderListMarker15createInlineBoxEv,b3,vii___ZNK7WebCore12RenderObject14localTransformEv__wrapper,b3,__ZNK7WebCore20RenderBoxModelObject13paddingBeforeEv,b3,vii___ZN7WebCore12RenderObject19addAnnotatedRegionsERN3WTF6VectorINS_20AnnotatedRegionValueELj0ENS1_15CrashOnOverflowEEE__wrapper,b3,vii___ZN7WebCore9RenderBox12setScrollTopEi__wrapper,b3,vii___ZN7WebCore13RenderElement11removeChildERNS_12RenderObjectE__wrapper,b3,__ZNK7WebCore9RenderBox13intrinsicSizeEv,b3,vii___ZN7WebCore9RenderBox9panScrollERKNS_8IntPointE__wrapper,b3,vii___ZNK7WebCore9RenderBox9offsetTopEv__wrapper,b3,vii___ZNK7WebCore12RenderObject29repaintRectInLocalCoordinatesEv__wrapper,b3,vii___ZNK7WebCore12RenderObject17strokeBoundingBoxEv__wrapper,b3,__ZN7WebCore20RenderBoxModelObject20childBecameNonInlineEPNS_12RenderObjectE
  ,b3,__ZNK7WebCore9RenderBox21availableLogicalWidthEv,b3,__ZNK7WebCore20RenderBoxModelObject10paddingEndEv,b3,vii___ZNK7WebCore12RenderObject17objectBoundingBoxEv__wrapper,b3,__ZNK7WebCore9RenderBox12marginBottomEv,b3,__ZNK7WebCore9RenderBox11offsetWidthEv,b3,__ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE,b3,__ZNK7WebCore20RenderBoxModelObject12paddingRightEv,b3,__ZNK7WebCore9RenderBox21collapsedMarginBeforeEv,b3,__ZNK7WebCore9RenderBox9marginTopEv,b3,__ZNK7WebCore9RenderBox18visualOverflowRectEv,b3,__ZNK7WebCore9RenderBox29frameRectForStickyPositioningEv,b3,__ZNK7WebCore20RenderBoxModelObject13paddingBottomEv,b3,vii___ZN7WebCore12RenderObject15updateDragStateEb__wrapper,b3,__ZNK7WebCore20RenderBoxModelObject10paddingTopEv,b3,__ZNK7WebCore9RenderBox17borderBoundingBoxEv
  ,b3,vii___ZN7WebCore9RenderBox24repaintOverhangingFloatsEb__wrapper,b3,__ZNK7WebCore9RenderBox10marginLeftEv,b3,__ZNK7WebCore9RenderBox12offsetHeightEv,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3,b3,b3,b3,b3,b3,b3];
  var FUNCTION_TABLE_iiiiiii = [b4,b4,iiiiiii___ZN7WebCore9RenderBox11nodeAtPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE__wrapper,b4];
  var FUNCTION_TABLE_viiif = [b5,b5];
  var FUNCTION_TABLE_iiiifi = [b6,b6,iiiifi___ZN7WebCore9RenderBox6scrollENS_15ScrollDirectionENS_17ScrollGranularityEfPPNS_7ElementE__wrapper,b6,iiiifi___ZN7WebCore9RenderBox13logicalScrollENS_22ScrollLogicalDirectionENS_17ScrollGranularityEfPPNS_7ElementE__wrapper,b6,b6,b6];
  var FUNCTION_TABLE_iiii = [b7,b7,__ZNK7WebCore13RenderElement14isChildAllowedERKNS_12RenderObjectERKNS_11RenderStyleE,b7,iiii___ZNK7WebCore20RenderBoxModelObject36boxShadowShouldBeAppliedToBackgroundENS_24BackgroundBleedAvoidanceEPNS_13InlineFlowBoxE__wrapper,b7,iiii___ZNK7WebCore9RenderBox22pushMappingToContainerEPKNS_22RenderLayerModelObjectERNS_17RenderGeometryMapE__wrapper,b7,iiii___ZNK7WebCore9RenderBox33foregroundIsKnownToBeOpaqueInRectERKNS_10LayoutRectEj__wrapper,b7,iiii___ZNK7WebCore12RenderObject9getCursorERKNS_11LayoutPointERNS_6CursorE__wrapper,b7,b7,b7,b7,b7];
  var FUNCTION_TABLE_viii = [b8,b8,viii___ZNK7WebCore9RenderBox29computeIntrinsicLogicalWidthsERNS_10LayoutUnitES2___wrapper,b8,__ZN7WebCore16RenderListMarkerC2ERNS_14RenderListItemEN3WTF7PassRefINS_11RenderStyleEEE,b8,viii___ZNK7WebCore9RenderBox23mapAbsoluteToLocalPointEjRNS_14TransformStateE__wrapper,b8,viii___ZNK7WebCore9RenderBox29clippedOverflowRectForRepaintEPKNS_22RenderLayerModelObjectE__wrapper,b8,viii___ZNK7WebCore9RenderBox27computeReplacedLogicalWidthENS_22ShouldComputePreferredE__wrapper,b8,__ZNK7WebCore9RenderBox11marginAfterEPKNS_11RenderStyleE,b8,viii___ZNK7WebCore9RenderBox13absoluteQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEEPb__wrapper,b8,viii___ZN7WebCore12RenderObject19updateHitTestResultERNS_13HitTestResultERKNS_11LayoutPointE__wrapper,b8,viii___ZN7WebCore9RenderBox19paintBoxDecorationsERNS_9PaintInfoERKNS_11LayoutPointE__wrapper,b8,viii___ZN7WebCore12RenderObject12imageChangedEPNS_11CachedImageEPKNS_7IntRectE__wrapper,b8,viii___ZN7WebCore13RenderElement8addChildEPNS_12RenderObjectES2___wrapper,b8,__ZN7WebCore16RenderListMarker5paintERNS_9PaintInfoERKNS_11LayoutPointE,b8,__ZNK7WebCore12RenderObject16adjustForColumnsERNS_10LayoutSizeERKNS_11LayoutPointE,b8,viii___ZN7WebCore9RenderBox15styleWillChangeENS_15StyleDifferenceERKNS_11RenderStyleE__wrapper
  ,b8,__ZNK7WebCore9RenderBox12marginBeforeEPKNS_11RenderStyleE,b8,__ZN7WebCore16RenderListMarker12imageChangedEPKvPKNS_7IntRectE,b8,__ZN7WebCore9RenderBox11paintObjectERNS_9PaintInfoERKNS_11LayoutPointE,b8,__ZN7WebCore13RenderElement28addChildIgnoringContinuationEPNS_12RenderObjectES2_,b8,__ZNK7WebCore9RenderBox15controlClipRectERKNS_11LayoutPointE,b8,viii___ZNK7WebCore9RenderBox22availableLogicalHeightENS_26AvailableLogicalHeightTypeE__wrapper,b8,__ZNK7WebCore9RenderBox9marginEndEPKNS_11RenderStyleE,b8,viii___ZN7WebCore9RenderBox9paintMaskERNS_9PaintInfoERKNS_11LayoutPointE__wrapper,b8,viii___ZNK7WebCore9RenderBox13absoluteRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointE__wrapper,b8,__ZN7WebCore16RenderListMarker14styleDidChangeENS_15StyleDifferenceEPKNS_11RenderStyleE,b8,__ZNK7WebCore9RenderBox11marginStartEPKNS_11RenderStyleE,b8,b8,b8,b8,b8,b8,b8,b8
  ,b8,b8,b8,b8,b8];
  var FUNCTION_TABLE_v = [b9,b9,v___ZN7WebCore9RenderBox16positionForPointERKNS_11LayoutPointE__wrapper,b9];
  var FUNCTION_TABLE_viiiiii = [b10,b10,viiiiii___ZN7WebCore9RenderBox16overflowClipRectERKNS_11LayoutPointEPNS_12RenderRegionENS_29OverlayScrollbarSizeRelevancyENS_10PaintPhaseE__wrapper,b10];
  var FUNCTION_TABLE_iii = [b11,b11,__ZNK7WebCore9RenderBox19inlineBlockBaselineENS_17LineDirectionModeE,b11,iii___ZN7WebCore12RenderObject15willRenderImageEPNS_11CachedImageE__wrapper,b11,iii___ZNK7WebCore12RenderObject14previousOffsetEi__wrapper,b11,iii___ZNK7WebCore9RenderBox33backgroundIsKnownToBeOpaqueInRectERKNS_10LayoutRectE__wrapper,b11,iii___ZNK7WebCore12RenderObject10nextOffsetEi__wrapper,b11,iii___ZNK7WebCore12RenderObject33previousOffsetForBackwardDeletionEi__wrapper,b11,__ZNK7WebCore9RenderBox32createAnonymousBoxWithSameTypeAsEPKNS_12RenderObjectE,b11];
  var FUNCTION_TABLE_iiiiii = [b12,b12,iiiiii___ZN7WebCore12RenderObject16nodeAtFloatPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_10FloatPointENS_13HitTestActionE__wrapper,b12,__ZNK7WebCore16RenderListMarker16baselinePositionENS_12FontBaselineEbNS_17LineDirectionModeENS_16LinePositionModeE,b12,b12,b12];
  var FUNCTION_TABLE_viiii = [b13,b13,viiii___ZNK7WebCore12RenderObject26computeFloatRectForRepaintEPKNS_22RenderLayerModelObjectERNS_9FloatRectEb__wrapper,b13,viiii___ZN7WebCore9RenderBox17addFocusRingRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE__wrapper,b13,__ZN7WebCore16RenderListMarker23selectionRectForRepaintEPKNS_22RenderLayerModelObjectEb,b13,viiii___ZNK7WebCore9RenderBox23outlineBoundsForRepaintEPKNS_22RenderLayerModelObjectEPKNS_17RenderGeometryMapE__wrapper,b13,__ZNK7WebCore9RenderBox32computeIntrinsicRatioInformationERNS_9FloatSizeERdRb,b13,viiii___ZNK7WebCore9RenderBox21computeRectForRepaintEPKNS_22RenderLayerModelObjectERNS_10LayoutRectEb__wrapper,b13,viiii___ZNK7WebCore12RenderObject25rectWithOutlineForRepaintEPKNS_22RenderLayerModelObjectENS_10LayoutUnitE__wrapper,b13,viiii___ZNK7WebCore9RenderBox20computeLogicalHeightENS_10LayoutUnitES1_RNS0_27LogicalExtentComputedValuesE__wrapper,b13,b13,b13,b13,b13,b13,b13,b13,b13,b13,b13,b13
  ,b13,b13,b13];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_ii: dynCall_ii, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_iiiiiii: dynCall_iiiiiii, dynCall_viiif: dynCall_viiif, dynCall_iiiifi: dynCall_iiiifi, dynCall_iiii: dynCall_iiii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_viiiiii: dynCall_viiiiii, dynCall_iii: dynCall_iii, dynCall_iiiiii: dynCall_iiiiii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_iiiiiii": invoke_iiiiiii, "invoke_viiif": invoke_viiif, "invoke_iiiifi": invoke_iiiifi, "invoke_iiii": invoke_iiii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_viiiiii": invoke_viiiiii, "invoke_iii": invoke_iii, "invoke_iiiiii": invoke_iiiiii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_round": _round, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore7TextRun21s_allowsRoundingHacksE": __ZN7WebCore7TextRun21s_allowsRoundingHacksE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_iiiiiii = Module["dynCall_iiiiiii"] = asm["dynCall_iiiiiii"];
var dynCall_viiif = Module["dynCall_viiif"] = asm["dynCall_viiif"];
var dynCall_iiiifi = Module["dynCall_iiiifi"] = asm["dynCall_iiiifi"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_viiiiii = Module["dynCall_viiiiii"] = asm["dynCall_viiiiii"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
var dynCall_iiiiii = Module["dynCall_iiiiii"] = asm["dynCall_iiiiii"];
var dynCall_viiii = Module["dynCall_viiii"] = asm["dynCall_viiii"];
// Warning: printing of i64 values may be slightly rounded! No deep i64 math used, so precise i64 code not included
var i64Math = null;
// === Auto-generated postamble setup entry stuff ===
function run(args) {
  initRuntime();
}
Module['run'] = run;
// {{PRE_RUN_ADDITIONS}}
run();
// {{POST_RUN_ADDITIONS}}
  // {{MODULE_ADDITIONS}}
  return Module;
});
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZNK7WebCore12RenderObject19isSVGResourceFilterEv","__ZNK7WebCore9RenderBox11marginRightEv","__ZNK7WebCore12RenderObject13isSVGTextPathEv","__ZNK7WebCore12RenderObject10isRubyTextEv","__ZNK7WebCore12RenderObject6isRubyEv","_strlen","__ZNK7WebCore12RenderObject23isRenderNamedFlowThreadEv","__ZNK7WebCore12RenderObject25isRenderNamedFlowFragmentEv","__ZNK7WebCore20RenderBoxModelObject12paddingStartEv","__ZN7WebCoreL9toNumericItEEvRN3WTF13StringBuilderEiPKT_j","__ZN7WebCoreL10toGeorgianERN3WTF13StringBuilderEi","__ZNK7WebCore12RenderObject8isWidgetEv","__ZNK7WebCore12RenderObject11isTextFieldEv","__ZN7WebCore7TextRunC2ERKN3WTF6StringEffjNS_13TextDirectionEbbj","__ZNK7WebCore12RenderObject18isRenderFullScreenEv","__ZNK7WebCore20RenderBoxModelObject11borderRightEv","__ZN7WebCore16RenderListMarker29computePreferredLogicalWidthsEv","__ZN7WebCore12RenderObject17updateFromElementEv","__ZNK7WebCore20RenderBoxModelObject9borderEndEv","__ZN7WebCoreL12toAlphabeticItEEvRN3WTF13StringBuilderEiPKT_j","__ZNK7WebCore12RenderObject9isSVGRootEv","__ZNK7WebCore20RenderBoxModelObject13paddingBeforeEv","__ZNK7WebCore12RenderObject16isEmbeddedObjectEv","__ZNK7WebCore20RenderBoxModelObject12borderBottomEv","__ZNK7WebCore12RenderObject22isRenderSVGModelObjectEv","__ZNK7WebCore12RenderObject15isSVGInlineTextEv","__ZNK7WebCore20RenderBoxModelObject12paddingAfterEv","__ZN7WebCoreL9toNumericIhEEvRN3WTF13StringBuilderEiPKT_j","__ZNK7WebCore12RenderObject7isMeterEv","__ZNK7WebCore12RenderObject14isSVGContainerEv","__ZN7WebCore16RenderListMarkerD2Ev","__ZNK7WebCore12RenderObject22isSVGResourceContainerEv","__ZN7WebCore9RenderBox30overflowClipRectForChildLayersERKNS_11LayoutPointEPNS_12RenderRegionENS_29OverlayScrollbarSizeRelevancyE","__ZNK7WebCore12RenderObject20isSVGHiddenContainerEv","__ZNK7WebCore12RenderObject24isRenderMathMLSquareRootEv","__ZNK7WebCore12RenderObject7isQuoteEv","__ZNK7WebCore16RenderListMarker6suffixEv","__ZNK7WebCore12RenderObject10isListItemEv","__ZNK7WebCore12RenderObject19isRenderMathMLBlockEv","__ZNK7WebCore12RenderObject10isSVGImageEv","__ZNK7WebCore16RenderListMarker10renderNameEv","__ZN7WebCore16RenderListMarker23selectionRectForRepaintEPKNS_22RenderLayerModelObjectEb","__ZN7WebCoreL20toArmenianUnder10000EibbPt","__ZNK7WebCore12RenderObject15isDetailsMarkerEv","__ZNK7WebCore12RenderObject26isInlineBlockOrInlineTableEv","__ZN7WebCoreL10toArmenianERN3WTF13StringBuilderEib","__ZN7WebCoreL17toHebrewUnder1000EiPt","__ZNK7WebCore13RenderElement14isChildAllowedERKNS_12RenderObjectERKNS_11RenderStyleE","__ZNK7WebCore16RenderListMarker10lineHeightEbNS_17LineDirectionModeENS_16LinePositionModeE","__ZNK7WebCore20RenderBoxModelObject12paddingRightEv","__ZNK7WebCore12RenderObject16isRenderTableColEv","__ZNK7WebCore12RenderObject7isVideoEv","__ZNK7WebCore12RenderObject10isProgressEv","__ZN7WebCore16RenderListMarker13updateMarginsEv","__ZNK7WebCore16RenderListMarker15canHaveChildrenEv","__ZNK7WebCore12RenderObject13isCombineTextEv","__ZNK7WebCore9RenderBox11marginAfterEPKNS_11RenderStyleE","__ZNK7WebCore12RenderObject23isRenderMathMLUnderOverEv","__ZNK7WebCore12RenderObject5isWBREv","__ZNK7WebCore12RenderObject22isSVGViewportContainerEv","__ZNK7WebCore9RenderBox12marginBottomEv","__ZNK7WebCore12RenderObject9isSVGTextEv","__ZNK7WebCore9RenderBox9marginTopEv","__ZNK7WebCore13RenderElement14firstChildSlowEv","__ZNK7WebCore12RenderObject20isStretchingChildrenEv","__ZN7WebCore13RenderElement26dirtyLinesFromChangedChildEPNS_12RenderObjectE","__ZN7WebCore16RenderListMarker15createInlineBoxEv","__ZNK7WebCore12RenderObject21isRenderScrollbarPartEv","__ZNK7WebCore12RenderObject7isFrameEv","__ZNK7WebCore9RenderBox19contentLogicalWidthEv","__ZNK7WebCore12RenderObject17isRenderMathMLRowEv","__ZN7WebCore14listMarkerTextENS_14EListStyleTypeEi","__ZNK7WebCore20RenderBoxModelObject11paddingLeftEv","__ZNK7WebCore12RenderObject16isRenderSVGBlockEv","__ZNK7WebCore12RenderObject9isReplicaEv","__ZNK7WebCore12RenderObject19isFileUploadControlEv","__ZN7WebCore20CachedResourceClient14notifyFinishedEPNS_14CachedResourceE","__ZN7WebCore16RenderListMarker6layoutEv","__ZNK7WebCore12RenderObject22isRenderMultiColumnSetEv","__ZN7WebCore16RenderListMarker5paintERNS_9PaintInfoERKNS_11LayoutPointE","__ZNK7WebCore12RenderObject7isMediaEv","__ZNK7WebCore12RenderObject10isSVGShapeEv","__ZNK7WebCore9RenderBox27shouldComputeSizeAsReplacedEv","__ZNK7WebCore12RenderObject14isRenderButtonEv","__ZN7WebCore16RenderListMarker18localSelectionRectEv","__ZNK7WebCore9RenderBox14hasControlClipEv","__ZNK7WebCore12RenderObject8isSliderEv","__ZNK7WebCore9RenderBox11offsetWidthEv","__ZNK7WebCore12RenderObject10isRubyBaseEv","__ZNK7WebCore12RenderObject19isRenderMathMLSpaceEv","__ZNK7WebCore9RenderBox20collapsedMarginAfterEv","__ZNK7WebCore12RenderObject8isCanvasEv","__ZNK7WebCore12RenderObject18isRenderMathMLMathEv","__ZN7WebCore16RenderListMarker17setSelectionStateENS_12RenderObject14SelectionStateE","__ZN7WebCore16RenderListMarkerC2ERNS_14RenderListItemEN3WTF7PassRefINS_11RenderStyleEEE","__ZNK7WebCore12RenderObject14isTableCaptionEv","__ZNK7WebCore9RenderBox32computeIntrinsicRatioInformationERNS_9FloatSizeERdRb","__ZNK7WebCore12RenderObject10isMenuListEv","__ZNK7WebCore12RenderObject27isSVGTransformableContainerEv","__ZNK7WebCore16RenderListMarker16baselinePositionENS_12FontBaselineEbNS_17LineDirectionModeENS_16LinePositionModeE","__ZNK7WebCore12RenderObject13isSliderThumbEv","__ZNK7WebCore9RenderBox17firstLineBaselineEv","__ZN7WebCore20RenderBoxModelObject20childBecameNonInlineEPNS_12RenderObjectE","__ZNK7WebCore12RenderObject24shouldPaintSelectionGapsEv","__ZNK7WebCore12RenderObject13isTextControlEv","__ZNK7WebCore16RenderListMarker12isListMarkerEv","__ZNK7WebCore12RenderObject10isTextAreaEv","__ZNK7WebCore9RenderBox21availableLogicalWidthEv","__ZNK7WebCore12RenderObject23createsAnonymousWrapperEv","__ZNK7WebCore12RenderObject28isSVGResourceFilterPrimitiveEv","__ZNK7WebCore20RenderBoxModelObject12borderBeforeEv","__ZNK7WebCore9RenderBox12marginBeforeEPKNS_11RenderStyleE","__ZNK7WebCore12RenderObject24isRenderMultiColumnBlockEv","_memset","__ZNK7WebCore12RenderObject11isTableCellEv","__ZN7WebCore16RenderListMarker12imageChangedEPKvPKNS_7IntRectE","__ZNK7WebCore12RenderObject12isRenderGridEv","__ZNK7WebCore12RenderObject19isSnapshottedPlugInEv","__ZNK7WebCore20RenderBoxModelObject10paddingEndEv","__ZN7WebCore9RenderBox11paintObjectERNS_9PaintInfoERKNS_11LayoutPointE","__ZNK7WebCore12RenderObject9isListBoxEv","__ZNK7WebCore12RenderObject9isSVGPathEv","__ZNK7WebCore9RenderBox15controlClipRectERKNS_11LayoutPointE","__ZNK7WebCore9RenderBox18visualOverflowRectEv","__ZN7WebCore12RenderObject23setNeedsTransformUpdateEv","__ZNK7WebCore16RenderListMarker7isImageEv","__ZN7WebCore16RenderListMarkerD0Ev","__ZNK7WebCore12RenderObject13isRenderImageEv","__ZNK7WebCore12RenderObject18isRenderMathMLRootEv","__ZNK7WebCore12RenderObject23isTextControlInnerBlockEv","__ZNK7WebCore9RenderBox21isSelfCollapsingBlockEv","__ZNK7WebCore12RenderObject6lengthEv","__ZNK7WebCore9RenderBox13intrinsicSizeEv","__ZNK7WebCore9RenderBox21collapsedMarginBeforeEv","__ZNK7WebCore12RenderObject10isTableRowEv","__ZNK7WebCore12RenderObject13isFlexibleBoxEv","__ZNK7WebCore12RenderObject16adjustForColumnsERNS_10LayoutSizeERKNS_11LayoutPointE","__ZNK7WebCore12RenderObject10isFrameSetEv","__ZNK7WebCore20RenderBoxModelObject11borderAfterEv","__ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE","__ZNK7WebCore9RenderBox13requiresLayerEv","__ZNK7WebCore12RenderObject10isFieldsetEv","__ZNK7WebCore12RenderObject11isSVGInlineEv","__ZN7WebCore16RenderListMarker23updateMarginsAndContentEv","__ZNK7WebCore9RenderBox9marginEndEPKNS_11RenderStyleE","__ZNK7WebCore12RenderObject18isSVGForeignObjectEv","__ZNK7WebCore12RenderObject18isRenderFlowThreadEv","__ZNK7WebCore13RenderElement13lastChildSlowEv","__ZN7WebCoreL12toAlphabeticIhEEvRN3WTF13StringBuilderEiPKT_j","__ZNK7WebCore9RenderBox19inlineBlockBaselineENS_17LineDirectionModeE","__ZNK7WebCore12RenderObject9isRubyRunEv","__ZNK7WebCore16RenderListMarker18canBeSelectionLeafEv","__ZN7WebCore13RenderElement28addChildIgnoringContinuationEPNS_12RenderObjectES2_","__ZNK7WebCore12RenderObject21isRenderMathMLScriptsEv","__ZNK7WebCore12RenderObject14isRenderIFrameEv","__ZN7WebCore16RenderListMarker13updateContentEv","__ZN7WebCoreL16toCJKIdeographicERN3WTF13StringBuilderEiPKt","__ZNK7WebCore12RenderObject22isRenderMathMLFractionEv","__ZN7WebCoreL7toRomanERN3WTF13StringBuilderEib","__ZNK7WebCore12RenderObject22outlineStyleForRepaintEv","__ZNK7WebCore12RenderObject14isRenderRegionEv","__ZNK7WebCore9RenderBox29frameRectForStickyPositioningEv","__ZNK7WebCore12RenderObject22isRenderMathMLOperatorEv","__ZNK7WebCore17CachedImageClient18resourceClientTypeEv","__ZN7WebCore12RenderObject21needsBoundariesUpdateEv","__ZNK7WebCore12RenderObject28isRenderMathMLScriptsWrapperEv","__ZNK7WebCore20RenderBoxModelObject9borderTopEv","__ZNK7WebCore20RenderBoxModelObject13paddingBottomEv","__ZNK7WebCore12RenderObject20isRenderMathMLFencedEv","__ZNK7WebCore12RenderObject23isDeprecatedFlexibleBoxEv","__ZNK7WebCore9RenderBox32createAnonymousBoxWithSameTypeAsEPKNS_12RenderObjectE","__ZNK7WebCore12RenderObject9isCounterEv","__ZN7WebCoreL10toSymbolicItEEvRN3WTF13StringBuilderEiPKT_j","__ZNK7WebCore16RenderListMarker8isInsideEv","__ZN7WebCore16RenderListMarker21getRelativeMarkerRectEv","__ZN7WebCoreL10toSymbolicIhEEvRN3WTF13StringBuilderEiPKT_j","__ZNK7WebCore9RenderBox12offsetHeightEv","__ZNK7WebCore12RenderObject17isSVGGradientStopEv","__ZN7WebCore9RenderBox33markForPaginationRelayoutIfNeededEv","__ZNK7WebCore20RenderBoxModelObject10paddingTopEv","__ZNK7WebCore12RenderObject36requiresForcedStyleRecalcPropagationEv","__ZNK7WebCore20RenderBoxModelObject10borderLeftEv","__ZNK7WebCore9RenderBox17borderBoundingBoxEv","__ZNK7WebCore12RenderObject19virtualContinuationEv","_memcpy","__ZNK7WebCore12RenderObject7isEmptyEv","__ZNK7WebCore20RenderBoxModelObject11borderStartEv","__ZNK7WebCore12RenderObject7isTableEv","__ZN7WebCore9RenderBox14stopAutoscrollEv","__ZN7WebCoreL8toHebrewERN3WTF13StringBuilderEi","__ZNK7WebCore12RenderObject29isRenderFullScreenPlaceholderEv","__ZNK7WebCore12RenderObject14isTableSectionEv","__ZNK7WebCore9RenderBox10marginLeftEv","__ZN7WebCore16RenderListMarker14styleDidChangeENS_15StyleDifferenceEPKNS_11RenderStyleE","__ZNK7WebCore9RenderBox11marginStartEPKNS_11RenderStyleE"]

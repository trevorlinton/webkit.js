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
H_BASE = parentModule["_malloc"](4240 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 4240;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
/* memory initializer */ allocate([104,116,116,112,58,47,47,119,119,119,46,119,51,46,111,114,103,47,49,57,57,56,47,77,97,116,104,47,77,97,116,104,77,76,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,160,193,111,98,0,0,0,0,2,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,160,234,215,127,0,0,0,0,2,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,32,168,208,107,0,0,0,0,2,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,160,69,61,77,0,0,0,0,109,115,0,0,0,0,0,0,2,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,32,32,121,62,0,0,0,0,2,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,32,222,121,110,0,0,0,0,109,111,0,0,0,0,0,0,109,110,0,0,0,0,0,0,109,105,0,0,0,0,0,0,2,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,160,111,183,106,0,0,0,0,2,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,160,223,40,8,0,0,0,0,2,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,160,168,221,20,0,0,0,0,2,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,32,221,150,24,0,0,0,0,2,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,160,231,140,104,0,0,0,0,2,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,160,150,90,26,0,0,0,0,2,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,160,250,116,14,0,0,0,0,2,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,32,101,2,77,0,0,0,0,2,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,160,49,222,64,0,0,0,0,2,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,32,67,109,62,0,0,0,0,2,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,160,193,223,87,0,0,0,0,2,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,160,241,233,85,0,0,0,0,2,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,160,152,187,41,0,0,0,0,2,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,160,121,21,39,0,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,32,236,42,40,0,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,160,248,206,122,0,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,32,113,144,27,0,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,32,252,253,125,0,0,0,0,115,117,112,101,114,115,99,114,105,112,116,115,104,105,102,116,0,0,0,0,0,0,0,0,115,117,98,115,99,114,105,112,116,115,104,105,102,116,0,0,109,97,116,104,98,97,99,107,103,114,111,117,110,100,0,0,97,110,110,111,116,97,116,105,111,110,45,120,109,108,0,0,2,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,160,56,13,38,0,0,0,0,109,109,117,108,116,105,115,99,114,105,112,116,115,0,0,0,108,105,110,101,116,104,105,99,107,110,101,115,115,0,0,0,100,101,102,105,110,105,116,105,111,110,85,82,76,0,0,0,2,0,0,0,14,0,0,0,0,0,0,0,0,0,0,0,160,58,177,85,0,0,0,0,109,112,114,101,115,99,114,105,112,116,115,0,0,0,0,0,109,97,116,104,118,97,114,105,97,110,116,0,0,0,0,0,2,0,0,0,14,0,0,0,0,0,0,0,0,0,0,0,160,206,29,18,0,0,0,0,109,97,108,105,103,110,103,114,111,117,112,0,0,0,0,0,2,0,0,0,14,0,0,0,0,0,0,0,0,0,0,0,32,77,57,26,0,0,0,0,115,101,112,97,114,97,116,111,114,115,0,0,0,0,0,0,109,117,110,100,101,114,111,118,101,114,0,0,0,0,0,0,2,0,0,0,13,0,0,0,0,0,0,0,0,0,0,0,32,109,236,50,0,0,0,0,109,108,97,98,101,108,101,100,116,114,0,0,0,0,0,0,109,97,108,105,103,110,109,97,114,107,0,0,0,0,0,0,2,0,0,0,13,0,0,0,0,0,0,0,0,0,0,0,160,103,118,60,0,0,0,0,102,111,110,116,119,101,105,103,104,116,0,0,0,0,0,0,102,111,110,116,102,97,109,105,108,121,0,0,0,0,0,0,100,101,110,111,109,97,108,105,103,110,0,0,0,0,0,0,2,0,0,0,13,0,0,0,0,0,0,0,0,0,0,0,160,169,27,44,0,0,0,0,99,111,108,117,109,110,115,112,97,110,0,0,0,0,0,0,98,97,99,107,103,114,111,117,110,100,0,0,0,0,0,0,97,110,110,111,116,97,116,105,111,110,0,0,0,0,0,0,97,99,116,105,111,110,116,121,112,101,0,0,0,0,0,0,115,101,109,97,110,116,105,99,115,0,0,0,0,0,0,0,115,101,108,101,99,116,105,111,110,0,0,0,0,0,0,0,109,115,99,97,114,114,105,101,115,0,0,0,0,0,0,0,109,97,116,104,99,111,108,111,114,0,0,0,0,0,0,0,102,111,110,116,115,116,121,108,101,0,0,0,0,0,0,0,115,116,114,101,116,99,104,121,0,0,0,0,0,0,0,0,110,117,109,97,108,105,103,110,0,0,0,0,0,0,0,0,2,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,32,22,105,103,0,0,0,0,109,112,104,97,110,116,111,109,0,0,0,0,0,0,0,0,109,108,111,110,103,100,105,118,0,0,0,0,0,0,0,0,109,101,110,99,108,111,115,101,0,0,0,0,0,0,0,0,2,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,160,52,161,69,0,0,0,0,109,97,116,104,115,105,122,101,0,0,0,0,0,0,0,0,2,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,160,143,44,84,0,0,0,0,102,111,110,116,115,105,122,101,0,0,0,0,0,0,0,0,101,110,99,111,100,105,110,103,0,0,0,0,0,0,0,0,2,0,0,0,10,0,0,0,0,0,0,0,0,0,0,0,32,77,176,85,0,0,0,0,114,111,119,115,112,97,110,0,2,0,0,0,10,0,0,0,0,0,0,0,0,0,0,0,32,171,161,44,0,0,0,0,109,115,117,98,115,117,112,0,109,115,103,114,111,117,112,0,109,115,99,97,114,114,121,0,109,112,97,100,100,101,100,0,2,0,0,0,10,0,0,0,0,0,0,0,0,0,0,0,32,162,144,47,0,0,0,0,109,102,101,110,99,101,100,0,2,0,0,0,10,0,0,0,0,0,0,0,0,0,0,0,32,167,223,65,0,0,0,0,109,97,99,116,105,111,110,0,2,0,0,0,10,0,0,0,0,0,0,0,0,0,0,0,160,18,122,36,0,0,0,0,2,0,0,0,10,0,0,0,0,0,0,0,0,0,0,0,32,203,223,46,0,0,0,0,2,0,0,0,10,0,0,0,0,0,0,0,0,0,0,0,32,39,239,72,0,0,0,0,2,0,0,0,10,0,0,0,0,0,0,0,0,0,0,0,160,65,23,52,0,0,0,0,2,0,0,0,10,0,0,0,0,0,0,0,0,0,0,0,32,43,219,61,0,0,0,0,2,0,0,0,10,0,0,0,0,0,0,0,0,0,0,0,32,99,145,81,0,0,0,0,97,108,116,116,101,120,116,0,2,0,0,0,10,0,0,0,0,0,0,0,0,0,0,0,160,0,208,45,0,0,0,0,2,0,0,0,9,0,0,0,0,0,0,0,0,0,0,0,32,132,49,7,0,0,0,0,2,0,0,0,9,0,0,0,0,0,0,0,0,0,0,0,160,5,138,105,0,0,0,0,109,117,110,100,101,114,0,0,109,116,97,98,108,101,0,0,109,115,116,121,108,101,0,0,109,115,116,97,99,107,0,0,109,115,112,97,99,101,0,0,109,115,108,105,110,101,0,0,2,0,0,0,9,0,0,0,0,0,0,0,0,0,0,0,160,13,246,73,0,0,0,0,109,103,108,121,112,104,0,0,109,101,114,114,111,114,0,0,2,0,0,0,9,0,0,0,0,0,0,0,0,0,0,0,160,63,78,60,0,0,0,0,104,101,105,103,104,116,0,0,2,0,0,0,9,0,0,0,0,0,0,0,0,0,0,0,32,25,234,18,0,0,0,0,119,105,100,116,104,0,0,0,2,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,160,98,209,75,0,0,0,0,2,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,32,180,76,62,0,0,0,0,109,116,101,120,116,0,0,0,109,115,114,111,119,0,0,0,109,115,113,114,116,0,0,0,109,114,111,111,116,0,0,0,2,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,160,11,190,46,0,0,0,0,109,111,118,101,114,0,0,0,2,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,160,16,165,48,0,0,0,0,109,102,114,97,99,0,0,0,2,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,160,160,81,38,0,0,0,0,2,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,32,179,135,50,0,0,0,0,2,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,32,13,203,116,0,0,0,0,2,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,160,189,229,4,0,0,0,0,100,101,112,116,104,0,0,0,99,111,108,111,114,0,0,0,99,108,111,115,101,0,0,0,2,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,160,233,253,103,0,0,0,0,111,112,101,110,0,0,0,0,110,111,110,101,0,0,0,0,109,115,117,112,0,0,0,0,2,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,160,57,106,39,0,0,0,0,109,115,117,98,0,0,0,0,2,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,32,114,217,45,0,0,0,0,2,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,160,159,152,50,0,0,0,0,109,114,111,119,0,0,0,0,2,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,32,106,75,99,0,0,0,0,2,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,32,45,137,93,0,0,0,0,109,97,116,104,0,0,0,0,2,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,32,149,156,47,0,0,0,0,2,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,32,183,35,114,0,0,0,0,115,114,99,0,0,0,0,0,2,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,160,65,249,75,0,0,0,0,109,116,114,0,0,0,0,0,109,116,100,0,0,0,0,0,2,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,160,140,89,76,0,0,0,0,2,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,160,49,162,47,0,0,0,0,2,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,32,212,9,55,0,0,0,0,2,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,160,57,72,81,0,0,0,0,2,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,160,210,63,79,0,0,0,0,2,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,32,182,76,25,0,0,0,0,2,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,160,50,60,58,0,0,0,0,2,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,160,180,25,51,0,0,0,0,100,105,114,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
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
function invoke_v(index) {
  try {
    Module["dynCall_v"](index);
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
function invoke_vi(index,a1) {
  try {
    Module["dynCall_vi"](index,a1);
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
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZN7WebCore11MathMLNames10heightAttrE=(H_BASE+4240)|0;
  var __ZN7WebCore11MathMLNames14maligngroupTagE=(H_BASE+3984)|0;
  var __ZN7WebCore11MathMLNames10mactionTagE=(H_BASE+4232)|0;
  var __ZN7WebCore11MathMLNames9mstackTagE=(H_BASE+3672)|0;
  var __ZN7WebCore11MathMLNames12mathsizeAttrE=(H_BASE+4128)|0;
  var __ZN7WebCore11MathMLNames13mathcolorAttrE=(H_BASE+4064)|0;
  var __ZN7WebCore11MathMLNames14backgroundAttrE=(H_BASE+4024)|0;
  var __ZN7WebCore11MathMLNames12semanticsTagE=(H_BASE+4104)|0;
  var __ZN7WebCore11MathMLNames10mfencedTagE=(H_BASE+4224)|0;
  var __ZN7WebCore11MathMLNames18mathmlNamespaceURIE=(H_BASE+3912)|0;
  var __ZN7WebCore11MathMLNames13annotationTagE=(H_BASE+4088)|0;
  var __ZN7WebCore11MathMLNames14mprescriptsTagE=(H_BASE+3976)|0;
  var __ZN7WebCore11MathMLNames13munderoverTagE=(H_BASE+4048)|0;
  var __ZN7WebCore11MathMLNames9mglyphTagE=(H_BASE+3696)|0;
  var __ZN7WebCore11MathMLNames7dirAttrE=(H_BASE+3840)|0;
  var __ZN7WebCore11MathMLNames7msubTagE=(H_BASE+3816)|0;
  var __ZN7WebCore11MathMLNames12stretchyAttrE=(H_BASE+4096)|0;
  var __ZN7WebCore11MathMLNames5moTagE=(H_BASE+3872)|0;
  var __ZN7WebCore11MathMLNames13malignmarkTagE=(H_BASE+4072)|0;
  var __ZN7WebCore11MathMLNames10mscarryTagE=(H_BASE+4208)|0;
  var __ZN7WebCore11MathMLNames8mfracTagE=(H_BASE+3784)|0;
  var __ZN7WebCore11MathMLNames10msgroupTagE=(H_BASE+4200)|0;
  var __ZN7WebCore11MathMLNames10mpaddedTagE=(H_BASE+4216)|0;
  var __ZN7WebCore11MathMLNames12mscarriesTagE=(H_BASE+4120)|0;
  var __ZN7WebCore11MathMLNames14fontweightAttrE=(H_BASE+3992)|0;
  var __ZN7WebCore11MathMLNames12fontsizeAttrE=(H_BASE+4136)|0;
  var __ZN7WebCore11MathMLNames9colorAttrE=(H_BASE+3720)|0;
  var __ZN7WebCore11MathMLNames9mspaceTagE=(H_BASE+3680)|0;
  var __ZN7WebCore11MathMLNames9mstyleTagE=(H_BASE+3664)|0;
  var __ZN7WebCore11MathMLNames17definitionURLAttrE=(H_BASE+3936)|0;
  var __ZN7WebCore11MathMLNames14separatorsAttrE=(H_BASE+3968)|0;
  var __ZN7WebCore11MathMLNames9closeAttrE=(H_BASE+3728)|0;
  var __ZN7WebCore11MathMLNames18mathbackgroundAttrE=(H_BASE+3920)|0;
  var __ZN7WebCore11MathMLNames9mslineTagE=(H_BASE+3688)|0;
  var __ZN7WebCore11MathMLNames13selectionAttrE=(H_BASE+4040)|0;
  var __ZN7WebCore11MathMLNames7noneTagE=(H_BASE+3800)|0;
  var __ZN7WebCore11MathMLNames18subscriptshiftAttrE=(H_BASE+3904)|0;
  var __ZN7WebCore11MathMLNames9widthAttrE=(H_BASE+3640)|0;
  var __ZN7WebCore11MathMLNames12encodingAttrE=(H_BASE+4144)|0;
  var __ZN7WebCore11MathMLNames5mnTagE=(H_BASE+3880)|0;
  var __ZN7WebCore11MathMLNames5miTagE=(H_BASE+3888)|0;
  var __ZN7WebCore11MathMLNames8mrootTagE=(H_BASE+3768)|0;
  var __ZN7WebCore11MathMLNames13mlabeledtrTagE=(H_BASE+4056)|0;
  var __ZN7WebCore11MathMLNames7mrowTagE=(H_BASE+3824)|0;
  var __ZN7WebCore11MathMLNames10msubsupTagE=(H_BASE+4192)|0;
  var __ZN7WebCore11MathMLNames8mtextTagE=(H_BASE+3744)|0;
  var __ZN7WebCore11MathMLNames7mathTagE=(H_BASE+3832)|0;
  var __ZN7WebCore11MathMLNames16mmultiscriptsTagE=(H_BASE+3952)|0;
  var __ZN7WebCore11MathMLNames13fontstyleAttrE=(H_BASE+4080)|0;
  var __ZN7WebCore11MathMLNames11mlongdivTagE=(H_BASE+4168)|0;
  var __ZN7WebCore11MathMLNames9depthAttrE=(H_BASE+3712)|0;
  var __ZN7WebCore11MathMLNames8openAttrE=(H_BASE+3736)|0;
  var __ZN7WebCore11MathMLNames12numalignAttrE=(H_BASE+4112)|0;
  var __ZN7WebCore11MathMLNames14denomalignAttrE=(H_BASE+4008)|0;
  var __ZN7WebCore11MathMLNames8msqrtTagE=(H_BASE+3760)|0;
  var __ZN7WebCore11MathMLNames5msTagE=(H_BASE+3864)|0;
  var __ZN7WebCore11MathMLNames20superscriptshiftAttrE=(H_BASE+3896)|0;
  var __ZN7WebCore11MathMLNames17linethicknessAttrE=(H_BASE+3928)|0;
  var __ZN7WebCore11MathMLNames14actiontypeAttrE=(H_BASE+4032)|0;
  var __ZN7WebCore11MathMLNames6mtdTagE=(H_BASE+3856)|0;
  var __ZN7WebCore11MathMLNames17annotation_xmlTagE=(H_BASE+3944)|0;
  var __ZN7WebCore11MathMLNames11alttextAttrE=(H_BASE+4184)|0;
  var __ZN7WebCore11MathMLNames6mtrTagE=(H_BASE+3848)|0;
  var __ZN7WebCore11MathMLNames9merrorTagE=(H_BASE+3704)|0;
  var __ZN7WebCore11MathMLNames7msupTagE=(H_BASE+3808)|0;
  var __ZN7WebCore11MathMLNames11mencloseTagE=(H_BASE+4176)|0;
  var __ZN7WebCore11MathMLNames7srcAttrE=(H_BASE+3792)|0;
  var __ZN7WebCore11MathMLNames14fontfamilyAttrE=(H_BASE+4000)|0;
  var __ZN7WebCore11MathMLNames8moverTagE=(H_BASE+3776)|0;
  var __ZN7WebCore11MathMLNames11mphantomTagE=(H_BASE+4160)|0;
  var __ZN7WebCore11MathMLNames9mtableTagE=(H_BASE+3656)|0;
  var __ZN7WebCore11MathMLNames14columnspanAttrE=(H_BASE+4016)|0;
  var __ZN7WebCore11MathMLNames9munderTagE=(H_BASE+3648)|0;
  var __ZN7WebCore11MathMLNames15mathvariantAttrE=(H_BASE+3960)|0;
  var __ZN7WebCore11MathMLNames11rowspanAttrE=(H_BASE+4152)|0;
  var __ZN7WebCore11MathMLNames8msrowTagE=(H_BASE+3752)|0;
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
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var invoke_vi=env.invoke_vi;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function runPostSets() {
 HEAP32[H_BASE + 48 >> 2] = H_BASE + 4088;
 HEAP32[H_BASE + 52 >> 2] = H_BASE + 2632;
 HEAP32[H_BASE + 56 >> 2] = H_BASE + 3944;
 HEAP32[H_BASE + 60 >> 2] = H_BASE + 1808;
 HEAP32[H_BASE + 64 >> 2] = H_BASE + 4232;
 HEAP32[H_BASE + 68 >> 2] = H_BASE + 3344;
 HEAP32[H_BASE + 72 >> 2] = H_BASE + 3984;
 HEAP32[H_BASE + 76 >> 2] = H_BASE + 2304;
 HEAP32[H_BASE + 80 >> 2] = H_BASE + 4072;
 HEAP32[H_BASE + 84 >> 2] = H_BASE + 2480;
 HEAP32[H_BASE + 88 >> 2] = H_BASE + 3832;
 HEAP32[H_BASE + 92 >> 2] = H_BASE + 1352;
 HEAP32[H_BASE + 96 >> 2] = H_BASE + 4176;
 HEAP32[H_BASE + 100 >> 2] = H_BASE + 3032;
 HEAP32[H_BASE + 104 >> 2] = H_BASE + 3704;
 HEAP32[H_BASE + 108 >> 2] = H_BASE + 3584;
 HEAP32[H_BASE + 112 >> 2] = H_BASE + 4224;
 HEAP32[H_BASE + 116 >> 2] = H_BASE + 3312;
 HEAP32[H_BASE + 120 >> 2] = H_BASE + 3784;
 HEAP32[H_BASE + 124 >> 2] = H_BASE + 1136;
 HEAP32[H_BASE + 128 >> 2] = H_BASE + 3696;
 HEAP32[H_BASE + 132 >> 2] = H_BASE + 3560;
 HEAP32[H_BASE + 136 >> 2] = H_BASE + 3888;
 HEAP32[H_BASE + 140 >> 2] = H_BASE + 1544;
 HEAP32[H_BASE + 144 >> 2] = H_BASE + 4056;
 HEAP32[H_BASE + 148 >> 2] = H_BASE + 2448;
 HEAP32[H_BASE + 152 >> 2] = H_BASE + 4168;
 HEAP32[H_BASE + 156 >> 2] = H_BASE + 3e3;
 HEAP32[H_BASE + 160 >> 2] = H_BASE + 3952;
 HEAP32[H_BASE + 164 >> 2] = H_BASE + 1864;
 HEAP32[H_BASE + 168 >> 2] = H_BASE + 3880;
 HEAP32[H_BASE + 172 >> 2] = H_BASE + 1520;
 HEAP32[H_BASE + 176 >> 2] = H_BASE + 3872;
 HEAP32[H_BASE + 180 >> 2] = H_BASE + 1496;
 HEAP32[H_BASE + 184 >> 2] = H_BASE + 3776;
 HEAP32[H_BASE + 188 >> 2] = H_BASE + 1088;
 HEAP32[H_BASE + 192 >> 2] = H_BASE + 4216;
 HEAP32[H_BASE + 196 >> 2] = H_BASE + 3288;
 HEAP32[H_BASE + 200 >> 2] = H_BASE + 4160;
 HEAP32[H_BASE + 204 >> 2] = H_BASE + 2968;
 HEAP32[H_BASE + 208 >> 2] = H_BASE + 3976;
 HEAP32[H_BASE + 212 >> 2] = H_BASE + 2192;
 HEAP32[H_BASE + 216 >> 2] = H_BASE + 3768;
 HEAP32[H_BASE + 220 >> 2] = H_BASE + 1064;
 HEAP32[H_BASE + 224 >> 2] = H_BASE + 3824;
 HEAP32[H_BASE + 228 >> 2] = H_BASE + 1328;
 HEAP32[H_BASE + 232 >> 2] = H_BASE + 3864;
 HEAP32[H_BASE + 236 >> 2] = H_BASE + 1472;
 HEAP32[H_BASE + 240 >> 2] = H_BASE + 4120;
 HEAP32[H_BASE + 244 >> 2] = H_BASE + 2784;
 HEAP32[H_BASE + 248 >> 2] = H_BASE + 4208;
 HEAP32[H_BASE + 252 >> 2] = H_BASE + 3256;
 HEAP32[H_BASE + 256 >> 2] = H_BASE + 4200;
 HEAP32[H_BASE + 260 >> 2] = H_BASE + 3232;
 HEAP32[H_BASE + 264 >> 2] = H_BASE + 3688;
 HEAP32[H_BASE + 268 >> 2] = H_BASE + 3536;
 HEAP32[H_BASE + 272 >> 2] = H_BASE + 3680;
 HEAP32[H_BASE + 276 >> 2] = H_BASE + 3512;
 HEAP32[H_BASE + 280 >> 2] = H_BASE + 3760;
 HEAP32[H_BASE + 284 >> 2] = H_BASE + 1032;
 HEAP32[H_BASE + 288 >> 2] = H_BASE + 3752;
 HEAP32[H_BASE + 292 >> 2] = H_BASE + 1008;
 HEAP32[H_BASE + 296 >> 2] = H_BASE + 3672;
 HEAP32[H_BASE + 300 >> 2] = H_BASE + 3488;
 HEAP32[H_BASE + 304 >> 2] = H_BASE + 3664;
 HEAP32[H_BASE + 308 >> 2] = H_BASE + 3464;
 HEAP32[H_BASE + 312 >> 2] = H_BASE + 3816;
 HEAP32[H_BASE + 316 >> 2] = H_BASE + 1304;
 HEAP32[H_BASE + 320 >> 2] = H_BASE + 4192;
 HEAP32[H_BASE + 324 >> 2] = H_BASE + 3200;
 HEAP32[H_BASE + 328 >> 2] = H_BASE + 3808;
 HEAP32[H_BASE + 332 >> 2] = H_BASE + 1280;
 HEAP32[H_BASE + 336 >> 2] = H_BASE + 3656;
 HEAP32[H_BASE + 340 >> 2] = H_BASE + 3440;
 HEAP32[H_BASE + 344 >> 2] = H_BASE + 3856;
 HEAP32[H_BASE + 348 >> 2] = H_BASE + 1424;
 HEAP32[H_BASE + 352 >> 2] = H_BASE + 3744;
 HEAP32[H_BASE + 356 >> 2] = H_BASE + 984;
 HEAP32[H_BASE + 360 >> 2] = H_BASE + 3848;
 HEAP32[H_BASE + 364 >> 2] = H_BASE + 1400;
 HEAP32[H_BASE + 368 >> 2] = H_BASE + 3648;
 HEAP32[H_BASE + 372 >> 2] = H_BASE + 3400;
 HEAP32[H_BASE + 376 >> 2] = H_BASE + 4048;
 HEAP32[H_BASE + 380 >> 2] = H_BASE + 2392;
 HEAP32[H_BASE + 384 >> 2] = H_BASE + 3800;
 HEAP32[H_BASE + 388 >> 2] = H_BASE + 1256;
 HEAP32[H_BASE + 392 >> 2] = H_BASE + 4104;
 HEAP32[H_BASE + 396 >> 2] = H_BASE + 2688;
 HEAP32[H_BASE + 400 >> 2] = H_BASE + 4032;
 HEAP32[H_BASE + 404 >> 2] = H_BASE + 2664;
 HEAP32[H_BASE + 408 >> 2] = H_BASE + 4184;
 HEAP32[H_BASE + 412 >> 2] = H_BASE + 3368;
 HEAP32[H_BASE + 416 >> 2] = H_BASE + 4024;
 HEAP32[H_BASE + 420 >> 2] = H_BASE + 2608;
 HEAP32[H_BASE + 424 >> 2] = H_BASE + 3728;
 HEAP32[H_BASE + 428 >> 2] = H_BASE + 1208;
 HEAP32[H_BASE + 432 >> 2] = H_BASE + 3720;
 HEAP32[H_BASE + 436 >> 2] = H_BASE + 1184;
 HEAP32[H_BASE + 440 >> 2] = H_BASE + 4016;
 HEAP32[H_BASE + 444 >> 2] = H_BASE + 2584;
 HEAP32[H_BASE + 448 >> 2] = H_BASE + 3936;
 HEAP32[H_BASE + 452 >> 2] = H_BASE + 1992;
 HEAP32[H_BASE + 456 >> 2] = H_BASE + 4008;
 HEAP32[H_BASE + 460 >> 2] = H_BASE + 2560;
 HEAP32[H_BASE + 464 >> 2] = H_BASE + 3712;
 HEAP32[H_BASE + 468 >> 2] = H_BASE + 1160;
 HEAP32[H_BASE + 472 >> 2] = H_BASE + 3840;
 HEAP32[H_BASE + 476 >> 2] = H_BASE + 1448;
 HEAP32[H_BASE + 480 >> 2] = H_BASE + 4144;
 HEAP32[H_BASE + 484 >> 2] = H_BASE + 3104;
 HEAP32[H_BASE + 488 >> 2] = H_BASE + 4e3;
 HEAP32[H_BASE + 492 >> 2] = H_BASE + 2536;
 HEAP32[H_BASE + 496 >> 2] = H_BASE + 4136;
 HEAP32[H_BASE + 500 >> 2] = H_BASE + 3080;
 HEAP32[H_BASE + 504 >> 2] = H_BASE + 4080;
 HEAP32[H_BASE + 508 >> 2] = H_BASE + 2856;
 HEAP32[H_BASE + 512 >> 2] = H_BASE + 3992;
 HEAP32[H_BASE + 516 >> 2] = H_BASE + 2512;
 HEAP32[H_BASE + 520 >> 2] = H_BASE + 4240;
 HEAP32[H_BASE + 524 >> 2] = H_BASE + 3608;
 HEAP32[H_BASE + 528 >> 2] = H_BASE + 3928;
 HEAP32[H_BASE + 532 >> 2] = H_BASE + 1920;
 HEAP32[H_BASE + 536 >> 2] = H_BASE + 3920;
 HEAP32[H_BASE + 540 >> 2] = H_BASE + 1768;
 HEAP32[H_BASE + 544 >> 2] = H_BASE + 4064;
 HEAP32[H_BASE + 548 >> 2] = H_BASE + 2824;
 HEAP32[H_BASE + 552 >> 2] = H_BASE + 4128;
 HEAP32[H_BASE + 556 >> 2] = H_BASE + 3056;
 HEAP32[H_BASE + 560 >> 2] = H_BASE + 3960;
 HEAP32[H_BASE + 564 >> 2] = H_BASE + 2264;
 HEAP32[H_BASE + 568 >> 2] = H_BASE + 4112;
 HEAP32[H_BASE + 572 >> 2] = H_BASE + 2912;
 HEAP32[H_BASE + 576 >> 2] = H_BASE + 3736;
 HEAP32[H_BASE + 580 >> 2] = H_BASE + 1232;
 HEAP32[H_BASE + 584 >> 2] = H_BASE + 4152;
 HEAP32[H_BASE + 588 >> 2] = H_BASE + 3152;
 HEAP32[H_BASE + 592 >> 2] = H_BASE + 4040;
 HEAP32[H_BASE + 596 >> 2] = H_BASE + 2712;
 HEAP32[H_BASE + 600 >> 2] = H_BASE + 3968;
 HEAP32[H_BASE + 604 >> 2] = H_BASE + 2360;
 HEAP32[H_BASE + 608 >> 2] = H_BASE + 3792;
 HEAP32[H_BASE + 612 >> 2] = H_BASE + 1376;
 HEAP32[H_BASE + 616 >> 2] = H_BASE + 4096;
 HEAP32[H_BASE + 620 >> 2] = H_BASE + 2888;
 HEAP32[H_BASE + 624 >> 2] = H_BASE + 3904;
 HEAP32[H_BASE + 628 >> 2] = H_BASE + 1712;
 HEAP32[H_BASE + 632 >> 2] = H_BASE + 3896;
 HEAP32[H_BASE + 636 >> 2] = H_BASE + 1640;
 HEAP32[H_BASE + 640 >> 2] = H_BASE + 3640;
 HEAP32[H_BASE + 644 >> 2] = H_BASE + 960;
 HEAP32[H_BASE + 656 >> 2] = H_BASE + 4032;
 HEAP32[H_BASE + 660 >> 2] = H_BASE + 4184;
 HEAP32[H_BASE + 664 >> 2] = H_BASE + 4024;
 HEAP32[H_BASE + 668 >> 2] = H_BASE + 3728;
 HEAP32[H_BASE + 672 >> 2] = H_BASE + 3720;
 HEAP32[H_BASE + 676 >> 2] = H_BASE + 4016;
 HEAP32[H_BASE + 680 >> 2] = H_BASE + 3936;
 HEAP32[H_BASE + 684 >> 2] = H_BASE + 4008;
 HEAP32[H_BASE + 688 >> 2] = H_BASE + 3712;
 HEAP32[H_BASE + 692 >> 2] = H_BASE + 3840;
 HEAP32[H_BASE + 696 >> 2] = H_BASE + 4144;
 HEAP32[H_BASE + 700 >> 2] = H_BASE + 4e3;
 HEAP32[H_BASE + 704 >> 2] = H_BASE + 4136;
 HEAP32[H_BASE + 708 >> 2] = H_BASE + 4080;
 HEAP32[H_BASE + 712 >> 2] = H_BASE + 3992;
 HEAP32[H_BASE + 716 >> 2] = H_BASE + 4240;
 HEAP32[H_BASE + 720 >> 2] = H_BASE + 3928;
 HEAP32[H_BASE + 724 >> 2] = H_BASE + 3920;
 HEAP32[H_BASE + 728 >> 2] = H_BASE + 4064;
 HEAP32[H_BASE + 732 >> 2] = H_BASE + 4128;
 HEAP32[H_BASE + 736 >> 2] = H_BASE + 3960;
 HEAP32[H_BASE + 740 >> 2] = H_BASE + 4112;
 HEAP32[H_BASE + 744 >> 2] = H_BASE + 3736;
 HEAP32[H_BASE + 748 >> 2] = H_BASE + 4152;
 HEAP32[H_BASE + 752 >> 2] = H_BASE + 4040;
 HEAP32[H_BASE + 756 >> 2] = H_BASE + 3968;
 HEAP32[H_BASE + 760 >> 2] = H_BASE + 3792;
 HEAP32[H_BASE + 764 >> 2] = H_BASE + 4096;
 HEAP32[H_BASE + 768 >> 2] = H_BASE + 3904;
 HEAP32[H_BASE + 772 >> 2] = H_BASE + 3896;
 HEAP32[H_BASE + 776 >> 2] = H_BASE + 3640;
 HEAP32[H_BASE + 784 >> 2] = H_BASE + 4088;
 HEAP32[H_BASE + 788 >> 2] = H_BASE + 3944;
 HEAP32[H_BASE + 792 >> 2] = H_BASE + 4232;
 HEAP32[H_BASE + 796 >> 2] = H_BASE + 3984;
 HEAP32[H_BASE + 800 >> 2] = H_BASE + 4072;
 HEAP32[H_BASE + 804 >> 2] = H_BASE + 3832;
 HEAP32[H_BASE + 808 >> 2] = H_BASE + 4176;
 HEAP32[H_BASE + 812 >> 2] = H_BASE + 3704;
 HEAP32[H_BASE + 816 >> 2] = H_BASE + 4224;
 HEAP32[H_BASE + 820 >> 2] = H_BASE + 3784;
 HEAP32[H_BASE + 824 >> 2] = H_BASE + 3696;
 HEAP32[H_BASE + 828 >> 2] = H_BASE + 3888;
 HEAP32[H_BASE + 832 >> 2] = H_BASE + 4056;
 HEAP32[H_BASE + 836 >> 2] = H_BASE + 4168;
 HEAP32[H_BASE + 840 >> 2] = H_BASE + 3952;
 HEAP32[H_BASE + 844 >> 2] = H_BASE + 3880;
 HEAP32[H_BASE + 848 >> 2] = H_BASE + 3872;
 HEAP32[H_BASE + 852 >> 2] = H_BASE + 3776;
 HEAP32[H_BASE + 856 >> 2] = H_BASE + 4216;
 HEAP32[H_BASE + 860 >> 2] = H_BASE + 4160;
 HEAP32[H_BASE + 864 >> 2] = H_BASE + 3976;
 HEAP32[H_BASE + 868 >> 2] = H_BASE + 3768;
 HEAP32[H_BASE + 872 >> 2] = H_BASE + 3824;
 HEAP32[H_BASE + 876 >> 2] = H_BASE + 3864;
 HEAP32[H_BASE + 880 >> 2] = H_BASE + 4120;
 HEAP32[H_BASE + 884 >> 2] = H_BASE + 4208;
 HEAP32[H_BASE + 888 >> 2] = H_BASE + 4200;
 HEAP32[H_BASE + 892 >> 2] = H_BASE + 3688;
 HEAP32[H_BASE + 896 >> 2] = H_BASE + 3680;
 HEAP32[H_BASE + 900 >> 2] = H_BASE + 3760;
 HEAP32[H_BASE + 904 >> 2] = H_BASE + 3752;
 HEAP32[H_BASE + 908 >> 2] = H_BASE + 3672;
 HEAP32[H_BASE + 912 >> 2] = H_BASE + 3664;
 HEAP32[H_BASE + 916 >> 2] = H_BASE + 3816;
 HEAP32[H_BASE + 920 >> 2] = H_BASE + 4192;
 HEAP32[H_BASE + 924 >> 2] = H_BASE + 3808;
 HEAP32[H_BASE + 928 >> 2] = H_BASE + 3656;
 HEAP32[H_BASE + 932 >> 2] = H_BASE + 3856;
 HEAP32[H_BASE + 936 >> 2] = H_BASE + 3744;
 HEAP32[H_BASE + 940 >> 2] = H_BASE + 3848;
 HEAP32[H_BASE + 944 >> 2] = H_BASE + 3648;
 HEAP32[H_BASE + 948 >> 2] = H_BASE + 4048;
 HEAP32[H_BASE + 952 >> 2] = H_BASE + 3800;
 HEAP32[H_BASE + 956 >> 2] = H_BASE + 4104;
 HEAP32[H_BASE + 968 >> 2] = H_BASE + 2880;
 HEAP32[H_BASE + 992 >> 2] = H_BASE + 2936;
 HEAP32[H_BASE + 1016 >> 2] = H_BASE + 2944;
 HEAP32[H_BASE + 1040 >> 2] = H_BASE + 2952;
 HEAP32[H_BASE + 1072 >> 2] = H_BASE + 2960;
 HEAP32[H_BASE + 1096 >> 2] = H_BASE + 2992;
 HEAP32[H_BASE + 1144 >> 2] = H_BASE + 3024;
 HEAP32[H_BASE + 1168 >> 2] = H_BASE + 3128;
 HEAP32[H_BASE + 1192 >> 2] = H_BASE + 3136;
 HEAP32[H_BASE + 1216 >> 2] = H_BASE + 3144;
 HEAP32[H_BASE + 1240 >> 2] = H_BASE + 3176;
 HEAP32[H_BASE + 1264 >> 2] = H_BASE + 3184;
 HEAP32[H_BASE + 1288 >> 2] = H_BASE + 3192;
 HEAP32[H_BASE + 1312 >> 2] = H_BASE + 3224;
 HEAP32[H_BASE + 1336 >> 2] = H_BASE + 3280;
 HEAP32[H_BASE + 1360 >> 2] = H_BASE + 3336;
 HEAP32[H_BASE + 1384 >> 2] = H_BASE + 3392;
 HEAP32[H_BASE + 1408 >> 2] = H_BASE + 3424;
 HEAP32[H_BASE + 1432 >> 2] = H_BASE + 3432;
 HEAP32[H_BASE + 1456 >> 2] = H_BASE + 3632;
 HEAP32[H_BASE + 1480 >> 2] = H_BASE + 1056;
 HEAP32[H_BASE + 1504 >> 2] = H_BASE + 1112;
 HEAP32[H_BASE + 1528 >> 2] = H_BASE + 1120;
 HEAP32[H_BASE + 1552 >> 2] = H_BASE + 1128;
 HEAP32[H_BASE + 1648 >> 2] = H_BASE + 1568;
 HEAP32[H_BASE + 1720 >> 2] = H_BASE + 1592;
 HEAP32[H_BASE + 1776 >> 2] = H_BASE + 1608;
 HEAP32[H_BASE + 1816 >> 2] = H_BASE + 1624;
 HEAP32[H_BASE + 1872 >> 2] = H_BASE + 1664;
 HEAP32[H_BASE + 1928 >> 2] = H_BASE + 1680;
 HEAP32[H_BASE + 2e3 >> 2] = H_BASE + 1696;
 HEAP32[H_BASE + 2200 >> 2] = H_BASE + 1736;
 HEAP32[H_BASE + 2272 >> 2] = H_BASE + 1752;
 HEAP32[H_BASE + 2312 >> 2] = H_BASE + 1792;
 HEAP32[H_BASE + 2368 >> 2] = H_BASE + 1832;
 HEAP32[H_BASE + 2400 >> 2] = H_BASE + 1848;
 HEAP32[H_BASE + 2456 >> 2] = H_BASE + 1888;
 HEAP32[H_BASE + 2488 >> 2] = H_BASE + 1904;
 HEAP32[H_BASE + 2520 >> 2] = H_BASE + 1944;
 HEAP32[H_BASE + 2544 >> 2] = H_BASE + 1960;
 HEAP32[H_BASE + 2568 >> 2] = H_BASE + 1976;
 HEAP32[H_BASE + 2592 >> 2] = H_BASE + 2016;
 HEAP32[H_BASE + 2616 >> 2] = H_BASE + 2032;
 HEAP32[H_BASE + 2640 >> 2] = H_BASE + 2048;
 HEAP32[H_BASE + 2672 >> 2] = H_BASE + 2064;
 HEAP32[H_BASE + 2696 >> 2] = H_BASE + 2080;
 HEAP32[H_BASE + 2720 >> 2] = H_BASE + 2096;
 HEAP32[H_BASE + 2792 >> 2] = H_BASE + 2112;
 HEAP32[H_BASE + 2832 >> 2] = H_BASE + 2128;
 HEAP32[H_BASE + 2864 >> 2] = H_BASE + 2144;
 HEAP32[H_BASE + 2896 >> 2] = H_BASE + 2160;
 HEAP32[H_BASE + 2920 >> 2] = H_BASE + 2176;
 HEAP32[H_BASE + 2976 >> 2] = H_BASE + 2216;
 HEAP32[H_BASE + 3008 >> 2] = H_BASE + 2232;
 HEAP32[H_BASE + 3040 >> 2] = H_BASE + 2248;
 HEAP32[H_BASE + 3064 >> 2] = H_BASE + 2288;
 HEAP32[H_BASE + 3088 >> 2] = H_BASE + 2328;
 HEAP32[H_BASE + 3112 >> 2] = H_BASE + 2344;
 HEAP32[H_BASE + 3160 >> 2] = H_BASE + 2384;
 HEAP32[H_BASE + 3208 >> 2] = H_BASE + 2416;
 HEAP32[H_BASE + 3240 >> 2] = H_BASE + 2424;
 HEAP32[H_BASE + 3264 >> 2] = H_BASE + 2432;
 HEAP32[H_BASE + 3296 >> 2] = H_BASE + 2440;
 HEAP32[H_BASE + 3320 >> 2] = H_BASE + 2472;
 HEAP32[H_BASE + 3352 >> 2] = H_BASE + 2504;
 HEAP32[H_BASE + 3376 >> 2] = H_BASE + 2656;
 HEAP32[H_BASE + 3408 >> 2] = H_BASE + 2736;
 HEAP32[H_BASE + 3448 >> 2] = H_BASE + 2744;
 HEAP32[H_BASE + 3472 >> 2] = H_BASE + 2752;
 HEAP32[H_BASE + 3496 >> 2] = H_BASE + 2760;
 HEAP32[H_BASE + 3520 >> 2] = H_BASE + 2768;
 HEAP32[H_BASE + 3544 >> 2] = H_BASE + 2776;
 HEAP32[H_BASE + 3568 >> 2] = H_BASE + 2808;
 HEAP32[H_BASE + 3592 >> 2] = H_BASE + 2816;
 HEAP32[H_BASE + 3616 >> 2] = H_BASE + 2848;
}
function __ZN7WebCore11MathMLNames4initEv() {
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i2 = i1 | 0;
 i3 = i1 + 8 | 0;
 if (HEAP8[H_BASE + 648 | 0] | 0) {
  STACKTOP = i1;
  return;
 }
 HEAP8[H_BASE + 648 | 0] = 1;
 __ZN3WTF12AtomicString4initEv();
 __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i2, H_BASE + 8 | 0, 34);
 i4 = i3 | 0;
 i5 = i2 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i4 >> 2] = i2;
 HEAP32[H_BASE + 3912 >> 2] = i2;
 if ((i2 | 0) == 0) {
  i6 = 0;
 } else {
  i5 = i2 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
  i6 = 0;
 }
 while (1) {
  __ZN7WebCore19createQualifiedNameEPvPN3WTF10StringImplERKNS1_12AtomicStringE(HEAP32[H_BASE + 48 + (i6 << 3) >> 2] | 0, HEAP32[H_BASE + 48 + (i6 << 3) + 4 >> 2] | 0, i3);
  i5 = i6 + 1 | 0;
  if (i5 >>> 0 < 44 >>> 0) {
   i6 = i5;
  } else {
   i7 = 0;
   break;
  }
 }
 while (1) {
  __ZN7WebCore19createQualifiedNameEPvPN3WTF10StringImplE(HEAP32[H_BASE + 400 + (i7 << 3) >> 2] | 0, HEAP32[H_BASE + 400 + (i7 << 3) + 4 >> 2] | 0);
  i7 = i7 + 1 | 0;
  if (i7 >>> 0 >= 31 >>> 0) {
   break;
  }
 }
 i7 = HEAP32[i4 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i1;
  return;
 }
 i4 = i7 | 0;
 i6 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i7);
  STACKTOP = i1;
  return;
 } else {
  HEAP32[i4 >> 2] = i6;
  STACKTOP = i1;
  return;
 }
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
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 1](i2 | 0, i3 | 0) | 0;
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
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 1](i2 | 0);
}
function __ZN7WebCore11MathMLNames14getMathMLAttrsEv() {
 return H_BASE + 656 | 0;
}
function __ZN7WebCore11MathMLNames13getMathMLTagsEv() {
 return H_BASE + 784 | 0;
}
function b2(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(2);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
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
function b3(i1) {
 i1 = i1 | 0;
 abort(3);
}
function b1() {
 abort(1);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_ii = [b0,b0];
  var FUNCTION_TABLE_v = [b1,b1];
  var FUNCTION_TABLE_iii = [b2,b2];
  var FUNCTION_TABLE_vi = [b3,b3];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_vi: dynCall_vi };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_vi": invoke_vi, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore11MathMLNames14getMathMLAttrsEv","__ZN7WebCore11MathMLNames4initEv","__ZN7WebCore11MathMLNames13getMathMLTagsEv","_memset","_memcpy"]

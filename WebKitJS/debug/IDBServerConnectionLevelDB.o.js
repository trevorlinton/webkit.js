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
H_BASE = parentModule["_malloc"](2984 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 2984;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore26IDBServerConnectionLevelDBC1ERKN3WTF6StringEPNS_22IDBBackingStoreLevelDBE;
var __ZN7WebCore26IDBServerConnectionLevelDBD1Ev;
/* memory initializer */ allocate([69,114,114,111,114,32,99,108,101,97,114,105,110,103,32,111,98,106,101,99,116,32,115,116,111,114,101,0,0,0,0,0,69,114,114,111,114,32,100,101,108,101,116,105,110,103,32,100,97,116,97,32,105,110,32,114,97,110,103,101,0,0,0,0,73,110,116,101,114,110,97,108,32,101,114,114,111,114,32,117,112,100,97,116,105,110,103,32,107,101,121,32,103,101,110,101,114,97,116,111,114,46,0,0,73,110,116,101,114,110,97,108,32,101,114,114,111,114,58,32,98,97,99,107,105,110,103,32,115,116,111,114,101,32,101,114,114,111,114,32,112,101,114,102,111,114,109,105,110,103,32,112,117,116,47,97,100,100,46,0,73,110,116,101,114,110,97,108,32,101,114,114,111,114,58,32,98,97,99,107,105,110,103,32,115,116,111,114,101,32,101,114,114,111,114,32,117,112,100,97,116,105,110,103,32,105,110,100,101,120,32,107,101,121,115,46,0,0,0,0,0,0,0,0,75,101,121,32,97,108,114,101,97,100,121,32,101,120,105,115,116,115,32,105,110,32,116,104,101,32,111,98,106,101,99,116,32,115,116,111,114,101,46,0,73,110,116,101,114,110,97,108,32,101,114,114,111,114,32,99,104,101,99,107,105,110,103,32,107,101,121,32,101,120,105,115,116,101,110,99,101,46,0,0,77,97,120,105,109,117,109,32,107,101,121,32,103,101,110,101,114,97,116,111,114,32,118,97,108,117,101,32,114,101,97,99,104,101,100,46,0,0,0,0,73,110,116,101,114,110,97,108,32,101,114,114,111,114,58,32,115,101,116,116,105,110,103,32,105,110,100,101,120,32,107,101,121,115,46,0,0,0,0,0,73,110,116,101,114,110,97,108,32,101,114,114,111,114,58,32,115,101,116,116,105,110,103,32,105,110,100,101,120,32,107,101,121,115,32,102,111,114,32,111,98,106,101,99,116,32,115,116,111,114,101,46,0,0,0,0,73,110,116,101,114,110,97,108,32,101,114,114,111,114,32,99,114,101,97,116,105,110,103,32,111,98,106,101,99,116,32,115,116,111,114,101,32,39,37,115,39,46,0,0,0,0,0,0,73,110,116,101,114,110,97,108,32,101,114,114,111,114,32,119,104,101,110,32,116,114,121,105,110,103,32,116,111,32,99,114,101,97,116,101,32,105,110,100,101,120,32,39,37,115,39,46,0,0,0,0,0,0,0,0,73,110,116,101,114,110,97,108,32,101,114,114,111,114,32,100,101,108,101,116,105,110,103,32,105,110,100,101,120,32,39,37,115,39,46,0,0,0,0,0,73,110,116,101,114,110,97,108,32,101,114,114,111,114,32,100,101,108,101,116,105,110,103,32,111,98,106,101,99,116,32,115,116,111,114,101,32,39,37,115,39,46,0,0,0,0,0,0,69,114,114,111,114,32,119,114,105,116,105,110,103,32,100,97,116,97,32,116,111,32,115,116,97,98,108,101,32,115,116,111,114,97,103,101,32,119,104,101,110,32,117,112,100,97,116,105,110,103,32,118,101,114,115,105,111,110,46,0,0,0,0,0,73,110,116,101,114,110,97,108,32,101,114,114,111,114,32,105,110,32,103,101,116,80,114,105,109,97,114,121,75,101,121,86,105,97,73,110,100,101,120,46,0,0,0,0,0,0,0,0,73,110,116,101,114,110,97,108,32,101,114,114,111,114,32,105,110,32,103,101,116,82,101,99,111,114,100,46,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
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
 var ctlz_i8 = allocate([8,7,6,6,5,5,5,5,4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_DYNAMIC);
 var cttz_i8 = allocate([8,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,6,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,7,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,6,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0], "i8", ALLOC_DYNAMIC);
var Math_min = Math.min;
function invoke_viiiiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13) {
  try {
    Module["dynCall_viiiiiiiiiiiii"](index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13);
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
function invoke_viiiiiii(index,a1,a2,a3,a4,a5,a6,a7) {
  try {
    Module["dynCall_viiiiiii"](index,a1,a2,a3,a4,a5,a6,a7);
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
function invoke_viiiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12) {
  try {
    Module["dynCall_viiiiiiiiiiii"](index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_ii(index,a1) {
  try {
    return Module["dynCall_ii"](index,a1);
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
function invoke_viiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11) {
  try {
    Module["dynCall_viiiiiiiiiii"](index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11);
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
function invoke_viiii(index,a1,a2,a3,a4) {
  try {
    Module["dynCall_viiii"](index,a1,a2,a3,a4);
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
function invoke_viii(index,a1,a2,a3) {
  try {
    Module["dynCall_viii"](index,a1,a2,a3);
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
  var cttz_i8=env.cttz_i8|0;
  var ctlz_i8=env.ctlz_i8|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore26IDBServerConnectionLevelDBE=(H_BASE+2864)|0;
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
  var invoke_viiiiiiiiiiiii=env.invoke_viiiiiiiiiiiii;
  var invoke_viiiiii=env.invoke_viiiiii;
  var invoke_viiiiiii=env.invoke_viiiiiii;
  var invoke_viiiii=env.invoke_viiiii;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_viiiiiiiiiiii=env.invoke_viiiiiiiiiiii;
  var invoke_ii=env.invoke_ii;
  var invoke_iiii=env.invoke_iiii;
  var invoke_viiiiiiiiiii=env.invoke_viiiiiiiiiii;
  var invoke_v=env.invoke_v;
  var invoke_viiii=env.invoke_viiii;
  var invoke_iii=env.invoke_iii;
  var invoke_viii=env.invoke_viii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore26IDBServerConnectionLevelDB3getERNS_21IDBTransactionBackendERKNS_12GetOperationENSt3__18functionIFvN3WTF10PassRefPtrINS_16IDBDatabaseErrorEEEEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 848 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 48 | 0;
 i11 = i5 + 72 | 0;
 i12 = i5 + 80 | 0;
 i13 = i5 + 88 | 0;
 i14 = i5 + 104 | 0;
 i15 = i5 + 112 | 0;
 i16 = i5 + 120 | 0;
 i17 = i5 + 144 | 0;
 i18 = i5 + 168 | 0;
 i19 = i5 + 192 | 0;
 i20 = i5 + 216 | 0;
 i21 = i5 + 240 | 0;
 i22 = i5 + 248 | 0;
 i23 = i5 + 256 | 0;
 i24 = i5 + 280 | 0;
 i25 = i5 + 304 | 0;
 i26 = i5 + 328 | 0;
 i27 = i5 + 336 | 0;
 i28 = i5 + 360 | 0;
 i29 = i5 + 384 | 0;
 i30 = i5 + 392 | 0;
 i31 = i5 + 400 | 0;
 i32 = i5 + 424 | 0;
 i33 = i5 + 448 | 0;
 i34 = i5 + 472 | 0;
 i35 = i5 + 496 | 0;
 i36 = i5 + 504 | 0;
 i37 = i5 + 528 | 0;
 i38 = i5 + 552 | 0;
 i39 = i5 + 568 | 0;
 i40 = i5 + 576 | 0;
 i41 = i5 + 584 | 0;
 i42 = i5 + 608 | 0;
 i43 = i5 + 632 | 0;
 i44 = i5 + 656 | 0;
 i45 = i5 + 680 | 0;
 i46 = i5 + 704 | 0;
 i47 = i5 + 712 | 0;
 i48 = i5 + 720 | 0;
 i49 = i5 + 744 | 0;
 i50 = i5 + 768 | 0;
 i51 = i5 + 792 | 0;
 i52 = i5 + 800 | 0;
 i53 = i5 + 824 | 0;
 i54 = i2 + 184 | 0;
 i55 = HEAP32[i54 >> 2] | 0;
 i56 = HEAP32[i54 + 4 >> 2] | 0;
 i54 = HEAP32[i1 + 20 >> 2] | 0;
 i57 = HEAP32[i1 + 12 >> 2] | 0;
 i58 = _i64Add(i55, i56, ~0, ~i55) | 0;
 i59 = tempRet0;
 i60 = (i58 >>> 22 | i59 << 10) ^ i58;
 i58 = (i59 >>> 22 | 0 << 10) ^ i59;
 i59 = _i64Add(i60, i58, ~(i60 << 13 | 0 >>> 19), ~(i58 << 13 | i60 >>> 19)) | 0;
 i60 = tempRet0;
 i58 = ___muldi3((i59 >>> 8 | i60 << 24) ^ i59, (i60 >>> 8 | 0 << 24) ^ i60, 9, 0) | 0;
 i60 = tempRet0;
 i59 = (i58 >>> 15 | i60 << 17) ^ i58;
 i58 = (i60 >>> 15 | 0 << 17) ^ i60;
 i60 = _i64Add(i59, i58, ~(i59 << 27 | 0 >>> 5), ~(i58 << 27 | i59 >>> 5)) | 0;
 i59 = (i60 >>> 31 | tempRet0 << 1) ^ i60;
 L1 : do {
  if ((i57 | 0) == 0) {
   i61 = 0;
  } else {
   i60 = i59 & i54;
   i58 = i57 + (i60 << 4) | 0;
   i62 = i58 | 0;
   i63 = HEAP32[i62 >> 2] | 0;
   i64 = HEAP32[i62 + 4 >> 2] | 0;
   if ((i63 | 0) == (i55 | 0) & (i64 | 0) == (i56 | 0)) {
    i65 = i58;
   } else {
    i58 = (i59 >>> 23) + ~i59 | 0;
    i62 = i58 << 12 ^ i58;
    i58 = i62 >>> 7 ^ i62;
    i62 = i58 << 2 ^ i58;
    i58 = i62 >>> 20 ^ i62 | 1;
    i62 = 0;
    i66 = i60;
    i60 = i64;
    i64 = i63;
    while (1) {
     if ((i64 | 0) == 0 & (i60 | 0) == 0) {
      i61 = 0;
      break L1;
     }
     i63 = (i62 | 0) == 0 ? i58 : i62;
     i67 = i63 + i66 & i54;
     i68 = i57 + (i67 << 4) | 0;
     i69 = i68 | 0;
     i70 = HEAP32[i69 >> 2] | 0;
     i71 = HEAP32[i69 + 4 >> 2] | 0;
     if ((i70 | 0) == (i55 | 0) & (i71 | 0) == (i56 | 0)) {
      i65 = i68;
      break;
     } else {
      i62 = i63;
      i66 = i67;
      i60 = i71;
      i64 = i70;
     }
    }
   }
   if ((i65 | 0) == 0) {
    i61 = 0;
    break;
   }
   i61 = HEAP32[i65 + 8 >> 2] | 0;
  }
 } while (0);
 i65 = i3 + 56 | 0;
 do {
  if (__ZNK7WebCore11IDBKeyRange9isOnlyKeyEv(HEAP32[i65 >> 2] | 0) | 0) {
   i56 = HEAP32[(HEAP32[i65 >> 2] | 0) + 8 >> 2] | 0;
   if ((i56 | 0) == 0) {
    i72 = 0;
    break;
   }
   i55 = i56 | 0;
   HEAP32[i55 >> 2] = (HEAP32[i55 >> 2] | 0) + 1;
   i72 = i56;
  } else {
   i56 = i1 + 56 | 0;
   i55 = HEAP32[i56 >> 2] | 0;
   i57 = HEAP32[i56 + 4 >> 2] | 0;
   i54 = _i64Add(i55, i57, 1, 0) | 0;
   HEAP32[i56 >> 2] = i54;
   HEAP32[i56 + 4 >> 2] = tempRet0;
   i56 = i3 + 24 | 0;
   i54 = HEAP32[i56 >> 2] | 0;
   i59 = HEAP32[i56 + 4 >> 2] | 0;
   do {
    if ((i54 | 0) == (-1 | 0) & (i59 | 0) == (-1 | 0)) {
     i56 = HEAP32[i1 + 8 >> 2] | 0;
     i64 = (HEAP32[i2 + 40 >> 2] | 0) + 16 | 0;
     i60 = i3 + 16 | 0;
     FUNCTION_TABLE_viiiiiiiiiii[HEAP32[(HEAP32[i56 >> 2] | 0) + 12 >> 2] & 1](i6, i56, i55, i57, i61, HEAP32[i64 >> 2] | 0, HEAP32[i64 + 4 >> 2] | 0, HEAP32[i60 >> 2] | 0, HEAP32[i60 + 4 >> 2] | 0, HEAP32[i65 >> 2] | 0, 0);
     i60 = i6 | 0;
     i64 = HEAP32[i60 >> 2] | 0;
     HEAP32[i60 >> 2] = 0;
     i73 = i64;
    } else {
     i64 = HEAP32[i1 + 8 >> 2] | 0;
     i60 = HEAP32[i64 >> 2] | 0;
     if ((HEAP32[i3 + 60 >> 2] | 0) == 1) {
      i56 = (HEAP32[i2 + 40 >> 2] | 0) + 16 | 0;
      i66 = i3 + 16 | 0;
      FUNCTION_TABLE_viiiiiiiiiiiii[HEAP32[i60 + 16 >> 2] & 1](i7, i64, i55, i57, i61, HEAP32[i56 >> 2] | 0, HEAP32[i56 + 4 >> 2] | 0, HEAP32[i66 >> 2] | 0, HEAP32[i66 + 4 >> 2] | 0, i54, i59, HEAP32[i65 >> 2] | 0, 0);
      i66 = i7 | 0;
      i56 = HEAP32[i66 >> 2] | 0;
      HEAP32[i66 >> 2] = 0;
      i73 = i56;
      break;
     } else {
      i56 = (HEAP32[i2 + 40 >> 2] | 0) + 16 | 0;
      i66 = i3 + 16 | 0;
      FUNCTION_TABLE_viiiiiiiiiiiii[HEAP32[i60 + 20 >> 2] & 1](i8, i64, i55, i57, i61, HEAP32[i56 >> 2] | 0, HEAP32[i56 + 4 >> 2] | 0, HEAP32[i66 >> 2] | 0, HEAP32[i66 + 4 >> 2] | 0, i54, i59, HEAP32[i65 >> 2] | 0, 0);
      i66 = i8 | 0;
      i56 = HEAP32[i66 >> 2] | 0;
      HEAP32[i66 >> 2] = 0;
      i73 = i56;
      break;
     }
    }
   } while (0);
   if ((i73 | 0) != 0) {
    FUNCTION_TABLE_vii[HEAP32[HEAP32[i73 >> 2] >> 2] & 127](i11, i73);
    i59 = i11 | 0;
    i54 = HEAP32[i59 >> 2] | 0;
    HEAP32[i59 >> 2] = 0;
    i59 = i73 + 4 | 0;
    i57 = i59 | 0;
    i55 = (HEAP32[i57 >> 2] | 0) - 1 | 0;
    if ((i55 | 0) != 0) {
     HEAP32[i57 >> 2] = i55;
     i72 = i54;
     break;
    }
    i55 = i59 - 4 | 0;
    if ((i55 | 0) == 0) {
     i72 = i54;
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i55 >> 2] | 0) + 32 >> 2] & 1023](i55);
    i72 = i54;
    break;
   }
   i54 = HEAP32[i3 + 64 >> 2] | 0;
   do {
    if ((i54 | 0) == 0) {
     FUNCTION_TABLE_vi[(abort(36) | 0) & 1023](0);
    } else {
     i55 = i54 + 4 | 0;
     HEAP32[i55 >> 2] = (HEAP32[i55 >> 2] | 0) + 1;
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i54 >> 2] | 0) + 36 >> 2] & 1023](i54);
     i55 = i54 + 4 | 0;
     i59 = i55 | 0;
     i57 = (HEAP32[i59 >> 2] | 0) - 1 | 0;
     if ((i57 | 0) != 0) {
      HEAP32[i59 >> 2] = i57;
      break;
     }
     i57 = i55 - 4 | 0;
     if ((i57 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i57 >> 2] | 0) + 4 >> 2] & 1023](i57);
    }
   } while (0);
   i54 = HEAP32[i4 + 16 >> 2] | 0;
   do {
    if ((i54 | 0) == 0) {
     HEAP32[i10 + 16 >> 2] = 0;
    } else {
     i57 = i4;
     if ((i54 | 0) == (i57 | 0)) {
      i55 = i10;
      HEAP32[i10 + 16 >> 2] = i55;
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 127](i57, i55);
      break;
     } else {
      HEAP32[i10 + 16 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i54 >> 2] | 0) + 8 >> 2] & 127](i54) | 0;
      break;
     }
    }
   } while (0);
   i54 = i9 + 16 | 0;
   HEAP32[i54 >> 2] = 0;
   i55 = __Znwj(32) | 0;
   do {
    if ((i55 | 0) != 0) {
     HEAP32[i55 >> 2] = H_BASE + 1632;
     i57 = i10 + 16 | 0;
     i59 = HEAP32[i57 >> 2] | 0;
     if ((i59 | 0) == 0) {
      HEAP32[i55 + 24 >> 2] = 0;
      break;
     }
     i56 = i10;
     if ((i59 | 0) == (i56 | 0)) {
      i66 = i55 + 8 | 0;
      HEAP32[i55 + 24 >> 2] = i66;
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i10 >> 2] | 0) + 12 >> 2] & 127](i56, i66);
      break;
     } else {
      HEAP32[i55 + 24 >> 2] = i59;
      HEAP32[i57 >> 2] = 0;
      break;
     }
    }
   } while (0);
   HEAP32[i54 >> 2] = i55;
   __ZN3WTF16callOnMainThreadENSt3__18functionIFvvEEE(i9);
   i57 = HEAP32[i54 >> 2] | 0;
   do {
    if ((i57 | 0) == (i9 | 0)) {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i57 >> 2] | 0) + 16 >> 2] & 1023](i57);
    } else {
     if ((i57 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i57 >> 2] | 0) + 20 >> 2] & 1023](i57);
    }
   } while (0);
   i57 = HEAP32[i10 + 16 >> 2] | 0;
   if ((i57 | 0) == (i10 | 0)) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i57 >> 2] | 0) + 16 >> 2] & 1023](i57);
    STACKTOP = i5;
    return;
   }
   if ((i57 | 0) == 0) {
    STACKTOP = i5;
    return;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i57 >> 2] | 0) + 20 >> 2] & 1023](i57);
   STACKTOP = i5;
   return;
  }
 } while (0);
 i10 = i12 | 0;
 HEAP32[i10 >> 2] = 0;
 i9 = i3 + 24 | 0;
 i73 = HEAP32[i9 >> 2] | 0;
 i11 = HEAP32[i9 + 4 >> 2] | 0;
 do {
  if ((i73 | 0) == (-1 | 0) & (i11 | 0) == (-1 | 0)) {
   i9 = i13 | 0;
   HEAP32[i9 >> 2] = 0;
   i8 = i13 + 4 | 0;
   HEAP32[i8 >> 2] = 0;
   i65 = i13 + 8 | 0;
   HEAP32[i65 >> 2] = 0;
   i7 = (HEAP32[i2 + 40 >> 2] | 0) + 16 | 0;
   i6 = i3 + 16 | 0;
   L69 : do {
    if (__ZN7WebCore22IDBBackingStoreLevelDB9getRecordERNS_33IDBBackingStoreTransactionLevelDBExxRKNS_6IDBKeyERN3WTF6VectorIcLj0ENS6_15CrashOnOverflowEEE(HEAP32[i1 + 8 >> 2] | 0, i61, HEAP32[i7 >> 2] | 0, HEAP32[i7 + 4 >> 2] | 0, HEAP32[i6 >> 2] | 0, HEAP32[i6 + 4 >> 2] | 0, i72, i13) | 0) {
     if ((HEAP32[i65 >> 2] | 0) == 0) {
      i57 = HEAP32[i3 + 64 >> 2] | 0;
      do {
       if ((i57 | 0) == 0) {
        FUNCTION_TABLE_vi[(abort(36) | 0) & 1023](0);
       } else {
        i54 = i57 + 4 | 0;
        HEAP32[i54 >> 2] = (HEAP32[i54 >> 2] | 0) + 1;
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i57 >> 2] | 0) + 36 >> 2] & 1023](i57);
        i54 = i57 + 4 | 0;
        i55 = i54 | 0;
        i59 = (HEAP32[i55 >> 2] | 0) - 1 | 0;
        if ((i59 | 0) != 0) {
         HEAP32[i55 >> 2] = i59;
         break;
        }
        i59 = i54 - 4 | 0;
        if ((i59 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i59 >> 2] | 0) + 4 >> 2] & 1023](i59);
       }
      } while (0);
      i57 = HEAP32[i4 + 16 >> 2] | 0;
      do {
       if ((i57 | 0) == 0) {
        HEAP32[i19 + 16 >> 2] = 0;
       } else {
        if ((i57 | 0) == (i4 | 0)) {
         i59 = i19;
         HEAP32[i19 + 16 >> 2] = i59;
         FUNCTION_TABLE_vii[HEAP32[(HEAP32[i57 >> 2] | 0) + 12 >> 2] & 127](i57, i59);
         break;
        } else {
         HEAP32[i19 + 16 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i57 >> 2] | 0) + 8 >> 2] & 127](i57) | 0;
         break;
        }
       }
      } while (0);
      i57 = i18 + 16 | 0;
      HEAP32[i57 >> 2] = 0;
      i59 = __Znwj(32) | 0;
      do {
       if ((i59 | 0) != 0) {
        HEAP32[i59 >> 2] = H_BASE + 1552;
        i54 = i19 + 16 | 0;
        i55 = HEAP32[i54 >> 2] | 0;
        if ((i55 | 0) == 0) {
         HEAP32[i59 + 24 >> 2] = 0;
         break;
        }
        i66 = i19;
        if ((i55 | 0) == (i66 | 0)) {
         i56 = i59 + 8 | 0;
         HEAP32[i59 + 24 >> 2] = i56;
         FUNCTION_TABLE_vii[HEAP32[(HEAP32[i19 >> 2] | 0) + 12 >> 2] & 127](i66, i56);
         break;
        } else {
         HEAP32[i59 + 24 >> 2] = i55;
         HEAP32[i54 >> 2] = 0;
         break;
        }
       }
      } while (0);
      HEAP32[i57 >> 2] = i59;
      __ZN3WTF16callOnMainThreadENSt3__18functionIFvvEEE(i18);
      i54 = HEAP32[i57 >> 2] | 0;
      do {
       if ((i54 | 0) == (i18 | 0)) {
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i54 >> 2] | 0) + 16 >> 2] & 1023](i54);
       } else {
        if ((i54 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i54 >> 2] | 0) + 20 >> 2] & 1023](i54);
       }
      } while (0);
      i54 = HEAP32[i19 + 16 >> 2] | 0;
      if ((i54 | 0) == (i19 | 0)) {
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i54 >> 2] | 0) + 16 >> 2] & 1023](i54);
       break;
      }
      if ((i54 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i54 >> 2] | 0) + 20 >> 2] & 1023](i54);
      break;
     }
     L164 : do {
      if ((HEAP8[i3 + 52 | 0] & 1) != 0) {
       __ZNK7WebCore12GetOperation7keyPathEv(i20, i3);
       i54 = (HEAP32[i20 >> 2] | 0) != 0;
       i57 = i20 + 16 | 0;
       i59 = HEAP32[i57 >> 2] | 0;
       i55 = i20 + 8 | 0;
       i56 = HEAP32[i55 >> 2] | 0;
       if ((i59 | 0) != 0) {
        i66 = i56 + (i59 << 2) | 0;
        i59 = i56;
        while (1) {
         i64 = HEAP32[i59 >> 2] | 0;
         do {
          if ((i64 | 0) != 0) {
           i60 = i64 | 0;
           i62 = (HEAP32[i60 >> 2] | 0) - 2 | 0;
           if ((i62 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i64);
            break;
           } else {
            HEAP32[i60 >> 2] = i62;
            break;
           }
          }
         } while (0);
         i59 = i59 + 4 | 0;
         if ((i59 | 0) == (i66 | 0)) {
          break;
         }
        }
        HEAP32[i57 >> 2] = 0;
       }
       if ((i56 | 0) != 0) {
        HEAP32[i55 >> 2] = 0;
        HEAP32[i20 + 12 >> 2] = 0;
        __ZN3WTF8fastFreeEPv(i56);
       }
       i66 = HEAP32[i20 + 4 >> 2] | 0;
       do {
        if ((i66 | 0) == 0) {
         if (!i54) {
          break L164;
         }
        } else {
         i59 = i66 | 0;
         i64 = (HEAP32[i59 >> 2] | 0) - 2 | 0;
         if ((i64 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i66);
          if (i54) {
           break;
          } else {
           break L164;
          }
         } else {
          HEAP32[i59 >> 2] = i64;
          if (i54) {
           break;
          } else {
           break L164;
          }
         }
        }
       } while (0);
       i54 = HEAP32[i3 + 64 >> 2] | 0;
       i66 = (i54 | 0) == 0;
       if (!i66) {
        i56 = i54 + 4 | 0;
        HEAP32[i56 >> 2] = (HEAP32[i56 >> 2] | 0) + 1;
       }
       i56 = HEAP32[(HEAP32[i54 >> 2] | 0) + 28 >> 2] | 0;
       __ZN7WebCore12SharedBuffer11adoptVectorERN3WTF6VectorIcLj0ENS1_15CrashOnOverflowEEE(i21, i13);
       i55 = i22 | 0;
       HEAP32[i55 >> 2] = i72;
       if ((i72 | 0) != 0) {
        i57 = i72 | 0;
        HEAP32[i57 >> 2] = (HEAP32[i57 >> 2] | 0) + 1;
       }
       __ZNK7WebCore12GetOperation7keyPathEv(i23, i3);
       FUNCTION_TABLE_viiii[i56 & 63](i54, i21, i22, i23);
       i56 = i23 + 16 | 0;
       i57 = HEAP32[i56 >> 2] | 0;
       i64 = i23 + 8 | 0;
       if ((i57 | 0) != 0) {
        i59 = HEAP32[i64 >> 2] | 0;
        i62 = i59 + (i57 << 2) | 0;
        i57 = i59;
        while (1) {
         i59 = HEAP32[i57 >> 2] | 0;
         do {
          if ((i59 | 0) != 0) {
           i60 = i59 | 0;
           i58 = (HEAP32[i60 >> 2] | 0) - 2 | 0;
           if ((i58 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i59);
            break;
           } else {
            HEAP32[i60 >> 2] = i58;
            break;
           }
          }
         } while (0);
         i57 = i57 + 4 | 0;
         if ((i57 | 0) == (i62 | 0)) {
          break;
         }
        }
        HEAP32[i56 >> 2] = 0;
       }
       i62 = HEAP32[i64 >> 2] | 0;
       if ((i62 | 0) != 0) {
        HEAP32[i64 >> 2] = 0;
        HEAP32[i23 + 12 >> 2] = 0;
        __ZN3WTF8fastFreeEPv(i62);
       }
       i62 = HEAP32[i23 + 4 >> 2] | 0;
       do {
        if ((i62 | 0) != 0) {
         i57 = i62 | 0;
         i59 = (HEAP32[i57 >> 2] | 0) - 2 | 0;
         if ((i59 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i62);
          break;
         } else {
          HEAP32[i57 >> 2] = i59;
          break;
         }
        }
       } while (0);
       i62 = HEAP32[i55 >> 2] | 0;
       do {
        if ((i62 | 0) != 0) {
         i64 = i62 | 0;
         i56 = (HEAP32[i64 >> 2] | 0) - 1 | 0;
         if ((i56 | 0) == 0) {
          __ZN7WebCore6IDBKeyD1Ev(i62);
          __ZN3WTF8fastFreeEPv(i62);
          break;
         } else {
          HEAP32[i64 >> 2] = i56;
          break;
         }
        }
       } while (0);
       i62 = HEAP32[i21 >> 2] | 0;
       do {
        if ((i62 | 0) != 0) {
         i55 = i62 | 0;
         i56 = (HEAP32[i55 >> 2] | 0) - 1 | 0;
         if ((i56 | 0) == 0) {
          __ZN7WebCore12SharedBufferD1Ev(i62);
          __ZN3WTF8fastFreeEPv(i62);
          break;
         } else {
          HEAP32[i55 >> 2] = i56;
          break;
         }
        }
       } while (0);
       do {
        if (!i66) {
         i62 = i54 + 4 | 0;
         i56 = i62 | 0;
         i55 = (HEAP32[i56 >> 2] | 0) - 1 | 0;
         if ((i55 | 0) != 0) {
          HEAP32[i56 >> 2] = i55;
          break;
         }
         i55 = i62 - 4 | 0;
         if ((i55 | 0) == 0) {
          break;
         }
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i55 >> 2] | 0) + 4 >> 2] & 1023](i55);
        }
       } while (0);
       i54 = HEAP32[i4 + 16 >> 2] | 0;
       do {
        if ((i54 | 0) == 0) {
         HEAP32[i25 + 16 >> 2] = 0;
        } else {
         i66 = i4;
         if ((i54 | 0) == (i66 | 0)) {
          i55 = i25;
          HEAP32[i25 + 16 >> 2] = i55;
          FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 127](i66, i55);
          break;
         } else {
          HEAP32[i25 + 16 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i54 >> 2] | 0) + 8 >> 2] & 127](i54) | 0;
          break;
         }
        }
       } while (0);
       i54 = i24 + 16 | 0;
       HEAP32[i54 >> 2] = 0;
       i55 = __Znwj(32) | 0;
       do {
        if ((i55 | 0) != 0) {
         HEAP32[i55 >> 2] = H_BASE + 1512;
         i66 = i25 + 16 | 0;
         i62 = HEAP32[i66 >> 2] | 0;
         if ((i62 | 0) == 0) {
          HEAP32[i55 + 24 >> 2] = 0;
          break;
         }
         i56 = i25;
         if ((i62 | 0) == (i56 | 0)) {
          i64 = i55 + 8 | 0;
          HEAP32[i55 + 24 >> 2] = i64;
          FUNCTION_TABLE_vii[HEAP32[(HEAP32[i25 >> 2] | 0) + 12 >> 2] & 127](i56, i64);
          break;
         } else {
          HEAP32[i55 + 24 >> 2] = i62;
          HEAP32[i66 >> 2] = 0;
          break;
         }
        }
       } while (0);
       HEAP32[i54 >> 2] = i55;
       __ZN3WTF16callOnMainThreadENSt3__18functionIFvvEEE(i24);
       i66 = HEAP32[i54 >> 2] | 0;
       do {
        if ((i66 | 0) == (i24 | 0)) {
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i66 >> 2] | 0) + 16 >> 2] & 1023](i66);
        } else {
         if ((i66 | 0) == 0) {
          break;
         }
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i66 >> 2] | 0) + 20 >> 2] & 1023](i66);
        }
       } while (0);
       i66 = HEAP32[i25 + 16 >> 2] | 0;
       if ((i66 | 0) == (i25 | 0)) {
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i66 >> 2] | 0) + 16 >> 2] & 1023](i66);
        break L69;
       }
       if ((i66 | 0) == 0) {
        break L69;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i66 >> 2] | 0) + 20 >> 2] & 1023](i66);
       break L69;
      }
     } while (0);
     i66 = HEAP32[i3 + 64 >> 2] | 0;
     i54 = (i66 | 0) == 0;
     if (!i54) {
      i55 = i66 + 4 | 0;
      HEAP32[i55 >> 2] = (HEAP32[i55 >> 2] | 0) + 1;
     }
     i55 = HEAP32[(HEAP32[i66 >> 2] | 0) + 24 >> 2] | 0;
     __ZN7WebCore12SharedBuffer11adoptVectorERN3WTF6VectorIcLj0ENS1_15CrashOnOverflowEEE(i26, i13);
     FUNCTION_TABLE_vii[i55 & 127](i66, i26);
     i55 = HEAP32[i26 >> 2] | 0;
     do {
      if ((i55 | 0) != 0) {
       i62 = i55 | 0;
       i64 = (HEAP32[i62 >> 2] | 0) - 1 | 0;
       if ((i64 | 0) == 0) {
        __ZN7WebCore12SharedBufferD1Ev(i55);
        __ZN3WTF8fastFreeEPv(i55);
        break;
       } else {
        HEAP32[i62 >> 2] = i64;
        break;
       }
      }
     } while (0);
     do {
      if (!i54) {
       i55 = i66 + 4 | 0;
       i64 = i55 | 0;
       i62 = (HEAP32[i64 >> 2] | 0) - 1 | 0;
       if ((i62 | 0) != 0) {
        HEAP32[i64 >> 2] = i62;
        break;
       }
       i62 = i55 - 4 | 0;
       if ((i62 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i62 >> 2] | 0) + 4 >> 2] & 1023](i62);
      }
     } while (0);
     i66 = HEAP32[i4 + 16 >> 2] | 0;
     do {
      if ((i66 | 0) == 0) {
       HEAP32[i28 + 16 >> 2] = 0;
      } else {
       i54 = i4;
       if ((i66 | 0) == (i54 | 0)) {
        i62 = i28;
        HEAP32[i28 + 16 >> 2] = i62;
        FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 127](i54, i62);
        break;
       } else {
        HEAP32[i28 + 16 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i66 >> 2] | 0) + 8 >> 2] & 127](i66) | 0;
        break;
       }
      }
     } while (0);
     i66 = i27 + 16 | 0;
     HEAP32[i66 >> 2] = 0;
     i62 = __Znwj(32) | 0;
     do {
      if ((i62 | 0) != 0) {
       HEAP32[i62 >> 2] = H_BASE + 1472;
       i54 = i28 + 16 | 0;
       i55 = HEAP32[i54 >> 2] | 0;
       if ((i55 | 0) == 0) {
        HEAP32[i62 + 24 >> 2] = 0;
        break;
       }
       i64 = i28;
       if ((i55 | 0) == (i64 | 0)) {
        i56 = i62 + 8 | 0;
        HEAP32[i62 + 24 >> 2] = i56;
        FUNCTION_TABLE_vii[HEAP32[(HEAP32[i28 >> 2] | 0) + 12 >> 2] & 127](i64, i56);
        break;
       } else {
        HEAP32[i62 + 24 >> 2] = i55;
        HEAP32[i54 >> 2] = 0;
        break;
       }
      }
     } while (0);
     HEAP32[i66 >> 2] = i62;
     __ZN3WTF16callOnMainThreadENSt3__18functionIFvvEEE(i27);
     i54 = HEAP32[i66 >> 2] | 0;
     do {
      if ((i54 | 0) == (i27 | 0)) {
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i54 >> 2] | 0) + 16 >> 2] & 1023](i54);
      } else {
       if ((i54 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i54 >> 2] | 0) + 20 >> 2] & 1023](i54);
      }
     } while (0);
     i54 = HEAP32[i28 + 16 >> 2] | 0;
     if ((i54 | 0) == (i28 | 0)) {
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i54 >> 2] | 0) + 16 >> 2] & 1023](i54);
      break;
     }
     if ((i54 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i54 >> 2] | 0) + 20 >> 2] & 1023](i54);
    } else {
     i54 = HEAP32[i3 + 64 >> 2] | 0;
     i66 = (i54 | 0) == 0;
     if (!i66) {
      i62 = i54 + 4 | 0;
      HEAP32[i62 >> 2] = (HEAP32[i62 >> 2] | 0) + 1;
     }
     i62 = HEAP32[(HEAP32[i54 >> 2] | 0) + 8 >> 2] | 0;
     __ZN3WTF6StringC1EPKc(i15, H_BASE + 752 | 0);
     i55 = __ZN3WTF10fastMallocEj(12) | 0;
     HEAP32[i55 >> 2] = 1;
     HEAP16[i55 + 4 >> 1] = 1201;
     i56 = i15 | 0;
     i64 = HEAP32[i56 >> 2] | 0;
     HEAP32[i55 + 8 >> 2] = i64;
     if ((i64 | 0) != 0) {
      i59 = i64 | 0;
      HEAP32[i59 >> 2] = (HEAP32[i59 >> 2] | 0) + 2;
     }
     i59 = i14 | 0;
     HEAP32[i59 >> 2] = i55;
     FUNCTION_TABLE_vii[i62 & 127](i54, i14);
     i62 = HEAP32[i59 >> 2] | 0;
     do {
      if ((i62 | 0) != 0) {
       i59 = i62 | 0;
       i55 = (HEAP32[i59 >> 2] | 0) - 1 | 0;
       if ((i55 | 0) != 0) {
        HEAP32[i59 >> 2] = i55;
        break;
       }
       i55 = HEAP32[i62 + 8 >> 2] | 0;
       do {
        if ((i55 | 0) != 0) {
         i59 = i55 | 0;
         i64 = (HEAP32[i59 >> 2] | 0) - 2 | 0;
         if ((i64 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i55);
          break;
         } else {
          HEAP32[i59 >> 2] = i64;
          break;
         }
        }
       } while (0);
       __ZN3WTF8fastFreeEPv(i62);
      }
     } while (0);
     i62 = HEAP32[i56 >> 2] | 0;
     do {
      if ((i62 | 0) != 0) {
       i55 = i62 | 0;
       i64 = (HEAP32[i55 >> 2] | 0) - 2 | 0;
       if ((i64 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i62);
        break;
       } else {
        HEAP32[i55 >> 2] = i64;
        break;
       }
      }
     } while (0);
     do {
      if (!i66) {
       i62 = i54 + 4 | 0;
       i56 = i62 | 0;
       i64 = (HEAP32[i56 >> 2] | 0) - 1 | 0;
       if ((i64 | 0) != 0) {
        HEAP32[i56 >> 2] = i64;
        break;
       }
       i64 = i62 - 4 | 0;
       if ((i64 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i64 >> 2] | 0) + 4 >> 2] & 1023](i64);
      }
     } while (0);
     i54 = HEAP32[i4 + 16 >> 2] | 0;
     do {
      if ((i54 | 0) == 0) {
       HEAP32[i17 + 16 >> 2] = 0;
      } else {
       i66 = i4;
       if ((i54 | 0) == (i66 | 0)) {
        i64 = i17;
        HEAP32[i17 + 16 >> 2] = i64;
        FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 127](i66, i64);
        break;
       } else {
        HEAP32[i17 + 16 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i54 >> 2] | 0) + 8 >> 2] & 127](i54) | 0;
        break;
       }
      }
     } while (0);
     i54 = i16 + 16 | 0;
     HEAP32[i54 >> 2] = 0;
     i64 = __Znwj(32) | 0;
     do {
      if ((i64 | 0) != 0) {
       HEAP32[i64 >> 2] = H_BASE + 1592;
       i66 = i17 + 16 | 0;
       i62 = HEAP32[i66 >> 2] | 0;
       if ((i62 | 0) == 0) {
        HEAP32[i64 + 24 >> 2] = 0;
        break;
       }
       i56 = i17;
       if ((i62 | 0) == (i56 | 0)) {
        i55 = i64 + 8 | 0;
        HEAP32[i64 + 24 >> 2] = i55;
        FUNCTION_TABLE_vii[HEAP32[(HEAP32[i17 >> 2] | 0) + 12 >> 2] & 127](i56, i55);
        break;
       } else {
        HEAP32[i64 + 24 >> 2] = i62;
        HEAP32[i66 >> 2] = 0;
        break;
       }
      }
     } while (0);
     HEAP32[i54 >> 2] = i64;
     __ZN3WTF16callOnMainThreadENSt3__18functionIFvvEEE(i16);
     i66 = HEAP32[i54 >> 2] | 0;
     do {
      if ((i66 | 0) == (i16 | 0)) {
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i66 >> 2] | 0) + 16 >> 2] & 1023](i66);
      } else {
       if ((i66 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i66 >> 2] | 0) + 20 >> 2] & 1023](i66);
      }
     } while (0);
     i66 = HEAP32[i17 + 16 >> 2] | 0;
     if ((i66 | 0) == (i17 | 0)) {
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i66 >> 2] | 0) + 16 >> 2] & 1023](i66);
      break;
     }
     if ((i66 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i66 >> 2] | 0) + 20 >> 2] & 1023](i66);
    }
   } while (0);
   if ((HEAP32[i65 >> 2] | 0) != 0) {
    HEAP32[i65 >> 2] = 0;
   }
   i6 = HEAP32[i9 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   HEAP32[i9 >> 2] = 0;
   HEAP32[i8 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i6);
  } else {
   i6 = i1 + 8 | 0;
   i7 = i2 + 40 | 0;
   i66 = (HEAP32[i7 >> 2] | 0) + 16 | 0;
   i54 = i3 + 16 | 0;
   if (!(__ZN7WebCore22IDBBackingStoreLevelDB21getPrimaryKeyViaIndexERNS_33IDBBackingStoreTransactionLevelDBExxxRKNS_6IDBKeyERN3WTF6RefPtrIS3_EE(HEAP32[i6 >> 2] | 0, i61, HEAP32[i66 >> 2] | 0, HEAP32[i66 + 4 >> 2] | 0, HEAP32[i54 >> 2] | 0, HEAP32[i54 + 4 >> 2] | 0, i73, i11, i72, i12) | 0)) {
    i66 = HEAP32[i3 + 64 >> 2] | 0;
    i64 = (i66 | 0) == 0;
    if (!i64) {
     i62 = i66 + 4 | 0;
     HEAP32[i62 >> 2] = (HEAP32[i62 >> 2] | 0) + 1;
    }
    i62 = HEAP32[(HEAP32[i66 >> 2] | 0) + 8 >> 2] | 0;
    __ZN3WTF6StringC1EPKc(i30, H_BASE + 704 | 0);
    i55 = __ZN3WTF10fastMallocEj(12) | 0;
    HEAP32[i55 >> 2] = 1;
    HEAP16[i55 + 4 >> 1] = 1201;
    i56 = i30 | 0;
    i59 = HEAP32[i56 >> 2] | 0;
    HEAP32[i55 + 8 >> 2] = i59;
    if ((i59 | 0) != 0) {
     i57 = i59 | 0;
     HEAP32[i57 >> 2] = (HEAP32[i57 >> 2] | 0) + 2;
    }
    i57 = i29 | 0;
    HEAP32[i57 >> 2] = i55;
    FUNCTION_TABLE_vii[i62 & 127](i66, i29);
    i62 = HEAP32[i57 >> 2] | 0;
    do {
     if ((i62 | 0) != 0) {
      i57 = i62 | 0;
      i55 = (HEAP32[i57 >> 2] | 0) - 1 | 0;
      if ((i55 | 0) != 0) {
       HEAP32[i57 >> 2] = i55;
       break;
      }
      i55 = HEAP32[i62 + 8 >> 2] | 0;
      do {
       if ((i55 | 0) != 0) {
        i57 = i55 | 0;
        i59 = (HEAP32[i57 >> 2] | 0) - 2 | 0;
        if ((i59 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i55);
         break;
        } else {
         HEAP32[i57 >> 2] = i59;
         break;
        }
       }
      } while (0);
      __ZN3WTF8fastFreeEPv(i62);
     }
    } while (0);
    i62 = HEAP32[i56 >> 2] | 0;
    do {
     if ((i62 | 0) != 0) {
      i8 = i62 | 0;
      i9 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
      if ((i9 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i62);
       break;
      } else {
       HEAP32[i8 >> 2] = i9;
       break;
      }
     }
    } while (0);
    do {
     if (!i64) {
      i62 = i66 + 4 | 0;
      i56 = i62 | 0;
      i9 = (HEAP32[i56 >> 2] | 0) - 1 | 0;
      if ((i9 | 0) != 0) {
       HEAP32[i56 >> 2] = i9;
       break;
      }
      i9 = i62 - 4 | 0;
      if ((i9 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 1023](i9);
     }
    } while (0);
    i66 = HEAP32[i4 + 16 >> 2] | 0;
    do {
     if ((i66 | 0) == 0) {
      HEAP32[i32 + 16 >> 2] = 0;
     } else {
      i64 = i4;
      if ((i66 | 0) == (i64 | 0)) {
       i9 = i32;
       HEAP32[i32 + 16 >> 2] = i9;
       FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 127](i64, i9);
       break;
      } else {
       HEAP32[i32 + 16 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i66 >> 2] | 0) + 8 >> 2] & 127](i66) | 0;
       break;
      }
     }
    } while (0);
    i66 = i31 + 16 | 0;
    HEAP32[i66 >> 2] = 0;
    i9 = __Znwj(32) | 0;
    do {
     if ((i9 | 0) != 0) {
      HEAP32[i9 >> 2] = H_BASE + 1432;
      i64 = i32 + 16 | 0;
      i62 = HEAP32[i64 >> 2] | 0;
      if ((i62 | 0) == 0) {
       HEAP32[i9 + 24 >> 2] = 0;
       break;
      }
      i56 = i32;
      if ((i62 | 0) == (i56 | 0)) {
       i8 = i9 + 8 | 0;
       HEAP32[i9 + 24 >> 2] = i8;
       FUNCTION_TABLE_vii[HEAP32[(HEAP32[i32 >> 2] | 0) + 12 >> 2] & 127](i56, i8);
       break;
      } else {
       HEAP32[i9 + 24 >> 2] = i62;
       HEAP32[i64 >> 2] = 0;
       break;
      }
     }
    } while (0);
    HEAP32[i66 >> 2] = i9;
    __ZN3WTF16callOnMainThreadENSt3__18functionIFvvEEE(i31);
    i64 = HEAP32[i66 >> 2] | 0;
    do {
     if ((i64 | 0) == (i31 | 0)) {
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i64 >> 2] | 0) + 16 >> 2] & 1023](i64);
     } else {
      if ((i64 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i64 >> 2] | 0) + 20 >> 2] & 1023](i64);
     }
    } while (0);
    i64 = HEAP32[i32 + 16 >> 2] | 0;
    if ((i64 | 0) == (i32 | 0)) {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i64 >> 2] | 0) + 16 >> 2] & 1023](i64);
     break;
    }
    if ((i64 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i64 >> 2] | 0) + 20 >> 2] & 1023](i64);
    break;
   }
   i64 = HEAP32[i10 >> 2] | 0;
   if ((i64 | 0) == 0) {
    i66 = HEAP32[i3 + 64 >> 2] | 0;
    do {
     if ((i66 | 0) == 0) {
      FUNCTION_TABLE_vi[(abort(36) | 0) & 1023](0);
     } else {
      i9 = i66 + 4 | 0;
      HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i66 >> 2] | 0) + 36 >> 2] & 1023](i66);
      i9 = i66 + 4 | 0;
      i62 = i9 | 0;
      i8 = (HEAP32[i62 >> 2] | 0) - 1 | 0;
      if ((i8 | 0) != 0) {
       HEAP32[i62 >> 2] = i8;
       break;
      }
      i8 = i9 - 4 | 0;
      if ((i8 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 1023](i8);
     }
    } while (0);
    i66 = HEAP32[i4 + 16 >> 2] | 0;
    do {
     if ((i66 | 0) == 0) {
      HEAP32[i34 + 16 >> 2] = 0;
     } else {
      i8 = i4;
      if ((i66 | 0) == (i8 | 0)) {
       i9 = i34;
       HEAP32[i34 + 16 >> 2] = i9;
       FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 127](i8, i9);
       break;
      } else {
       HEAP32[i34 + 16 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i66 >> 2] | 0) + 8 >> 2] & 127](i66) | 0;
       break;
      }
     }
    } while (0);
    i66 = i33 + 16 | 0;
    HEAP32[i66 >> 2] = 0;
    i9 = __Znwj(32) | 0;
    do {
     if ((i9 | 0) != 0) {
      HEAP32[i9 >> 2] = H_BASE + 1392;
      i8 = i34 + 16 | 0;
      i62 = HEAP32[i8 >> 2] | 0;
      if ((i62 | 0) == 0) {
       HEAP32[i9 + 24 >> 2] = 0;
       break;
      }
      i56 = i34;
      if ((i62 | 0) == (i56 | 0)) {
       i65 = i9 + 8 | 0;
       HEAP32[i9 + 24 >> 2] = i65;
       FUNCTION_TABLE_vii[HEAP32[(HEAP32[i34 >> 2] | 0) + 12 >> 2] & 127](i56, i65);
       break;
      } else {
       HEAP32[i9 + 24 >> 2] = i62;
       HEAP32[i8 >> 2] = 0;
       break;
      }
     }
    } while (0);
    HEAP32[i66 >> 2] = i9;
    __ZN3WTF16callOnMainThreadENSt3__18functionIFvvEEE(i33);
    i8 = HEAP32[i66 >> 2] | 0;
    do {
     if ((i8 | 0) == (i33 | 0)) {
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 16 >> 2] & 1023](i8);
     } else {
      if ((i8 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 20 >> 2] & 1023](i8);
     }
    } while (0);
    i8 = HEAP32[i34 + 16 >> 2] | 0;
    if ((i8 | 0) == (i34 | 0)) {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 16 >> 2] & 1023](i8);
     break;
    }
    if ((i8 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 20 >> 2] & 1023](i8);
    break;
   }
   if ((HEAP32[i3 + 60 >> 2] | 0) == 1) {
    i8 = HEAP32[i3 + 64 >> 2] | 0;
    i66 = (i8 | 0) == 0;
    if (i66) {
     i74 = i64;
    } else {
     i9 = i8 + 4 | 0;
     HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
     i74 = HEAP32[i10 >> 2] | 0;
    }
    i9 = HEAP32[(HEAP32[i8 >> 2] | 0) + 20 >> 2] | 0;
    i62 = i35 | 0;
    HEAP32[i62 >> 2] = i74;
    if ((i74 | 0) != 0) {
     i65 = i74 | 0;
     HEAP32[i65 >> 2] = (HEAP32[i65 >> 2] | 0) + 1;
    }
    FUNCTION_TABLE_vii[i9 & 127](i8, i35);
    i9 = HEAP32[i62 >> 2] | 0;
    do {
     if ((i9 | 0) != 0) {
      i62 = i9 | 0;
      i65 = (HEAP32[i62 >> 2] | 0) - 1 | 0;
      if ((i65 | 0) == 0) {
       __ZN7WebCore6IDBKeyD1Ev(i9);
       __ZN3WTF8fastFreeEPv(i9);
       break;
      } else {
       HEAP32[i62 >> 2] = i65;
       break;
      }
     }
    } while (0);
    do {
     if (!i66) {
      i9 = i8 + 4 | 0;
      i65 = i9 | 0;
      i62 = (HEAP32[i65 >> 2] | 0) - 1 | 0;
      if ((i62 | 0) != 0) {
       HEAP32[i65 >> 2] = i62;
       break;
      }
      i62 = i9 - 4 | 0;
      if ((i62 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i62 >> 2] | 0) + 4 >> 2] & 1023](i62);
     }
    } while (0);
    i8 = HEAP32[i4 + 16 >> 2] | 0;
    do {
     if ((i8 | 0) == 0) {
      HEAP32[i37 + 16 >> 2] = 0;
     } else {
      i66 = i4;
      if ((i8 | 0) == (i66 | 0)) {
       i62 = i37;
       HEAP32[i37 + 16 >> 2] = i62;
       FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 127](i66, i62);
       break;
      } else {
       HEAP32[i37 + 16 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] & 127](i8) | 0;
       break;
      }
     }
    } while (0);
    i8 = i36 + 16 | 0;
    HEAP32[i8 >> 2] = 0;
    i62 = __Znwj(32) | 0;
    do {
     if ((i62 | 0) != 0) {
      HEAP32[i62 >> 2] = H_BASE + 1352;
      i66 = i37 + 16 | 0;
      i9 = HEAP32[i66 >> 2] | 0;
      if ((i9 | 0) == 0) {
       HEAP32[i62 + 24 >> 2] = 0;
       break;
      }
      i65 = i37;
      if ((i9 | 0) == (i65 | 0)) {
       i56 = i62 + 8 | 0;
       HEAP32[i62 + 24 >> 2] = i56;
       FUNCTION_TABLE_vii[HEAP32[(HEAP32[i37 >> 2] | 0) + 12 >> 2] & 127](i65, i56);
       break;
      } else {
       HEAP32[i62 + 24 >> 2] = i9;
       HEAP32[i66 >> 2] = 0;
       break;
      }
     }
    } while (0);
    HEAP32[i8 >> 2] = i62;
    __ZN3WTF16callOnMainThreadENSt3__18functionIFvvEEE(i36);
    i66 = HEAP32[i8 >> 2] | 0;
    do {
     if ((i66 | 0) == (i36 | 0)) {
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i66 >> 2] | 0) + 16 >> 2] & 1023](i66);
     } else {
      if ((i66 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i66 >> 2] | 0) + 20 >> 2] & 1023](i66);
     }
    } while (0);
    i66 = HEAP32[i37 + 16 >> 2] | 0;
    if ((i66 | 0) == (i37 | 0)) {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i66 >> 2] | 0) + 16 >> 2] & 1023](i66);
     break;
    }
    if ((i66 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i66 >> 2] | 0) + 20 >> 2] & 1023](i66);
    break;
   }
   i66 = i38 | 0;
   HEAP32[i66 >> 2] = 0;
   i8 = i38 + 4 | 0;
   HEAP32[i8 >> 2] = 0;
   i62 = i38 + 8 | 0;
   HEAP32[i62 >> 2] = 0;
   i9 = (HEAP32[i7 >> 2] | 0) + 16 | 0;
   L449 : do {
    if (__ZN7WebCore22IDBBackingStoreLevelDB9getRecordERNS_33IDBBackingStoreTransactionLevelDBExxRKNS_6IDBKeyERN3WTF6VectorIcLj0ENS6_15CrashOnOverflowEEE(HEAP32[i6 >> 2] | 0, i61, HEAP32[i9 >> 2] | 0, HEAP32[i9 + 4 >> 2] | 0, HEAP32[i54 >> 2] | 0, HEAP32[i54 + 4 >> 2] | 0, i64, i38) | 0) {
     if ((HEAP32[i62 >> 2] | 0) == 0) {
      i56 = HEAP32[i3 + 64 >> 2] | 0;
      do {
       if ((i56 | 0) == 0) {
        FUNCTION_TABLE_vi[(abort(36) | 0) & 1023](0);
       } else {
        i65 = i56 + 4 | 0;
        HEAP32[i65 >> 2] = (HEAP32[i65 >> 2] | 0) + 1;
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i56 >> 2] | 0) + 36 >> 2] & 1023](i56);
        i65 = i56 + 4 | 0;
        i55 = i65 | 0;
        i59 = (HEAP32[i55 >> 2] | 0) - 1 | 0;
        if ((i59 | 0) != 0) {
         HEAP32[i55 >> 2] = i59;
         break;
        }
        i59 = i65 - 4 | 0;
        if ((i59 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i59 >> 2] | 0) + 4 >> 2] & 1023](i59);
       }
      } while (0);
      i56 = HEAP32[i4 + 16 >> 2] | 0;
      do {
       if ((i56 | 0) == 0) {
        HEAP32[i44 + 16 >> 2] = 0;
       } else {
        i59 = i4;
        if ((i56 | 0) == (i59 | 0)) {
         i65 = i44;
         HEAP32[i44 + 16 >> 2] = i65;
         FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 127](i59, i65);
         break;
        } else {
         HEAP32[i44 + 16 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i56 >> 2] | 0) + 8 >> 2] & 127](i56) | 0;
         break;
        }
       }
      } while (0);
      i56 = i43 + 16 | 0;
      HEAP32[i56 >> 2] = 0;
      i65 = __Znwj(32) | 0;
      do {
       if ((i65 | 0) != 0) {
        HEAP32[i65 >> 2] = H_BASE + 1272;
        i59 = i44 + 16 | 0;
        i55 = HEAP32[i59 >> 2] | 0;
        if ((i55 | 0) == 0) {
         HEAP32[i65 + 24 >> 2] = 0;
         break;
        }
        i57 = i44;
        if ((i55 | 0) == (i57 | 0)) {
         i58 = i65 + 8 | 0;
         HEAP32[i65 + 24 >> 2] = i58;
         FUNCTION_TABLE_vii[HEAP32[(HEAP32[i44 >> 2] | 0) + 12 >> 2] & 127](i57, i58);
         break;
        } else {
         HEAP32[i65 + 24 >> 2] = i55;
         HEAP32[i59 >> 2] = 0;
         break;
        }
       }
      } while (0);
      HEAP32[i56 >> 2] = i65;
      __ZN3WTF16callOnMainThreadENSt3__18functionIFvvEEE(i43);
      i59 = HEAP32[i56 >> 2] | 0;
      do {
       if ((i59 | 0) == (i43 | 0)) {
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i59 >> 2] | 0) + 16 >> 2] & 1023](i59);
       } else {
        if ((i59 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i59 >> 2] | 0) + 20 >> 2] & 1023](i59);
       }
      } while (0);
      i59 = HEAP32[i44 + 16 >> 2] | 0;
      if ((i59 | 0) == (i44 | 0)) {
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i59 >> 2] | 0) + 16 >> 2] & 1023](i59);
       break;
      }
      if ((i59 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i59 >> 2] | 0) + 20 >> 2] & 1023](i59);
      break;
     }
     L544 : do {
      if ((HEAP8[i3 + 52 | 0] & 1) != 0) {
       __ZNK7WebCore12GetOperation7keyPathEv(i45, i3);
       i59 = (HEAP32[i45 >> 2] | 0) != 0;
       i56 = i45 + 16 | 0;
       i65 = HEAP32[i56 >> 2] | 0;
       i55 = i45 + 8 | 0;
       i58 = HEAP32[i55 >> 2] | 0;
       if ((i65 | 0) != 0) {
        i57 = i58 + (i65 << 2) | 0;
        i65 = i58;
        while (1) {
         i60 = HEAP32[i65 >> 2] | 0;
         do {
          if ((i60 | 0) != 0) {
           i70 = i60 | 0;
           i71 = (HEAP32[i70 >> 2] | 0) - 2 | 0;
           if ((i71 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i60);
            break;
           } else {
            HEAP32[i70 >> 2] = i71;
            break;
           }
          }
         } while (0);
         i65 = i65 + 4 | 0;
         if ((i65 | 0) == (i57 | 0)) {
          break;
         }
        }
        HEAP32[i56 >> 2] = 0;
       }
       if ((i58 | 0) != 0) {
        HEAP32[i55 >> 2] = 0;
        HEAP32[i45 + 12 >> 2] = 0;
        __ZN3WTF8fastFreeEPv(i58);
       }
       i57 = HEAP32[i45 + 4 >> 2] | 0;
       do {
        if ((i57 | 0) == 0) {
         if (!i59) {
          break L544;
         }
        } else {
         i65 = i57 | 0;
         i60 = (HEAP32[i65 >> 2] | 0) - 2 | 0;
         if ((i60 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i57);
          if (i59) {
           break;
          } else {
           break L544;
          }
         } else {
          HEAP32[i65 >> 2] = i60;
          if (i59) {
           break;
          } else {
           break L544;
          }
         }
        }
       } while (0);
       i59 = HEAP32[i3 + 64 >> 2] | 0;
       i57 = (i59 | 0) == 0;
       if (!i57) {
        i58 = i59 + 4 | 0;
        HEAP32[i58 >> 2] = (HEAP32[i58 >> 2] | 0) + 1;
       }
       i58 = HEAP32[(HEAP32[i59 >> 2] | 0) + 28 >> 2] | 0;
       __ZN7WebCore12SharedBuffer11adoptVectorERN3WTF6VectorIcLj0ENS1_15CrashOnOverflowEEE(i46, i38);
       i55 = i47 | 0;
       i56 = HEAP32[i10 >> 2] | 0;
       HEAP32[i55 >> 2] = i56;
       if ((i56 | 0) != 0) {
        i60 = i56 | 0;
        HEAP32[i60 >> 2] = (HEAP32[i60 >> 2] | 0) + 1;
       }
       __ZNK7WebCore12GetOperation7keyPathEv(i48, i3);
       FUNCTION_TABLE_viiii[i58 & 63](i59, i46, i47, i48);
       i58 = i48 + 16 | 0;
       i60 = HEAP32[i58 >> 2] | 0;
       i56 = i48 + 8 | 0;
       if ((i60 | 0) != 0) {
        i65 = HEAP32[i56 >> 2] | 0;
        i71 = i65 + (i60 << 2) | 0;
        i60 = i65;
        while (1) {
         i65 = HEAP32[i60 >> 2] | 0;
         do {
          if ((i65 | 0) != 0) {
           i70 = i65 | 0;
           i67 = (HEAP32[i70 >> 2] | 0) - 2 | 0;
           if ((i67 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i65);
            break;
           } else {
            HEAP32[i70 >> 2] = i67;
            break;
           }
          }
         } while (0);
         i60 = i60 + 4 | 0;
         if ((i60 | 0) == (i71 | 0)) {
          break;
         }
        }
        HEAP32[i58 >> 2] = 0;
       }
       i71 = HEAP32[i56 >> 2] | 0;
       if ((i71 | 0) != 0) {
        HEAP32[i56 >> 2] = 0;
        HEAP32[i48 + 12 >> 2] = 0;
        __ZN3WTF8fastFreeEPv(i71);
       }
       i71 = HEAP32[i48 + 4 >> 2] | 0;
       do {
        if ((i71 | 0) != 0) {
         i60 = i71 | 0;
         i65 = (HEAP32[i60 >> 2] | 0) - 2 | 0;
         if ((i65 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i71);
          break;
         } else {
          HEAP32[i60 >> 2] = i65;
          break;
         }
        }
       } while (0);
       i71 = HEAP32[i55 >> 2] | 0;
       do {
        if ((i71 | 0) != 0) {
         i56 = i71 | 0;
         i58 = (HEAP32[i56 >> 2] | 0) - 1 | 0;
         if ((i58 | 0) == 0) {
          __ZN7WebCore6IDBKeyD1Ev(i71);
          __ZN3WTF8fastFreeEPv(i71);
          break;
         } else {
          HEAP32[i56 >> 2] = i58;
          break;
         }
        }
       } while (0);
       i71 = HEAP32[i46 >> 2] | 0;
       do {
        if ((i71 | 0) != 0) {
         i55 = i71 | 0;
         i58 = (HEAP32[i55 >> 2] | 0) - 1 | 0;
         if ((i58 | 0) == 0) {
          __ZN7WebCore12SharedBufferD1Ev(i71);
          __ZN3WTF8fastFreeEPv(i71);
          break;
         } else {
          HEAP32[i55 >> 2] = i58;
          break;
         }
        }
       } while (0);
       do {
        if (!i57) {
         i71 = i59 + 4 | 0;
         i58 = i71 | 0;
         i55 = (HEAP32[i58 >> 2] | 0) - 1 | 0;
         if ((i55 | 0) != 0) {
          HEAP32[i58 >> 2] = i55;
          break;
         }
         i55 = i71 - 4 | 0;
         if ((i55 | 0) == 0) {
          break;
         }
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i55 >> 2] | 0) + 4 >> 2] & 1023](i55);
        }
       } while (0);
       i59 = HEAP32[i4 + 16 >> 2] | 0;
       do {
        if ((i59 | 0) == 0) {
         HEAP32[i50 + 16 >> 2] = 0;
        } else {
         i57 = i4;
         if ((i59 | 0) == (i57 | 0)) {
          i55 = i50;
          HEAP32[i50 + 16 >> 2] = i55;
          FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 127](i57, i55);
          break;
         } else {
          HEAP32[i50 + 16 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i59 >> 2] | 0) + 8 >> 2] & 127](i59) | 0;
          break;
         }
        }
       } while (0);
       i59 = i49 + 16 | 0;
       HEAP32[i59 >> 2] = 0;
       i55 = __Znwj(32) | 0;
       do {
        if ((i55 | 0) != 0) {
         HEAP32[i55 >> 2] = H_BASE + 1232;
         i57 = i50 + 16 | 0;
         i71 = HEAP32[i57 >> 2] | 0;
         if ((i71 | 0) == 0) {
          HEAP32[i55 + 24 >> 2] = 0;
          break;
         }
         i58 = i50;
         if ((i71 | 0) == (i58 | 0)) {
          i56 = i55 + 8 | 0;
          HEAP32[i55 + 24 >> 2] = i56;
          FUNCTION_TABLE_vii[HEAP32[(HEAP32[i50 >> 2] | 0) + 12 >> 2] & 127](i58, i56);
          break;
         } else {
          HEAP32[i55 + 24 >> 2] = i71;
          HEAP32[i57 >> 2] = 0;
          break;
         }
        }
       } while (0);
       HEAP32[i59 >> 2] = i55;
       __ZN3WTF16callOnMainThreadENSt3__18functionIFvvEEE(i49);
       i57 = HEAP32[i59 >> 2] | 0;
       do {
        if ((i57 | 0) == (i49 | 0)) {
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i57 >> 2] | 0) + 16 >> 2] & 1023](i57);
        } else {
         if ((i57 | 0) == 0) {
          break;
         }
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i57 >> 2] | 0) + 20 >> 2] & 1023](i57);
        }
       } while (0);
       i57 = HEAP32[i50 + 16 >> 2] | 0;
       if ((i57 | 0) == (i50 | 0)) {
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i57 >> 2] | 0) + 16 >> 2] & 1023](i57);
        break L449;
       }
       if ((i57 | 0) == 0) {
        break L449;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i57 >> 2] | 0) + 20 >> 2] & 1023](i57);
       break L449;
      }
     } while (0);
     i57 = HEAP32[i3 + 64 >> 2] | 0;
     i59 = (i57 | 0) == 0;
     if (!i59) {
      i55 = i57 + 4 | 0;
      HEAP32[i55 >> 2] = (HEAP32[i55 >> 2] | 0) + 1;
     }
     i55 = HEAP32[(HEAP32[i57 >> 2] | 0) + 24 >> 2] | 0;
     __ZN7WebCore12SharedBuffer11adoptVectorERN3WTF6VectorIcLj0ENS1_15CrashOnOverflowEEE(i51, i38);
     FUNCTION_TABLE_vii[i55 & 127](i57, i51);
     i55 = HEAP32[i51 >> 2] | 0;
     do {
      if ((i55 | 0) != 0) {
       i71 = i55 | 0;
       i56 = (HEAP32[i71 >> 2] | 0) - 1 | 0;
       if ((i56 | 0) == 0) {
        __ZN7WebCore12SharedBufferD1Ev(i55);
        __ZN3WTF8fastFreeEPv(i55);
        break;
       } else {
        HEAP32[i71 >> 2] = i56;
        break;
       }
      }
     } while (0);
     do {
      if (!i59) {
       i55 = i57 + 4 | 0;
       i56 = i55 | 0;
       i71 = (HEAP32[i56 >> 2] | 0) - 1 | 0;
       if ((i71 | 0) != 0) {
        HEAP32[i56 >> 2] = i71;
        break;
       }
       i71 = i55 - 4 | 0;
       if ((i71 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i71 >> 2] | 0) + 4 >> 2] & 1023](i71);
      }
     } while (0);
     i57 = HEAP32[i4 + 16 >> 2] | 0;
     do {
      if ((i57 | 0) == 0) {
       HEAP32[i53 + 16 >> 2] = 0;
      } else {
       i59 = i4;
       if ((i57 | 0) == (i59 | 0)) {
        i71 = i53;
        HEAP32[i53 + 16 >> 2] = i71;
        FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 127](i59, i71);
        break;
       } else {
        HEAP32[i53 + 16 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i57 >> 2] | 0) + 8 >> 2] & 127](i57) | 0;
        break;
       }
      }
     } while (0);
     i57 = i52 + 16 | 0;
     HEAP32[i57 >> 2] = 0;
     i71 = __Znwj(32) | 0;
     do {
      if ((i71 | 0) != 0) {
       HEAP32[i71 >> 2] = H_BASE + 1192;
       i59 = i53 + 16 | 0;
       i55 = HEAP32[i59 >> 2] | 0;
       if ((i55 | 0) == 0) {
        HEAP32[i71 + 24 >> 2] = 0;
        break;
       }
       i56 = i53;
       if ((i55 | 0) == (i56 | 0)) {
        i58 = i71 + 8 | 0;
        HEAP32[i71 + 24 >> 2] = i58;
        FUNCTION_TABLE_vii[HEAP32[(HEAP32[i53 >> 2] | 0) + 12 >> 2] & 127](i56, i58);
        break;
       } else {
        HEAP32[i71 + 24 >> 2] = i55;
        HEAP32[i59 >> 2] = 0;
        break;
       }
      }
     } while (0);
     HEAP32[i57 >> 2] = i71;
     __ZN3WTF16callOnMainThreadENSt3__18functionIFvvEEE(i52);
     i59 = HEAP32[i57 >> 2] | 0;
     do {
      if ((i59 | 0) == (i52 | 0)) {
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i59 >> 2] | 0) + 16 >> 2] & 1023](i59);
      } else {
       if ((i59 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i59 >> 2] | 0) + 20 >> 2] & 1023](i59);
      }
     } while (0);
     i59 = HEAP32[i53 + 16 >> 2] | 0;
     if ((i59 | 0) == (i53 | 0)) {
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i59 >> 2] | 0) + 16 >> 2] & 1023](i59);
      break;
     }
     if ((i59 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i59 >> 2] | 0) + 20 >> 2] & 1023](i59);
    } else {
     i59 = HEAP32[i3 + 64 >> 2] | 0;
     i57 = (i59 | 0) == 0;
     if (!i57) {
      i71 = i59 + 4 | 0;
      HEAP32[i71 >> 2] = (HEAP32[i71 >> 2] | 0) + 1;
     }
     i71 = HEAP32[(HEAP32[i59 >> 2] | 0) + 8 >> 2] | 0;
     __ZN3WTF6StringC1EPKc(i40, H_BASE + 752 | 0);
     i55 = __ZN3WTF10fastMallocEj(12) | 0;
     HEAP32[i55 >> 2] = 1;
     HEAP16[i55 + 4 >> 1] = 1201;
     i58 = i40 | 0;
     i56 = HEAP32[i58 >> 2] | 0;
     HEAP32[i55 + 8 >> 2] = i56;
     if ((i56 | 0) != 0) {
      i65 = i56 | 0;
      HEAP32[i65 >> 2] = (HEAP32[i65 >> 2] | 0) + 2;
     }
     i65 = i39 | 0;
     HEAP32[i65 >> 2] = i55;
     FUNCTION_TABLE_vii[i71 & 127](i59, i39);
     i71 = HEAP32[i65 >> 2] | 0;
     do {
      if ((i71 | 0) != 0) {
       i65 = i71 | 0;
       i55 = (HEAP32[i65 >> 2] | 0) - 1 | 0;
       if ((i55 | 0) != 0) {
        HEAP32[i65 >> 2] = i55;
        break;
       }
       i55 = HEAP32[i71 + 8 >> 2] | 0;
       do {
        if ((i55 | 0) != 0) {
         i65 = i55 | 0;
         i56 = (HEAP32[i65 >> 2] | 0) - 2 | 0;
         if ((i56 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i55);
          break;
         } else {
          HEAP32[i65 >> 2] = i56;
          break;
         }
        }
       } while (0);
       __ZN3WTF8fastFreeEPv(i71);
      }
     } while (0);
     i71 = HEAP32[i58 >> 2] | 0;
     do {
      if ((i71 | 0) != 0) {
       i55 = i71 | 0;
       i56 = (HEAP32[i55 >> 2] | 0) - 2 | 0;
       if ((i56 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i71);
        break;
       } else {
        HEAP32[i55 >> 2] = i56;
        break;
       }
      }
     } while (0);
     do {
      if (!i57) {
       i71 = i59 + 4 | 0;
       i58 = i71 | 0;
       i56 = (HEAP32[i58 >> 2] | 0) - 1 | 0;
       if ((i56 | 0) != 0) {
        HEAP32[i58 >> 2] = i56;
        break;
       }
       i56 = i71 - 4 | 0;
       if ((i56 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i56 >> 2] | 0) + 4 >> 2] & 1023](i56);
      }
     } while (0);
     i59 = HEAP32[i4 + 16 >> 2] | 0;
     do {
      if ((i59 | 0) == 0) {
       HEAP32[i42 + 16 >> 2] = 0;
      } else {
       i57 = i4;
       if ((i59 | 0) == (i57 | 0)) {
        i56 = i42;
        HEAP32[i42 + 16 >> 2] = i56;
        FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 127](i57, i56);
        break;
       } else {
        HEAP32[i42 + 16 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i59 >> 2] | 0) + 8 >> 2] & 127](i59) | 0;
        break;
       }
      }
     } while (0);
     i59 = i41 + 16 | 0;
     HEAP32[i59 >> 2] = 0;
     i56 = __Znwj(32) | 0;
     do {
      if ((i56 | 0) != 0) {
       HEAP32[i56 >> 2] = H_BASE + 1312;
       i57 = i42 + 16 | 0;
       i71 = HEAP32[i57 >> 2] | 0;
       if ((i71 | 0) == 0) {
        HEAP32[i56 + 24 >> 2] = 0;
        break;
       }
       i58 = i42;
       if ((i71 | 0) == (i58 | 0)) {
        i55 = i56 + 8 | 0;
        HEAP32[i56 + 24 >> 2] = i55;
        FUNCTION_TABLE_vii[HEAP32[(HEAP32[i42 >> 2] | 0) + 12 >> 2] & 127](i58, i55);
        break;
       } else {
        HEAP32[i56 + 24 >> 2] = i71;
        HEAP32[i57 >> 2] = 0;
        break;
       }
      }
     } while (0);
     HEAP32[i59 >> 2] = i56;
     __ZN3WTF16callOnMainThreadENSt3__18functionIFvvEEE(i41);
     i57 = HEAP32[i59 >> 2] | 0;
     do {
      if ((i57 | 0) == (i41 | 0)) {
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i57 >> 2] | 0) + 16 >> 2] & 1023](i57);
      } else {
       if ((i57 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i57 >> 2] | 0) + 20 >> 2] & 1023](i57);
      }
     } while (0);
     i57 = HEAP32[i42 + 16 >> 2] | 0;
     if ((i57 | 0) == (i42 | 0)) {
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i57 >> 2] | 0) + 16 >> 2] & 1023](i57);
      break;
     }
     if ((i57 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i57 >> 2] | 0) + 20 >> 2] & 1023](i57);
    }
   } while (0);
   if ((HEAP32[i62 >> 2] | 0) != 0) {
    HEAP32[i62 >> 2] = 0;
   }
   i64 = HEAP32[i66 >> 2] | 0;
   if ((i64 | 0) == 0) {
    break;
   }
   HEAP32[i66 >> 2] = 0;
   HEAP32[i8 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i64);
  }
 } while (0);
 i42 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i42 | 0) != 0) {
   i10 = i42 | 0;
   i41 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i41 | 0) == 0) {
    __ZN7WebCore6IDBKeyD1Ev(i42);
    __ZN3WTF8fastFreeEPv(i42);
    break;
   } else {
    HEAP32[i10 >> 2] = i41;
    break;
   }
  }
 } while (0);
 if ((i72 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i42 = i72 | 0;
 i41 = (HEAP32[i42 >> 2] | 0) - 1 | 0;
 if ((i41 | 0) == 0) {
  __ZN7WebCore6IDBKeyD1Ev(i72);
  __ZN3WTF8fastFreeEPv(i72);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i42 >> 2] = i41;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore26IDBServerConnectionLevelDB3putERNS_21IDBTransactionBackendERKNS_12PutOperationENSt3__18functionIFvN3WTF10PassRefPtrINS_16IDBDatabaseErrorEEEEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 552 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 48 | 0;
 i11 = i5 + 72 | 0;
 i12 = i5 + 80 | 0;
 i13 = i5 + 88 | 0;
 i14 = i5 + 96 | 0;
 i15 = i5 + 120 | 0;
 i16 = i5 + 144 | 0;
 i17 = i5 + 152 | 0;
 i18 = i5 + 160 | 0;
 i19 = i5 + 184 | 0;
 i20 = i5 + 208 | 0;
 i21 = i5 + 224 | 0;
 i22 = i5 + 232 | 0;
 i23 = i5 + 240 | 0;
 i24 = i5 + 248 | 0;
 i25 = i5 + 256 | 0;
 i26 = i5 + 280 | 0;
 i27 = i5 + 304 | 0;
 i28 = i5 + 312 | 0;
 i29 = i5 + 336 | 0;
 i30 = i5 + 360 | 0;
 i31 = i5 + 368 | 0;
 i32 = i5 + 376 | 0;
 i33 = i5 + 384 | 0;
 i34 = i5 + 408 | 0;
 i35 = i5 + 432 | 0;
 i36 = i5 + 440 | 0;
 i37 = i5 + 448 | 0;
 i38 = i5 + 472 | 0;
 i39 = i5 + 496 | 0;
 i40 = i5 + 504 | 0;
 i41 = i5 + 528 | 0;
 i42 = i2 + 184 | 0;
 i43 = HEAP32[i42 >> 2] | 0;
 i44 = HEAP32[i42 + 4 >> 2] | 0;
 i45 = HEAP32[i1 + 20 >> 2] | 0;
 i46 = HEAP32[i1 + 12 >> 2] | 0;
 i47 = _i64Add(i43, i44, ~0, ~i43) | 0;
 i48 = tempRet0;
 i49 = (i47 >>> 22 | i48 << 10) ^ i47;
 i47 = (i48 >>> 22 | 0 << 10) ^ i48;
 i48 = _i64Add(i49, i47, ~(i49 << 13 | 0 >>> 19), ~(i47 << 13 | i49 >>> 19)) | 0;
 i49 = tempRet0;
 i47 = ___muldi3((i48 >>> 8 | i49 << 24) ^ i48, (i49 >>> 8 | 0 << 24) ^ i49, 9, 0) | 0;
 i49 = tempRet0;
 i48 = (i47 >>> 15 | i49 << 17) ^ i47;
 i47 = (i49 >>> 15 | 0 << 17) ^ i49;
 i49 = _i64Add(i48, i47, ~(i48 << 27 | 0 >>> 5), ~(i47 << 27 | i48 >>> 5)) | 0;
 i48 = (i49 >>> 31 | tempRet0 << 1) ^ i49;
 L1 : do {
  if ((i46 | 0) == 0) {
   i50 = 0;
  } else {
   i49 = i48 & i45;
   i47 = i46 + (i49 << 4) | 0;
   i51 = i47 | 0;
   i52 = HEAP32[i51 >> 2] | 0;
   i53 = HEAP32[i51 + 4 >> 2] | 0;
   if ((i52 | 0) == (i43 | 0) & (i53 | 0) == (i44 | 0)) {
    i54 = i47;
   } else {
    i47 = (i48 >>> 23) + ~i48 | 0;
    i51 = i47 << 12 ^ i47;
    i47 = i51 >>> 7 ^ i51;
    i51 = i47 << 2 ^ i47;
    i47 = i51 >>> 20 ^ i51 | 1;
    i51 = 0;
    i55 = i49;
    i49 = i53;
    i53 = i52;
    while (1) {
     if ((i53 | 0) == 0 & (i49 | 0) == 0) {
      i50 = 0;
      break L1;
     }
     i52 = (i51 | 0) == 0 ? i47 : i51;
     i56 = i52 + i55 & i45;
     i57 = i46 + (i56 << 4) | 0;
     i58 = i57 | 0;
     i59 = HEAP32[i58 >> 2] | 0;
     i60 = HEAP32[i58 + 4 >> 2] | 0;
     if ((i59 | 0) == (i43 | 0) & (i60 | 0) == (i44 | 0)) {
      i54 = i57;
      break;
     } else {
      i51 = i52;
      i55 = i56;
      i49 = i60;
      i53 = i59;
     }
    }
   }
   if ((i54 | 0) == 0) {
    i50 = 0;
    break;
   }
   i50 = HEAP32[i54 + 8 >> 2] | 0;
  }
 } while (0);
 i54 = i3 + 96 | 0;
 L11 : do {
  if ((HEAP32[i54 >> 2] | 0) == 2) {
   i61 = 53;
  } else {
   if ((HEAP8[i3 + 52 | 0] & 1) == 0) {
    i61 = 53;
    break;
   }
   if ((HEAP32[i3 + 92 >> 2] | 0) != 0) {
    i61 = 53;
    break;
   }
   i44 = HEAP32[i1 + 8 >> 2] | 0;
   i43 = (HEAP32[i2 + 40 >> 2] | 0) + 16 | 0;
   i46 = i3 + 24 | 0;
   FUNCTION_TABLE_viiiiiii[HEAP32[(HEAP32[i44 >> 2] | 0) + 24 >> 2] & 1](i6, i44, i2, HEAP32[i43 >> 2] | 0, HEAP32[i43 + 4 >> 2] | 0, HEAP32[i46 >> 2] | 0, HEAP32[i46 + 4 >> 2] | 0);
   i46 = i6 | 0;
   i43 = HEAP32[i46 >> 2] | 0;
   HEAP32[i46 >> 2] = 0;
   do {
    if (__ZNK7WebCore6IDBKey7isValidEv(i43) | 0) {
     if ((i43 | 0) == 0) {
      i62 = 1;
      i63 = 0;
      i61 = 55;
      break L11;
     }
     i46 = i43 | 0;
     i44 = (HEAP32[i46 >> 2] | 0) + 1 | 0;
     HEAP32[i46 >> 2] = i44;
     i64 = i43;
     i65 = 0;
     i66 = i44;
    } else {
     i44 = HEAP32[i3 + 100 >> 2] | 0;
     i46 = HEAP32[(HEAP32[i44 >> 2] | 0) + 8 >> 2] | 0;
     __ZN3WTF6StringC1EPKc(i8, H_BASE + 312 | 0);
     i45 = __ZN3WTF10fastMallocEj(12) | 0;
     HEAP32[i45 >> 2] = 1;
     HEAP16[i45 + 4 >> 1] = 1202;
     i48 = i8 | 0;
     i53 = HEAP32[i48 >> 2] | 0;
     HEAP32[i45 + 8 >> 2] = i53;
     if ((i53 | 0) != 0) {
      i49 = i53 | 0;
      HEAP32[i49 >> 2] = (HEAP32[i49 >> 2] | 0) + 2;
     }
     i49 = i7 | 0;
     HEAP32[i49 >> 2] = i45;
     FUNCTION_TABLE_vii[i46 & 127](i44, i7);
     i44 = HEAP32[i49 >> 2] | 0;
     do {
      if ((i44 | 0) != 0) {
       i49 = i44 | 0;
       i46 = (HEAP32[i49 >> 2] | 0) - 1 | 0;
       if ((i46 | 0) != 0) {
        HEAP32[i49 >> 2] = i46;
        break;
       }
       i46 = HEAP32[i44 + 8 >> 2] | 0;
       do {
        if ((i46 | 0) != 0) {
         i49 = i46 | 0;
         i45 = (HEAP32[i49 >> 2] | 0) - 2 | 0;
         if ((i45 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i46);
          break;
         } else {
          HEAP32[i49 >> 2] = i45;
          break;
         }
        }
       } while (0);
       __ZN3WTF8fastFreeEPv(i44);
      }
     } while (0);
     i44 = HEAP32[i48 >> 2] | 0;
     do {
      if ((i44 | 0) != 0) {
       i46 = i44 | 0;
       i45 = (HEAP32[i46 >> 2] | 0) - 2 | 0;
       if ((i45 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i44);
        break;
       } else {
        HEAP32[i46 >> 2] = i45;
        break;
       }
      }
     } while (0);
     i44 = HEAP32[i4 + 16 >> 2] | 0;
     do {
      if ((i44 | 0) == 0) {
       HEAP32[i10 + 16 >> 2] = 0;
      } else {
       i48 = i4;
       if ((i44 | 0) == (i48 | 0)) {
        i45 = i10;
        HEAP32[i10 + 16 >> 2] = i45;
        FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 127](i48, i45);
        break;
       } else {
        HEAP32[i10 + 16 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i44 >> 2] | 0) + 8 >> 2] & 127](i44) | 0;
        break;
       }
      }
     } while (0);
     i44 = i9 + 16 | 0;
     HEAP32[i44 >> 2] = 0;
     i45 = __Znwj(32) | 0;
     do {
      if ((i45 | 0) != 0) {
       HEAP32[i45 >> 2] = H_BASE + 1152;
       i48 = i10 + 16 | 0;
       i46 = HEAP32[i48 >> 2] | 0;
       if ((i46 | 0) == 0) {
        HEAP32[i45 + 24 >> 2] = 0;
        break;
       }
       i49 = i10;
       if ((i46 | 0) == (i49 | 0)) {
        i53 = i45 + 8 | 0;
        HEAP32[i45 + 24 >> 2] = i53;
        FUNCTION_TABLE_vii[HEAP32[(HEAP32[i10 >> 2] | 0) + 12 >> 2] & 127](i49, i53);
        break;
       } else {
        HEAP32[i45 + 24 >> 2] = i46;
        HEAP32[i48 >> 2] = 0;
        break;
       }
      }
     } while (0);
     HEAP32[i44 >> 2] = i45;
     __ZN3WTF16callOnMainThreadENSt3__18functionIFvvEEE(i9);
     i48 = HEAP32[i44 >> 2] | 0;
     do {
      if ((i48 | 0) == (i9 | 0)) {
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i48 >> 2] | 0) + 16 >> 2] & 1023](i48);
      } else {
       if ((i48 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i48 >> 2] | 0) + 20 >> 2] & 1023](i48);
      }
     } while (0);
     i48 = HEAP32[i10 + 16 >> 2] | 0;
     do {
      if ((i48 | 0) == (i10 | 0)) {
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i48 >> 2] | 0) + 16 >> 2] & 1023](i48);
      } else {
       if ((i48 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i48 >> 2] | 0) + 20 >> 2] & 1023](i48);
      }
     } while (0);
     if ((i43 | 0) == 0) {
      STACKTOP = i5;
      return;
     } else {
      i64 = 0;
      i65 = 1;
      i66 = HEAP32[i43 >> 2] | 0;
      break;
     }
    }
   } while (0);
   i48 = i66 - 1 | 0;
   if ((i48 | 0) == 0) {
    __ZN7WebCore6IDBKeyD1Ev(i43);
    __ZN3WTF8fastFreeEPv(i43);
   } else {
    HEAP32[i43 >> 2] = i48;
   }
   if ((i65 | 0) == 0) {
    i62 = 1;
    i63 = i64;
    i61 = 55;
   } else {
    i67 = i64;
   }
  }
 } while (0);
 do {
  if ((i61 | 0) == 53) {
   i64 = HEAP32[i3 + 92 >> 2] | 0;
   if ((i64 | 0) == 0) {
    i62 = 0;
    i63 = 0;
    i61 = 55;
    break;
   }
   i65 = i64 | 0;
   HEAP32[i65 >> 2] = (HEAP32[i65 >> 2] | 0) + 1;
   i62 = 0;
   i63 = i64;
   i61 = 55;
  }
 } while (0);
 do {
  if ((i61 | 0) == 55) {
   i64 = i11 | 0;
   HEAP32[i64 >> 2] = 0;
   i65 = i1 + 8 | 0;
   do {
    if ((HEAP32[i54 >> 2] | 0) == 1) {
     i66 = i2 + 40 | 0;
     i10 = (HEAP32[i66 >> 2] | 0) + 16 | 0;
     i9 = i3 + 24 | 0;
     if (!(__ZN7WebCore22IDBBackingStoreLevelDB22keyExistsInObjectStoreERNS_33IDBBackingStoreTransactionLevelDBExxRKNS_6IDBKeyERN3WTF6RefPtrINS_19IDBRecordIdentifierEEE(HEAP32[i65 >> 2] | 0, i50, HEAP32[i10 >> 2] | 0, HEAP32[i10 + 4 >> 2] | 0, HEAP32[i9 >> 2] | 0, HEAP32[i9 + 4 >> 2] | 0, i63, i11) | 0)) {
      i9 = HEAP32[i3 + 100 >> 2] | 0;
      i10 = HEAP32[(HEAP32[i9 >> 2] | 0) + 8 >> 2] | 0;
      __ZN3WTF6StringC1EPKc(i13, H_BASE + 272 | 0);
      i7 = __ZN3WTF10fastMallocEj(12) | 0;
      HEAP32[i7 >> 2] = 1;
      HEAP16[i7 + 4 >> 1] = 1201;
      i8 = i13 | 0;
      i6 = HEAP32[i8 >> 2] | 0;
      HEAP32[i7 + 8 >> 2] = i6;
      if ((i6 | 0) != 0) {
       i48 = i6 | 0;
       HEAP32[i48 >> 2] = (HEAP32[i48 >> 2] | 0) + 2;
      }
      i48 = i12 | 0;
      HEAP32[i48 >> 2] = i7;
      FUNCTION_TABLE_vii[i10 & 127](i9, i12);
      i9 = HEAP32[i48 >> 2] | 0;
      do {
       if ((i9 | 0) != 0) {
        i48 = i9 | 0;
        i10 = (HEAP32[i48 >> 2] | 0) - 1 | 0;
        if ((i10 | 0) != 0) {
         HEAP32[i48 >> 2] = i10;
         break;
        }
        i10 = HEAP32[i9 + 8 >> 2] | 0;
        do {
         if ((i10 | 0) != 0) {
          i48 = i10 | 0;
          i7 = (HEAP32[i48 >> 2] | 0) - 2 | 0;
          if ((i7 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i10);
           break;
          } else {
           HEAP32[i48 >> 2] = i7;
           break;
          }
         }
        } while (0);
        __ZN3WTF8fastFreeEPv(i9);
       }
      } while (0);
      i9 = HEAP32[i8 >> 2] | 0;
      do {
       if ((i9 | 0) != 0) {
        i10 = i9 | 0;
        i7 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
        if ((i7 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i9);
         break;
        } else {
         HEAP32[i10 >> 2] = i7;
         break;
        }
       }
      } while (0);
      i9 = HEAP32[i4 + 16 >> 2] | 0;
      do {
       if ((i9 | 0) == 0) {
        HEAP32[i15 + 16 >> 2] = 0;
       } else {
        i8 = i4;
        if ((i9 | 0) == (i8 | 0)) {
         i7 = i15;
         HEAP32[i15 + 16 >> 2] = i7;
         FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 127](i8, i7);
         break;
        } else {
         HEAP32[i15 + 16 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 8 >> 2] & 127](i9) | 0;
         break;
        }
       }
      } while (0);
      i9 = i14 + 16 | 0;
      HEAP32[i9 >> 2] = 0;
      i7 = __Znwj(32) | 0;
      do {
       if ((i7 | 0) != 0) {
        HEAP32[i7 >> 2] = H_BASE + 1112;
        i8 = i15 + 16 | 0;
        i10 = HEAP32[i8 >> 2] | 0;
        if ((i10 | 0) == 0) {
         HEAP32[i7 + 24 >> 2] = 0;
         break;
        }
        i48 = i15;
        if ((i10 | 0) == (i48 | 0)) {
         i6 = i7 + 8 | 0;
         HEAP32[i7 + 24 >> 2] = i6;
         FUNCTION_TABLE_vii[HEAP32[(HEAP32[i15 >> 2] | 0) + 12 >> 2] & 127](i48, i6);
         break;
        } else {
         HEAP32[i7 + 24 >> 2] = i10;
         HEAP32[i8 >> 2] = 0;
         break;
        }
       }
      } while (0);
      HEAP32[i9 >> 2] = i7;
      __ZN3WTF16callOnMainThreadENSt3__18functionIFvvEEE(i14);
      i8 = HEAP32[i9 >> 2] | 0;
      do {
       if ((i8 | 0) == (i14 | 0)) {
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 16 >> 2] & 1023](i8);
       } else {
        if ((i8 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 20 >> 2] & 1023](i8);
       }
      } while (0);
      i8 = HEAP32[i15 + 16 >> 2] | 0;
      if ((i8 | 0) == (i15 | 0)) {
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 16 >> 2] & 1023](i8);
       i68 = i63;
       break;
      }
      if ((i8 | 0) == 0) {
       i68 = i63;
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 20 >> 2] & 1023](i8);
      i68 = i63;
      break;
     }
     if ((HEAP32[i64 >> 2] | 0) == 0) {
      i69 = i66;
      i61 = 125;
      break;
     }
     i8 = HEAP32[i3 + 100 >> 2] | 0;
     i9 = HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] | 0;
     __ZN3WTF6StringC1EPKc(i17, H_BASE + 232 | 0);
     i7 = __ZN3WTF10fastMallocEj(12) | 0;
     HEAP32[i7 >> 2] = 1;
     HEAP16[i7 + 4 >> 1] = 1202;
     i10 = i17 | 0;
     i6 = HEAP32[i10 >> 2] | 0;
     HEAP32[i7 + 8 >> 2] = i6;
     if ((i6 | 0) != 0) {
      i48 = i6 | 0;
      HEAP32[i48 >> 2] = (HEAP32[i48 >> 2] | 0) + 2;
     }
     i48 = i16 | 0;
     HEAP32[i48 >> 2] = i7;
     FUNCTION_TABLE_vii[i9 & 127](i8, i16);
     i8 = HEAP32[i48 >> 2] | 0;
     do {
      if ((i8 | 0) != 0) {
       i48 = i8 | 0;
       i9 = (HEAP32[i48 >> 2] | 0) - 1 | 0;
       if ((i9 | 0) != 0) {
        HEAP32[i48 >> 2] = i9;
        break;
       }
       i9 = HEAP32[i8 + 8 >> 2] | 0;
       do {
        if ((i9 | 0) != 0) {
         i48 = i9 | 0;
         i7 = (HEAP32[i48 >> 2] | 0) - 2 | 0;
         if ((i7 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i9);
          break;
         } else {
          HEAP32[i48 >> 2] = i7;
          break;
         }
        }
       } while (0);
       __ZN3WTF8fastFreeEPv(i8);
      }
     } while (0);
     i8 = HEAP32[i10 >> 2] | 0;
     do {
      if ((i8 | 0) != 0) {
       i66 = i8 | 0;
       i9 = (HEAP32[i66 >> 2] | 0) - 2 | 0;
       if ((i9 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i8);
        break;
       } else {
        HEAP32[i66 >> 2] = i9;
        break;
       }
      }
     } while (0);
     i8 = HEAP32[i4 + 16 >> 2] | 0;
     do {
      if ((i8 | 0) == 0) {
       HEAP32[i19 + 16 >> 2] = 0;
      } else {
       if ((i8 | 0) == (i4 | 0)) {
        i10 = i19;
        HEAP32[i19 + 16 >> 2] = i10;
        FUNCTION_TABLE_vii[HEAP32[(HEAP32[i8 >> 2] | 0) + 12 >> 2] & 127](i8, i10);
        break;
       } else {
        HEAP32[i19 + 16 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] & 127](i8) | 0;
        break;
       }
      }
     } while (0);
     i8 = i18 + 16 | 0;
     HEAP32[i8 >> 2] = 0;
     i10 = __Znwj(32) | 0;
     do {
      if ((i10 | 0) != 0) {
       HEAP32[i10 >> 2] = H_BASE + 1072;
       i9 = i19 + 16 | 0;
       i66 = HEAP32[i9 >> 2] | 0;
       if ((i66 | 0) == 0) {
        HEAP32[i10 + 24 >> 2] = 0;
        break;
       }
       i7 = i19;
       if ((i66 | 0) == (i7 | 0)) {
        i48 = i10 + 8 | 0;
        HEAP32[i10 + 24 >> 2] = i48;
        FUNCTION_TABLE_vii[HEAP32[(HEAP32[i19 >> 2] | 0) + 12 >> 2] & 127](i7, i48);
        break;
       } else {
        HEAP32[i10 + 24 >> 2] = i66;
        HEAP32[i9 >> 2] = 0;
        break;
       }
      }
     } while (0);
     HEAP32[i8 >> 2] = i10;
     __ZN3WTF16callOnMainThreadENSt3__18functionIFvvEEE(i18);
     i9 = HEAP32[i8 >> 2] | 0;
     do {
      if ((i9 | 0) == (i18 | 0)) {
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 16 >> 2] & 1023](i9);
      } else {
       if ((i9 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 20 >> 2] & 1023](i9);
      }
     } while (0);
     i9 = HEAP32[i19 + 16 >> 2] | 0;
     if ((i9 | 0) == (i19 | 0)) {
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 16 >> 2] & 1023](i9);
      i68 = i63;
      break;
     }
     if ((i9 | 0) == 0) {
      i68 = i63;
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 20 >> 2] & 1023](i9);
     i68 = i63;
    } else {
     i69 = i2 + 40 | 0;
     i61 = 125;
    }
   } while (0);
   if ((i61 | 0) == 125) {
    i43 = i20 | 0;
    HEAP32[i43 >> 2] = 0;
    HEAP32[i20 + 4 >> 2] = 0;
    i9 = i20 + 8 | 0;
    HEAP32[i9 >> 2] = 0;
    i8 = i21 | 0;
    HEAP32[i8 >> 2] = 0;
    HEAP8[i22] = 0;
    i10 = (HEAP32[i69 >> 2] | 0) + 16 | 0;
    L180 : do {
     if (__ZN7WebCore22IDBBackingStoreLevelDB16makeIndexWritersExxRKNS_22IDBObjectStoreMetadataERNS_6IDBKeyEbRKN3WTF6VectorIxLj0ENS6_15CrashOnOverflowEEERKNS7_INS7_INS6_6RefPtrIS4_EELj0ES8_EELj0ES8_EERNS7_INSC_INS_21IDBIndexWriterLevelDBEEELj0ES8_EEPNS6_6StringERb(HEAP32[i65 >> 2] | 0, HEAP32[i42 >> 2] | 0, HEAP32[i42 + 4 >> 2] | 0, HEAP32[i10 >> 2] | 0, HEAP32[i10 + 4 >> 2] | 0, i3 + 16 | 0, i63, i62, i3 + 104 | 0, i3 + 116 | 0, i20, i21, i22) | 0) {
      if ((HEAP8[i22] & 1) == 0) {
       i66 = HEAP32[i3 + 100 >> 2] | 0;
       i48 = HEAP32[(HEAP32[i66 >> 2] | 0) + 8 >> 2] | 0;
       i7 = __ZN3WTF10fastMallocEj(12) | 0;
       HEAP32[i7 >> 2] = 1;
       HEAP16[i7 + 4 >> 1] = 1202;
       i6 = HEAP32[i8 >> 2] | 0;
       HEAP32[i7 + 8 >> 2] = i6;
       if ((i6 | 0) != 0) {
        i44 = i6 | 0;
        HEAP32[i44 >> 2] = (HEAP32[i44 >> 2] | 0) + 2;
       }
       i44 = i27 | 0;
       HEAP32[i44 >> 2] = i7;
       FUNCTION_TABLE_vii[i48 & 127](i66, i27);
       i66 = HEAP32[i44 >> 2] | 0;
       do {
        if ((i66 | 0) != 0) {
         i44 = i66 | 0;
         i48 = (HEAP32[i44 >> 2] | 0) - 1 | 0;
         if ((i48 | 0) != 0) {
          HEAP32[i44 >> 2] = i48;
          break;
         }
         i48 = HEAP32[i66 + 8 >> 2] | 0;
         do {
          if ((i48 | 0) != 0) {
           i44 = i48 | 0;
           i7 = (HEAP32[i44 >> 2] | 0) - 2 | 0;
           if ((i7 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i48);
            break;
           } else {
            HEAP32[i44 >> 2] = i7;
            break;
           }
          }
         } while (0);
         __ZN3WTF8fastFreeEPv(i66);
        }
       } while (0);
       i66 = HEAP32[i4 + 16 >> 2] | 0;
       do {
        if ((i66 | 0) == 0) {
         HEAP32[i29 + 16 >> 2] = 0;
        } else {
         i48 = i4;
         if ((i66 | 0) == (i48 | 0)) {
          i7 = i29;
          HEAP32[i29 + 16 >> 2] = i7;
          FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 127](i48, i7);
          break;
         } else {
          HEAP32[i29 + 16 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i66 >> 2] | 0) + 8 >> 2] & 127](i66) | 0;
          break;
         }
        }
       } while (0);
       i66 = i28 + 16 | 0;
       HEAP32[i66 >> 2] = 0;
       i7 = __Znwj(32) | 0;
       do {
        if ((i7 | 0) != 0) {
         HEAP32[i7 >> 2] = H_BASE + 992;
         i48 = i29 + 16 | 0;
         i44 = HEAP32[i48 >> 2] | 0;
         if ((i44 | 0) == 0) {
          HEAP32[i7 + 24 >> 2] = 0;
          break;
         }
         i6 = i29;
         if ((i44 | 0) == (i6 | 0)) {
          i45 = i7 + 8 | 0;
          HEAP32[i7 + 24 >> 2] = i45;
          FUNCTION_TABLE_vii[HEAP32[(HEAP32[i29 >> 2] | 0) + 12 >> 2] & 127](i6, i45);
          break;
         } else {
          HEAP32[i7 + 24 >> 2] = i44;
          HEAP32[i48 >> 2] = 0;
          break;
         }
        }
       } while (0);
       HEAP32[i66 >> 2] = i7;
       __ZN3WTF16callOnMainThreadENSt3__18functionIFvvEEE(i28);
       i48 = HEAP32[i66 >> 2] | 0;
       do {
        if ((i48 | 0) == (i28 | 0)) {
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i48 >> 2] | 0) + 16 >> 2] & 1023](i48);
        } else {
         if ((i48 | 0) == 0) {
          break;
         }
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i48 >> 2] | 0) + 20 >> 2] & 1023](i48);
        }
       } while (0);
       i48 = HEAP32[i29 + 16 >> 2] | 0;
       if ((i48 | 0) == (i29 | 0)) {
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i48 >> 2] | 0) + 16 >> 2] & 1023](i48);
        i70 = i63;
        break;
       }
       if ((i48 | 0) == 0) {
        i70 = i63;
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i48 >> 2] | 0) + 20 >> 2] & 1023](i48);
       i70 = i63;
       break;
      }
      i48 = HEAP32[i65 >> 2] | 0;
      i66 = (HEAP32[i69 >> 2] | 0) + 16 | 0;
      i7 = HEAP32[i66 >> 2] | 0;
      i44 = HEAP32[i66 + 4 >> 2] | 0;
      i66 = i3 + 24 | 0;
      i45 = HEAP32[i66 >> 2] | 0;
      i6 = HEAP32[i66 + 4 >> 2] | 0;
      i46 = HEAP32[i3 + 88 >> 2] | 0;
      i53 = i30 | 0;
      HEAP32[i53 >> 2] = i46;
      if ((i46 | 0) != 0) {
       i49 = i46 | 0;
       HEAP32[i49 >> 2] = (HEAP32[i49 >> 2] | 0) + 1;
      }
      i49 = __ZN7WebCore22IDBBackingStoreLevelDB9putRecordERNS_33IDBBackingStoreTransactionLevelDBExxRKNS_6IDBKeyEN3WTF10PassRefPtrINS_12SharedBufferEEEPNS_19IDBRecordIdentifierE(i48, i50, i7, i44, i45, i6, i63, i30, HEAP32[i64 >> 2] | 0) | 0;
      i6 = HEAP32[i53 >> 2] | 0;
      do {
       if ((i6 | 0) != 0) {
        i53 = i6 | 0;
        i45 = (HEAP32[i53 >> 2] | 0) - 1 | 0;
        if ((i45 | 0) == 0) {
         __ZN7WebCore12SharedBufferD1Ev(i6);
         __ZN3WTF8fastFreeEPv(i6);
         break;
        } else {
         HEAP32[i53 >> 2] = i45;
         break;
        }
       }
      } while (0);
      if (!i49) {
       i6 = HEAP32[i3 + 100 >> 2] | 0;
       i45 = HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] | 0;
       __ZN3WTF6StringC1EPKc(i32, H_BASE + 112 | 0);
       i53 = __ZN3WTF10fastMallocEj(12) | 0;
       HEAP32[i53 >> 2] = 1;
       HEAP16[i53 + 4 >> 1] = 1201;
       i44 = i32 | 0;
       i7 = HEAP32[i44 >> 2] | 0;
       HEAP32[i53 + 8 >> 2] = i7;
       if ((i7 | 0) != 0) {
        i48 = i7 | 0;
        HEAP32[i48 >> 2] = (HEAP32[i48 >> 2] | 0) + 2;
       }
       i48 = i31 | 0;
       HEAP32[i48 >> 2] = i53;
       FUNCTION_TABLE_vii[i45 & 127](i6, i31);
       i6 = HEAP32[i48 >> 2] | 0;
       do {
        if ((i6 | 0) != 0) {
         i48 = i6 | 0;
         i45 = (HEAP32[i48 >> 2] | 0) - 1 | 0;
         if ((i45 | 0) != 0) {
          HEAP32[i48 >> 2] = i45;
          break;
         }
         i45 = HEAP32[i6 + 8 >> 2] | 0;
         do {
          if ((i45 | 0) != 0) {
           i48 = i45 | 0;
           i53 = (HEAP32[i48 >> 2] | 0) - 2 | 0;
           if ((i53 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i45);
            break;
           } else {
            HEAP32[i48 >> 2] = i53;
            break;
           }
          }
         } while (0);
         __ZN3WTF8fastFreeEPv(i6);
        }
       } while (0);
       i6 = HEAP32[i44 >> 2] | 0;
       do {
        if ((i6 | 0) != 0) {
         i49 = i6 | 0;
         i45 = (HEAP32[i49 >> 2] | 0) - 2 | 0;
         if ((i45 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i6);
          break;
         } else {
          HEAP32[i49 >> 2] = i45;
          break;
         }
        }
       } while (0);
       i6 = HEAP32[i4 + 16 >> 2] | 0;
       do {
        if ((i6 | 0) == 0) {
         HEAP32[i34 + 16 >> 2] = 0;
        } else {
         i44 = i4;
         if ((i6 | 0) == (i44 | 0)) {
          i45 = i34;
          HEAP32[i34 + 16 >> 2] = i45;
          FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 127](i44, i45);
          break;
         } else {
          HEAP32[i34 + 16 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] & 127](i6) | 0;
          break;
         }
        }
       } while (0);
       i6 = i33 + 16 | 0;
       HEAP32[i6 >> 2] = 0;
       i45 = __Znwj(32) | 0;
       do {
        if ((i45 | 0) != 0) {
         HEAP32[i45 >> 2] = H_BASE + 952;
         i44 = i34 + 16 | 0;
         i49 = HEAP32[i44 >> 2] | 0;
         if ((i49 | 0) == 0) {
          HEAP32[i45 + 24 >> 2] = 0;
          break;
         }
         i53 = i34;
         if ((i49 | 0) == (i53 | 0)) {
          i48 = i45 + 8 | 0;
          HEAP32[i45 + 24 >> 2] = i48;
          FUNCTION_TABLE_vii[HEAP32[(HEAP32[i34 >> 2] | 0) + 12 >> 2] & 127](i53, i48);
          break;
         } else {
          HEAP32[i45 + 24 >> 2] = i49;
          HEAP32[i44 >> 2] = 0;
          break;
         }
        }
       } while (0);
       HEAP32[i6 >> 2] = i45;
       __ZN3WTF16callOnMainThreadENSt3__18functionIFvvEEE(i33);
       i44 = HEAP32[i6 >> 2] | 0;
       do {
        if ((i44 | 0) == (i33 | 0)) {
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i44 >> 2] | 0) + 16 >> 2] & 1023](i44);
        } else {
         if ((i44 | 0) == 0) {
          break;
         }
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i44 >> 2] | 0) + 20 >> 2] & 1023](i44);
        }
       } while (0);
       i44 = HEAP32[i34 + 16 >> 2] | 0;
       if ((i44 | 0) == (i34 | 0)) {
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i44 >> 2] | 0) + 16 >> 2] & 1023](i44);
        i70 = i63;
        break;
       }
       if ((i44 | 0) == 0) {
        i70 = i63;
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i44 >> 2] | 0) + 20 >> 2] & 1023](i44);
       i70 = i63;
       break;
      }
      if ((HEAP32[i9 >> 2] | 0) != 0) {
       i44 = 0;
       while (1) {
        i6 = (HEAP32[i69 >> 2] | 0) + 16 | 0;
        __ZNK7WebCore21IDBIndexWriterLevelDB14writeIndexKeysEPKNS_19IDBRecordIdentifierERNS_22IDBBackingStoreLevelDBERNS_33IDBBackingStoreTransactionLevelDBExx(HEAP32[(HEAP32[i43 >> 2] | 0) + (i44 << 2) >> 2] | 0, HEAP32[i64 >> 2] | 0, HEAP32[i65 >> 2] | 0, i50, HEAP32[i6 >> 2] | 0, HEAP32[i6 + 4 >> 2] | 0, HEAP32[i66 >> 2] | 0, HEAP32[i66 + 4 >> 2] | 0);
        i44 = i44 + 1 | 0;
        if (i44 >>> 0 >= (HEAP32[i9 >> 2] | 0) >>> 0) {
         break;
        }
       }
      }
      do {
       if ((HEAP8[i3 + 52 | 0] & 1) != 0) {
        if ((HEAP32[i54 >> 2] | 0) == 2) {
         break;
        }
        if ((HEAP32[i63 + 4 >> 2] | 0) != 4) {
         break;
        }
        i44 = (HEAP32[i69 >> 2] | 0) + 16 | 0;
        if (__ZN7WebCore22IDBBackingStoreLevelDB18updateKeyGeneratorERNS_21IDBTransactionBackendExxRKNS_6IDBKeyEb(HEAP32[i65 >> 2] | 0, i2, HEAP32[i44 >> 2] | 0, HEAP32[i44 + 4 >> 2] | 0, HEAP32[i66 >> 2] | 0, HEAP32[i66 + 4 >> 2] | 0, i63, i62 ^ 1) | 0) {
         break;
        }
        i44 = HEAP32[i3 + 100 >> 2] | 0;
        i6 = HEAP32[(HEAP32[i44 >> 2] | 0) + 8 >> 2] | 0;
        __ZN3WTF6StringC1EPKc(i36, H_BASE + 72 | 0);
        i45 = __ZN3WTF10fastMallocEj(12) | 0;
        HEAP32[i45 >> 2] = 1;
        HEAP16[i45 + 4 >> 1] = 1201;
        i49 = i36 | 0;
        i48 = HEAP32[i49 >> 2] | 0;
        HEAP32[i45 + 8 >> 2] = i48;
        if ((i48 | 0) != 0) {
         i53 = i48 | 0;
         HEAP32[i53 >> 2] = (HEAP32[i53 >> 2] | 0) + 2;
        }
        i53 = i35 | 0;
        HEAP32[i53 >> 2] = i45;
        FUNCTION_TABLE_vii[i6 & 127](i44, i35);
        i44 = HEAP32[i53 >> 2] | 0;
        do {
         if ((i44 | 0) != 0) {
          i53 = i44 | 0;
          i6 = (HEAP32[i53 >> 2] | 0) - 1 | 0;
          if ((i6 | 0) != 0) {
           HEAP32[i53 >> 2] = i6;
           break;
          }
          i6 = HEAP32[i44 + 8 >> 2] | 0;
          do {
           if ((i6 | 0) != 0) {
            i53 = i6 | 0;
            i45 = (HEAP32[i53 >> 2] | 0) - 2 | 0;
            if ((i45 | 0) == 0) {
             __ZN3WTF10StringImpl7destroyEPS0_(i6);
             break;
            } else {
             HEAP32[i53 >> 2] = i45;
             break;
            }
           }
          } while (0);
          __ZN3WTF8fastFreeEPv(i44);
         }
        } while (0);
        i44 = HEAP32[i49 >> 2] | 0;
        do {
         if ((i44 | 0) != 0) {
          i6 = i44 | 0;
          i45 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
          if ((i45 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i44);
           break;
          } else {
           HEAP32[i6 >> 2] = i45;
           break;
          }
         }
        } while (0);
        i44 = HEAP32[i4 + 16 >> 2] | 0;
        do {
         if ((i44 | 0) == 0) {
          HEAP32[i38 + 16 >> 2] = 0;
         } else {
          i49 = i4;
          if ((i44 | 0) == (i49 | 0)) {
           i45 = i38;
           HEAP32[i38 + 16 >> 2] = i45;
           FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 127](i49, i45);
           break;
          } else {
           HEAP32[i38 + 16 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i44 >> 2] | 0) + 8 >> 2] & 127](i44) | 0;
           break;
          }
         }
        } while (0);
        i44 = i37 + 16 | 0;
        HEAP32[i44 >> 2] = 0;
        i45 = __Znwj(32) | 0;
        do {
         if ((i45 | 0) != 0) {
          HEAP32[i45 >> 2] = H_BASE + 912;
          i49 = i38 + 16 | 0;
          i6 = HEAP32[i49 >> 2] | 0;
          if ((i6 | 0) == 0) {
           HEAP32[i45 + 24 >> 2] = 0;
           break;
          }
          i53 = i38;
          if ((i6 | 0) == (i53 | 0)) {
           i48 = i45 + 8 | 0;
           HEAP32[i45 + 24 >> 2] = i48;
           FUNCTION_TABLE_vii[HEAP32[(HEAP32[i38 >> 2] | 0) + 12 >> 2] & 127](i53, i48);
           break;
          } else {
           HEAP32[i45 + 24 >> 2] = i6;
           HEAP32[i49 >> 2] = 0;
           break;
          }
         }
        } while (0);
        HEAP32[i44 >> 2] = i45;
        __ZN3WTF16callOnMainThreadENSt3__18functionIFvvEEE(i37);
        i49 = HEAP32[i44 >> 2] | 0;
        do {
         if ((i49 | 0) == (i37 | 0)) {
          FUNCTION_TABLE_vi[HEAP32[(HEAP32[i49 >> 2] | 0) + 16 >> 2] & 1023](i49);
         } else {
          if ((i49 | 0) == 0) {
           break;
          }
          FUNCTION_TABLE_vi[HEAP32[(HEAP32[i49 >> 2] | 0) + 20 >> 2] & 1023](i49);
         }
        } while (0);
        i49 = HEAP32[i38 + 16 >> 2] | 0;
        if ((i49 | 0) == (i38 | 0)) {
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i49 >> 2] | 0) + 16 >> 2] & 1023](i49);
         i70 = i63;
         break L180;
        }
        if ((i49 | 0) == 0) {
         i70 = i63;
         break L180;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i49 >> 2] | 0) + 20 >> 2] & 1023](i49);
        i70 = i63;
        break L180;
       }
      } while (0);
      i66 = HEAP32[i3 + 100 >> 2] | 0;
      i49 = HEAP32[(HEAP32[i66 >> 2] | 0) + 20 >> 2] | 0;
      i44 = i39 | 0;
      HEAP32[i44 >> 2] = i63;
      FUNCTION_TABLE_vii[i49 & 127](i66, i39);
      i66 = HEAP32[i44 >> 2] | 0;
      do {
       if ((i66 | 0) != 0) {
        i44 = i66 | 0;
        i49 = (HEAP32[i44 >> 2] | 0) - 1 | 0;
        if ((i49 | 0) == 0) {
         __ZN7WebCore6IDBKeyD1Ev(i66);
         __ZN3WTF8fastFreeEPv(i66);
         break;
        } else {
         HEAP32[i44 >> 2] = i49;
         break;
        }
       }
      } while (0);
      i66 = HEAP32[i4 + 16 >> 2] | 0;
      do {
       if ((i66 | 0) == 0) {
        HEAP32[i41 + 16 >> 2] = 0;
       } else {
        i49 = i4;
        if ((i66 | 0) == (i49 | 0)) {
         i44 = i41;
         HEAP32[i41 + 16 >> 2] = i44;
         FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 127](i49, i44);
         break;
        } else {
         HEAP32[i41 + 16 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i66 >> 2] | 0) + 8 >> 2] & 127](i66) | 0;
         break;
        }
       }
      } while (0);
      i66 = i40 + 16 | 0;
      HEAP32[i66 >> 2] = 0;
      i44 = __Znwj(32) | 0;
      do {
       if ((i44 | 0) != 0) {
        HEAP32[i44 >> 2] = H_BASE + 872;
        i49 = i41 + 16 | 0;
        i45 = HEAP32[i49 >> 2] | 0;
        if ((i45 | 0) == 0) {
         HEAP32[i44 + 24 >> 2] = 0;
         break;
        }
        i6 = i41;
        if ((i45 | 0) == (i6 | 0)) {
         i48 = i44 + 8 | 0;
         HEAP32[i44 + 24 >> 2] = i48;
         FUNCTION_TABLE_vii[HEAP32[(HEAP32[i41 >> 2] | 0) + 12 >> 2] & 127](i6, i48);
         break;
        } else {
         HEAP32[i44 + 24 >> 2] = i45;
         HEAP32[i49 >> 2] = 0;
         break;
        }
       }
      } while (0);
      HEAP32[i66 >> 2] = i44;
      __ZN3WTF16callOnMainThreadENSt3__18functionIFvvEEE(i40);
      i49 = HEAP32[i66 >> 2] | 0;
      do {
       if ((i49 | 0) == (i40 | 0)) {
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i49 >> 2] | 0) + 16 >> 2] & 1023](i49);
       } else {
        if ((i49 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i49 >> 2] | 0) + 20 >> 2] & 1023](i49);
       }
      } while (0);
      i49 = HEAP32[i41 + 16 >> 2] | 0;
      if ((i49 | 0) == (i41 | 0)) {
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i49 >> 2] | 0) + 16 >> 2] & 1023](i49);
       i70 = 0;
       break;
      }
      if ((i49 | 0) == 0) {
       i70 = 0;
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i49 >> 2] | 0) + 20 >> 2] & 1023](i49);
      i70 = 0;
     } else {
      i49 = HEAP32[i3 + 100 >> 2] | 0;
      i66 = HEAP32[(HEAP32[i49 >> 2] | 0) + 8 >> 2] | 0;
      __ZN3WTF6StringC1EPKc(i24, H_BASE + 168 | 0);
      i44 = __ZN3WTF10fastMallocEj(12) | 0;
      HEAP32[i44 >> 2] = 1;
      HEAP16[i44 + 4 >> 1] = 1201;
      i45 = i24 | 0;
      i48 = HEAP32[i45 >> 2] | 0;
      HEAP32[i44 + 8 >> 2] = i48;
      if ((i48 | 0) != 0) {
       i6 = i48 | 0;
       HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
      }
      i6 = i23 | 0;
      HEAP32[i6 >> 2] = i44;
      FUNCTION_TABLE_vii[i66 & 127](i49, i23);
      i49 = HEAP32[i6 >> 2] | 0;
      do {
       if ((i49 | 0) != 0) {
        i6 = i49 | 0;
        i66 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
        if ((i66 | 0) != 0) {
         HEAP32[i6 >> 2] = i66;
         break;
        }
        i66 = HEAP32[i49 + 8 >> 2] | 0;
        do {
         if ((i66 | 0) != 0) {
          i6 = i66 | 0;
          i44 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
          if ((i44 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i66);
           break;
          } else {
           HEAP32[i6 >> 2] = i44;
           break;
          }
         }
        } while (0);
        __ZN3WTF8fastFreeEPv(i49);
       }
      } while (0);
      i49 = HEAP32[i45 >> 2] | 0;
      do {
       if ((i49 | 0) != 0) {
        i66 = i49 | 0;
        i44 = (HEAP32[i66 >> 2] | 0) - 2 | 0;
        if ((i44 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i49);
         break;
        } else {
         HEAP32[i66 >> 2] = i44;
         break;
        }
       }
      } while (0);
      i49 = HEAP32[i4 + 16 >> 2] | 0;
      do {
       if ((i49 | 0) == 0) {
        HEAP32[i26 + 16 >> 2] = 0;
       } else {
        i45 = i4;
        if ((i49 | 0) == (i45 | 0)) {
         i44 = i26;
         HEAP32[i26 + 16 >> 2] = i44;
         FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 127](i45, i44);
         break;
        } else {
         HEAP32[i26 + 16 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i49 >> 2] | 0) + 8 >> 2] & 127](i49) | 0;
         break;
        }
       }
      } while (0);
      i49 = i25 + 16 | 0;
      HEAP32[i49 >> 2] = 0;
      i44 = __Znwj(32) | 0;
      do {
       if ((i44 | 0) != 0) {
        HEAP32[i44 >> 2] = H_BASE + 1032;
        i45 = i26 + 16 | 0;
        i66 = HEAP32[i45 >> 2] | 0;
        if ((i66 | 0) == 0) {
         HEAP32[i44 + 24 >> 2] = 0;
         break;
        }
        i6 = i26;
        if ((i66 | 0) == (i6 | 0)) {
         i48 = i44 + 8 | 0;
         HEAP32[i44 + 24 >> 2] = i48;
         FUNCTION_TABLE_vii[HEAP32[(HEAP32[i26 >> 2] | 0) + 12 >> 2] & 127](i6, i48);
         break;
        } else {
         HEAP32[i44 + 24 >> 2] = i66;
         HEAP32[i45 >> 2] = 0;
         break;
        }
       }
      } while (0);
      HEAP32[i49 >> 2] = i44;
      __ZN3WTF16callOnMainThreadENSt3__18functionIFvvEEE(i25);
      i45 = HEAP32[i49 >> 2] | 0;
      do {
       if ((i45 | 0) == (i25 | 0)) {
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i45 >> 2] | 0) + 16 >> 2] & 1023](i45);
       } else {
        if ((i45 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i45 >> 2] | 0) + 20 >> 2] & 1023](i45);
       }
      } while (0);
      i45 = HEAP32[i26 + 16 >> 2] | 0;
      if ((i45 | 0) == (i26 | 0)) {
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i45 >> 2] | 0) + 16 >> 2] & 1023](i45);
       i70 = i63;
       break;
      }
      if ((i45 | 0) == 0) {
       i70 = i63;
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i45 >> 2] | 0) + 20 >> 2] & 1023](i45);
      i70 = i63;
     }
    } while (0);
    i65 = HEAP32[i8 >> 2] | 0;
    do {
     if ((i65 | 0) != 0) {
      i9 = i65 | 0;
      i43 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
      if ((i43 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i65);
       break;
      } else {
       HEAP32[i9 >> 2] = i43;
       break;
      }
     }
    } while (0);
    __ZN3WTF6VectorINS_6RefPtrIN7WebCore21IDBIndexWriterLevelDBEEELj0ENS_15CrashOnOverflowEED1Ev(i20);
    i68 = i70;
   }
   i65 = HEAP32[i64 >> 2] | 0;
   if ((i65 | 0) == 0) {
    i67 = i68;
    break;
   }
   i8 = i65 | 0;
   i43 = i65 | 0;
   i9 = (HEAP32[i43 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i43 >> 2] = i9;
    i67 = i68;
    break;
   }
   i9 = i8 + 12 | 0;
   if ((HEAP32[i9 >> 2] | 0) != 0) {
    HEAP32[i9 >> 2] = 0;
   }
   i9 = i8 + 4 | 0;
   i43 = HEAP32[i9 >> 2] | 0;
   if ((i43 | 0) != 0) {
    HEAP32[i9 >> 2] = 0;
    HEAP32[i8 + 8 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i43);
   }
   __ZN3WTF8fastFreeEPv(i65);
   i67 = i68;
  }
 } while (0);
 if ((i67 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i68 = i67 | 0;
 i70 = (HEAP32[i68 >> 2] | 0) - 1 | 0;
 if ((i70 | 0) == 0) {
  __ZN7WebCore6IDBKeyD1Ev(i67);
  __ZN3WTF8fastFreeEPv(i67);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i68 >> 2] = i70;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore26IDBServerConnectionLevelDB23cursorPrefetchIterationERNS_16IDBCursorBackendERKNS_32CursorPrefetchIterationOperationENSt3__18functionIFvvEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 200 | 0;
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 i8 = i5 + 32 | 0;
 i9 = i5 + 48 | 0;
 i10 = i5 + 56 | 0;
 i11 = i5 + 64 | 0;
 i12 = i5 + 72 | 0;
 i13 = i5 + 88 | 0;
 i14 = i5 + 96 | 0;
 i15 = i5 + 104 | 0;
 i16 = i5 + 112 | 0;
 i17 = i5 + 120 | 0;
 i18 = i5 + 128 | 0;
 i19 = i5 + 136 | 0;
 i20 = i5 + 144 | 0;
 i21 = i5 + 152 | 0;
 i22 = i5 + 176 | 0;
 i23 = i2 + 24 | 0;
 i24 = HEAP32[i23 >> 2] | 0;
 i25 = HEAP32[i23 + 4 >> 2] | 0;
 L1 : do {
  if ((i24 | 0) == 0 & (i25 | 0) == 0) {
   i26 = 0;
  } else {
   i27 = HEAP32[i1 + 40 >> 2] | 0;
   i28 = HEAP32[i1 + 32 >> 2] | 0;
   i29 = _i64Add(i24, i25, ~0, ~i24) | 0;
   i30 = tempRet0;
   i31 = (i29 >>> 22 | i30 << 10) ^ i29;
   i29 = (i30 >>> 22 | 0 << 10) ^ i30;
   i30 = _i64Add(i31, i29, ~(i31 << 13 | 0 >>> 19), ~(i29 << 13 | i31 >>> 19)) | 0;
   i31 = tempRet0;
   i29 = ___muldi3((i30 >>> 8 | i31 << 24) ^ i30, (i31 >>> 8 | 0 << 24) ^ i31, 9, 0) | 0;
   i31 = tempRet0;
   i30 = (i29 >>> 15 | i31 << 17) ^ i29;
   i29 = (i31 >>> 15 | 0 << 17) ^ i31;
   i31 = _i64Add(i30, i29, ~(i30 << 27 | 0 >>> 5), ~(i29 << 27 | i30 >>> 5)) | 0;
   i30 = (i31 >>> 31 | tempRet0 << 1) ^ i31;
   if ((i28 | 0) == 0) {
    i26 = 0;
    break;
   }
   i31 = i27 & i30;
   i29 = i28 + (i31 << 4) | 0;
   i32 = i29 | 0;
   i33 = HEAP32[i32 >> 2] | 0;
   i34 = HEAP32[i32 + 4 >> 2] | 0;
   if ((i33 | 0) == (i24 | 0) & (i34 | 0) == (i25 | 0)) {
    i35 = i29;
   } else {
    i29 = (i30 >>> 23) + ~i30 | 0;
    i30 = i29 << 12 ^ i29;
    i29 = i30 >>> 7 ^ i30;
    i30 = i29 << 2 ^ i29;
    i29 = i30 >>> 20 ^ i30 | 1;
    i30 = 0;
    i32 = i31;
    i31 = i34;
    i34 = i33;
    while (1) {
     if ((i34 | 0) == 0 & (i31 | 0) == 0) {
      i26 = 0;
      break L1;
     }
     i33 = (i30 | 0) == 0 ? i29 : i30;
     i36 = i33 + i32 & i27;
     i37 = i28 + (i36 << 4) | 0;
     i38 = i37 | 0;
     i39 = HEAP32[i38 >> 2] | 0;
     i40 = HEAP32[i38 + 4 >> 2] | 0;
     if ((i39 | 0) == (i24 | 0) & (i40 | 0) == (i25 | 0)) {
      i35 = i37;
      break;
     } else {
      i30 = i33;
      i32 = i36;
      i31 = i40;
      i34 = i39;
     }
    }
   }
   if ((i35 | 0) == 0) {
    i26 = 0;
    break;
   }
   i26 = HEAP32[i35 + 8 >> 2] | 0;
  }
 } while (0);
 i35 = i6 | 0;
 HEAP32[i35 >> 2] = 0;
 i25 = i6 + 4 | 0;
 HEAP32[i25 >> 2] = 0;
 i24 = i6 + 8 | 0;
 HEAP32[i24 >> 2] = 0;
 i34 = i7 | 0;
 HEAP32[i34 >> 2] = 0;
 i31 = i7 + 4 | 0;
 HEAP32[i31 >> 2] = 0;
 i32 = i7 + 8 | 0;
 HEAP32[i32 >> 2] = 0;
 i30 = i8 | 0;
 HEAP32[i30 >> 2] = 0;
 i28 = i8 + 4 | 0;
 HEAP32[i28 >> 2] = 0;
 i27 = i8 + 8 | 0;
 HEAP32[i27 >> 2] = 0;
 i29 = (i26 | 0) != 0;
 if (i29) {
  i39 = i1 + 56 | 0;
  i40 = HEAP32[i39 >> 2] | 0;
  i36 = HEAP32[i39 + 4 >> 2] | 0;
  i33 = _i64Add(i40, i36, 1, 0) | 0;
  HEAP32[i39 >> 2] = i33;
  HEAP32[i39 + 4 >> 2] = tempRet0;
  HEAP32[i9 >> 2] = i40;
  HEAP32[i9 + 4 >> 2] = i36;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i26 >> 2] | 0) + 12 >> 2] & 127](i10, i26);
  i36 = i10 | 0;
  i10 = HEAP32[i36 >> 2] | 0;
  HEAP32[i36 >> 2] = 0;
  i36 = i11 | 0;
  HEAP32[i36 >> 2] = i10;
  __ZN3WTF9HashTableIxNS_12KeyValuePairIxNS_6RefPtrIN7WebCore28IDBBackingStoreCursorLevelDBEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIyEENS_7HashMapIxS5_SA_NS_10HashTraitsIxEENSC_IS5_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKxNS_10PassRefPtrIS4_EEEENS_18HashTableAddResultINS_17HashTableIteratorIxS6_S8_SA_SG_SD_EEEEOT0_OT1_(i12, i1 + 32 | 0, i9, i11);
  do {
   if ((HEAP8[i12 + 8 | 0] & 1) == 0) {
    i11 = HEAP32[i12 >> 2] | 0;
    i10 = HEAP32[i36 >> 2] | 0;
    HEAP32[i36 >> 2] = 0;
    i40 = i11 + 8 | 0;
    i11 = HEAP32[i40 >> 2] | 0;
    HEAP32[i40 >> 2] = i10;
    if ((i11 | 0) == 0) {
     break;
    }
    i10 = i11 + 4 | 0;
    i11 = i10 | 0;
    i40 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
    if ((i40 | 0) != 0) {
     HEAP32[i11 >> 2] = i40;
     break;
    }
    i40 = i10 - 4 | 0;
    if ((i40 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i40 >> 2] | 0) + 32 >> 2] & 1023](i40);
   } else {
    i40 = HEAP32[i36 >> 2] | 0;
    if ((i40 | 0) == 0) {
     break;
    }
    i10 = i40 + 4 | 0;
    i40 = i10 | 0;
    i11 = (HEAP32[i40 >> 2] | 0) - 1 | 0;
    if ((i11 | 0) != 0) {
     HEAP32[i40 >> 2] = i11;
     break;
    }
    i11 = i10 - 4 | 0;
    if ((i11 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 32 >> 2] & 1023](i11);
   }
  } while (0);
  i36 = HEAP32[i9 + 4 >> 2] | 0;
  i12 = i2 + 32 | 0;
  HEAP32[i12 >> 2] = HEAP32[i9 >> 2];
  HEAP32[i12 + 4 >> 2] = i36;
 }
 i36 = i3 + 12 | 0;
 i12 = i26;
 i9 = i26;
 i11 = i14 | 0;
 i10 = i15 | 0;
 i40 = i2 + 8 | 0;
 i39 = i18 | 0;
 i33 = i19 | 0;
 i37 = i26;
 i38 = i16 | 0;
 i41 = i17 | 0;
 i42 = 0;
 i43 = 0;
 L29 : while (1) {
  if ((i42 | 0) >= (HEAP32[i36 >> 2] | 0)) {
   break;
  }
  if (!i29) {
   i44 = 26;
   break;
  }
  if (!(FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 1](i26, 0, 1) | 0)) {
   i44 = 26;
   break;
  }
  FUNCTION_TABLE_vii[HEAP32[HEAP32[i9 >> 2] >> 2] & 127](i14, i26);
  i45 = HEAP32[i24 >> 2] | 0;
  if ((i45 | 0) == (HEAP32[i25 >> 2] | 0)) {
   i46 = i45 + 1 | 0;
   i47 = i46 + (i45 >>> 2) | 0;
   i48 = i47 >>> 0 > 16 >>> 0 ? i47 : 16;
   i47 = i48 >>> 0 > i46 >>> 0 ? i48 : i46;
   do {
    if (i45 >>> 0 < i47 >>> 0) {
     i46 = HEAP32[i35 >> 2] | 0;
     if (i47 >>> 0 > 1073741823 >>> 0) {
      i44 = 31;
      break L29;
     }
     i48 = __ZN3WTF18fastMallocGoodSizeEj(i47 << 2) | 0;
     HEAP32[i25 >> 2] = i48 >>> 2;
     i49 = __ZN3WTF10fastMallocEj(i48) | 0;
     HEAP32[i35 >> 2] = i49;
     i48 = i46;
     _memcpy(i49 | 0, i48 | 0, i45 << 2) | 0;
     if ((i46 | 0) == 0) {
      break;
     }
     if ((HEAP32[i35 >> 2] | 0) == (i46 | 0)) {
      HEAP32[i35 >> 2] = 0;
      HEAP32[i25 >> 2] = 0;
     }
     __ZN3WTF8fastFreeEPv(i48);
    }
   } while (0);
   i47 = (HEAP32[i35 >> 2] | 0) + (HEAP32[i24 >> 2] << 2) | 0;
   i48 = HEAP32[i11 >> 2] | 0;
   HEAP32[i11 >> 2] = 0;
   HEAP32[i47 >> 2] = i48;
   i50 = HEAP32[i24 >> 2] | 0;
  } else {
   i48 = (HEAP32[i35 >> 2] | 0) + (i45 << 2) | 0;
   i47 = HEAP32[i11 >> 2] | 0;
   HEAP32[i11 >> 2] = 0;
   HEAP32[i48 >> 2] = i47;
   i50 = HEAP32[i24 >> 2] | 0;
  }
  HEAP32[i24 >> 2] = i50 + 1;
  i47 = HEAP32[i11 >> 2] | 0;
  do {
   if ((i47 | 0) != 0) {
    i48 = i47 | 0;
    i46 = (HEAP32[i48 >> 2] | 0) - 1 | 0;
    if ((i46 | 0) == 0) {
     __ZN7WebCore6IDBKeyD1Ev(i47);
     __ZN3WTF8fastFreeEPv(i47);
     break;
    } else {
     HEAP32[i48 >> 2] = i46;
     break;
    }
   }
  } while (0);
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 16 >> 2] & 127](i15, i26);
  i47 = HEAP32[i32 >> 2] | 0;
  if ((i47 | 0) == (HEAP32[i31 >> 2] | 0)) {
   i45 = i47 + 1 | 0;
   i46 = i45 + (i47 >>> 2) | 0;
   i48 = i46 >>> 0 > 16 >>> 0 ? i46 : 16;
   i46 = i48 >>> 0 > i45 >>> 0 ? i48 : i45;
   do {
    if (i47 >>> 0 < i46 >>> 0) {
     i45 = HEAP32[i34 >> 2] | 0;
     if (i46 >>> 0 > 1073741823 >>> 0) {
      i44 = 45;
      break L29;
     }
     i48 = __ZN3WTF18fastMallocGoodSizeEj(i46 << 2) | 0;
     HEAP32[i31 >> 2] = i48 >>> 2;
     i49 = __ZN3WTF10fastMallocEj(i48) | 0;
     HEAP32[i34 >> 2] = i49;
     i48 = i45;
     _memcpy(i49 | 0, i48 | 0, i47 << 2) | 0;
     if ((i45 | 0) == 0) {
      break;
     }
     if ((HEAP32[i34 >> 2] | 0) == (i45 | 0)) {
      HEAP32[i34 >> 2] = 0;
      HEAP32[i31 >> 2] = 0;
     }
     __ZN3WTF8fastFreeEPv(i48);
    }
   } while (0);
   i46 = (HEAP32[i34 >> 2] | 0) + (HEAP32[i32 >> 2] << 2) | 0;
   i48 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = 0;
   HEAP32[i46 >> 2] = i48;
   i51 = HEAP32[i32 >> 2] | 0;
  } else {
   i48 = (HEAP32[i34 >> 2] | 0) + (i47 << 2) | 0;
   i46 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = 0;
   HEAP32[i48 >> 2] = i46;
   i51 = HEAP32[i32 >> 2] | 0;
  }
  HEAP32[i32 >> 2] = i51 + 1;
  i46 = HEAP32[i10 >> 2] | 0;
  do {
   if ((i46 | 0) != 0) {
    i48 = i46 | 0;
    i45 = (HEAP32[i48 >> 2] | 0) - 1 | 0;
    if ((i45 | 0) == 0) {
     __ZN7WebCore6IDBKeyD1Ev(i46);
     __ZN3WTF8fastFreeEPv(i46);
     break;
    } else {
     HEAP32[i48 >> 2] = i45;
     break;
    }
   }
  } while (0);
  i46 = HEAP32[i40 >> 2] | 0;
  do {
   if ((i46 | 0) == 1) {
    i47 = __ZN3WTF10fastMallocEj(40) | 0;
    __ZN7WebCore12SharedBufferC1Ev(i47);
    i45 = HEAP32[i27 >> 2] | 0;
    if ((i45 | 0) != (HEAP32[i28 >> 2] | 0)) {
     HEAP32[(HEAP32[i30 >> 2] | 0) + (i45 << 2) >> 2] = i47;
     HEAP32[i27 >> 2] = (HEAP32[i27 >> 2] | 0) + 1;
     i52 = i43;
     break;
    }
    i48 = i45 + 1 | 0;
    i49 = i48 + (i45 >>> 2) | 0;
    i53 = i49 >>> 0 > 16 >>> 0 ? i49 : 16;
    i49 = i53 >>> 0 > i48 >>> 0 ? i53 : i48;
    do {
     if (i45 >>> 0 < i49 >>> 0) {
      i48 = HEAP32[i30 >> 2] | 0;
      if (i49 >>> 0 > 1073741823 >>> 0) {
       i44 = 60;
       break L29;
      }
      i53 = __ZN3WTF18fastMallocGoodSizeEj(i49 << 2) | 0;
      HEAP32[i28 >> 2] = i53 >>> 2;
      i54 = __ZN3WTF10fastMallocEj(i53) | 0;
      HEAP32[i30 >> 2] = i54;
      i53 = i48;
      _memcpy(i54 | 0, i53 | 0, i45 << 2) | 0;
      if ((i48 | 0) == 0) {
       break;
      }
      if ((HEAP32[i30 >> 2] | 0) == (i48 | 0)) {
       HEAP32[i30 >> 2] = 0;
       HEAP32[i28 >> 2] = 0;
      }
      __ZN3WTF8fastFreeEPv(i53);
     }
    } while (0);
    HEAP32[(HEAP32[i30 >> 2] | 0) + (HEAP32[i27 >> 2] << 2) >> 2] = i47;
    HEAP32[i27 >> 2] = (HEAP32[i27 >> 2] | 0) + 1;
    i52 = i43;
   } else if ((i46 | 0) == 0) {
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i37 >> 2] | 0) + 20 >> 2] & 127](i16, i26);
    i45 = (__ZNK7WebCore12SharedBuffer4sizeEv(HEAP32[i38 >> 2] | 0) | 0) + i43 | 0;
    i49 = HEAP32[i38 >> 2] | 0;
    do {
     if ((i49 | 0) != 0) {
      i53 = i49 | 0;
      i48 = (HEAP32[i53 >> 2] | 0) - 1 | 0;
      if ((i48 | 0) == 0) {
       __ZN7WebCore12SharedBufferD1Ev(i49);
       __ZN3WTF8fastFreeEPv(i49);
       break;
      } else {
       HEAP32[i53 >> 2] = i48;
       break;
      }
     }
    } while (0);
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i37 >> 2] | 0) + 20 >> 2] & 127](i17, i26);
    i49 = HEAP32[i27 >> 2] | 0;
    if ((i49 | 0) == (HEAP32[i28 >> 2] | 0)) {
     i47 = i49 + 1 | 0;
     i48 = i47 + (i49 >>> 2) | 0;
     i53 = i48 >>> 0 > 16 >>> 0 ? i48 : 16;
     i48 = i53 >>> 0 > i47 >>> 0 ? i53 : i47;
     do {
      if (i49 >>> 0 < i48 >>> 0) {
       i47 = HEAP32[i30 >> 2] | 0;
       if (i48 >>> 0 > 1073741823 >>> 0) {
        i44 = 74;
        break L29;
       }
       i53 = __ZN3WTF18fastMallocGoodSizeEj(i48 << 2) | 0;
       HEAP32[i28 >> 2] = i53 >>> 2;
       i54 = __ZN3WTF10fastMallocEj(i53) | 0;
       HEAP32[i30 >> 2] = i54;
       i53 = i47;
       _memcpy(i54 | 0, i53 | 0, i49 << 2) | 0;
       if ((i47 | 0) == 0) {
        break;
       }
       if ((HEAP32[i30 >> 2] | 0) == (i47 | 0)) {
        HEAP32[i30 >> 2] = 0;
        HEAP32[i28 >> 2] = 0;
       }
       __ZN3WTF8fastFreeEPv(i53);
      }
     } while (0);
     i48 = (HEAP32[i30 >> 2] | 0) + (HEAP32[i27 >> 2] << 2) | 0;
     i53 = HEAP32[i41 >> 2] | 0;
     HEAP32[i41 >> 2] = 0;
     HEAP32[i48 >> 2] = i53;
     i55 = HEAP32[i27 >> 2] | 0;
    } else {
     i53 = (HEAP32[i30 >> 2] | 0) + (i49 << 2) | 0;
     i48 = HEAP32[i41 >> 2] | 0;
     HEAP32[i41 >> 2] = 0;
     HEAP32[i53 >> 2] = i48;
     i55 = HEAP32[i27 >> 2] | 0;
    }
    HEAP32[i27 >> 2] = i55 + 1;
    i48 = HEAP32[i41 >> 2] | 0;
    if ((i48 | 0) == 0) {
     i52 = i45;
     break;
    }
    i53 = i48 | 0;
    i47 = (HEAP32[i53 >> 2] | 0) - 1 | 0;
    if ((i47 | 0) == 0) {
     __ZN7WebCore12SharedBufferD1Ev(i48);
     __ZN3WTF8fastFreeEPv(i48);
     i52 = i45;
     break;
    } else {
     HEAP32[i53 >> 2] = i47;
     i52 = i45;
     break;
    }
   } else {
    i52 = i43;
   }
  } while (0);
  FUNCTION_TABLE_vii[HEAP32[HEAP32[i9 >> 2] >> 2] & 127](i18, i26);
  i46 = HEAP32[i39 >> 2] | 0;
  i47 = (HEAP32[i46 + 32 >> 2] | 0) + i52 | 0;
  do {
   if ((i46 | 0) != 0) {
    i53 = i46 | 0;
    i48 = (HEAP32[i53 >> 2] | 0) - 1 | 0;
    if ((i48 | 0) == 0) {
     __ZN7WebCore6IDBKeyD1Ev(i46);
     __ZN3WTF8fastFreeEPv(i46);
     break;
    } else {
     HEAP32[i53 >> 2] = i48;
     break;
    }
   }
  } while (0);
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 16 >> 2] & 127](i19, i26);
  i46 = HEAP32[i33 >> 2] | 0;
  i48 = i47 + (HEAP32[i46 + 32 >> 2] | 0) | 0;
  do {
   if ((i46 | 0) != 0) {
    i53 = i46 | 0;
    i54 = (HEAP32[i53 >> 2] | 0) - 1 | 0;
    if ((i54 | 0) == 0) {
     __ZN7WebCore6IDBKeyD1Ev(i46);
     __ZN3WTF8fastFreeEPv(i46);
     break;
    } else {
     HEAP32[i53 >> 2] = i54;
     break;
    }
   }
  } while (0);
  if (i48 >>> 0 > 10485760 >>> 0) {
   break;
  } else {
   i42 = i42 + 1 | 0;
   i43 = i48;
  }
 }
 if ((i44 | 0) == 31) {
  _WTFCrash();
 } else if ((i44 | 0) == 60) {
  _WTFCrash();
 } else if ((i44 | 0) == 74) {
  _WTFCrash();
 } else if ((i44 | 0) == 26) {
  i43 = HEAP32[i23 + 4 >> 2] | 0;
  HEAP32[i13 >> 2] = HEAP32[i23 >> 2];
  HEAP32[i13 + 4 >> 2] = i43;
  __ZN3WTF7HashMapIxNS_6RefPtrIN7WebCore28IDBBackingStoreCursorLevelDBEEENS_7IntHashIyEENS_10HashTraitsIxEENS7_IS4_EEE6removeERKx(i1 + 32 | 0, i13) | 0;
  __ZN7WebCore16IDBCursorBackend5clearEv(i2);
 } else if ((i44 | 0) == 45) {
  _WTFCrash();
 }
 i44 = HEAP32[i3 + 16 >> 2] | 0;
 do {
  if ((HEAP32[i24 >> 2] | 0) == 0) {
   i3 = HEAP32[(HEAP32[i44 >> 2] | 0) + 24 >> 2] | 0;
   i2 = i20 | 0;
   HEAP32[i2 >> 2] = 0;
   FUNCTION_TABLE_vii[i3 & 127](i44, i20);
   i3 = HEAP32[i2 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   i2 = i3 | 0;
   i13 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i13 | 0) == 0) {
    __ZN7WebCore12SharedBufferD1Ev(i3);
    __ZN3WTF8fastFreeEPv(i3);
    break;
   } else {
    HEAP32[i2 >> 2] = i13;
    break;
   }
  } else {
   FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i44 >> 2] | 0) + 44 >> 2] & 63](i44, i6, i7, i8);
   i13 = HEAP32[i4 + 16 >> 2] | 0;
   do {
    if ((i13 | 0) == 0) {
     HEAP32[i22 + 16 >> 2] = 0;
    } else {
     if ((i13 | 0) == (i4 | 0)) {
      i2 = i22;
      HEAP32[i22 + 16 >> 2] = i2;
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i13 >> 2] | 0) + 12 >> 2] & 127](i13, i2);
      break;
     } else {
      HEAP32[i22 + 16 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 8 >> 2] & 127](i13) | 0;
      break;
     }
    }
   } while (0);
   i13 = i21 + 16 | 0;
   HEAP32[i13 >> 2] = 0;
   i48 = __Znwj(32) | 0;
   do {
    if ((i48 | 0) != 0) {
     HEAP32[i48 >> 2] = H_BASE + 1712;
     i2 = i22 + 16 | 0;
     i3 = HEAP32[i2 >> 2] | 0;
     if ((i3 | 0) == 0) {
      HEAP32[i48 + 24 >> 2] = 0;
      break;
     }
     i1 = i22;
     if ((i3 | 0) == (i1 | 0)) {
      i43 = i48 + 8 | 0;
      HEAP32[i48 + 24 >> 2] = i43;
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i22 >> 2] | 0) + 12 >> 2] & 127](i1, i43);
      break;
     } else {
      HEAP32[i48 + 24 >> 2] = i3;
      HEAP32[i2 >> 2] = 0;
      break;
     }
    }
   } while (0);
   HEAP32[i13 >> 2] = i48;
   __ZN3WTF16callOnMainThreadENSt3__18functionIFvvEEE(i21);
   i2 = HEAP32[i13 >> 2] | 0;
   do {
    if ((i2 | 0) == (i21 | 0)) {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
    } else {
     if ((i2 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
    }
   } while (0);
   i2 = HEAP32[i22 + 16 >> 2] | 0;
   if ((i2 | 0) == (i22 | 0)) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
    break;
   }
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
  }
 } while (0);
 i22 = HEAP32[i27 >> 2] | 0;
 if ((i22 | 0) != 0) {
  i21 = HEAP32[i30 >> 2] | 0;
  i4 = i21 + (i22 << 2) | 0;
  i22 = i21;
  while (1) {
   i21 = HEAP32[i22 >> 2] | 0;
   do {
    if ((i21 | 0) != 0) {
     i8 = i21 | 0;
     i7 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     if ((i7 | 0) == 0) {
      __ZN7WebCore12SharedBufferD1Ev(i21);
      __ZN3WTF8fastFreeEPv(i21);
      break;
     } else {
      HEAP32[i8 >> 2] = i7;
      break;
     }
    }
   } while (0);
   i22 = i22 + 4 | 0;
   if ((i22 | 0) == (i4 | 0)) {
    break;
   }
  }
  HEAP32[i27 >> 2] = 0;
 }
 i27 = HEAP32[i30 >> 2] | 0;
 if ((i27 | 0) != 0) {
  HEAP32[i30 >> 2] = 0;
  HEAP32[i28 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i27);
 }
 i27 = HEAP32[i32 >> 2] | 0;
 if ((i27 | 0) != 0) {
  i28 = HEAP32[i34 >> 2] | 0;
  i30 = i28 + (i27 << 2) | 0;
  i27 = i28;
  while (1) {
   i28 = HEAP32[i27 >> 2] | 0;
   do {
    if ((i28 | 0) != 0) {
     i4 = i28 | 0;
     i22 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
     if ((i22 | 0) == 0) {
      __ZN7WebCore6IDBKeyD1Ev(i28);
      __ZN3WTF8fastFreeEPv(i28);
      break;
     } else {
      HEAP32[i4 >> 2] = i22;
      break;
     }
    }
   } while (0);
   i27 = i27 + 4 | 0;
   if ((i27 | 0) == (i30 | 0)) {
    break;
   }
  }
  HEAP32[i32 >> 2] = 0;
 }
 i32 = HEAP32[i34 >> 2] | 0;
 if ((i32 | 0) != 0) {
  HEAP32[i34 >> 2] = 0;
  HEAP32[i31 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i32);
 }
 i32 = HEAP32[i24 >> 2] | 0;
 if ((i32 | 0) != 0) {
  i31 = HEAP32[i35 >> 2] | 0;
  i34 = i31 + (i32 << 2) | 0;
  i32 = i31;
  while (1) {
   i31 = HEAP32[i32 >> 2] | 0;
   do {
    if ((i31 | 0) != 0) {
     i30 = i31 | 0;
     i27 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
     if ((i27 | 0) == 0) {
      __ZN7WebCore6IDBKeyD1Ev(i31);
      __ZN3WTF8fastFreeEPv(i31);
      break;
     } else {
      HEAP32[i30 >> 2] = i27;
      break;
     }
    }
   } while (0);
   i32 = i32 + 4 | 0;
   if ((i32 | 0) == (i34 | 0)) {
    break;
   }
  }
  HEAP32[i24 >> 2] = 0;
 }
 i24 = HEAP32[i35 >> 2] | 0;
 if ((i24 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 HEAP32[i35 >> 2] = 0;
 HEAP32[i25 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i24);
 STACKTOP = i5;
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 792 >> 2] = F_BASE_vi + 228;
 HEAP32[H_BASE + 796 >> 2] = F_BASE_vi + 446;
 HEAP32[H_BASE + 800 >> 2] = F_BASE_ii + 96;
 HEAP32[H_BASE + 804 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 808 >> 2] = F_BASE_vi + 350;
 HEAP32[H_BASE + 812 >> 2] = F_BASE_vi + 518;
 HEAP32[H_BASE + 816 >> 2] = F_BASE_vi + 176;
 HEAP32[H_BASE + 832 >> 2] = F_BASE_vi + 404;
 HEAP32[H_BASE + 836 >> 2] = F_BASE_vi + 422;
 HEAP32[H_BASE + 840 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 844 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 848 >> 2] = F_BASE_vi + 126;
 HEAP32[H_BASE + 852 >> 2] = F_BASE_vi + 452;
 HEAP32[H_BASE + 856 >> 2] = F_BASE_vi + 180;
 HEAP32[H_BASE + 872 >> 2] = F_BASE_vi + 376;
 HEAP32[H_BASE + 876 >> 2] = F_BASE_vi + 70;
 HEAP32[H_BASE + 880 >> 2] = F_BASE_ii + 38;
 HEAP32[H_BASE + 884 >> 2] = F_BASE_vii + 58;
 HEAP32[H_BASE + 888 >> 2] = F_BASE_vi + 474;
 HEAP32[H_BASE + 892 >> 2] = F_BASE_vi + 372;
 HEAP32[H_BASE + 896 >> 2] = F_BASE_vi + 154;
 HEAP32[H_BASE + 912 >> 2] = F_BASE_vi + 122;
 HEAP32[H_BASE + 916 >> 2] = F_BASE_vi + 90;
 HEAP32[H_BASE + 920 >> 2] = F_BASE_ii + 74;
 HEAP32[H_BASE + 924 >> 2] = F_BASE_vii + 90;
 HEAP32[H_BASE + 928 >> 2] = F_BASE_vi + 234;
 HEAP32[H_BASE + 932 >> 2] = F_BASE_vi + 132;
 HEAP32[H_BASE + 936 >> 2] = F_BASE_vi + 32;
 HEAP32[H_BASE + 952 >> 2] = F_BASE_vi + 258;
 HEAP32[H_BASE + 956 >> 2] = F_BASE_vi + 386;
 HEAP32[H_BASE + 960 >> 2] = F_BASE_ii + 72;
 HEAP32[H_BASE + 964 >> 2] = F_BASE_vii + 38;
 HEAP32[H_BASE + 968 >> 2] = F_BASE_vi + 288;
 HEAP32[H_BASE + 972 >> 2] = F_BASE_vi + 300;
 HEAP32[H_BASE + 976 >> 2] = F_BASE_vi + 332;
 HEAP32[H_BASE + 992 >> 2] = F_BASE_vi + 318;
 HEAP32[H_BASE + 996 >> 2] = F_BASE_vi + 46;
 HEAP32[H_BASE + 1e3 >> 2] = F_BASE_ii + 86;
 HEAP32[H_BASE + 1004 >> 2] = F_BASE_vii + 96;
 HEAP32[H_BASE + 1008 >> 2] = F_BASE_vi + 152;
 HEAP32[H_BASE + 1012 >> 2] = F_BASE_vi + 466;
 HEAP32[H_BASE + 1016 >> 2] = F_BASE_vi + 82;
 HEAP32[H_BASE + 1032 >> 2] = F_BASE_vi + 336;
 HEAP32[H_BASE + 1036 >> 2] = F_BASE_vi + 74;
 HEAP32[H_BASE + 1040 >> 2] = F_BASE_ii + 36;
 HEAP32[H_BASE + 1044 >> 2] = F_BASE_vii + 98;
 HEAP32[H_BASE + 1048 >> 2] = F_BASE_vi + 194;
 HEAP32[H_BASE + 1052 >> 2] = F_BASE_vi + 244;
 HEAP32[H_BASE + 1056 >> 2] = F_BASE_vi + 342;
 HEAP32[H_BASE + 1072 >> 2] = F_BASE_vi + 330;
 HEAP32[H_BASE + 1076 >> 2] = F_BASE_vi + 432;
 HEAP32[H_BASE + 1080 >> 2] = F_BASE_ii + 76;
 HEAP32[H_BASE + 1084 >> 2] = F_BASE_vii + 64;
 HEAP32[H_BASE + 1088 >> 2] = F_BASE_vi + 448;
 HEAP32[H_BASE + 1092 >> 2] = F_BASE_vi + 120;
 HEAP32[H_BASE + 1096 >> 2] = F_BASE_vi + 370;
 HEAP32[H_BASE + 1112 >> 2] = F_BASE_vi + 226;
 HEAP32[H_BASE + 1116 >> 2] = F_BASE_vi + 200;
 HEAP32[H_BASE + 1120 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 1124 >> 2] = F_BASE_vii + 60;
 HEAP32[H_BASE + 1128 >> 2] = F_BASE_vi + 292;
 HEAP32[H_BASE + 1132 >> 2] = F_BASE_vi + 184;
 HEAP32[H_BASE + 1136 >> 2] = F_BASE_vi + 166;
 HEAP32[H_BASE + 1152 >> 2] = F_BASE_vi + 274;
 HEAP32[H_BASE + 1156 >> 2] = F_BASE_vi + 256;
 HEAP32[H_BASE + 1160 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 1164 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 1168 >> 2] = F_BASE_vi + 494;
 HEAP32[H_BASE + 1172 >> 2] = F_BASE_vi + 40;
 HEAP32[H_BASE + 1176 >> 2] = F_BASE_vi + 356;
 HEAP32[H_BASE + 1192 >> 2] = F_BASE_vi + 522;
 HEAP32[H_BASE + 1196 >> 2] = F_BASE_vi + 230;
 HEAP32[H_BASE + 1200 >> 2] = F_BASE_ii + 40;
 HEAP32[H_BASE + 1204 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 1208 >> 2] = F_BASE_vi + 100;
 HEAP32[H_BASE + 1212 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 1216 >> 2] = F_BASE_vi + 514;
 HEAP32[H_BASE + 1232 >> 2] = F_BASE_vi + 266;
 HEAP32[H_BASE + 1236 >> 2] = F_BASE_vi + 322;
 HEAP32[H_BASE + 1240 >> 2] = F_BASE_ii + 28;
 HEAP32[H_BASE + 1244 >> 2] = F_BASE_vii + 34;
 HEAP32[H_BASE + 1248 >> 2] = F_BASE_vi + 252;
 HEAP32[H_BASE + 1252 >> 2] = F_BASE_vi + 104;
 HEAP32[H_BASE + 1256 >> 2] = F_BASE_vi + 406;
 HEAP32[H_BASE + 1272 >> 2] = F_BASE_vi + 348;
 HEAP32[H_BASE + 1276 >> 2] = F_BASE_vi + 436;
 HEAP32[H_BASE + 1280 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 1284 >> 2] = F_BASE_vii + 76;
 HEAP32[H_BASE + 1288 >> 2] = F_BASE_vi + 390;
 HEAP32[H_BASE + 1292 >> 2] = F_BASE_vi + 380;
 HEAP32[H_BASE + 1296 >> 2] = F_BASE_vi + 412;
 HEAP32[H_BASE + 1312 >> 2] = F_BASE_vi + 458;
 HEAP32[H_BASE + 1316 >> 2] = F_BASE_vi + 434;
 HEAP32[H_BASE + 1320 >> 2] = F_BASE_ii + 80;
 HEAP32[H_BASE + 1324 >> 2] = F_BASE_vii + 44;
 HEAP32[H_BASE + 1328 >> 2] = F_BASE_vi + 48;
 HEAP32[H_BASE + 1332 >> 2] = F_BASE_vi + 162;
 HEAP32[H_BASE + 1336 >> 2] = F_BASE_vi + 66;
 HEAP32[H_BASE + 1352 >> 2] = F_BASE_vi + 498;
 HEAP32[H_BASE + 1356 >> 2] = F_BASE_vi + 430;
 HEAP32[H_BASE + 1360 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 1364 >> 2] = F_BASE_vii + 56;
 HEAP32[H_BASE + 1368 >> 2] = F_BASE_vi + 218;
 HEAP32[H_BASE + 1372 >> 2] = F_BASE_vi + 34;
 HEAP32[H_BASE + 1376 >> 2] = F_BASE_vi + 302;
 HEAP32[H_BASE + 1392 >> 2] = F_BASE_vi + 358;
 HEAP32[H_BASE + 1396 >> 2] = F_BASE_vi + 264;
 HEAP32[H_BASE + 1400 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 1404 >> 2] = F_BASE_vii + 66;
 HEAP32[H_BASE + 1408 >> 2] = F_BASE_vi + 144;
 HEAP32[H_BASE + 1412 >> 2] = F_BASE_vi + 54;
 HEAP32[H_BASE + 1416 >> 2] = F_BASE_vi + 378;
 HEAP32[H_BASE + 1432 >> 2] = F_BASE_vi + 52;
 HEAP32[H_BASE + 1436 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 1440 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 1444 >> 2] = F_BASE_vii + 40;
 HEAP32[H_BASE + 1448 >> 2] = F_BASE_vi + 158;
 HEAP32[H_BASE + 1452 >> 2] = F_BASE_vi + 124;
 HEAP32[H_BASE + 1456 >> 2] = F_BASE_vi + 96;
 HEAP32[H_BASE + 1472 >> 2] = F_BASE_vi + 416;
 HEAP32[H_BASE + 1476 >> 2] = F_BASE_vi + 396;
 HEAP32[H_BASE + 1480 >> 2] = F_BASE_ii + 34;
 HEAP32[H_BASE + 1484 >> 2] = F_BASE_vii + 102;
 HEAP32[H_BASE + 1488 >> 2] = F_BASE_vi + 102;
 HEAP32[H_BASE + 1492 >> 2] = F_BASE_vi + 174;
 HEAP32[H_BASE + 1496 >> 2] = F_BASE_vi + 444;
 HEAP32[H_BASE + 1512 >> 2] = F_BASE_vi + 182;
 HEAP32[H_BASE + 1516 >> 2] = F_BASE_vi + 424;
 HEAP32[H_BASE + 1520 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 1524 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 1528 >> 2] = F_BASE_vi + 402;
 HEAP32[H_BASE + 1532 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 1536 >> 2] = F_BASE_vi + 220;
 HEAP32[H_BASE + 1552 >> 2] = F_BASE_vi + 400;
 HEAP32[H_BASE + 1556 >> 2] = F_BASE_vi + 508;
 HEAP32[H_BASE + 1560 >> 2] = F_BASE_ii + 44;
 HEAP32[H_BASE + 1564 >> 2] = F_BASE_vii + 42;
 HEAP32[H_BASE + 1568 >> 2] = F_BASE_vi + 324;
 HEAP32[H_BASE + 1572 >> 2] = F_BASE_vi + 440;
 HEAP32[H_BASE + 1576 >> 2] = F_BASE_vi + 366;
 HEAP32[H_BASE + 1592 >> 2] = F_BASE_vi + 210;
 HEAP32[H_BASE + 1596 >> 2] = F_BASE_vi + 486;
 HEAP32[H_BASE + 1600 >> 2] = F_BASE_ii + 92;
 HEAP32[H_BASE + 1604 >> 2] = F_BASE_vii + 50;
 HEAP32[H_BASE + 1608 >> 2] = F_BASE_vi + 512;
 HEAP32[H_BASE + 1612 >> 2] = F_BASE_vi + 338;
 HEAP32[H_BASE + 1616 >> 2] = F_BASE_vi + 504;
 HEAP32[H_BASE + 1632 >> 2] = F_BASE_vi + 334;
 HEAP32[H_BASE + 1636 >> 2] = F_BASE_vi + 364;
 HEAP32[H_BASE + 1640 >> 2] = F_BASE_ii + 82;
 HEAP32[H_BASE + 1644 >> 2] = F_BASE_vii + 24;
 HEAP32[H_BASE + 1648 >> 2] = F_BASE_vi + 316;
 HEAP32[H_BASE + 1652 >> 2] = F_BASE_vi + 108;
 HEAP32[H_BASE + 1656 >> 2] = F_BASE_vi + 496;
 HEAP32[H_BASE + 1672 >> 2] = F_BASE_vi + 216;
 HEAP32[H_BASE + 1676 >> 2] = F_BASE_vi + 232;
 HEAP32[H_BASE + 1680 >> 2] = F_BASE_ii + 48;
 HEAP32[H_BASE + 1684 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 1688 >> 2] = F_BASE_vi + 36;
 HEAP32[H_BASE + 1692 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 1696 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 1712 >> 2] = F_BASE_vi + 272;
 HEAP32[H_BASE + 1716 >> 2] = F_BASE_vi + 98;
 HEAP32[H_BASE + 1720 >> 2] = F_BASE_ii + 70;
 HEAP32[H_BASE + 1724 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 1728 >> 2] = F_BASE_vi + 118;
 HEAP32[H_BASE + 1732 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 1736 >> 2] = F_BASE_vi + 56;
 HEAP32[H_BASE + 1752 >> 2] = F_BASE_vi + 164;
 HEAP32[H_BASE + 1756 >> 2] = F_BASE_vi + 44;
 HEAP32[H_BASE + 1760 >> 2] = F_BASE_ii + 102;
 HEAP32[H_BASE + 1764 >> 2] = F_BASE_vii + 106;
 HEAP32[H_BASE + 1768 >> 2] = F_BASE_vi + 268;
 HEAP32[H_BASE + 1772 >> 2] = F_BASE_vi + 410;
 HEAP32[H_BASE + 1776 >> 2] = F_BASE_vi + 128;
 HEAP32[H_BASE + 1792 >> 2] = F_BASE_vi + 464;
 HEAP32[H_BASE + 1796 >> 2] = F_BASE_vi + 246;
 HEAP32[H_BASE + 1800 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 1804 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 1808 >> 2] = F_BASE_vi + 420;
 HEAP32[H_BASE + 1812 >> 2] = F_BASE_vi + 42;
 HEAP32[H_BASE + 1816 >> 2] = F_BASE_vi + 462;
 HEAP32[H_BASE + 1832 >> 2] = F_BASE_vi + 110;
 HEAP32[H_BASE + 1836 >> 2] = F_BASE_vi + 360;
 HEAP32[H_BASE + 1840 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 1844 >> 2] = F_BASE_vii + 22;
 HEAP32[H_BASE + 1848 >> 2] = F_BASE_vi + 382;
 HEAP32[H_BASE + 1852 >> 2] = F_BASE_vi + 442;
 HEAP32[H_BASE + 1856 >> 2] = F_BASE_vi + 340;
 HEAP32[H_BASE + 1872 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 1876 >> 2] = F_BASE_vi + 112;
 HEAP32[H_BASE + 1880 >> 2] = F_BASE_ii + 104;
 HEAP32[H_BASE + 1884 >> 2] = F_BASE_vii + 70;
 HEAP32[H_BASE + 1888 >> 2] = F_BASE_vi + 468;
 HEAP32[H_BASE + 1892 >> 2] = F_BASE_vi + 114;
 HEAP32[H_BASE + 1896 >> 2] = F_BASE_vi + 296;
 HEAP32[H_BASE + 1912 >> 2] = F_BASE_vi + 328;
 HEAP32[H_BASE + 1916 >> 2] = F_BASE_vi + 86;
 HEAP32[H_BASE + 1920 >> 2] = F_BASE_ii + 32;
 HEAP32[H_BASE + 1924 >> 2] = F_BASE_vii + 62;
 HEAP32[H_BASE + 1928 >> 2] = F_BASE_vi + 150;
 HEAP32[H_BASE + 1932 >> 2] = F_BASE_vi + 308;
 HEAP32[H_BASE + 1936 >> 2] = F_BASE_vi + 58;
 HEAP32[H_BASE + 1952 >> 2] = F_BASE_vi + 456;
 HEAP32[H_BASE + 1956 >> 2] = F_BASE_vi + 326;
 HEAP32[H_BASE + 1960 >> 2] = F_BASE_ii + 100;
 HEAP32[H_BASE + 1964 >> 2] = F_BASE_vii + 26;
 HEAP32[H_BASE + 1968 >> 2] = F_BASE_vi + 290;
 HEAP32[H_BASE + 1972 >> 2] = F_BASE_vi + 408;
 HEAP32[H_BASE + 1976 >> 2] = F_BASE_vi + 92;
 HEAP32[H_BASE + 1992 >> 2] = F_BASE_vi + 186;
 HEAP32[H_BASE + 1996 >> 2] = F_BASE_vi + 178;
 HEAP32[H_BASE + 2e3 >> 2] = F_BASE_ii + 78;
 HEAP32[H_BASE + 2004 >> 2] = F_BASE_vii + 30;
 HEAP32[H_BASE + 2008 >> 2] = F_BASE_vi + 344;
 HEAP32[H_BASE + 2012 >> 2] = F_BASE_vi + 142;
 HEAP32[H_BASE + 2016 >> 2] = F_BASE_vi + 240;
 HEAP32[H_BASE + 2032 >> 2] = F_BASE_vi + 320;
 HEAP32[H_BASE + 2036 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 2040 >> 2] = F_BASE_ii + 46;
 HEAP32[H_BASE + 2044 >> 2] = F_BASE_vii + 54;
 HEAP32[H_BASE + 2048 >> 2] = F_BASE_vi + 414;
 HEAP32[H_BASE + 2052 >> 2] = F_BASE_vi + 254;
 HEAP32[H_BASE + 2056 >> 2] = F_BASE_vi + 368;
 HEAP32[H_BASE + 2072 >> 2] = F_BASE_vi + 206;
 HEAP32[H_BASE + 2076 >> 2] = F_BASE_vi + 214;
 HEAP32[H_BASE + 2080 >> 2] = F_BASE_ii + 58;
 HEAP32[H_BASE + 2084 >> 2] = F_BASE_vii + 104;
 HEAP32[H_BASE + 2088 >> 2] = F_BASE_vi + 136;
 HEAP32[H_BASE + 2092 >> 2] = F_BASE_vi + 426;
 HEAP32[H_BASE + 2096 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 2112 >> 2] = F_BASE_vi + 170;
 HEAP32[H_BASE + 2116 >> 2] = F_BASE_vi + 428;
 HEAP32[H_BASE + 2120 >> 2] = F_BASE_ii + 52;
 HEAP32[H_BASE + 2124 >> 2] = F_BASE_vii + 46;
 HEAP32[H_BASE + 2128 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 2132 >> 2] = F_BASE_vi + 270;
 HEAP32[H_BASE + 2136 >> 2] = F_BASE_vi + 84;
 HEAP32[H_BASE + 2152 >> 2] = F_BASE_vi + 106;
 HEAP32[H_BASE + 2156 >> 2] = F_BASE_vi + 78;
 HEAP32[H_BASE + 2160 >> 2] = F_BASE_ii + 56;
 HEAP32[H_BASE + 2164 >> 2] = F_BASE_vii + 108;
 HEAP32[H_BASE + 2168 >> 2] = F_BASE_vi + 222;
 HEAP32[H_BASE + 2172 >> 2] = F_BASE_vi + 314;
 HEAP32[H_BASE + 2176 >> 2] = F_BASE_vi + 384;
 HEAP32[H_BASE + 2192 >> 2] = F_BASE_vi + 346;
 HEAP32[H_BASE + 2196 >> 2] = F_BASE_vi + 204;
 HEAP32[H_BASE + 2200 >> 2] = F_BASE_ii + 90;
 HEAP32[H_BASE + 2204 >> 2] = F_BASE_vii + 52;
 HEAP32[H_BASE + 2208 >> 2] = F_BASE_vi + 196;
 HEAP32[H_BASE + 2212 >> 2] = F_BASE_vi + 478;
 HEAP32[H_BASE + 2216 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 2232 >> 2] = F_BASE_vi + 470;
 HEAP32[H_BASE + 2236 >> 2] = F_BASE_vi + 212;
 HEAP32[H_BASE + 2240 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 2244 >> 2] = F_BASE_vii + 94;
 HEAP32[H_BASE + 2248 >> 2] = F_BASE_vi + 28;
 HEAP32[H_BASE + 2252 >> 2] = F_BASE_vi + 94;
 HEAP32[H_BASE + 2256 >> 2] = F_BASE_vi + 80;
 HEAP32[H_BASE + 2272 >> 2] = F_BASE_vi + 238;
 HEAP32[H_BASE + 2276 >> 2] = F_BASE_vi + 476;
 HEAP32[H_BASE + 2280 >> 2] = F_BASE_ii + 60;
 HEAP32[H_BASE + 2284 >> 2] = F_BASE_vii + 78;
 HEAP32[H_BASE + 2288 >> 2] = F_BASE_vi + 418;
 HEAP32[H_BASE + 2292 >> 2] = F_BASE_vi + 156;
 HEAP32[H_BASE + 2296 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 2312 >> 2] = F_BASE_vi + 30;
 HEAP32[H_BASE + 2316 >> 2] = F_BASE_vi + 50;
 HEAP32[H_BASE + 2320 >> 2] = F_BASE_ii + 84;
 HEAP32[H_BASE + 2324 >> 2] = F_BASE_vii + 72;
 HEAP32[H_BASE + 2328 >> 2] = F_BASE_vi + 374;
 HEAP32[H_BASE + 2332 >> 2] = F_BASE_vi + 62;
 HEAP32[H_BASE + 2336 >> 2] = F_BASE_vi + 354;
 HEAP32[H_BASE + 2352 >> 2] = F_BASE_vi + 146;
 HEAP32[H_BASE + 2356 >> 2] = F_BASE_vi + 454;
 HEAP32[H_BASE + 2360 >> 2] = F_BASE_ii + 30;
 HEAP32[H_BASE + 2364 >> 2] = F_BASE_vii + 36;
 HEAP32[H_BASE + 2368 >> 2] = F_BASE_vi + 248;
 HEAP32[H_BASE + 2372 >> 2] = F_BASE_vi + 392;
 HEAP32[H_BASE + 2376 >> 2] = F_BASE_vi + 306;
 HEAP32[H_BASE + 2392 >> 2] = F_BASE_vi + 482;
 HEAP32[H_BASE + 2396 >> 2] = F_BASE_vi + 472;
 HEAP32[H_BASE + 2400 >> 2] = F_BASE_ii + 54;
 HEAP32[H_BASE + 2404 >> 2] = F_BASE_vii + 80;
 HEAP32[H_BASE + 2408 >> 2] = F_BASE_vi + 398;
 HEAP32[H_BASE + 2412 >> 2] = F_BASE_vi + 236;
 HEAP32[H_BASE + 2416 >> 2] = F_BASE_vi + 282;
 HEAP32[H_BASE + 2432 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 2436 >> 2] = F_BASE_vi + 250;
 HEAP32[H_BASE + 2440 >> 2] = F_BASE_ii + 68;
 HEAP32[H_BASE + 2444 >> 2] = F_BASE_vii + 86;
 HEAP32[H_BASE + 2448 >> 2] = F_BASE_vi + 312;
 HEAP32[H_BASE + 2452 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 2456 >> 2] = F_BASE_vi + 168;
 HEAP32[H_BASE + 2472 >> 2] = F_BASE_vi + 276;
 HEAP32[H_BASE + 2476 >> 2] = F_BASE_vi + 72;
 HEAP32[H_BASE + 2480 >> 2] = F_BASE_ii + 62;
 HEAP32[H_BASE + 2484 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 2488 >> 2] = F_BASE_vi + 450;
 HEAP32[H_BASE + 2492 >> 2] = F_BASE_vi + 140;
 HEAP32[H_BASE + 2496 >> 2] = F_BASE_vi + 352;
 HEAP32[H_BASE + 2512 >> 2] = F_BASE_vi + 202;
 HEAP32[H_BASE + 2516 >> 2] = F_BASE_vi + 310;
 HEAP32[H_BASE + 2520 >> 2] = F_BASE_ii + 88;
 HEAP32[H_BASE + 2524 >> 2] = F_BASE_vii + 68;
 HEAP32[H_BASE + 2528 >> 2] = F_BASE_vi + 76;
 HEAP32[H_BASE + 2532 >> 2] = F_BASE_vi + 262;
 HEAP32[H_BASE + 2536 >> 2] = F_BASE_vi + 130;
 HEAP32[H_BASE + 2552 >> 2] = F_BASE_vi + 506;
 HEAP32[H_BASE + 2556 >> 2] = F_BASE_vi + 484;
 HEAP32[H_BASE + 2560 >> 2] = F_BASE_ii + 42;
 HEAP32[H_BASE + 2564 >> 2] = F_BASE_vii + 32;
 HEAP32[H_BASE + 2568 >> 2] = F_BASE_vi + 198;
 HEAP32[H_BASE + 2572 >> 2] = F_BASE_vi + 116;
 HEAP32[H_BASE + 2576 >> 2] = F_BASE_vi + 492;
 HEAP32[H_BASE + 2592 >> 2] = F_BASE_vi + 160;
 HEAP32[H_BASE + 2596 >> 2] = F_BASE_vi + 138;
 HEAP32[H_BASE + 2600 >> 2] = F_BASE_ii + 94;
 HEAP32[H_BASE + 2604 >> 2] = F_BASE_vii + 28;
 HEAP32[H_BASE + 2608 >> 2] = F_BASE_vi + 208;
 HEAP32[H_BASE + 2612 >> 2] = F_BASE_vi + 38;
 HEAP32[H_BASE + 2616 >> 2] = F_BASE_vi + 278;
 HEAP32[H_BASE + 2632 >> 2] = F_BASE_vi + 488;
 HEAP32[H_BASE + 2636 >> 2] = F_BASE_vi + 490;
 HEAP32[H_BASE + 2640 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 2644 >> 2] = F_BASE_vii + 82;
 HEAP32[H_BASE + 2648 >> 2] = F_BASE_vi + 460;
 HEAP32[H_BASE + 2652 >> 2] = F_BASE_vi + 362;
 HEAP32[H_BASE + 2656 >> 2] = F_BASE_vi + 148;
 HEAP32[H_BASE + 2672 >> 2] = F_BASE_vi + 64;
 HEAP32[H_BASE + 2676 >> 2] = F_BASE_vi + 304;
 HEAP32[H_BASE + 2680 >> 2] = F_BASE_ii + 66;
 HEAP32[H_BASE + 2684 >> 2] = F_BASE_vii + 84;
 HEAP32[H_BASE + 2688 >> 2] = F_BASE_vi + 134;
 HEAP32[H_BASE + 2692 >> 2] = F_BASE_vi + 438;
 HEAP32[H_BASE + 2696 >> 2] = F_BASE_vi + 192;
 HEAP32[H_BASE + 2712 >> 2] = F_BASE_vi + 88;
 HEAP32[H_BASE + 2716 >> 2] = F_BASE_vi + 60;
 HEAP32[H_BASE + 2720 >> 2] = F_BASE_ii + 106;
 HEAP32[H_BASE + 2724 >> 2] = F_BASE_vii + 92;
 HEAP32[H_BASE + 2728 >> 2] = F_BASE_vi + 188;
 HEAP32[H_BASE + 2732 >> 2] = F_BASE_vi + 224;
 HEAP32[H_BASE + 2736 >> 2] = F_BASE_vi + 516;
 HEAP32[H_BASE + 2752 >> 2] = F_BASE_vi + 298;
 HEAP32[H_BASE + 2756 >> 2] = F_BASE_vi + 280;
 HEAP32[H_BASE + 2760 >> 2] = F_BASE_ii + 98;
 HEAP32[H_BASE + 2764 >> 2] = F_BASE_vii + 88;
 HEAP32[H_BASE + 2768 >> 2] = F_BASE_vi + 480;
 HEAP32[H_BASE + 2772 >> 2] = F_BASE_vi + 500;
 HEAP32[H_BASE + 2776 >> 2] = F_BASE_vi + 394;
 HEAP32[H_BASE + 2792 >> 2] = F_BASE_vi + 286;
 HEAP32[H_BASE + 2796 >> 2] = F_BASE_vi + 284;
 HEAP32[H_BASE + 2800 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 2804 >> 2] = F_BASE_vii + 100;
 HEAP32[H_BASE + 2808 >> 2] = F_BASE_vi + 190;
 HEAP32[H_BASE + 2812 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 2816 >> 2] = F_BASE_vi + 260;
 HEAP32[H_BASE + 2832 >> 2] = F_BASE_vi + 502;
 HEAP32[H_BASE + 2836 >> 2] = F_BASE_vi + 520;
 HEAP32[H_BASE + 2840 >> 2] = F_BASE_ii + 64;
 HEAP32[H_BASE + 2844 >> 2] = F_BASE_vii + 74;
 HEAP32[H_BASE + 2848 >> 2] = F_BASE_vi + 172;
 HEAP32[H_BASE + 2852 >> 2] = F_BASE_vi + 510;
 HEAP32[H_BASE + 2856 >> 2] = F_BASE_vi + 294;
 HEAP32[H_BASE + 2872 >> 2] = F_BASE_vi + 388;
 HEAP32[H_BASE + 2876 >> 2] = F_BASE_vi + 242;
 HEAP32[H_BASE + 2880 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 2884 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 2888 >> 2] = F_BASE_vii + 48;
 HEAP32[H_BASE + 2892 >> 2] = F_BASE_vi + 68;
 HEAP32[H_BASE + 2896 >> 2] = F_BASE_viiiiii + 2;
 HEAP32[H_BASE + 2900 >> 2] = F_BASE_viiii + 32;
 HEAP32[H_BASE + 2904 >> 2] = F_BASE_viiii + 8;
 HEAP32[H_BASE + 2908 >> 2] = F_BASE_viiii + 18;
 HEAP32[H_BASE + 2912 >> 2] = F_BASE_viiii + 24;
 HEAP32[H_BASE + 2916 >> 2] = F_BASE_viiiiiiiiiiii + 2;
 HEAP32[H_BASE + 2920 >> 2] = F_BASE_viiii + 20;
 HEAP32[H_BASE + 2924 >> 2] = F_BASE_viiii + 26;
 HEAP32[H_BASE + 2928 >> 2] = F_BASE_viiii + 36;
 HEAP32[H_BASE + 2932 >> 2] = F_BASE_viiii + 14;
 HEAP32[H_BASE + 2936 >> 2] = F_BASE_viiii + 30;
 HEAP32[H_BASE + 2940 >> 2] = F_BASE_viiii + 22;
 HEAP32[H_BASE + 2944 >> 2] = F_BASE_viiii + 28;
 HEAP32[H_BASE + 2948 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 2952 >> 2] = F_BASE_viiii + 6;
 HEAP32[H_BASE + 2956 >> 2] = F_BASE_viiii + 34;
 HEAP32[H_BASE + 2960 >> 2] = F_BASE_viiii + 12;
 HEAP32[H_BASE + 2964 >> 2] = F_BASE_viiii + 16;
 HEAP32[H_BASE + 2968 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 2972 >> 2] = F_BASE_viiii + 10;
 HEAP32[H_BASE + 2976 >> 2] = F_BASE_viii + 6;
}
function __ZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS_22IDBObjectStoreMetadataERNS_6IDBKeyERKN3WTF6VectorIxLj0ENS6_15CrashOnOverflowEEERKNS7_INS7_INS6_6RefPtrIS4_EELj0ES8_EELj0ES8_EENSt3__18functionIFvNS6_10PassRefPtrINS_16IDBDatabaseErrorEEEEEE(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 i11 = i11 | 0;
 i12 = i12 | 0;
 var i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 288 | 0;
 i14 = i13 | 0;
 i15 = i13 + 8 | 0;
 i16 = i13 + 32 | 0;
 i17 = i13 + 56 | 0;
 i18 = i13 + 80 | 0;
 i19 = i13 + 104 | 0;
 i20 = i13 + 120 | 0;
 i21 = i13 + 128 | 0;
 i22 = i13 + 136 | 0;
 i23 = i13 + 160 | 0;
 i24 = i13 + 184 | 0;
 i25 = i13 + 208 | 0;
 i26 = i13 + 240 | 0;
 i27 = i13 + 264 | 0;
 i28 = HEAP32[i1 + 20 >> 2] | 0;
 i29 = HEAP32[i1 + 12 >> 2] | 0;
 i30 = _i64Add(~0, ~i2, i2, i3) | 0;
 i31 = tempRet0;
 i32 = (i30 >>> 22 | i31 << 10) ^ i30;
 i30 = (i31 >>> 22 | 0 << 10) ^ i31;
 i31 = _i64Add(i32, i30, ~(i32 << 13 | 0 >>> 19), ~(i30 << 13 | i32 >>> 19)) | 0;
 i32 = tempRet0;
 i30 = ___muldi3((i31 >>> 8 | i32 << 24) ^ i31, (i32 >>> 8 | 0 << 24) ^ i32, 9, 0) | 0;
 i32 = tempRet0;
 i31 = (i30 >>> 15 | i32 << 17) ^ i30;
 i30 = (i32 >>> 15 | 0 << 17) ^ i32;
 i32 = _i64Add(i31, i30, ~(i31 << 27 | 0 >>> 5), ~(i30 << 27 | i31 >>> 5)) | 0;
 i31 = (i32 >>> 31 | tempRet0 << 1) ^ i32;
 L1 : do {
  if ((i29 | 0) == 0) {
   i33 = 0;
   i34 = 1;
  } else {
   i32 = i28 & i31;
   i30 = i29 + (i32 << 4) | 0;
   i35 = i30 | 0;
   i36 = HEAP32[i35 >> 2] | 0;
   i37 = HEAP32[i35 + 4 >> 2] | 0;
   if ((i36 | 0) == (i2 | 0) & (i37 | 0) == (i3 | 0)) {
    i38 = i30;
   } else {
    i30 = (i31 >>> 23) + ~i31 | 0;
    i35 = i30 << 12 ^ i30;
    i30 = i35 >>> 7 ^ i35;
    i35 = i30 << 2 ^ i30;
    i30 = i35 >>> 20 ^ i35 | 1;
    i35 = 0;
    i39 = i32;
    i32 = i37;
    i37 = i36;
    while (1) {
     if ((i37 | 0) == 0 & (i32 | 0) == 0) {
      i33 = 0;
      i34 = 1;
      break L1;
     }
     i36 = (i35 | 0) == 0 ? i30 : i35;
     i40 = i36 + i39 & i28;
     i41 = i29 + (i40 << 4) | 0;
     i42 = i41 | 0;
     i43 = HEAP32[i42 >> 2] | 0;
     i44 = HEAP32[i42 + 4 >> 2] | 0;
     if ((i43 | 0) == (i2 | 0) & (i44 | 0) == (i3 | 0)) {
      i38 = i41;
      break;
     } else {
      i35 = i36;
      i39 = i40;
      i32 = i44;
      i37 = i43;
     }
    }
   }
   if ((i38 | 0) == 0) {
    i33 = 0;
    i34 = 1;
    break;
   }
   i37 = HEAP32[i38 + 8 >> 2] | 0;
   if ((i37 | 0) == 0) {
    i33 = 0;
    i34 = 1;
    break;
   }
   i32 = i37 | 0;
   HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + 1;
   i33 = i37;
   i34 = 0;
  }
 } while (0);
 i38 = i14 | 0;
 HEAP32[i38 >> 2] = 0;
 i29 = i1 + 8 | 0;
 do {
  if (__ZN7WebCore22IDBBackingStoreLevelDB22keyExistsInObjectStoreERNS_33IDBBackingStoreTransactionLevelDBExxRKNS_6IDBKeyERN3WTF6RefPtrINS_19IDBRecordIdentifierEEE(HEAP32[i29 >> 2] | 0, i33, i4, i5, i6, i7, i9, i14) | 0) {
   if ((HEAP32[i38 >> 2] | 0) == 0) {
    i1 = HEAP32[i12 + 16 >> 2] | 0;
    do {
     if ((i1 | 0) == 0) {
      HEAP32[i18 + 16 >> 2] = 0;
     } else {
      if ((i1 | 0) == (i12 | 0)) {
       i28 = i18;
       HEAP32[i18 + 16 >> 2] = i28;
       FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 127](i1, i28);
       break;
      } else {
       HEAP32[i18 + 16 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] & 127](i1) | 0;
       break;
      }
     }
    } while (0);
    i1 = i17 + 16 | 0;
    HEAP32[i1 >> 2] = 0;
    i28 = __Znwj(32) | 0;
    do {
     if ((i28 | 0) != 0) {
      HEAP32[i28 >> 2] = H_BASE + 2472;
      i31 = i18 + 16 | 0;
      i37 = HEAP32[i31 >> 2] | 0;
      if ((i37 | 0) == 0) {
       HEAP32[i28 + 24 >> 2] = 0;
       break;
      }
      i32 = i18;
      if ((i37 | 0) == (i32 | 0)) {
       i39 = i28 + 8 | 0;
       HEAP32[i28 + 24 >> 2] = i39;
       FUNCTION_TABLE_vii[HEAP32[(HEAP32[i18 >> 2] | 0) + 12 >> 2] & 127](i32, i39);
       break;
      } else {
       HEAP32[i28 + 24 >> 2] = i37;
       HEAP32[i31 >> 2] = 0;
       break;
      }
     }
    } while (0);
    HEAP32[i1 >> 2] = i28;
    __ZN3WTF16callOnMainThreadENSt3__18functionIFvvEEE(i17);
    i31 = HEAP32[i1 >> 2] | 0;
    do {
     if ((i31 | 0) == (i17 | 0)) {
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i31 >> 2] | 0) + 16 >> 2] & 1023](i31);
     } else {
      if ((i31 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i31 >> 2] | 0) + 20 >> 2] & 1023](i31);
     }
    } while (0);
    i31 = HEAP32[i18 + 16 >> 2] | 0;
    if ((i31 | 0) == (i18 | 0)) {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i31 >> 2] | 0) + 16 >> 2] & 1023](i31);
     break;
    }
    if ((i31 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i31 >> 2] | 0) + 20 >> 2] & 1023](i31);
    break;
   }
   i31 = i19 | 0;
   HEAP32[i31 >> 2] = 0;
   HEAP32[i19 + 4 >> 2] = 0;
   i1 = i19 + 8 | 0;
   HEAP32[i1 >> 2] = 0;
   i28 = i20 | 0;
   HEAP32[i28 >> 2] = 0;
   HEAP8[i21] = 0;
   do {
    if (__ZN7WebCore22IDBBackingStoreLevelDB16makeIndexWritersExxRKNS_22IDBObjectStoreMetadataERNS_6IDBKeyEbRKN3WTF6VectorIxLj0ENS6_15CrashOnOverflowEEERKNS7_INS7_INS6_6RefPtrIS4_EELj0ES8_EELj0ES8_EERNS7_INSC_INS_21IDBIndexWriterLevelDBEEELj0ES8_EEPNS6_6StringERb(HEAP32[i29 >> 2] | 0, i2, i3, i4, i5, i8, i9, 0, i10, i11, i19, i20, i21) | 0) {
     if ((HEAP8[i21] & 1) != 0) {
      if ((HEAP32[i1 >> 2] | 0) != 0) {
       i37 = 0;
       while (1) {
        __ZNK7WebCore21IDBIndexWriterLevelDB14writeIndexKeysEPKNS_19IDBRecordIdentifierERNS_22IDBBackingStoreLevelDBERNS_33IDBBackingStoreTransactionLevelDBExx(HEAP32[(HEAP32[i31 >> 2] | 0) + (i37 << 2) >> 2] | 0, HEAP32[i38 >> 2] | 0, HEAP32[i29 >> 2] | 0, i33, i4, i5, i6, i7);
        i37 = i37 + 1 | 0;
        if (i37 >>> 0 >= (HEAP32[i1 >> 2] | 0) >>> 0) {
         break;
        }
       }
      }
      i37 = HEAP32[i12 + 16 >> 2] | 0;
      do {
       if ((i37 | 0) == 0) {
        HEAP32[i27 + 16 >> 2] = 0;
       } else {
        i39 = i12;
        if ((i37 | 0) == (i39 | 0)) {
         i32 = i27;
         HEAP32[i27 + 16 >> 2] = i32;
         FUNCTION_TABLE_vii[HEAP32[(HEAP32[i12 >> 2] | 0) + 12 >> 2] & 127](i39, i32);
         break;
        } else {
         HEAP32[i27 + 16 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i37 >> 2] | 0) + 8 >> 2] & 127](i37) | 0;
         break;
        }
       }
      } while (0);
      i37 = i26 + 16 | 0;
      HEAP32[i37 >> 2] = 0;
      i32 = __Znwj(32) | 0;
      do {
       if ((i32 | 0) != 0) {
        HEAP32[i32 >> 2] = H_BASE + 2352;
        i39 = i27 + 16 | 0;
        i35 = HEAP32[i39 >> 2] | 0;
        if ((i35 | 0) == 0) {
         HEAP32[i32 + 24 >> 2] = 0;
         break;
        }
        i30 = i27;
        if ((i35 | 0) == (i30 | 0)) {
         i43 = i32 + 8 | 0;
         HEAP32[i32 + 24 >> 2] = i43;
         FUNCTION_TABLE_vii[HEAP32[(HEAP32[i27 >> 2] | 0) + 12 >> 2] & 127](i30, i43);
         break;
        } else {
         HEAP32[i32 + 24 >> 2] = i35;
         HEAP32[i39 >> 2] = 0;
         break;
        }
       }
      } while (0);
      HEAP32[i37 >> 2] = i32;
      __ZN3WTF16callOnMainThreadENSt3__18functionIFvvEEE(i26);
      i39 = HEAP32[i37 >> 2] | 0;
      do {
       if ((i39 | 0) == (i26 | 0)) {
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i39 >> 2] | 0) + 16 >> 2] & 1023](i39);
       } else {
        if ((i39 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i39 >> 2] | 0) + 20 >> 2] & 1023](i39);
       }
      } while (0);
      i39 = HEAP32[i27 + 16 >> 2] | 0;
      if ((i39 | 0) == (i27 | 0)) {
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i39 >> 2] | 0) + 16 >> 2] & 1023](i39);
       break;
      }
      if ((i39 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i39 >> 2] | 0) + 20 >> 2] & 1023](i39);
      break;
     }
     i39 = HEAP32[i12 + 16 >> 2] | 0;
     do {
      if ((i39 | 0) == 0) {
       HEAP32[i25 + 16 >> 2] = 0;
      } else {
       i37 = i12;
       if ((i39 | 0) == (i37 | 0)) {
        i32 = i25;
        HEAP32[i25 + 16 >> 2] = i32;
        FUNCTION_TABLE_vii[HEAP32[(HEAP32[i12 >> 2] | 0) + 12 >> 2] & 127](i37, i32);
        break;
       } else {
        HEAP32[i25 + 16 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i39 >> 2] | 0) + 8 >> 2] & 127](i39) | 0;
        break;
       }
      }
     } while (0);
     i39 = i25 + 24 | 0;
     i32 = HEAP32[i28 >> 2] | 0;
     HEAP32[i39 >> 2] = i32;
     if ((i32 | 0) != 0) {
      i37 = i32 | 0;
      HEAP32[i37 >> 2] = (HEAP32[i37 >> 2] | 0) + 2;
     }
     i37 = i24 + 16 | 0;
     HEAP32[i37 >> 2] = 0;
     i32 = __Znwj(40) | 0;
     if ((i32 | 0) != 0) {
      HEAP32[i32 >> 2] = H_BASE + 2392;
      i35 = i32 + 8 | 0;
      i43 = i25 + 16 | 0;
      i30 = HEAP32[i43 >> 2] | 0;
      do {
       if ((i30 | 0) == 0) {
        HEAP32[i32 + 24 >> 2] = 0;
       } else {
        i44 = i25;
        if ((i30 | 0) == (i44 | 0)) {
         i40 = i35;
         HEAP32[i32 + 24 >> 2] = i40;
         FUNCTION_TABLE_vii[HEAP32[(HEAP32[i25 >> 2] | 0) + 12 >> 2] & 127](i44, i40);
         break;
        } else {
         HEAP32[i32 + 24 >> 2] = i30;
         HEAP32[i43 >> 2] = 0;
         break;
        }
       }
      } while (0);
      i43 = HEAP32[i39 >> 2] | 0;
      HEAP32[i39 >> 2] = 0;
      HEAP32[i32 + 32 >> 2] = i43;
     }
     HEAP32[i37 >> 2] = i32;
     __ZN3WTF16callOnMainThreadENSt3__18functionIFvvEEE(i24);
     i43 = HEAP32[i37 >> 2] | 0;
     do {
      if ((i43 | 0) == (i24 | 0)) {
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i43 >> 2] | 0) + 16 >> 2] & 1023](i43);
      } else {
       if ((i43 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i43 >> 2] | 0) + 20 >> 2] & 1023](i43);
      }
     } while (0);
     i43 = HEAP32[i39 >> 2] | 0;
     do {
      if ((i43 | 0) != 0) {
       i37 = i43 | 0;
       i32 = (HEAP32[i37 >> 2] | 0) - 2 | 0;
       if ((i32 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i43);
        break;
       } else {
        HEAP32[i37 >> 2] = i32;
        break;
       }
      }
     } while (0);
     i43 = HEAP32[i25 + 16 >> 2] | 0;
     if ((i43 | 0) == (i25 | 0)) {
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i43 >> 2] | 0) + 16 >> 2] & 1023](i43);
      break;
     }
     if ((i43 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i43 >> 2] | 0) + 20 >> 2] & 1023](i43);
    } else {
     i43 = HEAP32[i12 + 16 >> 2] | 0;
     do {
      if ((i43 | 0) == 0) {
       HEAP32[i23 + 16 >> 2] = 0;
      } else {
       i39 = i12;
       if ((i43 | 0) == (i39 | 0)) {
        i32 = i23;
        HEAP32[i23 + 16 >> 2] = i32;
        FUNCTION_TABLE_vii[HEAP32[(HEAP32[i12 >> 2] | 0) + 12 >> 2] & 127](i39, i32);
        break;
       } else {
        HEAP32[i23 + 16 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i43 >> 2] | 0) + 8 >> 2] & 127](i43) | 0;
        break;
       }
      }
     } while (0);
     i43 = i22 + 16 | 0;
     HEAP32[i43 >> 2] = 0;
     i32 = __Znwj(32) | 0;
     do {
      if ((i32 | 0) != 0) {
       HEAP32[i32 >> 2] = H_BASE + 2432;
       i39 = i23 + 16 | 0;
       i37 = HEAP32[i39 >> 2] | 0;
       if ((i37 | 0) == 0) {
        HEAP32[i32 + 24 >> 2] = 0;
        break;
       }
       i30 = i23;
       if ((i37 | 0) == (i30 | 0)) {
        i35 = i32 + 8 | 0;
        HEAP32[i32 + 24 >> 2] = i35;
        FUNCTION_TABLE_vii[HEAP32[(HEAP32[i23 >> 2] | 0) + 12 >> 2] & 127](i30, i35);
        break;
       } else {
        HEAP32[i32 + 24 >> 2] = i37;
        HEAP32[i39 >> 2] = 0;
        break;
       }
      }
     } while (0);
     HEAP32[i43 >> 2] = i32;
     __ZN3WTF16callOnMainThreadENSt3__18functionIFvvEEE(i22);
     i39 = HEAP32[i43 >> 2] | 0;
     do {
      if ((i39 | 0) == (i22 | 0)) {
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i39 >> 2] | 0) + 16 >> 2] & 1023](i39);
      } else {
       if ((i39 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i39 >> 2] | 0) + 20 >> 2] & 1023](i39);
      }
     } while (0);
     i39 = HEAP32[i23 + 16 >> 2] | 0;
     if ((i39 | 0) == (i23 | 0)) {
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i39 >> 2] | 0) + 16 >> 2] & 1023](i39);
      break;
     }
     if ((i39 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i39 >> 2] | 0) + 20 >> 2] & 1023](i39);
    }
   } while (0);
   i1 = HEAP32[i28 >> 2] | 0;
   do {
    if ((i1 | 0) != 0) {
     i31 = i1 | 0;
     i39 = (HEAP32[i31 >> 2] | 0) - 2 | 0;
     if ((i39 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i1);
      break;
     } else {
      HEAP32[i31 >> 2] = i39;
      break;
     }
    }
   } while (0);
   __ZN3WTF6VectorINS_6RefPtrIN7WebCore21IDBIndexWriterLevelDBEEELj0ENS_15CrashOnOverflowEED1Ev(i19);
  } else {
   i1 = HEAP32[i12 + 16 >> 2] | 0;
   do {
    if ((i1 | 0) == 0) {
     HEAP32[i16 + 16 >> 2] = 0;
    } else {
     i28 = i12;
     if ((i1 | 0) == (i28 | 0)) {
      i39 = i16;
      HEAP32[i16 + 16 >> 2] = i39;
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i12 >> 2] | 0) + 12 >> 2] & 127](i28, i39);
      break;
     } else {
      HEAP32[i16 + 16 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] & 127](i1) | 0;
      break;
     }
    }
   } while (0);
   i1 = i15 + 16 | 0;
   HEAP32[i1 >> 2] = 0;
   i39 = __Znwj(32) | 0;
   do {
    if ((i39 | 0) != 0) {
     HEAP32[i39 >> 2] = H_BASE + 2512;
     i28 = i16 + 16 | 0;
     i31 = HEAP32[i28 >> 2] | 0;
     if ((i31 | 0) == 0) {
      HEAP32[i39 + 24 >> 2] = 0;
      break;
     }
     i43 = i16;
     if ((i31 | 0) == (i43 | 0)) {
      i32 = i39 + 8 | 0;
      HEAP32[i39 + 24 >> 2] = i32;
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i16 >> 2] | 0) + 12 >> 2] & 127](i43, i32);
      break;
     } else {
      HEAP32[i39 + 24 >> 2] = i31;
      HEAP32[i28 >> 2] = 0;
      break;
     }
    }
   } while (0);
   HEAP32[i1 >> 2] = i39;
   __ZN3WTF16callOnMainThreadENSt3__18functionIFvvEEE(i15);
   i28 = HEAP32[i1 >> 2] | 0;
   do {
    if ((i28 | 0) == (i15 | 0)) {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i28 >> 2] | 0) + 16 >> 2] & 1023](i28);
    } else {
     if ((i28 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i28 >> 2] | 0) + 20 >> 2] & 1023](i28);
    }
   } while (0);
   i28 = HEAP32[i16 + 16 >> 2] | 0;
   if ((i28 | 0) == (i16 | 0)) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i28 >> 2] | 0) + 16 >> 2] & 1023](i28);
    break;
   }
   if ((i28 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i28 >> 2] | 0) + 20 >> 2] & 1023](i28);
  }
 } while (0);
 i16 = HEAP32[i38 >> 2] | 0;
 do {
  if ((i16 | 0) != 0) {
   i38 = i16 | 0;
   i15 = i16 | 0;
   i12 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) != 0) {
    HEAP32[i15 >> 2] = i12;
    break;
   }
   i12 = i38 + 12 | 0;
   if ((HEAP32[i12 >> 2] | 0) != 0) {
    HEAP32[i12 >> 2] = 0;
   }
   i12 = i38 + 4 | 0;
   i15 = HEAP32[i12 >> 2] | 0;
   if ((i15 | 0) != 0) {
    HEAP32[i12 >> 2] = 0;
    HEAP32[i38 + 8 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i15);
   }
   __ZN3WTF8fastFreeEPv(i16);
  }
 } while (0);
 if (i34) {
  STACKTOP = i13;
  return;
 }
 i34 = i33 | 0;
 i16 = (HEAP32[i34 >> 2] | 0) - 1 | 0;
 if ((i16 | 0) == 0) {
  __ZN7WebCore33IDBBackingStoreTransactionLevelDBD1Ev(i33);
  __ZN3WTF8fastFreeEPv(i33);
  STACKTOP = i13;
  return;
 } else {
  HEAP32[i34 >> 2] = i16;
  STACKTOP = i13;
  return;
 }
}
function __ZN7WebCore26IDBServerConnectionLevelDB10openCursorERNS_21IDBTransactionBackendERKNS_19OpenCursorOperationENSt3__18functionIFvN3WTF10PassRefPtrINS_16IDBDatabaseErrorEEEEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 160 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 56 | 0;
 i12 = i5 + 80 | 0;
 i13 = i5 + 88 | 0;
 i14 = i5 + 96 | 0;
 i15 = i5 + 104 | 0;
 i16 = i5 + 112 | 0;
 i17 = i5 + 136 | 0;
 i18 = i2 + 184 | 0;
 i19 = HEAP32[i18 >> 2] | 0;
 i20 = HEAP32[i18 + 4 >> 2] | 0;
 i18 = HEAP32[i1 + 20 >> 2] | 0;
 i21 = HEAP32[i1 + 12 >> 2] | 0;
 i22 = _i64Add(i19, i20, ~0, ~i19) | 0;
 i23 = tempRet0;
 i24 = (i22 >>> 22 | i23 << 10) ^ i22;
 i22 = (i23 >>> 22 | 0 << 10) ^ i23;
 i23 = _i64Add(i24, i22, ~(i24 << 13 | 0 >>> 19), ~(i22 << 13 | i24 >>> 19)) | 0;
 i24 = tempRet0;
 i22 = ___muldi3((i23 >>> 8 | i24 << 24) ^ i23, (i24 >>> 8 | 0 << 24) ^ i24, 9, 0) | 0;
 i24 = tempRet0;
 i23 = (i22 >>> 15 | i24 << 17) ^ i22;
 i22 = (i24 >>> 15 | 0 << 17) ^ i24;
 i24 = _i64Add(i23, i22, ~(i23 << 27 | 0 >>> 5), ~(i22 << 27 | i23 >>> 5)) | 0;
 i23 = (i24 >>> 31 | tempRet0 << 1) ^ i24;
 L1 : do {
  if ((i21 | 0) == 0) {
   i25 = 0;
  } else {
   i24 = i23 & i18;
   i22 = i21 + (i24 << 4) | 0;
   i26 = i22 | 0;
   i27 = HEAP32[i26 >> 2] | 0;
   i28 = HEAP32[i26 + 4 >> 2] | 0;
   if ((i27 | 0) == (i19 | 0) & (i28 | 0) == (i20 | 0)) {
    i29 = i22;
   } else {
    i22 = (i23 >>> 23) + ~i23 | 0;
    i26 = i22 << 12 ^ i22;
    i22 = i26 >>> 7 ^ i26;
    i26 = i22 << 2 ^ i22;
    i22 = i26 >>> 20 ^ i26 | 1;
    i26 = 0;
    i30 = i24;
    i24 = i28;
    i28 = i27;
    while (1) {
     if ((i28 | 0) == 0 & (i24 | 0) == 0) {
      i25 = 0;
      break L1;
     }
     i27 = (i26 | 0) == 0 ? i22 : i26;
     i31 = i27 + i30 & i18;
     i32 = i21 + (i31 << 4) | 0;
     i33 = i32 | 0;
     i34 = HEAP32[i33 >> 2] | 0;
     i35 = HEAP32[i33 + 4 >> 2] | 0;
     if ((i34 | 0) == (i19 | 0) & (i35 | 0) == (i20 | 0)) {
      i29 = i32;
      break;
     } else {
      i26 = i27;
      i30 = i31;
      i24 = i35;
      i28 = i34;
     }
    }
   }
   if ((i29 | 0) == 0) {
    i25 = 0;
    break;
   }
   i25 = HEAP32[i29 + 8 >> 2] | 0;
  }
 } while (0);
 i29 = i3 + 44 | 0;
 if ((HEAP32[i29 >> 2] | 0) == 1) {
  i20 = i2 + 160 | 0;
  HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
 }
 i20 = i1 + 56 | 0;
 i19 = HEAP32[i20 >> 2] | 0;
 i21 = HEAP32[i20 + 4 >> 2] | 0;
 i18 = _i64Add(i19, i21, 1, 0) | 0;
 HEAP32[i20 >> 2] = i18;
 HEAP32[i20 + 4 >> 2] = tempRet0;
 i20 = i3 + 24 | 0;
 i18 = HEAP32[i20 >> 2] | 0;
 i23 = HEAP32[i20 + 4 >> 2] | 0;
 do {
  if ((i18 | 0) == (-1 | 0) & (i23 | 0) == (-1 | 0)) {
   i20 = HEAP32[i1 + 8 >> 2] | 0;
   i28 = (HEAP32[i2 + 40 >> 2] | 0) + 16 | 0;
   i24 = i3 + 16 | 0;
   FUNCTION_TABLE_viiiiiiiiiii[HEAP32[(HEAP32[i20 >> 2] | 0) + 12 >> 2] & 1](i6, i20, i19, i21, i25, HEAP32[i28 >> 2] | 0, HEAP32[i28 + 4 >> 2] | 0, HEAP32[i24 >> 2] | 0, HEAP32[i24 + 4 >> 2] | 0, HEAP32[i3 + 32 >> 2] | 0, HEAP32[i3 + 36 >> 2] | 0);
   i24 = i6 | 0;
   i28 = HEAP32[i24 >> 2] | 0;
   HEAP32[i24 >> 2] = 0;
   i36 = i28;
  } else {
   i28 = HEAP32[i1 + 8 >> 2] | 0;
   i24 = HEAP32[i28 >> 2] | 0;
   if ((HEAP32[i3 + 40 >> 2] | 0) == 1) {
    i20 = (HEAP32[i2 + 40 >> 2] | 0) + 16 | 0;
    i30 = i3 + 16 | 0;
    FUNCTION_TABLE_viiiiiiiiiiiii[HEAP32[i24 + 16 >> 2] & 1](i7, i28, i19, i21, i25, HEAP32[i20 >> 2] | 0, HEAP32[i20 + 4 >> 2] | 0, HEAP32[i30 >> 2] | 0, HEAP32[i30 + 4 >> 2] | 0, i18, i23, HEAP32[i3 + 32 >> 2] | 0, HEAP32[i3 + 36 >> 2] | 0);
    i30 = i7 | 0;
    i20 = HEAP32[i30 >> 2] | 0;
    HEAP32[i30 >> 2] = 0;
    i36 = i20;
    break;
   } else {
    i20 = (HEAP32[i2 + 40 >> 2] | 0) + 16 | 0;
    i30 = i3 + 16 | 0;
    FUNCTION_TABLE_viiiiiiiiiiiii[HEAP32[i24 + 20 >> 2] & 1](i8, i28, i19, i21, i25, HEAP32[i20 >> 2] | 0, HEAP32[i20 + 4 >> 2] | 0, HEAP32[i30 >> 2] | 0, HEAP32[i30 + 4 >> 2] | 0, i18, i23, HEAP32[i3 + 32 >> 2] | 0, HEAP32[i3 + 36 >> 2] | 0);
    i30 = i8 | 0;
    i20 = HEAP32[i30 >> 2] | 0;
    HEAP32[i30 >> 2] = 0;
    i36 = i20;
    break;
   }
  }
 } while (0);
 i8 = (i36 | 0) == 0;
 do {
  if (i8) {
   i23 = HEAP32[i3 + 48 >> 2] | 0;
   i18 = HEAP32[(HEAP32[i23 >> 2] | 0) + 24 >> 2] | 0;
   i25 = i9 | 0;
   HEAP32[i25 >> 2] = 0;
   FUNCTION_TABLE_vii[i18 & 127](i23, i9);
   i23 = HEAP32[i25 >> 2] | 0;
   do {
    if ((i23 | 0) != 0) {
     i25 = i23 | 0;
     i18 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
     if ((i18 | 0) == 0) {
      __ZN7WebCore12SharedBufferD1Ev(i23);
      __ZN3WTF8fastFreeEPv(i23);
      break;
     } else {
      HEAP32[i25 >> 2] = i18;
      break;
     }
    }
   } while (0);
   i23 = HEAP32[i4 + 16 >> 2] | 0;
   do {
    if ((i23 | 0) == 0) {
     HEAP32[i11 + 16 >> 2] = 0;
    } else {
     if ((i23 | 0) == (i4 | 0)) {
      i18 = i11;
      HEAP32[i11 + 16 >> 2] = i18;
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i23 >> 2] | 0) + 12 >> 2] & 127](i23, i18);
      break;
     } else {
      HEAP32[i11 + 16 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i23 >> 2] | 0) + 8 >> 2] & 127](i23) | 0;
      break;
     }
    }
   } while (0);
   i23 = i10 + 16 | 0;
   HEAP32[i23 >> 2] = 0;
   i18 = __Znwj(32) | 0;
   do {
    if ((i18 | 0) != 0) {
     HEAP32[i18 >> 2] = H_BASE + 2832;
     i25 = i11 + 16 | 0;
     i7 = HEAP32[i25 >> 2] | 0;
     if ((i7 | 0) == 0) {
      HEAP32[i18 + 24 >> 2] = 0;
      break;
     }
     i1 = i11;
     if ((i7 | 0) == (i1 | 0)) {
      i6 = i18 + 8 | 0;
      HEAP32[i18 + 24 >> 2] = i6;
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i11 >> 2] | 0) + 12 >> 2] & 127](i1, i6);
      break;
     } else {
      HEAP32[i18 + 24 >> 2] = i7;
      HEAP32[i25 >> 2] = 0;
      break;
     }
    }
   } while (0);
   HEAP32[i23 >> 2] = i18;
   __ZN3WTF16callOnMainThreadENSt3__18functionIFvvEEE(i10);
   i25 = HEAP32[i23 >> 2] | 0;
   do {
    if ((i25 | 0) == (i10 | 0)) {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i25 >> 2] | 0) + 16 >> 2] & 1023](i25);
    } else {
     if ((i25 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i25 >> 2] | 0) + 20 >> 2] & 1023](i25);
    }
   } while (0);
   i25 = HEAP32[i11 + 16 >> 2] | 0;
   if ((i25 | 0) == (i11 | 0)) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i25 >> 2] | 0) + 16 >> 2] & 1023](i25);
    break;
   }
   if ((i25 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i25 >> 2] | 0) + 20 >> 2] & 1023](i25);
  } else {
   i25 = HEAP32[i29 >> 2] | 0;
   i23 = HEAP32[i3 + 40 >> 2] | 0;
   i18 = i3 + 16 | 0;
   i7 = HEAP32[i18 >> 2] | 0;
   i6 = HEAP32[i18 + 4 >> 2] | 0;
   i18 = __ZN3WTF10fastMallocEj(56) | 0;
   i1 = i18;
   __ZN7WebCore16IDBCursorBackendC1ExNS_9IndexedDB10CursorTypeENS_18IDBDatabaseBackend8TaskTypeERNS_21IDBTransactionBackendEx(i1, i19, i21, i23, i25, i2, i7, i6);
   i6 = HEAP32[i3 + 48 >> 2] | 0;
   i7 = HEAP32[(HEAP32[i6 >> 2] | 0) + 16 >> 2] | 0;
   i25 = i12 | 0;
   HEAP32[i25 >> 2] = i1;
   i23 = (i18 | 0) == 0;
   if (!i23) {
    i20 = i18;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
   }
   i20 = HEAP32[i18 + 40 >> 2] | 0;
   i30 = i13 | 0;
   HEAP32[i30 >> 2] = i20;
   if ((i20 | 0) != 0) {
    i28 = i20 | 0;
    HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 1;
   }
   i28 = HEAP32[i18 + 44 >> 2] | 0;
   i20 = i14 | 0;
   HEAP32[i20 >> 2] = i28;
   if ((i28 | 0) != 0) {
    i24 = i28 | 0;
    HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 1;
   }
   do {
    if ((HEAP32[i18 + 8 >> 2] | 0) == 1) {
     i24 = i15 | 0;
     HEAP32[i24 >> 2] = 0;
     i37 = i24;
    } else {
     i24 = HEAP32[i18 + 48 >> 2] | 0;
     i28 = i15 | 0;
     HEAP32[i28 >> 2] = i24;
     if ((i24 | 0) == 0) {
      i37 = i28;
      break;
     }
     i26 = i24 | 0;
     HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 1;
     i37 = i28;
    }
   } while (0);
   FUNCTION_TABLE_viiiii[i7 & 1](i6, i12, i13, i14, i15);
   i28 = HEAP32[i37 >> 2] | 0;
   do {
    if ((i28 | 0) != 0) {
     i26 = i28 | 0;
     i24 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
     if ((i24 | 0) == 0) {
      __ZN7WebCore12SharedBufferD1Ev(i28);
      __ZN3WTF8fastFreeEPv(i28);
      break;
     } else {
      HEAP32[i26 >> 2] = i24;
      break;
     }
    }
   } while (0);
   i28 = HEAP32[i20 >> 2] | 0;
   do {
    if ((i28 | 0) != 0) {
     i6 = i28 | 0;
     i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
     if ((i7 | 0) == 0) {
      __ZN7WebCore6IDBKeyD1Ev(i28);
      __ZN3WTF8fastFreeEPv(i28);
      break;
     } else {
      HEAP32[i6 >> 2] = i7;
      break;
     }
    }
   } while (0);
   i28 = HEAP32[i30 >> 2] | 0;
   do {
    if ((i28 | 0) != 0) {
     i20 = i28 | 0;
     i7 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
     if ((i7 | 0) == 0) {
      __ZN7WebCore6IDBKeyD1Ev(i28);
      __ZN3WTF8fastFreeEPv(i28);
      break;
     } else {
      HEAP32[i20 >> 2] = i7;
      break;
     }
    }
   } while (0);
   i28 = HEAP32[i25 >> 2] | 0;
   do {
    if ((i28 | 0) != 0) {
     i30 = i28 | 0;
     i7 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
     if ((i7 | 0) == 0) {
      __ZN7WebCore16IDBCursorBackendD1Ev(i28);
      __ZN3WTF8fastFreeEPv(i28);
      break;
     } else {
      HEAP32[i30 >> 2] = i7;
      break;
     }
    }
   } while (0);
   i28 = HEAP32[i4 + 16 >> 2] | 0;
   do {
    if ((i28 | 0) == 0) {
     HEAP32[i17 + 16 >> 2] = 0;
    } else {
     i25 = i4;
     if ((i28 | 0) == (i25 | 0)) {
      i7 = i17;
      HEAP32[i17 + 16 >> 2] = i7;
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 127](i25, i7);
      break;
     } else {
      HEAP32[i17 + 16 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i28 >> 2] | 0) + 8 >> 2] & 127](i28) | 0;
      break;
     }
    }
   } while (0);
   i28 = i16 + 16 | 0;
   HEAP32[i28 >> 2] = 0;
   i7 = __Znwj(32) | 0;
   do {
    if ((i7 | 0) != 0) {
     HEAP32[i7 >> 2] = H_BASE + 2792;
     i25 = i17 + 16 | 0;
     i30 = HEAP32[i25 >> 2] | 0;
     if ((i30 | 0) == 0) {
      HEAP32[i7 + 24 >> 2] = 0;
      break;
     }
     i20 = i17;
     if ((i30 | 0) == (i20 | 0)) {
      i6 = i7 + 8 | 0;
      HEAP32[i7 + 24 >> 2] = i6;
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i17 >> 2] | 0) + 12 >> 2] & 127](i20, i6);
      break;
     } else {
      HEAP32[i7 + 24 >> 2] = i30;
      HEAP32[i25 >> 2] = 0;
      break;
     }
    }
   } while (0);
   HEAP32[i28 >> 2] = i7;
   __ZN3WTF16callOnMainThreadENSt3__18functionIFvvEEE(i16);
   i25 = HEAP32[i28 >> 2] | 0;
   do {
    if ((i25 | 0) == (i16 | 0)) {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i25 >> 2] | 0) + 16 >> 2] & 1023](i25);
    } else {
     if ((i25 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i25 >> 2] | 0) + 20 >> 2] & 1023](i25);
    }
   } while (0);
   i25 = HEAP32[i17 + 16 >> 2] | 0;
   do {
    if ((i25 | 0) == (i17 | 0)) {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i25 >> 2] | 0) + 16 >> 2] & 1023](i25);
    } else {
     if ((i25 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i25 >> 2] | 0) + 20 >> 2] & 1023](i25);
    }
   } while (0);
   if (i23) {
    break;
   }
   i25 = i18;
   i28 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
   if ((i28 | 0) == 0) {
    __ZN7WebCore16IDBCursorBackendD1Ev(i1);
    __ZN3WTF8fastFreeEPv(i18);
    break;
   } else {
    HEAP32[i25 >> 2] = i28;
    break;
   }
  }
 } while (0);
 if (i8) {
  STACKTOP = i5;
  return;
 }
 i8 = i36 + 4 | 0;
 i36 = i8 | 0;
 i17 = (HEAP32[i36 >> 2] | 0) - 1 | 0;
 if ((i17 | 0) != 0) {
  HEAP32[i36 >> 2] = i17;
  STACKTOP = i5;
  return;
 }
 i17 = i8 - 4 | 0;
 if ((i17 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 32 >> 2] & 1023](i17);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore26IDBServerConnectionLevelDB13cursorAdvanceERNS_16IDBCursorBackendERKNS_22CursorAdvanceOperationENSt3__18functionIFvvEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 160 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 40 | 0;
 i10 = i5 + 64 | 0;
 i11 = i5 + 72 | 0;
 i12 = i5 + 80 | 0;
 i13 = i5 + 88 | 0;
 i14 = i5 + 96 | 0;
 i15 = i5 + 104 | 0;
 i16 = i5 + 112 | 0;
 i17 = i5 + 136 | 0;
 i18 = i2 + 24 | 0;
 i19 = HEAP32[i18 >> 2] | 0;
 i20 = HEAP32[i18 + 4 >> 2] | 0;
 L1 : do {
  if ((i19 | 0) == 0 & (i20 | 0) == 0) {
   i21 = 0;
   i22 = 0;
  } else {
   i23 = HEAP32[i1 + 40 >> 2] | 0;
   i24 = HEAP32[i1 + 32 >> 2] | 0;
   i25 = _i64Add(i19, i20, ~0, ~i19) | 0;
   i26 = tempRet0;
   i27 = (i25 >>> 22 | i26 << 10) ^ i25;
   i25 = (i26 >>> 22 | 0 << 10) ^ i26;
   i26 = _i64Add(i27, i25, ~(i27 << 13 | 0 >>> 19), ~(i25 << 13 | i27 >>> 19)) | 0;
   i27 = tempRet0;
   i25 = ___muldi3((i26 >>> 8 | i27 << 24) ^ i26, (i27 >>> 8 | 0 << 24) ^ i27, 9, 0) | 0;
   i27 = tempRet0;
   i26 = (i25 >>> 15 | i27 << 17) ^ i25;
   i25 = (i27 >>> 15 | 0 << 17) ^ i27;
   i27 = _i64Add(i26, i25, ~(i26 << 27 | 0 >>> 5), ~(i25 << 27 | i26 >>> 5)) | 0;
   i26 = (i27 >>> 31 | tempRet0 << 1) ^ i27;
   if ((i24 | 0) == 0) {
    i21 = i20;
    i22 = i19;
    break;
   }
   i27 = i23 & i26;
   i25 = i24 + (i27 << 4) | 0;
   i28 = i25 | 0;
   i29 = HEAP32[i28 >> 2] | 0;
   i30 = HEAP32[i28 + 4 >> 2] | 0;
   if ((i29 | 0) == (i19 | 0) & (i30 | 0) == (i20 | 0)) {
    i31 = i25;
   } else {
    i25 = (i26 >>> 23) + ~i26 | 0;
    i26 = i25 << 12 ^ i25;
    i25 = i26 >>> 7 ^ i26;
    i26 = i25 << 2 ^ i25;
    i25 = i26 >>> 20 ^ i26 | 1;
    i26 = 0;
    i28 = i27;
    i27 = i30;
    i30 = i29;
    while (1) {
     if ((i30 | 0) == 0 & (i27 | 0) == 0) {
      i21 = i20;
      i22 = i19;
      break L1;
     }
     i29 = (i26 | 0) == 0 ? i25 : i26;
     i32 = i29 + i28 & i23;
     i33 = i24 + (i32 << 4) | 0;
     i34 = i33 | 0;
     i35 = HEAP32[i34 >> 2] | 0;
     i36 = HEAP32[i34 + 4 >> 2] | 0;
     if ((i35 | 0) == (i19 | 0) & (i36 | 0) == (i20 | 0)) {
      i31 = i33;
      break;
     } else {
      i26 = i29;
      i28 = i32;
      i27 = i36;
      i30 = i35;
     }
    }
   }
   if ((i31 | 0) == 0) {
    i21 = i20;
    i22 = i19;
    break;
   }
   i30 = HEAP32[i31 + 8 >> 2] | 0;
   if ((i30 | 0) == 0) {
    i21 = i20;
    i22 = i19;
    break;
   }
   if (!(FUNCTION_TABLE_iii[HEAP32[(HEAP32[i30 >> 2] | 0) + 8 >> 2] & 1](i30, HEAP32[i3 + 12 >> 2] | 0) | 0)) {
    i21 = HEAP32[i18 + 4 >> 2] | 0;
    i22 = HEAP32[i18 >> 2] | 0;
    break;
   }
   i27 = i30;
   FUNCTION_TABLE_vii[HEAP32[HEAP32[i27 >> 2] >> 2] & 127](i10, i30);
   i28 = i10 | 0;
   i26 = HEAP32[i28 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i27 >> 2] | 0) + 16 >> 2] & 127](i11, i30);
   i24 = i11 | 0;
   i23 = HEAP32[i24 >> 2] | 0;
   i25 = i30;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i25 >> 2] | 0) + 20 >> 2] & 127](i12, i30);
   i35 = i12 | 0;
   __ZN7WebCore16IDBCursorBackend16updateCursorDataEPNS_6IDBKeyES2_PNS_12SharedBufferE(i2, i26, i23, HEAP32[i35 >> 2] | 0);
   i23 = HEAP32[i35 >> 2] | 0;
   do {
    if ((i23 | 0) != 0) {
     i35 = i23 | 0;
     i26 = (HEAP32[i35 >> 2] | 0) - 1 | 0;
     if ((i26 | 0) == 0) {
      __ZN7WebCore12SharedBufferD1Ev(i23);
      __ZN3WTF8fastFreeEPv(i23);
      break;
     } else {
      HEAP32[i35 >> 2] = i26;
      break;
     }
    }
   } while (0);
   i23 = HEAP32[i24 >> 2] | 0;
   do {
    if ((i23 | 0) != 0) {
     i26 = i23 | 0;
     i35 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
     if ((i35 | 0) == 0) {
      __ZN7WebCore6IDBKeyD1Ev(i23);
      __ZN3WTF8fastFreeEPv(i23);
      break;
     } else {
      HEAP32[i26 >> 2] = i35;
      break;
     }
    }
   } while (0);
   i23 = HEAP32[i28 >> 2] | 0;
   do {
    if ((i23 | 0) != 0) {
     i24 = i23 | 0;
     i35 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
     if ((i35 | 0) == 0) {
      __ZN7WebCore6IDBKeyD1Ev(i23);
      __ZN3WTF8fastFreeEPv(i23);
      break;
     } else {
      HEAP32[i24 >> 2] = i35;
      break;
     }
    }
   } while (0);
   i23 = HEAP32[i3 + 16 >> 2] | 0;
   i28 = HEAP32[(HEAP32[i23 >> 2] | 0) + 40 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[HEAP32[i27 >> 2] >> 2] & 127](i13, i30);
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i27 >> 2] | 0) + 16 >> 2] & 127](i14, i30);
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i25 >> 2] | 0) + 20 >> 2] & 127](i15, i30);
   FUNCTION_TABLE_viiii[i28 & 63](i23, i13, i14, i15);
   i23 = HEAP32[i15 >> 2] | 0;
   do {
    if ((i23 | 0) != 0) {
     i28 = i23 | 0;
     i35 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
     if ((i35 | 0) == 0) {
      __ZN7WebCore12SharedBufferD1Ev(i23);
      __ZN3WTF8fastFreeEPv(i23);
      break;
     } else {
      HEAP32[i28 >> 2] = i35;
      break;
     }
    }
   } while (0);
   i23 = HEAP32[i14 >> 2] | 0;
   do {
    if ((i23 | 0) != 0) {
     i30 = i23 | 0;
     i25 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
     if ((i25 | 0) == 0) {
      __ZN7WebCore6IDBKeyD1Ev(i23);
      __ZN3WTF8fastFreeEPv(i23);
      break;
     } else {
      HEAP32[i30 >> 2] = i25;
      break;
     }
    }
   } while (0);
   i23 = HEAP32[i13 >> 2] | 0;
   do {
    if ((i23 | 0) != 0) {
     i25 = i23 | 0;
     i30 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
     if ((i30 | 0) == 0) {
      __ZN7WebCore6IDBKeyD1Ev(i23);
      __ZN3WTF8fastFreeEPv(i23);
      break;
     } else {
      HEAP32[i25 >> 2] = i30;
      break;
     }
    }
   } while (0);
   i23 = HEAP32[i4 + 16 >> 2] | 0;
   do {
    if ((i23 | 0) == 0) {
     HEAP32[i17 + 16 >> 2] = 0;
    } else {
     i30 = i4;
     if ((i23 | 0) == (i30 | 0)) {
      i25 = i17;
      HEAP32[i17 + 16 >> 2] = i25;
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 127](i30, i25);
      break;
     } else {
      HEAP32[i17 + 16 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i23 >> 2] | 0) + 8 >> 2] & 127](i23) | 0;
      break;
     }
    }
   } while (0);
   i23 = i16 + 16 | 0;
   HEAP32[i23 >> 2] = 0;
   i25 = __Znwj(32) | 0;
   do {
    if ((i25 | 0) != 0) {
     HEAP32[i25 >> 2] = H_BASE + 2272;
     i30 = i17 + 16 | 0;
     i27 = HEAP32[i30 >> 2] | 0;
     if ((i27 | 0) == 0) {
      HEAP32[i25 + 24 >> 2] = 0;
      break;
     }
     i35 = i17;
     if ((i27 | 0) == (i35 | 0)) {
      i28 = i25 + 8 | 0;
      HEAP32[i25 + 24 >> 2] = i28;
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i17 >> 2] | 0) + 12 >> 2] & 127](i35, i28);
      break;
     } else {
      HEAP32[i25 + 24 >> 2] = i27;
      HEAP32[i30 >> 2] = 0;
      break;
     }
    }
   } while (0);
   HEAP32[i23 >> 2] = i25;
   __ZN3WTF16callOnMainThreadENSt3__18functionIFvvEEE(i16);
   i30 = HEAP32[i23 >> 2] | 0;
   do {
    if ((i30 | 0) == (i16 | 0)) {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i30 >> 2] | 0) + 16 >> 2] & 1023](i30);
    } else {
     if ((i30 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i30 >> 2] | 0) + 20 >> 2] & 1023](i30);
    }
   } while (0);
   i30 = HEAP32[i17 + 16 >> 2] | 0;
   if ((i30 | 0) == (i17 | 0)) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i30 >> 2] | 0) + 16 >> 2] & 1023](i30);
    STACKTOP = i5;
    return;
   }
   if ((i30 | 0) == 0) {
    STACKTOP = i5;
    return;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i30 >> 2] | 0) + 20 >> 2] & 1023](i30);
   STACKTOP = i5;
   return;
  }
 } while (0);
 HEAP32[i6 >> 2] = i22;
 HEAP32[i6 + 4 >> 2] = i21;
 __ZN3WTF7HashMapIxNS_6RefPtrIN7WebCore28IDBBackingStoreCursorLevelDBEEENS_7IntHashIyEENS_10HashTraitsIxEENS7_IS4_EEE6removeERKx(i1 + 32 | 0, i6) | 0;
 __ZN7WebCore16IDBCursorBackend5clearEv(i2);
 i2 = HEAP32[i3 + 16 >> 2] | 0;
 i3 = HEAP32[(HEAP32[i2 >> 2] | 0) + 24 >> 2] | 0;
 i6 = i7 | 0;
 HEAP32[i6 >> 2] = 0;
 FUNCTION_TABLE_vii[i3 & 127](i2, i7);
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i6 = i7 | 0;
   i2 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) == 0) {
    __ZN7WebCore12SharedBufferD1Ev(i7);
    __ZN3WTF8fastFreeEPv(i7);
    break;
   } else {
    HEAP32[i6 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i7 = HEAP32[i4 + 16 >> 2] | 0;
 do {
  if ((i7 | 0) == 0) {
   HEAP32[i9 + 16 >> 2] = 0;
  } else {
   if ((i7 | 0) == (i4 | 0)) {
    i2 = i9;
    HEAP32[i9 + 16 >> 2] = i2;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i7 >> 2] | 0) + 12 >> 2] & 127](i7, i2);
    break;
   } else {
    HEAP32[i9 + 16 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 8 >> 2] & 127](i7) | 0;
    break;
   }
  }
 } while (0);
 i7 = i8 + 16 | 0;
 HEAP32[i7 >> 2] = 0;
 i4 = __Znwj(32) | 0;
 do {
  if ((i4 | 0) != 0) {
   HEAP32[i4 >> 2] = H_BASE + 2312;
   i2 = i9 + 16 | 0;
   i6 = HEAP32[i2 >> 2] | 0;
   if ((i6 | 0) == 0) {
    HEAP32[i4 + 24 >> 2] = 0;
    break;
   }
   i3 = i9;
   if ((i6 | 0) == (i3 | 0)) {
    i1 = i4 + 8 | 0;
    HEAP32[i4 + 24 >> 2] = i1;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 12 >> 2] & 127](i3, i1);
    break;
   } else {
    HEAP32[i4 + 24 >> 2] = i6;
    HEAP32[i2 >> 2] = 0;
    break;
   }
  }
 } while (0);
 HEAP32[i7 >> 2] = i4;
 __ZN3WTF16callOnMainThreadENSt3__18functionIFvvEEE(i8);
 i4 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i4 | 0) == (i8 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 16 >> 2] & 1023](i4);
  } else {
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 20 >> 2] & 1023](i4);
  }
 } while (0);
 i4 = HEAP32[i9 + 16 >> 2] | 0;
 if ((i4 | 0) == (i9 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 16 >> 2] & 1023](i4);
  STACKTOP = i5;
  return;
 }
 if ((i4 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 20 >> 2] & 1023](i4);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore26IDBServerConnectionLevelDB11deleteRangeERNS_21IDBTransactionBackendERKNS_20DeleteRangeOperationENSt3__18functionIFvN3WTF10PassRefPtrINS_16IDBDatabaseErrorEEEEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 120 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 48 | 0;
 i11 = i5 + 72 | 0;
 i12 = i5 + 96 | 0;
 i13 = i2 + 184 | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 i15 = HEAP32[i13 + 4 >> 2] | 0;
 i13 = HEAP32[i1 + 20 >> 2] | 0;
 i16 = HEAP32[i1 + 12 >> 2] | 0;
 i17 = _i64Add(i14, i15, ~0, ~i14) | 0;
 i18 = tempRet0;
 i19 = (i17 >>> 22 | i18 << 10) ^ i17;
 i17 = (i18 >>> 22 | 0 << 10) ^ i18;
 i18 = _i64Add(i19, i17, ~(i19 << 13 | 0 >>> 19), ~(i17 << 13 | i19 >>> 19)) | 0;
 i19 = tempRet0;
 i17 = ___muldi3((i18 >>> 8 | i19 << 24) ^ i18, (i19 >>> 8 | 0 << 24) ^ i19, 9, 0) | 0;
 i19 = tempRet0;
 i18 = (i17 >>> 15 | i19 << 17) ^ i17;
 i17 = (i19 >>> 15 | 0 << 17) ^ i19;
 i19 = _i64Add(i18, i17, ~(i18 << 27 | 0 >>> 5), ~(i17 << 27 | i18 >>> 5)) | 0;
 i18 = (i19 >>> 31 | tempRet0 << 1) ^ i19;
 L1 : do {
  if ((i16 | 0) == 0) {
   i20 = 0;
  } else {
   i19 = i18 & i13;
   i17 = i16 + (i19 << 4) | 0;
   i21 = i17 | 0;
   i22 = HEAP32[i21 >> 2] | 0;
   i23 = HEAP32[i21 + 4 >> 2] | 0;
   if ((i22 | 0) == (i14 | 0) & (i23 | 0) == (i15 | 0)) {
    i24 = i17;
   } else {
    i17 = (i18 >>> 23) + ~i18 | 0;
    i21 = i17 << 12 ^ i17;
    i17 = i21 >>> 7 ^ i21;
    i21 = i17 << 2 ^ i17;
    i17 = i21 >>> 20 ^ i21 | 1;
    i21 = 0;
    i25 = i19;
    i19 = i23;
    i23 = i22;
    while (1) {
     if ((i23 | 0) == 0 & (i19 | 0) == 0) {
      i20 = 0;
      break L1;
     }
     i22 = (i21 | 0) == 0 ? i17 : i21;
     i26 = i22 + i25 & i13;
     i27 = i16 + (i26 << 4) | 0;
     i28 = i27 | 0;
     i29 = HEAP32[i28 >> 2] | 0;
     i30 = HEAP32[i28 + 4 >> 2] | 0;
     if ((i29 | 0) == (i14 | 0) & (i30 | 0) == (i15 | 0)) {
      i24 = i27;
      break;
     } else {
      i21 = i22;
      i25 = i26;
      i19 = i30;
      i23 = i29;
     }
    }
   }
   if ((i24 | 0) == 0) {
    i20 = 0;
    break;
   }
   i20 = HEAP32[i24 + 8 >> 2] | 0;
  }
 } while (0);
 i24 = i1 + 56 | 0;
 i15 = HEAP32[i24 >> 2] | 0;
 i14 = HEAP32[i24 + 4 >> 2] | 0;
 i16 = _i64Add(i15, i14, 1, 0) | 0;
 HEAP32[i24 >> 2] = i16;
 HEAP32[i24 + 4 >> 2] = tempRet0;
 i24 = i1 + 8 | 0;
 i1 = HEAP32[i24 >> 2] | 0;
 i16 = i2 + 40 | 0;
 i2 = (HEAP32[i16 >> 2] | 0) + 16 | 0;
 i13 = i3 + 16 | 0;
 FUNCTION_TABLE_viiiiiiiiiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 1](i6, i1, i15, i14, i20, HEAP32[i2 >> 2] | 0, HEAP32[i2 + 4 >> 2] | 0, HEAP32[i13 >> 2] | 0, HEAP32[i13 + 4 >> 2] | 0, HEAP32[i3 + 24 >> 2] | 0, 0);
 i2 = i6 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i2 = (i6 | 0) == 0;
 L11 : do {
  if (i2) {
   i31 = 45;
  } else {
   i14 = i6;
   i15 = i6;
   while (1) {
    i1 = HEAP32[i24 >> 2] | 0;
    i18 = (HEAP32[i16 >> 2] | 0) + 16 | 0;
    i23 = HEAP32[i18 >> 2] | 0;
    i19 = HEAP32[i18 + 4 >> 2] | 0;
    i18 = HEAP32[i13 >> 2] | 0;
    i25 = HEAP32[i13 + 4 >> 2] | 0;
    if (!(__ZN7WebCore22IDBBackingStoreLevelDB12deleteRecordERNS_33IDBBackingStoreTransactionLevelDBExxRKNS_19IDBRecordIdentifierE(i1, i20, i23, i19, i18, i25, FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 24 >> 2] & 127](i6) | 0) | 0)) {
     break;
    }
    if (!(FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 1](i6, 0, 1) | 0)) {
     i31 = 45;
     break L11;
    }
   }
   i15 = HEAP32[i3 + 28 >> 2] | 0;
   i14 = HEAP32[(HEAP32[i15 >> 2] | 0) + 8 >> 2] | 0;
   __ZN3WTF6StringC1EPKc(i8, H_BASE + 40 | 0);
   i25 = __ZN3WTF10fastMallocEj(12) | 0;
   HEAP32[i25 >> 2] = 1;
   HEAP16[i25 + 4 >> 1] = 1201;
   i18 = i8 | 0;
   i19 = HEAP32[i18 >> 2] | 0;
   HEAP32[i25 + 8 >> 2] = i19;
   if ((i19 | 0) != 0) {
    i23 = i19 | 0;
    HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 2;
   }
   i23 = i7 | 0;
   HEAP32[i23 >> 2] = i25;
   FUNCTION_TABLE_vii[i14 & 127](i15, i7);
   i15 = HEAP32[i23 >> 2] | 0;
   do {
    if ((i15 | 0) != 0) {
     i23 = i15 | 0;
     i14 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
     if ((i14 | 0) != 0) {
      HEAP32[i23 >> 2] = i14;
      break;
     }
     i14 = HEAP32[i15 + 8 >> 2] | 0;
     do {
      if ((i14 | 0) != 0) {
       i23 = i14 | 0;
       i25 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
       if ((i25 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i14);
        break;
       } else {
        HEAP32[i23 >> 2] = i25;
        break;
       }
      }
     } while (0);
     __ZN3WTF8fastFreeEPv(i15);
    }
   } while (0);
   i15 = HEAP32[i18 >> 2] | 0;
   do {
    if ((i15 | 0) != 0) {
     i14 = i15 | 0;
     i25 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
     if ((i25 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i15);
      break;
     } else {
      HEAP32[i14 >> 2] = i25;
      break;
     }
    }
   } while (0);
   i15 = HEAP32[i4 + 16 >> 2] | 0;
   do {
    if ((i15 | 0) == 0) {
     HEAP32[i10 + 16 >> 2] = 0;
    } else {
     i18 = i4;
     if ((i15 | 0) == (i18 | 0)) {
      i25 = i10;
      HEAP32[i10 + 16 >> 2] = i25;
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 127](i18, i25);
      break;
     } else {
      HEAP32[i10 + 16 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i15 >> 2] | 0) + 8 >> 2] & 127](i15) | 0;
      break;
     }
    }
   } while (0);
   i15 = i9 + 16 | 0;
   HEAP32[i15 >> 2] = 0;
   i25 = __Znwj(32) | 0;
   do {
    if ((i25 | 0) != 0) {
     HEAP32[i25 >> 2] = H_BASE + 2592;
     i18 = i10 + 16 | 0;
     i14 = HEAP32[i18 >> 2] | 0;
     if ((i14 | 0) == 0) {
      HEAP32[i25 + 24 >> 2] = 0;
      break;
     }
     i23 = i10;
     if ((i14 | 0) == (i23 | 0)) {
      i19 = i25 + 8 | 0;
      HEAP32[i25 + 24 >> 2] = i19;
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i10 >> 2] | 0) + 12 >> 2] & 127](i23, i19);
      break;
     } else {
      HEAP32[i25 + 24 >> 2] = i14;
      HEAP32[i18 >> 2] = 0;
      break;
     }
    }
   } while (0);
   HEAP32[i15 >> 2] = i25;
   __ZN3WTF16callOnMainThreadENSt3__18functionIFvvEEE(i9);
   i18 = HEAP32[i15 >> 2] | 0;
   do {
    if ((i18 | 0) == (i9 | 0)) {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 16 >> 2] & 1023](i18);
    } else {
     if ((i18 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 20 >> 2] & 1023](i18);
    }
   } while (0);
   i18 = HEAP32[i10 + 16 >> 2] | 0;
   if ((i18 | 0) == (i10 | 0)) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 16 >> 2] & 1023](i18);
    break;
   }
   if ((i18 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 20 >> 2] & 1023](i18);
  }
 } while (0);
 do {
  if ((i31 | 0) == 45) {
   i10 = HEAP32[i3 + 28 >> 2] | 0;
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 36 >> 2] & 1023](i10);
   i10 = HEAP32[i4 + 16 >> 2] | 0;
   do {
    if ((i10 | 0) == 0) {
     HEAP32[i12 + 16 >> 2] = 0;
    } else {
     if ((i10 | 0) == (i4 | 0)) {
      i9 = i12;
      HEAP32[i12 + 16 >> 2] = i9;
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i10 >> 2] | 0) + 12 >> 2] & 127](i10, i9);
      break;
     } else {
      HEAP32[i12 + 16 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 8 >> 2] & 127](i10) | 0;
      break;
     }
    }
   } while (0);
   i10 = i11 + 16 | 0;
   HEAP32[i10 >> 2] = 0;
   i9 = __Znwj(32) | 0;
   do {
    if ((i9 | 0) != 0) {
     HEAP32[i9 >> 2] = H_BASE + 2552;
     i7 = i12 + 16 | 0;
     i8 = HEAP32[i7 >> 2] | 0;
     if ((i8 | 0) == 0) {
      HEAP32[i9 + 24 >> 2] = 0;
      break;
     }
     i20 = i12;
     if ((i8 | 0) == (i20 | 0)) {
      i13 = i9 + 8 | 0;
      HEAP32[i9 + 24 >> 2] = i13;
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i12 >> 2] | 0) + 12 >> 2] & 127](i20, i13);
      break;
     } else {
      HEAP32[i9 + 24 >> 2] = i8;
      HEAP32[i7 >> 2] = 0;
      break;
     }
    }
   } while (0);
   HEAP32[i10 >> 2] = i9;
   __ZN3WTF16callOnMainThreadENSt3__18functionIFvvEEE(i11);
   i7 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i7 | 0) == (i11 | 0)) {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 16 >> 2] & 1023](i7);
    } else {
     if ((i7 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 20 >> 2] & 1023](i7);
    }
   } while (0);
   i7 = HEAP32[i12 + 16 >> 2] | 0;
   if ((i7 | 0) == (i12 | 0)) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 16 >> 2] & 1023](i7);
    break;
   }
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 20 >> 2] & 1023](i7);
  }
 } while (0);
 if (i2) {
  STACKTOP = i5;
  return;
 }
 i2 = i6 + 4 | 0;
 i6 = i2 | 0;
 i12 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i12 | 0) != 0) {
  HEAP32[i6 >> 2] = i12;
  STACKTOP = i5;
  return;
 }
 i12 = i2 - 4 | 0;
 if ((i12 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 32 >> 2] & 1023](i12);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore26IDBServerConnectionLevelDB13cursorIterateERNS_16IDBCursorBackendERKNS_24CursorIterationOperationENSt3__18functionIFvvEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 112 | 0;
 i6 = i5 | 0;
 i7 = i5 + 24 | 0;
 i8 = i5 + 48 | 0;
 i9 = i5 + 56 | 0;
 i10 = i5 + 64 | 0;
 i11 = i5 + 72 | 0;
 i12 = i5 + 80 | 0;
 i13 = i5 + 88 | 0;
 i14 = i5 + 96 | 0;
 i15 = i5 + 104 | 0;
 i16 = i2 + 24 | 0;
 i17 = HEAP32[i16 >> 2] | 0;
 i18 = HEAP32[i16 + 4 >> 2] | 0;
 L1 : do {
  if ((i17 | 0) == 0 & (i18 | 0) == 0) {
   i19 = 0;
  } else {
   i20 = HEAP32[i1 + 40 >> 2] | 0;
   i21 = HEAP32[i1 + 32 >> 2] | 0;
   i22 = _i64Add(i17, i18, ~0, ~i17) | 0;
   i23 = tempRet0;
   i24 = (i22 >>> 22 | i23 << 10) ^ i22;
   i22 = (i23 >>> 22 | 0 << 10) ^ i23;
   i23 = _i64Add(i24, i22, ~(i24 << 13 | 0 >>> 19), ~(i22 << 13 | i24 >>> 19)) | 0;
   i24 = tempRet0;
   i22 = ___muldi3((i23 >>> 8 | i24 << 24) ^ i23, (i24 >>> 8 | 0 << 24) ^ i24, 9, 0) | 0;
   i24 = tempRet0;
   i23 = (i22 >>> 15 | i24 << 17) ^ i22;
   i22 = (i24 >>> 15 | 0 << 17) ^ i24;
   i24 = _i64Add(i23, i22, ~(i23 << 27 | 0 >>> 5), ~(i22 << 27 | i23 >>> 5)) | 0;
   i23 = (i24 >>> 31 | tempRet0 << 1) ^ i24;
   if ((i21 | 0) == 0) {
    i19 = 0;
    break;
   }
   i24 = i20 & i23;
   i22 = i21 + (i24 << 4) | 0;
   i25 = i22 | 0;
   i26 = HEAP32[i25 >> 2] | 0;
   i27 = HEAP32[i25 + 4 >> 2] | 0;
   if ((i26 | 0) == (i17 | 0) & (i27 | 0) == (i18 | 0)) {
    i28 = i22;
   } else {
    i22 = (i23 >>> 23) + ~i23 | 0;
    i23 = i22 << 12 ^ i22;
    i22 = i23 >>> 7 ^ i23;
    i23 = i22 << 2 ^ i22;
    i22 = i23 >>> 20 ^ i23 | 1;
    i23 = 0;
    i25 = i24;
    i24 = i27;
    i27 = i26;
    while (1) {
     if ((i27 | 0) == 0 & (i24 | 0) == 0) {
      i19 = 0;
      break L1;
     }
     i26 = (i23 | 0) == 0 ? i22 : i23;
     i29 = i26 + i25 & i20;
     i30 = i21 + (i29 << 4) | 0;
     i31 = i30 | 0;
     i32 = HEAP32[i31 >> 2] | 0;
     i33 = HEAP32[i31 + 4 >> 2] | 0;
     if ((i32 | 0) == (i17 | 0) & (i33 | 0) == (i18 | 0)) {
      i28 = i30;
      break;
     } else {
      i23 = i26;
      i25 = i29;
      i24 = i33;
      i27 = i32;
     }
    }
   }
   if ((i28 | 0) == 0) {
    i19 = 0;
    break;
   }
   i19 = HEAP32[i28 + 8 >> 2] | 0;
  }
 } while (0);
 i28 = HEAP32[i4 + 16 >> 2] | 0;
 do {
  if ((i28 | 0) == 0) {
   HEAP32[i7 + 16 >> 2] = 0;
  } else {
   if ((i28 | 0) == (i4 | 0)) {
    i18 = i7;
    HEAP32[i7 + 16 >> 2] = i18;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i28 >> 2] | 0) + 12 >> 2] & 127](i28, i18);
    break;
   } else {
    HEAP32[i7 + 16 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i28 >> 2] | 0) + 8 >> 2] & 127](i28) | 0;
    break;
   }
  }
 } while (0);
 i28 = i6 + 16 | 0;
 HEAP32[i28 >> 2] = 0;
 i4 = __Znwj(32) | 0;
 do {
  if ((i4 | 0) != 0) {
   HEAP32[i4 >> 2] = H_BASE + 2232;
   i18 = i7 + 16 | 0;
   i17 = HEAP32[i18 >> 2] | 0;
   if ((i17 | 0) == 0) {
    HEAP32[i4 + 24 >> 2] = 0;
    break;
   }
   i27 = i7;
   if ((i17 | 0) == (i27 | 0)) {
    i24 = i4 + 8 | 0;
    HEAP32[i4 + 24 >> 2] = i24;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i7 >> 2] | 0) + 12 >> 2] & 127](i27, i24);
    break;
   } else {
    HEAP32[i4 + 24 >> 2] = i17;
    HEAP32[i18 >> 2] = 0;
    break;
   }
  }
 } while (0);
 HEAP32[i28 >> 2] = i4;
 __ZN3WTF16callOnMainThreadENSt3__18functionIFvvEEE(i6);
 i4 = HEAP32[i28 >> 2] | 0;
 do {
  if ((i4 | 0) == (i6 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 16 >> 2] & 1023](i4);
  } else {
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 20 >> 2] & 1023](i4);
  }
 } while (0);
 i4 = HEAP32[i7 + 16 >> 2] | 0;
 do {
  if ((i4 | 0) == (i7 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 16 >> 2] & 1023](i4);
  } else {
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 20 >> 2] & 1023](i4);
  }
 } while (0);
 do {
  if ((i19 | 0) != 0) {
   if (!(FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i19 >> 2] | 0) + 4 >> 2] & 1](i19, HEAP32[i3 + 12 >> 2] | 0, 1) | 0)) {
    break;
   }
   i4 = i19;
   FUNCTION_TABLE_vii[HEAP32[HEAP32[i4 >> 2] >> 2] & 127](i10, i19);
   i7 = i10 | 0;
   i6 = HEAP32[i7 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 16 >> 2] & 127](i11, i19);
   i28 = i11 | 0;
   i18 = HEAP32[i28 >> 2] | 0;
   i17 = i19;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i17 >> 2] | 0) + 20 >> 2] & 127](i12, i19);
   i24 = i12 | 0;
   __ZN7WebCore16IDBCursorBackend16updateCursorDataEPNS_6IDBKeyES2_PNS_12SharedBufferE(i2, i6, i18, HEAP32[i24 >> 2] | 0);
   i18 = HEAP32[i24 >> 2] | 0;
   do {
    if ((i18 | 0) != 0) {
     i24 = i18 | 0;
     i6 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
     if ((i6 | 0) == 0) {
      __ZN7WebCore12SharedBufferD1Ev(i18);
      __ZN3WTF8fastFreeEPv(i18);
      break;
     } else {
      HEAP32[i24 >> 2] = i6;
      break;
     }
    }
   } while (0);
   i18 = HEAP32[i28 >> 2] | 0;
   do {
    if ((i18 | 0) != 0) {
     i6 = i18 | 0;
     i24 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
     if ((i24 | 0) == 0) {
      __ZN7WebCore6IDBKeyD1Ev(i18);
      __ZN3WTF8fastFreeEPv(i18);
      break;
     } else {
      HEAP32[i6 >> 2] = i24;
      break;
     }
    }
   } while (0);
   i18 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i18 | 0) != 0) {
     i28 = i18 | 0;
     i24 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
     if ((i24 | 0) == 0) {
      __ZN7WebCore6IDBKeyD1Ev(i18);
      __ZN3WTF8fastFreeEPv(i18);
      break;
     } else {
      HEAP32[i28 >> 2] = i24;
      break;
     }
    }
   } while (0);
   i18 = HEAP32[i3 + 16 >> 2] | 0;
   i7 = HEAP32[(HEAP32[i18 >> 2] | 0) + 40 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[HEAP32[i4 >> 2] >> 2] & 127](i13, i19);
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 16 >> 2] & 127](i14, i19);
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i17 >> 2] | 0) + 20 >> 2] & 127](i15, i19);
   FUNCTION_TABLE_viiii[i7 & 63](i18, i13, i14, i15);
   i18 = HEAP32[i15 >> 2] | 0;
   do {
    if ((i18 | 0) != 0) {
     i7 = i18 | 0;
     i24 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
     if ((i24 | 0) == 0) {
      __ZN7WebCore12SharedBufferD1Ev(i18);
      __ZN3WTF8fastFreeEPv(i18);
      break;
     } else {
      HEAP32[i7 >> 2] = i24;
      break;
     }
    }
   } while (0);
   i18 = HEAP32[i14 >> 2] | 0;
   do {
    if ((i18 | 0) != 0) {
     i17 = i18 | 0;
     i4 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
     if ((i4 | 0) == 0) {
      __ZN7WebCore6IDBKeyD1Ev(i18);
      __ZN3WTF8fastFreeEPv(i18);
      break;
     } else {
      HEAP32[i17 >> 2] = i4;
      break;
     }
    }
   } while (0);
   i18 = HEAP32[i13 >> 2] | 0;
   if ((i18 | 0) == 0) {
    STACKTOP = i5;
    return;
   }
   i4 = i18 | 0;
   i17 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i17 | 0) == 0) {
    __ZN7WebCore6IDBKeyD1Ev(i18);
    __ZN3WTF8fastFreeEPv(i18);
    STACKTOP = i5;
    return;
   } else {
    HEAP32[i4 >> 2] = i17;
    STACKTOP = i5;
    return;
   }
  }
 } while (0);
 i13 = HEAP32[i16 + 4 >> 2] | 0;
 HEAP32[i8 >> 2] = HEAP32[i16 >> 2];
 HEAP32[i8 + 4 >> 2] = i13;
 __ZN3WTF7HashMapIxNS_6RefPtrIN7WebCore28IDBBackingStoreCursorLevelDBEEENS_7IntHashIyEENS_10HashTraitsIxEENS7_IS4_EEE6removeERKx(i1 + 32 | 0, i8) | 0;
 __ZN7WebCore16IDBCursorBackend5clearEv(i2);
 i2 = HEAP32[i3 + 16 >> 2] | 0;
 i3 = HEAP32[(HEAP32[i2 >> 2] | 0) + 24 >> 2] | 0;
 i8 = i9 | 0;
 HEAP32[i8 >> 2] = 0;
 FUNCTION_TABLE_vii[i3 & 127](i2, i9);
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i8 = i9 | 0;
 i2 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) == 0) {
  __ZN7WebCore12SharedBufferD1Ev(i9);
  __ZN3WTF8fastFreeEPv(i9);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i8 >> 2] = i2;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore26IDBServerConnectionLevelDB17deleteObjectStoreERNS_21IDBTransactionBackendERKNS_26DeleteObjectStoreOperationENSt3__18functionIFvN3WTF10PassRefPtrINS_16IDBDatabaseErrorEEEEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 168 | 0;
 i6 = i5 | 0;
 i7 = i5 + 24 | 0;
 i8 = i5 + 120 | 0;
 i9 = i5 + 144 | 0;
 i10 = i2 + 184 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 i12 = HEAP32[i10 + 4 >> 2] | 0;
 i10 = HEAP32[i1 + 20 >> 2] | 0;
 i13 = HEAP32[i1 + 12 >> 2] | 0;
 i14 = _i64Add(i11, i12, ~0, ~i11) | 0;
 i15 = tempRet0;
 i16 = (i14 >>> 22 | i15 << 10) ^ i14;
 i14 = (i15 >>> 22 | 0 << 10) ^ i15;
 i15 = _i64Add(i16, i14, ~(i16 << 13 | 0 >>> 19), ~(i14 << 13 | i16 >>> 19)) | 0;
 i16 = tempRet0;
 i14 = ___muldi3((i15 >>> 8 | i16 << 24) ^ i15, (i16 >>> 8 | 0 << 24) ^ i16, 9, 0) | 0;
 i16 = tempRet0;
 i15 = (i14 >>> 15 | i16 << 17) ^ i14;
 i14 = (i16 >>> 15 | 0 << 17) ^ i16;
 i16 = _i64Add(i15, i14, ~(i15 << 27 | 0 >>> 5), ~(i14 << 27 | i15 >>> 5)) | 0;
 i15 = (i16 >>> 31 | tempRet0 << 1) ^ i16;
 L1 : do {
  if ((i13 | 0) == 0) {
   i17 = 0;
  } else {
   i16 = i15 & i10;
   i14 = i13 + (i16 << 4) | 0;
   i18 = i14 | 0;
   i19 = HEAP32[i18 >> 2] | 0;
   i20 = HEAP32[i18 + 4 >> 2] | 0;
   if ((i19 | 0) == (i11 | 0) & (i20 | 0) == (i12 | 0)) {
    i21 = i14;
   } else {
    i14 = (i15 >>> 23) + ~i15 | 0;
    i18 = i14 << 12 ^ i14;
    i14 = i18 >>> 7 ^ i18;
    i18 = i14 << 2 ^ i14;
    i14 = i18 >>> 20 ^ i18 | 1;
    i18 = 0;
    i22 = i16;
    i16 = i20;
    i20 = i19;
    while (1) {
     if ((i20 | 0) == 0 & (i16 | 0) == 0) {
      i17 = 0;
      break L1;
     }
     i19 = (i18 | 0) == 0 ? i14 : i18;
     i23 = i19 + i22 & i10;
     i24 = i13 + (i23 << 4) | 0;
     i25 = i24 | 0;
     i26 = HEAP32[i25 >> 2] | 0;
     i27 = HEAP32[i25 + 4 >> 2] | 0;
     if ((i26 | 0) == (i11 | 0) & (i27 | 0) == (i12 | 0)) {
      i21 = i24;
      break;
     } else {
      i18 = i19;
      i22 = i23;
      i16 = i27;
      i20 = i26;
     }
    }
   }
   if ((i21 | 0) == 0) {
    i17 = 0;
    break;
   }
   i17 = HEAP32[i21 + 8 >> 2] | 0;
  }
 } while (0);
 i21 = i3 + 16 | 0;
 i12 = (HEAP32[i2 + 40 >> 2] | 0) + 16 | 0;
 i2 = i3 + 24 | 0;
 i3 = __ZN7WebCore22IDBBackingStoreLevelDB17deleteObjectStoreERNS_33IDBBackingStoreTransactionLevelDBExx(HEAP32[i1 + 8 >> 2] | 0, i17, HEAP32[i12 >> 2] | 0, HEAP32[i12 + 4 >> 2] | 0, HEAP32[i2 >> 2] | 0, HEAP32[i2 + 4 >> 2] | 0) | 0;
 i2 = HEAP32[i4 + 16 >> 2] | 0;
 i12 = (i2 | 0) == 0;
 if (i3) {
  do {
   if (i12) {
    HEAP32[i9 + 16 >> 2] = 0;
   } else {
    if ((i2 | 0) == (i4 | 0)) {
     i3 = i9;
     HEAP32[i9 + 16 >> 2] = i3;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 127](i2, i3);
     break;
    } else {
     HEAP32[i9 + 16 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 127](i2) | 0;
     break;
    }
   }
  } while (0);
  i3 = i8 + 16 | 0;
  HEAP32[i3 >> 2] = 0;
  i17 = __Znwj(32) | 0;
  do {
   if ((i17 | 0) != 0) {
    HEAP32[i17 >> 2] = H_BASE + 1832;
    i1 = i9 + 16 | 0;
    i11 = HEAP32[i1 >> 2] | 0;
    if ((i11 | 0) == 0) {
     HEAP32[i17 + 24 >> 2] = 0;
     break;
    }
    i13 = i9;
    if ((i11 | 0) == (i13 | 0)) {
     i10 = i17 + 8 | 0;
     HEAP32[i17 + 24 >> 2] = i10;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 12 >> 2] & 127](i13, i10);
     break;
    } else {
     HEAP32[i17 + 24 >> 2] = i11;
     HEAP32[i1 >> 2] = 0;
     break;
    }
   }
  } while (0);
  HEAP32[i3 >> 2] = i17;
  __ZN3WTF16callOnMainThreadENSt3__18functionIFvvEEE(i8);
  i17 = HEAP32[i3 >> 2] | 0;
  do {
   if ((i17 | 0) == (i8 | 0)) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 16 >> 2] & 1023](i17);
   } else {
    if ((i17 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 20 >> 2] & 1023](i17);
   }
  } while (0);
  i17 = HEAP32[i9 + 16 >> 2] | 0;
  if ((i17 | 0) == (i9 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 16 >> 2] & 1023](i17);
   STACKTOP = i5;
   return;
  }
  if ((i17 | 0) == 0) {
   STACKTOP = i5;
   return;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 20 >> 2] & 1023](i17);
  STACKTOP = i5;
  return;
 }
 do {
  if (i12) {
   HEAP32[i7 + 16 >> 2] = 0;
  } else {
   if ((i2 | 0) == (i4 | 0)) {
    i17 = i7;
    HEAP32[i7 + 16 >> 2] = i17;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 127](i2, i17);
    break;
   } else {
    HEAP32[i7 + 16 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 127](i2) | 0;
    break;
   }
  }
 } while (0);
 i2 = i7 + 24 | 0;
 __ZN7WebCore22IDBObjectStoreMetadataC1ERKS0_(i2, i21);
 i21 = i6 + 16 | 0;
 HEAP32[i21 >> 2] = 0;
 i4 = __Znwj(104) | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i4 >> 2] = H_BASE + 1872;
  i12 = i4 + 8 | 0;
  i17 = HEAP32[i7 + 16 >> 2] | 0;
  do {
   if ((i17 | 0) == 0) {
    HEAP32[i4 + 24 >> 2] = 0;
   } else {
    i9 = i7;
    if ((i17 | 0) == (i9 | 0)) {
     i8 = i12;
     HEAP32[i4 + 24 >> 2] = i8;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i7 >> 2] | 0) + 12 >> 2] & 127](i9, i8);
     break;
    } else {
     HEAP32[i4 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i17 >> 2] | 0) + 8 >> 2] & 127](i17) | 0;
     break;
    }
   }
  } while (0);
  __ZN7WebCore22IDBObjectStoreMetadataC1ERKS0_(i4 + 32 | 0, i2);
 }
 HEAP32[i21 >> 2] = i4;
 __ZN3WTF16callOnMainThreadENSt3__18functionIFvvEEE(i6);
 i4 = HEAP32[i21 >> 2] | 0;
 do {
  if ((i4 | 0) == (i6 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 16 >> 2] & 1023](i4);
  } else {
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 20 >> 2] & 1023](i4);
  }
 } while (0);
 i4 = HEAP32[i7 + 72 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i6 = HEAP32[i7 + 76 >> 2] | 0;
  if ((i6 | 0) > 0) {
   i21 = 0;
   while (1) {
    i2 = i4 + (i21 * 48 & -1) | 0;
    if (!((HEAP32[i2 >> 2] | 0) == (-1 | 0) & (HEAP32[i2 + 4 >> 2] | 0) == (-1 | 0))) {
     __ZN7WebCore16IDBIndexMetadataD1Ev(i4 + (i21 * 48 & -1) + 8 | 0);
    }
    i21 = i21 + 1 | 0;
    if ((i21 | 0) >= (i6 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i4);
 }
 i4 = i7 + 56 | 0;
 i6 = HEAP32[i4 >> 2] | 0;
 i21 = i7 + 48 | 0;
 if ((i6 | 0) != 0) {
  i2 = HEAP32[i21 >> 2] | 0;
  i17 = i2 + (i6 << 2) | 0;
  i6 = i2;
  while (1) {
   i2 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i2 | 0) != 0) {
     i12 = i2 | 0;
     i8 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i2);
      break;
     } else {
      HEAP32[i12 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i6 = i6 + 4 | 0;
   if ((i6 | 0) == (i17 | 0)) {
    break;
   }
  }
  HEAP32[i4 >> 2] = 0;
 }
 i4 = HEAP32[i21 >> 2] | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i21 >> 2] = 0;
  HEAP32[i7 + 52 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i4);
 }
 i4 = HEAP32[i7 + 44 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i21 = i4 | 0;
   i17 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
   if ((i17 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i21 >> 2] = i17;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i7 + 24 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i17 = i4 | 0;
   i21 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i21 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i17 >> 2] = i21;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i7 + 16 >> 2] | 0;
 if ((i4 | 0) == (i7 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 16 >> 2] & 1023](i4);
  STACKTOP = i5;
  return;
 }
 if ((i4 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 20 >> 2] & 1023](i4);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore26IDBServerConnectionLevelDB21changeDatabaseVersionERNS_21IDBTransactionBackendERKNS_18IDBDatabaseBackend22VersionChangeOperationENSt3__18functionIFvN3WTF10PassRefPtrINS_16IDBDatabaseErrorEEEEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 112 | 0;
 i5 = i3 | 0;
 i6 = i3 + 8 | 0;
 i7 = i3 + 32 | 0;
 i8 = i3 + 64 | 0;
 i9 = i3 + 88 | 0;
 i10 = i2 + 184 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 i12 = HEAP32[i10 + 4 >> 2] | 0;
 i10 = HEAP32[i1 + 20 >> 2] | 0;
 i13 = HEAP32[i1 + 12 >> 2] | 0;
 i14 = _i64Add(i11, i12, ~0, ~i11) | 0;
 i15 = tempRet0;
 i16 = (i14 >>> 22 | i15 << 10) ^ i14;
 i14 = (i15 >>> 22 | 0 << 10) ^ i15;
 i15 = _i64Add(i16, i14, ~(i16 << 13 | 0 >>> 19), ~(i14 << 13 | i16 >>> 19)) | 0;
 i16 = tempRet0;
 i14 = ___muldi3((i15 >>> 8 | i16 << 24) ^ i15, (i16 >>> 8 | 0 << 24) ^ i16, 9, 0) | 0;
 i16 = tempRet0;
 i15 = (i14 >>> 15 | i16 << 17) ^ i14;
 i14 = (i16 >>> 15 | 0 << 17) ^ i16;
 i16 = _i64Add(i15, i14, ~(i15 << 27 | 0 >>> 5), ~(i14 << 27 | i15 >>> 5)) | 0;
 i15 = (i16 >>> 31 | tempRet0 << 1) ^ i16;
 L1 : do {
  if ((i13 | 0) == 0) {
   i17 = 0;
  } else {
   i16 = i15 & i10;
   i14 = i13 + (i16 << 4) | 0;
   i18 = i14 | 0;
   i19 = HEAP32[i18 >> 2] | 0;
   i20 = HEAP32[i18 + 4 >> 2] | 0;
   if ((i19 | 0) == (i11 | 0) & (i20 | 0) == (i12 | 0)) {
    i21 = i14;
   } else {
    i14 = (i15 >>> 23) + ~i15 | 0;
    i18 = i14 << 12 ^ i14;
    i14 = i18 >>> 7 ^ i18;
    i18 = i14 << 2 ^ i14;
    i14 = i18 >>> 20 ^ i18 | 1;
    i18 = 0;
    i22 = i16;
    i16 = i20;
    i20 = i19;
    while (1) {
     if ((i20 | 0) == 0 & (i16 | 0) == 0) {
      i17 = 0;
      break L1;
     }
     i19 = (i18 | 0) == 0 ? i14 : i18;
     i23 = i19 + i22 & i10;
     i24 = i13 + (i23 << 4) | 0;
     i25 = i24 | 0;
     i26 = HEAP32[i25 >> 2] | 0;
     i27 = HEAP32[i25 + 4 >> 2] | 0;
     if ((i26 | 0) == (i11 | 0) & (i27 | 0) == (i12 | 0)) {
      i21 = i24;
      break;
     } else {
      i18 = i19;
      i22 = i23;
      i16 = i27;
      i20 = i26;
     }
    }
   }
   if ((i21 | 0) == 0) {
    i17 = 0;
    break;
   }
   i17 = HEAP32[i21 + 8 >> 2] | 0;
  }
 } while (0);
 i21 = HEAP32[i2 + 40 >> 2] | 0;
 i2 = i21 + 16 | 0;
 i12 = i21 + 24 | 0;
 if (__ZN7WebCore22IDBBackingStoreLevelDB24updateIDBDatabaseVersionERNS_33IDBBackingStoreTransactionLevelDBExy(HEAP32[i1 + 8 >> 2] | 0, i17, HEAP32[i2 >> 2] | 0, HEAP32[i2 + 4 >> 2] | 0, HEAP32[i12 >> 2] | 0, HEAP32[i12 + 4 >> 2] | 0) | 0) {
  i12 = HEAP32[i4 + 16 >> 2] | 0;
  do {
   if ((i12 | 0) == 0) {
    HEAP32[i9 + 16 >> 2] = 0;
   } else {
    if ((i12 | 0) == (i4 | 0)) {
     i2 = i9;
     HEAP32[i9 + 16 >> 2] = i2;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i12 >> 2] | 0) + 12 >> 2] & 127](i12, i2);
     break;
    } else {
     HEAP32[i9 + 16 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i12 >> 2] | 0) + 8 >> 2] & 127](i12) | 0;
     break;
    }
   }
  } while (0);
  i12 = i8 + 16 | 0;
  HEAP32[i12 >> 2] = 0;
  i2 = __Znwj(32) | 0;
  do {
   if ((i2 | 0) != 0) {
    HEAP32[i2 >> 2] = H_BASE + 1752;
    i17 = i9 + 16 | 0;
    i1 = HEAP32[i17 >> 2] | 0;
    if ((i1 | 0) == 0) {
     HEAP32[i2 + 24 >> 2] = 0;
     break;
    }
    i21 = i9;
    if ((i1 | 0) == (i21 | 0)) {
     i11 = i2 + 8 | 0;
     HEAP32[i2 + 24 >> 2] = i11;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 12 >> 2] & 127](i21, i11);
     break;
    } else {
     HEAP32[i2 + 24 >> 2] = i1;
     HEAP32[i17 >> 2] = 0;
     break;
    }
   }
  } while (0);
  HEAP32[i12 >> 2] = i2;
  __ZN3WTF16callOnMainThreadENSt3__18functionIFvvEEE(i8);
  i2 = HEAP32[i12 >> 2] | 0;
  do {
   if ((i2 | 0) == (i8 | 0)) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
   } else {
    if ((i2 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
   }
  } while (0);
  i2 = HEAP32[i9 + 16 >> 2] | 0;
  if ((i2 | 0) == (i9 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
   STACKTOP = i3;
   return;
  }
  if ((i2 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
  STACKTOP = i3;
  return;
 }
 __ZN3WTF6StringC1EPKc(i5, H_BASE + 640 | 0);
 i2 = __ZN3WTF10fastMallocEj(12) | 0;
 i9 = i2;
 i8 = i2;
 HEAP32[i8 >> 2] = 1;
 HEAP16[i2 + 4 >> 1] = 1201;
 i12 = i2 + 8 | 0;
 i17 = i5 | 0;
 i5 = HEAP32[i17 >> 2] | 0;
 HEAP32[i12 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i1 = i5 | 0;
  HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
 }
 i1 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i17 = i1 | 0;
   i5 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i17 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i4 + 16 >> 2] | 0;
 do {
  if ((i1 | 0) == 0) {
   HEAP32[i7 + 16 >> 2] = 0;
  } else {
   i5 = i4;
   if ((i1 | 0) == (i5 | 0)) {
    i17 = i7;
    HEAP32[i7 + 16 >> 2] = i17;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 127](i5, i17);
    break;
   } else {
    HEAP32[i7 + 16 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] & 127](i1) | 0;
    break;
   }
  }
 } while (0);
 i1 = i7 + 24 | 0;
 HEAP32[i1 >> 2] = i9;
 i9 = (i2 | 0) == 0;
 if (!i9) {
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 }
 i4 = i6 + 16 | 0;
 HEAP32[i4 >> 2] = 0;
 i17 = __Znwj(40) | 0;
 if ((i17 | 0) != 0) {
  HEAP32[i17 >> 2] = H_BASE + 1792;
  i5 = i17 + 8 | 0;
  i11 = i7 + 16 | 0;
  i21 = HEAP32[i11 >> 2] | 0;
  do {
   if ((i21 | 0) == 0) {
    HEAP32[i17 + 24 >> 2] = 0;
   } else {
    i13 = i7;
    if ((i21 | 0) == (i13 | 0)) {
     i10 = i5;
     HEAP32[i17 + 24 >> 2] = i10;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i7 >> 2] | 0) + 12 >> 2] & 127](i13, i10);
     break;
    } else {
     HEAP32[i17 + 24 >> 2] = i21;
     HEAP32[i11 >> 2] = 0;
     break;
    }
   }
  } while (0);
  i11 = HEAP32[i1 >> 2] | 0;
  HEAP32[i1 >> 2] = 0;
  HEAP32[i17 + 32 >> 2] = i11;
 }
 HEAP32[i4 >> 2] = i17;
 __ZN3WTF16callOnMainThreadENSt3__18functionIFvvEEE(i6);
 i17 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i17 | 0) == (i6 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 16 >> 2] & 1023](i17);
  } else {
   if ((i17 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 20 >> 2] & 1023](i17);
  }
 } while (0);
 i17 = HEAP32[i1 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i1 = i17 | 0;
   i6 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i1 >> 2] = i6;
    break;
   }
   i6 = HEAP32[i17 + 8 >> 2] | 0;
   do {
    if ((i6 | 0) != 0) {
     i1 = i6 | 0;
     i4 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
     if ((i4 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i6);
      break;
     } else {
      HEAP32[i1 >> 2] = i4;
      break;
     }
    }
   } while (0);
   __ZN3WTF8fastFreeEPv(i17);
  }
 } while (0);
 i17 = HEAP32[i7 + 16 >> 2] | 0;
 do {
  if ((i17 | 0) == (i7 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 16 >> 2] & 1023](i17);
  } else {
   if ((i17 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 20 >> 2] & 1023](i17);
  }
 } while (0);
 if (i9) {
  STACKTOP = i3;
  return;
 }
 i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 if ((i9 | 0) != 0) {
  HEAP32[i8 >> 2] = i9;
  STACKTOP = i3;
  return;
 }
 i9 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i12 = i9 | 0;
   i8 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i12 >> 2] = i8;
    break;
   }
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i2);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore26IDBServerConnectionLevelDB5countERNS_21IDBTransactionBackendERKNS_14CountOperationENSt3__18functionIFvN3WTF10PassRefPtrINS_16IDBDatabaseErrorEEEEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 112 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 40 | 0;
 i10 = i5 + 64 | 0;
 i11 = i5 + 88 | 0;
 i12 = i2 + 184 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 i14 = HEAP32[i12 + 4 >> 2] | 0;
 i12 = HEAP32[i1 + 20 >> 2] | 0;
 i15 = HEAP32[i1 + 12 >> 2] | 0;
 i16 = _i64Add(i13, i14, ~0, ~i13) | 0;
 i17 = tempRet0;
 i18 = (i16 >>> 22 | i17 << 10) ^ i16;
 i16 = (i17 >>> 22 | 0 << 10) ^ i17;
 i17 = _i64Add(i18, i16, ~(i18 << 13 | 0 >>> 19), ~(i16 << 13 | i18 >>> 19)) | 0;
 i18 = tempRet0;
 i16 = ___muldi3((i17 >>> 8 | i18 << 24) ^ i17, (i18 >>> 8 | 0 << 24) ^ i18, 9, 0) | 0;
 i18 = tempRet0;
 i17 = (i16 >>> 15 | i18 << 17) ^ i16;
 i16 = (i18 >>> 15 | 0 << 17) ^ i18;
 i18 = _i64Add(i17, i16, ~(i17 << 27 | 0 >>> 5), ~(i16 << 27 | i17 >>> 5)) | 0;
 i17 = (i18 >>> 31 | tempRet0 << 1) ^ i18;
 L1 : do {
  if ((i15 | 0) == 0) {
   i19 = 0;
  } else {
   i18 = i17 & i12;
   i16 = i15 + (i18 << 4) | 0;
   i20 = i16 | 0;
   i21 = HEAP32[i20 >> 2] | 0;
   i22 = HEAP32[i20 + 4 >> 2] | 0;
   if ((i21 | 0) == (i13 | 0) & (i22 | 0) == (i14 | 0)) {
    i23 = i16;
   } else {
    i16 = (i17 >>> 23) + ~i17 | 0;
    i20 = i16 << 12 ^ i16;
    i16 = i20 >>> 7 ^ i20;
    i20 = i16 << 2 ^ i16;
    i16 = i20 >>> 20 ^ i20 | 1;
    i20 = 0;
    i24 = i18;
    i18 = i22;
    i22 = i21;
    while (1) {
     if ((i22 | 0) == 0 & (i18 | 0) == 0) {
      i19 = 0;
      break L1;
     }
     i21 = (i20 | 0) == 0 ? i16 : i20;
     i25 = i21 + i24 & i12;
     i26 = i15 + (i25 << 4) | 0;
     i27 = i26 | 0;
     i28 = HEAP32[i27 >> 2] | 0;
     i29 = HEAP32[i27 + 4 >> 2] | 0;
     if ((i28 | 0) == (i13 | 0) & (i29 | 0) == (i14 | 0)) {
      i23 = i26;
      break;
     } else {
      i20 = i21;
      i24 = i25;
      i18 = i29;
      i22 = i28;
     }
    }
   }
   if ((i23 | 0) == 0) {
    i19 = 0;
    break;
   }
   i19 = HEAP32[i23 + 8 >> 2] | 0;
  }
 } while (0);
 i23 = i1 + 56 | 0;
 i14 = HEAP32[i23 >> 2] | 0;
 i13 = HEAP32[i23 + 4 >> 2] | 0;
 i15 = _i64Add(i14, i13, 1, 0) | 0;
 HEAP32[i23 >> 2] = i15;
 HEAP32[i23 + 4 >> 2] = tempRet0;
 i23 = i3 + 24 | 0;
 i15 = HEAP32[i23 >> 2] | 0;
 i12 = HEAP32[i23 + 4 >> 2] | 0;
 i23 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i15 | 0) == (-1 | 0) & (i12 | 0) == (-1 | 0)) {
  i1 = (HEAP32[i2 + 40 >> 2] | 0) + 16 | 0;
  i17 = i3 + 16 | 0;
  FUNCTION_TABLE_viiiiiiiiiii[HEAP32[(HEAP32[i23 >> 2] | 0) + 8 >> 2] & 1](i6, i23, i14, i13, i19, HEAP32[i1 >> 2] | 0, HEAP32[i1 + 4 >> 2] | 0, HEAP32[i17 >> 2] | 0, HEAP32[i17 + 4 >> 2] | 0, HEAP32[i3 + 32 >> 2] | 0, 0);
  i17 = i6 | 0;
  i6 = HEAP32[i17 >> 2] | 0;
  HEAP32[i17 >> 2] = 0;
  i30 = i6;
 } else {
  i6 = (HEAP32[i2 + 40 >> 2] | 0) + 16 | 0;
  i2 = i3 + 16 | 0;
  FUNCTION_TABLE_viiiiiiiiiiiii[HEAP32[(HEAP32[i23 >> 2] | 0) + 16 >> 2] & 1](i7, i23, i14, i13, i19, HEAP32[i6 >> 2] | 0, HEAP32[i6 + 4 >> 2] | 0, HEAP32[i2 >> 2] | 0, HEAP32[i2 + 4 >> 2] | 0, i15, i12, HEAP32[i3 + 32 >> 2] | 0, 0);
  i12 = i7 | 0;
  i7 = HEAP32[i12 >> 2] | 0;
  HEAP32[i12 >> 2] = 0;
  i30 = i7;
 }
 i7 = (i30 | 0) == 0;
 do {
  if (i7) {
   i12 = HEAP32[i3 + 36 >> 2] | 0;
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i12 >> 2] | 0) + 32 >> 2] & 15](i12, 0, 0);
   i12 = HEAP32[i4 + 16 >> 2] | 0;
   do {
    if ((i12 | 0) == 0) {
     HEAP32[i9 + 16 >> 2] = 0;
    } else {
     if ((i12 | 0) == (i4 | 0)) {
      i15 = i9;
      HEAP32[i9 + 16 >> 2] = i15;
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i12 >> 2] | 0) + 12 >> 2] & 127](i12, i15);
      break;
     } else {
      HEAP32[i9 + 16 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i12 >> 2] | 0) + 8 >> 2] & 127](i12) | 0;
      break;
     }
    }
   } while (0);
   i12 = i8 + 16 | 0;
   HEAP32[i12 >> 2] = 0;
   i15 = __Znwj(32) | 0;
   do {
    if ((i15 | 0) != 0) {
     HEAP32[i15 >> 2] = H_BASE + 832;
     i2 = i9 + 16 | 0;
     i6 = HEAP32[i2 >> 2] | 0;
     if ((i6 | 0) == 0) {
      HEAP32[i15 + 24 >> 2] = 0;
      break;
     }
     i19 = i9;
     if ((i6 | 0) == (i19 | 0)) {
      i13 = i15 + 8 | 0;
      HEAP32[i15 + 24 >> 2] = i13;
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 12 >> 2] & 127](i19, i13);
      break;
     } else {
      HEAP32[i15 + 24 >> 2] = i6;
      HEAP32[i2 >> 2] = 0;
      break;
     }
    }
   } while (0);
   HEAP32[i12 >> 2] = i15;
   __ZN3WTF16callOnMainThreadENSt3__18functionIFvvEEE(i8);
   i2 = HEAP32[i12 >> 2] | 0;
   do {
    if ((i2 | 0) == (i8 | 0)) {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
    } else {
     if ((i2 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
    }
   } while (0);
   i2 = HEAP32[i9 + 16 >> 2] | 0;
   if ((i2 | 0) == (i9 | 0)) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
    break;
   }
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
  } else {
   i2 = i30;
   i12 = 0;
   while (1) {
    i12 = i12 + 1 | 0;
    if (!(FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i30, 0, 1) | 0)) {
     break;
    }
   }
   i2 = HEAP32[i3 + 36 >> 2] | 0;
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i2 >> 2] | 0) + 32 >> 2] & 15](i2, i12, 0);
   i2 = HEAP32[i4 + 16 >> 2] | 0;
   do {
    if ((i2 | 0) == 0) {
     HEAP32[i11 + 16 >> 2] = 0;
    } else {
     i15 = i4;
     if ((i2 | 0) == (i15 | 0)) {
      i6 = i11;
      HEAP32[i11 + 16 >> 2] = i6;
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 127](i15, i6);
      break;
     } else {
      HEAP32[i11 + 16 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 127](i2) | 0;
      break;
     }
    }
   } while (0);
   i2 = i10 + 16 | 0;
   HEAP32[i2 >> 2] = 0;
   i12 = __Znwj(32) | 0;
   do {
    if ((i12 | 0) != 0) {
     HEAP32[i12 >> 2] = H_BASE + 792;
     i6 = i11 + 16 | 0;
     i15 = HEAP32[i6 >> 2] | 0;
     if ((i15 | 0) == 0) {
      HEAP32[i12 + 24 >> 2] = 0;
      break;
     }
     i13 = i11;
     if ((i15 | 0) == (i13 | 0)) {
      i19 = i12 + 8 | 0;
      HEAP32[i12 + 24 >> 2] = i19;
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i11 >> 2] | 0) + 12 >> 2] & 127](i13, i19);
      break;
     } else {
      HEAP32[i12 + 24 >> 2] = i15;
      HEAP32[i6 >> 2] = 0;
      break;
     }
    }
   } while (0);
   HEAP32[i2 >> 2] = i12;
   __ZN3WTF16callOnMainThreadENSt3__18functionIFvvEEE(i10);
   i6 = HEAP32[i2 >> 2] | 0;
   do {
    if ((i6 | 0) == (i10 | 0)) {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 16 >> 2] & 1023](i6);
    } else {
     if ((i6 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 20 >> 2] & 1023](i6);
    }
   } while (0);
   i6 = HEAP32[i11 + 16 >> 2] | 0;
   if ((i6 | 0) == (i11 | 0)) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 16 >> 2] & 1023](i6);
    break;
   }
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 20 >> 2] & 1023](i6);
  }
 } while (0);
 if (i7) {
  STACKTOP = i5;
  return;
 }
 i7 = i30 + 4 | 0;
 i30 = i7 | 0;
 i11 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
 if ((i11 | 0) != 0) {
  HEAP32[i30 >> 2] = i11;
  STACKTOP = i5;
  return;
 }
 i11 = i7 - 4 | 0;
 if ((i11 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 32 >> 2] & 1023](i11);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore26IDBServerConnectionLevelDB16clearObjectStoreERNS_21IDBTransactionBackendERKNS_25ClearObjectStoreOperationENSt3__18functionIFvN3WTF10PassRefPtrINS_16IDBDatabaseErrorEEEEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 112 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 40 | 0;
 i10 = i5 + 64 | 0;
 i11 = i5 + 88 | 0;
 i12 = i2 + 184 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 i14 = HEAP32[i12 + 4 >> 2] | 0;
 i12 = HEAP32[i1 + 20 >> 2] | 0;
 i15 = HEAP32[i1 + 12 >> 2] | 0;
 i16 = _i64Add(i13, i14, ~0, ~i13) | 0;
 i17 = tempRet0;
 i18 = (i16 >>> 22 | i17 << 10) ^ i16;
 i16 = (i17 >>> 22 | 0 << 10) ^ i17;
 i17 = _i64Add(i18, i16, ~(i18 << 13 | 0 >>> 19), ~(i16 << 13 | i18 >>> 19)) | 0;
 i18 = tempRet0;
 i16 = ___muldi3((i17 >>> 8 | i18 << 24) ^ i17, (i18 >>> 8 | 0 << 24) ^ i18, 9, 0) | 0;
 i18 = tempRet0;
 i17 = (i16 >>> 15 | i18 << 17) ^ i16;
 i16 = (i18 >>> 15 | 0 << 17) ^ i18;
 i18 = _i64Add(i17, i16, ~(i17 << 27 | 0 >>> 5), ~(i16 << 27 | i17 >>> 5)) | 0;
 i17 = (i18 >>> 31 | tempRet0 << 1) ^ i18;
 L1 : do {
  if ((i15 | 0) == 0) {
   i19 = 0;
  } else {
   i18 = i17 & i12;
   i16 = i15 + (i18 << 4) | 0;
   i20 = i16 | 0;
   i21 = HEAP32[i20 >> 2] | 0;
   i22 = HEAP32[i20 + 4 >> 2] | 0;
   if ((i21 | 0) == (i13 | 0) & (i22 | 0) == (i14 | 0)) {
    i23 = i16;
   } else {
    i16 = (i17 >>> 23) + ~i17 | 0;
    i20 = i16 << 12 ^ i16;
    i16 = i20 >>> 7 ^ i20;
    i20 = i16 << 2 ^ i16;
    i16 = i20 >>> 20 ^ i20 | 1;
    i20 = 0;
    i24 = i18;
    i18 = i22;
    i22 = i21;
    while (1) {
     if ((i22 | 0) == 0 & (i18 | 0) == 0) {
      i19 = 0;
      break L1;
     }
     i21 = (i20 | 0) == 0 ? i16 : i20;
     i25 = i21 + i24 & i12;
     i26 = i15 + (i25 << 4) | 0;
     i27 = i26 | 0;
     i28 = HEAP32[i27 >> 2] | 0;
     i29 = HEAP32[i27 + 4 >> 2] | 0;
     if ((i28 | 0) == (i13 | 0) & (i29 | 0) == (i14 | 0)) {
      i23 = i26;
      break;
     } else {
      i20 = i21;
      i24 = i25;
      i18 = i29;
      i22 = i28;
     }
    }
   }
   if ((i23 | 0) == 0) {
    i19 = 0;
    break;
   }
   i19 = HEAP32[i23 + 8 >> 2] | 0;
  }
 } while (0);
 i23 = (HEAP32[i2 + 40 >> 2] | 0) + 16 | 0;
 i2 = i3 + 16 | 0;
 i14 = __ZN7WebCore22IDBBackingStoreLevelDB16clearObjectStoreERNS_33IDBBackingStoreTransactionLevelDBExx(HEAP32[i1 + 8 >> 2] | 0, i19, HEAP32[i23 >> 2] | 0, HEAP32[i23 + 4 >> 2] | 0, HEAP32[i2 >> 2] | 0, HEAP32[i2 + 4 >> 2] | 0) | 0;
 i2 = HEAP32[i3 + 24 >> 2] | 0;
 if (i14) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 36 >> 2] & 1023](i2);
  i14 = HEAP32[i4 + 16 >> 2] | 0;
  do {
   if ((i14 | 0) == 0) {
    HEAP32[i11 + 16 >> 2] = 0;
   } else {
    if ((i14 | 0) == (i4 | 0)) {
     i3 = i11;
     HEAP32[i11 + 16 >> 2] = i3;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i14 >> 2] | 0) + 12 >> 2] & 127](i14, i3);
     break;
    } else {
     HEAP32[i11 + 16 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 8 >> 2] & 127](i14) | 0;
     break;
    }
   }
  } while (0);
  i14 = i10 + 16 | 0;
  HEAP32[i14 >> 2] = 0;
  i3 = __Znwj(32) | 0;
  do {
   if ((i3 | 0) != 0) {
    HEAP32[i3 >> 2] = H_BASE + 2032;
    i23 = i11 + 16 | 0;
    i19 = HEAP32[i23 >> 2] | 0;
    if ((i19 | 0) == 0) {
     HEAP32[i3 + 24 >> 2] = 0;
     break;
    }
    i1 = i11;
    if ((i19 | 0) == (i1 | 0)) {
     i13 = i3 + 8 | 0;
     HEAP32[i3 + 24 >> 2] = i13;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i11 >> 2] | 0) + 12 >> 2] & 127](i1, i13);
     break;
    } else {
     HEAP32[i3 + 24 >> 2] = i19;
     HEAP32[i23 >> 2] = 0;
     break;
    }
   }
  } while (0);
  HEAP32[i14 >> 2] = i3;
  __ZN3WTF16callOnMainThreadENSt3__18functionIFvvEEE(i10);
  i3 = HEAP32[i14 >> 2] | 0;
  do {
   if ((i3 | 0) == (i10 | 0)) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 16 >> 2] & 1023](i3);
   } else {
    if ((i3 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 20 >> 2] & 1023](i3);
   }
  } while (0);
  i3 = HEAP32[i11 + 16 >> 2] | 0;
  if ((i3 | 0) == (i11 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 16 >> 2] & 1023](i3);
   STACKTOP = i5;
   return;
  }
  if ((i3 | 0) == 0) {
   STACKTOP = i5;
   return;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 20 >> 2] & 1023](i3);
  STACKTOP = i5;
  return;
 }
 i3 = HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] | 0;
 __ZN3WTF6StringC1EPKc(i7, H_BASE + 8 | 0);
 i11 = __ZN3WTF10fastMallocEj(12) | 0;
 HEAP32[i11 >> 2] = 1;
 HEAP16[i11 + 4 >> 1] = 1201;
 i10 = i7 | 0;
 i7 = HEAP32[i10 >> 2] | 0;
 HEAP32[i11 + 8 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i14 = i7 | 0;
  HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
 }
 i14 = i6 | 0;
 HEAP32[i14 >> 2] = i11;
 FUNCTION_TABLE_vii[i3 & 127](i2, i6);
 i6 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i14 = i6 | 0;
   i2 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i14 >> 2] = i2;
    break;
   }
   i2 = HEAP32[i6 + 8 >> 2] | 0;
   do {
    if ((i2 | 0) != 0) {
     i14 = i2 | 0;
     i3 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
     if ((i3 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i2);
      break;
     } else {
      HEAP32[i14 >> 2] = i3;
      break;
     }
    }
   } while (0);
   __ZN3WTF8fastFreeEPv(i6);
  }
 } while (0);
 i6 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i10 = i6 | 0;
   i2 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i10 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i4 + 16 >> 2] | 0;
 do {
  if ((i6 | 0) == 0) {
   HEAP32[i9 + 16 >> 2] = 0;
  } else {
   i2 = i4;
   if ((i6 | 0) == (i2 | 0)) {
    i10 = i9;
    HEAP32[i9 + 16 >> 2] = i10;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 127](i2, i10);
    break;
   } else {
    HEAP32[i9 + 16 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] & 127](i6) | 0;
    break;
   }
  }
 } while (0);
 i6 = i8 + 16 | 0;
 HEAP32[i6 >> 2] = 0;
 i4 = __Znwj(32) | 0;
 do {
  if ((i4 | 0) != 0) {
   HEAP32[i4 >> 2] = H_BASE + 2072;
   i10 = i9 + 16 | 0;
   i2 = HEAP32[i10 >> 2] | 0;
   if ((i2 | 0) == 0) {
    HEAP32[i4 + 24 >> 2] = 0;
    break;
   }
   i3 = i9;
   if ((i2 | 0) == (i3 | 0)) {
    i14 = i4 + 8 | 0;
    HEAP32[i4 + 24 >> 2] = i14;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 12 >> 2] & 127](i3, i14);
    break;
   } else {
    HEAP32[i4 + 24 >> 2] = i2;
    HEAP32[i10 >> 2] = 0;
    break;
   }
  }
 } while (0);
 HEAP32[i6 >> 2] = i4;
 __ZN3WTF16callOnMainThreadENSt3__18functionIFvvEEE(i8);
 i4 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i4 | 0) == (i8 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 16 >> 2] & 1023](i4);
  } else {
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 20 >> 2] & 1023](i4);
  }
 } while (0);
 i4 = HEAP32[i9 + 16 >> 2] | 0;
 if ((i4 | 0) == (i9 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 16 >> 2] & 1023](i4);
  STACKTOP = i5;
  return;
 }
 if ((i4 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 20 >> 2] & 1023](i4);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore26IDBServerConnectionLevelDB17createObjectStoreERNS_21IDBTransactionBackendERKNS_26CreateObjectStoreOperationENSt3__18functionIFvN3WTF10PassRefPtrINS_16IDBDatabaseErrorEEEEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 112 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 32 | 0;
 i9 = i5 + 64 | 0;
 i10 = i5 + 88 | 0;
 i11 = i2 + 184 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 i13 = HEAP32[i11 + 4 >> 2] | 0;
 i11 = HEAP32[i1 + 20 >> 2] | 0;
 i14 = HEAP32[i1 + 12 >> 2] | 0;
 i15 = _i64Add(i12, i13, ~0, ~i12) | 0;
 i16 = tempRet0;
 i17 = (i15 >>> 22 | i16 << 10) ^ i15;
 i15 = (i16 >>> 22 | 0 << 10) ^ i16;
 i16 = _i64Add(i17, i15, ~(i17 << 13 | 0 >>> 19), ~(i15 << 13 | i17 >>> 19)) | 0;
 i17 = tempRet0;
 i15 = ___muldi3((i16 >>> 8 | i17 << 24) ^ i16, (i17 >>> 8 | 0 << 24) ^ i17, 9, 0) | 0;
 i17 = tempRet0;
 i16 = (i15 >>> 15 | i17 << 17) ^ i15;
 i15 = (i17 >>> 15 | 0 << 17) ^ i17;
 i17 = _i64Add(i16, i15, ~(i16 << 27 | 0 >>> 5), ~(i15 << 27 | i16 >>> 5)) | 0;
 i16 = (i17 >>> 31 | tempRet0 << 1) ^ i17;
 L1 : do {
  if ((i14 | 0) == 0) {
   i18 = 0;
  } else {
   i17 = i16 & i11;
   i15 = i14 + (i17 << 4) | 0;
   i19 = i15 | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   i21 = HEAP32[i19 + 4 >> 2] | 0;
   if ((i20 | 0) == (i12 | 0) & (i21 | 0) == (i13 | 0)) {
    i22 = i15;
   } else {
    i15 = (i16 >>> 23) + ~i16 | 0;
    i19 = i15 << 12 ^ i15;
    i15 = i19 >>> 7 ^ i19;
    i19 = i15 << 2 ^ i15;
    i15 = i19 >>> 20 ^ i19 | 1;
    i19 = 0;
    i23 = i17;
    i17 = i21;
    i21 = i20;
    while (1) {
     if ((i21 | 0) == 0 & (i17 | 0) == 0) {
      i18 = 0;
      break L1;
     }
     i20 = (i19 | 0) == 0 ? i15 : i19;
     i24 = i20 + i23 & i11;
     i25 = i14 + (i24 << 4) | 0;
     i26 = i25 | 0;
     i27 = HEAP32[i26 >> 2] | 0;
     i28 = HEAP32[i26 + 4 >> 2] | 0;
     if ((i27 | 0) == (i12 | 0) & (i28 | 0) == (i13 | 0)) {
      i22 = i25;
      break;
     } else {
      i19 = i20;
      i23 = i24;
      i17 = i28;
      i21 = i27;
     }
    }
   }
   if ((i22 | 0) == 0) {
    i18 = 0;
    break;
   }
   i18 = HEAP32[i22 + 8 >> 2] | 0;
  }
 } while (0);
 i22 = i6 | 0;
 i13 = HEAP32[i3 + 16 >> 2] | 0;
 HEAP32[i22 >> 2] = i13;
 if ((i13 | 0) != 0) {
  i12 = i13 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
 }
 i12 = (HEAP32[i2 + 40 >> 2] | 0) + 16 | 0;
 i2 = i3 + 24 | 0;
 i13 = __ZN7WebCore22IDBBackingStoreLevelDB17createObjectStoreERNS_33IDBBackingStoreTransactionLevelDBExxRKN3WTF6StringERKNS_10IDBKeyPathEb(HEAP32[i1 + 8 >> 2] | 0, i18, HEAP32[i12 >> 2] | 0, HEAP32[i12 + 4 >> 2] | 0, HEAP32[i2 >> 2] | 0, HEAP32[i2 + 4 >> 2] | 0, i6, i3 + 32 | 0, (HEAP8[i3 + 52 | 0] & 1) != 0) | 0;
 i3 = HEAP32[i4 + 16 >> 2] | 0;
 i6 = (i3 | 0) == 0;
 do {
  if (i13) {
   do {
    if (i6) {
     HEAP32[i10 + 16 >> 2] = 0;
    } else {
     if ((i3 | 0) == (i4 | 0)) {
      i2 = i10;
      HEAP32[i10 + 16 >> 2] = i2;
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 12 >> 2] & 127](i3, i2);
      break;
     } else {
      HEAP32[i10 + 16 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] & 127](i3) | 0;
      break;
     }
    }
   } while (0);
   i2 = i9 + 16 | 0;
   HEAP32[i2 >> 2] = 0;
   i12 = __Znwj(32) | 0;
   do {
    if ((i12 | 0) != 0) {
     HEAP32[i12 >> 2] = H_BASE + 1912;
     i18 = i10 + 16 | 0;
     i1 = HEAP32[i18 >> 2] | 0;
     if ((i1 | 0) == 0) {
      HEAP32[i12 + 24 >> 2] = 0;
      break;
     }
     i14 = i10;
     if ((i1 | 0) == (i14 | 0)) {
      i11 = i12 + 8 | 0;
      HEAP32[i12 + 24 >> 2] = i11;
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i10 >> 2] | 0) + 12 >> 2] & 127](i14, i11);
      break;
     } else {
      HEAP32[i12 + 24 >> 2] = i1;
      HEAP32[i18 >> 2] = 0;
      break;
     }
    }
   } while (0);
   HEAP32[i2 >> 2] = i12;
   __ZN3WTF16callOnMainThreadENSt3__18functionIFvvEEE(i9);
   i18 = HEAP32[i2 >> 2] | 0;
   do {
    if ((i18 | 0) == (i9 | 0)) {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 16 >> 2] & 1023](i18);
    } else {
     if ((i18 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 20 >> 2] & 1023](i18);
    }
   } while (0);
   i18 = HEAP32[i10 + 16 >> 2] | 0;
   if ((i18 | 0) == (i10 | 0)) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 16 >> 2] & 1023](i18);
    break;
   }
   if ((i18 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 20 >> 2] & 1023](i18);
  } else {
   do {
    if (i6) {
     HEAP32[i8 + 16 >> 2] = 0;
    } else {
     if ((i3 | 0) == (i4 | 0)) {
      i18 = i8;
      HEAP32[i8 + 16 >> 2] = i18;
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 12 >> 2] & 127](i3, i18);
      break;
     } else {
      HEAP32[i8 + 16 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] & 127](i3) | 0;
      break;
     }
    }
   } while (0);
   i18 = i8 + 24 | 0;
   i2 = HEAP32[i22 >> 2] | 0;
   HEAP32[i18 >> 2] = i2;
   if ((i2 | 0) != 0) {
    i12 = i2 | 0;
    HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
   }
   i12 = i7 + 16 | 0;
   HEAP32[i12 >> 2] = 0;
   i2 = __Znwj(40) | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i2 >> 2] = H_BASE + 1952;
    i1 = i2 + 8 | 0;
    i11 = i8 + 16 | 0;
    i14 = HEAP32[i11 >> 2] | 0;
    do {
     if ((i14 | 0) == 0) {
      HEAP32[i2 + 24 >> 2] = 0;
     } else {
      i16 = i8;
      if ((i14 | 0) == (i16 | 0)) {
       i21 = i1;
       HEAP32[i2 + 24 >> 2] = i21;
       FUNCTION_TABLE_vii[HEAP32[(HEAP32[i8 >> 2] | 0) + 12 >> 2] & 127](i16, i21);
       break;
      } else {
       HEAP32[i2 + 24 >> 2] = i14;
       HEAP32[i11 >> 2] = 0;
       break;
      }
     }
    } while (0);
    i11 = HEAP32[i18 >> 2] | 0;
    HEAP32[i18 >> 2] = 0;
    HEAP32[i2 + 32 >> 2] = i11;
   }
   HEAP32[i12 >> 2] = i2;
   __ZN3WTF16callOnMainThreadENSt3__18functionIFvvEEE(i7);
   i11 = HEAP32[i12 >> 2] | 0;
   do {
    if ((i11 | 0) == (i7 | 0)) {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 16 >> 2] & 1023](i11);
    } else {
     if ((i11 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 20 >> 2] & 1023](i11);
    }
   } while (0);
   i11 = HEAP32[i18 >> 2] | 0;
   do {
    if ((i11 | 0) != 0) {
     i12 = i11 | 0;
     i2 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
     if ((i2 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i11);
      break;
     } else {
      HEAP32[i12 >> 2] = i2;
      break;
     }
    }
   } while (0);
   i11 = HEAP32[i8 + 16 >> 2] | 0;
   if ((i11 | 0) == (i8 | 0)) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 16 >> 2] & 1023](i11);
    break;
   }
   if ((i11 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 20 >> 2] & 1023](i11);
  }
 } while (0);
 i8 = HEAP32[i22 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i22 = i8 | 0;
 i7 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
 if ((i7 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i8);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i22 >> 2] = i7;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore26IDBServerConnectionLevelDB11createIndexERNS_21IDBTransactionBackendERKNS_20CreateIndexOperationENSt3__18functionIFvN3WTF10PassRefPtrINS_16IDBDatabaseErrorEEEEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 136 | 0;
 i6 = i5 | 0;
 i7 = i5 + 24 | 0;
 i8 = i5 + 88 | 0;
 i9 = i5 + 112 | 0;
 i10 = i2 + 184 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 i12 = HEAP32[i10 + 4 >> 2] | 0;
 i10 = HEAP32[i1 + 20 >> 2] | 0;
 i13 = HEAP32[i1 + 12 >> 2] | 0;
 i14 = _i64Add(i11, i12, ~0, ~i11) | 0;
 i15 = tempRet0;
 i16 = (i14 >>> 22 | i15 << 10) ^ i14;
 i14 = (i15 >>> 22 | 0 << 10) ^ i15;
 i15 = _i64Add(i16, i14, ~(i16 << 13 | 0 >>> 19), ~(i14 << 13 | i16 >>> 19)) | 0;
 i16 = tempRet0;
 i14 = ___muldi3((i15 >>> 8 | i16 << 24) ^ i15, (i16 >>> 8 | 0 << 24) ^ i16, 9, 0) | 0;
 i16 = tempRet0;
 i15 = (i14 >>> 15 | i16 << 17) ^ i14;
 i14 = (i16 >>> 15 | 0 << 17) ^ i16;
 i16 = _i64Add(i15, i14, ~(i15 << 27 | 0 >>> 5), ~(i14 << 27 | i15 >>> 5)) | 0;
 i15 = (i16 >>> 31 | tempRet0 << 1) ^ i16;
 L1 : do {
  if ((i13 | 0) == 0) {
   i17 = 0;
  } else {
   i16 = i15 & i10;
   i14 = i13 + (i16 << 4) | 0;
   i18 = i14 | 0;
   i19 = HEAP32[i18 >> 2] | 0;
   i20 = HEAP32[i18 + 4 >> 2] | 0;
   if ((i19 | 0) == (i11 | 0) & (i20 | 0) == (i12 | 0)) {
    i21 = i14;
   } else {
    i14 = (i15 >>> 23) + ~i15 | 0;
    i18 = i14 << 12 ^ i14;
    i14 = i18 >>> 7 ^ i18;
    i18 = i14 << 2 ^ i14;
    i14 = i18 >>> 20 ^ i18 | 1;
    i18 = 0;
    i22 = i16;
    i16 = i20;
    i20 = i19;
    while (1) {
     if ((i20 | 0) == 0 & (i16 | 0) == 0) {
      i17 = 0;
      break L1;
     }
     i19 = (i18 | 0) == 0 ? i14 : i18;
     i23 = i19 + i22 & i10;
     i24 = i13 + (i23 << 4) | 0;
     i25 = i24 | 0;
     i26 = HEAP32[i25 >> 2] | 0;
     i27 = HEAP32[i25 + 4 >> 2] | 0;
     if ((i26 | 0) == (i11 | 0) & (i27 | 0) == (i12 | 0)) {
      i21 = i24;
      break;
     } else {
      i18 = i19;
      i22 = i23;
      i16 = i27;
      i20 = i26;
     }
    }
   }
   if ((i21 | 0) == 0) {
    i17 = 0;
    break;
   }
   i17 = HEAP32[i21 + 8 >> 2] | 0;
  }
 } while (0);
 i21 = i3 + 24 | 0;
 i12 = (HEAP32[i2 + 40 >> 2] | 0) + 16 | 0;
 i2 = i3 + 16 | 0;
 i11 = i3 + 32 | 0;
 i13 = __ZN7WebCore22IDBBackingStoreLevelDB11createIndexERNS_33IDBBackingStoreTransactionLevelDBExxxRKN3WTF6StringERKNS_10IDBKeyPathEbb(HEAP32[i1 + 8 >> 2] | 0, i17, HEAP32[i12 >> 2] | 0, HEAP32[i12 + 4 >> 2] | 0, HEAP32[i2 >> 2] | 0, HEAP32[i2 + 4 >> 2] | 0, HEAP32[i11 >> 2] | 0, HEAP32[i11 + 4 >> 2] | 0, i21 | 0, i3 + 40 | 0, (HEAP8[i3 + 60 | 0] & 1) != 0, (HEAP8[i3 + 61 | 0] & 1) != 0) | 0;
 i3 = HEAP32[i4 + 16 >> 2] | 0;
 i11 = (i3 | 0) == 0;
 if (i13) {
  do {
   if (i11) {
    HEAP32[i9 + 16 >> 2] = 0;
   } else {
    if ((i3 | 0) == (i4 | 0)) {
     i13 = i9;
     HEAP32[i9 + 16 >> 2] = i13;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 12 >> 2] & 127](i3, i13);
     break;
    } else {
     HEAP32[i9 + 16 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] & 127](i3) | 0;
     break;
    }
   }
  } while (0);
  i13 = i8 + 16 | 0;
  HEAP32[i13 >> 2] = 0;
  i2 = __Znwj(32) | 0;
  do {
   if ((i2 | 0) != 0) {
    HEAP32[i2 >> 2] = H_BASE + 2712;
    i12 = i9 + 16 | 0;
    i17 = HEAP32[i12 >> 2] | 0;
    if ((i17 | 0) == 0) {
     HEAP32[i2 + 24 >> 2] = 0;
     break;
    }
    i1 = i9;
    if ((i17 | 0) == (i1 | 0)) {
     i10 = i2 + 8 | 0;
     HEAP32[i2 + 24 >> 2] = i10;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 12 >> 2] & 127](i1, i10);
     break;
    } else {
     HEAP32[i2 + 24 >> 2] = i17;
     HEAP32[i12 >> 2] = 0;
     break;
    }
   }
  } while (0);
  HEAP32[i13 >> 2] = i2;
  __ZN3WTF16callOnMainThreadENSt3__18functionIFvvEEE(i8);
  i2 = HEAP32[i13 >> 2] | 0;
  do {
   if ((i2 | 0) == (i8 | 0)) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
   } else {
    if ((i2 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
   }
  } while (0);
  i2 = HEAP32[i9 + 16 >> 2] | 0;
  if ((i2 | 0) == (i9 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
   STACKTOP = i5;
   return;
  }
  if ((i2 | 0) == 0) {
   STACKTOP = i5;
   return;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
  STACKTOP = i5;
  return;
 }
 do {
  if (i11) {
   HEAP32[i7 + 16 >> 2] = 0;
  } else {
   if ((i3 | 0) == (i4 | 0)) {
    i2 = i7;
    HEAP32[i7 + 16 >> 2] = i2;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 12 >> 2] & 127](i3, i2);
    break;
   } else {
    HEAP32[i7 + 16 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] & 127](i3) | 0;
    break;
   }
  }
 } while (0);
 i3 = i7 + 24 | 0;
 __ZN7WebCore16IDBIndexMetadataC1ERKS0_(i3, i21);
 i21 = i6 + 16 | 0;
 HEAP32[i21 >> 2] = 0;
 i4 = __Znwj(72) | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i4 >> 2] = H_BASE + 2752;
  i11 = i4 + 8 | 0;
  i2 = i7 + 16 | 0;
  i9 = HEAP32[i2 >> 2] | 0;
  do {
   if ((i9 | 0) == 0) {
    HEAP32[i4 + 24 >> 2] = 0;
   } else {
    i8 = i7;
    if ((i9 | 0) == (i8 | 0)) {
     i13 = i11;
     HEAP32[i4 + 24 >> 2] = i13;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i7 >> 2] | 0) + 12 >> 2] & 127](i8, i13);
     break;
    } else {
     HEAP32[i4 + 24 >> 2] = i9;
     HEAP32[i2 >> 2] = 0;
     break;
    }
   }
  } while (0);
  __ZN7WebCore16IDBIndexMetadataC1ERKS0_(i4 + 32 | 0, i3);
 }
 HEAP32[i21 >> 2] = i4;
 __ZN3WTF16callOnMainThreadENSt3__18functionIFvvEEE(i6);
 i4 = HEAP32[i21 >> 2] | 0;
 do {
  if ((i4 | 0) == (i6 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 16 >> 2] & 1023](i4);
  } else {
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 20 >> 2] & 1023](i4);
  }
 } while (0);
 __ZN7WebCore16IDBIndexMetadataD1Ev(i3);
 i3 = HEAP32[i7 + 16 >> 2] | 0;
 if ((i3 | 0) == (i7 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 16 >> 2] & 1023](i3);
  STACKTOP = i5;
  return;
 }
 if ((i3 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 20 >> 2] & 1023](i3);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore26IDBServerConnectionLevelDB17commitTransactionExNSt3__18functionIFvbEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i6 = i5 | 0;
 i7 = i5 + 24 | 0;
 i8 = HEAP32[i1 + 20 >> 2] | 0;
 i9 = HEAP32[i1 + 12 >> 2] | 0;
 i1 = _i64Add(~0, ~i2, i2, i3) | 0;
 i10 = tempRet0;
 i11 = (i1 >>> 22 | i10 << 10) ^ i1;
 i1 = (i10 >>> 22 | 0 << 10) ^ i10;
 i10 = _i64Add(i11, i1, ~(i11 << 13 | 0 >>> 19), ~(i1 << 13 | i11 >>> 19)) | 0;
 i11 = tempRet0;
 i1 = ___muldi3((i10 >>> 8 | i11 << 24) ^ i10, (i11 >>> 8 | 0 << 24) ^ i11, 9, 0) | 0;
 i11 = tempRet0;
 i10 = (i1 >>> 15 | i11 << 17) ^ i1;
 i1 = (i11 >>> 15 | 0 << 17) ^ i11;
 i11 = _i64Add(i10, i1, ~(i10 << 27 | 0 >>> 5), ~(i1 << 27 | i10 >>> 5)) | 0;
 i10 = (i11 >>> 31 | tempRet0 << 1) ^ i11;
 L1 : do {
  if ((i9 | 0) != 0) {
   i11 = i8 & i10;
   i1 = i9 + (i11 << 4) | 0;
   i12 = i1 | 0;
   i13 = HEAP32[i12 >> 2] | 0;
   i14 = HEAP32[i12 + 4 >> 2] | 0;
   if ((i13 | 0) == (i2 | 0) & (i14 | 0) == (i3 | 0)) {
    i15 = i1;
   } else {
    i1 = (i10 >>> 23) + ~i10 | 0;
    i12 = i1 << 12 ^ i1;
    i1 = i12 >>> 7 ^ i12;
    i12 = i1 << 2 ^ i1;
    i1 = i12 >>> 20 ^ i12 | 1;
    i12 = 0;
    i16 = i11;
    i11 = i14;
    i14 = i13;
    while (1) {
     if ((i14 | 0) == 0 & (i11 | 0) == 0) {
      break L1;
     }
     i13 = (i12 | 0) == 0 ? i1 : i12;
     i17 = i13 + i16 & i8;
     i18 = i9 + (i17 << 4) | 0;
     i19 = i18 | 0;
     i20 = HEAP32[i19 >> 2] | 0;
     i21 = HEAP32[i19 + 4 >> 2] | 0;
     if ((i20 | 0) == (i2 | 0) & (i21 | 0) == (i3 | 0)) {
      i15 = i18;
      break;
     } else {
      i12 = i13;
      i16 = i17;
      i11 = i21;
      i14 = i20;
     }
    }
   }
   if ((i15 | 0) == 0) {
    break;
   }
   i14 = HEAP32[i15 + 8 >> 2] | 0;
   if ((i14 | 0) == 0) {
    break;
   }
   i11 = i14 | 0;
   HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
   i16 = __ZN7WebCore33IDBBackingStoreTransactionLevelDB6commitEv(i14) | 0;
   i12 = HEAP32[i4 + 16 >> 2] | 0;
   do {
    if ((i12 | 0) == 0) {
     HEAP32[i7 + 16 >> 2] = 0;
    } else {
     i1 = i4;
     if ((i12 | 0) == (i1 | 0)) {
      i20 = i7;
      HEAP32[i7 + 16 >> 2] = i20;
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 127](i1, i20);
      break;
     } else {
      HEAP32[i7 + 16 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i12 >> 2] | 0) + 8 >> 2] & 127](i12) | 0;
      break;
     }
    }
   } while (0);
   i12 = i7 + 24 | 0;
   i20 = i16 & 1;
   HEAP8[i12] = i20;
   i1 = i6 + 16 | 0;
   HEAP32[i1 >> 2] = 0;
   i21 = __Znwj(40) | 0;
   if ((i21 | 0) != 0) {
    HEAP32[i21 >> 2] = H_BASE + 1992;
    i17 = i21 + 8 | 0;
    i13 = i7 + 16 | 0;
    i18 = HEAP32[i13 >> 2] | 0;
    do {
     if ((i18 | 0) == 0) {
      HEAP32[i21 + 24 >> 2] = 0;
      i22 = i20;
     } else {
      i19 = i7;
      if ((i18 | 0) == (i19 | 0)) {
       i23 = i17;
       HEAP32[i21 + 24 >> 2] = i23;
       FUNCTION_TABLE_vii[HEAP32[(HEAP32[i7 >> 2] | 0) + 12 >> 2] & 127](i19, i23);
       i22 = HEAP8[i12] | 0;
       break;
      } else {
       HEAP32[i21 + 24 >> 2] = i18;
       HEAP32[i13 >> 2] = 0;
       i22 = i20;
       break;
      }
     }
    } while (0);
    HEAP8[i21 + 32 | 0] = i22 & 1;
   }
   HEAP32[i1 >> 2] = i21;
   __ZN3WTF16callOnMainThreadENSt3__18functionIFvvEEE(i6);
   i20 = HEAP32[i1 >> 2] | 0;
   i13 = i6;
   do {
    if ((i20 | 0) == (i13 | 0)) {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 16 >> 2] & 1023](i13);
    } else {
     if ((i20 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i20 >> 2] | 0) + 20 >> 2] & 1023](i20);
    }
   } while (0);
   i20 = HEAP32[i7 + 16 >> 2] | 0;
   i13 = i7;
   do {
    if ((i20 | 0) == (i13 | 0)) {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 16 >> 2] & 1023](i13);
    } else {
     if ((i20 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i20 >> 2] | 0) + 20 >> 2] & 1023](i20);
    }
   } while (0);
   i20 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i20 | 0) == 0) {
    __ZN7WebCore33IDBBackingStoreTransactionLevelDBD1Ev(i14);
    __ZN3WTF8fastFreeEPv(i14);
    STACKTOP = i5;
    return;
   } else {
    HEAP32[i11 >> 2] = i20;
    STACKTOP = i5;
    return;
   }
  }
 } while (0);
 i22 = __ZN7WebCore33IDBBackingStoreTransactionLevelDB6commitEv(0) | 0;
 i15 = HEAP32[i4 + 16 >> 2] | 0;
 do {
  if ((i15 | 0) == 0) {
   HEAP32[i7 + 16 >> 2] = 0;
  } else {
   if ((i15 | 0) == (i4 | 0)) {
    i3 = i7;
    HEAP32[i7 + 16 >> 2] = i3;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i15 >> 2] | 0) + 12 >> 2] & 127](i15, i3);
    break;
   } else {
    HEAP32[i7 + 16 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i15 >> 2] | 0) + 8 >> 2] & 127](i15) | 0;
    break;
   }
  }
 } while (0);
 i15 = i7 + 24 | 0;
 i4 = i22 & 1;
 HEAP8[i15] = i4;
 i22 = i6 + 16 | 0;
 HEAP32[i22 >> 2] = 0;
 i3 = __Znwj(40) | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i3 >> 2] = H_BASE + 1992;
  i2 = i3 + 8 | 0;
  i9 = i7 + 16 | 0;
  i8 = HEAP32[i9 >> 2] | 0;
  do {
   if ((i8 | 0) == 0) {
    HEAP32[i3 + 24 >> 2] = 0;
    i24 = i4;
   } else {
    i10 = i7;
    if ((i8 | 0) == (i10 | 0)) {
     i20 = i2;
     HEAP32[i3 + 24 >> 2] = i20;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i7 >> 2] | 0) + 12 >> 2] & 127](i10, i20);
     i24 = HEAP8[i15] | 0;
     break;
    } else {
     HEAP32[i3 + 24 >> 2] = i8;
     HEAP32[i9 >> 2] = 0;
     i24 = i4;
     break;
    }
   }
  } while (0);
  HEAP8[i3 + 32 | 0] = i24 & 1;
 }
 HEAP32[i22 >> 2] = i3;
 __ZN3WTF16callOnMainThreadENSt3__18functionIFvvEEE(i6);
 i3 = HEAP32[i22 >> 2] | 0;
 do {
  if ((i3 | 0) == (i6 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 16 >> 2] & 1023](i3);
  } else {
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 20 >> 2] & 1023](i3);
  }
 } while (0);
 i3 = HEAP32[i7 + 16 >> 2] | 0;
 if ((i3 | 0) == (i7 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 16 >> 2] & 1023](i3);
  STACKTOP = i5;
  return;
 }
 if ((i3 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 20 >> 2] & 1023](i3);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore26IDBServerConnectionLevelDB11deleteIndexERNS_21IDBTransactionBackendERKNS_20DeleteIndexOperationENSt3__18functionIFvN3WTF10PassRefPtrINS_16IDBDatabaseErrorEEEEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 136 | 0;
 i6 = i5 | 0;
 i7 = i5 + 24 | 0;
 i8 = i5 + 88 | 0;
 i9 = i5 + 112 | 0;
 i10 = i2 + 184 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 i12 = HEAP32[i10 + 4 >> 2] | 0;
 i10 = HEAP32[i1 + 20 >> 2] | 0;
 i13 = HEAP32[i1 + 12 >> 2] | 0;
 i14 = _i64Add(i11, i12, ~0, ~i11) | 0;
 i15 = tempRet0;
 i16 = (i14 >>> 22 | i15 << 10) ^ i14;
 i14 = (i15 >>> 22 | 0 << 10) ^ i15;
 i15 = _i64Add(i16, i14, ~(i16 << 13 | 0 >>> 19), ~(i14 << 13 | i16 >>> 19)) | 0;
 i16 = tempRet0;
 i14 = ___muldi3((i15 >>> 8 | i16 << 24) ^ i15, (i16 >>> 8 | 0 << 24) ^ i16, 9, 0) | 0;
 i16 = tempRet0;
 i15 = (i14 >>> 15 | i16 << 17) ^ i14;
 i14 = (i16 >>> 15 | 0 << 17) ^ i16;
 i16 = _i64Add(i15, i14, ~(i15 << 27 | 0 >>> 5), ~(i14 << 27 | i15 >>> 5)) | 0;
 i15 = (i16 >>> 31 | tempRet0 << 1) ^ i16;
 L1 : do {
  if ((i13 | 0) == 0) {
   i17 = 0;
  } else {
   i16 = i15 & i10;
   i14 = i13 + (i16 << 4) | 0;
   i18 = i14 | 0;
   i19 = HEAP32[i18 >> 2] | 0;
   i20 = HEAP32[i18 + 4 >> 2] | 0;
   if ((i19 | 0) == (i11 | 0) & (i20 | 0) == (i12 | 0)) {
    i21 = i14;
   } else {
    i14 = (i15 >>> 23) + ~i15 | 0;
    i18 = i14 << 12 ^ i14;
    i14 = i18 >>> 7 ^ i18;
    i18 = i14 << 2 ^ i14;
    i14 = i18 >>> 20 ^ i18 | 1;
    i18 = 0;
    i22 = i16;
    i16 = i20;
    i20 = i19;
    while (1) {
     if ((i20 | 0) == 0 & (i16 | 0) == 0) {
      i17 = 0;
      break L1;
     }
     i19 = (i18 | 0) == 0 ? i14 : i18;
     i23 = i19 + i22 & i10;
     i24 = i13 + (i23 << 4) | 0;
     i25 = i24 | 0;
     i26 = HEAP32[i25 >> 2] | 0;
     i27 = HEAP32[i25 + 4 >> 2] | 0;
     if ((i26 | 0) == (i11 | 0) & (i27 | 0) == (i12 | 0)) {
      i21 = i24;
      break;
     } else {
      i18 = i19;
      i22 = i23;
      i16 = i27;
      i20 = i26;
     }
    }
   }
   if ((i21 | 0) == 0) {
    i17 = 0;
    break;
   }
   i17 = HEAP32[i21 + 8 >> 2] | 0;
  }
 } while (0);
 i21 = i3 + 24 | 0;
 i12 = (HEAP32[i2 + 40 >> 2] | 0) + 16 | 0;
 i2 = i3 + 16 | 0;
 i11 = i3 + 32 | 0;
 i3 = __ZN7WebCore22IDBBackingStoreLevelDB11deleteIndexERNS_33IDBBackingStoreTransactionLevelDBExxx(HEAP32[i1 + 8 >> 2] | 0, i17, HEAP32[i12 >> 2] | 0, HEAP32[i12 + 4 >> 2] | 0, HEAP32[i2 >> 2] | 0, HEAP32[i2 + 4 >> 2] | 0, HEAP32[i11 >> 2] | 0, HEAP32[i11 + 4 >> 2] | 0) | 0;
 i11 = HEAP32[i4 + 16 >> 2] | 0;
 i2 = (i11 | 0) == 0;
 if (i3) {
  do {
   if (i2) {
    HEAP32[i9 + 16 >> 2] = 0;
   } else {
    if ((i11 | 0) == (i4 | 0)) {
     i3 = i9;
     HEAP32[i9 + 16 >> 2] = i3;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i11 >> 2] | 0) + 12 >> 2] & 127](i11, i3);
     break;
    } else {
     HEAP32[i9 + 16 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i11 >> 2] | 0) + 8 >> 2] & 127](i11) | 0;
     break;
    }
   }
  } while (0);
  i3 = i8 + 16 | 0;
  HEAP32[i3 >> 2] = 0;
  i12 = __Znwj(32) | 0;
  do {
   if ((i12 | 0) != 0) {
    HEAP32[i12 >> 2] = H_BASE + 2632;
    i17 = i9 + 16 | 0;
    i1 = HEAP32[i17 >> 2] | 0;
    if ((i1 | 0) == 0) {
     HEAP32[i12 + 24 >> 2] = 0;
     break;
    }
    i13 = i9;
    if ((i1 | 0) == (i13 | 0)) {
     i10 = i12 + 8 | 0;
     HEAP32[i12 + 24 >> 2] = i10;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 12 >> 2] & 127](i13, i10);
     break;
    } else {
     HEAP32[i12 + 24 >> 2] = i1;
     HEAP32[i17 >> 2] = 0;
     break;
    }
   }
  } while (0);
  HEAP32[i3 >> 2] = i12;
  __ZN3WTF16callOnMainThreadENSt3__18functionIFvvEEE(i8);
  i12 = HEAP32[i3 >> 2] | 0;
  do {
   if ((i12 | 0) == (i8 | 0)) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 16 >> 2] & 1023](i12);
   } else {
    if ((i12 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 20 >> 2] & 1023](i12);
   }
  } while (0);
  i12 = HEAP32[i9 + 16 >> 2] | 0;
  if ((i12 | 0) == (i9 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 16 >> 2] & 1023](i12);
   STACKTOP = i5;
   return;
  }
  if ((i12 | 0) == 0) {
   STACKTOP = i5;
   return;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 20 >> 2] & 1023](i12);
  STACKTOP = i5;
  return;
 }
 do {
  if (i2) {
   HEAP32[i7 + 16 >> 2] = 0;
  } else {
   if ((i11 | 0) == (i4 | 0)) {
    i12 = i7;
    HEAP32[i7 + 16 >> 2] = i12;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i11 >> 2] | 0) + 12 >> 2] & 127](i11, i12);
    break;
   } else {
    HEAP32[i7 + 16 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i11 >> 2] | 0) + 8 >> 2] & 127](i11) | 0;
    break;
   }
  }
 } while (0);
 i11 = i7 + 24 | 0;
 __ZN7WebCore16IDBIndexMetadataC1ERKS0_(i11, i21);
 i21 = i6 + 16 | 0;
 HEAP32[i21 >> 2] = 0;
 i4 = __Znwj(72) | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i4 >> 2] = H_BASE + 2672;
  i2 = i4 + 8 | 0;
  i12 = i7 + 16 | 0;
  i9 = HEAP32[i12 >> 2] | 0;
  do {
   if ((i9 | 0) == 0) {
    HEAP32[i4 + 24 >> 2] = 0;
   } else {
    i8 = i7;
    if ((i9 | 0) == (i8 | 0)) {
     i3 = i2;
     HEAP32[i4 + 24 >> 2] = i3;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i7 >> 2] | 0) + 12 >> 2] & 127](i8, i3);
     break;
    } else {
     HEAP32[i4 + 24 >> 2] = i9;
     HEAP32[i12 >> 2] = 0;
     break;
    }
   }
  } while (0);
  __ZN7WebCore16IDBIndexMetadataC1ERKS0_(i4 + 32 | 0, i11);
 }
 HEAP32[i21 >> 2] = i4;
 __ZN3WTF16callOnMainThreadENSt3__18functionIFvvEEE(i6);
 i4 = HEAP32[i21 >> 2] | 0;
 do {
  if ((i4 | 0) == (i6 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 16 >> 2] & 1023](i4);
  } else {
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 20 >> 2] & 1023](i4);
  }
 } while (0);
 __ZN7WebCore16IDBIndexMetadataD1Ev(i11);
 i11 = HEAP32[i7 + 16 >> 2] | 0;
 if ((i11 | 0) == (i7 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 16 >> 2] & 1023](i11);
  STACKTOP = i5;
  return;
 }
 if ((i11 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 20 >> 2] & 1023](i11);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore26IDBServerConnectionLevelDB33getOrEstablishIDBDatabaseMetadataENSt3__18functionIFvRKNS_19IDBDatabaseMetadataEbEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i4 = i3 | 0;
 i5 = i3 + 24 | 0;
 i6 = i1 | 0;
 if ((i1 | 0) == 0) {
  i7 = abort(8) | 0;
  i8 = i5 | 0;
  HEAP32[i8 >> 2] = i6;
  i9 = i5 + 4 | 0;
  HEAP32[i9 >> 2] = 0;
  i10 = i5 + 8 | 0;
  i11 = HEAP32[i2 + 16 >> 2] | 0;
  do {
   if ((i11 | 0) == 0) {
    HEAP32[i5 + 24 >> 2] = 0;
   } else {
    if ((i11 | 0) == (i2 | 0)) {
     i12 = i10;
     HEAP32[i5 + 24 >> 2] = i12;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i11 >> 2] | 0) + 12 >> 2] & 127](i11, i12);
     break;
    } else {
     HEAP32[i5 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i11 >> 2] | 0) + 8 >> 2] & 127](i11) | 0;
     break;
    }
   }
  } while (0);
  i11 = i4 + 16 | 0;
  HEAP32[i11 >> 2] = 0;
  i12 = __Znwj(40) | 0;
  do {
   if ((i12 | 0) != 0) {
    HEAP32[i12 >> 2] = H_BASE + 1672;
    i13 = HEAP32[i8 >> 2] | 0;
    HEAP32[i8 >> 2] = 0;
    HEAP32[i12 + 8 >> 2] = i13;
    HEAP32[i12 + 12 >> 2] = HEAP32[i9 >> 2];
    i13 = i5 + 24 | 0;
    i14 = HEAP32[i13 >> 2] | 0;
    if ((i14 | 0) == 0) {
     HEAP32[i12 + 32 >> 2] = 0;
     break;
    }
    i15 = i10;
    if ((i14 | 0) == (i15 | 0)) {
     i16 = i12 + 16 | 0;
     HEAP32[i12 + 32 >> 2] = i16;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i10 >> 2] | 0) + 12 >> 2] & 127](i15, i16);
     break;
    } else {
     HEAP32[i12 + 32 >> 2] = i14;
     HEAP32[i13 >> 2] = 0;
     break;
    }
   }
  } while (0);
  HEAP32[i11 >> 2] = i12;
  __ZN7WebCore22IDBBackingStoreLevelDB33getOrEstablishIDBDatabaseMetadataERKN3WTF6StringENSt3__18functionIFvRKNS_19IDBDatabaseMetadataEbEEE(i7, 68, i4);
  i7 = HEAP32[i11 >> 2] | 0;
  do {
   if ((i7 | 0) == (i4 | 0)) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 16 >> 2] & 1023](i7);
   } else {
    if ((i7 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 20 >> 2] & 1023](i7);
   }
  } while (0);
  i7 = HEAP32[i5 + 24 >> 2] | 0;
  do {
   if ((i7 | 0) == (i10 | 0)) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 16 >> 2] & 1023](i7);
   } else {
    if ((i7 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 20 >> 2] & 1023](i7);
   }
  } while (0);
  i7 = HEAP32[i8 >> 2] | 0;
  if ((i7 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i8 = i7 + 4 | 0;
  i7 = i8 | 0;
  i10 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i10 | 0) != 0) {
   HEAP32[i7 >> 2] = i10;
   STACKTOP = i3;
   return;
  }
  i10 = i8 - 4 | 0;
  if ((i10 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 1023](i10);
  STACKTOP = i3;
  return;
 }
 i10 = i1 + 4 | 0;
 i8 = HEAP32[i10 >> 2] | 0;
 i7 = HEAP32[i1 + 8 >> 2] | 0;
 i11 = i1 + 68 | 0;
 i12 = i5 | 0;
 HEAP32[i12 >> 2] = i6;
 HEAP32[i10 >> 2] = i8 + 2;
 i8 = i5 + 4 | 0;
 HEAP32[i8 >> 2] = i1;
 i10 = i5 + 8 | 0;
 i6 = HEAP32[i2 + 16 >> 2] | 0;
 do {
  if ((i6 | 0) == 0) {
   HEAP32[i5 + 24 >> 2] = 0;
  } else {
   i9 = i2;
   if ((i6 | 0) == (i9 | 0)) {
    i13 = i10;
    HEAP32[i5 + 24 >> 2] = i13;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 127](i9, i13);
    break;
   } else {
    HEAP32[i5 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] & 127](i6) | 0;
    break;
   }
  }
 } while (0);
 i6 = i4 + 16 | 0;
 HEAP32[i6 >> 2] = 0;
 i2 = __Znwj(40) | 0;
 do {
  if ((i2 | 0) != 0) {
   HEAP32[i2 >> 2] = H_BASE + 1672;
   i13 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   HEAP32[i2 + 8 >> 2] = i13;
   HEAP32[i2 + 12 >> 2] = HEAP32[i8 >> 2];
   i13 = i5 + 24 | 0;
   i9 = HEAP32[i13 >> 2] | 0;
   if ((i9 | 0) == 0) {
    HEAP32[i2 + 32 >> 2] = 0;
    break;
   }
   i14 = i10;
   if ((i9 | 0) == (i14 | 0)) {
    i16 = i2 + 16 | 0;
    HEAP32[i2 + 32 >> 2] = i16;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i10 >> 2] | 0) + 12 >> 2] & 127](i14, i16);
    break;
   } else {
    HEAP32[i2 + 32 >> 2] = i9;
    HEAP32[i13 >> 2] = 0;
    break;
   }
  }
 } while (0);
 HEAP32[i6 >> 2] = i2;
 __ZN7WebCore22IDBBackingStoreLevelDB33getOrEstablishIDBDatabaseMetadataERKN3WTF6StringENSt3__18functionIFvRKNS_19IDBDatabaseMetadataEbEEE(i7, i11, i4);
 i11 = HEAP32[i6 >> 2] | 0;
 i6 = i4;
 do {
  if ((i11 | 0) == (i6 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 16 >> 2] & 1023](i6);
  } else {
   if ((i11 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 20 >> 2] & 1023](i11);
  }
 } while (0);
 i11 = HEAP32[i5 + 24 >> 2] | 0;
 i5 = i10;
 do {
  if ((i11 | 0) == (i5 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 16 >> 2] & 1023](i5);
  } else {
   if ((i11 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 20 >> 2] & 1023](i11);
  }
 } while (0);
 i11 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i12 = i11 + 4 | 0;
   i5 = i12 | 0;
   i10 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) != 0) {
    HEAP32[i5 >> 2] = i10;
    break;
   }
   i10 = i12 - 4 | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 1023](i10);
  }
 } while (0);
 i11 = i1 + 4 | 0;
 i1 = i11 | 0;
 i10 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i10 | 0) != 0) {
  HEAP32[i1 >> 2] = i10;
  STACKTOP = i3;
  return;
 }
 i10 = i11 - 4 | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 1023](i10);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore26IDBServerConnectionLevelDB14deleteDatabaseERKN3WTF6StringENSt3__18functionIFvbEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i5 = i4 | 0;
 i6 = i4 + 24 | 0;
 i7 = i1 | 0;
 if ((i1 | 0) == 0) {
  i8 = abort(8) | 0;
  i9 = i6 | 0;
  HEAP32[i9 >> 2] = i7;
  i10 = i6 + 4 | 0;
  HEAP32[i10 >> 2] = 0;
  i11 = i6 + 8 | 0;
  i12 = HEAP32[i3 + 16 >> 2] | 0;
  do {
   if ((i12 | 0) == 0) {
    HEAP32[i6 + 24 >> 2] = 0;
   } else {
    if ((i12 | 0) == (i3 | 0)) {
     i13 = i11;
     HEAP32[i6 + 24 >> 2] = i13;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i12 >> 2] | 0) + 12 >> 2] & 127](i12, i13);
     break;
    } else {
     HEAP32[i6 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i12 >> 2] | 0) + 8 >> 2] & 127](i12) | 0;
     break;
    }
   }
  } while (0);
  i12 = i5 + 16 | 0;
  HEAP32[i12 >> 2] = 0;
  i13 = __Znwj(40) | 0;
  do {
   if ((i13 | 0) != 0) {
    HEAP32[i13 >> 2] = H_BASE + 2192;
    i14 = HEAP32[i9 >> 2] | 0;
    HEAP32[i9 >> 2] = 0;
    HEAP32[i13 + 8 >> 2] = i14;
    HEAP32[i13 + 12 >> 2] = HEAP32[i10 >> 2];
    i14 = i6 + 24 | 0;
    i15 = HEAP32[i14 >> 2] | 0;
    if ((i15 | 0) == 0) {
     HEAP32[i13 + 32 >> 2] = 0;
     break;
    }
    i16 = i11;
    if ((i15 | 0) == (i16 | 0)) {
     i17 = i13 + 16 | 0;
     HEAP32[i13 + 32 >> 2] = i17;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i11 >> 2] | 0) + 12 >> 2] & 127](i16, i17);
     break;
    } else {
     HEAP32[i13 + 32 >> 2] = i15;
     HEAP32[i14 >> 2] = 0;
     break;
    }
   }
  } while (0);
  HEAP32[i12 >> 2] = i13;
  __ZN7WebCore22IDBBackingStoreLevelDB14deleteDatabaseERKN3WTF6StringENSt3__18functionIFvbEEE(i8, i2, i5);
  i8 = HEAP32[i12 >> 2] | 0;
  do {
   if ((i8 | 0) == (i5 | 0)) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 16 >> 2] & 1023](i8);
   } else {
    if ((i8 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 20 >> 2] & 1023](i8);
   }
  } while (0);
  i8 = HEAP32[i6 + 24 >> 2] | 0;
  do {
   if ((i8 | 0) == (i11 | 0)) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 16 >> 2] & 1023](i8);
   } else {
    if ((i8 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 20 >> 2] & 1023](i8);
   }
  } while (0);
  i8 = HEAP32[i9 >> 2] | 0;
  if ((i8 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i9 = i8 + 4 | 0;
  i8 = i9 | 0;
  i11 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
  if ((i11 | 0) != 0) {
   HEAP32[i8 >> 2] = i11;
   STACKTOP = i4;
   return;
  }
  i11 = i9 - 4 | 0;
  if ((i11 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 1023](i11);
  STACKTOP = i4;
  return;
 }
 i11 = i1 + 4 | 0;
 i9 = HEAP32[i11 >> 2] | 0;
 i8 = HEAP32[i1 + 8 >> 2] | 0;
 i12 = i6 | 0;
 HEAP32[i12 >> 2] = i7;
 HEAP32[i11 >> 2] = i9 + 2;
 i9 = i6 + 4 | 0;
 HEAP32[i9 >> 2] = i1;
 i11 = i6 + 8 | 0;
 i7 = HEAP32[i3 + 16 >> 2] | 0;
 do {
  if ((i7 | 0) == 0) {
   HEAP32[i6 + 24 >> 2] = 0;
  } else {
   i13 = i3;
   if ((i7 | 0) == (i13 | 0)) {
    i10 = i11;
    HEAP32[i6 + 24 >> 2] = i10;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 12 >> 2] & 127](i13, i10);
    break;
   } else {
    HEAP32[i6 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 8 >> 2] & 127](i7) | 0;
    break;
   }
  }
 } while (0);
 i7 = i5 + 16 | 0;
 HEAP32[i7 >> 2] = 0;
 i3 = __Znwj(40) | 0;
 do {
  if ((i3 | 0) != 0) {
   HEAP32[i3 >> 2] = H_BASE + 2192;
   i10 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   HEAP32[i3 + 8 >> 2] = i10;
   HEAP32[i3 + 12 >> 2] = HEAP32[i9 >> 2];
   i10 = i6 + 24 | 0;
   i13 = HEAP32[i10 >> 2] | 0;
   if ((i13 | 0) == 0) {
    HEAP32[i3 + 32 >> 2] = 0;
    break;
   }
   i14 = i11;
   if ((i13 | 0) == (i14 | 0)) {
    i15 = i3 + 16 | 0;
    HEAP32[i3 + 32 >> 2] = i15;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i11 >> 2] | 0) + 12 >> 2] & 127](i14, i15);
    break;
   } else {
    HEAP32[i3 + 32 >> 2] = i13;
    HEAP32[i10 >> 2] = 0;
    break;
   }
  }
 } while (0);
 HEAP32[i7 >> 2] = i3;
 __ZN7WebCore22IDBBackingStoreLevelDB14deleteDatabaseERKN3WTF6StringENSt3__18functionIFvbEEE(i8, i2, i5);
 i2 = HEAP32[i7 >> 2] | 0;
 i7 = i5;
 do {
  if ((i2 | 0) == (i7 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 16 >> 2] & 1023](i7);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
  }
 } while (0);
 i2 = HEAP32[i6 + 24 >> 2] | 0;
 i6 = i11;
 do {
  if ((i2 | 0) == (i6 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 16 >> 2] & 1023](i6);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
  }
 } while (0);
 i2 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i12 = i2 + 4 | 0;
   i6 = i12 | 0;
   i11 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) != 0) {
    HEAP32[i6 >> 2] = i11;
    break;
   }
   i11 = i12 - 4 | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 1023](i11);
  }
 } while (0);
 i2 = i1 + 4 | 0;
 i1 = i2 | 0;
 i11 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i11 | 0) != 0) {
  HEAP32[i1 >> 2] = i11;
  STACKTOP = i4;
  return;
 }
 i11 = i2 - 4 | 0;
 if ((i11 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 1023](i11);
 STACKTOP = i4;
 return;
}
function ___udivmoddi4(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0;
 i6 = i1;
 i7 = i2;
 i8 = i7;
 i9 = i3;
 i10 = i4;
 i11 = i10;
 if ((i8 | 0) == 0) {
  i12 = (i5 | 0) != 0;
  if ((i11 | 0) == 0) {
   if (i12) {
    HEAP32[i5 >> 2] = (i6 >>> 0) % (i9 >>> 0);
    HEAP32[i5 + 4 >> 2] = 0;
   }
   i13 = 0;
   i14 = (i6 >>> 0) / (i9 >>> 0) >>> 0;
   return (tempRet0 = i13, i14) | 0;
  } else {
   if (!i12) {
    i13 = 0;
    i14 = 0;
    return (tempRet0 = i13, i14) | 0;
   }
   HEAP32[i5 >> 2] = i1 & -1;
   HEAP32[i5 + 4 >> 2] = i2 & 0;
   i13 = 0;
   i14 = 0;
   return (tempRet0 = i13, i14) | 0;
  }
 }
 i12 = (i11 | 0) == 0;
 do {
  if ((i9 | 0) == 0) {
   if (i12) {
    if ((i5 | 0) != 0) {
     HEAP32[i5 >> 2] = (i8 >>> 0) % (i9 >>> 0);
     HEAP32[i5 + 4 >> 2] = 0;
    }
    i13 = 0;
    i14 = (i8 >>> 0) / (i9 >>> 0) >>> 0;
    return (tempRet0 = i13, i14) | 0;
   }
   if ((i6 | 0) == 0) {
    if ((i5 | 0) != 0) {
     HEAP32[i5 >> 2] = 0;
     HEAP32[i5 + 4 >> 2] = (i8 >>> 0) % (i11 >>> 0);
    }
    i13 = 0;
    i14 = (i8 >>> 0) / (i11 >>> 0) >>> 0;
    return (tempRet0 = i13, i14) | 0;
   }
   i15 = i11 - 1 | 0;
   if ((i15 & i11 | 0) == 0) {
    if ((i5 | 0) != 0) {
     HEAP32[i5 >> 2] = i1 & -1;
     HEAP32[i5 + 4 >> 2] = i15 & i8 | i2 & 0;
    }
    i13 = 0;
    i14 = i8 >>> ((_llvm_cttz_i32(i11 | 0) | 0) >>> 0);
    return (tempRet0 = i13, i14) | 0;
   }
   i15 = (_llvm_ctlz_i32(i11 | 0) | 0) - (_llvm_ctlz_i32(i8 | 0) | 0) | 0;
   if (i15 >>> 0 <= 30) {
    i16 = i15 + 1 | 0;
    i17 = 31 - i15 | 0;
    i18 = i16;
    i19 = i8 << i17 | i6 >>> (i16 >>> 0);
    i20 = i8 >>> (i16 >>> 0);
    i21 = 0;
    i22 = i6 << i17;
    break;
   }
   if ((i5 | 0) == 0) {
    i13 = 0;
    i14 = 0;
    return (tempRet0 = i13, i14) | 0;
   }
   HEAP32[i5 >> 2] = i1 & -1;
   HEAP32[i5 + 4 >> 2] = i7 | i2 & 0;
   i13 = 0;
   i14 = 0;
   return (tempRet0 = i13, i14) | 0;
  } else {
   if (!i12) {
    i17 = (_llvm_ctlz_i32(i11 | 0) | 0) - (_llvm_ctlz_i32(i8 | 0) | 0) | 0;
    if (i17 >>> 0 <= 31) {
     i16 = i17 + 1 | 0;
     i15 = 31 - i17 | 0;
     i23 = i17 - 31 >> 31;
     i18 = i16;
     i19 = i6 >>> (i16 >>> 0) & i23 | i8 << i15;
     i20 = i8 >>> (i16 >>> 0) & i23;
     i21 = 0;
     i22 = i6 << i15;
     break;
    }
    if ((i5 | 0) == 0) {
     i13 = 0;
     i14 = 0;
     return (tempRet0 = i13, i14) | 0;
    }
    HEAP32[i5 >> 2] = i1 & -1;
    HEAP32[i5 + 4 >> 2] = i7 | i2 & 0;
    i13 = 0;
    i14 = 0;
    return (tempRet0 = i13, i14) | 0;
   }
   i15 = i9 - 1 | 0;
   if ((i15 & i9 | 0) != 0) {
    i23 = (_llvm_ctlz_i32(i9 | 0) | 0) + 33 - (_llvm_ctlz_i32(i8 | 0) | 0) | 0;
    i16 = 64 - i23 | 0;
    i17 = 32 - i23 | 0;
    i24 = i17 >> 31;
    i25 = i23 - 32 | 0;
    i26 = i25 >> 31;
    i18 = i23;
    i19 = i17 - 1 >> 31 & i8 >>> (i25 >>> 0) | (i8 << i17 | i6 >>> (i23 >>> 0)) & i26;
    i20 = i26 & i8 >>> (i23 >>> 0);
    i21 = i6 << i16 & i24;
    i22 = (i8 << i16 | i6 >>> (i25 >>> 0)) & i24 | i6 << i17 & i23 - 33 >> 31;
    break;
   }
   if ((i5 | 0) != 0) {
    HEAP32[i5 >> 2] = i15 & i6;
    HEAP32[i5 + 4 >> 2] = 0;
   }
   if ((i9 | 0) == 1) {
    i13 = i7 | i2 & 0;
    i14 = i1 & -1 | 0;
    return (tempRet0 = i13, i14) | 0;
   } else {
    i15 = _llvm_cttz_i32(i9 | 0) | 0;
    i13 = i8 >>> (i15 >>> 0) | 0;
    i14 = i8 << 32 - i15 | i6 >>> (i15 >>> 0) | 0;
    return (tempRet0 = i13, i14) | 0;
   }
  }
 } while (0);
 if ((i18 | 0) == 0) {
  i27 = i22;
  i28 = i21;
  i29 = i20;
  i30 = i19;
  i31 = 0;
  i32 = 0;
 } else {
  i6 = i3 & -1 | 0;
  i3 = i10 | i4 & 0;
  i4 = _i64Add(i6, i3, -1, -1) | 0;
  i10 = tempRet0;
  i8 = i22;
  i22 = i21;
  i21 = i20;
  i20 = i19;
  i19 = i18;
  i18 = 0;
  while (1) {
   i33 = i22 >>> 31 | i8 << 1;
   i34 = i18 | i22 << 1;
   i9 = i20 << 1 | i8 >>> 31 | 0;
   i1 = i20 >>> 31 | i21 << 1 | 0;
   _i64Subtract(i4, i10, i9, i1) | 0;
   i2 = tempRet0;
   i7 = i2 >> 31 | ((i2 | 0) < 0 ? -1 : 0) << 1;
   i35 = i7 & 1;
   i36 = _i64Subtract(i9, i1, i7 & i6, (((i2 | 0) < 0 ? -1 : 0) >> 31 | ((i2 | 0) < 0 ? -1 : 0) << 1) & i3) | 0;
   i37 = tempRet0;
   i2 = i19 - 1 | 0;
   if ((i2 | 0) == 0) {
    break;
   } else {
    i8 = i33;
    i22 = i34;
    i21 = i37;
    i20 = i36;
    i19 = i2;
    i18 = i35;
   }
  }
  i27 = i33;
  i28 = i34;
  i29 = i37;
  i30 = i36;
  i31 = 0;
  i32 = i35;
 }
 i35 = i28;
 i28 = 0;
 if ((i5 | 0) != 0) {
  HEAP32[i5 >> 2] = i30;
  HEAP32[i5 + 4 >> 2] = i29;
 }
 i13 = (i35 | 0) >>> 31 | (i27 | i28) << 1 | (i28 << 1 | i35 >>> 31) & 0 | i31;
 i14 = (i35 << 1 | 0 >>> 31) & -2 | i32;
 return (tempRet0 = i13, i14) | 0;
}
function __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E3addINS_22IdentityHashTranslatorIS8_EERKxRKS4_EENS_18HashTableAddResultINS_17HashTableIteratorIxS4_S6_S8_SE_SB_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i6 = i5 | 0;
 i7 = i2 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i9 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i9 | 0) == 0) {
   i10 = 8;
  } else {
   i11 = i9 << 1;
   i10 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i11 | 0) ? i9 : i11;
  }
  __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E6rehashEiPS4_(i2, i10, 0) | 0;
  i12 = HEAP32[i7 >> 2] | 0;
 } else {
  i12 = i8;
 }
 i8 = HEAP32[i2 + 8 >> 2] | 0;
 i10 = HEAP32[i3 >> 2] | 0;
 i11 = HEAP32[i3 + 4 >> 2] | 0;
 i3 = _i64Add(i10, i11, ~0, ~i10) | 0;
 i9 = tempRet0;
 i13 = (i3 >>> 22 | i9 << 10) ^ i3;
 i3 = (i9 >>> 22 | 0 << 10) ^ i9;
 i9 = _i64Add(i13, i3, ~(i13 << 13 | 0 >>> 19), ~(i3 << 13 | i13 >>> 19)) | 0;
 i13 = tempRet0;
 i3 = ___muldi3((i9 >>> 8 | i13 << 24) ^ i9, (i13 >>> 8 | 0 << 24) ^ i13, 9, 0) | 0;
 i13 = tempRet0;
 i9 = (i3 >>> 15 | i13 << 17) ^ i3;
 i3 = (i13 >>> 15 | 0 << 17) ^ i13;
 i13 = _i64Add(i9, i3, ~(i9 << 27 | 0 >>> 5), ~(i3 << 27 | i9 >>> 5)) | 0;
 i9 = (i13 >>> 31 | tempRet0 << 1) ^ i13;
 i13 = i9 & i8;
 i3 = i12 + (i13 * 48 & -1) | 0;
 i14 = i3 | 0;
 i15 = HEAP32[i14 >> 2] | 0;
 i16 = HEAP32[i14 + 4 >> 2] | 0;
 do {
  if ((i15 | 0) == 0 & (i16 | 0) == 0) {
   i17 = i3;
   i18 = 11;
  } else {
   i14 = (i9 >>> 23) + ~i9 | 0;
   i19 = i14 << 12 ^ i14;
   i14 = i19 >>> 7 ^ i19;
   i19 = i14 << 2 ^ i14;
   i14 = i19 >>> 20 ^ i19 | 1;
   i19 = 0;
   i20 = 0;
   i21 = i13;
   i22 = i3;
   i23 = i16;
   i24 = i15;
   while (1) {
    if ((i24 | 0) == (i10 | 0) & (i23 | 0) == (i11 | 0)) {
     i18 = 8;
     break;
    }
    i25 = (i24 | 0) == (-1 | 0) & (i23 | 0) == (-1 | 0) ? i22 : i20;
    i26 = (i19 | 0) == 0 ? i14 : i19;
    i27 = i26 + i21 & i8;
    i28 = i12 + (i27 * 48 & -1) | 0;
    i29 = i28 | 0;
    i30 = HEAP32[i29 >> 2] | 0;
    i31 = HEAP32[i29 + 4 >> 2] | 0;
    if ((i30 | 0) == 0 & (i31 | 0) == 0) {
     i18 = 10;
     break;
    } else {
     i19 = i26;
     i20 = i25;
     i21 = i27;
     i22 = i28;
     i23 = i31;
     i24 = i30;
    }
   }
   if ((i18 | 0) == 8) {
    i24 = i12 + ((HEAP32[i2 + 4 >> 2] | 0) * 48 & -1) | 0;
    i23 = i1;
    HEAP32[i23 >> 2] = i22;
    HEAP32[i23 + 4 >> 2] = i24;
    HEAP8[i1 + 8 | 0] = 0;
    STACKTOP = i5;
    return;
   } else if ((i18 | 0) == 10) {
    if ((i25 | 0) == 0) {
     i17 = i28;
     i18 = 11;
     break;
    }
    _memset(i6 + 16 | 0, 0, 16) | 0;
    i24 = i25 | 0;
    HEAP32[i24 >> 2] = 0;
    HEAP32[i24 + 4 >> 2] = 0;
    HEAP32[i6 >> 2] = 0;
    HEAP32[i25 + 8 >> 2] = 0;
    HEAP32[i25 + 24 >> 2] = 0;
    HEAP32[i6 + 20 >> 2] = 0;
    _memset(i25 + 28 | 0, 0, 16) | 0;
    HEAP32[i6 + 32 >> 2] = 0;
    HEAP32[i25 + 32 >> 2] = 0;
    HEAP32[i6 + 24 >> 2] = 0;
    HEAP32[i25 + 36 >> 2] = 0;
    HEAP32[i6 + 28 >> 2] = 0;
    HEAP8[i25 + 44 | 0] = 0;
    HEAP8[i25 + 45 | 0] = 0;
    __ZN7WebCore16IDBIndexMetadataD1Ev(i6);
    i24 = i2 + 16 | 0;
    HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) - 1;
    i32 = i25;
    i33 = i24;
    break;
   }
  }
 } while (0);
 if ((i18 | 0) == 11) {
  i32 = i17;
  i33 = i2 + 16 | 0;
 }
 i17 = i4 | 0;
 i18 = HEAP32[i17 + 4 >> 2] | 0;
 i25 = i32 | 0;
 HEAP32[i25 >> 2] = HEAP32[i17 >> 2];
 HEAP32[i25 + 4 >> 2] = i18;
 __ZN7WebCore16IDBIndexMetadataaSERKS0_(i32 + 8 | 0, i4 + 8 | 0) | 0;
 i4 = i2 + 12 | 0;
 i18 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i18;
 i4 = i2 + 4 | 0;
 i25 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i33 >> 2] | 0) + i18 << 1 | 0) < (i25 | 0)) {
  i34 = i32;
  i35 = i25;
 } else {
  if ((i25 | 0) == 0) {
   i36 = 8;
  } else {
   i33 = i25 << 1;
   i36 = (i18 * 6 & -1 | 0) < (i33 | 0) ? i25 : i33;
  }
  i33 = __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E6rehashEiPS4_(i2, i36, i32) | 0;
  i34 = i33;
  i35 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i7 >> 2] | 0) + (i35 * 48 & -1) | 0;
 i35 = i1;
 HEAP32[i35 >> 2] = i34;
 HEAP32[i35 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 STACKTOP = i5;
 return;
}
function __ZN3WTF9HashTableIxNS_12KeyValuePairIxNS_6RefPtrIN7WebCore28IDBBackingStoreCursorLevelDBEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIyEENS_7HashMapIxS5_SA_NS_10HashTraitsIxEENSC_IS5_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKxNS_10PassRefPtrIS4_EEEENS_18HashTableAddResultINS_17HashTableIteratorIxS6_S8_SA_SG_SD_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i7 | 0) == 0) {
   i8 = 8;
  } else {
   i9 = i7 << 1;
   i8 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i9 | 0) ? i7 : i9;
  }
  __ZN3WTF9HashTableIxNS_12KeyValuePairIxNS_6RefPtrIN7WebCore28IDBBackingStoreCursorLevelDBEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIyEENS_7HashMapIxS5_SA_NS_10HashTraitsIxEENSC_IS5_EEE18KeyValuePairTraitsESD_E6rehashEiPS6_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i9 = HEAP32[i3 + 4 >> 2] | 0;
 i7 = _i64Add(i8, i9, ~0, ~i8) | 0;
 i11 = tempRet0;
 i12 = (i7 >>> 22 | i11 << 10) ^ i7;
 i7 = (i11 >>> 22 | 0 << 10) ^ i11;
 i11 = _i64Add(i12, i7, ~(i12 << 13 | 0 >>> 19), ~(i7 << 13 | i12 >>> 19)) | 0;
 i12 = tempRet0;
 i7 = ___muldi3((i11 >>> 8 | i12 << 24) ^ i11, (i12 >>> 8 | 0 << 24) ^ i12, 9, 0) | 0;
 i12 = tempRet0;
 i11 = (i7 >>> 15 | i12 << 17) ^ i7;
 i7 = (i12 >>> 15 | 0 << 17) ^ i12;
 i12 = _i64Add(i11, i7, ~(i11 << 27 | 0 >>> 5), ~(i7 << 27 | i11 >>> 5)) | 0;
 i11 = (i12 >>> 31 | tempRet0 << 1) ^ i12;
 i12 = i11 & i6;
 i7 = i10 + (i12 << 4) | 0;
 i13 = i7 | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 i15 = HEAP32[i13 + 4 >> 2] | 0;
 do {
  if ((i14 | 0) == 0 & (i15 | 0) == 0) {
   i16 = i7;
   i17 = i9;
   i18 = i8;
  } else {
   i13 = (i11 >>> 23) + ~i11 | 0;
   i19 = i13 << 12 ^ i13;
   i13 = i19 >>> 7 ^ i19;
   i19 = i13 << 2 ^ i13;
   i13 = i19 >>> 20 ^ i19 | 1;
   i19 = 0;
   i20 = 0;
   i21 = i12;
   i22 = i7;
   i23 = i15;
   i24 = i14;
   while (1) {
    if ((i24 | 0) == (i8 | 0) & (i23 | 0) == (i9 | 0)) {
     i25 = 8;
     break;
    }
    i26 = (i24 | 0) == (-1 | 0) & (i23 | 0) == (-1 | 0) ? i22 : i20;
    i27 = (i19 | 0) == 0 ? i13 : i19;
    i28 = i27 + i21 & i6;
    i29 = i10 + (i28 << 4) | 0;
    i30 = i29 | 0;
    i31 = HEAP32[i30 >> 2] | 0;
    i32 = HEAP32[i30 + 4 >> 2] | 0;
    if ((i31 | 0) == 0 & (i32 | 0) == 0) {
     i25 = 10;
     break;
    } else {
     i19 = i27;
     i20 = i26;
     i21 = i28;
     i22 = i29;
     i23 = i32;
     i24 = i31;
    }
   }
   if ((i25 | 0) == 8) {
    i24 = i10 + (HEAP32[i2 + 4 >> 2] << 4) | 0;
    i23 = i1;
    HEAP32[i23 >> 2] = i22;
    HEAP32[i23 + 4 >> 2] = i24;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i25 | 0) == 10) {
    if ((i26 | 0) == 0) {
     i16 = i29;
     i17 = i9;
     i18 = i8;
     break;
    }
    _memset(i26 | 0, 0, 16) | 0;
    i24 = i2 + 16 | 0;
    HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) - 1;
    i16 = i26;
    i17 = HEAP32[i3 + 4 >> 2] | 0;
    i18 = HEAP32[i3 >> 2] | 0;
    break;
   }
  }
 } while (0);
 i3 = i16 | 0;
 HEAP32[i3 >> 2] = i18;
 HEAP32[i3 + 4 >> 2] = i17;
 i17 = i4 | 0;
 i4 = HEAP32[i17 >> 2] | 0;
 HEAP32[i17 >> 2] = 0;
 i17 = i16 + 8 | 0;
 i3 = HEAP32[i17 >> 2] | 0;
 HEAP32[i17 >> 2] = i4;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 + 4 | 0;
   i17 = i4 | 0;
   i18 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
   if ((i18 | 0) != 0) {
    HEAP32[i17 >> 2] = i18;
    break;
   }
   i18 = i4 - 4 | 0;
   if ((i18 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 32 >> 2] & 1023](i18);
  }
 } while (0);
 i3 = i2 + 12 | 0;
 i18 = (HEAP32[i3 >> 2] | 0) + 1 | 0;
 HEAP32[i3 >> 2] = i18;
 i3 = i2 + 4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i18 << 1 | 0) < (i4 | 0)) {
  i33 = i16;
  i34 = i4;
 } else {
  if ((i4 | 0) == 0) {
   i35 = 8;
  } else {
   i17 = i4 << 1;
   i35 = (i18 * 6 & -1 | 0) < (i17 | 0) ? i4 : i17;
  }
  i17 = __ZN3WTF9HashTableIxNS_12KeyValuePairIxNS_6RefPtrIN7WebCore28IDBBackingStoreCursorLevelDBEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIyEENS_7HashMapIxS5_SA_NS_10HashTraitsIxEENSC_IS5_EEE18KeyValuePairTraitsESD_E6rehashEiPS6_(i2, i35, i16) | 0;
  i33 = i17;
  i34 = HEAP32[i3 >> 2] | 0;
 }
 i3 = (HEAP32[i5 >> 2] | 0) + (i34 << 4) | 0;
 i34 = i1;
 HEAP32[i34 >> 2] = i33;
 HEAP32[i34 + 4 >> 2] = i3;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E6rehashEiPS4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i1 + 4 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = i1 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 HEAP32[i7 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = i2 - 1;
 i7 = __ZN3WTF10fastMallocEj(i2 * 48 & -1) | 0;
 if ((i2 | 0) > 0) {
  i11 = i6 | 0;
  i12 = i6 + 16 | 0;
  i13 = i6 + 20 | 0;
  i14 = i6 + 32 | 0;
  i15 = i6 + 24 | 0;
  i16 = i6 + 28 | 0;
  i17 = 0;
  while (1) {
   _memset(i12 | 0, 0, 16) | 0;
   i18 = i7 + (i17 * 48 & -1) | 0;
   HEAP32[i18 >> 2] = 0;
   HEAP32[i18 + 4 >> 2] = 0;
   HEAP32[i11 >> 2] = 0;
   HEAP32[i7 + (i17 * 48 & -1) + 8 >> 2] = 0;
   HEAP32[i7 + (i17 * 48 & -1) + 24 >> 2] = 0;
   HEAP32[i13 >> 2] = 0;
   _memset(i7 + (i17 * 48 & -1) + 28 | 0, 0, 16) | 0;
   HEAP32[i14 >> 2] = 0;
   HEAP32[i7 + (i17 * 48 & -1) + 32 >> 2] = 0;
   HEAP32[i15 >> 2] = 0;
   HEAP32[i7 + (i17 * 48 & -1) + 36 >> 2] = 0;
   HEAP32[i16 >> 2] = 0;
   HEAP8[i7 + (i17 * 48 & -1) + 44 | 0] = 0;
   HEAP8[i7 + (i17 * 48 & -1) + 45 | 0] = 0;
   __ZN7WebCore16IDBIndexMetadataD1Ev(i6);
   i17 = i17 + 1 | 0;
   if ((i17 | 0) >= (i2 | 0)) {
    break;
   }
  }
 }
 HEAP32[i9 >> 2] = i7;
 if ((i8 | 0) == 0) {
  HEAP32[i1 + 16 >> 2] = 0;
  i19 = 0;
  i20 = i10;
  __ZN3WTF8fastFreeEPv(i20);
  STACKTOP = i4;
  return i19 | 0;
 }
 i7 = i5 | 0;
 i9 = 0;
 i2 = 0;
 while (1) {
  i17 = i10 + (i9 * 48 & -1) | 0;
  i6 = i17 | 0;
  i16 = HEAP32[i6 >> 2] | 0;
  i15 = HEAP32[i6 + 4 >> 2] | 0;
  if ((i16 | 0) == (-1 | 0) & (i15 | 0) == (-1 | 0) | (i16 | 0) == 0 & (i15 | 0) == 0) {
   i21 = i2;
  } else {
   __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E16lookupForWritingINS_22IdentityHashTranslatorIS8_EExEENSt3__14pairIPS4_bEERKT0_(i5, i1, i6);
   i15 = HEAP32[i7 >> 2] | 0;
   __ZN7WebCore16IDBIndexMetadataD1Ev(i15 + 8 | 0);
   i16 = i15 | 0;
   i14 = HEAP32[i6 + 4 >> 2] | 0;
   HEAP32[i16 >> 2] = HEAP32[i6 >> 2];
   HEAP32[i16 + 4 >> 2] = i14;
   i14 = i10 + (i9 * 48 & -1) + 8 | 0;
   i16 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = 0;
   HEAP32[i15 + 8 >> 2] = i16;
   i16 = i15 + 16 | 0;
   i14 = i10 + (i9 * 48 & -1) + 16 | 0;
   i6 = HEAP32[i14 + 4 >> 2] | 0;
   HEAP32[i16 >> 2] = HEAP32[i14 >> 2];
   HEAP32[i16 + 4 >> 2] = i6;
   HEAP32[i15 + 24 >> 2] = HEAP32[i10 + (i9 * 48 & -1) + 24 >> 2];
   i6 = i10 + (i9 * 48 & -1) + 28 | 0;
   i16 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = 0;
   HEAP32[i15 + 28 >> 2] = i16;
   i16 = i15 + 32 | 0;
   HEAP32[i16 >> 2] = 0;
   i6 = i15 + 36 | 0;
   HEAP32[i6 >> 2] = 0;
   i14 = i15 + 40 | 0;
   HEAP32[i14 >> 2] = 0;
   i13 = i10 + (i9 * 48 & -1) + 40 | 0;
   HEAP32[i14 >> 2] = HEAP32[i13 >> 2];
   HEAP32[i13 >> 2] = 0;
   i13 = i10 + (i9 * 48 & -1) + 32 | 0;
   i14 = HEAP32[i16 >> 2] | 0;
   HEAP32[i16 >> 2] = HEAP32[i13 >> 2];
   HEAP32[i13 >> 2] = i14;
   i14 = i10 + (i9 * 48 & -1) + 36 | 0;
   i13 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = HEAP32[i14 >> 2];
   HEAP32[i14 >> 2] = i13;
   HEAP8[i15 + 44 | 0] = HEAP8[i10 + (i9 * 48 & -1) + 44 | 0] & 1;
   HEAP8[i15 + 45 | 0] = HEAP8[i10 + (i9 * 48 & -1) + 45 | 0] & 1;
   i21 = (i17 | 0) == (i3 | 0) ? i15 : i2;
  }
  i15 = i9 + 1 | 0;
  if ((i15 | 0) == (i8 | 0)) {
   break;
  } else {
   i9 = i15;
   i2 = i21;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i8 | 0) > 0) {
  i22 = 0;
 } else {
  i19 = i21;
  i20 = i10;
  __ZN3WTF8fastFreeEPv(i20);
  STACKTOP = i4;
  return i19 | 0;
 }
 while (1) {
  i1 = i10 + (i22 * 48 & -1) | 0;
  if (!((HEAP32[i1 >> 2] | 0) == (-1 | 0) & (HEAP32[i1 + 4 >> 2] | 0) == (-1 | 0))) {
   __ZN7WebCore16IDBIndexMetadataD1Ev(i10 + (i22 * 48 & -1) + 8 | 0);
  }
  i1 = i22 + 1 | 0;
  if ((i1 | 0) < (i8 | 0)) {
   i22 = i1;
  } else {
   i19 = i21;
   break;
  }
 }
 i20 = i10;
 __ZN3WTF8fastFreeEPv(i20);
 STACKTOP = i4;
 return i19 | 0;
}
function __ZN7WebCore26IDBServerConnectionLevelDB16resetTransactionExNSt3__18functionIFvvEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i6 = i5 | 0;
 i7 = HEAP32[i1 + 20 >> 2] | 0;
 i8 = HEAP32[i1 + 12 >> 2] | 0;
 i1 = _i64Add(~0, ~i2, i2, i3) | 0;
 i9 = tempRet0;
 i10 = (i1 >>> 22 | i9 << 10) ^ i1;
 i1 = (i9 >>> 22 | 0 << 10) ^ i9;
 i9 = _i64Add(i10, i1, ~(i10 << 13 | 0 >>> 19), ~(i1 << 13 | i10 >>> 19)) | 0;
 i10 = tempRet0;
 i1 = ___muldi3((i9 >>> 8 | i10 << 24) ^ i9, (i10 >>> 8 | 0 << 24) ^ i10, 9, 0) | 0;
 i10 = tempRet0;
 i9 = (i1 >>> 15 | i10 << 17) ^ i1;
 i1 = (i10 >>> 15 | 0 << 17) ^ i10;
 i10 = _i64Add(i9, i1, ~(i9 << 27 | 0 >>> 5), ~(i1 << 27 | i9 >>> 5)) | 0;
 i9 = (i10 >>> 31 | tempRet0 << 1) ^ i10;
 L1 : do {
  if ((i8 | 0) != 0) {
   i10 = i7 & i9;
   i1 = i8 + (i10 << 4) | 0;
   i11 = i1 | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   i13 = HEAP32[i11 + 4 >> 2] | 0;
   if ((i12 | 0) == (i2 | 0) & (i13 | 0) == (i3 | 0)) {
    i14 = i1;
   } else {
    i1 = (i9 >>> 23) + ~i9 | 0;
    i11 = i1 << 12 ^ i1;
    i1 = i11 >>> 7 ^ i11;
    i11 = i1 << 2 ^ i1;
    i1 = i11 >>> 20 ^ i11 | 1;
    i11 = 0;
    i15 = i10;
    i10 = i13;
    i13 = i12;
    while (1) {
     if ((i13 | 0) == 0 & (i10 | 0) == 0) {
      break L1;
     }
     i12 = (i11 | 0) == 0 ? i1 : i11;
     i16 = i12 + i15 & i7;
     i17 = i8 + (i16 << 4) | 0;
     i18 = i17 | 0;
     i19 = HEAP32[i18 >> 2] | 0;
     i20 = HEAP32[i18 + 4 >> 2] | 0;
     if ((i19 | 0) == (i2 | 0) & (i20 | 0) == (i3 | 0)) {
      i14 = i17;
      break;
     } else {
      i11 = i12;
      i15 = i16;
      i10 = i20;
      i13 = i19;
     }
    }
   }
   if ((i14 | 0) == 0) {
    break;
   }
   i13 = HEAP32[i14 + 8 >> 2] | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   i10 = i13 | 0;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
   __ZN7WebCore33IDBBackingStoreTransactionLevelDB16resetTransactionEv(i13);
   i15 = HEAP32[i4 + 16 >> 2] | 0;
   do {
    if ((i15 | 0) == 0) {
     HEAP32[i6 + 16 >> 2] = 0;
    } else {
     i11 = i4;
     if ((i15 | 0) == (i11 | 0)) {
      i1 = i6;
      HEAP32[i6 + 16 >> 2] = i1;
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 127](i11, i1);
      break;
     } else {
      HEAP32[i6 + 16 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i15 >> 2] | 0) + 8 >> 2] & 127](i15) | 0;
      break;
     }
    }
   } while (0);
   __ZN3WTF16callOnMainThreadENSt3__18functionIFvvEEE(i6);
   i15 = HEAP32[i6 + 16 >> 2] | 0;
   i1 = i6;
   do {
    if ((i15 | 0) == (i1 | 0)) {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 16 >> 2] & 1023](i1);
    } else {
     if ((i15 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 20 >> 2] & 1023](i15);
    }
   } while (0);
   i15 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) == 0) {
    __ZN7WebCore33IDBBackingStoreTransactionLevelDBD1Ev(i13);
    __ZN3WTF8fastFreeEPv(i13);
    STACKTOP = i5;
    return;
   } else {
    HEAP32[i10 >> 2] = i15;
    STACKTOP = i5;
    return;
   }
  }
 } while (0);
 __ZN7WebCore33IDBBackingStoreTransactionLevelDB16resetTransactionEv(0);
 i14 = HEAP32[i4 + 16 >> 2] | 0;
 do {
  if ((i14 | 0) == 0) {
   HEAP32[i6 + 16 >> 2] = 0;
  } else {
   if ((i14 | 0) == (i4 | 0)) {
    i3 = i6;
    HEAP32[i6 + 16 >> 2] = i3;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i14 >> 2] | 0) + 12 >> 2] & 127](i14, i3);
    break;
   } else {
    HEAP32[i6 + 16 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 8 >> 2] & 127](i14) | 0;
    break;
   }
  }
 } while (0);
 __ZN3WTF16callOnMainThreadENSt3__18functionIFvvEEE(i6);
 i14 = HEAP32[i6 + 16 >> 2] | 0;
 if ((i14 | 0) == (i6 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 16 >> 2] & 1023](i14);
  STACKTOP = i5;
  return;
 }
 if ((i14 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 20 >> 2] & 1023](i14);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore26IDBServerConnectionLevelDB19rollbackTransactionExNSt3__18functionIFvvEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i6 = i5 | 0;
 i7 = HEAP32[i1 + 20 >> 2] | 0;
 i8 = HEAP32[i1 + 12 >> 2] | 0;
 i1 = _i64Add(~0, ~i2, i2, i3) | 0;
 i9 = tempRet0;
 i10 = (i1 >>> 22 | i9 << 10) ^ i1;
 i1 = (i9 >>> 22 | 0 << 10) ^ i9;
 i9 = _i64Add(i10, i1, ~(i10 << 13 | 0 >>> 19), ~(i1 << 13 | i10 >>> 19)) | 0;
 i10 = tempRet0;
 i1 = ___muldi3((i9 >>> 8 | i10 << 24) ^ i9, (i10 >>> 8 | 0 << 24) ^ i10, 9, 0) | 0;
 i10 = tempRet0;
 i9 = (i1 >>> 15 | i10 << 17) ^ i1;
 i1 = (i10 >>> 15 | 0 << 17) ^ i10;
 i10 = _i64Add(i9, i1, ~(i9 << 27 | 0 >>> 5), ~(i1 << 27 | i9 >>> 5)) | 0;
 i9 = (i10 >>> 31 | tempRet0 << 1) ^ i10;
 L1 : do {
  if ((i8 | 0) != 0) {
   i10 = i7 & i9;
   i1 = i8 + (i10 << 4) | 0;
   i11 = i1 | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   i13 = HEAP32[i11 + 4 >> 2] | 0;
   if ((i12 | 0) == (i2 | 0) & (i13 | 0) == (i3 | 0)) {
    i14 = i1;
   } else {
    i1 = (i9 >>> 23) + ~i9 | 0;
    i11 = i1 << 12 ^ i1;
    i1 = i11 >>> 7 ^ i11;
    i11 = i1 << 2 ^ i1;
    i1 = i11 >>> 20 ^ i11 | 1;
    i11 = 0;
    i15 = i10;
    i10 = i13;
    i13 = i12;
    while (1) {
     if ((i13 | 0) == 0 & (i10 | 0) == 0) {
      break L1;
     }
     i12 = (i11 | 0) == 0 ? i1 : i11;
     i16 = i12 + i15 & i7;
     i17 = i8 + (i16 << 4) | 0;
     i18 = i17 | 0;
     i19 = HEAP32[i18 >> 2] | 0;
     i20 = HEAP32[i18 + 4 >> 2] | 0;
     if ((i19 | 0) == (i2 | 0) & (i20 | 0) == (i3 | 0)) {
      i14 = i17;
      break;
     } else {
      i11 = i12;
      i15 = i16;
      i10 = i20;
      i13 = i19;
     }
    }
   }
   if ((i14 | 0) == 0) {
    break;
   }
   i13 = HEAP32[i14 + 8 >> 2] | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   i10 = i13 | 0;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
   __ZN7WebCore33IDBBackingStoreTransactionLevelDB8rollbackEv(i13);
   i15 = HEAP32[i4 + 16 >> 2] | 0;
   do {
    if ((i15 | 0) == 0) {
     HEAP32[i6 + 16 >> 2] = 0;
    } else {
     i11 = i4;
     if ((i15 | 0) == (i11 | 0)) {
      i1 = i6;
      HEAP32[i6 + 16 >> 2] = i1;
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 127](i11, i1);
      break;
     } else {
      HEAP32[i6 + 16 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i15 >> 2] | 0) + 8 >> 2] & 127](i15) | 0;
      break;
     }
    }
   } while (0);
   __ZN3WTF16callOnMainThreadENSt3__18functionIFvvEEE(i6);
   i15 = HEAP32[i6 + 16 >> 2] | 0;
   i1 = i6;
   do {
    if ((i15 | 0) == (i1 | 0)) {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 16 >> 2] & 1023](i1);
    } else {
     if ((i15 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 20 >> 2] & 1023](i15);
    }
   } while (0);
   i15 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) == 0) {
    __ZN7WebCore33IDBBackingStoreTransactionLevelDBD1Ev(i13);
    __ZN3WTF8fastFreeEPv(i13);
    STACKTOP = i5;
    return;
   } else {
    HEAP32[i10 >> 2] = i15;
    STACKTOP = i5;
    return;
   }
  }
 } while (0);
 __ZN7WebCore33IDBBackingStoreTransactionLevelDB8rollbackEv(0);
 i14 = HEAP32[i4 + 16 >> 2] | 0;
 do {
  if ((i14 | 0) == 0) {
   HEAP32[i6 + 16 >> 2] = 0;
  } else {
   if ((i14 | 0) == (i4 | 0)) {
    i3 = i6;
    HEAP32[i6 + 16 >> 2] = i3;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i14 >> 2] | 0) + 12 >> 2] & 127](i14, i3);
    break;
   } else {
    HEAP32[i6 + 16 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 8 >> 2] & 127](i14) | 0;
    break;
   }
  }
 } while (0);
 __ZN3WTF16callOnMainThreadENSt3__18functionIFvvEEE(i6);
 i14 = HEAP32[i6 + 16 >> 2] | 0;
 if ((i14 | 0) == (i6 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 16 >> 2] & 1023](i14);
  STACKTOP = i5;
  return;
 }
 if ((i14 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 20 >> 2] & 1023](i14);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore26IDBServerConnectionLevelDB16beginTransactionExNSt3__18functionIFvvEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i6 = i5 | 0;
 i7 = HEAP32[i1 + 20 >> 2] | 0;
 i8 = HEAP32[i1 + 12 >> 2] | 0;
 i1 = _i64Add(~0, ~i2, i2, i3) | 0;
 i9 = tempRet0;
 i10 = (i1 >>> 22 | i9 << 10) ^ i1;
 i1 = (i9 >>> 22 | 0 << 10) ^ i9;
 i9 = _i64Add(i10, i1, ~(i10 << 13 | 0 >>> 19), ~(i1 << 13 | i10 >>> 19)) | 0;
 i10 = tempRet0;
 i1 = ___muldi3((i9 >>> 8 | i10 << 24) ^ i9, (i10 >>> 8 | 0 << 24) ^ i10, 9, 0) | 0;
 i10 = tempRet0;
 i9 = (i1 >>> 15 | i10 << 17) ^ i1;
 i1 = (i10 >>> 15 | 0 << 17) ^ i10;
 i10 = _i64Add(i9, i1, ~(i9 << 27 | 0 >>> 5), ~(i1 << 27 | i9 >>> 5)) | 0;
 i9 = (i10 >>> 31 | tempRet0 << 1) ^ i10;
 L1 : do {
  if ((i8 | 0) != 0) {
   i10 = i7 & i9;
   i1 = i8 + (i10 << 4) | 0;
   i11 = i1 | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   i13 = HEAP32[i11 + 4 >> 2] | 0;
   if ((i12 | 0) == (i2 | 0) & (i13 | 0) == (i3 | 0)) {
    i14 = i1;
   } else {
    i1 = (i9 >>> 23) + ~i9 | 0;
    i11 = i1 << 12 ^ i1;
    i1 = i11 >>> 7 ^ i11;
    i11 = i1 << 2 ^ i1;
    i1 = i11 >>> 20 ^ i11 | 1;
    i11 = 0;
    i15 = i10;
    i10 = i13;
    i13 = i12;
    while (1) {
     if ((i13 | 0) == 0 & (i10 | 0) == 0) {
      break L1;
     }
     i12 = (i11 | 0) == 0 ? i1 : i11;
     i16 = i12 + i15 & i7;
     i17 = i8 + (i16 << 4) | 0;
     i18 = i17 | 0;
     i19 = HEAP32[i18 >> 2] | 0;
     i20 = HEAP32[i18 + 4 >> 2] | 0;
     if ((i19 | 0) == (i2 | 0) & (i20 | 0) == (i3 | 0)) {
      i14 = i17;
      break;
     } else {
      i11 = i12;
      i15 = i16;
      i10 = i20;
      i13 = i19;
     }
    }
   }
   if ((i14 | 0) == 0) {
    break;
   }
   i13 = HEAP32[i14 + 8 >> 2] | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   i10 = i13 | 0;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
   __ZN7WebCore33IDBBackingStoreTransactionLevelDB5beginEv(i13);
   i15 = HEAP32[i4 + 16 >> 2] | 0;
   do {
    if ((i15 | 0) == 0) {
     HEAP32[i6 + 16 >> 2] = 0;
    } else {
     i11 = i4;
     if ((i15 | 0) == (i11 | 0)) {
      i1 = i6;
      HEAP32[i6 + 16 >> 2] = i1;
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 127](i11, i1);
      break;
     } else {
      HEAP32[i6 + 16 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i15 >> 2] | 0) + 8 >> 2] & 127](i15) | 0;
      break;
     }
    }
   } while (0);
   __ZN3WTF16callOnMainThreadENSt3__18functionIFvvEEE(i6);
   i15 = HEAP32[i6 + 16 >> 2] | 0;
   i1 = i6;
   do {
    if ((i15 | 0) == (i1 | 0)) {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 16 >> 2] & 1023](i1);
    } else {
     if ((i15 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 20 >> 2] & 1023](i15);
    }
   } while (0);
   i15 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) == 0) {
    __ZN7WebCore33IDBBackingStoreTransactionLevelDBD1Ev(i13);
    __ZN3WTF8fastFreeEPv(i13);
    STACKTOP = i5;
    return;
   } else {
    HEAP32[i10 >> 2] = i15;
    STACKTOP = i5;
    return;
   }
  }
 } while (0);
 __ZN7WebCore33IDBBackingStoreTransactionLevelDB5beginEv(0);
 i14 = HEAP32[i4 + 16 >> 2] | 0;
 do {
  if ((i14 | 0) == 0) {
   HEAP32[i6 + 16 >> 2] = 0;
  } else {
   if ((i14 | 0) == (i4 | 0)) {
    i3 = i6;
    HEAP32[i6 + 16 >> 2] = i3;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i14 >> 2] | 0) + 12 >> 2] & 127](i14, i3);
    break;
   } else {
    HEAP32[i6 + 16 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 8 >> 2] & 127](i14) | 0;
    break;
   }
  }
 } while (0);
 __ZN3WTF16callOnMainThreadENSt3__18functionIFvvEEE(i6);
 i14 = HEAP32[i6 + 16 >> 2] | 0;
 if ((i14 | 0) == (i6 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 16 >> 2] & 1023](i14);
  STACKTOP = i5;
  return;
 }
 if ((i14 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 20 >> 2] & 1023](i14);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore26IDBServerConnectionLevelDB15openTransactionExRKN3WTF7HashSetIxNS1_7IntHashIyEENS1_10HashTraitsIxEEEENS_9IndexedDB15TransactionModeENSt3__18functionIFvbEEE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i4 = i5 | 0;
 i7 = i5 + 24 | 0;
 i8 = i5 + 48 | 0;
 i9 = i5 + 72 | 0;
 i10 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i10 | 0) == 0) {
  i1 = HEAP32[i6 + 16 >> 2] | 0;
  do {
   if ((i1 | 0) == 0) {
    HEAP32[i7 + 16 >> 2] = 0;
   } else {
    if ((i1 | 0) == (i6 | 0)) {
     i11 = i7;
     HEAP32[i7 + 16 >> 2] = i11;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 127](i1, i11);
     break;
    } else {
     HEAP32[i7 + 16 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] & 127](i1) | 0;
     break;
    }
   }
  } while (0);
  i1 = i4 + 16 | 0;
  HEAP32[i1 >> 2] = 0;
  i11 = __Znwj(32) | 0;
  do {
   if ((i11 | 0) != 0) {
    HEAP32[i11 >> 2] = H_BASE + 2152;
    i12 = i7 + 16 | 0;
    i13 = HEAP32[i12 >> 2] | 0;
    if ((i13 | 0) == 0) {
     HEAP32[i11 + 24 >> 2] = 0;
     break;
    }
    i14 = i7;
    if ((i13 | 0) == (i14 | 0)) {
     i15 = i11 + 8 | 0;
     HEAP32[i11 + 24 >> 2] = i15;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i7 >> 2] | 0) + 12 >> 2] & 127](i14, i15);
     break;
    } else {
     HEAP32[i11 + 24 >> 2] = i13;
     HEAP32[i12 >> 2] = 0;
     break;
    }
   }
  } while (0);
  HEAP32[i1 >> 2] = i11;
  __ZN3WTF16callOnMainThreadENSt3__18functionIFvvEEE(i4);
  i11 = HEAP32[i1 >> 2] | 0;
  do {
   if ((i11 | 0) == (i4 | 0)) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 16 >> 2] & 1023](i11);
   } else {
    if ((i11 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 20 >> 2] & 1023](i11);
   }
  } while (0);
  i11 = HEAP32[i7 + 16 >> 2] | 0;
  if ((i11 | 0) == (i7 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 16 >> 2] & 1023](i11);
   STACKTOP = i5;
   return;
  }
  if ((i11 | 0) == 0) {
   STACKTOP = i5;
   return;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 20 >> 2] & 1023](i11);
  STACKTOP = i5;
  return;
 } else {
  __ZN7WebCore22IDBBackingStoreLevelDB32establishBackingStoreTransactionEx(i10, i2, i3);
  i3 = HEAP32[i6 + 16 >> 2] | 0;
  do {
   if ((i3 | 0) == 0) {
    HEAP32[i9 + 16 >> 2] = 0;
   } else {
    i2 = i6;
    if ((i3 | 0) == (i2 | 0)) {
     i10 = i9;
     HEAP32[i9 + 16 >> 2] = i10;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i6 >> 2] | 0) + 12 >> 2] & 127](i2, i10);
     break;
    } else {
     HEAP32[i9 + 16 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] & 127](i3) | 0;
     break;
    }
   }
  } while (0);
  i3 = i8 + 16 | 0;
  HEAP32[i3 >> 2] = 0;
  i6 = __Znwj(32) | 0;
  do {
   if ((i6 | 0) != 0) {
    HEAP32[i6 >> 2] = H_BASE + 2112;
    i10 = i9 + 16 | 0;
    i2 = HEAP32[i10 >> 2] | 0;
    if ((i2 | 0) == 0) {
     HEAP32[i6 + 24 >> 2] = 0;
     break;
    }
    i11 = i9;
    if ((i2 | 0) == (i11 | 0)) {
     i7 = i6 + 8 | 0;
     HEAP32[i6 + 24 >> 2] = i7;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 12 >> 2] & 127](i11, i7);
     break;
    } else {
     HEAP32[i6 + 24 >> 2] = i2;
     HEAP32[i10 >> 2] = 0;
     break;
    }
   }
  } while (0);
  HEAP32[i3 >> 2] = i6;
  __ZN3WTF16callOnMainThreadENSt3__18functionIFvvEEE(i8);
  i6 = HEAP32[i3 >> 2] | 0;
  do {
   if ((i6 | 0) == (i8 | 0)) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 16 >> 2] & 1023](i6);
   } else {
    if ((i6 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 20 >> 2] & 1023](i6);
   }
  } while (0);
  i6 = HEAP32[i9 + 16 >> 2] | 0;
  if ((i6 | 0) == (i9 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 16 >> 2] & 1023](i6);
   STACKTOP = i5;
   return;
  }
  if ((i6 | 0) == 0) {
   STACKTOP = i5;
   return;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 20 >> 2] & 1023](i6);
  STACKTOP = i5;
  return;
 }
}
function __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEEaSERKS3_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 if ((i2 | 0) == (i1 | 0)) {
  return i1 | 0;
 }
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i2 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if (i4 >>> 0 > i6 >>> 0) {
  i7 = HEAP32[i1 >> 2] | 0;
  i8 = i7 + (i4 << 2) | 0;
  if ((i4 | 0) != (i6 | 0)) {
   i9 = i7 + (i6 << 2) | 0;
   while (1) {
    i7 = HEAP32[i9 >> 2] | 0;
    do {
     if ((i7 | 0) != 0) {
      i10 = i7 | 0;
      i11 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
      if ((i11 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i7);
       break;
      } else {
       HEAP32[i10 >> 2] = i11;
       break;
      }
     }
    } while (0);
    i9 = i9 + 4 | 0;
    if ((i9 | 0) == (i8 | 0)) {
     break;
    }
   }
  }
  HEAP32[i3 >> 2] = i6;
  i12 = i6;
 } else {
  i8 = i1 + 4 | 0;
  i9 = HEAP32[i8 >> 2] | 0;
  do {
   if (i6 >>> 0 > i9 >>> 0) {
    do {
     if ((i9 | 0) != 0) {
      i7 = i1 | 0;
      if ((i4 | 0) != 0) {
       i11 = HEAP32[i7 >> 2] | 0;
       i10 = i11 + (i4 << 2) | 0;
       i13 = i11;
       while (1) {
        i11 = HEAP32[i13 >> 2] | 0;
        do {
         if ((i11 | 0) != 0) {
          i14 = i11 | 0;
          i15 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
          if ((i15 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i11);
           break;
          } else {
           HEAP32[i14 >> 2] = i15;
           break;
          }
         }
        } while (0);
        i13 = i13 + 4 | 0;
        if ((i13 | 0) == (i10 | 0)) {
         break;
        }
       }
       HEAP32[i3 >> 2] = 0;
      }
      i10 = HEAP32[i7 >> 2] | 0;
      if ((i10 | 0) == 0) {
       break;
      }
      HEAP32[i7 >> 2] = 0;
      HEAP32[i8 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i10);
     }
    } while (0);
    i10 = HEAP32[i5 >> 2] | 0;
    if ((HEAP32[i8 >> 2] | 0) >>> 0 >= i10 >>> 0) {
     break;
    }
    i13 = i1 | 0;
    i11 = HEAP32[i13 >> 2] | 0;
    if (i10 >>> 0 > 1073741823 >>> 0) {
     _WTFCrash();
     return 0;
    }
    i15 = HEAP32[i3 >> 2] | 0;
    i14 = __ZN3WTF18fastMallocGoodSizeEj(i10 << 2) | 0;
    HEAP32[i8 >> 2] = i14 >>> 2;
    i10 = __ZN3WTF10fastMallocEj(i14) | 0;
    HEAP32[i13 >> 2] = i10;
    i14 = i11;
    _memcpy(i10 | 0, i14 | 0, i15 << 2) | 0;
    if ((i11 | 0) == 0) {
     break;
    }
    if ((HEAP32[i13 >> 2] | 0) == (i11 | 0)) {
     HEAP32[i13 >> 2] = 0;
     HEAP32[i8 >> 2] = 0;
    }
    __ZN3WTF8fastFreeEPv(i14);
   }
  } while (0);
  i12 = HEAP32[i3 >> 2] | 0;
 }
 i8 = i2 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 i4 = i2 + (i12 << 2) | 0;
 i9 = i1 | 0;
 if ((i12 | 0) == 0) {
  i16 = i2;
  i17 = 0;
 } else {
  i12 = HEAP32[i9 >> 2] | 0;
  i6 = i2;
  while (1) {
   i2 = HEAP32[i6 >> 2] | 0;
   if ((i2 | 0) != 0) {
    i14 = i2 | 0;
    HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
   }
   i14 = i12 | 0;
   i13 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = i2;
   do {
    if ((i13 | 0) != 0) {
     i2 = i13 | 0;
     i14 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i13);
      break;
     } else {
      HEAP32[i2 >> 2] = i14;
      break;
     }
    }
   } while (0);
   i13 = i6 + 4 | 0;
   if ((i13 | 0) == (i4 | 0)) {
    break;
   } else {
    i12 = i12 + 4 | 0;
    i6 = i13;
   }
  }
  i16 = HEAP32[i8 >> 2] | 0;
  i17 = HEAP32[i3 >> 2] | 0;
 }
 i8 = HEAP32[i5 >> 2] | 0;
 i6 = i16 + (i8 << 2) | 0;
 if ((i17 | 0) == (i8 | 0)) {
  i18 = i17;
 } else {
  i8 = i16 + (i17 << 2) | 0;
  i16 = (HEAP32[i9 >> 2] | 0) + (i17 << 2) | 0;
  while (1) {
   i17 = HEAP32[i8 >> 2] | 0;
   HEAP32[i16 >> 2] = i17;
   if ((i17 | 0) != 0) {
    i9 = i17 | 0;
    HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
   }
   i9 = i8 + 4 | 0;
   if ((i9 | 0) == (i6 | 0)) {
    break;
   } else {
    i8 = i9;
    i16 = i16 + 4 | 0;
   }
  }
  i18 = HEAP32[i5 >> 2] | 0;
 }
 HEAP32[i3 >> 2] = i18;
 return i1 | 0;
}
function __ZN7WebCore22IDBObjectStoreMetadataC1ERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i6 = i5 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
 }
 i6 = i1 + 8 | 0;
 i5 = i2 + 8 | 0;
 i7 = HEAP32[i5 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i6 + 4 >> 2] = i7;
 HEAP32[i1 + 16 >> 2] = HEAP32[i2 + 16 >> 2];
 i7 = HEAP32[i2 + 20 >> 2] | 0;
 HEAP32[i1 + 20 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i6 = i7 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
 }
 i6 = HEAP32[i2 + 28 >> 2] | 0;
 i7 = i2 + 32 | 0;
 i5 = HEAP32[i7 >> 2] | 0;
 i8 = i1 + 24 | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = i1 + 28 | 0;
 HEAP32[i9 >> 2] = 0;
 HEAP32[i1 + 32 >> 2] = i5;
 do {
  if ((i6 | 0) != 0) {
   if (i6 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   }
   i5 = __ZN3WTF18fastMallocGoodSizeEj(i6 << 2) | 0;
   HEAP32[i9 >> 2] = i5 >>> 2;
   i10 = __ZN3WTF10fastMallocEj(i5) | 0;
   i5 = i10;
   HEAP32[i8 >> 2] = i5;
   if ((i10 | 0) == 0) {
    break;
   }
   i10 = HEAP32[i2 + 24 >> 2] | 0;
   i11 = HEAP32[i7 >> 2] | 0;
   i12 = i10 + (i11 << 2) | 0;
   if ((i11 | 0) == 0) {
    break;
   } else {
    i13 = i10;
    i14 = i5;
   }
   while (1) {
    i5 = HEAP32[i13 >> 2] | 0;
    HEAP32[i14 >> 2] = i5;
    if ((i5 | 0) != 0) {
     i10 = i5 | 0;
     HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
    }
    i10 = i13 + 4 | 0;
    if ((i10 | 0) == (i12 | 0)) {
     break;
    } else {
     i13 = i10;
     i14 = i14 + 4 | 0;
    }
   }
  }
 } while (0);
 HEAP8[i1 + 36 | 0] = HEAP8[i2 + 36 | 0] & 1;
 i14 = i1 + 40 | 0;
 i13 = i2 + 40 | 0;
 i7 = HEAP32[i13 + 4 >> 2] | 0;
 HEAP32[i14 >> 2] = HEAP32[i13 >> 2];
 HEAP32[i14 + 4 >> 2] = i7;
 i7 = i1 + 48 | 0;
 i1 = i7 | 0;
 _memset(i7 | 0, 0, 20) | 0;
 i7 = HEAP32[i2 + 48 >> 2] | 0;
 i14 = HEAP32[i2 + 52 >> 2] | 0;
 i13 = i7 + (i14 * 48 & -1) | 0;
 if ((HEAP32[i2 + 60 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 L22 : do {
  if ((i14 | 0) == 0) {
   i15 = i7;
  } else {
   i2 = i7;
   while (1) {
    i8 = i2 | 0;
    i9 = HEAP32[i8 >> 2] | 0;
    i6 = HEAP32[i8 + 4 >> 2] | 0;
    if (!((i9 | 0) == (-1 | 0) & (i6 | 0) == (-1 | 0) | (i9 | 0) == 0 & (i6 | 0) == 0)) {
     i15 = i2;
     break L22;
    }
    i2 = i2 + 48 | 0;
    if ((i2 | 0) == (i13 | 0)) {
     break;
    }
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 if ((i15 | 0) == (i13 | 0)) {
  STACKTOP = i3;
  return;
 } else {
  i16 = i15;
 }
 L30 : while (1) {
  __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E3addINS_22IdentityHashTranslatorIS8_EERKxRKS4_EENS_18HashTableAddResultINS_17HashTableIteratorIxS4_S6_S8_SE_SB_EEEEOT0_OT1_(i4, i1, i16 | 0, i16);
  i15 = i16 + 48 | 0;
  if ((i15 | 0) == (i13 | 0)) {
   i17 = 26;
   break;
  } else {
   i18 = i15;
  }
  while (1) {
   i15 = i18 | 0;
   i7 = HEAP32[i15 >> 2] | 0;
   i14 = HEAP32[i15 + 4 >> 2] | 0;
   if (!((i7 | 0) == (-1 | 0) & (i14 | 0) == (-1 | 0) | (i7 | 0) == 0 & (i14 | 0) == 0)) {
    break;
   }
   i14 = i18 + 48 | 0;
   if ((i14 | 0) == (i13 | 0)) {
    i17 = 28;
    break L30;
   } else {
    i18 = i14;
   }
  }
  if ((i18 | 0) == (i13 | 0)) {
   i17 = 27;
   break;
  } else {
   i16 = i18;
  }
 }
 if ((i17 | 0) == 26) {
  STACKTOP = i3;
  return;
 } else if ((i17 | 0) == 27) {
  STACKTOP = i3;
  return;
 } else if ((i17 | 0) == 28) {
  STACKTOP = i3;
  return;
 }
}
function __ZN3WTF7HashMapIxNS_6RefPtrIN7WebCore28IDBBackingStoreCursorLevelDBEEENS_7IntHashIyEENS_10HashTraitsIxEENS7_IS4_EEE6removeERKx(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = HEAP32[i1 + 4 >> 2] | 0;
  i5 = i4 << 4 | 0;
  i6 = 0;
  i7 = i4;
 } else {
  i4 = HEAP32[i1 + 8 >> 2] | 0;
  i8 = HEAP32[i2 >> 2] | 0;
  i9 = HEAP32[i2 + 4 >> 2] | 0;
  i2 = _i64Add(i8, i9, ~0, ~i8) | 0;
  i10 = tempRet0;
  i11 = (i2 >>> 22 | i10 << 10) ^ i2;
  i2 = (i10 >>> 22 | 0 << 10) ^ i10;
  i10 = _i64Add(i11, i2, ~(i11 << 13 | 0 >>> 19), ~(i2 << 13 | i11 >>> 19)) | 0;
  i11 = tempRet0;
  i2 = ___muldi3((i10 >>> 8 | i11 << 24) ^ i10, (i11 >>> 8 | 0 << 24) ^ i11, 9, 0) | 0;
  i11 = tempRet0;
  i10 = (i2 >>> 15 | i11 << 17) ^ i2;
  i2 = (i11 >>> 15 | 0 << 17) ^ i11;
  i11 = _i64Add(i10, i2, ~(i10 << 27 | 0 >>> 5), ~(i2 << 27 | i10 >>> 5)) | 0;
  i10 = (i11 >>> 31 | tempRet0 << 1) ^ i11;
  i11 = i10 & i4;
  i2 = i3 + (i11 << 4) | 0;
  i12 = i2 | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  i14 = HEAP32[i12 + 4 >> 2] | 0;
  L4 : do {
   if ((i13 | 0) == (i8 | 0) & (i14 | 0) == (i9 | 0)) {
    i15 = i2;
   } else {
    i12 = (i10 >>> 23) + ~i10 | 0;
    i16 = i12 << 12 ^ i12;
    i12 = i16 >>> 7 ^ i16;
    i16 = i12 << 2 ^ i12;
    i12 = i16 >>> 20 ^ i16 | 1;
    i16 = 0;
    i17 = i11;
    i18 = i14;
    i19 = i13;
    while (1) {
     if ((i19 | 0) == 0 & (i18 | 0) == 0) {
      i15 = 0;
      break L4;
     }
     i20 = (i16 | 0) == 0 ? i12 : i16;
     i21 = i20 + i17 & i4;
     i22 = i3 + (i21 << 4) | 0;
     i23 = i22 | 0;
     i24 = HEAP32[i23 >> 2] | 0;
     i25 = HEAP32[i23 + 4 >> 2] | 0;
     if ((i24 | 0) == (i8 | 0) & (i25 | 0) == (i9 | 0)) {
      i15 = i22;
      break;
     } else {
      i16 = i20;
      i17 = i21;
      i18 = i25;
      i19 = i24;
     }
    }
   }
  } while (0);
  i9 = HEAP32[i1 + 4 >> 2] | 0;
  i5 = (i15 | 0) == 0 ? i3 + (i9 << 4) | 0 : i15;
  i6 = i3;
  i7 = i9;
 }
 i9 = i1 | 0;
 i3 = i1 + 4 | 0;
 if ((i5 | 0) == (i6 + (i7 << 4) | 0)) {
  i26 = 0;
  return i26 | 0;
 }
 i7 = HEAP32[i5 + 8 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i6 = i7 + 4 | 0;
   i15 = i6 | 0;
   i8 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i15 >> 2] = i8;
    break;
   }
   i8 = i6 - 4 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 32 >> 2] & 1023](i8);
  }
 } while (0);
 i7 = i5 | 0;
 HEAP32[i7 >> 2] = -1;
 HEAP32[i7 + 4 >> 2] = -1;
 i7 = i1 + 16 | 0;
 HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 i7 = i1 + 12 | 0;
 i1 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 HEAP32[i7 >> 2] = i1;
 i7 = HEAP32[i3 >> 2] | 0;
 if (!((i1 * 6 & -1 | 0) < (i7 | 0) & (i7 | 0) > 8)) {
  i26 = 1;
  return i26 | 0;
 }
 __ZN3WTF9HashTableIxNS_12KeyValuePairIxNS_6RefPtrIN7WebCore28IDBBackingStoreCursorLevelDBEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIyEENS_7HashMapIxS5_SA_NS_10HashTraitsIxEENSC_IS5_EEE18KeyValuePairTraitsESD_E6rehashEiPS6_(i9, (i7 | 0) / 2 & -1, 0) | 0;
 i26 = 1;
 return i26 | 0;
}
function __ZN3WTF9HashTableIxNS_12KeyValuePairIxNS_6RefPtrIN7WebCore28IDBBackingStoreCursorLevelDBEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIyEENS_7HashMapIxS5_SA_NS_10HashTraitsIxEENSC_IS5_EEE18KeyValuePairTraitsESD_E6rehashEiPS6_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i1 + 4 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = i1 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 HEAP32[i6 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = i2 - 1;
 HEAP32[i8 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 4) | 0;
 if ((i7 | 0) == 0) {
  HEAP32[i1 + 16 >> 2] = 0;
  i10 = 0;
  i11 = i9;
  __ZN3WTF8fastFreeEPv(i11);
  STACKTOP = i4;
  return i10 | 0;
 }
 i2 = i5 | 0;
 i8 = 0;
 i6 = 0;
 while (1) {
  i12 = i9 + (i8 << 4) | 0;
  i13 = i12 | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  i15 = HEAP32[i13 + 4 >> 2] | 0;
  if ((i14 | 0) == (-1 | 0) & (i15 | 0) == (-1 | 0) | (i14 | 0) == 0 & (i15 | 0) == 0) {
   i16 = i6;
  } else {
   __ZN3WTF9HashTableIxNS_12KeyValuePairIxNS_6RefPtrIN7WebCore28IDBBackingStoreCursorLevelDBEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIyEENS_7HashMapIxS5_SA_NS_10HashTraitsIxEENSC_IS5_EEE18KeyValuePairTraitsESD_E16lookupForWritingINS_22IdentityHashTranslatorISA_EExEENSt3__14pairIPS6_bEERKT0_(i5, i1, i13);
   i15 = HEAP32[i2 >> 2] | 0;
   i14 = i15 + 8 | 0;
   i17 = HEAP32[i14 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i18 = i17 + 4 | 0;
     i19 = i18 | 0;
     i20 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
     if ((i20 | 0) != 0) {
      HEAP32[i19 >> 2] = i20;
      break;
     }
     i20 = i18 - 4 | 0;
     if ((i20 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i20 >> 2] | 0) + 32 >> 2] & 1023](i20);
    }
   } while (0);
   i17 = i15 | 0;
   i20 = HEAP32[i13 + 4 >> 2] | 0;
   HEAP32[i17 >> 2] = HEAP32[i13 >> 2];
   HEAP32[i17 + 4 >> 2] = i20;
   i20 = i9 + (i8 << 4) + 8 | 0;
   i17 = HEAP32[i20 >> 2] | 0;
   HEAP32[i20 >> 2] = 0;
   HEAP32[i14 >> 2] = i17;
   i16 = (i12 | 0) == (i3 | 0) ? i15 : i6;
  }
  i17 = i8 + 1 | 0;
  if ((i17 | 0) == (i7 | 0)) {
   break;
  } else {
   i8 = i17;
   i6 = i16;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i7 | 0) > 0) {
  i21 = 0;
 } else {
  i10 = i16;
  i11 = i9;
  __ZN3WTF8fastFreeEPv(i11);
  STACKTOP = i4;
  return i10 | 0;
 }
 while (1) {
  i1 = i9 + (i21 << 4) | 0;
  do {
   if (!((HEAP32[i1 >> 2] | 0) == (-1 | 0) & (HEAP32[i1 + 4 >> 2] | 0) == (-1 | 0))) {
    i6 = HEAP32[i9 + (i21 << 4) + 8 >> 2] | 0;
    if ((i6 | 0) == 0) {
     break;
    }
    i8 = i6 + 4 | 0;
    i6 = i8 | 0;
    i3 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
    if ((i3 | 0) != 0) {
     HEAP32[i6 >> 2] = i3;
     break;
    }
    i3 = i8 - 4 | 0;
    if ((i3 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 32 >> 2] & 1023](i3);
   }
  } while (0);
  i1 = i21 + 1 | 0;
  if ((i1 | 0) < (i7 | 0)) {
   i21 = i1;
  } else {
   i10 = i16;
   break;
  }
 }
 i11 = i9;
 __ZN3WTF8fastFreeEPv(i11);
 STACKTOP = i4;
 return i10 | 0;
}
function __ZN7WebCore26IDBServerConnectionLevelDBD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 HEAP32[i1 >> 2] = H_BASE + 2872;
 i2 = HEAP32[i1 + 68 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i4 = HEAP32[i1 + 36 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i3 = 0;
   while (1) {
    i5 = i2 + (i3 << 4) | 0;
    do {
     if (!((HEAP32[i5 >> 2] | 0) == (-1 | 0) & (HEAP32[i5 + 4 >> 2] | 0) == (-1 | 0))) {
      i6 = HEAP32[i2 + (i3 << 4) + 8 >> 2] | 0;
      if ((i6 | 0) == 0) {
       break;
      }
      i7 = i6 + 4 | 0;
      i6 = i7 | 0;
      i8 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
      if ((i8 | 0) != 0) {
       HEAP32[i6 >> 2] = i8;
       break;
      }
      i8 = i7 - 4 | 0;
      if ((i8 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 32 >> 2] & 1023](i8);
     }
    } while (0);
    i3 = i3 + 1 | 0;
    if ((i3 | 0) >= (i4 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i4 = HEAP32[i1 + 16 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i3 = 0;
   while (1) {
    i5 = i2 + (i3 << 4) | 0;
    do {
     if (!((HEAP32[i5 >> 2] | 0) == (-1 | 0) & (HEAP32[i5 + 4 >> 2] | 0) == (-1 | 0))) {
      i8 = HEAP32[i2 + (i3 << 4) + 8 >> 2] | 0;
      if ((i8 | 0) == 0) {
       break;
      }
      i7 = i8 | 0;
      i6 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
      if ((i6 | 0) == 0) {
       __ZN7WebCore33IDBBackingStoreTransactionLevelDBD1Ev(i8);
       __ZN3WTF8fastFreeEPv(i8);
       break;
      } else {
       HEAP32[i7 >> 2] = i6;
       break;
      }
     }
    } while (0);
    i3 = i3 + 1 | 0;
    if ((i3 | 0) >= (i4 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 4 | 0;
 i2 = i1 | 0;
 i4 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i2 >> 2] = i4;
  return;
 }
 i4 = i1 - 4 | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 1023](i4);
 return;
}
function __ZN7WebCore26IDBServerConnectionLevelDBD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 HEAP32[i1 >> 2] = H_BASE + 2872;
 i2 = HEAP32[i1 + 68 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i4 = HEAP32[i1 + 36 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i3 = 0;
   while (1) {
    i5 = i2 + (i3 << 4) | 0;
    do {
     if (!((HEAP32[i5 >> 2] | 0) == (-1 | 0) & (HEAP32[i5 + 4 >> 2] | 0) == (-1 | 0))) {
      i6 = HEAP32[i2 + (i3 << 4) + 8 >> 2] | 0;
      if ((i6 | 0) == 0) {
       break;
      }
      i7 = i6 + 4 | 0;
      i6 = i7 | 0;
      i8 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
      if ((i8 | 0) != 0) {
       HEAP32[i6 >> 2] = i8;
       break;
      }
      i8 = i7 - 4 | 0;
      if ((i8 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 32 >> 2] & 1023](i8);
     }
    } while (0);
    i3 = i3 + 1 | 0;
    if ((i3 | 0) >= (i4 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i4 = HEAP32[i1 + 16 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i3 = 0;
   while (1) {
    i5 = i2 + (i3 << 4) | 0;
    do {
     if (!((HEAP32[i5 >> 2] | 0) == (-1 | 0) & (HEAP32[i5 + 4 >> 2] | 0) == (-1 | 0))) {
      i8 = HEAP32[i2 + (i3 << 4) + 8 >> 2] | 0;
      if ((i8 | 0) == 0) {
       break;
      }
      i7 = i8 | 0;
      i6 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
      if ((i6 | 0) == 0) {
       __ZN7WebCore33IDBBackingStoreTransactionLevelDBD1Ev(i8);
       __ZN3WTF8fastFreeEPv(i8);
       break;
      } else {
       HEAP32[i7 >> 2] = i6;
       break;
      }
     }
    } while (0);
    i3 = i3 + 1 | 0;
    if ((i3 | 0) >= (i4 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 4 | 0;
 i2 = i1 | 0;
 i4 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i2 >> 2] = i4;
  return;
 }
 i4 = i1 - 4 | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 1023](i4);
 return;
}
function __ZN3WTF9HashTableIxNS_12KeyValuePairIxNS_6RefPtrIN7WebCore28IDBBackingStoreCursorLevelDBEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIyEENS_7HashMapIxS5_SA_NS_10HashTraitsIxEENSC_IS5_EEE18KeyValuePairTraitsESD_E16lookupForWritingINS_22IdentityHashTranslatorISA_EExEENSt3__14pairIPS6_bEERKT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i5 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 i6 = HEAP32[i3 + 4 >> 2] | 0;
 i3 = _i64Add(i2, i6, ~0, ~i2) | 0;
 i7 = tempRet0;
 i8 = (i3 >>> 22 | i7 << 10) ^ i3;
 i3 = (i7 >>> 22 | 0 << 10) ^ i7;
 i7 = _i64Add(i8, i3, ~(i8 << 13 | 0 >>> 19), ~(i3 << 13 | i8 >>> 19)) | 0;
 i8 = tempRet0;
 i3 = ___muldi3((i7 >>> 8 | i8 << 24) ^ i7, (i8 >>> 8 | 0 << 24) ^ i8, 9, 0) | 0;
 i8 = tempRet0;
 i7 = (i3 >>> 15 | i8 << 17) ^ i3;
 i3 = (i8 >>> 15 | 0 << 17) ^ i8;
 i8 = _i64Add(i7, i3, ~(i7 << 27 | 0 >>> 5), ~(i3 << 27 | i7 >>> 5)) | 0;
 i7 = (i8 >>> 31 | tempRet0 << 1) ^ i8;
 i8 = i7 & i5;
 i3 = i4 + (i8 << 4) | 0;
 i9 = i3 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 i11 = HEAP32[i9 + 4 >> 2] | 0;
 L1 : do {
  if ((i10 | 0) == 0 & (i11 | 0) == 0) {
   i12 = 0;
   i13 = i3;
  } else {
   i9 = (i7 >>> 23) + ~i7 | 0;
   i14 = i9 << 12 ^ i9;
   i9 = i14 >>> 7 ^ i14;
   i14 = i9 << 2 ^ i9;
   i9 = i14 >>> 20 ^ i14 | 1;
   i14 = 0;
   i15 = 0;
   i16 = i8;
   i17 = i3;
   i18 = i11;
   i19 = i10;
   while (1) {
    if ((i19 | 0) == (i2 | 0) & (i18 | 0) == (i6 | 0)) {
     break;
    }
    i20 = (i19 | 0) == (-1 | 0) & (i18 | 0) == (-1 | 0) ? i17 : i14;
    i21 = (i15 | 0) == 0 ? i9 : i15;
    i22 = i21 + i16 & i5;
    i23 = i4 + (i22 << 4) | 0;
    i24 = i23 | 0;
    i25 = HEAP32[i24 >> 2] | 0;
    i26 = HEAP32[i24 + 4 >> 2] | 0;
    if ((i25 | 0) == 0 & (i26 | 0) == 0) {
     i12 = i20;
     i13 = i23;
     break L1;
    } else {
     i14 = i20;
     i15 = i21;
     i16 = i22;
     i17 = i23;
     i18 = i26;
     i19 = i25;
    }
   }
   HEAP32[i1 >> 2] = i17;
   HEAP8[i1 + 4 | 0] = 1;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = (i12 | 0) != 0 ? i12 : i13;
 HEAP8[i1 + 4 | 0] = 0;
 return;
}
function __ZN7WebCore26IDBServerConnectionLevelDB19cursorPrefetchResetERNS_16IDBCursorBackendEi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = i2 + 24 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 i5 = HEAP32[i4 + 4 >> 2] | 0;
 L1 : do {
  if ((i2 | 0) == 0 & (i5 | 0) == 0) {
   i6 = 0;
  } else {
   i4 = HEAP32[i1 + 40 >> 2] | 0;
   i7 = HEAP32[i1 + 32 >> 2] | 0;
   i8 = _i64Add(i2, i5, ~0, ~i2) | 0;
   i9 = tempRet0;
   i10 = (i8 >>> 22 | i9 << 10) ^ i8;
   i8 = (i9 >>> 22 | 0 << 10) ^ i9;
   i9 = _i64Add(i10, i8, ~(i10 << 13 | 0 >>> 19), ~(i8 << 13 | i10 >>> 19)) | 0;
   i10 = tempRet0;
   i8 = ___muldi3((i9 >>> 8 | i10 << 24) ^ i9, (i10 >>> 8 | 0 << 24) ^ i10, 9, 0) | 0;
   i10 = tempRet0;
   i9 = (i8 >>> 15 | i10 << 17) ^ i8;
   i8 = (i10 >>> 15 | 0 << 17) ^ i10;
   i10 = _i64Add(i9, i8, ~(i9 << 27 | 0 >>> 5), ~(i8 << 27 | i9 >>> 5)) | 0;
   i9 = (i10 >>> 31 | tempRet0 << 1) ^ i10;
   if ((i7 | 0) == 0) {
    i6 = 0;
    break;
   }
   i10 = i4 & i9;
   i8 = i7 + (i10 << 4) | 0;
   i11 = i8 | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   i13 = HEAP32[i11 + 4 >> 2] | 0;
   if ((i12 | 0) == (i2 | 0) & (i13 | 0) == (i5 | 0)) {
    i14 = i8;
   } else {
    i8 = (i9 >>> 23) + ~i9 | 0;
    i9 = i8 << 12 ^ i8;
    i8 = i9 >>> 7 ^ i9;
    i9 = i8 << 2 ^ i8;
    i8 = i9 >>> 20 ^ i9 | 1;
    i9 = 0;
    i11 = i10;
    i10 = i13;
    i13 = i12;
    while (1) {
     if ((i13 | 0) == 0 & (i10 | 0) == 0) {
      i6 = 0;
      break L1;
     }
     i12 = (i9 | 0) == 0 ? i8 : i9;
     i15 = i12 + i11 & i4;
     i16 = i7 + (i15 << 4) | 0;
     i17 = i16 | 0;
     i18 = HEAP32[i17 >> 2] | 0;
     i19 = HEAP32[i17 + 4 >> 2] | 0;
     if ((i18 | 0) == (i2 | 0) & (i19 | 0) == (i5 | 0)) {
      i14 = i16;
      break;
     } else {
      i9 = i12;
      i11 = i15;
      i10 = i19;
      i13 = i18;
     }
    }
   }
   if ((i14 | 0) == 0) {
    i6 = 0;
    break;
   }
   i6 = HEAP32[i14 + 8 >> 2] | 0;
  }
 } while (0);
 if ((i3 | 0) <= 0) {
  return;
 }
 i14 = i6;
 i5 = 0;
 while (1) {
  FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 1](i6, 0, 1) | 0;
  i5 = i5 + 1 | 0;
  if ((i5 | 0) >= (i3 | 0)) {
   break;
  }
 }
 return;
}
function __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E16lookupForWritingINS_22IdentityHashTranslatorIS8_EExEENSt3__14pairIPS4_bEERKT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i5 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 i6 = HEAP32[i3 + 4 >> 2] | 0;
 i3 = _i64Add(i2, i6, ~0, ~i2) | 0;
 i7 = tempRet0;
 i8 = (i3 >>> 22 | i7 << 10) ^ i3;
 i3 = (i7 >>> 22 | 0 << 10) ^ i7;
 i7 = _i64Add(i8, i3, ~(i8 << 13 | 0 >>> 19), ~(i3 << 13 | i8 >>> 19)) | 0;
 i8 = tempRet0;
 i3 = ___muldi3((i7 >>> 8 | i8 << 24) ^ i7, (i8 >>> 8 | 0 << 24) ^ i8, 9, 0) | 0;
 i8 = tempRet0;
 i7 = (i3 >>> 15 | i8 << 17) ^ i3;
 i3 = (i8 >>> 15 | 0 << 17) ^ i8;
 i8 = _i64Add(i7, i3, ~(i7 << 27 | 0 >>> 5), ~(i3 << 27 | i7 >>> 5)) | 0;
 i7 = (i8 >>> 31 | tempRet0 << 1) ^ i8;
 i8 = i7 & i5;
 i3 = i4 + (i8 * 48 & -1) | 0;
 i9 = i3 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 i11 = HEAP32[i9 + 4 >> 2] | 0;
 L1 : do {
  if ((i10 | 0) == 0 & (i11 | 0) == 0) {
   i12 = 0;
   i13 = i3;
  } else {
   i9 = (i7 >>> 23) + ~i7 | 0;
   i14 = i9 << 12 ^ i9;
   i9 = i14 >>> 7 ^ i14;
   i14 = i9 << 2 ^ i9;
   i9 = i14 >>> 20 ^ i14 | 1;
   i14 = 0;
   i15 = 0;
   i16 = i8;
   i17 = i3;
   i18 = i11;
   i19 = i10;
   while (1) {
    if ((i19 | 0) == (i2 | 0) & (i18 | 0) == (i6 | 0)) {
     break;
    }
    i20 = (i19 | 0) == (-1 | 0) & (i18 | 0) == (-1 | 0) ? i17 : i14;
    i21 = (i15 | 0) == 0 ? i9 : i15;
    i22 = i21 + i16 & i5;
    i23 = i4 + (i22 * 48 & -1) | 0;
    i24 = i23 | 0;
    i25 = HEAP32[i24 >> 2] | 0;
    i26 = HEAP32[i24 + 4 >> 2] | 0;
    if ((i25 | 0) == 0 & (i26 | 0) == 0) {
     i12 = i20;
     i13 = i23;
     break L1;
    } else {
     i14 = i20;
     i15 = i21;
     i16 = i22;
     i17 = i23;
     i18 = i26;
     i19 = i25;
    }
   }
   HEAP32[i1 >> 2] = i17;
   HEAP8[i1 + 4 | 0] = 1;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = (i12 | 0) != 0 ? i12 : i13;
 HEAP8[i1 + 4 | 0] = 0;
 return;
}
function ___ZNSt3__128__libcpp_compressed_pair_impIZN7WebCore26IDBServerConnectionLevelDB17deleteObjectStoreERNS1_21IDBTransactionBackendERKNS1_26DeleteObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS1_16IDBDatabaseErrorEEEEEEE4$_44NS_9allocatorISF_EELj2EED2Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = HEAP32[i1 + 72 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i1 + 76 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    i5 = i2 + (i4 * 48 & -1) | 0;
    if (!((HEAP32[i5 >> 2] | 0) == (-1 | 0) & (HEAP32[i5 + 4 >> 2] | 0) == (-1 | 0))) {
     __ZN7WebCore16IDBIndexMetadataD1Ev(i2 + (i4 * 48 & -1) + 8 | 0);
    }
    i4 = i4 + 1 | 0;
    if ((i4 | 0) >= (i3 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = i1 + 56 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 48 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i7 = i5 | 0;
     i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i7 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 52 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 44 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i6 = i2 | 0;
   i4 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i6 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i2 | 0) == (i1 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17deleteObjectStoreERNS2_21IDBTransactionBackendERKNS2_26DeleteObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_44NS_9allocatorISG_EEFvvEEclEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 __ZNK3WTF6String4utf8ENS_14ConversionModeE(i5, i1 + 32 | 0, 0);
 i6 = i5 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i7 = 0;
 } else {
  i7 = i5 + 8 | 0;
 }
 __ZN3WTF6String6formatEPKcz(i4, H_BASE + 592 | 0, (i5 = STACKTOP, STACKTOP = STACKTOP + 8 | 0, HEAP32[i5 >> 2] = i7, i5) | 0);
 STACKTOP = i5;
 i5 = __ZN3WTF10fastMallocEj(12) | 0;
 HEAP32[i5 >> 2] = 1;
 HEAP16[i5 + 4 >> 1] = 1201;
 i7 = i4 | 0;
 i4 = HEAP32[i7 >> 2] | 0;
 HEAP32[i5 + 8 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i8 = i4 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 i8 = i3 | 0;
 HEAP32[i8 >> 2] = i5;
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 24 >> 2] & 127](i5, i3);
 i3 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i8 = i3 | 0;
   i5 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i8 >> 2] = i5;
    break;
   }
   i5 = HEAP32[i3 + 8 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i8 = i5 | 0;
     i1 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
     if ((i1 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i8 >> 2] = i1;
      break;
     }
    }
   } while (0);
   __ZN3WTF8fastFreeEPv(i3);
  }
 } while (0);
 i3 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i7 = i3 | 0;
   i5 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i7 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i6 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i6 = i3 | 0;
 i5 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF8fastFreeEPv(i3);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i6 >> 2] = i5;
  STACKTOP = i2;
  return;
 }
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17createObjectStoreERNS2_21IDBTransactionBackendERKNS2_26CreateObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_10NS_9allocatorISG_EEFvvEEclEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 __ZNK3WTF6String4utf8ENS_14ConversionModeE(i5, i1 + 32 | 0, 0);
 i6 = i5 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i7 = 0;
 } else {
  i7 = i5 + 8 | 0;
 }
 __ZN3WTF6String6formatEPKcz(i4, H_BASE + 448 | 0, (i5 = STACKTOP, STACKTOP = STACKTOP + 8 | 0, HEAP32[i5 >> 2] = i7, i5) | 0);
 STACKTOP = i5;
 i5 = __ZN3WTF10fastMallocEj(12) | 0;
 HEAP32[i5 >> 2] = 1;
 HEAP16[i5 + 4 >> 1] = 1201;
 i7 = i4 | 0;
 i4 = HEAP32[i7 >> 2] | 0;
 HEAP32[i5 + 8 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i8 = i4 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 i8 = i3 | 0;
 HEAP32[i8 >> 2] = i5;
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 24 >> 2] & 127](i5, i3);
 i3 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i8 = i3 | 0;
   i5 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i8 >> 2] = i5;
    break;
   }
   i5 = HEAP32[i3 + 8 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i8 = i5 | 0;
     i1 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
     if ((i1 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i8 >> 2] = i1;
      break;
     }
    }
   } while (0);
   __ZN3WTF8fastFreeEPv(i3);
  }
 } while (0);
 i3 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i7 = i3 | 0;
   i5 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i7 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i6 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i6 = i3 | 0;
 i5 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF8fastFreeEPv(i3);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i6 >> 2] = i5;
  STACKTOP = i2;
  return;
 }
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteIndexERNS2_21IDBTransactionBackendERKNS2_20DeleteIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_14NS_9allocatorISG_EEFvvEEclEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 __ZNK3WTF6String4utf8ENS_14ConversionModeE(i5, i1 + 32 | 0, 0);
 i6 = i5 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i7 = 0;
 } else {
  i7 = i5 + 8 | 0;
 }
 __ZN3WTF6String6formatEPKcz(i4, H_BASE + 552 | 0, (i5 = STACKTOP, STACKTOP = STACKTOP + 8 | 0, HEAP32[i5 >> 2] = i7, i5) | 0);
 STACKTOP = i5;
 i5 = __ZN3WTF10fastMallocEj(12) | 0;
 HEAP32[i5 >> 2] = 1;
 HEAP16[i5 + 4 >> 1] = 1201;
 i7 = i4 | 0;
 i4 = HEAP32[i7 >> 2] | 0;
 HEAP32[i5 + 8 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i8 = i4 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 i8 = i3 | 0;
 HEAP32[i8 >> 2] = i5;
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 24 >> 2] & 127](i5, i3);
 i3 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i8 = i3 | 0;
   i5 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i8 >> 2] = i5;
    break;
   }
   i5 = HEAP32[i3 + 8 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i8 = i5 | 0;
     i1 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
     if ((i1 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i8 >> 2] = i1;
      break;
     }
    }
   } while (0);
   __ZN3WTF8fastFreeEPv(i3);
  }
 } while (0);
 i3 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i7 = i3 | 0;
   i5 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i7 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i6 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i6 = i3 | 0;
 i5 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF8fastFreeEPv(i3);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i6 >> 2] = i5;
  STACKTOP = i2;
  return;
 }
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11createIndexERNS2_21IDBTransactionBackendERKNS2_20CreateIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_12NS_9allocatorISG_EEFvvEEclEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 __ZNK3WTF6String4utf8ENS_14ConversionModeE(i5, i1 + 32 | 0, 0);
 i6 = i5 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i7 = 0;
 } else {
  i7 = i5 + 8 | 0;
 }
 __ZN3WTF6String6formatEPKcz(i4, H_BASE + 496 | 0, (i5 = STACKTOP, STACKTOP = STACKTOP + 8 | 0, HEAP32[i5 >> 2] = i7, i5) | 0);
 STACKTOP = i5;
 i5 = __ZN3WTF10fastMallocEj(12) | 0;
 HEAP32[i5 >> 2] = 1;
 HEAP16[i5 + 4 >> 1] = 1201;
 i7 = i4 | 0;
 i4 = HEAP32[i7 >> 2] | 0;
 HEAP32[i5 + 8 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i8 = i4 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 i8 = i3 | 0;
 HEAP32[i8 >> 2] = i5;
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 24 >> 2] & 127](i5, i3);
 i3 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i8 = i3 | 0;
   i5 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i8 >> 2] = i5;
    break;
   }
   i5 = HEAP32[i3 + 8 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i8 = i5 | 0;
     i1 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
     if ((i1 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i8 >> 2] = i1;
      break;
     }
    }
   } while (0);
   __ZN3WTF8fastFreeEPv(i3);
  }
 } while (0);
 i3 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i7 = i3 | 0;
   i5 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i7 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i6 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i6 = i3 | 0;
 i5 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF8fastFreeEPv(i3);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i6 >> 2] = i5;
  STACKTOP = i2;
  return;
 }
}
function __ZN3WTF6VectorINS_6RefPtrIN7WebCore21IDBIndexWriterLevelDBEEELj0ENS_15CrashOnOverflowEED1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = i1 + 8 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i7 = i5 | 0;
     i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
     if ((i8 | 0) != 0) {
      HEAP32[i7 >> 2] = i8;
      break;
     }
     i8 = i5 + 56 | 0;
     i7 = HEAP32[i8 >> 2] | 0;
     i9 = i5 + 48 | 0;
     if ((i7 | 0) != 0) {
      i10 = HEAP32[i9 >> 2] | 0;
      i11 = i10 + (i7 << 2) | 0;
      i7 = i10;
      while (1) {
       i10 = HEAP32[i7 >> 2] | 0;
       do {
        if ((i10 | 0) != 0) {
         i12 = i10 | 0;
         i13 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
         if ((i13 | 0) == 0) {
          __ZN7WebCore6IDBKeyD1Ev(i10);
          __ZN3WTF8fastFreeEPv(i10);
          break;
         } else {
          HEAP32[i12 >> 2] = i13;
          break;
         }
        }
       } while (0);
       i7 = i7 + 4 | 0;
       if ((i7 | 0) == (i11 | 0)) {
        break;
       }
      }
      HEAP32[i8 >> 2] = 0;
     }
     i11 = HEAP32[i9 >> 2] | 0;
     if ((i11 | 0) != 0) {
      HEAP32[i9 >> 2] = 0;
      HEAP32[i5 + 52 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i11);
     }
     __ZN7WebCore16IDBIndexMetadataD1Ev(i5 + 8 | 0);
     __ZN3WTF8fastFreeEPv(i5);
    }
   } while (0);
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_7_1NS_9allocatorISR_EEFvvEEclEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 __ZN3WTF6StringC1EPKc(i4, H_BASE + 168 | 0);
 i5 = __ZN3WTF10fastMallocEj(12) | 0;
 HEAP32[i5 >> 2] = 1;
 HEAP16[i5 + 4 >> 1] = 1201;
 i6 = i4 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 HEAP32[i5 + 8 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i7 = i4 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = i3 | 0;
 HEAP32[i7 >> 2] = i5;
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 24 >> 2] & 127](i5, i3);
 i3 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i7 = i3 | 0;
   i5 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i7 >> 2] = i5;
    break;
   }
   i5 = HEAP32[i3 + 8 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i7 = i5 | 0;
     i1 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
     if ((i1 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i7 >> 2] = i1;
      break;
     }
    }
   } while (0);
   __ZN3WTF8fastFreeEPv(i3);
  }
 } while (0);
 i3 = HEAP32[i6 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i6 = i3 | 0;
 i5 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i3);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i6 >> 2] = i5;
  STACKTOP = i2;
  return;
 }
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_6_0NS_9allocatorISR_EEFvvEEclEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 __ZN3WTF6StringC1EPKc(i4, H_BASE + 392 | 0);
 i5 = __ZN3WTF10fastMallocEj(12) | 0;
 HEAP32[i5 >> 2] = 1;
 HEAP16[i5 + 4 >> 1] = 1201;
 i6 = i4 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 HEAP32[i5 + 8 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i7 = i4 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = i3 | 0;
 HEAP32[i7 >> 2] = i5;
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 24 >> 2] & 127](i5, i3);
 i3 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i7 = i3 | 0;
   i5 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i7 >> 2] = i5;
    break;
   }
   i5 = HEAP32[i3 + 8 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i7 = i5 | 0;
     i1 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
     if ((i1 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i7 >> 2] = i1;
      break;
     }
    }
   } while (0);
   __ZN3WTF8fastFreeEPv(i3);
  }
 } while (0);
 i3 = HEAP32[i6 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i6 = i3 | 0;
 i5 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i3);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i6 >> 2] = i5;
  STACKTOP = i2;
  return;
 }
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_5NS_9allocatorISR_EEFvvEEclEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 __ZN3WTF6StringC1EPKc(i4, H_BASE + 352 | 0);
 i5 = __ZN3WTF10fastMallocEj(12) | 0;
 HEAP32[i5 >> 2] = 1;
 HEAP16[i5 + 4 >> 1] = 1201;
 i6 = i4 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 HEAP32[i5 + 8 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i7 = i4 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = i3 | 0;
 HEAP32[i7 >> 2] = i5;
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 24 >> 2] & 127](i5, i3);
 i3 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i7 = i3 | 0;
   i5 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i7 >> 2] = i5;
    break;
   }
   i5 = HEAP32[i3 + 8 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i7 = i5 | 0;
     i1 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
     if ((i1 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i7 >> 2] = i1;
      break;
     }
    }
   } while (0);
   __ZN3WTF8fastFreeEPv(i3);
  }
 } while (0);
 i3 = HEAP32[i6 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i6 = i3 | 0;
 i5 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i3);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i6 >> 2] = i5;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore16IDBIndexMetadataC1ERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i4 = i3 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i1 + 8 | 0;
 i3 = i2 + 8 | 0;
 i5 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i4 + 4 >> 2] = i5;
 HEAP32[i1 + 16 >> 2] = HEAP32[i2 + 16 >> 2];
 i5 = HEAP32[i2 + 20 >> 2] | 0;
 HEAP32[i1 + 20 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i4 = i5 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = HEAP32[i2 + 28 >> 2] | 0;
 i5 = i2 + 32 | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 i6 = i1 + 24 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i1 + 28 | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i1 + 32 >> 2] = i3;
 do {
  if ((i4 | 0) != 0) {
   if (i4 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   }
   i3 = __ZN3WTF18fastMallocGoodSizeEj(i4 << 2) | 0;
   HEAP32[i7 >> 2] = i3 >>> 2;
   i8 = __ZN3WTF10fastMallocEj(i3) | 0;
   i3 = i8;
   HEAP32[i6 >> 2] = i3;
   if ((i8 | 0) == 0) {
    break;
   }
   i8 = HEAP32[i2 + 24 >> 2] | 0;
   i9 = HEAP32[i5 >> 2] | 0;
   i10 = i8 + (i9 << 2) | 0;
   if ((i9 | 0) == 0) {
    break;
   } else {
    i11 = i8;
    i12 = i3;
   }
   while (1) {
    i3 = HEAP32[i11 >> 2] | 0;
    HEAP32[i12 >> 2] = i3;
    if ((i3 | 0) != 0) {
     i8 = i3 | 0;
     HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
    }
    i8 = i11 + 4 | 0;
    if ((i8 | 0) == (i10 | 0)) {
     break;
    } else {
     i11 = i8;
     i12 = i12 + 4 | 0;
    }
   }
  }
 } while (0);
 HEAP8[i1 + 36 | 0] = HEAP8[i2 + 36 | 0] & 1;
 HEAP8[i1 + 37 | 0] = HEAP8[i2 + 37 | 0] & 1;
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_8_2NS_9allocatorISR_EEFvvEEclEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = __ZN3WTF10fastMallocEj(12) | 0;
 HEAP32[i4 >> 2] = 1;
 HEAP16[i4 + 4 >> 1] = 1202;
 i5 = HEAP32[i1 + 32 >> 2] | 0;
 HEAP32[i4 + 8 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i6 = i5 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
 }
 i6 = i3 | 0;
 HEAP32[i6 >> 2] = i4;
 i4 = HEAP32[i1 + 24 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 24 >> 2] & 127](i4, i3);
 i3 = HEAP32[i6 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i6 = i3 | 0;
 i4 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i6 >> 2] = i4;
  STACKTOP = i2;
  return;
 }
 i4 = HEAP32[i3 + 8 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i6 = i4 | 0;
   i1 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i6 >> 2] = i1;
    break;
   }
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i3);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore16IDBIndexMetadataaSERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = i3 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i3;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i5 = i2 + 8 | 0;
 i4 = HEAP32[i5 + 4 >> 2] | 0;
 i3 = i1 + 8 | 0;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i3 + 4 >> 2] = i4;
 HEAP32[i1 + 16 >> 2] = HEAP32[i2 + 16 >> 2];
 i4 = HEAP32[i2 + 20 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i3 = i4 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 i3 = i1 + 20 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i4;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEEaSERKS3_(i1 + 24 | 0, i2 + 24 | 0) | 0;
 HEAP8[i1 + 36 | 0] = HEAP8[i2 + 36 | 0] & 1;
 HEAP8[i1 + 37 | 0] = HEAP8[i2 + 37 | 0] & 1;
 return i1 | 0;
}
function __ZN7WebCore16IDBIndexMetadataD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 + 32 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 24 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i7 = i5 | 0;
     i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i7 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 28 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i6 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i6;
  return;
 }
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB21changeDatabaseVersionERNS2_21IDBTransactionBackendERKNS2_18IDBDatabaseBackend22VersionChangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_46NS_9allocatorISH_EEFvvEED0Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1792;
 i2 = i1 + 8 | 0;
 i3 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    break;
   }
   i5 = HEAP32[i3 + 8 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i4 = i5 | 0;
     i6 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
     if ((i6 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i4 >> 2] = i6;
      break;
     }
    }
   } while (0);
   __ZN3WTF8fastFreeEPv(i3);
  }
 } while (0);
 i3 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i3 | 0) == (i2 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 16 >> 2] & 1023](i3);
  i7 = i1;
  __ZdlPv(i7);
  return;
 }
 if ((i3 | 0) == 0) {
  i7 = i1;
  __ZdlPv(i7);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 20 >> 2] & 1023](i3);
 i7 = i1;
 __ZdlPv(i7);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB21changeDatabaseVersionERNS2_21IDBTransactionBackendERKNS2_18IDBDatabaseBackend22VersionChangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_46NS_9allocatorISH_EEFvvEE18destroy_deallocateEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = i1 + 8 | 0;
 i3 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    break;
   }
   i5 = HEAP32[i3 + 8 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i4 = i5 | 0;
     i6 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
     if ((i6 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i4 >> 2] = i6;
      break;
     }
    }
   } while (0);
   __ZN3WTF8fastFreeEPv(i3);
  }
 } while (0);
 i3 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i3 | 0) == (i2 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 16 >> 2] & 1023](i3);
  i7 = i1;
  __ZdlPv(i7);
  return;
 }
 if ((i3 | 0) == 0) {
  i7 = i1;
  __ZdlPv(i7);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 20 >> 2] & 1023](i3);
 i7 = i1;
 __ZdlPv(i7);
 return;
}
function __ZNK7WebCore12GetOperation7keyPathEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 HEAP32[i1 >> 2] = HEAP32[i2 + 32 >> 2];
 i3 = HEAP32[i2 + 36 >> 2] | 0;
 HEAP32[i1 + 4 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i4 = i3 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = HEAP32[i2 + 44 >> 2] | 0;
 i3 = i2 + 48 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 i6 = i1 + 8 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i1 + 12 | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i1 + 16 >> 2] = i5;
 if ((i4 | 0) == 0) {
  return;
 }
 if (i4 >>> 0 > 1073741823 >>> 0) {
  _WTFCrash();
 }
 i5 = __ZN3WTF18fastMallocGoodSizeEj(i4 << 2) | 0;
 HEAP32[i7 >> 2] = i5 >>> 2;
 i7 = __ZN3WTF10fastMallocEj(i5) | 0;
 i5 = i7;
 HEAP32[i6 >> 2] = i5;
 if ((i7 | 0) == 0) {
  return;
 }
 i7 = HEAP32[i2 + 40 >> 2] | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 i3 = i7 + (i2 << 2) | 0;
 if ((i2 | 0) == 0) {
  return;
 } else {
  i8 = i7;
  i9 = i5;
 }
 while (1) {
  i5 = HEAP32[i8 >> 2] | 0;
  HEAP32[i9 >> 2] = i5;
  if ((i5 | 0) != 0) {
   i7 = i5 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
  }
  i7 = i8 + 4 | 0;
  if ((i7 | 0) == (i3 | 0)) {
   break;
  } else {
   i8 = i7;
   i9 = i9 + 4 | 0;
  }
 }
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB21changeDatabaseVersionERNS2_21IDBTransactionBackendERKNS2_18IDBDatabaseBackend22VersionChangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_46NS_9allocatorISH_EEFvvEEclEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i1 + 32 >> 2] | 0;
 HEAP32[i4 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i6 = i5 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 }
 i6 = HEAP32[i1 + 24 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i6 >> 2] | 0) + 24 >> 2] & 127](i6, i3);
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i3 | 0;
 i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i6 | 0) != 0) {
  HEAP32[i4 >> 2] = i6;
  STACKTOP = i2;
  return;
 }
 i6 = HEAP32[i3 + 8 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i4 = i6 | 0;
   i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i4 >> 2] = i1;
    break;
   }
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i3);
 STACKTOP = i2;
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB21changeDatabaseVersionERNS2_21IDBTransactionBackendERKNS2_18IDBDatabaseBackend22VersionChangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_46NS_9allocatorISH_EEFvvEED2Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1792;
 i2 = i1 + 8 | 0;
 i3 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    break;
   }
   i5 = HEAP32[i3 + 8 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i4 = i5 | 0;
     i6 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
     if ((i6 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i4 >> 2] = i6;
      break;
     }
    }
   } while (0);
   __ZN3WTF8fastFreeEPv(i3);
  }
 } while (0);
 i3 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i3 | 0) == (i2 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 16 >> 2] & 1023](i3);
  return;
 }
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 20 >> 2] & 1023](i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB21changeDatabaseVersionERNS2_21IDBTransactionBackendERKNS2_18IDBDatabaseBackend22VersionChangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_46NS_9allocatorISH_EEFvvEE7destroyEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 8 | 0;
 i3 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    break;
   }
   i5 = HEAP32[i3 + 8 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i4 = i5 | 0;
     i6 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
     if ((i6 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i4 >> 2] = i6;
      break;
     }
    }
   } while (0);
   __ZN3WTF8fastFreeEPv(i3);
  }
 } while (0);
 i3 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i3 | 0) == (i2 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 16 >> 2] & 1023](i3);
  return;
 }
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 20 >> 2] & 1023](i3);
 return;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_8_2NS_9allocatorISR_EEFvvEE7__cloneEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = __Znwj(40) | 0;
 if ((i2 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 HEAP32[i2 >> 2] = H_BASE + 2392;
 i4 = i2 + 8 | 0;
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   HEAP32[i2 + 24 >> 2] = 0;
  } else {
   if ((i5 | 0) == (i1 + 8 | 0)) {
    i6 = i4;
    HEAP32[i2 + 24 >> 2] = i6;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 12 >> 2] & 127](i5, i6);
    break;
   } else {
    HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 127](i5) | 0;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i1 + 32 >> 2] | 0;
 HEAP32[i2 + 32 >> 2] = i5;
 if ((i5 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 i1 = i5 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
 i3 = i2;
 return i3 | 0;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_8_2NS_9allocatorISR_EEFvvEE7__cloneEPNS0_6__baseISU_EE_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = H_BASE + 2392;
 i3 = i2 + 8 | 0;
 i4 = i1 + 24 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   HEAP32[i2 + 24 >> 2] = 0;
  } else {
   if ((i5 | 0) == (i1 + 8 | 0)) {
    HEAP32[i2 + 24 >> 2] = i3;
    i6 = HEAP32[i4 >> 2] | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i6 >> 2] | 0) + 12 >> 2] & 127](i6, i3);
    break;
   } else {
    HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 127](i5) | 0;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i1 + 32 >> 2] | 0;
 HEAP32[i2 + 32 >> 2] = i5;
 if ((i5 | 0) == 0) {
  return;
 }
 i2 = i5 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_9_3NS_9allocatorISR_EEFvvEEclEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = 0;
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 24 >> 2] & 127](i5, i3);
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i3 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i4 >> 2] = i5;
  STACKTOP = i2;
  return;
 }
 i5 = HEAP32[i3 + 8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 | 0;
   i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i4 >> 2] = i1;
    break;
   }
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i3);
 STACKTOP = i2;
 return;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB21changeDatabaseVersionERNS2_21IDBTransactionBackendERKNS2_18IDBDatabaseBackend22VersionChangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_46NS_9allocatorISH_EEFvvEE7__cloneEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = __Znwj(40) | 0;
 if ((i2 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 HEAP32[i2 >> 2] = H_BASE + 1792;
 i4 = i2 + 8 | 0;
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   HEAP32[i2 + 24 >> 2] = 0;
  } else {
   if ((i5 | 0) == (i1 + 8 | 0)) {
    i6 = i4;
    HEAP32[i2 + 24 >> 2] = i6;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 12 >> 2] & 127](i5, i6);
    break;
   } else {
    HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 127](i5) | 0;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i1 + 32 >> 2] | 0;
 HEAP32[i2 + 32 >> 2] = i5;
 if ((i5 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 i1 = i5 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 i3 = i2;
 return i3 | 0;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB21changeDatabaseVersionERNS2_21IDBTransactionBackendERKNS2_18IDBDatabaseBackend22VersionChangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_46NS_9allocatorISH_EEFvvEE7__cloneEPNS0_6__baseISK_EE_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = H_BASE + 1792;
 i3 = i2 + 8 | 0;
 i4 = i1 + 24 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   HEAP32[i2 + 24 >> 2] = 0;
  } else {
   if ((i5 | 0) == (i1 + 8 | 0)) {
    HEAP32[i2 + 24 >> 2] = i3;
    i6 = HEAP32[i4 >> 2] | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i6 >> 2] | 0) + 12 >> 2] & 127](i6, i3);
    break;
   } else {
    HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 127](i5) | 0;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i1 + 32 >> 2] | 0;
 HEAP32[i2 + 32 >> 2] = i5;
 if ((i5 | 0) == 0) {
  return;
 }
 i2 = i5 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 return;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17createObjectStoreERNS2_21IDBTransactionBackendERKNS2_26CreateObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_10NS_9allocatorISG_EEFvvEE7__cloneEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = __Znwj(40) | 0;
 if ((i2 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 HEAP32[i2 >> 2] = H_BASE + 1952;
 i4 = i2 + 8 | 0;
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   HEAP32[i2 + 24 >> 2] = 0;
  } else {
   if ((i5 | 0) == (i1 + 8 | 0)) {
    i6 = i4;
    HEAP32[i2 + 24 >> 2] = i6;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 12 >> 2] & 127](i5, i6);
    break;
   } else {
    HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 127](i5) | 0;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i1 + 32 >> 2] | 0;
 HEAP32[i2 + 32 >> 2] = i5;
 if ((i5 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 i1 = i5 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
 i3 = i2;
 return i3 | 0;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB21changeDatabaseVersionERNS2_21IDBTransactionBackendERKNS2_18IDBDatabaseBackend22VersionChangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_47_0NS_9allocatorISH_EEFvvEEclEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = 0;
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 24 >> 2] & 127](i5, i3);
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i3 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i4 >> 2] = i5;
  STACKTOP = i2;
  return;
 }
 i5 = HEAP32[i3 + 8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 | 0;
   i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i4 >> 2] = i1;
    break;
   }
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i3);
 STACKTOP = i2;
 return;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17createObjectStoreERNS2_21IDBTransactionBackendERKNS2_26CreateObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_10NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = H_BASE + 1952;
 i3 = i2 + 8 | 0;
 i4 = i1 + 24 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   HEAP32[i2 + 24 >> 2] = 0;
  } else {
   if ((i5 | 0) == (i1 + 8 | 0)) {
    HEAP32[i2 + 24 >> 2] = i3;
    i6 = HEAP32[i4 >> 2] | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i6 >> 2] | 0) + 12 >> 2] & 127](i6, i3);
    break;
   } else {
    HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 127](i5) | 0;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i1 + 32 >> 2] | 0;
 HEAP32[i2 + 32 >> 2] = i5;
 if ((i5 | 0) == 0) {
  return;
 }
 i2 = i5 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_8_2NS_9allocatorISR_EEFvvEED0Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 HEAP32[i1 >> 2] = H_BASE + 2392;
 i2 = i1 + 8 | 0;
 i3 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i4 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i3 | 0) == (i2 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 16 >> 2] & 1023](i3);
  i6 = i1;
  __ZdlPv(i6);
  return;
 }
 if ((i3 | 0) == 0) {
  i6 = i1;
  __ZdlPv(i6);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 20 >> 2] & 1023](i3);
 i6 = i1;
 __ZdlPv(i6);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17deleteObjectStoreERNS2_21IDBTransactionBackendERKNS2_26DeleteObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_45_0NS_9allocatorISG_EEFvvEEclEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = 0;
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 24 >> 2] & 127](i5, i3);
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i3 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i4 >> 2] = i5;
  STACKTOP = i2;
  return;
 }
 i5 = HEAP32[i3 + 8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 | 0;
   i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i4 >> 2] = i1;
    break;
   }
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i3);
 STACKTOP = i2;
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17createObjectStoreERNS2_21IDBTransactionBackendERKNS2_26CreateObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_11_0NS_9allocatorISG_EEFvvEEclEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = 0;
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 24 >> 2] & 127](i5, i3);
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i3 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i4 >> 2] = i5;
  STACKTOP = i2;
  return;
 }
 i5 = HEAP32[i3 + 8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 | 0;
   i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i4 >> 2] = i1;
    break;
   }
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i3);
 STACKTOP = i2;
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB16clearObjectStoreERNS2_21IDBTransactionBackendERKNS2_25ClearObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_43_0NS_9allocatorISG_EEFvvEEclEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = 0;
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 24 >> 2] & 127](i5, i3);
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i3 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i4 >> 2] = i5;
  STACKTOP = i2;
  return;
 }
 i5 = HEAP32[i3 + 8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 | 0;
   i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i4 >> 2] = i1;
    break;
   }
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i3);
 STACKTOP = i2;
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB16clearObjectStoreERNS2_21IDBTransactionBackendERKNS2_25ClearObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_42NS_9allocatorISG_EEFvvEEclEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = 0;
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 24 >> 2] & 127](i5, i3);
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i3 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i4 >> 2] = i5;
  STACKTOP = i2;
  return;
 }
 i5 = HEAP32[i3 + 8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 | 0;
   i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i4 >> 2] = i1;
    break;
   }
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i3);
 STACKTOP = i2;
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_8_2NS_9allocatorISR_EEFvvEE18destroy_deallocateEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 8 | 0;
 i3 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i4 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i3 | 0) == (i2 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 16 >> 2] & 1023](i3);
  i6 = i1;
  __ZdlPv(i6);
  return;
 }
 if ((i3 | 0) == 0) {
  i6 = i1;
  __ZdlPv(i6);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 20 >> 2] & 1023](i3);
 i6 = i1;
 __ZdlPv(i6);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteRangeERNS2_21IDBTransactionBackendERKNS2_20DeleteRangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_41_0NS_9allocatorISG_EEFvvEEclEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = 0;
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 24 >> 2] & 127](i5, i3);
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i3 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i4 >> 2] = i5;
  STACKTOP = i2;
  return;
 }
 i5 = HEAP32[i3 + 8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 | 0;
   i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i4 >> 2] = i1;
    break;
   }
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i3);
 STACKTOP = i2;
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteIndexERNS2_21IDBTransactionBackendERKNS2_20DeleteIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_15_0NS_9allocatorISG_EEFvvEEclEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = 0;
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 24 >> 2] & 127](i5, i3);
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i3 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i4 >> 2] = i5;
  STACKTOP = i2;
  return;
 }
 i5 = HEAP32[i3 + 8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 | 0;
   i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i4 >> 2] = i1;
    break;
   }
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i3);
 STACKTOP = i2;
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11createIndexERNS2_21IDBTransactionBackendERKNS2_20CreateIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_13_0NS_9allocatorISG_EEFvvEEclEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = 0;
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 24 >> 2] & 127](i5, i3);
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i3 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i4 >> 2] = i5;
  STACKTOP = i2;
  return;
 }
 i5 = HEAP32[i3 + 8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 | 0;
   i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i4 >> 2] = i1;
    break;
   }
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i3);
 STACKTOP = i2;
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteRangeERNS2_21IDBTransactionBackendERKNS2_20DeleteRangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_40NS_9allocatorISG_EEFvvEEclEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = 0;
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 24 >> 2] & 127](i5, i3);
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i3 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i4 >> 2] = i5;
  STACKTOP = i2;
  return;
 }
 i5 = HEAP32[i3 + 8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 | 0;
   i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i4 >> 2] = i1;
    break;
   }
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i3);
 STACKTOP = i2;
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB10openCursorERNS2_21IDBTransactionBackendERKNS2_19OpenCursorOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_37_0NS_9allocatorISG_EEFvvEEclEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = 0;
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 24 >> 2] & 127](i5, i3);
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i3 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i4 >> 2] = i5;
  STACKTOP = i2;
  return;
 }
 i5 = HEAP32[i3 + 8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 | 0;
   i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i4 >> 2] = i1;
    break;
   }
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i3);
 STACKTOP = i2;
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB10openCursorERNS2_21IDBTransactionBackendERKNS2_19OpenCursorOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_36NS_9allocatorISG_EEFvvEEclEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = 0;
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 24 >> 2] & 127](i5, i3);
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i3 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i4 >> 2] = i5;
  STACKTOP = i2;
  return;
 }
 i5 = HEAP32[i3 + 8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 | 0;
   i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i4 >> 2] = i1;
    break;
   }
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i3);
 STACKTOP = i2;
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB5countERNS2_21IDBTransactionBackendERKNS2_14CountOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_39_0NS_9allocatorISG_EEFvvEEclEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = 0;
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 24 >> 2] & 127](i5, i3);
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i3 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i4 >> 2] = i5;
  STACKTOP = i2;
  return;
 }
 i5 = HEAP32[i3 + 8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 | 0;
   i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i4 >> 2] = i1;
    break;
   }
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i3);
 STACKTOP = i2;
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_27__10_NS_9allocatorISG_EEFvvEEclEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = 0;
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 24 >> 2] & 127](i5, i3);
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i3 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i4 >> 2] = i5;
  STACKTOP = i2;
  return;
 }
 i5 = HEAP32[i3 + 8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 | 0;
   i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i4 >> 2] = i1;
    break;
   }
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i3);
 STACKTOP = i2;
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB5countERNS2_21IDBTransactionBackendERKNS2_14CountOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_38NS_9allocatorISG_EEFvvEEclEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = 0;
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 24 >> 2] & 127](i5, i3);
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i3 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i4 >> 2] = i5;
  STACKTOP = i2;
  return;
 }
 i5 = HEAP32[i3 + 8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 | 0;
   i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i4 >> 2] = i1;
    break;
   }
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i3);
 STACKTOP = i2;
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_35_6NS_9allocatorISG_EEFvvEEclEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = 0;
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 24 >> 2] & 127](i5, i3);
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i3 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i4 >> 2] = i5;
  STACKTOP = i2;
  return;
 }
 i5 = HEAP32[i3 + 8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 | 0;
   i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i4 >> 2] = i1;
    break;
   }
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i3);
 STACKTOP = i2;
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_34_5NS_9allocatorISG_EEFvvEEclEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = 0;
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 24 >> 2] & 127](i5, i3);
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i3 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i4 >> 2] = i5;
  STACKTOP = i2;
  return;
 }
 i5 = HEAP32[i3 + 8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 | 0;
   i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i4 >> 2] = i1;
    break;
   }
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i3);
 STACKTOP = i2;
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_33_4NS_9allocatorISG_EEFvvEEclEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = 0;
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 24 >> 2] & 127](i5, i3);
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i3 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i4 >> 2] = i5;
  STACKTOP = i2;
  return;
 }
 i5 = HEAP32[i3 + 8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 | 0;
   i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i4 >> 2] = i1;
    break;
   }
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i3);
 STACKTOP = i2;
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_32_3NS_9allocatorISG_EEFvvEEclEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = 0;
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 24 >> 2] & 127](i5, i3);
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i3 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i4 >> 2] = i5;
  STACKTOP = i2;
  return;
 }
 i5 = HEAP32[i3 + 8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 | 0;
   i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i4 >> 2] = i1;
    break;
   }
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i3);
 STACKTOP = i2;
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_31_2NS_9allocatorISG_EEFvvEEclEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = 0;
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 24 >> 2] & 127](i5, i3);
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i3 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i4 >> 2] = i5;
  STACKTOP = i2;
  return;
 }
 i5 = HEAP32[i3 + 8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 | 0;
   i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i4 >> 2] = i1;
    break;
   }
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i3);
 STACKTOP = i2;
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_30_1NS_9allocatorISG_EEFvvEEclEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = 0;
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 24 >> 2] & 127](i5, i3);
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i3 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i4 >> 2] = i5;
  STACKTOP = i2;
  return;
 }
 i5 = HEAP32[i3 + 8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 | 0;
   i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i4 >> 2] = i1;
    break;
   }
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i3);
 STACKTOP = i2;
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_29_0NS_9allocatorISG_EEFvvEEclEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = 0;
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 24 >> 2] & 127](i5, i3);
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i3 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i4 >> 2] = i5;
  STACKTOP = i2;
  return;
 }
 i5 = HEAP32[i3 + 8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 | 0;
   i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i4 >> 2] = i1;
    break;
   }
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i3);
 STACKTOP = i2;
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_26_9NS_9allocatorISG_EEFvvEEclEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = 0;
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 24 >> 2] & 127](i5, i3);
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i3 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i4 >> 2] = i5;
  STACKTOP = i2;
  return;
 }
 i5 = HEAP32[i3 + 8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 | 0;
   i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i4 >> 2] = i1;
    break;
   }
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i3);
 STACKTOP = i2;
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_25_8NS_9allocatorISG_EEFvvEEclEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = 0;
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 24 >> 2] & 127](i5, i3);
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i3 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i4 >> 2] = i5;
  STACKTOP = i2;
  return;
 }
 i5 = HEAP32[i3 + 8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 | 0;
   i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i4 >> 2] = i1;
    break;
   }
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i3);
 STACKTOP = i2;
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_24_7NS_9allocatorISG_EEFvvEEclEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = 0;
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 24 >> 2] & 127](i5, i3);
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i3 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i4 >> 2] = i5;
  STACKTOP = i2;
  return;
 }
 i5 = HEAP32[i3 + 8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 | 0;
   i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i4 >> 2] = i1;
    break;
   }
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i3);
 STACKTOP = i2;
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_23_6NS_9allocatorISG_EEFvvEEclEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = 0;
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 24 >> 2] & 127](i5, i3);
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i3 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i4 >> 2] = i5;
  STACKTOP = i2;
  return;
 }
 i5 = HEAP32[i3 + 8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 | 0;
   i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i4 >> 2] = i1;
    break;
   }
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i3);
 STACKTOP = i2;
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_22_5NS_9allocatorISG_EEFvvEEclEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = 0;
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 24 >> 2] & 127](i5, i3);
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i3 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i4 >> 2] = i5;
  STACKTOP = i2;
  return;
 }
 i5 = HEAP32[i3 + 8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 | 0;
   i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i4 >> 2] = i1;
    break;
   }
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i3);
 STACKTOP = i2;
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_21_4NS_9allocatorISG_EEFvvEEclEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = 0;
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 24 >> 2] & 127](i5, i3);
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i3 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i4 >> 2] = i5;
  STACKTOP = i2;
  return;
 }
 i5 = HEAP32[i3 + 8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 | 0;
   i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i4 >> 2] = i1;
    break;
   }
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i3);
 STACKTOP = i2;
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_20_3NS_9allocatorISG_EEFvvEEclEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = 0;
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 24 >> 2] & 127](i5, i3);
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i3 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i4 >> 2] = i5;
  STACKTOP = i2;
  return;
 }
 i5 = HEAP32[i3 + 8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 | 0;
   i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i4 >> 2] = i1;
    break;
   }
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i3);
 STACKTOP = i2;
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_19_2NS_9allocatorISG_EEFvvEEclEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = 0;
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 24 >> 2] & 127](i5, i3);
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i3 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i4 >> 2] = i5;
  STACKTOP = i2;
  return;
 }
 i5 = HEAP32[i3 + 8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 | 0;
   i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i4 >> 2] = i1;
    break;
   }
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i3);
 STACKTOP = i2;
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_18_1NS_9allocatorISG_EEFvvEEclEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = 0;
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 24 >> 2] & 127](i5, i3);
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i3 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i4 >> 2] = i5;
  STACKTOP = i2;
  return;
 }
 i5 = HEAP32[i3 + 8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 | 0;
   i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i4 >> 2] = i1;
    break;
   }
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i3);
 STACKTOP = i2;
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_17_0NS_9allocatorISG_EEFvvEEclEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = 0;
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 24 >> 2] & 127](i5, i3);
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i3 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i4 >> 2] = i5;
  STACKTOP = i2;
  return;
 }
 i5 = HEAP32[i3 + 8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 | 0;
   i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i4 >> 2] = i1;
    break;
   }
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i3);
 STACKTOP = i2;
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_28NS_9allocatorISG_EEFvvEEclEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = 0;
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 24 >> 2] & 127](i5, i3);
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i3 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i4 >> 2] = i5;
  STACKTOP = i2;
  return;
 }
 i5 = HEAP32[i3 + 8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 | 0;
   i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i4 >> 2] = i1;
    break;
   }
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i3);
 STACKTOP = i2;
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_16NS_9allocatorISG_EEFvvEEclEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = 0;
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 24 >> 2] & 127](i5, i3);
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i3 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i4 >> 2] = i5;
  STACKTOP = i2;
  return;
 }
 i5 = HEAP32[i3 + 8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 | 0;
   i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i4 >> 2] = i1;
    break;
   }
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i3);
 STACKTOP = i2;
 return;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB33getOrEstablishIDBDatabaseMetadataENS_8functionIFvRKNS2_19IDBDatabaseMetadataEbEEEE3$_0NS_9allocatorISA_EES8_E7__cloneEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = __Znwj(40) | 0;
 if ((i2 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 HEAP32[i2 >> 2] = H_BASE + 1672;
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 HEAP32[i2 + 8 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i5 = i4 + 4 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 HEAP32[i2 + 12 >> 2] = HEAP32[i1 + 12 >> 2];
 i5 = HEAP32[i1 + 32 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i2 + 32 >> 2] = 0;
  i3 = i2;
  return i3 | 0;
 }
 if ((i5 | 0) == (i1 + 16 | 0)) {
  i1 = i2 + 16 | 0;
  HEAP32[i2 + 32 >> 2] = i1;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 12 >> 2] & 127](i5, i1);
  i3 = i2;
  return i3 | 0;
 } else {
  HEAP32[i2 + 32 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 127](i5) | 0;
  i3 = i2;
  return i3 | 0;
 }
 return 0;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB33getOrEstablishIDBDatabaseMetadataENS_8functionIFvRKNS2_19IDBDatabaseMetadataEbEEEE3$_0NS_9allocatorISA_EES8_ED0Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1672;
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i2 | 0) == (i1 + 16 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 i4 = i2 + 4 | 0;
 i2 = i4 | 0;
 i5 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i2 >> 2] = i5;
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 i5 = i4 - 4 | 0;
 if ((i5 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 1023](i5);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB33getOrEstablishIDBDatabaseMetadataENS_8functionIFvRKNS2_19IDBDatabaseMetadataEbEEEE3$_0NS_9allocatorISA_EES8_E18destroy_deallocateEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i2 | 0) == (i1 + 16 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 i4 = i2 + 4 | 0;
 i2 = i4 | 0;
 i5 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i2 >> 2] = i5;
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 i5 = i4 - 4 | 0;
 if ((i5 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 1023](i5);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB14deleteDatabaseERKN3WTF6StringENS_8functionIFvbEEEE3$_1NS_9allocatorISB_EES9_E7__cloneEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = __Znwj(40) | 0;
 if ((i2 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 HEAP32[i2 >> 2] = H_BASE + 2192;
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 HEAP32[i2 + 8 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i5 = i4 + 4 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 HEAP32[i2 + 12 >> 2] = HEAP32[i1 + 12 >> 2];
 i5 = HEAP32[i1 + 32 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i2 + 32 >> 2] = 0;
  i3 = i2;
  return i3 | 0;
 }
 if ((i5 | 0) == (i1 + 16 | 0)) {
  i1 = i2 + 16 | 0;
  HEAP32[i2 + 32 >> 2] = i1;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 12 >> 2] & 127](i5, i1);
  i3 = i2;
  return i3 | 0;
 } else {
  HEAP32[i2 + 32 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 127](i5) | 0;
  i3 = i2;
  return i3 | 0;
 }
 return 0;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17createObjectStoreERNS2_21IDBTransactionBackendERKNS2_26CreateObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_10NS_9allocatorISG_EEFvvEED0Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1952;
 i2 = i1 + 8 | 0;
 i3 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i4 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i3 | 0) == (i2 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 16 >> 2] & 1023](i3);
  i6 = i1;
  __ZdlPv(i6);
  return;
 }
 if ((i3 | 0) == 0) {
  i6 = i1;
  __ZdlPv(i6);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 20 >> 2] & 1023](i3);
 i6 = i1;
 __ZdlPv(i6);
 return;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB33getOrEstablishIDBDatabaseMetadataENS_8functionIFvRKNS2_19IDBDatabaseMetadataEbEEEE3$_0NS_9allocatorISA_EES8_E7__cloneEPNS0_6__baseIS8_EE_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = H_BASE + 1672;
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 HEAP32[i2 + 8 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i4 = i3 + 4 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 HEAP32[i2 + 12 >> 2] = HEAP32[i1 + 12 >> 2];
 i4 = i2 + 16 | 0;
 i3 = i1 + 32 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i2 + 32 >> 2] = 0;
  return;
 }
 if ((i5 | 0) == (i1 + 16 | 0)) {
  HEAP32[i2 + 32 >> 2] = i4;
  i1 = HEAP32[i3 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 127](i1, i4);
  return;
 } else {
  HEAP32[i2 + 32 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 127](i5) | 0;
  return;
 }
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17deleteObjectStoreERNS2_21IDBTransactionBackendERKNS2_26DeleteObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_44NS_9allocatorISG_EEFvvEE7__cloneEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = __Znwj(104) | 0;
 if ((i2 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 HEAP32[i2 >> 2] = H_BASE + 1872;
 i4 = i2 + 8 | 0;
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   HEAP32[i2 + 24 >> 2] = 0;
  } else {
   if ((i5 | 0) == (i1 + 8 | 0)) {
    i6 = i4;
    HEAP32[i2 + 24 >> 2] = i6;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 12 >> 2] & 127](i5, i6);
    break;
   } else {
    HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 127](i5) | 0;
    break;
   }
  }
 } while (0);
 __ZN7WebCore22IDBObjectStoreMetadataC1ERKS0_(i2 + 32 | 0, i1 + 32 | 0);
 i3 = i2;
 return i3 | 0;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17deleteObjectStoreERNS2_21IDBTransactionBackendERKNS2_26DeleteObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_44NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = H_BASE + 1872;
 i3 = i2 + 8 | 0;
 i4 = i1 + 24 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   HEAP32[i2 + 24 >> 2] = 0;
  } else {
   if ((i5 | 0) == (i1 + 8 | 0)) {
    HEAP32[i2 + 24 >> 2] = i3;
    i6 = HEAP32[i4 >> 2] | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i6 >> 2] | 0) + 12 >> 2] & 127](i6, i3);
    break;
   } else {
    HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 127](i5) | 0;
    break;
   }
  }
 } while (0);
 __ZN7WebCore22IDBObjectStoreMetadataC1ERKS0_(i2 + 32 | 0, i1 + 32 | 0);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB14deleteDatabaseERKN3WTF6StringENS_8functionIFvbEEEE3$_1NS_9allocatorISB_EES9_ED0Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 2192;
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i2 | 0) == (i1 + 16 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 i4 = i2 + 4 | 0;
 i2 = i4 | 0;
 i5 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i2 >> 2] = i5;
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 i5 = i4 - 4 | 0;
 if ((i5 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 1023](i5);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_8_2NS_9allocatorISR_EEFvvEED2Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 2392;
 i2 = i1 + 8 | 0;
 i3 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i4 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i3 | 0) == (i2 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 16 >> 2] & 1023](i3);
  return;
 }
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 20 >> 2] & 1023](i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17createObjectStoreERNS2_21IDBTransactionBackendERKNS2_26CreateObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_10NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 8 | 0;
 i3 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i4 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i3 | 0) == (i2 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 16 >> 2] & 1023](i3);
  i6 = i1;
  __ZdlPv(i6);
  return;
 }
 if ((i3 | 0) == 0) {
  i6 = i1;
  __ZdlPv(i6);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 20 >> 2] & 1023](i3);
 i6 = i1;
 __ZdlPv(i6);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB14deleteDatabaseERKN3WTF6StringENS_8functionIFvbEEEE3$_1NS_9allocatorISB_EES9_E18destroy_deallocateEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i2 | 0) == (i1 + 16 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 i4 = i2 + 4 | 0;
 i2 = i4 | 0;
 i5 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i2 >> 2] = i5;
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 i5 = i4 - 4 | 0;
 if ((i5 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 1023](i5);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteIndexERNS2_21IDBTransactionBackendERKNS2_20DeleteIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_14NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = H_BASE + 2672;
 i3 = i2 + 8 | 0;
 i4 = i1 + 24 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   HEAP32[i2 + 24 >> 2] = 0;
  } else {
   if ((i5 | 0) == (i1 + 8 | 0)) {
    HEAP32[i2 + 24 >> 2] = i3;
    i6 = HEAP32[i4 >> 2] | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i6 >> 2] | 0) + 12 >> 2] & 127](i6, i3);
    break;
   } else {
    HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 127](i5) | 0;
    break;
   }
  }
 } while (0);
 __ZN7WebCore16IDBIndexMetadataC1ERKS0_(i2 + 32 | 0, i1 + 32 | 0);
 return;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11createIndexERNS2_21IDBTransactionBackendERKNS2_20CreateIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_12NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = H_BASE + 2752;
 i3 = i2 + 8 | 0;
 i4 = i1 + 24 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   HEAP32[i2 + 24 >> 2] = 0;
  } else {
   if ((i5 | 0) == (i1 + 8 | 0)) {
    HEAP32[i2 + 24 >> 2] = i3;
    i6 = HEAP32[i4 >> 2] | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i6 >> 2] | 0) + 12 >> 2] & 127](i6, i3);
    break;
   } else {
    HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 127](i5) | 0;
    break;
   }
  }
 } while (0);
 __ZN7WebCore16IDBIndexMetadataC1ERKS0_(i2 + 32 | 0, i1 + 32 | 0);
 return;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteIndexERNS2_21IDBTransactionBackendERKNS2_20DeleteIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_14NS_9allocatorISG_EEFvvEE7__cloneEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = __Znwj(72) | 0;
 if ((i2 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 HEAP32[i2 >> 2] = H_BASE + 2672;
 i4 = i2 + 8 | 0;
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   HEAP32[i2 + 24 >> 2] = 0;
  } else {
   if ((i5 | 0) == (i1 + 8 | 0)) {
    i6 = i4;
    HEAP32[i2 + 24 >> 2] = i6;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 12 >> 2] & 127](i5, i6);
    break;
   } else {
    HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 127](i5) | 0;
    break;
   }
  }
 } while (0);
 __ZN7WebCore16IDBIndexMetadataC1ERKS0_(i2 + 32 | 0, i1 + 32 | 0);
 i3 = i2;
 return i3 | 0;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11createIndexERNS2_21IDBTransactionBackendERKNS2_20CreateIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_12NS_9allocatorISG_EEFvvEE7__cloneEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = __Znwj(72) | 0;
 if ((i2 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 HEAP32[i2 >> 2] = H_BASE + 2752;
 i4 = i2 + 8 | 0;
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   HEAP32[i2 + 24 >> 2] = 0;
  } else {
   if ((i5 | 0) == (i1 + 8 | 0)) {
    i6 = i4;
    HEAP32[i2 + 24 >> 2] = i6;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 12 >> 2] & 127](i5, i6);
    break;
   } else {
    HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 127](i5) | 0;
    break;
   }
  }
 } while (0);
 __ZN7WebCore16IDBIndexMetadataC1ERKS0_(i2 + 32 | 0, i1 + 32 | 0);
 i3 = i2;
 return i3 | 0;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB14deleteDatabaseERKN3WTF6StringENS_8functionIFvbEEEE3$_1NS_9allocatorISB_EES9_E7__cloneEPNS0_6__baseIS9_EE_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = H_BASE + 2192;
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 HEAP32[i2 + 8 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i4 = i3 + 4 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 HEAP32[i2 + 12 >> 2] = HEAP32[i1 + 12 >> 2];
 i4 = i2 + 16 | 0;
 i3 = i1 + 32 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i2 + 32 >> 2] = 0;
  return;
 }
 if ((i5 | 0) == (i1 + 16 | 0)) {
  HEAP32[i2 + 32 >> 2] = i4;
  i1 = HEAP32[i3 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 127](i1, i4);
  return;
 } else {
  HEAP32[i2 + 32 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 127](i5) | 0;
  return;
 }
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_9_3NS_9allocatorISR_EEFvvEE7__cloneEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = __Znwj(32) | 0;
 if ((i2 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 HEAP32[i2 >> 2] = H_BASE + 2352;
 i4 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i4 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  i3 = i2;
  return i3 | 0;
 }
 if ((i4 | 0) == (i1 + 8 | 0)) {
  i1 = i2 + 8 | 0;
  HEAP32[i2 + 24 >> 2] = i1;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 127](i4, i1);
  i3 = i2;
  return i3 | 0;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] & 127](i4) | 0;
  i3 = i2;
  return i3 | 0;
 }
 return 0;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_7_1NS_9allocatorISR_EEFvvEE7__cloneEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = __Znwj(32) | 0;
 if ((i2 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 HEAP32[i2 >> 2] = H_BASE + 2432;
 i4 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i4 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  i3 = i2;
  return i3 | 0;
 }
 if ((i4 | 0) == (i1 + 8 | 0)) {
  i1 = i2 + 8 | 0;
  HEAP32[i2 + 24 >> 2] = i1;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 127](i4, i1);
  i3 = i2;
  return i3 | 0;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] & 127](i4) | 0;
  i3 = i2;
  return i3 | 0;
 }
 return 0;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_6_0NS_9allocatorISR_EEFvvEE7__cloneEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = __Znwj(32) | 0;
 if ((i2 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 HEAP32[i2 >> 2] = H_BASE + 2472;
 i4 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i4 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  i3 = i2;
  return i3 | 0;
 }
 if ((i4 | 0) == (i1 + 8 | 0)) {
  i1 = i2 + 8 | 0;
  HEAP32[i2 + 24 >> 2] = i1;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 127](i4, i1);
  i3 = i2;
  return i3 | 0;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] & 127](i4) | 0;
  i3 = i2;
  return i3 | 0;
 }
 return 0;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_5NS_9allocatorISR_EEFvvEE7__cloneEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = __Znwj(32) | 0;
 if ((i2 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 HEAP32[i2 >> 2] = H_BASE + 2512;
 i4 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i4 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  i3 = i2;
  return i3 | 0;
 }
 if ((i4 | 0) == (i1 + 8 | 0)) {
  i1 = i2 + 8 | 0;
  HEAP32[i2 + 24 >> 2] = i1;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 127](i4, i1);
  i3 = i2;
  return i3 | 0;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] & 127](i4) | 0;
  i3 = i2;
  return i3 | 0;
 }
 return 0;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_8_2NS_9allocatorISR_EEFvvEE7destroyEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 8 | 0;
 i3 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i4 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i3 | 0) == (i2 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 16 >> 2] & 1023](i3);
  return;
 }
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 20 >> 2] & 1023](i3);
 return;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_9_3NS_9allocatorISR_EEFvvEE7__cloneEPNS0_6__baseISU_EE_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = H_BASE + 2352;
 i3 = i2 + 8 | 0;
 i4 = i1 + 24 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  return;
 }
 if ((i5 | 0) == (i1 + 8 | 0)) {
  HEAP32[i2 + 24 >> 2] = i3;
  i1 = HEAP32[i4 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 127](i1, i3);
  return;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 127](i5) | 0;
  return;
 }
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_7_1NS_9allocatorISR_EEFvvEE7__cloneEPNS0_6__baseISU_EE_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = H_BASE + 2432;
 i3 = i2 + 8 | 0;
 i4 = i1 + 24 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  return;
 }
 if ((i5 | 0) == (i1 + 8 | 0)) {
  HEAP32[i2 + 24 >> 2] = i3;
  i1 = HEAP32[i4 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 127](i1, i3);
  return;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 127](i5) | 0;
  return;
 }
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_6_0NS_9allocatorISR_EEFvvEE7__cloneEPNS0_6__baseISU_EE_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = H_BASE + 2472;
 i3 = i2 + 8 | 0;
 i4 = i1 + 24 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  return;
 }
 if ((i5 | 0) == (i1 + 8 | 0)) {
  HEAP32[i2 + 24 >> 2] = i3;
  i1 = HEAP32[i4 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 127](i1, i3);
  return;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 127](i5) | 0;
  return;
 }
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_5NS_9allocatorISR_EEFvvEE7__cloneEPNS0_6__baseISU_EE_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = H_BASE + 2512;
 i3 = i2 + 8 | 0;
 i4 = i1 + 24 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  return;
 }
 if ((i5 | 0) == (i1 + 8 | 0)) {
  HEAP32[i2 + 24 >> 2] = i3;
  i1 = HEAP32[i4 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 127](i1, i3);
  return;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 127](i5) | 0;
  return;
 }
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17createObjectStoreERNS2_21IDBTransactionBackendERKNS2_26CreateObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_10NS_9allocatorISG_EEFvvEED2Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1952;
 i2 = i1 + 8 | 0;
 i3 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i4 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i3 | 0) == (i2 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 16 >> 2] & 1023](i3);
  return;
 }
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 20 >> 2] & 1023](i3);
 return;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB21changeDatabaseVersionERNS2_21IDBTransactionBackendERKNS2_18IDBDatabaseBackend22VersionChangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_47_0NS_9allocatorISH_EEFvvEE7__cloneEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = __Znwj(32) | 0;
 if ((i2 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 HEAP32[i2 >> 2] = H_BASE + 1752;
 i4 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i4 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  i3 = i2;
  return i3 | 0;
 }
 if ((i4 | 0) == (i1 + 8 | 0)) {
  i1 = i2 + 8 | 0;
  HEAP32[i2 + 24 >> 2] = i1;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 127](i4, i1);
  i3 = i2;
  return i3 | 0;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] & 127](i4) | 0;
  i3 = i2;
  return i3 | 0;
 }
 return 0;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB33getOrEstablishIDBDatabaseMetadataENS_8functionIFvRKNS2_19IDBDatabaseMetadataEbEEEE3$_0NS_9allocatorISA_EES8_ED2Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1672;
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i2 | 0) == (i1 + 16 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 4 | 0;
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = i3;
  return;
 }
 i3 = i1 - 4 | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 1023](i3);
 return;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17deleteObjectStoreERNS2_21IDBTransactionBackendERKNS2_26DeleteObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_45_0NS_9allocatorISG_EEFvvEE7__cloneEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = __Znwj(32) | 0;
 if ((i2 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 HEAP32[i2 >> 2] = H_BASE + 1832;
 i4 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i4 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  i3 = i2;
  return i3 | 0;
 }
 if ((i4 | 0) == (i1 + 8 | 0)) {
  i1 = i2 + 8 | 0;
  HEAP32[i2 + 24 >> 2] = i1;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 127](i4, i1);
  i3 = i2;
  return i3 | 0;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] & 127](i4) | 0;
  i3 = i2;
  return i3 | 0;
 }
 return 0;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17createObjectStoreERNS2_21IDBTransactionBackendERKNS2_26CreateObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_11_0NS_9allocatorISG_EEFvvEE7__cloneEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = __Znwj(32) | 0;
 if ((i2 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 HEAP32[i2 >> 2] = H_BASE + 1912;
 i4 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i4 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  i3 = i2;
  return i3 | 0;
 }
 if ((i4 | 0) == (i1 + 8 | 0)) {
  i1 = i2 + 8 | 0;
  HEAP32[i2 + 24 >> 2] = i1;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 127](i4, i1);
  i3 = i2;
  return i3 | 0;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] & 127](i4) | 0;
  i3 = i2;
  return i3 | 0;
 }
 return 0;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB16clearObjectStoreERNS2_21IDBTransactionBackendERKNS2_25ClearObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_43_0NS_9allocatorISG_EEFvvEE7__cloneEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = __Znwj(32) | 0;
 if ((i2 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 HEAP32[i2 >> 2] = H_BASE + 2032;
 i4 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i4 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  i3 = i2;
  return i3 | 0;
 }
 if ((i4 | 0) == (i1 + 8 | 0)) {
  i1 = i2 + 8 | 0;
  HEAP32[i2 + 24 >> 2] = i1;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 127](i4, i1);
  i3 = i2;
  return i3 | 0;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] & 127](i4) | 0;
  i3 = i2;
  return i3 | 0;
 }
 return 0;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB16clearObjectStoreERNS2_21IDBTransactionBackendERKNS2_25ClearObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_42NS_9allocatorISG_EEFvvEE7__cloneEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = __Znwj(32) | 0;
 if ((i2 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 HEAP32[i2 >> 2] = H_BASE + 2072;
 i4 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i4 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  i3 = i2;
  return i3 | 0;
 }
 if ((i4 | 0) == (i1 + 8 | 0)) {
  i1 = i2 + 8 | 0;
  HEAP32[i2 + 24 >> 2] = i1;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 127](i4, i1);
  i3 = i2;
  return i3 | 0;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] & 127](i4) | 0;
  i3 = i2;
  return i3 | 0;
 }
 return 0;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17createObjectStoreERNS2_21IDBTransactionBackendERKNS2_26CreateObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_10NS_9allocatorISG_EEFvvEE7destroyEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 8 | 0;
 i3 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i4 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i3 | 0) == (i2 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 16 >> 2] & 1023](i3);
  return;
 }
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 20 >> 2] & 1023](i3);
 return;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB21changeDatabaseVersionERNS2_21IDBTransactionBackendERKNS2_18IDBDatabaseBackend22VersionChangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_47_0NS_9allocatorISH_EEFvvEE7__cloneEPNS0_6__baseISK_EE_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = H_BASE + 1752;
 i3 = i2 + 8 | 0;
 i4 = i1 + 24 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  return;
 }
 if ((i5 | 0) == (i1 + 8 | 0)) {
  HEAP32[i2 + 24 >> 2] = i3;
  i1 = HEAP32[i4 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 127](i1, i3);
  return;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 127](i5) | 0;
  return;
 }
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteRangeERNS2_21IDBTransactionBackendERKNS2_20DeleteRangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_41_0NS_9allocatorISG_EEFvvEE7__cloneEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = __Znwj(32) | 0;
 if ((i2 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 HEAP32[i2 >> 2] = H_BASE + 2552;
 i4 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i4 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  i3 = i2;
  return i3 | 0;
 }
 if ((i4 | 0) == (i1 + 8 | 0)) {
  i1 = i2 + 8 | 0;
  HEAP32[i2 + 24 >> 2] = i1;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 127](i4, i1);
  i3 = i2;
  return i3 | 0;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] & 127](i4) | 0;
  i3 = i2;
  return i3 | 0;
 }
 return 0;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteIndexERNS2_21IDBTransactionBackendERKNS2_20DeleteIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_15_0NS_9allocatorISG_EEFvvEE7__cloneEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = __Znwj(32) | 0;
 if ((i2 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 HEAP32[i2 >> 2] = H_BASE + 2632;
 i4 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i4 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  i3 = i2;
  return i3 | 0;
 }
 if ((i4 | 0) == (i1 + 8 | 0)) {
  i1 = i2 + 8 | 0;
  HEAP32[i2 + 24 >> 2] = i1;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 127](i4, i1);
  i3 = i2;
  return i3 | 0;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] & 127](i4) | 0;
  i3 = i2;
  return i3 | 0;
 }
 return 0;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11createIndexERNS2_21IDBTransactionBackendERKNS2_20CreateIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_13_0NS_9allocatorISG_EEFvvEE7__cloneEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = __Znwj(32) | 0;
 if ((i2 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 HEAP32[i2 >> 2] = H_BASE + 2712;
 i4 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i4 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  i3 = i2;
  return i3 | 0;
 }
 if ((i4 | 0) == (i1 + 8 | 0)) {
  i1 = i2 + 8 | 0;
  HEAP32[i2 + 24 >> 2] = i1;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 127](i4, i1);
  i3 = i2;
  return i3 | 0;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] & 127](i4) | 0;
  i3 = i2;
  return i3 | 0;
 }
 return 0;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteRangeERNS2_21IDBTransactionBackendERKNS2_20DeleteRangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_40NS_9allocatorISG_EEFvvEE7__cloneEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = __Znwj(32) | 0;
 if ((i2 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 HEAP32[i2 >> 2] = H_BASE + 2592;
 i4 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i4 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  i3 = i2;
  return i3 | 0;
 }
 if ((i4 | 0) == (i1 + 8 | 0)) {
  i1 = i2 + 8 | 0;
  HEAP32[i2 + 24 >> 2] = i1;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 127](i4, i1);
  i3 = i2;
  return i3 | 0;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] & 127](i4) | 0;
  i3 = i2;
  return i3 | 0;
 }
 return 0;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB10openCursorERNS2_21IDBTransactionBackendERKNS2_19OpenCursorOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_37_0NS_9allocatorISG_EEFvvEE7__cloneEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = __Znwj(32) | 0;
 if ((i2 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 HEAP32[i2 >> 2] = H_BASE + 2792;
 i4 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i4 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  i3 = i2;
  return i3 | 0;
 }
 if ((i4 | 0) == (i1 + 8 | 0)) {
  i1 = i2 + 8 | 0;
  HEAP32[i2 + 24 >> 2] = i1;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 127](i4, i1);
  i3 = i2;
  return i3 | 0;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] & 127](i4) | 0;
  i3 = i2;
  return i3 | 0;
 }
 return 0;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB33getOrEstablishIDBDatabaseMetadataENS_8functionIFvRKNS2_19IDBDatabaseMetadataEbEEEE3$_0NS_9allocatorISA_EES8_E7destroyEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i2 | 0) == (i1 + 16 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 4 | 0;
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = i3;
  return;
 }
 i3 = i1 - 4 | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 1023](i3);
 return;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB10openCursorERNS2_21IDBTransactionBackendERKNS2_19OpenCursorOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_36NS_9allocatorISG_EEFvvEE7__cloneEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = __Znwj(32) | 0;
 if ((i2 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 HEAP32[i2 >> 2] = H_BASE + 2832;
 i4 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i4 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  i3 = i2;
  return i3 | 0;
 }
 if ((i4 | 0) == (i1 + 8 | 0)) {
  i1 = i2 + 8 | 0;
  HEAP32[i2 + 24 >> 2] = i1;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 127](i4, i1);
  i3 = i2;
  return i3 | 0;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] & 127](i4) | 0;
  i3 = i2;
  return i3 | 0;
 }
 return 0;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB14deleteDatabaseERKN3WTF6StringENS_8functionIFvbEEEE3$_1NS_9allocatorISB_EES9_ED2Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 2192;
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i2 | 0) == (i1 + 16 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 4 | 0;
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = i3;
  return;
 }
 i3 = i1 - 4 | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 1023](i3);
 return;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB15openTransactionExRKN3WTF7HashSetIxNS4_7IntHashIyEENS4_10HashTraitsIxEEEENS2_9IndexedDB15TransactionModeENS_8functionIFvbEEEE3$_3_0NS_9allocatorISI_EEFvvEE7__cloneEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = __Znwj(32) | 0;
 if ((i2 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 HEAP32[i2 >> 2] = H_BASE + 2112;
 i4 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i4 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  i3 = i2;
  return i3 | 0;
 }
 if ((i4 | 0) == (i1 + 8 | 0)) {
  i1 = i2 + 8 | 0;
  HEAP32[i2 + 24 >> 2] = i1;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 127](i4, i1);
  i3 = i2;
  return i3 | 0;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] & 127](i4) | 0;
  i3 = i2;
  return i3 | 0;
 }
 return 0;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB15openTransactionExRKN3WTF7HashSetIxNS4_7IntHashIyEENS4_10HashTraitsIxEEEENS2_9IndexedDB15TransactionModeENS_8functionIFvbEEEE3$_2NS_9allocatorISI_EEFvvEE7__cloneEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = __Znwj(32) | 0;
 if ((i2 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 HEAP32[i2 >> 2] = H_BASE + 2152;
 i4 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i4 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  i3 = i2;
  return i3 | 0;
 }
 if ((i4 | 0) == (i1 + 8 | 0)) {
  i1 = i2 + 8 | 0;
  HEAP32[i2 + 24 >> 2] = i1;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 127](i4, i1);
  i3 = i2;
  return i3 | 0;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] & 127](i4) | 0;
  i3 = i2;
  return i3 | 0;
 }
 return 0;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB5countERNS2_21IDBTransactionBackendERKNS2_14CountOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_39_0NS_9allocatorISG_EEFvvEE7__cloneEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = __Znwj(32) | 0;
 if ((i2 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 HEAP32[i2 >> 2] = H_BASE + 792;
 i4 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i4 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  i3 = i2;
  return i3 | 0;
 }
 if ((i4 | 0) == (i1 + 8 | 0)) {
  i1 = i2 + 8 | 0;
  HEAP32[i2 + 24 >> 2] = i1;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 127](i4, i1);
  i3 = i2;
  return i3 | 0;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] & 127](i4) | 0;
  i3 = i2;
  return i3 | 0;
 }
 return 0;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_27__10_NS_9allocatorISG_EEFvvEE7__cloneEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = __Znwj(32) | 0;
 if ((i2 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 HEAP32[i2 >> 2] = H_BASE + 1192;
 i4 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i4 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  i3 = i2;
  return i3 | 0;
 }
 if ((i4 | 0) == (i1 + 8 | 0)) {
  i1 = i2 + 8 | 0;
  HEAP32[i2 + 24 >> 2] = i1;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 127](i4, i1);
  i3 = i2;
  return i3 | 0;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] & 127](i4) | 0;
  i3 = i2;
  return i3 | 0;
 }
 return 0;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB5countERNS2_21IDBTransactionBackendERKNS2_14CountOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_38NS_9allocatorISG_EEFvvEE7__cloneEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = __Znwj(32) | 0;
 if ((i2 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 HEAP32[i2 >> 2] = H_BASE + 832;
 i4 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i4 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  i3 = i2;
  return i3 | 0;
 }
 if ((i4 | 0) == (i1 + 8 | 0)) {
  i1 = i2 + 8 | 0;
  HEAP32[i2 + 24 >> 2] = i1;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 127](i4, i1);
  i3 = i2;
  return i3 | 0;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] & 127](i4) | 0;
  i3 = i2;
  return i3 | 0;
 }
 return 0;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_31_2NS_9allocatorISG_EEFvvEE7__cloneEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = __Znwj(32) | 0;
 if ((i2 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 HEAP32[i2 >> 2] = H_BASE + 1032;
 i4 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i4 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  i3 = i2;
  return i3 | 0;
 }
 if ((i4 | 0) == (i1 + 8 | 0)) {
  i1 = i2 + 8 | 0;
  HEAP32[i2 + 24 >> 2] = i1;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 127](i4, i1);
  i3 = i2;
  return i3 | 0;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] & 127](i4) | 0;
  i3 = i2;
  return i3 | 0;
 }
 return 0;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_30_1NS_9allocatorISG_EEFvvEE7__cloneEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = __Znwj(32) | 0;
 if ((i2 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 HEAP32[i2 >> 2] = H_BASE + 1072;
 i4 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i4 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  i3 = i2;
  return i3 | 0;
 }
 if ((i4 | 0) == (i1 + 8 | 0)) {
  i1 = i2 + 8 | 0;
  HEAP32[i2 + 24 >> 2] = i1;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 127](i4, i1);
  i3 = i2;
  return i3 | 0;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] & 127](i4) | 0;
  i3 = i2;
  return i3 | 0;
 }
 return 0;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_29_0NS_9allocatorISG_EEFvvEE7__cloneEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = __Znwj(32) | 0;
 if ((i2 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 HEAP32[i2 >> 2] = H_BASE + 1112;
 i4 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i4 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  i3 = i2;
  return i3 | 0;
 }
 if ((i4 | 0) == (i1 + 8 | 0)) {
  i1 = i2 + 8 | 0;
  HEAP32[i2 + 24 >> 2] = i1;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 127](i4, i1);
  i3 = i2;
  return i3 | 0;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] & 127](i4) | 0;
  i3 = i2;
  return i3 | 0;
 }
 return 0;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_26_9NS_9allocatorISG_EEFvvEE7__cloneEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = __Znwj(32) | 0;
 if ((i2 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 HEAP32[i2 >> 2] = H_BASE + 1232;
 i4 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i4 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  i3 = i2;
  return i3 | 0;
 }
 if ((i4 | 0) == (i1 + 8 | 0)) {
  i1 = i2 + 8 | 0;
  HEAP32[i2 + 24 >> 2] = i1;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 127](i4, i1);
  i3 = i2;
  return i3 | 0;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] & 127](i4) | 0;
  i3 = i2;
  return i3 | 0;
 }
 return 0;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_25_8NS_9allocatorISG_EEFvvEE7__cloneEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = __Znwj(32) | 0;
 if ((i2 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 HEAP32[i2 >> 2] = H_BASE + 1272;
 i4 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i4 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  i3 = i2;
  return i3 | 0;
 }
 if ((i4 | 0) == (i1 + 8 | 0)) {
  i1 = i2 + 8 | 0;
  HEAP32[i2 + 24 >> 2] = i1;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 127](i4, i1);
  i3 = i2;
  return i3 | 0;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] & 127](i4) | 0;
  i3 = i2;
  return i3 | 0;
 }
 return 0;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_24_7NS_9allocatorISG_EEFvvEE7__cloneEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = __Znwj(32) | 0;
 if ((i2 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 HEAP32[i2 >> 2] = H_BASE + 1312;
 i4 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i4 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  i3 = i2;
  return i3 | 0;
 }
 if ((i4 | 0) == (i1 + 8 | 0)) {
  i1 = i2 + 8 | 0;
  HEAP32[i2 + 24 >> 2] = i1;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 127](i4, i1);
  i3 = i2;
  return i3 | 0;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] & 127](i4) | 0;
  i3 = i2;
  return i3 | 0;
 }
 return 0;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_23_6NS_9allocatorISG_EEFvvEE7__cloneEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = __Znwj(32) | 0;
 if ((i2 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 HEAP32[i2 >> 2] = H_BASE + 1352;
 i4 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i4 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  i3 = i2;
  return i3 | 0;
 }
 if ((i4 | 0) == (i1 + 8 | 0)) {
  i1 = i2 + 8 | 0;
  HEAP32[i2 + 24 >> 2] = i1;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 127](i4, i1);
  i3 = i2;
  return i3 | 0;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] & 127](i4) | 0;
  i3 = i2;
  return i3 | 0;
 }
 return 0;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_22_5NS_9allocatorISG_EEFvvEE7__cloneEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = __Znwj(32) | 0;
 if ((i2 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 HEAP32[i2 >> 2] = H_BASE + 1392;
 i4 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i4 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  i3 = i2;
  return i3 | 0;
 }
 if ((i4 | 0) == (i1 + 8 | 0)) {
  i1 = i2 + 8 | 0;
  HEAP32[i2 + 24 >> 2] = i1;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 127](i4, i1);
  i3 = i2;
  return i3 | 0;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] & 127](i4) | 0;
  i3 = i2;
  return i3 | 0;
 }
 return 0;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_21_4NS_9allocatorISG_EEFvvEE7__cloneEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = __Znwj(32) | 0;
 if ((i2 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 HEAP32[i2 >> 2] = H_BASE + 1432;
 i4 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i4 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  i3 = i2;
  return i3 | 0;
 }
 if ((i4 | 0) == (i1 + 8 | 0)) {
  i1 = i2 + 8 | 0;
  HEAP32[i2 + 24 >> 2] = i1;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 127](i4, i1);
  i3 = i2;
  return i3 | 0;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] & 127](i4) | 0;
  i3 = i2;
  return i3 | 0;
 }
 return 0;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_20_3NS_9allocatorISG_EEFvvEE7__cloneEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = __Znwj(32) | 0;
 if ((i2 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 HEAP32[i2 >> 2] = H_BASE + 1472;
 i4 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i4 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  i3 = i2;
  return i3 | 0;
 }
 if ((i4 | 0) == (i1 + 8 | 0)) {
  i1 = i2 + 8 | 0;
  HEAP32[i2 + 24 >> 2] = i1;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 127](i4, i1);
  i3 = i2;
  return i3 | 0;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] & 127](i4) | 0;
  i3 = i2;
  return i3 | 0;
 }
 return 0;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_19_2NS_9allocatorISG_EEFvvEE7__cloneEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = __Znwj(32) | 0;
 if ((i2 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 HEAP32[i2 >> 2] = H_BASE + 1512;
 i4 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i4 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  i3 = i2;
  return i3 | 0;
 }
 if ((i4 | 0) == (i1 + 8 | 0)) {
  i1 = i2 + 8 | 0;
  HEAP32[i2 + 24 >> 2] = i1;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 127](i4, i1);
  i3 = i2;
  return i3 | 0;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] & 127](i4) | 0;
  i3 = i2;
  return i3 | 0;
 }
 return 0;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_18_1NS_9allocatorISG_EEFvvEE7__cloneEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = __Znwj(32) | 0;
 if ((i2 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 HEAP32[i2 >> 2] = H_BASE + 1552;
 i4 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i4 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  i3 = i2;
  return i3 | 0;
 }
 if ((i4 | 0) == (i1 + 8 | 0)) {
  i1 = i2 + 8 | 0;
  HEAP32[i2 + 24 >> 2] = i1;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 127](i4, i1);
  i3 = i2;
  return i3 | 0;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] & 127](i4) | 0;
  i3 = i2;
  return i3 | 0;
 }
 return 0;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_17_0NS_9allocatorISG_EEFvvEE7__cloneEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = __Znwj(32) | 0;
 if ((i2 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 HEAP32[i2 >> 2] = H_BASE + 1592;
 i4 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i4 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  i3 = i2;
  return i3 | 0;
 }
 if ((i4 | 0) == (i1 + 8 | 0)) {
  i1 = i2 + 8 | 0;
  HEAP32[i2 + 24 >> 2] = i1;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 127](i4, i1);
  i3 = i2;
  return i3 | 0;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] & 127](i4) | 0;
  i3 = i2;
  return i3 | 0;
 }
 return 0;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17deleteObjectStoreERNS2_21IDBTransactionBackendERKNS2_26DeleteObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_45_0NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = H_BASE + 1832;
 i3 = i2 + 8 | 0;
 i4 = i1 + 24 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  return;
 }
 if ((i5 | 0) == (i1 + 8 | 0)) {
  HEAP32[i2 + 24 >> 2] = i3;
  i1 = HEAP32[i4 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 127](i1, i3);
  return;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 127](i5) | 0;
  return;
 }
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17createObjectStoreERNS2_21IDBTransactionBackendERKNS2_26CreateObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_11_0NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = H_BASE + 1912;
 i3 = i2 + 8 | 0;
 i4 = i1 + 24 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  return;
 }
 if ((i5 | 0) == (i1 + 8 | 0)) {
  HEAP32[i2 + 24 >> 2] = i3;
  i1 = HEAP32[i4 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 127](i1, i3);
  return;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 127](i5) | 0;
  return;
 }
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_35_6NS_9allocatorISG_EEFvvEE7__cloneEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = __Znwj(32) | 0;
 if ((i2 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 HEAP32[i2 >> 2] = H_BASE + 872;
 i4 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i4 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  i3 = i2;
  return i3 | 0;
 }
 if ((i4 | 0) == (i1 + 8 | 0)) {
  i1 = i2 + 8 | 0;
  HEAP32[i2 + 24 >> 2] = i1;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 127](i4, i1);
  i3 = i2;
  return i3 | 0;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] & 127](i4) | 0;
  i3 = i2;
  return i3 | 0;
 }
 return 0;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_34_5NS_9allocatorISG_EEFvvEE7__cloneEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = __Znwj(32) | 0;
 if ((i2 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 HEAP32[i2 >> 2] = H_BASE + 912;
 i4 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i4 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  i3 = i2;
  return i3 | 0;
 }
 if ((i4 | 0) == (i1 + 8 | 0)) {
  i1 = i2 + 8 | 0;
  HEAP32[i2 + 24 >> 2] = i1;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 127](i4, i1);
  i3 = i2;
  return i3 | 0;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] & 127](i4) | 0;
  i3 = i2;
  return i3 | 0;
 }
 return 0;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_33_4NS_9allocatorISG_EEFvvEE7__cloneEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = __Znwj(32) | 0;
 if ((i2 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 HEAP32[i2 >> 2] = H_BASE + 952;
 i4 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i4 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  i3 = i2;
  return i3 | 0;
 }
 if ((i4 | 0) == (i1 + 8 | 0)) {
  i1 = i2 + 8 | 0;
  HEAP32[i2 + 24 >> 2] = i1;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 127](i4, i1);
  i3 = i2;
  return i3 | 0;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] & 127](i4) | 0;
  i3 = i2;
  return i3 | 0;
 }
 return 0;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_32_3NS_9allocatorISG_EEFvvEE7__cloneEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = __Znwj(32) | 0;
 if ((i2 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 HEAP32[i2 >> 2] = H_BASE + 992;
 i4 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i4 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  i3 = i2;
  return i3 | 0;
 }
 if ((i4 | 0) == (i1 + 8 | 0)) {
  i1 = i2 + 8 | 0;
  HEAP32[i2 + 24 >> 2] = i1;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 127](i4, i1);
  i3 = i2;
  return i3 | 0;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] & 127](i4) | 0;
  i3 = i2;
  return i3 | 0;
 }
 return 0;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_28NS_9allocatorISG_EEFvvEE7__cloneEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = __Znwj(32) | 0;
 if ((i2 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 HEAP32[i2 >> 2] = H_BASE + 1152;
 i4 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i4 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  i3 = i2;
  return i3 | 0;
 }
 if ((i4 | 0) == (i1 + 8 | 0)) {
  i1 = i2 + 8 | 0;
  HEAP32[i2 + 24 >> 2] = i1;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 127](i4, i1);
  i3 = i2;
  return i3 | 0;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] & 127](i4) | 0;
  i3 = i2;
  return i3 | 0;
 }
 return 0;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_16NS_9allocatorISG_EEFvvEE7__cloneEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = __Znwj(32) | 0;
 if ((i2 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 HEAP32[i2 >> 2] = H_BASE + 1632;
 i4 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i4 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  i3 = i2;
  return i3 | 0;
 }
 if ((i4 | 0) == (i1 + 8 | 0)) {
  i1 = i2 + 8 | 0;
  HEAP32[i2 + 24 >> 2] = i1;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 127](i4, i1);
  i3 = i2;
  return i3 | 0;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] & 127](i4) | 0;
  i3 = i2;
  return i3 | 0;
 }
 return 0;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB16clearObjectStoreERNS2_21IDBTransactionBackendERKNS2_25ClearObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_43_0NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = H_BASE + 2032;
 i3 = i2 + 8 | 0;
 i4 = i1 + 24 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  return;
 }
 if ((i5 | 0) == (i1 + 8 | 0)) {
  HEAP32[i2 + 24 >> 2] = i3;
  i1 = HEAP32[i4 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 127](i1, i3);
  return;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 127](i5) | 0;
  return;
 }
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB16clearObjectStoreERNS2_21IDBTransactionBackendERKNS2_25ClearObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_42NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = H_BASE + 2072;
 i3 = i2 + 8 | 0;
 i4 = i1 + 24 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  return;
 }
 if ((i5 | 0) == (i1 + 8 | 0)) {
  HEAP32[i2 + 24 >> 2] = i3;
  i1 = HEAP32[i4 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 127](i1, i3);
  return;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 127](i5) | 0;
  return;
 }
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17commitTransactionExNS_8functionIFvbEEEE3$_4NS_9allocatorIS7_EEFvvEE7__cloneEPNS0_6__baseISA_EE_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = H_BASE + 1992;
 i3 = i2 + 8 | 0;
 i4 = i1 + 24 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   HEAP32[i2 + 24 >> 2] = 0;
  } else {
   if ((i5 | 0) == (i1 + 8 | 0)) {
    HEAP32[i2 + 24 >> 2] = i3;
    i6 = HEAP32[i4 >> 2] | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i6 >> 2] | 0) + 12 >> 2] & 127](i6, i3);
    break;
   } else {
    HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 127](i5) | 0;
    break;
   }
  }
 } while (0);
 HEAP8[i2 + 32 | 0] = HEAP8[i1 + 32 | 0] & 1;
 return;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17commitTransactionExNS_8functionIFvbEEEE3$_4NS_9allocatorIS7_EEFvvEE7__cloneEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = __Znwj(40) | 0;
 if ((i2 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 HEAP32[i2 >> 2] = H_BASE + 1992;
 i4 = i2 + 8 | 0;
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   HEAP32[i2 + 24 >> 2] = 0;
  } else {
   if ((i5 | 0) == (i1 + 8 | 0)) {
    i6 = i4;
    HEAP32[i2 + 24 >> 2] = i6;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 12 >> 2] & 127](i5, i6);
    break;
   } else {
    HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 127](i5) | 0;
    break;
   }
  }
 } while (0);
 HEAP8[i2 + 32 | 0] = HEAP8[i1 + 32 | 0] & 1;
 i3 = i2;
 return i3 | 0;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB23cursorPrefetchIterationERNS2_16IDBCursorBackendERKNS2_32CursorPrefetchIterationOperationENS_8functionIFvvEEEE4$_51NS_9allocatorISC_EESA_E7__cloneEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = __Znwj(32) | 0;
 if ((i2 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 HEAP32[i2 >> 2] = H_BASE + 1712;
 i4 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i4 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  i3 = i2;
  return i3 | 0;
 }
 if ((i4 | 0) == (i1 + 8 | 0)) {
  i1 = i2 + 8 | 0;
  HEAP32[i2 + 24 >> 2] = i1;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 127](i4, i1);
  i3 = i2;
  return i3 | 0;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] & 127](i4) | 0;
  i3 = i2;
  return i3 | 0;
 }
 return 0;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteRangeERNS2_21IDBTransactionBackendERKNS2_20DeleteRangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_41_0NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = H_BASE + 2552;
 i3 = i2 + 8 | 0;
 i4 = i1 + 24 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  return;
 }
 if ((i5 | 0) == (i1 + 8 | 0)) {
  HEAP32[i2 + 24 >> 2] = i3;
  i1 = HEAP32[i4 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 127](i1, i3);
  return;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 127](i5) | 0;
  return;
 }
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteIndexERNS2_21IDBTransactionBackendERKNS2_20DeleteIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_15_0NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = H_BASE + 2632;
 i3 = i2 + 8 | 0;
 i4 = i1 + 24 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  return;
 }
 if ((i5 | 0) == (i1 + 8 | 0)) {
  HEAP32[i2 + 24 >> 2] = i3;
  i1 = HEAP32[i4 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 127](i1, i3);
  return;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 127](i5) | 0;
  return;
 }
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11createIndexERNS2_21IDBTransactionBackendERKNS2_20CreateIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_13_0NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = H_BASE + 2712;
 i3 = i2 + 8 | 0;
 i4 = i1 + 24 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  return;
 }
 if ((i5 | 0) == (i1 + 8 | 0)) {
  HEAP32[i2 + 24 >> 2] = i3;
  i1 = HEAP32[i4 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 127](i1, i3);
  return;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 127](i5) | 0;
  return;
 }
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteRangeERNS2_21IDBTransactionBackendERKNS2_20DeleteRangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_40NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = H_BASE + 2592;
 i3 = i2 + 8 | 0;
 i4 = i1 + 24 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  return;
 }
 if ((i5 | 0) == (i1 + 8 | 0)) {
  HEAP32[i2 + 24 >> 2] = i3;
  i1 = HEAP32[i4 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 127](i1, i3);
  return;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 127](i5) | 0;
  return;
 }
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB10openCursorERNS2_21IDBTransactionBackendERKNS2_19OpenCursorOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_37_0NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = H_BASE + 2792;
 i3 = i2 + 8 | 0;
 i4 = i1 + 24 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  return;
 }
 if ((i5 | 0) == (i1 + 8 | 0)) {
  HEAP32[i2 + 24 >> 2] = i3;
  i1 = HEAP32[i4 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 127](i1, i3);
  return;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 127](i5) | 0;
  return;
 }
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB10openCursorERNS2_21IDBTransactionBackendERKNS2_19OpenCursorOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_36NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = H_BASE + 2832;
 i3 = i2 + 8 | 0;
 i4 = i1 + 24 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  return;
 }
 if ((i5 | 0) == (i1 + 8 | 0)) {
  HEAP32[i2 + 24 >> 2] = i3;
  i1 = HEAP32[i4 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 127](i1, i3);
  return;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 127](i5) | 0;
  return;
 }
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB14deleteDatabaseERKN3WTF6StringENS_8functionIFvbEEEE3$_1NS_9allocatorISB_EES9_E7destroyEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i2 | 0) == (i1 + 16 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 4 | 0;
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = i3;
  return;
 }
 i3 = i1 - 4 | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 1023](i3);
 return;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB15openTransactionExRKN3WTF7HashSetIxNS4_7IntHashIyEENS4_10HashTraitsIxEEEENS2_9IndexedDB15TransactionModeENS_8functionIFvbEEEE3$_3_0NS_9allocatorISI_EEFvvEE7__cloneEPNS0_6__baseISL_EE_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = H_BASE + 2112;
 i3 = i2 + 8 | 0;
 i4 = i1 + 24 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  return;
 }
 if ((i5 | 0) == (i1 + 8 | 0)) {
  HEAP32[i2 + 24 >> 2] = i3;
  i1 = HEAP32[i4 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 127](i1, i3);
  return;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 127](i5) | 0;
  return;
 }
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB15openTransactionExRKN3WTF7HashSetIxNS4_7IntHashIyEENS4_10HashTraitsIxEEEENS2_9IndexedDB15TransactionModeENS_8functionIFvbEEEE3$_2NS_9allocatorISI_EEFvvEE7__cloneEPNS0_6__baseISL_EE_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = H_BASE + 2152;
 i3 = i2 + 8 | 0;
 i4 = i1 + 24 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  return;
 }
 if ((i5 | 0) == (i1 + 8 | 0)) {
  HEAP32[i2 + 24 >> 2] = i3;
  i1 = HEAP32[i4 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 127](i1, i3);
  return;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 127](i5) | 0;
  return;
 }
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB5countERNS2_21IDBTransactionBackendERKNS2_14CountOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_39_0NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = H_BASE + 792;
 i3 = i2 + 8 | 0;
 i4 = i1 + 24 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  return;
 }
 if ((i5 | 0) == (i1 + 8 | 0)) {
  HEAP32[i2 + 24 >> 2] = i3;
  i1 = HEAP32[i4 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 127](i1, i3);
  return;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 127](i5) | 0;
  return;
 }
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_27__10_NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = H_BASE + 1192;
 i3 = i2 + 8 | 0;
 i4 = i1 + 24 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  return;
 }
 if ((i5 | 0) == (i1 + 8 | 0)) {
  HEAP32[i2 + 24 >> 2] = i3;
  i1 = HEAP32[i4 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 127](i1, i3);
  return;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 127](i5) | 0;
  return;
 }
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB13cursorIterateERNS2_16IDBCursorBackendERKNS2_24CursorIterationOperationENS_8functionIFvvEEEE4$_50NS_9allocatorISC_EESA_E7__cloneEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = __Znwj(32) | 0;
 if ((i2 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 HEAP32[i2 >> 2] = H_BASE + 2232;
 i4 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i4 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  i3 = i2;
  return i3 | 0;
 }
 if ((i4 | 0) == (i1 + 8 | 0)) {
  i1 = i2 + 8 | 0;
  HEAP32[i2 + 24 >> 2] = i1;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 127](i4, i1);
  i3 = i2;
  return i3 | 0;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] & 127](i4) | 0;
  i3 = i2;
  return i3 | 0;
 }
 return 0;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB13cursorAdvanceERNS2_16IDBCursorBackendERKNS2_22CursorAdvanceOperationENS_8functionIFvvEEEE4$_49_0NS_9allocatorISC_EESA_E7__cloneEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = __Znwj(32) | 0;
 if ((i2 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 HEAP32[i2 >> 2] = H_BASE + 2272;
 i4 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i4 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  i3 = i2;
  return i3 | 0;
 }
 if ((i4 | 0) == (i1 + 8 | 0)) {
  i1 = i2 + 8 | 0;
  HEAP32[i2 + 24 >> 2] = i1;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 127](i4, i1);
  i3 = i2;
  return i3 | 0;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] & 127](i4) | 0;
  i3 = i2;
  return i3 | 0;
 }
 return 0;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB5countERNS2_21IDBTransactionBackendERKNS2_14CountOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_38NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = H_BASE + 832;
 i3 = i2 + 8 | 0;
 i4 = i1 + 24 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  return;
 }
 if ((i5 | 0) == (i1 + 8 | 0)) {
  HEAP32[i2 + 24 >> 2] = i3;
  i1 = HEAP32[i4 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 127](i1, i3);
  return;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 127](i5) | 0;
  return;
 }
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_31_2NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = H_BASE + 1032;
 i3 = i2 + 8 | 0;
 i4 = i1 + 24 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  return;
 }
 if ((i5 | 0) == (i1 + 8 | 0)) {
  HEAP32[i2 + 24 >> 2] = i3;
  i1 = HEAP32[i4 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 127](i1, i3);
  return;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 127](i5) | 0;
  return;
 }
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_30_1NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = H_BASE + 1072;
 i3 = i2 + 8 | 0;
 i4 = i1 + 24 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  return;
 }
 if ((i5 | 0) == (i1 + 8 | 0)) {
  HEAP32[i2 + 24 >> 2] = i3;
  i1 = HEAP32[i4 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 127](i1, i3);
  return;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 127](i5) | 0;
  return;
 }
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_29_0NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = H_BASE + 1112;
 i3 = i2 + 8 | 0;
 i4 = i1 + 24 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  return;
 }
 if ((i5 | 0) == (i1 + 8 | 0)) {
  HEAP32[i2 + 24 >> 2] = i3;
  i1 = HEAP32[i4 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 127](i1, i3);
  return;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 127](i5) | 0;
  return;
 }
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_26_9NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = H_BASE + 1232;
 i3 = i2 + 8 | 0;
 i4 = i1 + 24 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  return;
 }
 if ((i5 | 0) == (i1 + 8 | 0)) {
  HEAP32[i2 + 24 >> 2] = i3;
  i1 = HEAP32[i4 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 127](i1, i3);
  return;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 127](i5) | 0;
  return;
 }
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_25_8NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = H_BASE + 1272;
 i3 = i2 + 8 | 0;
 i4 = i1 + 24 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  return;
 }
 if ((i5 | 0) == (i1 + 8 | 0)) {
  HEAP32[i2 + 24 >> 2] = i3;
  i1 = HEAP32[i4 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 127](i1, i3);
  return;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 127](i5) | 0;
  return;
 }
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_24_7NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = H_BASE + 1312;
 i3 = i2 + 8 | 0;
 i4 = i1 + 24 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  return;
 }
 if ((i5 | 0) == (i1 + 8 | 0)) {
  HEAP32[i2 + 24 >> 2] = i3;
  i1 = HEAP32[i4 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 127](i1, i3);
  return;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 127](i5) | 0;
  return;
 }
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_23_6NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = H_BASE + 1352;
 i3 = i2 + 8 | 0;
 i4 = i1 + 24 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  return;
 }
 if ((i5 | 0) == (i1 + 8 | 0)) {
  HEAP32[i2 + 24 >> 2] = i3;
  i1 = HEAP32[i4 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 127](i1, i3);
  return;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 127](i5) | 0;
  return;
 }
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_22_5NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = H_BASE + 1392;
 i3 = i2 + 8 | 0;
 i4 = i1 + 24 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  return;
 }
 if ((i5 | 0) == (i1 + 8 | 0)) {
  HEAP32[i2 + 24 >> 2] = i3;
  i1 = HEAP32[i4 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 127](i1, i3);
  return;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 127](i5) | 0;
  return;
 }
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_21_4NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = H_BASE + 1432;
 i3 = i2 + 8 | 0;
 i4 = i1 + 24 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  return;
 }
 if ((i5 | 0) == (i1 + 8 | 0)) {
  HEAP32[i2 + 24 >> 2] = i3;
  i1 = HEAP32[i4 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 127](i1, i3);
  return;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 127](i5) | 0;
  return;
 }
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_20_3NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = H_BASE + 1472;
 i3 = i2 + 8 | 0;
 i4 = i1 + 24 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  return;
 }
 if ((i5 | 0) == (i1 + 8 | 0)) {
  HEAP32[i2 + 24 >> 2] = i3;
  i1 = HEAP32[i4 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 127](i1, i3);
  return;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 127](i5) | 0;
  return;
 }
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_19_2NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = H_BASE + 1512;
 i3 = i2 + 8 | 0;
 i4 = i1 + 24 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  return;
 }
 if ((i5 | 0) == (i1 + 8 | 0)) {
  HEAP32[i2 + 24 >> 2] = i3;
  i1 = HEAP32[i4 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 127](i1, i3);
  return;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 127](i5) | 0;
  return;
 }
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_18_1NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = H_BASE + 1552;
 i3 = i2 + 8 | 0;
 i4 = i1 + 24 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  return;
 }
 if ((i5 | 0) == (i1 + 8 | 0)) {
  HEAP32[i2 + 24 >> 2] = i3;
  i1 = HEAP32[i4 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 127](i1, i3);
  return;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 127](i5) | 0;
  return;
 }
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_17_0NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = H_BASE + 1592;
 i3 = i2 + 8 | 0;
 i4 = i1 + 24 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  return;
 }
 if ((i5 | 0) == (i1 + 8 | 0)) {
  HEAP32[i2 + 24 >> 2] = i3;
  i1 = HEAP32[i4 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 127](i1, i3);
  return;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 127](i5) | 0;
  return;
 }
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB13cursorAdvanceERNS2_16IDBCursorBackendERKNS2_22CursorAdvanceOperationENS_8functionIFvvEEEE4$_48NS_9allocatorISC_EESA_E7__cloneEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = __Znwj(32) | 0;
 if ((i2 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 HEAP32[i2 >> 2] = H_BASE + 2312;
 i4 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i4 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  i3 = i2;
  return i3 | 0;
 }
 if ((i4 | 0) == (i1 + 8 | 0)) {
  i1 = i2 + 8 | 0;
  HEAP32[i2 + 24 >> 2] = i1;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 127](i4, i1);
  i3 = i2;
  return i3 | 0;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] & 127](i4) | 0;
  i3 = i2;
  return i3 | 0;
 }
 return 0;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_35_6NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = H_BASE + 872;
 i3 = i2 + 8 | 0;
 i4 = i1 + 24 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  return;
 }
 if ((i5 | 0) == (i1 + 8 | 0)) {
  HEAP32[i2 + 24 >> 2] = i3;
  i1 = HEAP32[i4 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 127](i1, i3);
  return;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 127](i5) | 0;
  return;
 }
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_34_5NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = H_BASE + 912;
 i3 = i2 + 8 | 0;
 i4 = i1 + 24 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  return;
 }
 if ((i5 | 0) == (i1 + 8 | 0)) {
  HEAP32[i2 + 24 >> 2] = i3;
  i1 = HEAP32[i4 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 127](i1, i3);
  return;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 127](i5) | 0;
  return;
 }
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_33_4NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = H_BASE + 952;
 i3 = i2 + 8 | 0;
 i4 = i1 + 24 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  return;
 }
 if ((i5 | 0) == (i1 + 8 | 0)) {
  HEAP32[i2 + 24 >> 2] = i3;
  i1 = HEAP32[i4 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 127](i1, i3);
  return;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 127](i5) | 0;
  return;
 }
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_32_3NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = H_BASE + 992;
 i3 = i2 + 8 | 0;
 i4 = i1 + 24 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  return;
 }
 if ((i5 | 0) == (i1 + 8 | 0)) {
  HEAP32[i2 + 24 >> 2] = i3;
  i1 = HEAP32[i4 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 127](i1, i3);
  return;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 127](i5) | 0;
  return;
 }
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_28NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = H_BASE + 1152;
 i3 = i2 + 8 | 0;
 i4 = i1 + 24 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  return;
 }
 if ((i5 | 0) == (i1 + 8 | 0)) {
  HEAP32[i2 + 24 >> 2] = i3;
  i1 = HEAP32[i4 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 127](i1, i3);
  return;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 127](i5) | 0;
  return;
 }
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_16NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = H_BASE + 1632;
 i3 = i2 + 8 | 0;
 i4 = i1 + 24 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  return;
 }
 if ((i5 | 0) == (i1 + 8 | 0)) {
  HEAP32[i2 + 24 >> 2] = i3;
  i1 = HEAP32[i4 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 127](i1, i3);
  return;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 127](i5) | 0;
  return;
 }
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB23cursorPrefetchIterationERNS2_16IDBCursorBackendERKNS2_32CursorPrefetchIterationOperationENS_8functionIFvvEEEE4$_51NS_9allocatorISC_EESA_E7__cloneEPNS0_6__baseISA_EE_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = H_BASE + 1712;
 i3 = i2 + 8 | 0;
 i4 = i1 + 24 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  return;
 }
 if ((i5 | 0) == (i1 + 8 | 0)) {
  HEAP32[i2 + 24 >> 2] = i3;
  i1 = HEAP32[i4 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 127](i1, i3);
  return;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 127](i5) | 0;
  return;
 }
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB13cursorIterateERNS2_16IDBCursorBackendERKNS2_24CursorIterationOperationENS_8functionIFvvEEEE4$_50NS_9allocatorISC_EESA_E7__cloneEPNS0_6__baseISA_EE_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = H_BASE + 2232;
 i3 = i2 + 8 | 0;
 i4 = i1 + 24 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  return;
 }
 if ((i5 | 0) == (i1 + 8 | 0)) {
  HEAP32[i2 + 24 >> 2] = i3;
  i1 = HEAP32[i4 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 127](i1, i3);
  return;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 127](i5) | 0;
  return;
 }
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB13cursorAdvanceERNS2_16IDBCursorBackendERKNS2_22CursorAdvanceOperationENS_8functionIFvvEEEE4$_49_0NS_9allocatorISC_EESA_E7__cloneEPNS0_6__baseISA_EE_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = H_BASE + 2272;
 i3 = i2 + 8 | 0;
 i4 = i1 + 24 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  return;
 }
 if ((i5 | 0) == (i1 + 8 | 0)) {
  HEAP32[i2 + 24 >> 2] = i3;
  i1 = HEAP32[i4 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 127](i1, i3);
  return;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 127](i5) | 0;
  return;
 }
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB13cursorAdvanceERNS2_16IDBCursorBackendERKNS2_22CursorAdvanceOperationENS_8functionIFvvEEEE4$_48NS_9allocatorISC_EESA_E7__cloneEPNS0_6__baseISA_EE_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = H_BASE + 2312;
 i3 = i2 + 8 | 0;
 i4 = i1 + 24 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = 0;
  return;
 }
 if ((i5 | 0) == (i1 + 8 | 0)) {
  HEAP32[i2 + 24 >> 2] = i3;
  i1 = HEAP32[i4 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 127](i1, i3);
  return;
 } else {
  HEAP32[i2 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 127](i5) | 0;
  return;
 }
}
function ___remdi3(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = i2 >> 31 | ((i2 | 0) < 0 ? -1 : 0) << 1;
 i8 = ((i2 | 0) < 0 ? -1 : 0) >> 31 | ((i2 | 0) < 0 ? -1 : 0) << 1;
 i9 = i4 >> 31 | ((i4 | 0) < 0 ? -1 : 0) << 1;
 i10 = ((i4 | 0) < 0 ? -1 : 0) >> 31 | ((i4 | 0) < 0 ? -1 : 0) << 1;
 i11 = _i64Subtract(i7 ^ i1, i8 ^ i2, i7, i8) | 0;
 i2 = tempRet0;
 ___udivmoddi4(i11, i2, _i64Subtract(i9 ^ i3, i10 ^ i4, i9, i10) | 0, tempRet0, i6) | 0;
 i10 = _i64Subtract(HEAP32[i6 >> 2] ^ i7, HEAP32[i6 + 4 >> 2] ^ i8, i7, i8) | 0;
 i8 = tempRet0;
 STACKTOP = i5;
 return (tempRet0 = i8, i10) | 0;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_9_3NS_9allocatorISR_EEFvvEED0Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 2352;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_7_1NS_9allocatorISR_EEFvvEED0Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 2432;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_6_0NS_9allocatorISR_EEFvvEED0Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 2472;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_5NS_9allocatorISR_EEFvvEED0Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 2512;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_9_3NS_9allocatorISR_EEFvvEE18destroy_deallocateEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_7_1NS_9allocatorISR_EEFvvEE18destroy_deallocateEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_6_0NS_9allocatorISR_EEFvvEE18destroy_deallocateEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_5NS_9allocatorISR_EEFvvEE18destroy_deallocateEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteIndexERNS2_21IDBTransactionBackendERKNS2_20DeleteIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_14NS_9allocatorISG_EEFvvEED0Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 2672;
 __ZN7WebCore16IDBIndexMetadataD1Ev(i1 + 32 | 0);
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11createIndexERNS2_21IDBTransactionBackendERKNS2_20CreateIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_12NS_9allocatorISG_EEFvvEED0Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 2752;
 __ZN7WebCore16IDBIndexMetadataD1Ev(i1 + 32 | 0);
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB21changeDatabaseVersionERNS2_21IDBTransactionBackendERKNS2_18IDBDatabaseBackend22VersionChangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_47_0NS_9allocatorISH_EEFvvEED0Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1752;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteIndexERNS2_21IDBTransactionBackendERKNS2_20DeleteIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_14NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 __ZN7WebCore16IDBIndexMetadataD1Ev(i1 + 32 | 0);
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11createIndexERNS2_21IDBTransactionBackendERKNS2_20CreateIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_12NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 __ZN7WebCore16IDBIndexMetadataD1Ev(i1 + 32 | 0);
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB21changeDatabaseVersionERNS2_21IDBTransactionBackendERKNS2_18IDBDatabaseBackend22VersionChangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_47_0NS_9allocatorISH_EEFvvEE18destroy_deallocateEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17deleteObjectStoreERNS2_21IDBTransactionBackendERKNS2_26DeleteObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_45_0NS_9allocatorISG_EEFvvEED0Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1832;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17createObjectStoreERNS2_21IDBTransactionBackendERKNS2_26CreateObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_11_0NS_9allocatorISG_EEFvvEED0Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1912;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB16clearObjectStoreERNS2_21IDBTransactionBackendERKNS2_25ClearObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_43_0NS_9allocatorISG_EEFvvEED0Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 2032;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB16clearObjectStoreERNS2_21IDBTransactionBackendERKNS2_25ClearObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_42NS_9allocatorISG_EEFvvEED0Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 2072;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteRangeERNS2_21IDBTransactionBackendERKNS2_20DeleteRangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_41_0NS_9allocatorISG_EEFvvEED0Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 2552;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteIndexERNS2_21IDBTransactionBackendERKNS2_20DeleteIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_15_0NS_9allocatorISG_EEFvvEED0Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 2632;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11createIndexERNS2_21IDBTransactionBackendERKNS2_20CreateIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_13_0NS_9allocatorISG_EEFvvEED0Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 2712;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteRangeERNS2_21IDBTransactionBackendERKNS2_20DeleteRangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_40NS_9allocatorISG_EEFvvEED0Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 2592;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB10openCursorERNS2_21IDBTransactionBackendERKNS2_19OpenCursorOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_37_0NS_9allocatorISG_EEFvvEED0Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 2792;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17deleteObjectStoreERNS2_21IDBTransactionBackendERKNS2_26DeleteObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_45_0NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17createObjectStoreERNS2_21IDBTransactionBackendERKNS2_26CreateObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_11_0NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB10openCursorERNS2_21IDBTransactionBackendERKNS2_19OpenCursorOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_36NS_9allocatorISG_EEFvvEED0Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 2832;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_9_3NS_9allocatorISR_EEFvvEED2Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 2352;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_7_1NS_9allocatorISR_EEFvvEED2Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 2432;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_6_0NS_9allocatorISR_EEFvvEED2Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 2472;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB16clearObjectStoreERNS2_21IDBTransactionBackendERKNS2_25ClearObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_43_0NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_5NS_9allocatorISR_EEFvvEED2Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 2512;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB16clearObjectStoreERNS2_21IDBTransactionBackendERKNS2_25ClearObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_42NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB15openTransactionExRKN3WTF7HashSetIxNS4_7IntHashIyEENS4_10HashTraitsIxEEEENS2_9IndexedDB15TransactionModeENS_8functionIFvbEEEE3$_3_0NS_9allocatorISI_EEFvvEED0Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 2112;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB15openTransactionExRKN3WTF7HashSetIxNS4_7IntHashIyEENS4_10HashTraitsIxEEEENS2_9IndexedDB15TransactionModeENS_8functionIFvbEEEE3$_2NS_9allocatorISI_EEFvvEED0Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 2152;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB5countERNS2_21IDBTransactionBackendERKNS2_14CountOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_39_0NS_9allocatorISG_EEFvvEED0Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 792;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_27__10_NS_9allocatorISG_EEFvvEED0Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1192;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB5countERNS2_21IDBTransactionBackendERKNS2_14CountOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_38NS_9allocatorISG_EEFvvEED0Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 832;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteRangeERNS2_21IDBTransactionBackendERKNS2_20DeleteRangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_41_0NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteIndexERNS2_21IDBTransactionBackendERKNS2_20DeleteIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_15_0NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11createIndexERNS2_21IDBTransactionBackendERKNS2_20CreateIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_13_0NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_31_2NS_9allocatorISG_EEFvvEED0Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1032;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_30_1NS_9allocatorISG_EEFvvEED0Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1072;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_29_0NS_9allocatorISG_EEFvvEED0Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1112;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_26_9NS_9allocatorISG_EEFvvEED0Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1232;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_25_8NS_9allocatorISG_EEFvvEED0Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1272;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_24_7NS_9allocatorISG_EEFvvEED0Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1312;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_23_6NS_9allocatorISG_EEFvvEED0Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1352;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_22_5NS_9allocatorISG_EEFvvEED0Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1392;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_21_4NS_9allocatorISG_EEFvvEED0Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1432;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_20_3NS_9allocatorISG_EEFvvEED0Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1472;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_19_2NS_9allocatorISG_EEFvvEED0Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1512;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_18_1NS_9allocatorISG_EEFvvEED0Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1552;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_17_0NS_9allocatorISG_EEFvvEED0Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1592;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_35_6NS_9allocatorISG_EEFvvEED0Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 872;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_34_5NS_9allocatorISG_EEFvvEED0Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 912;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_33_4NS_9allocatorISG_EEFvvEED0Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 952;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_32_3NS_9allocatorISG_EEFvvEED0Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 992;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteRangeERNS2_21IDBTransactionBackendERKNS2_20DeleteRangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_40NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB10openCursorERNS2_21IDBTransactionBackendERKNS2_19OpenCursorOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_37_0NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_28NS_9allocatorISG_EEFvvEED0Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1152;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_16NS_9allocatorISG_EEFvvEED0Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1632;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB10openCursorERNS2_21IDBTransactionBackendERKNS2_19OpenCursorOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_36NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB15openTransactionExRKN3WTF7HashSetIxNS4_7IntHashIyEENS4_10HashTraitsIxEEEENS2_9IndexedDB15TransactionModeENS_8functionIFvbEEEE3$_3_0NS_9allocatorISI_EEFvvEE18destroy_deallocateEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___divdi3(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i5 = i2 >> 31 | ((i2 | 0) < 0 ? -1 : 0) << 1;
 i6 = ((i2 | 0) < 0 ? -1 : 0) >> 31 | ((i2 | 0) < 0 ? -1 : 0) << 1;
 i7 = i4 >> 31 | ((i4 | 0) < 0 ? -1 : 0) << 1;
 i8 = ((i4 | 0) < 0 ? -1 : 0) >> 31 | ((i4 | 0) < 0 ? -1 : 0) << 1;
 i9 = _i64Subtract(i5 ^ i1, i6 ^ i2, i5, i6) | 0;
 i2 = tempRet0;
 i1 = i7 ^ i5;
 i5 = i8 ^ i6;
 i6 = _i64Subtract((___udivmoddi4(i9, i2, _i64Subtract(i7 ^ i3, i8 ^ i4, i7, i8) | 0, tempRet0, 0) | 0) ^ i1, tempRet0 ^ i5, i1, i5) | 0;
 return (tempRet0 = tempRet0, i6) | 0;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB23cursorPrefetchIterationERNS2_16IDBCursorBackendERKNS2_32CursorPrefetchIterationOperationENS_8functionIFvvEEEE4$_51NS_9allocatorISC_EESA_ED0Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1712;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB15openTransactionExRKN3WTF7HashSetIxNS4_7IntHashIyEENS4_10HashTraitsIxEEEENS2_9IndexedDB15TransactionModeENS_8functionIFvbEEEE3$_2NS_9allocatorISI_EEFvvEE18destroy_deallocateEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB5countERNS2_21IDBTransactionBackendERKNS2_14CountOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_39_0NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_27__10_NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB5countERNS2_21IDBTransactionBackendERKNS2_14CountOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_38NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_35_6NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_34_5NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_33_4NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_32_3NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_31_2NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_30_1NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_29_0NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_26_9NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_25_8NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_24_7NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_23_6NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_22_5NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_21_4NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_20_3NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_19_2NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_18_1NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_17_0NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_9_3NS_9allocatorISR_EEFvvEE7destroyEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_7_1NS_9allocatorISR_EEFvvEE7destroyEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_6_0NS_9allocatorISR_EEFvvEE7destroyEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_28NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_16NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_5NS_9allocatorISR_EEFvvEE7destroyEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteIndexERNS2_21IDBTransactionBackendERKNS2_20DeleteIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_14NS_9allocatorISG_EEFvvEED2Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 2672;
 __ZN7WebCore16IDBIndexMetadataD1Ev(i1 + 32 | 0);
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11createIndexERNS2_21IDBTransactionBackendERKNS2_20CreateIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_12NS_9allocatorISG_EEFvvEED2Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 2752;
 __ZN7WebCore16IDBIndexMetadataD1Ev(i1 + 32 | 0);
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function __ZN7WebCore26IDBServerConnectionLevelDBC2ERKN3WTF6StringEPNS_22IDBBackingStoreLevelDBE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 HEAP32[i1 + 4 >> 2] = 1;
 HEAP32[i1 >> 2] = H_BASE + 2872;
 HEAP32[i1 + 8 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i4 = i3 + 4 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = i1 + 56 | 0;
 _memset(i1 + 12 | 0, 0, 40) | 0;
 HEAP32[i4 >> 2] = 1;
 HEAP32[i4 + 4 >> 2] = 0;
 HEAP8[i1 + 64 | 0] = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 + 68 >> 2] = i4;
 if ((i4 | 0) == 0) {
  return;
 }
 i1 = i4 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
 return;
}
function __ZN7WebCore26IDBServerConnectionLevelDBC1ERKN3WTF6StringEPNS_22IDBBackingStoreLevelDBE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 HEAP32[i1 + 4 >> 2] = 1;
 HEAP32[i1 >> 2] = H_BASE + 2872;
 HEAP32[i1 + 8 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i4 = i3 + 4 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = i1 + 56 | 0;
 _memset(i1 + 12 | 0, 0, 40) | 0;
 HEAP32[i4 >> 2] = 1;
 HEAP32[i4 + 4 >> 2] = 0;
 HEAP8[i1 + 64 | 0] = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 + 68 >> 2] = i4;
 if ((i4 | 0) == 0) {
  return;
 }
 i1 = i4 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB23cursorPrefetchIterationERNS2_16IDBCursorBackendERKNS2_32CursorPrefetchIterationOperationENS_8functionIFvvEEEE4$_51NS_9allocatorISC_EESA_E18destroy_deallocateEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB13cursorIterateERNS2_16IDBCursorBackendERKNS2_24CursorIterationOperationENS_8functionIFvvEEEE4$_50NS_9allocatorISC_EESA_ED0Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 2232;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB13cursorAdvanceERNS2_16IDBCursorBackendERKNS2_22CursorAdvanceOperationENS_8functionIFvvEEEE4$_49_0NS_9allocatorISC_EESA_ED0Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 2272;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB13cursorAdvanceERNS2_16IDBCursorBackendERKNS2_22CursorAdvanceOperationENS_8functionIFvvEEEE4$_48NS_9allocatorISC_EESA_ED0Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 2312;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB21changeDatabaseVersionERNS2_21IDBTransactionBackendERKNS2_18IDBDatabaseBackend22VersionChangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_47_0NS_9allocatorISH_EEFvvEED2Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1752;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17deleteObjectStoreERNS2_21IDBTransactionBackendERKNS2_26DeleteObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_44NS_9allocatorISG_EEFvvEED0Ev_(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = H_BASE + 1872;
 ___ZNSt3__128__libcpp_compressed_pair_impIZN7WebCore26IDBServerConnectionLevelDB17deleteObjectStoreERNS1_21IDBTransactionBackendERKNS1_26DeleteObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS1_16IDBDatabaseErrorEEEEEEE4$_44NS_9allocatorISF_EELj2EED2Ev_(i1 + 8 | 0);
 __ZdlPv(i1);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB13cursorIterateERNS2_16IDBCursorBackendERKNS2_24CursorIterationOperationENS_8functionIFvvEEEE4$_50NS_9allocatorISC_EESA_E18destroy_deallocateEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB13cursorAdvanceERNS2_16IDBCursorBackendERKNS2_22CursorAdvanceOperationENS_8functionIFvvEEEE4$_49_0NS_9allocatorISC_EESA_E18destroy_deallocateEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB13cursorAdvanceERNS2_16IDBCursorBackendERKNS2_22CursorAdvanceOperationENS_8functionIFvvEEEE4$_48NS_9allocatorISC_EESA_E18destroy_deallocateEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteIndexERNS2_21IDBTransactionBackendERKNS2_20DeleteIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_14NS_9allocatorISG_EEFvvEE7destroyEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 __ZN7WebCore16IDBIndexMetadataD1Ev(i1 + 32 | 0);
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11createIndexERNS2_21IDBTransactionBackendERKNS2_20CreateIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_12NS_9allocatorISG_EEFvvEE7destroyEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 __ZN7WebCore16IDBIndexMetadataD1Ev(i1 + 32 | 0);
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17deleteObjectStoreERNS2_21IDBTransactionBackendERKNS2_26DeleteObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_44NS_9allocatorISG_EEFvvEED2Ev_(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = H_BASE + 1872;
 ___ZNSt3__128__libcpp_compressed_pair_impIZN7WebCore26IDBServerConnectionLevelDB17deleteObjectStoreERNS1_21IDBTransactionBackendERKNS1_26DeleteObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS1_16IDBDatabaseErrorEEEEEEE4$_44NS_9allocatorISF_EELj2EED2Ev_(i1 + 8 | 0);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17deleteObjectStoreERNS2_21IDBTransactionBackendERKNS2_26DeleteObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_45_0NS_9allocatorISG_EEFvvEED2Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1832;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17deleteObjectStoreERNS2_21IDBTransactionBackendERKNS2_26DeleteObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_44NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_(i1) {
 i1 = i1 | 0;
 ___ZNSt3__128__libcpp_compressed_pair_impIZN7WebCore26IDBServerConnectionLevelDB17deleteObjectStoreERNS1_21IDBTransactionBackendERKNS1_26DeleteObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS1_16IDBDatabaseErrorEEEEEEE4$_44NS_9allocatorISF_EELj2EED2Ev_(i1 + 8 | 0);
 __ZdlPv(i1);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17createObjectStoreERNS2_21IDBTransactionBackendERKNS2_26CreateObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_11_0NS_9allocatorISG_EEFvvEED2Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1912;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB16clearObjectStoreERNS2_21IDBTransactionBackendERKNS2_25ClearObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_43_0NS_9allocatorISG_EEFvvEED2Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 2032;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB16clearObjectStoreERNS2_21IDBTransactionBackendERKNS2_25ClearObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_42NS_9allocatorISG_EEFvvEED2Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 2072;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB21changeDatabaseVersionERNS2_21IDBTransactionBackendERKNS2_18IDBDatabaseBackend22VersionChangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_47_0NS_9allocatorISH_EEFvvEE7destroyEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteRangeERNS2_21IDBTransactionBackendERKNS2_20DeleteRangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_41_0NS_9allocatorISG_EEFvvEED2Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 2552;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteIndexERNS2_21IDBTransactionBackendERKNS2_20DeleteIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_15_0NS_9allocatorISG_EEFvvEED2Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 2632;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11createIndexERNS2_21IDBTransactionBackendERKNS2_20CreateIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_13_0NS_9allocatorISG_EEFvvEED2Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 2712;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteRangeERNS2_21IDBTransactionBackendERKNS2_20DeleteRangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_40NS_9allocatorISG_EEFvvEED2Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 2592;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB10openCursorERNS2_21IDBTransactionBackendERKNS2_19OpenCursorOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_37_0NS_9allocatorISG_EEFvvEED2Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 2792;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB10openCursorERNS2_21IDBTransactionBackendERKNS2_19OpenCursorOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_36NS_9allocatorISG_EEFvvEED2Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 2832;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB15openTransactionExRKN3WTF7HashSetIxNS4_7IntHashIyEENS4_10HashTraitsIxEEEENS2_9IndexedDB15TransactionModeENS_8functionIFvbEEEE3$_3_0NS_9allocatorISI_EEFvvEED2Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 2112;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB15openTransactionExRKN3WTF7HashSetIxNS4_7IntHashIyEENS4_10HashTraitsIxEEEENS2_9IndexedDB15TransactionModeENS_8functionIFvbEEEE3$_2NS_9allocatorISI_EEFvvEED2Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 2152;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17commitTransactionExNS_8functionIFvbEEEE3$_4NS_9allocatorIS7_EEFvvEED0Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1992;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB5countERNS2_21IDBTransactionBackendERKNS2_14CountOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_39_0NS_9allocatorISG_EEFvvEED2Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 792;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_27__10_NS_9allocatorISG_EEFvvEED2Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1192;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17deleteObjectStoreERNS2_21IDBTransactionBackendERKNS2_26DeleteObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_44NS_9allocatorISG_EEFvvEE7destroyEv_(i1) {
 i1 = i1 | 0;
 ___ZNSt3__128__libcpp_compressed_pair_impIZN7WebCore26IDBServerConnectionLevelDB17deleteObjectStoreERNS1_21IDBTransactionBackendERKNS1_26DeleteObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS1_16IDBDatabaseErrorEEEEEEE4$_44NS_9allocatorISF_EELj2EED2Ev_(i1 + 8 | 0);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB5countERNS2_21IDBTransactionBackendERKNS2_14CountOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_38NS_9allocatorISG_EEFvvEED2Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 832;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17deleteObjectStoreERNS2_21IDBTransactionBackendERKNS2_26DeleteObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_45_0NS_9allocatorISG_EEFvvEE7destroyEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17createObjectStoreERNS2_21IDBTransactionBackendERKNS2_26CreateObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_11_0NS_9allocatorISG_EEFvvEE7destroyEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_31_2NS_9allocatorISG_EEFvvEED2Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1032;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_30_1NS_9allocatorISG_EEFvvEED2Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1072;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_29_0NS_9allocatorISG_EEFvvEED2Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1112;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_26_9NS_9allocatorISG_EEFvvEED2Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1232;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_25_8NS_9allocatorISG_EEFvvEED2Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1272;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_24_7NS_9allocatorISG_EEFvvEED2Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1312;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_23_6NS_9allocatorISG_EEFvvEED2Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1352;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_22_5NS_9allocatorISG_EEFvvEED2Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1392;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_21_4NS_9allocatorISG_EEFvvEED2Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1432;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_20_3NS_9allocatorISG_EEFvvEED2Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1472;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_19_2NS_9allocatorISG_EEFvvEED2Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1512;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_18_1NS_9allocatorISG_EEFvvEED2Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1552;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_17_0NS_9allocatorISG_EEFvvEED2Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1592;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_35_6NS_9allocatorISG_EEFvvEED2Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 872;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_34_5NS_9allocatorISG_EEFvvEED2Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 912;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_33_4NS_9allocatorISG_EEFvvEED2Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 952;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_32_3NS_9allocatorISG_EEFvvEED2Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 992;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB16clearObjectStoreERNS2_21IDBTransactionBackendERKNS2_25ClearObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_43_0NS_9allocatorISG_EEFvvEE7destroyEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_28NS_9allocatorISG_EEFvvEED2Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1152;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_16NS_9allocatorISG_EEFvvEED2Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1632;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB16clearObjectStoreERNS2_21IDBTransactionBackendERKNS2_25ClearObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_42NS_9allocatorISG_EEFvvEE7destroyEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB23cursorPrefetchIterationERNS2_16IDBCursorBackendERKNS2_32CursorPrefetchIterationOperationENS_8functionIFvvEEEE4$_51NS_9allocatorISC_EESA_ED2Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1712;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17commitTransactionExNS_8functionIFvbEEEE3$_4NS_9allocatorIS7_EEFvvEE18destroy_deallocateEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteRangeERNS2_21IDBTransactionBackendERKNS2_20DeleteRangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_41_0NS_9allocatorISG_EEFvvEE7destroyEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteIndexERNS2_21IDBTransactionBackendERKNS2_20DeleteIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_15_0NS_9allocatorISG_EEFvvEE7destroyEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11createIndexERNS2_21IDBTransactionBackendERKNS2_20CreateIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_13_0NS_9allocatorISG_EEFvvEE7destroyEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteRangeERNS2_21IDBTransactionBackendERKNS2_20DeleteRangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_40NS_9allocatorISG_EEFvvEE7destroyEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB10openCursorERNS2_21IDBTransactionBackendERKNS2_19OpenCursorOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_37_0NS_9allocatorISG_EEFvvEE7destroyEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB10openCursorERNS2_21IDBTransactionBackendERKNS2_19OpenCursorOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_36NS_9allocatorISG_EEFvvEE7destroyEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB15openTransactionExRKN3WTF7HashSetIxNS4_7IntHashIyEENS4_10HashTraitsIxEEEENS2_9IndexedDB15TransactionModeENS_8functionIFvbEEEE3$_3_0NS_9allocatorISI_EEFvvEE7destroyEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB15openTransactionExRKN3WTF7HashSetIxNS4_7IntHashIyEENS4_10HashTraitsIxEEEENS2_9IndexedDB15TransactionModeENS_8functionIFvbEEEE3$_2NS_9allocatorISI_EEFvvEE7destroyEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB5countERNS2_21IDBTransactionBackendERKNS2_14CountOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_39_0NS_9allocatorISG_EEFvvEE7destroyEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_27__10_NS_9allocatorISG_EEFvvEE7destroyEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB5countERNS2_21IDBTransactionBackendERKNS2_14CountOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_38NS_9allocatorISG_EEFvvEE7destroyEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
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
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB13cursorIterateERNS2_16IDBCursorBackendERKNS2_24CursorIterationOperationENS_8functionIFvvEEEE4$_50NS_9allocatorISC_EESA_ED2Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 2232;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB13cursorAdvanceERNS2_16IDBCursorBackendERKNS2_22CursorAdvanceOperationENS_8functionIFvvEEEE4$_49_0NS_9allocatorISC_EESA_ED2Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 2272;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_35_6NS_9allocatorISG_EEFvvEE7destroyEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_34_5NS_9allocatorISG_EEFvvEE7destroyEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_33_4NS_9allocatorISG_EEFvvEE7destroyEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_32_3NS_9allocatorISG_EEFvvEE7destroyEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_31_2NS_9allocatorISG_EEFvvEE7destroyEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_30_1NS_9allocatorISG_EEFvvEE7destroyEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_29_0NS_9allocatorISG_EEFvvEE7destroyEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_26_9NS_9allocatorISG_EEFvvEE7destroyEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_25_8NS_9allocatorISG_EEFvvEE7destroyEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_24_7NS_9allocatorISG_EEFvvEE7destroyEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_23_6NS_9allocatorISG_EEFvvEE7destroyEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_22_5NS_9allocatorISG_EEFvvEE7destroyEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_21_4NS_9allocatorISG_EEFvvEE7destroyEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_20_3NS_9allocatorISG_EEFvvEE7destroyEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_19_2NS_9allocatorISG_EEFvvEE7destroyEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_18_1NS_9allocatorISG_EEFvvEE7destroyEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_17_0NS_9allocatorISG_EEFvvEE7destroyEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB13cursorAdvanceERNS2_16IDBCursorBackendERKNS2_22CursorAdvanceOperationENS_8functionIFvvEEEE4$_48NS_9allocatorISC_EESA_ED2Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 2312;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function __ZN7WebCore26IDBServerConnectionLevelDB5closeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 8 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 + 4 | 0;
   i4 = i2 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    break;
   }
   i5 = i2 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 1023](i5);
  }
 } while (0);
 HEAP8[i1 + 64 | 0] = 1;
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_28NS_9allocatorISG_EEFvvEE7destroyEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_16NS_9allocatorISG_EEFvvEE7destroyEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB23cursorPrefetchIterationERNS2_16IDBCursorBackendERKNS2_32CursorPrefetchIterationOperationENS_8functionIFvvEEEE4$_51NS_9allocatorISC_EESA_E7destroyEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB13cursorIterateERNS2_16IDBCursorBackendERKNS2_24CursorIterationOperationENS_8functionIFvvEEEE4$_50NS_9allocatorISC_EESA_E7destroyEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB13cursorAdvanceERNS2_16IDBCursorBackendERKNS2_22CursorAdvanceOperationENS_8functionIFvvEEEE4$_49_0NS_9allocatorISC_EESA_E7destroyEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB13cursorAdvanceERNS2_16IDBCursorBackendERKNS2_22CursorAdvanceOperationENS_8functionIFvvEEEE4$_48NS_9allocatorISC_EESA_E7destroyEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB33getOrEstablishIDBDatabaseMetadataENS_8functionIFvRKNS2_19IDBDatabaseMetadataEbEEEE3$_0NS_9allocatorISA_EES8_EclES7_Ob_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 HEAP8[i5] = HEAP8[i3] & 1;
 i3 = HEAP32[i1 + 32 >> 2] | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i3 >> 2] | 0) + 24 >> 2] & 15](i3, i2, i5);
 STACKTOP = i4;
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB15openTransactionExRKN3WTF7HashSetIxNS4_7IntHashIyEENS4_10HashTraitsIxEEEENS2_9IndexedDB15TransactionModeENS_8functionIFvbEEEE3$_3_0NS_9allocatorISI_EEFvvEEclEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 HEAP8[i3] = 1;
 i4 = HEAP32[i1 + 24 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 24 >> 2] & 127](i4, i3);
 STACKTOP = i2;
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB15openTransactionExRKN3WTF7HashSetIxNS4_7IntHashIyEENS4_10HashTraitsIxEEEENS2_9IndexedDB15TransactionModeENS_8functionIFvbEEEE3$_2NS_9allocatorISI_EEFvvEEclEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 HEAP8[i3] = 0;
 i4 = HEAP32[i1 + 24 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 24 >> 2] & 127](i4, i3);
 STACKTOP = i2;
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17commitTransactionExNS_8functionIFvbEEEE3$_4NS_9allocatorIS7_EEFvvEED2Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1992;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17commitTransactionExNS_8functionIFvbEEEE3$_4NS_9allocatorIS7_EEFvvEE7destroyEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == (i1 + 8 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1023](i2);
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1023](i2);
 return;
}
function dynCall_viiiiiiiiiiiii(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13, i14) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 i11 = i11 | 0;
 i12 = i12 | 0;
 i13 = i13 | 0;
 i14 = i14 | 0;
 FUNCTION_TABLE_viiiiiiiiiiiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0, i9 | 0, i10 | 0, i11 | 0, i12 | 0, i13 | 0, i14 | 0);
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB14deleteDatabaseERKN3WTF6StringENS_8functionIFvbEEEE3$_1NS_9allocatorISB_EES9_EclEOb_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 HEAP8[i4] = HEAP8[i2] & 1;
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 24 >> 2] & 127](i2, i4);
 STACKTOP = i3;
 return;
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
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17commitTransactionExNS_8functionIFvbEEEE3$_4NS_9allocatorIS7_EEFvvEEclEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 HEAP8[i3] = HEAP8[i1 + 32 | 0] & 1;
 i4 = HEAP32[i1 + 24 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 24 >> 2] & 127](i4, i3);
 STACKTOP = i2;
 return;
}
function dynCall_viiiiiiiiiiii(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 i11 = i11 | 0;
 i12 = i12 | 0;
 i13 = i13 | 0;
 FUNCTION_TABLE_viiiiiiiiiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0, i9 | 0, i10 | 0, i11 | 0, i12 | 0, i13 | 0);
}
function ___muldsi3(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i1 & 65535;
 i4 = i2 & 65535;
 i5 = Math_imul(i4, i3) | 0;
 i6 = i1 >>> 16;
 i1 = (i5 >>> 16) + (Math_imul(i4, i6) | 0) | 0;
 i4 = i2 >>> 16;
 i2 = Math_imul(i4, i3) | 0;
 return (tempRet0 = (i1 >>> 16) + (Math_imul(i4, i6) | 0) + (((i1 & 65535) + i2 | 0) >>> 16) | 0, i1 + i2 << 16 | i5 & 65535 | 0) | 0;
}
function dynCall_viiiiiiiiiii(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 i11 = i11 | 0;
 i12 = i12 | 0;
 FUNCTION_TABLE_viiiiiiiiiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0, i9 | 0, i10 | 0, i11 | 0, i12 | 0);
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB23cursorPrefetchIterationERNS2_16IDBCursorBackendERKNS2_32CursorPrefetchIterationOperationENS_8functionIFvvEEEE4$_51NS_9allocatorISC_EESA_EclEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 24 >> 2] & 1023](i2);
 return;
}
function _llvm_cttz_i32(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP8[cttz_i8 + (i1 & 255) | 0] | 0;
 if ((i2 | 0) < 8) return i2 | 0;
 i2 = HEAP8[cttz_i8 + (i1 >> 8 & 255) | 0] | 0;
 if ((i2 | 0) < 8) return i2 + 8 | 0;
 i2 = HEAP8[cttz_i8 + (i1 >> 16 & 255) | 0] | 0;
 if ((i2 | 0) < 8) return i2 + 16 | 0;
 return (HEAP8[cttz_i8 + (i1 >>> 24) | 0] | 0) + 24 | 0;
}
function _llvm_ctlz_i32(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP8[ctlz_i8 + (i1 >>> 24) | 0] | 0;
 if ((i2 | 0) < 8) return i2 | 0;
 i2 = HEAP8[ctlz_i8 + (i1 >> 16 & 255) | 0] | 0;
 if ((i2 | 0) < 8) return i2 + 8 | 0;
 i2 = HEAP8[ctlz_i8 + (i1 >> 8 & 255) | 0] | 0;
 if ((i2 | 0) < 8) return i2 + 16 | 0;
 return (HEAP8[ctlz_i8 + (i1 & 255) | 0] | 0) + 24 | 0;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB13cursorIterateERNS2_16IDBCursorBackendERKNS2_24CursorIterationOperationENS_8functionIFvvEEEE4$_50NS_9allocatorISC_EESA_EclEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 24 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB13cursorAdvanceERNS2_16IDBCursorBackendERKNS2_22CursorAdvanceOperationENS_8functionIFvvEEEE4$_49_0NS_9allocatorISC_EESA_EclEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 24 >> 2] & 1023](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB13cursorAdvanceERNS2_16IDBCursorBackendERKNS2_22CursorAdvanceOperationENS_8functionIFvvEEEE4$_48NS_9allocatorISC_EESA_EclEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 24 >> 2] & 1023](i2);
 return;
}
function ___uremdi3(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 ___udivmoddi4(i1, i2, i3, i4, i6) | 0;
 STACKTOP = i5;
 return (tempRet0 = HEAP32[i6 + 4 >> 2] | 0, HEAP32[i6 >> 2] | 0) | 0;
}
function ___muldi3(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 i5 = i1;
 i1 = i3;
 i3 = ___muldsi3(i5, i1) | 0;
 i6 = tempRet0;
 return (tempRet0 = (Math_imul(i2, i1) | 0) + (Math_imul(i4, i5) | 0) + i6 | i6 & 0, i3 & -1 | 0) | 0;
}
function b0(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 i11 = i11 | 0;
 i12 = i12 | 0;
 i13 = i13 | 0;
 abort(0);
}
function dynCall_viiiiiii(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 FUNCTION_TABLE_viiiiiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0);
}
function b6(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 i11 = i11 | 0;
 i12 = i12 | 0;
 abort(6);
}
function _bitshift64Ashr(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if ((i3 | 0) < 32) {
  tempRet0 = i2 >> i3;
  return i1 >>> i3 | (i2 & (1 << i3) - 1) << 32 - i3;
 }
 tempRet0 = (i2 | 0) < 0 ? -1 : 0;
 return i2 >> i3 - 32 | 0;
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
function _bitshift64Shl(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if ((i3 | 0) < 32) {
  tempRet0 = i2 << i3 | (i1 & (1 << i3) - 1 << 32 - i3) >>> 32 - i3;
  return i1 << i3;
 }
 tempRet0 = i1 << i3 - 32;
 return 0;
}
function b9(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 i11 = i11 | 0;
 abort(9);
}
function _i64Subtract(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 i5 = i2 - i4 >>> 0;
 i5 = i2 - i4 - (i3 >>> 0 > i1 >>> 0 | 0) >>> 0;
 return (tempRet0 = i5, i1 - i3 >>> 0 | 0) | 0;
}
function _bitshift64Lshr(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if ((i3 | 0) < 32) {
  tempRet0 = i2 >>> i3;
  return i1 >>> i3 | (i2 & (1 << i3) - 1) << 32 - i3;
 }
 tempRet0 = 0;
 return i2 >>> i3 - 32 | 0;
}
function dynCall_viiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 FUNCTION_TABLE_viiiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
}
function _i64Add(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 i5 = i1 + i3 >>> 0;
 return (tempRet0 = i2 + i4 + (i5 >>> 0 < i1 >>> 0 | 0) >>> 0, i5 | 0) | 0;
}
function ___udivdi3(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 i5 = ___udivmoddi4(i1, i2, i3, i4, 0) | 0;
 return (tempRet0 = tempRet0, i5) | 0;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 63](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function dynCall_iiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0) | 0;
}
function __ZN7WebCore26IDBServerConnectionLevelDBD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore26IDBServerConnectionLevelDBD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 15](i2 | 0, i3 | 0, i4 | 0);
}
function b2(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 abort(2);
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
function b1(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(1);
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
function __ZN7WebCore26IDBServerConnectionLevelDB8isClosedEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[i1 + 64 | 0] & 1) != 0 | 0;
}
function b3(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(3);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 127](i2 | 0) | 0;
}
function b11(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(11);
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 1023](i2 | 0);
}
function b8(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(8);
 return 0;
}
function b13(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(13);
}
function b12(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(12);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
}
function b5(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(5);
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
function b7(i1) {
 i1 = i1 | 0;
 abort(7);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b4(i1) {
 i1 = i1 | 0;
 abort(4);
}
function b10() {
 abort(10);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_viiiiiiiiiiiii = [b0,b0];
  var FUNCTION_TABLE_viiiiii = [b1,b1,__ZN7WebCore26IDBServerConnectionLevelDB15openTransactionExRKN3WTF7HashSetIxNS1_7IntHashIyEENS1_10HashTraitsIxEEEENS_9IndexedDB15TransactionModeENSt3__18functionIFvbEEE,b1];
  var FUNCTION_TABLE_viiiiiii = [b2,b2];
  var FUNCTION_TABLE_viiiii = [b3,b3];
  var FUNCTION_TABLE_vi = [b4,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB16clearObjectStoreERNS2_21IDBTransactionBackendERKNS2_25ClearObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_43_0NS_9allocatorISG_EEFvvEED0Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_19_2NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB15openTransactionExRKN3WTF7HashSetIxNS4_7IntHashIyEENS4_10HashTraitsIxEEEENS2_9IndexedDB15TransactionModeENS_8functionIFvbEEEE3$_3_0NS_9allocatorISI_EEFvvEE7destroyEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB13cursorAdvanceERNS2_16IDBCursorBackendERKNS2_22CursorAdvanceOperationENS_8functionIFvvEEEE4$_49_0NS_9allocatorISC_EESA_EclEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_21_4NS_9allocatorISG_EEFvvEED0Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB16clearObjectStoreERNS2_21IDBTransactionBackendERKNS2_25ClearObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_42NS_9allocatorISG_EEFvvEEclEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB23cursorPrefetchIterationERNS2_16IDBCursorBackendERKNS2_32CursorPrefetchIterationOperationENS_8functionIFvvEEEE4$_51NS_9allocatorISC_EESA_E18destroy_deallocateEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_7_1NS_9allocatorISR_EEFvvEED2Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_7_1NS_9allocatorISR_EEFvvEE18destroy_deallocateEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB10openCursorERNS2_21IDBTransactionBackendERKNS2_19OpenCursorOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_37_0NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_27__10_NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB33getOrEstablishIDBDatabaseMetadataENS_8functionIFvRKNS2_19IDBDatabaseMetadataEbEEEE3$_0NS_9allocatorISA_EES8_E18destroy_deallocateEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17deleteObjectStoreERNS2_21IDBTransactionBackendERKNS2_26DeleteObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_44NS_9allocatorISG_EEFvvEED2Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB13cursorIterateERNS2_16IDBCursorBackendERKNS2_24CursorIterationOperationENS_8functionIFvvEEEE4$_50NS_9allocatorISC_EESA_E7destroyEv_
  ,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB13cursorAdvanceERNS2_16IDBCursorBackendERKNS2_22CursorAdvanceOperationENS_8functionIFvvEEEE4$_48NS_9allocatorISC_EESA_ED2Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_34_5NS_9allocatorISG_EEFvvEEclEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_23_6NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB33getOrEstablishIDBDatabaseMetadataENS_8functionIFvRKNS2_19IDBDatabaseMetadataEbEEEE3$_0NS_9allocatorISA_EES8_E7destroyEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteRangeERNS2_21IDBTransactionBackendERKNS2_20DeleteRangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_40NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_28NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB21changeDatabaseVersionERNS2_21IDBTransactionBackendERKNS2_18IDBDatabaseBackend22VersionChangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_46NS_9allocatorISH_EEFvvEE18destroy_deallocateEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB21changeDatabaseVersionERNS2_21IDBTransactionBackendERKNS2_18IDBDatabaseBackend22VersionChangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_47_0NS_9allocatorISH_EEFvvEED0Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_32_3NS_9allocatorISG_EEFvvEED0Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_24_7NS_9allocatorISG_EEFvvEE7destroyEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB13cursorAdvanceERNS2_16IDBCursorBackendERKNS2_22CursorAdvanceOperationENS_8functionIFvvEEEE4$_48NS_9allocatorISC_EESA_ED0Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_21_4NS_9allocatorISG_EEFvvEED2Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_22_5NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB23cursorPrefetchIterationERNS2_16IDBCursorBackendERKNS2_32CursorPrefetchIterationOperationENS_8functionIFvvEEEE4$_51NS_9allocatorISC_EESA_EclEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17createObjectStoreERNS2_21IDBTransactionBackendERKNS2_26CreateObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_11_0NS_9allocatorISG_EEFvvEEclEv_
  ,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11createIndexERNS2_21IDBTransactionBackendERKNS2_20CreateIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_13_0NS_9allocatorISG_EEFvvEED0Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB13cursorAdvanceERNS2_16IDBCursorBackendERKNS2_22CursorAdvanceOperationENS_8functionIFvvEEEE4$_48NS_9allocatorISC_EESA_E18destroy_deallocateEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteIndexERNS2_21IDBTransactionBackendERKNS2_20DeleteIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_14NS_9allocatorISG_EEFvvEED2Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_24_7NS_9allocatorISG_EEFvvEEclEv_,b4,__ZN7WebCore26IDBServerConnectionLevelDB5closeEv,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_35_6NS_9allocatorISG_EEFvvEED0Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_6_0NS_9allocatorISR_EEFvvEED0Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_31_2NS_9allocatorISG_EEFvvEED0Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_5NS_9allocatorISR_EEFvvEE7destroyEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB15openTransactionExRKN3WTF7HashSetIxNS4_7IntHashIyEENS4_10HashTraitsIxEEEENS2_9IndexedDB15TransactionModeENS_8functionIFvbEEEE3$_2NS_9allocatorISI_EEFvvEED0Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB13cursorIterateERNS2_16IDBCursorBackendERKNS2_24CursorIterationOperationENS_8functionIFvvEEEE4$_50NS_9allocatorISC_EESA_EclEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_32_3NS_9allocatorISG_EEFvvEEclEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB15openTransactionExRKN3WTF7HashSetIxNS4_7IntHashIyEENS4_10HashTraitsIxEEEENS2_9IndexedDB15TransactionModeENS_8functionIFvbEEEE3$_3_0NS_9allocatorISI_EEFvvEEclEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17createObjectStoreERNS2_21IDBTransactionBackendERKNS2_26CreateObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_11_0NS_9allocatorISG_EEFvvEED0Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11createIndexERNS2_21IDBTransactionBackendERKNS2_20CreateIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_13_0NS_9allocatorISG_EEFvvEED2Ev_
  ,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_34_5NS_9allocatorISG_EEFvvEED0Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17createObjectStoreERNS2_21IDBTransactionBackendERKNS2_26CreateObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_10NS_9allocatorISG_EEFvvEEclEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB13cursorIterateERNS2_16IDBCursorBackendERKNS2_24CursorIterationOperationENS_8functionIFvvEEEE4$_50NS_9allocatorISC_EESA_E18destroy_deallocateEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_21_4NS_9allocatorISG_EEFvvEEclEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB23cursorPrefetchIterationERNS2_16IDBCursorBackendERKNS2_32CursorPrefetchIterationOperationENS_8functionIFvvEEEE4$_51NS_9allocatorISC_EESA_ED0Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_27__10_NS_9allocatorISG_EEFvvEE7destroyEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_20_3NS_9allocatorISG_EEFvvEE7destroyEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_26_9NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB15openTransactionExRKN3WTF7HashSetIxNS4_7IntHashIyEENS4_10HashTraitsIxEEEENS2_9IndexedDB15TransactionModeENS_8functionIFvbEEEE3$_2NS_9allocatorISI_EEFvvEED2Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_16NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17deleteObjectStoreERNS2_21IDBTransactionBackendERKNS2_26DeleteObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_45_0NS_9allocatorISG_EEFvvEED2Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17deleteObjectStoreERNS2_21IDBTransactionBackendERKNS2_26DeleteObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_44NS_9allocatorISG_EEFvvEED0Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17deleteObjectStoreERNS2_21IDBTransactionBackendERKNS2_26DeleteObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_44NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteRangeERNS2_21IDBTransactionBackendERKNS2_20DeleteRangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_41_0NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB23cursorPrefetchIterationERNS2_16IDBCursorBackendERKNS2_32CursorPrefetchIterationOperationENS_8functionIFvvEEEE4$_51NS_9allocatorISC_EESA_E7destroyEv_
  ,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_30_1NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_34_5NS_9allocatorISG_EEFvvEED2Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_21_4NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB5countERNS2_21IDBTransactionBackendERKNS2_14CountOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_38NS_9allocatorISG_EEFvvEE7destroyEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB21changeDatabaseVersionERNS2_21IDBTransactionBackendERKNS2_18IDBDatabaseBackend22VersionChangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_47_0NS_9allocatorISH_EEFvvEEclEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_5NS_9allocatorISR_EEFvvEEclEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_34_5NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteIndexERNS2_21IDBTransactionBackendERKNS2_20DeleteIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_14NS_9allocatorISG_EEFvvEE7destroyEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB16clearObjectStoreERNS2_21IDBTransactionBackendERKNS2_25ClearObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_42NS_9allocatorISG_EEFvvEE7destroyEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteRangeERNS2_21IDBTransactionBackendERKNS2_20DeleteRangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_40NS_9allocatorISG_EEFvvEED0Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_6_0NS_9allocatorISR_EEFvvEE18destroy_deallocateEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17commitTransactionExNS_8functionIFvbEEEE3$_4NS_9allocatorIS7_EEFvvEE18destroy_deallocateEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_22_5NS_9allocatorISG_EEFvvEE7destroyEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_9_3NS_9allocatorISR_EEFvvEED2Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteIndexERNS2_21IDBTransactionBackendERKNS2_20DeleteIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_15_0NS_9allocatorISG_EEFvvEEclEv_
  ,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17createObjectStoreERNS2_21IDBTransactionBackendERKNS2_26CreateObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_11_0NS_9allocatorISG_EEFvvEE7destroyEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_32_3NS_9allocatorISG_EEFvvEE7destroyEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_35_6NS_9allocatorISG_EEFvvEEclEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB13cursorAdvanceERNS2_16IDBCursorBackendERKNS2_22CursorAdvanceOperationENS_8functionIFvvEEEE4$_49_0NS_9allocatorISC_EESA_E18destroy_deallocateEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_21_4NS_9allocatorISG_EEFvvEE7destroyEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteRangeERNS2_21IDBTransactionBackendERKNS2_20DeleteRangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_40NS_9allocatorISG_EEFvvEED2Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_24_7NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB21changeDatabaseVersionERNS2_21IDBTransactionBackendERKNS2_18IDBDatabaseBackend22VersionChangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_47_0NS_9allocatorISH_EEFvvEED2Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_29_0NS_9allocatorISG_EEFvvEEclEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_7_1NS_9allocatorISR_EEFvvEEclEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB15openTransactionExRKN3WTF7HashSetIxNS4_7IntHashIyEENS4_10HashTraitsIxEEEENS2_9IndexedDB15TransactionModeENS_8functionIFvbEEEE3$_3_0NS_9allocatorISI_EEFvvEED2Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB10openCursorERNS2_21IDBTransactionBackendERKNS2_19OpenCursorOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_36NS_9allocatorISG_EEFvvEE7destroyEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_20_3NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB5countERNS2_21IDBTransactionBackendERKNS2_14CountOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_39_0NS_9allocatorISG_EEFvvEEclEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17commitTransactionExNS_8functionIFvbEEEE3$_4NS_9allocatorIS7_EEFvvEED0Ev_
  ,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB5countERNS2_21IDBTransactionBackendERKNS2_14CountOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_38NS_9allocatorISG_EEFvvEEclEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_19_2NS_9allocatorISG_EEFvvEED2Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_29_0NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17commitTransactionExNS_8functionIFvbEEEE3$_4NS_9allocatorIS7_EEFvvEED2Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11createIndexERNS2_21IDBTransactionBackendERKNS2_20CreateIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_13_0NS_9allocatorISG_EEFvvEE7destroyEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB10openCursorERNS2_21IDBTransactionBackendERKNS2_19OpenCursorOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_37_0NS_9allocatorISG_EEFvvEE7destroyEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteIndexERNS2_21IDBTransactionBackendERKNS2_20DeleteIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_14NS_9allocatorISG_EEFvvEEclEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_31_2NS_9allocatorISG_EEFvvEE7destroyEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB14deleteDatabaseERKN3WTF6StringENS_8functionIFvbEEEE3$_1NS_9allocatorISB_EES9_E7destroyEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteRangeERNS2_21IDBTransactionBackendERKNS2_20DeleteRangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_41_0NS_9allocatorISG_EEFvvEE7destroyEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_29_0NS_9allocatorISG_EEFvvEED0Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_5NS_9allocatorISR_EEFvvEED2Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB14deleteDatabaseERKN3WTF6StringENS_8functionIFvbEEEE3$_1NS_9allocatorISB_EES9_ED0Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB16clearObjectStoreERNS2_21IDBTransactionBackendERKNS2_25ClearObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_42NS_9allocatorISG_EEFvvEED2Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteRangeERNS2_21IDBTransactionBackendERKNS2_20DeleteRangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_40NS_9allocatorISG_EEFvvEE7destroyEv_
  ,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_17_0NS_9allocatorISG_EEFvvEED2Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB13cursorIterateERNS2_16IDBCursorBackendERKNS2_24CursorIterationOperationENS_8functionIFvvEEEE4$_50NS_9allocatorISC_EESA_ED0Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB16clearObjectStoreERNS2_21IDBTransactionBackendERKNS2_25ClearObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_42NS_9allocatorISG_EEFvvEED0Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB33getOrEstablishIDBDatabaseMetadataENS_8functionIFvRKNS2_19IDBDatabaseMetadataEbEEEE3$_0NS_9allocatorISA_EES8_ED2Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_23_6NS_9allocatorISG_EEFvvEE7destroyEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_19_2NS_9allocatorISG_EEFvvEEclEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB15openTransactionExRKN3WTF7HashSetIxNS4_7IntHashIyEENS4_10HashTraitsIxEEEENS2_9IndexedDB15TransactionModeENS_8functionIFvbEEEE3$_2NS_9allocatorISI_EEFvvEE7destroyEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11createIndexERNS2_21IDBTransactionBackendERKNS2_20CreateIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_13_0NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_29_0NS_9allocatorISG_EEFvvEED2Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB5countERNS2_21IDBTransactionBackendERKNS2_14CountOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_39_0NS_9allocatorISG_EEFvvEED2Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_27__10_NS_9allocatorISG_EEFvvEED0Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB33getOrEstablishIDBDatabaseMetadataENS_8functionIFvRKNS2_19IDBDatabaseMetadataEbEEEE3$_0NS_9allocatorISA_EES8_ED0Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_34_5NS_9allocatorISG_EEFvvEE7destroyEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_8_2NS_9allocatorISR_EEFvvEE18destroy_deallocateEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB13cursorAdvanceERNS2_16IDBCursorBackendERKNS2_22CursorAdvanceOperationENS_8functionIFvvEEEE4$_49_0NS_9allocatorISC_EESA_ED2Ev_
  ,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17commitTransactionExNS_8functionIFvbEEEE3$_4NS_9allocatorIS7_EEFvvEEclEv_,b4,__ZN7WebCore26IDBServerConnectionLevelDBD0Ev,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_31_2NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB21changeDatabaseVersionERNS2_21IDBTransactionBackendERKNS2_18IDBDatabaseBackend22VersionChangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_46NS_9allocatorISH_EEFvvEED0Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_9_3NS_9allocatorISR_EEFvvEE7destroyEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_7_1NS_9allocatorISR_EEFvvEED0Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_26_9NS_9allocatorISG_EEFvvEE7destroyEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB16clearObjectStoreERNS2_21IDBTransactionBackendERKNS2_25ClearObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_43_0NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_28NS_9allocatorISG_EEFvvEED0Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_33_4NS_9allocatorISG_EEFvvEED2Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB10openCursorERNS2_21IDBTransactionBackendERKNS2_19OpenCursorOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_37_0NS_9allocatorISG_EEFvvEEclEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_5NS_9allocatorISR_EEFvvEE18destroy_deallocateEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_22_5NS_9allocatorISG_EEFvvEED0Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_26_9NS_9allocatorISG_EEFvvEED2Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB21changeDatabaseVersionERNS2_21IDBTransactionBackendERKNS2_18IDBDatabaseBackend22VersionChangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_47_0NS_9allocatorISH_EEFvvEE7destroyEv_
  ,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB15openTransactionExRKN3WTF7HashSetIxNS4_7IntHashIyEENS4_10HashTraitsIxEEEENS2_9IndexedDB15TransactionModeENS_8functionIFvbEEEE3$_3_0NS_9allocatorISI_EEFvvEE18destroy_deallocateEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB23cursorPrefetchIterationERNS2_16IDBCursorBackendERKNS2_32CursorPrefetchIterationOperationENS_8functionIFvvEEEE4$_51NS_9allocatorISC_EESA_ED2Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_28NS_9allocatorISG_EEFvvEED2Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_6_0NS_9allocatorISR_EEFvvEED2Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteRangeERNS2_21IDBTransactionBackendERKNS2_20DeleteRangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_40NS_9allocatorISG_EEFvvEEclEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11createIndexERNS2_21IDBTransactionBackendERKNS2_20CreateIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_12NS_9allocatorISG_EEFvvEED0Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_8_2NS_9allocatorISR_EEFvvEEclEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB10openCursorERNS2_21IDBTransactionBackendERKNS2_19OpenCursorOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_37_0NS_9allocatorISG_EEFvvEED0Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB10openCursorERNS2_21IDBTransactionBackendERKNS2_19OpenCursorOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_37_0NS_9allocatorISG_EEFvvEED2Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_33_4NS_9allocatorISG_EEFvvEE7destroyEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17createObjectStoreERNS2_21IDBTransactionBackendERKNS2_26CreateObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_10NS_9allocatorISG_EEFvvEE7destroyEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_29_0NS_9allocatorISG_EEFvvEE7destroyEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB10openCursorERNS2_21IDBTransactionBackendERKNS2_19OpenCursorOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_36NS_9allocatorISG_EEFvvEEclEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17deleteObjectStoreERNS2_21IDBTransactionBackendERKNS2_26DeleteObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_44NS_9allocatorISG_EEFvvEEclEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11createIndexERNS2_21IDBTransactionBackendERKNS2_20CreateIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_12NS_9allocatorISG_EEFvvEED2Ev_
  ,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_33_4NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_23_6NS_9allocatorISG_EEFvvEEclEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteIndexERNS2_21IDBTransactionBackendERKNS2_20DeleteIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_14NS_9allocatorISG_EEFvvEED0Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_9_3NS_9allocatorISR_EEFvvEEclEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17createObjectStoreERNS2_21IDBTransactionBackendERKNS2_26CreateObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_11_0NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_5NS_9allocatorISR_EEFvvEED0Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_7_1NS_9allocatorISR_EEFvvEE7destroyEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB15openTransactionExRKN3WTF7HashSetIxNS4_7IntHashIyEENS4_10HashTraitsIxEEEENS2_9IndexedDB15TransactionModeENS_8functionIFvbEEEE3$_2NS_9allocatorISI_EEFvvEE18destroy_deallocateEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_16NS_9allocatorISG_EEFvvEE7destroyEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_32_3NS_9allocatorISG_EEFvvEED2Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB16clearObjectStoreERNS2_21IDBTransactionBackendERKNS2_25ClearObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_43_0NS_9allocatorISG_EEFvvEED2Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_26_9NS_9allocatorISG_EEFvvEED0Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_18_1NS_9allocatorISG_EEFvvEE7destroyEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17createObjectStoreERNS2_21IDBTransactionBackendERKNS2_26CreateObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_10NS_9allocatorISG_EEFvvEED0Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17createObjectStoreERNS2_21IDBTransactionBackendERKNS2_26CreateObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_11_0NS_9allocatorISG_EEFvvEED2Ev_
  ,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_30_1NS_9allocatorISG_EEFvvEED2Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_33_4NS_9allocatorISG_EEFvvEEclEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_16NS_9allocatorISG_EEFvvEED2Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_31_2NS_9allocatorISG_EEFvvEED2Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_17_0NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17deleteObjectStoreERNS2_21IDBTransactionBackendERKNS2_26DeleteObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_45_0NS_9allocatorISG_EEFvvEEclEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_31_2NS_9allocatorISG_EEFvvEEclEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17commitTransactionExNS_8functionIFvbEEEE3$_4NS_9allocatorIS7_EEFvvEE7destroyEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB14deleteDatabaseERKN3WTF6StringENS_8functionIFvbEEEE3$_1NS_9allocatorISB_EES9_ED2Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_25_8NS_9allocatorISG_EEFvvEED2Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB5countERNS2_21IDBTransactionBackendERKNS2_14CountOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_39_0NS_9allocatorISG_EEFvvEE7destroyEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_6_0NS_9allocatorISR_EEFvvEEclEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB13cursorAdvanceERNS2_16IDBCursorBackendERKNS2_22CursorAdvanceOperationENS_8functionIFvvEEEE4$_48NS_9allocatorISC_EESA_EclEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_28NS_9allocatorISG_EEFvvEEclEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_22_5NS_9allocatorISG_EEFvvEED2Ev_
  ,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17deleteObjectStoreERNS2_21IDBTransactionBackendERKNS2_26DeleteObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_45_0NS_9allocatorISG_EEFvvEED0Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteIndexERNS2_21IDBTransactionBackendERKNS2_20DeleteIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_15_0NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_16NS_9allocatorISG_EEFvvEED0Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_18_1NS_9allocatorISG_EEFvvEEclEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB16clearObjectStoreERNS2_21IDBTransactionBackendERKNS2_25ClearObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_43_0NS_9allocatorISG_EEFvvEEclEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_30_1NS_9allocatorISG_EEFvvEEclEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_35_6NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB13cursorAdvanceERNS2_16IDBCursorBackendERKNS2_22CursorAdvanceOperationENS_8functionIFvvEEEE4$_48NS_9allocatorISC_EESA_E7destroyEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_35_6NS_9allocatorISG_EEFvvEED2Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_22_5NS_9allocatorISG_EEFvvEEclEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_25_8NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17deleteObjectStoreERNS2_21IDBTransactionBackendERKNS2_26DeleteObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_45_0NS_9allocatorISG_EEFvvEE7destroyEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB15openTransactionExRKN3WTF7HashSetIxNS4_7IntHashIyEENS4_10HashTraitsIxEEEENS2_9IndexedDB15TransactionModeENS_8functionIFvbEEEE3$_2NS_9allocatorISI_EEFvvEEclEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_33_4NS_9allocatorISG_EEFvvEED0Ev_,b4,__ZN7WebCore26IDBServerConnectionLevelDBD2Ev
  ,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_25_8NS_9allocatorISG_EEFvvEE7destroyEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_9_3NS_9allocatorISR_EEFvvEE18destroy_deallocateEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11createIndexERNS2_21IDBTransactionBackendERKNS2_20CreateIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_12NS_9allocatorISG_EEFvvEEclEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_20_3NS_9allocatorISG_EEFvvEED0Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_8_2NS_9allocatorISR_EEFvvEE7destroyEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_18_1NS_9allocatorISG_EEFvvEED2Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_19_2NS_9allocatorISG_EEFvvEE7destroyEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB5countERNS2_21IDBTransactionBackendERKNS2_14CountOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_38NS_9allocatorISG_EEFvvEED2Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_26_9NS_9allocatorISG_EEFvvEEclEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17createObjectStoreERNS2_21IDBTransactionBackendERKNS2_26CreateObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_10NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB21changeDatabaseVersionERNS2_21IDBTransactionBackendERKNS2_18IDBDatabaseBackend22VersionChangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_47_0NS_9allocatorISH_EEFvvEE18destroy_deallocateEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_25_8NS_9allocatorISG_EEFvvEEclEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB16clearObjectStoreERNS2_21IDBTransactionBackendERKNS2_25ClearObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_43_0NS_9allocatorISG_EEFvvEE7destroyEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_20_3NS_9allocatorISG_EEFvvEED2Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB13cursorAdvanceERNS2_16IDBCursorBackendERKNS2_22CursorAdvanceOperationENS_8functionIFvvEEEE4$_49_0NS_9allocatorISC_EESA_E7destroyEv_
  ,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB21changeDatabaseVersionERNS2_21IDBTransactionBackendERKNS2_18IDBDatabaseBackend22VersionChangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_46NS_9allocatorISH_EEFvvEE7destroyEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB5countERNS2_21IDBTransactionBackendERKNS2_14CountOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_38NS_9allocatorISG_EEFvvEED0Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_19_2NS_9allocatorISG_EEFvvEED0Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB16clearObjectStoreERNS2_21IDBTransactionBackendERKNS2_25ClearObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_42NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB15openTransactionExRKN3WTF7HashSetIxNS4_7IntHashIyEENS4_10HashTraitsIxEEEENS2_9IndexedDB15TransactionModeENS_8functionIFvbEEEE3$_3_0NS_9allocatorISI_EEFvvEED0Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_23_6NS_9allocatorISG_EEFvvEED0Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_30_1NS_9allocatorISG_EEFvvEED0Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_24_7NS_9allocatorISG_EEFvvEED0Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_25_8NS_9allocatorISG_EEFvvEED0Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteIndexERNS2_21IDBTransactionBackendERKNS2_20DeleteIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_14NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_18_1NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17deleteObjectStoreERNS2_21IDBTransactionBackendERKNS2_26DeleteObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_45_0NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_20_3NS_9allocatorISG_EEFvvEEclEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB5countERNS2_21IDBTransactionBackendERKNS2_14CountOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_39_0NS_9allocatorISG_EEFvvEED0Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_30_1NS_9allocatorISG_EEFvvEE7destroyEv_
  ,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_6_0NS_9allocatorISR_EEFvvEE7destroyEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB5countERNS2_21IDBTransactionBackendERKNS2_14CountOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_38NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_9_3NS_9allocatorISR_EEFvvEED0Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17createObjectStoreERNS2_21IDBTransactionBackendERKNS2_26CreateObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_10NS_9allocatorISG_EEFvvEED2Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_24_7NS_9allocatorISG_EEFvvEED2Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteIndexERNS2_21IDBTransactionBackendERKNS2_20DeleteIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_15_0NS_9allocatorISG_EEFvvEE7destroyEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB21changeDatabaseVersionERNS2_21IDBTransactionBackendERKNS2_18IDBDatabaseBackend22VersionChangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_46NS_9allocatorISH_EEFvvEEclEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB21changeDatabaseVersionERNS2_21IDBTransactionBackendERKNS2_18IDBDatabaseBackend22VersionChangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_46NS_9allocatorISH_EEFvvEED2Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_32_3NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17deleteObjectStoreERNS2_21IDBTransactionBackendERKNS2_26DeleteObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_44NS_9allocatorISG_EEFvvEE7destroyEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB13cursorIterateERNS2_16IDBCursorBackendERKNS2_24CursorIterationOperationENS_8functionIFvvEEEE4$_50NS_9allocatorISC_EESA_ED2Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_8_2NS_9allocatorISR_EEFvvEED0Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_35_6NS_9allocatorISG_EEFvvEE7destroyEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB13cursorAdvanceERNS2_16IDBCursorBackendERKNS2_22CursorAdvanceOperationENS_8functionIFvvEEEE4$_49_0NS_9allocatorISC_EESA_ED0Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB14deleteDatabaseERKN3WTF6StringENS_8functionIFvbEEEE3$_1NS_9allocatorISB_EES9_E18destroy_deallocateEv_
  ,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11createIndexERNS2_21IDBTransactionBackendERKNS2_20CreateIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_12NS_9allocatorISG_EEFvvEE7destroyEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_8_2NS_9allocatorISR_EEFvvEED2Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteRangeERNS2_21IDBTransactionBackendERKNS2_20DeleteRangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_41_0NS_9allocatorISG_EEFvvEED0Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_17_0NS_9allocatorISG_EEFvvEED0Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteIndexERNS2_21IDBTransactionBackendERKNS2_20DeleteIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_15_0NS_9allocatorISG_EEFvvEED2Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteIndexERNS2_21IDBTransactionBackendERKNS2_20DeleteIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_15_0NS_9allocatorISG_EEFvvEED0Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteRangeERNS2_21IDBTransactionBackendERKNS2_20DeleteRangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_41_0NS_9allocatorISG_EEFvvEEclEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_28NS_9allocatorISG_EEFvvEE7destroyEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_16NS_9allocatorISG_EEFvvEEclEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_23_6NS_9allocatorISG_EEFvvEED2Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11createIndexERNS2_21IDBTransactionBackendERKNS2_20CreateIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_12NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB10openCursorERNS2_21IDBTransactionBackendERKNS2_19OpenCursorOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_36NS_9allocatorISG_EEFvvEED2Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_17_0NS_9allocatorISG_EEFvvEEclEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteRangeERNS2_21IDBTransactionBackendERKNS2_20DeleteRangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_41_0NS_9allocatorISG_EEFvvEED2Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_18_1NS_9allocatorISG_EEFvvEED0Ev_
  ,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB10openCursorERNS2_21IDBTransactionBackendERKNS2_19OpenCursorOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_36NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_17_0NS_9allocatorISG_EEFvvEE7destroyEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_27__10_NS_9allocatorISG_EEFvvEEclEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11createIndexERNS2_21IDBTransactionBackendERKNS2_20CreateIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_13_0NS_9allocatorISG_EEFvvEEclEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB5countERNS2_21IDBTransactionBackendERKNS2_14CountOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_39_0NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB10openCursorERNS2_21IDBTransactionBackendERKNS2_19OpenCursorOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_36NS_9allocatorISG_EEFvvEED0Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_27__10_NS_9allocatorISG_EEFvvEED2Ev_,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4
  ,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4
  ,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4
  ,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4
  ,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4
  ,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4
  ,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4
  ,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4
  ,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4
  ,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4
  ,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4
  ,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4
  ,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4
  ,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4
  ,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4
  ,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4
  ,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4
  ,b4,b4,b4,b4,b4];
  var FUNCTION_TABLE_vii = [b5,b5,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_27__10_NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_,b5,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_28NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_,b5,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_6_0NS_9allocatorISR_EEFvvEE7__cloneEPNS0_6__baseISU_EE_,b5,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB23cursorPrefetchIterationERNS2_16IDBCursorBackendERKNS2_32CursorPrefetchIterationOperationENS_8functionIFvvEEEE4$_51NS_9allocatorISC_EESA_E7__cloneEPNS0_6__baseISA_EE_,b5,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB5countERNS2_21IDBTransactionBackendERKNS2_14CountOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_38NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_,b5,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB5countERNS2_21IDBTransactionBackendERKNS2_14CountOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_39_0NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_,b5,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB21changeDatabaseVersionERNS2_21IDBTransactionBackendERKNS2_18IDBDatabaseBackend22VersionChangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_46NS_9allocatorISH_EEFvvEE7__cloneEPNS0_6__baseISK_EE_,b5,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB33getOrEstablishIDBDatabaseMetadataENS_8functionIFvRKNS2_19IDBDatabaseMetadataEbEEEE3$_0NS_9allocatorISA_EES8_E7__cloneEPNS0_6__baseIS8_EE_,b5,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_19_2NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_,b5,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB14deleteDatabaseERKN3WTF6StringENS_8functionIFvbEEEE3$_1NS_9allocatorISB_EES9_EclEOb_,b5,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17deleteObjectStoreERNS2_21IDBTransactionBackendERKNS2_26DeleteObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_45_0NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_,b5,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_16NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_,b5,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17createObjectStoreERNS2_21IDBTransactionBackendERKNS2_26CreateObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_10NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_,b5,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteRangeERNS2_21IDBTransactionBackendERKNS2_20DeleteRangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_40NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_
  ,b5,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17commitTransactionExNS_8functionIFvbEEEE3$_4NS_9allocatorIS7_EEFvvEE7__cloneEPNS0_6__baseISA_EE_,b5,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteRangeERNS2_21IDBTransactionBackendERKNS2_20DeleteRangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_41_0NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_,b5,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_26_9NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_,b5,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_9_3NS_9allocatorISR_EEFvvEE7__cloneEPNS0_6__baseISU_EE_,b5,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_33_4NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_,b5,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_21_4NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_,b5,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_18_1NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_,b5,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_24_7NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_,b5,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB15openTransactionExRKN3WTF7HashSetIxNS4_7IntHashIyEENS4_10HashTraitsIxEEEENS2_9IndexedDB15TransactionModeENS_8functionIFvbEEEE3$_3_0NS_9allocatorISI_EEFvvEE7__cloneEPNS0_6__baseISL_EE_,b5,__ZN7WebCore26IDBServerConnectionLevelDB33getOrEstablishIDBDatabaseMetadataENSt3__18functionIFvRKNS_19IDBDatabaseMetadataEbEEE,b5,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_17_0NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_,b5,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB14deleteDatabaseERKN3WTF6StringENS_8functionIFvbEEEE3$_1NS_9allocatorISB_EES9_E7__cloneEPNS0_6__baseIS9_EE_,b5,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB16clearObjectStoreERNS2_21IDBTransactionBackendERKNS2_25ClearObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_43_0NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_,b5,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_23_6NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_,b5,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_35_6NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_
  ,b5,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_29_0NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_,b5,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17createObjectStoreERNS2_21IDBTransactionBackendERKNS2_26CreateObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_11_0NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_,b5,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_30_1NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_,b5,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_22_5NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_,b5,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_5NS_9allocatorISR_EEFvvEE7__cloneEPNS0_6__baseISU_EE_,b5,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17deleteObjectStoreERNS2_21IDBTransactionBackendERKNS2_26DeleteObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_44NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_,b5,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB13cursorAdvanceERNS2_16IDBCursorBackendERKNS2_22CursorAdvanceOperationENS_8functionIFvvEEEE4$_48NS_9allocatorISC_EESA_E7__cloneEPNS0_6__baseISA_EE_,b5,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB10openCursorERNS2_21IDBTransactionBackendERKNS2_19OpenCursorOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_36NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_,b5,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_25_8NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_,b5,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB13cursorAdvanceERNS2_16IDBCursorBackendERKNS2_22CursorAdvanceOperationENS_8functionIFvvEEEE4$_49_0NS_9allocatorISC_EESA_E7__cloneEPNS0_6__baseISA_EE_,b5,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_8_2NS_9allocatorISR_EEFvvEE7__cloneEPNS0_6__baseISU_EE_,b5,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteIndexERNS2_21IDBTransactionBackendERKNS2_20DeleteIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_15_0NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_,b5,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteIndexERNS2_21IDBTransactionBackendERKNS2_20DeleteIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_14NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_,b5,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_7_1NS_9allocatorISR_EEFvvEE7__cloneEPNS0_6__baseISU_EE_,b5,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11createIndexERNS2_21IDBTransactionBackendERKNS2_20CreateIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_12NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_
  ,b5,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_34_5NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_,b5,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11createIndexERNS2_21IDBTransactionBackendERKNS2_20CreateIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_13_0NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_,b5,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB13cursorIterateERNS2_16IDBCursorBackendERKNS2_24CursorIterationOperationENS_8functionIFvvEEEE4$_50NS_9allocatorISC_EESA_E7__cloneEPNS0_6__baseISA_EE_,b5,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_32_3NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_,b5,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_31_2NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_,b5,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB10openCursorERNS2_21IDBTransactionBackendERKNS2_19OpenCursorOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_37_0NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_,b5,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_20_3NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_,b5,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB16clearObjectStoreERNS2_21IDBTransactionBackendERKNS2_25ClearObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_42NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_,b5,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB21changeDatabaseVersionERNS2_21IDBTransactionBackendERKNS2_18IDBDatabaseBackend22VersionChangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_47_0NS_9allocatorISH_EEFvvEE7__cloneEPNS0_6__baseISK_EE_,b5,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB15openTransactionExRKN3WTF7HashSetIxNS4_7IntHashIyEENS4_10HashTraitsIxEEEENS2_9IndexedDB15TransactionModeENS_8functionIFvbEEEE3$_2NS_9allocatorISI_EEFvvEE7__cloneEPNS0_6__baseISL_EE_,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5
  ,b5,b5,b5,b5,b5,b5,b5,b5,b5];
  var FUNCTION_TABLE_viiiiiiiiiiii = [b6,b6,__ZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS_22IDBObjectStoreMetadataERNS_6IDBKeyERKN3WTF6VectorIxLj0ENS6_15CrashOnOverflowEEERKNS7_INS7_INS6_6RefPtrIS4_EELj0ES8_EELj0ES8_EENSt3__18functionIFvNS6_10PassRefPtrINS_16IDBDatabaseErrorEEEEEE,b6];
  var FUNCTION_TABLE_ii = [b7,b7,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB21changeDatabaseVersionERNS2_21IDBTransactionBackendERKNS2_18IDBDatabaseBackend22VersionChangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_46NS_9allocatorISH_EEFvvEE7__cloneEv_,b7,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB13cursorIterateERNS2_16IDBCursorBackendERKNS2_24CursorIterationOperationENS_8functionIFvvEEEE4$_50NS_9allocatorISC_EESA_E7__cloneEv_,b7,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_19_2NS_9allocatorISG_EEFvvEE7__cloneEv_,b7,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB5countERNS2_21IDBTransactionBackendERKNS2_14CountOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_38NS_9allocatorISG_EEFvvEE7__cloneEv_,b7,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_21_4NS_9allocatorISG_EEFvvEE7__cloneEv_,b7,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteIndexERNS2_21IDBTransactionBackendERKNS2_20DeleteIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_15_0NS_9allocatorISG_EEFvvEE7__cloneEv_,b7,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_29_0NS_9allocatorISG_EEFvvEE7__cloneEv_,b7,__ZN7WebCore26IDBServerConnectionLevelDB8isClosedEv,b7,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_22_5NS_9allocatorISG_EEFvvEE7__cloneEv_,b7,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_23_6NS_9allocatorISG_EEFvvEE7__cloneEv_,b7,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17deleteObjectStoreERNS2_21IDBTransactionBackendERKNS2_26DeleteObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_45_0NS_9allocatorISG_EEFvvEE7__cloneEv_,b7,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_25_8NS_9allocatorISG_EEFvvEE7__cloneEv_,b7,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_28NS_9allocatorISG_EEFvvEE7__cloneEv_,b7,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_26_9NS_9allocatorISG_EEFvvEE7__cloneEv_
  ,b7,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_9_3NS_9allocatorISR_EEFvvEE7__cloneEv_,b7,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17createObjectStoreERNS2_21IDBTransactionBackendERKNS2_26CreateObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_11_0NS_9allocatorISG_EEFvvEE7__cloneEv_,b7,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_20_3NS_9allocatorISG_EEFvvEE7__cloneEv_,b7,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_31_2NS_9allocatorISG_EEFvvEE7__cloneEv_,b7,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_35_6NS_9allocatorISG_EEFvvEE7__cloneEv_,b7,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_27__10_NS_9allocatorISG_EEFvvEE7__cloneEv_,b7,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteRangeERNS2_21IDBTransactionBackendERKNS2_20DeleteRangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_41_0NS_9allocatorISG_EEFvvEE7__cloneEv_,b7,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_18_1NS_9allocatorISG_EEFvvEE7__cloneEv_,b7,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB16clearObjectStoreERNS2_21IDBTransactionBackendERKNS2_25ClearObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_43_0NS_9allocatorISG_EEFvvEE7__cloneEv_,b7,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB33getOrEstablishIDBDatabaseMetadataENS_8functionIFvRKNS2_19IDBDatabaseMetadataEbEEEE3$_0NS_9allocatorISA_EES8_E7__cloneEv_,b7,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB10openCursorERNS2_21IDBTransactionBackendERKNS2_19OpenCursorOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_37_0NS_9allocatorISG_EEFvvEE7__cloneEv_,b7,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB15openTransactionExRKN3WTF7HashSetIxNS4_7IntHashIyEENS4_10HashTraitsIxEEEENS2_9IndexedDB15TransactionModeENS_8functionIFvbEEEE3$_3_0NS_9allocatorISI_EEFvvEE7__cloneEv_,b7,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_8_2NS_9allocatorISR_EEFvvEE7__cloneEv_,b7,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB15openTransactionExRKN3WTF7HashSetIxNS4_7IntHashIyEENS4_10HashTraitsIxEEEENS2_9IndexedDB15TransactionModeENS_8functionIFvbEEEE3$_2NS_9allocatorISI_EEFvvEE7__cloneEv_,b7,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB16clearObjectStoreERNS2_21IDBTransactionBackendERKNS2_25ClearObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_42NS_9allocatorISG_EEFvvEE7__cloneEv_
  ,b7,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB13cursorAdvanceERNS2_16IDBCursorBackendERKNS2_22CursorAdvanceOperationENS_8functionIFvvEEEE4$_49_0NS_9allocatorISC_EESA_E7__cloneEv_,b7,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_6_0NS_9allocatorISR_EEFvvEE7__cloneEv_,b7,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB10openCursorERNS2_21IDBTransactionBackendERKNS2_19OpenCursorOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_36NS_9allocatorISG_EEFvvEE7__cloneEv_,b7,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteIndexERNS2_21IDBTransactionBackendERKNS2_20DeleteIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_14NS_9allocatorISG_EEFvvEE7__cloneEv_,b7,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_7_1NS_9allocatorISR_EEFvvEE7__cloneEv_,b7,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB23cursorPrefetchIterationERNS2_16IDBCursorBackendERKNS2_32CursorPrefetchIterationOperationENS_8functionIFvvEEEE4$_51NS_9allocatorISC_EESA_E7__cloneEv_,b7,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_33_4NS_9allocatorISG_EEFvvEE7__cloneEv_,b7,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_34_5NS_9allocatorISG_EEFvvEE7__cloneEv_,b7,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_30_1NS_9allocatorISG_EEFvvEE7__cloneEv_,b7,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17commitTransactionExNS_8functionIFvbEEEE3$_4NS_9allocatorIS7_EEFvvEE7__cloneEv_,b7,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_24_7NS_9allocatorISG_EEFvvEE7__cloneEv_,b7,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_16NS_9allocatorISG_EEFvvEE7__cloneEv_,b7,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB13cursorAdvanceERNS2_16IDBCursorBackendERKNS2_22CursorAdvanceOperationENS_8functionIFvvEEEE4$_48NS_9allocatorISC_EESA_E7__cloneEv_,b7,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_32_3NS_9allocatorISG_EEFvvEE7__cloneEv_,b7,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_5NS_9allocatorISR_EEFvvEE7__cloneEv_
  ,b7,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB14deleteDatabaseERKN3WTF6StringENS_8functionIFvbEEEE3$_1NS_9allocatorISB_EES9_E7__cloneEv_,b7,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_17_0NS_9allocatorISG_EEFvvEE7__cloneEv_,b7,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteRangeERNS2_21IDBTransactionBackendERKNS2_20DeleteRangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_40NS_9allocatorISG_EEFvvEE7__cloneEv_,b7,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB5countERNS2_21IDBTransactionBackendERKNS2_14CountOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_39_0NS_9allocatorISG_EEFvvEE7__cloneEv_,b7,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11createIndexERNS2_21IDBTransactionBackendERKNS2_20CreateIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_12NS_9allocatorISG_EEFvvEE7__cloneEv_,b7,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17createObjectStoreERNS2_21IDBTransactionBackendERKNS2_26CreateObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_10NS_9allocatorISG_EEFvvEE7__cloneEv_,b7,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB21changeDatabaseVersionERNS2_21IDBTransactionBackendERKNS2_18IDBDatabaseBackend22VersionChangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_47_0NS_9allocatorISH_EEFvvEE7__cloneEv_,b7,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17deleteObjectStoreERNS2_21IDBTransactionBackendERKNS2_26DeleteObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_44NS_9allocatorISG_EEFvvEE7__cloneEv_,b7,___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11createIndexERNS2_21IDBTransactionBackendERKNS2_20CreateIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_13_0NS_9allocatorISG_EEFvvEE7__cloneEv_,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7
  ,b7,b7,b7,b7,b7,b7,b7,b7,b7];
  var FUNCTION_TABLE_iiii = [b8,b8];
  var FUNCTION_TABLE_viiiiiiiiiii = [b9,b9];
  var FUNCTION_TABLE_v = [b10,b10];
  var FUNCTION_TABLE_viiii = [b11,b11,__ZN7WebCore26IDBServerConnectionLevelDB13cursorIterateERNS_16IDBCursorBackendERKNS_24CursorIterationOperationENSt3__18functionIFvvEEE,b11,__ZN7WebCore26IDBServerConnectionLevelDB11deleteRangeERNS_21IDBTransactionBackendERKNS_20DeleteRangeOperationENSt3__18functionIFvN3WTF10PassRefPtrINS_16IDBDatabaseErrorEEEEEE,b11,__ZN7WebCore26IDBServerConnectionLevelDB16clearObjectStoreERNS_21IDBTransactionBackendERKNS_25ClearObjectStoreOperationENSt3__18functionIFvN3WTF10PassRefPtrINS_16IDBDatabaseErrorEEEEEE,b11,__ZN7WebCore26IDBServerConnectionLevelDB17commitTransactionExNSt3__18functionIFvbEEE,b11,__ZN7WebCore26IDBServerConnectionLevelDB23cursorPrefetchIterationERNS_16IDBCursorBackendERKNS_32CursorPrefetchIterationOperationENSt3__18functionIFvvEEE,b11,__ZN7WebCore26IDBServerConnectionLevelDB21changeDatabaseVersionERNS_21IDBTransactionBackendERKNS_18IDBDatabaseBackend22VersionChangeOperationENSt3__18functionIFvN3WTF10PassRefPtrINS_16IDBDatabaseErrorEEEEEE,b11,__ZN7WebCore26IDBServerConnectionLevelDB3getERNS_21IDBTransactionBackendERKNS_12GetOperationENSt3__18functionIFvN3WTF10PassRefPtrINS_16IDBDatabaseErrorEEEEEE,b11,__ZN7WebCore26IDBServerConnectionLevelDB13cursorAdvanceERNS_16IDBCursorBackendERKNS_22CursorAdvanceOperationENSt3__18functionIFvvEEE,b11,__ZN7WebCore26IDBServerConnectionLevelDB16resetTransactionExNSt3__18functionIFvvEEE,b11,__ZN7WebCore26IDBServerConnectionLevelDB17createObjectStoreERNS_21IDBTransactionBackendERKNS_26CreateObjectStoreOperationENSt3__18functionIFvN3WTF10PassRefPtrINS_16IDBDatabaseErrorEEEEEE,b11,__ZN7WebCore26IDBServerConnectionLevelDB10openCursorERNS_21IDBTransactionBackendERKNS_19OpenCursorOperationENSt3__18functionIFvN3WTF10PassRefPtrINS_16IDBDatabaseErrorEEEEEE,b11,__ZN7WebCore26IDBServerConnectionLevelDB19rollbackTransactionExNSt3__18functionIFvvEEE,b11,__ZN7WebCore26IDBServerConnectionLevelDB11createIndexERNS_21IDBTransactionBackendERKNS_20CreateIndexOperationENSt3__18functionIFvN3WTF10PassRefPtrINS_16IDBDatabaseErrorEEEEEE,b11,__ZN7WebCore26IDBServerConnectionLevelDB5countERNS_21IDBTransactionBackendERKNS_14CountOperationENSt3__18functionIFvN3WTF10PassRefPtrINS_16IDBDatabaseErrorEEEEEE
  ,b11,__ZN7WebCore26IDBServerConnectionLevelDB3putERNS_21IDBTransactionBackendERKNS_12PutOperationENSt3__18functionIFvN3WTF10PassRefPtrINS_16IDBDatabaseErrorEEEEEE,b11,__ZN7WebCore26IDBServerConnectionLevelDB16beginTransactionExNSt3__18functionIFvvEEE,b11,__ZN7WebCore26IDBServerConnectionLevelDB17deleteObjectStoreERNS_21IDBTransactionBackendERKNS_26DeleteObjectStoreOperationENSt3__18functionIFvN3WTF10PassRefPtrINS_16IDBDatabaseErrorEEEEEE,b11,__ZN7WebCore26IDBServerConnectionLevelDB11deleteIndexERNS_21IDBTransactionBackendERKNS_20DeleteIndexOperationENSt3__18functionIFvN3WTF10PassRefPtrINS_16IDBDatabaseErrorEEEEEE,b11,b11,b11,b11,b11,b11,b11,b11,b11,b11,b11,b11,b11,b11,b11,b11,b11,b11,b11,b11,b11,b11
  ,b11,b11,b11,b11,b11];
  var FUNCTION_TABLE_iii = [b12,b12];
  var FUNCTION_TABLE_viii = [b13,b13,___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB33getOrEstablishIDBDatabaseMetadataENS_8functionIFvRKNS2_19IDBDatabaseMetadataEbEEEE3$_0NS_9allocatorISA_EES8_EclES7_Ob_,b13,__ZN7WebCore26IDBServerConnectionLevelDB14deleteDatabaseERKN3WTF6StringENSt3__18functionIFvbEEE,b13,__ZN7WebCore26IDBServerConnectionLevelDB19cursorPrefetchResetERNS_16IDBCursorBackendEi,b13,__ZN7WebCore26IDBServerConnectionLevelDBC2ERKN3WTF6StringEPNS_22IDBBackingStoreLevelDBE,b13,b13,b13,b13,b13,b13,b13];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiiiiiiiiiii: dynCall_viiiiiiiiiiiii, dynCall_viiiiii: dynCall_viiiiii, dynCall_viiiiiii: dynCall_viiiiiii, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_viiiiiiiiiiii: dynCall_viiiiiiiiiiii, dynCall_ii: dynCall_ii, dynCall_iiii: dynCall_iiii, dynCall_viiiiiiiiiii: dynCall_viiiiiiiiiii, dynCall_v: dynCall_v, dynCall_viiii: dynCall_viiii, dynCall_iii: dynCall_iii, dynCall_viii: dynCall_viii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiiiiiiiiiii": invoke_viiiiiiiiiiiii, "invoke_viiiiii": invoke_viiiiii, "invoke_viiiiiii": invoke_viiiiiii, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_viiiiiiiiiiii": invoke_viiiiiiiiiiii, "invoke_ii": invoke_ii, "invoke_iiii": invoke_iiii, "invoke_viiiiiiiiiii": invoke_viiiiiiiiiii, "invoke_v": invoke_v, "invoke_viiii": invoke_viiii, "invoke_iii": invoke_iii, "invoke_viii": invoke_viii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "cttz_i8": cttz_i8, "ctlz_i8": ctlz_i8, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiiiiiiiiiii = Module["dynCall_viiiiiiiiiiiii"] = asm["dynCall_viiiiiiiiiiiii"];
var dynCall_viiiiii = Module["dynCall_viiiiii"] = asm["dynCall_viiiiii"];
var dynCall_viiiiiii = Module["dynCall_viiiiiii"] = asm["dynCall_viiiiiii"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_viiiiiiiiiiii = Module["dynCall_viiiiiiiiiiii"] = asm["dynCall_viiiiiiiiiiii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
var dynCall_viiiiiiiiiii = Module["dynCall_viiiiiiiiiii"] = asm["dynCall_viiiiiiiiiii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_viiii = Module["dynCall_viiii"] = asm["dynCall_viiii"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
// TODO: strip out parts of this we do not need
//======= begin closure i64 code =======
// Copyright 2009 The Closure Library Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
/**
 * @fileoverview Defines a Long class for representing a 64-bit two's-complement
 * integer value, which faithfully simulates the behavior of a Java "long". This
 * implementation is derived from LongLib in GWT.
 *
 */
var i64Math = (function() { // Emscripten wrapper
  var goog = { math: {} };
  /**
   * Constructs a 64-bit two's-complement integer, given its low and high 32-bit
   * values as *signed* integers.  See the from* functions below for more
   * convenient ways of constructing Longs.
   *
   * The internal representation of a long is the two given signed, 32-bit values.
   * We use 32-bit pieces because these are the size of integers on which
   * Javascript performs bit-operations.  For operations like addition and
   * multiplication, we split each number into 16-bit pieces, which can easily be
   * multiplied within Javascript's floating-point representation without overflow
   * or change in sign.
   *
   * In the algorithms below, we frequently reduce the negative case to the
   * positive case by negating the input(s) and then post-processing the result.
   * Note that we must ALWAYS check specially whether those values are MIN_VALUE
   * (-2^63) because -MIN_VALUE == MIN_VALUE (since 2^63 cannot be represented as
   * a positive number, it overflows back into a negative).  Not handling this
   * case would often result in infinite recursion.
   *
   * @param {number} low  The low (signed) 32 bits of the long.
   * @param {number} high  The high (signed) 32 bits of the long.
   * @constructor
   */
  goog.math.Long = function(low, high) {
    /**
     * @type {number}
     * @private
     */
    this.low_ = low | 0;  // force into 32 signed bits.
    /**
     * @type {number}
     * @private
     */
    this.high_ = high | 0;  // force into 32 signed bits.
  };
  // NOTE: Common constant values ZERO, ONE, NEG_ONE, etc. are defined below the
  // from* methods on which they depend.
  /**
   * A cache of the Long representations of small integer values.
   * @type {!Object}
   * @private
   */
  goog.math.Long.IntCache_ = {};
  /**
   * Returns a Long representing the given (32-bit) integer value.
   * @param {number} value The 32-bit integer in question.
   * @return {!goog.math.Long} The corresponding Long value.
   */
  goog.math.Long.fromInt = function(value) {
    if (-128 <= value && value < 128) {
      var cachedObj = goog.math.Long.IntCache_[value];
      if (cachedObj) {
        return cachedObj;
      }
    }
    var obj = new goog.math.Long(value | 0, value < 0 ? -1 : 0);
    if (-128 <= value && value < 128) {
      goog.math.Long.IntCache_[value] = obj;
    }
    return obj;
  };
  /**
   * Returns a Long representing the given value, provided that it is a finite
   * number.  Otherwise, zero is returned.
   * @param {number} value The number in question.
   * @return {!goog.math.Long} The corresponding Long value.
   */
  goog.math.Long.fromNumber = function(value) {
    if (isNaN(value) || !isFinite(value)) {
      return goog.math.Long.ZERO;
    } else if (value <= -goog.math.Long.TWO_PWR_63_DBL_) {
      return goog.math.Long.MIN_VALUE;
    } else if (value + 1 >= goog.math.Long.TWO_PWR_63_DBL_) {
      return goog.math.Long.MAX_VALUE;
    } else if (value < 0) {
      return goog.math.Long.fromNumber(-value).negate();
    } else {
      return new goog.math.Long(
          (value % goog.math.Long.TWO_PWR_32_DBL_) | 0,
          (value / goog.math.Long.TWO_PWR_32_DBL_) | 0);
    }
  };
  /**
   * Returns a Long representing the 64-bit integer that comes by concatenating
   * the given high and low bits.  Each is assumed to use 32 bits.
   * @param {number} lowBits The low 32-bits.
   * @param {number} highBits The high 32-bits.
   * @return {!goog.math.Long} The corresponding Long value.
   */
  goog.math.Long.fromBits = function(lowBits, highBits) {
    return new goog.math.Long(lowBits, highBits);
  };
  /**
   * Returns a Long representation of the given string, written using the given
   * radix.
   * @param {string} str The textual representation of the Long.
   * @param {number=} opt_radix The radix in which the text is written.
   * @return {!goog.math.Long} The corresponding Long value.
   */
  goog.math.Long.fromString = function(str, opt_radix) {
    if (str.length == 0) {
      throw Error('number format error: empty string');
    }
    var radix = opt_radix || 10;
    if (radix < 2 || 36 < radix) {
      throw Error('radix out of range: ' + radix);
    }
    if (str.charAt(0) == '-') {
      return goog.math.Long.fromString(str.substring(1), radix).negate();
    } else if (str.indexOf('-') >= 0) {
      throw Error('number format error: interior "-" character: ' + str);
    }
    // Do several (8) digits each time through the loop, so as to
    // minimize the calls to the very expensive emulated div.
    var radixToPower = goog.math.Long.fromNumber(Math.pow(radix, 8));
    var result = goog.math.Long.ZERO;
    for (var i = 0; i < str.length; i += 8) {
      var size = Math.min(8, str.length - i);
      var value = parseInt(str.substring(i, i + size), radix);
      if (size < 8) {
        var power = goog.math.Long.fromNumber(Math.pow(radix, size));
        result = result.multiply(power).add(goog.math.Long.fromNumber(value));
      } else {
        result = result.multiply(radixToPower);
        result = result.add(goog.math.Long.fromNumber(value));
      }
    }
    return result;
  };
  // NOTE: the compiler should inline these constant values below and then remove
  // these variables, so there should be no runtime penalty for these.
  /**
   * Number used repeated below in calculations.  This must appear before the
   * first call to any from* function below.
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_16_DBL_ = 1 << 16;
  /**
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_24_DBL_ = 1 << 24;
  /**
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_32_DBL_ =
      goog.math.Long.TWO_PWR_16_DBL_ * goog.math.Long.TWO_PWR_16_DBL_;
  /**
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_31_DBL_ =
      goog.math.Long.TWO_PWR_32_DBL_ / 2;
  /**
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_48_DBL_ =
      goog.math.Long.TWO_PWR_32_DBL_ * goog.math.Long.TWO_PWR_16_DBL_;
  /**
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_64_DBL_ =
      goog.math.Long.TWO_PWR_32_DBL_ * goog.math.Long.TWO_PWR_32_DBL_;
  /**
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_63_DBL_ =
      goog.math.Long.TWO_PWR_64_DBL_ / 2;
  /** @type {!goog.math.Long} */
  goog.math.Long.ZERO = goog.math.Long.fromInt(0);
  /** @type {!goog.math.Long} */
  goog.math.Long.ONE = goog.math.Long.fromInt(1);
  /** @type {!goog.math.Long} */
  goog.math.Long.NEG_ONE = goog.math.Long.fromInt(-1);
  /** @type {!goog.math.Long} */
  goog.math.Long.MAX_VALUE =
      goog.math.Long.fromBits(0xFFFFFFFF | 0, 0x7FFFFFFF | 0);
  /** @type {!goog.math.Long} */
  goog.math.Long.MIN_VALUE = goog.math.Long.fromBits(0, 0x80000000 | 0);
  /**
   * @type {!goog.math.Long}
   * @private
   */
  goog.math.Long.TWO_PWR_24_ = goog.math.Long.fromInt(1 << 24);
  /** @return {number} The value, assuming it is a 32-bit integer. */
  goog.math.Long.prototype.toInt = function() {
    return this.low_;
  };
  /** @return {number} The closest floating-point representation to this value. */
  goog.math.Long.prototype.toNumber = function() {
    return this.high_ * goog.math.Long.TWO_PWR_32_DBL_ +
           this.getLowBitsUnsigned();
  };
  /**
   * @param {number=} opt_radix The radix in which the text should be written.
   * @return {string} The textual representation of this value.
   */
  goog.math.Long.prototype.toString = function(opt_radix) {
    var radix = opt_radix || 10;
    if (radix < 2 || 36 < radix) {
      throw Error('radix out of range: ' + radix);
    }
    if (this.isZero()) {
      return '0';
    }
    if (this.isNegative()) {
      if (this.equals(goog.math.Long.MIN_VALUE)) {
        // We need to change the Long value before it can be negated, so we remove
        // the bottom-most digit in this base and then recurse to do the rest.
        var radixLong = goog.math.Long.fromNumber(radix);
        var div = this.div(radixLong);
        var rem = div.multiply(radixLong).subtract(this);
        return div.toString(radix) + rem.toInt().toString(radix);
      } else {
        return '-' + this.negate().toString(radix);
      }
    }
    // Do several (6) digits each time through the loop, so as to
    // minimize the calls to the very expensive emulated div.
    var radixToPower = goog.math.Long.fromNumber(Math.pow(radix, 6));
    var rem = this;
    var result = '';
    while (true) {
      var remDiv = rem.div(radixToPower);
      var intval = rem.subtract(remDiv.multiply(radixToPower)).toInt();
      var digits = intval.toString(radix);
      rem = remDiv;
      if (rem.isZero()) {
        return digits + result;
      } else {
        while (digits.length < 6) {
          digits = '0' + digits;
        }
        result = '' + digits + result;
      }
    }
  };
  /** @return {number} The high 32-bits as a signed value. */
  goog.math.Long.prototype.getHighBits = function() {
    return this.high_;
  };
  /** @return {number} The low 32-bits as a signed value. */
  goog.math.Long.prototype.getLowBits = function() {
    return this.low_;
  };
  /** @return {number} The low 32-bits as an unsigned value. */
  goog.math.Long.prototype.getLowBitsUnsigned = function() {
    return (this.low_ >= 0) ?
        this.low_ : goog.math.Long.TWO_PWR_32_DBL_ + this.low_;
  };
  /**
   * @return {number} Returns the number of bits needed to represent the absolute
   *     value of this Long.
   */
  goog.math.Long.prototype.getNumBitsAbs = function() {
    if (this.isNegative()) {
      if (this.equals(goog.math.Long.MIN_VALUE)) {
        return 64;
      } else {
        return this.negate().getNumBitsAbs();
      }
    } else {
      var val = this.high_ != 0 ? this.high_ : this.low_;
      for (var bit = 31; bit > 0; bit--) {
        if ((val & (1 << bit)) != 0) {
          break;
        }
      }
      return this.high_ != 0 ? bit + 33 : bit + 1;
    }
  };
  /** @return {boolean} Whether this value is zero. */
  goog.math.Long.prototype.isZero = function() {
    return this.high_ == 0 && this.low_ == 0;
  };
  /** @return {boolean} Whether this value is negative. */
  goog.math.Long.prototype.isNegative = function() {
    return this.high_ < 0;
  };
  /** @return {boolean} Whether this value is odd. */
  goog.math.Long.prototype.isOdd = function() {
    return (this.low_ & 1) == 1;
  };
  /**
   * @param {goog.math.Long} other Long to compare against.
   * @return {boolean} Whether this Long equals the other.
   */
  goog.math.Long.prototype.equals = function(other) {
    return (this.high_ == other.high_) && (this.low_ == other.low_);
  };
  /**
   * @param {goog.math.Long} other Long to compare against.
   * @return {boolean} Whether this Long does not equal the other.
   */
  goog.math.Long.prototype.notEquals = function(other) {
    return (this.high_ != other.high_) || (this.low_ != other.low_);
  };
  /**
   * @param {goog.math.Long} other Long to compare against.
   * @return {boolean} Whether this Long is less than the other.
   */
  goog.math.Long.prototype.lessThan = function(other) {
    return this.compare(other) < 0;
  };
  /**
   * @param {goog.math.Long} other Long to compare against.
   * @return {boolean} Whether this Long is less than or equal to the other.
   */
  goog.math.Long.prototype.lessThanOrEqual = function(other) {
    return this.compare(other) <= 0;
  };
  /**
   * @param {goog.math.Long} other Long to compare against.
   * @return {boolean} Whether this Long is greater than the other.
   */
  goog.math.Long.prototype.greaterThan = function(other) {
    return this.compare(other) > 0;
  };
  /**
   * @param {goog.math.Long} other Long to compare against.
   * @return {boolean} Whether this Long is greater than or equal to the other.
   */
  goog.math.Long.prototype.greaterThanOrEqual = function(other) {
    return this.compare(other) >= 0;
  };
  /**
   * Compares this Long with the given one.
   * @param {goog.math.Long} other Long to compare against.
   * @return {number} 0 if they are the same, 1 if the this is greater, and -1
   *     if the given one is greater.
   */
  goog.math.Long.prototype.compare = function(other) {
    if (this.equals(other)) {
      return 0;
    }
    var thisNeg = this.isNegative();
    var otherNeg = other.isNegative();
    if (thisNeg && !otherNeg) {
      return -1;
    }
    if (!thisNeg && otherNeg) {
      return 1;
    }
    // at this point, the signs are the same, so subtraction will not overflow
    if (this.subtract(other).isNegative()) {
      return -1;
    } else {
      return 1;
    }
  };
  /** @return {!goog.math.Long} The negation of this value. */
  goog.math.Long.prototype.negate = function() {
    if (this.equals(goog.math.Long.MIN_VALUE)) {
      return goog.math.Long.MIN_VALUE;
    } else {
      return this.not().add(goog.math.Long.ONE);
    }
  };
  /**
   * Returns the sum of this and the given Long.
   * @param {goog.math.Long} other Long to add to this one.
   * @return {!goog.math.Long} The sum of this and the given Long.
   */
  goog.math.Long.prototype.add = function(other) {
    // Divide each number into 4 chunks of 16 bits, and then sum the chunks.
    var a48 = this.high_ >>> 16;
    var a32 = this.high_ & 0xFFFF;
    var a16 = this.low_ >>> 16;
    var a00 = this.low_ & 0xFFFF;
    var b48 = other.high_ >>> 16;
    var b32 = other.high_ & 0xFFFF;
    var b16 = other.low_ >>> 16;
    var b00 = other.low_ & 0xFFFF;
    var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
    c00 += a00 + b00;
    c16 += c00 >>> 16;
    c00 &= 0xFFFF;
    c16 += a16 + b16;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c32 += a32 + b32;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c48 += a48 + b48;
    c48 &= 0xFFFF;
    return goog.math.Long.fromBits((c16 << 16) | c00, (c48 << 16) | c32);
  };
  /**
   * Returns the difference of this and the given Long.
   * @param {goog.math.Long} other Long to subtract from this.
   * @return {!goog.math.Long} The difference of this and the given Long.
   */
  goog.math.Long.prototype.subtract = function(other) {
    return this.add(other.negate());
  };
  /**
   * Returns the product of this and the given long.
   * @param {goog.math.Long} other Long to multiply with this.
   * @return {!goog.math.Long} The product of this and the other.
   */
  goog.math.Long.prototype.multiply = function(other) {
    if (this.isZero()) {
      return goog.math.Long.ZERO;
    } else if (other.isZero()) {
      return goog.math.Long.ZERO;
    }
    if (this.equals(goog.math.Long.MIN_VALUE)) {
      return other.isOdd() ? goog.math.Long.MIN_VALUE : goog.math.Long.ZERO;
    } else if (other.equals(goog.math.Long.MIN_VALUE)) {
      return this.isOdd() ? goog.math.Long.MIN_VALUE : goog.math.Long.ZERO;
    }
    if (this.isNegative()) {
      if (other.isNegative()) {
        return this.negate().multiply(other.negate());
      } else {
        return this.negate().multiply(other).negate();
      }
    } else if (other.isNegative()) {
      return this.multiply(other.negate()).negate();
    }
    // If both longs are small, use float multiplication
    if (this.lessThan(goog.math.Long.TWO_PWR_24_) &&
        other.lessThan(goog.math.Long.TWO_PWR_24_)) {
      return goog.math.Long.fromNumber(this.toNumber() * other.toNumber());
    }
    // Divide each long into 4 chunks of 16 bits, and then add up 4x4 products.
    // We can skip products that would overflow.
    var a48 = this.high_ >>> 16;
    var a32 = this.high_ & 0xFFFF;
    var a16 = this.low_ >>> 16;
    var a00 = this.low_ & 0xFFFF;
    var b48 = other.high_ >>> 16;
    var b32 = other.high_ & 0xFFFF;
    var b16 = other.low_ >>> 16;
    var b00 = other.low_ & 0xFFFF;
    var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
    c00 += a00 * b00;
    c16 += c00 >>> 16;
    c00 &= 0xFFFF;
    c16 += a16 * b00;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c16 += a00 * b16;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c32 += a32 * b00;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c32 += a16 * b16;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c32 += a00 * b32;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
    c48 &= 0xFFFF;
    return goog.math.Long.fromBits((c16 << 16) | c00, (c48 << 16) | c32);
  };
  /**
   * Returns this Long divided by the given one.
   * @param {goog.math.Long} other Long by which to divide.
   * @return {!goog.math.Long} This Long divided by the given one.
   */
  goog.math.Long.prototype.div = function(other) {
    if (other.isZero()) {
      throw Error('division by zero');
    } else if (this.isZero()) {
      return goog.math.Long.ZERO;
    }
    if (this.equals(goog.math.Long.MIN_VALUE)) {
      if (other.equals(goog.math.Long.ONE) ||
          other.equals(goog.math.Long.NEG_ONE)) {
        return goog.math.Long.MIN_VALUE;  // recall that -MIN_VALUE == MIN_VALUE
      } else if (other.equals(goog.math.Long.MIN_VALUE)) {
        return goog.math.Long.ONE;
      } else {
        // At this point, we have |other| >= 2, so |this/other| < |MIN_VALUE|.
        var halfThis = this.shiftRight(1);
        var approx = halfThis.div(other).shiftLeft(1);
        if (approx.equals(goog.math.Long.ZERO)) {
          return other.isNegative() ? goog.math.Long.ONE : goog.math.Long.NEG_ONE;
        } else {
          var rem = this.subtract(other.multiply(approx));
          var result = approx.add(rem.div(other));
          return result;
        }
      }
    } else if (other.equals(goog.math.Long.MIN_VALUE)) {
      return goog.math.Long.ZERO;
    }
    if (this.isNegative()) {
      if (other.isNegative()) {
        return this.negate().div(other.negate());
      } else {
        return this.negate().div(other).negate();
      }
    } else if (other.isNegative()) {
      return this.div(other.negate()).negate();
    }
    // Repeat the following until the remainder is less than other:  find a
    // floating-point that approximates remainder / other *from below*, add this
    // into the result, and subtract it from the remainder.  It is critical that
    // the approximate value is less than or equal to the real value so that the
    // remainder never becomes negative.
    var res = goog.math.Long.ZERO;
    var rem = this;
    while (rem.greaterThanOrEqual(other)) {
      // Approximate the result of division. This may be a little greater or
      // smaller than the actual value.
      var approx = Math.max(1, Math.floor(rem.toNumber() / other.toNumber()));
      // We will tweak the approximate result by changing it in the 48-th digit or
      // the smallest non-fractional digit, whichever is larger.
      var log2 = Math.ceil(Math.log(approx) / Math.LN2);
      var delta = (log2 <= 48) ? 1 : Math.pow(2, log2 - 48);
      // Decrease the approximation until it is smaller than the remainder.  Note
      // that if it is too large, the product overflows and is negative.
      var approxRes = goog.math.Long.fromNumber(approx);
      var approxRem = approxRes.multiply(other);
      while (approxRem.isNegative() || approxRem.greaterThan(rem)) {
        approx -= delta;
        approxRes = goog.math.Long.fromNumber(approx);
        approxRem = approxRes.multiply(other);
      }
      // We know the answer can't be zero... and actually, zero would cause
      // infinite recursion since we would make no progress.
      if (approxRes.isZero()) {
        approxRes = goog.math.Long.ONE;
      }
      res = res.add(approxRes);
      rem = rem.subtract(approxRem);
    }
    return res;
  };
  /**
   * Returns this Long modulo the given one.
   * @param {goog.math.Long} other Long by which to mod.
   * @return {!goog.math.Long} This Long modulo the given one.
   */
  goog.math.Long.prototype.modulo = function(other) {
    return this.subtract(this.div(other).multiply(other));
  };
  /** @return {!goog.math.Long} The bitwise-NOT of this value. */
  goog.math.Long.prototype.not = function() {
    return goog.math.Long.fromBits(~this.low_, ~this.high_);
  };
  /**
   * Returns the bitwise-AND of this Long and the given one.
   * @param {goog.math.Long} other The Long with which to AND.
   * @return {!goog.math.Long} The bitwise-AND of this and the other.
   */
  goog.math.Long.prototype.and = function(other) {
    return goog.math.Long.fromBits(this.low_ & other.low_,
                                   this.high_ & other.high_);
  };
  /**
   * Returns the bitwise-OR of this Long and the given one.
   * @param {goog.math.Long} other The Long with which to OR.
   * @return {!goog.math.Long} The bitwise-OR of this and the other.
   */
  goog.math.Long.prototype.or = function(other) {
    return goog.math.Long.fromBits(this.low_ | other.low_,
                                   this.high_ | other.high_);
  };
  /**
   * Returns the bitwise-XOR of this Long and the given one.
   * @param {goog.math.Long} other The Long with which to XOR.
   * @return {!goog.math.Long} The bitwise-XOR of this and the other.
   */
  goog.math.Long.prototype.xor = function(other) {
    return goog.math.Long.fromBits(this.low_ ^ other.low_,
                                   this.high_ ^ other.high_);
  };
  /**
   * Returns this Long with bits shifted to the left by the given amount.
   * @param {number} numBits The number of bits by which to shift.
   * @return {!goog.math.Long} This shifted to the left by the given amount.
   */
  goog.math.Long.prototype.shiftLeft = function(numBits) {
    numBits &= 63;
    if (numBits == 0) {
      return this;
    } else {
      var low = this.low_;
      if (numBits < 32) {
        var high = this.high_;
        return goog.math.Long.fromBits(
            low << numBits,
            (high << numBits) | (low >>> (32 - numBits)));
      } else {
        return goog.math.Long.fromBits(0, low << (numBits - 32));
      }
    }
  };
  /**
   * Returns this Long with bits shifted to the right by the given amount.
   * @param {number} numBits The number of bits by which to shift.
   * @return {!goog.math.Long} This shifted to the right by the given amount.
   */
  goog.math.Long.prototype.shiftRight = function(numBits) {
    numBits &= 63;
    if (numBits == 0) {
      return this;
    } else {
      var high = this.high_;
      if (numBits < 32) {
        var low = this.low_;
        return goog.math.Long.fromBits(
            (low >>> numBits) | (high << (32 - numBits)),
            high >> numBits);
      } else {
        return goog.math.Long.fromBits(
            high >> (numBits - 32),
            high >= 0 ? 0 : -1);
      }
    }
  };
  /**
   * Returns this Long with bits shifted to the right by the given amount, with
   * the new top bits matching the current sign bit.
   * @param {number} numBits The number of bits by which to shift.
   * @return {!goog.math.Long} This shifted to the right by the given amount, with
   *     zeros placed into the new leading bits.
   */
  goog.math.Long.prototype.shiftRightUnsigned = function(numBits) {
    numBits &= 63;
    if (numBits == 0) {
      return this;
    } else {
      var high = this.high_;
      if (numBits < 32) {
        var low = this.low_;
        return goog.math.Long.fromBits(
            (low >>> numBits) | (high << (32 - numBits)),
            high >>> numBits);
      } else if (numBits == 32) {
        return goog.math.Long.fromBits(high, 0);
      } else {
        return goog.math.Long.fromBits(high >>> (numBits - 32), 0);
      }
    }
  };
  //======= begin jsbn =======
  var navigator = { appName: 'Modern Browser' }; // polyfill a little
  // Copyright (c) 2005  Tom Wu
  // All Rights Reserved.
  // http://www-cs-students.stanford.edu/~tjw/jsbn/
  /*
   * Copyright (c) 2003-2005  Tom Wu
   * All Rights Reserved.
   *
   * Permission is hereby granted, free of charge, to any person obtaining
   * a copy of this software and associated documentation files (the
   * "Software"), to deal in the Software without restriction, including
   * without limitation the rights to use, copy, modify, merge, publish,
   * distribute, sublicense, and/or sell copies of the Software, and to
   * permit persons to whom the Software is furnished to do so, subject to
   * the following conditions:
   *
   * The above copyright notice and this permission notice shall be
   * included in all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS-IS" AND WITHOUT WARRANTY OF ANY KIND, 
   * EXPRESS, IMPLIED OR OTHERWISE, INCLUDING WITHOUT LIMITATION, ANY 
   * WARRANTY OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.  
   *
   * IN NO EVENT SHALL TOM WU BE LIABLE FOR ANY SPECIAL, INCIDENTAL,
   * INDIRECT OR CONSEQUENTIAL DAMAGES OF ANY KIND, OR ANY DAMAGES WHATSOEVER
   * RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER OR NOT ADVISED OF
   * THE POSSIBILITY OF DAMAGE, AND ON ANY THEORY OF LIABILITY, ARISING OUT
   * OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   * In addition, the following condition applies:
   *
   * All redistributions must retain an intact copy of this copyright notice
   * and disclaimer.
   */
  // Basic JavaScript BN library - subset useful for RSA encryption.
  // Bits per digit
  var dbits;
  // JavaScript engine analysis
  var canary = 0xdeadbeefcafe;
  var j_lm = ((canary&0xffffff)==0xefcafe);
  // (public) Constructor
  function BigInteger(a,b,c) {
    if(a != null)
      if("number" == typeof a) this.fromNumber(a,b,c);
      else if(b == null && "string" != typeof a) this.fromString(a,256);
      else this.fromString(a,b);
  }
  // return new, unset BigInteger
  function nbi() { return new BigInteger(null); }
  // am: Compute w_j += (x*this_i), propagate carries,
  // c is initial carry, returns final carry.
  // c < 3*dvalue, x < 2*dvalue, this_i < dvalue
  // We need to select the fastest one that works in this environment.
  // am1: use a single mult and divide to get the high bits,
  // max digit bits should be 26 because
  // max internal value = 2*dvalue^2-2*dvalue (< 2^53)
  function am1(i,x,w,j,c,n) {
    while(--n >= 0) {
      var v = x*this[i++]+w[j]+c;
      c = Math.floor(v/0x4000000);
      w[j++] = v&0x3ffffff;
    }
    return c;
  }
  // am2 avoids a big mult-and-extract completely.
  // Max digit bits should be <= 30 because we do bitwise ops
  // on values up to 2*hdvalue^2-hdvalue-1 (< 2^31)
  function am2(i,x,w,j,c,n) {
    var xl = x&0x7fff, xh = x>>15;
    while(--n >= 0) {
      var l = this[i]&0x7fff;
      var h = this[i++]>>15;
      var m = xh*l+h*xl;
      l = xl*l+((m&0x7fff)<<15)+w[j]+(c&0x3fffffff);
      c = (l>>>30)+(m>>>15)+xh*h+(c>>>30);
      w[j++] = l&0x3fffffff;
    }
    return c;
  }
  // Alternately, set max digit bits to 28 since some
  // browsers slow down when dealing with 32-bit numbers.
  function am3(i,x,w,j,c,n) {
    var xl = x&0x3fff, xh = x>>14;
    while(--n >= 0) {
      var l = this[i]&0x3fff;
      var h = this[i++]>>14;
      var m = xh*l+h*xl;
      l = xl*l+((m&0x3fff)<<14)+w[j]+c;
      c = (l>>28)+(m>>14)+xh*h;
      w[j++] = l&0xfffffff;
    }
    return c;
  }
  if(j_lm && (navigator.appName == "Microsoft Internet Explorer")) {
    BigInteger.prototype.am = am2;
    dbits = 30;
  }
  else if(j_lm && (navigator.appName != "Netscape")) {
    BigInteger.prototype.am = am1;
    dbits = 26;
  }
  else { // Mozilla/Netscape seems to prefer am3
    BigInteger.prototype.am = am3;
    dbits = 28;
  }
  BigInteger.prototype.DB = dbits;
  BigInteger.prototype.DM = ((1<<dbits)-1);
  BigInteger.prototype.DV = (1<<dbits);
  var BI_FP = 52;
  BigInteger.prototype.FV = Math.pow(2,BI_FP);
  BigInteger.prototype.F1 = BI_FP-dbits;
  BigInteger.prototype.F2 = 2*dbits-BI_FP;
  // Digit conversions
  var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
  var BI_RC = new Array();
  var rr,vv;
  rr = "0".charCodeAt(0);
  for(vv = 0; vv <= 9; ++vv) BI_RC[rr++] = vv;
  rr = "a".charCodeAt(0);
  for(vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
  rr = "A".charCodeAt(0);
  for(vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
  function int2char(n) { return BI_RM.charAt(n); }
  function intAt(s,i) {
    var c = BI_RC[s.charCodeAt(i)];
    return (c==null)?-1:c;
  }
  // (protected) copy this to r
  function bnpCopyTo(r) {
    for(var i = this.t-1; i >= 0; --i) r[i] = this[i];
    r.t = this.t;
    r.s = this.s;
  }
  // (protected) set from integer value x, -DV <= x < DV
  function bnpFromInt(x) {
    this.t = 1;
    this.s = (x<0)?-1:0;
    if(x > 0) this[0] = x;
    else if(x < -1) this[0] = x+DV;
    else this.t = 0;
  }
  // return bigint initialized to value
  function nbv(i) { var r = nbi(); r.fromInt(i); return r; }
  // (protected) set from string and radix
  function bnpFromString(s,b) {
    var k;
    if(b == 16) k = 4;
    else if(b == 8) k = 3;
    else if(b == 256) k = 8; // byte array
    else if(b == 2) k = 1;
    else if(b == 32) k = 5;
    else if(b == 4) k = 2;
    else { this.fromRadix(s,b); return; }
    this.t = 0;
    this.s = 0;
    var i = s.length, mi = false, sh = 0;
    while(--i >= 0) {
      var x = (k==8)?s[i]&0xff:intAt(s,i);
      if(x < 0) {
        if(s.charAt(i) == "-") mi = true;
        continue;
      }
      mi = false;
      if(sh == 0)
        this[this.t++] = x;
      else if(sh+k > this.DB) {
        this[this.t-1] |= (x&((1<<(this.DB-sh))-1))<<sh;
        this[this.t++] = (x>>(this.DB-sh));
      }
      else
        this[this.t-1] |= x<<sh;
      sh += k;
      if(sh >= this.DB) sh -= this.DB;
    }
    if(k == 8 && (s[0]&0x80) != 0) {
      this.s = -1;
      if(sh > 0) this[this.t-1] |= ((1<<(this.DB-sh))-1)<<sh;
    }
    this.clamp();
    if(mi) BigInteger.ZERO.subTo(this,this);
  }
  // (protected) clamp off excess high words
  function bnpClamp() {
    var c = this.s&this.DM;
    while(this.t > 0 && this[this.t-1] == c) --this.t;
  }
  // (public) return string representation in given radix
  function bnToString(b) {
    if(this.s < 0) return "-"+this.negate().toString(b);
    var k;
    if(b == 16) k = 4;
    else if(b == 8) k = 3;
    else if(b == 2) k = 1;
    else if(b == 32) k = 5;
    else if(b == 4) k = 2;
    else return this.toRadix(b);
    var km = (1<<k)-1, d, m = false, r = "", i = this.t;
    var p = this.DB-(i*this.DB)%k;
    if(i-- > 0) {
      if(p < this.DB && (d = this[i]>>p) > 0) { m = true; r = int2char(d); }
      while(i >= 0) {
        if(p < k) {
          d = (this[i]&((1<<p)-1))<<(k-p);
          d |= this[--i]>>(p+=this.DB-k);
        }
        else {
          d = (this[i]>>(p-=k))&km;
          if(p <= 0) { p += this.DB; --i; }
        }
        if(d > 0) m = true;
        if(m) r += int2char(d);
      }
    }
    return m?r:"0";
  }
  // (public) -this
  function bnNegate() { var r = nbi(); BigInteger.ZERO.subTo(this,r); return r; }
  // (public) |this|
  function bnAbs() { return (this.s<0)?this.negate():this; }
  // (public) return + if this > a, - if this < a, 0 if equal
  function bnCompareTo(a) {
    var r = this.s-a.s;
    if(r != 0) return r;
    var i = this.t;
    r = i-a.t;
    if(r != 0) return (this.s<0)?-r:r;
    while(--i >= 0) if((r=this[i]-a[i]) != 0) return r;
    return 0;
  }
  // returns bit length of the integer x
  function nbits(x) {
    var r = 1, t;
    if((t=x>>>16) != 0) { x = t; r += 16; }
    if((t=x>>8) != 0) { x = t; r += 8; }
    if((t=x>>4) != 0) { x = t; r += 4; }
    if((t=x>>2) != 0) { x = t; r += 2; }
    if((t=x>>1) != 0) { x = t; r += 1; }
    return r;
  }
  // (public) return the number of bits in "this"
  function bnBitLength() {
    if(this.t <= 0) return 0;
    return this.DB*(this.t-1)+nbits(this[this.t-1]^(this.s&this.DM));
  }
  // (protected) r = this << n*DB
  function bnpDLShiftTo(n,r) {
    var i;
    for(i = this.t-1; i >= 0; --i) r[i+n] = this[i];
    for(i = n-1; i >= 0; --i) r[i] = 0;
    r.t = this.t+n;
    r.s = this.s;
  }
  // (protected) r = this >> n*DB
  function bnpDRShiftTo(n,r) {
    for(var i = n; i < this.t; ++i) r[i-n] = this[i];
    r.t = Math.max(this.t-n,0);
    r.s = this.s;
  }
  // (protected) r = this << n
  function bnpLShiftTo(n,r) {
    var bs = n%this.DB;
    var cbs = this.DB-bs;
    var bm = (1<<cbs)-1;
    var ds = Math.floor(n/this.DB), c = (this.s<<bs)&this.DM, i;
    for(i = this.t-1; i >= 0; --i) {
      r[i+ds+1] = (this[i]>>cbs)|c;
      c = (this[i]&bm)<<bs;
    }
    for(i = ds-1; i >= 0; --i) r[i] = 0;
    r[ds] = c;
    r.t = this.t+ds+1;
    r.s = this.s;
    r.clamp();
  }
  // (protected) r = this >> n
  function bnpRShiftTo(n,r) {
    r.s = this.s;
    var ds = Math.floor(n/this.DB);
    if(ds >= this.t) { r.t = 0; return; }
    var bs = n%this.DB;
    var cbs = this.DB-bs;
    var bm = (1<<bs)-1;
    r[0] = this[ds]>>bs;
    for(var i = ds+1; i < this.t; ++i) {
      r[i-ds-1] |= (this[i]&bm)<<cbs;
      r[i-ds] = this[i]>>bs;
    }
    if(bs > 0) r[this.t-ds-1] |= (this.s&bm)<<cbs;
    r.t = this.t-ds;
    r.clamp();
  }
  // (protected) r = this - a
  function bnpSubTo(a,r) {
    var i = 0, c = 0, m = Math.min(a.t,this.t);
    while(i < m) {
      c += this[i]-a[i];
      r[i++] = c&this.DM;
      c >>= this.DB;
    }
    if(a.t < this.t) {
      c -= a.s;
      while(i < this.t) {
        c += this[i];
        r[i++] = c&this.DM;
        c >>= this.DB;
      }
      c += this.s;
    }
    else {
      c += this.s;
      while(i < a.t) {
        c -= a[i];
        r[i++] = c&this.DM;
        c >>= this.DB;
      }
      c -= a.s;
    }
    r.s = (c<0)?-1:0;
    if(c < -1) r[i++] = this.DV+c;
    else if(c > 0) r[i++] = c;
    r.t = i;
    r.clamp();
  }
  // (protected) r = this * a, r != this,a (HAC 14.12)
  // "this" should be the larger one if appropriate.
  function bnpMultiplyTo(a,r) {
    var x = this.abs(), y = a.abs();
    var i = x.t;
    r.t = i+y.t;
    while(--i >= 0) r[i] = 0;
    for(i = 0; i < y.t; ++i) r[i+x.t] = x.am(0,y[i],r,i,0,x.t);
    r.s = 0;
    r.clamp();
    if(this.s != a.s) BigInteger.ZERO.subTo(r,r);
  }
  // (protected) r = this^2, r != this (HAC 14.16)
  function bnpSquareTo(r) {
    var x = this.abs();
    var i = r.t = 2*x.t;
    while(--i >= 0) r[i] = 0;
    for(i = 0; i < x.t-1; ++i) {
      var c = x.am(i,x[i],r,2*i,0,1);
      if((r[i+x.t]+=x.am(i+1,2*x[i],r,2*i+1,c,x.t-i-1)) >= x.DV) {
        r[i+x.t] -= x.DV;
        r[i+x.t+1] = 1;
      }
    }
    if(r.t > 0) r[r.t-1] += x.am(i,x[i],r,2*i,0,1);
    r.s = 0;
    r.clamp();
  }
  // (protected) divide this by m, quotient and remainder to q, r (HAC 14.20)
  // r != q, this != m.  q or r may be null.
  function bnpDivRemTo(m,q,r) {
    var pm = m.abs();
    if(pm.t <= 0) return;
    var pt = this.abs();
    if(pt.t < pm.t) {
      if(q != null) q.fromInt(0);
      if(r != null) this.copyTo(r);
      return;
    }
    if(r == null) r = nbi();
    var y = nbi(), ts = this.s, ms = m.s;
    var nsh = this.DB-nbits(pm[pm.t-1]);	// normalize modulus
    if(nsh > 0) { pm.lShiftTo(nsh,y); pt.lShiftTo(nsh,r); }
    else { pm.copyTo(y); pt.copyTo(r); }
    var ys = y.t;
    var y0 = y[ys-1];
    if(y0 == 0) return;
    var yt = y0*(1<<this.F1)+((ys>1)?y[ys-2]>>this.F2:0);
    var d1 = this.FV/yt, d2 = (1<<this.F1)/yt, e = 1<<this.F2;
    var i = r.t, j = i-ys, t = (q==null)?nbi():q;
    y.dlShiftTo(j,t);
    if(r.compareTo(t) >= 0) {
      r[r.t++] = 1;
      r.subTo(t,r);
    }
    BigInteger.ONE.dlShiftTo(ys,t);
    t.subTo(y,y);	// "negative" y so we can replace sub with am later
    while(y.t < ys) y[y.t++] = 0;
    while(--j >= 0) {
      // Estimate quotient digit
      var qd = (r[--i]==y0)?this.DM:Math.floor(r[i]*d1+(r[i-1]+e)*d2);
      if((r[i]+=y.am(0,qd,r,j,0,ys)) < qd) {	// Try it out
        y.dlShiftTo(j,t);
        r.subTo(t,r);
        while(r[i] < --qd) r.subTo(t,r);
      }
    }
    if(q != null) {
      r.drShiftTo(ys,q);
      if(ts != ms) BigInteger.ZERO.subTo(q,q);
    }
    r.t = ys;
    r.clamp();
    if(nsh > 0) r.rShiftTo(nsh,r);	// Denormalize remainder
    if(ts < 0) BigInteger.ZERO.subTo(r,r);
  }
  // (public) this mod a
  function bnMod(a) {
    var r = nbi();
    this.abs().divRemTo(a,null,r);
    if(this.s < 0 && r.compareTo(BigInteger.ZERO) > 0) a.subTo(r,r);
    return r;
  }
  // Modular reduction using "classic" algorithm
  function Classic(m) { this.m = m; }
  function cConvert(x) {
    if(x.s < 0 || x.compareTo(this.m) >= 0) return x.mod(this.m);
    else return x;
  }
  function cRevert(x) { return x; }
  function cReduce(x) { x.divRemTo(this.m,null,x); }
  function cMulTo(x,y,r) { x.multiplyTo(y,r); this.reduce(r); }
  function cSqrTo(x,r) { x.squareTo(r); this.reduce(r); }
  Classic.prototype.convert = cConvert;
  Classic.prototype.revert = cRevert;
  Classic.prototype.reduce = cReduce;
  Classic.prototype.mulTo = cMulTo;
  Classic.prototype.sqrTo = cSqrTo;
  // (protected) return "-1/this % 2^DB"; useful for Mont. reduction
  // justification:
  //         xy == 1 (mod m)
  //         xy =  1+km
  //   xy(2-xy) = (1+km)(1-km)
  // x[y(2-xy)] = 1-k^2m^2
  // x[y(2-xy)] == 1 (mod m^2)
  // if y is 1/x mod m, then y(2-xy) is 1/x mod m^2
  // should reduce x and y(2-xy) by m^2 at each step to keep size bounded.
  // JS multiply "overflows" differently from C/C++, so care is needed here.
  function bnpInvDigit() {
    if(this.t < 1) return 0;
    var x = this[0];
    if((x&1) == 0) return 0;
    var y = x&3;		// y == 1/x mod 2^2
    y = (y*(2-(x&0xf)*y))&0xf;	// y == 1/x mod 2^4
    y = (y*(2-(x&0xff)*y))&0xff;	// y == 1/x mod 2^8
    y = (y*(2-(((x&0xffff)*y)&0xffff)))&0xffff;	// y == 1/x mod 2^16
    // last step - calculate inverse mod DV directly;
    // assumes 16 < DB <= 32 and assumes ability to handle 48-bit ints
    y = (y*(2-x*y%this.DV))%this.DV;		// y == 1/x mod 2^dbits
    // we really want the negative inverse, and -DV < y < DV
    return (y>0)?this.DV-y:-y;
  }
  // Montgomery reduction
  function Montgomery(m) {
    this.m = m;
    this.mp = m.invDigit();
    this.mpl = this.mp&0x7fff;
    this.mph = this.mp>>15;
    this.um = (1<<(m.DB-15))-1;
    this.mt2 = 2*m.t;
  }
  // xR mod m
  function montConvert(x) {
    var r = nbi();
    x.abs().dlShiftTo(this.m.t,r);
    r.divRemTo(this.m,null,r);
    if(x.s < 0 && r.compareTo(BigInteger.ZERO) > 0) this.m.subTo(r,r);
    return r;
  }
  // x/R mod m
  function montRevert(x) {
    var r = nbi();
    x.copyTo(r);
    this.reduce(r);
    return r;
  }
  // x = x/R mod m (HAC 14.32)
  function montReduce(x) {
    while(x.t <= this.mt2)	// pad x so am has enough room later
      x[x.t++] = 0;
    for(var i = 0; i < this.m.t; ++i) {
      // faster way of calculating u0 = x[i]*mp mod DV
      var j = x[i]&0x7fff;
      var u0 = (j*this.mpl+(((j*this.mph+(x[i]>>15)*this.mpl)&this.um)<<15))&x.DM;
      // use am to combine the multiply-shift-add into one call
      j = i+this.m.t;
      x[j] += this.m.am(0,u0,x,i,0,this.m.t);
      // propagate carry
      while(x[j] >= x.DV) { x[j] -= x.DV; x[++j]++; }
    }
    x.clamp();
    x.drShiftTo(this.m.t,x);
    if(x.compareTo(this.m) >= 0) x.subTo(this.m,x);
  }
  // r = "x^2/R mod m"; x != r
  function montSqrTo(x,r) { x.squareTo(r); this.reduce(r); }
  // r = "xy/R mod m"; x,y != r
  function montMulTo(x,y,r) { x.multiplyTo(y,r); this.reduce(r); }
  Montgomery.prototype.convert = montConvert;
  Montgomery.prototype.revert = montRevert;
  Montgomery.prototype.reduce = montReduce;
  Montgomery.prototype.mulTo = montMulTo;
  Montgomery.prototype.sqrTo = montSqrTo;
  // (protected) true iff this is even
  function bnpIsEven() { return ((this.t>0)?(this[0]&1):this.s) == 0; }
  // (protected) this^e, e < 2^32, doing sqr and mul with "r" (HAC 14.79)
  function bnpExp(e,z) {
    if(e > 0xffffffff || e < 1) return BigInteger.ONE;
    var r = nbi(), r2 = nbi(), g = z.convert(this), i = nbits(e)-1;
    g.copyTo(r);
    while(--i >= 0) {
      z.sqrTo(r,r2);
      if((e&(1<<i)) > 0) z.mulTo(r2,g,r);
      else { var t = r; r = r2; r2 = t; }
    }
    return z.revert(r);
  }
  // (public) this^e % m, 0 <= e < 2^32
  function bnModPowInt(e,m) {
    var z;
    if(e < 256 || m.isEven()) z = new Classic(m); else z = new Montgomery(m);
    return this.exp(e,z);
  }
  // protected
  BigInteger.prototype.copyTo = bnpCopyTo;
  BigInteger.prototype.fromInt = bnpFromInt;
  BigInteger.prototype.fromString = bnpFromString;
  BigInteger.prototype.clamp = bnpClamp;
  BigInteger.prototype.dlShiftTo = bnpDLShiftTo;
  BigInteger.prototype.drShiftTo = bnpDRShiftTo;
  BigInteger.prototype.lShiftTo = bnpLShiftTo;
  BigInteger.prototype.rShiftTo = bnpRShiftTo;
  BigInteger.prototype.subTo = bnpSubTo;
  BigInteger.prototype.multiplyTo = bnpMultiplyTo;
  BigInteger.prototype.squareTo = bnpSquareTo;
  BigInteger.prototype.divRemTo = bnpDivRemTo;
  BigInteger.prototype.invDigit = bnpInvDigit;
  BigInteger.prototype.isEven = bnpIsEven;
  BigInteger.prototype.exp = bnpExp;
  // public
  BigInteger.prototype.toString = bnToString;
  BigInteger.prototype.negate = bnNegate;
  BigInteger.prototype.abs = bnAbs;
  BigInteger.prototype.compareTo = bnCompareTo;
  BigInteger.prototype.bitLength = bnBitLength;
  BigInteger.prototype.mod = bnMod;
  BigInteger.prototype.modPowInt = bnModPowInt;
  // "constants"
  BigInteger.ZERO = nbv(0);
  BigInteger.ONE = nbv(1);
  // jsbn2 stuff
  // (protected) convert from radix string
  function bnpFromRadix(s,b) {
    this.fromInt(0);
    if(b == null) b = 10;
    var cs = this.chunkSize(b);
    var d = Math.pow(b,cs), mi = false, j = 0, w = 0;
    for(var i = 0; i < s.length; ++i) {
      var x = intAt(s,i);
      if(x < 0) {
        if(s.charAt(i) == "-" && this.signum() == 0) mi = true;
        continue;
      }
      w = b*w+x;
      if(++j >= cs) {
        this.dMultiply(d);
        this.dAddOffset(w,0);
        j = 0;
        w = 0;
      }
    }
    if(j > 0) {
      this.dMultiply(Math.pow(b,j));
      this.dAddOffset(w,0);
    }
    if(mi) BigInteger.ZERO.subTo(this,this);
  }
  // (protected) return x s.t. r^x < DV
  function bnpChunkSize(r) { return Math.floor(Math.LN2*this.DB/Math.log(r)); }
  // (public) 0 if this == 0, 1 if this > 0
  function bnSigNum() {
    if(this.s < 0) return -1;
    else if(this.t <= 0 || (this.t == 1 && this[0] <= 0)) return 0;
    else return 1;
  }
  // (protected) this *= n, this >= 0, 1 < n < DV
  function bnpDMultiply(n) {
    this[this.t] = this.am(0,n-1,this,0,0,this.t);
    ++this.t;
    this.clamp();
  }
  // (protected) this += n << w words, this >= 0
  function bnpDAddOffset(n,w) {
    if(n == 0) return;
    while(this.t <= w) this[this.t++] = 0;
    this[w] += n;
    while(this[w] >= this.DV) {
      this[w] -= this.DV;
      if(++w >= this.t) this[this.t++] = 0;
      ++this[w];
    }
  }
  // (protected) convert to radix string
  function bnpToRadix(b) {
    if(b == null) b = 10;
    if(this.signum() == 0 || b < 2 || b > 36) return "0";
    var cs = this.chunkSize(b);
    var a = Math.pow(b,cs);
    var d = nbv(a), y = nbi(), z = nbi(), r = "";
    this.divRemTo(d,y,z);
    while(y.signum() > 0) {
      r = (a+z.intValue()).toString(b).substr(1) + r;
      y.divRemTo(d,y,z);
    }
    return z.intValue().toString(b) + r;
  }
  // (public) return value as integer
  function bnIntValue() {
    if(this.s < 0) {
      if(this.t == 1) return this[0]-this.DV;
      else if(this.t == 0) return -1;
    }
    else if(this.t == 1) return this[0];
    else if(this.t == 0) return 0;
    // assumes 16 < DB < 32
    return ((this[1]&((1<<(32-this.DB))-1))<<this.DB)|this[0];
  }
  // (protected) r = this + a
  function bnpAddTo(a,r) {
    var i = 0, c = 0, m = Math.min(a.t,this.t);
    while(i < m) {
      c += this[i]+a[i];
      r[i++] = c&this.DM;
      c >>= this.DB;
    }
    if(a.t < this.t) {
      c += a.s;
      while(i < this.t) {
        c += this[i];
        r[i++] = c&this.DM;
        c >>= this.DB;
      }
      c += this.s;
    }
    else {
      c += this.s;
      while(i < a.t) {
        c += a[i];
        r[i++] = c&this.DM;
        c >>= this.DB;
      }
      c += a.s;
    }
    r.s = (c<0)?-1:0;
    if(c > 0) r[i++] = c;
    else if(c < -1) r[i++] = this.DV+c;
    r.t = i;
    r.clamp();
  }
  BigInteger.prototype.fromRadix = bnpFromRadix;
  BigInteger.prototype.chunkSize = bnpChunkSize;
  BigInteger.prototype.signum = bnSigNum;
  BigInteger.prototype.dMultiply = bnpDMultiply;
  BigInteger.prototype.dAddOffset = bnpDAddOffset;
  BigInteger.prototype.toRadix = bnpToRadix;
  BigInteger.prototype.intValue = bnIntValue;
  BigInteger.prototype.addTo = bnpAddTo;
  //======= end jsbn =======
  // Emscripten wrapper
  var Wrapper = {
    abs: function(l, h) {
      var x = new goog.math.Long(l, h);
      var ret;
      if (x.isNegative()) {
        ret = x.negate();
      } else {
        ret = x;
      }
      HEAP32[tempDoublePtr>>2] = ret.low_;
      HEAP32[tempDoublePtr+4>>2] = ret.high_;
    },
    ensureTemps: function() {
      if (Wrapper.ensuredTemps) return;
      Wrapper.ensuredTemps = true;
      Wrapper.two32 = new BigInteger();
      Wrapper.two32.fromString('4294967296', 10);
      Wrapper.two64 = new BigInteger();
      Wrapper.two64.fromString('18446744073709551616', 10);
      Wrapper.temp1 = new BigInteger();
      Wrapper.temp2 = new BigInteger();
    },
    lh2bignum: function(l, h) {
      var a = new BigInteger();
      a.fromString(h.toString(), 10);
      var b = new BigInteger();
      a.multiplyTo(Wrapper.two32, b);
      var c = new BigInteger();
      c.fromString(l.toString(), 10);
      var d = new BigInteger();
      c.addTo(b, d);
      return d;
    },
    stringify: function(l, h, unsigned) {
      var ret = new goog.math.Long(l, h).toString();
      if (unsigned && ret[0] == '-') {
        // unsign slowly using jsbn bignums
        Wrapper.ensureTemps();
        var bignum = new BigInteger();
        bignum.fromString(ret, 10);
        ret = new BigInteger();
        Wrapper.two64.addTo(bignum, ret);
        ret = ret.toString(10);
      }
      return ret;
    },
    fromString: function(str, base, min, max, unsigned) {
      Wrapper.ensureTemps();
      var bignum = new BigInteger();
      bignum.fromString(str, base);
      var bigmin = new BigInteger();
      bigmin.fromString(min, 10);
      var bigmax = new BigInteger();
      bigmax.fromString(max, 10);
      if (unsigned && bignum.compareTo(BigInteger.ZERO) < 0) {
        var temp = new BigInteger();
        bignum.addTo(Wrapper.two64, temp);
        bignum = temp;
      }
      var error = false;
      if (bignum.compareTo(bigmin) < 0) {
        bignum = bigmin;
        error = true;
      } else if (bignum.compareTo(bigmax) > 0) {
        bignum = bigmax;
        error = true;
      }
      var ret = goog.math.Long.fromString(bignum.toString()); // min-max checks should have clamped this to a range goog.math.Long can handle well
      HEAP32[tempDoublePtr>>2] = ret.low_;
      HEAP32[tempDoublePtr+4>>2] = ret.high_;
      if (error) throw 'range error';
    }
  };
  return Wrapper;
})();
//======= end closure i64 code =======
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_7_1NS_9allocatorISR_EEFvvEED0Ev_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB23cursorPrefetchIterationERNS2_16IDBCursorBackendERKNS2_32CursorPrefetchIterationOperationENS_8functionIFvvEEEE4$_51NS_9allocatorISC_EESA_E18destroy_deallocateEv_","_strlen","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB13cursorIterateERNS2_16IDBCursorBackendERKNS2_24CursorIterationOperationENS_8functionIFvvEEEE4$_50NS_9allocatorISC_EESA_E7__cloneEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_17_0NS_9allocatorISG_EEFvvEED0Ev_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_19_2NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB15openTransactionExRKN3WTF7HashSetIxNS4_7IntHashIyEENS4_10HashTraitsIxEEEENS2_9IndexedDB15TransactionModeENS_8functionIFvbEEEE3$_3_0NS_9allocatorISI_EEFvvEE7destroyEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB13cursorAdvanceERNS2_16IDBCursorBackendERKNS2_22CursorAdvanceOperationENS_8functionIFvvEEEE4$_49_0NS_9allocatorISC_EESA_EclEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteRangeERNS2_21IDBTransactionBackendERKNS2_20DeleteRangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_40NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_21_4NS_9allocatorISG_EEFvvEED0Ev_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB5countERNS2_21IDBTransactionBackendERKNS2_14CountOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_38NS_9allocatorISG_EEFvvEE7__cloneEv_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_21_4NS_9allocatorISG_EEFvvEE7__cloneEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB16clearObjectStoreERNS2_21IDBTransactionBackendERKNS2_25ClearObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_42NS_9allocatorISG_EEFvvEEclEv_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_27__10_NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_28NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_6_0NS_9allocatorISR_EEFvvEE7__cloneEPNS0_6__baseISU_EE_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB21changeDatabaseVersionERNS2_21IDBTransactionBackendERKNS2_18IDBDatabaseBackend22VersionChangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_46NS_9allocatorISH_EEFvvEE7__cloneEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_25_8NS_9allocatorISG_EEFvvEED0Ev_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_7_1NS_9allocatorISR_EEFvvEED2Ev_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_9_3NS_9allocatorISR_EEFvvEE7__cloneEPNS0_6__baseISU_EE_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB23cursorPrefetchIterationERNS2_16IDBCursorBackendERKNS2_32CursorPrefetchIterationOperationENS_8functionIFvvEEEE4$_51NS_9allocatorISC_EESA_E7__cloneEPNS0_6__baseISA_EE_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB10openCursorERNS2_21IDBTransactionBackendERKNS2_19OpenCursorOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_37_0NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_27__10_NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_","__ZN7WebCore26IDBServerConnectionLevelDB11deleteRangeERNS_21IDBTransactionBackendERKNS_20DeleteRangeOperationENSt3__18functionIFvN3WTF10PassRefPtrINS_16IDBDatabaseErrorEEEEEE","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB33getOrEstablishIDBDatabaseMetadataENS_8functionIFvRKNS2_19IDBDatabaseMetadataEbEEEE3$_0NS_9allocatorISA_EES8_E18destroy_deallocateEv_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteIndexERNS2_21IDBTransactionBackendERKNS2_20DeleteIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_15_0NS_9allocatorISG_EEFvvEE7__cloneEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17deleteObjectStoreERNS2_21IDBTransactionBackendERKNS2_26DeleteObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_44NS_9allocatorISG_EEFvvEED2Ev_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB5countERNS2_21IDBTransactionBackendERKNS2_14CountOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_38NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_29_0NS_9allocatorISG_EEFvvEE7__cloneEv_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB5countERNS2_21IDBTransactionBackendERKNS2_14CountOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_39_0NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB13cursorIterateERNS2_16IDBCursorBackendERKNS2_24CursorIterationOperationENS_8functionIFvvEEEE4$_50NS_9allocatorISC_EESA_E7destroyEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB13cursorAdvanceERNS2_16IDBCursorBackendERKNS2_22CursorAdvanceOperationENS_8functionIFvvEEEE4$_48NS_9allocatorISC_EESA_ED2Ev_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_34_5NS_9allocatorISG_EEFvvEEclEv_","__ZN7WebCore26IDBServerConnectionLevelDB16clearObjectStoreERNS_21IDBTransactionBackendERKNS_25ClearObjectStoreOperationENSt3__18functionIFvN3WTF10PassRefPtrINS_16IDBDatabaseErrorEEEEEE","__ZN7WebCore26IDBServerConnectionLevelDB8isClosedEv","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_23_6NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB33getOrEstablishIDBDatabaseMetadataENS_8functionIFvRKNS2_19IDBDatabaseMetadataEbEEEE3$_0NS_9allocatorISA_EES8_E7destroyEv_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_19_2NS_9allocatorISG_EEFvvEE7__cloneEv_","__ZN7WebCore26IDBServerConnectionLevelDB10openCursorERNS_21IDBTransactionBackendERKNS_19OpenCursorOperationENSt3__18functionIFvN3WTF10PassRefPtrINS_16IDBDatabaseErrorEEEEEE","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB21changeDatabaseVersionERNS2_21IDBTransactionBackendERKNS2_18IDBDatabaseBackend22VersionChangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_46NS_9allocatorISH_EEFvvEE18destroy_deallocateEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB21changeDatabaseVersionERNS2_21IDBTransactionBackendERKNS2_18IDBDatabaseBackend22VersionChangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_47_0NS_9allocatorISH_EEFvvEED0Ev_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_32_3NS_9allocatorISG_EEFvvEED0Ev_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_24_7NS_9allocatorISG_EEFvvEE7destroyEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB13cursorAdvanceERNS2_16IDBCursorBackendERKNS2_22CursorAdvanceOperationENS_8functionIFvvEEEE4$_48NS_9allocatorISC_EESA_ED0Ev_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_22_5NS_9allocatorISG_EEFvvEE7__cloneEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_21_4NS_9allocatorISG_EEFvvEED2Ev_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_5NS_9allocatorISR_EEFvvEE18destroy_deallocateEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_22_5NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB23cursorPrefetchIterationERNS2_16IDBCursorBackendERKNS2_32CursorPrefetchIterationOperationENS_8functionIFvvEEEE4$_51NS_9allocatorISC_EESA_EclEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17createObjectStoreERNS2_21IDBTransactionBackendERKNS2_26CreateObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_11_0NS_9allocatorISG_EEFvvEEclEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11createIndexERNS2_21IDBTransactionBackendERKNS2_20CreateIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_13_0NS_9allocatorISG_EEFvvEED0Ev_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB13cursorAdvanceERNS2_16IDBCursorBackendERKNS2_22CursorAdvanceOperationENS_8functionIFvvEEEE4$_48NS_9allocatorISC_EESA_E18destroy_deallocateEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteIndexERNS2_21IDBTransactionBackendERKNS2_20DeleteIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_14NS_9allocatorISG_EEFvvEED2Ev_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_24_7NS_9allocatorISG_EEFvvEEclEv_","__ZN7WebCore26IDBServerConnectionLevelDB5closeEv","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_35_6NS_9allocatorISG_EEFvvEED0Ev_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_6_0NS_9allocatorISR_EEFvvEED0Ev_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB21changeDatabaseVersionERNS2_21IDBTransactionBackendERKNS2_18IDBDatabaseBackend22VersionChangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_46NS_9allocatorISH_EEFvvEE7__cloneEPNS0_6__baseISK_EE_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_31_2NS_9allocatorISG_EEFvvEED0Ev_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_5NS_9allocatorISR_EEFvvEE7destroyEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB15openTransactionExRKN3WTF7HashSetIxNS4_7IntHashIyEENS4_10HashTraitsIxEEEENS2_9IndexedDB15TransactionModeENS_8functionIFvbEEEE3$_2NS_9allocatorISI_EEFvvEED0Ev_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB33getOrEstablishIDBDatabaseMetadataENS_8functionIFvRKNS2_19IDBDatabaseMetadataEbEEEE3$_0NS_9allocatorISA_EES8_E7__cloneEPNS0_6__baseIS8_EE_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_19_2NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB13cursorIterateERNS2_16IDBCursorBackendERKNS2_24CursorIterationOperationENS_8functionIFvvEEEE4$_50NS_9allocatorISC_EESA_EclEv_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_23_6NS_9allocatorISG_EEFvvEE7__cloneEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB14deleteDatabaseERKN3WTF6StringENS_8functionIFvbEEEE3$_1NS_9allocatorISB_EES9_EclEOb_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_32_3NS_9allocatorISG_EEFvvEEclEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB15openTransactionExRKN3WTF7HashSetIxNS4_7IntHashIyEENS4_10HashTraitsIxEEEENS2_9IndexedDB15TransactionModeENS_8functionIFvbEEEE3$_3_0NS_9allocatorISI_EEFvvEEclEv_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17deleteObjectStoreERNS2_21IDBTransactionBackendERKNS2_26DeleteObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_45_0NS_9allocatorISG_EEFvvEE7__cloneEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17createObjectStoreERNS2_21IDBTransactionBackendERKNS2_26CreateObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_11_0NS_9allocatorISG_EEFvvEED0Ev_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11createIndexERNS2_21IDBTransactionBackendERKNS2_20CreateIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_13_0NS_9allocatorISG_EEFvvEED2Ev_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_34_5NS_9allocatorISG_EEFvvEED0Ev_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17createObjectStoreERNS2_21IDBTransactionBackendERKNS2_26CreateObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_10NS_9allocatorISG_EEFvvEEclEv_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17deleteObjectStoreERNS2_21IDBTransactionBackendERKNS2_26DeleteObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_45_0NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB13cursorIterateERNS2_16IDBCursorBackendERKNS2_24CursorIterationOperationENS_8functionIFvvEEEE4$_50NS_9allocatorISC_EESA_E18destroy_deallocateEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_21_4NS_9allocatorISG_EEFvvEEclEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB23cursorPrefetchIterationERNS2_16IDBCursorBackendERKNS2_32CursorPrefetchIterationOperationENS_8functionIFvvEEEE4$_51NS_9allocatorISC_EESA_ED0Ev_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_27__10_NS_9allocatorISG_EEFvvEE7destroyEv_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_16NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_20_3NS_9allocatorISG_EEFvvEE7destroyEv_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17createObjectStoreERNS2_21IDBTransactionBackendERKNS2_26CreateObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_10NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_25_8NS_9allocatorISG_EEFvvEE7__cloneEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_26_9NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_16NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_","__ZN7WebCore16IDBIndexMetadataC1ERKS0_","___ZNSt3__128__libcpp_compressed_pair_impIZN7WebCore26IDBServerConnectionLevelDB17deleteObjectStoreERNS1_21IDBTransactionBackendERKNS1_26DeleteObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS1_16IDBDatabaseErrorEEEEEEE4$_44NS_9allocatorISF_EELj2EED2Ev_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB15openTransactionExRKN3WTF7HashSetIxNS4_7IntHashIyEENS4_10HashTraitsIxEEEENS2_9IndexedDB15TransactionModeENS_8functionIFvbEEEE3$_2NS_9allocatorISI_EEFvvEED2Ev_","__ZN7WebCore26IDBServerConnectionLevelDB15openTransactionExRKN3WTF7HashSetIxNS1_7IntHashIyEENS1_10HashTraitsIxEEEENS_9IndexedDB15TransactionModeENSt3__18functionIFvbEEE","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_5NS_9allocatorISR_EEFvvEED0Ev_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB33getOrEstablishIDBDatabaseMetadataENS_8functionIFvRKNS2_19IDBDatabaseMetadataEbEEEE3$_0NS_9allocatorISA_EES8_EclES7_Ob_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17createObjectStoreERNS2_21IDBTransactionBackendERKNS2_26CreateObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_11_0NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_29_0NS_9allocatorISG_EEFvvEED2Ev_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17deleteObjectStoreERNS2_21IDBTransactionBackendERKNS2_26DeleteObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_44NS_9allocatorISG_EEFvvEED0Ev_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17deleteObjectStoreERNS2_21IDBTransactionBackendERKNS2_26DeleteObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_44NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteRangeERNS2_21IDBTransactionBackendERKNS2_20DeleteRangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_40NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteRangeERNS2_21IDBTransactionBackendERKNS2_20DeleteRangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_41_0NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17commitTransactionExNS_8functionIFvbEEEE3$_4NS_9allocatorIS7_EEFvvEE7__cloneEPNS0_6__baseISA_EE_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_28NS_9allocatorISG_EEFvvEE7__cloneEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB23cursorPrefetchIterationERNS2_16IDBCursorBackendERKNS2_32CursorPrefetchIterationOperationENS_8functionIFvvEEEE4$_51NS_9allocatorISC_EESA_E7destroyEv_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteRangeERNS2_21IDBTransactionBackendERKNS2_20DeleteRangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_41_0NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_30_1NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_34_5NS_9allocatorISG_EEFvvEED2Ev_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_26_9NS_9allocatorISG_EEFvvEE7__cloneEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_21_4NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_26_9NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_9_3NS_9allocatorISR_EEFvvEE7__cloneEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB5countERNS2_21IDBTransactionBackendERKNS2_14CountOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_38NS_9allocatorISG_EEFvvEE7destroyEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB21changeDatabaseVersionERNS2_21IDBTransactionBackendERKNS2_18IDBDatabaseBackend22VersionChangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_47_0NS_9allocatorISH_EEFvvEEclEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_7_1NS_9allocatorISR_EEFvvEE18destroy_deallocateEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_5NS_9allocatorISR_EEFvvEEclEv_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17createObjectStoreERNS2_21IDBTransactionBackendERKNS2_26CreateObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_11_0NS_9allocatorISG_EEFvvEE7__cloneEv_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_20_3NS_9allocatorISG_EEFvvEE7__cloneEv_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_31_2NS_9allocatorISG_EEFvvEE7__cloneEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_34_5NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB16clearObjectStoreERNS2_21IDBTransactionBackendERKNS2_25ClearObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_42NS_9allocatorISG_EEFvvEE7destroyEv_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_35_6NS_9allocatorISG_EEFvvEE7__cloneEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteRangeERNS2_21IDBTransactionBackendERKNS2_20DeleteRangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_40NS_9allocatorISG_EEFvvEED0Ev_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_6_0NS_9allocatorISR_EEFvvEE18destroy_deallocateEv_","__ZN3WTF9HashTableIxNS_12KeyValuePairIxNS_6RefPtrIN7WebCore28IDBBackingStoreCursorLevelDBEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIyEENS_7HashMapIxS5_SA_NS_10HashTraitsIxEENSC_IS5_EEE18KeyValuePairTraitsESD_E6rehashEiPS6_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_27__10_NS_9allocatorISG_EEFvvEE7__cloneEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17commitTransactionExNS_8functionIFvbEEEE3$_4NS_9allocatorIS7_EEFvvEE18destroy_deallocateEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_22_5NS_9allocatorISG_EEFvvEE7destroyEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_9_3NS_9allocatorISR_EEFvvEED2Ev_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteRangeERNS2_21IDBTransactionBackendERKNS2_20DeleteRangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_41_0NS_9allocatorISG_EEFvvEE7__cloneEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteIndexERNS2_21IDBTransactionBackendERKNS2_20DeleteIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_15_0NS_9allocatorISG_EEFvvEEclEv_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_33_4NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17createObjectStoreERNS2_21IDBTransactionBackendERKNS2_26CreateObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_11_0NS_9allocatorISG_EEFvvEE7destroyEv_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_21_4NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_32_3NS_9allocatorISG_EEFvvEE7destroyEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_35_6NS_9allocatorISG_EEFvvEEclEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB13cursorAdvanceERNS2_16IDBCursorBackendERKNS2_22CursorAdvanceOperationENS_8functionIFvvEEEE4$_49_0NS_9allocatorISC_EESA_E18destroy_deallocateEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_21_4NS_9allocatorISG_EEFvvEE7destroyEv_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_18_1NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteRangeERNS2_21IDBTransactionBackendERKNS2_20DeleteRangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_40NS_9allocatorISG_EEFvvEED2Ev_","__ZN7WebCore26IDBServerConnectionLevelDB16beginTransactionExNSt3__18functionIFvvEEE","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB21changeDatabaseVersionERNS2_21IDBTransactionBackendERKNS2_18IDBDatabaseBackend22VersionChangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_47_0NS_9allocatorISH_EEFvvEED2Ev_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_29_0NS_9allocatorISG_EEFvvEEclEv_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_18_1NS_9allocatorISG_EEFvvEE7__cloneEv_","__ZN7WebCore26IDBServerConnectionLevelDB17commitTransactionExNSt3__18functionIFvbEEE","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_7_1NS_9allocatorISR_EEFvvEEclEv_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_24_7NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_","__ZN7WebCore26IDBServerConnectionLevelDB14deleteDatabaseERKN3WTF6StringENSt3__18functionIFvbEEE","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB15openTransactionExRKN3WTF7HashSetIxNS4_7IntHashIyEENS4_10HashTraitsIxEEEENS2_9IndexedDB15TransactionModeENS_8functionIFvbEEEE3$_3_0NS_9allocatorISI_EEFvvEED2Ev_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB16clearObjectStoreERNS2_21IDBTransactionBackendERKNS2_25ClearObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_43_0NS_9allocatorISG_EEFvvEE7__cloneEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB10openCursorERNS2_21IDBTransactionBackendERKNS2_19OpenCursorOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_36NS_9allocatorISG_EEFvvEE7destroyEv_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB15openTransactionExRKN3WTF7HashSetIxNS4_7IntHashIyEENS4_10HashTraitsIxEEEENS2_9IndexedDB15TransactionModeENS_8functionIFvbEEEE3$_3_0NS_9allocatorISI_EEFvvEE7__cloneEPNS0_6__baseISL_EE_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_20_3NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB5countERNS2_21IDBTransactionBackendERKNS2_14CountOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_39_0NS_9allocatorISG_EEFvvEEclEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17commitTransactionExNS_8functionIFvbEEEE3$_4NS_9allocatorIS7_EEFvvEED0Ev_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB5countERNS2_21IDBTransactionBackendERKNS2_14CountOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_38NS_9allocatorISG_EEFvvEEclEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_19_2NS_9allocatorISG_EEFvvEED2Ev_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_29_0NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17commitTransactionExNS_8functionIFvbEEEE3$_4NS_9allocatorIS7_EEFvvEED2Ev_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_5NS_9allocatorISR_EEFvvEED2Ev_","__ZN7WebCore26IDBServerConnectionLevelDB23cursorPrefetchIterationERNS_16IDBCursorBackendERKNS_32CursorPrefetchIterationOperationENSt3__18functionIFvvEEE","__ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E3addINS_22IdentityHashTranslatorIS8_EERKxRKS4_EENS_18HashTableAddResultINS_17HashTableIteratorIxS4_S6_S8_SE_SB_EEEEOT0_OT1_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_17_0NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_","__ZN7WebCore26IDBServerConnectionLevelDB21changeDatabaseVersionERNS_21IDBTransactionBackendERKNS_18IDBDatabaseBackend22VersionChangeOperationENSt3__18functionIFvN3WTF10PassRefPtrINS_16IDBDatabaseErrorEEEEEE","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB33getOrEstablishIDBDatabaseMetadataENS_8functionIFvRKNS2_19IDBDatabaseMetadataEbEEEE3$_0NS_9allocatorISA_EES8_E7__cloneEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11createIndexERNS2_21IDBTransactionBackendERKNS2_20CreateIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_13_0NS_9allocatorISG_EEFvvEE7destroyEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB10openCursorERNS2_21IDBTransactionBackendERKNS2_19OpenCursorOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_37_0NS_9allocatorISG_EEFvvEE7destroyEv_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB10openCursorERNS2_21IDBTransactionBackendERKNS2_19OpenCursorOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_37_0NS_9allocatorISG_EEFvvEE7__cloneEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteIndexERNS2_21IDBTransactionBackendERKNS2_20DeleteIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_14NS_9allocatorISG_EEFvvEEclEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_31_2NS_9allocatorISG_EEFvvEE7destroyEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB14deleteDatabaseERKN3WTF6StringENS_8functionIFvbEEEE3$_1NS_9allocatorISB_EES9_E7destroyEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteRangeERNS2_21IDBTransactionBackendERKNS2_20DeleteRangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_41_0NS_9allocatorISG_EEFvvEE7destroyEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_29_0NS_9allocatorISG_EEFvvEED0Ev_","__ZN7WebCore26IDBServerConnectionLevelDB33getOrEstablishIDBDatabaseMetadataENSt3__18functionIFvRKNS_19IDBDatabaseMetadataEbEEE","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB14deleteDatabaseERKN3WTF6StringENS_8functionIFvbEEEE3$_1NS_9allocatorISB_EES9_ED0Ev_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB16clearObjectStoreERNS2_21IDBTransactionBackendERKNS2_25ClearObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_42NS_9allocatorISG_EEFvvEED2Ev_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteRangeERNS2_21IDBTransactionBackendERKNS2_20DeleteRangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_40NS_9allocatorISG_EEFvvEE7destroyEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_17_0NS_9allocatorISG_EEFvvEED2Ev_","__ZN7WebCore26IDBServerConnectionLevelDB3getERNS_21IDBTransactionBackendERKNS_12GetOperationENSt3__18functionIFvN3WTF10PassRefPtrINS_16IDBDatabaseErrorEEEEEE","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB13cursorIterateERNS2_16IDBCursorBackendERKNS2_24CursorIterationOperationENS_8functionIFvvEEEE4$_50NS_9allocatorISC_EESA_ED0Ev_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB16clearObjectStoreERNS2_21IDBTransactionBackendERKNS2_25ClearObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_42NS_9allocatorISG_EEFvvEED0Ev_","__ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E16lookupForWritingINS_22IdentityHashTranslatorIS8_EExEENSt3__14pairIPS4_bEERKT0_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB10openCursorERNS2_21IDBTransactionBackendERKNS2_19OpenCursorOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_37_0NS_9allocatorISG_EEFvvEED2Ev_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB14deleteDatabaseERKN3WTF6StringENS_8functionIFvbEEEE3$_1NS_9allocatorISB_EES9_E7__cloneEPNS0_6__baseIS9_EE_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB33getOrEstablishIDBDatabaseMetadataENS_8functionIFvRKNS2_19IDBDatabaseMetadataEbEEEE3$_0NS_9allocatorISA_EES8_ED2Ev_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_23_6NS_9allocatorISG_EEFvvEE7destroyEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_19_2NS_9allocatorISG_EEFvvEEclEv_","__ZN7WebCore16IDBIndexMetadataD1Ev","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11createIndexERNS2_21IDBTransactionBackendERKNS2_20CreateIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_13_0NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB13cursorAdvanceERNS2_16IDBCursorBackendERKNS2_22CursorAdvanceOperationENS_8functionIFvvEEEE4$_48NS_9allocatorISC_EESA_E7destroyEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB5countERNS2_21IDBTransactionBackendERKNS2_14CountOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_39_0NS_9allocatorISG_EEFvvEED2Ev_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_27__10_NS_9allocatorISG_EEFvvEED0Ev_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB33getOrEstablishIDBDatabaseMetadataENS_8functionIFvRKNS2_19IDBDatabaseMetadataEbEEEE3$_0NS_9allocatorISA_EES8_ED0Ev_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB15openTransactionExRKN3WTF7HashSetIxNS4_7IntHashIyEENS4_10HashTraitsIxEEEENS2_9IndexedDB15TransactionModeENS_8functionIFvbEEEE3$_3_0NS_9allocatorISI_EEFvvEE7__cloneEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_34_5NS_9allocatorISG_EEFvvEE7destroyEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_8_2NS_9allocatorISR_EEFvvEE18destroy_deallocateEv_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB16clearObjectStoreERNS2_21IDBTransactionBackendERKNS2_25ClearObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_43_0NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB13cursorAdvanceERNS2_16IDBCursorBackendERKNS2_22CursorAdvanceOperationENS_8functionIFvvEEEE4$_49_0NS_9allocatorISC_EESA_ED2Ev_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB15openTransactionExRKN3WTF7HashSetIxNS4_7IntHashIyEENS4_10HashTraitsIxEEEENS2_9IndexedDB15TransactionModeENS_8functionIFvbEEEE3$_2NS_9allocatorISI_EEFvvEEclEv_","__ZN7WebCore26IDBServerConnectionLevelDBD0Ev","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_23_6NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_31_2NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteRangeERNS2_21IDBTransactionBackendERKNS2_20DeleteRangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_41_0NS_9allocatorISG_EEFvvEED0Ev_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_8_2NS_9allocatorISR_EEFvvEE7__cloneEv_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_35_6NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB15openTransactionExRKN3WTF7HashSetIxNS4_7IntHashIyEENS4_10HashTraitsIxEEEENS2_9IndexedDB15TransactionModeENS_8functionIFvbEEEE3$_2NS_9allocatorISI_EEFvvEE7__cloneEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_9_3NS_9allocatorISR_EEFvvEE7destroyEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11createIndexERNS2_21IDBTransactionBackendERKNS2_20CreateIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_13_0NS_9allocatorISG_EEFvvEEclEv_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB16clearObjectStoreERNS2_21IDBTransactionBackendERKNS2_25ClearObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_42NS_9allocatorISG_EEFvvEE7__cloneEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB16clearObjectStoreERNS2_21IDBTransactionBackendERKNS2_25ClearObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_43_0NS_9allocatorISG_EEFvvEED0Ev_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_26_9NS_9allocatorISG_EEFvvEE7destroyEv_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB13cursorAdvanceERNS2_16IDBCursorBackendERKNS2_22CursorAdvanceOperationENS_8functionIFvvEEEE4$_49_0NS_9allocatorISC_EESA_E7__cloneEv_","__ZN7WebCore26IDBServerConnectionLevelDB16resetTransactionExNSt3__18functionIFvvEEE","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB16clearObjectStoreERNS2_21IDBTransactionBackendERKNS2_25ClearObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_43_0NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB21changeDatabaseVersionERNS2_21IDBTransactionBackendERKNS2_18IDBDatabaseBackend22VersionChangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_46NS_9allocatorISH_EEFvvEED0Ev_","__ZN7WebCore26IDBServerConnectionLevelDB17createObjectStoreERNS_21IDBTransactionBackendERKNS_26CreateObjectStoreOperationENSt3__18functionIFvN3WTF10PassRefPtrINS_16IDBDatabaseErrorEEEEEE","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_6_0NS_9allocatorISR_EEFvvEE7__cloneEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_28NS_9allocatorISG_EEFvvEED0Ev_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_33_4NS_9allocatorISG_EEFvvEED2Ev_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB10openCursorERNS2_21IDBTransactionBackendERKNS2_19OpenCursorOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_37_0NS_9allocatorISG_EEFvvEEclEv_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_30_1NS_9allocatorISG_EEFvvEE7__cloneEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_22_5NS_9allocatorISG_EEFvvEED0Ev_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_26_9NS_9allocatorISG_EEFvvEED2Ev_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17deleteObjectStoreERNS2_21IDBTransactionBackendERKNS2_26DeleteObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_45_0NS_9allocatorISG_EEFvvEED2Ev_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_28NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB21changeDatabaseVersionERNS2_21IDBTransactionBackendERKNS2_18IDBDatabaseBackend22VersionChangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_47_0NS_9allocatorISH_EEFvvEE7destroyEv_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB10openCursorERNS2_21IDBTransactionBackendERKNS2_19OpenCursorOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_36NS_9allocatorISG_EEFvvEE7__cloneEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB15openTransactionExRKN3WTF7HashSetIxNS4_7IntHashIyEENS4_10HashTraitsIxEEEENS2_9IndexedDB15TransactionModeENS_8functionIFvbEEEE3$_3_0NS_9allocatorISI_EEFvvEE18destroy_deallocateEv_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_30_1NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB23cursorPrefetchIterationERNS2_16IDBCursorBackendERKNS2_32CursorPrefetchIterationOperationENS_8functionIFvvEEEE4$_51NS_9allocatorISC_EESA_ED2Ev_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_28NS_9allocatorISG_EEFvvEED2Ev_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_6_0NS_9allocatorISR_EEFvvEED2Ev_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteRangeERNS2_21IDBTransactionBackendERKNS2_20DeleteRangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_40NS_9allocatorISG_EEFvvEEclEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11createIndexERNS2_21IDBTransactionBackendERKNS2_20CreateIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_12NS_9allocatorISG_EEFvvEED0Ev_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_8_2NS_9allocatorISR_EEFvvEEclEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB10openCursorERNS2_21IDBTransactionBackendERKNS2_19OpenCursorOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_37_0NS_9allocatorISG_EEFvvEED0Ev_","__ZN7WebCore26IDBServerConnectionLevelDB13cursorAdvanceERNS_16IDBCursorBackendERKNS_22CursorAdvanceOperationENSt3__18functionIFvvEEE","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_33_4NS_9allocatorISG_EEFvvEE7destroyEv_","__ZN3WTF7HashMapIxNS_6RefPtrIN7WebCore28IDBBackingStoreCursorLevelDBEEENS_7IntHashIyEENS_10HashTraitsIxEENS7_IS4_EEE6removeERKx","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17createObjectStoreERNS2_21IDBTransactionBackendERKNS2_26CreateObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_10NS_9allocatorISG_EEFvvEE7destroyEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_29_0NS_9allocatorISG_EEFvvEE7destroyEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB10openCursorERNS2_21IDBTransactionBackendERKNS2_19OpenCursorOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_36NS_9allocatorISG_EEFvvEEclEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17deleteObjectStoreERNS2_21IDBTransactionBackendERKNS2_26DeleteObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_44NS_9allocatorISG_EEFvvEEclEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11createIndexERNS2_21IDBTransactionBackendERKNS2_20CreateIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_12NS_9allocatorISG_EEFvvEED2Ev_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_33_4NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_22_5NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_23_6NS_9allocatorISG_EEFvvEEclEv_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_5NS_9allocatorISR_EEFvvEE7__cloneEPNS0_6__baseISU_EE_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteIndexERNS2_21IDBTransactionBackendERKNS2_20DeleteIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_14NS_9allocatorISG_EEFvvEED0Ev_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17deleteObjectStoreERNS2_21IDBTransactionBackendERKNS2_26DeleteObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_44NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteIndexERNS2_21IDBTransactionBackendERKNS2_20DeleteIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_14NS_9allocatorISG_EEFvvEE7__cloneEv_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_7_1NS_9allocatorISR_EEFvvEE7__cloneEv_","__ZN7WebCore26IDBServerConnectionLevelDB19rollbackTransactionExNSt3__18functionIFvvEEE","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_9_3NS_9allocatorISR_EEFvvEEclEv_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB23cursorPrefetchIterationERNS2_16IDBCursorBackendERKNS2_32CursorPrefetchIterationOperationENS_8functionIFvvEEEE4$_51NS_9allocatorISC_EESA_E7__cloneEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17createObjectStoreERNS2_21IDBTransactionBackendERKNS2_26CreateObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_11_0NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB13cursorAdvanceERNS2_16IDBCursorBackendERKNS2_22CursorAdvanceOperationENS_8functionIFvvEEEE4$_49_0NS_9allocatorISC_EESA_E7__cloneEPNS0_6__baseISA_EE_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_34_5NS_9allocatorISG_EEFvvEE7__cloneEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_28NS_9allocatorISG_EEFvvEEclEv_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB13cursorAdvanceERNS2_16IDBCursorBackendERKNS2_22CursorAdvanceOperationENS_8functionIFvvEEEE4$_48NS_9allocatorISC_EESA_E7__cloneEPNS0_6__baseISA_EE_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_7_1NS_9allocatorISR_EEFvvEE7destroyEv_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17commitTransactionExNS_8functionIFvbEEEE3$_4NS_9allocatorIS7_EEFvvEE7__cloneEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB15openTransactionExRKN3WTF7HashSetIxNS4_7IntHashIyEENS4_10HashTraitsIxEEEENS2_9IndexedDB15TransactionModeENS_8functionIFvbEEEE3$_2NS_9allocatorISI_EEFvvEE18destroy_deallocateEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_16NS_9allocatorISG_EEFvvEE7destroyEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_32_3NS_9allocatorISG_EEFvvEED2Ev_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB10openCursorERNS2_21IDBTransactionBackendERKNS2_19OpenCursorOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_36NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB16clearObjectStoreERNS2_21IDBTransactionBackendERKNS2_25ClearObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_43_0NS_9allocatorISG_EEFvvEED2Ev_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17deleteObjectStoreERNS2_21IDBTransactionBackendERKNS2_26DeleteObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_45_0NS_9allocatorISG_EEFvvEE7destroyEv_","__ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEEaSERKS3_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_24_7NS_9allocatorISG_EEFvvEE7__cloneEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_18_1NS_9allocatorISG_EEFvvEE7destroyEv_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_25_8NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17createObjectStoreERNS2_21IDBTransactionBackendERKNS2_26CreateObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_10NS_9allocatorISG_EEFvvEED0Ev_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17createObjectStoreERNS2_21IDBTransactionBackendERKNS2_26CreateObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_11_0NS_9allocatorISG_EEFvvEED2Ev_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_33_4NS_9allocatorISG_EEFvvEE7__cloneEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB15openTransactionExRKN3WTF7HashSetIxNS4_7IntHashIyEENS4_10HashTraitsIxEEEENS2_9IndexedDB15TransactionModeENS_8functionIFvbEEEE3$_2NS_9allocatorISI_EEFvvEE7destroyEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_30_1NS_9allocatorISG_EEFvvEED2Ev_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_33_4NS_9allocatorISG_EEFvvEEclEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_16NS_9allocatorISG_EEFvvEED2Ev_","__ZN3WTF6VectorINS_6RefPtrIN7WebCore21IDBIndexWriterLevelDBEEELj0ENS_15CrashOnOverflowEED1Ev","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_31_2NS_9allocatorISG_EEFvvEED2Ev_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_16NS_9allocatorISG_EEFvvEE7__cloneEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_17_0NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17deleteObjectStoreERNS2_21IDBTransactionBackendERKNS2_26DeleteObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_45_0NS_9allocatorISG_EEFvvEEclEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_31_2NS_9allocatorISG_EEFvvEEclEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17commitTransactionExNS_8functionIFvbEEEE3$_4NS_9allocatorIS7_EEFvvEE7destroyEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB14deleteDatabaseERKN3WTF6StringENS_8functionIFvbEEEE3$_1NS_9allocatorISB_EES9_ED2Ev_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_25_8NS_9allocatorISG_EEFvvEED2Ev_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB5countERNS2_21IDBTransactionBackendERKNS2_14CountOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_39_0NS_9allocatorISG_EEFvvEE7destroyEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_6_0NS_9allocatorISR_EEFvvEEclEv_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_8_2NS_9allocatorISR_EEFvvEE7__cloneEPNS0_6__baseISU_EE_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB13cursorAdvanceERNS2_16IDBCursorBackendERKNS2_22CursorAdvanceOperationENS_8functionIFvvEEEE4$_48NS_9allocatorISC_EESA_EclEv_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB13cursorAdvanceERNS2_16IDBCursorBackendERKNS2_22CursorAdvanceOperationENS_8functionIFvvEEEE4$_48NS_9allocatorISC_EESA_E7__cloneEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_22_5NS_9allocatorISG_EEFvvEED2Ev_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17deleteObjectStoreERNS2_21IDBTransactionBackendERKNS2_26DeleteObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_45_0NS_9allocatorISG_EEFvvEED0Ev_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteIndexERNS2_21IDBTransactionBackendERKNS2_20DeleteIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_15_0NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_16NS_9allocatorISG_EEFvvEED0Ev_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteIndexERNS2_21IDBTransactionBackendERKNS2_20DeleteIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_15_0NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_","__ZN7WebCore16IDBIndexMetadataaSERKS0_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_18_1NS_9allocatorISG_EEFvvEEclEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB16clearObjectStoreERNS2_21IDBTransactionBackendERKNS2_25ClearObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_43_0NS_9allocatorISG_EEFvvEEclEv_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_32_3NS_9allocatorISG_EEFvvEE7__cloneEv_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_5NS_9allocatorISR_EEFvvEE7__cloneEv_","__ZN7WebCore26IDBServerConnectionLevelDB11createIndexERNS_21IDBTransactionBackendERKNS_20CreateIndexOperationENSt3__18functionIFvN3WTF10PassRefPtrINS_16IDBDatabaseErrorEEEEEE","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_30_1NS_9allocatorISG_EEFvvEEclEv_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteIndexERNS2_21IDBTransactionBackendERKNS2_20DeleteIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_14NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_","__ZNK7WebCore12GetOperation7keyPathEv","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_35_6NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_35_6NS_9allocatorISG_EEFvvEED2Ev_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_22_5NS_9allocatorISG_EEFvvEEclEv_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_7_1NS_9allocatorISR_EEFvvEE7__cloneEPNS0_6__baseISU_EE_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_25_8NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB14deleteDatabaseERKN3WTF6StringENS_8functionIFvbEEEE3$_1NS_9allocatorISB_EES9_E7__cloneEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_26_9NS_9allocatorISG_EEFvvEED0Ev_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11createIndexERNS2_21IDBTransactionBackendERKNS2_20CreateIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_12NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17commitTransactionExNS_8functionIFvbEEEE3$_4NS_9allocatorIS7_EEFvvEEclEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_33_4NS_9allocatorISG_EEFvvEED0Ev_","__ZN7WebCore26IDBServerConnectionLevelDBD2Ev","__ZN7WebCore22IDBObjectStoreMetadataC1ERKS0_","__ZN3WTF9HashTableIxNS_12KeyValuePairIxNS_6RefPtrIN7WebCore28IDBBackingStoreCursorLevelDBEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIyEENS_7HashMapIxS5_SA_NS_10HashTraitsIxEENSC_IS5_EEE18KeyValuePairTraitsESD_E16lookupForWritingINS_22IdentityHashTranslatorISA_EExEENSt3__14pairIPS6_bEERKT0_","__ZN7WebCore26IDBServerConnectionLevelDB5countERNS_21IDBTransactionBackendERKNS_14CountOperationENSt3__18functionIFvN3WTF10PassRefPtrINS_16IDBDatabaseErrorEEEEEE","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_17_0NS_9allocatorISG_EEFvvEE7__cloneEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_25_8NS_9allocatorISG_EEFvvEE7destroyEv_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11createIndexERNS2_21IDBTransactionBackendERKNS2_20CreateIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_13_0NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_9_3NS_9allocatorISR_EEFvvEE18destroy_deallocateEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11createIndexERNS2_21IDBTransactionBackendERKNS2_20CreateIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_12NS_9allocatorISG_EEFvvEEclEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_20_3NS_9allocatorISG_EEFvvEED0Ev_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_8_2NS_9allocatorISR_EEFvvEE7destroyEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_18_1NS_9allocatorISG_EEFvvEED2Ev_","_memcpy","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_19_2NS_9allocatorISG_EEFvvEE7destroyEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB5countERNS2_21IDBTransactionBackendERKNS2_14CountOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_38NS_9allocatorISG_EEFvvEED2Ev_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_26_9NS_9allocatorISG_EEFvvEEclEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17createObjectStoreERNS2_21IDBTransactionBackendERKNS2_26CreateObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_10NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_34_5NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB21changeDatabaseVersionERNS2_21IDBTransactionBackendERKNS2_18IDBDatabaseBackend22VersionChangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_47_0NS_9allocatorISH_EEFvvEE18destroy_deallocateEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_25_8NS_9allocatorISG_EEFvvEEclEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB16clearObjectStoreERNS2_21IDBTransactionBackendERKNS2_25ClearObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_43_0NS_9allocatorISG_EEFvvEE7destroyEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_20_3NS_9allocatorISG_EEFvvEED2Ev_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB13cursorAdvanceERNS2_16IDBCursorBackendERKNS2_22CursorAdvanceOperationENS_8functionIFvvEEEE4$_49_0NS_9allocatorISC_EESA_E7destroyEv_","__ZN7WebCore26IDBServerConnectionLevelDB3putERNS_21IDBTransactionBackendERKNS_12PutOperationENSt3__18functionIFvN3WTF10PassRefPtrINS_16IDBDatabaseErrorEEEEEE","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB21changeDatabaseVersionERNS2_21IDBTransactionBackendERKNS2_18IDBDatabaseBackend22VersionChangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_46NS_9allocatorISH_EEFvvEE7destroyEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB5countERNS2_21IDBTransactionBackendERKNS2_14CountOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_38NS_9allocatorISG_EEFvvEED0Ev_","__ZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS_22IDBObjectStoreMetadataERNS_6IDBKeyERKN3WTF6VectorIxLj0ENS6_15CrashOnOverflowEEERKNS7_INS7_INS6_6RefPtrIS4_EELj0ES8_EELj0ES8_EENSt3__18functionIFvNS6_10PassRefPtrINS_16IDBDatabaseErrorEEEEEE","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_19_2NS_9allocatorISG_EEFvvEED0Ev_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_24_7NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB16clearObjectStoreERNS2_21IDBTransactionBackendERKNS2_25ClearObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_42NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB15openTransactionExRKN3WTF7HashSetIxNS4_7IntHashIyEENS4_10HashTraitsIxEEEENS2_9IndexedDB15TransactionModeENS_8functionIFvbEEEE3$_3_0NS_9allocatorISI_EEFvvEED0Ev_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteRangeERNS2_21IDBTransactionBackendERKNS2_20DeleteRangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_40NS_9allocatorISG_EEFvvEE7__cloneEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_23_6NS_9allocatorISG_EEFvvEED0Ev_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_30_1NS_9allocatorISG_EEFvvEED0Ev_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_24_7NS_9allocatorISG_EEFvvEED0Ev_","__ZN7WebCore26IDBServerConnectionLevelDB13cursorIterateERNS_16IDBCursorBackendERKNS_24CursorIterationOperationENSt3__18functionIFvvEEE","__ZN7WebCore26IDBServerConnectionLevelDB17deleteObjectStoreERNS_21IDBTransactionBackendERKNS_26DeleteObjectStoreOperationENSt3__18functionIFvN3WTF10PassRefPtrINS_16IDBDatabaseErrorEEEEEE","__ZN7WebCore26IDBServerConnectionLevelDB19cursorPrefetchResetERNS_16IDBCursorBackendEi","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteIndexERNS2_21IDBTransactionBackendERKNS2_20DeleteIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_14NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB5countERNS2_21IDBTransactionBackendERKNS2_14CountOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_39_0NS_9allocatorISG_EEFvvEE7__cloneEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_18_1NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17deleteObjectStoreERNS2_21IDBTransactionBackendERKNS2_26DeleteObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_45_0NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_20_3NS_9allocatorISG_EEFvvEEclEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB5countERNS2_21IDBTransactionBackendERKNS2_14CountOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_39_0NS_9allocatorISG_EEFvvEED0Ev_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_30_1NS_9allocatorISG_EEFvvEE7destroyEv_","__ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E6rehashEiPS4_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_6_0NS_9allocatorISR_EEFvvEE7destroyEv_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB13cursorIterateERNS2_16IDBCursorBackendERKNS2_24CursorIterationOperationENS_8functionIFvvEEEE4$_50NS_9allocatorISC_EESA_E7__cloneEPNS0_6__baseISA_EE_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB5countERNS2_21IDBTransactionBackendERKNS2_14CountOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_38NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_9_3NS_9allocatorISR_EEFvvEED0Ev_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17createObjectStoreERNS2_21IDBTransactionBackendERKNS2_26CreateObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_10NS_9allocatorISG_EEFvvEED2Ev_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_32_3NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_24_7NS_9allocatorISG_EEFvvEED2Ev_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteIndexERNS2_21IDBTransactionBackendERKNS2_20DeleteIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_15_0NS_9allocatorISG_EEFvvEE7destroyEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB21changeDatabaseVersionERNS2_21IDBTransactionBackendERKNS2_18IDBDatabaseBackend22VersionChangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_46NS_9allocatorISH_EEFvvEEclEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB21changeDatabaseVersionERNS2_21IDBTransactionBackendERKNS2_18IDBDatabaseBackend22VersionChangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_46NS_9allocatorISH_EEFvvEED2Ev_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_31_2NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_","__ZN7WebCore26IDBServerConnectionLevelDB11deleteIndexERNS_21IDBTransactionBackendERKNS_20DeleteIndexOperationENSt3__18functionIFvN3WTF10PassRefPtrINS_16IDBDatabaseErrorEEEEEE","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_32_3NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_","__ZN3WTF9HashTableIxNS_12KeyValuePairIxNS_6RefPtrIN7WebCore28IDBBackingStoreCursorLevelDBEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIyEENS_7HashMapIxS5_SA_NS_10HashTraitsIxEENSC_IS5_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKxNS_10PassRefPtrIS4_EEEENS_18HashTableAddResultINS_17HashTableIteratorIxS6_S8_SA_SG_SD_EEEEOT0_OT1_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17deleteObjectStoreERNS2_21IDBTransactionBackendERKNS2_26DeleteObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_44NS_9allocatorISG_EEFvvEE7destroyEv_","_memset","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB13cursorIterateERNS2_16IDBCursorBackendERKNS2_24CursorIterationOperationENS_8functionIFvvEEEE4$_50NS_9allocatorISC_EESA_ED2Ev_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_8_2NS_9allocatorISR_EEFvvEED0Ev_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB10openCursorERNS2_21IDBTransactionBackendERKNS2_19OpenCursorOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_37_0NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_17_0NS_9allocatorISG_EEFvvEE7destroyEv_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_20_3NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_35_6NS_9allocatorISG_EEFvvEE7destroyEv_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB16clearObjectStoreERNS2_21IDBTransactionBackendERKNS2_25ClearObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_42NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB13cursorAdvanceERNS2_16IDBCursorBackendERKNS2_22CursorAdvanceOperationENS_8functionIFvvEEEE4$_49_0NS_9allocatorISC_EESA_ED0Ev_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB14deleteDatabaseERKN3WTF6StringENS_8functionIFvbEEEE3$_1NS_9allocatorISB_EES9_E18destroy_deallocateEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11createIndexERNS2_21IDBTransactionBackendERKNS2_20CreateIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_12NS_9allocatorISG_EEFvvEE7destroyEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB12setIndexKeysExxxRKNS2_22IDBObjectStoreMetadataERNS2_6IDBKeyERKN3WTF6VectorIxLj0ENS9_15CrashOnOverflowEEERKNSA_INSA_INS9_6RefPtrIS7_EELj0ESB_EELj0ESB_EENS_8functionIFvNS9_10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE3$_8_2NS_9allocatorISR_EEFvvEED2Ev_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17createObjectStoreERNS2_21IDBTransactionBackendERKNS2_26CreateObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_10NS_9allocatorISG_EEFvvEE7__cloneEv_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB21changeDatabaseVersionERNS2_21IDBTransactionBackendERKNS2_18IDBDatabaseBackend22VersionChangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_47_0NS_9allocatorISH_EEFvvEE7__cloneEPNS0_6__baseISK_EE_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteIndexERNS2_21IDBTransactionBackendERKNS2_20DeleteIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_14NS_9allocatorISG_EEFvvEE7destroyEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteIndexERNS2_21IDBTransactionBackendERKNS2_20DeleteIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_15_0NS_9allocatorISG_EEFvvEED2Ev_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteIndexERNS2_21IDBTransactionBackendERKNS2_20DeleteIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_15_0NS_9allocatorISG_EEFvvEED0Ev_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteRangeERNS2_21IDBTransactionBackendERKNS2_20DeleteRangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_41_0NS_9allocatorISG_EEFvvEEclEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_28NS_9allocatorISG_EEFvvEE7destroyEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_16NS_9allocatorISG_EEFvvEEclEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_23_6NS_9allocatorISG_EEFvvEED2Ev_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11createIndexERNS2_21IDBTransactionBackendERKNS2_20CreateIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_12NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB21changeDatabaseVersionERNS2_21IDBTransactionBackendERKNS2_18IDBDatabaseBackend22VersionChangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_47_0NS_9allocatorISH_EEFvvEE7__cloneEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB10openCursorERNS2_21IDBTransactionBackendERKNS2_19OpenCursorOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_36NS_9allocatorISG_EEFvvEED2Ev_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_17_0NS_9allocatorISG_EEFvvEEclEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11deleteRangeERNS2_21IDBTransactionBackendERKNS2_20DeleteRangeOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_41_0NS_9allocatorISG_EEFvvEED2Ev_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_18_1NS_9allocatorISG_EEFvvEED0Ev_","__ZN7WebCore26IDBServerConnectionLevelDBC2ERKN3WTF6StringEPNS_22IDBBackingStoreLevelDBE","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB10openCursorERNS2_21IDBTransactionBackendERKNS2_19OpenCursorOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_36NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11createIndexERNS2_21IDBTransactionBackendERKNS2_20CreateIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_12NS_9allocatorISG_EEFvvEE7__cloneEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_27__10_NS_9allocatorISG_EEFvvEEclEv_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB17deleteObjectStoreERNS2_21IDBTransactionBackendERKNS2_26DeleteObjectStoreOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_44NS_9allocatorISG_EEFvvEE7__cloneEv_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3putERNS2_21IDBTransactionBackendERKNS2_12PutOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_29_0NS_9allocatorISG_EEFvvEE7__cloneEPNS0_6__baseISJ_EE_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB11createIndexERNS2_21IDBTransactionBackendERKNS2_20CreateIndexOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_13_0NS_9allocatorISG_EEFvvEE7__cloneEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB5countERNS2_21IDBTransactionBackendERKNS2_14CountOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_39_0NS_9allocatorISG_EEFvvEE18destroy_deallocateEv_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB10openCursorERNS2_21IDBTransactionBackendERKNS2_19OpenCursorOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_36NS_9allocatorISG_EEFvvEED0Ev_","___ZNKSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB15openTransactionExRKN3WTF7HashSetIxNS4_7IntHashIyEENS4_10HashTraitsIxEEEENS2_9IndexedDB15TransactionModeENS_8functionIFvbEEEE3$_2NS_9allocatorISI_EEFvvEE7__cloneEPNS0_6__baseISL_EE_","___ZNSt3__110__function6__funcIZN7WebCore26IDBServerConnectionLevelDB3getERNS2_21IDBTransactionBackendERKNS2_12GetOperationENS_8functionIFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEEE4$_27__10_NS_9allocatorISG_EEFvvEED2Ev_","_i64Add","_i64Subtract","_bitshift64Shl","_bitshift64Lshr","_bitshift64Ashr","_llvm_ctlz_i32","_llvm_cttz_i32"]

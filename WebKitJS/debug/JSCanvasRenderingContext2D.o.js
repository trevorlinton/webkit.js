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
H_BASE = parentModule["_malloc"](3144 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 3144;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore37JSCanvasRenderingContext2DConstructorC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectE;
var __ZN7WebCore26JSCanvasRenderingContext2DC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_24CanvasRenderingContext2DEEE;
/* memory initializer */ allocate([108,105,110,101,67,97,112,0,108,105,110,101,87,105,100,116,104,0,0,0,0,0,0,0,119,101,98,107,105,116,71,101,116,73,109,97,103,101,68,97,116,97,72,68,0,0,0,0,103,101,116,73,109,97,103,101,68,97,116,97,0,0,0,0,99,114,101,97,116,101,73,109,97,103,101,68,97,116,97,0,99,114,101,97,116,101,80,97,116,116,101,114,110,0,0,0,119,101,98,107,105,116,80,117,116,73,109,97,103,101,68,97,116,97,72,68,0,0,0,0,112,117,116,73,109,97,103,101,68,97,116,97,0,0,0,0,115,101,116,83,104,97,100,111,119,0,0,0,0,0,0,0,103,108,111,98,97,108,67,111,109,112,111,115,105,116,101,79,112,101,114,97,116,105,111,110,0,0,0,0,0,0,0,0,100,114,97,119,73,109,97,103,101,70,114,111,109,82,101,99,116,0,0,0,0,0,0,0,100,114,97,119,73,109,97,103,101,0,0,0,0,0,0,0,115,116,114,111,107,101,82,101,99,116,0,0,0,0,0,0,115,101,116,70,105,108,108,67,111,108,111,114,0,0,0,0,115,101,116,83,116,114,111,107,101,67,111,108,111,114,0,0,115,116,114,111,107,101,84,101,120,116,0,0,0,0,0,0,102,105,108,108,84,101,120,116,0,0,0,0,0,0,0,0,99,108,101,97,114,83,104,97,100,111,119,0,0,0,0,0,115,101,116,77,105,116,101,114,76,105,109,105,116,0,0,0,115,101,116,76,105,110,101,74,111,105,110,0,0,0,0,0,103,108,111,98,97,108,65,108,112,104,97,0,0,0,0,0,115,101,116,76,105,110,101,67,97,112,0,0,0,0,0,0,115,101,116,76,105,110,101,87,105,100,116,104,0,0,0,0,115,101,116,67,111,109,112,111,115,105,116,101,79,112,101,114,97,116,105,111,110,0,0,0,115,101,116,65,108,112,104,97,0,0,0,0,0,0,0,0,109,101,97,115,117,114,101,84,101,120,116,0,0,0,0,0,105,115,80,111,105,110,116,73,110,83,116,114,111,107,101,0,105,115,80,111,105,110,116,73,110,80,97,116,104,0,0,0,99,108,105,112,0,0,0,0,115,116,114,111,107,101,0,0,102,105,108,108,0,0,0,0,86,97,108,117,101,32,105,115,32,110,111,116,32,97,32,115,101,113,117,101,110,99,101,0,97,114,99,0,0,0,0,0,114,101,99,116,0,0,0,0,97,114,99,84,111,0,0,0,98,101,122,105,101,114,67,117,114,118,101,84,111,0,0,0,113,117,97,100,114,97,116,105,99,67,117,114,118,101,84,111,0,0,0,0,0,0,0,0,108,105,110,101,84,111,0,0,109,111,118,101,84,111,0,0,99,108,111,115,101,80,97,116,104,0,0,0,0,0,0,0,98,101,103,105,110,80,97,116,104,0,0,0,0,0,0,0,102,105,108,108,82,101,99,116,0,0,0,0,0,0,0,0,101,118,101,110,111,100,100,0,99,108,101,97,114,82,101,99,116,0,0,0,0,0,0,0,103,101,116,76,105,110,101,68,97,115,104,0,0,0,0,0,115,101,116,76,105,110,101,68,97,115,104,0,0,0,0,0,99,114,101,97,116,101,82,97,100,105,97,108,71,114,97,100,105,101,110,116,0,0,0,0,99,114,101,97,116,101,76,105,110,101,97,114,71,114,97,100,105,101,110,116,0,0,0,0,115,101,116,84,114,97,110,115,102,111,114,109,0,0,0,0,116,114,97,110,115,102,111,114,109,0,0,0,0,0,0,0,116,114,97,110,115,108,97,116,101,0,0,0,0,0,0,0,114,111,116,97,116,101,0,0,115,99,97,108,101,0,0,0,110,111,110,122,101,114,111,0,114,101,115,116,111,114,101,0,115,97,118,101,0,0,0,0,99,111,110,115,116,114,117,99,116,111,114,0,0,0,0,0,119,101,98,107,105,116,73,109,97,103,101,83,109,111,111,116,104,105,110,103,69,110,97,98,108,101,100,0,0,0,0,0,119,101,98,107,105,116,66,97,99,107,105,110,103,83,116,111,114,101,80,105,120,101,108,82,97,116,105,111,0,0,0,0,102,105,108,108,83,116,121,108,101,0,0,0,0,0,0,0,115,116,114,111,107,101,83,116,121,108,101,0,0,0,0,0,116,101,120,116,66,97,115,101,108,105,110,101,0,0,0,0,116,101,120,116,65,108,105,103,110,0,0,0,0,0,0,0,102,111,110,116,0,0,0,0,67,97,110,118,97,115,82,101,110,100,101,114,105,110,103,67,111,110,116,101,120,116,50,68,0,0,0,0,0,0,0,0,99,117,114,114,101,110,116,80,97,116,104,0,0,0,0,0,119,101,98,107,105,116,76,105,110,101,68,97,115,104,79,102,102,115,101,116,0,0,0,0,119,101,98,107,105,116,76,105,110,101,68,97,115,104,0,0,108,105,110,101,68,97,115,104,79,102,102,115,101,116,0,0,115,104,97,100,111,119,67,111,108,111,114,0,0,0,0,0,115,104,97,100,111,119,66,108,117,114,0,0,0,0,0,0,115,104,97,100,111,119,79,102,102,115,101,116,89,0,0,0,115,104,97,100,111,119,79,102,102,115,101,116,88,0,0,0,109,105,116,101,114,76,105,109,105,116,0,0,0,0,0,0,108,105,110,101,74,111,105,110,0,0,0,0,0,0,0,0,67,97,110,118,97,115,82,101,110,100,101,114,105,110,103,67,111,110,116,101,120,116,50,68,80,114,111,116,111,116,121,112,101,0,0,0,0,0,0,0,67,97,110,118,97,115,82,101,110,100,101,114,105,110,103,67,111,110,116,101,120,116,50,68,67,111,110,115,116,114,117,99,116,111,114,0,0,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,1,0,0,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,68,0,0,0,63,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
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
function invoke_iiiii(index,a1,a2,a3,a4) {
  try {
    return Module["dynCall_iiiii"](index,a1,a2,a3,a4);
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
  var __ZN7WebCore18JSHTMLImageElement6s_infoE=env.__ZN7WebCore18JSHTMLImageElement6s_infoE|0;
  var __ZN3JSC36StrictModeReadonlyPropertyWriteErrorE=env.__ZN3JSC36StrictModeReadonlyPropertyWriteErrorE|0;
  var __ZN7WebCore19JSHTMLCanvasElement6s_infoE=env.__ZN7WebCore19JSHTMLCanvasElement6s_infoE|0;
  var __ZN7WebCore11JSImageData6s_infoE=env.__ZN7WebCore11JSImageData6s_infoE|0;
  var __ZN3JSC7JSArray6s_infoE=env.__ZN3JSC7JSArray6s_infoE|0;
  var __ZN7WebCore24JSCanvasRenderingContext6s_infoE=env.__ZN7WebCore24JSCanvasRenderingContext6s_infoE|0;
  var __ZN3JSC8JSObject6s_infoE=env.__ZN3JSC8JSObject6s_infoE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZN3JSC9WeakGCMapIPN3WTF10StringImplENS_8JSStringENS1_7PtrHashIS3_EENS1_10HashTraitsIS3_EEE14minGCThresholdE=(H_BASE+3120)|0;
  var __ZN7WebCore35JSCanvasRenderingContext2DPrototype6s_infoE=(H_BASE+2912)|0;
  var __ZN7WebCore37JSCanvasRenderingContext2DConstructor6s_infoE=(H_BASE+2808)|0;
  var __ZN7WebCore26JSCanvasRenderingContext2D6s_infoE=(H_BASE+3016)|0;
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
  var invoke_viiiii=env.invoke_viiiii;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_iiiiiii=env.invoke_iiiiiii;
  var invoke_ii=env.invoke_ii;
  var invoke_iiii=env.invoke_iiii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iiiii=env.invoke_iiiii;
  var invoke_iii=env.invoke_iii;
  var invoke_iiiiii=env.invoke_iiiiii;
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore52jsCanvasRenderingContext2DPrototypeFunctionDrawImageEPN3JSC9ExecStateE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, d79 = +0, d80 = +0, i81 = 0, d82 = +0, d83 = +0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0, i89 = 0, i90 = 0, i91 = 0, i92 = 0, i93 = 0, d94 = +0, i95 = 0, d96 = +0, i97 = 0, d98 = +0, d99 = +0, i100 = 0, d101 = +0, d102 = +0, i103 = 0, i104 = 0, i105 = 0, i106 = 0, i107 = 0, i108 = 0, i109 = 0, i110 = 0, d111 = +0, i112 = 0, d113 = +0, i114 = 0, d115 = +0, i116 = 0, d117 = +0, i118 = 0, d119 = +0, d120 = +0, i121 = 0, d122 = +0, d123 = +0, i124 = 0, d125 = +0, d126 = +0, i127 = 0, d128 = +0, d129 = +0, i130 = 0, i131 = 0, i132 = 0, i133 = 0, i134 = 0, i135 = 0, i136 = 0, i137 = 0, i138 = 0, i139 = 0, i140 = 0, d141 = +0, i142 = 0, d143 = +0, d144 = +0, i145 = 0, i146 = 0, i147 = 0, i148 = 0, i149 = 0, i150 = 0, i151 = 0, i152 = 0, d153 = +0, i154 = 0, d155 = +0, d156 = +0, i157 = 0, d158 = +0, d159 = +0, i160 = 0, d161 = +0, d162 = +0, i163 = 0, i164 = 0, i165 = 0, i166 = 0, i167 = 0, d168 = +0, i169 = 0, d170 = +0, i171 = 0, d172 = +0, i173 = 0, d174 = +0, i175 = 0, d176 = +0, d177 = +0, i178 = 0, d179 = +0, d180 = +0, i181 = 0, d182 = +0, d183 = +0, i184 = 0, d185 = +0, d186 = +0, i187 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 384 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 40 | 0;
 i9 = i2 + 48 | 0;
 i10 = i2 + 56 | 0;
 i11 = i2 + 64 | 0;
 i12 = i2 + 72 | 0;
 i13 = i2 + 80 | 0;
 i14 = i2 + 88 | 0;
 i15 = i2 + 96 | 0;
 i16 = i2 + 104 | 0;
 i17 = i2 + 112 | 0;
 i18 = i2 + 120 | 0;
 i19 = i2 + 128 | 0;
 i20 = i2 + 136 | 0;
 i21 = i2 + 144 | 0;
 i22 = i2 + 152 | 0;
 i23 = i2 + 160 | 0;
 i24 = i2 + 168 | 0;
 i25 = i2 + 176 | 0;
 i26 = i2 + 184 | 0;
 i27 = i2 + 192 | 0;
 i28 = i2 + 200 | 0;
 i29 = i2 + 208 | 0;
 i30 = i2 + 216 | 0;
 i31 = i2 + 224 | 0;
 i32 = i2 + 232 | 0;
 i33 = i2 + 240 | 0;
 i34 = i2 + 248 | 0;
 i35 = i2 + 256 | 0;
 i36 = i2 + 264 | 0;
 i37 = i2 + 272 | 0;
 i38 = i2 + 280 | 0;
 i39 = i2 + 288 | 0;
 i40 = i2 + 296 | 0;
 i41 = i2 + 304 | 0;
 i42 = i2 + 312 | 0;
 i43 = i2 + 320 | 0;
 i44 = i2 + 328 | 0;
 i45 = i2 + 336 | 0;
 i46 = i2 + 344 | 0;
 i47 = i2 + 352 | 0;
 i48 = i2 + 360 | 0;
 i49 = i2 + 368 | 0;
 i50 = i2 + 376 | 0;
 i51 = i1 + 32 | 0;
 i52 = (HEAP32[i51 >> 2] | 0) - 1 | 0;
 do {
  if ((i52 | 0) != 0) {
   i53 = i1 + 48 | 0;
   i54 = HEAP32[i53 >> 2] | 0;
   i55 = HEAP32[i53 + 4 >> 2] | 0;
   i53 = i54;
   i56 = i55;
   L3 : do {
    if ((i52 | 0) == 3) {
     L5 : do {
      if ((i56 | 0) == (-5 | 0)) {
       if ((HEAPU8[(HEAP32[i53 >> 2] | 0) + 52 | 0] | 0) >>> 0 <= 16 >>> 0) {
        i57 = -5;
        i58 = 1;
        i59 = 35;
        break L3;
       }
       i60 = i53;
       if ((HEAP32[(i53 & -65536) + 1048 >> 2] | 0) == 2) {
        i61 = i60 + 8 | 0;
       } else {
        i61 = (HEAP32[i60 >> 2] | 0) + 32 | 0;
       }
       i60 = HEAP32[i61 >> 2] | 0;
       if ((i60 | 0) == 0) {
        i57 = -5;
        i58 = 1;
        i59 = 35;
        break L3;
       } else {
        i62 = i60;
       }
       while (1) {
        if ((i62 | 0) == (__ZN7WebCore18JSHTMLImageElement6s_infoE | 0)) {
         break L5;
        }
        i60 = HEAP32[i62 + 4 >> 2] | 0;
        if ((i60 | 0) == 0) {
         i57 = -5;
         i58 = 1;
         i59 = 35;
         break L3;
        } else {
         i62 = i60;
        }
       }
      } else if ((i56 | 0) != (-3 | 0)) {
       i63 = 0;
       i64 = i56;
       i65 = 0;
       i59 = 153;
       break L3;
      }
     } while (0);
     i60 = i1 + 40 | 0;
     i66 = HEAP32[i60 >> 2] | 0;
     i67 = i66;
     L16 : do {
      if ((i66 & 0 | 0) == 0 & (HEAP32[i60 + 4 >> 2] & -1 | 0) == (-5 | 0)) {
       i68 = i67;
       if ((HEAP32[(i67 & -65536) + 1048 >> 2] | 0) == 2) {
        i69 = i68 + 8 | 0;
       } else {
        i69 = (HEAP32[i68 >> 2] | 0) + 32 | 0;
       }
       i68 = HEAP32[i69 >> 2] | 0;
       if ((i68 | 0) == 0) {
        break;
       } else {
        i70 = i68;
       }
       while (1) {
        if ((i70 | 0) == (H_BASE + 3016 | 0)) {
         break;
        }
        i70 = HEAP32[i70 + 4 >> 2] | 0;
        if ((i70 | 0) == 0) {
         break L16;
        }
       }
       if ((i67 | 0) == 0) {
        break;
       }
       i68 = HEAP32[i67 + 12 >> 2] | 0;
       HEAP32[i33 >> 2] = 0;
       i71 = i34 | 0;
       HEAP32[i71 >> 2] = i54;
       HEAP32[i71 + 4 >> 2] = i55;
       i71 = __ZN7WebCore18toHTMLImageElementEN3JSC7JSValueE(i34) | 0;
       i72 = i1 + 16 | 0;
       i73 = HEAP32[i72 >> 2] | 0;
       i74 = (HEAP32[(i73 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
       if (!((HEAP32[i74 >> 2] & 0 | 0) == 0 & (HEAP32[i74 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
        i75 = -4;
        i76 = 0;
        STACKTOP = i2;
        return (tempRet0 = i75, i76) | 0;
       }
       do {
        if (((HEAP32[i51 >> 2] | 0) - 1 | 0) >>> 0 > 1 >>> 0) {
         i74 = i1 + 56 | 0;
         i77 = HEAP32[i74 >> 2] | 0;
         i78 = HEAP32[i74 + 4 >> 2] | 0;
         d79 = +HEAPF64[i74 >> 3];
         i74 = i35 | 0;
         HEAP32[i74 >> 2] = i77;
         HEAP32[i74 + 4 >> 2] = i78;
         i74 = i78;
         if ((i74 | 0) == -1) {
          d80 = +(i77 | 0);
          i81 = i73;
          break;
         } else {
          if (i74 >>> 0 < 4294967289 >>> 0) {
           d80 = d79;
           i81 = i73;
           break;
          } else {
           i59 = 26;
           break;
          }
         }
        } else {
         HEAP32[i35 + 4 >> 2] = -4;
         HEAP32[i35 >> 2] = 0;
         i59 = 26;
        }
       } while (0);
       if ((i59 | 0) == 26) {
        d79 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i35, i1);
        d80 = d79;
        i81 = HEAP32[i72 >> 2] | 0;
       }
       d79 = d80;
       i73 = (HEAP32[(i81 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
       if (!((HEAP32[i73 >> 2] & 0 | 0) == 0 & (HEAP32[i73 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
        i75 = -4;
        i76 = 0;
        STACKTOP = i2;
        return (tempRet0 = i75, i76) | 0;
       }
       do {
        if (((HEAP32[i51 >> 2] | 0) - 1 | 0) >>> 0 > 2 >>> 0) {
         i73 = i1 + 64 | 0;
         i74 = HEAP32[i73 >> 2] | 0;
         i77 = HEAP32[i73 + 4 >> 2] | 0;
         d82 = +HEAPF64[i73 >> 3];
         i73 = i36 | 0;
         HEAP32[i73 >> 2] = i74;
         HEAP32[i73 + 4 >> 2] = i77;
         i73 = i77;
         if ((i73 | 0) == -1) {
          d83 = +(i74 | 0);
          i84 = i81;
          break;
         }
         if (i73 >>> 0 < 4294967289 >>> 0) {
          d83 = d82;
          i84 = i81;
         } else {
          i59 = 32;
         }
        } else {
         HEAP32[i36 + 4 >> 2] = -4;
         HEAP32[i36 >> 2] = 0;
         i59 = 32;
        }
       } while (0);
       if ((i59 | 0) == 32) {
        d82 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i36, i1);
        d83 = d82;
        i84 = HEAP32[i72 >> 2] | 0;
       }
       i73 = (HEAP32[(i84 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
       if (!((HEAP32[i73 >> 2] & 0 | 0) == 0 & (HEAP32[i73 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
        i75 = -4;
        i76 = 0;
        STACKTOP = i2;
        return (tempRet0 = i75, i76) | 0;
       }
       __ZN7WebCore24CanvasRenderingContext2D9drawImageEPNS_16HTMLImageElementEffRi(i68, i71, d79, d83, i33);
       __ZN7WebCore15setDOMExceptionEPN3JSC9ExecStateEi(i1, HEAP32[i33 >> 2] | 0);
       i75 = -4;
       i76 = 0;
       STACKTOP = i2;
       return (tempRet0 = i75, i76) | 0;
      }
     } while (0);
     i67 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
     i60 = (i67 | 0) == 0;
     i75 = (i60 ? -6 : -5) | 0;
     i76 = (i60 ? 0 : 0) | i67;
     STACKTOP = i2;
     return (tempRet0 = i75, i76) | 0;
    } else {
     i57 = i56;
     i58 = 0;
     i59 = 35;
    }
   } while (0);
   L55 : do {
    if ((i59 | 0) == 35) {
     L57 : do {
      if ((i52 | 0) == 5) {
       if ((i57 | 0) == (-5 | 0)) {
        i59 = 37;
       } else if ((i57 | 0) != (-3 | 0)) {
        if (i58) {
         i63 = 0;
         i64 = i57;
         i65 = 1;
         i59 = 153;
         break L55;
        } else {
         i85 = 0;
         i86 = i57;
         i87 = 1;
         i59 = 189;
         break L55;
        }
       }
       L61 : do {
        if ((i59 | 0) == 37) {
         if ((HEAPU8[(HEAP32[i53 >> 2] | 0) + 52 | 0] | 0) >>> 0 <= 16 >>> 0) {
          i88 = -5;
          i89 = 1;
          break L57;
         }
         i56 = i53;
         if ((HEAP32[(i53 & -65536) + 1048 >> 2] | 0) == 2) {
          i90 = i56 + 8 | 0;
         } else {
          i90 = (HEAP32[i56 >> 2] | 0) + 32 | 0;
         }
         i56 = HEAP32[i90 >> 2] | 0;
         if ((i56 | 0) == 0) {
          i88 = -5;
          i89 = 1;
          break L57;
         } else {
          i91 = i56;
         }
         while (1) {
          if ((i91 | 0) == (__ZN7WebCore18JSHTMLImageElement6s_infoE | 0)) {
           break L61;
          }
          i56 = HEAP32[i91 + 4 >> 2] | 0;
          if ((i56 | 0) == 0) {
           i88 = -5;
           i89 = 1;
           break L57;
          } else {
           i91 = i56;
          }
         }
        }
       } while (0);
       i71 = i1 + 40 | 0;
       i68 = HEAP32[i71 >> 2] | 0;
       i72 = i68;
       L72 : do {
        if ((i68 & 0 | 0) == 0 & (HEAP32[i71 + 4 >> 2] & -1 | 0) == (-5 | 0)) {
         i56 = i72;
         if ((HEAP32[(i72 & -65536) + 1048 >> 2] | 0) == 2) {
          i92 = i56 + 8 | 0;
         } else {
          i92 = (HEAP32[i56 >> 2] | 0) + 32 | 0;
         }
         i56 = HEAP32[i92 >> 2] | 0;
         if ((i56 | 0) == 0) {
          break;
         } else {
          i93 = i56;
         }
         while (1) {
          if ((i93 | 0) == (H_BASE + 3016 | 0)) {
           break;
          }
          i93 = HEAP32[i93 + 4 >> 2] | 0;
          if ((i93 | 0) == 0) {
           break L72;
          }
         }
         if ((i72 | 0) == 0) {
          break;
         }
         i56 = HEAP32[i72 + 12 >> 2] | 0;
         HEAP32[i27 >> 2] = 0;
         i67 = i28 | 0;
         HEAP32[i67 >> 2] = i54;
         HEAP32[i67 + 4 >> 2] = i55;
         i67 = __ZN7WebCore18toHTMLImageElementEN3JSC7JSValueE(i28) | 0;
         i60 = i1 + 16 | 0;
         i66 = HEAP32[i60 >> 2] | 0;
         i73 = (HEAP32[(i66 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
         if (!((HEAP32[i73 >> 2] & 0 | 0) == 0 & (HEAP32[i73 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
          i75 = -4;
          i76 = 0;
          STACKTOP = i2;
          return (tempRet0 = i75, i76) | 0;
         }
         do {
          if (((HEAP32[i51 >> 2] | 0) - 1 | 0) >>> 0 > 1 >>> 0) {
           i73 = i1 + 56 | 0;
           i74 = HEAP32[i73 >> 2] | 0;
           i77 = HEAP32[i73 + 4 >> 2] | 0;
           d79 = +HEAPF64[i73 >> 3];
           i73 = i29 | 0;
           HEAP32[i73 >> 2] = i74;
           HEAP32[i73 + 4 >> 2] = i77;
           i73 = i77;
           if ((i73 | 0) == -1) {
            d94 = +(i74 | 0);
            i95 = i66;
            break;
           } else {
            if (i73 >>> 0 < 4294967289 >>> 0) {
             d94 = d79;
             i95 = i66;
             break;
            } else {
             i59 = 59;
             break;
            }
           }
          } else {
           HEAP32[i29 + 4 >> 2] = -4;
           HEAP32[i29 >> 2] = 0;
           i59 = 59;
          }
         } while (0);
         if ((i59 | 0) == 59) {
          d79 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i29, i1);
          d94 = d79;
          i95 = HEAP32[i60 >> 2] | 0;
         }
         d79 = d94;
         i66 = (HEAP32[(i95 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
         if (!((HEAP32[i66 >> 2] & 0 | 0) == 0 & (HEAP32[i66 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
          i75 = -4;
          i76 = 0;
          STACKTOP = i2;
          return (tempRet0 = i75, i76) | 0;
         }
         do {
          if (((HEAP32[i51 >> 2] | 0) - 1 | 0) >>> 0 > 2 >>> 0) {
           i66 = i1 + 64 | 0;
           i73 = HEAP32[i66 >> 2] | 0;
           i74 = HEAP32[i66 + 4 >> 2] | 0;
           d82 = +HEAPF64[i66 >> 3];
           i66 = i30 | 0;
           HEAP32[i66 >> 2] = i73;
           HEAP32[i66 + 4 >> 2] = i74;
           i66 = i74;
           if ((i66 | 0) == -1) {
            d96 = +(i73 | 0);
            i97 = i95;
            break;
           }
           if (i66 >>> 0 < 4294967289 >>> 0) {
            d96 = d82;
            i97 = i95;
           } else {
            i59 = 65;
           }
          } else {
           HEAP32[i30 + 4 >> 2] = -4;
           HEAP32[i30 >> 2] = 0;
           i59 = 65;
          }
         } while (0);
         if ((i59 | 0) == 65) {
          d82 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i30, i1);
          d96 = d82;
          i97 = HEAP32[i60 >> 2] | 0;
         }
         d82 = d96;
         i66 = (HEAP32[(i97 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
         if (!((HEAP32[i66 >> 2] & 0 | 0) == 0 & (HEAP32[i66 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
          i75 = -4;
          i76 = 0;
          STACKTOP = i2;
          return (tempRet0 = i75, i76) | 0;
         }
         do {
          if (((HEAP32[i51 >> 2] | 0) - 1 | 0) >>> 0 > 3 >>> 0) {
           i66 = i1 + 72 | 0;
           i73 = HEAP32[i66 >> 2] | 0;
           i74 = HEAP32[i66 + 4 >> 2] | 0;
           d98 = +HEAPF64[i66 >> 3];
           i66 = i31 | 0;
           HEAP32[i66 >> 2] = i73;
           HEAP32[i66 + 4 >> 2] = i74;
           i66 = i74;
           if ((i66 | 0) == -1) {
            d99 = +(i73 | 0);
            i100 = i97;
            break;
           }
           if (i66 >>> 0 < 4294967289 >>> 0) {
            d99 = d98;
            i100 = i97;
           } else {
            i59 = 71;
           }
          } else {
           HEAP32[i31 + 4 >> 2] = -4;
           HEAP32[i31 >> 2] = 0;
           i59 = 71;
          }
         } while (0);
         if ((i59 | 0) == 71) {
          d98 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i31, i1);
          d99 = d98;
          i100 = HEAP32[i60 >> 2] | 0;
         }
         d98 = d99;
         i66 = (HEAP32[(i100 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
         if (!((HEAP32[i66 >> 2] & 0 | 0) == 0 & (HEAP32[i66 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
          i75 = -4;
          i76 = 0;
          STACKTOP = i2;
          return (tempRet0 = i75, i76) | 0;
         }
         do {
          if (((HEAP32[i51 >> 2] | 0) - 1 | 0) >>> 0 > 4 >>> 0) {
           i66 = i1 + 80 | 0;
           i73 = HEAP32[i66 >> 2] | 0;
           i74 = HEAP32[i66 + 4 >> 2] | 0;
           d101 = +HEAPF64[i66 >> 3];
           i66 = i32 | 0;
           HEAP32[i66 >> 2] = i73;
           HEAP32[i66 + 4 >> 2] = i74;
           i66 = i74;
           if ((i66 | 0) == -1) {
            d102 = +(i73 | 0);
            i103 = i100;
            break;
           }
           if (i66 >>> 0 < 4294967289 >>> 0) {
            d102 = d101;
            i103 = i100;
           } else {
            i59 = 77;
           }
          } else {
           HEAP32[i32 + 4 >> 2] = -4;
           HEAP32[i32 >> 2] = 0;
           i59 = 77;
          }
         } while (0);
         if ((i59 | 0) == 77) {
          d101 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i32, i1);
          d102 = d101;
          i103 = HEAP32[i60 >> 2] | 0;
         }
         i66 = (HEAP32[(i103 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
         if (!((HEAP32[i66 >> 2] & 0 | 0) == 0 & (HEAP32[i66 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
          i75 = -4;
          i76 = 0;
          STACKTOP = i2;
          return (tempRet0 = i75, i76) | 0;
         }
         __ZN7WebCore24CanvasRenderingContext2D9drawImageEPNS_16HTMLImageElementEffffRi(i56, i67, d79, d82, d98, d102, i27);
         __ZN7WebCore15setDOMExceptionEPN3JSC9ExecStateEi(i1, HEAP32[i27 >> 2] | 0);
         i75 = -4;
         i76 = 0;
         STACKTOP = i2;
         return (tempRet0 = i75, i76) | 0;
        }
       } while (0);
       i72 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
       i71 = (i72 | 0) == 0;
       i75 = (i71 ? -6 : -5) | 0;
       i76 = (i71 ? 0 : 0) | i72;
       STACKTOP = i2;
       return (tempRet0 = i75, i76) | 0;
      } else {
       i88 = i57;
       i89 = 0;
      }
     } while (0);
     L132 : do {
      if ((i52 | 0) == 9) {
       if ((i88 | 0) == (-5 | 0)) {
        i59 = 84;
       } else if ((i88 | 0) != (-3 | 0)) {
        if (i58) {
         i63 = 1;
         i64 = i88;
         i65 = i89;
         i59 = 153;
         break L55;
        } else {
         i85 = 1;
         i86 = i88;
         i87 = i89;
         i59 = 189;
         break L55;
        }
       }
       L136 : do {
        if ((i59 | 0) == 84) {
         if ((HEAPU8[(HEAP32[i53 >> 2] | 0) + 52 | 0] | 0) >>> 0 <= 16 >>> 0) {
          i104 = -5;
          i105 = 1;
          break L132;
         }
         i72 = i53;
         if ((HEAP32[(i53 & -65536) + 1048 >> 2] | 0) == 2) {
          i106 = i72 + 8 | 0;
         } else {
          i106 = (HEAP32[i72 >> 2] | 0) + 32 | 0;
         }
         i72 = HEAP32[i106 >> 2] | 0;
         if ((i72 | 0) != 0) {
          i71 = i72;
          while (1) {
           if ((i71 | 0) == (__ZN7WebCore18JSHTMLImageElement6s_infoE | 0)) {
            break L136;
           }
           i71 = HEAP32[i71 + 4 >> 2] | 0;
           if ((i71 | 0) == 0) {
            break;
           }
          }
         }
         if (i58) {
          i107 = i89;
          i108 = 1;
          i59 = 155;
          break L55;
         } else {
          i85 = 1;
          i86 = -5;
          i87 = i89;
          i59 = 189;
          break L55;
         }
        }
       } while (0);
       i71 = i1 + 40 | 0;
       i67 = HEAP32[i71 >> 2] | 0;
       i56 = i67;
       L149 : do {
        if ((i67 & 0 | 0) == 0 & (HEAP32[i71 + 4 >> 2] & -1 | 0) == (-5 | 0)) {
         i60 = i56;
         if ((HEAP32[(i56 & -65536) + 1048 >> 2] | 0) == 2) {
          i109 = i60 + 8 | 0;
         } else {
          i109 = (HEAP32[i60 >> 2] | 0) + 32 | 0;
         }
         i60 = HEAP32[i109 >> 2] | 0;
         if ((i60 | 0) == 0) {
          break;
         } else {
          i110 = i60;
         }
         while (1) {
          if ((i110 | 0) == (H_BASE + 3016 | 0)) {
           break;
          }
          i110 = HEAP32[i110 + 4 >> 2] | 0;
          if ((i110 | 0) == 0) {
           break L149;
          }
         }
         if ((i56 | 0) == 0) {
          break;
         }
         i60 = HEAP32[i56 + 12 >> 2] | 0;
         HEAP32[i17 >> 2] = 0;
         i72 = i18 | 0;
         HEAP32[i72 >> 2] = i54;
         HEAP32[i72 + 4 >> 2] = i55;
         i72 = __ZN7WebCore18toHTMLImageElementEN3JSC7JSValueE(i18) | 0;
         i68 = i1 + 16 | 0;
         i66 = HEAP32[i68 >> 2] | 0;
         i73 = (HEAP32[(i66 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
         if (!((HEAP32[i73 >> 2] & 0 | 0) == 0 & (HEAP32[i73 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
          i75 = -4;
          i76 = 0;
          STACKTOP = i2;
          return (tempRet0 = i75, i76) | 0;
         }
         do {
          if (((HEAP32[i51 >> 2] | 0) - 1 | 0) >>> 0 > 1 >>> 0) {
           i73 = i1 + 56 | 0;
           i74 = HEAP32[i73 >> 2] | 0;
           i77 = HEAP32[i73 + 4 >> 2] | 0;
           d98 = +HEAPF64[i73 >> 3];
           i73 = i19 | 0;
           HEAP32[i73 >> 2] = i74;
           HEAP32[i73 + 4 >> 2] = i77;
           i73 = i77;
           if ((i73 | 0) == -1) {
            d111 = +(i74 | 0);
            i112 = i66;
            break;
           } else {
            if (i73 >>> 0 < 4294967289 >>> 0) {
             d111 = d98;
             i112 = i66;
             break;
            } else {
             i59 = 107;
             break;
            }
           }
          } else {
           HEAP32[i19 + 4 >> 2] = -4;
           HEAP32[i19 >> 2] = 0;
           i59 = 107;
          }
         } while (0);
         if ((i59 | 0) == 107) {
          d98 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i19, i1);
          d111 = d98;
          i112 = HEAP32[i68 >> 2] | 0;
         }
         d98 = d111;
         i66 = (HEAP32[(i112 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
         if (!((HEAP32[i66 >> 2] & 0 | 0) == 0 & (HEAP32[i66 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
          i75 = -4;
          i76 = 0;
          STACKTOP = i2;
          return (tempRet0 = i75, i76) | 0;
         }
         do {
          if (((HEAP32[i51 >> 2] | 0) - 1 | 0) >>> 0 > 2 >>> 0) {
           i66 = i1 + 64 | 0;
           i73 = HEAP32[i66 >> 2] | 0;
           i74 = HEAP32[i66 + 4 >> 2] | 0;
           d82 = +HEAPF64[i66 >> 3];
           i66 = i20 | 0;
           HEAP32[i66 >> 2] = i73;
           HEAP32[i66 + 4 >> 2] = i74;
           i66 = i74;
           if ((i66 | 0) == -1) {
            d113 = +(i73 | 0);
            i114 = i112;
            break;
           }
           if (i66 >>> 0 < 4294967289 >>> 0) {
            d113 = d82;
            i114 = i112;
           } else {
            i59 = 113;
           }
          } else {
           HEAP32[i20 + 4 >> 2] = -4;
           HEAP32[i20 >> 2] = 0;
           i59 = 113;
          }
         } while (0);
         if ((i59 | 0) == 113) {
          d82 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i20, i1);
          d113 = d82;
          i114 = HEAP32[i68 >> 2] | 0;
         }
         d82 = d113;
         i66 = (HEAP32[(i114 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
         if (!((HEAP32[i66 >> 2] & 0 | 0) == 0 & (HEAP32[i66 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
          i75 = -4;
          i76 = 0;
          STACKTOP = i2;
          return (tempRet0 = i75, i76) | 0;
         }
         do {
          if (((HEAP32[i51 >> 2] | 0) - 1 | 0) >>> 0 > 3 >>> 0) {
           i66 = i1 + 72 | 0;
           i73 = HEAP32[i66 >> 2] | 0;
           i74 = HEAP32[i66 + 4 >> 2] | 0;
           d79 = +HEAPF64[i66 >> 3];
           i66 = i21 | 0;
           HEAP32[i66 >> 2] = i73;
           HEAP32[i66 + 4 >> 2] = i74;
           i66 = i74;
           if ((i66 | 0) == -1) {
            d115 = +(i73 | 0);
            i116 = i114;
            break;
           }
           if (i66 >>> 0 < 4294967289 >>> 0) {
            d115 = d79;
            i116 = i114;
           } else {
            i59 = 119;
           }
          } else {
           HEAP32[i21 + 4 >> 2] = -4;
           HEAP32[i21 >> 2] = 0;
           i59 = 119;
          }
         } while (0);
         if ((i59 | 0) == 119) {
          d79 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i21, i1);
          d115 = d79;
          i116 = HEAP32[i68 >> 2] | 0;
         }
         d79 = d115;
         i66 = (HEAP32[(i116 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
         if (!((HEAP32[i66 >> 2] & 0 | 0) == 0 & (HEAP32[i66 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
          i75 = -4;
          i76 = 0;
          STACKTOP = i2;
          return (tempRet0 = i75, i76) | 0;
         }
         do {
          if (((HEAP32[i51 >> 2] | 0) - 1 | 0) >>> 0 > 4 >>> 0) {
           i66 = i1 + 80 | 0;
           i73 = HEAP32[i66 >> 2] | 0;
           i74 = HEAP32[i66 + 4 >> 2] | 0;
           d101 = +HEAPF64[i66 >> 3];
           i66 = i22 | 0;
           HEAP32[i66 >> 2] = i73;
           HEAP32[i66 + 4 >> 2] = i74;
           i66 = i74;
           if ((i66 | 0) == -1) {
            d117 = +(i73 | 0);
            i118 = i116;
            break;
           }
           if (i66 >>> 0 < 4294967289 >>> 0) {
            d117 = d101;
            i118 = i116;
           } else {
            i59 = 125;
           }
          } else {
           HEAP32[i22 + 4 >> 2] = -4;
           HEAP32[i22 >> 2] = 0;
           i59 = 125;
          }
         } while (0);
         if ((i59 | 0) == 125) {
          d101 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i22, i1);
          d117 = d101;
          i118 = HEAP32[i68 >> 2] | 0;
         }
         d101 = d117;
         i66 = (HEAP32[(i118 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
         if (!((HEAP32[i66 >> 2] & 0 | 0) == 0 & (HEAP32[i66 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
          i75 = -4;
          i76 = 0;
          STACKTOP = i2;
          return (tempRet0 = i75, i76) | 0;
         }
         do {
          if (((HEAP32[i51 >> 2] | 0) - 1 | 0) >>> 0 > 5 >>> 0) {
           i66 = i1 + 88 | 0;
           i73 = HEAP32[i66 >> 2] | 0;
           i74 = HEAP32[i66 + 4 >> 2] | 0;
           d119 = +HEAPF64[i66 >> 3];
           i66 = i23 | 0;
           HEAP32[i66 >> 2] = i73;
           HEAP32[i66 + 4 >> 2] = i74;
           i66 = i74;
           if ((i66 | 0) == -1) {
            d120 = +(i73 | 0);
            i121 = i118;
            break;
           }
           if (i66 >>> 0 < 4294967289 >>> 0) {
            d120 = d119;
            i121 = i118;
           } else {
            i59 = 131;
           }
          } else {
           HEAP32[i23 + 4 >> 2] = -4;
           HEAP32[i23 >> 2] = 0;
           i59 = 131;
          }
         } while (0);
         if ((i59 | 0) == 131) {
          d119 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i23, i1);
          d120 = d119;
          i121 = HEAP32[i68 >> 2] | 0;
         }
         d119 = d120;
         i66 = (HEAP32[(i121 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
         if (!((HEAP32[i66 >> 2] & 0 | 0) == 0 & (HEAP32[i66 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
          i75 = -4;
          i76 = 0;
          STACKTOP = i2;
          return (tempRet0 = i75, i76) | 0;
         }
         do {
          if (((HEAP32[i51 >> 2] | 0) - 1 | 0) >>> 0 > 6 >>> 0) {
           i66 = i1 + 96 | 0;
           i73 = HEAP32[i66 >> 2] | 0;
           i74 = HEAP32[i66 + 4 >> 2] | 0;
           d122 = +HEAPF64[i66 >> 3];
           i66 = i24 | 0;
           HEAP32[i66 >> 2] = i73;
           HEAP32[i66 + 4 >> 2] = i74;
           i66 = i74;
           if ((i66 | 0) == -1) {
            d123 = +(i73 | 0);
            i124 = i121;
            break;
           }
           if (i66 >>> 0 < 4294967289 >>> 0) {
            d123 = d122;
            i124 = i121;
           } else {
            i59 = 137;
           }
          } else {
           HEAP32[i24 + 4 >> 2] = -4;
           HEAP32[i24 >> 2] = 0;
           i59 = 137;
          }
         } while (0);
         if ((i59 | 0) == 137) {
          d122 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i24, i1);
          d123 = d122;
          i124 = HEAP32[i68 >> 2] | 0;
         }
         d122 = d123;
         i66 = (HEAP32[(i124 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
         if (!((HEAP32[i66 >> 2] & 0 | 0) == 0 & (HEAP32[i66 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
          i75 = -4;
          i76 = 0;
          STACKTOP = i2;
          return (tempRet0 = i75, i76) | 0;
         }
         do {
          if (((HEAP32[i51 >> 2] | 0) - 1 | 0) >>> 0 > 7 >>> 0) {
           i66 = i1 + 104 | 0;
           i73 = HEAP32[i66 >> 2] | 0;
           i74 = HEAP32[i66 + 4 >> 2] | 0;
           d125 = +HEAPF64[i66 >> 3];
           i66 = i25 | 0;
           HEAP32[i66 >> 2] = i73;
           HEAP32[i66 + 4 >> 2] = i74;
           i66 = i74;
           if ((i66 | 0) == -1) {
            d126 = +(i73 | 0);
            i127 = i124;
            break;
           }
           if (i66 >>> 0 < 4294967289 >>> 0) {
            d126 = d125;
            i127 = i124;
           } else {
            i59 = 143;
           }
          } else {
           HEAP32[i25 + 4 >> 2] = -4;
           HEAP32[i25 >> 2] = 0;
           i59 = 143;
          }
         } while (0);
         if ((i59 | 0) == 143) {
          d125 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i25, i1);
          d126 = d125;
          i127 = HEAP32[i68 >> 2] | 0;
         }
         d125 = d126;
         i66 = (HEAP32[(i127 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
         if (!((HEAP32[i66 >> 2] & 0 | 0) == 0 & (HEAP32[i66 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
          i75 = -4;
          i76 = 0;
          STACKTOP = i2;
          return (tempRet0 = i75, i76) | 0;
         }
         do {
          if (((HEAP32[i51 >> 2] | 0) - 1 | 0) >>> 0 > 8 >>> 0) {
           i66 = i1 + 112 | 0;
           i73 = HEAP32[i66 >> 2] | 0;
           i74 = HEAP32[i66 + 4 >> 2] | 0;
           d128 = +HEAPF64[i66 >> 3];
           i66 = i26 | 0;
           HEAP32[i66 >> 2] = i73;
           HEAP32[i66 + 4 >> 2] = i74;
           i66 = i74;
           if ((i66 | 0) == -1) {
            d129 = +(i73 | 0);
            i130 = i127;
            break;
           }
           if (i66 >>> 0 < 4294967289 >>> 0) {
            d129 = d128;
            i130 = i127;
           } else {
            i59 = 149;
           }
          } else {
           HEAP32[i26 + 4 >> 2] = -4;
           HEAP32[i26 >> 2] = 0;
           i59 = 149;
          }
         } while (0);
         if ((i59 | 0) == 149) {
          d128 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i26, i1);
          d129 = d128;
          i130 = HEAP32[i68 >> 2] | 0;
         }
         i66 = (HEAP32[(i130 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
         if (!((HEAP32[i66 >> 2] & 0 | 0) == 0 & (HEAP32[i66 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
          i75 = -4;
          i76 = 0;
          STACKTOP = i2;
          return (tempRet0 = i75, i76) | 0;
         }
         __ZN7WebCore24CanvasRenderingContext2D9drawImageEPNS_16HTMLImageElementEffffffffRi(i60, i72, d98, d82, d79, d101, d119, d122, d125, d129, i17);
         __ZN7WebCore15setDOMExceptionEPN3JSC9ExecStateEi(i1, HEAP32[i17 >> 2] | 0);
         i75 = -4;
         i76 = 0;
         STACKTOP = i2;
         return (tempRet0 = i75, i76) | 0;
        }
       } while (0);
       i56 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
       i71 = (i56 | 0) == 0;
       i75 = (i71 ? -6 : -5) | 0;
       i76 = (i71 ? 0 : 0) | i56;
       STACKTOP = i2;
       return (tempRet0 = i75, i76) | 0;
      } else {
       i104 = i88;
       i105 = 0;
      }
     } while (0);
     if (i58) {
      i63 = i105;
      i64 = i104;
      i65 = i89;
      i59 = 153;
     } else {
      i85 = i105;
      i86 = i104;
      i87 = i89;
      i59 = 189;
     }
    }
   } while (0);
   do {
    if ((i59 | 0) == 153) {
     if ((i64 | 0) == (-5 | 0)) {
      i107 = i65;
      i108 = i63;
      i59 = 155;
      break;
     } else if ((i64 | 0) == (-3 | 0)) {
      i59 = 163;
      break;
     }
     if (i65) {
      i131 = i63;
      i132 = i64;
      i59 = 191;
     } else {
      i133 = i64;
      i134 = i63;
      i59 = 239;
     }
    }
   } while (0);
   L252 : do {
    if ((i59 | 0) == 155) {
     if ((HEAPU8[(HEAP32[i53 >> 2] | 0) + 52 | 0] | 0) >>> 0 <= 16 >>> 0) {
      i85 = i108;
      i86 = -5;
      i87 = i107;
      i59 = 189;
      break;
     }
     i56 = i53;
     if ((HEAP32[(i53 & -65536) + 1048 >> 2] | 0) == 2) {
      i135 = i56 + 8 | 0;
     } else {
      i135 = (HEAP32[i56 >> 2] | 0) + 32 | 0;
     }
     i56 = HEAP32[i135 >> 2] | 0;
     if ((i56 | 0) != 0) {
      i71 = i56;
      while (1) {
       if ((i71 | 0) == (__ZN7WebCore19JSHTMLCanvasElement6s_infoE | 0)) {
        i59 = 163;
        break L252;
       }
       i71 = HEAP32[i71 + 4 >> 2] | 0;
       if ((i71 | 0) == 0) {
        break;
       }
      }
     }
     if (i107) {
      i136 = i108;
      i59 = 193;
     } else {
      i133 = -5;
      i134 = i108;
      i59 = 239;
     }
    }
   } while (0);
   do {
    if ((i59 | 0) == 163) {
     i71 = i1 + 40 | 0;
     i56 = HEAP32[i71 >> 2] | 0;
     i67 = i56;
     L266 : do {
      if ((i56 & 0 | 0) == 0 & (HEAP32[i71 + 4 >> 2] & -1 | 0) == (-5 | 0)) {
       i66 = i67;
       if ((HEAP32[(i67 & -65536) + 1048 >> 2] | 0) == 2) {
        i137 = i66 + 8 | 0;
       } else {
        i137 = (HEAP32[i66 >> 2] | 0) + 32 | 0;
       }
       i66 = HEAP32[i137 >> 2] | 0;
       if ((i66 | 0) == 0) {
        break;
       } else {
        i138 = i66;
       }
       while (1) {
        if ((i138 | 0) == (H_BASE + 3016 | 0)) {
         break;
        }
        i138 = HEAP32[i138 + 4 >> 2] | 0;
        if ((i138 | 0) == 0) {
         break L266;
        }
       }
       if ((i67 | 0) == 0) {
        break;
       }
       i66 = HEAP32[i67 + 12 >> 2] | 0;
       if (i52 >>> 0 < 3 >>> 0) {
        i73 = __ZN3JSC29createNotEnoughArgumentsErrorEPNS_9ExecStateE(i1) | 0;
        i74 = (i73 | 0) == 0;
        i77 = HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
        i78 = i12 | 0;
        HEAP32[i78 >> 2] = (i74 ? 0 : 0) | i73;
        HEAP32[i78 + 4 >> 2] = i74 ? -6 : -5;
        __ZN3JSC2VM14throwExceptionEPNS_9ExecStateENS_7JSValueE(i11, i77, i1, i12);
        i77 = i11 | 0;
        i75 = HEAP32[i77 + 4 >> 2] | 0;
        i76 = HEAP32[i77 >> 2] | 0;
        STACKTOP = i2;
        return (tempRet0 = i75, i76) | 0;
       }
       HEAP32[i13 >> 2] = 0;
       i77 = i14 | 0;
       HEAP32[i77 >> 2] = i54;
       HEAP32[i77 + 4 >> 2] = i55;
       i77 = __ZN7WebCore19toHTMLCanvasElementEN3JSC7JSValueE(i14) | 0;
       i74 = i1 + 16 | 0;
       i78 = HEAP32[i74 >> 2] | 0;
       i73 = (HEAP32[(i78 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
       if (!((HEAP32[i73 >> 2] & 0 | 0) == 0 & (HEAP32[i73 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
        i75 = -4;
        i76 = 0;
        STACKTOP = i2;
        return (tempRet0 = i75, i76) | 0;
       }
       do {
        if (((HEAP32[i51 >> 2] | 0) - 1 | 0) >>> 0 > 1 >>> 0) {
         i73 = i1 + 56 | 0;
         i139 = HEAP32[i73 >> 2] | 0;
         i140 = HEAP32[i73 + 4 >> 2] | 0;
         d128 = +HEAPF64[i73 >> 3];
         i73 = i15 | 0;
         HEAP32[i73 >> 2] = i139;
         HEAP32[i73 + 4 >> 2] = i140;
         i73 = i140;
         if ((i73 | 0) == -1) {
          d141 = +(i139 | 0);
          i142 = i78;
          break;
         } else {
          if (i73 >>> 0 < 4294967289 >>> 0) {
           d141 = d128;
           i142 = i78;
           break;
          } else {
           i59 = 180;
           break;
          }
         }
        } else {
         HEAP32[i15 + 4 >> 2] = -4;
         HEAP32[i15 >> 2] = 0;
         i59 = 180;
        }
       } while (0);
       if ((i59 | 0) == 180) {
        d128 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i15, i1);
        d141 = d128;
        i142 = HEAP32[i74 >> 2] | 0;
       }
       d128 = d141;
       i78 = (HEAP32[(i142 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
       if (!((HEAP32[i78 >> 2] & 0 | 0) == 0 & (HEAP32[i78 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
        i75 = -4;
        i76 = 0;
        STACKTOP = i2;
        return (tempRet0 = i75, i76) | 0;
       }
       do {
        if (((HEAP32[i51 >> 2] | 0) - 1 | 0) >>> 0 > 2 >>> 0) {
         i78 = i1 + 64 | 0;
         i73 = HEAP32[i78 >> 2] | 0;
         i139 = HEAP32[i78 + 4 >> 2] | 0;
         d143 = +HEAPF64[i78 >> 3];
         i78 = i16 | 0;
         HEAP32[i78 >> 2] = i73;
         HEAP32[i78 + 4 >> 2] = i139;
         i78 = i139;
         if ((i78 | 0) == -1) {
          d144 = +(i73 | 0);
          i145 = i142;
          break;
         }
         if (i78 >>> 0 < 4294967289 >>> 0) {
          d144 = d143;
          i145 = i142;
         } else {
          i59 = 186;
         }
        } else {
         HEAP32[i16 + 4 >> 2] = -4;
         HEAP32[i16 >> 2] = 0;
         i59 = 186;
        }
       } while (0);
       if ((i59 | 0) == 186) {
        d143 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i16, i1);
        d144 = d143;
        i145 = HEAP32[i74 >> 2] | 0;
       }
       i78 = (HEAP32[(i145 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
       if (!((HEAP32[i78 >> 2] & 0 | 0) == 0 & (HEAP32[i78 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
        i75 = -4;
        i76 = 0;
        STACKTOP = i2;
        return (tempRet0 = i75, i76) | 0;
       }
       __ZN7WebCore24CanvasRenderingContext2D9drawImageEPNS_17HTMLCanvasElementEffRi(i66, i77, d128, d144, i13);
       __ZN7WebCore15setDOMExceptionEPN3JSC9ExecStateEi(i1, HEAP32[i13 >> 2] | 0);
       i75 = -4;
       i76 = 0;
       STACKTOP = i2;
       return (tempRet0 = i75, i76) | 0;
      }
     } while (0);
     i67 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
     i71 = (i67 | 0) == 0;
     i75 = (i71 ? -6 : -5) | 0;
     i76 = (i71 ? 0 : 0) | i67;
     STACKTOP = i2;
     return (tempRet0 = i75, i76) | 0;
    } else if ((i59 | 0) == 189) {
     if (!i87) {
      i133 = i86;
      i134 = i85;
      i59 = 239;
      break;
     }
     if ((i86 | 0) == -3) {
      i59 = 201;
     } else {
      i131 = i85;
      i132 = i86;
      i59 = 191;
     }
    }
   } while (0);
   do {
    if ((i59 | 0) == 191) {
     if ((i132 | 0) == -5) {
      i136 = i131;
      i59 = 193;
      break;
     }
     if (i131) {
      i146 = i132;
      i59 = 240;
     } else {
      i59 = 310;
     }
    }
   } while (0);
   L314 : do {
    if ((i59 | 0) == 193) {
     if ((HEAPU8[(HEAP32[i53 >> 2] | 0) + 52 | 0] | 0) >>> 0 <= 16 >>> 0) {
      i133 = -5;
      i134 = i136;
      i59 = 239;
      break;
     }
     i67 = i53;
     if ((HEAP32[(i53 & -65536) + 1048 >> 2] | 0) == 2) {
      i147 = i67 + 8 | 0;
     } else {
      i147 = (HEAP32[i67 >> 2] | 0) + 32 | 0;
     }
     i67 = HEAP32[i147 >> 2] | 0;
     if ((i67 | 0) != 0) {
      i71 = i67;
      while (1) {
       if ((i71 | 0) == (__ZN7WebCore19JSHTMLCanvasElement6s_infoE | 0)) {
        i59 = 201;
        break L314;
       }
       i71 = HEAP32[i71 + 4 >> 2] | 0;
       if ((i71 | 0) == 0) {
        break;
       }
      }
     }
     if (i136) {
      i59 = 241;
     } else {
      i59 = 310;
     }
    }
   } while (0);
   if ((i59 | 0) == 201) {
    i71 = i1 + 40 | 0;
    i67 = HEAP32[i71 >> 2] | 0;
    i56 = i67;
    L328 : do {
     if ((i67 & 0 | 0) == 0 & (HEAP32[i71 + 4 >> 2] & -1 | 0) == (-5 | 0)) {
      i78 = i56;
      if ((HEAP32[(i56 & -65536) + 1048 >> 2] | 0) == 2) {
       i148 = i78 + 8 | 0;
      } else {
       i148 = (HEAP32[i78 >> 2] | 0) + 32 | 0;
      }
      i78 = HEAP32[i148 >> 2] | 0;
      if ((i78 | 0) == 0) {
       break;
      } else {
       i149 = i78;
      }
      while (1) {
       if ((i149 | 0) == (H_BASE + 3016 | 0)) {
        break;
       }
       i149 = HEAP32[i149 + 4 >> 2] | 0;
       if ((i149 | 0) == 0) {
        break L328;
       }
      }
      if ((i56 | 0) == 0) {
       break;
      }
      i78 = HEAP32[i56 + 12 >> 2] | 0;
      if (i52 >>> 0 < 5 >>> 0) {
       i73 = __ZN3JSC29createNotEnoughArgumentsErrorEPNS_9ExecStateE(i1) | 0;
       i139 = (i73 | 0) == 0;
       i140 = HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
       i150 = i4 | 0;
       HEAP32[i150 >> 2] = (i139 ? 0 : 0) | i73;
       HEAP32[i150 + 4 >> 2] = i139 ? -6 : -5;
       __ZN3JSC2VM14throwExceptionEPNS_9ExecStateENS_7JSValueE(i3, i140, i1, i4);
       i140 = i3 | 0;
       i75 = HEAP32[i140 + 4 >> 2] | 0;
       i76 = HEAP32[i140 >> 2] | 0;
       STACKTOP = i2;
       return (tempRet0 = i75, i76) | 0;
      }
      HEAP32[i5 >> 2] = 0;
      i140 = i6 | 0;
      HEAP32[i140 >> 2] = i54;
      HEAP32[i140 + 4 >> 2] = i55;
      i140 = __ZN7WebCore19toHTMLCanvasElementEN3JSC7JSValueE(i6) | 0;
      i139 = i1 + 16 | 0;
      i150 = HEAP32[i139 >> 2] | 0;
      i73 = (HEAP32[(i150 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
      if (!((HEAP32[i73 >> 2] & 0 | 0) == 0 & (HEAP32[i73 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
       i75 = -4;
       i76 = 0;
       STACKTOP = i2;
       return (tempRet0 = i75, i76) | 0;
      }
      do {
       if (((HEAP32[i51 >> 2] | 0) - 1 | 0) >>> 0 > 1 >>> 0) {
        i73 = i1 + 56 | 0;
        i151 = HEAP32[i73 >> 2] | 0;
        i152 = HEAP32[i73 + 4 >> 2] | 0;
        d143 = +HEAPF64[i73 >> 3];
        i73 = i7 | 0;
        HEAP32[i73 >> 2] = i151;
        HEAP32[i73 + 4 >> 2] = i152;
        i73 = i152;
        if ((i73 | 0) == -1) {
         d153 = +(i151 | 0);
         i154 = i150;
         break;
        } else {
         if (i73 >>> 0 < 4294967289 >>> 0) {
          d153 = d143;
          i154 = i150;
          break;
         } else {
          i59 = 218;
          break;
         }
        }
       } else {
        HEAP32[i7 + 4 >> 2] = -4;
        HEAP32[i7 >> 2] = 0;
        i59 = 218;
       }
      } while (0);
      if ((i59 | 0) == 218) {
       d143 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i7, i1);
       d153 = d143;
       i154 = HEAP32[i139 >> 2] | 0;
      }
      d143 = d153;
      i150 = (HEAP32[(i154 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
      if (!((HEAP32[i150 >> 2] & 0 | 0) == 0 & (HEAP32[i150 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
       i75 = -4;
       i76 = 0;
       STACKTOP = i2;
       return (tempRet0 = i75, i76) | 0;
      }
      do {
       if (((HEAP32[i51 >> 2] | 0) - 1 | 0) >>> 0 > 2 >>> 0) {
        i150 = i1 + 64 | 0;
        i73 = HEAP32[i150 >> 2] | 0;
        i151 = HEAP32[i150 + 4 >> 2] | 0;
        d155 = +HEAPF64[i150 >> 3];
        i150 = i8 | 0;
        HEAP32[i150 >> 2] = i73;
        HEAP32[i150 + 4 >> 2] = i151;
        i150 = i151;
        if ((i150 | 0) == -1) {
         d156 = +(i73 | 0);
         i157 = i154;
         break;
        }
        if (i150 >>> 0 < 4294967289 >>> 0) {
         d156 = d155;
         i157 = i154;
        } else {
         i59 = 224;
        }
       } else {
        HEAP32[i8 + 4 >> 2] = -4;
        HEAP32[i8 >> 2] = 0;
        i59 = 224;
       }
      } while (0);
      if ((i59 | 0) == 224) {
       d155 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i8, i1);
       d156 = d155;
       i157 = HEAP32[i139 >> 2] | 0;
      }
      d155 = d156;
      i150 = (HEAP32[(i157 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
      if (!((HEAP32[i150 >> 2] & 0 | 0) == 0 & (HEAP32[i150 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
       i75 = -4;
       i76 = 0;
       STACKTOP = i2;
       return (tempRet0 = i75, i76) | 0;
      }
      do {
       if (((HEAP32[i51 >> 2] | 0) - 1 | 0) >>> 0 > 3 >>> 0) {
        i150 = i1 + 72 | 0;
        i73 = HEAP32[i150 >> 2] | 0;
        i151 = HEAP32[i150 + 4 >> 2] | 0;
        d158 = +HEAPF64[i150 >> 3];
        i150 = i9 | 0;
        HEAP32[i150 >> 2] = i73;
        HEAP32[i150 + 4 >> 2] = i151;
        i150 = i151;
        if ((i150 | 0) == -1) {
         d159 = +(i73 | 0);
         i160 = i157;
         break;
        }
        if (i150 >>> 0 < 4294967289 >>> 0) {
         d159 = d158;
         i160 = i157;
        } else {
         i59 = 230;
        }
       } else {
        HEAP32[i9 + 4 >> 2] = -4;
        HEAP32[i9 >> 2] = 0;
        i59 = 230;
       }
      } while (0);
      if ((i59 | 0) == 230) {
       d158 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i9, i1);
       d159 = d158;
       i160 = HEAP32[i139 >> 2] | 0;
      }
      d158 = d159;
      i150 = (HEAP32[(i160 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
      if (!((HEAP32[i150 >> 2] & 0 | 0) == 0 & (HEAP32[i150 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
       i75 = -4;
       i76 = 0;
       STACKTOP = i2;
       return (tempRet0 = i75, i76) | 0;
      }
      do {
       if (((HEAP32[i51 >> 2] | 0) - 1 | 0) >>> 0 > 4 >>> 0) {
        i150 = i1 + 80 | 0;
        i73 = HEAP32[i150 >> 2] | 0;
        i151 = HEAP32[i150 + 4 >> 2] | 0;
        d161 = +HEAPF64[i150 >> 3];
        i150 = i10 | 0;
        HEAP32[i150 >> 2] = i73;
        HEAP32[i150 + 4 >> 2] = i151;
        i150 = i151;
        if ((i150 | 0) == -1) {
         d162 = +(i73 | 0);
         i163 = i160;
         break;
        }
        if (i150 >>> 0 < 4294967289 >>> 0) {
         d162 = d161;
         i163 = i160;
        } else {
         i59 = 236;
        }
       } else {
        HEAP32[i10 + 4 >> 2] = -4;
        HEAP32[i10 >> 2] = 0;
        i59 = 236;
       }
      } while (0);
      if ((i59 | 0) == 236) {
       d161 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i10, i1);
       d162 = d161;
       i163 = HEAP32[i139 >> 2] | 0;
      }
      i150 = (HEAP32[(i163 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
      if (!((HEAP32[i150 >> 2] & 0 | 0) == 0 & (HEAP32[i150 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
       i75 = -4;
       i76 = 0;
       STACKTOP = i2;
       return (tempRet0 = i75, i76) | 0;
      }
      __ZN7WebCore24CanvasRenderingContext2D9drawImageEPNS_17HTMLCanvasElementEffffRi(i78, i140, d143, d155, d158, d162, i5);
      __ZN7WebCore15setDOMExceptionEPN3JSC9ExecStateEi(i1, HEAP32[i5 >> 2] | 0);
      i75 = -4;
      i76 = 0;
      STACKTOP = i2;
      return (tempRet0 = i75, i76) | 0;
     }
    } while (0);
    i56 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
    i71 = (i56 | 0) == 0;
    i75 = (i71 ? -6 : -5) | 0;
    i76 = (i71 ? 0 : 0) | i56;
    STACKTOP = i2;
    return (tempRet0 = i75, i76) | 0;
   } else if ((i59 | 0) == 239) {
    if (i134) {
     i146 = i133;
     i59 = 240;
    } else {
     i59 = 310;
    }
   }
   if ((i59 | 0) == 240) {
    if ((i146 | 0) == (-5 | 0)) {
     i59 = 241;
    } else if ((i146 | 0) != (-3 | 0)) {
     i59 = 310;
    }
   }
   L394 : do {
    if ((i59 | 0) == 241) {
     if ((HEAPU8[(HEAP32[i53 >> 2] | 0) + 52 | 0] | 0) >>> 0 <= 16 >>> 0) {
      i59 = 310;
      break;
     }
     i56 = i53;
     if ((HEAP32[(i53 & -65536) + 1048 >> 2] | 0) == 2) {
      i164 = i56 + 8 | 0;
     } else {
      i164 = (HEAP32[i56 >> 2] | 0) + 32 | 0;
     }
     i56 = HEAP32[i164 >> 2] | 0;
     if ((i56 | 0) == 0) {
      i59 = 310;
      break;
     } else {
      i165 = i56;
     }
     while (1) {
      if ((i165 | 0) == (__ZN7WebCore19JSHTMLCanvasElement6s_infoE | 0)) {
       break L394;
      }
      i56 = HEAP32[i165 + 4 >> 2] | 0;
      if ((i56 | 0) == 0) {
       i59 = 310;
       break;
      } else {
       i165 = i56;
      }
     }
    }
   } while (0);
   if ((i59 | 0) == 310) {
    if (i52 >>> 0 < 3 >>> 0) {
     break;
    }
    i53 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
    i140 = (i53 | 0) == 0;
    i75 = (i140 ? -6 : -5) | 0;
    i76 = (i140 ? 0 : 0) | i53;
    STACKTOP = i2;
    return (tempRet0 = i75, i76) | 0;
   }
   i53 = i1 + 40 | 0;
   i140 = HEAP32[i53 >> 2] | 0;
   i78 = i140;
   L409 : do {
    if ((i140 & 0 | 0) == 0 & (HEAP32[i53 + 4 >> 2] & -1 | 0) == (-5 | 0)) {
     i139 = i78;
     if ((HEAP32[(i78 & -65536) + 1048 >> 2] | 0) == 2) {
      i166 = i139 + 8 | 0;
     } else {
      i166 = (HEAP32[i139 >> 2] | 0) + 32 | 0;
     }
     i139 = HEAP32[i166 >> 2] | 0;
     if ((i139 | 0) == 0) {
      break;
     } else {
      i167 = i139;
     }
     while (1) {
      if ((i167 | 0) == (H_BASE + 3016 | 0)) {
       break;
      }
      i167 = HEAP32[i167 + 4 >> 2] | 0;
      if ((i167 | 0) == 0) {
       break L409;
      }
     }
     if ((i78 | 0) == 0) {
      break;
     }
     i139 = HEAP32[i78 + 12 >> 2] | 0;
     if (i52 >>> 0 < 9 >>> 0) {
      i56 = __ZN3JSC29createNotEnoughArgumentsErrorEPNS_9ExecStateE(i1) | 0;
      i71 = (i56 | 0) == 0;
      i67 = HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
      i150 = i38 | 0;
      HEAP32[i150 >> 2] = (i71 ? 0 : 0) | i56;
      HEAP32[i150 + 4 >> 2] = i71 ? -6 : -5;
      __ZN3JSC2VM14throwExceptionEPNS_9ExecStateENS_7JSValueE(i37, i67, i1, i38);
      i67 = i37 | 0;
      i75 = HEAP32[i67 + 4 >> 2] | 0;
      i76 = HEAP32[i67 >> 2] | 0;
      STACKTOP = i2;
      return (tempRet0 = i75, i76) | 0;
     }
     HEAP32[i39 >> 2] = 0;
     i67 = i40 | 0;
     HEAP32[i67 >> 2] = i54;
     HEAP32[i67 + 4 >> 2] = i55;
     i67 = __ZN7WebCore19toHTMLCanvasElementEN3JSC7JSValueE(i40) | 0;
     i71 = i1 + 16 | 0;
     i150 = HEAP32[i71 >> 2] | 0;
     i56 = (HEAP32[(i150 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
     if (!((HEAP32[i56 >> 2] & 0 | 0) == 0 & (HEAP32[i56 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
      i75 = -4;
      i76 = 0;
      STACKTOP = i2;
      return (tempRet0 = i75, i76) | 0;
     }
     do {
      if (((HEAP32[i51 >> 2] | 0) - 1 | 0) >>> 0 > 1 >>> 0) {
       i56 = i1 + 56 | 0;
       i73 = HEAP32[i56 >> 2] | 0;
       i151 = HEAP32[i56 + 4 >> 2] | 0;
       d158 = +HEAPF64[i56 >> 3];
       i56 = i41 | 0;
       HEAP32[i56 >> 2] = i73;
       HEAP32[i56 + 4 >> 2] = i151;
       i56 = i151;
       if ((i56 | 0) == -1) {
        d168 = +(i73 | 0);
        i169 = i150;
        break;
       } else {
        if (i56 >>> 0 < 4294967289 >>> 0) {
         d168 = d158;
         i169 = i150;
         break;
        } else {
         i59 = 265;
         break;
        }
       }
      } else {
       HEAP32[i41 + 4 >> 2] = -4;
       HEAP32[i41 >> 2] = 0;
       i59 = 265;
      }
     } while (0);
     if ((i59 | 0) == 265) {
      d158 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i41, i1);
      d168 = d158;
      i169 = HEAP32[i71 >> 2] | 0;
     }
     d158 = d168;
     i150 = (HEAP32[(i169 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
     if (!((HEAP32[i150 >> 2] & 0 | 0) == 0 & (HEAP32[i150 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
      i75 = -4;
      i76 = 0;
      STACKTOP = i2;
      return (tempRet0 = i75, i76) | 0;
     }
     do {
      if (((HEAP32[i51 >> 2] | 0) - 1 | 0) >>> 0 > 2 >>> 0) {
       i150 = i1 + 64 | 0;
       i56 = HEAP32[i150 >> 2] | 0;
       i73 = HEAP32[i150 + 4 >> 2] | 0;
       d155 = +HEAPF64[i150 >> 3];
       i150 = i42 | 0;
       HEAP32[i150 >> 2] = i56;
       HEAP32[i150 + 4 >> 2] = i73;
       i150 = i73;
       if ((i150 | 0) == -1) {
        d170 = +(i56 | 0);
        i171 = i169;
        break;
       }
       if (i150 >>> 0 < 4294967289 >>> 0) {
        d170 = d155;
        i171 = i169;
       } else {
        i59 = 271;
       }
      } else {
       HEAP32[i42 + 4 >> 2] = -4;
       HEAP32[i42 >> 2] = 0;
       i59 = 271;
      }
     } while (0);
     if ((i59 | 0) == 271) {
      d155 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i42, i1);
      d170 = d155;
      i171 = HEAP32[i71 >> 2] | 0;
     }
     d155 = d170;
     i150 = (HEAP32[(i171 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
     if (!((HEAP32[i150 >> 2] & 0 | 0) == 0 & (HEAP32[i150 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
      i75 = -4;
      i76 = 0;
      STACKTOP = i2;
      return (tempRet0 = i75, i76) | 0;
     }
     do {
      if (((HEAP32[i51 >> 2] | 0) - 1 | 0) >>> 0 > 3 >>> 0) {
       i150 = i1 + 72 | 0;
       i56 = HEAP32[i150 >> 2] | 0;
       i73 = HEAP32[i150 + 4 >> 2] | 0;
       d143 = +HEAPF64[i150 >> 3];
       i150 = i43 | 0;
       HEAP32[i150 >> 2] = i56;
       HEAP32[i150 + 4 >> 2] = i73;
       i150 = i73;
       if ((i150 | 0) == -1) {
        d172 = +(i56 | 0);
        i173 = i171;
        break;
       }
       if (i150 >>> 0 < 4294967289 >>> 0) {
        d172 = d143;
        i173 = i171;
       } else {
        i59 = 277;
       }
      } else {
       HEAP32[i43 + 4 >> 2] = -4;
       HEAP32[i43 >> 2] = 0;
       i59 = 277;
      }
     } while (0);
     if ((i59 | 0) == 277) {
      d143 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i43, i1);
      d172 = d143;
      i173 = HEAP32[i71 >> 2] | 0;
     }
     d143 = d172;
     i150 = (HEAP32[(i173 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
     if (!((HEAP32[i150 >> 2] & 0 | 0) == 0 & (HEAP32[i150 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
      i75 = -4;
      i76 = 0;
      STACKTOP = i2;
      return (tempRet0 = i75, i76) | 0;
     }
     do {
      if (((HEAP32[i51 >> 2] | 0) - 1 | 0) >>> 0 > 4 >>> 0) {
       i150 = i1 + 80 | 0;
       i56 = HEAP32[i150 >> 2] | 0;
       i73 = HEAP32[i150 + 4 >> 2] | 0;
       d161 = +HEAPF64[i150 >> 3];
       i150 = i44 | 0;
       HEAP32[i150 >> 2] = i56;
       HEAP32[i150 + 4 >> 2] = i73;
       i150 = i73;
       if ((i150 | 0) == -1) {
        d174 = +(i56 | 0);
        i175 = i173;
        break;
       }
       if (i150 >>> 0 < 4294967289 >>> 0) {
        d174 = d161;
        i175 = i173;
       } else {
        i59 = 283;
       }
      } else {
       HEAP32[i44 + 4 >> 2] = -4;
       HEAP32[i44 >> 2] = 0;
       i59 = 283;
      }
     } while (0);
     if ((i59 | 0) == 283) {
      d161 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i44, i1);
      d174 = d161;
      i175 = HEAP32[i71 >> 2] | 0;
     }
     d161 = d174;
     i150 = (HEAP32[(i175 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
     if (!((HEAP32[i150 >> 2] & 0 | 0) == 0 & (HEAP32[i150 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
      i75 = -4;
      i76 = 0;
      STACKTOP = i2;
      return (tempRet0 = i75, i76) | 0;
     }
     do {
      if (((HEAP32[i51 >> 2] | 0) - 1 | 0) >>> 0 > 5 >>> 0) {
       i150 = i1 + 88 | 0;
       i56 = HEAP32[i150 >> 2] | 0;
       i73 = HEAP32[i150 + 4 >> 2] | 0;
       d176 = +HEAPF64[i150 >> 3];
       i150 = i45 | 0;
       HEAP32[i150 >> 2] = i56;
       HEAP32[i150 + 4 >> 2] = i73;
       i150 = i73;
       if ((i150 | 0) == -1) {
        d177 = +(i56 | 0);
        i178 = i175;
        break;
       }
       if (i150 >>> 0 < 4294967289 >>> 0) {
        d177 = d176;
        i178 = i175;
       } else {
        i59 = 289;
       }
      } else {
       HEAP32[i45 + 4 >> 2] = -4;
       HEAP32[i45 >> 2] = 0;
       i59 = 289;
      }
     } while (0);
     if ((i59 | 0) == 289) {
      d176 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i45, i1);
      d177 = d176;
      i178 = HEAP32[i71 >> 2] | 0;
     }
     d176 = d177;
     i150 = (HEAP32[(i178 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
     if (!((HEAP32[i150 >> 2] & 0 | 0) == 0 & (HEAP32[i150 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
      i75 = -4;
      i76 = 0;
      STACKTOP = i2;
      return (tempRet0 = i75, i76) | 0;
     }
     do {
      if (((HEAP32[i51 >> 2] | 0) - 1 | 0) >>> 0 > 6 >>> 0) {
       i150 = i1 + 96 | 0;
       i56 = HEAP32[i150 >> 2] | 0;
       i73 = HEAP32[i150 + 4 >> 2] | 0;
       d179 = +HEAPF64[i150 >> 3];
       i150 = i46 | 0;
       HEAP32[i150 >> 2] = i56;
       HEAP32[i150 + 4 >> 2] = i73;
       i150 = i73;
       if ((i150 | 0) == -1) {
        d180 = +(i56 | 0);
        i181 = i178;
        break;
       }
       if (i150 >>> 0 < 4294967289 >>> 0) {
        d180 = d179;
        i181 = i178;
       } else {
        i59 = 295;
       }
      } else {
       HEAP32[i46 + 4 >> 2] = -4;
       HEAP32[i46 >> 2] = 0;
       i59 = 295;
      }
     } while (0);
     if ((i59 | 0) == 295) {
      d179 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i46, i1);
      d180 = d179;
      i181 = HEAP32[i71 >> 2] | 0;
     }
     d179 = d180;
     i150 = (HEAP32[(i181 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
     if (!((HEAP32[i150 >> 2] & 0 | 0) == 0 & (HEAP32[i150 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
      i75 = -4;
      i76 = 0;
      STACKTOP = i2;
      return (tempRet0 = i75, i76) | 0;
     }
     do {
      if (((HEAP32[i51 >> 2] | 0) - 1 | 0) >>> 0 > 7 >>> 0) {
       i150 = i1 + 104 | 0;
       i56 = HEAP32[i150 >> 2] | 0;
       i73 = HEAP32[i150 + 4 >> 2] | 0;
       d182 = +HEAPF64[i150 >> 3];
       i150 = i47 | 0;
       HEAP32[i150 >> 2] = i56;
       HEAP32[i150 + 4 >> 2] = i73;
       i150 = i73;
       if ((i150 | 0) == -1) {
        d183 = +(i56 | 0);
        i184 = i181;
        break;
       }
       if (i150 >>> 0 < 4294967289 >>> 0) {
        d183 = d182;
        i184 = i181;
       } else {
        i59 = 301;
       }
      } else {
       HEAP32[i47 + 4 >> 2] = -4;
       HEAP32[i47 >> 2] = 0;
       i59 = 301;
      }
     } while (0);
     if ((i59 | 0) == 301) {
      d182 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i47, i1);
      d183 = d182;
      i184 = HEAP32[i71 >> 2] | 0;
     }
     d182 = d183;
     i150 = (HEAP32[(i184 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
     if (!((HEAP32[i150 >> 2] & 0 | 0) == 0 & (HEAP32[i150 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
      i75 = -4;
      i76 = 0;
      STACKTOP = i2;
      return (tempRet0 = i75, i76) | 0;
     }
     do {
      if (((HEAP32[i51 >> 2] | 0) - 1 | 0) >>> 0 > 8 >>> 0) {
       i150 = i1 + 112 | 0;
       i56 = HEAP32[i150 >> 2] | 0;
       i73 = HEAP32[i150 + 4 >> 2] | 0;
       d185 = +HEAPF64[i150 >> 3];
       i150 = i48 | 0;
       HEAP32[i150 >> 2] = i56;
       HEAP32[i150 + 4 >> 2] = i73;
       i150 = i73;
       if ((i150 | 0) == -1) {
        d186 = +(i56 | 0);
        i187 = i184;
        break;
       }
       if (i150 >>> 0 < 4294967289 >>> 0) {
        d186 = d185;
        i187 = i184;
       } else {
        i59 = 307;
       }
      } else {
       HEAP32[i48 + 4 >> 2] = -4;
       HEAP32[i48 >> 2] = 0;
       i59 = 307;
      }
     } while (0);
     if ((i59 | 0) == 307) {
      d185 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i48, i1);
      d186 = d185;
      i187 = HEAP32[i71 >> 2] | 0;
     }
     i150 = (HEAP32[(i187 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
     if (!((HEAP32[i150 >> 2] & 0 | 0) == 0 & (HEAP32[i150 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
      i75 = -4;
      i76 = 0;
      STACKTOP = i2;
      return (tempRet0 = i75, i76) | 0;
     }
     __ZN7WebCore24CanvasRenderingContext2D9drawImageEPNS_17HTMLCanvasElementEffffffffRi(i139, i67, d158, d155, d143, d161, d176, d179, d182, d186, i39);
     __ZN7WebCore15setDOMExceptionEPN3JSC9ExecStateEi(i1, HEAP32[i39 >> 2] | 0);
     i75 = -4;
     i76 = 0;
     STACKTOP = i2;
     return (tempRet0 = i75, i76) | 0;
    }
   } while (0);
   i55 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
   i54 = (i55 | 0) == 0;
   i75 = (i54 ? -6 : -5) | 0;
   i76 = (i54 ? 0 : 0) | i55;
   STACKTOP = i2;
   return (tempRet0 = i75, i76) | 0;
  }
 } while (0);
 i39 = __ZN3JSC29createNotEnoughArgumentsErrorEPNS_9ExecStateE(i1) | 0;
 i187 = (i39 | 0) == 0;
 i48 = HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
 i59 = i50 | 0;
 HEAP32[i59 >> 2] = (i187 ? 0 : 0) | i39;
 HEAP32[i59 + 4 >> 2] = i187 ? -6 : -5;
 __ZN3JSC2VM14throwExceptionEPNS_9ExecStateENS_7JSValueE(i49, i48, i1, i50);
 i50 = i49 | 0;
 i75 = HEAP32[i50 + 4 >> 2] | 0;
 i76 = HEAP32[i50 >> 2] | 0;
 STACKTOP = i2;
 return (tempRet0 = i75, i76) | 0;
}
function __ZN7WebCore52jsCanvasRenderingContext2DPrototypeFunctionSetShadowEPN3JSC9ExecStateE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, d55 = +0, d56 = +0, i57 = 0, d58 = +0, d59 = +0, i60 = 0, d61 = +0, d62 = +0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, d70 = +0, d71 = +0, i72 = 0, i73 = 0, i74 = 0, d75 = +0, d76 = +0, i77 = 0, d78 = +0, i79 = 0, d80 = +0, i81 = 0, d82 = +0, i83 = 0, i84 = 0, i85 = 0, d86 = +0, d87 = +0, i88 = 0, d89 = +0, i90 = 0, d91 = +0, i92 = 0, d93 = +0, i94 = 0, d95 = +0, i96 = 0, d97 = +0, i98 = 0, d99 = +0, i100 = 0, i101 = 0, i102 = 0, d103 = +0, d104 = +0, i105 = 0, d106 = +0, i107 = 0, d108 = +0, i109 = 0, d110 = +0, i111 = 0, d112 = +0, i113 = 0, d114 = +0, i115 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 288 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 40 | 0;
 i9 = i2 + 48 | 0;
 i10 = i2 + 56 | 0;
 i11 = i2 + 64 | 0;
 i12 = i2 + 72 | 0;
 i13 = i2 + 80 | 0;
 i14 = i2 + 88 | 0;
 i15 = i2 + 96 | 0;
 i16 = i2 + 104 | 0;
 i17 = i2 + 112 | 0;
 i18 = i2 + 120 | 0;
 i19 = i2 + 128 | 0;
 i20 = i2 + 136 | 0;
 i21 = i2 + 144 | 0;
 i22 = i2 + 152 | 0;
 i23 = i2 + 160 | 0;
 i24 = i2 + 168 | 0;
 i25 = i2 + 176 | 0;
 i26 = i2 + 184 | 0;
 i27 = i2 + 192 | 0;
 i28 = i2 + 200 | 0;
 i29 = i2 + 208 | 0;
 i30 = i2 + 216 | 0;
 i31 = i2 + 224 | 0;
 i32 = i2 + 232 | 0;
 i33 = i2 + 240 | 0;
 i34 = i2 + 248 | 0;
 i35 = i2 + 256 | 0;
 i36 = i2 + 264 | 0;
 i37 = i2 + 272 | 0;
 i38 = i2 + 280 | 0;
 i39 = i1 + 32 | 0;
 i40 = HEAP32[i39 >> 2] | 0;
 i41 = i40 - 1 | 0;
 if (i41 >>> 0 > 3 >>> 0) {
  i42 = i1 + 72 | 0;
  i43 = HEAP32[i42 >> 2] | 0;
  i44 = HEAP32[i42 + 4 >> 2] | 0;
 } else {
  i43 = 0;
  i44 = -4;
 }
 do {
  if ((i40 | 0) == 6) {
   i45 = i44 + 4 | 0;
   i46 = 9;
  } else if ((i40 | 0) == 5) {
   i42 = i44 + 4 | 0;
   if (i42 >>> 0 < 2 >>> 0) {
    i46 = 12;
    break;
   }
   if ((i44 | 0) == -5) {
    i47 = HEAP8[(HEAP32[i43 >> 2] | 0) + 52 | 0] | 0;
    if (i47 << 24 >> 24 == 5 | (i47 & 255) >>> 0 > 16 >>> 0) {
     i46 = 12;
     break;
    }
   }
   if ((i41 | 0) == 5) {
    i45 = i42;
    i46 = 9;
   }
  } else if ((i40 | 0) == 4) {
   i46 = 12;
  }
 } while (0);
 do {
  if ((i46 | 0) == 9) {
   if (i45 >>> 0 < 2 >>> 0) {
    i46 = 12;
    break;
   }
   if ((i44 | 0) != -5) {
    break;
   }
   i42 = HEAP8[(HEAP32[i43 >> 2] | 0) + 52 | 0] | 0;
   if (i42 << 24 >> 24 == 5 | (i42 & 255) >>> 0 > 16 >>> 0) {
    i46 = 12;
   }
  }
 } while (0);
 if ((i46 | 0) == 12) {
  i43 = i1 + 40 | 0;
  i44 = HEAP32[i43 >> 2] | 0;
  i45 = i44;
  L17 : do {
   if ((i44 & 0 | 0) == 0 & (HEAP32[i43 + 4 >> 2] & -1 | 0) == (-5 | 0)) {
    i42 = i45;
    if ((HEAP32[(i45 & -65536) + 1048 >> 2] | 0) == 2) {
     i48 = i42 + 8 | 0;
    } else {
     i48 = (HEAP32[i42 >> 2] | 0) + 32 | 0;
    }
    i42 = HEAP32[i48 >> 2] | 0;
    if ((i42 | 0) == 0) {
     break;
    } else {
     i49 = i42;
    }
    while (1) {
     if ((i49 | 0) == (H_BASE + 3016 | 0)) {
      break;
     }
     i49 = HEAP32[i49 + 4 >> 2] | 0;
     if ((i49 | 0) == 0) {
      break L17;
     }
    }
    if ((i45 | 0) == 0) {
     break;
    }
    i42 = HEAP32[i45 + 12 >> 2] | 0;
    if (i41 >>> 0 < 3 >>> 0) {
     i47 = __ZN3JSC29createNotEnoughArgumentsErrorEPNS_9ExecStateE(i1) | 0;
     i50 = (i47 | 0) == 0;
     i51 = HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
     i52 = i20 | 0;
     HEAP32[i52 >> 2] = (i50 ? 0 : 0) | i47;
     HEAP32[i52 + 4 >> 2] = i50 ? -6 : -5;
     __ZN3JSC2VM14throwExceptionEPNS_9ExecStateENS_7JSValueE(i19, i51, i1, i20);
     i51 = i19 | 0;
     i53 = HEAP32[i51 + 4 >> 2] | 0;
     i54 = HEAP32[i51 >> 2] | 0;
     STACKTOP = i2;
     return (tempRet0 = i53, i54) | 0;
    }
    i51 = i1 + 48 | 0;
    i50 = HEAP32[i51 >> 2] | 0;
    i52 = HEAP32[i51 + 4 >> 2] | 0;
    d55 = +HEAPF64[i51 >> 3];
    i51 = i21 | 0;
    HEAP32[i51 >> 2] = i50;
    HEAP32[i51 + 4 >> 2] = i52;
    i51 = i52;
    do {
     if ((i51 | 0) == -1) {
      d56 = +(i50 | 0);
     } else {
      if (i51 >>> 0 < 4294967289 >>> 0) {
       d56 = d55;
       break;
      }
      d56 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i21, i1);
     }
    } while (0);
    d55 = d56;
    i51 = i1 + 16 | 0;
    i50 = HEAP32[i51 >> 2] | 0;
    i52 = (HEAP32[(i50 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
    if (!((HEAP32[i52 >> 2] & 0 | 0) == 0 & (HEAP32[i52 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
     i53 = -4;
     i54 = 0;
     STACKTOP = i2;
     return (tempRet0 = i53, i54) | 0;
    }
    do {
     if (((HEAP32[i39 >> 2] | 0) - 1 | 0) >>> 0 > 1 >>> 0) {
      i52 = i1 + 56 | 0;
      i47 = HEAP32[i52 >> 2] | 0;
      i57 = HEAP32[i52 + 4 >> 2] | 0;
      d58 = +HEAPF64[i52 >> 3];
      i52 = i22 | 0;
      HEAP32[i52 >> 2] = i47;
      HEAP32[i52 + 4 >> 2] = i57;
      i52 = i57;
      if ((i52 | 0) == -1) {
       d59 = +(i47 | 0);
       i60 = i50;
       break;
      } else {
       if (i52 >>> 0 < 4294967289 >>> 0) {
        d59 = d58;
        i60 = i50;
        break;
       } else {
        i46 = 33;
        break;
       }
      }
     } else {
      HEAP32[i22 + 4 >> 2] = -4;
      HEAP32[i22 >> 2] = 0;
      i46 = 33;
     }
    } while (0);
    if ((i46 | 0) == 33) {
     d58 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i22, i1);
     d59 = d58;
     i60 = HEAP32[i51 >> 2] | 0;
    }
    d58 = d59;
    i50 = (HEAP32[(i60 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
    if (!((HEAP32[i50 >> 2] & 0 | 0) == 0 & (HEAP32[i50 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
     i53 = -4;
     i54 = 0;
     STACKTOP = i2;
     return (tempRet0 = i53, i54) | 0;
    }
    do {
     if (((HEAP32[i39 >> 2] | 0) - 1 | 0) >>> 0 > 2 >>> 0) {
      i50 = i1 + 64 | 0;
      i52 = HEAP32[i50 >> 2] | 0;
      i47 = HEAP32[i50 + 4 >> 2] | 0;
      d61 = +HEAPF64[i50 >> 3];
      i50 = i23 | 0;
      HEAP32[i50 >> 2] = i52;
      HEAP32[i50 + 4 >> 2] = i47;
      i50 = i47;
      if ((i50 | 0) == -1) {
       d62 = +(i52 | 0);
       i63 = i60;
       break;
      }
      if (i50 >>> 0 < 4294967289 >>> 0) {
       d62 = d61;
       i63 = i60;
      } else {
       i46 = 39;
      }
     } else {
      HEAP32[i23 + 4 >> 2] = -4;
      HEAP32[i23 >> 2] = 0;
      i46 = 39;
     }
    } while (0);
    if ((i46 | 0) == 39) {
     d61 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i23, i1);
     d62 = d61;
     i63 = HEAP32[i51 >> 2] | 0;
    }
    d61 = d62;
    i50 = (HEAP32[(i63 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
    if (!((HEAP32[i50 >> 2] & 0 | 0) == 0 & (HEAP32[i50 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
     i53 = -4;
     i54 = 0;
     STACKTOP = i2;
     return (tempRet0 = i53, i54) | 0;
    }
    i50 = (HEAP32[i39 >> 2] | 0) - 1 | 0;
    if (i50 >>> 0 < 4 >>> 0) {
     __ZN7WebCore24CanvasRenderingContext2D9setShadowEfff(i42, d55, d58, d61);
     i53 = -4;
     i54 = 0;
     STACKTOP = i2;
     return (tempRet0 = i53, i54) | 0;
    }
    i52 = i1 + 72 | 0;
    i47 = HEAP32[i52 >> 2] | 0;
    i57 = HEAP32[i52 + 4 >> 2] | 0;
    i52 = i47 & 0;
    i64 = i57 & -1;
    do {
     if ((i52 | 0) == 0 & (i64 | 0) == (-6 | 0)) {
      HEAP32[i24 >> 2] = 0;
     } else {
      do {
       if (i50 >>> 0 > 3 >>> 0) {
        i65 = i25 | 0;
        HEAP32[i65 >> 2] = i47;
        HEAP32[i65 + 4 >> 2] = i57;
        i65 = i47;
        if (!((i52 | 0) == 0 & (i64 | 0) == (-5 | 0))) {
         i46 = 50;
         break;
        }
        if ((HEAP8[(HEAP32[i65 >> 2] | 0) + 52 | 0] | 0) != 5) {
         i46 = 50;
         break;
        }
        i66 = i65;
       } else {
        HEAP32[i25 + 4 >> 2] = -4;
        HEAP32[i25 >> 2] = 0;
        i46 = 50;
       }
      } while (0);
      if ((i46 | 0) == 50) {
       i66 = __ZNK3JSC7JSValue16toStringSlowCaseEPNS_9ExecStateE(i25, i1) | 0;
      }
      i65 = i66 + 12 | 0;
      i67 = HEAP32[i65 >> 2] | 0;
      if ((i67 | 0) == 0) {
       __ZNK3JSC12JSRopeString11resolveRopeEPNS_9ExecStateE(i66, i1);
       i68 = HEAP32[i65 >> 2] | 0;
       HEAP32[i24 >> 2] = i68;
       if ((i68 | 0) == 0) {
        break;
       } else {
        i69 = i68;
       }
      } else {
       HEAP32[i24 >> 2] = i67;
       i69 = i67;
      }
      i67 = i69 | 0;
      HEAP32[i67 >> 2] = (HEAP32[i67 >> 2] | 0) + 2;
     }
    } while (0);
    i64 = HEAP32[i51 >> 2] | 0;
    i52 = (HEAP32[(i64 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
    do {
     if ((HEAP32[i52 >> 2] & 0 | 0) == 0 & (HEAP32[i52 + 4 >> 2] & -1 | 0) == (-6 | 0)) {
      if (i50 >>> 0 < 5 >>> 0) {
       __ZN7WebCore24CanvasRenderingContext2D9setShadowEfffRKN3WTF6StringE(i42, d55, d58, d61, i24);
       break;
      }
      do {
       if (((HEAP32[i39 >> 2] | 0) - 1 | 0) >>> 0 > 4 >>> 0) {
        i47 = i1 + 80 | 0;
        i57 = HEAP32[i47 >> 2] | 0;
        i67 = HEAP32[i47 + 4 >> 2] | 0;
        d70 = +HEAPF64[i47 >> 3];
        i47 = i26 | 0;
        HEAP32[i47 >> 2] = i57;
        HEAP32[i47 + 4 >> 2] = i67;
        i47 = i67;
        if ((i47 | 0) == -1) {
         d71 = +(i57 | 0);
         i72 = i64;
         break;
        } else {
         if (i47 >>> 0 < 4294967289 >>> 0) {
          d71 = d70;
          i72 = i64;
          break;
         } else {
          i46 = 63;
          break;
         }
        }
       } else {
        HEAP32[i26 + 4 >> 2] = -4;
        HEAP32[i26 >> 2] = 0;
        i46 = 63;
       }
      } while (0);
      if ((i46 | 0) == 63) {
       d70 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i26, i1);
       d71 = d70;
       i72 = HEAP32[i51 >> 2] | 0;
      }
      i47 = (HEAP32[(i72 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
      if (!((HEAP32[i47 >> 2] & 0 | 0) == 0 & (HEAP32[i47 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
       break;
      }
      __ZN7WebCore24CanvasRenderingContext2D9setShadowEfffRKN3WTF6StringEf(i42, d55, d58, d61, i24, d71);
     }
    } while (0);
    i42 = HEAP32[i24 >> 2] | 0;
    if ((i42 | 0) == 0) {
     i53 = -4;
     i54 = 0;
     STACKTOP = i2;
     return (tempRet0 = i53, i54) | 0;
    }
    i51 = i42 | 0;
    i64 = (HEAP32[i51 >> 2] | 0) - 2 | 0;
    if ((i64 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i42);
     i53 = -4;
     i54 = 0;
     STACKTOP = i2;
     return (tempRet0 = i53, i54) | 0;
    } else {
     HEAP32[i51 >> 2] = i64;
     i53 = -4;
     i54 = 0;
     STACKTOP = i2;
     return (tempRet0 = i53, i54) | 0;
    }
   }
  } while (0);
  i24 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
  i72 = (i24 | 0) == 0;
  i53 = (i72 ? -6 : -5) | 0;
  i54 = (i72 ? 0 : 0) | i24;
  STACKTOP = i2;
  return (tempRet0 = i53, i54) | 0;
 }
 if ((i40 - 5 | 0) >>> 0 < 2 >>> 0) {
  i24 = i1 + 40 | 0;
  i72 = HEAP32[i24 >> 2] | 0;
  i26 = i72;
  L111 : do {
   if ((i72 & 0 | 0) == 0 & (HEAP32[i24 + 4 >> 2] & -1 | 0) == (-5 | 0)) {
    i69 = i26;
    if ((HEAP32[(i26 & -65536) + 1048 >> 2] | 0) == 2) {
     i73 = i69 + 8 | 0;
    } else {
     i73 = (HEAP32[i69 >> 2] | 0) + 32 | 0;
    }
    i69 = HEAP32[i73 >> 2] | 0;
    if ((i69 | 0) == 0) {
     break;
    } else {
     i74 = i69;
    }
    while (1) {
     if ((i74 | 0) == (H_BASE + 3016 | 0)) {
      break;
     }
     i74 = HEAP32[i74 + 4 >> 2] | 0;
     if ((i74 | 0) == 0) {
      break L111;
     }
    }
    if ((i26 | 0) == 0) {
     break;
    }
    i69 = HEAP32[i26 + 12 >> 2] | 0;
    if (i41 >>> 0 < 4 >>> 0) {
     i66 = __ZN3JSC29createNotEnoughArgumentsErrorEPNS_9ExecStateE(i1) | 0;
     i25 = (i66 | 0) == 0;
     i63 = HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
     i23 = i13 | 0;
     HEAP32[i23 >> 2] = (i25 ? 0 : 0) | i66;
     HEAP32[i23 + 4 >> 2] = i25 ? -6 : -5;
     __ZN3JSC2VM14throwExceptionEPNS_9ExecStateENS_7JSValueE(i12, i63, i1, i13);
     i63 = i12 | 0;
     i53 = HEAP32[i63 + 4 >> 2] | 0;
     i54 = HEAP32[i63 >> 2] | 0;
     STACKTOP = i2;
     return (tempRet0 = i53, i54) | 0;
    }
    i63 = i1 + 48 | 0;
    i25 = HEAP32[i63 >> 2] | 0;
    i23 = HEAP32[i63 + 4 >> 2] | 0;
    d71 = +HEAPF64[i63 >> 3];
    i63 = i14 | 0;
    HEAP32[i63 >> 2] = i25;
    HEAP32[i63 + 4 >> 2] = i23;
    i63 = i23;
    do {
     if ((i63 | 0) == -1) {
      d75 = +(i25 | 0);
     } else {
      if (i63 >>> 0 < 4294967289 >>> 0) {
       d75 = d71;
       break;
      }
      d75 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i14, i1);
     }
    } while (0);
    d71 = d75;
    i63 = i1 + 16 | 0;
    i25 = HEAP32[i63 >> 2] | 0;
    i23 = (HEAP32[(i25 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
    if (!((HEAP32[i23 >> 2] & 0 | 0) == 0 & (HEAP32[i23 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
     i53 = -4;
     i54 = 0;
     STACKTOP = i2;
     return (tempRet0 = i53, i54) | 0;
    }
    do {
     if (((HEAP32[i39 >> 2] | 0) - 1 | 0) >>> 0 > 1 >>> 0) {
      i23 = i1 + 56 | 0;
      i66 = HEAP32[i23 >> 2] | 0;
      i60 = HEAP32[i23 + 4 >> 2] | 0;
      d62 = +HEAPF64[i23 >> 3];
      i23 = i15 | 0;
      HEAP32[i23 >> 2] = i66;
      HEAP32[i23 + 4 >> 2] = i60;
      i23 = i60;
      if ((i23 | 0) == -1) {
       d76 = +(i66 | 0);
       i77 = i25;
       break;
      } else {
       if (i23 >>> 0 < 4294967289 >>> 0) {
        d76 = d62;
        i77 = i25;
        break;
       } else {
        i46 = 92;
        break;
       }
      }
     } else {
      HEAP32[i15 + 4 >> 2] = -4;
      HEAP32[i15 >> 2] = 0;
      i46 = 92;
     }
    } while (0);
    if ((i46 | 0) == 92) {
     d62 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i15, i1);
     d76 = d62;
     i77 = HEAP32[i63 >> 2] | 0;
    }
    d62 = d76;
    i25 = (HEAP32[(i77 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
    if (!((HEAP32[i25 >> 2] & 0 | 0) == 0 & (HEAP32[i25 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
     i53 = -4;
     i54 = 0;
     STACKTOP = i2;
     return (tempRet0 = i53, i54) | 0;
    }
    do {
     if (((HEAP32[i39 >> 2] | 0) - 1 | 0) >>> 0 > 2 >>> 0) {
      i25 = i1 + 64 | 0;
      i23 = HEAP32[i25 >> 2] | 0;
      i66 = HEAP32[i25 + 4 >> 2] | 0;
      d59 = +HEAPF64[i25 >> 3];
      i25 = i16 | 0;
      HEAP32[i25 >> 2] = i23;
      HEAP32[i25 + 4 >> 2] = i66;
      i25 = i66;
      if ((i25 | 0) == -1) {
       d78 = +(i23 | 0);
       i79 = i77;
       break;
      }
      if (i25 >>> 0 < 4294967289 >>> 0) {
       d78 = d59;
       i79 = i77;
      } else {
       i46 = 98;
      }
     } else {
      HEAP32[i16 + 4 >> 2] = -4;
      HEAP32[i16 >> 2] = 0;
      i46 = 98;
     }
    } while (0);
    if ((i46 | 0) == 98) {
     d59 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i16, i1);
     d78 = d59;
     i79 = HEAP32[i63 >> 2] | 0;
    }
    d59 = d78;
    i25 = (HEAP32[(i79 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
    if (!((HEAP32[i25 >> 2] & 0 | 0) == 0 & (HEAP32[i25 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
     i53 = -4;
     i54 = 0;
     STACKTOP = i2;
     return (tempRet0 = i53, i54) | 0;
    }
    do {
     if (((HEAP32[i39 >> 2] | 0) - 1 | 0) >>> 0 > 3 >>> 0) {
      i25 = i1 + 72 | 0;
      i23 = HEAP32[i25 >> 2] | 0;
      i66 = HEAP32[i25 + 4 >> 2] | 0;
      d56 = +HEAPF64[i25 >> 3];
      i25 = i17 | 0;
      HEAP32[i25 >> 2] = i23;
      HEAP32[i25 + 4 >> 2] = i66;
      i25 = i66;
      if ((i25 | 0) == -1) {
       d80 = +(i23 | 0);
       i81 = i79;
       break;
      }
      if (i25 >>> 0 < 4294967289 >>> 0) {
       d80 = d56;
       i81 = i79;
      } else {
       i46 = 104;
      }
     } else {
      HEAP32[i17 + 4 >> 2] = -4;
      HEAP32[i17 >> 2] = 0;
      i46 = 104;
     }
    } while (0);
    if ((i46 | 0) == 104) {
     d56 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i17, i1);
     d80 = d56;
     i81 = HEAP32[i63 >> 2] | 0;
    }
    d56 = d80;
    i25 = (HEAP32[(i81 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
    if (!((HEAP32[i25 >> 2] & 0 | 0) == 0 & (HEAP32[i25 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
     i53 = -4;
     i54 = 0;
     STACKTOP = i2;
     return (tempRet0 = i53, i54) | 0;
    }
    if (((HEAP32[i39 >> 2] | 0) - 1 | 0) >>> 0 < 5 >>> 0) {
     __ZN7WebCore24CanvasRenderingContext2D9setShadowEffff(i69, d71, d62, d59, d56);
     i53 = -4;
     i54 = 0;
     STACKTOP = i2;
     return (tempRet0 = i53, i54) | 0;
    }
    i25 = i1 + 80 | 0;
    i23 = HEAP32[i25 >> 2] | 0;
    i66 = HEAP32[i25 + 4 >> 2] | 0;
    d61 = +HEAPF64[i25 >> 3];
    i25 = i18 | 0;
    HEAP32[i25 >> 2] = i23;
    HEAP32[i25 + 4 >> 2] = i66;
    i25 = i66;
    do {
     if ((i25 | 0) == -1) {
      d82 = +(i23 | 0);
      i83 = i81;
     } else {
      if (i25 >>> 0 < 4294967289 >>> 0) {
       d82 = d61;
       i83 = i81;
       break;
      }
      d58 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i18, i1);
      d82 = d58;
      i83 = HEAP32[i63 >> 2] | 0;
     }
    } while (0);
    i63 = (HEAP32[(i83 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
    if (!((HEAP32[i63 >> 2] & 0 | 0) == 0 & (HEAP32[i63 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
     i53 = -4;
     i54 = 0;
     STACKTOP = i2;
     return (tempRet0 = i53, i54) | 0;
    }
    __ZN7WebCore24CanvasRenderingContext2D9setShadowEfffff(i69, d71, d62, d59, d56, d82);
    i53 = -4;
    i54 = 0;
    STACKTOP = i2;
    return (tempRet0 = i53, i54) | 0;
   }
  } while (0);
  i83 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
  i18 = (i83 | 0) == 0;
  i53 = (i18 ? -6 : -5) | 0;
  i54 = (i18 ? 0 : 0) | i83;
  STACKTOP = i2;
  return (tempRet0 = i53, i54) | 0;
 }
 if ((i40 | 0) == 9) {
  i83 = i1 + 40 | 0;
  i18 = HEAP32[i83 >> 2] | 0;
  i81 = i18;
  L190 : do {
   if ((i18 & 0 | 0) == 0 & (HEAP32[i83 + 4 >> 2] & -1 | 0) == (-5 | 0)) {
    i17 = i81;
    if ((HEAP32[(i81 & -65536) + 1048 >> 2] | 0) == 2) {
     i84 = i17 + 8 | 0;
    } else {
     i84 = (HEAP32[i17 >> 2] | 0) + 32 | 0;
    }
    i17 = HEAP32[i84 >> 2] | 0;
    if ((i17 | 0) == 0) {
     break;
    } else {
     i85 = i17;
    }
    while (1) {
     if ((i85 | 0) == (H_BASE + 3016 | 0)) {
      break;
     }
     i85 = HEAP32[i85 + 4 >> 2] | 0;
     if ((i85 | 0) == 0) {
      break L190;
     }
    }
    if ((i81 | 0) == 0) {
     break;
    }
    i69 = HEAP32[i81 + 12 >> 2] | 0;
    if (i41 >>> 0 < 8 >>> 0) {
     i17 = __ZN3JSC29createNotEnoughArgumentsErrorEPNS_9ExecStateE(i1) | 0;
     i79 = (i17 | 0) == 0;
     i16 = HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
     i77 = i28 | 0;
     HEAP32[i77 >> 2] = (i79 ? 0 : 0) | i17;
     HEAP32[i77 + 4 >> 2] = i79 ? -6 : -5;
     __ZN3JSC2VM14throwExceptionEPNS_9ExecStateENS_7JSValueE(i27, i16, i1, i28);
     i16 = i27 | 0;
     i53 = HEAP32[i16 + 4 >> 2] | 0;
     i54 = HEAP32[i16 >> 2] | 0;
     STACKTOP = i2;
     return (tempRet0 = i53, i54) | 0;
    }
    i16 = i1 + 48 | 0;
    i79 = HEAP32[i16 >> 2] | 0;
    i77 = HEAP32[i16 + 4 >> 2] | 0;
    d56 = +HEAPF64[i16 >> 3];
    i16 = i29 | 0;
    HEAP32[i16 >> 2] = i79;
    HEAP32[i16 + 4 >> 2] = i77;
    i16 = i77;
    do {
     if ((i16 | 0) == -1) {
      d86 = +(i79 | 0);
     } else {
      if (i16 >>> 0 < 4294967289 >>> 0) {
       d86 = d56;
       break;
      }
      d86 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i29, i1);
     }
    } while (0);
    d56 = d86;
    i16 = i1 + 16 | 0;
    i79 = HEAP32[i16 >> 2] | 0;
    i77 = (HEAP32[(i79 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
    if (!((HEAP32[i77 >> 2] & 0 | 0) == 0 & (HEAP32[i77 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
     i53 = -4;
     i54 = 0;
     STACKTOP = i2;
     return (tempRet0 = i53, i54) | 0;
    }
    do {
     if (((HEAP32[i39 >> 2] | 0) - 1 | 0) >>> 0 > 1 >>> 0) {
      i77 = i1 + 56 | 0;
      i17 = HEAP32[i77 >> 2] | 0;
      i15 = HEAP32[i77 + 4 >> 2] | 0;
      d59 = +HEAPF64[i77 >> 3];
      i77 = i30 | 0;
      HEAP32[i77 >> 2] = i17;
      HEAP32[i77 + 4 >> 2] = i15;
      i77 = i15;
      if ((i77 | 0) == -1) {
       d87 = +(i17 | 0);
       i88 = i79;
       break;
      } else {
       if (i77 >>> 0 < 4294967289 >>> 0) {
        d87 = d59;
        i88 = i79;
        break;
       } else {
        i46 = 190;
        break;
       }
      }
     } else {
      HEAP32[i30 + 4 >> 2] = -4;
      HEAP32[i30 >> 2] = 0;
      i46 = 190;
     }
    } while (0);
    if ((i46 | 0) == 190) {
     d59 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i30, i1);
     d87 = d59;
     i88 = HEAP32[i16 >> 2] | 0;
    }
    d59 = d87;
    i79 = (HEAP32[(i88 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
    if (!((HEAP32[i79 >> 2] & 0 | 0) == 0 & (HEAP32[i79 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
     i53 = -4;
     i54 = 0;
     STACKTOP = i2;
     return (tempRet0 = i53, i54) | 0;
    }
    do {
     if (((HEAP32[i39 >> 2] | 0) - 1 | 0) >>> 0 > 2 >>> 0) {
      i79 = i1 + 64 | 0;
      i77 = HEAP32[i79 >> 2] | 0;
      i17 = HEAP32[i79 + 4 >> 2] | 0;
      d62 = +HEAPF64[i79 >> 3];
      i79 = i31 | 0;
      HEAP32[i79 >> 2] = i77;
      HEAP32[i79 + 4 >> 2] = i17;
      i79 = i17;
      if ((i79 | 0) == -1) {
       d89 = +(i77 | 0);
       i90 = i88;
       break;
      }
      if (i79 >>> 0 < 4294967289 >>> 0) {
       d89 = d62;
       i90 = i88;
      } else {
       i46 = 196;
      }
     } else {
      HEAP32[i31 + 4 >> 2] = -4;
      HEAP32[i31 >> 2] = 0;
      i46 = 196;
     }
    } while (0);
    if ((i46 | 0) == 196) {
     d62 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i31, i1);
     d89 = d62;
     i90 = HEAP32[i16 >> 2] | 0;
    }
    d62 = d89;
    i79 = (HEAP32[(i90 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
    if (!((HEAP32[i79 >> 2] & 0 | 0) == 0 & (HEAP32[i79 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
     i53 = -4;
     i54 = 0;
     STACKTOP = i2;
     return (tempRet0 = i53, i54) | 0;
    }
    do {
     if (((HEAP32[i39 >> 2] | 0) - 1 | 0) >>> 0 > 3 >>> 0) {
      i79 = i1 + 72 | 0;
      i77 = HEAP32[i79 >> 2] | 0;
      i17 = HEAP32[i79 + 4 >> 2] | 0;
      d71 = +HEAPF64[i79 >> 3];
      i79 = i32 | 0;
      HEAP32[i79 >> 2] = i77;
      HEAP32[i79 + 4 >> 2] = i17;
      i79 = i17;
      if ((i79 | 0) == -1) {
       d91 = +(i77 | 0);
       i92 = i90;
       break;
      }
      if (i79 >>> 0 < 4294967289 >>> 0) {
       d91 = d71;
       i92 = i90;
      } else {
       i46 = 202;
      }
     } else {
      HEAP32[i32 + 4 >> 2] = -4;
      HEAP32[i32 >> 2] = 0;
      i46 = 202;
     }
    } while (0);
    if ((i46 | 0) == 202) {
     d71 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i32, i1);
     d91 = d71;
     i92 = HEAP32[i16 >> 2] | 0;
    }
    d71 = d91;
    i79 = (HEAP32[(i92 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
    if (!((HEAP32[i79 >> 2] & 0 | 0) == 0 & (HEAP32[i79 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
     i53 = -4;
     i54 = 0;
     STACKTOP = i2;
     return (tempRet0 = i53, i54) | 0;
    }
    do {
     if (((HEAP32[i39 >> 2] | 0) - 1 | 0) >>> 0 > 4 >>> 0) {
      i79 = i1 + 80 | 0;
      i77 = HEAP32[i79 >> 2] | 0;
      i17 = HEAP32[i79 + 4 >> 2] | 0;
      d82 = +HEAPF64[i79 >> 3];
      i79 = i33 | 0;
      HEAP32[i79 >> 2] = i77;
      HEAP32[i79 + 4 >> 2] = i17;
      i79 = i17;
      if ((i79 | 0) == -1) {
       d93 = +(i77 | 0);
       i94 = i92;
       break;
      }
      if (i79 >>> 0 < 4294967289 >>> 0) {
       d93 = d82;
       i94 = i92;
      } else {
       i46 = 208;
      }
     } else {
      HEAP32[i33 + 4 >> 2] = -4;
      HEAP32[i33 >> 2] = 0;
      i46 = 208;
     }
    } while (0);
    if ((i46 | 0) == 208) {
     d82 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i33, i1);
     d93 = d82;
     i94 = HEAP32[i16 >> 2] | 0;
    }
    d82 = d93;
    i79 = (HEAP32[(i94 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
    if (!((HEAP32[i79 >> 2] & 0 | 0) == 0 & (HEAP32[i79 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
     i53 = -4;
     i54 = 0;
     STACKTOP = i2;
     return (tempRet0 = i53, i54) | 0;
    }
    do {
     if (((HEAP32[i39 >> 2] | 0) - 1 | 0) >>> 0 > 5 >>> 0) {
      i79 = i1 + 88 | 0;
      i77 = HEAP32[i79 >> 2] | 0;
      i17 = HEAP32[i79 + 4 >> 2] | 0;
      d80 = +HEAPF64[i79 >> 3];
      i79 = i34 | 0;
      HEAP32[i79 >> 2] = i77;
      HEAP32[i79 + 4 >> 2] = i17;
      i79 = i17;
      if ((i79 | 0) == -1) {
       d95 = +(i77 | 0);
       i96 = i94;
       break;
      }
      if (i79 >>> 0 < 4294967289 >>> 0) {
       d95 = d80;
       i96 = i94;
      } else {
       i46 = 214;
      }
     } else {
      HEAP32[i34 + 4 >> 2] = -4;
      HEAP32[i34 >> 2] = 0;
      i46 = 214;
     }
    } while (0);
    if ((i46 | 0) == 214) {
     d80 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i34, i1);
     d95 = d80;
     i96 = HEAP32[i16 >> 2] | 0;
    }
    d80 = d95;
    i79 = (HEAP32[(i96 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
    if (!((HEAP32[i79 >> 2] & 0 | 0) == 0 & (HEAP32[i79 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
     i53 = -4;
     i54 = 0;
     STACKTOP = i2;
     return (tempRet0 = i53, i54) | 0;
    }
    do {
     if (((HEAP32[i39 >> 2] | 0) - 1 | 0) >>> 0 > 6 >>> 0) {
      i79 = i1 + 96 | 0;
      i77 = HEAP32[i79 >> 2] | 0;
      i17 = HEAP32[i79 + 4 >> 2] | 0;
      d78 = +HEAPF64[i79 >> 3];
      i79 = i35 | 0;
      HEAP32[i79 >> 2] = i77;
      HEAP32[i79 + 4 >> 2] = i17;
      i79 = i17;
      if ((i79 | 0) == -1) {
       d97 = +(i77 | 0);
       i98 = i96;
       break;
      }
      if (i79 >>> 0 < 4294967289 >>> 0) {
       d97 = d78;
       i98 = i96;
      } else {
       i46 = 220;
      }
     } else {
      HEAP32[i35 + 4 >> 2] = -4;
      HEAP32[i35 >> 2] = 0;
      i46 = 220;
     }
    } while (0);
    if ((i46 | 0) == 220) {
     d78 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i35, i1);
     d97 = d78;
     i98 = HEAP32[i16 >> 2] | 0;
    }
    d78 = d97;
    i79 = (HEAP32[(i98 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
    if (!((HEAP32[i79 >> 2] & 0 | 0) == 0 & (HEAP32[i79 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
     i53 = -4;
     i54 = 0;
     STACKTOP = i2;
     return (tempRet0 = i53, i54) | 0;
    }
    do {
     if (((HEAP32[i39 >> 2] | 0) - 1 | 0) >>> 0 > 7 >>> 0) {
      i79 = i1 + 104 | 0;
      i77 = HEAP32[i79 >> 2] | 0;
      i17 = HEAP32[i79 + 4 >> 2] | 0;
      d76 = +HEAPF64[i79 >> 3];
      i79 = i36 | 0;
      HEAP32[i79 >> 2] = i77;
      HEAP32[i79 + 4 >> 2] = i17;
      i79 = i17;
      if ((i79 | 0) == -1) {
       d99 = +(i77 | 0);
       i100 = i98;
       break;
      }
      if (i79 >>> 0 < 4294967289 >>> 0) {
       d99 = d76;
       i100 = i98;
      } else {
       i46 = 226;
      }
     } else {
      HEAP32[i36 + 4 >> 2] = -4;
      HEAP32[i36 >> 2] = 0;
      i46 = 226;
     }
    } while (0);
    if ((i46 | 0) == 226) {
     d76 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i36, i1);
     d99 = d76;
     i100 = HEAP32[i16 >> 2] | 0;
    }
    i79 = (HEAP32[(i100 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
    if (!((HEAP32[i79 >> 2] & 0 | 0) == 0 & (HEAP32[i79 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
     i53 = -4;
     i54 = 0;
     STACKTOP = i2;
     return (tempRet0 = i53, i54) | 0;
    }
    __ZN7WebCore24CanvasRenderingContext2D9setShadowEffffffff(i69, d56, d59, d62, d71, d82, d80, d78, d99);
    i53 = -4;
    i54 = 0;
    STACKTOP = i2;
    return (tempRet0 = i53, i54) | 0;
   }
  } while (0);
  i100 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
  i36 = (i100 | 0) == 0;
  i53 = (i36 ? -6 : -5) | 0;
  i54 = (i36 ? 0 : 0) | i100;
  STACKTOP = i2;
  return (tempRet0 = i53, i54) | 0;
 } else if ((i40 | 0) == 8) {
  i40 = i1 + 40 | 0;
  i100 = HEAP32[i40 >> 2] | 0;
  i36 = i100;
  L289 : do {
   if ((i100 & 0 | 0) == 0 & (HEAP32[i40 + 4 >> 2] & -1 | 0) == (-5 | 0)) {
    i98 = i36;
    if ((HEAP32[(i36 & -65536) + 1048 >> 2] | 0) == 2) {
     i101 = i98 + 8 | 0;
    } else {
     i101 = (HEAP32[i98 >> 2] | 0) + 32 | 0;
    }
    i98 = HEAP32[i101 >> 2] | 0;
    if ((i98 | 0) == 0) {
     break;
    } else {
     i102 = i98;
    }
    while (1) {
     if ((i102 | 0) == (H_BASE + 3016 | 0)) {
      break;
     }
     i102 = HEAP32[i102 + 4 >> 2] | 0;
     if ((i102 | 0) == 0) {
      break L289;
     }
    }
    if ((i36 | 0) == 0) {
     break;
    }
    i69 = HEAP32[i36 + 12 >> 2] | 0;
    if (i41 >>> 0 < 7 >>> 0) {
     i16 = __ZN3JSC29createNotEnoughArgumentsErrorEPNS_9ExecStateE(i1) | 0;
     i98 = (i16 | 0) == 0;
     i35 = HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
     i96 = i4 | 0;
     HEAP32[i96 >> 2] = (i98 ? 0 : 0) | i16;
     HEAP32[i96 + 4 >> 2] = i98 ? -6 : -5;
     __ZN3JSC2VM14throwExceptionEPNS_9ExecStateENS_7JSValueE(i3, i35, i1, i4);
     i35 = i3 | 0;
     i53 = HEAP32[i35 + 4 >> 2] | 0;
     i54 = HEAP32[i35 >> 2] | 0;
     STACKTOP = i2;
     return (tempRet0 = i53, i54) | 0;
    }
    i35 = i1 + 48 | 0;
    i98 = HEAP32[i35 >> 2] | 0;
    i96 = HEAP32[i35 + 4 >> 2] | 0;
    d78 = +HEAPF64[i35 >> 3];
    i35 = i5 | 0;
    HEAP32[i35 >> 2] = i98;
    HEAP32[i35 + 4 >> 2] = i96;
    i35 = i96;
    do {
     if ((i35 | 0) == -1) {
      d103 = +(i98 | 0);
     } else {
      if (i35 >>> 0 < 4294967289 >>> 0) {
       d103 = d78;
       break;
      }
      d103 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i5, i1);
     }
    } while (0);
    d78 = d103;
    i35 = i1 + 16 | 0;
    i98 = HEAP32[i35 >> 2] | 0;
    i96 = (HEAP32[(i98 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
    if (!((HEAP32[i96 >> 2] & 0 | 0) == 0 & (HEAP32[i96 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
     i53 = -4;
     i54 = 0;
     STACKTOP = i2;
     return (tempRet0 = i53, i54) | 0;
    }
    do {
     if (((HEAP32[i39 >> 2] | 0) - 1 | 0) >>> 0 > 1 >>> 0) {
      i96 = i1 + 56 | 0;
      i16 = HEAP32[i96 >> 2] | 0;
      i34 = HEAP32[i96 + 4 >> 2] | 0;
      d80 = +HEAPF64[i96 >> 3];
      i96 = i6 | 0;
      HEAP32[i96 >> 2] = i16;
      HEAP32[i96 + 4 >> 2] = i34;
      i96 = i34;
      if ((i96 | 0) == -1) {
       d104 = +(i16 | 0);
       i105 = i98;
       break;
      } else {
       if (i96 >>> 0 < 4294967289 >>> 0) {
        d104 = d80;
        i105 = i98;
        break;
       } else {
        i46 = 136;
        break;
       }
      }
     } else {
      HEAP32[i6 + 4 >> 2] = -4;
      HEAP32[i6 >> 2] = 0;
      i46 = 136;
     }
    } while (0);
    if ((i46 | 0) == 136) {
     d80 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i6, i1);
     d104 = d80;
     i105 = HEAP32[i35 >> 2] | 0;
    }
    d80 = d104;
    i98 = (HEAP32[(i105 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
    if (!((HEAP32[i98 >> 2] & 0 | 0) == 0 & (HEAP32[i98 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
     i53 = -4;
     i54 = 0;
     STACKTOP = i2;
     return (tempRet0 = i53, i54) | 0;
    }
    do {
     if (((HEAP32[i39 >> 2] | 0) - 1 | 0) >>> 0 > 2 >>> 0) {
      i98 = i1 + 64 | 0;
      i96 = HEAP32[i98 >> 2] | 0;
      i16 = HEAP32[i98 + 4 >> 2] | 0;
      d82 = +HEAPF64[i98 >> 3];
      i98 = i7 | 0;
      HEAP32[i98 >> 2] = i96;
      HEAP32[i98 + 4 >> 2] = i16;
      i98 = i16;
      if ((i98 | 0) == -1) {
       d106 = +(i96 | 0);
       i107 = i105;
       break;
      }
      if (i98 >>> 0 < 4294967289 >>> 0) {
       d106 = d82;
       i107 = i105;
      } else {
       i46 = 142;
      }
     } else {
      HEAP32[i7 + 4 >> 2] = -4;
      HEAP32[i7 >> 2] = 0;
      i46 = 142;
     }
    } while (0);
    if ((i46 | 0) == 142) {
     d82 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i7, i1);
     d106 = d82;
     i107 = HEAP32[i35 >> 2] | 0;
    }
    d82 = d106;
    i98 = (HEAP32[(i107 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
    if (!((HEAP32[i98 >> 2] & 0 | 0) == 0 & (HEAP32[i98 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
     i53 = -4;
     i54 = 0;
     STACKTOP = i2;
     return (tempRet0 = i53, i54) | 0;
    }
    do {
     if (((HEAP32[i39 >> 2] | 0) - 1 | 0) >>> 0 > 3 >>> 0) {
      i98 = i1 + 72 | 0;
      i96 = HEAP32[i98 >> 2] | 0;
      i16 = HEAP32[i98 + 4 >> 2] | 0;
      d71 = +HEAPF64[i98 >> 3];
      i98 = i8 | 0;
      HEAP32[i98 >> 2] = i96;
      HEAP32[i98 + 4 >> 2] = i16;
      i98 = i16;
      if ((i98 | 0) == -1) {
       d108 = +(i96 | 0);
       i109 = i107;
       break;
      }
      if (i98 >>> 0 < 4294967289 >>> 0) {
       d108 = d71;
       i109 = i107;
      } else {
       i46 = 148;
      }
     } else {
      HEAP32[i8 + 4 >> 2] = -4;
      HEAP32[i8 >> 2] = 0;
      i46 = 148;
     }
    } while (0);
    if ((i46 | 0) == 148) {
     d71 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i8, i1);
     d108 = d71;
     i109 = HEAP32[i35 >> 2] | 0;
    }
    d71 = d108;
    i98 = (HEAP32[(i109 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
    if (!((HEAP32[i98 >> 2] & 0 | 0) == 0 & (HEAP32[i98 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
     i53 = -4;
     i54 = 0;
     STACKTOP = i2;
     return (tempRet0 = i53, i54) | 0;
    }
    do {
     if (((HEAP32[i39 >> 2] | 0) - 1 | 0) >>> 0 > 4 >>> 0) {
      i98 = i1 + 80 | 0;
      i96 = HEAP32[i98 >> 2] | 0;
      i16 = HEAP32[i98 + 4 >> 2] | 0;
      d62 = +HEAPF64[i98 >> 3];
      i98 = i9 | 0;
      HEAP32[i98 >> 2] = i96;
      HEAP32[i98 + 4 >> 2] = i16;
      i98 = i16;
      if ((i98 | 0) == -1) {
       d110 = +(i96 | 0);
       i111 = i109;
       break;
      }
      if (i98 >>> 0 < 4294967289 >>> 0) {
       d110 = d62;
       i111 = i109;
      } else {
       i46 = 154;
      }
     } else {
      HEAP32[i9 + 4 >> 2] = -4;
      HEAP32[i9 >> 2] = 0;
      i46 = 154;
     }
    } while (0);
    if ((i46 | 0) == 154) {
     d62 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i9, i1);
     d110 = d62;
     i111 = HEAP32[i35 >> 2] | 0;
    }
    d62 = d110;
    i98 = (HEAP32[(i111 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
    if (!((HEAP32[i98 >> 2] & 0 | 0) == 0 & (HEAP32[i98 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
     i53 = -4;
     i54 = 0;
     STACKTOP = i2;
     return (tempRet0 = i53, i54) | 0;
    }
    do {
     if (((HEAP32[i39 >> 2] | 0) - 1 | 0) >>> 0 > 5 >>> 0) {
      i98 = i1 + 88 | 0;
      i96 = HEAP32[i98 >> 2] | 0;
      i16 = HEAP32[i98 + 4 >> 2] | 0;
      d59 = +HEAPF64[i98 >> 3];
      i98 = i10 | 0;
      HEAP32[i98 >> 2] = i96;
      HEAP32[i98 + 4 >> 2] = i16;
      i98 = i16;
      if ((i98 | 0) == -1) {
       d112 = +(i96 | 0);
       i113 = i111;
       break;
      }
      if (i98 >>> 0 < 4294967289 >>> 0) {
       d112 = d59;
       i113 = i111;
      } else {
       i46 = 160;
      }
     } else {
      HEAP32[i10 + 4 >> 2] = -4;
      HEAP32[i10 >> 2] = 0;
      i46 = 160;
     }
    } while (0);
    if ((i46 | 0) == 160) {
     d59 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i10, i1);
     d112 = d59;
     i113 = HEAP32[i35 >> 2] | 0;
    }
    d59 = d112;
    i98 = (HEAP32[(i113 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
    if (!((HEAP32[i98 >> 2] & 0 | 0) == 0 & (HEAP32[i98 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
     i53 = -4;
     i54 = 0;
     STACKTOP = i2;
     return (tempRet0 = i53, i54) | 0;
    }
    do {
     if (((HEAP32[i39 >> 2] | 0) - 1 | 0) >>> 0 > 6 >>> 0) {
      i98 = i1 + 96 | 0;
      i96 = HEAP32[i98 >> 2] | 0;
      i16 = HEAP32[i98 + 4 >> 2] | 0;
      d56 = +HEAPF64[i98 >> 3];
      i98 = i11 | 0;
      HEAP32[i98 >> 2] = i96;
      HEAP32[i98 + 4 >> 2] = i16;
      i98 = i16;
      if ((i98 | 0) == -1) {
       d114 = +(i96 | 0);
       i115 = i113;
       break;
      }
      if (i98 >>> 0 < 4294967289 >>> 0) {
       d114 = d56;
       i115 = i113;
      } else {
       i46 = 166;
      }
     } else {
      HEAP32[i11 + 4 >> 2] = -4;
      HEAP32[i11 >> 2] = 0;
      i46 = 166;
     }
    } while (0);
    if ((i46 | 0) == 166) {
     d56 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i11, i1);
     d114 = d56;
     i115 = HEAP32[i35 >> 2] | 0;
    }
    i98 = (HEAP32[(i115 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
    if (!((HEAP32[i98 >> 2] & 0 | 0) == 0 & (HEAP32[i98 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
     i53 = -4;
     i54 = 0;
     STACKTOP = i2;
     return (tempRet0 = i53, i54) | 0;
    }
    __ZN7WebCore24CanvasRenderingContext2D9setShadowEfffffff(i69, d78, d80, d82, d71, d62, d59, d114);
    i53 = -4;
    i54 = 0;
    STACKTOP = i2;
    return (tempRet0 = i53, i54) | 0;
   }
  } while (0);
  i115 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
  i11 = (i115 | 0) == 0;
  i53 = (i11 ? -6 : -5) | 0;
  i54 = (i11 ? 0 : 0) | i115;
  STACKTOP = i2;
  return (tempRet0 = i53, i54) | 0;
 } else {
  if (i41 >>> 0 < 3 >>> 0) {
   i41 = __ZN3JSC29createNotEnoughArgumentsErrorEPNS_9ExecStateE(i1) | 0;
   i115 = (i41 | 0) == 0;
   i11 = HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
   i46 = i38 | 0;
   HEAP32[i46 >> 2] = (i115 ? 0 : 0) | i41;
   HEAP32[i46 + 4 >> 2] = i115 ? -6 : -5;
   __ZN3JSC2VM14throwExceptionEPNS_9ExecStateENS_7JSValueE(i37, i11, i1, i38);
   i38 = i37 | 0;
   i53 = HEAP32[i38 + 4 >> 2] | 0;
   i54 = HEAP32[i38 >> 2] | 0;
   STACKTOP = i2;
   return (tempRet0 = i53, i54) | 0;
  } else {
   i38 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
   i1 = (i38 | 0) == 0;
   i53 = (i1 ? -6 : -5) | 0;
   i54 = (i1 ? 0 : 0) | i38;
   STACKTOP = i2;
   return (tempRet0 = i53, i54) | 0;
  }
 }
 return 0;
}
function __ZN7WebCore17getDOMConstructorINS_37JSCanvasRenderingContext2DConstructorEEEPN3JSC8JSObjectERNS2_2VMEPKNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i2 + 632 | 0;
 i10 = HEAP32[i2 + 640 >> 2] | 0;
 i11 = HEAP32[i9 >> 2] | 0;
 L1 : do {
  if ((i11 | 0) != 0) {
   i12 = i10 & ((((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) + ~(((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) + ~(((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) << 11));
   i13 = i11 + (i12 << 3) | 0;
   i14 = HEAP32[i13 >> 2] | 0;
   if ((i14 | 0) == (H_BASE + 2808 | 0)) {
    i15 = i13;
   } else {
    i13 = 0;
    i16 = i12;
    i12 = i14;
    while (1) {
     if ((i12 | 0) == 0) {
      break L1;
     }
     i14 = (i13 | 0) == 0 ? ((((((((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) + ~(((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) + ~(((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) << 11)) >>> 23) + ~((((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) + ~(((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) + ~(((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) << 11)) << 12 ^ (((((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) + ~(((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) + ~(((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) << 11)) >>> 23) + ~((((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) + ~(((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) + ~(((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) << 11))) >>> 7 ^ ((((((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) + ~(((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) + ~(((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) << 11)) >>> 23) + ~((((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) + ~(((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) + ~(((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) << 11)) << 12 ^ (((((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) + ~(((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) + ~(((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) << 11)) >>> 23) + ~((((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) + ~(((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) + ~(((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) << 11)))) << 2 ^ (((((((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) + ~(((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) + ~(((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) << 11)) >>> 23) + ~((((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) + ~(((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) + ~(((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) << 11)) << 12 ^ (((((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) + ~(((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) + ~(((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) << 11)) >>> 23) + ~((((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) + ~(((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) + ~(((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) << 11))) >>> 7 ^ ((((((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) + ~(((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) + ~(((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) << 11)) >>> 23) + ~((((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) + ~(((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) + ~(((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) << 11)) << 12 ^ (((((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) + ~(((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) + ~(((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) << 11)) >>> 23) + ~((((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) + ~(((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) + ~(((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) << 11))))) >>> 20 ^ ((((((((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) + ~(((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) + ~(((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) << 11)) >>> 23) + ~((((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) + ~(((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) + ~(((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) << 11)) << 12 ^ (((((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) + ~(((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) + ~(((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) << 11)) >>> 23) + ~((((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) + ~(((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) + ~(((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) << 11))) >>> 7 ^ ((((((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) + ~(((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) + ~(((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) << 11)) >>> 23) + ~((((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) + ~(((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) + ~(((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) << 11)) << 12 ^ (((((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) + ~(((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) + ~(((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) << 11)) >>> 23) + ~((((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) + ~(((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) + ~(((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) << 11)))) << 2 ^ (((((((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) + ~(((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) + ~(((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) << 11)) >>> 23) + ~((((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) + ~(((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) + ~(((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) << 11)) << 12 ^ (((((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) + ~(((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) + ~(((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) << 11)) >>> 23) + ~((((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) + ~(((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) + ~(((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) << 11))) >>> 7 ^ ((((((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) + ~(((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) + ~(((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) << 11)) >>> 23) + ~((((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) + ~(((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) + ~(((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) << 11)) << 12 ^ (((((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) + ~(((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) + ~(((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) << 11)) >>> 23) + ~((((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) + ~(((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) + ~(((((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 2808 + ~(H_BASE + 2808 << 15) | 0) >>> 10 ^ H_BASE + 2808 + ~(H_BASE + 2808 << 15)) * 9 & -1) << 11))))) | 1 : i13;
     i17 = i14 + i16 & i10;
     i18 = i11 + (i17 << 3) | 0;
     i19 = HEAP32[i18 >> 2] | 0;
     if ((i19 | 0) == (H_BASE + 2808 | 0)) {
      i15 = i18;
      break;
     } else {
      i13 = i14;
      i16 = i17;
      i12 = i19;
     }
    }
   }
   if ((i15 | 0) == 0) {
    break;
   }
   i12 = HEAP32[i15 + 4 >> 2] | 0;
   if ((i12 | 0) == 0) {
    break;
   } else {
    i20 = i12;
   }
   STACKTOP = i3;
   return i20 | 0;
  }
 } while (0);
 i15 = HEAP32[i2 + 136 >> 2] | 0;
 i11 = (i15 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 2 | 0] = 0;
 HEAP8[i5 + 1 | 0] = -86;
 i10 = i1 + 7104 | 0;
 i12 = i10 | 0;
 i16 = HEAP32[i12 >> 2] | 0;
 if ((i16 | 0) == 0) {
  i21 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i12 >> 2] = HEAP32[i16 >> 2];
  i21 = i16;
 }
 HEAP32[i21 >> 2] = 0;
 i16 = i4 | 0;
 HEAP32[i16 >> 2] = (i11 ? 0 : 0) | i15;
 HEAP32[i16 + 4 >> 2] = i11 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i21, i1, i2, i4, i5, H_BASE + 2808, 0, 0);
 i5 = i1 + 460 | 0;
 i4 = i5 | 0;
 i11 = HEAP32[i4 >> 2] | 0;
 if ((i11 | 0) == 0) {
  i22 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i5, 12) | 0;
 } else {
  HEAP32[i4 >> 2] = HEAP32[i11 >> 2];
  i22 = i11;
 }
 HEAP32[i22 >> 2] = i21;
 HEAP32[i22 + 4 >> 2] = 0;
 HEAP32[i22 + 8 >> 2] = HEAP32[i21 + 32 >> 2];
 __ZN7WebCore37JSCanvasRenderingContext2DConstructor14finishCreationERN3JSC2VMEPNS_17JSDOMGlobalObjectE(i22, i1, i2);
 HEAP32[i6 >> 2] = 0;
 HEAP32[i7 >> 2] = H_BASE + 2808;
 __ZN3WTF9HashTableIPKN3JSC9ClassInfoENS_12KeyValuePairIS4_NS1_12WriteBarrierINS1_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7PtrHashIS4_EENS_7HashMapIS4_S8_SD_NS_10HashTraitsIS4_EENSF_IS8_EEE18KeyValuePairTraitsESG_E3addINS_17HashMapTranslatorISJ_SD_EES4_RS8_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S9_SB_SD_SJ_SG_EEEEOT0_OT1_(i8, i9 | 0, i7, i6);
 HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] = i22;
 i20 = i22;
 STACKTOP = i3;
 return i20 | 0;
}
function __ZN7WebCore57jsCanvasRenderingContext2DPrototypeFunctionSetStrokeColorEPN3JSC9ExecStateE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, d33 = +0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, d53 = +0, d54 = +0, i55 = 0, d56 = +0, i57 = 0, i58 = 0, d59 = +0, d60 = +0, i61 = 0, d62 = +0, i63 = 0, i64 = 0, d65 = +0, d66 = +0, i67 = 0, d68 = +0, i69 = 0, d70 = +0, d71 = +0, i72 = 0, i73 = 0, i74 = 0, d75 = +0, d76 = +0, i77 = 0, d78 = +0, i79 = 0, d80 = +0, i81 = 0, d82 = +0, d83 = +0, i84 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 192 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 40 | 0;
 i9 = i2 + 48 | 0;
 i10 = i2 + 56 | 0;
 i11 = i2 + 64 | 0;
 i12 = i2 + 72 | 0;
 i13 = i2 + 80 | 0;
 i14 = i2 + 88 | 0;
 i15 = i2 + 96 | 0;
 i16 = i2 + 104 | 0;
 i17 = i2 + 112 | 0;
 i18 = i2 + 120 | 0;
 i19 = i2 + 128 | 0;
 i20 = i2 + 136 | 0;
 i21 = i2 + 144 | 0;
 i22 = i2 + 152 | 0;
 i23 = i2 + 160 | 0;
 i24 = i2 + 168 | 0;
 i25 = i2 + 176 | 0;
 i26 = i2 + 184 | 0;
 i27 = i1 + 32 | 0;
 i28 = HEAP32[i27 >> 2] | 0;
 i29 = i28 - 1 | 0;
 do {
  if ((i29 | 0) != 0) {
   i30 = i1 + 48 | 0;
   i31 = HEAP32[i30 >> 2] | 0;
   i32 = HEAP32[i30 + 4 >> 2] | 0;
   d33 = +HEAPF64[i30 >> 3];
   i30 = i31;
   i34 = i32;
   do {
    if ((i28 | 0) == 2) {
     i35 = i34 + 4 | 0;
     if (i35 >>> 0 < 2 >>> 0) {
      i36 = 11;
      break;
     }
     if ((i34 | 0) == -5) {
      i37 = HEAP8[(HEAP32[i30 >> 2] | 0) + 52 | 0] | 0;
      if (i37 << 24 >> 24 == 5 | (i37 & 255) >>> 0 > 16 >>> 0) {
       i36 = 11;
       break;
      }
     }
     if ((i29 | 0) == 2) {
      i38 = i35;
      i36 = 8;
     }
    } else if ((i28 | 0) == 3) {
     i38 = i34 + 4 | 0;
     i36 = 8;
    }
   } while (0);
   do {
    if ((i36 | 0) == 8) {
     if (i38 >>> 0 < 2 >>> 0) {
      i36 = 11;
      break;
     }
     if ((i34 | 0) != -5) {
      break;
     }
     i35 = HEAP8[(HEAP32[i30 >> 2] | 0) + 52 | 0] | 0;
     if (i35 << 24 >> 24 == 5 | (i35 & 255) >>> 0 > 16 >>> 0) {
      i36 = 11;
     }
    }
   } while (0);
   if ((i36 | 0) == 11) {
    i35 = i1 + 40 | 0;
    i37 = HEAP32[i35 >> 2] | 0;
    i39 = i37;
    L16 : do {
     if ((i37 & 0 | 0) == 0 & (HEAP32[i35 + 4 >> 2] & -1 | 0) == (-5 | 0)) {
      i40 = i39;
      if ((HEAP32[(i39 & -65536) + 1048 >> 2] | 0) == 2) {
       i41 = i40 + 8 | 0;
      } else {
       i41 = (HEAP32[i40 >> 2] | 0) + 32 | 0;
      }
      i40 = HEAP32[i41 >> 2] | 0;
      if ((i40 | 0) == 0) {
       break;
      } else {
       i42 = i40;
      }
      while (1) {
       if ((i42 | 0) == (H_BASE + 3016 | 0)) {
        break;
       }
       i42 = HEAP32[i42 + 4 >> 2] | 0;
       if ((i42 | 0) == 0) {
        break L16;
       }
      }
      if ((i39 | 0) == 0) {
       break;
      }
      i40 = HEAP32[i39 + 12 >> 2] | 0;
      if ((i28 | 0) == 1) {
       i43 = __ZN3JSC29createNotEnoughArgumentsErrorEPNS_9ExecStateE(i1) | 0;
       i44 = (i43 | 0) == 0;
       i45 = HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
       i46 = i14 | 0;
       HEAP32[i46 >> 2] = (i44 ? 0 : 0) | i43;
       HEAP32[i46 + 4 >> 2] = i44 ? -6 : -5;
       __ZN3JSC2VM14throwExceptionEPNS_9ExecStateENS_7JSValueE(i13, i45, i1, i14);
       i45 = i13 | 0;
       i47 = HEAP32[i45 + 4 >> 2] | 0;
       i48 = HEAP32[i45 >> 2] | 0;
       STACKTOP = i2;
       return (tempRet0 = i47, i48) | 0;
      }
      i45 = i31 & 0;
      i44 = i32 & -1;
      do {
       if ((i45 | 0) == 0 & (i44 | 0) == (-6 | 0)) {
        HEAP32[i15 >> 2] = 0;
       } else {
        i46 = i16 | 0;
        HEAP32[i46 >> 2] = i31;
        HEAP32[i46 + 4 >> 2] = i32;
        do {
         if ((i45 | 0) == 0 & (i44 | 0) == (-5 | 0)) {
          if ((HEAP8[(HEAP32[i30 >> 2] | 0) + 52 | 0] | 0) != 5) {
           i36 = 27;
           break;
          }
          i49 = i30;
         } else {
          i36 = 27;
         }
        } while (0);
        if ((i36 | 0) == 27) {
         i49 = __ZNK3JSC7JSValue16toStringSlowCaseEPNS_9ExecStateE(i16, i1) | 0;
        }
        i46 = i49 + 12 | 0;
        i43 = HEAP32[i46 >> 2] | 0;
        if ((i43 | 0) == 0) {
         __ZNK3JSC12JSRopeString11resolveRopeEPNS_9ExecStateE(i49, i1);
         i50 = HEAP32[i46 >> 2] | 0;
         HEAP32[i15 >> 2] = i50;
         if ((i50 | 0) == 0) {
          break;
         } else {
          i51 = i50;
         }
        } else {
         HEAP32[i15 >> 2] = i43;
         i51 = i43;
        }
        i43 = i51 | 0;
        HEAP32[i43 >> 2] = (HEAP32[i43 >> 2] | 0) + 2;
       }
      } while (0);
      i44 = i1 + 16 | 0;
      i45 = HEAP32[i44 >> 2] | 0;
      i43 = (HEAP32[(i45 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
      do {
       if ((HEAP32[i43 >> 2] & 0 | 0) == 0 & (HEAP32[i43 + 4 >> 2] & -1 | 0) == (-6 | 0)) {
        if (((HEAP32[i27 >> 2] | 0) - 1 | 0) >>> 0 < 2 >>> 0) {
         __ZN7WebCore24CanvasRenderingContext2D14setStrokeColorERKN3WTF6StringE(i40, i15);
         break;
        }
        i50 = i1 + 56 | 0;
        i46 = HEAP32[i50 >> 2] | 0;
        i52 = HEAP32[i50 + 4 >> 2] | 0;
        d53 = +HEAPF64[i50 >> 3];
        i50 = i17 | 0;
        HEAP32[i50 >> 2] = i46;
        HEAP32[i50 + 4 >> 2] = i52;
        i50 = i52;
        do {
         if ((i50 | 0) == -1) {
          d54 = +(i46 | 0);
          i55 = i45;
         } else {
          if (i50 >>> 0 < 4294967289 >>> 0) {
           d54 = d53;
           i55 = i45;
           break;
          }
          d56 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i17, i1);
          d54 = d56;
          i55 = HEAP32[i44 >> 2] | 0;
         }
        } while (0);
        i50 = (HEAP32[(i55 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
        if (!((HEAP32[i50 >> 2] & 0 | 0) == 0 & (HEAP32[i50 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
         break;
        }
        __ZN7WebCore24CanvasRenderingContext2D14setStrokeColorERKN3WTF6StringEf(i40, i15, d54);
       }
      } while (0);
      i40 = HEAP32[i15 >> 2] | 0;
      if ((i40 | 0) == 0) {
       i47 = -4;
       i48 = 0;
       STACKTOP = i2;
       return (tempRet0 = i47, i48) | 0;
      }
      i44 = i40 | 0;
      i45 = (HEAP32[i44 >> 2] | 0) - 2 | 0;
      if ((i45 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i40);
       i47 = -4;
       i48 = 0;
       STACKTOP = i2;
       return (tempRet0 = i47, i48) | 0;
      } else {
       HEAP32[i44 >> 2] = i45;
       i47 = -4;
       i48 = 0;
       STACKTOP = i2;
       return (tempRet0 = i47, i48) | 0;
      }
     }
    } while (0);
    i39 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
    i35 = (i39 | 0) == 0;
    i47 = (i35 ? -6 : -5) | 0;
    i48 = (i35 ? 0 : 0) | i39;
    STACKTOP = i2;
    return (tempRet0 = i47, i48) | 0;
   }
   if ((i28 - 2 | 0) >>> 0 < 2 >>> 0) {
    i39 = i1 + 40 | 0;
    i35 = HEAP32[i39 >> 2] | 0;
    i37 = i35;
    L70 : do {
     if ((i35 & 0 | 0) == 0 & (HEAP32[i39 + 4 >> 2] & -1 | 0) == (-5 | 0)) {
      i45 = i37;
      if ((HEAP32[(i37 & -65536) + 1048 >> 2] | 0) == 2) {
       i57 = i45 + 8 | 0;
      } else {
       i57 = (HEAP32[i45 >> 2] | 0) + 32 | 0;
      }
      i45 = HEAP32[i57 >> 2] | 0;
      if ((i45 | 0) == 0) {
       break;
      } else {
       i58 = i45;
      }
      while (1) {
       if ((i58 | 0) == (H_BASE + 3016 | 0)) {
        break;
       }
       i58 = HEAP32[i58 + 4 >> 2] | 0;
       if ((i58 | 0) == 0) {
        break L70;
       }
      }
      if ((i37 | 0) == 0) {
       break;
      }
      i45 = HEAP32[i37 + 12 >> 2] | 0;
      if ((i28 | 0) == 1) {
       i44 = __ZN3JSC29createNotEnoughArgumentsErrorEPNS_9ExecStateE(i1) | 0;
       i40 = (i44 | 0) == 0;
       i43 = HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
       i50 = i10 | 0;
       HEAP32[i50 >> 2] = (i40 ? 0 : 0) | i44;
       HEAP32[i50 + 4 >> 2] = i40 ? -6 : -5;
       __ZN3JSC2VM14throwExceptionEPNS_9ExecStateENS_7JSValueE(i9, i43, i1, i10);
       i43 = i9 | 0;
       i47 = HEAP32[i43 + 4 >> 2] | 0;
       i48 = HEAP32[i43 >> 2] | 0;
       STACKTOP = i2;
       return (tempRet0 = i47, i48) | 0;
      }
      i43 = i11 | 0;
      HEAP32[i43 >> 2] = i31;
      HEAP32[i43 + 4 >> 2] = i32;
      do {
       if ((i34 | 0) == -1) {
        d59 = +(i30 | 0);
       } else {
        if (i34 >>> 0 < 4294967289 >>> 0) {
         d59 = d33;
         break;
        }
        d59 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i11, i1);
       }
      } while (0);
      d53 = d59;
      i43 = i1 + 16 | 0;
      i40 = HEAP32[i43 >> 2] | 0;
      i50 = (HEAP32[(i40 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
      if (!((HEAP32[i50 >> 2] & 0 | 0) == 0 & (HEAP32[i50 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
       i47 = -4;
       i48 = 0;
       STACKTOP = i2;
       return (tempRet0 = i47, i48) | 0;
      }
      if (((HEAP32[i27 >> 2] | 0) - 1 | 0) >>> 0 < 2 >>> 0) {
       __ZN7WebCore24CanvasRenderingContext2D14setStrokeColorEf(i45, d53);
       i47 = -4;
       i48 = 0;
       STACKTOP = i2;
       return (tempRet0 = i47, i48) | 0;
      }
      i50 = i1 + 56 | 0;
      i44 = HEAP32[i50 >> 2] | 0;
      i46 = HEAP32[i50 + 4 >> 2] | 0;
      d56 = +HEAPF64[i50 >> 3];
      i50 = i12 | 0;
      HEAP32[i50 >> 2] = i44;
      HEAP32[i50 + 4 >> 2] = i46;
      i50 = i46;
      do {
       if ((i50 | 0) == -1) {
        d60 = +(i44 | 0);
        i61 = i40;
       } else {
        if (i50 >>> 0 < 4294967289 >>> 0) {
         d60 = d56;
         i61 = i40;
         break;
        }
        d62 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i12, i1);
        d60 = d62;
        i61 = HEAP32[i43 >> 2] | 0;
       }
      } while (0);
      i43 = (HEAP32[(i61 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
      if (!((HEAP32[i43 >> 2] & 0 | 0) == 0 & (HEAP32[i43 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
       i47 = -4;
       i48 = 0;
       STACKTOP = i2;
       return (tempRet0 = i47, i48) | 0;
      }
      __ZN7WebCore24CanvasRenderingContext2D14setStrokeColorEff(i45, d53, d60);
      i47 = -4;
      i48 = 0;
      STACKTOP = i2;
      return (tempRet0 = i47, i48) | 0;
     }
    } while (0);
    i37 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
    i39 = (i37 | 0) == 0;
    i47 = (i39 ? -6 : -5) | 0;
    i48 = (i39 ? 0 : 0) | i37;
    STACKTOP = i2;
    return (tempRet0 = i47, i48) | 0;
   }
   if ((i28 | 0) == 5) {
    i37 = i1 + 40 | 0;
    i39 = HEAP32[i37 >> 2] | 0;
    i35 = i39;
    L111 : do {
     if ((i39 & 0 | 0) == 0 & (HEAP32[i37 + 4 >> 2] & -1 | 0) == (-5 | 0)) {
      i43 = i35;
      if ((HEAP32[(i35 & -65536) + 1048 >> 2] | 0) == 2) {
       i63 = i43 + 8 | 0;
      } else {
       i63 = (HEAP32[i43 >> 2] | 0) + 32 | 0;
      }
      i43 = HEAP32[i63 >> 2] | 0;
      if ((i43 | 0) == 0) {
       break;
      } else {
       i64 = i43;
      }
      while (1) {
       if ((i64 | 0) == (H_BASE + 3016 | 0)) {
        break;
       }
       i64 = HEAP32[i64 + 4 >> 2] | 0;
       if ((i64 | 0) == 0) {
        break L111;
       }
      }
      if ((i35 | 0) == 0) {
       break;
      }
      i45 = HEAP32[i35 + 12 >> 2] | 0;
      if (i29 >>> 0 < 4 >>> 0) {
       i43 = __ZN3JSC29createNotEnoughArgumentsErrorEPNS_9ExecStateE(i1) | 0;
       i40 = (i43 | 0) == 0;
       i50 = HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
       i44 = i4 | 0;
       HEAP32[i44 >> 2] = (i40 ? 0 : 0) | i43;
       HEAP32[i44 + 4 >> 2] = i40 ? -6 : -5;
       __ZN3JSC2VM14throwExceptionEPNS_9ExecStateENS_7JSValueE(i3, i50, i1, i4);
       i50 = i3 | 0;
       i47 = HEAP32[i50 + 4 >> 2] | 0;
       i48 = HEAP32[i50 >> 2] | 0;
       STACKTOP = i2;
       return (tempRet0 = i47, i48) | 0;
      }
      i50 = i5 | 0;
      HEAP32[i50 >> 2] = i31;
      HEAP32[i50 + 4 >> 2] = i32;
      do {
       if ((i34 | 0) == -1) {
        d65 = +(i30 | 0);
       } else {
        if (i34 >>> 0 < 4294967289 >>> 0) {
         d65 = d33;
         break;
        }
        d65 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i5, i1);
       }
      } while (0);
      d53 = d65;
      i50 = i1 + 16 | 0;
      i40 = HEAP32[i50 >> 2] | 0;
      i44 = (HEAP32[(i40 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
      if (!((HEAP32[i44 >> 2] & 0 | 0) == 0 & (HEAP32[i44 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
       i47 = -4;
       i48 = 0;
       STACKTOP = i2;
       return (tempRet0 = i47, i48) | 0;
      }
      do {
       if (((HEAP32[i27 >> 2] | 0) - 1 | 0) >>> 0 > 1 >>> 0) {
        i44 = i1 + 56 | 0;
        i43 = HEAP32[i44 >> 2] | 0;
        i46 = HEAP32[i44 + 4 >> 2] | 0;
        d56 = +HEAPF64[i44 >> 3];
        i44 = i6 | 0;
        HEAP32[i44 >> 2] = i43;
        HEAP32[i44 + 4 >> 2] = i46;
        i44 = i46;
        if ((i44 | 0) == -1) {
         d66 = +(i43 | 0);
         i67 = i40;
         break;
        } else {
         if (i44 >>> 0 < 4294967289 >>> 0) {
          d66 = d56;
          i67 = i40;
          break;
         } else {
          i36 = 92;
          break;
         }
        }
       } else {
        HEAP32[i6 + 4 >> 2] = -4;
        HEAP32[i6 >> 2] = 0;
        i36 = 92;
       }
      } while (0);
      if ((i36 | 0) == 92) {
       d56 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i6, i1);
       d66 = d56;
       i67 = HEAP32[i50 >> 2] | 0;
      }
      d56 = d66;
      i40 = (HEAP32[(i67 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
      if (!((HEAP32[i40 >> 2] & 0 | 0) == 0 & (HEAP32[i40 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
       i47 = -4;
       i48 = 0;
       STACKTOP = i2;
       return (tempRet0 = i47, i48) | 0;
      }
      do {
       if (((HEAP32[i27 >> 2] | 0) - 1 | 0) >>> 0 > 2 >>> 0) {
        i40 = i1 + 64 | 0;
        i44 = HEAP32[i40 >> 2] | 0;
        i43 = HEAP32[i40 + 4 >> 2] | 0;
        d62 = +HEAPF64[i40 >> 3];
        i40 = i7 | 0;
        HEAP32[i40 >> 2] = i44;
        HEAP32[i40 + 4 >> 2] = i43;
        i40 = i43;
        if ((i40 | 0) == -1) {
         d68 = +(i44 | 0);
         i69 = i67;
         break;
        }
        if (i40 >>> 0 < 4294967289 >>> 0) {
         d68 = d62;
         i69 = i67;
        } else {
         i36 = 98;
        }
       } else {
        HEAP32[i7 + 4 >> 2] = -4;
        HEAP32[i7 >> 2] = 0;
        i36 = 98;
       }
      } while (0);
      if ((i36 | 0) == 98) {
       d62 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i7, i1);
       d68 = d62;
       i69 = HEAP32[i50 >> 2] | 0;
      }
      d62 = d68;
      i40 = (HEAP32[(i69 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
      if (!((HEAP32[i40 >> 2] & 0 | 0) == 0 & (HEAP32[i40 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
       i47 = -4;
       i48 = 0;
       STACKTOP = i2;
       return (tempRet0 = i47, i48) | 0;
      }
      do {
       if (((HEAP32[i27 >> 2] | 0) - 1 | 0) >>> 0 > 3 >>> 0) {
        i40 = i1 + 72 | 0;
        i44 = HEAP32[i40 >> 2] | 0;
        i43 = HEAP32[i40 + 4 >> 2] | 0;
        d70 = +HEAPF64[i40 >> 3];
        i40 = i8 | 0;
        HEAP32[i40 >> 2] = i44;
        HEAP32[i40 + 4 >> 2] = i43;
        i40 = i43;
        if ((i40 | 0) == -1) {
         d71 = +(i44 | 0);
         i72 = i69;
         break;
        }
        if (i40 >>> 0 < 4294967289 >>> 0) {
         d71 = d70;
         i72 = i69;
        } else {
         i36 = 104;
        }
       } else {
        HEAP32[i8 + 4 >> 2] = -4;
        HEAP32[i8 >> 2] = 0;
        i36 = 104;
       }
      } while (0);
      if ((i36 | 0) == 104) {
       d70 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i8, i1);
       d71 = d70;
       i72 = HEAP32[i50 >> 2] | 0;
      }
      i40 = (HEAP32[(i72 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
      if (!((HEAP32[i40 >> 2] & 0 | 0) == 0 & (HEAP32[i40 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
       i47 = -4;
       i48 = 0;
       STACKTOP = i2;
       return (tempRet0 = i47, i48) | 0;
      }
      __ZN7WebCore24CanvasRenderingContext2D14setStrokeColorEffff(i45, d53, d56, d62, d71);
      i47 = -4;
      i48 = 0;
      STACKTOP = i2;
      return (tempRet0 = i47, i48) | 0;
     }
    } while (0);
    i35 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
    i37 = (i35 | 0) == 0;
    i47 = (i37 ? -6 : -5) | 0;
    i48 = (i37 ? 0 : 0) | i35;
    STACKTOP = i2;
    return (tempRet0 = i47, i48) | 0;
   } else if ((i28 | 0) == 6) {
    i35 = i1 + 40 | 0;
    i37 = HEAP32[i35 >> 2] | 0;
    i39 = i37;
    L170 : do {
     if ((i37 & 0 | 0) == 0 & (HEAP32[i35 + 4 >> 2] & -1 | 0) == (-5 | 0)) {
      i40 = i39;
      if ((HEAP32[(i39 & -65536) + 1048 >> 2] | 0) == 2) {
       i73 = i40 + 8 | 0;
      } else {
       i73 = (HEAP32[i40 >> 2] | 0) + 32 | 0;
      }
      i40 = HEAP32[i73 >> 2] | 0;
      if ((i40 | 0) == 0) {
       break;
      } else {
       i74 = i40;
      }
      while (1) {
       if ((i74 | 0) == (H_BASE + 3016 | 0)) {
        break;
       }
       i74 = HEAP32[i74 + 4 >> 2] | 0;
       if ((i74 | 0) == 0) {
        break L170;
       }
      }
      if ((i39 | 0) == 0) {
       break;
      }
      i45 = HEAP32[i39 + 12 >> 2] | 0;
      if (i29 >>> 0 < 5 >>> 0) {
       i50 = __ZN3JSC29createNotEnoughArgumentsErrorEPNS_9ExecStateE(i1) | 0;
       i40 = (i50 | 0) == 0;
       i44 = HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
       i43 = i19 | 0;
       HEAP32[i43 >> 2] = (i40 ? 0 : 0) | i50;
       HEAP32[i43 + 4 >> 2] = i40 ? -6 : -5;
       __ZN3JSC2VM14throwExceptionEPNS_9ExecStateENS_7JSValueE(i18, i44, i1, i19);
       i44 = i18 | 0;
       i47 = HEAP32[i44 + 4 >> 2] | 0;
       i48 = HEAP32[i44 >> 2] | 0;
       STACKTOP = i2;
       return (tempRet0 = i47, i48) | 0;
      }
      i44 = i20 | 0;
      HEAP32[i44 >> 2] = i31;
      HEAP32[i44 + 4 >> 2] = i32;
      do {
       if ((i34 | 0) == -1) {
        d75 = +(i30 | 0);
       } else {
        if (i34 >>> 0 < 4294967289 >>> 0) {
         d75 = d33;
         break;
        }
        d75 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i20, i1);
       }
      } while (0);
      d62 = d75;
      i44 = i1 + 16 | 0;
      i40 = HEAP32[i44 >> 2] | 0;
      i43 = (HEAP32[(i40 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
      if (!((HEAP32[i43 >> 2] & 0 | 0) == 0 & (HEAP32[i43 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
       i47 = -4;
       i48 = 0;
       STACKTOP = i2;
       return (tempRet0 = i47, i48) | 0;
      }
      do {
       if (((HEAP32[i27 >> 2] | 0) - 1 | 0) >>> 0 > 1 >>> 0) {
        i43 = i1 + 56 | 0;
        i50 = HEAP32[i43 >> 2] | 0;
        i46 = HEAP32[i43 + 4 >> 2] | 0;
        d56 = +HEAPF64[i43 >> 3];
        i43 = i21 | 0;
        HEAP32[i43 >> 2] = i50;
        HEAP32[i43 + 4 >> 2] = i46;
        i43 = i46;
        if ((i43 | 0) == -1) {
         d76 = +(i50 | 0);
         i77 = i40;
         break;
        } else {
         if (i43 >>> 0 < 4294967289 >>> 0) {
          d76 = d56;
          i77 = i40;
          break;
         } else {
          i36 = 128;
          break;
         }
        }
       } else {
        HEAP32[i21 + 4 >> 2] = -4;
        HEAP32[i21 >> 2] = 0;
        i36 = 128;
       }
      } while (0);
      if ((i36 | 0) == 128) {
       d56 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i21, i1);
       d76 = d56;
       i77 = HEAP32[i44 >> 2] | 0;
      }
      d56 = d76;
      i40 = (HEAP32[(i77 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
      if (!((HEAP32[i40 >> 2] & 0 | 0) == 0 & (HEAP32[i40 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
       i47 = -4;
       i48 = 0;
       STACKTOP = i2;
       return (tempRet0 = i47, i48) | 0;
      }
      do {
       if (((HEAP32[i27 >> 2] | 0) - 1 | 0) >>> 0 > 2 >>> 0) {
        i40 = i1 + 64 | 0;
        i43 = HEAP32[i40 >> 2] | 0;
        i50 = HEAP32[i40 + 4 >> 2] | 0;
        d53 = +HEAPF64[i40 >> 3];
        i40 = i22 | 0;
        HEAP32[i40 >> 2] = i43;
        HEAP32[i40 + 4 >> 2] = i50;
        i40 = i50;
        if ((i40 | 0) == -1) {
         d78 = +(i43 | 0);
         i79 = i77;
         break;
        }
        if (i40 >>> 0 < 4294967289 >>> 0) {
         d78 = d53;
         i79 = i77;
        } else {
         i36 = 134;
        }
       } else {
        HEAP32[i22 + 4 >> 2] = -4;
        HEAP32[i22 >> 2] = 0;
        i36 = 134;
       }
      } while (0);
      if ((i36 | 0) == 134) {
       d53 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i22, i1);
       d78 = d53;
       i79 = HEAP32[i44 >> 2] | 0;
      }
      d53 = d78;
      i40 = (HEAP32[(i79 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
      if (!((HEAP32[i40 >> 2] & 0 | 0) == 0 & (HEAP32[i40 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
       i47 = -4;
       i48 = 0;
       STACKTOP = i2;
       return (tempRet0 = i47, i48) | 0;
      }
      do {
       if (((HEAP32[i27 >> 2] | 0) - 1 | 0) >>> 0 > 3 >>> 0) {
        i40 = i1 + 72 | 0;
        i43 = HEAP32[i40 >> 2] | 0;
        i50 = HEAP32[i40 + 4 >> 2] | 0;
        d70 = +HEAPF64[i40 >> 3];
        i40 = i23 | 0;
        HEAP32[i40 >> 2] = i43;
        HEAP32[i40 + 4 >> 2] = i50;
        i40 = i50;
        if ((i40 | 0) == -1) {
         d80 = +(i43 | 0);
         i81 = i79;
         break;
        }
        if (i40 >>> 0 < 4294967289 >>> 0) {
         d80 = d70;
         i81 = i79;
        } else {
         i36 = 140;
        }
       } else {
        HEAP32[i23 + 4 >> 2] = -4;
        HEAP32[i23 >> 2] = 0;
        i36 = 140;
       }
      } while (0);
      if ((i36 | 0) == 140) {
       d70 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i23, i1);
       d80 = d70;
       i81 = HEAP32[i44 >> 2] | 0;
      }
      d70 = d80;
      i40 = (HEAP32[(i81 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
      if (!((HEAP32[i40 >> 2] & 0 | 0) == 0 & (HEAP32[i40 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
       i47 = -4;
       i48 = 0;
       STACKTOP = i2;
       return (tempRet0 = i47, i48) | 0;
      }
      do {
       if (((HEAP32[i27 >> 2] | 0) - 1 | 0) >>> 0 > 4 >>> 0) {
        i40 = i1 + 80 | 0;
        i43 = HEAP32[i40 >> 2] | 0;
        i50 = HEAP32[i40 + 4 >> 2] | 0;
        d82 = +HEAPF64[i40 >> 3];
        i40 = i24 | 0;
        HEAP32[i40 >> 2] = i43;
        HEAP32[i40 + 4 >> 2] = i50;
        i40 = i50;
        if ((i40 | 0) == -1) {
         d83 = +(i43 | 0);
         i84 = i81;
         break;
        }
        if (i40 >>> 0 < 4294967289 >>> 0) {
         d83 = d82;
         i84 = i81;
        } else {
         i36 = 146;
        }
       } else {
        HEAP32[i24 + 4 >> 2] = -4;
        HEAP32[i24 >> 2] = 0;
        i36 = 146;
       }
      } while (0);
      if ((i36 | 0) == 146) {
       d82 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i24, i1);
       d83 = d82;
       i84 = HEAP32[i44 >> 2] | 0;
      }
      i40 = (HEAP32[(i84 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
      if (!((HEAP32[i40 >> 2] & 0 | 0) == 0 & (HEAP32[i40 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
       i47 = -4;
       i48 = 0;
       STACKTOP = i2;
       return (tempRet0 = i47, i48) | 0;
      }
      __ZN7WebCore24CanvasRenderingContext2D14setStrokeColorEfffff(i45, d62, d56, d53, d70, d83);
      i47 = -4;
      i48 = 0;
      STACKTOP = i2;
      return (tempRet0 = i47, i48) | 0;
     }
    } while (0);
    i34 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
    i30 = (i34 | 0) == 0;
    i47 = (i30 ? -6 : -5) | 0;
    i48 = (i30 ? 0 : 0) | i34;
    STACKTOP = i2;
    return (tempRet0 = i47, i48) | 0;
   } else if ((i28 | 0) == 1) {
    break;
   } else {
    i34 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
    i30 = (i34 | 0) == 0;
    i47 = (i30 ? -6 : -5) | 0;
    i48 = (i30 ? 0 : 0) | i34;
    STACKTOP = i2;
    return (tempRet0 = i47, i48) | 0;
   }
  }
 } while (0);
 i28 = __ZN3JSC29createNotEnoughArgumentsErrorEPNS_9ExecStateE(i1) | 0;
 i84 = (i28 | 0) == 0;
 i24 = HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
 i36 = i26 | 0;
 HEAP32[i36 >> 2] = (i84 ? 0 : 0) | i28;
 HEAP32[i36 + 4 >> 2] = i84 ? -6 : -5;
 __ZN3JSC2VM14throwExceptionEPNS_9ExecStateENS_7JSValueE(i25, i24, i1, i26);
 i26 = i25 | 0;
 i47 = HEAP32[i26 + 4 >> 2] | 0;
 i48 = HEAP32[i26 >> 2] | 0;
 STACKTOP = i2;
 return (tempRet0 = i47, i48) | 0;
}
function __ZN7WebCore55jsCanvasRenderingContext2DPrototypeFunctionSetFillColorEPN3JSC9ExecStateE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, d33 = +0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, d53 = +0, d54 = +0, i55 = 0, d56 = +0, i57 = 0, i58 = 0, d59 = +0, d60 = +0, i61 = 0, d62 = +0, i63 = 0, i64 = 0, d65 = +0, d66 = +0, i67 = 0, d68 = +0, i69 = 0, d70 = +0, d71 = +0, i72 = 0, i73 = 0, i74 = 0, d75 = +0, d76 = +0, i77 = 0, d78 = +0, i79 = 0, d80 = +0, i81 = 0, d82 = +0, d83 = +0, i84 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 192 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 40 | 0;
 i9 = i2 + 48 | 0;
 i10 = i2 + 56 | 0;
 i11 = i2 + 64 | 0;
 i12 = i2 + 72 | 0;
 i13 = i2 + 80 | 0;
 i14 = i2 + 88 | 0;
 i15 = i2 + 96 | 0;
 i16 = i2 + 104 | 0;
 i17 = i2 + 112 | 0;
 i18 = i2 + 120 | 0;
 i19 = i2 + 128 | 0;
 i20 = i2 + 136 | 0;
 i21 = i2 + 144 | 0;
 i22 = i2 + 152 | 0;
 i23 = i2 + 160 | 0;
 i24 = i2 + 168 | 0;
 i25 = i2 + 176 | 0;
 i26 = i2 + 184 | 0;
 i27 = i1 + 32 | 0;
 i28 = HEAP32[i27 >> 2] | 0;
 i29 = i28 - 1 | 0;
 do {
  if ((i29 | 0) != 0) {
   i30 = i1 + 48 | 0;
   i31 = HEAP32[i30 >> 2] | 0;
   i32 = HEAP32[i30 + 4 >> 2] | 0;
   d33 = +HEAPF64[i30 >> 3];
   i30 = i31;
   i34 = i32;
   do {
    if ((i28 | 0) == 3) {
     i35 = i34 + 4 | 0;
     i36 = 8;
    } else if ((i28 | 0) == 2) {
     i37 = i34 + 4 | 0;
     if (i37 >>> 0 < 2 >>> 0) {
      i36 = 11;
      break;
     }
     if ((i34 | 0) == -5) {
      i38 = HEAP8[(HEAP32[i30 >> 2] | 0) + 52 | 0] | 0;
      if (i38 << 24 >> 24 == 5 | (i38 & 255) >>> 0 > 16 >>> 0) {
       i36 = 11;
       break;
      }
     }
     if ((i29 | 0) == 2) {
      i35 = i37;
      i36 = 8;
     }
    }
   } while (0);
   do {
    if ((i36 | 0) == 8) {
     if (i35 >>> 0 < 2 >>> 0) {
      i36 = 11;
      break;
     }
     if ((i34 | 0) != -5) {
      break;
     }
     i37 = HEAP8[(HEAP32[i30 >> 2] | 0) + 52 | 0] | 0;
     if (i37 << 24 >> 24 == 5 | (i37 & 255) >>> 0 > 16 >>> 0) {
      i36 = 11;
     }
    }
   } while (0);
   if ((i36 | 0) == 11) {
    i37 = i1 + 40 | 0;
    i38 = HEAP32[i37 >> 2] | 0;
    i39 = i38;
    L16 : do {
     if ((i38 & 0 | 0) == 0 & (HEAP32[i37 + 4 >> 2] & -1 | 0) == (-5 | 0)) {
      i40 = i39;
      if ((HEAP32[(i39 & -65536) + 1048 >> 2] | 0) == 2) {
       i41 = i40 + 8 | 0;
      } else {
       i41 = (HEAP32[i40 >> 2] | 0) + 32 | 0;
      }
      i40 = HEAP32[i41 >> 2] | 0;
      if ((i40 | 0) == 0) {
       break;
      } else {
       i42 = i40;
      }
      while (1) {
       if ((i42 | 0) == (H_BASE + 3016 | 0)) {
        break;
       }
       i42 = HEAP32[i42 + 4 >> 2] | 0;
       if ((i42 | 0) == 0) {
        break L16;
       }
      }
      if ((i39 | 0) == 0) {
       break;
      }
      i40 = HEAP32[i39 + 12 >> 2] | 0;
      if ((i28 | 0) == 1) {
       i43 = __ZN3JSC29createNotEnoughArgumentsErrorEPNS_9ExecStateE(i1) | 0;
       i44 = (i43 | 0) == 0;
       i45 = HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
       i46 = i14 | 0;
       HEAP32[i46 >> 2] = (i44 ? 0 : 0) | i43;
       HEAP32[i46 + 4 >> 2] = i44 ? -6 : -5;
       __ZN3JSC2VM14throwExceptionEPNS_9ExecStateENS_7JSValueE(i13, i45, i1, i14);
       i45 = i13 | 0;
       i47 = HEAP32[i45 + 4 >> 2] | 0;
       i48 = HEAP32[i45 >> 2] | 0;
       STACKTOP = i2;
       return (tempRet0 = i47, i48) | 0;
      }
      i45 = i31 & 0;
      i44 = i32 & -1;
      do {
       if ((i45 | 0) == 0 & (i44 | 0) == (-6 | 0)) {
        HEAP32[i15 >> 2] = 0;
       } else {
        i46 = i16 | 0;
        HEAP32[i46 >> 2] = i31;
        HEAP32[i46 + 4 >> 2] = i32;
        do {
         if ((i45 | 0) == 0 & (i44 | 0) == (-5 | 0)) {
          if ((HEAP8[(HEAP32[i30 >> 2] | 0) + 52 | 0] | 0) != 5) {
           i36 = 27;
           break;
          }
          i49 = i30;
         } else {
          i36 = 27;
         }
        } while (0);
        if ((i36 | 0) == 27) {
         i49 = __ZNK3JSC7JSValue16toStringSlowCaseEPNS_9ExecStateE(i16, i1) | 0;
        }
        i46 = i49 + 12 | 0;
        i43 = HEAP32[i46 >> 2] | 0;
        if ((i43 | 0) == 0) {
         __ZNK3JSC12JSRopeString11resolveRopeEPNS_9ExecStateE(i49, i1);
         i50 = HEAP32[i46 >> 2] | 0;
         HEAP32[i15 >> 2] = i50;
         if ((i50 | 0) == 0) {
          break;
         } else {
          i51 = i50;
         }
        } else {
         HEAP32[i15 >> 2] = i43;
         i51 = i43;
        }
        i43 = i51 | 0;
        HEAP32[i43 >> 2] = (HEAP32[i43 >> 2] | 0) + 2;
       }
      } while (0);
      i44 = i1 + 16 | 0;
      i45 = HEAP32[i44 >> 2] | 0;
      i43 = (HEAP32[(i45 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
      do {
       if ((HEAP32[i43 >> 2] & 0 | 0) == 0 & (HEAP32[i43 + 4 >> 2] & -1 | 0) == (-6 | 0)) {
        if (((HEAP32[i27 >> 2] | 0) - 1 | 0) >>> 0 < 2 >>> 0) {
         __ZN7WebCore24CanvasRenderingContext2D12setFillColorERKN3WTF6StringE(i40, i15);
         break;
        }
        i50 = i1 + 56 | 0;
        i46 = HEAP32[i50 >> 2] | 0;
        i52 = HEAP32[i50 + 4 >> 2] | 0;
        d53 = +HEAPF64[i50 >> 3];
        i50 = i17 | 0;
        HEAP32[i50 >> 2] = i46;
        HEAP32[i50 + 4 >> 2] = i52;
        i50 = i52;
        do {
         if ((i50 | 0) == -1) {
          d54 = +(i46 | 0);
          i55 = i45;
         } else {
          if (i50 >>> 0 < 4294967289 >>> 0) {
           d54 = d53;
           i55 = i45;
           break;
          }
          d56 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i17, i1);
          d54 = d56;
          i55 = HEAP32[i44 >> 2] | 0;
         }
        } while (0);
        i50 = (HEAP32[(i55 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
        if (!((HEAP32[i50 >> 2] & 0 | 0) == 0 & (HEAP32[i50 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
         break;
        }
        __ZN7WebCore24CanvasRenderingContext2D12setFillColorERKN3WTF6StringEf(i40, i15, d54);
       }
      } while (0);
      i40 = HEAP32[i15 >> 2] | 0;
      if ((i40 | 0) == 0) {
       i47 = -4;
       i48 = 0;
       STACKTOP = i2;
       return (tempRet0 = i47, i48) | 0;
      }
      i44 = i40 | 0;
      i45 = (HEAP32[i44 >> 2] | 0) - 2 | 0;
      if ((i45 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i40);
       i47 = -4;
       i48 = 0;
       STACKTOP = i2;
       return (tempRet0 = i47, i48) | 0;
      } else {
       HEAP32[i44 >> 2] = i45;
       i47 = -4;
       i48 = 0;
       STACKTOP = i2;
       return (tempRet0 = i47, i48) | 0;
      }
     }
    } while (0);
    i39 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
    i37 = (i39 | 0) == 0;
    i47 = (i37 ? -6 : -5) | 0;
    i48 = (i37 ? 0 : 0) | i39;
    STACKTOP = i2;
    return (tempRet0 = i47, i48) | 0;
   }
   if ((i28 - 2 | 0) >>> 0 < 2 >>> 0) {
    i39 = i1 + 40 | 0;
    i37 = HEAP32[i39 >> 2] | 0;
    i38 = i37;
    L70 : do {
     if ((i37 & 0 | 0) == 0 & (HEAP32[i39 + 4 >> 2] & -1 | 0) == (-5 | 0)) {
      i45 = i38;
      if ((HEAP32[(i38 & -65536) + 1048 >> 2] | 0) == 2) {
       i57 = i45 + 8 | 0;
      } else {
       i57 = (HEAP32[i45 >> 2] | 0) + 32 | 0;
      }
      i45 = HEAP32[i57 >> 2] | 0;
      if ((i45 | 0) == 0) {
       break;
      } else {
       i58 = i45;
      }
      while (1) {
       if ((i58 | 0) == (H_BASE + 3016 | 0)) {
        break;
       }
       i58 = HEAP32[i58 + 4 >> 2] | 0;
       if ((i58 | 0) == 0) {
        break L70;
       }
      }
      if ((i38 | 0) == 0) {
       break;
      }
      i45 = HEAP32[i38 + 12 >> 2] | 0;
      if ((i28 | 0) == 1) {
       i44 = __ZN3JSC29createNotEnoughArgumentsErrorEPNS_9ExecStateE(i1) | 0;
       i40 = (i44 | 0) == 0;
       i43 = HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
       i50 = i10 | 0;
       HEAP32[i50 >> 2] = (i40 ? 0 : 0) | i44;
       HEAP32[i50 + 4 >> 2] = i40 ? -6 : -5;
       __ZN3JSC2VM14throwExceptionEPNS_9ExecStateENS_7JSValueE(i9, i43, i1, i10);
       i43 = i9 | 0;
       i47 = HEAP32[i43 + 4 >> 2] | 0;
       i48 = HEAP32[i43 >> 2] | 0;
       STACKTOP = i2;
       return (tempRet0 = i47, i48) | 0;
      }
      i43 = i11 | 0;
      HEAP32[i43 >> 2] = i31;
      HEAP32[i43 + 4 >> 2] = i32;
      do {
       if ((i34 | 0) == -1) {
        d59 = +(i30 | 0);
       } else {
        if (i34 >>> 0 < 4294967289 >>> 0) {
         d59 = d33;
         break;
        }
        d59 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i11, i1);
       }
      } while (0);
      d53 = d59;
      i43 = i1 + 16 | 0;
      i40 = HEAP32[i43 >> 2] | 0;
      i50 = (HEAP32[(i40 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
      if (!((HEAP32[i50 >> 2] & 0 | 0) == 0 & (HEAP32[i50 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
       i47 = -4;
       i48 = 0;
       STACKTOP = i2;
       return (tempRet0 = i47, i48) | 0;
      }
      if (((HEAP32[i27 >> 2] | 0) - 1 | 0) >>> 0 < 2 >>> 0) {
       __ZN7WebCore24CanvasRenderingContext2D12setFillColorEf(i45, d53);
       i47 = -4;
       i48 = 0;
       STACKTOP = i2;
       return (tempRet0 = i47, i48) | 0;
      }
      i50 = i1 + 56 | 0;
      i44 = HEAP32[i50 >> 2] | 0;
      i46 = HEAP32[i50 + 4 >> 2] | 0;
      d56 = +HEAPF64[i50 >> 3];
      i50 = i12 | 0;
      HEAP32[i50 >> 2] = i44;
      HEAP32[i50 + 4 >> 2] = i46;
      i50 = i46;
      do {
       if ((i50 | 0) == -1) {
        d60 = +(i44 | 0);
        i61 = i40;
       } else {
        if (i50 >>> 0 < 4294967289 >>> 0) {
         d60 = d56;
         i61 = i40;
         break;
        }
        d62 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i12, i1);
        d60 = d62;
        i61 = HEAP32[i43 >> 2] | 0;
       }
      } while (0);
      i43 = (HEAP32[(i61 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
      if (!((HEAP32[i43 >> 2] & 0 | 0) == 0 & (HEAP32[i43 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
       i47 = -4;
       i48 = 0;
       STACKTOP = i2;
       return (tempRet0 = i47, i48) | 0;
      }
      __ZN7WebCore24CanvasRenderingContext2D12setFillColorEff(i45, d53, d60);
      i47 = -4;
      i48 = 0;
      STACKTOP = i2;
      return (tempRet0 = i47, i48) | 0;
     }
    } while (0);
    i38 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
    i39 = (i38 | 0) == 0;
    i47 = (i39 ? -6 : -5) | 0;
    i48 = (i39 ? 0 : 0) | i38;
    STACKTOP = i2;
    return (tempRet0 = i47, i48) | 0;
   }
   if ((i28 | 0) == 5) {
    i38 = i1 + 40 | 0;
    i39 = HEAP32[i38 >> 2] | 0;
    i37 = i39;
    L111 : do {
     if ((i39 & 0 | 0) == 0 & (HEAP32[i38 + 4 >> 2] & -1 | 0) == (-5 | 0)) {
      i43 = i37;
      if ((HEAP32[(i37 & -65536) + 1048 >> 2] | 0) == 2) {
       i63 = i43 + 8 | 0;
      } else {
       i63 = (HEAP32[i43 >> 2] | 0) + 32 | 0;
      }
      i43 = HEAP32[i63 >> 2] | 0;
      if ((i43 | 0) == 0) {
       break;
      } else {
       i64 = i43;
      }
      while (1) {
       if ((i64 | 0) == (H_BASE + 3016 | 0)) {
        break;
       }
       i64 = HEAP32[i64 + 4 >> 2] | 0;
       if ((i64 | 0) == 0) {
        break L111;
       }
      }
      if ((i37 | 0) == 0) {
       break;
      }
      i45 = HEAP32[i37 + 12 >> 2] | 0;
      if (i29 >>> 0 < 4 >>> 0) {
       i43 = __ZN3JSC29createNotEnoughArgumentsErrorEPNS_9ExecStateE(i1) | 0;
       i40 = (i43 | 0) == 0;
       i50 = HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
       i44 = i4 | 0;
       HEAP32[i44 >> 2] = (i40 ? 0 : 0) | i43;
       HEAP32[i44 + 4 >> 2] = i40 ? -6 : -5;
       __ZN3JSC2VM14throwExceptionEPNS_9ExecStateENS_7JSValueE(i3, i50, i1, i4);
       i50 = i3 | 0;
       i47 = HEAP32[i50 + 4 >> 2] | 0;
       i48 = HEAP32[i50 >> 2] | 0;
       STACKTOP = i2;
       return (tempRet0 = i47, i48) | 0;
      }
      i50 = i5 | 0;
      HEAP32[i50 >> 2] = i31;
      HEAP32[i50 + 4 >> 2] = i32;
      do {
       if ((i34 | 0) == -1) {
        d65 = +(i30 | 0);
       } else {
        if (i34 >>> 0 < 4294967289 >>> 0) {
         d65 = d33;
         break;
        }
        d65 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i5, i1);
       }
      } while (0);
      d53 = d65;
      i50 = i1 + 16 | 0;
      i40 = HEAP32[i50 >> 2] | 0;
      i44 = (HEAP32[(i40 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
      if (!((HEAP32[i44 >> 2] & 0 | 0) == 0 & (HEAP32[i44 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
       i47 = -4;
       i48 = 0;
       STACKTOP = i2;
       return (tempRet0 = i47, i48) | 0;
      }
      do {
       if (((HEAP32[i27 >> 2] | 0) - 1 | 0) >>> 0 > 1 >>> 0) {
        i44 = i1 + 56 | 0;
        i43 = HEAP32[i44 >> 2] | 0;
        i46 = HEAP32[i44 + 4 >> 2] | 0;
        d56 = +HEAPF64[i44 >> 3];
        i44 = i6 | 0;
        HEAP32[i44 >> 2] = i43;
        HEAP32[i44 + 4 >> 2] = i46;
        i44 = i46;
        if ((i44 | 0) == -1) {
         d66 = +(i43 | 0);
         i67 = i40;
         break;
        } else {
         if (i44 >>> 0 < 4294967289 >>> 0) {
          d66 = d56;
          i67 = i40;
          break;
         } else {
          i36 = 92;
          break;
         }
        }
       } else {
        HEAP32[i6 + 4 >> 2] = -4;
        HEAP32[i6 >> 2] = 0;
        i36 = 92;
       }
      } while (0);
      if ((i36 | 0) == 92) {
       d56 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i6, i1);
       d66 = d56;
       i67 = HEAP32[i50 >> 2] | 0;
      }
      d56 = d66;
      i40 = (HEAP32[(i67 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
      if (!((HEAP32[i40 >> 2] & 0 | 0) == 0 & (HEAP32[i40 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
       i47 = -4;
       i48 = 0;
       STACKTOP = i2;
       return (tempRet0 = i47, i48) | 0;
      }
      do {
       if (((HEAP32[i27 >> 2] | 0) - 1 | 0) >>> 0 > 2 >>> 0) {
        i40 = i1 + 64 | 0;
        i44 = HEAP32[i40 >> 2] | 0;
        i43 = HEAP32[i40 + 4 >> 2] | 0;
        d62 = +HEAPF64[i40 >> 3];
        i40 = i7 | 0;
        HEAP32[i40 >> 2] = i44;
        HEAP32[i40 + 4 >> 2] = i43;
        i40 = i43;
        if ((i40 | 0) == -1) {
         d68 = +(i44 | 0);
         i69 = i67;
         break;
        }
        if (i40 >>> 0 < 4294967289 >>> 0) {
         d68 = d62;
         i69 = i67;
        } else {
         i36 = 98;
        }
       } else {
        HEAP32[i7 + 4 >> 2] = -4;
        HEAP32[i7 >> 2] = 0;
        i36 = 98;
       }
      } while (0);
      if ((i36 | 0) == 98) {
       d62 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i7, i1);
       d68 = d62;
       i69 = HEAP32[i50 >> 2] | 0;
      }
      d62 = d68;
      i40 = (HEAP32[(i69 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
      if (!((HEAP32[i40 >> 2] & 0 | 0) == 0 & (HEAP32[i40 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
       i47 = -4;
       i48 = 0;
       STACKTOP = i2;
       return (tempRet0 = i47, i48) | 0;
      }
      do {
       if (((HEAP32[i27 >> 2] | 0) - 1 | 0) >>> 0 > 3 >>> 0) {
        i40 = i1 + 72 | 0;
        i44 = HEAP32[i40 >> 2] | 0;
        i43 = HEAP32[i40 + 4 >> 2] | 0;
        d70 = +HEAPF64[i40 >> 3];
        i40 = i8 | 0;
        HEAP32[i40 >> 2] = i44;
        HEAP32[i40 + 4 >> 2] = i43;
        i40 = i43;
        if ((i40 | 0) == -1) {
         d71 = +(i44 | 0);
         i72 = i69;
         break;
        }
        if (i40 >>> 0 < 4294967289 >>> 0) {
         d71 = d70;
         i72 = i69;
        } else {
         i36 = 104;
        }
       } else {
        HEAP32[i8 + 4 >> 2] = -4;
        HEAP32[i8 >> 2] = 0;
        i36 = 104;
       }
      } while (0);
      if ((i36 | 0) == 104) {
       d70 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i8, i1);
       d71 = d70;
       i72 = HEAP32[i50 >> 2] | 0;
      }
      i40 = (HEAP32[(i72 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
      if (!((HEAP32[i40 >> 2] & 0 | 0) == 0 & (HEAP32[i40 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
       i47 = -4;
       i48 = 0;
       STACKTOP = i2;
       return (tempRet0 = i47, i48) | 0;
      }
      __ZN7WebCore24CanvasRenderingContext2D12setFillColorEffff(i45, d53, d56, d62, d71);
      i47 = -4;
      i48 = 0;
      STACKTOP = i2;
      return (tempRet0 = i47, i48) | 0;
     }
    } while (0);
    i37 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
    i38 = (i37 | 0) == 0;
    i47 = (i38 ? -6 : -5) | 0;
    i48 = (i38 ? 0 : 0) | i37;
    STACKTOP = i2;
    return (tempRet0 = i47, i48) | 0;
   } else if ((i28 | 0) == 6) {
    i37 = i1 + 40 | 0;
    i38 = HEAP32[i37 >> 2] | 0;
    i39 = i38;
    L170 : do {
     if ((i38 & 0 | 0) == 0 & (HEAP32[i37 + 4 >> 2] & -1 | 0) == (-5 | 0)) {
      i40 = i39;
      if ((HEAP32[(i39 & -65536) + 1048 >> 2] | 0) == 2) {
       i73 = i40 + 8 | 0;
      } else {
       i73 = (HEAP32[i40 >> 2] | 0) + 32 | 0;
      }
      i40 = HEAP32[i73 >> 2] | 0;
      if ((i40 | 0) == 0) {
       break;
      } else {
       i74 = i40;
      }
      while (1) {
       if ((i74 | 0) == (H_BASE + 3016 | 0)) {
        break;
       }
       i74 = HEAP32[i74 + 4 >> 2] | 0;
       if ((i74 | 0) == 0) {
        break L170;
       }
      }
      if ((i39 | 0) == 0) {
       break;
      }
      i45 = HEAP32[i39 + 12 >> 2] | 0;
      if (i29 >>> 0 < 5 >>> 0) {
       i50 = __ZN3JSC29createNotEnoughArgumentsErrorEPNS_9ExecStateE(i1) | 0;
       i40 = (i50 | 0) == 0;
       i44 = HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
       i43 = i19 | 0;
       HEAP32[i43 >> 2] = (i40 ? 0 : 0) | i50;
       HEAP32[i43 + 4 >> 2] = i40 ? -6 : -5;
       __ZN3JSC2VM14throwExceptionEPNS_9ExecStateENS_7JSValueE(i18, i44, i1, i19);
       i44 = i18 | 0;
       i47 = HEAP32[i44 + 4 >> 2] | 0;
       i48 = HEAP32[i44 >> 2] | 0;
       STACKTOP = i2;
       return (tempRet0 = i47, i48) | 0;
      }
      i44 = i20 | 0;
      HEAP32[i44 >> 2] = i31;
      HEAP32[i44 + 4 >> 2] = i32;
      do {
       if ((i34 | 0) == -1) {
        d75 = +(i30 | 0);
       } else {
        if (i34 >>> 0 < 4294967289 >>> 0) {
         d75 = d33;
         break;
        }
        d75 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i20, i1);
       }
      } while (0);
      d62 = d75;
      i44 = i1 + 16 | 0;
      i40 = HEAP32[i44 >> 2] | 0;
      i43 = (HEAP32[(i40 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
      if (!((HEAP32[i43 >> 2] & 0 | 0) == 0 & (HEAP32[i43 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
       i47 = -4;
       i48 = 0;
       STACKTOP = i2;
       return (tempRet0 = i47, i48) | 0;
      }
      do {
       if (((HEAP32[i27 >> 2] | 0) - 1 | 0) >>> 0 > 1 >>> 0) {
        i43 = i1 + 56 | 0;
        i50 = HEAP32[i43 >> 2] | 0;
        i46 = HEAP32[i43 + 4 >> 2] | 0;
        d56 = +HEAPF64[i43 >> 3];
        i43 = i21 | 0;
        HEAP32[i43 >> 2] = i50;
        HEAP32[i43 + 4 >> 2] = i46;
        i43 = i46;
        if ((i43 | 0) == -1) {
         d76 = +(i50 | 0);
         i77 = i40;
         break;
        } else {
         if (i43 >>> 0 < 4294967289 >>> 0) {
          d76 = d56;
          i77 = i40;
          break;
         } else {
          i36 = 128;
          break;
         }
        }
       } else {
        HEAP32[i21 + 4 >> 2] = -4;
        HEAP32[i21 >> 2] = 0;
        i36 = 128;
       }
      } while (0);
      if ((i36 | 0) == 128) {
       d56 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i21, i1);
       d76 = d56;
       i77 = HEAP32[i44 >> 2] | 0;
      }
      d56 = d76;
      i40 = (HEAP32[(i77 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
      if (!((HEAP32[i40 >> 2] & 0 | 0) == 0 & (HEAP32[i40 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
       i47 = -4;
       i48 = 0;
       STACKTOP = i2;
       return (tempRet0 = i47, i48) | 0;
      }
      do {
       if (((HEAP32[i27 >> 2] | 0) - 1 | 0) >>> 0 > 2 >>> 0) {
        i40 = i1 + 64 | 0;
        i43 = HEAP32[i40 >> 2] | 0;
        i50 = HEAP32[i40 + 4 >> 2] | 0;
        d53 = +HEAPF64[i40 >> 3];
        i40 = i22 | 0;
        HEAP32[i40 >> 2] = i43;
        HEAP32[i40 + 4 >> 2] = i50;
        i40 = i50;
        if ((i40 | 0) == -1) {
         d78 = +(i43 | 0);
         i79 = i77;
         break;
        }
        if (i40 >>> 0 < 4294967289 >>> 0) {
         d78 = d53;
         i79 = i77;
        } else {
         i36 = 134;
        }
       } else {
        HEAP32[i22 + 4 >> 2] = -4;
        HEAP32[i22 >> 2] = 0;
        i36 = 134;
       }
      } while (0);
      if ((i36 | 0) == 134) {
       d53 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i22, i1);
       d78 = d53;
       i79 = HEAP32[i44 >> 2] | 0;
      }
      d53 = d78;
      i40 = (HEAP32[(i79 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
      if (!((HEAP32[i40 >> 2] & 0 | 0) == 0 & (HEAP32[i40 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
       i47 = -4;
       i48 = 0;
       STACKTOP = i2;
       return (tempRet0 = i47, i48) | 0;
      }
      do {
       if (((HEAP32[i27 >> 2] | 0) - 1 | 0) >>> 0 > 3 >>> 0) {
        i40 = i1 + 72 | 0;
        i43 = HEAP32[i40 >> 2] | 0;
        i50 = HEAP32[i40 + 4 >> 2] | 0;
        d70 = +HEAPF64[i40 >> 3];
        i40 = i23 | 0;
        HEAP32[i40 >> 2] = i43;
        HEAP32[i40 + 4 >> 2] = i50;
        i40 = i50;
        if ((i40 | 0) == -1) {
         d80 = +(i43 | 0);
         i81 = i79;
         break;
        }
        if (i40 >>> 0 < 4294967289 >>> 0) {
         d80 = d70;
         i81 = i79;
        } else {
         i36 = 140;
        }
       } else {
        HEAP32[i23 + 4 >> 2] = -4;
        HEAP32[i23 >> 2] = 0;
        i36 = 140;
       }
      } while (0);
      if ((i36 | 0) == 140) {
       d70 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i23, i1);
       d80 = d70;
       i81 = HEAP32[i44 >> 2] | 0;
      }
      d70 = d80;
      i40 = (HEAP32[(i81 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
      if (!((HEAP32[i40 >> 2] & 0 | 0) == 0 & (HEAP32[i40 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
       i47 = -4;
       i48 = 0;
       STACKTOP = i2;
       return (tempRet0 = i47, i48) | 0;
      }
      do {
       if (((HEAP32[i27 >> 2] | 0) - 1 | 0) >>> 0 > 4 >>> 0) {
        i40 = i1 + 80 | 0;
        i43 = HEAP32[i40 >> 2] | 0;
        i50 = HEAP32[i40 + 4 >> 2] | 0;
        d82 = +HEAPF64[i40 >> 3];
        i40 = i24 | 0;
        HEAP32[i40 >> 2] = i43;
        HEAP32[i40 + 4 >> 2] = i50;
        i40 = i50;
        if ((i40 | 0) == -1) {
         d83 = +(i43 | 0);
         i84 = i81;
         break;
        }
        if (i40 >>> 0 < 4294967289 >>> 0) {
         d83 = d82;
         i84 = i81;
        } else {
         i36 = 146;
        }
       } else {
        HEAP32[i24 + 4 >> 2] = -4;
        HEAP32[i24 >> 2] = 0;
        i36 = 146;
       }
      } while (0);
      if ((i36 | 0) == 146) {
       d82 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i24, i1);
       d83 = d82;
       i84 = HEAP32[i44 >> 2] | 0;
      }
      i40 = (HEAP32[(i84 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
      if (!((HEAP32[i40 >> 2] & 0 | 0) == 0 & (HEAP32[i40 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
       i47 = -4;
       i48 = 0;
       STACKTOP = i2;
       return (tempRet0 = i47, i48) | 0;
      }
      __ZN7WebCore24CanvasRenderingContext2D12setFillColorEfffff(i45, d62, d56, d53, d70, d83);
      i47 = -4;
      i48 = 0;
      STACKTOP = i2;
      return (tempRet0 = i47, i48) | 0;
     }
    } while (0);
    i34 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
    i30 = (i34 | 0) == 0;
    i47 = (i30 ? -6 : -5) | 0;
    i48 = (i30 ? 0 : 0) | i34;
    STACKTOP = i2;
    return (tempRet0 = i47, i48) | 0;
   } else if ((i28 | 0) == 1) {
    break;
   } else {
    i34 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
    i30 = (i34 | 0) == 0;
    i47 = (i30 ? -6 : -5) | 0;
    i48 = (i30 ? 0 : 0) | i34;
    STACKTOP = i2;
    return (tempRet0 = i47, i48) | 0;
   }
  }
 } while (0);
 i28 = __ZN3JSC29createNotEnoughArgumentsErrorEPNS_9ExecStateE(i1) | 0;
 i84 = (i28 | 0) == 0;
 i24 = HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
 i36 = i26 | 0;
 HEAP32[i36 >> 2] = (i84 ? 0 : 0) | i28;
 HEAP32[i36 + 4 >> 2] = i84 ? -6 : -5;
 __ZN3JSC2VM14throwExceptionEPNS_9ExecStateENS_7JSValueE(i25, i24, i1, i26);
 i26 = i25 | 0;
 i47 = HEAP32[i26 + 4 >> 2] | 0;
 i48 = HEAP32[i26 >> 2] | 0;
 STACKTOP = i2;
 return (tempRet0 = i47, i48) | 0;
}
function __ZN7WebCore63jsCanvasRenderingContext2DPrototypeFunctionWebkitPutImageDataHDEPN3JSC9ExecStateE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, d45 = +0, d46 = +0, i47 = 0, d48 = +0, d49 = +0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, d55 = +0, i56 = 0, d57 = +0, i58 = 0, d59 = +0, d60 = +0, i61 = 0, d62 = +0, d63 = +0, i64 = 0, d65 = +0, d66 = +0, i67 = 0, d68 = +0, d69 = +0, i70 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 144 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 40 | 0;
 i9 = i2 + 48 | 0;
 i10 = i2 + 56 | 0;
 i11 = i2 + 64 | 0;
 i12 = i2 + 72 | 0;
 i13 = i2 + 80 | 0;
 i14 = i2 + 88 | 0;
 i15 = i2 + 96 | 0;
 i16 = i2 + 104 | 0;
 i17 = i2 + 112 | 0;
 i18 = i2 + 120 | 0;
 i19 = i2 + 128 | 0;
 i20 = i2 + 136 | 0;
 i21 = i1 + 32 | 0;
 i22 = HEAP32[i21 >> 2] | 0;
 i23 = i22 - 1 | 0;
 do {
  if ((i23 | 0) != 0) {
   i24 = i1 + 48 | 0;
   i25 = HEAP32[i24 >> 2] | 0;
   i26 = HEAP32[i24 + 4 >> 2] | 0;
   i24 = i25;
   i27 = i26;
   do {
    if ((i22 | 0) == 8) {
     i28 = 38;
    } else if ((i22 | 0) == 4) {
     L5 : do {
      if ((i27 | 0) == (-5 | 0)) {
       if ((HEAPU8[(HEAP32[i24 >> 2] | 0) + 52 | 0] | 0) >>> 0 <= 16 >>> 0) {
        i28 = 37;
        break;
       }
       i29 = i24;
       if ((HEAP32[(i24 & -65536) + 1048 >> 2] | 0) == 2) {
        i30 = i29 + 8 | 0;
       } else {
        i30 = (HEAP32[i29 >> 2] | 0) + 32 | 0;
       }
       i29 = HEAP32[i30 >> 2] | 0;
       if ((i29 | 0) == 0) {
        i28 = 37;
        break;
       } else {
        i31 = i29;
       }
       while (1) {
        if ((i31 | 0) == (__ZN7WebCore11JSImageData6s_infoE | 0)) {
         break L5;
        }
        i29 = HEAP32[i31 + 4 >> 2] | 0;
        if ((i29 | 0) == 0) {
         i28 = 37;
         break;
        } else {
         i31 = i29;
        }
       }
      } else if ((i27 | 0) != (-3 | 0)) {
       i28 = 37;
      }
     } while (0);
     if ((i28 | 0) == 37) {
      if ((i23 | 0) == 7) {
       i28 = 38;
       break;
      } else {
       break;
      }
     }
     i29 = i1 + 40 | 0;
     i32 = HEAP32[i29 >> 2] | 0;
     i33 = i32;
     L18 : do {
      if ((i32 & 0 | 0) == 0 & (HEAP32[i29 + 4 >> 2] & -1 | 0) == (-5 | 0)) {
       i34 = i33;
       if ((HEAP32[(i33 & -65536) + 1048 >> 2] | 0) == 2) {
        i35 = i34 + 8 | 0;
       } else {
        i35 = (HEAP32[i34 >> 2] | 0) + 32 | 0;
       }
       i34 = HEAP32[i35 >> 2] | 0;
       if ((i34 | 0) == 0) {
        break;
       } else {
        i36 = i34;
       }
       while (1) {
        if ((i36 | 0) == (H_BASE + 3016 | 0)) {
         break;
        }
        i36 = HEAP32[i36 + 4 >> 2] | 0;
        if ((i36 | 0) == 0) {
         break L18;
        }
       }
       if ((i33 | 0) == 0) {
        break;
       }
       i34 = HEAP32[i33 + 12 >> 2] | 0;
       if (i23 >>> 0 < 3 >>> 0) {
        i37 = __ZN3JSC29createNotEnoughArgumentsErrorEPNS_9ExecStateE(i1) | 0;
        i38 = (i37 | 0) == 0;
        i39 = HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
        i40 = i4 | 0;
        HEAP32[i40 >> 2] = (i38 ? 0 : 0) | i37;
        HEAP32[i40 + 4 >> 2] = i38 ? -6 : -5;
        __ZN3JSC2VM14throwExceptionEPNS_9ExecStateENS_7JSValueE(i3, i39, i1, i4);
        i39 = i3 | 0;
        i41 = HEAP32[i39 + 4 >> 2] | 0;
        i42 = HEAP32[i39 >> 2] | 0;
        STACKTOP = i2;
        return (tempRet0 = i41, i42) | 0;
       }
       HEAP32[i5 >> 2] = 0;
       i39 = i6 | 0;
       HEAP32[i39 >> 2] = i25;
       HEAP32[i39 + 4 >> 2] = i26;
       i39 = __ZN7WebCore11toImageDataEN3JSC7JSValueE(i6) | 0;
       i38 = i1 + 16 | 0;
       i40 = HEAP32[i38 >> 2] | 0;
       i37 = (HEAP32[(i40 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
       if (!((HEAP32[i37 >> 2] & 0 | 0) == 0 & (HEAP32[i37 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
        i41 = -4;
        i42 = 0;
        STACKTOP = i2;
        return (tempRet0 = i41, i42) | 0;
       }
       do {
        if (((HEAP32[i21 >> 2] | 0) - 1 | 0) >>> 0 > 1 >>> 0) {
         i37 = i1 + 56 | 0;
         i43 = HEAP32[i37 >> 2] | 0;
         i44 = HEAP32[i37 + 4 >> 2] | 0;
         d45 = +HEAPF64[i37 >> 3];
         i37 = i7 | 0;
         HEAP32[i37 >> 2] = i43;
         HEAP32[i37 + 4 >> 2] = i44;
         i37 = i44;
         if ((i37 | 0) == -1) {
          d46 = +(i43 | 0);
          i47 = i40;
          break;
         } else {
          if (i37 >>> 0 < 4294967289 >>> 0) {
           d46 = d45;
           i47 = i40;
           break;
          } else {
           i28 = 28;
           break;
          }
         }
        } else {
         HEAP32[i7 + 4 >> 2] = -4;
         HEAP32[i7 >> 2] = 0;
         i28 = 28;
        }
       } while (0);
       if ((i28 | 0) == 28) {
        d45 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i7, i1);
        d46 = d45;
        i47 = HEAP32[i38 >> 2] | 0;
       }
       d45 = d46;
       i40 = (HEAP32[(i47 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
       if (!((HEAP32[i40 >> 2] & 0 | 0) == 0 & (HEAP32[i40 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
        i41 = -4;
        i42 = 0;
        STACKTOP = i2;
        return (tempRet0 = i41, i42) | 0;
       }
       do {
        if (((HEAP32[i21 >> 2] | 0) - 1 | 0) >>> 0 > 2 >>> 0) {
         i40 = i1 + 64 | 0;
         i37 = HEAP32[i40 >> 2] | 0;
         i43 = HEAP32[i40 + 4 >> 2] | 0;
         d48 = +HEAPF64[i40 >> 3];
         i40 = i8 | 0;
         HEAP32[i40 >> 2] = i37;
         HEAP32[i40 + 4 >> 2] = i43;
         i40 = i43;
         if ((i40 | 0) == -1) {
          d49 = +(i37 | 0);
          i50 = i47;
          break;
         }
         if (i40 >>> 0 < 4294967289 >>> 0) {
          d49 = d48;
          i50 = i47;
         } else {
          i28 = 34;
         }
        } else {
         HEAP32[i8 + 4 >> 2] = -4;
         HEAP32[i8 >> 2] = 0;
         i28 = 34;
        }
       } while (0);
       if ((i28 | 0) == 34) {
        d48 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i8, i1);
        d49 = d48;
        i50 = HEAP32[i38 >> 2] | 0;
       }
       i40 = (HEAP32[(i50 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
       if (!((HEAP32[i40 >> 2] & 0 | 0) == 0 & (HEAP32[i40 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
        i41 = -4;
        i42 = 0;
        STACKTOP = i2;
        return (tempRet0 = i41, i42) | 0;
       }
       __ZN7WebCore24CanvasRenderingContext2D20webkitPutImageDataHDEPNS_9ImageDataEffRi(i34, i39, d45, d49, i5);
       __ZN7WebCore15setDOMExceptionEPN3JSC9ExecStateEi(i1, HEAP32[i5 >> 2] | 0);
       i41 = -4;
       i42 = 0;
       STACKTOP = i2;
       return (tempRet0 = i41, i42) | 0;
      }
     } while (0);
     i33 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
     i29 = (i33 | 0) == 0;
     i41 = (i29 ? -6 : -5) | 0;
     i42 = (i29 ? 0 : 0) | i33;
     STACKTOP = i2;
     return (tempRet0 = i41, i42) | 0;
    }
   } while (0);
   L61 : do {
    if ((i28 | 0) == 38) {
     L63 : do {
      if ((i27 | 0) == (-5 | 0)) {
       if ((HEAPU8[(HEAP32[i24 >> 2] | 0) + 52 | 0] | 0) >>> 0 <= 16 >>> 0) {
        break L61;
       }
       i33 = i24;
       if ((HEAP32[(i24 & -65536) + 1048 >> 2] | 0) == 2) {
        i51 = i33 + 8 | 0;
       } else {
        i51 = (HEAP32[i33 >> 2] | 0) + 32 | 0;
       }
       i33 = HEAP32[i51 >> 2] | 0;
       if ((i33 | 0) == 0) {
        break L61;
       } else {
        i52 = i33;
       }
       while (1) {
        if ((i52 | 0) == (__ZN7WebCore11JSImageData6s_infoE | 0)) {
         break L63;
        }
        i52 = HEAP32[i52 + 4 >> 2] | 0;
        if ((i52 | 0) == 0) {
         break L61;
        }
       }
      } else if ((i27 | 0) != (-3 | 0)) {
       break L61;
      }
     } while (0);
     i39 = i1 + 40 | 0;
     i34 = HEAP32[i39 >> 2] | 0;
     i38 = i34;
     L74 : do {
      if ((i34 & 0 | 0) == 0 & (HEAP32[i39 + 4 >> 2] & -1 | 0) == (-5 | 0)) {
       i33 = i38;
       if ((HEAP32[(i38 & -65536) + 1048 >> 2] | 0) == 2) {
        i53 = i33 + 8 | 0;
       } else {
        i53 = (HEAP32[i33 >> 2] | 0) + 32 | 0;
       }
       i33 = HEAP32[i53 >> 2] | 0;
       if ((i33 | 0) == 0) {
        break;
       } else {
        i54 = i33;
       }
       while (1) {
        if ((i54 | 0) == (H_BASE + 3016 | 0)) {
         break;
        }
        i54 = HEAP32[i54 + 4 >> 2] | 0;
        if ((i54 | 0) == 0) {
         break L74;
        }
       }
       if ((i38 | 0) == 0) {
        break;
       }
       i33 = HEAP32[i38 + 12 >> 2] | 0;
       if (i23 >>> 0 < 7 >>> 0) {
        i29 = __ZN3JSC29createNotEnoughArgumentsErrorEPNS_9ExecStateE(i1) | 0;
        i32 = (i29 | 0) == 0;
        i40 = HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
        i37 = i10 | 0;
        HEAP32[i37 >> 2] = (i32 ? 0 : 0) | i29;
        HEAP32[i37 + 4 >> 2] = i32 ? -6 : -5;
        __ZN3JSC2VM14throwExceptionEPNS_9ExecStateENS_7JSValueE(i9, i40, i1, i10);
        i40 = i9 | 0;
        i41 = HEAP32[i40 + 4 >> 2] | 0;
        i42 = HEAP32[i40 >> 2] | 0;
        STACKTOP = i2;
        return (tempRet0 = i41, i42) | 0;
       }
       HEAP32[i11 >> 2] = 0;
       i40 = i12 | 0;
       HEAP32[i40 >> 2] = i25;
       HEAP32[i40 + 4 >> 2] = i26;
       i40 = __ZN7WebCore11toImageDataEN3JSC7JSValueE(i12) | 0;
       i32 = i1 + 16 | 0;
       i37 = HEAP32[i32 >> 2] | 0;
       i29 = (HEAP32[(i37 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
       if (!((HEAP32[i29 >> 2] & 0 | 0) == 0 & (HEAP32[i29 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
        i41 = -4;
        i42 = 0;
        STACKTOP = i2;
        return (tempRet0 = i41, i42) | 0;
       }
       do {
        if (((HEAP32[i21 >> 2] | 0) - 1 | 0) >>> 0 > 1 >>> 0) {
         i29 = i1 + 56 | 0;
         i43 = HEAP32[i29 >> 2] | 0;
         i44 = HEAP32[i29 + 4 >> 2] | 0;
         d45 = +HEAPF64[i29 >> 3];
         i29 = i13 | 0;
         HEAP32[i29 >> 2] = i43;
         HEAP32[i29 + 4 >> 2] = i44;
         i29 = i44;
         if ((i29 | 0) == -1) {
          d55 = +(i43 | 0);
          i56 = i37;
          break;
         } else {
          if (i29 >>> 0 < 4294967289 >>> 0) {
           d55 = d45;
           i56 = i37;
           break;
          } else {
           i28 = 63;
           break;
          }
         }
        } else {
         HEAP32[i13 + 4 >> 2] = -4;
         HEAP32[i13 >> 2] = 0;
         i28 = 63;
        }
       } while (0);
       if ((i28 | 0) == 63) {
        d45 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i13, i1);
        d55 = d45;
        i56 = HEAP32[i32 >> 2] | 0;
       }
       d45 = d55;
       i37 = (HEAP32[(i56 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
       if (!((HEAP32[i37 >> 2] & 0 | 0) == 0 & (HEAP32[i37 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
        i41 = -4;
        i42 = 0;
        STACKTOP = i2;
        return (tempRet0 = i41, i42) | 0;
       }
       do {
        if (((HEAP32[i21 >> 2] | 0) - 1 | 0) >>> 0 > 2 >>> 0) {
         i37 = i1 + 64 | 0;
         i29 = HEAP32[i37 >> 2] | 0;
         i43 = HEAP32[i37 + 4 >> 2] | 0;
         d48 = +HEAPF64[i37 >> 3];
         i37 = i14 | 0;
         HEAP32[i37 >> 2] = i29;
         HEAP32[i37 + 4 >> 2] = i43;
         i37 = i43;
         if ((i37 | 0) == -1) {
          d57 = +(i29 | 0);
          i58 = i56;
          break;
         }
         if (i37 >>> 0 < 4294967289 >>> 0) {
          d57 = d48;
          i58 = i56;
         } else {
          i28 = 69;
         }
        } else {
         HEAP32[i14 + 4 >> 2] = -4;
         HEAP32[i14 >> 2] = 0;
         i28 = 69;
        }
       } while (0);
       if ((i28 | 0) == 69) {
        d48 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i14, i1);
        d57 = d48;
        i58 = HEAP32[i32 >> 2] | 0;
       }
       d48 = d57;
       i37 = (HEAP32[(i58 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
       if (!((HEAP32[i37 >> 2] & 0 | 0) == 0 & (HEAP32[i37 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
        i41 = -4;
        i42 = 0;
        STACKTOP = i2;
        return (tempRet0 = i41, i42) | 0;
       }
       do {
        if (((HEAP32[i21 >> 2] | 0) - 1 | 0) >>> 0 > 3 >>> 0) {
         i37 = i1 + 72 | 0;
         i29 = HEAP32[i37 >> 2] | 0;
         i43 = HEAP32[i37 + 4 >> 2] | 0;
         d59 = +HEAPF64[i37 >> 3];
         i37 = i15 | 0;
         HEAP32[i37 >> 2] = i29;
         HEAP32[i37 + 4 >> 2] = i43;
         i37 = i43;
         if ((i37 | 0) == -1) {
          d60 = +(i29 | 0);
          i61 = i58;
          break;
         }
         if (i37 >>> 0 < 4294967289 >>> 0) {
          d60 = d59;
          i61 = i58;
         } else {
          i28 = 75;
         }
        } else {
         HEAP32[i15 + 4 >> 2] = -4;
         HEAP32[i15 >> 2] = 0;
         i28 = 75;
        }
       } while (0);
       if ((i28 | 0) == 75) {
        d59 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i15, i1);
        d60 = d59;
        i61 = HEAP32[i32 >> 2] | 0;
       }
       d59 = d60;
       i37 = (HEAP32[(i61 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
       if (!((HEAP32[i37 >> 2] & 0 | 0) == 0 & (HEAP32[i37 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
        i41 = -4;
        i42 = 0;
        STACKTOP = i2;
        return (tempRet0 = i41, i42) | 0;
       }
       do {
        if (((HEAP32[i21 >> 2] | 0) - 1 | 0) >>> 0 > 4 >>> 0) {
         i37 = i1 + 80 | 0;
         i29 = HEAP32[i37 >> 2] | 0;
         i43 = HEAP32[i37 + 4 >> 2] | 0;
         d62 = +HEAPF64[i37 >> 3];
         i37 = i16 | 0;
         HEAP32[i37 >> 2] = i29;
         HEAP32[i37 + 4 >> 2] = i43;
         i37 = i43;
         if ((i37 | 0) == -1) {
          d63 = +(i29 | 0);
          i64 = i61;
          break;
         }
         if (i37 >>> 0 < 4294967289 >>> 0) {
          d63 = d62;
          i64 = i61;
         } else {
          i28 = 81;
         }
        } else {
         HEAP32[i16 + 4 >> 2] = -4;
         HEAP32[i16 >> 2] = 0;
         i28 = 81;
        }
       } while (0);
       if ((i28 | 0) == 81) {
        d62 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i16, i1);
        d63 = d62;
        i64 = HEAP32[i32 >> 2] | 0;
       }
       d62 = d63;
       i37 = (HEAP32[(i64 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
       if (!((HEAP32[i37 >> 2] & 0 | 0) == 0 & (HEAP32[i37 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
        i41 = -4;
        i42 = 0;
        STACKTOP = i2;
        return (tempRet0 = i41, i42) | 0;
       }
       do {
        if (((HEAP32[i21 >> 2] | 0) - 1 | 0) >>> 0 > 5 >>> 0) {
         i37 = i1 + 88 | 0;
         i29 = HEAP32[i37 >> 2] | 0;
         i43 = HEAP32[i37 + 4 >> 2] | 0;
         d65 = +HEAPF64[i37 >> 3];
         i37 = i17 | 0;
         HEAP32[i37 >> 2] = i29;
         HEAP32[i37 + 4 >> 2] = i43;
         i37 = i43;
         if ((i37 | 0) == -1) {
          d66 = +(i29 | 0);
          i67 = i64;
          break;
         }
         if (i37 >>> 0 < 4294967289 >>> 0) {
          d66 = d65;
          i67 = i64;
         } else {
          i28 = 87;
         }
        } else {
         HEAP32[i17 + 4 >> 2] = -4;
         HEAP32[i17 >> 2] = 0;
         i28 = 87;
        }
       } while (0);
       if ((i28 | 0) == 87) {
        d65 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i17, i1);
        d66 = d65;
        i67 = HEAP32[i32 >> 2] | 0;
       }
       d65 = d66;
       i37 = (HEAP32[(i67 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
       if (!((HEAP32[i37 >> 2] & 0 | 0) == 0 & (HEAP32[i37 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
        i41 = -4;
        i42 = 0;
        STACKTOP = i2;
        return (tempRet0 = i41, i42) | 0;
       }
       do {
        if (((HEAP32[i21 >> 2] | 0) - 1 | 0) >>> 0 > 6 >>> 0) {
         i37 = i1 + 96 | 0;
         i29 = HEAP32[i37 >> 2] | 0;
         i43 = HEAP32[i37 + 4 >> 2] | 0;
         d68 = +HEAPF64[i37 >> 3];
         i37 = i18 | 0;
         HEAP32[i37 >> 2] = i29;
         HEAP32[i37 + 4 >> 2] = i43;
         i37 = i43;
         if ((i37 | 0) == -1) {
          d69 = +(i29 | 0);
          i70 = i67;
          break;
         }
         if (i37 >>> 0 < 4294967289 >>> 0) {
          d69 = d68;
          i70 = i67;
         } else {
          i28 = 93;
         }
        } else {
         HEAP32[i18 + 4 >> 2] = -4;
         HEAP32[i18 >> 2] = 0;
         i28 = 93;
        }
       } while (0);
       if ((i28 | 0) == 93) {
        d68 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i18, i1);
        d69 = d68;
        i70 = HEAP32[i32 >> 2] | 0;
       }
       i37 = (HEAP32[(i70 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
       if (!((HEAP32[i37 >> 2] & 0 | 0) == 0 & (HEAP32[i37 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
        i41 = -4;
        i42 = 0;
        STACKTOP = i2;
        return (tempRet0 = i41, i42) | 0;
       }
       __ZN7WebCore24CanvasRenderingContext2D20webkitPutImageDataHDEPNS_9ImageDataEffffffRi(i33, i40, d45, d48, d59, d62, d65, d69, i11);
       __ZN7WebCore15setDOMExceptionEPN3JSC9ExecStateEi(i1, HEAP32[i11 >> 2] | 0);
       i41 = -4;
       i42 = 0;
       STACKTOP = i2;
       return (tempRet0 = i41, i42) | 0;
      }
     } while (0);
     i38 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
     i39 = (i38 | 0) == 0;
     i41 = (i39 ? -6 : -5) | 0;
     i42 = (i39 ? 0 : 0) | i38;
     STACKTOP = i2;
     return (tempRet0 = i41, i42) | 0;
    }
   } while (0);
   if (i23 >>> 0 < 3 >>> 0) {
    break;
   }
   i26 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
   i25 = (i26 | 0) == 0;
   i41 = (i25 ? -6 : -5) | 0;
   i42 = (i25 ? 0 : 0) | i26;
   STACKTOP = i2;
   return (tempRet0 = i41, i42) | 0;
  }
 } while (0);
 i23 = __ZN3JSC29createNotEnoughArgumentsErrorEPNS_9ExecStateE(i1) | 0;
 i11 = (i23 | 0) == 0;
 i70 = HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
 i18 = i20 | 0;
 HEAP32[i18 >> 2] = (i11 ? 0 : 0) | i23;
 HEAP32[i18 + 4 >> 2] = i11 ? -6 : -5;
 __ZN3JSC2VM14throwExceptionEPNS_9ExecStateENS_7JSValueE(i19, i70, i1, i20);
 i20 = i19 | 0;
 i41 = HEAP32[i20 + 4 >> 2] | 0;
 i42 = HEAP32[i20 >> 2] | 0;
 STACKTOP = i2;
 return (tempRet0 = i41, i42) | 0;
}
function __ZN7WebCore55jsCanvasRenderingContext2DPrototypeFunctionPutImageDataEPN3JSC9ExecStateE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, d45 = +0, d46 = +0, i47 = 0, d48 = +0, d49 = +0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, d55 = +0, i56 = 0, d57 = +0, i58 = 0, d59 = +0, d60 = +0, i61 = 0, d62 = +0, d63 = +0, i64 = 0, d65 = +0, d66 = +0, i67 = 0, d68 = +0, d69 = +0, i70 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 144 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 40 | 0;
 i9 = i2 + 48 | 0;
 i10 = i2 + 56 | 0;
 i11 = i2 + 64 | 0;
 i12 = i2 + 72 | 0;
 i13 = i2 + 80 | 0;
 i14 = i2 + 88 | 0;
 i15 = i2 + 96 | 0;
 i16 = i2 + 104 | 0;
 i17 = i2 + 112 | 0;
 i18 = i2 + 120 | 0;
 i19 = i2 + 128 | 0;
 i20 = i2 + 136 | 0;
 i21 = i1 + 32 | 0;
 i22 = HEAP32[i21 >> 2] | 0;
 i23 = i22 - 1 | 0;
 do {
  if ((i23 | 0) != 0) {
   i24 = i1 + 48 | 0;
   i25 = HEAP32[i24 >> 2] | 0;
   i26 = HEAP32[i24 + 4 >> 2] | 0;
   i24 = i25;
   i27 = i26;
   do {
    if ((i22 | 0) == 4) {
     L5 : do {
      if ((i27 | 0) == (-5 | 0)) {
       if ((HEAPU8[(HEAP32[i24 >> 2] | 0) + 52 | 0] | 0) >>> 0 <= 16 >>> 0) {
        i28 = 37;
        break;
       }
       i29 = i24;
       if ((HEAP32[(i24 & -65536) + 1048 >> 2] | 0) == 2) {
        i30 = i29 + 8 | 0;
       } else {
        i30 = (HEAP32[i29 >> 2] | 0) + 32 | 0;
       }
       i29 = HEAP32[i30 >> 2] | 0;
       if ((i29 | 0) == 0) {
        i28 = 37;
        break;
       } else {
        i31 = i29;
       }
       while (1) {
        if ((i31 | 0) == (__ZN7WebCore11JSImageData6s_infoE | 0)) {
         break L5;
        }
        i29 = HEAP32[i31 + 4 >> 2] | 0;
        if ((i29 | 0) == 0) {
         i28 = 37;
         break;
        } else {
         i31 = i29;
        }
       }
      } else if ((i27 | 0) != (-3 | 0)) {
       i28 = 37;
      }
     } while (0);
     if ((i28 | 0) == 37) {
      if ((i23 | 0) == 7) {
       i28 = 38;
       break;
      } else {
       break;
      }
     }
     i29 = i1 + 40 | 0;
     i32 = HEAP32[i29 >> 2] | 0;
     i33 = i32;
     L18 : do {
      if ((i32 & 0 | 0) == 0 & (HEAP32[i29 + 4 >> 2] & -1 | 0) == (-5 | 0)) {
       i34 = i33;
       if ((HEAP32[(i33 & -65536) + 1048 >> 2] | 0) == 2) {
        i35 = i34 + 8 | 0;
       } else {
        i35 = (HEAP32[i34 >> 2] | 0) + 32 | 0;
       }
       i34 = HEAP32[i35 >> 2] | 0;
       if ((i34 | 0) == 0) {
        break;
       } else {
        i36 = i34;
       }
       while (1) {
        if ((i36 | 0) == (H_BASE + 3016 | 0)) {
         break;
        }
        i36 = HEAP32[i36 + 4 >> 2] | 0;
        if ((i36 | 0) == 0) {
         break L18;
        }
       }
       if ((i33 | 0) == 0) {
        break;
       }
       i34 = HEAP32[i33 + 12 >> 2] | 0;
       if (i23 >>> 0 < 3 >>> 0) {
        i37 = __ZN3JSC29createNotEnoughArgumentsErrorEPNS_9ExecStateE(i1) | 0;
        i38 = (i37 | 0) == 0;
        i39 = HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
        i40 = i4 | 0;
        HEAP32[i40 >> 2] = (i38 ? 0 : 0) | i37;
        HEAP32[i40 + 4 >> 2] = i38 ? -6 : -5;
        __ZN3JSC2VM14throwExceptionEPNS_9ExecStateENS_7JSValueE(i3, i39, i1, i4);
        i39 = i3 | 0;
        i41 = HEAP32[i39 + 4 >> 2] | 0;
        i42 = HEAP32[i39 >> 2] | 0;
        STACKTOP = i2;
        return (tempRet0 = i41, i42) | 0;
       }
       HEAP32[i5 >> 2] = 0;
       i39 = i6 | 0;
       HEAP32[i39 >> 2] = i25;
       HEAP32[i39 + 4 >> 2] = i26;
       i39 = __ZN7WebCore11toImageDataEN3JSC7JSValueE(i6) | 0;
       i38 = i1 + 16 | 0;
       i40 = HEAP32[i38 >> 2] | 0;
       i37 = (HEAP32[(i40 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
       if (!((HEAP32[i37 >> 2] & 0 | 0) == 0 & (HEAP32[i37 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
        i41 = -4;
        i42 = 0;
        STACKTOP = i2;
        return (tempRet0 = i41, i42) | 0;
       }
       do {
        if (((HEAP32[i21 >> 2] | 0) - 1 | 0) >>> 0 > 1 >>> 0) {
         i37 = i1 + 56 | 0;
         i43 = HEAP32[i37 >> 2] | 0;
         i44 = HEAP32[i37 + 4 >> 2] | 0;
         d45 = +HEAPF64[i37 >> 3];
         i37 = i7 | 0;
         HEAP32[i37 >> 2] = i43;
         HEAP32[i37 + 4 >> 2] = i44;
         i37 = i44;
         if ((i37 | 0) == -1) {
          d46 = +(i43 | 0);
          i47 = i40;
          break;
         } else {
          if (i37 >>> 0 < 4294967289 >>> 0) {
           d46 = d45;
           i47 = i40;
           break;
          } else {
           i28 = 28;
           break;
          }
         }
        } else {
         HEAP32[i7 + 4 >> 2] = -4;
         HEAP32[i7 >> 2] = 0;
         i28 = 28;
        }
       } while (0);
       if ((i28 | 0) == 28) {
        d45 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i7, i1);
        d46 = d45;
        i47 = HEAP32[i38 >> 2] | 0;
       }
       d45 = d46;
       i40 = (HEAP32[(i47 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
       if (!((HEAP32[i40 >> 2] & 0 | 0) == 0 & (HEAP32[i40 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
        i41 = -4;
        i42 = 0;
        STACKTOP = i2;
        return (tempRet0 = i41, i42) | 0;
       }
       do {
        if (((HEAP32[i21 >> 2] | 0) - 1 | 0) >>> 0 > 2 >>> 0) {
         i40 = i1 + 64 | 0;
         i37 = HEAP32[i40 >> 2] | 0;
         i43 = HEAP32[i40 + 4 >> 2] | 0;
         d48 = +HEAPF64[i40 >> 3];
         i40 = i8 | 0;
         HEAP32[i40 >> 2] = i37;
         HEAP32[i40 + 4 >> 2] = i43;
         i40 = i43;
         if ((i40 | 0) == -1) {
          d49 = +(i37 | 0);
          i50 = i47;
          break;
         }
         if (i40 >>> 0 < 4294967289 >>> 0) {
          d49 = d48;
          i50 = i47;
         } else {
          i28 = 34;
         }
        } else {
         HEAP32[i8 + 4 >> 2] = -4;
         HEAP32[i8 >> 2] = 0;
         i28 = 34;
        }
       } while (0);
       if ((i28 | 0) == 34) {
        d48 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i8, i1);
        d49 = d48;
        i50 = HEAP32[i38 >> 2] | 0;
       }
       i40 = (HEAP32[(i50 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
       if (!((HEAP32[i40 >> 2] & 0 | 0) == 0 & (HEAP32[i40 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
        i41 = -4;
        i42 = 0;
        STACKTOP = i2;
        return (tempRet0 = i41, i42) | 0;
       }
       __ZN7WebCore24CanvasRenderingContext2D12putImageDataEPNS_9ImageDataEffRi(i34, i39, d45, d49, i5);
       __ZN7WebCore15setDOMExceptionEPN3JSC9ExecStateEi(i1, HEAP32[i5 >> 2] | 0);
       i41 = -4;
       i42 = 0;
       STACKTOP = i2;
       return (tempRet0 = i41, i42) | 0;
      }
     } while (0);
     i33 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
     i29 = (i33 | 0) == 0;
     i41 = (i29 ? -6 : -5) | 0;
     i42 = (i29 ? 0 : 0) | i33;
     STACKTOP = i2;
     return (tempRet0 = i41, i42) | 0;
    } else if ((i22 | 0) == 8) {
     i28 = 38;
    }
   } while (0);
   L61 : do {
    if ((i28 | 0) == 38) {
     L63 : do {
      if ((i27 | 0) == (-5 | 0)) {
       if ((HEAPU8[(HEAP32[i24 >> 2] | 0) + 52 | 0] | 0) >>> 0 <= 16 >>> 0) {
        break L61;
       }
       i33 = i24;
       if ((HEAP32[(i24 & -65536) + 1048 >> 2] | 0) == 2) {
        i51 = i33 + 8 | 0;
       } else {
        i51 = (HEAP32[i33 >> 2] | 0) + 32 | 0;
       }
       i33 = HEAP32[i51 >> 2] | 0;
       if ((i33 | 0) == 0) {
        break L61;
       } else {
        i52 = i33;
       }
       while (1) {
        if ((i52 | 0) == (__ZN7WebCore11JSImageData6s_infoE | 0)) {
         break L63;
        }
        i52 = HEAP32[i52 + 4 >> 2] | 0;
        if ((i52 | 0) == 0) {
         break L61;
        }
       }
      } else if ((i27 | 0) != (-3 | 0)) {
       break L61;
      }
     } while (0);
     i39 = i1 + 40 | 0;
     i34 = HEAP32[i39 >> 2] | 0;
     i38 = i34;
     L74 : do {
      if ((i34 & 0 | 0) == 0 & (HEAP32[i39 + 4 >> 2] & -1 | 0) == (-5 | 0)) {
       i33 = i38;
       if ((HEAP32[(i38 & -65536) + 1048 >> 2] | 0) == 2) {
        i53 = i33 + 8 | 0;
       } else {
        i53 = (HEAP32[i33 >> 2] | 0) + 32 | 0;
       }
       i33 = HEAP32[i53 >> 2] | 0;
       if ((i33 | 0) == 0) {
        break;
       } else {
        i54 = i33;
       }
       while (1) {
        if ((i54 | 0) == (H_BASE + 3016 | 0)) {
         break;
        }
        i54 = HEAP32[i54 + 4 >> 2] | 0;
        if ((i54 | 0) == 0) {
         break L74;
        }
       }
       if ((i38 | 0) == 0) {
        break;
       }
       i33 = HEAP32[i38 + 12 >> 2] | 0;
       if (i23 >>> 0 < 7 >>> 0) {
        i29 = __ZN3JSC29createNotEnoughArgumentsErrorEPNS_9ExecStateE(i1) | 0;
        i32 = (i29 | 0) == 0;
        i40 = HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
        i37 = i10 | 0;
        HEAP32[i37 >> 2] = (i32 ? 0 : 0) | i29;
        HEAP32[i37 + 4 >> 2] = i32 ? -6 : -5;
        __ZN3JSC2VM14throwExceptionEPNS_9ExecStateENS_7JSValueE(i9, i40, i1, i10);
        i40 = i9 | 0;
        i41 = HEAP32[i40 + 4 >> 2] | 0;
        i42 = HEAP32[i40 >> 2] | 0;
        STACKTOP = i2;
        return (tempRet0 = i41, i42) | 0;
       }
       HEAP32[i11 >> 2] = 0;
       i40 = i12 | 0;
       HEAP32[i40 >> 2] = i25;
       HEAP32[i40 + 4 >> 2] = i26;
       i40 = __ZN7WebCore11toImageDataEN3JSC7JSValueE(i12) | 0;
       i32 = i1 + 16 | 0;
       i37 = HEAP32[i32 >> 2] | 0;
       i29 = (HEAP32[(i37 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
       if (!((HEAP32[i29 >> 2] & 0 | 0) == 0 & (HEAP32[i29 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
        i41 = -4;
        i42 = 0;
        STACKTOP = i2;
        return (tempRet0 = i41, i42) | 0;
       }
       do {
        if (((HEAP32[i21 >> 2] | 0) - 1 | 0) >>> 0 > 1 >>> 0) {
         i29 = i1 + 56 | 0;
         i43 = HEAP32[i29 >> 2] | 0;
         i44 = HEAP32[i29 + 4 >> 2] | 0;
         d45 = +HEAPF64[i29 >> 3];
         i29 = i13 | 0;
         HEAP32[i29 >> 2] = i43;
         HEAP32[i29 + 4 >> 2] = i44;
         i29 = i44;
         if ((i29 | 0) == -1) {
          d55 = +(i43 | 0);
          i56 = i37;
          break;
         } else {
          if (i29 >>> 0 < 4294967289 >>> 0) {
           d55 = d45;
           i56 = i37;
           break;
          } else {
           i28 = 63;
           break;
          }
         }
        } else {
         HEAP32[i13 + 4 >> 2] = -4;
         HEAP32[i13 >> 2] = 0;
         i28 = 63;
        }
       } while (0);
       if ((i28 | 0) == 63) {
        d45 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i13, i1);
        d55 = d45;
        i56 = HEAP32[i32 >> 2] | 0;
       }
       d45 = d55;
       i37 = (HEAP32[(i56 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
       if (!((HEAP32[i37 >> 2] & 0 | 0) == 0 & (HEAP32[i37 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
        i41 = -4;
        i42 = 0;
        STACKTOP = i2;
        return (tempRet0 = i41, i42) | 0;
       }
       do {
        if (((HEAP32[i21 >> 2] | 0) - 1 | 0) >>> 0 > 2 >>> 0) {
         i37 = i1 + 64 | 0;
         i29 = HEAP32[i37 >> 2] | 0;
         i43 = HEAP32[i37 + 4 >> 2] | 0;
         d48 = +HEAPF64[i37 >> 3];
         i37 = i14 | 0;
         HEAP32[i37 >> 2] = i29;
         HEAP32[i37 + 4 >> 2] = i43;
         i37 = i43;
         if ((i37 | 0) == -1) {
          d57 = +(i29 | 0);
          i58 = i56;
          break;
         }
         if (i37 >>> 0 < 4294967289 >>> 0) {
          d57 = d48;
          i58 = i56;
         } else {
          i28 = 69;
         }
        } else {
         HEAP32[i14 + 4 >> 2] = -4;
         HEAP32[i14 >> 2] = 0;
         i28 = 69;
        }
       } while (0);
       if ((i28 | 0) == 69) {
        d48 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i14, i1);
        d57 = d48;
        i58 = HEAP32[i32 >> 2] | 0;
       }
       d48 = d57;
       i37 = (HEAP32[(i58 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
       if (!((HEAP32[i37 >> 2] & 0 | 0) == 0 & (HEAP32[i37 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
        i41 = -4;
        i42 = 0;
        STACKTOP = i2;
        return (tempRet0 = i41, i42) | 0;
       }
       do {
        if (((HEAP32[i21 >> 2] | 0) - 1 | 0) >>> 0 > 3 >>> 0) {
         i37 = i1 + 72 | 0;
         i29 = HEAP32[i37 >> 2] | 0;
         i43 = HEAP32[i37 + 4 >> 2] | 0;
         d59 = +HEAPF64[i37 >> 3];
         i37 = i15 | 0;
         HEAP32[i37 >> 2] = i29;
         HEAP32[i37 + 4 >> 2] = i43;
         i37 = i43;
         if ((i37 | 0) == -1) {
          d60 = +(i29 | 0);
          i61 = i58;
          break;
         }
         if (i37 >>> 0 < 4294967289 >>> 0) {
          d60 = d59;
          i61 = i58;
         } else {
          i28 = 75;
         }
        } else {
         HEAP32[i15 + 4 >> 2] = -4;
         HEAP32[i15 >> 2] = 0;
         i28 = 75;
        }
       } while (0);
       if ((i28 | 0) == 75) {
        d59 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i15, i1);
        d60 = d59;
        i61 = HEAP32[i32 >> 2] | 0;
       }
       d59 = d60;
       i37 = (HEAP32[(i61 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
       if (!((HEAP32[i37 >> 2] & 0 | 0) == 0 & (HEAP32[i37 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
        i41 = -4;
        i42 = 0;
        STACKTOP = i2;
        return (tempRet0 = i41, i42) | 0;
       }
       do {
        if (((HEAP32[i21 >> 2] | 0) - 1 | 0) >>> 0 > 4 >>> 0) {
         i37 = i1 + 80 | 0;
         i29 = HEAP32[i37 >> 2] | 0;
         i43 = HEAP32[i37 + 4 >> 2] | 0;
         d62 = +HEAPF64[i37 >> 3];
         i37 = i16 | 0;
         HEAP32[i37 >> 2] = i29;
         HEAP32[i37 + 4 >> 2] = i43;
         i37 = i43;
         if ((i37 | 0) == -1) {
          d63 = +(i29 | 0);
          i64 = i61;
          break;
         }
         if (i37 >>> 0 < 4294967289 >>> 0) {
          d63 = d62;
          i64 = i61;
         } else {
          i28 = 81;
         }
        } else {
         HEAP32[i16 + 4 >> 2] = -4;
         HEAP32[i16 >> 2] = 0;
         i28 = 81;
        }
       } while (0);
       if ((i28 | 0) == 81) {
        d62 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i16, i1);
        d63 = d62;
        i64 = HEAP32[i32 >> 2] | 0;
       }
       d62 = d63;
       i37 = (HEAP32[(i64 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
       if (!((HEAP32[i37 >> 2] & 0 | 0) == 0 & (HEAP32[i37 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
        i41 = -4;
        i42 = 0;
        STACKTOP = i2;
        return (tempRet0 = i41, i42) | 0;
       }
       do {
        if (((HEAP32[i21 >> 2] | 0) - 1 | 0) >>> 0 > 5 >>> 0) {
         i37 = i1 + 88 | 0;
         i29 = HEAP32[i37 >> 2] | 0;
         i43 = HEAP32[i37 + 4 >> 2] | 0;
         d65 = +HEAPF64[i37 >> 3];
         i37 = i17 | 0;
         HEAP32[i37 >> 2] = i29;
         HEAP32[i37 + 4 >> 2] = i43;
         i37 = i43;
         if ((i37 | 0) == -1) {
          d66 = +(i29 | 0);
          i67 = i64;
          break;
         }
         if (i37 >>> 0 < 4294967289 >>> 0) {
          d66 = d65;
          i67 = i64;
         } else {
          i28 = 87;
         }
        } else {
         HEAP32[i17 + 4 >> 2] = -4;
         HEAP32[i17 >> 2] = 0;
         i28 = 87;
        }
       } while (0);
       if ((i28 | 0) == 87) {
        d65 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i17, i1);
        d66 = d65;
        i67 = HEAP32[i32 >> 2] | 0;
       }
       d65 = d66;
       i37 = (HEAP32[(i67 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
       if (!((HEAP32[i37 >> 2] & 0 | 0) == 0 & (HEAP32[i37 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
        i41 = -4;
        i42 = 0;
        STACKTOP = i2;
        return (tempRet0 = i41, i42) | 0;
       }
       do {
        if (((HEAP32[i21 >> 2] | 0) - 1 | 0) >>> 0 > 6 >>> 0) {
         i37 = i1 + 96 | 0;
         i29 = HEAP32[i37 >> 2] | 0;
         i43 = HEAP32[i37 + 4 >> 2] | 0;
         d68 = +HEAPF64[i37 >> 3];
         i37 = i18 | 0;
         HEAP32[i37 >> 2] = i29;
         HEAP32[i37 + 4 >> 2] = i43;
         i37 = i43;
         if ((i37 | 0) == -1) {
          d69 = +(i29 | 0);
          i70 = i67;
          break;
         }
         if (i37 >>> 0 < 4294967289 >>> 0) {
          d69 = d68;
          i70 = i67;
         } else {
          i28 = 93;
         }
        } else {
         HEAP32[i18 + 4 >> 2] = -4;
         HEAP32[i18 >> 2] = 0;
         i28 = 93;
        }
       } while (0);
       if ((i28 | 0) == 93) {
        d68 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i18, i1);
        d69 = d68;
        i70 = HEAP32[i32 >> 2] | 0;
       }
       i37 = (HEAP32[(i70 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
       if (!((HEAP32[i37 >> 2] & 0 | 0) == 0 & (HEAP32[i37 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
        i41 = -4;
        i42 = 0;
        STACKTOP = i2;
        return (tempRet0 = i41, i42) | 0;
       }
       __ZN7WebCore24CanvasRenderingContext2D12putImageDataEPNS_9ImageDataEffffffRi(i33, i40, d45, d48, d59, d62, d65, d69, i11);
       __ZN7WebCore15setDOMExceptionEPN3JSC9ExecStateEi(i1, HEAP32[i11 >> 2] | 0);
       i41 = -4;
       i42 = 0;
       STACKTOP = i2;
       return (tempRet0 = i41, i42) | 0;
      }
     } while (0);
     i38 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
     i39 = (i38 | 0) == 0;
     i41 = (i39 ? -6 : -5) | 0;
     i42 = (i39 ? 0 : 0) | i38;
     STACKTOP = i2;
     return (tempRet0 = i41, i42) | 0;
    }
   } while (0);
   if (i23 >>> 0 < 3 >>> 0) {
    break;
   }
   i26 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
   i25 = (i26 | 0) == 0;
   i41 = (i25 ? -6 : -5) | 0;
   i42 = (i25 ? 0 : 0) | i26;
   STACKTOP = i2;
   return (tempRet0 = i41, i42) | 0;
  }
 } while (0);
 i23 = __ZN3JSC29createNotEnoughArgumentsErrorEPNS_9ExecStateE(i1) | 0;
 i11 = (i23 | 0) == 0;
 i70 = HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
 i18 = i20 | 0;
 HEAP32[i18 >> 2] = (i11 ? 0 : 0) | i23;
 HEAP32[i18 + 4 >> 2] = i11 ? -6 : -5;
 __ZN3JSC2VM14throwExceptionEPNS_9ExecStateENS_7JSValueE(i19, i70, i1, i20);
 i20 = i19 | 0;
 i41 = HEAP32[i20 + 4 >> 2] | 0;
 i42 = HEAP32[i20 >> 2] | 0;
 STACKTOP = i2;
 return (tempRet0 = i41, i42) | 0;
}
function __ZN7WebCore60jsCanvasRenderingContext2DPrototypeFunctionDrawImageFromRectEPN3JSC9ExecStateE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, d32 = +0, d33 = +0, d34 = +0, i35 = 0, d36 = +0, i37 = 0, i38 = 0, d39 = +0, i40 = 0, d41 = +0, d42 = +0, i43 = 0, d44 = +0, d45 = +0, i46 = 0, d47 = +0, d48 = +0, i49 = 0, d50 = +0, d51 = +0, i52 = 0, d53 = +0, d54 = +0, i55 = 0, d56 = +0, i57 = 0, i58 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 104 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 40 | 0;
 i9 = i2 + 48 | 0;
 i10 = i2 + 56 | 0;
 i11 = i2 + 64 | 0;
 i12 = i2 + 72 | 0;
 i13 = i2 + 80 | 0;
 i14 = i2 + 88 | 0;
 i15 = i2 + 96 | 0;
 i16 = i1 + 40 | 0;
 i17 = HEAP32[i16 >> 2] | 0;
 i18 = i17;
 L1 : do {
  if ((i17 & 0 | 0) == 0 & (HEAP32[i16 + 4 >> 2] & -1 | 0) == (-5 | 0)) {
   i19 = i18;
   if ((HEAP32[(i18 & -65536) + 1048 >> 2] | 0) == 2) {
    i20 = i19 + 8 | 0;
   } else {
    i20 = (HEAP32[i19 >> 2] | 0) + 32 | 0;
   }
   i19 = HEAP32[i20 >> 2] | 0;
   if ((i19 | 0) == 0) {
    break;
   } else {
    i21 = i19;
   }
   while (1) {
    if ((i21 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i21 = HEAP32[i21 + 4 >> 2] | 0;
    if ((i21 | 0) == 0) {
     break L1;
    }
   }
   if ((i18 | 0) == 0) {
    break;
   }
   i19 = HEAP32[i18 + 12 >> 2] | 0;
   i22 = i1 + 32 | 0;
   if ((HEAP32[i22 >> 2] | 0) == 1) {
    i23 = __ZN3JSC29createNotEnoughArgumentsErrorEPNS_9ExecStateE(i1) | 0;
    i24 = (i23 | 0) == 0;
    i25 = HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
    i26 = i4 | 0;
    HEAP32[i26 >> 2] = (i24 ? 0 : 0) | i23;
    HEAP32[i26 + 4 >> 2] = i24 ? -6 : -5;
    __ZN3JSC2VM14throwExceptionEPNS_9ExecStateENS_7JSValueE(i3, i25, i1, i4);
    i25 = i3 | 0;
    i27 = HEAP32[i25 + 4 >> 2] | 0;
    i28 = HEAP32[i25 >> 2] | 0;
    STACKTOP = i2;
    return (tempRet0 = i27, i28) | 0;
   }
   i25 = i1 + 48 | 0;
   i24 = HEAP32[i25 + 4 >> 2] | 0;
   i26 = i5 | 0;
   HEAP32[i26 >> 2] = HEAP32[i25 >> 2];
   HEAP32[i26 + 4 >> 2] = i24;
   i24 = __ZN7WebCore18toHTMLImageElementEN3JSC7JSValueE(i5) | 0;
   i26 = i1 + 16 | 0;
   i25 = HEAP32[i26 >> 2] | 0;
   i23 = (HEAP32[(i25 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i23 >> 2] & 0 | 0) == 0 & (HEAP32[i23 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i27 = -4;
    i28 = 0;
    STACKTOP = i2;
    return (tempRet0 = i27, i28) | 0;
   }
   i23 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
   if (i23 >>> 0 < 2 >>> 0) {
    __ZN7WebCore24CanvasRenderingContext2D17drawImageFromRectEPNS_16HTMLImageElementEffffffffRKN3WTF6StringE(i19, i24, +0, +0, +0, +0, +0, +0, +0, +0, __ZN3WTF11emptyStringEv() | 0);
    i27 = -4;
    i28 = 0;
    STACKTOP = i2;
    return (tempRet0 = i27, i28) | 0;
   }
   i29 = i1 + 56 | 0;
   i30 = HEAP32[i29 >> 2] | 0;
   i31 = HEAP32[i29 + 4 >> 2] | 0;
   d32 = +HEAPF64[i29 >> 3];
   i29 = i6 | 0;
   HEAP32[i29 >> 2] = i30;
   HEAP32[i29 + 4 >> 2] = i31;
   i29 = i31;
   d33 = d32;
   do {
    if ((i29 | 0) == -1) {
     d34 = +(i30 | 0);
     i35 = i25;
    } else {
     if (i29 >>> 0 < 4294967289 >>> 0) {
      d34 = d33;
      i35 = i25;
      break;
     } else {
      d32 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i6, i1);
      d34 = d32;
      i35 = HEAP32[i26 >> 2] | 0;
      break;
     }
    }
   } while (0);
   d33 = d34;
   i25 = (HEAP32[(i35 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i25 >> 2] & 0 | 0) == 0 & (HEAP32[i25 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i27 = -4;
    i28 = 0;
    STACKTOP = i2;
    return (tempRet0 = i27, i28) | 0;
   }
   if (i23 >>> 0 < 3 >>> 0) {
    __ZN7WebCore24CanvasRenderingContext2D17drawImageFromRectEPNS_16HTMLImageElementEffffffffRKN3WTF6StringE(i19, i24, d33, +0, +0, +0, +0, +0, +0, +0, __ZN3WTF11emptyStringEv() | 0);
    i27 = -4;
    i28 = 0;
    STACKTOP = i2;
    return (tempRet0 = i27, i28) | 0;
   }
   do {
    if (((HEAP32[i22 >> 2] | 0) - 1 | 0) >>> 0 > 2 >>> 0) {
     i25 = i1 + 64 | 0;
     i29 = HEAP32[i25 >> 2] | 0;
     i30 = HEAP32[i25 + 4 >> 2] | 0;
     i25 = i7 | 0;
     HEAP32[i25 >> 2] = i29;
     HEAP32[i25 + 4 >> 2] = i30;
     i25 = i30;
     if ((i25 | 0) == -1) {
      d36 = +(i29 | 0);
      i37 = i35;
      break;
     }
     if (i25 >>> 0 >= 4294967289 >>> 0) {
      i38 = 28;
      break;
     }
     d36 = +HEAPF64[i7 >> 3];
     i37 = i35;
    } else {
     HEAP32[i7 + 4 >> 2] = -4;
     HEAP32[i7 >> 2] = 0;
     i38 = 28;
    }
   } while (0);
   if ((i38 | 0) == 28) {
    d32 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i7, i1);
    d36 = d32;
    i37 = HEAP32[i26 >> 2] | 0;
   }
   d32 = d36;
   i25 = (HEAP32[(i37 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i25 >> 2] & 0 | 0) == 0 & (HEAP32[i25 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i27 = -4;
    i28 = 0;
    STACKTOP = i2;
    return (tempRet0 = i27, i28) | 0;
   }
   if (i23 >>> 0 < 4 >>> 0) {
    __ZN7WebCore24CanvasRenderingContext2D17drawImageFromRectEPNS_16HTMLImageElementEffffffffRKN3WTF6StringE(i19, i24, d33, d32, +0, +0, +0, +0, +0, +0, __ZN3WTF11emptyStringEv() | 0);
    i27 = -4;
    i28 = 0;
    STACKTOP = i2;
    return (tempRet0 = i27, i28) | 0;
   }
   do {
    if (((HEAP32[i22 >> 2] | 0) - 1 | 0) >>> 0 > 3 >>> 0) {
     i25 = i1 + 72 | 0;
     i29 = HEAP32[i25 >> 2] | 0;
     i30 = HEAP32[i25 + 4 >> 2] | 0;
     i25 = i8 | 0;
     HEAP32[i25 >> 2] = i29;
     HEAP32[i25 + 4 >> 2] = i30;
     i25 = i30;
     if ((i25 | 0) == -1) {
      d39 = +(i29 | 0);
      i40 = i37;
      break;
     }
     if (i25 >>> 0 >= 4294967289 >>> 0) {
      i38 = 37;
      break;
     }
     d39 = +HEAPF64[i8 >> 3];
     i40 = i37;
    } else {
     HEAP32[i8 + 4 >> 2] = -4;
     HEAP32[i8 >> 2] = 0;
     i38 = 37;
    }
   } while (0);
   if ((i38 | 0) == 37) {
    d41 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i8, i1);
    d39 = d41;
    i40 = HEAP32[i26 >> 2] | 0;
   }
   d41 = d39;
   i25 = (HEAP32[(i40 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i25 >> 2] & 0 | 0) == 0 & (HEAP32[i25 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i27 = -4;
    i28 = 0;
    STACKTOP = i2;
    return (tempRet0 = i27, i28) | 0;
   }
   if (i23 >>> 0 < 5 >>> 0) {
    __ZN7WebCore24CanvasRenderingContext2D17drawImageFromRectEPNS_16HTMLImageElementEffffffffRKN3WTF6StringE(i19, i24, d33, d32, d41, +0, +0, +0, +0, +0, __ZN3WTF11emptyStringEv() | 0);
    i27 = -4;
    i28 = 0;
    STACKTOP = i2;
    return (tempRet0 = i27, i28) | 0;
   }
   do {
    if (((HEAP32[i22 >> 2] | 0) - 1 | 0) >>> 0 > 4 >>> 0) {
     i25 = i1 + 80 | 0;
     i29 = HEAP32[i25 >> 2] | 0;
     i30 = HEAP32[i25 + 4 >> 2] | 0;
     i25 = i9 | 0;
     HEAP32[i25 >> 2] = i29;
     HEAP32[i25 + 4 >> 2] = i30;
     i25 = i30;
     if ((i25 | 0) == -1) {
      d42 = +(i29 | 0);
      i43 = i40;
      break;
     }
     if (i25 >>> 0 >= 4294967289 >>> 0) {
      i38 = 46;
      break;
     }
     d42 = +HEAPF64[i9 >> 3];
     i43 = i40;
    } else {
     HEAP32[i9 + 4 >> 2] = -4;
     HEAP32[i9 >> 2] = 0;
     i38 = 46;
    }
   } while (0);
   if ((i38 | 0) == 46) {
    d44 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i9, i1);
    d42 = d44;
    i43 = HEAP32[i26 >> 2] | 0;
   }
   d44 = d42;
   i25 = (HEAP32[(i43 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i25 >> 2] & 0 | 0) == 0 & (HEAP32[i25 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i27 = -4;
    i28 = 0;
    STACKTOP = i2;
    return (tempRet0 = i27, i28) | 0;
   }
   if (i23 >>> 0 < 6 >>> 0) {
    __ZN7WebCore24CanvasRenderingContext2D17drawImageFromRectEPNS_16HTMLImageElementEffffffffRKN3WTF6StringE(i19, i24, d33, d32, d41, d44, +0, +0, +0, +0, __ZN3WTF11emptyStringEv() | 0);
    i27 = -4;
    i28 = 0;
    STACKTOP = i2;
    return (tempRet0 = i27, i28) | 0;
   }
   do {
    if (((HEAP32[i22 >> 2] | 0) - 1 | 0) >>> 0 > 5 >>> 0) {
     i25 = i1 + 88 | 0;
     i29 = HEAP32[i25 >> 2] | 0;
     i30 = HEAP32[i25 + 4 >> 2] | 0;
     i25 = i10 | 0;
     HEAP32[i25 >> 2] = i29;
     HEAP32[i25 + 4 >> 2] = i30;
     i25 = i30;
     if ((i25 | 0) == -1) {
      d45 = +(i29 | 0);
      i46 = i43;
      break;
     }
     if (i25 >>> 0 >= 4294967289 >>> 0) {
      i38 = 55;
      break;
     }
     d45 = +HEAPF64[i10 >> 3];
     i46 = i43;
    } else {
     HEAP32[i10 + 4 >> 2] = -4;
     HEAP32[i10 >> 2] = 0;
     i38 = 55;
    }
   } while (0);
   if ((i38 | 0) == 55) {
    d47 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i10, i1);
    d45 = d47;
    i46 = HEAP32[i26 >> 2] | 0;
   }
   d47 = d45;
   i25 = (HEAP32[(i46 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i25 >> 2] & 0 | 0) == 0 & (HEAP32[i25 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i27 = -4;
    i28 = 0;
    STACKTOP = i2;
    return (tempRet0 = i27, i28) | 0;
   }
   if (i23 >>> 0 < 7 >>> 0) {
    __ZN7WebCore24CanvasRenderingContext2D17drawImageFromRectEPNS_16HTMLImageElementEffffffffRKN3WTF6StringE(i19, i24, d33, d32, d41, d44, d47, +0, +0, +0, __ZN3WTF11emptyStringEv() | 0);
    i27 = -4;
    i28 = 0;
    STACKTOP = i2;
    return (tempRet0 = i27, i28) | 0;
   }
   do {
    if (((HEAP32[i22 >> 2] | 0) - 1 | 0) >>> 0 > 6 >>> 0) {
     i25 = i1 + 96 | 0;
     i29 = HEAP32[i25 >> 2] | 0;
     i30 = HEAP32[i25 + 4 >> 2] | 0;
     i25 = i11 | 0;
     HEAP32[i25 >> 2] = i29;
     HEAP32[i25 + 4 >> 2] = i30;
     i25 = i30;
     if ((i25 | 0) == -1) {
      d48 = +(i29 | 0);
      i49 = i46;
      break;
     }
     if (i25 >>> 0 >= 4294967289 >>> 0) {
      i38 = 64;
      break;
     }
     d48 = +HEAPF64[i11 >> 3];
     i49 = i46;
    } else {
     HEAP32[i11 + 4 >> 2] = -4;
     HEAP32[i11 >> 2] = 0;
     i38 = 64;
    }
   } while (0);
   if ((i38 | 0) == 64) {
    d50 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i11, i1);
    d48 = d50;
    i49 = HEAP32[i26 >> 2] | 0;
   }
   d50 = d48;
   i25 = (HEAP32[(i49 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i25 >> 2] & 0 | 0) == 0 & (HEAP32[i25 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i27 = -4;
    i28 = 0;
    STACKTOP = i2;
    return (tempRet0 = i27, i28) | 0;
   }
   if (i23 >>> 0 < 8 >>> 0) {
    __ZN7WebCore24CanvasRenderingContext2D17drawImageFromRectEPNS_16HTMLImageElementEffffffffRKN3WTF6StringE(i19, i24, d33, d32, d41, d44, d47, d50, +0, +0, __ZN3WTF11emptyStringEv() | 0);
    i27 = -4;
    i28 = 0;
    STACKTOP = i2;
    return (tempRet0 = i27, i28) | 0;
   }
   do {
    if (((HEAP32[i22 >> 2] | 0) - 1 | 0) >>> 0 > 7 >>> 0) {
     i25 = i1 + 104 | 0;
     i29 = HEAP32[i25 >> 2] | 0;
     i30 = HEAP32[i25 + 4 >> 2] | 0;
     i25 = i12 | 0;
     HEAP32[i25 >> 2] = i29;
     HEAP32[i25 + 4 >> 2] = i30;
     i25 = i30;
     if ((i25 | 0) == -1) {
      d51 = +(i29 | 0);
      i52 = i49;
      break;
     }
     if (i25 >>> 0 >= 4294967289 >>> 0) {
      i38 = 73;
      break;
     }
     d51 = +HEAPF64[i12 >> 3];
     i52 = i49;
    } else {
     HEAP32[i12 + 4 >> 2] = -4;
     HEAP32[i12 >> 2] = 0;
     i38 = 73;
    }
   } while (0);
   if ((i38 | 0) == 73) {
    d53 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i12, i1);
    d51 = d53;
    i52 = HEAP32[i26 >> 2] | 0;
   }
   d53 = d51;
   i25 = (HEAP32[(i52 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i25 >> 2] & 0 | 0) == 0 & (HEAP32[i25 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i27 = -4;
    i28 = 0;
    STACKTOP = i2;
    return (tempRet0 = i27, i28) | 0;
   }
   if (i23 >>> 0 < 9 >>> 0) {
    __ZN7WebCore24CanvasRenderingContext2D17drawImageFromRectEPNS_16HTMLImageElementEffffffffRKN3WTF6StringE(i19, i24, d33, d32, d41, d44, d47, d50, d53, +0, __ZN3WTF11emptyStringEv() | 0);
    i27 = -4;
    i28 = 0;
    STACKTOP = i2;
    return (tempRet0 = i27, i28) | 0;
   }
   do {
    if (((HEAP32[i22 >> 2] | 0) - 1 | 0) >>> 0 > 8 >>> 0) {
     i25 = i1 + 112 | 0;
     i29 = HEAP32[i25 >> 2] | 0;
     i30 = HEAP32[i25 + 4 >> 2] | 0;
     i25 = i13 | 0;
     HEAP32[i25 >> 2] = i29;
     HEAP32[i25 + 4 >> 2] = i30;
     i25 = i30;
     if ((i25 | 0) == -1) {
      d54 = +(i29 | 0);
      i55 = i52;
      break;
     }
     if (i25 >>> 0 >= 4294967289 >>> 0) {
      i38 = 82;
      break;
     }
     d54 = +HEAPF64[i13 >> 3];
     i55 = i52;
    } else {
     HEAP32[i13 + 4 >> 2] = -4;
     HEAP32[i13 >> 2] = 0;
     i38 = 82;
    }
   } while (0);
   if ((i38 | 0) == 82) {
    d56 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i13, i1);
    d54 = d56;
    i55 = HEAP32[i26 >> 2] | 0;
   }
   d56 = d54;
   i25 = (HEAP32[(i55 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i25 >> 2] & 0 | 0) == 0 & (HEAP32[i25 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i27 = -4;
    i28 = 0;
    STACKTOP = i2;
    return (tempRet0 = i27, i28) | 0;
   }
   if (i23 >>> 0 < 10 >>> 0) {
    __ZN7WebCore24CanvasRenderingContext2D17drawImageFromRectEPNS_16HTMLImageElementEffffffffRKN3WTF6StringE(i19, i24, d33, d32, d41, d44, d47, d50, d53, d56, __ZN3WTF11emptyStringEv() | 0);
    i27 = -4;
    i28 = 0;
    STACKTOP = i2;
    return (tempRet0 = i27, i28) | 0;
   }
   do {
    if (((HEAP32[i22 >> 2] | 0) - 1 | 0) >>> 0 > 9 >>> 0) {
     i25 = i1 + 120 | 0;
     if ((HEAP32[i25 >> 2] & 0 | 0) == 0 & (HEAP32[i25 + 4 >> 2] & -1 | 0) == (-6 | 0)) {
      HEAP32[i14 >> 2] = 0;
      break;
     }
     i25 = i1 + 120 | 0;
     i29 = HEAP32[i25 >> 2] | 0;
     i30 = HEAP32[i25 + 4 >> 2] | 0;
     i25 = i15 | 0;
     HEAP32[i25 >> 2] = i29;
     HEAP32[i25 + 4 >> 2] = i30;
     i25 = i29;
     if (!((i29 & 0 | 0) == 0 & (i30 & -1 | 0) == (-5 | 0))) {
      i38 = 93;
      break;
     }
     if ((HEAP8[(HEAP32[i25 >> 2] | 0) + 52 | 0] | 0) != 5) {
      i38 = 93;
      break;
     }
     i57 = i25;
     i38 = 94;
    } else {
     HEAP32[i15 + 4 >> 2] = -4;
     HEAP32[i15 >> 2] = 0;
     i38 = 93;
    }
   } while (0);
   if ((i38 | 0) == 93) {
    i57 = __ZNK3JSC7JSValue16toStringSlowCaseEPNS_9ExecStateE(i15, i1) | 0;
    i38 = 94;
   }
   do {
    if ((i38 | 0) == 94) {
     i22 = i57 + 12 | 0;
     i23 = HEAP32[i22 >> 2] | 0;
     if ((i23 | 0) == 0) {
      __ZNK3JSC12JSRopeString11resolveRopeEPNS_9ExecStateE(i57, i1);
      i25 = HEAP32[i22 >> 2] | 0;
      HEAP32[i14 >> 2] = i25;
      if ((i25 | 0) == 0) {
       break;
      } else {
       i58 = i25;
      }
     } else {
      HEAP32[i14 >> 2] = i23;
      i58 = i23;
     }
     i23 = i58 | 0;
     HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 2;
    }
   } while (0);
   i23 = (HEAP32[(HEAP32[i26 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if ((HEAP32[i23 >> 2] & 0 | 0) == 0 & (HEAP32[i23 + 4 >> 2] & -1 | 0) == (-6 | 0)) {
    __ZN7WebCore24CanvasRenderingContext2D17drawImageFromRectEPNS_16HTMLImageElementEffffffffRKN3WTF6StringE(i19, i24, d33, d32, d41, d44, d47, d50, d53, d56, i14);
   }
   i23 = HEAP32[i14 >> 2] | 0;
   if ((i23 | 0) == 0) {
    i27 = -4;
    i28 = 0;
    STACKTOP = i2;
    return (tempRet0 = i27, i28) | 0;
   }
   i25 = i23 | 0;
   i22 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
   if ((i22 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i23);
    i27 = -4;
    i28 = 0;
    STACKTOP = i2;
    return (tempRet0 = i27, i28) | 0;
   } else {
    HEAP32[i25 >> 2] = i22;
    i27 = -4;
    i28 = 0;
    STACKTOP = i2;
    return (tempRet0 = i27, i28) | 0;
   }
  }
 } while (0);
 i14 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 i1 = (i14 | 0) == 0;
 i27 = (i1 ? -6 : -5) | 0;
 i28 = (i1 ? 0 : 0) | i14;
 STACKTOP = i2;
 return (tempRet0 = i27, i28) | 0;
}
function runPostSets() {
 HEAP32[H_BASE + 1296 >> 2] = H_BASE + 856;
 HEAP32[H_BASE + 1308 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 1316 >> 2] = H_BASE + 848;
 HEAP32[H_BASE + 1328 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 1336 >> 2] = H_BASE + 832;
 HEAP32[H_BASE + 1348 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 1356 >> 2] = H_BASE + 824;
 HEAP32[H_BASE + 1368 >> 2] = F_BASE_ii + 92;
 HEAP32[H_BASE + 1376 >> 2] = H_BASE + 808;
 HEAP32[H_BASE + 1388 >> 2] = F_BASE_ii + 68;
 HEAP32[H_BASE + 1396 >> 2] = H_BASE + 792;
 HEAP32[H_BASE + 1408 >> 2] = F_BASE_ii + 60;
 HEAP32[H_BASE + 1416 >> 2] = H_BASE + 776;
 HEAP32[H_BASE + 1428 >> 2] = F_BASE_ii + 30;
 HEAP32[H_BASE + 1436 >> 2] = H_BASE + 752;
 HEAP32[H_BASE + 1448 >> 2] = F_BASE_ii + 28;
 HEAP32[H_BASE + 1456 >> 2] = H_BASE + 728;
 HEAP32[H_BASE + 1468 >> 2] = F_BASE_ii + 94;
 HEAP32[H_BASE + 1476 >> 2] = H_BASE + 712;
 HEAP32[H_BASE + 1488 >> 2] = F_BASE_ii + 70;
 HEAP32[H_BASE + 1496 >> 2] = H_BASE + 696;
 HEAP32[H_BASE + 1508 >> 2] = F_BASE_ii + 64;
 HEAP32[H_BASE + 1516 >> 2] = H_BASE + 680;
 HEAP32[H_BASE + 1528 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 1536 >> 2] = H_BASE + 656;
 HEAP32[H_BASE + 1548 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 1556 >> 2] = H_BASE + 640;
 HEAP32[H_BASE + 1568 >> 2] = F_BASE_ii + 88;
 HEAP32[H_BASE + 1576 >> 2] = H_BASE + 624;
 HEAP32[H_BASE + 1588 >> 2] = F_BASE_ii + 52;
 HEAP32[H_BASE + 1596 >> 2] = H_BASE + 616;
 HEAP32[H_BASE + 1608 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 1616 >> 2] = H_BASE + 608;
 HEAP32[H_BASE + 1628 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 1636 >> 2] = H_BASE + 584;
 HEAP32[H_BASE + 1648 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 1656 >> 2] = H_BASE + 568;
 HEAP32[H_BASE + 1668 >> 2] = F_BASE_ii + 78;
 HEAP32[H_BASE + 1676 >> 2] = H_BASE + 560;
 HEAP32[H_BASE + 1688 >> 2] = F_BASE_ii + 100;
 HEAP32[H_BASE + 1696 >> 2] = H_BASE + 552;
 HEAP32[H_BASE + 1708 >> 2] = F_BASE_ii + 36;
 HEAP32[H_BASE + 1716 >> 2] = H_BASE + 544;
 HEAP32[H_BASE + 1728 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 1736 >> 2] = H_BASE + 512;
 HEAP32[H_BASE + 1748 >> 2] = F_BASE_ii + 66;
 HEAP32[H_BASE + 1756 >> 2] = H_BASE + 504;
 HEAP32[H_BASE + 1768 >> 2] = F_BASE_ii + 56;
 HEAP32[H_BASE + 1776 >> 2] = H_BASE + 496;
 HEAP32[H_BASE + 1788 >> 2] = F_BASE_ii + 80;
 HEAP32[H_BASE + 1796 >> 2] = H_BASE + 480;
 HEAP32[H_BASE + 1808 >> 2] = F_BASE_ii + 96;
 HEAP32[H_BASE + 1816 >> 2] = H_BASE + 464;
 HEAP32[H_BASE + 1828 >> 2] = F_BASE_ii + 54;
 HEAP32[H_BASE + 1836 >> 2] = H_BASE + 448;
 HEAP32[H_BASE + 1848 >> 2] = F_BASE_ii + 62;
 HEAP32[H_BASE + 1856 >> 2] = H_BASE + 432;
 HEAP32[H_BASE + 1868 >> 2] = F_BASE_ii + 98;
 HEAP32[H_BASE + 1876 >> 2] = H_BASE + 408;
 HEAP32[H_BASE + 1888 >> 2] = F_BASE_ii + 76;
 HEAP32[H_BASE + 1896 >> 2] = H_BASE + 392;
 HEAP32[H_BASE + 1908 >> 2] = F_BASE_ii + 84;
 HEAP32[H_BASE + 1916 >> 2] = H_BASE + 376;
 HEAP32[H_BASE + 1928 >> 2] = F_BASE_ii + 34;
 HEAP32[H_BASE + 1936 >> 2] = H_BASE + 344;
 HEAP32[H_BASE + 1948 >> 2] = F_BASE_ii + 32;
 HEAP32[H_BASE + 1956 >> 2] = H_BASE + 328;
 HEAP32[H_BASE + 1968 >> 2] = F_BASE_ii + 40;
 HEAP32[H_BASE + 1976 >> 2] = H_BASE + 312;
 HEAP32[H_BASE + 1988 >> 2] = F_BASE_ii + 86;
 HEAP32[H_BASE + 1996 >> 2] = H_BASE + 296;
 HEAP32[H_BASE + 2008 >> 2] = F_BASE_ii + 74;
 HEAP32[H_BASE + 2016 >> 2] = H_BASE + 280;
 HEAP32[H_BASE + 2028 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 2036 >> 2] = H_BASE + 264;
 HEAP32[H_BASE + 2048 >> 2] = F_BASE_ii + 82;
 HEAP32[H_BASE + 2056 >> 2] = H_BASE + 248;
 HEAP32[H_BASE + 2068 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 2076 >> 2] = H_BASE + 232;
 HEAP32[H_BASE + 2088 >> 2] = F_BASE_ii + 44;
 HEAP32[H_BASE + 2096 >> 2] = H_BASE + 216;
 HEAP32[H_BASE + 2108 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 2116 >> 2] = H_BASE + 192;
 HEAP32[H_BASE + 2128 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 2136 >> 2] = H_BASE + 144;
 HEAP32[H_BASE + 2148 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 2156 >> 2] = H_BASE + 128;
 HEAP32[H_BASE + 2168 >> 2] = F_BASE_ii + 48;
 HEAP32[H_BASE + 2176 >> 2] = H_BASE + 104;
 HEAP32[H_BASE + 2188 >> 2] = F_BASE_ii + 90;
 HEAP32[H_BASE + 2196 >> 2] = H_BASE + 88;
 HEAP32[H_BASE + 2208 >> 2] = F_BASE_ii + 72;
 HEAP32[H_BASE + 2216 >> 2] = H_BASE + 72;
 HEAP32[H_BASE + 2228 >> 2] = F_BASE_ii + 58;
 HEAP32[H_BASE + 2236 >> 2] = H_BASE + 56;
 HEAP32[H_BASE + 2248 >> 2] = F_BASE_ii + 42;
 HEAP32[H_BASE + 2256 >> 2] = H_BASE + 32;
 HEAP32[H_BASE + 2268 >> 2] = F_BASE_ii + 38;
 HEAP32[H_BASE + 2304 >> 2] = H_BASE + 3128;
 HEAP32[H_BASE + 2320 >> 2] = H_BASE + 1296;
 HEAP32[H_BASE + 2328 >> 2] = H_BASE + 360;
 HEAP32[H_BASE + 2340 >> 2] = F_BASE_iiiiiii + 18;
 HEAP32[H_BASE + 2344 >> 2] = F_BASE_viiiii + 10;
 HEAP32[H_BASE + 2348 >> 2] = H_BASE + 160;
 HEAP32[H_BASE + 2360 >> 2] = F_BASE_iiiiiii + 26;
 HEAP32[H_BASE + 2364 >> 2] = F_BASE_viiiii + 28;
 HEAP32[H_BASE + 2368 >> 2] = H_BASE + 16;
 HEAP32[H_BASE + 2380 >> 2] = F_BASE_iiiiiii + 20;
 HEAP32[H_BASE + 2384 >> 2] = F_BASE_viiiii + 44;
 HEAP32[H_BASE + 2388 >> 2] = H_BASE + 8;
 HEAP32[H_BASE + 2400 >> 2] = F_BASE_iiiiiii + 44;
 HEAP32[H_BASE + 2404 >> 2] = F_BASE_viiiii + 36;
 HEAP32[H_BASE + 2408 >> 2] = H_BASE + 1200;
 HEAP32[H_BASE + 2420 >> 2] = F_BASE_iiiiiii + 42;
 HEAP32[H_BASE + 2424 >> 2] = F_BASE_viiiii + 40;
 HEAP32[H_BASE + 2428 >> 2] = H_BASE + 1184;
 HEAP32[H_BASE + 2440 >> 2] = F_BASE_iiiiiii + 24;
 HEAP32[H_BASE + 2444 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 2448 >> 2] = H_BASE + 1168;
 HEAP32[H_BASE + 2460 >> 2] = F_BASE_iiiiiii + 2;
 HEAP32[H_BASE + 2464 >> 2] = F_BASE_viiiii + 22;
 HEAP32[H_BASE + 2468 >> 2] = H_BASE + 1152;
 HEAP32[H_BASE + 2480 >> 2] = F_BASE_iiiiiii + 28;
 HEAP32[H_BASE + 2484 >> 2] = F_BASE_viiiii + 32;
 HEAP32[H_BASE + 2488 >> 2] = H_BASE + 1136;
 HEAP32[H_BASE + 2500 >> 2] = F_BASE_iiiiiii + 12;
 HEAP32[H_BASE + 2504 >> 2] = F_BASE_viiiii + 8;
 HEAP32[H_BASE + 2508 >> 2] = H_BASE + 1120;
 HEAP32[H_BASE + 2520 >> 2] = F_BASE_iiiiiii + 10;
 HEAP32[H_BASE + 2524 >> 2] = F_BASE_viiiii + 42;
 HEAP32[H_BASE + 2528 >> 2] = H_BASE + 1104;
 HEAP32[H_BASE + 2540 >> 2] = F_BASE_iiiiiii + 40;
 HEAP32[H_BASE + 2544 >> 2] = F_BASE_viiiii + 46;
 HEAP32[H_BASE + 2548 >> 2] = H_BASE + 1088;
 HEAP32[H_BASE + 2560 >> 2] = F_BASE_iiiiiii + 22;
 HEAP32[H_BASE + 2564 >> 2] = F_BASE_viiiii + 34;
 HEAP32[H_BASE + 2568 >> 2] = H_BASE + 1064;
 HEAP32[H_BASE + 2580 >> 2] = F_BASE_iiiiiii + 38;
 HEAP32[H_BASE + 2584 >> 2] = F_BASE_viiiii + 6;
 HEAP32[H_BASE + 2588 >> 2] = H_BASE + 1048;
 HEAP32[H_BASE + 2600 >> 2] = F_BASE_iiiiiii + 6;
 HEAP32[H_BASE + 2604 >> 2] = F_BASE_viiiii + 16;
 HEAP32[H_BASE + 2608 >> 2] = H_BASE + 1008;
 HEAP32[H_BASE + 2620 >> 2] = F_BASE_iiiiiii + 32;
 HEAP32[H_BASE + 2624 >> 2] = F_BASE_viiiii + 14;
 HEAP32[H_BASE + 2628 >> 2] = H_BASE + 992;
 HEAP32[H_BASE + 2640 >> 2] = F_BASE_iiiiiii + 36;
 HEAP32[H_BASE + 2644 >> 2] = F_BASE_viiiii + 4;
 HEAP32[H_BASE + 2648 >> 2] = H_BASE + 976;
 HEAP32[H_BASE + 2660 >> 2] = F_BASE_iiiiiii + 34;
 HEAP32[H_BASE + 2664 >> 2] = F_BASE_viiiii + 24;
 HEAP32[H_BASE + 2668 >> 2] = H_BASE + 960;
 HEAP32[H_BASE + 2680 >> 2] = F_BASE_iiiiiii + 8;
 HEAP32[H_BASE + 2684 >> 2] = F_BASE_viiiii + 38;
 HEAP32[H_BASE + 2688 >> 2] = H_BASE + 944;
 HEAP32[H_BASE + 2700 >> 2] = F_BASE_iiiiiii + 16;
 HEAP32[H_BASE + 2704 >> 2] = F_BASE_viiiii + 26;
 HEAP32[H_BASE + 2708 >> 2] = H_BASE + 912;
 HEAP32[H_BASE + 2720 >> 2] = F_BASE_iiiiiii + 30;
 HEAP32[H_BASE + 2728 >> 2] = H_BASE + 880;
 HEAP32[H_BASE + 2740 >> 2] = F_BASE_iiiiiii + 14;
 HEAP32[H_BASE + 2744 >> 2] = F_BASE_viiiii + 12;
 HEAP32[H_BASE + 2748 >> 2] = H_BASE + 864;
 HEAP32[H_BASE + 2760 >> 2] = F_BASE_iiiiiii + 4;
 HEAP32[H_BASE + 2800 >> 2] = H_BASE + 2328;
 HEAP32[H_BASE + 2808 >> 2] = H_BASE + 1256;
 HEAP32[H_BASE + 2812 >> 2] = __ZN3JSC8JSObject6s_infoE;
 HEAP32[H_BASE + 2816 >> 2] = H_BASE + 2296;
 HEAP32[H_BASE + 2824 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 2828 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 2832 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 2836 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 2840 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 2844 >> 2] = F_BASE_viiiii + 20;
 HEAP32[H_BASE + 2848 >> 2] = F_BASE_viiiii + 30;
 HEAP32[H_BASE + 2852 >> 2] = F_BASE_iiii + 6;
 HEAP32[H_BASE + 2856 >> 2] = F_BASE_iiii + 4;
 HEAP32[H_BASE + 2860 >> 2] = F_BASE_iiiii + 4;
 HEAP32[H_BASE + 2864 >> 2] = F_BASE_iiiii + 8;
 HEAP32[H_BASE + 2868 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 2872 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 2876 >> 2] = F_BASE_viiii + 10;
 HEAP32[H_BASE + 2880 >> 2] = F_BASE_viiii + 12;
 HEAP32[H_BASE + 2884 >> 2] = F_BASE_viiii + 8;
 HEAP32[H_BASE + 2888 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 2892 >> 2] = F_BASE_iiii + 2;
 HEAP32[H_BASE + 2896 >> 2] = F_BASE_iiiiii + 2;
 HEAP32[H_BASE + 2900 >> 2] = F_BASE_ii + 46;
 HEAP32[H_BASE + 2904 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 2912 >> 2] = H_BASE + 1216;
 HEAP32[H_BASE + 2916 >> 2] = __ZN3JSC8JSObject6s_infoE;
 HEAP32[H_BASE + 2920 >> 2] = H_BASE + 2312;
 HEAP32[H_BASE + 2928 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 2932 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 2936 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 2940 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 2944 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 2948 >> 2] = F_BASE_viiiii + 20;
 HEAP32[H_BASE + 2952 >> 2] = F_BASE_viiiii + 30;
 HEAP32[H_BASE + 2956 >> 2] = F_BASE_iiii + 6;
 HEAP32[H_BASE + 2960 >> 2] = F_BASE_iiii + 4;
 HEAP32[H_BASE + 2964 >> 2] = F_BASE_iiiii + 2;
 HEAP32[H_BASE + 2968 >> 2] = F_BASE_iiiii + 8;
 HEAP32[H_BASE + 2972 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 2976 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 2980 >> 2] = F_BASE_viiii + 10;
 HEAP32[H_BASE + 2984 >> 2] = F_BASE_viiii + 12;
 HEAP32[H_BASE + 2988 >> 2] = F_BASE_viiii + 8;
 HEAP32[H_BASE + 2992 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 2996 >> 2] = F_BASE_iiii + 2;
 HEAP32[H_BASE + 3e3 >> 2] = F_BASE_iiiiii + 2;
 HEAP32[H_BASE + 3004 >> 2] = F_BASE_ii + 46;
 HEAP32[H_BASE + 3008 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 3016 >> 2] = H_BASE + 1016;
 HEAP32[H_BASE + 3020 >> 2] = __ZN7WebCore24JSCanvasRenderingContext6s_infoE;
 HEAP32[H_BASE + 3024 >> 2] = H_BASE + 2792;
 HEAP32[H_BASE + 3032 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 3036 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 3040 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 3044 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 3048 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 3052 >> 2] = F_BASE_viiiii + 18;
 HEAP32[H_BASE + 3056 >> 2] = F_BASE_viiiii + 30;
 HEAP32[H_BASE + 3060 >> 2] = F_BASE_iiii + 6;
 HEAP32[H_BASE + 3064 >> 2] = F_BASE_iiii + 4;
 HEAP32[H_BASE + 3068 >> 2] = F_BASE_iiiii + 6;
 HEAP32[H_BASE + 3072 >> 2] = F_BASE_iiiii + 8;
 HEAP32[H_BASE + 3076 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 3080 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 3084 >> 2] = F_BASE_viiii + 10;
 HEAP32[H_BASE + 3088 >> 2] = F_BASE_viiii + 12;
 HEAP32[H_BASE + 3092 >> 2] = F_BASE_viiii + 8;
 HEAP32[H_BASE + 3096 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 3100 >> 2] = F_BASE_iiii + 2;
 HEAP32[H_BASE + 3104 >> 2] = F_BASE_iiiiii + 2;
 HEAP32[H_BASE + 3108 >> 2] = F_BASE_ii + 46;
 HEAP32[H_BASE + 3112 >> 2] = F_BASE_vii + 2;
}
function __ZN7WebCore56jsCanvasRenderingContext2DPrototypeFunctionCreatePatternEPN3JSC9ExecStateE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 112 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 40 | 0;
 i9 = i2 + 48 | 0;
 i10 = i2 + 56 | 0;
 i11 = i2 + 64 | 0;
 i12 = i2 + 72 | 0;
 i13 = i2 + 80 | 0;
 i14 = i2 + 88 | 0;
 i15 = i2 + 96 | 0;
 i16 = i2 + 104 | 0;
 i17 = i1 + 32 | 0;
 i18 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
 do {
  if ((i18 | 0) != 0) {
   i19 = i1 + 48 | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   i21 = HEAP32[i19 + 4 >> 2] | 0;
   i19 = i20;
   i22 = i21;
   L3 : do {
    if ((i18 | 0) == 2) {
     L5 : do {
      if ((i22 | 0) != -3) {
       i23 = (i22 | 0) == -5;
       if (!i23) {
        break L3;
       }
       if ((HEAPU8[(HEAP32[i19 >> 2] | 0) + 52 | 0] | 0) >>> 0 > 16 >>> 0) {
        i24 = i19;
        if ((HEAP32[(i19 & -65536) + 1048 >> 2] | 0) == 2) {
         i25 = i24 + 8 | 0;
        } else {
         i25 = (HEAP32[i24 >> 2] | 0) + 32 | 0;
        }
        i24 = HEAP32[i25 >> 2] | 0;
        if ((i24 | 0) != 0) {
         i26 = i24;
         while (1) {
          if ((i26 | 0) == (__ZN7WebCore19JSHTMLCanvasElement6s_infoE | 0)) {
           break L5;
          }
          i26 = HEAP32[i26 + 4 >> 2] | 0;
          if ((i26 | 0) == 0) {
           break;
          }
         }
        }
        if (!i23) {
         break L3;
        }
       }
       if ((HEAPU8[(HEAP32[i19 >> 2] | 0) + 52 | 0] | 0) >>> 0 <= 16 >>> 0) {
        break L3;
       }
       i26 = i19;
       if ((HEAP32[(i19 & -65536) + 1048 >> 2] | 0) == 2) {
        i27 = i26 + 8 | 0;
       } else {
        i27 = (HEAP32[i26 >> 2] | 0) + 32 | 0;
       }
       i26 = HEAP32[i27 >> 2] | 0;
       if ((i26 | 0) == 0) {
        break L3;
       } else {
        i28 = i26;
       }
       while (1) {
        if ((i28 | 0) == (__ZN7WebCore18JSHTMLImageElement6s_infoE | 0)) {
         break;
        }
        i28 = HEAP32[i28 + 4 >> 2] | 0;
        if ((i28 | 0) == 0) {
         break L3;
        }
       }
       i23 = i1 + 40 | 0;
       i26 = HEAP32[i23 >> 2] | 0;
       i24 = i26;
       L29 : do {
        if ((i26 & 0 | 0) == 0 & (HEAP32[i23 + 4 >> 2] & -1 | 0) == (-5 | 0)) {
         i29 = i24;
         if ((HEAP32[(i24 & -65536) + 1048 >> 2] | 0) == 2) {
          i30 = i29 + 8 | 0;
         } else {
          i30 = (HEAP32[i29 >> 2] | 0) + 32 | 0;
         }
         i29 = HEAP32[i30 >> 2] | 0;
         if ((i29 | 0) == 0) {
          break;
         } else {
          i31 = i29;
         }
         while (1) {
          if ((i31 | 0) == (H_BASE + 3016 | 0)) {
           break;
          }
          i31 = HEAP32[i31 + 4 >> 2] | 0;
          if ((i31 | 0) == 0) {
           break L29;
          }
         }
         i29 = i24;
         if ((i24 | 0) == 0) {
          break;
         }
         i32 = HEAP32[i29 + 12 >> 2] | 0;
         HEAP32[i9 >> 2] = 0;
         i33 = i10 | 0;
         HEAP32[i33 >> 2] = i20;
         HEAP32[i33 + 4 >> 2] = i21;
         i33 = __ZN7WebCore18toHTMLImageElementEN3JSC7JSValueE(i10) | 0;
         i34 = i1 + 16 | 0;
         i35 = (HEAP32[(HEAP32[i34 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
         if (!((HEAP32[i35 >> 2] & 0 | 0) == 0 & (HEAP32[i35 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
          i36 = -4;
          i37 = 0;
          STACKTOP = i2;
          return (tempRet0 = i36, i37) | 0;
         }
         if (((HEAP32[i17 >> 2] | 0) - 1 | 0) >>> 0 > 1 >>> 0) {
          i35 = i1 + 56 | 0;
          i38 = HEAP32[i35 + 4 >> 2] | 0;
          i39 = i12 | 0;
          HEAP32[i39 >> 2] = HEAP32[i35 >> 2];
          HEAP32[i39 + 4 >> 2] = i38;
         } else {
          HEAP32[i12 + 4 >> 2] = -4;
          HEAP32[i12 >> 2] = 0;
         }
         __ZN7WebCore26valueToStringWithNullCheckEPN3JSC9ExecStateENS0_7JSValueE(i11, i1, i12);
         i38 = (HEAP32[(HEAP32[i34 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
         if ((HEAP32[i38 >> 2] & 0 | 0) == 0 & (HEAP32[i38 + 4 >> 2] & -1 | 0) == (-6 | 0)) {
          i38 = HEAP32[(HEAP32[i29 >> 2] | 0) + 4 >> 2] | 0;
          __ZN7WebCore24CanvasRenderingContext2D13createPatternEPNS_16HTMLImageElementERKN3WTF6StringERi(i14, i32, i33, i11, i9);
          i33 = i14 | 0;
          __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_13CanvasPatternE(i13, i1, i38, HEAP32[i33 >> 2] | 0);
          i38 = HEAP32[i33 >> 2] | 0;
          do {
           if ((i38 | 0) != 0) {
            i33 = i38 | 0;
            i32 = (HEAP32[i33 >> 2] | 0) - 1 | 0;
            if ((i32 | 0) == 0) {
             __ZN7WebCore13CanvasPatternD1Ev(i38);
             __ZN3WTF8fastFreeEPv(i38);
             break;
            } else {
             HEAP32[i33 >> 2] = i32;
             break;
            }
           }
          } while (0);
          __ZN7WebCore15setDOMExceptionEPN3JSC9ExecStateEi(i1, HEAP32[i9 >> 2] | 0);
          i38 = i13 | 0;
          i40 = HEAP32[i38 + 4 >> 2] | 0;
          i41 = HEAP32[i38 >> 2] | 0;
         } else {
          i40 = -4;
          i41 = 0;
         }
         i38 = HEAP32[i11 >> 2] | 0;
         if ((i38 | 0) == 0) {
          i36 = i40;
          i37 = i41;
          STACKTOP = i2;
          return (tempRet0 = i36, i37) | 0;
         }
         i32 = i38 | 0;
         i33 = (HEAP32[i32 >> 2] | 0) - 2 | 0;
         if ((i33 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i38);
          i36 = i40;
          i37 = i41;
          STACKTOP = i2;
          return (tempRet0 = i36, i37) | 0;
         } else {
          HEAP32[i32 >> 2] = i33;
          i36 = i40;
          i37 = i41;
          STACKTOP = i2;
          return (tempRet0 = i36, i37) | 0;
         }
        }
       } while (0);
       i24 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
       i23 = (i24 | 0) == 0;
       i36 = (i23 ? -6 : -5) | 0;
       i37 = (i23 ? 0 : 0) | i24;
       STACKTOP = i2;
       return (tempRet0 = i36, i37) | 0;
      }
     } while (0);
     i24 = i1 + 40 | 0;
     i23 = HEAP32[i24 >> 2] | 0;
     i26 = i23;
     L67 : do {
      if ((i23 & 0 | 0) == 0 & (HEAP32[i24 + 4 >> 2] & -1 | 0) == (-5 | 0)) {
       i33 = i26;
       if ((HEAP32[(i26 & -65536) + 1048 >> 2] | 0) == 2) {
        i42 = i33 + 8 | 0;
       } else {
        i42 = (HEAP32[i33 >> 2] | 0) + 32 | 0;
       }
       i33 = HEAP32[i42 >> 2] | 0;
       if ((i33 | 0) == 0) {
        break;
       } else {
        i43 = i33;
       }
       while (1) {
        if ((i43 | 0) == (H_BASE + 3016 | 0)) {
         break;
        }
        i43 = HEAP32[i43 + 4 >> 2] | 0;
        if ((i43 | 0) == 0) {
         break L67;
        }
       }
       i33 = i26;
       if ((i26 | 0) == 0) {
        break;
       }
       i32 = HEAP32[i33 + 12 >> 2] | 0;
       HEAP32[i3 >> 2] = 0;
       i38 = i4 | 0;
       HEAP32[i38 >> 2] = i20;
       HEAP32[i38 + 4 >> 2] = i21;
       i38 = __ZN7WebCore19toHTMLCanvasElementEN3JSC7JSValueE(i4) | 0;
       i29 = i1 + 16 | 0;
       i34 = (HEAP32[(HEAP32[i29 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
       if (!((HEAP32[i34 >> 2] & 0 | 0) == 0 & (HEAP32[i34 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
        i36 = -4;
        i37 = 0;
        STACKTOP = i2;
        return (tempRet0 = i36, i37) | 0;
       }
       if (((HEAP32[i17 >> 2] | 0) - 1 | 0) >>> 0 > 1 >>> 0) {
        i34 = i1 + 56 | 0;
        i39 = HEAP32[i34 + 4 >> 2] | 0;
        i35 = i6 | 0;
        HEAP32[i35 >> 2] = HEAP32[i34 >> 2];
        HEAP32[i35 + 4 >> 2] = i39;
       } else {
        HEAP32[i6 + 4 >> 2] = -4;
        HEAP32[i6 >> 2] = 0;
       }
       __ZN7WebCore26valueToStringWithNullCheckEPN3JSC9ExecStateENS0_7JSValueE(i5, i1, i6);
       i39 = (HEAP32[(HEAP32[i29 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
       if ((HEAP32[i39 >> 2] & 0 | 0) == 0 & (HEAP32[i39 + 4 >> 2] & -1 | 0) == (-6 | 0)) {
        i39 = HEAP32[(HEAP32[i33 >> 2] | 0) + 4 >> 2] | 0;
        __ZN7WebCore24CanvasRenderingContext2D13createPatternEPNS_17HTMLCanvasElementERKN3WTF6StringERi(i8, i32, i38, i5, i3);
        i38 = i8 | 0;
        __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_13CanvasPatternE(i7, i1, i39, HEAP32[i38 >> 2] | 0);
        i39 = HEAP32[i38 >> 2] | 0;
        do {
         if ((i39 | 0) != 0) {
          i38 = i39 | 0;
          i32 = (HEAP32[i38 >> 2] | 0) - 1 | 0;
          if ((i32 | 0) == 0) {
           __ZN7WebCore13CanvasPatternD1Ev(i39);
           __ZN3WTF8fastFreeEPv(i39);
           break;
          } else {
           HEAP32[i38 >> 2] = i32;
           break;
          }
         }
        } while (0);
        __ZN7WebCore15setDOMExceptionEPN3JSC9ExecStateEi(i1, HEAP32[i3 >> 2] | 0);
        i39 = i7 | 0;
        i44 = HEAP32[i39 + 4 >> 2] | 0;
        i45 = HEAP32[i39 >> 2] | 0;
       } else {
        i44 = -4;
        i45 = 0;
       }
       i39 = HEAP32[i5 >> 2] | 0;
       if ((i39 | 0) == 0) {
        i36 = i44;
        i37 = i45;
        STACKTOP = i2;
        return (tempRet0 = i36, i37) | 0;
       }
       i32 = i39 | 0;
       i38 = (HEAP32[i32 >> 2] | 0) - 2 | 0;
       if ((i38 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i39);
        i36 = i44;
        i37 = i45;
        STACKTOP = i2;
        return (tempRet0 = i36, i37) | 0;
       } else {
        HEAP32[i32 >> 2] = i38;
        i36 = i44;
        i37 = i45;
        STACKTOP = i2;
        return (tempRet0 = i36, i37) | 0;
       }
      }
     } while (0);
     i26 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
     i24 = (i26 | 0) == 0;
     i36 = (i24 ? -6 : -5) | 0;
     i37 = (i24 ? 0 : 0) | i26;
     STACKTOP = i2;
     return (tempRet0 = i36, i37) | 0;
    }
   } while (0);
   if (i18 >>> 0 < 2 >>> 0) {
    break;
   }
   i21 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
   i20 = (i21 | 0) == 0;
   i36 = (i20 ? -6 : -5) | 0;
   i37 = (i20 ? 0 : 0) | i21;
   STACKTOP = i2;
   return (tempRet0 = i36, i37) | 0;
  }
 } while (0);
 i18 = __ZN3JSC29createNotEnoughArgumentsErrorEPNS_9ExecStateE(i1) | 0;
 i45 = (i18 | 0) == 0;
 i44 = HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
 i5 = i16 | 0;
 HEAP32[i5 >> 2] = (i45 ? 0 : 0) | i18;
 HEAP32[i5 + 4 >> 2] = i45 ? -6 : -5;
 __ZN3JSC2VM14throwExceptionEPNS_9ExecStateENS_7JSValueE(i15, i44, i1, i16);
 i16 = i15 | 0;
 i36 = HEAP32[i16 + 4 >> 2] | 0;
 i37 = HEAP32[i16 >> 2] | 0;
 STACKTOP = i2;
 return (tempRet0 = i36, i37) | 0;
}
function __ZN7WebCore58jsCanvasRenderingContext2DPrototypeFunctionCreateImageDataEPN3JSC9ExecStateE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, d25 = +0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, d34 = +0, d35 = +0, i36 = 0, d37 = +0, d38 = +0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 112 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 40 | 0;
 i9 = i2 + 48 | 0;
 i10 = i2 + 56 | 0;
 i11 = i2 + 64 | 0;
 i12 = i2 + 72 | 0;
 i13 = i2 + 80 | 0;
 i14 = i2 + 88 | 0;
 i15 = i2 + 96 | 0;
 i16 = i2 + 104 | 0;
 i17 = i1 + 32 | 0;
 i18 = HEAP32[i17 >> 2] | 0;
 if ((i18 | 0) == 1) {
  i19 = __ZN3JSC29createNotEnoughArgumentsErrorEPNS_9ExecStateE(i1) | 0;
  i20 = (i19 | 0) == 0;
  i21 = HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
  i22 = i16 | 0;
  HEAP32[i22 >> 2] = (i20 ? 0 : 0) | i19;
  HEAP32[i22 + 4 >> 2] = i20 ? -6 : -5;
  __ZN3JSC2VM14throwExceptionEPNS_9ExecStateENS_7JSValueE(i15, i21, i1, i16);
  i16 = i15 | 0;
  i23 = HEAP32[i16 + 4 >> 2] | 0;
  i24 = HEAP32[i16 >> 2] | 0;
  STACKTOP = i2;
  return (tempRet0 = i23, i24) | 0;
 }
 i16 = i1 + 48 | 0;
 i15 = HEAP32[i16 >> 2] | 0;
 i21 = HEAP32[i16 + 4 >> 2] | 0;
 d25 = +HEAPF64[i16 >> 3];
 i16 = i15;
 if ((i18 | 0) == 3) {
  i20 = i1 + 40 | 0;
  i22 = HEAP32[i20 >> 2] | 0;
  i19 = i22;
  L7 : do {
   if ((i22 & 0 | 0) == 0 & (HEAP32[i20 + 4 >> 2] & -1 | 0) == (-5 | 0)) {
    i26 = i19;
    if ((HEAP32[(i19 & -65536) + 1048 >> 2] | 0) == 2) {
     i27 = i26 + 8 | 0;
    } else {
     i27 = (HEAP32[i26 >> 2] | 0) + 32 | 0;
    }
    i26 = HEAP32[i27 >> 2] | 0;
    if ((i26 | 0) == 0) {
     break;
    } else {
     i28 = i26;
    }
    while (1) {
     if ((i28 | 0) == (H_BASE + 3016 | 0)) {
      break;
     }
     i28 = HEAP32[i28 + 4 >> 2] | 0;
     if ((i28 | 0) == 0) {
      break L7;
     }
    }
    i26 = i19;
    if ((i19 | 0) == 0) {
     break;
    }
    i29 = HEAP32[i26 + 12 >> 2] | 0;
    if ((i18 - 1 | 0) >>> 0 < 2 >>> 0) {
     i30 = __ZN3JSC29createNotEnoughArgumentsErrorEPNS_9ExecStateE(i1) | 0;
     i31 = (i30 | 0) == 0;
     i32 = HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
     i33 = i9 | 0;
     HEAP32[i33 >> 2] = (i31 ? 0 : 0) | i30;
     HEAP32[i33 + 4 >> 2] = i31 ? -6 : -5;
     __ZN3JSC2VM14throwExceptionEPNS_9ExecStateENS_7JSValueE(i8, i32, i1, i9);
     i32 = i8 | 0;
     i23 = HEAP32[i32 + 4 >> 2] | 0;
     i24 = HEAP32[i32 >> 2] | 0;
     STACKTOP = i2;
     return (tempRet0 = i23, i24) | 0;
    }
    HEAP32[i10 >> 2] = 0;
    i32 = i11 | 0;
    HEAP32[i32 >> 2] = i15;
    HEAP32[i32 + 4 >> 2] = i21;
    i32 = i21;
    do {
     if ((i32 | 0) == -1) {
      d34 = +(i16 | 0);
     } else {
      if (i32 >>> 0 < 4294967289 >>> 0) {
       d34 = d25;
       break;
      }
      d34 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i11, i1);
     }
    } while (0);
    d35 = d34;
    i32 = i1 + 16 | 0;
    i31 = HEAP32[i32 >> 2] | 0;
    i33 = (HEAP32[(i31 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
    if (!((HEAP32[i33 >> 2] & 0 | 0) == 0 & (HEAP32[i33 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
     i23 = -4;
     i24 = 0;
     STACKTOP = i2;
     return (tempRet0 = i23, i24) | 0;
    }
    do {
     if (((HEAP32[i17 >> 2] | 0) - 1 | 0) >>> 0 > 1 >>> 0) {
      i33 = i1 + 56 | 0;
      i30 = HEAP32[i33 >> 2] | 0;
      i36 = HEAP32[i33 + 4 >> 2] | 0;
      d37 = +HEAPF64[i33 >> 3];
      i33 = i12 | 0;
      HEAP32[i33 >> 2] = i30;
      HEAP32[i33 + 4 >> 2] = i36;
      i33 = i36;
      if ((i33 | 0) == -1) {
       d38 = +(i30 | 0);
       i39 = i31;
       break;
      } else {
       if (i33 >>> 0 < 4294967289 >>> 0) {
        d38 = d37;
        i39 = i31;
        break;
       } else {
        i40 = 62;
        break;
       }
      }
     } else {
      HEAP32[i12 + 4 >> 2] = -4;
      HEAP32[i12 >> 2] = 0;
      i40 = 62;
     }
    } while (0);
    if ((i40 | 0) == 62) {
     d37 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i12, i1);
     d38 = d37;
     i39 = HEAP32[i32 >> 2] | 0;
    }
    i31 = (HEAP32[(i39 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
    if (!((HEAP32[i31 >> 2] & 0 | 0) == 0 & (HEAP32[i31 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
     i23 = -4;
     i24 = 0;
     STACKTOP = i2;
     return (tempRet0 = i23, i24) | 0;
    }
    i31 = HEAP32[(HEAP32[i26 >> 2] | 0) + 4 >> 2] | 0;
    __ZNK7WebCore24CanvasRenderingContext2D15createImageDataEffRi(i14, i29, d35, d38, i10);
    i33 = i14 | 0;
    __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_9ImageDataE(i13, i1, i31, HEAP32[i33 >> 2] | 0);
    i31 = HEAP32[i33 >> 2] | 0;
    do {
     if ((i31 | 0) != 0) {
      i33 = i31 | 0;
      i30 = (HEAP32[i33 >> 2] | 0) - 1 | 0;
      if ((i30 | 0) != 0) {
       HEAP32[i33 >> 2] = i30;
       break;
      }
      i30 = HEAP32[i31 + 12 >> 2] | 0;
      do {
       if ((i30 | 0) != 0) {
        i33 = i30 + 4 | 0;
        i36 = i33 | 0;
        i41 = (HEAP32[i36 >> 2] | 0) - 1 | 0;
        if ((i41 | 0) != 0) {
         HEAP32[i36 >> 2] = i41;
         break;
        }
        i41 = i33 - 4 | 0;
        if ((i41 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i41 >> 2] | 0) + 12 >> 2] & 7](i41);
       }
      } while (0);
      __ZN3WTF8fastFreeEPv(i31);
     }
    } while (0);
    __ZN7WebCore15setDOMExceptionEPN3JSC9ExecStateEi(i1, HEAP32[i10 >> 2] | 0);
    i31 = i13 | 0;
    i23 = HEAP32[i31 + 4 >> 2] | 0;
    i24 = HEAP32[i31 >> 2] | 0;
    STACKTOP = i2;
    return (tempRet0 = i23, i24) | 0;
   }
  } while (0);
  i13 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
  i10 = (i13 | 0) == 0;
  i23 = (i10 ? -6 : -5) | 0;
  i24 = (i10 ? 0 : 0) | i13;
  STACKTOP = i2;
  return (tempRet0 = i23, i24) | 0;
 } else if ((i18 | 0) == 2) {
  i40 = 3;
 }
 L57 : do {
  if ((i40 | 0) == 3) {
   i18 = i21;
   L59 : do {
    if ((i18 | 0) == (-5 | 0)) {
     if ((HEAPU8[(HEAP32[i16 >> 2] | 0) + 52 | 0] | 0) >>> 0 <= 16 >>> 0) {
      break L57;
     }
     i13 = i16;
     if ((HEAP32[(i16 & -65536) + 1048 >> 2] | 0) == 2) {
      i42 = i13 + 8 | 0;
     } else {
      i42 = (HEAP32[i13 >> 2] | 0) + 32 | 0;
     }
     i13 = HEAP32[i42 >> 2] | 0;
     if ((i13 | 0) == 0) {
      break L57;
     } else {
      i43 = i13;
     }
     while (1) {
      if ((i43 | 0) == (__ZN7WebCore11JSImageData6s_infoE | 0)) {
       break L59;
      }
      i43 = HEAP32[i43 + 4 >> 2] | 0;
      if ((i43 | 0) == 0) {
       break L57;
      }
     }
    } else if ((i18 | 0) != (-3 | 0)) {
     break L57;
    }
   } while (0);
   i18 = i1 + 40 | 0;
   i13 = HEAP32[i18 >> 2] | 0;
   i10 = i13;
   L70 : do {
    if ((i13 & 0 | 0) == 0 & (HEAP32[i18 + 4 >> 2] & -1 | 0) == (-5 | 0)) {
     i14 = i10;
     if ((HEAP32[(i10 & -65536) + 1048 >> 2] | 0) == 2) {
      i44 = i14 + 8 | 0;
     } else {
      i44 = (HEAP32[i14 >> 2] | 0) + 32 | 0;
     }
     i14 = HEAP32[i44 >> 2] | 0;
     if ((i14 | 0) == 0) {
      break;
     } else {
      i45 = i14;
     }
     while (1) {
      if ((i45 | 0) == (H_BASE + 3016 | 0)) {
       break;
      }
      i45 = HEAP32[i45 + 4 >> 2] | 0;
      if ((i45 | 0) == 0) {
       break L70;
      }
     }
     i14 = i10;
     if ((i10 | 0) == 0) {
      break;
     }
     i39 = HEAP32[i14 + 12 >> 2] | 0;
     HEAP32[i3 >> 2] = 0;
     i12 = i4 | 0;
     HEAP32[i12 >> 2] = i15;
     HEAP32[i12 + 4 >> 2] = i21;
     i12 = __ZN7WebCore11toImageDataEN3JSC7JSValueE(i4) | 0;
     i17 = (HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
     if (!((HEAP32[i17 >> 2] & 0 | 0) == 0 & (HEAP32[i17 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
      i23 = -4;
      i24 = 0;
      STACKTOP = i2;
      return (tempRet0 = i23, i24) | 0;
     }
     i17 = HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] | 0;
     i14 = i7 | 0;
     HEAP32[i14 >> 2] = i12;
     if ((i12 | 0) != 0) {
      i11 = i12 | 0;
      HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
     }
     __ZNK7WebCore24CanvasRenderingContext2D15createImageDataEN3WTF10PassRefPtrINS_9ImageDataEEERi(i6, i39, i7, i3);
     i39 = i6 | 0;
     __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_9ImageDataE(i5, i1, i17, HEAP32[i39 >> 2] | 0);
     i17 = HEAP32[i39 >> 2] | 0;
     do {
      if ((i17 | 0) != 0) {
       i39 = i17 | 0;
       i11 = (HEAP32[i39 >> 2] | 0) - 1 | 0;
       if ((i11 | 0) != 0) {
        HEAP32[i39 >> 2] = i11;
        break;
       }
       i11 = HEAP32[i17 + 12 >> 2] | 0;
       do {
        if ((i11 | 0) != 0) {
         i39 = i11 + 4 | 0;
         i12 = i39 | 0;
         i8 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
         if ((i8 | 0) != 0) {
          HEAP32[i12 >> 2] = i8;
          break;
         }
         i8 = i39 - 4 | 0;
         if ((i8 | 0) == 0) {
          break;
         }
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 12 >> 2] & 7](i8);
        }
       } while (0);
       __ZN3WTF8fastFreeEPv(i17);
      }
     } while (0);
     i17 = HEAP32[i14 >> 2] | 0;
     do {
      if ((i17 | 0) != 0) {
       i11 = i17 | 0;
       i8 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
       if ((i8 | 0) != 0) {
        HEAP32[i11 >> 2] = i8;
        break;
       }
       i8 = HEAP32[i17 + 12 >> 2] | 0;
       do {
        if ((i8 | 0) != 0) {
         i11 = i8 + 4 | 0;
         i39 = i11 | 0;
         i12 = (HEAP32[i39 >> 2] | 0) - 1 | 0;
         if ((i12 | 0) != 0) {
          HEAP32[i39 >> 2] = i12;
          break;
         }
         i12 = i11 - 4 | 0;
         if ((i12 | 0) == 0) {
          break;
         }
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 12 >> 2] & 7](i12);
        }
       } while (0);
       __ZN3WTF8fastFreeEPv(i17);
      }
     } while (0);
     __ZN7WebCore15setDOMExceptionEPN3JSC9ExecStateEi(i1, HEAP32[i3 >> 2] | 0);
     i17 = i5 | 0;
     i23 = HEAP32[i17 + 4 >> 2] | 0;
     i24 = HEAP32[i17 >> 2] | 0;
     STACKTOP = i2;
     return (tempRet0 = i23, i24) | 0;
    }
   } while (0);
   i10 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
   i18 = (i10 | 0) == 0;
   i23 = (i18 ? -6 : -5) | 0;
   i24 = (i18 ? 0 : 0) | i10;
   STACKTOP = i2;
   return (tempRet0 = i23, i24) | 0;
  }
 } while (0);
 i5 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 i1 = (i5 | 0) == 0;
 i23 = (i1 ? -6 : -5) | 0;
 i24 = (i1 ? 0 : 0) | i5;
 STACKTOP = i2;
 return (tempRet0 = i23, i24) | 0;
}
function __ZN7WebCore63jsCanvasRenderingContext2DPrototypeFunctionCreateRadialGradientEPN3JSC9ExecStateE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, d28 = +0, d29 = +0, i30 = 0, d31 = +0, i32 = 0, i33 = 0, d34 = +0, d35 = +0, i36 = 0, d37 = +0, d38 = +0, i39 = 0, d40 = +0, d41 = +0, i42 = 0, d43 = +0, d44 = +0, i45 = 0, d46 = +0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 40 | 0;
 i9 = i2 + 48 | 0;
 i10 = i2 + 56 | 0;
 i11 = i2 + 64 | 0;
 i12 = i2 + 72 | 0;
 i13 = i2 + 80 | 0;
 i14 = i1 + 40 | 0;
 i15 = HEAP32[i14 >> 2] | 0;
 i16 = i15;
 L1 : do {
  if ((i15 & 0 | 0) == 0 & (HEAP32[i14 + 4 >> 2] & -1 | 0) == (-5 | 0)) {
   i17 = i16;
   if ((HEAP32[(i16 & -65536) + 1048 >> 2] | 0) == 2) {
    i18 = i17 + 8 | 0;
   } else {
    i18 = (HEAP32[i17 >> 2] | 0) + 32 | 0;
   }
   i17 = HEAP32[i18 >> 2] | 0;
   if ((i17 | 0) == 0) {
    break;
   } else {
    i19 = i17;
   }
   while (1) {
    if ((i19 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i19 = HEAP32[i19 + 4 >> 2] | 0;
    if ((i19 | 0) == 0) {
     break L1;
    }
   }
   i17 = i16;
   if ((i16 | 0) == 0) {
    break;
   }
   i20 = HEAP32[i17 + 12 >> 2] | 0;
   i21 = i1 + 32 | 0;
   if (((HEAP32[i21 >> 2] | 0) - 1 | 0) >>> 0 < 6 >>> 0) {
    i22 = __ZN3JSC29createNotEnoughArgumentsErrorEPNS_9ExecStateE(i1) | 0;
    i23 = (i22 | 0) == 0;
    i24 = HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
    i25 = i4 | 0;
    HEAP32[i25 >> 2] = (i23 ? 0 : 0) | i22;
    HEAP32[i25 + 4 >> 2] = i23 ? -6 : -5;
    __ZN3JSC2VM14throwExceptionEPNS_9ExecStateENS_7JSValueE(i3, i24, i1, i4);
    i24 = i3 | 0;
    i26 = HEAP32[i24 + 4 >> 2] | 0;
    i27 = HEAP32[i24 >> 2] | 0;
    STACKTOP = i2;
    return (tempRet0 = i26, i27) | 0;
   }
   HEAP32[i5 >> 2] = 0;
   i24 = i1 + 48 | 0;
   i23 = HEAP32[i24 >> 2] | 0;
   i25 = HEAP32[i24 + 4 >> 2] | 0;
   i24 = i6 | 0;
   HEAP32[i24 >> 2] = i23;
   HEAP32[i24 + 4 >> 2] = i25;
   i24 = i25;
   do {
    if ((i24 | 0) == -1) {
     d28 = +(i23 | 0);
    } else {
     if (i24 >>> 0 < 4294967289 >>> 0) {
      d28 = +HEAPF64[i6 >> 3];
      break;
     } else {
      d28 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i6, i1);
      break;
     }
    }
   } while (0);
   d29 = d28;
   i24 = i1 + 16 | 0;
   i23 = HEAP32[i24 >> 2] | 0;
   i25 = (HEAP32[(i23 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i25 >> 2] & 0 | 0) == 0 & (HEAP32[i25 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i26 = -4;
    i27 = 0;
    STACKTOP = i2;
    return (tempRet0 = i26, i27) | 0;
   }
   do {
    if (((HEAP32[i21 >> 2] | 0) - 1 | 0) >>> 0 > 1 >>> 0) {
     i25 = i1 + 56 | 0;
     i22 = HEAP32[i25 >> 2] | 0;
     i30 = HEAP32[i25 + 4 >> 2] | 0;
     i25 = i7 | 0;
     HEAP32[i25 >> 2] = i22;
     HEAP32[i25 + 4 >> 2] = i30;
     i25 = i30;
     if ((i25 | 0) == -1) {
      d31 = +(i22 | 0);
      i32 = i23;
      break;
     }
     if (i25 >>> 0 >= 4294967289 >>> 0) {
      i33 = 23;
      break;
     }
     d31 = +HEAPF64[i7 >> 3];
     i32 = i23;
    } else {
     HEAP32[i7 + 4 >> 2] = -4;
     HEAP32[i7 >> 2] = 0;
     i33 = 23;
    }
   } while (0);
   if ((i33 | 0) == 23) {
    d34 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i7, i1);
    d31 = d34;
    i32 = HEAP32[i24 >> 2] | 0;
   }
   d34 = d31;
   i23 = (HEAP32[(i32 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i23 >> 2] & 0 | 0) == 0 & (HEAP32[i23 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i26 = -4;
    i27 = 0;
    STACKTOP = i2;
    return (tempRet0 = i26, i27) | 0;
   }
   do {
    if (((HEAP32[i21 >> 2] | 0) - 1 | 0) >>> 0 > 2 >>> 0) {
     i23 = i1 + 64 | 0;
     i25 = HEAP32[i23 >> 2] | 0;
     i22 = HEAP32[i23 + 4 >> 2] | 0;
     i23 = i8 | 0;
     HEAP32[i23 >> 2] = i25;
     HEAP32[i23 + 4 >> 2] = i22;
     i23 = i22;
     if ((i23 | 0) == -1) {
      d35 = +(i25 | 0);
      i36 = i32;
      break;
     }
     if (i23 >>> 0 >= 4294967289 >>> 0) {
      i33 = 30;
      break;
     }
     d35 = +HEAPF64[i8 >> 3];
     i36 = i32;
    } else {
     HEAP32[i8 + 4 >> 2] = -4;
     HEAP32[i8 >> 2] = 0;
     i33 = 30;
    }
   } while (0);
   if ((i33 | 0) == 30) {
    d37 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i8, i1);
    d35 = d37;
    i36 = HEAP32[i24 >> 2] | 0;
   }
   d37 = d35;
   i23 = (HEAP32[(i36 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i23 >> 2] & 0 | 0) == 0 & (HEAP32[i23 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i26 = -4;
    i27 = 0;
    STACKTOP = i2;
    return (tempRet0 = i26, i27) | 0;
   }
   do {
    if (((HEAP32[i21 >> 2] | 0) - 1 | 0) >>> 0 > 3 >>> 0) {
     i23 = i1 + 72 | 0;
     i25 = HEAP32[i23 >> 2] | 0;
     i22 = HEAP32[i23 + 4 >> 2] | 0;
     i23 = i9 | 0;
     HEAP32[i23 >> 2] = i25;
     HEAP32[i23 + 4 >> 2] = i22;
     i23 = i22;
     if ((i23 | 0) == -1) {
      d38 = +(i25 | 0);
      i39 = i36;
      break;
     }
     if (i23 >>> 0 >= 4294967289 >>> 0) {
      i33 = 37;
      break;
     }
     d38 = +HEAPF64[i9 >> 3];
     i39 = i36;
    } else {
     HEAP32[i9 + 4 >> 2] = -4;
     HEAP32[i9 >> 2] = 0;
     i33 = 37;
    }
   } while (0);
   if ((i33 | 0) == 37) {
    d40 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i9, i1);
    d38 = d40;
    i39 = HEAP32[i24 >> 2] | 0;
   }
   d40 = d38;
   i23 = (HEAP32[(i39 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i23 >> 2] & 0 | 0) == 0 & (HEAP32[i23 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i26 = -4;
    i27 = 0;
    STACKTOP = i2;
    return (tempRet0 = i26, i27) | 0;
   }
   do {
    if (((HEAP32[i21 >> 2] | 0) - 1 | 0) >>> 0 > 4 >>> 0) {
     i23 = i1 + 80 | 0;
     i25 = HEAP32[i23 >> 2] | 0;
     i22 = HEAP32[i23 + 4 >> 2] | 0;
     i23 = i10 | 0;
     HEAP32[i23 >> 2] = i25;
     HEAP32[i23 + 4 >> 2] = i22;
     i23 = i22;
     if ((i23 | 0) == -1) {
      d41 = +(i25 | 0);
      i42 = i39;
      break;
     }
     if (i23 >>> 0 >= 4294967289 >>> 0) {
      i33 = 44;
      break;
     }
     d41 = +HEAPF64[i10 >> 3];
     i42 = i39;
    } else {
     HEAP32[i10 + 4 >> 2] = -4;
     HEAP32[i10 >> 2] = 0;
     i33 = 44;
    }
   } while (0);
   if ((i33 | 0) == 44) {
    d43 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i10, i1);
    d41 = d43;
    i42 = HEAP32[i24 >> 2] | 0;
   }
   d43 = d41;
   i23 = (HEAP32[(i42 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i23 >> 2] & 0 | 0) == 0 & (HEAP32[i23 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i26 = -4;
    i27 = 0;
    STACKTOP = i2;
    return (tempRet0 = i26, i27) | 0;
   }
   do {
    if (((HEAP32[i21 >> 2] | 0) - 1 | 0) >>> 0 > 5 >>> 0) {
     i23 = i1 + 88 | 0;
     i25 = HEAP32[i23 >> 2] | 0;
     i22 = HEAP32[i23 + 4 >> 2] | 0;
     i23 = i11 | 0;
     HEAP32[i23 >> 2] = i25;
     HEAP32[i23 + 4 >> 2] = i22;
     i23 = i22;
     if ((i23 | 0) == -1) {
      d44 = +(i25 | 0);
      i45 = i42;
      break;
     }
     if (i23 >>> 0 >= 4294967289 >>> 0) {
      i33 = 51;
      break;
     }
     d44 = +HEAPF64[i11 >> 3];
     i45 = i42;
    } else {
     HEAP32[i11 + 4 >> 2] = -4;
     HEAP32[i11 >> 2] = 0;
     i33 = 51;
    }
   } while (0);
   if ((i33 | 0) == 51) {
    d46 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i11, i1);
    d44 = d46;
    i45 = HEAP32[i24 >> 2] | 0;
   }
   i21 = (HEAP32[(i45 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i21 >> 2] & 0 | 0) == 0 & (HEAP32[i21 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i26 = -4;
    i27 = 0;
    STACKTOP = i2;
    return (tempRet0 = i26, i27) | 0;
   }
   i21 = HEAP32[(HEAP32[i17 >> 2] | 0) + 4 >> 2] | 0;
   __ZN7WebCore24CanvasRenderingContext2D20createRadialGradientEffffffRi(i13, i20, d29, d34, d37, d40, d43, d44, i5);
   i23 = i13 | 0;
   __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_14CanvasGradientE(i12, i1, i21, HEAP32[i23 >> 2] | 0);
   i21 = HEAP32[i23 >> 2] | 0;
   do {
    if ((i21 | 0) != 0) {
     i23 = i21 | 0;
     i25 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
     if ((i25 | 0) != 0) {
      HEAP32[i23 >> 2] = i25;
      break;
     }
     i25 = HEAP32[i21 + 4 >> 2] | 0;
     do {
      if ((i25 | 0) != 0) {
       i23 = i25 | 0;
       i22 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
       if ((i22 | 0) == 0) {
        __ZN7WebCore8GradientD1Ev(i25);
        __ZN3WTF8fastFreeEPv(i25);
        break;
       } else {
        HEAP32[i23 >> 2] = i22;
        break;
       }
      }
     } while (0);
     __ZN3WTF8fastFreeEPv(i21);
    }
   } while (0);
   __ZN7WebCore15setDOMExceptionEPN3JSC9ExecStateEi(i1, HEAP32[i5 >> 2] | 0);
   i21 = i12 | 0;
   i26 = HEAP32[i21 + 4 >> 2] | 0;
   i27 = HEAP32[i21 >> 2] | 0;
   STACKTOP = i2;
   return (tempRet0 = i26, i27) | 0;
  }
 } while (0);
 i12 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 i1 = (i12 | 0) == 0;
 i26 = (i1 ? -6 : -5) | 0;
 i27 = (i1 ? 0 : 0) | i12;
 STACKTOP = i2;
 return (tempRet0 = i26, i27) | 0;
}
function __ZN7WebCore46jsCanvasRenderingContext2DPrototypeFunctionArcEPN3JSC9ExecStateE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, d24 = +0, d25 = +0, i26 = 0, d27 = +0, i28 = 0, i29 = 0, d30 = +0, d31 = +0, i32 = 0, d33 = +0, d34 = +0, i35 = 0, d36 = +0, d37 = +0, i38 = 0, d39 = +0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, d44 = +0;
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
 i11 = i1 + 40 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 i13 = i12;
 L1 : do {
  if ((i12 & 0 | 0) == 0 & (HEAP32[i11 + 4 >> 2] & -1 | 0) == (-5 | 0)) {
   i14 = i13;
   if ((HEAP32[(i13 & -65536) + 1048 >> 2] | 0) == 2) {
    i15 = i14 + 8 | 0;
   } else {
    i15 = (HEAP32[i14 >> 2] | 0) + 32 | 0;
   }
   i14 = HEAP32[i15 >> 2] | 0;
   if ((i14 | 0) == 0) {
    break;
   } else {
    i16 = i14;
   }
   while (1) {
    if ((i16 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i16 = HEAP32[i16 + 4 >> 2] | 0;
    if ((i16 | 0) == 0) {
     break L1;
    }
   }
   if ((i13 | 0) == 0) {
    break;
   }
   i14 = HEAP32[i13 + 12 >> 2] | 0;
   i17 = i1 + 32 | 0;
   if (((HEAP32[i17 >> 2] | 0) - 1 | 0) >>> 0 < 5 >>> 0) {
    i18 = __ZN3JSC29createNotEnoughArgumentsErrorEPNS_9ExecStateE(i1) | 0;
    i19 = (i18 | 0) == 0;
    i20 = HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
    i21 = i4 | 0;
    HEAP32[i21 >> 2] = (i19 ? 0 : 0) | i18;
    HEAP32[i21 + 4 >> 2] = i19 ? -6 : -5;
    __ZN3JSC2VM14throwExceptionEPNS_9ExecStateENS_7JSValueE(i3, i20, i1, i4);
    i20 = i3 | 0;
    i22 = HEAP32[i20 + 4 >> 2] | 0;
    i23 = HEAP32[i20 >> 2] | 0;
    STACKTOP = i2;
    return (tempRet0 = i22, i23) | 0;
   }
   HEAP32[i5 >> 2] = 0;
   i20 = i1 + 48 | 0;
   i19 = HEAP32[i20 >> 2] | 0;
   i21 = HEAP32[i20 + 4 >> 2] | 0;
   i20 = i6 | 0;
   HEAP32[i20 >> 2] = i19;
   HEAP32[i20 + 4 >> 2] = i21;
   i20 = i21;
   do {
    if ((i20 | 0) == -1) {
     d24 = +(i19 | 0);
    } else {
     if (i20 >>> 0 < 4294967289 >>> 0) {
      d24 = +HEAPF64[i6 >> 3];
      break;
     } else {
      d24 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i6, i1);
      break;
     }
    }
   } while (0);
   d25 = d24;
   i20 = i1 + 16 | 0;
   i19 = HEAP32[i20 >> 2] | 0;
   i21 = (HEAP32[(i19 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i21 >> 2] & 0 | 0) == 0 & (HEAP32[i21 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i22 = -4;
    i23 = 0;
    STACKTOP = i2;
    return (tempRet0 = i22, i23) | 0;
   }
   do {
    if (((HEAP32[i17 >> 2] | 0) - 1 | 0) >>> 0 > 1 >>> 0) {
     i21 = i1 + 56 | 0;
     i18 = HEAP32[i21 >> 2] | 0;
     i26 = HEAP32[i21 + 4 >> 2] | 0;
     i21 = i7 | 0;
     HEAP32[i21 >> 2] = i18;
     HEAP32[i21 + 4 >> 2] = i26;
     i21 = i26;
     if ((i21 | 0) == -1) {
      d27 = +(i18 | 0);
      i28 = i19;
      break;
     }
     if (i21 >>> 0 >= 4294967289 >>> 0) {
      i29 = 23;
      break;
     }
     d27 = +HEAPF64[i7 >> 3];
     i28 = i19;
    } else {
     HEAP32[i7 + 4 >> 2] = -4;
     HEAP32[i7 >> 2] = 0;
     i29 = 23;
    }
   } while (0);
   if ((i29 | 0) == 23) {
    d30 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i7, i1);
    d27 = d30;
    i28 = HEAP32[i20 >> 2] | 0;
   }
   d30 = d27;
   i19 = (HEAP32[(i28 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i19 >> 2] & 0 | 0) == 0 & (HEAP32[i19 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i22 = -4;
    i23 = 0;
    STACKTOP = i2;
    return (tempRet0 = i22, i23) | 0;
   }
   do {
    if (((HEAP32[i17 >> 2] | 0) - 1 | 0) >>> 0 > 2 >>> 0) {
     i19 = i1 + 64 | 0;
     i21 = HEAP32[i19 >> 2] | 0;
     i18 = HEAP32[i19 + 4 >> 2] | 0;
     i19 = i8 | 0;
     HEAP32[i19 >> 2] = i21;
     HEAP32[i19 + 4 >> 2] = i18;
     i19 = i18;
     if ((i19 | 0) == -1) {
      d31 = +(i21 | 0);
      i32 = i28;
      break;
     }
     if (i19 >>> 0 >= 4294967289 >>> 0) {
      i29 = 30;
      break;
     }
     d31 = +HEAPF64[i8 >> 3];
     i32 = i28;
    } else {
     HEAP32[i8 + 4 >> 2] = -4;
     HEAP32[i8 >> 2] = 0;
     i29 = 30;
    }
   } while (0);
   if ((i29 | 0) == 30) {
    d33 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i8, i1);
    d31 = d33;
    i32 = HEAP32[i20 >> 2] | 0;
   }
   d33 = d31;
   i19 = (HEAP32[(i32 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i19 >> 2] & 0 | 0) == 0 & (HEAP32[i19 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i22 = -4;
    i23 = 0;
    STACKTOP = i2;
    return (tempRet0 = i22, i23) | 0;
   }
   do {
    if (((HEAP32[i17 >> 2] | 0) - 1 | 0) >>> 0 > 3 >>> 0) {
     i19 = i1 + 72 | 0;
     i21 = HEAP32[i19 >> 2] | 0;
     i18 = HEAP32[i19 + 4 >> 2] | 0;
     i19 = i9 | 0;
     HEAP32[i19 >> 2] = i21;
     HEAP32[i19 + 4 >> 2] = i18;
     i19 = i18;
     if ((i19 | 0) == -1) {
      d34 = +(i21 | 0);
      i35 = i32;
      break;
     }
     if (i19 >>> 0 >= 4294967289 >>> 0) {
      i29 = 37;
      break;
     }
     d34 = +HEAPF64[i9 >> 3];
     i35 = i32;
    } else {
     HEAP32[i9 + 4 >> 2] = -4;
     HEAP32[i9 >> 2] = 0;
     i29 = 37;
    }
   } while (0);
   if ((i29 | 0) == 37) {
    d36 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i9, i1);
    d34 = d36;
    i35 = HEAP32[i20 >> 2] | 0;
   }
   d36 = d34;
   i19 = (HEAP32[(i35 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i19 >> 2] & 0 | 0) == 0 & (HEAP32[i19 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i22 = -4;
    i23 = 0;
    STACKTOP = i2;
    return (tempRet0 = i22, i23) | 0;
   }
   do {
    if (((HEAP32[i17 >> 2] | 0) - 1 | 0) >>> 0 > 4 >>> 0) {
     i19 = i1 + 80 | 0;
     i21 = HEAP32[i19 >> 2] | 0;
     i18 = HEAP32[i19 + 4 >> 2] | 0;
     i19 = i10 | 0;
     HEAP32[i19 >> 2] = i21;
     HEAP32[i19 + 4 >> 2] = i18;
     i19 = i18;
     if ((i19 | 0) == -1) {
      d37 = +(i21 | 0);
      i38 = i35;
      break;
     }
     if (i19 >>> 0 >= 4294967289 >>> 0) {
      i29 = 44;
      break;
     }
     d37 = +HEAPF64[i10 >> 3];
     i38 = i35;
    } else {
     HEAP32[i10 + 4 >> 2] = -4;
     HEAP32[i10 >> 2] = 0;
     i29 = 44;
    }
   } while (0);
   if ((i29 | 0) == 44) {
    d39 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i10, i1);
    d37 = d39;
    i38 = HEAP32[i20 >> 2] | 0;
   }
   d39 = d37;
   i19 = (HEAP32[(i38 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i19 >> 2] & 0 | 0) == 0 & (HEAP32[i19 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i22 = -4;
    i23 = 0;
    STACKTOP = i2;
    return (tempRet0 = i22, i23) | 0;
   }
   if (((HEAP32[i17 >> 2] | 0) - 1 | 0) >>> 0 > 5 >>> 0) {
    i19 = i1 + 88 | 0;
    i40 = HEAP32[i19 + 4 >> 2] | 0;
    i41 = HEAP32[i19 >> 2] | 0;
   } else {
    i40 = -4;
    i41 = 0;
   }
   i19 = i40;
   do {
    if ((i19 | 0) == -1) {
     i42 = (i41 | 0) != 0;
     i43 = i38;
    } else {
     if (i19 >>> 0 < 4294967289 >>> 0) {
      d44 = (HEAP32[tempDoublePtr >> 2] = i41, HEAP32[tempDoublePtr + 4 >> 2] = i40, +HEAPF64[tempDoublePtr >> 3]);
      i21 = d44 > +0;
      i42 = i21 | d44 < +0 & (i21 ^ 1);
      i43 = i38;
      break;
     }
     if ((i19 | 0) == (-2 | 0)) {
      i42 = (i41 | 0) != 0;
      i43 = i38;
      break;
     } else if ((i19 | 0) != (-5 | 0)) {
      i42 = 0;
      i43 = i38;
      break;
     }
     i21 = i41;
     i18 = HEAP32[i21 >> 2] | 0;
     if ((HEAP8[i18 + 52 | 0] | 0) == 5) {
      i26 = __ZNK3JSC8JSString9toBooleanEv(i21) | 0;
      i42 = i26;
      i43 = HEAP32[i20 >> 2] | 0;
      break;
     }
     if ((HEAP8[i18 + 53 | 0] & 1) == 0) {
      i42 = 1;
      i43 = i38;
      break;
     }
     i42 = (HEAP32[i18 + 4 >> 2] | 0) != (HEAP32[(HEAP32[i38 >> 2] | 0) + 4 >> 2] | 0);
     i43 = i38;
    }
   } while (0);
   i20 = (HEAP32[(i43 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i20 >> 2] & 0 | 0) == 0 & (HEAP32[i20 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i22 = -4;
    i23 = 0;
    STACKTOP = i2;
    return (tempRet0 = i22, i23) | 0;
   }
   __ZN7WebCore17CanvasPathMethods3arcEfffffbRi(i14 + 32 | 0, d25, d30, d33, d36, d39, i42, i5);
   __ZN7WebCore15setDOMExceptionEPN3JSC9ExecStateEi(i1, HEAP32[i5 >> 2] | 0);
   i22 = -4;
   i23 = 0;
   STACKTOP = i2;
   return (tempRet0 = i22, i23) | 0;
  }
 } while (0);
 i5 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 i1 = (i5 | 0) == 0;
 i22 = (i1 ? -6 : -5) | 0;
 i23 = (i1 ? 0 : 0) | i5;
 STACKTOP = i2;
 return (tempRet0 = i22, i23) | 0;
}
function __ZN3JSC8JSObject17putDirectInternalILNS0_7PutModeE1EEEbRNS_2VMENS_12PropertyNameENS_7JSValueEjRNS_15PutPropertySlotEPNS_6JSCellE(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i9 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i9 >> 2];
 i9 = i4;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i4 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i4 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
 i9 = i8 + 8 | 0;
 i10 = i8 + 16 | 0;
 i11 = i8 + 24 | 0;
 i12 = i8 + 32 | 0;
 i13 = i8 + 40 | 0;
 i14 = i8 + 48 | 0;
 i15 = i8 + 56 | 0;
 i16 = i8 + 64 | 0;
 i17 = i8 + 72 | 0;
 i18 = i8 + 80 | 0;
 i19 = i8 + 88 | 0;
 i20 = i1 | 0;
 i21 = HEAP32[i20 >> 2] | 0;
 if ((HEAP32[i21 + 56 >> 2] & 196608 | 0) != 0) {
  i22 = HEAP32[i3 >> 2] | 0;
  HEAP32[i10 >> 2] = i22;
  i23 = __ZN3JSC9Structure3getERNS_2VMENS_12PropertyNameERjRPNS_6JSCellE(i21, i2, i10, i8 | 0, i9) | 0;
  if ((i23 | 0) != -1) {
   i10 = HEAP32[i9 >> 2] | 0;
   if (!((i10 | 0) == 0 | (i10 | 0) == (i7 | 0))) {
    i10 = HEAP32[i20 >> 2] | 0;
    HEAP32[i11 >> 2] = i22;
    __ZN3JSC9Structure27despecifyDictionaryFunctionERNS_2VMENS_12PropertyNameE(i10, i2, i11);
   }
   i11 = i4 | 0;
   i10 = HEAP32[i11 + 4 >> 2] | 0;
   if ((i23 | 0) < 100) {
    i24 = i1 + (i23 + 1 << 3) | 0;
   } else {
    i24 = (HEAP32[i1 + 4 >> 2] | 0) - 8 + (99 - i23 << 3) | 0;
   }
   i25 = i24 | 0;
   HEAP32[i25 >> 2] = HEAP32[i11 >> 2];
   HEAP32[i25 + 4 >> 2] = i10;
   i10 = HEAP32[i9 >> 2] | 0;
   if ((i10 | 0) != 0 & (i10 | 0) == (i7 | 0)) {
    STACKTOP = i8;
    return 1;
   }
   HEAP32[i6 >> 2] = 1;
   HEAP32[i6 + 4 >> 2] = i1;
   HEAP32[i6 + 16 >> 2] = i23;
   STACKTOP = i8;
   return 1;
  }
  i23 = i2 + 16 | 0;
  __ZN3JSC4Heap22incrementDeferralDepthEv(i23);
  i10 = i1 + 4 | 0;
  i9 = HEAP32[i10 >> 2] | 0;
  if (__ZN3JSC9Structure27putWillGrowOutOfLineStorageEv(HEAP32[i20 >> 2] | 0) | 0) {
   i25 = HEAP32[i20 >> 2] | 0;
   i11 = HEAP32[i25 + 48 >> 2] | 0;
   i24 = (i11 | 0) < 100 ? 0 : i11 - 99 | 0;
   do {
    if ((i24 | 0) == 0) {
     i26 = 0;
    } else {
     if (i24 >>> 0 < 5 >>> 0) {
      i26 = 4;
      break;
     }
     i11 = i24 - 1 | 0;
     i27 = i11 >>> 1 | i11;
     i11 = i27 >>> 2 | i27;
     i27 = i11 >>> 4 | i11;
     i11 = i27 >>> 8 | i27;
     i26 = (i11 >>> 16 | i11) + 1 | 0;
    }
   } while (0);
   i28 = __ZN3JSC8JSObject20growOutOfLineStorageERNS_2VMEjj(i1, i2, i26, __ZN3JSC9Structure36suggestedNewOutOfLineStorageCapacityEv(i25) | 0) | 0;
  } else {
   i28 = i9;
  }
  i9 = HEAP32[i20 >> 2] | 0;
  HEAP32[i12 >> 2] = i22;
  i22 = __ZN3JSC9Structure28addPropertyWithoutTransitionERNS_2VMENS_12PropertyNameEjPNS_6JSCellE(i9, i2, i12, i5, i7) | 0;
  HEAP32[i10 >> 2] = i28;
  i10 = i4 | 0;
  i12 = HEAP32[i10 + 4 >> 2] | 0;
  if ((i22 | 0) < 100) {
   i29 = i1 + (i22 + 1 << 3) | 0;
  } else {
   i29 = i28 - 8 + (99 - i22 << 3) | 0;
  }
  i28 = i29 | 0;
  HEAP32[i28 >> 2] = HEAP32[i10 >> 2];
  HEAP32[i28 + 4 >> 2] = i12;
  if ((i7 | 0) == 0) {
   HEAP32[i6 >> 2] = 2;
   HEAP32[i6 + 4 >> 2] = i1;
   HEAP32[i6 + 16 >> 2] = i22;
  }
  if ((i5 & 2 | 0) != 0) {
   i22 = (HEAP32[i20 >> 2] | 0) + 58 | 0;
   HEAP8[i22] = HEAP8[i22] | 16;
  }
  __ZN3JSC4Heap35decrementDeferralDepthAndGCIfNeededEv(i23);
  STACKTOP = i8;
  return 1;
 }
 i23 = HEAP32[i21 + 48 >> 2] | 0;
 i22 = (i23 | 0) < 100 ? 0 : i23 - 99 | 0;
 do {
  if ((i22 | 0) == 0) {
   i30 = 0;
  } else {
   if (i22 >>> 0 < 5 >>> 0) {
    i30 = 4;
    break;
   }
   i23 = i22 - 1 | 0;
   i12 = i23 >>> 1 | i23;
   i23 = i12 >>> 2 | i12;
   i12 = i23 >>> 4 | i23;
   i23 = i12 >>> 8 | i12;
   i30 = (i23 >>> 16 | i23) + 1 | 0;
  }
 } while (0);
 i22 = HEAP32[i3 >> 2] | 0;
 HEAP32[i14 >> 2] = i22;
 i3 = __ZN3JSC9Structure40addPropertyTransitionToExistingStructureEPS0_NS_12PropertyNameEjPNS_6JSCellERi(i21, i14, i5, i7, i13) | 0;
 if ((i3 | 0) != 0) {
  i14 = i2 + 16 | 0;
  __ZN3JSC4Heap22incrementDeferralDepthEv(i14);
  i21 = i1 + 4 | 0;
  i23 = HEAP32[i21 >> 2] | 0;
  i12 = HEAP32[i3 + 48 >> 2] | 0;
  i28 = (i12 | 0) < 100 ? 0 : i12 - 99 | 0;
  i12 = (i28 | 0) == 0;
  do {
   if (i12) {
    i31 = 0;
   } else {
    if (i28 >>> 0 < 5 >>> 0) {
     i31 = 4;
     break;
    }
    i10 = i28 - 1 | 0;
    i29 = i10 >>> 1 | i10;
    i10 = i29 >>> 2 | i29;
    i29 = i10 >>> 4 | i10;
    i10 = i29 >>> 8 | i29;
    i31 = (i10 >>> 16 | i10) + 1 | 0;
   }
  } while (0);
  if ((i30 | 0) == (i31 | 0)) {
   i32 = i23;
  } else {
   do {
    if (i12) {
     i33 = 0;
    } else {
     if (i28 >>> 0 < 5 >>> 0) {
      i33 = 4;
      break;
     }
     i23 = i28 - 1 | 0;
     i31 = i23 >>> 1 | i23;
     i23 = i31 >>> 2 | i31;
     i31 = i23 >>> 4 | i23;
     i23 = i31 >>> 8 | i31;
     i33 = (i23 >>> 16 | i23) + 1 | 0;
    }
   } while (0);
   i32 = __ZN3JSC8JSObject20growOutOfLineStorageERNS_2VMEjj(i1, i2, i30, i33) | 0;
  }
  HEAP32[i21 >> 2] = i32;
  HEAP32[i20 >> 2] = i3;
  i3 = HEAP32[i13 >> 2] | 0;
  i21 = i4 | 0;
  i33 = HEAP32[i21 + 4 >> 2] | 0;
  if ((i3 | 0) < 100) {
   i34 = i1 + (i3 + 1 << 3) | 0;
  } else {
   i34 = i32 - 8 + (99 - i3 << 3) | 0;
  }
  i32 = i34 | 0;
  HEAP32[i32 >> 2] = HEAP32[i21 >> 2];
  HEAP32[i32 + 4 >> 2] = i33;
  if ((i7 | 0) == 0) {
   HEAP32[i6 >> 2] = 2;
   HEAP32[i6 + 4 >> 2] = i1;
   HEAP32[i6 + 16 >> 2] = i3;
  }
  __ZN3JSC4Heap35decrementDeferralDepthAndGCIfNeededEv(i14);
  STACKTOP = i8;
  return 1;
 }
 i14 = HEAP32[i20 >> 2] | 0;
 HEAP32[i17 >> 2] = i22;
 i3 = __ZN3JSC9Structure3getERNS_2VMENS_12PropertyNameERjRPNS_6JSCellE(i14, i2, i17, i15, i16) | 0;
 HEAP32[i13 >> 2] = i3;
 if ((i3 | 0) == -1) {
  i15 = HEAP32[i20 >> 2] | 0;
  HEAP32[i19 >> 2] = i22;
  i17 = __ZN3JSC9Structure21addPropertyTransitionERNS_2VMEPS0_NS_12PropertyNameEjPNS_6JSCellERiNS_15PutPropertySlot7ContextE(i2, i15, i19, i5, i7, i13, HEAPU8[i6 + 21 | 0] | 0) | 0;
  i19 = HEAP32[(HEAP32[i20 >> 2] | 0) + 48 >> 2] | 0;
  i15 = (i19 | 0) < 100 ? 0 : i19 - 99 | 0;
  do {
   if ((i15 | 0) == 0) {
    i35 = 0;
   } else {
    if (i15 >>> 0 < 5 >>> 0) {
     i35 = 4;
     break;
    }
    i19 = i15 - 1 | 0;
    i14 = i19 >>> 1 | i19;
    i19 = i14 >>> 2 | i14;
    i14 = i19 >>> 4 | i19;
    i19 = i14 >>> 8 | i14;
    i35 = (i19 >>> 16 | i19) + 1 | 0;
   }
  } while (0);
  __ZN3JSC8JSObject43setStructureAndReallocateStorageIfNecessaryERNS_2VMEjPNS_9StructureE(i1, i2, i35, i17);
  i35 = HEAP32[i13 >> 2] | 0;
  i15 = i4 | 0;
  i19 = HEAP32[i15 + 4 >> 2] | 0;
  if ((i35 | 0) < 100) {
   i36 = i1 + (i35 + 1 << 3) | 0;
  } else {
   i36 = (HEAP32[i1 + 4 >> 2] | 0) - 8 + (99 - i35 << 3) | 0;
  }
  i14 = i36 | 0;
  HEAP32[i14 >> 2] = HEAP32[i15 >> 2];
  HEAP32[i14 + 4 >> 2] = i19;
  if ((i7 | 0) == 0) {
   HEAP32[i6 >> 2] = 2;
   HEAP32[i6 + 4 >> 2] = i1;
   HEAP32[i6 + 16 >> 2] = i35;
  }
  if ((i5 & 2 | 0) == 0) {
   STACKTOP = i8;
   return 1;
  }
  i5 = i17 + 58 | 0;
  HEAP8[i5] = HEAP8[i5] | 16;
  STACKTOP = i8;
  return 1;
 }
 i5 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   i37 = i3;
  } else {
   if ((i5 | 0) != (i7 | 0)) {
    i16 = HEAP32[i20 >> 2] | 0;
    HEAP32[i18 >> 2] = i22;
    HEAP32[i20 >> 2] = __ZN3JSC9Structure27despecifyFunctionTransitionERNS_2VMEPS0_NS_12PropertyNameE(i2, i16, i18) | 0;
    i37 = HEAP32[i13 >> 2] | 0;
    break;
   }
   i16 = i4 | 0;
   i17 = HEAP32[i16 + 4 >> 2] | 0;
   if ((i3 | 0) < 100) {
    i38 = i1 + (i3 + 1 << 3) | 0;
   } else {
    i38 = (HEAP32[i1 + 4 >> 2] | 0) - 8 + (99 - i3 << 3) | 0;
   }
   i35 = i38 | 0;
   HEAP32[i35 >> 2] = HEAP32[i16 >> 2];
   HEAP32[i35 + 4 >> 2] = i17;
   STACKTOP = i8;
   return 1;
  }
 } while (0);
 HEAP32[i6 >> 2] = 1;
 HEAP32[i6 + 4 >> 2] = i1;
 HEAP32[i6 + 16 >> 2] = i37;
 i6 = i4 | 0;
 i4 = HEAP32[i6 + 4 >> 2] | 0;
 if ((i37 | 0) < 100) {
  i39 = i1 + (i37 + 1 << 3) | 0;
 } else {
  i39 = (HEAP32[i1 + 4 >> 2] | 0) - 8 + (99 - i37 << 3) | 0;
 }
 i37 = i39 | 0;
 HEAP32[i37 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i37 + 4 >> 2] = i4;
 STACKTOP = i8;
 return 1;
}
function __ZN3JSC9WeakGCMapIPN3WTF10StringImplENS_8JSStringENS1_7PtrHashIS3_EENS1_10HashTraitsIS3_EEE5gcMapEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i3 + 12 | 0;
 i5 = i3 | 0;
 HEAP32[i5 >> 2] = i4;
 i6 = i3 + 4 | 0;
 HEAP32[i6 >> 2] = 4;
 i7 = i3 + 8 | 0;
 HEAP32[i7 >> 2] = 0;
 i3 = i1 + 12 | 0;
 i8 = i1 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = i1 + 4 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 i12 = i9 + (i11 << 3) | 0;
 L1 : do {
  if ((HEAP32[i3 >> 2] | 0) != 0) {
   L3 : do {
    if ((i11 | 0) == 0) {
     i13 = i9;
    } else {
     i14 = i9;
     while (1) {
      i15 = HEAP32[i14 >> 2] | 0;
      if (!((i15 | 0) == (-1 | 0) | (i15 | 0) == 0)) {
       i13 = i14;
       break L3;
      }
      i14 = i14 + 8 | 0;
      if ((i14 | 0) == (i12 | 0)) {
       break L1;
      }
     }
    }
   } while (0);
   if ((i13 | 0) == (i12 | 0)) {
    break;
   } else {
    i16 = i13;
    i17 = 0;
   }
   L8 : while (1) {
    i14 = HEAP32[i16 + 4 >> 2] | 0;
    do {
     if ((i14 | 0) == 0) {
      i18 = 11;
     } else {
      if ((HEAP32[i14 + 4 >> 2] | 0) == -6) {
       i18 = 11;
       break;
      }
      if ((HEAP32[i14 + 8 >> 2] & 3 | 0) == 0) {
       i19 = i17;
      } else {
       i18 = 11;
      }
     }
    } while (0);
    do {
     if ((i18 | 0) == 11) {
      i18 = 0;
      i14 = i16 | 0;
      if ((i17 | 0) != (HEAP32[i6 >> 2] | 0)) {
       HEAP32[(HEAP32[i5 >> 2] | 0) + (i17 << 2) >> 2] = HEAP32[i14 >> 2];
       i15 = (HEAP32[i7 >> 2] | 0) + 1 | 0;
       HEAP32[i7 >> 2] = i15;
       i19 = i15;
       break;
      }
      i15 = i17 + 1 | 0;
      i20 = HEAP32[i5 >> 2] | 0;
      do {
       if (i20 >>> 0 > i14 >>> 0) {
        i18 = 15;
       } else {
        if ((i20 + (i17 << 2) | 0) >>> 0 <= i14 >>> 0) {
         i18 = 15;
         break;
        }
        i21 = i16 - i20 >> 2;
        i22 = i15 + (i17 >>> 2) | 0;
        i23 = i22 >>> 0 > 16 >>> 0 ? i22 : 16;
        i22 = i23 >>> 0 > i15 >>> 0 ? i23 : i15;
        do {
         if (i17 >>> 0 < i22 >>> 0) {
          if (i22 >>> 0 > 4 >>> 0) {
           if (i22 >>> 0 > 1073741823 >>> 0) {
            i18 = 29;
            break L8;
           }
           i23 = __ZN3WTF18fastMallocGoodSizeEj(i22 << 2) | 0;
           HEAP32[i6 >> 2] = i23 >>> 2;
           i24 = __ZN3WTF10fastMallocEj(i23) | 0;
           HEAP32[i5 >> 2] = i24;
           i25 = i24;
          } else {
           HEAP32[i5 >> 2] = i4;
           HEAP32[i6 >> 2] = 4;
           i25 = i4;
          }
          i24 = i20;
          _memcpy(i25 | 0, i24 | 0, i17 << 2) | 0;
          if ((i4 | 0) == (i20 | 0) | (i20 | 0) == 0) {
           break;
          }
          if ((HEAP32[i5 >> 2] | 0) == (i20 | 0)) {
           HEAP32[i5 >> 2] = 0;
           HEAP32[i6 >> 2] = 0;
          }
          __ZN3WTF8fastFreeEPv(i24);
         }
        } while (0);
        i22 = HEAP32[i5 >> 2] | 0;
        i26 = i22 + (i21 << 2) | 0;
        i27 = i22;
       }
      } while (0);
      if ((i18 | 0) == 15) {
       i18 = 0;
       i22 = i15 + (i17 >>> 2) | 0;
       i24 = i22 >>> 0 > 16 >>> 0 ? i22 : 16;
       i22 = i24 >>> 0 > i15 >>> 0 ? i24 : i15;
       do {
        if (i17 >>> 0 < i22 >>> 0) {
         if (i22 >>> 0 > 4 >>> 0) {
          if (i22 >>> 0 > 1073741823 >>> 0) {
           i18 = 18;
           break L8;
          }
          i24 = __ZN3WTF18fastMallocGoodSizeEj(i22 << 2) | 0;
          HEAP32[i6 >> 2] = i24 >>> 2;
          i23 = __ZN3WTF10fastMallocEj(i24) | 0;
          HEAP32[i5 >> 2] = i23;
          i28 = i23;
         } else {
          HEAP32[i5 >> 2] = i4;
          HEAP32[i6 >> 2] = 4;
          i28 = i4;
         }
         i23 = i20;
         _memcpy(i28 | 0, i23 | 0, i17 << 2) | 0;
         if ((i4 | 0) == (i20 | 0) | (i20 | 0) == 0) {
          break;
         }
         if ((HEAP32[i5 >> 2] | 0) == (i20 | 0)) {
          HEAP32[i5 >> 2] = 0;
          HEAP32[i6 >> 2] = 0;
         }
         __ZN3WTF8fastFreeEPv(i23);
        }
       } while (0);
       i26 = i14;
       i27 = HEAP32[i5 >> 2] | 0;
      }
      HEAP32[i27 + (HEAP32[i7 >> 2] << 2) >> 2] = HEAP32[i26 >> 2];
      i20 = (HEAP32[i7 >> 2] | 0) + 1 | 0;
      HEAP32[i7 >> 2] = i20;
      i19 = i20;
     }
    } while (0);
    i20 = i16 + 8 | 0;
    if ((i20 | 0) == (i12 | 0)) {
     i18 = 6;
     break;
    } else {
     i29 = i20;
    }
    while (1) {
     i20 = HEAP32[i29 >> 2] | 0;
     if (!((i20 | 0) == (-1 | 0) | (i20 | 0) == 0)) {
      break;
     }
     i20 = i29 + 8 | 0;
     if ((i20 | 0) == (i12 | 0)) {
      i18 = 6;
      break L8;
     } else {
      i29 = i20;
     }
    }
    if ((i29 | 0) == (i12 | 0)) {
     i18 = 6;
     break;
    } else {
     i16 = i29;
     i17 = i19;
    }
   }
   if ((i18 | 0) == 18) {
    _WTFCrash();
   } else if ((i18 | 0) == 6) {
    if ((i19 | 0) == 0) {
     break;
    }
    i20 = i1 | 0;
    i22 = i1 + 16 | 0;
    i15 = i1 + 8 | 0;
    i23 = 0;
    while (1) {
     i24 = HEAP32[i8 >> 2] | 0;
     if ((i24 | 0) == 0) {
      i30 = HEAP32[i10 >> 2] | 0;
      i31 = i30 << 3 | 0;
      i32 = 0;
      i33 = i30;
     } else {
      i30 = HEAP32[i15 >> 2] | 0;
      i34 = HEAP32[(HEAP32[i5 >> 2] | 0) + (i23 << 2) >> 2] | 0;
      i35 = i34;
      i36 = i35 + ~(i35 << 15) | 0;
      i35 = (i36 >>> 10 ^ i36) * 9 & -1;
      i36 = i35 >>> 6 ^ i35;
      i35 = i36 + ~(i36 << 11) | 0;
      i36 = i35 >>> 16 ^ i35;
      i35 = i36 & i30;
      i37 = i24 + (i35 << 3) | 0;
      i38 = HEAP32[i37 >> 2] | 0;
      L62 : do {
       if ((i38 | 0) == (i34 | 0)) {
        i39 = i37;
       } else {
        i40 = (i36 >>> 23) + ~i36 | 0;
        i41 = i40 << 12 ^ i40;
        i40 = i41 >>> 7 ^ i41;
        i41 = i40 << 2 ^ i40;
        i40 = i41 >>> 20 ^ i41 | 1;
        i41 = 0;
        i42 = i35;
        i43 = i38;
        while (1) {
         if ((i43 | 0) == 0) {
          i39 = 0;
          break L62;
         }
         i44 = (i41 | 0) == 0 ? i40 : i41;
         i45 = i44 + i42 & i30;
         i46 = i24 + (i45 << 3) | 0;
         i47 = HEAP32[i46 >> 2] | 0;
         if ((i47 | 0) == (i34 | 0)) {
          i39 = i46;
          break;
         } else {
          i41 = i44;
          i42 = i45;
          i43 = i47;
         }
        }
       }
      } while (0);
      i34 = HEAP32[i10 >> 2] | 0;
      i31 = (i39 | 0) == 0 ? i24 + (i34 << 3) | 0 : i39;
      i32 = i24;
      i33 = i34;
     }
     do {
      if ((i31 | 0) != (i32 + (i33 << 3) | 0)) {
       i34 = i31 + 4 | 0;
       if ((HEAP32[i34 >> 2] | 0) != 0) {
        __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i34);
       }
       HEAP32[i31 >> 2] = -1;
       HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
       i34 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
       HEAP32[i3 >> 2] = i34;
       i30 = HEAP32[i10 >> 2] | 0;
       if (!((i34 * 6 & -1 | 0) < (i30 | 0) & (i30 | 0) > 8)) {
        break;
       }
       __ZN3WTF9HashTableIPNS_10StringImplENS_12KeyValuePairIS2_N3JSC4WeakINS4_8JSStringEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS2_EENS_7HashMapIS2_S7_SC_NS_10HashTraitsIS2_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_(i20, (i30 | 0) / 2 & -1, 0) | 0;
      }
     } while (0);
     i23 = i23 + 1 | 0;
     i48 = HEAP32[i7 >> 2] | 0;
     if (i23 >>> 0 >= i48 >>> 0) {
      break;
     }
    }
    if ((i48 | 0) == 0) {
     break;
    }
    HEAP32[i7 >> 2] = 0;
    break;
   } else if ((i18 | 0) == 29) {
    _WTFCrash();
   }
  }
 } while (0);
 i18 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) == (i18 | 0) | (i18 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 HEAP32[i5 >> 2] = 0;
 HEAP32[i6 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i18);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore56jsCanvasRenderingContext2DPrototypeFunctionBezierCurveToEPN3JSC9ExecStateE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, d24 = +0, d25 = +0, i26 = 0, d27 = +0, i28 = 0, i29 = 0, d30 = +0, d31 = +0, i32 = 0, d33 = +0, d34 = +0, i35 = 0, d36 = +0, d37 = +0, i38 = 0, d39 = +0, d40 = +0, i41 = 0, d42 = +0;
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
 i11 = i1 + 40 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 i13 = i12;
 L1 : do {
  if ((i12 & 0 | 0) == 0 & (HEAP32[i11 + 4 >> 2] & -1 | 0) == (-5 | 0)) {
   i14 = i13;
   if ((HEAP32[(i13 & -65536) + 1048 >> 2] | 0) == 2) {
    i15 = i14 + 8 | 0;
   } else {
    i15 = (HEAP32[i14 >> 2] | 0) + 32 | 0;
   }
   i14 = HEAP32[i15 >> 2] | 0;
   if ((i14 | 0) == 0) {
    break;
   } else {
    i16 = i14;
   }
   while (1) {
    if ((i16 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i16 = HEAP32[i16 + 4 >> 2] | 0;
    if ((i16 | 0) == 0) {
     break L1;
    }
   }
   if ((i13 | 0) == 0) {
    break;
   }
   i14 = HEAP32[i13 + 12 >> 2] | 0;
   i17 = i1 + 32 | 0;
   if (((HEAP32[i17 >> 2] | 0) - 1 | 0) >>> 0 < 6 >>> 0) {
    i18 = __ZN3JSC29createNotEnoughArgumentsErrorEPNS_9ExecStateE(i1) | 0;
    i19 = (i18 | 0) == 0;
    i20 = HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
    i21 = i4 | 0;
    HEAP32[i21 >> 2] = (i19 ? 0 : 0) | i18;
    HEAP32[i21 + 4 >> 2] = i19 ? -6 : -5;
    __ZN3JSC2VM14throwExceptionEPNS_9ExecStateENS_7JSValueE(i3, i20, i1, i4);
    i20 = i3 | 0;
    i22 = HEAP32[i20 + 4 >> 2] | 0;
    i23 = HEAP32[i20 >> 2] | 0;
    STACKTOP = i2;
    return (tempRet0 = i22, i23) | 0;
   }
   i20 = i1 + 48 | 0;
   i19 = HEAP32[i20 >> 2] | 0;
   i21 = HEAP32[i20 + 4 >> 2] | 0;
   d24 = +HEAPF64[i20 >> 3];
   i20 = i5 | 0;
   HEAP32[i20 >> 2] = i19;
   HEAP32[i20 + 4 >> 2] = i21;
   i20 = i21;
   do {
    if ((i20 | 0) == -1) {
     d25 = +(i19 | 0);
    } else {
     if (i20 >>> 0 < 4294967289 >>> 0) {
      d25 = d24;
      break;
     }
     d25 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i5, i1);
    }
   } while (0);
   d24 = d25;
   i20 = i1 + 16 | 0;
   i19 = HEAP32[i20 >> 2] | 0;
   i21 = (HEAP32[(i19 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i21 >> 2] & 0 | 0) == 0 & (HEAP32[i21 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i22 = -4;
    i23 = 0;
    STACKTOP = i2;
    return (tempRet0 = i22, i23) | 0;
   }
   do {
    if (((HEAP32[i17 >> 2] | 0) - 1 | 0) >>> 0 > 1 >>> 0) {
     i21 = i1 + 56 | 0;
     i18 = HEAP32[i21 >> 2] | 0;
     i26 = HEAP32[i21 + 4 >> 2] | 0;
     i21 = i6 | 0;
     HEAP32[i21 >> 2] = i18;
     HEAP32[i21 + 4 >> 2] = i26;
     i21 = i26;
     if ((i21 | 0) == -1) {
      d27 = +(i18 | 0);
      i28 = i19;
      break;
     }
     if (i21 >>> 0 >= 4294967289 >>> 0) {
      i29 = 23;
      break;
     }
     d27 = +HEAPF64[i6 >> 3];
     i28 = i19;
    } else {
     HEAP32[i6 + 4 >> 2] = -4;
     HEAP32[i6 >> 2] = 0;
     i29 = 23;
    }
   } while (0);
   if ((i29 | 0) == 23) {
    d30 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i6, i1);
    d27 = d30;
    i28 = HEAP32[i20 >> 2] | 0;
   }
   d30 = d27;
   i19 = (HEAP32[(i28 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i19 >> 2] & 0 | 0) == 0 & (HEAP32[i19 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i22 = -4;
    i23 = 0;
    STACKTOP = i2;
    return (tempRet0 = i22, i23) | 0;
   }
   do {
    if (((HEAP32[i17 >> 2] | 0) - 1 | 0) >>> 0 > 2 >>> 0) {
     i19 = i1 + 64 | 0;
     i21 = HEAP32[i19 >> 2] | 0;
     i18 = HEAP32[i19 + 4 >> 2] | 0;
     i19 = i7 | 0;
     HEAP32[i19 >> 2] = i21;
     HEAP32[i19 + 4 >> 2] = i18;
     i19 = i18;
     if ((i19 | 0) == -1) {
      d31 = +(i21 | 0);
      i32 = i28;
      break;
     }
     if (i19 >>> 0 >= 4294967289 >>> 0) {
      i29 = 30;
      break;
     }
     d31 = +HEAPF64[i7 >> 3];
     i32 = i28;
    } else {
     HEAP32[i7 + 4 >> 2] = -4;
     HEAP32[i7 >> 2] = 0;
     i29 = 30;
    }
   } while (0);
   if ((i29 | 0) == 30) {
    d33 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i7, i1);
    d31 = d33;
    i32 = HEAP32[i20 >> 2] | 0;
   }
   d33 = d31;
   i19 = (HEAP32[(i32 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i19 >> 2] & 0 | 0) == 0 & (HEAP32[i19 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i22 = -4;
    i23 = 0;
    STACKTOP = i2;
    return (tempRet0 = i22, i23) | 0;
   }
   do {
    if (((HEAP32[i17 >> 2] | 0) - 1 | 0) >>> 0 > 3 >>> 0) {
     i19 = i1 + 72 | 0;
     i21 = HEAP32[i19 >> 2] | 0;
     i18 = HEAP32[i19 + 4 >> 2] | 0;
     i19 = i8 | 0;
     HEAP32[i19 >> 2] = i21;
     HEAP32[i19 + 4 >> 2] = i18;
     i19 = i18;
     if ((i19 | 0) == -1) {
      d34 = +(i21 | 0);
      i35 = i32;
      break;
     }
     if (i19 >>> 0 >= 4294967289 >>> 0) {
      i29 = 37;
      break;
     }
     d34 = +HEAPF64[i8 >> 3];
     i35 = i32;
    } else {
     HEAP32[i8 + 4 >> 2] = -4;
     HEAP32[i8 >> 2] = 0;
     i29 = 37;
    }
   } while (0);
   if ((i29 | 0) == 37) {
    d36 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i8, i1);
    d34 = d36;
    i35 = HEAP32[i20 >> 2] | 0;
   }
   d36 = d34;
   i19 = (HEAP32[(i35 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i19 >> 2] & 0 | 0) == 0 & (HEAP32[i19 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i22 = -4;
    i23 = 0;
    STACKTOP = i2;
    return (tempRet0 = i22, i23) | 0;
   }
   do {
    if (((HEAP32[i17 >> 2] | 0) - 1 | 0) >>> 0 > 4 >>> 0) {
     i19 = i1 + 80 | 0;
     i21 = HEAP32[i19 >> 2] | 0;
     i18 = HEAP32[i19 + 4 >> 2] | 0;
     i19 = i9 | 0;
     HEAP32[i19 >> 2] = i21;
     HEAP32[i19 + 4 >> 2] = i18;
     i19 = i18;
     if ((i19 | 0) == -1) {
      d37 = +(i21 | 0);
      i38 = i35;
      break;
     }
     if (i19 >>> 0 >= 4294967289 >>> 0) {
      i29 = 44;
      break;
     }
     d37 = +HEAPF64[i9 >> 3];
     i38 = i35;
    } else {
     HEAP32[i9 + 4 >> 2] = -4;
     HEAP32[i9 >> 2] = 0;
     i29 = 44;
    }
   } while (0);
   if ((i29 | 0) == 44) {
    d39 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i9, i1);
    d37 = d39;
    i38 = HEAP32[i20 >> 2] | 0;
   }
   d39 = d37;
   i19 = (HEAP32[(i38 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i19 >> 2] & 0 | 0) == 0 & (HEAP32[i19 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i22 = -4;
    i23 = 0;
    STACKTOP = i2;
    return (tempRet0 = i22, i23) | 0;
   }
   do {
    if (((HEAP32[i17 >> 2] | 0) - 1 | 0) >>> 0 > 5 >>> 0) {
     i19 = i1 + 88 | 0;
     i21 = HEAP32[i19 >> 2] | 0;
     i18 = HEAP32[i19 + 4 >> 2] | 0;
     i19 = i10 | 0;
     HEAP32[i19 >> 2] = i21;
     HEAP32[i19 + 4 >> 2] = i18;
     i19 = i18;
     if ((i19 | 0) == -1) {
      d40 = +(i21 | 0);
      i41 = i38;
      break;
     }
     if (i19 >>> 0 >= 4294967289 >>> 0) {
      i29 = 51;
      break;
     }
     d40 = +HEAPF64[i10 >> 3];
     i41 = i38;
    } else {
     HEAP32[i10 + 4 >> 2] = -4;
     HEAP32[i10 >> 2] = 0;
     i29 = 51;
    }
   } while (0);
   if ((i29 | 0) == 51) {
    d42 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i10, i1);
    d40 = d42;
    i41 = HEAP32[i20 >> 2] | 0;
   }
   i17 = (HEAP32[(i41 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i17 >> 2] & 0 | 0) == 0 & (HEAP32[i17 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i22 = -4;
    i23 = 0;
    STACKTOP = i2;
    return (tempRet0 = i22, i23) | 0;
   }
   __ZN7WebCore17CanvasPathMethods13bezierCurveToEffffff(i14 + 32 | 0, d24, d30, d33, d36, d39, d40);
   i22 = -4;
   i23 = 0;
   STACKTOP = i2;
   return (tempRet0 = i22, i23) | 0;
  }
 } while (0);
 i41 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 i1 = (i41 | 0) == 0;
 i22 = (i1 ? -6 : -5) | 0;
 i23 = (i1 ? 0 : 0) | i41;
 STACKTOP = i2;
 return (tempRet0 = i22, i23) | 0;
}
function __ZN7WebCore55jsCanvasRenderingContext2DPrototypeFunctionSetTransformEPN3JSC9ExecStateE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, d24 = +0, d25 = +0, i26 = 0, d27 = +0, i28 = 0, i29 = 0, d30 = +0, d31 = +0, i32 = 0, d33 = +0, d34 = +0, i35 = 0, d36 = +0, d37 = +0, i38 = 0, d39 = +0, d40 = +0, i41 = 0, d42 = +0;
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
 i11 = i1 + 40 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 i13 = i12;
 L1 : do {
  if ((i12 & 0 | 0) == 0 & (HEAP32[i11 + 4 >> 2] & -1 | 0) == (-5 | 0)) {
   i14 = i13;
   if ((HEAP32[(i13 & -65536) + 1048 >> 2] | 0) == 2) {
    i15 = i14 + 8 | 0;
   } else {
    i15 = (HEAP32[i14 >> 2] | 0) + 32 | 0;
   }
   i14 = HEAP32[i15 >> 2] | 0;
   if ((i14 | 0) == 0) {
    break;
   } else {
    i16 = i14;
   }
   while (1) {
    if ((i16 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i16 = HEAP32[i16 + 4 >> 2] | 0;
    if ((i16 | 0) == 0) {
     break L1;
    }
   }
   if ((i13 | 0) == 0) {
    break;
   }
   i14 = HEAP32[i13 + 12 >> 2] | 0;
   i17 = i1 + 32 | 0;
   if (((HEAP32[i17 >> 2] | 0) - 1 | 0) >>> 0 < 6 >>> 0) {
    i18 = __ZN3JSC29createNotEnoughArgumentsErrorEPNS_9ExecStateE(i1) | 0;
    i19 = (i18 | 0) == 0;
    i20 = HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
    i21 = i4 | 0;
    HEAP32[i21 >> 2] = (i19 ? 0 : 0) | i18;
    HEAP32[i21 + 4 >> 2] = i19 ? -6 : -5;
    __ZN3JSC2VM14throwExceptionEPNS_9ExecStateENS_7JSValueE(i3, i20, i1, i4);
    i20 = i3 | 0;
    i22 = HEAP32[i20 + 4 >> 2] | 0;
    i23 = HEAP32[i20 >> 2] | 0;
    STACKTOP = i2;
    return (tempRet0 = i22, i23) | 0;
   }
   i20 = i1 + 48 | 0;
   i19 = HEAP32[i20 >> 2] | 0;
   i21 = HEAP32[i20 + 4 >> 2] | 0;
   d24 = +HEAPF64[i20 >> 3];
   i20 = i5 | 0;
   HEAP32[i20 >> 2] = i19;
   HEAP32[i20 + 4 >> 2] = i21;
   i20 = i21;
   do {
    if ((i20 | 0) == -1) {
     d25 = +(i19 | 0);
    } else {
     if (i20 >>> 0 < 4294967289 >>> 0) {
      d25 = d24;
      break;
     }
     d25 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i5, i1);
    }
   } while (0);
   d24 = d25;
   i20 = i1 + 16 | 0;
   i19 = HEAP32[i20 >> 2] | 0;
   i21 = (HEAP32[(i19 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i21 >> 2] & 0 | 0) == 0 & (HEAP32[i21 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i22 = -4;
    i23 = 0;
    STACKTOP = i2;
    return (tempRet0 = i22, i23) | 0;
   }
   do {
    if (((HEAP32[i17 >> 2] | 0) - 1 | 0) >>> 0 > 1 >>> 0) {
     i21 = i1 + 56 | 0;
     i18 = HEAP32[i21 >> 2] | 0;
     i26 = HEAP32[i21 + 4 >> 2] | 0;
     i21 = i6 | 0;
     HEAP32[i21 >> 2] = i18;
     HEAP32[i21 + 4 >> 2] = i26;
     i21 = i26;
     if ((i21 | 0) == -1) {
      d27 = +(i18 | 0);
      i28 = i19;
      break;
     }
     if (i21 >>> 0 >= 4294967289 >>> 0) {
      i29 = 23;
      break;
     }
     d27 = +HEAPF64[i6 >> 3];
     i28 = i19;
    } else {
     HEAP32[i6 + 4 >> 2] = -4;
     HEAP32[i6 >> 2] = 0;
     i29 = 23;
    }
   } while (0);
   if ((i29 | 0) == 23) {
    d30 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i6, i1);
    d27 = d30;
    i28 = HEAP32[i20 >> 2] | 0;
   }
   d30 = d27;
   i19 = (HEAP32[(i28 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i19 >> 2] & 0 | 0) == 0 & (HEAP32[i19 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i22 = -4;
    i23 = 0;
    STACKTOP = i2;
    return (tempRet0 = i22, i23) | 0;
   }
   do {
    if (((HEAP32[i17 >> 2] | 0) - 1 | 0) >>> 0 > 2 >>> 0) {
     i19 = i1 + 64 | 0;
     i21 = HEAP32[i19 >> 2] | 0;
     i18 = HEAP32[i19 + 4 >> 2] | 0;
     i19 = i7 | 0;
     HEAP32[i19 >> 2] = i21;
     HEAP32[i19 + 4 >> 2] = i18;
     i19 = i18;
     if ((i19 | 0) == -1) {
      d31 = +(i21 | 0);
      i32 = i28;
      break;
     }
     if (i19 >>> 0 >= 4294967289 >>> 0) {
      i29 = 30;
      break;
     }
     d31 = +HEAPF64[i7 >> 3];
     i32 = i28;
    } else {
     HEAP32[i7 + 4 >> 2] = -4;
     HEAP32[i7 >> 2] = 0;
     i29 = 30;
    }
   } while (0);
   if ((i29 | 0) == 30) {
    d33 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i7, i1);
    d31 = d33;
    i32 = HEAP32[i20 >> 2] | 0;
   }
   d33 = d31;
   i19 = (HEAP32[(i32 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i19 >> 2] & 0 | 0) == 0 & (HEAP32[i19 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i22 = -4;
    i23 = 0;
    STACKTOP = i2;
    return (tempRet0 = i22, i23) | 0;
   }
   do {
    if (((HEAP32[i17 >> 2] | 0) - 1 | 0) >>> 0 > 3 >>> 0) {
     i19 = i1 + 72 | 0;
     i21 = HEAP32[i19 >> 2] | 0;
     i18 = HEAP32[i19 + 4 >> 2] | 0;
     i19 = i8 | 0;
     HEAP32[i19 >> 2] = i21;
     HEAP32[i19 + 4 >> 2] = i18;
     i19 = i18;
     if ((i19 | 0) == -1) {
      d34 = +(i21 | 0);
      i35 = i32;
      break;
     }
     if (i19 >>> 0 >= 4294967289 >>> 0) {
      i29 = 37;
      break;
     }
     d34 = +HEAPF64[i8 >> 3];
     i35 = i32;
    } else {
     HEAP32[i8 + 4 >> 2] = -4;
     HEAP32[i8 >> 2] = 0;
     i29 = 37;
    }
   } while (0);
   if ((i29 | 0) == 37) {
    d36 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i8, i1);
    d34 = d36;
    i35 = HEAP32[i20 >> 2] | 0;
   }
   d36 = d34;
   i19 = (HEAP32[(i35 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i19 >> 2] & 0 | 0) == 0 & (HEAP32[i19 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i22 = -4;
    i23 = 0;
    STACKTOP = i2;
    return (tempRet0 = i22, i23) | 0;
   }
   do {
    if (((HEAP32[i17 >> 2] | 0) - 1 | 0) >>> 0 > 4 >>> 0) {
     i19 = i1 + 80 | 0;
     i21 = HEAP32[i19 >> 2] | 0;
     i18 = HEAP32[i19 + 4 >> 2] | 0;
     i19 = i9 | 0;
     HEAP32[i19 >> 2] = i21;
     HEAP32[i19 + 4 >> 2] = i18;
     i19 = i18;
     if ((i19 | 0) == -1) {
      d37 = +(i21 | 0);
      i38 = i35;
      break;
     }
     if (i19 >>> 0 >= 4294967289 >>> 0) {
      i29 = 44;
      break;
     }
     d37 = +HEAPF64[i9 >> 3];
     i38 = i35;
    } else {
     HEAP32[i9 + 4 >> 2] = -4;
     HEAP32[i9 >> 2] = 0;
     i29 = 44;
    }
   } while (0);
   if ((i29 | 0) == 44) {
    d39 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i9, i1);
    d37 = d39;
    i38 = HEAP32[i20 >> 2] | 0;
   }
   d39 = d37;
   i19 = (HEAP32[(i38 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i19 >> 2] & 0 | 0) == 0 & (HEAP32[i19 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i22 = -4;
    i23 = 0;
    STACKTOP = i2;
    return (tempRet0 = i22, i23) | 0;
   }
   do {
    if (((HEAP32[i17 >> 2] | 0) - 1 | 0) >>> 0 > 5 >>> 0) {
     i19 = i1 + 88 | 0;
     i21 = HEAP32[i19 >> 2] | 0;
     i18 = HEAP32[i19 + 4 >> 2] | 0;
     i19 = i10 | 0;
     HEAP32[i19 >> 2] = i21;
     HEAP32[i19 + 4 >> 2] = i18;
     i19 = i18;
     if ((i19 | 0) == -1) {
      d40 = +(i21 | 0);
      i41 = i38;
      break;
     }
     if (i19 >>> 0 >= 4294967289 >>> 0) {
      i29 = 51;
      break;
     }
     d40 = +HEAPF64[i10 >> 3];
     i41 = i38;
    } else {
     HEAP32[i10 + 4 >> 2] = -4;
     HEAP32[i10 >> 2] = 0;
     i29 = 51;
    }
   } while (0);
   if ((i29 | 0) == 51) {
    d42 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i10, i1);
    d40 = d42;
    i41 = HEAP32[i20 >> 2] | 0;
   }
   i17 = (HEAP32[(i41 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i17 >> 2] & 0 | 0) == 0 & (HEAP32[i17 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i22 = -4;
    i23 = 0;
    STACKTOP = i2;
    return (tempRet0 = i22, i23) | 0;
   }
   __ZN7WebCore24CanvasRenderingContext2D12setTransformEffffff(i14, d24, d30, d33, d36, d39, d40);
   i22 = -4;
   i23 = 0;
   STACKTOP = i2;
   return (tempRet0 = i22, i23) | 0;
  }
 } while (0);
 i41 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 i1 = (i41 | 0) == 0;
 i22 = (i1 ? -6 : -5) | 0;
 i23 = (i1 ? 0 : 0) | i41;
 STACKTOP = i2;
 return (tempRet0 = i22, i23) | 0;
}
function __ZN7WebCore52jsCanvasRenderingContext2DPrototypeFunctionTransformEPN3JSC9ExecStateE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, d24 = +0, d25 = +0, i26 = 0, d27 = +0, i28 = 0, i29 = 0, d30 = +0, d31 = +0, i32 = 0, d33 = +0, d34 = +0, i35 = 0, d36 = +0, d37 = +0, i38 = 0, d39 = +0, d40 = +0, i41 = 0, d42 = +0;
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
 i11 = i1 + 40 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 i13 = i12;
 L1 : do {
  if ((i12 & 0 | 0) == 0 & (HEAP32[i11 + 4 >> 2] & -1 | 0) == (-5 | 0)) {
   i14 = i13;
   if ((HEAP32[(i13 & -65536) + 1048 >> 2] | 0) == 2) {
    i15 = i14 + 8 | 0;
   } else {
    i15 = (HEAP32[i14 >> 2] | 0) + 32 | 0;
   }
   i14 = HEAP32[i15 >> 2] | 0;
   if ((i14 | 0) == 0) {
    break;
   } else {
    i16 = i14;
   }
   while (1) {
    if ((i16 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i16 = HEAP32[i16 + 4 >> 2] | 0;
    if ((i16 | 0) == 0) {
     break L1;
    }
   }
   if ((i13 | 0) == 0) {
    break;
   }
   i14 = HEAP32[i13 + 12 >> 2] | 0;
   i17 = i1 + 32 | 0;
   if (((HEAP32[i17 >> 2] | 0) - 1 | 0) >>> 0 < 6 >>> 0) {
    i18 = __ZN3JSC29createNotEnoughArgumentsErrorEPNS_9ExecStateE(i1) | 0;
    i19 = (i18 | 0) == 0;
    i20 = HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
    i21 = i4 | 0;
    HEAP32[i21 >> 2] = (i19 ? 0 : 0) | i18;
    HEAP32[i21 + 4 >> 2] = i19 ? -6 : -5;
    __ZN3JSC2VM14throwExceptionEPNS_9ExecStateENS_7JSValueE(i3, i20, i1, i4);
    i20 = i3 | 0;
    i22 = HEAP32[i20 + 4 >> 2] | 0;
    i23 = HEAP32[i20 >> 2] | 0;
    STACKTOP = i2;
    return (tempRet0 = i22, i23) | 0;
   }
   i20 = i1 + 48 | 0;
   i19 = HEAP32[i20 >> 2] | 0;
   i21 = HEAP32[i20 + 4 >> 2] | 0;
   d24 = +HEAPF64[i20 >> 3];
   i20 = i5 | 0;
   HEAP32[i20 >> 2] = i19;
   HEAP32[i20 + 4 >> 2] = i21;
   i20 = i21;
   do {
    if ((i20 | 0) == -1) {
     d25 = +(i19 | 0);
    } else {
     if (i20 >>> 0 < 4294967289 >>> 0) {
      d25 = d24;
      break;
     }
     d25 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i5, i1);
    }
   } while (0);
   d24 = d25;
   i20 = i1 + 16 | 0;
   i19 = HEAP32[i20 >> 2] | 0;
   i21 = (HEAP32[(i19 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i21 >> 2] & 0 | 0) == 0 & (HEAP32[i21 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i22 = -4;
    i23 = 0;
    STACKTOP = i2;
    return (tempRet0 = i22, i23) | 0;
   }
   do {
    if (((HEAP32[i17 >> 2] | 0) - 1 | 0) >>> 0 > 1 >>> 0) {
     i21 = i1 + 56 | 0;
     i18 = HEAP32[i21 >> 2] | 0;
     i26 = HEAP32[i21 + 4 >> 2] | 0;
     i21 = i6 | 0;
     HEAP32[i21 >> 2] = i18;
     HEAP32[i21 + 4 >> 2] = i26;
     i21 = i26;
     if ((i21 | 0) == -1) {
      d27 = +(i18 | 0);
      i28 = i19;
      break;
     }
     if (i21 >>> 0 >= 4294967289 >>> 0) {
      i29 = 23;
      break;
     }
     d27 = +HEAPF64[i6 >> 3];
     i28 = i19;
    } else {
     HEAP32[i6 + 4 >> 2] = -4;
     HEAP32[i6 >> 2] = 0;
     i29 = 23;
    }
   } while (0);
   if ((i29 | 0) == 23) {
    d30 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i6, i1);
    d27 = d30;
    i28 = HEAP32[i20 >> 2] | 0;
   }
   d30 = d27;
   i19 = (HEAP32[(i28 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i19 >> 2] & 0 | 0) == 0 & (HEAP32[i19 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i22 = -4;
    i23 = 0;
    STACKTOP = i2;
    return (tempRet0 = i22, i23) | 0;
   }
   do {
    if (((HEAP32[i17 >> 2] | 0) - 1 | 0) >>> 0 > 2 >>> 0) {
     i19 = i1 + 64 | 0;
     i21 = HEAP32[i19 >> 2] | 0;
     i18 = HEAP32[i19 + 4 >> 2] | 0;
     i19 = i7 | 0;
     HEAP32[i19 >> 2] = i21;
     HEAP32[i19 + 4 >> 2] = i18;
     i19 = i18;
     if ((i19 | 0) == -1) {
      d31 = +(i21 | 0);
      i32 = i28;
      break;
     }
     if (i19 >>> 0 >= 4294967289 >>> 0) {
      i29 = 30;
      break;
     }
     d31 = +HEAPF64[i7 >> 3];
     i32 = i28;
    } else {
     HEAP32[i7 + 4 >> 2] = -4;
     HEAP32[i7 >> 2] = 0;
     i29 = 30;
    }
   } while (0);
   if ((i29 | 0) == 30) {
    d33 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i7, i1);
    d31 = d33;
    i32 = HEAP32[i20 >> 2] | 0;
   }
   d33 = d31;
   i19 = (HEAP32[(i32 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i19 >> 2] & 0 | 0) == 0 & (HEAP32[i19 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i22 = -4;
    i23 = 0;
    STACKTOP = i2;
    return (tempRet0 = i22, i23) | 0;
   }
   do {
    if (((HEAP32[i17 >> 2] | 0) - 1 | 0) >>> 0 > 3 >>> 0) {
     i19 = i1 + 72 | 0;
     i21 = HEAP32[i19 >> 2] | 0;
     i18 = HEAP32[i19 + 4 >> 2] | 0;
     i19 = i8 | 0;
     HEAP32[i19 >> 2] = i21;
     HEAP32[i19 + 4 >> 2] = i18;
     i19 = i18;
     if ((i19 | 0) == -1) {
      d34 = +(i21 | 0);
      i35 = i32;
      break;
     }
     if (i19 >>> 0 >= 4294967289 >>> 0) {
      i29 = 37;
      break;
     }
     d34 = +HEAPF64[i8 >> 3];
     i35 = i32;
    } else {
     HEAP32[i8 + 4 >> 2] = -4;
     HEAP32[i8 >> 2] = 0;
     i29 = 37;
    }
   } while (0);
   if ((i29 | 0) == 37) {
    d36 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i8, i1);
    d34 = d36;
    i35 = HEAP32[i20 >> 2] | 0;
   }
   d36 = d34;
   i19 = (HEAP32[(i35 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i19 >> 2] & 0 | 0) == 0 & (HEAP32[i19 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i22 = -4;
    i23 = 0;
    STACKTOP = i2;
    return (tempRet0 = i22, i23) | 0;
   }
   do {
    if (((HEAP32[i17 >> 2] | 0) - 1 | 0) >>> 0 > 4 >>> 0) {
     i19 = i1 + 80 | 0;
     i21 = HEAP32[i19 >> 2] | 0;
     i18 = HEAP32[i19 + 4 >> 2] | 0;
     i19 = i9 | 0;
     HEAP32[i19 >> 2] = i21;
     HEAP32[i19 + 4 >> 2] = i18;
     i19 = i18;
     if ((i19 | 0) == -1) {
      d37 = +(i21 | 0);
      i38 = i35;
      break;
     }
     if (i19 >>> 0 >= 4294967289 >>> 0) {
      i29 = 44;
      break;
     }
     d37 = +HEAPF64[i9 >> 3];
     i38 = i35;
    } else {
     HEAP32[i9 + 4 >> 2] = -4;
     HEAP32[i9 >> 2] = 0;
     i29 = 44;
    }
   } while (0);
   if ((i29 | 0) == 44) {
    d39 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i9, i1);
    d37 = d39;
    i38 = HEAP32[i20 >> 2] | 0;
   }
   d39 = d37;
   i19 = (HEAP32[(i38 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i19 >> 2] & 0 | 0) == 0 & (HEAP32[i19 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i22 = -4;
    i23 = 0;
    STACKTOP = i2;
    return (tempRet0 = i22, i23) | 0;
   }
   do {
    if (((HEAP32[i17 >> 2] | 0) - 1 | 0) >>> 0 > 5 >>> 0) {
     i19 = i1 + 88 | 0;
     i21 = HEAP32[i19 >> 2] | 0;
     i18 = HEAP32[i19 + 4 >> 2] | 0;
     i19 = i10 | 0;
     HEAP32[i19 >> 2] = i21;
     HEAP32[i19 + 4 >> 2] = i18;
     i19 = i18;
     if ((i19 | 0) == -1) {
      d40 = +(i21 | 0);
      i41 = i38;
      break;
     }
     if (i19 >>> 0 >= 4294967289 >>> 0) {
      i29 = 51;
      break;
     }
     d40 = +HEAPF64[i10 >> 3];
     i41 = i38;
    } else {
     HEAP32[i10 + 4 >> 2] = -4;
     HEAP32[i10 >> 2] = 0;
     i29 = 51;
    }
   } while (0);
   if ((i29 | 0) == 51) {
    d42 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i10, i1);
    d40 = d42;
    i41 = HEAP32[i20 >> 2] | 0;
   }
   i17 = (HEAP32[(i41 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i17 >> 2] & 0 | 0) == 0 & (HEAP32[i17 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i22 = -4;
    i23 = 0;
    STACKTOP = i2;
    return (tempRet0 = i22, i23) | 0;
   }
   __ZN7WebCore24CanvasRenderingContext2D9transformEffffff(i14, d24, d30, d33, d36, d39, d40);
   i22 = -4;
   i23 = 0;
   STACKTOP = i2;
   return (tempRet0 = i22, i23) | 0;
  }
 } while (0);
 i41 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 i1 = (i41 | 0) == 0;
 i22 = (i1 ? -6 : -5) | 0;
 i23 = (i1 ? 0 : 0) | i41;
 STACKTOP = i2;
 return (tempRet0 = i22, i23) | 0;
}
function __ZN7WebCore63jsCanvasRenderingContext2DPrototypeFunctionWebkitGetImageDataHDEPN3JSC9ExecStateE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, d26 = +0, d27 = +0, i28 = 0, d29 = +0, i30 = 0, i31 = 0, d32 = +0, d33 = +0, i34 = 0, d35 = +0, d36 = +0, i37 = 0, d38 = +0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 40 | 0;
 i9 = i2 + 48 | 0;
 i10 = i2 + 56 | 0;
 i11 = i2 + 64 | 0;
 i12 = i1 + 40 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 i14 = i13;
 L1 : do {
  if ((i13 & 0 | 0) == 0 & (HEAP32[i12 + 4 >> 2] & -1 | 0) == (-5 | 0)) {
   i15 = i14;
   if ((HEAP32[(i14 & -65536) + 1048 >> 2] | 0) == 2) {
    i16 = i15 + 8 | 0;
   } else {
    i16 = (HEAP32[i15 >> 2] | 0) + 32 | 0;
   }
   i15 = HEAP32[i16 >> 2] | 0;
   if ((i15 | 0) == 0) {
    break;
   } else {
    i17 = i15;
   }
   while (1) {
    if ((i17 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i17 = HEAP32[i17 + 4 >> 2] | 0;
    if ((i17 | 0) == 0) {
     break L1;
    }
   }
   i15 = i14;
   if ((i14 | 0) == 0) {
    break;
   }
   i18 = HEAP32[i15 + 12 >> 2] | 0;
   i19 = i1 + 32 | 0;
   if (((HEAP32[i19 >> 2] | 0) - 1 | 0) >>> 0 < 4 >>> 0) {
    i20 = __ZN3JSC29createNotEnoughArgumentsErrorEPNS_9ExecStateE(i1) | 0;
    i21 = (i20 | 0) == 0;
    i22 = HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
    i23 = i4 | 0;
    HEAP32[i23 >> 2] = (i21 ? 0 : 0) | i20;
    HEAP32[i23 + 4 >> 2] = i21 ? -6 : -5;
    __ZN3JSC2VM14throwExceptionEPNS_9ExecStateENS_7JSValueE(i3, i22, i1, i4);
    i22 = i3 | 0;
    i24 = HEAP32[i22 + 4 >> 2] | 0;
    i25 = HEAP32[i22 >> 2] | 0;
    STACKTOP = i2;
    return (tempRet0 = i24, i25) | 0;
   }
   HEAP32[i5 >> 2] = 0;
   i22 = i1 + 48 | 0;
   i21 = HEAP32[i22 >> 2] | 0;
   i23 = HEAP32[i22 + 4 >> 2] | 0;
   i22 = i6 | 0;
   HEAP32[i22 >> 2] = i21;
   HEAP32[i22 + 4 >> 2] = i23;
   i22 = i23;
   do {
    if ((i22 | 0) == -1) {
     d26 = +(i21 | 0);
    } else {
     if (i22 >>> 0 < 4294967289 >>> 0) {
      d26 = +HEAPF64[i6 >> 3];
      break;
     } else {
      d26 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i6, i1);
      break;
     }
    }
   } while (0);
   d27 = d26;
   i22 = i1 + 16 | 0;
   i21 = HEAP32[i22 >> 2] | 0;
   i23 = (HEAP32[(i21 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i23 >> 2] & 0 | 0) == 0 & (HEAP32[i23 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i24 = -4;
    i25 = 0;
    STACKTOP = i2;
    return (tempRet0 = i24, i25) | 0;
   }
   do {
    if (((HEAP32[i19 >> 2] | 0) - 1 | 0) >>> 0 > 1 >>> 0) {
     i23 = i1 + 56 | 0;
     i20 = HEAP32[i23 >> 2] | 0;
     i28 = HEAP32[i23 + 4 >> 2] | 0;
     i23 = i7 | 0;
     HEAP32[i23 >> 2] = i20;
     HEAP32[i23 + 4 >> 2] = i28;
     i23 = i28;
     if ((i23 | 0) == -1) {
      d29 = +(i20 | 0);
      i30 = i21;
      break;
     }
     if (i23 >>> 0 >= 4294967289 >>> 0) {
      i31 = 23;
      break;
     }
     d29 = +HEAPF64[i7 >> 3];
     i30 = i21;
    } else {
     HEAP32[i7 + 4 >> 2] = -4;
     HEAP32[i7 >> 2] = 0;
     i31 = 23;
    }
   } while (0);
   if ((i31 | 0) == 23) {
    d32 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i7, i1);
    d29 = d32;
    i30 = HEAP32[i22 >> 2] | 0;
   }
   d32 = d29;
   i21 = (HEAP32[(i30 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i21 >> 2] & 0 | 0) == 0 & (HEAP32[i21 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i24 = -4;
    i25 = 0;
    STACKTOP = i2;
    return (tempRet0 = i24, i25) | 0;
   }
   do {
    if (((HEAP32[i19 >> 2] | 0) - 1 | 0) >>> 0 > 2 >>> 0) {
     i21 = i1 + 64 | 0;
     i23 = HEAP32[i21 >> 2] | 0;
     i20 = HEAP32[i21 + 4 >> 2] | 0;
     i21 = i8 | 0;
     HEAP32[i21 >> 2] = i23;
     HEAP32[i21 + 4 >> 2] = i20;
     i21 = i20;
     if ((i21 | 0) == -1) {
      d33 = +(i23 | 0);
      i34 = i30;
      break;
     }
     if (i21 >>> 0 >= 4294967289 >>> 0) {
      i31 = 30;
      break;
     }
     d33 = +HEAPF64[i8 >> 3];
     i34 = i30;
    } else {
     HEAP32[i8 + 4 >> 2] = -4;
     HEAP32[i8 >> 2] = 0;
     i31 = 30;
    }
   } while (0);
   if ((i31 | 0) == 30) {
    d35 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i8, i1);
    d33 = d35;
    i34 = HEAP32[i22 >> 2] | 0;
   }
   d35 = d33;
   i21 = (HEAP32[(i34 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i21 >> 2] & 0 | 0) == 0 & (HEAP32[i21 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i24 = -4;
    i25 = 0;
    STACKTOP = i2;
    return (tempRet0 = i24, i25) | 0;
   }
   do {
    if (((HEAP32[i19 >> 2] | 0) - 1 | 0) >>> 0 > 3 >>> 0) {
     i21 = i1 + 72 | 0;
     i23 = HEAP32[i21 >> 2] | 0;
     i20 = HEAP32[i21 + 4 >> 2] | 0;
     i21 = i9 | 0;
     HEAP32[i21 >> 2] = i23;
     HEAP32[i21 + 4 >> 2] = i20;
     i21 = i20;
     if ((i21 | 0) == -1) {
      d36 = +(i23 | 0);
      i37 = i34;
      break;
     }
     if (i21 >>> 0 >= 4294967289 >>> 0) {
      i31 = 37;
      break;
     }
     d36 = +HEAPF64[i9 >> 3];
     i37 = i34;
    } else {
     HEAP32[i9 + 4 >> 2] = -4;
     HEAP32[i9 >> 2] = 0;
     i31 = 37;
    }
   } while (0);
   if ((i31 | 0) == 37) {
    d38 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i9, i1);
    d36 = d38;
    i37 = HEAP32[i22 >> 2] | 0;
   }
   i19 = (HEAP32[(i37 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i19 >> 2] & 0 | 0) == 0 & (HEAP32[i19 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i24 = -4;
    i25 = 0;
    STACKTOP = i2;
    return (tempRet0 = i24, i25) | 0;
   }
   i19 = HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] | 0;
   __ZNK7WebCore24CanvasRenderingContext2D20webkitGetImageDataHDEffffRi(i11, i18, d27, d32, d35, d36, i5);
   i21 = i11 | 0;
   __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_9ImageDataE(i10, i1, i19, HEAP32[i21 >> 2] | 0);
   i19 = HEAP32[i21 >> 2] | 0;
   do {
    if ((i19 | 0) != 0) {
     i21 = i19 | 0;
     i23 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
     if ((i23 | 0) != 0) {
      HEAP32[i21 >> 2] = i23;
      break;
     }
     i23 = HEAP32[i19 + 12 >> 2] | 0;
     do {
      if ((i23 | 0) != 0) {
       i21 = i23 + 4 | 0;
       i20 = i21 | 0;
       i28 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
       if ((i28 | 0) != 0) {
        HEAP32[i20 >> 2] = i28;
        break;
       }
       i28 = i21 - 4 | 0;
       if ((i28 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i28 >> 2] | 0) + 12 >> 2] & 7](i28);
      }
     } while (0);
     __ZN3WTF8fastFreeEPv(i19);
    }
   } while (0);
   __ZN7WebCore15setDOMExceptionEPN3JSC9ExecStateEi(i1, HEAP32[i5 >> 2] | 0);
   i19 = i10 | 0;
   i24 = HEAP32[i19 + 4 >> 2] | 0;
   i25 = HEAP32[i19 >> 2] | 0;
   STACKTOP = i2;
   return (tempRet0 = i24, i25) | 0;
  }
 } while (0);
 i10 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 i1 = (i10 | 0) == 0;
 i24 = (i1 ? -6 : -5) | 0;
 i25 = (i1 ? 0 : 0) | i10;
 STACKTOP = i2;
 return (tempRet0 = i24, i25) | 0;
}
function __ZN7WebCore48jsCanvasRenderingContext2DPrototypeFunctionArcToEPN3JSC9ExecStateE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, d24 = +0, d25 = +0, i26 = 0, d27 = +0, i28 = 0, i29 = 0, d30 = +0, d31 = +0, i32 = 0, d33 = +0, d34 = +0, i35 = 0, d36 = +0, d37 = +0, i38 = 0, d39 = +0;
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
 i11 = i1 + 40 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 i13 = i12;
 L1 : do {
  if ((i12 & 0 | 0) == 0 & (HEAP32[i11 + 4 >> 2] & -1 | 0) == (-5 | 0)) {
   i14 = i13;
   if ((HEAP32[(i13 & -65536) + 1048 >> 2] | 0) == 2) {
    i15 = i14 + 8 | 0;
   } else {
    i15 = (HEAP32[i14 >> 2] | 0) + 32 | 0;
   }
   i14 = HEAP32[i15 >> 2] | 0;
   if ((i14 | 0) == 0) {
    break;
   } else {
    i16 = i14;
   }
   while (1) {
    if ((i16 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i16 = HEAP32[i16 + 4 >> 2] | 0;
    if ((i16 | 0) == 0) {
     break L1;
    }
   }
   if ((i13 | 0) == 0) {
    break;
   }
   i14 = HEAP32[i13 + 12 >> 2] | 0;
   i17 = i1 + 32 | 0;
   if (((HEAP32[i17 >> 2] | 0) - 1 | 0) >>> 0 < 5 >>> 0) {
    i18 = __ZN3JSC29createNotEnoughArgumentsErrorEPNS_9ExecStateE(i1) | 0;
    i19 = (i18 | 0) == 0;
    i20 = HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
    i21 = i4 | 0;
    HEAP32[i21 >> 2] = (i19 ? 0 : 0) | i18;
    HEAP32[i21 + 4 >> 2] = i19 ? -6 : -5;
    __ZN3JSC2VM14throwExceptionEPNS_9ExecStateENS_7JSValueE(i3, i20, i1, i4);
    i20 = i3 | 0;
    i22 = HEAP32[i20 + 4 >> 2] | 0;
    i23 = HEAP32[i20 >> 2] | 0;
    STACKTOP = i2;
    return (tempRet0 = i22, i23) | 0;
   }
   HEAP32[i5 >> 2] = 0;
   i20 = i1 + 48 | 0;
   i19 = HEAP32[i20 >> 2] | 0;
   i21 = HEAP32[i20 + 4 >> 2] | 0;
   i20 = i6 | 0;
   HEAP32[i20 >> 2] = i19;
   HEAP32[i20 + 4 >> 2] = i21;
   i20 = i21;
   do {
    if ((i20 | 0) == -1) {
     d24 = +(i19 | 0);
    } else {
     if (i20 >>> 0 < 4294967289 >>> 0) {
      d24 = +HEAPF64[i6 >> 3];
      break;
     } else {
      d24 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i6, i1);
      break;
     }
    }
   } while (0);
   d25 = d24;
   i20 = i1 + 16 | 0;
   i19 = HEAP32[i20 >> 2] | 0;
   i21 = (HEAP32[(i19 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i21 >> 2] & 0 | 0) == 0 & (HEAP32[i21 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i22 = -4;
    i23 = 0;
    STACKTOP = i2;
    return (tempRet0 = i22, i23) | 0;
   }
   do {
    if (((HEAP32[i17 >> 2] | 0) - 1 | 0) >>> 0 > 1 >>> 0) {
     i21 = i1 + 56 | 0;
     i18 = HEAP32[i21 >> 2] | 0;
     i26 = HEAP32[i21 + 4 >> 2] | 0;
     i21 = i7 | 0;
     HEAP32[i21 >> 2] = i18;
     HEAP32[i21 + 4 >> 2] = i26;
     i21 = i26;
     if ((i21 | 0) == -1) {
      d27 = +(i18 | 0);
      i28 = i19;
      break;
     }
     if (i21 >>> 0 >= 4294967289 >>> 0) {
      i29 = 23;
      break;
     }
     d27 = +HEAPF64[i7 >> 3];
     i28 = i19;
    } else {
     HEAP32[i7 + 4 >> 2] = -4;
     HEAP32[i7 >> 2] = 0;
     i29 = 23;
    }
   } while (0);
   if ((i29 | 0) == 23) {
    d30 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i7, i1);
    d27 = d30;
    i28 = HEAP32[i20 >> 2] | 0;
   }
   d30 = d27;
   i19 = (HEAP32[(i28 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i19 >> 2] & 0 | 0) == 0 & (HEAP32[i19 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i22 = -4;
    i23 = 0;
    STACKTOP = i2;
    return (tempRet0 = i22, i23) | 0;
   }
   do {
    if (((HEAP32[i17 >> 2] | 0) - 1 | 0) >>> 0 > 2 >>> 0) {
     i19 = i1 + 64 | 0;
     i21 = HEAP32[i19 >> 2] | 0;
     i18 = HEAP32[i19 + 4 >> 2] | 0;
     i19 = i8 | 0;
     HEAP32[i19 >> 2] = i21;
     HEAP32[i19 + 4 >> 2] = i18;
     i19 = i18;
     if ((i19 | 0) == -1) {
      d31 = +(i21 | 0);
      i32 = i28;
      break;
     }
     if (i19 >>> 0 >= 4294967289 >>> 0) {
      i29 = 30;
      break;
     }
     d31 = +HEAPF64[i8 >> 3];
     i32 = i28;
    } else {
     HEAP32[i8 + 4 >> 2] = -4;
     HEAP32[i8 >> 2] = 0;
     i29 = 30;
    }
   } while (0);
   if ((i29 | 0) == 30) {
    d33 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i8, i1);
    d31 = d33;
    i32 = HEAP32[i20 >> 2] | 0;
   }
   d33 = d31;
   i19 = (HEAP32[(i32 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i19 >> 2] & 0 | 0) == 0 & (HEAP32[i19 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i22 = -4;
    i23 = 0;
    STACKTOP = i2;
    return (tempRet0 = i22, i23) | 0;
   }
   do {
    if (((HEAP32[i17 >> 2] | 0) - 1 | 0) >>> 0 > 3 >>> 0) {
     i19 = i1 + 72 | 0;
     i21 = HEAP32[i19 >> 2] | 0;
     i18 = HEAP32[i19 + 4 >> 2] | 0;
     i19 = i9 | 0;
     HEAP32[i19 >> 2] = i21;
     HEAP32[i19 + 4 >> 2] = i18;
     i19 = i18;
     if ((i19 | 0) == -1) {
      d34 = +(i21 | 0);
      i35 = i32;
      break;
     }
     if (i19 >>> 0 >= 4294967289 >>> 0) {
      i29 = 37;
      break;
     }
     d34 = +HEAPF64[i9 >> 3];
     i35 = i32;
    } else {
     HEAP32[i9 + 4 >> 2] = -4;
     HEAP32[i9 >> 2] = 0;
     i29 = 37;
    }
   } while (0);
   if ((i29 | 0) == 37) {
    d36 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i9, i1);
    d34 = d36;
    i35 = HEAP32[i20 >> 2] | 0;
   }
   d36 = d34;
   i19 = (HEAP32[(i35 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i19 >> 2] & 0 | 0) == 0 & (HEAP32[i19 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i22 = -4;
    i23 = 0;
    STACKTOP = i2;
    return (tempRet0 = i22, i23) | 0;
   }
   do {
    if (((HEAP32[i17 >> 2] | 0) - 1 | 0) >>> 0 > 4 >>> 0) {
     i19 = i1 + 80 | 0;
     i21 = HEAP32[i19 >> 2] | 0;
     i18 = HEAP32[i19 + 4 >> 2] | 0;
     i19 = i10 | 0;
     HEAP32[i19 >> 2] = i21;
     HEAP32[i19 + 4 >> 2] = i18;
     i19 = i18;
     if ((i19 | 0) == -1) {
      d37 = +(i21 | 0);
      i38 = i35;
      break;
     }
     if (i19 >>> 0 >= 4294967289 >>> 0) {
      i29 = 44;
      break;
     }
     d37 = +HEAPF64[i10 >> 3];
     i38 = i35;
    } else {
     HEAP32[i10 + 4 >> 2] = -4;
     HEAP32[i10 >> 2] = 0;
     i29 = 44;
    }
   } while (0);
   if ((i29 | 0) == 44) {
    d39 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i10, i1);
    d37 = d39;
    i38 = HEAP32[i20 >> 2] | 0;
   }
   i17 = (HEAP32[(i38 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i17 >> 2] & 0 | 0) == 0 & (HEAP32[i17 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i22 = -4;
    i23 = 0;
    STACKTOP = i2;
    return (tempRet0 = i22, i23) | 0;
   }
   __ZN7WebCore17CanvasPathMethods5arcToEfffffRi(i14 + 32 | 0, d25, d30, d33, d36, d37, i5);
   __ZN7WebCore15setDOMExceptionEPN3JSC9ExecStateEi(i1, HEAP32[i5 >> 2] | 0);
   i22 = -4;
   i23 = 0;
   STACKTOP = i2;
   return (tempRet0 = i22, i23) | 0;
  }
 } while (0);
 i5 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 i1 = (i5 | 0) == 0;
 i22 = (i1 ? -6 : -5) | 0;
 i23 = (i1 ? 0 : 0) | i5;
 STACKTOP = i2;
 return (tempRet0 = i22, i23) | 0;
}
function __ZN7WebCore55jsCanvasRenderingContext2DPrototypeFunctionGetImageDataEPN3JSC9ExecStateE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, d26 = +0, d27 = +0, i28 = 0, d29 = +0, i30 = 0, i31 = 0, d32 = +0, d33 = +0, i34 = 0, d35 = +0, d36 = +0, i37 = 0, d38 = +0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 40 | 0;
 i9 = i2 + 48 | 0;
 i10 = i2 + 56 | 0;
 i11 = i2 + 64 | 0;
 i12 = i1 + 40 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 i14 = i13;
 L1 : do {
  if ((i13 & 0 | 0) == 0 & (HEAP32[i12 + 4 >> 2] & -1 | 0) == (-5 | 0)) {
   i15 = i14;
   if ((HEAP32[(i14 & -65536) + 1048 >> 2] | 0) == 2) {
    i16 = i15 + 8 | 0;
   } else {
    i16 = (HEAP32[i15 >> 2] | 0) + 32 | 0;
   }
   i15 = HEAP32[i16 >> 2] | 0;
   if ((i15 | 0) == 0) {
    break;
   } else {
    i17 = i15;
   }
   while (1) {
    if ((i17 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i17 = HEAP32[i17 + 4 >> 2] | 0;
    if ((i17 | 0) == 0) {
     break L1;
    }
   }
   i15 = i14;
   if ((i14 | 0) == 0) {
    break;
   }
   i18 = HEAP32[i15 + 12 >> 2] | 0;
   i19 = i1 + 32 | 0;
   if (((HEAP32[i19 >> 2] | 0) - 1 | 0) >>> 0 < 4 >>> 0) {
    i20 = __ZN3JSC29createNotEnoughArgumentsErrorEPNS_9ExecStateE(i1) | 0;
    i21 = (i20 | 0) == 0;
    i22 = HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
    i23 = i4 | 0;
    HEAP32[i23 >> 2] = (i21 ? 0 : 0) | i20;
    HEAP32[i23 + 4 >> 2] = i21 ? -6 : -5;
    __ZN3JSC2VM14throwExceptionEPNS_9ExecStateENS_7JSValueE(i3, i22, i1, i4);
    i22 = i3 | 0;
    i24 = HEAP32[i22 + 4 >> 2] | 0;
    i25 = HEAP32[i22 >> 2] | 0;
    STACKTOP = i2;
    return (tempRet0 = i24, i25) | 0;
   }
   HEAP32[i5 >> 2] = 0;
   i22 = i1 + 48 | 0;
   i21 = HEAP32[i22 >> 2] | 0;
   i23 = HEAP32[i22 + 4 >> 2] | 0;
   i22 = i6 | 0;
   HEAP32[i22 >> 2] = i21;
   HEAP32[i22 + 4 >> 2] = i23;
   i22 = i23;
   do {
    if ((i22 | 0) == -1) {
     d26 = +(i21 | 0);
    } else {
     if (i22 >>> 0 < 4294967289 >>> 0) {
      d26 = +HEAPF64[i6 >> 3];
      break;
     } else {
      d26 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i6, i1);
      break;
     }
    }
   } while (0);
   d27 = d26;
   i22 = i1 + 16 | 0;
   i21 = HEAP32[i22 >> 2] | 0;
   i23 = (HEAP32[(i21 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i23 >> 2] & 0 | 0) == 0 & (HEAP32[i23 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i24 = -4;
    i25 = 0;
    STACKTOP = i2;
    return (tempRet0 = i24, i25) | 0;
   }
   do {
    if (((HEAP32[i19 >> 2] | 0) - 1 | 0) >>> 0 > 1 >>> 0) {
     i23 = i1 + 56 | 0;
     i20 = HEAP32[i23 >> 2] | 0;
     i28 = HEAP32[i23 + 4 >> 2] | 0;
     i23 = i7 | 0;
     HEAP32[i23 >> 2] = i20;
     HEAP32[i23 + 4 >> 2] = i28;
     i23 = i28;
     if ((i23 | 0) == -1) {
      d29 = +(i20 | 0);
      i30 = i21;
      break;
     }
     if (i23 >>> 0 >= 4294967289 >>> 0) {
      i31 = 23;
      break;
     }
     d29 = +HEAPF64[i7 >> 3];
     i30 = i21;
    } else {
     HEAP32[i7 + 4 >> 2] = -4;
     HEAP32[i7 >> 2] = 0;
     i31 = 23;
    }
   } while (0);
   if ((i31 | 0) == 23) {
    d32 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i7, i1);
    d29 = d32;
    i30 = HEAP32[i22 >> 2] | 0;
   }
   d32 = d29;
   i21 = (HEAP32[(i30 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i21 >> 2] & 0 | 0) == 0 & (HEAP32[i21 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i24 = -4;
    i25 = 0;
    STACKTOP = i2;
    return (tempRet0 = i24, i25) | 0;
   }
   do {
    if (((HEAP32[i19 >> 2] | 0) - 1 | 0) >>> 0 > 2 >>> 0) {
     i21 = i1 + 64 | 0;
     i23 = HEAP32[i21 >> 2] | 0;
     i20 = HEAP32[i21 + 4 >> 2] | 0;
     i21 = i8 | 0;
     HEAP32[i21 >> 2] = i23;
     HEAP32[i21 + 4 >> 2] = i20;
     i21 = i20;
     if ((i21 | 0) == -1) {
      d33 = +(i23 | 0);
      i34 = i30;
      break;
     }
     if (i21 >>> 0 >= 4294967289 >>> 0) {
      i31 = 30;
      break;
     }
     d33 = +HEAPF64[i8 >> 3];
     i34 = i30;
    } else {
     HEAP32[i8 + 4 >> 2] = -4;
     HEAP32[i8 >> 2] = 0;
     i31 = 30;
    }
   } while (0);
   if ((i31 | 0) == 30) {
    d35 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i8, i1);
    d33 = d35;
    i34 = HEAP32[i22 >> 2] | 0;
   }
   d35 = d33;
   i21 = (HEAP32[(i34 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i21 >> 2] & 0 | 0) == 0 & (HEAP32[i21 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i24 = -4;
    i25 = 0;
    STACKTOP = i2;
    return (tempRet0 = i24, i25) | 0;
   }
   do {
    if (((HEAP32[i19 >> 2] | 0) - 1 | 0) >>> 0 > 3 >>> 0) {
     i21 = i1 + 72 | 0;
     i23 = HEAP32[i21 >> 2] | 0;
     i20 = HEAP32[i21 + 4 >> 2] | 0;
     i21 = i9 | 0;
     HEAP32[i21 >> 2] = i23;
     HEAP32[i21 + 4 >> 2] = i20;
     i21 = i20;
     if ((i21 | 0) == -1) {
      d36 = +(i23 | 0);
      i37 = i34;
      break;
     }
     if (i21 >>> 0 >= 4294967289 >>> 0) {
      i31 = 37;
      break;
     }
     d36 = +HEAPF64[i9 >> 3];
     i37 = i34;
    } else {
     HEAP32[i9 + 4 >> 2] = -4;
     HEAP32[i9 >> 2] = 0;
     i31 = 37;
    }
   } while (0);
   if ((i31 | 0) == 37) {
    d38 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i9, i1);
    d36 = d38;
    i37 = HEAP32[i22 >> 2] | 0;
   }
   i19 = (HEAP32[(i37 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i19 >> 2] & 0 | 0) == 0 & (HEAP32[i19 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i24 = -4;
    i25 = 0;
    STACKTOP = i2;
    return (tempRet0 = i24, i25) | 0;
   }
   i19 = HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] | 0;
   __ZNK7WebCore24CanvasRenderingContext2D12getImageDataEffffRi(i11, i18, d27, d32, d35, d36, i5);
   i21 = i11 | 0;
   __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_9ImageDataE(i10, i1, i19, HEAP32[i21 >> 2] | 0);
   i19 = HEAP32[i21 >> 2] | 0;
   do {
    if ((i19 | 0) != 0) {
     i21 = i19 | 0;
     i23 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
     if ((i23 | 0) != 0) {
      HEAP32[i21 >> 2] = i23;
      break;
     }
     i23 = HEAP32[i19 + 12 >> 2] | 0;
     do {
      if ((i23 | 0) != 0) {
       i21 = i23 + 4 | 0;
       i20 = i21 | 0;
       i28 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
       if ((i28 | 0) != 0) {
        HEAP32[i20 >> 2] = i28;
        break;
       }
       i28 = i21 - 4 | 0;
       if ((i28 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i28 >> 2] | 0) + 12 >> 2] & 7](i28);
      }
     } while (0);
     __ZN3WTF8fastFreeEPv(i19);
    }
   } while (0);
   __ZN7WebCore15setDOMExceptionEPN3JSC9ExecStateEi(i1, HEAP32[i5 >> 2] | 0);
   i19 = i10 | 0;
   i24 = HEAP32[i19 + 4 >> 2] | 0;
   i25 = HEAP32[i19 >> 2] | 0;
   STACKTOP = i2;
   return (tempRet0 = i24, i25) | 0;
  }
 } while (0);
 i10 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 i1 = (i10 | 0) == 0;
 i24 = (i1 ? -6 : -5) | 0;
 i25 = (i1 ? 0 : 0) | i10;
 STACKTOP = i2;
 return (tempRet0 = i24, i25) | 0;
}
function __ZN7WebCore56jsCanvasRenderingContext2DPrototypeFunctionIsPointInPathEPN3JSC9ExecStateE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, d23 = +0, d24 = +0, i25 = 0, d26 = +0, i27 = 0, i28 = 0, d29 = +0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 40 | 0;
 i9 = i2 + 48 | 0;
 i10 = i1 + 40 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 i12 = i11;
 L1 : do {
  if ((i11 & 0 | 0) == 0 & (HEAP32[i10 + 4 >> 2] & -1 | 0) == (-5 | 0)) {
   i13 = i12;
   if ((HEAP32[(i12 & -65536) + 1048 >> 2] | 0) == 2) {
    i14 = i13 + 8 | 0;
   } else {
    i14 = (HEAP32[i13 >> 2] | 0) + 32 | 0;
   }
   i13 = HEAP32[i14 >> 2] | 0;
   if ((i13 | 0) == 0) {
    break;
   } else {
    i15 = i13;
   }
   while (1) {
    if ((i15 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i15 = HEAP32[i15 + 4 >> 2] | 0;
    if ((i15 | 0) == 0) {
     break L1;
    }
   }
   if ((i12 | 0) == 0) {
    break;
   }
   i13 = HEAP32[i12 + 12 >> 2] | 0;
   i16 = i1 + 32 | 0;
   if (((HEAP32[i16 >> 2] | 0) - 1 | 0) >>> 0 < 2 >>> 0) {
    i17 = __ZN3JSC29createNotEnoughArgumentsErrorEPNS_9ExecStateE(i1) | 0;
    i18 = (i17 | 0) == 0;
    i19 = HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
    i20 = i4 | 0;
    HEAP32[i20 >> 2] = (i18 ? 0 : 0) | i17;
    HEAP32[i20 + 4 >> 2] = i18 ? -6 : -5;
    __ZN3JSC2VM14throwExceptionEPNS_9ExecStateENS_7JSValueE(i3, i19, i1, i4);
    i19 = i3 | 0;
    i21 = HEAP32[i19 + 4 >> 2] | 0;
    i22 = HEAP32[i19 >> 2] | 0;
    STACKTOP = i2;
    return (tempRet0 = i21, i22) | 0;
   }
   i19 = i1 + 48 | 0;
   i18 = HEAP32[i19 >> 2] | 0;
   i20 = HEAP32[i19 + 4 >> 2] | 0;
   d23 = +HEAPF64[i19 >> 3];
   i19 = i5 | 0;
   HEAP32[i19 >> 2] = i18;
   HEAP32[i19 + 4 >> 2] = i20;
   i19 = i20;
   do {
    if ((i19 | 0) == -1) {
     d24 = +(i18 | 0);
    } else {
     if (i19 >>> 0 < 4294967289 >>> 0) {
      d24 = d23;
      break;
     }
     d24 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i5, i1);
    }
   } while (0);
   d23 = d24;
   i19 = i1 + 16 | 0;
   i18 = HEAP32[i19 >> 2] | 0;
   i20 = (HEAP32[(i18 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i20 >> 2] & 0 | 0) == 0 & (HEAP32[i20 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i21 = -4;
    i22 = 0;
    STACKTOP = i2;
    return (tempRet0 = i21, i22) | 0;
   }
   do {
    if (((HEAP32[i16 >> 2] | 0) - 1 | 0) >>> 0 > 1 >>> 0) {
     i20 = i1 + 56 | 0;
     i17 = HEAP32[i20 >> 2] | 0;
     i25 = HEAP32[i20 + 4 >> 2] | 0;
     i20 = i6 | 0;
     HEAP32[i20 >> 2] = i17;
     HEAP32[i20 + 4 >> 2] = i25;
     i20 = i25;
     if ((i20 | 0) == -1) {
      d26 = +(i17 | 0);
      i27 = i18;
      break;
     }
     if (i20 >>> 0 >= 4294967289 >>> 0) {
      i28 = 23;
      break;
     }
     d26 = +HEAPF64[i6 >> 3];
     i27 = i18;
    } else {
     HEAP32[i6 + 4 >> 2] = -4;
     HEAP32[i6 >> 2] = 0;
     i28 = 23;
    }
   } while (0);
   if ((i28 | 0) == 23) {
    d29 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i6, i1);
    d26 = d29;
    i27 = HEAP32[i19 >> 2] | 0;
   }
   d29 = d26;
   i18 = (HEAP32[(i27 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i18 >> 2] & 0 | 0) == 0 & (HEAP32[i18 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i21 = -4;
    i22 = 0;
    STACKTOP = i2;
    return (tempRet0 = i21, i22) | 0;
   }
   i18 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
   if (i18 >>> 0 < 3 >>> 0) {
    __ZN3WTF6StringC1EPKc(i7, H_BASE + 840 | 0);
    i20 = __ZN7WebCore24CanvasRenderingContext2D13isPointInPathEffRKN3WTF6StringE(i13, d23, d29, i7) | 0;
    i17 = HEAP32[i7 >> 2] | 0;
    do {
     if ((i17 | 0) != 0) {
      i25 = i17 | 0;
      i30 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
      if ((i30 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i17);
       break;
      } else {
       HEAP32[i25 >> 2] = i30;
       break;
      }
     }
    } while (0);
    i21 = -2 | 0;
    i22 = i20 & 1 | 0;
    STACKTOP = i2;
    return (tempRet0 = i21, i22) | 0;
   }
   i17 = i1 + 64 | 0;
   i16 = HEAP32[i17 >> 2] | 0;
   i30 = HEAP32[i17 + 4 >> 2] | 0;
   do {
    if ((i16 & 0 | 0) == 0 & (i30 & -1 | 0) == (-6 | 0)) {
     HEAP32[i8 >> 2] = 0;
    } else {
     do {
      if (i18 >>> 0 > 2 >>> 0) {
       i17 = i9 | 0;
       HEAP32[i17 >> 2] = i16;
       HEAP32[i17 + 4 >> 2] = i30;
       i17 = i16;
       if (!((i16 & 0 | 0) == 0 & (i30 & -1 | 0) == (-5 | 0))) {
        i28 = 38;
        break;
       }
       if ((HEAP8[(HEAP32[i17 >> 2] | 0) + 52 | 0] | 0) != 5) {
        i28 = 38;
        break;
       }
       i31 = i17;
      } else {
       HEAP32[i9 + 4 >> 2] = -4;
       HEAP32[i9 >> 2] = 0;
       i28 = 38;
      }
     } while (0);
     if ((i28 | 0) == 38) {
      i31 = __ZNK3JSC7JSValue16toStringSlowCaseEPNS_9ExecStateE(i9, i1) | 0;
     }
     i17 = i31 + 12 | 0;
     i25 = HEAP32[i17 >> 2] | 0;
     if ((i25 | 0) == 0) {
      __ZNK3JSC12JSRopeString11resolveRopeEPNS_9ExecStateE(i31, i1);
      i32 = HEAP32[i17 >> 2] | 0;
      HEAP32[i8 >> 2] = i32;
      if ((i32 | 0) == 0) {
       break;
      } else {
       i33 = i32;
      }
     } else {
      HEAP32[i8 >> 2] = i25;
      i33 = i25;
     }
     i25 = i33 | 0;
     HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + 2;
    }
   } while (0);
   i30 = (HEAP32[(HEAP32[i19 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   i16 = i8 | 0;
   L63 : do {
    if ((HEAP32[i30 >> 2] & 0 | 0) == 0 & (HEAP32[i30 + 4 >> 2] & -1 | 0) == (-6 | 0)) {
     i18 = HEAP32[i16 >> 2] | 0;
     do {
      if (!(__ZN3WTF5equalEPKNS_10StringImplEPKh(i18, H_BASE + 840 | 0) | 0)) {
       if (__ZN3WTF5equalEPKNS_10StringImplEPKh(i18, H_BASE + 672 | 0) | 0) {
        break;
       }
       i20 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
       i25 = (i20 | 0) == 0;
       i34 = (i25 ? -6 : -5) | 0;
       i35 = (i25 ? 0 : 0) | i20;
       break L63;
      }
     } while (0);
     i34 = -2 | 0;
     i35 = (__ZN7WebCore24CanvasRenderingContext2D13isPointInPathEffRKN3WTF6StringE(i13, d23, d29, i8) | 0) & 1 | 0;
    } else {
     i34 = -4;
     i35 = 0;
    }
   } while (0);
   i13 = HEAP32[i16 >> 2] | 0;
   if ((i13 | 0) == 0) {
    i21 = i34;
    i22 = i35;
    STACKTOP = i2;
    return (tempRet0 = i21, i22) | 0;
   }
   i30 = i13 | 0;
   i19 = (HEAP32[i30 >> 2] | 0) - 2 | 0;
   if ((i19 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    i21 = i34;
    i22 = i35;
    STACKTOP = i2;
    return (tempRet0 = i21, i22) | 0;
   } else {
    HEAP32[i30 >> 2] = i19;
    i21 = i34;
    i22 = i35;
    STACKTOP = i2;
    return (tempRet0 = i21, i22) | 0;
   }
  }
 } while (0);
 i35 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 i1 = (i35 | 0) == 0;
 i21 = (i1 ? -6 : -5) | 0;
 i22 = (i1 ? 0 : 0) | i35;
 STACKTOP = i2;
 return (tempRet0 = i21, i22) | 0;
}
function __ZN7WebCore63jsCanvasRenderingContext2DPrototypeFunctionCreateLinearGradientEPN3JSC9ExecStateE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, d26 = +0, d27 = +0, i28 = 0, d29 = +0, i30 = 0, i31 = 0, d32 = +0, d33 = +0, i34 = 0, d35 = +0, d36 = +0, i37 = 0, d38 = +0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 40 | 0;
 i9 = i2 + 48 | 0;
 i10 = i2 + 56 | 0;
 i11 = i2 + 64 | 0;
 i12 = i1 + 40 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 i14 = i13;
 L1 : do {
  if ((i13 & 0 | 0) == 0 & (HEAP32[i12 + 4 >> 2] & -1 | 0) == (-5 | 0)) {
   i15 = i14;
   if ((HEAP32[(i14 & -65536) + 1048 >> 2] | 0) == 2) {
    i16 = i15 + 8 | 0;
   } else {
    i16 = (HEAP32[i15 >> 2] | 0) + 32 | 0;
   }
   i15 = HEAP32[i16 >> 2] | 0;
   if ((i15 | 0) == 0) {
    break;
   } else {
    i17 = i15;
   }
   while (1) {
    if ((i17 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i17 = HEAP32[i17 + 4 >> 2] | 0;
    if ((i17 | 0) == 0) {
     break L1;
    }
   }
   i15 = i14;
   if ((i14 | 0) == 0) {
    break;
   }
   i18 = HEAP32[i15 + 12 >> 2] | 0;
   i19 = i1 + 32 | 0;
   if (((HEAP32[i19 >> 2] | 0) - 1 | 0) >>> 0 < 4 >>> 0) {
    i20 = __ZN3JSC29createNotEnoughArgumentsErrorEPNS_9ExecStateE(i1) | 0;
    i21 = (i20 | 0) == 0;
    i22 = HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
    i23 = i4 | 0;
    HEAP32[i23 >> 2] = (i21 ? 0 : 0) | i20;
    HEAP32[i23 + 4 >> 2] = i21 ? -6 : -5;
    __ZN3JSC2VM14throwExceptionEPNS_9ExecStateENS_7JSValueE(i3, i22, i1, i4);
    i22 = i3 | 0;
    i24 = HEAP32[i22 + 4 >> 2] | 0;
    i25 = HEAP32[i22 >> 2] | 0;
    STACKTOP = i2;
    return (tempRet0 = i24, i25) | 0;
   }
   HEAP32[i5 >> 2] = 0;
   i22 = i1 + 48 | 0;
   i21 = HEAP32[i22 >> 2] | 0;
   i23 = HEAP32[i22 + 4 >> 2] | 0;
   i22 = i6 | 0;
   HEAP32[i22 >> 2] = i21;
   HEAP32[i22 + 4 >> 2] = i23;
   i22 = i23;
   do {
    if ((i22 | 0) == -1) {
     d26 = +(i21 | 0);
    } else {
     if (i22 >>> 0 < 4294967289 >>> 0) {
      d26 = +HEAPF64[i6 >> 3];
      break;
     } else {
      d26 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i6, i1);
      break;
     }
    }
   } while (0);
   d27 = d26;
   i22 = i1 + 16 | 0;
   i21 = HEAP32[i22 >> 2] | 0;
   i23 = (HEAP32[(i21 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i23 >> 2] & 0 | 0) == 0 & (HEAP32[i23 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i24 = -4;
    i25 = 0;
    STACKTOP = i2;
    return (tempRet0 = i24, i25) | 0;
   }
   do {
    if (((HEAP32[i19 >> 2] | 0) - 1 | 0) >>> 0 > 1 >>> 0) {
     i23 = i1 + 56 | 0;
     i20 = HEAP32[i23 >> 2] | 0;
     i28 = HEAP32[i23 + 4 >> 2] | 0;
     i23 = i7 | 0;
     HEAP32[i23 >> 2] = i20;
     HEAP32[i23 + 4 >> 2] = i28;
     i23 = i28;
     if ((i23 | 0) == -1) {
      d29 = +(i20 | 0);
      i30 = i21;
      break;
     }
     if (i23 >>> 0 >= 4294967289 >>> 0) {
      i31 = 23;
      break;
     }
     d29 = +HEAPF64[i7 >> 3];
     i30 = i21;
    } else {
     HEAP32[i7 + 4 >> 2] = -4;
     HEAP32[i7 >> 2] = 0;
     i31 = 23;
    }
   } while (0);
   if ((i31 | 0) == 23) {
    d32 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i7, i1);
    d29 = d32;
    i30 = HEAP32[i22 >> 2] | 0;
   }
   d32 = d29;
   i21 = (HEAP32[(i30 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i21 >> 2] & 0 | 0) == 0 & (HEAP32[i21 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i24 = -4;
    i25 = 0;
    STACKTOP = i2;
    return (tempRet0 = i24, i25) | 0;
   }
   do {
    if (((HEAP32[i19 >> 2] | 0) - 1 | 0) >>> 0 > 2 >>> 0) {
     i21 = i1 + 64 | 0;
     i23 = HEAP32[i21 >> 2] | 0;
     i20 = HEAP32[i21 + 4 >> 2] | 0;
     i21 = i8 | 0;
     HEAP32[i21 >> 2] = i23;
     HEAP32[i21 + 4 >> 2] = i20;
     i21 = i20;
     if ((i21 | 0) == -1) {
      d33 = +(i23 | 0);
      i34 = i30;
      break;
     }
     if (i21 >>> 0 >= 4294967289 >>> 0) {
      i31 = 30;
      break;
     }
     d33 = +HEAPF64[i8 >> 3];
     i34 = i30;
    } else {
     HEAP32[i8 + 4 >> 2] = -4;
     HEAP32[i8 >> 2] = 0;
     i31 = 30;
    }
   } while (0);
   if ((i31 | 0) == 30) {
    d35 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i8, i1);
    d33 = d35;
    i34 = HEAP32[i22 >> 2] | 0;
   }
   d35 = d33;
   i21 = (HEAP32[(i34 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i21 >> 2] & 0 | 0) == 0 & (HEAP32[i21 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i24 = -4;
    i25 = 0;
    STACKTOP = i2;
    return (tempRet0 = i24, i25) | 0;
   }
   do {
    if (((HEAP32[i19 >> 2] | 0) - 1 | 0) >>> 0 > 3 >>> 0) {
     i21 = i1 + 72 | 0;
     i23 = HEAP32[i21 >> 2] | 0;
     i20 = HEAP32[i21 + 4 >> 2] | 0;
     i21 = i9 | 0;
     HEAP32[i21 >> 2] = i23;
     HEAP32[i21 + 4 >> 2] = i20;
     i21 = i20;
     if ((i21 | 0) == -1) {
      d36 = +(i23 | 0);
      i37 = i34;
      break;
     }
     if (i21 >>> 0 >= 4294967289 >>> 0) {
      i31 = 37;
      break;
     }
     d36 = +HEAPF64[i9 >> 3];
     i37 = i34;
    } else {
     HEAP32[i9 + 4 >> 2] = -4;
     HEAP32[i9 >> 2] = 0;
     i31 = 37;
    }
   } while (0);
   if ((i31 | 0) == 37) {
    d38 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i9, i1);
    d36 = d38;
    i37 = HEAP32[i22 >> 2] | 0;
   }
   i19 = (HEAP32[(i37 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i19 >> 2] & 0 | 0) == 0 & (HEAP32[i19 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i24 = -4;
    i25 = 0;
    STACKTOP = i2;
    return (tempRet0 = i24, i25) | 0;
   }
   i19 = HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] | 0;
   __ZN7WebCore24CanvasRenderingContext2D20createLinearGradientEffffRi(i11, i18, d27, d32, d35, d36, i5);
   i21 = i11 | 0;
   __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_14CanvasGradientE(i10, i1, i19, HEAP32[i21 >> 2] | 0);
   i19 = HEAP32[i21 >> 2] | 0;
   do {
    if ((i19 | 0) != 0) {
     i21 = i19 | 0;
     i23 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
     if ((i23 | 0) != 0) {
      HEAP32[i21 >> 2] = i23;
      break;
     }
     i23 = HEAP32[i19 + 4 >> 2] | 0;
     do {
      if ((i23 | 0) != 0) {
       i21 = i23 | 0;
       i20 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
       if ((i20 | 0) == 0) {
        __ZN7WebCore8GradientD1Ev(i23);
        __ZN3WTF8fastFreeEPv(i23);
        break;
       } else {
        HEAP32[i21 >> 2] = i20;
        break;
       }
      }
     } while (0);
     __ZN3WTF8fastFreeEPv(i19);
    }
   } while (0);
   __ZN7WebCore15setDOMExceptionEPN3JSC9ExecStateEi(i1, HEAP32[i5 >> 2] | 0);
   i19 = i10 | 0;
   i24 = HEAP32[i19 + 4 >> 2] | 0;
   i25 = HEAP32[i19 >> 2] | 0;
   STACKTOP = i2;
   return (tempRet0 = i24, i25) | 0;
  }
 } while (0);
 i10 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 i1 = (i10 | 0) == 0;
 i24 = (i1 ? -6 : -5) | 0;
 i25 = (i1 ? 0 : 0) | i10;
 STACKTOP = i2;
 return (tempRet0 = i24, i25) | 0;
}
function __ZN7WebCore53jsCanvasRenderingContext2DPrototypeFunctionStrokeTextEPN3JSC9ExecStateE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, d28 = +0, i29 = 0, d30 = +0, d31 = +0, i32 = 0, d33 = +0, d34 = +0, d35 = +0, i36 = 0, d37 = +0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 40 | 0;
 i9 = i2 + 48 | 0;
 i10 = i1 + 40 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 i12 = i11;
 L1 : do {
  if ((i11 & 0 | 0) == 0 & (HEAP32[i10 + 4 >> 2] & -1 | 0) == (-5 | 0)) {
   i13 = i12;
   if ((HEAP32[(i12 & -65536) + 1048 >> 2] | 0) == 2) {
    i14 = i13 + 8 | 0;
   } else {
    i14 = (HEAP32[i13 >> 2] | 0) + 32 | 0;
   }
   i13 = HEAP32[i14 >> 2] | 0;
   if ((i13 | 0) == 0) {
    break;
   } else {
    i15 = i13;
   }
   while (1) {
    if ((i15 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i15 = HEAP32[i15 + 4 >> 2] | 0;
    if ((i15 | 0) == 0) {
     break L1;
    }
   }
   if ((i12 | 0) == 0) {
    break;
   }
   i13 = HEAP32[i12 + 12 >> 2] | 0;
   i16 = i1 + 32 | 0;
   if (((HEAP32[i16 >> 2] | 0) - 1 | 0) >>> 0 < 3 >>> 0) {
    i17 = __ZN3JSC29createNotEnoughArgumentsErrorEPNS_9ExecStateE(i1) | 0;
    i18 = (i17 | 0) == 0;
    i19 = HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
    i20 = i4 | 0;
    HEAP32[i20 >> 2] = (i18 ? 0 : 0) | i17;
    HEAP32[i20 + 4 >> 2] = i18 ? -6 : -5;
    __ZN3JSC2VM14throwExceptionEPNS_9ExecStateENS_7JSValueE(i3, i19, i1, i4);
    i19 = i3 | 0;
    i21 = HEAP32[i19 + 4 >> 2] | 0;
    i22 = HEAP32[i19 >> 2] | 0;
    STACKTOP = i2;
    return (tempRet0 = i21, i22) | 0;
   }
   i19 = i1 + 48 | 0;
   i18 = HEAP32[i19 >> 2] | 0;
   i20 = HEAP32[i19 + 4 >> 2] | 0;
   do {
    if ((i18 & 0 | 0) == 0 & (i20 & -1 | 0) == (-6 | 0)) {
     HEAP32[i5 >> 2] = 0;
    } else {
     i19 = i6 | 0;
     HEAP32[i19 >> 2] = i18;
     HEAP32[i19 + 4 >> 2] = i20;
     i19 = i18;
     do {
      if ((i18 & 0 | 0) == 0 & (i20 & -1 | 0) == (-5 | 0)) {
       if ((HEAP8[(HEAP32[i19 >> 2] | 0) + 52 | 0] | 0) != 5) {
        i23 = 17;
        break;
       }
       i24 = i19;
      } else {
       i23 = 17;
      }
     } while (0);
     if ((i23 | 0) == 17) {
      i24 = __ZNK3JSC7JSValue16toStringSlowCaseEPNS_9ExecStateE(i6, i1) | 0;
     }
     i19 = i24 + 12 | 0;
     i17 = HEAP32[i19 >> 2] | 0;
     if ((i17 | 0) == 0) {
      __ZNK3JSC12JSRopeString11resolveRopeEPNS_9ExecStateE(i24, i1);
      i25 = HEAP32[i19 >> 2] | 0;
      HEAP32[i5 >> 2] = i25;
      if ((i25 | 0) == 0) {
       break;
      } else {
       i26 = i25;
      }
     } else {
      HEAP32[i5 >> 2] = i17;
      i26 = i17;
     }
     i17 = i26 | 0;
     HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 2;
    }
   } while (0);
   i20 = i1 + 16 | 0;
   i18 = HEAP32[i20 >> 2] | 0;
   i17 = (HEAP32[(i18 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   do {
    if ((HEAP32[i17 >> 2] & 0 | 0) == 0 & (HEAP32[i17 + 4 >> 2] & -1 | 0) == (-6 | 0)) {
     do {
      if (((HEAP32[i16 >> 2] | 0) - 1 | 0) >>> 0 > 1 >>> 0) {
       i25 = i1 + 56 | 0;
       i19 = HEAP32[i25 >> 2] | 0;
       i27 = HEAP32[i25 + 4 >> 2] | 0;
       i25 = i7 | 0;
       HEAP32[i25 >> 2] = i19;
       HEAP32[i25 + 4 >> 2] = i27;
       i25 = i27;
       if ((i25 | 0) == -1) {
        d28 = +(i19 | 0);
        i29 = i18;
        break;
       }
       if (i25 >>> 0 >= 4294967289 >>> 0) {
        i23 = 29;
        break;
       }
       d28 = +HEAPF64[i7 >> 3];
       i29 = i18;
      } else {
       HEAP32[i7 + 4 >> 2] = -4;
       HEAP32[i7 >> 2] = 0;
       i23 = 29;
      }
     } while (0);
     if ((i23 | 0) == 29) {
      d30 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i7, i1);
      d28 = d30;
      i29 = HEAP32[i20 >> 2] | 0;
     }
     d30 = d28;
     i25 = (HEAP32[(i29 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
     if (!((HEAP32[i25 >> 2] & 0 | 0) == 0 & (HEAP32[i25 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
      break;
     }
     do {
      if (((HEAP32[i16 >> 2] | 0) - 1 | 0) >>> 0 > 2 >>> 0) {
       i25 = i1 + 64 | 0;
       i19 = HEAP32[i25 >> 2] | 0;
       i27 = HEAP32[i25 + 4 >> 2] | 0;
       i25 = i8 | 0;
       HEAP32[i25 >> 2] = i19;
       HEAP32[i25 + 4 >> 2] = i27;
       i25 = i27;
       if ((i25 | 0) == -1) {
        d31 = +(i19 | 0);
        i32 = i29;
        break;
       }
       if (i25 >>> 0 >= 4294967289 >>> 0) {
        i23 = 36;
        break;
       }
       d31 = +HEAPF64[i8 >> 3];
       i32 = i29;
      } else {
       HEAP32[i8 + 4 >> 2] = -4;
       HEAP32[i8 >> 2] = 0;
       i23 = 36;
      }
     } while (0);
     if ((i23 | 0) == 36) {
      d33 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i8, i1);
      d31 = d33;
      i32 = HEAP32[i20 >> 2] | 0;
     }
     d33 = d31;
     i25 = (HEAP32[(i32 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
     if (!((HEAP32[i25 >> 2] & 0 | 0) == 0 & (HEAP32[i25 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
      break;
     }
     if (((HEAP32[i16 >> 2] | 0) - 1 | 0) >>> 0 < 4 >>> 0) {
      __ZN7WebCore24CanvasRenderingContext2D10strokeTextERKN3WTF6StringEff(i13, i5, d30, d33);
      break;
     }
     i25 = i1 + 72 | 0;
     i19 = HEAP32[i25 >> 2] | 0;
     i27 = HEAP32[i25 + 4 >> 2] | 0;
     d34 = +HEAPF64[i25 >> 3];
     i25 = i9 | 0;
     HEAP32[i25 >> 2] = i19;
     HEAP32[i25 + 4 >> 2] = i27;
     i25 = i27;
     do {
      if ((i25 | 0) == -1) {
       d35 = +(i19 | 0);
       i36 = i32;
      } else {
       if (i25 >>> 0 < 4294967289 >>> 0) {
        d35 = d34;
        i36 = i32;
        break;
       }
       d37 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i9, i1);
       d35 = d37;
       i36 = HEAP32[i20 >> 2] | 0;
      }
     } while (0);
     i25 = (HEAP32[(i36 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
     if (!((HEAP32[i25 >> 2] & 0 | 0) == 0 & (HEAP32[i25 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
      break;
     }
     __ZN7WebCore24CanvasRenderingContext2D10strokeTextERKN3WTF6StringEfff(i13, i5, d30, d33, d35);
    }
   } while (0);
   i13 = HEAP32[i5 >> 2] | 0;
   if ((i13 | 0) == 0) {
    i21 = -4;
    i22 = 0;
    STACKTOP = i2;
    return (tempRet0 = i21, i22) | 0;
   }
   i20 = i13 | 0;
   i16 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    i21 = -4;
    i22 = 0;
    STACKTOP = i2;
    return (tempRet0 = i21, i22) | 0;
   } else {
    HEAP32[i20 >> 2] = i16;
    i21 = -4;
    i22 = 0;
    STACKTOP = i2;
    return (tempRet0 = i21, i22) | 0;
   }
  }
 } while (0);
 i5 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 i1 = (i5 | 0) == 0;
 i21 = (i1 ? -6 : -5) | 0;
 i22 = (i1 ? 0 : 0) | i5;
 STACKTOP = i2;
 return (tempRet0 = i21, i22) | 0;
}
function __ZN7WebCore51jsCanvasRenderingContext2DPrototypeFunctionFillTextEPN3JSC9ExecStateE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, d28 = +0, i29 = 0, d30 = +0, d31 = +0, i32 = 0, d33 = +0, d34 = +0, d35 = +0, i36 = 0, d37 = +0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 40 | 0;
 i9 = i2 + 48 | 0;
 i10 = i1 + 40 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 i12 = i11;
 L1 : do {
  if ((i11 & 0 | 0) == 0 & (HEAP32[i10 + 4 >> 2] & -1 | 0) == (-5 | 0)) {
   i13 = i12;
   if ((HEAP32[(i12 & -65536) + 1048 >> 2] | 0) == 2) {
    i14 = i13 + 8 | 0;
   } else {
    i14 = (HEAP32[i13 >> 2] | 0) + 32 | 0;
   }
   i13 = HEAP32[i14 >> 2] | 0;
   if ((i13 | 0) == 0) {
    break;
   } else {
    i15 = i13;
   }
   while (1) {
    if ((i15 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i15 = HEAP32[i15 + 4 >> 2] | 0;
    if ((i15 | 0) == 0) {
     break L1;
    }
   }
   if ((i12 | 0) == 0) {
    break;
   }
   i13 = HEAP32[i12 + 12 >> 2] | 0;
   i16 = i1 + 32 | 0;
   if (((HEAP32[i16 >> 2] | 0) - 1 | 0) >>> 0 < 3 >>> 0) {
    i17 = __ZN3JSC29createNotEnoughArgumentsErrorEPNS_9ExecStateE(i1) | 0;
    i18 = (i17 | 0) == 0;
    i19 = HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
    i20 = i4 | 0;
    HEAP32[i20 >> 2] = (i18 ? 0 : 0) | i17;
    HEAP32[i20 + 4 >> 2] = i18 ? -6 : -5;
    __ZN3JSC2VM14throwExceptionEPNS_9ExecStateENS_7JSValueE(i3, i19, i1, i4);
    i19 = i3 | 0;
    i21 = HEAP32[i19 + 4 >> 2] | 0;
    i22 = HEAP32[i19 >> 2] | 0;
    STACKTOP = i2;
    return (tempRet0 = i21, i22) | 0;
   }
   i19 = i1 + 48 | 0;
   i18 = HEAP32[i19 >> 2] | 0;
   i20 = HEAP32[i19 + 4 >> 2] | 0;
   do {
    if ((i18 & 0 | 0) == 0 & (i20 & -1 | 0) == (-6 | 0)) {
     HEAP32[i5 >> 2] = 0;
    } else {
     i19 = i6 | 0;
     HEAP32[i19 >> 2] = i18;
     HEAP32[i19 + 4 >> 2] = i20;
     i19 = i18;
     do {
      if ((i18 & 0 | 0) == 0 & (i20 & -1 | 0) == (-5 | 0)) {
       if ((HEAP8[(HEAP32[i19 >> 2] | 0) + 52 | 0] | 0) != 5) {
        i23 = 17;
        break;
       }
       i24 = i19;
      } else {
       i23 = 17;
      }
     } while (0);
     if ((i23 | 0) == 17) {
      i24 = __ZNK3JSC7JSValue16toStringSlowCaseEPNS_9ExecStateE(i6, i1) | 0;
     }
     i19 = i24 + 12 | 0;
     i17 = HEAP32[i19 >> 2] | 0;
     if ((i17 | 0) == 0) {
      __ZNK3JSC12JSRopeString11resolveRopeEPNS_9ExecStateE(i24, i1);
      i25 = HEAP32[i19 >> 2] | 0;
      HEAP32[i5 >> 2] = i25;
      if ((i25 | 0) == 0) {
       break;
      } else {
       i26 = i25;
      }
     } else {
      HEAP32[i5 >> 2] = i17;
      i26 = i17;
     }
     i17 = i26 | 0;
     HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 2;
    }
   } while (0);
   i20 = i1 + 16 | 0;
   i18 = HEAP32[i20 >> 2] | 0;
   i17 = (HEAP32[(i18 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   do {
    if ((HEAP32[i17 >> 2] & 0 | 0) == 0 & (HEAP32[i17 + 4 >> 2] & -1 | 0) == (-6 | 0)) {
     do {
      if (((HEAP32[i16 >> 2] | 0) - 1 | 0) >>> 0 > 1 >>> 0) {
       i25 = i1 + 56 | 0;
       i19 = HEAP32[i25 >> 2] | 0;
       i27 = HEAP32[i25 + 4 >> 2] | 0;
       i25 = i7 | 0;
       HEAP32[i25 >> 2] = i19;
       HEAP32[i25 + 4 >> 2] = i27;
       i25 = i27;
       if ((i25 | 0) == -1) {
        d28 = +(i19 | 0);
        i29 = i18;
        break;
       }
       if (i25 >>> 0 >= 4294967289 >>> 0) {
        i23 = 29;
        break;
       }
       d28 = +HEAPF64[i7 >> 3];
       i29 = i18;
      } else {
       HEAP32[i7 + 4 >> 2] = -4;
       HEAP32[i7 >> 2] = 0;
       i23 = 29;
      }
     } while (0);
     if ((i23 | 0) == 29) {
      d30 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i7, i1);
      d28 = d30;
      i29 = HEAP32[i20 >> 2] | 0;
     }
     d30 = d28;
     i25 = (HEAP32[(i29 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
     if (!((HEAP32[i25 >> 2] & 0 | 0) == 0 & (HEAP32[i25 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
      break;
     }
     do {
      if (((HEAP32[i16 >> 2] | 0) - 1 | 0) >>> 0 > 2 >>> 0) {
       i25 = i1 + 64 | 0;
       i19 = HEAP32[i25 >> 2] | 0;
       i27 = HEAP32[i25 + 4 >> 2] | 0;
       i25 = i8 | 0;
       HEAP32[i25 >> 2] = i19;
       HEAP32[i25 + 4 >> 2] = i27;
       i25 = i27;
       if ((i25 | 0) == -1) {
        d31 = +(i19 | 0);
        i32 = i29;
        break;
       }
       if (i25 >>> 0 >= 4294967289 >>> 0) {
        i23 = 36;
        break;
       }
       d31 = +HEAPF64[i8 >> 3];
       i32 = i29;
      } else {
       HEAP32[i8 + 4 >> 2] = -4;
       HEAP32[i8 >> 2] = 0;
       i23 = 36;
      }
     } while (0);
     if ((i23 | 0) == 36) {
      d33 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i8, i1);
      d31 = d33;
      i32 = HEAP32[i20 >> 2] | 0;
     }
     d33 = d31;
     i25 = (HEAP32[(i32 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
     if (!((HEAP32[i25 >> 2] & 0 | 0) == 0 & (HEAP32[i25 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
      break;
     }
     if (((HEAP32[i16 >> 2] | 0) - 1 | 0) >>> 0 < 4 >>> 0) {
      __ZN7WebCore24CanvasRenderingContext2D8fillTextERKN3WTF6StringEff(i13, i5, d30, d33);
      break;
     }
     i25 = i1 + 72 | 0;
     i19 = HEAP32[i25 >> 2] | 0;
     i27 = HEAP32[i25 + 4 >> 2] | 0;
     d34 = +HEAPF64[i25 >> 3];
     i25 = i9 | 0;
     HEAP32[i25 >> 2] = i19;
     HEAP32[i25 + 4 >> 2] = i27;
     i25 = i27;
     do {
      if ((i25 | 0) == -1) {
       d35 = +(i19 | 0);
       i36 = i32;
      } else {
       if (i25 >>> 0 < 4294967289 >>> 0) {
        d35 = d34;
        i36 = i32;
        break;
       }
       d37 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i9, i1);
       d35 = d37;
       i36 = HEAP32[i20 >> 2] | 0;
      }
     } while (0);
     i25 = (HEAP32[(i36 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
     if (!((HEAP32[i25 >> 2] & 0 | 0) == 0 & (HEAP32[i25 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
      break;
     }
     __ZN7WebCore24CanvasRenderingContext2D8fillTextERKN3WTF6StringEfff(i13, i5, d30, d33, d35);
    }
   } while (0);
   i13 = HEAP32[i5 >> 2] | 0;
   if ((i13 | 0) == 0) {
    i21 = -4;
    i22 = 0;
    STACKTOP = i2;
    return (tempRet0 = i21, i22) | 0;
   }
   i20 = i13 | 0;
   i16 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    i21 = -4;
    i22 = 0;
    STACKTOP = i2;
    return (tempRet0 = i21, i22) | 0;
   } else {
    HEAP32[i20 >> 2] = i16;
    i21 = -4;
    i22 = 0;
    STACKTOP = i2;
    return (tempRet0 = i21, i22) | 0;
   }
  }
 } while (0);
 i5 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 i1 = (i5 | 0) == 0;
 i21 = (i1 ? -6 : -5) | 0;
 i22 = (i1 ? 0 : 0) | i5;
 STACKTOP = i2;
 return (tempRet0 = i21, i22) | 0;
}
function __ZN7WebCore17jsStringWithCacheEPN3JSC9ExecStateERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 56 | 0;
 i12 = i4 + 64 | 0;
 i13 = HEAP32[i3 >> 2] | 0;
 HEAP32[i9 >> 2] = i13;
 L1 : do {
  if ((i13 | 0) != 0) {
   i3 = HEAP32[i13 + 4 >> 2] | 0;
   do {
    if ((i3 | 0) == 0) {
     break L1;
    } else if ((i3 | 0) == 1) {
     i14 = i13 + 8 | 0;
     if ((HEAP32[i13 + 16 >> 2] & 32 | 0) == 0) {
      i15 = HEAP16[HEAP32[i14 >> 2] >> 1] | 0;
      if ((i15 & 65535) >>> 0 < 256 >>> 0) {
       i16 = i15 & 255;
      } else {
       break;
      }
     } else {
      i16 = HEAP8[HEAP32[i14 >> 2] | 0] | 0;
     }
     i14 = HEAP32[(HEAP32[(HEAP32[i2 + 16 >> 2] & -65536) + 1076 >> 2] | 0) + 20932 + ((i16 & 255) << 2) >> 2] | 0;
     HEAP32[i1 + 4 >> 2] = (i14 | 0) == 0 ? -6 : -5;
     HEAP32[i1 >> 2] = i14;
     STACKTOP = i4;
     return;
    }
   } while (0);
   i3 = i2 + 16 | 0;
   i14 = HEAP32[(HEAP32[(HEAP32[HEAP32[i3 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0;
   i15 = i14 + 24 | 0;
   i17 = i11 | 0;
   HEAP32[i17 >> 2] = 0;
   i18 = i14 + 36 | 0;
   i19 = i14 + 44 | 0;
   if ((HEAP32[i18 >> 2] | 0) >= (HEAP32[i19 >> 2] | 0)) {
    __ZN3JSC9WeakGCMapIPN3WTF10StringImplENS_8JSStringENS1_7PtrHashIS3_EENS1_10HashTraitsIS3_EEE5gcMapEv(i15);
    i14 = (HEAP32[i18 >> 2] << 1) - 1 | 0;
    HEAP32[i19 >> 2] = (i14 | 0) > 3 ? i14 : 3;
   }
   HEAP32[i6 >> 2] = 0;
   __ZN3WTF9HashTableIPNS_10StringImplENS_12KeyValuePairIS2_N3JSC4WeakINS4_8JSStringEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS2_EENS_7HashMapIS2_S7_SC_NS_10HashTraitsIS2_EENSE_IS7_EEE18KeyValuePairTraitsESF_E3addINS_17HashMapTranslatorISI_SC_EERKS2_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS2_S8_SA_SC_SI_SF_EEEEOT0_OT1_(i10, i15 | 0, i9, i6);
   i15 = i10 | 0;
   i14 = (HEAP32[i15 >> 2] | 0) + 4 | 0;
   i19 = HEAP32[i14 >> 2] | 0;
   do {
    if ((i19 | 0) == 0) {
     i20 = 13;
    } else {
     if ((HEAP32[i19 + 4 >> 2] | 0) == -6) {
      i20 = 13;
      break;
     }
     if ((HEAP32[i19 + 8 >> 2] & 3 | 0) != 0) {
      i20 = 13;
     }
    }
   } while (0);
   do {
    if ((i20 | 0) == 13) {
     HEAP8[i10 + 8 | 0] = 1;
     i19 = i5 | 0;
     i18 = HEAP32[i17 >> 2] | 0;
     HEAP32[i17 >> 2] = 0;
     i21 = HEAP32[i14 >> 2] | 0;
     HEAP32[i14 >> 2] = i18;
     HEAP32[i19 >> 2] = i21;
     if ((i21 | 0) == 0) {
      break;
     }
     __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i19);
    }
   } while (0);
   if ((HEAP32[i17 >> 2] | 0) != 0) {
    __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
   }
   do {
    if ((HEAP8[i10 + 8 | 0] & 1) != 0) {
     i19 = HEAP32[i9 >> 2] | 0;
     i21 = (i19 | 0) == 0;
     if (!i21) {
      i18 = i19 | 0;
      HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 2;
     }
     i18 = HEAP32[(HEAP32[i3 >> 2] & -65536) + 1076 >> 2] | 0;
     L29 : do {
      if (i21) {
       i20 = 22;
      } else {
       i22 = HEAP32[i19 + 4 >> 2] | 0;
       do {
        if ((i22 | 0) == 0) {
         i20 = 22;
         break L29;
        } else if ((i22 | 0) == 1) {
         i23 = i19 + 8 | 0;
         if ((HEAP32[i19 + 16 >> 2] & 32 | 0) == 0) {
          i24 = HEAP16[HEAP32[i23 >> 2] >> 1] | 0;
          if ((i24 & 65535) >>> 0 < 256 >>> 0) {
           i25 = i24 & 255;
          } else {
           break;
          }
         } else {
          i25 = HEAP8[HEAP32[i23 >> 2] | 0] | 0;
         }
         i26 = HEAP32[i18 + 20932 + ((i25 & 255) << 2) >> 2] | 0;
         break L29;
        }
       } while (0);
       i22 = i7 | 0;
       HEAP32[i22 >> 2] = i19;
       i23 = i19 | 0;
       HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 2;
       i23 = __ZN3JSC8JSString6createERNS_2VMEN3WTF10PassRefPtrINS3_10StringImplEEE(i18, i7) | 0;
       i24 = HEAP32[i22 >> 2] | 0;
       if ((i24 | 0) == 0) {
        i26 = i23;
        break;
       }
       i22 = i24 | 0;
       i27 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
       if ((i27 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i24);
        i26 = i23;
        break;
       } else {
        HEAP32[i22 >> 2] = i27;
        i26 = i23;
        break;
       }
      }
     } while (0);
     if ((i20 | 0) == 22) {
      i26 = HEAP32[i18 + 20892 >> 2] | 0;
     }
     i23 = i12 | 0;
     if ((i26 | 0) == 0) {
      i28 = 0;
     } else {
      i27 = i26;
      i22 = (i27 & -65536) + 1060 | 0;
      i24 = i22 | 0;
      i29 = HEAP32[i24 >> 2] | 0;
      if ((i29 | 0) == 0) {
       i30 = __ZN3JSC7WeakSet13findAllocatorEv(i22) | 0;
      } else {
       i30 = i29;
      }
      HEAP32[i24 >> 2] = HEAP32[i30 >> 2];
      i24 = i30;
      HEAP32[i24 >> 2] = i27;
      HEAP32[i24 + 4 >> 2] = -5;
      HEAP32[i30 + 8 >> 2] = 0;
      HEAP32[i30 + 12 >> 2] = 0;
      i28 = i30;
     }
     i24 = i8 | 0;
     HEAP32[i23 >> 2] = 0;
     i27 = HEAP32[i14 >> 2] | 0;
     HEAP32[i14 >> 2] = i28;
     HEAP32[i24 >> 2] = i27;
     if ((i27 | 0) != 0) {
      __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i24);
     }
     if ((HEAP32[i23 >> 2] | 0) != 0) {
      __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i23);
     }
     if (i21) {
      break;
     }
     i23 = i19 | 0;
     i24 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
     if ((i24 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i19);
      break;
     } else {
      HEAP32[i23 >> 2] = i24;
      break;
     }
    }
   } while (0);
   i14 = HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] | 0;
   do {
    if ((i14 | 0) == 0) {
     i31 = 0;
    } else {
     if ((HEAP32[i14 + 8 >> 2] & 3 | 0) != 0) {
      i31 = 0;
      break;
     }
     i31 = HEAP32[i14 >> 2] | 0;
    }
   } while (0);
   HEAP32[i1 + 4 >> 2] = (i31 | 0) == 0 ? -6 : -5;
   HEAP32[i1 >> 2] = i31;
   STACKTOP = i4;
   return;
  }
 } while (0);
 i31 = HEAP32[(HEAP32[(HEAP32[i2 + 16 >> 2] & -65536) + 1076 >> 2] | 0) + 20892 >> 2] | 0;
 HEAP32[i1 + 4 >> 2] = (i31 | 0) == 0 ? -6 : -5;
 HEAP32[i1 >> 2] = i31;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore59jsCanvasRenderingContext2DPrototypeFunctionQuadraticCurveToEPN3JSC9ExecStateE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, d22 = +0, d23 = +0, i24 = 0, d25 = +0, i26 = 0, i27 = 0, d28 = +0, d29 = +0, i30 = 0, d31 = +0, d32 = +0, i33 = 0, d34 = +0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 40 | 0;
 i9 = i1 + 40 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 i11 = i10;
 L1 : do {
  if ((i10 & 0 | 0) == 0 & (HEAP32[i9 + 4 >> 2] & -1 | 0) == (-5 | 0)) {
   i12 = i11;
   if ((HEAP32[(i11 & -65536) + 1048 >> 2] | 0) == 2) {
    i13 = i12 + 8 | 0;
   } else {
    i13 = (HEAP32[i12 >> 2] | 0) + 32 | 0;
   }
   i12 = HEAP32[i13 >> 2] | 0;
   if ((i12 | 0) == 0) {
    break;
   } else {
    i14 = i12;
   }
   while (1) {
    if ((i14 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i14 = HEAP32[i14 + 4 >> 2] | 0;
    if ((i14 | 0) == 0) {
     break L1;
    }
   }
   if ((i11 | 0) == 0) {
    break;
   }
   i12 = HEAP32[i11 + 12 >> 2] | 0;
   i15 = i1 + 32 | 0;
   if (((HEAP32[i15 >> 2] | 0) - 1 | 0) >>> 0 < 4 >>> 0) {
    i16 = __ZN3JSC29createNotEnoughArgumentsErrorEPNS_9ExecStateE(i1) | 0;
    i17 = (i16 | 0) == 0;
    i18 = HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
    i19 = i4 | 0;
    HEAP32[i19 >> 2] = (i17 ? 0 : 0) | i16;
    HEAP32[i19 + 4 >> 2] = i17 ? -6 : -5;
    __ZN3JSC2VM14throwExceptionEPNS_9ExecStateENS_7JSValueE(i3, i18, i1, i4);
    i18 = i3 | 0;
    i20 = HEAP32[i18 + 4 >> 2] | 0;
    i21 = HEAP32[i18 >> 2] | 0;
    STACKTOP = i2;
    return (tempRet0 = i20, i21) | 0;
   }
   i18 = i1 + 48 | 0;
   i17 = HEAP32[i18 >> 2] | 0;
   i19 = HEAP32[i18 + 4 >> 2] | 0;
   d22 = +HEAPF64[i18 >> 3];
   i18 = i5 | 0;
   HEAP32[i18 >> 2] = i17;
   HEAP32[i18 + 4 >> 2] = i19;
   i18 = i19;
   do {
    if ((i18 | 0) == -1) {
     d23 = +(i17 | 0);
    } else {
     if (i18 >>> 0 < 4294967289 >>> 0) {
      d23 = d22;
      break;
     }
     d23 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i5, i1);
    }
   } while (0);
   d22 = d23;
   i18 = i1 + 16 | 0;
   i17 = HEAP32[i18 >> 2] | 0;
   i19 = (HEAP32[(i17 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i19 >> 2] & 0 | 0) == 0 & (HEAP32[i19 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i20 = -4;
    i21 = 0;
    STACKTOP = i2;
    return (tempRet0 = i20, i21) | 0;
   }
   do {
    if (((HEAP32[i15 >> 2] | 0) - 1 | 0) >>> 0 > 1 >>> 0) {
     i19 = i1 + 56 | 0;
     i16 = HEAP32[i19 >> 2] | 0;
     i24 = HEAP32[i19 + 4 >> 2] | 0;
     i19 = i6 | 0;
     HEAP32[i19 >> 2] = i16;
     HEAP32[i19 + 4 >> 2] = i24;
     i19 = i24;
     if ((i19 | 0) == -1) {
      d25 = +(i16 | 0);
      i26 = i17;
      break;
     }
     if (i19 >>> 0 >= 4294967289 >>> 0) {
      i27 = 23;
      break;
     }
     d25 = +HEAPF64[i6 >> 3];
     i26 = i17;
    } else {
     HEAP32[i6 + 4 >> 2] = -4;
     HEAP32[i6 >> 2] = 0;
     i27 = 23;
    }
   } while (0);
   if ((i27 | 0) == 23) {
    d28 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i6, i1);
    d25 = d28;
    i26 = HEAP32[i18 >> 2] | 0;
   }
   d28 = d25;
   i17 = (HEAP32[(i26 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i17 >> 2] & 0 | 0) == 0 & (HEAP32[i17 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i20 = -4;
    i21 = 0;
    STACKTOP = i2;
    return (tempRet0 = i20, i21) | 0;
   }
   do {
    if (((HEAP32[i15 >> 2] | 0) - 1 | 0) >>> 0 > 2 >>> 0) {
     i17 = i1 + 64 | 0;
     i19 = HEAP32[i17 >> 2] | 0;
     i16 = HEAP32[i17 + 4 >> 2] | 0;
     i17 = i7 | 0;
     HEAP32[i17 >> 2] = i19;
     HEAP32[i17 + 4 >> 2] = i16;
     i17 = i16;
     if ((i17 | 0) == -1) {
      d29 = +(i19 | 0);
      i30 = i26;
      break;
     }
     if (i17 >>> 0 >= 4294967289 >>> 0) {
      i27 = 30;
      break;
     }
     d29 = +HEAPF64[i7 >> 3];
     i30 = i26;
    } else {
     HEAP32[i7 + 4 >> 2] = -4;
     HEAP32[i7 >> 2] = 0;
     i27 = 30;
    }
   } while (0);
   if ((i27 | 0) == 30) {
    d31 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i7, i1);
    d29 = d31;
    i30 = HEAP32[i18 >> 2] | 0;
   }
   d31 = d29;
   i17 = (HEAP32[(i30 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i17 >> 2] & 0 | 0) == 0 & (HEAP32[i17 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i20 = -4;
    i21 = 0;
    STACKTOP = i2;
    return (tempRet0 = i20, i21) | 0;
   }
   do {
    if (((HEAP32[i15 >> 2] | 0) - 1 | 0) >>> 0 > 3 >>> 0) {
     i17 = i1 + 72 | 0;
     i19 = HEAP32[i17 >> 2] | 0;
     i16 = HEAP32[i17 + 4 >> 2] | 0;
     i17 = i8 | 0;
     HEAP32[i17 >> 2] = i19;
     HEAP32[i17 + 4 >> 2] = i16;
     i17 = i16;
     if ((i17 | 0) == -1) {
      d32 = +(i19 | 0);
      i33 = i30;
      break;
     }
     if (i17 >>> 0 >= 4294967289 >>> 0) {
      i27 = 37;
      break;
     }
     d32 = +HEAPF64[i8 >> 3];
     i33 = i30;
    } else {
     HEAP32[i8 + 4 >> 2] = -4;
     HEAP32[i8 >> 2] = 0;
     i27 = 37;
    }
   } while (0);
   if ((i27 | 0) == 37) {
    d34 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i8, i1);
    d32 = d34;
    i33 = HEAP32[i18 >> 2] | 0;
   }
   i15 = (HEAP32[(i33 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i15 >> 2] & 0 | 0) == 0 & (HEAP32[i15 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i20 = -4;
    i21 = 0;
    STACKTOP = i2;
    return (tempRet0 = i20, i21) | 0;
   }
   __ZN7WebCore17CanvasPathMethods16quadraticCurveToEffff(i12 + 32 | 0, d22, d28, d31, d32);
   i20 = -4;
   i21 = 0;
   STACKTOP = i2;
   return (tempRet0 = i20, i21) | 0;
  }
 } while (0);
 i33 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 i1 = (i33 | 0) == 0;
 i20 = (i1 ? -6 : -5) | 0;
 i21 = (i1 ? 0 : 0) | i33;
 STACKTOP = i2;
 return (tempRet0 = i20, i21) | 0;
}
function __ZN7WebCore53jsCanvasRenderingContext2DPrototypeFunctionStrokeRectEPN3JSC9ExecStateE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, d22 = +0, d23 = +0, i24 = 0, d25 = +0, i26 = 0, i27 = 0, d28 = +0, d29 = +0, i30 = 0, d31 = +0, d32 = +0, i33 = 0, d34 = +0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 40 | 0;
 i9 = i1 + 40 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 i11 = i10;
 L1 : do {
  if ((i10 & 0 | 0) == 0 & (HEAP32[i9 + 4 >> 2] & -1 | 0) == (-5 | 0)) {
   i12 = i11;
   if ((HEAP32[(i11 & -65536) + 1048 >> 2] | 0) == 2) {
    i13 = i12 + 8 | 0;
   } else {
    i13 = (HEAP32[i12 >> 2] | 0) + 32 | 0;
   }
   i12 = HEAP32[i13 >> 2] | 0;
   if ((i12 | 0) == 0) {
    break;
   } else {
    i14 = i12;
   }
   while (1) {
    if ((i14 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i14 = HEAP32[i14 + 4 >> 2] | 0;
    if ((i14 | 0) == 0) {
     break L1;
    }
   }
   if ((i11 | 0) == 0) {
    break;
   }
   i12 = HEAP32[i11 + 12 >> 2] | 0;
   i15 = i1 + 32 | 0;
   if (((HEAP32[i15 >> 2] | 0) - 1 | 0) >>> 0 < 4 >>> 0) {
    i16 = __ZN3JSC29createNotEnoughArgumentsErrorEPNS_9ExecStateE(i1) | 0;
    i17 = (i16 | 0) == 0;
    i18 = HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
    i19 = i4 | 0;
    HEAP32[i19 >> 2] = (i17 ? 0 : 0) | i16;
    HEAP32[i19 + 4 >> 2] = i17 ? -6 : -5;
    __ZN3JSC2VM14throwExceptionEPNS_9ExecStateENS_7JSValueE(i3, i18, i1, i4);
    i18 = i3 | 0;
    i20 = HEAP32[i18 + 4 >> 2] | 0;
    i21 = HEAP32[i18 >> 2] | 0;
    STACKTOP = i2;
    return (tempRet0 = i20, i21) | 0;
   }
   i18 = i1 + 48 | 0;
   i17 = HEAP32[i18 >> 2] | 0;
   i19 = HEAP32[i18 + 4 >> 2] | 0;
   d22 = +HEAPF64[i18 >> 3];
   i18 = i5 | 0;
   HEAP32[i18 >> 2] = i17;
   HEAP32[i18 + 4 >> 2] = i19;
   i18 = i19;
   do {
    if ((i18 | 0) == -1) {
     d23 = +(i17 | 0);
    } else {
     if (i18 >>> 0 < 4294967289 >>> 0) {
      d23 = d22;
      break;
     }
     d23 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i5, i1);
    }
   } while (0);
   d22 = d23;
   i18 = i1 + 16 | 0;
   i17 = HEAP32[i18 >> 2] | 0;
   i19 = (HEAP32[(i17 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i19 >> 2] & 0 | 0) == 0 & (HEAP32[i19 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i20 = -4;
    i21 = 0;
    STACKTOP = i2;
    return (tempRet0 = i20, i21) | 0;
   }
   do {
    if (((HEAP32[i15 >> 2] | 0) - 1 | 0) >>> 0 > 1 >>> 0) {
     i19 = i1 + 56 | 0;
     i16 = HEAP32[i19 >> 2] | 0;
     i24 = HEAP32[i19 + 4 >> 2] | 0;
     i19 = i6 | 0;
     HEAP32[i19 >> 2] = i16;
     HEAP32[i19 + 4 >> 2] = i24;
     i19 = i24;
     if ((i19 | 0) == -1) {
      d25 = +(i16 | 0);
      i26 = i17;
      break;
     }
     if (i19 >>> 0 >= 4294967289 >>> 0) {
      i27 = 23;
      break;
     }
     d25 = +HEAPF64[i6 >> 3];
     i26 = i17;
    } else {
     HEAP32[i6 + 4 >> 2] = -4;
     HEAP32[i6 >> 2] = 0;
     i27 = 23;
    }
   } while (0);
   if ((i27 | 0) == 23) {
    d28 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i6, i1);
    d25 = d28;
    i26 = HEAP32[i18 >> 2] | 0;
   }
   d28 = d25;
   i17 = (HEAP32[(i26 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i17 >> 2] & 0 | 0) == 0 & (HEAP32[i17 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i20 = -4;
    i21 = 0;
    STACKTOP = i2;
    return (tempRet0 = i20, i21) | 0;
   }
   do {
    if (((HEAP32[i15 >> 2] | 0) - 1 | 0) >>> 0 > 2 >>> 0) {
     i17 = i1 + 64 | 0;
     i19 = HEAP32[i17 >> 2] | 0;
     i16 = HEAP32[i17 + 4 >> 2] | 0;
     i17 = i7 | 0;
     HEAP32[i17 >> 2] = i19;
     HEAP32[i17 + 4 >> 2] = i16;
     i17 = i16;
     if ((i17 | 0) == -1) {
      d29 = +(i19 | 0);
      i30 = i26;
      break;
     }
     if (i17 >>> 0 >= 4294967289 >>> 0) {
      i27 = 30;
      break;
     }
     d29 = +HEAPF64[i7 >> 3];
     i30 = i26;
    } else {
     HEAP32[i7 + 4 >> 2] = -4;
     HEAP32[i7 >> 2] = 0;
     i27 = 30;
    }
   } while (0);
   if ((i27 | 0) == 30) {
    d31 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i7, i1);
    d29 = d31;
    i30 = HEAP32[i18 >> 2] | 0;
   }
   d31 = d29;
   i17 = (HEAP32[(i30 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i17 >> 2] & 0 | 0) == 0 & (HEAP32[i17 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i20 = -4;
    i21 = 0;
    STACKTOP = i2;
    return (tempRet0 = i20, i21) | 0;
   }
   do {
    if (((HEAP32[i15 >> 2] | 0) - 1 | 0) >>> 0 > 3 >>> 0) {
     i17 = i1 + 72 | 0;
     i19 = HEAP32[i17 >> 2] | 0;
     i16 = HEAP32[i17 + 4 >> 2] | 0;
     i17 = i8 | 0;
     HEAP32[i17 >> 2] = i19;
     HEAP32[i17 + 4 >> 2] = i16;
     i17 = i16;
     if ((i17 | 0) == -1) {
      d32 = +(i19 | 0);
      i33 = i30;
      break;
     }
     if (i17 >>> 0 >= 4294967289 >>> 0) {
      i27 = 37;
      break;
     }
     d32 = +HEAPF64[i8 >> 3];
     i33 = i30;
    } else {
     HEAP32[i8 + 4 >> 2] = -4;
     HEAP32[i8 >> 2] = 0;
     i27 = 37;
    }
   } while (0);
   if ((i27 | 0) == 37) {
    d34 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i8, i1);
    d32 = d34;
    i33 = HEAP32[i18 >> 2] | 0;
   }
   i15 = (HEAP32[(i33 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i15 >> 2] & 0 | 0) == 0 & (HEAP32[i15 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i20 = -4;
    i21 = 0;
    STACKTOP = i2;
    return (tempRet0 = i20, i21) | 0;
   }
   __ZN7WebCore24CanvasRenderingContext2D10strokeRectEffff(i12, d22, d28, d31, d32);
   i20 = -4;
   i21 = 0;
   STACKTOP = i2;
   return (tempRet0 = i20, i21) | 0;
  }
 } while (0);
 i33 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 i1 = (i33 | 0) == 0;
 i20 = (i1 ? -6 : -5) | 0;
 i21 = (i1 ? 0 : 0) | i33;
 STACKTOP = i2;
 return (tempRet0 = i20, i21) | 0;
}
function __ZN7WebCore52jsCanvasRenderingContext2DPrototypeFunctionClearRectEPN3JSC9ExecStateE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, d22 = +0, d23 = +0, i24 = 0, d25 = +0, i26 = 0, i27 = 0, d28 = +0, d29 = +0, i30 = 0, d31 = +0, d32 = +0, i33 = 0, d34 = +0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 40 | 0;
 i9 = i1 + 40 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 i11 = i10;
 L1 : do {
  if ((i10 & 0 | 0) == 0 & (HEAP32[i9 + 4 >> 2] & -1 | 0) == (-5 | 0)) {
   i12 = i11;
   if ((HEAP32[(i11 & -65536) + 1048 >> 2] | 0) == 2) {
    i13 = i12 + 8 | 0;
   } else {
    i13 = (HEAP32[i12 >> 2] | 0) + 32 | 0;
   }
   i12 = HEAP32[i13 >> 2] | 0;
   if ((i12 | 0) == 0) {
    break;
   } else {
    i14 = i12;
   }
   while (1) {
    if ((i14 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i14 = HEAP32[i14 + 4 >> 2] | 0;
    if ((i14 | 0) == 0) {
     break L1;
    }
   }
   if ((i11 | 0) == 0) {
    break;
   }
   i12 = HEAP32[i11 + 12 >> 2] | 0;
   i15 = i1 + 32 | 0;
   if (((HEAP32[i15 >> 2] | 0) - 1 | 0) >>> 0 < 4 >>> 0) {
    i16 = __ZN3JSC29createNotEnoughArgumentsErrorEPNS_9ExecStateE(i1) | 0;
    i17 = (i16 | 0) == 0;
    i18 = HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
    i19 = i4 | 0;
    HEAP32[i19 >> 2] = (i17 ? 0 : 0) | i16;
    HEAP32[i19 + 4 >> 2] = i17 ? -6 : -5;
    __ZN3JSC2VM14throwExceptionEPNS_9ExecStateENS_7JSValueE(i3, i18, i1, i4);
    i18 = i3 | 0;
    i20 = HEAP32[i18 + 4 >> 2] | 0;
    i21 = HEAP32[i18 >> 2] | 0;
    STACKTOP = i2;
    return (tempRet0 = i20, i21) | 0;
   }
   i18 = i1 + 48 | 0;
   i17 = HEAP32[i18 >> 2] | 0;
   i19 = HEAP32[i18 + 4 >> 2] | 0;
   d22 = +HEAPF64[i18 >> 3];
   i18 = i5 | 0;
   HEAP32[i18 >> 2] = i17;
   HEAP32[i18 + 4 >> 2] = i19;
   i18 = i19;
   do {
    if ((i18 | 0) == -1) {
     d23 = +(i17 | 0);
    } else {
     if (i18 >>> 0 < 4294967289 >>> 0) {
      d23 = d22;
      break;
     }
     d23 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i5, i1);
    }
   } while (0);
   d22 = d23;
   i18 = i1 + 16 | 0;
   i17 = HEAP32[i18 >> 2] | 0;
   i19 = (HEAP32[(i17 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i19 >> 2] & 0 | 0) == 0 & (HEAP32[i19 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i20 = -4;
    i21 = 0;
    STACKTOP = i2;
    return (tempRet0 = i20, i21) | 0;
   }
   do {
    if (((HEAP32[i15 >> 2] | 0) - 1 | 0) >>> 0 > 1 >>> 0) {
     i19 = i1 + 56 | 0;
     i16 = HEAP32[i19 >> 2] | 0;
     i24 = HEAP32[i19 + 4 >> 2] | 0;
     i19 = i6 | 0;
     HEAP32[i19 >> 2] = i16;
     HEAP32[i19 + 4 >> 2] = i24;
     i19 = i24;
     if ((i19 | 0) == -1) {
      d25 = +(i16 | 0);
      i26 = i17;
      break;
     }
     if (i19 >>> 0 >= 4294967289 >>> 0) {
      i27 = 23;
      break;
     }
     d25 = +HEAPF64[i6 >> 3];
     i26 = i17;
    } else {
     HEAP32[i6 + 4 >> 2] = -4;
     HEAP32[i6 >> 2] = 0;
     i27 = 23;
    }
   } while (0);
   if ((i27 | 0) == 23) {
    d28 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i6, i1);
    d25 = d28;
    i26 = HEAP32[i18 >> 2] | 0;
   }
   d28 = d25;
   i17 = (HEAP32[(i26 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i17 >> 2] & 0 | 0) == 0 & (HEAP32[i17 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i20 = -4;
    i21 = 0;
    STACKTOP = i2;
    return (tempRet0 = i20, i21) | 0;
   }
   do {
    if (((HEAP32[i15 >> 2] | 0) - 1 | 0) >>> 0 > 2 >>> 0) {
     i17 = i1 + 64 | 0;
     i19 = HEAP32[i17 >> 2] | 0;
     i16 = HEAP32[i17 + 4 >> 2] | 0;
     i17 = i7 | 0;
     HEAP32[i17 >> 2] = i19;
     HEAP32[i17 + 4 >> 2] = i16;
     i17 = i16;
     if ((i17 | 0) == -1) {
      d29 = +(i19 | 0);
      i30 = i26;
      break;
     }
     if (i17 >>> 0 >= 4294967289 >>> 0) {
      i27 = 30;
      break;
     }
     d29 = +HEAPF64[i7 >> 3];
     i30 = i26;
    } else {
     HEAP32[i7 + 4 >> 2] = -4;
     HEAP32[i7 >> 2] = 0;
     i27 = 30;
    }
   } while (0);
   if ((i27 | 0) == 30) {
    d31 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i7, i1);
    d29 = d31;
    i30 = HEAP32[i18 >> 2] | 0;
   }
   d31 = d29;
   i17 = (HEAP32[(i30 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i17 >> 2] & 0 | 0) == 0 & (HEAP32[i17 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i20 = -4;
    i21 = 0;
    STACKTOP = i2;
    return (tempRet0 = i20, i21) | 0;
   }
   do {
    if (((HEAP32[i15 >> 2] | 0) - 1 | 0) >>> 0 > 3 >>> 0) {
     i17 = i1 + 72 | 0;
     i19 = HEAP32[i17 >> 2] | 0;
     i16 = HEAP32[i17 + 4 >> 2] | 0;
     i17 = i8 | 0;
     HEAP32[i17 >> 2] = i19;
     HEAP32[i17 + 4 >> 2] = i16;
     i17 = i16;
     if ((i17 | 0) == -1) {
      d32 = +(i19 | 0);
      i33 = i30;
      break;
     }
     if (i17 >>> 0 >= 4294967289 >>> 0) {
      i27 = 37;
      break;
     }
     d32 = +HEAPF64[i8 >> 3];
     i33 = i30;
    } else {
     HEAP32[i8 + 4 >> 2] = -4;
     HEAP32[i8 >> 2] = 0;
     i27 = 37;
    }
   } while (0);
   if ((i27 | 0) == 37) {
    d34 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i8, i1);
    d32 = d34;
    i33 = HEAP32[i18 >> 2] | 0;
   }
   i15 = (HEAP32[(i33 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i15 >> 2] & 0 | 0) == 0 & (HEAP32[i15 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i20 = -4;
    i21 = 0;
    STACKTOP = i2;
    return (tempRet0 = i20, i21) | 0;
   }
   __ZN7WebCore24CanvasRenderingContext2D9clearRectEffff(i12, d22, d28, d31, d32);
   i20 = -4;
   i21 = 0;
   STACKTOP = i2;
   return (tempRet0 = i20, i21) | 0;
  }
 } while (0);
 i33 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 i1 = (i33 | 0) == 0;
 i20 = (i1 ? -6 : -5) | 0;
 i21 = (i1 ? 0 : 0) | i33;
 STACKTOP = i2;
 return (tempRet0 = i20, i21) | 0;
}
function __ZN7WebCore51jsCanvasRenderingContext2DPrototypeFunctionFillRectEPN3JSC9ExecStateE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, d22 = +0, d23 = +0, i24 = 0, d25 = +0, i26 = 0, i27 = 0, d28 = +0, d29 = +0, i30 = 0, d31 = +0, d32 = +0, i33 = 0, d34 = +0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 40 | 0;
 i9 = i1 + 40 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 i11 = i10;
 L1 : do {
  if ((i10 & 0 | 0) == 0 & (HEAP32[i9 + 4 >> 2] & -1 | 0) == (-5 | 0)) {
   i12 = i11;
   if ((HEAP32[(i11 & -65536) + 1048 >> 2] | 0) == 2) {
    i13 = i12 + 8 | 0;
   } else {
    i13 = (HEAP32[i12 >> 2] | 0) + 32 | 0;
   }
   i12 = HEAP32[i13 >> 2] | 0;
   if ((i12 | 0) == 0) {
    break;
   } else {
    i14 = i12;
   }
   while (1) {
    if ((i14 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i14 = HEAP32[i14 + 4 >> 2] | 0;
    if ((i14 | 0) == 0) {
     break L1;
    }
   }
   if ((i11 | 0) == 0) {
    break;
   }
   i12 = HEAP32[i11 + 12 >> 2] | 0;
   i15 = i1 + 32 | 0;
   if (((HEAP32[i15 >> 2] | 0) - 1 | 0) >>> 0 < 4 >>> 0) {
    i16 = __ZN3JSC29createNotEnoughArgumentsErrorEPNS_9ExecStateE(i1) | 0;
    i17 = (i16 | 0) == 0;
    i18 = HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
    i19 = i4 | 0;
    HEAP32[i19 >> 2] = (i17 ? 0 : 0) | i16;
    HEAP32[i19 + 4 >> 2] = i17 ? -6 : -5;
    __ZN3JSC2VM14throwExceptionEPNS_9ExecStateENS_7JSValueE(i3, i18, i1, i4);
    i18 = i3 | 0;
    i20 = HEAP32[i18 + 4 >> 2] | 0;
    i21 = HEAP32[i18 >> 2] | 0;
    STACKTOP = i2;
    return (tempRet0 = i20, i21) | 0;
   }
   i18 = i1 + 48 | 0;
   i17 = HEAP32[i18 >> 2] | 0;
   i19 = HEAP32[i18 + 4 >> 2] | 0;
   d22 = +HEAPF64[i18 >> 3];
   i18 = i5 | 0;
   HEAP32[i18 >> 2] = i17;
   HEAP32[i18 + 4 >> 2] = i19;
   i18 = i19;
   do {
    if ((i18 | 0) == -1) {
     d23 = +(i17 | 0);
    } else {
     if (i18 >>> 0 < 4294967289 >>> 0) {
      d23 = d22;
      break;
     }
     d23 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i5, i1);
    }
   } while (0);
   d22 = d23;
   i18 = i1 + 16 | 0;
   i17 = HEAP32[i18 >> 2] | 0;
   i19 = (HEAP32[(i17 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i19 >> 2] & 0 | 0) == 0 & (HEAP32[i19 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i20 = -4;
    i21 = 0;
    STACKTOP = i2;
    return (tempRet0 = i20, i21) | 0;
   }
   do {
    if (((HEAP32[i15 >> 2] | 0) - 1 | 0) >>> 0 > 1 >>> 0) {
     i19 = i1 + 56 | 0;
     i16 = HEAP32[i19 >> 2] | 0;
     i24 = HEAP32[i19 + 4 >> 2] | 0;
     i19 = i6 | 0;
     HEAP32[i19 >> 2] = i16;
     HEAP32[i19 + 4 >> 2] = i24;
     i19 = i24;
     if ((i19 | 0) == -1) {
      d25 = +(i16 | 0);
      i26 = i17;
      break;
     }
     if (i19 >>> 0 >= 4294967289 >>> 0) {
      i27 = 23;
      break;
     }
     d25 = +HEAPF64[i6 >> 3];
     i26 = i17;
    } else {
     HEAP32[i6 + 4 >> 2] = -4;
     HEAP32[i6 >> 2] = 0;
     i27 = 23;
    }
   } while (0);
   if ((i27 | 0) == 23) {
    d28 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i6, i1);
    d25 = d28;
    i26 = HEAP32[i18 >> 2] | 0;
   }
   d28 = d25;
   i17 = (HEAP32[(i26 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i17 >> 2] & 0 | 0) == 0 & (HEAP32[i17 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i20 = -4;
    i21 = 0;
    STACKTOP = i2;
    return (tempRet0 = i20, i21) | 0;
   }
   do {
    if (((HEAP32[i15 >> 2] | 0) - 1 | 0) >>> 0 > 2 >>> 0) {
     i17 = i1 + 64 | 0;
     i19 = HEAP32[i17 >> 2] | 0;
     i16 = HEAP32[i17 + 4 >> 2] | 0;
     i17 = i7 | 0;
     HEAP32[i17 >> 2] = i19;
     HEAP32[i17 + 4 >> 2] = i16;
     i17 = i16;
     if ((i17 | 0) == -1) {
      d29 = +(i19 | 0);
      i30 = i26;
      break;
     }
     if (i17 >>> 0 >= 4294967289 >>> 0) {
      i27 = 30;
      break;
     }
     d29 = +HEAPF64[i7 >> 3];
     i30 = i26;
    } else {
     HEAP32[i7 + 4 >> 2] = -4;
     HEAP32[i7 >> 2] = 0;
     i27 = 30;
    }
   } while (0);
   if ((i27 | 0) == 30) {
    d31 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i7, i1);
    d29 = d31;
    i30 = HEAP32[i18 >> 2] | 0;
   }
   d31 = d29;
   i17 = (HEAP32[(i30 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i17 >> 2] & 0 | 0) == 0 & (HEAP32[i17 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i20 = -4;
    i21 = 0;
    STACKTOP = i2;
    return (tempRet0 = i20, i21) | 0;
   }
   do {
    if (((HEAP32[i15 >> 2] | 0) - 1 | 0) >>> 0 > 3 >>> 0) {
     i17 = i1 + 72 | 0;
     i19 = HEAP32[i17 >> 2] | 0;
     i16 = HEAP32[i17 + 4 >> 2] | 0;
     i17 = i8 | 0;
     HEAP32[i17 >> 2] = i19;
     HEAP32[i17 + 4 >> 2] = i16;
     i17 = i16;
     if ((i17 | 0) == -1) {
      d32 = +(i19 | 0);
      i33 = i30;
      break;
     }
     if (i17 >>> 0 >= 4294967289 >>> 0) {
      i27 = 37;
      break;
     }
     d32 = +HEAPF64[i8 >> 3];
     i33 = i30;
    } else {
     HEAP32[i8 + 4 >> 2] = -4;
     HEAP32[i8 >> 2] = 0;
     i27 = 37;
    }
   } while (0);
   if ((i27 | 0) == 37) {
    d34 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i8, i1);
    d32 = d34;
    i33 = HEAP32[i18 >> 2] | 0;
   }
   i15 = (HEAP32[(i33 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i15 >> 2] & 0 | 0) == 0 & (HEAP32[i15 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i20 = -4;
    i21 = 0;
    STACKTOP = i2;
    return (tempRet0 = i20, i21) | 0;
   }
   __ZN7WebCore24CanvasRenderingContext2D8fillRectEffff(i12, d22, d28, d31, d32);
   i20 = -4;
   i21 = 0;
   STACKTOP = i2;
   return (tempRet0 = i20, i21) | 0;
  }
 } while (0);
 i33 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 i1 = (i33 | 0) == 0;
 i20 = (i1 ? -6 : -5) | 0;
 i21 = (i1 ? 0 : 0) | i33;
 STACKTOP = i2;
 return (tempRet0 = i20, i21) | 0;
}
function __ZN7WebCore47jsCanvasRenderingContext2DPrototypeFunctionRectEPN3JSC9ExecStateE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, d22 = +0, d23 = +0, i24 = 0, d25 = +0, i26 = 0, i27 = 0, d28 = +0, d29 = +0, i30 = 0, d31 = +0, d32 = +0, i33 = 0, d34 = +0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 40 | 0;
 i9 = i1 + 40 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 i11 = i10;
 L1 : do {
  if ((i10 & 0 | 0) == 0 & (HEAP32[i9 + 4 >> 2] & -1 | 0) == (-5 | 0)) {
   i12 = i11;
   if ((HEAP32[(i11 & -65536) + 1048 >> 2] | 0) == 2) {
    i13 = i12 + 8 | 0;
   } else {
    i13 = (HEAP32[i12 >> 2] | 0) + 32 | 0;
   }
   i12 = HEAP32[i13 >> 2] | 0;
   if ((i12 | 0) == 0) {
    break;
   } else {
    i14 = i12;
   }
   while (1) {
    if ((i14 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i14 = HEAP32[i14 + 4 >> 2] | 0;
    if ((i14 | 0) == 0) {
     break L1;
    }
   }
   if ((i11 | 0) == 0) {
    break;
   }
   i12 = HEAP32[i11 + 12 >> 2] | 0;
   i15 = i1 + 32 | 0;
   if (((HEAP32[i15 >> 2] | 0) - 1 | 0) >>> 0 < 4 >>> 0) {
    i16 = __ZN3JSC29createNotEnoughArgumentsErrorEPNS_9ExecStateE(i1) | 0;
    i17 = (i16 | 0) == 0;
    i18 = HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
    i19 = i4 | 0;
    HEAP32[i19 >> 2] = (i17 ? 0 : 0) | i16;
    HEAP32[i19 + 4 >> 2] = i17 ? -6 : -5;
    __ZN3JSC2VM14throwExceptionEPNS_9ExecStateENS_7JSValueE(i3, i18, i1, i4);
    i18 = i3 | 0;
    i20 = HEAP32[i18 + 4 >> 2] | 0;
    i21 = HEAP32[i18 >> 2] | 0;
    STACKTOP = i2;
    return (tempRet0 = i20, i21) | 0;
   }
   i18 = i1 + 48 | 0;
   i17 = HEAP32[i18 >> 2] | 0;
   i19 = HEAP32[i18 + 4 >> 2] | 0;
   d22 = +HEAPF64[i18 >> 3];
   i18 = i5 | 0;
   HEAP32[i18 >> 2] = i17;
   HEAP32[i18 + 4 >> 2] = i19;
   i18 = i19;
   do {
    if ((i18 | 0) == -1) {
     d23 = +(i17 | 0);
    } else {
     if (i18 >>> 0 < 4294967289 >>> 0) {
      d23 = d22;
      break;
     }
     d23 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i5, i1);
    }
   } while (0);
   d22 = d23;
   i18 = i1 + 16 | 0;
   i17 = HEAP32[i18 >> 2] | 0;
   i19 = (HEAP32[(i17 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i19 >> 2] & 0 | 0) == 0 & (HEAP32[i19 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i20 = -4;
    i21 = 0;
    STACKTOP = i2;
    return (tempRet0 = i20, i21) | 0;
   }
   do {
    if (((HEAP32[i15 >> 2] | 0) - 1 | 0) >>> 0 > 1 >>> 0) {
     i19 = i1 + 56 | 0;
     i16 = HEAP32[i19 >> 2] | 0;
     i24 = HEAP32[i19 + 4 >> 2] | 0;
     i19 = i6 | 0;
     HEAP32[i19 >> 2] = i16;
     HEAP32[i19 + 4 >> 2] = i24;
     i19 = i24;
     if ((i19 | 0) == -1) {
      d25 = +(i16 | 0);
      i26 = i17;
      break;
     }
     if (i19 >>> 0 >= 4294967289 >>> 0) {
      i27 = 23;
      break;
     }
     d25 = +HEAPF64[i6 >> 3];
     i26 = i17;
    } else {
     HEAP32[i6 + 4 >> 2] = -4;
     HEAP32[i6 >> 2] = 0;
     i27 = 23;
    }
   } while (0);
   if ((i27 | 0) == 23) {
    d28 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i6, i1);
    d25 = d28;
    i26 = HEAP32[i18 >> 2] | 0;
   }
   d28 = d25;
   i17 = (HEAP32[(i26 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i17 >> 2] & 0 | 0) == 0 & (HEAP32[i17 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i20 = -4;
    i21 = 0;
    STACKTOP = i2;
    return (tempRet0 = i20, i21) | 0;
   }
   do {
    if (((HEAP32[i15 >> 2] | 0) - 1 | 0) >>> 0 > 2 >>> 0) {
     i17 = i1 + 64 | 0;
     i19 = HEAP32[i17 >> 2] | 0;
     i16 = HEAP32[i17 + 4 >> 2] | 0;
     i17 = i7 | 0;
     HEAP32[i17 >> 2] = i19;
     HEAP32[i17 + 4 >> 2] = i16;
     i17 = i16;
     if ((i17 | 0) == -1) {
      d29 = +(i19 | 0);
      i30 = i26;
      break;
     }
     if (i17 >>> 0 >= 4294967289 >>> 0) {
      i27 = 30;
      break;
     }
     d29 = +HEAPF64[i7 >> 3];
     i30 = i26;
    } else {
     HEAP32[i7 + 4 >> 2] = -4;
     HEAP32[i7 >> 2] = 0;
     i27 = 30;
    }
   } while (0);
   if ((i27 | 0) == 30) {
    d31 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i7, i1);
    d29 = d31;
    i30 = HEAP32[i18 >> 2] | 0;
   }
   d31 = d29;
   i17 = (HEAP32[(i30 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i17 >> 2] & 0 | 0) == 0 & (HEAP32[i17 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i20 = -4;
    i21 = 0;
    STACKTOP = i2;
    return (tempRet0 = i20, i21) | 0;
   }
   do {
    if (((HEAP32[i15 >> 2] | 0) - 1 | 0) >>> 0 > 3 >>> 0) {
     i17 = i1 + 72 | 0;
     i19 = HEAP32[i17 >> 2] | 0;
     i16 = HEAP32[i17 + 4 >> 2] | 0;
     i17 = i8 | 0;
     HEAP32[i17 >> 2] = i19;
     HEAP32[i17 + 4 >> 2] = i16;
     i17 = i16;
     if ((i17 | 0) == -1) {
      d32 = +(i19 | 0);
      i33 = i30;
      break;
     }
     if (i17 >>> 0 >= 4294967289 >>> 0) {
      i27 = 37;
      break;
     }
     d32 = +HEAPF64[i8 >> 3];
     i33 = i30;
    } else {
     HEAP32[i8 + 4 >> 2] = -4;
     HEAP32[i8 >> 2] = 0;
     i27 = 37;
    }
   } while (0);
   if ((i27 | 0) == 37) {
    d34 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i8, i1);
    d32 = d34;
    i33 = HEAP32[i18 >> 2] | 0;
   }
   i15 = (HEAP32[(i33 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i15 >> 2] & 0 | 0) == 0 & (HEAP32[i15 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i20 = -4;
    i21 = 0;
    STACKTOP = i2;
    return (tempRet0 = i20, i21) | 0;
   }
   __ZN7WebCore17CanvasPathMethods4rectEffff(i12 + 32 | 0, d22, d28, d31, d32);
   i20 = -4;
   i21 = 0;
   STACKTOP = i2;
   return (tempRet0 = i20, i21) | 0;
  }
 } while (0);
 i33 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 i1 = (i33 | 0) == 0;
 i20 = (i1 ? -6 : -5) | 0;
 i21 = (i1 ? 0 : 0) | i33;
 STACKTOP = i2;
 return (tempRet0 = i20, i21) | 0;
}
function __ZNK3JSC8JSObject3getEPNS_9ExecStateENS_12PropertyNameE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i6 = i4;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i4 >> 2] = HEAP32[i6 >> 2];
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i5 + 48 | 0;
 i13 = i5 + 56 | 0;
 i14 = (i2 | 0) == 0;
 i15 = i13 + 16 | 0;
 HEAP32[i15 >> 2] = 0;
 i16 = i13 + 20 | 0;
 HEAP32[i16 >> 2] = -1;
 i17 = i13 + 24 | 0;
 HEAP32[i17 >> 2] = (i14 ? 0 : 0) | i2;
 HEAP32[i17 + 4 >> 2] = i14 ? -6 : -5;
 i14 = HEAP32[i4 >> 2] | 0;
 i4 = i3 + 16 | 0;
 i18 = i9 | 0;
 i19 = i11 | 0;
 i20 = i12 | 0;
 i21 = i2;
 while (1) {
  i22 = i21 | 0;
  i2 = HEAP32[i22 >> 2] | 0;
  if ((HEAP8[i2 + 53 | 0] & 32) == 0) {
   i23 = HEAP32[(HEAP32[i4 >> 2] & -65536) + 1076 >> 2] | 0;
   HEAP32[i18 >> 2] = i14;
   i24 = __ZN3JSC9Structure3getERNS_2VMENS_12PropertyNameERjRPNS_6JSCellE(i2, i23, i9, i7, i8) | 0;
   if ((i24 | 0) != -1) {
    i25 = 4;
    break;
   }
   HEAP32[i19 >> 2] = i14;
   if (__ZN3JSC8JSObject22getOwnPropertySlotSlowEPNS_9ExecStateENS_12PropertyNameERNS_12PropertySlotE(i21, i3, i11, i13) | 0) {
    break;
   }
  } else {
   i23 = HEAP32[i2 >> 2] | 0;
   if ((i23 | 0) != 0) {
    if ((i23 | 0) != (HEAP32[i23 >> 2] | 0)) {
     i25 = 13;
     break;
    }
   }
   i23 = HEAP32[(HEAP32[((HEAP32[(i21 & -65536) + 1048 >> 2] | 0) == 2 ? i21 + 8 | 0 : i2 + 32 | 0) >> 2] | 0) + 52 >> 2] | 0;
   HEAP32[i20 >> 2] = i14;
   if (FUNCTION_TABLE_iiiii[i23 & 15](i21, i3, i12, i13) | 0) {
    break;
   }
  }
  i23 = (HEAP32[i22 >> 2] | 0) + 8 | 0;
  i2 = HEAP32[i23 >> 2] | 0;
  if (!((i2 & 0 | 0) == 0 & (HEAP32[i23 + 4 >> 2] & -1 | 0) == (-5 | 0))) {
   i25 = 24;
   break;
  }
  i23 = i2;
  if ((HEAPU8[(HEAP32[i23 >> 2] | 0) + 52 | 0] | 0) >>> 0 <= 16 >>> 0) {
   i25 = 24;
   break;
  }
  i21 = i23;
 }
 L13 : do {
  if ((i25 | 0) == 24) {
   HEAP32[i1 + 4 >> 2] = -4;
   HEAP32[i1 >> 2] = 0;
   STACKTOP = i5;
   return;
  } else if ((i25 | 0) == 4) {
   if ((i24 | 0) < 100) {
    i26 = i21 + (i24 + 1 << 3) | 0;
   } else {
    i26 = (HEAP32[i21 + 4 >> 2] | 0) - 8 + (99 - i24 << 3) | 0;
   }
   i12 = i26 | 0;
   i20 = HEAP32[i12 >> 2] | 0;
   i11 = HEAP32[i12 + 4 >> 2] | 0;
   i12 = i11;
   do {
    if ((HEAP8[(HEAP32[i22 >> 2] | 0) + 58 | 0] & 8) != 0 & ((i12 | 0) == (-5 | 0) & 0 == 0)) {
     if ((HEAP8[(HEAP32[i20 >> 2] | 0) + 52 | 0] | 0) != 8) {
      break;
     }
     i19 = i10 | 0;
     HEAP32[i19 >> 2] = i20 & -1;
     HEAP32[i19 + 4 >> 2] = i11 & 0 | -5;
     __ZN3JSC8JSObject22fillGetterPropertySlotERNS_12PropertySlotENS_7JSValueEji(i21, i13, i10, HEAP32[i7 >> 2] | 0, i24);
     break L13;
    }
   } while (0);
   i19 = HEAP32[i7 >> 2] | 0;
   i8 = i13 + 8 | 0;
   HEAP32[i8 >> 2] = i20 & -1;
   HEAP32[i8 + 4 >> 2] = i12 | i11 & 0;
   HEAP32[i13 >> 2] = i19;
   HEAP32[i13 + 32 >> 2] = i21;
   HEAP32[i15 >> 2] = 1;
   HEAP32[i16 >> 2] = i24;
  } else if ((i25 | 0) == 13) {
   _WTFCrash();
  }
 } while (0);
 i25 = HEAP32[i15 >> 2] | 0;
 if ((i25 | 0) == 1) {
  i15 = i13 + 8 | 0;
  i24 = HEAP32[i15 + 4 >> 2] | 0;
  i16 = i1 | 0;
  HEAP32[i16 >> 2] = HEAP32[i15 >> 2];
  HEAP32[i16 + 4 >> 2] = i24;
  STACKTOP = i5;
  return;
 } else if ((i25 | 0) == 2) {
  __ZNK3JSC12PropertySlot14functionGetterEPNS_9ExecStateE(i1, i13, i3);
  STACKTOP = i5;
  return;
 } else if ((i25 | 0) == 4) {
  i25 = i13 + 8 | 0;
  i24 = HEAP32[i13 + 32 >> 2] | 0;
  i16 = (i24 | 0) == 0;
  i15 = FUNCTION_TABLE_iiiiiii[HEAP32[i25 >> 2] & 63](i3, (i16 ? 0 : 0) | i24, (i16 ? -6 : -5) | 0, HEAP32[i17 >> 2] | 0, HEAP32[i17 + 4 >> 2] | 0, HEAP32[i25 + 4 >> 2] | 0) | 0;
  i25 = i1 | 0;
  HEAP32[i25 >> 2] = i15;
  HEAP32[i25 + 4 >> 2] = tempRet0;
  STACKTOP = i5;
  return;
 } else {
  i25 = HEAP32[i13 + 8 >> 2] | 0;
  i15 = HEAP32[i13 + 32 >> 2] | 0;
  i13 = (i15 | 0) == 0;
  i16 = HEAP32[i17 >> 2] | 0;
  i24 = HEAP32[i17 + 4 >> 2] | 0;
  HEAP32[i6 >> 2] = i14;
  i14 = FUNCTION_TABLE_iiiiiii[i25 & 63](i3, (i13 ? 0 : 0) | i15, (i13 ? -6 : -5) | 0, i16, i24, i6) | 0;
  i6 = i1 | 0;
  HEAP32[i6 >> 2] = i14;
  HEAP32[i6 + 4 >> 2] = tempRet0;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore54jsCanvasRenderingContext2DPrototypeFunctionMeasureTextEPN3JSC9ExecStateE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 40 | 0;
 i9 = i1 + 40 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 i11 = i10;
 L1 : do {
  if ((i10 & 0 | 0) == 0 & (HEAP32[i9 + 4 >> 2] & -1 | 0) == (-5 | 0)) {
   i12 = i11;
   if ((HEAP32[(i11 & -65536) + 1048 >> 2] | 0) == 2) {
    i13 = i12 + 8 | 0;
   } else {
    i13 = (HEAP32[i12 >> 2] | 0) + 32 | 0;
   }
   i12 = HEAP32[i13 >> 2] | 0;
   if ((i12 | 0) == 0) {
    break;
   } else {
    i14 = i12;
   }
   while (1) {
    if ((i14 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i14 = HEAP32[i14 + 4 >> 2] | 0;
    if ((i14 | 0) == 0) {
     break L1;
    }
   }
   i12 = i11;
   if ((i11 | 0) == 0) {
    break;
   }
   i15 = HEAP32[i12 + 12 >> 2] | 0;
   if ((HEAP32[i1 + 32 >> 2] | 0) == 1) {
    i16 = __ZN3JSC29createNotEnoughArgumentsErrorEPNS_9ExecStateE(i1) | 0;
    i17 = (i16 | 0) == 0;
    i18 = HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
    i19 = i4 | 0;
    HEAP32[i19 >> 2] = (i17 ? 0 : 0) | i16;
    HEAP32[i19 + 4 >> 2] = i17 ? -6 : -5;
    __ZN3JSC2VM14throwExceptionEPNS_9ExecStateENS_7JSValueE(i3, i18, i1, i4);
    i18 = i3 | 0;
    i20 = HEAP32[i18 + 4 >> 2] | 0;
    i21 = HEAP32[i18 >> 2] | 0;
    STACKTOP = i2;
    return (tempRet0 = i20, i21) | 0;
   }
   i18 = i1 + 48 | 0;
   i17 = HEAP32[i18 >> 2] | 0;
   i19 = HEAP32[i18 + 4 >> 2] | 0;
   do {
    if ((i17 & 0 | 0) == 0 & (i19 & -1 | 0) == (-6 | 0)) {
     HEAP32[i5 >> 2] = 0;
    } else {
     i18 = i6 | 0;
     HEAP32[i18 >> 2] = i17;
     HEAP32[i18 + 4 >> 2] = i19;
     i18 = i17;
     do {
      if ((i17 & 0 | 0) == 0 & (i19 & -1 | 0) == (-5 | 0)) {
       if ((HEAP8[(HEAP32[i18 >> 2] | 0) + 52 | 0] | 0) != 5) {
        i22 = 17;
        break;
       }
       i23 = i18;
      } else {
       i22 = 17;
      }
     } while (0);
     if ((i22 | 0) == 17) {
      i23 = __ZNK3JSC7JSValue16toStringSlowCaseEPNS_9ExecStateE(i6, i1) | 0;
     }
     i18 = i23 + 12 | 0;
     i16 = HEAP32[i18 >> 2] | 0;
     if ((i16 | 0) == 0) {
      __ZNK3JSC12JSRopeString11resolveRopeEPNS_9ExecStateE(i23, i1);
      i24 = HEAP32[i18 >> 2] | 0;
      HEAP32[i5 >> 2] = i24;
      if ((i24 | 0) == 0) {
       break;
      } else {
       i25 = i24;
      }
     } else {
      HEAP32[i5 >> 2] = i16;
      i25 = i16;
     }
     i16 = i25 | 0;
     HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
    }
   } while (0);
   i19 = (HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if ((HEAP32[i19 >> 2] & 0 | 0) == 0 & (HEAP32[i19 + 4 >> 2] & -1 | 0) == (-6 | 0)) {
    i19 = HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] | 0;
    __ZN7WebCore24CanvasRenderingContext2D11measureTextERKN3WTF6StringE(i8, i15, i5);
    i17 = i8 | 0;
    __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_11TextMetricsE(i7, i1, i19, HEAP32[i17 >> 2] | 0);
    i19 = HEAP32[i17 >> 2] | 0;
    do {
     if ((i19 | 0) != 0) {
      i17 = i19 | 0;
      i16 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
      if ((i16 | 0) == 0) {
       __ZN3WTF8fastFreeEPv(i19);
       break;
      } else {
       HEAP32[i17 >> 2] = i16;
       break;
      }
     }
    } while (0);
    i19 = i7 | 0;
    i26 = HEAP32[i19 + 4 >> 2] | 0;
    i27 = HEAP32[i19 >> 2] | 0;
   } else {
    i26 = -4;
    i27 = 0;
   }
   i19 = HEAP32[i5 >> 2] | 0;
   if ((i19 | 0) == 0) {
    i20 = i26;
    i21 = i27;
    STACKTOP = i2;
    return (tempRet0 = i20, i21) | 0;
   }
   i15 = i19 | 0;
   i12 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i19);
    i20 = i26;
    i21 = i27;
    STACKTOP = i2;
    return (tempRet0 = i20, i21) | 0;
   } else {
    HEAP32[i15 >> 2] = i12;
    i20 = i26;
    i21 = i27;
    STACKTOP = i2;
    return (tempRet0 = i20, i21) | 0;
   }
  }
 } while (0);
 i27 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 i1 = (i27 | 0) == 0;
 i20 = (i1 ? -6 : -5) | 0;
 i21 = (i1 ? 0 : 0) | i27;
 STACKTOP = i2;
 return (tempRet0 = i20, i21) | 0;
}
function __ZN7WebCore47jsCanvasRenderingContext2DPrototypeFunctionFillEPN3JSC9ExecStateE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i1 + 40 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = i7;
 L1 : do {
  if ((i7 & 0 | 0) == 0 & (HEAP32[i6 + 4 >> 2] & -1 | 0) == (-5 | 0)) {
   i9 = i8;
   if ((HEAP32[(i8 & -65536) + 1048 >> 2] | 0) == 2) {
    i10 = i9 + 8 | 0;
   } else {
    i10 = (HEAP32[i9 >> 2] | 0) + 32 | 0;
   }
   i9 = HEAP32[i10 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   } else {
    i11 = i9;
   }
   while (1) {
    if ((i11 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i11 = HEAP32[i11 + 4 >> 2] | 0;
    if ((i11 | 0) == 0) {
     break L1;
    }
   }
   if ((i8 | 0) == 0) {
    break;
   }
   i9 = HEAP32[i8 + 12 >> 2] | 0;
   if ((HEAP32[i1 + 32 >> 2] | 0) == 1) {
    __ZN3WTF6StringC1EPKc(i3, H_BASE + 840 | 0);
    __ZN7WebCore24CanvasRenderingContext2D4fillERKN3WTF6StringE(i9, i3);
    i12 = HEAP32[i3 >> 2] | 0;
    if ((i12 | 0) == 0) {
     i13 = -4;
     i14 = 0;
     STACKTOP = i2;
     return (tempRet0 = i13, i14) | 0;
    }
    i15 = i12 | 0;
    i16 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
    if ((i16 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i12);
     i13 = -4;
     i14 = 0;
     STACKTOP = i2;
     return (tempRet0 = i13, i14) | 0;
    } else {
     HEAP32[i15 >> 2] = i16;
     i13 = -4;
     i14 = 0;
     STACKTOP = i2;
     return (tempRet0 = i13, i14) | 0;
    }
   }
   i16 = i1 + 48 | 0;
   i15 = HEAP32[i16 >> 2] | 0;
   i12 = HEAP32[i16 + 4 >> 2] | 0;
   do {
    if ((i15 & 0 | 0) == 0 & (i12 & -1 | 0) == (-6 | 0)) {
     HEAP32[i4 >> 2] = 0;
    } else {
     i16 = i5 | 0;
     HEAP32[i16 >> 2] = i15;
     HEAP32[i16 + 4 >> 2] = i12;
     i16 = i15;
     do {
      if ((i15 & 0 | 0) == 0 & (i12 & -1 | 0) == (-5 | 0)) {
       if ((HEAP8[(HEAP32[i16 >> 2] | 0) + 52 | 0] | 0) != 5) {
        i17 = 20;
        break;
       }
       i18 = i16;
      } else {
       i17 = 20;
      }
     } while (0);
     if ((i17 | 0) == 20) {
      i18 = __ZNK3JSC7JSValue16toStringSlowCaseEPNS_9ExecStateE(i5, i1) | 0;
     }
     i16 = i18 + 12 | 0;
     i19 = HEAP32[i16 >> 2] | 0;
     if ((i19 | 0) == 0) {
      __ZNK3JSC12JSRopeString11resolveRopeEPNS_9ExecStateE(i18, i1);
      i20 = HEAP32[i16 >> 2] | 0;
      HEAP32[i4 >> 2] = i20;
      if ((i20 | 0) == 0) {
       break;
      } else {
       i21 = i20;
      }
     } else {
      HEAP32[i4 >> 2] = i19;
      i21 = i19;
     }
     i19 = i21 | 0;
     HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 2;
    }
   } while (0);
   i12 = (HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   i15 = i4 | 0;
   L37 : do {
    if ((HEAP32[i12 >> 2] & 0 | 0) == 0 & (HEAP32[i12 + 4 >> 2] & -1 | 0) == (-6 | 0)) {
     i19 = HEAP32[i15 >> 2] | 0;
     do {
      if (!(__ZN3WTF5equalEPKNS_10StringImplEPKh(i19, H_BASE + 840 | 0) | 0)) {
       if (__ZN3WTF5equalEPKNS_10StringImplEPKh(i19, H_BASE + 672 | 0) | 0) {
        break;
       }
       i20 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
       i16 = (i20 | 0) == 0;
       i22 = (i16 ? -6 : -5) | 0;
       i23 = (i16 ? 0 : 0) | i20;
       break L37;
      }
     } while (0);
     __ZN7WebCore24CanvasRenderingContext2D4fillERKN3WTF6StringE(i9, i4);
     i22 = -4;
     i23 = 0;
    } else {
     i22 = -4;
     i23 = 0;
    }
   } while (0);
   i9 = HEAP32[i15 >> 2] | 0;
   if ((i9 | 0) == 0) {
    i13 = i22;
    i14 = i23;
    STACKTOP = i2;
    return (tempRet0 = i13, i14) | 0;
   }
   i12 = i9 | 0;
   i19 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i19 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    i13 = i22;
    i14 = i23;
    STACKTOP = i2;
    return (tempRet0 = i13, i14) | 0;
   } else {
    HEAP32[i12 >> 2] = i19;
    i13 = i22;
    i14 = i23;
    STACKTOP = i2;
    return (tempRet0 = i13, i14) | 0;
   }
  }
 } while (0);
 i23 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 i1 = (i23 | 0) == 0;
 i13 = (i1 ? -6 : -5) | 0;
 i14 = (i1 ? 0 : 0) | i23;
 STACKTOP = i2;
 return (tempRet0 = i13, i14) | 0;
}
function __ZN7WebCore47jsCanvasRenderingContext2DPrototypeFunctionClipEPN3JSC9ExecStateE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i1 + 40 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = i7;
 L1 : do {
  if ((i7 & 0 | 0) == 0 & (HEAP32[i6 + 4 >> 2] & -1 | 0) == (-5 | 0)) {
   i9 = i8;
   if ((HEAP32[(i8 & -65536) + 1048 >> 2] | 0) == 2) {
    i10 = i9 + 8 | 0;
   } else {
    i10 = (HEAP32[i9 >> 2] | 0) + 32 | 0;
   }
   i9 = HEAP32[i10 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   } else {
    i11 = i9;
   }
   while (1) {
    if ((i11 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i11 = HEAP32[i11 + 4 >> 2] | 0;
    if ((i11 | 0) == 0) {
     break L1;
    }
   }
   if ((i8 | 0) == 0) {
    break;
   }
   i9 = HEAP32[i8 + 12 >> 2] | 0;
   if ((HEAP32[i1 + 32 >> 2] | 0) == 1) {
    __ZN3WTF6StringC1EPKc(i3, H_BASE + 840 | 0);
    __ZN7WebCore24CanvasRenderingContext2D4clipERKN3WTF6StringE(i9, i3);
    i12 = HEAP32[i3 >> 2] | 0;
    if ((i12 | 0) == 0) {
     i13 = -4;
     i14 = 0;
     STACKTOP = i2;
     return (tempRet0 = i13, i14) | 0;
    }
    i15 = i12 | 0;
    i16 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
    if ((i16 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i12);
     i13 = -4;
     i14 = 0;
     STACKTOP = i2;
     return (tempRet0 = i13, i14) | 0;
    } else {
     HEAP32[i15 >> 2] = i16;
     i13 = -4;
     i14 = 0;
     STACKTOP = i2;
     return (tempRet0 = i13, i14) | 0;
    }
   }
   i16 = i1 + 48 | 0;
   i15 = HEAP32[i16 >> 2] | 0;
   i12 = HEAP32[i16 + 4 >> 2] | 0;
   do {
    if ((i15 & 0 | 0) == 0 & (i12 & -1 | 0) == (-6 | 0)) {
     HEAP32[i4 >> 2] = 0;
    } else {
     i16 = i5 | 0;
     HEAP32[i16 >> 2] = i15;
     HEAP32[i16 + 4 >> 2] = i12;
     i16 = i15;
     do {
      if ((i15 & 0 | 0) == 0 & (i12 & -1 | 0) == (-5 | 0)) {
       if ((HEAP8[(HEAP32[i16 >> 2] | 0) + 52 | 0] | 0) != 5) {
        i17 = 20;
        break;
       }
       i18 = i16;
      } else {
       i17 = 20;
      }
     } while (0);
     if ((i17 | 0) == 20) {
      i18 = __ZNK3JSC7JSValue16toStringSlowCaseEPNS_9ExecStateE(i5, i1) | 0;
     }
     i16 = i18 + 12 | 0;
     i19 = HEAP32[i16 >> 2] | 0;
     if ((i19 | 0) == 0) {
      __ZNK3JSC12JSRopeString11resolveRopeEPNS_9ExecStateE(i18, i1);
      i20 = HEAP32[i16 >> 2] | 0;
      HEAP32[i4 >> 2] = i20;
      if ((i20 | 0) == 0) {
       break;
      } else {
       i21 = i20;
      }
     } else {
      HEAP32[i4 >> 2] = i19;
      i21 = i19;
     }
     i19 = i21 | 0;
     HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 2;
    }
   } while (0);
   i12 = (HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   i15 = i4 | 0;
   L37 : do {
    if ((HEAP32[i12 >> 2] & 0 | 0) == 0 & (HEAP32[i12 + 4 >> 2] & -1 | 0) == (-6 | 0)) {
     i19 = HEAP32[i15 >> 2] | 0;
     do {
      if (!(__ZN3WTF5equalEPKNS_10StringImplEPKh(i19, H_BASE + 840 | 0) | 0)) {
       if (__ZN3WTF5equalEPKNS_10StringImplEPKh(i19, H_BASE + 672 | 0) | 0) {
        break;
       }
       i20 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
       i16 = (i20 | 0) == 0;
       i22 = (i16 ? -6 : -5) | 0;
       i23 = (i16 ? 0 : 0) | i20;
       break L37;
      }
     } while (0);
     __ZN7WebCore24CanvasRenderingContext2D4clipERKN3WTF6StringE(i9, i4);
     i22 = -4;
     i23 = 0;
    } else {
     i22 = -4;
     i23 = 0;
    }
   } while (0);
   i9 = HEAP32[i15 >> 2] | 0;
   if ((i9 | 0) == 0) {
    i13 = i22;
    i14 = i23;
    STACKTOP = i2;
    return (tempRet0 = i13, i14) | 0;
   }
   i12 = i9 | 0;
   i19 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i19 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    i13 = i22;
    i14 = i23;
    STACKTOP = i2;
    return (tempRet0 = i13, i14) | 0;
   } else {
    HEAP32[i12 >> 2] = i19;
    i13 = i22;
    i14 = i23;
    STACKTOP = i2;
    return (tempRet0 = i13, i14) | 0;
   }
  }
 } while (0);
 i23 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 i1 = (i23 | 0) == 0;
 i13 = (i1 ? -6 : -5) | 0;
 i14 = (i1 ? 0 : 0) | i23;
 STACKTOP = i2;
 return (tempRet0 = i13, i14) | 0;
}
function __ZN3WTF9HashTableIPNS_10StringImplENS_12KeyValuePairIS2_N3JSC4WeakINS4_8JSStringEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS2_EENS_7HashMapIS2_S7_SC_NS_10HashTraitsIS2_EENSE_IS7_EEE18KeyValuePairTraitsESF_E3addINS_17HashMapTranslatorISI_SC_EERKS2_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS2_S8_SA_SC_SI_SF_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
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
  __ZN3WTF9HashTableIPNS_10StringImplENS_12KeyValuePairIS2_N3JSC4WeakINS4_8JSStringEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS2_EENS_7HashMapIS2_S7_SC_NS_10HashTraitsIS2_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_(i2, i10, 0) | 0;
  i12 = HEAP32[i7 >> 2] | 0;
 } else {
  i12 = i8;
 }
 i8 = HEAP32[i2 + 8 >> 2] | 0;
 i10 = HEAP32[i3 >> 2] | 0;
 i11 = i10;
 i9 = i11 + ~(i11 << 15) | 0;
 i11 = (i9 >>> 10 ^ i9) * 9 & -1;
 i9 = i11 >>> 6 ^ i11;
 i11 = i9 + ~(i9 << 11) | 0;
 i9 = i11 >>> 16 ^ i11;
 i11 = i9 & i8;
 i13 = i12 + (i11 << 3) | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i14 | 0) == 0) {
   i15 = i13;
   i16 = i10;
  } else {
   i17 = (i9 >>> 23) + ~i9 | 0;
   i18 = i17 << 12 ^ i17;
   i17 = i18 >>> 7 ^ i18;
   i18 = i17 << 2 ^ i17;
   i17 = i18 >>> 20 ^ i18 | 1;
   i18 = 0;
   i19 = 0;
   i20 = i11;
   i21 = i13;
   i22 = i14;
   while (1) {
    if ((i22 | 0) == (i10 | 0)) {
     i23 = 8;
     break;
    }
    i24 = (i22 | 0) == -1 ? i21 : i19;
    i25 = (i18 | 0) == 0 ? i17 : i18;
    i26 = i25 + i20 & i8;
    i27 = i12 + (i26 << 3) | 0;
    i28 = HEAP32[i27 >> 2] | 0;
    if ((i28 | 0) == 0) {
     i23 = 10;
     break;
    } else {
     i18 = i25;
     i19 = i24;
     i20 = i26;
     i21 = i27;
     i22 = i28;
    }
   }
   if ((i23 | 0) == 8) {
    i22 = i12 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i20 = i1;
    HEAP32[i20 >> 2] = i21;
    HEAP32[i20 + 4 >> 2] = i22;
    HEAP8[i1 + 8 | 0] = 0;
    STACKTOP = i4;
    return;
   } else if ((i23 | 0) == 10) {
    if ((i24 | 0) == 0) {
     i15 = i27;
     i16 = i10;
     break;
    }
    i22 = i24;
    HEAP32[i22 >> 2] = 0;
    HEAP32[i22 + 4 >> 2] = 0;
    i22 = i2 + 16 | 0;
    HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) - 1;
    i15 = i24;
    i16 = HEAP32[i3 >> 2] | 0;
    break;
   }
  }
 } while (0);
 HEAP32[i15 >> 2] = i16;
 i16 = i6 | 0;
 i6 = i5 | 0;
 HEAP32[i16 >> 2] = 0;
 i5 = i15 + 4 | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i6 >> 2] = i3;
 do {
  if ((i3 | 0) != 0) {
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i6);
   if ((HEAP32[i16 >> 2] | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i16);
  }
 } while (0);
 i16 = i2 + 12 | 0;
 i6 = (HEAP32[i16 >> 2] | 0) + 1 | 0;
 HEAP32[i16 >> 2] = i6;
 i16 = i2 + 4 | 0;
 i3 = HEAP32[i16 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i6 << 1 | 0) < (i3 | 0)) {
  i29 = i15;
  i30 = i3;
 } else {
  if ((i3 | 0) == 0) {
   i31 = 8;
  } else {
   i5 = i3 << 1;
   i31 = (i6 * 6 & -1 | 0) < (i5 | 0) ? i3 : i5;
  }
  i5 = __ZN3WTF9HashTableIPNS_10StringImplENS_12KeyValuePairIS2_N3JSC4WeakINS4_8JSStringEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS2_EENS_7HashMapIS2_S7_SC_NS_10HashTraitsIS2_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_(i2, i31, i15) | 0;
  i29 = i5;
  i30 = HEAP32[i16 >> 2] | 0;
 }
 i16 = (HEAP32[i7 >> 2] | 0) + (i30 << 3) | 0;
 i30 = i1;
 HEAP32[i30 >> 2] = i29;
 HEAP32[i30 + 4 >> 2] = i16;
 HEAP8[i1 + 8 | 0] = 1;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore58jsCanvasRenderingContext2DPrototypeFunctionIsPointInStrokeEPN3JSC9ExecStateE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, d20 = +0, d21 = +0, i22 = 0, d23 = +0, i24 = 0, i25 = 0, d26 = +0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i1 + 40 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = i8;
 L1 : do {
  if ((i8 & 0 | 0) == 0 & (HEAP32[i7 + 4 >> 2] & -1 | 0) == (-5 | 0)) {
   i10 = i9;
   if ((HEAP32[(i9 & -65536) + 1048 >> 2] | 0) == 2) {
    i11 = i10 + 8 | 0;
   } else {
    i11 = (HEAP32[i10 >> 2] | 0) + 32 | 0;
   }
   i10 = HEAP32[i11 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   } else {
    i12 = i10;
   }
   while (1) {
    if ((i12 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i12 = HEAP32[i12 + 4 >> 2] | 0;
    if ((i12 | 0) == 0) {
     break L1;
    }
   }
   if ((i9 | 0) == 0) {
    break;
   }
   i10 = HEAP32[i9 + 12 >> 2] | 0;
   i13 = i1 + 32 | 0;
   if (((HEAP32[i13 >> 2] | 0) - 1 | 0) >>> 0 < 2 >>> 0) {
    i14 = __ZN3JSC29createNotEnoughArgumentsErrorEPNS_9ExecStateE(i1) | 0;
    i15 = (i14 | 0) == 0;
    i16 = HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
    i17 = i4 | 0;
    HEAP32[i17 >> 2] = (i15 ? 0 : 0) | i14;
    HEAP32[i17 + 4 >> 2] = i15 ? -6 : -5;
    __ZN3JSC2VM14throwExceptionEPNS_9ExecStateENS_7JSValueE(i3, i16, i1, i4);
    i16 = i3 | 0;
    i18 = HEAP32[i16 + 4 >> 2] | 0;
    i19 = HEAP32[i16 >> 2] | 0;
    STACKTOP = i2;
    return (tempRet0 = i18, i19) | 0;
   }
   i16 = i1 + 48 | 0;
   i15 = HEAP32[i16 >> 2] | 0;
   i17 = HEAP32[i16 + 4 >> 2] | 0;
   d20 = +HEAPF64[i16 >> 3];
   i16 = i5 | 0;
   HEAP32[i16 >> 2] = i15;
   HEAP32[i16 + 4 >> 2] = i17;
   i16 = i17;
   do {
    if ((i16 | 0) == -1) {
     d21 = +(i15 | 0);
    } else {
     if (i16 >>> 0 < 4294967289 >>> 0) {
      d21 = d20;
      break;
     }
     d21 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i5, i1);
    }
   } while (0);
   d20 = d21;
   i16 = i1 + 16 | 0;
   i15 = HEAP32[i16 >> 2] | 0;
   i17 = (HEAP32[(i15 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i17 >> 2] & 0 | 0) == 0 & (HEAP32[i17 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i18 = -4;
    i19 = 0;
    STACKTOP = i2;
    return (tempRet0 = i18, i19) | 0;
   }
   do {
    if (((HEAP32[i13 >> 2] | 0) - 1 | 0) >>> 0 > 1 >>> 0) {
     i17 = i1 + 56 | 0;
     i14 = HEAP32[i17 >> 2] | 0;
     i22 = HEAP32[i17 + 4 >> 2] | 0;
     i17 = i6 | 0;
     HEAP32[i17 >> 2] = i14;
     HEAP32[i17 + 4 >> 2] = i22;
     i17 = i22;
     if ((i17 | 0) == -1) {
      d23 = +(i14 | 0);
      i24 = i15;
      break;
     }
     if (i17 >>> 0 >= 4294967289 >>> 0) {
      i25 = 23;
      break;
     }
     d23 = +HEAPF64[i6 >> 3];
     i24 = i15;
    } else {
     HEAP32[i6 + 4 >> 2] = -4;
     HEAP32[i6 >> 2] = 0;
     i25 = 23;
    }
   } while (0);
   if ((i25 | 0) == 23) {
    d26 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i6, i1);
    d23 = d26;
    i24 = HEAP32[i16 >> 2] | 0;
   }
   i15 = (HEAP32[(i24 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i15 >> 2] & 0 | 0) == 0 & (HEAP32[i15 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i18 = -4;
    i19 = 0;
    STACKTOP = i2;
    return (tempRet0 = i18, i19) | 0;
   }
   i18 = -2 | 0;
   i19 = (__ZN7WebCore24CanvasRenderingContext2D15isPointInStrokeEff(i10, d20, d23) | 0) & 1 | 0;
   STACKTOP = i2;
   return (tempRet0 = i18, i19) | 0;
  }
 } while (0);
 i24 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 i1 = (i24 | 0) == 0;
 i18 = (i1 ? -6 : -5) | 0;
 i19 = (i1 ? 0 : 0) | i24;
 STACKTOP = i2;
 return (tempRet0 = i18, i19) | 0;
}
function __ZN7WebCore52jsCanvasRenderingContext2DPrototypeFunctionTranslateEPN3JSC9ExecStateE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, d20 = +0, d21 = +0, i22 = 0, d23 = +0, i24 = 0, i25 = 0, d26 = +0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i1 + 40 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = i8;
 L1 : do {
  if ((i8 & 0 | 0) == 0 & (HEAP32[i7 + 4 >> 2] & -1 | 0) == (-5 | 0)) {
   i10 = i9;
   if ((HEAP32[(i9 & -65536) + 1048 >> 2] | 0) == 2) {
    i11 = i10 + 8 | 0;
   } else {
    i11 = (HEAP32[i10 >> 2] | 0) + 32 | 0;
   }
   i10 = HEAP32[i11 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   } else {
    i12 = i10;
   }
   while (1) {
    if ((i12 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i12 = HEAP32[i12 + 4 >> 2] | 0;
    if ((i12 | 0) == 0) {
     break L1;
    }
   }
   if ((i9 | 0) == 0) {
    break;
   }
   i10 = HEAP32[i9 + 12 >> 2] | 0;
   i13 = i1 + 32 | 0;
   if (((HEAP32[i13 >> 2] | 0) - 1 | 0) >>> 0 < 2 >>> 0) {
    i14 = __ZN3JSC29createNotEnoughArgumentsErrorEPNS_9ExecStateE(i1) | 0;
    i15 = (i14 | 0) == 0;
    i16 = HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
    i17 = i4 | 0;
    HEAP32[i17 >> 2] = (i15 ? 0 : 0) | i14;
    HEAP32[i17 + 4 >> 2] = i15 ? -6 : -5;
    __ZN3JSC2VM14throwExceptionEPNS_9ExecStateENS_7JSValueE(i3, i16, i1, i4);
    i16 = i3 | 0;
    i18 = HEAP32[i16 + 4 >> 2] | 0;
    i19 = HEAP32[i16 >> 2] | 0;
    STACKTOP = i2;
    return (tempRet0 = i18, i19) | 0;
   }
   i16 = i1 + 48 | 0;
   i15 = HEAP32[i16 >> 2] | 0;
   i17 = HEAP32[i16 + 4 >> 2] | 0;
   d20 = +HEAPF64[i16 >> 3];
   i16 = i5 | 0;
   HEAP32[i16 >> 2] = i15;
   HEAP32[i16 + 4 >> 2] = i17;
   i16 = i17;
   do {
    if ((i16 | 0) == -1) {
     d21 = +(i15 | 0);
    } else {
     if (i16 >>> 0 < 4294967289 >>> 0) {
      d21 = d20;
      break;
     }
     d21 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i5, i1);
    }
   } while (0);
   d20 = d21;
   i16 = i1 + 16 | 0;
   i15 = HEAP32[i16 >> 2] | 0;
   i17 = (HEAP32[(i15 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i17 >> 2] & 0 | 0) == 0 & (HEAP32[i17 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i18 = -4;
    i19 = 0;
    STACKTOP = i2;
    return (tempRet0 = i18, i19) | 0;
   }
   do {
    if (((HEAP32[i13 >> 2] | 0) - 1 | 0) >>> 0 > 1 >>> 0) {
     i17 = i1 + 56 | 0;
     i14 = HEAP32[i17 >> 2] | 0;
     i22 = HEAP32[i17 + 4 >> 2] | 0;
     i17 = i6 | 0;
     HEAP32[i17 >> 2] = i14;
     HEAP32[i17 + 4 >> 2] = i22;
     i17 = i22;
     if ((i17 | 0) == -1) {
      d23 = +(i14 | 0);
      i24 = i15;
      break;
     }
     if (i17 >>> 0 >= 4294967289 >>> 0) {
      i25 = 23;
      break;
     }
     d23 = +HEAPF64[i6 >> 3];
     i24 = i15;
    } else {
     HEAP32[i6 + 4 >> 2] = -4;
     HEAP32[i6 >> 2] = 0;
     i25 = 23;
    }
   } while (0);
   if ((i25 | 0) == 23) {
    d26 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i6, i1);
    d23 = d26;
    i24 = HEAP32[i16 >> 2] | 0;
   }
   i15 = (HEAP32[(i24 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i15 >> 2] & 0 | 0) == 0 & (HEAP32[i15 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i18 = -4;
    i19 = 0;
    STACKTOP = i2;
    return (tempRet0 = i18, i19) | 0;
   }
   __ZN7WebCore24CanvasRenderingContext2D9translateEff(i10, d20, d23);
   i18 = -4;
   i19 = 0;
   STACKTOP = i2;
   return (tempRet0 = i18, i19) | 0;
  }
 } while (0);
 i24 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 i1 = (i24 | 0) == 0;
 i18 = (i1 ? -6 : -5) | 0;
 i19 = (i1 ? 0 : 0) | i24;
 STACKTOP = i2;
 return (tempRet0 = i18, i19) | 0;
}
function __ZN7WebCore49jsCanvasRenderingContext2DPrototypeFunctionMoveToEPN3JSC9ExecStateE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, d20 = +0, d21 = +0, i22 = 0, d23 = +0, i24 = 0, i25 = 0, d26 = +0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i1 + 40 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = i8;
 L1 : do {
  if ((i8 & 0 | 0) == 0 & (HEAP32[i7 + 4 >> 2] & -1 | 0) == (-5 | 0)) {
   i10 = i9;
   if ((HEAP32[(i9 & -65536) + 1048 >> 2] | 0) == 2) {
    i11 = i10 + 8 | 0;
   } else {
    i11 = (HEAP32[i10 >> 2] | 0) + 32 | 0;
   }
   i10 = HEAP32[i11 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   } else {
    i12 = i10;
   }
   while (1) {
    if ((i12 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i12 = HEAP32[i12 + 4 >> 2] | 0;
    if ((i12 | 0) == 0) {
     break L1;
    }
   }
   if ((i9 | 0) == 0) {
    break;
   }
   i10 = HEAP32[i9 + 12 >> 2] | 0;
   i13 = i1 + 32 | 0;
   if (((HEAP32[i13 >> 2] | 0) - 1 | 0) >>> 0 < 2 >>> 0) {
    i14 = __ZN3JSC29createNotEnoughArgumentsErrorEPNS_9ExecStateE(i1) | 0;
    i15 = (i14 | 0) == 0;
    i16 = HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
    i17 = i4 | 0;
    HEAP32[i17 >> 2] = (i15 ? 0 : 0) | i14;
    HEAP32[i17 + 4 >> 2] = i15 ? -6 : -5;
    __ZN3JSC2VM14throwExceptionEPNS_9ExecStateENS_7JSValueE(i3, i16, i1, i4);
    i16 = i3 | 0;
    i18 = HEAP32[i16 + 4 >> 2] | 0;
    i19 = HEAP32[i16 >> 2] | 0;
    STACKTOP = i2;
    return (tempRet0 = i18, i19) | 0;
   }
   i16 = i1 + 48 | 0;
   i15 = HEAP32[i16 >> 2] | 0;
   i17 = HEAP32[i16 + 4 >> 2] | 0;
   d20 = +HEAPF64[i16 >> 3];
   i16 = i5 | 0;
   HEAP32[i16 >> 2] = i15;
   HEAP32[i16 + 4 >> 2] = i17;
   i16 = i17;
   do {
    if ((i16 | 0) == -1) {
     d21 = +(i15 | 0);
    } else {
     if (i16 >>> 0 < 4294967289 >>> 0) {
      d21 = d20;
      break;
     }
     d21 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i5, i1);
    }
   } while (0);
   d20 = d21;
   i16 = i1 + 16 | 0;
   i15 = HEAP32[i16 >> 2] | 0;
   i17 = (HEAP32[(i15 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i17 >> 2] & 0 | 0) == 0 & (HEAP32[i17 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i18 = -4;
    i19 = 0;
    STACKTOP = i2;
    return (tempRet0 = i18, i19) | 0;
   }
   do {
    if (((HEAP32[i13 >> 2] | 0) - 1 | 0) >>> 0 > 1 >>> 0) {
     i17 = i1 + 56 | 0;
     i14 = HEAP32[i17 >> 2] | 0;
     i22 = HEAP32[i17 + 4 >> 2] | 0;
     i17 = i6 | 0;
     HEAP32[i17 >> 2] = i14;
     HEAP32[i17 + 4 >> 2] = i22;
     i17 = i22;
     if ((i17 | 0) == -1) {
      d23 = +(i14 | 0);
      i24 = i15;
      break;
     }
     if (i17 >>> 0 >= 4294967289 >>> 0) {
      i25 = 23;
      break;
     }
     d23 = +HEAPF64[i6 >> 3];
     i24 = i15;
    } else {
     HEAP32[i6 + 4 >> 2] = -4;
     HEAP32[i6 >> 2] = 0;
     i25 = 23;
    }
   } while (0);
   if ((i25 | 0) == 23) {
    d26 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i6, i1);
    d23 = d26;
    i24 = HEAP32[i16 >> 2] | 0;
   }
   i15 = (HEAP32[(i24 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i15 >> 2] & 0 | 0) == 0 & (HEAP32[i15 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i18 = -4;
    i19 = 0;
    STACKTOP = i2;
    return (tempRet0 = i18, i19) | 0;
   }
   __ZN7WebCore17CanvasPathMethods6moveToEff(i10 + 32 | 0, d20, d23);
   i18 = -4;
   i19 = 0;
   STACKTOP = i2;
   return (tempRet0 = i18, i19) | 0;
  }
 } while (0);
 i24 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 i1 = (i24 | 0) == 0;
 i18 = (i1 ? -6 : -5) | 0;
 i19 = (i1 ? 0 : 0) | i24;
 STACKTOP = i2;
 return (tempRet0 = i18, i19) | 0;
}
function __ZN7WebCore49jsCanvasRenderingContext2DPrototypeFunctionLineToEPN3JSC9ExecStateE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, d20 = +0, d21 = +0, i22 = 0, d23 = +0, i24 = 0, i25 = 0, d26 = +0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i1 + 40 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = i8;
 L1 : do {
  if ((i8 & 0 | 0) == 0 & (HEAP32[i7 + 4 >> 2] & -1 | 0) == (-5 | 0)) {
   i10 = i9;
   if ((HEAP32[(i9 & -65536) + 1048 >> 2] | 0) == 2) {
    i11 = i10 + 8 | 0;
   } else {
    i11 = (HEAP32[i10 >> 2] | 0) + 32 | 0;
   }
   i10 = HEAP32[i11 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   } else {
    i12 = i10;
   }
   while (1) {
    if ((i12 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i12 = HEAP32[i12 + 4 >> 2] | 0;
    if ((i12 | 0) == 0) {
     break L1;
    }
   }
   if ((i9 | 0) == 0) {
    break;
   }
   i10 = HEAP32[i9 + 12 >> 2] | 0;
   i13 = i1 + 32 | 0;
   if (((HEAP32[i13 >> 2] | 0) - 1 | 0) >>> 0 < 2 >>> 0) {
    i14 = __ZN3JSC29createNotEnoughArgumentsErrorEPNS_9ExecStateE(i1) | 0;
    i15 = (i14 | 0) == 0;
    i16 = HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
    i17 = i4 | 0;
    HEAP32[i17 >> 2] = (i15 ? 0 : 0) | i14;
    HEAP32[i17 + 4 >> 2] = i15 ? -6 : -5;
    __ZN3JSC2VM14throwExceptionEPNS_9ExecStateENS_7JSValueE(i3, i16, i1, i4);
    i16 = i3 | 0;
    i18 = HEAP32[i16 + 4 >> 2] | 0;
    i19 = HEAP32[i16 >> 2] | 0;
    STACKTOP = i2;
    return (tempRet0 = i18, i19) | 0;
   }
   i16 = i1 + 48 | 0;
   i15 = HEAP32[i16 >> 2] | 0;
   i17 = HEAP32[i16 + 4 >> 2] | 0;
   d20 = +HEAPF64[i16 >> 3];
   i16 = i5 | 0;
   HEAP32[i16 >> 2] = i15;
   HEAP32[i16 + 4 >> 2] = i17;
   i16 = i17;
   do {
    if ((i16 | 0) == -1) {
     d21 = +(i15 | 0);
    } else {
     if (i16 >>> 0 < 4294967289 >>> 0) {
      d21 = d20;
      break;
     }
     d21 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i5, i1);
    }
   } while (0);
   d20 = d21;
   i16 = i1 + 16 | 0;
   i15 = HEAP32[i16 >> 2] | 0;
   i17 = (HEAP32[(i15 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i17 >> 2] & 0 | 0) == 0 & (HEAP32[i17 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i18 = -4;
    i19 = 0;
    STACKTOP = i2;
    return (tempRet0 = i18, i19) | 0;
   }
   do {
    if (((HEAP32[i13 >> 2] | 0) - 1 | 0) >>> 0 > 1 >>> 0) {
     i17 = i1 + 56 | 0;
     i14 = HEAP32[i17 >> 2] | 0;
     i22 = HEAP32[i17 + 4 >> 2] | 0;
     i17 = i6 | 0;
     HEAP32[i17 >> 2] = i14;
     HEAP32[i17 + 4 >> 2] = i22;
     i17 = i22;
     if ((i17 | 0) == -1) {
      d23 = +(i14 | 0);
      i24 = i15;
      break;
     }
     if (i17 >>> 0 >= 4294967289 >>> 0) {
      i25 = 23;
      break;
     }
     d23 = +HEAPF64[i6 >> 3];
     i24 = i15;
    } else {
     HEAP32[i6 + 4 >> 2] = -4;
     HEAP32[i6 >> 2] = 0;
     i25 = 23;
    }
   } while (0);
   if ((i25 | 0) == 23) {
    d26 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i6, i1);
    d23 = d26;
    i24 = HEAP32[i16 >> 2] | 0;
   }
   i15 = (HEAP32[(i24 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i15 >> 2] & 0 | 0) == 0 & (HEAP32[i15 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i18 = -4;
    i19 = 0;
    STACKTOP = i2;
    return (tempRet0 = i18, i19) | 0;
   }
   __ZN7WebCore17CanvasPathMethods6lineToEff(i10 + 32 | 0, d20, d23);
   i18 = -4;
   i19 = 0;
   STACKTOP = i2;
   return (tempRet0 = i18, i19) | 0;
  }
 } while (0);
 i24 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 i1 = (i24 | 0) == 0;
 i18 = (i1 ? -6 : -5) | 0;
 i19 = (i1 ? 0 : 0) | i24;
 STACKTOP = i2;
 return (tempRet0 = i18, i19) | 0;
}
function __ZN7WebCore48jsCanvasRenderingContext2DPrototypeFunctionScaleEPN3JSC9ExecStateE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, d20 = +0, d21 = +0, i22 = 0, d23 = +0, i24 = 0, i25 = 0, d26 = +0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i1 + 40 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = i8;
 L1 : do {
  if ((i8 & 0 | 0) == 0 & (HEAP32[i7 + 4 >> 2] & -1 | 0) == (-5 | 0)) {
   i10 = i9;
   if ((HEAP32[(i9 & -65536) + 1048 >> 2] | 0) == 2) {
    i11 = i10 + 8 | 0;
   } else {
    i11 = (HEAP32[i10 >> 2] | 0) + 32 | 0;
   }
   i10 = HEAP32[i11 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   } else {
    i12 = i10;
   }
   while (1) {
    if ((i12 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i12 = HEAP32[i12 + 4 >> 2] | 0;
    if ((i12 | 0) == 0) {
     break L1;
    }
   }
   if ((i9 | 0) == 0) {
    break;
   }
   i10 = HEAP32[i9 + 12 >> 2] | 0;
   i13 = i1 + 32 | 0;
   if (((HEAP32[i13 >> 2] | 0) - 1 | 0) >>> 0 < 2 >>> 0) {
    i14 = __ZN3JSC29createNotEnoughArgumentsErrorEPNS_9ExecStateE(i1) | 0;
    i15 = (i14 | 0) == 0;
    i16 = HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
    i17 = i4 | 0;
    HEAP32[i17 >> 2] = (i15 ? 0 : 0) | i14;
    HEAP32[i17 + 4 >> 2] = i15 ? -6 : -5;
    __ZN3JSC2VM14throwExceptionEPNS_9ExecStateENS_7JSValueE(i3, i16, i1, i4);
    i16 = i3 | 0;
    i18 = HEAP32[i16 + 4 >> 2] | 0;
    i19 = HEAP32[i16 >> 2] | 0;
    STACKTOP = i2;
    return (tempRet0 = i18, i19) | 0;
   }
   i16 = i1 + 48 | 0;
   i15 = HEAP32[i16 >> 2] | 0;
   i17 = HEAP32[i16 + 4 >> 2] | 0;
   d20 = +HEAPF64[i16 >> 3];
   i16 = i5 | 0;
   HEAP32[i16 >> 2] = i15;
   HEAP32[i16 + 4 >> 2] = i17;
   i16 = i17;
   do {
    if ((i16 | 0) == -1) {
     d21 = +(i15 | 0);
    } else {
     if (i16 >>> 0 < 4294967289 >>> 0) {
      d21 = d20;
      break;
     }
     d21 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i5, i1);
    }
   } while (0);
   d20 = d21;
   i16 = i1 + 16 | 0;
   i15 = HEAP32[i16 >> 2] | 0;
   i17 = (HEAP32[(i15 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i17 >> 2] & 0 | 0) == 0 & (HEAP32[i17 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i18 = -4;
    i19 = 0;
    STACKTOP = i2;
    return (tempRet0 = i18, i19) | 0;
   }
   do {
    if (((HEAP32[i13 >> 2] | 0) - 1 | 0) >>> 0 > 1 >>> 0) {
     i17 = i1 + 56 | 0;
     i14 = HEAP32[i17 >> 2] | 0;
     i22 = HEAP32[i17 + 4 >> 2] | 0;
     i17 = i6 | 0;
     HEAP32[i17 >> 2] = i14;
     HEAP32[i17 + 4 >> 2] = i22;
     i17 = i22;
     if ((i17 | 0) == -1) {
      d23 = +(i14 | 0);
      i24 = i15;
      break;
     }
     if (i17 >>> 0 >= 4294967289 >>> 0) {
      i25 = 23;
      break;
     }
     d23 = +HEAPF64[i6 >> 3];
     i24 = i15;
    } else {
     HEAP32[i6 + 4 >> 2] = -4;
     HEAP32[i6 >> 2] = 0;
     i25 = 23;
    }
   } while (0);
   if ((i25 | 0) == 23) {
    d26 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i6, i1);
    d23 = d26;
    i24 = HEAP32[i16 >> 2] | 0;
   }
   i15 = (HEAP32[(i24 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i15 >> 2] & 0 | 0) == 0 & (HEAP32[i15 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i18 = -4;
    i19 = 0;
    STACKTOP = i2;
    return (tempRet0 = i18, i19) | 0;
   }
   __ZN7WebCore24CanvasRenderingContext2D5scaleEff(i10, d20, d23);
   i18 = -4;
   i19 = 0;
   STACKTOP = i2;
   return (tempRet0 = i18, i19) | 0;
  }
 } while (0);
 i24 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 i1 = (i24 | 0) == 0;
 i18 = (i1 ? -6 : -5) | 0;
 i19 = (i1 ? 0 : 0) | i24;
 STACKTOP = i2;
 return (tempRet0 = i18, i19) | 0;
}
function __ZN3WTF9HashTableIPKN3JSC9ClassInfoENS_12KeyValuePairIS4_NS1_12WriteBarrierINS1_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7PtrHashIS4_EENS_7HashMapIS4_S8_SD_NS_10HashTraitsIS4_EENSF_IS8_EEE18KeyValuePairTraitsESG_E3addINS_17HashMapTranslatorISJ_SD_EES4_RS8_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S9_SB_SD_SJ_SG_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
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
  __ZN3WTF9HashTableIPKN3JSC9ClassInfoENS_12KeyValuePairIS4_NS1_12WriteBarrierINS1_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7PtrHashIS4_EENS_7HashMapIS4_S8_SD_NS_10HashTraitsIS4_EENSF_IS8_EEE18KeyValuePairTraitsESG_E6rehashEiPS9_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i9 = i8;
 i7 = i9 + ~(i9 << 15) | 0;
 i9 = (i7 >>> 10 ^ i7) * 9 & -1;
 i7 = i9 >>> 6 ^ i9;
 i9 = i7 + ~(i7 << 11) | 0;
 i7 = i9 >>> 16 ^ i9;
 i9 = i7 & i6;
 i11 = i10 + (i9 << 3) | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i12 | 0) == 0) {
   i13 = i11;
   i14 = 11;
  } else {
   i15 = (i7 >>> 23) + ~i7 | 0;
   i16 = i15 << 12 ^ i15;
   i15 = i16 >>> 7 ^ i16;
   i16 = i15 << 2 ^ i15;
   i15 = i16 >>> 20 ^ i16 | 1;
   i16 = 0;
   i17 = 0;
   i18 = i9;
   i19 = i11;
   i20 = i12;
   while (1) {
    if ((i20 | 0) == (i8 | 0)) {
     i14 = 8;
     break;
    }
    i21 = (i20 | 0) == -1 ? i19 : i17;
    i22 = (i16 | 0) == 0 ? i15 : i16;
    i23 = i22 + i18 & i6;
    i24 = i10 + (i23 << 3) | 0;
    i25 = HEAP32[i24 >> 2] | 0;
    if ((i25 | 0) == 0) {
     i14 = 10;
     break;
    } else {
     i16 = i22;
     i17 = i21;
     i18 = i23;
     i19 = i24;
     i20 = i25;
    }
   }
   if ((i14 | 0) == 8) {
    i20 = i10 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i18 = i1;
    HEAP32[i18 >> 2] = i19;
    HEAP32[i18 + 4 >> 2] = i20;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i14 | 0) == 10) {
    if ((i21 | 0) == 0) {
     i13 = i24;
     i14 = 11;
     break;
    }
    HEAP32[i21 >> 2] = 0;
    HEAP32[i21 + 4 >> 2] = 0;
    i20 = i2 + 16 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) - 1;
    i26 = i21;
    i27 = HEAP32[i3 >> 2] | 0;
    i28 = i20;
    break;
   }
  }
 } while (0);
 if ((i14 | 0) == 11) {
  i26 = i13;
  i27 = i8;
  i28 = i2 + 16 | 0;
 }
 HEAP32[i26 >> 2] = i27;
 HEAP32[i26 + 4 >> 2] = HEAP32[i4 >> 2];
 i4 = i2 + 12 | 0;
 i27 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i27;
 i4 = i2 + 4 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i28 >> 2] | 0) + i27 << 1 | 0) < (i8 | 0)) {
  i29 = i26;
  i30 = i8;
 } else {
  if ((i8 | 0) == 0) {
   i31 = 8;
  } else {
   i28 = i8 << 1;
   i31 = (i27 * 6 & -1 | 0) < (i28 | 0) ? i8 : i28;
  }
  i28 = __ZN3WTF9HashTableIPKN3JSC9ClassInfoENS_12KeyValuePairIS4_NS1_12WriteBarrierINS1_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7PtrHashIS4_EENS_7HashMapIS4_S8_SD_NS_10HashTraitsIS4_EENSF_IS8_EEE18KeyValuePairTraitsESG_E6rehashEiPS9_(i2, i31, i26) | 0;
  i29 = i28;
  i30 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i30 << 3) | 0;
 i30 = i1;
 HEAP32[i30 >> 2] = i29;
 HEAP32[i30 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore12toJSSequenceEPN3JSC9ExecStateENS0_7JSValueERj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, d22 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i5 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i2 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i4 + 56 | 0;
 do {
  if ((HEAP32[i2 + 4 >> 2] | 0) == -5) {
   i13 = __ZN3JSC6JSCell9getObjectEv(HEAP32[i2 >> 2] | 0) | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   i14 = i1 + 16 | 0;
   HEAP32[i11 >> 2] = HEAP32[(HEAP32[(HEAP32[(HEAP32[i14 >> 2] & -65536) + 1076 >> 2] | 0) + 20884 >> 2] | 0) + 568 >> 2];
   __ZNK3JSC8JSObject3getEPNS_9ExecStateENS_12PropertyNameE(i10, i13, i1, i11);
   i15 = (HEAP32[(HEAP32[i14 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i15 >> 2] & 0 | 0) == 0 & (HEAP32[i15 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i16 = 0;
    STACKTOP = i4;
    return i16 | 0;
   }
   i15 = HEAP32[i10 + 4 >> 2] | 0;
   if ((i15 + 4 | 0) >>> 0 < 2 >>> 0) {
    __ZN3WTF6StringC1EPKc(i12, H_BASE + 520 | 0);
    i17 = __ZN3JSC15createTypeErrorEPNS_9ExecStateERKN3WTF6StringE(i1, i12) | 0;
    i18 = (i17 | 0) == 0;
    i19 = HEAP32[(HEAP32[i14 >> 2] & -65536) + 1076 >> 2] | 0;
    i20 = i6 | 0;
    HEAP32[i20 >> 2] = (i18 ? 0 : 0) | i17;
    HEAP32[i20 + 4 >> 2] = i18 ? -6 : -5;
    __ZN3JSC2VM14throwExceptionEPNS_9ExecStateENS_7JSValueE(i5, i19, i1, i6);
    i19 = HEAP32[i12 >> 2] | 0;
    if ((i19 | 0) == 0) {
     i16 = 0;
     STACKTOP = i4;
     return i16 | 0;
    }
    i18 = i19 | 0;
    i20 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
    if ((i20 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i19);
     i16 = 0;
     STACKTOP = i4;
     return i16 | 0;
    } else {
     HEAP32[i18 >> 2] = i20;
     i16 = 0;
     STACKTOP = i4;
     return i16 | 0;
    }
   }
   if ((i15 | 0) == -1) {
    i21 = HEAP32[i10 >> 2] | 0;
   } else {
    if (i15 >>> 0 < 4294967289 >>> 0) {
     d22 = +HEAPF64[i10 >> 3];
    } else {
     d22 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i10, i1);
    }
    i21 = __ZN3JSC7toInt32Ed(d22) | 0;
   }
   HEAP32[i3 >> 2] = i21;
   i15 = (HEAP32[(HEAP32[i14 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   i16 = (HEAP32[i15 >> 2] & 0 | 0) != 0 | (HEAP32[i15 + 4 >> 2] & -1 | 0) != (-6 | 0) ? 0 : i13;
   STACKTOP = i4;
   return i16 | 0;
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i9, H_BASE + 520 | 0);
 i21 = __ZN3JSC15createTypeErrorEPNS_9ExecStateERKN3WTF6StringE(i1, i9) | 0;
 i3 = (i21 | 0) == 0;
 i10 = HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
 i12 = i8 | 0;
 HEAP32[i12 >> 2] = (i3 ? 0 : 0) | i21;
 HEAP32[i12 + 4 >> 2] = i3 ? -6 : -5;
 __ZN3JSC2VM14throwExceptionEPNS_9ExecStateENS_7JSValueE(i7, i10, i1, i8);
 i8 = HEAP32[i9 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i16 = 0;
  STACKTOP = i4;
  return i16 | 0;
 }
 i9 = i8 | 0;
 i1 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i8);
  i16 = 0;
  STACKTOP = i4;
  return i16 | 0;
 } else {
  HEAP32[i9 >> 2] = i1;
  i16 = 0;
  STACKTOP = i4;
  return i16 | 0;
 }
 return 0;
}
function __ZN3WTF9HashTableIPNS_10StringImplENS_12KeyValuePairIS2_N3JSC4WeakINS4_8JSStringEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS2_EENS_7HashMapIS2_S7_SC_NS_10HashTraitsIS2_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 i4 = i1 + 8 | 0;
 HEAP32[i4 >> 2] = i2 - 1;
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 3) | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i1 + 16 >> 2] = 0;
  i8 = 0;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 } else {
  i10 = 0;
  i11 = 0;
 }
 while (1) {
  i2 = i7 + (i10 << 3) | 0;
  i12 = i2 | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i11;
  } else {
   i16 = HEAP32[i6 >> 2] | 0;
   i17 = HEAP32[i4 >> 2] | 0;
   i18 = i14 + ~(i14 << 15) | 0;
   i14 = (i18 >>> 10 ^ i18) * 9 & -1;
   i18 = i14 >>> 6 ^ i14;
   i14 = i18 + ~(i18 << 11) | 0;
   i18 = i14 >>> 16 ^ i14;
   i14 = i17 & i18;
   i19 = i16 + (i14 << 3) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L8 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 6;
    } else {
     i24 = (i18 >>> 23) + ~i18 | 0;
     i25 = i24 << 12 ^ i24;
     i24 = i25 >>> 7 ^ i25;
     i25 = i24 << 2 ^ i24;
     i24 = i25 >>> 20 ^ i25 | 1;
     i25 = 0;
     i26 = 0;
     i27 = i14;
     i28 = i19;
     i29 = i20;
     while (1) {
      if ((i29 | 0) == (i13 | 0)) {
       i30 = i28;
       break L8;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i17;
      i34 = i16 + (i33 << 3) | 0;
      i35 = HEAP32[i34 >> 2] | 0;
      if ((i35 | 0) == 0) {
       i21 = i31;
       i22 = i34;
       i23 = 6;
       break;
      } else {
       i25 = i31;
       i26 = i32;
       i27 = i33;
       i28 = i34;
       i29 = i35;
      }
     }
    }
   } while (0);
   if ((i23 | 0) == 6) {
    i23 = 0;
    i30 = (i21 | 0) != 0 ? i21 : i22;
   }
   i16 = i30 + 4 | 0;
   if ((HEAP32[i16 >> 2] | 0) == 0) {
    i36 = i13;
   } else {
    __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i16);
    i36 = HEAP32[i12 >> 2] | 0;
   }
   HEAP32[i30 >> 2] = i36;
   i17 = i7 + (i10 << 3) + 4 | 0;
   i20 = HEAP32[i17 >> 2] | 0;
   HEAP32[i17 >> 2] = 0;
   HEAP32[i16 >> 2] = i20;
   i15 = (i2 | 0) == (i3 | 0) ? i30 : i11;
  }
  i20 = i10 + 1 | 0;
  if ((i20 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i20;
   i11 = i15;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i37 = 0;
 } else {
  i8 = i15;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  do {
   if ((HEAP32[i7 + (i37 << 3) >> 2] | 0) != -1) {
    i1 = i7 + (i37 << 3) + 4 | 0;
    if ((HEAP32[i1 >> 2] | 0) == 0) {
     break;
    }
    __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i1);
   }
  } while (0);
  i2 = i37 + 1 | 0;
  if ((i2 | 0) < (i5 | 0)) {
   i37 = i2;
  } else {
   i8 = i15;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN7WebCore64jsCanvasRenderingContext2DPrototypeFunctionSetCompositeOperationEPN3JSC9ExecStateE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i1 + 40 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = i6;
 L1 : do {
  if ((i6 & 0 | 0) == 0 & (HEAP32[i5 + 4 >> 2] & -1 | 0) == (-5 | 0)) {
   i8 = i7;
   if ((HEAP32[(i7 & -65536) + 1048 >> 2] | 0) == 2) {
    i9 = i8 + 8 | 0;
   } else {
    i9 = (HEAP32[i8 >> 2] | 0) + 32 | 0;
   }
   i8 = HEAP32[i9 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   } else {
    i10 = i8;
   }
   while (1) {
    if ((i10 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i10 = HEAP32[i10 + 4 >> 2] | 0;
    if ((i10 | 0) == 0) {
     break L1;
    }
   }
   if ((i7 | 0) == 0) {
    break;
   }
   i8 = HEAP32[i7 + 12 >> 2] | 0;
   do {
    if ((HEAP32[i1 + 32 >> 2] | 0) == 1) {
     HEAP32[i4 + 4 >> 2] = -4;
     HEAP32[i4 >> 2] = 0;
     i11 = 17;
    } else {
     i12 = i1 + 48 | 0;
     if ((HEAP32[i12 >> 2] & 0 | 0) == 0 & (HEAP32[i12 + 4 >> 2] & -1 | 0) == (-6 | 0)) {
      HEAP32[i3 >> 2] = 0;
      break;
     }
     i12 = i1 + 48 | 0;
     i13 = HEAP32[i12 >> 2] | 0;
     i14 = HEAP32[i12 + 4 >> 2] | 0;
     i12 = i4 | 0;
     HEAP32[i12 >> 2] = i13;
     HEAP32[i12 + 4 >> 2] = i14;
     i12 = i13;
     if (!((i13 & 0 | 0) == 0 & (i14 & -1 | 0) == (-5 | 0))) {
      i11 = 17;
      break;
     }
     if ((HEAP8[(HEAP32[i12 >> 2] | 0) + 52 | 0] | 0) != 5) {
      i11 = 17;
      break;
     }
     i15 = i12;
     i11 = 18;
    }
   } while (0);
   if ((i11 | 0) == 17) {
    i15 = __ZNK3JSC7JSValue16toStringSlowCaseEPNS_9ExecStateE(i4, i1) | 0;
    i11 = 18;
   }
   do {
    if ((i11 | 0) == 18) {
     i12 = i15 + 12 | 0;
     i14 = HEAP32[i12 >> 2] | 0;
     if ((i14 | 0) == 0) {
      __ZNK3JSC12JSRopeString11resolveRopeEPNS_9ExecStateE(i15, i1);
      i13 = HEAP32[i12 >> 2] | 0;
      HEAP32[i3 >> 2] = i13;
      if ((i13 | 0) == 0) {
       break;
      } else {
       i16 = i13;
      }
     } else {
      HEAP32[i3 >> 2] = i14;
      i16 = i14;
     }
     i14 = i16 | 0;
     HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
    }
   } while (0);
   i14 = (HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if ((HEAP32[i14 >> 2] & 0 | 0) == 0 & (HEAP32[i14 + 4 >> 2] & -1 | 0) == (-6 | 0)) {
    __ZN7WebCore24CanvasRenderingContext2D21setCompositeOperationERKN3WTF6StringE(i8, i3);
   }
   i14 = HEAP32[i3 >> 2] | 0;
   if ((i14 | 0) == 0) {
    i17 = -4;
    i18 = 0;
    STACKTOP = i2;
    return (tempRet0 = i17, i18) | 0;
   }
   i13 = i14 | 0;
   i12 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    i17 = -4;
    i18 = 0;
    STACKTOP = i2;
    return (tempRet0 = i17, i18) | 0;
   } else {
    HEAP32[i13 >> 2] = i12;
    i17 = -4;
    i18 = 0;
    STACKTOP = i2;
    return (tempRet0 = i17, i18) | 0;
   }
  }
 } while (0);
 i3 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 i1 = (i3 | 0) == 0;
 i17 = (i1 ? -6 : -5) | 0;
 i18 = (i1 ? 0 : 0) | i3;
 STACKTOP = i2;
 return (tempRet0 = i17, i18) | 0;
}
function __ZN7WebCore54jsCanvasRenderingContext2DPrototypeFunctionSetLineJoinEPN3JSC9ExecStateE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i1 + 40 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = i6;
 L1 : do {
  if ((i6 & 0 | 0) == 0 & (HEAP32[i5 + 4 >> 2] & -1 | 0) == (-5 | 0)) {
   i8 = i7;
   if ((HEAP32[(i7 & -65536) + 1048 >> 2] | 0) == 2) {
    i9 = i8 + 8 | 0;
   } else {
    i9 = (HEAP32[i8 >> 2] | 0) + 32 | 0;
   }
   i8 = HEAP32[i9 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   } else {
    i10 = i8;
   }
   while (1) {
    if ((i10 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i10 = HEAP32[i10 + 4 >> 2] | 0;
    if ((i10 | 0) == 0) {
     break L1;
    }
   }
   if ((i7 | 0) == 0) {
    break;
   }
   i8 = HEAP32[i7 + 12 >> 2] | 0;
   do {
    if ((HEAP32[i1 + 32 >> 2] | 0) == 1) {
     HEAP32[i4 + 4 >> 2] = -4;
     HEAP32[i4 >> 2] = 0;
     i11 = 17;
    } else {
     i12 = i1 + 48 | 0;
     if ((HEAP32[i12 >> 2] & 0 | 0) == 0 & (HEAP32[i12 + 4 >> 2] & -1 | 0) == (-6 | 0)) {
      HEAP32[i3 >> 2] = 0;
      break;
     }
     i12 = i1 + 48 | 0;
     i13 = HEAP32[i12 >> 2] | 0;
     i14 = HEAP32[i12 + 4 >> 2] | 0;
     i12 = i4 | 0;
     HEAP32[i12 >> 2] = i13;
     HEAP32[i12 + 4 >> 2] = i14;
     i12 = i13;
     if (!((i13 & 0 | 0) == 0 & (i14 & -1 | 0) == (-5 | 0))) {
      i11 = 17;
      break;
     }
     if ((HEAP8[(HEAP32[i12 >> 2] | 0) + 52 | 0] | 0) != 5) {
      i11 = 17;
      break;
     }
     i15 = i12;
     i11 = 18;
    }
   } while (0);
   if ((i11 | 0) == 17) {
    i15 = __ZNK3JSC7JSValue16toStringSlowCaseEPNS_9ExecStateE(i4, i1) | 0;
    i11 = 18;
   }
   do {
    if ((i11 | 0) == 18) {
     i12 = i15 + 12 | 0;
     i14 = HEAP32[i12 >> 2] | 0;
     if ((i14 | 0) == 0) {
      __ZNK3JSC12JSRopeString11resolveRopeEPNS_9ExecStateE(i15, i1);
      i13 = HEAP32[i12 >> 2] | 0;
      HEAP32[i3 >> 2] = i13;
      if ((i13 | 0) == 0) {
       break;
      } else {
       i16 = i13;
      }
     } else {
      HEAP32[i3 >> 2] = i14;
      i16 = i14;
     }
     i14 = i16 | 0;
     HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
    }
   } while (0);
   i14 = (HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if ((HEAP32[i14 >> 2] & 0 | 0) == 0 & (HEAP32[i14 + 4 >> 2] & -1 | 0) == (-6 | 0)) {
    __ZN7WebCore24CanvasRenderingContext2D11setLineJoinERKN3WTF6StringE(i8, i3);
   }
   i14 = HEAP32[i3 >> 2] | 0;
   if ((i14 | 0) == 0) {
    i17 = -4;
    i18 = 0;
    STACKTOP = i2;
    return (tempRet0 = i17, i18) | 0;
   }
   i13 = i14 | 0;
   i12 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    i17 = -4;
    i18 = 0;
    STACKTOP = i2;
    return (tempRet0 = i17, i18) | 0;
   } else {
    HEAP32[i13 >> 2] = i12;
    i17 = -4;
    i18 = 0;
    STACKTOP = i2;
    return (tempRet0 = i17, i18) | 0;
   }
  }
 } while (0);
 i3 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 i1 = (i3 | 0) == 0;
 i17 = (i1 ? -6 : -5) | 0;
 i18 = (i1 ? 0 : 0) | i3;
 STACKTOP = i2;
 return (tempRet0 = i17, i18) | 0;
}
function __ZN7WebCore53jsCanvasRenderingContext2DPrototypeFunctionSetLineCapEPN3JSC9ExecStateE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i1 + 40 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = i6;
 L1 : do {
  if ((i6 & 0 | 0) == 0 & (HEAP32[i5 + 4 >> 2] & -1 | 0) == (-5 | 0)) {
   i8 = i7;
   if ((HEAP32[(i7 & -65536) + 1048 >> 2] | 0) == 2) {
    i9 = i8 + 8 | 0;
   } else {
    i9 = (HEAP32[i8 >> 2] | 0) + 32 | 0;
   }
   i8 = HEAP32[i9 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   } else {
    i10 = i8;
   }
   while (1) {
    if ((i10 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i10 = HEAP32[i10 + 4 >> 2] | 0;
    if ((i10 | 0) == 0) {
     break L1;
    }
   }
   if ((i7 | 0) == 0) {
    break;
   }
   i8 = HEAP32[i7 + 12 >> 2] | 0;
   do {
    if ((HEAP32[i1 + 32 >> 2] | 0) == 1) {
     HEAP32[i4 + 4 >> 2] = -4;
     HEAP32[i4 >> 2] = 0;
     i11 = 17;
    } else {
     i12 = i1 + 48 | 0;
     if ((HEAP32[i12 >> 2] & 0 | 0) == 0 & (HEAP32[i12 + 4 >> 2] & -1 | 0) == (-6 | 0)) {
      HEAP32[i3 >> 2] = 0;
      break;
     }
     i12 = i1 + 48 | 0;
     i13 = HEAP32[i12 >> 2] | 0;
     i14 = HEAP32[i12 + 4 >> 2] | 0;
     i12 = i4 | 0;
     HEAP32[i12 >> 2] = i13;
     HEAP32[i12 + 4 >> 2] = i14;
     i12 = i13;
     if (!((i13 & 0 | 0) == 0 & (i14 & -1 | 0) == (-5 | 0))) {
      i11 = 17;
      break;
     }
     if ((HEAP8[(HEAP32[i12 >> 2] | 0) + 52 | 0] | 0) != 5) {
      i11 = 17;
      break;
     }
     i15 = i12;
     i11 = 18;
    }
   } while (0);
   if ((i11 | 0) == 17) {
    i15 = __ZNK3JSC7JSValue16toStringSlowCaseEPNS_9ExecStateE(i4, i1) | 0;
    i11 = 18;
   }
   do {
    if ((i11 | 0) == 18) {
     i12 = i15 + 12 | 0;
     i14 = HEAP32[i12 >> 2] | 0;
     if ((i14 | 0) == 0) {
      __ZNK3JSC12JSRopeString11resolveRopeEPNS_9ExecStateE(i15, i1);
      i13 = HEAP32[i12 >> 2] | 0;
      HEAP32[i3 >> 2] = i13;
      if ((i13 | 0) == 0) {
       break;
      } else {
       i16 = i13;
      }
     } else {
      HEAP32[i3 >> 2] = i14;
      i16 = i14;
     }
     i14 = i16 | 0;
     HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
    }
   } while (0);
   i14 = (HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if ((HEAP32[i14 >> 2] & 0 | 0) == 0 & (HEAP32[i14 + 4 >> 2] & -1 | 0) == (-6 | 0)) {
    __ZN7WebCore24CanvasRenderingContext2D10setLineCapERKN3WTF6StringE(i8, i3);
   }
   i14 = HEAP32[i3 >> 2] | 0;
   if ((i14 | 0) == 0) {
    i17 = -4;
    i18 = 0;
    STACKTOP = i2;
    return (tempRet0 = i17, i18) | 0;
   }
   i13 = i14 | 0;
   i12 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    i17 = -4;
    i18 = 0;
    STACKTOP = i2;
    return (tempRet0 = i17, i18) | 0;
   } else {
    HEAP32[i13 >> 2] = i12;
    i17 = -4;
    i18 = 0;
    STACKTOP = i2;
    return (tempRet0 = i17, i18) | 0;
   }
  }
 } while (0);
 i3 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 i1 = (i3 | 0) == 0;
 i17 = (i1 ? -6 : -5) | 0;
 i18 = (i1 ? 0 : 0) | i3;
 STACKTOP = i2;
 return (tempRet0 = i17, i18) | 0;
}
function __ZN3JSC18getStaticValueSlotIN7WebCore37JSCanvasRenderingContext2DConstructorENS1_12JSDOMWrapperEEEbPNS_9ExecStateERKNS_9HashTableEPT_NS_12PropertyNameERNS_12PropertySlotE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i7 = i4;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i4 >> 2] = HEAP32[i7 >> 2];
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 i11 = i6 + 32 | 0;
 i12 = HEAP32[i4 >> 2] | 0;
 i4 = i2 + 12 | 0;
 if ((HEAP32[i4 >> 2] | 0) == 0) {
  __ZNK3JSC9HashTable11createTableERNS_2VME(i2, HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0);
 }
 i13 = (HEAP32[i12 + 16 >> 2] & 4 | 0) != 0 ? i12 : 0;
 L4 : do {
  if ((i13 | 0) == 0) {
   i14 = 8;
  } else {
   i15 = (HEAP32[i4 >> 2] | 0) + (((HEAP32[i13 + 16 >> 2] | 0) >>> 7 & HEAP32[i2 + 4 >> 2]) * 24 & -1) | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i14 = 8;
    break;
   } else {
    i17 = i15;
    i18 = i16;
   }
   while (1) {
    if ((i18 | 0) == (i13 | 0)) {
     break;
    }
    i16 = HEAP32[i17 + 20 >> 2] | 0;
    if ((i16 | 0) == 0) {
     i14 = 8;
     break L4;
    }
    i17 = i16;
    i18 = HEAP32[i16 >> 2] | 0;
   }
   i16 = i3 | 0;
   if ((i17 | 0) == 0) {
    i19 = i16;
    break;
   }
   i15 = HEAPU8[i17 + 4 | 0] | 0;
   HEAP32[i5 + 8 >> 2] = HEAP32[i17 + 12 >> 2];
   HEAP32[i5 >> 2] = i15;
   HEAP32[i5 + 32 >> 2] = i16;
   HEAP32[i5 + 16 >> 2] = 3;
   HEAP32[i5 + 20 >> 2] = 0;
   i20 = 1;
   STACKTOP = i6;
   return i20 | 0;
  }
 } while (0);
 if ((i14 | 0) == 8) {
  i19 = i3 | 0;
 }
 i14 = i3 | 0;
 i3 = HEAP32[i14 >> 2] | 0;
 i17 = HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
 HEAP32[i9 >> 2] = i12;
 i18 = __ZN3JSC9Structure3getERNS_2VMENS_12PropertyNameERjRPNS_6JSCellE(i3, i17, i9, i7, i8) | 0;
 if ((i18 | 0) == -1) {
  HEAP32[i11 >> 2] = i12;
  i20 = __ZN3JSC8JSObject22getOwnPropertySlotSlowEPNS_9ExecStateENS_12PropertyNameERNS_12PropertySlotE(i19, i1, i11, i5) | 0;
  STACKTOP = i6;
  return i20 | 0;
 }
 if ((i18 | 0) < 100) {
  i21 = i19 + (i18 + 1 << 3) | 0;
 } else {
  i21 = (HEAP32[i19 + 4 >> 2] | 0) - 8 + (99 - i18 << 3) | 0;
 }
 i11 = i21 | 0;
 i21 = HEAP32[i11 >> 2] | 0;
 i1 = HEAP32[i11 + 4 >> 2] | 0;
 i11 = i1;
 do {
  if ((HEAP8[(HEAP32[i14 >> 2] | 0) + 58 | 0] & 8) != 0 & ((i11 | 0) == (-5 | 0) & 0 == 0)) {
   if ((HEAP8[(HEAP32[i21 >> 2] | 0) + 52 | 0] | 0) != 8) {
    break;
   }
   i12 = i10 | 0;
   HEAP32[i12 >> 2] = i21 & -1;
   HEAP32[i12 + 4 >> 2] = i1 & 0 | -5;
   __ZN3JSC8JSObject22fillGetterPropertySlotERNS_12PropertySlotENS_7JSValueEji(i19, i5, i10, HEAP32[i7 >> 2] | 0, i18);
   i20 = 1;
   STACKTOP = i6;
   return i20 | 0;
  }
 } while (0);
 i10 = HEAP32[i7 >> 2] | 0;
 i7 = i5 + 8 | 0;
 HEAP32[i7 >> 2] = i21 & -1;
 HEAP32[i7 + 4 >> 2] = i11 | i1 & 0;
 HEAP32[i5 >> 2] = i10;
 HEAP32[i5 + 32 >> 2] = i19;
 HEAP32[i5 + 16 >> 2] = 1;
 HEAP32[i5 + 20 >> 2] = i18;
 i20 = 1;
 STACKTOP = i6;
 return i20 | 0;
}
function __ZN7WebCore7jsArrayIfLj0EEEN3JSC7JSValueEPNS1_9ExecStateEPNS_17JSDOMGlobalObjectERKN3WTF6VectorIT_XT0_ENS7_15CrashOnOverflowEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, d19 = +0, d20 = +0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 104 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i9 | 0;
 HEAP32[i10 >> 2] = 0;
 i11 = i9 + 4 | 0;
 HEAP32[i11 >> 2] = 8;
 i12 = i9 + 72 | 0;
 i13 = i9 + 8 | 0;
 HEAP32[i12 >> 2] = i13;
 i14 = i9 + 76 | 0;
 HEAP32[i14 >> 2] = 0;
 i15 = HEAP32[i4 >> 2] | 0;
 i16 = HEAP32[i4 + 8 >> 2] | 0;
 i4 = i15 + (i16 << 2) | 0;
 if ((i16 | 0) == 0) {
  i17 = i13;
  i18 = 0;
 } else {
  i13 = i6 | 0;
  i16 = i15;
  while (1) {
   d19 = +HEAPF32[i16 >> 2];
   d20 = d19;
   i15 = ~~d19;
   do {
    if (+(i15 | 0) != d20) {
     HEAPF64[tempDoublePtr >> 3] = d20;
     i21 = HEAP32[tempDoublePtr + 4 >> 2] | 0;
     i22 = HEAP32[tempDoublePtr >> 2] | 0;
    } else {
     HEAPF64[tempDoublePtr >> 3] = d20;
     i23 = HEAP32[tempDoublePtr >> 2] | 0;
     i24 = HEAP32[tempDoublePtr + 4 >> 2] | 0;
     i25 = 0;
     if ((i15 | 0) == 0 & ((i24 | 0) < (i25 | 0) | (i24 | 0) == (i25 | 0) & i23 >>> 0 < 0 >>> 0)) {
      i21 = i24;
      i22 = i23;
      break;
     }
     i21 = -1 | 0;
     i22 = i15 | 0;
    }
   } while (0);
   i15 = HEAP32[i10 >> 2] | 0;
   if ((i15 | 0) < (HEAP32[i11 >> 2] | 0)) {
    i23 = (HEAP32[i12 >> 2] | 0) + (i15 << 3) | 0;
    HEAP32[i23 >> 2] = i22;
    HEAP32[i23 + 4 >> 2] = i21;
    HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
   } else {
    HEAP32[i13 >> 2] = i22;
    HEAP32[i13 + 4 >> 2] = i21;
    __ZN3JSC20MarkedArgumentBuffer10slowAppendENS_7JSValueE(i9, i6);
   }
   i16 = i16 + 4 | 0;
   if ((i16 | 0) == (i4 | 0)) {
    break;
   }
  }
  i17 = HEAP32[i12 >> 2] | 0;
  i18 = HEAP32[i10 >> 2] | 0;
 }
 i10 = i17;
 i17 = HEAP32[(HEAP32[i2 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
 i2 = __ZN3JSC7JSArray22tryCreateUninitializedERNS_2VMEPNS_9StructureEj(i17, HEAP32[i3 + 244 >> 2] | 0, i18) | 0;
 if ((i2 | 0) == 0) {
  _WTFCrash();
 }
 if ((i18 | 0) != 0) {
  i3 = i2 | 0;
  i4 = i7 | 0;
  i16 = i7 + 4 | 0;
  i6 = i7;
  i21 = 0;
  while (1) {
   if ((i18 | 0) > (i21 | 0)) {
    i13 = i10 + (i21 << 3) | 0;
    i22 = HEAP32[i13 + 4 >> 2] | 0;
    HEAP32[i4 >> 2] = HEAP32[i13 >> 2];
    HEAP32[i4 + 4 >> 2] = i22;
   } else {
    HEAP32[i16 >> 2] = -4;
    HEAP32[i6 >> 2] = 0;
   }
   __ZN3JSC8JSObject15initializeIndexERNS_2VMEjNS_7JSValueE(i3, i17, i21, i7);
   i21 = i21 + 1 | 0;
   if (i21 >>> 0 >= i18 >>> 0) {
    break;
   }
  }
 }
 HEAP32[i1 + 4 >> 2] = -5;
 HEAP32[i1 >> 2] = i2;
 i2 = HEAP32[i14 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i8 >> 2] = i9;
  __ZN3WTF7HashSetIPN3JSC20MarkedArgumentBufferENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i2, i8) | 0;
 }
 if ((HEAP32[i11 >> 2] | 0) == 8) {
  STACKTOP = i5;
  return;
 }
 i11 = HEAP32[i12 >> 2] | 0;
 if ((i11 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 __ZdaPv(i11);
 STACKTOP = i5;
 return;
}
function __ZN3JSC21getStaticFunctionSlotINS_8JSObjectEEEbPNS_9ExecStateERKNS_9HashTableEPS1_NS_12PropertyNameERNS_12PropertySlotE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i7 = i4;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i4 >> 2] = HEAP32[i7 >> 2];
 i7 = i6 | 0;
 i8 = i6 + 16 | 0;
 i9 = i6 + 24 | 0;
 i10 = i6 + 32 | 0;
 i11 = i6 + 40 | 0;
 i12 = HEAP32[i4 >> 2] | 0;
 i4 = i3 | 0;
 i13 = HEAP32[i4 >> 2] | 0;
 i14 = i1 + 16 | 0;
 i15 = HEAP32[(HEAP32[i14 >> 2] & -65536) + 1076 >> 2] | 0;
 HEAP32[i8 >> 2] = i12;
 i16 = __ZN3JSC9Structure3getERNS_2VMENS_12PropertyNameERjRPNS_6JSCellE(i13, i15, i8, i7, i6 + 8 | 0) | 0;
 if ((i16 | 0) != -1) {
  if ((i16 | 0) < 100) {
   i17 = i3 + (i16 + 1 << 3) | 0;
  } else {
   i17 = (HEAP32[i3 + 4 >> 2] | 0) - 8 + (99 - i16 << 3) | 0;
  }
  i8 = i17 | 0;
  i17 = HEAP32[i8 >> 2] | 0;
  i15 = HEAP32[i8 + 4 >> 2] | 0;
  i8 = i15;
  do {
   if ((HEAP8[(HEAP32[i4 >> 2] | 0) + 58 | 0] & 8) != 0 & ((i8 | 0) == (-5 | 0) & 0 == 0)) {
    if ((HEAP8[(HEAP32[i17 >> 2] | 0) + 52 | 0] | 0) != 8) {
     break;
    }
    i13 = i9 | 0;
    HEAP32[i13 >> 2] = i17 & -1;
    HEAP32[i13 + 4 >> 2] = i15 & 0 | -5;
    __ZN3JSC8JSObject22fillGetterPropertySlotERNS_12PropertySlotENS_7JSValueEji(i3, i5, i9, HEAP32[i7 >> 2] | 0, i16);
    i18 = 1;
    STACKTOP = i6;
    return i18 | 0;
   }
  } while (0);
  i9 = HEAP32[i7 >> 2] | 0;
  i7 = i5 + 8 | 0;
  HEAP32[i7 >> 2] = i17 & -1;
  HEAP32[i7 + 4 >> 2] = i8 | i15 & 0;
  HEAP32[i5 >> 2] = i9;
  HEAP32[i5 + 32 >> 2] = i3;
  HEAP32[i5 + 16 >> 2] = 1;
  HEAP32[i5 + 20 >> 2] = i16;
  i18 = 1;
  STACKTOP = i6;
  return i18 | 0;
 }
 HEAP32[i10 >> 2] = i12;
 if (__ZN3JSC8JSObject22getOwnPropertySlotSlowEPNS_9ExecStateENS_12PropertyNameERNS_12PropertySlotE(i3, i1, i10, i5) | 0) {
  i18 = 1;
  STACKTOP = i6;
  return i18 | 0;
 }
 i10 = i2 + 12 | 0;
 if ((HEAP32[i10 >> 2] | 0) == 0) {
  __ZNK3JSC9HashTable11createTableERNS_2VME(i2, HEAP32[(HEAP32[i14 >> 2] & -65536) + 1076 >> 2] | 0);
 }
 i14 = (HEAP32[i12 + 16 >> 2] & 4 | 0) != 0 ? i12 : 0;
 if ((i14 | 0) == 0) {
  i18 = 0;
  STACKTOP = i6;
  return i18 | 0;
 }
 i16 = (HEAP32[i10 >> 2] | 0) + (((HEAP32[i14 + 16 >> 2] | 0) >>> 7 & HEAP32[i2 + 4 >> 2]) * 24 & -1) | 0;
 i2 = HEAP32[i16 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i18 = 0;
  STACKTOP = i6;
  return i18 | 0;
 } else {
  i19 = i16;
  i20 = i2;
 }
 while (1) {
  if ((i20 | 0) == (i14 | 0)) {
   break;
  }
  i2 = HEAP32[i19 + 20 >> 2] | 0;
  if ((i2 | 0) == 0) {
   i18 = 0;
   i21 = 25;
   break;
  }
  i19 = i2;
  i20 = HEAP32[i2 >> 2] | 0;
 }
 if ((i21 | 0) == 25) {
  STACKTOP = i6;
  return i18 | 0;
 }
 if ((i19 | 0) == 0) {
  i18 = 0;
  STACKTOP = i6;
  return i18 | 0;
 }
 HEAP32[i11 >> 2] = i12;
 i18 = __ZN3JSC23setUpStaticFunctionSlotEPNS_9ExecStateEPKNS_9HashEntryEPNS_8JSObjectENS_12PropertyNameERNS_12PropertySlotE(i1, i19, i3, i11, i5) | 0;
 STACKTOP = i6;
 return i18 | 0;
}
function __ZN7WebCore13toNativeArrayIfEEN3WTF6VectorIT_Lj0ENS1_15CrashOnOverflowEEEPN3JSC9ExecStateENS6_7JSValueE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, d20 = +0, i21 = 0, d22 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i3 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 HEAP32[i6 >> 2] = 0;
 i9 = i3 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 i11 = HEAP32[i9 + 4 >> 2] | 0;
 i9 = i10;
 do {
  if ((i10 & 0 | 0) == 0 & (i11 & -1 | 0) == (-5 | 0)) {
   i12 = i9;
   if ((HEAP32[(i9 & -65536) + 1048 >> 2] | 0) == 2) {
    i13 = i12 + 8 | 0;
   } else {
    i13 = (HEAP32[i12 >> 2] | 0) + 32 | 0;
   }
   if ((HEAP32[i13 >> 2] | 0) != (__ZN3JSC7JSArray6s_infoE | 0)) {
    i14 = 9;
    break;
   }
   i12 = i9;
   if ((HEAP8[(HEAP32[i12 >> 2] | 0) + 55 | 0] & 30) == 0) {
    i15 = 0;
   } else {
    i15 = HEAP32[(HEAP32[i12 + 4 >> 2] | 0) - 8 >> 2] | 0;
   }
   HEAP32[i6 >> 2] = i15;
  } else {
   i14 = 9;
  }
 } while (0);
 if ((i14 | 0) == 9) {
  i14 = i7 | 0;
  HEAP32[i14 >> 2] = i10;
  HEAP32[i14 + 4 >> 2] = i11;
  __ZN7WebCore12toJSSequenceEPN3JSC9ExecStateENS0_7JSValueERj(i2, i7, i6) | 0;
 }
 if ((HEAP32[i3 + 4 >> 2] | 0) == -5) {
  i16 = __ZN3JSC6JSCell9getObjectEv(i9) | 0;
 } else {
  i16 = 0;
 }
 i9 = HEAP32[i6 >> 2] | 0;
 L17 : do {
  if ((i9 | 0) == 0) {
   i17 = 0;
   i18 = 0;
   i19 = 0;
  } else {
   if (i9 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   }
   i6 = __ZN3WTF18fastMallocGoodSizeEj(i9 << 2) | 0;
   i3 = i6 >>> 2;
   i7 = __ZN3WTF10fastMallocEj(i6) | 0;
   i6 = i7;
   i11 = i8 | 0;
   i14 = i5 | 0;
   i10 = i2 + 16 | 0;
   i15 = 0;
   while (1) {
    __ZNK3JSC8JSObject3getEPNS_9ExecStateEj(i8, i16, i2, i15);
    i13 = HEAP32[i11 >> 2] | 0;
    i12 = HEAP32[i11 + 4 >> 2] | 0;
    d20 = +HEAPF64[i11 >> 3];
    HEAP32[i14 >> 2] = i13;
    HEAP32[i14 + 4 >> 2] = i12;
    i21 = i12;
    do {
     if ((i21 | 0) == -1) {
      d22 = +(i13 | 0);
     } else {
      if (i21 >>> 0 < 4294967289 >>> 0) {
       d22 = d20;
       break;
      }
      d22 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i5, i2);
     }
    } while (0);
    i21 = (HEAP32[(HEAP32[i10 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
    if (!((HEAP32[i21 >> 2] & 0 | 0) == 0 & (HEAP32[i21 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
     break;
    }
    HEAPF32[i6 + (i15 << 2) >> 2] = d22;
    i21 = i15 + 1 | 0;
    if (i21 >>> 0 < i9 >>> 0) {
     i15 = i21;
    } else {
     i17 = i21;
     i18 = i3;
     i19 = i6;
     break L17;
    }
   }
   HEAP32[i1 >> 2] = 0;
   HEAP32[i1 + 4 >> 2] = 0;
   HEAP32[i1 + 8 >> 2] = 0;
   if ((i7 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   __ZN3WTF8fastFreeEPv(i7);
   STACKTOP = i4;
   return;
  }
 } while (0);
 HEAP32[i1 + 8 >> 2] = i17;
 HEAP32[i1 >> 2] = i19;
 HEAP32[i1 + 4 >> 2] = i18;
 STACKTOP = i4;
 return;
}
function __ZN3WTF9HashTableIPKN3JSC9ClassInfoENS_12KeyValuePairIS4_NS1_12WriteBarrierINS1_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7PtrHashIS4_EENS_7HashMapIS4_S8_SD_NS_10HashTraitsIS4_EENSF_IS8_EEE18KeyValuePairTraitsESG_E6rehashEiPS9_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 i4 = i1 + 8 | 0;
 HEAP32[i4 >> 2] = i2 - 1;
 i8 = __ZN3WTF10fastMallocEj(i2 << 3) | 0;
 if ((i2 | 0) > 0) {
  i9 = 0;
  while (1) {
   HEAP32[i8 + (i9 << 3) >> 2] = 0;
   HEAP32[i8 + (i9 << 3) + 4 >> 2] = 0;
   i9 = i9 + 1 | 0;
   if ((i9 | 0) >= (i2 | 0)) {
    break;
   }
  }
 }
 HEAP32[i6 >> 2] = i8;
 if ((i5 | 0) == 0) {
  i10 = 0;
  i11 = i1 + 16 | 0;
  HEAP32[i11 >> 2] = 0;
  i12 = i7;
  __ZN3WTF8fastFreeEPv(i12);
  return i10 | 0;
 } else {
  i13 = 0;
  i14 = 0;
 }
 while (1) {
  i8 = i7 + (i13 << 3) | 0;
  i2 = HEAP32[i8 >> 2] | 0;
  i9 = i2;
  if ((i9 | 0) == (-1 | 0) | (i9 | 0) == 0) {
   i15 = i14;
  } else {
   i16 = HEAP32[i6 >> 2] | 0;
   i17 = HEAP32[i4 >> 2] | 0;
   i18 = i9 + ~(i9 << 15) | 0;
   i9 = (i18 >>> 10 ^ i18) * 9 & -1;
   i18 = i9 >>> 6 ^ i9;
   i9 = i18 + ~(i18 << 11) | 0;
   i18 = i9 >>> 16 ^ i9;
   i9 = i17 & i18;
   i19 = i16 + (i9 << 3) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L11 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 7;
    } else {
     i24 = (i18 >>> 23) + ~i18 | 0;
     i25 = i24 << 12 ^ i24;
     i24 = i25 >>> 7 ^ i25;
     i25 = i24 << 2 ^ i24;
     i24 = i25 >>> 20 ^ i25 | 1;
     i25 = 0;
     i26 = 0;
     i27 = i9;
     i28 = i19;
     i29 = i20;
     while (1) {
      if ((i29 | 0) == (i2 | 0)) {
       i30 = i28;
       break L11;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i17;
      i34 = i16 + (i33 << 3) | 0;
      i35 = HEAP32[i34 >> 2] | 0;
      if ((i35 | 0) == 0) {
       i21 = i31;
       i22 = i34;
       i23 = 7;
       break;
      } else {
       i25 = i31;
       i26 = i32;
       i27 = i33;
       i28 = i34;
       i29 = i35;
      }
     }
    }
   } while (0);
   if ((i23 | 0) == 7) {
    i23 = 0;
    i30 = (i21 | 0) != 0 ? i21 : i22;
   }
   i16 = i8;
   i17 = i30;
   i2 = HEAP32[i16 + 4 >> 2] | 0;
   HEAP32[i17 >> 2] = HEAP32[i16 >> 2];
   HEAP32[i17 + 4 >> 2] = i2;
   i15 = (i8 | 0) == (i3 | 0) ? i30 : i14;
  }
  i2 = i13 + 1 | 0;
  if ((i2 | 0) == (i5 | 0)) {
   i10 = i15;
   break;
  } else {
   i13 = i2;
   i14 = i15;
  }
 }
 i11 = i1 + 16 | 0;
 HEAP32[i11 >> 2] = 0;
 i12 = i7;
 __ZN3WTF8fastFreeEPv(i12);
 return i10 | 0;
}
function __ZNK3JSC8JSObject3getEPNS_9ExecStateEj(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = (i2 | 0) == 0;
 i10 = i8 + 16 | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i8 + 20 >> 2] = -1;
 i11 = i8 + 24 | 0;
 HEAP32[i11 >> 2] = (i9 ? 0 : 0) | i2;
 HEAP32[i11 + 4 >> 2] = i9 ? -6 : -5;
 i9 = i2;
 while (1) {
  i2 = i9 | 0;
  i12 = HEAP32[i2 >> 2] | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  if ((i13 | 0) != 0) {
   if ((i13 | 0) != (HEAP32[i13 >> 2] | 0)) {
    i14 = 4;
    break;
   }
  }
  if (FUNCTION_TABLE_iiiii[HEAP32[(HEAP32[((HEAP32[(i9 & -65536) + 1048 >> 2] | 0) == 2 ? i9 + 8 | 0 : i12 + 32 | 0) >> 2] | 0) + 56 >> 2] & 15](i9, i3, i4, i8) | 0) {
   i14 = 9;
   break;
  }
  i12 = (HEAP32[i2 >> 2] | 0) + 8 | 0;
  i2 = HEAP32[i12 >> 2] | 0;
  if (!((i2 & 0 | 0) == 0 & (HEAP32[i12 + 4 >> 2] & -1 | 0) == (-5 | 0))) {
   i14 = 17;
   break;
  }
  i12 = i2;
  if ((HEAPU8[(HEAP32[i12 >> 2] | 0) + 52 | 0] | 0) >>> 0 <= 16 >>> 0) {
   i14 = 17;
   break;
  }
  i9 = i12;
 }
 if ((i14 | 0) == 17) {
  HEAP32[i1 + 4 >> 2] = -4;
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i5;
  return;
 } else if ((i14 | 0) == 9) {
  i9 = HEAP32[i10 >> 2] | 0;
  if ((i9 | 0) == 2) {
   __ZNK3JSC12PropertySlot14functionGetterEPNS_9ExecStateE(i1, i8, i3);
   STACKTOP = i5;
   return;
  } else if ((i9 | 0) == 1) {
   i10 = i8 + 8 | 0;
   i12 = HEAP32[i10 + 4 >> 2] | 0;
   i2 = i1 | 0;
   HEAP32[i2 >> 2] = HEAP32[i10 >> 2];
   HEAP32[i2 + 4 >> 2] = i12;
   STACKTOP = i5;
   return;
  } else if ((i9 | 0) == 4) {
   i9 = i8 + 8 | 0;
   i12 = HEAP32[i8 + 32 >> 2] | 0;
   i2 = (i12 | 0) == 0;
   i10 = FUNCTION_TABLE_iiiiiii[HEAP32[i9 >> 2] & 63](i3, (i2 ? 0 : 0) | i12, (i2 ? -6 : -5) | 0, HEAP32[i11 >> 2] | 0, HEAP32[i11 + 4 >> 2] | 0, HEAP32[i9 + 4 >> 2] | 0) | 0;
   i9 = i1 | 0;
   HEAP32[i9 >> 2] = i10;
   HEAP32[i9 + 4 >> 2] = tempRet0;
   STACKTOP = i5;
   return;
  } else {
   i9 = HEAP32[i8 + 8 >> 2] | 0;
   i10 = HEAP32[i8 + 32 >> 2] | 0;
   i8 = (i10 | 0) == 0;
   i2 = HEAP32[i11 >> 2] | 0;
   i12 = HEAP32[i11 + 4 >> 2] | 0;
   __ZN3JSC10Identifier4fromEPNS_9ExecStateEj(i7, i3, i4);
   i4 = i7 | 0;
   HEAP32[i6 >> 2] = HEAP32[i4 >> 2];
   i7 = FUNCTION_TABLE_iiiiiii[i9 & 63](i3, (i8 ? 0 : 0) | i10, (i8 ? -6 : -5) | 0, i2, i12, i6) | 0;
   i6 = i1 | 0;
   HEAP32[i6 >> 2] = i7;
   HEAP32[i6 + 4 >> 2] = tempRet0;
   i6 = HEAP32[i4 >> 2] | 0;
   if ((i6 | 0) == 0) {
    STACKTOP = i5;
    return;
   }
   i4 = i6 | 0;
   i7 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    STACKTOP = i5;
    return;
   } else {
    HEAP32[i4 >> 2] = i7;
    STACKTOP = i5;
    return;
   }
  }
 } else if ((i14 | 0) == 4) {
  _WTFCrash();
 }
}
function __ZN3JSC8JSObject15initializeIndexERNS_2VMEjNS_7JSValueE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, d14 = +0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i6 = i4;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i4 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i4 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 L1 : do {
  switch (HEAP8[(HEAP32[i1 >> 2] | 0) + 55 | 0] & 31 | 0) {
  case 26:
  case 27:
   {
    break;
   }
  case 20:
  case 21:
   {
    if ((HEAP32[i4 + 4 >> 2] | 0) == -1) {
     break L1;
    }
    i10 = i4 | 0;
    i11 = HEAP32[i10 + 4 >> 2] | 0;
    i12 = i7 | 0;
    HEAP32[i12 >> 2] = HEAP32[i10 >> 2];
    HEAP32[i12 + 4 >> 2] = i11;
    __ZN3JSC8JSObject55convertInt32ToDoubleOrContiguousWhilePerformingSetIndexERNS_2VMEjNS_7JSValueE(i1, i2, i3, i7);
    STACKTOP = i5;
    return;
   }
  case 22:
  case 23:
   {
    i11 = HEAP32[i4 + 4 >> 2] | 0;
    i12 = (i11 | 0) == -1;
    if (!(i12 | i11 >>> 0 < 4294967289 >>> 0)) {
     i11 = i4 | 0;
     i10 = HEAP32[i11 + 4 >> 2] | 0;
     i13 = i8 | 0;
     HEAP32[i13 >> 2] = HEAP32[i11 >> 2];
     HEAP32[i13 + 4 >> 2] = i10;
     __ZN3JSC8JSObject48convertDoubleToContiguousWhilePerformingSetIndexERNS_2VMEjNS_7JSValueE(i1, i2, i3, i8);
     STACKTOP = i5;
     return;
    }
    if (i12) {
     d14 = +(HEAP32[i4 >> 2] | 0);
    } else {
     d14 = +HEAPF64[i4 >> 3];
    }
    if (d14 != d14 | (tempDouble = +0, tempDouble != tempDouble)) {
     i12 = i4 | 0;
     i10 = HEAP32[i12 + 4 >> 2] | 0;
     i13 = i9 | 0;
     HEAP32[i13 >> 2] = HEAP32[i12 >> 2];
     HEAP32[i13 + 4 >> 2] = i10;
     __ZN3JSC8JSObject48convertDoubleToContiguousWhilePerformingSetIndexERNS_2VMEjNS_7JSValueE(i1, i2, i3, i9);
     STACKTOP = i5;
     return;
    } else {
     HEAPF64[(HEAP32[i1 + 4 >> 2] | 0) + (i3 << 3) >> 3] = d14;
     STACKTOP = i5;
     return;
    }
    break;
   }
  case 3:
   {
    i10 = i4 | 0;
    i13 = HEAP32[i10 + 4 >> 2] | 0;
    i12 = i6 | 0;
    HEAP32[i12 >> 2] = HEAP32[i10 >> 2];
    HEAP32[i12 + 4 >> 2] = i13;
    __ZN3JSC8JSObject26setIndexQuicklyToUndecidedERNS_2VMEjNS_7JSValueE(i1, i2, i3, i6);
    STACKTOP = i5;
    return;
   }
  case 28:
  case 30:
  case 29:
  case 31:
   {
    i13 = i4 | 0;
    i12 = HEAP32[i13 + 4 >> 2] | 0;
    i10 = (HEAP32[i1 + 4 >> 2] | 0) + 16 + (i3 << 3) | 0;
    HEAP32[i10 >> 2] = HEAP32[i13 >> 2];
    HEAP32[i10 + 4 >> 2] = i12;
    STACKTOP = i5;
    return;
   }
  default:
   {
    _WTFCrash();
   }
  }
 } while (0);
 i6 = i4 | 0;
 i4 = HEAP32[i6 + 4 >> 2] | 0;
 i2 = (HEAP32[i1 + 4 >> 2] | 0) + (i3 << 3) | 0;
 HEAP32[i2 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i2 + 4 >> 2] = i4;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore54jsCanvasRenderingContext2DPrototypeFunctionSetLineDashEPN3JSC9ExecStateE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 32 | 0;
 i7 = i1 + 40 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = i8;
 L1 : do {
  if ((i8 & 0 | 0) == 0 & (HEAP32[i7 + 4 >> 2] & -1 | 0) == (-5 | 0)) {
   i10 = i9;
   if ((HEAP32[(i9 & -65536) + 1048 >> 2] | 0) == 2) {
    i11 = i10 + 8 | 0;
   } else {
    i11 = (HEAP32[i10 >> 2] | 0) + 32 | 0;
   }
   i10 = HEAP32[i11 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   } else {
    i12 = i10;
   }
   while (1) {
    if ((i12 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i12 = HEAP32[i12 + 4 >> 2] | 0;
    if ((i12 | 0) == 0) {
     break L1;
    }
   }
   if ((i9 | 0) == 0) {
    break;
   }
   i10 = HEAP32[i9 + 12 >> 2] | 0;
   if ((HEAP32[i1 + 32 >> 2] | 0) == 1) {
    i13 = __ZN3JSC29createNotEnoughArgumentsErrorEPNS_9ExecStateE(i1) | 0;
    i14 = (i13 | 0) == 0;
    i15 = HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
    i16 = i4 | 0;
    HEAP32[i16 >> 2] = (i14 ? 0 : 0) | i13;
    HEAP32[i16 + 4 >> 2] = i14 ? -6 : -5;
    __ZN3JSC2VM14throwExceptionEPNS_9ExecStateENS_7JSValueE(i3, i15, i1, i4);
    i15 = i3 | 0;
    i17 = HEAP32[i15 + 4 >> 2] | 0;
    i18 = HEAP32[i15 >> 2] | 0;
    STACKTOP = i2;
    return (tempRet0 = i17, i18) | 0;
   }
   i15 = i1 + 48 | 0;
   i14 = HEAP32[i15 + 4 >> 2] | 0;
   i16 = i6 | 0;
   HEAP32[i16 >> 2] = HEAP32[i15 >> 2];
   HEAP32[i16 + 4 >> 2] = i14;
   __ZN7WebCore13toNativeArrayIfEEN3WTF6VectorIT_Lj0ENS1_15CrashOnOverflowEEEPN3JSC9ExecStateENS6_7JSValueE(i5, i1, i6);
   i14 = (HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if ((HEAP32[i14 >> 2] & 0 | 0) == 0 & (HEAP32[i14 + 4 >> 2] & -1 | 0) == (-6 | 0)) {
    __ZN7WebCore24CanvasRenderingContext2D11setLineDashERKN3WTF6VectorIfLj0ENS1_15CrashOnOverflowEEE(i10, i5);
   }
   i10 = i5 + 8 | 0;
   if ((HEAP32[i10 >> 2] | 0) != 0) {
    HEAP32[i10 >> 2] = 0;
   }
   i10 = i5 | 0;
   i14 = HEAP32[i10 >> 2] | 0;
   if ((i14 | 0) == 0) {
    i17 = -4;
    i18 = 0;
    STACKTOP = i2;
    return (tempRet0 = i17, i18) | 0;
   }
   HEAP32[i10 >> 2] = 0;
   HEAP32[i5 + 4 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i14);
   i17 = -4;
   i18 = 0;
   STACKTOP = i2;
   return (tempRet0 = i17, i18) | 0;
  }
 } while (0);
 i5 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 i1 = (i5 | 0) == 0;
 i17 = (i1 ? -6 : -5) | 0;
 i18 = (i1 ? 0 : 0) | i5;
 STACKTOP = i2;
 return (tempRet0 = i17, i18) | 0;
}
function __ZN7WebCore41setJSCanvasRenderingContext2DTextBaselineEPN3JSC9ExecStateExx(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i7 | 0;
 HEAP32[i9 >> 2] = i4;
 HEAP32[i9 + 4 >> 2] = i5;
 i9 = i2;
 i10 = i5;
 i5 = i4;
 L1 : do {
  if ((i2 & 0 | 0) == 0 & (i3 & -1 | 0) == (-5 | 0)) {
   i4 = i9;
   if ((HEAP32[(i9 & -65536) + 1048 >> 2] | 0) == 2) {
    i11 = i4 + 8 | 0;
   } else {
    i11 = (HEAP32[i4 >> 2] | 0) + 32 | 0;
   }
   i4 = HEAP32[i11 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   } else {
    i12 = i4;
   }
   while (1) {
    if ((i12 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i12 = HEAP32[i12 + 4 >> 2] | 0;
    if ((i12 | 0) == 0) {
     break L1;
    }
   }
   if ((i9 | 0) == 0) {
    break;
   }
   i4 = HEAP32[i9 + 12 >> 2] | 0;
   do {
    if ((i10 | 0) == (-5 | 0)) {
     if ((HEAP8[(HEAP32[i5 >> 2] | 0) + 52 | 0] | 0) != 5) {
      i13 = 14;
      break;
     }
     i14 = i5;
     i13 = 15;
    } else if ((i10 | 0) == (-6 | 0)) {
     HEAP32[i8 >> 2] = 0;
    } else {
     i13 = 14;
    }
   } while (0);
   if ((i13 | 0) == 14) {
    i14 = __ZNK3JSC7JSValue16toStringSlowCaseEPNS_9ExecStateE(i7, i1) | 0;
    i13 = 15;
   }
   do {
    if ((i13 | 0) == 15) {
     i15 = i14 + 12 | 0;
     i16 = HEAP32[i15 >> 2] | 0;
     if ((i16 | 0) == 0) {
      __ZNK3JSC12JSRopeString11resolveRopeEPNS_9ExecStateE(i14, i1);
      i17 = HEAP32[i15 >> 2] | 0;
      HEAP32[i8 >> 2] = i17;
      if ((i17 | 0) == 0) {
       break;
      } else {
       i18 = i17;
      }
     } else {
      HEAP32[i8 >> 2] = i16;
      i18 = i16;
     }
     i16 = i18 | 0;
     HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
    }
   } while (0);
   i16 = (HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if ((HEAP32[i16 >> 2] & 0 | 0) == 0 & (HEAP32[i16 + 4 >> 2] & -1 | 0) == (-6 | 0)) {
    __ZN7WebCore24CanvasRenderingContext2D15setTextBaselineERKN3WTF6StringE(i4, i8);
   }
   i16 = HEAP32[i8 >> 2] | 0;
   if ((i16 | 0) == 0) {
    STACKTOP = i6;
    return;
   }
   i17 = i16 | 0;
   i15 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i16);
    STACKTOP = i6;
    return;
   } else {
    HEAP32[i17 >> 2] = i15;
    STACKTOP = i6;
    return;
   }
  }
 } while (0);
 __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 STACKTOP = i6;
 return;
}
function __ZN7WebCore38setJSCanvasRenderingContext2DTextAlignEPN3JSC9ExecStateExx(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i7 | 0;
 HEAP32[i9 >> 2] = i4;
 HEAP32[i9 + 4 >> 2] = i5;
 i9 = i2;
 i10 = i5;
 i5 = i4;
 L1 : do {
  if ((i2 & 0 | 0) == 0 & (i3 & -1 | 0) == (-5 | 0)) {
   i4 = i9;
   if ((HEAP32[(i9 & -65536) + 1048 >> 2] | 0) == 2) {
    i11 = i4 + 8 | 0;
   } else {
    i11 = (HEAP32[i4 >> 2] | 0) + 32 | 0;
   }
   i4 = HEAP32[i11 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   } else {
    i12 = i4;
   }
   while (1) {
    if ((i12 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i12 = HEAP32[i12 + 4 >> 2] | 0;
    if ((i12 | 0) == 0) {
     break L1;
    }
   }
   if ((i9 | 0) == 0) {
    break;
   }
   i4 = HEAP32[i9 + 12 >> 2] | 0;
   do {
    if ((i10 | 0) == (-6 | 0)) {
     HEAP32[i8 >> 2] = 0;
    } else if ((i10 | 0) == (-5 | 0)) {
     if ((HEAP8[(HEAP32[i5 >> 2] | 0) + 52 | 0] | 0) != 5) {
      i13 = 14;
      break;
     }
     i14 = i5;
     i13 = 15;
    } else {
     i13 = 14;
    }
   } while (0);
   if ((i13 | 0) == 14) {
    i14 = __ZNK3JSC7JSValue16toStringSlowCaseEPNS_9ExecStateE(i7, i1) | 0;
    i13 = 15;
   }
   do {
    if ((i13 | 0) == 15) {
     i15 = i14 + 12 | 0;
     i16 = HEAP32[i15 >> 2] | 0;
     if ((i16 | 0) == 0) {
      __ZNK3JSC12JSRopeString11resolveRopeEPNS_9ExecStateE(i14, i1);
      i17 = HEAP32[i15 >> 2] | 0;
      HEAP32[i8 >> 2] = i17;
      if ((i17 | 0) == 0) {
       break;
      } else {
       i18 = i17;
      }
     } else {
      HEAP32[i8 >> 2] = i16;
      i18 = i16;
     }
     i16 = i18 | 0;
     HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
    }
   } while (0);
   i16 = (HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if ((HEAP32[i16 >> 2] & 0 | 0) == 0 & (HEAP32[i16 + 4 >> 2] & -1 | 0) == (-6 | 0)) {
    __ZN7WebCore24CanvasRenderingContext2D12setTextAlignERKN3WTF6StringE(i4, i8);
   }
   i16 = HEAP32[i8 >> 2] | 0;
   if ((i16 | 0) == 0) {
    STACKTOP = i6;
    return;
   }
   i17 = i16 | 0;
   i15 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i16);
    STACKTOP = i6;
    return;
   } else {
    HEAP32[i17 >> 2] = i15;
    STACKTOP = i6;
    return;
   }
  }
 } while (0);
 __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 STACKTOP = i6;
 return;
}
function __ZN3JSC8putEntryEPNS_9ExecStateEPKNS_9HashEntryENS_12PropertyNameENS_7JSValueERNS_15PutPropertySlotE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i7 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i7 >> 2];
 i7 = i4;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i4 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i4 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
 i7 = i6 | 0;
 i8 = i6 + 32 | 0;
 i9 = i6 + 40 | 0;
 i10 = i6 + 48 | 0;
 i11 = HEAP8[i2 + 4 | 0] | 0;
 if ((i11 & 16) != 0) {
  i12 = HEAP32[i5 + 4 >> 2] | 0;
  i13 = HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
  i14 = HEAP32[i3 >> 2] | 0;
  i3 = i4 | 0;
  i15 = HEAP32[i3 >> 2] | 0;
  i16 = HEAP32[i3 + 4 >> 2] | 0;
  i3 = (i12 | 0) == 0;
  HEAP32[i7 >> 2] = 0;
  HEAP32[i7 + 4 >> 2] = 0;
  i17 = i7 + 8 | 0;
  HEAP32[i17 >> 2] = (i3 ? 0 : 0) | i12;
  HEAP32[i17 + 4 >> 2] = i3 ? -6 : -5;
  HEAP8[i7 + 20 | 0] = 0;
  HEAP8[i7 + 21 | 0] = 0;
  HEAP32[i7 + 24 >> 2] = 0;
  HEAP32[i8 >> 2] = i14;
  i14 = i9 | 0;
  HEAP32[i14 >> 2] = i15;
  HEAP32[i14 + 4 >> 2] = i16;
  if ((i15 & 0 | 0) == 0 & (i16 & -1 | 0) == (-5 | 0)) {
   i18 = __ZN3JSC21getCallableObjectSlowEPNS_6JSCellE(i15) | 0;
  } else {
   i18 = 0;
  }
  __ZN3JSC8JSObject17putDirectInternalILNS0_7PutModeE1EEEbRNS_2VMENS_12PropertyNameENS_7JSValueEjRNS_15PutPropertySlotEPNS_6JSCellE(i12, i13, i8, i9, 0, i7, i18) | 0;
  STACKTOP = i6;
  return;
 }
 if ((i11 & 2) == 0) {
  i11 = i2 + 16 | 0;
  i2 = i5 + 8 | 0;
  i18 = i4 | 0;
  FUNCTION_TABLE_viiiii[HEAP32[i11 >> 2] & 63](i1, HEAP32[i2 >> 2] | 0, HEAP32[i2 + 4 >> 2] | 0, HEAP32[i18 >> 2] | 0, HEAP32[i18 + 4 >> 2] | 0);
  i18 = i5 + 4 | 0;
  i2 = HEAP32[i18 >> 2] | 0;
  i4 = HEAP32[i11 >> 2] | 0;
  HEAP32[i5 >> 2] = 3;
  HEAP32[i18 >> 2] = i2;
  HEAP32[i5 + 24 >> 2] = i4;
  STACKTOP = i6;
  return;
 }
 if ((HEAP8[i5 + 20 | 0] & 1) == 0) {
  STACKTOP = i6;
  return;
 }
 __ZN3WTF6StringC1EPKc(i10, HEAP32[__ZN3JSC36StrictModeReadonlyPropertyWriteErrorE >> 2] | 0);
 __ZN3JSC14throwTypeErrorEPNS_9ExecStateERKN3WTF6StringE(i1, i10) | 0;
 i1 = HEAP32[i10 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i10 = i1 | 0;
 i5 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i6;
  return;
 } else {
  HEAP32[i10 >> 2] = i5;
  STACKTOP = i6;
  return;
 }
}
function __ZN7WebCore49jsCanvasRenderingContext2DPrototypeFunctionRotateEPN3JSC9ExecStateE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, d18 = +0, d19 = +0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i1 + 40 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = i7;
 L1 : do {
  if ((i7 & 0 | 0) == 0 & (HEAP32[i6 + 4 >> 2] & -1 | 0) == (-5 | 0)) {
   i9 = i8;
   if ((HEAP32[(i8 & -65536) + 1048 >> 2] | 0) == 2) {
    i10 = i9 + 8 | 0;
   } else {
    i10 = (HEAP32[i9 >> 2] | 0) + 32 | 0;
   }
   i9 = HEAP32[i10 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   } else {
    i11 = i9;
   }
   while (1) {
    if ((i11 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i11 = HEAP32[i11 + 4 >> 2] | 0;
    if ((i11 | 0) == 0) {
     break L1;
    }
   }
   if ((i8 | 0) == 0) {
    break;
   }
   i9 = HEAP32[i8 + 12 >> 2] | 0;
   if ((HEAP32[i1 + 32 >> 2] | 0) == 1) {
    i12 = __ZN3JSC29createNotEnoughArgumentsErrorEPNS_9ExecStateE(i1) | 0;
    i13 = (i12 | 0) == 0;
    i14 = HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
    i15 = i4 | 0;
    HEAP32[i15 >> 2] = (i13 ? 0 : 0) | i12;
    HEAP32[i15 + 4 >> 2] = i13 ? -6 : -5;
    __ZN3JSC2VM14throwExceptionEPNS_9ExecStateENS_7JSValueE(i3, i14, i1, i4);
    i14 = i3 | 0;
    i16 = HEAP32[i14 + 4 >> 2] | 0;
    i17 = HEAP32[i14 >> 2] | 0;
    STACKTOP = i2;
    return (tempRet0 = i16, i17) | 0;
   }
   i14 = i1 + 48 | 0;
   i13 = HEAP32[i14 >> 2] | 0;
   i15 = HEAP32[i14 + 4 >> 2] | 0;
   d18 = +HEAPF64[i14 >> 3];
   i14 = i5 | 0;
   HEAP32[i14 >> 2] = i13;
   HEAP32[i14 + 4 >> 2] = i15;
   i14 = i15;
   do {
    if ((i14 | 0) == -1) {
     d19 = +(i13 | 0);
    } else {
     if (i14 >>> 0 < 4294967289 >>> 0) {
      d19 = d18;
      break;
     }
     d19 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i5, i1);
    }
   } while (0);
   i14 = (HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i14 >> 2] & 0 | 0) == 0 & (HEAP32[i14 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i16 = -4;
    i17 = 0;
    STACKTOP = i2;
    return (tempRet0 = i16, i17) | 0;
   }
   __ZN7WebCore24CanvasRenderingContext2D6rotateEf(i9, d19);
   i16 = -4;
   i17 = 0;
   STACKTOP = i2;
   return (tempRet0 = i16, i17) | 0;
  }
 } while (0);
 i5 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 i1 = (i5 | 0) == 0;
 i16 = (i1 ? -6 : -5) | 0;
 i17 = (i1 ? 0 : 0) | i5;
 STACKTOP = i2;
 return (tempRet0 = i16, i17) | 0;
}
function __ZN7WebCore33setJSCanvasRenderingContext2DFontEPN3JSC9ExecStateExx(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i7 | 0;
 HEAP32[i9 >> 2] = i4;
 HEAP32[i9 + 4 >> 2] = i5;
 i9 = i2;
 i10 = i5;
 i5 = i4;
 L1 : do {
  if ((i2 & 0 | 0) == 0 & (i3 & -1 | 0) == (-5 | 0)) {
   i4 = i9;
   if ((HEAP32[(i9 & -65536) + 1048 >> 2] | 0) == 2) {
    i11 = i4 + 8 | 0;
   } else {
    i11 = (HEAP32[i4 >> 2] | 0) + 32 | 0;
   }
   i4 = HEAP32[i11 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   } else {
    i12 = i4;
   }
   while (1) {
    if ((i12 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i12 = HEAP32[i12 + 4 >> 2] | 0;
    if ((i12 | 0) == 0) {
     break L1;
    }
   }
   if ((i9 | 0) == 0) {
    break;
   }
   i4 = HEAP32[i9 + 12 >> 2] | 0;
   do {
    if ((i10 | 0) == (-6 | 0)) {
     HEAP32[i8 >> 2] = 0;
    } else if ((i10 | 0) == (-5 | 0)) {
     if ((HEAP8[(HEAP32[i5 >> 2] | 0) + 52 | 0] | 0) != 5) {
      i13 = 14;
      break;
     }
     i14 = i5;
     i13 = 15;
    } else {
     i13 = 14;
    }
   } while (0);
   if ((i13 | 0) == 14) {
    i14 = __ZNK3JSC7JSValue16toStringSlowCaseEPNS_9ExecStateE(i7, i1) | 0;
    i13 = 15;
   }
   do {
    if ((i13 | 0) == 15) {
     i15 = i14 + 12 | 0;
     i16 = HEAP32[i15 >> 2] | 0;
     if ((i16 | 0) == 0) {
      __ZNK3JSC12JSRopeString11resolveRopeEPNS_9ExecStateE(i14, i1);
      i17 = HEAP32[i15 >> 2] | 0;
      HEAP32[i8 >> 2] = i17;
      if ((i17 | 0) == 0) {
       break;
      } else {
       i18 = i17;
      }
     } else {
      HEAP32[i8 >> 2] = i16;
      i18 = i16;
     }
     i16 = i18 | 0;
     HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
    }
   } while (0);
   i16 = (HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if ((HEAP32[i16 >> 2] & 0 | 0) == 0 & (HEAP32[i16 + 4 >> 2] & -1 | 0) == (-6 | 0)) {
    __ZN7WebCore24CanvasRenderingContext2D7setFontERKN3WTF6StringE(i4, i8);
   }
   i16 = HEAP32[i8 >> 2] | 0;
   if ((i16 | 0) == 0) {
    STACKTOP = i6;
    return;
   }
   i17 = i16 | 0;
   i15 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i16);
    STACKTOP = i6;
    return;
   } else {
    HEAP32[i17 >> 2] = i15;
    STACKTOP = i6;
    return;
   }
  }
 } while (0);
 __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 STACKTOP = i6;
 return;
}
function __ZN3JSC7JSArray22tryCreateUninitializedERNS_2VMEPNS_9StructureEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i3 >>> 0 > 4 >>> 0 ? i3 : 4;
 if (i9 >>> 0 > 268435456 >>> 0) {
  i10 = 0;
  STACKTOP = i4;
  return i10 | 0;
 }
 i11 = i2 + 55 | 0;
 i12 = i9 << 3;
 do {
  if (((HEAP8[i11] & 30) - 28 & 255) >>> 0 < 3 >>> 0) {
   i13 = i12 + 24 | 0;
   i14 = i1 + 19600 | 0;
   i15 = HEAP32[i14 >> 2] | 0;
   do {
    if (i15 >>> 0 < i13 >>> 0) {
     __ZN3JSC11CopiedSpace19tryAllocateSlowCaseEjPPv(i8, i1 + 19596 | 0, i13, i7);
     if ((HEAP8[i8 | 0] & 1) == 0) {
      i10 = 0;
     } else {
      break;
     }
     STACKTOP = i4;
     return i10 | 0;
    } else {
     HEAP32[i14 >> 2] = i15 - i13;
     HEAP32[i7 >> 2] = (HEAP32[i1 + 19604 >> 2] | 0) + (-i15 | 0);
     HEAP8[i8 | 0] = 1;
    }
   } while (0);
   i15 = HEAP32[i7 >> 2] | 0;
   i13 = i15 + 8 | 0;
   i14 = i15;
   HEAP32[i14 >> 2] = i3;
   HEAP32[i14 + 4 >> 2] = i9;
   HEAP32[i15 + 12 >> 2] = 0;
   HEAP32[i13 >> 2] = 0;
   HEAP32[i15 + 16 >> 2] = i3;
   i16 = i13;
  } else {
   i13 = i12 + 8 | 0;
   i15 = i1 + 19600 | 0;
   i14 = HEAP32[i15 >> 2] | 0;
   do {
    if (i14 >>> 0 < i13 >>> 0) {
     __ZN3JSC11CopiedSpace19tryAllocateSlowCaseEjPPv(i6, i1 + 19596 | 0, i13, i5);
     if ((HEAP8[i6 | 0] & 1) == 0) {
      i10 = 0;
     } else {
      break;
     }
     STACKTOP = i4;
     return i10 | 0;
    } else {
     HEAP32[i15 >> 2] = i14 - i13;
     HEAP32[i5 >> 2] = (HEAP32[i1 + 19604 >> 2] | 0) + (-i14 | 0);
     HEAP8[i6 | 0] = 1;
    }
   } while (0);
   i14 = HEAP32[i5 >> 2] | 0;
   i13 = i14 + 8 | 0;
   i15 = i13;
   HEAP32[i14 + 4 >> 2] = i9;
   HEAP32[i14 >> 2] = i3;
   if (!((HEAP8[i11] & 30) == 22 & i9 >>> 0 > i3 >>> 0)) {
    i16 = i15;
    break;
   }
   i14 = i13;
   i13 = i3;
   while (1) {
    HEAPF64[i14 + (i13 << 3) >> 3] = +NaN;
    i17 = i13 + 1 | 0;
    if (i17 >>> 0 < i9 >>> 0) {
     i13 = i17;
    } else {
     i16 = i15;
     break;
    }
   }
  }
 } while (0);
 i9 = i1 + 13176 | 0;
 i1 = i9 | 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i18 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i9, 8) | 0;
 } else {
  HEAP32[i1 >> 2] = HEAP32[i3 >> 2];
  i18 = i3;
 }
 HEAP32[i18 >> 2] = i2;
 HEAP32[i18 + 4 >> 2] = i16;
 i10 = i18;
 STACKTOP = i4;
 return i10 | 0;
}
function __ZN3WTF9HashTableIPN3JSC20MarkedArgumentBufferES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6removeEPS3_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 HEAP32[i2 >> 2] = -1;
 i2 = i1 + 16 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 i3 = i1 + 12 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 HEAP32[i3 >> 2] = i4;
 i3 = i1 + 4 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 if (!((i4 * 6 & -1 | 0) < (i5 | 0) & (i5 | 0) > 8)) {
  return;
 }
 i4 = (i5 | 0) / 2 & -1;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i3 >> 2] = i4;
 i3 = i1 + 8 | 0;
 HEAP32[i3 >> 2] = i4 - 1;
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i4 << 2) | 0;
 if ((i5 | 0) != 0) {
  i4 = 0;
  while (1) {
   i1 = HEAP32[i7 + (i4 << 2) >> 2] | 0;
   i8 = i1;
   if (!((i8 | 0) == (-1 | 0) | (i8 | 0) == 0)) {
    i9 = HEAP32[i6 >> 2] | 0;
    i10 = HEAP32[i3 >> 2] | 0;
    i11 = i8 + ~(i8 << 15) | 0;
    i8 = (i11 >>> 10 ^ i11) * 9 & -1;
    i11 = i8 >>> 6 ^ i8;
    i8 = i11 + ~(i11 << 11) | 0;
    i11 = i8 >>> 16 ^ i8;
    i8 = i10 & i11;
    i12 = i9 + (i8 << 2) | 0;
    i13 = HEAP32[i12 >> 2] | 0;
    L9 : do {
     if ((i13 | 0) == 0) {
      i14 = 0;
      i15 = i12;
      i16 = 6;
     } else {
      i17 = (i11 >>> 23) + ~i11 | 0;
      i18 = i17 << 12 ^ i17;
      i17 = i18 >>> 7 ^ i18;
      i18 = i17 << 2 ^ i17;
      i17 = i18 >>> 20 ^ i18 | 1;
      i18 = 0;
      i19 = 0;
      i20 = i8;
      i21 = i12;
      i22 = i13;
      while (1) {
       if ((i22 | 0) == (i1 | 0)) {
        i23 = i21;
        break L9;
       }
       i24 = (i22 | 0) == -1 ? i21 : i18;
       i25 = (i19 | 0) == 0 ? i17 : i19;
       i26 = i25 + i20 & i10;
       i27 = i9 + (i26 << 2) | 0;
       i28 = HEAP32[i27 >> 2] | 0;
       if ((i28 | 0) == 0) {
        i14 = i24;
        i15 = i27;
        i16 = 6;
        break;
       } else {
        i18 = i24;
        i19 = i25;
        i20 = i26;
        i21 = i27;
        i22 = i28;
       }
      }
     }
    } while (0);
    if ((i16 | 0) == 6) {
     i16 = 0;
     i23 = (i14 | 0) != 0 ? i14 : i15;
    }
    HEAP32[i23 >> 2] = i1;
   }
   i4 = i4 + 1 | 0;
   if ((i4 | 0) == (i5 | 0)) {
    break;
   }
  }
 }
 HEAP32[i2 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i7);
 return;
}
function __ZN3JSC9Structure27putWillGrowOutOfLineStorageEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i2 = i1 + 40 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   do {
    if (!(__ZN3WTF19isCompilationThreadEv() | 0)) {
     i4 = HEAP32[i1 + 48 >> 2] | 0;
     i5 = HEAPU8[i1 + 56 | 0] | 0;
     if ((i4 | 0) < (i5 | 0)) {
      i6 = i4 + 1 | 0;
     } else {
      i6 = ((i4 | 0) < 100 ? 0 : i4 - 99 | 0) + i5 | 0;
     }
     i7 = HEAP32[i3 + 16 >> 2] | 0;
     i8 = HEAP32[i3 + 24 >> 2] | 0;
     i9 = (i8 | 0) == 0;
     if (i9) {
      i10 = 0;
     } else {
      i10 = HEAP32[i8 + 8 >> 2] | 0;
     }
     if ((i6 | 0) != (i10 + i7 | 0)) {
      _WTFCrash();
      return 0;
     }
     if (i9) {
      i11 = 0;
     } else {
      i11 = HEAP32[i8 + 8 >> 2] | 0;
     }
     i8 = i11 + i7 | 0;
     if (((i8 >>> 0 < i5 >>> 0 ? 0 : i8 - i5 | 0) | 0) == (((i4 | 0) < 100 ? 0 : i4 - 99 | 0) | 0)) {
      break;
     }
     _WTFCrash();
     return 0;
    }
   } while (0);
   i4 = HEAP32[i2 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   i5 = HEAP32[i4 + 24 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     if ((HEAP32[i5 + 8 >> 2] | 0) == 0) {
      break;
     } else {
      i12 = 0;
     }
     return i12 | 0;
    }
   } while (0);
   i5 = HEAP32[i4 + 16 >> 2] | 0;
   i8 = HEAP32[i1 + 48 >> 2] | 0;
   i7 = (i8 | 0) < 100 ? 0 : i8 - 99 | 0;
   do {
    if ((i7 | 0) == 0) {
     i13 = 0;
    } else {
     if (i7 >>> 0 < 5 >>> 0) {
      i13 = 4;
      break;
     }
     i8 = i7 - 1 | 0;
     i9 = i8 >>> 1 | i8;
     i8 = i9 >>> 2 | i9;
     i9 = i8 >>> 4 | i8;
     i8 = i9 >>> 8 | i9;
     i13 = (i8 >>> 16 | i8) + 1 | 0;
    }
   } while (0);
   i12 = (i5 | 0) == ((HEAPU8[i1 + 56 | 0] | 0) + i13 | 0);
   return i12 | 0;
  }
 } while (0);
 i13 = HEAP32[i1 + 48 >> 2] | 0;
 i1 = (i13 | 0) < 100 ? 0 : i13 - 99 | 0;
 do {
  if ((i1 | 0) == 0) {
   i14 = 0;
  } else {
   if (i1 >>> 0 < 5 >>> 0) {
    i14 = 4;
    break;
   }
   i13 = i1 - 1 | 0;
   i2 = i13 >>> 1 | i13;
   i13 = i2 >>> 2 | i2;
   i2 = i13 >>> 4 | i13;
   i13 = i2 >>> 8 | i2;
   i14 = (i13 >>> 16 | i13) + 1 | 0;
  }
 } while (0);
 i12 = (i1 | 0) == (i14 | 0);
 return i12 | 0;
}
function __ZN7WebCore56jsCanvasRenderingContext2DPrototypeFunctionSetMiterLimitEPN3JSC9ExecStateE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, d14 = +0, i15 = 0, i16 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 40 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i5;
 L1 : do {
  if ((i5 & 0 | 0) == 0 & (HEAP32[i4 + 4 >> 2] & -1 | 0) == (-5 | 0)) {
   i7 = i6;
   if ((HEAP32[(i6 & -65536) + 1048 >> 2] | 0) == 2) {
    i8 = i7 + 8 | 0;
   } else {
    i8 = (HEAP32[i7 >> 2] | 0) + 32 | 0;
   }
   i7 = HEAP32[i8 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   } else {
    i9 = i7;
   }
   while (1) {
    if ((i9 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i9 = HEAP32[i9 + 4 >> 2] | 0;
    if ((i9 | 0) == 0) {
     break L1;
    }
   }
   if ((i6 | 0) == 0) {
    break;
   }
   i7 = HEAP32[i6 + 12 >> 2] | 0;
   do {
    if ((HEAP32[i1 + 32 >> 2] | 0) == 1) {
     HEAP32[i3 + 4 >> 2] = -4;
     HEAP32[i3 >> 2] = 0;
     i10 = 15;
    } else {
     i11 = i1 + 48 | 0;
     i12 = HEAP32[i11 >> 2] | 0;
     i13 = HEAP32[i11 + 4 >> 2] | 0;
     i11 = i3 | 0;
     HEAP32[i11 >> 2] = i12;
     HEAP32[i11 + 4 >> 2] = i13;
     i11 = i13;
     if ((i11 | 0) == -1) {
      d14 = +(i12 | 0);
      break;
     }
     if (i11 >>> 0 >= 4294967289 >>> 0) {
      i10 = 15;
      break;
     }
     d14 = +HEAPF64[i3 >> 3];
    }
   } while (0);
   if ((i10 | 0) == 15) {
    d14 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i3, i1);
   }
   i11 = (HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i11 >> 2] & 0 | 0) == 0 & (HEAP32[i11 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i15 = -4;
    i16 = 0;
    STACKTOP = i2;
    return (tempRet0 = i15, i16) | 0;
   }
   __ZN7WebCore24CanvasRenderingContext2D13setMiterLimitEf(i7, d14);
   i15 = -4;
   i16 = 0;
   STACKTOP = i2;
   return (tempRet0 = i15, i16) | 0;
  }
 } while (0);
 i3 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 i1 = (i3 | 0) == 0;
 i15 = (i1 ? -6 : -5) | 0;
 i16 = (i1 ? 0 : 0) | i3;
 STACKTOP = i2;
 return (tempRet0 = i15, i16) | 0;
}
function __ZN7WebCore55jsCanvasRenderingContext2DPrototypeFunctionSetLineWidthEPN3JSC9ExecStateE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, d14 = +0, i15 = 0, i16 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 40 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i5;
 L1 : do {
  if ((i5 & 0 | 0) == 0 & (HEAP32[i4 + 4 >> 2] & -1 | 0) == (-5 | 0)) {
   i7 = i6;
   if ((HEAP32[(i6 & -65536) + 1048 >> 2] | 0) == 2) {
    i8 = i7 + 8 | 0;
   } else {
    i8 = (HEAP32[i7 >> 2] | 0) + 32 | 0;
   }
   i7 = HEAP32[i8 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   } else {
    i9 = i7;
   }
   while (1) {
    if ((i9 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i9 = HEAP32[i9 + 4 >> 2] | 0;
    if ((i9 | 0) == 0) {
     break L1;
    }
   }
   if ((i6 | 0) == 0) {
    break;
   }
   i7 = HEAP32[i6 + 12 >> 2] | 0;
   do {
    if ((HEAP32[i1 + 32 >> 2] | 0) == 1) {
     HEAP32[i3 + 4 >> 2] = -4;
     HEAP32[i3 >> 2] = 0;
     i10 = 15;
    } else {
     i11 = i1 + 48 | 0;
     i12 = HEAP32[i11 >> 2] | 0;
     i13 = HEAP32[i11 + 4 >> 2] | 0;
     i11 = i3 | 0;
     HEAP32[i11 >> 2] = i12;
     HEAP32[i11 + 4 >> 2] = i13;
     i11 = i13;
     if ((i11 | 0) == -1) {
      d14 = +(i12 | 0);
      break;
     }
     if (i11 >>> 0 >= 4294967289 >>> 0) {
      i10 = 15;
      break;
     }
     d14 = +HEAPF64[i3 >> 3];
    }
   } while (0);
   if ((i10 | 0) == 15) {
    d14 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i3, i1);
   }
   i11 = (HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i11 >> 2] & 0 | 0) == 0 & (HEAP32[i11 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i15 = -4;
    i16 = 0;
    STACKTOP = i2;
    return (tempRet0 = i15, i16) | 0;
   }
   __ZN7WebCore24CanvasRenderingContext2D12setLineWidthEf(i7, d14);
   i15 = -4;
   i16 = 0;
   STACKTOP = i2;
   return (tempRet0 = i15, i16) | 0;
  }
 } while (0);
 i3 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 i1 = (i3 | 0) == 0;
 i15 = (i1 ? -6 : -5) | 0;
 i16 = (i1 ? 0 : 0) | i3;
 STACKTOP = i2;
 return (tempRet0 = i15, i16) | 0;
}
function __ZN7WebCore51jsCanvasRenderingContext2DPrototypeFunctionSetAlphaEPN3JSC9ExecStateE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, d14 = +0, i15 = 0, i16 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 40 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i5;
 L1 : do {
  if ((i5 & 0 | 0) == 0 & (HEAP32[i4 + 4 >> 2] & -1 | 0) == (-5 | 0)) {
   i7 = i6;
   if ((HEAP32[(i6 & -65536) + 1048 >> 2] | 0) == 2) {
    i8 = i7 + 8 | 0;
   } else {
    i8 = (HEAP32[i7 >> 2] | 0) + 32 | 0;
   }
   i7 = HEAP32[i8 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   } else {
    i9 = i7;
   }
   while (1) {
    if ((i9 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i9 = HEAP32[i9 + 4 >> 2] | 0;
    if ((i9 | 0) == 0) {
     break L1;
    }
   }
   if ((i6 | 0) == 0) {
    break;
   }
   i7 = HEAP32[i6 + 12 >> 2] | 0;
   do {
    if ((HEAP32[i1 + 32 >> 2] | 0) == 1) {
     HEAP32[i3 + 4 >> 2] = -4;
     HEAP32[i3 >> 2] = 0;
     i10 = 15;
    } else {
     i11 = i1 + 48 | 0;
     i12 = HEAP32[i11 >> 2] | 0;
     i13 = HEAP32[i11 + 4 >> 2] | 0;
     i11 = i3 | 0;
     HEAP32[i11 >> 2] = i12;
     HEAP32[i11 + 4 >> 2] = i13;
     i11 = i13;
     if ((i11 | 0) == -1) {
      d14 = +(i12 | 0);
      break;
     }
     if (i11 >>> 0 >= 4294967289 >>> 0) {
      i10 = 15;
      break;
     }
     d14 = +HEAPF64[i3 >> 3];
    }
   } while (0);
   if ((i10 | 0) == 15) {
    d14 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i3, i1);
   }
   i11 = (HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i11 >> 2] & 0 | 0) == 0 & (HEAP32[i11 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i15 = -4;
    i16 = 0;
    STACKTOP = i2;
    return (tempRet0 = i15, i16) | 0;
   }
   __ZN7WebCore24CanvasRenderingContext2D8setAlphaEf(i7, d14);
   i15 = -4;
   i16 = 0;
   STACKTOP = i2;
   return (tempRet0 = i15, i16) | 0;
  }
 } while (0);
 i3 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 i1 = (i3 | 0) == 0;
 i15 = (i1 ? -6 : -5) | 0;
 i16 = (i1 ? 0 : 0) | i3;
 STACKTOP = i2;
 return (tempRet0 = i15, i16) | 0;
}
function __ZN7WebCore26JSCanvasRenderingContext2D3putEPN3JSC6JSCellEPNS1_9ExecStateENS1_12PropertyNameENS1_7JSValueERNS1_15PutPropertySlotE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i7 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i7 >> 2];
 i7 = i4;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i4 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i4 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 i11 = HEAP32[i3 >> 2] | 0;
 i3 = i4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i12 = HEAP32[i3 + 4 >> 2] | 0;
 if ((HEAP32[H_BASE + 2804 >> 2] | 0) == 0) {
  __ZNK3JSC9HashTable11createTableERNS_2VME(H_BASE + 2792, HEAP32[(HEAP32[i2 + 16 >> 2] & -65536) + 1076 >> 2] | 0);
 }
 i3 = (HEAP32[i11 + 16 >> 2] & 4 | 0) != 0 ? i11 : 0;
 L4 : do {
  if ((i3 | 0) != 0) {
   i13 = (HEAP32[H_BASE + 2804 >> 2] | 0) + (((HEAP32[i3 + 16 >> 2] | 0) >>> 7 & HEAP32[H_BASE + 2796 >> 2]) * 24 & -1) | 0;
   i14 = HEAP32[i13 >> 2] | 0;
   if ((i14 | 0) == 0) {
    break;
   }
   if ((i14 | 0) == (i3 | 0)) {
    if ((i13 | 0) == 0) {
     break;
    } else {
     i15 = i13;
    }
   } else {
    i14 = i13;
    while (1) {
     i13 = HEAP32[i14 + 20 >> 2] | 0;
     if ((i13 | 0) == 0) {
      break L4;
     }
     if ((HEAP32[i13 >> 2] | 0) == (i3 | 0)) {
      i15 = i13;
      break;
     } else {
      i14 = i13;
     }
    }
   }
   HEAP32[i7 >> 2] = i11;
   i14 = i8 | 0;
   HEAP32[i14 >> 2] = i4;
   HEAP32[i14 + 4 >> 2] = i12;
   __ZN3JSC8putEntryEPNS_9ExecStateEPKNS_9HashEntryENS_12PropertyNameENS_7JSValueERNS_15PutPropertySlotE(i2, i15, i7, i8, i5);
   STACKTOP = i6;
   return;
  }
 } while (0);
 HEAP32[i9 >> 2] = i11;
 i11 = i10 | 0;
 HEAP32[i11 >> 2] = i4;
 HEAP32[i11 + 4 >> 2] = i12;
 __ZN3JSC8JSObject3putEPNS_6JSCellEPNS_9ExecStateENS_12PropertyNameENS_7JSValueERNS_15PutPropertySlotE(i1, i2, i9, i10, i5);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore56setJSCanvasRenderingContext2DWebkitImageSmoothingEnabledEPN3JSC9ExecStateExx(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, d12 = +0, i13 = 0, i14 = 0;
 i6 = i2;
 L1 : do {
  if ((i2 & 0 | 0) == 0 & (i3 & -1 | 0) == (-5 | 0)) {
   i7 = i6;
   if ((HEAP32[(i6 & -65536) + 1048 >> 2] | 0) == 2) {
    i8 = i7 + 8 | 0;
   } else {
    i8 = (HEAP32[i7 >> 2] | 0) + 32 | 0;
   }
   i7 = HEAP32[i8 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   } else {
    i9 = i7;
   }
   while (1) {
    if ((i9 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i9 = HEAP32[i9 + 4 >> 2] | 0;
    if ((i9 | 0) == 0) {
     break L1;
    }
   }
   if ((i6 | 0) == 0) {
    break;
   }
   i7 = HEAP32[i6 + 12 >> 2] | 0;
   i10 = i5;
   do {
    if ((i10 | 0) == -1) {
     i11 = (i4 | 0) != 0;
    } else {
     if (i10 >>> 0 < 4294967289 >>> 0) {
      d12 = (HEAP32[tempDoublePtr >> 2] = i4, HEAP32[tempDoublePtr + 4 >> 2] = i5, +HEAPF64[tempDoublePtr >> 3]);
      i13 = d12 > +0;
      i11 = i13 | d12 < +0 & (i13 ^ 1);
      break;
     }
     if ((i10 | 0) == (-2 | 0)) {
      i11 = (i4 | 0) != 0;
      break;
     } else if ((i10 | 0) != (-5 | 0)) {
      i11 = 0;
      break;
     }
     i13 = i4;
     i14 = HEAP32[i13 >> 2] | 0;
     if ((HEAP8[i14 + 52 | 0] | 0) == 5) {
      i11 = __ZNK3JSC8JSString9toBooleanEv(i13) | 0;
      break;
     }
     if ((HEAP8[i14 + 53 | 0] & 1) == 0) {
      i11 = 1;
      break;
     }
     i11 = (HEAP32[i14 + 4 >> 2] | 0) != (HEAP32[(HEAP32[HEAP32[i1 + 16 >> 2] >> 2] | 0) + 4 >> 2] | 0);
    }
   } while (0);
   i10 = (HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i10 >> 2] & 0 | 0) == 0 & (HEAP32[i10 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    return;
   }
   __ZN7WebCore24CanvasRenderingContext2D30setWebkitImageSmoothingEnabledEb(i7, i11);
   return;
  }
 } while (0);
 __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 return;
}
function __ZN7WebCore37jsCanvasRenderingContext2DCurrentPathEPN3JSC9ExecStateExxNS0_12PropertyNameE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i2 = i6;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i6 >> 2] = HEAP32[i2 >> 2];
 i2 = i3 | 0;
 i6 = i3 + 8 | 0;
 i7 = i4;
 L1 : do {
  if ((i4 & 0 | 0) == 0 & (i5 & -1 | 0) == (-5 | 0)) {
   i8 = i7;
   if ((HEAP32[(i7 & -65536) + 1048 >> 2] | 0) == 2) {
    i9 = i8 + 8 | 0;
   } else {
    i9 = (HEAP32[i8 >> 2] | 0) + 32 | 0;
   }
   i8 = HEAP32[i9 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   } else {
    i10 = i8;
   }
   while (1) {
    if ((i10 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i10 = HEAP32[i10 + 4 >> 2] | 0;
    if ((i10 | 0) == 0) {
     break L1;
    }
   }
   i8 = i7;
   if ((i7 | 0) == 0) {
    break;
   }
   i11 = HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] | 0;
   __ZN7WebCore24CanvasRenderingContext2D11currentPathEv(i6, HEAP32[i8 + 12 >> 2] | 0);
   i8 = i6 | 0;
   __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_7DOMPathE(i2, i1, i11, HEAP32[i8 >> 2] | 0);
   i11 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i11 | 0) != 0) {
     i8 = i11 + 8 | 0;
     i12 = i8 | 0;
     i13 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
     if ((i13 | 0) != 0) {
      HEAP32[i12 >> 2] = i13;
      break;
     }
     i13 = i8 - 8 | 0;
     if ((i13 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 7](i13);
    }
   } while (0);
   i11 = i2 | 0;
   i14 = HEAP32[i11 + 4 >> 2] | 0;
   i15 = HEAP32[i11 >> 2] | 0;
   STACKTOP = i3;
   return (tempRet0 = i14, i15) | 0;
  }
 } while (0);
 i2 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 i1 = (i2 | 0) == 0;
 i14 = (i1 ? -6 : -5) | 0;
 i15 = (i1 ? 0 : 0) | i2;
 STACKTOP = i3;
 return (tempRet0 = i14, i15) | 0;
}
function __ZN7WebCore37JSCanvasRenderingContext2DConstructor14finishCreationERN3JSC2VMEPNS_17JSDOMGlobalObjectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i5 = i4 | 0;
 i6 = i4 + 32 | 0;
 i7 = i4 + 40 | 0;
 i8 = i4 + 48 | 0;
 i9 = i4 + 80 | 0;
 i10 = i4 + 88 | 0;
 i11 = i1 | 0;
 i12 = i2 + 20884 | 0;
 i13 = HEAP32[(HEAP32[i12 >> 2] | 0) + 636 >> 2] | 0;
 i14 = (__ZN7WebCore15getDOMStructureINS_26JSCanvasRenderingContext2DEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i2, i3) | 0) + 8 | 0;
 i3 = HEAP32[i14 >> 2] | 0;
 i15 = HEAP32[i14 + 4 >> 2] | 0;
 i14 = i3;
 i16 = (i14 | 0) == 0;
 i17 = (i1 | 0) == 0;
 i18 = (i17 ? 0 : 0) | i1;
 i1 = (i17 ? -6 : -5) | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i5 + 4 >> 2] = 0;
 i17 = i5 + 8 | 0;
 HEAP32[i17 >> 2] = i18;
 HEAP32[i17 + 4 >> 2] = i1;
 HEAP8[i5 + 20 | 0] = 0;
 HEAP8[i5 + 21 | 0] = 0;
 HEAP32[i5 + 24 >> 2] = 0;
 HEAP32[i6 >> 2] = i13;
 i13 = i7 | 0;
 HEAP32[i13 >> 2] = (i16 ? 0 : 0) | i3 & -1;
 HEAP32[i13 + 4 >> 2] = (i16 ? -6 : -5) | i15 & 0;
 if (i16) {
  i19 = 0;
 } else {
  i19 = __ZN3JSC21getCallableObjectSlowEPNS_6JSCellE(i14) | 0;
 }
 __ZN3JSC8JSObject17putDirectInternalILNS0_7PutModeE1EEEbRNS_2VMENS_12PropertyNameENS_7JSValueEjRNS_15PutPropertySlotEPNS_6JSCellE(i11, i2, i6, i7, 10, i5, i19) | 0;
 i19 = HEAP32[(HEAP32[i12 >> 2] | 0) + 568 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i8 + 4 >> 2] = 0;
 i12 = i8 + 8 | 0;
 HEAP32[i12 >> 2] = i18;
 HEAP32[i12 + 4 >> 2] = i1;
 HEAP8[i8 + 20 | 0] = 0;
 HEAP8[i8 + 21 | 0] = 0;
 HEAP32[i8 + 24 >> 2] = 0;
 HEAP32[i9 >> 2] = i19;
 i19 = i10 | 0;
 HEAP32[i19 >> 2] = 0;
 HEAP32[i19 + 4 >> 2] = -1;
 __ZN3JSC8JSObject17putDirectInternalILNS0_7PutModeE1EEEbRNS_2VMENS_12PropertyNameENS_7JSValueEjRNS_15PutPropertySlotEPNS_6JSCellE(i11, i2, i9, i10, 14, i8, 0) | 0;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore46jsCanvasRenderingContext2DWebkitLineDashOffsetEPN3JSC9ExecStateExxNS0_12PropertyNameE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, d9 = +0, d10 = +0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 i2 = i6;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i6 >> 2] = HEAP32[i2 >> 2];
 i2 = i4;
 L1 : do {
  if ((i4 & 0 | 0) == 0 & (i5 & -1 | 0) == (-5 | 0)) {
   i6 = i2;
   if ((HEAP32[(i2 & -65536) + 1048 >> 2] | 0) == 2) {
    i7 = i6 + 8 | 0;
   } else {
    i7 = (HEAP32[i6 >> 2] | 0) + 32 | 0;
   }
   i6 = HEAP32[i7 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   } else {
    i8 = i6;
   }
   while (1) {
    if ((i8 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i8 = HEAP32[i8 + 4 >> 2] | 0;
    if ((i8 | 0) == 0) {
     break L1;
    }
   }
   if ((i2 | 0) == 0) {
    break;
   }
   d9 = +__ZNK7WebCore24CanvasRenderingContext2D20webkitLineDashOffsetEv(HEAP32[i2 + 12 >> 2] | 0);
   d10 = d9;
   i6 = ~~d9;
   if (+(i6 | 0) != d10) {
    HEAPF64[tempDoublePtr >> 3] = d10;
    i11 = HEAP32[tempDoublePtr + 4 >> 2] | 0;
    i12 = HEAP32[tempDoublePtr >> 2] | 0;
    STACKTOP = i3;
    return (tempRet0 = i11, i12) | 0;
   }
   HEAPF64[tempDoublePtr >> 3] = d10;
   i13 = HEAP32[tempDoublePtr >> 2] | 0;
   i14 = HEAP32[tempDoublePtr + 4 >> 2] | 0;
   i15 = 0;
   if ((i6 | 0) == 0 & ((i14 | 0) < (i15 | 0) | (i14 | 0) == (i15 | 0) & i13 >>> 0 < 0 >>> 0)) {
    i11 = i14;
    i12 = i13;
    STACKTOP = i3;
    return (tempRet0 = i11, i12) | 0;
   }
   i11 = -1 | 0;
   i12 = i6 | 0;
   STACKTOP = i3;
   return (tempRet0 = i11, i12) | 0;
  }
 } while (0);
 i2 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 i1 = (i2 | 0) == 0;
 i11 = (i1 ? -6 : -5) | 0;
 i12 = (i1 ? 0 : 0) | i2;
 STACKTOP = i3;
 return (tempRet0 = i11, i12) | 0;
}
function __ZN3JSC8JSString6createERNS_2VMEN3WTF10PassRefPtrINS3_10StringImplEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 i4 = HEAP32[i2 + 4 >> 2] | 0;
 i5 = i2 + 16 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 & 3 | 0) == 2) {
  i7 = i2;
  while (1) {
   i8 = HEAP32[i7 + 12 >> 2] | 0;
   i9 = i8 + 16 | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   if ((i10 & 3 | 0) == 2) {
    i7 = i8;
   } else {
    i11 = i8;
    i12 = i9;
    i13 = i10;
    break;
   }
  }
 } else {
  i11 = i2;
  i12 = i5;
  i13 = i6;
 }
 if ((i13 & 8 | 0) == 0) {
  HEAP32[i12 >> 2] = i13 | 8;
  i14 = HEAP32[i11 + 4 >> 2] << (i13 >>> 5 & 1 ^ 1);
 } else {
  i14 = 0;
 }
 i13 = i1 + 6840 | 0;
 i11 = i13 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i15 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i13, 16) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i15 = i12;
 }
 i12 = i15;
 HEAP32[i12 >> 2] = 0;
 i11 = i15;
 i13 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i3 = HEAP32[i1 + 20772 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   i16 = 0;
  } else {
   if ((HEAP32[i3 + 4 >> 2] | 0) == -6) {
    i16 = 0;
    break;
   }
   i16 = HEAP32[i3 >> 2] | 0;
  }
 } while (0);
 HEAP32[i12 >> 2] = i16;
 i16 = i15 + 4 | 0;
 HEAP32[i16 >> 2] = 0;
 HEAP32[i15 + 12 >> 2] = i13;
 HEAP32[i15 + 8 >> 2] = i4;
 HEAP32[i16 >> 2] = (HEAP32[i13 + 16 >> 2] | 0) >>> 5 & 1;
 if (i14 >>> 0 <= 256 >>> 0) {
  i17 = i1 + 24784 | 0;
  i18 = HEAP32[i17 >> 2] | 0;
  i19 = i18 + 1 | 0;
  HEAP32[i17 >> 2] = i19;
  return i11 | 0;
 }
 __ZN3JSC4Heap29reportExtraMemoryCostSlowCaseEj((HEAP32[(i15 & -65536) + 1076 >> 2] | 0) + 16 | 0, i14);
 i17 = i1 + 24784 | 0;
 i18 = HEAP32[i17 >> 2] | 0;
 i19 = i18 + 1 | 0;
 HEAP32[i17 >> 2] = i19;
 return i11 | 0;
}
function __ZN7WebCore54jsCanvasRenderingContext2DWebkitBackingStorePixelRatioEPN3JSC9ExecStateExxNS0_12PropertyNameE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, d9 = +0, d10 = +0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 i2 = i6;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i6 >> 2] = HEAP32[i2 >> 2];
 i2 = i4;
 L1 : do {
  if ((i4 & 0 | 0) == 0 & (i5 & -1 | 0) == (-5 | 0)) {
   i6 = i2;
   if ((HEAP32[(i2 & -65536) + 1048 >> 2] | 0) == 2) {
    i7 = i6 + 8 | 0;
   } else {
    i7 = (HEAP32[i6 >> 2] | 0) + 32 | 0;
   }
   i6 = HEAP32[i7 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   } else {
    i8 = i6;
   }
   while (1) {
    if ((i8 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i8 = HEAP32[i8 + 4 >> 2] | 0;
    if ((i8 | 0) == 0) {
     break L1;
    }
   }
   if ((i2 | 0) == 0) {
    break;
   }
   d9 = +HEAPF32[(HEAP32[(HEAP32[i2 + 12 >> 2] | 0) + 8 >> 2] | 0) + 104 >> 2];
   d10 = d9;
   i6 = ~~d9;
   if (+(i6 | 0) != d10) {
    HEAPF64[tempDoublePtr >> 3] = d10;
    i11 = HEAP32[tempDoublePtr + 4 >> 2] | 0;
    i12 = HEAP32[tempDoublePtr >> 2] | 0;
    STACKTOP = i3;
    return (tempRet0 = i11, i12) | 0;
   }
   HEAPF64[tempDoublePtr >> 3] = d10;
   i13 = HEAP32[tempDoublePtr >> 2] | 0;
   i14 = HEAP32[tempDoublePtr + 4 >> 2] | 0;
   i15 = 0;
   if ((i6 | 0) == 0 & ((i14 | 0) < (i15 | 0) | (i14 | 0) == (i15 | 0) & i13 >>> 0 < 0 >>> 0)) {
    i11 = i14;
    i12 = i13;
    STACKTOP = i3;
    return (tempRet0 = i11, i12) | 0;
   }
   i11 = -1 | 0;
   i12 = i6 | 0;
   STACKTOP = i3;
   return (tempRet0 = i11, i12) | 0;
  }
 } while (0);
 i2 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 i1 = (i2 | 0) == 0;
 i11 = (i1 ? -6 : -5) | 0;
 i12 = (i1 ? 0 : 0) | i2;
 STACKTOP = i3;
 return (tempRet0 = i11, i12) | 0;
}
function __ZN7WebCore40jsCanvasRenderingContext2DLineDashOffsetEPN3JSC9ExecStateExxNS0_12PropertyNameE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, d9 = +0, d10 = +0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 i2 = i6;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i6 >> 2] = HEAP32[i2 >> 2];
 i2 = i4;
 L1 : do {
  if ((i4 & 0 | 0) == 0 & (i5 & -1 | 0) == (-5 | 0)) {
   i6 = i2;
   if ((HEAP32[(i2 & -65536) + 1048 >> 2] | 0) == 2) {
    i7 = i6 + 8 | 0;
   } else {
    i7 = (HEAP32[i6 >> 2] | 0) + 32 | 0;
   }
   i6 = HEAP32[i7 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   } else {
    i8 = i6;
   }
   while (1) {
    if ((i8 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i8 = HEAP32[i8 + 4 >> 2] | 0;
    if ((i8 | 0) == 0) {
     break L1;
    }
   }
   if ((i2 | 0) == 0) {
    break;
   }
   d9 = +__ZNK7WebCore24CanvasRenderingContext2D14lineDashOffsetEv(HEAP32[i2 + 12 >> 2] | 0);
   d10 = d9;
   i6 = ~~d9;
   if (+(i6 | 0) != d10) {
    HEAPF64[tempDoublePtr >> 3] = d10;
    i11 = HEAP32[tempDoublePtr + 4 >> 2] | 0;
    i12 = HEAP32[tempDoublePtr >> 2] | 0;
    STACKTOP = i3;
    return (tempRet0 = i11, i12) | 0;
   }
   HEAPF64[tempDoublePtr >> 3] = d10;
   i13 = HEAP32[tempDoublePtr >> 2] | 0;
   i14 = HEAP32[tempDoublePtr + 4 >> 2] | 0;
   i15 = 0;
   if ((i6 | 0) == 0 & ((i14 | 0) < (i15 | 0) | (i14 | 0) == (i15 | 0) & i13 >>> 0 < 0 >>> 0)) {
    i11 = i14;
    i12 = i13;
    STACKTOP = i3;
    return (tempRet0 = i11, i12) | 0;
   }
   i11 = -1 | 0;
   i12 = i6 | 0;
   STACKTOP = i3;
   return (tempRet0 = i11, i12) | 0;
  }
 } while (0);
 i2 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 i1 = (i2 | 0) == 0;
 i11 = (i1 ? -6 : -5) | 0;
 i12 = (i1 ? 0 : 0) | i2;
 STACKTOP = i3;
 return (tempRet0 = i11, i12) | 0;
}
function __ZN7WebCore39jsCanvasRenderingContext2DShadowOffsetYEPN3JSC9ExecStateExxNS0_12PropertyNameE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, d9 = +0, d10 = +0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 i2 = i6;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i6 >> 2] = HEAP32[i2 >> 2];
 i2 = i4;
 L1 : do {
  if ((i4 & 0 | 0) == 0 & (i5 & -1 | 0) == (-5 | 0)) {
   i6 = i2;
   if ((HEAP32[(i2 & -65536) + 1048 >> 2] | 0) == 2) {
    i7 = i6 + 8 | 0;
   } else {
    i7 = (HEAP32[i6 >> 2] | 0) + 32 | 0;
   }
   i6 = HEAP32[i7 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   } else {
    i8 = i6;
   }
   while (1) {
    if ((i8 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i8 = HEAP32[i8 + 4 >> 2] | 0;
    if ((i8 | 0) == 0) {
     break L1;
    }
   }
   if ((i2 | 0) == 0) {
    break;
   }
   d9 = +__ZNK7WebCore24CanvasRenderingContext2D13shadowOffsetYEv(HEAP32[i2 + 12 >> 2] | 0);
   d10 = d9;
   i6 = ~~d9;
   if (+(i6 | 0) != d10) {
    HEAPF64[tempDoublePtr >> 3] = d10;
    i11 = HEAP32[tempDoublePtr + 4 >> 2] | 0;
    i12 = HEAP32[tempDoublePtr >> 2] | 0;
    STACKTOP = i3;
    return (tempRet0 = i11, i12) | 0;
   }
   HEAPF64[tempDoublePtr >> 3] = d10;
   i13 = HEAP32[tempDoublePtr >> 2] | 0;
   i14 = HEAP32[tempDoublePtr + 4 >> 2] | 0;
   i15 = 0;
   if ((i6 | 0) == 0 & ((i14 | 0) < (i15 | 0) | (i14 | 0) == (i15 | 0) & i13 >>> 0 < 0 >>> 0)) {
    i11 = i14;
    i12 = i13;
    STACKTOP = i3;
    return (tempRet0 = i11, i12) | 0;
   }
   i11 = -1 | 0;
   i12 = i6 | 0;
   STACKTOP = i3;
   return (tempRet0 = i11, i12) | 0;
  }
 } while (0);
 i2 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 i1 = (i2 | 0) == 0;
 i11 = (i1 ? -6 : -5) | 0;
 i12 = (i1 ? 0 : 0) | i2;
 STACKTOP = i3;
 return (tempRet0 = i11, i12) | 0;
}
function __ZN7WebCore39jsCanvasRenderingContext2DShadowOffsetXEPN3JSC9ExecStateExxNS0_12PropertyNameE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, d9 = +0, d10 = +0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 i2 = i6;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i6 >> 2] = HEAP32[i2 >> 2];
 i2 = i4;
 L1 : do {
  if ((i4 & 0 | 0) == 0 & (i5 & -1 | 0) == (-5 | 0)) {
   i6 = i2;
   if ((HEAP32[(i2 & -65536) + 1048 >> 2] | 0) == 2) {
    i7 = i6 + 8 | 0;
   } else {
    i7 = (HEAP32[i6 >> 2] | 0) + 32 | 0;
   }
   i6 = HEAP32[i7 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   } else {
    i8 = i6;
   }
   while (1) {
    if ((i8 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i8 = HEAP32[i8 + 4 >> 2] | 0;
    if ((i8 | 0) == 0) {
     break L1;
    }
   }
   if ((i2 | 0) == 0) {
    break;
   }
   d9 = +__ZNK7WebCore24CanvasRenderingContext2D13shadowOffsetXEv(HEAP32[i2 + 12 >> 2] | 0);
   d10 = d9;
   i6 = ~~d9;
   if (+(i6 | 0) != d10) {
    HEAPF64[tempDoublePtr >> 3] = d10;
    i11 = HEAP32[tempDoublePtr + 4 >> 2] | 0;
    i12 = HEAP32[tempDoublePtr >> 2] | 0;
    STACKTOP = i3;
    return (tempRet0 = i11, i12) | 0;
   }
   HEAPF64[tempDoublePtr >> 3] = d10;
   i13 = HEAP32[tempDoublePtr >> 2] | 0;
   i14 = HEAP32[tempDoublePtr + 4 >> 2] | 0;
   i15 = 0;
   if ((i6 | 0) == 0 & ((i14 | 0) < (i15 | 0) | (i14 | 0) == (i15 | 0) & i13 >>> 0 < 0 >>> 0)) {
    i11 = i14;
    i12 = i13;
    STACKTOP = i3;
    return (tempRet0 = i11, i12) | 0;
   }
   i11 = -1 | 0;
   i12 = i6 | 0;
   STACKTOP = i3;
   return (tempRet0 = i11, i12) | 0;
  }
 } while (0);
 i2 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 i1 = (i2 | 0) == 0;
 i11 = (i1 ? -6 : -5) | 0;
 i12 = (i1 ? 0 : 0) | i2;
 STACKTOP = i3;
 return (tempRet0 = i11, i12) | 0;
}
function __ZN7WebCore37jsCanvasRenderingContext2DGlobalAlphaEPN3JSC9ExecStateExxNS0_12PropertyNameE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, d9 = +0, d10 = +0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 i2 = i6;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i6 >> 2] = HEAP32[i2 >> 2];
 i2 = i4;
 L1 : do {
  if ((i4 & 0 | 0) == 0 & (i5 & -1 | 0) == (-5 | 0)) {
   i6 = i2;
   if ((HEAP32[(i2 & -65536) + 1048 >> 2] | 0) == 2) {
    i7 = i6 + 8 | 0;
   } else {
    i7 = (HEAP32[i6 >> 2] | 0) + 32 | 0;
   }
   i6 = HEAP32[i7 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   } else {
    i8 = i6;
   }
   while (1) {
    if ((i8 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i8 = HEAP32[i8 + 4 >> 2] | 0;
    if ((i8 | 0) == 0) {
     break L1;
    }
   }
   if ((i2 | 0) == 0) {
    break;
   }
   d9 = +__ZNK7WebCore24CanvasRenderingContext2D11globalAlphaEv(HEAP32[i2 + 12 >> 2] | 0);
   d10 = d9;
   i6 = ~~d9;
   if (+(i6 | 0) != d10) {
    HEAPF64[tempDoublePtr >> 3] = d10;
    i11 = HEAP32[tempDoublePtr + 4 >> 2] | 0;
    i12 = HEAP32[tempDoublePtr >> 2] | 0;
    STACKTOP = i3;
    return (tempRet0 = i11, i12) | 0;
   }
   HEAPF64[tempDoublePtr >> 3] = d10;
   i13 = HEAP32[tempDoublePtr >> 2] | 0;
   i14 = HEAP32[tempDoublePtr + 4 >> 2] | 0;
   i15 = 0;
   if ((i6 | 0) == 0 & ((i14 | 0) < (i15 | 0) | (i14 | 0) == (i15 | 0) & i13 >>> 0 < 0 >>> 0)) {
    i11 = i14;
    i12 = i13;
    STACKTOP = i3;
    return (tempRet0 = i11, i12) | 0;
   }
   i11 = -1 | 0;
   i12 = i6 | 0;
   STACKTOP = i3;
   return (tempRet0 = i11, i12) | 0;
  }
 } while (0);
 i2 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 i1 = (i2 | 0) == 0;
 i11 = (i1 ? -6 : -5) | 0;
 i12 = (i1 ? 0 : 0) | i2;
 STACKTOP = i3;
 return (tempRet0 = i11, i12) | 0;
}
function __ZN7WebCore36jsCanvasRenderingContext2DShadowBlurEPN3JSC9ExecStateExxNS0_12PropertyNameE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, d9 = +0, d10 = +0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 i2 = i6;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i6 >> 2] = HEAP32[i2 >> 2];
 i2 = i4;
 L1 : do {
  if ((i4 & 0 | 0) == 0 & (i5 & -1 | 0) == (-5 | 0)) {
   i6 = i2;
   if ((HEAP32[(i2 & -65536) + 1048 >> 2] | 0) == 2) {
    i7 = i6 + 8 | 0;
   } else {
    i7 = (HEAP32[i6 >> 2] | 0) + 32 | 0;
   }
   i6 = HEAP32[i7 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   } else {
    i8 = i6;
   }
   while (1) {
    if ((i8 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i8 = HEAP32[i8 + 4 >> 2] | 0;
    if ((i8 | 0) == 0) {
     break L1;
    }
   }
   if ((i2 | 0) == 0) {
    break;
   }
   d9 = +__ZNK7WebCore24CanvasRenderingContext2D10shadowBlurEv(HEAP32[i2 + 12 >> 2] | 0);
   d10 = d9;
   i6 = ~~d9;
   if (+(i6 | 0) != d10) {
    HEAPF64[tempDoublePtr >> 3] = d10;
    i11 = HEAP32[tempDoublePtr + 4 >> 2] | 0;
    i12 = HEAP32[tempDoublePtr >> 2] | 0;
    STACKTOP = i3;
    return (tempRet0 = i11, i12) | 0;
   }
   HEAPF64[tempDoublePtr >> 3] = d10;
   i13 = HEAP32[tempDoublePtr >> 2] | 0;
   i14 = HEAP32[tempDoublePtr + 4 >> 2] | 0;
   i15 = 0;
   if ((i6 | 0) == 0 & ((i14 | 0) < (i15 | 0) | (i14 | 0) == (i15 | 0) & i13 >>> 0 < 0 >>> 0)) {
    i11 = i14;
    i12 = i13;
    STACKTOP = i3;
    return (tempRet0 = i11, i12) | 0;
   }
   i11 = -1 | 0;
   i12 = i6 | 0;
   STACKTOP = i3;
   return (tempRet0 = i11, i12) | 0;
  }
 } while (0);
 i2 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 i1 = (i2 | 0) == 0;
 i11 = (i1 ? -6 : -5) | 0;
 i12 = (i1 ? 0 : 0) | i2;
 STACKTOP = i3;
 return (tempRet0 = i11, i12) | 0;
}
function __ZN7WebCore36jsCanvasRenderingContext2DMiterLimitEPN3JSC9ExecStateExxNS0_12PropertyNameE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, d9 = +0, d10 = +0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 i2 = i6;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i6 >> 2] = HEAP32[i2 >> 2];
 i2 = i4;
 L1 : do {
  if ((i4 & 0 | 0) == 0 & (i5 & -1 | 0) == (-5 | 0)) {
   i6 = i2;
   if ((HEAP32[(i2 & -65536) + 1048 >> 2] | 0) == 2) {
    i7 = i6 + 8 | 0;
   } else {
    i7 = (HEAP32[i6 >> 2] | 0) + 32 | 0;
   }
   i6 = HEAP32[i7 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   } else {
    i8 = i6;
   }
   while (1) {
    if ((i8 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i8 = HEAP32[i8 + 4 >> 2] | 0;
    if ((i8 | 0) == 0) {
     break L1;
    }
   }
   if ((i2 | 0) == 0) {
    break;
   }
   d9 = +__ZNK7WebCore24CanvasRenderingContext2D10miterLimitEv(HEAP32[i2 + 12 >> 2] | 0);
   d10 = d9;
   i6 = ~~d9;
   if (+(i6 | 0) != d10) {
    HEAPF64[tempDoublePtr >> 3] = d10;
    i11 = HEAP32[tempDoublePtr + 4 >> 2] | 0;
    i12 = HEAP32[tempDoublePtr >> 2] | 0;
    STACKTOP = i3;
    return (tempRet0 = i11, i12) | 0;
   }
   HEAPF64[tempDoublePtr >> 3] = d10;
   i13 = HEAP32[tempDoublePtr >> 2] | 0;
   i14 = HEAP32[tempDoublePtr + 4 >> 2] | 0;
   i15 = 0;
   if ((i6 | 0) == 0 & ((i14 | 0) < (i15 | 0) | (i14 | 0) == (i15 | 0) & i13 >>> 0 < 0 >>> 0)) {
    i11 = i14;
    i12 = i13;
    STACKTOP = i3;
    return (tempRet0 = i11, i12) | 0;
   }
   i11 = -1 | 0;
   i12 = i6 | 0;
   STACKTOP = i3;
   return (tempRet0 = i11, i12) | 0;
  }
 } while (0);
 i2 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 i1 = (i2 | 0) == 0;
 i11 = (i1 ? -6 : -5) | 0;
 i12 = (i1 ? 0 : 0) | i2;
 STACKTOP = i3;
 return (tempRet0 = i11, i12) | 0;
}
function __ZN7WebCore35jsCanvasRenderingContext2DLineWidthEPN3JSC9ExecStateExxNS0_12PropertyNameE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, d9 = +0, d10 = +0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 i2 = i6;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i6 >> 2] = HEAP32[i2 >> 2];
 i2 = i4;
 L1 : do {
  if ((i4 & 0 | 0) == 0 & (i5 & -1 | 0) == (-5 | 0)) {
   i6 = i2;
   if ((HEAP32[(i2 & -65536) + 1048 >> 2] | 0) == 2) {
    i7 = i6 + 8 | 0;
   } else {
    i7 = (HEAP32[i6 >> 2] | 0) + 32 | 0;
   }
   i6 = HEAP32[i7 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   } else {
    i8 = i6;
   }
   while (1) {
    if ((i8 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i8 = HEAP32[i8 + 4 >> 2] | 0;
    if ((i8 | 0) == 0) {
     break L1;
    }
   }
   if ((i2 | 0) == 0) {
    break;
   }
   d9 = +__ZNK7WebCore24CanvasRenderingContext2D9lineWidthEv(HEAP32[i2 + 12 >> 2] | 0);
   d10 = d9;
   i6 = ~~d9;
   if (+(i6 | 0) != d10) {
    HEAPF64[tempDoublePtr >> 3] = d10;
    i11 = HEAP32[tempDoublePtr + 4 >> 2] | 0;
    i12 = HEAP32[tempDoublePtr >> 2] | 0;
    STACKTOP = i3;
    return (tempRet0 = i11, i12) | 0;
   }
   HEAPF64[tempDoublePtr >> 3] = d10;
   i13 = HEAP32[tempDoublePtr >> 2] | 0;
   i14 = HEAP32[tempDoublePtr + 4 >> 2] | 0;
   i15 = 0;
   if ((i6 | 0) == 0 & ((i14 | 0) < (i15 | 0) | (i14 | 0) == (i15 | 0) & i13 >>> 0 < 0 >>> 0)) {
    i11 = i14;
    i12 = i13;
    STACKTOP = i3;
    return (tempRet0 = i11, i12) | 0;
   }
   i11 = -1 | 0;
   i12 = i6 | 0;
   STACKTOP = i3;
   return (tempRet0 = i11, i12) | 0;
  }
 } while (0);
 i2 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 i1 = (i2 | 0) == 0;
 i11 = (i1 ? -6 : -5) | 0;
 i12 = (i1 ? 0 : 0) | i2;
 STACKTOP = i3;
 return (tempRet0 = i11, i12) | 0;
}
function __ZN7WebCore50jsCanvasRenderingContext2DGlobalCompositeOperationEPN3JSC9ExecStateExxNS0_12PropertyNameE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i2 = i6;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i6 >> 2] = HEAP32[i2 >> 2];
 i2 = i3 | 0;
 i6 = i3 + 8 | 0;
 i7 = i4;
 L1 : do {
  if ((i4 & 0 | 0) == 0 & (i5 & -1 | 0) == (-5 | 0)) {
   i8 = i7;
   if ((HEAP32[(i7 & -65536) + 1048 >> 2] | 0) == 2) {
    i9 = i8 + 8 | 0;
   } else {
    i9 = (HEAP32[i8 >> 2] | 0) + 32 | 0;
   }
   i8 = HEAP32[i9 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   } else {
    i10 = i8;
   }
   while (1) {
    if ((i10 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i10 = HEAP32[i10 + 4 >> 2] | 0;
    if ((i10 | 0) == 0) {
     break L1;
    }
   }
   if ((i7 | 0) == 0) {
    break;
   }
   __ZNK7WebCore24CanvasRenderingContext2D24globalCompositeOperationEv(i6, HEAP32[i7 + 12 >> 2] | 0);
   __ZN7WebCore17jsStringWithCacheEPN3JSC9ExecStateERKN3WTF6StringE(i2, i1, i6);
   i8 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i8 | 0) != 0) {
     i11 = i8 | 0;
     i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
     if ((i12 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i8);
      break;
     } else {
      HEAP32[i11 >> 2] = i12;
      break;
     }
    }
   } while (0);
   i8 = i2 | 0;
   i13 = HEAP32[i8 + 4 >> 2] | 0;
   i14 = HEAP32[i8 >> 2] | 0;
   STACKTOP = i3;
   return (tempRet0 = i13, i14) | 0;
  }
 } while (0);
 i2 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 i1 = (i2 | 0) == 0;
 i13 = (i1 ? -6 : -5) | 0;
 i14 = (i1 ? 0 : 0) | i2;
 STACKTOP = i3;
 return (tempRet0 = i13, i14) | 0;
}
function __ZN7WebCore38jsCanvasRenderingContext2DTextBaselineEPN3JSC9ExecStateExxNS0_12PropertyNameE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i2 = i6;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i6 >> 2] = HEAP32[i2 >> 2];
 i2 = i3 | 0;
 i6 = i3 + 8 | 0;
 i7 = i4;
 L1 : do {
  if ((i4 & 0 | 0) == 0 & (i5 & -1 | 0) == (-5 | 0)) {
   i8 = i7;
   if ((HEAP32[(i7 & -65536) + 1048 >> 2] | 0) == 2) {
    i9 = i8 + 8 | 0;
   } else {
    i9 = (HEAP32[i8 >> 2] | 0) + 32 | 0;
   }
   i8 = HEAP32[i9 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   } else {
    i10 = i8;
   }
   while (1) {
    if ((i10 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i10 = HEAP32[i10 + 4 >> 2] | 0;
    if ((i10 | 0) == 0) {
     break L1;
    }
   }
   if ((i7 | 0) == 0) {
    break;
   }
   __ZNK7WebCore24CanvasRenderingContext2D12textBaselineEv(i6, HEAP32[i7 + 12 >> 2] | 0);
   __ZN7WebCore17jsStringWithCacheEPN3JSC9ExecStateERKN3WTF6StringE(i2, i1, i6);
   i8 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i8 | 0) != 0) {
     i11 = i8 | 0;
     i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
     if ((i12 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i8);
      break;
     } else {
      HEAP32[i11 >> 2] = i12;
      break;
     }
    }
   } while (0);
   i8 = i2 | 0;
   i13 = HEAP32[i8 + 4 >> 2] | 0;
   i14 = HEAP32[i8 >> 2] | 0;
   STACKTOP = i3;
   return (tempRet0 = i13, i14) | 0;
  }
 } while (0);
 i2 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 i1 = (i2 | 0) == 0;
 i13 = (i1 ? -6 : -5) | 0;
 i14 = (i1 ? 0 : 0) | i2;
 STACKTOP = i3;
 return (tempRet0 = i13, i14) | 0;
}
function __ZN7WebCore37jsCanvasRenderingContext2DShadowColorEPN3JSC9ExecStateExxNS0_12PropertyNameE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i2 = i6;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i6 >> 2] = HEAP32[i2 >> 2];
 i2 = i3 | 0;
 i6 = i3 + 8 | 0;
 i7 = i4;
 L1 : do {
  if ((i4 & 0 | 0) == 0 & (i5 & -1 | 0) == (-5 | 0)) {
   i8 = i7;
   if ((HEAP32[(i7 & -65536) + 1048 >> 2] | 0) == 2) {
    i9 = i8 + 8 | 0;
   } else {
    i9 = (HEAP32[i8 >> 2] | 0) + 32 | 0;
   }
   i8 = HEAP32[i9 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   } else {
    i10 = i8;
   }
   while (1) {
    if ((i10 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i10 = HEAP32[i10 + 4 >> 2] | 0;
    if ((i10 | 0) == 0) {
     break L1;
    }
   }
   if ((i7 | 0) == 0) {
    break;
   }
   __ZNK7WebCore24CanvasRenderingContext2D11shadowColorEv(i6, HEAP32[i7 + 12 >> 2] | 0);
   __ZN7WebCore17jsStringWithCacheEPN3JSC9ExecStateERKN3WTF6StringE(i2, i1, i6);
   i8 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i8 | 0) != 0) {
     i11 = i8 | 0;
     i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
     if ((i12 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i8);
      break;
     } else {
      HEAP32[i11 >> 2] = i12;
      break;
     }
    }
   } while (0);
   i8 = i2 | 0;
   i13 = HEAP32[i8 + 4 >> 2] | 0;
   i14 = HEAP32[i8 >> 2] | 0;
   STACKTOP = i3;
   return (tempRet0 = i13, i14) | 0;
  }
 } while (0);
 i2 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 i1 = (i2 | 0) == 0;
 i13 = (i1 ? -6 : -5) | 0;
 i14 = (i1 ? 0 : 0) | i2;
 STACKTOP = i3;
 return (tempRet0 = i13, i14) | 0;
}
function __ZN7WebCore35jsCanvasRenderingContext2DTextAlignEPN3JSC9ExecStateExxNS0_12PropertyNameE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i2 = i6;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i6 >> 2] = HEAP32[i2 >> 2];
 i2 = i3 | 0;
 i6 = i3 + 8 | 0;
 i7 = i4;
 L1 : do {
  if ((i4 & 0 | 0) == 0 & (i5 & -1 | 0) == (-5 | 0)) {
   i8 = i7;
   if ((HEAP32[(i7 & -65536) + 1048 >> 2] | 0) == 2) {
    i9 = i8 + 8 | 0;
   } else {
    i9 = (HEAP32[i8 >> 2] | 0) + 32 | 0;
   }
   i8 = HEAP32[i9 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   } else {
    i10 = i8;
   }
   while (1) {
    if ((i10 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i10 = HEAP32[i10 + 4 >> 2] | 0;
    if ((i10 | 0) == 0) {
     break L1;
    }
   }
   if ((i7 | 0) == 0) {
    break;
   }
   __ZNK7WebCore24CanvasRenderingContext2D9textAlignEv(i6, HEAP32[i7 + 12 >> 2] | 0);
   __ZN7WebCore17jsStringWithCacheEPN3JSC9ExecStateERKN3WTF6StringE(i2, i1, i6);
   i8 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i8 | 0) != 0) {
     i11 = i8 | 0;
     i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
     if ((i12 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i8);
      break;
     } else {
      HEAP32[i11 >> 2] = i12;
      break;
     }
    }
   } while (0);
   i8 = i2 | 0;
   i13 = HEAP32[i8 + 4 >> 2] | 0;
   i14 = HEAP32[i8 >> 2] | 0;
   STACKTOP = i3;
   return (tempRet0 = i13, i14) | 0;
  }
 } while (0);
 i2 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 i1 = (i2 | 0) == 0;
 i13 = (i1 ? -6 : -5) | 0;
 i14 = (i1 ? 0 : 0) | i2;
 STACKTOP = i3;
 return (tempRet0 = i13, i14) | 0;
}
function __ZN7WebCore34jsCanvasRenderingContext2DLineJoinEPN3JSC9ExecStateExxNS0_12PropertyNameE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i2 = i6;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i6 >> 2] = HEAP32[i2 >> 2];
 i2 = i3 | 0;
 i6 = i3 + 8 | 0;
 i7 = i4;
 L1 : do {
  if ((i4 & 0 | 0) == 0 & (i5 & -1 | 0) == (-5 | 0)) {
   i8 = i7;
   if ((HEAP32[(i7 & -65536) + 1048 >> 2] | 0) == 2) {
    i9 = i8 + 8 | 0;
   } else {
    i9 = (HEAP32[i8 >> 2] | 0) + 32 | 0;
   }
   i8 = HEAP32[i9 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   } else {
    i10 = i8;
   }
   while (1) {
    if ((i10 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i10 = HEAP32[i10 + 4 >> 2] | 0;
    if ((i10 | 0) == 0) {
     break L1;
    }
   }
   if ((i7 | 0) == 0) {
    break;
   }
   __ZNK7WebCore24CanvasRenderingContext2D8lineJoinEv(i6, HEAP32[i7 + 12 >> 2] | 0);
   __ZN7WebCore17jsStringWithCacheEPN3JSC9ExecStateERKN3WTF6StringE(i2, i1, i6);
   i8 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i8 | 0) != 0) {
     i11 = i8 | 0;
     i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
     if ((i12 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i8);
      break;
     } else {
      HEAP32[i11 >> 2] = i12;
      break;
     }
    }
   } while (0);
   i8 = i2 | 0;
   i13 = HEAP32[i8 + 4 >> 2] | 0;
   i14 = HEAP32[i8 >> 2] | 0;
   STACKTOP = i3;
   return (tempRet0 = i13, i14) | 0;
  }
 } while (0);
 i2 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 i1 = (i2 | 0) == 0;
 i13 = (i1 ? -6 : -5) | 0;
 i14 = (i1 ? 0 : 0) | i2;
 STACKTOP = i3;
 return (tempRet0 = i13, i14) | 0;
}
function __ZN7WebCore33jsCanvasRenderingContext2DLineCapEPN3JSC9ExecStateExxNS0_12PropertyNameE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i2 = i6;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i6 >> 2] = HEAP32[i2 >> 2];
 i2 = i3 | 0;
 i6 = i3 + 8 | 0;
 i7 = i4;
 L1 : do {
  if ((i4 & 0 | 0) == 0 & (i5 & -1 | 0) == (-5 | 0)) {
   i8 = i7;
   if ((HEAP32[(i7 & -65536) + 1048 >> 2] | 0) == 2) {
    i9 = i8 + 8 | 0;
   } else {
    i9 = (HEAP32[i8 >> 2] | 0) + 32 | 0;
   }
   i8 = HEAP32[i9 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   } else {
    i10 = i8;
   }
   while (1) {
    if ((i10 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i10 = HEAP32[i10 + 4 >> 2] | 0;
    if ((i10 | 0) == 0) {
     break L1;
    }
   }
   if ((i7 | 0) == 0) {
    break;
   }
   __ZNK7WebCore24CanvasRenderingContext2D7lineCapEv(i6, HEAP32[i7 + 12 >> 2] | 0);
   __ZN7WebCore17jsStringWithCacheEPN3JSC9ExecStateERKN3WTF6StringE(i2, i1, i6);
   i8 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i8 | 0) != 0) {
     i11 = i8 | 0;
     i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
     if ((i12 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i8);
      break;
     } else {
      HEAP32[i11 >> 2] = i12;
      break;
     }
    }
   } while (0);
   i8 = i2 | 0;
   i13 = HEAP32[i8 + 4 >> 2] | 0;
   i14 = HEAP32[i8 >> 2] | 0;
   STACKTOP = i3;
   return (tempRet0 = i13, i14) | 0;
  }
 } while (0);
 i2 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 i1 = (i2 | 0) == 0;
 i13 = (i1 ? -6 : -5) | 0;
 i14 = (i1 ? 0 : 0) | i2;
 STACKTOP = i3;
 return (tempRet0 = i13, i14) | 0;
}
function __ZN7WebCore30jsCanvasRenderingContext2DFontEPN3JSC9ExecStateExxNS0_12PropertyNameE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i2 = i6;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i6 >> 2] = HEAP32[i2 >> 2];
 i2 = i3 | 0;
 i6 = i3 + 8 | 0;
 i7 = i4;
 L1 : do {
  if ((i4 & 0 | 0) == 0 & (i5 & -1 | 0) == (-5 | 0)) {
   i8 = i7;
   if ((HEAP32[(i7 & -65536) + 1048 >> 2] | 0) == 2) {
    i9 = i8 + 8 | 0;
   } else {
    i9 = (HEAP32[i8 >> 2] | 0) + 32 | 0;
   }
   i8 = HEAP32[i9 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   } else {
    i10 = i8;
   }
   while (1) {
    if ((i10 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i10 = HEAP32[i10 + 4 >> 2] | 0;
    if ((i10 | 0) == 0) {
     break L1;
    }
   }
   if ((i7 | 0) == 0) {
    break;
   }
   __ZNK7WebCore24CanvasRenderingContext2D4fontEv(i6, HEAP32[i7 + 12 >> 2] | 0);
   __ZN7WebCore17jsStringWithCacheEPN3JSC9ExecStateERKN3WTF6StringE(i2, i1, i6);
   i8 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i8 | 0) != 0) {
     i11 = i8 | 0;
     i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
     if ((i12 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i8);
      break;
     } else {
      HEAP32[i11 >> 2] = i12;
      break;
     }
    }
   } while (0);
   i8 = i2 | 0;
   i13 = HEAP32[i8 + 4 >> 2] | 0;
   i14 = HEAP32[i8 >> 2] | 0;
   STACKTOP = i3;
   return (tempRet0 = i13, i14) | 0;
  }
 } while (0);
 i2 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 i1 = (i2 | 0) == 0;
 i13 = (i1 ? -6 : -5) | 0;
 i14 = (i1 ? 0 : 0) | i2;
 STACKTOP = i3;
 return (tempRet0 = i13, i14) | 0;
}
function __ZN7WebCore53setJSCanvasRenderingContext2DGlobalCompositeOperationEPN3JSC9ExecStateExx(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i2;
 L1 : do {
  if ((i2 & 0 | 0) == 0 & (i3 & -1 | 0) == (-5 | 0)) {
   i10 = i9;
   if ((HEAP32[(i9 & -65536) + 1048 >> 2] | 0) == 2) {
    i11 = i10 + 8 | 0;
   } else {
    i11 = (HEAP32[i10 >> 2] | 0) + 32 | 0;
   }
   i10 = HEAP32[i11 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   } else {
    i12 = i10;
   }
   while (1) {
    if ((i12 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i12 = HEAP32[i12 + 4 >> 2] | 0;
    if ((i12 | 0) == 0) {
     break L1;
    }
   }
   if ((i9 | 0) == 0) {
    break;
   }
   i10 = HEAP32[i9 + 12 >> 2] | 0;
   i13 = i8 | 0;
   HEAP32[i13 >> 2] = i4;
   HEAP32[i13 + 4 >> 2] = i5;
   __ZN7WebCore26valueToStringWithNullCheckEPN3JSC9ExecStateENS0_7JSValueE(i7, i1, i8);
   i13 = (HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if ((HEAP32[i13 >> 2] & 0 | 0) == 0 & (HEAP32[i13 + 4 >> 2] & -1 | 0) == (-6 | 0)) {
    __ZN7WebCore24CanvasRenderingContext2D27setGlobalCompositeOperationERKN3WTF6StringE(i10, i7);
   }
   i10 = HEAP32[i7 >> 2] | 0;
   if ((i10 | 0) == 0) {
    STACKTOP = i6;
    return;
   }
   i13 = i10 | 0;
   i14 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    STACKTOP = i6;
    return;
   } else {
    HEAP32[i13 >> 2] = i14;
    STACKTOP = i6;
    return;
   }
  }
 } while (0);
 __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 STACKTOP = i6;
 return;
}
function __ZN7WebCore26JSCanvasRenderingContext2D18getOwnPropertySlotEPN3JSC8JSObjectEPNS1_9ExecStateENS1_12PropertyNameERNS1_12PropertySlotE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i6 >> 2];
 i6 = i5 | 0;
 i7 = HEAP32[i3 >> 2] | 0;
 if ((HEAP32[H_BASE + 2804 >> 2] | 0) == 0) {
  __ZNK3JSC9HashTable11createTableERNS_2VME(H_BASE + 2792, HEAP32[(HEAP32[i2 + 16 >> 2] & -65536) + 1076 >> 2] | 0);
 }
 i3 = (HEAP32[i7 + 16 >> 2] & 4 | 0) != 0 ? i7 : 0;
 L4 : do {
  if ((i3 | 0) != 0) {
   i8 = (HEAP32[H_BASE + 2804 >> 2] | 0) + (((HEAP32[i3 + 16 >> 2] | 0) >>> 7 & HEAP32[H_BASE + 2796 >> 2]) * 24 & -1) | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   if ((i9 | 0) == (i3 | 0)) {
    if ((i8 | 0) == 0) {
     break;
    } else {
     i10 = i8;
    }
   } else {
    i9 = i8;
    while (1) {
     i8 = HEAP32[i9 + 20 >> 2] | 0;
     if ((i8 | 0) == 0) {
      break L4;
     }
     if ((HEAP32[i8 >> 2] | 0) == (i3 | 0)) {
      i10 = i8;
      break;
     } else {
      i9 = i8;
     }
    }
   }
   i9 = HEAPU8[i10 + 4 | 0] | 0;
   HEAP32[i4 + 8 >> 2] = HEAP32[i10 + 12 >> 2];
   HEAP32[i4 >> 2] = i9;
   HEAP32[i4 + 32 >> 2] = i1;
   HEAP32[i4 + 16 >> 2] = 3;
   HEAP32[i4 + 20 >> 2] = 0;
   i11 = 1;
   STACKTOP = i5;
   return i11 | 0;
  }
 } while (0);
 HEAP32[i6 >> 2] = i7;
 i11 = __ZN7WebCore24JSCanvasRenderingContext18getOwnPropertySlotEPN3JSC8JSObjectEPNS1_9ExecStateENS1_12PropertyNameERNS1_12PropertySlotE(i1, i2, i6, i4) | 0;
 STACKTOP = i5;
 return i11 | 0;
}
function __ZN7WebCore40setJSCanvasRenderingContext2DShadowColorEPN3JSC9ExecStateExx(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i2;
 L1 : do {
  if ((i2 & 0 | 0) == 0 & (i3 & -1 | 0) == (-5 | 0)) {
   i10 = i9;
   if ((HEAP32[(i9 & -65536) + 1048 >> 2] | 0) == 2) {
    i11 = i10 + 8 | 0;
   } else {
    i11 = (HEAP32[i10 >> 2] | 0) + 32 | 0;
   }
   i10 = HEAP32[i11 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   } else {
    i12 = i10;
   }
   while (1) {
    if ((i12 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i12 = HEAP32[i12 + 4 >> 2] | 0;
    if ((i12 | 0) == 0) {
     break L1;
    }
   }
   if ((i9 | 0) == 0) {
    break;
   }
   i10 = HEAP32[i9 + 12 >> 2] | 0;
   i13 = i8 | 0;
   HEAP32[i13 >> 2] = i4;
   HEAP32[i13 + 4 >> 2] = i5;
   __ZN7WebCore26valueToStringWithNullCheckEPN3JSC9ExecStateENS0_7JSValueE(i7, i1, i8);
   i13 = (HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if ((HEAP32[i13 >> 2] & 0 | 0) == 0 & (HEAP32[i13 + 4 >> 2] & -1 | 0) == (-6 | 0)) {
    __ZN7WebCore24CanvasRenderingContext2D14setShadowColorERKN3WTF6StringE(i10, i7);
   }
   i10 = HEAP32[i7 >> 2] | 0;
   if ((i10 | 0) == 0) {
    STACKTOP = i6;
    return;
   }
   i13 = i10 | 0;
   i14 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    STACKTOP = i6;
    return;
   } else {
    HEAP32[i13 >> 2] = i14;
    STACKTOP = i6;
    return;
   }
  }
 } while (0);
 __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 STACKTOP = i6;
 return;
}
function __ZN7WebCore37setJSCanvasRenderingContext2DLineJoinEPN3JSC9ExecStateExx(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i2;
 L1 : do {
  if ((i2 & 0 | 0) == 0 & (i3 & -1 | 0) == (-5 | 0)) {
   i10 = i9;
   if ((HEAP32[(i9 & -65536) + 1048 >> 2] | 0) == 2) {
    i11 = i10 + 8 | 0;
   } else {
    i11 = (HEAP32[i10 >> 2] | 0) + 32 | 0;
   }
   i10 = HEAP32[i11 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   } else {
    i12 = i10;
   }
   while (1) {
    if ((i12 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i12 = HEAP32[i12 + 4 >> 2] | 0;
    if ((i12 | 0) == 0) {
     break L1;
    }
   }
   if ((i9 | 0) == 0) {
    break;
   }
   i10 = HEAP32[i9 + 12 >> 2] | 0;
   i13 = i8 | 0;
   HEAP32[i13 >> 2] = i4;
   HEAP32[i13 + 4 >> 2] = i5;
   __ZN7WebCore26valueToStringWithNullCheckEPN3JSC9ExecStateENS0_7JSValueE(i7, i1, i8);
   i13 = (HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if ((HEAP32[i13 >> 2] & 0 | 0) == 0 & (HEAP32[i13 + 4 >> 2] & -1 | 0) == (-6 | 0)) {
    __ZN7WebCore24CanvasRenderingContext2D11setLineJoinERKN3WTF6StringE(i10, i7);
   }
   i10 = HEAP32[i7 >> 2] | 0;
   if ((i10 | 0) == 0) {
    STACKTOP = i6;
    return;
   }
   i13 = i10 | 0;
   i14 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    STACKTOP = i6;
    return;
   } else {
    HEAP32[i13 >> 2] = i14;
    STACKTOP = i6;
    return;
   }
  }
 } while (0);
 __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 STACKTOP = i6;
 return;
}
function __ZN7WebCore36setJSCanvasRenderingContext2DLineCapEPN3JSC9ExecStateExx(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i2;
 L1 : do {
  if ((i2 & 0 | 0) == 0 & (i3 & -1 | 0) == (-5 | 0)) {
   i10 = i9;
   if ((HEAP32[(i9 & -65536) + 1048 >> 2] | 0) == 2) {
    i11 = i10 + 8 | 0;
   } else {
    i11 = (HEAP32[i10 >> 2] | 0) + 32 | 0;
   }
   i10 = HEAP32[i11 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   } else {
    i12 = i10;
   }
   while (1) {
    if ((i12 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i12 = HEAP32[i12 + 4 >> 2] | 0;
    if ((i12 | 0) == 0) {
     break L1;
    }
   }
   if ((i9 | 0) == 0) {
    break;
   }
   i10 = HEAP32[i9 + 12 >> 2] | 0;
   i13 = i8 | 0;
   HEAP32[i13 >> 2] = i4;
   HEAP32[i13 + 4 >> 2] = i5;
   __ZN7WebCore26valueToStringWithNullCheckEPN3JSC9ExecStateENS0_7JSValueE(i7, i1, i8);
   i13 = (HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if ((HEAP32[i13 >> 2] & 0 | 0) == 0 & (HEAP32[i13 + 4 >> 2] & -1 | 0) == (-6 | 0)) {
    __ZN7WebCore24CanvasRenderingContext2D10setLineCapERKN3WTF6StringE(i10, i7);
   }
   i10 = HEAP32[i7 >> 2] | 0;
   if ((i10 | 0) == 0) {
    STACKTOP = i6;
    return;
   }
   i13 = i10 | 0;
   i14 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    STACKTOP = i6;
    return;
   } else {
    HEAP32[i13 >> 2] = i14;
    STACKTOP = i6;
    return;
   }
  }
 } while (0);
 __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 STACKTOP = i6;
 return;
}
function __ZN7WebCore49setJSCanvasRenderingContext2DWebkitLineDashOffsetEPN3JSC9ExecStateExx(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, d11 = +0, i12 = 0, i13 = 0, d14 = +0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6 | 0;
 i8 = i7 | 0;
 HEAP32[i8 >> 2] = i4;
 HEAP32[i8 + 4 >> 2] = i5;
 i8 = i2;
 i9 = i5;
 i10 = i4;
 d11 = (HEAP32[tempDoublePtr >> 2] = i4, HEAP32[tempDoublePtr + 4 >> 2] = i5, +HEAPF64[tempDoublePtr >> 3]);
 L1 : do {
  if ((i2 & 0 | 0) == 0 & (i3 & -1 | 0) == (-5 | 0)) {
   i5 = i8;
   if ((HEAP32[(i8 & -65536) + 1048 >> 2] | 0) == 2) {
    i12 = i5 + 8 | 0;
   } else {
    i12 = (HEAP32[i5 >> 2] | 0) + 32 | 0;
   }
   i5 = HEAP32[i12 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   } else {
    i13 = i5;
   }
   while (1) {
    if ((i13 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i13 = HEAP32[i13 + 4 >> 2] | 0;
    if ((i13 | 0) == 0) {
     break L1;
    }
   }
   if ((i8 | 0) == 0) {
    break;
   }
   i5 = HEAP32[i8 + 12 >> 2] | 0;
   do {
    if ((i9 | 0) == -1) {
     d14 = +(i10 | 0);
    } else {
     if (i9 >>> 0 < 4294967289 >>> 0) {
      d14 = d11;
      break;
     }
     d14 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i7, i1);
    }
   } while (0);
   i4 = (HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i4 >> 2] & 0 | 0) == 0 & (HEAP32[i4 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    STACKTOP = i6;
    return;
   }
   __ZN7WebCore24CanvasRenderingContext2D23setWebkitLineDashOffsetEf(i5, d14);
   STACKTOP = i6;
   return;
  }
 } while (0);
 __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 STACKTOP = i6;
 return;
}
function __ZN7WebCore43setJSCanvasRenderingContext2DLineDashOffsetEPN3JSC9ExecStateExx(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, d11 = +0, i12 = 0, i13 = 0, d14 = +0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6 | 0;
 i8 = i7 | 0;
 HEAP32[i8 >> 2] = i4;
 HEAP32[i8 + 4 >> 2] = i5;
 i8 = i2;
 i9 = i5;
 i10 = i4;
 d11 = (HEAP32[tempDoublePtr >> 2] = i4, HEAP32[tempDoublePtr + 4 >> 2] = i5, +HEAPF64[tempDoublePtr >> 3]);
 L1 : do {
  if ((i2 & 0 | 0) == 0 & (i3 & -1 | 0) == (-5 | 0)) {
   i5 = i8;
   if ((HEAP32[(i8 & -65536) + 1048 >> 2] | 0) == 2) {
    i12 = i5 + 8 | 0;
   } else {
    i12 = (HEAP32[i5 >> 2] | 0) + 32 | 0;
   }
   i5 = HEAP32[i12 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   } else {
    i13 = i5;
   }
   while (1) {
    if ((i13 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i13 = HEAP32[i13 + 4 >> 2] | 0;
    if ((i13 | 0) == 0) {
     break L1;
    }
   }
   if ((i8 | 0) == 0) {
    break;
   }
   i5 = HEAP32[i8 + 12 >> 2] | 0;
   do {
    if ((i9 | 0) == -1) {
     d14 = +(i10 | 0);
    } else {
     if (i9 >>> 0 < 4294967289 >>> 0) {
      d14 = d11;
      break;
     }
     d14 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i7, i1);
    }
   } while (0);
   i4 = (HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i4 >> 2] & 0 | 0) == 0 & (HEAP32[i4 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    STACKTOP = i6;
    return;
   }
   __ZN7WebCore24CanvasRenderingContext2D17setLineDashOffsetEf(i5, d14);
   STACKTOP = i6;
   return;
  }
 } while (0);
 __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 STACKTOP = i6;
 return;
}
function __ZN7WebCore42setJSCanvasRenderingContext2DShadowOffsetYEPN3JSC9ExecStateExx(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, d11 = +0, i12 = 0, i13 = 0, d14 = +0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6 | 0;
 i8 = i7 | 0;
 HEAP32[i8 >> 2] = i4;
 HEAP32[i8 + 4 >> 2] = i5;
 i8 = i2;
 i9 = i5;
 i10 = i4;
 d11 = (HEAP32[tempDoublePtr >> 2] = i4, HEAP32[tempDoublePtr + 4 >> 2] = i5, +HEAPF64[tempDoublePtr >> 3]);
 L1 : do {
  if ((i2 & 0 | 0) == 0 & (i3 & -1 | 0) == (-5 | 0)) {
   i5 = i8;
   if ((HEAP32[(i8 & -65536) + 1048 >> 2] | 0) == 2) {
    i12 = i5 + 8 | 0;
   } else {
    i12 = (HEAP32[i5 >> 2] | 0) + 32 | 0;
   }
   i5 = HEAP32[i12 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   } else {
    i13 = i5;
   }
   while (1) {
    if ((i13 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i13 = HEAP32[i13 + 4 >> 2] | 0;
    if ((i13 | 0) == 0) {
     break L1;
    }
   }
   if ((i8 | 0) == 0) {
    break;
   }
   i5 = HEAP32[i8 + 12 >> 2] | 0;
   do {
    if ((i9 | 0) == -1) {
     d14 = +(i10 | 0);
    } else {
     if (i9 >>> 0 < 4294967289 >>> 0) {
      d14 = d11;
      break;
     }
     d14 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i7, i1);
    }
   } while (0);
   i4 = (HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i4 >> 2] & 0 | 0) == 0 & (HEAP32[i4 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    STACKTOP = i6;
    return;
   }
   __ZN7WebCore24CanvasRenderingContext2D16setShadowOffsetYEf(i5, d14);
   STACKTOP = i6;
   return;
  }
 } while (0);
 __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 STACKTOP = i6;
 return;
}
function __ZN7WebCore42setJSCanvasRenderingContext2DShadowOffsetXEPN3JSC9ExecStateExx(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, d11 = +0, i12 = 0, i13 = 0, d14 = +0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6 | 0;
 i8 = i7 | 0;
 HEAP32[i8 >> 2] = i4;
 HEAP32[i8 + 4 >> 2] = i5;
 i8 = i2;
 i9 = i5;
 i10 = i4;
 d11 = (HEAP32[tempDoublePtr >> 2] = i4, HEAP32[tempDoublePtr + 4 >> 2] = i5, +HEAPF64[tempDoublePtr >> 3]);
 L1 : do {
  if ((i2 & 0 | 0) == 0 & (i3 & -1 | 0) == (-5 | 0)) {
   i5 = i8;
   if ((HEAP32[(i8 & -65536) + 1048 >> 2] | 0) == 2) {
    i12 = i5 + 8 | 0;
   } else {
    i12 = (HEAP32[i5 >> 2] | 0) + 32 | 0;
   }
   i5 = HEAP32[i12 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   } else {
    i13 = i5;
   }
   while (1) {
    if ((i13 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i13 = HEAP32[i13 + 4 >> 2] | 0;
    if ((i13 | 0) == 0) {
     break L1;
    }
   }
   if ((i8 | 0) == 0) {
    break;
   }
   i5 = HEAP32[i8 + 12 >> 2] | 0;
   do {
    if ((i9 | 0) == -1) {
     d14 = +(i10 | 0);
    } else {
     if (i9 >>> 0 < 4294967289 >>> 0) {
      d14 = d11;
      break;
     }
     d14 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i7, i1);
    }
   } while (0);
   i4 = (HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i4 >> 2] & 0 | 0) == 0 & (HEAP32[i4 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    STACKTOP = i6;
    return;
   }
   __ZN7WebCore24CanvasRenderingContext2D16setShadowOffsetXEf(i5, d14);
   STACKTOP = i6;
   return;
  }
 } while (0);
 __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 STACKTOP = i6;
 return;
}
function __ZN7WebCore40setJSCanvasRenderingContext2DGlobalAlphaEPN3JSC9ExecStateExx(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, d11 = +0, i12 = 0, i13 = 0, d14 = +0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6 | 0;
 i8 = i7 | 0;
 HEAP32[i8 >> 2] = i4;
 HEAP32[i8 + 4 >> 2] = i5;
 i8 = i2;
 i9 = i5;
 i10 = i4;
 d11 = (HEAP32[tempDoublePtr >> 2] = i4, HEAP32[tempDoublePtr + 4 >> 2] = i5, +HEAPF64[tempDoublePtr >> 3]);
 L1 : do {
  if ((i2 & 0 | 0) == 0 & (i3 & -1 | 0) == (-5 | 0)) {
   i5 = i8;
   if ((HEAP32[(i8 & -65536) + 1048 >> 2] | 0) == 2) {
    i12 = i5 + 8 | 0;
   } else {
    i12 = (HEAP32[i5 >> 2] | 0) + 32 | 0;
   }
   i5 = HEAP32[i12 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   } else {
    i13 = i5;
   }
   while (1) {
    if ((i13 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i13 = HEAP32[i13 + 4 >> 2] | 0;
    if ((i13 | 0) == 0) {
     break L1;
    }
   }
   if ((i8 | 0) == 0) {
    break;
   }
   i5 = HEAP32[i8 + 12 >> 2] | 0;
   do {
    if ((i9 | 0) == -1) {
     d14 = +(i10 | 0);
    } else {
     if (i9 >>> 0 < 4294967289 >>> 0) {
      d14 = d11;
      break;
     }
     d14 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i7, i1);
    }
   } while (0);
   i4 = (HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i4 >> 2] & 0 | 0) == 0 & (HEAP32[i4 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    STACKTOP = i6;
    return;
   }
   __ZN7WebCore24CanvasRenderingContext2D14setGlobalAlphaEf(i5, d14);
   STACKTOP = i6;
   return;
  }
 } while (0);
 __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 STACKTOP = i6;
 return;
}
function __ZN3WTF7HashSetIPN3JSC20MarkedArgumentBufferENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = HEAP32[i1 + 4 >> 2] | 0;
  i5 = i4 << 2 | 0;
  i6 = 0;
  i7 = i4;
 } else {
  i4 = HEAP32[i1 + 8 >> 2] | 0;
  i8 = HEAP32[i2 >> 2] | 0;
  i2 = i8;
  i9 = i2 + ~(i2 << 15) | 0;
  i2 = (i9 >>> 10 ^ i9) * 9 & -1;
  i9 = i2 >>> 6 ^ i2;
  i2 = i9 + ~(i9 << 11) | 0;
  i9 = i2 >>> 16 ^ i2;
  i2 = i9 & i4;
  i10 = i3 + (i2 << 2) | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  L3 : do {
   if ((i11 | 0) == (i8 | 0)) {
    i12 = i10;
   } else {
    i13 = (i9 >>> 23) + ~i9 | 0;
    i14 = i13 << 12 ^ i13;
    i13 = i14 >>> 7 ^ i14;
    i14 = i13 << 2 ^ i13;
    i13 = i14 >>> 20 ^ i14 | 1;
    i14 = 0;
    i15 = i2;
    i16 = i11;
    while (1) {
     if ((i16 | 0) == 0) {
      i12 = 0;
      break L3;
     }
     i17 = (i14 | 0) == 0 ? i13 : i14;
     i18 = i17 + i15 & i4;
     i19 = i3 + (i18 << 2) | 0;
     i20 = HEAP32[i19 >> 2] | 0;
     if ((i20 | 0) == (i8 | 0)) {
      i12 = i19;
      break;
     } else {
      i14 = i17;
      i15 = i18;
      i16 = i20;
     }
    }
   }
  } while (0);
  i8 = HEAP32[i1 + 4 >> 2] | 0;
  i5 = (i12 | 0) == 0 ? i3 + (i8 << 2) | 0 : i12;
  i6 = i3;
  i7 = i8;
 }
 if ((i5 | 0) == (i6 + (i7 << 2) | 0)) {
  i21 = 0;
  return i21 | 0;
 }
 __ZN3WTF9HashTableIPN3JSC20MarkedArgumentBufferES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6removeEPS3_(i1 | 0, i5);
 i21 = 1;
 return i21 | 0;
}
function __ZN7WebCore39setJSCanvasRenderingContext2DShadowBlurEPN3JSC9ExecStateExx(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, d11 = +0, i12 = 0, i13 = 0, d14 = +0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6 | 0;
 i8 = i7 | 0;
 HEAP32[i8 >> 2] = i4;
 HEAP32[i8 + 4 >> 2] = i5;
 i8 = i2;
 i9 = i5;
 i10 = i4;
 d11 = (HEAP32[tempDoublePtr >> 2] = i4, HEAP32[tempDoublePtr + 4 >> 2] = i5, +HEAPF64[tempDoublePtr >> 3]);
 L1 : do {
  if ((i2 & 0 | 0) == 0 & (i3 & -1 | 0) == (-5 | 0)) {
   i5 = i8;
   if ((HEAP32[(i8 & -65536) + 1048 >> 2] | 0) == 2) {
    i12 = i5 + 8 | 0;
   } else {
    i12 = (HEAP32[i5 >> 2] | 0) + 32 | 0;
   }
   i5 = HEAP32[i12 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   } else {
    i13 = i5;
   }
   while (1) {
    if ((i13 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i13 = HEAP32[i13 + 4 >> 2] | 0;
    if ((i13 | 0) == 0) {
     break L1;
    }
   }
   if ((i8 | 0) == 0) {
    break;
   }
   i5 = HEAP32[i8 + 12 >> 2] | 0;
   do {
    if ((i9 | 0) == -1) {
     d14 = +(i10 | 0);
    } else {
     if (i9 >>> 0 < 4294967289 >>> 0) {
      d14 = d11;
      break;
     }
     d14 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i7, i1);
    }
   } while (0);
   i4 = (HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i4 >> 2] & 0 | 0) == 0 & (HEAP32[i4 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    STACKTOP = i6;
    return;
   }
   __ZN7WebCore24CanvasRenderingContext2D13setShadowBlurEf(i5, d14);
   STACKTOP = i6;
   return;
  }
 } while (0);
 __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 STACKTOP = i6;
 return;
}
function __ZN7WebCore39setJSCanvasRenderingContext2DMiterLimitEPN3JSC9ExecStateExx(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, d11 = +0, i12 = 0, i13 = 0, d14 = +0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6 | 0;
 i8 = i7 | 0;
 HEAP32[i8 >> 2] = i4;
 HEAP32[i8 + 4 >> 2] = i5;
 i8 = i2;
 i9 = i5;
 i10 = i4;
 d11 = (HEAP32[tempDoublePtr >> 2] = i4, HEAP32[tempDoublePtr + 4 >> 2] = i5, +HEAPF64[tempDoublePtr >> 3]);
 L1 : do {
  if ((i2 & 0 | 0) == 0 & (i3 & -1 | 0) == (-5 | 0)) {
   i5 = i8;
   if ((HEAP32[(i8 & -65536) + 1048 >> 2] | 0) == 2) {
    i12 = i5 + 8 | 0;
   } else {
    i12 = (HEAP32[i5 >> 2] | 0) + 32 | 0;
   }
   i5 = HEAP32[i12 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   } else {
    i13 = i5;
   }
   while (1) {
    if ((i13 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i13 = HEAP32[i13 + 4 >> 2] | 0;
    if ((i13 | 0) == 0) {
     break L1;
    }
   }
   if ((i8 | 0) == 0) {
    break;
   }
   i5 = HEAP32[i8 + 12 >> 2] | 0;
   do {
    if ((i9 | 0) == -1) {
     d14 = +(i10 | 0);
    } else {
     if (i9 >>> 0 < 4294967289 >>> 0) {
      d14 = d11;
      break;
     }
     d14 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i7, i1);
    }
   } while (0);
   i4 = (HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i4 >> 2] & 0 | 0) == 0 & (HEAP32[i4 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    STACKTOP = i6;
    return;
   }
   __ZN7WebCore24CanvasRenderingContext2D13setMiterLimitEf(i5, d14);
   STACKTOP = i6;
   return;
  }
 } while (0);
 __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 STACKTOP = i6;
 return;
}
function __ZN7WebCore38setJSCanvasRenderingContext2DLineWidthEPN3JSC9ExecStateExx(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, d11 = +0, i12 = 0, i13 = 0, d14 = +0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6 | 0;
 i8 = i7 | 0;
 HEAP32[i8 >> 2] = i4;
 HEAP32[i8 + 4 >> 2] = i5;
 i8 = i2;
 i9 = i5;
 i10 = i4;
 d11 = (HEAP32[tempDoublePtr >> 2] = i4, HEAP32[tempDoublePtr + 4 >> 2] = i5, +HEAPF64[tempDoublePtr >> 3]);
 L1 : do {
  if ((i2 & 0 | 0) == 0 & (i3 & -1 | 0) == (-5 | 0)) {
   i5 = i8;
   if ((HEAP32[(i8 & -65536) + 1048 >> 2] | 0) == 2) {
    i12 = i5 + 8 | 0;
   } else {
    i12 = (HEAP32[i5 >> 2] | 0) + 32 | 0;
   }
   i5 = HEAP32[i12 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   } else {
    i13 = i5;
   }
   while (1) {
    if ((i13 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i13 = HEAP32[i13 + 4 >> 2] | 0;
    if ((i13 | 0) == 0) {
     break L1;
    }
   }
   if ((i8 | 0) == 0) {
    break;
   }
   i5 = HEAP32[i8 + 12 >> 2] | 0;
   do {
    if ((i9 | 0) == -1) {
     d14 = +(i10 | 0);
    } else {
     if (i9 >>> 0 < 4294967289 >>> 0) {
      d14 = d11;
      break;
     }
     d14 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i7, i1);
    }
   } while (0);
   i4 = (HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i4 >> 2] & 0 | 0) == 0 & (HEAP32[i4 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    STACKTOP = i6;
    return;
   }
   __ZN7WebCore24CanvasRenderingContext2D12setLineWidthEf(i5, d14);
   STACKTOP = i6;
   return;
  }
 } while (0);
 __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 STACKTOP = i6;
 return;
}
function __ZN7WebCore26JSCanvasRenderingContext2D15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore33JSCanvasRenderingContextPrototype4selfERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i2) | 0;
 i7 = (i6 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = 32;
 HEAP8[i5 + 2 | 0] = 0;
 i8 = i1 + 7104 | 0;
 i9 = i8 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 if ((i10 | 0) == 0) {
  i11 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i8, 64) | 0;
 } else {
  HEAP32[i9 >> 2] = HEAP32[i10 >> 2];
  i11 = i10;
 }
 HEAP32[i11 >> 2] = 0;
 i10 = i4 | 0;
 HEAP32[i10 >> 2] = (i7 ? 0 : 0) | i6;
 HEAP32[i10 + 4 >> 2] = i7 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i11, i1, i2, i4, i5, H_BASE + 2912, 0, 0);
 i5 = i1 + 13176 | 0;
 i1 = i5 | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i12 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i5, 8) | 0;
  i13 = i11;
  i14 = i12;
  HEAP32[i14 >> 2] = i13;
  i15 = i12 + 4 | 0;
  i16 = i15;
  HEAP32[i16 >> 2] = 0;
  i17 = i12;
  STACKTOP = i3;
  return i17 | 0;
 } else {
  HEAP32[i1 >> 2] = HEAP32[i4 >> 2];
  i12 = i4;
  i13 = i11;
  i14 = i12;
  HEAP32[i14 >> 2] = i13;
  i15 = i12 + 4 | 0;
  i16 = i15;
  HEAP32[i16 >> 2] = 0;
  i17 = i12;
  STACKTOP = i3;
  return i17 | 0;
 }
 return 0;
}
function __ZN7WebCore37jsCanvasRenderingContext2DConstructorEPN3JSC9ExecStateExxNS0_12PropertyNameE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i5 = STACKTOP;
 i4 = i6;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i6 >> 2] = HEAP32[i4 >> 2];
 i4 = i2;
 L1 : do {
  if ((i2 & 0 | 0) == 0 & (i3 & -1 | 0) == (-5 | 0)) {
   i6 = i4;
   if ((HEAP32[(i4 & -65536) + 1048 >> 2] | 0) == 2) {
    i7 = i6 + 8 | 0;
   } else {
    i7 = (HEAP32[i6 >> 2] | 0) + 32 | 0;
   }
   i6 = HEAP32[i7 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   } else {
    i8 = i6;
   }
   while (1) {
    if ((i8 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i8 = HEAP32[i8 + 4 >> 2] | 0;
    if ((i8 | 0) == 0) {
     break L1;
    }
   }
   if ((i4 | 0) == 0) {
    break;
   }
   i6 = __ZN7WebCore17getDOMConstructorINS_37JSCanvasRenderingContext2DConstructorEEEPN3JSC8JSObjectERNS2_2VMEPKNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0, HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] | 0) | 0;
   i9 = (i6 | 0) == 0;
   i10 = (i9 ? -6 : -5) | 0;
   i11 = (i9 ? 0 : 0) | i6;
   STACKTOP = i5;
   return (tempRet0 = i10, i11) | 0;
  }
 } while (0);
 i4 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 i1 = (i4 | 0) == 0;
 i10 = (i1 ? -6 : -5) | 0;
 i11 = (i1 ? 0 : 0) | i4;
 STACKTOP = i5;
 return (tempRet0 = i10, i11) | 0;
}
function __ZN7WebCore54jsCanvasRenderingContext2DPrototypeFunctionGetLineDashEPN3JSC9ExecStateE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 40 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i5;
 L1 : do {
  if ((i5 & 0 | 0) == 0 & (HEAP32[i4 + 4 >> 2] & -1 | 0) == (-5 | 0)) {
   i7 = i6;
   if ((HEAP32[(i6 & -65536) + 1048 >> 2] | 0) == 2) {
    i8 = i7 + 8 | 0;
   } else {
    i8 = (HEAP32[i7 >> 2] | 0) + 32 | 0;
   }
   i7 = HEAP32[i8 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   } else {
    i9 = i7;
   }
   while (1) {
    if ((i9 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i9 = HEAP32[i9 + 4 >> 2] | 0;
    if ((i9 | 0) == 0) {
     break L1;
    }
   }
   i7 = i6;
   if ((i6 | 0) == 0) {
    break;
   }
   i10 = HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] | 0;
   __ZN7WebCore7jsArrayIfLj0EEEN3JSC7JSValueEPNS1_9ExecStateEPNS_17JSDOMGlobalObjectERKN3WTF6VectorIT_XT0_ENS7_15CrashOnOverflowEEE(i3, i1, i10, __ZNK7WebCore24CanvasRenderingContext2D11getLineDashEv(HEAP32[i7 + 12 >> 2] | 0) | 0);
   i7 = i3 | 0;
   i11 = HEAP32[i7 + 4 >> 2] | 0;
   i12 = HEAP32[i7 >> 2] | 0;
   STACKTOP = i2;
   return (tempRet0 = i11, i12) | 0;
  }
 } while (0);
 i3 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 i1 = (i3 | 0) == 0;
 i11 = (i1 ? -6 : -5) | 0;
 i12 = (i1 ? 0 : 0) | i3;
 STACKTOP = i2;
 return (tempRet0 = i11, i12) | 0;
}
function __ZN7WebCore40setJSCanvasRenderingContext2DCurrentPathEPN3JSC9ExecStateExx(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6 | 0;
 i8 = i2;
 L1 : do {
  if ((i2 & 0 | 0) == 0 & (i3 & -1 | 0) == (-5 | 0)) {
   i9 = i8;
   if ((HEAP32[(i8 & -65536) + 1048 >> 2] | 0) == 2) {
    i10 = i9 + 8 | 0;
   } else {
    i10 = (HEAP32[i9 >> 2] | 0) + 32 | 0;
   }
   i9 = HEAP32[i10 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   } else {
    i11 = i9;
   }
   while (1) {
    if ((i11 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i11 = HEAP32[i11 + 4 >> 2] | 0;
    if ((i11 | 0) == 0) {
     break L1;
    }
   }
   if ((i8 | 0) == 0) {
    break;
   }
   i9 = HEAP32[i8 + 12 >> 2] | 0;
   i12 = i7 | 0;
   HEAP32[i12 >> 2] = i4;
   HEAP32[i12 + 4 >> 2] = i5;
   i12 = __ZN7WebCore9toDOMPathEN3JSC7JSValueE(i7) | 0;
   i13 = (HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i13 >> 2] & 0 | 0) == 0 & (HEAP32[i13 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    STACKTOP = i6;
    return;
   }
   __ZN7WebCore24CanvasRenderingContext2D14setCurrentPathEPNS_7DOMPathE(i9, i12);
   STACKTOP = i6;
   return;
  }
 } while (0);
 __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 STACKTOP = i6;
 return;
}
function __ZN7WebCore40jsCanvasRenderingContext2DWebkitLineDashEPN3JSC9ExecStateExxNS0_12PropertyNameE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i2 = i6;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i6 >> 2] = HEAP32[i2 >> 2];
 i2 = i3 | 0;
 i6 = i4;
 L1 : do {
  if ((i4 & 0 | 0) == 0 & (i5 & -1 | 0) == (-5 | 0)) {
   i7 = i6;
   if ((HEAP32[(i6 & -65536) + 1048 >> 2] | 0) == 2) {
    i8 = i7 + 8 | 0;
   } else {
    i8 = (HEAP32[i7 >> 2] | 0) + 32 | 0;
   }
   i7 = HEAP32[i8 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   } else {
    i9 = i7;
   }
   while (1) {
    if ((i9 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i9 = HEAP32[i9 + 4 >> 2] | 0;
    if ((i9 | 0) == 0) {
     break L1;
    }
   }
   if ((i6 | 0) == 0) {
    break;
   }
   __ZNK7WebCore26JSCanvasRenderingContext2D14webkitLineDashEPN3JSC9ExecStateE(i2, i6, i1);
   i7 = i2 | 0;
   i10 = HEAP32[i7 + 4 >> 2] | 0;
   i11 = HEAP32[i7 >> 2] | 0;
   STACKTOP = i3;
   return (tempRet0 = i10, i11) | 0;
  }
 } while (0);
 i2 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 i1 = (i2 | 0) == 0;
 i10 = (i1 ? -6 : -5) | 0;
 i11 = (i1 ? 0 : 0) | i2;
 STACKTOP = i3;
 return (tempRet0 = i10, i11) | 0;
}
function __ZN7WebCore37jsCanvasRenderingContext2DStrokeStyleEPN3JSC9ExecStateExxNS0_12PropertyNameE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i2 = i6;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i6 >> 2] = HEAP32[i2 >> 2];
 i2 = i3 | 0;
 i6 = i4;
 L1 : do {
  if ((i4 & 0 | 0) == 0 & (i5 & -1 | 0) == (-5 | 0)) {
   i7 = i6;
   if ((HEAP32[(i6 & -65536) + 1048 >> 2] | 0) == 2) {
    i8 = i7 + 8 | 0;
   } else {
    i8 = (HEAP32[i7 >> 2] | 0) + 32 | 0;
   }
   i7 = HEAP32[i8 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   } else {
    i9 = i7;
   }
   while (1) {
    if ((i9 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i9 = HEAP32[i9 + 4 >> 2] | 0;
    if ((i9 | 0) == 0) {
     break L1;
    }
   }
   if ((i6 | 0) == 0) {
    break;
   }
   __ZNK7WebCore26JSCanvasRenderingContext2D11strokeStyleEPN3JSC9ExecStateE(i2, i6, i1);
   i7 = i2 | 0;
   i10 = HEAP32[i7 + 4 >> 2] | 0;
   i11 = HEAP32[i7 >> 2] | 0;
   STACKTOP = i3;
   return (tempRet0 = i10, i11) | 0;
  }
 } while (0);
 i2 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 i1 = (i2 | 0) == 0;
 i10 = (i1 ? -6 : -5) | 0;
 i11 = (i1 ? 0 : 0) | i2;
 STACKTOP = i3;
 return (tempRet0 = i10, i11) | 0;
}
function __ZN7WebCore15getDOMStructureINS_26JSCanvasRenderingContext2DEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, H_BASE + 3016) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore26JSCanvasRenderingContext2D15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = -32;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, H_BASE + 3016, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, H_BASE + 3016) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore35jsCanvasRenderingContext2DFillStyleEPN3JSC9ExecStateExxNS0_12PropertyNameE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i2 = i6;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i6 >> 2] = HEAP32[i2 >> 2];
 i2 = i3 | 0;
 i6 = i4;
 L1 : do {
  if ((i4 & 0 | 0) == 0 & (i5 & -1 | 0) == (-5 | 0)) {
   i7 = i6;
   if ((HEAP32[(i6 & -65536) + 1048 >> 2] | 0) == 2) {
    i8 = i7 + 8 | 0;
   } else {
    i8 = (HEAP32[i7 >> 2] | 0) + 32 | 0;
   }
   i7 = HEAP32[i8 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   } else {
    i9 = i7;
   }
   while (1) {
    if ((i9 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i9 = HEAP32[i9 + 4 >> 2] | 0;
    if ((i9 | 0) == 0) {
     break L1;
    }
   }
   if ((i6 | 0) == 0) {
    break;
   }
   __ZNK7WebCore26JSCanvasRenderingContext2D9fillStyleEPN3JSC9ExecStateE(i2, i6, i1);
   i7 = i2 | 0;
   i10 = HEAP32[i7 + 4 >> 2] | 0;
   i11 = HEAP32[i7 >> 2] | 0;
   STACKTOP = i3;
   return (tempRet0 = i10, i11) | 0;
  }
 } while (0);
 i2 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 i1 = (i2 | 0) == 0;
 i10 = (i1 ? -6 : -5) | 0;
 i11 = (i1 ? 0 : 0) | i2;
 STACKTOP = i3;
 return (tempRet0 = i10, i11) | 0;
}
function __ZN7WebCore53jsCanvasRenderingContext2DWebkitImageSmoothingEnabledEPN3JSC9ExecStateExxNS0_12PropertyNameE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 i2 = i6;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i6 >> 2] = HEAP32[i2 >> 2];
 i2 = i4;
 L1 : do {
  if ((i4 & 0 | 0) == 0 & (i5 & -1 | 0) == (-5 | 0)) {
   i6 = i2;
   if ((HEAP32[(i2 & -65536) + 1048 >> 2] | 0) == 2) {
    i7 = i6 + 8 | 0;
   } else {
    i7 = (HEAP32[i6 >> 2] | 0) + 32 | 0;
   }
   i6 = HEAP32[i7 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   } else {
    i8 = i6;
   }
   while (1) {
    if ((i8 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i8 = HEAP32[i8 + 4 >> 2] | 0;
    if ((i8 | 0) == 0) {
     break L1;
    }
   }
   if ((i2 | 0) == 0) {
    break;
   }
   i9 = -2 | 0;
   i10 = (__ZNK7WebCore24CanvasRenderingContext2D27webkitImageSmoothingEnabledEv(HEAP32[i2 + 12 >> 2] | 0) | 0) & 1 | 0;
   STACKTOP = i3;
   return (tempRet0 = i9, i10) | 0;
  }
 } while (0);
 i2 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 i1 = (i2 | 0) == 0;
 i9 = (i1 ? -6 : -5) | 0;
 i10 = (i1 ? 0 : 0) | i2;
 STACKTOP = i3;
 return (tempRet0 = i9, i10) | 0;
}
function __ZN3JSC8JSObject43setStructureAndReallocateStorageIfNecessaryERNS_2VMEjPNS_9StructureE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i5 = i4 + 48 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = (i6 | 0) < 100 ? 0 : i6 - 99 | 0;
 do {
  if ((i7 | 0) == 0) {
   i8 = 0;
  } else {
   if (i7 >>> 0 < 5 >>> 0) {
    i8 = 4;
    break;
   }
   i6 = i7 - 1 | 0;
   i9 = i6 >>> 1 | i6;
   i6 = i9 >>> 2 | i9;
   i9 = i6 >>> 4 | i6;
   i6 = i9 >>> 8 | i9;
   i8 = (i6 >>> 16 | i6) + 1 | 0;
  }
 } while (0);
 if ((i8 | 0) == (i3 | 0)) {
  HEAP32[i1 >> 2] = i4;
  return;
 }
 i8 = i2 + 16 | 0;
 __ZN3JSC4Heap22incrementDeferralDepthEv(i8);
 i7 = HEAP32[i5 >> 2] | 0;
 i5 = (i7 | 0) < 100 ? 0 : i7 - 99 | 0;
 do {
  if ((i5 | 0) == 0) {
   i10 = 0;
  } else {
   if (i5 >>> 0 < 5 >>> 0) {
    i10 = 4;
    break;
   }
   i7 = i5 - 1 | 0;
   i6 = i7 >>> 1 | i7;
   i7 = i6 >>> 2 | i6;
   i6 = i7 >>> 4 | i7;
   i7 = i6 >>> 8 | i6;
   i10 = (i7 >>> 16 | i7) + 1 | 0;
  }
 } while (0);
 HEAP32[i1 + 4 >> 2] = __ZN3JSC8JSObject20growOutOfLineStorageERNS_2VMEjj(i1, i2, i3, i10) | 0;
 HEAP32[i1 >> 2] = i4;
 __ZN3JSC4Heap35decrementDeferralDepthAndGCIfNeededEv(i8);
 return;
}
function __ZN7WebCore43setJSCanvasRenderingContext2DWebkitLineDashEPN3JSC9ExecStateExx(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6 | 0;
 i8 = i2;
 L1 : do {
  if ((i2 & 0 | 0) == 0 & (i3 & -1 | 0) == (-5 | 0)) {
   i9 = i8;
   if ((HEAP32[(i8 & -65536) + 1048 >> 2] | 0) == 2) {
    i10 = i9 + 8 | 0;
   } else {
    i10 = (HEAP32[i9 >> 2] | 0) + 32 | 0;
   }
   i9 = HEAP32[i10 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   } else {
    i11 = i9;
   }
   while (1) {
    if ((i11 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i11 = HEAP32[i11 + 4 >> 2] | 0;
    if ((i11 | 0) == 0) {
     break L1;
    }
   }
   if ((i8 | 0) == 0) {
    break;
   }
   i9 = i7 | 0;
   HEAP32[i9 >> 2] = i4;
   HEAP32[i9 + 4 >> 2] = i5;
   __ZN7WebCore26JSCanvasRenderingContext2D17setWebkitLineDashEPN3JSC9ExecStateENS1_7JSValueE(i8, i1, i7);
   STACKTOP = i6;
   return;
  }
 } while (0);
 __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 STACKTOP = i6;
 return;
}
function __ZN7WebCore40setJSCanvasRenderingContext2DStrokeStyleEPN3JSC9ExecStateExx(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6 | 0;
 i8 = i2;
 L1 : do {
  if ((i2 & 0 | 0) == 0 & (i3 & -1 | 0) == (-5 | 0)) {
   i9 = i8;
   if ((HEAP32[(i8 & -65536) + 1048 >> 2] | 0) == 2) {
    i10 = i9 + 8 | 0;
   } else {
    i10 = (HEAP32[i9 >> 2] | 0) + 32 | 0;
   }
   i9 = HEAP32[i10 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   } else {
    i11 = i9;
   }
   while (1) {
    if ((i11 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i11 = HEAP32[i11 + 4 >> 2] | 0;
    if ((i11 | 0) == 0) {
     break L1;
    }
   }
   if ((i8 | 0) == 0) {
    break;
   }
   i9 = i7 | 0;
   HEAP32[i9 >> 2] = i4;
   HEAP32[i9 + 4 >> 2] = i5;
   __ZN7WebCore26JSCanvasRenderingContext2D14setStrokeStyleEPN3JSC9ExecStateENS1_7JSValueE(i8, i1, i7);
   STACKTOP = i6;
   return;
  }
 } while (0);
 __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 STACKTOP = i6;
 return;
}
function __ZN7WebCore38setJSCanvasRenderingContext2DFillStyleEPN3JSC9ExecStateExx(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6 | 0;
 i8 = i2;
 L1 : do {
  if ((i2 & 0 | 0) == 0 & (i3 & -1 | 0) == (-5 | 0)) {
   i9 = i8;
   if ((HEAP32[(i8 & -65536) + 1048 >> 2] | 0) == 2) {
    i10 = i9 + 8 | 0;
   } else {
    i10 = (HEAP32[i9 >> 2] | 0) + 32 | 0;
   }
   i9 = HEAP32[i10 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   } else {
    i11 = i9;
   }
   while (1) {
    if ((i11 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i11 = HEAP32[i11 + 4 >> 2] | 0;
    if ((i11 | 0) == 0) {
     break L1;
    }
   }
   if ((i8 | 0) == 0) {
    break;
   }
   i9 = i7 | 0;
   HEAP32[i9 >> 2] = i4;
   HEAP32[i9 + 4 >> 2] = i5;
   __ZN7WebCore26JSCanvasRenderingContext2D12setFillStyleEPN3JSC9ExecStateENS1_7JSValueE(i8, i1, i7);
   STACKTOP = i6;
   return;
  }
 } while (0);
 __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 STACKTOP = i6;
 return;
}
function __ZN7WebCore47jsCanvasRenderingContext2DPrototypeFunctionSaveEPN3JSC9ExecStateE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = i1 + 40 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i3;
 L1 : do {
  if ((i3 & 0 | 0) == 0 & (HEAP32[i2 + 4 >> 2] & -1 | 0) == (-5 | 0)) {
   i5 = i4;
   if ((HEAP32[(i4 & -65536) + 1048 >> 2] | 0) == 2) {
    i6 = i5 + 8 | 0;
   } else {
    i6 = (HEAP32[i5 >> 2] | 0) + 32 | 0;
   }
   i5 = HEAP32[i6 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   } else {
    i7 = i5;
   }
   while (1) {
    if ((i7 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i7 = HEAP32[i7 + 4 >> 2] | 0;
    if ((i7 | 0) == 0) {
     break L1;
    }
   }
   if ((i4 | 0) == 0) {
    break;
   }
   i5 = (HEAP32[i4 + 12 >> 2] | 0) + 256 | 0;
   HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
   i8 = -4;
   i9 = 0;
   return (tempRet0 = i8, i9) | 0;
  }
 } while (0);
 i4 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 i1 = (i4 | 0) == 0;
 i8 = (i1 ? -6 : -5) | 0;
 i9 = (i1 ? 0 : 0) | i4;
 return (tempRet0 = i8, i9) | 0;
}
function __ZN7WebCore54jsCanvasRenderingContext2DPrototypeFunctionClearShadowEPN3JSC9ExecStateE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = i1 + 40 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i3;
 L1 : do {
  if ((i3 & 0 | 0) == 0 & (HEAP32[i2 + 4 >> 2] & -1 | 0) == (-5 | 0)) {
   i5 = i4;
   if ((HEAP32[(i4 & -65536) + 1048 >> 2] | 0) == 2) {
    i6 = i5 + 8 | 0;
   } else {
    i6 = (HEAP32[i5 >> 2] | 0) + 32 | 0;
   }
   i5 = HEAP32[i6 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   } else {
    i7 = i5;
   }
   while (1) {
    if ((i7 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i7 = HEAP32[i7 + 4 >> 2] | 0;
    if ((i7 | 0) == 0) {
     break L1;
    }
   }
   if ((i4 | 0) == 0) {
    break;
   }
   __ZN7WebCore24CanvasRenderingContext2D11clearShadowEv(HEAP32[i4 + 12 >> 2] | 0);
   i8 = -4;
   i9 = 0;
   return (tempRet0 = i8, i9) | 0;
  }
 } while (0);
 i4 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 i1 = (i4 | 0) == 0;
 i8 = (i1 ? -6 : -5) | 0;
 i9 = (i1 ? 0 : 0) | i4;
 return (tempRet0 = i8, i9) | 0;
}
function __ZN7WebCore52jsCanvasRenderingContext2DPrototypeFunctionClosePathEPN3JSC9ExecStateE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = i1 + 40 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i3;
 L1 : do {
  if ((i3 & 0 | 0) == 0 & (HEAP32[i2 + 4 >> 2] & -1 | 0) == (-5 | 0)) {
   i5 = i4;
   if ((HEAP32[(i4 & -65536) + 1048 >> 2] | 0) == 2) {
    i6 = i5 + 8 | 0;
   } else {
    i6 = (HEAP32[i5 >> 2] | 0) + 32 | 0;
   }
   i5 = HEAP32[i6 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   } else {
    i7 = i5;
   }
   while (1) {
    if ((i7 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i7 = HEAP32[i7 + 4 >> 2] | 0;
    if ((i7 | 0) == 0) {
     break L1;
    }
   }
   if ((i4 | 0) == 0) {
    break;
   }
   __ZN7WebCore17CanvasPathMethods9closePathEv((HEAP32[i4 + 12 >> 2] | 0) + 32 | 0);
   i8 = -4;
   i9 = 0;
   return (tempRet0 = i8, i9) | 0;
  }
 } while (0);
 i4 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 i1 = (i4 | 0) == 0;
 i8 = (i1 ? -6 : -5) | 0;
 i9 = (i1 ? 0 : 0) | i4;
 return (tempRet0 = i8, i9) | 0;
}
function __ZN7WebCore52jsCanvasRenderingContext2DPrototypeFunctionBeginPathEPN3JSC9ExecStateE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = i1 + 40 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i3;
 L1 : do {
  if ((i3 & 0 | 0) == 0 & (HEAP32[i2 + 4 >> 2] & -1 | 0) == (-5 | 0)) {
   i5 = i4;
   if ((HEAP32[(i4 & -65536) + 1048 >> 2] | 0) == 2) {
    i6 = i5 + 8 | 0;
   } else {
    i6 = (HEAP32[i5 >> 2] | 0) + 32 | 0;
   }
   i5 = HEAP32[i6 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   } else {
    i7 = i5;
   }
   while (1) {
    if ((i7 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i7 = HEAP32[i7 + 4 >> 2] | 0;
    if ((i7 | 0) == 0) {
     break L1;
    }
   }
   if ((i4 | 0) == 0) {
    break;
   }
   __ZN7WebCore24CanvasRenderingContext2D9beginPathEv(HEAP32[i4 + 12 >> 2] | 0);
   i8 = -4;
   i9 = 0;
   return (tempRet0 = i8, i9) | 0;
  }
 } while (0);
 i4 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 i1 = (i4 | 0) == 0;
 i8 = (i1 ? -6 : -5) | 0;
 i9 = (i1 ? 0 : 0) | i4;
 return (tempRet0 = i8, i9) | 0;
}
function __ZN7WebCore50jsCanvasRenderingContext2DPrototypeFunctionRestoreEPN3JSC9ExecStateE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = i1 + 40 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i3;
 L1 : do {
  if ((i3 & 0 | 0) == 0 & (HEAP32[i2 + 4 >> 2] & -1 | 0) == (-5 | 0)) {
   i5 = i4;
   if ((HEAP32[(i4 & -65536) + 1048 >> 2] | 0) == 2) {
    i6 = i5 + 8 | 0;
   } else {
    i6 = (HEAP32[i5 >> 2] | 0) + 32 | 0;
   }
   i5 = HEAP32[i6 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   } else {
    i7 = i5;
   }
   while (1) {
    if ((i7 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i7 = HEAP32[i7 + 4 >> 2] | 0;
    if ((i7 | 0) == 0) {
     break L1;
    }
   }
   if ((i4 | 0) == 0) {
    break;
   }
   __ZN7WebCore24CanvasRenderingContext2D7restoreEv(HEAP32[i4 + 12 >> 2] | 0);
   i8 = -4;
   i9 = 0;
   return (tempRet0 = i8, i9) | 0;
  }
 } while (0);
 i4 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 i1 = (i4 | 0) == 0;
 i8 = (i1 ? -6 : -5) | 0;
 i9 = (i1 ? 0 : 0) | i4;
 return (tempRet0 = i8, i9) | 0;
}
function __ZN7WebCore49jsCanvasRenderingContext2DPrototypeFunctionStrokeEPN3JSC9ExecStateE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = i1 + 40 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i3;
 L1 : do {
  if ((i3 & 0 | 0) == 0 & (HEAP32[i2 + 4 >> 2] & -1 | 0) == (-5 | 0)) {
   i5 = i4;
   if ((HEAP32[(i4 & -65536) + 1048 >> 2] | 0) == 2) {
    i6 = i5 + 8 | 0;
   } else {
    i6 = (HEAP32[i5 >> 2] | 0) + 32 | 0;
   }
   i5 = HEAP32[i6 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   } else {
    i7 = i5;
   }
   while (1) {
    if ((i7 | 0) == (H_BASE + 3016 | 0)) {
     break;
    }
    i7 = HEAP32[i7 + 4 >> 2] | 0;
    if ((i7 | 0) == 0) {
     break L1;
    }
   }
   if ((i4 | 0) == 0) {
    break;
   }
   __ZN7WebCore24CanvasRenderingContext2D6strokeEv(HEAP32[i4 + 12 >> 2] | 0);
   i8 = -4;
   i9 = 0;
   return (tempRet0 = i8, i9) | 0;
  }
 } while (0);
 i4 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 i1 = (i4 | 0) == 0;
 i8 = (i1 ? -6 : -5) | 0;
 i9 = (i1 ? 0 : 0) | i4;
 return (tempRet0 = i8, i9) | 0;
}
function __ZN7WebCore26JSCanvasRenderingContext2DC2EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_24CanvasRenderingContext2DEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = i6 | 0;
 i8 = i4 | 0;
 i4 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i7 >> 2] = i4;
 __ZN7WebCore24JSCanvasRenderingContextC2EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_22CanvasRenderingContextEEE(i1 | 0, i2, i3, i6);
 i6 = HEAP32[i7 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i7 = (HEAP32[i6 + 8 >> 2] | 0) + 8 | 0;
 i6 = i7 | 0;
 i3 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 HEAP32[i6 >> 2] = i3;
 if ((i3 | 0) >= 1) {
  STACKTOP = i5;
  return;
 }
 if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore26JSCanvasRenderingContext2DC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_24CanvasRenderingContext2DEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = i6 | 0;
 i8 = i4 | 0;
 i4 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i7 >> 2] = i4;
 __ZN7WebCore24JSCanvasRenderingContextC2EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_22CanvasRenderingContextEEE(i1 | 0, i2, i3, i6);
 i6 = HEAP32[i7 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i7 = (HEAP32[i6 + 8 >> 2] | 0) + 8 | 0;
 i6 = i7 | 0;
 i3 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 HEAP32[i6 >> 2] = i3;
 if ((i3 | 0) >= 1) {
  STACKTOP = i5;
  return;
 }
 if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore37JSCanvasRenderingContext2DConstructor18getOwnPropertySlotEPN3JSC8JSObjectEPNS1_9ExecStateENS1_12PropertyNameERNS1_12PropertySlotE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i6 >> 2];
 i6 = i5 | 0;
 HEAP32[i6 >> 2] = HEAP32[i3 >> 2];
 i3 = __ZN3JSC18getStaticValueSlotIN7WebCore37JSCanvasRenderingContext2DConstructorENS1_12JSDOMWrapperEEEbPNS_9ExecStateERKNS_9HashTableEPT_NS_12PropertyNameERNS_12PropertySlotE(i2, H_BASE + 2296, i1, i6, i4) | 0;
 STACKTOP = i5;
 return i3 | 0;
}
function __ZN7WebCore35JSCanvasRenderingContext2DPrototype18getOwnPropertySlotEPN3JSC8JSObjectEPNS1_9ExecStateENS1_12PropertyNameERNS1_12PropertySlotE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i6 >> 2];
 i6 = i5 | 0;
 HEAP32[i6 >> 2] = HEAP32[i3 >> 2];
 i3 = __ZN3JSC21getStaticFunctionSlotINS_8JSObjectEEEbPNS_9ExecStateERKNS_9HashTableEPS1_NS_12PropertyNameERNS_12PropertySlotE(i2, H_BASE + 2312, i1, i6, i4) | 0;
 STACKTOP = i5;
 return i3 | 0;
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
function __ZN7WebCore26JSCanvasRenderingContext2D14getConstructorERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = __ZN7WebCore17getDOMConstructorINS_37JSCanvasRenderingContext2DConstructorEEEPN3JSC8JSObjectERNS2_2VMEPKNS_17JSDOMGlobalObjectE(i2, i3) | 0;
 HEAP32[i1 + 4 >> 2] = (i4 | 0) == 0 ? -6 : -5;
 HEAP32[i1 >> 2] = i4;
 return;
}
function iiiiii___ZN3JSC8JSObject17defineOwnPropertyEPS0_PNS_9ExecStateENS_12PropertyNameERKNS_18PropertyDescriptorEb__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return __ZN3JSC8JSObject17defineOwnPropertyEPS0_PNS_9ExecStateENS_12PropertyNameERKNS_18PropertyDescriptorEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
}
function viiiii___ZN3JSC8JSObject3putEPNS_6JSCellEPNS_9ExecStateENS_12PropertyNameENS_7JSValueERNS_15PutPropertySlotE__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZN3JSC8JSObject3putEPNS_6JSCellEPNS_9ExecStateENS_12PropertyNameENS_7JSValueERNS_15PutPropertySlotE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function viiii___ZN3JSC8JSObject27getOwnNonIndexPropertyNamesEPS0_PNS_9ExecStateERNS_17PropertyNameArrayENS_15EnumerationModeE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN3JSC8JSObject27getOwnNonIndexPropertyNamesEPS0_PNS_9ExecStateERNS_17PropertyNameArrayENS_15EnumerationModeE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function viiii___ZN3JSC8JSObject19getOwnPropertyNamesEPS0_PNS_9ExecStateERNS_17PropertyNameArrayENS_15EnumerationModeE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN3JSC8JSObject19getOwnPropertyNamesEPS0_PNS_9ExecStateERNS_17PropertyNameArrayENS_15EnumerationModeE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function viiii___ZN3JSC8JSObject16getPropertyNamesEPS0_PNS_9ExecStateERNS_17PropertyNameArrayENS_15EnumerationModeE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN3JSC8JSObject16getPropertyNamesEPS0_PNS_9ExecStateERNS_17PropertyNameArrayENS_15EnumerationModeE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function __ZN7WebCore35JSCanvasRenderingContext2DPrototype4selfERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[(__ZN7WebCore15getDOMStructureINS_26JSCanvasRenderingContext2DEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) | 0) + 8 >> 2] | 0;
 return i3 | 0;
}
function iiiii___ZN3JSC8JSObject25getOwnPropertySlotByIndexEPS0_PNS_9ExecStateEjRNS_12PropertySlotE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZN3JSC8JSObject25getOwnPropertySlotByIndexEPS0_PNS_9ExecStateEjRNS_12PropertySlotE(i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}
function viiiii___ZN3JSC8JSObject10putByIndexEPNS_6JSCellEPNS_9ExecStateEjNS_7JSValueEb__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZN3JSC8JSObject10putByIndexEPNS_6JSCellEPNS_9ExecStateEjNS_7JSValueEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function viiii___ZN3JSC8JSObject12defaultValueEPKS0_PNS_9ExecStateENS_22PreferredPrimitiveTypeE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN3JSC8JSObject12defaultValueEPKS0_PNS_9ExecStateENS_22PreferredPrimitiveTypeE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function iiii___ZN3JSC8JSObject14deletePropertyEPNS_6JSCellEPNS_9ExecStateENS_12PropertyNameE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return __ZN3JSC8JSObject14deletePropertyEPNS_6JSCellEPNS_9ExecStateENS_12PropertyNameE(i1 | 0, i2 | 0, i3 | 0) | 0;
}
function iiii___ZN3JSC6JSCell17customHasInstanceEPNS_8JSObjectEPNS_9ExecStateENS_7JSValueE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return __ZN3JSC6JSCell17customHasInstanceEPNS_8JSObjectEPNS_9ExecStateENS_7JSValueE(i1 | 0, i2 | 0, i3 | 0) | 0;
}
function viii___ZN3JSC8JSObject16copyBackingStoreEPNS_6JSCellERNS_11CopyVisitorENS_9CopyTokenE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN3JSC8JSObject16copyBackingStoreEPNS_6JSCellERNS_11CopyVisitorENS_9CopyTokenE(i1 | 0, i2 | 0, i3 | 0);
}
function viiii___ZN3JSC8JSObject6toThisEPNS_6JSCellEPNS_9ExecStateENS_8ECMAModeE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN3JSC8JSObject6toThisEPNS_6JSCellEPNS_9ExecStateENS_8ECMAModeE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function __ZN7WebCore37JSCanvasRenderingContext2DConstructorC2EPN3JSC9StructureEPNS_17JSDOMGlobalObjectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i1 >> 2] = i2;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = HEAP32[i2 + 32 >> 2];
 return;
}
function __ZN7WebCore37JSCanvasRenderingContext2DConstructorC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i1 >> 2] = i2;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = HEAP32[i2 + 32 >> 2];
 return;
}
function iiii___ZN3JSC8JSObject21deletePropertyByIndexEPNS_6JSCellEPNS_9ExecStateEj__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return __ZN3JSC8JSObject21deletePropertyByIndexEPNS_6JSCellEPNS_9ExecStateEj(i1 | 0, i2 | 0, i3 | 0) | 0;
}
function vii___ZN7WebCore24JSCanvasRenderingContext13visitChildrenEPN3JSC6JSCellERNS1_11SlotVisitorE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore24JSCanvasRenderingContext13visitChildrenEPN3JSC6JSCellERNS1_11SlotVisitorE(i1 | 0, i2 | 0);
}
function dynCall_iiiiiii(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 return FUNCTION_TABLE_iiiiiii[i1 & 63](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0) | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function dynCall_iiiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 return FUNCTION_TABLE_iiiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0) | 0;
}
function iii___ZN3JSC6JSCell16getConstructDataEPS0_RNS_13ConstructDataE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN3JSC6JSCell16getConstructDataEPS0_RNS_13ConstructDataE(i1 | 0, i2 | 0) | 0;
}
function dynCall_viiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 FUNCTION_TABLE_viiiii[i1 & 63](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
}
function vii___ZN3JSC8JSObject13visitChildrenEPNS_6JSCellERNS_11SlotVisitorE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN3JSC8JSObject13visitChildrenEPNS_6JSCellERNS_11SlotVisitorE(i1 | 0, i2 | 0);
}
function __ZN7WebCore26JSCanvasRenderingContext2D14finishCreationERN3JSC2VME(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore24JSCanvasRenderingContext14finishCreationERN3JSC2VME(i1 | 0, i2);
 return;
}
function vii___ZN3JSC6JSCell17getTypedArrayImplEPNS_17JSArrayBufferViewE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN3JSC6JSCell17getTypedArrayImplEPNS_17JSArrayBufferViewE(i1 | 0, i2 | 0);
}
function ii___ZN3JSC6JSCell22slowDownAndWasteMemoryEPNS_17JSArrayBufferViewE__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN3JSC6JSCell22slowDownAndWasteMemoryEPNS_17JSArrayBufferViewE(i1 | 0) | 0;
}
function dynCall_iiiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return FUNCTION_TABLE_iiiii[i1 & 15](i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
}
function iii___ZN3JSC6JSCell11getCallDataEPS0_RNS_8CallDataE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN3JSC6JSCell11getCallDataEPS0_RNS_8CallDataE(i1 | 0, i2 | 0) | 0;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 15](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function vi___ZN7WebCore24JSCanvasRenderingContext7destroyEPN3JSC6JSCellE__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore24JSCanvasRenderingContext7destroyEPN3JSC6JSCellE(i1 | 0);
}
function dynCall_iiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0) | 0;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 7](i2 | 0, i3 | 0, i4 | 0);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function vii___ZN3JSC8JSObject9classNameEPKS0___wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN3JSC8JSObject9classNameEPKS0_(i1 | 0, i2 | 0);
}
function b3(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(3);
 return 0;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 7](i2 | 0, i3 | 0) | 0;
}
function b10(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(10);
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
 FUNCTION_TABLE_vii[i1 & 15](i2 | 0, i3 | 0);
}
function b0(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(0);
}
function vi___ZN3JSC6JSCell7destroyEPS0___wrapper(i1) {
 i1 = i1 | 0;
 __ZN3JSC6JSCell7destroyEPS0_(i1 | 0);
}
function b8(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(8);
 return 0;
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
 FUNCTION_TABLE_vi[i1 & 7](i2 | 0);
}
function b5(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(5);
 return 0;
}
function b6(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(6);
}
function b9(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(9);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
}
function b2(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(2);
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
function b4(i1) {
 i1 = i1 | 0;
 abort(4);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b1(i1) {
 i1 = i1 | 0;
 abort(1);
}
function b7() {
 abort(7);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_viiiii = [b0,b0,__ZN7WebCore39setJSCanvasRenderingContext2DMiterLimitEPN3JSC9ExecStateExx,b0,__ZN7WebCore38setJSCanvasRenderingContext2DTextAlignEPN3JSC9ExecStateExx,b0,__ZN7WebCore49setJSCanvasRenderingContext2DWebkitLineDashOffsetEPN3JSC9ExecStateExx,b0,__ZN7WebCore39setJSCanvasRenderingContext2DShadowBlurEPN3JSC9ExecStateExx,b0,__ZN7WebCore40setJSCanvasRenderingContext2DGlobalAlphaEPN3JSC9ExecStateExx,b0,__ZN7WebCore56setJSCanvasRenderingContext2DWebkitImageSmoothingEnabledEPN3JSC9ExecStateExx,b0,__ZN7WebCore33setJSCanvasRenderingContext2DFontEPN3JSC9ExecStateExx,b0,__ZN7WebCore40setJSCanvasRenderingContext2DCurrentPathEPN3JSC9ExecStateExx,b0,__ZN7WebCore26JSCanvasRenderingContext2D3putEPN3JSC6JSCellEPNS1_9ExecStateENS1_12PropertyNameENS1_7JSValueERNS1_15PutPropertySlotE,b0,viiiii___ZN3JSC8JSObject3putEPNS_6JSCellEPNS_9ExecStateENS_12PropertyNameENS_7JSValueERNS_15PutPropertySlotE__wrapper,b0,__ZN7WebCore42setJSCanvasRenderingContext2DShadowOffsetXEPN3JSC9ExecStateExx,b0,__ZN7WebCore41setJSCanvasRenderingContext2DTextBaselineEPN3JSC9ExecStateExx,b0,__ZN7WebCore38setJSCanvasRenderingContext2DFillStyleEPN3JSC9ExecStateExx,b0,__ZN7WebCore53setJSCanvasRenderingContext2DGlobalCompositeOperationEPN3JSC9ExecStateExx
  ,b0,viiiii___ZN3JSC8JSObject10putByIndexEPNS_6JSCellEPNS_9ExecStateEjNS_7JSValueEb__wrapper,b0,__ZN7WebCore42setJSCanvasRenderingContext2DShadowOffsetYEPN3JSC9ExecStateExx,b0,__ZN7WebCore43setJSCanvasRenderingContext2DWebkitLineDashEPN3JSC9ExecStateExx,b0,__ZN7WebCore36setJSCanvasRenderingContext2DLineCapEPN3JSC9ExecStateExx,b0,__ZN7WebCore40setJSCanvasRenderingContext2DStrokeStyleEPN3JSC9ExecStateExx,b0,__ZN7WebCore37setJSCanvasRenderingContext2DLineJoinEPN3JSC9ExecStateExx,b0,__ZN7WebCore40setJSCanvasRenderingContext2DShadowColorEPN3JSC9ExecStateExx,b0,__ZN7WebCore38setJSCanvasRenderingContext2DLineWidthEPN3JSC9ExecStateExx,b0,__ZN7WebCore43setJSCanvasRenderingContext2DLineDashOffsetEPN3JSC9ExecStateExx,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
  ,b0,b0,b0,b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1,vi___ZN3JSC6JSCell7destroyEPS0___wrapper,b1,vi___ZN7WebCore24JSCanvasRenderingContext7destroyEPN3JSC6JSCellE__wrapper,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,vii___ZN3JSC6JSCell17getTypedArrayImplEPNS_17JSArrayBufferViewE__wrapper,b2,vii___ZN3JSC8JSObject9classNameEPKS0___wrapper,b2,vii___ZN7WebCore24JSCanvasRenderingContext13visitChildrenEPN3JSC6JSCellERNS1_11SlotVisitorE__wrapper,b2,vii___ZN3JSC8JSObject13visitChildrenEPNS_6JSCellERNS_11SlotVisitorE__wrapper,b2,b2,b2,b2,b2,b2,b2];
  var FUNCTION_TABLE_iiiiiii = [b3,b3,__ZN7WebCore39jsCanvasRenderingContext2DShadowOffsetXEPN3JSC9ExecStateExxNS0_12PropertyNameE,b3,__ZN7WebCore37jsCanvasRenderingContext2DConstructorEPN3JSC9ExecStateExxNS0_12PropertyNameE,b3,__ZN7WebCore37jsCanvasRenderingContext2DCurrentPathEPN3JSC9ExecStateExxNS0_12PropertyNameE,b3,__ZN7WebCore37jsCanvasRenderingContext2DStrokeStyleEPN3JSC9ExecStateExxNS0_12PropertyNameE,b3,__ZN7WebCore37jsCanvasRenderingContext2DShadowColorEPN3JSC9ExecStateExxNS0_12PropertyNameE,b3,__ZN7WebCore36jsCanvasRenderingContext2DShadowBlurEPN3JSC9ExecStateExxNS0_12PropertyNameE,b3,__ZN7WebCore53jsCanvasRenderingContext2DWebkitImageSmoothingEnabledEPN3JSC9ExecStateExxNS0_12PropertyNameE,b3,__ZN7WebCore35jsCanvasRenderingContext2DFillStyleEPN3JSC9ExecStateExxNS0_12PropertyNameE,b3,__ZN7WebCore37jsCanvasRenderingContext2DGlobalAlphaEPN3JSC9ExecStateExxNS0_12PropertyNameE,b3,__ZN7WebCore35jsCanvasRenderingContext2DLineWidthEPN3JSC9ExecStateExxNS0_12PropertyNameE,b3,__ZN7WebCore40jsCanvasRenderingContext2DWebkitLineDashEPN3JSC9ExecStateExxNS0_12PropertyNameE,b3,__ZN7WebCore36jsCanvasRenderingContext2DMiterLimitEPN3JSC9ExecStateExxNS0_12PropertyNameE,b3,__ZN7WebCore50jsCanvasRenderingContext2DGlobalCompositeOperationEPN3JSC9ExecStateExxNS0_12PropertyNameE,b3,__ZN7WebCore39jsCanvasRenderingContext2DShadowOffsetYEPN3JSC9ExecStateExxNS0_12PropertyNameE
  ,b3,__ZN7WebCore54jsCanvasRenderingContext2DWebkitBackingStorePixelRatioEPN3JSC9ExecStateExxNS0_12PropertyNameE,b3,__ZN7WebCore30jsCanvasRenderingContext2DFontEPN3JSC9ExecStateExxNS0_12PropertyNameE,b3,__ZN7WebCore38jsCanvasRenderingContext2DTextBaselineEPN3JSC9ExecStateExxNS0_12PropertyNameE,b3,__ZN7WebCore35jsCanvasRenderingContext2DTextAlignEPN3JSC9ExecStateExxNS0_12PropertyNameE,b3,__ZN7WebCore46jsCanvasRenderingContext2DWebkitLineDashOffsetEPN3JSC9ExecStateExxNS0_12PropertyNameE,b3,__ZN7WebCore40jsCanvasRenderingContext2DLineDashOffsetEPN3JSC9ExecStateExxNS0_12PropertyNameE,b3,__ZN7WebCore34jsCanvasRenderingContext2DLineJoinEPN3JSC9ExecStateExxNS0_12PropertyNameE,b3,__ZN7WebCore33jsCanvasRenderingContext2DLineCapEPN3JSC9ExecStateExxNS0_12PropertyNameE,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3,b3,b3];
  var FUNCTION_TABLE_ii = [b4,b4,__ZN7WebCore60jsCanvasRenderingContext2DPrototypeFunctionDrawImageFromRectEPN3JSC9ExecStateE,b4,__ZN7WebCore52jsCanvasRenderingContext2DPrototypeFunctionSetShadowEPN3JSC9ExecStateE,b4,__ZN7WebCore59jsCanvasRenderingContext2DPrototypeFunctionQuadraticCurveToEPN3JSC9ExecStateE,b4,__ZN7WebCore51jsCanvasRenderingContext2DPrototypeFunctionFillRectEPN3JSC9ExecStateE,b4,__ZN7WebCore49jsCanvasRenderingContext2DPrototypeFunctionMoveToEPN3JSC9ExecStateE,b4,__ZN7WebCore52jsCanvasRenderingContext2DPrototypeFunctionClearRectEPN3JSC9ExecStateE,b4,__ZN7WebCore47jsCanvasRenderingContext2DPrototypeFunctionSaveEPN3JSC9ExecStateE,b4,__ZN7WebCore46jsCanvasRenderingContext2DPrototypeFunctionArcEPN3JSC9ExecStateE,b4,__ZN7WebCore48jsCanvasRenderingContext2DPrototypeFunctionScaleEPN3JSC9ExecStateE,b4,__ZN7WebCore52jsCanvasRenderingContext2DPrototypeFunctionDrawImageEPN3JSC9ExecStateE,b4,__ZN7WebCore49jsCanvasRenderingContext2DPrototypeFunctionLineToEPN3JSC9ExecStateE,b4,__ZN7WebCore53jsCanvasRenderingContext2DPrototypeFunctionStrokeTextEPN3JSC9ExecStateE,b4,__ZN7WebCore55jsCanvasRenderingContext2DPrototypeFunctionSetFillColorEPN3JSC9ExecStateE,b4,__ZN7WebCore63jsCanvasRenderingContext2DPrototypeFunctionCreateLinearGradientEPN3JSC9ExecStateE
  ,b4,__ZN7WebCore55jsCanvasRenderingContext2DPrototypeFunctionSetTransformEPN3JSC9ExecStateE,b4,__ZN7WebCore54jsCanvasRenderingContext2DPrototypeFunctionSetLineJoinEPN3JSC9ExecStateE,b4,__ZN7WebCore53jsCanvasRenderingContext2DPrototypeFunctionSetLineCapEPN3JSC9ExecStateE,b4,__ZN7WebCore47jsCanvasRenderingContext2DPrototypeFunctionRectEPN3JSC9ExecStateE,b4,__ZN7WebCore63jsCanvasRenderingContext2DPrototypeFunctionWebkitGetImageDataHDEPN3JSC9ExecStateE,b4,__ZN7WebCore56jsCanvasRenderingContext2DPrototypeFunctionSetMiterLimitEPN3JSC9ExecStateE,b4,__ZN7WebCore55jsCanvasRenderingContext2DPrototypeFunctionGetImageDataEPN3JSC9ExecStateE,b4,__ZN7WebCore53jsCanvasRenderingContext2DPrototypeFunctionStrokeRectEPN3JSC9ExecStateE,b4,ii___ZN3JSC6JSCell22slowDownAndWasteMemoryEPNS_17JSArrayBufferViewE__wrapper,b4,__ZN7WebCore55jsCanvasRenderingContext2DPrototypeFunctionPutImageDataEPN3JSC9ExecStateE,b4,__ZN7WebCore50jsCanvasRenderingContext2DPrototypeFunctionRestoreEPN3JSC9ExecStateE,b4,__ZN7WebCore52jsCanvasRenderingContext2DPrototypeFunctionClosePathEPN3JSC9ExecStateE,b4,__ZN7WebCore58jsCanvasRenderingContext2DPrototypeFunctionIsPointInStrokeEPN3JSC9ExecStateE,b4,__ZN7WebCore49jsCanvasRenderingContext2DPrototypeFunctionStrokeEPN3JSC9ExecStateE,b4,__ZN7WebCore58jsCanvasRenderingContext2DPrototypeFunctionCreateImageDataEPN3JSC9ExecStateE
  ,b4,__ZN7WebCore52jsCanvasRenderingContext2DPrototypeFunctionTransformEPN3JSC9ExecStateE,b4,__ZN7WebCore54jsCanvasRenderingContext2DPrototypeFunctionMeasureTextEPN3JSC9ExecStateE,b4,__ZN7WebCore54jsCanvasRenderingContext2DPrototypeFunctionGetLineDashEPN3JSC9ExecStateE,b4,__ZN7WebCore47jsCanvasRenderingContext2DPrototypeFunctionFillEPN3JSC9ExecStateE,b4,__ZN7WebCore52jsCanvasRenderingContext2DPrototypeFunctionTranslateEPN3JSC9ExecStateE,b4,__ZN7WebCore54jsCanvasRenderingContext2DPrototypeFunctionSetLineDashEPN3JSC9ExecStateE,b4,__ZN7WebCore56jsCanvasRenderingContext2DPrototypeFunctionCreatePatternEPN3JSC9ExecStateE,b4,__ZN7WebCore51jsCanvasRenderingContext2DPrototypeFunctionFillTextEPN3JSC9ExecStateE,b4,__ZN7WebCore64jsCanvasRenderingContext2DPrototypeFunctionSetCompositeOperationEPN3JSC9ExecStateE,b4,__ZN7WebCore56jsCanvasRenderingContext2DPrototypeFunctionBezierCurveToEPN3JSC9ExecStateE,b4,__ZN7WebCore47jsCanvasRenderingContext2DPrototypeFunctionClipEPN3JSC9ExecStateE,b4,__ZN7WebCore57jsCanvasRenderingContext2DPrototypeFunctionSetStrokeColorEPN3JSC9ExecStateE,b4,__ZN7WebCore55jsCanvasRenderingContext2DPrototypeFunctionSetLineWidthEPN3JSC9ExecStateE,b4,__ZN7WebCore54jsCanvasRenderingContext2DPrototypeFunctionClearShadowEPN3JSC9ExecStateE,b4,__ZN7WebCore52jsCanvasRenderingContext2DPrototypeFunctionBeginPathEPN3JSC9ExecStateE
  ,b4,__ZN7WebCore63jsCanvasRenderingContext2DPrototypeFunctionWebkitPutImageDataHDEPN3JSC9ExecStateE,b4,__ZN7WebCore49jsCanvasRenderingContext2DPrototypeFunctionRotateEPN3JSC9ExecStateE,b4,__ZN7WebCore63jsCanvasRenderingContext2DPrototypeFunctionCreateRadialGradientEPN3JSC9ExecStateE,b4,__ZN7WebCore56jsCanvasRenderingContext2DPrototypeFunctionIsPointInPathEPN3JSC9ExecStateE,b4,__ZN7WebCore51jsCanvasRenderingContext2DPrototypeFunctionSetAlphaEPN3JSC9ExecStateE,b4,__ZN7WebCore48jsCanvasRenderingContext2DPrototypeFunctionArcToEPN3JSC9ExecStateE,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4
  ,b4,b4,b4,b4,b4,b4,b4,b4,b4];
  var FUNCTION_TABLE_iiii = [b5,b5,iiii___ZN3JSC6JSCell17customHasInstanceEPNS_8JSObjectEPNS_9ExecStateENS_7JSValueE__wrapper,b5,iiii___ZN3JSC8JSObject21deletePropertyByIndexEPNS_6JSCellEPNS_9ExecStateEj__wrapper,b5,iiii___ZN3JSC8JSObject14deletePropertyEPNS_6JSCellEPNS_9ExecStateENS_12PropertyNameE__wrapper,b5];
  var FUNCTION_TABLE_viii = [b6,b6,__ZN7WebCore37JSCanvasRenderingContext2DConstructorC2EPN3JSC9StructureEPNS_17JSDOMGlobalObjectE,b6,viii___ZN3JSC8JSObject16copyBackingStoreEPNS_6JSCellERNS_11CopyVisitorENS_9CopyTokenE__wrapper,b6,b6,b6];
  var FUNCTION_TABLE_v = [b7,b7];
  var FUNCTION_TABLE_iiiii = [b8,b8,__ZN7WebCore35JSCanvasRenderingContext2DPrototype18getOwnPropertySlotEPN3JSC8JSObjectEPNS1_9ExecStateENS1_12PropertyNameERNS1_12PropertySlotE,b8,__ZN7WebCore37JSCanvasRenderingContext2DConstructor18getOwnPropertySlotEPN3JSC8JSObjectEPNS1_9ExecStateENS1_12PropertyNameERNS1_12PropertySlotE,b8,__ZN7WebCore26JSCanvasRenderingContext2D18getOwnPropertySlotEPN3JSC8JSObjectEPNS1_9ExecStateENS1_12PropertyNameERNS1_12PropertySlotE,b8,iiiii___ZN3JSC8JSObject25getOwnPropertySlotByIndexEPS0_PNS_9ExecStateEjRNS_12PropertySlotE__wrapper,b8,b8,b8,b8,b8,b8,b8];
  var FUNCTION_TABLE_iii = [b9,b9,iii___ZN3JSC6JSCell11getCallDataEPS0_RNS_8CallDataE__wrapper,b9,iii___ZN3JSC6JSCell16getConstructDataEPS0_RNS_13ConstructDataE__wrapper,b9,b9,b9];
  var FUNCTION_TABLE_iiiiii = [b10,b10,iiiiii___ZN3JSC8JSObject17defineOwnPropertyEPS0_PNS_9ExecStateENS_12PropertyNameERKNS_18PropertyDescriptorEb__wrapper,b10];
  var FUNCTION_TABLE_viiii = [b11,b11,viiii___ZN3JSC8JSObject12defaultValueEPKS0_PNS_9ExecStateENS_22PreferredPrimitiveTypeE__wrapper,b11,viiii___ZN3JSC8JSObject6toThisEPNS_6JSCellEPNS_9ExecStateENS_8ECMAModeE__wrapper,b11,__ZN7WebCore26JSCanvasRenderingContext2DC2EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_24CanvasRenderingContext2DEEE,b11,viiii___ZN3JSC8JSObject16getPropertyNamesEPS0_PNS_9ExecStateERNS_17PropertyNameArrayENS_15EnumerationModeE__wrapper,b11,viiii___ZN3JSC8JSObject19getOwnPropertyNamesEPS0_PNS_9ExecStateERNS_17PropertyNameArrayENS_15EnumerationModeE__wrapper,b11,viiii___ZN3JSC8JSObject27getOwnNonIndexPropertyNamesEPS0_PNS_9ExecStateERNS_17PropertyNameArrayENS_15EnumerationModeE__wrapper,b11,b11,b11];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_iiiiiii: dynCall_iiiiiii, dynCall_ii: dynCall_ii, dynCall_iiii: dynCall_iiii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iiiii: dynCall_iiiii, dynCall_iii: dynCall_iii, dynCall_iiiiii: dynCall_iiiiii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_iiiiiii": invoke_iiiiiii, "invoke_ii": invoke_ii, "invoke_iiii": invoke_iiii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iiiii": invoke_iiiii, "invoke_iii": invoke_iii, "invoke_iiiiii": invoke_iiiiii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore18JSHTMLImageElement6s_infoE": __ZN7WebCore18JSHTMLImageElement6s_infoE, "__ZN3JSC36StrictModeReadonlyPropertyWriteErrorE": __ZN3JSC36StrictModeReadonlyPropertyWriteErrorE, "__ZN7WebCore19JSHTMLCanvasElement6s_infoE": __ZN7WebCore19JSHTMLCanvasElement6s_infoE, "__ZN7WebCore11JSImageData6s_infoE": __ZN7WebCore11JSImageData6s_infoE, "__ZN3JSC7JSArray6s_infoE": __ZN3JSC7JSArray6s_infoE, "__ZN7WebCore24JSCanvasRenderingContext6s_infoE": __ZN7WebCore24JSCanvasRenderingContext6s_infoE, "__ZN3JSC8JSObject6s_infoE": __ZN3JSC8JSObject6s_infoE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_iiiiiii = Module["dynCall_iiiiiii"] = asm["dynCall_iiiiiii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iiiii = Module["dynCall_iiiii"] = asm["dynCall_iiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZNK3JSC8JSObject3getEPNS_9ExecStateENS_12PropertyNameE","__ZN3JSC9Structure27putWillGrowOutOfLineStorageEv","__ZN7WebCore60jsCanvasRenderingContext2DPrototypeFunctionDrawImageFromRectEPN3JSC9ExecStateE","__ZN7WebCore39jsCanvasRenderingContext2DShadowOffsetXEPN3JSC9ExecStateExxNS0_12PropertyNameE","__ZN7WebCore39setJSCanvasRenderingContext2DMiterLimitEPN3JSC9ExecStateExx","__ZN7WebCore52jsCanvasRenderingContext2DPrototypeFunctionSetShadowEPN3JSC9ExecStateE","__ZN7WebCore7jsArrayIfLj0EEEN3JSC7JSValueEPNS1_9ExecStateEPNS_17JSDOMGlobalObjectERKN3WTF6VectorIT_XT0_ENS7_15CrashOnOverflowEEE","__ZN7WebCore35JSCanvasRenderingContext2DPrototype18getOwnPropertySlotEPN3JSC8JSObjectEPNS1_9ExecStateENS1_12PropertyNameERNS1_12PropertySlotE","__ZN7WebCore59jsCanvasRenderingContext2DPrototypeFunctionQuadraticCurveToEPN3JSC9ExecStateE","__ZNK3JSC8JSObject3getEPNS_9ExecStateEj","__ZN7WebCore38setJSCanvasRenderingContext2DTextAlignEPN3JSC9ExecStateExx","__ZN7WebCore51jsCanvasRenderingContext2DPrototypeFunctionFillRectEPN3JSC9ExecStateE","__ZN7WebCore37JSCanvasRenderingContext2DConstructor18getOwnPropertySlotEPN3JSC8JSObjectEPNS1_9ExecStateENS1_12PropertyNameERNS1_12PropertySlotE","__ZN3JSC21getStaticFunctionSlotINS_8JSObjectEEEbPNS_9ExecStateERKNS_9HashTableEPS1_NS_12PropertyNameERNS_12PropertySlotE","__ZN7WebCore49jsCanvasRenderingContext2DPrototypeFunctionMoveToEPN3JSC9ExecStateE","__ZN7WebCore49setJSCanvasRenderingContext2DWebkitLineDashOffsetEPN3JSC9ExecStateExx","__ZN7WebCore53setJSCanvasRenderingContext2DGlobalCompositeOperationEPN3JSC9ExecStateExx","__ZN7WebCore56jsCanvasRenderingContext2DPrototypeFunctionSetMiterLimitEPN3JSC9ExecStateE","__ZN7WebCore37JSCanvasRenderingContext2DConstructorC2EPN3JSC9StructureEPNS_17JSDOMGlobalObjectE","__ZN7WebCore52jsCanvasRenderingContext2DPrototypeFunctionClearRectEPN3JSC9ExecStateE","__ZN7WebCore40setJSCanvasRenderingContext2DGlobalAlphaEPN3JSC9ExecStateExx","__ZN3JSC7JSArray22tryCreateUninitializedERNS_2VMEPNS_9StructureEj","__ZN7WebCore47jsCanvasRenderingContext2DPrototypeFunctionSaveEPN3JSC9ExecStateE","__ZN3JSC8putEntryEPNS_9ExecStateEPKNS_9HashEntryENS_12PropertyNameENS_7JSValueERNS_15PutPropertySlotE","__ZN7WebCore57jsCanvasRenderingContext2DPrototypeFunctionSetStrokeColorEPN3JSC9ExecStateE","__ZN3WTF9HashTableIPNS_10StringImplENS_12KeyValuePairIS2_N3JSC4WeakINS4_8JSStringEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS2_EENS_7HashMapIS2_S7_SC_NS_10HashTraitsIS2_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_","__ZN7WebCore48jsCanvasRenderingContext2DPrototypeFunctionScaleEPN3JSC9ExecStateE","__ZN7WebCore52jsCanvasRenderingContext2DPrototypeFunctionDrawImageEPN3JSC9ExecStateE","__ZN7WebCore55jsCanvasRenderingContext2DPrototypeFunctionSetLineWidthEPN3JSC9ExecStateE","__ZN7WebCore53jsCanvasRenderingContext2DPrototypeFunctionStrokeTextEPN3JSC9ExecStateE","__ZN7WebCore26JSCanvasRenderingContext2D18getOwnPropertySlotEPN3JSC8JSObjectEPNS1_9ExecStateENS1_12PropertyNameERNS1_12PropertySlotE","__ZN7WebCore63jsCanvasRenderingContext2DPrototypeFunctionCreateLinearGradientEPN3JSC9ExecStateE","__ZN7WebCore30jsCanvasRenderingContext2DFontEPN3JSC9ExecStateExxNS0_12PropertyNameE","__ZN7WebCore33setJSCanvasRenderingContext2DFontEPN3JSC9ExecStateExx","__ZN7WebCore55jsCanvasRenderingContext2DPrototypeFunctionSetFillColorEPN3JSC9ExecStateE","__ZN7WebCore37jsCanvasRenderingContext2DConstructorEPN3JSC9ExecStateExxNS0_12PropertyNameE","__ZN7WebCore35jsCanvasRenderingContext2DFillStyleEPN3JSC9ExecStateExxNS0_12PropertyNameE","__ZN7WebCore17getDOMConstructorINS_37JSCanvasRenderingContext2DConstructorEEEPN3JSC8JSObjectERNS2_2VMEPKNS_17JSDOMGlobalObjectE","__ZN7WebCore55jsCanvasRenderingContext2DPrototypeFunctionSetTransformEPN3JSC9ExecStateE","__ZN7WebCore40setJSCanvasRenderingContext2DCurrentPathEPN3JSC9ExecStateExx","__ZN7WebCore26JSCanvasRenderingContext2D3putEPN3JSC6JSCellEPNS1_9ExecStateENS1_12PropertyNameENS1_7JSValueERNS1_15PutPropertySlotE","__ZN7WebCore37jsCanvasRenderingContext2DStrokeStyleEPN3JSC9ExecStateExxNS0_12PropertyNameE","__ZN7WebCore56setJSCanvasRenderingContext2DWebkitImageSmoothingEnabledEPN3JSC9ExecStateExx","__ZN3WTF9HashTableIPKN3JSC9ClassInfoENS_12KeyValuePairIS4_NS1_12WriteBarrierINS1_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7PtrHashIS4_EENS_7HashMapIS4_S8_SD_NS_10HashTraitsIS4_EENSF_IS8_EEE18KeyValuePairTraitsESG_E6rehashEiPS9_","__ZN7WebCore54jsCanvasRenderingContext2DPrototypeFunctionMeasureTextEPN3JSC9ExecStateE","__ZN7WebCore56jsCanvasRenderingContext2DPrototypeFunctionIsPointInPathEPN3JSC9ExecStateE","__ZN7WebCore26JSCanvasRenderingContext2DC2EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_24CanvasRenderingContext2DEEE","__ZN7WebCore37JSCanvasRenderingContext2DConstructor14finishCreationERN3JSC2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore37jsCanvasRenderingContext2DShadowColorEPN3JSC9ExecStateExxNS0_12PropertyNameE","__ZN7WebCore36jsCanvasRenderingContext2DShadowBlurEPN3JSC9ExecStateExxNS0_12PropertyNameE","__ZN7WebCore53jsCanvasRenderingContext2DWebkitImageSmoothingEnabledEPN3JSC9ExecStateExxNS0_12PropertyNameE","__ZN7WebCore47jsCanvasRenderingContext2DPrototypeFunctionRectEPN3JSC9ExecStateE","__ZN7WebCore63jsCanvasRenderingContext2DPrototypeFunctionWebkitGetImageDataHDEPN3JSC9ExecStateE","__ZN3WTF7HashSetIPN3JSC20MarkedArgumentBufferENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_","__ZN7WebCore40jsCanvasRenderingContext2DWebkitLineDashEPN3JSC9ExecStateExxNS0_12PropertyNameE","__ZN7WebCore37jsCanvasRenderingContext2DCurrentPathEPN3JSC9ExecStateExxNS0_12PropertyNameE","__ZN7WebCore42setJSCanvasRenderingContext2DShadowOffsetXEPN3JSC9ExecStateExx","__ZN7WebCore58jsCanvasRenderingContext2DPrototypeFunctionCreateImageDataEPN3JSC9ExecStateE","__ZN7WebCore17jsStringWithCacheEPN3JSC9ExecStateERKN3WTF6StringE","__ZN7WebCore37jsCanvasRenderingContext2DGlobalAlphaEPN3JSC9ExecStateExxNS0_12PropertyNameE","__ZN7WebCore35jsCanvasRenderingContext2DLineWidthEPN3JSC9ExecStateExxNS0_12PropertyNameE","__ZN7WebCore53jsCanvasRenderingContext2DPrototypeFunctionStrokeRectEPN3JSC9ExecStateE","__ZN7WebCore13toNativeArrayIfEEN3WTF6VectorIT_Lj0ENS1_15CrashOnOverflowEEEPN3JSC9ExecStateENS6_7JSValueE","__ZN7WebCore26JSCanvasRenderingContext2D14getConstructorERN3JSC2VMEPNS1_14JSGlobalObjectE","__ZN7WebCore53jsCanvasRenderingContext2DPrototypeFunctionSetLineCapEPN3JSC9ExecStateE","__ZN3JSC8JSObject15initializeIndexERNS_2VMEjNS_7JSValueE","__ZN7WebCore55jsCanvasRenderingContext2DPrototypeFunctionPutImageDataEPN3JSC9ExecStateE","__ZN7WebCore50jsCanvasRenderingContext2DPrototypeFunctionRestoreEPN3JSC9ExecStateE","__ZN7WebCore36jsCanvasRenderingContext2DMiterLimitEPN3JSC9ExecStateExxNS0_12PropertyNameE","__ZN7WebCore41setJSCanvasRenderingContext2DTextBaselineEPN3JSC9ExecStateExx","__ZN7WebCore38setJSCanvasRenderingContext2DFillStyleEPN3JSC9ExecStateExx","__ZN7WebCore52jsCanvasRenderingContext2DPrototypeFunctionClosePathEPN3JSC9ExecStateE","__ZN7WebCore15getDOMStructureINS_26JSCanvasRenderingContext2DEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore50jsCanvasRenderingContext2DGlobalCompositeOperationEPN3JSC9ExecStateExxNS0_12PropertyNameE","__ZN7WebCore58jsCanvasRenderingContext2DPrototypeFunctionIsPointInStrokeEPN3JSC9ExecStateE","_memset","__ZN3JSC18getStaticValueSlotIN7WebCore37JSCanvasRenderingContext2DConstructorENS1_12JSDOMWrapperEEEbPNS_9ExecStateERKNS_9HashTableEPT_NS_12PropertyNameERNS_12PropertySlotE","_memcpy","__ZN7WebCore39jsCanvasRenderingContext2DShadowOffsetYEPN3JSC9ExecStateExxNS0_12PropertyNameE","__ZN3WTF9HashTableIPNS_10StringImplENS_12KeyValuePairIS2_N3JSC4WeakINS4_8JSStringEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS2_EENS_7HashMapIS2_S7_SC_NS_10HashTraitsIS2_EENSE_IS7_EEE18KeyValuePairTraitsESF_E3addINS_17HashMapTranslatorISI_SC_EERKS2_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS2_S8_SA_SC_SI_SF_EEEEOT0_OT1_","__ZN7WebCore54jsCanvasRenderingContext2DWebkitBackingStorePixelRatioEPN3JSC9ExecStateExxNS0_12PropertyNameE","__ZN7WebCore49jsCanvasRenderingContext2DPrototypeFunctionStrokeEPN3JSC9ExecStateE","__ZN7WebCore55jsCanvasRenderingContext2DPrototypeFunctionGetImageDataEPN3JSC9ExecStateE","__ZN7WebCore12toJSSequenceEPN3JSC9ExecStateENS0_7JSValueERj","__ZN3JSC8JSString6createERNS_2VMEN3WTF10PassRefPtrINS3_10StringImplEEE","__ZN7WebCore52jsCanvasRenderingContext2DPrototypeFunctionTransformEPN3JSC9ExecStateE","__ZN7WebCore54jsCanvasRenderingContext2DPrototypeFunctionSetLineJoinEPN3JSC9ExecStateE","__ZN7WebCore38jsCanvasRenderingContext2DTextBaselineEPN3JSC9ExecStateExxNS0_12PropertyNameE","__ZN7WebCore39setJSCanvasRenderingContext2DShadowBlurEPN3JSC9ExecStateExx","__ZN7WebCore42setJSCanvasRenderingContext2DShadowOffsetYEPN3JSC9ExecStateExx","__ZN7WebCore35JSCanvasRenderingContext2DPrototype4selfERN3JSC2VMEPNS1_14JSGlobalObjectE","__ZN7WebCore54jsCanvasRenderingContext2DPrototypeFunctionGetLineDashEPN3JSC9ExecStateE","__ZN7WebCore35jsCanvasRenderingContext2DTextAlignEPN3JSC9ExecStateExxNS0_12PropertyNameE","__ZN7WebCore26JSCanvasRenderingContext2D15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE","__ZN3WTF9HashTableIPKN3JSC9ClassInfoENS_12KeyValuePairIS4_NS1_12WriteBarrierINS1_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7PtrHashIS4_EENS_7HashMapIS4_S8_SD_NS_10HashTraitsIS4_EENSF_IS8_EEE18KeyValuePairTraitsESG_E3addINS_17HashMapTranslatorISJ_SD_EES4_RS8_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S9_SB_SD_SJ_SG_EEEEOT0_OT1_","__ZN7WebCore47jsCanvasRenderingContext2DPrototypeFunctionFillEPN3JSC9ExecStateE","__ZN7WebCore43setJSCanvasRenderingContext2DWebkitLineDashEPN3JSC9ExecStateExx","__ZN7WebCore26JSCanvasRenderingContext2D14finishCreationERN3JSC2VME","__ZN7WebCore36setJSCanvasRenderingContext2DLineCapEPN3JSC9ExecStateExx","__ZN3JSC8JSObject17putDirectInternalILNS0_7PutModeE1EEEbRNS_2VMENS_12PropertyNameENS_7JSValueEjRNS_15PutPropertySlotEPNS_6JSCellE","__ZN7WebCore54jsCanvasRenderingContext2DPrototypeFunctionSetLineDashEPN3JSC9ExecStateE","__ZN7WebCore40setJSCanvasRenderingContext2DStrokeStyleEPN3JSC9ExecStateExx","__ZN7WebCore56jsCanvasRenderingContext2DPrototypeFunctionCreatePatternEPN3JSC9ExecStateE","__ZN7WebCore51jsCanvasRenderingContext2DPrototypeFunctionFillTextEPN3JSC9ExecStateE","__ZN7WebCore56jsCanvasRenderingContext2DPrototypeFunctionBezierCurveToEPN3JSC9ExecStateE","__ZN7WebCore37setJSCanvasRenderingContext2DLineJoinEPN3JSC9ExecStateExx","__ZN3JSC8JSObject43setStructureAndReallocateStorageIfNecessaryERNS_2VMEjPNS_9StructureE","__ZN7WebCore64jsCanvasRenderingContext2DPrototypeFunctionSetCompositeOperationEPN3JSC9ExecStateE","__ZN7WebCore43setJSCanvasRenderingContext2DLineDashOffsetEPN3JSC9ExecStateExx","__ZN7WebCore47jsCanvasRenderingContext2DPrototypeFunctionClipEPN3JSC9ExecStateE","__ZN7WebCore46jsCanvasRenderingContext2DPrototypeFunctionArcEPN3JSC9ExecStateE","__ZN7WebCore49jsCanvasRenderingContext2DPrototypeFunctionLineToEPN3JSC9ExecStateE","__ZN7WebCore46jsCanvasRenderingContext2DWebkitLineDashOffsetEPN3JSC9ExecStateExxNS0_12PropertyNameE","__ZN3WTF9HashTableIPN3JSC20MarkedArgumentBufferES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6removeEPS3_","__ZN7WebCore40jsCanvasRenderingContext2DLineDashOffsetEPN3JSC9ExecStateExxNS0_12PropertyNameE","__ZN7WebCore54jsCanvasRenderingContext2DPrototypeFunctionClearShadowEPN3JSC9ExecStateE","__ZN7WebCore40setJSCanvasRenderingContext2DShadowColorEPN3JSC9ExecStateExx","__ZN7WebCore34jsCanvasRenderingContext2DLineJoinEPN3JSC9ExecStateExxNS0_12PropertyNameE","__ZN7WebCore52jsCanvasRenderingContext2DPrototypeFunctionBeginPathEPN3JSC9ExecStateE","__ZN7WebCore63jsCanvasRenderingContext2DPrototypeFunctionWebkitPutImageDataHDEPN3JSC9ExecStateE","__ZN7WebCore49jsCanvasRenderingContext2DPrototypeFunctionRotateEPN3JSC9ExecStateE","__ZN7WebCore33jsCanvasRenderingContext2DLineCapEPN3JSC9ExecStateExxNS0_12PropertyNameE","__ZN7WebCore38setJSCanvasRenderingContext2DLineWidthEPN3JSC9ExecStateExx","__ZN7WebCore63jsCanvasRenderingContext2DPrototypeFunctionCreateRadialGradientEPN3JSC9ExecStateE","__ZN7WebCore52jsCanvasRenderingContext2DPrototypeFunctionTranslateEPN3JSC9ExecStateE","__ZN7WebCore51jsCanvasRenderingContext2DPrototypeFunctionSetAlphaEPN3JSC9ExecStateE","__ZN3JSC9WeakGCMapIPN3WTF10StringImplENS_8JSStringENS1_7PtrHashIS3_EENS1_10HashTraitsIS3_EEE5gcMapEv","__ZN7WebCore48jsCanvasRenderingContext2DPrototypeFunctionArcToEPN3JSC9ExecStateE"]

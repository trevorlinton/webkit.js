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
H_BASE = parentModule["_malloc"](2240 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 2240;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore8DocumentC1EPNS_5FrameERKNS_3URLEjj;
var __ZN7WebCore8DocumentD1Ev;
/* memory initializer */ allocate([105,109,97,103,101,47,115,118,103,43,120,109,108,0,0,0,97,112,112,108,105,99,97,116,105,111,110,47,120,104,116,109,108,43,120,109,108,0,0,0,88,77,76,0,0,0,0,0,99,111,109,112,108,101,116,101,0,0,0,0,0,0,0,0,105,110,116,101,114,97,99,116,105,118,101,0,0,0,0,0,68,79,77,65,80,73,46,80,101,114,68,111,99,117,109,101,110,116,77,117,116,97,116,105,111,110,69,118,101,110,116,85,115,97,103,101,46,68,79,77,67,104,97,114,97,99,116,101,114,68,97,116,97,77,111,100,105,102,105,101,100,0,0,0,68,79,77,65,80,73,46,80,101,114,68,111,99,117,109,101,110,116,77,117,116,97,116,105,111,110,69,118,101,110,116,85,115,97,103,101,46,68,79,77,78,111,100,101,73,110,115,101,114,116,101,100,73,110,116,111,68,111,99,117,109,101,110,116,0,0,0,0,0,0,0,0,68,79,77,65,80,73,46,80,101,114,68,111,99,117,109,101,110,116,77,117,116,97,116,105,111,110,69,118,101,110,116,85,115,97,103,101,46,68,79,77,78,111,100,101,82,101,109,111,118,101,100,70,114,111,109,68,111,99,117,109,101,110,116,0,68,79,77,65,80,73,46,80,101,114,68,111,99,117,109,101,110,116,77,117,116,97,116,105,111,110,69,118,101,110,116,85,115,97,103,101,46,68,79,77,78,111,100,101,82,101,109,111,118,101,100,0,0,0,0,0,68,79,77,65,80,73,46,80,101,114,68,111,99,117,109,101,110,116,77,117,116,97,116,105,111,110,69,118,101,110,116,85,115,97,103,101,46,68,79,77,78,111,100,101,73,110,115,101,114,116,101,100,0,0,0,0,68,79,77,65,80,73,46,80,101,114,68,111,99,117,109,101,110,116,77,117,116,97,116,105,111,110,69,118,101,110,116,85,115,97,103,101,46,68,79,77,83,117,98,116,114,101,101,77,111,100,105,102,105,101,100,0,108,111,97,100,105,110,103,0,39,46,32,0,0,0,0,0,39,32,102,114,111,109,32,102,114,97,109,101,32,119,105,116,104,32,85,82,76,32,39,0,85,110,115,97,102,101,32,74,97,118,97,83,99,114,105,112,116,32,97,116,116,101,109,112,116,32,116,111,32,105,110,105,116,105,97,116,101,32,110,97,118,105,103,97,116,105,111,110,32,102,111,114,32,102,114,97,109,101,32,119,105,116,104,32,85,82,76,32,39,0,0,0,111,110,0,0,0,0,0,0,104,116,116,112,0,0,0,0,37,48,50,100,47,37,48,50,100,47,37,48,52,100,32,37,48,50,100,58,37,48,50,100,58,37,48,50,100,0,0,0,76,97,115,116,45,77,111,100,105,102,105,101,100,0,0,0,111,114,105,103,105,110,0,0,97,108,119,97,121,115,0,0,110,101,118,101,114,0,0,0,114,101,100,0,0,0,0,0,120,45,119,101,98,107,105,116,45,99,115,112,45,114,101,112,111,114,116,45,111,110,108,121,0,0,0,0,0,0,0,0,120,45,119,101,98,107,105,116,45,99,115,112,0,0,0,0,99,111,110,116,101,110,116,45,115,101,99,117,114,105,116,121,45,112,111,108,105,99,121,45,114,101,112,111,114,116,45,111,110,108,121,0,0,0,0,0,99,111,110,116,101,110,116,45,115,101,99,117,114,105,116,121,45,112,111,108,105,99,121,0,39,46,0,0,0,0,0,0,39,32,105,110,32,97,32,102,114,97,109,101,32,98,101,99,97,117,115,101,32,105,116,32,115,101,116,32,39,88,45,70,114,97,109,101,45,79,112,116,105,111,110,115,39,32,116,111,32,39,0,0,0,0,0,0,82,101,102,117,115,101,100,32,116,111,32,100,105,115,112,108,97,121,32,39,0,0,0,0,120,45,102,114,97,109,101,45,111,112,116,105,111,110,115,0,120,45,100,110,115,45,112,114,101,102,101,116,99,104,45,99,111,110,116,114,111,108,0,0,99,111,110,116,101,110,116,45,108,97,110,103,117,97,103,101,0,0,0,0,0,0,0,0,67,83,83,49,67,111,109,112,97,116,0,0,0,0,0,0,115,101,116,45,99,111,111,107,105,101,0,0,0,0,0,0,114,101,102,114,101,115,104,0,100,101,102,97,117,108,116,45,115,116,121,108,101,0,0,0,84,104,101,32,102,114,97,109,101,32,97,116,116,101,109,112,116,105,110,103,32,110,97,118,105,103,97,116,105,111,110,32,105,115,32,110,101,105,116,104,101,114,32,115,97,109,101,45,111,114,105,103,105,110,32,119,105,116,104,32,116,104,101,32,116,97,114,103,101,116,44,32,110,111,114,32,105,115,32,105,116,32,116,104,101,32,116,97,114,103,101,116,39,115,32,112,97,114,101,110,116,32,111,114,32,111,112,101,110,101,114,46,0,0,0,0,0,0,0,0,84,104,101,32,102,114,97,109,101,32,97,116,116,101,109,112,116,105,110,103,32,110,97,118,105,103,97,116,105,111,110,32,111,102,32,116,104,101,32,116,111,112,45,108,101,118,101,108,32,119,105,110,100,111,119,32,105,115,32,115,97,110,100,98,111,120,101,100,44,32,98,117,116,32,116,104,101,32,39,97,108,108,111,119,45,116,111,112,45,110,97,118,105,103,97,116,105,111,110,39,32,102,108,97,103,32,105,115,32,110,111,116,32,115,101,116,46,0,0,0,84,104,101,32,102,114,97,109,101,32,97,116,116,101,109,112,116,105,110,103,32,110,97,118,105,103,97,116,105,111,110,32,105,115,32,115,97,110,100,98,111,120,101,100,44,32,97,110,100,32,105,115,32,116,104,101,114,101,102,111,114,101,32,100,105,115,97,108,108,111,119,101,100,32,102,114,111,109,32,110,97,118,105,103,97,116,105,110,103,32,105,116,115,32,97,110,99,101,115,116,111,114,115,46,0,0,0,0,0,0,0,0,10,0,0,0,0,0,0,0,35,100,111,99,117,109,101,110,116,0,0,0,0,0,0,0,116,101,120,116,47,104,116,109,108,0,0,0,0,0,0,0,116,101,120,116,47,120,109,108,0,0,0,0,0,0,0,0,66,97,99,107,67,111,109,112,97,116,0,0,0,0,0,0,49,46,48,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,212,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,168,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_viiiii(index,a1,a2,a3,a4,a5) {
  try {
    Module["dynCall_viiiii"](index,a1,a2,a3,a4,a5);
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
function invoke_di(index,a1) {
  try {
    return Module["dynCall_di"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_did(index,a1,a2) {
  try {
    return Module["dynCall_did"](index,a1,a2);
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
function invoke_viiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10) {
  try {
    Module["dynCall_viiiiiiiiii"](index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10);
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
  var cttz_i8=env.cttz_i8|0;
  var ctlz_i8=env.ctlz_i8|0;
  var __ZN7WebCore9HTMLNames6idAttrE=env.__ZN7WebCore9HTMLNames6idAttrE|0;
  var __ZN7WebCore9HTMLNames7linkTagE=env.__ZN7WebCore9HTMLNames7linkTagE|0;
  var __ZN3WTF8starAtomE=env.__ZN3WTF8starAtomE|0;
  var __ZN7WebCore10XMLNSNames17xmlnsNamespaceURIE=env.__ZN7WebCore10XMLNSNames17xmlnsNamespaceURIE|0;
  var __ZN7WebCore9HTMLNames9iframeTagE=env.__ZN7WebCore9HTMLNames9iframeTagE|0;
  var __ZN7WebCore9HTMLNames8titleTagE=env.__ZN7WebCore9HTMLNames8titleTagE|0;
  var __ZN7WebCore9HTMLNames19allowfullscreenAttrE=env.__ZN7WebCore9HTMLNames19allowfullscreenAttrE|0;
  var __ZN7WebCore9HTMLNames17xhtmlNamespaceURIE=env.__ZN7WebCore9HTMLNames17xhtmlNamespaceURIE|0;
  var __ZN7WebCore9HTMLNames25webkitallowfullscreenAttrE=env.__ZN7WebCore9HTMLNames25webkitallowfullscreenAttrE|0;
  var __ZN7WebCore9HTMLNames7headTagE=env.__ZN7WebCore9HTMLNames7headTagE|0;
  var __ZN7WebCore8SVGNames15svgNamespaceURIE=env.__ZN7WebCore8SVGNames15svgNamespaceURIE|0;
  var __ZN7WebCore17plugInsJavaScriptE=env.__ZN7WebCore17plugInsJavaScriptE|0;
  var __ZN3WTF9xmlnsAtomE=env.__ZN3WTF9xmlnsAtomE|0;
  var __ZN7WebCore24InspectorInstrumentation17s_frontendCounterE=env.__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE|0;
  var __ZN7WebCore9HTMLNames4aTagE=env.__ZN7WebCore9HTMLNames4aTagE|0;
  var __ZN7WebCore37WidgetHierarchyUpdatesSuspensionScope35s_widgetHierarchyUpdateSuspendCountE=env.__ZN7WebCore37WidgetHierarchyUpdatesSuspensionScope35s_widgetHierarchyUpdateSuspendCountE|0;
  var __ZN7WebCore8SVGNames6svgTagE=env.__ZN7WebCore8SVGNames6svgTagE|0;
  var __ZN7WebCore9HTMLNames11framesetTagE=env.__ZN7WebCore9HTMLNames11framesetTagE|0;
  var __ZN7WebCore9HTMLNames10targetAttrE=env.__ZN7WebCore9HTMLNames10targetAttrE|0;
  var __ZTVN7WebCore22ScriptExecutionContext21AddConsoleMessageTaskE=env.__ZTVN7WebCore22ScriptExecutionContext21AddConsoleMessageTaskE|0;
  var __ZN7WebCore9HTMLNames13accesskeyAttrE=env.__ZN7WebCore9HTMLNames13accesskeyAttrE|0;
  var __ZN7WebCore9HTMLNames7htmlTagE=env.__ZN7WebCore9HTMLNames7htmlTagE|0;
  var __ZN7WebCore17InspectorCounters10s_countersE=env.__ZN7WebCore17InspectorCounters10s_countersE|0;
  var __ZN7WebCore9HTMLNames12manifestAttrE=env.__ZN7WebCore9HTMLNames12manifestAttrE|0;
  var __ZN7WebCore9HTMLNames7bodyTagE=env.__ZN7WebCore9HTMLNames7bodyTagE|0;
  var __ZN3WTF8nullAtomE=env.__ZN3WTF8nullAtomE|0;
  var __ZN7WebCore9HTMLNames7baseTagE=env.__ZN7WebCore9HTMLNames7baseTagE|0;
  var __ZTVN7WebCore4NodeE=env.__ZTVN7WebCore4NodeE|0;
  var __ZN7WebCore9HTMLNames12seamlessAttrE=env.__ZN7WebCore9HTMLNames12seamlessAttrE|0;
  var __ZN3WTF10StringImpl19latin1CaseFoldTableE=env.__ZN3WTF10StringImpl19latin1CaseFoldTableE|0;
  var __ZN7WebCore8XMLNames15xmlNamespaceURIE=env.__ZN7WebCore8XMLNames15xmlNamespaceURIE|0;
  var __ZN7WebCore11MathMLNames18mathmlNamespaceURIE=env.__ZN7WebCore11MathMLNames18mathmlNamespaceURIE|0;
  var __ZN3WTF7xmlAtomE=env.__ZN3WTF7xmlAtomE|0;
  var __ZN7WebCore9HTMLNames8hrefAttrE=env.__ZN7WebCore9HTMLNames8hrefAttrE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZZN7WebCore9TreeScope18noDocumentInstanceEvE8instance=(H_BASE+2224)|0;
  var __ZTVN7WebCore8DocumentE=(H_BASE+1416)|0;
  var __ZTVN7WebCore15HashChangeEventE=(H_BASE+2064)|0;
  var __ZTVN7WebCore22DeferrableOneShotTimerINS_8DocumentEEE=(H_BASE+1992)|0;
  var __ZTVN7WebCore20WindowNameCollectionE=(H_BASE+2024)|0;
  var __ZN7WebCore8Document19s_globalTreeVersionE=(H_BASE+2232)|0;
  var __ZTVN7WebCore22DocumentNameCollectionE=(H_BASE+1952)|0;
  var __ZTVN3JSC20StringSourceProviderE=(H_BASE+2144)|0;
  var __ZGVZN7WebCore9TreeScope18noDocumentInstanceEvE8instance=(H_BASE+2240)|0;
  var __ZTVN7WebCore5TimerINS_8DocumentEEE=(H_BASE+1920)|0;
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
  var invoke_viiiiii=env.invoke_viiiiii;
  var invoke_di=env.invoke_di;
  var invoke_did=env.invoke_did;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_iiii=env.invoke_iiii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iiiii=env.invoke_iiiii;
  var invoke_viiiiiiiiii=env.invoke_viiiiiiiiii;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _llvm_uadd_with_overflow_i32=env._llvm_uadd_with_overflow_i32;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore8DocumentD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1424;
 i2 = i1 + 44 | 0;
 HEAP32[i2 >> 2] = H_BASE + 1788;
 HEAP32[i1 + 88 >> 2] = H_BASE + 1812;
 i3 = i1 + 2200 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i4 + 2204 >> 2] = 0;
 }
 i4 = i1 + 336 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) != 0) {
  __ZN7WebCore9DOMWindow32resetUnlessSuspendedForPageCacheEv(i5);
 }
 i5 = i1 + 1268 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 if ((i6 | 0) != 0) {
  __ZN7WebCore12ScriptRunnerD1Ev(i6);
  __ZN3WTF8fastFreeEPv(i6);
 }
 i6 = i1 + 768 | 0;
 __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(H_BASE + 400 | 0, HEAP16[i6 >> 1] & 1, 2);
 __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(H_BASE + 344 | 0, (HEAPU16[i6 >> 1] | 0) >>> 1 & 1, 2);
 __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(H_BASE + 288 | 0, (HEAPU16[i6 >> 1] | 0) >>> 2 & 1, 2);
 __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(H_BASE + 224 | 0, (HEAPU16[i6 >> 1] | 0) >>> 3 & 1, 2);
 __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(H_BASE + 152 | 0, (HEAPU16[i6 >> 1] | 0) >>> 4 & 1, 2);
 __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(H_BASE + 88 | 0, (HEAPU16[i6 >> 1] | 0) >>> 5 & 1, 2);
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 28 >> 2] & 127](i1);
 i6 = i1 + 344 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 56 >> 2] & 127](i7);
   i8 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = 0;
   if ((i8 | 0) == 0) {
    break;
   }
   i9 = i8 + 4 | 0;
   i8 = i9 | 0;
   i10 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) != 0) {
    HEAP32[i8 >> 2] = i10;
    break;
   }
   i10 = i9 - 4 | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 127](i10);
  }
 } while (0);
 i7 = HEAP32[i1 + 332 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i11 = 17;
 } else {
  i10 = i1;
  i9 = i7;
  while (1) {
   i7 = HEAP32[i9 + 448 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i12 = i10;
    break;
   }
   i8 = HEAP32[(HEAP32[i7 + 20 >> 2] | 0) + 8 >> 2] | 0;
   i7 = HEAP32[i8 + 332 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i12 = i8;
    break;
   } else {
    i10 = i8;
    i9 = i7;
   }
  }
  if ((i12 | 0) == (i1 | 0)) {
   i11 = 17;
  }
 }
 do {
  if ((i11 | 0) == 17) {
   i12 = i1 + 1120 | 0;
   i9 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN7WebCore13AXObjectCacheD2Ev(i9);
   __ZN3WTF8fastFreeEPv(i9);
  }
 } while (0);
 i11 = i1 + 1308 | 0;
 i9 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 do {
  if ((i9 | 0) != 0) {
   i12 = i9 | 0;
   i10 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) == 0) {
    __ZN7WebCore19TextResourceDecoderD1Ev(i9);
    __ZN3WTF8fastFreeEPv(i9);
    break;
   } else {
    HEAP32[i12 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i9 = i1 + 920 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 if ((i10 | 0) != 0) {
  __ZN7WebCore14StyleSheetList18detachFromDocumentEv(i10);
 }
 i10 = i1 + 656 | 0;
 i12 = HEAP32[i10 >> 2] | 0;
 if ((i12 | 0) != 0) {
  HEAP32[i12 + 24 >> 2] = 0;
 }
 i12 = i1 + 772 | 0;
 __ZN7WebCore28DocumentStyleSheetCollection18detachFromDocumentEv(i12);
 i7 = i1 + 320 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 if ((i8 | 0) != 0) {
  __ZN7WebCore13StyleResolverD1Ev(i8);
  __ZN3WTF8fastFreeEPv(i8);
 }
 i8 = i1 + 340 | 0;
 i13 = HEAP32[i8 >> 2] | 0;
 i14 = i13 + 44 | 0;
 if ((HEAP32[i14 >> 2] | 0) == (i1 | 0)) {
  HEAP32[i14 >> 2] = 0;
  i15 = HEAP32[i8 >> 2] | 0;
 } else {
  i15 = i13;
 }
 HEAP32[i8 >> 2] = 0;
 do {
  if ((i15 | 0) != 0) {
   i13 = i15 | 0;
   i14 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i14 | 0) == 0) {
    __ZN7WebCore20CachedResourceLoaderD1Ev(i15);
    __ZN3WTF8fastFreeEPv(i15);
    break;
   } else {
    HEAP32[i13 >> 2] = i14;
    break;
   }
  }
 } while (0);
 if ((HEAP32[i1 + 12 >> 2] & 2048 | 0) != 0) {
  __ZN7WebCore4Node13clearRareDataEv(i1 | 0);
 }
 __ZN7WebCore9TreeScope18clearDocumentScopeEv(i2);
 HEAP32[__ZN7WebCore17InspectorCounters10s_countersE >> 2] = (HEAP32[__ZN7WebCore17InspectorCounters10s_countersE >> 2] | 0) - 1;
 i15 = HEAP32[i1 + 2264 >> 2] | 0;
 if ((i15 | 0) != 0) {
  i14 = HEAP32[i1 + 2268 >> 2] | 0;
  if ((i14 | 0) > 0) {
   i13 = 0;
   while (1) {
    i16 = HEAP32[i15 + (i13 << 2) >> 2] | 0;
    i17 = i16;
    do {
     if (!((i17 | 0) == (-1 | 0) | (i17 | 0) == 0)) {
      i18 = i16 + 8 | 0;
      i19 = i18 | 0;
      i20 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
      HEAP32[i19 >> 2] = i20;
      if ((i20 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
     }
    } while (0);
    i13 = i13 + 1 | 0;
    if ((i13 | 0) >= (i14 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i15);
 }
 __ZN7WebCore9TimerBaseD2Ev(i1 + 2208 | 0);
 i15 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i3 = i15 + 8 | 0;
   i14 = i3 | 0;
   i13 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   HEAP32[i14 >> 2] = i13;
   if ((i13 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 i15 = HEAP32[i1 + 2180 >> 2] | 0;
 if ((i15 | 0) != 0) {
  i3 = HEAP32[i1 + 2184 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i13 = 0;
   while (1) {
    i14 = i15 + (i13 << 3) | 0;
    i16 = HEAP32[i14 >> 2] | 0;
    do {
     if ((i16 | 0) != -1) {
      i17 = HEAP32[i15 + (i13 << 3) + 4 >> 2] | 0;
      if ((i17 | 0) == 0) {
       i21 = i16;
      } else {
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 4 >> 2] & 127](i17);
       i21 = HEAP32[i14 >> 2] | 0;
      }
      if ((i21 | 0) == 0) {
       break;
      }
      i17 = i21 | 0;
      i18 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
      if ((i18 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i21);
       break;
      } else {
       HEAP32[i17 >> 2] = i18;
       break;
      }
     }
    } while (0);
    i13 = i13 + 1 | 0;
    if ((i13 | 0) >= (i3 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i15);
 }
 i15 = HEAP32[i1 + 2176 >> 2] | 0;
 if ((i15 | 0) != 0) {
  __ZN7WebCore24DocumentSharedObjectPoolD1Ev(i15);
  __ZdlPv(i15);
 }
 __ZN7WebCore9TimerBaseD2Ev(i1 + 2120 | 0);
 i15 = HEAP32[i1 + 2112 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i3 = i15 + 8 | 0;
   i13 = i3 | 0;
   i21 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i21 | 0) != 0) {
    HEAP32[i13 >> 2] = i21;
    break;
   }
   i21 = i3 - 8 | 0;
   if ((i21 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 8 >> 2] & 127](i21);
  }
 } while (0);
 __ZN7WebCore9TimerBaseD2Ev(i1 + 2056 | 0);
 i15 = i1 + 2048 | 0;
 i21 = HEAP32[i15 >> 2] | 0;
 i3 = i1 + 2040 | 0;
 if ((i21 | 0) != 0) {
  i13 = HEAP32[i3 >> 2] | 0;
  i14 = i13 + (i21 << 2) | 0;
  i21 = i13;
  while (1) {
   i13 = HEAP32[i21 >> 2] | 0;
   if ((i13 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 127](i13);
   }
   i21 = i21 + 4 | 0;
   if ((i21 | 0) == (i14 | 0)) {
    break;
   }
  }
  HEAP32[i15 >> 2] = 0;
 }
 i15 = HEAP32[i3 >> 2] | 0;
 if ((i15 | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i1 + 2044 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i15);
 }
 __ZN7WebCore9TimerBaseD2Ev(i1 + 1984 | 0);
 i15 = HEAP32[i1 + 1976 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i3 = i15 | 0;
   i14 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i14 | 0) == 0) {
    __ZN7WebCore27ScriptedAnimationControllerD1Ev(i15);
    __ZN3WTF8fastFreeEPv(i15);
    break;
   } else {
    HEAP32[i3 >> 2] = i14;
    break;
   }
  }
 } while (0);
 i15 = HEAP32[i1 + 1952 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i14 = i15 | 0;
   i3 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) == 0) {
    __ZN7WebCore17MediaQueryMatcherD1Ev(i15);
    __ZN3WTF8fastFreeEPv(i15);
    break;
   } else {
    HEAP32[i14 >> 2] = i3;
    break;
   }
  }
 } while (0);
 __ZN7WebCore9TimerBaseD2Ev(i1 + 1840 | 0);
 i15 = HEAP32[i1 + 1828 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i3 = i15 | 0;
   i14 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i14 | 0) == 0) {
    __ZN7WebCore11RenderStyleD2Ev(i15);
    __ZN3WTF8fastFreeEPv(i15);
    break;
   } else {
    HEAP32[i3 >> 2] = i14;
    break;
   }
  }
 } while (0);
 __ZN3WTF5DequeINS_6RefPtrIN7WebCore4NodeEEELj0EE10destroyAllEv(i1 + 1788 | 0);
 i15 = i1 + 1796 | 0;
 i14 = HEAP32[i15 >> 2] | 0;
 if ((i14 | 0) != 0) {
  HEAP32[i15 >> 2] = 0;
  HEAP32[i1 + 1800 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i14);
 }
 __ZN3WTF5DequeINS_6RefPtrIN7WebCore4NodeEEELj0EE10destroyAllEv(i1 + 1768 | 0);
 i14 = i1 + 1776 | 0;
 i15 = HEAP32[i14 >> 2] | 0;
 if ((i15 | 0) != 0) {
  HEAP32[i14 >> 2] = 0;
  HEAP32[i1 + 1780 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i15);
 }
 __ZN7WebCore9TimerBaseD2Ev(i1 + 1712 | 0);
 i15 = i1 + 1700 | 0;
 i14 = HEAP32[i15 >> 2] | 0;
 i3 = i1 + 1692 | 0;
 if ((i14 | 0) != 0) {
  i21 = HEAP32[i3 >> 2] | 0;
  i13 = i21 + (i14 << 2) | 0;
  i14 = i21;
  while (1) {
   i21 = HEAP32[i14 >> 2] | 0;
   do {
    if ((i21 | 0) != 0) {
     i16 = i21 + 8 | 0;
     i18 = i16 | 0;
     i17 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
     HEAP32[i18 >> 2] = i17;
     if ((i17 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
    }
   } while (0);
   i14 = i14 + 4 | 0;
   if ((i14 | 0) == (i13 | 0)) {
    break;
   }
  }
  HEAP32[i15 >> 2] = 0;
 }
 i15 = HEAP32[i3 >> 2] | 0;
 if ((i15 | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i1 + 1696 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i15);
 }
 i15 = HEAP32[i1 + 1688 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i3 = i15 + 8 | 0;
   i13 = i3 | 0;
   i14 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   HEAP32[i13 >> 2] = i14;
   if ((i14 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore13QualifiedNameD1Ev(i1 + 1680 | 0);
 i15 = HEAP32[i1 + 1660 >> 2] | 0;
 if ((i15 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i15);
 }
 i15 = i1 + 1656 | 0;
 HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] = 0;
 i3 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i15 = i3 | 0;
   if (((tempValue = HEAP32[i15 >> 2] | 0, HEAP32[i15 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN3WTF8fastFreeEPv(i3);
  }
 } while (0);
 __ZN7WebCore18DocumentEventQueueD1Ev(i1 + 1588 | 0);
 i3 = HEAP32[i1 + 1584 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN7WebCore12RenderObject7destroyEv(i3 | 0);
 }
 __ZN3WTF14deleteOwnedPtrIN7WebCore18SelectorQueryCacheEEEvPT_(HEAP32[i1 + 1572 >> 2] | 0);
 i3 = HEAP32[i1 + 1552 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i15 = HEAP32[i1 + 1556 >> 2] | 0;
  if ((i15 | 0) > 0) {
   i14 = 0;
   while (1) {
    do {
     if ((HEAP32[i3 + (i14 * 24 & -1) >> 2] | 0) != -1) {
      i13 = i3 + (i14 * 24 & -1) + 20 | 0;
      if ((HEAP32[i13 >> 2] | 0) != 0) {
       HEAP32[i13 >> 2] = 0;
      }
      i13 = i3 + (i14 * 24 & -1) + 12 | 0;
      i21 = HEAP32[i13 >> 2] | 0;
      if ((i21 | 0) == 0) {
       break;
      }
      HEAP32[i13 >> 2] = 0;
      HEAP32[i3 + (i14 * 24 & -1) + 16 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i21);
     }
    } while (0);
    i14 = i14 + 1 | 0;
    if ((i14 | 0) >= (i15 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 1528 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 1508 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 1488 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 1468 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 1448 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = i1 + 1436 | 0;
 if ((HEAP32[i1 + 1444 >> 2] | 0) != 0) {
  __ZN3WTF6VectorIN7WebCore7IconURLELj0ENS_15CrashOnOverflowEE6shrinkEj(i3, 0);
 }
 i15 = i3 | 0;
 i3 = HEAP32[i15 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i15 >> 2] = 0;
  HEAP32[i1 + 1440 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 1412 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i15 = HEAP32[i1 + 1416 >> 2] | 0;
  if ((i15 | 0) > 0) {
   i14 = 0;
   while (1) {
    i21 = i3 + (i14 << 3) | 0;
    do {
     if ((HEAP32[i21 >> 2] | 0) != -1) {
      i13 = HEAP32[i3 + (i14 << 3) + 4 >> 2] | 0;
      do {
       if ((i13 | 0) != 0) {
        i16 = i13 + 8 | 0;
        i17 = i16 | 0;
        i18 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
        HEAP32[i17 >> 2] = i18;
        if ((i18 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
       }
      } while (0);
      i13 = HEAP32[i21 >> 2] | 0;
      if ((i13 | 0) == 0) {
       break;
      }
      i16 = i13 | 0;
      i18 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
      if ((i18 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i13);
       break;
      } else {
       HEAP32[i16 >> 2] = i18;
       break;
      }
     }
    } while (0);
    i14 = i14 + 1 | 0;
    if ((i14 | 0) >= (i15 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = i1 + 1404 | 0;
 i15 = HEAP32[i3 >> 2] | 0;
 i14 = i1 + 1396 | 0;
 if ((i15 | 0) != 0) {
  i21 = HEAP32[i14 >> 2] | 0;
  i18 = i21 + (i15 * 40 & -1) | 0;
  i15 = i21;
  while (1) {
   i21 = HEAP32[i15 + 16 >> 2] | 0;
   do {
    if ((i21 | 0) != 0) {
     i16 = i21 | 0;
     i13 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
     if ((i13 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i21);
      break;
     } else {
      HEAP32[i16 >> 2] = i13;
      break;
     }
    }
   } while (0);
   i15 = i15 + 40 | 0;
   if ((i15 | 0) == (i18 | 0)) {
    break;
   }
  }
  HEAP32[i3 >> 2] = 0;
 }
 i3 = HEAP32[i14 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i14 >> 2] = 0;
  HEAP32[i1 + 1400 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 1392 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN7WebCore21SVGDocumentExtensionsD1Ev(i3);
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 1388 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i14 = i3 | 0;
   i18 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   if ((i18 | 0) == 0) {
    __ZN3WTF8fastFreeEPv(i3);
    break;
   } else {
    HEAP32[i14 >> 2] = i18;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 + 1336 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 1316 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i11 = i3 | 0;
   i18 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i18 | 0) == 0) {
    __ZN7WebCore19TextResourceDecoderD1Ev(i3);
    __ZN3WTF8fastFreeEPv(i3);
    break;
   } else {
    HEAP32[i11 >> 2] = i18;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 + 1304 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i18 = i3 | 0;
   i11 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i18 >> 2] = i11;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 + 1296 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i11 = i3 | 0;
   i18 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i18 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i11 >> 2] = i18;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 + 1292 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i18 = i3 | 0;
   i11 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i18 >> 2] = i11;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 + 1288 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i11 = i3 + 8 | 0;
   i18 = i11 | 0;
   i14 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
   HEAP32[i18 >> 2] = i14;
   if ((i14 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
  }
 } while (0);
 i3 = HEAP32[i1 + 1284 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN7WebCore15TransformSourceD1Ev(i3);
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = i1 + 1280 | 0;
 i11 = HEAP32[i3 >> 2] | 0;
 i14 = i1 + 1272 | 0;
 if ((i11 | 0) != 0) {
  i18 = HEAP32[i14 >> 2] | 0;
  i15 = i18 + (i11 << 2) | 0;
  i11 = i18;
  while (1) {
   i18 = HEAP32[i11 >> 2] | 0;
   do {
    if ((i18 | 0) != 0) {
     i21 = i18 + 8 | 0;
     i13 = i21 | 0;
     i16 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
     HEAP32[i13 >> 2] = i16;
     if ((i16 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i21 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i21 - 8 | 0);
    }
   } while (0);
   i11 = i11 + 4 | 0;
   if ((i11 | 0) == (i15 | 0)) {
    break;
   }
  }
  HEAP32[i3 >> 2] = 0;
 }
 i3 = HEAP32[i14 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i14 >> 2] = 0;
  HEAP32[i1 + 1276 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 if ((i3 | 0) != 0) {
  __ZN7WebCore12ScriptRunnerD1Ev(i3);
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 1248 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 | 0;
   if (((tempValue = HEAP32[i5 >> 2] | 0, HEAP32[i5 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN7WebCore21SerializedScriptValueD1Ev(i3);
   __ZN3WTF8fastFreeEPv(i3);
  }
 } while (0);
 __ZN7WebCore9TimerBaseD2Ev(i1 + 1184 | 0);
 __ZN7WebCore9TimerBaseD2Ev(i1 + 1128 | 0);
 i3 = HEAP32[i1 + 1124 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN7WebCore24DocumentMarkerControllerD1Ev(i3);
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 1120 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN7WebCore13AXObjectCacheD2Ev(i3);
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 1116 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 + 8 | 0;
   i14 = i5 | 0;
   i15 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   HEAP32[i14 >> 2] = i15;
   if ((i15 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 i3 = HEAP32[i1 + 1104 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 | 0;
   i15 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i5 >> 2] = i15;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 + 1096 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i15 = i3 | 0;
   i5 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i15 >> 2] = i5;
    break;
   }
  }
 } while (0);
 __ZN7WebCore9TimerBaseD2Ev(i1 + 1024 | 0);
 __ZN7WebCore9TimerBaseD2Ev(i1 + 968 | 0);
 i3 = HEAP32[i1 + 952 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i3 + 4 >> 2] | 0;
  if ((i5 | 0) != 0) {
   __ZN3WTF8fastFreeEPv(i5);
  }
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 924 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN7WebCore14FormControllerD1Ev(i3);
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i9 = i3 | 0;
   i5 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) == 0) {
    __ZN7WebCore14StyleSheetListD1Ev(i3);
    __ZN3WTF8fastFreeEPv(i3);
    break;
   } else {
    HEAP32[i9 >> 2] = i5;
    break;
   }
  }
 } while (0);
 __ZN7WebCore28DocumentStyleSheetCollectionD2Ev(i12);
 i12 = HEAP32[i1 + 748 >> 2] | 0;
 if ((i12 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i12);
 }
 i12 = HEAP32[i1 + 728 >> 2] | 0;
 if ((i12 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i12);
 }
 __ZN7WebCore20UserActionElementSetD1Ev(i1 + 696 | 0);
 i12 = HEAP32[i1 + 692 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i3 = i12 + 8 | 0;
   i5 = i3 | 0;
   i9 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i9;
   if ((i9 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 i12 = HEAP32[i1 + 688 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i3 = i12 + 8 | 0;
   i9 = i3 | 0;
   i5 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   HEAP32[i9 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 i12 = HEAP32[i1 + 684 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i3 = i12 + 8 | 0;
   i5 = i3 | 0;
   i9 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i9;
   if ((i9 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 i12 = HEAP32[i1 + 680 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i3 = i12 + 8 | 0;
   i9 = i3 | 0;
   i5 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   HEAP32[i9 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 i12 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i10 = i12 + 4 | 0;
   i3 = i10 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i3 >> 2] = i5;
    break;
   }
   i5 = i10 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 127](i5);
  }
 } while (0);
 i12 = HEAP32[i1 + 652 >> 2] | 0;
 if ((i12 | 0) != 0) {
  i5 = i12 | 0;
  if ((HEAP32[i5 >> 2] | 0) != 0) {
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i5);
  }
  __ZN3WTF8fastFreeEPv(i12);
 }
 i12 = HEAP32[i1 + 648 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i5 = i12 | 0;
   i10 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i5 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i12 = HEAP32[i1 + 644 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i10 = i12 | 0;
   i5 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i10 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i12 = HEAP32[i1 + 596 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i5 = i12 | 0;
   i10 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i5 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i12 = HEAP32[i1 + 548 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i10 = i12 | 0;
   i5 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i10 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i12 = HEAP32[i1 + 500 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i5 = i12 | 0;
   i10 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i5 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i12 = HEAP32[i1 + 452 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i10 = i12 | 0;
   i5 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i10 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i12 = HEAP32[i1 + 404 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i5 = i12 | 0;
   i10 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i5 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i12 = HEAP32[i1 + 356 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i10 = i12 | 0;
   i5 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i10 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i12 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i6 = i12 + 4 | 0;
   i5 = i6 | 0;
   i10 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) != 0) {
    HEAP32[i5 >> 2] = i10;
    break;
   }
   i10 = i6 - 4 | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 127](i10);
  }
 } while (0);
 i12 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i8 = i12 | 0;
   i10 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) == 0) {
    __ZN7WebCore20CachedResourceLoaderD1Ev(i12);
    __ZN3WTF8fastFreeEPv(i12);
    break;
   } else {
    HEAP32[i8 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i12 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i4 = i12 + 36 | 0;
   i10 = i4 | 0;
   i8 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i10 >> 2] = i8;
    break;
   }
   i8 = i4 - 36 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 44 >> 2] & 127](i8);
  }
 } while (0);
 i12 = HEAP32[i7 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i22 = i1 + 248 | 0;
  i23 = i22;
  __ZN7WebCore9TimerBaseD2Ev(i23);
  i24 = i1 + 88 | 0;
  __ZN7WebCore22ScriptExecutionContextD2Ev(i24);
  __ZN7WebCore9TreeScopeD2Ev(i2);
  i25 = i1 | 0;
  __ZN7WebCore13ContainerNodeD2Ev(i25);
  return;
 }
 __ZN7WebCore13StyleResolverD1Ev(i12);
 __ZN3WTF8fastFreeEPv(i12);
 i22 = i1 + 248 | 0;
 i23 = i22;
 __ZN7WebCore9TimerBaseD2Ev(i23);
 i24 = i1 + 88 | 0;
 __ZN7WebCore22ScriptExecutionContextD2Ev(i24);
 __ZN7WebCore9TreeScopeD2Ev(i2);
 i25 = i1 | 0;
 __ZN7WebCore13ContainerNodeD2Ev(i25);
 return;
}
function __ZN7WebCore8DocumentD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1424;
 i2 = i1 + 44 | 0;
 HEAP32[i2 >> 2] = H_BASE + 1788;
 HEAP32[i1 + 88 >> 2] = H_BASE + 1812;
 i3 = i1 + 2200 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i4 + 2204 >> 2] = 0;
 }
 i4 = i1 + 336 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) != 0) {
  __ZN7WebCore9DOMWindow32resetUnlessSuspendedForPageCacheEv(i5);
 }
 i5 = i1 + 1268 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 if ((i6 | 0) != 0) {
  __ZN7WebCore12ScriptRunnerD1Ev(i6);
  __ZN3WTF8fastFreeEPv(i6);
 }
 i6 = i1 + 768 | 0;
 __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(H_BASE + 400 | 0, HEAP16[i6 >> 1] & 1, 2);
 __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(H_BASE + 344 | 0, (HEAPU16[i6 >> 1] | 0) >>> 1 & 1, 2);
 __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(H_BASE + 288 | 0, (HEAPU16[i6 >> 1] | 0) >>> 2 & 1, 2);
 __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(H_BASE + 224 | 0, (HEAPU16[i6 >> 1] | 0) >>> 3 & 1, 2);
 __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(H_BASE + 152 | 0, (HEAPU16[i6 >> 1] | 0) >>> 4 & 1, 2);
 __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(H_BASE + 88 | 0, (HEAPU16[i6 >> 1] | 0) >>> 5 & 1, 2);
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 28 >> 2] & 127](i1);
 i6 = i1 + 344 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 56 >> 2] & 127](i7);
   i8 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = 0;
   if ((i8 | 0) == 0) {
    break;
   }
   i9 = i8 + 4 | 0;
   i8 = i9 | 0;
   i10 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) != 0) {
    HEAP32[i8 >> 2] = i10;
    break;
   }
   i10 = i9 - 4 | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 127](i10);
  }
 } while (0);
 i7 = HEAP32[i1 + 332 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i11 = 17;
 } else {
  i10 = i1;
  i9 = i7;
  while (1) {
   i7 = HEAP32[i9 + 448 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i12 = i10;
    break;
   }
   i8 = HEAP32[(HEAP32[i7 + 20 >> 2] | 0) + 8 >> 2] | 0;
   i7 = HEAP32[i8 + 332 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i12 = i8;
    break;
   } else {
    i10 = i8;
    i9 = i7;
   }
  }
  if ((i12 | 0) == (i1 | 0)) {
   i11 = 17;
  }
 }
 do {
  if ((i11 | 0) == 17) {
   i12 = i1 + 1120 | 0;
   i9 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN7WebCore13AXObjectCacheD2Ev(i9);
   __ZN3WTF8fastFreeEPv(i9);
  }
 } while (0);
 i11 = i1 + 1308 | 0;
 i9 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 do {
  if ((i9 | 0) != 0) {
   i12 = i9 | 0;
   i10 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) == 0) {
    __ZN7WebCore19TextResourceDecoderD1Ev(i9);
    __ZN3WTF8fastFreeEPv(i9);
    break;
   } else {
    HEAP32[i12 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i9 = i1 + 920 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 if ((i10 | 0) != 0) {
  __ZN7WebCore14StyleSheetList18detachFromDocumentEv(i10);
 }
 i10 = i1 + 656 | 0;
 i12 = HEAP32[i10 >> 2] | 0;
 if ((i12 | 0) != 0) {
  HEAP32[i12 + 24 >> 2] = 0;
 }
 i12 = i1 + 772 | 0;
 __ZN7WebCore28DocumentStyleSheetCollection18detachFromDocumentEv(i12);
 i7 = i1 + 320 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 if ((i8 | 0) != 0) {
  __ZN7WebCore13StyleResolverD1Ev(i8);
  __ZN3WTF8fastFreeEPv(i8);
 }
 i8 = i1 + 340 | 0;
 i13 = HEAP32[i8 >> 2] | 0;
 i14 = i13 + 44 | 0;
 if ((HEAP32[i14 >> 2] | 0) == (i1 | 0)) {
  HEAP32[i14 >> 2] = 0;
  i15 = HEAP32[i8 >> 2] | 0;
 } else {
  i15 = i13;
 }
 HEAP32[i8 >> 2] = 0;
 do {
  if ((i15 | 0) != 0) {
   i13 = i15 | 0;
   i14 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i14 | 0) == 0) {
    __ZN7WebCore20CachedResourceLoaderD1Ev(i15);
    __ZN3WTF8fastFreeEPv(i15);
    break;
   } else {
    HEAP32[i13 >> 2] = i14;
    break;
   }
  }
 } while (0);
 if ((HEAP32[i1 + 12 >> 2] & 2048 | 0) != 0) {
  __ZN7WebCore4Node13clearRareDataEv(i1 | 0);
 }
 __ZN7WebCore9TreeScope18clearDocumentScopeEv(i2);
 HEAP32[__ZN7WebCore17InspectorCounters10s_countersE >> 2] = (HEAP32[__ZN7WebCore17InspectorCounters10s_countersE >> 2] | 0) - 1;
 i15 = HEAP32[i1 + 2264 >> 2] | 0;
 if ((i15 | 0) != 0) {
  i14 = HEAP32[i1 + 2268 >> 2] | 0;
  if ((i14 | 0) > 0) {
   i13 = 0;
   while (1) {
    i16 = HEAP32[i15 + (i13 << 2) >> 2] | 0;
    i17 = i16;
    do {
     if (!((i17 | 0) == (-1 | 0) | (i17 | 0) == 0)) {
      i18 = i16 + 8 | 0;
      i19 = i18 | 0;
      i20 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
      HEAP32[i19 >> 2] = i20;
      if ((i20 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
     }
    } while (0);
    i13 = i13 + 1 | 0;
    if ((i13 | 0) >= (i14 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i15);
 }
 __ZN7WebCore9TimerBaseD2Ev(i1 + 2208 | 0);
 i15 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i3 = i15 + 8 | 0;
   i14 = i3 | 0;
   i13 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   HEAP32[i14 >> 2] = i13;
   if ((i13 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 i15 = HEAP32[i1 + 2180 >> 2] | 0;
 if ((i15 | 0) != 0) {
  i3 = HEAP32[i1 + 2184 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i13 = 0;
   while (1) {
    i14 = i15 + (i13 << 3) | 0;
    i16 = HEAP32[i14 >> 2] | 0;
    do {
     if ((i16 | 0) != -1) {
      i17 = HEAP32[i15 + (i13 << 3) + 4 >> 2] | 0;
      if ((i17 | 0) == 0) {
       i21 = i16;
      } else {
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 4 >> 2] & 127](i17);
       i21 = HEAP32[i14 >> 2] | 0;
      }
      if ((i21 | 0) == 0) {
       break;
      }
      i17 = i21 | 0;
      i18 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
      if ((i18 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i21);
       break;
      } else {
       HEAP32[i17 >> 2] = i18;
       break;
      }
     }
    } while (0);
    i13 = i13 + 1 | 0;
    if ((i13 | 0) >= (i3 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i15);
 }
 i15 = HEAP32[i1 + 2176 >> 2] | 0;
 if ((i15 | 0) != 0) {
  __ZN7WebCore24DocumentSharedObjectPoolD1Ev(i15);
  __ZdlPv(i15);
 }
 __ZN7WebCore9TimerBaseD2Ev(i1 + 2120 | 0);
 i15 = HEAP32[i1 + 2112 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i3 = i15 + 8 | 0;
   i13 = i3 | 0;
   i21 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i21 | 0) != 0) {
    HEAP32[i13 >> 2] = i21;
    break;
   }
   i21 = i3 - 8 | 0;
   if ((i21 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 8 >> 2] & 127](i21);
  }
 } while (0);
 __ZN7WebCore9TimerBaseD2Ev(i1 + 2056 | 0);
 i15 = i1 + 2048 | 0;
 i21 = HEAP32[i15 >> 2] | 0;
 i3 = i1 + 2040 | 0;
 if ((i21 | 0) != 0) {
  i13 = HEAP32[i3 >> 2] | 0;
  i14 = i13 + (i21 << 2) | 0;
  i21 = i13;
  while (1) {
   i13 = HEAP32[i21 >> 2] | 0;
   if ((i13 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 127](i13);
   }
   i21 = i21 + 4 | 0;
   if ((i21 | 0) == (i14 | 0)) {
    break;
   }
  }
  HEAP32[i15 >> 2] = 0;
 }
 i15 = HEAP32[i3 >> 2] | 0;
 if ((i15 | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i1 + 2044 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i15);
 }
 __ZN7WebCore9TimerBaseD2Ev(i1 + 1984 | 0);
 i15 = HEAP32[i1 + 1976 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i3 = i15 | 0;
   i14 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i14 | 0) == 0) {
    __ZN7WebCore27ScriptedAnimationControllerD1Ev(i15);
    __ZN3WTF8fastFreeEPv(i15);
    break;
   } else {
    HEAP32[i3 >> 2] = i14;
    break;
   }
  }
 } while (0);
 i15 = HEAP32[i1 + 1952 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i14 = i15 | 0;
   i3 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) == 0) {
    __ZN7WebCore17MediaQueryMatcherD1Ev(i15);
    __ZN3WTF8fastFreeEPv(i15);
    break;
   } else {
    HEAP32[i14 >> 2] = i3;
    break;
   }
  }
 } while (0);
 __ZN7WebCore9TimerBaseD2Ev(i1 + 1840 | 0);
 i15 = HEAP32[i1 + 1828 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i3 = i15 | 0;
   i14 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i14 | 0) == 0) {
    __ZN7WebCore11RenderStyleD2Ev(i15);
    __ZN3WTF8fastFreeEPv(i15);
    break;
   } else {
    HEAP32[i3 >> 2] = i14;
    break;
   }
  }
 } while (0);
 __ZN3WTF5DequeINS_6RefPtrIN7WebCore4NodeEEELj0EE10destroyAllEv(i1 + 1788 | 0);
 i15 = i1 + 1796 | 0;
 i14 = HEAP32[i15 >> 2] | 0;
 if ((i14 | 0) != 0) {
  HEAP32[i15 >> 2] = 0;
  HEAP32[i1 + 1800 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i14);
 }
 __ZN3WTF5DequeINS_6RefPtrIN7WebCore4NodeEEELj0EE10destroyAllEv(i1 + 1768 | 0);
 i14 = i1 + 1776 | 0;
 i15 = HEAP32[i14 >> 2] | 0;
 if ((i15 | 0) != 0) {
  HEAP32[i14 >> 2] = 0;
  HEAP32[i1 + 1780 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i15);
 }
 __ZN7WebCore9TimerBaseD2Ev(i1 + 1712 | 0);
 i15 = i1 + 1700 | 0;
 i14 = HEAP32[i15 >> 2] | 0;
 i3 = i1 + 1692 | 0;
 if ((i14 | 0) != 0) {
  i21 = HEAP32[i3 >> 2] | 0;
  i13 = i21 + (i14 << 2) | 0;
  i14 = i21;
  while (1) {
   i21 = HEAP32[i14 >> 2] | 0;
   do {
    if ((i21 | 0) != 0) {
     i16 = i21 + 8 | 0;
     i18 = i16 | 0;
     i17 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
     HEAP32[i18 >> 2] = i17;
     if ((i17 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
    }
   } while (0);
   i14 = i14 + 4 | 0;
   if ((i14 | 0) == (i13 | 0)) {
    break;
   }
  }
  HEAP32[i15 >> 2] = 0;
 }
 i15 = HEAP32[i3 >> 2] | 0;
 if ((i15 | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i1 + 1696 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i15);
 }
 i15 = HEAP32[i1 + 1688 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i3 = i15 + 8 | 0;
   i13 = i3 | 0;
   i14 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   HEAP32[i13 >> 2] = i14;
   if ((i14 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore13QualifiedNameD1Ev(i1 + 1680 | 0);
 i15 = HEAP32[i1 + 1660 >> 2] | 0;
 if ((i15 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i15);
 }
 i15 = i1 + 1656 | 0;
 HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] = 0;
 i3 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i15 = i3 | 0;
   if (((tempValue = HEAP32[i15 >> 2] | 0, HEAP32[i15 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN3WTF8fastFreeEPv(i3);
  }
 } while (0);
 __ZN7WebCore18DocumentEventQueueD1Ev(i1 + 1588 | 0);
 i3 = HEAP32[i1 + 1584 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN7WebCore12RenderObject7destroyEv(i3 | 0);
 }
 __ZN3WTF14deleteOwnedPtrIN7WebCore18SelectorQueryCacheEEEvPT_(HEAP32[i1 + 1572 >> 2] | 0);
 i3 = HEAP32[i1 + 1552 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i15 = HEAP32[i1 + 1556 >> 2] | 0;
  if ((i15 | 0) > 0) {
   i14 = 0;
   while (1) {
    do {
     if ((HEAP32[i3 + (i14 * 24 & -1) >> 2] | 0) != -1) {
      i13 = i3 + (i14 * 24 & -1) + 20 | 0;
      if ((HEAP32[i13 >> 2] | 0) != 0) {
       HEAP32[i13 >> 2] = 0;
      }
      i13 = i3 + (i14 * 24 & -1) + 12 | 0;
      i21 = HEAP32[i13 >> 2] | 0;
      if ((i21 | 0) == 0) {
       break;
      }
      HEAP32[i13 >> 2] = 0;
      HEAP32[i3 + (i14 * 24 & -1) + 16 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i21);
     }
    } while (0);
    i14 = i14 + 1 | 0;
    if ((i14 | 0) >= (i15 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 1528 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 1508 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 1488 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 1468 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 1448 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = i1 + 1436 | 0;
 if ((HEAP32[i1 + 1444 >> 2] | 0) != 0) {
  __ZN3WTF6VectorIN7WebCore7IconURLELj0ENS_15CrashOnOverflowEE6shrinkEj(i3, 0);
 }
 i15 = i3 | 0;
 i3 = HEAP32[i15 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i15 >> 2] = 0;
  HEAP32[i1 + 1440 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 1412 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i15 = HEAP32[i1 + 1416 >> 2] | 0;
  if ((i15 | 0) > 0) {
   i14 = 0;
   while (1) {
    i21 = i3 + (i14 << 3) | 0;
    do {
     if ((HEAP32[i21 >> 2] | 0) != -1) {
      i13 = HEAP32[i3 + (i14 << 3) + 4 >> 2] | 0;
      do {
       if ((i13 | 0) != 0) {
        i16 = i13 + 8 | 0;
        i17 = i16 | 0;
        i18 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
        HEAP32[i17 >> 2] = i18;
        if ((i18 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
       }
      } while (0);
      i13 = HEAP32[i21 >> 2] | 0;
      if ((i13 | 0) == 0) {
       break;
      }
      i16 = i13 | 0;
      i18 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
      if ((i18 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i13);
       break;
      } else {
       HEAP32[i16 >> 2] = i18;
       break;
      }
     }
    } while (0);
    i14 = i14 + 1 | 0;
    if ((i14 | 0) >= (i15 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = i1 + 1404 | 0;
 i15 = HEAP32[i3 >> 2] | 0;
 i14 = i1 + 1396 | 0;
 if ((i15 | 0) != 0) {
  i21 = HEAP32[i14 >> 2] | 0;
  i18 = i21 + (i15 * 40 & -1) | 0;
  i15 = i21;
  while (1) {
   i21 = HEAP32[i15 + 16 >> 2] | 0;
   do {
    if ((i21 | 0) != 0) {
     i16 = i21 | 0;
     i13 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
     if ((i13 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i21);
      break;
     } else {
      HEAP32[i16 >> 2] = i13;
      break;
     }
    }
   } while (0);
   i15 = i15 + 40 | 0;
   if ((i15 | 0) == (i18 | 0)) {
    break;
   }
  }
  HEAP32[i3 >> 2] = 0;
 }
 i3 = HEAP32[i14 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i14 >> 2] = 0;
  HEAP32[i1 + 1400 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 1392 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN7WebCore21SVGDocumentExtensionsD1Ev(i3);
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 1388 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i14 = i3 | 0;
   i18 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   if ((i18 | 0) == 0) {
    __ZN3WTF8fastFreeEPv(i3);
    break;
   } else {
    HEAP32[i14 >> 2] = i18;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 + 1336 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 1316 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i11 = i3 | 0;
   i18 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i18 | 0) == 0) {
    __ZN7WebCore19TextResourceDecoderD1Ev(i3);
    __ZN3WTF8fastFreeEPv(i3);
    break;
   } else {
    HEAP32[i11 >> 2] = i18;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 + 1304 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i18 = i3 | 0;
   i11 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i18 >> 2] = i11;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 + 1296 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i11 = i3 | 0;
   i18 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i18 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i11 >> 2] = i18;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 + 1292 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i18 = i3 | 0;
   i11 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i18 >> 2] = i11;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 + 1288 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i11 = i3 + 8 | 0;
   i18 = i11 | 0;
   i14 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
   HEAP32[i18 >> 2] = i14;
   if ((i14 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
  }
 } while (0);
 i3 = HEAP32[i1 + 1284 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN7WebCore15TransformSourceD1Ev(i3);
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = i1 + 1280 | 0;
 i11 = HEAP32[i3 >> 2] | 0;
 i14 = i1 + 1272 | 0;
 if ((i11 | 0) != 0) {
  i18 = HEAP32[i14 >> 2] | 0;
  i15 = i18 + (i11 << 2) | 0;
  i11 = i18;
  while (1) {
   i18 = HEAP32[i11 >> 2] | 0;
   do {
    if ((i18 | 0) != 0) {
     i21 = i18 + 8 | 0;
     i13 = i21 | 0;
     i16 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
     HEAP32[i13 >> 2] = i16;
     if ((i16 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i21 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i21 - 8 | 0);
    }
   } while (0);
   i11 = i11 + 4 | 0;
   if ((i11 | 0) == (i15 | 0)) {
    break;
   }
  }
  HEAP32[i3 >> 2] = 0;
 }
 i3 = HEAP32[i14 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i14 >> 2] = 0;
  HEAP32[i1 + 1276 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 if ((i3 | 0) != 0) {
  __ZN7WebCore12ScriptRunnerD1Ev(i3);
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 1248 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 | 0;
   if (((tempValue = HEAP32[i5 >> 2] | 0, HEAP32[i5 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN7WebCore21SerializedScriptValueD1Ev(i3);
   __ZN3WTF8fastFreeEPv(i3);
  }
 } while (0);
 __ZN7WebCore9TimerBaseD2Ev(i1 + 1184 | 0);
 __ZN7WebCore9TimerBaseD2Ev(i1 + 1128 | 0);
 i3 = HEAP32[i1 + 1124 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN7WebCore24DocumentMarkerControllerD1Ev(i3);
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 1120 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN7WebCore13AXObjectCacheD2Ev(i3);
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 1116 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 + 8 | 0;
   i14 = i5 | 0;
   i15 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   HEAP32[i14 >> 2] = i15;
   if ((i15 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 i3 = HEAP32[i1 + 1104 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 | 0;
   i15 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i5 >> 2] = i15;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 + 1096 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i15 = i3 | 0;
   i5 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i15 >> 2] = i5;
    break;
   }
  }
 } while (0);
 __ZN7WebCore9TimerBaseD2Ev(i1 + 1024 | 0);
 __ZN7WebCore9TimerBaseD2Ev(i1 + 968 | 0);
 i3 = HEAP32[i1 + 952 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i3 + 4 >> 2] | 0;
  if ((i5 | 0) != 0) {
   __ZN3WTF8fastFreeEPv(i5);
  }
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 924 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN7WebCore14FormControllerD1Ev(i3);
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i9 = i3 | 0;
   i5 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) == 0) {
    __ZN7WebCore14StyleSheetListD1Ev(i3);
    __ZN3WTF8fastFreeEPv(i3);
    break;
   } else {
    HEAP32[i9 >> 2] = i5;
    break;
   }
  }
 } while (0);
 __ZN7WebCore28DocumentStyleSheetCollectionD2Ev(i12);
 i12 = HEAP32[i1 + 748 >> 2] | 0;
 if ((i12 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i12);
 }
 i12 = HEAP32[i1 + 728 >> 2] | 0;
 if ((i12 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i12);
 }
 __ZN7WebCore20UserActionElementSetD1Ev(i1 + 696 | 0);
 i12 = HEAP32[i1 + 692 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i3 = i12 + 8 | 0;
   i5 = i3 | 0;
   i9 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i9;
   if ((i9 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 i12 = HEAP32[i1 + 688 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i3 = i12 + 8 | 0;
   i9 = i3 | 0;
   i5 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   HEAP32[i9 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 i12 = HEAP32[i1 + 684 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i3 = i12 + 8 | 0;
   i5 = i3 | 0;
   i9 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i9;
   if ((i9 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 i12 = HEAP32[i1 + 680 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i3 = i12 + 8 | 0;
   i9 = i3 | 0;
   i5 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   HEAP32[i9 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 i12 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i10 = i12 + 4 | 0;
   i3 = i10 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i3 >> 2] = i5;
    break;
   }
   i5 = i10 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 127](i5);
  }
 } while (0);
 i12 = HEAP32[i1 + 652 >> 2] | 0;
 if ((i12 | 0) != 0) {
  i5 = i12 | 0;
  if ((HEAP32[i5 >> 2] | 0) != 0) {
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i5);
  }
  __ZN3WTF8fastFreeEPv(i12);
 }
 i12 = HEAP32[i1 + 648 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i5 = i12 | 0;
   i10 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i5 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i12 = HEAP32[i1 + 644 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i10 = i12 | 0;
   i5 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i10 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i12 = HEAP32[i1 + 596 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i5 = i12 | 0;
   i10 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i5 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i12 = HEAP32[i1 + 548 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i10 = i12 | 0;
   i5 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i10 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i12 = HEAP32[i1 + 500 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i5 = i12 | 0;
   i10 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i5 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i12 = HEAP32[i1 + 452 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i10 = i12 | 0;
   i5 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i10 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i12 = HEAP32[i1 + 404 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i5 = i12 | 0;
   i10 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i5 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i12 = HEAP32[i1 + 356 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i10 = i12 | 0;
   i5 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i10 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i12 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i6 = i12 + 4 | 0;
   i5 = i6 | 0;
   i10 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) != 0) {
    HEAP32[i5 >> 2] = i10;
    break;
   }
   i10 = i6 - 4 | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 127](i10);
  }
 } while (0);
 i12 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i8 = i12 | 0;
   i10 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) == 0) {
    __ZN7WebCore20CachedResourceLoaderD1Ev(i12);
    __ZN3WTF8fastFreeEPv(i12);
    break;
   } else {
    HEAP32[i8 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i12 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i4 = i12 + 36 | 0;
   i10 = i4 | 0;
   i8 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i10 >> 2] = i8;
    break;
   }
   i8 = i4 - 36 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 44 >> 2] & 127](i8);
  }
 } while (0);
 i12 = HEAP32[i7 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i22 = i1 + 248 | 0;
  i23 = i22;
  __ZN7WebCore9TimerBaseD2Ev(i23);
  i24 = i1 + 88 | 0;
  __ZN7WebCore22ScriptExecutionContextD2Ev(i24);
  __ZN7WebCore9TreeScopeD2Ev(i2);
  i25 = i1 | 0;
  __ZN7WebCore13ContainerNodeD2Ev(i25);
  return;
 }
 __ZN7WebCore13StyleResolverD1Ev(i12);
 __ZN3WTF8fastFreeEPv(i12);
 i22 = i1 + 248 | 0;
 i23 = i22;
 __ZN7WebCore9TimerBaseD2Ev(i23);
 i24 = i1 + 88 | 0;
 __ZN7WebCore22ScriptExecutionContextD2Ev(i24);
 __ZN7WebCore9TreeScopeD2Ev(i2);
 i25 = i1 | 0;
 __ZN7WebCore13ContainerNodeD2Ev(i25);
 return;
}
function __ZN7WebCore8Document22updateHoverActiveStateERKNS_14HitTestRequestEPNS_7ElementEPKNS_18PlatformMouseEventENS_23StyleResolverUpdateFlagE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 288 | 0;
 i7 = i6 | 0;
 i8 = i6 + 144 | 0;
 L1 : do {
  if ((i3 | 0) == 0) {
   i9 = 0;
   i10 = 0;
  } else {
   i11 = i3;
   while (1) {
    i12 = i11 + 20 | 0;
    i13 = HEAP32[(HEAP32[i12 >> 2] | 0) + 8 >> 2] | 0;
    if ((i13 | 0) == (i1 | 0)) {
     i9 = i11;
     i10 = 1;
     break L1;
    }
    __ZN7WebCore8Document22updateHoverActiveStateERKNS_14HitTestRequestEPNS_7ElementEPKNS_18PlatformMouseEventENS_23StyleResolverUpdateFlagE(i13, i2, i11, i4, 2);
    i13 = HEAP32[(HEAP32[(HEAP32[i12 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0;
    if ((i13 | 0) == 0) {
     i9 = 0;
     i10 = 0;
     break L1;
    }
    i12 = HEAP32[i13 + 448 >> 2] | 0;
    i13 = i12 | 0;
    if ((i12 | 0) == 0) {
     i9 = i13;
     i10 = 0;
     break;
    } else {
     i11 = i13;
    }
   }
  }
 } while (0);
 i3 = i1 + 688 | 0;
 i11 = HEAP32[i3 >> 2] | 0;
 i13 = (i11 | 0) != 0;
 do {
  if (i13) {
   if ((HEAP32[i2 >> 2] & 4 | 0) != 0) {
    i14 = 0;
    break;
   }
   i12 = i11 + 32 | 0;
   if ((HEAP32[i11 + 12 >> 2] & 2048 | 0) == 0) {
    i15 = i12 | 0;
   } else {
    i15 = HEAP32[i12 >> 2] | 0;
   }
   i12 = HEAP32[i15 >> 2] | 0;
   if ((i12 | 0) == 0) {
    i16 = i11;
   } else {
    i17 = i1 + 696 | 0;
    i18 = i12;
    while (1) {
     do {
      if ((HEAP32[i18 + 20 >> 2] & 128 | 0) == 0) {
       i12 = HEAP32[i18 + 4 >> 2] | 0;
       i19 = i12;
       if ((i12 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_viii[HEAP32[(HEAP32[i12 >> 2] | 0) + 332 >> 2] & 31](i19, 0, 0);
       __ZN7WebCore20UserActionElementSet10clearFlagsEPNS_7ElementEj(i17, i19, 2);
      }
     } while (0);
     i18 = HEAP32[i18 + 8 >> 2] | 0;
     if ((i18 | 0) == 0) {
      break;
     }
    }
    i16 = HEAP32[i3 >> 2] | 0;
   }
   HEAP32[i3 >> 2] = 0;
   if ((i16 | 0) == 0) {
    i20 = 39;
    break;
   }
   i18 = i16 + 8 | 0;
   i17 = i18 | 0;
   i19 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
   HEAP32[i17 >> 2] = i19;
   if ((i19 | 0) >= 1) {
    i20 = 39;
    break;
   }
   if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
    i20 = 39;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
   i20 = 39;
  } else {
   if (!i10) {
    i14 = 0;
    break;
   }
   i18 = HEAP32[i2 >> 2] | 0;
   if ((i18 & 4 | 0) == 0 | (i18 & 136 | 0) == 136) {
    i20 = 39;
    break;
   }
   i18 = i9 + 32 | 0;
   if ((HEAP32[i9 + 12 >> 2] & 2048 | 0) == 0) {
    i21 = i18 | 0;
   } else {
    i21 = HEAP32[i18 >> 2] | 0;
   }
   i18 = HEAP32[i21 >> 2] | 0;
   if ((i18 | 0) != 0) {
    i19 = i1 + 696 | 0;
    i17 = i18;
    while (1) {
     i18 = HEAP32[i17 + 20 >> 2] | 0;
     do {
      if ((i18 & 128 | 0) == 0) {
       i12 = HEAP32[i17 + 4 >> 2] | 0;
       if ((i12 | 0) == 0) {
        break;
       }
       if ((i18 & 768 | 0) == 256 | (i18 & 4096 | 0) != 0) {
        break;
       }
       __ZN7WebCore20UserActionElementSet8setFlagsEPNS_7ElementEj(i19, i12, 2);
      }
     } while (0);
     i17 = HEAP32[i17 + 8 >> 2] | 0;
     if ((i17 | 0) == 0) {
      break;
     }
    }
   }
   if ((i9 | 0) != 0) {
    i17 = i9 + 8 | 0;
    HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
   }
   i17 = HEAP32[i3 >> 2] | 0;
   HEAP32[i3 >> 2] = i9;
   if ((i17 | 0) == 0) {
    i20 = 39;
    break;
   }
   i19 = i17 + 8 | 0;
   i17 = i19 | 0;
   i18 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
   HEAP32[i17 >> 2] = i18;
   if ((i18 | 0) >= 1) {
    i20 = 39;
    break;
   }
   if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
    i20 = 39;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
   i20 = 39;
  }
 } while (0);
 do {
  if ((i20 | 0) == 39) {
   if (i13) {
    i14 = 0;
    break;
   }
   i14 = (HEAP32[i3 >> 2] | 0) != 0;
  }
 } while (0);
 i3 = i2 | 0;
 i13 = HEAP32[i3 >> 2] | 0;
 if ((i13 & 4 | 0) == 0) {
  i22 = 0;
 } else {
  i22 = (i13 & 8 | 0) != 0;
 }
 i13 = i1 + 684 | 0;
 i21 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 i10 = HEAP32[i3 >> 2] | 0;
 if ((i10 & 16 | 0) == 0) {
  i23 = i9;
 } else {
  i23 = (i10 & 128 | 0) != 0 ? 0 : i9;
 }
 L60 : do {
  if ((i23 | 0) == 0) {
   i24 = 0;
   i25 = 0;
  } else {
   i9 = i23;
   while (1) {
    i10 = i9 + 32 | 0;
    if ((HEAP32[i9 + 12 >> 2] & 2048 | 0) == 0) {
     i26 = i10 | 0;
    } else {
     i26 = HEAP32[i10 >> 2] | 0;
    }
    if ((HEAP32[i26 >> 2] | 0) != 0) {
     break;
    }
    i10 = __ZNK7WebCore4Node25parentOrShadowHostElementEv(i9 | 0) | 0;
    if ((i10 | 0) == 0) {
     i24 = 0;
     i25 = 0;
     break L60;
    } else {
     i9 = i10;
    }
   }
   if ((i9 | 0) == 0) {
    i24 = 0;
    i25 = 1;
    break;
   }
   i10 = i9 + 8 | 0;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
   i24 = i9;
   i25 = 1;
  }
 } while (0);
 i26 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = i24;
 do {
  if ((i26 | 0) != 0) {
   i13 = i26 + 8 | 0;
   i23 = i13 | 0;
   i10 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
   HEAP32[i23 >> 2] = i10;
   if ((i10 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
  }
 } while (0);
 i26 = (i21 | 0) == 0;
 if (i26) {
  i27 = 0;
 } else {
  i13 = i21 + 32 | 0;
  if ((HEAP32[i21 + 12 >> 2] & 2048 | 0) == 0) {
   i28 = i13 | 0;
  } else {
   i28 = HEAP32[i13 >> 2] | 0;
  }
  i27 = HEAP32[i28 >> 2] | 0;
 }
 L83 : do {
  if (i25) {
   i28 = i24 + 32 | 0;
   if ((HEAP32[i24 + 12 >> 2] & 2048 | 0) == 0) {
    i29 = i28 | 0;
   } else {
    i29 = HEAP32[i28 >> 2] | 0;
   }
   i28 = HEAP32[i29 >> 2] | 0;
   i13 = i28;
   i10 = (i27 | 0) == 0;
   if (i10 | (i28 | 0) == 0) {
    i30 = 0;
    i31 = i13;
    i32 = i10;
    break;
   } else {
    i33 = i27;
   }
   while (1) {
    i10 = i13;
    while (1) {
     if ((i33 | 0) == (i10 | 0)) {
      i30 = i33;
      i31 = i13;
      i32 = 0;
      break L83;
     }
     i10 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 640 >> 2] & 127](i10) | 0;
     if ((i10 | 0) == 0) {
      break;
     }
    }
    i10 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i33 >> 2] | 0) + 640 >> 2] & 127](i33) | 0;
    if ((i10 | 0) == 0) {
     i30 = 0;
     i31 = i13;
     i32 = 0;
     break;
    } else {
     i33 = i10;
    }
   }
  } else {
   i30 = 0;
   i31 = 0;
   i32 = (i27 | 0) == 0;
  }
 } while (0);
 i33 = i7 + 12 | 0;
 i29 = i7 | 0;
 HEAP32[i29 >> 2] = i33;
 i25 = i7 + 4 | 0;
 HEAP32[i25 >> 2] = 32;
 i13 = i7 + 8 | 0;
 HEAP32[i13 >> 2] = 0;
 i7 = i8 + 12 | 0;
 i9 = i8 | 0;
 HEAP32[i9 >> 2] = i7;
 i10 = i8 + 4 | 0;
 HEAP32[i10 >> 2] = 32;
 i28 = i8 + 8 | 0;
 HEAP32[i28 >> 2] = 0;
 i8 = (i4 | 0) != 0;
 L97 : do {
  if ((i24 | 0) == (i21 | 0) | i8 ^ 1) {
   i34 = 0;
   i35 = 0;
  } else {
   L99 : do {
    if ((i24 | 0) == 0) {
     i36 = 0;
    } else {
     i23 = i24 | 0;
     while (1) {
      i3 = HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0;
      i16 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i23 >> 2] | 0) + 48 >> 2] & 127](i23 | 0) | 0;
      if ((i16 | 0) != 0) {
       if (__ZNK7WebCore16EventListenerMap17containsCapturingERKN3WTF12AtomicStringE(i16 | 0, i3 + 236 | 0) | 0) {
        i36 = 1;
        break L99;
       }
      }
      i3 = i23 | 0;
      do {
       if ((HEAP32[i23 + 12 >> 2] & 4096 | 0) == 0) {
        i20 = 81;
       } else {
        if ((HEAP32[(HEAP32[i23 + 20 >> 2] | 0) + 4 >> 2] | 0) != (i23 | 0)) {
         i20 = 81;
         break;
        }
        i37 = HEAP32[i3 + 92 >> 2] | 0;
       }
      } while (0);
      if ((i20 | 0) == 81) {
       i20 = 0;
       i37 = HEAP32[i23 + 16 >> 2] | 0;
      }
      if ((i37 | 0) == 0) {
       i36 = 0;
       break;
      } else {
       i23 = i37;
      }
     }
    }
   } while (0);
   if (i26) {
    i34 = 0;
    i35 = i36;
    break;
   }
   i23 = i21 | 0;
   while (1) {
    i3 = HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0;
    i16 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i23 >> 2] | 0) + 48 >> 2] & 127](i23 | 0) | 0;
    if ((i16 | 0) != 0) {
     if (__ZNK7WebCore16EventListenerMap17containsCapturingERKN3WTF12AtomicStringE(i16 | 0, i3 + 240 | 0) | 0) {
      i34 = 1;
      i35 = i36;
      break L97;
     }
    }
    i3 = i23 | 0;
    do {
     if ((HEAP32[i23 + 12 >> 2] & 4096 | 0) == 0) {
      i20 = 90;
     } else {
      if ((HEAP32[(HEAP32[i23 + 20 >> 2] | 0) + 4 >> 2] | 0) != (i23 | 0)) {
       i20 = 90;
       break;
      }
      i38 = HEAP32[i3 + 92 >> 2] | 0;
     }
    } while (0);
    if ((i20 | 0) == 90) {
     i20 = 0;
     i38 = HEAP32[i23 + 16 >> 2] | 0;
    }
    if ((i38 | 0) == 0) {
     i34 = 0;
     i35 = i36;
     break;
    } else {
     i23 = i38;
    }
   }
  }
 } while (0);
 do {
  if ((i27 | 0) != (i31 | 0)) {
   L128 : do {
    if (!(i26 | i32 ^ 1)) {
     i38 = i21;
     L129 : while (1) {
      do {
       if (i22) {
        if ((HEAP32[i38 + 12 >> 2] & 1024 | 0) == 0) {
         break;
        }
        if (__ZNK7WebCore7Element32isUserActionElementInActiveChainEv(i38) | 0) {
         i20 = 97;
        }
       } else {
        i20 = 97;
       }
      } while (0);
      do {
       if ((i20 | 0) == 97) {
        i20 = 0;
        i36 = HEAP32[i13 >> 2] | 0;
        if ((i36 | 0) != (HEAP32[i25 >> 2] | 0)) {
         HEAP32[(HEAP32[i29 >> 2] | 0) + (i36 << 2) >> 2] = i38;
         i37 = i38 + 8 | 0;
         HEAP32[i37 >> 2] = (HEAP32[i37 >> 2] | 0) + 1;
         HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
         break;
        }
        i37 = i36 + 1 | 0;
        i23 = i37 + (i36 >>> 2) | 0;
        i3 = i23 >>> 0 > 16 >>> 0 ? i23 : 16;
        i23 = i3 >>> 0 > i37 >>> 0 ? i3 : i37;
        do {
         if (i36 >>> 0 < i23 >>> 0) {
          i37 = HEAP32[i29 >> 2] | 0;
          if (i23 >>> 0 > 32 >>> 0) {
           if (i23 >>> 0 > 1073741823 >>> 0) {
            break L129;
           }
           i3 = __ZN3WTF18fastMallocGoodSizeEj(i23 << 2) | 0;
           HEAP32[i25 >> 2] = i3 >>> 2;
           i16 = __ZN3WTF10fastMallocEj(i3) | 0;
           HEAP32[i29 >> 2] = i16;
           i39 = i16;
          } else {
           HEAP32[i29 >> 2] = i33;
           HEAP32[i25 >> 2] = 32;
           i39 = i33;
          }
          i16 = i37;
          _memcpy(i39 | 0, i16 | 0, i36 << 2) | 0;
          if ((i33 | 0) == (i37 | 0) | (i37 | 0) == 0) {
           break;
          }
          if ((HEAP32[i29 >> 2] | 0) == (i37 | 0)) {
           HEAP32[i29 >> 2] = 0;
           HEAP32[i25 >> 2] = 0;
          }
          __ZN3WTF8fastFreeEPv(i16);
         }
        } while (0);
        HEAP32[(HEAP32[i29 >> 2] | 0) + (HEAP32[i13 >> 2] << 2) >> 2] = i38;
        i36 = i38 + 8 | 0;
        HEAP32[i36 >> 2] = (HEAP32[i36 >> 2] | 0) + 1;
        HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
       }
      } while (0);
      i38 = HEAP32[i38 + 16 >> 2] | 0;
      if ((i38 | 0) == 0) {
       break L128;
      }
      if ((HEAP32[i38 + 12 >> 2] & 4 | 0) == 0) {
       break L128;
      }
      if ((i38 | 0) == 0) {
       break L128;
      }
     }
     _WTFCrash();
    }
   } while (0);
   L156 : do {
    if (!((i27 | 0) == 0 | (i27 | 0) == (i30 | 0))) {
     i38 = i27;
     L157 : while (1) {
      do {
       if ((HEAP32[i38 + 20 >> 2] & 128 | 0) == 0) {
        i36 = HEAP32[i38 + 4 >> 2] | 0;
        i23 = i36;
        if ((i36 | 0) == 0) {
         break;
        }
        if (i22) {
         if ((HEAP32[i36 + 12 >> 2] & 1024 | 0) == 0) {
          break;
         }
         if (!(__ZNK7WebCore7Element32isUserActionElementInActiveChainEv(i23) | 0)) {
          break;
         }
        }
        i16 = HEAP32[i13 >> 2] | 0;
        if ((i16 | 0) != (HEAP32[i25 >> 2] | 0)) {
         HEAP32[(HEAP32[i29 >> 2] | 0) + (i16 << 2) >> 2] = i23;
         i37 = i36 + 8 | 0;
         HEAP32[i37 >> 2] = (HEAP32[i37 >> 2] | 0) + 1;
         HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
         break;
        }
        i37 = i16 + 1 | 0;
        i3 = i37 + (i16 >>> 2) | 0;
        i11 = i3 >>> 0 > 16 >>> 0 ? i3 : 16;
        i3 = i11 >>> 0 > i37 >>> 0 ? i11 : i37;
        do {
         if (i16 >>> 0 < i3 >>> 0) {
          i37 = HEAP32[i29 >> 2] | 0;
          if (i3 >>> 0 > 32 >>> 0) {
           if (i3 >>> 0 > 1073741823 >>> 0) {
            break L157;
           }
           i11 = __ZN3WTF18fastMallocGoodSizeEj(i3 << 2) | 0;
           HEAP32[i25 >> 2] = i11 >>> 2;
           i15 = __ZN3WTF10fastMallocEj(i11) | 0;
           HEAP32[i29 >> 2] = i15;
           i40 = i15;
          } else {
           HEAP32[i29 >> 2] = i33;
           HEAP32[i25 >> 2] = 32;
           i40 = i33;
          }
          i15 = i37;
          _memcpy(i40 | 0, i15 | 0, i16 << 2) | 0;
          if ((i33 | 0) == (i37 | 0) | (i37 | 0) == 0) {
           break;
          }
          if ((HEAP32[i29 >> 2] | 0) == (i37 | 0)) {
           HEAP32[i29 >> 2] = 0;
           HEAP32[i25 >> 2] = 0;
          }
          __ZN3WTF8fastFreeEPv(i15);
         }
        } while (0);
        HEAP32[(HEAP32[i29 >> 2] | 0) + (HEAP32[i13 >> 2] << 2) >> 2] = i23;
        i16 = i36 + 8 | 0;
        HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
        HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
       }
      } while (0);
      i38 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i38 >> 2] | 0) + 640 >> 2] & 127](i38) | 0;
      if ((i38 | 0) == 0 | (i38 | 0) == (i30 | 0)) {
       break L156;
      }
     }
     _WTFCrash();
    }
   } while (0);
   if (i26) {
    break;
   }
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i21 >> 2] | 0) + 120 >> 2] & 127](i21 | 0) | 0)) {
    break;
   }
   i38 = __ZNK7WebCore21HTMLFrameOwnerElement15contentDocumentEv(i21) | 0;
   if ((i38 | 0) == 0) {
    break;
   }
   __ZN7WebCore8Document22updateHoverActiveStateERKNS_14HitTestRequestEPNS_7ElementEPKNS_18PlatformMouseEventENS_23StyleResolverUpdateFlagE(i38, i2, 0, i4, 2);
  }
 } while (0);
 L188 : do {
  if ((i31 | 0) != 0) {
   i2 = i31;
   L189 : while (1) {
    do {
     if ((HEAP32[i2 + 20 >> 2] & 128 | 0) == 0) {
      i40 = HEAP32[i2 + 4 >> 2] | 0;
      i27 = i40;
      if ((i40 | 0) == 0) {
       break;
      }
      if (i22) {
       if ((HEAP32[i40 + 12 >> 2] & 1024 | 0) == 0) {
        break;
       }
       if (!(__ZNK7WebCore7Element32isUserActionElementInActiveChainEv(i27) | 0)) {
        break;
       }
      }
      i39 = HEAP32[i28 >> 2] | 0;
      if ((i39 | 0) != (HEAP32[i10 >> 2] | 0)) {
       HEAP32[(HEAP32[i9 >> 2] | 0) + (i39 << 2) >> 2] = i27;
       i32 = i40 + 8 | 0;
       HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + 1;
       HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 1;
       break;
      }
      i32 = i39 + 1 | 0;
      i38 = i32 + (i39 >>> 2) | 0;
      i16 = i38 >>> 0 > 16 >>> 0 ? i38 : 16;
      i38 = i16 >>> 0 > i32 >>> 0 ? i16 : i32;
      do {
       if (i39 >>> 0 < i38 >>> 0) {
        i32 = HEAP32[i9 >> 2] | 0;
        if (i38 >>> 0 > 32 >>> 0) {
         if (i38 >>> 0 > 1073741823 >>> 0) {
          break L189;
         }
         i16 = __ZN3WTF18fastMallocGoodSizeEj(i38 << 2) | 0;
         HEAP32[i10 >> 2] = i16 >>> 2;
         i3 = __ZN3WTF10fastMallocEj(i16) | 0;
         HEAP32[i9 >> 2] = i3;
         i41 = i3;
        } else {
         HEAP32[i9 >> 2] = i7;
         HEAP32[i10 >> 2] = 32;
         i41 = i7;
        }
        i3 = i32;
        _memcpy(i41 | 0, i3 | 0, i39 << 2) | 0;
        if ((i7 | 0) == (i32 | 0) | (i32 | 0) == 0) {
         break;
        }
        if ((HEAP32[i9 >> 2] | 0) == (i32 | 0)) {
         HEAP32[i9 >> 2] = 0;
         HEAP32[i10 >> 2] = 0;
        }
        __ZN3WTF8fastFreeEPv(i3);
       }
      } while (0);
      HEAP32[(HEAP32[i9 >> 2] | 0) + (HEAP32[i28 >> 2] << 2) >> 2] = i27;
      i39 = i40 + 8 | 0;
      HEAP32[i39 >> 2] = (HEAP32[i39 >> 2] | 0) + 1;
      HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 1;
     }
    } while (0);
    i2 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 640 >> 2] & 127](i2) | 0;
    if ((i2 | 0) == 0) {
     break L188;
    }
   }
   _WTFCrash();
  }
 } while (0);
 i41 = HEAP32[i13 >> 2] | 0;
 L216 : do {
  if ((i41 | 0) != 0) {
   i22 = 0;
   i31 = i41;
   L217 : while (1) {
    if (i31 >>> 0 <= i22 >>> 0) {
     i20 = 158;
     break;
    }
    i2 = HEAP32[(HEAP32[i29 >> 2] | 0) + (i22 << 2) >> 2] | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 336 >> 2] & 127](i2, 0);
    do {
     if (i8) {
      if (!i34) {
       if ((HEAP32[i13 >> 2] | 0) >>> 0 <= i22 >>> 0) {
        i20 = 162;
        break L217;
       }
       i2 = HEAP32[(HEAP32[i29 >> 2] | 0) + (i22 << 2) >> 2] | 0;
       i39 = HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0;
       i38 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 48 >> 2] & 127](i2 | 0) | 0;
       if ((i38 | 0) == 0) {
        break;
       }
       if (!(__ZNK7WebCore16EventListenerMap8containsERKN3WTF12AtomicStringE(i38 | 0, i39 + 240 | 0) | 0)) {
        break;
       }
      }
      if ((HEAP32[i13 >> 2] | 0) >>> 0 <= i22 >>> 0) {
       i20 = 166;
       break L217;
      }
      i39 = HEAP32[(HEAP32[i29 >> 2] | 0) + (i22 << 2) >> 2] | 0;
      __ZN7WebCore7Element18dispatchMouseEventERKNS_18PlatformMouseEventERKN3WTF12AtomicStringEiPS0_(i39, i4, (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 240 | 0, 0, i24) | 0;
     }
    } while (0);
    i39 = i22 + 1 | 0;
    if (i39 >>> 0 >= i41 >>> 0) {
     break L216;
    }
    i22 = i39;
    i31 = HEAP32[i13 >> 2] | 0;
   }
   if ((i20 | 0) == 158) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i20 | 0) == 162) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i20 | 0) == 166) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
  }
 } while (0);
 i41 = HEAP32[i28 >> 2] | 0;
 L235 : do {
  if ((i41 | 0) != 0) {
   i24 = (i30 | 0) == 0;
   i34 = i30 + 20 | 0;
   i31 = i30 + 4 | 0;
   i22 = 0;
   i39 = 0;
   L237 : while (1) {
    if (i14) {
     if ((HEAP32[i28 >> 2] | 0) >>> 0 <= i39 >>> 0) {
      i20 = 174;
      break;
     }
     i38 = HEAP32[(HEAP32[i9 >> 2] | 0) + (i39 << 2) >> 2] | 0;
     FUNCTION_TABLE_viii[HEAP32[(HEAP32[i38 >> 2] | 0) + 332 >> 2] & 31](i38, 1, 0);
    }
    do {
     if (i24) {
      if (i22) {
       i42 = 1;
       break;
      }
      i43 = HEAP32[i28 >> 2] | 0;
      i20 = 184;
     } else {
      i38 = HEAP32[i28 >> 2] | 0;
      if (i38 >>> 0 <= i39 >>> 0) {
       i20 = 178;
       break L237;
      }
      if ((HEAP32[i34 >> 2] & 128 | 0) == 0) {
       i44 = HEAP32[i31 >> 2] | 0;
      } else {
       i44 = 0;
      }
      if ((HEAP32[(HEAP32[i9 >> 2] | 0) + (i39 << 2) >> 2] | 0) == (i44 | 0) | i22) {
       i42 = 1;
      } else {
       i43 = i38;
       i20 = 184;
      }
     }
    } while (0);
    do {
     if ((i20 | 0) == 184) {
      i20 = 0;
      if (i43 >>> 0 <= i39 >>> 0) {
       i20 = 185;
       break L237;
      }
      i38 = HEAP32[(HEAP32[i9 >> 2] | 0) + (i39 << 2) >> 2] | 0;
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i38 >> 2] | 0) + 336 >> 2] & 127](i38, 1);
      if (!i8) {
       i42 = 0;
       break;
      }
      if (!i35) {
       if ((HEAP32[i28 >> 2] | 0) >>> 0 <= i39 >>> 0) {
        i20 = 189;
        break L237;
       }
       i38 = HEAP32[(HEAP32[i9 >> 2] | 0) + (i39 << 2) >> 2] | 0;
       i2 = HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0;
       i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i38 >> 2] | 0) + 48 >> 2] & 127](i38 | 0) | 0;
       if ((i3 | 0) == 0) {
        i42 = 0;
        break;
       }
       if (!(__ZNK7WebCore16EventListenerMap8containsERKN3WTF12AtomicStringE(i3 | 0, i2 + 236 | 0) | 0)) {
        i42 = 0;
        break;
       }
      }
      if ((HEAP32[i28 >> 2] | 0) >>> 0 <= i39 >>> 0) {
       i20 = 193;
       break L237;
      }
      i2 = HEAP32[(HEAP32[i9 >> 2] | 0) + (i39 << 2) >> 2] | 0;
      __ZN7WebCore7Element18dispatchMouseEventERKNS_18PlatformMouseEventERKN3WTF12AtomicStringEiPS0_(i2, i4, (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 236 | 0, 0, i21) | 0;
      i42 = 0;
     }
    } while (0);
    i2 = i39 + 1 | 0;
    if (i2 >>> 0 < i41 >>> 0) {
     i22 = i42;
     i39 = i2;
    } else {
     break L235;
    }
   }
   if ((i20 | 0) == 174) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i20 | 0) == 178) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i20 | 0) == 185) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i20 | 0) == 189) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i20 | 0) == 193) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
  }
 } while (0);
 if ((i5 | 0) == 2) {
  __ZN7WebCore8Document19updateStyleIfNeededEv(i1);
 }
 i1 = HEAP32[i28 >> 2] | 0;
 if ((i1 | 0) != 0) {
  i5 = HEAP32[i9 >> 2] | 0;
  i20 = i5 + (i1 << 2) | 0;
  i1 = i5;
  while (1) {
   i5 = HEAP32[i1 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i42 = i5 + 8 | 0;
     i41 = i42 | 0;
     i4 = (HEAP32[i41 >> 2] | 0) - 1 | 0;
     HEAP32[i41 >> 2] = i4;
     if ((i4 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i42 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i42 - 8 | 0);
    }
   } while (0);
   i1 = i1 + 4 | 0;
   if ((i1 | 0) == (i20 | 0)) {
    break;
   }
  }
  HEAP32[i28 >> 2] = 0;
 }
 i28 = HEAP32[i9 >> 2] | 0;
 if (!((i7 | 0) == (i28 | 0) | (i28 | 0) == 0)) {
  HEAP32[i9 >> 2] = 0;
  HEAP32[i10 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i28);
 }
 i28 = HEAP32[i13 >> 2] | 0;
 if ((i28 | 0) != 0) {
  i10 = HEAP32[i29 >> 2] | 0;
  i9 = i10 + (i28 << 2) | 0;
  i28 = i10;
  while (1) {
   i10 = HEAP32[i28 >> 2] | 0;
   do {
    if ((i10 | 0) != 0) {
     i7 = i10 + 8 | 0;
     i20 = i7 | 0;
     i1 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
     HEAP32[i20 >> 2] = i1;
     if ((i1 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
    }
   } while (0);
   i28 = i28 + 4 | 0;
   if ((i28 | 0) == (i9 | 0)) {
    break;
   }
  }
  HEAP32[i13 >> 2] = 0;
 }
 i13 = HEAP32[i29 >> 2] | 0;
 if (!((i33 | 0) == (i13 | 0) | (i13 | 0) == 0)) {
  HEAP32[i29 >> 2] = 0;
  HEAP32[i25 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i13);
 }
 if (i26) {
  STACKTOP = i6;
  return;
 }
 i26 = i21 + 8 | 0;
 i21 = i26 | 0;
 i13 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
 HEAP32[i21 >> 2] = i13;
 if ((i13 | 0) >= 1) {
  STACKTOP = i6;
  return;
 }
 if ((HEAP32[i26 + 8 >> 2] | 0) != 0) {
  STACKTOP = i6;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i26 - 8 | 0);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore8Document17setFocusedElementEN3WTF10PassRefPtrINS_7ElementEEENS_14FocusDirectionE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i2 | 0;
 i2 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = 0;
 i12 = (i2 | 0) == 0;
 if (i12) {
  i13 = 3;
 } else {
  if ((HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0) == (i1 | 0)) {
   i13 = 3;
  } else {
   i14 = i2;
   i15 = 1;
  }
 }
 do {
  if ((i13 | 0) == 3) {
   i16 = i1 + 680 | 0;
   i17 = HEAP32[i16 >> 2] | 0;
   do {
    if ((i17 | 0) == (i2 | 0)) {
     i18 = 1;
     i19 = i2;
    } else {
     if ((HEAP8[i1 + 1433 | 0] & 1) != 0) {
      i18 = 0;
      i19 = i2;
      break;
     }
     HEAP32[i16 >> 2] = 0;
     i20 = (i17 | 0) == 0;
     L8 : do {
      if (i20) {
       i21 = 0;
       i22 = i2;
      } else {
       i23 = i17 + 12 | 0;
       do {
        if ((HEAP32[i23 >> 2] & 1024 | 0) != 0) {
         if (!(__ZNK7WebCore7Element25isUserActionElementActiveEv(i17) | 0)) {
          break;
         }
         FUNCTION_TABLE_viii[HEAP32[(HEAP32[i17 >> 2] | 0) + 332 >> 2] & 31](i17, 0, 0);
        }
       } while (0);
       FUNCTION_TABLE_vii[HEAP32[(HEAP32[i17 >> 2] | 0) + 340 >> 2] & 127](i17, 0);
       do {
        if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i17 >> 2] | 0) + 448 >> 2] & 127](i17) | 0) {
         if ((HEAP8[i17 + 84 | 0] & 8) == 0) {
          break;
         }
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 620 >> 2] & 127](i17);
        }
       } while (0);
       i24 = HEAP32[(HEAP32[i17 >> 2] | 0) + 516 >> 2] | 0;
       i25 = i6 | 0;
       HEAP32[i25 >> 2] = i2;
       if (!i12) {
        i26 = i2 + 8 | 0;
        HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 1;
       }
       FUNCTION_TABLE_vii[i24 & 127](i17, i6);
       i24 = HEAP32[i25 >> 2] | 0;
       do {
        if ((i24 | 0) != 0) {
         i25 = i24 + 8 | 0;
         i26 = i25 | 0;
         i27 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
         HEAP32[i26 >> 2] = i27;
         if ((i27 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i25 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i25 - 8 | 0);
        }
       } while (0);
       i24 = (HEAP32[i16 >> 2] | 0) == 0;
       do {
        if (i24 | i12) {
         i28 = i24 & 1 ^ 1;
         i29 = i24 ? i2 : 0;
        } else {
         i25 = i2 + 8 | 0;
         i27 = i25 | 0;
         i26 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
         HEAP32[i27 >> 2] = i26;
         if ((i26 | 0) >= 1) {
          i28 = 1;
          i29 = 0;
          break;
         }
         if ((HEAP32[i25 + 8 >> 2] | 0) != 0) {
          i28 = 1;
          i29 = 0;
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i25 - 8 | 0);
         i28 = 1;
         i29 = 0;
        }
       } while (0);
       i24 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 160 | 0;
       i25 = i7 | 0;
       HEAP32[i25 >> 2] = i29;
       i26 = (i29 | 0) == 0;
       if (!i26) {
        i27 = i29 + 8 | 0;
        HEAP32[i27 >> 2] = (HEAP32[i27 >> 2] | 0) + 1;
       }
       __ZN7WebCore7Element21dispatchFocusOutEventERKN3WTF12AtomicStringENS1_10PassRefPtrIS0_EE(i17, i24, i7);
       i24 = HEAP32[i25 >> 2] | 0;
       do {
        if ((i24 | 0) != 0) {
         i25 = i24 + 8 | 0;
         i27 = i25 | 0;
         i30 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
         HEAP32[i27 >> 2] = i30;
         if ((i30 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i25 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i25 - 8 | 0);
        }
       } while (0);
       i24 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 396 | 0;
       i25 = i8 | 0;
       HEAP32[i25 >> 2] = i29;
       if (!i26) {
        i30 = i29 + 8 | 0;
        HEAP32[i30 >> 2] = (HEAP32[i30 >> 2] | 0) + 1;
       }
       __ZN7WebCore7Element21dispatchFocusOutEventERKN3WTF12AtomicStringENS1_10PassRefPtrIS0_EE(i17, i24, i8);
       i24 = HEAP32[i25 >> 2] | 0;
       do {
        if ((i24 | 0) != 0) {
         i25 = i24 + 8 | 0;
         i30 = i25 | 0;
         i27 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
         HEAP32[i30 >> 2] = i27;
         if ((i27 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i25 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i25 - 8 | 0);
        }
       } while (0);
       i24 = (HEAP32[i16 >> 2] | 0) == 0;
       do {
        if (i24 | i26) {
         i31 = i24 ? i28 : 1;
         i32 = i24 ? i29 : 0;
        } else {
         i25 = i29 + 8 | 0;
         i27 = i25 | 0;
         i30 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
         HEAP32[i27 >> 2] = i30;
         if ((i30 | 0) >= 1) {
          i31 = 1;
          i32 = 0;
          break;
         }
         if ((HEAP32[i25 + 8 >> 2] | 0) != 0) {
          i31 = 1;
          i32 = 0;
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i25 - 8 | 0);
         i31 = 1;
         i32 = 0;
        }
       } while (0);
       i24 = i1 + 332 | 0;
       if (__ZNK7WebCore4Node21isRootEditableElementEv(i17 | 0) | 0) {
        __ZN7WebCore6Editor13didEndEditingEv(HEAP32[(HEAP32[i24 >> 2] | 0) + 464 >> 2] | 0);
       }
       i26 = HEAP32[i24 >> 2] | 0;
       if ((i26 | 0) == 0) {
        i21 = (i31 & 1) != 0;
        i22 = i32;
        break;
       }
       i25 = (i31 & 1) != 0;
       if ((HEAP32[i26 + 452 >> 2] | 0) == 0) {
        i21 = i25;
        i22 = i32;
        break;
       }
       i26 = i17 + 32 | 0;
       if ((HEAP32[i23 >> 2] & 2048 | 0) == 0) {
        i33 = i26 | 0;
       } else {
        i33 = HEAP32[i26 >> 2] | 0;
       }
       i26 = HEAP32[i33 >> 2] | 0;
       do {
        if ((i26 | 0) != 0) {
         if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i26 >> 2] | 0) + 228 >> 2] & 127](i26) | 0)) {
          break;
         }
         i30 = HEAP32[i26 + 108 >> 2] | 0;
         if ((i30 | 0) == 0) {
          break;
         }
         FUNCTION_TABLE_vii[HEAP32[(HEAP32[i30 >> 2] | 0) + 20 >> 2] & 127](i30, 0);
         i21 = i25;
         i22 = i32;
         break L8;
        }
       } while (0);
       i26 = HEAP32[i24 >> 2] | 0;
       if ((i26 | 0) == 0) {
        i34 = 0;
       } else {
        i34 = HEAP32[i26 + 452 >> 2] | 0;
       }
       __ZN7WebCore6Widget8setFocusEb(i34 | 0, 0);
       i21 = i25;
       i22 = i32;
      }
     } while (0);
     L72 : do {
      if ((i22 | 0) == 0) {
       i13 = 109;
      } else {
       if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i22 >> 2] | 0) + 348 >> 2] & 127](i22) | 0)) {
        i13 = 109;
        break;
       }
       i26 = i22 | 0;
       do {
        if (__ZNK7WebCore4Node21isRootEditableElementEv(i26) | 0) {
         i23 = __ZNK7WebCore4Node19rootEditableElementEv(i26) | 0;
         i30 = HEAP32[(HEAP32[(HEAP32[i22 + 20 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0;
         if ((i30 | 0) == 0 | (i23 | 0) == 0) {
          i35 = 0;
          break L72;
         }
         i27 = HEAP32[i30 + 464 >> 2] | 0;
         __ZN7WebCore15rangeOfContentsERNS_4NodeE(i5, i23 | 0);
         i23 = i5 | 0;
         i30 = __ZN7WebCore6Editor18shouldBeginEditingEPNS_5RangeE(i27, HEAP32[i23 >> 2] | 0) | 0;
         i27 = HEAP32[i23 >> 2] | 0;
         if ((i27 | 0) == 0) {
          if (i30) {
           break;
          } else {
           i35 = 0;
           break L72;
          }
         }
         i23 = i27 | 0;
         i36 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
         if ((i36 | 0) == 0) {
          __ZN7WebCore5RangeD1Ev(i27);
          __ZN3WTF8fastFreeEPv(i27);
          if (i30) {
           break;
          } else {
           i35 = 0;
           break L72;
          }
         } else {
          HEAP32[i23 >> 2] = i36;
          if (i30) {
           break;
          } else {
           i35 = 0;
           break L72;
          }
         }
        }
       } while (0);
       i26 = i22 + 8 | 0;
       HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 1;
       i26 = HEAP32[i16 >> 2] | 0;
       HEAP32[i16 >> 2] = i22;
       do {
        if ((i26 | 0) != 0) {
         i25 = i26 + 8 | 0;
         i24 = i25 | 0;
         i30 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
         HEAP32[i24 >> 2] = i30;
         if ((i30 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i25 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i25 - 8 | 0);
        }
       } while (0);
       i26 = HEAP32[i16 >> 2] | 0;
       i25 = HEAP32[(HEAP32[i26 >> 2] | 0) + 512 >> 2] | 0;
       i30 = i9 | 0;
       HEAP32[i30 >> 2] = i17;
       if (!i20) {
        i24 = i17 + 8 | 0;
        HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 1;
       }
       FUNCTION_TABLE_viii[i25 & 31](i26, i9, i3);
       i26 = HEAP32[i30 >> 2] | 0;
       do {
        if ((i26 | 0) != 0) {
         i30 = i26 + 8 | 0;
         i25 = i30 | 0;
         i24 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
         HEAP32[i25 >> 2] = i24;
         if ((i24 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i30 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i30 - 8 | 0);
        }
       } while (0);
       if ((HEAP32[i16 >> 2] | 0) != (i22 | 0)) {
        i35 = 0;
        break;
       }
       i26 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 156 | 0;
       i30 = i10 | 0;
       HEAP32[i30 >> 2] = i17;
       if (!i20) {
        i24 = i17 + 8 | 0;
        HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 1;
       }
       __ZN7WebCore7Element20dispatchFocusInEventERKN3WTF12AtomicStringENS1_10PassRefPtrIS0_EE(i22, i26, i10);
       i26 = HEAP32[i30 >> 2] | 0;
       do {
        if ((i26 | 0) != 0) {
         i30 = i26 + 8 | 0;
         i24 = i30 | 0;
         i25 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
         HEAP32[i24 >> 2] = i25;
         if ((i25 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i30 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i30 - 8 | 0);
        }
       } while (0);
       if ((HEAP32[i16 >> 2] | 0) != (i22 | 0)) {
        i35 = 0;
        break;
       }
       i26 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 392 | 0;
       i30 = i11 | 0;
       HEAP32[i30 >> 2] = i17;
       if (!i20) {
        i25 = i17 + 8 | 0;
        HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + 1;
       }
       __ZN7WebCore7Element20dispatchFocusInEventERKN3WTF12AtomicStringENS1_10PassRefPtrIS0_EE(i22, i26, i11);
       i26 = HEAP32[i30 >> 2] | 0;
       do {
        if ((i26 | 0) != 0) {
         i30 = i26 + 8 | 0;
         i25 = i30 | 0;
         i24 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
         HEAP32[i25 >> 2] = i24;
         if ((i24 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i30 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i30 - 8 | 0);
        }
       } while (0);
       if ((HEAP32[i16 >> 2] | 0) != (i22 | 0)) {
        i35 = 0;
        break;
       }
       FUNCTION_TABLE_vii[HEAP32[(HEAP32[i22 >> 2] | 0) + 340 >> 2] & 127](i22, 1);
       i26 = i1 + 332 | 0;
       if (__ZNK7WebCore4Node21isRootEditableElementEv(HEAP32[i16 >> 2] | 0) | 0) {
        __ZN7WebCore6Editor15didBeginEditingEv(HEAP32[(HEAP32[i26 >> 2] | 0) + 464 >> 2] | 0);
       }
       i30 = HEAP32[i26 >> 2] | 0;
       if ((i30 | 0) == 0) {
        i13 = 109;
        break;
       }
       if ((HEAP32[i30 + 452 >> 2] | 0) == 0) {
        i13 = 109;
        break;
       }
       i30 = HEAP32[i16 >> 2] | 0;
       do {
        if ((i30 | 0) != 0) {
         i24 = i30 + 32 | 0;
         if ((HEAP32[i30 + 12 >> 2] & 2048 | 0) == 0) {
          i37 = i24 | 0;
         } else {
          i37 = HEAP32[i24 >> 2] | 0;
         }
         i24 = HEAP32[i37 >> 2] | 0;
         if ((i24 | 0) == 0) {
          break;
         }
         if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i24 >> 2] | 0) + 228 >> 2] & 127](i24) | 0)) {
          break;
         }
         if ((HEAP32[i24 + 108 >> 2] | 0) == 0) {
          break;
         }
         __ZN7WebCore8Document12updateLayoutEv(i1);
         i24 = HEAP32[i16 >> 2] | 0;
         if ((i24 | 0) == 0) {
          break;
         }
         i25 = i24 + 32 | 0;
         if ((HEAP32[i24 + 12 >> 2] & 2048 | 0) == 0) {
          i38 = i25 | 0;
         } else {
          i38 = HEAP32[i25 >> 2] | 0;
         }
         i25 = HEAP32[i38 >> 2] | 0;
         if ((i25 | 0) == 0) {
          break;
         }
         if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i25 >> 2] | 0) + 228 >> 2] & 127](i25) | 0)) {
          break;
         }
         i24 = HEAP32[i25 + 108 >> 2] | 0;
         if ((i24 | 0) == 0) {
          break;
         }
         FUNCTION_TABLE_vii[HEAP32[(HEAP32[i24 >> 2] | 0) + 20 >> 2] & 127](i24, 1);
         i13 = 109;
         break L72;
        }
       } while (0);
       i30 = HEAP32[i26 >> 2] | 0;
       if ((i30 | 0) == 0) {
        i39 = 0;
       } else {
        i39 = HEAP32[i30 + 452 >> 2] | 0;
       }
       __ZN7WebCore6Widget8setFocusEb(i39 | 0, 1);
       i13 = 109;
      }
     } while (0);
     do {
      if ((i13 | 0) == 109) {
       if (i21) {
        i35 = 0;
        break;
       }
       i30 = HEAP32[i1 + 332 >> 2] | 0;
       if ((i30 | 0) == 0) {
        i35 = 1;
        break;
       }
       i24 = HEAP32[i30 + 32 >> 2] | 0;
       if ((i24 | 0) == 0) {
        i35 = 1;
        break;
       }
       __ZNK7WebCore6Chrome21focusedElementChangedEPNS_7ElementE(HEAP32[i24 + 20 >> 2] | 0, HEAP32[i16 >> 2] | 0);
       i35 = 1;
      }
     } while (0);
     __ZN7WebCore8Document19updateStyleIfNeededEv(i1);
     if (i20) {
      i18 = i35;
      i19 = i22;
      break;
     }
     i24 = i17 + 8 | 0;
     i30 = i24 | 0;
     i25 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
     HEAP32[i30 >> 2] = i25;
     if ((i25 | 0) >= 1) {
      i18 = i35;
      i19 = i22;
      break;
     }
     if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
      i18 = i35;
      i19 = i22;
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
     i18 = i35;
     i19 = i22;
    }
   } while (0);
   if ((i19 | 0) == 0) {
    i40 = i18;
   } else {
    i14 = i19;
    i15 = i18;
    break;
   }
   STACKTOP = i4;
   return i40 | 0;
  }
 } while (0);
 i18 = i14 + 8 | 0;
 i14 = i18 | 0;
 i19 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
 HEAP32[i14 >> 2] = i19;
 if ((i19 | 0) >= 1) {
  i40 = i15;
  STACKTOP = i4;
  return i40 | 0;
 }
 if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
  i40 = i15;
  STACKTOP = i4;
  return i40 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
 i40 = i15;
 STACKTOP = i4;
 return i40 | 0;
}
function __ZN7WebCore8Document10importNodeEPNS_4NodeEbRi(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 176 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 i11 = i6 + 32 | 0;
 i12 = i6 + 40 | 0;
 i13 = i6 + 48 | 0;
 i14 = i6 + 56 | 0;
 i15 = i6 + 64 | 0;
 i16 = i6 + 72 | 0;
 i17 = i6 + 80 | 0;
 i18 = i6 + 88 | 0;
 i19 = i6 + 96 | 0;
 i20 = i6 + 104 | 0;
 i21 = i6 + 112 | 0;
 i22 = i6 + 120 | 0;
 i23 = i6 + 128 | 0;
 i24 = i6 + 136 | 0;
 i25 = i6 + 144 | 0;
 i26 = i6 + 152 | 0;
 i27 = i6 + 160 | 0;
 i28 = i6 + 168 | 0;
 HEAP32[i5 >> 2] = 0;
 if ((i3 | 0) == 0) {
  HEAP32[i5 >> 2] = 9;
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i6;
  return;
 }
 L5 : do {
  switch (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 76 >> 2] & 127](i3) | 0) {
  case 3:
   {
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 68 >> 2] & 127](i9, i3);
    __ZN7WebCore4Text6createERNS_8DocumentERKN3WTF6StringE(i8, i2, i9);
    i29 = i8 | 0;
    i30 = HEAP32[i29 >> 2] | 0;
    HEAP32[i29 >> 2] = 0;
    HEAP32[i1 >> 2] = i30;
    i30 = HEAP32[i9 >> 2] | 0;
    if ((i30 | 0) == 0) {
     STACKTOP = i6;
     return;
    }
    i29 = i30 | 0;
    i31 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
    if ((i31 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i30);
     STACKTOP = i6;
     return;
    } else {
     HEAP32[i29 >> 2] = i31;
     STACKTOP = i6;
     return;
    }
    break;
   }
  case 4:
   {
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 68 >> 2] & 127](i11, i3);
    if ((HEAP8[i2 + 1576 | 0] & 1) == 0) {
     __ZN7WebCore12CDATASection6createERNS_8DocumentERKN3WTF6StringE(i10, i2, i11);
     i32 = HEAP32[i10 >> 2] | 0;
    } else {
     HEAP32[i5 >> 2] = 9;
     HEAP32[i10 >> 2] = 0;
     i32 = 0;
    }
    HEAP32[i10 >> 2] = 0;
    HEAP32[i1 >> 2] = i32;
    i31 = HEAP32[i11 >> 2] | 0;
    if ((i31 | 0) == 0) {
     STACKTOP = i6;
     return;
    }
    i29 = i31 | 0;
    i30 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
    if ((i30 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i31);
     STACKTOP = i6;
     return;
    } else {
     HEAP32[i29 >> 2] = i30;
     STACKTOP = i6;
     return;
    }
    break;
   }
  case 5:
   {
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 64 >> 2] & 127](i13, i3);
    do {
     if (__ZN7WebCore8Document11isValidNameERKN3WTF6StringE(i13) | 0) {
      if ((HEAP8[i2 + 1576 | 0] & 1) == 0) {
       __ZN7WebCore15EntityReference6createERNS_8DocumentERKN3WTF6StringE(i12, i2, i13);
       i33 = HEAP32[i12 >> 2] | 0;
       break;
      } else {
       HEAP32[i5 >> 2] = 9;
       HEAP32[i12 >> 2] = 0;
       i33 = 0;
       break;
      }
     } else {
      HEAP32[i5 >> 2] = 5;
      HEAP32[i12 >> 2] = 0;
      i33 = 0;
     }
    } while (0);
    HEAP32[i12 >> 2] = 0;
    HEAP32[i1 >> 2] = i33;
    i30 = HEAP32[i13 >> 2] | 0;
    if ((i30 | 0) == 0) {
     STACKTOP = i6;
     return;
    }
    i29 = i30 | 0;
    i31 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
    if ((i31 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i30);
     STACKTOP = i6;
     return;
    } else {
     HEAP32[i29 >> 2] = i31;
     STACKTOP = i6;
     return;
    }
    break;
   }
  case 7:
   {
    i31 = i3;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i31 >> 2] | 0) + 64 >> 2] & 127](i15, i3);
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i31 >> 2] | 0) + 68 >> 2] & 127](i16, i3);
    do {
     if (__ZN7WebCore8Document11isValidNameERKN3WTF6StringE(i15) | 0) {
      if ((HEAP8[i2 + 1576 | 0] & 1) == 0) {
       __ZN7WebCore21ProcessingInstruction6createERNS_8DocumentERKN3WTF6StringES6_(i14, i2, i15, i16);
       i34 = HEAP32[i14 >> 2] | 0;
       break;
      } else {
       HEAP32[i5 >> 2] = 9;
       HEAP32[i14 >> 2] = 0;
       i34 = 0;
       break;
      }
     } else {
      HEAP32[i5 >> 2] = 5;
      HEAP32[i14 >> 2] = 0;
      i34 = 0;
     }
    } while (0);
    HEAP32[i14 >> 2] = 0;
    HEAP32[i1 >> 2] = i34;
    i31 = HEAP32[i16 >> 2] | 0;
    do {
     if ((i31 | 0) != 0) {
      i29 = i31 | 0;
      i30 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
      if ((i30 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i31);
       break;
      } else {
       HEAP32[i29 >> 2] = i30;
       break;
      }
     }
    } while (0);
    i31 = HEAP32[i15 >> 2] | 0;
    if ((i31 | 0) == 0) {
     STACKTOP = i6;
     return;
    }
    i30 = i31 | 0;
    i29 = (HEAP32[i30 >> 2] | 0) - 2 | 0;
    if ((i29 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i31);
     STACKTOP = i6;
     return;
    } else {
     HEAP32[i30 >> 2] = i29;
     STACKTOP = i6;
     return;
    }
    break;
   }
  case 8:
   {
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 68 >> 2] & 127](i18, i3);
    __ZN7WebCore7Comment6createERNS_8DocumentERKN3WTF6StringE(i17, i2, i18);
    i29 = i17 | 0;
    i30 = HEAP32[i29 >> 2] | 0;
    HEAP32[i29 >> 2] = 0;
    HEAP32[i1 >> 2] = i30;
    i30 = HEAP32[i18 >> 2] | 0;
    if ((i30 | 0) == 0) {
     STACKTOP = i6;
     return;
    }
    i29 = i30 | 0;
    i31 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
    if ((i31 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i30);
     STACKTOP = i6;
     return;
    } else {
     HEAP32[i29 >> 2] = i31;
     STACKTOP = i6;
     return;
    }
    break;
   }
  case 1:
   {
    i31 = i3;
    i29 = i3 + 44 | 0;
    i30 = i29;
    i35 = HEAP32[i29 >> 2] | 0;
    i29 = HEAP32[i35 + 8 >> 2] | 0;
    i36 = (i29 | 0) == 0;
    do {
     if (i36) {
      i37 = 44;
     } else {
      if ((HEAP32[i29 + 4 >> 2] | 0) == 0) {
       i37 = 44;
       break;
      }
      if ((HEAP32[i35 + 16 >> 2] | 0) != 0) {
       i37 = 44;
      }
     }
    } while (0);
    L79 : do {
     if ((i37 | 0) == 44) {
      if ((i29 | 0) == (HEAP32[__ZN3WTF7xmlAtomE >> 2] | 0)) {
       if ((HEAP32[i35 + 16 >> 2] | 0) != (HEAP32[__ZN7WebCore8XMLNames15xmlNamespaceURIE >> 2] | 0)) {
        break;
       }
      }
      i38 = HEAP32[__ZN3WTF9xmlnsAtomE >> 2] | 0;
      do {
       if ((i29 | 0) == (i38 | 0)) {
        i37 = 50;
       } else {
        if (i36) {
         i37 = 49;
        } else {
         if ((HEAP32[i29 + 4 >> 2] | 0) == 0) {
          i37 = 49;
         }
        }
        if ((i37 | 0) == 49) {
         if ((HEAP32[i35 + 12 >> 2] | 0) == (i38 | 0)) {
          i37 = 50;
          break;
         }
        }
        if ((HEAP32[i35 + 16 >> 2] | 0) == (HEAP32[__ZN7WebCore10XMLNSNames17xmlnsNamespaceURIE >> 2] | 0)) {
         break L79;
        }
       }
      } while (0);
      if ((i37 | 0) == 50) {
       if ((HEAP32[i35 + 16 >> 2] | 0) != (HEAP32[__ZN7WebCore10XMLNSNames17xmlnsNamespaceURIE >> 2] | 0)) {
        break;
       }
      }
      __ZN7WebCore8Document13createElementERKNS_13QualifiedNameEb(i19, i2, i30, 0);
      i38 = i19 | 0;
      i39 = HEAP32[i38 >> 2] | 0;
      HEAP32[i38 >> 2] = 0;
      __ZN7WebCore7Element20cloneDataFromElementERKS0_(i39, i31);
      L94 : do {
       if (i4) {
        i38 = i20 | 0;
        i40 = i39 | 0;
        i41 = i21 | 0;
        i42 = i3 + 36 | 0;
        while (1) {
         i43 = HEAP32[i42 >> 2] | 0;
         if ((i43 | 0) == 0) {
          break L94;
         }
         __ZN7WebCore8Document10importNodeEPNS_4NodeEbRi(i20, i2, i43, 1, i5);
         i44 = HEAP32[i38 >> 2] | 0;
         HEAP32[i38 >> 2] = 0;
         if ((HEAP32[i5 >> 2] | 0) != 0) {
          i37 = 62;
          break;
         }
         HEAP32[i41 >> 2] = i44;
         __ZN7WebCore13ContainerNode11appendChildEN3WTF10PassRefPtrINS_4NodeEEERi(i40, i21, i5) | 0;
         i45 = HEAP32[i41 >> 2] | 0;
         do {
          if ((i45 | 0) != 0) {
           i46 = i45 + 8 | 0;
           i47 = i46 | 0;
           i48 = (HEAP32[i47 >> 2] | 0) - 1 | 0;
           HEAP32[i47 >> 2] = i48;
           if ((i48 | 0) >= 1) {
            break;
           }
           if ((HEAP32[i46 + 8 >> 2] | 0) != 0) {
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i46 - 8 | 0);
          }
         } while (0);
         if ((HEAP32[i5 >> 2] | 0) == 0) {
          i42 = i43 + 28 | 0;
         } else {
          i37 = 66;
          break;
         }
        }
        do {
         if ((i37 | 0) == 62) {
          HEAP32[i1 >> 2] = 0;
          if ((i44 | 0) == 0) {
           break;
          }
          i42 = i44 + 8 | 0;
          i41 = i42 | 0;
          i40 = (HEAP32[i41 >> 2] | 0) - 1 | 0;
          HEAP32[i41 >> 2] = i40;
          if ((i40 | 0) >= 1) {
           break;
          }
          if ((HEAP32[i42 + 8 >> 2] | 0) != 0) {
           break;
          }
          __ZN7WebCore4Node14removedLastRefEv(i42 - 8 | 0);
         } else if ((i37 | 0) == 66) {
          HEAP32[i1 >> 2] = 0;
         }
        } while (0);
        if ((i39 | 0) == 0) {
         STACKTOP = i6;
         return;
        }
        i42 = i39 + 8 | 0;
        i40 = i42 | 0;
        i41 = (HEAP32[i40 >> 2] | 0) - 1 | 0;
        HEAP32[i40 >> 2] = i41;
        if ((i41 | 0) >= 1) {
         STACKTOP = i6;
         return;
        }
        if ((HEAP32[i42 + 8 >> 2] | 0) != 0) {
         STACKTOP = i6;
         return;
        }
        __ZN7WebCore4Node14removedLastRefEv(i42 - 8 | 0);
        STACKTOP = i6;
        return;
       }
      } while (0);
      HEAP32[i1 >> 2] = i39;
      STACKTOP = i6;
      return;
     }
    } while (0);
    HEAP32[i5 >> 2] = 14;
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i6;
    return;
   }
  case 2:
   {
    i31 = i3;
    __ZNK7WebCore13QualifiedName8toStringEv(i25, i3 + 48 | 0);
    i30 = i25 | 0;
    i35 = HEAP32[i30 >> 2] | 0;
    do {
     if ((i35 | 0) == 0) {
      i29 = i7 | 0;
      HEAP32[i29 >> 2] = 0;
      i49 = i29;
     } else {
      if ((HEAP32[i35 + 16 >> 2] & 16 | 0) == 0) {
       __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i7, i35);
       i49 = i7 | 0;
       break;
      } else {
       i29 = i7 | 0;
       HEAP32[i29 >> 2] = i35;
       i36 = i35 | 0;
       HEAP32[i36 >> 2] = (HEAP32[i36 >> 2] | 0) + 2;
       i49 = i29;
       break;
      }
     }
    } while (0);
    i35 = i24 | 0;
    HEAP32[i35 >> 2] = HEAP32[i49 >> 2];
    __ZN7WebCore13QualifiedNameC1ERKN3WTF12AtomicStringES4_S4_(i23, __ZN3WTF8nullAtomE, i24, __ZN3WTF8nullAtomE);
    __ZN7WebCore4Attr6createERNS_8DocumentERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i22, i2, i23, __ZNK7WebCore4Attr5valueEv(i31) | 0);
    i29 = i22 | 0;
    i36 = HEAP32[i29 >> 2] | 0;
    HEAP32[i29 >> 2] = 0;
    HEAP32[i1 >> 2] = i36;
    __ZN7WebCore13QualifiedNameD1Ev(i23);
    i36 = HEAP32[i35 >> 2] | 0;
    do {
     if ((i36 | 0) != 0) {
      i35 = i36 | 0;
      i29 = (HEAP32[i35 >> 2] | 0) - 2 | 0;
      if ((i29 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i36);
       break;
      } else {
       HEAP32[i35 >> 2] = i29;
       break;
      }
     }
    } while (0);
    i36 = HEAP32[i30 >> 2] | 0;
    if ((i36 | 0) == 0) {
     STACKTOP = i6;
     return;
    }
    i31 = i36 | 0;
    i29 = (HEAP32[i31 >> 2] | 0) - 2 | 0;
    if ((i29 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i36);
     STACKTOP = i6;
     return;
    } else {
     HEAP32[i31 >> 2] = i29;
     STACKTOP = i6;
     return;
    }
    break;
   }
  case 11:
   {
    if ((HEAP32[i3 + 12 >> 2] & 4096 | 0) != 0) {
     if ((HEAP32[(HEAP32[i3 + 20 >> 2] | 0) + 4 >> 2] | 0) == (i3 | 0)) {
      break L5;
     }
    }
    __ZN7WebCore16DocumentFragment6createERNS_8DocumentE(i26, HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0);
    i29 = i26 | 0;
    i31 = HEAP32[i29 >> 2] | 0;
    HEAP32[i29 >> 2] = 0;
    L152 : do {
     if (i4) {
      i29 = i27 | 0;
      i36 = i31 | 0;
      i35 = i28 | 0;
      i42 = i3 + 36 | 0;
      while (1) {
       i41 = HEAP32[i42 >> 2] | 0;
       if ((i41 | 0) == 0) {
        break L152;
       }
       __ZN7WebCore8Document10importNodeEPNS_4NodeEbRi(i27, i2, i41, 1, i5);
       i50 = HEAP32[i29 >> 2] | 0;
       HEAP32[i29 >> 2] = 0;
       if ((HEAP32[i5 >> 2] | 0) != 0) {
        i37 = 96;
        break;
       }
       HEAP32[i35 >> 2] = i50;
       __ZN7WebCore13ContainerNode11appendChildEN3WTF10PassRefPtrINS_4NodeEEERi(i36, i28, i5) | 0;
       i40 = HEAP32[i35 >> 2] | 0;
       do {
        if ((i40 | 0) != 0) {
         i38 = i40 + 8 | 0;
         i45 = i38 | 0;
         i46 = (HEAP32[i45 >> 2] | 0) - 1 | 0;
         HEAP32[i45 >> 2] = i46;
         if ((i46 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i38 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i38 - 8 | 0);
        }
       } while (0);
       if ((HEAP32[i5 >> 2] | 0) == 0) {
        i42 = i41 + 28 | 0;
       } else {
        i37 = 100;
        break;
       }
      }
      do {
       if ((i37 | 0) == 96) {
        HEAP32[i1 >> 2] = 0;
        if ((i50 | 0) == 0) {
         break;
        }
        i42 = i50 + 8 | 0;
        i35 = i42 | 0;
        i36 = (HEAP32[i35 >> 2] | 0) - 1 | 0;
        HEAP32[i35 >> 2] = i36;
        if ((i36 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i42 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i42 - 8 | 0);
       } else if ((i37 | 0) == 100) {
        HEAP32[i1 >> 2] = 0;
       }
      } while (0);
      if ((i31 | 0) == 0) {
       STACKTOP = i6;
       return;
      }
      i42 = i31 + 8 | 0;
      i36 = i42 | 0;
      i35 = (HEAP32[i36 >> 2] | 0) - 1 | 0;
      HEAP32[i36 >> 2] = i35;
      if ((i35 | 0) >= 1) {
       STACKTOP = i6;
       return;
      }
      if ((HEAP32[i42 + 8 >> 2] | 0) != 0) {
       STACKTOP = i6;
       return;
      }
      __ZN7WebCore4Node14removedLastRefEv(i42 - 8 | 0);
      STACKTOP = i6;
      return;
     }
    } while (0);
    HEAP32[i1 >> 2] = i31;
    STACKTOP = i6;
    return;
   }
  default:
   {}
  }
 } while (0);
 HEAP32[i5 >> 2] = 9;
 HEAP32[i1 >> 2] = 0;
 STACKTOP = i6;
 return;
}
function __ZN7WebCore8Document16processHttpEquivERKN3WTF6StringES4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 64 | 0;
 i9 = i4 + 72 | 0;
 i10 = i4 + 80 | 0;
 i11 = i4 + 104 | 0;
 i12 = i4 + 112 | 0;
 i13 = i4 + 120 | 0;
 i14 = HEAP32[i1 + 332 >> 2] | 0;
 i15 = i2 | 0;
 if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i15 >> 2] | 0, H_BASE + 968 | 0) | 0) {
  i2 = i3 | 0;
  i16 = HEAP32[i2 >> 2] | 0;
  if ((i16 | 0) != 0) {
   i17 = i16 | 0;
   HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 2;
  }
  i17 = i1 + 908 | 0;
  i18 = HEAP32[i17 >> 2] | 0;
  HEAP32[i17 >> 2] = i16;
  do {
   if ((i18 | 0) != 0) {
    i16 = i18 | 0;
    i17 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
    if ((i17 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i18);
     break;
    } else {
     HEAP32[i16 >> 2] = i17;
     break;
    }
   }
  } while (0);
  i18 = HEAP32[i2 >> 2] | 0;
  if ((i18 | 0) != 0) {
   i2 = i18 | 0;
   HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
  }
  i2 = i1 + 904 | 0;
  i17 = HEAP32[i2 >> 2] | 0;
  HEAP32[i2 >> 2] = i18;
  do {
   if ((i17 | 0) != 0) {
    i18 = i17 | 0;
    i2 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
    if ((i2 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i17);
     break;
    } else {
     HEAP32[i18 >> 2] = i2;
     break;
    }
   }
  } while (0);
  __ZN7WebCore8Document20styleResolverChangedENS_23StyleResolverUpdateFlagE(i1, 1);
  STACKTOP = i4;
  return;
 }
 if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i15 >> 2] | 0, H_BASE + 960 | 0) | 0) {
  i17 = i6 | 0;
  HEAP32[i17 >> 2] = 0;
  if ((i14 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  if (__ZN7WebCore16parseHTTPRefreshERKN3WTF6StringEbRdRS1_(i3, 1, i5, i6) | 0) {
   i2 = HEAP32[i17 >> 2] | 0;
   do {
    if ((i2 | 0) == 0) {
     i19 = 20;
    } else {
     if ((HEAP32[i2 + 4 >> 2] | 0) == 0) {
      i19 = 20;
      break;
     }
     __ZNK7WebCore8Document11completeURLERKN3WTF6StringERKNS_3URLE(i7, i1, i6, i1 + 404 | 0);
     i18 = i7 | 0;
     i16 = HEAP32[i18 >> 2] | 0;
     if ((i16 | 0) != 0) {
      i20 = i16 | 0;
      HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 2;
     }
     i20 = HEAP32[i17 >> 2] | 0;
     HEAP32[i17 >> 2] = i16;
     do {
      if ((i20 | 0) != 0) {
       i16 = i20 | 0;
       i21 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
       if ((i21 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i20);
        break;
       } else {
        HEAP32[i16 >> 2] = i21;
        break;
       }
      }
     } while (0);
     i20 = HEAP32[i18 >> 2] | 0;
     if ((i20 | 0) == 0) {
      break;
     }
     i21 = i20 | 0;
     i16 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
     if ((i16 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i20);
      break;
     } else {
      HEAP32[i21 >> 2] = i16;
      break;
     }
    }
   } while (0);
   do {
    if ((i19 | 0) == 20) {
     i7 = HEAP32[i1 + 356 >> 2] | 0;
     if ((i7 | 0) == 0) {
      i22 = i2;
     } else {
      i16 = i7 | 0;
      HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
      i22 = HEAP32[i17 >> 2] | 0;
     }
     HEAP32[i17 >> 2] = i7;
     if ((i22 | 0) == 0) {
      break;
     }
     i7 = i22 | 0;
     i16 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
     if ((i16 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i22);
      break;
     } else {
      HEAP32[i7 >> 2] = i16;
      break;
     }
    }
   } while (0);
   __ZN7WebCore19NavigationScheduler16scheduleRedirectEdRKN3WTF6StringE(i14 + 376 | 0, +HEAPF64[i5 >> 3], i6);
  }
  i6 = HEAP32[i17 >> 2] | 0;
  if ((i6 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i17 = i6 | 0;
  i5 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
  if ((i5 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i6);
   STACKTOP = i4;
   return;
  } else {
   HEAP32[i17 >> 2] = i5;
   STACKTOP = i4;
   return;
  }
 }
 if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i15 >> 2] | 0, H_BASE + 944 | 0) | 0) {
  if ((HEAP8[i1 + 1576 | 0] & 1) == 0) {
   STACKTOP = i4;
   return;
  }
  i5 = i8 | 0;
  HEAP32[i5 >> 2] = 0;
  __ZN7WebCore8Document9setCookieERKN3WTF6StringERi(i1, i3, i5);
  STACKTOP = i4;
  return;
 }
 if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i15 >> 2] | 0, H_BASE + 904 | 0) | 0) {
  i5 = i1 + 1304 | 0;
  i8 = i3 | 0;
  if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i5 >> 2] | 0, HEAP32[i8 >> 2] | 0) | 0) {
   STACKTOP = i4;
   return;
  }
  i17 = HEAP32[i8 >> 2] | 0;
  if ((i17 | 0) != 0) {
   i8 = i17 | 0;
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
  }
  i8 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = i17;
  do {
   if ((i8 | 0) != 0) {
    i17 = i8 | 0;
    i5 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
    if ((i5 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i8);
     break;
    } else {
     HEAP32[i17 >> 2] = i5;
     break;
    }
   }
  } while (0);
  __ZN7WebCore8Document20styleResolverChangedENS_23StyleResolverUpdateFlagE(i1, 1);
  STACKTOP = i4;
  return;
 }
 if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i15 >> 2] | 0, H_BASE + 880 | 0) | 0) {
  i8 = i1 + 1085 | 0;
  do {
   if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i3 >> 2] | 0, H_BASE + 568 | 0) | 0) {
    if ((HEAP8[i8] & 1) != 0) {
     break;
    }
    HEAP8[i1 + 1084 | 0] = 1;
    STACKTOP = i4;
    return;
   }
  } while (0);
  HEAP8[i1 + 1084 | 0] = 0;
  HEAP8[i8] = 1;
  STACKTOP = i4;
  return;
 }
 if (!(__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i15 >> 2] | 0, H_BASE + 864 | 0) | 0)) {
  if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i15 >> 2] | 0, H_BASE + 752 | 0) | 0) {
   __ZN7WebCore21ContentSecurityPolicy16didReceiveHeaderERKN3WTF6StringENS0_10HeaderTypeE(HEAP32[i1 + 104 >> 2] | 0, i3, 1);
   STACKTOP = i4;
   return;
  }
  if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i15 >> 2] | 0, H_BASE + 712 | 0) | 0) {
   __ZN7WebCore21ContentSecurityPolicy16didReceiveHeaderERKN3WTF6StringENS0_10HeaderTypeE(HEAP32[i1 + 104 >> 2] | 0, i3, 0);
   STACKTOP = i4;
   return;
  }
  if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i15 >> 2] | 0, H_BASE + 696 | 0) | 0) {
   __ZN7WebCore21ContentSecurityPolicy16didReceiveHeaderERKN3WTF6StringENS0_10HeaderTypeE(HEAP32[i1 + 104 >> 2] | 0, i3, 3);
   STACKTOP = i4;
   return;
  }
  if (!(__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i15 >> 2] | 0, H_BASE + 664 | 0) | 0)) {
   STACKTOP = i4;
   return;
  }
  __ZN7WebCore21ContentSecurityPolicy16didReceiveHeaderERKN3WTF6StringENS0_10HeaderTypeE(HEAP32[i1 + 104 >> 2] | 0, i3, 2);
  STACKTOP = i4;
  return;
 }
 if ((i14 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i15 = i14 + 80 | 0;
 do {
  if ((__ZNK7WebCore11FrameLoader20activeDocumentLoaderEv(i15) | 0) == 0) {
   i23 = 0;
  } else {
   if ((__ZNK7WebCore14DocumentLoader18mainResourceLoaderEv(__ZNK7WebCore11FrameLoader20activeDocumentLoaderEv(i15) | 0) | 0) == 0) {
    i23 = 0;
    break;
   }
   i23 = HEAP32[(__ZNK7WebCore14DocumentLoader18mainResourceLoaderEv(__ZNK7WebCore11FrameLoader20activeDocumentLoaderEv(i15) | 0) | 0) + 564 >> 2] | 0;
  }
 } while (0);
 i8 = i1 + 356 | 0;
 if (!(__ZN7WebCore11FrameLoader35shouldInterruptLoadForXFrameOptionsERKN3WTF6StringERKNS_3URLEm(i15, i3, i8, i23) | 0)) {
  STACKTOP = i4;
  return;
 }
 __ZNK7WebCore3URL30stringCenterEllipsizedToLengthEj(i11, i8, 1024);
 i8 = i11 | 0;
 i11 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i24 = 0;
   i25 = 1;
  } else {
   i5 = i11 | 0;
   i17 = HEAP32[i5 >> 2] | 0;
   i6 = i17 + 2 | 0;
   HEAP32[i5 >> 2] = i17 + 4;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    i26 = HEAP32[i5 >> 2] | 0;
   } else {
    HEAP32[i5 >> 2] = i6;
    i26 = i6;
   }
   i6 = i26 + 2 | 0;
   HEAP32[i5 >> 2] = i26 + 4;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    i24 = i11;
    i25 = 0;
    break;
   } else {
    HEAP32[i5 >> 2] = i6;
    i24 = i11;
    i25 = 0;
    break;
   }
  }
 } while (0);
 i11 = HEAP32[i3 >> 2] | 0;
 i3 = (i11 | 0) == 0;
 if (!i3) {
  i26 = i11 | 0;
  HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 2;
 }
 i26 = (i24 | 0) == 0;
 if (!i26) {
  i6 = i24 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
 }
 if (!i3) {
  i6 = i11 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
 }
 if (!i26) {
  i6 = i24 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
 }
 do {
  if (!i3) {
   i6 = i11 | 0;
   i5 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = i5 + 2;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i6 >> 2] = i5;
    break;
   }
  }
 } while (0);
 if (!i26) {
  i5 = i24 | 0;
  i6 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
  if ((i6 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i24);
   i27 = HEAP32[i5 >> 2] | 0;
  } else {
   HEAP32[i5 >> 2] = i6;
   i27 = i6;
  }
  HEAP32[i5 >> 2] = i27 + 2;
 }
 if (!i3) {
  i27 = i11 | 0;
  HEAP32[i27 >> 2] = (HEAP32[i27 >> 2] | 0) + 2;
 }
 HEAP32[i10 >> 2] = H_BASE + 840;
 i27 = i10 + 4 | 0;
 HEAP32[i27 >> 2] = i24;
 if (!i26) {
  i5 = i24 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
 }
 HEAP32[i10 + 8 >> 2] = H_BASE + 784;
 i5 = i10 + 12 | 0;
 HEAP32[i5 >> 2] = i11;
 do {
  if (i3) {
   HEAP32[i10 + 16 >> 2] = H_BASE + 776;
  } else {
   i6 = i11 | 0;
   i17 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = i17 + 2;
   HEAP32[i10 + 16 >> 2] = H_BASE + 776;
   if ((i17 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i6 >> 2] = i17;
    break;
   }
  }
 } while (0);
 do {
  if (!i26) {
   i17 = i24 | 0;
   i6 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i24);
    break;
   } else {
    HEAP32[i17 >> 2] = i6;
    break;
   }
  }
 } while (0);
 __ZNK3WTF12StringAppendINS0_INS0_INS0_IPKcNS_6StringEEES2_EES3_EES2_EcvS3_Ev(i9, i10);
 i10 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i5 = i10 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i5 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i10 = HEAP32[i27 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i27 = i10 | 0;
   i6 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i27 >> 2] = i6;
    break;
   }
  }
 } while (0);
 do {
  if (!i3) {
   i10 = i11 | 0;
   i6 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i10 >> 2] = i6;
    break;
   }
  }
 } while (0);
 do {
  if (!i26) {
   i6 = i24 | 0;
   i10 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i24);
    break;
   } else {
    HEAP32[i6 >> 2] = i10;
    break;
   }
  }
 } while (0);
 do {
  if (!i3) {
   i10 = i11 | 0;
   i6 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i10 >> 2] = i6;
    break;
   }
  }
 } while (0);
 do {
  if (!i26) {
   i11 = i24 | 0;
   i3 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i24);
    break;
   } else {
    HEAP32[i11 >> 2] = i3;
    break;
   }
  }
 } while (0);
 do {
  if (!i25) {
   i26 = i24 | 0;
   i3 = (HEAP32[i26 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i24);
    break;
   } else {
    HEAP32[i26 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i24 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i24 | 0) != 0) {
   i8 = i24 | 0;
   i25 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i25 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i24);
    break;
   } else {
    HEAP32[i8 >> 2] = i25;
    break;
   }
  }
 } while (0);
 __ZN7WebCore11FrameLoader14stopAllLoadersENS_26ClearProvisionalItemPolicyE(i15, 0);
 i15 = HEAP32[i1 + 100 >> 2] | 0;
 __ZN7WebCore14SecurityOrigin27urlWithUniqueSecurityOriginEv(i12);
 i24 = i13 | 0;
 HEAP32[i24 >> 2] = 0;
 __ZN7WebCore19NavigationScheduler22scheduleLocationChangeEPNS_14SecurityOriginERKN3WTF6StringES6_bb(i14 + 376 | 0, i15, i12, i13, 1, 1);
 i13 = HEAP32[i24 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i24 = i13 | 0;
   i15 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i24 >> 2] = i15;
    break;
   }
  }
 } while (0);
 i13 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i12 = i13 | 0;
   i15 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i12 >> 2] = i15;
    break;
   }
  }
 } while (0);
 FUNCTION_TABLE_viiiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 316 >> 2] & 7](i1, 8, 3, i9, i23);
 i23 = HEAP32[i9 >> 2] | 0;
 if ((i23 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i9 = i23 | 0;
 i1 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i23);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i9 >> 2] = i1;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore8Document13updateBaseURLEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 168 | 0;
 i3 = i2 | 0;
 i4 = i2 + 48 | 0;
 i5 = i2 + 96 | 0;
 i6 = i2 + 104 | 0;
 i7 = i2 + 152 | 0;
 i8 = i2 + 160 | 0;
 i9 = i1 + 404 | 0;
 i10 = i3 | 0;
 i11 = i9 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 HEAP32[i10 >> 2] = i12;
 if ((i12 | 0) == 0) {
  i13 = 0;
  i14 = i3 + 4 | 0;
 } else {
  i15 = i12 | 0;
  HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 2;
  i15 = i3 + 4 | 0;
  i13 = HEAP8[i15] & -4;
  i14 = i15;
 }
 i15 = i1 + 408 | 0;
 i12 = HEAP8[i15] | 0;
 HEAP8[i14] = i13 | i12 & 1 | i12 & 2;
 i12 = i1 + 412 | 0;
 HEAP32[i3 + 8 >> 2] = HEAP32[i12 >> 2];
 i13 = i1 + 416 | 0;
 HEAP32[i3 + 12 >> 2] = HEAP32[i13 >> 2];
 i14 = i1 + 420 | 0;
 HEAP32[i3 + 16 >> 2] = HEAP32[i14 >> 2];
 i16 = i1 + 424 | 0;
 HEAP32[i3 + 20 >> 2] = HEAP32[i16 >> 2];
 i17 = i1 + 428 | 0;
 HEAP32[i3 + 24 >> 2] = HEAP32[i17 >> 2];
 i18 = i1 + 432 | 0;
 HEAP32[i3 + 28 >> 2] = HEAP32[i18 >> 2];
 i19 = i1 + 436 | 0;
 HEAP32[i3 + 32 >> 2] = HEAP32[i19 >> 2];
 i20 = i1 + 440 | 0;
 HEAP32[i3 + 36 >> 2] = HEAP32[i20 >> 2];
 i21 = i1 + 444 | 0;
 HEAP32[i3 + 40 >> 2] = HEAP32[i21 >> 2];
 i22 = i1 + 448 | 0;
 HEAP32[i3 + 44 >> 2] = HEAP32[i22 >> 2];
 i23 = HEAP32[i1 + 500 >> 2] | 0;
 do {
  if ((i23 | 0) == 0) {
   i24 = 11;
  } else {
   if ((HEAP32[i23 + 4 >> 2] | 0) == 0) {
    i24 = 11;
    break;
   }
   i25 = i23 | 0;
   HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + 2;
   i25 = HEAP32[i11 >> 2] | 0;
   HEAP32[i11 >> 2] = i23;
   do {
    if ((i25 | 0) != 0) {
     i26 = i25 | 0;
     i27 = (HEAP32[i26 >> 2] | 0) - 2 | 0;
     if ((i27 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i25);
      break;
     } else {
      HEAP32[i26 >> 2] = i27;
      break;
     }
    }
   } while (0);
   i25 = HEAP8[i1 + 504 | 0] | 0;
   HEAP8[i15] = HEAP8[i15] & -4 | i25 & 1 | i25 & 2;
   HEAP32[i12 >> 2] = HEAP32[i1 + 508 >> 2];
   HEAP32[i13 >> 2] = HEAP32[i1 + 512 >> 2];
   HEAP32[i14 >> 2] = HEAP32[i1 + 516 >> 2];
   HEAP32[i16 >> 2] = HEAP32[i1 + 520 >> 2];
   HEAP32[i17 >> 2] = HEAP32[i1 + 524 >> 2];
   HEAP32[i18 >> 2] = HEAP32[i1 + 528 >> 2];
   HEAP32[i19 >> 2] = HEAP32[i1 + 532 >> 2];
   HEAP32[i20 >> 2] = HEAP32[i1 + 536 >> 2];
   HEAP32[i21 >> 2] = HEAP32[i1 + 540 >> 2];
   HEAP32[i22 >> 2] = HEAP32[i1 + 544 >> 2];
  }
 } while (0);
 L14 : do {
  if ((i24 | 0) == 11) {
   i23 = HEAP32[i1 + 452 >> 2] | 0;
   do {
    if ((i23 | 0) != 0) {
     if ((HEAP32[i23 + 4 >> 2] | 0) == 0) {
      break;
     }
     i25 = i23 | 0;
     HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + 2;
     i25 = HEAP32[i11 >> 2] | 0;
     HEAP32[i11 >> 2] = i23;
     do {
      if ((i25 | 0) != 0) {
       i27 = i25 | 0;
       i26 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
       if ((i26 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i25);
        break;
       } else {
        HEAP32[i27 >> 2] = i26;
        break;
       }
      }
     } while (0);
     i25 = HEAP8[i1 + 456 | 0] | 0;
     HEAP8[i15] = HEAP8[i15] & -4 | i25 & 1 | i25 & 2;
     HEAP32[i12 >> 2] = HEAP32[i1 + 460 >> 2];
     HEAP32[i13 >> 2] = HEAP32[i1 + 464 >> 2];
     HEAP32[i14 >> 2] = HEAP32[i1 + 468 >> 2];
     HEAP32[i16 >> 2] = HEAP32[i1 + 472 >> 2];
     HEAP32[i17 >> 2] = HEAP32[i1 + 476 >> 2];
     HEAP32[i18 >> 2] = HEAP32[i1 + 480 >> 2];
     HEAP32[i19 >> 2] = HEAP32[i1 + 484 >> 2];
     HEAP32[i20 >> 2] = HEAP32[i1 + 488 >> 2];
     HEAP32[i21 >> 2] = HEAP32[i1 + 492 >> 2];
     HEAP32[i22 >> 2] = HEAP32[i1 + 496 >> 2];
     break L14;
    }
   } while (0);
   i23 = i5 | 0;
   i25 = HEAP32[i1 + 644 >> 2] | 0;
   HEAP32[i23 >> 2] = i25;
   if ((i25 | 0) != 0) {
    i26 = i25 | 0;
    HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 2;
   }
   __ZN7WebCore3URLC1ENS_18ParsedURLStringTagERKN3WTF6StringE(i4, 0, i5);
   i26 = i4 | 0;
   i25 = HEAP32[i26 >> 2] | 0;
   HEAP32[i26 >> 2] = 0;
   i27 = HEAP32[i11 >> 2] | 0;
   HEAP32[i11 >> 2] = i25;
   do {
    if ((i27 | 0) != 0) {
     i25 = i27 | 0;
     i28 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
     if ((i28 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i27);
      break;
     } else {
      HEAP32[i25 >> 2] = i28;
      break;
     }
    }
   } while (0);
   i27 = HEAP8[i4 + 4 | 0] | 0;
   HEAP8[i15] = HEAP8[i15] & -4 | i27 & 1 | i27 & 2;
   HEAP32[i12 >> 2] = HEAP32[i4 + 8 >> 2];
   HEAP32[i13 >> 2] = HEAP32[i4 + 12 >> 2];
   HEAP32[i14 >> 2] = HEAP32[i4 + 16 >> 2];
   HEAP32[i16 >> 2] = HEAP32[i4 + 20 >> 2];
   HEAP32[i17 >> 2] = HEAP32[i4 + 24 >> 2];
   HEAP32[i18 >> 2] = HEAP32[i4 + 28 >> 2];
   HEAP32[i19 >> 2] = HEAP32[i4 + 32 >> 2];
   HEAP32[i20 >> 2] = HEAP32[i4 + 36 >> 2];
   HEAP32[i21 >> 2] = HEAP32[i4 + 40 >> 2];
   HEAP32[i22 >> 2] = HEAP32[i4 + 44 >> 2];
   i27 = HEAP32[i26 >> 2] | 0;
   do {
    if ((i27 | 0) != 0) {
     i28 = i27 | 0;
     i25 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
     if ((i25 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i27);
      break;
     } else {
      HEAP32[i28 >> 2] = i25;
      break;
     }
    }
   } while (0);
   i27 = HEAP32[i23 >> 2] | 0;
   if ((i27 | 0) == 0) {
    break;
   }
   i26 = i27 | 0;
   i25 = (HEAP32[i26 >> 2] | 0) - 2 | 0;
   if ((i25 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i27);
    break;
   } else {
    HEAP32[i26 >> 2] = i25;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i1 + 1572 >> 2] | 0;
 if ((i4 | 0) != 0) {
  __ZN7WebCore18SelectorQueryCache10invalidateEv(i4);
 }
 do {
  if ((HEAP8[i15] & 1) == 0) {
   i4 = i6 | 0;
   HEAP32[i4 >> 2] = 0;
   __ZN7WebCore3URL10invalidateEv(i6);
   i5 = HEAP32[i4 >> 2] | 0;
   HEAP32[i4 >> 2] = 0;
   i24 = HEAP32[i11 >> 2] | 0;
   HEAP32[i11 >> 2] = i5;
   do {
    if ((i24 | 0) != 0) {
     i5 = i24 | 0;
     i25 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
     if ((i25 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i24);
      break;
     } else {
      HEAP32[i5 >> 2] = i25;
      break;
     }
    }
   } while (0);
   i24 = HEAP8[i6 + 4 | 0] | 0;
   HEAP8[i15] = HEAP8[i15] & -4 | i24 & 1 | i24 & 2;
   HEAP32[i12 >> 2] = HEAP32[i6 + 8 >> 2];
   HEAP32[i13 >> 2] = HEAP32[i6 + 12 >> 2];
   HEAP32[i14 >> 2] = HEAP32[i6 + 16 >> 2];
   HEAP32[i16 >> 2] = HEAP32[i6 + 20 >> 2];
   HEAP32[i17 >> 2] = HEAP32[i6 + 24 >> 2];
   HEAP32[i18 >> 2] = HEAP32[i6 + 28 >> 2];
   HEAP32[i19 >> 2] = HEAP32[i6 + 32 >> 2];
   HEAP32[i20 >> 2] = HEAP32[i6 + 36 >> 2];
   HEAP32[i21 >> 2] = HEAP32[i6 + 40 >> 2];
   HEAP32[i22 >> 2] = HEAP32[i6 + 44 >> 2];
   i24 = HEAP32[i4 >> 2] | 0;
   if ((i24 | 0) == 0) {
    break;
   }
   i23 = i24 | 0;
   i25 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
   if ((i25 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i24);
    break;
   } else {
    HEAP32[i23 >> 2] = i25;
    break;
   }
  }
 } while (0);
 i6 = i1 + 656 | 0;
 i22 = HEAP32[i6 >> 2] | 0;
 if ((i22 | 0) != 0) {
  i21 = HEAP8[(HEAP32[i22 + 8 >> 2] | 0) + 60 | 0] | 0;
  i22 = i8 | 0;
  HEAP32[i22 >> 2] = 0;
  __ZN7WebCore13CSSStyleSheet12createInlineERNS_4NodeERKNS_3URLERKN3WTF6StringE(i7, i1 | 0, i9, i8);
  i8 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = HEAP32[i7 >> 2];
  do {
   if ((i8 | 0) != 0) {
    i7 = i8 + 4 | 0;
    i20 = i7 | 0;
    i19 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
    if ((i19 | 0) != 0) {
     HEAP32[i20 >> 2] = i19;
     break;
    }
    i19 = i7 - 4 | 0;
    if ((i19 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 4 >> 2] & 127](i19);
   }
  } while (0);
  i8 = HEAP32[i22 >> 2] | 0;
  do {
   if ((i8 | 0) != 0) {
    i22 = i8 | 0;
    i19 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
    if ((i19 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i8);
     break;
    } else {
     HEAP32[i22 >> 2] = i19;
     break;
    }
   }
  } while (0);
  i8 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] | 0) + 60 | 0;
  HEAP8[i8] = HEAP8[i8] & -17 | i21 & 16;
 }
 L78 : do {
  if (!(__ZN7WebCore31equalIgnoringFragmentIdentifierERKNS_3URLES2_(i3, i9) | 0)) {
   i21 = i1 + 36 | 0;
   while (1) {
    i29 = HEAP32[i21 >> 2] | 0;
    if ((i29 | 0) == 0) {
     break L78;
    }
    i30 = HEAP32[i29 + 12 >> 2] | 0;
    if ((i30 & 4 | 0) == 0) {
     i21 = i29 + 28 | 0;
    } else {
     break;
    }
   }
   i21 = i1 | 0;
   i4 = i29;
   i8 = i30;
   while (1) {
    if ((i8 & 16 | 0) != 0) {
     if ((HEAP32[(HEAP32[i4 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames4aTagE >> 2] | 0) + 12 >> 2] | 0)) {
      break;
     }
    }
    i6 = HEAP32[i4 + 36 >> 2] | 0;
    do {
     if ((i6 | 0) == 0) {
      if ((i4 | 0) == (i21 | 0)) {
       break L78;
      }
      i19 = HEAP32[i4 + 28 >> 2] | 0;
      if ((i19 | 0) != 0) {
       i31 = i19;
       break;
      }
      i19 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i4, i21) | 0;
      if ((i19 | 0) == 0) {
       break L78;
      } else {
       i31 = i19;
      }
     } else {
      i31 = i6;
     }
    } while (0);
    if ((HEAP32[i31 + 12 >> 2] & 4 | 0) == 0) {
     i6 = i31;
     while (1) {
      if ((i6 | 0) == (i21 | 0)) {
       break L78;
      }
      i19 = HEAP32[i6 + 28 >> 2] | 0;
      if ((i19 | 0) == 0) {
       i22 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i6, i21) | 0;
       if ((i22 | 0) == 0) {
        break L78;
       } else {
        i32 = i22;
       }
      } else {
       i32 = i19;
      }
      if ((HEAP32[i32 + 12 >> 2] & 4 | 0) == 0) {
       i6 = i32;
      } else {
       i33 = i32;
       break;
      }
     }
    } else {
     i33 = i31;
    }
    i4 = i33;
    i8 = HEAP32[i33 + 12 >> 2] | 0;
   }
   if ((i4 | 0) == 0) {
    break;
   }
   i8 = i1 | 0;
   i21 = i4;
   while (1) {
    i6 = i21 + 56 | 0;
    HEAP32[i6 >> 2] = 0;
    HEAP32[i6 + 4 >> 2] = 0;
    i6 = HEAP32[i21 + 36 >> 2] | 0;
    do {
     if ((i6 | 0) == 0) {
      if ((i21 | 0) == (i8 | 0)) {
       break L78;
      }
      i19 = HEAP32[i21 + 28 >> 2] | 0;
      if ((i19 | 0) != 0) {
       i34 = i19;
       break;
      }
      i19 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i21, i8) | 0;
      if ((i19 | 0) == 0) {
       break L78;
      } else {
       i34 = i19;
      }
     } else {
      i34 = i6;
     }
    } while (0);
    if ((HEAP32[i34 + 12 >> 2] & 4 | 0) == 0) {
     i6 = i34;
     while (1) {
      if ((i6 | 0) == (i8 | 0)) {
       break L78;
      }
      i19 = HEAP32[i6 + 28 >> 2] | 0;
      if ((i19 | 0) == 0) {
       i22 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i6, i8) | 0;
       if ((i22 | 0) == 0) {
        break L78;
       } else {
        i35 = i22;
       }
      } else {
       i35 = i19;
      }
      if ((HEAP32[i35 + 12 >> 2] & 4 | 0) == 0) {
       i6 = i35;
      } else {
       i36 = i35;
       break;
      }
     }
    } else {
     i36 = i34;
    }
    L118 : while (1) {
     if ((HEAP32[i36 + 12 >> 2] & 16 | 0) != 0) {
      if ((HEAP32[(HEAP32[i36 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames4aTagE >> 2] | 0) + 12 >> 2] | 0)) {
       break;
      }
     }
     i6 = HEAP32[i36 + 36 >> 2] | 0;
     do {
      if ((i6 | 0) == 0) {
       if ((i36 | 0) == (i8 | 0)) {
        break L78;
       }
       i19 = HEAP32[i36 + 28 >> 2] | 0;
       if ((i19 | 0) != 0) {
        i37 = i19;
        break;
       }
       i19 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i36, i8) | 0;
       if ((i19 | 0) == 0) {
        break L78;
       } else {
        i37 = i19;
       }
      } else {
       i37 = i6;
      }
     } while (0);
     if ((HEAP32[i37 + 12 >> 2] & 4 | 0) == 0) {
      i38 = i37;
     } else {
      i36 = i37;
      continue;
     }
     while (1) {
      if ((i38 | 0) == (i8 | 0)) {
       break L78;
      }
      i6 = HEAP32[i38 + 28 >> 2] | 0;
      if ((i6 | 0) == 0) {
       i19 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i38, i8) | 0;
       if ((i19 | 0) == 0) {
        break L78;
       } else {
        i39 = i19;
       }
      } else {
       i39 = i6;
      }
      if ((HEAP32[i39 + 12 >> 2] & 4 | 0) == 0) {
       i38 = i39;
      } else {
       i36 = i39;
       continue L118;
      }
     }
    }
    if ((i36 | 0) == 0) {
     break;
    } else {
     i21 = i36;
    }
   }
  }
 } while (0);
 i36 = HEAP32[i10 >> 2] | 0;
 if ((i36 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i10 = i36 | 0;
 i39 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
 if ((i39 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i36);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i10 >> 2] = i39;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore8Document18processBaseElementEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 104 | 0;
 i3 = i2 | 0;
 i4 = i2 + 48 | 0;
 i5 = i2 + 56 | 0;
 i6 = i1 + 36 | 0;
 while (1) {
  i7 = HEAP32[i6 >> 2] | 0;
  if ((i7 | 0) == 0) {
   i8 = 0;
   i9 = 0;
   break;
  }
  i10 = HEAP32[i7 + 12 >> 2] | 0;
  if ((i10 & 4 | 0) == 0) {
   i6 = i7 + 28 | 0;
  } else {
   i11 = 4;
   break;
  }
 }
 L4 : do {
  if ((i11 | 0) == 4) {
   i6 = i1 | 0;
   i12 = i7;
   i13 = i10;
   while (1) {
    if ((i13 & 16 | 0) != 0) {
     if ((HEAP32[(HEAP32[i12 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7baseTagE >> 2] | 0) + 12 >> 2] | 0)) {
      break;
     }
    }
    i14 = HEAP32[i12 + 36 >> 2] | 0;
    do {
     if ((i14 | 0) == 0) {
      if ((i12 | 0) == (i6 | 0)) {
       i8 = 0;
       i9 = 0;
       break L4;
      }
      i15 = HEAP32[i12 + 28 >> 2] | 0;
      if ((i15 | 0) != 0) {
       i16 = i15;
       break;
      }
      i15 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i12, i6) | 0;
      if ((i15 | 0) == 0) {
       i8 = 0;
       i9 = 0;
       break L4;
      } else {
       i16 = i15;
      }
     } else {
      i16 = i14;
     }
    } while (0);
    if ((HEAP32[i16 + 12 >> 2] & 4 | 0) == 0) {
     i14 = i16;
     while (1) {
      if ((i14 | 0) == (i6 | 0)) {
       i8 = 0;
       i9 = 0;
       break L4;
      }
      i15 = HEAP32[i14 + 28 >> 2] | 0;
      if ((i15 | 0) == 0) {
       i17 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i14, i6) | 0;
       if ((i17 | 0) == 0) {
        i8 = 0;
        i9 = 0;
        break L4;
       } else {
        i18 = i17;
       }
      } else {
       i18 = i15;
      }
      if ((HEAP32[i18 + 12 >> 2] & 4 | 0) == 0) {
       i14 = i18;
      } else {
       i19 = i18;
       break;
      }
     }
    } else {
     i19 = i16;
    }
    i12 = i19;
    i13 = HEAP32[i19 + 12 >> 2] | 0;
   }
   if ((i12 | 0) == 0) {
    i8 = 0;
    i9 = 0;
    break;
   }
   i13 = i1 | 0;
   i6 = i12;
   i14 = 0;
   i15 = 0;
   while (1) {
    i17 = (i15 | 0) != 0;
    i20 = (i14 | 0) == 0;
    if (!(i20 | i17 ^ 1)) {
     i8 = i14;
     i9 = i15;
     break L4;
    }
    if (i17) {
     i21 = i15;
    } else {
     i17 = HEAP32[i6 + 48 >> 2] | 0;
     L31 : do {
      if ((i17 | 0) == 0) {
       i22 = __ZN3WTF8nullAtomE;
      } else {
       i23 = HEAP32[i17 + 4 >> 2] | 0;
       if ((i23 & 1 | 0) == 0) {
        i24 = i23 >>> 1 & 134217727;
        i25 = i17 + 20 | 0;
       } else {
        i23 = i17 + 24 | 0;
        i24 = HEAP32[i23 + 8 >> 2] | 0;
        i25 = HEAP32[i23 >> 2] | 0;
       }
       if ((i24 | 0) == 0) {
        i22 = __ZN3WTF8nullAtomE;
        break;
       }
       i23 = HEAP32[__ZN7WebCore9HTMLNames8hrefAttrE >> 2] | 0;
       i26 = i23 + 12 | 0;
       i27 = i23 + 16 | 0;
       i28 = 0;
       while (1) {
        i29 = i25 + (i28 << 3) | 0;
        i30 = HEAP32[i29 >> 2] | 0;
        if ((i30 | 0) == (i23 | 0)) {
         break;
        }
        if ((HEAP32[i30 + 12 >> 2] | 0) == (HEAP32[i26 >> 2] | 0)) {
         if ((HEAP32[i30 + 16 >> 2] | 0) == (HEAP32[i27 >> 2] | 0)) {
          break;
         }
        }
        i30 = i28 + 1 | 0;
        if (i30 >>> 0 < i24 >>> 0) {
         i28 = i30;
        } else {
         i22 = __ZN3WTF8nullAtomE;
         break L31;
        }
       }
       i22 = (i29 | 0) == 0 ? __ZN3WTF8nullAtomE : i25 + (i28 << 3) + 4 | 0;
      }
     } while (0);
     i21 = (HEAP32[i22 >> 2] | 0) == 0 ? 0 : i22;
    }
    if (i20) {
     i17 = HEAP32[i6 + 48 >> 2] | 0;
     L49 : do {
      if ((i17 | 0) == 0) {
       i31 = __ZN3WTF8nullAtomE;
      } else {
       i27 = HEAP32[i17 + 4 >> 2] | 0;
       if ((i27 & 1 | 0) == 0) {
        i32 = i27 >>> 1 & 134217727;
        i33 = i17 + 20 | 0;
       } else {
        i27 = i17 + 24 | 0;
        i32 = HEAP32[i27 + 8 >> 2] | 0;
        i33 = HEAP32[i27 >> 2] | 0;
       }
       if ((i32 | 0) == 0) {
        i31 = __ZN3WTF8nullAtomE;
        break;
       }
       i27 = HEAP32[__ZN7WebCore9HTMLNames10targetAttrE >> 2] | 0;
       i26 = i27 + 12 | 0;
       i23 = i27 + 16 | 0;
       i30 = 0;
       while (1) {
        i34 = i33 + (i30 << 3) | 0;
        i35 = HEAP32[i34 >> 2] | 0;
        if ((i35 | 0) == (i27 | 0)) {
         break;
        }
        if ((HEAP32[i35 + 12 >> 2] | 0) == (HEAP32[i26 >> 2] | 0)) {
         if ((HEAP32[i35 + 16 >> 2] | 0) == (HEAP32[i23 >> 2] | 0)) {
          break;
         }
        }
        i35 = i30 + 1 | 0;
        if (i35 >>> 0 < i32 >>> 0) {
         i30 = i35;
        } else {
         i31 = __ZN3WTF8nullAtomE;
         break L49;
        }
       }
       i31 = (i34 | 0) == 0 ? __ZN3WTF8nullAtomE : i33 + (i30 << 3) + 4 | 0;
      }
     } while (0);
     i36 = (HEAP32[i31 >> 2] | 0) == 0 ? 0 : i31;
    } else {
     i36 = i14;
    }
    i17 = HEAP32[i6 + 36 >> 2] | 0;
    do {
     if ((i17 | 0) == 0) {
      if ((i6 | 0) == (i13 | 0)) {
       i8 = i36;
       i9 = i21;
       break L4;
      }
      i20 = HEAP32[i6 + 28 >> 2] | 0;
      if ((i20 | 0) != 0) {
       i37 = i20;
       break;
      }
      i20 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i6, i13) | 0;
      if ((i20 | 0) == 0) {
       i8 = i36;
       i9 = i21;
       break L4;
      } else {
       i37 = i20;
      }
     } else {
      i37 = i17;
     }
    } while (0);
    if ((HEAP32[i37 + 12 >> 2] & 4 | 0) == 0) {
     i17 = i37;
     while (1) {
      if ((i17 | 0) == (i13 | 0)) {
       i8 = i36;
       i9 = i21;
       break L4;
      }
      i20 = HEAP32[i17 + 28 >> 2] | 0;
      if ((i20 | 0) == 0) {
       i23 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i17, i13) | 0;
       if ((i23 | 0) == 0) {
        i8 = i36;
        i9 = i21;
        break L4;
       } else {
        i38 = i23;
       }
      } else {
       i38 = i20;
      }
      if ((HEAP32[i38 + 12 >> 2] & 4 | 0) == 0) {
       i17 = i38;
      } else {
       i39 = i38;
       break;
      }
     }
    } else {
     i39 = i37;
    }
    L77 : while (1) {
     if ((HEAP32[i39 + 12 >> 2] & 16 | 0) != 0) {
      if ((HEAP32[(HEAP32[i39 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7baseTagE >> 2] | 0) + 12 >> 2] | 0)) {
       break;
      }
     }
     i17 = HEAP32[i39 + 36 >> 2] | 0;
     do {
      if ((i17 | 0) == 0) {
       if ((i39 | 0) == (i13 | 0)) {
        i8 = i36;
        i9 = i21;
        break L4;
       }
       i20 = HEAP32[i39 + 28 >> 2] | 0;
       if ((i20 | 0) != 0) {
        i40 = i20;
        break;
       }
       i20 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i39, i13) | 0;
       if ((i20 | 0) == 0) {
        i8 = i36;
        i9 = i21;
        break L4;
       } else {
        i40 = i20;
       }
      } else {
       i40 = i17;
      }
     } while (0);
     if ((HEAP32[i40 + 12 >> 2] & 4 | 0) == 0) {
      i41 = i40;
     } else {
      i39 = i40;
      continue;
     }
     while (1) {
      if ((i41 | 0) == (i13 | 0)) {
       i8 = i36;
       i9 = i21;
       break L4;
      }
      i17 = HEAP32[i41 + 28 >> 2] | 0;
      if ((i17 | 0) == 0) {
       i30 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i41, i13) | 0;
       if ((i30 | 0) == 0) {
        i8 = i36;
        i9 = i21;
        break L4;
       } else {
        i42 = i30;
       }
      } else {
       i42 = i17;
      }
      if ((HEAP32[i42 + 12 >> 2] & 4 | 0) == 0) {
       i41 = i42;
      } else {
       i39 = i42;
       continue L77;
      }
     }
    }
    if ((i39 | 0) == 0) {
     i8 = i36;
     i9 = i21;
     break;
    } else {
     i6 = i39;
     i14 = i36;
     i15 = i21;
    }
   }
  }
 } while (0);
 i21 = i3 | 0;
 HEAP32[i21 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i3);
 do {
  if ((i9 | 0) != 0) {
   __ZN7WebCore33stripLeadingAndTrailingHTMLSpacesERKN3WTF6StringE(i4, i9 | 0);
   i36 = i4 | 0;
   i39 = HEAP32[i36 >> 2] | 0;
   if ((i39 | 0) == 0) {
    break;
   }
   do {
    if ((HEAP32[i39 + 4 >> 2] | 0) != 0) {
     __ZN7WebCore3URLC1ERKS0_RKN3WTF6StringE(i5, i1 + 356 | 0, i4);
     i42 = i5 | 0;
     i41 = HEAP32[i42 >> 2] | 0;
     HEAP32[i42 >> 2] = 0;
     i40 = HEAP32[i21 >> 2] | 0;
     HEAP32[i21 >> 2] = i41;
     do {
      if ((i40 | 0) != 0) {
       i41 = i40 | 0;
       i37 = (HEAP32[i41 >> 2] | 0) - 2 | 0;
       if ((i37 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i40);
        break;
       } else {
        HEAP32[i41 >> 2] = i37;
        break;
       }
      }
     } while (0);
     i40 = HEAP8[i5 + 4 | 0] | 0;
     i37 = i3 + 4 | 0;
     HEAP8[i37] = HEAP8[i37] & -4 | i40 & 1 | i40 & 2;
     HEAP32[i3 + 8 >> 2] = HEAP32[i5 + 8 >> 2];
     HEAP32[i3 + 12 >> 2] = HEAP32[i5 + 12 >> 2];
     HEAP32[i3 + 16 >> 2] = HEAP32[i5 + 16 >> 2];
     HEAP32[i3 + 20 >> 2] = HEAP32[i5 + 20 >> 2];
     HEAP32[i3 + 24 >> 2] = HEAP32[i5 + 24 >> 2];
     HEAP32[i3 + 28 >> 2] = HEAP32[i5 + 28 >> 2];
     HEAP32[i3 + 32 >> 2] = HEAP32[i5 + 32 >> 2];
     HEAP32[i3 + 36 >> 2] = HEAP32[i5 + 36 >> 2];
     HEAP32[i3 + 40 >> 2] = HEAP32[i5 + 40 >> 2];
     HEAP32[i3 + 44 >> 2] = HEAP32[i5 + 44 >> 2];
     i40 = HEAP32[i42 >> 2] | 0;
     if ((i40 | 0) == 0) {
      break;
     }
     i37 = i40 | 0;
     i41 = (HEAP32[i37 >> 2] | 0) - 2 | 0;
     if ((i41 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i40);
      break;
     } else {
      HEAP32[i37 >> 2] = i41;
      break;
     }
    }
   } while (0);
   i39 = HEAP32[i36 >> 2] | 0;
   if ((i39 | 0) == 0) {
    break;
   }
   i41 = i39 | 0;
   i37 = (HEAP32[i41 >> 2] | 0) - 2 | 0;
   if ((i37 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i39);
    break;
   } else {
    HEAP32[i41 >> 2] = i37;
    break;
   }
  }
 } while (0);
 i5 = i1 + 500 | 0;
 do {
  if (!(__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i5 >> 2] | 0, HEAP32[i21 >> 2] | 0) | 0)) {
   if (!(__ZNK7WebCore21ContentSecurityPolicy12allowBaseURIERKNS_3URLENS0_15ReportingStatusE(HEAP32[i1 + 104 >> 2] | 0, i3, 0) | 0)) {
    break;
   }
   i4 = HEAP32[i21 >> 2] | 0;
   if ((i4 | 0) != 0) {
    i9 = i4 | 0;
    HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
   }
   i9 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = i4;
   do {
    if ((i9 | 0) != 0) {
     i4 = i9 | 0;
     i37 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
     if ((i37 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i9);
      break;
     } else {
      HEAP32[i4 >> 2] = i37;
      break;
     }
    }
   } while (0);
   i9 = HEAP8[i3 + 4 | 0] | 0;
   i36 = i1 + 504 | 0;
   HEAP8[i36] = HEAP8[i36] & -4 | i9 & 1 | i9 & 2;
   HEAP32[i1 + 508 >> 2] = HEAP32[i3 + 8 >> 2];
   HEAP32[i1 + 512 >> 2] = HEAP32[i3 + 12 >> 2];
   HEAP32[i1 + 516 >> 2] = HEAP32[i3 + 16 >> 2];
   HEAP32[i1 + 520 >> 2] = HEAP32[i3 + 20 >> 2];
   HEAP32[i1 + 524 >> 2] = HEAP32[i3 + 24 >> 2];
   HEAP32[i1 + 528 >> 2] = HEAP32[i3 + 28 >> 2];
   HEAP32[i1 + 532 >> 2] = HEAP32[i3 + 32 >> 2];
   HEAP32[i1 + 536 >> 2] = HEAP32[i3 + 36 >> 2];
   HEAP32[i1 + 540 >> 2] = HEAP32[i3 + 40 >> 2];
   HEAP32[i1 + 544 >> 2] = HEAP32[i3 + 44 >> 2];
   __ZN7WebCore8Document13updateBaseURLEv(i1);
  }
 } while (0);
 i3 = HEAP32[((i8 | 0) != 0 ? i8 : __ZN3WTF8nullAtomE) >> 2] | 0;
 if ((i3 | 0) != 0) {
  i8 = i3 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 i8 = i1 + 648 | 0;
 i1 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = i3;
 do {
  if ((i1 | 0) != 0) {
   i3 = i1 | 0;
   i8 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i3 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i21 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i21 = i1 | 0;
 i8 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
 if ((i8 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i21 >> 2] = i8;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore8DocumentC2EPNS_5FrameERKNS_3URLEjj(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i1 | 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 1;
 HEAP32[i10 >> 2] = __ZTVN7WebCore4NodeE + 8;
 HEAP32[i1 + 12 >> 2] = 8450;
 HEAP32[i1 + 16 >> 2] = 0;
 if ((HEAP8[H_BASE + 2240 | 0] | 0) == 0) {
  i11 = __Znwj(44) | 0;
  __ZN7WebCore9TreeScopeC1Ev(i11);
  HEAP32[H_BASE + 2224 >> 2] = i11;
  HEAP32[H_BASE + 2240 >> 2] = 1;
  HEAP32[H_BASE + 2244 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 2224 >> 2] | 0;
 }
 HEAP32[i1 + 20 >> 2] = i12;
 HEAP32[i1 + 24 >> 2] = 0;
 HEAP32[i1 + 28 >> 2] = 0;
 HEAP32[i1 + 32 >> 2] = 0;
 i11 = i12 + 16 | 0;
 HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
 HEAP32[__ZN7WebCore17InspectorCounters10s_countersE + 4 >> 2] = (HEAP32[__ZN7WebCore17InspectorCounters10s_countersE + 4 >> 2] | 0) + 1;
 HEAP32[i1 + 36 >> 2] = 0;
 HEAP32[i1 + 40 >> 2] = 0;
 HEAP32[i10 >> 2] = H_BASE + 1424;
 i11 = i1 + 44 | 0;
 i12 = i11 | 0;
 HEAP32[i12 >> 2] = H_BASE + 1788;
 i13 = i1 + 88 | 0;
 i14 = i13 | 0;
 HEAP32[i14 >> 2] = H_BASE + 1812;
 __ZN7WebCore9TreeScopeC2EPNS_8DocumentE(i11, i1);
 __ZN7WebCore22ScriptExecutionContextC2Ev(i13);
 HEAP32[i10 >> 2] = H_BASE + 1424;
 HEAP32[i12 >> 2] = H_BASE + 1788;
 HEAP32[i14 >> 2] = H_BASE + 1812;
 i14 = i1 + 248 | 0;
 __ZN7WebCore9TimerBaseC2Ev(i14);
 HEAP32[i14 >> 2] = H_BASE + 2e3;
 HEAP32[i1 + 292 >> 2] = i1;
 i14 = i1 + 296 | 0;
 HEAP32[i14 >> 2] = F_BASE_vii + 6;
 HEAP32[i14 + 4 >> 2] = 0;
 HEAPF64[i1 + 304 >> 3] = +30;
 HEAP8[i1 + 312 | 0] = 0;
 i14 = i1 + 332 | 0;
 _memset(i1 + 320 | 0, 0, 12) | 0;
 HEAP32[i14 >> 2] = i2;
 i12 = i1 + 340 | 0;
 i10 = i1 + 356 | 0;
 HEAP32[i10 >> 2] = 0;
 _memset(i1 + 336 | 0, 0, 17) | 0;
 __ZN7WebCore3URL10invalidateEv(i10);
 i10 = i1 + 404 | 0;
 HEAP32[i10 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i10);
 i10 = i1 + 452 | 0;
 HEAP32[i10 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i10);
 i10 = i1 + 500 | 0;
 HEAP32[i10 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i10);
 i10 = i1 + 548 | 0;
 HEAP32[i10 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i10);
 i10 = i1 + 596 | 0;
 HEAP32[i10 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i10);
 _memset(i1 + 644 | 0, 0, 19) | 0;
 HEAP32[i1 + 664 >> 2] = 2;
 HEAP8[i1 + 668 | 0] = 0;
 HEAP32[i1 + 672 >> 2] = -16777216;
 HEAP8[i1 + 676 | 0] = 1;
 _memset(i1 + 680 | 0, 0, 16) | 0;
 __ZN7WebCore20UserActionElementSetC1Ev(i1 + 696 | 0);
 i10 = i1 + 720 | 0;
 i13 = _i64Add(HEAP32[H_BASE + 2232 >> 2] | 0, HEAP32[H_BASE + 2236 >> 2] | 0, 1, 0) | 0;
 i11 = tempRet0;
 HEAP32[H_BASE + 2232 >> 2] = i13;
 HEAP32[H_BASE + 2236 >> 2] = i11;
 HEAP32[i10 >> 2] = i13;
 HEAP32[i10 + 4 >> 2] = i11;
 _memset(i1 + 728 | 0, 0, 43) | 0;
 __ZN7WebCore28DocumentStyleSheetCollectionC1ERNS_8DocumentE(i1 + 772 | 0, i1);
 i11 = i1 + 928 | 0;
 i10 = i1 + 932 | 0;
 i13 = i1 + 936 | 0;
 HEAP32[i13 >> 2] = 0;
 i15 = i1 + 940 | 0;
 HEAP8[i15] = 0;
 i16 = i1 + 944 | 0;
 HEAP32[i16 >> 2] = 0;
 HEAP8[i1 + 948 | 0] = 0;
 _memset(i1 + 920 | 0, 0, 13) | 0;
 __ZN7WebCore16VisitedLinkState6createERNS_8DocumentE(i8, i1);
 i17 = i8 | 0;
 i8 = HEAP32[i17 >> 2] | 0;
 HEAP32[i17 >> 2] = 0;
 HEAP32[i1 + 952 >> 2] = i8;
 HEAP8[i1 + 956 | 0] = 0;
 HEAP32[i1 + 960 >> 2] = 2;
 HEAP8[i1 + 964 | 0] = 0;
 i8 = i1 + 968 | 0;
 __ZN7WebCore9TimerBaseC2Ev(i8);
 HEAP32[i8 >> 2] = H_BASE + 1928;
 HEAP32[i1 + 1012 >> 2] = i1;
 i8 = i1 + 1016 | 0;
 HEAP32[i8 >> 2] = F_BASE_vii + 48;
 HEAP32[i8 + 4 >> 2] = 0;
 i8 = i1 + 1024 | 0;
 __ZN7WebCore9TimerBaseC2Ev(i8);
 HEAP32[i8 >> 2] = H_BASE + 1928;
 HEAP32[i1 + 1068 >> 2] = i1;
 i8 = i1 + 1072 | 0;
 HEAP32[i8 >> 2] = F_BASE_vii + 14;
 HEAP32[i8 + 4 >> 2] = 0;
 HEAP8[i1 + 1086 | 0] = 0;
 HEAP8[i1 + 1087 | 0] = 0;
 HEAP8[i1 + 1088 | 0] = 0;
 HEAP32[i1 + 1092 >> 2] = 0;
 HEAP32[i1 + 1096 >> 2] = 0;
 i8 = i1 + 1080 | 0;
 tempBigInt = 0;
 HEAP8[i8] = tempBigInt;
 tempBigInt = tempBigInt >> 8;
 HEAP8[i8 + 1 | 0] = tempBigInt;
 tempBigInt = tempBigInt >> 8;
 HEAP8[i8 + 2 | 0] = tempBigInt;
 tempBigInt = tempBigInt >> 8;
 HEAP8[i8 + 3 | 0] = tempBigInt;
 HEAP32[i1 + 1100 >> 2] = 1;
 HEAP32[i1 + 1104 >> 2] = 0;
 HEAP32[i1 + 1108 >> 2] = 1;
 HEAP8[i1 + 1112 | 0] = 0;
 HEAP32[i1 + 1116 >> 2] = 0;
 HEAP32[i1 + 1120 >> 2] = 0;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 __ZN7WebCore24DocumentMarkerControllerC1Ev(i8);
 HEAP32[i1 + 1124 >> 2] = i8;
 i8 = i1 + 1128 | 0;
 __ZN7WebCore9TimerBaseC2Ev(i8);
 HEAP32[i8 >> 2] = H_BASE + 1928;
 HEAP32[i1 + 1172 >> 2] = i1;
 i8 = i1 + 1176 | 0;
 HEAP32[i8 >> 2] = F_BASE_vii + 8;
 HEAP32[i8 + 4 >> 2] = 0;
 i8 = i1 + 1184 | 0;
 __ZN7WebCore9TimerBaseC2Ev(i8);
 HEAP32[i8 >> 2] = H_BASE + 1928;
 HEAP32[i1 + 1228 >> 2] = i1;
 i8 = i1 + 1232 | 0;
 HEAP32[i8 >> 2] = F_BASE_vii + 56;
 HEAP32[i8 + 4 >> 2] = 0;
 HEAP32[i1 + 1240 >> 2] = 0;
 HEAP8[i1 + 1244 | 0] = 0;
 HEAP8[i1 + 1245 | 0] = 0;
 HEAP32[i1 + 1248 >> 2] = 0;
 HEAPF64[i1 + 1256 >> 3] = +__ZN3WTF27monotonicallyIncreasingTimeEv() * +1e3;
 HEAP8[i1 + 1264 | 0] = 0;
 i8 = __ZN3WTF10fastMallocEj(104) | 0;
 __ZN7WebCore12ScriptRunnerC1ERNS_8DocumentE(i8, i1);
 HEAP32[i1 + 1268 >> 2] = i8;
 _memset(i1 + 1272 | 0, 0, 24) | 0;
 HEAP32[i9 >> 2] = H_BASE + 1408;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i1 + 1296 | 0, i9);
 i9 = i1 + 1300 | 0;
 HEAP32[i9 >> 2] = HEAP32[i9 >> 2] & -8;
 HEAP32[i1 + 1304 >> 2] = 0;
 HEAP32[i1 + 1308 >> 2] = 0;
 HEAP32[i1 + 1312 >> 2] = 2;
 _memset(i1 + 1412 | 0, 0, 20) | 0;
 _memset(i1 + 1316 | 0, 0, 40) | 0;
 _memset(i1 + 1388 | 0, 0, 22) | 0;
 HEAP8[i1 + 1432 | 0] = 1;
 HEAP8[i1 + 1433 | 0] = 0;
 _memset(i1 + 1436 | 0, 0, 113) | 0;
 _memset(i1 + 1552 | 0, 0, 24) | 0;
 HEAP8[i1 + 1576 | 0] = i4;
 HEAP8[i1 + 1577 | 0] = i5 & 1;
 HEAP8[i1 + 1578 | 0] = i5 >>> 1 & 1;
 HEAP8[i1 + 1579 | 0] = 0;
 HEAP8[i1 + 1580 | 0] = 0;
 HEAP8[i1 + 1581 | 0] = 0;
 HEAP32[i1 + 1584 >> 2] = 0;
 __ZN7WebCore18DocumentEventQueueC1ERNS_8DocumentE(i1 + 1588 | 0, i1);
 i5 = __ZN3WTF10fastMallocEj(8) | 0;
 HEAP32[i5 >> 2] = 1;
 HEAP32[i5 + 4 >> 2] = i1;
 HEAP32[i1 + 1656 >> 2] = i5;
 _memset(i1 + 1660 | 0, 0, 20) | 0;
 i5 = HEAP32[__ZN7WebCore9HTMLNames6idAttrE >> 2] | 0;
 HEAP32[i1 + 1680 >> 2] = i5;
 i4 = i5 | 0;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 HEAP8[i1 + 1684 | 0] = 0;
 i4 = i1 + 1712 | 0;
 _memset(i1 + 1688 | 0, 0, 20) | 0;
 __ZN7WebCore9TimerBaseC2Ev(i4);
 HEAP32[i4 >> 2] = H_BASE + 1928;
 HEAP32[i1 + 1756 >> 2] = i1;
 i4 = i1 + 1760 | 0;
 HEAP32[i4 >> 2] = F_BASE_vii + 58;
 HEAP32[i4 + 4 >> 2] = 0;
 i4 = i1 + 1840 | 0;
 _memset(i1 + 1768 | 0, 0, 41) | 0;
 _memset(i1 + 1812 | 0, 0, 24) | 0;
 __ZN7WebCore9TimerBaseC2Ev(i4);
 HEAP32[i4 >> 2] = H_BASE + 1928;
 HEAP32[i1 + 1884 >> 2] = i1;
 i4 = i1 + 1888 | 0;
 HEAP32[i4 >> 2] = F_BASE_vii + 12;
 HEAP32[i4 + 4 >> 2] = 0;
 HEAP32[i1 + 1896 >> 2] = 0;
 HEAPF32[i1 + 1900 >> 2] = +-1;
 HEAPF32[i1 + 1904 >> 2] = +-1;
 HEAPF32[i1 + 1908 >> 2] = +-1;
 HEAPF32[i1 + 1912 >> 2] = +-1;
 HEAPF32[i1 + 1916 >> 2] = +-1;
 HEAPF32[i1 + 1920 >> 2] = +-1;
 HEAPF32[i1 + 1924 >> 2] = +-1;
 HEAPF32[i1 + 1928 >> 2] = +-1;
 HEAPF32[i1 + 1932 >> 2] = +-1;
 HEAPF32[i1 + 1936 >> 2] = +-1;
 HEAPF32[i1 + 1940 >> 2] = +-1;
 HEAP32[i1 + 1944 >> 2] = 1;
 HEAP8[i1 + 1948 | 0] = 0;
 HEAP8[i1 + 1949 | 0] = 0;
 HEAP32[i1 + 1952 >> 2] = 0;
 HEAP8[i1 + 1956 | 0] = 0;
 i4 = i1 + 1984 | 0;
 _memset(i1 + 1960 | 0, 0, 20) | 0;
 __ZN7WebCore9TimerBaseC2Ev(i4);
 HEAP32[i4 >> 2] = H_BASE + 1928;
 HEAP32[i1 + 2028 >> 2] = i1;
 i4 = i1 + 2032 | 0;
 HEAP32[i4 >> 2] = F_BASE_vii + 44;
 HEAP32[i4 + 4 >> 2] = 0;
 _memset(i1 + 2040 | 0, 0, 13) | 0;
 HEAP8[i1 + 2053 | 0] = 1;
 i4 = i1 + 2056 | 0;
 __ZN7WebCore9TimerBaseC2Ev(i4);
 HEAP32[i4 >> 2] = H_BASE + 1928;
 HEAP32[i1 + 2100 >> 2] = i1;
 i4 = i1 + 2104 | 0;
 HEAP32[i4 >> 2] = F_BASE_vii + 50;
 HEAP32[i4 + 4 >> 2] = 0;
 HEAP32[i1 + 2112 >> 2] = 0;
 i4 = i1 + 2120 | 0;
 __ZN7WebCore9TimerBaseC2Ev(i4);
 HEAP32[i4 >> 2] = H_BASE + 1928;
 HEAP32[i1 + 2164 >> 2] = i1;
 i4 = i1 + 2168 | 0;
 HEAP32[i4 >> 2] = F_BASE_vii + 32;
 HEAP32[i4 + 4 >> 2] = 0;
 i4 = i1 + 2208 | 0;
 _memset(i1 + 2176 | 0, 0, 32) | 0;
 __ZN7WebCore9TimerBaseC2Ev(i4);
 HEAP32[i4 >> 2] = H_BASE + 1928;
 HEAP32[i1 + 2252 >> 2] = i1;
 i4 = i1 + 2256 | 0;
 HEAP32[i4 >> 2] = F_BASE_vii + 28;
 HEAP32[i4 + 4 >> 2] = 0;
 _memset(i1 + 2264 | 0, 0, 22) | 0;
 if ((i2 | 0) == 0) {
  i18 = 6;
 } else {
  if ((HEAP32[i2 + 448 >> 2] | 0) == 0) {
   i18 = 6;
  } else {
   i18 = 8;
  }
 }
 do {
  if ((i18 | 0) == 6) {
   i2 = HEAP32[i3 >> 2] | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   if ((HEAP32[i2 + 4 >> 2] | 0) != 0) {
    i18 = 8;
   }
  }
 } while (0);
 if ((i18 | 0) == 8) {
  __ZN7WebCore8Document6setURLERKNS_3URLE(i1, i3);
 }
 i3 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   i18 = 16;
  } else {
   i14 = HEAP32[(__ZNK7WebCore11FrameLoader20activeDocumentLoaderEv(i3 + 80 | 0) | 0) + 16 >> 2] | 0;
   if ((i14 | 0) != 0) {
    i2 = i14 | 0;
    HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
   }
   i2 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = i14;
   if ((i2 | 0) == 0) {
    i19 = i14;
    break;
   }
   i14 = i2 | 0;
   i4 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore20CachedResourceLoaderD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    i18 = 16;
    break;
   } else {
    HEAP32[i14 >> 2] = i4;
    i18 = 16;
    break;
   }
  }
 } while (0);
 if ((i18 | 0) == 16) {
  i19 = HEAP32[i12 >> 2] | 0;
 }
 do {
  if ((i19 | 0) == 0) {
   i18 = __ZN3WTF10fastMallocEj(144) | 0;
   __ZN7WebCore20CachedResourceLoaderC1EPNS_14DocumentLoaderE(i18, 0);
   i3 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = i18;
   if ((i3 | 0) == 0) {
    break;
   }
   i18 = i3 | 0;
   i4 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore20CachedResourceLoaderD1Ev(i3);
    __ZN3WTF8fastFreeEPv(i3);
    break;
   } else {
    HEAP32[i18 >> 2] = i4;
    break;
   }
  }
 } while (0);
 HEAP32[(HEAP32[i12 >> 2] | 0) + 44 >> 2] = i1;
 HEAP32[i11 >> 2] = __ZN7WebCore7makeRGBEiii(0, 0, 238) | 0;
 HEAP8[i10] = 1;
 HEAP32[i13 >> 2] = __ZN7WebCore7makeRGBEiii(85, 26, 139) | 0;
 HEAP8[i15] = 1;
 __ZN3WTF6StringC1EPKc(i7, H_BASE + 656 | 0);
 __ZN7WebCore5Color13setNamedColorERKN3WTF6StringE(i16, i7);
 i16 = HEAP32[i7 >> 2] | 0;
 if ((i16 | 0) == 0) {
  __ZN7WebCore8Document19initSecurityContextEv(i1);
  __ZN7WebCore8Document15initDNSPrefetchEv(i1);
  i20 = i1 + 1356 | 0;
  i21 = i20;
  _memset(i21 | 0, 0, 32) | 0;
  i22 = HEAP32[__ZN7WebCore17InspectorCounters10s_countersE >> 2] | 0;
  i23 = i22 + 1 | 0;
  HEAP32[__ZN7WebCore17InspectorCounters10s_countersE >> 2] = i23;
  STACKTOP = i6;
  return;
 }
 i7 = i16 | 0;
 i15 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
 if ((i15 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i16);
  __ZN7WebCore8Document19initSecurityContextEv(i1);
  __ZN7WebCore8Document15initDNSPrefetchEv(i1);
  i20 = i1 + 1356 | 0;
  i21 = i20;
  _memset(i21 | 0, 0, 32) | 0;
  i22 = HEAP32[__ZN7WebCore17InspectorCounters10s_countersE >> 2] | 0;
  i23 = i22 + 1 | 0;
  HEAP32[__ZN7WebCore17InspectorCounters10s_countersE >> 2] = i23;
  STACKTOP = i6;
  return;
 } else {
  HEAP32[i7 >> 2] = i15;
  __ZN7WebCore8Document19initSecurityContextEv(i1);
  __ZN7WebCore8Document15initDNSPrefetchEv(i1);
  i20 = i1 + 1356 | 0;
  i21 = i20;
  _memset(i21 | 0, 0, 32) | 0;
  i22 = HEAP32[__ZN7WebCore17InspectorCounters10s_countersE >> 2] | 0;
  i23 = i22 + 1 | 0;
  HEAP32[__ZN7WebCore17InspectorCounters10s_countersE >> 2] = i23;
  STACKTOP = i6;
  return;
 }
}
function __ZN7WebCore8DocumentC1EPNS_5FrameERKNS_3URLEjj(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i1 | 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 1;
 HEAP32[i10 >> 2] = __ZTVN7WebCore4NodeE + 8;
 HEAP32[i1 + 12 >> 2] = 8450;
 HEAP32[i1 + 16 >> 2] = 0;
 if ((HEAP8[H_BASE + 2240 | 0] | 0) == 0) {
  i11 = __Znwj(44) | 0;
  __ZN7WebCore9TreeScopeC1Ev(i11);
  HEAP32[H_BASE + 2224 >> 2] = i11;
  HEAP32[H_BASE + 2240 >> 2] = 1;
  HEAP32[H_BASE + 2244 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 2224 >> 2] | 0;
 }
 HEAP32[i1 + 20 >> 2] = i12;
 HEAP32[i1 + 24 >> 2] = 0;
 HEAP32[i1 + 28 >> 2] = 0;
 HEAP32[i1 + 32 >> 2] = 0;
 i11 = i12 + 16 | 0;
 HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
 HEAP32[__ZN7WebCore17InspectorCounters10s_countersE + 4 >> 2] = (HEAP32[__ZN7WebCore17InspectorCounters10s_countersE + 4 >> 2] | 0) + 1;
 HEAP32[i1 + 36 >> 2] = 0;
 HEAP32[i1 + 40 >> 2] = 0;
 HEAP32[i10 >> 2] = H_BASE + 1424;
 i11 = i1 + 44 | 0;
 i12 = i11 | 0;
 HEAP32[i12 >> 2] = H_BASE + 1788;
 i13 = i1 + 88 | 0;
 i14 = i13 | 0;
 HEAP32[i14 >> 2] = H_BASE + 1812;
 __ZN7WebCore9TreeScopeC2EPNS_8DocumentE(i11, i1);
 __ZN7WebCore22ScriptExecutionContextC2Ev(i13);
 HEAP32[i10 >> 2] = H_BASE + 1424;
 HEAP32[i12 >> 2] = H_BASE + 1788;
 HEAP32[i14 >> 2] = H_BASE + 1812;
 i14 = i1 + 248 | 0;
 __ZN7WebCore9TimerBaseC2Ev(i14);
 HEAP32[i14 >> 2] = H_BASE + 2e3;
 HEAP32[i1 + 292 >> 2] = i1;
 i14 = i1 + 296 | 0;
 HEAP32[i14 >> 2] = F_BASE_vii + 6;
 HEAP32[i14 + 4 >> 2] = 0;
 HEAPF64[i1 + 304 >> 3] = +30;
 HEAP8[i1 + 312 | 0] = 0;
 i14 = i1 + 332 | 0;
 _memset(i1 + 320 | 0, 0, 12) | 0;
 HEAP32[i14 >> 2] = i2;
 i12 = i1 + 340 | 0;
 i10 = i1 + 356 | 0;
 HEAP32[i10 >> 2] = 0;
 _memset(i1 + 336 | 0, 0, 17) | 0;
 __ZN7WebCore3URL10invalidateEv(i10);
 i10 = i1 + 404 | 0;
 HEAP32[i10 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i10);
 i10 = i1 + 452 | 0;
 HEAP32[i10 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i10);
 i10 = i1 + 500 | 0;
 HEAP32[i10 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i10);
 i10 = i1 + 548 | 0;
 HEAP32[i10 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i10);
 i10 = i1 + 596 | 0;
 HEAP32[i10 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i10);
 _memset(i1 + 644 | 0, 0, 19) | 0;
 HEAP32[i1 + 664 >> 2] = 2;
 HEAP8[i1 + 668 | 0] = 0;
 HEAP32[i1 + 672 >> 2] = -16777216;
 HEAP8[i1 + 676 | 0] = 1;
 _memset(i1 + 680 | 0, 0, 16) | 0;
 __ZN7WebCore20UserActionElementSetC1Ev(i1 + 696 | 0);
 i10 = i1 + 720 | 0;
 i13 = _i64Add(HEAP32[H_BASE + 2232 >> 2] | 0, HEAP32[H_BASE + 2236 >> 2] | 0, 1, 0) | 0;
 i11 = tempRet0;
 HEAP32[H_BASE + 2232 >> 2] = i13;
 HEAP32[H_BASE + 2236 >> 2] = i11;
 HEAP32[i10 >> 2] = i13;
 HEAP32[i10 + 4 >> 2] = i11;
 _memset(i1 + 728 | 0, 0, 43) | 0;
 __ZN7WebCore28DocumentStyleSheetCollectionC1ERNS_8DocumentE(i1 + 772 | 0, i1);
 i11 = i1 + 928 | 0;
 i10 = i1 + 932 | 0;
 i13 = i1 + 936 | 0;
 HEAP32[i13 >> 2] = 0;
 i15 = i1 + 940 | 0;
 HEAP8[i15] = 0;
 i16 = i1 + 944 | 0;
 HEAP32[i16 >> 2] = 0;
 HEAP8[i1 + 948 | 0] = 0;
 _memset(i1 + 920 | 0, 0, 13) | 0;
 __ZN7WebCore16VisitedLinkState6createERNS_8DocumentE(i8, i1);
 i17 = i8 | 0;
 i8 = HEAP32[i17 >> 2] | 0;
 HEAP32[i17 >> 2] = 0;
 HEAP32[i1 + 952 >> 2] = i8;
 HEAP8[i1 + 956 | 0] = 0;
 HEAP32[i1 + 960 >> 2] = 2;
 HEAP8[i1 + 964 | 0] = 0;
 i8 = i1 + 968 | 0;
 __ZN7WebCore9TimerBaseC2Ev(i8);
 HEAP32[i8 >> 2] = H_BASE + 1928;
 HEAP32[i1 + 1012 >> 2] = i1;
 i8 = i1 + 1016 | 0;
 HEAP32[i8 >> 2] = F_BASE_vii + 48;
 HEAP32[i8 + 4 >> 2] = 0;
 i8 = i1 + 1024 | 0;
 __ZN7WebCore9TimerBaseC2Ev(i8);
 HEAP32[i8 >> 2] = H_BASE + 1928;
 HEAP32[i1 + 1068 >> 2] = i1;
 i8 = i1 + 1072 | 0;
 HEAP32[i8 >> 2] = F_BASE_vii + 14;
 HEAP32[i8 + 4 >> 2] = 0;
 HEAP8[i1 + 1086 | 0] = 0;
 HEAP8[i1 + 1087 | 0] = 0;
 HEAP8[i1 + 1088 | 0] = 0;
 HEAP32[i1 + 1092 >> 2] = 0;
 HEAP32[i1 + 1096 >> 2] = 0;
 i8 = i1 + 1080 | 0;
 tempBigInt = 0;
 HEAP8[i8] = tempBigInt;
 tempBigInt = tempBigInt >> 8;
 HEAP8[i8 + 1 | 0] = tempBigInt;
 tempBigInt = tempBigInt >> 8;
 HEAP8[i8 + 2 | 0] = tempBigInt;
 tempBigInt = tempBigInt >> 8;
 HEAP8[i8 + 3 | 0] = tempBigInt;
 HEAP32[i1 + 1100 >> 2] = 1;
 HEAP32[i1 + 1104 >> 2] = 0;
 HEAP32[i1 + 1108 >> 2] = 1;
 HEAP8[i1 + 1112 | 0] = 0;
 HEAP32[i1 + 1116 >> 2] = 0;
 HEAP32[i1 + 1120 >> 2] = 0;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 __ZN7WebCore24DocumentMarkerControllerC1Ev(i8);
 HEAP32[i1 + 1124 >> 2] = i8;
 i8 = i1 + 1128 | 0;
 __ZN7WebCore9TimerBaseC2Ev(i8);
 HEAP32[i8 >> 2] = H_BASE + 1928;
 HEAP32[i1 + 1172 >> 2] = i1;
 i8 = i1 + 1176 | 0;
 HEAP32[i8 >> 2] = F_BASE_vii + 8;
 HEAP32[i8 + 4 >> 2] = 0;
 i8 = i1 + 1184 | 0;
 __ZN7WebCore9TimerBaseC2Ev(i8);
 HEAP32[i8 >> 2] = H_BASE + 1928;
 HEAP32[i1 + 1228 >> 2] = i1;
 i8 = i1 + 1232 | 0;
 HEAP32[i8 >> 2] = F_BASE_vii + 56;
 HEAP32[i8 + 4 >> 2] = 0;
 HEAP32[i1 + 1240 >> 2] = 0;
 HEAP8[i1 + 1244 | 0] = 0;
 HEAP8[i1 + 1245 | 0] = 0;
 HEAP32[i1 + 1248 >> 2] = 0;
 HEAPF64[i1 + 1256 >> 3] = +__ZN3WTF27monotonicallyIncreasingTimeEv() * +1e3;
 HEAP8[i1 + 1264 | 0] = 0;
 i8 = __ZN3WTF10fastMallocEj(104) | 0;
 __ZN7WebCore12ScriptRunnerC1ERNS_8DocumentE(i8, i1);
 HEAP32[i1 + 1268 >> 2] = i8;
 _memset(i1 + 1272 | 0, 0, 24) | 0;
 HEAP32[i9 >> 2] = H_BASE + 1408;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i1 + 1296 | 0, i9);
 i9 = i1 + 1300 | 0;
 HEAP32[i9 >> 2] = HEAP32[i9 >> 2] & -8;
 HEAP32[i1 + 1304 >> 2] = 0;
 HEAP32[i1 + 1308 >> 2] = 0;
 HEAP32[i1 + 1312 >> 2] = 2;
 _memset(i1 + 1412 | 0, 0, 20) | 0;
 _memset(i1 + 1316 | 0, 0, 40) | 0;
 _memset(i1 + 1388 | 0, 0, 22) | 0;
 HEAP8[i1 + 1432 | 0] = 1;
 HEAP8[i1 + 1433 | 0] = 0;
 _memset(i1 + 1436 | 0, 0, 113) | 0;
 _memset(i1 + 1552 | 0, 0, 24) | 0;
 HEAP8[i1 + 1576 | 0] = i4;
 HEAP8[i1 + 1577 | 0] = i5 & 1;
 HEAP8[i1 + 1578 | 0] = i5 >>> 1 & 1;
 HEAP8[i1 + 1579 | 0] = 0;
 HEAP8[i1 + 1580 | 0] = 0;
 HEAP8[i1 + 1581 | 0] = 0;
 HEAP32[i1 + 1584 >> 2] = 0;
 __ZN7WebCore18DocumentEventQueueC1ERNS_8DocumentE(i1 + 1588 | 0, i1);
 i5 = __ZN3WTF10fastMallocEj(8) | 0;
 HEAP32[i5 >> 2] = 1;
 HEAP32[i5 + 4 >> 2] = i1;
 HEAP32[i1 + 1656 >> 2] = i5;
 _memset(i1 + 1660 | 0, 0, 20) | 0;
 i5 = HEAP32[__ZN7WebCore9HTMLNames6idAttrE >> 2] | 0;
 HEAP32[i1 + 1680 >> 2] = i5;
 i4 = i5 | 0;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 HEAP8[i1 + 1684 | 0] = 0;
 i4 = i1 + 1712 | 0;
 _memset(i1 + 1688 | 0, 0, 20) | 0;
 __ZN7WebCore9TimerBaseC2Ev(i4);
 HEAP32[i4 >> 2] = H_BASE + 1928;
 HEAP32[i1 + 1756 >> 2] = i1;
 i4 = i1 + 1760 | 0;
 HEAP32[i4 >> 2] = F_BASE_vii + 58;
 HEAP32[i4 + 4 >> 2] = 0;
 i4 = i1 + 1840 | 0;
 _memset(i1 + 1768 | 0, 0, 41) | 0;
 _memset(i1 + 1812 | 0, 0, 24) | 0;
 __ZN7WebCore9TimerBaseC2Ev(i4);
 HEAP32[i4 >> 2] = H_BASE + 1928;
 HEAP32[i1 + 1884 >> 2] = i1;
 i4 = i1 + 1888 | 0;
 HEAP32[i4 >> 2] = F_BASE_vii + 12;
 HEAP32[i4 + 4 >> 2] = 0;
 HEAP32[i1 + 1896 >> 2] = 0;
 HEAPF32[i1 + 1900 >> 2] = +-1;
 HEAPF32[i1 + 1904 >> 2] = +-1;
 HEAPF32[i1 + 1908 >> 2] = +-1;
 HEAPF32[i1 + 1912 >> 2] = +-1;
 HEAPF32[i1 + 1916 >> 2] = +-1;
 HEAPF32[i1 + 1920 >> 2] = +-1;
 HEAPF32[i1 + 1924 >> 2] = +-1;
 HEAPF32[i1 + 1928 >> 2] = +-1;
 HEAPF32[i1 + 1932 >> 2] = +-1;
 HEAPF32[i1 + 1936 >> 2] = +-1;
 HEAPF32[i1 + 1940 >> 2] = +-1;
 HEAP32[i1 + 1944 >> 2] = 1;
 HEAP8[i1 + 1948 | 0] = 0;
 HEAP8[i1 + 1949 | 0] = 0;
 HEAP32[i1 + 1952 >> 2] = 0;
 HEAP8[i1 + 1956 | 0] = 0;
 i4 = i1 + 1984 | 0;
 _memset(i1 + 1960 | 0, 0, 20) | 0;
 __ZN7WebCore9TimerBaseC2Ev(i4);
 HEAP32[i4 >> 2] = H_BASE + 1928;
 HEAP32[i1 + 2028 >> 2] = i1;
 i4 = i1 + 2032 | 0;
 HEAP32[i4 >> 2] = F_BASE_vii + 44;
 HEAP32[i4 + 4 >> 2] = 0;
 _memset(i1 + 2040 | 0, 0, 13) | 0;
 HEAP8[i1 + 2053 | 0] = 1;
 i4 = i1 + 2056 | 0;
 __ZN7WebCore9TimerBaseC2Ev(i4);
 HEAP32[i4 >> 2] = H_BASE + 1928;
 HEAP32[i1 + 2100 >> 2] = i1;
 i4 = i1 + 2104 | 0;
 HEAP32[i4 >> 2] = F_BASE_vii + 50;
 HEAP32[i4 + 4 >> 2] = 0;
 HEAP32[i1 + 2112 >> 2] = 0;
 i4 = i1 + 2120 | 0;
 __ZN7WebCore9TimerBaseC2Ev(i4);
 HEAP32[i4 >> 2] = H_BASE + 1928;
 HEAP32[i1 + 2164 >> 2] = i1;
 i4 = i1 + 2168 | 0;
 HEAP32[i4 >> 2] = F_BASE_vii + 32;
 HEAP32[i4 + 4 >> 2] = 0;
 i4 = i1 + 2208 | 0;
 _memset(i1 + 2176 | 0, 0, 32) | 0;
 __ZN7WebCore9TimerBaseC2Ev(i4);
 HEAP32[i4 >> 2] = H_BASE + 1928;
 HEAP32[i1 + 2252 >> 2] = i1;
 i4 = i1 + 2256 | 0;
 HEAP32[i4 >> 2] = F_BASE_vii + 28;
 HEAP32[i4 + 4 >> 2] = 0;
 _memset(i1 + 2264 | 0, 0, 22) | 0;
 if ((i2 | 0) == 0) {
  i18 = 6;
 } else {
  if ((HEAP32[i2 + 448 >> 2] | 0) == 0) {
   i18 = 6;
  } else {
   i18 = 8;
  }
 }
 do {
  if ((i18 | 0) == 6) {
   i2 = HEAP32[i3 >> 2] | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   if ((HEAP32[i2 + 4 >> 2] | 0) != 0) {
    i18 = 8;
   }
  }
 } while (0);
 if ((i18 | 0) == 8) {
  __ZN7WebCore8Document6setURLERKNS_3URLE(i1, i3);
 }
 i3 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   i18 = 16;
  } else {
   i14 = HEAP32[(__ZNK7WebCore11FrameLoader20activeDocumentLoaderEv(i3 + 80 | 0) | 0) + 16 >> 2] | 0;
   if ((i14 | 0) != 0) {
    i2 = i14 | 0;
    HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
   }
   i2 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = i14;
   if ((i2 | 0) == 0) {
    i19 = i14;
    break;
   }
   i14 = i2 | 0;
   i4 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore20CachedResourceLoaderD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    i18 = 16;
    break;
   } else {
    HEAP32[i14 >> 2] = i4;
    i18 = 16;
    break;
   }
  }
 } while (0);
 if ((i18 | 0) == 16) {
  i19 = HEAP32[i12 >> 2] | 0;
 }
 do {
  if ((i19 | 0) == 0) {
   i18 = __ZN3WTF10fastMallocEj(144) | 0;
   __ZN7WebCore20CachedResourceLoaderC1EPNS_14DocumentLoaderE(i18, 0);
   i3 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = i18;
   if ((i3 | 0) == 0) {
    break;
   }
   i18 = i3 | 0;
   i4 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore20CachedResourceLoaderD1Ev(i3);
    __ZN3WTF8fastFreeEPv(i3);
    break;
   } else {
    HEAP32[i18 >> 2] = i4;
    break;
   }
  }
 } while (0);
 HEAP32[(HEAP32[i12 >> 2] | 0) + 44 >> 2] = i1;
 HEAP32[i11 >> 2] = __ZN7WebCore7makeRGBEiii(0, 0, 238) | 0;
 HEAP8[i10] = 1;
 HEAP32[i13 >> 2] = __ZN7WebCore7makeRGBEiii(85, 26, 139) | 0;
 HEAP8[i15] = 1;
 __ZN3WTF6StringC1EPKc(i7, H_BASE + 656 | 0);
 __ZN7WebCore5Color13setNamedColorERKN3WTF6StringE(i16, i7);
 i16 = HEAP32[i7 >> 2] | 0;
 if ((i16 | 0) == 0) {
  __ZN7WebCore8Document19initSecurityContextEv(i1);
  __ZN7WebCore8Document15initDNSPrefetchEv(i1);
  i20 = i1 + 1356 | 0;
  i21 = i20;
  _memset(i21 | 0, 0, 32) | 0;
  i22 = HEAP32[__ZN7WebCore17InspectorCounters10s_countersE >> 2] | 0;
  i23 = i22 + 1 | 0;
  HEAP32[__ZN7WebCore17InspectorCounters10s_countersE >> 2] = i23;
  STACKTOP = i6;
  return;
 }
 i7 = i16 | 0;
 i15 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
 if ((i15 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i16);
  __ZN7WebCore8Document19initSecurityContextEv(i1);
  __ZN7WebCore8Document15initDNSPrefetchEv(i1);
  i20 = i1 + 1356 | 0;
  i21 = i20;
  _memset(i21 | 0, 0, 32) | 0;
  i22 = HEAP32[__ZN7WebCore17InspectorCounters10s_countersE >> 2] | 0;
  i23 = i22 + 1 | 0;
  HEAP32[__ZN7WebCore17InspectorCounters10s_countersE >> 2] = i23;
  STACKTOP = i6;
  return;
 } else {
  HEAP32[i7 >> 2] = i15;
  __ZN7WebCore8Document19initSecurityContextEv(i1);
  __ZN7WebCore8Document15initDNSPrefetchEv(i1);
  i20 = i1 + 1356 | 0;
  i21 = i20;
  _memset(i21 | 0, 0, 32) | 0;
  i22 = HEAP32[__ZN7WebCore17InspectorCounters10s_countersE >> 2] | 0;
  i23 = i22 + 1 | 0;
  HEAP32[__ZN7WebCore17InspectorCounters10s_countersE >> 2] = i23;
  STACKTOP = i6;
  return;
 }
}
function __ZN7WebCore8Document11updateTitleERKNS_19StringWithDirectionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = i2 | 0;
 i11 = i1 + 1104 | 0;
 do {
  if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i10 >> 2] | 0, HEAP32[i11 >> 2] | 0) | 0) {
   if ((HEAP32[i2 + 4 >> 2] | 0) != (HEAP32[i1 + 1108 >> 2] | 0)) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 i12 = HEAP32[i10 >> 2] | 0;
 if ((i12 | 0) != 0) {
  i10 = i12 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
 }
 i10 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = i12;
 do {
  if ((i10 | 0) != 0) {
   i12 = i10 | 0;
   i13 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i12 >> 2] = i13;
    break;
   }
  }
 } while (0);
 i10 = i1 + 1108 | 0;
 HEAP32[i10 >> 2] = HEAP32[i2 + 4 >> 2];
 i2 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   i14 = 11;
  } else {
   i11 = HEAP32[i2 + 4 >> 2] | 0;
   if ((i11 | 0) == 0) {
    i14 = 11;
    break;
   }
   i13 = i1 + 1096 | 0;
   if ((HEAP32[i2 + 16 >> 2] & 32 | 0) == 0) {
    i12 = HEAP32[i2 + 8 >> 2] | 0;
    i15 = i8 | 0;
    HEAP32[i15 >> 2] = i11;
    i16 = i8 + 4 | 0;
    if ((4294967295 / (i11 >>> 0) & -1) >>> 0 < 2 >>> 0) {
     __ZN3WTF7CheckedIjNS_15CrashOnOverflowEEC1ENS_19ResultOverflowedTagE(i7, 0);
    }
    i17 = i11 << 1;
    HEAP32[i7 >> 2] = i17;
    HEAP32[i16 >> 2] = __ZN3WTF10fastMallocEj(i17) | 0;
    i17 = 0;
    while (1) {
     if (i17 >>> 0 >= i11 >>> 0) {
      i18 = 0;
      break;
     }
     i19 = HEAP16[i12 + (i17 << 1) >> 1] | 0;
     if ((i19 & 65535) >>> 0 < 33 >>> 0 | i19 << 16 >> 16 == 127) {
      i17 = i17 + 1 | 0;
     } else {
      i18 = 1;
      break;
     }
    }
    do {
     if ((i17 | 0) == (i11 | 0)) {
      i20 = 0;
      i21 = 1;
     } else {
      if (i18) {
       i19 = 0;
       i22 = 0;
       i23 = i17;
       while (1) {
        i24 = HEAP16[i12 + (i23 << 1) >> 1] | 0;
        do {
         if ((i24 & 65535) >>> 0 < 33 >>> 0 | i24 << 16 >> 16 == 127) {
          i14 = 59;
         } else {
          if ((1 << ((_u_charType(i24 & 65535) | 0) << 24 >> 24) & 24576 | 0) != 0) {
           i14 = 59;
           break;
          }
          HEAP16[(HEAP32[i16 >> 2] | 0) + (i19 << 1) >> 1] = i24;
          i25 = 0;
          i26 = i19 + 1 | 0;
         }
        } while (0);
        do {
         if ((i14 | 0) == 59) {
          i14 = 0;
          if (i22) {
           i25 = 1;
           i26 = i19;
           break;
          }
          HEAP16[(HEAP32[i16 >> 2] | 0) + (i19 << 1) >> 1] = 32;
          i25 = 1;
          i26 = i19 + 1 | 0;
         }
        } while (0);
        i24 = i23 + 1 | 0;
        if (i24 >>> 0 < i11 >>> 0) {
         i19 = i26;
         i22 = i25;
         i23 = i24;
        } else {
         i27 = i26;
         break;
        }
       }
      } else {
       i27 = 0;
      }
      while (1) {
       if ((i27 | 0) == 0) {
        i14 = 66;
        break;
       }
       i28 = i27 - 1 | 0;
       i29 = HEAP32[i16 >> 2] | 0;
       if ((HEAP16[i29 + (i28 << 1) >> 1] | 0) == 32) {
        i27 = i28;
       } else {
        i14 = 65;
        break;
       }
      }
      if ((i14 | 0) == 65) {
       if ((i28 | 0) == 0) {
        i30 = i29;
        i14 = 67;
       } else {
        i31 = i28;
        i32 = i29;
       }
      } else if ((i14 | 0) == 66) {
       i30 = HEAP32[i16 >> 2] | 0;
       i14 = 67;
      }
      if ((i14 | 0) == 67) {
       if ((HEAP16[i30 >> 1] | 0) == 32) {
        i20 = 0;
        i21 = 1;
        break;
       } else {
        i31 = 0;
        i32 = i30;
       }
      }
      i23 = i31 + 1 | 0;
      HEAP32[i15 >> 2] = i23;
      i22 = HEAP32[i1 + 1308 >> 2] | 0;
      do {
       if ((i22 | 0) != 0) {
        i19 = i22 + 12 | 0;
        if ((HEAP16[i19 >> 1] | 0) == 92 | (i23 | 0) == 0) {
         break;
        } else {
         i33 = 0;
        }
        while (1) {
         i24 = i32 + (i33 << 1) | 0;
         if ((HEAP16[i24 >> 1] | 0) == 92) {
          HEAP16[i24 >> 1] = HEAP16[i19 >> 1] | 0;
         }
         i33 = i33 + 1 | 0;
         if (i33 >>> 0 >= i23 >>> 0) {
          break;
         }
        }
       }
      } while (0);
      __ZN3WTF10StringImpl5adoptERNS_12StringBufferItEE(i9, i8);
      i23 = HEAP32[i10 >> 2] | 0;
      i22 = i9 | 0;
      i19 = HEAP32[i22 >> 2] | 0;
      if ((i19 | 0) == 0) {
       i20 = 0;
       i21 = i23;
       break;
      }
      i24 = i19 | 0;
      HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 2;
      i24 = HEAP32[i22 >> 2] | 0;
      if ((i24 | 0) == 0) {
       i20 = i19;
       i21 = i23;
       break;
      }
      i22 = i24 | 0;
      i34 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
      if ((i34 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i24);
       i20 = i19;
       i21 = i23;
       break;
      } else {
       HEAP32[i22 >> 2] = i34;
       i20 = i19;
       i21 = i23;
       break;
      }
     }
    } while (0);
    __ZN3WTF8fastFreeEPv(HEAP32[i16 >> 2] | 0);
    i15 = i13 | 0;
    i12 = HEAP32[i15 >> 2] | 0;
    HEAP32[i15 >> 2] = i20;
    do {
     if ((i12 | 0) != 0) {
      i15 = i12 | 0;
      i17 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
      if ((i17 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i12);
       break;
      } else {
       HEAP32[i15 >> 2] = i17;
       break;
      }
     }
    } while (0);
    HEAP32[i1 + 1100 >> 2] = i21;
    break;
   } else {
    i12 = HEAP32[i2 + 8 >> 2] | 0;
    i16 = i5 | 0;
    HEAP32[i16 >> 2] = i11;
    i17 = i5 + 4 | 0;
    if ((4294967295 / (i11 >>> 0) & -1 | 0) == 0) {
     __ZN3WTF7CheckedIjNS_15CrashOnOverflowEEC1ENS_19ResultOverflowedTagE(i4, 0);
    }
    HEAP32[i4 >> 2] = i11;
    HEAP32[i17 >> 2] = __ZN3WTF10fastMallocEj(i11) | 0;
    i15 = 0;
    while (1) {
     if (i15 >>> 0 >= i11 >>> 0) {
      i35 = 0;
      break;
     }
     i23 = HEAP8[i12 + i15 | 0] | 0;
     if ((i23 & 255) >>> 0 < 33 >>> 0 | i23 << 24 >> 24 == 127) {
      i15 = i15 + 1 | 0;
     } else {
      i35 = 1;
      break;
     }
    }
    do {
     if ((i15 | 0) == (i11 | 0)) {
      i36 = 0;
      i37 = 1;
     } else {
      if (i35) {
       i23 = 0;
       i19 = 0;
       i34 = i15;
       while (1) {
        i22 = HEAP8[i12 + i34 | 0] | 0;
        do {
         if ((i22 & 255) >>> 0 < 33 >>> 0 | i22 << 24 >> 24 == 127) {
          i14 = 26;
         } else {
          if ((1 << ((_u_charType(i22 & 255) | 0) << 24 >> 24) & 24576 | 0) != 0) {
           i14 = 26;
           break;
          }
          HEAP8[(HEAP32[i17 >> 2] | 0) + i23 | 0] = i22;
          i38 = 0;
          i39 = i23 + 1 | 0;
         }
        } while (0);
        do {
         if ((i14 | 0) == 26) {
          i14 = 0;
          if (i19) {
           i38 = 1;
           i39 = i23;
           break;
          }
          HEAP8[(HEAP32[i17 >> 2] | 0) + i23 | 0] = 32;
          i38 = 1;
          i39 = i23 + 1 | 0;
         }
        } while (0);
        i22 = i34 + 1 | 0;
        if (i22 >>> 0 < i11 >>> 0) {
         i23 = i39;
         i19 = i38;
         i34 = i22;
        } else {
         i40 = i39;
         break;
        }
       }
      } else {
       i40 = 0;
      }
      while (1) {
       if ((i40 | 0) == 0) {
        i14 = 33;
        break;
       }
       i41 = i40 - 1 | 0;
       i42 = HEAP32[i17 >> 2] | 0;
       if ((HEAP8[i42 + i41 | 0] | 0) == 32) {
        i40 = i41;
       } else {
        i14 = 32;
        break;
       }
      }
      if ((i14 | 0) == 32) {
       if ((i41 | 0) == 0) {
        i43 = i42;
        i14 = 34;
       } else {
        i44 = i41;
        i45 = i42;
       }
      } else if ((i14 | 0) == 33) {
       i43 = HEAP32[i17 >> 2] | 0;
       i14 = 34;
      }
      if ((i14 | 0) == 34) {
       if ((HEAP8[i43] | 0) == 32) {
        i36 = 0;
        i37 = 1;
        break;
       } else {
        i44 = 0;
        i45 = i43;
       }
      }
      i34 = i44 + 1 | 0;
      HEAP32[i16 >> 2] = i34;
      i19 = HEAP32[i1 + 1308 >> 2] | 0;
      do {
       if ((i19 | 0) != 0) {
        i23 = i19 + 12 | 0;
        if ((HEAP16[i23 >> 1] | 0) == 92 | (i34 | 0) == 0) {
         break;
        } else {
         i46 = 0;
        }
        while (1) {
         i22 = i45 + i46 | 0;
         if ((HEAP8[i22] | 0) == 92) {
          HEAP8[i22] = HEAP16[i23 >> 1];
         }
         i46 = i46 + 1 | 0;
         if (i46 >>> 0 >= i34 >>> 0) {
          break;
         }
        }
       }
      } while (0);
      __ZN3WTF10StringImpl5adoptERNS_12StringBufferIhEE(i6, i5);
      i34 = HEAP32[i10 >> 2] | 0;
      i19 = i6 | 0;
      i23 = HEAP32[i19 >> 2] | 0;
      if ((i23 | 0) == 0) {
       i36 = 0;
       i37 = i34;
       break;
      }
      i22 = i23 | 0;
      HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 2;
      i22 = HEAP32[i19 >> 2] | 0;
      if ((i22 | 0) == 0) {
       i36 = i23;
       i37 = i34;
       break;
      }
      i19 = i22 | 0;
      i24 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
      if ((i24 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i22);
       i36 = i23;
       i37 = i34;
       break;
      } else {
       HEAP32[i19 >> 2] = i24;
       i36 = i23;
       i37 = i34;
       break;
      }
     }
    } while (0);
    __ZN3WTF8fastFreeEPv(HEAP32[i17 >> 2] | 0);
    i16 = i13 | 0;
    i11 = HEAP32[i16 >> 2] | 0;
    HEAP32[i16 >> 2] = i36;
    do {
     if ((i11 | 0) != 0) {
      i16 = i11 | 0;
      i12 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
      if ((i12 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i11);
       break;
      } else {
       HEAP32[i16 >> 2] = i12;
       break;
      }
     }
    } while (0);
    HEAP32[i1 + 1100 >> 2] = i37;
    break;
   }
  }
 } while (0);
 if ((i14 | 0) == 11) {
  i14 = i1 + 1096 | 0;
  i37 = HEAP32[i14 >> 2] | 0;
  HEAP32[i14 >> 2] = 0;
  do {
   if ((i37 | 0) != 0) {
    i14 = i37 | 0;
    i36 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
    if ((i36 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i37);
     break;
    } else {
     HEAP32[i14 >> 2] = i36;
     break;
    }
   }
  } while (0);
  HEAP32[i1 + 1100 >> 2] = 1;
 }
 i37 = HEAP32[i1 + 332 >> 2] | 0;
 if ((i37 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i36 = HEAP32[i37 + 128 >> 2] | 0;
 if ((i36 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i14 = (HEAP32[i37 + 456 >> 2] | 0) == (i1 | 0) ? i36 : 0;
 if ((i14 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore14DocumentLoader8setTitleERKNS_19StringWithDirectionE(i14, i1 + 1096 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore8Document8iconURLsEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 192 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 64 | 0;
 i8 = i3 + 128 | 0;
 i9 = i3 + 176 | 0;
 i10 = i3 + 184 | 0;
 i11 = i1 + 1436 | 0;
 i12 = i1 + 1440 | 0;
 do {
  if ((HEAP32[i12 >> 2] | 0) != 0) {
   if ((HEAP32[i1 + 1444 >> 2] | 0) != 0) {
    __ZN3WTF6VectorIN7WebCore7IconURLELj0ENS_15CrashOnOverflowEE6shrinkEj(i11, 0);
   }
   i13 = i11 | 0;
   i14 = HEAP32[i13 >> 2] | 0;
   if ((i14 | 0) == 0) {
    break;
   }
   HEAP32[i13 >> 2] = 0;
   HEAP32[i12 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i14);
  }
 } while (0);
 i14 = i1 + 692 | 0;
 i13 = HEAP32[i14 >> 2] | 0;
 if ((i13 | 0) == 0) {
  STACKTOP = i3;
  return i11 | 0;
 }
 i15 = HEAP32[i13 + 36 >> 2] | 0;
 i13 = (i15 | 0) == 0;
 if (i13) {
  STACKTOP = i3;
  return i11 | 0;
 }
 i16 = (HEAP32[__ZN7WebCore9HTMLNames7headTagE >> 2] | 0) + 12 | 0;
 i17 = i15;
 while (1) {
  if ((HEAP32[i17 + 12 >> 2] & 20 | 0) == 20) {
   if ((HEAP32[(HEAP32[i17 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[i16 >> 2] | 0)) {
    break;
   }
  }
  i18 = HEAP32[i17 + 28 >> 2] | 0;
  if ((i18 | 0) == 0) {
   i19 = 93;
   break;
  } else {
   i17 = i18;
  }
 }
 if ((i19 | 0) == 93) {
  STACKTOP = i3;
  return i11 | 0;
 }
 if ((i17 | 0) == 0) {
  STACKTOP = i3;
  return i11 | 0;
 }
 L25 : do {
  if (i13) {
   i20 = 0;
  } else {
   i17 = (HEAP32[__ZN7WebCore9HTMLNames7headTagE >> 2] | 0) + 12 | 0;
   i19 = i15;
   while (1) {
    if ((HEAP32[i19 + 12 >> 2] & 20 | 0) == 20) {
     if ((HEAP32[(HEAP32[i19 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[i17 >> 2] | 0)) {
      i20 = i19;
      break L25;
     }
    }
    i16 = HEAP32[i19 + 28 >> 2] | 0;
    if ((i16 | 0) == 0) {
     i20 = 0;
     break;
    } else {
     i19 = i16;
    }
   }
  }
 } while (0);
 __ZN7WebCore11HTMLElement8childrenEv(i4, i20);
 i20 = HEAP32[i4 >> 2] | 0;
 i4 = (i20 | 0) == 0;
 if (i4) {
  STACKTOP = i3;
  return i11 | 0;
 }
 i15 = i20 + 8 | 0;
 i20 = i15 | 0;
 i13 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
 do {
  if ((i13 | 0) == 0) {
   i19 = i15 - 8 | 0;
   if ((i19 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 4 >> 2] & 127](i19);
    break;
   }
   if (!i4) {
    break;
   }
   STACKTOP = i3;
   return i11 | 0;
  } else {
   HEAP32[i20 >> 2] = i13;
  }
 } while (0);
 i13 = HEAP32[i14 >> 2] | 0;
 if ((i13 | 0) == 0) {
  i21 = 0;
 } else {
  i14 = HEAP32[i13 + 36 >> 2] | 0;
  L46 : do {
   if ((i14 | 0) == 0) {
    i22 = 0;
   } else {
    i13 = (HEAP32[__ZN7WebCore9HTMLNames7headTagE >> 2] | 0) + 12 | 0;
    i20 = i14;
    while (1) {
     if ((HEAP32[i20 + 12 >> 2] & 20 | 0) == 20) {
      if ((HEAP32[(HEAP32[i20 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[i13 >> 2] | 0)) {
       i22 = i20;
       break L46;
      }
     }
     i4 = HEAP32[i20 + 28 >> 2] | 0;
     if ((i4 | 0) == 0) {
      i22 = 0;
      break;
     } else {
      i20 = i4;
     }
    }
   }
  } while (0);
  i21 = i22;
 }
 __ZN7WebCore11HTMLElement8childrenEv(i5, i21 | 0);
 i21 = i5 | 0;
 i5 = HEAP32[i21 >> 2] | 0;
 HEAP32[i21 >> 2] = 0;
 i21 = __ZNK7WebCore14HTMLCollection6lengthEv(i5) | 0;
 if ((i21 | 0) != 0) {
  i22 = i6 | 0;
  i14 = i7 | 0;
  i20 = i7 + 4 | 0;
  i13 = i9 | 0;
  i4 = i7 + 8 | 0;
  i15 = i10 | 0;
  i19 = i7 + 12 | 0;
  i17 = i8 | 0;
  i16 = i8 + 4 | 0;
  i18 = i7 + 16 | 0;
  i23 = i7 + 20 | 0;
  i24 = i8 + 8 | 0;
  i25 = i7 + 24 | 0;
  i26 = i8 + 12 | 0;
  i27 = i7 + 28 | 0;
  i28 = i8 + 16 | 0;
  i29 = i7 + 32 | 0;
  i30 = i8 + 20 | 0;
  i31 = i7 + 36 | 0;
  i32 = i8 + 24 | 0;
  i33 = i7 + 40 | 0;
  i34 = i8 + 28 | 0;
  i35 = i7 + 44 | 0;
  i36 = i8 + 32 | 0;
  i37 = i7 + 48 | 0;
  i38 = i8 + 36 | 0;
  i39 = i7 + 52 | 0;
  i40 = i8 + 40 | 0;
  i41 = i7 + 56 | 0;
  i42 = i8 + 44 | 0;
  i43 = i7 + 60 | 0;
  i44 = i1 + 1444 | 0;
  i1 = i11 | 0;
  i45 = 0;
  while (1) {
   i46 = __ZNK7WebCore14HTMLCollection4itemEj(i5, i45) | 0;
   do {
    if ((HEAP32[i46 + 12 >> 2] & 4 | 0) != 0) {
     i47 = HEAP32[i46 + 44 >> 2] | 0;
     i48 = HEAP32[__ZN7WebCore9HTMLNames7linkTagE >> 2] | 0;
     if ((i47 | 0) != (i48 | 0)) {
      if ((HEAP32[i47 + 12 >> 2] | 0) != (HEAP32[i48 + 12 >> 2] | 0)) {
       break;
      }
      if ((HEAP32[i47 + 16 >> 2] | 0) != (HEAP32[i48 + 16 >> 2] | 0)) {
       break;
      }
     }
     i48 = i46;
     if (((__ZNK7WebCore15HTMLLinkElement8iconTypeEv(i48) | 0) & i2 | 0) == 0) {
      break;
     }
     __ZNK7WebCore15HTMLLinkElement4hrefEv(i6, i48);
     i47 = HEAP32[i22 >> 2] | 0;
     if ((i47 | 0) == 0) {
      break;
     }
     i49 = (HEAP32[i47 + 4 >> 2] | 0) == 0;
     i50 = i47 | 0;
     i51 = (HEAP32[i50 >> 2] | 0) - 2 | 0;
     if ((i51 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i47);
      if (i49) {
       break;
      }
     } else {
      HEAP32[i50 >> 2] = i51;
      if (i49) {
       break;
      }
     }
     __ZNK7WebCore15HTMLLinkElement4hrefEv(i8, i48);
     __ZNK7WebCore15HTMLLinkElement9iconSizesEv(i9, i48);
     __ZNK7WebCore15HTMLLinkElement4typeEv(i10, i48);
     HEAP32[i14 >> 2] = __ZNK7WebCore15HTMLLinkElement8iconTypeEv(i48) | 0;
     i48 = HEAP32[i13 >> 2] | 0;
     HEAP32[i20 >> 2] = i48;
     if ((i48 | 0) != 0) {
      i49 = i48 | 0;
      HEAP32[i49 >> 2] = (HEAP32[i49 >> 2] | 0) + 2;
     }
     i49 = HEAP32[i15 >> 2] | 0;
     HEAP32[i4 >> 2] = i49;
     if ((i49 | 0) != 0) {
      i48 = i49 | 0;
      HEAP32[i48 >> 2] = (HEAP32[i48 >> 2] | 0) + 2;
     }
     i48 = HEAP32[i17 >> 2] | 0;
     HEAP32[i19 >> 2] = i48;
     if ((i48 | 0) != 0) {
      i49 = i48 | 0;
      HEAP32[i49 >> 2] = (HEAP32[i49 >> 2] | 0) + 2;
     }
     i49 = HEAP8[i16] | 0;
     HEAP8[i18] = HEAP8[i18] & -4 | i49 & 1 | i49 & 2;
     HEAP32[i23 >> 2] = HEAP32[i24 >> 2];
     HEAP32[i25 >> 2] = HEAP32[i26 >> 2];
     HEAP32[i27 >> 2] = HEAP32[i28 >> 2];
     HEAP32[i29 >> 2] = HEAP32[i30 >> 2];
     HEAP32[i31 >> 2] = HEAP32[i32 >> 2];
     HEAP32[i33 >> 2] = HEAP32[i34 >> 2];
     HEAP32[i35 >> 2] = HEAP32[i36 >> 2];
     HEAP32[i37 >> 2] = HEAP32[i38 >> 2];
     HEAP32[i39 >> 2] = HEAP32[i40 >> 2];
     HEAP32[i41 >> 2] = HEAP32[i42 >> 2];
     HEAP8[i43] = 0;
     i49 = HEAP32[i15 >> 2] | 0;
     do {
      if ((i49 | 0) != 0) {
       i48 = i49 | 0;
       i51 = (HEAP32[i48 >> 2] | 0) - 2 | 0;
       if ((i51 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i49);
        break;
       } else {
        HEAP32[i48 >> 2] = i51;
        break;
       }
      }
     } while (0);
     i49 = HEAP32[i13 >> 2] | 0;
     do {
      if ((i49 | 0) != 0) {
       i51 = i49 | 0;
       i48 = (HEAP32[i51 >> 2] | 0) - 2 | 0;
       if ((i48 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i49);
        break;
       } else {
        HEAP32[i51 >> 2] = i48;
        break;
       }
      }
     } while (0);
     i49 = HEAP32[i17 >> 2] | 0;
     do {
      if ((i49 | 0) != 0) {
       i48 = i49 | 0;
       i51 = (HEAP32[i48 >> 2] | 0) - 2 | 0;
       if ((i51 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i49);
        break;
       } else {
        HEAP32[i48 >> 2] = i51;
        break;
       }
      }
     } while (0);
     i49 = HEAP32[i44 >> 2] | 0;
     if ((i49 | 0) == (HEAP32[i12 >> 2] | 0)) {
      __ZN3WTF6VectorIN7WebCore7IconURLELj0ENS_15CrashOnOverflowEE14appendSlowCaseIRS2_EEvOT_(i11, i7);
     } else {
      i51 = HEAP32[i1 >> 2] | 0;
      HEAP32[i51 + (i49 << 6) >> 2] = HEAP32[i14 >> 2];
      i48 = HEAP32[i20 >> 2] | 0;
      HEAP32[i51 + (i49 << 6) + 4 >> 2] = i48;
      if ((i48 | 0) != 0) {
       i50 = i48 | 0;
       HEAP32[i50 >> 2] = (HEAP32[i50 >> 2] | 0) + 2;
      }
      i50 = HEAP32[i4 >> 2] | 0;
      HEAP32[i51 + (i49 << 6) + 8 >> 2] = i50;
      if ((i50 | 0) != 0) {
       i48 = i50 | 0;
       HEAP32[i48 >> 2] = (HEAP32[i48 >> 2] | 0) + 2;
      }
      i48 = HEAP32[i19 >> 2] | 0;
      HEAP32[i51 + (i49 << 6) + 12 >> 2] = i48;
      if ((i48 | 0) != 0) {
       i50 = i48 | 0;
       HEAP32[i50 >> 2] = (HEAP32[i50 >> 2] | 0) + 2;
      }
      i50 = i51 + (i49 << 6) + 16 | 0;
      i48 = HEAP8[i50] & -2 | HEAP8[i18] & 1;
      HEAP8[i50] = i48;
      HEAP8[i50] = i48 & -3 | HEAP8[i18] & 2;
      HEAP32[i51 + (i49 << 6) + 20 >> 2] = HEAP32[i23 >> 2];
      HEAP32[i51 + (i49 << 6) + 24 >> 2] = HEAP32[i25 >> 2];
      HEAP32[i51 + (i49 << 6) + 28 >> 2] = HEAP32[i27 >> 2];
      HEAP32[i51 + (i49 << 6) + 32 >> 2] = HEAP32[i29 >> 2];
      HEAP32[i51 + (i49 << 6) + 36 >> 2] = HEAP32[i31 >> 2];
      HEAP32[i51 + (i49 << 6) + 40 >> 2] = HEAP32[i33 >> 2];
      HEAP32[i51 + (i49 << 6) + 44 >> 2] = HEAP32[i35 >> 2];
      HEAP32[i51 + (i49 << 6) + 48 >> 2] = HEAP32[i37 >> 2];
      HEAP32[i51 + (i49 << 6) + 52 >> 2] = HEAP32[i39 >> 2];
      HEAP32[i51 + (i49 << 6) + 56 >> 2] = HEAP32[i41 >> 2];
      HEAP8[i51 + (i49 << 6) + 60 | 0] = HEAP8[i43] & 1;
      HEAP32[i44 >> 2] = (HEAP32[i44 >> 2] | 0) + 1;
     }
     i49 = HEAP32[i19 >> 2] | 0;
     do {
      if ((i49 | 0) != 0) {
       i51 = i49 | 0;
       i48 = (HEAP32[i51 >> 2] | 0) - 2 | 0;
       if ((i48 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i49);
        break;
       } else {
        HEAP32[i51 >> 2] = i48;
        break;
       }
      }
     } while (0);
     i49 = HEAP32[i4 >> 2] | 0;
     do {
      if ((i49 | 0) != 0) {
       i48 = i49 | 0;
       i51 = (HEAP32[i48 >> 2] | 0) - 2 | 0;
       if ((i51 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i49);
        break;
       } else {
        HEAP32[i48 >> 2] = i51;
        break;
       }
      }
     } while (0);
     i49 = HEAP32[i20 >> 2] | 0;
     if ((i49 | 0) == 0) {
      break;
     }
     i51 = i49 | 0;
     i48 = (HEAP32[i51 >> 2] | 0) - 2 | 0;
     if ((i48 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i49);
      break;
     } else {
      HEAP32[i51 >> 2] = i48;
      break;
     }
    }
   } while (0);
   i45 = i45 + 1 | 0;
   if (i45 >>> 0 >= i21 >>> 0) {
    break;
   }
  }
 }
 __ZN3WTF6VectorIN7WebCore7IconURLELj0ENS_15CrashOnOverflowEE7reverseEv(i11);
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return i11 | 0;
 }
 i21 = i5 + 8 | 0;
 i5 = i21 | 0;
 i45 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i45 | 0) != 0) {
  HEAP32[i5 >> 2] = i45;
  STACKTOP = i3;
  return i11 | 0;
 }
 i45 = i21 - 8 | 0;
 if ((i45 | 0) == 0) {
  STACKTOP = i3;
  return i11 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i45 >> 2] | 0) + 4 >> 2] & 127](i45);
 STACKTOP = i3;
 return i11 | 0;
}
function __ZN7WebCore8Document27requestFullScreenForElementEPNS_7ElementEtNS0_19FullScreenCheckTypeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i6 = i5 | 0;
 i7 = i3 & 65535;
 i8 = i7 >>> 1;
 if ((i2 | 0) == 0) {
  i9 = HEAP32[i1 + 692 >> 2] | 0;
 } else {
  i9 = i2;
 }
 i2 = i9 | 0;
 L4 : do {
  if ((HEAP32[i9 + 12 >> 2] & 256 | 0) != 0) {
   L6 : do {
    if ((i4 | 0) == 0) {
     i10 = HEAP32[(HEAP32[(HEAP32[i9 + 20 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0;
     if ((i10 | 0) == 0) {
      break;
     }
     i11 = HEAP32[i10 + 448 >> 2] | 0;
     if ((i11 | 0) == 0) {
      break;
     } else {
      i12 = i11;
     }
     while (1) {
      i11 = i12 | 0;
      if (!(__ZNK7WebCore7Element12hasAttributeERKNS_13QualifiedNameE(i11, __ZN7WebCore9HTMLNames19allowfullscreenAttrE) | 0)) {
       if (!(__ZNK7WebCore7Element12hasAttributeERKNS_13QualifiedNameE(i11, __ZN7WebCore9HTMLNames25webkitallowfullscreenAttrE) | 0)) {
        break L4;
       }
      }
      i11 = HEAP32[(HEAP32[(HEAP32[i12 + 20 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0;
      if ((i11 | 0) == 0) {
       break L6;
      }
      i12 = HEAP32[i11 + 448 >> 2] | 0;
      if ((i12 | 0) == 0) {
       break;
      }
     }
    }
   } while (0);
   i11 = HEAP32[i1 + 1700 >> 2] | 0;
   do {
    if ((i11 | 0) != 0) {
     i10 = _llvm_uadd_with_overflow_i32(i11 | 0, -1 | 0) | 0;
     if (!tempRet0) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     }
     if (__ZNK7WebCore4Node8containsEPKS0_(HEAP32[(HEAP32[i1 + 1692 >> 2] | 0) + (i10 << 2) >> 2] | 0, i2) | 0) {
      break;
     }
     if ((i8 & 1 | 0) == 0) {
      break L4;
     }
    }
   } while (0);
   i11 = i1 + 332 | 0;
   i10 = HEAP32[i11 >> 2] | 0;
   L23 : do {
    if ((i10 | 0) != 0) {
     i13 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i10 + 40 | 0, 0) | 0;
     if ((i13 | 0) == 0) {
      break;
     } else {
      i14 = i13;
     }
     while (1) {
      i13 = HEAP32[i14 + 456 >> 2] | 0;
      i15 = HEAP32[i13 + 1700 >> 2] | 0;
      if ((i15 | 0) != 0) {
       i16 = _llvm_uadd_with_overflow_i32(i15 | 0, -1 | 0) | 0;
       if (!tempRet0) {
        i17 = 20;
        break;
       }
       if ((HEAP32[(HEAP32[i13 + 1692 >> 2] | 0) + (i16 << 2) >> 2] | 0) != 0) {
        i17 = 23;
        break;
       }
      }
      i14 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i14 + 40 | 0, 0) | 0;
      if ((i14 | 0) == 0) {
       break L23;
      }
     }
     if ((i17 | 0) == 20) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     } else if ((i17 | 0) == 23) {
      if ((i8 & 1 | 0) == 0) {
       break L4;
      } else {
       break;
      }
     }
    }
   } while (0);
   if (!(__ZN7WebCore16ScriptController21processingUserGestureEv() | 0)) {
    break;
   }
   i10 = HEAP32[i11 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   i16 = HEAP32[i10 + 32 >> 2] | 0;
   if ((i16 | 0) == 0) {
    break;
   }
   if ((HEAP8[(HEAP32[i16 + 48 >> 2] | 0) + 194 | 0] & 2) == 0) {
    break;
   }
   i10 = HEAP32[(HEAP32[i16 + 20 >> 2] | 0) + 8 >> 2] | 0;
   i16 = (i7 & 1 | 0) != 0;
   i13 = i3 & 255;
   if (FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i10 >> 2] | 0) + 344 >> 2] & 1](i10, i9, i16) | 0) {
    i18 = i13;
   } else {
    if ((i8 & 1 | 0) != 0 | i16 ^ 1) {
     break;
    }
    i16 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i11 >> 2] | 0) + 32 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
    if (FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i16 >> 2] | 0) + 344 >> 2] & 1](i16, i9, 0) | 0) {
     i18 = i13 & -2;
    } else {
     break;
    }
   }
   _memset(i6 | 0, 0, 20) | 0;
   i13 = i6 | 0;
   i16 = i6 + 4 | 0;
   i10 = i6 + 12 | 0;
   i15 = i6 + 8 | 0;
   i19 = i1;
   i20 = 0;
   i21 = 0;
   while (1) {
    do {
     if ((i20 | 0) == 0) {
      i22 = HEAP32[i10 >> 2] | 0;
      if ((i21 | 0) == 0) {
       if ((i22 | 0) == 0) {
        i17 = 37;
        break;
       } else {
        i23 = i22;
        break;
       }
      } else {
       if ((i21 | 0) == (i22 - 1 | 0)) {
        i17 = 37;
        break;
       } else {
        i23 = i22;
        break;
       }
      }
     } else {
      if ((i21 + 1 | 0) == (i20 | 0)) {
       i17 = 37;
      } else {
       i23 = i20;
      }
     }
    } while (0);
    if ((i17 | 0) == 37) {
     i17 = 0;
     __ZN3WTF5DequeIPN7WebCore8DocumentELj0EE14expandCapacityEv(i6);
     i22 = HEAP32[i13 >> 2] | 0;
     i23 = (i22 | 0) == 0 ? HEAP32[i10 >> 2] | 0 : i22;
    }
    i24 = i23 - 1 | 0;
    HEAP32[i13 >> 2] = i24;
    i25 = HEAP32[i15 >> 2] | 0;
    HEAP32[i25 + (i24 << 2) >> 2] = i19;
    i22 = HEAP32[i19 + 332 >> 2] | 0;
    if ((i22 | 0) == 0) {
     break;
    }
    i26 = HEAP32[i22 + 448 >> 2] | 0;
    if ((i26 | 0) == 0) {
     break;
    }
    i22 = HEAP32[(HEAP32[i26 + 20 >> 2] | 0) + 8 >> 2] | 0;
    if ((i22 | 0) == 0) {
     break;
    }
    i19 = i22;
    i20 = i24;
    i21 = HEAP32[i16 >> 2] | 0;
   }
   i21 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   i20 = HEAP32[i16 >> 2] | 0;
   i13 = (i9 | 0) == 0;
   i22 = i9 + 8 | 0;
   i26 = i24;
   i27 = i24;
   i28 = i19;
   L58 : while (1) {
    i29 = (i26 | 0) == (i21 | 0) ? 0 : i26 + 1 | 0;
    L60 : do {
     if ((i29 | 0) == (i20 | 0)) {
      i17 = 45;
     } else {
      i30 = HEAP32[i25 + (i29 << 2) >> 2] | 0;
      if ((i30 | 0) == 0) {
       i17 = 45;
       break;
      }
      i31 = i28 + 1700 | 0;
      i32 = HEAP32[i31 >> 2] | 0;
      do {
       if ((i32 | 0) != 0) {
        i33 = _llvm_uadd_with_overflow_i32(i32 | 0, -1 | 0) | 0;
        if (!tempRet0) {
         i17 = 53;
         break L58;
        }
        i34 = HEAP32[(HEAP32[i28 + 1692 >> 2] | 0) + (i33 << 2) >> 2] | 0;
        if ((i34 | 0) == 0) {
         break;
        }
        i33 = HEAP32[i30 + 332 >> 2] | 0;
        if ((i33 | 0) == 0) {
         i35 = 0;
        } else {
         i35 = HEAP32[i33 + 448 >> 2] | 0;
        }
        if ((i34 | 0) == (i35 | 0)) {
         break L60;
        }
       }
      } while (0);
      i34 = HEAP32[i30 + 332 >> 2] | 0;
      if ((i34 | 0) == 0) {
       i36 = 0;
      } else {
       i36 = HEAP32[i34 + 448 >> 2] | 0;
      }
      i34 = i36 | 0;
      i33 = i28 + 1692 | 0;
      do {
       if ((i32 | 0) == (HEAP32[i28 + 1696 >> 2] | 0)) {
        __ZN3WTF6VectorINS_6RefPtrIN7WebCore7ElementEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i33, i32 + 1 | 0);
        HEAP32[(HEAP32[i33 >> 2] | 0) + (HEAP32[i31 >> 2] << 2) >> 2] = i34;
        if ((i36 | 0) == 0) {
         break;
        }
        i37 = i36 + 8 | 0;
        HEAP32[i37 >> 2] = (HEAP32[i37 >> 2] | 0) + 1;
       } else {
        HEAP32[(HEAP32[i33 >> 2] | 0) + (i32 << 2) >> 2] = i34;
        if ((i36 | 0) == 0) {
         break;
        }
        i37 = i36 + 8 | 0;
        HEAP32[i37 >> 2] = (HEAP32[i37 >> 2] | 0) + 1;
       }
      } while (0);
      HEAP32[i31 >> 2] = (HEAP32[i31 >> 2] | 0) + 1;
      __ZN7WebCore8Document39addDocumentToFullScreenChangeEventQueueEPS0_(i1, i28);
     }
    } while (0);
    if ((i17 | 0) == 45) {
     i17 = 0;
     i34 = i28 + 1692 | 0;
     i32 = i28 + 1700 | 0;
     i33 = HEAP32[i32 >> 2] | 0;
     do {
      if ((i33 | 0) == (HEAP32[i28 + 1696 >> 2] | 0)) {
       __ZN3WTF6VectorINS_6RefPtrIN7WebCore7ElementEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i34, i33 + 1 | 0);
       HEAP32[(HEAP32[i34 >> 2] | 0) + (HEAP32[i32 >> 2] << 2) >> 2] = i9;
       if (i13) {
        break;
       }
       HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
      } else {
       HEAP32[(HEAP32[i34 >> 2] | 0) + (i33 << 2) >> 2] = i9;
       if (i13) {
        break;
       }
       HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
      }
     } while (0);
     HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + 1;
     __ZN7WebCore8Document39addDocumentToFullScreenChangeEventQueueEPS0_(i1, i28);
    }
    i33 = (i27 | 0) == (i21 | 0) ? 0 : i27 + 1 | 0;
    if ((i33 | 0) == (i20 | 0)) {
     break;
    }
    i26 = i29;
    i27 = i33;
    i28 = HEAP32[i25 + (i33 << 2) >> 2] | 0;
   }
   if ((i17 | 0) == 53) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
   HEAP8[i1 + 1684 | 0] = i18 & 1;
   i28 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i11 >> 2] | 0) + 32 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i28 >> 2] | 0) + 348 >> 2] & 127](i28, i9);
   if ((i25 | 0) == 0) {
    STACKTOP = i5;
    return;
   }
   HEAP32[i15 >> 2] = 0;
   HEAP32[i10 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i25);
   STACKTOP = i5;
   return;
  }
 } while (0);
 i25 = i1 + 1788 | 0;
 if ((i9 | 0) == 0) {
  i38 = HEAP32[i1 + 692 >> 2] | 0;
 } else {
  i38 = i9;
 }
 i9 = HEAP32[i25 >> 2] | 0;
 i18 = i1 + 1792 | 0;
 i36 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i9 | 0) == 0) {
   i35 = HEAP32[i1 + 1800 >> 2] | 0;
   if ((i36 | 0) == 0) {
    if ((i35 | 0) == 0) {
     i17 = 77;
     break;
    } else {
     i39 = 0;
     break;
    }
   } else {
    if ((i36 | 0) == (i35 - 1 | 0)) {
     i17 = 77;
     break;
    } else {
     i39 = i36;
     break;
    }
   }
  } else {
   if ((i36 + 1 | 0) == (i9 | 0)) {
    i17 = 77;
   } else {
    i39 = i36;
   }
  }
 } while (0);
 if ((i17 | 0) == 77) {
  __ZN3WTF5DequeINS_6RefPtrIN7WebCore4NodeEEELj0EE14expandCapacityEv(i25);
  i39 = HEAP32[i18 >> 2] | 0;
 }
 HEAP32[(HEAP32[i1 + 1796 >> 2] | 0) + (i39 << 2) >> 2] = i38;
 if ((i38 | 0) != 0) {
  i39 = i38 + 8 | 0;
  HEAP32[i39 >> 2] = (HEAP32[i39 >> 2] | 0) + 1;
 }
 i39 = HEAP32[i18 >> 2] | 0;
 HEAP32[i18 >> 2] = (i39 | 0) == ((HEAP32[i1 + 1800 >> 2] | 0) - 1 | 0) ? 0 : i39 + 1 | 0;
 __ZN7WebCore9TimerBase5startEdd(i1 + 1712 | 0, +0, +0);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore8Document19initSecurityContextEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i3 = i2 | 0;
 i4 = i2 + 48 | 0;
 i5 = i2 + 56 | 0;
 i6 = i2 + 64 | 0;
 i7 = i2 + 72 | 0;
 i8 = i2 + 80 | 0;
 i9 = i1 + 88 | 0;
 i10 = i9 | 0;
 i11 = i1 + 93 | 0;
 if ((HEAP8[i11] & 1) != 0) {
  STACKTOP = i2;
  return;
 }
 i12 = i1 + 332 | 0;
 i13 = i1 + 548 | 0;
 if ((HEAP32[i12 >> 2] | 0) == 0) {
  __ZN7WebCore3URLC1ENS_18ParsedURLStringTagERKN3WTF6StringE(i3, 0, __ZN3WTF11emptyStringEv() | 0);
  i14 = i3 | 0;
  i15 = HEAP32[i14 >> 2] | 0;
  HEAP32[i14 >> 2] = 0;
  i16 = i13 | 0;
  i17 = HEAP32[i16 >> 2] | 0;
  HEAP32[i16 >> 2] = i15;
  do {
   if ((i17 | 0) != 0) {
    i15 = i17 | 0;
    i16 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
    if ((i16 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i17);
     break;
    } else {
     HEAP32[i15 >> 2] = i16;
     break;
    }
   }
  } while (0);
  i17 = HEAP8[i3 + 4 | 0] | 0;
  i16 = i1 + 552 | 0;
  HEAP8[i16] = HEAP8[i16] & -4 | i17 & 1 | i17 & 2;
  HEAP32[i1 + 556 >> 2] = HEAP32[i3 + 8 >> 2];
  HEAP32[i1 + 560 >> 2] = HEAP32[i3 + 12 >> 2];
  HEAP32[i1 + 564 >> 2] = HEAP32[i3 + 16 >> 2];
  HEAP32[i1 + 568 >> 2] = HEAP32[i3 + 20 >> 2];
  HEAP32[i1 + 572 >> 2] = HEAP32[i3 + 24 >> 2];
  HEAP32[i1 + 576 >> 2] = HEAP32[i3 + 28 >> 2];
  HEAP32[i1 + 580 >> 2] = HEAP32[i3 + 32 >> 2];
  HEAP32[i1 + 584 >> 2] = HEAP32[i3 + 36 >> 2];
  HEAP32[i1 + 588 >> 2] = HEAP32[i3 + 40 >> 2];
  HEAP32[i1 + 592 >> 2] = HEAP32[i3 + 44 >> 2];
  i3 = HEAP32[i14 >> 2] | 0;
  do {
   if ((i3 | 0) != 0) {
    i14 = i3 | 0;
    i17 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
    if ((i17 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i3);
     break;
    } else {
     HEAP32[i14 >> 2] = i17;
     break;
    }
   }
  } while (0);
  __ZN7WebCore14SecurityOrigin12createUniqueEv(i4);
  __ZN7WebCore15SecurityContext17setSecurityOriginEN3WTF10PassRefPtrINS_14SecurityOriginEEE(i10, i4);
  i3 = HEAP32[i4 >> 2] | 0;
  do {
   if ((i3 | 0) != 0) {
    i4 = i3 | 0;
    if (((tempValue = HEAP32[i4 >> 2] | 0, HEAP32[i4 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
     break;
    }
    __ZN7WebCore14SecurityOriginD2Ev(i3);
    __ZN3WTF8fastFreeEPv(i3);
   }
  } while (0);
  i3 = __ZN3WTF10fastMallocEj(20) | 0;
  __ZN7WebCore21ContentSecurityPolicyC1EPNS_22ScriptExecutionContextE(i3, i9);
  i4 = i5 | 0;
  HEAP32[i4 >> 2] = i3;
  __ZN7WebCore15SecurityContext24setContentSecurityPolicyEN3WTF10PassOwnPtrINS_21ContentSecurityPolicyEEE(i10, i5);
  i5 = HEAP32[i4 >> 2] | 0;
  if ((i5 | 0) == 0) {
   STACKTOP = i2;
   return;
  }
  __ZN7WebCore21ContentSecurityPolicyD1Ev(i5);
  __ZN3WTF8fastFreeEPv(i5);
  STACKTOP = i2;
  return;
 }
 i5 = i1 + 356 | 0;
 i4 = i5 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i17 = i3 | 0;
  HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 2;
 }
 i17 = i13 | 0;
 i13 = HEAP32[i17 >> 2] | 0;
 HEAP32[i17 >> 2] = i3;
 do {
  if ((i13 | 0) != 0) {
   i3 = i13 | 0;
   i14 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i3 >> 2] = i14;
    break;
   }
  }
 } while (0);
 i13 = HEAP8[i1 + 360 | 0] | 0;
 i14 = i1 + 552 | 0;
 HEAP8[i14] = HEAP8[i14] & -4 | i13 & 1 | i13 & 2;
 i13 = i1 + 556 | 0;
 HEAP32[i13 >> 2] = HEAP32[i1 + 364 >> 2];
 i3 = i1 + 560 | 0;
 HEAP32[i3 >> 2] = HEAP32[i1 + 368 >> 2];
 i16 = i1 + 564 | 0;
 HEAP32[i16 >> 2] = HEAP32[i1 + 372 >> 2];
 i15 = i1 + 568 | 0;
 HEAP32[i15 >> 2] = HEAP32[i1 + 376 >> 2];
 i18 = i1 + 572 | 0;
 HEAP32[i18 >> 2] = HEAP32[i1 + 380 >> 2];
 i19 = i1 + 576 | 0;
 HEAP32[i19 >> 2] = HEAP32[i1 + 384 >> 2];
 i20 = i1 + 580 | 0;
 HEAP32[i20 >> 2] = HEAP32[i1 + 388 >> 2];
 i21 = i1 + 584 | 0;
 HEAP32[i21 >> 2] = HEAP32[i1 + 392 >> 2];
 i22 = i1 + 588 | 0;
 HEAP32[i22 >> 2] = HEAP32[i1 + 396 >> 2];
 i23 = i1 + 592 | 0;
 HEAP32[i23 >> 2] = HEAP32[i1 + 400 >> 2];
 __ZN7WebCore15SecurityContext19enforceSandboxFlagsEi(i10, __ZNK7WebCore11FrameLoader21effectiveSandboxFlagsEv((HEAP32[i12 >> 2] | 0) + 80 | 0) | 0);
 i24 = i1 + 96 | 0;
 if ((HEAP32[i24 >> 2] & 4 | 0) == 0) {
  __ZN7WebCore14SecurityOrigin6createERKNS_3URLE(i6, i5);
 } else {
  __ZN7WebCore14SecurityOrigin12createUniqueEv(i6);
 }
 __ZN7WebCore15SecurityContext17setSecurityOriginEN3WTF10PassRefPtrINS_14SecurityOriginEEE(i10, i6);
 i25 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i25 | 0) != 0) {
   i6 = i25 | 0;
   if (((tempValue = HEAP32[i6 >> 2] | 0, HEAP32[i6 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN7WebCore14SecurityOriginD2Ev(i25);
   __ZN3WTF8fastFreeEPv(i25);
  }
 } while (0);
 i25 = __ZN3WTF10fastMallocEj(20) | 0;
 __ZN7WebCore21ContentSecurityPolicyC1EPNS_22ScriptExecutionContextE(i25, i9);
 i9 = i7 | 0;
 HEAP32[i9 >> 2] = i25;
 __ZN7WebCore15SecurityContext24setContentSecurityPolicyEN3WTF10PassOwnPtrINS_21ContentSecurityPolicyEEE(i10, i7);
 i7 = HEAP32[i9 >> 2] | 0;
 if ((i7 | 0) != 0) {
  __ZN7WebCore21ContentSecurityPolicyD1Ev(i7);
  __ZN3WTF8fastFreeEPv(i7);
 }
 i7 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i7 | 0) == 0) {
   i26 = 0;
  } else {
   i9 = HEAP32[i7 + 36 >> 2] | 0;
   if ((i9 | 0) == 0) {
    i27 = i7;
   } else {
    i25 = i1 + 100 | 0;
    i6 = HEAP32[i25 >> 2] | 0;
    L51 : do {
     if ((HEAP8[i9 + 193 | 0] & 32) == 0) {
      __ZN7WebCore14SecurityOrigin20grantUniversalAccessEv(i6);
     } else {
      if (!(__ZNK7WebCore14SecurityOrigin7isLocalEv(i6) | 0)) {
       break;
      }
      i28 = i9 + 181 | 0;
      do {
       if ((HEAP8[i28] | 0) >= 0) {
        i29 = HEAP32[(HEAP32[i12 >> 2] | 0) + 84 >> 2] | 0;
        if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i29 >> 2] | 0) + 500 >> 2] & 15](i29, i5) | 0) {
         break;
        }
        if ((HEAP8[i28] & 8) != 0) {
         break L51;
        }
        __ZN7WebCore14SecurityOrigin25enforceFilePathSeparationEv(HEAP32[i25 >> 2] | 0);
        break L51;
       }
      } while (0);
      __ZN7WebCore14SecurityOrigin20grantUniversalAccessEv(HEAP32[i25 >> 2] | 0);
     }
    } while (0);
    HEAP32[(HEAP32[i25 >> 2] | 0) + 28 >> 2] = HEAP32[i9 + 64 >> 2];
    i6 = HEAP32[i12 >> 2] | 0;
    if ((i6 | 0) == 0) {
     i26 = 0;
     break;
    } else {
     i27 = i6;
    }
   }
   i6 = HEAP32[i27 + 448 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i26 = 0;
    break;
   }
   i28 = HEAP32[(HEAP32[i6 + 20 >> 2] | 0) + 8 >> 2] | 0;
   if ((i28 | 0) == 0) {
    i26 = 0;
    break;
   }
   if (__ZNK7WebCore11FrameLoader30shouldTreatURLAsSrcdocDocumentERKNS_3URLE(i27 + 80 | 0, i5) | 0) {
    HEAP8[i1 + 1581 | 0] = 1;
    __ZN7WebCore8Document18setBaseURLOverrideERKNS_3URLE(i1, i28 + 404 | 0);
   }
   if ((HEAP32[i28 + 96 >> 2] & 256 | 0) != 0) {
    i26 = 0;
    break;
   }
   if ((HEAP8[i1 + 1581 | 0] & 1) != 0) {
    i26 = 1;
    break;
   }
   i6 = i28 + 100 | 0;
   if (__ZNK7WebCore14SecurityOrigin9canAccessEPKS0_(HEAP32[i6 >> 2] | 0, HEAP32[i1 + 100 >> 2] | 0) | 0) {
    i26 = 1;
    break;
   }
   i26 = (__ZNK7WebCore14SecurityOrigin10canRequestERKNS_3URLE(HEAP32[i6 >> 2] | 0, i5) | 0) & 1;
  }
 } while (0);
 HEAP8[i1 + 92 | 0] = i26;
 i26 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i26 | 0) != 0) {
   if ((HEAP32[i26 + 4 >> 2] | 0) == 0) {
    break;
   }
   if (__ZNK7WebCore3URL10isBlankURLEv(i5) | 0) {
    break;
   }
   STACKTOP = i2;
   return;
  }
 } while (0);
 i5 = __ZNK7WebCore9FrameTree6parentEv((HEAP32[i12 >> 2] | 0) + 40 | 0) | 0;
 do {
  if ((i5 | 0) == 0) {
   i26 = __ZN7WebCore11FrameLoader6openerEv((HEAP32[i12 >> 2] | 0) + 80 | 0) | 0;
   if ((i26 | 0) != 0) {
    i30 = i26;
    break;
   }
   HEAP8[i11] = 0;
   STACKTOP = i2;
   return;
  } else {
   i30 = i5;
  }
 } while (0);
 i5 = i30 + 456 | 0;
 i30 = HEAP32[i5 >> 2] | 0;
 if ((HEAP32[i24 >> 2] & 4 | 0) != 0) {
  if ((HEAP8[(HEAP32[i30 + 100 >> 2] | 0) + 25 | 0] & 1) == 0) {
   STACKTOP = i2;
   return;
  }
  __ZN7WebCore14SecurityOrigin23grantLoadLocalResourcesEv(HEAP32[i1 + 100 >> 2] | 0);
  STACKTOP = i2;
  return;
 }
 i1 = HEAP32[i30 + 548 >> 2] | 0;
 if ((i1 | 0) != 0) {
  i24 = i1 | 0;
  HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 2;
 }
 i24 = HEAP32[i17 >> 2] | 0;
 HEAP32[i17 >> 2] = i1;
 do {
  if ((i24 | 0) != 0) {
   i1 = i24 | 0;
   i17 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
   if ((i17 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i24);
    break;
   } else {
    HEAP32[i1 >> 2] = i17;
    break;
   }
  }
 } while (0);
 i24 = i30 + 552 | 0;
 i17 = HEAP8[i14] & -2 | HEAP8[i24] & 1;
 HEAP8[i14] = i17;
 HEAP8[i14] = i17 & -3 | HEAP8[i24] & 2;
 HEAP32[i13 >> 2] = HEAP32[i30 + 556 >> 2];
 HEAP32[i3 >> 2] = HEAP32[i30 + 560 >> 2];
 HEAP32[i16 >> 2] = HEAP32[i30 + 564 >> 2];
 HEAP32[i15 >> 2] = HEAP32[i30 + 568 >> 2];
 HEAP32[i18 >> 2] = HEAP32[i30 + 572 >> 2];
 HEAP32[i19 >> 2] = HEAP32[i30 + 576 >> 2];
 HEAP32[i20 >> 2] = HEAP32[i30 + 580 >> 2];
 HEAP32[i21 >> 2] = HEAP32[i30 + 584 >> 2];
 HEAP32[i22 >> 2] = HEAP32[i30 + 588 >> 2];
 HEAP32[i23 >> 2] = HEAP32[i30 + 592 >> 2];
 i30 = HEAP32[(HEAP32[i5 >> 2] | 0) + 100 >> 2] | 0;
 i5 = i8 | 0;
 HEAP32[i5 >> 2] = i30;
 if ((i30 | 0) != 0) {
  i23 = i30 | 0;
  tempValue = HEAP32[i23 >> 2] | 0, HEAP32[i23 >> 2] = tempValue + 1, tempValue;
 }
 __ZN7WebCore15SecurityContext17setSecurityOriginEN3WTF10PassRefPtrINS_14SecurityOriginEEE(i10, i8);
 i8 = HEAP32[i5 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i5 = i8 | 0;
 if (((tempValue = HEAP32[i5 >> 2] | 0, HEAP32[i5 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore14SecurityOriginD2Ev(i8);
 __ZN3WTF8fastFreeEPv(i8);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore8Document16processArgumentsERKN3WTF6StringEPvPFvS4_S4_PS0_S5_E(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i9 | 0) == 0) {
   __ZNK3WTF6String5lowerEv(i6, i2);
   i10 = 4;
  } else {
   i11 = HEAP32[i9 + 4 >> 2] | 0;
   __ZNK3WTF6String5lowerEv(i6, i2);
   if ((i11 | 0) <= 0) {
    i10 = 4;
    break;
   }
   i12 = i6 | 0;
   i13 = i8 | 0;
   i14 = i7 | 0;
   i15 = 0;
   while (1) {
    i16 = HEAP32[i12 >> 2] | 0;
    i17 = (i16 | 0) == 0;
    i18 = i16 + 4 | 0;
    i19 = i16 + 16 | 0;
    i20 = i16 + 8 | 0;
    i21 = i20;
    i22 = i20 | 0;
    L7 : do {
     if (i17) {
      i20 = i15;
      while (1) {
       if ((i20 | 0) < (i11 | 0)) {
        i20 = i20 + 1 | 0;
       } else {
        i23 = i20;
        break;
       }
      }
     } else {
      i20 = i15;
      while (1) {
       if ((HEAP32[i18 >> 2] | 0) >>> 0 > i20 >>> 0) {
        if ((HEAP32[i19 >> 2] & 32 | 0) == 0) {
         i24 = HEAP16[(HEAP32[i21 >> 2] | 0) + (i20 << 1) >> 1] | 0;
        } else {
         i24 = HEAPU8[(HEAP32[i22 >> 2] | 0) + i20 | 0] | 0;
        }
        switch (i24 << 16 >> 16) {
        case 32:
        case 9:
        case 10:
        case 13:
        case 61:
        case 44:
        case 0:
         {
          break;
         }
        default:
         {
          i23 = i20;
          break L7;
         }
        }
       }
       if ((i20 | 0) < (i11 | 0)) {
        i20 = i20 + 1 | 0;
       } else {
        i23 = i20;
        break;
       }
      }
     }
    } while (0);
    L20 : do {
     if (i17) {
      i25 = i23;
      i26 = i23;
      i27 = 0;
     } else {
      i20 = HEAP32[i18 >> 2] | 0;
      i28 = i23;
      while (1) {
       if (i20 >>> 0 <= i28 >>> 0) {
        i25 = i28;
        i26 = i28;
        i27 = i16;
        break L20;
       }
       if ((HEAP32[i19 >> 2] & 32 | 0) == 0) {
        i29 = HEAP16[(HEAP32[i21 >> 2] | 0) + (i28 << 1) >> 1] | 0;
       } else {
        i29 = HEAPU8[(HEAP32[i22 >> 2] | 0) + i28 | 0] | 0;
       }
       switch (i29 << 16 >> 16) {
       case 32:
       case 9:
       case 10:
       case 13:
       case 61:
       case 44:
       case 0:
        {
         i25 = i28;
         i26 = i28;
         i27 = i16;
         break L20;
         break;
        }
       default:
        {}
       }
       i28 = i28 + 1 | 0;
      }
     }
    } while (0);
    L30 : while (1) {
     do {
      if ((i27 | 0) == 0) {
       i30 = 0;
      } else {
       if ((HEAP32[i27 + 4 >> 2] | 0) >>> 0 > i25 >>> 0) {
        i16 = i27 + 8 | 0;
        if ((HEAP32[i27 + 16 >> 2] & 32 | 0) == 0) {
         i31 = HEAP16[(HEAP32[i16 >> 2] | 0) + (i25 << 1) >> 1] | 0;
        } else {
         i31 = HEAPU8[(HEAP32[i16 >> 2] | 0) + i25 | 0] | 0;
        }
        if (i31 << 16 >> 16 == 61) {
         break L30;
        }
       }
       if ((i27 | 0) == 0) {
        i30 = 0;
        break;
       }
       if ((HEAP32[i27 + 4 >> 2] | 0) >>> 0 <= i25 >>> 0) {
        i30 = 0;
        break;
       }
       i16 = i27 + 8 | 0;
       if ((HEAP32[i27 + 16 >> 2] & 32 | 0) == 0) {
        i30 = HEAP16[(HEAP32[i16 >> 2] | 0) + (i25 << 1) >> 1] | 0;
        break;
       } else {
        i30 = HEAPU8[(HEAP32[i16 >> 2] | 0) + i25 | 0] | 0;
        break;
       }
      }
     } while (0);
     if (!(i30 << 16 >> 16 != 44 & (i25 | 0) < (i11 | 0))) {
      break;
     }
     i25 = i25 + 1 | 0;
     i26 = i26;
     i27 = i27;
    }
    i16 = i27 + 4 | 0;
    i22 = i27 + 16 | 0;
    i21 = i27 + 8 | 0;
    i19 = i21;
    i18 = i21 | 0;
    L49 : do {
     if ((i27 | 0) == 0) {
      i21 = i25;
      while (1) {
       if ((i21 | 0) < (i11 | 0)) {
        i21 = i21 + 1 | 0;
       } else {
        i32 = i21;
        i33 = i21;
        break;
       }
      }
     } else {
      i21 = i25;
      i17 = i27;
      L50 : while (1) {
       if ((HEAP32[i16 >> 2] | 0) >>> 0 > i21 >>> 0) {
        if ((HEAP32[i22 >> 2] & 32 | 0) == 0) {
         i34 = HEAP16[(HEAP32[i19 >> 2] | 0) + (i21 << 1) >> 1] | 0;
        } else {
         i34 = HEAPU8[(HEAP32[i18 >> 2] | 0) + i21 | 0] | 0;
        }
        switch (i34 << 16 >> 16) {
        case 32:
        case 9:
        case 10:
        case 13:
        case 61:
        case 44:
        case 0:
         {
          break;
         }
        default:
         {
          i35 = i17;
          break L50;
         }
        }
       }
       do {
        if ((i17 | 0) == 0) {
         i36 = 0;
         i37 = 0;
        } else {
         if ((HEAP32[i17 + 4 >> 2] | 0) >>> 0 <= i21 >>> 0) {
          i36 = 0;
          i37 = i17;
          break;
         }
         i28 = i17 + 8 | 0;
         if ((HEAP32[i17 + 16 >> 2] & 32 | 0) == 0) {
          i36 = HEAP16[(HEAP32[i28 >> 2] | 0) + (i21 << 1) >> 1] | 0;
          i37 = i17;
          break;
         } else {
          i36 = HEAPU8[(HEAP32[i28 >> 2] | 0) + i21 | 0] | 0;
          i37 = i17;
          break;
         }
        }
       } while (0);
       if (i36 << 16 >> 16 != 44 & (i21 | 0) < (i11 | 0)) {
        i21 = i21 + 1 | 0;
        i17 = i37;
       } else {
        i35 = i37;
        break;
       }
      }
      if ((i35 | 0) == 0) {
       i32 = i21;
       i33 = i21;
       break;
      }
      i17 = HEAP32[i35 + 4 >> 2] | 0;
      i28 = i21;
      while (1) {
       if (i17 >>> 0 <= i28 >>> 0) {
        i32 = i28;
        i33 = i21;
        break L49;
       }
       i20 = i35 + 8 | 0;
       if ((HEAP32[i35 + 16 >> 2] & 32 | 0) == 0) {
        i38 = HEAP16[(HEAP32[i20 >> 2] | 0) + (i28 << 1) >> 1] | 0;
       } else {
        i38 = HEAPU8[(HEAP32[i20 >> 2] | 0) + i28 | 0] | 0;
       }
       switch (i38 << 16 >> 16) {
       case 32:
       case 9:
       case 10:
       case 13:
       case 61:
       case 44:
       case 0:
        {
         i32 = i28;
         i33 = i21;
         break L49;
         break;
        }
       default:
        {}
       }
       i28 = i28 + 1 | 0;
      }
     }
    } while (0);
    __ZNK3WTF6String9substringEjj(i7, i6, i23, i26 - i23 | 0);
    __ZNK3WTF6String9substringEjj(i8, i6, i33, i32 - i33 | 0);
    FUNCTION_TABLE_viiii[i4 & 7](i7, i8, i1, i3);
    i18 = HEAP32[i13 >> 2] | 0;
    do {
     if ((i18 | 0) != 0) {
      i19 = i18 | 0;
      i22 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
      if ((i22 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i18);
       break;
      } else {
       HEAP32[i19 >> 2] = i22;
       break;
      }
     }
    } while (0);
    i18 = HEAP32[i14 >> 2] | 0;
    do {
     if ((i18 | 0) != 0) {
      i22 = i18 | 0;
      i19 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
      if ((i19 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i18);
       break;
      } else {
       HEAP32[i22 >> 2] = i19;
       break;
      }
     }
    } while (0);
    if ((i32 | 0) < (i11 | 0)) {
     i15 = i32;
    } else {
     i39 = i12;
     break;
    }
   }
  }
 } while (0);
 if ((i10 | 0) == 4) {
  i39 = i6 | 0;
 }
 i6 = HEAP32[i39 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i39 = i6 | 0;
 i10 = (HEAP32[i39 >> 2] | 0) - 2 | 0;
 if ((i10 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i6);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i39 >> 2] = i10;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore8Document18parseQualifiedNameERKN3WTF6StringERS2_S5_Ri(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i1 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i10 = HEAP32[i9 + 4 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   if ((HEAP32[i9 + 16 >> 2] & 32 | 0) == 0) {
    i11 = HEAP32[i9 + 8 >> 2] | 0;
   } else {
    i11 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i9) | 0;
   }
   i12 = 0;
   i13 = 0;
   i14 = 1;
   i15 = 0;
   L8 : while (1) {
    i16 = i15 + 1 | 0;
    i17 = HEAPU16[i11 + (i15 << 1) >> 1] | 0;
    do {
     if ((i17 & 64512 | 0) == 55296 & i16 >>> 0 < i10 >>> 0) {
      i18 = HEAPU16[i11 + (i16 << 1) >> 1] | 0;
      if ((i18 & 64512 | 0) != 56320) {
       i19 = i17;
       i20 = i16;
       break;
      }
      i19 = (i17 << 10) - 56613888 + i18 | 0;
      i20 = i15 + 2 | 0;
     } else {
      i19 = i17;
      i20 = i16;
     }
    } while (0);
    L14 : do {
     if ((i19 | 0) == 58) {
      if (i12) {
       i21 = 13;
       break L8;
      }
      i22 = 1;
      i23 = i20 - 1 | 0;
      i24 = 1;
     } else {
      i16 = (i19 - 699 | 0) >>> 0 < 7 >>> 0 | (i19 | 0) == 1369 | (i19 | 0) == 1765 | (i19 | 0) == 1766;
      if (i14) {
       if (i16) {
        i22 = 0;
        i23 = i13;
        i24 = i12;
        break;
       }
       if ((i19 | 0) == 95 | (i19 | 0) == 58) {
        i22 = 0;
        i23 = i13;
        i24 = i12;
        break;
       }
       if ((1 << ((_u_charType(i19) | 0) << 24 >> 24) & 1070 | 0) == 0) {
        i21 = 22;
        break L8;
       }
       if ((i19 - 63744 | 0) >>> 0 < 1790 >>> 0) {
        i21 = 22;
        break L8;
       }
       i17 = _u_getIntPropertyValue(i19, 4099) | 0;
       if ((i17 | 0) == 5 | (i17 | 0) == 2) {
        i21 = 22;
        break L8;
       } else {
        i22 = 0;
        i23 = i13;
        i24 = i12;
        break;
       }
      }
      if (i16) {
       i22 = 0;
       i23 = i13;
       i24 = i12;
       break;
      }
      if ((i19 | 0) == 95 | (i19 | 0) == 58) {
       i22 = 0;
       i23 = i13;
       i24 = i12;
       break;
      }
      do {
       if ((1 << ((_u_charType(i19) | 0) << 24 >> 24) & 1070 | 0) != 0) {
        if ((i19 - 63744 | 0) >>> 0 < 1790 >>> 0) {
         break;
        }
        i16 = _u_getIntPropertyValue(i19, 4099) | 0;
        if (!((i16 | 0) == 5 | (i16 | 0) == 2)) {
         i22 = 0;
         i23 = i13;
         i24 = i12;
         break L14;
        }
       }
      } while (0);
      if ((i19 | 0) == 903 | (i19 | 0) == 183) {
       i22 = 0;
       i23 = i13;
       i24 = i12;
       break;
      }
      if ((i19 - 45 | 0) >>> 0 < 2 >>> 0) {
       i22 = 0;
       i23 = i13;
       i24 = i12;
       break;
      }
      if ((1 << ((_u_charType(i19) | 0) << 24 >> 24) & 976 | 0) == 0) {
       i21 = 33;
       break L8;
      }
      if ((i19 - 63744 | 0) >>> 0 < 1790 >>> 0) {
       i21 = 33;
       break L8;
      }
      i16 = _u_getIntPropertyValue(i19, 4099) | 0;
      if ((i16 | 0) == 5 | (i16 | 0) == 2) {
       i21 = 33;
       break L8;
      } else {
       i22 = 0;
       i23 = i13;
       i24 = i12;
      }
     }
    } while (0);
    if (i20 >>> 0 < i10 >>> 0) {
     i12 = i24;
     i13 = i23;
     i14 = i22;
     i15 = i20;
    } else {
     i21 = 34;
     break;
    }
   }
   if ((i21 | 0) == 22) {
    HEAP32[i4 >> 2] = 5;
    i25 = 0;
    STACKTOP = i5;
    return i25 | 0;
   } else if ((i21 | 0) == 13) {
    HEAP32[i4 >> 2] = 14;
    i25 = 0;
    STACKTOP = i5;
    return i25 | 0;
   } else if ((i21 | 0) == 33) {
    HEAP32[i4 >> 2] = 5;
    i25 = 0;
    STACKTOP = i5;
    return i25 | 0;
   } else if ((i21 | 0) == 34) {
    L44 : do {
     if (i24) {
      __ZNK3WTF6String9substringEjj(i6, i1, 0, i23);
      i15 = i6 | 0;
      i14 = HEAP32[i15 >> 2] | 0;
      HEAP32[i15 >> 2] = 0;
      i13 = i2 | 0;
      i12 = HEAP32[i13 >> 2] | 0;
      HEAP32[i13 >> 2] = i14;
      do {
       if ((i12 | 0) != 0) {
        i14 = i12 | 0;
        i10 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
        if ((i10 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i12);
         break;
        } else {
         HEAP32[i14 >> 2] = i10;
         break;
        }
       }
      } while (0);
      i12 = HEAP32[i15 >> 2] | 0;
      do {
       if ((i12 | 0) != 0) {
        i10 = i12 | 0;
        i14 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
        if ((i14 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i12);
         break;
        } else {
         HEAP32[i10 >> 2] = i14;
         break;
        }
       }
      } while (0);
      i12 = HEAP32[i13 >> 2] | 0;
      do {
       if ((i12 | 0) != 0) {
        if ((HEAP32[i12 + 4 >> 2] | 0) == 0) {
         break;
        }
        __ZNK3WTF6String9substringEjj(i7, i1, i23 + 1 | 0, -1);
        i15 = i7 | 0;
        i14 = HEAP32[i15 >> 2] | 0;
        HEAP32[i15 >> 2] = 0;
        i10 = i3 | 0;
        i16 = HEAP32[i10 >> 2] | 0;
        HEAP32[i10 >> 2] = i14;
        do {
         if ((i16 | 0) != 0) {
          i14 = i16 | 0;
          i10 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
          if ((i10 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i16);
           break;
          } else {
           HEAP32[i14 >> 2] = i10;
           break;
          }
         }
        } while (0);
        i16 = HEAP32[i15 >> 2] | 0;
        if ((i16 | 0) == 0) {
         break L44;
        }
        i10 = i16 | 0;
        i14 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
        if ((i14 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i16);
         break L44;
        } else {
         HEAP32[i10 >> 2] = i14;
         break L44;
        }
       }
      } while (0);
      HEAP32[i4 >> 2] = 14;
      i25 = 0;
      STACKTOP = i5;
      return i25 | 0;
     } else {
      i12 = i2 | 0;
      i13 = HEAP32[i12 >> 2] | 0;
      HEAP32[i12 >> 2] = 0;
      do {
       if ((i13 | 0) != 0) {
        i12 = i13 | 0;
        i14 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
        if ((i14 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i13);
         break;
        } else {
         HEAP32[i12 >> 2] = i14;
         break;
        }
       }
      } while (0);
      i13 = HEAP32[i8 >> 2] | 0;
      if ((i13 | 0) != 0) {
       i14 = i13 | 0;
       HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
      }
      i14 = i3 | 0;
      i12 = HEAP32[i14 >> 2] | 0;
      HEAP32[i14 >> 2] = i13;
      if ((i12 | 0) == 0) {
       break;
      }
      i13 = i12 | 0;
      i14 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
      if ((i14 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i12);
       break;
      } else {
       HEAP32[i13 >> 2] = i14;
       break;
      }
     }
    } while (0);
    i14 = HEAP32[i3 >> 2] | 0;
    do {
     if ((i14 | 0) != 0) {
      if ((HEAP32[i14 + 4 >> 2] | 0) == 0) {
       break;
      } else {
       i25 = 1;
      }
      STACKTOP = i5;
      return i25 | 0;
     }
    } while (0);
    HEAP32[i4 >> 2] = 14;
    i25 = 0;
    STACKTOP = i5;
    return i25 | 0;
   }
  }
 } while (0);
 HEAP32[i4 >> 2] = 5;
 i25 = 0;
 STACKTOP = i5;
 return i25 | 0;
}
function runPostSets() {
 HEAP32[H_BASE + 1424 >> 2] = F_BASE_ii + 78;
 HEAP32[H_BASE + 1428 >> 2] = F_BASE_ii + 30;
 HEAP32[H_BASE + 1432 >> 2] = F_BASE_ii + 100;
 HEAP32[H_BASE + 1436 >> 2] = F_BASE_ii + 112;
 HEAP32[H_BASE + 1440 >> 2] = F_BASE_ii + 36;
 HEAP32[H_BASE + 1444 >> 2] = F_BASE_iiiii + 2;
 HEAP32[H_BASE + 1448 >> 2] = F_BASE_iiiii + 4;
 HEAP32[H_BASE + 1452 >> 2] = F_BASE_vi + 30;
 HEAP32[H_BASE + 1456 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 1460 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 1464 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 1468 >> 2] = F_BASE_vi + 90;
 HEAP32[H_BASE + 1472 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 1476 >> 2] = F_BASE_ii + 82;
 HEAP32[H_BASE + 1480 >> 2] = F_BASE_vi + 76;
 HEAP32[H_BASE + 1484 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 1488 >> 2] = F_BASE_vii + 60;
 HEAP32[H_BASE + 1492 >> 2] = F_BASE_vii + 68;
 HEAP32[H_BASE + 1496 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 1500 >> 2] = F_BASE_ii + 72;
 HEAP32[H_BASE + 1504 >> 2] = F_BASE_vii + 52;
 HEAP32[H_BASE + 1508 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 1512 >> 2] = F_BASE_ii + 102;
 HEAP32[H_BASE + 1516 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 1520 >> 2] = F_BASE_ii + 52;
 HEAP32[H_BASE + 1524 >> 2] = F_BASE_viii + 16;
 HEAP32[H_BASE + 1528 >> 2] = F_BASE_ii + 94;
 HEAP32[H_BASE + 1532 >> 2] = F_BASE_ii + 110;
 HEAP32[H_BASE + 1536 >> 2] = F_BASE_ii + 116;
 HEAP32[H_BASE + 1540 >> 2] = F_BASE_ii + 98;
 HEAP32[H_BASE + 1544 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 1548 >> 2] = F_BASE_ii + 56;
 HEAP32[H_BASE + 1552 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 1556 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 1560 >> 2] = F_BASE_vi + 66;
 HEAP32[H_BASE + 1564 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 1568 >> 2] = F_BASE_ii + 84;
 HEAP32[H_BASE + 1572 >> 2] = F_BASE_vii + 38;
 HEAP32[H_BASE + 1576 >> 2] = F_BASE_vi + 50;
 HEAP32[H_BASE + 1580 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 1584 >> 2] = F_BASE_iii + 12;
 HEAP32[H_BASE + 1588 >> 2] = F_BASE_ii + 28;
 HEAP32[H_BASE + 1592 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 1596 >> 2] = F_BASE_ii + 44;
 HEAP32[H_BASE + 1600 >> 2] = F_BASE_iii + 14;
 HEAP32[H_BASE + 1604 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 1608 >> 2] = F_BASE_vii + 34;
 HEAP32[H_BASE + 1612 >> 2] = F_BASE_vii + 26;
 HEAP32[H_BASE + 1616 >> 2] = F_BASE_ii + 104;
 HEAP32[H_BASE + 1620 >> 2] = F_BASE_ii + 64;
 HEAP32[H_BASE + 1624 >> 2] = F_BASE_ii + 88;
 HEAP32[H_BASE + 1628 >> 2] = F_BASE_ii + 40;
 HEAP32[H_BASE + 1632 >> 2] = F_BASE_ii + 68;
 HEAP32[H_BASE + 1636 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 1640 >> 2] = F_BASE_vi + 28;
 HEAP32[H_BASE + 1644 >> 2] = F_BASE_vii + 64;
 HEAP32[H_BASE + 1648 >> 2] = F_BASE_vii + 46;
 HEAP32[H_BASE + 1652 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 1656 >> 2] = F_BASE_ii + 90;
 HEAP32[H_BASE + 1660 >> 2] = F_BASE_ii + 54;
 HEAP32[H_BASE + 1664 >> 2] = F_BASE_vii + 22;
 HEAP32[H_BASE + 1668 >> 2] = F_BASE_iii + 10;
 HEAP32[H_BASE + 1672 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 1676 >> 2] = F_BASE_ii + 42;
 HEAP32[H_BASE + 1680 >> 2] = F_BASE_vii + 62;
 HEAP32[H_BASE + 1684 >> 2] = F_BASE_vii + 66;
 HEAP32[H_BASE + 1688 >> 2] = F_BASE_vi + 54;
 HEAP32[H_BASE + 1692 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 1696 >> 2] = F_BASE_viii + 14;
 HEAP32[H_BASE + 1700 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 1704 >> 2] = F_BASE_vii + 40;
 HEAP32[H_BASE + 1708 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 1712 >> 2] = F_BASE_vii + 30;
 HEAP32[H_BASE + 1716 >> 2] = F_BASE_vii + 42;
 HEAP32[H_BASE + 1720 >> 2] = F_BASE_ii + 106;
 HEAP32[H_BASE + 1724 >> 2] = F_BASE_ii + 62;
 HEAP32[H_BASE + 1728 >> 2] = F_BASE_ii + 66;
 HEAP32[H_BASE + 1732 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 1736 >> 2] = F_BASE_viiiiii + 4;
 HEAP32[H_BASE + 1740 >> 2] = F_BASE_viiiii + 6;
 HEAP32[H_BASE + 1744 >> 2] = F_BASE_ii + 60;
 HEAP32[H_BASE + 1748 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 1752 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 1756 >> 2] = F_BASE_ii + 32;
 HEAP32[H_BASE + 1760 >> 2] = F_BASE_vi + 44;
 HEAP32[H_BASE + 1764 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 1768 >> 2] = F_BASE_viiiiiiiiii + 2;
 HEAP32[H_BASE + 1772 >> 2] = F_BASE_di + 2;
 HEAP32[H_BASE + 1776 >> 2] = F_BASE_di + 6;
 HEAP32[H_BASE + 1788 >> 2] = F_BASE_ii + 108;
 HEAP32[H_BASE + 1792 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 1796 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 1800 >> 2] = F_BASE_vi + 58;
 HEAP32[H_BASE + 1812 >> 2] = F_BASE_vi + 82;
 HEAP32[H_BASE + 1816 >> 2] = F_BASE_vi + 60;
 HEAP32[H_BASE + 1820 >> 2] = F_BASE_ii + 92;
 HEAP32[H_BASE + 1824 >> 2] = F_BASE_ii + 120;
 HEAP32[H_BASE + 1828 >> 2] = F_BASE_ii + 46;
 HEAP32[H_BASE + 1832 >> 2] = F_BASE_ii + 96;
 HEAP32[H_BASE + 1836 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 1840 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 1844 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 1848 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 1852 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 1856 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 1860 >> 2] = F_BASE_vii + 36;
 HEAP32[H_BASE + 1864 >> 2] = F_BASE_vii + 24;
 HEAP32[H_BASE + 1868 >> 2] = F_BASE_vi + 80;
 HEAP32[H_BASE + 1872 >> 2] = F_BASE_vii + 54;
 HEAP32[H_BASE + 1876 >> 2] = F_BASE_di + 8;
 HEAP32[H_BASE + 1880 >> 2] = F_BASE_di + 4;
 HEAP32[H_BASE + 1884 >> 2] = F_BASE_ii + 38;
 HEAP32[H_BASE + 1888 >> 2] = F_BASE_viiiiiiiiii + 4;
 HEAP32[H_BASE + 1892 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 1896 >> 2] = F_BASE_viiiiii + 2;
 HEAP32[H_BASE + 1900 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 1904 >> 2] = F_BASE_vi + 32;
 HEAP32[H_BASE + 1928 >> 2] = F_BASE_vi + 42;
 HEAP32[H_BASE + 1932 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 1936 >> 2] = F_BASE_vi + 34;
 HEAP32[H_BASE + 1940 >> 2] = F_BASE_did + 2;
 HEAP32[H_BASE + 1960 >> 2] = F_BASE_vi + 40;
 HEAP32[H_BASE + 1964 >> 2] = F_BASE_vi + 84;
 HEAP32[H_BASE + 1968 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 1972 >> 2] = F_BASE_vi + 46;
 HEAP32[H_BASE + 1976 >> 2] = F_BASE_vi + 72;
 HEAP32[H_BASE + 1980 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 2e3 >> 2] = F_BASE_vi + 56;
 HEAP32[H_BASE + 2004 >> 2] = F_BASE_vi + 48;
 HEAP32[H_BASE + 2008 >> 2] = F_BASE_vi + 36;
 HEAP32[H_BASE + 2012 >> 2] = F_BASE_did + 2;
 HEAP32[H_BASE + 2032 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 2036 >> 2] = F_BASE_vi + 86;
 HEAP32[H_BASE + 2040 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 2044 >> 2] = F_BASE_vi + 46;
 HEAP32[H_BASE + 2048 >> 2] = F_BASE_vi + 72;
 HEAP32[H_BASE + 2052 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 2072 >> 2] = F_BASE_vi + 74;
 HEAP32[H_BASE + 2076 >> 2] = F_BASE_vi + 64;
 HEAP32[H_BASE + 2080 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 2084 >> 2] = F_BASE_ii + 34;
 HEAP32[H_BASE + 2088 >> 2] = F_BASE_ii + 86;
 HEAP32[H_BASE + 2092 >> 2] = F_BASE_ii + 114;
 HEAP32[H_BASE + 2096 >> 2] = F_BASE_ii + 48;
 HEAP32[H_BASE + 2100 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 2104 >> 2] = F_BASE_ii + 70;
 HEAP32[H_BASE + 2108 >> 2] = F_BASE_ii + 76;
 HEAP32[H_BASE + 2112 >> 2] = F_BASE_ii + 58;
 HEAP32[H_BASE + 2116 >> 2] = F_BASE_ii + 80;
 HEAP32[H_BASE + 2120 >> 2] = F_BASE_ii + 118;
 HEAP32[H_BASE + 2124 >> 2] = F_BASE_viii + 12;
 HEAP32[H_BASE + 2128 >> 2] = F_BASE_ii + 74;
 HEAP32[H_BASE + 2132 >> 2] = F_BASE_vi + 70;
 HEAP32[H_BASE + 2152 >> 2] = F_BASE_vi + 88;
 HEAP32[H_BASE + 2156 >> 2] = F_BASE_vi + 62;
 HEAP32[H_BASE + 2160 >> 2] = F_BASE_ii + 24;
}
function __ZN7WebCore8Document20webkitExitFullscreenEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 if ((HEAP32[i1 + 1700 >> 2] | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 _memset(i3 | 0, 0, 20) | 0;
 i4 = i1 + 332 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i6 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i5 + 40 | 0, 0) | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   i7 = i3 | 0;
   i8 = i3 + 4 | 0;
   i9 = i3 + 12 | 0;
   i10 = i3 + 8 | 0;
   i11 = i6;
   i6 = 0;
   i12 = 0;
   i13 = 0;
   L7 : while (1) {
    i14 = HEAP32[i11 + 456 >> 2] | 0;
    i15 = HEAP32[i14 + 1700 >> 2] | 0;
    do {
     if ((i15 | 0) == 0) {
      i16 = i6;
      i17 = i12;
      i18 = i13;
     } else {
      i19 = _llvm_uadd_with_overflow_i32(i15 | 0, -1 | 0) | 0;
      if (!tempRet0) {
       i20 = 7;
       break L7;
      }
      if ((HEAP32[(HEAP32[i14 + 1692 >> 2] | 0) + (i19 << 2) >> 2] | 0) == 0) {
       i16 = i6;
       i17 = i12;
       i18 = i13;
       break;
      }
      i19 = HEAP32[i8 >> 2] | 0;
      do {
       if ((i6 | 0) == 0) {
        i21 = HEAP32[i9 >> 2] | 0;
        if ((i19 | 0) == 0) {
         if ((i21 | 0) == 0) {
          i20 = 14;
          break;
         } else {
          i22 = i21;
          break;
         }
        } else {
         if ((i19 | 0) == (i21 - 1 | 0)) {
          i20 = 14;
          break;
         } else {
          i22 = i21;
          break;
         }
        }
       } else {
        if ((i19 + 1 | 0) == (i6 | 0)) {
         i20 = 14;
        } else {
         i22 = i6;
        }
       }
      } while (0);
      if ((i20 | 0) == 14) {
       i20 = 0;
       __ZN3WTF5DequeINS_6RefPtrIN7WebCore8DocumentEEELj0EE14expandCapacityEv(i3);
       i19 = HEAP32[i7 >> 2] | 0;
       i22 = (i19 | 0) == 0 ? HEAP32[i9 >> 2] | 0 : i19;
      }
      i19 = i22 - 1 | 0;
      HEAP32[i7 >> 2] = i19;
      i21 = HEAP32[i10 >> 2] | 0;
      HEAP32[i21 + (i19 << 2) >> 2] = i14;
      if ((i14 | 0) == 0) {
       i16 = i19;
       i17 = i21;
       i18 = i21;
       break;
      }
      i23 = i14 + 8 | 0;
      HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 1;
      i16 = i19;
      i17 = i21;
      i18 = i21;
     }
    } while (0);
    i14 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i11 + 40 | 0, 0) | 0;
    if ((i14 | 0) == 0) {
     break;
    } else {
     i11 = i14;
     i6 = i16;
     i12 = i17;
     i13 = i18;
    }
   }
   if ((i20 | 0) == 7) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
   if ((i16 | 0) == (HEAP32[i8 >> 2] | 0)) {
    break;
   }
   i13 = i3 + 12 | 0;
   i12 = i16;
   i6 = i17;
   while (1) {
    i11 = HEAP32[i6 + (i12 << 2) >> 2] | 0;
    i10 = i11 + 1696 | 0;
    do {
     if ((HEAP32[i10 >> 2] | 0) != 0) {
      i7 = i11 + 1700 | 0;
      i9 = HEAP32[i7 >> 2] | 0;
      i14 = i11 + 1692 | 0;
      if ((i9 | 0) != 0) {
       i15 = HEAP32[i14 >> 2] | 0;
       i21 = i15 + (i9 << 2) | 0;
       i9 = i15;
       while (1) {
        i15 = HEAP32[i9 >> 2] | 0;
        do {
         if ((i15 | 0) != 0) {
          i19 = i15 + 8 | 0;
          i23 = i19 | 0;
          i24 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
          HEAP32[i23 >> 2] = i24;
          if ((i24 | 0) >= 1) {
           break;
          }
          if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
           break;
          }
          __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
         }
        } while (0);
        i9 = i9 + 4 | 0;
        if ((i9 | 0) == (i21 | 0)) {
         break;
        }
       }
       HEAP32[i7 >> 2] = 0;
      }
      i21 = HEAP32[i14 >> 2] | 0;
      if ((i21 | 0) == 0) {
       break;
      }
      HEAP32[i14 >> 2] = 0;
      HEAP32[i10 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i21);
     }
    } while (0);
    __ZN7WebCore8Document39addDocumentToFullScreenChangeEventQueueEPS0_(i1, HEAP32[i18 + (i12 << 2) >> 2] | 0);
    i10 = (i12 | 0) == ((HEAP32[i13 >> 2] | 0) - 1 | 0) ? 0 : i12 + 1 | 0;
    if ((i10 | 0) == (HEAP32[i8 >> 2] | 0)) {
     break;
    } else {
     i12 = i10;
     i6 = i18;
    }
   }
  }
 } while (0);
 L46 : do {
  if ((i1 | 0) == 0) {
   i25 = 0;
  } else {
   i18 = i1;
   L47 : while (1) {
    i17 = i18 + 1700 | 0;
    i16 = i18 + 1692 | 0;
    i22 = HEAP32[i17 >> 2] | 0;
    while (1) {
     if ((i22 | 0) == 0) {
      break;
     }
     i5 = i22 - 1 | 0;
     i6 = HEAP32[(HEAP32[i16 >> 2] | 0) + (i5 << 2) >> 2] | 0;
     do {
      if ((i6 | 0) != 0) {
       i12 = i6 + 8 | 0;
       i8 = i12 | 0;
       i13 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
       HEAP32[i8 >> 2] = i13;
       if ((i13 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
      }
     } while (0);
     HEAP32[i17 >> 2] = i5;
     if ((i5 | 0) == 0) {
      break;
     }
     i6 = _llvm_uadd_with_overflow_i32(i5 | 0, -1 | 0) | 0;
     if (!tempRet0) {
      i20 = 40;
      break L47;
     }
     i26 = HEAP32[(HEAP32[i16 >> 2] | 0) + (i6 << 2) >> 2] | 0;
     if ((i26 | 0) == 0) {
      break;
     }
     if ((HEAP32[i26 + 12 >> 2] & 256 | 0) == 0) {
      i22 = i5;
      continue;
     }
     if ((HEAP32[(HEAP32[i26 + 20 >> 2] | 0) + 8 >> 2] | 0) == (i18 | 0)) {
      i20 = 44;
      break L47;
     } else {
      i22 = i5;
     }
    }
    __ZN7WebCore8Document39addDocumentToFullScreenChangeEventQueueEPS0_(i1, i18);
    i22 = HEAP32[i18 + 332 >> 2] | 0;
    if ((i22 | 0) == 0) {
     i25 = 0;
     break L46;
    }
    i16 = HEAP32[i22 + 448 >> 2] | 0;
    if ((i16 | 0) == 0) {
     i25 = 0;
     break L46;
    }
    i22 = HEAP32[(HEAP32[i16 + 20 >> 2] | 0) + 8 >> 2] | 0;
    if ((i22 | 0) == 0) {
     i25 = 0;
     break L46;
    } else {
     i18 = i22;
    }
   }
   if ((i20 | 0) == 40) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i20 | 0) == 44) {
    __ZN7WebCore8Document39addDocumentToFullScreenChangeEventQueueEPS0_(i1, i18);
    i25 = i26;
    break;
   }
  }
 } while (0);
 i26 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i26 | 0) != 0) {
   i4 = HEAP32[i26 + 32 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   i20 = HEAP32[(HEAP32[i4 + 20 >> 2] | 0) + 8 >> 2] | 0;
   i4 = HEAP32[i20 >> 2] | 0;
   if ((i25 | 0) == 0) {
    FUNCTION_TABLE_vii[HEAP32[i4 + 352 >> 2] & 127](i20, HEAP32[i1 + 1688 >> 2] | 0);
    break;
   } else {
    FUNCTION_TABLE_vii[HEAP32[i4 + 348 >> 2] & 127](i20, i25);
    break;
   }
  }
 } while (0);
 __ZN3WTF5DequeINS_6RefPtrIN7WebCore8DocumentEEELj0EE10destroyAllEv(i3);
 i25 = i3 + 8 | 0;
 i1 = HEAP32[i25 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 HEAP32[i25 >> 2] = 0;
 HEAP32[i3 + 12 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i1);
 STACKTOP = i2;
 return;
}
function __ZN7WebCoreL27printNavigationErrorMessageEPNS_5FrameERKNS_3URLEPKc(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 40 | 0;
 i8 = i1 + 456 | 0;
 i1 = HEAP32[(HEAP32[i8 >> 2] | 0) + 356 >> 2] | 0;
 do {
  if ((i1 | 0) == 0) {
   i9 = 0;
   i10 = 1;
  } else {
   i11 = i1 | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   i13 = i12 + 2 | 0;
   HEAP32[i11 >> 2] = i12 + 4;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    i14 = HEAP32[i11 >> 2] | 0;
   } else {
    HEAP32[i11 >> 2] = i13;
    i14 = i13;
   }
   i13 = i14 + 2 | 0;
   HEAP32[i11 >> 2] = i14 + 4;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    i9 = i1;
    i10 = 0;
    break;
   } else {
    HEAP32[i11 >> 2] = i13;
    i9 = i1;
    i10 = 0;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i2 >> 2] | 0;
 i2 = (i1 | 0) == 0;
 if (!i2) {
  i14 = i1 | 0;
  HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
 }
 i14 = (i9 | 0) == 0;
 if (!i14) {
  i13 = i9 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
 }
 if (!i2) {
  i13 = i1 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
 }
 if (!i14) {
  i13 = i9 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
 }
 do {
  if (!i2) {
   i13 = i1 | 0;
   i11 = HEAP32[i13 >> 2] | 0;
   HEAP32[i13 >> 2] = i11 + 2;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i13 >> 2] = i11;
    break;
   }
  }
 } while (0);
 if (!i14) {
  i11 = i9 | 0;
  i13 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
  if ((i13 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i9);
   i15 = HEAP32[i11 >> 2] | 0;
  } else {
   HEAP32[i11 >> 2] = i13;
   i15 = i13;
  }
  HEAP32[i11 >> 2] = i15 + 2;
 }
 if (!i2) {
  i15 = i1 | 0;
  HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 2;
 }
 if (!i14) {
  i15 = i9 | 0;
  HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 2;
 }
 do {
  if (!i2) {
   i15 = i1 | 0;
   i11 = HEAP32[i15 >> 2] | 0;
   HEAP32[i15 >> 2] = i11 + 2;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i15 >> 2] = i11;
    break;
   }
  }
 } while (0);
 if (!i14) {
  i11 = i9 | 0;
  i15 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
  if ((i15 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i9);
   i16 = HEAP32[i11 >> 2] | 0;
  } else {
   HEAP32[i11 >> 2] = i15;
   i16 = i15;
  }
  HEAP32[i11 >> 2] = i16 + 2;
 }
 if (!i2) {
  i16 = i1 | 0;
  HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
 }
 HEAP32[i7 >> 2] = H_BASE + 496;
 i16 = i7 + 4 | 0;
 HEAP32[i16 >> 2] = i9;
 if (!i14) {
  i11 = i9 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
 }
 HEAP32[i7 + 8 >> 2] = H_BASE + 472;
 i11 = i7 + 12 | 0;
 HEAP32[i11 >> 2] = i1;
 do {
  if (i2) {
   HEAP32[i7 + 16 >> 2] = H_BASE + 464;
   HEAP32[i7 + 20 >> 2] = i3;
  } else {
   i15 = i1 | 0;
   i13 = HEAP32[i15 >> 2] | 0;
   HEAP32[i15 >> 2] = i13 + 2;
   HEAP32[i7 + 16 >> 2] = H_BASE + 464;
   HEAP32[i7 + 20 >> 2] = i3;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i15 >> 2] = i13;
    break;
   }
  }
 } while (0);
 do {
  if (!i14) {
   i3 = i9 | 0;
   i13 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i3 >> 2] = i13;
    break;
   }
  }
 } while (0);
 __ZN3WTFplINS_12StringAppendINS1_INS1_INS1_IPKcNS_6StringEEES3_EES4_EES3_EES3_S3_EENS1_INS1_IT_T0_EET1_EERKSB_SC_(i6, i7, H_BASE + 1336 | 0);
 __ZNK3WTF12StringAppendINS0_INS0_INS0_INS0_INS0_IPKcNS_6StringEEES2_EES3_EES2_EES2_EES2_EcvS3_Ev(i5, i6);
 i7 = HEAP32[i6 + 12 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i13 = i7 | 0;
   i3 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i13 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i7 = HEAP32[i6 + 4 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i6 = i7 | 0;
   i3 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i6 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i7 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i11 = i7 | 0;
   i3 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i11 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i7 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i16 = i7 | 0;
   i3 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i16 >> 2] = i3;
    break;
   }
  }
 } while (0);
 do {
  if (!i2) {
   i7 = i1 | 0;
   i3 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i7 >> 2] = i3;
    break;
   }
  }
 } while (0);
 do {
  if (!i14) {
   i3 = i9 | 0;
   i7 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i3 >> 2] = i7;
    break;
   }
  }
 } while (0);
 do {
  if (!i2) {
   i7 = i1 | 0;
   i3 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i7 >> 2] = i3;
    break;
   }
  }
 } while (0);
 do {
  if (!i14) {
   i3 = i9 | 0;
   i7 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i3 >> 2] = i7;
    break;
   }
  }
 } while (0);
 do {
  if (!i2) {
   i7 = i1 | 0;
   i3 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i7 >> 2] = i3;
    break;
   }
  }
 } while (0);
 do {
  if (!i14) {
   i1 = i9 | 0;
   i2 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i1 >> 2] = i2;
    break;
   }
  }
 } while (0);
 do {
  if (!i10) {
   i14 = i9 | 0;
   i2 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i14 >> 2] = i2;
    break;
   }
  }
 } while (0);
 __ZN7WebCore9DOMWindow17printErrorMessageERKN3WTF6StringE(HEAP32[(HEAP32[i8 >> 2] | 0) + 336 >> 2] | 0, i5);
 i8 = HEAP32[i5 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i5 = i8 | 0;
 i9 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i9 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i8);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i5 >> 2] = i9;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore28DocumentStyleSheetCollectionD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = HEAP32[i1 + 136 >> 2] | 0;
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
 i2 = HEAP32[i1 + 132 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 120 >> 2] | 0;
 i3 = i1 + 128 | 0;
 if ((i2 | 0) != 0) {
  i4 = i2;
  while (1) {
   i2 = i4 + 8 | 0;
   i5 = HEAP32[i2 >> 2] | 0;
   i6 = HEAP32[i3 >> 2] | 0;
   i7 = i6 + 8 | 0;
   do {
    if (i7 >>> 0 > i4 >>> 0) {
     i8 = 13;
    } else {
     if ((i7 + 384 | 0) >>> 0 <= i4 >>> 0) {
      i8 = 13;
      break;
     }
     i9 = i6 | 0;
     HEAP32[i2 >> 2] = HEAP32[i9 >> 2];
     HEAP32[i9 >> 2] = i4;
    }
   } while (0);
   if ((i8 | 0) == 13) {
    i8 = 0;
    __ZN3WTF8fastFreeEPv(i4);
   }
   if ((i5 | 0) == 0) {
    break;
   } else {
    i4 = i5;
   }
  }
 }
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i4 | 0) != 0) {
  __ZdlPv(i4);
 }
 i4 = HEAP32[i1 + 100 >> 2] | 0;
 if ((i4 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i4);
 }
 i4 = i1 + 88 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 i8 = i1 + 80 | 0;
 if ((i3 | 0) != 0) {
  i2 = HEAP32[i8 >> 2] | 0;
  i6 = i2 + (i3 << 2) | 0;
  i3 = i2;
  while (1) {
   i2 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i2 | 0) != 0) {
     i7 = i2 + 4 | 0;
     i9 = i7 | 0;
     i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
     if ((i10 | 0) != 0) {
      HEAP32[i9 >> 2] = i10;
      break;
     }
     i10 = i7 - 4 | 0;
     if ((i10 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 127](i10);
    }
   } while (0);
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i4 >> 2] = 0;
 }
 i4 = HEAP32[i8 >> 2] | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i8 >> 2] = 0;
  HEAP32[i1 + 84 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i4);
 }
 i4 = i1 + 76 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 i6 = i1 + 68 | 0;
 if ((i8 | 0) != 0) {
  i3 = HEAP32[i6 >> 2] | 0;
  i2 = i3 + (i8 << 2) | 0;
  i8 = i3;
  while (1) {
   i3 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i3 | 0) != 0) {
     i5 = i3 + 4 | 0;
     i10 = i5 | 0;
     i7 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
     if ((i7 | 0) != 0) {
      HEAP32[i10 >> 2] = i7;
      break;
     }
     i7 = i5 - 4 | 0;
     if ((i7 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 127](i7);
    }
   } while (0);
   i8 = i8 + 4 | 0;
   if ((i8 | 0) == (i2 | 0)) {
    break;
   }
  }
  HEAP32[i4 >> 2] = 0;
 }
 i4 = HEAP32[i6 >> 2] | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i6 >> 2] = 0;
  HEAP32[i1 + 72 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i4);
 }
 i4 = i1 + 60 | 0;
 i6 = HEAP32[i4 >> 2] | 0;
 i2 = i1 + 52 | 0;
 if ((i6 | 0) != 0) {
  i8 = HEAP32[i2 >> 2] | 0;
  i3 = i8 + (i6 << 2) | 0;
  i6 = i8;
  while (1) {
   i8 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i8 | 0) != 0) {
     i7 = i8 + 4 | 0;
     i5 = i7 | 0;
     i10 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
     if ((i10 | 0) != 0) {
      HEAP32[i5 >> 2] = i10;
      break;
     }
     i10 = i7 - 4 | 0;
     if ((i10 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 127](i10);
    }
   } while (0);
   i6 = i6 + 4 | 0;
   if ((i6 | 0) == (i3 | 0)) {
    break;
   }
  }
  HEAP32[i4 >> 2] = 0;
 }
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i1 + 56 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i4);
 }
 i4 = i1 + 48 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 i3 = i1 + 40 | 0;
 if ((i2 | 0) != 0) {
  i6 = HEAP32[i3 >> 2] | 0;
  i8 = i6 + (i2 << 2) | 0;
  i2 = i6;
  while (1) {
   i6 = HEAP32[i2 >> 2] | 0;
   do {
    if ((i6 | 0) != 0) {
     i10 = i6 + 4 | 0;
     i7 = i10 | 0;
     i5 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
     if ((i5 | 0) != 0) {
      HEAP32[i7 >> 2] = i5;
      break;
     }
     i5 = i10 - 4 | 0;
     if ((i5 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 127](i5);
    }
   } while (0);
   i2 = i2 + 4 | 0;
   if ((i2 | 0) == (i8 | 0)) {
    break;
   }
  }
  HEAP32[i4 >> 2] = 0;
 }
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i1 + 44 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i4);
 }
 i4 = HEAP32[i1 + 36 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i3 = i4 + 4 | 0;
   i8 = i3 | 0;
   i2 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i8 >> 2] = i2;
    break;
   }
   i2 = i3 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 127](i2);
  }
 } while (0);
 i4 = HEAP32[i1 + 28 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i2 = HEAP32[i4 >> 2] | 0;
  if ((i2 | 0) != 0) {
   __ZN3WTF8fastFreeEPv(i2);
  }
  __ZN3WTF8fastFreeEPv(i4);
 }
 i4 = i1 + 24 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 i3 = i1 + 16 | 0;
 if ((i2 | 0) != 0) {
  i8 = HEAP32[i3 >> 2] | 0;
  i6 = i8 + (i2 << 2) | 0;
  i2 = i8;
  while (1) {
   i8 = HEAP32[i2 >> 2] | 0;
   do {
    if ((i8 | 0) != 0) {
     i5 = i8 + 4 | 0;
     i10 = i5 | 0;
     i7 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
     if ((i7 | 0) != 0) {
      HEAP32[i10 >> 2] = i7;
      break;
     }
     i7 = i5 - 4 | 0;
     if ((i7 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 127](i7);
    }
   } while (0);
   i2 = i2 + 4 | 0;
   if ((i2 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i4 >> 2] = 0;
 }
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i1 + 20 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i4);
 }
 i4 = i1 + 12 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 i6 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i2 = HEAP32[i6 >> 2] | 0;
  i8 = i2 + (i3 << 2) | 0;
  i3 = i2;
  while (1) {
   i2 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i2 | 0) != 0) {
     i7 = i2 + 4 | 0;
     i5 = i7 | 0;
     i10 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
     if ((i10 | 0) != 0) {
      HEAP32[i5 >> 2] = i10;
      break;
     }
     i10 = i7 - 4 | 0;
     if ((i10 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 127](i10);
    }
   } while (0);
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i8 | 0)) {
    break;
   }
  }
  HEAP32[i4 >> 2] = 0;
 }
 i4 = HEAP32[i6 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 HEAP32[i6 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i4);
 return;
}
function __ZN7WebCore8Document17createAttributeNSERKN3WTF6StringES4_Rib(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i7 + 16 | 0;
 i11 = i7 + 24 | 0;
 i12 = i7 + 32 | 0;
 i13 = i7 + 40 | 0;
 i14 = i7 + 48 | 0;
 i15 = i7 + 56 | 0;
 i16 = i7 + 64 | 0;
 i17 = i7 + 72 | 0;
 i18 = i7 + 80 | 0;
 i19 = i12 | 0;
 HEAP32[i19 >> 2] = 0;
 i20 = i13 | 0;
 HEAP32[i20 >> 2] = 0;
 if (__ZN7WebCore8Document18parseQualifiedNameERKN3WTF6StringERS2_S5_Ri(i4, i12, i13, i5) | 0) {
  i13 = HEAP32[i19 >> 2] | 0;
  do {
   if ((i13 | 0) == 0) {
    i12 = i11 | 0;
    HEAP32[i12 >> 2] = 0;
    i21 = i12;
   } else {
    if ((HEAP32[i13 + 16 >> 2] & 16 | 0) == 0) {
     __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i11, i13);
     i21 = i11 | 0;
     break;
    } else {
     i12 = i11 | 0;
     HEAP32[i12 >> 2] = i13;
     i4 = i13 | 0;
     HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
     i21 = i12;
     break;
    }
   }
  } while (0);
  i13 = i15 | 0;
  HEAP32[i13 >> 2] = HEAP32[i21 >> 2];
  i21 = HEAP32[i20 >> 2] | 0;
  do {
   if ((i21 | 0) == 0) {
    i11 = i10 | 0;
    HEAP32[i11 >> 2] = 0;
    i22 = i11;
   } else {
    if ((HEAP32[i21 + 16 >> 2] & 16 | 0) == 0) {
     __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i10, i21);
     i22 = i10 | 0;
     break;
    } else {
     i11 = i10 | 0;
     HEAP32[i11 >> 2] = i21;
     i12 = i21 | 0;
     HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
     i22 = i11;
     break;
    }
   }
  } while (0);
  i10 = i16 | 0;
  HEAP32[i10 >> 2] = HEAP32[i22 >> 2];
  i22 = HEAP32[i3 >> 2] | 0;
  do {
   if ((i22 | 0) == 0) {
    i3 = i9 | 0;
    HEAP32[i3 >> 2] = 0;
    i23 = i3;
   } else {
    if ((HEAP32[i22 + 16 >> 2] & 16 | 0) == 0) {
     __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i9, i22);
     i23 = i9 | 0;
     break;
    } else {
     i3 = i9 | 0;
     HEAP32[i3 >> 2] = i22;
     i11 = i22 | 0;
     HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
     i23 = i3;
     break;
    }
   }
  } while (0);
  i22 = i17 | 0;
  HEAP32[i22 >> 2] = HEAP32[i23 >> 2];
  __ZN7WebCore13QualifiedNameC1ERKN3WTF12AtomicStringES4_S4_(i14, i15, i16, i17);
  i17 = HEAP32[i22 >> 2] | 0;
  do {
   if ((i17 | 0) != 0) {
    i22 = i17 | 0;
    i16 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
    if ((i16 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i17);
     break;
    } else {
     HEAP32[i22 >> 2] = i16;
     break;
    }
   }
  } while (0);
  i17 = HEAP32[i10 >> 2] | 0;
  do {
   if ((i17 | 0) != 0) {
    i10 = i17 | 0;
    i16 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
    if ((i16 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i17);
     break;
    } else {
     HEAP32[i10 >> 2] = i16;
     break;
    }
   }
  } while (0);
  i17 = HEAP32[i13 >> 2] | 0;
  do {
   if ((i17 | 0) != 0) {
    i13 = i17 | 0;
    i16 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
    if ((i16 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i17);
     break;
    } else {
     HEAP32[i13 >> 2] = i16;
     break;
    }
   }
  } while (0);
  L43 : do {
   if (i6) {
    i24 = 43;
   } else {
    i17 = HEAP32[i14 >> 2] | 0;
    i16 = HEAP32[i17 + 8 >> 2] | 0;
    i13 = (i16 | 0) == 0;
    do {
     if (i13) {
      i24 = 34;
     } else {
      if ((HEAP32[i16 + 4 >> 2] | 0) == 0) {
       i24 = 34;
       break;
      }
      if ((HEAP32[i17 + 16 >> 2] | 0) != 0) {
       i24 = 34;
      }
     }
    } while (0);
    L48 : do {
     if ((i24 | 0) == 34) {
      if ((i16 | 0) == (HEAP32[__ZN3WTF7xmlAtomE >> 2] | 0)) {
       if ((HEAP32[i17 + 16 >> 2] | 0) != (HEAP32[__ZN7WebCore8XMLNames15xmlNamespaceURIE >> 2] | 0)) {
        break;
       }
      }
      i10 = HEAP32[__ZN3WTF9xmlnsAtomE >> 2] | 0;
      do {
       if ((i16 | 0) != (i10 | 0)) {
        if (i13) {
         i24 = 39;
        } else {
         if ((HEAP32[i16 + 4 >> 2] | 0) == 0) {
          i24 = 39;
         }
        }
        if ((i24 | 0) == 39) {
         if ((HEAP32[i17 + 12 >> 2] | 0) == (i10 | 0)) {
          break;
         }
        }
        if ((HEAP32[i17 + 16 >> 2] | 0) == (HEAP32[__ZN7WebCore10XMLNSNames17xmlnsNamespaceURIE >> 2] | 0)) {
         break L48;
        } else {
         i24 = 43;
         break L43;
        }
       }
      } while (0);
      if ((HEAP32[i17 + 16 >> 2] | 0) == (HEAP32[__ZN7WebCore10XMLNSNames17xmlnsNamespaceURIE >> 2] | 0)) {
       i24 = 43;
       break L43;
      }
     }
    } while (0);
    HEAP32[i5 >> 2] = 14;
    HEAP32[i1 >> 2] = 0;
   }
  } while (0);
  do {
   if ((i24 | 0) == 43) {
    i5 = __ZN3WTF11emptyStringEv() | 0;
    i6 = HEAP32[i5 >> 2] | 0;
    do {
     if ((i6 | 0) == 0) {
      i5 = i8 | 0;
      HEAP32[i5 >> 2] = 0;
      i25 = i5;
     } else {
      if ((HEAP32[i6 + 16 >> 2] & 16 | 0) == 0) {
       __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i8, i6);
       i25 = i8 | 0;
       break;
      } else {
       i5 = i8 | 0;
       HEAP32[i5 >> 2] = i6;
       i17 = i6 | 0;
       HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 2;
       i25 = i5;
       break;
      }
     }
    } while (0);
    i6 = i18 | 0;
    HEAP32[i6 >> 2] = HEAP32[i25 >> 2];
    __ZN7WebCore4Attr6createERNS_8DocumentERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1, i2, i14, i18);
    i5 = HEAP32[i6 >> 2] | 0;
    if ((i5 | 0) == 0) {
     break;
    }
    i6 = i5 | 0;
    i17 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
    if ((i17 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i5);
     break;
    } else {
     HEAP32[i6 >> 2] = i17;
     break;
    }
   }
  } while (0);
  __ZN7WebCore13QualifiedNameD1Ev(i14);
  i26 = i21;
 } else {
  HEAP32[i1 >> 2] = 0;
  i26 = HEAP32[i20 >> 2] | 0;
 }
 do {
  if ((i26 | 0) != 0) {
   i20 = i26 | 0;
   i1 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i26);
    break;
   } else {
    HEAP32[i20 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i26 = HEAP32[i19 >> 2] | 0;
 if ((i26 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i19 = i26 | 0;
 i1 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i26);
  STACKTOP = i7;
  return;
 } else {
  HEAP32[i19 >> 2] = i1;
  STACKTOP = i7;
  return;
 }
}
function __ZN7WebCore8Document11isValidNameERKN3WTF6StringE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = HEAP32[i2 + 4 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP32[i2 + 16 >> 2] & 32 | 0) != 0) {
  i4 = HEAP32[i2 + 8 >> 2] | 0;
  i5 = HEAP8[i4] | 0;
  i6 = i5 & 255;
  if (((i6 | 32) - 97 | 0) >>> 0 < 26 >>> 0) {
   i7 = 6;
  } else {
   if ((i5 << 24 >> 24 | 0) == 95 | (i5 << 24 >> 24 | 0) == 58) {
    i7 = 6;
   }
  }
  L11 : do {
   if ((i7 | 0) == 6) {
    if (i1 >>> 0 > 1 >>> 0) {
     i8 = 1;
    } else {
     i3 = 1;
     return i3 | 0;
    }
    while (1) {
     i5 = HEAP8[i4 + i8 | 0] | 0;
     do {
      if ((i5 - 48 & 255) >>> 0 >= 10 >>> 0) {
       if (((i5 & 255 | 32) - 97 | 0) >>> 0 < 26 >>> 0) {
        break;
       }
       if (!((i5 << 24 >> 24 | 0) == 95 | (i5 << 24 >> 24 | 0) == 58 | (i5 << 24 >> 24 | 0) == 46 | (i5 << 24 >> 24 | 0) == 45)) {
        break L11;
       }
      }
     } while (0);
     i5 = i8 + 1 | 0;
     if (i5 >>> 0 < i1 >>> 0) {
      i8 = i5;
     } else {
      i3 = 1;
      break;
     }
    }
    return i3 | 0;
   }
  } while (0);
  do {
   if (!((i6 | 0) == 95 | (i6 | 0) == 58)) {
    if ((1 << ((_u_charType(i6) | 0) << 24 >> 24) & 1070 | 0) == 0) {
     i3 = 0;
     return i3 | 0;
    }
    i8 = _u_getIntPropertyValue(i6, 4099) | 0;
    if ((i8 | 0) == 5 | (i8 | 0) == 2) {
     i3 = 0;
    } else {
     break;
    }
    return i3 | 0;
   }
  } while (0);
  if (i1 >>> 0 > 1 >>> 0) {
   i9 = 1;
  } else {
   i3 = 1;
   return i3 | 0;
  }
  L32 : while (1) {
   i6 = HEAP8[i4 + i9 | 0] | 0;
   i8 = i6 & 255;
   do {
    if (!((i8 | 0) == 95 | (i8 | 0) == 58)) {
     if ((1 << ((_u_charType(i8) | 0) << 24 >> 24) & 1070 | 0) != 0) {
      i5 = _u_getIntPropertyValue(i8, 4099) | 0;
      if (!((i5 | 0) == 5 | (i5 | 0) == 2)) {
       break;
      }
     }
     if (i6 << 24 >> 24 == -73 | (i8 - 45 | 0) >>> 0 < 2 >>> 0) {
      break;
     }
     if ((1 << ((_u_charType(i8) | 0) << 24 >> 24) & 976 | 0) == 0) {
      i3 = 0;
      i7 = 60;
      break L32;
     }
     i5 = _u_getIntPropertyValue(i8, 4099) | 0;
     if ((i5 | 0) == 5 | (i5 | 0) == 2) {
      i3 = 0;
      i7 = 61;
      break L32;
     }
    }
   } while (0);
   i8 = i9 + 1 | 0;
   if (i8 >>> 0 < i1 >>> 0) {
    i9 = i8;
   } else {
    i3 = 1;
    i7 = 62;
    break;
   }
  }
  if ((i7 | 0) == 60) {
   return i3 | 0;
  } else if ((i7 | 0) == 61) {
   return i3 | 0;
  } else if ((i7 | 0) == 62) {
   return i3 | 0;
  }
 }
 i9 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = HEAP16[i9 >> 1] | 0;
 i4 = i2 & 65535;
 if (((i4 | 32) - 97 | 0) >>> 0 < 26 >>> 0) {
  i7 = 24;
 } else {
  if ((i2 << 16 >> 16 | 0) == 95 | (i2 << 16 >> 16 | 0) == 58) {
   i7 = 24;
  }
 }
 L49 : do {
  if ((i7 | 0) == 24) {
   if (i1 >>> 0 > 1 >>> 0) {
    i10 = 1;
   } else {
    i3 = 1;
    return i3 | 0;
   }
   while (1) {
    i2 = HEAP16[i9 + (i10 << 1) >> 1] | 0;
    do {
     if ((i2 - 48 & 65535) >>> 0 >= 10 >>> 0) {
      if (((i2 & 65535 | 32) - 97 | 0) >>> 0 < 26 >>> 0) {
       break;
      }
      if (!((i2 << 16 >> 16 | 0) == 95 | (i2 << 16 >> 16 | 0) == 58 | (i2 << 16 >> 16 | 0) == 46 | (i2 << 16 >> 16 | 0) == 45)) {
       break L49;
      }
     }
    } while (0);
    i2 = i10 + 1 | 0;
    if (i2 >>> 0 < i1 >>> 0) {
     i10 = i2;
    } else {
     i3 = 1;
     break;
    }
   }
   return i3 | 0;
  }
 } while (0);
 do {
  if ((i4 & 64512 | 0) == 55296 & i1 >>> 0 > 1 >>> 0) {
   i10 = HEAPU16[i9 + 2 >> 1] | 0;
   if ((i10 & 64512 | 0) != 56320) {
    i11 = 1;
    i12 = i4;
    break;
   }
   i11 = 2;
   i12 = (i4 << 10) - 56613888 + i10 | 0;
  } else {
   i11 = 1;
   i12 = i4;
  }
 } while (0);
 do {
  if (!((i12 - 699 | 0) >>> 0 < 7 >>> 0 | (i12 | 0) == 1369 | (i12 | 0) == 1765 | (i12 | 0) == 1766)) {
   if ((i12 | 0) == 95 | (i12 | 0) == 58) {
    break;
   }
   if ((1 << ((_u_charType(i12) | 0) << 24 >> 24) & 1070 | 0) == 0) {
    i3 = 0;
    return i3 | 0;
   }
   if ((i12 - 63744 | 0) >>> 0 < 1790 >>> 0) {
    i3 = 0;
    return i3 | 0;
   }
   i4 = _u_getIntPropertyValue(i12, 4099) | 0;
   if ((i4 | 0) == 5 | (i4 | 0) == 2) {
    i3 = 0;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 if (i11 >>> 0 < i1 >>> 0) {
  i13 = i11;
 } else {
  i3 = 1;
  return i3 | 0;
 }
 L78 : while (1) {
  i11 = i13 + 1 | 0;
  i12 = HEAPU16[i9 + (i13 << 1) >> 1] | 0;
  do {
   if ((i12 & 64512 | 0) == 55296 & i11 >>> 0 < i1 >>> 0) {
    i4 = HEAPU16[i9 + (i11 << 1) >> 1] | 0;
    if ((i4 & 64512 | 0) != 56320) {
     i14 = i11;
     i15 = i12;
     break;
    }
    i14 = i13 + 2 | 0;
    i15 = (i12 << 10) - 56613888 + i4 | 0;
   } else {
    i14 = i11;
    i15 = i12;
   }
  } while (0);
  L84 : do {
   if (!((i15 - 699 | 0) >>> 0 < 7 >>> 0 | (i15 | 0) == 1369 | (i15 | 0) == 1765 | (i15 | 0) == 1766)) {
    if ((i15 | 0) == 95 | (i15 | 0) == 58) {
     break;
    }
    do {
     if ((1 << ((_u_charType(i15) | 0) << 24 >> 24) & 1070 | 0) != 0) {
      if ((i15 - 63744 | 0) >>> 0 < 1790 >>> 0) {
       break;
      }
      i12 = _u_getIntPropertyValue(i15, 4099) | 0;
      if (!((i12 | 0) == 5 | (i12 | 0) == 2)) {
       break L84;
      }
     }
    } while (0);
    if ((i15 | 0) == 903 | (i15 | 0) == 183) {
     break;
    }
    if ((i15 - 45 | 0) >>> 0 < 2 >>> 0) {
     break;
    }
    if ((1 << ((_u_charType(i15) | 0) << 24 >> 24) & 976 | 0) == 0) {
     i3 = 0;
     i7 = 70;
     break L78;
    }
    if ((i15 - 63744 | 0) >>> 0 < 1790 >>> 0) {
     i3 = 0;
     i7 = 71;
     break L78;
    }
    i12 = _u_getIntPropertyValue(i15, 4099) | 0;
    if ((i12 | 0) == 5 | (i12 | 0) == 2) {
     i3 = 0;
     i7 = 72;
     break L78;
    }
   }
  } while (0);
  if (i14 >>> 0 < i1 >>> 0) {
   i13 = i14;
  } else {
   i3 = 1;
   i7 = 69;
   break;
  }
 }
 if ((i7 | 0) == 69) {
  return i3 | 0;
 } else if ((i7 | 0) == 70) {
  return i3 | 0;
 } else if ((i7 | 0) == 71) {
  return i3 | 0;
 } else if ((i7 | 0) == 72) {
  return i3 | 0;
 }
 return 0;
}
function __ZN7WebCore8Document12dropChildrenEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i2 = i1 + 680 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 + 8 | 0;
   i4 = i2 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 i3 = i1 + 684 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 8 | 0;
   i5 = i3 | 0;
   i4 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i4;
   if ((i4 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 i2 = i1 + 688 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 + 8 | 0;
   i4 = i2 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 i3 = i1 + 1116 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 8 | 0;
   i5 = i3 | 0;
   i4 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i4;
   if ((i4 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 i2 = i1 + 692 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 + 8 | 0;
   i4 = i2 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore20UserActionElementSet24documentDidRemoveLastRefEv(i1 + 696 | 0);
 i3 = i1 + 1688 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 8 | 0;
   i5 = i3 | 0;
   i4 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i4;
   if ((i4 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 i2 = i1 + 1696 | 0;
 do {
  if ((HEAP32[i2 >> 2] | 0) != 0) {
   i3 = i1 + 1700 | 0;
   i4 = HEAP32[i3 >> 2] | 0;
   i5 = i1 + 1692 | 0;
   if ((i4 | 0) != 0) {
    i6 = HEAP32[i5 >> 2] | 0;
    i7 = i6 + (i4 << 2) | 0;
    i4 = i6;
    while (1) {
     i6 = HEAP32[i4 >> 2] | 0;
     do {
      if ((i6 | 0) != 0) {
       i8 = i6 + 8 | 0;
       i9 = i8 | 0;
       i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
       HEAP32[i9 >> 2] = i10;
       if ((i10 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
      }
     } while (0);
     i4 = i4 + 4 | 0;
     if ((i4 | 0) == (i7 | 0)) {
      break;
     }
    }
    HEAP32[i3 >> 2] = 0;
   }
   i7 = HEAP32[i5 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   HEAP32[i5 >> 2] = 0;
   HEAP32[i2 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i7);
  }
 } while (0);
 i2 = i1 + 344 | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 56 >> 2] & 127](i7);
   i4 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   if ((i4 | 0) == 0) {
    break;
   }
   i6 = i4 + 4 | 0;
   i4 = i6 | 0;
   i8 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i4 >> 2] = i8;
    break;
   }
   i8 = i6 - 4 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 127](i8);
  }
 } while (0);
 __ZN7WebCore9TreeScope20destroyTreeScopeDataEv(i1 + 44 | 0);
 __ZN7WebCore13ContainerNode22removeDetachedChildrenEv(i1 | 0);
 i2 = i1 + 924 | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i7 | 0) != 0) {
  __ZN7WebCore14FormControllerD1Ev(i7);
  __ZN3WTF8fastFreeEPv(i7);
 }
 __ZN7WebCore24DocumentMarkerController6detachEv(HEAP32[i1 + 1124 >> 2] | 0);
 i7 = i1 + 1412 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i8 = HEAP32[i1 + 1416 >> 2] | 0;
  if ((i8 | 0) > 0) {
   i6 = 0;
   while (1) {
    i4 = i2 + (i6 << 3) | 0;
    do {
     if ((HEAP32[i4 >> 2] | 0) != -1) {
      i10 = HEAP32[i2 + (i6 << 3) + 4 >> 2] | 0;
      do {
       if ((i10 | 0) != 0) {
        i9 = i10 + 8 | 0;
        i11 = i9 | 0;
        i12 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
        HEAP32[i11 >> 2] = i12;
        if ((i12 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
       }
      } while (0);
      i10 = HEAP32[i4 >> 2] | 0;
      if ((i10 | 0) == 0) {
       break;
      }
      i9 = i10 | 0;
      i12 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
      if ((i12 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i10);
       break;
      } else {
       HEAP32[i9 >> 2] = i12;
       break;
      }
     }
    } while (0);
    i6 = i6 + 1 | 0;
    if ((i6 | 0) >= (i8 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
  _memset(i7 | 0, 0, 16) | 0;
 }
 i7 = HEAP32[i1 + 1392 >> 2] | 0;
 if ((i7 | 0) != 0) {
  __ZN7WebCore21SVGDocumentExtensions15pauseAnimationsEv(i7);
 }
 i7 = i1 + 1976 | 0;
 i1 = HEAP32[i7 >> 2] | 0;
 if ((i1 | 0) == 0) {
  HEAP32[i7 >> 2] = 0;
  return;
 }
 HEAP32[i1 + 16 >> 2] = 0;
 i1 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i7 = i1 | 0;
 i2 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) == 0) {
  __ZN7WebCore27ScriptedAnimationControllerD1Ev(i1);
  __ZN3WTF8fastFreeEPv(i1);
  return;
 } else {
  HEAP32[i7 >> 2] = i2;
  return;
 }
}
function __ZN7WebCore8Document13implicitCloseEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, d13 = +0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 if ((HEAP8[i1 + 1081 | 0] & 1) != 0) {
  HEAP8[i1 + 1082 | 0] = 1;
  STACKTOP = i2;
  return;
 }
 i4 = i1 + 332 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = 1;
 } else {
  i6 = (__ZN7WebCore19NavigationScheduler21locationChangePendingEv(i5 + 376 | 0) | 0) ^ 1;
 }
 if ((HEAP8[i1 + 964 | 0] & 1) != 0) {
  STACKTOP = i2;
  return;
 }
 i5 = i1 + 344 | 0;
 i7 = HEAP32[i5 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i8 = i1 + 1244 | 0;
 if (!((HEAP8[i8] & 1) == 0 & i6)) {
  STACKTOP = i2;
  return;
 }
 i6 = i1 + 8 | 0;
 HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 HEAP8[i8] = 1;
 i6 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 8 >> 2] & 127](i7) | 0;
 if ((i6 | 0) == 0) {
  i9 = 0;
 } else {
  i9 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 68 >> 2] & 127](i6 | 0) | 0) & 1;
 }
 HEAP8[i1 + 352 | 0] = i9;
 i9 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 56 >> 2] & 127](i9);
   i6 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i6 | 0) == 0) {
    break;
   }
   i7 = i6 + 4 | 0;
   i6 = i7 | 0;
   i10 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) != 0) {
    HEAP32[i6 >> 2] = i10;
    break;
   }
   i10 = i7 - 4 | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 127](i10);
  }
 } while (0);
 i5 = HEAP32[i4 >> 2] | 0;
 i9 = (i5 | 0) != 0;
 if (i9) {
  __ZN7WebCore14IconController11startLoaderEv(HEAP32[i5 + 108 >> 2] | 0);
  __ZN7WebCore19AnimationController29startAnimationsIfNotSuspendedEPNS_8DocumentE(HEAP32[i5 + 476 >> 2] | 0, i1);
 }
 __ZN7WebCore11ImageLoader31dispatchPendingBeforeLoadEventsEv();
 __ZN7WebCore11ImageLoader25dispatchPendingLoadEventsEv();
 __ZN7WebCore11ImageLoader26dispatchPendingErrorEventsEv();
 __ZN7WebCore15HTMLLinkElement25dispatchPendingLoadEventsEv();
 __ZN7WebCore16HTMLStyleElement25dispatchPendingLoadEventsEv();
 i10 = i1 + 1392 | 0;
 i7 = HEAP32[i10 >> 2] | 0;
 if ((i7 | 0) != 0) {
  __ZN7WebCore21SVGDocumentExtensions42dispatchSVGLoadEventToOutermostSVGElementsEv(i7);
 }
 i7 = HEAP32[i1 + 336 >> 2] | 0;
 if ((i7 | 0) != 0) {
  __ZN7WebCore9DOMWindow17dispatchLoadEventEv(i7);
  HEAP8[i1 + 1245 | 0] = 1;
 }
 __ZN7WebCore8Document20enqueuePageshowEventENS_24PageshowEventPersistenceE(i1, 0);
 i7 = i1 + 1248 | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN7WebCore21SerializedScriptValue9nullValueEv(i3);
  i11 = i3 | 0;
 } else {
  i12 = i3 | 0;
  HEAP32[i12 >> 2] = i6;
  HEAP32[i7 >> 2] = 0;
  i11 = i12;
 }
 __ZN7WebCore8Document20enqueuePopstateEventEN3WTF10PassRefPtrINS_21SerializedScriptValueEEE(i1, i3);
 i3 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i11 = i3 | 0;
   if (((tempValue = HEAP32[i11 >> 2] | 0, HEAP32[i11 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN7WebCore21SerializedScriptValueD1Ev(i3);
   __ZN3WTF8fastFreeEPv(i3);
  }
 } while (0);
 if (i9) {
  __ZN7WebCore11FrameLoader19handledOnloadEventsEv(i5 + 80 | 0);
 }
 i5 = HEAP32[i4 >> 2] | 0;
 L48 : do {
  if ((i5 | 0) == 0) {
   HEAP8[i8] = 0;
  } else {
   do {
    if (__ZN7WebCore19NavigationScheduler21locationChangePendingEv(i5 + 376 | 0) | 0) {
     d13 = +__ZN3WTF27monotonicallyIncreasingTimeEv() * +1e3;
     i9 = HEAP32[i4 >> 2] | 0;
     if ((~~(d13 - +HEAPF64[i1 + 1256 >> 3]) | 0) >= (HEAP32[(HEAP32[i9 + 36 >> 2] | 0) + 68 >> 2] | 0)) {
      i14 = i9;
      break;
     }
     HEAP8[i8] = 0;
     if ((i9 | 0) == 0) {
      i15 = 0;
     } else {
      i15 = HEAP32[i9 + 452 >> 2] | 0;
     }
     __ZN7WebCore9FrameView18unscheduleRelayoutEv(i15);
     break L48;
    } else {
     i14 = HEAP32[i4 >> 2] | 0;
    }
   } while (0);
   __ZN7WebCore11FrameLoader22checkCallImplicitCloseEv(i14 + 80 | 0);
   HEAP8[i1 + 1264 | 0] = 1;
   i9 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i9 | 0) == 0) {
     i16 = 48;
    } else {
     i3 = HEAP32[i9 + 448 >> 2] | 0;
     if ((i3 | 0) == 0) {
      i16 = 48;
      break;
     }
     i11 = i3 + 32 | 0;
     if ((HEAP32[i3 + 12 >> 2] & 2048 | 0) == 0) {
      i17 = i11 | 0;
     } else {
      i17 = HEAP32[i11 >> 2] | 0;
     }
     if ((HEAP32[i17 >> 2] | 0) == 0) {
      break;
     }
     i11 = i3 + 32 | 0;
     if ((HEAP32[i3 + 12 >> 2] & 2048 | 0) == 0) {
      i18 = i11 | 0;
     } else {
      i18 = HEAP32[i11 >> 2] | 0;
     }
     if ((HEAP32[(HEAP32[i18 >> 2] | 0) + 20 >> 2] & 31 | 0) == 0) {
      i16 = 48;
     }
    }
   } while (0);
   do {
    if ((i16 | 0) == 48) {
     __ZN7WebCore8Document19updateStyleIfNeededEv(i1);
     i9 = HEAP32[i4 >> 2] | 0;
     if ((i9 | 0) == 0) {
      break;
     }
     i11 = HEAP32[i9 + 452 >> 2] | 0;
     if ((i11 | 0) == 0) {
      break;
     }
     i9 = HEAP32[i1 + 1584 >> 2] | 0;
     if ((i9 | 0) == 0) {
      break;
     }
     if ((HEAP32[i9 + 28 >> 2] | 0) != 0) {
      if ((HEAP32[i9 + 20 >> 2] & 31 | 0) == 0) {
       break;
      }
     }
     __ZN7WebCore9FrameView6layoutEb(i11, 1);
    }
   } while (0);
   HEAP8[i8] = 0;
   i11 = HEAP32[i10 >> 2] | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   __ZN7WebCore21SVGDocumentExtensions15startAnimationsEv(i11);
  }
 } while (0);
 i10 = i1 + 8 | 0;
 i1 = i10 | 0;
 i8 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i8;
 if ((i8 | 0) >= 1) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore8Document7setBodyEN3WTF10PassRefPtrINS_11HTMLElementEEERi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i2 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 do {
  if ((i2 | 0) == 0) {
   i9 = 6;
  } else {
   i8 = i1 + 692 | 0;
   i10 = HEAP32[i8 >> 2] | 0;
   if ((i10 | 0) == 0) {
    i9 = 6;
    break;
   }
   i11 = HEAP32[i2 + 44 >> 2] | 0;
   i12 = HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0;
   if ((i11 | 0) != (i12 | 0)) {
    if ((HEAP32[i11 + 12 >> 2] | 0) != (HEAP32[i12 + 12 >> 2] | 0)) {
     i9 = 6;
     break;
    }
    if ((HEAP32[i11 + 16 >> 2] | 0) != (HEAP32[i12 + 16 >> 2] | 0)) {
     i9 = 6;
     break;
    }
   }
   if ((HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0) == (i1 | 0)) {
    i13 = i2;
    i14 = i10;
   } else {
    HEAP32[i3 >> 2] = 0;
    __ZN7WebCore8Document10importNodeEPNS_4NodeEbRi(i5, i1, i2 | 0, 1, i3);
    i10 = i5 | 0;
    i12 = HEAP32[i10 >> 2] | 0;
    HEAP32[i10 >> 2] = 0;
    do {
     if ((HEAP32[i3 >> 2] | 0) == 0) {
      i10 = i12;
      if ((i12 | 0) != 0) {
       i11 = i12 + 8 | 0;
       HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
      }
      i11 = i2 + 8 | 0;
      i15 = i11 | 0;
      i16 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
      HEAP32[i15 >> 2] = i16;
      if ((i16 | 0) >= 1) {
       i17 = 0;
       i18 = i10;
       break;
      }
      if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
       i17 = 0;
       i18 = i10;
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
      i17 = 0;
      i18 = i10;
     } else {
      i17 = 1;
      i18 = i2;
     }
    } while (0);
    do {
     if ((i12 | 0) != 0) {
      i10 = i12 + 8 | 0;
      i11 = i10 | 0;
      i16 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
      HEAP32[i11 >> 2] = i16;
      if ((i16 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
     }
    } while (0);
    if ((i17 | 0) != 0) {
     i19 = i18;
     break;
    }
    i13 = i18;
    i14 = HEAP32[i8 >> 2] | 0;
   }
   L25 : do {
    if ((i14 | 0) == 0) {
     i20 = 0;
    } else {
     i12 = HEAP32[i14 + 36 >> 2] | 0;
     L27 : do {
      if ((i12 | 0) != 0) {
       i10 = (HEAP32[__ZN7WebCore9HTMLNames11framesetTagE >> 2] | 0) + 12 | 0;
       i16 = i12;
       while (1) {
        if ((HEAP32[i16 + 12 >> 2] & 20 | 0) == 20) {
         if ((HEAP32[(HEAP32[i16 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[i10 >> 2] | 0)) {
          i9 = 26;
          break;
         }
        }
        i11 = HEAP32[i16 + 28 >> 2] | 0;
        if ((i11 | 0) == 0) {
         i9 = 28;
         break;
        } else {
         i16 = i11;
        }
       }
       do {
        if ((i9 | 0) == 26) {
         if ((i16 | 0) == 0) {
          i9 = 28;
          break;
         }
         i21 = i16;
         i22 = i14 | 0;
        }
       } while (0);
       if ((i9 | 0) == 28) {
        i16 = (HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0) + 12 | 0;
        i10 = i12;
        while (1) {
         if ((HEAP32[i10 + 12 >> 2] & 20 | 0) == 20) {
          if ((HEAP32[(HEAP32[i10 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[i16 >> 2] | 0)) {
           break;
          }
         }
         i11 = HEAP32[i10 + 28 >> 2] | 0;
         if ((i11 | 0) == 0) {
          break L27;
         } else {
          i10 = i11;
         }
        }
        i16 = i14 | 0;
        if ((i10 | 0) == 0) {
         i20 = i16;
         break L25;
        } else {
         i21 = i10;
         i22 = i16;
        }
       }
       i16 = i7 | 0;
       HEAP32[i16 >> 2] = i13;
       __ZN7WebCore13ContainerNode12replaceChildEN3WTF10PassRefPtrINS_4NodeEEEPS3_Ri(i22, i7, i21, i3) | 0;
       i11 = HEAP32[i16 >> 2] | 0;
       if ((i11 | 0) == 0) {
        STACKTOP = i4;
        return;
       }
       i16 = i11 + 8 | 0;
       i11 = i16 | 0;
       i15 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
       HEAP32[i11 >> 2] = i15;
       if ((i15 | 0) >= 1) {
        STACKTOP = i4;
        return;
       }
       if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
        STACKTOP = i4;
        return;
       }
       __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
       STACKTOP = i4;
       return;
      }
     } while (0);
     i20 = i14 | 0;
    }
   } while (0);
   i8 = i6 | 0;
   HEAP32[i8 >> 2] = i13;
   __ZN7WebCore13ContainerNode11appendChildEN3WTF10PassRefPtrINS_4NodeEEERi(i20, i6, i3) | 0;
   i12 = HEAP32[i8 >> 2] | 0;
   if ((i12 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i8 = i12 + 8 | 0;
   i12 = i8 | 0;
   i16 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   HEAP32[i12 >> 2] = i16;
   if ((i16 | 0) >= 1) {
    STACKTOP = i4;
    return;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    STACKTOP = i4;
    return;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
   STACKTOP = i4;
   return;
  }
 } while (0);
 if ((i9 | 0) == 6) {
  HEAP32[i3 >> 2] = 3;
  i19 = i2;
 }
 if ((i19 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i2 = i19 + 8 | 0;
 i19 = i2 | 0;
 i3 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
 HEAP32[i19 >> 2] = i3;
 if ((i3 | 0) >= 1) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore8Document15createElementNSERKN3WTF6StringES4_Ri(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 i11 = i6 + 32 | 0;
 i12 = i6 + 40 | 0;
 i13 = i6 + 48 | 0;
 i14 = i6 + 56 | 0;
 i15 = i6 + 64 | 0;
 i16 = i10 | 0;
 HEAP32[i16 >> 2] = 0;
 i17 = i11 | 0;
 HEAP32[i17 >> 2] = 0;
 if (__ZN7WebCore8Document18parseQualifiedNameERKN3WTF6StringERS2_S5_Ri(i4, i10, i11, i5) | 0) {
  i11 = HEAP32[i16 >> 2] | 0;
  do {
   if ((i11 | 0) == 0) {
    i10 = i9 | 0;
    HEAP32[i10 >> 2] = 0;
    i18 = i10;
   } else {
    if ((HEAP32[i11 + 16 >> 2] & 16 | 0) == 0) {
     __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i9, i11);
     i18 = i9 | 0;
     break;
    } else {
     i10 = i9 | 0;
     HEAP32[i10 >> 2] = i11;
     i4 = i11 | 0;
     HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
     i18 = i10;
     break;
    }
   }
  } while (0);
  i11 = i13 | 0;
  HEAP32[i11 >> 2] = HEAP32[i18 >> 2];
  i18 = HEAP32[i17 >> 2] | 0;
  do {
   if ((i18 | 0) == 0) {
    i9 = i8 | 0;
    HEAP32[i9 >> 2] = 0;
    i19 = i9;
   } else {
    if ((HEAP32[i18 + 16 >> 2] & 16 | 0) == 0) {
     __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i8, i18);
     i19 = i8 | 0;
     break;
    } else {
     i9 = i8 | 0;
     HEAP32[i9 >> 2] = i18;
     i10 = i18 | 0;
     HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
     i19 = i9;
     break;
    }
   }
  } while (0);
  i8 = i14 | 0;
  HEAP32[i8 >> 2] = HEAP32[i19 >> 2];
  i19 = HEAP32[i3 >> 2] | 0;
  do {
   if ((i19 | 0) == 0) {
    i3 = i7 | 0;
    HEAP32[i3 >> 2] = 0;
    i20 = i3;
   } else {
    if ((HEAP32[i19 + 16 >> 2] & 16 | 0) == 0) {
     __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i7, i19);
     i20 = i7 | 0;
     break;
    } else {
     i3 = i7 | 0;
     HEAP32[i3 >> 2] = i19;
     i9 = i19 | 0;
     HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
     i20 = i3;
     break;
    }
   }
  } while (0);
  i19 = i15 | 0;
  HEAP32[i19 >> 2] = HEAP32[i20 >> 2];
  __ZN7WebCore13QualifiedNameC1ERKN3WTF12AtomicStringES4_S4_(i12, i13, i14, i15);
  i15 = HEAP32[i19 >> 2] | 0;
  do {
   if ((i15 | 0) != 0) {
    i19 = i15 | 0;
    i14 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
    if ((i14 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i15);
     break;
    } else {
     HEAP32[i19 >> 2] = i14;
     break;
    }
   }
  } while (0);
  i15 = HEAP32[i8 >> 2] | 0;
  do {
   if ((i15 | 0) != 0) {
    i8 = i15 | 0;
    i14 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
    if ((i14 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i15);
     break;
    } else {
     HEAP32[i8 >> 2] = i14;
     break;
    }
   }
  } while (0);
  i15 = HEAP32[i11 >> 2] | 0;
  do {
   if ((i15 | 0) != 0) {
    i11 = i15 | 0;
    i14 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
    if ((i14 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i15);
     break;
    } else {
     HEAP32[i11 >> 2] = i14;
     break;
    }
   }
  } while (0);
  i15 = HEAP32[i12 >> 2] | 0;
  i14 = HEAP32[i15 + 8 >> 2] | 0;
  i11 = (i14 | 0) == 0;
  do {
   if (i11) {
    i21 = 33;
   } else {
    if ((HEAP32[i14 + 4 >> 2] | 0) == 0) {
     i21 = 33;
     break;
    }
    if ((HEAP32[i15 + 16 >> 2] | 0) == 0) {
     i21 = 41;
    } else {
     i21 = 33;
    }
   }
  } while (0);
  L46 : do {
   if ((i21 | 0) == 33) {
    if ((i14 | 0) == (HEAP32[__ZN3WTF7xmlAtomE >> 2] | 0)) {
     if ((HEAP32[i15 + 16 >> 2] | 0) != (HEAP32[__ZN7WebCore8XMLNames15xmlNamespaceURIE >> 2] | 0)) {
      i21 = 41;
      break;
     }
    }
    i8 = HEAP32[__ZN3WTF9xmlnsAtomE >> 2] | 0;
    do {
     if ((i14 | 0) == (i8 | 0)) {
      i21 = 39;
     } else {
      if (i11) {
       i21 = 38;
      } else {
       if ((HEAP32[i14 + 4 >> 2] | 0) == 0) {
        i21 = 38;
       }
      }
      if ((i21 | 0) == 38) {
       if ((HEAP32[i15 + 12 >> 2] | 0) == (i8 | 0)) {
        i21 = 39;
        break;
       }
      }
      if ((HEAP32[i15 + 16 >> 2] | 0) == (HEAP32[__ZN7WebCore10XMLNSNames17xmlnsNamespaceURIE >> 2] | 0)) {
       i21 = 41;
       break L46;
      }
     }
    } while (0);
    if ((i21 | 0) == 39) {
     if ((HEAP32[i15 + 16 >> 2] | 0) != (HEAP32[__ZN7WebCore10XMLNSNames17xmlnsNamespaceURIE >> 2] | 0)) {
      i21 = 41;
      break;
     }
    }
    __ZN7WebCore8Document13createElementERKNS_13QualifiedNameEb(i1, i2, i12, 0);
   }
  } while (0);
  if ((i21 | 0) == 41) {
   HEAP32[i5 >> 2] = 14;
   HEAP32[i1 >> 2] = 0;
  }
  __ZN7WebCore13QualifiedNameD1Ev(i12);
  i22 = i18;
 } else {
  HEAP32[i1 >> 2] = 0;
  i22 = HEAP32[i17 >> 2] | 0;
 }
 do {
  if ((i22 | 0) != 0) {
   i17 = i22 | 0;
   i1 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i22);
    break;
   } else {
    HEAP32[i17 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i22 = HEAP32[i16 >> 2] | 0;
 if ((i22 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i16 = i22 | 0;
 i1 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i22);
  STACKTOP = i6;
  return;
 } else {
  HEAP32[i16 >> 2] = i1;
  STACKTOP = i6;
  return;
 }
}
function __ZN7WebCore8Document26pageSizeAndMarginsInPixelsEiRNS_7IntSizeERiS3_S3_S3_(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i9 = i8 | 0;
 i10 = i8 + 8 | 0;
 i11 = i10 | 0;
 i12 = i10;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i18 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i19 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i20 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i21 = i1 + 320 | 0;
 i22 = HEAP32[i21 >> 2] | 0;
 if ((i22 | 0) == 0) {
  i23 = HEAP32[i1 + 332 >> 2] | 0;
  do {
   if ((i23 | 0) == 0) {
    i24 = 1;
   } else {
    i25 = HEAP32[i23 + 36 >> 2] | 0;
    if ((i25 | 0) == 0) {
     i24 = 1;
     break;
    }
    i24 = (HEAP8[i25 + 182 | 0] & 16) != 0;
   }
  } while (0);
  i23 = __ZN3WTF10fastMallocEj(560) | 0;
  __ZN7WebCore13StyleResolverC1ERNS_8DocumentEb(i23, i1, i24);
  i24 = HEAP32[i21 >> 2] | 0;
  HEAP32[i21 >> 2] = i23;
  if ((i24 | 0) != 0) {
   __ZN7WebCore13StyleResolverD1Ev(i24);
   __ZN3WTF8fastFreeEPv(i24);
  }
  __ZN7WebCore28DocumentStyleSheetCollection22combineCSSFeatureFlagsEv(i1 + 772 | 0);
  i26 = HEAP32[i21 >> 2] | 0;
 } else {
  i26 = i22;
 }
 __ZN7WebCore13StyleResolver12styleForPageEi(i9, i26, i2);
 i2 = HEAP32[i9 >> 2] | 0;
 i9 = HEAP32[i1 + 1584 >> 2] | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 i26 = HEAP32[i3 + 4 >> 2] | 0;
 i22 = HEAP32[i2 + 20 >> 2] | 0;
 i21 = (HEAP32[i22 + 292 >> 2] | 0) >>> 7 & 3;
 do {
  if ((i21 | 0) == 1) {
   i24 = (i1 | 0) < (i26 | 0);
   i27 = i24 ? i1 : i26;
   i28 = i24 ? i26 : i1;
  } else if ((i21 | 0) == 2) {
   i24 = (i1 | 0) > (i26 | 0);
   i27 = i24 ? i1 : i26;
   i28 = i24 ? i26 : i1;
  } else if ((i21 | 0) == 3) {
   i24 = i22 + 168 | 0;
   i23 = HEAP32[i24 >> 2] | 0;
   i25 = HEAP32[i24 + 4 >> 2] | 0;
   HEAP32[i11 >> 2] = i23;
   HEAP32[i11 + 4 >> 2] = i25;
   if ((i23 & 0 | 0) == 0 & (i25 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i10);
   }
   i25 = i10 + 8 | 0;
   i23 = i25;
   i24 = i22 + 176 | 0;
   i29 = HEAP32[i24 >> 2] | 0;
   i30 = HEAP32[i24 + 4 >> 2] | 0;
   HEAP32[i25 >> 2] = i29;
   HEAP32[i25 + 4 >> 2] = i30;
   if ((i29 & 0 | 0) == 0 & (i30 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i23);
   }
   i30 = i10;
   HEAP32[i13 >> 2] = 0;
   __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i14, i30, i13, i9, 0);
   i29 = HEAP32[i14 >> 2] | 0;
   HEAP32[i15 >> 2] = 0;
   __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i16, i23, i15, i9, 0);
   i25 = HEAP32[i16 >> 2] | 0;
   if ((HEAP8[i12 + 13 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i23);
   }
   if ((HEAP8[i12 + 5 | 0] | 0) != 10) {
    i27 = i25;
    i28 = i29;
    break;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i30);
   i27 = i25;
   i28 = i29;
  } else {
   i27 = i26;
   i28 = i1;
  }
 } while (0);
 i1 = i3;
 HEAP32[i1 >> 2] = i28;
 HEAP32[i1 + 4 >> 2] = i27;
 i27 = i2 + 16 | 0;
 i1 = HEAP32[i27 >> 2] | 0;
 if ((HEAP8[i1 + 57 | 0] | 0) == 0) {
  i31 = HEAP32[i4 >> 2] | 0;
 } else {
  HEAP32[i17 >> 2] = i28;
  i31 = __ZN7WebCore17intValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i1 + 52 | 0, i17, i9, 0) | 0;
 }
 HEAP32[i4 >> 2] = i31;
 i31 = HEAP32[i27 >> 2] | 0;
 if ((HEAP8[i31 + 49 | 0] | 0) == 0) {
  i32 = HEAP32[i5 >> 2] | 0;
 } else {
  HEAP32[i18 >> 2] = i28;
  i32 = __ZN7WebCore17intValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i31 + 44 | 0, i18, i9, 0) | 0;
 }
 HEAP32[i5 >> 2] = i32;
 i32 = HEAP32[i27 >> 2] | 0;
 if ((HEAP8[i32 + 65 | 0] | 0) == 0) {
  i33 = HEAP32[i6 >> 2] | 0;
 } else {
  HEAP32[i19 >> 2] = i28;
  i33 = __ZN7WebCore17intValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i32 + 60 | 0, i19, i9, 0) | 0;
 }
 HEAP32[i6 >> 2] = i33;
 i33 = HEAP32[i27 >> 2] | 0;
 if ((HEAP8[i33 + 41 | 0] | 0) == 0) {
  i34 = HEAP32[i7 >> 2] | 0;
 } else {
  HEAP32[i20 >> 2] = i28;
  i34 = __ZN7WebCore17intValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i33 + 36 | 0, i20, i9, 0) | 0;
 }
 HEAP32[i7 >> 2] = i34;
 if ((i2 | 0) == 0) {
  STACKTOP = i8;
  return;
 }
 i34 = i2 | 0;
 i7 = (HEAP32[i34 >> 2] | 0) - 1 | 0;
 if ((i7 | 0) == 0) {
  __ZN7WebCore11RenderStyleD2Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  STACKTOP = i8;
  return;
 } else {
  HEAP32[i34 >> 2] = i7;
  STACKTOP = i8;
  return;
 }
}
function __ZN3WTF13tryMakeStringINS_12StringAppendINS1_INS1_INS1_INS1_IPKcNS_6StringEEES3_EES4_EES3_EES3_EES3_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = _strlen(i3 | 0) | 0;
 i8 = i2 + 20 | 0;
 i9 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
 i10 = i2 + 16 | 0;
 i11 = _strlen(HEAP32[i10 >> 2] | 0) | 0;
 i12 = i2 + 8 | 0;
 i13 = _strlen(HEAP32[i12 >> 2] | 0) | 0;
 i14 = i2 | 0;
 i15 = _strlen(HEAP32[i14 >> 2] | 0) | 0;
 i16 = i2 + 4 | 0;
 i17 = HEAP32[i16 >> 2] | 0;
 i18 = (i17 | 0) == 0;
 if (i18) {
  i19 = 0;
 } else {
  i19 = HEAP32[i17 + 4 >> 2] | 0;
 }
 i20 = i2 + 12 | 0;
 i21 = HEAP32[i20 >> 2] | 0;
 i22 = (i21 | 0) == 0;
 if (i22) {
  i23 = 0;
 } else {
  i23 = HEAP32[i21 + 4 >> 2] | 0;
 }
 i24 = _llvm_uadd_with_overflow_i32(i11 + i9 + i13 + i15 + i19 + i23 | 0, i7 | 0) | 0;
 i23 = i24;
 if (tempRet0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 if (i18) {
  i25 = 9;
 } else {
  if ((HEAP32[i17 + 16 >> 2] & 32 | 0) != 0) {
   i25 = 9;
  }
 }
 do {
  if ((i25 | 0) == 9) {
   if (!i22) {
    if ((HEAP32[i21 + 16 >> 2] & 32 | 0) == 0) {
     break;
    }
   }
   do {
    if ((i23 | 0) == 0) {
     i17 = __ZN3WTF10StringImpl5emptyEv() | 0;
     if ((i17 | 0) == 0) {
      i25 = 26;
      break;
     }
     i18 = i17 | 0;
     HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 2;
     i26 = i17;
     i27 = 0;
    } else {
     if (i23 >>> 0 > 4294967275 >>> 0) {
      i25 = 26;
      break;
     }
     __ZN3WTF13tryFastMallocEj(i6, i23 + 20 | 0);
     i17 = i6 | 0;
     i18 = HEAP32[i17 >> 2] | 0;
     HEAP32[i17 >> 2] = 0;
     if ((i18 | 0) == 0) {
      i25 = 26;
      break;
     }
     i17 = i18 + 20 | 0;
     HEAP32[i18 >> 2] = 2;
     HEAP32[i18 + 4 >> 2] = i23;
     HEAP32[i18 + 8 >> 2] = i17;
     HEAP32[i18 + 12 >> 2] = 0;
     HEAP32[i18 + 16 >> 2] = 32;
     i26 = i18;
     i27 = i17;
    }
   } while (0);
   if ((i25 | 0) == 26) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   i17 = HEAP32[i8 >> 2] | 0;
   i18 = _strlen(i17 | 0) | 0;
   __ZN3WTF12StringAppendINS0_INS0_INS0_IPKcNS_6StringEEES2_EES3_EES2_E7writeToEPh(i2 | 0, i27);
   i24 = _strlen(HEAP32[i10 >> 2] | 0) | 0;
   i19 = _strlen(HEAP32[i12 >> 2] | 0) | 0;
   i15 = _strlen(HEAP32[i14 >> 2] | 0) | 0;
   i13 = HEAP32[i16 >> 2] | 0;
   if ((i13 | 0) == 0) {
    i28 = 0;
   } else {
    i28 = HEAP32[i13 + 4 >> 2] | 0;
   }
   i13 = HEAP32[i20 >> 2] | 0;
   if ((i13 | 0) == 0) {
    i29 = 0;
   } else {
    i29 = HEAP32[i13 + 4 >> 2] | 0;
   }
   _memcpy(i27 + (i19 + i24 + i15 + i28 + i29) | 0, i17 | 0, i18) | 0;
   i18 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
   i17 = _strlen(HEAP32[i10 >> 2] | 0) | 0;
   i15 = _strlen(HEAP32[i12 >> 2] | 0) | 0;
   i24 = _strlen(HEAP32[i14 >> 2] | 0) | 0;
   i19 = HEAP32[i16 >> 2] | 0;
   if ((i19 | 0) == 0) {
    i30 = 0;
   } else {
    i30 = HEAP32[i19 + 4 >> 2] | 0;
   }
   i19 = HEAP32[i20 >> 2] | 0;
   if ((i19 | 0) == 0) {
    i31 = 0;
   } else {
    i31 = HEAP32[i19 + 4 >> 2] | 0;
   }
   _memcpy(i27 + (i17 + i18 + i15 + i24 + i30 + i31) | 0, i3 | 0, i7) | 0;
   HEAP32[i1 >> 2] = i26;
   STACKTOP = i4;
   return;
  }
 } while (0);
 do {
  if ((i23 | 0) == 0) {
   i26 = __ZN3WTF10StringImpl5emptyEv() | 0;
   if ((i26 | 0) == 0) {
    i25 = 40;
    break;
   }
   i31 = i26 | 0;
   HEAP32[i31 >> 2] = (HEAP32[i31 >> 2] | 0) + 2;
   i32 = i26;
   i33 = 0;
  } else {
   if (i23 >>> 0 > 2147483637 >>> 0) {
    i25 = 40;
    break;
   }
   __ZN3WTF13tryFastMallocEj(i5, (i23 << 1) + 20 | 0);
   i26 = i5 | 0;
   i31 = HEAP32[i26 >> 2] | 0;
   HEAP32[i26 >> 2] = 0;
   if ((i31 | 0) == 0) {
    i25 = 40;
    break;
   }
   i26 = i31 + 20 | 0;
   HEAP32[i31 >> 2] = 2;
   HEAP32[i31 + 4 >> 2] = i23;
   HEAP32[i31 + 8 >> 2] = i26;
   HEAP32[i31 + 12 >> 2] = 0;
   HEAP32[i31 + 16 >> 2] = 0;
   i32 = i31;
   i33 = i26;
  }
 } while (0);
 if ((i25 | 0) == 40) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 __ZN3WTF12StringAppendINS0_INS0_INS0_INS0_IPKcNS_6StringEEES2_EES3_EES2_EES2_E7writeToEPt(i2, i33);
 i2 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
 i8 = _strlen(HEAP32[i10 >> 2] | 0) | 0;
 i10 = _strlen(HEAP32[i12 >> 2] | 0) | 0;
 i12 = _strlen(HEAP32[i14 >> 2] | 0) | 0;
 i14 = HEAP32[i16 >> 2] | 0;
 if ((i14 | 0) == 0) {
  i34 = 0;
 } else {
  i34 = HEAP32[i14 + 4 >> 2] | 0;
 }
 i14 = HEAP32[i20 >> 2] | 0;
 if ((i14 | 0) == 0) {
  i35 = 0;
 } else {
  i35 = HEAP32[i14 + 4 >> 2] | 0;
 }
 i14 = i8 + i2 + i10 + i12 + i34 + i35 | 0;
 if ((i7 | 0) != 0) {
  i35 = 0;
  while (1) {
   HEAP16[i33 + (i14 + i35 << 1) >> 1] = HEAPU8[i3 + i35 | 0] | 0;
   i35 = i35 + 1 | 0;
   if (i35 >>> 0 >= i7 >>> 0) {
    break;
   }
  }
 }
 HEAP32[i1 >> 2] = i32;
 STACKTOP = i4;
 return;
}
function __ZN3WTF13tryMakeStringINS_12StringAppendINS1_INS1_IPKcNS_6StringEEES3_EES4_EES3_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = _strlen(i3 | 0) | 0;
 i8 = i2 + 8 | 0;
 i9 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
 i10 = i2 | 0;
 i11 = _strlen(HEAP32[i10 >> 2] | 0) | 0;
 i12 = i2 + 4 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 i14 = (i13 | 0) == 0;
 if (i14) {
  i15 = 0;
 } else {
  i15 = HEAP32[i13 + 4 >> 2] | 0;
 }
 i16 = i2 + 12 | 0;
 i17 = HEAP32[i16 >> 2] | 0;
 i18 = (i17 | 0) == 0;
 if (i18) {
  i19 = 0;
 } else {
  i19 = HEAP32[i17 + 4 >> 2] | 0;
 }
 i20 = _llvm_uadd_with_overflow_i32(i11 + i9 + i15 + i19 | 0, i7 | 0) | 0;
 i19 = i20;
 if (tempRet0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 if (i14) {
  i21 = 9;
 } else {
  if ((HEAP32[i13 + 16 >> 2] & 32 | 0) != 0) {
   i21 = 9;
  }
 }
 do {
  if ((i21 | 0) == 9) {
   if (!i18) {
    if ((HEAP32[i17 + 16 >> 2] & 32 | 0) == 0) {
     break;
    }
   }
   do {
    if ((i19 | 0) == 0) {
     i13 = __ZN3WTF10StringImpl5emptyEv() | 0;
     if ((i13 | 0) == 0) {
      i21 = 28;
      break;
     }
     i14 = i13 | 0;
     HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
     i22 = i13;
     i23 = 0;
    } else {
     if (i19 >>> 0 > 4294967275 >>> 0) {
      i21 = 28;
      break;
     }
     __ZN3WTF13tryFastMallocEj(i6, i19 + 20 | 0);
     i13 = i6 | 0;
     i14 = HEAP32[i13 >> 2] | 0;
     HEAP32[i13 >> 2] = 0;
     if ((i14 | 0) == 0) {
      i21 = 28;
      break;
     }
     i13 = i14 + 20 | 0;
     HEAP32[i14 >> 2] = 2;
     HEAP32[i14 + 4 >> 2] = i19;
     HEAP32[i14 + 8 >> 2] = i13;
     HEAP32[i14 + 12 >> 2] = 0;
     HEAP32[i14 + 16 >> 2] = 32;
     i22 = i14;
     i23 = i13;
    }
   } while (0);
   if ((i21 | 0) == 28) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   __ZN3WTF12StringAppendINS0_IPKcNS_6StringEEES2_E7writeToEPh(i2 | 0, i23);
   i13 = HEAP32[i8 >> 2] | 0;
   i14 = _strlen(i13 | 0) | 0;
   i20 = HEAP32[i10 >> 2] | 0;
   i15 = _strlen(i20 | 0) | 0;
   i9 = HEAP32[i12 >> 2] | 0;
   if ((i9 | 0) == 0) {
    i24 = 0;
   } else {
    i24 = HEAP32[i9 + 4 >> 2] | 0;
   }
   i11 = i15 + i14 + i24 | 0;
   i14 = HEAP32[i16 >> 2] | 0;
   do {
    if ((i14 | 0) == 0) {
     i25 = i13;
     i26 = i20;
     i27 = i9;
    } else {
     i15 = HEAP32[i14 + 4 >> 2] | 0;
     i28 = HEAP32[i14 + 8 >> 2] | 0;
     if ((i15 | 0) == 0) {
      i25 = i13;
      i26 = i20;
      i27 = i9;
      break;
     } else {
      i29 = 0;
     }
     while (1) {
      HEAP8[i23 + (i11 + i29) | 0] = HEAP8[i28 + i29 | 0] | 0;
      i29 = i29 + 1 | 0;
      if (i29 >>> 0 >= i15 >>> 0) {
       break;
      }
     }
     i25 = HEAP32[i8 >> 2] | 0;
     i26 = HEAP32[i10 >> 2] | 0;
     i27 = HEAP32[i12 >> 2] | 0;
    }
   } while (0);
   i11 = _strlen(i25 | 0) | 0;
   i9 = _strlen(i26 | 0) | 0;
   if ((i27 | 0) == 0) {
    i30 = 0;
   } else {
    i30 = HEAP32[i27 + 4 >> 2] | 0;
   }
   i20 = HEAP32[i16 >> 2] | 0;
   if ((i20 | 0) == 0) {
    i31 = 0;
   } else {
    i31 = HEAP32[i20 + 4 >> 2] | 0;
   }
   _memcpy(i23 + (i9 + i11 + i30 + i31) | 0, i3 | 0, i7) | 0;
   HEAP32[i1 >> 2] = i22;
   STACKTOP = i4;
   return;
  }
 } while (0);
 do {
  if ((i19 | 0) == 0) {
   i22 = __ZN3WTF10StringImpl5emptyEv() | 0;
   if ((i22 | 0) == 0) {
    i21 = 42;
    break;
   }
   i31 = i22 | 0;
   HEAP32[i31 >> 2] = (HEAP32[i31 >> 2] | 0) + 2;
   i32 = i22;
   i33 = 0;
  } else {
   if (i19 >>> 0 > 2147483637 >>> 0) {
    i21 = 42;
    break;
   }
   __ZN3WTF13tryFastMallocEj(i5, (i19 << 1) + 20 | 0);
   i22 = i5 | 0;
   i31 = HEAP32[i22 >> 2] | 0;
   HEAP32[i22 >> 2] = 0;
   if ((i31 | 0) == 0) {
    i21 = 42;
    break;
   }
   i22 = i31 + 20 | 0;
   HEAP32[i31 >> 2] = 2;
   HEAP32[i31 + 4 >> 2] = i19;
   HEAP32[i31 + 8 >> 2] = i22;
   HEAP32[i31 + 12 >> 2] = 0;
   HEAP32[i31 + 16 >> 2] = 0;
   i32 = i31;
   i33 = i22;
  }
 } while (0);
 if ((i21 | 0) == 42) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 __ZN3WTF12StringAppendINS0_INS0_IPKcNS_6StringEEES2_EES3_E7writeToEPt(i2, i33);
 i2 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
 i8 = _strlen(HEAP32[i10 >> 2] | 0) | 0;
 i10 = HEAP32[i12 >> 2] | 0;
 if ((i10 | 0) == 0) {
  i34 = 0;
 } else {
  i34 = HEAP32[i10 + 4 >> 2] | 0;
 }
 i10 = HEAP32[i16 >> 2] | 0;
 if ((i10 | 0) == 0) {
  i35 = 0;
 } else {
  i35 = HEAP32[i10 + 4 >> 2] | 0;
 }
 i10 = i8 + i2 + i34 + i35 | 0;
 if ((i7 | 0) != 0) {
  i35 = 0;
  while (1) {
   HEAP16[i33 + (i10 + i35 << 1) >> 1] = HEAPU8[i3 + i35 | 0] | 0;
   i35 = i35 + 1 | 0;
   if (i35 >>> 0 >= i7 >>> 0) {
    break;
   }
  }
 }
 HEAP32[i1 >> 2] = i32;
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
function __ZN7WebCore8Document11recalcStyleENS_5Style6ChangeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = HEAP32[i1 + 1584 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i7 = HEAP32[i6 + 116 >> 2] | 0;
 if (__ZNK7WebCore9FrameView10isPaintingEv(i7) | 0) {
  STACKTOP = i3;
  return;
 }
 i6 = i1 + 1081 | 0;
 if ((HEAP8[i6] & 1) != 0) {
  STACKTOP = i3;
  return;
 }
 i8 = i1 + 772 | 0;
 i9 = HEAP32[i1 + 868 >> 2] | 0;
 if ((i9 | 0) != 0) {
  __ZN7WebCore28DocumentStyleSheetCollection23updateActiveStyleSheetsENS0_10UpdateFlagE(i8, i9) | 0;
 }
 L13 : do {
  if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) == 0) {
   __ZN7WebCore30InspectorInstrumentationCookieC1Ev(i4);
  } else {
   do {
    if ((i1 | 0) != 0) {
     i9 = i1 + 332 | 0;
     i10 = HEAP32[i9 >> 2] | 0;
     if ((i10 | 0) == 0) {
      i11 = 11;
     } else {
      i12 = HEAP32[i10 + 32 >> 2] | 0;
      if ((i12 | 0) == 0) {
       i11 = 11;
      } else {
       i13 = i12;
      }
     }
     do {
      if ((i11 | 0) == 11) {
       i12 = HEAP32[i1 + 2204 >> 2] | 0;
       if ((i12 | 0) == 0) {
        i13 = 0;
        break;
       }
       i10 = HEAP32[i12 + 332 >> 2] | 0;
       if ((i10 | 0) == 0) {
        i13 = 0;
        break;
       }
       i13 = HEAP32[i10 + 32 >> 2] | 0;
      }
     } while (0);
     i10 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(i13) | 0;
     if ((i10 | 0) == 0) {
      break;
     }
     __ZN7WebCore24InspectorInstrumentation24willRecalculateStyleImplEPNS_19InstrumentingAgentsEPNS_5FrameE(i4, i10, HEAP32[i9 >> 2] | 0);
     break L13;
    }
   } while (0);
   __ZN7WebCore30InspectorInstrumentationCookieC1Ev(i4);
  }
 } while (0);
 i13 = HEAP32[i1 + 656 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   if ((HEAP8[(HEAP32[i13 + 8 >> 2] | 0) + 60 | 0] & 16) == 0) {
    break;
   }
   HEAP8[i1 + 918 | 0] = 1;
  }
 } while (0);
 HEAP8[i6] = 1;
 __ZN7WebCore13ContainerNode26suspendPostAttachCallbacksERNS_8DocumentE(i1);
 HEAP32[__ZN7WebCore37WidgetHierarchyUpdatesSuspensionScope35s_widgetHierarchyUpdateSuspendCountE >> 2] = (HEAP32[__ZN7WebCore37WidgetHierarchyUpdatesSuspensionScope35s_widgetHierarchyUpdateSuspendCountE >> 2] | 0) + 1;
 __ZN7WebCore9FrameView21beginDeferredRepaintsEv(i7);
 i13 = i1 + 1080 | 0;
 i11 = (HEAP8[i13] & 1) == 0 ? i2 : 4;
 if ((i11 | 0) == 4) {
  HEAP8[i1 + 325 | 0] = 0;
 }
 __ZN7WebCore5Style11resolveTreeERNS_8DocumentENS0_6ChangeE(i1, i11);
 __ZN7WebCore9FrameView39updateCompositingLayersAfterStyleChangeEv(i7);
 i11 = i1 + 12 | 0;
 HEAP32[i11 >> 2] = HEAP32[i11 >> 2] & -114817;
 __ZN7WebCore9TimerBase4stopEv(i1 + 1024 | 0);
 HEAP8[i13] = 0;
 HEAP8[i6] = 0;
 if ((HEAP32[i1 + 320 >> 2] | 0) != 0) {
  __ZN7WebCore28DocumentStyleSheetCollection20resetCSSFeatureFlagsEv(i8);
 }
 __ZN7WebCore9FrameView19endDeferredRepaintsEv(i7);
 i8 = HEAP32[__ZN7WebCore37WidgetHierarchyUpdatesSuspensionScope35s_widgetHierarchyUpdateSuspendCountE >> 2] | 0;
 if ((i8 | 0) == 1) {
  __ZN7WebCore37WidgetHierarchyUpdatesSuspensionScope11moveWidgetsEv(i5);
  i14 = HEAP32[__ZN7WebCore37WidgetHierarchyUpdatesSuspensionScope35s_widgetHierarchyUpdateSuspendCountE >> 2] | 0;
 } else {
  i14 = i8;
 }
 HEAP32[__ZN7WebCore37WidgetHierarchyUpdatesSuspensionScope35s_widgetHierarchyUpdateSuspendCountE >> 2] = i14 - 1;
 __ZN7WebCore13ContainerNode25resumePostAttachCallbacksERNS_8DocumentE(i1);
 i14 = i1 + 1082 | 0;
 if ((HEAP8[i14] & 1) != 0) {
  HEAP8[i14] = 0;
  __ZN7WebCore8Document13implicitCloseEv(i1);
 }
 do {
  if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) != 0) {
   if ((HEAP32[i4 >> 2] | 0) == 0) {
    break;
   }
   __ZN7WebCore24InspectorInstrumentation23didRecalculateStyleImplERKNS_30InspectorInstrumentationCookieE(i4);
  }
 } while (0);
 i14 = HEAP32[i1 + 684 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i8 = i14 + 32 | 0;
   if ((HEAP32[i14 + 12 >> 2] & 2048 | 0) == 0) {
    i15 = i8 | 0;
   } else {
    i15 = HEAP32[i8 >> 2] | 0;
   }
   if ((HEAP32[i15 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore12EventHandler30dispatchFakeMouseMoveEventSoonEv(HEAP32[(HEAP32[i7 + 216 >> 2] | 0) + 472 >> 2] | 0);
  }
 } while (0);
 i7 = i1 + 1184 | 0;
 do {
  if (+HEAPF64[i1 + 1192 >> 3] == +0) {
   if ((HEAP32[i1 + 680 >> 2] | 0) == 0) {
    break;
   }
   __ZN7WebCore9TimerBase5startEdd(i7, +0, +0);
  }
 } while (0);
 __ZN7WebCore30InspectorInstrumentationCookieD1Ev(i4);
 STACKTOP = i3;
 return;
}
function __ZN3WTF6VectorIN7WebCore20AnnotatedRegionValueELj0ENS_15CrashOnOverflowEEaSERKS4_(i1, i2) {
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
 do {
  if (i4 >>> 0 > i6 >>> 0) {
   i7 = HEAP32[i1 >> 2] | 0;
   i8 = i7 + (i4 * 40 & -1) | 0;
   if ((i4 | 0) != (i6 | 0)) {
    i9 = i7 + (i6 * 40 & -1) | 0;
    while (1) {
     i7 = HEAP32[i9 + 16 >> 2] | 0;
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
     i9 = i9 + 40 | 0;
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
   if (i6 >>> 0 <= i9 >>> 0) {
    i12 = i4;
    break;
   }
   do {
    if ((i9 | 0) != 0) {
     i7 = i1 | 0;
     if ((i4 | 0) != 0) {
      i11 = HEAP32[i7 >> 2] | 0;
      i10 = i11 + (i4 * 40 & -1) | 0;
      i13 = i11;
      while (1) {
       i11 = HEAP32[i13 + 16 >> 2] | 0;
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
       i13 = i13 + 40 | 0;
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
   __ZN3WTF6VectorIN7WebCore20AnnotatedRegionValueELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, HEAP32[i5 >> 2] | 0);
   i12 = HEAP32[i3 >> 2] | 0;
  }
 } while (0);
 i4 = i2 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 i6 = i2 + (i12 * 40 & -1) | 0;
 i8 = i1 | 0;
 if ((i12 | 0) == 0) {
  i16 = i2;
  i17 = 0;
 } else {
  i12 = HEAP32[i8 >> 2] | 0;
  i9 = i2;
  while (1) {
   i2 = i12;
   i10 = i9;
   HEAP32[i2 >> 2] = HEAP32[i10 >> 2];
   HEAP32[i2 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
   HEAP32[i2 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
   HEAP32[i2 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
   i10 = HEAP32[i9 + 16 >> 2] | 0;
   if ((i10 | 0) != 0) {
    i2 = i10 | 0;
    HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
   }
   i2 = i12 + 16 | 0;
   i13 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = i10;
   do {
    if ((i13 | 0) != 0) {
     i10 = i13 | 0;
     i2 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
     if ((i2 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i13);
      break;
     } else {
      HEAP32[i10 >> 2] = i2;
      break;
     }
    }
   } while (0);
   i13 = i12 + 20 | 0;
   i2 = i9 + 20 | 0;
   HEAP32[i13 >> 2] = HEAP32[i2 >> 2];
   HEAP32[i13 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
   HEAP32[i13 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
   HEAP32[i13 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
   HEAP32[i12 + 36 >> 2] = HEAP32[i9 + 36 >> 2];
   i2 = i9 + 40 | 0;
   if ((i2 | 0) == (i6 | 0)) {
    break;
   } else {
    i12 = i12 + 40 | 0;
    i9 = i2;
   }
  }
  i16 = HEAP32[i4 >> 2] | 0;
  i17 = HEAP32[i3 >> 2] | 0;
 }
 i4 = HEAP32[i5 >> 2] | 0;
 i9 = i16 + (i4 * 40 & -1) | 0;
 if ((i17 | 0) == (i4 | 0)) {
  i18 = i17;
 } else {
  i4 = i16 + (i17 * 40 & -1) | 0;
  i16 = (HEAP32[i8 >> 2] | 0) + (i17 * 40 & -1) | 0;
  while (1) {
   i17 = i16;
   i8 = i4;
   HEAP32[i17 >> 2] = HEAP32[i8 >> 2];
   HEAP32[i17 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
   HEAP32[i17 + 8 >> 2] = HEAP32[i8 + 8 >> 2];
   HEAP32[i17 + 12 >> 2] = HEAP32[i8 + 12 >> 2];
   i8 = HEAP32[i4 + 16 >> 2] | 0;
   HEAP32[i16 + 16 >> 2] = i8;
   if ((i8 | 0) != 0) {
    i17 = i8 | 0;
    HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 2;
   }
   i17 = i16 + 20 | 0;
   i8 = i4 + 20 | 0;
   HEAP32[i17 >> 2] = HEAP32[i8 >> 2];
   HEAP32[i17 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
   HEAP32[i17 + 8 >> 2] = HEAP32[i8 + 8 >> 2];
   HEAP32[i17 + 12 >> 2] = HEAP32[i8 + 12 >> 2];
   HEAP32[i16 + 36 >> 2] = HEAP32[i4 + 36 >> 2];
   i8 = i4 + 40 | 0;
   if ((i8 | 0) == (i9 | 0)) {
    break;
   } else {
    i4 = i8;
    i16 = i16 + 40 | 0;
   }
  }
  i18 = HEAP32[i5 >> 2] | 0;
 }
 HEAP32[i3 >> 2] = i18;
 return i1 | 0;
}
function __ZN7WebCore8Document19caretRangeFromPointEii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 40 | 0;
 i11 = i5 + 56 | 0;
 do {
  if ((HEAP32[i2 + 1584 >> 2] | 0) != 0) {
   if ((HEAP8[i2 + 2285 | 0] & 1) != 0) {
    break;
   }
   HEAP32[i6 >> 2] = 0;
   HEAP32[i6 + 4 >> 2] = 0;
   i12 = __ZN7WebCore13nodeFromPointEPNS_8DocumentEiiPNS_11LayoutPointE(i2, i3, i4, i6) | 0;
   if ((i12 | 0) == 0) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i5;
    return;
   }
   i13 = __ZNK7WebCore9TreeScope19ancestorInThisScopeEPNS_4NodeE(i2 + 44 | 0, i12) | 0;
   if ((i13 | 0) != (i12 | 0)) {
    i14 = __ZNK7WebCore4Node9nodeIndexEv(i13) | 0;
    i15 = HEAP32[i13 + 16 >> 2] | 0;
    i13 = i15 | 0;
    i16 = i7 | 0;
    HEAP32[i16 >> 2] = i13;
    if ((i15 | 0) == 0) {
     i17 = i8 | 0;
     HEAP32[i17 >> 2] = i13;
     i18 = i17;
    } else {
     i17 = i15 + 8 | 0;
     HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
     i15 = i8 | 0;
     HEAP32[i15 >> 2] = i13;
     HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
     i18 = i15;
    }
    __ZN7WebCore5Range6createERNS_8DocumentEN3WTF10PassRefPtrINS_4NodeEEEiS6_i(i1, i2, i7, i14, i8, i14);
    i14 = HEAP32[i18 >> 2] | 0;
    do {
     if ((i14 | 0) != 0) {
      i15 = i14 + 8 | 0;
      i17 = i15 | 0;
      i13 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
      HEAP32[i17 >> 2] = i13;
      if ((i13 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
     }
    } while (0);
    i14 = HEAP32[i16 >> 2] | 0;
    if ((i14 | 0) == 0) {
     STACKTOP = i5;
     return;
    }
    i15 = i14 + 8 | 0;
    i14 = i15 | 0;
    i13 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
    HEAP32[i14 >> 2] = i13;
    if ((i13 | 0) >= 1) {
     STACKTOP = i5;
     return;
    }
    if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
     STACKTOP = i5;
     return;
    }
    __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
    STACKTOP = i5;
    return;
   }
   i15 = i12 + 32 | 0;
   if ((HEAP32[i12 + 12 >> 2] & 2048 | 0) == 0) {
    i19 = i15 | 0;
   } else {
    i19 = HEAP32[i15 >> 2] | 0;
   }
   i15 = HEAP32[i19 >> 2] | 0;
   if ((i15 | 0) == 0) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i5;
    return;
   }
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i15 >> 2] | 0) + 464 >> 2] & 31](i9, i15, i6);
   i15 = i9 | 0;
   i13 = HEAP32[i15 >> 2] | 0;
   do {
    if ((i13 | 0) == 0) {
     HEAP32[i1 >> 2] = 0;
    } else {
     i14 = i11 | 0;
     HEAP32[i14 >> 2] = i13;
     i17 = i13 + 8 | 0;
     HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
     HEAP32[i11 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
     i17 = HEAP32[i9 + 8 >> 2] | 0;
     i20 = i11 + 8 | 0;
     i21 = i20;
     i22 = HEAP32[i21 >> 2] & -8 | i17 & 7;
     HEAP32[i21 >> 2] = i22;
     HEAP8[i20] = i22 & 255 & -9 | i17 & 8;
     __ZNK7WebCore8Position24parentAnchoredEquivalentEv(i10, i11);
     i17 = HEAP32[i14 >> 2] | 0;
     do {
      if ((i17 | 0) != 0) {
       i14 = i17 + 8 | 0;
       i22 = i14 | 0;
       i20 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
       HEAP32[i22 >> 2] = i20;
       if ((i20 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
      }
     } while (0);
     __ZN7WebCore5Range6createERNS_8DocumentERKNS_8PositionES5_(i1, i2, i10, i10);
     i17 = HEAP32[i10 >> 2] | 0;
     if ((i17 | 0) == 0) {
      break;
     }
     i14 = i17 + 8 | 0;
     i17 = i14 | 0;
     i20 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
     HEAP32[i17 >> 2] = i20;
     if ((i20 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
    }
   } while (0);
   i13 = HEAP32[i15 >> 2] | 0;
   if ((i13 | 0) == 0) {
    STACKTOP = i5;
    return;
   }
   i12 = i13 + 8 | 0;
   i13 = i12 | 0;
   i16 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   HEAP32[i13 >> 2] = i16;
   if ((i16 | 0) >= 1) {
    STACKTOP = i5;
    return;
   }
   if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
    STACKTOP = i5;
    return;
   }
   __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
   STACKTOP = i5;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore8Document21cloneDataFromDocumentERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i2 + 404 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i6 = i5 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
 }
 i6 = i1 + 404 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i5;
 do {
  if ((i7 | 0) != 0) {
   i5 = i7 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i5 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i7 = i2 + 408 | 0;
 i6 = i1 + 408 | 0;
 i5 = HEAP8[i6] & -2 | HEAP8[i7] & 1;
 HEAP8[i6] = i5;
 HEAP8[i6] = i5 & -3 | HEAP8[i7] & 2;
 HEAP32[i1 + 412 >> 2] = HEAP32[i2 + 412 >> 2];
 HEAP32[i1 + 416 >> 2] = HEAP32[i2 + 416 >> 2];
 HEAP32[i1 + 420 >> 2] = HEAP32[i2 + 420 >> 2];
 HEAP32[i1 + 424 >> 2] = HEAP32[i2 + 424 >> 2];
 HEAP32[i1 + 428 >> 2] = HEAP32[i2 + 428 >> 2];
 HEAP32[i1 + 432 >> 2] = HEAP32[i2 + 432 >> 2];
 HEAP32[i1 + 436 >> 2] = HEAP32[i2 + 436 >> 2];
 HEAP32[i1 + 440 >> 2] = HEAP32[i2 + 440 >> 2];
 HEAP32[i1 + 444 >> 2] = HEAP32[i2 + 444 >> 2];
 HEAP32[i1 + 448 >> 2] = HEAP32[i2 + 448 >> 2];
 i7 = HEAP32[i2 + 452 >> 2] | 0;
 if ((i7 | 0) != 0) {
  i5 = i7 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
 }
 i5 = i1 + 452 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i7;
 do {
  if ((i6 | 0) != 0) {
   i7 = i6 | 0;
   i5 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i7 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i6 = i2 + 456 | 0;
 i5 = i1 + 456 | 0;
 i7 = HEAP8[i5] & -2 | HEAP8[i6] & 1;
 HEAP8[i5] = i7;
 HEAP8[i5] = i7 & -3 | HEAP8[i6] & 2;
 HEAP32[i1 + 460 >> 2] = HEAP32[i2 + 460 >> 2];
 HEAP32[i1 + 464 >> 2] = HEAP32[i2 + 464 >> 2];
 HEAP32[i1 + 468 >> 2] = HEAP32[i2 + 468 >> 2];
 HEAP32[i1 + 472 >> 2] = HEAP32[i2 + 472 >> 2];
 HEAP32[i1 + 476 >> 2] = HEAP32[i2 + 476 >> 2];
 HEAP32[i1 + 480 >> 2] = HEAP32[i2 + 480 >> 2];
 HEAP32[i1 + 484 >> 2] = HEAP32[i2 + 484 >> 2];
 HEAP32[i1 + 488 >> 2] = HEAP32[i2 + 488 >> 2];
 HEAP32[i1 + 492 >> 2] = HEAP32[i2 + 492 >> 2];
 HEAP32[i1 + 496 >> 2] = HEAP32[i2 + 496 >> 2];
 i6 = HEAP32[i2 + 644 >> 2] | 0;
 if ((i6 | 0) != 0) {
  i7 = i6 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = i1 + 644 | 0;
 i5 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i6;
 do {
  if ((i5 | 0) != 0) {
   i6 = i5 | 0;
   i7 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i6 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i2 + 664 >> 2] | 0;
 do {
  if ((HEAP8[i1 + 668 | 0] & 1) == 0) {
   i7 = i1 + 664 | 0;
   i6 = HEAP32[i7 >> 2] | 0;
   if ((i6 | 0) == (i5 | 0)) {
    break;
   }
   HEAP32[i7 >> 2] = i5;
   i8 = HEAP32[i1 + 1572 >> 2] | 0;
   if ((i8 | 0) == 0) {
    i9 = i5;
   } else {
    __ZN7WebCore18SelectorQueryCache10invalidateEv(i8);
    i9 = HEAP32[i7 >> 2] | 0;
   }
   if (!((i9 | 0) == 0 ^ (i6 | 0) == 0)) {
    break;
   }
   i6 = i1 + 772 | 0;
   __ZN7WebCore28DocumentStyleSheetCollection18clearPageUserSheetEv(i6);
   __ZN7WebCore28DocumentStyleSheetCollection33invalidateInjectedStyleSheetCacheEv(i6);
  }
 } while (0);
 i9 = HEAP32[i2 + 100 >> 2] | 0;
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = i9;
 if ((i9 | 0) != 0) {
  i6 = i9 | 0;
  tempValue = HEAP32[i6 >> 2] | 0, HEAP32[i6 >> 2] = tempValue + 1, tempValue;
 }
 __ZN7WebCore15SecurityContext17setSecurityOriginEN3WTF10PassRefPtrINS_14SecurityOriginEEE(i1 + 88 | 0, i4);
 i4 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i5 = i4 | 0;
   if (((tempValue = HEAP32[i5 >> 2] | 0, HEAP32[i5 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN7WebCore14SecurityOriginD2Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  }
 } while (0);
 i4 = HEAP32[i2 + 1308 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i2 = i4 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 }
 i2 = i1 + 1308 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i4;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = i1 | 0;
 i2 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) == 0) {
  __ZN7WebCore19TextResourceDecoderD1Ev(i1);
  __ZN3WTF8fastFreeEPv(i1);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i4 >> 2] = i2;
  STACKTOP = i3;
  return;
 }
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore17HTMLCanvasElementEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6expandEPS7_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i3 = i1 + 4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = 8;
  i6 = 0;
 } else {
  i7 = i4 << 1;
  i5 = ((HEAP32[i1 + 12 >> 2] | 0) * 6 & -1 | 0) < (i7 | 0) ? i4 : i7;
  i6 = i4;
 }
 i4 = i1 | 0;
 i7 = HEAP32[i4 >> 2] | 0;
 HEAP32[i3 >> 2] = i5;
 i3 = i1 + 8 | 0;
 HEAP32[i3 >> 2] = i5 - 1;
 HEAP32[i4 >> 2] = __ZN3WTF16fastZeroedMallocEj(i5 << 3) | 0;
 if ((i6 | 0) == 0) {
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
  i5 = i7 + (i10 << 3) | 0;
  i12 = i5 | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i11;
  } else {
   i14 = HEAP32[i4 >> 2] | 0;
   i16 = HEAP32[i3 >> 2] | 0;
   i17 = HEAP32[i13 + 16 >> 2] | 0;
   if (i17 >>> 0 > 127 >>> 0) {
    i18 = i17 >>> 7;
   } else {
    i18 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i13) | 0;
   }
   i13 = (i18 >>> 23) + ~i18 | 0;
   i17 = i13 << 12 ^ i13;
   i13 = i17 >>> 7 ^ i17;
   i17 = i13 << 2 ^ i13;
   i13 = i17 >>> 20 ^ i17 | 1;
   i17 = i18;
   i19 = 0;
   i20 = 0;
   while (1) {
    i21 = i17 & i16;
    i22 = i14 + (i21 << 3) | 0;
    i23 = HEAP32[i22 >> 2] | 0;
    i24 = i23;
    if ((i24 | 0) == 0) {
     i25 = 11;
     break;
    } else if ((i24 | 0) == (-1 | 0)) {
     i26 = i22;
    } else {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i23, HEAP32[i12 >> 2] | 0) | 0) {
      i27 = i22;
      break;
     } else {
      i26 = i20;
     }
    }
    i23 = (i19 | 0) == 0 ? i13 : i19;
    i17 = i23 + i21 | 0;
    i19 = i23;
    i20 = i26;
   }
   if ((i25 | 0) == 11) {
    i25 = 0;
    i27 = (i20 | 0) != 0 ? i20 : i22;
   }
   i19 = i27 + 4 | 0;
   i17 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i13 = i17 + 8 | 0;
     i14 = i13 | 0;
     i16 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
     HEAP32[i14 >> 2] = i16;
     if ((i16 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
    }
   } while (0);
   i17 = i27 | 0;
   i20 = HEAP32[i17 >> 2] | 0;
   do {
    if ((i20 | 0) != 0) {
     i13 = i20 | 0;
     i16 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
     if ((i16 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i20);
      break;
     } else {
      HEAP32[i13 >> 2] = i16;
      break;
     }
    }
   } while (0);
   i20 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   HEAP32[i17 >> 2] = i20;
   i20 = i7 + (i10 << 3) + 4 | 0;
   i16 = HEAP32[i20 >> 2] | 0;
   HEAP32[i20 >> 2] = 0;
   HEAP32[i19 >> 2] = i16;
   i15 = (i5 | 0) == (i2 | 0) ? i27 : i11;
  }
  i16 = i10 + 1 | 0;
  if ((i16 | 0) == (i6 | 0)) {
   break;
  } else {
   i10 = i16;
   i11 = i15;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i6 | 0) > 0) {
  i28 = 0;
 } else {
  i8 = i15;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  i1 = i7 + (i28 << 3) | 0;
  do {
   if ((HEAP32[i1 >> 2] | 0) != -1) {
    i11 = HEAP32[i7 + (i28 << 3) + 4 >> 2] | 0;
    do {
     if ((i11 | 0) != 0) {
      i10 = i11 + 8 | 0;
      i27 = i10 | 0;
      i2 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
      HEAP32[i27 >> 2] = i2;
      if ((i2 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
     }
    } while (0);
    i11 = HEAP32[i1 >> 2] | 0;
    if ((i11 | 0) == 0) {
     break;
    }
    i10 = i11 | 0;
    i2 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
    if ((i2 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i11);
     break;
    } else {
     HEAP32[i10 >> 2] = i2;
     break;
    }
   }
  } while (0);
  i1 = i28 + 1 | 0;
  if ((i1 | 0) < (i6 | 0)) {
   i28 = i1;
  } else {
   i8 = i15;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN7WebCore8Document36dispatchFullScreenChangeOrErrorEventERN3WTF5DequeINS1_6RefPtrINS_4NodeEEELj0EEERKNS1_12AtomicStringEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i2 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = i2 + 4 | 0;
 if ((i7 | 0) == (HEAP32[i8 >> 2] | 0)) {
  STACKTOP = i4;
  return;
 }
 i9 = i2 + 8 | 0;
 i10 = i2 + 12 | 0;
 i11 = i1 + 692 | 0;
 i1 = i5 | 0;
 i12 = i7;
 while (1) {
  i7 = (HEAP32[i9 >> 2] | 0) + (i12 << 2) | 0;
  i13 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = 0;
  i7 = HEAP32[(HEAP32[i9 >> 2] | 0) + (HEAP32[i6 >> 2] << 2) >> 2] | 0;
  do {
   if ((i7 | 0) != 0) {
    i14 = i7 + 8 | 0;
    i15 = i14 | 0;
    i16 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
    HEAP32[i15 >> 2] = i16;
    if ((i16 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
   }
  } while (0);
  i7 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = (i7 | 0) == ((HEAP32[i10 >> 2] | 0) - 1 | 0) ? 0 : i7 + 1 | 0;
  do {
   if ((i13 | 0) == 0) {
    i7 = HEAP32[i11 >> 2] | 0;
    if ((i7 | 0) == 0) {
     break;
    }
    i14 = i7 + 8 | 0;
    HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
    i17 = i7 | 0;
    i18 = 10;
   } else {
    i17 = i13;
    i18 = 10;
   }
  } while (0);
  L14 : do {
   if ((i18 | 0) == 10) {
    i18 = 0;
    i13 = (i17 | 0) == 0;
    if ((HEAP32[i17 + 12 >> 2] & 256 | 0) == 0) {
     i7 = HEAP32[i11 >> 2] | 0;
     i14 = HEAP32[i6 >> 2] | 0;
     i16 = HEAP32[i8 >> 2] | 0;
     do {
      if ((i14 | 0) == 0) {
       i15 = HEAP32[i10 >> 2] | 0;
       if ((i16 | 0) == 0) {
        if ((i15 | 0) == 0) {
         i18 = 16;
         break;
        } else {
         i19 = 0;
         break;
        }
       } else {
        if ((i16 | 0) == (i15 - 1 | 0)) {
         i18 = 16;
         break;
        } else {
         i19 = i16;
         break;
        }
       }
      } else {
       if ((i16 + 1 | 0) == (i14 | 0)) {
        i18 = 16;
       } else {
        i19 = i16;
       }
      }
     } while (0);
     if ((i18 | 0) == 16) {
      i18 = 0;
      __ZN3WTF5DequeINS_6RefPtrIN7WebCore4NodeEEELj0EE14expandCapacityEv(i2);
      i19 = HEAP32[i8 >> 2] | 0;
     }
     HEAP32[(HEAP32[i9 >> 2] | 0) + (i19 << 2) >> 2] = i7;
     if ((i7 | 0) != 0) {
      i16 = i7 + 8 | 0;
      HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
     }
     i16 = HEAP32[i8 >> 2] | 0;
     HEAP32[i8 >> 2] = (i16 | 0) == ((HEAP32[i10 >> 2] | 0) - 1 | 0) ? 0 : i16 + 1 | 0;
    }
    i16 = HEAP32[(HEAP32[i17 >> 2] | 0) + 32 >> 2] | 0;
    i14 = __ZN3WTF10fastMallocEj(56) | 0;
    __ZN7WebCore5EventC1ERKN3WTF12AtomicStringEbb(i14, i3, 1, 0);
    HEAP32[i1 >> 2] = i14;
    FUNCTION_TABLE_iii[i16 & 15](i17, i5) | 0;
    i16 = HEAP32[i1 >> 2] | 0;
    do {
     if ((i16 | 0) == 0) {
      i18 = 25;
     } else {
      i14 = i16 + 8 | 0;
      i15 = i14 | 0;
      i20 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
      if ((i20 | 0) != 0) {
       HEAP32[i15 >> 2] = i20;
       if (i13) {
        break L14;
       } else {
        break;
       }
      }
      i20 = i14 - 8 | 0;
      if ((i20 | 0) == 0) {
       i18 = 25;
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] & 127](i20);
      if (i13) {
       break L14;
      }
     }
    } while (0);
    if ((i18 | 0) == 25) {
     i18 = 0;
     if (i13) {
      break;
     }
    }
    i16 = i17 + 8 | 0;
    i7 = i16 | 0;
    i20 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
    HEAP32[i7 >> 2] = i20;
    if ((i20 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
   }
  } while (0);
  i12 = HEAP32[i6 >> 2] | 0;
  if ((i12 | 0) == (HEAP32[i8 >> 2] | 0)) {
   break;
  }
 }
 STACKTOP = i4;
 return;
}
function __ZN7WebCore8Document17buildAccessKeyMapEPNS_9TreeScopeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = HEAP32[i2 + 4 >> 2] | 0;
 i2 = i7 + 36 | 0;
 while (1) {
  i8 = HEAP32[i2 >> 2] | 0;
  if ((i8 | 0) == 0) {
   i9 = 32;
   break;
  }
  if ((HEAP32[i8 + 12 >> 2] & 4 | 0) == 0) {
   i2 = i8 + 28 | 0;
  } else {
   break;
  }
 }
 if ((i9 | 0) == 32) {
  STACKTOP = i3;
  return;
 }
 i2 = i7 | 0;
 i7 = i1 + 1528 | 0;
 i10 = i6 + 8 | 0;
 i11 = i6 | 0;
 i12 = i8;
 L7 : while (1) {
  i8 = i12;
  i13 = HEAP32[i12 + 48 >> 2] | 0;
  L9 : do {
   if ((i13 | 0) == 0) {
    i14 = __ZN3WTF8nullAtomE;
   } else {
    i15 = HEAP32[i13 + 4 >> 2] | 0;
    if ((i15 & 1 | 0) == 0) {
     i16 = i15 >>> 1 & 134217727;
     i17 = i13 + 20 | 0;
    } else {
     i15 = i13 + 24 | 0;
     i16 = HEAP32[i15 + 8 >> 2] | 0;
     i17 = HEAP32[i15 >> 2] | 0;
    }
    if ((i16 | 0) == 0) {
     i14 = __ZN3WTF8nullAtomE;
     break;
    }
    i15 = HEAP32[__ZN7WebCore9HTMLNames13accesskeyAttrE >> 2] | 0;
    i18 = i15 + 12 | 0;
    i19 = i15 + 16 | 0;
    i20 = 0;
    while (1) {
     i21 = i17 + (i20 << 3) | 0;
     i22 = HEAP32[i21 >> 2] | 0;
     if ((i22 | 0) == (i15 | 0)) {
      break;
     }
     if ((HEAP32[i22 + 12 >> 2] | 0) == (HEAP32[i18 >> 2] | 0)) {
      if ((HEAP32[i22 + 16 >> 2] | 0) == (HEAP32[i19 >> 2] | 0)) {
       break;
      }
     }
     i22 = i20 + 1 | 0;
     if (i22 >>> 0 < i16 >>> 0) {
      i20 = i22;
     } else {
      i14 = __ZN3WTF8nullAtomE;
      break L9;
     }
    }
    i14 = (i21 | 0) == 0 ? __ZN3WTF8nullAtomE : i17 + (i20 << 3) + 4 | 0;
   }
  } while (0);
  i13 = HEAP32[i14 >> 2] | 0;
  do {
   if ((i13 | 0) != 0) {
    if ((HEAP32[i13 + 4 >> 2] | 0) == 0) {
     break;
    }
    HEAP32[i4 >> 2] = i13;
    HEAP32[i5 >> 2] = i8;
    __ZN3WTF9HashTableIPNS_10StringImplENS_12KeyValuePairIS2_PN7WebCore7ElementEEENS_24KeyValuePairKeyExtractorIS7_EENS_15CaseFoldingHashENS_7HashMapIS2_S6_SA_NS_10HashTraitsIS2_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EES2_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S7_S9_SA_SG_SD_EEEEOT0_OT1_(i6, i7, i4, i5);
    if ((HEAP8[i10] & 1) != 0) {
     break;
    }
    HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] = HEAP32[i5 >> 2];
   }
  } while (0);
  i13 = __ZNK7WebCore7Element10shadowRootEv(i8) | 0;
  if ((i13 | 0) != 0) {
   __ZN7WebCore8Document17buildAccessKeyMapEPNS_9TreeScopeE(i1, i13 + 44 | 0);
  }
  i13 = HEAP32[i12 + 36 >> 2] | 0;
  do {
   if ((i13 | 0) == 0) {
    if ((i12 | 0) == (i2 | 0)) {
     i9 = 33;
     break L7;
    }
    i19 = HEAP32[i12 + 28 >> 2] | 0;
    if ((i19 | 0) != 0) {
     i23 = i19;
     break;
    }
    i19 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i12, i2) | 0;
    if ((i19 | 0) == 0) {
     i9 = 34;
     break L7;
    } else {
     i23 = i19;
    }
   } else {
    i23 = i13;
   }
  } while (0);
  if ((HEAP32[i23 + 12 >> 2] & 4 | 0) == 0) {
   i24 = i23;
  } else {
   i12 = i23;
   continue;
  }
  while (1) {
   if ((i24 | 0) == (i2 | 0)) {
    i9 = 35;
    break L7;
   }
   i13 = HEAP32[i24 + 28 >> 2] | 0;
   if ((i13 | 0) == 0) {
    i8 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i24, i2) | 0;
    if ((i8 | 0) == 0) {
     i9 = 36;
     break L7;
    } else {
     i25 = i8;
    }
   } else {
    i25 = i13;
   }
   if ((HEAP32[i25 + 12 >> 2] & 4 | 0) == 0) {
    i24 = i25;
   } else {
    i12 = i25;
    continue L7;
   }
  }
 }
 if ((i9 | 0) == 33) {
  STACKTOP = i3;
  return;
 } else if ((i9 | 0) == 34) {
  STACKTOP = i3;
  return;
 } else if ((i9 | 0) == 35) {
  STACKTOP = i3;
  return;
 } else if ((i9 | 0) == 36) {
  STACKTOP = i3;
  return;
 }
}
function __ZN3WTF9HashTableINSt3__14pairIhNS_12AtomicStringEEENS_12KeyValuePairIS4_PN7WebCore14HTMLCollectionEEENS_24KeyValuePairKeyExtractorIS9_EENS6_17NodeListsNodeData25NodeListCacheMapEntryHashIS3_EENS_7HashMapIS4_S8_SE_NS_10HashTraitsIS4_EENSG_IS8_EEE18KeyValuePairTraitsESH_E6rehashEiPS9_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 i4 = i1 + 8 | 0;
 HEAP32[i4 >> 2] = i2 - 1;
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 * 12 & -1) | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i1 + 16 >> 2] = 0;
  i8 = 0;
  i9 = i7 | 0;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 } else {
  i10 = 0;
  i11 = 0;
 }
 while (1) {
  i2 = i7 + (i10 * 12 & -1) | 0;
  i12 = i2 | 0;
  i13 = HEAP8[i12] | 0;
  if ((i13 << 24 >> 24 | 0) == (-1 | 0)) {
   i14 = i11;
  } else if ((i13 << 24 >> 24 | 0) == 0) {
   i15 = HEAP32[i7 + (i10 * 12 & -1) + 4 >> 2] | 0;
   if ((i15 | 0) == 0) {
    i14 = i11;
   } else {
    i16 = i15;
    i17 = 6;
   }
  } else {
   i16 = HEAP32[i7 + (i10 * 12 & -1) + 4 >> 2] | 0;
   i17 = 6;
  }
  if ((i17 | 0) == 6) {
   i17 = 0;
   i15 = HEAP32[i6 >> 2] | 0;
   i18 = HEAP32[i4 >> 2] | 0;
   i19 = i7 + (i10 * 12 & -1) + 4 | 0;
   i20 = (i13 & 255) + ((HEAP32[i16 + 16 >> 2] | 0) >>> 7) | 0;
   i21 = (i20 >>> 23) + ~i20 | 0;
   i22 = i21 << 12 ^ i21;
   i21 = i22 >>> 7 ^ i22;
   i22 = i21 << 2 ^ i21;
   i21 = i22 >>> 20 ^ i22 | 1;
   i22 = i20;
   i20 = 0;
   i23 = 0;
   L11 : while (1) {
    i24 = i22 & i18;
    i25 = i15 + (i24 * 12 & -1) | 0;
    i26 = HEAP8[i25 | 0] | 0;
    if ((i26 << 24 >> 24 | 0) == 0) {
     if ((HEAP32[i15 + (i24 * 12 & -1) + 4 >> 2] | 0) == 0) {
      i17 = 9;
      break;
     } else {
      i17 = 10;
     }
    } else if ((i26 << 24 >> 24 | 0) == (-1 | 0)) {
     i27 = i25;
    } else {
     i17 = 10;
    }
    do {
     if ((i17 | 0) == 10) {
      i17 = 0;
      if (i26 << 24 >> 24 != i13 << 24 >> 24) {
       i27 = i23;
       break;
      }
      if ((HEAP32[i15 + (i24 * 12 & -1) + 4 >> 2] | 0) == (i16 | 0)) {
       i28 = i25;
       break L11;
      } else {
       i27 = i23;
      }
     }
    } while (0);
    i26 = (i20 | 0) == 0 ? i21 : i20;
    i22 = i26 + i24 | 0;
    i20 = i26;
    i23 = i27;
   }
   if ((i17 | 0) == 9) {
    i17 = 0;
    i28 = (i23 | 0) != 0 ? i23 : i25;
   }
   i20 = i28 + 4 | 0;
   i22 = HEAP32[i20 >> 2] | 0;
   do {
    if ((i22 | 0) != 0) {
     i21 = i22 | 0;
     i15 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
     if ((i15 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i22);
      break;
     } else {
      HEAP32[i21 >> 2] = i15;
      break;
     }
    }
   } while (0);
   HEAP8[i28 | 0] = HEAP8[i12] | 0;
   i22 = HEAP32[i19 >> 2] | 0;
   HEAP32[i19 >> 2] = 0;
   HEAP32[i20 >> 2] = i22;
   HEAP32[i28 + 8 >> 2] = HEAP32[i7 + (i10 * 12 & -1) + 8 >> 2];
   i14 = (i2 | 0) == (i3 | 0) ? i28 : i11;
  }
  i22 = i10 + 1 | 0;
  if ((i22 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i22;
   i11 = i14;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i29 = 0;
 } else {
  i8 = i14;
  i9 = i7 | 0;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  do {
   if ((HEAP8[i7 + (i29 * 12 & -1) | 0] | 0) != -1) {
    i1 = HEAP32[i7 + (i29 * 12 & -1) + 4 >> 2] | 0;
    if ((i1 | 0) == 0) {
     break;
    }
    i11 = i1 | 0;
    i10 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
    if ((i10 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i1);
     break;
    } else {
     HEAP32[i11 >> 2] = i10;
     break;
    }
   }
  } while (0);
  i2 = i29 + 1 | 0;
  if ((i2 | 0) < (i5 | 0)) {
   i29 = i2;
  } else {
   i8 = i14;
   break;
  }
 }
 i9 = i7 | 0;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN3WTF9HashTableINSt3__14pairIhNS_12AtomicStringEEENS_12KeyValuePairIS4_PN7WebCore14HTMLCollectionEEENS_24KeyValuePairKeyExtractorIS9_EENS6_17NodeListsNodeData25NodeListCacheMapEntryHashIS3_EENS_7HashMapIS4_S8_SE_NS_10HashTraitsIS4_EENSG_IS8_EEE18KeyValuePairTraitsESH_E3addINS_17HashMapTranslatorISK_SE_EES4_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS4_S9_SB_SE_SK_SH_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i4 = i2 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i6 | 0) == 0) {
   i7 = 8;
  } else {
   i8 = i6 << 1;
   i7 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i8 | 0) ? i6 : i8;
  }
  __ZN3WTF9HashTableINSt3__14pairIhNS_12AtomicStringEEENS_12KeyValuePairIS4_PN7WebCore14HTMLCollectionEEENS_24KeyValuePairKeyExtractorIS9_EENS6_17NodeListsNodeData25NodeListCacheMapEntryHashIS3_EENS_7HashMapIS4_S8_SE_NS_10HashTraitsIS4_EENSG_IS8_EEE18KeyValuePairTraitsESH_E6rehashEiPS9_(i2, i7, 0) | 0;
  i9 = HEAP32[i4 >> 2] | 0;
 } else {
  i9 = i5;
 }
 i5 = HEAP32[i2 + 8 >> 2] | 0;
 i7 = i3 + 4 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i6 = i3 | 0;
 i3 = HEAP8[i6] | 0;
 i10 = (i3 & 255) + ((HEAP32[i8 + 16 >> 2] | 0) >>> 7) | 0;
 i11 = (i10 >>> 23) + ~i10 | 0;
 i12 = i11 << 12 ^ i11;
 i11 = i12 >>> 7 ^ i12;
 i12 = i11 << 2 ^ i11;
 i11 = i12 >>> 20 ^ i12 | 1;
 i12 = 0;
 i13 = i10;
 i10 = 0;
 L7 : while (1) {
  i14 = i13 & i5;
  i15 = i9 + (i14 * 12 & -1) | 0;
  i16 = HEAP8[i15 | 0] | 0;
  if ((i16 << 24 >> 24 | 0) == 0) {
   if ((HEAP32[i9 + (i14 * 12 & -1) + 4 >> 2] | 0) == 0) {
    break;
   } else {
    i17 = 8;
   }
  } else if ((i16 << 24 >> 24 | 0) == (-1 | 0)) {
   i18 = i15;
  } else {
   i17 = 8;
  }
  do {
   if ((i17 | 0) == 8) {
    i17 = 0;
    if (i16 << 24 >> 24 != i3 << 24 >> 24) {
     i18 = i12;
     break;
    }
    if ((HEAP32[i9 + (i14 * 12 & -1) + 4 >> 2] | 0) == (i8 | 0)) {
     i17 = 10;
     break L7;
    } else {
     i18 = i12;
    }
   }
  } while (0);
  i16 = (i10 | 0) == 0 ? i11 : i10;
  i12 = i18;
  i13 = i16 + i14 | 0;
  i10 = i16;
 }
 if ((i17 | 0) == 10) {
  i17 = i9 + ((HEAP32[i2 + 4 >> 2] | 0) * 12 & -1) | 0;
  i9 = i1;
  HEAP32[i9 >> 2] = i15;
  HEAP32[i9 + 4 >> 2] = i17;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i12 | 0) == 0) {
  i19 = i15;
  i20 = i3;
 } else {
  _memset(i12 | 0, 0, 12) | 0;
  i3 = i2 + 16 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) - 1;
  i19 = i12;
  i20 = HEAP8[i6] | 0;
 }
 HEAP8[i19 | 0] = i20;
 i20 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i7 = i19 + 4 | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i20;
 do {
  if ((i6 | 0) != 0) {
   i20 = i6 | 0;
   i7 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i20 >> 2] = i7;
    break;
   }
  }
 } while (0);
 HEAP32[i19 + 8 >> 2] = 0;
 i6 = i2 + 12 | 0;
 i7 = (HEAP32[i6 >> 2] | 0) + 1 | 0;
 HEAP32[i6 >> 2] = i7;
 i6 = i2 + 4 | 0;
 i20 = HEAP32[i6 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i7 << 1 | 0) < (i20 | 0)) {
  i21 = i19;
  i22 = i20;
 } else {
  if ((i20 | 0) == 0) {
   i23 = 8;
  } else {
   i12 = i20 << 1;
   i23 = (i7 * 6 & -1 | 0) < (i12 | 0) ? i20 : i12;
  }
  i12 = __ZN3WTF9HashTableINSt3__14pairIhNS_12AtomicStringEEENS_12KeyValuePairIS4_PN7WebCore14HTMLCollectionEEENS_24KeyValuePairKeyExtractorIS9_EENS6_17NodeListsNodeData25NodeListCacheMapEntryHashIS3_EENS_7HashMapIS4_S8_SE_NS_10HashTraitsIS4_EENSG_IS8_EEE18KeyValuePairTraitsESH_E6rehashEiPS9_(i2, i23, i19) | 0;
  i21 = i12;
  i22 = HEAP32[i6 >> 2] | 0;
 }
 i6 = (HEAP32[i4 >> 2] | 0) + (i22 * 12 & -1) | 0;
 i22 = i1;
 HEAP32[i22 >> 2] = i21;
 HEAP32[i22 + 4 >> 2] = i6;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore8Document9setDomainERKN3WTF6StringERi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i1 + 100 | 0;
 i1 = i5 | 0;
 i8 = HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] | 0;
 HEAP32[i1 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i9 = i8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
 }
 i9 = __ZN7WebCore14SchemeRegistry39isDomainRelaxationForbiddenForURLSchemeERKN3WTF6StringE(i5) | 0;
 i5 = HEAP32[i1 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i1 = i5 | 0;
   i8 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i1 >> 2] = i8;
    break;
   }
  }
 } while (0);
 if (i9) {
  HEAP32[i3 >> 2] = 18;
  STACKTOP = i4;
  return;
 }
 i9 = HEAP32[(HEAP32[i7 >> 2] | 0) + 12 >> 2] | 0;
 do {
  if ((i9 | 0) == 0) {
   i5 = i2 | 0;
   if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplES2_(0, HEAP32[i5 >> 2] | 0) | 0) {
    i10 = 14;
   } else {
    i11 = i5;
   }
  } else {
   i5 = i9 | 0;
   HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
   i8 = i2 | 0;
   i1 = __ZN3WTF17equalIgnoringCaseEPKNS_10StringImplES2_(i9, HEAP32[i8 >> 2] | 0) | 0;
   i12 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    if (i1) {
     i10 = 14;
     break;
    } else {
     i11 = i8;
     break;
    }
   } else {
    HEAP32[i5 >> 2] = i12;
    if (i1) {
     i10 = 14;
     break;
    } else {
     i11 = i8;
     break;
    }
   }
  }
 } while (0);
 if ((i10 | 0) == 14) {
  __ZN7WebCore14SecurityOrigin16setDomainFromDOMERKN3WTF6StringE(HEAP32[i7 >> 2] | 0, i2);
  STACKTOP = i4;
  return;
 }
 i9 = HEAP32[(HEAP32[i7 >> 2] | 0) + 12 >> 2] | 0;
 do {
  if ((i9 | 0) == 0) {
   i13 = 0;
  } else {
   i8 = i9 | 0;
   i1 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = i1 + 2;
   i12 = HEAP32[i9 + 4 >> 2] | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    i13 = i12;
    break;
   } else {
    HEAP32[i8 >> 2] = i1;
    i13 = i12;
    break;
   }
  }
 } while (0);
 i9 = HEAP32[i11 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i14 = 0;
 } else {
  i14 = HEAP32[i9 + 4 >> 2] | 0;
 }
 if ((i14 | 0) >= (i13 | 0)) {
  HEAP32[i3 >> 2] = 18;
  STACKTOP = i4;
  return;
 }
 i9 = i6 | 0;
 i12 = HEAP32[(HEAP32[i7 >> 2] | 0) + 12 >> 2] | 0;
 HEAP32[i9 >> 2] = i12;
 do {
  if ((i12 | 0) == 0) {
   i10 = 30;
  } else {
   i1 = i12 | 0;
   HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
   i1 = HEAP32[i9 >> 2] | 0;
   i8 = i13 - i14 | 0;
   i5 = i8 - 1 | 0;
   if ((i1 | 0) == 0) {
    i10 = 30;
    break;
   }
   if ((HEAP32[i1 + 4 >> 2] | 0) >>> 0 <= i5 >>> 0) {
    i10 = 30;
    break;
   }
   i15 = i1 + 8 | 0;
   if ((HEAP32[i1 + 16 >> 2] & 32 | 0) == 0) {
    i16 = HEAP16[(HEAP32[i15 >> 2] | 0) + (i5 << 1) >> 1] | 0;
   } else {
    i16 = HEAPU8[(HEAP32[i15 >> 2] | 0) + i5 | 0] | 0;
   }
   if (i16 << 16 >> 16 != 46) {
    i10 = 30;
    break;
   }
   __ZN3WTF6String6removeEji(i6, 0, i8);
   if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i9 >> 2] | 0, HEAP32[i11 >> 2] | 0) | 0) {
    __ZN7WebCore14SecurityOrigin16setDomainFromDOMERKN3WTF6StringE(HEAP32[i7 >> 2] | 0, i2);
    break;
   } else {
    HEAP32[i3 >> 2] = 18;
    break;
   }
  }
 } while (0);
 if ((i10 | 0) == 30) {
  HEAP32[i3 >> 2] = 18;
 }
 i3 = HEAP32[i9 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i9 = i3 | 0;
 i10 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
 if ((i10 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i3);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i9 >> 2] = i10;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore8Document53adjustFloatQuadsForScrollAndAbsoluteZoomAndFrameScaleERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEERKNS_11RenderStyleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, d8 = +0, d9 = +0, i10 = 0, d11 = +0, d12 = +0, d13 = +0, i14 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i5 | 0;
 i7 = i1 + 332 | 0;
 i1 = HEAP32[i7 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i1 + 452 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 d8 = +HEAPF32[(HEAP32[i3 + 24 >> 2] | 0) + 80 >> 2];
 d9 = +1 / +__ZNK7WebCore5Frame16frameScaleFactorEv(i1);
 i1 = HEAP32[i7 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i10 = 0;
 } else {
  i10 = HEAP32[i1 + 452 >> 2] | 0;
 }
 __ZNK7WebCore10ScrollView18visibleContentRectENS_14ScrollableArea36VisibleContentRectIncludesScrollbarsE(i5, i10 | 0, 0);
 i10 = i2 + 8 | 0;
 if ((HEAP32[i10 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i5 = i2 | 0;
 d11 = +(-(HEAP32[i6 >> 2] | 0) | 0);
 d12 = +(-(HEAP32[i6 + 4 >> 2] | 0) | 0);
 i6 = d8 != +1;
 d13 = +1 / d8;
 i2 = d9 != +1;
 i1 = 0;
 while (1) {
  i7 = HEAP32[i5 >> 2] | 0;
  i3 = i7 + (i1 << 5) | 0;
  HEAPF32[i3 >> 2] = d11 + +HEAPF32[i3 >> 2];
  i3 = i7 + (i1 << 5) + 4 | 0;
  HEAPF32[i3 >> 2] = d12 + +HEAPF32[i3 >> 2];
  i3 = i7 + (i1 << 5) + 8 | 0;
  HEAPF32[i3 >> 2] = d11 + +HEAPF32[i3 >> 2];
  i3 = i7 + (i1 << 5) + 12 | 0;
  HEAPF32[i3 >> 2] = d12 + +HEAPF32[i3 >> 2];
  i3 = i7 + (i1 << 5) + 16 | 0;
  HEAPF32[i3 >> 2] = d11 + +HEAPF32[i3 >> 2];
  i3 = i7 + (i1 << 5) + 20 | 0;
  HEAPF32[i3 >> 2] = d12 + +HEAPF32[i3 >> 2];
  i3 = i7 + (i1 << 5) + 24 | 0;
  HEAPF32[i3 >> 2] = d11 + +HEAPF32[i3 >> 2];
  i3 = i7 + (i1 << 5) + 28 | 0;
  HEAPF32[i3 >> 2] = d12 + +HEAPF32[i3 >> 2];
  if (i6) {
   if ((HEAP32[i10 >> 2] | 0) >>> 0 <= i1 >>> 0) {
    i14 = 9;
    break;
   }
   i3 = HEAP32[i5 >> 2] | 0;
   i7 = i3 + (i1 << 5) | 0;
   HEAPF32[i7 >> 2] = d13 * +HEAPF32[i7 >> 2];
   i7 = i3 + (i1 << 5) + 4 | 0;
   HEAPF32[i7 >> 2] = d13 * +HEAPF32[i7 >> 2];
   i7 = i3 + (i1 << 5) + 8 | 0;
   HEAPF32[i7 >> 2] = d13 * +HEAPF32[i7 >> 2];
   i7 = i3 + (i1 << 5) + 12 | 0;
   HEAPF32[i7 >> 2] = d13 * +HEAPF32[i7 >> 2];
   i7 = i3 + (i1 << 5) + 16 | 0;
   HEAPF32[i7 >> 2] = d13 * +HEAPF32[i7 >> 2];
   i7 = i3 + (i1 << 5) + 20 | 0;
   HEAPF32[i7 >> 2] = d13 * +HEAPF32[i7 >> 2];
   i7 = i3 + (i1 << 5) + 24 | 0;
   HEAPF32[i7 >> 2] = d13 * +HEAPF32[i7 >> 2];
   i7 = i3 + (i1 << 5) + 28 | 0;
   HEAPF32[i7 >> 2] = d13 * +HEAPF32[i7 >> 2];
  }
  if (i2) {
   if ((HEAP32[i10 >> 2] | 0) >>> 0 <= i1 >>> 0) {
    i14 = 13;
    break;
   }
   i7 = HEAP32[i5 >> 2] | 0;
   i3 = i7 + (i1 << 5) | 0;
   HEAPF32[i3 >> 2] = d9 * +HEAPF32[i3 >> 2];
   i3 = i7 + (i1 << 5) + 4 | 0;
   HEAPF32[i3 >> 2] = d9 * +HEAPF32[i3 >> 2];
   i3 = i7 + (i1 << 5) + 8 | 0;
   HEAPF32[i3 >> 2] = d9 * +HEAPF32[i3 >> 2];
   i3 = i7 + (i1 << 5) + 12 | 0;
   HEAPF32[i3 >> 2] = d9 * +HEAPF32[i3 >> 2];
   i3 = i7 + (i1 << 5) + 16 | 0;
   HEAPF32[i3 >> 2] = d9 * +HEAPF32[i3 >> 2];
   i3 = i7 + (i1 << 5) + 20 | 0;
   HEAPF32[i3 >> 2] = d9 * +HEAPF32[i3 >> 2];
   i3 = i7 + (i1 << 5) + 24 | 0;
   HEAPF32[i3 >> 2] = d9 * +HEAPF32[i3 >> 2];
   i3 = i7 + (i1 << 5) + 28 | 0;
   HEAPF32[i3 >> 2] = d9 * +HEAPF32[i3 >> 2];
  }
  i3 = i1 + 1 | 0;
  if (i3 >>> 0 < (HEAP32[i10 >> 2] | 0) >>> 0) {
   i1 = i3;
  } else {
   i14 = 19;
   break;
  }
 }
 if ((i14 | 0) == 9) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i14 | 0) == 13) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i14 | 0) == 19) {
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore8Document8setTitleERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 HEAP8[i1 + 1112 | 0] = 1;
 i8 = i1 + 1116 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 L1 : do {
  if ((HEAP8[i1 + 1576 | 0] & 3) == 0) {
   HEAP32[i8 >> 2] = 0;
   if ((i9 | 0) == 0) {
    break;
   }
   i10 = i9 + 8 | 0;
   i11 = i10 | 0;
   i12 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   HEAP32[i11 >> 2] = i12;
   if ((i12 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  } else {
   if ((i9 | 0) != 0) {
    break;
   }
   i10 = HEAP32[i1 + 692 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   i12 = HEAP32[i10 + 36 >> 2] | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   i10 = (HEAP32[__ZN7WebCore9HTMLNames7headTagE >> 2] | 0) + 12 | 0;
   i11 = i12;
   while (1) {
    if ((HEAP32[i11 + 12 >> 2] & 20 | 0) == 20) {
     if ((HEAP32[(HEAP32[i11 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[i10 >> 2] | 0)) {
      break;
     }
    }
    i12 = HEAP32[i11 + 28 >> 2] | 0;
    if ((i12 | 0) == 0) {
     break L1;
    } else {
     i11 = i12;
    }
   }
   if ((i11 | 0) == 0) {
    break;
   }
   __ZN7WebCore8Document13createElementERKNS_13QualifiedNameEb(i4, i1, __ZN7WebCore9HTMLNames8titleTagE, 0);
   i10 = i4 | 0;
   i12 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = 0;
   i10 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = i12;
   if ((i10 | 0) == 0) {
    i13 = i12;
   } else {
    i12 = i10 + 8 | 0;
    i10 = i12 - 8 | 0;
    i14 = i12 | 0;
    i15 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
    HEAP32[i14 >> 2] = i15;
    do {
     if ((i15 | 0) < 1) {
      if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i10);
     }
    } while (0);
    i13 = HEAP32[i8 >> 2] | 0;
   }
   i10 = i5 | 0;
   HEAP32[i10 >> 2] = i13;
   if ((i13 | 0) != 0) {
    i12 = i13 + 8 | 0;
    HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
   }
   i12 = i6 | 0;
   HEAP32[i12 >> 2] = 0;
   __ZN7WebCore13ContainerNode11appendChildEN3WTF10PassRefPtrINS_4NodeEEERi(i11, i5, i12) | 0;
   i12 = HEAP32[i10 >> 2] | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   i10 = i12 + 8 | 0;
   i12 = i10 | 0;
   i15 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   HEAP32[i12 >> 2] = i15;
   if ((i15 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 i5 = i7 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 HEAP32[i5 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i13 = i6 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
 }
 HEAP32[i7 + 4 >> 2] = 1;
 __ZN7WebCore8Document11updateTitleERKNS_19StringWithDirectionE(i1, i7);
 i7 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i5 = i7 | 0;
   i1 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i5 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i7 = HEAP32[i8 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i7 + 12 >> 2] & 16 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[(HEAP32[i7 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8titleTagE >> 2] | 0) + 12 >> 2] | 0)) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore16HTMLTitleElement7setTextERKN3WTF6StringE(i7, i2);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore8Document22webkitCancelFullScreenEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = i1 + 332 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = (i3 | 0) == 0;
 L1 : do {
  if (i4) {
   i5 = i1;
  } else {
   i6 = i1;
   i7 = i3;
   while (1) {
    i8 = HEAP32[i7 + 448 >> 2] | 0;
    if ((i8 | 0) == 0) {
     i5 = i6;
     break L1;
    }
    i9 = HEAP32[(HEAP32[i8 + 20 >> 2] | 0) + 8 >> 2] | 0;
    i8 = HEAP32[i9 + 332 >> 2] | 0;
    if ((i8 | 0) == 0) {
     i5 = i9;
     break;
    } else {
     i6 = i9;
     i7 = i8;
    }
   }
  }
 } while (0);
 i7 = HEAP32[i5 + 1700 >> 2] | 0;
 if ((i7 | 0) == 0) {
  return;
 }
 i6 = _llvm_uadd_with_overflow_i32(i7 | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 if ((HEAP32[(HEAP32[i5 + 1692 >> 2] | 0) + (i6 << 2) >> 2] | 0) == 0) {
  return;
 }
 L15 : do {
  if (i4) {
   i10 = i1;
  } else {
   i6 = i1;
   i5 = i3;
   while (1) {
    i7 = HEAP32[i5 + 448 >> 2] | 0;
    if ((i7 | 0) == 0) {
     i10 = i6;
     break L15;
    }
    i8 = HEAP32[(HEAP32[i7 + 20 >> 2] | 0) + 8 >> 2] | 0;
    i7 = HEAP32[i8 + 332 >> 2] | 0;
    if ((i7 | 0) == 0) {
     i10 = i8;
     break;
    } else {
     i6 = i8;
     i5 = i7;
    }
   }
  }
 } while (0);
 i3 = HEAP32[i10 + 1700 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   i11 = 0;
  } else {
   i4 = _llvm_uadd_with_overflow_i32(i3 | 0, -1 | 0) | 0;
   if (tempRet0) {
    i11 = HEAP32[(HEAP32[i10 + 1692 >> 2] | 0) + (i4 << 2) >> 2] | 0;
    break;
   } else {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
  }
 } while (0);
 i10 = __ZN3WTF18fastMallocGoodSizeEj(64) | 0;
 i3 = i10 >>> 2;
 i4 = __ZN3WTF10fastMallocEj(i10) | 0;
 i10 = i4;
 HEAP32[i4 >> 2] = i11;
 if ((i11 | 0) != 0) {
  i4 = i11 + 8 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = HEAP32[i2 >> 2] | 0;
 L29 : do {
  if ((i4 | 0) == 0) {
   i12 = i1;
  } else {
   i11 = i1;
   i5 = i4;
   while (1) {
    i6 = HEAP32[i5 + 448 >> 2] | 0;
    if ((i6 | 0) == 0) {
     i12 = i11;
     break L29;
    }
    i7 = HEAP32[(HEAP32[i6 + 20 >> 2] | 0) + 8 >> 2] | 0;
    i6 = HEAP32[i7 + 332 >> 2] | 0;
    if ((i6 | 0) == 0) {
     i12 = i7;
     break;
    } else {
     i11 = i7;
     i5 = i6;
    }
   }
  }
 } while (0);
 i4 = i12 + 1700 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 1;
 i4 = i12 + 1692 | 0;
 i11 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i10;
 HEAP32[i12 + 1696 >> 2] = i3;
 i3 = HEAP32[i2 >> 2] | 0;
 L34 : do {
  if ((i3 | 0) == 0) {
   i13 = i1;
  } else {
   i2 = i1;
   i12 = i3;
   while (1) {
    i10 = HEAP32[i12 + 448 >> 2] | 0;
    if ((i10 | 0) == 0) {
     i13 = i2;
     break L34;
    }
    i4 = HEAP32[(HEAP32[i10 + 20 >> 2] | 0) + 8 >> 2] | 0;
    i10 = HEAP32[i4 + 332 >> 2] | 0;
    if ((i10 | 0) == 0) {
     i13 = i4;
     break;
    } else {
     i2 = i4;
     i12 = i10;
    }
   }
  }
 } while (0);
 __ZN7WebCore8Document20webkitExitFullscreenEv(i13);
 if ((i5 | 0) != 0) {
  i13 = i11 + (i5 << 2) | 0;
  i5 = i11;
  while (1) {
   i3 = HEAP32[i5 >> 2] | 0;
   do {
    if ((i3 | 0) != 0) {
     i1 = i3 + 8 | 0;
     i12 = i1 | 0;
     i2 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
     HEAP32[i12 >> 2] = i2;
     if ((i2 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
    }
   } while (0);
   i5 = i5 + 4 | 0;
   if ((i5 | 0) == (i13 | 0)) {
    break;
   }
  }
 }
 if ((i11 | 0) == 0) {
  return;
 }
 __ZN3WTF8fastFreeEPv(i11);
 return;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore17HTMLCanvasElementEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = i2 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore17HTMLCanvasElementEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6expandEPS7_(i2, 0) | 0;
  i6 = HEAP32[i4 >> 2] | 0;
 } else {
  i6 = i5;
 }
 i5 = HEAP32[i2 + 8 >> 2] | 0;
 i7 = i3 | 0;
 i3 = HEAP32[i7 >> 2] | 0;
 i8 = HEAP32[i3 + 16 >> 2] | 0;
 if (i8 >>> 0 > 127 >>> 0) {
  i9 = i8 >>> 7;
 } else {
  i9 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i3) | 0;
 }
 i3 = (i9 >>> 23) + ~i9 | 0;
 i8 = i3 << 12 ^ i3;
 i3 = i8 >>> 7 ^ i8;
 i8 = i3 << 2 ^ i3;
 i3 = i8 >>> 20 ^ i8 | 1;
 i8 = 0;
 i10 = i9;
 i9 = 0;
 while (1) {
  i11 = i10 & i5;
  i12 = i6 + (i11 << 3) | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0)) {
   i15 = i12;
  } else if ((i14 | 0) == 0) {
   break;
  } else {
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i13, HEAP32[i7 >> 2] | 0) | 0) {
    i16 = 9;
    break;
   } else {
    i15 = i8;
   }
  }
  i13 = (i9 | 0) == 0 ? i3 : i9;
  i8 = i15;
  i10 = i13 + i11 | 0;
  i9 = i13;
 }
 if ((i16 | 0) == 9) {
  i16 = (HEAP32[i4 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 3) | 0;
  i9 = i1;
  HEAP32[i9 >> 2] = i12;
  HEAP32[i9 + 4 >> 2] = i16;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i8 | 0) == 0) {
  i17 = i12;
 } else {
  i12 = i8;
  HEAP32[i12 >> 2] = 0;
  HEAP32[i12 + 4 >> 2] = 0;
  i12 = i2 + 16 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) - 1;
  i17 = i8;
 }
 i8 = HEAP32[i7 >> 2] | 0;
 if ((i8 | 0) != 0) {
  i7 = i8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = i17 | 0;
 i12 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i8;
 do {
  if ((i12 | 0) != 0) {
   i8 = i12 | 0;
   i7 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i8 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i12 = i17 + 4 | 0;
 i7 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = 0;
 do {
  if ((i7 | 0) != 0) {
   i12 = i7 + 8 | 0;
   i8 = i12 | 0;
   i16 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i16;
   if ((i16 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
  }
 } while (0);
 i7 = i2 + 12 | 0;
 i12 = (HEAP32[i7 >> 2] | 0) + 1 | 0;
 HEAP32[i7 >> 2] = i12;
 i7 = i2 + 4 | 0;
 i16 = HEAP32[i7 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i12 << 1 | 0) < (i16 | 0)) {
  i18 = i17;
  i19 = i16;
 } else {
  i16 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore17HTMLCanvasElementEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6expandEPS7_(i2, i17) | 0;
  i18 = i16;
  i19 = HEAP32[i7 >> 2] | 0;
 }
 i7 = (HEAP32[i4 >> 2] | 0) + (i19 << 3) | 0;
 i19 = i1;
 HEAP32[i19 >> 2] = i18;
 HEAP32[i19 + 4 >> 2] = i7;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6OwnPtrIN7WebCore6LocaleEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_16AtomicStringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i4 = i2 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i6 | 0) == 0) {
   i7 = 8;
  } else {
   i8 = i6 << 1;
   i7 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i8 | 0) ? i6 : i8;
  }
  __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6OwnPtrIN7WebCore6LocaleEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_16AtomicStringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6rehashEiPS7_(i2, i7, 0) | 0;
  i9 = HEAP32[i4 >> 2] | 0;
 } else {
  i9 = i5;
 }
 i5 = HEAP32[i2 + 8 >> 2] | 0;
 i7 = i3 | 0;
 i3 = HEAP32[i7 >> 2] | 0;
 i8 = HEAP32[i3 + 16 >> 2] | 0;
 i6 = i8 >>> 7;
 i10 = (i8 >>> 30) + ~i6 | 0;
 i8 = i10 << 12 ^ i10;
 i10 = i8 >>> 7 ^ i8;
 i8 = i10 << 2 ^ i10;
 i10 = i8 >>> 20 ^ i8 | 1;
 i8 = 0;
 i11 = i6;
 i6 = 0;
 while (1) {
  i12 = i11 & i5;
  i13 = i9 + (i12 << 3) | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  i15 = i14;
  if ((i15 | 0) == 0) {
   break;
  } else if ((i15 | 0) == (-1 | 0)) {
   i16 = i13;
  } else {
   if ((i14 | 0) == (i3 | 0)) {
    i17 = 8;
    break;
   } else {
    i16 = i8;
   }
  }
  i14 = (i6 | 0) == 0 ? i10 : i6;
  i8 = i16;
  i11 = i14 + i12 | 0;
  i6 = i14;
 }
 if ((i17 | 0) == 8) {
  i17 = i9 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
  i9 = i1;
  HEAP32[i9 >> 2] = i13;
  HEAP32[i9 + 4 >> 2] = i17;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i8 | 0) == 0) {
  i18 = i13;
  i19 = i3;
 } else {
  i3 = i8;
  HEAP32[i3 >> 2] = 0;
  HEAP32[i3 + 4 >> 2] = 0;
  i3 = i2 + 16 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) - 1;
  i18 = i8;
  i19 = HEAP32[i7 >> 2] | 0;
 }
 if ((i19 | 0) != 0) {
  i7 = i19 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = i18 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i19;
 do {
  if ((i8 | 0) != 0) {
   i19 = i8 | 0;
   i7 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i19 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i8 = i18 + 4 | 0;
 i7 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 if ((i7 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 127](i7);
 }
 i7 = i2 + 12 | 0;
 i8 = (HEAP32[i7 >> 2] | 0) + 1 | 0;
 HEAP32[i7 >> 2] = i8;
 i7 = i2 + 4 | 0;
 i19 = HEAP32[i7 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i8 << 1 | 0) < (i19 | 0)) {
  i20 = i18;
  i21 = i19;
 } else {
  if ((i19 | 0) == 0) {
   i22 = 8;
  } else {
   i3 = i19 << 1;
   i22 = (i8 * 6 & -1 | 0) < (i3 | 0) ? i19 : i3;
  }
  i3 = __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6OwnPtrIN7WebCore6LocaleEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_16AtomicStringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6rehashEiPS7_(i2, i22, i18) | 0;
  i20 = i3;
  i21 = HEAP32[i7 >> 2] | 0;
 }
 i7 = (HEAP32[i4 >> 2] | 0) + (i21 << 3) | 0;
 i21 = i1;
 HEAP32[i21 >> 2] = i20;
 HEAP32[i21 + 4 >> 2] = i7;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore8Document27ensurePlugInsInjectedScriptERNS_15DOMWrapperWorldE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 160 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 104 | 0;
 i9 = i3 + 152 | 0;
 i10 = i1 + 2284 | 0;
 if ((HEAP8[i10] & 1) != 0) {
  STACKTOP = i3;
  return;
 }
 i11 = i1 + 332 | 0;
 i1 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i11 >> 2] | 0) + 32 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 440 >> 2] & 127](i4, i1);
 i1 = i4 | 0;
 do {
  if ((HEAP32[i1 >> 2] | 0) == 0) {
   __ZN3WTF6StringC1EPKc(i5, __ZN7WebCore17plugInsJavaScriptE | 0);
   i12 = i5 | 0;
   i13 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   i14 = HEAP32[i1 >> 2] | 0;
   HEAP32[i1 >> 2] = i13;
   do {
    if ((i14 | 0) != 0) {
     i13 = i14 | 0;
     i15 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
     if ((i15 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i14);
      break;
     } else {
      HEAP32[i13 >> 2] = i15;
      break;
     }
    }
   } while (0);
   i14 = HEAP32[i12 >> 2] | 0;
   if ((i14 | 0) == 0) {
    break;
   }
   i15 = i14 | 0;
   i13 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    break;
   } else {
    HEAP32[i15 >> 2] = i13;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[(HEAP32[(HEAP32[i11 >> 2] | 0) + 28 >> 2] | 0) + 460 >> 2] | 0;
 i11 = i8 | 0;
 HEAP32[i11 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i8);
 HEAP32[i9 >> 2] = 0;
 HEAP32[i9 + 4 >> 2] = 0;
 __ZN7WebCore16ScriptSourceCodeC2ERKN3WTF6StringERKNS_3URLERKNS1_12TextPositionE(i7, i4, i8, i9);
 __ZN7WebCore16ScriptController15evaluateInWorldERKNS_16ScriptSourceCodeERNS_15DOMWrapperWorldE(i6, i5, i7, i2);
 __ZN10Deprecated11ScriptValueD1Ev(i6);
 i6 = HEAP32[i7 + 28 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i2 = i6 | 0;
   i5 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i2 >> 2] = i5;
    break;
   }
  }
 } while (0);
 __ZN7WebCore24CachedResourceHandleBaseD2Ev(i7 + 24 | 0);
 i6 = HEAP32[i7 + 4 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i5 = i6 + 4 | 0;
   i2 = i5 | 0;
   i9 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i2 >> 2] = i9;
    break;
   }
   i9 = i5 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 127](i9);
  }
 } while (0);
 i6 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i7 = i6 + 4 | 0;
   i9 = i7 | 0;
   i5 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i9 >> 2] = i5;
    break;
   }
   i5 = i7 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 127](i5);
  }
 } while (0);
 i6 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i11 = i6 | 0;
   i5 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i11 >> 2] = i5;
    break;
   }
  }
 } while (0);
 HEAP8[i10] = 1;
 i10 = HEAP32[i1 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i1 = i10 | 0;
 i6 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i10);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i1 >> 2] = i6;
  STACKTOP = i3;
  return;
 }
}
function __ZN3WTF6VectorIN7WebCore7IconURLELj0ENS_15CrashOnOverflowEE7reverseEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i3 = i2 | 0;
 i4 = i1 + 8 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if (i5 >>> 0 <= 1 >>> 0) {
  STACKTOP = i2;
  return;
 }
 i6 = i1 | 0;
 i1 = i3 | 0;
 i7 = i3 + 4 | 0;
 i8 = i3 + 8 | 0;
 i9 = i3 + 12 | 0;
 i10 = i3 + 16 | 0;
 i11 = i3 + 20 | 0;
 i12 = i3 + 24 | 0;
 i13 = i3 + 28 | 0;
 i14 = i3 + 32 | 0;
 i15 = i3 + 36 | 0;
 i16 = i3 + 40 | 0;
 i17 = i3 + 44 | 0;
 i18 = i3 + 48 | 0;
 i19 = i3 + 52 | 0;
 i20 = i3 + 56 | 0;
 i21 = i3 + 60 | 0;
 i22 = 0;
 i23 = i5;
 while (1) {
  if (i23 >>> 0 <= i22 >>> 0) {
   i24 = 4;
   break;
  }
  i5 = HEAP32[i6 >> 2] | 0;
  i25 = i5 + (i22 << 6) | 0;
  i26 = _llvm_uadd_with_overflow_i32(i23 | 0, ~i22 | 0) | 0;
  if (!tempRet0) {
   i24 = 6;
   break;
  }
  i27 = i5 + (i26 << 6) | 0;
  HEAP32[i1 >> 2] = HEAP32[i25 >> 2];
  i26 = i5 + (i22 << 6) + 4 | 0;
  i28 = HEAP32[i26 >> 2] | 0;
  HEAP32[i26 >> 2] = 0;
  HEAP32[i7 >> 2] = i28;
  i28 = i5 + (i22 << 6) + 8 | 0;
  i26 = HEAP32[i28 >> 2] | 0;
  HEAP32[i28 >> 2] = 0;
  HEAP32[i8 >> 2] = i26;
  i26 = i5 + (i22 << 6) + 12 | 0;
  i28 = HEAP32[i26 >> 2] | 0;
  HEAP32[i26 >> 2] = 0;
  HEAP32[i9 >> 2] = i28;
  i28 = HEAP8[i5 + (i22 << 6) + 16 | 0] | 0;
  HEAP8[i10] = HEAP8[i10] & -4 | i28 & 1 | i28 & 2;
  HEAP32[i11 >> 2] = HEAP32[i5 + (i22 << 6) + 20 >> 2];
  HEAP32[i12 >> 2] = HEAP32[i5 + (i22 << 6) + 24 >> 2];
  HEAP32[i13 >> 2] = HEAP32[i5 + (i22 << 6) + 28 >> 2];
  HEAP32[i14 >> 2] = HEAP32[i5 + (i22 << 6) + 32 >> 2];
  HEAP32[i15 >> 2] = HEAP32[i5 + (i22 << 6) + 36 >> 2];
  HEAP32[i16 >> 2] = HEAP32[i5 + (i22 << 6) + 40 >> 2];
  HEAP32[i17 >> 2] = HEAP32[i5 + (i22 << 6) + 44 >> 2];
  HEAP32[i18 >> 2] = HEAP32[i5 + (i22 << 6) + 48 >> 2];
  HEAP32[i19 >> 2] = HEAP32[i5 + (i22 << 6) + 52 >> 2];
  HEAP32[i20 >> 2] = HEAP32[i5 + (i22 << 6) + 56 >> 2];
  HEAP8[i21] = HEAP8[i5 + (i22 << 6) + 60 | 0] & 1;
  __ZN7WebCore7IconURLaSEOS0_(i25, i27) | 0;
  __ZN7WebCore7IconURLaSEOS0_(i27, i3) | 0;
  i27 = HEAP32[i9 >> 2] | 0;
  do {
   if ((i27 | 0) != 0) {
    i25 = i27 | 0;
    i5 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
    if ((i5 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i27);
     break;
    } else {
     HEAP32[i25 >> 2] = i5;
     break;
    }
   }
  } while (0);
  i27 = HEAP32[i8 >> 2] | 0;
  do {
   if ((i27 | 0) != 0) {
    i5 = i27 | 0;
    i25 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
    if ((i25 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i27);
     break;
    } else {
     HEAP32[i5 >> 2] = i25;
     break;
    }
   }
  } while (0);
  i27 = HEAP32[i7 >> 2] | 0;
  do {
   if ((i27 | 0) != 0) {
    i25 = i27 | 0;
    i5 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
    if ((i5 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i27);
     break;
    } else {
     HEAP32[i25 >> 2] = i5;
     break;
    }
   }
  } while (0);
  i27 = i22 + 1 | 0;
  i5 = HEAP32[i4 >> 2] | 0;
  if (i27 >>> 0 < i5 >>> 1 >>> 0) {
   i22 = i27;
   i23 = i5;
  } else {
   i24 = 22;
   break;
  }
 }
 if ((i24 | 0) == 4) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i24 | 0) == 6) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i24 | 0) == 22) {
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore8Document30moveNodeIteratorsToNewDocumentEPNS_4NodeEPS0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 48 | 0;
 i10 = i1 + 728 | 0;
 i11 = i9 | 0;
 _memset(i9 | 0, 0, 20) | 0;
 i12 = HEAP32[i10 >> 2] | 0;
 i13 = HEAP32[i1 + 732 >> 2] | 0;
 i14 = i12 + (i13 << 2) | 0;
 L1 : do {
  if ((HEAP32[i1 + 740 >> 2] | 0) != 0) {
   L3 : do {
    if ((i13 | 0) == 0) {
     i15 = i12;
    } else {
     i16 = i12;
     while (1) {
      i17 = HEAP32[i16 >> 2] | 0;
      if (!((i17 | 0) == (-1 | 0) | (i17 | 0) == 0)) {
       i15 = i16;
       break L3;
      }
      i16 = i16 + 4 | 0;
      if ((i16 | 0) == (i14 | 0)) {
       break L1;
      }
     }
    }
   } while (0);
   if ((i15 | 0) == (i14 | 0)) {
    break;
   } else {
    i18 = i15;
   }
   while (1) {
    __ZN3WTF9HashTableIPN7WebCore12NodeIteratorES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i8, i11, i18, i18);
    i16 = i18 + 4 | 0;
    if ((i16 | 0) == (i14 | 0)) {
     break L1;
    } else {
     i19 = i16;
    }
    while (1) {
     i16 = HEAP32[i19 >> 2] | 0;
     if (!((i16 | 0) == (-1 | 0) | (i16 | 0) == 0)) {
      break;
     }
     i16 = i19 + 4 | 0;
     if ((i16 | 0) == (i14 | 0)) {
      break L1;
     } else {
      i19 = i16;
     }
    }
    if ((i19 | 0) == (i14 | 0)) {
     break;
    } else {
     i18 = i19;
    }
   }
  }
 } while (0);
 i19 = HEAP32[i9 >> 2] | 0;
 i18 = HEAP32[i9 + 4 >> 2] | 0;
 i14 = i19 + (i18 << 2) | 0;
 L15 : do {
  if ((HEAP32[i9 + 12 >> 2] | 0) != 0) {
   L17 : do {
    if ((i18 | 0) == 0) {
     i20 = i19;
    } else {
     i11 = i19;
     while (1) {
      i8 = HEAP32[i11 >> 2] | 0;
      if (!((i8 | 0) == (-1 | 0) | (i8 | 0) == 0)) {
       i20 = i11;
       break L17;
      }
      i11 = i11 + 4 | 0;
      if ((i11 | 0) == (i14 | 0)) {
       break L15;
      }
     }
    }
   } while (0);
   if ((i20 | 0) == (i14 | 0)) {
    break;
   }
   i11 = i3 + 728 | 0;
   i8 = i20;
   while (1) {
    i15 = HEAP32[i8 >> 2] | 0;
    if ((HEAP32[i15 + 8 >> 2] | 0) == (i2 | 0)) {
     HEAP32[i5 >> 2] = i15;
     __ZN3WTF7HashSetIPN7WebCore12NodeIteratorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i10, i5) | 0;
     HEAP32[i6 >> 2] = HEAP32[i8 >> 2];
     __ZN3WTF9HashTableIPN7WebCore12NodeIteratorES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i7, i11, i6, i6);
    }
    i15 = i8 + 4 | 0;
    if ((i15 | 0) == (i14 | 0)) {
     break L15;
    } else {
     i21 = i15;
    }
    while (1) {
     i15 = HEAP32[i21 >> 2] | 0;
     if (!((i15 | 0) == (-1 | 0) | (i15 | 0) == 0)) {
      break;
     }
     i15 = i21 + 4 | 0;
     if ((i15 | 0) == (i14 | 0)) {
      break L15;
     } else {
      i21 = i15;
     }
    }
    if ((i21 | 0) == (i14 | 0)) {
     break;
    } else {
     i8 = i21;
    }
   }
  }
 } while (0);
 if ((i19 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3WTF8fastFreeEPv(i19);
 STACKTOP = i4;
 return;
}
function __ZN3WTF9HashTableINS_6RefPtrIN7WebCore7ElementEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
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
  __ZN3WTF9HashTableINS_6RefPtrIN7WebCore7ElementEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6rehashEiPS4_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i3 = i8;
 i9 = i3 + ~(i3 << 15) | 0;
 i3 = (i9 >>> 10 ^ i9) * 9 & -1;
 i9 = i3 >>> 6 ^ i3;
 i3 = i9 + ~(i9 << 11) | 0;
 i9 = i3 >>> 16 ^ i3;
 i3 = i9 & i6;
 i7 = i10 + (i3 << 2) | 0;
 i11 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i12 = i7;
  } else {
   i13 = (i9 >>> 23) + ~i9 | 0;
   i14 = i13 << 12 ^ i13;
   i13 = i14 >>> 7 ^ i14;
   i14 = i13 << 2 ^ i13;
   i13 = i14 >>> 20 ^ i14 | 1;
   i14 = 0;
   i15 = 0;
   i16 = i3;
   i17 = i7;
   i18 = i11;
   while (1) {
    if ((i18 | 0) == (i8 | 0)) {
     i19 = 8;
     break;
    }
    i20 = (i18 | 0) == -1 ? i17 : i15;
    i21 = (i14 | 0) == 0 ? i13 : i14;
    i22 = i21 + i16 & i6;
    i23 = i10 + (i22 << 2) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    if ((i24 | 0) == 0) {
     i19 = 10;
     break;
    } else {
     i14 = i21;
     i15 = i20;
     i16 = i22;
     i17 = i23;
     i18 = i24;
    }
   }
   if ((i19 | 0) == 8) {
    i18 = i10 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
    i16 = i1;
    HEAP32[i16 >> 2] = i17;
    HEAP32[i16 + 4 >> 2] = i18;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i19 | 0) == 10) {
    if ((i20 | 0) == 0) {
     i12 = i23;
     break;
    }
    HEAP32[i20 >> 2] = 0;
    i18 = i2 + 16 | 0;
    HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) - 1;
    i12 = i20;
    break;
   }
  }
 } while (0);
 i20 = i4 | 0;
 i4 = HEAP32[i20 >> 2] | 0;
 HEAP32[i20 >> 2] = 0;
 i20 = i12 | 0;
 i23 = HEAP32[i20 >> 2] | 0;
 HEAP32[i20 >> 2] = i4;
 do {
  if ((i23 | 0) != 0) {
   i4 = i23 + 8 | 0;
   i20 = i4 | 0;
   i19 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
   HEAP32[i20 >> 2] = i19;
   if ((i19 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
  }
 } while (0);
 i23 = i2 + 12 | 0;
 i4 = (HEAP32[i23 >> 2] | 0) + 1 | 0;
 HEAP32[i23 >> 2] = i4;
 i23 = i2 + 4 | 0;
 i19 = HEAP32[i23 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i4 << 1 | 0) < (i19 | 0)) {
  i25 = i12;
  i26 = i19;
 } else {
  if ((i19 | 0) == 0) {
   i27 = 8;
  } else {
   i20 = i19 << 1;
   i27 = (i4 * 6 & -1 | 0) < (i20 | 0) ? i19 : i20;
  }
  i20 = __ZN3WTF9HashTableINS_6RefPtrIN7WebCore7ElementEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6rehashEiPS4_(i2, i27, i12) | 0;
  i25 = i20;
  i26 = HEAP32[i23 >> 2] | 0;
 }
 i23 = (HEAP32[i5 >> 2] | 0) + (i26 << 2) | 0;
 i26 = i1;
 HEAP32[i26 >> 2] = i25;
 HEAP32[i26 + 4 >> 2] = i23;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore8Document11removeTitleEPNS_7ElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 + 1116 | 0;
 if ((HEAP32[i6 >> 2] | 0) != (i2 | 0)) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i6 >> 2] = 0;
 do {
  if ((i2 | 0) != 0) {
   i7 = i2 + 8 | 0;
   i8 = i7 | 0;
   i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
  }
 } while (0);
 i2 = i1 + 1112 | 0;
 HEAP8[i2] = 0;
 i7 = HEAP32[i1 + 692 >> 2] | 0;
 L9 : do {
  if ((i7 | 0) != 0) {
   i9 = HEAP32[i7 + 36 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   i8 = (HEAP32[__ZN7WebCore9HTMLNames7headTagE >> 2] | 0) + 12 | 0;
   i10 = i9;
   while (1) {
    if ((HEAP32[i10 + 12 >> 2] & 20 | 0) == 20) {
     if ((HEAP32[(HEAP32[i10 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[i8 >> 2] | 0)) {
      break;
     }
    }
    i9 = HEAP32[i10 + 28 >> 2] | 0;
    if ((i9 | 0) == 0) {
     break L9;
    } else {
     i10 = i9;
    }
   }
   if ((i10 | 0) == 0) {
    break;
   }
   i8 = HEAP32[i10 + 36 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   i9 = (HEAP32[__ZN7WebCore9HTMLNames8titleTagE >> 2] | 0) + 12 | 0;
   i11 = i8;
   while (1) {
    if ((HEAP32[i11 + 12 >> 2] & 20 | 0) == 20) {
     if ((HEAP32[(HEAP32[i11 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[i9 >> 2] | 0)) {
      break;
     }
    }
    i8 = HEAP32[i11 + 28 >> 2] | 0;
    if ((i8 | 0) == 0) {
     break L9;
    } else {
     i11 = i8;
    }
   }
   if ((i11 | 0) == 0) {
    break;
   }
   __ZN7WebCore16HTMLTitleElement17textWithDirectionEv(i4, i11);
   i9 = i11;
   i10 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i10 | 0) == (i9 | 0)) {
     i12 = 26;
    } else {
     if ((i10 | 0) != 0) {
      break;
     }
     if ((HEAP8[i2] & 1) != 0) {
      break;
     }
     i8 = i11 + 8 | 0;
     HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
     i8 = HEAP32[i6 >> 2] | 0;
     HEAP32[i6 >> 2] = i9;
     if ((i8 | 0) == 0) {
      i12 = 26;
      break;
     }
     i13 = i8 + 8 | 0;
     i8 = i13 | 0;
     i14 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     HEAP32[i8 >> 2] = i14;
     if ((i14 | 0) >= 1) {
      i12 = 26;
      break;
     }
     if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
      i12 = 26;
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
     i12 = 26;
    }
   } while (0);
   if ((i12 | 0) == 26) {
    __ZN7WebCore8Document11updateTitleERKNS_19StringWithDirectionE(i1, i4);
   }
   i9 = HEAP32[i4 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   i11 = i9 | 0;
   i10 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i11 >> 2] = i10;
    break;
   }
  }
 } while (0);
 if ((HEAP32[i6 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 i6 = i5 | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i5 + 4 >> 2] = 1;
 __ZN7WebCore8Document11updateTitleERKNS_19StringWithDirectionE(i1, i5);
 i5 = HEAP32[i6 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = i5 | 0;
 i1 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i6 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore8Document30documentDidResumeFromPageCacheEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i2 = i1 + 1460 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = (i3 | 0) == 0;
 do {
  if (i4) {
   i5 = 0;
  } else {
   i6 = i3 >>> 0 < 16 >>> 0 ? 16 : i3;
   do {
    if ((i6 | 0) == 0) {
     i7 = HEAP32[i1 + 1448 >> 2] | 0;
     i8 = HEAP32[i1 + 1452 >> 2] | 0;
     i9 = 0;
     i10 = i7;
     i11 = i8;
     i12 = i7 + (i8 << 2) | 0;
     i13 = 7;
    } else {
     if (i6 >>> 0 > 1073741823 >>> 0) {
      _WTFCrash();
     } else {
      i8 = __ZN3WTF10fastMallocEj(__ZN3WTF18fastMallocGoodSizeEj(i6 << 2) | 0) | 0;
      i7 = HEAP32[i1 + 1448 >> 2] | 0;
      i14 = HEAP32[i1 + 1452 >> 2] | 0;
      if ((HEAP32[i2 >> 2] | 0) == 0) {
       i15 = i8;
       break;
      } else {
       i9 = i8;
       i10 = i7;
       i11 = i14;
       i12 = i7 + (i14 << 2) | 0;
       i13 = 7;
       break;
      }
     }
    }
   } while (0);
   L9 : do {
    if ((i13 | 0) == 7) {
     L11 : do {
      if ((i11 | 0) == 0) {
       i16 = i10;
      } else {
       i6 = i10;
       while (1) {
        i14 = HEAP32[i6 >> 2] | 0;
        if (!((i14 | 0) == (-1 | 0) | (i14 | 0) == 0)) {
         i16 = i6;
         break L11;
        }
        i14 = i6 + 4 | 0;
        if ((i14 | 0) == (i12 | 0)) {
         i15 = i9;
         break L9;
        } else {
         i6 = i14;
        }
       }
      }
     } while (0);
     if ((i16 | 0) == (i12 | 0)) {
      i15 = i9;
      break;
     } else {
      i17 = i16;
      i18 = 0;
     }
     while (1) {
      if (i3 >>> 0 <= i18 >>> 0) {
       break;
      }
      HEAP32[i9 + (i18 << 2) >> 2] = HEAP32[i17 >> 2];
      i6 = i17 + 4 | 0;
      if ((i6 | 0) == (i12 | 0)) {
       i15 = i9;
       break L9;
      } else {
       i19 = i6;
      }
      while (1) {
       i6 = HEAP32[i19 >> 2] | 0;
       if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
        break;
       }
       i6 = i19 + 4 | 0;
       if ((i6 | 0) == (i12 | 0)) {
        i15 = i9;
        break L9;
       } else {
        i19 = i6;
       }
      }
      if ((i19 | 0) == (i12 | 0)) {
       i15 = i9;
       break L9;
      } else {
       i17 = i19;
       i18 = i18 + 1 | 0;
      }
     }
     __ZN3WTF15CrashOnOverflow10overflowedEv();
    }
   } while (0);
   i6 = i15 + (i3 << 2) | 0;
   if (i4) {
    i5 = i15;
    break;
   } else {
    i20 = i15;
   }
   while (1) {
    i14 = HEAP32[i20 >> 2] | 0;
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 412 >> 2] & 127](i14);
    i14 = i20 + 4 | 0;
    if ((i14 | 0) == (i6 | 0)) {
     i5 = i15;
     break;
    } else {
     i20 = i14;
    }
   }
  }
 } while (0);
 i20 = HEAP32[i1 + 1584 >> 2] | 0;
 if ((i20 | 0) != 0) {
  __ZN7WebCore10RenderView13setIsInWindowEb(i20, 1);
 }
 i20 = i1 + 332 | 0;
 i15 = HEAP32[i20 >> 2] | 0;
 if ((i15 | 0) == 0) {
  i21 = 0;
 } else {
  i21 = HEAP32[i15 + 32 >> 2] | 0;
 }
 __ZN7WebCore4Page32lockAllOverlayScrollbarsToHiddenEb(i21, 0);
 i21 = HEAP32[(HEAP32[i20 >> 2] | 0) + 84 >> 2] | 0;
 i20 = HEAP32[(HEAP32[i21 >> 2] | 0) + 404 >> 2] | 0;
 i15 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 252 >> 2] & 127](i1) | 0;
 FUNCTION_TABLE_vii[i20 & 127](i21, i15);
 if ((i5 | 0) == 0) {
  return;
 }
 __ZN3WTF8fastFreeEPv(i5);
 return;
}
function __ZN7WebCore8Document20styleResolverChangedENS_23StyleResolverUpdateFlagE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 if (+HEAPF64[i1 + 976 >> 3] != +0) {
  __ZN7WebCore9TimerBase4stopEv(i1 + 968 | 0);
 }
 i3 = i1 + 1584 | 0;
 L4 : do {
  if ((HEAP32[i3 >> 2] | 0) != 0) {
   if ((HEAP8[i1 + 2285 | 0] & 1) != 0) {
    break;
   }
   i4 = i1 + 324 | 0;
   do {
    if ((HEAP8[i4] & 1) == 0) {
     if ((HEAP32[i1 + 804 >> 2] | 0) <= 0) {
      break;
     }
     if ((HEAP8[i1 + 327 | 0] & 1) == 0) {
      break L4;
     }
    }
   } while (0);
   HEAP8[i4] = 1;
   do {
    if ((i2 | 0) == 2) {
     i5 = i1 + 772 | 0;
     i6 = i5;
     i7 = __ZN7WebCore28DocumentStyleSheetCollection23updateActiveStyleSheetsENS0_10UpdateFlagE(i5, 1) | 0;
    } else {
     i5 = i1 + 772 | 0;
     i8 = __ZN7WebCore28DocumentStyleSheetCollection23updateActiveStyleSheetsENS0_10UpdateFlagE(i5, (i2 | 0) == 3 ? 1 : 2) | 0;
     if ((i2 | 0) == 1) {
      HEAP8[i1 + 1080 | 0] = 1;
      __ZN7WebCore8Document19scheduleStyleRecalcEv(i1);
      return;
     } else if ((i2 | 0) != 3) {
      i6 = i5;
      i7 = i8;
      break;
     }
     if (!i8) {
      return;
     }
     HEAP8[i1 + 1080 | 0] = 1;
     __ZN7WebCore8Document19scheduleStyleRecalcEv(i1);
     return;
    }
   } while (0);
   i4 = i1 + 328 | 0;
   do {
    if ((HEAP32[i4 >> 2] | 0) == 1) {
     if ((HEAP32[i6 + 32 >> 2] | 0) > 0) {
      break;
     }
     HEAP32[i4 >> 2] = 2;
     i8 = HEAP32[i3 >> 2] | 0;
     if ((i8 | 0) == 0) {
      break;
     }
     __ZN7WebCore10RenderView30repaintViewAndCompositedLayersEv(i8);
    }
   } while (0);
   if (!i7) {
    return;
   }
   i4 = i1 + 332 | 0;
   i8 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i8 | 0) == 0) {
     i9 = 23;
    } else {
     i5 = HEAP32[i8 + 476 >> 2] | 0;
     if ((i5 | 0) == 0) {
      i9 = 23;
      break;
     }
     __ZN7WebCore19AnimationController20beginAnimationUpdateEv(i5);
     __ZN7WebCore8Document11recalcStyleENS_5Style6ChangeE(i1, 4);
     __ZN7WebCore19AnimationController18endAnimationUpdateEv(i5);
    }
   } while (0);
   if ((i9 | 0) == 23) {
    __ZN7WebCore8Document11recalcStyleENS_5Style6ChangeE(i1, 4);
   }
   i8 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i8 | 0) != 0) {
     i5 = i8 | 0;
     i10 = i8 + 20 | 0;
     i11 = HEAP32[i10 >> 2] | 0;
     do {
      if ((i11 & 1 | 0) == 0) {
       HEAP32[i10 >> 2] = i11 | 1;
       __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i5, 1, 0);
       if ((HEAP32[i10 >> 2] & 32768 | 0) == 0) {
        break;
       }
       __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i5);
      }
     } while (0);
     __ZN7WebCore12RenderObject30setPreferredLogicalWidthsDirtyEbNS_15MarkingBehaviorE(i5, 1, 1);
     i10 = HEAP32[i4 >> 2] | 0;
     if ((i10 | 0) == 0) {
      break;
     }
     i11 = HEAP32[i10 + 452 >> 2] | 0;
     if ((i11 | 0) == 0) {
      break;
     }
     __ZN7WebCore9FrameView16scheduleRelayoutEv(i11);
    }
   } while (0);
   i4 = HEAP32[i1 + 1952 >> 2] | 0;
   if ((i4 | 0) == 0) {
    return;
   }
   __ZN7WebCore17MediaQueryMatcher20styleResolverChangedEv(i4);
   return;
  }
 } while (0);
 i3 = i1 + 320 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 __ZN7WebCore13StyleResolverD1Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore8Document4openEPS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 do {
  if ((i2 | 0) != 0) {
   __ZN7WebCore8Document6setURLERKNS_3URLE(i1, i2 + 356 | 0);
   i5 = HEAP32[i2 + 548 >> 2] | 0;
   if ((i5 | 0) != 0) {
    i6 = i5 | 0;
    HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
   }
   i6 = i1 + 548 | 0;
   i7 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = i5;
   do {
    if ((i7 | 0) != 0) {
     i5 = i7 | 0;
     i6 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
     if ((i6 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i7);
      break;
     } else {
      HEAP32[i5 >> 2] = i6;
      break;
     }
    }
   } while (0);
   i7 = i2 + 552 | 0;
   i6 = i1 + 552 | 0;
   i5 = HEAP8[i6] & -2 | HEAP8[i7] & 1;
   HEAP8[i6] = i5;
   HEAP8[i6] = i5 & -3 | HEAP8[i7] & 2;
   HEAP32[i1 + 556 >> 2] = HEAP32[i2 + 556 >> 2];
   HEAP32[i1 + 560 >> 2] = HEAP32[i2 + 560 >> 2];
   HEAP32[i1 + 564 >> 2] = HEAP32[i2 + 564 >> 2];
   HEAP32[i1 + 568 >> 2] = HEAP32[i2 + 568 >> 2];
   HEAP32[i1 + 572 >> 2] = HEAP32[i2 + 572 >> 2];
   HEAP32[i1 + 576 >> 2] = HEAP32[i2 + 576 >> 2];
   HEAP32[i1 + 580 >> 2] = HEAP32[i2 + 580 >> 2];
   HEAP32[i1 + 584 >> 2] = HEAP32[i2 + 584 >> 2];
   HEAP32[i1 + 588 >> 2] = HEAP32[i2 + 588 >> 2];
   HEAP32[i1 + 592 >> 2] = HEAP32[i2 + 592 >> 2];
   i7 = HEAP32[i2 + 100 >> 2] | 0;
   i5 = i4 | 0;
   HEAP32[i5 >> 2] = i7;
   if ((i7 | 0) != 0) {
    i6 = i7 | 0;
    tempValue = HEAP32[i6 >> 2] | 0, HEAP32[i6 >> 2] = tempValue + 1, tempValue;
   }
   __ZN7WebCore15SecurityContext17setSecurityOriginEN3WTF10PassRefPtrINS_14SecurityOriginEEE(i1 + 88 | 0, i4);
   i6 = HEAP32[i5 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   i5 = i6 | 0;
   if (((tempValue = HEAP32[i5 >> 2] | 0, HEAP32[i5 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN7WebCore14SecurityOriginD2Ev(i6);
   __ZN3WTF8fastFreeEPv(i6);
  }
 } while (0);
 i4 = i1 + 332 | 0;
 i2 = i1 + 344 | 0;
 do {
  if ((HEAP32[i4 >> 2] | 0) != 0) {
   i6 = HEAP32[i2 >> 2] | 0;
   do {
    if ((i6 | 0) != 0) {
     i5 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] & 127](i6) | 0;
     if ((i5 | 0) == 0) {
      break;
     }
     if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
      break;
     }
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 72 >> 2] & 127](i5) | 0) {
      STACKTOP = i3;
      return;
     }
     if ((HEAP8[i5 + 20 | 0] & 1) != 0) {
      break;
     }
     if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 12 >> 2] & 127](i5 | 0) | 0)) {
      break;
     }
     STACKTOP = i3;
     return;
    }
   } while (0);
   i6 = HEAP32[i4 >> 2] | 0;
   if ((HEAP32[i6 + 120 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore11FrameLoader14stopAllLoadersENS_26ClearProvisionalItemPolicyE(i6 + 80 | 0, 0);
  }
 } while (0);
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 28 >> 2] & 127](i1);
 __ZN7WebCore8Document12implicitOpenEv(i1);
 i1 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i2 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] & 127](i1) | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   HEAP8[i2 + 20 | 0] = 1;
  }
 } while (0);
 i1 = HEAP32[i4 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore11FrameLoader15didExplicitOpenEv(i1 + 80 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore8Document17applyXSLTransformEPNS_21ProcessingInstructionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = __ZN3WTF10fastMallocEj(32) | 0;
 i9 = i8;
 i10 = i8;
 HEAP32[i10 >> 2] = 1;
 i11 = i8 + 4 | 0;
 _memset(i11 | 0, 0, 28) | 0;
 i12 = HEAP32[i2 + 64 >> 2] | 0;
 i2 = i12;
 do {
  if ((i12 | 0) == 0) {
   HEAP32[i11 >> 2] = i2;
  } else {
   i13 = i12 + 4 | 0;
   HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
   i13 = i11;
   i14 = HEAP32[i13 >> 2] | 0;
   HEAP32[i13 >> 2] = i2;
   if ((i14 | 0) == 0) {
    break;
   }
   i13 = i14 + 4 | 0;
   i14 = i13 | 0;
   i15 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) != 0) {
    HEAP32[i14 >> 2] = i15;
    break;
   }
   i15 = i13 - 4 | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 127](i15);
  }
 } while (0);
 i2 = i4 | 0;
 HEAP32[i2 >> 2] = 0;
 i11 = i5 | 0;
 HEAP32[i11 >> 2] = 0;
 i12 = i6 | 0;
 HEAP32[i12 >> 2] = 0;
 i15 = i1 | 0;
 do {
  if (__ZN7WebCore13XSLTProcessor17transformToStringERNS_4NodeERN3WTF6StringES5_S5_(i9, i15, i4, i5, i6) | 0) {
   i13 = HEAP32[i1 + 332 >> 2] | 0;
   __ZN7WebCore13XSLTProcessor24createDocumentFromSourceERKN3WTF6StringES4_S4_PNS_4NodeEPNS_5FrameE(i7, i9, i5, i6, i4, i15, i13);
   i14 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i14 | 0) != 0) {
     i16 = i14 + 8 | 0;
     i17 = i16 | 0;
     i18 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
     HEAP32[i17 >> 2] = i18;
     if ((i18 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
    }
   } while (0);
   if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) == 0 | (i13 | 0) == 0) {
    break;
   }
   i14 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(HEAP32[i13 + 32 >> 2] | 0) | 0;
   if ((i14 | 0) == 0) {
    break;
   }
   __ZN7WebCore24InspectorInstrumentation24frameDocumentUpdatedImplEPNS_19InstrumentingAgentsEPNS_5FrameE(i14, i13);
  }
 } while (0);
 i7 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i12 = i7 | 0;
   i15 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i12 >> 2] = i15;
    break;
   }
  }
 } while (0);
 i7 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i11 = i7 | 0;
   i15 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i11 >> 2] = i15;
    break;
   }
  }
 } while (0);
 i7 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i2 = i7 | 0;
   i15 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i2 >> 2] = i15;
    break;
   }
  }
 } while (0);
 if ((i8 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i7 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
 if ((i7 | 0) == 0) {
  __ZN7WebCore13XSLTProcessorD1Ev(i9);
  __ZN3WTF8fastFreeEPv(i8);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i10 >> 2] = i7;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore8Document15getCachedLocaleERKN3WTF12AtomicStringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 40 | 0;
 i9 = i3 + 48 | 0;
 i10 = i5 | 0;
 i11 = i2 | 0;
 i2 = HEAP32[i11 >> 2] | 0;
 HEAP32[i10 >> 2] = i2;
 do {
  if ((i2 | 0) == 0) {
   i12 = 5;
  } else {
   i13 = i2 | 0;
   HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
   i13 = HEAP32[i11 >> 2] | 0;
   if ((i13 | 0) == 0) {
    i12 = 5;
    break;
   }
   if ((HEAP32[i13 + 4 >> 2] | 0) == 0) {
    i12 = 5;
    break;
   }
   if ((HEAP8[(__ZN7WebCore22RuntimeEnabledFeatures14sharedFeaturesEv() | 0) + 15 | 0] & 1) == 0) {
    i12 = 5;
   }
  }
 } while (0);
 do {
  if ((i12 | 0) == 5) {
   __ZN7WebCore15defaultLanguageEv(i6);
   i11 = i6 | 0;
   i2 = HEAP32[i11 >> 2] | 0;
   do {
    if ((i2 | 0) == 0) {
     i13 = i4 | 0;
     HEAP32[i13 >> 2] = 0;
     i14 = i13;
    } else {
     if ((HEAP32[i2 + 16 >> 2] & 16 | 0) == 0) {
      __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i4, i2);
      i14 = i4 | 0;
      break;
     } else {
      i13 = i4 | 0;
      HEAP32[i13 >> 2] = i2;
      i15 = i2 | 0;
      HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 2;
      i14 = i13;
      break;
     }
    }
   } while (0);
   i2 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = HEAP32[i14 >> 2];
   do {
    if ((i2 | 0) != 0) {
     i13 = i2 | 0;
     i15 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
     if ((i15 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i2);
      break;
     } else {
      HEAP32[i13 >> 2] = i15;
      break;
     }
    }
   } while (0);
   i2 = HEAP32[i11 >> 2] | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   i15 = i2 | 0;
   i13 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i15 >> 2] = i13;
    break;
   }
  }
 } while (0);
 HEAP32[i8 >> 2] = 0;
 __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6OwnPtrIN7WebCore6LocaleEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_16AtomicStringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_(i7, i1 + 2180 | 0, i5, i8);
 i8 = HEAP32[i7 >> 2] | 0;
 do {
  if ((HEAP8[i7 + 8 | 0] & 1) != 0) {
   __ZN7WebCore6Locale6createERKN3WTF12AtomicStringE(i9, i5);
   i1 = i8 + 4 | 0;
   i14 = HEAP32[i1 >> 2] | 0;
   i4 = i9 | 0;
   i6 = HEAP32[i4 >> 2] | 0;
   HEAP32[i4 >> 2] = 0;
   HEAP32[i1 >> 2] = i6;
   if ((i14 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 127](i14);
   }
   i14 = HEAP32[i4 >> 2] | 0;
   if ((i14 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 127](i14);
  }
 } while (0);
 i9 = HEAP32[i8 + 4 >> 2] | 0;
 i8 = HEAP32[i10 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i3;
  return i9 | 0;
 }
 i10 = i8 | 0;
 i5 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i8);
  STACKTOP = i3;
  return i9 | 0;
 } else {
  HEAP32[i10 >> 2] = i5;
  STACKTOP = i3;
  return i9 | 0;
 }
 return 0;
}
function __ZN7WebCore8Document25nodeChildrenWillBeRemovedERNS_13ContainerNodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 L1 : do {
  if ((HEAP32[i1 + 760 >> 2] | 0) != 0) {
   i3 = HEAP32[i1 + 748 >> 2] | 0;
   i4 = HEAP32[i1 + 752 >> 2] | 0;
   i5 = i3 + (i4 << 2) | 0;
   L3 : do {
    if ((i4 | 0) == 0) {
     i6 = i3;
    } else {
     i7 = i3;
     while (1) {
      i8 = HEAP32[i7 >> 2] | 0;
      if (!((i8 | 0) == (-1 | 0) | (i8 | 0) == 0)) {
       i6 = i7;
       break L3;
      }
      i7 = i7 + 4 | 0;
      if ((i7 | 0) == (i5 | 0)) {
       break L1;
      }
     }
    }
   } while (0);
   if ((i6 | 0) == (i5 | 0)) {
    break;
   } else {
    i9 = i6;
   }
   while (1) {
    __ZN7WebCore5Range25nodeChildrenWillBeRemovedERNS_13ContainerNodeE(HEAP32[i9 >> 2] | 0, i2);
    i3 = i9 + 4 | 0;
    if ((i3 | 0) == (i5 | 0)) {
     break L1;
    } else {
     i10 = i3;
    }
    while (1) {
     i3 = HEAP32[i10 >> 2] | 0;
     if (!((i3 | 0) == (-1 | 0) | (i3 | 0) == 0)) {
      break;
     }
     i3 = i10 + 4 | 0;
     if ((i3 | 0) == (i5 | 0)) {
      break L1;
     } else {
      i10 = i3;
     }
    }
    if ((i10 | 0) == (i5 | 0)) {
     break;
    } else {
     i9 = i10;
    }
   }
  }
 } while (0);
 i10 = HEAP32[i1 + 728 >> 2] | 0;
 i9 = HEAP32[i1 + 732 >> 2] | 0;
 i6 = i10 + (i9 << 2) | 0;
 L15 : do {
  if ((HEAP32[i1 + 740 >> 2] | 0) != 0) {
   L17 : do {
    if ((i9 | 0) == 0) {
     i11 = i10;
    } else {
     i5 = i10;
     while (1) {
      i3 = HEAP32[i5 >> 2] | 0;
      if (!((i3 | 0) == (-1 | 0) | (i3 | 0) == 0)) {
       i11 = i5;
       break L17;
      }
      i5 = i5 + 4 | 0;
      if ((i5 | 0) == (i6 | 0)) {
       break L15;
      }
     }
    }
   } while (0);
   if ((i11 | 0) == (i6 | 0)) {
    break;
   }
   i5 = i2 + 36 | 0;
   i3 = i11;
   while (1) {
    i4 = HEAP32[i5 >> 2] | 0;
    if ((i4 | 0) != 0) {
     i7 = i4;
     while (1) {
      __ZN7WebCore12NodeIterator17nodeWillBeRemovedEPNS_4NodeE(HEAP32[i3 >> 2] | 0, i7);
      i7 = HEAP32[i7 + 28 >> 2] | 0;
      if ((i7 | 0) == 0) {
       break;
      }
     }
    }
    i7 = i3 + 4 | 0;
    if ((i7 | 0) == (i6 | 0)) {
     break L15;
    } else {
     i12 = i7;
    }
    while (1) {
     i7 = HEAP32[i12 >> 2] | 0;
     if (!((i7 | 0) == (-1 | 0) | (i7 | 0) == 0)) {
      break;
     }
     i7 = i12 + 4 | 0;
     if ((i7 | 0) == (i6 | 0)) {
      break L15;
     } else {
      i12 = i7;
     }
    }
    if ((i12 | 0) == (i6 | 0)) {
     break;
    } else {
     i3 = i12;
    }
   }
  }
 } while (0);
 i12 = HEAP32[i1 + 332 >> 2] | 0;
 if ((i12 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i2 + 36 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i2 = i12 + 472 | 0;
 i6 = i12 + 468 | 0;
 i11 = i12 + 32 | 0;
 i12 = i1;
 while (1) {
  __ZN7WebCore12EventHandler17nodeWillBeRemovedEPNS_4NodeE(HEAP32[i2 >> 2] | 0, i12);
  __ZN7WebCore14FrameSelection17nodeWillBeRemovedEPNS_4NodeE(HEAP32[i6 >> 2] | 0, i12);
  __ZN7WebCore19DragCaretController17nodeWillBeRemovedEPNS_4NodeE(HEAP32[(HEAP32[i11 >> 2] | 0) + 24 >> 2] | 0, i12);
  i12 = HEAP32[i12 + 28 >> 2] | 0;
  if ((i12 | 0) == 0) {
   break;
  }
 }
 return;
}
function __ZN3WTF12copyToVectorINS_7HashSetINS_6RefPtrIN7WebCore7ElementEEENS_7PtrHashIS5_EENS_10HashTraitsIS5_EEEENS_6VectorIS5_Lj0ENS_15CrashOnOverflowEEEEEvRKT_RT0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = i1 + 12 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i2 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if (i6 >>> 0 < i4 >>> 0) {
   if ((HEAP32[i2 + 4 >> 2] | 0) >>> 0 < i4 >>> 0) {
    __ZN3WTF6VectorINS_6RefPtrIN7WebCore7ElementEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i2, i4);
   }
   i7 = HEAP32[i2 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   i8 = HEAP32[i5 >> 2] | 0;
   _memset(i7 + (i8 << 2) | 0, 0, i4 - i8 << 2 | 0) | 0;
  } else {
   i8 = HEAP32[i2 >> 2] | 0;
   i7 = i8 + (i6 << 2) | 0;
   if ((i6 | 0) == (i4 | 0)) {
    break;
   }
   i9 = i8 + (i4 << 2) | 0;
   while (1) {
    i8 = HEAP32[i9 >> 2] | 0;
    do {
     if ((i8 | 0) != 0) {
      i10 = i8 + 8 | 0;
      i11 = i10 | 0;
      i12 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
      HEAP32[i11 >> 2] = i12;
      if ((i12 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
     }
    } while (0);
    i9 = i9 + 4 | 0;
    if ((i9 | 0) == (i7 | 0)) {
     break;
    }
   }
  }
 } while (0);
 HEAP32[i5 >> 2] = i4;
 i6 = HEAP32[i1 >> 2] | 0;
 i7 = HEAP32[i1 + 4 >> 2] | 0;
 i1 = i6 + (i7 << 2) | 0;
 if ((HEAP32[i3 >> 2] | 0) == 0) {
  return;
 }
 L20 : do {
  if ((i7 | 0) == 0) {
   i13 = i6;
  } else {
   i3 = i6;
   while (1) {
    i9 = HEAP32[i3 >> 2] | 0;
    if (!((i9 | 0) == (-1 | 0) | (i9 | 0) == 0)) {
     i13 = i3;
     break L20;
    }
    i3 = i3 + 4 | 0;
    if ((i3 | 0) == (i1 | 0)) {
     break;
    }
   }
   return;
  }
 } while (0);
 if ((i13 | 0) == (i1 | 0)) {
  return;
 }
 i6 = i2 | 0;
 i2 = i13;
 i13 = 0;
 i7 = i4;
 L29 : while (1) {
  if (i7 >>> 0 <= i13 >>> 0) {
   i14 = 20;
   break;
  }
  i4 = HEAP32[i6 >> 2] | 0;
  i3 = HEAP32[i2 >> 2] | 0;
  if ((i3 | 0) != 0) {
   i9 = i3 + 8 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
  }
  i9 = i4 + (i13 << 2) | 0;
  i4 = HEAP32[i9 >> 2] | 0;
  HEAP32[i9 >> 2] = i3;
  do {
   if ((i4 | 0) != 0) {
    i3 = i4 + 8 | 0;
    i9 = i3 | 0;
    i8 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
    HEAP32[i9 >> 2] = i8;
    if ((i8 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
   }
  } while (0);
  i4 = i2 + 4 | 0;
  if ((i4 | 0) == (i1 | 0)) {
   i14 = 34;
   break;
  } else {
   i15 = i4;
  }
  while (1) {
   i4 = HEAP32[i15 >> 2] | 0;
   if (!((i4 | 0) == (-1 | 0) | (i4 | 0) == 0)) {
    break;
   }
   i4 = i15 + 4 | 0;
   if ((i4 | 0) == (i1 | 0)) {
    i14 = 35;
    break L29;
   } else {
    i15 = i4;
   }
  }
  if ((i15 | 0) == (i1 | 0)) {
   i14 = 36;
   break;
  }
  i2 = i15;
  i13 = i13 + 1 | 0;
  i7 = HEAP32[i5 >> 2] | 0;
 }
 if ((i14 | 0) == 34) {
  return;
 } else if ((i14 | 0) == 35) {
  return;
 } else if ((i14 | 0) == 36) {
  return;
 } else if ((i14 | 0) == 20) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
}
function __ZN3WTF9HashTableIPN7WebCore21MediaCanStartListenerES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
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
  __ZN3WTF9HashTableIPN7WebCore21MediaCanStartListenerES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i3 = i8;
 i9 = i3 + ~(i3 << 15) | 0;
 i3 = (i9 >>> 10 ^ i9) * 9 & -1;
 i9 = i3 >>> 6 ^ i3;
 i3 = i9 + ~(i9 << 11) | 0;
 i9 = i3 >>> 16 ^ i3;
 i3 = i9 & i6;
 i7 = i10 + (i3 << 2) | 0;
 i11 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i12 = i7;
   i13 = 11;
  } else {
   i14 = (i9 >>> 23) + ~i9 | 0;
   i15 = i14 << 12 ^ i14;
   i14 = i15 >>> 7 ^ i15;
   i15 = i14 << 2 ^ i14;
   i14 = i15 >>> 20 ^ i15 | 1;
   i15 = 0;
   i16 = 0;
   i17 = i3;
   i18 = i7;
   i19 = i11;
   while (1) {
    if ((i19 | 0) == (i8 | 0)) {
     i13 = 8;
     break;
    }
    i20 = (i19 | 0) == -1 ? i18 : i16;
    i21 = (i15 | 0) == 0 ? i14 : i15;
    i22 = i21 + i17 & i6;
    i23 = i10 + (i22 << 2) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    if ((i24 | 0) == 0) {
     i13 = 10;
     break;
    } else {
     i15 = i21;
     i16 = i20;
     i17 = i22;
     i18 = i23;
     i19 = i24;
    }
   }
   if ((i13 | 0) == 8) {
    i19 = i10 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
    i17 = i1;
    HEAP32[i17 >> 2] = i18;
    HEAP32[i17 + 4 >> 2] = i19;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i13 | 0) == 10) {
    if ((i20 | 0) == 0) {
     i12 = i23;
     i13 = 11;
     break;
    }
    HEAP32[i20 >> 2] = 0;
    i19 = i2 + 16 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) - 1;
    i25 = i20;
    i26 = i19;
    break;
   }
  }
 } while (0);
 if ((i13 | 0) == 11) {
  i25 = i12;
  i26 = i2 + 16 | 0;
 }
 HEAP32[i25 >> 2] = HEAP32[i4 >> 2];
 i4 = i2 + 12 | 0;
 i12 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i12;
 i4 = i2 + 4 | 0;
 i13 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i26 >> 2] | 0) + i12 << 1 | 0) < (i13 | 0)) {
  i27 = i25;
  i28 = i13;
 } else {
  if ((i13 | 0) == 0) {
   i29 = 8;
  } else {
   i26 = i13 << 1;
   i29 = (i12 * 6 & -1 | 0) < (i26 | 0) ? i13 : i26;
  }
  i26 = __ZN3WTF9HashTableIPN7WebCore21MediaCanStartListenerES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i29, i25) | 0;
  i27 = i26;
  i28 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i28 << 2) | 0;
 i28 = i1;
 HEAP32[i28 >> 2] = i27;
 HEAP32[i28 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableIPN7WebCore14HTMLCollectionES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
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
  __ZN3WTF9HashTableIPN7WebCore14HTMLCollectionES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i3 = i8;
 i9 = i3 + ~(i3 << 15) | 0;
 i3 = (i9 >>> 10 ^ i9) * 9 & -1;
 i9 = i3 >>> 6 ^ i3;
 i3 = i9 + ~(i9 << 11) | 0;
 i9 = i3 >>> 16 ^ i3;
 i3 = i9 & i6;
 i7 = i10 + (i3 << 2) | 0;
 i11 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i12 = i7;
   i13 = 11;
  } else {
   i14 = (i9 >>> 23) + ~i9 | 0;
   i15 = i14 << 12 ^ i14;
   i14 = i15 >>> 7 ^ i15;
   i15 = i14 << 2 ^ i14;
   i14 = i15 >>> 20 ^ i15 | 1;
   i15 = 0;
   i16 = 0;
   i17 = i3;
   i18 = i7;
   i19 = i11;
   while (1) {
    if ((i19 | 0) == (i8 | 0)) {
     i13 = 8;
     break;
    }
    i20 = (i19 | 0) == -1 ? i18 : i16;
    i21 = (i15 | 0) == 0 ? i14 : i15;
    i22 = i21 + i17 & i6;
    i23 = i10 + (i22 << 2) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    if ((i24 | 0) == 0) {
     i13 = 10;
     break;
    } else {
     i15 = i21;
     i16 = i20;
     i17 = i22;
     i18 = i23;
     i19 = i24;
    }
   }
   if ((i13 | 0) == 10) {
    if ((i20 | 0) == 0) {
     i12 = i23;
     i13 = 11;
     break;
    }
    HEAP32[i20 >> 2] = 0;
    i19 = i2 + 16 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) - 1;
    i25 = i20;
    i26 = i19;
    break;
   } else if ((i13 | 0) == 8) {
    i19 = i10 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
    i17 = i1;
    HEAP32[i17 >> 2] = i18;
    HEAP32[i17 + 4 >> 2] = i19;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   }
  }
 } while (0);
 if ((i13 | 0) == 11) {
  i25 = i12;
  i26 = i2 + 16 | 0;
 }
 HEAP32[i25 >> 2] = HEAP32[i4 >> 2];
 i4 = i2 + 12 | 0;
 i12 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i12;
 i4 = i2 + 4 | 0;
 i13 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i26 >> 2] | 0) + i12 << 1 | 0) < (i13 | 0)) {
  i27 = i25;
  i28 = i13;
 } else {
  if ((i13 | 0) == 0) {
   i29 = 8;
  } else {
   i26 = i13 << 1;
   i29 = (i12 * 6 & -1 | 0) < (i26 | 0) ? i13 : i26;
  }
  i26 = __ZN3WTF9HashTableIPN7WebCore14HTMLCollectionES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i29, i25) | 0;
  i27 = i26;
  i28 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i28 << 2) | 0;
 i28 = i1;
 HEAP32[i28 >> 2] = i27;
 HEAP32[i28 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableIPN7WebCore12NodeIteratorES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
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
  __ZN3WTF9HashTableIPN7WebCore12NodeIteratorES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i3 = i8;
 i9 = i3 + ~(i3 << 15) | 0;
 i3 = (i9 >>> 10 ^ i9) * 9 & -1;
 i9 = i3 >>> 6 ^ i3;
 i3 = i9 + ~(i9 << 11) | 0;
 i9 = i3 >>> 16 ^ i3;
 i3 = i9 & i6;
 i7 = i10 + (i3 << 2) | 0;
 i11 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i12 = i7;
   i13 = 11;
  } else {
   i14 = (i9 >>> 23) + ~i9 | 0;
   i15 = i14 << 12 ^ i14;
   i14 = i15 >>> 7 ^ i15;
   i15 = i14 << 2 ^ i14;
   i14 = i15 >>> 20 ^ i15 | 1;
   i15 = 0;
   i16 = 0;
   i17 = i3;
   i18 = i7;
   i19 = i11;
   while (1) {
    if ((i19 | 0) == (i8 | 0)) {
     i13 = 8;
     break;
    }
    i20 = (i19 | 0) == -1 ? i18 : i16;
    i21 = (i15 | 0) == 0 ? i14 : i15;
    i22 = i21 + i17 & i6;
    i23 = i10 + (i22 << 2) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    if ((i24 | 0) == 0) {
     i13 = 10;
     break;
    } else {
     i15 = i21;
     i16 = i20;
     i17 = i22;
     i18 = i23;
     i19 = i24;
    }
   }
   if ((i13 | 0) == 10) {
    if ((i20 | 0) == 0) {
     i12 = i23;
     i13 = 11;
     break;
    }
    HEAP32[i20 >> 2] = 0;
    i19 = i2 + 16 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) - 1;
    i25 = i20;
    i26 = i19;
    break;
   } else if ((i13 | 0) == 8) {
    i19 = i10 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
    i17 = i1;
    HEAP32[i17 >> 2] = i18;
    HEAP32[i17 + 4 >> 2] = i19;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   }
  }
 } while (0);
 if ((i13 | 0) == 11) {
  i25 = i12;
  i26 = i2 + 16 | 0;
 }
 HEAP32[i25 >> 2] = HEAP32[i4 >> 2];
 i4 = i2 + 12 | 0;
 i12 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i12;
 i4 = i2 + 4 | 0;
 i13 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i26 >> 2] | 0) + i12 << 1 | 0) < (i13 | 0)) {
  i27 = i25;
  i28 = i13;
 } else {
  if ((i13 | 0) == 0) {
   i29 = 8;
  } else {
   i26 = i13 << 1;
   i29 = (i12 * 6 & -1 | 0) < (i26 | 0) ? i13 : i26;
  }
  i26 = __ZN3WTF9HashTableIPN7WebCore12NodeIteratorES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i29, i25) | 0;
  i27 = i26;
  i28 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i28 << 2) | 0;
 i28 = i1;
 HEAP32[i28 >> 2] = i27;
 HEAP32[i28 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableIPN7WebCore12LiveNodeListES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
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
  __ZN3WTF9HashTableIPN7WebCore12LiveNodeListES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i3 = i8;
 i9 = i3 + ~(i3 << 15) | 0;
 i3 = (i9 >>> 10 ^ i9) * 9 & -1;
 i9 = i3 >>> 6 ^ i3;
 i3 = i9 + ~(i9 << 11) | 0;
 i9 = i3 >>> 16 ^ i3;
 i3 = i9 & i6;
 i7 = i10 + (i3 << 2) | 0;
 i11 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i12 = i7;
   i13 = 11;
  } else {
   i14 = (i9 >>> 23) + ~i9 | 0;
   i15 = i14 << 12 ^ i14;
   i14 = i15 >>> 7 ^ i15;
   i15 = i14 << 2 ^ i14;
   i14 = i15 >>> 20 ^ i15 | 1;
   i15 = 0;
   i16 = 0;
   i17 = i3;
   i18 = i7;
   i19 = i11;
   while (1) {
    if ((i19 | 0) == (i8 | 0)) {
     i13 = 8;
     break;
    }
    i20 = (i19 | 0) == -1 ? i18 : i16;
    i21 = (i15 | 0) == 0 ? i14 : i15;
    i22 = i21 + i17 & i6;
    i23 = i10 + (i22 << 2) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    if ((i24 | 0) == 0) {
     i13 = 10;
     break;
    } else {
     i15 = i21;
     i16 = i20;
     i17 = i22;
     i18 = i23;
     i19 = i24;
    }
   }
   if ((i13 | 0) == 8) {
    i19 = i10 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
    i17 = i1;
    HEAP32[i17 >> 2] = i18;
    HEAP32[i17 + 4 >> 2] = i19;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i13 | 0) == 10) {
    if ((i20 | 0) == 0) {
     i12 = i23;
     i13 = 11;
     break;
    }
    HEAP32[i20 >> 2] = 0;
    i19 = i2 + 16 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) - 1;
    i25 = i20;
    i26 = i19;
    break;
   }
  }
 } while (0);
 if ((i13 | 0) == 11) {
  i25 = i12;
  i26 = i2 + 16 | 0;
 }
 HEAP32[i25 >> 2] = HEAP32[i4 >> 2];
 i4 = i2 + 12 | 0;
 i12 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i12;
 i4 = i2 + 4 | 0;
 i13 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i26 >> 2] | 0) + i12 << 1 | 0) < (i13 | 0)) {
  i27 = i25;
  i28 = i13;
 } else {
  if ((i13 | 0) == 0) {
   i29 = 8;
  } else {
   i26 = i13 << 1;
   i29 = (i12 * 6 & -1 | 0) < (i26 | 0) ? i13 : i26;
  }
  i26 = __ZN3WTF9HashTableIPN7WebCore12LiveNodeListES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i29, i25) | 0;
  i27 = i26;
  i28 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i28 << 2) | 0;
 i28 = i1;
 HEAP32[i28 >> 2] = i27;
 HEAP32[i28 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableIPN7WebCore7ElementES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
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
  __ZN3WTF9HashTableIPN7WebCore7ElementES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i3 = i8;
 i9 = i3 + ~(i3 << 15) | 0;
 i3 = (i9 >>> 10 ^ i9) * 9 & -1;
 i9 = i3 >>> 6 ^ i3;
 i3 = i9 + ~(i9 << 11) | 0;
 i9 = i3 >>> 16 ^ i3;
 i3 = i9 & i6;
 i7 = i10 + (i3 << 2) | 0;
 i11 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i12 = i7;
   i13 = 11;
  } else {
   i14 = (i9 >>> 23) + ~i9 | 0;
   i15 = i14 << 12 ^ i14;
   i14 = i15 >>> 7 ^ i15;
   i15 = i14 << 2 ^ i14;
   i14 = i15 >>> 20 ^ i15 | 1;
   i15 = 0;
   i16 = 0;
   i17 = i3;
   i18 = i7;
   i19 = i11;
   while (1) {
    if ((i19 | 0) == (i8 | 0)) {
     i13 = 8;
     break;
    }
    i20 = (i19 | 0) == -1 ? i18 : i16;
    i21 = (i15 | 0) == 0 ? i14 : i15;
    i22 = i21 + i17 & i6;
    i23 = i10 + (i22 << 2) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    if ((i24 | 0) == 0) {
     i13 = 10;
     break;
    } else {
     i15 = i21;
     i16 = i20;
     i17 = i22;
     i18 = i23;
     i19 = i24;
    }
   }
   if ((i13 | 0) == 8) {
    i19 = i10 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
    i17 = i1;
    HEAP32[i17 >> 2] = i18;
    HEAP32[i17 + 4 >> 2] = i19;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i13 | 0) == 10) {
    if ((i20 | 0) == 0) {
     i12 = i23;
     i13 = 11;
     break;
    }
    HEAP32[i20 >> 2] = 0;
    i19 = i2 + 16 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) - 1;
    i25 = i20;
    i26 = i19;
    break;
   }
  }
 } while (0);
 if ((i13 | 0) == 11) {
  i25 = i12;
  i26 = i2 + 16 | 0;
 }
 HEAP32[i25 >> 2] = HEAP32[i4 >> 2];
 i4 = i2 + 12 | 0;
 i12 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i12;
 i4 = i2 + 4 | 0;
 i13 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i26 >> 2] | 0) + i12 << 1 | 0) < (i13 | 0)) {
  i27 = i25;
  i28 = i13;
 } else {
  if ((i13 | 0) == 0) {
   i29 = 8;
  } else {
   i26 = i13 << 1;
   i29 = (i12 * 6 & -1 | 0) < (i26 | 0) ? i13 : i26;
  }
  i26 = __ZN3WTF9HashTableIPN7WebCore7ElementES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i29, i25) | 0;
  i27 = i26;
  i28 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i28 << 2) | 0;
 i28 = i1;
 HEAP32[i28 >> 2] = i27;
 HEAP32[i28 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableIPN7WebCore5RangeES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
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
  __ZN3WTF9HashTableIPN7WebCore5RangeES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i3 = i8;
 i9 = i3 + ~(i3 << 15) | 0;
 i3 = (i9 >>> 10 ^ i9) * 9 & -1;
 i9 = i3 >>> 6 ^ i3;
 i3 = i9 + ~(i9 << 11) | 0;
 i9 = i3 >>> 16 ^ i3;
 i3 = i9 & i6;
 i7 = i10 + (i3 << 2) | 0;
 i11 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i12 = i7;
   i13 = 11;
  } else {
   i14 = (i9 >>> 23) + ~i9 | 0;
   i15 = i14 << 12 ^ i14;
   i14 = i15 >>> 7 ^ i15;
   i15 = i14 << 2 ^ i14;
   i14 = i15 >>> 20 ^ i15 | 1;
   i15 = 0;
   i16 = 0;
   i17 = i3;
   i18 = i7;
   i19 = i11;
   while (1) {
    if ((i19 | 0) == (i8 | 0)) {
     i13 = 8;
     break;
    }
    i20 = (i19 | 0) == -1 ? i18 : i16;
    i21 = (i15 | 0) == 0 ? i14 : i15;
    i22 = i21 + i17 & i6;
    i23 = i10 + (i22 << 2) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    if ((i24 | 0) == 0) {
     i13 = 10;
     break;
    } else {
     i15 = i21;
     i16 = i20;
     i17 = i22;
     i18 = i23;
     i19 = i24;
    }
   }
   if ((i13 | 0) == 8) {
    i19 = i10 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
    i17 = i1;
    HEAP32[i17 >> 2] = i18;
    HEAP32[i17 + 4 >> 2] = i19;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i13 | 0) == 10) {
    if ((i20 | 0) == 0) {
     i12 = i23;
     i13 = 11;
     break;
    }
    HEAP32[i20 >> 2] = 0;
    i19 = i2 + 16 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) - 1;
    i25 = i20;
    i26 = i19;
    break;
   }
  }
 } while (0);
 if ((i13 | 0) == 11) {
  i25 = i12;
  i26 = i2 + 16 | 0;
 }
 HEAP32[i25 >> 2] = HEAP32[i4 >> 2];
 i4 = i2 + 12 | 0;
 i12 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i12;
 i4 = i2 + 4 | 0;
 i13 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i26 >> 2] | 0) + i12 << 1 | 0) < (i13 | 0)) {
  i27 = i25;
  i28 = i13;
 } else {
  if ((i13 | 0) == 0) {
   i29 = 8;
  } else {
   i26 = i13 << 1;
   i29 = (i12 * 6 & -1 | 0) < (i26 | 0) ? i13 : i26;
  }
  i26 = __ZN3WTF9HashTableIPN7WebCore5RangeES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i29, i25) | 0;
  i27 = i26;
  i28 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i28 << 2) | 0;
 i28 = i1;
 HEAP32[i28 >> 2] = i27;
 HEAP32[i28 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore8Document20enqueuePopstateEventEN3WTF10PassRefPtrINS_21SerializedScriptValueEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i7 | 0;
 i10 = i2 | 0;
 i2 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i9 >> 2] = i2;
 i2 = i1 + 336 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i1 | 0) == 0) {
   i10 = i8 | 0;
   HEAP32[i10 >> 2] = 0;
   i11 = i10;
  } else {
   i10 = __ZNK7WebCore9DOMWindow7historyEv(i1) | 0;
   i12 = i8 | 0;
   HEAP32[i12 >> 2] = i10;
   if ((i10 | 0) == 0) {
    i11 = i12;
    break;
   }
   i13 = i10 + 16 | 0;
   HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
   i11 = i12;
  }
 } while (0);
 __ZN7WebCore13PopStateEvent6createEN3WTF10PassRefPtrINS_21SerializedScriptValueEEENS2_INS_7HistoryEEE(i6, i7, i8);
 i8 = i6 | 0;
 i6 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 i7 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i7 | 0) == 0) {
   if ((i6 | 0) == 0) {
    break;
   }
   i2 = i6 + 8 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i1 | 0) == 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 127](i6);
    break;
   } else {
    HEAP32[i2 >> 2] = i1;
    break;
   }
  } else {
   i1 = i4 | 0;
   HEAP32[i1 >> 2] = i6;
   i2 = i5 | 0;
   HEAP32[i2 >> 2] = 0;
   __ZN7WebCore9DOMWindow13dispatchEventEN3WTF10PassRefPtrINS_5EventEEENS2_INS_11EventTargetEEE(i7, i4, i5) | 0;
   i12 = HEAP32[i2 >> 2] | 0;
   if ((i12 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 60 >> 2] & 127](i12);
   }
   i12 = HEAP32[i1 >> 2] | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   i1 = i12 + 8 | 0;
   i12 = i1 | 0;
   i2 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i12 >> 2] = i2;
    break;
   }
   i2 = i1 - 8 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 127](i2);
  }
 } while (0);
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 8 | 0;
   i4 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 127](i5);
    break;
   } else {
    HEAP32[i8 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i11 = i5 + 16 | 0;
   i4 = i11 | 0;
   i8 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i4 >> 2] = i8;
    break;
   }
   i8 = i11 - 16 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 24 >> 2] & 127](i8);
  }
 } while (0);
 i5 = HEAP32[i9 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i9 = i5 | 0;
 if (((tempValue = HEAP32[i9 >> 2] | 0, HEAP32[i9 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore21SerializedScriptValueD1Ev(i5);
 __ZN3WTF8fastFreeEPv(i5);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore8Document17destroyRenderTreeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = i1 + 2285 | 0;
 i3 = HEAP8[i2] & 1;
 HEAP8[i2] = 1;
 i4 = i1 + 332 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = 5;
 } else {
  i7 = i1;
  i8 = i5;
  while (1) {
   i5 = HEAP32[i8 + 448 >> 2] | 0;
   if ((i5 | 0) == 0) {
    i9 = i7;
    break;
   }
   i10 = HEAP32[(HEAP32[i5 + 20 >> 2] | 0) + 8 >> 2] | 0;
   i5 = HEAP32[i10 + 332 >> 2] | 0;
   if ((i5 | 0) == 0) {
    i9 = i10;
    break;
   } else {
    i7 = i10;
    i8 = i5;
   }
  }
  if ((i9 | 0) == (i1 | 0)) {
   i6 = 5;
  }
 }
 do {
  if ((i6 | 0) == 5) {
   i9 = i1 + 1120 | 0;
   i8 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = 0;
   if ((i8 | 0) == 0) {
    break;
   }
   __ZN7WebCore13AXObjectCacheD2Ev(i8);
   __ZN3WTF8fastFreeEPv(i8);
  }
 } while (0);
 i6 = i1 + 1584 | 0;
 i8 = HEAP32[i6 >> 2] | 0;
 if ((i8 | 0) != 0) {
  __ZN7WebCore10RenderView13setIsInWindowEb(i8, 0);
 }
 i8 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i4 = HEAP32[i8 + 452 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   __ZN7WebCore9FrameView22detachCustomScrollbarsEv(i4);
  }
 } while (0);
 i8 = i1 + 1704 | 0;
 i4 = HEAP32[i8 >> 2] | 0;
 if ((i4 | 0) != 0) {
  __ZN7WebCore12RenderObject7destroyEv(i4 | 0);
  HEAP32[i8 >> 2] = 0;
 }
 i8 = i1 + 684 | 0;
 i4 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 do {
  if ((i4 | 0) != 0) {
   i8 = i4 + 8 | 0;
   i9 = i8 | 0;
   i7 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   HEAP32[i9 >> 2] = i7;
   if ((i7 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 i4 = i1 + 680 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 do {
  if ((i8 | 0) != 0) {
   i4 = i8 + 8 | 0;
   i7 = i4 | 0;
   i9 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   HEAP32[i7 >> 2] = i9;
   if ((i9 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
  }
 } while (0);
 i8 = i1 + 688 | 0;
 i4 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 do {
  if ((i4 | 0) != 0) {
   i8 = i4 + 8 | 0;
   i9 = i8 | 0;
   i7 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   HEAP32[i9 >> 2] = i7;
   if ((i7 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 i4 = HEAP32[i1 + 692 >> 2] | 0;
 if ((i4 | 0) != 0) {
  __ZN7WebCore5Style16detachRenderTreeERNS_7ElementE(i4);
 }
 i4 = i1 + 12 | 0;
 HEAP32[i4 >> 2] = HEAP32[i4 >> 2] & -129;
 __ZN7WebCore9TimerBase4stopEv(i1 + 1024 | 0);
 HEAP8[i1 + 1080 | 0] = 0;
 i8 = HEAP32[i6 >> 2] | 0;
 if ((i8 | 0) != 0) {
  __ZN7WebCore12RenderObject7destroyEv(i8 | 0);
 }
 HEAP32[i6 >> 2] = 0;
 if ((HEAP32[i4 >> 2] & 2048 | 0) == 0) {
  HEAP32[i1 + 32 >> 2] = 0;
  HEAP8[i2] = i3;
  return;
 } else {
  HEAP32[HEAP32[i1 + 32 >> 2] >> 2] = 0;
  HEAP8[i2] = i3;
  return;
 }
}
function __ZN7WebCore8Document9adoptNodeEN3WTF10PassRefPtrINS_4NodeEEERi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = i3 | 0;
 i3 = HEAP32[i7 >> 2] | 0;
 if ((i3 | 0) == 0) {
  HEAP32[i4 >> 2] = 9;
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i5;
  return;
 }
 if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 76 >> 2] & 127](i3) | 0) == 5) {
  HEAP32[i4 >> 2] = 7;
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore16ScopedEventQueue21incrementScopingLevelEv(__ZN7WebCore16ScopedEventQueue8instanceEv() | 0);
 i3 = HEAP32[i7 >> 2] | 0;
 L9 : do {
  switch (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 76 >> 2] & 127](i3) | 0) {
  case 6:
  case 12:
  case 9:
  case 10:
  case 13:
   {
    HEAP32[i4 >> 2] = 9;
    HEAP32[i1 >> 2] = 0;
    break;
   }
  case 2:
   {
    i8 = HEAP32[i7 >> 2] | 0;
    i9 = HEAP32[i8 + 44 >> 2] | 0;
    if ((i9 | 0) == 0) {
     i10 = 22;
     break L9;
    }
    __ZN7WebCore7Element19removeAttributeNodeEPNS_4AttrERi(i6, i9, i8, i4);
    i8 = HEAP32[i6 >> 2] | 0;
    if ((i8 | 0) == 0) {
     i10 = 22;
     break L9;
    }
    i9 = i8 + 8 | 0;
    i8 = i9 | 0;
    i11 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
    HEAP32[i8 >> 2] = i11;
    if ((i11 | 0) >= 1) {
     i10 = 22;
     break L9;
    }
    if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
     i10 = 22;
     break L9;
    }
    __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
    i10 = 22;
    break;
   }
  default:
   {
    i9 = HEAP32[i7 >> 2] | 0;
    do {
     if ((HEAP32[i9 + 12 >> 2] & 4096 | 0) != 0) {
      if ((HEAP32[(HEAP32[i9 + 20 >> 2] | 0) + 4 >> 2] | 0) != (i9 | 0)) {
       break;
      }
      HEAP32[i4 >> 2] = 3;
      HEAP32[i1 >> 2] = 0;
      break L9;
     }
    } while (0);
    do {
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 120 >> 2] & 127](i9) | 0) {
      i11 = HEAP32[i2 + 332 >> 2] | 0;
      if ((i11 | 0) == 0) {
       break;
      }
      if (!(__ZNK7WebCore9FrameTree14isDescendantOfEPKNS_5FrameE(i11 + 40 | 0, HEAP32[(HEAP32[i7 >> 2] | 0) + 52 >> 2] | 0) | 0)) {
       break;
      }
      HEAP32[i4 >> 2] = 3;
      HEAP32[i1 >> 2] = 0;
      break L9;
     }
    } while (0);
    i9 = HEAP32[i7 >> 2] | 0;
    i11 = HEAP32[i9 + 16 >> 2] | 0;
    if ((i11 | 0) == 0) {
     i10 = 22;
     break L9;
    }
    __ZN7WebCore13ContainerNode11removeChildEPNS_4NodeERi(i11, i9, i4) | 0;
    if ((HEAP32[i4 >> 2] | 0) == 0) {
     i10 = 22;
     break L9;
    }
    HEAP32[i1 >> 2] = 0;
   }
  }
 } while (0);
 if ((i10 | 0) == 22) {
  __ZN7WebCore9TreeScope13adoptIfNeededEPNS_4NodeE(i2 + 44 | 0, HEAP32[i7 >> 2] | 0);
  i2 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = 0;
  HEAP32[i1 >> 2] = i2;
 }
 __ZN7WebCore16ScopedEventQueue21decrementScopingLevelEv(__ZN7WebCore16ScopedEventQueue8instanceEv() | 0);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore15SegmentedStringC2ERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = i1 | 0;
 HEAP16[i3 >> 1] = 0;
 HEAP16[i1 + 2 >> 1] = 0;
 i4 = i1 + 4 | 0;
 i5 = i1 + 8 | 0;
 i6 = i2 | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i7 = 0;
 } else {
  i7 = HEAP32[i2 + 4 >> 2] | 0;
 }
 HEAP32[i5 >> 2] = i7;
 i2 = i1 + 12 | 0;
 HEAP8[i2] = 1;
 i8 = i1 + 16 | 0;
 i9 = HEAP32[i6 >> 2] | 0;
 HEAP32[i8 >> 2] = i9;
 if ((i9 | 0) == 0) {
  i10 = i7;
 } else {
  i7 = i9 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
  i10 = HEAP32[i5 >> 2] | 0;
 }
 i5 = (i10 | 0) == 0;
 do {
  if (i5) {
   HEAP8[i1 + 13 | 0] = 0;
   i11 = 0;
  } else {
   i7 = HEAP32[i8 >> 2] | 0;
   i9 = i1 + 13 | 0;
   if ((HEAP32[i7 + 16 >> 2] & 32 | 0) == 0) {
    HEAP8[i9] = 0;
    if ((i7 | 0) == 0) {
     i12 = 0;
    } else {
     i12 = HEAP32[i7 + 8 >> 2] | 0;
    }
    HEAP32[i4 >> 2] = i12;
    i11 = 0;
    break;
   } else {
    HEAP8[i9] = 1;
    if ((i7 | 0) == 0) {
     i13 = 0;
    } else {
     i13 = HEAP32[i7 + 8 >> 2] | 0;
    }
    HEAP32[i4 >> 2] = i13;
    i11 = 1;
    break;
   }
  }
 } while (0);
 i13 = i1 + 20 | 0;
 HEAP16[i13 >> 1] = 0;
 _memset(i1 + 24 | 0, 0, 33) | 0;
 i12 = HEAP32[i6 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i14 = 1;
 } else {
  i14 = (HEAP32[i12 + 4 >> 2] | 0) == 0 | 0;
 }
 HEAP8[i1 + 57 | 0] = i14;
 i14 = i1 + 58 | 0;
 HEAP8[i14] = 0;
 do {
  if (i5) {
   i12 = i1 + 60 | 0;
   HEAP32[i12 >> 2] = F_BASE_vi + 2;
   HEAP32[i12 + 4 >> 2] = 0;
   HEAP8[i14] = 0;
   i12 = i1 + 68 | 0;
   HEAP32[i12 >> 2] = F_BASE_vi + 2;
   HEAP32[i12 + 4 >> 2] = 0;
  } else {
   i12 = i11 << 24 >> 24 == 0;
   do {
    if (i12) {
     i6 = HEAP32[i4 >> 2] | 0;
     if ((i6 | 0) == 0) {
      i15 = 0;
      break;
     }
     i15 = HEAP16[i6 >> 1] | 0;
    } else {
     i15 = HEAPU8[HEAP32[i4 >> 2] | 0] | 0;
    }
   } while (0);
   HEAP16[i13 >> 1] = i15;
   if ((i10 | 0) <= 1) {
    break;
   }
   if ((HEAP16[i3 >> 1] | 0) != 0) {
    break;
   }
   i6 = i1 + 60 | 0;
   if (i12) {
    HEAP32[i6 >> 2] = F_BASE_vi + 52;
    HEAP32[i6 + 4 >> 2] = 0;
    HEAP8[i14] = 0;
    i8 = i1 + 68 | 0;
    if ((HEAP8[i2] & 1) == 0) {
     HEAP32[i8 >> 2] = F_BASE_vi + 52;
     HEAP32[i8 + 4 >> 2] = 0;
     return;
    } else {
     HEAP32[i8 >> 2] = F_BASE_vi + 38;
     HEAP32[i8 + 4 >> 2] = 0;
     return;
    }
   } else {
    HEAP32[i6 >> 2] = F_BASE_vi + 68;
    HEAP32[i6 + 4 >> 2] = 0;
    HEAP8[i14] = 2;
    i6 = i1 + 68 | 0;
    if ((HEAP8[i2] & 1) == 0) {
     HEAP32[i6 >> 2] = F_BASE_vi + 68;
     HEAP32[i6 + 4 >> 2] = 0;
     return;
    } else {
     HEAP32[i6 >> 2] = F_BASE_vi + 20;
     HEAP32[i6 + 4 >> 2] = 0;
     HEAP8[i14] = 3;
     return;
    }
   }
  }
 } while (0);
 __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i1);
 return;
}
function __ZN7WebCore8Document15canReplaceChildEPNS_4NodeES2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 if ((i3 | 0) == 0) {
  i4 = 1;
  return i4 | 0;
 }
 i5 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 76 >> 2] & 127](i3) | 0;
 i6 = i2;
 if ((i5 | 0) == (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 76 >> 2] & 127](i2) | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 i5 = HEAP32[i1 + 36 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i7 = 0;
  i8 = 0;
 } else {
  i1 = 0;
  i9 = 0;
  i10 = i5;
  while (1) {
   do {
    if ((i10 | 0) == (i3 | 0)) {
     i11 = i9;
     i12 = i1;
    } else {
     i5 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 76 >> 2] & 127](i10) | 0;
     if ((i5 | 0) == 10) {
      i11 = i9;
      i12 = i1 + 1 | 0;
      break;
     } else if ((i5 | 0) == 1) {
      i11 = i9 + 1 | 0;
      i12 = i1;
      break;
     } else {
      i11 = i9;
      i12 = i1;
      break;
     }
    }
   } while (0);
   i5 = HEAP32[i10 + 28 >> 2] | 0;
   if ((i5 | 0) == 0) {
    i7 = i12;
    i8 = i11;
    break;
   } else {
    i1 = i12;
    i9 = i11;
    i10 = i5;
   }
  }
 }
 i10 = HEAP32[i2 + 12 >> 2] | 0;
 L17 : do {
  if ((i10 & 4096 | 0) == 0) {
   switch (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 76 >> 2] & 127](i2) | 0) {
   case 10:
    {
     i13 = i8;
     i14 = i7 + 1 | 0;
     break L17;
     break;
    }
   case 1:
    {
     i13 = i8 + 1 | 0;
     i14 = i7;
     break L17;
     break;
    }
   case 2:
   case 4:
   case 11:
   case 9:
   case 6:
   case 5:
   case 12:
   case 3:
   case 13:
    {
     i4 = 0;
     return i4 | 0;
    }
   case 8:
   case 7:
    {
     i4 = 1;
     return i4 | 0;
    }
   default:
    {
     i13 = i8;
     i14 = i7;
     break L17;
    }
   }
  } else {
   if ((i10 & 2 | 0) == 0) {
    i13 = i8;
    i14 = i7;
    break;
   }
   i11 = HEAP32[i2 + 36 >> 2] | 0;
   if ((i11 | 0) == 0) {
    i13 = i8;
    i14 = i7;
    break;
   } else {
    i15 = i7;
    i16 = i8;
    i17 = i11;
   }
   L20 : while (1) {
    switch (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i17 >> 2] | 0) + 76 >> 2] & 127](i17) | 0) {
    case 1:
     {
      i18 = i16 + 1 | 0;
      i19 = i15;
      break;
     }
    case 2:
    case 4:
    case 11:
    case 9:
    case 6:
    case 5:
    case 12:
    case 3:
    case 13:
     {
      i4 = 0;
      break L20;
      break;
     }
    case 10:
     {
      i18 = i16;
      i19 = i15 + 1 | 0;
      break;
     }
    default:
     {
      i18 = i16;
      i19 = i15;
     }
    }
    i11 = HEAP32[i17 + 28 >> 2] | 0;
    if ((i11 | 0) == 0) {
     i13 = i18;
     i14 = i19;
     break L17;
    } else {
     i15 = i19;
     i16 = i18;
     i17 = i11;
    }
   }
   return i4 | 0;
  }
 } while (0);
 return (i14 | 0) < 2 & (i13 | 0) < 2 | 0;
}
function __ZNK7WebCore8Document12lastModifiedEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i4 = i3 | 0;
 i5 = i3 + 40 | 0;
 i6 = i3 + 48 | 0;
 _memset(i4 | 0, 0, 36) | 0;
 i7 = HEAP32[i2 + 332 >> 2] | 0;
 do {
  if ((i7 | 0) == 0) {
   i8 = 18;
  } else {
   i9 = i5 | 0;
   HEAP32[i9 >> 2] = 0;
   i10 = HEAP32[i7 + 128 >> 2] | 0;
   if ((i10 | 0) == 0) {
    i8 = 18;
    break;
   }
   i11 = (HEAP32[i7 + 456 >> 2] | 0) == (i2 | 0) ? i10 : 0;
   do {
    if ((i11 | 0) != 0) {
     __ZNK7WebCore20ResourceResponseBase15httpHeaderFieldEPKc(i6, i11 + 784 | 0, H_BASE + 616 | 0);
     i10 = i6 | 0;
     i12 = HEAP32[i10 >> 2] | 0;
     HEAP32[i10 >> 2] = 0;
     i13 = HEAP32[i9 >> 2] | 0;
     HEAP32[i9 >> 2] = i12;
     do {
      if ((i13 | 0) != 0) {
       i12 = i13 | 0;
       i14 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
       if ((i14 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i13);
        break;
       } else {
        HEAP32[i12 >> 2] = i14;
        break;
       }
      }
     } while (0);
     i13 = HEAP32[i10 >> 2] | 0;
     if ((i13 | 0) == 0) {
      break;
     }
     i14 = i13 | 0;
     i12 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
     if ((i12 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i13);
      break;
     } else {
      HEAP32[i14 >> 2] = i12;
      break;
     }
    }
   } while (0);
   i11 = HEAP32[i9 >> 2] | 0;
   if ((i11 | 0) == 0) {
    i8 = 18;
    break;
   }
   if ((HEAP32[i11 + 4 >> 2] | 0) == 0) {
    i15 = i11;
    i16 = 0;
   } else {
    __ZN7WebCore14DateComponents36setMillisecondsSinceEpochForDateTimeEd(i4, +__ZN7WebCore9parseDateERKN3WTF6StringE(i5)) | 0;
    i11 = HEAP32[i9 >> 2] | 0;
    if ((i11 | 0) == 0) {
     break;
    } else {
     i15 = i11;
     i16 = 1;
    }
   }
   i11 = i15 | 0;
   i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i15);
    if (i16) {
     break;
    } else {
     i8 = 18;
     break;
    }
   } else {
    HEAP32[i11 >> 2] = i12;
    if (i16) {
     break;
    } else {
     i8 = 18;
     break;
    }
   }
  }
 } while (0);
 if ((i8 | 0) == 18) {
  __ZN7WebCore14DateComponents36setMillisecondsSinceEpochForDateTimeEd(i4, +__ZN3WTF11currentTimeEv() * +1e3) | 0;
 }
 i8 = HEAP32[i4 + 16 >> 2] | 0;
 i16 = HEAP32[i4 + 24 >> 2] | 0;
 i15 = HEAP32[i4 + 12 >> 2] | 0;
 i5 = HEAP32[i4 + 8 >> 2] | 0;
 i6 = HEAP32[i4 + 4 >> 2] | 0;
 __ZN3WTF6String6formatEPKcz(i1, H_BASE + 584 | 0, (i1 = STACKTOP, STACKTOP = STACKTOP + 48 | 0, HEAP32[i1 >> 2] = (HEAP32[i4 + 20 >> 2] | 0) + 1, HEAP32[i1 + 8 >> 2] = i8, HEAP32[i1 + 16 >> 2] = i16, HEAP32[i1 + 24 >> 2] = i15, HEAP32[i1 + 32 >> 2] = i5, HEAP32[i1 + 40 >> 2] = i6, i1) | 0);
 STACKTOP = i1;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore16ScriptSourceCodeC2ERKN3WTF6StringERKNS_3URLERKNS1_12TextPositionE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = i3 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = i6 | 0;
 if ((i8 | 0) == 0) {
  HEAP32[i9 >> 2] = 0;
  i10 = 0;
  i11 = 1;
 } else {
  HEAP32[i9 >> 2] = i8;
  i12 = i8 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
  i10 = 1;
  i11 = 0;
 }
 i12 = __ZN3WTF10fastMallocEj(28) | 0;
 i8 = i12;
 __ZN3JSC14SourceProviderC2ERKN3WTF6StringERKNS1_12TextPositionE(i8, i6, i4);
 HEAP32[i12 >> 2] = H_BASE + 2152;
 i6 = HEAP32[i2 >> 2] | 0;
 HEAP32[i12 + 24 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i12 = i6 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
 }
 i12 = i1 | 0;
 HEAP32[i12 >> 2] = i8;
 do {
  if (i10) {
   i8 = HEAP32[i9 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   i6 = i8 | 0;
   i2 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i6 >> 2] = i2;
    break;
   }
  }
 } while (0);
 do {
  if (i11) {
   i10 = HEAP32[i9 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   i2 = i10 | 0;
   i6 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i2 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i9 = HEAP32[i12 >> 2] | 0;
 if ((i9 | 0) != 0) {
  i12 = i9 + 4 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
 }
 i12 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 i11 = (HEAP32[i4 + 4 >> 2] | 0) + 1 | 0;
 HEAP32[i1 + 4 >> 2] = i9;
 HEAP32[i1 + 8 >> 2] = 0;
 i4 = HEAP32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 8 >> 2] & 127](i9) | 0) >> 2] | 0;
 if ((i4 | 0) == 0) {
  i13 = 0;
 } else {
  i13 = HEAP32[i4 + 4 >> 2] | 0;
 }
 HEAP32[i1 + 12 >> 2] = i13;
 HEAP32[i1 + 16 >> 2] = (i12 | 0) < 1 ? 1 : i12;
 HEAP32[i1 + 20 >> 2] = (i11 | 0) < 1 ? 1 : i11;
 __ZN7WebCore24CachedResourceHandleBaseC2Ev(i1 + 24 | 0);
 i11 = HEAP32[i7 >> 2] | 0;
 HEAP32[i1 + 28 >> 2] = i11;
 if ((i11 | 0) != 0) {
  i7 = i11 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = i3 + 4 | 0;
 i11 = i1 + 32 | 0;
 i12 = HEAP8[i11] & -2 | HEAP8[i7] & 1;
 HEAP8[i11] = i12;
 HEAP8[i11] = i12 & -3 | HEAP8[i7] & 2;
 HEAP32[i1 + 36 >> 2] = HEAP32[i3 + 8 >> 2];
 HEAP32[i1 + 40 >> 2] = HEAP32[i3 + 12 >> 2];
 HEAP32[i1 + 44 >> 2] = HEAP32[i3 + 16 >> 2];
 HEAP32[i1 + 48 >> 2] = HEAP32[i3 + 20 >> 2];
 HEAP32[i1 + 52 >> 2] = HEAP32[i3 + 24 >> 2];
 HEAP32[i1 + 56 >> 2] = HEAP32[i3 + 28 >> 2];
 HEAP32[i1 + 60 >> 2] = HEAP32[i3 + 32 >> 2];
 HEAP32[i1 + 64 >> 2] = HEAP32[i3 + 36 >> 2];
 HEAP32[i1 + 68 >> 2] = HEAP32[i3 + 40 >> 2];
 HEAP32[i1 + 72 >> 2] = HEAP32[i3 + 44 >> 2];
 STACKTOP = i5;
 return;
}
function __ZN7WebCore8Document17nodeWillBeRemovedEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = HEAP32[i1 + 728 >> 2] | 0;
 i4 = HEAP32[i1 + 732 >> 2] | 0;
 i5 = i3 + (i4 << 2) | 0;
 L1 : do {
  if ((HEAP32[i1 + 740 >> 2] | 0) != 0) {
   L3 : do {
    if ((i4 | 0) == 0) {
     i6 = i3;
    } else {
     i7 = i3;
     while (1) {
      i8 = HEAP32[i7 >> 2] | 0;
      if (!((i8 | 0) == (-1 | 0) | (i8 | 0) == 0)) {
       i6 = i7;
       break L3;
      }
      i7 = i7 + 4 | 0;
      if ((i7 | 0) == (i5 | 0)) {
       break L1;
      }
     }
    }
   } while (0);
   if ((i6 | 0) == (i5 | 0)) {
    break;
   } else {
    i9 = i6;
   }
   while (1) {
    __ZN7WebCore12NodeIterator17nodeWillBeRemovedEPNS_4NodeE(HEAP32[i9 >> 2] | 0, i2);
    i7 = i9 + 4 | 0;
    if ((i7 | 0) == (i5 | 0)) {
     break L1;
    } else {
     i10 = i7;
    }
    while (1) {
     i7 = HEAP32[i10 >> 2] | 0;
     if (!((i7 | 0) == (-1 | 0) | (i7 | 0) == 0)) {
      break;
     }
     i7 = i10 + 4 | 0;
     if ((i7 | 0) == (i5 | 0)) {
      break L1;
     } else {
      i10 = i7;
     }
    }
    if ((i10 | 0) == (i5 | 0)) {
     break;
    } else {
     i9 = i10;
    }
   }
  }
 } while (0);
 L15 : do {
  if ((HEAP32[i1 + 760 >> 2] | 0) != 0) {
   i10 = HEAP32[i1 + 748 >> 2] | 0;
   i9 = HEAP32[i1 + 752 >> 2] | 0;
   i5 = i10 + (i9 << 2) | 0;
   L17 : do {
    if ((i9 | 0) == 0) {
     i11 = i10;
    } else {
     i6 = i10;
     while (1) {
      i3 = HEAP32[i6 >> 2] | 0;
      if (!((i3 | 0) == (-1 | 0) | (i3 | 0) == 0)) {
       i11 = i6;
       break L17;
      }
      i6 = i6 + 4 | 0;
      if ((i6 | 0) == (i5 | 0)) {
       break L15;
      }
     }
    }
   } while (0);
   if ((i11 | 0) == (i5 | 0)) {
    break;
   } else {
    i12 = i11;
   }
   while (1) {
    __ZN7WebCore5Range17nodeWillBeRemovedEPNS_4NodeE(HEAP32[i12 >> 2] | 0, i2);
    i10 = i12 + 4 | 0;
    if ((i10 | 0) == (i5 | 0)) {
     break L15;
    } else {
     i13 = i10;
    }
    while (1) {
     i10 = HEAP32[i13 >> 2] | 0;
     if (!((i10 | 0) == (-1 | 0) | (i10 | 0) == 0)) {
      break;
     }
     i10 = i13 + 4 | 0;
     if ((i10 | 0) == (i5 | 0)) {
      break L15;
     } else {
      i13 = i10;
     }
    }
    if ((i13 | 0) == (i5 | 0)) {
     break;
    } else {
     i12 = i13;
    }
   }
  }
 } while (0);
 i13 = HEAP32[i1 + 332 >> 2] | 0;
 if ((i13 | 0) == 0) {
  return;
 }
 __ZN7WebCore12EventHandler17nodeWillBeRemovedEPNS_4NodeE(HEAP32[i13 + 472 >> 2] | 0, i2);
 __ZN7WebCore14FrameSelection17nodeWillBeRemovedEPNS_4NodeE(HEAP32[i13 + 468 >> 2] | 0, i2);
 __ZN7WebCore19DragCaretController17nodeWillBeRemovedEPNS_4NodeE(HEAP32[(HEAP32[i13 + 32 >> 2] | 0) + 24 >> 2] | 0, i2);
 return;
}
function __ZN3WTF9HashTableIPNS_10StringImplENS_12KeyValuePairIS2_PN7WebCore7ElementEEENS_24KeyValuePairKeyExtractorIS7_EENS_15CaseFoldingHashENS_7HashMapIS2_S6_SA_NS_10HashTraitsIS2_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EES2_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S7_S9_SA_SG_SD_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableIPNS_10StringImplENS_12KeyValuePairIS2_PN7WebCore7ElementEEENS_24KeyValuePairKeyExtractorIS7_EENS_15CaseFoldingHashENS_7HashMapIS2_S6_SA_NS_10HashTraitsIS2_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6expandEPS7_(i2, 0) | 0;
  i7 = HEAP32[i5 >> 2] | 0;
 } else {
  i7 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = __ZN3WTF15CaseFoldingHash4hashERNS_10StringImplE(HEAP32[i3 >> 2] | 0) | 0;
 i9 = (i8 >>> 23) + ~i8 | 0;
 i10 = i9 << 12 ^ i9;
 i9 = i10 >>> 7 ^ i10;
 i10 = i9 << 2 ^ i9;
 i9 = i10 >>> 20 ^ i10 | 1;
 i10 = 0;
 i11 = i8;
 i8 = 0;
 while (1) {
  i12 = i11 & i6;
  i13 = i7 + (i12 << 3) | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  i15 = i14;
  if ((i15 | 0) == (-1 | 0)) {
   i16 = i13;
  } else if ((i15 | 0) == 0) {
   break;
  } else {
   if (__ZN3WTF24equalIgnoringCaseNonNullEPKNS_10StringImplES2_(i14, HEAP32[i3 >> 2] | 0) | 0) {
    i17 = 6;
    break;
   } else {
    i16 = i10;
   }
  }
  i14 = (i8 | 0) == 0 ? i9 : i8;
  i10 = i16;
  i11 = i14 + i12 | 0;
  i8 = i14;
 }
 if ((i17 | 0) == 6) {
  i17 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 3) | 0;
  i8 = i1;
  HEAP32[i8 >> 2] = i13;
  HEAP32[i8 + 4 >> 2] = i17;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i10 | 0) == 0) {
  i18 = i13;
  i19 = i2 + 16 | 0;
 } else {
  i13 = i10;
  HEAP32[i13 >> 2] = 0;
  HEAP32[i13 + 4 >> 2] = 0;
  i13 = i2 + 16 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) - 1;
  i18 = i10;
  i19 = i13;
 }
 HEAP32[i18 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i18 + 4 >> 2] = HEAP32[i4 >> 2];
 i4 = i2 + 12 | 0;
 i3 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i3;
 i4 = i2 + 4 | 0;
 i13 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i19 >> 2] | 0) + i3 << 1 | 0) < (i13 | 0)) {
  i20 = i18;
  i21 = i13;
 } else {
  i13 = __ZN3WTF9HashTableIPNS_10StringImplENS_12KeyValuePairIS2_PN7WebCore7ElementEEENS_24KeyValuePairKeyExtractorIS7_EENS_15CaseFoldingHashENS_7HashMapIS2_S6_SA_NS_10HashTraitsIS2_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6expandEPS7_(i2, i18) | 0;
  i20 = i13;
  i21 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i21 << 3) | 0;
 i21 = i1;
 HEAP32[i21 >> 2] = i20;
 HEAP32[i21 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore11RenderStyleD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = HEAP32[i1 + 36 >> 2] | 0;
 i3 = i2 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore14SVGRenderStyleD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 } else {
  HEAP32[i3 >> 2] = i4;
 }
 i4 = HEAP32[i1 + 32 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i3 = i4 + 8 | 0;
  i2 = HEAP32[i3 >> 2] | 0;
  i5 = i4 | 0;
  if ((i2 | 0) != 0) {
   i6 = HEAP32[i5 >> 2] | 0;
   i7 = i6 + (i2 << 2) | 0;
   i2 = i6;
   while (1) {
    i6 = HEAP32[i2 >> 2] | 0;
    do {
     if ((i6 | 0) != 0) {
      i8 = i6 | 0;
      i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
      if ((i9 | 0) == 0) {
       __ZN7WebCore11RenderStyleD2Ev(i6);
       __ZN3WTF8fastFreeEPv(i6);
       break;
      } else {
       HEAP32[i8 >> 2] = i9;
       break;
      }
     }
    } while (0);
    i2 = i2 + 4 | 0;
    if ((i2 | 0) == (i7 | 0)) {
     break;
    }
   }
   HEAP32[i3 >> 2] = 0;
  }
  i3 = HEAP32[i5 >> 2] | 0;
  if (!((i4 + 12 | 0) == (i3 | 0) | (i3 | 0) == 0)) {
   HEAP32[i5 >> 2] = 0;
   HEAP32[i4 + 4 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i3);
  }
  __ZN3WTF8fastFreeEPv(i4);
 }
 i4 = HEAP32[i1 + 28 >> 2] | 0;
 i3 = i4 | 0;
 i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore18StyleInheritedDataD1Ev(i4);
  __ZN3WTF8fastFreeEPv(i4);
 } else {
  HEAP32[i3 >> 2] = i5;
 }
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 i3 = i5 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore22StyleRareInheritedDataD1Ev(i5);
  __ZN3WTF8fastFreeEPv(i5);
 } else {
  HEAP32[i3 >> 2] = i4;
 }
 i4 = HEAP32[i1 + 20 >> 2] | 0;
 i3 = i4 | 0;
 i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i4);
  __ZN3WTF8fastFreeEPv(i4);
 } else {
  HEAP32[i3 >> 2] = i5;
 }
 i5 = HEAP32[i1 + 16 >> 2] | 0;
 i3 = i5 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore17StyleSurroundDataD2Ev(i5);
  __ZN3WTF8fastFreeEPv(i5);
 } else {
  HEAP32[i3 >> 2] = i4;
 }
 i4 = HEAP32[i1 + 12 >> 2] | 0;
 i3 = i4 | 0;
 i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore9FillLayerD1Ev(i4 + 4 | 0);
  __ZN3WTF8fastFreeEPv(i4);
 } else {
  HEAP32[i3 >> 2] = i5;
 }
 i5 = HEAP32[i1 + 8 >> 2] | 0;
 i3 = i5 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore15StyleVisualDataD1Ev(i5);
  __ZN3WTF8fastFreeEPv(i5);
 } else {
  HEAP32[i3 >> 2] = i4;
 }
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 i1 = i4 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore12StyleBoxDataD2Ev(i4);
  __ZN3WTF8fastFreeEPv(i4);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZN3WTF9HashTableIPN7WebCore21MediaCanStartListenerES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1, i2, i3) {
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
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 2) | 0;
 if ((i5 | 0) == 0) {
  i8 = 0;
  i9 = i1 + 16 | 0;
  HEAP32[i9 >> 2] = 0;
  i10 = i7;
  __ZN3WTF8fastFreeEPv(i10);
  return i8 | 0;
 } else {
  i11 = 0;
  i12 = 0;
 }
 while (1) {
  i2 = i7 + (i11 << 2) | 0;
  i13 = HEAP32[i2 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i12;
  } else {
   i16 = HEAP32[i6 >> 2] | 0;
   i17 = HEAP32[i4 >> 2] | 0;
   i18 = i14 + ~(i14 << 15) | 0;
   i14 = (i18 >>> 10 ^ i18) * 9 & -1;
   i18 = i14 >>> 6 ^ i14;
   i14 = i18 + ~(i18 << 11) | 0;
   i18 = i14 >>> 16 ^ i14;
   i14 = i17 & i18;
   i19 = i16 + (i14 << 2) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L7 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 5;
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
       break L7;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i17;
      i34 = i16 + (i33 << 2) | 0;
      i35 = HEAP32[i34 >> 2] | 0;
      if ((i35 | 0) == 0) {
       i21 = i31;
       i22 = i34;
       i23 = 5;
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
   if ((i23 | 0) == 5) {
    i23 = 0;
    i30 = (i21 | 0) != 0 ? i21 : i22;
   }
   HEAP32[i30 >> 2] = i13;
   i15 = (i2 | 0) == (i3 | 0) ? i30 : i12;
  }
  i16 = i11 + 1 | 0;
  if ((i16 | 0) == (i5 | 0)) {
   i8 = i15;
   break;
  } else {
   i11 = i16;
   i12 = i15;
  }
 }
 i9 = i1 + 16 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i7;
 __ZN3WTF8fastFreeEPv(i10);
 return i8 | 0;
}
function __ZN3WTF9HashTableIPN7WebCore14HTMLCollectionES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1, i2, i3) {
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
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 2) | 0;
 if ((i5 | 0) == 0) {
  i8 = 0;
  i9 = i1 + 16 | 0;
  HEAP32[i9 >> 2] = 0;
  i10 = i7;
  __ZN3WTF8fastFreeEPv(i10);
  return i8 | 0;
 } else {
  i11 = 0;
  i12 = 0;
 }
 while (1) {
  i2 = i7 + (i11 << 2) | 0;
  i13 = HEAP32[i2 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i12;
  } else {
   i16 = HEAP32[i6 >> 2] | 0;
   i17 = HEAP32[i4 >> 2] | 0;
   i18 = i14 + ~(i14 << 15) | 0;
   i14 = (i18 >>> 10 ^ i18) * 9 & -1;
   i18 = i14 >>> 6 ^ i14;
   i14 = i18 + ~(i18 << 11) | 0;
   i18 = i14 >>> 16 ^ i14;
   i14 = i17 & i18;
   i19 = i16 + (i14 << 2) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L7 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 5;
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
       break L7;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i17;
      i34 = i16 + (i33 << 2) | 0;
      i35 = HEAP32[i34 >> 2] | 0;
      if ((i35 | 0) == 0) {
       i21 = i31;
       i22 = i34;
       i23 = 5;
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
   if ((i23 | 0) == 5) {
    i23 = 0;
    i30 = (i21 | 0) != 0 ? i21 : i22;
   }
   HEAP32[i30 >> 2] = i13;
   i15 = (i2 | 0) == (i3 | 0) ? i30 : i12;
  }
  i16 = i11 + 1 | 0;
  if ((i16 | 0) == (i5 | 0)) {
   i8 = i15;
   break;
  } else {
   i11 = i16;
   i12 = i15;
  }
 }
 i9 = i1 + 16 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i7;
 __ZN3WTF8fastFreeEPv(i10);
 return i8 | 0;
}
function __ZN3WTF9HashTableIPN7WebCore12NodeIteratorES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1, i2, i3) {
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
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 2) | 0;
 if ((i5 | 0) == 0) {
  i8 = 0;
  i9 = i1 + 16 | 0;
  HEAP32[i9 >> 2] = 0;
  i10 = i7;
  __ZN3WTF8fastFreeEPv(i10);
  return i8 | 0;
 } else {
  i11 = 0;
  i12 = 0;
 }
 while (1) {
  i2 = i7 + (i11 << 2) | 0;
  i13 = HEAP32[i2 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i12;
  } else {
   i16 = HEAP32[i6 >> 2] | 0;
   i17 = HEAP32[i4 >> 2] | 0;
   i18 = i14 + ~(i14 << 15) | 0;
   i14 = (i18 >>> 10 ^ i18) * 9 & -1;
   i18 = i14 >>> 6 ^ i14;
   i14 = i18 + ~(i18 << 11) | 0;
   i18 = i14 >>> 16 ^ i14;
   i14 = i17 & i18;
   i19 = i16 + (i14 << 2) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L7 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 5;
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
       break L7;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i17;
      i34 = i16 + (i33 << 2) | 0;
      i35 = HEAP32[i34 >> 2] | 0;
      if ((i35 | 0) == 0) {
       i21 = i31;
       i22 = i34;
       i23 = 5;
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
   if ((i23 | 0) == 5) {
    i23 = 0;
    i30 = (i21 | 0) != 0 ? i21 : i22;
   }
   HEAP32[i30 >> 2] = i13;
   i15 = (i2 | 0) == (i3 | 0) ? i30 : i12;
  }
  i16 = i11 + 1 | 0;
  if ((i16 | 0) == (i5 | 0)) {
   i8 = i15;
   break;
  } else {
   i11 = i16;
   i12 = i15;
  }
 }
 i9 = i1 + 16 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i7;
 __ZN3WTF8fastFreeEPv(i10);
 return i8 | 0;
}
function __ZN3WTF9HashTableIPN7WebCore12LiveNodeListES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1, i2, i3) {
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
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 2) | 0;
 if ((i5 | 0) == 0) {
  i8 = 0;
  i9 = i1 + 16 | 0;
  HEAP32[i9 >> 2] = 0;
  i10 = i7;
  __ZN3WTF8fastFreeEPv(i10);
  return i8 | 0;
 } else {
  i11 = 0;
  i12 = 0;
 }
 while (1) {
  i2 = i7 + (i11 << 2) | 0;
  i13 = HEAP32[i2 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i12;
  } else {
   i16 = HEAP32[i6 >> 2] | 0;
   i17 = HEAP32[i4 >> 2] | 0;
   i18 = i14 + ~(i14 << 15) | 0;
   i14 = (i18 >>> 10 ^ i18) * 9 & -1;
   i18 = i14 >>> 6 ^ i14;
   i14 = i18 + ~(i18 << 11) | 0;
   i18 = i14 >>> 16 ^ i14;
   i14 = i17 & i18;
   i19 = i16 + (i14 << 2) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L7 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 5;
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
       break L7;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i17;
      i34 = i16 + (i33 << 2) | 0;
      i35 = HEAP32[i34 >> 2] | 0;
      if ((i35 | 0) == 0) {
       i21 = i31;
       i22 = i34;
       i23 = 5;
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
   if ((i23 | 0) == 5) {
    i23 = 0;
    i30 = (i21 | 0) != 0 ? i21 : i22;
   }
   HEAP32[i30 >> 2] = i13;
   i15 = (i2 | 0) == (i3 | 0) ? i30 : i12;
  }
  i16 = i11 + 1 | 0;
  if ((i16 | 0) == (i5 | 0)) {
   i8 = i15;
   break;
  } else {
   i11 = i16;
   i12 = i15;
  }
 }
 i9 = i1 + 16 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i7;
 __ZN3WTF8fastFreeEPv(i10);
 return i8 | 0;
}
function __ZN3WTF9HashTableIPN7WebCore7ElementES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1, i2, i3) {
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
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 2) | 0;
 if ((i5 | 0) == 0) {
  i8 = 0;
  i9 = i1 + 16 | 0;
  HEAP32[i9 >> 2] = 0;
  i10 = i7;
  __ZN3WTF8fastFreeEPv(i10);
  return i8 | 0;
 } else {
  i11 = 0;
  i12 = 0;
 }
 while (1) {
  i2 = i7 + (i11 << 2) | 0;
  i13 = HEAP32[i2 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i12;
  } else {
   i16 = HEAP32[i6 >> 2] | 0;
   i17 = HEAP32[i4 >> 2] | 0;
   i18 = i14 + ~(i14 << 15) | 0;
   i14 = (i18 >>> 10 ^ i18) * 9 & -1;
   i18 = i14 >>> 6 ^ i14;
   i14 = i18 + ~(i18 << 11) | 0;
   i18 = i14 >>> 16 ^ i14;
   i14 = i17 & i18;
   i19 = i16 + (i14 << 2) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L7 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 5;
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
       break L7;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i17;
      i34 = i16 + (i33 << 2) | 0;
      i35 = HEAP32[i34 >> 2] | 0;
      if ((i35 | 0) == 0) {
       i21 = i31;
       i22 = i34;
       i23 = 5;
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
   if ((i23 | 0) == 5) {
    i23 = 0;
    i30 = (i21 | 0) != 0 ? i21 : i22;
   }
   HEAP32[i30 >> 2] = i13;
   i15 = (i2 | 0) == (i3 | 0) ? i30 : i12;
  }
  i16 = i11 + 1 | 0;
  if ((i16 | 0) == (i5 | 0)) {
   i8 = i15;
   break;
  } else {
   i11 = i16;
   i12 = i15;
  }
 }
 i9 = i1 + 16 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i7;
 __ZN3WTF8fastFreeEPv(i10);
 return i8 | 0;
}
function __ZN3WTF9HashTableIPN7WebCore5RangeES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1, i2, i3) {
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
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 2) | 0;
 if ((i5 | 0) == 0) {
  i8 = 0;
  i9 = i1 + 16 | 0;
  HEAP32[i9 >> 2] = 0;
  i10 = i7;
  __ZN3WTF8fastFreeEPv(i10);
  return i8 | 0;
 } else {
  i11 = 0;
  i12 = 0;
 }
 while (1) {
  i2 = i7 + (i11 << 2) | 0;
  i13 = HEAP32[i2 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i12;
  } else {
   i16 = HEAP32[i6 >> 2] | 0;
   i17 = HEAP32[i4 >> 2] | 0;
   i18 = i14 + ~(i14 << 15) | 0;
   i14 = (i18 >>> 10 ^ i18) * 9 & -1;
   i18 = i14 >>> 6 ^ i14;
   i14 = i18 + ~(i18 << 11) | 0;
   i18 = i14 >>> 16 ^ i14;
   i14 = i17 & i18;
   i19 = i16 + (i14 << 2) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L7 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 5;
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
       break L7;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i17;
      i34 = i16 + (i33 << 2) | 0;
      i35 = HEAP32[i34 >> 2] | 0;
      if ((i35 | 0) == 0) {
       i21 = i31;
       i22 = i34;
       i23 = 5;
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
   if ((i23 | 0) == 5) {
    i23 = 0;
    i30 = (i21 | 0) != 0 ? i21 : i22;
   }
   HEAP32[i30 >> 2] = i13;
   i15 = (i2 | 0) == (i3 | 0) ? i30 : i12;
  }
  i16 = i11 + 1 | 0;
  if ((i16 | 0) == (i5 | 0)) {
   i8 = i15;
   break;
  } else {
   i11 = i16;
   i12 = i15;
  }
 }
 i9 = i1 + 16 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i7;
 __ZN3WTF8fastFreeEPv(i10);
 return i8 | 0;
}
function __ZN3WTF9HashTableIPNS_10StringImplENS_12KeyValuePairIS2_PN7WebCore7ElementEEENS_24KeyValuePairKeyExtractorIS7_EENS_15CaseFoldingHashENS_7HashMapIS2_S6_SA_NS_10HashTraitsIS2_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6expandEPS7_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i3 = i1 + 4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = 8;
  i6 = 0;
 } else {
  i7 = i4 << 1;
  i5 = ((HEAP32[i1 + 12 >> 2] | 0) * 6 & -1 | 0) < (i7 | 0) ? i4 : i7;
  i6 = i4;
 }
 i4 = i1 | 0;
 i7 = HEAP32[i4 >> 2] | 0;
 HEAP32[i3 >> 2] = i5;
 i3 = i1 + 8 | 0;
 HEAP32[i3 >> 2] = i5 - 1;
 HEAP32[i4 >> 2] = __ZN3WTF16fastZeroedMallocEj(i5 << 3) | 0;
 if ((i6 | 0) == 0) {
  i8 = 0;
  i9 = i1 + 16 | 0;
  HEAP32[i9 >> 2] = 0;
  i10 = i7;
  __ZN3WTF8fastFreeEPv(i10);
  return i8 | 0;
 } else {
  i11 = 0;
  i12 = 0;
 }
 while (1) {
  i5 = i7 + (i11 << 3) | 0;
  i13 = i5 | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  i15 = i14;
  if ((i15 | 0) == (-1 | 0) | (i15 | 0) == 0) {
   i16 = i12;
  } else {
   i15 = HEAP32[i4 >> 2] | 0;
   i17 = HEAP32[i3 >> 2] | 0;
   i18 = __ZN3WTF15CaseFoldingHash4hashERNS_10StringImplE(i14) | 0;
   i14 = (i18 >>> 23) + ~i18 | 0;
   i19 = i14 << 12 ^ i14;
   i14 = i19 >>> 7 ^ i19;
   i19 = i14 << 2 ^ i14;
   i14 = i19 >>> 20 ^ i19 | 1;
   i19 = i18;
   i18 = 0;
   i20 = 0;
   while (1) {
    i21 = i19 & i17;
    i22 = i15 + (i21 << 3) | 0;
    i23 = HEAP32[i22 >> 2] | 0;
    i24 = i23;
    if ((i24 | 0) == 0) {
     i25 = 7;
     break;
    } else if ((i24 | 0) == (-1 | 0)) {
     i26 = i22;
    } else {
     if (__ZN3WTF24equalIgnoringCaseNonNullEPKNS_10StringImplES2_(i23, HEAP32[i13 >> 2] | 0) | 0) {
      i27 = i22;
      break;
     } else {
      i26 = i20;
     }
    }
    i23 = (i18 | 0) == 0 ? i14 : i18;
    i19 = i23 + i21 | 0;
    i18 = i23;
    i20 = i26;
   }
   if ((i25 | 0) == 7) {
    i25 = 0;
    i27 = (i20 | 0) != 0 ? i20 : i22;
   }
   i18 = i5;
   i19 = i27;
   i14 = HEAP32[i18 + 4 >> 2] | 0;
   HEAP32[i19 >> 2] = HEAP32[i18 >> 2];
   HEAP32[i19 + 4 >> 2] = i14;
   i16 = (i5 | 0) == (i2 | 0) ? i27 : i12;
  }
  i14 = i11 + 1 | 0;
  if ((i14 | 0) == (i6 | 0)) {
   i8 = i16;
   break;
  } else {
   i11 = i14;
   i12 = i16;
  }
 }
 i9 = i1 + 16 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i7;
 __ZN3WTF8fastFreeEPv(i10);
 return i8 | 0;
}
function __ZN3WTF6VectorIN7WebCore7IconURLELj0ENS_15CrashOnOverflowEE14appendSlowCaseIRS2_EEvOT_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i4 + 1 | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if (i7 >>> 0 > i2 >>> 0) {
   i8 = 3;
  } else {
   if ((i7 + (i4 << 6) | 0) >>> 0 <= i2 >>> 0) {
    i8 = 3;
    break;
   }
   i9 = HEAP32[i1 + 4 >> 2] | 0;
   i10 = i9 + 1 + (i9 >>> 2) | 0;
   i9 = i10 >>> 0 > 16 >>> 0 ? i10 : 16;
   __ZN3WTF6VectorIN7WebCore7IconURLELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i9 >>> 0 > i5 >>> 0 ? i9 : i5);
   i9 = HEAP32[i6 >> 2] | 0;
   i11 = i9 + (i2 - i7 >> 6 << 6) | 0;
   i12 = i9;
  }
 } while (0);
 if ((i8 | 0) == 3) {
  i8 = HEAP32[i1 + 4 >> 2] | 0;
  i7 = i8 + 1 + (i8 >>> 2) | 0;
  i8 = i7 >>> 0 > 16 >>> 0 ? i7 : 16;
  __ZN3WTF6VectorIN7WebCore7IconURLELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i8 >>> 0 > i5 >>> 0 ? i8 : i5);
  i11 = i2;
  i12 = HEAP32[i6 >> 2] | 0;
 }
 i6 = HEAP32[i3 >> 2] | 0;
 HEAP32[i12 + (i6 << 6) >> 2] = HEAP32[i11 >> 2];
 i2 = HEAP32[i11 + 4 >> 2] | 0;
 HEAP32[i12 + (i6 << 6) + 4 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i5 = i2 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
 }
 i5 = HEAP32[i11 + 8 >> 2] | 0;
 HEAP32[i12 + (i6 << 6) + 8 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i2 = i5 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 i2 = HEAP32[i11 + 12 >> 2] | 0;
 HEAP32[i12 + (i6 << 6) + 12 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i5 = i2 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
 }
 i5 = i11 + 16 | 0;
 i2 = i12 + (i6 << 6) + 16 | 0;
 i8 = HEAP8[i2] & -2 | HEAP8[i5] & 1;
 HEAP8[i2] = i8;
 HEAP8[i2] = i8 & -3 | HEAP8[i5] & 2;
 HEAP32[i12 + (i6 << 6) + 20 >> 2] = HEAP32[i11 + 20 >> 2];
 HEAP32[i12 + (i6 << 6) + 24 >> 2] = HEAP32[i11 + 24 >> 2];
 HEAP32[i12 + (i6 << 6) + 28 >> 2] = HEAP32[i11 + 28 >> 2];
 HEAP32[i12 + (i6 << 6) + 32 >> 2] = HEAP32[i11 + 32 >> 2];
 HEAP32[i12 + (i6 << 6) + 36 >> 2] = HEAP32[i11 + 36 >> 2];
 HEAP32[i12 + (i6 << 6) + 40 >> 2] = HEAP32[i11 + 40 >> 2];
 HEAP32[i12 + (i6 << 6) + 44 >> 2] = HEAP32[i11 + 44 >> 2];
 HEAP32[i12 + (i6 << 6) + 48 >> 2] = HEAP32[i11 + 48 >> 2];
 HEAP32[i12 + (i6 << 6) + 52 >> 2] = HEAP32[i11 + 52 >> 2];
 HEAP32[i12 + (i6 << 6) + 56 >> 2] = HEAP32[i11 + 56 >> 2];
 HEAP8[i12 + (i6 << 6) + 60 | 0] = HEAP8[i11 + 60 | 0] & 1;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 return;
}
function __ZN7WebCore8Document35webkitWillEnterFullScreenForElementEPNS_7ElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 if ((HEAP32[i1 + 1584 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP8[i1 + 2285 | 0] & 1) != 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP8[i1 + 1433 | 0] & 1) != 0) {
  STACKTOP = i3;
  return;
 }
 i5 = HEAP32[i1 + 332 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i5 + 32 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = HEAP32[i1 + 1704 >> 2] | 0;
 if ((i5 | 0) != 0) {
  __ZN7WebCore16RenderFullScreen14unwrapRendererEv(i5);
 }
 if ((i2 | 0) != 0) {
  i5 = i2 + 8 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 i5 = i1 + 1688 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i2;
 do {
  if ((i6 | 0) != 0) {
   i2 = i6 + 8 | 0;
   i7 = i2 | 0;
   i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   HEAP32[i7 >> 2] = i8;
   if ((i8 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 i6 = HEAP32[i5 >> 2] | 0;
 i2 = i6 + 32 | 0;
 if ((HEAP32[i6 + 12 >> 2] & 2048 | 0) == 0) {
  i9 = i2 | 0;
 } else {
  i9 = HEAP32[i2 >> 2] | 0;
 }
 i2 = HEAP32[i9 >> 2] | 0;
 i9 = (i2 | 0) != 0;
 do {
  if (i9) {
   if ((HEAP32[i2 + 20 >> 2] & 512 | 0) == 0) {
    break;
   }
   _memmove(i1 + 1812 | 0, i2 + 44 | 0, 16) | 0;
   __ZN7WebCore11RenderStyle5cloneEPKS0_(i4, HEAP32[i2 + 36 >> 2] | 0);
   i6 = i1 + 1828 | 0;
   i8 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = HEAP32[i4 >> 2];
   if ((i8 | 0) == 0) {
    break;
   }
   i6 = i8 | 0;
   i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) == 0) {
    __ZN7WebCore11RenderStyleD2Ev(i8);
    __ZN3WTF8fastFreeEPv(i8);
    break;
   } else {
    HEAP32[i6 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i1 + 692 >> 2] | 0;
 if ((HEAP32[i5 >> 2] | 0) == (i4 | 0)) {
  i10 = i4;
 } else {
  if (i9) {
   i11 = HEAP32[i2 + 8 >> 2] | 0;
  } else {
   i11 = 0;
  }
  __ZN7WebCore16RenderFullScreen12wrapRendererEPNS_12RenderObjectEPNS_13RenderElementERNS_8DocumentE(i2, i11, i1) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 }
 __ZN7WebCore7Element62setContainsFullScreenElementOnAncestorsCrossingFrameBoundariesEb(i10, 1);
 __ZN7WebCore8Document11recalcStyleENS_5Style6ChangeE(i1, 4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore17NodeListsNodeDataD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = HEAP32[i1 + 68 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i1 + 72 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    do {
     if ((HEAP8[i2 + (i4 * 12 & -1) | 0] | 0) != -1) {
      i5 = HEAP32[i2 + (i4 * 12 & -1) + 4 >> 2] | 0;
      if ((i5 | 0) == 0) {
       break;
      }
      i6 = i5 | 0;
      i7 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
      if ((i7 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i5);
       break;
      } else {
       HEAP32[i6 >> 2] = i7;
       break;
      }
     }
    } while (0);
    i4 = i4 + 1 | 0;
    if ((i4 | 0) >= (i3 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2 | 0);
 }
 i2 = HEAP32[i1 + 48 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i1 + 52 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    i7 = i2 + (i4 << 3) | 0;
    if ((HEAP32[i7 >> 2] | 0) != -1) {
     __ZN7WebCore13QualifiedNameD1Ev(i7 | 0);
    }
    i4 = i4 + 1 | 0;
    if ((i4 | 0) >= (i3 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 28 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i1 + 32 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    do {
     if ((HEAP8[i2 + (i4 * 12 & -1) | 0] | 0) != -1) {
      i7 = HEAP32[i2 + (i4 * 12 & -1) + 4 >> 2] | 0;
      if ((i7 | 0) == 0) {
       break;
      }
      i6 = i7 | 0;
      i5 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
      if ((i5 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i7);
       break;
      } else {
       HEAP32[i6 >> 2] = i5;
       break;
      }
     }
    } while (0);
    i4 = i4 + 1 | 0;
    if ((i4 | 0) >= (i3 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2 | 0);
 }
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i3 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i3 | 0) > 0) {
  i1 = 0;
  while (1) {
   do {
    if ((HEAP8[i2 + (i1 * 12 & -1) | 0] | 0) != -1) {
     i4 = HEAP32[i2 + (i1 * 12 & -1) + 4 >> 2] | 0;
     if ((i4 | 0) == 0) {
      break;
     }
     i5 = i4 | 0;
     i6 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
     if ((i6 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i4);
      break;
     } else {
      HEAP32[i5 >> 2] = i6;
      break;
     }
    }
   } while (0);
   i1 = i1 + 1 | 0;
   if ((i1 | 0) >= (i3 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i2 | 0);
 return;
}
function __ZN7WebCore8Document34didAssociateFormControlsTimerFiredEPNS_5TimerIS0_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i1 + 332 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i5 + 32 >> 2] | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i5 = i3 | 0;
 HEAP32[i5 >> 2] = 0;
 i6 = i3 + 4 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i3 + 8 | 0;
 HEAP32[i7 >> 2] = 0;
 i8 = i1 + 2264 | 0;
 __ZN3WTF12copyToVectorINS_7HashSetINS_6RefPtrIN7WebCore7ElementEEENS_7PtrHashIS5_EENS_10HashTraitsIS5_EEEENS_6VectorIS5_Lj0ENS_15CrashOnOverflowEEEEEvRKT_RT0_(i8, i3);
 i9 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i4 >> 2] | 0) + 32 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 444 >> 2] & 127](i9, i3);
 i3 = HEAP32[i8 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i9 = HEAP32[i1 + 2268 >> 2] | 0;
  if ((i9 | 0) > 0) {
   i1 = 0;
   while (1) {
    i4 = HEAP32[i3 + (i1 << 2) >> 2] | 0;
    i10 = i4;
    do {
     if (!((i10 | 0) == (-1 | 0) | (i10 | 0) == 0)) {
      i11 = i4 + 8 | 0;
      i12 = i11 | 0;
      i13 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
      HEAP32[i12 >> 2] = i13;
      if ((i13 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
     }
    } while (0);
    i1 = i1 + 1 | 0;
    if ((i1 | 0) >= (i9 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i3);
  _memset(i8 | 0, 0, 16) | 0;
 }
 i8 = HEAP32[i7 >> 2] | 0;
 if ((i8 | 0) != 0) {
  i3 = HEAP32[i5 >> 2] | 0;
  i9 = i3 + (i8 << 2) | 0;
  i8 = i3;
  while (1) {
   i3 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i3 | 0) != 0) {
     i1 = i3 + 8 | 0;
     i4 = i1 | 0;
     i10 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
     HEAP32[i4 >> 2] = i10;
     if ((i10 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
    }
   } while (0);
   i8 = i8 + 4 | 0;
   if ((i8 | 0) == (i9 | 0)) {
    break;
   }
  }
  HEAP32[i7 >> 2] = 0;
 }
 i7 = HEAP32[i5 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 HEAP32[i5 >> 2] = 0;
 HEAP32[i6 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i7);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore8Document31fullScreenChangeDelayTimerFiredEPNS_5TimerIS0_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i3 = i2 | 0;
 i4 = i2 + 24 | 0;
 i5 = i1 + 8 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 _memset(i3 | 0, 0, 20) | 0;
 i5 = i1 + 1768 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i3 >> 2] = i6;
 i6 = i1 + 1772 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i3 + 4 >> 2] = i5;
 i5 = i1 + 1776 | 0;
 i6 = i3 + 8 | 0;
 i7 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i6 >> 2] = i7;
 i7 = i1 + 1780 | 0;
 i5 = i3 + 12 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i5 >> 2] = i8;
 _memset(i4 | 0, 0, 20) | 0;
 i8 = i1 + 1788 | 0;
 i7 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i4 >> 2] = i7;
 i7 = i1 + 1792 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i4 + 4 >> 2] = i8;
 i8 = i1 + 1796 | 0;
 i7 = i4 + 8 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i7 >> 2] = i9;
 i9 = i1 + 1800 | 0;
 i8 = i4 + 12 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 HEAP32[i8 >> 2] = i10;
 __ZN7WebCore8Document36dispatchFullScreenChangeOrErrorEventERN3WTF5DequeINS1_6RefPtrINS_4NodeEEELj0EEERKNS1_12AtomicStringEb(i1, i3, (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 656 | 0, 0);
 __ZN7WebCore8Document36dispatchFullScreenChangeOrErrorEventERN3WTF5DequeINS1_6RefPtrINS_4NodeEEELj0EEERKNS1_12AtomicStringEb(i1, i4, (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 660 | 0, 0);
 __ZN3WTF5DequeINS_6RefPtrIN7WebCore4NodeEEELj0EE10destroyAllEv(i4);
 i4 = HEAP32[i7 >> 2] | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i7 >> 2] = 0;
  HEAP32[i8 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i4);
 }
 __ZN3WTF5DequeINS_6RefPtrIN7WebCore4NodeEEELj0EE10destroyAllEv(i3);
 i3 = HEAP32[i6 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i6 >> 2] = 0;
  HEAP32[i5 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = i1 + 8 | 0;
 i1 = i3 | 0;
 i5 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i5;
 if ((i5 | 0) >= 1) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore13AXObjectCacheD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = i1 + 192 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 184 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 3) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i7 = i5 + 4 | 0;
     i8 = i7 | 0;
     i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     if ((i9 | 0) != 0) {
      HEAP32[i8 >> 2] = i9;
      break;
     }
     i9 = i7 - 4 | 0;
     if ((i9 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 127](i9);
    }
   } while (0);
   i3 = i3 + 8 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 188 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 __ZN7WebCore9TimerBaseD2Ev(i1 + 128 | 0);
 i2 = HEAP32[i1 + 108 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = i1 + 104 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i4 | 0) != 0) {
  i2 = HEAP32[i4 >> 2] | 0;
  if ((i2 | 0) != 0) {
   __ZN3WTF8fastFreeEPv(i2);
  }
  __ZdlPv(i4);
 }
 i4 = HEAP32[i1 + 84 >> 2] | 0;
 if ((i4 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i4);
 }
 i4 = HEAP32[i1 + 64 >> 2] | 0;
 if ((i4 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i4);
 }
 i4 = HEAP32[i1 + 44 >> 2] | 0;
 if ((i4 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i4);
 }
 i4 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i4 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i4);
 }
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) > 0) {
  i1 = 0;
  while (1) {
   do {
    if ((HEAP32[i4 + (i1 << 3) >> 2] | 0) != -1) {
     i6 = HEAP32[i4 + (i1 << 3) + 4 >> 2] | 0;
     if ((i6 | 0) == 0) {
      break;
     }
     i3 = i6 + 4 | 0;
     i6 = i3 | 0;
     i5 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
     if ((i5 | 0) != 0) {
      HEAP32[i6 >> 2] = i5;
      break;
     }
     i5 = i3 - 4 | 0;
     if ((i5 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 127](i5);
    }
   } while (0);
   i1 = i1 + 1 | 0;
   if ((i1 | 0) >= (i2 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i4);
 return;
}
function __ZN7WebCore8Document31didBecomeCurrentDocumentInFrameEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i2 = i1 + 332 | 0;
 __ZN7WebCore16ScriptController14updateDocumentEv(HEAP32[(HEAP32[i2 >> 2] | 0) + 460 >> 2] | 0);
 if ((HEAP32[i1 + 1584 >> 2] | 0) == 0) {
  i3 = 3;
 } else {
  if ((HEAP8[i1 + 2285 | 0] & 1) != 0) {
   i3 = 3;
  }
 }
 if ((i3 | 0) == 3) {
  __ZN7WebCore8Document16createRenderTreeEv(i1);
 }
 i3 = HEAP32[i2 >> 2] | 0;
 L6 : do {
  if ((i3 | 0) == 0) {
   i4 = 0;
  } else {
   i5 = HEAP32[i3 + 32 >> 2] | 0;
   do {
    if ((i5 | 0) == 0) {
     i6 = i3;
    } else {
     if ((HEAP32[i3 + 28 >> 2] | 0) != (i3 | 0)) {
      i6 = i3;
      break;
     }
     __ZNK7WebCore6Chrome35dispatchViewportPropertiesDidChangeERKNS_17ViewportArgumentsE(HEAP32[i5 + 20 >> 2] | 0, i1 + 1896 | 0);
     i7 = HEAP32[i2 >> 2] | 0;
     if ((i7 | 0) == 0) {
      i4 = 0;
      break L6;
     } else {
      i6 = i7;
     }
    }
   } while (0);
   i5 = HEAP32[i6 + 32 >> 2] | 0;
   if ((i5 | 0) == 0) {
    i4 = i6;
    break;
   }
   if ((HEAP32[i6 + 28 >> 2] | 0) != (i6 | 0)) {
    i4 = i6;
    break;
   }
   i7 = HEAP32[i5 + 60 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i8 = 0;
   } else {
    i9 = i7;
    i7 = 0;
    while (1) {
     i10 = HEAP32[i9 + 456 >> 2] | 0;
     if ((i10 | 0) == 0) {
      i11 = i7;
     } else {
      i11 = (HEAP32[i10 + 1964 >> 2] | 0) + i7 | 0;
     }
     i10 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i9 + 40 | 0, 0) | 0;
     if ((i10 | 0) == 0) {
      i8 = i11;
      break;
     } else {
      i9 = i10;
      i7 = i11;
     }
    }
   }
   i7 = HEAP32[(HEAP32[i5 + 20 >> 2] | 0) + 8 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i7 >> 2] | 0) + 408 >> 2] & 127](i7, i8);
   i4 = HEAP32[i2 >> 2] | 0;
  }
 } while (0);
 if ((HEAP32[i4 + 496 >> 2] | 0) <= 0) {
  return;
 }
 i8 = HEAP32[i1 + 1976 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i12 = i4;
 } else {
  __ZN7WebCore27ScriptedAnimationController7suspendEv(i8);
  i12 = HEAP32[i2 >> 2] | 0;
 }
 __ZN7WebCore19AnimationController28suspendAnimationsForDocumentEPNS_8DocumentE(HEAP32[i12 + 476 >> 2] | 0, i1);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 256 >> 2] & 127](i1, 3);
 return;
}
function __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i2 = i1 + 327 | 0;
 i3 = HEAP8[i2] & 1;
 if ((HEAP32[i1 + 804 >> 2] | 0) < 1 | i3 << 24 >> 24 != 0) {
  __ZN7WebCore8Document12updateLayoutEv(i1);
  HEAP8[i2] = i3;
  return;
 }
 HEAP8[i2] = 1;
 i4 = HEAP32[i1 + 692 >> 2] | 0;
 L4 : do {
  if ((i4 | 0) != 0) {
   i5 = HEAP32[i4 + 36 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   i6 = (HEAP32[__ZN7WebCore9HTMLNames11framesetTagE >> 2] | 0) + 12 | 0;
   i7 = i5;
   while (1) {
    if ((HEAP32[i7 + 12 >> 2] & 20 | 0) == 20) {
     if ((HEAP32[(HEAP32[i7 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[i6 >> 2] | 0)) {
      i8 = 8;
      break;
     }
    }
    i9 = HEAP32[i7 + 28 >> 2] | 0;
    if ((i9 | 0) == 0) {
     i8 = 9;
     break;
    } else {
     i7 = i9;
    }
   }
   if ((i8 | 0) == 8) {
    if ((i7 | 0) == 0) {
     i8 = 9;
    } else {
     i10 = i7;
    }
   }
   if ((i8 | 0) == 9) {
    i6 = (HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0) + 12 | 0;
    i9 = i5;
    while (1) {
     if ((HEAP32[i9 + 12 >> 2] & 20 | 0) == 20) {
      if ((HEAP32[(HEAP32[i9 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[i6 >> 2] | 0)) {
       break;
      }
     }
     i11 = HEAP32[i9 + 28 >> 2] | 0;
     if ((i11 | 0) == 0) {
      break L4;
     } else {
      i9 = i11;
     }
    }
    if ((i9 | 0) == 0) {
     break;
    } else {
     i10 = i9;
    }
   }
   i6 = i10 + 32 | 0;
   if ((HEAP32[i10 + 12 >> 2] & 2048 | 0) == 0) {
    i12 = i6 | 0;
   } else {
    i12 = HEAP32[i6 >> 2] | 0;
   }
   if ((HEAP32[i12 >> 2] | 0) != 0) {
    break;
   }
   i6 = i1 + 328 | 0;
   if ((HEAP32[i6 >> 2] | 0) != 0) {
    break;
   }
   HEAP32[i6 >> 2] = 1;
   __ZN7WebCore8Document20styleResolverChangedENS_23StyleResolverUpdateFlagE(i1, 0);
   __ZN7WebCore8Document12updateLayoutEv(i1);
   HEAP8[i2] = i3;
   return;
  }
 } while (0);
 if ((HEAP8[i1 + 325 | 0] & 1) == 0) {
  __ZN7WebCore8Document12updateLayoutEv(i1);
  HEAP8[i2] = i3;
  return;
 }
 __ZN7WebCore8Document11recalcStyleENS_5Style6ChangeE(i1, 4);
 __ZN7WebCore8Document12updateLayoutEv(i1);
 HEAP8[i2] = i3;
 return;
}
function __ZN3WTF11VectorMoverILb0EN7WebCore7IconURLEE4moveEPS2_S4_S4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 if ((i1 | 0) == (i2 | 0)) {
  return;
 } else {
  i4 = i1;
  i5 = i3;
 }
 while (1) {
  HEAP32[i5 >> 2] = HEAP32[i4 >> 2];
  i3 = i4 + 4 | 0;
  i1 = HEAP32[i3 >> 2] | 0;
  HEAP32[i3 >> 2] = 0;
  HEAP32[i5 + 4 >> 2] = i1;
  i1 = i4 + 8 | 0;
  i6 = HEAP32[i1 >> 2] | 0;
  HEAP32[i1 >> 2] = 0;
  HEAP32[i5 + 8 >> 2] = i6;
  i6 = i4 + 12 | 0;
  i7 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = 0;
  HEAP32[i5 + 12 >> 2] = i7;
  i7 = i4 + 16 | 0;
  i8 = i5 + 16 | 0;
  i9 = HEAP8[i8] & -2 | HEAP8[i7] & 1;
  HEAP8[i8] = i9;
  HEAP8[i8] = i9 & -3 | HEAP8[i7] & 2;
  HEAP32[i5 + 20 >> 2] = HEAP32[i4 + 20 >> 2];
  HEAP32[i5 + 24 >> 2] = HEAP32[i4 + 24 >> 2];
  HEAP32[i5 + 28 >> 2] = HEAP32[i4 + 28 >> 2];
  HEAP32[i5 + 32 >> 2] = HEAP32[i4 + 32 >> 2];
  HEAP32[i5 + 36 >> 2] = HEAP32[i4 + 36 >> 2];
  HEAP32[i5 + 40 >> 2] = HEAP32[i4 + 40 >> 2];
  HEAP32[i5 + 44 >> 2] = HEAP32[i4 + 44 >> 2];
  HEAP32[i5 + 48 >> 2] = HEAP32[i4 + 48 >> 2];
  HEAP32[i5 + 52 >> 2] = HEAP32[i4 + 52 >> 2];
  HEAP32[i5 + 56 >> 2] = HEAP32[i4 + 56 >> 2];
  HEAP8[i5 + 60 | 0] = HEAP8[i4 + 60 | 0] & 1;
  i7 = HEAP32[i6 >> 2] | 0;
  do {
   if ((i7 | 0) != 0) {
    i6 = i7 | 0;
    i9 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
    if ((i9 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i7);
     break;
    } else {
     HEAP32[i6 >> 2] = i9;
     break;
    }
   }
  } while (0);
  i7 = HEAP32[i1 >> 2] | 0;
  do {
   if ((i7 | 0) != 0) {
    i9 = i7 | 0;
    i6 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
    if ((i6 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i7);
     break;
    } else {
     HEAP32[i9 >> 2] = i6;
     break;
    }
   }
  } while (0);
  i7 = HEAP32[i3 >> 2] | 0;
  do {
   if ((i7 | 0) != 0) {
    i1 = i7 | 0;
    i6 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
    if ((i6 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i7);
     break;
    } else {
     HEAP32[i1 >> 2] = i6;
     break;
    }
   }
  } while (0);
  i7 = i4 + 64 | 0;
  if ((i7 | 0) == (i2 | 0)) {
   break;
  } else {
   i4 = i7;
   i5 = i5 + 64 | 0;
  }
 }
 return;
}
function __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6OwnPtrIN7WebCore6LocaleEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_16AtomicStringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6rehashEiPS7_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = i2 - 1;
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
  i6 = HEAP32[i2 >> 2] | 0;
  if ((i6 | 0) == (-1 | 0) | (i6 | 0) == 0) {
   i12 = i11;
  } else {
   i6 = __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6OwnPtrIN7WebCore6LocaleEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_16AtomicStringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E8reinsertEOS7_(i1, i2) | 0;
   i12 = (i2 | 0) == (i3 | 0) ? i6 : i11;
  }
  i6 = i10 + 1 | 0;
  if ((i6 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i6;
   i11 = i12;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i13 = 0;
 } else {
  i8 = i12;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  i1 = i7 + (i13 << 3) | 0;
  i11 = HEAP32[i1 >> 2] | 0;
  do {
   if ((i11 | 0) != -1) {
    i10 = HEAP32[i7 + (i13 << 3) + 4 >> 2] | 0;
    if ((i10 | 0) == 0) {
     i14 = i11;
    } else {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 127](i10);
     i14 = HEAP32[i1 >> 2] | 0;
    }
    if ((i14 | 0) == 0) {
     break;
    }
    i10 = i14 | 0;
    i3 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
    if ((i3 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i14);
     break;
    } else {
     HEAP32[i10 >> 2] = i3;
     break;
    }
   }
  } while (0);
  i1 = i13 + 1 | 0;
  if ((i1 | 0) < (i5 | 0)) {
   i13 = i1;
  } else {
   i8 = i12;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN7WebCore8Document21prepareForDestructionEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 __ZN7WebCore13ContainerNode26disconnectDescendantFramesEv(i1 | 0);
 i2 = HEAP32[i1 + 336 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   if ((HEAP32[i1 + 332 >> 2] | 0) == 0) {
    break;
   }
   __ZN7WebCore9DOMWindow27willDetachDocumentFromFrameEv(i2);
  }
 } while (0);
 __ZN7WebCore8Document17destroyRenderTreeEv(i1);
 if ((HEAP8[i1 + 1576 | 0] & 8) != 0) {
  __ZN7WebCore14PluginDocument23detachFromPluginElementEv(i1);
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 264 >> 2] & 127](i1);
 __ZN7WebCore18DocumentEventQueue5closeEv(i1 + 1588 | 0);
 i2 = i1 + 1768 | 0;
 __ZN3WTF5DequeINS_6RefPtrIN7WebCore4NodeEEELj0EE10destroyAllEv(i2);
 HEAP32[i2 >> 2] = 0;
 HEAP32[i1 + 1772 >> 2] = 0;
 i2 = i1 + 1776 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i1 + 1780 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = i1 + 1788 | 0;
 __ZN3WTF5DequeINS_6RefPtrIN7WebCore4NodeEEELj0EE10destroyAllEv(i3);
 HEAP32[i3 >> 2] = 0;
 HEAP32[i1 + 1792 >> 2] = 0;
 i3 = i1 + 1796 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i1 + 1800 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 1392 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore21SVGDocumentExtensions15pauseAnimationsEv(i2);
 }
 i2 = i1 + 1976 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   HEAP32[i2 >> 2] = 0;
  } else {
   HEAP32[i3 + 16 >> 2] = 0;
   i4 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   if ((i4 | 0) == 0) {
    break;
   }
   i5 = i4 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) == 0) {
    __ZN7WebCore27ScriptedAnimationControllerD1Ev(i4);
    __ZN3WTF8fastFreeEPv(i4);
    break;
   } else {
    HEAP32[i5 >> 2] = i6;
    break;
   }
  }
 } while (0);
 __ZN7WebCore22SharedWorkerRepository16documentDetachedEPNS_8DocumentE(i1);
 i2 = HEAP32[i1 + 1952 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i7 = i1 + 332 | 0;
  HEAP32[i7 >> 2] = 0;
  return;
 }
 __ZN7WebCore17MediaQueryMatcher17documentDestroyedEv(i2);
 i7 = i1 + 332 | 0;
 HEAP32[i7 >> 2] = 0;
 return;
}
function __ZN7WebCore8Document23hoveredElementDidDetachEPNS_7ElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = i1 + 684 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0 | (i4 | 0) != (i2 | 0)) {
  return;
 }
 i4 = HEAP32[i2 + 16 >> 2] | 0;
 do {
  if ((i4 | 0) == 0) {
   i5 = 0;
   i6 = i2;
  } else {
   if ((HEAP32[i4 + 12 >> 2] & 4 | 0) == 0) {
    i5 = 0;
    i6 = i2;
    break;
   }
   i7 = i4 + 8 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
   i5 = i4;
   i6 = HEAP32[i3 >> 2] | 0;
  }
 } while (0);
 HEAP32[i3 >> 2] = i5;
 do {
  if ((i6 | 0) == 0) {
   i8 = i5;
  } else {
   i4 = i6 + 8 | 0;
   i2 = i4 | 0;
   i7 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i7;
   if ((i7 | 0) >= 1) {
    i9 = 9;
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    i9 = 9;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
   i9 = 9;
  }
 } while (0);
 while (1) {
  if ((i9 | 0) == 9) {
   i9 = 0;
   i8 = HEAP32[i3 >> 2] | 0;
  }
  if ((i8 | 0) == 0) {
   break;
  }
  i6 = i8 + 32 | 0;
  if ((HEAP32[i8 + 12 >> 2] & 2048 | 0) == 0) {
   i10 = i6 | 0;
  } else {
   i10 = HEAP32[i6 >> 2] | 0;
  }
  if ((HEAP32[i10 >> 2] | 0) != 0) {
   break;
  }
  i6 = HEAP32[i8 + 16 >> 2] | 0;
  do {
   if ((i6 | 0) == 0) {
    i11 = 0;
    i12 = i8;
   } else {
    if ((HEAP32[i6 + 12 >> 2] & 4 | 0) == 0) {
     i11 = 0;
     i12 = i8;
     break;
    }
    i5 = i6 + 8 | 0;
    HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
    i11 = i6;
    i12 = HEAP32[i3 >> 2] | 0;
   }
  } while (0);
  HEAP32[i3 >> 2] = i11;
  if ((i12 | 0) == 0) {
   i9 = 9;
   continue;
  }
  i6 = i12 + 8 | 0;
  i5 = i6 | 0;
  i4 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
  HEAP32[i5 >> 2] = i4;
  if ((i4 | 0) >= 1) {
   i9 = 9;
   continue;
  }
  if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
   i9 = 9;
   continue;
  }
  __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  i9 = 9;
 }
 i9 = HEAP32[i1 + 332 >> 2] | 0;
 if ((i9 | 0) == 0) {
  return;
 }
 __ZN7WebCore12EventHandler24scheduleHoverStateUpdateEv(HEAP32[i9 + 472 >> 2] | 0);
 return;
}
function __ZN7WebCore8Document22visibilityStateChangedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] | 0;
 i5 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 364 | 0;
 i6 = __ZN3WTF10fastMallocEj(56) | 0;
 __ZN7WebCore5EventC1ERKN3WTF12AtomicStringEbb(i6, i5, 0, 0);
 i5 = i3 | 0;
 HEAP32[i5 >> 2] = i6;
 FUNCTION_TABLE_iii[i4 & 15](i1 | 0, i3) | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 + 8 | 0;
   i4 = i5 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i4 >> 2] = i6;
    break;
   }
   i6 = i5 - 8 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 127](i6);
  }
 } while (0);
 i3 = i1 + 1508 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 i5 = i1 + 1512 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 i7 = i6 + (i4 << 2) | 0;
 if ((HEAP32[i1 + 1520 >> 2] | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 L11 : do {
  if ((i4 | 0) == 0) {
   i8 = i6;
  } else {
   i1 = i6;
   while (1) {
    i9 = HEAP32[i1 >> 2] | 0;
    if (!((i9 | 0) == (-1 | 0) | (i9 | 0) == 0)) {
     i8 = i1;
     break L11;
    }
    i1 = i1 + 4 | 0;
    if ((i1 | 0) == (i7 | 0)) {
     break;
    }
   }
   STACKTOP = i2;
   return;
  }
 } while (0);
 if ((i8 | 0) == (i7 | 0)) {
  STACKTOP = i2;
  return;
 } else {
  i10 = i8;
 }
 while (1) {
  i8 = HEAP32[i10 >> 2] | 0;
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 432 >> 2] & 127](i8);
  i8 = i10 + 4 | 0;
  L21 : do {
   if ((i8 | 0) == (i7 | 0)) {
    i11 = i7;
   } else {
    i6 = i8;
    while (1) {
     i4 = HEAP32[i6 >> 2] | 0;
     if (!((i4 | 0) == (-1 | 0) | (i4 | 0) == 0)) {
      i11 = i6;
      break L21;
     }
     i4 = i6 + 4 | 0;
     if ((i4 | 0) == (i7 | 0)) {
      i11 = i7;
      break;
     } else {
      i6 = i4;
     }
    }
   }
  } while (0);
  if ((i11 | 0) == ((HEAP32[i3 >> 2] | 0) + (HEAP32[i5 >> 2] << 2) | 0)) {
   break;
  } else {
   i10 = i11;
  }
 }
 STACKTOP = i2;
 return;
}
function __ZN7WebCore8Document20shouldScheduleLayoutEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 do {
  if ((HEAP32[i1 + 804 >> 2] | 0) > 0) {
   if ((HEAP8[i1 + 327 | 0] & 1) != 0) {
    i2 = 4;
    break;
   }
   i3 = HEAP32[i1 + 692 >> 2] | 0;
   i2 = 16;
  } else {
   i2 = 4;
  }
 } while (0);
 L4 : do {
  if ((i2 | 0) == 4) {
   i4 = HEAP32[i1 + 692 >> 2] | 0;
   if ((i4 | 0) == 0) {
    i5 = 0;
    return i5 | 0;
   }
   i6 = HEAP32[i4 + 36 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i7 = i4;
    break;
   }
   i8 = (HEAP32[__ZN7WebCore9HTMLNames11framesetTagE >> 2] | 0) + 12 | 0;
   i9 = i6;
   while (1) {
    if ((HEAP32[i9 + 12 >> 2] & 20 | 0) == 20) {
     if ((HEAP32[(HEAP32[i9 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[i8 >> 2] | 0)) {
      i2 = 10;
      break;
     }
    }
    i10 = HEAP32[i9 + 28 >> 2] | 0;
    if ((i10 | 0) == 0) {
     break;
    } else {
     i9 = i10;
    }
   }
   do {
    if ((i2 | 0) == 10) {
     if ((i9 | 0) == 0) {
      break;
     } else {
      i5 = 1;
     }
     return i5 | 0;
    }
   } while (0);
   i9 = (HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0) + 12 | 0;
   i8 = i6;
   while (1) {
    if ((HEAP32[i8 + 12 >> 2] & 20 | 0) == 20) {
     if ((HEAP32[(HEAP32[i8 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[i9 >> 2] | 0)) {
      break;
     }
    }
    i10 = HEAP32[i8 + 28 >> 2] | 0;
    if ((i10 | 0) == 0) {
     i3 = i4;
     i2 = 16;
     break L4;
    } else {
     i8 = i10;
    }
   }
   if ((i8 | 0) == 0) {
    i3 = i4;
    i2 = 16;
    break;
   } else {
    i5 = 1;
   }
   return i5 | 0;
  }
 } while (0);
 do {
  if ((i2 | 0) == 16) {
   if ((i3 | 0) == 0) {
    i5 = 0;
   } else {
    i7 = i3;
    break;
   }
   return i5 | 0;
  }
 } while (0);
 i3 = HEAP32[i7 + 44 >> 2] | 0;
 i7 = HEAP32[__ZN7WebCore9HTMLNames7htmlTagE >> 2] | 0;
 if ((i3 | 0) == (i7 | 0)) {
  i5 = 0;
  return i5 | 0;
 }
 if ((HEAP32[i3 + 12 >> 2] | 0) != (HEAP32[i7 + 12 >> 2] | 0)) {
  i5 = 1;
  return i5 | 0;
 }
 i5 = (HEAP32[i3 + 16 >> 2] | 0) != (HEAP32[i7 + 16 >> 2] | 0);
 return i5 | 0;
}
function __ZN3WTF15CaseFoldingHash4hashERNS_10StringImplE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 if ((HEAP32[i1 + 16 >> 2] & 32 | 0) == 0) {
  i4 = HEAP32[i1 + 8 >> 2] | 0;
  i5 = HEAP32[i1 + 4 >> 2] | 0;
  i6 = i3 | 0;
  HEAP32[i6 >> 2] = -1640531527;
  i7 = i3 + 4 | 0;
  HEAP8[i7] = 0;
  i8 = i3 + 6 | 0;
  HEAP16[i8 >> 1] = 0;
  __ZN3WTF12StringHasher28addCharactersAssumingAlignedItXadL_ZNS_15CaseFoldingHash8foldCaseItEEtT_EEEEvPKS4_j(i3, i4, i5);
  i5 = HEAP32[i6 >> 2] | 0;
  if ((HEAP8[i7] & 1) == 0) {
   i9 = i5;
  } else {
   i7 = (HEAPU16[i8 >> 1] | 0) + i5 | 0;
   i5 = i7 << 11 ^ i7;
   i9 = (i5 >>> 17) + i5 | 0;
  }
  i5 = i9 << 3 ^ i9;
  i9 = (i5 >>> 5) + i5 | 0;
  i5 = i9 << 2 ^ i9;
  i9 = (i5 >>> 15) + i5 | 0;
  i5 = (i9 << 10 ^ i9) & 16777215;
  i10 = (i5 | 0) == 0 ? 8388608 : i5;
  STACKTOP = i2;
  return i10 | 0;
 }
 i5 = HEAP32[i1 + 8 >> 2] | 0;
 i9 = HEAP32[i1 + 4 >> 2] | 0;
 i1 = (i9 & 1 | 0) == 0;
 i7 = i9 >>> 1;
 if ((i7 | 0) == 0) {
  i11 = i5;
  i12 = -1640531527;
 } else {
  i9 = i7;
  i8 = i5;
  i6 = -1640531527;
  while (1) {
   i4 = i9 - 1 | 0;
   i3 = (HEAPU16[__ZN3WTF10StringImpl19latin1CaseFoldTableE + ((HEAPU8[i8] | 0) << 1) >> 1] | 0) + i6 | 0;
   i13 = i3 << 16 ^ i3 ^ (HEAPU16[__ZN3WTF10StringImpl19latin1CaseFoldTableE + ((HEAPU8[i8 + 1 | 0] | 0) << 1) >> 1] | 0) << 11;
   i14 = (i13 >>> 11) + i13 | 0;
   if ((i4 | 0) == 0) {
    break;
   } else {
    i9 = i4;
    i8 = i8 + 2 | 0;
    i6 = i14;
   }
  }
  i11 = i5 + (i7 << 1) | 0;
  i12 = i14;
 }
 if (i1) {
  i15 = i12;
 } else {
  i1 = (HEAPU16[__ZN3WTF10StringImpl19latin1CaseFoldTableE + ((HEAPU8[i11] | 0) << 1) >> 1] | 0) + i12 | 0;
  i12 = i1 << 11 ^ i1;
  i15 = (i12 >>> 17) + i12 | 0;
 }
 i12 = i15 << 3 ^ i15;
 i15 = (i12 >>> 5) + i12 | 0;
 i12 = i15 << 2 ^ i15;
 i15 = (i12 >>> 15) + i12 | 0;
 i12 = (i15 << 10 ^ i15) & 16777215;
 i10 = (i12 | 0) == 0 ? 8388608 : i12;
 STACKTOP = i2;
 return i10 | 0;
}
function __ZN7WebCore8Document12implicitOpenEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 __ZN7WebCore8Document13cancelParsingEv(i1);
 __ZN7WebCore13ContainerNode14removeChildrenEv(i1 | 0);
 do {
  if ((HEAP8[i1 + 668 | 0] & 1) == 0) {
   i4 = i1 + 664 | 0;
   i5 = HEAP32[i4 >> 2] | 0;
   if ((i5 | 0) == 2) {
    break;
   }
   i6 = (i5 | 0) == 0;
   HEAP32[i4 >> 2] = 2;
   i5 = HEAP32[i1 + 1572 >> 2] | 0;
   if ((i5 | 0) == 0) {
    if (!i6) {
     break;
    }
   } else {
    __ZN7WebCore18SelectorQueryCache10invalidateEv(i5);
    if (!((HEAP32[i4 >> 2] | 0) == 0 ^ i6)) {
     break;
    }
   }
   i6 = i1 + 772 | 0;
   __ZN7WebCore28DocumentStyleSheetCollection18clearPageUserSheetEv(i6);
   __ZN7WebCore28DocumentStyleSheetCollection33invalidateInjectedStyleSheetCacheEv(i6);
  }
 } while (0);
 if (__ZNK7WebCore8Document33shouldDisplaySeamlesslyWithParentEv(i1) | 0) {
  __ZN7WebCore8Document20styleResolverChangedENS_23StyleResolverUpdateFlagE(i1, 1);
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 284 >> 2] & 127](i3, i1);
 i6 = i3 | 0;
 i3 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 i4 = i1 + 344 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i3;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 + 4 | 0;
   i4 = i3 | 0;
   i7 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i4 >> 2] = i7;
    break;
   }
   i7 = i3 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 127](i7);
  }
 } while (0);
 i5 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i6 = i5 + 4 | 0;
   i7 = i6 | 0;
   i3 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i7 >> 2] = i3;
    break;
   }
   i3 = i6 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 127](i3);
  }
 } while (0);
 __ZN7WebCore8Document10setParsingEb(i1, 1);
 __ZN7WebCore8Document13setReadyStateENS0_10ReadyStateE(i1, 0);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore8Document29elementInActiveChainDidDetachEPNS_7ElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = i1 + 688 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 if ((i1 | 0) == 0 | (i1 | 0) != (i2 | 0)) {
  return;
 }
 i1 = HEAP32[i2 + 16 >> 2] | 0;
 do {
  if ((i1 | 0) == 0) {
   i4 = 0;
   i5 = i2;
  } else {
   if ((HEAP32[i1 + 12 >> 2] & 4 | 0) == 0) {
    i4 = 0;
    i5 = i2;
    break;
   }
   i6 = i1 + 8 | 0;
   HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
   i4 = i1;
   i5 = HEAP32[i3 >> 2] | 0;
  }
 } while (0);
 HEAP32[i3 >> 2] = i4;
 do {
  if ((i5 | 0) == 0) {
   i7 = i4;
  } else {
   i1 = i5 + 8 | 0;
   i2 = i1 | 0;
   i6 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    i8 = 9;
    break;
   }
   if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
    i8 = 9;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
   i8 = 9;
  }
 } while (0);
 while (1) {
  if ((i8 | 0) == 9) {
   i8 = 0;
   i7 = HEAP32[i3 >> 2] | 0;
  }
  if ((i7 | 0) == 0) {
   i8 = 24;
   break;
  }
  i5 = i7 + 32 | 0;
  if ((HEAP32[i7 + 12 >> 2] & 2048 | 0) == 0) {
   i9 = i5 | 0;
  } else {
   i9 = HEAP32[i5 >> 2] | 0;
  }
  if ((HEAP32[i9 >> 2] | 0) != 0) {
   i8 = 25;
   break;
  }
  i5 = HEAP32[i7 + 16 >> 2] | 0;
  do {
   if ((i5 | 0) == 0) {
    i10 = 0;
    i11 = i7;
   } else {
    if ((HEAP32[i5 + 12 >> 2] & 4 | 0) == 0) {
     i10 = 0;
     i11 = i7;
     break;
    }
    i4 = i5 + 8 | 0;
    HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
    i10 = i5;
    i11 = HEAP32[i3 >> 2] | 0;
   }
  } while (0);
  HEAP32[i3 >> 2] = i10;
  if ((i11 | 0) == 0) {
   i8 = 9;
   continue;
  }
  i5 = i11 + 8 | 0;
  i4 = i5 | 0;
  i1 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
  HEAP32[i4 >> 2] = i1;
  if ((i1 | 0) >= 1) {
   i8 = 9;
   continue;
  }
  if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
   i8 = 9;
   continue;
  }
  __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  i8 = 9;
 }
 if ((i8 | 0) == 24) {
  return;
 } else if ((i8 | 0) == 25) {
  return;
 }
}
function __ZN7WebCore29eventTargetElementForDocumentEPNS_8DocumentE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 if ((i1 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = HEAP32[i1 + 680 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i2 = i3;
  return i2 | 0;
 }
 i3 = HEAP8[i1 + 1576 | 0] | 0;
 do {
  if ((i3 & 8) != 0) {
   i4 = HEAP32[i1 + 2336 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   } else {
    i2 = i4;
   }
   return i2 | 0;
  }
 } while (0);
 do {
  if ((i3 & 1) != 0) {
   i4 = HEAP32[i1 + 692 >> 2] | 0;
   L13 : do {
    if ((i4 | 0) == 0) {
     i5 = 0;
    } else {
     i6 = HEAP32[i4 + 36 >> 2] | 0;
     L15 : do {
      if ((i6 | 0) == 0) {
       i7 = 0;
      } else {
       i8 = (HEAP32[__ZN7WebCore9HTMLNames11framesetTagE >> 2] | 0) + 12 | 0;
       i9 = i6;
       while (1) {
        if ((HEAP32[i9 + 12 >> 2] & 20 | 0) == 20) {
         if ((HEAP32[(HEAP32[i9 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[i8 >> 2] | 0)) {
          i10 = 12;
          break;
         }
        }
        i11 = HEAP32[i9 + 28 >> 2] | 0;
        if ((i11 | 0) == 0) {
         break;
        } else {
         i9 = i11;
        }
       }
       do {
        if ((i10 | 0) == 12) {
         if ((i9 | 0) == 0) {
          break;
         }
         i5 = i9;
         break L13;
        }
       } while (0);
       i9 = (HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0) + 12 | 0;
       i8 = i6;
       while (1) {
        if ((HEAP32[i8 + 12 >> 2] & 20 | 0) == 20) {
         if ((HEAP32[(HEAP32[i8 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[i9 >> 2] | 0)) {
          i7 = i8;
          break L15;
         }
        }
        i11 = HEAP32[i8 + 28 >> 2] | 0;
        if ((i11 | 0) == 0) {
         i7 = 0;
         break;
        } else {
         i8 = i11;
        }
       }
      }
     } while (0);
     i5 = i7;
    }
   } while (0);
   if ((i5 | 0) == 0) {
    break;
   } else {
    i2 = i5 | 0;
   }
   return i2 | 0;
  }
 } while (0);
 i2 = HEAP32[i1 + 692 >> 2] | 0;
 return i2 | 0;
}
function __ZN7WebCore8Document23setVisualUpdatesAllowedEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = i1 + 2053 | 0;
 if ((HEAP8[i3] & 1 | 0) == (i2 & 1 | 0)) {
  return;
 }
 HEAP8[i3] = i2 & 1;
 i3 = i1 + 2056 | 0;
 if (!i2) {
  i2 = HEAP32[i1 + 332 >> 2] | 0;
  if ((i2 | 0) == 0) {
   __ZN7WebCore9TimerBase5startEdd(i3, +abort(120), +0);
   return;
  } else {
   __ZN7WebCore9TimerBase5startEdd(i3, +HEAPF64[(HEAP32[i2 + 36 >> 2] | 0) + 120 >> 3], +0);
   return;
  }
 }
 __ZN7WebCore9TimerBase4stopEv(i3);
 i3 = i1 + 332 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   i4 = 17;
  } else {
   i5 = HEAP32[i2 + 452 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i6 = i1 + 1584 | 0;
     if ((HEAP32[i6 >> 2] | 0) == 0) {
      break;
     }
     if (!(__ZNK7WebCore9FrameView13layoutPendingEv(i5) | 0)) {
      if ((HEAP32[(HEAP32[i6 >> 2] | 0) + 20 >> 2] & 31 | 0) == 0) {
       break;
      }
     }
     __ZN7WebCore8Document12updateLayoutEv(i1);
    }
   } while (0);
   i6 = HEAP32[i3 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i4 = 17;
    break;
   }
   i7 = HEAP32[i6 + 32 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i4 = 17;
    break;
   }
   if ((HEAP32[i6 + 28 >> 2] | 0) != (i6 | 0)) {
    i8 = i6;
    break;
   }
   __ZN7WebCore9FrameView25addPaintPendingMilestonesEj(i5, 32);
   if ((HEAP32[i7 + 212 >> 2] & 16 | 0) == 0) {
    i4 = 17;
    break;
   }
   __ZN7WebCore11FrameLoader9didLayoutEj((HEAP32[i3 >> 2] | 0) + 80 | 0, 16);
   i4 = 17;
  }
 } while (0);
 if ((i4 | 0) == 17) {
  i8 = HEAP32[i3 >> 2] | 0;
 }
 do {
  if ((i8 | 0) != 0) {
   i4 = HEAP32[i8 + 452 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   __ZN7WebCore9FrameView34updateCompositingLayersAfterLayoutEv(i4);
  }
 } while (0);
 i8 = HEAP32[i1 + 1584 >> 2] | 0;
 if ((i8 | 0) != 0) {
  __ZN7WebCore10RenderView30repaintViewAndCompositedLayersEv(i8);
 }
 i8 = HEAP32[i3 >> 2] | 0;
 if ((i8 | 0) == 0) {
  return;
 }
 __ZN7WebCore11FrameLoader27forcePageTransitionIfNeededEv(i8 + 80 | 0);
 return;
}
function __ZN7WebCore8Document15finishedParsingEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 HEAP8[i1 + 964 | 0] = 0;
 i4 = i1 + 332 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i6 = HEAP32[i5 + 452 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   __ZN7WebCore9FrameView16scheduleRelayoutEv(i6);
  }
 } while (0);
 i5 = HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] | 0;
 i6 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 424 | 0;
 i7 = __ZN3WTF10fastMallocEj(56) | 0;
 __ZN7WebCore5EventC1ERKN3WTF12AtomicStringEbb(i7, i6, 1, 0);
 i6 = i3 | 0;
 HEAP32[i6 >> 2] = i7;
 FUNCTION_TABLE_iii[i5 & 15](i1 | 0, i3) | 0;
 i3 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i6 = i3 + 8 | 0;
   i5 = i6 | 0;
   i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i5 >> 2] = i7;
    break;
   }
   i7 = i6 - 8 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 127](i7);
  }
 } while (0);
 i3 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 + 4 | 0;
   HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
   __ZN7WebCore8Document19updateStyleIfNeededEv(i1);
   __ZN7WebCore11FrameLoader15finishedParsingEv(i3 + 80 | 0);
   i4 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(HEAP32[i3 + 32 >> 2] | 0) | 0;
   if ((i4 | 0) != 0) {
    __ZN7WebCore24InspectorInstrumentation30domContentLoadedEventFiredImplEPNS_19InstrumentingAgentsEPNS_5FrameE(i4, i3);
   }
   i4 = i3 + 4 | 0;
   i7 = i4 | 0;
   i6 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i7 >> 2] = i6;
    break;
   }
   i6 = i4 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 127](i6);
  }
 } while (0);
 __ZN7WebCore9TimerBase5startEdd(i1 + 2120 | 0, +10, +0);
 __ZN7WebCore20CachedResourceLoader13clearPreloadsEv(HEAP32[i1 + 340 >> 2] | 0);
 STACKTOP = i2;
 return;
}
function __ZNK7WebCore8Document6cookieERi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i2 + 332 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i7 = HEAP32[i6 + 32 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   if ((HEAP8[(HEAP32[i7 + 48 >> 2] | 0) + 183 | 0] & 16) != 0) {
    break;
   }
   HEAP32[i1 >> 2] = 0;
   STACKTOP = i4;
   return;
  }
 } while (0);
 if ((HEAP8[(HEAP32[i2 + 100 >> 2] | 0) + 22 | 0] & 1) != 0) {
  HEAP32[i3 >> 2] = 18;
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 i3 = i5 | 0;
 i6 = HEAP32[i2 + 548 >> 2] | 0;
 HEAP32[i3 >> 2] = i6;
 if ((i6 | 0) == 0) {
  i8 = 0;
  i9 = 0;
  i10 = i5 + 4 | 0;
 } else {
  i7 = i6 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
  i7 = i5 + 4 | 0;
  i8 = HEAP8[i7] & -4;
  i9 = HEAP32[i3 >> 2] | 0;
  i10 = i7;
 }
 i7 = HEAP8[i2 + 552 | 0] | 0;
 HEAP8[i10] = i8 | i7 & 1 | i7 & 2;
 HEAP32[i5 + 8 >> 2] = HEAP32[i2 + 556 >> 2];
 HEAP32[i5 + 12 >> 2] = HEAP32[i2 + 560 >> 2];
 HEAP32[i5 + 16 >> 2] = HEAP32[i2 + 564 >> 2];
 HEAP32[i5 + 20 >> 2] = HEAP32[i2 + 568 >> 2];
 HEAP32[i5 + 24 >> 2] = HEAP32[i2 + 572 >> 2];
 HEAP32[i5 + 28 >> 2] = HEAP32[i2 + 576 >> 2];
 HEAP32[i5 + 32 >> 2] = HEAP32[i2 + 580 >> 2];
 HEAP32[i5 + 36 >> 2] = HEAP32[i2 + 584 >> 2];
 HEAP32[i5 + 40 >> 2] = HEAP32[i2 + 588 >> 2];
 HEAP32[i5 + 44 >> 2] = HEAP32[i2 + 592 >> 2];
 do {
  if ((i9 | 0) == 0) {
   i11 = 12;
  } else {
   if ((HEAP32[i9 + 4 >> 2] | 0) == 0) {
    i11 = 12;
    break;
   }
   __ZN7WebCore7cookiesEPKNS_8DocumentERKNS_3URLE(i1, i2, i5);
   i12 = HEAP32[i3 >> 2] | 0;
  }
 } while (0);
 if ((i11 | 0) == 12) {
  HEAP32[i1 >> 2] = 0;
  i12 = i9;
 }
 if ((i12 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i9 = i12 | 0;
 i1 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i12);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i9 >> 2] = i1;
  STACKTOP = i4;
  return;
 }
}
function __ZN3WTF5DequeINS_6RefPtrIN7WebCore8DocumentEEELj0EE10destroyAllEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i2 = i1 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 i5 = i1 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = i6 + (i4 << 2) | 0;
 if (i3 >>> 0 <= i4 >>> 0) {
  if ((i3 | 0) == (i4 | 0)) {
   return;
  }
  i8 = i6 + (i3 << 2) | 0;
  while (1) {
   i9 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i10 = i9 + 8 | 0;
     i11 = i10 | 0;
     i12 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
     HEAP32[i11 >> 2] = i12;
     if ((i12 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
    }
   } while (0);
   i8 = i8 + 4 | 0;
   if ((i8 | 0) == (i7 | 0)) {
    break;
   }
  }
  return;
 }
 if ((i4 | 0) == 0) {
  i13 = i6;
  i14 = i3;
 } else {
  i3 = i6;
  while (1) {
   i6 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i6 | 0) != 0) {
     i4 = i6 + 8 | 0;
     i8 = i4 | 0;
     i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     HEAP32[i8 >> 2] = i9;
     if ((i9 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
    }
   } while (0);
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i7 | 0)) {
    break;
   }
  }
  i13 = HEAP32[i5 >> 2] | 0;
  i14 = HEAP32[i2 >> 2] | 0;
 }
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 i1 = i13 + (i2 << 2) | 0;
 if ((i14 | 0) == (i2 | 0)) {
  return;
 }
 i2 = i13 + (i14 << 2) | 0;
 while (1) {
  i14 = HEAP32[i2 >> 2] | 0;
  do {
   if ((i14 | 0) != 0) {
    i13 = i14 + 8 | 0;
    i5 = i13 | 0;
    i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
    HEAP32[i5 >> 2] = i7;
    if ((i7 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
   }
  } while (0);
  i2 = i2 + 4 | 0;
  if ((i2 | 0) == (i1 | 0)) {
   break;
  }
 }
 return;
}
function __ZN3WTF5DequeINS_6RefPtrIN7WebCore4NodeEEELj0EE10destroyAllEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i2 = i1 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 i5 = i1 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = i6 + (i4 << 2) | 0;
 if (i3 >>> 0 <= i4 >>> 0) {
  if ((i3 | 0) == (i4 | 0)) {
   return;
  }
  i8 = i6 + (i3 << 2) | 0;
  while (1) {
   i9 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i10 = i9 + 8 | 0;
     i11 = i10 | 0;
     i12 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
     HEAP32[i11 >> 2] = i12;
     if ((i12 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
    }
   } while (0);
   i8 = i8 + 4 | 0;
   if ((i8 | 0) == (i7 | 0)) {
    break;
   }
  }
  return;
 }
 if ((i4 | 0) == 0) {
  i13 = i6;
  i14 = i3;
 } else {
  i3 = i6;
  while (1) {
   i6 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i6 | 0) != 0) {
     i4 = i6 + 8 | 0;
     i8 = i4 | 0;
     i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     HEAP32[i8 >> 2] = i9;
     if ((i9 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
    }
   } while (0);
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i7 | 0)) {
    break;
   }
  }
  i13 = HEAP32[i5 >> 2] | 0;
  i14 = HEAP32[i2 >> 2] | 0;
 }
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 i1 = i13 + (i2 << 2) | 0;
 if ((i14 | 0) == (i2 | 0)) {
  return;
 }
 i2 = i13 + (i14 << 2) | 0;
 while (1) {
  i14 = HEAP32[i2 >> 2] | 0;
  do {
   if ((i14 | 0) != 0) {
    i13 = i14 + 8 | 0;
    i5 = i13 | 0;
    i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
    HEAP32[i5 >> 2] = i7;
    if ((i7 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
   }
  } while (0);
  i2 = i2 + 4 | 0;
  if ((i2 | 0) == (i1 | 0)) {
   break;
  }
 }
 return;
}
function __ZN3WTF7HashSetIPN7WebCore21MediaCanStartListenerENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1, i2) {
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
  L4 : do {
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
      break L4;
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
 HEAP32[i5 >> 2] = -1;
 i5 = i1 + 16 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 i5 = i1 + 12 | 0;
 i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i7;
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 if (!((i7 * 6 & -1 | 0) < (i5 | 0) & (i5 | 0) > 8)) {
  i21 = 1;
  return i21 | 0;
 }
 __ZN3WTF9HashTableIPN7WebCore21MediaCanStartListenerES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1 | 0, (i5 | 0) / 2 & -1, 0) | 0;
 i21 = 1;
 return i21 | 0;
}
function __ZN3WTF7HashSetIPN7WebCore14HTMLCollectionENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1, i2) {
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
  L4 : do {
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
      break L4;
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
 HEAP32[i5 >> 2] = -1;
 i5 = i1 + 16 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 i5 = i1 + 12 | 0;
 i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i7;
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 if (!((i7 * 6 & -1 | 0) < (i5 | 0) & (i5 | 0) > 8)) {
  i21 = 1;
  return i21 | 0;
 }
 __ZN3WTF9HashTableIPN7WebCore14HTMLCollectionES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1 | 0, (i5 | 0) / 2 & -1, 0) | 0;
 i21 = 1;
 return i21 | 0;
}
function __ZN3WTF7HashSetIPN7WebCore12NodeIteratorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1, i2) {
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
 HEAP32[i5 >> 2] = -1;
 i5 = i1 + 16 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 i5 = i1 + 12 | 0;
 i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i7;
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 if (!((i7 * 6 & -1 | 0) < (i5 | 0) & (i5 | 0) > 8)) {
  i21 = 1;
  return i21 | 0;
 }
 __ZN3WTF9HashTableIPN7WebCore12NodeIteratorES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1 | 0, (i5 | 0) / 2 & -1, 0) | 0;
 i21 = 1;
 return i21 | 0;
}
function __ZN3WTF7HashSetIPN7WebCore12LiveNodeListENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1, i2) {
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
  L4 : do {
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
      break L4;
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
 HEAP32[i5 >> 2] = -1;
 i5 = i1 + 16 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 i5 = i1 + 12 | 0;
 i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i7;
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 if (!((i7 * 6 & -1 | 0) < (i5 | 0) & (i5 | 0) > 8)) {
  i21 = 1;
  return i21 | 0;
 }
 __ZN3WTF9HashTableIPN7WebCore12LiveNodeListES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1 | 0, (i5 | 0) / 2 & -1, 0) | 0;
 i21 = 1;
 return i21 | 0;
}
function __ZN3WTF7HashSetIPN7WebCore7ElementENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1, i2) {
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
  L4 : do {
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
      break L4;
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
 HEAP32[i5 >> 2] = -1;
 i5 = i1 + 16 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 i5 = i1 + 12 | 0;
 i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i7;
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 if (!((i7 * 6 & -1 | 0) < (i5 | 0) & (i5 | 0) > 8)) {
  i21 = 1;
  return i21 | 0;
 }
 __ZN3WTF9HashTableIPN7WebCore7ElementES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1 | 0, (i5 | 0) / 2 & -1, 0) | 0;
 i21 = 1;
 return i21 | 0;
}
function __ZN7WebCore8Document13setXMLVersionERKN3WTF6StringERi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i1 + 652 | 0;
 do {
  if ((HEAP32[i7 >> 2] | 0) == 0) {
   i8 = __ZN3WTF10fastMallocEj(8) | 0;
   __ZN7WebCore17DOMImplementationC1ERNS_8DocumentE(i8, i1);
   i9 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = i8;
   if ((i9 | 0) == 0) {
    break;
   }
   i8 = i9 | 0;
   if ((HEAP32[i8 >> 2] | 0) != 0) {
    __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i8);
   }
   __ZN3WTF8fastFreeEPv(i9);
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i5, H_BASE + 48 | 0);
 i7 = i6 | 0;
 HEAP32[i7 >> 2] = 0;
 i9 = __ZN7WebCore17DOMImplementation10hasFeatureERKN3WTF6StringES4_(i5, i6) | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i7 = i6 | 0;
   i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i7 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i5 = i6 | 0;
   i8 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i5 >> 2] = i8;
    break;
   }
  }
 } while (0);
 if (!i9) {
  HEAP32[i3 >> 2] = 9;
  STACKTOP = i4;
  return;
 }
 if (!(__ZN7WebCore17XMLDocumentParser18supportsXMLVersionERKN3WTF6StringE(i2) | 0)) {
  HEAP32[i3 >> 2] = 9;
  STACKTOP = i4;
  return;
 }
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i2 = i3 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 i2 = i1 + 1296 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i3;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i3 = i1 | 0;
 i2 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i3 >> 2] = i2;
  STACKTOP = i4;
  return;
 }
}
function __ZN3WTF7HashSetIPN7WebCore5RangeENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1, i2) {
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
 HEAP32[i5 >> 2] = -1;
 i5 = i1 + 16 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 i5 = i1 + 12 | 0;
 i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i7;
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 if (!((i7 * 6 & -1 | 0) < (i5 | 0) & (i5 | 0) > 8)) {
  i21 = 1;
  return i21 | 0;
 }
 __ZN3WTF9HashTableIPN7WebCore5RangeES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1 | 0, (i5 | 0) / 2 & -1, 0) | 0;
 i21 = 1;
 return i21 | 0;
}
function __ZN7WebCore8Document9setCookieERKN3WTF6StringERi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i1 + 332 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i7 = HEAP32[i6 + 32 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   if ((HEAP8[(HEAP32[i7 + 48 >> 2] | 0) + 183 | 0] & 16) != 0) {
    break;
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 if ((HEAP8[(HEAP32[i1 + 100 >> 2] | 0) + 22 | 0] & 1) != 0) {
  HEAP32[i3 >> 2] = 18;
  STACKTOP = i4;
  return;
 }
 i3 = i5 | 0;
 i6 = HEAP32[i1 + 548 >> 2] | 0;
 HEAP32[i3 >> 2] = i6;
 if ((i6 | 0) == 0) {
  i8 = 0;
  i9 = 0;
  i10 = i5 + 4 | 0;
 } else {
  i7 = i6 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
  i7 = i5 + 4 | 0;
  i8 = HEAP8[i7] & -4;
  i9 = HEAP32[i3 >> 2] | 0;
  i10 = i7;
 }
 i7 = HEAP8[i1 + 552 | 0] | 0;
 HEAP8[i10] = i8 | i7 & 1 | i7 & 2;
 HEAP32[i5 + 8 >> 2] = HEAP32[i1 + 556 >> 2];
 HEAP32[i5 + 12 >> 2] = HEAP32[i1 + 560 >> 2];
 HEAP32[i5 + 16 >> 2] = HEAP32[i1 + 564 >> 2];
 HEAP32[i5 + 20 >> 2] = HEAP32[i1 + 568 >> 2];
 HEAP32[i5 + 24 >> 2] = HEAP32[i1 + 572 >> 2];
 HEAP32[i5 + 28 >> 2] = HEAP32[i1 + 576 >> 2];
 HEAP32[i5 + 32 >> 2] = HEAP32[i1 + 580 >> 2];
 HEAP32[i5 + 36 >> 2] = HEAP32[i1 + 584 >> 2];
 HEAP32[i5 + 40 >> 2] = HEAP32[i1 + 588 >> 2];
 HEAP32[i5 + 44 >> 2] = HEAP32[i1 + 592 >> 2];
 if ((i9 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 do {
  if ((HEAP32[i9 + 4 >> 2] | 0) == 0) {
   i11 = i9;
  } else {
   __ZN7WebCore10setCookiesEPNS_8DocumentERKNS_3URLERKN3WTF6StringE(i1, i5, i2);
   i7 = HEAP32[i3 >> 2] | 0;
   if ((i7 | 0) != 0) {
    i11 = i7;
    break;
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 i3 = i11 | 0;
 i2 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i11);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i3 >> 2] = i2;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore8Document33webkitDidExitFullScreenForElementEPNS_7ElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 + 1688 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 if ((HEAP32[i1 + 1584 >> 2] | 0) == 0) {
  return;
 }
 if ((HEAP8[i1 + 2285 | 0] & 1) != 0) {
  return;
 }
 if ((HEAP8[i1 + 1433 | 0] & 1) != 0) {
  return;
 }
 __ZN7WebCore7Element62setContainsFullScreenElementOnAncestorsCrossingFrameBoundariesEb(i3, 0);
 HEAP8[i1 + 1684 | 0] = 0;
 i3 = HEAP32[i1 + 1704 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN7WebCore16RenderFullScreen14unwrapRendererEv(i3);
 }
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = HEAP32[i3 + 16 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = i3;
 } else {
  __ZN7WebCore4Node19setNeedsStyleRecalcENS_15StyleChangeTypeE(i4 | 0, 65536);
  i5 = HEAP32[i2 >> 2] | 0;
 }
 HEAP32[i2 >> 2] = 0;
 do {
  if ((i5 | 0) != 0) {
   i2 = i5 + 8 | 0;
   i4 = i2 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i3;
   if ((i3 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 HEAP8[i1 + 1080 | 0] = 1;
 __ZN7WebCore8Document19scheduleStyleRecalcEv(i1);
 L24 : do {
  if ((HEAP32[i1 + 1768 >> 2] | 0) == (HEAP32[i1 + 1772 >> 2] | 0)) {
   if ((HEAP32[i1 + 1788 >> 2] | 0) != (HEAP32[i1 + 1792 >> 2] | 0)) {
    i6 = i1;
    break;
   }
   i5 = HEAP32[i1 + 332 >> 2] | 0;
   if ((i5 | 0) == 0) {
    i6 = i1;
    break;
   } else {
    i7 = i1;
    i8 = i5;
   }
   while (1) {
    i5 = HEAP32[i8 + 448 >> 2] | 0;
    if ((i5 | 0) == 0) {
     i6 = i7;
     break L24;
    }
    i2 = HEAP32[(HEAP32[i5 + 20 >> 2] | 0) + 8 >> 2] | 0;
    i5 = HEAP32[i2 + 332 >> 2] | 0;
    if ((i5 | 0) == 0) {
     i6 = i2;
     break;
    } else {
     i7 = i2;
     i8 = i5;
    }
   }
  } else {
   i6 = i1;
  }
 } while (0);
 __ZN7WebCore9TimerBase5startEdd(i6 + 1712 | 0, +0, +0);
 return;
}
function __ZN7WebCore8Document10addMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringES6_jjNS3_10PassRefPtrINS_15ScriptCallStackEEEPN3JSC9ExecStateEm(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10) {
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
 var i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i12 = i11 | 0;
 i13 = i11 + 8 | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 296 >> 2] & 127](i1) | 0)) {
  i14 = HEAP32[(HEAP32[i1 >> 2] | 0) + 288 >> 2] | 0;
  i15 = __ZN3WTF10fastMallocEj(16) | 0;
  HEAP32[i15 >> 2] = __ZTVN7WebCore22ScriptExecutionContext21AddConsoleMessageTaskE + 8;
  HEAP32[i15 + 4 >> 2] = i2;
  HEAP32[i15 + 8 >> 2] = i3;
  __ZNKR3WTF6String12isolatedCopyEv(i15 + 12 | 0, i4);
  i16 = i12 | 0;
  HEAP32[i16 >> 2] = i15;
  FUNCTION_TABLE_vii[i14 & 127](i1, i12);
  i12 = HEAP32[i16 >> 2] | 0;
  if ((i12 | 0) == 0) {
   STACKTOP = i11;
   return;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 127](i12);
  STACKTOP = i11;
  return;
 }
 i12 = HEAP32[i1 + 332 >> 2] | 0;
 if ((i12 | 0) == 0) {
  STACKTOP = i11;
  return;
 }
 i1 = HEAP32[i12 + 32 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i11;
  return;
 }
 i12 = HEAP32[i1 + 1148 >> 2] | 0;
 i1 = i13 | 0;
 i16 = i8 | 0;
 i8 = HEAP32[i16 >> 2] | 0;
 HEAP32[i16 >> 2] = 0;
 HEAP32[i1 >> 2] = i8;
 __ZN7WebCore11PageConsole10addMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringES6_jjNS3_10PassRefPtrINS_15ScriptCallStackEEEPN3JSC9ExecStateEm(i12, i2, i3, i4, i5, i6, i7, i13, i9, i10);
 i10 = HEAP32[i1 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i11;
  return;
 }
 i1 = i10 | 0;
 i9 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i9 | 0) == 0) {
  __ZN7WebCore15ScriptCallStackD1Ev(i10);
  __ZN3WTF8fastFreeEPv(i10);
  STACKTOP = i11;
  return;
 } else {
  HEAP32[i1 >> 2] = i9;
  STACKTOP = i11;
  return;
 }
}
function __ZN7WebCore8Document6setURLERKNS_3URLE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = 3;
 } else {
  if ((HEAP32[i3 + 4 >> 2] | 0) == 0) {
   i4 = 3;
  } else {
   i5 = i2;
   i6 = i3;
  }
 }
 if ((i4 | 0) == 3) {
  i4 = __ZN7WebCore8blankURLEv() | 0;
  i5 = i4;
  i6 = HEAP32[i4 >> 2] | 0;
 }
 i4 = i1 + 356 | 0;
 if (__ZN3WTF5equalEPKNS_10StringImplES2_(i6, HEAP32[i4 >> 2] | 0) | 0) {
  return;
 }
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) != 0) {
  i3 = i6 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i6;
 do {
  if ((i3 | 0) != 0) {
   i6 = i3 | 0;
   i2 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i6 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i3 = i5 + 4 | 0;
 i2 = i1 + 360 | 0;
 i6 = HEAP8[i2] & -2 | HEAP8[i3] & 1;
 HEAP8[i2] = i6;
 HEAP8[i2] = i6 & -3 | HEAP8[i3] & 2;
 HEAP32[i1 + 364 >> 2] = HEAP32[i5 + 8 >> 2];
 HEAP32[i1 + 368 >> 2] = HEAP32[i5 + 12 >> 2];
 HEAP32[i1 + 372 >> 2] = HEAP32[i5 + 16 >> 2];
 HEAP32[i1 + 376 >> 2] = HEAP32[i5 + 20 >> 2];
 HEAP32[i1 + 380 >> 2] = HEAP32[i5 + 24 >> 2];
 HEAP32[i1 + 384 >> 2] = HEAP32[i5 + 28 >> 2];
 HEAP32[i1 + 388 >> 2] = HEAP32[i5 + 32 >> 2];
 HEAP32[i1 + 392 >> 2] = HEAP32[i5 + 36 >> 2];
 HEAP32[i1 + 396 >> 2] = HEAP32[i5 + 40 >> 2];
 HEAP32[i1 + 400 >> 2] = HEAP32[i5 + 44 >> 2];
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i4 = i5 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i1 + 644 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i5;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 | 0;
   i4 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i5 >> 2] = i4;
    break;
   }
  }
 } while (0);
 __ZN7WebCore8Document13updateBaseURLEv(i1);
 return;
}
function __ZN7WebCore8Document23addListenerTypeIfNeededERKN3WTF12AtomicStringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) == (HEAP32[i3 + 420 >> 2] | 0)) {
  i2 = i1 + 768 | 0;
  HEAP16[i2 >> 1] = HEAP16[i2 >> 1] | 1;
  return;
 }
 if ((i4 | 0) == (HEAP32[i3 + 404 >> 2] | 0)) {
  i2 = i1 + 768 | 0;
  HEAP16[i2 >> 1] = HEAP16[i2 >> 1] | 2;
  return;
 }
 if ((i4 | 0) == (HEAP32[i3 + 412 >> 2] | 0)) {
  i2 = i1 + 768 | 0;
  HEAP16[i2 >> 1] = HEAP16[i2 >> 1] | 4;
  return;
 }
 if ((i4 | 0) == (HEAP32[i3 + 416 >> 2] | 0)) {
  i2 = i1 + 768 | 0;
  HEAP16[i2 >> 1] = HEAP16[i2 >> 1] | 8;
  return;
 }
 if ((i4 | 0) == (HEAP32[i3 + 408 >> 2] | 0)) {
  i2 = i1 + 768 | 0;
  HEAP16[i2 >> 1] = HEAP16[i2 >> 1] | 16;
  return;
 }
 if ((i4 | 0) == (HEAP32[i3 + 400 >> 2] | 0)) {
  i2 = i1 + 768 | 0;
  HEAP16[i2 >> 1] = HEAP16[i2 >> 1] | 32;
  return;
 }
 if ((i4 | 0) == (HEAP32[i3 + 284 >> 2] | 0)) {
  i2 = i1 + 768 | 0;
  HEAP16[i2 >> 1] = HEAP16[i2 >> 1] | 64;
  return;
 }
 if ((i4 | 0) == (HEAP32[i3 + 608 >> 2] | 0)) {
  i2 = i1 + 768 | 0;
  HEAP16[i2 >> 1] = HEAP16[i2 >> 1] | 256;
  return;
 }
 if ((i4 | 0) == (HEAP32[i3 + 604 >> 2] | 0)) {
  i2 = i1 + 768 | 0;
  HEAP16[i2 >> 1] = HEAP16[i2 >> 1] | 128;
  return;
 }
 if ((i4 | 0) == (HEAP32[i3 + 612 >> 2] | 0)) {
  i2 = i1 + 768 | 0;
  HEAP16[i2 >> 1] = HEAP16[i2 >> 1] | 512;
  return;
 }
 do {
  if ((i4 | 0) != (HEAP32[i3 + 616 >> 2] | 0)) {
   if ((i4 | 0) == (HEAP32[i3 + 620 >> 2] | 0)) {
    break;
   }
   if ((i4 | 0) == (HEAP32[i3 + 16 >> 2] | 0)) {
    i2 = i1 + 768 | 0;
    HEAP16[i2 >> 1] = HEAP16[i2 >> 1] | 2048;
    return;
   }
   if ((i4 | 0) != (HEAP32[i3 + 316 >> 2] | 0)) {
    return;
   }
   i2 = i1 + 768 | 0;
   HEAP16[i2 >> 1] = HEAP16[i2 >> 1] | 4096;
   return;
  }
 } while (0);
 i3 = i1 + 768 | 0;
 HEAP16[i3 >> 1] = HEAP16[i3 >> 1] | 1024;
 return;
}
function __ZN7WebCore8Document39addDocumentToFullScreenChangeEventQueueEPS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = HEAP32[i2 + 1700 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   i4 = 5;
  } else {
   i5 = _llvm_uadd_with_overflow_i32(i3 | 0, -1 | 0) | 0;
   if (tempRet0) {
    i6 = HEAP32[(HEAP32[i2 + 1692 >> 2] | 0) + (i5 << 2) >> 2] | 0;
    if ((i6 | 0) == 0) {
     i4 = 5;
     break;
    } else {
     i7 = i6;
     break;
    }
   } else {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
  }
 } while (0);
 if ((i4 | 0) == 5) {
  i7 = HEAP32[i2 + 1688 >> 2] | 0;
 }
 i3 = (i7 | 0) == 0 ? i2 | 0 : i7 | 0;
 i7 = i1 + 1768 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 i6 = i1 + 1772 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   i8 = HEAP32[i1 + 1780 >> 2] | 0;
   if ((i5 | 0) == 0) {
    if ((i8 | 0) == 0) {
     i4 = 11;
     break;
    } else {
     i9 = 0;
     break;
    }
   } else {
    if ((i5 | 0) == (i8 - 1 | 0)) {
     i4 = 11;
     break;
    } else {
     i9 = i5;
     break;
    }
   }
  } else {
   if ((i5 + 1 | 0) == (i2 | 0)) {
    i4 = 11;
   } else {
    i9 = i5;
   }
  }
 } while (0);
 if ((i4 | 0) == 11) {
  __ZN3WTF5DequeINS_6RefPtrIN7WebCore4NodeEEELj0EE14expandCapacityEv(i7);
  i9 = HEAP32[i6 >> 2] | 0;
 }
 HEAP32[(HEAP32[i1 + 1776 >> 2] | 0) + (i9 << 2) >> 2] = i3;
 if ((i3 | 0) == 0) {
  i10 = HEAP32[i6 >> 2] | 0;
  i11 = i1 + 1780 | 0;
  i12 = HEAP32[i11 >> 2] | 0;
  i13 = i12 - 1 | 0;
  i14 = (i10 | 0) == (i13 | 0);
  i15 = i10 + 1 | 0;
  i16 = i14 ? 0 : i15;
  HEAP32[i6 >> 2] = i16;
  return;
 }
 i9 = i3 + 8 | 0;
 HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 i10 = HEAP32[i6 >> 2] | 0;
 i11 = i1 + 1780 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 i13 = i12 - 1 | 0;
 i14 = (i10 | 0) == (i13 | 0);
 i15 = i10 + 1 | 0;
 i16 = i14 ? 0 : i15;
 HEAP32[i6 >> 2] = i16;
 return;
}
function __ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = i3;
  return;
 }
 i3 = i1 + 76 | 0;
 i2 = i3;
 if ((HEAP8[i2 + 29 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 100 | 0);
 }
 if ((HEAP8[i2 + 21 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 92 | 0);
 }
 if ((HEAP8[i2 + 13 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 84 | 0);
 }
 if ((HEAP8[i2 + 5 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i3);
 }
 i3 = i1 + 44 | 0;
 i2 = i3;
 if ((HEAP8[i2 + 29 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 68 | 0);
 }
 if ((HEAP8[i2 + 21 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 60 | 0);
 }
 if ((HEAP8[i2 + 13 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 52 | 0);
 }
 if ((HEAP8[i2 + 5 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i3);
 }
 i3 = i1 + 12 | 0;
 i2 = i3;
 if ((HEAP8[i2 + 29 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 36 | 0);
 }
 if ((HEAP8[i2 + 21 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 28 | 0);
 }
 if ((HEAP8[i2 + 13 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 20 | 0);
 }
 if ((HEAP8[i2 + 5 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i3);
 }
 i3 = HEAP32[i1 + 8 >> 2] | 0;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 127](i5);
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore8Document14didReceiveTaskEPv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = i1;
 i3 = HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] | 0;
 L1 : do {
  if ((i3 | 0) == 0) {
   i4 = 12;
  } else {
   i5 = HEAP32[i3 + 332 >> 2] | 0;
   do {
    if ((i5 | 0) == 0) {
     i4 = 6;
    } else {
     i6 = HEAP32[i5 + 32 >> 2] | 0;
     if ((i6 | 0) == 0) {
      i4 = 6;
      break;
     }
     if ((HEAP8[i6 + 98 | 0] & 1) == 0) {
      i4 = 6;
      break;
     }
     i7 = i3 + 2048 | 0;
    }
   } while (0);
   do {
    if ((i4 | 0) == 6) {
     i5 = i3 + 2048 | 0;
     if ((HEAP32[i5 >> 2] | 0) != 0) {
      i7 = i5;
      break;
     }
     i5 = i1 + 4 | 0;
     i6 = HEAP32[i5 >> 2] | 0;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] & 127](i6, i3 + 88 | 0);
     i8 = i5;
     break L1;
    }
   } while (0);
   i5 = i3 + 2040 | 0;
   i6 = i1 + 4 | 0;
   i9 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = 0;
   i6 = HEAP32[i7 >> 2] | 0;
   if ((i6 | 0) == (HEAP32[i3 + 2044 >> 2] | 0)) {
    __ZN3WTF6VectorINS_6OwnPtrIN7WebCore22ScriptExecutionContext4TaskEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i5, i6 + 1 | 0);
    HEAP32[(HEAP32[i5 >> 2] | 0) + (HEAP32[i7 >> 2] << 2) >> 2] = i9;
   } else {
    HEAP32[(HEAP32[i5 >> 2] | 0) + (i6 << 2) >> 2] = i9;
   }
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
   if ((i1 | 0) != 0) {
    i4 = 12;
    break;
   }
   return;
  }
 } while (0);
 if ((i4 | 0) == 12) {
  i8 = i1 + 4 | 0;
 }
 i4 = HEAP32[i8 >> 2] | 0;
 if ((i4 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 127](i4);
 }
 i4 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 | 0;
   if (((tempValue = HEAP32[i2 >> 2] | 0, HEAP32[i2 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN3WTF8fastFreeEPv(i4);
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN3WTF9HashTableINS_6RefPtrIN7WebCore7ElementEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E8reinsertEOS4_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i2 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 i5 = i2;
 i6 = i5 + ~(i5 << 15) | 0;
 i5 = (i6 >>> 10 ^ i6) * 9 & -1;
 i6 = i5 >>> 6 ^ i5;
 i5 = i6 + ~(i6 << 11) | 0;
 i6 = i5 >>> 16 ^ i5;
 i5 = i6 & i4;
 i7 = i3 + (i5 << 2) | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 L1 : do {
  if ((i8 | 0) == 0) {
   i9 = 0;
   i10 = i7;
   i11 = 3;
  } else {
   i12 = (i6 >>> 23) + ~i6 | 0;
   i13 = i12 << 12 ^ i12;
   i12 = i13 >>> 7 ^ i13;
   i13 = i12 << 2 ^ i12;
   i12 = i13 >>> 20 ^ i13 | 1;
   i13 = 0;
   i14 = 0;
   i15 = i5;
   i16 = i7;
   i17 = i8;
   while (1) {
    if ((i17 | 0) == (i2 | 0)) {
     i18 = i16;
     break L1;
    }
    i19 = (i17 | 0) == -1 ? i16 : i13;
    i20 = (i14 | 0) == 0 ? i12 : i14;
    i21 = i20 + i15 & i4;
    i22 = i3 + (i21 << 2) | 0;
    i23 = HEAP32[i22 >> 2] | 0;
    if ((i23 | 0) == 0) {
     i9 = i19;
     i10 = i22;
     i11 = 3;
     break;
    } else {
     i13 = i19;
     i14 = i20;
     i15 = i21;
     i16 = i22;
     i17 = i23;
    }
   }
  }
 } while (0);
 if ((i11 | 0) == 3) {
  i18 = (i9 | 0) != 0 ? i9 : i10;
 }
 i10 = i18 | 0;
 i9 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i11 = i9 + 8 | 0;
   i3 = i11 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   HEAP32[i3 >> 2] = i4;
   if ((i4 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
  }
 } while (0);
 i9 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i10 >> 2] = i9;
 return i18 | 0;
}
function __ZN7WebCore7IconURLaSEOS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = HEAP32[i2 >> 2];
 i3 = i2 + 4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i3 = i1 + 4 | 0;
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
 i5 = i2 + 8 | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 i5 = i1 + 8 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i3;
 do {
  if ((i4 | 0) != 0) {
   i3 = i4 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i3 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i4 = i2 + 12 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 i4 = i1 + 12 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i5;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 | 0;
   i4 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i5 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i3 = i2 + 16 | 0;
 i4 = i1 + 16 | 0;
 i5 = HEAP8[i4] & -2 | HEAP8[i3] & 1;
 HEAP8[i4] = i5;
 HEAP8[i4] = i5 & -3 | HEAP8[i3] & 2;
 HEAP32[i1 + 20 >> 2] = HEAP32[i2 + 20 >> 2];
 HEAP32[i1 + 24 >> 2] = HEAP32[i2 + 24 >> 2];
 HEAP32[i1 + 28 >> 2] = HEAP32[i2 + 28 >> 2];
 HEAP32[i1 + 32 >> 2] = HEAP32[i2 + 32 >> 2];
 HEAP32[i1 + 36 >> 2] = HEAP32[i2 + 36 >> 2];
 HEAP32[i1 + 40 >> 2] = HEAP32[i2 + 40 >> 2];
 HEAP32[i1 + 44 >> 2] = HEAP32[i2 + 44 >> 2];
 HEAP32[i1 + 48 >> 2] = HEAP32[i2 + 48 >> 2];
 HEAP32[i1 + 52 >> 2] = HEAP32[i2 + 52 >> 2];
 HEAP32[i1 + 56 >> 2] = HEAP32[i2 + 56 >> 2];
 HEAP8[i1 + 60 | 0] = HEAP8[i2 + 60 | 0] & 1;
 return i1 | 0;
}
function __ZN7WebCore8Document31setWindowAttributeEventListenerERKN3WTF12AtomicStringERKNS_13QualifiedNameES4_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = HEAP32[i1 + 332 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore19JSLazyEventListener18createForDOMWindowERNS_5FrameERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i7, i8, i3, i4);
 i4 = i7 | 0;
 i7 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 i3 = HEAP32[i1 + 336 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   if ((i7 | 0) == 0) {
    break;
   }
   i1 = i7 + 4 | 0;
   i8 = i1 | 0;
   i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i8 >> 2] = i9;
    break;
   }
   i9 = i1 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 127](i9);
  } else {
   i9 = i6 | 0;
   HEAP32[i9 >> 2] = i7;
   __ZN7WebCore11EventTarget25setAttributeEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEE(i3 | 0, i2, i6) | 0;
   i1 = HEAP32[i9 >> 2] | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   i9 = i1 + 4 | 0;
   i1 = i9 | 0;
   i8 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i1 >> 2] = i8;
    break;
   }
   i8 = i9 - 4 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 127](i8);
  }
 } while (0);
 i6 = HEAP32[i4 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i4 = i6 + 4 | 0;
 i6 = i4 | 0;
 i2 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i6 >> 2] = i2;
  STACKTOP = i5;
  return;
 }
 i2 = i4 - 4 | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 127](i2);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore8Document13createElementERKNS_13QualifiedNameEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = HEAP32[(HEAP32[i3 >> 2] | 0) + 16 >> 2] | 0;
 do {
  if ((i10 | 0) == (HEAP32[__ZN7WebCore9HTMLNames17xhtmlNamespaceURIE >> 2] | 0)) {
   __ZN7WebCore18HTMLElementFactory13createElementERKNS_13QualifiedNameERNS_8DocumentEPNS_15HTMLFormElementEb(i6, i3, i2, 0, i4);
   i11 = i6 | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   HEAP32[i11 >> 2] = 0;
   i13 = i12 | 0;
   i14 = 7;
  } else {
   if ((i10 | 0) == (HEAP32[__ZN7WebCore8SVGNames15svgNamespaceURIE >> 2] | 0)) {
    __ZN7WebCore17SVGElementFactory13createElementERKNS_13QualifiedNameERNS_8DocumentEb(i7, i3, i2, i4);
    i12 = i7 | 0;
    i11 = HEAP32[i12 >> 2] | 0;
    HEAP32[i12 >> 2] = 0;
    i13 = i11 | 0;
    i14 = 7;
    break;
   }
   if ((i10 | 0) != (HEAP32[__ZN7WebCore11MathMLNames18mathmlNamespaceURIE >> 2] | 0)) {
    break;
   }
   __ZN7WebCore20MathMLElementFactory13createElementERKNS_13QualifiedNameERNS_8DocumentEb(i8, i3, i2, i4);
   i11 = i8 | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   HEAP32[i11 >> 2] = 0;
   i13 = i12 | 0;
   i14 = 7;
  }
 } while (0);
 do {
  if ((i14 | 0) == 7) {
   if ((i13 | 0) == 0) {
    break;
   }
   HEAP8[i2 + 1580 | 0] = 1;
   i15 = i13;
   i16 = i1 | 0;
   HEAP32[i16 >> 2] = i15;
   STACKTOP = i5;
   return;
  }
 } while (0);
 __ZN7WebCore7Element6createERKNS_13QualifiedNameERNS_8DocumentE(i9, i3, HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0);
 i2 = i9 | 0;
 i9 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i15 = i9;
 i16 = i1 | 0;
 HEAP32[i16 >> 2] = i15;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore17NodeListsNodeData19addCachedCollectionINS_22DocumentNameCollectionENS_8DocumentEEEN3WTF10PassRefPtrIT_EERT0_NS_14CollectionTypeERKNS4_12AtomicStringE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i7 = i6 | 0;
 i8 = i6 + 16 | 0;
 i9 = i6 + 24 | 0;
 HEAP8[i8 | 0] = i4;
 i10 = i8 + 4 | 0;
 i11 = HEAP32[i5 >> 2] | 0;
 HEAP32[i10 >> 2] = i11;
 if ((i11 | 0) != 0) {
  i12 = i11 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
 }
 HEAP32[i9 >> 2] = 0;
 __ZN3WTF9HashTableINSt3__14pairIhNS_12AtomicStringEEENS_12KeyValuePairIS4_PN7WebCore14HTMLCollectionEEENS_24KeyValuePairKeyExtractorIS9_EENS6_17NodeListsNodeData25NodeListCacheMapEntryHashIS3_EENS_7HashMapIS4_S8_SE_NS_10HashTraitsIS4_EENSG_IS8_EEE18KeyValuePairTraitsESH_E3addINS_17HashMapTranslatorISK_SE_EES4_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS4_S9_SB_SE_SK_SH_EEEEOT0_OT1_(i7, i2 + 68 | 0, i8, i9);
 i9 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i10 = i9 | 0;
   i8 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i10 >> 2] = i8;
    break;
   }
  }
 } while (0);
 if ((HEAP8[i7 + 8 | 0] & 1) != 0) {
  i9 = __ZN3WTF10fastMallocEj(80) | 0;
  __ZN7WebCore18HTMLNameCollectionC2ERNS_8DocumentENS_14CollectionTypeERKN3WTF12AtomicStringE(i9, i3, i4, i5);
  HEAP32[i9 >> 2] = H_BASE + 1960;
  HEAP32[(HEAP32[i7 >> 2] | 0) + 8 >> 2] = i9;
  HEAP32[i1 >> 2] = i9;
  STACKTOP = i6;
  return;
 }
 i9 = HEAP32[(HEAP32[i7 >> 2] | 0) + 8 >> 2] | 0;
 HEAP32[i1 >> 2] = i9;
 if ((i9 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i1 = i9 + 8 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 STACKTOP = i6;
 return;
}
function __ZN3WTF5DequeIN7WebCore18SegmentedSubstringELj0EE10destroyAllEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = i1 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 i5 = i1 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = i6 + (i4 << 4) | 0;
 if (i3 >>> 0 <= i4 >>> 0) {
  if ((i3 | 0) == (i4 | 0)) {
   return;
  }
  i8 = i6 + (i3 << 4) | 0;
  while (1) {
   i9 = HEAP32[i8 + 12 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i10 = i9 | 0;
     i11 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
     if ((i11 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i9);
      break;
     } else {
      HEAP32[i10 >> 2] = i11;
      break;
     }
    }
   } while (0);
   i8 = i8 + 16 | 0;
   if ((i8 | 0) == (i7 | 0)) {
    break;
   }
  }
  return;
 }
 if ((i4 | 0) == 0) {
  i12 = i6;
  i13 = i3;
 } else {
  i3 = i6;
  while (1) {
   i6 = HEAP32[i3 + 12 >> 2] | 0;
   do {
    if ((i6 | 0) != 0) {
     i4 = i6 | 0;
     i8 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i6);
      break;
     } else {
      HEAP32[i4 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i3 = i3 + 16 | 0;
   if ((i3 | 0) == (i7 | 0)) {
    break;
   }
  }
  i12 = HEAP32[i5 >> 2] | 0;
  i13 = HEAP32[i2 >> 2] | 0;
 }
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 i1 = i12 + (i2 << 4) | 0;
 if ((i13 | 0) == (i2 | 0)) {
  return;
 }
 i2 = i12 + (i13 << 4) | 0;
 while (1) {
  i13 = HEAP32[i2 + 12 >> 2] | 0;
  do {
   if ((i13 | 0) != 0) {
    i12 = i13 | 0;
    i5 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
    if ((i5 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i13);
     break;
    } else {
     HEAP32[i12 >> 2] = i5;
     break;
    }
   }
  } while (0);
  i2 = i2 + 16 | 0;
  if ((i2 | 0) == (i1 | 0)) {
   break;
  }
 }
 return;
}
function __ZN7WebCore17NodeListsNodeData19addCachedCollectionINS_20WindowNameCollectionENS_8DocumentEEEN3WTF10PassRefPtrIT_EERT0_NS_14CollectionTypeERKNS4_12AtomicStringE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i7 = i6 | 0;
 i8 = i6 + 16 | 0;
 i9 = i6 + 24 | 0;
 HEAP8[i8 | 0] = i4;
 i10 = i8 + 4 | 0;
 i11 = HEAP32[i5 >> 2] | 0;
 HEAP32[i10 >> 2] = i11;
 if ((i11 | 0) != 0) {
  i12 = i11 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
 }
 HEAP32[i9 >> 2] = 0;
 __ZN3WTF9HashTableINSt3__14pairIhNS_12AtomicStringEEENS_12KeyValuePairIS4_PN7WebCore14HTMLCollectionEEENS_24KeyValuePairKeyExtractorIS9_EENS6_17NodeListsNodeData25NodeListCacheMapEntryHashIS3_EENS_7HashMapIS4_S8_SE_NS_10HashTraitsIS4_EENSG_IS8_EEE18KeyValuePairTraitsESH_E3addINS_17HashMapTranslatorISK_SE_EES4_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS4_S9_SB_SE_SK_SH_EEEEOT0_OT1_(i7, i2 + 68 | 0, i8, i9);
 i9 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i10 = i9 | 0;
   i8 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i10 >> 2] = i8;
    break;
   }
  }
 } while (0);
 if ((HEAP8[i7 + 8 | 0] & 1) != 0) {
  i9 = __ZN3WTF10fastMallocEj(80) | 0;
  __ZN7WebCore18HTMLNameCollectionC2ERNS_8DocumentENS_14CollectionTypeERKN3WTF12AtomicStringE(i9, i3, i4, i5);
  HEAP32[i9 >> 2] = H_BASE + 2032;
  HEAP32[(HEAP32[i7 >> 2] | 0) + 8 >> 2] = i9;
  HEAP32[i1 >> 2] = i9;
  STACKTOP = i6;
  return;
 }
 i9 = HEAP32[(HEAP32[i7 >> 2] | 0) + 8 >> 2] | 0;
 HEAP32[i1 >> 2] = i9;
 if ((i9 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i1 = i9 + 8 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 STACKTOP = i6;
 return;
}
function __ZNK7WebCore8Document33shouldDisplaySeamlesslyWithParentEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 if ((HEAP8[(__ZN7WebCore22RuntimeEnabledFeatures14sharedFeaturesEv() | 0) + 18 | 0] & 1) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = HEAP32[i1 + 332 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i4 = HEAP32[i3 + 448 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 if ((HEAP8[i1 + 92 | 0] & 1) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i1 = HEAP32[i4 + 44 >> 2] | 0;
 i3 = HEAP32[__ZN7WebCore9HTMLNames9iframeTagE >> 2] | 0;
 do {
  if ((i1 | 0) != (i3 | 0)) {
   if ((HEAP32[i1 + 12 >> 2] | 0) != (HEAP32[i3 + 12 >> 2] | 0)) {
    i2 = 0;
    return i2 | 0;
   }
   if ((HEAP32[i1 + 16 >> 2] | 0) == (HEAP32[i3 + 16 >> 2] | 0)) {
    break;
   } else {
    i2 = 0;
   }
   return i2 | 0;
  }
 } while (0);
 i3 = HEAP32[i4 + 48 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i4 = HEAP32[i3 + 4 >> 2] | 0;
 if ((i4 & 1 | 0) == 0) {
  i5 = i4 >>> 1 & 134217727;
  i6 = i3 + 20 | 0;
 } else {
  i4 = i3 + 24 | 0;
  i5 = HEAP32[i4 + 8 >> 2] | 0;
  i6 = HEAP32[i4 >> 2] | 0;
 }
 L27 : do {
  if ((i5 | 0) == 0) {
   i7 = 0;
  } else {
   i4 = HEAP32[__ZN7WebCore9HTMLNames12seamlessAttrE >> 2] | 0;
   i3 = i4 + 12 | 0;
   i1 = i4 + 16 | 0;
   i8 = 0;
   while (1) {
    i9 = i6 + (i8 << 3) | 0;
    i10 = HEAP32[i9 >> 2] | 0;
    if ((i10 | 0) == (i4 | 0)) {
     i7 = i9;
     break L27;
    }
    if ((HEAP32[i10 + 12 >> 2] | 0) == (HEAP32[i3 >> 2] | 0)) {
     if ((HEAP32[i10 + 16 >> 2] | 0) == (HEAP32[i1 >> 2] | 0)) {
      i7 = i9;
      break L27;
     }
    }
    i9 = i8 + 1 | 0;
    if (i9 >>> 0 < i5 >>> 0) {
     i8 = i9;
    } else {
     i7 = 0;
     break;
    }
   }
  }
 } while (0);
 i2 = (i7 | 0) != 0;
 return i2 | 0;
}
function __ZN7WebCore8Document19scheduleStyleRecalcEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 if (__ZNK7WebCore8Document33shouldDisplaySeamlesslyWithParentEv(i1) | 0) {
  i2 = i1;
  while (1) {
   i3 = i2 + 332 | 0;
   i4 = HEAP32[i3 >> 2] | 0;
   if ((i4 | 0) == 0) {
    i5 = 0;
   } else {
    i5 = HEAP32[i4 + 448 >> 2] | 0;
   }
   __ZN7WebCore4Node19setNeedsStyleRecalcENS_15StyleChangeTypeE(i5 | 0, 32768);
   i4 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i3 >> 2] | 0) + 448 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
   if (__ZNK7WebCore8Document33shouldDisplaySeamlesslyWithParentEv(i4) | 0) {
    i2 = i4;
   } else {
    i6 = i4;
    break;
   }
  }
 } else {
  i6 = i1;
 }
 if (+HEAPF64[i6 + 1032 >> 3] != +0) {
  return;
 }
 if ((HEAP8[i6 + 1433 | 0] & 1) != 0) {
  return;
 }
 HEAP8[i6 + 1548 | 0] = 0;
 i1 = i6 + 1528 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i2);
  _memset(i1 | 0, 0, 16) | 0;
 }
 __ZN7WebCore9TimerBase5startEdd(i6 + 1024 | 0, +0, +0);
 if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) == 0 | (i6 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i6 + 332 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i7 = 12;
 } else {
  i2 = HEAP32[i1 + 32 >> 2] | 0;
  if ((i2 | 0) == 0) {
   i7 = 12;
  } else {
   i8 = i2;
  }
 }
 do {
  if ((i7 | 0) == 12) {
   i2 = HEAP32[i6 + 2204 >> 2] | 0;
   if ((i2 | 0) == 0) {
    i8 = 0;
    break;
   }
   i1 = HEAP32[i2 + 332 >> 2] | 0;
   if ((i1 | 0) == 0) {
    i8 = 0;
    break;
   }
   i8 = HEAP32[i1 + 32 >> 2] | 0;
  }
 } while (0);
 i7 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(i8) | 0;
 if ((i7 | 0) == 0) {
  return;
 }
 __ZN7WebCore24InspectorInstrumentation33didScheduleStyleRecalculationImplEPNS_19InstrumentingAgentsEPNS_8DocumentE(i7, i6);
 return;
}
function __ZN3WTF12StringAppendINS0_INS0_INS0_INS0_IPKcNS_6StringEEES2_EES3_EES2_EES2_E7writeToEPt(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i3 = HEAP32[i1 + 20 >> 2] | 0;
 i4 = _strlen(i3 | 0) | 0;
 i5 = i1 + 16 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = _strlen(i6 | 0) | 0;
 __ZN3WTF12StringAppendINS0_INS0_IPKcNS_6StringEEES2_EES3_E7writeToEPt(i1 | 0, i2);
 i8 = i1 + 8 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = _strlen(i9 | 0) | 0;
 i11 = i1 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 i13 = _strlen(i12 | 0) | 0;
 i14 = i1 + 4 | 0;
 i15 = HEAP32[i14 >> 2] | 0;
 if ((i15 | 0) == 0) {
  i16 = 0;
 } else {
  i16 = HEAP32[i15 + 4 >> 2] | 0;
 }
 i17 = i1 + 12 | 0;
 i1 = HEAP32[i17 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i18 = 0;
 } else {
  i18 = HEAP32[i1 + 4 >> 2] | 0;
 }
 i1 = i13 + i10 + i16 + i18 | 0;
 if ((i7 | 0) == 0) {
  i19 = i9;
  i20 = i12;
  i21 = i15;
 } else {
  i15 = 0;
  while (1) {
   HEAP16[i2 + (i1 + i15 << 1) >> 1] = HEAPU8[i6 + i15 | 0] | 0;
   i15 = i15 + 1 | 0;
   if (i15 >>> 0 >= i7 >>> 0) {
    break;
   }
  }
  i19 = HEAP32[i8 >> 2] | 0;
  i20 = HEAP32[i11 >> 2] | 0;
  i21 = HEAP32[i14 >> 2] | 0;
 }
 i14 = _strlen(HEAP32[i5 >> 2] | 0) | 0;
 i5 = _strlen(i19 | 0) | 0;
 i19 = _strlen(i20 | 0) | 0;
 if ((i21 | 0) == 0) {
  i22 = 0;
 } else {
  i22 = HEAP32[i21 + 4 >> 2] | 0;
 }
 i21 = HEAP32[i17 >> 2] | 0;
 if ((i21 | 0) == 0) {
  i23 = 0;
 } else {
  i23 = HEAP32[i21 + 4 >> 2] | 0;
 }
 i21 = i5 + i14 + i19 + i22 + i23 | 0;
 if ((i4 | 0) == 0) {
  return;
 } else {
  i24 = 0;
 }
 while (1) {
  HEAP16[i2 + (i21 + i24 << 1) >> 1] = HEAPU8[i3 + i24 | 0] | 0;
  i24 = i24 + 1 | 0;
  if (i24 >>> 0 >= i4 >>> 0) {
   break;
  }
 }
 return;
}
function __ZN7WebCore17NodeListsNodeData19addCachedCollectionINS_14HTMLCollectionENS_8DocumentEEEN3WTF10PassRefPtrIT_EERT0_NS_14CollectionTypeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 i8 = i5 + 24 | 0;
 i9 = i5 + 32 | 0;
 HEAP8[i7 | 0] = i4;
 i10 = i7 + 4 | 0;
 i11 = HEAP32[__ZN3WTF8starAtomE >> 2] | 0;
 HEAP32[i10 >> 2] = i11;
 if ((i11 | 0) != 0) {
  i12 = i11 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
 }
 HEAP32[i8 >> 2] = 0;
 __ZN3WTF9HashTableINSt3__14pairIhNS_12AtomicStringEEENS_12KeyValuePairIS4_PN7WebCore14HTMLCollectionEEENS_24KeyValuePairKeyExtractorIS9_EENS6_17NodeListsNodeData25NodeListCacheMapEntryHashIS3_EENS_7HashMapIS4_S8_SE_NS_10HashTraitsIS4_EENSG_IS8_EEE18KeyValuePairTraitsESH_E3addINS_17HashMapTranslatorISK_SE_EES4_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS4_S9_SB_SE_SK_SH_EEEEOT0_OT1_(i6, i2 + 68 | 0, i7, i8);
 i8 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i10 = i8 | 0;
   i7 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i10 >> 2] = i7;
    break;
   }
  }
 } while (0);
 if ((HEAP8[i6 + 8 | 0] & 1) != 0) {
  __ZN7WebCore14HTMLCollection6createERNS_13ContainerNodeENS_14CollectionTypeE(i9, i3 | 0, i4);
  i4 = i9 | 0;
  i9 = HEAP32[i4 >> 2] | 0;
  HEAP32[i4 >> 2] = 0;
  HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] = i9;
  HEAP32[i1 >> 2] = i9;
  STACKTOP = i5;
  return;
 }
 i9 = HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] | 0;
 HEAP32[i1 >> 2] = i9;
 if ((i9 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i1 = i9 + 8 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore8Document11canNavigateEPNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = i1 + 332 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = 0;
  return i5 | 0;
 }
 if ((i2 | 0) == 0) {
  i5 = 1;
  return i5 | 0;
 }
 i6 = i1 + 96 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i7 & 32 | 0) == 0) {
   if ((__ZNK7WebCore9FrameTree3topEv(i4 + 40 | 0) | 0) == (i2 | 0)) {
    i5 = 1;
    return i5 | 0;
   } else {
    i8 = HEAP32[i6 >> 2] | 0;
    break;
   }
  } else {
   i8 = i7;
  }
 } while (0);
 if ((i8 & 1 | 0) != 0) {
  if (__ZNK7WebCore9FrameTree14isDescendantOfEPKNS_5FrameE(i2 + 40 | 0, HEAP32[i3 >> 2] | 0) | 0) {
   i5 = 1;
   return i5 | 0;
  }
  if ((HEAP32[i6 >> 2] & 32 | 0) == 0) {
   i9 = H_BASE + 1224 | 0;
  } else {
   i6 = (__ZNK7WebCore9FrameTree3topEv((HEAP32[i3 >> 2] | 0) + 40 | 0) | 0) == (i2 | 0);
   i9 = i6 ? H_BASE + 1104 | 0 : H_BASE + 1224 | 0;
  }
  __ZN7WebCoreL27printNavigationErrorMessageEPNS_5FrameERKNS_3URLEPKc(i2, i1 + 356 | 0, i9);
  i5 = 0;
  return i5 | 0;
 }
 i9 = i1 + 100 | 0;
 if (__ZN7WebCoreL17canAccessAncestorEPKNS_14SecurityOriginEPNS_5FrameE(HEAP32[i9 >> 2] | 0, i2) | 0) {
  i5 = 1;
  return i5 | 0;
 }
 do {
  if ((__ZNK7WebCore9FrameTree6parentEv(i2 + 40 | 0) | 0) == 0) {
   if ((__ZN7WebCore11FrameLoader6openerEv((HEAP32[i3 >> 2] | 0) + 80 | 0) | 0) == (i2 | 0)) {
    i5 = 1;
    return i5 | 0;
   }
   i6 = HEAP32[i9 >> 2] | 0;
   if (__ZN7WebCoreL17canAccessAncestorEPKNS_14SecurityOriginEPNS_5FrameE(i6, __ZN7WebCore11FrameLoader6openerEv(i2 + 80 | 0) | 0) | 0) {
    i5 = 1;
   } else {
    break;
   }
   return i5 | 0;
  }
 } while (0);
 __ZN7WebCoreL27printNavigationErrorMessageEPNS_5FrameERKNS_3URLEPKc(i2, i1 + 356 | 0, H_BASE + 984 | 0);
 i5 = 0;
 return i5 | 0;
}
function __ZN7WebCore8Document21requestAnimationFrameEN3WTF10PassRefPtrINS_29RequestAnimationFrameCallbackEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 1976 | 0;
 L1 : do {
  if ((HEAP32[i5 >> 2] | 0) == 0) {
   i6 = __ZN3WTF10fastMallocEj(28) | 0;
   __ZN7WebCore27ScriptedAnimationControllerC1EPNS_8DocumentEj(i6, i1, 0);
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = i6;
   do {
    if ((i7 | 0) != 0) {
     i6 = i7 | 0;
     i8 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
     if ((i8 | 0) == 0) {
      __ZN7WebCore27ScriptedAnimationControllerD1Ev(i7);
      __ZN3WTF8fastFreeEPv(i7);
      break;
     } else {
      HEAP32[i6 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i7 = HEAP32[i1 + 332 >> 2] | 0;
   do {
    if ((i7 | 0) != 0) {
     i8 = HEAP32[i7 + 32 >> 2] | 0;
     if ((i8 | 0) == 0) {
      break;
     }
     if ((HEAP8[i8 + 1140 | 0] & 1) == 0) {
      break L1;
     }
    }
   } while (0);
   __ZN7WebCore27ScriptedAnimationController7suspendEv(HEAP32[i5 >> 2] | 0);
  }
 } while (0);
 i1 = HEAP32[i5 >> 2] | 0;
 i5 = i4 | 0;
 i7 = i2 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i5 >> 2] = i2;
 i2 = __ZN7WebCore27ScriptedAnimationController16registerCallbackEN3WTF10PassRefPtrINS_29RequestAnimationFrameCallbackEEE(i1, i4) | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return i2 | 0;
 }
 i5 = i4 + 4 | 0;
 i4 = i5 | 0;
 i1 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i4 >> 2] = i1;
  STACKTOP = i3;
  return i2 | 0;
 }
 i1 = i5 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return i2 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 127](i1);
 STACKTOP = i3;
 return i2 | 0;
}
function __ZN7WebCore8Document13setReadyStateENS0_10ReadyStateE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 960 | 0;
 if ((HEAP32[i5 >> 2] | 0) == (i2 | 0)) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i5 >> 2] = i2;
 i5 = HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] | 0;
 i6 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 304 | 0;
 i7 = __ZN3WTF10fastMallocEj(56) | 0;
 __ZN7WebCore5EventC1ERKN3WTF12AtomicStringEbb(i7, i6, 0, 0);
 i6 = i4 | 0;
 HEAP32[i6 >> 2] = i7;
 FUNCTION_TABLE_iii[i5 & 15](i1 | 0, i4) | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i6 = i4 + 8 | 0;
   i5 = i6 | 0;
   i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i5 >> 2] = i7;
    break;
   }
   i7 = i6 - 8 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 127](i7);
  }
 } while (0);
 i4 = HEAP32[i1 + 332 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i7 = i4 + 36 | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP8[i6 + 191 | 0] & 32) == 0) {
  STACKTOP = i3;
  return;
 }
 if ((i2 | 0) == 0) {
  i6 = i1 + 2053 | 0;
  if ((HEAP8[i6] & 1) == 0) {
   STACKTOP = i3;
   return;
  }
  HEAP8[i6] = 0;
  __ZN7WebCore9TimerBase5startEdd(i1 + 2056 | 0, +HEAPF64[(HEAP32[i7 >> 2] | 0) + 120 >> 3], +0);
  STACKTOP = i3;
  return;
 } else if ((i2 | 0) == 2) {
  if (+HEAPF64[i1 + 2064 >> 3] == +0) {
   STACKTOP = i3;
   return;
  }
  if ((HEAP8[(HEAP32[i4 + 452 >> 2] | 0) + 656 | 0] & 1) == 0) {
   STACKTOP = i3;
   return;
  }
  __ZN7WebCore8Document23setVisualUpdatesAllowedEb(i1, 1);
  STACKTOP = i3;
  return;
 } else {
  STACKTOP = i3;
  return;
 }
}
function __ZN3WTF6VectorIN7WebCore20AnnotatedRegionValueELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i5 + (i6 * 40 & -1) | 0;
 if (i2 >>> 0 > 107374182 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 * 40 & -1) | 0;
 HEAP32[i3 >> 2] = (i7 >>> 0) / 40 & -1;
 i2 = __ZN3WTF10fastMallocEj(i7) | 0;
 HEAP32[i4 >> 2] = i2;
 if ((i6 | 0) != 0) {
  i6 = i5;
  i7 = i2;
  while (1) {
   i2 = i7;
   i8 = i6;
   HEAP32[i2 >> 2] = HEAP32[i8 >> 2];
   HEAP32[i2 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
   HEAP32[i2 + 8 >> 2] = HEAP32[i8 + 8 >> 2];
   HEAP32[i2 + 12 >> 2] = HEAP32[i8 + 12 >> 2];
   i8 = i6 + 16 | 0;
   i2 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = 0;
   HEAP32[i7 + 16 >> 2] = i2;
   i2 = i7 + 20 | 0;
   i9 = i6 + 20 | 0;
   HEAP32[i2 >> 2] = HEAP32[i9 >> 2];
   HEAP32[i2 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
   HEAP32[i2 + 8 >> 2] = HEAP32[i9 + 8 >> 2];
   HEAP32[i2 + 12 >> 2] = HEAP32[i9 + 12 >> 2];
   HEAP32[i7 + 36 >> 2] = HEAP32[i6 + 36 >> 2];
   i9 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i8 = i9 | 0;
     i2 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
     if ((i2 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i9);
      break;
     } else {
      HEAP32[i8 >> 2] = i2;
      break;
     }
    }
   } while (0);
   i9 = i6 + 40 | 0;
   if ((i9 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i9;
    i7 = i7 + 40 | 0;
   }
  }
 }
 if ((i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i5);
 return;
}
function __ZN3WTF12StringAppendINS0_IPKcNS_6StringEEES2_E7writeToEPt(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 i4 = _strlen(i3 | 0) | 0;
 i5 = i1 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = _strlen(i6 | 0) | 0;
 if ((i7 | 0) != 0) {
  i8 = 0;
  while (1) {
   HEAP16[i2 + (i8 << 1) >> 1] = HEAPU8[i6 + i8 | 0] | 0;
   i8 = i8 + 1 | 0;
   if (i8 >>> 0 >= i7 >>> 0) {
    break;
   }
  }
 }
 i8 = i1 + 4 | 0;
 i1 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i1 | 0) == 0) {
   i9 = 0;
   i10 = _strlen(HEAP32[i5 >> 2] | 0) | 0;
  } else {
   i6 = HEAP32[i1 + 4 >> 2] | 0;
   do {
    if ((HEAP32[i1 + 16 >> 2] & 32 | 0) == 0) {
     i11 = HEAP32[i1 + 8 >> 2] | 0;
     if ((i6 | 0) == 0) {
      break;
     } else {
      i12 = 0;
     }
     while (1) {
      HEAP16[i2 + (i12 + i7 << 1) >> 1] = HEAP16[i11 + (i12 << 1) >> 1] | 0;
      i12 = i12 + 1 | 0;
      if (i12 >>> 0 >= i6 >>> 0) {
       break;
      }
     }
    } else {
     i11 = HEAP32[i1 + 8 >> 2] | 0;
     if ((i6 | 0) == 0) {
      break;
     } else {
      i13 = 0;
     }
     while (1) {
      HEAP16[i2 + (i13 + i7 << 1) >> 1] = HEAPU8[i11 + i13 | 0] | 0;
      i13 = i13 + 1 | 0;
      if (i13 >>> 0 >= i6 >>> 0) {
       break;
      }
     }
    }
   } while (0);
   i6 = HEAP32[i8 >> 2] | 0;
   i11 = _strlen(HEAP32[i5 >> 2] | 0) | 0;
   if ((i6 | 0) == 0) {
    i9 = 0;
    i10 = i11;
    break;
   }
   i9 = HEAP32[i6 + 4 >> 2] | 0;
   i10 = i11;
  }
 } while (0);
 i5 = i9 + i10 | 0;
 if ((i4 | 0) == 0) {
  return;
 } else {
  i14 = 0;
 }
 while (1) {
  HEAP16[i2 + (i5 + i14 << 1) >> 1] = HEAPU8[i3 + i14 | 0] | 0;
  i14 = i14 + 1 | 0;
  if (i14 >>> 0 >= i4 >>> 0) {
   break;
  }
 }
 return;
}
function __ZN3WTF9HashTableINS_6RefPtrIN7WebCore7ElementEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6rehashEiPS4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = i2 - 1;
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 2) | 0;
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
  i2 = i7 + (i10 << 2) | 0;
  i6 = HEAP32[i2 >> 2] | 0;
  if ((i6 | 0) == (-1 | 0) | (i6 | 0) == 0) {
   i12 = i11;
  } else {
   i6 = __ZN3WTF9HashTableINS_6RefPtrIN7WebCore7ElementEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E8reinsertEOS4_(i1, i2) | 0;
   i12 = (i2 | 0) == (i3 | 0) ? i6 : i11;
  }
  i6 = i10 + 1 | 0;
  if ((i6 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i6;
   i11 = i12;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i13 = 0;
 } else {
  i8 = i12;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  i1 = HEAP32[i7 + (i13 << 2) >> 2] | 0;
  i11 = i1;
  do {
   if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
    i10 = i1 + 8 | 0;
    i3 = i10 | 0;
    i6 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
    HEAP32[i3 >> 2] = i6;
    if ((i6 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
   }
  } while (0);
  i1 = i13 + 1 | 0;
  if ((i1 | 0) < (i5 | 0)) {
   i13 = i1;
  } else {
   i8 = i12;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN7WebCore17NodeListsNodeData19addCachedCollectionINS_17HTMLAllCollectionENS_8DocumentEEEN3WTF10PassRefPtrIT_EERT0_NS_14CollectionTypeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 i8 = i5 + 24 | 0;
 i9 = i5 + 32 | 0;
 HEAP8[i7 | 0] = i4;
 i10 = i7 + 4 | 0;
 i11 = HEAP32[__ZN3WTF8starAtomE >> 2] | 0;
 HEAP32[i10 >> 2] = i11;
 if ((i11 | 0) != 0) {
  i12 = i11 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
 }
 HEAP32[i8 >> 2] = 0;
 __ZN3WTF9HashTableINSt3__14pairIhNS_12AtomicStringEEENS_12KeyValuePairIS4_PN7WebCore14HTMLCollectionEEENS_24KeyValuePairKeyExtractorIS9_EENS6_17NodeListsNodeData25NodeListCacheMapEntryHashIS3_EENS_7HashMapIS4_S8_SE_NS_10HashTraitsIS4_EENSG_IS8_EEE18KeyValuePairTraitsESH_E3addINS_17HashMapTranslatorISK_SE_EES4_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS4_S9_SB_SE_SK_SH_EEEEOT0_OT1_(i6, i2 + 68 | 0, i7, i8);
 i8 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i10 = i8 | 0;
   i7 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i10 >> 2] = i7;
    break;
   }
  }
 } while (0);
 if ((HEAP8[i6 + 8 | 0] & 1) != 0) {
  __ZN7WebCore17HTMLAllCollection6createERNS_8DocumentENS_14CollectionTypeE(i9, i3, i4);
  i4 = HEAP32[i9 >> 2] | 0;
  HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] = i4;
  HEAP32[i1 >> 2] = i4;
  STACKTOP = i5;
  return;
 }
 i4 = HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] | 0;
 HEAP32[i1 >> 2] = i4;
 if ((i4 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i1 = i4 + 8 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore8Document11textRemovedEPNS_4NodeEjj(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 L1 : do {
  if ((HEAP32[i1 + 760 >> 2] | 0) != 0) {
   i7 = HEAP32[i1 + 748 >> 2] | 0;
   i8 = HEAP32[i1 + 752 >> 2] | 0;
   i9 = i7 + (i8 << 2) | 0;
   L3 : do {
    if ((i8 | 0) == 0) {
     i10 = i7;
    } else {
     i11 = i7;
     while (1) {
      i12 = HEAP32[i11 >> 2] | 0;
      if (!((i12 | 0) == (-1 | 0) | (i12 | 0) == 0)) {
       i10 = i11;
       break L3;
      }
      i11 = i11 + 4 | 0;
      if ((i11 | 0) == (i9 | 0)) {
       break L1;
      }
     }
    }
   } while (0);
   if ((i10 | 0) == (i9 | 0)) {
    break;
   } else {
    i13 = i10;
   }
   while (1) {
    __ZN7WebCore5Range11textRemovedEPNS_4NodeEjj(HEAP32[i13 >> 2] | 0, i2, i3, i4);
    i7 = i13 + 4 | 0;
    if ((i7 | 0) == (i9 | 0)) {
     break L1;
    } else {
     i14 = i7;
    }
    while (1) {
     i7 = HEAP32[i14 >> 2] | 0;
     if (!((i7 | 0) == (-1 | 0) | (i7 | 0) == 0)) {
      break;
     }
     i7 = i14 + 4 | 0;
     if ((i7 | 0) == (i9 | 0)) {
      break L1;
     } else {
      i14 = i7;
     }
    }
    if ((i14 | 0) == (i9 | 0)) {
     break;
    } else {
     i13 = i14;
    }
   }
  }
 } while (0);
 i14 = i1 + 1124 | 0;
 i1 = HEAP32[i14 >> 2] | 0;
 HEAP32[i6 >> 2] = 1023;
 __ZN7WebCore24DocumentMarkerController13removeMarkersEPNS_4NodeEjiNS_14DocumentMarker11MarkerTypesENS0_37RemovePartiallyOverlappingMarkerOrNotE(i1, i2, i3, i4, i6, 0);
 __ZN7WebCore24DocumentMarkerController12shiftMarkersEPNS_4NodeEji(HEAP32[i14 >> 2] | 0, i2, i4 + i3 | 0, -i4 | 0);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore8Document19getCSSCanvasElementERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 24 | 0;
 HEAP32[i4 >> 2] = 0;
 __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore17HTMLCanvasElementEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_(i5, i1 + 1412 | 0, i2, i4);
 i4 = (HEAP32[i5 >> 2] | 0) + 4 | 0;
 if ((HEAP32[i4 >> 2] | 0) != 0) {
  i7 = HEAP32[i4 >> 2] | 0;
  STACKTOP = i3;
  return i7 | 0;
 }
 __ZN7WebCore17HTMLCanvasElement6createERNS_8DocumentE(i6, i1);
 i1 = i6 | 0;
 i6 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i6;
 do {
  if ((i5 | 0) != 0) {
   i6 = i5 + 8 | 0;
   i2 = i6 | 0;
   i8 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i8;
   if ((i8 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  }
 } while (0);
 i5 = HEAP32[i1 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i7 = HEAP32[i4 >> 2] | 0;
  STACKTOP = i3;
  return i7 | 0;
 }
 i1 = i5 + 8 | 0;
 i5 = i1 | 0;
 i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i6;
 if ((i6 | 0) >= 1) {
  i7 = HEAP32[i4 >> 2] | 0;
  STACKTOP = i3;
  return i7 | 0;
 }
 if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
  i7 = HEAP32[i4 >> 2] | 0;
  STACKTOP = i3;
  return i7 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
 i7 = HEAP32[i4 >> 2] | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6OwnPtrIN7WebCore6LocaleEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_16AtomicStringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E8reinsertEOS7_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i2 | 0;
 i5 = HEAP32[i1 >> 2] | 0;
 i6 = HEAP32[i5 + 16 >> 2] | 0;
 i7 = i6 >>> 7;
 i8 = (i6 >>> 30) + ~i7 | 0;
 i6 = i8 << 12 ^ i8;
 i8 = i6 >>> 7 ^ i6;
 i6 = i8 << 2 ^ i8;
 i8 = i6 >>> 20 ^ i6 | 1;
 i6 = i7;
 i7 = 0;
 i9 = 0;
 while (1) {
  i10 = i6 & i4;
  i11 = i3 + (i10 << 3) | 0;
  i12 = HEAP32[i11 >> 2] | 0;
  i13 = i12;
  if ((i13 | 0) == 0) {
   i14 = 3;
   break;
  } else if ((i13 | 0) == (-1 | 0)) {
   i15 = i11;
  } else {
   if ((i12 | 0) == (i5 | 0)) {
    i16 = i11;
    break;
   } else {
    i15 = i9;
   }
  }
  i12 = (i7 | 0) == 0 ? i8 : i7;
  i6 = i12 + i10 | 0;
  i7 = i12;
  i9 = i15;
 }
 if ((i14 | 0) == 3) {
  i16 = (i9 | 0) != 0 ? i9 : i11;
 }
 i11 = i16 + 4 | 0;
 i9 = HEAP32[i11 >> 2] | 0;
 if ((i9 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 127](i9);
 }
 i9 = i16 | 0;
 i14 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i15 = i14 | 0;
   i7 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    break;
   } else {
    HEAP32[i15 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i14 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i9 >> 2] = i14;
 i14 = i2 + 4 | 0;
 i2 = HEAP32[i14 >> 2] | 0;
 HEAP32[i14 >> 2] = 0;
 HEAP32[i11 >> 2] = i2;
 return i16 | 0;
}
function __ZN7WebCore8Document20enqueuePageshowEventENS_24PageshowEventPersistenceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 292 | 0;
 i7 = __ZN3WTF10fastMallocEj(56) | 0;
 __ZN7WebCore19PageTransitionEventC1ERKN3WTF12AtomicStringEb(i7, i6, (i2 | 0) != 0);
 i2 = i7;
 i6 = i1 | 0;
 i8 = (i1 | 0) == 0;
 if (!i8) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 56 >> 2] & 127](i6);
 }
 i9 = HEAP32[i1 + 336 >> 2] | 0;
 if ((i9 | 0) == 0) {
  if (!i8) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 60 >> 2] & 127](i6);
  }
  if ((i7 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i1 = i7 + 8 | 0;
  i8 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
  if ((i8 | 0) == 0) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 127](i2);
   STACKTOP = i3;
   return;
  } else {
   HEAP32[i1 >> 2] = i8;
   STACKTOP = i3;
   return;
  }
 }
 i8 = i4 | 0;
 HEAP32[i8 >> 2] = i2;
 i2 = i5 | 0;
 HEAP32[i2 >> 2] = i6;
 __ZN7WebCore9DOMWindow13dispatchEventEN3WTF10PassRefPtrINS_5EventEEENS2_INS_11EventTargetEEE(i9, i4, i5) | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 if ((i5 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 60 >> 2] & 127](i5);
 }
 i5 = HEAP32[i8 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i8 = i5 + 8 | 0;
 i5 = i8 | 0;
 i2 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i5 >> 2] = i2;
  STACKTOP = i3;
  return;
 }
 i2 = i8 - 8 | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 127](i2);
 STACKTOP = i3;
 return;
}
function __ZN3WTF12StringAppendINS0_INS0_INS0_IPKcNS_6StringEEES2_EES3_EES2_E7writeToEPh(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i3 = HEAP32[i1 + 16 >> 2] | 0;
 i4 = _strlen(i3 | 0) | 0;
 __ZN3WTF12StringAppendINS0_IPKcNS_6StringEEES2_E7writeToEPh(i1 | 0, i2);
 i5 = i1 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = _strlen(i6 | 0) | 0;
 i8 = i1 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = _strlen(i9 | 0) | 0;
 i11 = i1 + 4 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = 0;
 } else {
  i13 = HEAP32[i12 + 4 >> 2] | 0;
 }
 i14 = i10 + i7 + i13 | 0;
 i13 = i1 + 12 | 0;
 i1 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i1 | 0) == 0) {
   i15 = i6;
   i16 = i9;
   i17 = i12;
  } else {
   i7 = HEAP32[i1 + 4 >> 2] | 0;
   i10 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i15 = i6;
    i16 = i9;
    i17 = i12;
    break;
   } else {
    i18 = 0;
   }
   while (1) {
    HEAP8[i2 + (i14 + i18) | 0] = HEAP8[i10 + i18 | 0] | 0;
    i18 = i18 + 1 | 0;
    if (i18 >>> 0 >= i7 >>> 0) {
     break;
    }
   }
   i15 = HEAP32[i5 >> 2] | 0;
   i16 = HEAP32[i8 >> 2] | 0;
   i17 = HEAP32[i11 >> 2] | 0;
  }
 } while (0);
 i11 = _strlen(i15 | 0) | 0;
 i15 = _strlen(i16 | 0) | 0;
 if ((i17 | 0) == 0) {
  i19 = 0;
 } else {
  i19 = HEAP32[i17 + 4 >> 2] | 0;
 }
 i17 = i15 + i11 + i19 | 0;
 i19 = HEAP32[i13 >> 2] | 0;
 if ((i19 | 0) == 0) {
  i20 = 0;
  i21 = i17 + i20 | 0;
  i22 = i2 + i21 | 0;
  _memcpy(i22 | 0, i3 | 0, i4) | 0;
  return;
 }
 i20 = HEAP32[i19 + 4 >> 2] | 0;
 i21 = i17 + i20 | 0;
 i22 = i2 + i21 | 0;
 _memcpy(i22 | 0, i3 | 0, i4) | 0;
 return;
}
function __ZN7WebCore8Document18createNodeIteratorEPNS_4NodeEjN3WTF10PassRefPtrINS_10NodeFilterEEEbRi(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i8 = i2 | 0;
 i9 = i2 + 8 | 0;
 if ((i3 | 0) == 0) {
  HEAP32[i7 >> 2] = 9;
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i2;
  return;
 }
 i7 = i8 | 0;
 HEAP32[i7 >> 2] = i3;
 i10 = i3 + 8 | 0;
 HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
 i10 = i9 | 0;
 i3 = i5 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i10 >> 2] = i5;
 __ZN7WebCore12NodeIterator6createEN3WTF10PassRefPtrINS_4NodeEEEjNS2_INS_10NodeFilterEEEb(i1, i8, i4, i9, i6);
 i6 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i10 = i6 | 0;
   i9 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i10 >> 2] = i9;
    break;
   }
   i9 = HEAP32[i6 + 4 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i10 = i9 + 4 | 0;
     i4 = i10 | 0;
     i8 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
     if ((i8 | 0) != 0) {
      HEAP32[i4 >> 2] = i8;
      break;
     }
     i8 = i10 - 4 | 0;
     if ((i8 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 127](i8);
    }
   } while (0);
   __ZN3WTF8fastFreeEPv(i6);
  }
 } while (0);
 i6 = HEAP32[i7 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i7 = i6 + 8 | 0;
 i6 = i7 | 0;
 i9 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 HEAP32[i6 >> 2] = i9;
 if ((i9 | 0) >= 1) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore8Document16createTreeWalkerEPNS_4NodeEjN3WTF10PassRefPtrINS_10NodeFilterEEEbRi(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i8 = i2 | 0;
 i9 = i2 + 8 | 0;
 if ((i3 | 0) == 0) {
  HEAP32[i7 >> 2] = 9;
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i2;
  return;
 }
 i7 = i8 | 0;
 HEAP32[i7 >> 2] = i3;
 i10 = i3 + 8 | 0;
 HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
 i10 = i9 | 0;
 i3 = i5 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i10 >> 2] = i5;
 __ZN7WebCore10TreeWalker6createEN3WTF10PassRefPtrINS_4NodeEEEjNS2_INS_10NodeFilterEEEb(i1, i8, i4, i9, i6);
 i6 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i10 = i6 | 0;
   i9 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i10 >> 2] = i9;
    break;
   }
   i9 = HEAP32[i6 + 4 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i10 = i9 + 4 | 0;
     i4 = i10 | 0;
     i8 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
     if ((i8 | 0) != 0) {
      HEAP32[i4 >> 2] = i8;
      break;
     }
     i8 = i10 - 4 | 0;
     if ((i8 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 127](i8);
    }
   } while (0);
   __ZN3WTF8fastFreeEPv(i6);
  }
 } while (0);
 i6 = HEAP32[i7 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i7 = i6 + 8 | 0;
 i6 = i7 | 0;
 i9 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 HEAP32[i6 >> 2] = i9;
 if ((i9 | 0) >= 1) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore8Document14setInPageCacheEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 1433 | 0;
 if ((HEAP8[i5] & 1 | 0) == (i2 & 1 | 0)) {
  STACKTOP = i3;
  return;
 }
 HEAP8[i5] = i2 & 1;
 i5 = i1 + 332 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i6 | 0) == 0) {
   i7 = 0;
   i8 = 0;
   i9 = 0;
  } else {
   i10 = HEAP32[i6 + 452 >> 2] | 0;
   i11 = HEAP32[i6 + 32 >> 2] | 0;
   if ((i11 | 0) == 0) {
    i7 = i10;
    i8 = 0;
    i9 = 0;
    break;
   }
   __ZN7WebCore4Page32lockAllOverlayScrollbarsToHiddenEb(i11, i2);
   i7 = i10;
   i8 = i11;
   i9 = 1;
  }
 } while (0);
 if (!i2) {
  if ((HEAP32[i1 + 12 >> 2] & 128 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  __ZN7WebCore8Document19scheduleStyleRecalcEv(i1);
  STACKTOP = i3;
  return;
 }
 L15 : do {
  if ((i7 | 0) != 0) {
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i7 >> 2] | 0) + 192 >> 2] & 127](i4, i7 | 0);
   i2 = i7 + 124 | 0;
   i6 = HEAP32[i4 + 4 >> 2] | 0;
   HEAP32[i2 >> 2] = HEAP32[i4 >> 2];
   HEAP32[i2 + 4 >> 2] = i6;
   do {
    if (i9) {
     i6 = HEAP32[i5 >> 2] | 0;
     if ((HEAP32[i6 + 28 >> 2] | 0) != (i6 | 0)) {
      break;
     }
     __ZN7WebCore9FrameView35resetScrollbarsAndClearContentsSizeEv(i7);
     i6 = __ZN7WebCore4Page20scrollingCoordinatorEv(i8) | 0;
     if ((i6 | 0) == 0) {
      break L15;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 52 >> 2] & 127](i6);
     break L15;
    }
   } while (0);
   __ZN7WebCore9FrameView15resetScrollbarsEv(i7);
  }
 } while (0);
 __ZN7WebCore9TimerBase4stopEv(i1 + 1024 | 0);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore8Document10readyStateEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 if (!(HEAP8[H_BASE + 2184 | 0] | 0)) {
  i7 = __Znwj(4) | 0;
  HEAP32[i4 >> 2] = H_BASE + 456;
  __ZN3WTF6StringC1ENS_12ASCIILiteralE(i7, i4);
  HEAP32[H_BASE + 2208 >> 2] = i7;
  HEAP8[H_BASE + 2184 | 0] = 1;
 }
 if (!(HEAP8[H_BASE + 2192 | 0] | 0)) {
  i7 = __Znwj(4) | 0;
  HEAP32[i5 >> 2] = H_BASE + 72;
  __ZN3WTF6StringC1ENS_12ASCIILiteralE(i7, i5);
  HEAP32[H_BASE + 2216 >> 2] = i7;
  HEAP8[H_BASE + 2192 | 0] = 1;
 }
 if (!(HEAP8[H_BASE + 2176 | 0] | 0)) {
  i7 = __Znwj(4) | 0;
  HEAP32[i6 >> 2] = H_BASE + 56;
  __ZN3WTF6StringC1ENS_12ASCIILiteralE(i7, i6);
  HEAP32[H_BASE + 2200 >> 2] = i7;
  HEAP8[H_BASE + 2176 | 0] = 1;
 }
 i7 = HEAP32[i2 + 960 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i2 = HEAP32[HEAP32[H_BASE + 2208 >> 2] >> 2] | 0;
  HEAP32[i1 >> 2] = i2;
  if ((i2 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i6 = i2 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
  STACKTOP = i3;
  return;
 } else if ((i7 | 0) == 2) {
  i6 = HEAP32[HEAP32[H_BASE + 2200 >> 2] >> 2] | 0;
  HEAP32[i1 >> 2] = i6;
  if ((i6 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i2 = i6 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
  STACKTOP = i3;
  return;
 } else if ((i7 | 0) == 1) {
  i7 = HEAP32[HEAP32[H_BASE + 2216 >> 2] >> 2] | 0;
  HEAP32[i1 >> 2] = i7;
  if ((i7 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i2 = i7 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore12NodeIterator6createEN3WTF10PassRefPtrINS_4NodeEEEjNS2_INS_10NodeFilterEEEb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = __ZN3WTF10fastMallocEj(44) | 0;
 i10 = i7 | 0;
 i11 = i2 | 0;
 i2 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i10 >> 2] = i2;
 i2 = i8 | 0;
 i11 = i4 | 0;
 i4 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i2 >> 2] = i4;
 __ZN7WebCore12NodeIteratorC1EN3WTF10PassRefPtrINS_4NodeEEEjNS2_INS_10NodeFilterEEEb(i9, i7, i3, i8, i5);
 HEAP32[i1 >> 2] = i9;
 i9 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i2 = i9 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i1 | 0) != 0) {
    HEAP32[i2 >> 2] = i1;
    break;
   }
   i1 = HEAP32[i9 + 4 >> 2] | 0;
   do {
    if ((i1 | 0) != 0) {
     i2 = i1 + 4 | 0;
     i5 = i2 | 0;
     i8 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
     if ((i8 | 0) != 0) {
      HEAP32[i5 >> 2] = i8;
      break;
     }
     i8 = i2 - 4 | 0;
     if ((i8 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 127](i8);
    }
   } while (0);
   __ZN3WTF8fastFreeEPv(i9);
  }
 } while (0);
 i9 = HEAP32[i10 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i10 = i9 + 8 | 0;
 i9 = i10 | 0;
 i1 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
 HEAP32[i9 >> 2] = i1;
 if ((i1 | 0) >= 1) {
  STACKTOP = i6;
  return;
 }
 if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
  STACKTOP = i6;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore10TreeWalker6createEN3WTF10PassRefPtrINS_4NodeEEEjNS2_INS_10NodeFilterEEEb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = __ZN3WTF10fastMallocEj(28) | 0;
 i10 = i7 | 0;
 i11 = i2 | 0;
 i2 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i10 >> 2] = i2;
 i2 = i8 | 0;
 i11 = i4 | 0;
 i4 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i2 >> 2] = i4;
 __ZN7WebCore10TreeWalkerC1EN3WTF10PassRefPtrINS_4NodeEEEjNS2_INS_10NodeFilterEEEb(i9, i7, i3, i8, i5);
 HEAP32[i1 >> 2] = i9;
 i9 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i2 = i9 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i1 | 0) != 0) {
    HEAP32[i2 >> 2] = i1;
    break;
   }
   i1 = HEAP32[i9 + 4 >> 2] | 0;
   do {
    if ((i1 | 0) != 0) {
     i2 = i1 + 4 | 0;
     i5 = i2 | 0;
     i8 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
     if ((i8 | 0) != 0) {
      HEAP32[i5 >> 2] = i8;
      break;
     }
     i8 = i2 - 4 | 0;
     if ((i8 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 127](i8);
    }
   } while (0);
   __ZN3WTF8fastFreeEPv(i9);
  }
 } while (0);
 i9 = HEAP32[i10 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i10 = i9 + 8 | 0;
 i9 = i10 | 0;
 i1 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
 HEAP32[i9 >> 2] = i1;
 if ((i1 | 0) >= 1) {
  STACKTOP = i6;
  return;
 }
 if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
  STACKTOP = i6;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore8Document22enqueueHashchangeEventERKN3WTF6StringES4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = __ZN3WTF10fastMallocEj(64) | 0;
 i8 = i7;
 __ZN7WebCore5EventC2ERKN3WTF12AtomicStringEbb(i8, (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 184 | 0, 0, 0);
 HEAP32[i7 >> 2] = H_BASE + 2072;
 i9 = HEAP32[i2 >> 2] | 0;
 HEAP32[i7 + 52 >> 2] = i9;
 if ((i9 | 0) != 0) {
  i2 = i9 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i7 + 56 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i7 = i2 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = HEAP32[i1 + 336 >> 2] | 0;
 i2 = i7 | 0;
 i3 = i5 | 0;
 HEAP32[i3 >> 2] = i2;
 if ((i7 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 56 >> 2] & 127](i2);
 }
 __ZN7WebCore5Event9setTargetEN3WTF10PassRefPtrINS_11EventTargetEEE(i8, i5);
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 60 >> 2] & 127](i5);
 }
 i5 = i6 | 0;
 HEAP32[i5 >> 2] = i8;
 __ZN7WebCore18DocumentEventQueue12enqueueEventEN3WTF10PassRefPtrINS_5EventEEE(i1 + 1588 | 0, i6) | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i5 = i6 + 8 | 0;
 i6 = i5 | 0;
 i1 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i6 >> 2] = i1;
  STACKTOP = i4;
  return;
 }
 i1 = i5 - 8 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 127](i1);
 STACKTOP = i4;
 return;
}
function __ZNK3WTF12StringAppendINS0_INS0_INS0_INS0_INS0_IPKcNS_6StringEEES2_EES3_EES2_EES2_EES2_EcvS3_Ev(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 HEAP32[i5 >> 2] = HEAP32[i2 >> 2];
 i6 = i5 + 4 | 0;
 i7 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i8 = i7 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 HEAP32[i5 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 i8 = i5 + 12 | 0;
 i7 = HEAP32[i2 + 12 >> 2] | 0;
 HEAP32[i8 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i9 = i7 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
 }
 HEAP32[i5 + 16 >> 2] = HEAP32[i2 + 16 >> 2];
 HEAP32[i5 + 20 >> 2] = HEAP32[i2 + 20 >> 2];
 __ZN3WTF13tryMakeStringINS_12StringAppendINS1_INS1_INS1_INS1_IPKcNS_6StringEEES3_EES4_EES3_EES3_EES3_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i4, i5, HEAP32[i2 + 24 >> 2] | 0);
 i2 = i4 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i2 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i8 = i2 | 0;
   i5 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i8 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i6 = i2 | 0;
   i5 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i6 >> 2] = i5;
    break;
   }
  }
 } while (0);
 if ((i4 | 0) == 0) {
  _WTFCrash();
 } else {
  HEAP32[i1 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore8Document5writeERKN3WTF6StringEPS0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i5 = i4 | 0;
 __ZN7WebCore15SegmentedStringC2ERKN3WTF6StringE(i5, i2);
 i2 = i1 + 1960 | 0;
 i6 = (HEAP32[i2 >> 2] | 0) + 1 | 0;
 HEAP32[i2 >> 2] = i6;
 i7 = i1 + 1956 | 0;
 if (i6 >>> 0 > 1 >>> 0) {
  i8 = HEAP8[i7] & 1;
 } else {
  i8 = 0;
 }
 i9 = i6 >>> 0 > 21 >>> 0 ? 1 : i8;
 HEAP8[i7] = i9;
 do {
  if (i9 << 24 >> 24 == 0) {
   i7 = i1 + 344 | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   if ((i8 | 0) == 0) {
    i10 = 6;
   } else {
    if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 12 >> 2] & 127](i8) | 0)) {
     i10 = 6;
    }
   }
   if ((i10 | 0) == 6) {
    if ((HEAP32[i1 + 1092 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore8Document4openEPS0_(i1, i3);
   }
   i8 = HEAP32[i7 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i8 >> 2] | 0) + 16 >> 2] & 127](i8, i5);
  }
 } while (0);
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) - 1;
 __ZN3WTF5DequeIN7WebCore18SegmentedSubstringELj0EE10destroyAllEv(i5 + 36 | 0);
 i2 = i5 + 44 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i5 + 48 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i5 + 16 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i5 = i3 | 0;
 i2 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i3);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i5 >> 2] = i2;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore8Document15textNodesMergedEPNS_4TextEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 if ((HEAP32[i1 + 760 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 HEAP32[i5 >> 2] = i2;
 HEAP8[i5 + 4 | 0] = 0;
 i2 = HEAP32[i1 + 748 >> 2] | 0;
 i6 = HEAP32[i1 + 752 >> 2] | 0;
 i1 = i2 + (i6 << 2) | 0;
 L4 : do {
  if ((i6 | 0) == 0) {
   i7 = i2;
  } else {
   i8 = i2;
   while (1) {
    i9 = HEAP32[i8 >> 2] | 0;
    if (!((i9 | 0) == (-1 | 0) | (i9 | 0) == 0)) {
     i7 = i8;
     break L4;
    }
    i8 = i8 + 4 | 0;
    if ((i8 | 0) == (i1 | 0)) {
     break;
    }
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 if ((i7 | 0) == (i1 | 0)) {
  STACKTOP = i4;
  return;
 } else {
  i10 = i7;
 }
 L12 : while (1) {
  __ZN7WebCore5Range15textNodesMergedERNS_13NodeWithIndexEj(HEAP32[i10 >> 2] | 0, i5, i3);
  i7 = i10 + 4 | 0;
  if ((i7 | 0) == (i1 | 0)) {
   i11 = 11;
   break;
  } else {
   i12 = i7;
  }
  while (1) {
   i7 = HEAP32[i12 >> 2] | 0;
   if (!((i7 | 0) == (-1 | 0) | (i7 | 0) == 0)) {
    break;
   }
   i7 = i12 + 4 | 0;
   if ((i7 | 0) == (i1 | 0)) {
    i11 = 16;
    break L12;
   } else {
    i12 = i7;
   }
  }
  if ((i12 | 0) == (i1 | 0)) {
   i11 = 15;
   break;
  } else {
   i10 = i12;
  }
 }
 if ((i11 | 0) == 15) {
  STACKTOP = i4;
  return;
 } else if ((i11 | 0) == 16) {
  STACKTOP = i4;
  return;
 } else if ((i11 | 0) == 11) {
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore8Document41styleForElementIgnoringPendingStylesheetsEPNS_7ElementE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = i2 + 327 | 0;
 i5 = HEAP8[i4] & 1;
 HEAP8[i4] = 1;
 i6 = i2 + 320 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i8 = HEAP32[i2 + 332 >> 2] | 0;
  do {
   if ((i8 | 0) == 0) {
    i9 = 1;
   } else {
    i10 = HEAP32[i8 + 36 >> 2] | 0;
    if ((i10 | 0) == 0) {
     i9 = 1;
     break;
    }
    i9 = (HEAP8[i10 + 182 | 0] & 16) != 0;
   }
  } while (0);
  i8 = __ZN3WTF10fastMallocEj(560) | 0;
  __ZN7WebCore13StyleResolverC1ERNS_8DocumentEb(i8, i2, i9);
  i9 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = i8;
  if ((i9 | 0) != 0) {
   __ZN7WebCore13StyleResolverD1Ev(i9);
   __ZN3WTF8fastFreeEPv(i9);
  }
  __ZN7WebCore28DocumentStyleSheetCollection22combineCSSFeatureFlagsEv(i2 + 772 | 0);
  i11 = HEAP32[i6 >> 2] | 0;
 } else {
  i11 = i7;
 }
 i7 = HEAP32[i3 + 16 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i12 = 0;
  __ZN7WebCore13StyleResolver15styleForElementEPNS_7ElementEPNS_11RenderStyleENS_20StyleSharingBehaviorENS_20RuleMatchingBehaviorEPNS_12RenderRegionE(i1, i11, i3, i12, 0, 0, 0);
  HEAP8[i4] = i5;
  return;
 }
 i12 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i7 >> 2] | 0) + 176 >> 2] & 15](i7 | 0, 0) | 0;
 __ZN7WebCore13StyleResolver15styleForElementEPNS_7ElementEPNS_11RenderStyleENS_20StyleSharingBehaviorENS_20RuleMatchingBehaviorEPNS_12RenderRegionE(i1, i11, i3, i12, 0, 0, 0);
 HEAP8[i4] = i5;
 return;
}
function __ZNK7WebCore8Document11completeURLERKN3WTF6StringERKNS_3URLE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 if ((HEAP32[i3 >> 2] | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  __ZN7WebCore3URL10invalidateEv(i1);
  return;
 }
 i5 = i4 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i6 | 0) == 0) {
   i7 = 6;
  } else {
   if ((HEAP32[i6 + 4 >> 2] | 0) == 0) {
    i7 = 6;
    break;
   }
   i8 = __ZN7WebCore8blankURLEv() | 0;
   if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i5 >> 2] | 0, HEAP32[i8 >> 2] | 0) | 0) {
    i7 = 6;
   } else {
    i9 = i4;
   }
  }
 } while (0);
 do {
  if ((i7 | 0) == 6) {
   i5 = i2 + 332 | 0;
   i6 = HEAP32[i5 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i9 = i4;
    break;
   }
   i8 = __ZNK7WebCore9FrameTree6parentEv(i6 + 40 | 0) | 0;
   if ((i8 | 0) == 0) {
    i9 = i4;
    break;
   }
   if ((HEAP32[i8 + 456 >> 2] | 0) == 0) {
    i9 = i4;
    break;
   }
   i8 = HEAP32[i5 >> 2] | 0;
   do {
    if ((i8 | 0) == 0) {
     i10 = 0;
    } else {
     i5 = __ZNK7WebCore9FrameTree6parentEv(i8 + 40 | 0) | 0;
     if ((i5 | 0) == 0) {
      i10 = 0;
      break;
     }
     i10 = HEAP32[i5 + 456 >> 2] | 0;
    }
   } while (0);
   i9 = i10 + 404 | 0;
  }
 } while (0);
 i10 = HEAP32[i2 + 1308 >> 2] | 0;
 if ((i10 | 0) == 0) {
  __ZN7WebCore3URLC1ERKS0_RKN3WTF6StringE(i1, i9, i3);
  return;
 } else {
  __ZN7WebCore3URLC1ERKS0_RKN3WTF6StringERKNS_12TextEncodingE(i1, i9, i3, i10 + 8 | 0);
  return;
 }
}
function __ZN7WebCore8Document16setXMLStandaloneEbRi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i1 + 652 | 0;
 do {
  if ((HEAP32[i7 >> 2] | 0) == 0) {
   i8 = __ZN3WTF10fastMallocEj(8) | 0;
   __ZN7WebCore17DOMImplementationC1ERNS_8DocumentE(i8, i1);
   i9 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = i8;
   if ((i9 | 0) == 0) {
    break;
   }
   i8 = i9 | 0;
   if ((HEAP32[i8 >> 2] | 0) != 0) {
    __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i8);
   }
   __ZN3WTF8fastFreeEPv(i9);
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i5, H_BASE + 48 | 0);
 i7 = i6 | 0;
 HEAP32[i7 >> 2] = 0;
 i9 = __ZN7WebCore17DOMImplementation10hasFeatureERKN3WTF6StringES4_(i5, i6) | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i7 = i6 | 0;
   i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i7 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i5 = i6 | 0;
   i8 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i5 >> 2] = i8;
    break;
   }
  }
 } while (0);
 if (i9) {
  i9 = i1 + 1300 | 0;
  HEAP32[i9 >> 2] = HEAP32[i9 >> 2] & -4 | (i2 ? 1 : 2);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i3 >> 2] = 9;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCoreL17canAccessAncestorEPKNS_14SecurityOriginEPNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if (__ZNK7WebCore14SecurityOrigin7isLocalEv(i1) | 0) {
  i4 = i2;
 } else {
  i5 = i2;
  while (1) {
   i2 = HEAP32[i5 + 456 >> 2] | 0;
   if ((i2 | 0) == 0) {
    i3 = 1;
    i6 = 15;
    break;
   }
   if (__ZNK7WebCore14SecurityOrigin9canAccessEPKS0_(i1, HEAP32[i2 + 100 >> 2] | 0) | 0) {
    i3 = 1;
    i6 = 18;
    break;
   }
   i2 = __ZNK7WebCore9FrameTree6parentEv(i5 + 40 | 0) | 0;
   if ((i2 | 0) == 0) {
    i3 = 0;
    i6 = 14;
    break;
   } else {
    i5 = i2;
   }
  }
  if ((i6 | 0) == 14) {
   return i3 | 0;
  } else if ((i6 | 0) == 15) {
   return i3 | 0;
  } else if ((i6 | 0) == 18) {
   return i3 | 0;
  }
 }
 while (1) {
  i5 = HEAP32[i4 + 456 >> 2] | 0;
  if ((i5 | 0) == 0) {
   i3 = 1;
   i6 = 17;
   break;
  }
  i2 = HEAP32[i5 + 100 >> 2] | 0;
  if (__ZNK7WebCore14SecurityOrigin9canAccessEPKS0_(i1, i2) | 0) {
   i3 = 1;
   i6 = 12;
   break;
  }
  if (__ZNK7WebCore14SecurityOrigin7isLocalEv(i2) | 0) {
   i3 = 1;
   i6 = 13;
   break;
  }
  i2 = __ZNK7WebCore9FrameTree6parentEv(i4 + 40 | 0) | 0;
  if ((i2 | 0) == 0) {
   i3 = 0;
   i6 = 11;
   break;
  } else {
   i4 = i2;
  }
 }
 if ((i6 | 0) == 12) {
  return i3 | 0;
 } else if ((i6 | 0) == 13) {
  return i3 | 0;
 } else if ((i6 | 0) == 11) {
  return i3 | 0;
 } else if ((i6 | 0) == 17) {
  return i3 | 0;
 }
 return 0;
}
function __ZNK3WTF12StringAppendINS0_INS0_INS0_IPKcNS_6StringEEES2_EES3_EES2_EcvS3_Ev(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 HEAP32[i5 >> 2] = HEAP32[i2 >> 2];
 i6 = i5 + 4 | 0;
 i7 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i8 = i7 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 HEAP32[i5 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 i8 = i5 + 12 | 0;
 i7 = HEAP32[i2 + 12 >> 2] | 0;
 HEAP32[i8 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i9 = i7 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
 }
 __ZN3WTF13tryMakeStringINS_12StringAppendINS1_INS1_IPKcNS_6StringEEES3_EES4_EES3_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i4, i5, HEAP32[i2 + 16 >> 2] | 0);
 i2 = i4 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i2 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i8 = i2 | 0;
   i5 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i8 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i6 = i2 | 0;
   i5 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i6 >> 2] = i5;
    break;
   }
  }
 } while (0);
 if ((i4 | 0) == 0) {
  _WTFCrash();
 } else {
  HEAP32[i1 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore8Document22ensureTemplateDocumentEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 if ((HEAP32[i1 + 332 >> 2] | 0) == 0) {
  i2 = i1;
  return i2 | 0;
 }
 i3 = HEAP32[i1 + 2200 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i2 = i3;
  return i2 | 0;
 }
 i3 = (HEAP8[i1 + 1576 | 0] & 1) == 0;
 i4 = i1 + 2200 | 0;
 i5 = __ZN7WebCore8blankURLEv() | 0;
 do {
  if (i3) {
   i6 = __Znwj(2288) | 0;
   __ZN7WebCore8DocumentC2EPNS_5FrameERKNS_3URLEjj(i6, 0, i5, 0, 0);
   i7 = i4 | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = i6;
   if ((i8 | 0) == 0) {
    break;
   }
   i6 = i8 + 8 | 0;
   i8 = i6 | 0;
   i7 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i7;
   if ((i7 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  } else {
   i6 = __ZN3WTF10fastMallocEj(2336) | 0;
   __ZN7WebCore12HTMLDocumentC1EPNS_5FrameERKNS_3URLEhj(i6, 0, i5, 1, 0);
   i7 = i4 | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = i6;
   if ((i8 | 0) == 0) {
    break;
   }
   i6 = i8 + 8 | 0;
   i8 = i6 | 0;
   i7 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i7;
   if ((i7 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  }
 } while (0);
 i5 = i4 | 0;
 HEAP32[(HEAP32[i5 >> 2] | 0) + 2204 >> 2] = i1;
 i2 = HEAP32[i5 >> 2] | 0;
 return i2 | 0;
}
function __ZN3WTFplINS_12StringAppendINS1_INS1_INS1_IPKcNS_6StringEEES3_EES4_EES3_EES3_S3_EENS1_INS1_IT_T0_EET1_EERKSB_SC_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i5 = HEAP32[i2 + 4 >> 2] | 0;
 i6 = (i5 | 0) == 0;
 if (!i6) {
  i7 = i5 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i2 + 12 >> 2] | 0;
 i9 = (i8 | 0) == 0;
 if (!i9) {
  i10 = i8 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
 }
 i10 = HEAP32[i2 + 16 >> 2] | 0;
 i11 = HEAP32[i2 + 20 >> 2] | 0;
 HEAP32[i1 >> 2] = i4;
 HEAP32[i1 + 4 >> 2] = i5;
 if (!i6) {
  i4 = i5 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 HEAP32[i1 + 8 >> 2] = i7;
 HEAP32[i1 + 12 >> 2] = i8;
 do {
  if (i9) {
   HEAP32[i1 + 16 >> 2] = i10;
   HEAP32[i1 + 20 >> 2] = i11;
   HEAP32[i1 + 24 >> 2] = i3;
  } else {
   i7 = i8 | 0;
   i4 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = i4 + 2;
   HEAP32[i1 + 16 >> 2] = i10;
   HEAP32[i1 + 20 >> 2] = i11;
   HEAP32[i1 + 24 >> 2] = i3;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i7 >> 2] = i4;
    break;
   }
  }
 } while (0);
 if (i6) {
  return;
 }
 i6 = i5 | 0;
 i8 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i8 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  return;
 } else {
  HEAP32[i6 >> 2] = i8;
  return;
 }
}
function __ZN3WTF14deleteOwnedPtrIN7WebCore18SelectorQueryCacheEEEvPT_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i1 + 4 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    i5 = i2 + (i4 << 3) | 0;
    i6 = HEAP32[i5 >> 2] | 0;
    do {
     if ((i6 | 0) != -1) {
      i7 = i2 + (i4 << 3) + 4 | 0;
      i8 = HEAP32[i7 >> 2] | 0;
      HEAP32[i7 >> 2] = 0;
      if ((i8 | 0) == 0) {
       i9 = i6;
      } else {
       __ZN7WebCore15CSSSelectorListD1Ev(i8 + 12 | 0);
       i7 = i8 + 8 | 0;
       if ((HEAP32[i7 >> 2] | 0) != 0) {
        HEAP32[i7 >> 2] = 0;
       }
       i7 = i8 | 0;
       i10 = HEAP32[i7 >> 2] | 0;
       if ((i10 | 0) != 0) {
        HEAP32[i7 >> 2] = 0;
        HEAP32[i8 + 4 >> 2] = 0;
        __ZN3WTF8fastFreeEPv(i10);
       }
       __ZN3WTF8fastFreeEPv(i8);
       i9 = HEAP32[i5 >> 2] | 0;
      }
      if ((i9 | 0) == 0) {
       break;
      }
      i8 = i9 | 0;
      i10 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
      if ((i10 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i9);
       break;
      } else {
       HEAP32[i8 >> 2] = i10;
       break;
      }
     }
    } while (0);
    i4 = i4 + 1 | 0;
    if ((i4 | 0) >= (i3 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore8Document23didAssociateFormControlEPNS_7ElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i1 + 332 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = HEAP32[i5 + 32 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = HEAP32[(HEAP32[i6 + 20 >> 2] | 0) + 8 >> 2] | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 448 >> 2] & 127](i5) | 0)) {
  STACKTOP = i3;
  return;
 }
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i6 = i2 + 8 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 }
 __ZN3WTF9HashTableINS_6RefPtrIN7WebCore7ElementEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_(i3 + 8 | 0, i1 + 2264 | 0, i4, i4);
 i4 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i5 = i4 + 8 | 0;
   i6 = i5 | 0;
   i2 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i2;
   if ((i2 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 if (+HEAPF64[i1 + 2216 >> 3] != +0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore9TimerBase5startEdd(i1 + 2208 | 0, +0, +0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore8Document12textInsertedEPNS_4NodeEjj(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 L1 : do {
  if ((HEAP32[i1 + 760 >> 2] | 0) != 0) {
   i5 = HEAP32[i1 + 748 >> 2] | 0;
   i6 = HEAP32[i1 + 752 >> 2] | 0;
   i7 = i5 + (i6 << 2) | 0;
   L3 : do {
    if ((i6 | 0) == 0) {
     i8 = i5;
    } else {
     i9 = i5;
     while (1) {
      i10 = HEAP32[i9 >> 2] | 0;
      if (!((i10 | 0) == (-1 | 0) | (i10 | 0) == 0)) {
       i8 = i9;
       break L3;
      }
      i9 = i9 + 4 | 0;
      if ((i9 | 0) == (i7 | 0)) {
       break L1;
      }
     }
    }
   } while (0);
   if ((i8 | 0) == (i7 | 0)) {
    break;
   } else {
    i11 = i8;
   }
   while (1) {
    __ZN7WebCore5Range12textInsertedEPNS_4NodeEjj(HEAP32[i11 >> 2] | 0, i2, i3, i4);
    i5 = i11 + 4 | 0;
    if ((i5 | 0) == (i7 | 0)) {
     break L1;
    } else {
     i12 = i5;
    }
    while (1) {
     i5 = HEAP32[i12 >> 2] | 0;
     if (!((i5 | 0) == (-1 | 0) | (i5 | 0) == 0)) {
      break;
     }
     i5 = i12 + 4 | 0;
     if ((i5 | 0) == (i7 | 0)) {
      break L1;
     } else {
      i12 = i5;
     }
    }
    if ((i12 | 0) == (i7 | 0)) {
     break;
    } else {
     i11 = i12;
    }
   }
  }
 } while (0);
 __ZN7WebCore24DocumentMarkerController12shiftMarkersEPNS_4NodeEji(HEAP32[i1 + 1124 >> 2] | 0, i2, i3, i4);
 return;
}
function __ZN7WebCore8Document31documentWillSuspendForPageCacheEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = HEAP32[i1 + 1584 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore10RenderView13setIsInWindowEb(i2, 0);
 }
 i2 = HEAP32[i1 + 1448 >> 2] | 0;
 i3 = HEAP32[i1 + 1452 >> 2] | 0;
 i4 = i2 + (i3 << 2) | 0;
 if ((HEAP32[i1 + 1460 >> 2] | 0) == 0) {
  return;
 }
 L7 : do {
  if ((i3 | 0) == 0) {
   i5 = i2;
  } else {
   i1 = i2;
   while (1) {
    i6 = HEAP32[i1 >> 2] | 0;
    if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
     i5 = i1;
     break L7;
    }
    i1 = i1 + 4 | 0;
    if ((i1 | 0) == (i4 | 0)) {
     break;
    }
   }
   return;
  }
 } while (0);
 if ((i5 | 0) == (i4 | 0)) {
  return;
 } else {
  i7 = i5;
 }
 L15 : while (1) {
  i5 = HEAP32[i7 >> 2] | 0;
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 408 >> 2] & 127](i5);
  i5 = i7 + 4 | 0;
  if ((i5 | 0) == (i4 | 0)) {
   i8 = 17;
   break;
  } else {
   i9 = i5;
  }
  while (1) {
   i5 = HEAP32[i9 >> 2] | 0;
   if (!((i5 | 0) == (-1 | 0) | (i5 | 0) == 0)) {
    break;
   }
   i5 = i9 + 4 | 0;
   if ((i5 | 0) == (i4 | 0)) {
    i8 = 16;
    break L15;
   } else {
    i9 = i5;
   }
  }
  if ((i9 | 0) == (i4 | 0)) {
   i8 = 13;
   break;
  } else {
   i7 = i9;
  }
 }
 if ((i8 | 0) == 17) {
  return;
 } else if ((i8 | 0) == 13) {
  return;
 } else if ((i8 | 0) == 16) {
  return;
 }
}
function __ZNK7WebCore8Document17suggestedMIMETypeEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = HEAP8[i2 + 1576 | 0] | 0;
 if ((i8 & 2) != 0) {
  HEAP32[i4 >> 2] = H_BASE + 24;
  __ZN3WTF6StringC1ENS_12ASCIILiteralE(i1, i4);
  STACKTOP = i3;
  return;
 }
 if ((i8 & 32) != 0) {
  HEAP32[i5 >> 2] = H_BASE + 8;
  __ZN3WTF6StringC1ENS_12ASCIILiteralE(i1, i5);
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i2 + 1300 >> 2] & 3 | 0) == 1) {
  HEAP32[i6 >> 2] = H_BASE + 1376;
  __ZN3WTF6StringC1ENS_12ASCIILiteralE(i1, i6);
  STACKTOP = i3;
  return;
 }
 if ((i8 & 1) != 0) {
  HEAP32[i7 >> 2] = H_BASE + 1360;
  __ZN3WTF6StringC1ENS_12ASCIILiteralE(i1, i7);
  STACKTOP = i3;
  return;
 }
 i7 = HEAP32[i2 + 332 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i8 = HEAP32[i7 + 128 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   i6 = (HEAP32[i7 + 456 >> 2] | 0) == (i2 | 0) ? i8 : 0;
   if ((i6 | 0) == 0) {
    break;
   }
   i8 = HEAP32[(__ZNK7WebCore14DocumentLoader16responseMIMETypeEv(i6) | 0) >> 2] | 0;
   HEAP32[i1 >> 2] = i8;
   if ((i8 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   i6 = i8 | 0;
   HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
   STACKTOP = i3;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore8Document21setFullScreenRendererEPNS_16RenderFullScreenE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i1 + 1704 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 if ((i8 | 0) == (i2 | 0)) {
  STACKTOP = i3;
  return;
 }
 do {
  if ((i2 | 0) != 0) {
   i9 = i1 + 1828 | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   if ((i10 | 0) != 0) {
    HEAP32[i4 >> 2] = i10;
    HEAP32[i9 >> 2] = 0;
    __ZN7WebCore16RenderFullScreen17createPlaceholderEN3WTF7PassRefINS_11RenderStyleEEERKNS_10LayoutRectE(i2, i4, i1 + 1812 | 0);
    break;
   }
   if ((i8 | 0) == 0) {
    break;
   }
   i9 = HEAP32[i8 + 128 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN7WebCore11RenderStyle5cloneEPKS0_(i5, HEAP32[i9 + 36 >> 2] | 0);
   i10 = i6;
   i11 = i9 + 44 | 0;
   HEAP32[i10 >> 2] = HEAP32[i11 >> 2];
   HEAP32[i10 + 4 >> 2] = HEAP32[i11 + 4 >> 2];
   HEAP32[i10 + 8 >> 2] = HEAP32[i11 + 8 >> 2];
   HEAP32[i10 + 12 >> 2] = HEAP32[i11 + 12 >> 2];
   __ZN7WebCore16RenderFullScreen17createPlaceholderEN3WTF7PassRefINS_11RenderStyleEEERKNS_10LayoutRectE(i2, i5, i6);
  }
 } while (0);
 i6 = HEAP32[i7 >> 2] | 0;
 if ((i6 | 0) != 0) {
  __ZN7WebCore12RenderObject7destroyEv(i6 | 0);
 }
 HEAP32[i7 >> 2] = i2;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore8Document21getElementByAccessKeyERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 if ((HEAP32[i2 + 4 >> 2] | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = i1 + 1548 | 0;
 if ((HEAP8[i5] & 1) == 0) {
  __ZN7WebCore8Document17buildAccessKeyMapEPNS_9TreeScopeE(i1, i1 + 44 | 0);
  HEAP8[i5] = 1;
  i6 = HEAP32[i3 >> 2] | 0;
 } else {
  i6 = i2;
 }
 i2 = HEAP32[i1 + 1536 >> 2] | 0;
 i3 = HEAP32[i1 + 1528 >> 2] | 0;
 i1 = __ZN3WTF15CaseFoldingHash4hashERNS_10StringImplE(i6) | 0;
 if ((i3 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = (i1 >>> 23) + ~i1 | 0;
 i7 = i5 << 12 ^ i5;
 i5 = i7 >>> 7 ^ i7;
 i7 = i5 << 2 ^ i5;
 i5 = i7 >>> 20 ^ i7 | 1;
 i7 = i1;
 i1 = 0;
 while (1) {
  i8 = i7 & i2;
  i9 = i3 + (i8 << 3) | 0;
  i10 = HEAP32[i9 >> 2] | 0;
  i11 = i10;
  if ((i11 | 0) == 0) {
   i4 = 0;
   i12 = 16;
   break;
  } else if ((i11 | 0) != (-1 | 0)) {
   if (__ZN3WTF24equalIgnoringCaseNonNullEPKNS_10StringImplES2_(i10, i6) | 0) {
    break;
   }
  }
  i10 = (i1 | 0) == 0 ? i5 : i1;
  i7 = i10 + i8 | 0;
  i1 = i10;
 }
 if ((i12 | 0) == 16) {
  return i4 | 0;
 }
 if ((i9 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = HEAP32[i3 + (i8 << 3) + 4 >> 2] | 0;
 return i4 | 0;
}
function __ZN7WebCore8Document17prepareMouseEventERKNS_14HitTestRequestERKNS_11LayoutPointERKNS_18PlatformMouseEventE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 232 | 0;
 i7 = i6 | 0;
 i8 = i6 + 112 | 0;
 i9 = i6 + 120 | 0;
 i10 = i2 + 1584 | 0;
 do {
  if ((HEAP32[i10 >> 2] | 0) != 0) {
   if ((HEAP8[i2 + 2285 | 0] & 1) != 0) {
    break;
   }
   __ZN7WebCore13HitTestResultC1ERKNS_11LayoutPointE(i9, i4);
   __ZN7WebCore10RenderView7hitTestERKNS_14HitTestRequestERNS_13HitTestResultE(HEAP32[i10 >> 2] | 0, i3, i9) | 0;
   if ((HEAP32[i3 >> 2] & 2 | 0) == 0) {
    __ZN7WebCore8Document22updateHoverActiveStateERKNS_14HitTestRequestEPNS_7ElementEPKNS_18PlatformMouseEventENS_23StyleResolverUpdateFlagE(i2, i3, __ZNK7WebCore13HitTestResult12innerElementEv(i9) | 0, i5, 2);
   }
   __ZN7WebCore28MouseEventWithHitTestResultsC1ERKNS_18PlatformMouseEventERKNS_13HitTestResultE(i1, i5, i9);
   __ZN7WebCore13HitTestResultD1Ev(i9);
   STACKTOP = i6;
   return;
  }
 } while (0);
 HEAP32[i8 >> 2] = 0;
 HEAP32[i8 + 4 >> 2] = 0;
 __ZN7WebCore13HitTestResultC1ERKNS_11LayoutPointE(i7, i8);
 __ZN7WebCore28MouseEventWithHitTestResultsC1ERKNS_18PlatformMouseEventERKNS_13HitTestResultE(i1, i5, i7);
 __ZN7WebCore13HitTestResultD1Ev(i7);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore17StyleSurroundDataD2Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore10BorderDataD2Ev(i1 + 100 | 0);
 if ((HEAP8[i1 + 97 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 92 | 0);
 }
 if ((HEAP8[i1 + 89 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 84 | 0);
 }
 if ((HEAP8[i1 + 81 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 76 | 0);
 }
 if ((HEAP8[i1 + 73 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 68 | 0);
 }
 if ((HEAP8[i1 + 65 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 60 | 0);
 }
 if ((HEAP8[i1 + 57 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 52 | 0);
 }
 if ((HEAP8[i1 + 49 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 44 | 0);
 }
 if ((HEAP8[i1 + 41 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 36 | 0);
 }
 if ((HEAP8[i1 + 33 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 28 | 0);
 }
 if ((HEAP8[i1 + 25 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 20 | 0);
 }
 if ((HEAP8[i1 + 17 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 12 | 0);
 }
 if ((HEAP8[i1 + 9 | 0] | 0) != 10) {
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 4 | 0);
 return;
}
function __ZN7WebCore8Document15initDNSPrefetchEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = i1 + 332 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   HEAP8[i1 + 1085 | 0] = 0;
   i4 = 7;
  } else {
   i5 = HEAP32[i3 + 36 >> 2] | 0;
   HEAP8[i1 + 1085 | 0] = 0;
   if ((i5 | 0) == 0) {
    i4 = 7;
    break;
   }
   if ((HEAP8[i5 + 196 | 0] & 2) == 0) {
    i4 = 7;
    break;
   }
   i5 = HEAP32[(HEAP32[i1 + 100 >> 2] | 0) + 4 >> 2] | 0;
   i6 = (i5 | 0) == 0;
   if (!i6) {
    i7 = i5 | 0;
    HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
   }
   i7 = i1 + 1084 | 0;
   HEAP8[i7] = (__ZN3WTF5equalEPKNS_10StringImplEPKh(i5, H_BASE + 576 | 0) | 0) & 1;
   if (i6) {
    i8 = i7;
    break;
   }
   i6 = i5 | 0;
   i9 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    i8 = i7;
    break;
   } else {
    HEAP32[i6 >> 2] = i9;
    i8 = i7;
    break;
   }
  }
 } while (0);
 if ((i4 | 0) == 7) {
  i4 = i1 + 1084 | 0;
  HEAP8[i4] = 0;
  i8 = i4;
 }
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 i2 = __ZNK7WebCore9FrameTree6parentEv(i4 + 40 | 0) | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i4 = HEAP32[i2 + 456 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 if ((HEAP8[i4 + 1084 | 0] & 1) != 0) {
  return;
 }
 HEAP8[i8] = 0;
 return;
}
function __ZN7WebCore8Document13cancelParsingEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = i1 + 344 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 56 >> 2] & 127](i3);
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 + 4 | 0;
   i5 = i4 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   do {
    if ((i6 | 0) == 0) {
     i7 = i4 - 4 | 0;
     if ((i7 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 127](i7);
    } else {
     HEAP32[i5 >> 2] = i6;
    }
   } while (0);
   i6 = HEAP32[i2 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   i5 = i6 + 4 | 0;
   HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 36 >> 2] & 127](i6);
   i5 = i6 + 4 | 0;
   i6 = i5 | 0;
   i4 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i6 >> 2] = i4;
    break;
   }
   i4 = i5 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 127](i4);
  }
 } while (0);
 i2 = HEAP32[i1 + 332 >> 2] | 0;
 if ((i2 | 0) == 0) {
  __ZN7WebCore8Document13implicitCloseEv(i1);
  return;
 } else {
  __ZN7WebCore11FrameLoader14checkCompletedEv(i2 + 80 | 0);
  return;
 }
}
function __ZThn88_N7WebCore8Document17addConsoleMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringEm(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6 | 0;
 i8 = i1 - 2288 + 2200 | 0;
 i1 = i8;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 296 >> 2] & 127](i1) | 0)) {
  i9 = HEAP32[(HEAP32[i8 >> 2] | 0) + 288 >> 2] | 0;
  i10 = __ZN3WTF10fastMallocEj(16) | 0;
  HEAP32[i10 >> 2] = __ZTVN7WebCore22ScriptExecutionContext21AddConsoleMessageTaskE + 8;
  HEAP32[i10 + 4 >> 2] = i2;
  HEAP32[i10 + 8 >> 2] = i3;
  __ZNKR3WTF6String12isolatedCopyEv(i10 + 12 | 0, i4);
  i11 = i7 | 0;
  HEAP32[i11 >> 2] = i10;
  FUNCTION_TABLE_vii[i9 & 127](i1, i7);
  i7 = HEAP32[i11 >> 2] | 0;
  if ((i7 | 0) == 0) {
   STACKTOP = i6;
   return;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 127](i7);
  STACKTOP = i6;
  return;
 }
 i7 = HEAP32[i8 + 332 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i8 = HEAP32[i7 + 32 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 __ZN7WebCore11PageConsole10addMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringEmPNS_8DocumentE(HEAP32[i8 + 1148 >> 2] | 0, i2, i3, i4, i5, i1);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore8Document11statePoppedEN3WTF10PassRefPtrINS_21SerializedScriptValueEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 if ((HEAP32[i1 + 332 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i1 + 960 >> 2] | 0) == 2) {
  i5 = i4 | 0;
  i6 = i2 | 0;
  i7 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = 0;
  HEAP32[i5 >> 2] = i7;
  __ZN7WebCore8Document20enqueuePopstateEventEN3WTF10PassRefPtrINS_21SerializedScriptValueEEE(i1, i4);
  i4 = HEAP32[i5 >> 2] | 0;
  if ((i4 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i5 = i4 | 0;
  if (((tempValue = HEAP32[i5 >> 2] | 0, HEAP32[i5 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
   STACKTOP = i3;
   return;
  }
  __ZN7WebCore21SerializedScriptValueD1Ev(i4);
  __ZN3WTF8fastFreeEPv(i4);
  STACKTOP = i3;
  return;
 } else {
  i4 = i2 | 0;
  i2 = HEAP32[i4 >> 2] | 0;
  HEAP32[i4 >> 2] = 0;
  i4 = i1 + 1248 | 0;
  i1 = HEAP32[i4 >> 2] | 0;
  HEAP32[i4 >> 2] = i2;
  if ((i1 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i2 = i1 | 0;
  if (((tempValue = HEAP32[i2 >> 2] | 0, HEAP32[i2 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
   STACKTOP = i3;
   return;
  }
  __ZN7WebCore21SerializedScriptValueD1Ev(i1);
  __ZN3WTF8fastFreeEPv(i1);
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore8Document32updateRangesAfterChildrenChangedERNS_13ContainerNodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 if ((HEAP32[i1 + 760 >> 2] | 0) == 0) {
  return;
 }
 i3 = HEAP32[i1 + 748 >> 2] | 0;
 i4 = HEAP32[i1 + 752 >> 2] | 0;
 i1 = i3 + (i4 << 2) | 0;
 L4 : do {
  if ((i4 | 0) == 0) {
   i5 = i3;
  } else {
   i6 = i3;
   while (1) {
    i7 = HEAP32[i6 >> 2] | 0;
    if (!((i7 | 0) == (-1 | 0) | (i7 | 0) == 0)) {
     i5 = i6;
     break L4;
    }
    i6 = i6 + 4 | 0;
    if ((i6 | 0) == (i1 | 0)) {
     break;
    }
   }
   return;
  }
 } while (0);
 if ((i5 | 0) == (i1 | 0)) {
  return;
 } else {
  i8 = i5;
 }
 L12 : while (1) {
  __ZN7WebCore5Range19nodeChildrenChangedERNS_13ContainerNodeE(HEAP32[i8 >> 2] | 0, i2);
  i5 = i8 + 4 | 0;
  if ((i5 | 0) == (i1 | 0)) {
   i9 = 12;
   break;
  } else {
   i10 = i5;
  }
  while (1) {
   i5 = HEAP32[i10 >> 2] | 0;
   if (!((i5 | 0) == (-1 | 0) | (i5 | 0) == 0)) {
    break;
   }
   i5 = i10 + 4 | 0;
   if ((i5 | 0) == (i1 | 0)) {
    i9 = 16;
    break L12;
   } else {
    i10 = i5;
   }
  }
  if ((i10 | 0) == (i1 | 0)) {
   i9 = 13;
   break;
  } else {
   i8 = i10;
  }
 }
 if ((i9 | 0) == 13) {
  return;
 } else if ((i9 | 0) == 12) {
  return;
 } else if ((i9 | 0) == 16) {
  return;
 }
}
function __ZN7WebCore8Document26removeFocusedNodeOfSubtreeEPNS_4NodeEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 if ((HEAP32[i1 + 680 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP8[i1 + 1433 | 0] & 1) != 0) {
  STACKTOP = i4;
  return;
 }
 i6 = __ZN7WebCore9TreeScope14focusedElementEv(HEAP32[i2 + 20 >> 2] | 0) | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i7 = i6 | 0;
 do {
  if (i3) {
   if (__ZNK7WebCore4Node14isDescendantOfEPKS0_(i7, i2) | 0) {
    break;
   }
   STACKTOP = i4;
   return;
  } else {
   if ((i7 | 0) == (i2 | 0)) {
    break;
   }
   if (__ZNK7WebCore4Node14isDescendantOfEPKS0_(i7, i2) | 0) {
    break;
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 i2 = i5 | 0;
 HEAP32[i2 >> 2] = 0;
 __ZN7WebCore8Document17setFocusedElementEN3WTF10PassRefPtrINS_7ElementEEENS_14FocusDirectionE(i1, i5, 0) | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i2 = i5 + 8 | 0;
 i5 = i2 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i1;
 if ((i1 | 0) >= 1) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore8Document4bodyEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = HEAP32[i1 + 692 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = HEAP32[i2 + 36 >> 2] | 0;
 i2 = (i1 | 0) == 0;
 L4 : do {
  if (i2) {
   i4 = 0;
  } else {
   i5 = (HEAP32[__ZN7WebCore9HTMLNames11framesetTagE >> 2] | 0) + 12 | 0;
   i6 = i1;
   while (1) {
    if ((HEAP32[i6 + 12 >> 2] & 20 | 0) == 20) {
     if ((HEAP32[(HEAP32[i6 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[i5 >> 2] | 0)) {
      i7 = 7;
      break;
     }
    }
    i8 = HEAP32[i6 + 28 >> 2] | 0;
    if ((i8 | 0) == 0) {
     break;
    } else {
     i6 = i8;
    }
   }
   do {
    if ((i7 | 0) == 7) {
     if ((i6 | 0) == 0) {
      break;
     }
     i3 = i6;
     return i3 | 0;
    }
   } while (0);
   if (i2) {
    i4 = 0;
    break;
   }
   i6 = (HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0) + 12 | 0;
   i5 = i1;
   while (1) {
    if ((HEAP32[i5 + 12 >> 2] & 20 | 0) == 20) {
     if ((HEAP32[(HEAP32[i5 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[i6 >> 2] | 0)) {
      i4 = i5;
      break L4;
     }
    }
    i8 = HEAP32[i5 + 28 >> 2] | 0;
    if ((i8 | 0) == 0) {
     i4 = 0;
     break;
    } else {
     i5 = i8;
    }
   }
  }
 } while (0);
 i3 = i4;
 return i3 | 0;
}
function __ZN7WebCore8Document16isPageBoxVisibleEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 320 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = HEAP32[i1 + 332 >> 2] | 0;
  do {
   if ((i7 | 0) == 0) {
    i8 = 1;
   } else {
    i9 = HEAP32[i7 + 36 >> 2] | 0;
    if ((i9 | 0) == 0) {
     i8 = 1;
     break;
    }
    i8 = (HEAP8[i9 + 182 | 0] & 16) != 0;
   }
  } while (0);
  i7 = __ZN3WTF10fastMallocEj(560) | 0;
  __ZN7WebCore13StyleResolverC1ERNS_8DocumentEb(i7, i1, i8);
  i8 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = i7;
  if ((i8 | 0) != 0) {
   __ZN7WebCore13StyleResolverD1Ev(i8);
   __ZN3WTF8fastFreeEPv(i8);
  }
  __ZN7WebCore28DocumentStyleSheetCollection22combineCSSFeatureFlagsEv(i1 + 772 | 0);
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 __ZN7WebCore13StyleResolver12styleForPageEi(i4, i10, i2);
 i2 = HEAP32[i4 >> 2] | 0;
 i4 = (HEAP32[i2 + 40 >> 2] & 6144 | 0) != 2048;
 i10 = i2 | 0;
 i6 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
 if ((i6 | 0) == 0) {
  __ZN7WebCore11RenderStyleD2Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  STACKTOP = i3;
  return i4 | 0;
 } else {
  HEAP32[i10 >> 2] = i6;
  STACKTOP = i3;
  return i4 | 0;
 }
 return 0;
}
function __ZN7WebCore8Document29privateBrowsingStateDidChangeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = HEAP32[i1 + 1488 >> 2] | 0;
 i3 = HEAP32[i1 + 1492 >> 2] | 0;
 i4 = i2 + (i3 << 2) | 0;
 if ((HEAP32[i1 + 1500 >> 2] | 0) == 0) {
  return;
 }
 L4 : do {
  if ((i3 | 0) == 0) {
   i5 = i2;
  } else {
   i1 = i2;
   while (1) {
    i6 = HEAP32[i1 >> 2] | 0;
    if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
     i5 = i1;
     break L4;
    }
    i1 = i1 + 4 | 0;
    if ((i1 | 0) == (i4 | 0)) {
     break;
    }
   }
   return;
  }
 } while (0);
 if ((i5 | 0) == (i4 | 0)) {
  return;
 } else {
  i7 = i5;
 }
 L12 : while (1) {
  i5 = HEAP32[i7 >> 2] | 0;
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 420 >> 2] & 127](i5);
  i5 = i7 + 4 | 0;
  if ((i5 | 0) == (i4 | 0)) {
   i8 = 13;
   break;
  } else {
   i9 = i5;
  }
  while (1) {
   i5 = HEAP32[i9 >> 2] | 0;
   if (!((i5 | 0) == (-1 | 0) | (i5 | 0) == 0)) {
    break;
   }
   i5 = i9 + 4 | 0;
   if ((i5 | 0) == (i4 | 0)) {
    i8 = 16;
    break L12;
   } else {
    i9 = i5;
   }
  }
  if ((i9 | 0) == (i4 | 0)) {
   i8 = 15;
   break;
  } else {
   i7 = i9;
  }
 }
 if ((i8 | 0) == 13) {
  return;
 } else if ((i8 | 0) == 16) {
  return;
 } else if ((i8 | 0) == 15) {
  return;
 }
}
function __ZN3WTF6VectorIN7WebCore7IconURLELj0ENS_15CrashOnOverflowEE6shrinkEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 i4 = i1 + 8 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 i5 = i3 + (i1 << 6) | 0;
 if ((i1 | 0) == (i2 | 0)) {
  HEAP32[i4 >> 2] = i2;
  return;
 }
 i1 = i3 + (i2 << 6) | 0;
 while (1) {
  i3 = HEAP32[i1 + 12 >> 2] | 0;
  do {
   if ((i3 | 0) != 0) {
    i6 = i3 | 0;
    i7 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
    if ((i7 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i3);
     break;
    } else {
     HEAP32[i6 >> 2] = i7;
     break;
    }
   }
  } while (0);
  i3 = HEAP32[i1 + 8 >> 2] | 0;
  do {
   if ((i3 | 0) != 0) {
    i7 = i3 | 0;
    i6 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
    if ((i6 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i3);
     break;
    } else {
     HEAP32[i7 >> 2] = i6;
     break;
    }
   }
  } while (0);
  i3 = HEAP32[i1 + 4 >> 2] | 0;
  do {
   if ((i3 | 0) != 0) {
    i6 = i3 | 0;
    i7 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
    if ((i7 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i3);
     break;
    } else {
     HEAP32[i6 >> 2] = i7;
     break;
    }
   }
  } while (0);
  i1 = i1 + 64 | 0;
  if ((i1 | 0) == (i5 | 0)) {
   break;
  }
 }
 HEAP32[i4 >> 2] = i2;
 return;
}
function __ZN7WebCore8Document20mediaVolumeDidChangeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = HEAP32[i1 + 1468 >> 2] | 0;
 i3 = HEAP32[i1 + 1472 >> 2] | 0;
 i4 = i2 + (i3 << 2) | 0;
 if ((HEAP32[i1 + 1480 >> 2] | 0) == 0) {
  return;
 }
 L4 : do {
  if ((i3 | 0) == 0) {
   i5 = i2;
  } else {
   i1 = i2;
   while (1) {
    i6 = HEAP32[i1 >> 2] | 0;
    if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
     i5 = i1;
     break L4;
    }
    i1 = i1 + 4 | 0;
    if ((i1 | 0) == (i4 | 0)) {
     break;
    }
   }
   return;
  }
 } while (0);
 if ((i5 | 0) == (i4 | 0)) {
  return;
 } else {
  i7 = i5;
 }
 L12 : while (1) {
  i5 = HEAP32[i7 >> 2] | 0;
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 416 >> 2] & 127](i5);
  i5 = i7 + 4 | 0;
  if ((i5 | 0) == (i4 | 0)) {
   i8 = 11;
   break;
  } else {
   i9 = i5;
  }
  while (1) {
   i5 = HEAP32[i9 >> 2] | 0;
   if (!((i5 | 0) == (-1 | 0) | (i5 | 0) == 0)) {
    break;
   }
   i5 = i9 + 4 | 0;
   if ((i5 | 0) == (i4 | 0)) {
    i8 = 16;
    break L12;
   } else {
    i9 = i5;
   }
  }
  if ((i9 | 0) == (i4 | 0)) {
   i8 = 13;
   break;
  } else {
   i7 = i9;
  }
 }
 if ((i8 | 0) == 11) {
  return;
 } else if ((i8 | 0) == 13) {
  return;
 } else if ((i8 | 0) == 16) {
  return;
 }
}
function __ZN7WebCore8Document17addConsoleMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringEm(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6 | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 296 >> 2] & 127](i1) | 0)) {
  i8 = HEAP32[(HEAP32[i1 >> 2] | 0) + 288 >> 2] | 0;
  i9 = __ZN3WTF10fastMallocEj(16) | 0;
  HEAP32[i9 >> 2] = __ZTVN7WebCore22ScriptExecutionContext21AddConsoleMessageTaskE + 8;
  HEAP32[i9 + 4 >> 2] = i2;
  HEAP32[i9 + 8 >> 2] = i3;
  __ZNKR3WTF6String12isolatedCopyEv(i9 + 12 | 0, i4);
  i10 = i7 | 0;
  HEAP32[i10 >> 2] = i9;
  FUNCTION_TABLE_vii[i8 & 127](i1, i7);
  i7 = HEAP32[i10 >> 2] | 0;
  if ((i7 | 0) == 0) {
   STACKTOP = i6;
   return;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 127](i7);
  STACKTOP = i6;
  return;
 }
 i7 = HEAP32[i1 + 332 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i10 = HEAP32[i7 + 32 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 __ZN7WebCore11PageConsole10addMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringEmPNS_8DocumentE(HEAP32[i10 + 1148 >> 2] | 0, i2, i3, i4, i5, i1);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore8Document13textNodeSplitEPNS_4TextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 if ((HEAP32[i1 + 760 >> 2] | 0) == 0) {
  return;
 }
 i3 = HEAP32[i1 + 748 >> 2] | 0;
 i4 = HEAP32[i1 + 752 >> 2] | 0;
 i1 = i3 + (i4 << 2) | 0;
 L4 : do {
  if ((i4 | 0) == 0) {
   i5 = i3;
  } else {
   i6 = i3;
   while (1) {
    i7 = HEAP32[i6 >> 2] | 0;
    if (!((i7 | 0) == (-1 | 0) | (i7 | 0) == 0)) {
     i5 = i6;
     break L4;
    }
    i6 = i6 + 4 | 0;
    if ((i6 | 0) == (i1 | 0)) {
     break;
    }
   }
   return;
  }
 } while (0);
 if ((i5 | 0) == (i1 | 0)) {
  return;
 } else {
  i8 = i5;
 }
 L12 : while (1) {
  __ZN7WebCore5Range13textNodeSplitEPNS_4TextE(HEAP32[i8 >> 2] | 0, i2);
  i5 = i8 + 4 | 0;
  if ((i5 | 0) == (i1 | 0)) {
   i9 = 13;
   break;
  } else {
   i10 = i5;
  }
  while (1) {
   i5 = HEAP32[i10 >> 2] | 0;
   if (!((i5 | 0) == (-1 | 0) | (i5 | 0) == 0)) {
    break;
   }
   i5 = i10 + 4 | 0;
   if ((i5 | 0) == (i1 | 0)) {
    i9 = 16;
    break L12;
   } else {
    i10 = i5;
   }
  }
  if ((i10 | 0) == (i1 | 0)) {
   i9 = 14;
   break;
  } else {
   i8 = i10;
  }
 }
 if ((i9 | 0) == 13) {
  return;
 } else if ((i9 | 0) == 16) {
  return;
 } else if ((i9 | 0) == 14) {
  return;
 }
}
function __ZN7WebCore8Document28takeAnyMediaCanStartListenerEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = i1 + 1660 | 0;
 i3 = i1 + 1672 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i5 = i1 + 1664 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = i4 + (i6 << 2) | 0;
 if ((HEAP32[i3 >> 2] | 0) == 0) {
  i8 = 0;
  return i8 | 0;
 }
 L4 : do {
  if ((i6 | 0) == 0) {
   i9 = i4;
  } else {
   i10 = i4;
   while (1) {
    i11 = HEAP32[i10 >> 2] | 0;
    if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
     i9 = i10;
     break L4;
    }
    i11 = i10 + 4 | 0;
    if ((i11 | 0) == (i7 | 0)) {
     i8 = 0;
     break;
    } else {
     i10 = i11;
    }
   }
   return i8 | 0;
  }
 } while (0);
 if ((i9 | 0) == (i7 | 0)) {
  i8 = 0;
  return i8 | 0;
 }
 i7 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = -1;
 i9 = i1 + 1676 | 0;
 HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 i9 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 HEAP32[i3 >> 2] = i9;
 i3 = HEAP32[i5 >> 2] | 0;
 if (!((i9 * 6 & -1 | 0) < (i3 | 0) & (i3 | 0) > 8)) {
  i8 = i7;
  return i8 | 0;
 }
 __ZN3WTF9HashTableIPN7WebCore21MediaCanStartListenerES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2 | 0, (i3 | 0) / 2 & -1, 0) | 0;
 i8 = i7;
 return i8 | 0;
}
function __ZN7WebCore8Document18enqueueWindowEventEN3WTF10PassRefPtrINS_5EventEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i2 | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 i7 = HEAP32[i1 + 336 >> 2] | 0;
 i8 = i7 | 0;
 i9 = i4 | 0;
 HEAP32[i9 >> 2] = i8;
 if ((i7 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 56 >> 2] & 127](i8);
 }
 __ZN7WebCore5Event9setTargetEN3WTF10PassRefPtrINS_11EventTargetEEE(i2, i4);
 i4 = HEAP32[i9 >> 2] | 0;
 if ((i4 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 60 >> 2] & 127](i4);
 }
 i4 = i5 | 0;
 i9 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i4 >> 2] = i9;
 __ZN7WebCore18DocumentEventQueue12enqueueEventEN3WTF10PassRefPtrINS_5EventEEE(i1 + 1588 | 0, i5) | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = i5 + 8 | 0;
 i5 = i4 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i5 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
 i1 = i4 - 8 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 127](i1);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore8Document5closeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 344 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] & 127](i3) | 0) == 0) {
  return;
 }
 i3 = HEAP32[i2 >> 2] | 0;
 if ((HEAP8[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] & 127](i3) | 0) + 20 | 0] & 1) == 0) {
  return;
 }
 i3 = HEAP32[i2 >> 2] | 0;
 if ((HEAP32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] & 127](i3) | 0) + 8 >> 2] | 0) != 0) {
  return;
 }
 i3 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 + 4 | 0;
   HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 36 >> 2] & 127](i3);
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 127](i5);
  }
 } while (0);
 i3 = HEAP32[i1 + 332 >> 2] | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore8Document13implicitCloseEv(i1);
  return;
 } else {
  __ZN7WebCore11FrameLoader14checkCompletedEv(i3 + 80 | 0);
  return;
 }
}
function __ZN7WebCore8Document12elementSheetEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i1 + 656 | 0;
 if ((HEAP32[i5 >> 2] | 0) != 0) {
  i6 = HEAP32[i5 >> 2] | 0;
  STACKTOP = i2;
  return i6 | 0;
 }
 i7 = i4 | 0;
 HEAP32[i7 >> 2] = 0;
 __ZN7WebCore13CSSStyleSheet12createInlineERNS_4NodeERKNS_3URLERKN3WTF6StringE(i3, i1 | 0, i1 + 404 | 0, i4);
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i3 >> 2];
 do {
  if ((i4 | 0) != 0) {
   i3 = i4 + 4 | 0;
   i1 = i3 | 0;
   i8 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i1 >> 2] = i8;
    break;
   }
   i8 = i3 - 4 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 127](i8);
  }
 } while (0);
 i4 = HEAP32[i7 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i6 = HEAP32[i5 >> 2] | 0;
  STACKTOP = i2;
  return i6 | 0;
 }
 i7 = i4 | 0;
 i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
 if ((i8 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  i6 = HEAP32[i5 >> 2] | 0;
  STACKTOP = i2;
  return i6 | 0;
 } else {
  HEAP32[i7 >> 2] = i8;
  i6 = HEAP32[i5 >> 2] | 0;
  STACKTOP = i2;
  return i6 | 0;
 }
 return 0;
}
function __ZNK7WebCore8Document31displayStringModifiedByEncodingERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i2 + 1308 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i2 = HEAP32[i3 >> 2] | 0;
  HEAP32[i1 >> 2] = i2;
  if ((i2 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i7 = i2 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
  STACKTOP = i4;
  return;
 }
 i7 = HEAP32[i3 >> 2] | 0;
 i3 = (i7 | 0) == 0;
 do {
  if (i3) {
   i8 = (HEAP16[i6 + 12 >> 1] | 0) == 92;
  } else {
   i2 = i7 | 0;
   HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
   i2 = HEAP16[i6 + 12 >> 1] | 0;
   i9 = i2 << 16 >> 16 == 92;
   if (i9 | i3) {
    i8 = i9;
    break;
   }
   __ZN3WTF10StringImpl7replaceEtt(i5, i7, 92, i2);
   i2 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   HEAP32[i1 >> 2] = i2;
   i2 = i7 | 0;
   i9 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    STACKTOP = i4;
    return;
   } else {
    HEAP32[i2 >> 2] = i9;
    STACKTOP = i4;
    return;
   }
  }
 } while (0);
 HEAP32[i5 >> 2] = 0;
 HEAP32[i1 >> 2] = i8 ? i7 : 0;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore8Document52adjustFloatRectForScrollAndAbsoluteZoomAndFrameScaleERNS_9FloatRectERKNS_11RenderStyleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, d8 = +0, d9 = +0, i10 = 0, d11 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i5 | 0;
 i7 = i1 + 332 | 0;
 i1 = HEAP32[i7 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i1 + 452 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 d8 = +HEAPF32[(HEAP32[i3 + 24 >> 2] | 0) + 80 >> 2];
 d9 = +1 / +__ZNK7WebCore5Frame16frameScaleFactorEv(i1);
 i1 = HEAP32[i7 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i10 = 0;
 } else {
  i10 = HEAP32[i1 + 452 >> 2] | 0;
 }
 __ZNK7WebCore10ScrollView18visibleContentRectENS_14ScrollableArea36VisibleContentRectIncludesScrollbarsE(i5, i10 | 0, 0);
 d11 = +(-(HEAP32[i6 + 4 >> 2] | 0) | 0);
 i10 = i2 | 0;
 HEAPF32[i10 >> 2] = +HEAPF32[i10 >> 2] + +(-(HEAP32[i6 >> 2] | 0) | 0);
 i6 = i2 + 4 | 0;
 HEAPF32[i6 >> 2] = +HEAPF32[i6 >> 2] + d11;
 if (d8 != +1) {
  d11 = +1 / d8;
  __ZN7WebCore9FloatRect5scaleEff(i2, d11, d11);
 }
 if (d9 == +1) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore9FloatRect5scaleEff(i2, d9, d9);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore8Document20enqueueDocumentEventEN3WTF10PassRefPtrINS_5EventEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i2 | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 i7 = i1 | 0;
 i8 = i4 | 0;
 HEAP32[i8 >> 2] = i7;
 if ((i1 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 56 >> 2] & 127](i7);
 }
 __ZN7WebCore5Event9setTargetEN3WTF10PassRefPtrINS_11EventTargetEEE(i2, i4);
 i4 = HEAP32[i8 >> 2] | 0;
 if ((i4 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 60 >> 2] & 127](i4);
 }
 i4 = i5 | 0;
 i8 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i4 >> 2] = i8;
 __ZN7WebCore18DocumentEventQueue12enqueueEventEN3WTF10PassRefPtrINS_5EventEEE(i1 + 1588 | 0, i5) | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = i5 + 8 | 0;
 i5 = i4 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i5 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
 i1 = i4 - 8 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 127](i1);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore8Document12updateLayoutEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 332 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   __ZN7WebCore8Document19updateStyleIfNeededEv(i1);
  } else {
   i3 = HEAP32[i2 + 452 >> 2] | 0;
   i4 = (i3 | 0) != 0;
   do {
    if (i4) {
     if ((HEAP32[i3 + 304 >> 2] | 0) != 3) {
      break;
     }
     return;
    }
   } while (0);
   i5 = HEAP32[i2 + 448 >> 2] | 0;
   if ((i5 | 0) == 0) {
    __ZN7WebCore8Document19updateStyleIfNeededEv(i1);
    if (!i4) {
     break;
    }
   } else {
    __ZN7WebCore8Document12updateLayoutEv(HEAP32[(HEAP32[i5 + 20 >> 2] | 0) + 8 >> 2] | 0);
    __ZN7WebCore8Document19updateStyleIfNeededEv(i1);
    if (!i4) {
     break;
    }
   }
   i5 = i1 + 1584 | 0;
   if ((HEAP32[i5 >> 2] | 0) == 0) {
    break;
   }
   if (!(__ZNK7WebCore9FrameView13layoutPendingEv(i3) | 0)) {
    if ((HEAP32[(HEAP32[i5 >> 2] | 0) + 20 >> 2] & 31 | 0) == 0) {
     break;
    }
   }
   __ZN7WebCore9FrameView6layoutEb(i3, 1);
  }
 } while (0);
 if (+HEAPF64[i1 + 1192 >> 3] != +0) {
  return;
 }
 if ((HEAP32[i1 + 680 >> 2] | 0) == 0) {
  return;
 }
 __ZN7WebCore9TimerBase5startEdd(i1 + 1184 | 0, +0, +0);
 return;
}
function __ZN7WebCore10BorderDataD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 if ((HEAP8[i1 + 97 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 92 | 0);
 }
 if ((HEAP8[i1 + 89 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 84 | 0);
 }
 if ((HEAP8[i1 + 81 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 76 | 0);
 }
 if ((HEAP8[i1 + 73 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 68 | 0);
 }
 if ((HEAP8[i1 + 65 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 60 | 0);
 }
 if ((HEAP8[i1 + 57 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 52 | 0);
 }
 if ((HEAP8[i1 + 49 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 44 | 0);
 }
 if ((HEAP8[i1 + 41 | 0] | 0) != 10) {
  i2 = i1 + 32 | 0;
  i3 = HEAP32[i2 >> 2] | 0;
  i4 = i3 | 0;
  __ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv(i4);
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 36 | 0);
 i2 = i1 + 32 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i3 | 0;
 __ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv(i4);
 return;
}
function __ZN7WebCore8Document18setBaseURLOverrideERKNS_3URLE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = i3 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i1 + 452 | 0;
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
 i5 = i2 + 4 | 0;
 i4 = i1 + 456 | 0;
 i3 = HEAP8[i4] & -2 | HEAP8[i5] & 1;
 HEAP8[i4] = i3;
 HEAP8[i4] = i3 & -3 | HEAP8[i5] & 2;
 HEAP32[i1 + 460 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAP32[i1 + 464 >> 2] = HEAP32[i2 + 12 >> 2];
 HEAP32[i1 + 468 >> 2] = HEAP32[i2 + 16 >> 2];
 HEAP32[i1 + 472 >> 2] = HEAP32[i2 + 20 >> 2];
 HEAP32[i1 + 476 >> 2] = HEAP32[i2 + 24 >> 2];
 HEAP32[i1 + 480 >> 2] = HEAP32[i2 + 28 >> 2];
 HEAP32[i1 + 484 >> 2] = HEAP32[i2 + 32 >> 2];
 HEAP32[i1 + 488 >> 2] = HEAP32[i2 + 36 >> 2];
 HEAP32[i1 + 492 >> 2] = HEAP32[i2 + 40 >> 2];
 HEAP32[i1 + 496 >> 2] = HEAP32[i2 + 44 >> 2];
 __ZN7WebCore8Document13updateBaseURLEv(i1);
 return;
}
function __ZN7WebCore8Document30hasValidNamespaceForAttributesERKNS_13QualifiedNameE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[i2 + 8 >> 2] | 0;
 i3 = (i1 | 0) == 0;
 do {
  if (!i3) {
   if ((HEAP32[i1 + 4 >> 2] | 0) == 0) {
    break;
   }
   if ((HEAP32[i2 + 16 >> 2] | 0) == 0) {
    i4 = 0;
   } else {
    break;
   }
   return i4 | 0;
  }
 } while (0);
 do {
  if ((i1 | 0) == (HEAP32[__ZN3WTF7xmlAtomE >> 2] | 0)) {
   if ((HEAP32[i2 + 16 >> 2] | 0) == (HEAP32[__ZN7WebCore8XMLNames15xmlNamespaceURIE >> 2] | 0)) {
    break;
   } else {
    i4 = 0;
   }
   return i4 | 0;
  }
 } while (0);
 i5 = HEAP32[__ZN3WTF9xmlnsAtomE >> 2] | 0;
 do {
  if ((i1 | 0) != (i5 | 0)) {
   if (i3) {
    i6 = 9;
   } else {
    if ((HEAP32[i1 + 4 >> 2] | 0) == 0) {
     i6 = 9;
    }
   }
   if ((i6 | 0) == 9) {
    if ((HEAP32[i2 + 12 >> 2] | 0) == (i5 | 0)) {
     break;
    }
   }
   i4 = (HEAP32[i2 + 16 >> 2] | 0) != (HEAP32[__ZN7WebCore10XMLNSNames17xmlnsNamespaceURIE >> 2] | 0);
   return i4 | 0;
  }
 } while (0);
 i4 = (HEAP32[i2 + 16 >> 2] | 0) == (HEAP32[__ZN7WebCore10XMLNSNames17xmlnsNamespaceURIE >> 2] | 0);
 return i4 | 0;
}
function __ZN7WebCore8Document28hasValidNamespaceForElementsERKNS_13QualifiedNameE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[i2 + 8 >> 2] | 0;
 i3 = (i1 | 0) == 0;
 do {
  if (!i3) {
   if ((HEAP32[i1 + 4 >> 2] | 0) == 0) {
    break;
   }
   if ((HEAP32[i2 + 16 >> 2] | 0) == 0) {
    i4 = 0;
   } else {
    break;
   }
   return i4 | 0;
  }
 } while (0);
 do {
  if ((i1 | 0) == (HEAP32[__ZN3WTF7xmlAtomE >> 2] | 0)) {
   if ((HEAP32[i2 + 16 >> 2] | 0) == (HEAP32[__ZN7WebCore8XMLNames15xmlNamespaceURIE >> 2] | 0)) {
    break;
   } else {
    i4 = 0;
   }
   return i4 | 0;
  }
 } while (0);
 i5 = HEAP32[__ZN3WTF9xmlnsAtomE >> 2] | 0;
 do {
  if ((i1 | 0) != (i5 | 0)) {
   if (i3) {
    i6 = 9;
   } else {
    if ((HEAP32[i1 + 4 >> 2] | 0) == 0) {
     i6 = 9;
    }
   }
   if ((i6 | 0) == 9) {
    if ((HEAP32[i2 + 12 >> 2] | 0) == (i5 | 0)) {
     break;
    }
   }
   i4 = (HEAP32[i2 + 16 >> 2] | 0) != (HEAP32[__ZN7WebCore10XMLNSNames17xmlnsNamespaceURIE >> 2] | 0);
   return i4 | 0;
  }
 } while (0);
 i4 = (HEAP32[i2 + 16 >> 2] | 0) == (HEAP32[__ZN7WebCore10XMLNSNames17xmlnsNamespaceURIE >> 2] | 0);
 return i4 | 0;
}
function __ZN7WebCore8Document19dispatchWindowEventEN3WTF10PassRefPtrINS_5EventEEENS2_INS_11EventTargetEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = HEAP32[i1 + 336 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i1 = i5 | 0;
 i8 = i2 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i1 >> 2] = i2;
 i2 = i6 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i2 >> 2] = i3;
 __ZN7WebCore9DOMWindow13dispatchEventEN3WTF10PassRefPtrINS_5EventEEENS2_INS_11EventTargetEEE(i7, i5, i6) | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 if ((i6 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 60 >> 2] & 127](i6);
 }
 i6 = HEAP32[i1 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i1 = i6 + 8 | 0;
 i6 = i1 | 0;
 i2 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i6 >> 2] = i2;
  STACKTOP = i4;
  return;
 }
 i2 = i1 - 8 | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 127](i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore8Document15childrenChangedERKNS_13ContainerNode11ChildChangeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 __ZN7WebCore13ContainerNode15childrenChangedERKNS0_11ChildChangeE(i1 | 0, i2);
 i2 = i1 + 36 | 0;
 while (1) {
  i3 = HEAP32[i2 >> 2] | 0;
  if ((i3 | 0) == 0) {
   i4 = 0;
   break;
  }
  if ((HEAP32[i3 + 12 >> 2] & 4 | 0) == 0) {
   i2 = i3 + 28 | 0;
  } else {
   i4 = i3;
   break;
  }
 }
 i2 = i4;
 i3 = i1 + 692 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 | 0) == (i2 | 0)) {
  return;
 }
 if ((i4 | 0) == 0) {
  i6 = i5;
 } else {
  i5 = i4 + 8 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
  i6 = HEAP32[i3 >> 2] | 0;
 }
 HEAP32[i3 >> 2] = i2;
 do {
  if ((i6 | 0) != 0) {
   i2 = i6 + 8 | 0;
   i3 = i2 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   HEAP32[i3 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 i6 = i1 + 320 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 __ZN7WebCore13StyleResolverD1Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCoreL29wheelEventHandlerCountChangedEPNS_8DocumentE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = i1 + 332 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i3 = HEAP32[i1 + 32 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i3 + 60 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i4 = 0;
 } else {
  i5 = i1;
  i1 = 0;
  while (1) {
   i6 = HEAP32[i5 + 456 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i7 = i1;
   } else {
    i7 = (HEAP32[i6 + 1964 >> 2] | 0) + i1 | 0;
   }
   i6 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i5 + 40 | 0, 0) | 0;
   if ((i6 | 0) == 0) {
    i4 = i7;
    break;
   } else {
    i5 = i6;
    i1 = i7;
   }
  }
 }
 i7 = HEAP32[(HEAP32[i3 + 20 >> 2] | 0) + 8 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i7 >> 2] | 0) + 408 >> 2] & 127](i7, i4);
 i4 = __ZN7WebCore4Page20scrollingCoordinatorEv(i3) | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i2 = HEAP32[i3 + 452 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN7WebCore20ScrollingCoordinator38frameViewWheelEventHandlerCountChangedEPNS_9FrameViewE(i4, i2);
 return;
}
function __ZN7WebCore8Document28resetHiddenFocusElementTimerEPNS_5TimerIS0_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = HEAP32[i1 + 332 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i5 = HEAP32[i4 + 452 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   if (!(__ZNK7WebCore9FrameView11needsLayoutEv(i5) | 0)) {
    break;
   }
   STACKTOP = i2;
   return;
  }
 } while (0);
 i4 = HEAP32[i1 + 680 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 348 >> 2] & 127](i4) | 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = 0;
 __ZN7WebCore8Document17setFocusedElementEN3WTF10PassRefPtrINS_7ElementEEENS_14FocusDirectionE(i1, i3, 0) | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i3 + 8 | 0;
 i3 = i4 | 0;
 i1 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 HEAP32[i3 >> 2] = i1;
 if ((i1 | 0) >= 1) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
 STACKTOP = i2;
 return;
}
function __ZN3WTF12StringHasher28addCharactersAssumingAlignedItXadL_ZNS_15CaseFoldingHash8foldCaseItEEtT_EEEEvPKS4_j(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = (i3 & 1 | 0) == 0;
 i5 = i3 >>> 1;
 if ((i5 | 0) == 0) {
  i6 = i2;
 } else {
  i3 = i1 | 0;
  i7 = i5 << 1;
  i8 = i5;
  i5 = i2;
  while (1) {
   i9 = i8 - 1 | 0;
   i10 = _u_foldCase(HEAPU16[i5 >> 1] | 0, 0) | 0;
   i11 = _u_foldCase(HEAPU16[i5 + 2 >> 1] | 0, 0) | 0;
   i12 = (HEAP32[i3 >> 2] | 0) + (i10 & 65535) | 0;
   i10 = i12 ^ i11 << 11 & 134215680 ^ i12 << 16;
   HEAP32[i3 >> 2] = (i10 >>> 11) + i10;
   if ((i9 | 0) == 0) {
    break;
   } else {
    i8 = i9;
    i5 = i5 + 4 | 0;
   }
  }
  i6 = i2 + (i7 << 1) | 0;
 }
 if (i4) {
  return;
 }
 i4 = _u_foldCase(HEAPU16[i6 >> 1] | 0, 0) | 0;
 i6 = i1 + 4 | 0;
 if ((HEAP8[i6] & 1) == 0) {
  HEAP16[i1 + 6 >> 1] = i4;
  HEAP8[i6] = 1;
  return;
 } else {
  HEAP8[i6] = 0;
  i6 = i1 | 0;
  i7 = (HEAP32[i6 >> 2] | 0) + (HEAPU16[i1 + 6 >> 1] | 0) | 0;
  i1 = i7 ^ i4 << 11 & 134215680 ^ i7 << 16;
  HEAP32[i6 >> 2] = (i1 >>> 11) + i1;
  return;
 }
}
function __ZN7WebCore8Document5writeERKNS_15SegmentedStringEPS0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i4 = i1 + 1960 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i5;
 i6 = i1 + 1956 | 0;
 if (i5 >>> 0 > 1 >>> 0) {
  i7 = HEAP8[i6] & 1;
 } else {
  i7 = 0;
 }
 i8 = i5 >>> 0 > 21 >>> 0 ? 1 : i7;
 HEAP8[i6] = i8;
 if (i8 << 24 >> 24 != 0) {
  i9 = HEAP32[i4 >> 2] | 0;
  i10 = i9 - 1 | 0;
  HEAP32[i4 >> 2] = i10;
  return;
 }
 i8 = i1 + 344 | 0;
 i6 = HEAP32[i8 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i11 = 6;
 } else {
  if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 12 >> 2] & 127](i6) | 0)) {
   i11 = 6;
  }
 }
 do {
  if ((i11 | 0) == 6) {
   if ((HEAP32[i1 + 1092 >> 2] | 0) == 0) {
    __ZN7WebCore8Document4openEPS0_(i1, i3);
    break;
   } else {
    i9 = HEAP32[i4 >> 2] | 0;
    i10 = i9 - 1 | 0;
    HEAP32[i4 >> 2] = i10;
    return;
   }
  }
 } while (0);
 i3 = HEAP32[i8 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 16 >> 2] & 127](i3, i2);
 i9 = HEAP32[i4 >> 2] | 0;
 i10 = i9 - 1 | 0;
 HEAP32[i4 >> 2] = i10;
 return;
}
function __ZN3WTF12StringAppendINS0_IPKcNS_6StringEEES2_E7writeToEPh(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 i4 = _strlen(i3 | 0) | 0;
 i5 = i1 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = _strlen(i6 | 0) | 0;
 _memcpy(i2 | 0, i6 | 0, i7) | 0;
 i6 = i1 + 4 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i1 | 0) == 0) {
   i8 = 0;
   i9 = _strlen(HEAP32[i5 >> 2] | 0) | 0;
  } else {
   i10 = HEAP32[i1 + 4 >> 2] | 0;
   i11 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i10 | 0) == 0) {
    i12 = i1;
    i13 = _strlen(HEAP32[i5 >> 2] | 0) | 0;
   } else {
    i14 = 0;
    while (1) {
     HEAP8[i2 + (i14 + i7) | 0] = HEAP8[i11 + i14 | 0] | 0;
     i14 = i14 + 1 | 0;
     if (i14 >>> 0 >= i10 >>> 0) {
      break;
     }
    }
    i10 = HEAP32[i6 >> 2] | 0;
    i14 = _strlen(HEAP32[i5 >> 2] | 0) | 0;
    if ((i10 | 0) == 0) {
     i8 = 0;
     i9 = i14;
     break;
    } else {
     i12 = i10;
     i13 = i14;
    }
   }
   i8 = HEAP32[i12 + 4 >> 2] | 0;
   i9 = i13;
  }
 } while (0);
 _memcpy(i2 + (i8 + i9) | 0, i3 | 0, i4) | 0;
 return;
}
function __ZN7WebCore8Document11execCommandERKN3WTF6StringEbS4_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = HEAP32[i1 + 332 >> 2] | 0;
 do {
  if ((i7 | 0) == 0) {
   i8 = 3;
  } else {
   if ((HEAP32[i7 + 456 >> 2] | 0) != (i1 | 0)) {
    i8 = 3;
    break;
   }
   __ZN7WebCore8Document19updateStyleIfNeededEv(i1);
   __ZN7WebCore6Editor7commandERKN3WTF6StringENS_19EditorCommandSourceE(i6, HEAP32[i7 + 464 >> 2] | 0, i2, i3 ? 2 : 1);
  }
 } while (0);
 if ((i8 | 0) == 3) {
  __ZN7WebCore6Editor7CommandC1Ev(i6);
 }
 i8 = __ZNK7WebCore6Editor7Command7executeERKN3WTF6StringEPNS_5EventE(i6, i4, 0) | 0;
 i4 = HEAP32[i6 + 8 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i5;
  return i8 | 0;
 }
 i6 = i4 + 4 | 0;
 i4 = i6 | 0;
 i3 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i4 >> 2] = i3;
  STACKTOP = i5;
  return i8 | 0;
 }
 i3 = i6 - 4 | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i5;
  return i8 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 127](i3);
 STACKTOP = i5;
 return i8 | 0;
}
function __ZN7WebCore8Document13createElementERKN3WTF12AtomicStringERi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 if (!(__ZN7WebCore8Document11isValidNameERKN3WTF6StringE(i3 | 0) | 0)) {
  HEAP32[i4 >> 2] = 5;
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i5;
  return;
 }
 if ((HEAP8[i2 + 1576 | 0] & 2) == 0) {
  __ZN7WebCore13QualifiedNameC1ERKN3WTF12AtomicStringES4_S4_(i8, __ZN3WTF8nullAtomE, i3, __ZN3WTF8nullAtomE);
  __ZN7WebCore8Document13createElementERKNS_13QualifiedNameEb(i1, i2, i8, 0);
  __ZN7WebCore13QualifiedNameD1Ev(i8);
  STACKTOP = i5;
  return;
 } else {
  __ZN7WebCore13QualifiedNameC1ERKN3WTF12AtomicStringES4_S4_(i7, __ZN3WTF8nullAtomE, i3, __ZN7WebCore9HTMLNames17xhtmlNamespaceURIE);
  __ZN7WebCore18HTMLElementFactory13createElementERKNS_13QualifiedNameERNS_8DocumentEPNS_15HTMLFormElementEb(i6, i7, i2, 0, 0);
  i2 = i6 | 0;
  i6 = HEAP32[i2 >> 2] | 0;
  HEAP32[i2 >> 2] = 0;
  HEAP32[i1 >> 2] = i6;
  __ZN7WebCore13QualifiedNameD1Ev(i7);
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore14SecurityOriginD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
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
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
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
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i4 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i4;
  return;
 }
}
function __ZN3WTF12StringAppendINS0_INS0_IPKcNS_6StringEEES2_EES3_E7writeToEPt(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 __ZN3WTF12StringAppendINS0_IPKcNS_6StringEEES2_E7writeToEPt(i1 | 0, i2);
 i3 = _strlen(HEAP32[i1 + 8 >> 2] | 0) | 0;
 i4 = _strlen(HEAP32[i1 >> 2] | 0) | 0;
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = 0;
 } else {
  i6 = HEAP32[i5 + 4 >> 2] | 0;
 }
 i5 = i4 + i3 + i6 | 0;
 i6 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i6 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i6 + 4 >> 2] | 0;
 if ((HEAP32[i6 + 16 >> 2] & 32 | 0) == 0) {
  i3 = HEAP32[i6 + 8 >> 2] | 0;
  if ((i1 | 0) == 0) {
   return;
  } else {
   i7 = 0;
  }
  while (1) {
   HEAP16[i2 + (i7 + i5 << 1) >> 1] = HEAP16[i3 + (i7 << 1) >> 1] | 0;
   i7 = i7 + 1 | 0;
   if (i7 >>> 0 >= i1 >>> 0) {
    break;
   }
  }
  return;
 } else {
  i7 = HEAP32[i6 + 8 >> 2] | 0;
  if ((i1 | 0) == 0) {
   return;
  } else {
   i8 = 0;
  }
  while (1) {
   HEAP16[i2 + (i8 + i5 << 1) >> 1] = HEAPU8[i7 + i8 | 0] | 0;
   i8 = i8 + 1 | 0;
   if (i8 >>> 0 >= i1 >>> 0) {
    break;
   }
  }
  return;
 }
}
function __ZNK7WebCore8Document29fullScreenIsAllowedForElementEPNS_7ElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i1 = HEAP32[(HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i3 = 1;
  return i3 | 0;
 }
 i2 = HEAP32[i1 + 448 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 1;
  return i3 | 0;
 } else {
  i4 = i2;
 }
 while (1) {
  i2 = i4 | 0;
  if (!(__ZNK7WebCore7Element12hasAttributeERKNS_13QualifiedNameE(i2, __ZN7WebCore9HTMLNames19allowfullscreenAttrE) | 0)) {
   if (!(__ZNK7WebCore7Element12hasAttributeERKNS_13QualifiedNameE(i2, __ZN7WebCore9HTMLNames25webkitallowfullscreenAttrE) | 0)) {
    i3 = 0;
    i5 = 10;
    break;
   }
  }
  i2 = HEAP32[(HEAP32[(HEAP32[i4 + 20 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0;
  if ((i2 | 0) == 0) {
   i3 = 1;
   i5 = 9;
   break;
  }
  i1 = HEAP32[i2 + 448 >> 2] | 0;
  if ((i1 | 0) == 0) {
   i3 = 1;
   i5 = 8;
   break;
  } else {
   i4 = i1;
  }
 }
 if ((i5 | 0) == 9) {
  return i3 | 0;
 } else if ((i5 | 0) == 10) {
  return i3 | 0;
 } else if ((i5 | 0) == 8) {
  return i3 | 0;
 }
 return 0;
}
function __ZN3WTF5DequeINS_6RefPtrIN7WebCore8DocumentEEELj0EE14expandCapacityEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 8 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i3 + 1 + (i3 >>> 2) | 0;
 i7 = i6 >>> 0 > 16 >>> 0 ? i6 : 16;
 if (i7 >>> 0 > 1073741823 >>> 0) {
  _WTFCrash();
 }
 i6 = __ZN3WTF18fastMallocGoodSizeEj(i7 << 2) | 0;
 HEAP32[i2 >> 2] = i6 >>> 2;
 i7 = __ZN3WTF10fastMallocEj(i6) | 0;
 i6 = i7;
 HEAP32[i4 >> 2] = i6;
 i8 = i1 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = HEAP32[i1 + 4 >> 2] | 0;
 if (i9 >>> 0 > i10 >>> 0) {
  _memcpy(i7 | 0, i5 | 0, i10 << 2) | 0;
  i7 = HEAP32[i8 >> 2] | 0;
  i1 = i7 - i3 + (HEAP32[i2 >> 2] | 0) | 0;
  _memcpy((HEAP32[i4 >> 2] | 0) + (i1 << 2) | 0, i5 + (i7 << 2) | 0, i3 - i7 << 2) | 0;
  HEAP32[i8 >> 2] = i1;
 } else {
  _memcpy(i6 + (i9 << 2) | 0, i5 + (i9 << 2) | 0, i10 - i9 << 2) | 0;
 }
 if ((i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i2 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i5);
 return;
}
function __ZN3WTF5DequeINS_6RefPtrIN7WebCore4NodeEEELj0EE14expandCapacityEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 8 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i3 + 1 + (i3 >>> 2) | 0;
 i7 = i6 >>> 0 > 16 >>> 0 ? i6 : 16;
 if (i7 >>> 0 > 1073741823 >>> 0) {
  _WTFCrash();
 }
 i6 = __ZN3WTF18fastMallocGoodSizeEj(i7 << 2) | 0;
 HEAP32[i2 >> 2] = i6 >>> 2;
 i7 = __ZN3WTF10fastMallocEj(i6) | 0;
 i6 = i7;
 HEAP32[i4 >> 2] = i6;
 i8 = i1 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = HEAP32[i1 + 4 >> 2] | 0;
 if (i9 >>> 0 > i10 >>> 0) {
  _memcpy(i7 | 0, i5 | 0, i10 << 2) | 0;
  i7 = HEAP32[i8 >> 2] | 0;
  i1 = i7 - i3 + (HEAP32[i2 >> 2] | 0) | 0;
  _memcpy((HEAP32[i4 >> 2] | 0) + (i1 << 2) | 0, i5 + (i7 << 2) | 0, i3 - i7 << 2) | 0;
  HEAP32[i8 >> 2] = i1;
 } else {
  _memcpy(i6 + (i9 << 2) | 0, i5 + (i9 << 2) | 0, i10 - i9 << 2) | 0;
 }
 if ((i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i2 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i5);
 return;
}
function __ZN7WebCore8Document20queryCommandIndetermERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i1 + 332 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   i6 = 3;
  } else {
   if ((HEAP32[i5 + 456 >> 2] | 0) != (i1 | 0)) {
    i6 = 3;
    break;
   }
   __ZN7WebCore8Document19updateStyleIfNeededEv(i1);
   __ZN7WebCore6Editor7commandERKN3WTF6StringENS_19EditorCommandSourceE(i4, HEAP32[i5 + 464 >> 2] | 0, i2, 1);
  }
 } while (0);
 if ((i6 | 0) == 3) {
  __ZN7WebCore6Editor7CommandC1Ev(i4);
 }
 i6 = (__ZNK7WebCore6Editor7Command5stateEPNS_5EventE(i4, 0) | 0) == 2;
 i2 = HEAP32[i4 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return i6 | 0;
 }
 i4 = i2 + 4 | 0;
 i2 = i4 | 0;
 i5 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i2 >> 2] = i5;
  STACKTOP = i3;
  return i6 | 0;
 }
 i5 = i4 - 4 | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return i6 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 127](i5);
 STACKTOP = i3;
 return i6 | 0;
}
function __ZN7WebCore8Document17queryCommandStateERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i1 + 332 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   i6 = 3;
  } else {
   if ((HEAP32[i5 + 456 >> 2] | 0) != (i1 | 0)) {
    i6 = 3;
    break;
   }
   __ZN7WebCore8Document19updateStyleIfNeededEv(i1);
   __ZN7WebCore6Editor7commandERKN3WTF6StringENS_19EditorCommandSourceE(i4, HEAP32[i5 + 464 >> 2] | 0, i2, 1);
  }
 } while (0);
 if ((i6 | 0) == 3) {
  __ZN7WebCore6Editor7CommandC1Ev(i4);
 }
 i6 = (__ZNK7WebCore6Editor7Command5stateEPNS_5EventE(i4, 0) | 0) == 1;
 i2 = HEAP32[i4 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return i6 | 0;
 }
 i4 = i2 + 4 | 0;
 i2 = i4 | 0;
 i5 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i2 >> 2] = i5;
  STACKTOP = i3;
  return i6 | 0;
 }
 i5 = i4 - 4 | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return i6 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 127](i5);
 STACKTOP = i3;
 return i6 | 0;
}
function __ZN7WebCore8Document19queryCommandEnabledERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i1 + 332 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   i6 = 3;
  } else {
   if ((HEAP32[i5 + 456 >> 2] | 0) != (i1 | 0)) {
    i6 = 3;
    break;
   }
   __ZN7WebCore8Document19updateStyleIfNeededEv(i1);
   __ZN7WebCore6Editor7commandERKN3WTF6StringENS_19EditorCommandSourceE(i4, HEAP32[i5 + 464 >> 2] | 0, i2, 1);
  }
 } while (0);
 if ((i6 | 0) == 3) {
  __ZN7WebCore6Editor7CommandC1Ev(i4);
 }
 i6 = __ZNK7WebCore6Editor7Command9isEnabledEPNS_5EventE(i4, 0) | 0;
 i2 = HEAP32[i4 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return i6 | 0;
 }
 i4 = i2 + 4 | 0;
 i2 = i4 | 0;
 i5 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i2 >> 2] = i5;
  STACKTOP = i3;
  return i6 | 0;
 }
 i5 = i4 - 4 | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return i6 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 127](i5);
 STACKTOP = i3;
 return i6 | 0;
}
function __ZN3WTF5DequeIPN7WebCore8DocumentELj0EE14expandCapacityEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 8 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i3 + 1 + (i3 >>> 2) | 0;
 i7 = i6 >>> 0 > 16 >>> 0 ? i6 : 16;
 if (i7 >>> 0 > 1073741823 >>> 0) {
  _WTFCrash();
 }
 i6 = __ZN3WTF18fastMallocGoodSizeEj(i7 << 2) | 0;
 HEAP32[i2 >> 2] = i6 >>> 2;
 i7 = __ZN3WTF10fastMallocEj(i6) | 0;
 i6 = i7;
 HEAP32[i4 >> 2] = i6;
 i8 = i1 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = HEAP32[i1 + 4 >> 2] | 0;
 if (i9 >>> 0 > i10 >>> 0) {
  _memcpy(i7 | 0, i5 | 0, i10 << 2) | 0;
  i7 = HEAP32[i8 >> 2] | 0;
  i1 = i7 - i3 + (HEAP32[i2 >> 2] | 0) | 0;
  _memcpy((HEAP32[i4 >> 2] | 0) + (i1 << 2) | 0, i5 + (i7 << 2) | 0, i3 - i7 << 2) | 0;
  HEAP32[i8 >> 2] = i1;
 } else {
  _memcpy(i6 + (i9 << 2) | 0, i5 + (i9 << 2) | 0, i10 - i9 << 2) | 0;
 }
 if ((i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i2 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i5);
 return;
}
function __ZN7WebCore8Document21queryCommandSupportedERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i1 + 332 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   i6 = 3;
  } else {
   if ((HEAP32[i5 + 456 >> 2] | 0) != (i1 | 0)) {
    i6 = 3;
    break;
   }
   __ZN7WebCore8Document19updateStyleIfNeededEv(i1);
   __ZN7WebCore6Editor7commandERKN3WTF6StringENS_19EditorCommandSourceE(i4, HEAP32[i5 + 464 >> 2] | 0, i2, 1);
  }
 } while (0);
 if ((i6 | 0) == 3) {
  __ZN7WebCore6Editor7CommandC1Ev(i4);
 }
 i6 = __ZNK7WebCore6Editor7Command11isSupportedEv(i4) | 0;
 i2 = HEAP32[i4 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return i6 | 0;
 }
 i4 = i2 + 4 | 0;
 i2 = i4 | 0;
 i5 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i2 >> 2] = i5;
  STACKTOP = i3;
  return i6 | 0;
 }
 i5 = i4 - 4 | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return i6 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 127](i5);
 STACKTOP = i3;
 return i6 | 0;
}
function __ZN7WebCore8Document19webkitGetNamedFlowsEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 do {
  if ((HEAP8[(__ZN7WebCore22RuntimeEnabledFeatures14sharedFeaturesEv() | 0) + 13 | 0] & 1) != 0) {
   if ((HEAP32[i2 + 1584 >> 2] | 0) == 0) {
    break;
   }
   __ZN7WebCore8Document19updateStyleIfNeededEv(i2);
   i3 = i2 + 2112 | 0;
   do {
    if ((HEAP32[i3 >> 2] | 0) == 0) {
     i4 = __ZN3WTF10fastMallocEj(44) | 0;
     __ZN7WebCore19NamedFlowCollectionC1EPNS_8DocumentE(i4, i2);
     i5 = HEAP32[i3 >> 2] | 0;
     HEAP32[i3 >> 2] = i4;
     if ((i5 | 0) == 0) {
      break;
     }
     i4 = i5 + 8 | 0;
     i5 = i4 | 0;
     i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
     if ((i6 | 0) != 0) {
      HEAP32[i5 >> 2] = i6;
      break;
     }
     i6 = i4 - 8 | 0;
     if ((i6 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] & 127](i6);
    }
   } while (0);
   __ZN7WebCore19NamedFlowCollection19createCSSOMSnapshotEv(i1, HEAP32[i3 >> 2] | 0);
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZN7WebCore8Document17queryCommandValueERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i2 + 332 >> 2] | 0;
 do {
  if ((i6 | 0) == 0) {
   i7 = 3;
  } else {
   if ((HEAP32[i6 + 456 >> 2] | 0) != (i2 | 0)) {
    i7 = 3;
    break;
   }
   __ZN7WebCore8Document19updateStyleIfNeededEv(i2);
   __ZN7WebCore6Editor7commandERKN3WTF6StringENS_19EditorCommandSourceE(i5, HEAP32[i6 + 464 >> 2] | 0, i3, 1);
  }
 } while (0);
 if ((i7 | 0) == 3) {
  __ZN7WebCore6Editor7CommandC1Ev(i5);
 }
 __ZNK7WebCore6Editor7Command5valueEPNS_5EventE(i1, i5, 0);
 i1 = HEAP32[i5 + 8 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i5 = i1 + 4 | 0;
 i1 = i5 | 0;
 i7 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i7 | 0) != 0) {
  HEAP32[i1 >> 2] = i7;
  STACKTOP = i4;
  return;
 }
 i7 = i5 - 4 | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 127](i7);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore8Document19updateStyleIfNeededEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 + 332 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i4 = HEAP32[i3 + 452 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 + 304 >> 2] | 0) == 3) {
  return;
 }
 if (+HEAPF64[i1 + 976 >> 3] != +0) {
  __ZN7WebCore8Document20styleResolverChangedENS_23StyleResolverUpdateFlagE(i1, 2);
 }
 do {
  if ((HEAP8[i1 + 1080 | 0] & 1) == 0) {
   if ((HEAP32[i1 + 12 >> 2] & 128 | 0) != 0) {
    break;
   }
   return;
  }
 } while (0);
 if ((HEAP8[i1 + 1433 | 0] & 1) != 0) {
  return;
 }
 i4 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i2 = HEAP32[i4 + 476 >> 2] | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   __ZN7WebCore19AnimationController20beginAnimationUpdateEv(i2);
   __ZN7WebCore8Document11recalcStyleENS_5Style6ChangeE(i1, 0);
   __ZN7WebCore19AnimationController18endAnimationUpdateEv(i2);
   return;
  }
 } while (0);
 __ZN7WebCore8Document11recalcStyleENS_5Style6ChangeE(i1, 0);
 return;
}
function __ZN7WebCore8Document15processViewportERKN3WTF6StringENS_17ViewportArguments4TypeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = i1 + 1896 | 0;
 if ((HEAP32[i4 >> 2] | 0) > (i3 | 0)) {
  return;
 }
 HEAP32[i1 + 1896 >> 2] = i3;
 HEAPF32[i1 + 1900 >> 2] = +-1;
 HEAPF32[i1 + 1904 >> 2] = +-1;
 HEAPF32[i1 + 1908 >> 2] = +-1;
 HEAPF32[i1 + 1912 >> 2] = +-1;
 HEAPF32[i1 + 1916 >> 2] = +-1;
 HEAPF32[i1 + 1920 >> 2] = +-1;
 HEAPF32[i1 + 1924 >> 2] = +-1;
 HEAPF32[i1 + 1928 >> 2] = +-1;
 HEAPF32[i1 + 1932 >> 2] = +-1;
 HEAPF32[i1 + 1936 >> 2] = +-1;
 HEAPF32[i1 + 1940 >> 2] = +-1;
 __ZN7WebCore8Document16processArgumentsERKN3WTF6StringEPvPFvS4_S4_PS0_S5_E(i1, i2, i4, F_BASE_viiii + 2 | 0);
 i2 = HEAP32[i1 + 332 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i2 + 32 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 if ((HEAP32[i2 + 28 >> 2] | 0) != (i2 | 0)) {
  return;
 }
 __ZNK7WebCore6Chrome35dispatchViewportPropertiesDidChangeERKNS_17ViewportArgumentsE(HEAP32[i1 + 20 >> 2] | 0, i4);
 return;
}
function __ZNK7WebCore8Document23webkitFullscreenEnabledEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 332 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 1;
  return i3 | 0;
 }
 i1 = HEAP32[i2 + 448 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i3 = 1;
  return i3 | 0;
 } else {
  i4 = i1;
 }
 while (1) {
  i1 = i4 | 0;
  if (!(__ZNK7WebCore7Element12hasAttributeERKNS_13QualifiedNameE(i1, __ZN7WebCore9HTMLNames19allowfullscreenAttrE) | 0)) {
   if (!(__ZNK7WebCore7Element12hasAttributeERKNS_13QualifiedNameE(i1, __ZN7WebCore9HTMLNames25webkitallowfullscreenAttrE) | 0)) {
    i3 = 0;
    i5 = 10;
    break;
   }
  }
  i1 = HEAP32[(HEAP32[(HEAP32[i4 + 20 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0;
  if ((i1 | 0) == 0) {
   i3 = 1;
   i5 = 11;
   break;
  }
  i2 = HEAP32[i1 + 448 >> 2] | 0;
  if ((i2 | 0) == 0) {
   i3 = 1;
   i5 = 12;
   break;
  } else {
   i4 = i2;
  }
 }
 if ((i5 | 0) == 10) {
  return i3 | 0;
 } else if ((i5 | 0) == 11) {
  return i3 | 0;
 } else if ((i5 | 0) == 12) {
  return i3 | 0;
 }
 return 0;
}
function __ZN7WebCore8Document10setContentERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 __ZN7WebCore8Document4openEPS0_(i1, 0);
 i5 = i1 + 344 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 28 >> 2] & 127](i6);
 i6 = HEAP32[i5 >> 2] | 0;
 i5 = HEAP32[(HEAP32[i6 >> 2] | 0) + 32 >> 2] | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 i2 = i4 | 0;
 HEAP32[i2 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i8 = i7 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 FUNCTION_TABLE_vii[i5 & 127](i6, i4);
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore8Document5closeEv(i1);
  STACKTOP = i3;
  return;
 }
 i2 = i4 | 0;
 i6 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  __ZN7WebCore8Document5closeEv(i1);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i2 >> 2] = i6;
  __ZN7WebCore8Document5closeEv(i1);
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore8Document19getCSSCanvasContextERKN3WTF6StringES4_ii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, d9 = +0;
 i6 = __ZN7WebCore8Document19getCSSCanvasElementERKN3WTF6StringE(i1, i3) | 0;
 if ((i6 | 0) == 0) {
  i7 = 0;
  return i7 | 0;
 }
 do {
  if ((HEAP32[i6 + 72 >> 2] | 0) == (i4 | 0)) {
   if ((HEAP32[i6 + 76 >> 2] | 0) != (i5 | 0)) {
    i8 = 5;
    break;
   }
   d9 = +__ZNK7WebCore17HTMLCanvasElement23targetDeviceScaleFactorEv(i6);
   if (d9 != +HEAPF32[i6 + 104 >> 2]) {
    i8 = 5;
   }
  } else {
   i8 = 5;
  }
 } while (0);
 if ((i8 | 0) == 5) {
  i8 = i6 + 85 | 0;
  HEAP8[i8] = 1;
  __ZN7WebCore17HTMLCanvasElement8setWidthEi(i6, i4);
  __ZN7WebCore17HTMLCanvasElement9setHeightEi(i6, i5);
  HEAP8[i8] = 0;
  __ZN7WebCore17HTMLCanvasElement5resetEv(i6);
 }
 i7 = __ZN7WebCore17HTMLCanvasElement10getContextERKN3WTF6StringEPNS_23CanvasContextAttributesE(i6, i2, 0) | 0;
 return i7 | 0;
}
function __ZN7WebCore8Document16createRenderTreeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 if ((HEAP8[i1 + 1578 | 0] & 1) != 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore11RenderStyle6createEv(i4);
 i5 = __ZN3WTF10fastMallocEj(232) | 0;
 HEAP32[i3 >> 2] = HEAP32[i4 >> 2];
 __ZN7WebCore10RenderViewC1ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEE(i5, i1, i3);
 i3 = i1 + 1584 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i5;
 if ((i4 | 0) == 0) {
  i6 = i5;
 } else {
  __ZN7WebCore12RenderObject7destroyEv(i4 | 0);
  i6 = HEAP32[i3 >> 2] | 0;
 }
 i4 = i6 | 0;
 if ((HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0) {
  HEAP32[i1 + 32 >> 2] = i4;
  i7 = i6;
 } else {
  HEAP32[HEAP32[i1 + 32 >> 2] >> 2] = i4;
  i7 = HEAP32[i3 >> 2] | 0;
 }
 __ZN7WebCore10RenderView13setIsInWindowEb(i7, 1);
 __ZN7WebCore8Document11recalcStyleENS_5Style6ChangeE(i1, 4);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore8Document31setWindowAttributeEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i1 + 336 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i1 = i5 | 0;
 i7 = i3 | 0;
 i3 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i1 >> 2] = i3;
 __ZN7WebCore11EventTarget25setAttributeEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEE(i6 | 0, i2, i5) | 0;
 i5 = HEAP32[i1 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i1 = i5 + 4 | 0;
 i5 = i1 | 0;
 i2 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i5 >> 2] = i2;
  STACKTOP = i4;
  return;
 }
 i2 = i1 - 4 | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 127](i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore8Document27clearFullscreenElementStackEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = i1 + 1696 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  return;
 }
 i3 = i1 + 1700 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i1 + 1692 | 0;
 if ((i4 | 0) != 0) {
  i1 = HEAP32[i5 >> 2] | 0;
  i6 = i1 + (i4 << 2) | 0;
  i4 = i1;
  while (1) {
   i1 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i1 | 0) != 0) {
     i7 = i1 + 8 | 0;
     i8 = i7 | 0;
     i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     HEAP32[i8 >> 2] = i9;
     if ((i9 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
    }
   } while (0);
   i4 = i4 + 4 | 0;
   if ((i4 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i3 >> 2] = 0;
 }
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 HEAP32[i5 >> 2] = 0;
 HEAP32[i2 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i3);
 return;
}
function __ZThn88_N7WebCore8Document8postTaskEN3WTF10PassOwnPtrINS_22ScriptExecutionContext4TaskEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = __ZN3WTF10fastMallocEj(8) | 0;
 i4 = HEAP32[i1 - 2288 + 3856 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i1 = i2 | 0;
  i5 = HEAP32[i1 >> 2] | 0;
  HEAP32[i1 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
  HEAP32[i3 + 4 >> 2] = i5;
  __ZN3WTF16callOnMainThreadEPFvPvES0_(F_BASE_vi + 78 | 0, i3);
  return;
 }
 i5 = i4 | 0;
 tempValue = HEAP32[i5 >> 2] | 0, HEAP32[i5 >> 2] = tempValue + 1, tempValue;
 i1 = i2 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i3 >> 2] = i4;
 tempValue = HEAP32[i5 >> 2] | 0, HEAP32[i5 >> 2] = tempValue + 1, tempValue;
 HEAP32[i3 + 4 >> 2] = i2;
 __ZN3WTF16callOnMainThreadEPFvPvES0_(F_BASE_vi + 78 | 0, i3);
 if (((tempValue = HEAP32[i5 >> 2] | 0, HEAP32[i5 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  return;
 }
 __ZN3WTF8fastFreeEPv(i4);
 return;
}
function __ZN7WebCore8Document18documentNamedItemsERKN3WTF12AtomicStringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (__ZN7WebCore4Node14ensureRareDataEv(i2 | 0) | 0) + 8 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i7 | 0) == 0) {
   i8 = __ZN3WTF10fastMallocEj(88) | 0;
   i9 = i8;
   _memset(i8 | 0, 0, 88) | 0;
   i8 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = i9;
   if ((i8 | 0) == 0) {
    i10 = i9;
    break;
   }
   __ZN7WebCore17NodeListsNodeDataD2Ev(i8);
   __ZN3WTF8fastFreeEPv(i8);
   i10 = HEAP32[i6 >> 2] | 0;
  } else {
   i10 = i7;
  }
 } while (0);
 __ZN7WebCore17NodeListsNodeData19addCachedCollectionINS_22DocumentNameCollectionENS_8DocumentEEEN3WTF10PassRefPtrIT_EERT0_NS_14CollectionTypeERKNS4_12AtomicStringE(i5, i10, i2, 9, i3);
 HEAP32[i1 >> 2] = HEAP32[i5 >> 2];
 STACKTOP = i4;
 return;
}
function __ZN7WebCore8Document16windowNamedItemsERKN3WTF12AtomicStringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (__ZN7WebCore4Node14ensureRareDataEv(i2 | 0) | 0) + 8 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i7 | 0) == 0) {
   i8 = __ZN3WTF10fastMallocEj(88) | 0;
   i9 = i8;
   _memset(i8 | 0, 0, 88) | 0;
   i8 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = i9;
   if ((i8 | 0) == 0) {
    i10 = i9;
    break;
   }
   __ZN7WebCore17NodeListsNodeDataD2Ev(i8);
   __ZN3WTF8fastFreeEPv(i8);
   i10 = HEAP32[i6 >> 2] | 0;
  } else {
   i10 = i7;
  }
 } while (0);
 __ZN7WebCore17NodeListsNodeData19addCachedCollectionINS_20WindowNameCollectionENS_8DocumentEEEN3WTF10PassRefPtrIT_EERT0_NS_14CollectionTypeERKNS4_12AtomicStringE(i5, i10, i2, 8, i3);
 HEAP32[i1 >> 2] = HEAP32[i5 >> 2];
 STACKTOP = i4;
 return;
}
function __ZN7WebCore8Document15setTitleElementERKNS_19StringWithDirectionEPNS_7ElementE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = i1 + 1116 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i5 | 0) != (i3 | 0)) {
   if ((i5 | 0) != 0) {
    return;
   }
   if ((HEAP8[i1 + 1112 | 0] & 1) != 0) {
    return;
   }
   if ((i3 | 0) == 0) {
    HEAP32[i4 >> 2] = i3;
    break;
   }
   i6 = i3 + 8 | 0;
   HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
   i6 = HEAP32[i4 >> 2] | 0;
   HEAP32[i4 >> 2] = i3;
   if ((i6 | 0) == 0) {
    break;
   }
   i7 = i6 + 8 | 0;
   i6 = i7 | 0;
   i8 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i8;
   if ((i8 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore8Document11updateTitleERKNS_19StringWithDirectionE(i1, i2);
 return;
}
function __ZN7WebCore8Document8postTaskEN3WTF10PassOwnPtrINS_22ScriptExecutionContext4TaskEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = __ZN3WTF10fastMallocEj(8) | 0;
 i4 = HEAP32[i1 + 1656 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i1 = i2 | 0;
  i5 = HEAP32[i1 >> 2] | 0;
  HEAP32[i1 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
  HEAP32[i3 + 4 >> 2] = i5;
  __ZN3WTF16callOnMainThreadEPFvPvES0_(F_BASE_vi + 78 | 0, i3);
  return;
 }
 i5 = i4 | 0;
 tempValue = HEAP32[i5 >> 2] | 0, HEAP32[i5 >> 2] = tempValue + 1, tempValue;
 i1 = i2 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i3 >> 2] = i4;
 tempValue = HEAP32[i5 >> 2] | 0, HEAP32[i5 >> 2] = tempValue + 1, tempValue;
 HEAP32[i3 + 4 >> 2] = i2;
 __ZN3WTF16callOnMainThreadEPFvPvES0_(F_BASE_vi + 78 | 0, i3);
 if (((tempValue = HEAP32[i5 >> 2] | 0, HEAP32[i5 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  return;
 }
 __ZN3WTF8fastFreeEPv(i4);
 return;
}
function __ZN7WebCore8Document22pendingTasksTimerFiredEPNS_5TimerIS0_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = i1 + 2048 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  return;
 }
 i3 = i1 + 2040 | 0;
 i4 = i1 + 88 | 0;
 while (1) {
  i1 = HEAP32[i3 >> 2] | 0;
  i5 = HEAP32[i1 >> 2] | 0;
  HEAP32[i1 >> 2] = 0;
  i1 = HEAP32[i3 >> 2] | 0;
  i6 = HEAP32[i1 >> 2] | 0;
  if ((i6 | 0) == 0) {
   i7 = i1;
  } else {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 127](i6);
   i7 = HEAP32[i3 >> 2] | 0;
  }
  i6 = i1 + 4 | 0;
  _memmove(i1 | 0, i6 | 0, i7 + (HEAP32[i2 >> 2] << 2) - i6 | 0) | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) - 1;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 127](i5, i4);
  if ((i5 | 0) != 0) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 127](i5);
  }
  if ((HEAP32[i2 >> 2] | 0) == 0) {
   break;
  }
 }
 return;
}
function __ZThn88_N7WebCore8Document21logExceptionToConsoleERKN3WTF6StringES4_iiNS1_10PassRefPtrINS_15ScriptCallStackEEE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i8 = i7 | 0;
 i9 = i1 - 2288 + 2200 | 0;
 i1 = HEAP32[(HEAP32[i9 >> 2] | 0) + 344 >> 2] | 0;
 i10 = i8 | 0;
 i11 = i6 | 0;
 i6 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i10 >> 2] = i6;
 FUNCTION_TABLE_viiiiiiiiii[i1 & 7](i9, 1, 3, i2, i3, i4, i5, i8, 0, 0);
 i8 = HEAP32[i10 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i10 = i8 | 0;
 i5 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore15ScriptCallStackD1Ev(i8);
  __ZN3WTF8fastFreeEPv(i8);
  STACKTOP = i7;
  return;
 } else {
  HEAP32[i10 >> 2] = i5;
  STACKTOP = i7;
  return;
 }
}
function __ZN7WebCore8Document17pushCurrentScriptEN3WTF10PassRefPtrINS_17HTMLScriptElementEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = i1 + 1272 | 0;
 i4 = i1 + 1280 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == (HEAP32[i1 + 1276 >> 2] | 0)) {
  __ZN3WTF6VectorINS_6RefPtrIN7WebCore17HTMLScriptElementEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i5 + 1 | 0);
  i1 = (HEAP32[i3 >> 2] | 0) + (HEAP32[i4 >> 2] << 2) | 0;
  i6 = i2 | 0;
  i7 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = 0;
  HEAP32[i1 >> 2] = i7;
  i8 = HEAP32[i4 >> 2] | 0;
  i9 = i8 + 1 | 0;
  HEAP32[i4 >> 2] = i9;
  return;
 } else {
  i7 = (HEAP32[i3 >> 2] | 0) + (i5 << 2) | 0;
  i5 = i2 | 0;
  i2 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = 0;
  HEAP32[i7 >> 2] = i2;
  i8 = HEAP32[i4 >> 2] | 0;
  i9 = i8 + 1 | 0;
  HEAP32[i4 >> 2] = i9;
  return;
 }
}
function __ZN7WebCore8Document21logExceptionToConsoleERKN3WTF6StringES4_iiNS1_10PassRefPtrINS_15ScriptCallStackEEE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[(HEAP32[i1 >> 2] | 0) + 344 >> 2] | 0;
 i10 = i8 | 0;
 i11 = i6 | 0;
 i6 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i10 >> 2] = i6;
 FUNCTION_TABLE_viiiiiiiiii[i9 & 7](i1, 1, 3, i2, i3, i4, i5, i8, 0, 0);
 i8 = HEAP32[i10 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i10 = i8 | 0;
 i5 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore15ScriptCallStackD1Ev(i8);
  __ZN3WTF8fastFreeEPv(i8);
  STACKTOP = i7;
  return;
 } else {
  HEAP32[i10 >> 2] = i5;
  STACKTOP = i7;
  return;
 }
}
function __ZN7WebCore8Document8evaluateERKN3WTF6StringEPNS_4NodeEPNS_15XPathNSResolverEtPNS_11XPathResultERi(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 var i9 = 0, i10 = 0, i11 = 0;
 i9 = i2 + 1388 | 0;
 do {
  if ((HEAP32[i9 >> 2] | 0) == 0) {
   i2 = __ZN3WTF10fastMallocEj(4) | 0;
   HEAP32[i2 >> 2] = 1;
   i10 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = i2;
   if ((i10 | 0) == 0) {
    break;
   }
   i2 = i10 | 0;
   i11 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF8fastFreeEPv(i10);
    break;
   } else {
    HEAP32[i2 >> 2] = i11;
    break;
   }
  }
 } while (0);
 __ZN7WebCore14XPathEvaluator8evaluateERKN3WTF6StringEPNS_4NodeEPNS_15XPathNSResolverEtPNS_11XPathResultERi(i1, HEAP32[i9 >> 2] | 0, i3, i4, i5, i6, i7, i8);
 return;
}
function __ZN7WebCore8Document25createCSSStyleDeclarationEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 __ZN7WebCore22MutableStyleProperties6createENS_13CSSParserModeE(i3, 0);
 i4 = HEAP32[i3 >> 2] | 0;
 i3 = __ZN7WebCore22MutableStyleProperties25ensureCSSStyleDeclarationEv(i4) | 0;
 HEAP32[i1 >> 2] = i3;
 if ((i3 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] & 127](i3);
 }
 i3 = i4 | 0;
 i1 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i3 >> 2] = i1;
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i4 + 4 >> 2] & 4 | 0) == 0) {
  __ZN7WebCore24ImmutableStylePropertiesD1Ev(i4);
  __ZN3WTF8fastFreeEPv(i4);
  STACKTOP = i2;
  return;
 } else {
  __ZN7WebCore22MutableStylePropertiesD1Ev(i4);
  __ZN3WTF8fastFreeEPv(i4);
  STACKTOP = i2;
  return;
 }
}
function __ZN3WTF6VectorINS_6OwnPtrIN7WebCore22ScriptExecutionContext4TaskEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i1 + 4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i4 + 1 + (i4 >>> 2) | 0;
 i6 = i5 >>> 0 > 16 >>> 0 ? i5 : 16;
 i5 = i6 >>> 0 > i2 >>> 0 ? i6 : i2;
 if (i4 >>> 0 >= i5 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 if (i5 >>> 0 > 1073741823 >>> 0) {
  _WTFCrash();
 }
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = __ZN3WTF18fastMallocGoodSizeEj(i5 << 2) | 0;
 HEAP32[i3 >> 2] = i1 >>> 2;
 i5 = __ZN3WTF10fastMallocEj(i1) | 0;
 HEAP32[i4 >> 2] = i5;
 i1 = i2;
 _memcpy(i5 | 0, i1 | 0, i6 << 2) | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i2 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore8Document3allEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = (__ZN7WebCore4Node14ensureRareDataEv(i2 | 0) | 0) + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i6 | 0) == 0) {
   i7 = __ZN3WTF10fastMallocEj(88) | 0;
   i8 = i7;
   _memset(i7 | 0, 0, 88) | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = i8;
   if ((i7 | 0) == 0) {
    i9 = i8;
    break;
   }
   __ZN7WebCore17NodeListsNodeDataD2Ev(i7);
   __ZN3WTF8fastFreeEPv(i7);
   i9 = HEAP32[i5 >> 2] | 0;
  } else {
   i9 = i6;
  }
 } while (0);
 __ZN7WebCore17NodeListsNodeData19addCachedCollectionINS_17HTMLAllCollectionENS_8DocumentEEEN3WTF10PassRefPtrIT_EERT0_NS_14CollectionTypeE(i4, i9, i2, 7);
 HEAP32[i1 >> 2] = HEAP32[i4 >> 2];
 STACKTOP = i3;
 return;
}
function __ZN7WebCore8Document26setStateForNewFormElementsERKN3WTF6VectorINS1_6StringELj0ENS1_15CrashOnOverflowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = HEAP32[i1 + 924 >> 2] | 0;
 do {
  if ((HEAP32[i2 + 8 >> 2] | 0) == 0) {
   if ((i3 | 0) != 0) {
    i4 = i3;
    break;
   }
   return;
  } else {
   i5 = i1 + 924 | 0;
   if ((i3 | 0) != 0) {
    i4 = i3;
    break;
   }
   i6 = __ZN3WTF10fastMallocEj(60) | 0;
   __ZN7WebCore14FormControllerC1Ev(i6);
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = i6;
   if ((i7 | 0) == 0) {
    i4 = i6;
    break;
   }
   __ZN7WebCore14FormControllerD1Ev(i7);
   __ZN3WTF8fastFreeEPv(i7);
   i4 = HEAP32[i5 >> 2] | 0;
  }
 } while (0);
 __ZN7WebCore14FormController26setStateForNewFormElementsERKN3WTF6VectorINS1_6StringELj0ENS1_15CrashOnOverflowEEE(i4, i2);
 return;
}
function __ZN3WTF6VectorINS_6RefPtrIN7WebCore17HTMLScriptElementEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i1 + 4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i4 + 1 + (i4 >>> 2) | 0;
 i6 = i5 >>> 0 > 16 >>> 0 ? i5 : 16;
 i5 = i6 >>> 0 > i2 >>> 0 ? i6 : i2;
 if (i4 >>> 0 >= i5 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 if (i5 >>> 0 > 1073741823 >>> 0) {
  _WTFCrash();
 }
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = __ZN3WTF18fastMallocGoodSizeEj(i5 << 2) | 0;
 HEAP32[i3 >> 2] = i1 >>> 2;
 i5 = __ZN3WTF10fastMallocEj(i1) | 0;
 HEAP32[i4 >> 2] = i5;
 i1 = i2;
 _memcpy(i5 | 0, i1 | 0, i6 << 2) | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i2 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN3WTF6VectorINS_6RefPtrIN7WebCore7ElementEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i1 + 4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i4 + 1 + (i4 >>> 2) | 0;
 i6 = i5 >>> 0 > 16 >>> 0 ? i5 : 16;
 i5 = i6 >>> 0 > i2 >>> 0 ? i6 : i2;
 if (i4 >>> 0 >= i5 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 if (i5 >>> 0 > 1073741823 >>> 0) {
  _WTFCrash();
 }
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = __ZN3WTF18fastMallocGoodSizeEj(i5 << 2) | 0;
 HEAP32[i3 >> 2] = i1 >>> 2;
 i5 = __ZN3WTF10fastMallocEj(i1) | 0;
 HEAP32[i4 >> 2] = i5;
 i1 = i2;
 _memcpy(i5 | 0, i1 | 0, i6 << 2) | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i2 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZNK7WebCore8Document31displayStringModifiedByEncodingEN3WTF10PassRefPtrINS1_10StringImplEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = HEAP32[i2 + 1308 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i2 = i3 | 0;
  i5 = HEAP32[i2 >> 2] | 0;
  HEAP32[i2 >> 2] = 0;
  HEAP32[i1 >> 2] = i5;
  return;
 }
 i5 = i3 | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 i5 = HEAP16[i4 + 12 >> 1] | 0;
 do {
  if (i5 << 16 >> 16 == 92) {
   i6 = i3;
  } else {
   if ((i3 | 0) == 0) {
    i6 = 0;
    break;
   }
   __ZN3WTF10StringImpl7replaceEtt(i1, i3, 92, i5);
   i4 = i3 | 0;
   i2 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    return;
   } else {
    HEAP32[i4 >> 2] = i2;
    return;
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = i6;
 return;
}
function __ZNK7WebCore8Document7baseURIEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = HEAP32[i2 + 404 >> 2] | 0;
 HEAP32[i1 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i4 = i3 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = HEAP8[i2 + 408 | 0] | 0;
 i3 = i1 + 4 | 0;
 HEAP8[i3] = HEAP8[i3] & -4 | i4 & 1 | i4 & 2;
 HEAP32[i1 + 8 >> 2] = HEAP32[i2 + 412 >> 2];
 HEAP32[i1 + 12 >> 2] = HEAP32[i2 + 416 >> 2];
 HEAP32[i1 + 16 >> 2] = HEAP32[i2 + 420 >> 2];
 HEAP32[i1 + 20 >> 2] = HEAP32[i2 + 424 >> 2];
 HEAP32[i1 + 24 >> 2] = HEAP32[i2 + 428 >> 2];
 HEAP32[i1 + 28 >> 2] = HEAP32[i2 + 432 >> 2];
 HEAP32[i1 + 32 >> 2] = HEAP32[i2 + 436 >> 2];
 HEAP32[i1 + 36 >> 2] = HEAP32[i2 + 440 >> 2];
 HEAP32[i1 + 40 >> 2] = HEAP32[i2 + 444 >> 2];
 HEAP32[i1 + 44 >> 2] = HEAP32[i2 + 448 >> 2];
 return;
}
function __ZN7WebCore8Document41findUnsafeParentScrollPropagationBoundaryEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = HEAP32[i1 + 332 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = __ZNK7WebCore9FrameTree6parentEv(i2 + 40 | 0) | 0;
 if ((i4 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i5 = i1 + 100 | 0;
 i1 = i2;
 i2 = i4;
 while (1) {
  if (!(__ZNK7WebCore14SecurityOrigin9canAccessEPKS0_(HEAP32[(HEAP32[i2 + 456 >> 2] | 0) + 100 >> 2] | 0, HEAP32[i5 >> 2] | 0) | 0)) {
   i3 = i1;
   i6 = 9;
   break;
  }
  i4 = __ZNK7WebCore9FrameTree6parentEv(i2 + 40 | 0) | 0;
  if ((i4 | 0) == 0) {
   i3 = 0;
   i6 = 10;
   break;
  } else {
   i1 = i2;
   i2 = i4;
  }
 }
 if ((i6 | 0) == 9) {
  return i3 | 0;
 } else if ((i6 | 0) == 10) {
  return i3 | 0;
 }
 return 0;
}
function __ZN7WebCore8Document20enqueueOverflowEventEN3WTF10PassRefPtrINS_5EventEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4 | 0;
 i6 = i2 | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i5 >> 2] = i2;
 __ZN7WebCore18DocumentEventQueue12enqueueEventEN3WTF10PassRefPtrINS_5EventEEE(i1 + 1588 | 0, i4) | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = i4 + 8 | 0;
 i4 = i5 | 0;
 i1 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i4 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
 i1 = i5 - 8 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 127](i1);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore12StyleBoxDataD2Ev(i1) {
 i1 = i1 | 0;
 if ((HEAP8[i1 + 57 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 52 | 0);
 }
 if ((HEAP8[i1 + 49 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 44 | 0);
 }
 if ((HEAP8[i1 + 41 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 36 | 0);
 }
 if ((HEAP8[i1 + 33 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 28 | 0);
 }
 if ((HEAP8[i1 + 25 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 20 | 0);
 }
 if ((HEAP8[i1 + 17 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 12 | 0);
 }
 if ((HEAP8[i1 + 9 | 0] | 0) != 10) {
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 4 | 0);
 return;
}
function __ZN7WebCore8Document26pushFullscreenElementStackEPNS_7ElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i1 + 1692 | 0;
 i4 = i1 + 1700 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i5 | 0) == (HEAP32[i1 + 1696 >> 2] | 0)) {
   __ZN3WTF6VectorINS_6RefPtrIN7WebCore7ElementEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i5 + 1 | 0);
   HEAP32[(HEAP32[i3 >> 2] | 0) + (HEAP32[i4 >> 2] << 2) >> 2] = i2;
   if ((i2 | 0) == 0) {
    break;
   }
   i6 = i2 + 8 | 0;
   HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
  } else {
   HEAP32[(HEAP32[i3 >> 2] | 0) + (i5 << 2) >> 2] = i2;
   if ((i2 | 0) == 0) {
    break;
   }
   i6 = i2 + 8 | 0;
   HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
  }
 } while (0);
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 return;
}
function __ZN7WebCore8Document19createStyleResolverEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 332 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   i3 = 1;
  } else {
   i4 = HEAP32[i2 + 36 >> 2] | 0;
   if ((i4 | 0) == 0) {
    i3 = 1;
    break;
   }
   i3 = (HEAP8[i4 + 182 | 0] & 16) != 0;
  }
 } while (0);
 i2 = __ZN3WTF10fastMallocEj(560) | 0;
 __ZN7WebCore13StyleResolverC1ERNS_8DocumentEb(i2, i1, i3);
 i3 = i1 + 320 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i2;
 if ((i4 | 0) == 0) {
  i5 = i1 + 772 | 0;
  __ZN7WebCore28DocumentStyleSheetCollection22combineCSSFeatureFlagsEv(i5);
  return;
 }
 __ZN7WebCore13StyleResolverD1Ev(i4);
 __ZN3WTF8fastFreeEPv(i4);
 i5 = i1 + 772 | 0;
 __ZN7WebCore28DocumentStyleSheetCollection22combineCSSFeatureFlagsEv(i5);
 return;
}
function __ZN7WebCore8Document23removeAllEventListenersEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 __ZN7WebCore11EventTarget23removeAllEventListenersEv(i1 | 0);
 i2 = HEAP32[i1 + 336 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore9DOMWindow23removeAllEventListenersEv(i2);
 }
 i2 = HEAP32[i1 + 36 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 } else {
  i3 = i2;
 }
 while (1) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 28 >> 2] & 127](i3 | 0);
  if ((HEAP32[i3 + 12 >> 2] & 2 | 0) != 0) {
   i2 = HEAP32[i3 + 36 >> 2] | 0;
   if ((i2 | 0) != 0) {
    i3 = i2;
    continue;
   }
  }
  i2 = HEAP32[i3 + 28 >> 2] | 0;
  if ((i2 | 0) != 0) {
   i3 = i2;
   continue;
  }
  i3 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeE(i3) | 0;
  if ((i3 | 0) == 0) {
   break;
  }
 }
 return;
}
function __ZN7WebCore8Document20resumeScheduledTasksENS_15ActiveDOMObject19ReasonForSuspensionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if ((HEAP32[i1 + 228 >> 2] | 0) != (i2 | 0)) {
  return;
 }
 do {
  if ((i2 | 0) == 1) {
   i3 = HEAP32[i1 + 344 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 64 >> 2] & 127](i3);
  }
 } while (0);
 if ((HEAP32[i1 + 2048 >> 2] | 0) != 0) {
  __ZN7WebCore9TimerBase5startEdd(i1 + 1984 | 0, +0, +0);
 }
 __ZN7WebCore12ScriptRunner6resumeEv(HEAP32[i1 + 1268 >> 2] | 0);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 260 >> 2] & 127](i1, i2);
 i2 = HEAP32[i1 + 1976 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore27ScriptedAnimationController6resumeEv(i2);
 }
 HEAP8[i1 + 2052 | 0] = 0;
 return;
}
function __ZN7WebCore8Document19isLayoutTimerActiveEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, d6 = +0;
 i2 = i1 + 332 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = HEAP32[i3 + 452 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 if (!(__ZNK7WebCore9FrameView13layoutPendingEv(i5) | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = i1 + 1264 | 0;
 if ((HEAP8[i5] & 1) != 0) {
  i4 = 1;
  return i4 | 0;
 }
 d6 = +__ZN3WTF27monotonicallyIncreasingTimeEv() * +1e3;
 i3 = ~~(d6 - +HEAPF64[i1 + 1256 >> 3]);
 i1 = (HEAP32[i2 >> 2] | 0) + 36 | 0;
 HEAP8[i5] = (i3 | 0) > (HEAP32[(HEAP32[i1 >> 2] | 0) + 68 >> 2] | 0) | 0;
 i5 = HEAP32[(HEAP32[i1 >> 2] | 0) + 68 >> 2] | 0;
 i4 = (i5 | 0) == (i3 | 0) | (i5 - i3 | 0) < 1;
 return i4 | 0;
}
function __ZN7WebCore8Document18registerCollectionERNS_14HTMLCollectionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i1 + 1364 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 i5 = i2 + 32 | 0;
 i6 = i1 + 1356 + (((HEAP32[i5 >> 2] | 0) >>> 2 & 15) << 2) | 0;
 HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 if ((HEAP32[i5 >> 2] & 3 | 0) != 1) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i4 >> 2] = i2;
 __ZN3WTF9HashTableIPN7WebCore14HTMLCollectionES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i3 + 8 | 0, i1 + 1336 | 0, i4, i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore8Document22ensureCachedCollectionENS_14CollectionTypeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = (__ZN7WebCore4Node14ensureRareDataEv(i2 | 0) | 0) + 8 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   i6 = __ZN3WTF10fastMallocEj(88) | 0;
   i7 = i6;
   _memset(i6 | 0, 0, 88) | 0;
   i6 = HEAP32[i4 >> 2] | 0;
   HEAP32[i4 >> 2] = i7;
   if ((i6 | 0) == 0) {
    i8 = i7;
    break;
   }
   __ZN7WebCore17NodeListsNodeDataD2Ev(i6);
   __ZN3WTF8fastFreeEPv(i6);
   i8 = HEAP32[i4 >> 2] | 0;
  } else {
   i8 = i5;
  }
 } while (0);
 __ZN7WebCore17NodeListsNodeData19addCachedCollectionINS_14HTMLCollectionENS_8DocumentEEEN3WTF10PassRefPtrIT_EERT0_NS_14CollectionTypeE(i1, i8, i2, i3);
 return;
}
function __ZN7WebCore8Document13explicitCloseEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 344 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 4 | 0;
   HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 36 >> 2] & 127](i2);
   i3 = i2 + 4 | 0;
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    break;
   }
   i5 = i3 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 127](i5);
  }
 } while (0);
 i2 = HEAP32[i1 + 332 >> 2] | 0;
 if ((i2 | 0) == 0) {
  __ZN7WebCore8Document13implicitCloseEv(i1);
  return;
 } else {
  __ZN7WebCore11FrameLoader14checkCompletedEv(i2 + 80 | 0);
  return;
 }
}
function __ZN7WebCore8Document23setVisualUpdatesAllowedENS0_10ReadyStateE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if ((i2 | 0) == 2) {
  if (+HEAPF64[i1 + 2064 >> 3] == +0) {
   return;
  }
  if ((HEAP8[(HEAP32[(HEAP32[i1 + 332 >> 2] | 0) + 452 >> 2] | 0) + 656 | 0] & 1) == 0) {
   return;
  }
  __ZN7WebCore8Document23setVisualUpdatesAllowedEb(i1, 1);
  return;
 } else if ((i2 | 0) == 0) {
  i2 = i1 + 2053 | 0;
  if ((HEAP8[i2] & 1) == 0) {
   return;
  }
  HEAP8[i2] = 0;
  i2 = i1 + 2056 | 0;
  i3 = HEAP32[i1 + 332 >> 2] | 0;
  if ((i3 | 0) == 0) {
   __ZN7WebCore9TimerBase5startEdd(i2, +abort(120), +0);
   return;
  } else {
   __ZN7WebCore9TimerBase5startEdd(i2, +HEAPF64[(HEAP32[i3 + 36 >> 2] | 0) + 120 >> 3], +0);
   return;
  }
 } else {
  return;
 }
}
function __ZN7WebCore8Document21suspendScheduledTasksENS_15ActiveDOMObject19ReasonForSuspensionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = HEAP32[i1 + 1976 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN7WebCore27ScriptedAnimationController7suspendEv(i3);
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 256 >> 2] & 127](i1, i2);
 __ZN7WebCore12ScriptRunner7suspendEv(HEAP32[i1 + 1268 >> 2] | 0);
 __ZN7WebCore9TimerBase4stopEv(i1 + 1984 | 0);
 if ((i2 | 0) != 1) {
  i4 = i1 + 2052 | 0;
  HEAP8[i4] = 1;
  return;
 }
 i2 = HEAP32[i1 + 344 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i4 = i1 + 2052 | 0;
  HEAP8[i4] = 1;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 60 >> 2] & 127](i2);
 i4 = i1 + 2052 | 0;
 HEAP8[i4] = 1;
 return;
}
function __ZN7WebCore8Document29didRemoveAllPendingStylesheetEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP8[i1 + 326 | 0] = 0;
 __ZN7WebCore8Document20styleResolverChangedENS_23StyleResolverUpdateFlagE(i1, 2);
 i2 = HEAP32[i1 + 344 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 127](i2) | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 76 >> 2] & 127](i3);
  }
 } while (0);
 if ((HEAP8[i1 + 1083 | 0] & 1) == 0) {
  return;
 }
 i2 = HEAP32[i1 + 332 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i3 = HEAP32[i2 + 452 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 __ZN7WebCore9FrameView16scrollToFragmentERKNS_3URLE(i3, i1 + 356 | 0) | 0;
 return;
}
function __ZN7WebCore15HashChangeEventD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 2072;
 i2 = HEAP32[i1 + 56 >> 2] | 0;
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
 i2 = HEAP32[i1 + 52 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i5 = i1;
  __ZN7WebCore5EventD2Ev(i5);
  return;
 }
 i4 = i2 | 0;
 i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  i5 = i1;
  __ZN7WebCore5EventD2Ev(i5);
  return;
 } else {
  HEAP32[i4 >> 2] = i3;
  i5 = i1;
  __ZN7WebCore5EventD2Ev(i5);
  return;
 }
}
function __ZN3WTF6VectorIN7WebCore7IconURLELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if (i2 >>> 0 > 67108863 >>> 0) {
  _WTFCrash();
 }
 i6 = i5 + (HEAP32[i1 + 8 >> 2] << 6) | 0;
 i1 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 6) | 0;
 HEAP32[i3 >> 2] = i1 >>> 6;
 i2 = __ZN3WTF10fastMallocEj(i1) | 0;
 HEAP32[i4 >> 2] = i2;
 __ZN3WTF11VectorMoverILb0EN7WebCore7IconURLEE4moveEPS2_S4_S4_(i5, i6, i2);
 if ((i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i5);
 return;
}
function __ZN7WebCore8Document16createExpressionERKN3WTF6StringEPNS_15XPathNSResolverERi(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0;
 i6 = i2 + 1388 | 0;
 do {
  if ((HEAP32[i6 >> 2] | 0) == 0) {
   i2 = __ZN3WTF10fastMallocEj(4) | 0;
   HEAP32[i2 >> 2] = 1;
   i7 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = i2;
   if ((i7 | 0) == 0) {
    break;
   }
   i2 = i7 | 0;
   i8 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF8fastFreeEPv(i7);
    break;
   } else {
    HEAP32[i2 >> 2] = i8;
    break;
   }
  }
 } while (0);
 __ZN7WebCore14XPathEvaluator16createExpressionERKN3WTF6StringEPNS_15XPathNSResolverERi(i1, HEAP32[i6 >> 2] | 0, i3, i4, i5);
 return;
}
function __ZN7WebCore8Document18setContentLanguageERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i1 + 1304 | 0;
 i4 = i2 | 0;
 if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i3 >> 2] | 0, HEAP32[i4 >> 2] | 0) | 0) {
  return;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i4 = i2 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i2;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 | 0;
   i3 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i2 >> 2] = i3;
    break;
   }
  }
 } while (0);
 __ZN7WebCore8Document20styleResolverChangedENS_23StyleResolverUpdateFlagE(i1, 1);
 return;
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
function __ZN7WebCore8Document10setParsingEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i1 + 964 | 0;
 HEAP8[i3] = i2 & 1;
 do {
  if (i2) {
   i4 = i1 + 2176 | 0;
   if ((HEAP32[i4 >> 2] | 0) != 0) {
    break;
   }
   i5 = __Znwj(20) | 0;
   __ZN7WebCore24DocumentSharedObjectPoolC1Ev(i5);
   i6 = HEAP32[i4 >> 2] | 0;
   HEAP32[i4 >> 2] = i5;
   if ((i6 | 0) == 0) {
    break;
   }
   __ZN7WebCore24DocumentSharedObjectPoolD1Ev(i6);
   __ZdlPv(i6);
  }
 } while (0);
 if ((HEAP8[i3] & 1) != 0) {
  return;
 }
 i3 = HEAP32[i1 + 332 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i3 + 452 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 __ZN7WebCore9FrameView16scheduleRelayoutEv(i1);
 return;
}
function __ZN7WebCore8Document7scriptsEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = (__ZN7WebCore4Node14ensureRareDataEv(i2 | 0) | 0) + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i4 | 0) == 0) {
   i5 = __ZN3WTF10fastMallocEj(88) | 0;
   i6 = i5;
   _memset(i5 | 0, 0, 88) | 0;
   i5 = HEAP32[i3 >> 2] | 0;
   HEAP32[i3 >> 2] = i6;
   if ((i5 | 0) == 0) {
    i7 = i6;
    break;
   }
   __ZN7WebCore17NodeListsNodeDataD2Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
   i7 = HEAP32[i3 >> 2] | 0;
  } else {
   i7 = i4;
  }
 } while (0);
 __ZN7WebCore17NodeListsNodeData19addCachedCollectionINS_14HTMLCollectionENS_8DocumentEEEN3WTF10PassRefPtrIT_EERT0_NS_14CollectionTypeE(i1, i7, i2, 6);
 return;
}
function __ZN7WebCore8Document7pluginsEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = (__ZN7WebCore4Node14ensureRareDataEv(i2 | 0) | 0) + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i4 | 0) == 0) {
   i5 = __ZN3WTF10fastMallocEj(88) | 0;
   i6 = i5;
   _memset(i5 | 0, 0, 88) | 0;
   i5 = HEAP32[i3 >> 2] | 0;
   HEAP32[i3 >> 2] = i6;
   if ((i5 | 0) == 0) {
    i7 = i6;
    break;
   }
   __ZN7WebCore17NodeListsNodeDataD2Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
   i7 = HEAP32[i3 >> 2] | 0;
  } else {
   i7 = i4;
  }
 } while (0);
 __ZN7WebCore17NodeListsNodeData19addCachedCollectionINS_14HTMLCollectionENS_8DocumentEEEN3WTF10PassRefPtrIT_EERT0_NS_14CollectionTypeE(i1, i7, i2, 2);
 return;
}
function __ZN7WebCore8Document7appletsEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = (__ZN7WebCore4Node14ensureRareDataEv(i2 | 0) | 0) + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i4 | 0) == 0) {
   i5 = __ZN3WTF10fastMallocEj(88) | 0;
   i6 = i5;
   _memset(i5 | 0, 0, 88) | 0;
   i5 = HEAP32[i3 >> 2] | 0;
   HEAP32[i3 >> 2] = i6;
   if ((i5 | 0) == 0) {
    i7 = i6;
    break;
   }
   __ZN7WebCore17NodeListsNodeDataD2Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
   i7 = HEAP32[i3 >> 2] | 0;
  } else {
   i7 = i4;
  }
 } while (0);
 __ZN7WebCore17NodeListsNodeData19addCachedCollectionINS_14HTMLCollectionENS_8DocumentEEEN3WTF10PassRefPtrIT_EERT0_NS_14CollectionTypeE(i1, i7, i2, 1);
 return;
}
function __ZN7WebCore8Document7anchorsEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = (__ZN7WebCore4Node14ensureRareDataEv(i2 | 0) | 0) + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i4 | 0) == 0) {
   i5 = __ZN3WTF10fastMallocEj(88) | 0;
   i6 = i5;
   _memset(i5 | 0, 0, 88) | 0;
   i5 = HEAP32[i3 >> 2] | 0;
   HEAP32[i3 >> 2] = i6;
   if ((i5 | 0) == 0) {
    i7 = i6;
    break;
   }
   __ZN7WebCore17NodeListsNodeDataD2Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
   i7 = HEAP32[i3 >> 2] | 0;
  } else {
   i7 = i4;
  }
 } while (0);
 __ZN7WebCore17NodeListsNodeData19addCachedCollectionINS_14HTMLCollectionENS_8DocumentEEEN3WTF10PassRefPtrIT_EERT0_NS_14CollectionTypeE(i1, i7, i2, 5);
 return;
}
function __ZN7WebCore8Document6imagesEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = (__ZN7WebCore4Node14ensureRareDataEv(i2 | 0) | 0) + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i4 | 0) == 0) {
   i5 = __ZN3WTF10fastMallocEj(88) | 0;
   i6 = i5;
   _memset(i5 | 0, 0, 88) | 0;
   i5 = HEAP32[i3 >> 2] | 0;
   HEAP32[i3 >> 2] = i6;
   if ((i5 | 0) == 0) {
    i7 = i6;
    break;
   }
   __ZN7WebCore17NodeListsNodeDataD2Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
   i7 = HEAP32[i3 >> 2] | 0;
  } else {
   i7 = i4;
  }
 } while (0);
 __ZN7WebCore17NodeListsNodeData19addCachedCollectionINS_14HTMLCollectionENS_8DocumentEEEN3WTF10PassRefPtrIT_EERT0_NS_14CollectionTypeE(i1, i7, i2, 0);
 return;
}
function __ZN7WebCore8Document6embedsEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = (__ZN7WebCore4Node14ensureRareDataEv(i2 | 0) | 0) + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i4 | 0) == 0) {
   i5 = __ZN3WTF10fastMallocEj(88) | 0;
   i6 = i5;
   _memset(i5 | 0, 0, 88) | 0;
   i5 = HEAP32[i3 >> 2] | 0;
   HEAP32[i3 >> 2] = i6;
   if ((i5 | 0) == 0) {
    i7 = i6;
    break;
   }
   __ZN7WebCore17NodeListsNodeDataD2Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
   i7 = HEAP32[i3 >> 2] | 0;
  } else {
   i7 = i4;
  }
 } while (0);
 __ZN7WebCore17NodeListsNodeData19addCachedCollectionINS_14HTMLCollectionENS_8DocumentEEEN3WTF10PassRefPtrIT_EERT0_NS_14CollectionTypeE(i1, i7, i2, 2);
 return;
}
function __ZN7WebCore8Document5linksEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = (__ZN7WebCore4Node14ensureRareDataEv(i2 | 0) | 0) + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i4 | 0) == 0) {
   i5 = __ZN3WTF10fastMallocEj(88) | 0;
   i6 = i5;
   _memset(i5 | 0, 0, 88) | 0;
   i5 = HEAP32[i3 >> 2] | 0;
   HEAP32[i3 >> 2] = i6;
   if ((i5 | 0) == 0) {
    i7 = i6;
    break;
   }
   __ZN7WebCore17NodeListsNodeDataD2Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
   i7 = HEAP32[i3 >> 2] | 0;
  } else {
   i7 = i4;
  }
 } while (0);
 __ZN7WebCore17NodeListsNodeData19addCachedCollectionINS_14HTMLCollectionENS_8DocumentEEEN3WTF10PassRefPtrIT_EERT0_NS_14CollectionTypeE(i1, i7, i2, 4);
 return;
}
function __ZN7WebCore8Document5formsEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = (__ZN7WebCore4Node14ensureRareDataEv(i2 | 0) | 0) + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i4 | 0) == 0) {
   i5 = __ZN3WTF10fastMallocEj(88) | 0;
   i6 = i5;
   _memset(i5 | 0, 0, 88) | 0;
   i5 = HEAP32[i3 >> 2] | 0;
   HEAP32[i3 >> 2] = i6;
   if ((i5 | 0) == 0) {
    i7 = i6;
    break;
   }
   __ZN7WebCore17NodeListsNodeDataD2Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
   i7 = HEAP32[i3 >> 2] | 0;
  } else {
   i7 = i4;
  }
 } while (0);
 __ZN7WebCore17NodeListsNodeData19addCachedCollectionINS_14HTMLCollectionENS_8DocumentEEEN3WTF10PassRefPtrIT_EERT0_NS_14CollectionTypeE(i1, i7, i2, 3);
 return;
}
function __ZN7WebCore8Document25initContentSecurityPolicyEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 + 332 | 0;
 if ((__ZNK7WebCore9FrameTree6parentEv((HEAP32[i2 >> 2] | 0) + 40 | 0) | 0) == 0) {
  return;
 }
 i3 = i1 + 356 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   if ((HEAP32[i4 + 4 >> 2] | 0) == 0) {
    break;
   }
   if (__ZNK7WebCore3URL10isBlankURLEv(i3) | 0) {
    break;
   }
   if ((HEAP8[i1 + 1576 | 0] & 8) != 0) {
    break;
   }
   return;
  }
 } while (0);
 i3 = HEAP32[i1 + 104 >> 2] | 0;
 __ZN7WebCore21ContentSecurityPolicy13copyStateFromEPKS0_(i3, HEAP32[(HEAP32[(__ZNK7WebCore9FrameTree6parentEv((HEAP32[i2 >> 2] | 0) + 40 | 0) | 0) + 456 >> 2] | 0) + 104 >> 2] | 0);
 return;
}
function __ZN7WebCore8Document16registerNodeListERNS_12LiveNodeListE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i2 + 32 | 0;
 i6 = i1 + 1356 + (((HEAP32[i5 >> 2] | 0) >>> 2 & 15) << 2) | 0;
 HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 if ((HEAP32[i5 >> 2] & 3 | 0) != 1) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i4 >> 2] = i2;
 __ZN3WTF9HashTableIPN7WebCore12LiveNodeListES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i3 + 8 | 0, i1 + 1316 | 0, i4, i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore15HashChangeEventD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 2072;
 i2 = HEAP32[i1 + 56 >> 2] | 0;
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
 i2 = HEAP32[i1 + 52 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 __ZN7WebCore5EventD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1 | 0);
 return;
}
function __ZN7WebCore8Document4headEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = HEAP32[i1 + 692 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = HEAP32[i2 + 36 >> 2] | 0;
 L4 : do {
  if ((i1 | 0) == 0) {
   i4 = 0;
  } else {
   i2 = (HEAP32[__ZN7WebCore9HTMLNames7headTagE >> 2] | 0) + 12 | 0;
   i5 = i1;
   while (1) {
    if ((HEAP32[i5 + 12 >> 2] & 20 | 0) == 20) {
     if ((HEAP32[(HEAP32[i5 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[i2 >> 2] | 0)) {
      i4 = i5;
      break L4;
     }
    }
    i6 = HEAP32[i5 + 28 >> 2] | 0;
    if ((i6 | 0) == 0) {
     i4 = 0;
     break;
    } else {
     i5 = i6;
    }
   }
  }
 } while (0);
 i3 = i4;
 return i3 | 0;
}
function __ZN7WebCore8Document20setCompatibilityModeENS0_17CompatibilityModeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 if ((HEAP8[i1 + 668 | 0] & 1) != 0) {
  return;
 }
 i3 = i1 + 664 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == (i2 | 0)) {
  return;
 }
 HEAP32[i3 >> 2] = i2;
 i5 = HEAP32[i1 + 1572 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = i2;
 } else {
  __ZN7WebCore18SelectorQueryCache10invalidateEv(i5);
  i6 = HEAP32[i3 >> 2] | 0;
 }
 if (!((i6 | 0) == 0 ^ (i4 | 0) == 0)) {
  return;
 }
 i4 = i1 + 772 | 0;
 __ZN7WebCore28DocumentStyleSheetCollection18clearPageUserSheetEv(i4);
 __ZN7WebCore28DocumentStyleSheetCollection33invalidateInjectedStyleSheetCacheEv(i4);
 return;
}
function __ZN7WebCore8Document15setIsViewSourceEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 HEAP8[i1 + 1579 | 0] = i2 & 1;
 if (!i2) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore14SecurityOrigin12createUniqueEv(i4);
 __ZN7WebCore15SecurityContext17setSecurityOriginEN3WTF10PassRefPtrINS_14SecurityOriginEEE(i1 + 88 | 0, i4);
 i1 = HEAP32[i4 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = i1 | 0;
 if (((tempValue = HEAP32[i4 >> 2] | 0, HEAP32[i4 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore14SecurityOriginD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore8Document32removeFullScreenElementOfSubtreeEPNS_4NodeEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = i1 + 1688 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  return;
 }
 i6 = i5 | 0;
 do {
  if (i3) {
   if (__ZNK7WebCore4Node14isDescendantOfEPKS0_(i6, i2) | 0) {
    break;
   }
   return;
  } else {
   if ((i6 | 0) == (i2 | 0)) {
    break;
   }
   if (__ZNK7WebCore4Node14isDescendantOfEPKS0_(i6, i2) | 0) {
    break;
   }
   return;
  }
 } while (0);
 __ZN7WebCore7Element62setContainsFullScreenElementOnAncestorsCrossingFrameBoundariesEb(HEAP32[i4 >> 2] | 0, 0);
 __ZN7WebCore8Document22webkitCancelFullScreenEv(i1);
 return;
}
function __ZN7WebCore8Document17takeDOMWindowFromEPS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i2 + 336 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i3 = i1 + 336 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i2;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 + 36 | 0;
   i5 = i2 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i5 >> 2] = i6;
    break;
   }
   i6 = i2 - 36 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 44 >> 2] & 127](i6);
  }
 } while (0);
 __ZN7WebCore9DOMWindow21didSecureTransitionToEPNS_8DocumentE(HEAP32[i3 >> 2] | 0, i1);
 return;
}
function __ZN7WebCore8Document10namedFlowsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 2112 | 0;
 do {
  if ((HEAP32[i2 >> 2] | 0) == 0) {
   i3 = __ZN3WTF10fastMallocEj(44) | 0;
   __ZN7WebCore19NamedFlowCollectionC1EPNS_8DocumentE(i3, i1);
   i4 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = i3;
   if ((i4 | 0) == 0) {
    break;
   }
   i3 = i4 + 8 | 0;
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    break;
   }
   i5 = i3 - 8 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 127](i5);
  }
 } while (0);
 return HEAP32[i2 >> 2] | 0;
}
function __ZNK7WebCore8Document11hasManifestEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 692 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = HEAP32[i2 + 44 >> 2] | 0;
 i4 = HEAP32[__ZN7WebCore9HTMLNames7htmlTagE >> 2] | 0;
 do {
  if ((i1 | 0) != (i4 | 0)) {
   if ((HEAP32[i1 + 12 >> 2] | 0) != (HEAP32[i4 + 12 >> 2] | 0)) {
    i3 = 0;
    return i3 | 0;
   }
   if ((HEAP32[i1 + 16 >> 2] | 0) == (HEAP32[i4 + 16 >> 2] | 0)) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  }
 } while (0);
 i3 = __ZNK7WebCore7Element12hasAttributeERKNS_13QualifiedNameE(i2, __ZN7WebCore9HTMLNames12manifestAttrE) | 0;
 return i3 | 0;
}
function __ZN7WebCore8Document13setDesignModeENS0_13InheritedBoolE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 HEAP32[i1 + 1312 >> 2] = i2;
 i2 = i1 + 332 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 } else {
  i3 = i1;
 }
 while (1) {
  i1 = HEAP32[i3 + 456 >> 2] | 0;
  if ((i1 | 0) == 0) {
   i4 = 5;
   break;
  }
  HEAP8[i1 + 1080 | 0] = 1;
  __ZN7WebCore8Document19scheduleStyleRecalcEv(i1);
  i1 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i3 + 40 | 0, HEAP32[i2 >> 2] | 0) | 0;
  if ((i1 | 0) == 0) {
   i4 = 7;
   break;
  } else {
   i3 = i1;
  }
 }
 if ((i4 | 0) == 5) {
  return;
 } else if ((i4 | 0) == 7) {
  return;
 }
}
function __ZN7WebCore8Document16popCurrentScriptEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 1280 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i4 = i3 - 1 | 0;
 i3 = HEAP32[(HEAP32[i1 + 1272 >> 2] | 0) + (i4 << 2) >> 2] | 0;
 if ((i3 | 0) == 0) {
  HEAP32[i2 >> 2] = i4;
  return;
 }
 i1 = i3 + 8 | 0;
 i3 = i1 | 0;
 i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 HEAP32[i3 >> 2] = i5;
 if ((i5 | 0) >= 1) {
  HEAP32[i2 >> 2] = i4;
  return;
 }
 if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
 HEAP32[i2 >> 2] = i4;
 return;
}
function __ZNK7WebCore8Document12inDesignModeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 L1 : do {
  if ((i1 | 0) == 0) {
   i2 = 0;
  } else {
   i3 = i1;
   while (1) {
    i4 = HEAP32[i3 + 1312 >> 2] | 0;
    if ((i4 | 0) != 2) {
     break;
    }
    i5 = HEAP32[i3 + 332 >> 2] | 0;
    if ((i5 | 0) == 0) {
     i2 = 0;
     break L1;
    }
    i6 = __ZNK7WebCore9FrameTree6parentEv(i5 + 40 | 0) | 0;
    if ((i6 | 0) == 0) {
     i2 = 0;
     break L1;
    }
    i5 = HEAP32[i6 + 456 >> 2] | 0;
    if ((i5 | 0) == 0) {
     i2 = 0;
     break L1;
    } else {
     i3 = i5;
    }
   }
   i2 = (i4 | 0) != 0;
  }
 } while (0);
 return i2 | 0;
}
function __ZN7WebCore8Document30updateURLForPushOrReplaceStateERKNS_3URLE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = i1 + 332 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 __ZN7WebCore8Document6setURLERKNS_3URLE(i1, i2);
 __ZN7WebCore11FrameLoader19setOutgoingReferrerERKNS_3URLE(i4 + 80 | 0, i2);
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 i3 = HEAP32[i4 + 128 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i5 = (HEAP32[i4 + 456 >> 2] | 0) == (i1 | 0) ? i3 : 0;
 if ((i5 | 0) == 0) {
  return;
 }
 __ZN7WebCore14DocumentLoader42replaceRequestURLForSameDocumentNavigationERKNS_3URLE(i5, i2);
 return;
}
function __ZN7WebCore8Document16createNSResolverEPNS_4NodeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = i2 + 1388 | 0;
 do {
  if ((HEAP32[i4 >> 2] | 0) == 0) {
   i2 = __ZN3WTF10fastMallocEj(4) | 0;
   HEAP32[i2 >> 2] = 1;
   i5 = HEAP32[i4 >> 2] | 0;
   HEAP32[i4 >> 2] = i2;
   if ((i5 | 0) == 0) {
    break;
   }
   i2 = i5 | 0;
   i6 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF8fastFreeEPv(i5);
    break;
   } else {
    HEAP32[i2 >> 2] = i6;
    break;
   }
  }
 } while (0);
 __ZN7WebCore14XPathEvaluator16createNSResolverEPNS_4NodeE(i1, HEAP32[i4 >> 2] | 0, i3);
 return;
}
function __ZN7WebCore8Document7writelnERKN3WTF6StringEPS0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 __ZN7WebCore8Document5writeERKN3WTF6StringEPS0_(i1, i2, i3);
 __ZN3WTF6StringC1EPKc(i5, H_BASE + 1336 | 0);
 __ZN7WebCore8Document5writeERKN3WTF6StringEPS0_(i1, i5, i3);
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i5 = i3 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i3);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i5 >> 2] = i1;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore8Document20unregisterCollectionERNS_14HTMLCollectionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 1364 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) - 1;
 i5 = i2 + 32 | 0;
 i6 = i1 + 1356 + (((HEAP32[i5 >> 2] | 0) >>> 2 & 15) << 2) | 0;
 HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) - 1;
 if ((HEAP32[i5 >> 2] & 3 | 0) != 1) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i4 >> 2] = i2;
 __ZN3WTF7HashSetIPN7WebCore14HTMLCollectionENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1 + 1336 | 0, i4) | 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore8Document9cloneNodeEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 324 >> 2] & 127](i5, i2);
 i6 = i5 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 __ZN7WebCore8Document21cloneDataFromDocumentERKS0_(i5, i2);
 if (!i3) {
  i7 = i1 | 0;
  i8 = i5 | 0;
  HEAP32[i7 >> 2] = i8;
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore13ContainerNode15cloneChildNodesEPS0_(i2 | 0, i5 | 0);
 i7 = i1 | 0;
 i8 = i5 | 0;
 HEAP32[i7 >> 2] = i8;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore8Document24setSelectedStylesheetSetERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i2 = i3 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 i2 = i1 + 908 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i3;
 do {
  if ((i4 | 0) != 0) {
   i3 = i4 | 0;
   i2 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i3 >> 2] = i2;
    break;
   }
  }
 } while (0);
 __ZN7WebCore8Document20styleResolverChangedENS_23StyleResolverUpdateFlagE(i1, 1);
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
function __ZN7WebCore8Document14commonTeardownEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 1392 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore21SVGDocumentExtensions15pauseAnimationsEv(i2);
 }
 i2 = i1 + 1976 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  HEAP32[i2 >> 2] = 0;
  return;
 }
 HEAP32[i1 + 16 >> 2] = 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore27ScriptedAnimationControllerD1Ev(i1);
  __ZN3WTF8fastFreeEPv(i1);
  return;
 } else {
  HEAP32[i2 >> 2] = i3;
  return;
 }
}
function __ZN7WebCore8Document15createAttributeERKN3WTF6StringERi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = i6 | 0;
 HEAP32[i7 >> 2] = 0;
 __ZN7WebCore8Document17createAttributeNSERKN3WTF6StringES4_Rib(i1, i2, i6, i3, i4, 1);
 i4 = HEAP32[i7 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i7 = i4 | 0;
 i3 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i7 >> 2] = i3;
  STACKTOP = i5;
  return;
 }
}
function __ZThn88_NK7WebCore8Document9topOriginEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = i1 - 2288 + 2200 | 0;
 i1 = i2;
 i3 = HEAP32[i2 + 332 >> 2] | 0;
 L1 : do {
  if ((i3 | 0) == 0) {
   i4 = i1;
  } else {
   i2 = i1;
   i5 = i3;
   while (1) {
    i6 = HEAP32[i5 + 448 >> 2] | 0;
    if ((i6 | 0) == 0) {
     i4 = i2;
     break L1;
    }
    i7 = HEAP32[(HEAP32[i6 + 20 >> 2] | 0) + 8 >> 2] | 0;
    i6 = HEAP32[i7 + 332 >> 2] | 0;
    if ((i6 | 0) == 0) {
     i4 = i7;
     break;
    } else {
     i2 = i7;
     i5 = i6;
    }
   }
  }
 } while (0);
 return HEAP32[i4 + 100 >> 2] | 0;
}
function __ZN7WebCore8Document17mediaQueryMatcherEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 1952 | 0;
 do {
  if ((HEAP32[i2 >> 2] | 0) == 0) {
   i3 = __ZN3WTF10fastMallocEj(24) | 0;
   __ZN7WebCore17MediaQueryMatcherC1EPNS_8DocumentE(i3, i1);
   i4 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = i3;
   if ((i4 | 0) == 0) {
    break;
   }
   i3 = i4 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) == 0) {
    __ZN7WebCore17MediaQueryMatcherD1Ev(i4);
    __ZN3WTF8fastFreeEPv(i4);
    break;
   } else {
    HEAP32[i3 >> 2] = i5;
    break;
   }
  }
 } while (0);
 return HEAP32[i2 >> 2] | 0;
}
function __ZN7WebCore8Document11styleSheetsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 920 | 0;
 do {
  if ((HEAP32[i2 >> 2] | 0) == 0) {
   i3 = __ZN3WTF10fastMallocEj(20) | 0;
   __ZN7WebCore14StyleSheetListC1EPNS_8DocumentE(i3, i1);
   i4 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = i3;
   if ((i4 | 0) == 0) {
    break;
   }
   i3 = i4 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) == 0) {
    __ZN7WebCore14StyleSheetListD1Ev(i4);
    __ZN3WTF8fastFreeEPv(i4);
    break;
   } else {
    HEAP32[i3 >> 2] = i5;
    break;
   }
  }
 } while (0);
 return HEAP32[i2 >> 2] | 0;
}
function __ZN7WebCore8Document25popFullscreenElementStackEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 1700 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i4 = i3 - 1 | 0;
 i3 = HEAP32[(HEAP32[i1 + 1692 >> 2] | 0) + (i4 << 2) >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i1 = i3 + 8 | 0;
   i5 = i1 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
  }
 } while (0);
 HEAP32[i2 >> 2] = i4;
 return;
}
function __ZN7WebCore8Document21processReferrerPolicyERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 1944 | 0;
 HEAP32[i3 >> 2] = 1;
 i1 = i2 | 0;
 if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i1 >> 2] | 0, H_BASE + 648 | 0) | 0) {
  HEAP32[i3 >> 2] = 2;
  return;
 }
 if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i1 >> 2] | 0, H_BASE + 640 | 0) | 0) {
  HEAP32[i3 >> 2] = 0;
  return;
 }
 if (!(__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i1 >> 2] | 0, H_BASE + 632 | 0) | 0)) {
  return;
 }
 HEAP32[i3 >> 2] = 3;
 return;
}
function __ZNK7WebCore8Document16childTypeAllowedENS_4Node8NodeTypeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 L1 : do {
  if ((i2 | 0) == 7 | (i2 | 0) == 8) {
   i3 = 1;
  } else if ((i2 | 0) == 1 | (i2 | 0) == 10) {
   i4 = i1 + 36 | 0;
   while (1) {
    i5 = HEAP32[i4 >> 2] | 0;
    if ((i5 | 0) == 0) {
     i3 = 1;
     break L1;
    }
    if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 76 >> 2] & 127](i5) | 0) == (i2 | 0)) {
     i3 = 0;
     break;
    } else {
     i4 = i5 + 28 | 0;
    }
   }
  } else {
   i3 = 0;
  }
 } while (0);
 return i3 | 0;
}
function __ZN7WebCore8Document14setDocumentURIERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i2 = i3 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 i2 = i1 + 644 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i3;
 do {
  if ((i4 | 0) != 0) {
   i3 = i4 | 0;
   i2 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i3 >> 2] = i2;
    break;
   }
  }
 } while (0);
 __ZN7WebCore8Document13updateBaseURLEv(i1);
 return;
}
function __ZNK7WebCore8Document9topOriginEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = HEAP32[i1 + 332 >> 2] | 0;
 L1 : do {
  if ((i2 | 0) == 0) {
   i3 = i1;
  } else {
   i4 = i1;
   i5 = i2;
   while (1) {
    i6 = HEAP32[i5 + 448 >> 2] | 0;
    if ((i6 | 0) == 0) {
     i3 = i4;
     break L1;
    }
    i7 = HEAP32[(HEAP32[i6 + 20 >> 2] | 0) + 8 >> 2] | 0;
    i6 = HEAP32[i7 + 332 >> 2] | 0;
    if ((i6 | 0) == 0) {
     i3 = i7;
     break;
    } else {
     i4 = i7;
     i5 = i6;
    }
   }
  }
 } while (0);
 return HEAP32[i3 + 100 >> 2] | 0;
}
function __ZN7WebCore8Document12detachParserEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 344 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 56 >> 2] & 127](i1);
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i2 = i1 + 4 | 0;
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i1 >> 2] = i3;
  return;
 }
 i3 = i2 - 4 | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 127](i3);
 return;
}
function __ZNK7WebCore8Document11topDocumentEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = HEAP32[i1 + 332 >> 2] | 0;
 L1 : do {
  if ((i2 | 0) == 0) {
   i3 = i1;
  } else {
   i4 = i1;
   i5 = i2;
   while (1) {
    i6 = HEAP32[i5 + 448 >> 2] | 0;
    if ((i6 | 0) == 0) {
     i3 = i4;
     break L1;
    }
    i7 = HEAP32[(HEAP32[i6 + 20 >> 2] | 0) + 8 >> 2] | 0;
    i6 = HEAP32[i7 + 332 >> 2] | 0;
    if ((i6 | 0) == 0) {
     i3 = i7;
     break;
    } else {
     i4 = i7;
     i5 = i6;
    }
   }
  }
 } while (0);
 return i3 | 0;
}
function __ZNK7WebCore8Document46notifySeamlessChildDocumentsOfStylesheetUpdateEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 332 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i2 + 64 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 } else {
  i3 = i1;
 }
 while (1) {
  i1 = HEAP32[i3 + 456 >> 2] | 0;
  if (__ZNK7WebCore8Document33shouldDisplaySeamlesslyWithParentEv(i1) | 0) {
   __ZN7WebCore8Document20styleResolverChangedENS_23StyleResolverUpdateFlagE(i1, 0);
  }
  i3 = HEAP32[i3 + 56 >> 2] | 0;
  if ((i3 | 0) == 0) {
   break;
  }
 }
 return;
}
function __ZN7WebCore8Document18unregisterNodeListERNS_12LiveNodeListE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i2 + 32 | 0;
 i6 = i1 + 1356 + (((HEAP32[i5 >> 2] | 0) >>> 2 & 15) << 2) | 0;
 HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) - 1;
 if ((HEAP32[i5 >> 2] & 3 | 0) != 1) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i4 >> 2] = i2;
 __ZN3WTF7HashSetIPN7WebCore12LiveNodeListENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1 + 1316 | 0, i4) | 0;
 STACKTOP = i3;
 return;
}
function __ZThn88_N7WebCore8Document10addMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringES6_jjNS3_10PassRefPtrINS_15ScriptCallStackEEEPN3JSC9ExecStateEm(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10) {
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
 __ZN7WebCore8Document10addMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringES6_jjNS3_10PassRefPtrINS_15ScriptCallStackEEEPN3JSC9ExecStateEm(i1 - 2288 + 2200 | 0, i2, i3, i4, i5, i6, i7, i8, i9, i10);
 return;
}
function __ZN7WebCore8Document14implementationEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 + 652 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = i3;
  return i4 | 0;
 }
 i3 = __ZN3WTF10fastMallocEj(8) | 0;
 __ZN7WebCore17DOMImplementationC1ERNS_8DocumentE(i3, i1);
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i3;
 if ((i1 | 0) == 0) {
  i4 = i3;
  return i4 | 0;
 }
 i3 = i1 | 0;
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i3);
 }
 __ZN3WTF8fastFreeEPv(i1);
 i4 = HEAP32[i2 >> 2] | 0;
 return i4 | 0;
}
function __ZN7WebCore8Document20resetActiveLinkColorEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 __ZN3WTF6StringC1EPKc(i3, H_BASE + 656 | 0);
 __ZN7WebCore5Color13setNamedColorERKN3WTF6StringE(i1 + 944 | 0, i3);
 i1 = HEAP32[i3 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i3 = i1 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i3 >> 2] = i4;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore8Document22setAnimatingFullScreenEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 1808 | 0;
 if ((HEAP8[i3] & 1 | 0) == (i2 & 1 | 0)) {
  return;
 }
 HEAP8[i3] = i2 & 1;
 i2 = i1 + 1688 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 if (!(__ZNK7WebCore4Node14isDescendantOfEPKS0_(i3 | 0, i1 | 0) | 0)) {
  return;
 }
 __ZN7WebCore4Node19setNeedsStyleRecalcENS_15StyleChangeTypeE(HEAP32[i2 >> 2] | 0, 32768);
 HEAP8[i1 + 1080 | 0] = 1;
 __ZN7WebCore8Document19scheduleStyleRecalcEv(i1);
 return;
}
function __ZN7WebCore8Document15createDOMWindowEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = __ZN3WTF10fastMallocEj(176) | 0;
 __ZN7WebCore9DOMWindowC1EPNS_8DocumentE(i2, i1);
 i3 = i1 + 336 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i2;
 if ((i1 | 0) == 0) {
  return;
 }
 i2 = i1 + 36 | 0;
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i1 >> 2] = i3;
  return;
 }
 i3 = i2 - 36 | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 44 >> 2] & 127](i3);
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
function __ZN7WebCore22DeferrableOneShotTimerINS_8DocumentEE5firedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 64 | 0;
 if ((HEAP8[i2] & 1) != 0) {
  HEAP8[i2] = 0;
  __ZN7WebCore9TimerBase5startEdd(i1, +HEAPF64[i1 + 56 >> 3], +0);
  return;
 }
 i2 = i1 + 48 | 0;
 i3 = (HEAP32[i1 + 44 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] | 0) | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 & 1 | 0) == 0) {
  i5 = i4;
 } else {
  i5 = HEAP32[(HEAP32[i3 >> 2] | 0) + (i4 - 1) >> 2] | 0;
 }
 FUNCTION_TABLE_vii[i5 & 127](i3, i1);
 return;
}
function __ZN7WebCore8Document24addMediaCanStartListenerEPNS_21MediaCanStartListenerE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i2;
 __ZN3WTF9HashTableIPN7WebCore21MediaCanStartListenerES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i3 + 8 | 0, i1 + 1660 | 0, i4, i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore8Document32clearScriptedAnimationControllerEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 1976 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  HEAP32[i2 >> 2] = 0;
  return;
 }
 HEAP32[i1 + 16 >> 2] = 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore27ScriptedAnimationControllerD1Ev(i1);
  __ZN3WTF8fastFreeEPv(i1);
  return;
 } else {
  HEAP32[i2 >> 2] = i3;
  return;
 }
}
function __ZN7WebCore8Document47registerForPrivateBrowsingStateChangedCallbacksEPNS_7ElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i2;
 __ZN3WTF9HashTableIPN7WebCore7ElementES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i3 + 8 | 0, i1 + 1488 | 0, i4, i4);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore8Document39displayBufferModifiedByEncodingInternalItEEvPT_j(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = HEAP32[i1 + 1308 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 i1 = i4 + 12 | 0;
 if ((HEAP16[i1 >> 1] | 0) == 92 | (i3 | 0) == 0) {
  return;
 } else {
  i5 = 0;
 }
 while (1) {
  i4 = i2 + (i5 << 1) | 0;
  if ((HEAP16[i4 >> 1] | 0) == 92) {
   HEAP16[i4 >> 1] = HEAP16[i1 >> 1] | 0;
  }
  i5 = i5 + 1 | 0;
  if (i5 >>> 0 >= i3 >>> 0) {
   break;
  }
 }
 return;
}
function __ZN7WebCore8Document42registerForVisibilityStateChangedCallbacksEPNS_7ElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i2;
 __ZN3WTF9HashTableIPN7WebCore7ElementES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i3 + 8 | 0, i1 + 1508 | 0, i4, i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore8Document19accessSVGExtensionsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 + 1392 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = i3;
  return i4 | 0;
 }
 i3 = __ZN3WTF10fastMallocEj(128) | 0;
 __ZN7WebCore21SVGDocumentExtensionsC1EPNS_8DocumentE(i3, i1);
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i3;
 if ((i1 | 0) == 0) {
  i4 = i3;
  return i4 | 0;
 }
 __ZN7WebCore21SVGDocumentExtensionsD1Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 i4 = HEAP32[i2 >> 2] | 0;
 return i4 | 0;
}
function __ZN7WebCore8Document39registerForPageCacheSuspensionCallbacksEPNS_7ElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i2;
 __ZN3WTF9HashTableIPN7WebCore7ElementES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i3 + 8 | 0, i1 + 1448 | 0, i4, i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore8Document18minimumLayoutDelayEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, d4 = +0, i5 = 0, i6 = 0;
 i2 = i1 + 1264 | 0;
 if ((HEAP8[i2] & 1) != 0) {
  i3 = 0;
  return i3 | 0;
 }
 d4 = +__ZN3WTF27monotonicallyIncreasingTimeEv() * +1e3;
 i5 = ~~(d4 - +HEAPF64[i1 + 1256 >> 3]);
 i6 = (HEAP32[i1 + 332 >> 2] | 0) + 36 | 0;
 HEAP8[i2] = (i5 | 0) > (HEAP32[(HEAP32[i6 >> 2] | 0) + 68 >> 2] | 0) | 0;
 i2 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 68 >> 2] | 0) - i5 | 0;
 i3 = (i2 | 0) > 0 ? i2 : 0;
 return i3 | 0;
}
function __ZN7WebCore8Document27createProcessingInstructionERKN3WTF6StringES4_Ri(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 if (!(__ZN7WebCore8Document11isValidNameERKN3WTF6StringE(i3) | 0)) {
  HEAP32[i5 >> 2] = 5;
  HEAP32[i1 >> 2] = 0;
  return;
 }
 if ((HEAP8[i2 + 1576 | 0] & 1) == 0) {
  __ZN7WebCore21ProcessingInstruction6createERNS_8DocumentERKN3WTF6StringES6_(i1, i2, i3, i4);
  return;
 } else {
  HEAP32[i5 >> 2] = 9;
  HEAP32[i1 >> 2] = 0;
  return;
 }
}
function __ZN7WebCore8Document31registerForMediaVolumeCallbacksEPNS_7ElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i2;
 __ZN3WTF9HashTableIPN7WebCore7ElementES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i3 + 8 | 0, i1 + 1468 | 0, i4, i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore8Document21windowScreenDidChangeEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i1 + 1976 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN7WebCore27ScriptedAnimationController21windowScreenDidChangeEj(i3, i2);
 }
 i3 = HEAP32[i1 + 1584 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 if (!(__ZNK7WebCore10RenderView15usesCompositingEv(i3) | 0)) {
  return;
 }
 __ZN7WebCore21RenderLayerCompositor21windowScreenDidChangeEj(__ZN7WebCore10RenderView10compositorEv(i3) | 0, i2);
 return;
}
function __ZN7WebCore8Document18attachNodeIteratorEPNS_12NodeIteratorE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i2;
 __ZN3WTF9HashTableIPN7WebCore12NodeIteratorES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i3 + 8 | 0, i1 + 728 | 0, i4, i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore8Document10setDecoderEN3WTF10PassRefPtrINS_19TextResourceDecoderEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i3 = i1 + 1308 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i2;
 if ((i1 | 0) == 0) {
  return;
 }
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore19TextResourceDecoderD1Ev(i1);
  __ZN3WTF8fastFreeEPv(i1);
  return;
 } else {
  HEAP32[i2 >> 2] = i3;
  return;
 }
}
function __ZNK7WebCore8Document39displayBufferModifiedByEncodingInternalIhEEvPT_j(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = HEAP32[i1 + 1308 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 i1 = i4 + 12 | 0;
 if ((HEAP16[i1 >> 1] | 0) == 92 | (i3 | 0) == 0) {
  return;
 } else {
  i5 = 0;
 }
 while (1) {
  i4 = i2 + i5 | 0;
  if ((HEAP8[i4] | 0) == 92) {
   HEAP8[i4] = HEAP16[i1 >> 1];
  }
  i5 = i5 + 1 | 0;
  if (i5 >>> 0 >= i3 >>> 0) {
   break;
  }
 }
 return;
}
function __ZN7WebCore8Document18selectorQueryCacheEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 + 1572 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) != 0) {
  i3 = i1;
  return i3 | 0;
 }
 i1 = __ZN3WTF10fastMallocEj(20) | 0;
 _memset(i1 | 0, 0, 20) | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i1;
 __ZN3WTF14deleteOwnedPtrIN7WebCore18SelectorQueryCacheEEEvPT_(i4);
 __ZN3WTF14deleteOwnedPtrIN7WebCore18SelectorQueryCacheEEEvPT_(0);
 i3 = HEAP32[i2 >> 2] | 0;
 return i3 | 0;
}
function __ZThn88_NK7WebCore8Document22timerAlignmentIntervalEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, d4 = +0;
 i2 = i1 - 2288 + 2200 | 0;
 i1 = HEAP32[i2 + 332 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i3 = HEAP32[i1 + 32 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   d4 = +__ZNK7WebCore8Settings25domTimerAlignmentIntervalEv(HEAP32[i3 + 48 >> 2] | 0);
   return +d4;
  }
 } while (0);
 d4 = +__ZNK7WebCore22ScriptExecutionContext22timerAlignmentIntervalEv(i2 + 88 | 0);
 return +d4;
}
function __ZNK7WebCore8Document14hasSVGRootNodeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 692 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = HEAP32[i2 + 44 >> 2] | 0;
 i2 = HEAP32[__ZN7WebCore8SVGNames6svgTagE >> 2] | 0;
 if ((i1 | 0) == (i2 | 0)) {
  i3 = 1;
  return i3 | 0;
 }
 if ((HEAP32[i1 + 12 >> 2] | 0) != (HEAP32[i2 + 12 >> 2] | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (HEAP32[i1 + 16 >> 2] | 0) == (HEAP32[i2 + 16 >> 2] | 0);
 return i3 | 0;
}
function __ZN7WebCore8Document11createEventERKN3WTF6StringERi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i2 | 0;
 __ZN7WebCore12EventFactory6createERKN3WTF6StringE(i5, i3);
 i3 = i5 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i5 | 0) == 0) {
  HEAP32[i4 >> 2] = 9;
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i1 >> 2] = i5;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore8Document11attachRangeEPNS_5RangeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i2;
 __ZN3WTF9HashTableIPN7WebCore5RangeES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i3 + 8 | 0, i1 + 748 | 0, i4, i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore8Document34webkitDidEnterFullScreenForElementEPNS_7ElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i2 = HEAP32[i1 + 1688 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 if ((HEAP32[i1 + 1584 >> 2] | 0) == 0) {
  return;
 }
 if ((HEAP8[i1 + 2285 | 0] & 1) != 0) {
  return;
 }
 if ((HEAP8[i1 + 1433 | 0] & 1) != 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 424 >> 2] & 127](i2);
 __ZN7WebCore9TimerBase5startEdd(i1 + 1712 | 0, +0, +0);
 return;
}
function __ZN7WebCore8Document14formControllerEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 + 924 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) != 0) {
  i3 = i1;
  return i3 | 0;
 }
 i1 = __ZN3WTF10fastMallocEj(60) | 0;
 __ZN7WebCore14FormControllerC1Ev(i1);
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i1;
 if ((i4 | 0) == 0) {
  i3 = i1;
  return i3 | 0;
 }
 __ZN7WebCore14FormControllerD1Ev(i4);
 __ZN3WTF8fastFreeEPv(i4);
 i3 = HEAP32[i2 >> 2] | 0;
 return i3 | 0;
}
function __ZThn88_NK7WebCore8Document20minimumTimerIntervalEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, d4 = +0;
 i2 = i1 - 2288 + 2200 | 0;
 i1 = HEAP32[i2 + 332 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i3 = HEAP32[i1 + 32 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   d4 = +__ZN7WebCore8Settings19minDOMTimerIntervalEv(HEAP32[i3 + 48 >> 2] | 0);
   return +d4;
  }
 } while (0);
 d4 = +__ZNK7WebCore22ScriptExecutionContext20minimumTimerIntervalEv(i2 + 88 | 0);
 return +d4;
}
function __ZN7WebCore8Document21createEntityReferenceERKN3WTF6StringERi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 if (!(__ZN7WebCore8Document11isValidNameERKN3WTF6StringE(i3) | 0)) {
  HEAP32[i4 >> 2] = 5;
  HEAP32[i1 >> 2] = 0;
  return;
 }
 if ((HEAP8[i2 + 1576 | 0] & 1) == 0) {
  __ZN7WebCore15EntityReference6createERNS_8DocumentERKN3WTF6StringE(i1, i2, i3);
  return;
 } else {
  HEAP32[i4 >> 2] = 9;
  HEAP32[i1 >> 2] = 0;
  return;
 }
}
function __ZNK7WebCore8Document14defaultCharsetEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = HEAP32[i2 + 332 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = HEAP32[i3 + 36 >> 2] | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   i4 = HEAP32[i2 + 88 >> 2] | 0;
   HEAP32[i1 >> 2] = i4;
   if ((i4 | 0) == 0) {
    return;
   }
   i2 = i4 | 0;
   HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZN3JSC20StringSourceProviderD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 2152;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
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
 __ZN3JSC14SourceProviderD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZNK7WebCore8Document22timerAlignmentIntervalEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, d4 = +0;
 i2 = HEAP32[i1 + 332 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = HEAP32[i2 + 32 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   d4 = +__ZNK7WebCore8Settings25domTimerAlignmentIntervalEv(HEAP32[i3 + 48 >> 2] | 0);
   return +d4;
  }
 } while (0);
 d4 = +__ZNK7WebCore22ScriptExecutionContext22timerAlignmentIntervalEv(i1 + 88 | 0);
 return +d4;
}
function __ZN7WebCore8Document10setCharsetERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i1 + 1308 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore12TextEncodingC1ERKN3WTF6StringE(i4, i2);
 __ZN7WebCore19TextResourceDecoder11setEncodingERKNS_12TextEncodingENS0_14EncodingSourceE(i5, i4, 6);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore8Document20minimumTimerIntervalEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, d4 = +0;
 i2 = HEAP32[i1 + 332 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = HEAP32[i2 + 32 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   d4 = +__ZN7WebCore8Settings19minDOMTimerIntervalEv(HEAP32[i3 + 48 >> 2] | 0);
   return +d4;
  }
 } while (0);
 d4 = +__ZNK7WebCore22ScriptExecutionContext20minimumTimerIntervalEv(i1 + 88 | 0);
 return +d4;
}
function __ZN7WebCore5TimerINS_8DocumentEE5firedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 48 | 0;
 i3 = (HEAP32[i1 + 44 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] | 0) | 0;
 i4 = i3;
 i5 = HEAP32[i2 >> 2] | 0;
 if ((i5 & 1 | 0) == 0) {
  i6 = i5;
  FUNCTION_TABLE_vii[i6 & 127](i4, i1);
  return;
 } else {
  i6 = HEAP32[(HEAP32[i3 >> 2] | 0) + (i5 - 1) >> 2] | 0;
  FUNCTION_TABLE_vii[i6 & 127](i4, i1);
  return;
 }
}
function __ZN7WebCore8Document31updateFocusAppearanceTimerFiredEPNS_5TimerIS0_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i2 = HEAP32[i1 + 680 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN7WebCore8Document12updateLayoutEv(i1);
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 348 >> 2] & 127](i2) | 0)) {
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 396 >> 2] & 127](i2, (HEAP8[i1 + 1088 | 0] & 1) != 0);
 return;
}
function __ZN3JSC20StringSourceProviderD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 2152;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
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
 __ZN3JSC14SourceProviderD2Ev(i1 | 0);
 return;
}
function __ZNK7WebCore8Document15visibilityStateEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = HEAP32[i2 + 332 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   i4 = 1;
  } else {
   i2 = HEAP32[i3 + 32 >> 2] | 0;
   if ((i2 | 0) == 0) {
    i4 = 1;
    break;
   }
   i4 = __ZNK7WebCore4Page15visibilityStateEv(i2) | 0;
  }
 } while (0);
 __ZN7WebCore25pageVisibilityStateStringENS_19PageVisibilityStateE(i1, i4);
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
function __ZN7WebCore8Document10addIconURLERKN3WTF6StringES4_S4_NS_8IconTypeE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 + 4 >> 2] | 0) == 0) {
  return;
 }
 i4 = HEAP32[i1 + 332 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 __ZN7WebCore11FrameLoader14didChangeIconsENS_8IconTypeE(i4 + 80 | 0, i5);
 return;
}
function __ZNK7WebCore8Document28cloneDocumentWithoutChildrenEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = (HEAP8[i2 + 1576 | 0] & 2) == 0;
 i4 = i2 + 356 | 0;
 i2 = __Znwj(2288) | 0;
 if (i3) {
  __ZN7WebCore8DocumentC2EPNS_5FrameERKNS_3URLEjj(i2, 0, i4, 0, 0);
  HEAP32[i1 >> 2] = i2;
  return;
 } else {
  __ZN7WebCore8DocumentC2EPNS_5FrameERKNS_3URLEjj(i2, 0, i4, 2, 0);
  HEAP32[i1 >> 2] = i2;
  return;
 }
}
function __ZN7WebCore8Document34webkitWillExitFullScreenForElementEPNS_7ElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i2 = HEAP32[i1 + 1688 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 if ((HEAP32[i1 + 1584 >> 2] | 0) == 0) {
  return;
 }
 if ((HEAP8[i1 + 2285 | 0] & 1) != 0) {
  return;
 }
 if ((HEAP8[i1 + 1433 | 0] & 1) != 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 428 >> 2] & 127](i2);
 return;
}
function __ZN7WebCore8Document23updateViewportArgumentsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 332 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i3 = HEAP32[i2 + 32 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 if ((HEAP32[i2 + 28 >> 2] | 0) != (i2 | 0)) {
  return;
 }
 __ZNK7WebCore6Chrome35dispatchViewportPropertiesDidChangeERKNS_17ViewportArgumentsE(HEAP32[i3 + 20 >> 2] | 0, i1 + 1896 | 0);
 return;
}
function __ZNK7WebCore8Document7doctypeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 36 | 0;
 while (1) {
  i3 = HEAP32[i2 >> 2] | 0;
  if ((i3 | 0) == 0) {
   i4 = 0;
   i5 = 6;
   break;
  }
  if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 76 >> 2] & 127](i3) | 0) == 10) {
   break;
  } else {
   i2 = i3 + 28 | 0;
  }
 }
 if ((i5 | 0) == 6) {
  return i4 | 0;
 }
 i4 = i3;
 return i4 | 0;
}
function __ZN7WebCore8Document29parseDNSPrefetchControlHeaderERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 1085 | 0;
 do {
  if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i2 >> 2] | 0, H_BASE + 568 | 0) | 0) {
   if ((HEAP8[i3] & 1) != 0) {
    break;
   }
   HEAP8[i1 + 1084 | 0] = 1;
   return;
  }
 } while (0);
 HEAP8[i1 + 1084 | 0] = 0;
 HEAP8[i3] = 1;
 return;
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
function __ZN7WebCore8Document18setTransformSourceEN3WTF10PassOwnPtrINS_15TransformSourceEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i1 + 1284 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 i4 = i2 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i3 >> 2] = i2;
 if ((i1 | 0) == 0) {
  return;
 }
 __ZN7WebCore15TransformSourceD1Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore8Document27removeMediaCanStartListenerEPNS_21MediaCanStartListenerE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i2;
 __ZN3WTF7HashSetIPN7WebCore21MediaCanStartListenerENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1 + 1660 | 0, i4) | 0;
 STACKTOP = i3;
 return;
}
function _memmove(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 if ((i2 | 0) < (i1 | 0) & (i1 | 0) < (i2 + i3 | 0)) {
  i4 = i1;
  i2 = i2 + i3 | 0;
  i1 = i1 + i3 | 0;
  while ((i3 | 0) > 0) {
   i1 = i1 - 1 | 0;
   i2 = i2 - 1 | 0;
   i3 = i3 - 1 | 0;
   HEAP8[i1] = HEAP8[i2] | 0;
  }
  i1 = i4;
 } else {
  _memcpy(i1, i2, i3) | 0;
 }
 return i1 | 0;
}
function __ZN7WebCore8Document49unregisterForPrivateBrowsingStateChangedCallbacksEPNS_7ElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i2;
 __ZN3WTF7HashSetIPN7WebCore7ElementENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1 + 1488 | 0, i4) | 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore8Document28decrementLoadEventDelayCountEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 1832 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i3;
 if (!((HEAP32[i1 + 332 >> 2] | 0) != 0 & (i3 | 0) == 0)) {
  return;
 }
 if (+HEAPF64[i1 + 1848 >> 3] != +0) {
  return;
 }
 __ZN7WebCore9TimerBase5startEdd(i1 + 1840 | 0, +0, +0);
 return;
}
function __ZN7WebCore8Document44unregisterForVisibilityStateChangedCallbacksEPNS_7ElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i2;
 __ZN3WTF7HashSetIPN7WebCore7ElementENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1 + 1508 | 0, i4) | 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore8Document41unregisterForPageCacheSuspensionCallbacksEPNS_7ElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i2;
 __ZN3WTF7HashSetIPN7WebCore7ElementENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1 + 1448 | 0, i4) | 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore8Document12createParserEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = HEAP32[i2 + 332 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = 0;
 } else {
  i4 = HEAP32[i3 + 452 >> 2] | 0;
 }
 i3 = __ZN3WTF10fastMallocEj(292) | 0;
 __ZN7WebCore17XMLDocumentParserC1ERNS_8DocumentEPNS_9FrameViewE(i3, i2, i4);
 HEAP32[i1 >> 2] = i3;
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
function __ZN7WebCore8Document33unregisterForMediaVolumeCallbacksEPNS_7ElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i2;
 __ZN3WTF7HashSetIPN7WebCore7ElementENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1 + 1468 | 0, i4) | 0;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore8Document16elementFromPointEii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 if ((HEAP32[i1 + 1584 >> 2] | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 if ((HEAP8[i1 + 2285 | 0] & 1) != 0) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = __ZNK7WebCore9TreeScope16elementFromPointEii(i1 + 44 | 0, i2, i3) | 0;
 return i4 | 0;
}
function __ZN7WebCore8Document18detachNodeIteratorEPNS_12NodeIteratorE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i2;
 __ZN3WTF7HashSetIPN7WebCore12NodeIteratorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1 + 728 | 0, i4) | 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore8Document12setCSSTargetEPNS_7ElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 1240 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 if ((i1 | 0) != 0) {
  __ZN7WebCore7Element17didAffectSelectorEi(i1, 32);
 }
 HEAP32[i3 >> 2] = i2;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN7WebCore7Element17didAffectSelectorEi(i2, 32);
 return;
}
function dynCall_viiiiiiiiii(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11) {
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
 FUNCTION_TABLE_viiiiiiiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0, i9 | 0, i10 | 0, i11 | 0);
}
function __ZThn88_N7WebCore8Document27derefScriptExecutionContextEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 - 2288 + 2200 | 0;
 i1 = i2 + 8 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i3;
 if ((i3 | 0) >= 1) {
  return;
 }
 if ((HEAP32[i2 + 16 >> 2] | 0) != 0) {
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i2);
 return;
}
function __ZN7WebCore8Document31getWindowAttributeEventListenerERKN3WTF12AtomicStringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = HEAP32[i1 + 336 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = __ZN7WebCore11EventTarget25getAttributeEventListenerERKN3WTF12AtomicStringE(i3 | 0, i2) | 0;
 return i4 | 0;
}
function __ZN7WebCore8Document15hasActiveParserEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 if ((HEAP32[i1 + 348 >> 2] | 0) != 0) {
  i2 = 1;
  return i2 | 0;
 }
 i3 = HEAP32[i1 + 344 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 40 >> 2] & 127](i3) | 0;
 return i2 | 0;
}
function __ZN7WebCore8Document27derefScriptExecutionContextEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 8 | 0;
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i3;
 if ((i3 | 0) >= 1) {
  return;
 }
 if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
 return;
}
function __ZN7WebCore8Document18createCDATASectionERKN3WTF6StringERi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 if ((HEAP8[i2 + 1576 | 0] & 1) == 0) {
  __ZN7WebCore12CDATASection6createERNS_8DocumentERKN3WTF6StringE(i1, i2, i3);
  return;
 } else {
  HEAP32[i4 >> 2] = 9;
  HEAP32[i1 >> 2] = 0;
  return;
 }
}
function __ZNK7WebCore8Document20seamlessParentIFrameEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 if (!(__ZNK7WebCore8Document33shouldDisplaySeamlesslyWithParentEv(i1) | 0)) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = HEAP32[i1 + 332 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = HEAP32[i3 + 448 >> 2] | 0;
 return i2 | 0;
}
function iiiii___ZN7WebCore4Node16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZN7WebCore4Node16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}
function __ZNK7WebCore8Document19pageVisibilityStateEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 332 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 1;
  return i3 | 0;
 }
 i1 = HEAP32[i2 + 32 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i3 = 1;
  return i3 | 0;
 }
 i3 = __ZNK7WebCore4Page15visibilityStateEv(i1) | 0;
 return i3 | 0;
}
function __ZNK7WebCore8Document14parentDocumentEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 332 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = __ZNK7WebCore9FrameTree6parentEv(i2 + 40 | 0) | 0;
 if ((i1 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = HEAP32[i1 + 456 >> 2] | 0;
 return i3 | 0;
}
function __ZN7WebCore8Document11detachRangeEPNS_5RangeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i2;
 __ZN3WTF7HashSetIPN7WebCore5RangeENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1 + 748 | 0, i4) | 0;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore8Document6loaderEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 332 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = HEAP32[i2 + 128 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (HEAP32[i2 + 456 >> 2] | 0) == (i1 | 0) ? i4 : 0;
 return i3 | 0;
}
function __ZNK7WebCore8Document17formElementsStateEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i2 + 924 >> 2] | 0;
 if ((i3 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  HEAP32[i1 + 8 >> 2] = 0;
  return;
 } else {
  __ZNK7WebCore14FormController17formElementsStateEv(i1, i3);
  return;
 }
}
function __ZNK7WebCore8Document17deviceScaleFactorEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, d3 = +0;
 i2 = HEAP32[i1 + 332 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   d3 = +1;
  } else {
   i1 = HEAP32[i2 + 32 >> 2] | 0;
   if ((i1 | 0) == 0) {
    d3 = +1;
    break;
   }
   d3 = +HEAPF32[i1 + 116 >> 2];
  }
 } while (0);
 return +d3;
}
function __ZNK7WebCore8Document6hiddenEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 332 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 1;
  return i3 | 0;
 }
 i1 = HEAP32[i2 + 32 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i3 = 1;
  return i3 | 0;
 }
 i3 = (__ZNK7WebCore4Page15visibilityStateEv(i1) | 0) != 0;
 return i3 | 0;
}
function __ZNK7WebCore8Document25regionBasedColumnsEnabledEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 332 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = HEAP32[i2 + 36 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (HEAP8[i1 + 189 | 0] & 2) != 0;
 return i3 | 0;
}
function __ZNK7WebCore8Document24cssStickyPositionEnabledEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 332 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = HEAP32[i2 + 36 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (HEAP8[i1 + 195 | 0] & 64) != 0;
 return i3 | 0;
}
function __ZNK7WebCore8Document20cssGridLayoutEnabledEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 332 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = HEAP32[i2 + 36 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (HEAP8[i1 + 183 | 0] & 64) != 0;
 return i3 | 0;
}
function __ZN7WebCore8Document29storageBlockingStateDidChangeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 332 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i3 = HEAP32[i2 + 36 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 HEAP32[(HEAP32[i1 + 100 >> 2] | 0) + 28 >> 2] = HEAP32[i3 + 64 >> 2];
 return;
}
function __ZThn88_NK7WebCore8Document9userAgentERKNS_3URLE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = HEAP32[i2 - 2288 + 2532 >> 2] | 0;
 if ((i4 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  return;
 } else {
  __ZNK7WebCore11FrameLoader9userAgentERKNS_3URLE(i1, i4 + 80 | 0, i3);
  return;
 }
}
function __ZN7WebCore8Document33addImageElementByLowercasedUsemapERKN3WTF16AtomicStringImplERNS_16HTMLImageElementE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore18DocumentOrderedMap3addERKN3WTF16AtomicStringImplERNS_7ElementERKNS_9TreeScopeE(i1 + 1552 | 0, i2, i3 | 0, i1 + 44 | 0);
 return;
}
function __ZN7WebCore8Document32styleResolverThrowawayTimerFiredEPNS_22DeferrableOneShotTimerIS0_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i2 = i1 + 320 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 __ZN7WebCore13StyleResolverD1Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function iiiii___ZN7WebCore4Node19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZN7WebCore4Node19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}
function __ZNK7WebCore8Document9userAgentERKNS_3URLE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = HEAP32[i2 + 332 >> 2] | 0;
 if ((i4 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  return;
 } else {
  __ZNK7WebCore11FrameLoader9userAgentERKNS_3URLE(i1, i4 + 80 | 0, i3);
  return;
 }
}
function __ZN7WebCore8Document19setAnnotatedRegionsERKN3WTF6VectorINS_20AnnotatedRegionValueELj0ENS1_15CrashOnOverflowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN3WTF6VectorIN7WebCore20AnnotatedRegionValueELj0ENS_15CrashOnOverflowEEaSERKS4_(i1 + 1396 | 0, i2) | 0;
 HEAP8[i1 + 1409 | 0] = 0;
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
function __ZN7WebCore8Document31setVisualUpdatesAllowedByClientEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if (!i2) {
  return;
 }
 if (+HEAPF64[i1 + 2064 >> 3] != +0) {
  return;
 }
 if ((HEAP8[i1 + 2053 | 0] & 1) != 0) {
  return;
 }
 __ZN7WebCore8Document23setVisualUpdatesAllowedEb(i1, 1);
 return;
}
function __ZN7WebCore8Document26decrementActiveParserCountEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 348 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) - 1;
 i2 = HEAP32[i1 + 332 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN7WebCore11FrameLoader17checkLoadCompleteEv(i2 + 80 | 0);
 return;
}
function __ZN7WebCore8Document33scheduleOptimizedStyleSheetUpdateEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if (+HEAPF64[i1 + 976 >> 3] != +0) {
  return;
 }
 i2 = i1 + 868 | 0;
 if ((HEAP32[i2 >> 2] | 0) < 1) {
  HEAP32[i2 >> 2] = 1;
 }
 __ZN7WebCore9TimerBase5startEdd(i1 + 968 | 0, +0, +0);
 return;
}
function __ZN7WebCore8Document31sharedObjectPoolClearTimerFiredEPNS_5TimerIS0_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i2 = i1 + 2176 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 __ZN7WebCore24DocumentSharedObjectPoolD1Ev(i1);
 __ZdlPv(i1);
 return;
}
function __ZThn88_N7WebCore8Document11disableEvalERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i1 - 2288 + 2532 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 __ZN7WebCore16ScriptController11disableEvalERKN3WTF6StringE(HEAP32[i3 + 460 >> 2] | 0, i2);
 return;
}
function __ZN7WebCore8Document36removeImageElementByLowercasedUsemapERKN3WTF16AtomicStringImplERNS_16HTMLImageElementE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore18DocumentOrderedMap6removeERKN3WTF16AtomicStringImplERNS_7ElementE(i1 + 1552 | 0, i2, i3 | 0);
 return;
}
function __ZN7WebCore8Document34visualUpdatesSuppressionTimerFiredEPNS_5TimerIS0_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((HEAP8[(HEAP32[(HEAP32[i1 + 332 >> 2] | 0) + 452 >> 2] | 0) + 656 | 0] & 1) == 0) {
  return;
 }
 __ZN7WebCore8Document23setVisualUpdatesAllowedEb(i1, 1);
 return;
}
function __ZNK7WebCore8Document8encodingEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i2 + 1308 >> 2] | 0;
 if ((i3 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  return;
 } else {
  __ZN3WTF6StringC1EPKc(i1, __ZNK7WebCore12TextEncoding7domNameEv(i3 + 8 | 0) | 0);
  return;
 }
}
function __ZThn88_N7WebCore8Document23suspendActiveDOMObjectsENS_15ActiveDOMObject19ReasonForSuspensionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore22ScriptExecutionContext23suspendActiveDOMObjectsENS_15ActiveDOMObject19ReasonForSuspensionE(i1 - 2288 + 2288 | 0, i2);
 return;
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
function __ZThn88_N7WebCore8Document22resumeActiveDOMObjectsENS_15ActiveDOMObject19ReasonForSuspensionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore22ScriptExecutionContext22resumeActiveDOMObjectsENS_15ActiveDOMObject19ReasonForSuspensionE(i1 - 2288 + 2288 | 0, i2);
 return;
}
function __ZNK7WebCore8Document30imageElementByLowercasedUsemapERKN3WTF16AtomicStringImplE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore18DocumentOrderedMap28getElementByLowercasedUsemapERKN3WTF16AtomicStringImplERKNS_9TreeScopeE(i1 + 1552 | 0, i2, i1 + 44 | 0) | 0;
}
function __ZNK7WebCore8Document24scriptableDocumentParserEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 344 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 127](i2) | 0;
 return i3 | 0;
}
function __ZN7WebCore8Document11disableEvalERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i1 + 332 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 __ZN7WebCore16ScriptController11disableEvalERKN3WTF6StringE(HEAP32[i3 + 460 >> 2] | 0, i2);
 return;
}
function __ZNK7WebCore8Document6domainEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[(HEAP32[i2 + 100 >> 2] | 0) + 12 >> 2] | 0;
 HEAP32[i1 >> 2] = i3;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = i3 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
 return;
}
function __ZN7WebCore8Document18setVisuallyOrderedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP8[i1 + 956 | 0] = 1;
 i2 = HEAP32[i1 + 1584 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = (HEAP32[i2 + 36 >> 2] | 0) + 44 | 0;
 HEAP32[i1 >> 2] = HEAP32[i1 >> 2] | 32;
 return;
}
function __ZN7WebCore8Document39scriptedAnimationControllerSetThrottledEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i1 + 1976 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 __ZN7WebCore27ScriptedAnimationController12setThrottledEb(i3, i2);
 return;
}
function __ZN7WebCore8Document23suspendActiveDOMObjectsENS_15ActiveDOMObject19ReasonForSuspensionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore22ScriptExecutionContext23suspendActiveDOMObjectsENS_15ActiveDOMObject19ReasonForSuspensionE(i1 + 88 | 0, i2);
 return;
}
function __ZNK7WebCore8Document22preferredStylesheetSetEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i2 + 904 >> 2] | 0;
 HEAP32[i1 >> 2] = i3;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = i3 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
 return;
}
function viiii___ZN7WebCore18setViewportFeatureERKN3WTF6StringES3_PNS_8DocumentEPv__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore18setViewportFeatureERKN3WTF6StringES3_PNS_8DocumentEPv(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function __ZNK7WebCore8Document21selectedStylesheetSetEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i2 + 908 >> 2] | 0;
 HEAP32[i1 >> 2] = i3;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = i3 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
 return;
}
function __ZN7WebCore8Document22resumeActiveDOMObjectsENS_15ActiveDOMObject19ReasonForSuspensionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore22ScriptExecutionContext22resumeActiveDOMObjectsENS_15ActiveDOMObject19ReasonForSuspensionE(i1 + 88 | 0, i2);
 return;
}
function __ZN7WebCore8Document25serviceScriptedAnimationsEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var i3 = 0;
 i3 = HEAP32[i1 + 1976 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 __ZN7WebCore27ScriptedAnimationController25serviceScriptedAnimationsEd(i3, d2);
 return;
}
function __ZN7WebCore8Document22invalidateAccessKeyMapEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP8[i1 + 1548 | 0] = 0;
 i2 = i1 + 1528 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 __ZN3WTF8fastFreeEPv(i1);
 _memset(i2 | 0, 0, 16) | 0;
 return;
}
function __ZN7WebCore8Document18clearAXObjectCacheEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 1120 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 __ZN7WebCore13AXObjectCacheD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore8Document18clearStyleResolverEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 320 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 __ZN7WebCore13StyleResolverD1Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZThn88_NK7WebCore8Document11completeURLERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = i2 - 2288 + 2200 | 0;
 __ZNK7WebCore8Document11completeURLERKN3WTF6StringERKNS_3URLE(i1, i4, i3, i4 + 404 | 0);
 return;
}
function __ZNK7WebCore8Document8referrerEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i2 + 332 >> 2] | 0;
 if ((i3 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  return;
 } else {
  __ZNK7WebCore11FrameLoader8referrerEv(i1, i3 + 80 | 0);
  return;
 }
}
function __ZN7WebCore8Document24fullScreenElementRemovedEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore7Element62setContainsFullScreenElementOnAncestorsCrossingFrameBoundariesEb(HEAP32[i1 + 1688 >> 2] | 0, 0);
 __ZN7WebCore8Document22webkitCancelFullScreenEv(i1);
 return;
}
function __ZN7WebCore8Document27resetHiddenFocusElementSoonEv(i1) {
 i1 = i1 | 0;
 if (+HEAPF64[i1 + 1192 >> 3] != +0) {
  return;
 }
 if ((HEAP32[i1 + 680 >> 2] | 0) == 0) {
  return;
 }
 __ZN7WebCore9TimerBase5startEdd(i1 + 1184 | 0, +0, +0);
 return;
}
function __ZN7WebCore8Document20cancelAnimationFrameEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i1 + 1976 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 __ZN7WebCore27ScriptedAnimationController14cancelCallbackEi(i3, i2);
 return;
}
function __ZN7WebCore8Document22didAccessStyleResolverEv(i1) {
 i1 = i1 | 0;
 if (+HEAPF64[i1 + 256 >> 3] != +0) {
  HEAP8[i1 + 312 | 0] = 1;
  return;
 } else {
  __ZN7WebCore9TimerBase5startEdd(i1 + 248 | 0, +HEAPF64[i1 + 304 >> 3], +0);
  return;
 }
}
function __ZN7WebCore8Document25updateFocusAppearanceSoonEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP8[i1 + 1088 | 0] = i2 & 1;
 if (+HEAPF64[i1 + 1136 >> 3] != +0) {
  return;
 }
 __ZN7WebCore9TimerBase5startEdd(i1 + 1128 | 0, +0, +0);
 return;
}
function __ZN7WebCore8Document24loadEventDelayTimerFiredEPNS_5TimerIS0_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i2 = HEAP32[i1 + 332 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN7WebCore11FrameLoader14checkCompletedEv(i2 + 80 | 0);
 return;
}
function __ZN7WebCore8Document43suspendScriptedAnimationControllerCallbacksEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 1976 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN7WebCore27ScriptedAnimationController7suspendEv(i2);
 return;
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
function __ZN7WebCore8Document42resumeScriptedAnimationControllerCallbacksEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 1976 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN7WebCore27ScriptedAnimationController6resumeEv(i2);
 return;
}
function __ZN7WebCore8Document23dispatchWindowLoadEventEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 336 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN7WebCore9DOMWindow17dispatchLoadEventEv(i2);
 HEAP8[i1 + 1245 | 0] = 1;
 return;
}
function __ZN7WebCore8Document26didRemoveWheelEventHandlerEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 1964 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) - 1;
 __ZN7WebCoreL29wheelEventHandlerCountChangedEPNS_8DocumentE(i1);
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
 FUNCTION_TABLE_viiiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0);
}
function __ZN7WebCore8Document23didAddWheelEventHandlerEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 1964 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 __ZN7WebCoreL29wheelEventHandlerCountChangedEPNS_8DocumentE(i1);
 return;
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
function __ZN7WebCore8Document22evaluateMediaQueryListEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 1952 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN7WebCore17MediaQueryMatcher20styleResolverChangedEv(i2);
 return;
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
function __ZNK7WebCore8Document12ownerElementEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 332 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = HEAP32[i2 + 448 >> 2] | 0;
 return i3 | 0;
}
function __ZN7WebCore8Document26documentWillBecomeInactiveEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 1584 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN7WebCore10RenderView13setIsInWindowEb(i2, 0);
 return;
}
function __ZNK7WebCore8Document27hasPendingForcedStyleRecalcEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if (+HEAPF64[i1 + 1032 >> 3] == +0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = (HEAP8[i1 + 1080 | 0] & 1) != 0;
 return i2 | 0;
}
function iii___ZN7WebCore4Node13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore4Node13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE(i1 | 0, i2 | 0) | 0;
}
function __ZNK7WebCore8Document8settingsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 332 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = HEAP32[i2 + 36 >> 2] | 0;
 return i3 | 0;
}
function __ZNK7WebCore8Document11completeURLERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore8Document11completeURLERKN3WTF6StringERKNS_3URLE(i1, i2, i3, i2 + 404 | 0);
 return;
}
function __ZN7WebCore8Document21createEditingTextNodeERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore4Text17createEditingTextERNS_8DocumentERKN3WTF6StringE(i1, i2, i3);
 return;
}
function iii___ZNK7WebCore14HTMLCollection9namedItemERKN3WTF12AtomicStringE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore14HTMLCollection9namedItemERKN3WTF12AtomicStringE(i1 | 0, i2 | 0) | 0;
}
function __ZNK7WebCore8Document21haveStylesheetsLoadedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP32[i1 + 804 >> 2] | 0) <= 0) {
  i2 = 1;
  return i2 | 0;
 }
 i2 = (HEAP8[i1 + 327 | 0] & 1) != 0;
 return i2 | 0;
}
function __ZN7WebCore8Document35optimizedStyleSheetUpdateTimerFiredEPNS_5TimerIS0_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore8Document20styleResolverChangedENS_23StyleResolverUpdateFlagE(i1, 2);
 return;
}
function __ZNK7WebCore8Document4viewEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 332 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = HEAP32[i2 + 452 >> 2] | 0;
 return i3 | 0;
}
function __ZNK7WebCore8Document21hasPendingStyleRecalcEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if (+HEAPF64[i1 + 1032 >> 3] == +0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = (HEAP8[i1 + 1081 | 0] & 1) == 0;
 return i2 | 0;
}
function viii___ZNK7WebCore5Event8cloneForEPNS_17HTMLIFrameElementE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore5Event8cloneForEPNS_17HTMLIFrameElementE(i1 | 0, i2 | 0, i3 | 0);
}
function __ZNK7WebCore8Document4pageEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 332 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = HEAP32[i2 + 32 >> 2] | 0;
 return i3 | 0;
}
function __ZN7WebCore8Document22createDocumentFragmentEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore16DocumentFragment6createERNS_8DocumentE(i1, HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0);
 return;
}
function viii___ZN7WebCore4Node9setPrefixERKN3WTF12AtomicStringERi__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore4Node9setPrefixERKN3WTF12AtomicStringERi(i1 | 0, i2 | 0, i3 | 0);
}
function b11(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10) {
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
 abort(11);
}
function dynCall_viiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 FUNCTION_TABLE_viiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
}
function viii___ZN7WebCore4Node12setNodeValueERKN3WTF6StringERi__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore4Node12setNodeValueERKN3WTF6StringERi(i1 | 0, i2 | 0, i3 | 0);
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
function __ZN7WebCore8Document13createCommentERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore7Comment6createERNS_8DocumentERKN3WTF6StringE(i1, i2, i3);
 return;
}
function __ZN7WebCore8Document14createTextNodeERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore4Text6createERNS_8DocumentERKN3WTF6StringE(i1, i2, i3);
 return;
}
function iii___ZN7WebCore4Node12insertedIntoERNS_13ContainerNodeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore4Node12insertedIntoERNS_13ContainerNodeE(i1 | 0, i2 | 0) | 0;
}
function __ZN3WTF7CheckedIjNS_15CrashOnOverflowEEC1ENS_19ResultOverflowedTagE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN3WTF7CheckedIjNS_15CrashOnOverflowEEC2ENS_19ResultOverflowedTagE(i1, 0);
}
function __ZNK7WebCore8Document10compatModeEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN3WTF6StringC1EPKc(i1, ((HEAP32[i2 + 664 >> 2] | 0) == 0 ? H_BASE + 1392 : H_BASE + 928) | 0);
 return;
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
function dynCall_iiiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return FUNCTION_TABLE_iiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
}
function __ZNK7WebCore4Node22scriptExecutionContextEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
 return ((i2 | 0) == 0 ? 0 : i2 + 88 | 0) | 0;
}
function vii___ZN7WebCore4Node20didMoveToNewDocumentEPNS_8DocumentE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore4Node20didMoveToNewDocumentEPNS_8DocumentE(i1 | 0, i2 | 0);
}
function __ZNK7WebCore8Document11elapsedTimeEv(i1) {
 i1 = i1 | 0;
 var d2 = +0;
 d2 = +__ZN3WTF27monotonicallyIncreasingTimeEv() * +1e3;
 return ~~(d2 - +HEAPF64[i1 + 1256 >> 3]) | 0;
}
function iii___ZN7WebCore4Node13computedStyleENS_8PseudoIdE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore4Node13computedStyleENS_8PseudoIdE(i1 | 0, i2 | 0) | 0;
}
function vii___ZN7WebCore4Node11removedFromERNS_13ContainerNodeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore4Node11removedFromERNS_13ContainerNodeE(i1 | 0, i2 | 0);
}
function __ZThn88_N7WebCore8Document25refScriptExecutionContextEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 2288 + 2208 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 return;
}
function __ZN3WTF7CheckedIjNS_15CrashOnOverflowEEC2ENS_19ResultOverflowedTagE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
 __ZN3WTF15CrashOnOverflow10overflowedEv();
}
function vii___ZN7WebCore4Node19defaultEventHandlerEPNS_5EventE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore4Node19defaultEventHandlerEPNS_5EventE(i1 | 0, i2 | 0);
}
function __ZNK7WebCore8Document21cssCompositingEnabledEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[(__ZN7WebCore22RuntimeEnabledFeatures14sharedFeaturesEv() | 0) + 14 | 0] & 1) != 0 | 0;
}
function __ZN7WebCore8Document32seamlessParentUpdatedStylesheetsEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore8Document20styleResolverChangedENS_23StyleResolverUpdateFlagE(i1, 0);
 return;
}
function __ZN7WebCore8Document21resetVisitedLinkColorEv(i1) {
 i1 = i1 | 0;
 HEAP32[i1 + 936 >> 2] = __ZN7WebCore7makeRGBEiii(85, 26, 139) | 0;
 HEAP8[i1 + 940 | 0] = 1;
 return;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function vii___ZN7WebCore4Node17handleLocalEventsERNS_5EventE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore4Node17handleLocalEventsERNS_5EventE(i1 | 0, i2 | 0);
}
function __ZNK7WebCore8Document17cssRegionsEnabledEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[(__ZN7WebCore22RuntimeEnabledFeatures14sharedFeaturesEv() | 0) + 13 | 0] & 1) != 0 | 0;
}
function vi___ZN7WebCore15SegmentedString28advanceAndUpdateLineNumber16Ev__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore15SegmentedString28advanceAndUpdateLineNumber16Ev(i1 | 0);
}
function __ZThn88_N7WebCore8Document20stopActiveDOMObjectsEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22ScriptExecutionContext20stopActiveDOMObjectsEv(i1 - 2288 + 2288 | 0);
 return;
}
function vi___ZN7WebCore15SegmentedString27advanceAndUpdateLineNumber8Ev__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore15SegmentedString27advanceAndUpdateLineNumber8Ev(i1 | 0);
}
function vi___ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv(i1 | 0);
}
function __ZN7WebCore8Document36resetLastHandledUserGestureTimestampEv(i1) {
 i1 = i1 | 0;
 HEAPF64[i1 + 1968 >> 3] = +__ZN3WTF27monotonicallyIncreasingTimeEv();
 return;
}
function __ZN7WebCore8Document14resetLinkColorEv(i1) {
 i1 = i1 | 0;
 HEAP32[i1 + 928 >> 2] = __ZN7WebCore7makeRGBEiii(0, 0, 238) | 0;
 HEAP8[i1 + 932 | 0] = 1;
 return;
}
function __ZN7WebCore8Document21styleRecalcTimerFiredEPNS_5TimerIS0_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore8Document19updateStyleIfNeededEv(i1);
 return;
}
function __ZN7WebCore8Document25scheduleForcedStyleRecalcEv(i1) {
 i1 = i1 | 0;
 HEAP8[i1 + 1080 | 0] = 1;
 __ZN7WebCore8Document19scheduleStyleRecalcEv(i1);
 return;
}
function vii___ZNK7WebCore13ContainerNode11boundingBoxEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore13ContainerNode11boundingBoxEv(i1 | 0, i2 | 0);
}
function __ZN7WebCore8Document25refScriptExecutionContextEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 8 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 return;
}
function ii___ZN7WebCore4Node29willRespondToMouseWheelEventsEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node29willRespondToMouseWheelEventsEv(i1 | 0) | 0;
}
function ii___ZN7WebCore4Node29willRespondToMouseClickEventsEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node29willRespondToMouseClickEventsEv(i1 | 0) | 0;
}
function ii___ZN7WebCore4Node28willRespondToMouseMoveEventsEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node28willRespondToMouseMoveEventsEv(i1 | 0) | 0;
}
function dynCall_iiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0) | 0;
}
function ii___ZNK7WebCore5Event25isBeforeTextInsertedEventEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore5Event25isBeforeTextInsertedEventEv(i1 | 0) | 0;
}
function __ZN7WebCore8Document20stopActiveDOMObjectsEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22ScriptExecutionContext20stopActiveDOMObjectsEv(i1 + 88 | 0);
 return;
}
function __ZN7WebCore8Document21unscheduleStyleRecalcEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBase4stopEv(i1 + 1024 | 0);
 HEAP8[i1 + 1080 | 0] = 0;
 return;
}
function __ZN7WebCore22DeferrableOneShotTimerINS_8DocumentEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBaseD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1 | 0);
 return;
}
function __ZThn88_N7WebCore8DocumentD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 2288 + 2200 | 0;
 __ZN7WebCore8DocumentD2Ev(i2);
 __ZdlPv(i2);
 return;
}
function __ZThn44_N7WebCore8DocumentD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 2288 + 2244 | 0;
 __ZN7WebCore8DocumentD2Ev(i2);
 __ZdlPv(i2);
 return;
}
function ii___ZN7WebCore4Node24willRespondToTouchEventsEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node24willRespondToTouchEventsEv(i1 | 0) | 0;
}
function __ZNK7WebCore4Node27addSubresourceAttributeURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore22DocumentNameCollectionD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore18HTMLNameCollectionD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function ii___ZNK7WebCore9TreeScope17applyAuthorStylesEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9TreeScope17applyAuthorStylesEv(i1 | 0) | 0;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 31](i2 | 0, i3 | 0, i4 | 0);
}
function __ZN7WebCore20WindowNameCollectionD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore18HTMLNameCollectionD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function ii___ZNK7WebCore11EventTarget13isMessagePortEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore11EventTarget13isMessagePortEv(i1 | 0) | 0;
}
function vi___ZNK7WebCore14HTMLCollection15updateNameCacheEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZNK7WebCore14HTMLCollection15updateNameCacheEv(i1 | 0);
}
function vi___ZNK7WebCore14HTMLCollection15invalidateCacheEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZNK7WebCore14HTMLCollection15invalidateCacheEv(i1 | 0);
}
function ii___ZNK7WebCore5Event19isBeforeUnloadEventEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore5Event19isBeforeUnloadEventEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore4Node20eventTargetInterfaceEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore4Node20eventTargetInterfaceEv(i1 | 0) | 0;
}
function ii___ZN7WebCore4Node21ensureEventTargetDataEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node21ensureEventTargetDataEv(i1 | 0) | 0;
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function __ZN7WebCore8Document16getOverrideStyleEPNS_7ElementERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return 0;
}
function ii___ZNK7WebCore4Node18offsetInCharactersEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore4Node18offsetInCharactersEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore4Node18maxCharacterOffsetEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore4Node18maxCharacterOffsetEv(i1 | 0) | 0;
}
function ii___ZN7WebCore11EventTarget11toDOMWindowEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore11EventTarget11toDOMWindowEv(i1 | 0) | 0;
}
function __ZThn44_N7WebCore8Document12dropChildrenEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore8Document12dropChildrenEv(i1 - 2288 + 2244 | 0);
 return;
}
function __ZN7WebCore8Document11createRangeEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore5Range6createERNS_8DocumentE(i1, i2);
 return;
}
function vi___ZN7WebCore15SegmentedString12advanceEmptyEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore15SegmentedString12advanceEmptyEv(i1 | 0);
}
function ii___ZNK7WebCore5Event16isClipboardEventEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore5Event16isClipboardEventEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore4Node17canStartSelectionEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore4Node17canStartSelectionEv(i1 | 0) | 0;
}
function vii___ZNK7WebCore4Node9nodeValueEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore4Node9nodeValueEv(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore5Event15isKeyboardEventEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore5Event15isKeyboardEventEv(i1 | 0) | 0;
}
function __ZN7WebCore5TimerINS_8DocumentEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBaseD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1 | 0);
 return;
}
function __ZN7WebCore8Document27cancelFocusAppearanceUpdateEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBase4stopEv(i1 + 1128 | 0);
 return;
}
function __ZN7WebCore8Document24setShouldCreateRenderersEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP8[i1 + 1432 | 0] = i2 & 1;
 return;
}
function __ZNK7WebCore8Document8nodeNameEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN3WTF6StringC1EPKc(i1, H_BASE + 1344 | 0);
 return;
}
function ii___ZN7WebCore4Node15eventTargetDataEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node15eventTargetDataEv(i1 | 0) | 0;
}
function vi___ZN7WebCore15SegmentedString9advance16Ev__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore15SegmentedString9advance16Ev(i1 | 0);
}
function ii___ZNK7WebCore5Event12isTouchEventEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore5Event12isTouchEventEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore5Event12isMouseEventEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore5Event12isMouseEventEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore5Event12isFocusEventEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore5Event12isFocusEventEv(i1 | 0) | 0;
}
function ii___ZN7WebCore4Node14toInputElementEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node14toInputElementEv(i1 | 0) | 0;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 15](i2 | 0, i3 | 0) | 0;
}
function vi___ZN7WebCore15SegmentedString8advance8Ev__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore15SegmentedString8advance8Ev(i1 | 0);
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
function ii___ZNK7WebCore5Event11isDragEventEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore5Event11isDragEventEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore4Node12namespaceURIEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore4Node12namespaceURIEv(i1 | 0) | 0;
}
function vi___ZN7WebCore4Node18dispatchInputEventEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore4Node18dispatchInputEventEv(i1 | 0);
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
function vi___ZN7WebCore4Node16derefEventTargetEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore4Node16derefEventTargetEv(i1 | 0);
}
function __ZN7WebCore22DeferrableOneShotTimerINS_8DocumentEED1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBaseD2Ev(i1);
 return;
}
function ii___ZNK7WebCore5Event9isUIEventEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore5Event9isUIEventEv(i1 | 0) | 0;
}
function __ZNK7WebCore13ContainerNode25childShouldCreateRendererERKNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 1;
}
function __ZN7WebCore22DocumentNameCollectionD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore18HTMLNameCollectionD2Ev(i1 | 0);
 return;
}
function vi___ZN7WebCore5Event14receivedTargetEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore5Event14receivedTargetEv(i1 | 0);
}
function setThrew(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((__THREW__ | 0) == 0) {
  __THREW__ = i1;
  threwValue = i2;
 }
}
function ii___ZNK7WebCore4Node9localNameEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore4Node9localNameEv(i1 | 0) | 0;
}
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 127](i2 | 0, i3 | 0);
}
function dynCall_did(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 return +FUNCTION_TABLE_did[i1 & 3](i2 | 0, +d3);
}
function __ZN7WebCore8Document16shortcutIconURLsEv(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore8Document8iconURLsEi(i1, 1) | 0;
}
function __ZN7WebCore20WindowNameCollectionD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore18HTMLNameCollectionD2Ev(i1 | 0);
 return;
}
function vi___ZN7WebCore4Node14refEventTargetEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore4Node14refEventTargetEv(i1 | 0);
}
function __ZN7WebCore4Node26didNotifySubtreeInsertionsEPNS_13ContainerNodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZNK7WebCore8Document21isAnimatingFullScreenEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[i1 + 1808 | 0] & 1) != 0 | 0;
}
function __ZNK7WebCore14HTMLCollection18customElementAfterEPNS_7ElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 0;
}
function __ZN7WebCore8Document21shouldCreateRenderersEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[i1 + 1432 | 0] & 1) != 0 | 0;
}
function __ZN7WebCore4Node43notifyLoadedSheetAndAllCriticalSubresourcesEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZThn88_N7WebCore8DocumentD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore8DocumentD2Ev(i1 - 2288 + 2200 | 0);
 return;
}
function __ZThn88_N7WebCore8Document16errorEventTargetEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 - 2288 + 2536 >> 2] | 0;
}
function __ZThn44_N7WebCore8DocumentD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore8DocumentD2Ev(i1 - 2288 + 2244 | 0);
 return;
}
function __ZN7WebCore8Document27fullScreenRendererDestroyedEv(i1) {
 i1 = i1 | 0;
 HEAP32[i1 + 1704 >> 2] = 0;
 return;
}
function ii___ZNK7WebCore4Node6prefixEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore4Node6prefixEv(i1 | 0) | 0;
}
function __ZThn88_NK7WebCore8Document15isContextThreadEv(i1) {
 i1 = i1 | 0;
 return __ZN3WTF12isMainThreadEv() | 0;
}
function __ZN7WebCore8Document26didRemoveTouchEventHandlerEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function ii___ZN7WebCore4Node6toNodeEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node6toNodeEv(i1 | 0) | 0;
}
function b0(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(0);
}
function __ZN7WebCore8Document23didAddTouchEventHandlerEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZNK7WebCore8Document15isContextThreadEv(i1) {
 i1 = i1 | 0;
 return __ZN3WTF12isMainThreadEv() | 0;
}
function __ZN7WebCore8Document19disconnectFromFrameEv(i1) {
 i1 = i1 | 0;
 HEAP32[i1 + 332 >> 2] = 0;
 return;
}
function b10(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(10);
 return 0;
}
function __ZN7WebCore8DocumentD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore8DocumentD2Ev(i1);
 __ZdlPv(i1);
 return;
}
function __ZN7WebCore5TimerINS_8DocumentEED1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBaseD2Ev(i1);
 return;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 127](i2 | 0) | 0;
}
function __ZN7WebCore8Document16errorEventTargetEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 336 >> 2] | 0;
}
function __ZNK7WebCore8Document13getDesignModeEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 1312 >> 2] | 0;
}
function __ZN7WebCore8Document13svgExtensionsEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 1392 >> 2] | 0;
}
function dynCall_di(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return +FUNCTION_TABLE_di[i1 & 15](i2 | 0);
}
function __ZThn88_NK7WebCore8Document10eventQueueEv(i1) {
 i1 = i1 | 0;
 return i1 - 2288 + 3788 | 0;
}
function __ZNK7WebCore22ScriptExecutionContext19isWorkerGlobalScopeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore8Document37platformSuspendOrStopActiveDOMObjectsEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore9TimerBase15alignedFireTimeEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 return +d2;
}
function b13(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(13);
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 127](i2 | 0);
}
function __ZThn88_NK7WebCore8Document22isJSExecutionForbiddenEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore8Document16annotatedRegionsEv(i1) {
 i1 = i1 | 0;
 return i1 + 1396 | 0;
}
function __ZThn88_NK7WebCore8Document3urlEv(i1) {
 i1 = i1 | 0;
 return i1 - 2288 + 2556 | 0;
}
function __ZNK3JSC20StringSourceProvider6sourceEv(i1) {
 i1 = i1 | 0;
 return i1 + 24 | 0;
}
function b7(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(7);
 return 0;
}
function __ZNK7WebCore8Document23canContainRangeEndPointEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore8Document22isJSExecutionForbiddenEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore8Document10eventQueueEv(i1) {
 i1 = i1 | 0;
 return i1 + 1588 | 0;
}
function __ZNK7WebCore15HashChangeEvent14eventInterfaceEv(i1) {
 i1 = i1 | 0;
 return 8;
}
function __ZNK7WebCore8Document21existingAXObjectCacheEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node21isMediaControlElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore4Node24startLoadingDynamicSheetEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZThn88_NK7WebCore8Document10isDocumentEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore4Node20isInsertionPointNodeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node19isFrameOwnerElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node19isCharacterDataNodeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore4Node21finishParsingChildrenEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore8Document3urlEv(i1) {
 i1 = i1 | 0;
 return i1 + 356 | 0;
}
function __ZNK7WebCore8Document13axObjectCacheEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore4Node20beginParsingChildrenEv(i1) {
 i1 = i1 | 0;
 return;
}
function b8(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(8);
}
function __ZNK7WebCore4Node16nonRendererStyleEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node15isPluginElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node15isMediaControlsEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node15isAttributeNodeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore8Document10isFrameSetEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore8Document10isDocumentEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore5Event13relatedTargetEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node14customPseudoIdEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b12(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(12);
 return 0;
}
function __ZNK7WebCore8Document8nodeTypeEv(i1) {
 i1 = i1 | 0;
 return 9;
}
function __ZN7WebCore4Node11sheetLoadedEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore5Event9clipboardEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b3(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 abort(3);
 return +0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
}
function __ZN3WTF15CrashOnOverflow10overflowedEv() {
 _WTFCrash();
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
function b2(i1) {
 i1 = i1 | 0;
 abort(2);
 return +0;
}
function b6(i1) {
 i1 = i1 | 0;
 abort(6);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b4(i1) {
 i1 = i1 | 0;
 abort(4);
}
function b9() {
 abort(9);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_viiiii = [b0,b0,__ZThn88_N7WebCore8Document17addConsoleMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringEm,b0,__ZN7WebCore8DocumentC2EPNS_5FrameERKNS_3URLEjj,b0,__ZN7WebCore8Document17addConsoleMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringEm,b0];
  var FUNCTION_TABLE_viiiiii = [b1,b1,__ZThn88_N7WebCore8Document21logExceptionToConsoleERKN3WTF6StringES4_iiNS1_10PassRefPtrINS_15ScriptCallStackEEE,b1,__ZN7WebCore8Document21logExceptionToConsoleERKN3WTF6StringES4_iiNS1_10PassRefPtrINS_15ScriptCallStackEEE,b1,b1,b1];
  var FUNCTION_TABLE_di = [b2,b2,__ZNK7WebCore8Document20minimumTimerIntervalEv,b2,__ZThn88_NK7WebCore8Document22timerAlignmentIntervalEv,b2,__ZNK7WebCore8Document22timerAlignmentIntervalEv,b2,__ZThn88_NK7WebCore8Document20minimumTimerIntervalEv,b2,b2,b2,b2,b2,b2,b2];
  var FUNCTION_TABLE_did = [b3,b3,__ZNK7WebCore9TimerBase15alignedFireTimeEd,b3];
  var FUNCTION_TABLE_vi = [b4,b4,vi___ZN7WebCore15SegmentedString12advanceEmptyEv__wrapper,b4,__ZN7WebCore8DocumentD2Ev,b4,vi___ZN7WebCore4Node16derefEventTargetEv__wrapper,b4,__ZThn44_N7WebCore8DocumentD0Ev,b4,vi___ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv__wrapper,b4,__ZN7WebCore5TimerINS_8DocumentEED0Ev,b4,__ZThn88_N7WebCore8Document25refScriptExecutionContextEv,b4,__ZN7WebCore8Document27derefScriptExecutionContextEv,b4,__ZN7WebCore20WindowNameCollectionD1Ev,b4,vi___ZN7WebCore15SegmentedString27advanceAndUpdateLineNumber8Ev__wrapper,b4,__ZN7WebCore4Node20beginParsingChildrenEv,b4,__ZN7WebCore8Document12dropChildrenEv,b4,__ZThn44_N7WebCore8DocumentD1Ev,b4,vi___ZN7WebCore4Node18dispatchInputEventEv__wrapper
  ,b4,__ZN7WebCore8Document23removeAllEventListenersEv,b4,__ZThn88_N7WebCore8Document27derefScriptExecutionContextEv,b4,__ZN7WebCore5TimerINS_8DocumentEE5firedEv,b4,__ZN7WebCore22DeferrableOneShotTimerINS_8DocumentEE5firedEv,b4,vi___ZN7WebCore15SegmentedString28advanceAndUpdateLineNumber16Ev__wrapper,b4,__ZN7WebCore22DocumentNameCollectionD1Ev,b4,__ZN7WebCore5TimerINS_8DocumentEED1Ev,b4,__ZN7WebCore8Document25refScriptExecutionContextEv,b4,vi___ZNK7WebCore14HTMLCollection15invalidateCacheEv__wrapper,b4,__ZN7WebCore22DeferrableOneShotTimerINS_8DocumentEED0Ev,b4,__ZN7WebCore4Node24startLoadingDynamicSheetEv,b4,vi___ZN7WebCore15SegmentedString9advance16Ev__wrapper,b4,__ZN7WebCore8Document20stopActiveDOMObjectsEv,b4,__ZN7WebCore22DeferrableOneShotTimerINS_8DocumentEED1Ev,b4,__ZThn44_N7WebCore8Document12dropChildrenEv
  ,b4,__ZThn88_N7WebCore8DocumentD0Ev,b4,__ZN3JSC20StringSourceProviderD0Ev,b4,__ZN7WebCore15HashChangeEventD0Ev,b4,__ZN7WebCore4Node21finishParsingChildrenEv,b4,vi___ZN7WebCore15SegmentedString8advance8Ev__wrapper,b4,vi___ZN7WebCore5Event14receivedTargetEv__wrapper,b4,vi___ZNK7WebCore14HTMLCollection15updateNameCacheEv__wrapper,b4,__ZN7WebCore15HashChangeEventD1Ev,b4,vi___ZN7WebCore4Node14refEventTargetEv__wrapper,b4,__ZN7WebCore8Document14didReceiveTaskEPv,b4,__ZThn88_N7WebCore8Document20stopActiveDOMObjectsEv,b4,__ZThn88_N7WebCore8DocumentD1Ev,b4,__ZN7WebCore22DocumentNameCollectionD0Ev,b4,__ZN7WebCore20WindowNameCollectionD0Ev,b4,__ZN3JSC20StringSourceProviderD1Ev
  ,b4,__ZN7WebCore8DocumentD0Ev,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4
  ,b4,b4,b4,b4,b4,b4,b4,b4,b4];
  var FUNCTION_TABLE_vii = [b5,b5,__ZNK7WebCore8Document28cloneDocumentWithoutChildrenEv,b5,vii___ZN7WebCore4Node17handleLocalEventsERNS_5EventE__wrapper,b5,__ZN7WebCore8Document32styleResolverThrowawayTimerFiredEPNS_22DeferrableOneShotTimerIS0_EE,b5,__ZN7WebCore8Document31updateFocusAppearanceTimerFiredEPNS_5TimerIS0_EE,b5,__ZThn88_N7WebCore8Document11disableEvalERKN3WTF6StringE,b5,__ZN7WebCore8Document24loadEventDelayTimerFiredEPNS_5TimerIS0_EE,b5,__ZN7WebCore8Document21styleRecalcTimerFiredEPNS_5TimerIS0_EE,b5,__ZN7WebCore8Document12createParserEv,b5,__ZNK7WebCore4Node27addSubresourceAttributeURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEE,b5,vii___ZNK7WebCore13ContainerNode11boundingBoxEv__wrapper,b5,__ZN7WebCore8Document15childrenChangedERKNS_13ContainerNode11ChildChangeE,b5,__ZThn88_N7WebCore8Document22resumeActiveDOMObjectsENS_15ActiveDOMObject19ReasonForSuspensionE,b5,vii___ZN7WebCore4Node11removedFromERNS_13ContainerNodeE__wrapper,b5,__ZN7WebCore8Document34didAssociateFormControlsTimerFiredEPNS_5TimerIS0_EE
  ,b5,__ZN7WebCore8Document8postTaskEN3WTF10PassOwnPtrINS_22ScriptExecutionContext4TaskEEE,b5,__ZN7WebCore8Document31sharedObjectPoolClearTimerFiredEPNS_5TimerIS0_EE,b5,__ZN7WebCore4Node26didNotifySubtreeInsertionsEPNS_13ContainerNodeE,b5,__ZThn88_N7WebCore8Document23suspendActiveDOMObjectsENS_15ActiveDOMObject19ReasonForSuspensionE,b5,__ZN7WebCore4Node43notifyLoadedSheetAndAllCriticalSubresourcesEb,b5,__ZN7WebCore8Document11disableEvalERKN3WTF6StringE,b5,__ZN7WebCore8Document39scriptedAnimationControllerSetThrottledEb,b5,__ZN7WebCore8Document22pendingTasksTimerFiredEPNS_5TimerIS0_EE,b5,vii___ZN7WebCore4Node20didMoveToNewDocumentEPNS_8DocumentE__wrapper,b5,__ZN7WebCore8Document35optimizedStyleSheetUpdateTimerFiredEPNS_5TimerIS0_EE,b5,__ZN7WebCore8Document34visualUpdatesSuppressionTimerFiredEPNS_5TimerIS0_EE,b5,__ZNK7WebCore8Document7baseURIEv,b5,__ZThn88_N7WebCore8Document8postTaskEN3WTF10PassOwnPtrINS_22ScriptExecutionContext4TaskEEE,b5,__ZN7WebCore8Document28resetHiddenFocusElementTimerEPNS_5TimerIS0_EE,b5,__ZN7WebCore8Document31fullScreenChangeDelayTimerFiredEPNS_5TimerIS0_EE
  ,b5,__ZNK7WebCore8Document8nodeNameEv,b5,__ZN7WebCore8Document23suspendActiveDOMObjectsENS_15ActiveDOMObject19ReasonForSuspensionE,b5,vii___ZN7WebCore4Node19defaultEventHandlerEPNS_5EventE__wrapper,b5,__ZN7WebCore8Document22resumeActiveDOMObjectsENS_15ActiveDOMObject19ReasonForSuspensionE,b5,vii___ZNK7WebCore4Node9nodeValueEv__wrapper,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5
  ,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5
  ,b5,b5,b5,b5,b5,b5,b5,b5,b5];
  var FUNCTION_TABLE_ii = [b6,b6,__ZThn88_N7WebCore8Document16errorEventTargetEv,b6,ii___ZN7WebCore4Node15eventTargetDataEv__wrapper,b6,__ZN7WebCore8Document16errorEventTargetEv,b6,__ZThn88_NK7WebCore8Document9topOriginEv,b6,__ZNK7WebCore8Document3urlEv,b6,__ZNK7WebCore4Node19isFrameOwnerElementEv,b6,__ZNK7WebCore4Node20isInsertionPointNodeEv,b6,__ZNK7WebCore8Document23canContainRangeEndPointEv,b6,ii___ZNK7WebCore4Node18maxCharacterOffsetEv__wrapper,b6,__ZNK7WebCore15HashChangeEvent14eventInterfaceEv,b6,ii___ZNK7WebCore5Event12isTouchEventEv__wrapper,b6,__ZNK3JSC20StringSourceProvider6sourceEv,b6,ii___ZNK7WebCore4Node12namespaceURIEv__wrapper,b6,ii___ZNK7WebCore4Node18offsetInCharactersEv__wrapper
  ,b6,__ZNK7WebCore4Node22scriptExecutionContextEv,b6,__ZNK7WebCore8Document10isDocumentEv,b6,ii___ZNK7WebCore5Event9isUIEventEv__wrapper,b6,ii___ZNK7WebCore11EventTarget13isMessagePortEv__wrapper,b6,__ZThn88_NK7WebCore8Document10eventQueueEv,b6,ii___ZN7WebCore4Node24willRespondToTouchEventsEv__wrapper,b6,__ZNK7WebCore8Document10isFrameSetEv,b6,ii___ZNK7WebCore4Node17canStartSelectionEv__wrapper,b6,__ZThn88_NK7WebCore8Document15isContextThreadEv,b6,ii___ZNK7WebCore5Event15isKeyboardEventEv__wrapper,b6,__ZThn88_NK7WebCore8Document3urlEv,b6,ii___ZNK7WebCore4Node6prefixEv__wrapper,b6,__ZNK7WebCore4Node16nonRendererStyleEv,b6,__ZNK7WebCore4Node15isPluginElementEv,b6,ii___ZNK7WebCore5Event25isBeforeTextInsertedEventEv__wrapper
  ,b6,__ZNK7WebCore8Document9topOriginEv,b6,__ZNK7WebCore8Document22isJSExecutionForbiddenEv,b6,ii___ZN7WebCore4Node29willRespondToMouseClickEventsEv__wrapper,b6,__ZNK7WebCore8Document10eventQueueEv,b6,ii___ZN7WebCore4Node14toInputElementEv__wrapper,b6,ii___ZNK7WebCore5Event11isDragEventEv__wrapper,b6,__ZNK7WebCore8Document8nodeTypeEv,b6,__ZNK7WebCore5Event13relatedTargetEv,b6,ii___ZNK7WebCore5Event16isClipboardEventEv__wrapper,b6,ii___ZNK7WebCore4Node20eventTargetInterfaceEv__wrapper,b6,ii___ZNK7WebCore5Event19isBeforeUnloadEventEv__wrapper,b6,ii___ZN7WebCore4Node21ensureEventTargetDataEv__wrapper,b6,__ZN7WebCore4Node11sheetLoadedEv,b6,ii___ZNK7WebCore5Event12isMouseEventEv__wrapper,b6,ii___ZN7WebCore4Node29willRespondToMouseWheelEventsEv__wrapper
  ,b6,__ZNK7WebCore4Node14customPseudoIdEv,b6,__ZThn88_NK7WebCore8Document10isDocumentEv,b6,__ZNK7WebCore4Node21isMediaControlElementEv,b6,__ZThn88_NK7WebCore8Document22isJSExecutionForbiddenEv,b6,__ZNK7WebCore4Node19isCharacterDataNodeEv,b6,ii___ZN7WebCore4Node6toNodeEv__wrapper,b6,ii___ZNK7WebCore4Node9localNameEv__wrapper,b6,ii___ZN7WebCore4Node28willRespondToMouseMoveEventsEv__wrapper,b6,__ZNK7WebCore8Document15isContextThreadEv,b6,ii___ZNK7WebCore9TreeScope17applyAuthorStylesEv__wrapper,b6,__ZNK7WebCore4Node15isMediaControlsEv,b6,ii___ZN7WebCore11EventTarget11toDOMWindowEv__wrapper,b6,ii___ZNK7WebCore5Event12isFocusEventEv__wrapper,b6,__ZNK7WebCore4Node15isAttributeNodeEv,b6,__ZNK7WebCore5Event9clipboardEv
  ,b6,__ZNK7WebCore22ScriptExecutionContext19isWorkerGlobalScopeEv,b6,b6,b6,b6,b6,b6,b6];
  var FUNCTION_TABLE_iiii = [b7,b7];
  var FUNCTION_TABLE_viii = [b8,b8,__ZThn88_NK7WebCore8Document11completeURLERKN3WTF6StringE,b8,viii___ZN7WebCore4Node12setNodeValueERKN3WTF6StringERi__wrapper,b8,__ZN7WebCore8Document9cloneNodeEb,b8,__ZThn88_NK7WebCore8Document9userAgentERKNS_3URLE,b8,__ZNK7WebCore8Document9userAgentERKNS_3URLE,b8,viii___ZNK7WebCore5Event8cloneForEPNS_17HTMLIFrameElementE__wrapper,b8,__ZNK7WebCore8Document11completeURLERKN3WTF6StringE,b8,viii___ZN7WebCore4Node9setPrefixERKN3WTF12AtomicStringERi__wrapper,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8
  ,b8,b8,b8];
  var FUNCTION_TABLE_v = [b9,b9];
  var FUNCTION_TABLE_iiiii = [b10,b10,iiiii___ZN7WebCore4Node16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb__wrapper,b10,iiiii___ZN7WebCore4Node19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb__wrapper,b10,b10,b10];
  var FUNCTION_TABLE_viiiiiiiiii = [b11,b11,__ZN7WebCore8Document10addMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringES6_jjNS3_10PassRefPtrINS_15ScriptCallStackEEEPN3JSC9ExecStateEm,b11,__ZThn88_N7WebCore8Document10addMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringES6_jjNS3_10PassRefPtrINS_15ScriptCallStackEEEPN3JSC9ExecStateEm,b11,b11,b11];
  var FUNCTION_TABLE_iii = [b12,b12,iii___ZNK7WebCore14HTMLCollection9namedItemERKN3WTF12AtomicStringE__wrapper,b12,iii___ZN7WebCore4Node12insertedIntoERNS_13ContainerNodeE__wrapper,b12,iii___ZN7WebCore4Node13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE__wrapper,b12,__ZNK7WebCore14HTMLCollection18customElementAfterEPNS_7ElementE,b12,__ZNK7WebCore13ContainerNode25childShouldCreateRendererERKNS_4NodeE,b12,__ZNK7WebCore8Document16childTypeAllowedENS_4Node8NodeTypeE,b12,iii___ZN7WebCore4Node13computedStyleENS_8PseudoIdE__wrapper,b12];
  var FUNCTION_TABLE_viiii = [b13,b13,viiii___ZN7WebCore18setViewportFeatureERKN3WTF6StringES3_PNS_8DocumentEPv__wrapper,b13,__ZN7WebCore8Document13createElementERKN3WTF12AtomicStringERi,b13,b13,b13];
  return { _memmove: _memmove, _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_viiiiii: dynCall_viiiiii, dynCall_di: dynCall_di, dynCall_did: dynCall_did, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_iiii: dynCall_iiii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iiiii: dynCall_iiiii, dynCall_viiiiiiiiii: dynCall_viiiiiiiiii, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_viiiiii": invoke_viiiiii, "invoke_di": invoke_di, "invoke_did": invoke_did, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_iiii": invoke_iiii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iiiii": invoke_iiiii, "invoke_viiiiiiiiii": invoke_viiiiiiiiii, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "cttz_i8": cttz_i8, "ctlz_i8": ctlz_i8, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames6idAttrE": __ZN7WebCore9HTMLNames6idAttrE, "__ZN7WebCore9HTMLNames7linkTagE": __ZN7WebCore9HTMLNames7linkTagE, "__ZN3WTF8starAtomE": __ZN3WTF8starAtomE, "__ZN7WebCore10XMLNSNames17xmlnsNamespaceURIE": __ZN7WebCore10XMLNSNames17xmlnsNamespaceURIE, "__ZN7WebCore9HTMLNames9iframeTagE": __ZN7WebCore9HTMLNames9iframeTagE, "__ZN7WebCore9HTMLNames8titleTagE": __ZN7WebCore9HTMLNames8titleTagE, "__ZN7WebCore9HTMLNames19allowfullscreenAttrE": __ZN7WebCore9HTMLNames19allowfullscreenAttrE, "__ZN7WebCore9HTMLNames17xhtmlNamespaceURIE": __ZN7WebCore9HTMLNames17xhtmlNamespaceURIE, "__ZN7WebCore9HTMLNames25webkitallowfullscreenAttrE": __ZN7WebCore9HTMLNames25webkitallowfullscreenAttrE, "__ZN7WebCore9HTMLNames7headTagE": __ZN7WebCore9HTMLNames7headTagE, "__ZN7WebCore8SVGNames15svgNamespaceURIE": __ZN7WebCore8SVGNames15svgNamespaceURIE, "__ZN7WebCore17plugInsJavaScriptE": __ZN7WebCore17plugInsJavaScriptE, "__ZN3WTF9xmlnsAtomE": __ZN3WTF9xmlnsAtomE, "__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE": __ZN7WebCore24InspectorInstrumentation17s_frontendCounterE, "__ZN7WebCore9HTMLNames4aTagE": __ZN7WebCore9HTMLNames4aTagE, "__ZN7WebCore37WidgetHierarchyUpdatesSuspensionScope35s_widgetHierarchyUpdateSuspendCountE": __ZN7WebCore37WidgetHierarchyUpdatesSuspensionScope35s_widgetHierarchyUpdateSuspendCountE, "__ZN7WebCore8SVGNames6svgTagE": __ZN7WebCore8SVGNames6svgTagE, "__ZN7WebCore9HTMLNames11framesetTagE": __ZN7WebCore9HTMLNames11framesetTagE, "__ZN7WebCore9HTMLNames10targetAttrE": __ZN7WebCore9HTMLNames10targetAttrE, "__ZTVN7WebCore22ScriptExecutionContext21AddConsoleMessageTaskE": __ZTVN7WebCore22ScriptExecutionContext21AddConsoleMessageTaskE, "__ZN7WebCore9HTMLNames13accesskeyAttrE": __ZN7WebCore9HTMLNames13accesskeyAttrE, "__ZN7WebCore9HTMLNames7htmlTagE": __ZN7WebCore9HTMLNames7htmlTagE, "__ZN7WebCore17InspectorCounters10s_countersE": __ZN7WebCore17InspectorCounters10s_countersE, "__ZN7WebCore9HTMLNames12manifestAttrE": __ZN7WebCore9HTMLNames12manifestAttrE, "__ZN7WebCore9HTMLNames7bodyTagE": __ZN7WebCore9HTMLNames7bodyTagE, "__ZN3WTF8nullAtomE": __ZN3WTF8nullAtomE, "__ZN7WebCore9HTMLNames7baseTagE": __ZN7WebCore9HTMLNames7baseTagE, "__ZTVN7WebCore4NodeE": __ZTVN7WebCore4NodeE, "__ZN7WebCore9HTMLNames12seamlessAttrE": __ZN7WebCore9HTMLNames12seamlessAttrE, "__ZN3WTF10StringImpl19latin1CaseFoldTableE": __ZN3WTF10StringImpl19latin1CaseFoldTableE, "__ZN7WebCore8XMLNames15xmlNamespaceURIE": __ZN7WebCore8XMLNames15xmlNamespaceURIE, "__ZN7WebCore11MathMLNames18mathmlNamespaceURIE": __ZN7WebCore11MathMLNames18mathmlNamespaceURIE, "__ZN3WTF7xmlAtomE": __ZN3WTF7xmlAtomE, "__ZN7WebCore9HTMLNames8hrefAttrE": __ZN7WebCore9HTMLNames8hrefAttrE }, buffer);
var _memmove = Module["_memmove"] = asm["_memmove"];
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_viiiiii = Module["dynCall_viiiiii"] = asm["dynCall_viiiiii"];
var dynCall_di = Module["dynCall_di"] = asm["dynCall_di"];
var dynCall_did = Module["dynCall_did"] = asm["dynCall_did"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iiiii = Module["dynCall_iiiii"] = asm["dynCall_iiiii"];
var dynCall_viiiiiiiiii = Module["dynCall_viiiiiiiiii"] = asm["dynCall_viiiiiiiiii"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
var dynCall_viiii = Module["dynCall_viiii"] = asm["dynCall_viiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore8Document21cloneDataFromDocumentERKS0_","__ZN7WebCore8Document14implementationEv","__ZN7WebCore8Document29parseDNSPrefetchControlHeaderERKN3WTF6StringE","__ZNK7WebCore8Document28cloneDocumentWithoutChildrenEv","__ZNK7WebCore5Event13relatedTargetEv","__ZN7WebCore8Document16processArgumentsERKN3WTF6StringEPvPFvS4_S4_PS0_S5_E","__ZN3WTF14deleteOwnedPtrIN7WebCore18SelectorQueryCacheEEEvPT_","__ZN7WebCore8Document13createElementERKNS_13QualifiedNameEb","__ZN7WebCore8Document18detachNodeIteratorEPNS_12NodeIteratorE","__ZN7WebCore8Document15initDNSPrefetchEv","__ZN7WebCore8Document5formsEv","__ZN7WebCore8Document22setAnimatingFullScreenEb","__ZN7WebCore8Document32clearScriptedAnimationControllerEv","__ZN7WebCore8Document19updateStyleIfNeededEv","__ZN7WebCore8Document12setCSSTargetEPNS_7ElementE","__ZN7WebCore8Document18setContentLanguageERKN3WTF6StringE","__ZN7WebCore8Document20resumeScheduledTasksENS_15ActiveDOMObject19ReasonForSuspensionE","__ZN7WebCore8Document8evaluateERKN3WTF6StringEPNS_4NodeEPNS_15XPathNSResolverEtPNS_11XPathResultERi","__ZN7WebCore8Document12textInsertedEPNS_4NodeEjj","__ZN7WebCore8Document26decrementActiveParserCountEv","__ZN7WebCore8Document13createCommentERKN3WTF6StringE","__ZN7WebCore8Document21shouldCreateRenderersEv","__ZNK7WebCore8Document23webkitFullscreenEnabledEv","__ZN7WebCore8Document11textRemovedEPNS_4NodeEjj","__ZThn88_N7WebCore8Document21logExceptionToConsoleERKN3WTF6StringES4_iiNS1_10PassRefPtrINS_15ScriptCallStackEEE","__ZN7WebCore16ScriptSourceCodeC2ERKN3WTF6StringERKNS_3URLERKNS1_12TextPositionE","__ZN7WebCore8Document24loadEventDelayTimerFiredEPNS_5TimerIS0_EE","__ZN7WebCore8Document25createCSSStyleDeclarationEv","__ZN7WebCore8Document10setContentERKN3WTF6StringE","__ZN7WebCore8Document12createParserEv","__ZN7WebCore8Document10importNodeEPNS_4NodeEbRi","__ZN7WebCore8Document18unregisterNodeListERNS_12LiveNodeListE","__ZN7WebCore5TimerINS_8DocumentEE5firedEv","__ZN7WebCore13AXObjectCacheD2Ev","__ZN7WebCore8Document26removeFocusedNodeOfSubtreeEPNS_4NodeEb","__ZN7WebCore8Document19isLayoutTimerActiveEv","__ZN7WebCore8Document28resetHiddenFocusElementTimerEPNS_5TimerIS0_EE","__ZN7WebCore8Document11execCommandERKN3WTF6StringEbS4_","__ZN7WebCore8Document5linksEv","__ZN7WebCore8Document20enqueueOverflowEventEN3WTF10PassRefPtrINS_5EventEEE","__ZN7WebCore8Document9setCookieERKN3WTF6StringERi","__ZN7WebCore8Document21prepareForDestructionEv","__ZThn88_NK7WebCore8Document22timerAlignmentIntervalEv","__ZN7WebCore8Document12dropChildrenEv","__ZN7WebCore8Document27removeMediaCanStartListenerEPNS_21MediaCanStartListenerE","__ZNK7WebCore8Document6loaderEv","__ZN7WebCore8Document18createCDATASectionERKN3WTF6StringERi","__ZN7WebCore8Document43suspendScriptedAnimationControllerCallbacksEv","__ZN7WebCore8Document23removeAllEventListenersEv","__ZNK7WebCore8Document10isDocumentEv","__ZN7WebCore8Document11canNavigateEPNS_5FrameE","__ZN3WTF6VectorIN7WebCore20AnnotatedRegionValueELj0ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN7WebCore8Document15setIsViewSourceEb","__ZN3WTF9HashTableIPN7WebCore12LiveNodeListES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_","__ZNK7WebCore8Document33shouldDisplaySeamlesslyWithParentEv","__ZN7WebCore8Document24setShouldCreateRenderersEb","__ZN7WebCore11RenderStyleD2Ev","__ZN7WebCore8Document16shortcutIconURLsEv","__ZN7WebCore8Document14createTextNodeERKN3WTF6StringE","__ZThn88_N7WebCore8Document10addMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringES6_jjNS3_10PassRefPtrINS_15ScriptCallStackEEEPN3JSC9ExecStateEm","__ZN7WebCore8Document18selectorQueryCacheEv","__ZThn88_NK7WebCore8Document10eventQueueEv","__ZNK7WebCore8Document7baseURIEv","__ZNK7WebCore8Document46notifySeamlessChildDocumentsOfStylesheetUpdateEv","__ZN7WebCore8Document41findUnsafeParentScrollPropagationBoundaryEv","__ZN7WebCore8Document14formControllerEv","__ZNK7WebCore8Document10isFrameSetEv","__ZN3WTF6VectorINS_6RefPtrIN7WebCore17HTMLScriptElementEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore4Node43notifyLoadedSheetAndAllCriticalSubresourcesEb","__ZN7WebCore8Document16createTreeWalkerEPNS_4NodeEjN3WTF10PassRefPtrINS_10NodeFilterEEEbRi","__ZN7WebCore8Document11disableEvalERKN3WTF6StringE","__ZNK7WebCore8Document21selectedStylesheetSetEv","__ZNK7WebCore8Document21isAnimatingFullScreenEv","__ZN7WebCore8Document16registerNodeListERNS_12LiveNodeListE","__ZNK7WebCore8Document21hasPendingStyleRecalcEv","__ZN7WebCore8Document18enqueueWindowEventEN3WTF10PassRefPtrINS_5EventEEE","__ZN7WebCore8Document23updateViewportArgumentsEv","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore17HTMLCanvasElementEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_","__ZThn88_NK7WebCore8Document9userAgentERKNS_3URLE","__ZN7WebCore8Document13textNodeSplitEPNS_4TextE","__ZN3WTF12StringAppendINS0_INS0_INS0_IPKcNS_6StringEEES2_EES3_EES2_E7writeToEPh","__ZN3WTF15CaseFoldingHash4hashERNS_10StringImplE","__ZN7WebCore8Document13updateBaseURLEv","__ZN7WebCore22DeferrableOneShotTimerINS_8DocumentEED0Ev","__ZN7WebCore8Document4headEv","__ZN3WTF9HashTableINSt3__14pairIhNS_12AtomicStringEEENS_12KeyValuePairIS4_PN7WebCore14HTMLCollectionEEENS_24KeyValuePairKeyExtractorIS9_EENS6_17NodeListsNodeData25NodeListCacheMapEntryHashIS3_EENS_7HashMapIS4_S8_SE_NS_10HashTraitsIS4_EENSG_IS8_EEE18KeyValuePairTraitsESH_E6rehashEiPS9_","__ZN7WebCore8Document11statePoppedEN3WTF10PassRefPtrINS_21SerializedScriptValueEEE","__ZN7WebCore8Document23didAddWheelEventHandlerEv","__ZNK7WebCore8Document24cssStickyPositionEnabledEv","__ZN7WebCore8Document24addMediaCanStartListenerEPNS_21MediaCanStartListenerE","__ZN7WebCore8Document35optimizedStyleSheetUpdateTimerFiredEPNS_5TimerIS0_EE","__ZThn88_N7WebCore8DocumentD0Ev","__ZN7WebCore8Document34visualUpdatesSuppressionTimerFiredEPNS_5TimerIS0_EE","__ZN7WebCore8Document27createProcessingInstructionERKN3WTF6StringES4_Ri","__ZN7WebCore8Document20unregisterCollectionERNS_14HTMLCollectionE","__ZN7WebCore8Document25refScriptExecutionContextEv","__ZN7WebCore8Document42resumeScriptedAnimationControllerCallbacksEv","__ZN7WebCore8Document20resetActiveLinkColorEv","__ZN3WTF9HashTableIPN7WebCore5RangeES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_","__ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv","__ZN7WebCore8Document23dispatchWindowLoadEventEv","__ZN7WebCore8Document22evaluateMediaQueryListEv","__ZNK7WebCore8Document10compatModeEv","__ZN7WebCore4Node11sheetLoadedEv","__ZN7WebCore8Document25initContentSecurityPolicyEv","__ZN7WebCore8Document6imagesEv","__ZN7WebCore8Document13cancelParsingEv","__ZN7WebCore8Document34webkitWillExitFullScreenForElementEPNS_7ElementE","__ZN3WTF5DequeIN7WebCore18SegmentedSubstringELj0EE10destroyAllEv","__ZN7WebCore8Document28decrementLoadEventDelayCountEv","__ZN7WebCore8Document22pendingTasksTimerFiredEPNS_5TimerIS0_EE","__ZNK7WebCore8Document17formElementsStateEv","__ZNK7WebCore8Document8encodingEv","__ZN7WebCore8Document9setDomainERKN3WTF6StringERi","__ZN7WebCore8Document21logExceptionToConsoleERKN3WTF6StringES4_iiNS1_10PassRefPtrINS_15ScriptCallStackEEE","__ZN7WebCore8Document15textNodesMergedEPNS_4TextEj","__ZNK7WebCore8Document22timerAlignmentIntervalEv","__ZN3WTF7HashSetIPN7WebCore14HTMLCollectionENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_","__ZThn88_N7WebCore8Document20stopActiveDOMObjectsEv","__ZN7WebCore8Document25nodeChildrenWillBeRemovedERNS_13ContainerNodeE","__ZN7WebCore28DocumentStyleSheetCollectionD2Ev","__ZN7WebCore8Document20queryCommandIndetermERKN3WTF6StringE","__ZNK7WebCore8Document27hasPendingForcedStyleRecalcEv","__ZN7WebCore8Document47registerForPrivateBrowsingStateChangedCallbacksEPNS_7ElementE","__ZN7WebCore8Document17mediaQueryMatcherEv","__ZN3WTF9HashTableIPN7WebCore12NodeIteratorES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_","__ZN7WebCore8Document26pushFullscreenElementStackEPNS_7ElementE","__ZN3WTF9HashTableIPNS_10StringImplENS_12KeyValuePairIS2_PN7WebCore7ElementEEENS_24KeyValuePairKeyExtractorIS7_EENS_15CaseFoldingHashENS_7HashMapIS2_S6_SA_NS_10HashTraitsIS2_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6expandEPS7_","__ZN7WebCore8Document21createEditingTextNodeERKN3WTF6StringE","__ZN7WebCore8Document20shouldScheduleLayoutEv","__ZN7WebCore8Document22enqueueHashchangeEventERKN3WTF6StringES4_","__ZN7WebCore10TreeWalker6createEN3WTF10PassRefPtrINS_4NodeEEEjNS2_INS_10NodeFilterEEEb","__ZN7WebCore8Document20enqueueDocumentEventEN3WTF10PassRefPtrINS_5EventEEE","__ZN7WebCore8Document19scheduleStyleRecalcEv","__ZN7WebCore8Document33webkitDidExitFullScreenForElementEPNS_7ElementE","__ZNK7WebCore8Document6cookieERi","__ZThn88_NK7WebCore8Document15isContextThreadEv","__ZN7WebCore8Document14setDocumentURIERKN3WTF6StringE","__ZN7WebCore8DocumentD0Ev","__ZN7WebCore8Document17buildAccessKeyMapEPNS_9TreeScopeE","__ZNK7WebCore8Document39displayBufferModifiedByEncodingInternalIhEEvPT_j","__ZNK3WTF12StringAppendINS0_INS0_INS0_INS0_INS0_IPKcNS_6StringEEES2_EES3_EES2_EES2_EES2_EcvS3_Ev","__ZN7WebCore8Document32styleResolverThrowawayTimerFiredEPNS_22DeferrableOneShotTimerIS0_EE","__ZN3WTF12StringAppendINS0_INS0_INS0_INS0_IPKcNS_6StringEEES2_EES3_EES2_EES2_E7writeToEPt","__ZN7WebCore8Document22ensureCachedCollectionENS_14CollectionTypeE","__ZN7WebCore8Document22invalidateAccessKeyMapEv","__ZN7WebCore8Document31updateFocusAppearanceTimerFiredEPNS_5TimerIS0_EE","__ZN3WTF9HashTableINS_6RefPtrIN7WebCore7ElementEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6rehashEiPS4_","__ZN3WTF5DequeINS_6RefPtrIN7WebCore4NodeEEELj0EE14expandCapacityEv","__ZNK7WebCore8Document7doctypeEv","__ZNK7WebCore8Document20seamlessParentIFrameEv","__ZNK7WebCore8Document8referrerEv","__ZThn88_NK7WebCore8Document9topOriginEv","__ZN7WebCore8Document29didRemoveAllPendingStylesheetEv","__ZN7WebCore8Document8setTitleERKN3WTF6StringE","__ZN7WebCore22DocumentNameCollectionD0Ev","__ZNK7WebCore8Document3urlEv","__ZN3WTF13tryMakeStringINS_12StringAppendINS1_INS1_INS1_INS1_IPKcNS_6StringEEES3_EES4_EES3_EES3_EES3_EENS_10PassRefPtrINS_10StringImplEEET_T0_","__ZN7WebCore8Document21createEntityReferenceERKN3WTF6StringERi","__ZN3WTF9HashTableIPN7WebCore14HTMLCollectionES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_","__ZN7WebCore8Document11attachRangeEPNS_5RangeE","__ZN7WebCore5TimerINS_8DocumentEED0Ev","__ZN7WebCore8Document33scheduleOptimizedStyleSheetUpdateEv","__ZN7WebCore8Document21unscheduleStyleRecalcEv","__ZN7WebCore8Document23didAddTouchEventHandlerEPNS_4NodeE","__ZN7WebCore17StyleSurroundDataD2Ev","__ZN7WebCore8Document28hasValidNamespaceForElementsERKNS_13QualifiedNameE","__ZN7WebCore8Document7anchorsEv","__ZN7WebCore8Document27resetHiddenFocusElementSoonEv","__ZN7WebCore8Document7scriptsEv","__ZNK7WebCore15HashChangeEvent14eventInterfaceEv","__ZN7WebCoreL17canAccessAncestorEPKNS_14SecurityOriginEPNS_5FrameE","__ZN7WebCore8Document13createElementERKN3WTF12AtomicStringERi","__ZNK7WebCore8Document15visibilityStateEv","__ZThn44_N7WebCore8DocumentD1Ev","__ZN7WebCore8Document11updateTitleERKNS_19StringWithDirectionE","__ZN7WebCore12StyleBoxDataD2Ev","__ZThn88_N7WebCore8Document27derefScriptExecutionContextEv","__ZN7WebCore8Document32seamlessParentUpdatedStylesheetsEv","__ZN7WebCore8Document17pushCurrentScriptEN3WTF10PassRefPtrINS_17HTMLScriptElementEEE","__ZN7WebCore22DeferrableOneShotTimerINS_8DocumentEE5firedEv","__ZN7WebCore8Document8postTaskEN3WTF10PassOwnPtrINS_22ScriptExecutionContext4TaskEEE","__ZN7WebCore8Document9cloneNodeEb","__ZN7WebCore8Document4openEPS0_","__ZN7WebCore22DocumentNameCollectionD1Ev","__ZN7WebCore8Document19queryCommandEnabledERKN3WTF6StringE","__ZN7WebCore8Document26documentWillBecomeInactiveEv","__ZN3WTF9HashTableIPN7WebCore14HTMLCollectionES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_","__ZNK7WebCore8Document4viewEv","__ZNK7WebCore8Document11topDocumentEv","__ZN7WebCore8Document7writelnERKN3WTF6StringEPS0_","__ZN3WTF12StringAppendINS0_INS0_IPKcNS_6StringEEES2_EES3_E7writeToEPt","__ZN7WebCore8Document19webkitGetNamedFlowsEv","__ZN3WTF9HashTableIPN7WebCore7ElementES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_","__ZN7WebCore8Document16createRenderTreeEv","__ZN7WebCore17NodeListsNodeDataD2Ev","__ZNK7WebCore8Document21existingAXObjectCacheEv","__ZN7WebCore8Document20enqueuePopstateEventEN3WTF10PassRefPtrINS_21SerializedScriptValueEEE","__ZN3WTF7HashSetIPN7WebCore12LiveNodeListENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_","__ZNK3WTF12StringAppendINS0_INS0_INS0_IPKcNS_6StringEEES2_EES3_EES2_EcvS3_Ev","__ZNK3JSC20StringSourceProvider6sourceEv","__ZNK7WebCore8Document12inDesignModeEv","__ZN3WTF9HashTableIPN7WebCore12LiveNodeListES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_","__ZN7WebCore8Document31getWindowAttributeEventListenerERKN3WTF12AtomicStringE","__ZNK7WebCore8Document12ownerElementEv","__ZN7WebCore8Document27derefScriptExecutionContextEv","__ZN7WebCore8Document31setWindowAttributeEventListenerERKN3WTF12AtomicStringERKNS_13QualifiedNameES4_","__ZN7WebCore8Document17destroyRenderTreeEv","__ZN7WebCore8Document22updateHoverActiveStateERKNS_14HitTestRequestEPNS_7ElementEPKNS_18PlatformMouseEventENS_23StyleResolverUpdateFlagE","__ZN7WebCore8Document7appletsEv","__ZNK7WebCore8Document22isJSExecutionForbiddenEv","__ZThn44_N7WebCore8Document12dropChildrenEv","__ZN7WebCore8Document15hasActiveParserEv","__ZN7WebCore8Document16processHttpEquivERKN3WTF6StringES4_","__ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv","__ZNK7WebCore8Document20cssGridLayoutEnabledEv","__ZNK7WebCore8Document4bodyEv","__ZNK7WebCore8Document14parentDocumentEv","__ZThn88_N7WebCore8Document8postTaskEN3WTF10PassOwnPtrINS_22ScriptExecutionContext4TaskEEE","__ZNK7WebCore8Document11completeURLERKN3WTF6StringE","__ZN7WebCore8Document26pageSizeAndMarginsInPixelsEiRNS_7IntSizeERiS3_S3_S3_","__ZN3WTF9HashTableIPN7WebCore5RangeES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_","__ZN7WebCore8Document42registerForVisibilityStateChangedCallbacksEPNS_7ElementE","__ZN7WebCore8Document5writeERKN3WTF6StringEPS0_","__ZN7WebCore8Document20webkitExitFullscreenEv","__ZN7WebCore15HashChangeEventD1Ev","__ZN7WebCore8Document20styleResolverChangedENS_23StyleResolverUpdateFlagE","__ZN7WebCore8Document10addIconURLERKN3WTF6StringES4_S4_NS_8IconTypeE","__ZNK7WebCore8Document25regionBasedColumnsEnabledEv","__ZN3WTF7HashSetIPN7WebCore21MediaCanStartListenerENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_","__ZNK7WebCore8Document8nodeNameEv","__ZN3WTF6VectorIN7WebCore7IconURLELj0ENS_15CrashOnOverflowEE14appendSlowCaseIRS2_EEvOT_","__ZNK7WebCore8Document31displayStringModifiedByEncodingERKN3WTF6StringE","__ZNK7WebCore9TimerBase15alignedFireTimeEd","__ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6OwnPtrIN7WebCore6LocaleEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_16AtomicStringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_","__ZN3WTFplINS_12StringAppendINS1_INS1_INS1_IPKcNS_6StringEEES3_EES4_EES3_EES3_S3_EENS1_INS1_IT_T0_EET1_EERKSB_SC_","__ZNK7WebCore4Node19isCharacterDataNodeEv","__ZNK7WebCore8Document39displayBufferModifiedByEncodingInternalItEEvPT_j","__ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6OwnPtrIN7WebCore6LocaleEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_16AtomicStringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E8reinsertEOS7_","__ZN7WebCore8Document17takeDOMWindowFromEPS0_","__ZN7WebCore8Document17nodeWillBeRemovedEPNS_4NodeE","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZNK7WebCore8Document30imageElementByLowercasedUsemapERKN3WTF16AtomicStringImplE","__ZN7WebCore8Document34didAssociateFormControlsTimerFiredEPNS_5TimerIS0_EE","__ZN7WebCore8Document31didBecomeCurrentDocumentInFrameEv","__ZN7WebCore8Document21getElementByAccessKeyERKN3WTF6StringE","__ZN7WebCore8Document19getCSSCanvasElementERKN3WTF6StringE","__ZN7WebCore8Document23didAssociateFormControlEPNS_7ElementE","__ZN7WebCore8Document17setFocusedElementEN3WTF10PassRefPtrINS_7ElementEEENS_14FocusDirectionE","__ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6OwnPtrIN7WebCore6LocaleEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_16AtomicStringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6rehashEiPS7_","_memmove","__ZN7WebCore8Document31documentWillSuspendForPageCacheEv","__ZThn88_NK7WebCore8Document10isDocumentEv","__ZN7WebCore8Document19disconnectFromFrameEv","__ZNK7WebCore5Event9clipboardEv","__ZN3WTF6VectorIN7WebCore7IconURLELj0ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN7WebCore15HashChangeEventD0Ev","__ZN3WTF9HashTableIPN7WebCore21MediaCanStartListenerES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_","__ZN3WTF9HashTableIPN7WebCore7ElementES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_","_strlen","__ZNK7WebCore8Document4pageEv","__ZN7WebCore8Document41styleForElementIgnoringPendingStylesheetsEPNS_7ElementE","__ZThn88_N7WebCore8Document16errorEventTargetEv","__ZN7WebCore8Document21queryCommandSupportedERKN3WTF6StringE","__ZNK7WebCore8Document8settingsEv","__ZN7WebCore8Document23addListenerTypeIfNeededERKN3WTF12AtomicStringE","__ZNK7WebCore8Document19pageVisibilityStateEv","__ZN7WebCore8Document39registerForPageCacheSuspensionCallbacksEPNS_7ElementE","__ZN7WebCoreL29wheelEventHandlerCountChangedEPNS_8DocumentE","__ZN7WebCore8Document41unregisterForPageCacheSuspensionCallbacksEPNS_7ElementE","__ZN7WebCore8Document16isPageBoxVisibleEi","__ZN7WebCore8Document31registerForMediaVolumeCallbacksEPNS_7ElementE","__ZNK7WebCore8Document16annotatedRegionsEv","__ZN7WebCore8Document33unregisterForMediaVolumeCallbacksEPNS_7ElementE","__ZN3WTF6VectorIN7WebCore7IconURLELj0ENS_15CrashOnOverflowEE6shrinkEj","__ZN3WTF9HashTableINS_6RefPtrIN7WebCore7ElementEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E8reinsertEOS4_","__ZN7WebCore8Document11removeTitleEPNS_7ElementE","__ZN7WebCore8Document15processViewportERKN3WTF6StringENS_17ViewportArguments4TypeE","__ZN3WTF7HashSetIPN7WebCore5RangeENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_","__ZN7WebCore8Document27clearFullscreenElementStackEv","__ZN7WebCore8Document12detachParserEv","__ZN7WebCore8Document19initSecurityContextEv","__ZN7WebCore10BorderDataD2Ev","__ZN7WebCore8Document7pluginsEv","__ZN7WebCore8Document53adjustFloatQuadsForScrollAndAbsoluteZoomAndFrameScaleERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEERKNS_11RenderStyleE","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore17HTMLCanvasElementEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6expandEPS7_","__ZN7WebCore8Document21styleRecalcTimerFiredEPNS_5TimerIS0_EE","__ZN7WebCore8Document10addMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringES6_jjNS3_10PassRefPtrINS_15ScriptCallStackEEEPN3JSC9ExecStateEm","__ZN7WebCore8Document28takeAnyMediaCanStartListenerEv","__ZN7WebCore8Document25updateFocusAppearanceSoonEb","__ZThn88_N7WebCore8Document25refScriptExecutionContextEv","__ZN7WebCore8Document10namedFlowsEv","__ZN7WebCore8Document34webkitDidEnterFullScreenForElementEPNS_7ElementE","__ZThn88_NK7WebCore8Document3urlEv","__ZN7WebCore8Document15childrenChangedERKNS_13ContainerNode11ChildChangeE","__ZN7WebCore22DeferrableOneShotTimerINS_8DocumentEED1Ev","__ZN7WebCore8Document15setTitleElementERKNS_19StringWithDirectionEPNS_7ElementE","__ZN7WebCore8Document32updateRangesAfterChildrenChangedERNS_13ContainerNodeE","__ZN7WebCore8Document14resetLinkColorEv","__ZN7WebCore8Document17prepareMouseEventERKNS_14HitTestRequestERKNS_11LayoutPointERKNS_18PlatformMouseEventE","__ZN7WebCore8Document15finishedParsingEv","__ZNK7WebCore8Document29fullScreenIsAllowedForElementEPNS_7ElementE","__ZNK7WebCore4Node22scriptExecutionContextEv","__ZN7WebCore8Document18processBaseElementEv","__ZN7WebCore8Document21requestAnimationFrameEN3WTF10PassRefPtrINS_29RequestAnimationFrameCallbackEEE","__ZN7WebCore8Document18registerCollectionERNS_14HTMLCollectionE","__ZN7WebCore8Document13svgExtensionsEv","__ZN7WebCore4Node20beginParsingChildrenEv","__ZN7WebCore8Document39addDocumentToFullScreenChangeEventQueueEPS0_","__ZN7WebCore8Document13explicitCloseEv","__ZN7WebCore5TimerINS_8DocumentEED1Ev","__ZN7WebCore8Document24setSelectedStylesheetSetERKN3WTF6StringE","__ZN3WTF9HashTableIPN7WebCore12NodeIteratorES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_","__ZN7WebCore8Document15createDOMWindowEv","__ZThn88_N7WebCore8Document23suspendActiveDOMObjectsENS_15ActiveDOMObject19ReasonForSuspensionE","__ZNK7WebCore8Document6domainEv","__ZN7WebCore8Document26setStateForNewFormElementsERKN3WTF6VectorINS1_6StringELj0ENS1_15CrashOnOverflowEEE","__ZN7WebCore8Document17applyXSLTransformEPNS_21ProcessingInstructionE","__ZN7WebCore8Document39scriptedAnimationControllerSetThrottledEb","__ZN7WebCore8Document10setDecoderEN3WTF10PassRefPtrINS_19TextResourceDecoderEEE","__ZN3WTF13tryMakeStringINS_12StringAppendINS1_INS1_IPKcNS_6StringEEES3_EES4_EES3_EENS_10PassRefPtrINS_10StringImplEEET_T0_","__ZN7WebCore8Document27cancelFocusAppearanceUpdateEv","__ZNK7WebCore8Document9userAgentERKNS_3URLE","__ZN7WebCore17NodeListsNodeData19addCachedCollectionINS_20WindowNameCollectionENS_8DocumentEEEN3WTF10PassRefPtrIT_EERT0_NS_14CollectionTypeERKNS4_12AtomicStringE","__ZNK7WebCore4Node15isPluginElementEv","__ZNK7WebCore13ContainerNode25childShouldCreateRendererERKNS_4NodeE","__ZN7WebCore4Node24startLoadingDynamicSheetEv","__ZNK7WebCore8Document10readyStateEv","__ZN7WebCore8Document44unregisterForVisibilityStateChangedCallbacksEPNS_7ElementE","__ZNK7WebCore8Document9topOriginEv","__ZN7WebCore8Document20stopActiveDOMObjectsEv","_memcpy","__ZN7WebCore8Document5writeERKNS_15SegmentedStringEPS0_","__ZNK7WebCore8Document16elementFromPointEii","__ZN7WebCore8Document14setInPageCacheEb","__ZN7WebCore8Document17addConsoleMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringEm","__ZN7WebCore4Node26didNotifySubtreeInsertionsEPNS_13ContainerNodeE","__ZN7WebCore8Document14didReceiveTaskEPv","__ZN7WebCore8Document11recalcStyleENS_5Style6ChangeE","__ZN7WebCore8Document21suspendScheduledTasksENS_15ActiveDOMObject19ReasonForSuspensionE","__ZNK7WebCore8Document8nodeTypeEv","__ZN3WTF7HashSetIPN7WebCore12NodeIteratorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_","__ZN7WebCore4Node21finishParsingChildrenEv","__ZN7WebCore8Document22didAccessStyleResolverEv","__ZNK7WebCore8Document21cssCompositingEnabledEv","__ZN7WebCore8Document32removeFullScreenElementOfSubtreeEPNS_4NodeEb","__ZN7WebCore8Document37platformSuspendOrStopActiveDOMObjectsEv","__ZN7WebCore8Document18documentNamedItemsERKN3WTF12AtomicStringE","__ZN3WTF7CheckedIjNS_15CrashOnOverflowEEC1ENS_19ResultOverflowedTagE","__ZN7WebCore8Document36removeImageElementByLowercasedUsemapERKN3WTF16AtomicStringImplERNS_16HTMLImageElementE","__ZN7WebCore8Document11isValidNameERKN3WTF6StringE","__ZNK7WebCore14HTMLCollection18customElementAfterEPNS_7ElementE","__ZN7WebCore8Document27requestFullScreenForElementEPNS_7ElementEtNS0_19FullScreenCheckTypeE","__ZNK7WebCore8Document24scriptableDocumentParserEv","__ZN7WebCore8DocumentC2EPNS_5FrameERKNS_3URLEjj","__ZN7WebCore8Document18setTransformSourceEN3WTF10PassOwnPtrINS_15TransformSourceEEE","__ZN3WTF5DequeIPN7WebCore8DocumentELj0EE14expandCapacityEv","__ZN7WebCore8Document3allEv","__ZN7WebCore8Document31fullScreenChangeDelayTimerFiredEPNS_5TimerIS0_EE","__ZN7WebCore8Document20mediaVolumeDidChangeEv","__ZNK7WebCore8Document21haveStylesheetsLoadedEv","__ZN7WebCore8Document21setFullScreenRendererEPNS_16RenderFullScreenE","__ZN7WebCore8Document36resetLastHandledUserGestureTimestampEv","__ZN7WebCore8Document18attachNodeIteratorEPNS_12NodeIteratorE","__ZNK7WebCore8Document14defaultCharsetEv","__ZNK7WebCore4Node21isMediaControlElementEv","__ZN7WebCore8Document21resetVisitedLinkColorEv","__ZN7WebCore8Document20cancelAnimationFrameEi","__ZNK7WebCore8Document13getDesignModeEv","__ZThn88_N7WebCore8DocumentD1Ev","__ZN7WebCore8Document15getCachedLocaleERKN3WTF12AtomicStringE","__ZN7WebCore8Document18setVisuallyOrderedEv","__ZNK7WebCore4Node19isFrameOwnerElementEv","__ZNK7WebCore8Document17deviceScaleFactorEv","__ZN7WebCore8Document16getOverrideStyleEPNS_7ElementERKN3WTF6StringE","__ZN7WebCore8Document24fullScreenElementRemovedEv","__ZN7WebCore8Document23setVisualUpdatesAllowedEb","__ZNK7WebCore8Document13axObjectCacheEv","__ZN7WebCore8Document25popFullscreenElementStackEv","__ZNK7WebCore4Node15isMediaControlsEv","__ZN7WebCore8Document5closeEv","__ZNK7WebCore4Node15isAttributeNodeEv","__ZN7WebCore8Document22createDocumentFragmentEv","__ZN3WTF6VectorIN7WebCore7IconURLELj0ENS_15CrashOnOverflowEE7reverseEv","__ZNK7WebCore22ScriptExecutionContext19isWorkerGlobalScopeEv","__ZN7WebCore8Document25serviceScriptedAnimationsEd","__ZN7WebCore8Document52adjustFloatRectForScrollAndAbsoluteZoomAndFrameScaleERNS_9FloatRectERKNS_11RenderStyleE","__ZN7WebCore8Document16setXMLStandaloneEbRi","__ZN7WebCore8Document35webkitWillEnterFullScreenForElementEPNS_7ElementE","__ZNK7WebCore8Document20minimumTimerIntervalEv","__ZN7WebCore8Document18clearStyleResolverEv","__ZN7WebCore8Document15createAttributeERKN3WTF6StringERi","__ZN7WebCore8DocumentD2Ev","__ZN7WebCore8Document17queryCommandValueERKN3WTF6StringE","__ZN7WebCore8Document23hoveredElementDidDetachEPNS_7ElementE","__ZN3WTF9HashTableIPN7WebCore21MediaCanStartListenerES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_","__ZN7WebCore12NodeIterator6createEN3WTF10PassRefPtrINS_4NodeEEEjNS2_INS_10NodeFilterEEEb","__ZN3WTF12StringAppendINS0_IPKcNS_6StringEEES2_E7writeToEPt","__ZN7WebCore8Document10setCharsetERKN3WTF6StringE","__ZN7WebCore8Document25scheduleForcedStyleRecalcEv","__ZN7WebCore8Document29elementInActiveChainDidDetachEPNS_7ElementE","__ZN3WTF12StringAppendINS0_IPKcNS_6StringEEES2_E7writeToEPh","__ZN7WebCore8Document16errorEventTargetEv","__ZThn44_N7WebCore8DocumentD0Ev","__ZThn88_NK7WebCore8Document11completeURLERKN3WTF6StringE","__ZNK7WebCore4Node14customPseudoIdEv","__ZN7WebCore8Document15canReplaceChildEPNS_4NodeES2_","__ZN7WebCore8Document21processReferrerPolicyERKN3WTF6StringE","__ZN7WebCore8Document22ensureTemplateDocumentEv","__ZN7WebCore29eventTargetElementForDocumentEPNS_8DocumentE","__ZN7WebCore8Document19getCSSCanvasContextERKN3WTF6StringES4_ii","__ZThn88_N7WebCore8Document11disableEvalERKN3WTF6StringE","__ZN7WebCore8Document19dispatchWindowEventEN3WTF10PassRefPtrINS_5EventEEENS2_INS_11EventTargetEEE","__ZN7WebCore8Document21windowScreenDidChangeEj","__ZN7WebCoreL27printNavigationErrorMessageEPNS_5FrameERKNS_3URLEPKc","__ZNK7WebCore4Node27addSubresourceAttributeURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEE","__ZNK7WebCore8Document17cssRegionsEnabledEv","__ZN7WebCore8Document30documentDidResumeFromPageCacheEv","__ZN7WebCore8Document15createElementNSERKN3WTF6StringES4_Ri","__ZNK7WebCore4Node20isInsertionPointNodeEv","__ZN7WebCore8Document22webkitCancelFullScreenEv","__ZN7WebCore8Document18clearAXObjectCacheEv","__ZN7WebCore8Document10setParsingEb","__ZNK7WebCore8Document6hiddenEv","__ZThn88_N7WebCore8Document22resumeActiveDOMObjectsENS_15ActiveDOMObject19ReasonForSuspensionE","__ZN3WTF6VectorIN7WebCore20AnnotatedRegionValueELj0ENS_15CrashOnOverflowEEaSERKS4_","__ZN7WebCore8Document13setXMLVersionERKN3WTF6StringERi","__ZN7WebCore8Document11detachRangeEPNS_5RangeE","__ZN7WebCore8Document17queryCommandStateERKN3WTF6StringE","__ZN3WTF9HashTableINS_6RefPtrIN7WebCore7ElementEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_","__ZN7WebCore8Document18setBaseURLOverrideERKNS_3URLE","__ZN7WebCore8Document19setAnnotatedRegionsERKN3WTF6VectorINS_20AnnotatedRegionValueELj0ENS1_15CrashOnOverflowEEE","__ZN3WTF6VectorINS_6OwnPtrIN7WebCore22ScriptExecutionContext4TaskEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZThn88_N7WebCore8Document17addConsoleMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringEm","__ZN7WebCore8Document17createAttributeNSERKN3WTF6StringES4_Rib","__ZNK7WebCore8Document17suggestedMIMETypeEv","__ZN7WebCore8Document16windowNamedItemsERKN3WTF12AtomicStringE","__ZN7WebCore8Document11styleSheetsEv","__ZN7WebCore8Document12implicitOpenEv","__ZN3WTF6VectorINS_6RefPtrIN7WebCore7ElementEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN3WTF11VectorMoverILb0EN7WebCore7IconURLEE4moveEPS2_S4_S4_","__ZN7WebCore8Document13setDesignModeENS0_13InheritedBoolE","__ZN7WebCore8Document7setBodyEN3WTF10PassRefPtrINS_11HTMLElementEEERi","__ZN3WTF5DequeINS_6RefPtrIN7WebCore4NodeEEELj0EE10destroyAllEv","__ZN7WebCore8Document31sharedObjectPoolClearTimerFiredEPNS_5TimerIS0_EE","__ZN7WebCore8Document33addImageElementByLowercasedUsemapERKN3WTF16AtomicStringImplERNS_16HTMLImageElementE","__ZN7WebCore8Document49unregisterForPrivateBrowsingStateChangedCallbacksEPNS_7ElementE","__ZN7WebCore8Document22resumeActiveDOMObjectsENS_15ActiveDOMObject19ReasonForSuspensionE","__ZN7WebCore8Document13setReadyStateENS0_10ReadyStateE","__ZN7WebCore8Document16popCurrentScriptEv","__ZN7WebCore17NodeListsNodeData19addCachedCollectionINS_22DocumentNameCollectionENS_8DocumentEEEN3WTF10PassRefPtrIT_EERT0_NS_14CollectionTypeERKNS4_12AtomicStringE","__ZN7WebCore8Document18parseQualifiedNameERKN3WTF6StringERS2_S5_Ri","__ZN3WTF9HashTableIPNS_10StringImplENS_12KeyValuePairIS2_PN7WebCore7ElementEEENS_24KeyValuePairKeyExtractorIS7_EENS_15CaseFoldingHashENS_7HashMapIS2_S6_SA_NS_10HashTraitsIS2_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EES2_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S7_S9_SA_SG_SD_EEEEOT0_OT1_","__ZN7WebCore8Document18minimumLayoutDelayEv","__ZN7WebCore8Document26didRemoveWheelEventHandlerEv","__ZN7WebCore8Document6embedsEv","__ZN7WebCore8Document26didRemoveTouchEventHandlerEPNS_4NodeE","__ZNK7WebCore4Node16nonRendererStyleEv","__ZN7WebCore8Document30updateURLForPushOrReplaceStateERKNS_3URLE","__ZN7WebCore15SegmentedStringC2ERKN3WTF6StringE","__ZN7WebCore8Document36dispatchFullScreenChangeOrErrorEventERN3WTF5DequeINS1_6RefPtrINS_4NodeEEELj0EEERKNS1_12AtomicStringEb","__ZN7WebCore8Document30hasValidNamespaceForAttributesERKNS_13QualifiedNameE","__ZN7WebCore8Document29storageBlockingStateDidChangeEv","_memset","__ZN7WebCore8Document8iconURLsEi","__ZN3WTF12StringHasher28addCharactersAssumingAlignedItXadL_ZNS_15CaseFoldingHash8foldCaseItEEtT_EEEEvPKS4_j","__ZNK7WebCore8Document11elapsedTimeEv","__ZN7WebCore8Document16createNSResolverEPNS_4NodeE","__ZN7WebCore8Document14commonTeardownEv","__ZN3WTF12copyToVectorINS_7HashSetINS_6RefPtrIN7WebCore7ElementEEENS_7PtrHashIS5_EENS_10HashTraitsIS5_EEEENS_6VectorIS5_Lj0ENS_15CrashOnOverflowEEEEEvRKT_RT0_","__ZN3JSC20StringSourceProviderD0Ev","__ZN7WebCore17NodeListsNodeData19addCachedCollectionINS_14HTMLCollectionENS_8DocumentEEEN3WTF10PassRefPtrIT_EERT0_NS_14CollectionTypeE","__ZN7WebCore8Document31setVisualUpdatesAllowedByClientEb","__ZN7WebCore20WindowNameCollectionD1Ev","__ZN7WebCore8Document12elementSheetEv","__ZNK7WebCore8Document16childTypeAllowedENS_4Node8NodeTypeE","__ZN7WebCore8Document31setWindowAttributeEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEE","__ZN7WebCore8Document20enqueuePageshowEventENS_24PageshowEventPersistenceE","__ZN3WTF7CheckedIjNS_15CrashOnOverflowEEC2ENS_19ResultOverflowedTagE","__ZN3WTF9HashTableINSt3__14pairIhNS_12AtomicStringEEENS_12KeyValuePairIS4_PN7WebCore14HTMLCollectionEEENS_24KeyValuePairKeyExtractorIS9_EENS6_17NodeListsNodeData25NodeListCacheMapEntryHashIS3_EENS_7HashMapIS4_S8_SE_NS_10HashTraitsIS4_EENSG_IS8_EEE18KeyValuePairTraitsESH_E3addINS_17HashMapTranslatorISK_SE_EES4_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS4_S9_SB_SE_SK_SH_EEEEOT0_OT1_","__ZN3WTF5DequeINS_6RefPtrIN7WebCore8DocumentEEELj0EE10destroyAllEv","__ZN7WebCore17NodeListsNodeData19addCachedCollectionINS_17HTMLAllCollectionENS_8DocumentEEEN3WTF10PassRefPtrIT_EERT0_NS_14CollectionTypeE","__ZN7WebCore8Document19accessSVGExtensionsEv","__ZN7WebCore14SecurityOriginD2Ev","__ZNK7WebCore8Document23canContainRangeEndPointEv","__ZNK7WebCore8Document31displayStringModifiedByEncodingEN3WTF10PassRefPtrINS1_10StringImplEEE","__ZN7WebCore8Document22visibilityStateChangedEv","__ZNK7WebCore8Document12lastModifiedEv","__ZN7WebCore8Document12updateLayoutEv","__ZN7WebCore8Document11createEventERKN3WTF6StringERi","__ZN3WTF7HashSetIPN7WebCore7ElementENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_","__ZNK7WebCore8Document22preferredStylesheetSetEv","__ZN3WTF5DequeINS_6RefPtrIN7WebCore8DocumentEEELj0EE14expandCapacityEv","__ZNK7WebCore8Document11hasManifestEv","__ZN7WebCore8Document27fullScreenRendererDestroyedEv","__ZN7WebCore8Document30moveNodeIteratorsToNewDocumentEPNS_4NodeEPS0_","__ZN7WebCore8Document18createNodeIteratorEPNS_4NodeEjN3WTF10PassRefPtrINS_10NodeFilterEEEbRi","__ZThn88_NK7WebCore8Document20minimumTimerIntervalEv","__ZN7WebCore8Document23suspendActiveDOMObjectsENS_15ActiveDOMObject19ReasonForSuspensionE","__ZN7WebCore8Document20setCompatibilityModeENS0_17CompatibilityModeE","__ZThn88_NK7WebCore8Document22isJSExecutionForbiddenEv","__ZN7WebCore8Document19createStyleResolverEv","__ZNK7WebCore8Document10eventQueueEv","__ZN7WebCore8Document11createRangeEv","__ZN7WebCore8Document29privateBrowsingStateDidChangeEv","__ZN7WebCore8Document19caretRangeFromPointEii","__ZN7WebCore7IconURLaSEOS0_","__ZN7WebCore8Document9adoptNodeEN3WTF10PassRefPtrINS_4NodeEEERi","__ZN7WebCore8Document27ensurePlugInsInjectedScriptERNS_15DOMWrapperWorldE","__ZN7WebCore8Document6setURLERKNS_3URLE","__ZN7WebCore20WindowNameCollectionD0Ev","__ZN7WebCore8Document16createExpressionERKN3WTF6StringEPNS_15XPathNSResolverERi","__ZN3JSC20StringSourceProviderD1Ev","__ZNK7WebCore8Document15isContextThreadEv","__ZNK7WebCore8Document14hasSVGRootNodeEv","__ZN7WebCore8Document23setVisualUpdatesAllowedENS0_10ReadyStateE","__ZN7WebCore8Document13implicitCloseEv","__ZNK7WebCore8Document11completeURLERKN3WTF6StringERKNS_3URLE","_i64Add","_i64Subtract","_bitshift64Shl","_bitshift64Lshr","_bitshift64Ashr","_llvm_ctlz_i32","_llvm_cttz_i32"]

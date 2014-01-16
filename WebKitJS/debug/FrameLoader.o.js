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
H_BASE = parentModule["_malloc"](2160 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 2160;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore11FrameLoaderC1ERNS_5FrameERNS_17FrameLoaderClientE;
var __ZN7WebCore11FrameLoaderD1Ev;
/* memory initializer */ allocate([67,111,110,116,101,110,116,45,76,97,110,103,117,97,103,101,0,0,0,0,0,0,0,0,88,45,87,101,98,75,105,116,45,67,83,80,45,82,101,112,111,114,116,45,79,110,108,121,0,0,0,0,0,0,0,0,88,45,87,101,98,75,105,116,45,67,83,80,0,0,0,0,67,111,110,116,101,110,116,45,83,101,99,117,114,105,116,121,45,80,111,108,105,99,121,45,82,101,112,111,114,116,45,79,110,108,121,0,0,0,0,0,67,111,110,116,101,110,116,45,83,101,99,117,114,105,116,121,45,80,111,108,105,99,121,0,82,101,102,101,114,101,114,0,65,99,99,101,112,116,0,0,88,45,68,78,83,45,80,114,101,102,101,116,99,104,45,67,111,110,116,114,111,108,0,0,79,114,105,103,105,110,0,0,67,111,110,116,101,110,116,45,84,121,112,101,0,0,0,0,100,97,116,97,0,0,0,0,85,115,101,114,45,65,103,101,110,116,0,0,0,0,0,0,39,32,105,110,32,97,32,110,101,119,32,119,105,110,100,111,119,32,98,101,99,97,117,115,101,32,116,104,101,32,114,101,113,117,101,115,116,32,119,97,115,32,109,97,100,101,32,105,110,32,97,32,115,97,110,100,98,111,120,101,100,32,102,114,97,109,101,32,119,104,111,115,101,32,39,97,108,108,111,119,45,112,111,112,117,112,115,39,32,112,101,114,109,105,115,115,105,111,110,32,105,115,32,110,111,116,32,115,101,116,46,0,66,108,111,99,107,101,100,32,111,112,101,110,105,110,103,32,39,0,0,0,0,0,0,0,97,98,111,117,116,58,115,114,99,100,111,99,0,0,0,0,39,32,105,115,32,110,111,116,32,97,32,114,101,99,111,103,110,105,122,101,100,32,100,105,114,101,99,116,105,118,101,46,32,84,104,101,32,104,101,97,100,101,114,32,119,105,108,108,32,98,101,32,105,103,110,111,114,101,100,46,0,0,0,0,39,58,32,39,0,0,0,0,82,101,102,114,101,115,104,0,73,110,118,97,108,105,100,32,39,88,45,70,114,97,109,101,45,79,112,116,105,111,110,115,39,32,104,101,97,100,101,114,32,101,110,99,111,117,110,116,101,114,101,100,32,119,104,101,110,32,108,111,97,100,105,110,103,32,39,0,0,0,0,0,39,46,32,70,97,108,108,105,110,103,32,98,97,99,107,32,116,111,32,39,68,69,78,89,39,46,0,0,0,0,0,0,39,41,32,101,110,99,111,117,110,116,101,114,101,100,32,119,104,101,110,32,108,111,97,100,105,110,103,32,39,0,0,0,77,117,108,116,105,112,108,101,32,39,88,45,70,114,97,109,101,45,79,112,116,105,111,110,115,39,32,104,101,97,100,101,114,115,32,119,105,116,104,32,99,111,110,102,108,105,99,116,105,110,103,32,118,97,108,117,101,115,32,40,39,0,0,0,95,98,108,97,110,107,0,0,66,108,111,99,107,101,100,32,97,116,116,101,109,112,116,32,116,111,32,115,104,111,119,32,98,101,102,111,114,101,117,110,108,111,97,100,32,99,111,110,102,105,114,109,97,116,105,111,110,32,100,105,97,108,111,103,32,111,110,32,98,101,104,97,108,102,32,111,102,32,97,32,102,114,97,109,101,32,119,105,116,104,32,100,105,102,102,101,114,101,110,116,32,115,101,99,117,114,105,116,121,32,111,114,105,103,105,110,46,32,80,114,111,116,111,99,111,108,115,44,32,100,111,109,97,105,110,115,44,32,97,110,100,32,112,111,114,116,115,32,109,117,115,116,32,109,97,116,99,104,46,0,66,108,111,99,107,101,100,32,97,116,116,101,109,112,116,32,116,111,32,115,104,111,119,32,109,117,108,116,105,112,108,101,32,98,101,102,111,114,101,117,110,108,111,97,100,32,99,111,110,102,105,114,109,97,116,105,111,110,32,100,105,97,108,111,103,115,32,102,111,114,32,116,104,101,32,115,97,109,101,32,110,97,118,105,103,97,116,105,111,110,46,0,0,0,0,0,72,69,65,68,0,0,0,0,71,69,84,0,0,0,0,0,80,114,97,103,109,97,0,0,39,32,98,101,99,97,117,115,101,32,116,104,101,32,102,111,114,109,39,115,32,102,114,97,109,101,32,105,115,32,115,97,110,100,98,111,120,101,100,32,97,110,100,32,116,104,101,32,39,97,108,108,111,119,45,102,111,114,109,115,39,32,112,101,114,109,105,115,115,105,111,110,32,105,115,32,110,111,116,32,115,101,116,46,0,0,0,0,110,111,45,99,97,99,104,101,0,0,0,0,0,0,0,0,109,97,120,45,97,103,101,61,48,0,0,0,0,0,0,0,67,97,99,104,101,45,67,111,110,116,114,111,108,0,0,0,58,0,0,0,0,0,0,0,58,47,47,0,0,0,0,0,47,0,0,0,0,0,0,0,78,111,116,32,97,108,108,111,119,101,100,32,116,111,32,108,111,97,100,32,108,111,99,97,108,32,114,101,115,111,117,114,99,101,58,32,0,0,0,0,85,84,70,45,56,0,0,0,116,101,120,116,47,104,116,109,108,0,0,0,0,0,0,0,80,79,83,84,0,0,0,0,66,108,111,99,107,101,100,32,102,111,114,109,32,115,117,98,109,105,115,115,105,111,110,32,116,111,32,39,0,0,0,0,95,115,101,108,102,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,116,101,120,116,47,104,116,109,108,44,97,112,112,108,105,99,97,116,105,111,110,47,120,104,116,109,108,43,120,109,108,44,97,112,112,108,105,99,97,116,105,111,110,47,120,109,108,59,113,61,48,46,57,44,42,47,42,59,113,61,48,46,56,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_viiiiii(index,a1,a2,a3,a4,a5,a6) {
  try {
    Module["dynCall_viiiiii"](index,a1,a2,a3,a4,a5,a6);
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
function invoke_viidd(index,a1,a2,a3,a4) {
  try {
    Module["dynCall_viidd"](index,a1,a2,a3,a4);
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
function invoke_viiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9) {
  try {
    Module["dynCall_viiiiiiiii"](index,a1,a2,a3,a4,a5,a6,a7,a8,a9);
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
function invoke_iiiiii(index,a1,a2,a3,a4,a5) {
  try {
    return Module["dynCall_iiiiii"](index,a1,a2,a3,a4,a5);
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
  var __ZN7WebCore9HTMLNames9iframeTagE=env.__ZN7WebCore9HTMLNames9iframeTagE|0;
  var __ZN3WTF8nullAtomE=env.__ZN3WTF8nullAtomE|0;
  var __ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE=env.__ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE|0;
  var __ZN7WebCore9HTMLNames10srcdocAttrE=env.__ZN7WebCore9HTMLNames10srcdocAttrE|0;
  var __ZN3WTF10StringImpl19latin1CaseFoldTableE=env.__ZN3WTF10StringImpl19latin1CaseFoldTableE|0;
  var __ZN7WebCore9HTMLNames9objectTagE=env.__ZN7WebCore9HTMLNames9objectTagE|0;
  var __ZN7WebCore33NavigationDisablerForBeforeUnload24s_navigationDisableCountE=env.__ZN7WebCore33NavigationDisablerForBeforeUnload24s_navigationDisableCountE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore17FrameLoaderClientE=(H_BASE+1520)|0;
  var __ZTVN7WebCore5TimerINS_11FrameLoaderEEE=(H_BASE+1488)|0;
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
  var invoke_iiiii=env.invoke_iiiii;
  var invoke_did=env.invoke_did;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_iiii=env.invoke_iiii;
  var invoke_viidd=env.invoke_viidd;
  var invoke_v=env.invoke_v;
  var invoke_viiiiiiiii=env.invoke_viiiiiiiii;
  var invoke_viiii=env.invoke_viiii;
  var invoke_iii=env.invoke_iii;
  var invoke_iiiiii=env.invoke_iiiiii;
  var invoke_viii=env.invoke_viii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___cxa_pure_virtual=env.___cxa_pure_virtual;
  var ___setErrNo=env.___setErrNo;
  var _llvm_uadd_with_overflow_i32=env._llvm_uadd_with_overflow_i32;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore11FrameLoader25loadDifferentDocumentItemEPNS_11HistoryItemENS_13FrameLoadTypeENS0_29FormSubmissionCacheLoadPolicyE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 1344 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 64 | 0;
 i10 = i5 + 112 | 0;
 i11 = i5 + 160 | 0;
 i12 = i5 + 344 | 0;
 i13 = i5 + 536 | 0;
 i14 = i5 + 544 | 0;
 i15 = i5 + 552 | 0;
 i16 = i5 + 560 | 0;
 i17 = i5 + 568 | 0;
 i18 = i5 + 576 | 0;
 i19 = i5 + 768 | 0;
 i20 = i5 + 960 | 0;
 i21 = i5 + 1144 | 0;
 i22 = i5 + 1336 | 0;
 __ZN7WebCore17HistoryController18setProvisionalItemEPNS_11HistoryItemE(HEAP32[i1 + 12 >> 2] | 0, i2);
 i23 = __ZN7WebCore9PageCache3getEPNS_11HistoryItemE(__ZN7WebCore9pageCacheEv() | 0, i2) | 0;
 if ((i23 | 0) != 0) {
  i24 = HEAP32[(HEAP32[i23 + 16 >> 2] | 0) + 4 >> 2] | 0;
  i23 = i7 | 0;
  HEAP32[i23 >> 2] = 0;
  __ZN7WebCore11FrameLoader22loadWithDocumentLoaderEPNS_14DocumentLoaderENS_13FrameLoadTypeEN3WTF10PassRefPtrINS_9FormStateEEE(i1, i24, i3, i7);
  i7 = HEAP32[i23 >> 2] | 0;
  if ((i7 | 0) == 0) {
   STACKTOP = i5;
   return;
  }
  __ZN3WTF10RefCountedIN7WebCore9FormStateEE5derefEv(i7 | 0);
  STACKTOP = i5;
  return;
 }
 __ZNK7WebCore11HistoryItem3urlEv(i8, i2);
 __ZNK7WebCore11HistoryItem11originalURLEv(i9, i2);
 i7 = i10 | 0;
 HEAP32[i7 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i10);
 i23 = HEAP32[i1 + 48 >> 2] | 0;
 if ((i23 | 0) != 0) {
  i24 = __ZNK7WebCore14DocumentLoader3urlEv(i23) | 0;
  i23 = HEAP32[i24 >> 2] | 0;
  if ((i23 | 0) != 0) {
   i25 = i23 | 0;
   HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + 2;
  }
  i25 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i23;
  do {
   if ((i25 | 0) != 0) {
    i23 = i25 | 0;
    i26 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
    if ((i26 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i25);
     break;
    } else {
     HEAP32[i23 >> 2] = i26;
     break;
    }
   }
  } while (0);
  i25 = i24 + 4 | 0;
  i26 = i10 + 4 | 0;
  i23 = HEAP8[i26] & -2 | HEAP8[i25] & 1;
  HEAP8[i26] = i23;
  HEAP8[i26] = i23 & -3 | HEAP8[i25] & 2;
  HEAP32[i10 + 8 >> 2] = HEAP32[i24 + 8 >> 2];
  HEAP32[i10 + 12 >> 2] = HEAP32[i24 + 12 >> 2];
  HEAP32[i10 + 16 >> 2] = HEAP32[i24 + 16 >> 2];
  HEAP32[i10 + 20 >> 2] = HEAP32[i24 + 20 >> 2];
  HEAP32[i10 + 24 >> 2] = HEAP32[i24 + 24 >> 2];
  HEAP32[i10 + 28 >> 2] = HEAP32[i24 + 28 >> 2];
  HEAP32[i10 + 32 >> 2] = HEAP32[i24 + 32 >> 2];
  HEAP32[i10 + 36 >> 2] = HEAP32[i24 + 36 >> 2];
  HEAP32[i10 + 40 >> 2] = HEAP32[i24 + 40 >> 2];
  HEAP32[i10 + 44 >> 2] = HEAP32[i24 + 44 >> 2];
 }
 i24 = __ZN7WebCore11HistoryItem8formDataEv(i2) | 0;
 i10 = (i24 | 0) == 0;
 if (!i10) {
  i25 = i24 | 0;
  HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + 1;
 }
 i25 = i11 | 0;
 i23 = i8 | 0;
 i26 = HEAP32[i23 >> 2] | 0;
 HEAP32[i11 >> 2] = i26;
 if ((i26 | 0) != 0) {
  i27 = i26 | 0;
  HEAP32[i27 >> 2] = (HEAP32[i27 >> 2] | 0) + 2;
 }
 i27 = HEAP8[i8 + 4 | 0] | 0;
 i26 = i11 + 4 | 0;
 HEAP8[i26] = HEAP8[i26] & -4 | i27 & 1 | i27 & 2;
 HEAP32[i11 + 8 >> 2] = HEAP32[i8 + 8 >> 2];
 HEAP32[i11 + 12 >> 2] = HEAP32[i8 + 12 >> 2];
 HEAP32[i11 + 16 >> 2] = HEAP32[i8 + 16 >> 2];
 HEAP32[i11 + 20 >> 2] = HEAP32[i8 + 20 >> 2];
 HEAP32[i11 + 24 >> 2] = HEAP32[i8 + 24 >> 2];
 HEAP32[i11 + 28 >> 2] = HEAP32[i8 + 28 >> 2];
 HEAP32[i11 + 32 >> 2] = HEAP32[i8 + 32 >> 2];
 HEAP32[i11 + 36 >> 2] = HEAP32[i8 + 36 >> 2];
 HEAP32[i11 + 40 >> 2] = HEAP32[i8 + 40 >> 2];
 HEAP32[i11 + 44 >> 2] = HEAP32[i8 + 44 >> 2];
 HEAP32[i11 + 48 >> 2] = 0;
 HEAPF64[i11 + 56 >> 3] = +HEAPF64[__ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE >> 3];
 i8 = i11 + 64 | 0;
 HEAP32[i8 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i8);
 HEAP32[i6 >> 2] = H_BASE + 920;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i11 + 112 | 0, i6);
 __ZN7WebCore13HTTPHeaderMapC1Ev(i11 + 116 | 0);
 _memset(i11 + 136 | 0, 0, 16) | 0;
 HEAP8[i11 + 152 | 0] = 11;
 HEAP32[i11 + 156 >> 2] = 1;
 i6 = i11 + 160 | 0;
 i8 = i11 + 180 | 0;
 _memset(i6 | 0, 0, 19) | 0;
 HEAP32[i8 >> 2] = 15;
 if ((HEAP32[(__ZNK7WebCore11HistoryItem8referrerEv(i2) | 0) >> 2] | 0) != 0) {
  i27 = __ZNK7WebCore11HistoryItem8referrerEv(i2) | 0;
  __ZN7WebCore19ResourceRequestBase18setHTTPHeaderFieldEPKcRKN3WTF6StringE(i25, H_BASE + 144 | 0, i27);
 }
 __ZN7WebCore16NavigationActionC1Ev(i12);
 do {
  if (i10) {
   L31 : do {
    switch (i3 | 0) {
    case 4:
    case 9:
     {
      __ZN7WebCore19ResourceRequestBase14setCachePolicyENS_26ResourceRequestCachePolicyE(i25, 1);
      break;
     }
    case 1:
    case 2:
    case 3:
     {
      if (!(__ZNK7WebCore23FrameLoaderStateMachine30committedFirstRealDocumentLoadEv(i1 + 24 | 0) | 0)) {
       break L31;
      }
      __ZN7WebCore19ResourceRequestBase14setCachePolicyENS_26ResourceRequestCachePolicyE(i25, 2);
      break;
     }
    default:
     {}
    }
   } while (0);
   __ZN7WebCore11FrameLoader23addExtraFieldsToRequestERNS_15ResourceRequestENS_13FrameLoadTypeEb(i1, i11, i3, 1);
   i27 = i20 | 0;
   __ZN7WebCore19ResourceRequestBaseC2ERKS0_(i27, i25);
   i26 = HEAP32[i6 >> 2] | 0;
   HEAP32[i20 + 160 >> 2] = i26;
   if ((i26 | 0) != 0) {
    i28 = i26 | 0;
    HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 2;
   }
   i28 = HEAP32[i11 + 164 >> 2] | 0;
   HEAP32[i20 + 164 >> 2] = i28;
   if ((i28 | 0) != 0) {
    i26 = i28 | 0;
    HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 2;
   }
   i26 = HEAP32[i11 + 168 >> 2] | 0;
   HEAP32[i20 + 168 >> 2] = i26;
   if ((i26 | 0) != 0) {
    i28 = i26 | 0;
    HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 2;
   }
   i28 = HEAP32[i11 + 172 >> 2] | 0;
   HEAP32[i20 + 172 >> 2] = i28;
   if ((i28 | 0) != 0) {
    i26 = i28 | 0;
    HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 2;
   }
   HEAP8[i20 + 176 | 0] = HEAP8[i11 + 176 | 0] & 1;
   HEAP8[i20 + 177 | 0] = HEAP8[i11 + 177 | 0] & 1;
   HEAP8[i20 + 178 | 0] = HEAP8[i11 + 178 | 0] & 1;
   HEAP32[i20 + 180 >> 2] = HEAP32[i8 >> 2];
   __ZN7WebCore19ResourceRequestBase6setURLERKNS_3URLE(i27, i9);
   __ZN7WebCore16NavigationActionC1ERKNS_15ResourceRequestENS_13FrameLoadTypeEb(i21, i20, i3, 0);
   i27 = i21 | 0;
   __ZN7WebCore15ResourceRequestaSERKS0_(i12 | 0, i27) | 0;
   HEAP32[i12 + 184 >> 2] = HEAP32[i21 + 184 >> 2];
   i26 = i21 + 188 | 0;
   i28 = HEAP32[i26 >> 2] | 0;
   if ((i28 | 0) != 0) {
    i29 = i28 + 8 | 0;
    HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 1;
   }
   i29 = i12 + 188 | 0;
   i30 = HEAP32[i29 >> 2] | 0;
   HEAP32[i29 >> 2] = i28;
   do {
    if ((i30 | 0) != 0) {
     i28 = i30 + 8 | 0;
     i29 = i28 | 0;
     i31 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
     if ((i31 | 0) != 0) {
      HEAP32[i29 >> 2] = i31;
      break;
     }
     i31 = i28 - 8 | 0;
     if ((i31 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i31 >> 2] | 0) + 4 >> 2] & 127](i31);
    }
   } while (0);
   i30 = HEAP32[i26 >> 2] | 0;
   do {
    if ((i30 | 0) != 0) {
     i31 = i30 + 8 | 0;
     i28 = i31 | 0;
     i29 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
     if ((i29 | 0) != 0) {
      HEAP32[i28 >> 2] = i29;
      break;
     }
     i29 = i31 - 8 | 0;
     if ((i29 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i29 >> 2] | 0) + 4 >> 2] & 127](i29);
    }
   } while (0);
   __ZN7WebCore15ResourceRequestD2Ev(i27);
   __ZN7WebCore15ResourceRequestD2Ev(i20);
  } else {
   __ZN7WebCore8FormData13generateFilesEPNS_8DocumentE(i24, HEAP32[(HEAP32[i1 >> 2] | 0) + 456 >> 2] | 0);
   __ZN3WTF6StringC1EPKc(i13, H_BASE + 1160 | 0);
   __ZN7WebCore19ResourceRequestBase13setHTTPMethodERKN3WTF6StringE(i25, i13);
   i30 = HEAP32[i13 >> 2] | 0;
   if ((i30 | 0) == 0) {
    i26 = i14 | 0;
    HEAP32[i26 >> 2] = i24;
    i32 = i26;
   } else {
    i26 = i30 | 0;
    i29 = (HEAP32[i26 >> 2] | 0) - 2 | 0;
    if ((i29 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i30);
    } else {
     HEAP32[i26 >> 2] = i29;
    }
    i29 = i14 | 0;
    HEAP32[i29 >> 2] = i24;
    i32 = i29;
   }
   i29 = i24 | 0;
   HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 1;
   __ZN7WebCore19ResourceRequestBase11setHTTPBodyEN3WTF10PassRefPtrINS_8FormDataEEE(i25, i14);
   i29 = HEAP32[i32 >> 2] | 0;
   do {
    if ((i29 | 0) != 0) {
     i26 = i29 | 0;
     i30 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
     if ((i30 | 0) == 0) {
      __ZN7WebCore8FormDataD1Ev(i29);
      __ZN3WTF8fastFreeEPv(i29);
      break;
     } else {
      HEAP32[i26 >> 2] = i30;
      break;
     }
    }
   } while (0);
   __ZNK7WebCore11HistoryItem15formContentTypeEv(i15, i2);
   __ZN7WebCore19ResourceRequestBase18setHTTPHeaderFieldEPKcRKN3WTF6StringE(i25, H_BASE + 192 | 0, i15);
   i29 = HEAP32[i15 >> 2] | 0;
   do {
    if ((i29 | 0) != 0) {
     i27 = i29 | 0;
     i30 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
     if ((i30 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i29);
      break;
     } else {
      HEAP32[i27 >> 2] = i30;
      break;
     }
    }
   } while (0);
   __ZN7WebCore14SecurityOrigin16createFromStringERKN3WTF6StringE(i16, __ZNK7WebCore11HistoryItem8referrerEv(i2) | 0);
   i29 = i16 | 0;
   i30 = HEAP32[i29 >> 2] | 0;
   HEAP32[i29 >> 2] = 0;
   __ZNK7WebCore14SecurityOrigin8toStringEv(i17, i30);
   __ZN7WebCore11FrameLoader21addHTTPOriginIfNeededERNS_15ResourceRequestERKN3WTF6StringE(i11, i17);
   i29 = HEAP32[i17 >> 2] | 0;
   do {
    if ((i29 | 0) != 0) {
     i27 = i29 | 0;
     i26 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
     if ((i26 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i29);
      break;
     } else {
      HEAP32[i27 >> 2] = i26;
      break;
     }
    }
   } while (0);
   __ZN7WebCore11FrameLoader23addExtraFieldsToRequestERNS_15ResourceRequestENS_13FrameLoadTypeEb(i1, i11, i3, 1);
   if ((i4 | 0) == 0) {
    __ZN7WebCore19ResourceRequestBase14setCachePolicyENS_26ResourceRequestCachePolicyE(i25, 3);
    __ZN7WebCore16NavigationActionC1ERKNS_15ResourceRequestENS_13FrameLoadTypeEb(i18, i11, i3, 0);
    i29 = i18 | 0;
    __ZN7WebCore15ResourceRequestaSERKS0_(i12 | 0, i29) | 0;
    HEAP32[i12 + 184 >> 2] = HEAP32[i18 + 184 >> 2];
    i26 = i18 + 188 | 0;
    i27 = HEAP32[i26 >> 2] | 0;
    if ((i27 | 0) != 0) {
     i31 = i27 + 8 | 0;
     HEAP32[i31 >> 2] = (HEAP32[i31 >> 2] | 0) + 1;
    }
    i31 = i12 + 188 | 0;
    i28 = HEAP32[i31 >> 2] | 0;
    HEAP32[i31 >> 2] = i27;
    do {
     if ((i28 | 0) != 0) {
      i27 = i28 + 8 | 0;
      i31 = i27 | 0;
      i33 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
      if ((i33 | 0) != 0) {
       HEAP32[i31 >> 2] = i33;
       break;
      }
      i33 = i27 - 8 | 0;
      if ((i33 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i33 >> 2] | 0) + 4 >> 2] & 127](i33);
     }
    } while (0);
    i28 = HEAP32[i26 >> 2] | 0;
    do {
     if ((i28 | 0) != 0) {
      i33 = i28 + 8 | 0;
      i27 = i33 | 0;
      i31 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
      if ((i31 | 0) != 0) {
       HEAP32[i27 >> 2] = i31;
       break;
      }
      i31 = i33 - 8 | 0;
      if ((i31 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i31 >> 2] | 0) + 4 >> 2] & 127](i31);
     }
    } while (0);
    __ZN7WebCore15ResourceRequestD2Ev(i29);
   } else {
    __ZN7WebCore19ResourceRequestBase14setCachePolicyENS_26ResourceRequestCachePolicyE(i25, 2);
    __ZN7WebCore16NavigationActionC1ERKNS_15ResourceRequestENS_14NavigationTypeE(i19, i11, 4);
    i28 = i19 | 0;
    __ZN7WebCore15ResourceRequestaSERKS0_(i12 | 0, i28) | 0;
    HEAP32[i12 + 184 >> 2] = HEAP32[i19 + 184 >> 2];
    i26 = i19 + 188 | 0;
    i31 = HEAP32[i26 >> 2] | 0;
    if ((i31 | 0) != 0) {
     i33 = i31 + 8 | 0;
     HEAP32[i33 >> 2] = (HEAP32[i33 >> 2] | 0) + 1;
    }
    i33 = i12 + 188 | 0;
    i27 = HEAP32[i33 >> 2] | 0;
    HEAP32[i33 >> 2] = i31;
    do {
     if ((i27 | 0) != 0) {
      i31 = i27 + 8 | 0;
      i33 = i31 | 0;
      i34 = (HEAP32[i33 >> 2] | 0) - 1 | 0;
      if ((i34 | 0) != 0) {
       HEAP32[i33 >> 2] = i34;
       break;
      }
      i34 = i31 - 8 | 0;
      if ((i34 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i34 >> 2] | 0) + 4 >> 2] & 127](i34);
     }
    } while (0);
    i27 = HEAP32[i26 >> 2] | 0;
    do {
     if ((i27 | 0) != 0) {
      i29 = i27 + 8 | 0;
      i34 = i29 | 0;
      i31 = (HEAP32[i34 >> 2] | 0) - 1 | 0;
      if ((i31 | 0) != 0) {
       HEAP32[i34 >> 2] = i31;
       break;
      }
      i31 = i29 - 8 | 0;
      if ((i31 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i31 >> 2] | 0) + 4 >> 2] & 127](i31);
     }
    } while (0);
    __ZN7WebCore15ResourceRequestD2Ev(i28);
   }
   if ((i30 | 0) == 0) {
    break;
   }
   i27 = i30 | 0;
   if (((tempValue = HEAP32[i27 >> 2] | 0, HEAP32[i27 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN7WebCore14SecurityOriginD2Ev(i30);
   __ZN3WTF8fastFreeEPv(i30);
  }
 } while (0);
 i19 = i22 | 0;
 HEAP32[i19 >> 2] = 0;
 __ZN7WebCore11FrameLoader24loadWithNavigationActionERKNS_15ResourceRequestERKNS_16NavigationActionEbNS_13FrameLoadTypeEN3WTF10PassRefPtrINS_9FormStateEEE(i1, i11, i12, 0, i3, i22);
 i22 = HEAP32[i19 >> 2] | 0;
 if ((i22 | 0) != 0) {
  __ZN3WTF10RefCountedIN7WebCore9FormStateEE5derefEv(i22 | 0);
 }
 i22 = HEAP32[i12 + 188 >> 2] | 0;
 do {
  if ((i22 | 0) != 0) {
   i19 = i22 + 8 | 0;
   i3 = i19 | 0;
   i1 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i1 | 0) != 0) {
    HEAP32[i3 >> 2] = i1;
    break;
   }
   i1 = i19 - 8 | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 127](i1);
  }
 } while (0);
 __ZN7WebCore15ResourceRequestD2Ev(i12 | 0);
 __ZN7WebCore15ResourceRequestD2Ev(i11);
 do {
  if (!i10) {
   i11 = i24 | 0;
   i12 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) == 0) {
    __ZN7WebCore8FormDataD1Ev(i24);
    __ZN3WTF8fastFreeEPv(i24);
    break;
   } else {
    HEAP32[i11 >> 2] = i12;
    break;
   }
  }
 } while (0);
 i24 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i24 | 0) != 0) {
   i7 = i24 | 0;
   i10 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i24);
    break;
   } else {
    HEAP32[i7 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i24 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i24 | 0) != 0) {
   i9 = i24 | 0;
   i10 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i24);
    break;
   } else {
    HEAP32[i9 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i24 = HEAP32[i23 >> 2] | 0;
 if ((i24 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i23 = i24 | 0;
 i10 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
 if ((i10 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i24);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i23 >> 2] = i10;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore11FrameLoader35shouldInterruptLoadForXFrameOptionsERKN3WTF6StringERKNS_3URLEm(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 40 | 0;
 i10 = i5 + 48 | 0;
 i11 = i5 + 56 | 0;
 i12 = i5 + 80 | 0;
 i13 = i1 | 0;
 __ZN7WebCore15FeatureObserver7observeEPNS_8DocumentENS0_7FeatureE(HEAP32[(HEAP32[i13 >> 2] | 0) + 456 >> 2] | 0, 58);
 i1 = __ZNK7WebCore9FrameTree3topEv((HEAP32[i13 >> 2] | 0) + 40 | 0) | 0;
 if ((HEAP32[i13 >> 2] | 0) == (i1 | 0)) {
  i14 = 0;
  STACKTOP = i5;
  return i14 | 0;
 }
 switch (__ZN7WebCore24parseXFrameOptionsHeaderERKN3WTF6StringE(i2) | 0) {
 case 4:
  {
   i15 = HEAP32[(HEAP32[i13 >> 2] | 0) + 456 >> 2] | 0;
   i16 = HEAP32[(HEAP32[i15 >> 2] | 0) + 316 >> 2] | 0;
   __ZNK7WebCore3URL30stringCenterEllipsizedToLengthEj(i12, i3, 1024);
   i17 = i12 | 0;
   i12 = HEAP32[i17 >> 2] | 0;
   do {
    if ((i12 | 0) == 0) {
     i18 = 0;
     i19 = 1;
    } else {
     i20 = i12 | 0;
     i21 = HEAP32[i20 >> 2] | 0;
     i22 = i21 + 2 | 0;
     HEAP32[i20 >> 2] = i21 + 4;
     if ((i22 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i12);
      i23 = HEAP32[i20 >> 2] | 0;
     } else {
      HEAP32[i20 >> 2] = i22;
      i23 = i22;
     }
     i22 = i23 + 2 | 0;
     HEAP32[i20 >> 2] = i23 + 4;
     if ((i22 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i12);
      i18 = i12;
      i19 = 0;
      break;
     } else {
      HEAP32[i20 >> 2] = i22;
      i18 = i12;
      i19 = 0;
      break;
     }
    }
   } while (0);
   i12 = HEAP32[i2 >> 2] | 0;
   i23 = (i12 | 0) == 0;
   if (!i23) {
    i22 = i12 | 0;
    HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 2;
   }
   i22 = (i18 | 0) == 0;
   if (!i22) {
    i20 = i18 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 2;
   }
   if (!i23) {
    i20 = i12 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 2;
   }
   if (!i22) {
    i20 = i18 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 2;
   }
   do {
    if (!i23) {
     i20 = i12 | 0;
     i21 = HEAP32[i20 >> 2] | 0;
     HEAP32[i20 >> 2] = i21 + 2;
     if ((i21 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i12);
      break;
     } else {
      HEAP32[i20 >> 2] = i21;
      break;
     }
    }
   } while (0);
   if (!i22) {
    i21 = i18 | 0;
    i20 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
    if ((i20 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i18);
     i24 = HEAP32[i21 >> 2] | 0;
    } else {
     HEAP32[i21 >> 2] = i20;
     i24 = i20;
    }
    HEAP32[i21 >> 2] = i24 + 2;
   }
   if (!i23) {
    i24 = i12 | 0;
    HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 2;
   }
   HEAP32[i11 >> 2] = H_BASE + 464;
   i24 = i11 + 4 | 0;
   HEAP32[i24 >> 2] = i18;
   if (!i22) {
    i21 = i18 | 0;
    HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 2;
   }
   HEAP32[i11 + 8 >> 2] = H_BASE + 448;
   i21 = i11 + 12 | 0;
   HEAP32[i21 >> 2] = i12;
   do {
    if (i23) {
     HEAP32[i11 + 16 >> 2] = H_BASE + 384;
    } else {
     i20 = i12 | 0;
     i25 = HEAP32[i20 >> 2] | 0;
     HEAP32[i20 >> 2] = i25 + 2;
     HEAP32[i11 + 16 >> 2] = H_BASE + 384;
     if ((i25 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i12);
      break;
     } else {
      HEAP32[i20 >> 2] = i25;
      break;
     }
    }
   } while (0);
   do {
    if (!i22) {
     i25 = i18 | 0;
     i20 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
     if ((i20 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i18);
      break;
     } else {
      HEAP32[i25 >> 2] = i20;
      break;
     }
    }
   } while (0);
   __ZNK3WTF12StringAppendINS0_INS0_INS0_IPKcNS_6StringEEES2_EES3_EES2_EcvS3_Ev(i10, i11);
   FUNCTION_TABLE_viiiii[i16 & 1](i15, 1, 3, i10, i4);
   i15 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i15 | 0) != 0) {
     i10 = i15 | 0;
     i16 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
     if ((i16 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i15);
      break;
     } else {
      HEAP32[i10 >> 2] = i16;
      break;
     }
    }
   } while (0);
   i15 = HEAP32[i21 >> 2] | 0;
   do {
    if ((i15 | 0) != 0) {
     i21 = i15 | 0;
     i16 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
     if ((i16 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i15);
      break;
     } else {
      HEAP32[i21 >> 2] = i16;
      break;
     }
    }
   } while (0);
   i15 = HEAP32[i24 >> 2] | 0;
   do {
    if ((i15 | 0) != 0) {
     i24 = i15 | 0;
     i16 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
     if ((i16 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i15);
      break;
     } else {
      HEAP32[i24 >> 2] = i16;
      break;
     }
    }
   } while (0);
   do {
    if (!i23) {
     i15 = i12 | 0;
     i16 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
     if ((i16 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i12);
      break;
     } else {
      HEAP32[i15 >> 2] = i16;
      break;
     }
    }
   } while (0);
   do {
    if (!i22) {
     i16 = i18 | 0;
     i15 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
     if ((i15 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i18);
      break;
     } else {
      HEAP32[i16 >> 2] = i15;
      break;
     }
    }
   } while (0);
   do {
    if (!i23) {
     i15 = i12 | 0;
     i16 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
     if ((i16 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i12);
      break;
     } else {
      HEAP32[i15 >> 2] = i16;
      break;
     }
    }
   } while (0);
   do {
    if (!i22) {
     i12 = i18 | 0;
     i23 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
     if ((i23 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i18);
      break;
     } else {
      HEAP32[i12 >> 2] = i23;
      break;
     }
    }
   } while (0);
   do {
    if (!i19) {
     i22 = i18 | 0;
     i23 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
     if ((i23 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i18);
      break;
     } else {
      HEAP32[i22 >> 2] = i23;
      break;
     }
    }
   } while (0);
   i18 = HEAP32[i17 >> 2] | 0;
   if ((i18 | 0) == 0) {
    i14 = 0;
    STACKTOP = i5;
    return i14 | 0;
   }
   i17 = i18 | 0;
   i19 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i19 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i18);
    i14 = 0;
    STACKTOP = i5;
    return i14 | 0;
   } else {
    HEAP32[i17 >> 2] = i19;
    i14 = 0;
    STACKTOP = i5;
    return i14 | 0;
   }
   break;
  }
 case 3:
  {
   i14 = 0;
   STACKTOP = i5;
   return i14 | 0;
  }
 case 5:
  {
   i19 = HEAP32[(HEAP32[i13 >> 2] | 0) + 456 >> 2] | 0;
   i17 = HEAP32[(HEAP32[i19 >> 2] | 0) + 316 >> 2] | 0;
   i18 = HEAP32[i2 >> 2] | 0;
   if ((i18 | 0) == 0) {
    __ZNK7WebCore3URL30stringCenterEllipsizedToLengthEj(i9, i3, 1024);
    i26 = 0;
    i27 = 1;
   } else {
    i2 = i18 | 0;
    i23 = HEAP32[i2 >> 2] | 0;
    i22 = i23 + 2 | 0;
    HEAP32[i2 >> 2] = i23 + 4;
    if ((i22 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i18);
     i28 = HEAP32[i2 >> 2] | 0;
    } else {
     HEAP32[i2 >> 2] = i22;
     i28 = i22;
    }
    i22 = i28 + 2 | 0;
    HEAP32[i2 >> 2] = i28 + 4;
    if ((i22 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i18);
     __ZNK7WebCore3URL30stringCenterEllipsizedToLengthEj(i9, i3, 1024);
    } else {
     HEAP32[i2 >> 2] = i22;
     __ZNK7WebCore3URL30stringCenterEllipsizedToLengthEj(i9, i3, 1024);
    }
    HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
    i26 = i18;
    i27 = 0;
   }
   i18 = i9 | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   i2 = (i9 | 0) == 0;
   if (!i2) {
    i22 = i9 | 0;
    HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 2;
   }
   if (!i27) {
    i22 = i26 | 0;
    HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 2;
   }
   do {
    if (!i2) {
     i22 = i9 | 0;
     i28 = HEAP32[i22 >> 2] | 0;
     HEAP32[i22 >> 2] = i28 + 2;
     if ((i28 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i9);
      break;
     } else {
      HEAP32[i22 >> 2] = i28;
      break;
     }
    }
   } while (0);
   if (!i27) {
    i28 = i26 | 0;
    i22 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
    if ((i22 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i26);
     i29 = HEAP32[i28 >> 2] | 0;
    } else {
     HEAP32[i28 >> 2] = i22;
     i29 = i22;
    }
    HEAP32[i28 >> 2] = i29 + 2;
   }
   if (!i2) {
    i29 = i9 | 0;
    HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 2;
   }
   HEAP32[i8 >> 2] = H_BASE + 592;
   i29 = i8 + 4 | 0;
   HEAP32[i29 >> 2] = i26;
   if (!i27) {
    i28 = i26 | 0;
    HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 2;
   }
   HEAP32[i8 + 8 >> 2] = H_BASE + 560;
   i28 = i8 + 12 | 0;
   HEAP32[i28 >> 2] = i9;
   do {
    if (i2) {
     HEAP32[i8 + 16 >> 2] = H_BASE + 528;
    } else {
     i22 = i9 | 0;
     i23 = HEAP32[i22 >> 2] | 0;
     HEAP32[i22 >> 2] = i23 + 2;
     HEAP32[i8 + 16 >> 2] = H_BASE + 528;
     if ((i23 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i9);
      break;
     } else {
      HEAP32[i22 >> 2] = i23;
      break;
     }
    }
   } while (0);
   do {
    if (!i27) {
     i23 = i26 | 0;
     i22 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
     if ((i22 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i26);
      break;
     } else {
      HEAP32[i23 >> 2] = i22;
      break;
     }
    }
   } while (0);
   __ZNK3WTF12StringAppendINS0_INS0_INS0_IPKcNS_6StringEEES2_EES3_EES2_EcvS3_Ev(i7, i8);
   FUNCTION_TABLE_viiiii[i17 & 1](i19, 1, 3, i7, i4);
   i4 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i4 | 0) != 0) {
     i7 = i4 | 0;
     i19 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
     if ((i19 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i4);
      break;
     } else {
      HEAP32[i7 >> 2] = i19;
      break;
     }
    }
   } while (0);
   i4 = HEAP32[i28 >> 2] | 0;
   do {
    if ((i4 | 0) != 0) {
     i28 = i4 | 0;
     i19 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
     if ((i19 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i4);
      break;
     } else {
      HEAP32[i28 >> 2] = i19;
      break;
     }
    }
   } while (0);
   i4 = HEAP32[i29 >> 2] | 0;
   do {
    if ((i4 | 0) != 0) {
     i29 = i4 | 0;
     i19 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
     if ((i19 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i4);
      break;
     } else {
      HEAP32[i29 >> 2] = i19;
      break;
     }
    }
   } while (0);
   do {
    if (!i2) {
     i4 = i9 | 0;
     i19 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
     if ((i19 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i9);
      break;
     } else {
      HEAP32[i4 >> 2] = i19;
      break;
     }
    }
   } while (0);
   do {
    if (!i27) {
     i9 = i26 | 0;
     i2 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
     if ((i2 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i26);
      break;
     } else {
      HEAP32[i9 >> 2] = i2;
      break;
     }
    }
   } while (0);
   i2 = HEAP32[i18 >> 2] | 0;
   do {
    if ((i2 | 0) != 0) {
     i18 = i2 | 0;
     i9 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
     if ((i9 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i2);
      break;
     } else {
      HEAP32[i18 >> 2] = i9;
      break;
     }
    }
   } while (0);
   if (i27) {
    i14 = 1;
    STACKTOP = i5;
    return i14 | 0;
   }
   i27 = i26 | 0;
   i2 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i26);
   } else {
    HEAP32[i27 >> 2] = i2;
   }
   i2 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i26);
    i14 = 1;
    STACKTOP = i5;
    return i14 | 0;
   } else {
    HEAP32[i27 >> 2] = i2;
    i14 = 1;
    STACKTOP = i5;
    return i14 | 0;
   }
   break;
  }
 case 2:
  {
   __ZN7WebCore15FeatureObserver7observeEPNS_8DocumentENS0_7FeatureE(HEAP32[(HEAP32[i13 >> 2] | 0) + 456 >> 2] | 0, 59);
   __ZN7WebCore14SecurityOrigin6createERKNS_3URLE(i6, i3);
   i3 = i6 | 0;
   i6 = HEAP32[i3 >> 2] | 0;
   HEAP32[i3 >> 2] = 0;
   L218 : do {
    if (__ZNK7WebCore14SecurityOrigin20isSameSchemeHostPortEPKS0_(i6, HEAP32[(HEAP32[i1 + 456 >> 2] | 0) + 100 >> 2] | 0) | 0) {
     i3 = __ZNK7WebCore9FrameTree6parentEv((HEAP32[i13 >> 2] | 0) + 40 | 0) | 0;
     if ((i3 | 0) == 0) {
      i30 = 0;
      break;
     } else {
      i31 = i3;
     }
     while (1) {
      if (!(__ZNK7WebCore14SecurityOrigin20isSameSchemeHostPortEPKS0_(i6, HEAP32[(HEAP32[i31 + 456 >> 2] | 0) + 100 >> 2] | 0) | 0)) {
       break;
      }
      i3 = __ZNK7WebCore9FrameTree6parentEv(i31 + 40 | 0) | 0;
      if ((i3 | 0) == 0) {
       i30 = 0;
       break L218;
      } else {
       i31 = i3;
      }
     }
     __ZN7WebCore15FeatureObserver7observeEPNS_8DocumentENS0_7FeatureE(HEAP32[(HEAP32[i13 >> 2] | 0) + 456 >> 2] | 0, 60);
     i30 = 0;
    } else {
     i30 = 1;
    }
   } while (0);
   if ((i6 | 0) == 0) {
    i14 = i30;
    STACKTOP = i5;
    return i14 | 0;
   }
   i13 = i6 | 0;
   if (((tempValue = HEAP32[i13 >> 2] | 0, HEAP32[i13 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    i14 = i30;
    STACKTOP = i5;
    return i14 | 0;
   }
   __ZN7WebCore14SecurityOriginD2Ev(i6);
   __ZN3WTF8fastFreeEPv(i6);
   i14 = i30;
   STACKTOP = i5;
   return i14 | 0;
  }
 case 1:
  {
   i14 = 1;
   STACKTOP = i5;
   return i14 | 0;
  }
 default:
  {
   i14 = 0;
   STACKTOP = i5;
   return i14 | 0;
  }
 }
 return 0;
}
function __ZN7WebCore12createWindowEPNS_5FrameES1_RKNS_16FrameLoadRequestERKNS_14WindowFeaturesERb(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, d38 = +0, d39 = +0, d40 = +0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 640 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i7 + 16 | 0;
 i11 = i7 + 24 | 0;
 i12 = i7 + 32 | 0;
 i13 = i7 + 40 | 0;
 i14 = i7 + 48 | 0;
 i15 = i7 + 56 | 0;
 i16 = i7 + 368 | 0;
 i17 = i7 + 376 | 0;
 i18 = i7 + 384 | 0;
 i19 = i7 + 392 | 0;
 i20 = i7 + 584 | 0;
 i21 = i7 + 592 | 0;
 i22 = i7 + 608 | 0;
 i23 = i7 + 624 | 0;
 i24 = i4 + 192 | 0;
 i25 = HEAP32[i24 >> 2] | 0;
 do {
  if ((i25 | 0) != 0) {
   if ((HEAP32[i25 + 4 >> 2] | 0) == 0) {
    break;
   }
   if (__ZN3WTF5equalEPKNS_10StringImplEPKh(i25, H_BASE + 656 | 0) | 0) {
    break;
   }
   i26 = i3 + 80 | 0;
   i27 = HEAP32[i24 >> 2] | 0;
   do {
    if ((i27 | 0) == 0) {
     i28 = i11 | 0;
     HEAP32[i28 >> 2] = 0;
     i29 = i28;
    } else {
     if ((HEAP32[i27 + 16 >> 2] & 16 | 0) == 0) {
      __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i11, i27);
      i29 = i11 | 0;
      break;
     } else {
      i28 = i11 | 0;
      HEAP32[i28 >> 2] = i27;
      i30 = i27 | 0;
      HEAP32[i30 >> 2] = (HEAP32[i30 >> 2] | 0) + 2;
      i29 = i28;
      break;
     }
    }
   } while (0);
   i27 = i12 | 0;
   HEAP32[i27 >> 2] = HEAP32[i29 >> 2];
   i28 = __ZN7WebCore11FrameLoader22findFrameForNavigationERKN3WTF12AtomicStringEPNS_8DocumentE(i26, i12, HEAP32[i2 + 456 >> 2] | 0) | 0;
   i30 = HEAP32[i27 >> 2] | 0;
   do {
    if ((i30 | 0) != 0) {
     i27 = i30 | 0;
     i31 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
     if ((i31 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i30);
      break;
     } else {
      HEAP32[i27 >> 2] = i31;
      break;
     }
    }
   } while (0);
   if ((i28 | 0) == 0) {
    break;
   }
   if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i24 >> 2] | 0, H_BASE + 1200 | 0) | 0) {
    HEAP8[i6] = 0;
    HEAP32[i1 >> 2] = i28;
   } else {
    i30 = HEAP32[i28 + 32 >> 2] | 0;
    if ((i30 | 0) != 0) {
     __ZNK7WebCore6Chrome5focusEv(HEAP32[i30 + 20 >> 2] | 0);
    }
    HEAP8[i6] = 0;
    HEAP32[i1 >> 2] = i28;
   }
   i30 = i28 + 4 | 0;
   HEAP32[i30 >> 2] = (HEAP32[i30 >> 2] | 0) + 1;
   STACKTOP = i7;
   return;
  }
 } while (0);
 i12 = i2 + 456 | 0;
 i29 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i29 | 0) != 0) {
   if ((HEAP32[i29 + 96 >> 2] & 64 | 0) == 0) {
    break;
   }
   i11 = HEAP32[(HEAP32[i29 >> 2] | 0) + 316 >> 2] | 0;
   __ZNK7WebCore3URL30stringCenterEllipsizedToLengthEj(i14, __ZNK7WebCore19ResourceRequestBase3urlEv(i4 + 8 | 0) | 0, 1024);
   i3 = i14 | 0;
   i25 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i25 | 0) == 0) {
     i32 = 0;
     i33 = 1;
    } else {
     i30 = i25 | 0;
     i26 = HEAP32[i30 >> 2] | 0;
     i31 = i26 + 2 | 0;
     HEAP32[i30 >> 2] = i26 + 4;
     if ((i31 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i25);
      i34 = HEAP32[i30 >> 2] | 0;
     } else {
      HEAP32[i30 >> 2] = i31;
      i34 = i31;
     }
     i31 = i34 + 2 | 0;
     HEAP32[i30 >> 2] = i34 + 4;
     if ((i31 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i25);
      i32 = i25;
      i33 = 0;
      break;
     } else {
      HEAP32[i30 >> 2] = i31;
      i32 = i25;
      i33 = 0;
      break;
     }
    }
   } while (0);
   HEAP32[i9 >> 2] = H_BASE + 344;
   i25 = i9 + 4 | 0;
   HEAP32[i25 >> 2] = i32;
   i28 = (i32 | 0) == 0;
   if (!i28) {
    i31 = i32 | 0;
    HEAP32[i31 >> 2] = (HEAP32[i31 >> 2] | 0) + 2;
   }
   __ZN3WTF13tryMakeStringINS_12StringAppendIPKcNS_6StringEEES3_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i8, i9, H_BASE + 232 | 0);
   i31 = i8 | 0;
   i30 = HEAP32[i31 >> 2] | 0;
   HEAP32[i31 >> 2] = 0;
   i31 = HEAP32[i25 >> 2] | 0;
   do {
    if ((i31 | 0) != 0) {
     i25 = i31 | 0;
     i26 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
     if ((i26 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i31);
      break;
     } else {
      HEAP32[i25 >> 2] = i26;
      break;
     }
    }
   } while (0);
   if ((i30 | 0) == 0) {
    _WTFCrash();
   }
   i31 = i13 | 0;
   HEAP32[i31 >> 2] = i30;
   FUNCTION_TABLE_viiiii[i11 & 1](i29, 8, 3, i13, 0);
   i26 = HEAP32[i31 >> 2] | 0;
   do {
    if ((i26 | 0) != 0) {
     i31 = i26 | 0;
     i25 = (HEAP32[i31 >> 2] | 0) - 2 | 0;
     if ((i25 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i26);
      break;
     } else {
      HEAP32[i31 >> 2] = i25;
      break;
     }
    }
   } while (0);
   do {
    if (!i28) {
     i26 = i32 | 0;
     i11 = (HEAP32[i26 >> 2] | 0) - 2 | 0;
     if ((i11 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i32);
      break;
     } else {
      HEAP32[i26 >> 2] = i11;
      break;
     }
    }
   } while (0);
   do {
    if (!i33) {
     i28 = i32 | 0;
     i11 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
     if ((i11 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i32);
      break;
     } else {
      HEAP32[i28 >> 2] = i11;
      break;
     }
    }
   } while (0);
   i11 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i11 | 0) != 0) {
     i28 = i11 | 0;
     i26 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
     if ((i26 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i11);
      break;
     } else {
      HEAP32[i28 >> 2] = i26;
      break;
     }
    }
   } while (0);
   HEAP32[i1 >> 2] = 0;
   STACKTOP = i7;
   return;
  }
 } while (0);
 __ZN7WebCore16FrameLoadRequestC1ERKS0_(i15, i4);
 i32 = HEAP32[(HEAP32[i12 >> 2] | 0) + 1944 >> 2] | 0;
 i33 = __ZNK7WebCore19ResourceRequestBase3urlEv(i4 + 8 | 0) | 0;
 i4 = i2 + 80 | 0;
 i13 = HEAP32[i4 >> 2] | 0;
 if ((HEAP8[(HEAP32[i13 + 456 >> 2] | 0) + 1581 | 0] & 1) == 0) {
  i35 = i13;
 } else {
  i29 = i13;
  while (1) {
   i13 = __ZNK7WebCore9FrameTree6parentEv(i29 + 40 | 0) | 0;
   if ((HEAP8[(HEAP32[i13 + 456 >> 2] | 0) + 1581 | 0] & 1) == 0) {
    i35 = i13;
    break;
   } else {
    i29 = i13;
   }
  }
 }
 i29 = i17 | 0;
 i13 = HEAP32[i35 + 144 >> 2] | 0;
 HEAP32[i29 >> 2] = i13;
 if ((i13 | 0) != 0) {
  i35 = i13 | 0;
  HEAP32[i35 >> 2] = (HEAP32[i35 >> 2] | 0) + 2;
 }
 __ZN7WebCore14SecurityPolicy22generateReferrerHeaderENS_14ReferrerPolicyERKNS_3URLERKN3WTF6StringE(i16, i32, i33, i17);
 i17 = HEAP32[i29 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i29 = i17 | 0;
   i33 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
   if ((i33 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    break;
   } else {
    HEAP32[i29 >> 2] = i33;
    break;
   }
  }
 } while (0);
 i17 = i16 | 0;
 i33 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i33 | 0) != 0) {
   if ((HEAP32[i33 + 4 >> 2] | 0) == 0) {
    break;
   }
   __ZN7WebCore19ResourceRequestBase18setHTTPHeaderFieldEPKcRKN3WTF6StringE(i15 + 8 | 0, H_BASE + 144 | 0, i16);
  }
 } while (0);
 i16 = i15 + 8 | 0;
 __ZNK7WebCore14SecurityOrigin8toStringEv(i18, HEAP32[(HEAP32[(HEAP32[i4 >> 2] | 0) + 456 >> 2] | 0) + 100 >> 2] | 0);
 __ZN7WebCore11FrameLoader21addHTTPOriginIfNeededERNS_15ResourceRequestERKN3WTF6StringE(i16, i18);
 i4 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i18 = i4 | 0;
   i33 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
   if ((i33 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i18 >> 2] = i33;
    break;
   }
  }
 } while (0);
 do {
  if ((HEAP8[(HEAP32[i2 + 36 >> 2] | 0) + 191 | 0] & 16) == 0) {
   HEAP8[i6] = 0;
   HEAP32[i1 >> 2] = i2;
   if ((i2 | 0) == 0) {
    break;
   }
   i4 = i2 + 4 | 0;
   HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
  } else {
   i4 = HEAP32[i2 + 32 >> 2] | 0;
   if ((i4 | 0) == 0) {
    HEAP32[i1 >> 2] = 0;
    break;
   }
   __ZN7WebCore16NavigationActionC1ERKNS_15ResourceRequestE(i19, i16);
   i33 = __ZNK7WebCore6Chrome12createWindowEPNS_5FrameERKNS_16FrameLoadRequestERKNS_14WindowFeaturesERKNS_16NavigationActionE(HEAP32[i4 + 20 >> 2] | 0, i2, i15, i5, i19) | 0;
   do {
    if ((i33 | 0) == 0) {
     HEAP32[i1 >> 2] = 0;
    } else {
     i4 = i33 + 60 | 0;
     i18 = (HEAP32[i4 >> 2] | 0) + 308 | 0;
     HEAP32[i18 >> 2] = HEAP32[i18 >> 2] | HEAP32[(HEAP32[i12 >> 2] | 0) + 96 >> 2];
     do {
      if (!(__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i24 >> 2] | 0, H_BASE + 656 | 0) | 0)) {
       i18 = (HEAP32[i4 >> 2] | 0) + 40 | 0;
       i29 = HEAP32[i24 >> 2] | 0;
       do {
        if ((i29 | 0) == 0) {
         i32 = i10 | 0;
         HEAP32[i32 >> 2] = 0;
         i36 = i32;
        } else {
         if ((HEAP32[i29 + 16 >> 2] & 16 | 0) == 0) {
          __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i10, i29);
          i36 = i10 | 0;
          break;
         } else {
          i32 = i10 | 0;
          HEAP32[i32 >> 2] = i29;
          i35 = i29 | 0;
          HEAP32[i35 >> 2] = (HEAP32[i35 >> 2] | 0) + 2;
          i36 = i32;
          break;
         }
        }
       } while (0);
       i29 = i20 | 0;
       HEAP32[i29 >> 2] = HEAP32[i36 >> 2];
       __ZN7WebCore9FrameTree7setNameERKN3WTF12AtomicStringE(i18, i20);
       i32 = HEAP32[i29 >> 2] | 0;
       if ((i32 | 0) == 0) {
        break;
       }
       i29 = i32 | 0;
       i35 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
       if ((i35 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i32);
        break;
       } else {
        HEAP32[i29 >> 2] = i35;
        break;
       }
      }
     } while (0);
     i35 = i33 + 20 | 0;
     if ((HEAP8[i5 + 31 | 0] & 1) == 0) {
      i37 = (HEAP8[i5 + 32 | 0] & 1) != 0;
     } else {
      i37 = 1;
     }
     __ZNK7WebCore6Chrome18setToolbarsVisibleEb(HEAP32[i35 >> 2] | 0, i37);
     __ZNK7WebCore6Chrome19setStatusbarVisibleEb(HEAP32[i35 >> 2] | 0, (HEAP8[i5 + 30 | 0] & 1) != 0);
     __ZNK7WebCore6Chrome20setScrollbarsVisibleEb(HEAP32[i35 >> 2] | 0, (HEAP8[i5 + 33 | 0] & 1) != 0);
     __ZNK7WebCore6Chrome17setMenubarVisibleEb(HEAP32[i35 >> 2] | 0, (HEAP8[i5 + 29 | 0] & 1) != 0);
     __ZNK7WebCore6Chrome12setResizableEb(HEAP32[i35 >> 2] | 0, (HEAP8[i5 + 34 | 0] & 1) != 0);
     __ZNK7WebCore6Chrome8pageRectEv(i21, HEAP32[i35 >> 2] | 0);
     i29 = i21 + 8 | 0;
     d38 = +HEAPF32[i29 >> 2];
     d39 = +HEAPF32[i29 + 4 >> 2];
     __ZNK7WebCore6Chrome10windowRectEv(i22, HEAP32[i35 >> 2] | 0);
     if ((HEAP8[i5 + 4 | 0] & 1) != 0) {
      HEAPF32[i22 >> 2] = +HEAPF32[i5 >> 2];
     }
     if ((HEAP8[i5 + 12 | 0] & 1) != 0) {
      HEAPF32[i22 + 4 >> 2] = +HEAPF32[i5 + 8 >> 2];
     }
     do {
      if ((HEAP8[i5 + 20 | 0] & 1) != 0) {
       d40 = +HEAPF32[i5 + 16 >> 2];
       if (d40 == +0) {
        break;
       }
       i29 = i22 + 8 | 0;
       HEAPF32[i29 >> 2] = d40 + (+HEAPF32[i29 >> 2] - d38);
      }
     } while (0);
     do {
      if ((HEAP8[i5 + 28 | 0] & 1) != 0) {
       d38 = +HEAPF32[i5 + 24 >> 2];
       if (d38 == +0) {
        break;
       }
       i29 = i22 + 12 | 0;
       HEAPF32[i29 >> 2] = d38 + (+HEAPF32[i29 >> 2] - d39);
      }
     } while (0);
     __ZN7WebCore9DOMWindow16adjustWindowRectEPNS_4PageERKNS_9FloatRectE(i23, i33, i22);
     __ZNK7WebCore6Chrome13setWindowRectERKNS_9FloatRectE(HEAP32[i35 >> 2] | 0, i23);
     __ZNK7WebCore6Chrome4showEv(HEAP32[i35 >> 2] | 0);
     HEAP8[i6] = 1;
     i29 = HEAP32[i4 >> 2] | 0;
     HEAP32[i1 >> 2] = i29;
     if ((i29 | 0) == 0) {
      break;
     }
     i32 = i29 + 4 | 0;
     HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + 1;
    }
   } while (0);
   i33 = HEAP32[i19 + 188 >> 2] | 0;
   do {
    if ((i33 | 0) != 0) {
     i32 = i33 + 8 | 0;
     i29 = i32 | 0;
     i13 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
     if ((i13 | 0) != 0) {
      HEAP32[i29 >> 2] = i13;
      break;
     }
     i13 = i32 - 8 | 0;
     if ((i13 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 127](i13);
    }
   } while (0);
   __ZN7WebCore15ResourceRequestD2Ev(i19 | 0);
  }
 } while (0);
 i19 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i19 | 0) != 0) {
   i17 = i19 | 0;
   i1 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i19);
    break;
   } else {
    HEAP32[i17 >> 2] = i1;
    break;
   }
  }
 } while (0);
 __ZN7WebCore14SubstituteDataD2Ev(i15 + 200 | 0);
 i19 = HEAP32[i15 + 192 >> 2] | 0;
 do {
  if ((i19 | 0) != 0) {
   i1 = i19 | 0;
   i17 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
   if ((i17 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i19);
    break;
   } else {
    HEAP32[i1 >> 2] = i17;
    break;
   }
  }
 } while (0);
 __ZN7WebCore15ResourceRequestD2Ev(i16);
 i16 = HEAP32[i15 >> 2] | 0;
 if ((i16 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i15 = i16 | 0;
 if (((tempValue = HEAP32[i15 >> 2] | 0, HEAP32[i15 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  STACKTOP = i7;
  return;
 }
 __ZN7WebCore14SecurityOriginD2Ev(i16);
 __ZN3WTF8fastFreeEPv(i16);
 STACKTOP = i7;
 return;
}
function __ZN7WebCore11FrameLoader22loadWithDocumentLoaderEPNS_14DocumentLoaderENS_13FrameLoadTypeEN3WTF10PassRefPtrINS_9FormStateEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 640 | 0;
 i6 = i5 | 0;
 i7 = i5 + 192 | 0;
 i8 = i5 + 376 | 0;
 i9 = i5 + 384 | 0;
 i10 = i5 + 408 | 0;
 i11 = i5 + 600 | 0;
 i12 = i5 + 608 | 0;
 i13 = i5 + 616 | 0;
 i14 = i1 | 0;
 i15 = HEAP32[i14 >> 2] | 0;
 i16 = i15 + 4 | 0;
 HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
 do {
  if ((HEAP32[i1 + 72 >> 2] | 0) == 0) {
   i16 = HEAP32[(HEAP32[i14 >> 2] | 0) + 456 >> 2] | 0;
   if ((i16 | 0) != 0) {
    i17 = HEAP32[i16 + 356 >> 2] | 0;
    if ((i17 | 0) != 0) {
     i18 = i17 | 0;
     HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 2;
    }
    i18 = i1 + 236 | 0;
    i19 = HEAP32[i18 >> 2] | 0;
    HEAP32[i18 >> 2] = i17;
    do {
     if ((i19 | 0) != 0) {
      i17 = i19 | 0;
      i18 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
      if ((i18 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i19);
       break;
      } else {
       HEAP32[i17 >> 2] = i18;
       break;
      }
     }
    } while (0);
    i19 = i16 + 360 | 0;
    i18 = i1 + 240 | 0;
    i17 = HEAP8[i18] & -2 | HEAP8[i19] & 1;
    HEAP8[i18] = i17;
    HEAP8[i18] = i17 & -3 | HEAP8[i19] & 2;
    HEAP32[i1 + 244 >> 2] = HEAP32[i16 + 364 >> 2];
    HEAP32[i1 + 248 >> 2] = HEAP32[i16 + 368 >> 2];
    HEAP32[i1 + 252 >> 2] = HEAP32[i16 + 372 >> 2];
    HEAP32[i1 + 256 >> 2] = HEAP32[i16 + 376 >> 2];
    HEAP32[i1 + 260 >> 2] = HEAP32[i16 + 380 >> 2];
    HEAP32[i1 + 264 >> 2] = HEAP32[i16 + 384 >> 2];
    HEAP32[i1 + 268 >> 2] = HEAP32[i16 + 388 >> 2];
    HEAP32[i1 + 272 >> 2] = HEAP32[i16 + 392 >> 2];
    HEAP32[i1 + 276 >> 2] = HEAP32[i16 + 396 >> 2];
    HEAP32[i1 + 280 >> 2] = HEAP32[i16 + 400 >> 2];
   }
   i19 = i1 + 8 | 0;
   HEAP32[(HEAP32[i19 >> 2] | 0) + 8 >> 2] = i3;
   i17 = i4 | 0;
   i18 = HEAP32[i17 >> 2] | 0;
   HEAP32[i17 >> 2] = 0;
   i17 = (i18 | 0) == 0;
   i20 = i17 ^ 1;
   i21 = __ZNK7WebCore19ResourceRequestBase3urlEv(__ZN7WebCore14DocumentLoader7requestEv(i2) | 0) | 0;
   i22 = __ZNK7WebCore19ResourceRequestBase10httpMethodEv(__ZN7WebCore14DocumentLoader7requestEv(i2) | 0) | 0;
   i23 = HEAP32[(HEAP32[i19 >> 2] | 0) + 8 >> 2] | 0;
   if (i17) {
    i24 = 12;
   } else {
    if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i22 >> 2] | 0, H_BASE + 920 | 0) | 0) {
     i24 = 12;
    } else {
     i24 = 43;
    }
   }
   do {
    if ((i24 | 0) == 12) {
     if ((i23 | 0) == 9 | (i23 | 0) == 6 | (i23 | 0) == 4) {
      i24 = 43;
      break;
     }
     i22 = HEAP32[(HEAP32[i14 >> 2] | 0) + 456 >> 2] | 0;
     if (!(__ZNK7WebCore3URL21hasFragmentIdentifierEv(i21) | 0)) {
      i24 = 43;
      break;
     }
     if (!(__ZN7WebCore31equalIgnoringFragmentIdentifierERKNS_3URLES2_(i22 + 356 | 0, i21) | 0)) {
      i24 = 43;
      break;
     }
     i22 = HEAP32[(HEAP32[i14 >> 2] | 0) + 456 >> 2] | 0;
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i22 >> 2] | 0) + 252 >> 2] & 31](i22) | 0) {
      i24 = 43;
      break;
     }
     i22 = HEAP32[i1 + 48 >> 2] | 0;
     i25 = (i22 | 0) == 0;
     if (!i25) {
      i26 = i22 + 4 | 0;
      HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 1;
     }
     i26 = __ZN7WebCore14DocumentLoader7requestEv(i2) | 0;
     __ZN7WebCore16NavigationActionC1ERKNS_15ResourceRequestENS_13FrameLoadTypeEb(i6, i26, HEAP32[(HEAP32[i19 >> 2] | 0) + 8 >> 2] | 0, i20);
     i26 = i6 | 0;
     __ZN7WebCore15ResourceRequestaSERKS0_(i22 + 992 | 0, i26) | 0;
     HEAP32[i22 + 1176 >> 2] = HEAP32[i6 + 184 >> 2];
     i27 = i6 + 188 | 0;
     i28 = HEAP32[i27 >> 2] | 0;
     if ((i28 | 0) != 0) {
      i29 = i28 + 8 | 0;
      HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 1;
     }
     i29 = i22 + 1180 | 0;
     i30 = HEAP32[i29 >> 2] | 0;
     HEAP32[i29 >> 2] = i28;
     do {
      if ((i30 | 0) != 0) {
       i28 = i30 + 8 | 0;
       i29 = i28 | 0;
       i31 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
       if ((i31 | 0) != 0) {
        HEAP32[i29 >> 2] = i31;
        break;
       }
       i31 = i28 - 8 | 0;
       if ((i31 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i31 >> 2] | 0) + 4 >> 2] & 127](i31);
      }
     } while (0);
     __ZN7WebCore15ResourceRequestC2Ev(i7);
     __ZN7WebCore15ResourceRequestaSERKS0_(i22 + 1184 | 0, i7) | 0;
     __ZN7WebCore15ResourceRequestD2Ev(i7);
     __ZN7WebCore13PolicyChecker9stopCheckEv(HEAP32[i19 >> 2] | 0);
     i30 = HEAP32[i19 >> 2] | 0;
     i31 = __ZN7WebCore14DocumentLoader7requestEv(i2) | 0;
     i28 = i8 | 0;
     HEAP32[i28 >> 2] = i18;
     if (!i17) {
      i29 = i18 | 0;
      HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 1;
     }
     i29 = i9 + 16 | 0;
     i32 = i9;
     HEAP32[i29 >> 2] = i32;
     HEAP32[i9 >> 2] = H_BASE + 1416;
     HEAP32[i9 + 4 >> 2] = i1;
     __ZN7WebCore13PolicyChecker21checkNavigationPolicyERKNS_15ResourceRequestEPNS_14DocumentLoaderEN3WTF10PassRefPtrINS_9FormStateEEENSt3__18functionIFvS3_S9_bEEE(i30, i31, i22, i8, i9);
     i31 = HEAP32[i29 >> 2] | 0;
     do {
      if ((i31 | 0) == (i32 | 0)) {
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 16 >> 2] & 127](i32);
      } else {
       if ((i31 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i31 >> 2] | 0) + 20 >> 2] & 127](i31);
      }
     } while (0);
     i31 = HEAP32[i28 >> 2] | 0;
     if ((i31 | 0) != 0) {
      __ZN3WTF10RefCountedIN7WebCore9FormStateEE5derefEv(i31 | 0);
     }
     i31 = HEAP32[i27 >> 2] | 0;
     do {
      if ((i31 | 0) != 0) {
       i32 = i31 + 8 | 0;
       i29 = i32 | 0;
       i30 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
       if ((i30 | 0) != 0) {
        HEAP32[i29 >> 2] = i30;
        break;
       }
       i30 = i32 - 8 | 0;
       if ((i30 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i30 >> 2] | 0) + 4 >> 2] & 127](i30);
      }
     } while (0);
     __ZN7WebCore15ResourceRequestD2Ev(i26);
     if (i25) {
      break;
     }
     i31 = i22 + 4 | 0;
     i27 = i31 | 0;
     i28 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
     if ((i28 | 0) != 0) {
      HEAP32[i27 >> 2] = i28;
      break;
     }
     i28 = i31 - 4 | 0;
     if ((i28 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i28 >> 2] | 0) + 4 >> 2] & 127](i28);
    }
   } while (0);
   L59 : do {
    if ((i24 | 0) == 43) {
     i21 = __ZNK7WebCore9FrameTree6parentEv((HEAP32[i14 >> 2] | 0) + 40 | 0) | 0;
     do {
      if ((i21 | 0) != 0) {
       i23 = HEAP32[(HEAP32[i21 + 128 >> 2] | 0) + 988 >> 2] | 0;
       if ((i23 | 0) != 0) {
        i16 = i23 | 0;
        HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
       }
       i16 = i2 + 988 | 0;
       i28 = HEAP32[i16 >> 2] | 0;
       HEAP32[i16 >> 2] = i23;
       if ((i28 | 0) == 0) {
        break;
       }
       i23 = i28 | 0;
       i16 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
       if ((i16 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i28);
        break;
       } else {
        HEAP32[i23 >> 2] = i16;
        break;
       }
      }
     } while (0);
     __ZN7WebCore13PolicyChecker9stopCheckEv(HEAP32[i19 >> 2] | 0);
     i21 = i1 + 56 | 0;
     i22 = HEAP32[i21 >> 2] | 0;
     do {
      if ((i22 | 0) != (i2 | 0)) {
       i25 = (i2 | 0) == 0;
       if (i25) {
        i33 = i22;
       } else {
        __ZN7WebCore14DocumentLoader8setFrameEPNS_5FrameE(i2, HEAP32[i14 >> 2] | 0);
        i33 = HEAP32[i21 >> 2] | 0;
       }
       do {
        if ((i33 | 0) != 0) {
         if ((i33 | 0) == (HEAP32[i1 + 52 >> 2] | 0)) {
          break;
         }
         if ((i33 | 0) == (HEAP32[i1 + 48 >> 2] | 0)) {
          break;
         }
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i33 >> 2] | 0) + 40 >> 2] & 127](i33);
        }
       } while (0);
       if (!i25) {
        i26 = i2 + 4 | 0;
        HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 1;
       }
       i26 = HEAP32[i21 >> 2] | 0;
       HEAP32[i21 >> 2] = i2;
       if ((i26 | 0) == 0) {
        break;
       }
       i16 = i26 + 4 | 0;
       i26 = i16 | 0;
       i23 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
       if ((i23 | 0) != 0) {
        HEAP32[i26 >> 2] = i23;
        break;
       }
       i23 = i16 - 4 | 0;
       if ((i23 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i23 >> 2] | 0) + 4 >> 2] & 127](i23);
      }
     } while (0);
     i21 = HEAP32[(__ZNK7WebCore19ResourceRequestBase3urlEv(i2 + 992 | 0) | 0) >> 2] | 0;
     if ((i21 | 0) == 0) {
      i24 = 66;
     } else {
      if ((HEAP32[i21 + 4 >> 2] | 0) == 0) {
       i24 = 66;
      }
     }
     if ((i24 | 0) == 66) {
      i21 = __ZN7WebCore14DocumentLoader7requestEv(i2) | 0;
      __ZN7WebCore16NavigationActionC1ERKNS_15ResourceRequestENS_13FrameLoadTypeEb(i10, i21, HEAP32[(HEAP32[i19 >> 2] | 0) + 8 >> 2] | 0, i20);
      i21 = i10 | 0;
      __ZN7WebCore15ResourceRequestaSERKS0_(i2 + 992 | 0, i21) | 0;
      HEAP32[i2 + 1176 >> 2] = HEAP32[i10 + 184 >> 2];
      i22 = i10 + 188 | 0;
      i23 = HEAP32[i22 >> 2] | 0;
      if ((i23 | 0) != 0) {
       i16 = i23 + 8 | 0;
       HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
      }
      i16 = i2 + 1180 | 0;
      i26 = HEAP32[i16 >> 2] | 0;
      HEAP32[i16 >> 2] = i23;
      do {
       if ((i26 | 0) != 0) {
        i23 = i26 + 8 | 0;
        i16 = i23 | 0;
        i28 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
        if ((i28 | 0) != 0) {
         HEAP32[i16 >> 2] = i28;
         break;
        }
        i28 = i23 - 8 | 0;
        if ((i28 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i28 >> 2] | 0) + 4 >> 2] & 127](i28);
       }
      } while (0);
      i26 = HEAP32[i22 >> 2] | 0;
      do {
       if ((i26 | 0) != 0) {
        i28 = i26 + 8 | 0;
        i23 = i28 | 0;
        i16 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
        if ((i16 | 0) != 0) {
         HEAP32[i23 >> 2] = i16;
         break;
        }
        i16 = i28 - 8 | 0;
        if ((i16 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 127](i16);
       }
      } while (0);
      __ZN7WebCore15ResourceRequestD2Ev(i21);
     }
     i26 = HEAP32[(HEAP32[i14 >> 2] | 0) + 448 >> 2] | 0;
     do {
      if ((i26 | 0) != 0) {
       if (__ZNK7WebCore23FrameLoaderStateMachine30committedFirstRealDocumentLoadEv(i1 + 24 | 0) | 0) {
        break;
       }
       if (__ZN7WebCore4Node23dispatchBeforeLoadEventERKN3WTF6StringE(i26 | 0, __ZNK7WebCore19ResourceRequestBase3urlEv(__ZN7WebCore14DocumentLoader7requestEv(i2) | 0) | 0) | 0) {
        break;
       }
       __ZN7WebCore14DocumentLoader7requestEv(i2) | 0;
       i22 = i11 | 0;
       HEAP32[i22 >> 2] = i18;
       if (!i17) {
        i16 = i18 | 0;
        HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
       }
       __ZN7WebCore11FrameLoader33continueLoadAfterNavigationPolicyERKNS_15ResourceRequestEN3WTF10PassRefPtrINS_9FormStateEEEb(i1, 0, i11, 0);
       i16 = HEAP32[i22 >> 2] | 0;
       if ((i16 | 0) == 0) {
        break L59;
       }
       __ZN3WTF10RefCountedIN7WebCore9FormStateEE5derefEv(i16 | 0);
       break L59;
      }
     } while (0);
     i26 = HEAP32[i19 >> 2] | 0;
     i21 = __ZN7WebCore14DocumentLoader7requestEv(i2) | 0;
     i16 = i12 | 0;
     HEAP32[i16 >> 2] = i18;
     if (!i17) {
      i22 = i18 | 0;
      HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
     }
     i22 = i13 + 16 | 0;
     i28 = i13;
     HEAP32[i22 >> 2] = i28;
     HEAP32[i13 >> 2] = H_BASE + 1376;
     HEAP32[i13 + 4 >> 2] = i1;
     __ZN7WebCore13PolicyChecker21checkNavigationPolicyERKNS_15ResourceRequestEPNS_14DocumentLoaderEN3WTF10PassRefPtrINS_9FormStateEEENSt3__18functionIFvS3_S9_bEEE(i26, i21, i2, i12, i13);
     i21 = HEAP32[i22 >> 2] | 0;
     do {
      if ((i21 | 0) == (i28 | 0)) {
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 16 >> 2] & 127](i28);
      } else {
       if ((i21 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 20 >> 2] & 127](i21);
      }
     } while (0);
     i21 = HEAP32[i16 >> 2] | 0;
     if ((i21 | 0) == 0) {
      break;
     }
     __ZN3WTF10RefCountedIN7WebCore9FormStateEE5derefEv(i21 | 0);
    }
   } while (0);
   if (i17) {
    break;
   }
   __ZN3WTF10RefCountedIN7WebCore9FormStateEE5derefEv(i18 | 0);
  }
 } while (0);
 i13 = i15 + 4 | 0;
 i15 = i13 | 0;
 i12 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
 if ((i12 | 0) != 0) {
  HEAP32[i15 >> 2] = i12;
  STACKTOP = i5;
  return;
 }
 i12 = i13 - 4 | 0;
 if ((i12 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 127](i12);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore11FrameLoader32setOriginalURLForDownloadRequestERNS_15ResourceRequestE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 376 | 0;
 i4 = i3 | 0;
 i5 = i3 + 48 | 0;
 i6 = i3 + 96 | 0;
 i7 = i3 + 144 | 0;
 i8 = i3 + 152 | 0;
 i9 = i3 + 200 | 0;
 i10 = i3 + 208 | 0;
 i11 = i3 + 216 | 0;
 i12 = i3 + 224 | 0;
 i13 = i3 + 232 | 0;
 i14 = i3 + 240 | 0;
 i15 = i3 + 248 | 0;
 i16 = i3 + 256 | 0;
 i17 = i3 + 264 | 0;
 i18 = i3 + 272 | 0;
 i19 = i3 + 280 | 0;
 i20 = i3 + 328 | 0;
 i21 = i6 | 0;
 HEAP32[i21 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i6);
 i22 = i2 | 0;
 __ZNK7WebCore19ResourceRequestBase15httpHeaderFieldEPKc(i7, i22, H_BASE + 144 | 0);
 i2 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i7 = i2 | 0;
   i23 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i23 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
   } else {
    HEAP32[i7 >> 2] = i23;
   }
   i23 = HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] | 0;
   i7 = i4 | 0;
   HEAP32[i7 >> 2] = 0;
   __ZN7WebCore3URL10invalidateEv(i4);
   i24 = i23 + 56 | 0;
   i23 = __ZNK7WebCore21BackForwardController9backCountEv(HEAP32[i24 >> 2] | 0) | 0;
   L7 : do {
    if ((i23 | 0) < 0) {
     i25 = 19;
    } else {
     i26 = i5 | 0;
     i27 = i5 + 4 | 0;
     i28 = i4 + 4 | 0;
     i29 = i5 + 8 | 0;
     i30 = i4 + 8 | 0;
     i31 = i5 + 12 | 0;
     i32 = i4 + 12 | 0;
     i33 = i5 + 16 | 0;
     i34 = i4 + 16 | 0;
     i35 = i5 + 20 | 0;
     i36 = i4 + 20 | 0;
     i37 = i5 + 24 | 0;
     i38 = i4 + 24 | 0;
     i39 = i5 + 28 | 0;
     i40 = i4 + 28 | 0;
     i41 = i5 + 32 | 0;
     i42 = i4 + 32 | 0;
     i43 = i5 + 36 | 0;
     i44 = i4 + 36 | 0;
     i45 = i5 + 40 | 0;
     i46 = i4 + 40 | 0;
     i47 = i5 + 44 | 0;
     i48 = i4 + 44 | 0;
     i49 = 0;
     while (1) {
      i50 = __ZN7WebCore21BackForwardController11itemAtIndexEi(HEAP32[i24 >> 2] | 0, -i49 | 0) | 0;
      if ((i50 | 0) != 0) {
       __ZNK7WebCore11HistoryItem11originalURLEv(i5, i50);
       i50 = HEAP32[i26 >> 2] | 0;
       HEAP32[i26 >> 2] = 0;
       i51 = HEAP32[i7 >> 2] | 0;
       HEAP32[i7 >> 2] = i50;
       do {
        if ((i51 | 0) != 0) {
         i50 = i51 | 0;
         i52 = (HEAP32[i50 >> 2] | 0) - 2 | 0;
         if ((i52 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i51);
          break;
         } else {
          HEAP32[i50 >> 2] = i52;
          break;
         }
        }
       } while (0);
       HEAP8[i28] = HEAP8[i27] & 3 | HEAP8[i28] & -4;
       HEAP32[i30 >> 2] = HEAP32[i29 >> 2];
       HEAP32[i32 >> 2] = HEAP32[i31 >> 2];
       HEAP32[i34 >> 2] = HEAP32[i33 >> 2];
       HEAP32[i36 >> 2] = HEAP32[i35 >> 2];
       HEAP32[i38 >> 2] = HEAP32[i37 >> 2];
       HEAP32[i40 >> 2] = HEAP32[i39 >> 2];
       HEAP32[i42 >> 2] = HEAP32[i41 >> 2];
       HEAP32[i44 >> 2] = HEAP32[i43 >> 2];
       HEAP32[i46 >> 2] = HEAP32[i45 >> 2];
       HEAP32[i48 >> 2] = HEAP32[i47 >> 2];
       i51 = HEAP32[i26 >> 2] | 0;
       do {
        if ((i51 | 0) != 0) {
         i52 = i51 | 0;
         i50 = (HEAP32[i52 >> 2] | 0) - 2 | 0;
         if ((i50 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i51);
          break;
         } else {
          HEAP32[i52 >> 2] = i50;
          break;
         }
        }
       } while (0);
       i53 = HEAP32[i7 >> 2] | 0;
       if ((i53 | 0) != 0) {
        break;
       }
      }
      i51 = i49 + 1 | 0;
      if ((i51 | 0) > (i23 | 0)) {
       i25 = 19;
       break L7;
      } else {
       i49 = i51;
      }
     }
     HEAP32[i7 >> 2] = 0;
     HEAP32[i8 >> 2] = i53;
     i49 = i8 + 4 | 0;
     HEAP8[i49] = HEAP8[i28] & 3 | HEAP8[i49] & -4;
     HEAP32[i8 + 8 >> 2] = HEAP32[i30 >> 2];
     HEAP32[i8 + 12 >> 2] = HEAP32[i32 >> 2];
     HEAP32[i8 + 16 >> 2] = HEAP32[i34 >> 2];
     HEAP32[i8 + 20 >> 2] = HEAP32[i36 >> 2];
     HEAP32[i8 + 24 >> 2] = HEAP32[i38 >> 2];
     HEAP32[i8 + 28 >> 2] = HEAP32[i40 >> 2];
     HEAP32[i8 + 32 >> 2] = HEAP32[i42 >> 2];
     HEAP32[i8 + 36 >> 2] = HEAP32[i44 >> 2];
     HEAP32[i8 + 40 >> 2] = HEAP32[i46 >> 2];
     HEAP32[i8 + 44 >> 2] = HEAP32[i48 >> 2];
    }
   } while (0);
   do {
    if ((i25 | 0) == 19) {
     HEAP32[i8 >> 2] = 0;
     __ZN7WebCore3URL10invalidateEv(i8);
     i23 = HEAP32[i7 >> 2] | 0;
     if ((i23 | 0) == 0) {
      break;
     }
     i24 = i23 | 0;
     i49 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
     if ((i49 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i23);
      break;
     } else {
      HEAP32[i24 >> 2] = i49;
      break;
     }
    }
   } while (0);
   i7 = i8 | 0;
   i49 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = 0;
   i24 = HEAP32[i21 >> 2] | 0;
   HEAP32[i21 >> 2] = i49;
   do {
    if ((i24 | 0) != 0) {
     i49 = i24 | 0;
     i23 = (HEAP32[i49 >> 2] | 0) - 2 | 0;
     if ((i23 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i24);
      break;
     } else {
      HEAP32[i49 >> 2] = i23;
      break;
     }
    }
   } while (0);
   i24 = HEAP8[i8 + 4 | 0] | 0;
   i23 = i6 + 4 | 0;
   HEAP8[i23] = HEAP8[i23] & -4 | i24 & 1 | i24 & 2;
   HEAP32[i6 + 8 >> 2] = HEAP32[i8 + 8 >> 2];
   HEAP32[i6 + 12 >> 2] = HEAP32[i8 + 12 >> 2];
   HEAP32[i6 + 16 >> 2] = HEAP32[i8 + 16 >> 2];
   HEAP32[i6 + 20 >> 2] = HEAP32[i8 + 20 >> 2];
   HEAP32[i6 + 24 >> 2] = HEAP32[i8 + 24 >> 2];
   HEAP32[i6 + 28 >> 2] = HEAP32[i8 + 28 >> 2];
   HEAP32[i6 + 32 >> 2] = HEAP32[i8 + 32 >> 2];
   HEAP32[i6 + 36 >> 2] = HEAP32[i8 + 36 >> 2];
   HEAP32[i6 + 40 >> 2] = HEAP32[i8 + 40 >> 2];
   HEAP32[i6 + 44 >> 2] = HEAP32[i8 + 44 >> 2];
   i24 = HEAP32[i7 >> 2] | 0;
   if ((i24 | 0) == 0) {
    break;
   }
   i23 = i24 | 0;
   i49 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
   if ((i49 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i24);
    break;
   } else {
    HEAP32[i23 >> 2] = i49;
    break;
   }
  }
 } while (0);
 if ((HEAP32[i21 >> 2] | 0) == 0) {
  i8 = __ZNK7WebCore19ResourceRequestBase3urlEv(i22) | 0;
  i25 = HEAP32[i8 >> 2] | 0;
  if ((i25 | 0) != 0) {
   i53 = i25 | 0;
   HEAP32[i53 >> 2] = (HEAP32[i53 >> 2] | 0) + 2;
  }
  i53 = HEAP32[i21 >> 2] | 0;
  HEAP32[i21 >> 2] = i25;
  do {
   if ((i53 | 0) != 0) {
    i25 = i53 | 0;
    i5 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
    if ((i5 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i53);
     break;
    } else {
     HEAP32[i25 >> 2] = i5;
     break;
    }
   }
  } while (0);
  i53 = i8 + 4 | 0;
  i5 = i6 + 4 | 0;
  i25 = HEAP8[i5] & -2 | HEAP8[i53] & 1;
  HEAP8[i5] = i25;
  HEAP8[i5] = i25 & -3 | HEAP8[i53] & 2;
  HEAP32[i6 + 8 >> 2] = HEAP32[i8 + 8 >> 2];
  HEAP32[i6 + 12 >> 2] = HEAP32[i8 + 12 >> 2];
  HEAP32[i6 + 16 >> 2] = HEAP32[i8 + 16 >> 2];
  HEAP32[i6 + 20 >> 2] = HEAP32[i8 + 20 >> 2];
  HEAP32[i6 + 24 >> 2] = HEAP32[i8 + 24 >> 2];
  HEAP32[i6 + 28 >> 2] = HEAP32[i8 + 28 >> 2];
  HEAP32[i6 + 32 >> 2] = HEAP32[i8 + 32 >> 2];
  HEAP32[i6 + 36 >> 2] = HEAP32[i8 + 36 >> 2];
  HEAP32[i6 + 40 >> 2] = HEAP32[i8 + 40 >> 2];
  HEAP32[i6 + 44 >> 2] = HEAP32[i8 + 44 >> 2];
 }
 __ZNK7WebCore3URL8protocolEv(i9, i6);
 i8 = i9 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 L57 : do {
  if ((i9 | 0) != 0) {
   do {
    if ((HEAP32[i9 + 4 >> 2] | 0) == 0) {
     i54 = 0;
    } else {
     __ZNK7WebCore3URL4hostEv(i10, i6);
     i53 = HEAP32[i10 >> 2] | 0;
     if ((i53 | 0) == 0) {
      i54 = 0;
      break;
     }
     i25 = (HEAP32[i53 + 4 >> 2] | 0) != 0;
     i5 = i53 | 0;
     i4 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
     if ((i4 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i53);
      i54 = i25;
      break;
     } else {
      HEAP32[i5 >> 2] = i4;
      i54 = i25;
      break;
     }
    }
   } while (0);
   i7 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i7 | 0) == 0) {
     if (!i54) {
      break L57;
     }
    } else {
     i25 = i7 | 0;
     i4 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
     if ((i4 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i7);
      if (i54) {
       break;
      } else {
       break L57;
      }
     } else {
      HEAP32[i25 >> 2] = i4;
      if (i54) {
       break;
      } else {
       break L57;
      }
     }
    }
   } while (0);
   i7 = __ZNK7WebCore3URL4portEv(i6) | 0;
   i4 = i11 | 0;
   HEAP32[i4 >> 2] = 0;
   do {
    if (i7 << 16 >> 16 == 0) {
     __ZNK7WebCore3URL8protocolEv(i17, i6);
     __ZNK7WebCore3URL4hostEv(i18, i6);
     __ZN3WTF10makeStringINS_6StringEPKcS1_EES1_T_T0_T1_(i16, i17, H_BASE + 1080 | 0, i18);
     i25 = i16 | 0;
     i5 = HEAP32[i25 >> 2] | 0;
     HEAP32[i25 >> 2] = 0;
     i25 = HEAP32[i4 >> 2] | 0;
     HEAP32[i4 >> 2] = i5;
     do {
      if ((i25 | 0) != 0) {
       i5 = i25 | 0;
       i53 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
       if ((i53 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i25);
        break;
       } else {
        HEAP32[i5 >> 2] = i53;
        break;
       }
      }
     } while (0);
     i25 = HEAP32[i18 >> 2] | 0;
     do {
      if ((i25 | 0) != 0) {
       i48 = i25 | 0;
       i46 = (HEAP32[i48 >> 2] | 0) - 2 | 0;
       if ((i46 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i25);
        break;
       } else {
        HEAP32[i48 >> 2] = i46;
        break;
       }
      }
     } while (0);
     i25 = HEAP32[i17 >> 2] | 0;
     if ((i25 | 0) == 0) {
      break;
     }
     i46 = i25 | 0;
     i48 = (HEAP32[i46 >> 2] | 0) - 2 | 0;
     if ((i48 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i25);
      break;
     } else {
      HEAP32[i46 >> 2] = i48;
      break;
     }
    } else {
     __ZNK7WebCore3URL8protocolEv(i13, i6);
     __ZNK7WebCore3URL4hostEv(i14, i6);
     __ZN3WTF6String6numberEj(i15, i7 & 65535);
     __ZN3WTF10makeStringINS_6StringEPKcS1_S3_S1_EES1_T_T0_T1_T2_T3_(i12, i13, H_BASE + 1080 | 0, i14, H_BASE + 1072 | 0, i15);
     i48 = i12 | 0;
     i46 = HEAP32[i48 >> 2] | 0;
     HEAP32[i48 >> 2] = 0;
     i48 = HEAP32[i4 >> 2] | 0;
     HEAP32[i4 >> 2] = i46;
     do {
      if ((i48 | 0) != 0) {
       i46 = i48 | 0;
       i25 = (HEAP32[i46 >> 2] | 0) - 2 | 0;
       if ((i25 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i48);
        break;
       } else {
        HEAP32[i46 >> 2] = i25;
        break;
       }
      }
     } while (0);
     i48 = HEAP32[i15 >> 2] | 0;
     do {
      if ((i48 | 0) != 0) {
       i25 = i48 | 0;
       i46 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
       if ((i46 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i48);
        break;
       } else {
        HEAP32[i25 >> 2] = i46;
        break;
       }
      }
     } while (0);
     i48 = HEAP32[i14 >> 2] | 0;
     do {
      if ((i48 | 0) != 0) {
       i46 = i48 | 0;
       i25 = (HEAP32[i46 >> 2] | 0) - 2 | 0;
       if ((i25 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i48);
        break;
       } else {
        HEAP32[i46 >> 2] = i25;
        break;
       }
      }
     } while (0);
     i48 = HEAP32[i13 >> 2] | 0;
     if ((i48 | 0) == 0) {
      break;
     }
     i25 = i48 | 0;
     i46 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
     if ((i46 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i48);
      break;
     } else {
      HEAP32[i25 >> 2] = i46;
      break;
     }
    }
   } while (0);
   i7 = i20 | 0;
   HEAP32[i7 >> 2] = 0;
   __ZN7WebCore3URL10invalidateEv(i20);
   __ZN7WebCore3URLC1ERKS0_RKN3WTF6StringE(i19, i20, i11);
   __ZN7WebCore19ResourceRequestBase23setFirstPartyForCookiesERKNS_3URLE(i22, i19);
   i46 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i46 | 0) != 0) {
     i25 = i46 | 0;
     i48 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
     if ((i48 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i46);
      break;
     } else {
      HEAP32[i25 >> 2] = i48;
      break;
     }
    }
   } while (0);
   i46 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i46 | 0) != 0) {
     i48 = i46 | 0;
     i25 = (HEAP32[i48 >> 2] | 0) - 2 | 0;
     if ((i25 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i46);
      break;
     } else {
      HEAP32[i48 >> 2] = i25;
      break;
     }
    }
   } while (0);
   i46 = HEAP32[i4 >> 2] | 0;
   if ((i46 | 0) == 0) {
    break;
   }
   i7 = i46 | 0;
   i25 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i25 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i46);
    break;
   } else {
    HEAP32[i7 >> 2] = i25;
    break;
   }
  }
 } while (0);
 i19 = HEAP32[i21 >> 2] | 0;
 if ((i19 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i21 = i19 | 0;
 i22 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
 if ((i22 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i19);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i21 >> 2] = i22;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore11FrameLoader10submitFormEN3WTF10PassRefPtrINS_14FormSubmissionEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 208 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = i3 + 88 | 0;
 i11 = i3 + 96 | 0;
 i12 = i3 + 144 | 0;
 i13 = i3 + 192 | 0;
 i14 = i3 + 200 | 0;
 i15 = i1 | 0;
 i16 = HEAP32[i15 >> 2] | 0;
 if ((HEAP32[i16 + 32 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i17 = i2 | 0;
 i2 = HEAP32[i17 >> 2] | 0;
 i18 = HEAP32[i2 + 8 >> 2] | 0;
 if ((i18 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i18 + 4 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i18 = HEAP32[i16 + 456 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   if ((HEAP32[i18 + 96 >> 2] & 8 | 0) == 0) {
    break;
   }
   i16 = HEAP32[(HEAP32[i18 >> 2] | 0) + 316 >> 2] | 0;
   __ZNK7WebCore3URL30stringCenterEllipsizedToLengthEj(i8, i2 + 8 | 0, 1024);
   i19 = i8 | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = 1;
    } else {
     i23 = i20 | 0;
     i24 = HEAP32[i23 >> 2] | 0;
     i25 = i24 + 2 | 0;
     HEAP32[i23 >> 2] = i24 + 4;
     if ((i25 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i20);
      i26 = HEAP32[i23 >> 2] | 0;
     } else {
      HEAP32[i23 >> 2] = i25;
      i26 = i25;
     }
     i25 = i26 + 2 | 0;
     HEAP32[i23 >> 2] = i26 + 4;
     if ((i25 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i20);
      i21 = i20;
      i22 = 0;
      break;
     } else {
      HEAP32[i23 >> 2] = i25;
      i21 = i20;
      i22 = 0;
      break;
     }
    }
   } while (0);
   HEAP32[i6 >> 2] = H_BASE + 1168;
   i20 = i6 + 4 | 0;
   HEAP32[i20 >> 2] = i21;
   i25 = (i21 | 0) == 0;
   if (!i25) {
    i23 = i21 | 0;
    HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 2;
   }
   __ZN3WTF13tryMakeStringINS_12StringAppendIPKcNS_6StringEEES3_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i5, i6, H_BASE + 936 | 0);
   i23 = i5 | 0;
   i24 = HEAP32[i23 >> 2] | 0;
   HEAP32[i23 >> 2] = 0;
   i23 = HEAP32[i20 >> 2] | 0;
   do {
    if ((i23 | 0) != 0) {
     i20 = i23 | 0;
     i27 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
     if ((i27 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i23);
      break;
     } else {
      HEAP32[i20 >> 2] = i27;
      break;
     }
    }
   } while (0);
   if ((i24 | 0) == 0) {
    _WTFCrash();
   }
   i23 = i7 | 0;
   HEAP32[i23 >> 2] = i24;
   FUNCTION_TABLE_viiiii[i16 & 1](i18, 8, 3, i7, 0);
   i27 = HEAP32[i23 >> 2] | 0;
   do {
    if ((i27 | 0) != 0) {
     i23 = i27 | 0;
     i20 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
     if ((i20 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i27);
      break;
     } else {
      HEAP32[i23 >> 2] = i20;
      break;
     }
    }
   } while (0);
   do {
    if (!i25) {
     i27 = i21 | 0;
     i16 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
     if ((i16 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i21);
      break;
     } else {
      HEAP32[i27 >> 2] = i16;
      break;
     }
    }
   } while (0);
   do {
    if (!i22) {
     i25 = i21 | 0;
     i16 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
     if ((i16 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i21);
      break;
     } else {
      HEAP32[i25 >> 2] = i16;
      break;
     }
    }
   } while (0);
   i16 = HEAP32[i19 >> 2] | 0;
   if ((i16 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   i25 = i16 | 0;
   i27 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
   if ((i27 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i16);
    STACKTOP = i3;
    return;
   } else {
    HEAP32[i25 >> 2] = i27;
    STACKTOP = i3;
    return;
   }
  }
 } while (0);
 if (__ZN7WebCore20protocolIsJavaScriptERKN3WTF6StringE(i2 + 8 | 0) | 0) {
  i2 = HEAP32[(HEAP32[(HEAP32[i15 >> 2] | 0) + 456 >> 2] | 0) + 104 >> 2] | 0;
  i21 = HEAP32[i17 >> 2] | 0;
  i22 = i9 | 0;
  i7 = HEAP32[i21 + 8 >> 2] | 0;
  HEAP32[i22 >> 2] = i7;
  if ((i7 | 0) == 0) {
   i28 = 0;
   i29 = i9 + 4 | 0;
  } else {
   i18 = i7 | 0;
   HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 2;
   i18 = i9 + 4 | 0;
   i28 = HEAP8[i18] & -2;
   i29 = i18;
  }
  i18 = i21 + 12 | 0;
  i7 = i28 | HEAP8[i18] & 1;
  HEAP8[i29] = i7;
  HEAP8[i29] = i7 & -3 | HEAP8[i18] & 2;
  HEAP32[i9 + 8 >> 2] = HEAP32[i21 + 16 >> 2];
  HEAP32[i9 + 12 >> 2] = HEAP32[i21 + 20 >> 2];
  HEAP32[i9 + 16 >> 2] = HEAP32[i21 + 24 >> 2];
  HEAP32[i9 + 20 >> 2] = HEAP32[i21 + 28 >> 2];
  HEAP32[i9 + 24 >> 2] = HEAP32[i21 + 32 >> 2];
  HEAP32[i9 + 28 >> 2] = HEAP32[i21 + 36 >> 2];
  HEAP32[i9 + 32 >> 2] = HEAP32[i21 + 40 >> 2];
  HEAP32[i9 + 36 >> 2] = HEAP32[i21 + 44 >> 2];
  HEAP32[i9 + 40 >> 2] = HEAP32[i21 + 48 >> 2];
  HEAP32[i9 + 44 >> 2] = HEAP32[i21 + 52 >> 2];
  i21 = __ZNK7WebCore21ContentSecurityPolicy15allowFormActionERKNS_3URLENS0_15ReportingStatusE(i2, i9, 0) | 0;
  i9 = HEAP32[i22 >> 2] | 0;
  do {
   if ((i9 | 0) != 0) {
    i22 = i9 | 0;
    i2 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
    if ((i2 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i9);
     break;
    } else {
     HEAP32[i22 >> 2] = i2;
     break;
    }
   }
  } while (0);
  if (!i21) {
   STACKTOP = i3;
   return;
  }
  i21 = i1 + 68 | 0;
  HEAP8[i21] = 1;
  __ZN7WebCore16ScriptController22executeIfJavaScriptURLERKNS_3URLENS_36ShouldReplaceDocumentIfJavaScriptURLE(HEAP32[(HEAP32[i15 >> 2] | 0) + 460 >> 2] | 0, (HEAP32[i17 >> 2] | 0) + 8 | 0, 1) | 0;
  HEAP8[i21] = 0;
  STACKTOP = i3;
  return;
 }
 i21 = HEAP32[(HEAP32[i17 >> 2] | 0) + 56 >> 2] | 0;
 do {
  if ((i21 | 0) == 0) {
   i9 = i4 | 0;
   HEAP32[i9 >> 2] = 0;
   i30 = i9;
  } else {
   if ((HEAP32[i21 + 16 >> 2] & 16 | 0) == 0) {
    __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i4, i21);
    i30 = i4 | 0;
    break;
   } else {
    i9 = i4 | 0;
    HEAP32[i9 >> 2] = i21;
    i2 = i21 | 0;
    HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
    i30 = i9;
    break;
   }
  }
 } while (0);
 i21 = i10 | 0;
 HEAP32[i21 >> 2] = HEAP32[i30 >> 2];
 i30 = __ZN7WebCore11FrameLoader22findFrameForNavigationERKN3WTF12AtomicStringEPNS_8DocumentE(i1, i10, HEAP32[(HEAP32[(HEAP32[i17 >> 2] | 0) + 64 >> 2] | 0) + 20 >> 2] | 0) | 0;
 i10 = HEAP32[i21 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i21 = i10 | 0;
   i4 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i21 >> 2] = i4;
    break;
   }
  }
 } while (0);
 do {
  if ((i30 | 0) == 0) {
   do {
    if (!(__ZN7WebCore9DOMWindow10allowPopUpEPNS_5FrameE(HEAP32[i15 >> 2] | 0) | 0)) {
     if (__ZN7WebCore16ScriptController21processingUserGestureEv() | 0) {
      break;
     }
     STACKTOP = i3;
     return;
    }
   } while (0);
   i31 = HEAP32[i15 >> 2] | 0;
  } else {
   i19 = (HEAP32[i17 >> 2] | 0) + 56 | 0;
   i10 = HEAP32[i19 >> 2] | 0;
   HEAP32[i19 >> 2] = 0;
   if ((i10 | 0) == 0) {
    i31 = i30;
    break;
   }
   i19 = i10 | 0;
   i4 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    i31 = i30;
    break;
   } else {
    HEAP32[i19 >> 2] = i4;
    i31 = i30;
    break;
   }
  }
 } while (0);
 if ((HEAP32[i31 + 32 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 do {
  if (__ZNK7WebCore9FrameTree14isDescendantOfEPKNS_5FrameE((HEAP32[i15 >> 2] | 0) + 40 | 0, i31) | 0) {
   __ZNK7WebCore14FormSubmission10requestURLEv(i11, HEAP32[i17 >> 2] | 0);
   i30 = i1 + 88 | 0;
   i4 = i11 | 0;
   i19 = __ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i30 >> 2] | 0, HEAP32[i4 >> 2] | 0) | 0;
   i10 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i10 | 0) != 0) {
     i4 = i10 | 0;
     i21 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
     if ((i21 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i10);
      break;
     } else {
      HEAP32[i4 >> 2] = i21;
      break;
     }
    }
   } while (0);
   if (i19) {
    STACKTOP = i3;
    return;
   }
   __ZNK7WebCore14FormSubmission10requestURLEv(i12, HEAP32[i17 >> 2] | 0);
   i10 = i12 | 0;
   i21 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = 0;
   i4 = HEAP32[i30 >> 2] | 0;
   HEAP32[i30 >> 2] = i21;
   do {
    if ((i4 | 0) != 0) {
     i21 = i4 | 0;
     i9 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
     if ((i9 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i4);
      break;
     } else {
      HEAP32[i21 >> 2] = i9;
      break;
     }
    }
   } while (0);
   i4 = HEAP8[i12 + 4 | 0] | 0;
   i30 = i1 + 92 | 0;
   HEAP8[i30] = HEAP8[i30] & -4 | i4 & 1 | i4 & 2;
   HEAP32[i1 + 96 >> 2] = HEAP32[i12 + 8 >> 2];
   HEAP32[i1 + 100 >> 2] = HEAP32[i12 + 12 >> 2];
   HEAP32[i1 + 104 >> 2] = HEAP32[i12 + 16 >> 2];
   HEAP32[i1 + 108 >> 2] = HEAP32[i12 + 20 >> 2];
   HEAP32[i1 + 112 >> 2] = HEAP32[i12 + 24 >> 2];
   HEAP32[i1 + 116 >> 2] = HEAP32[i12 + 28 >> 2];
   HEAP32[i1 + 120 >> 2] = HEAP32[i12 + 32 >> 2];
   HEAP32[i1 + 124 >> 2] = HEAP32[i12 + 36 >> 2];
   HEAP32[i1 + 128 >> 2] = HEAP32[i12 + 40 >> 2];
   HEAP32[i1 + 132 >> 2] = HEAP32[i12 + 44 >> 2];
   i4 = HEAP32[i10 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   i30 = i4 | 0;
   i19 = (HEAP32[i30 >> 2] | 0) - 2 | 0;
   if ((i19 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i30 >> 2] = i19;
    break;
   }
  }
 } while (0);
 __ZN7WebCore8FormData13generateFilesEPNS_8DocumentE(HEAP32[(HEAP32[i17 >> 2] | 0) + 68 >> 2] | 0, HEAP32[(HEAP32[i15 >> 2] | 0) + 456 >> 2] | 0);
 i12 = HEAP32[i17 >> 2] | 0;
 i1 = HEAP32[i15 >> 2] | 0;
 if ((HEAP8[(HEAP32[i1 + 456 >> 2] | 0) + 1581 | 0] & 1) == 0) {
  i32 = i1;
 } else {
  i11 = i1;
  while (1) {
   i1 = __ZNK7WebCore9FrameTree6parentEv(i11 + 40 | 0) | 0;
   if ((HEAP8[(HEAP32[i1 + 456 >> 2] | 0) + 1581 | 0] & 1) == 0) {
    i32 = i1;
    break;
   } else {
    i11 = i1;
   }
  }
 }
 i11 = HEAP32[i32 + 144 >> 2] | 0;
 i32 = (i11 | 0) == 0;
 if (!i32) {
  i1 = i11 | 0;
  HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 4;
 }
 i1 = i12 + 84 | 0;
 i12 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = i11;
 do {
  if ((i12 | 0) != 0) {
   i1 = i12 | 0;
   i19 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
   if ((i19 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i1 >> 2] = i19;
    break;
   }
  }
 } while (0);
 do {
  if (!i32) {
   i12 = i11 | 0;
   i19 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i19 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i12 >> 2] = i19;
    break;
   }
  }
 } while (0);
 i11 = HEAP32[i17 >> 2] | 0;
 __ZNK7WebCore14SecurityOrigin8toStringEv(i13, HEAP32[(HEAP32[(HEAP32[i15 >> 2] | 0) + 456 >> 2] | 0) + 100 >> 2] | 0);
 i15 = i13 | 0;
 i13 = HEAP32[i15 >> 2] | 0;
 if ((i13 | 0) != 0) {
  i32 = i13 | 0;
  HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + 2;
 }
 i32 = i11 + 88 | 0;
 i11 = HEAP32[i32 >> 2] | 0;
 HEAP32[i32 >> 2] = i13;
 do {
  if ((i11 | 0) != 0) {
   i13 = i11 | 0;
   i32 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i32 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i13 >> 2] = i32;
    break;
   }
  }
 } while (0);
 i11 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i15 = i11 | 0;
   i32 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i32 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i15 >> 2] = i32;
    break;
   }
  }
 } while (0);
 i11 = i14 | 0;
 i32 = HEAP32[i17 >> 2] | 0;
 HEAP32[i17 >> 2] = 0;
 HEAP32[i11 >> 2] = i32;
 __ZN7WebCore19NavigationScheduler22scheduleFormSubmissionEN3WTF10PassRefPtrINS_14FormSubmissionEEE(i31 + 376 | 0, i14);
 i14 = HEAP32[i11 >> 2] | 0;
 if ((i14 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i11 = i14 | 0;
 i31 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
 if ((i31 | 0) == 0) {
  __ZN7WebCore14FormSubmissionD2Ev(i14);
  __ZN3WTF8fastFreeEPv(i14);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i11 >> 2] = i31;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore11FrameLoader7loadURLERKNS_3URLERKN3WTF6StringES7_bNS_13FrameLoadTypeENS4_10PassRefPtrINS_5EventEEENS9_INS_9FormStateEEE(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 var i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 696 | 0;
 i10 = i9 | 0;
 i11 = i9 + 8 | 0;
 i12 = i9 + 192 | 0;
 i13 = i9 + 200 | 0;
 i14 = i9 + 208 | 0;
 i15 = i9 + 216 | 0;
 i16 = i9 + 224 | 0;
 i17 = i9 + 232 | 0;
 i18 = i9 + 240 | 0;
 i19 = i9 + 432 | 0;
 i20 = i9 + 440 | 0;
 i21 = i9 + 448 | 0;
 i22 = i9 + 472 | 0;
 i23 = i9 + 656 | 0;
 i24 = i9 + 664 | 0;
 i25 = i9 + 688 | 0;
 if ((HEAP8[i1 + 63 | 0] & 1) != 0) {
  STACKTOP = i9;
  return;
 }
 i26 = i8 | 0;
 i8 = HEAP32[i26 >> 2] | 0;
 HEAP32[i26 >> 2] = 0;
 i26 = (i8 | 0) != 0;
 i27 = i11 | 0;
 __ZN7WebCore19ResourceRequestBaseC2ERKNS_3URLENS_26ResourceRequestCachePolicyE(i27, i2, 0);
 _memset(i11 + 160 | 0, 0, 19) | 0;
 HEAP32[i11 + 180 >> 2] = 15;
 i28 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i28 | 0) != 0) {
   if ((HEAP32[i28 + 4 >> 2] | 0) == 0) {
    break;
   }
   __ZN7WebCore19ResourceRequestBase18setHTTPHeaderFieldEPKcRKN3WTF6StringE(i27, H_BASE + 144 | 0, i3);
   __ZN7WebCore14SecurityOrigin16createFromStringERKN3WTF6StringE(i12, i3);
   i29 = i12 | 0;
   i30 = HEAP32[i29 >> 2] | 0;
   HEAP32[i29 >> 2] = 0;
   __ZNK7WebCore14SecurityOrigin8toStringEv(i13, i30);
   __ZN7WebCore11FrameLoader21addHTTPOriginIfNeededERNS_15ResourceRequestERKN3WTF6StringE(i11, i13);
   i29 = HEAP32[i13 >> 2] | 0;
   do {
    if ((i29 | 0) != 0) {
     i31 = i29 | 0;
     i32 = (HEAP32[i31 >> 2] | 0) - 2 | 0;
     if ((i32 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i29);
      break;
     } else {
      HEAP32[i31 >> 2] = i32;
      break;
     }
    }
   } while (0);
   if ((i30 | 0) == 0) {
    break;
   }
   i29 = i30 | 0;
   if (((tempValue = HEAP32[i29 >> 2] | 0, HEAP32[i29 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN7WebCore14SecurityOriginD2Ev(i30);
   __ZN3WTF8fastFreeEPv(i30);
  }
 } while (0);
 __ZN7WebCore11FrameLoader23addExtraFieldsToRequestERNS_15ResourceRequestENS_13FrameLoadTypeEb(i1, i11, i6, 1);
 if ((i6 | 0) == 9 | (i6 | 0) == 4) {
  __ZN7WebCore19ResourceRequestBase14setCachePolicyENS_26ResourceRequestCachePolicyE(i27, 1);
 }
 do {
  if (i26) {
   i33 = 0;
   i34 = 36;
  } else {
   i13 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i13 | 0) == 0) {
     i12 = i10 | 0;
     HEAP32[i12 >> 2] = 0;
     i35 = i12;
    } else {
     if ((HEAP32[i13 + 16 >> 2] & 16 | 0) == 0) {
      __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i10, i13);
      i35 = i10 | 0;
      break;
     } else {
      i12 = i10 | 0;
      HEAP32[i12 >> 2] = i13;
      i28 = i13 | 0;
      HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 2;
      i35 = i12;
      break;
     }
    }
   } while (0);
   i13 = i14 | 0;
   HEAP32[i13 >> 2] = HEAP32[i35 >> 2];
   i30 = __ZN7WebCore11FrameLoader22findFrameForNavigationERKN3WTF12AtomicStringEPNS_8DocumentE(i1, i14, 0) | 0;
   i12 = HEAP32[i13 >> 2] | 0;
   do {
    if ((i12 | 0) != 0) {
     i13 = i12 | 0;
     i28 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
     if ((i28 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i12);
      break;
     } else {
      HEAP32[i13 >> 2] = i28;
      break;
     }
    }
   } while (0);
   if ((i30 | 0) == 0) {
    i33 = 0;
    i34 = 36;
    break;
   }
   if ((i30 | 0) == (HEAP32[i1 >> 2] | 0)) {
    i33 = 1;
    i34 = 36;
    break;
   }
   __ZN3WTF6StringC1EPKc(i15, H_BASE + 1200 | 0);
   i12 = i16 | 0;
   i28 = i7 | 0;
   i13 = HEAP32[i28 >> 2] | 0;
   HEAP32[i28 >> 2] = 0;
   HEAP32[i12 >> 2] = i13;
   i13 = i17 | 0;
   HEAP32[i13 >> 2] = 0;
   __ZN7WebCore11FrameLoader7loadURLERKNS_3URLERKN3WTF6StringES7_bNS_13FrameLoadTypeENS4_10PassRefPtrINS_5EventEEENS9_INS_9FormStateEEE(i30 + 80 | 0, i2, i3, i15, i5, i6, i16, i17);
   i28 = HEAP32[i13 >> 2] | 0;
   if ((i28 | 0) != 0) {
    __ZN3WTF10RefCountedIN7WebCore9FormStateEE5derefEv(i28 | 0);
   }
   i28 = HEAP32[i12 >> 2] | 0;
   do {
    if ((i28 | 0) != 0) {
     i12 = i28 + 8 | 0;
     i13 = i12 | 0;
     i29 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
     if ((i29 | 0) != 0) {
      HEAP32[i13 >> 2] = i29;
      break;
     }
     i29 = i12 - 8 | 0;
     if ((i29 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i29 >> 2] | 0) + 4 >> 2] & 127](i29);
    }
   } while (0);
   i28 = HEAP32[i15 >> 2] | 0;
   if ((i28 | 0) == 0) {
    break;
   }
   i30 = i28 | 0;
   i29 = (HEAP32[i30 >> 2] | 0) - 2 | 0;
   if ((i29 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i28);
    break;
   } else {
    HEAP32[i30 >> 2] = i29;
    break;
   }
  }
 } while (0);
 if ((i34 | 0) == 36) {
  if ((HEAP32[i1 + 72 >> 2] | 0) != 0) {
   __ZN7WebCore15ResourceRequestD2Ev(i11);
   if ((i8 | 0) == 0) {
    STACKTOP = i9;
    return;
   }
   __ZN3WTF10RefCountedIN7WebCore9FormStateEE5derefEv(i8 | 0);
   STACKTOP = i9;
   return;
  }
  i15 = i19 | 0;
  i17 = i7 | 0;
  i7 = HEAP32[i17 >> 2] | 0;
  HEAP32[i17 >> 2] = 0;
  HEAP32[i15 >> 2] = i7;
  __ZN7WebCore16NavigationActionC1ERKNS_15ResourceRequestENS_13FrameLoadTypeEbN3WTF10PassRefPtrINS_5EventEEE(i18, i11, i6, i26, i19);
  i19 = HEAP32[i15 >> 2] | 0;
  do {
   if ((i19 | 0) != 0) {
    i15 = i19 + 8 | 0;
    i7 = i15 | 0;
    i17 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
    if ((i17 | 0) != 0) {
     HEAP32[i7 >> 2] = i17;
     break;
    }
    i17 = i15 - 8 | 0;
    if ((i17 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 4 >> 2] & 127](i17);
   }
  } while (0);
  do {
   if (i33) {
    i34 = 51;
   } else {
    i19 = HEAP32[i4 >> 2] | 0;
    if ((i19 | 0) == 0) {
     i34 = 51;
     break;
    }
    if ((HEAP32[i19 + 4 >> 2] | 0) == 0) {
     i34 = 51;
     break;
    }
    i19 = HEAP32[i1 + 8 >> 2] | 0;
    i17 = i20 | 0;
    HEAP32[i17 >> 2] = i8;
    i15 = i21 + 16 | 0;
    i7 = i21;
    HEAP32[i15 >> 2] = i7;
    HEAP32[i21 >> 2] = H_BASE + 1256;
    HEAP32[i21 + 4 >> 2] = i1;
    __ZN7WebCore13PolicyChecker20checkNewWindowPolicyERKNS_16NavigationActionERKNS_15ResourceRequestEN3WTF10PassRefPtrINS_9FormStateEEERKNS7_6StringENSt3__18functionIFvS6_SA_SD_S3_bEEE(i19, i18, i11, i20, i4, i21);
    i19 = HEAP32[i15 >> 2] | 0;
    do {
     if ((i19 | 0) == (i7 | 0)) {
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 16 >> 2] & 127](i7);
     } else {
      if ((i19 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 20 >> 2] & 127](i19);
     }
    } while (0);
    i19 = HEAP32[i17 >> 2] | 0;
    if ((i19 | 0) == 0) {
     break;
    }
    __ZN3WTF10RefCountedIN7WebCore9FormStateEE5derefEv(i19 | 0);
   }
  } while (0);
  do {
   if ((i34 | 0) == 51) {
    i21 = HEAP32[i1 + 48 >> 2] | 0;
    i4 = (i21 | 0) == 0;
    if (!i4) {
     i20 = i21 + 4 | 0;
     HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
    }
    i20 = __ZNK7WebCore11FrameLoader29shouldTreatURLAsSameAsCurrentERKNS_3URLE(i1, i2) | 0;
    i33 = __ZNK7WebCore19ResourceRequestBase10httpMethodEv(i27) | 0;
    if (i26) {
     if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i33 >> 2] | 0, H_BASE + 920 | 0) | 0) {
      i34 = 55;
     } else {
      i34 = 72;
     }
    } else {
     i34 = 55;
    }
    do {
     if ((i34 | 0) == 55) {
      if ((i6 | 0) == 9 | (i6 | 0) == 6 | (i6 | 0) == 4) {
       i34 = 72;
       break;
      }
      i33 = i1 | 0;
      i19 = HEAP32[(HEAP32[i33 >> 2] | 0) + 456 >> 2] | 0;
      if (!(__ZNK7WebCore3URL21hasFragmentIdentifierEv(i2) | 0)) {
       i34 = 72;
       break;
      }
      if (!(__ZN7WebCore31equalIgnoringFragmentIdentifierERKNS_3URLES2_(i19 + 356 | 0, i2) | 0)) {
       i34 = 72;
       break;
      }
      i19 = HEAP32[(HEAP32[i33 >> 2] | 0) + 456 >> 2] | 0;
      if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i19 >> 2] | 0) + 252 >> 2] & 31](i19) | 0) {
       i34 = 72;
       break;
      }
      __ZN7WebCore15ResourceRequestaSERKS0_(i21 + 992 | 0, i18 | 0) | 0;
      HEAP32[i21 + 1176 >> 2] = HEAP32[i18 + 184 >> 2];
      i19 = HEAP32[i18 + 188 >> 2] | 0;
      if ((i19 | 0) != 0) {
       i33 = i19 + 8 | 0;
       HEAP32[i33 >> 2] = (HEAP32[i33 >> 2] | 0) + 1;
      }
      i33 = i21 + 1180 | 0;
      i7 = HEAP32[i33 >> 2] | 0;
      HEAP32[i33 >> 2] = i19;
      do {
       if ((i7 | 0) != 0) {
        i19 = i7 + 8 | 0;
        i33 = i19 | 0;
        i15 = (HEAP32[i33 >> 2] | 0) - 1 | 0;
        if ((i15 | 0) != 0) {
         HEAP32[i33 >> 2] = i15;
         break;
        }
        i15 = i19 - 8 | 0;
        if ((i15 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 127](i15);
       }
      } while (0);
      __ZN7WebCore15ResourceRequestC2Ev(i22);
      __ZN7WebCore15ResourceRequestaSERKS0_(i21 + 1184 | 0, i22) | 0;
      __ZN7WebCore15ResourceRequestD2Ev(i22);
      i7 = i1 + 8 | 0;
      __ZN7WebCore13PolicyChecker9stopCheckEv(HEAP32[i7 >> 2] | 0);
      HEAP32[(HEAP32[i7 >> 2] | 0) + 8 >> 2] = i6;
      i15 = HEAP32[i7 >> 2] | 0;
      i7 = i23 | 0;
      HEAP32[i7 >> 2] = i8;
      i19 = i24 + 16 | 0;
      i33 = i24;
      HEAP32[i19 >> 2] = i33;
      HEAP32[i24 >> 2] = H_BASE + 1216;
      HEAP32[i24 + 4 >> 2] = i1;
      __ZN7WebCore13PolicyChecker21checkNavigationPolicyERKNS_15ResourceRequestEPNS_14DocumentLoaderEN3WTF10PassRefPtrINS_9FormStateEEENSt3__18functionIFvS3_S9_bEEE(i15, i11, i21, i23, i24);
      i15 = HEAP32[i19 >> 2] | 0;
      do {
       if ((i15 | 0) == (i33 | 0)) {
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i24 >> 2] | 0) + 16 >> 2] & 127](i33);
       } else {
        if ((i15 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 20 >> 2] & 127](i15);
       }
      } while (0);
      i15 = HEAP32[i7 >> 2] | 0;
      if ((i15 | 0) == 0) {
       break;
      }
      __ZN3WTF10RefCountedIN7WebCore9FormStateEE5derefEv(i15 | 0);
     }
    } while (0);
    do {
     if ((i34 | 0) == 72) {
      i17 = i1 + 61 | 0;
      i15 = (HEAP8[i17] & 1) == 0;
      i33 = i25 | 0;
      HEAP32[i33 >> 2] = i8;
      __ZN7WebCore11FrameLoader24loadWithNavigationActionERKNS_15ResourceRequestERKNS_16NavigationActionEbNS_13FrameLoadTypeEN3WTF10PassRefPtrINS_9FormStateEEE(i1, i11, i18, i5, i6, i25);
      i19 = HEAP32[i33 >> 2] | 0;
      if ((i19 | 0) != 0) {
       __ZN3WTF10RefCountedIN7WebCore9FormStateEE5derefEv(i19 | 0);
      }
      if (!i15) {
       HEAP8[i17] = 0;
       i17 = HEAP32[i1 + 52 >> 2] | 0;
       if ((i17 | 0) == 0) {
        break;
       }
       HEAP8[i17 + 976 | 0] = 1;
       break;
      }
      if (!i20) {
       break;
      }
      if ((i6 | 0) == 9 | (i6 | 0) == 4) {
       break;
      }
      HEAP32[i1 + 44 >> 2] = 6;
     }
    } while (0);
    if (i4) {
     break;
    }
    i20 = i21 + 4 | 0;
    i17 = i20 | 0;
    i15 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
    if ((i15 | 0) != 0) {
     HEAP32[i17 >> 2] = i15;
     break;
    }
    i15 = i20 - 4 | 0;
    if ((i15 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 127](i15);
   }
  } while (0);
  i1 = HEAP32[i18 + 188 >> 2] | 0;
  do {
   if ((i1 | 0) != 0) {
    i6 = i1 + 8 | 0;
    i25 = i6 | 0;
    i5 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
    if ((i5 | 0) != 0) {
     HEAP32[i25 >> 2] = i5;
     break;
    }
    i5 = i6 - 8 | 0;
    if ((i5 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 127](i5);
   }
  } while (0);
  __ZN7WebCore15ResourceRequestD2Ev(i18 | 0);
 }
 __ZN7WebCore15ResourceRequestD2Ev(i11);
 STACKTOP = i9;
 return;
}
function __ZN7WebCore11FrameLoader16didBeginDocumentEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = i3 + 48 | 0;
 i11 = i3 + 56 | 0;
 HEAP8[i1 + 84 | 0] = 1;
 HEAP8[i1 + 76 | 0] = 0;
 HEAP8[i1 + 69 | 0] = 0;
 i12 = i1 | 0;
 __ZN7WebCore8Document13setReadyStateENS0_10ReadyStateE(HEAP32[(HEAP32[i12 >> 2] | 0) + 456 >> 2] | 0, 0);
 i13 = i1 + 80 | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i15 = HEAP32[(HEAP32[i12 >> 2] | 0) + 456 >> 2] | 0;
   i16 = i4 | 0;
   HEAP32[i16 >> 2] = i14;
   i17 = i14 | 0;
   tempValue = HEAP32[i17 >> 2] | 0, HEAP32[i17 >> 2] = tempValue + 1, tempValue;
   __ZN7WebCore8Document11statePoppedEN3WTF10PassRefPtrINS_21SerializedScriptValueEEE(i15, i4);
   i15 = HEAP32[i16 >> 2] | 0;
   do {
    if ((i15 | 0) != 0) {
     i16 = i15 | 0;
     if (((tempValue = HEAP32[i16 >> 2] | 0, HEAP32[i16 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
      break;
     }
     __ZN7WebCore21SerializedScriptValueD1Ev(i15);
     __ZN3WTF8fastFreeEPv(i15);
    }
   } while (0);
   i15 = HEAP32[i13 >> 2] | 0;
   HEAP32[i13 >> 2] = 0;
   if ((i15 | 0) == 0) {
    break;
   }
   i16 = i15 | 0;
   if (((tempValue = HEAP32[i16 >> 2] | 0, HEAP32[i16 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN7WebCore21SerializedScriptValueD1Ev(i15);
   __ZN3WTF8fastFreeEPv(i15);
  }
 } while (0);
 if (i2) {
  __ZN7WebCore11FrameLoader40dispatchDidClearWindowObjectsInAllWorldsEv(i1);
 }
 i2 = (__ZNK7WebCore9FrameTree6parentEv((HEAP32[i12 >> 2] | 0) + 40 | 0) | 0) == 0;
 i13 = HEAP32[i12 >> 2] | 0;
 if (i2) {
  __ZN7WebCore11FrameLoader23setFirstPartyForCookiesERKNS_3URLE(i1, (HEAP32[i13 + 456 >> 2] | 0) + 356 | 0);
 } else {
  __ZN7WebCore11FrameLoader23setFirstPartyForCookiesERKNS_3URLE(i1, (HEAP32[(__ZNK7WebCore9FrameTree6parentEv(i13 + 40 | 0) | 0) + 456 >> 2] | 0) + 596 | 0);
 }
 __ZN7WebCore8Document25initContentSecurityPolicyEv(HEAP32[(HEAP32[i12 >> 2] | 0) + 456 >> 2] | 0);
 i13 = HEAP32[i12 >> 2] | 0;
 i2 = (HEAP32[i13 + 36 >> 2] | 0) + 194 | 0;
 __ZN7WebCore20CachedResourceLoader16setImagesEnabledEb(HEAP32[(HEAP32[i13 + 456 >> 2] | 0) + 340 >> 2] | 0, (HEAP8[i2] | 0) < 0);
 __ZN7WebCore20CachedResourceLoader17setAutoLoadImagesEb(HEAP32[(HEAP32[(HEAP32[i12 >> 2] | 0) + 456 >> 2] | 0) + 340 >> 2] | 0, (HEAP8[i2] & 32) != 0);
 i2 = i1 + 48 | 0;
 i13 = HEAP32[i2 >> 2] | 0;
 if ((i13 | 0) == 0) {
  i18 = i1 + 12 | 0;
  i19 = HEAP32[i18 >> 2] | 0;
  __ZN7WebCore17HistoryController20restoreDocumentStateEv(i19);
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore20ResourceResponseBase15httpHeaderFieldEPKc(i5, i13 + 784 | 0, H_BASE + 160 | 0);
 i13 = i5 | 0;
 i4 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   if ((HEAP32[i4 + 4 >> 2] | 0) == 0) {
    break;
   }
   __ZN7WebCore8Document29parseDNSPrefetchControlHeaderERKN3WTF6StringE(HEAP32[(HEAP32[i12 >> 2] | 0) + 456 >> 2] | 0, i5);
  }
 } while (0);
 __ZNK7WebCore20ResourceResponseBase15httpHeaderFieldEPKc(i6, (HEAP32[i2 >> 2] | 0) + 784 | 0, H_BASE + 120 | 0);
 i5 = i6 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   if ((HEAP32[i4 + 4 >> 2] | 0) == 0) {
    break;
   }
   __ZN7WebCore21ContentSecurityPolicy16didReceiveHeaderERKN3WTF6StringENS0_10HeaderTypeE(HEAP32[(HEAP32[(HEAP32[i12 >> 2] | 0) + 456 >> 2] | 0) + 104 >> 2] | 0, i6, 1);
  }
 } while (0);
 __ZNK7WebCore20ResourceResponseBase15httpHeaderFieldEPKc(i7, (HEAP32[i2 >> 2] | 0) + 784 | 0, H_BASE + 80 | 0);
 i4 = i7 | 0;
 i7 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 i14 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i7;
 do {
  if ((i14 | 0) != 0) {
   i7 = i14 | 0;
   i15 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    break;
   } else {
    HEAP32[i7 >> 2] = i15;
    break;
   }
  }
 } while (0);
 i14 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i4 = i14 | 0;
   i15 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    break;
   } else {
    HEAP32[i4 >> 2] = i15;
    break;
   }
  }
 } while (0);
 i14 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   if ((HEAP32[i14 + 4 >> 2] | 0) == 0) {
    break;
   }
   __ZN7WebCore21ContentSecurityPolicy16didReceiveHeaderERKN3WTF6StringENS0_10HeaderTypeE(HEAP32[(HEAP32[(HEAP32[i12 >> 2] | 0) + 456 >> 2] | 0) + 104 >> 2] | 0, i6, 0);
  }
 } while (0);
 __ZNK7WebCore20ResourceResponseBase15httpHeaderFieldEPKc(i8, (HEAP32[i2 >> 2] | 0) + 784 | 0, H_BASE + 64 | 0);
 i14 = i8 | 0;
 i8 = HEAP32[i14 >> 2] | 0;
 HEAP32[i14 >> 2] = 0;
 i15 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i8;
 do {
  if ((i15 | 0) != 0) {
   i8 = i15 | 0;
   i4 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i15);
    break;
   } else {
    HEAP32[i8 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i15 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i14 = i15 | 0;
   i4 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i15);
    break;
   } else {
    HEAP32[i14 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i15 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   if ((HEAP32[i15 + 4 >> 2] | 0) == 0) {
    break;
   }
   __ZN7WebCore21ContentSecurityPolicy16didReceiveHeaderERKN3WTF6StringENS0_10HeaderTypeE(HEAP32[(HEAP32[(HEAP32[i12 >> 2] | 0) + 456 >> 2] | 0) + 104 >> 2] | 0, i6, 3);
  }
 } while (0);
 __ZNK7WebCore20ResourceResponseBase15httpHeaderFieldEPKc(i9, (HEAP32[i2 >> 2] | 0) + 784 | 0, H_BASE + 32 | 0);
 i15 = i9 | 0;
 i9 = HEAP32[i15 >> 2] | 0;
 HEAP32[i15 >> 2] = 0;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i9;
 do {
  if ((i4 | 0) != 0) {
   i9 = i4 | 0;
   i14 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i9 >> 2] = i14;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i15 = i4 | 0;
   i14 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i15 >> 2] = i14;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   if ((HEAP32[i4 + 4 >> 2] | 0) == 0) {
    break;
   }
   __ZN7WebCore21ContentSecurityPolicy16didReceiveHeaderERKN3WTF6StringENS0_10HeaderTypeE(HEAP32[(HEAP32[(HEAP32[i12 >> 2] | 0) + 456 >> 2] | 0) + 104 >> 2] | 0, i6, 2);
  }
 } while (0);
 __ZNK7WebCore20ResourceResponseBase15httpHeaderFieldEPKc(i10, (HEAP32[i2 >> 2] | 0) + 784 | 0, H_BASE + 8 | 0);
 i2 = i10 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 L76 : do {
  if ((i6 | 0) != 0) {
   i4 = HEAP32[i6 + 4 >> 2] | 0;
   do {
    if ((i4 | 0) == 0) {
     i20 = i6;
    } else {
     L80 : do {
      if ((HEAP32[i6 + 16 >> 2] & 32 | 0) == 0) {
       i14 = HEAP32[i6 + 8 >> 2] | 0;
       i15 = 0;
       while (1) {
        if (i15 >>> 0 >= i4 >>> 0) {
         i21 = -1;
         break L80;
        }
        if ((HEAP16[i14 + (i15 << 1) >> 1] | 0) == 44) {
         i21 = i15;
         break;
        } else {
         i15 = i15 + 1 | 0;
        }
       }
      } else {
       i15 = HEAP32[i6 + 8 >> 2] | 0;
       i14 = 0;
       while (1) {
        if (i14 >>> 0 >= i4 >>> 0) {
         i21 = -1;
         break L80;
        }
        if ((HEAP8[i15 + i14 | 0] | 0) == 44) {
         i21 = i14;
         break;
        } else {
         i14 = i14 + 1 | 0;
        }
       }
      }
     } while (0);
     __ZN3WTF6String8truncateEj(i10, i21);
     __ZNK3WTF6String15stripWhiteSpaceEPFbtE(i11, i10, F_BASE_ii + 14 | 0);
     i14 = i11 | 0;
     i15 = HEAP32[i14 >> 2] | 0;
     HEAP32[i14 >> 2] = 0;
     i9 = HEAP32[i2 >> 2] | 0;
     HEAP32[i2 >> 2] = i15;
     do {
      if ((i9 | 0) != 0) {
       i15 = i9 | 0;
       i8 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
       if ((i8 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i9);
        break;
       } else {
        HEAP32[i15 >> 2] = i8;
        break;
       }
      }
     } while (0);
     i9 = HEAP32[i14 >> 2] | 0;
     do {
      if ((i9 | 0) != 0) {
       i8 = i9 | 0;
       i15 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
       if ((i15 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i9);
        break;
       } else {
        HEAP32[i8 >> 2] = i15;
        break;
       }
      }
     } while (0);
     i9 = HEAP32[i2 >> 2] | 0;
     if ((i9 | 0) == 0) {
      break L76;
     }
     if ((HEAP32[i9 + 4 >> 2] | 0) == 0) {
      i20 = i9;
      break;
     }
     __ZN7WebCore8Document18setContentLanguageERKN3WTF6StringE(HEAP32[(HEAP32[i12 >> 2] | 0) + 456 >> 2] | 0, i10);
     i9 = HEAP32[i2 >> 2] | 0;
     if ((i9 | 0) == 0) {
      break L76;
     } else {
      i20 = i9;
     }
    }
   } while (0);
   i4 = i20 | 0;
   i9 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i20);
    break;
   } else {
    HEAP32[i4 >> 2] = i9;
    break;
   }
  }
 } while (0);
 i20 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i20 | 0) != 0) {
   i5 = i20 | 0;
   i2 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i20);
    break;
   } else {
    HEAP32[i5 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i20 = HEAP32[i13 >> 2] | 0;
 if ((i20 | 0) == 0) {
  i18 = i1 + 12 | 0;
  i19 = HEAP32[i18 >> 2] | 0;
  __ZN7WebCore17HistoryController20restoreDocumentStateEv(i19);
  STACKTOP = i3;
  return;
 }
 i13 = i20 | 0;
 i2 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i20);
  i18 = i1 + 12 | 0;
  i19 = HEAP32[i18 >> 2] | 0;
  __ZN7WebCore17HistoryController20restoreDocumentStateEv(i19);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i13 >> 2] = i2;
  i18 = i1 + 12 | 0;
  i19 = HEAP32[i18 >> 2] | 0;
  __ZN7WebCore17HistoryController20restoreDocumentStateEv(i19);
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore11FrameLoader11stopLoadingENS_17UnloadEventPolicyE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = i1 | 0;
 i11 = HEAP32[(HEAP32[i10 >> 2] | 0) + 456 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i12 = HEAP32[i11 + 344 >> 2] | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 52 >> 2] & 127](i12);
  }
 } while (0);
 L5 : do {
  if ((i2 | 0) != 0) {
   i11 = HEAP32[(HEAP32[i10 >> 2] | 0) + 456 >> 2] | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   if ((HEAP8[i1 + 69 | 0] & 1) == 0) {
    i13 = i11;
   } else {
    i12 = i1 + 70 | 0;
    if ((HEAP8[i12] & 1) == 0) {
     i14 = HEAP32[i11 + 680 >> 2] | 0;
     do {
      if ((i14 | 0) != 0) {
       i15 = i14 | 0;
       i16 = i14;
       if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i16 >> 2] | 0) + 208 >> 2] & 31](i15) | 0) == 0) {
        break;
       }
       __ZN7WebCore16HTMLInputElement10endEditingEv(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i16 >> 2] | 0) + 208 >> 2] & 31](i15) | 0);
      }
     } while (0);
     i14 = i1 + 72 | 0;
     do {
      if ((HEAP32[i14 >> 2] | 0) == 0) {
       do {
        if ((i2 | 0) == 2) {
         HEAP32[i14 >> 2] = 2;
         i15 = HEAP32[(HEAP32[i10 >> 2] | 0) + 456 >> 2] | 0;
         i16 = HEAP32[i15 + 336 >> 2] | 0;
         i17 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 288 | 0;
         i18 = (HEAP8[i15 + 1433 | 0] & 1) != 0;
         i15 = __ZN3WTF10fastMallocEj(56) | 0;
         __ZN7WebCore19PageTransitionEventC1ERKN3WTF12AtomicStringEb(i15, i17, i18);
         i18 = i4 | 0;
         HEAP32[i18 >> 2] = i15;
         i15 = HEAP32[(HEAP32[i10 >> 2] | 0) + 456 >> 2] | 0;
         i17 = i15 | 0;
         i19 = i5 | 0;
         HEAP32[i19 >> 2] = i17;
         if ((i15 | 0) != 0) {
          FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 56 >> 2] & 127](i17);
         }
         __ZN7WebCore9DOMWindow13dispatchEventEN3WTF10PassRefPtrINS_5EventEEENS2_INS_11EventTargetEEE(i16, i4, i5) | 0;
         i16 = HEAP32[i19 >> 2] | 0;
         if ((i16 | 0) != 0) {
          FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 60 >> 2] & 127](i16);
         }
         i16 = HEAP32[i18 >> 2] | 0;
         if ((i16 | 0) == 0) {
          break;
         }
         i18 = i16 + 8 | 0;
         i16 = i18 | 0;
         i19 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
         if ((i19 | 0) != 0) {
          HEAP32[i16 >> 2] = i19;
          break;
         }
         i19 = i18 - 8 | 0;
         if ((i19 | 0) == 0) {
          break;
         }
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 4 >> 2] & 127](i19);
        }
       } while (0);
       if ((HEAP8[(HEAP32[(HEAP32[i10 >> 2] | 0) + 456 >> 2] | 0) + 1433 | 0] & 1) != 0) {
        break;
       }
       i19 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 348 | 0;
       i18 = __ZN3WTF10fastMallocEj(56) | 0;
       i16 = i18;
       __ZN7WebCore5EventC1ERKN3WTF12AtomicStringEbb(i16, i19, 0, 0);
       i19 = HEAP32[i1 + 52 >> 2] | 0;
       i17 = (i19 | 0) == 0;
       do {
        if (i17) {
         HEAP32[i14 >> 2] = 3;
         i20 = 39;
        } else {
         i15 = i19 + 4 | 0;
         HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
         HEAP32[i14 >> 2] = 3;
         i15 = i19 + 1536 | 0;
         if (+HEAPF64[i15 >> 3] != +0) {
          i20 = 39;
          break;
         }
         i21 = i19 + 1544 | 0;
         if (+HEAPF64[i21 >> 3] != +0) {
          i20 = 39;
          break;
         }
         HEAPF64[i15 >> 3] = +__ZN3WTF27monotonicallyIncreasingTimeEv();
         i15 = HEAP32[i10 >> 2] | 0;
         i22 = HEAP32[(HEAP32[i15 + 456 >> 2] | 0) + 336 >> 2] | 0;
         i23 = i6 | 0;
         HEAP32[i23 >> 2] = i16;
         if ((i18 | 0) == 0) {
          i24 = i15;
         } else {
          i15 = i18 + 8 | 0;
          HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
          i24 = HEAP32[i10 >> 2] | 0;
         }
         i15 = HEAP32[i24 + 456 >> 2] | 0;
         i25 = i15 | 0;
         i26 = i7 | 0;
         HEAP32[i26 >> 2] = i25;
         if ((i15 | 0) != 0) {
          FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 56 >> 2] & 127](i25);
         }
         __ZN7WebCore9DOMWindow13dispatchEventEN3WTF10PassRefPtrINS_5EventEEENS2_INS_11EventTargetEEE(i22, i6, i7) | 0;
         i22 = HEAP32[i26 >> 2] | 0;
         if ((i22 | 0) != 0) {
          FUNCTION_TABLE_vi[HEAP32[(HEAP32[i22 >> 2] | 0) + 60 >> 2] & 127](i22);
         }
         i22 = HEAP32[i23 >> 2] | 0;
         do {
          if ((i22 | 0) != 0) {
           i23 = i22 + 8 | 0;
           i26 = i23 | 0;
           i25 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
           if ((i25 | 0) != 0) {
            HEAP32[i26 >> 2] = i25;
            break;
           }
           i25 = i23 - 8 | 0;
           if ((i25 | 0) == 0) {
            break;
           }
           FUNCTION_TABLE_vi[HEAP32[(HEAP32[i25 >> 2] | 0) + 4 >> 2] & 127](i25);
          }
         } while (0);
         HEAPF64[i21 >> 3] = +__ZN3WTF27monotonicallyIncreasingTimeEv();
        }
       } while (0);
       do {
        if ((i20 | 0) == 39) {
         i22 = HEAP32[i10 >> 2] | 0;
         i25 = HEAP32[(HEAP32[i22 + 456 >> 2] | 0) + 336 >> 2] | 0;
         i23 = i8 | 0;
         HEAP32[i23 >> 2] = i16;
         if ((i18 | 0) == 0) {
          i27 = i22;
         } else {
          i22 = i18 + 8 | 0;
          HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
          i27 = HEAP32[i10 >> 2] | 0;
         }
         i22 = HEAP32[i27 + 456 >> 2] | 0;
         i26 = i22 | 0;
         i15 = i9 | 0;
         HEAP32[i15 >> 2] = i26;
         if ((i22 | 0) != 0) {
          FUNCTION_TABLE_vi[HEAP32[(HEAP32[i22 >> 2] | 0) + 56 >> 2] & 127](i26);
         }
         __ZN7WebCore9DOMWindow13dispatchEventEN3WTF10PassRefPtrINS_5EventEEENS2_INS_11EventTargetEEE(i25, i8, i9) | 0;
         i25 = HEAP32[i15 >> 2] | 0;
         if ((i25 | 0) != 0) {
          FUNCTION_TABLE_vi[HEAP32[(HEAP32[i25 >> 2] | 0) + 60 >> 2] & 127](i25);
         }
         i25 = HEAP32[i23 >> 2] | 0;
         if ((i25 | 0) == 0) {
          break;
         }
         i23 = i25 + 8 | 0;
         i25 = i23 | 0;
         i15 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
         if ((i15 | 0) != 0) {
          HEAP32[i25 >> 2] = i15;
          break;
         }
         i15 = i23 - 8 | 0;
         if ((i15 | 0) == 0) {
          break;
         }
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 127](i15);
        }
       } while (0);
       do {
        if (!i17) {
         i15 = i19 + 4 | 0;
         i23 = i15 | 0;
         i25 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
         if ((i25 | 0) != 0) {
          HEAP32[i23 >> 2] = i25;
          break;
         }
         i25 = i15 - 4 | 0;
         if ((i25 | 0) == 0) {
          break;
         }
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i25 >> 2] | 0) + 4 >> 2] & 127](i25);
        }
       } while (0);
       if ((i18 | 0) == 0) {
        break;
       }
       i19 = i18 + 8 | 0;
       i17 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
       if ((i17 | 0) == 0) {
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 127](i16);
        break;
       } else {
        HEAP32[i19 >> 2] = i17;
        break;
       }
      }
     } while (0);
     HEAP32[i14 >> 2] = 0;
     i17 = HEAP32[i10 >> 2] | 0;
     i19 = HEAP32[i17 + 456 >> 2] | 0;
     if ((i19 | 0) == 0) {
      i28 = i17;
     } else {
      __ZN7WebCore8Document19updateStyleIfNeededEv(i19);
      i28 = HEAP32[i10 >> 2] | 0;
     }
     HEAP8[i12] = 1;
     i29 = HEAP32[i28 + 456 >> 2] | 0;
    } else {
     i29 = i11;
    }
    if ((i29 | 0) == 0) {
     break;
    } else {
     i13 = i29;
    }
   }
   if ((HEAP8[i13 + 1433 | 0] & 1) != 0) {
    break;
   }
   do {
    if (__ZNK7WebCore23FrameLoaderStateMachine32isDisplayingInitialEmptyDocumentEv(i1 + 24 | 0) | 0) {
     i19 = HEAP32[i1 + 52 >> 2] | 0;
     if ((i19 | 0) == 0) {
      break;
     }
     i17 = (HEAP32[(HEAP32[i10 >> 2] | 0) + 456 >> 2] | 0) + 88 | 0;
     if (__ZNK7WebCore15SecurityContext20isSecureTransitionToERKNS_3URLE(i17, __ZNK7WebCore14DocumentLoader3urlEv(i19) | 0) | 0) {
      break L5;
     }
    }
   } while (0);
   i11 = HEAP32[(HEAP32[i10 >> 2] | 0) + 456 >> 2] | 0;
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 28 >> 2] & 127](i11);
  }
 } while (0);
 HEAP8[i1 + 76 | 0] = 1;
 HEAP8[i1 + 69 | 0] = 1;
 i13 = HEAP32[i10 >> 2] | 0;
 i29 = HEAP32[i13 + 456 >> 2] | 0;
 if ((i29 | 0) == 0) {
  i30 = i13;
  i31 = i30 + 376 | 0;
  __ZN7WebCore19NavigationScheduler6cancelEb(i31, 0);
  STACKTOP = i3;
  return;
 }
 do {
  if ((HEAP8[i29 + 964 | 0] & 1) == 0) {
   i32 = i29;
  } else {
   __ZN7WebCore11FrameLoader15finishedParsingEv(i1);
   __ZN7WebCore8Document10setParsingEb(HEAP32[(HEAP32[i10 >> 2] | 0) + 456 >> 2] | 0, 0);
   i13 = HEAP32[i10 >> 2] | 0;
   i28 = HEAP32[i13 + 456 >> 2] | 0;
   if ((i28 | 0) == 0) {
    i30 = i13;
   } else {
    i32 = i28;
    break;
   }
   i31 = i30 + 376 | 0;
   __ZN7WebCore19NavigationScheduler6cancelEb(i31, 0);
   STACKTOP = i3;
   return;
  }
 } while (0);
 __ZN7WebCore8Document13setReadyStateENS0_10ReadyStateE(i32, 2);
 __ZN7WebCore15DatabaseManager13stopDatabasesEPNS_22ScriptExecutionContextEPNS_24DatabaseTaskSynchronizerE(__ZN7WebCore15DatabaseManager7managerEv() | 0, i32 + 88 | 0, 0);
 i30 = HEAP32[i10 >> 2] | 0;
 i31 = i30 + 376 | 0;
 __ZN7WebCore19NavigationScheduler6cancelEb(i31, 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11FrameLoader16loadFrameRequestERKNS_16FrameLoadRequestEbbN3WTF10PassRefPtrINS_5EventEEENS5_INS_9FormStateEEENS_18ShouldSendReferrerE(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 120 | 0;
 i9 = i8 | 0;
 i10 = i8 + 8 | 0;
 i11 = i8 + 56 | 0;
 i12 = i8 + 64 | 0;
 i13 = i8 + 72 | 0;
 i14 = i8 + 80 | 0;
 i15 = i8 + 88 | 0;
 i16 = i8 + 96 | 0;
 i17 = i8 + 104 | 0;
 i18 = i8 + 112 | 0;
 i19 = i1 | 0;
 i20 = HEAP32[i19 >> 2] | 0;
 i21 = i20 + 4 | 0;
 HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
 i21 = i2 + 8 | 0;
 i22 = i21 | 0;
 i23 = __ZNK7WebCore19ResourceRequestBase3urlEv(i22) | 0;
 i24 = i10 | 0;
 i25 = HEAP32[i23 >> 2] | 0;
 HEAP32[i24 >> 2] = i25;
 if ((i25 | 0) != 0) {
  i26 = i25 | 0;
  HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 2;
 }
 i26 = i23 + 4 | 0;
 i25 = i10 + 4 | 0;
 i27 = HEAP8[i25] & -2 | HEAP8[i26] & 1;
 HEAP8[i25] = i27;
 HEAP8[i25] = i27 & -3 | HEAP8[i26] & 2;
 HEAP32[i10 + 8 >> 2] = HEAP32[i23 + 8 >> 2];
 HEAP32[i10 + 12 >> 2] = HEAP32[i23 + 12 >> 2];
 HEAP32[i10 + 16 >> 2] = HEAP32[i23 + 16 >> 2];
 HEAP32[i10 + 20 >> 2] = HEAP32[i23 + 20 >> 2];
 HEAP32[i10 + 24 >> 2] = HEAP32[i23 + 24 >> 2];
 HEAP32[i10 + 28 >> 2] = HEAP32[i23 + 28 >> 2];
 HEAP32[i10 + 32 >> 2] = HEAP32[i23 + 32 >> 2];
 HEAP32[i10 + 36 >> 2] = HEAP32[i23 + 36 >> 2];
 HEAP32[i10 + 40 >> 2] = HEAP32[i23 + 40 >> 2];
 HEAP32[i10 + 44 >> 2] = HEAP32[i23 + 44 >> 2];
 do {
  if (__ZNK7WebCore14SecurityOrigin10canDisplayERKNS_3URLE(HEAP32[i2 >> 2] | 0, i10) | 0) {
   __ZNK7WebCore19ResourceRequestBase15httpHeaderFieldEPKc(i12, i22, H_BASE + 144 | 0);
   i23 = i12 | 0;
   i26 = HEAP32[i23 >> 2] | 0;
   if ((i26 | 0) == 0) {
    i28 = 10;
   } else {
    if ((HEAP32[i26 + 4 >> 2] | 0) == 0) {
     i28 = 10;
    }
   }
   do {
    if ((i28 | 0) == 10) {
     i26 = HEAP32[i19 >> 2] | 0;
     if ((HEAP8[(HEAP32[i26 + 456 >> 2] | 0) + 1581 | 0] & 1) == 0) {
      i29 = i26;
     } else {
      i27 = i26;
      while (1) {
       i26 = __ZNK7WebCore9FrameTree6parentEv(i27 + 40 | 0) | 0;
       if ((HEAP8[(HEAP32[i26 + 456 >> 2] | 0) + 1581 | 0] & 1) == 0) {
        i29 = i26;
        break;
       } else {
        i27 = i26;
       }
      }
     }
     i27 = HEAP32[i29 + 144 >> 2] | 0;
     if ((i27 | 0) != 0) {
      i26 = i27 | 0;
      HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 2;
     }
     i26 = HEAP32[i23 >> 2] | 0;
     HEAP32[i23 >> 2] = i27;
     if ((i26 | 0) == 0) {
      break;
     }
     i27 = i26 | 0;
     i25 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
     if ((i25 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i26);
      break;
     } else {
      HEAP32[i27 >> 2] = i25;
      break;
     }
    }
   } while (0);
   __ZN7WebCore14SecurityPolicy22generateReferrerHeaderENS_14ReferrerPolicyERKNS_3URLERKN3WTF6StringE(i13, HEAP32[(HEAP32[(HEAP32[i19 >> 2] | 0) + 456 >> 2] | 0) + 1944 >> 2] | 0, i10, i12);
   do {
    if ((i7 | 0) == 1) {
     i25 = i13 | 0;
     i27 = HEAP32[i25 >> 2] | 0;
     HEAP32[i25 >> 2] = 0;
     if ((i27 | 0) == 0) {
      break;
     }
     i25 = i27 | 0;
     i26 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
     if ((i26 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i27);
      break;
     } else {
      HEAP32[i25 >> 2] = i26;
      break;
     }
    }
   } while (0);
   if ((__ZNK7WebCore19ResourceRequestBase11cachePolicyEv(i22) | 0) == 1) {
    i30 = 4;
   } else {
    i30 = i4 ? 7 : 0;
   }
   do {
    if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[(__ZNK7WebCore19ResourceRequestBase10httpMethodEv(i22) | 0) >> 2] | 0, H_BASE + 1160 | 0) | 0) {
     i26 = i14 | 0;
     i25 = i5 | 0;
     i27 = HEAP32[i25 >> 2] | 0;
     HEAP32[i25 >> 2] = 0;
     HEAP32[i26 >> 2] = i27;
     i27 = HEAP32[i6 >> 2] | 0;
     i25 = i15 | 0;
     HEAP32[i25 >> 2] = i27;
     if ((i27 | 0) != 0) {
      i31 = i27 | 0;
      HEAP32[i31 >> 2] = (HEAP32[i31 >> 2] | 0) + 1;
     }
     __ZN7WebCore11FrameLoader15loadPostRequestERKNS_15ResourceRequestERKN3WTF6StringES7_bNS_13FrameLoadTypeENS4_10PassRefPtrINS_5EventEEENS9_INS_9FormStateEEE(i1, i21, i13, i2 + 192 | 0, i3, i30, i14, i15);
     i31 = HEAP32[i25 >> 2] | 0;
     if ((i31 | 0) != 0) {
      __ZN3WTF10RefCountedIN7WebCore9FormStateEE5derefEv(i31 | 0);
     }
     i31 = HEAP32[i26 >> 2] | 0;
     if ((i31 | 0) == 0) {
      break;
     }
     i26 = i31 + 8 | 0;
     i31 = i26 | 0;
     i25 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
     if ((i25 | 0) != 0) {
      HEAP32[i31 >> 2] = i25;
      break;
     }
     i25 = i26 - 8 | 0;
     if ((i25 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i25 >> 2] | 0) + 4 >> 2] & 127](i25);
    } else {
     i25 = __ZNK7WebCore19ResourceRequestBase3urlEv(i22) | 0;
     i26 = i16 | 0;
     i31 = i5 | 0;
     i27 = HEAP32[i31 >> 2] | 0;
     HEAP32[i31 >> 2] = 0;
     HEAP32[i26 >> 2] = i27;
     i27 = HEAP32[i6 >> 2] | 0;
     i31 = i17 | 0;
     HEAP32[i31 >> 2] = i27;
     if ((i27 | 0) != 0) {
      i32 = i27 | 0;
      HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + 1;
     }
     __ZN7WebCore11FrameLoader7loadURLERKNS_3URLERKN3WTF6StringES7_bNS_13FrameLoadTypeENS4_10PassRefPtrINS_5EventEEENS9_INS_9FormStateEEE(i1, i25, i13, i2 + 192 | 0, i3, i30, i16, i17);
     i25 = HEAP32[i31 >> 2] | 0;
     if ((i25 | 0) != 0) {
      __ZN3WTF10RefCountedIN7WebCore9FormStateEE5derefEv(i25 | 0);
     }
     i25 = HEAP32[i26 >> 2] | 0;
     if ((i25 | 0) == 0) {
      break;
     }
     i26 = i25 + 8 | 0;
     i25 = i26 | 0;
     i31 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
     if ((i31 | 0) != 0) {
      HEAP32[i25 >> 2] = i31;
      break;
     }
     i31 = i26 - 8 | 0;
     if ((i31 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i31 >> 2] | 0) + 4 >> 2] & 127](i31);
    }
   } while (0);
   i31 = HEAP32[i6 >> 2] | 0;
   if ((i31 | 0) == 0) {
    i33 = i19;
   } else {
    i33 = (HEAP32[i31 + 20 >> 2] | 0) + 332 | 0;
   }
   i31 = HEAP32[i33 >> 2] | 0;
   if ((i31 | 0) == 0) {
    i34 = HEAP32[i19 >> 2] | 0;
   } else {
    i34 = i31;
   }
   i31 = i34 + 80 | 0;
   i26 = HEAP32[i2 + 192 >> 2] | 0;
   do {
    if ((i26 | 0) == 0) {
     i25 = i9 | 0;
     HEAP32[i25 >> 2] = 0;
     i35 = i25;
    } else {
     if ((HEAP32[i26 + 16 >> 2] & 16 | 0) == 0) {
      __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i9, i26);
      i35 = i9 | 0;
      break;
     } else {
      i25 = i9 | 0;
      HEAP32[i25 >> 2] = i26;
      i32 = i26 | 0;
      HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + 2;
      i35 = i25;
      break;
     }
    }
   } while (0);
   i26 = i18 | 0;
   HEAP32[i26 >> 2] = HEAP32[i35 >> 2];
   i25 = __ZN7WebCore11FrameLoader22findFrameForNavigationERKN3WTF12AtomicStringEPNS_8DocumentE(i31, i18, 0) | 0;
   i32 = HEAP32[i26 >> 2] | 0;
   do {
    if ((i32 | 0) != 0) {
     i26 = i32 | 0;
     i27 = (HEAP32[i26 >> 2] | 0) - 2 | 0;
     if ((i27 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i32);
      break;
     } else {
      HEAP32[i26 >> 2] = i27;
      break;
     }
    }
   } while (0);
   do {
    if (!((i25 | 0) == 0 | (i25 | 0) == (i34 | 0))) {
     i32 = HEAP32[i25 + 32 >> 2] | 0;
     if ((i32 | 0) == 0) {
      break;
     }
     __ZNK7WebCore6Chrome5focusEv(HEAP32[i32 + 20 >> 2] | 0);
    }
   } while (0);
   i25 = HEAP32[i13 >> 2] | 0;
   do {
    if ((i25 | 0) != 0) {
     i32 = i25 | 0;
     i31 = (HEAP32[i32 >> 2] | 0) - 2 | 0;
     if ((i31 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i25);
      break;
     } else {
      HEAP32[i32 >> 2] = i31;
      break;
     }
    }
   } while (0);
   i25 = HEAP32[i23 >> 2] | 0;
   if ((i25 | 0) == 0) {
    break;
   }
   i31 = i25 | 0;
   i32 = (HEAP32[i31 >> 2] | 0) - 2 | 0;
   if ((i32 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i25);
    break;
   } else {
    HEAP32[i31 >> 2] = i32;
    break;
   }
  } else {
   i32 = HEAP32[i19 >> 2] | 0;
   __ZNK7WebCore3URL30stringCenterEllipsizedToLengthEj(i11, i10, 1024);
   __ZN7WebCore11FrameLoader21reportLocalLoadFailedEPNS_5FrameERKN3WTF6StringE(i32, i11);
   i32 = HEAP32[i11 >> 2] | 0;
   if ((i32 | 0) == 0) {
    break;
   }
   i31 = i32 | 0;
   i25 = (HEAP32[i31 >> 2] | 0) - 2 | 0;
   if ((i25 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i32);
    break;
   } else {
    HEAP32[i31 >> 2] = i25;
    break;
   }
  }
 } while (0);
 i11 = HEAP32[i24 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i24 = i11 | 0;
   i10 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i24 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i11 = i20 + 4 | 0;
 i20 = i11 | 0;
 i10 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
 if ((i10 | 0) != 0) {
  HEAP32[i20 >> 2] = i10;
  STACKTOP = i8;
  return;
 }
 i10 = i11 - 4 | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i8;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 127](i10);
 STACKTOP = i8;
 return;
}
function __ZN3WTF13tryMakeStringINS_6StringEPKcS1_S3_S1_EENS_10PassRefPtrINS_10StringImplEEET_T0_T1_T2_T3_(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = _strlen(i3 | 0) | 0;
 i11 = _strlen(i5 | 0) | 0;
 i12 = i2 | 0;
 i2 = HEAP32[i12 >> 2] | 0;
 i13 = (i2 | 0) == 0;
 if (i13) {
  i14 = 0;
 } else {
  i14 = HEAP32[i2 + 4 >> 2] | 0;
 }
 i15 = _llvm_uadd_with_overflow_i32(i14 | 0, i10 | 0) | 0;
 i14 = tempRet0;
 i16 = i4 | 0;
 i4 = HEAP32[i16 >> 2] | 0;
 i17 = (i4 | 0) == 0;
 if (i17) {
  i18 = 0;
 } else {
  i18 = HEAP32[i4 + 4 >> 2] | 0;
 }
 i19 = _llvm_uadd_with_overflow_i32(i15 | 0, i18 | 0) | 0;
 i18 = tempRet0;
 i15 = _llvm_uadd_with_overflow_i32(i19 | 0, i11 | 0) | 0;
 i19 = tempRet0;
 i20 = i6 | 0;
 i6 = HEAP32[i20 >> 2] | 0;
 i21 = (i6 | 0) == 0;
 if (i21) {
  i22 = 0;
 } else {
  i22 = HEAP32[i6 + 4 >> 2] | 0;
 }
 i23 = _llvm_uadd_with_overflow_i32(i15 | 0, i22 | 0) | 0;
 i22 = i23;
 do {
  if (!tempRet0) {
   if (i14 | i18 | i19) {
    break;
   }
   if (i13) {
    i24 = 12;
   } else {
    if ((HEAP32[i2 + 16 >> 2] & 32 | 0) != 0) {
     i24 = 12;
    }
   }
   do {
    if ((i24 | 0) == 12) {
     if (!i17) {
      if ((HEAP32[i4 + 16 >> 2] & 32 | 0) == 0) {
       break;
      }
     }
     if (!i21) {
      if ((HEAP32[i6 + 16 >> 2] & 32 | 0) == 0) {
       break;
      }
     }
     do {
      if ((i22 | 0) == 0) {
       i23 = __ZN3WTF10StringImpl5emptyEv() | 0;
       if ((i23 | 0) == 0) {
        i24 = 36;
        break;
       }
       i15 = i23 | 0;
       HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 2;
       i25 = i23;
       i26 = 0;
      } else {
       if (i22 >>> 0 > 4294967275 >>> 0) {
        i24 = 36;
        break;
       }
       __ZN3WTF13tryFastMallocEj(i9, i22 + 20 | 0);
       i23 = i9 | 0;
       i15 = HEAP32[i23 >> 2] | 0;
       HEAP32[i23 >> 2] = 0;
       if ((i15 | 0) == 0) {
        i24 = 36;
        break;
       }
       i23 = i15 + 20 | 0;
       HEAP32[i15 >> 2] = 2;
       HEAP32[i15 + 4 >> 2] = i22;
       HEAP32[i15 + 8 >> 2] = i23;
       HEAP32[i15 + 12 >> 2] = 0;
       HEAP32[i15 + 16 >> 2] = 32;
       i25 = i15;
       i26 = i23;
      }
     } while (0);
     if ((i24 | 0) == 36) {
      HEAP32[i1 >> 2] = 0;
      STACKTOP = i7;
      return;
     }
     i23 = HEAP32[i12 >> 2] | 0;
     do {
      if ((i23 | 0) == 0) {
       i27 = 0;
      } else {
       i15 = HEAP32[i23 + 4 >> 2] | 0;
       i28 = HEAP32[i23 + 8 >> 2] | 0;
       if ((i15 | 0) == 0) {
        i29 = i23;
       } else {
        i30 = 0;
        while (1) {
         HEAP8[i26 + i30 | 0] = HEAP8[i28 + i30 | 0] | 0;
         i30 = i30 + 1 | 0;
         if (i30 >>> 0 >= i15 >>> 0) {
          break;
         }
        }
        i15 = HEAP32[i12 >> 2] | 0;
        if ((i15 | 0) == 0) {
         i27 = 0;
         break;
        } else {
         i29 = i15;
        }
       }
       i27 = HEAP32[i29 + 4 >> 2] | 0;
      }
     } while (0);
     _memcpy(i26 + i27 | 0, i3 | 0, i10) | 0;
     i23 = i27 + i10 | 0;
     i15 = HEAP32[i16 >> 2] | 0;
     do {
      if ((i15 | 0) == 0) {
       i31 = 0;
      } else {
       i30 = HEAP32[i15 + 4 >> 2] | 0;
       i28 = HEAP32[i15 + 8 >> 2] | 0;
       if ((i30 | 0) == 0) {
        i32 = i15;
       } else {
        i33 = 0;
        while (1) {
         HEAP8[i26 + (i33 + i23) | 0] = HEAP8[i28 + i33 | 0] | 0;
         i33 = i33 + 1 | 0;
         if (i33 >>> 0 >= i30 >>> 0) {
          break;
         }
        }
        i30 = HEAP32[i16 >> 2] | 0;
        if ((i30 | 0) == 0) {
         i31 = 0;
         break;
        } else {
         i32 = i30;
        }
       }
       i31 = HEAP32[i32 + 4 >> 2] | 0;
      }
     } while (0);
     i15 = i31 + i23 | 0;
     _memcpy(i26 + i15 | 0, i5 | 0, i11) | 0;
     i30 = i15 + i11 | 0;
     i15 = HEAP32[i20 >> 2] | 0;
     do {
      if ((i15 | 0) != 0) {
       i33 = HEAP32[i15 + 4 >> 2] | 0;
       i28 = HEAP32[i15 + 8 >> 2] | 0;
       if ((i33 | 0) == 0) {
        break;
       } else {
        i34 = 0;
       }
       while (1) {
        HEAP8[i26 + (i30 + i34) | 0] = HEAP8[i28 + i34 | 0] | 0;
        i34 = i34 + 1 | 0;
        if (i34 >>> 0 >= i33 >>> 0) {
         break;
        }
       }
      }
     } while (0);
     HEAP32[i1 >> 2] = i25;
     STACKTOP = i7;
     return;
    }
   } while (0);
   do {
    if ((i22 | 0) == 0) {
     i30 = __ZN3WTF10StringImpl5emptyEv() | 0;
     if ((i30 | 0) == 0) {
      i24 = 70;
      break;
     }
     i15 = i30 | 0;
     HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 2;
     i35 = i30;
     i36 = 0;
    } else {
     if (i22 >>> 0 > 2147483637 >>> 0) {
      i24 = 70;
      break;
     }
     __ZN3WTF13tryFastMallocEj(i8, (i22 << 1) + 20 | 0);
     i30 = i8 | 0;
     i15 = HEAP32[i30 >> 2] | 0;
     HEAP32[i30 >> 2] = 0;
     if ((i15 | 0) == 0) {
      i24 = 70;
      break;
     }
     i30 = i15 + 20 | 0;
     HEAP32[i15 >> 2] = 2;
     HEAP32[i15 + 4 >> 2] = i22;
     HEAP32[i15 + 8 >> 2] = i30;
     HEAP32[i15 + 12 >> 2] = 0;
     HEAP32[i15 + 16 >> 2] = 0;
     i35 = i15;
     i36 = i30;
    }
   } while (0);
   if ((i24 | 0) == 70) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i7;
    return;
   }
   i30 = HEAP32[i12 >> 2] | 0;
   do {
    if ((i30 | 0) == 0) {
     i37 = 0;
    } else {
     i15 = HEAP32[i30 + 4 >> 2] | 0;
     do {
      if ((HEAP32[i30 + 16 >> 2] & 32 | 0) == 0) {
       i23 = HEAP32[i30 + 8 >> 2] | 0;
       if ((i15 | 0) == 0) {
        break;
       } else {
        i38 = 0;
       }
       while (1) {
        HEAP16[i36 + (i38 << 1) >> 1] = HEAP16[i23 + (i38 << 1) >> 1] | 0;
        i38 = i38 + 1 | 0;
        if (i38 >>> 0 >= i15 >>> 0) {
         break;
        }
       }
      } else {
       i23 = HEAP32[i30 + 8 >> 2] | 0;
       if ((i15 | 0) == 0) {
        break;
       } else {
        i39 = 0;
       }
       while (1) {
        HEAP16[i36 + (i39 << 1) >> 1] = HEAPU8[i23 + i39 | 0] | 0;
        i39 = i39 + 1 | 0;
        if (i39 >>> 0 >= i15 >>> 0) {
         break;
        }
       }
      }
     } while (0);
     i15 = HEAP32[i12 >> 2] | 0;
     if ((i15 | 0) == 0) {
      i37 = 0;
      break;
     }
     i37 = HEAP32[i15 + 4 >> 2] | 0;
    }
   } while (0);
   if ((i10 | 0) != 0) {
    i30 = 0;
    while (1) {
     HEAP16[i36 + (i30 + i37 << 1) >> 1] = HEAPU8[i3 + i30 | 0] | 0;
     i30 = i30 + 1 | 0;
     if (i30 >>> 0 >= i10 >>> 0) {
      break;
     }
    }
   }
   i30 = i37 + i10 | 0;
   i15 = HEAP32[i16 >> 2] | 0;
   do {
    if ((i15 | 0) == 0) {
     i40 = 0;
    } else {
     i23 = HEAP32[i15 + 4 >> 2] | 0;
     do {
      if ((HEAP32[i15 + 16 >> 2] & 32 | 0) == 0) {
       i33 = HEAP32[i15 + 8 >> 2] | 0;
       if ((i23 | 0) == 0) {
        break;
       } else {
        i41 = 0;
       }
       while (1) {
        HEAP16[i36 + (i41 + i30 << 1) >> 1] = HEAP16[i33 + (i41 << 1) >> 1] | 0;
        i41 = i41 + 1 | 0;
        if (i41 >>> 0 >= i23 >>> 0) {
         break;
        }
       }
      } else {
       i33 = HEAP32[i15 + 8 >> 2] | 0;
       if ((i23 | 0) == 0) {
        break;
       } else {
        i42 = 0;
       }
       while (1) {
        HEAP16[i36 + (i42 + i30 << 1) >> 1] = HEAPU8[i33 + i42 | 0] | 0;
        i42 = i42 + 1 | 0;
        if (i42 >>> 0 >= i23 >>> 0) {
         break;
        }
       }
      }
     } while (0);
     i23 = HEAP32[i16 >> 2] | 0;
     if ((i23 | 0) == 0) {
      i40 = 0;
      break;
     }
     i40 = HEAP32[i23 + 4 >> 2] | 0;
    }
   } while (0);
   i15 = i40 + i30 | 0;
   if ((i11 | 0) != 0) {
    i23 = 0;
    while (1) {
     HEAP16[i36 + (i23 + i15 << 1) >> 1] = HEAPU8[i5 + i23 | 0] | 0;
     i23 = i23 + 1 | 0;
     if (i23 >>> 0 >= i11 >>> 0) {
      break;
     }
    }
   }
   i23 = i15 + i11 | 0;
   i30 = HEAP32[i20 >> 2] | 0;
   do {
    if ((i30 | 0) != 0) {
     i33 = HEAP32[i30 + 4 >> 2] | 0;
     if ((HEAP32[i30 + 16 >> 2] & 32 | 0) == 0) {
      i28 = HEAP32[i30 + 8 >> 2] | 0;
      if ((i33 | 0) == 0) {
       break;
      } else {
       i43 = 0;
      }
      while (1) {
       HEAP16[i36 + (i43 + i23 << 1) >> 1] = HEAP16[i28 + (i43 << 1) >> 1] | 0;
       i43 = i43 + 1 | 0;
       if (i43 >>> 0 >= i33 >>> 0) {
        break;
       }
      }
     } else {
      i28 = HEAP32[i30 + 8 >> 2] | 0;
      if ((i33 | 0) == 0) {
       break;
      } else {
       i44 = 0;
      }
      while (1) {
       HEAP16[i36 + (i44 + i23 << 1) >> 1] = HEAPU8[i28 + i44 | 0] | 0;
       i44 = i44 + 1 | 0;
       if (i44 >>> 0 >= i33 >>> 0) {
        break;
       }
      }
     }
    }
   } while (0);
   HEAP32[i1 >> 2] = i35;
   STACKTOP = i7;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 STACKTOP = i7;
 return;
}
function __ZN7WebCore11FrameLoader21commitProvisionalLoadEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 248 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 56 | 0;
 i9 = i2 + 64 | 0;
 i10 = HEAP32[i1 + 52 >> 2] | 0;
 i11 = (i10 | 0) == 0;
 if (!i11) {
  i12 = i10 + 4 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
 }
 i12 = i1 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 i14 = i13 + 4 | 0;
 HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
 i14 = i1 + 221 | 0;
 if ((HEAP8[i14] & 1) == 0) {
  i15 = 0;
 } else {
  i16 = __ZN7WebCore9pageCacheEv() | 0;
  __ZN7WebCore9PageCache4takeEPNS_11HistoryItemE(i3, i16, HEAP32[(HEAP32[i1 + 12 >> 2] | 0) + 12 >> 2] | 0);
  i16 = i3 | 0;
  i3 = HEAP32[i16 >> 2] | 0;
  HEAP32[i16 >> 2] = 0;
  i15 = i3;
 }
 i3 = HEAP32[(HEAP32[i12 >> 2] | 0) + 464 >> 2] | 0;
 do {
  if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
   __ZN7WebCore6Editor18confirmCompositionEv(i3);
   i16 = __ZNK7WebCore6Editor6clientEv(HEAP32[(HEAP32[i12 >> 2] | 0) + 464 >> 2] | 0) | 0;
   if ((i16 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i16 >> 2] | 0) + 80 >> 2] & 63](i16, HEAP32[i12 >> 2] | 0);
  }
 } while (0);
 i3 = i1 + 12 | 0;
 i16 = HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] | 0;
 do {
  if ((__ZNK7WebCore9FrameTree6parentEv((HEAP32[i12 >> 2] | 0) + 40 | 0) | 0) == 0) {
   i17 = __ZN7WebCore9pageCacheEv() | 0;
   if (!(__ZNK7WebCore9PageCache8canCacheEPNS_4PageE(i17, HEAP32[(HEAP32[i12 >> 2] | 0) + 32 >> 2] | 0) | 0)) {
    break;
   }
   if ((HEAP32[i16 + 156 >> 2] | 0) != 0) {
    break;
   }
   i17 = __ZN7WebCore9pageCacheEv() | 0;
   i18 = i4 | 0;
   HEAP32[i18 >> 2] = i16;
   if ((i16 | 0) != 0) {
    i19 = i16 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
   }
   __ZN7WebCore9PageCache3addEN3WTF10PassRefPtrINS_11HistoryItemEEERNS_4PageE(i17, i4, HEAP32[(HEAP32[i12 >> 2] | 0) + 32 >> 2] | 0);
   i17 = HEAP32[i18 >> 2] | 0;
   if ((i17 | 0) == 0) {
    break;
   }
   i18 = i17 | 0;
   i19 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
   if ((i19 | 0) == 0) {
    __ZN7WebCore11HistoryItemD1Ev(i17);
    __ZN3WTF8fastFreeEPv(i17);
    break;
   } else {
    HEAP32[i18 >> 2] = i19;
    break;
   }
  }
 } while (0);
 i4 = i1 + 44 | 0;
 if ((HEAP32[i4 >> 2] | 0) != 8) {
  __ZN7WebCore11FrameLoader19closeOldDataSourcesEv(i1);
 }
 i16 = (i15 | 0) == 0;
 do {
  if (i16) {
   if (__ZNK7WebCore23FrameLoaderStateMachine28creatingInitialEmptyDocumentEv(i1 + 24 | 0) | 0) {
    break;
   }
   i19 = HEAP32[i1 + 4 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i19 >> 2] | 0) + 20 >> 2] & 63](i19, i10);
  }
 } while (0);
 __ZN7WebCore11FrameLoader21transitionToCommittedEPNS_10CachedPageE(i1, i15);
 do {
  if (!i11) {
   i19 = i1 + 48 | 0;
   if ((HEAP32[i19 >> 2] | 0) == 0) {
    break;
   }
   __ZN7WebCore14SecurityOrigin6createERKNS_3URLE(i5, __ZNK7WebCore19ResourceRequestBase3urlEv(__ZN7WebCore14DocumentLoader7requestEv(i10) | 0) | 0);
   i18 = i5 | 0;
   i17 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = 0;
   i18 = HEAP32[i19 >> 2] | 0;
   HEAP8[i18 + 1609 | 0] = (__ZNK7WebCore14SecurityOrigin10canRequestERKNS_3URLE(i17, i1 + 236 | 0) | 0) & 1;
   if ((i17 | 0) == 0) {
    break;
   }
   i18 = i17 | 0;
   if (((tempValue = HEAP32[i18 >> 2] | 0, HEAP32[i18 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN7WebCore14SecurityOriginD2Ev(i17);
   __ZN3WTF8fastFreeEPv(i17);
  }
 } while (0);
 i5 = i1 + 62 | 0;
 if ((HEAP8[i5] & 1) != 0) {
  i17 = HEAP32[i1 + 4 >> 2] | 0;
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 92 >> 2] & 127](i17);
  HEAP8[i1 + 61 | 0] = 0;
  HEAP8[i5] = 0;
 }
 do {
  if (i16) {
   i20 = 39;
  } else {
   if ((HEAP32[HEAP32[i15 + 16 >> 2] >> 2] | 0) == 0) {
    i20 = 39;
    break;
   }
   __ZN7WebCore11FrameLoader27prepareForCachedPageRestoreEv(i1);
   __ZN7WebCore10CachedPage7restoreERNS_4PageE(i15, HEAP32[(HEAP32[i12 >> 2] | 0) + 32 >> 2] | 0);
   __ZN7WebCore11FrameLoader21dispatchDidCommitLoadEv(i1);
   i5 = HEAP32[i1 + 48 >> 2] | 0;
   i17 = i6 | 0;
   i18 = HEAP32[i5 + 980 >> 2] | 0;
   HEAP32[i17 >> 2] = i18;
   do {
    if ((i18 | 0) == 0) {
     HEAP32[i6 + 4 >> 2] = HEAP32[i5 + 984 >> 2];
    } else {
     i19 = i18 | 0;
     HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 2;
     i19 = (HEAP32[i17 >> 2] | 0) == 0;
     HEAP32[i6 + 4 >> 2] = HEAP32[i5 + 984 >> 2];
     if (i19) {
      break;
     }
     i19 = HEAP32[i1 + 4 >> 2] | 0;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i19 >> 2] | 0) + 132 >> 2] & 63](i19, i6);
    }
   } while (0);
   __ZN7WebCore11FrameLoader14checkCompletedEv(i1);
   i5 = HEAP32[i17 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   i18 = i5 | 0;
   i19 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
   if ((i19 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i18 >> 2] = i19;
    break;
   }
  }
 } while (0);
 if ((i20 | 0) == 39) {
  __ZN7WebCore11FrameLoader10didOpenURLEv(i1) | 0;
 }
 do {
  if ((HEAP32[i4 >> 2] | 0) == 0) {
   if ((HEAP8[(HEAP32[i1 + 48 >> 2] | 0) + 976 | 0] & 1) == 0) {
    break;
   }
   __ZN7WebCore17HistoryController23updateForClientRedirectEv(HEAP32[i3 >> 2] | 0);
  }
 } while (0);
 if ((HEAP8[i14] & 1) != 0) {
  __ZN7WebCore8Document30documentDidResumeFromPageCacheEv(HEAP32[(HEAP32[i12 >> 2] | 0) + 456 >> 2] | 0);
  __ZN7WebCore9FrameView11forceLayoutEb(HEAP32[(HEAP32[i12 >> 2] | 0) + 452 >> 2] | 0, 0);
  i12 = i1 + 48 | 0;
  i14 = HEAP32[i12 >> 2] | 0;
  i3 = i14 + 1376 | 0;
  i4 = HEAP32[i3 >> 2] | 0;
  L60 : do {
   if ((i4 | 0) != 0) {
    i20 = i14 + 1368 | 0;
    i6 = i7 + 16 | 0;
    i19 = i7;
    i18 = i7 + 17 | 0;
    i5 = i7 + 18 | 0;
    i21 = i9 | 0;
    i22 = i9 + 180 | 0;
    i23 = i9 + 160 | 0;
    i24 = i1 + 16 | 0;
    i25 = i7 + 12 | 0;
    i26 = i7 + 8 | 0;
    i27 = i7 | 0;
    i28 = 0;
    i29 = i4;
    while (1) {
     if (i29 >>> 0 <= i28 >>> 0) {
      break;
     }
     i30 = (HEAP32[i20 >> 2] | 0) + (i28 * 168 & -1) | 0;
     _memset(i19 | 0, 0, 16) | 0;
     HEAP8[i6] = 1;
     HEAP8[i18] = 0;
     HEAP8[i5] = 0;
     i31 = i30 | 0;
     __ZN7WebCore19ResourceRequestBaseC2ERKNS_3URLENS_26ResourceRequestCachePolicyE(i21, __ZNK7WebCore20ResourceResponseBase3urlEv(i31) | 0, 0);
     _memset(i23 | 0, 0, 19) | 0;
     HEAP32[i22 >> 2] = 15;
     __ZN7WebCore11FrameLoader19requestFromDelegateERNS_15ResourceRequestERmRNS_13ResourceErrorE(i1, i9, i8, i7);
     i32 = HEAP32[i12 >> 2] | 0;
     i33 = HEAP32[i8 >> 2] | 0;
     i34 = __ZNK7WebCore20ResourceResponseBase21expectedContentLengthEv(i31) | 0;
     __ZN7WebCore20ResourceLoadNotifier29sendRemainingDelegateMessagesEPNS_14DocumentLoaderEmRKNS_15ResourceRequestERKNS_16ResourceResponseEPKciiRKNS_13ResourceErrorE(i24, i32, i33, i9, i30, 0, i34, 0, i7);
     __ZN7WebCore15ResourceRequestD2Ev(i9);
     i34 = HEAP32[i25 >> 2] | 0;
     do {
      if ((i34 | 0) != 0) {
       i30 = i34 | 0;
       i33 = (HEAP32[i30 >> 2] | 0) - 2 | 0;
       if ((i33 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i34);
        break;
       } else {
        HEAP32[i30 >> 2] = i33;
        break;
       }
      }
     } while (0);
     i34 = HEAP32[i26 >> 2] | 0;
     do {
      if ((i34 | 0) != 0) {
       i33 = i34 | 0;
       i30 = (HEAP32[i33 >> 2] | 0) - 2 | 0;
       if ((i30 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i34);
        break;
       } else {
        HEAP32[i33 >> 2] = i30;
        break;
       }
      }
     } while (0);
     i34 = HEAP32[i27 >> 2] | 0;
     do {
      if ((i34 | 0) != 0) {
       i30 = i34 | 0;
       i33 = (HEAP32[i30 >> 2] | 0) - 2 | 0;
       if ((i33 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i34);
        break;
       } else {
        HEAP32[i30 >> 2] = i33;
        break;
       }
      }
     } while (0);
     i34 = i28 + 1 | 0;
     if (i34 >>> 0 >= i4 >>> 0) {
      break L60;
     }
     i28 = i34;
     i29 = HEAP32[i3 >> 2] | 0;
    }
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
  } while (0);
  __ZN7WebCore11FrameLoader29checkLoadCompleteForThisFrameEv(i1);
 }
 if (!i16) {
  __ZN7WebCore10CachedPageD1Ev(i15);
  __ZdlPv(i15);
 }
 i15 = i13 + 4 | 0;
 i13 = i15 | 0;
 i16 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
 do {
  if ((i16 | 0) == 0) {
   i1 = i15 - 4 | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 127](i1);
  } else {
   HEAP32[i13 >> 2] = i16;
  }
 } while (0);
 if (i11) {
  STACKTOP = i2;
  return;
 }
 i11 = i10 + 4 | 0;
 i10 = i11 | 0;
 i16 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
 if ((i16 | 0) != 0) {
  HEAP32[i10 >> 2] = i16;
  STACKTOP = i2;
  return;
 }
 i16 = i11 - 4 | 0;
 if ((i16 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 127](i16);
 STACKTOP = i2;
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 1216 >> 2] = F_BASE_vi + 68;
 HEAP32[H_BASE + 1220 >> 2] = F_BASE_vi + 42;
 HEAP32[H_BASE + 1224 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 1228 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 1232 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 1236 >> 2] = F_BASE_vi + 78;
 HEAP32[H_BASE + 1240 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 1256 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 1260 >> 2] = F_BASE_vi + 82;
 HEAP32[H_BASE + 1264 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 1268 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 1272 >> 2] = F_BASE_vi + 84;
 HEAP32[H_BASE + 1276 >> 2] = F_BASE_vi + 38;
 HEAP32[H_BASE + 1280 >> 2] = F_BASE_viiiiii + 6;
 HEAP32[H_BASE + 1296 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 1300 >> 2] = F_BASE_vi + 52;
 HEAP32[H_BASE + 1304 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 1308 >> 2] = F_BASE_vii + 26;
 HEAP32[H_BASE + 1312 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 1316 >> 2] = F_BASE_vi + 30;
 HEAP32[H_BASE + 1320 >> 2] = F_BASE_viiiiii + 4;
 HEAP32[H_BASE + 1336 >> 2] = F_BASE_vi + 50;
 HEAP32[H_BASE + 1340 >> 2] = F_BASE_vi + 32;
 HEAP32[H_BASE + 1344 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 1348 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 1352 >> 2] = F_BASE_vi + 60;
 HEAP32[H_BASE + 1356 >> 2] = F_BASE_vi + 46;
 HEAP32[H_BASE + 1360 >> 2] = F_BASE_vii + 36;
 HEAP32[H_BASE + 1376 >> 2] = F_BASE_vi + 76;
 HEAP32[H_BASE + 1380 >> 2] = F_BASE_vi + 56;
 HEAP32[H_BASE + 1384 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 1388 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 1392 >> 2] = F_BASE_vi + 66;
 HEAP32[H_BASE + 1396 >> 2] = F_BASE_vi + 40;
 HEAP32[H_BASE + 1400 >> 2] = F_BASE_viiii + 6;
 HEAP32[H_BASE + 1416 >> 2] = F_BASE_vi + 70;
 HEAP32[H_BASE + 1420 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 1424 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 1428 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 1432 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 1436 >> 2] = F_BASE_vi + 72;
 HEAP32[H_BASE + 1440 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 1456 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 1460 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 1464 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 1468 >> 2] = F_BASE_vii + 34;
 HEAP32[H_BASE + 1472 >> 2] = F_BASE_vi + 62;
 HEAP32[H_BASE + 1476 >> 2] = F_BASE_vi + 64;
 HEAP32[H_BASE + 1480 >> 2] = F_BASE_viiiiii + 2;
 HEAP32[H_BASE + 1496 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 1500 >> 2] = F_BASE_vi + 48;
 HEAP32[H_BASE + 1504 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 1508 >> 2] = F_BASE_did + 2;
 HEAP32[H_BASE + 1528 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 1532 >> 2] = F_BASE_vi + 54;
 HEAP32[H_BASE + 1536 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 1540 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1544 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1548 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1552 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1556 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1560 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1564 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1568 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1572 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1576 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1580 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1584 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1588 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1592 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1596 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1600 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1604 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1608 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1612 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1616 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1620 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1624 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1628 >> 2] = F_BASE_vi + 44;
 HEAP32[H_BASE + 1632 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1636 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1640 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1644 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1648 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1652 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1656 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1660 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1664 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1668 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1672 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1676 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1680 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1684 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1688 >> 2] = F_BASE_vi + 80;
 HEAP32[H_BASE + 1692 >> 2] = F_BASE_vii + 32;
 HEAP32[H_BASE + 1696 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1700 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1704 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1708 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1712 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1716 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1720 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1724 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 1728 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1732 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1736 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1740 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1744 >> 2] = F_BASE_vi + 28;
 HEAP32[H_BASE + 1748 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 1752 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1756 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1760 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1764 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1768 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1772 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1776 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1780 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1784 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1788 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1792 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1796 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1800 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1804 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 1808 >> 2] = F_BASE_vi + 34;
 HEAP32[H_BASE + 1812 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1816 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1820 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1824 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1828 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1832 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1836 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1840 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1844 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1848 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1852 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1856 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1860 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1864 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1868 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1872 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1876 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1880 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1884 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1888 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1892 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1896 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1900 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1904 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1908 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1912 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1916 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1920 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1924 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1928 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1932 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1936 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1940 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1944 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1948 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1952 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1956 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1960 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1964 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 1968 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1972 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1976 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1980 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1984 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1988 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1992 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 1996 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 2e3 >> 2] = F_BASE_vi + 36;
 HEAP32[H_BASE + 2004 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 2008 >> 2] = F_BASE_iiii + 4;
 HEAP32[H_BASE + 2012 >> 2] = F_BASE_iii + 14;
 HEAP32[H_BASE + 2016 >> 2] = F_BASE_iiii + 2;
 HEAP32[H_BASE + 2020 >> 2] = F_BASE_iiiii + 4;
 HEAP32[H_BASE + 2024 >> 2] = F_BASE_iiiii + 2;
 HEAP32[H_BASE + 2028 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 2032 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 2036 >> 2] = F_BASE_iii + 10;
 HEAP32[H_BASE + 2040 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 2044 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 2048 >> 2] = F_BASE_vii + 28;
 HEAP32[H_BASE + 2052 >> 2] = F_BASE_vii + 22;
 HEAP32[H_BASE + 2056 >> 2] = F_BASE_vii + 24;
 HEAP32[H_BASE + 2060 >> 2] = F_BASE_iii + 12;
 HEAP32[H_BASE + 2064 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 2068 >> 2] = F_BASE_vi + 58;
 HEAP32[H_BASE + 2072 >> 2] = F_BASE_ii + 4;
}
function __ZN7WebCore11FrameLoader29checkLoadCompleteForThisFrameEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i2 = i1 + 40 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = i1 + 60 | 0;
  if ((HEAP8[i4] & 1) != 0) {
   return;
  }
  i5 = i1 + 52 | 0;
  i6 = HEAP32[i5 >> 2] | 0;
  if ((i6 | 0) == 0) {
   return;
  }
  i7 = i6 + 4 | 0;
  i8 = (HEAP32[i7 >> 2] | 0) + 1 | 0;
  HEAP32[i7 >> 2] = i8;
  i7 = i6 + 952 | 0;
  if ((HEAP8[i6 + 968 | 0] & 1) == 0) {
   i9 = i1 | 0;
   i10 = HEAP32[(HEAP32[i9 >> 2] | 0) + 32 >> 2] | 0;
   do {
    if ((i10 | 0) == 0) {
     i11 = 0;
    } else {
     if (((HEAP32[i1 + 44 >> 2] | 0) - 1 | 0) >>> 0 >= 3 >>> 0) {
      i11 = 0;
      break;
     }
     i12 = HEAP32[(HEAP32[(HEAP32[i10 + 60 >> 2] | 0) + 92 >> 2] | 0) + 4 >> 2] | 0;
     if ((i12 | 0) == 0) {
      i11 = 0;
      break;
     }
     i13 = i12 | 0;
     HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
     i11 = i12;
    }
   } while (0);
   i10 = (HEAP32[(HEAP32[i1 + 12 >> 2] | 0) + 12 >> 2] | 0) == 0;
   if (__ZNK7WebCore14DocumentLoader19isLoadingInAPISenseEv(i6) | 0) {
    if ((HEAP8[i6 + 974 | 0] & 1) == 0) {
     i14 = 32;
    } else {
     i14 = 12;
    }
   } else {
    i14 = 12;
   }
   do {
    if ((i14 | 0) == 12) {
     HEAP8[i4] = 1;
     i12 = HEAP32[i1 + 4 >> 2] | 0;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i12 >> 2] | 0) + 144 >> 2] & 63](i12, i7);
     HEAP8[i4] = 0;
     do {
      if ((HEAP32[i1 + 44 >> 2] | 0) == 8) {
       if ((HEAP32[i1 + 48 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore11FrameLoader17setDocumentLoaderEPNS_14DocumentLoaderE(i1, HEAP32[i5 >> 2] | 0);
      }
     } while (0);
     if ((i6 | 0) == (HEAP32[i5 >> 2] | 0)) {
      if ((i6 | 0) == (HEAP32[i1 + 48 >> 2] | 0)) {
       HEAP32[i5 >> 2] = 0;
       i15 = i6;
       i14 = 19;
      } else {
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 40 >> 2] & 127](i6);
       i12 = HEAP32[i5 >> 2] | 0;
       HEAP32[i5 >> 2] = 0;
       if ((i12 | 0) != 0) {
        i15 = i12;
        i14 = 19;
       }
      }
      do {
       if ((i14 | 0) == 19) {
        i12 = i15 + 4 | 0;
        i13 = i12 | 0;
        i16 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
        if ((i16 | 0) != 0) {
         HEAP32[i13 >> 2] = i16;
         break;
        }
        i16 = i12 - 4 | 0;
        if ((i16 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 127](i16);
       }
      } while (0);
      i16 = HEAP32[i1 + 36 >> 2] | 0;
      HEAP8[i16 + 4 | 0] = 0;
      i12 = HEAP32[i16 >> 2] | 0;
      __ZN7WebCore15ProgressTracker17progressCompletedEPNS_5FrameE(HEAP32[(HEAP32[i12 + 32 >> 2] | 0) + 52 >> 2] | 0, i12);
      __ZN7WebCore11FrameLoader8setStateENS_10FrameStateE(i1, 2);
      if (i10) {
       i14 = 33;
       break;
      } else {
       i14 = 36;
       break;
      }
     } else {
      i12 = HEAP32[((HEAP32[i2 >> 2] | 0) == 0 ? i5 : i1 + 48 | 0) >> 2] | 0;
      if ((i12 | 0) == 0) {
       i14 = 32;
       break;
      }
      i16 = HEAP32[(__ZNK7WebCore14DocumentLoader14unreachableURLEv(i12) | 0) >> 2] | 0;
      if ((i16 | 0) == 0) {
       if (i10) {
        i14 = 33;
        break;
       } else {
        i14 = 36;
        break;
       }
      }
      i12 = i16 | 0;
      i13 = (HEAP32[i12 >> 2] | 0) + 2 | 0;
      HEAP32[i12 >> 2] = i13;
      if ((HEAP32[i16 + 4 >> 2] | 0) == 0) {
       i17 = i10;
       i18 = i13;
      } else {
       i13 = i10 & ((__ZN3WTF5equalEPKNS_10StringImplES2_(i16, HEAP32[(__ZNK7WebCore19ResourceRequestBase3urlEv(__ZN7WebCore14DocumentLoader7requestEv(i6) | 0) | 0) >> 2] | 0) | 0) ^ 1);
       i17 = i13;
       i18 = HEAP32[i12 >> 2] | 0;
      }
      i13 = i18 - 2 | 0;
      if ((i13 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i16);
       if (i17) {
        i14 = 33;
        break;
       } else {
        i14 = 36;
        break;
       }
      } else {
       HEAP32[i12 >> 2] = i13;
       if (i17) {
        i14 = 33;
        break;
       } else {
        i14 = 36;
        break;
       }
      }
     }
    }
   } while (0);
   if ((i14 | 0) == 32) {
    if (i10) {
     i14 = 33;
    } else {
     i14 = 36;
    }
   }
   do {
    if ((i14 | 0) == 33) {
     if ((i11 | 0) == 0) {
      break;
     }
     i10 = HEAP32[(HEAP32[i9 >> 2] | 0) + 32 >> 2] | 0;
     if ((i10 | 0) == 0) {
      i14 = 37;
      break;
     }
     __ZN7WebCore21BackForwardController14setCurrentItemEPNS_11HistoryItemE(HEAP32[i10 + 56 >> 2] | 0, i11);
     i10 = HEAP32[(HEAP32[i9 >> 2] | 0) + 84 >> 2] | 0;
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 276 >> 2] & 127](i10);
     i14 = 37;
    } else if ((i14 | 0) == 36) {
     if ((i11 | 0) != 0) {
      i14 = 37;
     }
    }
   } while (0);
   do {
    if ((i14 | 0) == 37) {
     i9 = i11 | 0;
     i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
     if ((i10 | 0) == 0) {
      __ZN7WebCore11HistoryItemD1Ev(i11);
      __ZN3WTF8fastFreeEPv(i11);
      break;
     } else {
      HEAP32[i9 >> 2] = i10;
      break;
     }
    }
   } while (0);
   i11 = i6 + 4 | 0;
   i14 = i11 | 0;
   i19 = HEAP32[i14 >> 2] | 0;
   i20 = i11;
   i21 = i14;
  } else {
   i14 = i6 + 4 | 0;
   i19 = i8;
   i20 = i14;
   i21 = i14 | 0;
  }
  i14 = i19 - 1 | 0;
  if ((i14 | 0) != 0) {
   HEAP32[i21 >> 2] = i14;
   return;
  }
  i14 = i20 - 4 | 0;
  if ((i14 | 0) == 0) {
   return;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 127](i14);
  return;
 } else if ((i3 | 0) == 1) {
  i14 = HEAP32[i1 + 48 >> 2] | 0;
  if ((i14 | 0) == 0) {
   return;
  }
  do {
   if (__ZNK7WebCore14DocumentLoader19isLoadingInAPISenseEv(i14) | 0) {
    if ((HEAP8[i14 + 974 | 0] & 1) != 0) {
     break;
    }
    return;
   }
  } while (0);
  __ZN7WebCore11FrameLoader8setStateENS_10FrameStateE(i1, 2);
  i20 = i1 + 4 | 0;
  i21 = HEAP32[i20 >> 2] | 0;
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 28 >> 2] & 127](i21);
  i21 = i1 | 0;
  do {
   if ((HEAP32[(HEAP32[i21 >> 2] | 0) + 32 >> 2] | 0) != 0) {
    i19 = HEAP32[i1 + 44 >> 2] | 0;
    if ((i19 - 1 | 0) >>> 0 >= 3 >>> 0) {
     if (!((i19 | 0) == 4 | (i19 | 0) == 9)) {
      break;
     }
    }
    __ZN7WebCore17HistoryController33restoreScrollPositionAndViewStateEv(HEAP32[i1 + 12 >> 2] | 0);
   }
  } while (0);
  i19 = i1 + 24 | 0;
  if (__ZNK7WebCore23FrameLoaderStateMachine28creatingInitialEmptyDocumentEv(i19) | 0) {
   return;
  }
  if (!(__ZNK7WebCore23FrameLoaderStateMachine30committedFirstRealDocumentLoadEv(i19) | 0)) {
   return;
  }
  i19 = HEAP32[i1 + 36 >> 2] | 0;
  HEAP8[i19 + 4 | 0] = 0;
  i8 = HEAP32[i19 >> 2] | 0;
  __ZN7WebCore15ProgressTracker17progressCompletedEPNS_5FrameE(HEAP32[(HEAP32[i8 + 32 >> 2] | 0) + 52 >> 2] | 0, i8);
  i8 = HEAP32[i21 >> 2] | 0;
  i19 = HEAP32[i8 + 32 >> 2] | 0;
  do {
   if ((i19 | 0) != 0) {
    if ((HEAP32[i8 + 28 >> 2] | 0) != (i8 | 0)) {
     break;
    }
    __ZN7WebCore4Page33resetRelevantPaintedObjectCounterEv(i19);
   }
  } while (0);
  i19 = HEAP32[i20 >> 2] | 0;
  if ((HEAP8[i14 + 968 | 0] & 1) == 0) {
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i19 >> 2] | 0) + 148 >> 2] & 63](i19, i14 + 952 | 0);
  } else {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 156 >> 2] & 127](i19);
  }
  __ZNK7WebCore8Document21existingAXObjectCacheEv(HEAP32[(HEAP32[i21 >> 2] | 0) + 456 >> 2] | 0) | 0;
  return;
 } else if ((i3 | 0) == 2) {
  HEAP32[i1 + 44 >> 2] = 0;
  i3 = HEAP32[i1 + 4 >> 2] | 0;
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 348 >> 2] & 127](i3);
  __ZN7WebCore17HistoryController27updateForFrameLoadCompletedEv(HEAP32[i1 + 12 >> 2] | 0);
  if ((HEAP32[i1 + 48 >> 2] | 0) == 0) {
   return;
  }
  i3 = i1 + 24 | 0;
  if (!(__ZNK7WebCore23FrameLoaderStateMachine30committedFirstRealDocumentLoadEv(i3) | 0)) {
   return;
  }
  if (__ZNK7WebCore23FrameLoaderStateMachine32isDisplayingInitialEmptyDocumentEv(i3) | 0) {
   return;
  }
  if (__ZNK7WebCore23FrameLoaderStateMachine15firstLayoutDoneEv(i3) | 0) {
   return;
  }
  __ZN7WebCore23FrameLoaderStateMachine9advanceToENS0_5StateE(i3, 4);
  return;
 } else {
  return;
 }
}
function __ZN7WebCore11FrameLoader15loadPostRequestERKNS_15ResourceRequestERKN3WTF6StringES7_bNS_13FrameLoadTypeENS4_10PassRefPtrINS_5EventEEENS9_INS_9FormStateEEE(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 var i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 480 | 0;
 i10 = i9 | 0;
 i11 = i9 + 8 | 0;
 i12 = i9 + 16 | 0;
 i13 = i9 + 24 | 0;
 i14 = i9 + 208 | 0;
 i15 = i9 + 216 | 0;
 i16 = i9 + 224 | 0;
 i17 = i9 + 416 | 0;
 i18 = i9 + 424 | 0;
 i19 = i9 + 432 | 0;
 i20 = i9 + 440 | 0;
 i21 = i9 + 448 | 0;
 i22 = i9 + 472 | 0;
 i23 = i8 | 0;
 i8 = HEAP32[i23 >> 2] | 0;
 HEAP32[i23 >> 2] = 0;
 i23 = i2 | 0;
 i2 = __ZNK7WebCore19ResourceRequestBase3urlEv(i23) | 0;
 i24 = __ZNK7WebCore19ResourceRequestBase8httpBodyEv(i23) | 0;
 i25 = (i24 | 0) == 0;
 if (!i25) {
  i26 = i24 | 0;
  HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 1;
 }
 __ZNK7WebCore19ResourceRequestBase15httpHeaderFieldEPKc(i11, i23, H_BASE + 192 | 0);
 __ZNK7WebCore19ResourceRequestBase15httpHeaderFieldEPKc(i12, i23, H_BASE + 184 | 0);
 i23 = i13 | 0;
 __ZN7WebCore19ResourceRequestBaseC2ERKNS_3URLENS_26ResourceRequestCachePolicyE(i23, i2, 0);
 _memset(i13 + 160 | 0, 0, 19) | 0;
 HEAP32[i13 + 180 >> 2] = 15;
 i2 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   if ((HEAP32[i2 + 4 >> 2] | 0) == 0) {
    break;
   }
   __ZN7WebCore19ResourceRequestBase18setHTTPHeaderFieldEPKcRKN3WTF6StringE(i23, H_BASE + 144 | 0, i3);
  }
 } while (0);
 __ZN7WebCore19ResourceRequestBase18setHTTPHeaderFieldEPKcRKN3WTF6StringE(i23, H_BASE + 184 | 0, i12);
 __ZN3WTF6StringC1EPKc(i14, H_BASE + 1160 | 0);
 __ZN7WebCore19ResourceRequestBase13setHTTPMethodERKN3WTF6StringE(i23, i14);
 i3 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i14 = i3 | 0;
   i2 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i14 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i3 = i15 | 0;
 HEAP32[i3 >> 2] = i24;
 if (!i25) {
  i2 = i24 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 }
 __ZN7WebCore19ResourceRequestBase11setHTTPBodyEN3WTF10PassRefPtrINS_8FormDataEEE(i23, i15);
 i15 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i3 = i15 | 0;
   i2 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) == 0) {
    __ZN7WebCore8FormDataD1Ev(i15);
    __ZN3WTF8fastFreeEPv(i15);
    break;
   } else {
    HEAP32[i3 >> 2] = i2;
    break;
   }
  }
 } while (0);
 __ZN7WebCore19ResourceRequestBase18setHTTPHeaderFieldEPKcRKN3WTF6StringE(i23, H_BASE + 192 | 0, i11);
 __ZN7WebCore11FrameLoader23addExtraFieldsToRequestERNS_15ResourceRequestENS_13FrameLoadTypeEb(i1, i13, i6, 1);
 i23 = i17 | 0;
 i15 = i7 | 0;
 i7 = HEAP32[i15 >> 2] | 0;
 HEAP32[i15 >> 2] = 0;
 HEAP32[i23 >> 2] = i7;
 __ZN7WebCore16NavigationActionC1ERKNS_15ResourceRequestENS_13FrameLoadTypeEbN3WTF10PassRefPtrINS_5EventEEE(i16, i13, i6, 1, i17);
 i17 = HEAP32[i23 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i23 = i17 + 8 | 0;
   i7 = i23 | 0;
   i15 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) != 0) {
    HEAP32[i7 >> 2] = i15;
    break;
   }
   i15 = i23 - 8 | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 127](i15);
  }
 } while (0);
 i17 = HEAP32[i4 >> 2] | 0;
 L30 : do {
  if ((i17 | 0) == 0) {
   i27 = 40;
  } else {
   if ((HEAP32[i17 + 4 >> 2] | 0) == 0) {
    i27 = 40;
    break;
   }
   do {
    if ((i8 | 0) == 0) {
     if ((HEAP32[i17 + 16 >> 2] & 16 | 0) == 0) {
      __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i10, i17);
      i28 = i10 | 0;
     } else {
      i15 = i10 | 0;
      HEAP32[i15 >> 2] = i17;
      i23 = i17 | 0;
      HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 2;
      i28 = i15;
     }
     i15 = i18 | 0;
     HEAP32[i15 >> 2] = HEAP32[i28 >> 2];
     i23 = __ZN7WebCore11FrameLoader22findFrameForNavigationERKN3WTF12AtomicStringEPNS_8DocumentE(i1, i18, 0) | 0;
     i7 = HEAP32[i15 >> 2] | 0;
     do {
      if ((i7 | 0) != 0) {
       i15 = i7 | 0;
       i2 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
       if ((i2 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i7);
        break;
       } else {
        HEAP32[i15 >> 2] = i2;
        break;
       }
      }
     } while (0);
     if ((i23 | 0) == 0) {
      break;
     }
     i7 = i19 | 0;
     HEAP32[i7 >> 2] = 0;
     __ZN7WebCore11FrameLoader24loadWithNavigationActionERKNS_15ResourceRequestERKNS_16NavigationActionEbNS_13FrameLoadTypeEN3WTF10PassRefPtrINS_9FormStateEEE(i23 + 80 | 0, i13, i16, i5, i6, i19);
     i2 = HEAP32[i7 >> 2] | 0;
     if ((i2 | 0) == 0) {
      break L30;
     }
     __ZN3WTF10RefCountedIN7WebCore9FormStateEE5derefEv(i2 | 0);
     break L30;
    }
   } while (0);
   i2 = HEAP32[i1 + 8 >> 2] | 0;
   i7 = i20 | 0;
   HEAP32[i7 >> 2] = i8;
   i15 = i21 + 16 | 0;
   i3 = i21;
   HEAP32[i15 >> 2] = i3;
   HEAP32[i21 >> 2] = H_BASE + 1456;
   HEAP32[i21 + 4 >> 2] = i1;
   __ZN7WebCore13PolicyChecker20checkNewWindowPolicyERKNS_16NavigationActionERKNS_15ResourceRequestEN3WTF10PassRefPtrINS_9FormStateEEERKNS7_6StringENSt3__18functionIFvS6_SA_SD_S3_bEEE(i2, i16, i13, i20, i4, i21);
   i2 = HEAP32[i15 >> 2] | 0;
   do {
    if ((i2 | 0) == (i3 | 0)) {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 16 >> 2] & 127](i3);
    } else {
     if ((i2 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 127](i2);
    }
   } while (0);
   i2 = HEAP32[i7 >> 2] | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   __ZN3WTF10RefCountedIN7WebCore9FormStateEE5derefEv(i2 | 0);
  }
 } while (0);
 do {
  if ((i27 | 0) == 40) {
   i21 = i1 + 61 | 0;
   i4 = (HEAP8[i21] & 1) == 0;
   i20 = i22 | 0;
   HEAP32[i20 >> 2] = i8;
   __ZN7WebCore11FrameLoader24loadWithNavigationActionERKNS_15ResourceRequestERKNS_16NavigationActionEbNS_13FrameLoadTypeEN3WTF10PassRefPtrINS_9FormStateEEE(i1, i13, i16, i5, i6, i22);
   i19 = HEAP32[i20 >> 2] | 0;
   if ((i19 | 0) != 0) {
    __ZN3WTF10RefCountedIN7WebCore9FormStateEE5derefEv(i19 | 0);
   }
   if (i4) {
    break;
   }
   HEAP8[i21] = 0;
   i21 = HEAP32[i1 + 52 >> 2] | 0;
   if ((i21 | 0) == 0) {
    break;
   }
   HEAP8[i21 + 976 | 0] = 1;
  }
 } while (0);
 i1 = HEAP32[i16 + 188 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i22 = i1 + 8 | 0;
   i6 = i22 | 0;
   i5 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i6 >> 2] = i5;
    break;
   }
   i5 = i22 - 8 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 127](i5);
  }
 } while (0);
 __ZN7WebCore15ResourceRequestD2Ev(i16 | 0);
 __ZN7WebCore15ResourceRequestD2Ev(i13);
 i13 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i12 = i13 | 0;
   i16 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i12 >> 2] = i16;
    break;
   }
  }
 } while (0);
 i13 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i11 = i13 | 0;
   i16 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i11 >> 2] = i16;
    break;
   }
  }
 } while (0);
 if (i25) {
  STACKTOP = i9;
  return;
 }
 i25 = i24 | 0;
 i13 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
 if ((i13 | 0) == 0) {
  __ZN7WebCore8FormDataD1Ev(i24);
  __ZN3WTF8fastFreeEPv(i24);
  STACKTOP = i9;
  return;
 } else {
  HEAP32[i25 >> 2] = i13;
  STACKTOP = i9;
  return;
 }
}
function __ZN7WebCore11FrameLoader4loadERKNS_16FrameLoadRequestE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 720 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 320 | 0;
 i7 = i3 + 328 | 0;
 i8 = i3 + 520 | 0;
 i9 = i3 + 528 | 0;
 i10 = i3 + 552 | 0;
 i11 = i3 + 664 | 0;
 i12 = i3 + 672 | 0;
 __ZN7WebCore16FrameLoadRequestC1ERKS0_(i5, i2);
 L1 : do {
  if ((HEAP8[i1 + 63 | 0] & 1) == 0) {
   i2 = i5 + 192 | 0;
   i13 = HEAP32[i2 >> 2] | 0;
   do {
    if ((i13 | 0) != 0) {
     if ((HEAP32[i13 + 4 >> 2] | 0) == 0) {
      break;
     }
     if ((HEAP32[i13 + 16 >> 2] & 16 | 0) == 0) {
      __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i4, i13);
      i14 = i4 | 0;
     } else {
      i15 = i4 | 0;
      HEAP32[i15 >> 2] = i13;
      i16 = i13 | 0;
      HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
      i14 = i15;
     }
     i15 = i6 | 0;
     HEAP32[i15 >> 2] = HEAP32[i14 >> 2];
     i16 = __ZN7WebCore11FrameLoader22findFrameForNavigationERKN3WTF12AtomicStringEPNS_8DocumentE(i1, i6, 0) | 0;
     i17 = HEAP32[i15 >> 2] | 0;
     do {
      if ((i17 | 0) != 0) {
       i15 = i17 | 0;
       i18 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
       if ((i18 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i17);
        break;
       } else {
        HEAP32[i15 >> 2] = i18;
        break;
       }
      }
     } while (0);
     if ((i16 | 0) == 0) {
      break;
     }
     HEAP8[i5 + 197 | 0] = 0;
     i17 = i16 + 80 | 0;
     if ((i17 | 0) == (i1 | 0)) {
      break;
     }
     __ZN7WebCore11FrameLoader4loadERKNS_16FrameLoadRequestE(i17, i5);
     break L1;
    }
   } while (0);
   if ((HEAP8[i5 + 197 | 0] & 1) != 0) {
    i13 = HEAP32[i1 + 8 >> 2] | 0;
    i17 = i5 + 8 | 0;
    __ZN7WebCore16NavigationActionC1ERKNS_15ResourceRequestENS_14NavigationTypeE(i7, i17, 5);
    i18 = i8 | 0;
    HEAP32[i18 >> 2] = 0;
    i15 = i9 + 16 | 0;
    i19 = i9;
    HEAP32[i15 >> 2] = i19;
    HEAP32[i9 >> 2] = H_BASE + 1296;
    HEAP32[i9 + 4 >> 2] = i1;
    __ZN7WebCore13PolicyChecker20checkNewWindowPolicyERKNS_16NavigationActionERKNS_15ResourceRequestEN3WTF10PassRefPtrINS_9FormStateEEERKNS7_6StringENSt3__18functionIFvS6_SA_SD_S3_bEEE(i13, i7, i17, i8, i2, i9);
    i17 = HEAP32[i15 >> 2] | 0;
    do {
     if ((i17 | 0) == (i19 | 0)) {
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 16 >> 2] & 127](i19);
     } else {
      if ((i17 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 20 >> 2] & 127](i17);
     }
    } while (0);
    i17 = HEAP32[i18 >> 2] | 0;
    if ((i17 | 0) != 0) {
     __ZN3WTF10RefCountedIN7WebCore9FormStateEE5derefEv(i17 | 0);
    }
    i17 = HEAP32[i7 + 188 >> 2] | 0;
    do {
     if ((i17 | 0) != 0) {
      i19 = i17 + 8 | 0;
      i2 = i19 | 0;
      i15 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
      if ((i15 | 0) != 0) {
       HEAP32[i2 >> 2] = i15;
       break;
      }
      i15 = i19 - 8 | 0;
      if ((i15 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 127](i15);
     }
    } while (0);
    __ZN7WebCore15ResourceRequestD2Ev(i7 | 0);
    break;
   }
   if ((HEAP32[i5 + 200 >> 2] | 0) == 0) {
    __ZN7WebCore11FrameLoader27defaultSubstituteDataForURLERKNS_3URLE(i10, i1, __ZNK7WebCore19ResourceRequestBase3urlEv(i5 + 8 | 0) | 0);
    i17 = i5 + 200 | 0;
    __ZN7WebCore14SubstituteDataaSERKS0_(i17, i10) | 0;
    __ZN7WebCore14SubstituteDataD2Ev(i10);
    i20 = i17;
   } else {
    i20 = i5 + 200 | 0;
   }
   i17 = HEAP32[i1 + 4 >> 2] | 0;
   FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i17 >> 2] | 0) + 372 >> 2] & 7](i11, i17, i5 + 8 | 0, i20);
   i17 = i11 | 0;
   i18 = HEAP32[i17 >> 2] | 0;
   HEAP32[i17 >> 2] = 0;
   do {
    if ((HEAP8[i5 + 196 | 0] & 1) != 0) {
     i17 = HEAP32[i1 + 48 >> 2] | 0;
     if ((i17 | 0) == 0) {
      break;
     }
     do {
      if ((HEAP8[i17 + 1504 | 0] & 1) == 0) {
       i15 = HEAP32[i17 + 1500 >> 2] | 0;
       if ((i15 | 0) == 0) {
        i21 = 0;
        i22 = 0;
        i23 = 1;
        i24 = 1;
        break;
       }
       i19 = i15 | 0;
       i2 = (HEAP32[i19 >> 2] | 0) + 2 | 0;
       HEAP32[i19 >> 2] = i2;
       i25 = 1;
       i26 = 0;
       i27 = i15;
       i28 = i2;
       i29 = 37;
      } else {
       __ZNK7WebCore14DocumentLoader13urlForHistoryEv(i12, i17);
       i2 = HEAP32[i12 >> 2] | 0;
       if ((i2 | 0) == 0) {
        i21 = 0;
        i22 = 1;
        i23 = 0;
        i24 = 1;
        break;
       }
       i15 = i2 | 0;
       i19 = (HEAP32[i15 >> 2] | 0) + 2 | 0;
       HEAP32[i15 >> 2] = i19;
       i25 = 0;
       i26 = 1;
       i27 = i2;
       i28 = i19;
       i29 = 37;
      }
     } while (0);
     if ((i29 | 0) == 37) {
      HEAP32[i27 >> 2] = i28 + 2;
      i21 = i27;
      i22 = i26;
      i23 = i25;
      i24 = (i27 | 0) == 0;
     }
     i17 = i18 + 1500 | 0;
     i16 = HEAP32[i17 >> 2] | 0;
     HEAP32[i17 >> 2] = i21;
     do {
      if ((i16 | 0) != 0) {
       i17 = i16 | 0;
       i19 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
       if ((i19 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i16);
        break;
       } else {
        HEAP32[i17 >> 2] = i19;
        break;
       }
      }
     } while (0);
     do {
      if (!(i24 | i23 ^ 1)) {
       i16 = i21 | 0;
       i19 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
       if ((i19 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i21);
        break;
       } else {
        HEAP32[i16 >> 2] = i19;
        break;
       }
      }
     } while (0);
     if (!i22) {
      break;
     }
     do {
      if (!i24) {
       i19 = i21 | 0;
       i16 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
       if ((i16 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i21);
        break;
       } else {
        HEAP32[i19 >> 2] = i16;
        break;
       }
      }
     } while (0);
     i16 = HEAP32[i12 >> 2] | 0;
     if ((i16 | 0) == 0) {
      break;
     }
     i19 = i16 | 0;
     i17 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
     if ((i17 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i16);
      break;
     } else {
      HEAP32[i19 >> 2] = i17;
      break;
     }
    }
   } while (0);
   __ZN7WebCore11FrameLoader4loadEPNS_14DocumentLoaderE(i1, i18);
   if ((i18 | 0) == 0) {
    break;
   }
   i17 = i18 + 4 | 0;
   i19 = i17 | 0;
   i16 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
   if ((i16 | 0) != 0) {
    HEAP32[i19 >> 2] = i16;
    break;
   }
   i16 = i17 - 4 | 0;
   if ((i16 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 127](i16);
  }
 } while (0);
 __ZN7WebCore14SubstituteDataD2Ev(i5 + 200 | 0);
 i1 = HEAP32[i5 + 192 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i12 = i1 | 0;
   i21 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i21 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i12 >> 2] = i21;
    break;
   }
  }
 } while (0);
 __ZN7WebCore15ResourceRequestD2Ev(i5 + 8 | 0);
 i1 = HEAP32[i5 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = i1 | 0;
 if (((tempValue = HEAP32[i5 >> 2] | 0, HEAP32[i5 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore14SecurityOriginD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11FrameLoader29loadedResourceFromMemoryCacheEPNS_14CachedResourceERNS_15ResourceRequestE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 248 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 32 | 0;
 i8 = i4 + 216 | 0;
 i9 = i4 + 224 | 0;
 i10 = i2 + 48 | 0;
 __ZN7WebCore19ResourceRequestBaseC2ERKNS_3URLENS_26ResourceRequestCachePolicyE(i7 | 0, __ZNK7WebCore19ResourceRequestBase3urlEv(i10) | 0, 0);
 _memset(i7 + 160 | 0, 0, 19) | 0;
 HEAP32[i7 + 180 >> 2] = 15;
 __ZN7WebCore15ResourceRequestaSERKS0_(i3, i7) | 0;
 __ZN7WebCore15ResourceRequestD2Ev(i7);
 i7 = HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i2 + 240 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 i11 = i1 + 48 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 i13 = __ZNK7WebCore19ResourceRequestBase3urlEv(i10) | 0;
 i14 = HEAP32[i12 + 1468 >> 2] | 0;
 L7 : do {
  if ((i14 | 0) != 0) {
   i15 = HEAP32[i12 + 1476 >> 2] | 0;
   i16 = i13 | 0;
   i17 = HEAP32[i16 >> 2] | 0;
   i18 = HEAP32[i17 + 16 >> 2] | 0;
   if (i18 >>> 0 > 127 >>> 0) {
    i19 = i18 >>> 7;
   } else {
    i19 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i17) | 0;
   }
   i17 = (i19 >>> 23) + ~i19 | 0;
   i18 = i17 << 12 ^ i17;
   i17 = i18 >>> 7 ^ i18;
   i18 = i17 << 2 ^ i17;
   i17 = i18 >>> 20 ^ i18 | 1;
   i18 = i19;
   i20 = 0;
   while (1) {
    i21 = i18 & i15;
    i22 = i14 + (i21 << 2) | 0;
    i23 = HEAP32[i22 >> 2] | 0;
    i24 = i23;
    if ((i24 | 0) == 0) {
     break L7;
    } else if ((i24 | 0) != (-1 | 0)) {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i23, HEAP32[i16 >> 2] | 0) | 0) {
      break;
     }
    }
    i23 = (i20 | 0) == 0 ? i17 : i20;
    i18 = i23 + i21 | 0;
    i20 = i23;
   }
   if ((i22 | 0) == 0) {
    break;
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 if ((HEAP32[i2 + 588 >> 2] & 1920 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP8[i7 + 105 | 0] & 1) == 0) {
  i22 = HEAP32[i11 >> 2] | 0;
  i14 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(i7) | 0;
  if ((i14 | 0) != 0) {
   __ZN7WebCore24InspectorInstrumentation34didLoadResourceFromMemoryCacheImplEPNS_19InstrumentingAgentsEPNS_14DocumentLoaderEPNS_14CachedResourceE(i14, i22, i2);
  }
  i22 = HEAP32[i11 >> 2] | 0;
  i14 = i2 + 48 | 0;
  i19 = i22 + 1488 | 0;
  i13 = i22 + 1496 | 0;
  i12 = HEAP32[i13 >> 2] | 0;
  if ((i12 | 0) == (HEAP32[i22 + 1492 >> 2] | 0)) {
   __ZN3WTF6VectorIN7WebCore15ResourceRequestELj0ENS_15CrashOnOverflowEE14appendSlowCaseIRKS2_EEvOT_(i19, i14);
  } else {
   i22 = HEAP32[i19 >> 2] | 0;
   __ZN7WebCore19ResourceRequestBaseC2ERKS0_(i22 + (i12 * 184 & -1) | 0, i14 | 0);
   i14 = HEAP32[i2 + 208 >> 2] | 0;
   HEAP32[i22 + (i12 * 184 & -1) + 160 >> 2] = i14;
   if ((i14 | 0) != 0) {
    i19 = i14 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 2;
   }
   i19 = HEAP32[i2 + 212 >> 2] | 0;
   HEAP32[i22 + (i12 * 184 & -1) + 164 >> 2] = i19;
   if ((i19 | 0) != 0) {
    i14 = i19 | 0;
    HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
   }
   i14 = HEAP32[i2 + 216 >> 2] | 0;
   HEAP32[i22 + (i12 * 184 & -1) + 168 >> 2] = i14;
   if ((i14 | 0) != 0) {
    i19 = i14 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 2;
   }
   i19 = HEAP32[i2 + 220 >> 2] | 0;
   HEAP32[i22 + (i12 * 184 & -1) + 172 >> 2] = i19;
   if ((i19 | 0) != 0) {
    i14 = i19 | 0;
    HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
   }
   HEAP8[i22 + (i12 * 184 & -1) + 176 | 0] = HEAP8[i2 + 224 | 0] & 1;
   HEAP8[i22 + (i12 * 184 & -1) + 177 | 0] = HEAP8[i2 + 225 | 0] & 1;
   HEAP8[i22 + (i12 * 184 & -1) + 178 | 0] = HEAP8[i2 + 226 | 0] & 1;
   HEAP32[i22 + (i12 * 184 & -1) + 180 >> 2] = HEAP32[i2 + 228 >> 2];
   HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
  }
  i13 = HEAP32[i11 >> 2] | 0;
  i12 = __ZNK7WebCore19ResourceRequestBase3urlEv(i10) | 0;
  i22 = i12 | 0;
  if (__ZN7WebCore10protocolIsERKN3WTF6StringEPKc(i22, H_BASE + 208 | 0) | 0) {
   STACKTOP = i4;
   return;
  }
  i14 = HEAP32[i12 >> 2] | 0;
  if ((i14 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  if ((HEAP32[i14 + 4 >> 2] | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i6, i13 + 1468 | 0, i22, i22);
  STACKTOP = i4;
  return;
 }
 i22 = HEAP32[i1 + 4 >> 2] | 0;
 i13 = i2 + 272 | 0;
 i6 = i2 + 568 | 0;
 if (FUNCTION_TABLE_iiiiii[HEAP32[(HEAP32[i22 >> 2] | 0) + 80 >> 2] & 1](i22, HEAP32[i11 >> 2] | 0, i3, i13, HEAP32[i6 >> 2] | 0) | 0) {
  i22 = HEAP32[i11 >> 2] | 0;
  i14 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(i7) | 0;
  if ((i14 | 0) != 0) {
   __ZN7WebCore24InspectorInstrumentation34didLoadResourceFromMemoryCacheImplEPNS_19InstrumentingAgentsEPNS_14DocumentLoaderEPNS_14CachedResourceE(i14, i22, i2);
  }
  i2 = HEAP32[i11 >> 2] | 0;
  i22 = __ZNK7WebCore19ResourceRequestBase3urlEv(i10) | 0;
  i10 = i22 | 0;
  if (__ZN7WebCore10protocolIsERKN3WTF6StringEPKc(i10, H_BASE + 208 | 0) | 0) {
   STACKTOP = i4;
   return;
  }
  i14 = HEAP32[i22 >> 2] | 0;
  if ((i14 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  if ((HEAP32[i14 + 4 >> 2] | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i5, i2 + 1468 | 0, i10, i10);
  STACKTOP = i4;
  return;
 }
 _memset(i9 | 0, 0, 16) | 0;
 HEAP8[i9 + 16 | 0] = 1;
 HEAP8[i9 + 17 | 0] = 0;
 HEAP8[i9 + 18 | 0] = 0;
 __ZN7WebCore11FrameLoader19requestFromDelegateERNS_15ResourceRequestERmRNS_13ResourceErrorE(i1, i3, i8, i9);
 i10 = HEAP32[i8 >> 2] | 0;
 i8 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(i7) | 0;
 if ((i8 | 0) != 0) {
  __ZN7WebCore24InspectorInstrumentation24markResourceAsCachedImplEPNS_19InstrumentingAgentsEm(i8, i10);
 }
 __ZN7WebCore20ResourceLoadNotifier29sendRemainingDelegateMessagesEPNS_14DocumentLoaderEmRKNS_15ResourceRequestERKNS_16ResourceResponseEPKciiRKNS_13ResourceErrorE(i1 + 16 | 0, HEAP32[i11 >> 2] | 0, i10, i3, i13, 0, HEAP32[i6 >> 2] | 0, 0, i9);
 i6 = HEAP32[i9 + 12 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i13 = i6 | 0;
   i3 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i13 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i9 + 8 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i3 = i6 | 0;
   i13 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i3 >> 2] = i13;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i9 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i9 = i6 | 0;
 i13 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
 if ((i13 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i6);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i9 >> 2] = i13;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore19ResourceRequestBaseC2ERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i6 = i5 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
 }
 i6 = i2 + 4 | 0;
 i5 = i1 + 4 | 0;
 i7 = HEAP8[i5] & -2 | HEAP8[i6] & 1;
 HEAP8[i5] = i7;
 HEAP8[i5] = i7 & -3 | HEAP8[i6] & 2;
 HEAP32[i1 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAP32[i1 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
 HEAP32[i1 + 16 >> 2] = HEAP32[i2 + 16 >> 2];
 HEAP32[i1 + 20 >> 2] = HEAP32[i2 + 20 >> 2];
 HEAP32[i1 + 24 >> 2] = HEAP32[i2 + 24 >> 2];
 HEAP32[i1 + 28 >> 2] = HEAP32[i2 + 28 >> 2];
 HEAP32[i1 + 32 >> 2] = HEAP32[i2 + 32 >> 2];
 HEAP32[i1 + 36 >> 2] = HEAP32[i2 + 36 >> 2];
 HEAP32[i1 + 40 >> 2] = HEAP32[i2 + 40 >> 2];
 HEAP32[i1 + 44 >> 2] = HEAP32[i2 + 44 >> 2];
 HEAP32[i1 + 48 >> 2] = HEAP32[i2 + 48 >> 2];
 HEAPF64[i1 + 56 >> 3] = +HEAPF64[i2 + 56 >> 3];
 i6 = HEAP32[i2 + 64 >> 2] | 0;
 HEAP32[i1 + 64 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i7 = i6 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = i2 + 68 | 0;
 i6 = i1 + 68 | 0;
 i5 = HEAP8[i6] & -2 | HEAP8[i7] & 1;
 HEAP8[i6] = i5;
 HEAP8[i6] = i5 & -3 | HEAP8[i7] & 2;
 HEAP32[i1 + 72 >> 2] = HEAP32[i2 + 72 >> 2];
 HEAP32[i1 + 76 >> 2] = HEAP32[i2 + 76 >> 2];
 HEAP32[i1 + 80 >> 2] = HEAP32[i2 + 80 >> 2];
 HEAP32[i1 + 84 >> 2] = HEAP32[i2 + 84 >> 2];
 HEAP32[i1 + 88 >> 2] = HEAP32[i2 + 88 >> 2];
 HEAP32[i1 + 92 >> 2] = HEAP32[i2 + 92 >> 2];
 HEAP32[i1 + 96 >> 2] = HEAP32[i2 + 96 >> 2];
 HEAP32[i1 + 100 >> 2] = HEAP32[i2 + 100 >> 2];
 HEAP32[i1 + 104 >> 2] = HEAP32[i2 + 104 >> 2];
 HEAP32[i1 + 108 >> 2] = HEAP32[i2 + 108 >> 2];
 i7 = HEAP32[i2 + 112 >> 2] | 0;
 HEAP32[i1 + 112 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i5 = i7 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
 }
 i5 = i1 + 116 | 0;
 i7 = i5 | 0;
 _memset(i5 | 0, 0, 20) | 0;
 i5 = HEAP32[i2 + 116 >> 2] | 0;
 i6 = HEAP32[i2 + 120 >> 2] | 0;
 i8 = i5 + (i6 << 3) | 0;
 L10 : do {
  if ((HEAP32[i2 + 128 >> 2] | 0) != 0) {
   L12 : do {
    if ((i6 | 0) == 0) {
     i9 = i5;
    } else {
     i10 = i5;
     while (1) {
      i11 = HEAP32[i10 >> 2] | 0;
      if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
       i9 = i10;
       break L12;
      }
      i10 = i10 + 8 | 0;
      if ((i10 | 0) == (i8 | 0)) {
       break L10;
      }
     }
    }
   } while (0);
   if ((i9 | 0) == (i8 | 0)) {
    break;
   } else {
    i12 = i9;
   }
   while (1) {
    __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E3addINS_22IdentityHashTranslatorIS7_EERKS1_RKS4_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S4_S6_S7_SD_SA_EEEEOT0_OT1_(i4, i7, i12 | 0, i12);
    i10 = i12 + 8 | 0;
    if ((i10 | 0) == (i8 | 0)) {
     break L10;
    } else {
     i13 = i10;
    }
    while (1) {
     i10 = HEAP32[i13 >> 2] | 0;
     if (!((i10 | 0) == (-1 | 0) | (i10 | 0) == 0)) {
      break;
     }
     i10 = i13 + 8 | 0;
     if ((i10 | 0) == (i8 | 0)) {
      break L10;
     } else {
      i13 = i10;
     }
    }
    if ((i13 | 0) == (i8 | 0)) {
     break;
    } else {
     i12 = i13;
    }
   }
  }
 } while (0);
 i13 = HEAP32[i2 + 140 >> 2] | 0;
 i12 = i2 + 144 | 0;
 i8 = HEAP32[i12 >> 2] | 0;
 i7 = i1 + 136 | 0;
 HEAP32[i7 >> 2] = 0;
 i4 = i1 + 140 | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 144 >> 2] = i8;
 do {
  if ((i13 | 0) != 0) {
   if (i13 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   }
   i8 = __ZN3WTF18fastMallocGoodSizeEj(i13 << 2) | 0;
   HEAP32[i4 >> 2] = i8 >>> 2;
   i9 = __ZN3WTF10fastMallocEj(i8) | 0;
   i8 = i9;
   HEAP32[i7 >> 2] = i8;
   if ((i9 | 0) == 0) {
    break;
   }
   i9 = HEAP32[i2 + 136 >> 2] | 0;
   i5 = HEAP32[i12 >> 2] | 0;
   i6 = i9 + (i5 << 2) | 0;
   if ((i5 | 0) == 0) {
    break;
   } else {
    i14 = i9;
    i15 = i8;
   }
   while (1) {
    i8 = HEAP32[i14 >> 2] | 0;
    HEAP32[i15 >> 2] = i8;
    if ((i8 | 0) != 0) {
     i9 = i8 | 0;
     HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
    }
    i9 = i14 + 4 | 0;
    if ((i9 | 0) == (i6 | 0)) {
     break;
    } else {
     i14 = i9;
     i15 = i15 + 4 | 0;
    }
   }
  }
 } while (0);
 i15 = HEAP32[i2 + 148 >> 2] | 0;
 HEAP32[i1 + 148 >> 2] = i15;
 if ((i15 | 0) == 0) {
  i16 = i2 + 152 | 0;
  i17 = HEAP8[i16] | 0;
  i18 = i17 & 1;
  i19 = i1 + 152 | 0;
  i20 = HEAP8[i19] | 0;
  i21 = i20 & -2;
  i22 = i21 | i18;
  HEAP8[i19] = i22;
  i23 = HEAP8[i16] | 0;
  i24 = i23 & 2;
  i25 = i22 & -3;
  i26 = i25 | i24;
  HEAP8[i19] = i26;
  i27 = HEAP8[i16] | 0;
  i28 = i27 & 4;
  i29 = i26 & -5;
  i30 = i29 | i28;
  HEAP8[i19] = i30;
  i31 = HEAP8[i16] | 0;
  i32 = i31 & 8;
  i33 = i30 & -9;
  i34 = i33 | i32;
  HEAP8[i19] = i34;
  i35 = HEAP8[i16] | 0;
  i36 = i35 & 16;
  i37 = i34 & -17;
  i38 = i37 | i36;
  HEAP8[i19] = i38;
  i39 = HEAP8[i16] | 0;
  i40 = i39 & 32;
  i41 = i38 & -33;
  i42 = i41 | i40;
  HEAP8[i19] = i42;
  i43 = HEAP8[i16] | 0;
  i44 = i43 & 64;
  i45 = i42 & -65;
  i46 = i45 | i44;
  HEAP8[i19] = i46;
  i47 = HEAP8[i16] | 0;
  i48 = i47 & -128;
  i49 = i46 & 127;
  i50 = i49 | i48;
  HEAP8[i19] = i50;
  i51 = i1 + 156 | 0;
  i52 = i2 + 156 | 0;
  i53 = HEAP32[i52 >> 2] | 0;
  HEAP32[i51 >> 2] = i53;
  STACKTOP = i3;
  return;
 }
 i14 = i15 | 0;
 HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
 i16 = i2 + 152 | 0;
 i17 = HEAP8[i16] | 0;
 i18 = i17 & 1;
 i19 = i1 + 152 | 0;
 i20 = HEAP8[i19] | 0;
 i21 = i20 & -2;
 i22 = i21 | i18;
 HEAP8[i19] = i22;
 i23 = HEAP8[i16] | 0;
 i24 = i23 & 2;
 i25 = i22 & -3;
 i26 = i25 | i24;
 HEAP8[i19] = i26;
 i27 = HEAP8[i16] | 0;
 i28 = i27 & 4;
 i29 = i26 & -5;
 i30 = i29 | i28;
 HEAP8[i19] = i30;
 i31 = HEAP8[i16] | 0;
 i32 = i31 & 8;
 i33 = i30 & -9;
 i34 = i33 | i32;
 HEAP8[i19] = i34;
 i35 = HEAP8[i16] | 0;
 i36 = i35 & 16;
 i37 = i34 & -17;
 i38 = i37 | i36;
 HEAP8[i19] = i38;
 i39 = HEAP8[i16] | 0;
 i40 = i39 & 32;
 i41 = i38 & -33;
 i42 = i41 | i40;
 HEAP8[i19] = i42;
 i43 = HEAP8[i16] | 0;
 i44 = i43 & 64;
 i45 = i42 & -65;
 i46 = i45 | i44;
 HEAP8[i19] = i46;
 i47 = HEAP8[i16] | 0;
 i48 = i47 & -128;
 i49 = i46 & 127;
 i50 = i49 | i48;
 HEAP8[i19] = i50;
 i51 = i1 + 156 | 0;
 i52 = i2 + 156 | 0;
 i53 = HEAP32[i52 >> 2] | 0;
 HEAP32[i51 >> 2] = i53;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11FrameLoader25loadResourceSynchronouslyERKNS_15ResourceRequestENS_17StoredCredentialsENS_22ClientCredentialPolicyERNS_13ResourceErrorERNS_16ResourceResponseERN3WTF6VectorIcLj0ENSA_15CrashOnOverflowEEE(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 400 | 0;
 i9 = i8 | 0;
 i10 = i8 + 8 | 0;
 i11 = i8 + 16 | 0;
 i12 = i8 + 200 | 0;
 i13 = i8 + 208 | 0;
 i14 = i8 + 216 | 0;
 i15 = i1 | 0;
 i16 = HEAP32[(HEAP32[(HEAP32[i15 >> 2] | 0) + 456 >> 2] | 0) + 1944 >> 2] | 0;
 i17 = i2 | 0;
 i18 = __ZNK7WebCore19ResourceRequestBase3urlEv(i17) | 0;
 i19 = HEAP32[i15 >> 2] | 0;
 if ((HEAP8[(HEAP32[i19 + 456 >> 2] | 0) + 1581 | 0] & 1) == 0) {
  i20 = i19;
 } else {
  i21 = i19;
  while (1) {
   i19 = __ZNK7WebCore9FrameTree6parentEv(i21 + 40 | 0) | 0;
   if ((HEAP8[(HEAP32[i19 + 456 >> 2] | 0) + 1581 | 0] & 1) == 0) {
    i20 = i19;
    break;
   } else {
    i21 = i19;
   }
  }
 }
 i21 = i10 | 0;
 i19 = HEAP32[i20 + 144 >> 2] | 0;
 HEAP32[i21 >> 2] = i19;
 if ((i19 | 0) != 0) {
  i20 = i19 | 0;
  HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 2;
 }
 __ZN7WebCore14SecurityPolicy22generateReferrerHeaderENS_14ReferrerPolicyERKNS_3URLERKN3WTF6StringE(i9, i16, i18, i10);
 i10 = HEAP32[i21 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i21 = i10 | 0;
   i18 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
   if ((i18 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i21 >> 2] = i18;
    break;
   }
  }
 } while (0);
 i10 = i11 | 0;
 __ZN7WebCore19ResourceRequestBaseC2ERKS0_(i10, i17);
 i17 = i11 + 160 | 0;
 i18 = HEAP32[i2 + 160 >> 2] | 0;
 HEAP32[i17 >> 2] = i18;
 if ((i18 | 0) != 0) {
  i21 = i18 | 0;
  HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 2;
 }
 i21 = i11 + 164 | 0;
 i18 = HEAP32[i2 + 164 >> 2] | 0;
 HEAP32[i21 >> 2] = i18;
 if ((i18 | 0) != 0) {
  i16 = i18 | 0;
  HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
 }
 i16 = i11 + 168 | 0;
 i18 = HEAP32[i2 + 168 >> 2] | 0;
 HEAP32[i16 >> 2] = i18;
 if ((i18 | 0) != 0) {
  i20 = i18 | 0;
  HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 2;
 }
 i20 = i11 + 172 | 0;
 i18 = HEAP32[i2 + 172 >> 2] | 0;
 HEAP32[i20 >> 2] = i18;
 if ((i18 | 0) != 0) {
  i19 = i18 | 0;
  HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 2;
 }
 i19 = i11 + 176 | 0;
 HEAP8[i19] = HEAP8[i2 + 176 | 0] & 1;
 i18 = i11 + 177 | 0;
 HEAP8[i18] = HEAP8[i2 + 177 | 0] & 1;
 i22 = i11 + 178 | 0;
 HEAP8[i22] = HEAP8[i2 + 178 | 0] & 1;
 i23 = i11 + 180 | 0;
 HEAP32[i23 >> 2] = HEAP32[i2 + 180 >> 2];
 __ZN7WebCore19ResourceRequestBase18setTimeoutIntervalEd(i10, +10);
 i24 = i9 | 0;
 i25 = HEAP32[i24 >> 2] | 0;
 do {
  if ((i25 | 0) != 0) {
   if ((HEAP32[i25 + 4 >> 2] | 0) == 0) {
    break;
   }
   __ZN7WebCore19ResourceRequestBase18setHTTPHeaderFieldEPKcRKN3WTF6StringE(i10, H_BASE + 144 | 0, i9);
  }
 } while (0);
 __ZNK7WebCore14SecurityOrigin8toStringEv(i12, HEAP32[(HEAP32[(HEAP32[i15 >> 2] | 0) + 456 >> 2] | 0) + 100 >> 2] | 0);
 __ZN7WebCore11FrameLoader21addHTTPOriginIfNeededERNS_15ResourceRequestERKN3WTF6StringE(i11, i12);
 i9 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i12 = i9 | 0;
   i25 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i25 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i12 >> 2] = i25;
    break;
   }
  }
 } while (0);
 __ZN7WebCore19ResourceRequestBase23setFirstPartyForCookiesERKNS_3URLE(i10, __ZNK7WebCore19ResourceRequestBase3urlEv(__ZN7WebCore14DocumentLoader7requestEv(HEAP32[(HEAP32[(HEAP32[i15 >> 2] | 0) + 28 >> 2] | 0) + 128 >> 2] | 0) | 0) | 0);
 __ZN7WebCore11FrameLoader23addExtraFieldsToRequestERNS_15ResourceRequestENS_13FrameLoadTypeEb(i1, i11, HEAP32[i1 + 44 >> 2] | 0, 0);
 HEAP32[i13 >> 2] = 0;
 __ZN7WebCore19ResourceRequestBaseC2ERKS0_(i14 | 0, i10);
 i10 = HEAP32[i17 >> 2] | 0;
 HEAP32[i14 + 160 >> 2] = i10;
 if ((i10 | 0) != 0) {
  i17 = i10 | 0;
  HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 2;
 }
 i17 = HEAP32[i21 >> 2] | 0;
 HEAP32[i14 + 164 >> 2] = i17;
 if ((i17 | 0) != 0) {
  i21 = i17 | 0;
  HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 2;
 }
 i21 = HEAP32[i16 >> 2] | 0;
 HEAP32[i14 + 168 >> 2] = i21;
 if ((i21 | 0) != 0) {
  i16 = i21 | 0;
  HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
 }
 i16 = HEAP32[i20 >> 2] | 0;
 HEAP32[i14 + 172 >> 2] = i16;
 if ((i16 | 0) != 0) {
  i20 = i16 | 0;
  HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 2;
 }
 HEAP8[i14 + 176 | 0] = HEAP8[i19] & 1;
 HEAP8[i14 + 177 | 0] = HEAP8[i18] & 1;
 HEAP8[i14 + 178 | 0] = HEAP8[i22] & 1;
 HEAP32[i14 + 180 >> 2] = HEAP32[i23 >> 2];
 __ZN7WebCore11FrameLoader19requestFromDelegateERNS_15ResourceRequestERmRNS_13ResourceErrorE(i1, i14, i13, i5);
 i23 = i1 + 48 | 0;
 do {
  if ((HEAP8[i5 + 16 | 0] & 1) != 0) {
   if (__ZN7WebCore20ApplicationCacheHost22maybeLoadSynchronouslyERNS_15ResourceRequestERNS_13ResourceErrorERNS_16ResourceResponseERN3WTF6VectorIcLj0ENS7_15CrashOnOverflowEEE(HEAP32[(HEAP32[i23 >> 2] | 0) + 1704 >> 2] | 0, i14, i5, i6, i7) | 0) {
    break;
   }
   i22 = __ZN7WebCore18platformStrategiesEv() | 0;
   i18 = i22 + 12 | 0;
   i19 = HEAP32[i18 >> 2] | 0;
   if ((i19 | 0) == 0) {
    i20 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i22 >> 2] | 0) + 16 >> 2] & 31](i22) | 0;
    HEAP32[i18 >> 2] = i20;
    i26 = i20;
   } else {
    i26 = i19;
   }
   FUNCTION_TABLE_viiiiiiiii[HEAP32[(HEAP32[i26 >> 2] | 0) + 4 >> 2] & 1](i26, HEAP32[i1 + 232 >> 2] | 0, HEAP32[i13 >> 2] | 0, i14, i3, i4, i5, i6, i7);
   __ZN7WebCore20ApplicationCacheHost30maybeLoadFallbackSynchronouslyERKNS_15ResourceRequestERNS_13ResourceErrorERNS_16ResourceResponseERN3WTF6VectorIcLj0ENS8_15CrashOnOverflowEEE(HEAP32[(HEAP32[i23 >> 2] | 0) + 1704 >> 2] | 0, i14, i5, i6, i7);
  }
 } while (0);
 i4 = HEAP32[i13 >> 2] | 0;
 __ZN7WebCore20ResourceLoadNotifier29sendRemainingDelegateMessagesEPNS_14DocumentLoaderEmRKNS_15ResourceRequestERKNS_16ResourceResponseEPKciiRKNS_13ResourceErrorE(i1 + 16 | 0, HEAP32[i23 >> 2] | 0, i4, i2, i6, HEAP32[i7 >> 2] | 0, HEAP32[i7 + 8 >> 2] | 0, -1, i5);
 __ZN7WebCore15ResourceRequestD2Ev(i14);
 __ZN7WebCore15ResourceRequestD2Ev(i11);
 i11 = HEAP32[i24 >> 2] | 0;
 if ((i11 | 0) == 0) {
  STACKTOP = i8;
  return i4 | 0;
 }
 i24 = i11 | 0;
 i14 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
 if ((i14 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i11);
  STACKTOP = i8;
  return i4 | 0;
 } else {
  HEAP32[i24 >> 2] = i14;
  STACKTOP = i8;
  return i4 | 0;
 }
 return 0;
}
function __ZN7WebCore11FrameLoader23handleBeforeUnloadEventERNS_6ChromeEPS0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i1 | 0;
 i12 = HEAP32[(HEAP32[i11 >> 2] | 0) + 456 >> 2] | 0;
 i13 = HEAP32[i12 + 336 >> 2] | 0;
 if ((i13 | 0) == 0) {
  i14 = 1;
  STACKTOP = i4;
  return i14 | 0;
 }
 i15 = (i12 | 0) != 0;
 if (i15) {
  i16 = i12 + 8 | 0;
  HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
 }
 do {
  if ((__ZNK7WebCore8Document4bodyEv(i12) | 0) == 0) {
   i17 = 1;
  } else {
   i16 = __ZN3WTF10fastMallocEj(56) | 0;
   __ZN7WebCore17BeforeUnloadEventC1Ev(i16);
   i18 = i1 + 72 | 0;
   HEAP32[i18 >> 2] = 1;
   i19 = HEAP32[(HEAP32[i11 >> 2] | 0) + 32 >> 2] | 0;
   __ZN7WebCore4Page44incrementFrameHandlingBeforeUnloadEventCountEv(i19);
   i20 = i16;
   i21 = i5 | 0;
   HEAP32[i21 >> 2] = i20;
   i22 = (i16 | 0) == 0;
   if (!i22) {
    i23 = i16 + 8 | 0;
    HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 1;
   }
   i23 = __ZNK7WebCore9DOMWindow8documentEv(i13) | 0;
   i24 = i23 | 0;
   i25 = i6 | 0;
   HEAP32[i25 >> 2] = i24;
   if ((i23 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i23 >> 2] | 0) + 56 >> 2] & 127](i24);
   }
   __ZN7WebCore9DOMWindow13dispatchEventEN3WTF10PassRefPtrINS_5EventEEENS2_INS_11EventTargetEEE(i13, i5, i6) | 0;
   i24 = HEAP32[i25 >> 2] | 0;
   if ((i24 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i24 >> 2] | 0) + 60 >> 2] & 127](i24);
   }
   i24 = HEAP32[i21 >> 2] | 0;
   do {
    if ((i24 | 0) != 0) {
     i21 = i24 + 8 | 0;
     i25 = i21 | 0;
     i23 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
     if ((i23 | 0) != 0) {
      HEAP32[i25 >> 2] = i23;
      break;
     }
     i23 = i21 - 8 | 0;
     if ((i23 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i23 >> 2] | 0) + 4 >> 2] & 127](i23);
    }
   } while (0);
   __ZN7WebCore4Page44decrementFrameHandlingBeforeUnloadEventCountEv(i19);
   HEAP32[i18 >> 2] = 0;
   if ((HEAP8[i16 + 20 | 0] & 1) == 0) {
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i12 >> 2] | 0) + 220 >> 2] & 63](i12 | 0, i20);
   }
   i24 = i16 + 52 | 0;
   i23 = HEAP32[i24 >> 2] | 0;
   L28 : do {
    if ((i23 | 0) == 0) {
     i26 = 1;
    } else {
     i21 = i23 | 0;
     i25 = HEAP32[i21 >> 2] | 0;
     HEAP32[i21 >> 2] = i25 + 2;
     if ((i25 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i23);
     } else {
      HEAP32[i21 >> 2] = i25;
     }
     i25 = i3 + 223 | 0;
     if ((HEAP8[i25] & 1) != 0) {
      i21 = HEAP32[(HEAP32[i12 >> 2] | 0) + 316 >> 2] | 0;
      __ZN3WTF6StringC1EPKc(i7, H_BASE + 816 | 0);
      FUNCTION_TABLE_viiiii[i21 & 1](i12, 1, 3, i7, 0);
      i21 = HEAP32[i7 >> 2] | 0;
      if ((i21 | 0) == 0) {
       i26 = 1;
       break;
      }
      i27 = i21 | 0;
      i28 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
      if ((i28 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i21);
       i26 = 1;
       break;
      } else {
       HEAP32[i27 >> 2] = i28;
       i26 = 1;
       break;
      }
     }
     L41 : do {
      if ((i3 | 0) != (i1 | 0)) {
       i28 = __ZNK7WebCore9FrameTree6parentEv((HEAP32[i11 >> 2] | 0) + 40 | 0) | 0;
       if ((i28 | 0) == 0) {
        break;
       } else {
        i29 = i28;
       }
       while (1) {
        i28 = HEAP32[i29 + 456 >> 2] | 0;
        if ((i28 | 0) == 0) {
         i26 = 1;
         break L28;
        }
        i27 = HEAP32[(HEAP32[i11 >> 2] | 0) + 456 >> 2] | 0;
        if ((i27 | 0) == 0) {
         break;
        }
        if (!(__ZNK7WebCore14SecurityOrigin9canAccessEPKS0_(HEAP32[i27 + 100 >> 2] | 0, HEAP32[i28 + 100 >> 2] | 0) | 0)) {
         break;
        }
        if ((i29 + 80 | 0) == (i3 | 0)) {
         break L41;
        }
        i29 = __ZNK7WebCore9FrameTree6parentEv(i29 + 40 | 0) | 0;
        if ((i29 | 0) == 0) {
         break L41;
        }
       }
       i28 = HEAP32[(HEAP32[i12 >> 2] | 0) + 316 >> 2] | 0;
       __ZN3WTF6StringC1EPKc(i8, H_BASE + 664 | 0);
       FUNCTION_TABLE_viiiii[i28 & 1](i12, 1, 3, i8, 0);
       i28 = HEAP32[i8 >> 2] | 0;
       if ((i28 | 0) == 0) {
        i26 = 1;
        break L28;
       }
       i27 = i28 | 0;
       i21 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
       if ((i21 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i28);
        i26 = 1;
        break L28;
       } else {
        HEAP32[i27 >> 2] = i21;
        i26 = 1;
        break L28;
       }
      }
     } while (0);
     HEAP8[i25] = 1;
     i21 = i10 | 0;
     i27 = HEAP32[i24 >> 2] | 0;
     HEAP32[i21 >> 2] = i27;
     if ((i27 | 0) != 0) {
      i28 = i27 | 0;
      HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 2;
     }
     __ZNK7WebCore8Document31displayStringModifiedByEncodingERKN3WTF6StringE(i9, i12, i10);
     i28 = HEAP32[i21 >> 2] | 0;
     do {
      if ((i28 | 0) != 0) {
       i21 = i28 | 0;
       i27 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
       if ((i27 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i28);
        break;
       } else {
        HEAP32[i21 >> 2] = i27;
        break;
       }
      }
     } while (0);
     i28 = __ZN7WebCore6Chrome27runBeforeUnloadConfirmPanelERKN3WTF6StringEPNS_5FrameE(i2, i9, HEAP32[i11 >> 2] | 0) | 0;
     i25 = HEAP32[i9 >> 2] | 0;
     if ((i25 | 0) == 0) {
      i26 = i28;
      break;
     }
     i27 = i25 | 0;
     i21 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
     if ((i21 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i25);
      i26 = i28;
      break;
     } else {
      HEAP32[i27 >> 2] = i21;
      i26 = i28;
      break;
     }
    }
   } while (0);
   if (i22) {
    i17 = i26;
    break;
   }
   i24 = i16 + 8 | 0;
   i23 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
   if ((i23 | 0) == 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 127](i20);
    i17 = i26;
    break;
   } else {
    HEAP32[i24 >> 2] = i23;
    i17 = i26;
    break;
   }
  }
 } while (0);
 if (!i15) {
  i14 = i17;
  STACKTOP = i4;
  return i14 | 0;
 }
 i15 = i12 + 8 | 0;
 i12 = i15 | 0;
 i26 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
 HEAP32[i12 >> 2] = i26;
 if ((i26 | 0) >= 1) {
  i14 = i17;
  STACKTOP = i4;
  return i14 | 0;
 }
 if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
  i14 = i17;
  STACKTOP = i4;
  return i14 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
 i14 = i17;
 STACKTOP = i4;
 return i14 | 0;
}
function __ZN7WebCore11FrameLoader11shouldCloseEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
 i3 = i2 | 0;
 i4 = i2 + 80 | 0;
 i5 = i1 | 0;
 i6 = HEAP32[(HEAP32[i5 >> 2] | 0) + 32 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = 1;
  STACKTOP = i2;
  return i7 | 0;
 }
 i8 = i6 + 20 | 0;
 if (!(__ZN7WebCore6Chrome30canRunBeforeUnloadConfirmPanelEv(HEAP32[i8 >> 2] | 0) | 0)) {
  i7 = 1;
  STACKTOP = i2;
  return i7 | 0;
 }
 i6 = i3 + 12 | 0;
 i9 = i6;
 i10 = i3 | 0;
 HEAP32[i10 >> 2] = i9;
 i11 = i3 + 4 | 0;
 HEAP32[i11 >> 2] = 16;
 i12 = i3 + 8 | 0;
 HEAP32[i12 >> 2] = 0;
 i3 = HEAP32[i5 >> 2] | 0;
 HEAP32[i6 >> 2] = i3;
 i6 = i3 + 4 | 0;
 HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 i6 = (HEAP32[i12 >> 2] | 0) + 1 | 0;
 HEAP32[i12 >> 2] = i6;
 i3 = HEAP32[(HEAP32[i5 >> 2] | 0) + 64 >> 2] | 0;
 L7 : do {
  if ((i3 | 0) == 0) {
   i13 = i6;
  } else {
   i14 = i3;
   i15 = i6;
   L8 : while (1) {
    if ((i15 | 0) == (HEAP32[i11 >> 2] | 0)) {
     i16 = i15 + 1 | 0;
     i17 = i16 + (i15 >>> 2) | 0;
     i18 = i17 >>> 0 > 16 >>> 0 ? i17 : 16;
     i17 = i18 >>> 0 > i16 >>> 0 ? i18 : i16;
     do {
      if (i15 >>> 0 < i17 >>> 0) {
       i16 = HEAP32[i10 >> 2] | 0;
       if (i17 >>> 0 > 16 >>> 0) {
        if (i17 >>> 0 > 1073741823 >>> 0) {
         break L8;
        }
        i18 = __ZN3WTF18fastMallocGoodSizeEj(i17 << 2) | 0;
        HEAP32[i11 >> 2] = i18 >>> 2;
        i19 = __ZN3WTF10fastMallocEj(i18) | 0;
        HEAP32[i10 >> 2] = i19;
        i20 = i19;
       } else {
        HEAP32[i10 >> 2] = i9;
        HEAP32[i11 >> 2] = 16;
        i20 = i9;
       }
       i19 = i16;
       _memcpy(i20 | 0, i19 | 0, i15 << 2) | 0;
       if ((i9 | 0) == (i16 | 0) | (i16 | 0) == 0) {
        break;
       }
       if ((HEAP32[i10 >> 2] | 0) == (i16 | 0)) {
        HEAP32[i10 >> 2] = 0;
        HEAP32[i11 >> 2] = 0;
       }
       __ZN3WTF8fastFreeEPv(i19);
      }
     } while (0);
     HEAP32[(HEAP32[i10 >> 2] | 0) + (HEAP32[i12 >> 2] << 2) >> 2] = i14;
     i17 = i14 + 4 | 0;
     HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
     i21 = HEAP32[i12 >> 2] | 0;
    } else {
     HEAP32[(HEAP32[i10 >> 2] | 0) + (i15 << 2) >> 2] = i14;
     i17 = i14 + 4 | 0;
     HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
     i21 = HEAP32[i12 >> 2] | 0;
    }
    HEAP32[i12 >> 2] = i21 + 1;
    i17 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i14 + 40 | 0, HEAP32[i5 >> 2] | 0) | 0;
    i19 = HEAP32[i12 >> 2] | 0;
    if ((i17 | 0) == 0) {
     i13 = i19;
     break L7;
    } else {
     i14 = i17;
     i15 = i19;
    }
   }
   _WTFCrash();
   return 0;
  }
 } while (0);
 HEAP32[__ZN7WebCore33NavigationDisablerForBeforeUnload24s_navigationDisableCountE >> 2] = (HEAP32[__ZN7WebCore33NavigationDisablerForBeforeUnload24s_navigationDisableCountE >> 2] | 0) + 1;
 do {
  if ((i13 | 0) == 0) {
   HEAP32[__ZN7WebCore33NavigationDisablerForBeforeUnload24s_navigationDisableCountE >> 2] = (HEAP32[__ZN7WebCore33NavigationDisablerForBeforeUnload24s_navigationDisableCountE >> 2] | 0) - 1;
   i22 = 1;
  } else {
   i21 = 0;
   while (1) {
    if (__ZNK7WebCore9FrameTree14isDescendantOfEPKNS_5FrameE((HEAP32[(HEAP32[i10 >> 2] | 0) + (i21 << 2) >> 2] | 0) + 40 | 0, HEAP32[i5 >> 2] | 0) | 0) {
     if ((HEAP32[i12 >> 2] | 0) >>> 0 <= i21 >>> 0) {
      i23 = 22;
      break;
     }
     if (!(__ZN7WebCore11FrameLoader23handleBeforeUnloadEventERNS_6ChromeEPS0_((HEAP32[(HEAP32[i10 >> 2] | 0) + (i21 << 2) >> 2] | 0) + 80 | 0, HEAP32[i8 >> 2] | 0, i1) | 0)) {
      i23 = 25;
      break;
     }
    }
    i20 = i21 + 1 | 0;
    i6 = HEAP32[i12 >> 2] | 0;
    if (i20 >>> 0 < i6 >>> 0) {
     i21 = i20;
    } else {
     i24 = i20;
     i25 = i6;
     break;
    }
   }
   if ((i23 | 0) == 25) {
    i24 = i21;
    i25 = HEAP32[i12 >> 2] | 0;
   } else if ((i23 | 0) == 22) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
    return 0;
   }
   i6 = (i24 | 0) == (i25 | 0);
   HEAP32[__ZN7WebCore33NavigationDisablerForBeforeUnload24s_navigationDisableCountE >> 2] = (HEAP32[__ZN7WebCore33NavigationDisablerForBeforeUnload24s_navigationDisableCountE >> 2] | 0) - 1;
   if (i6) {
    i22 = 1;
    break;
   }
   i20 = i4 | 0;
   HEAP32[i20 >> 2] = 0;
   __ZN7WebCore3URL10invalidateEv(i4);
   i3 = HEAP32[i20 >> 2] | 0;
   HEAP32[i20 >> 2] = 0;
   i15 = i1 + 88 | 0;
   i14 = HEAP32[i15 >> 2] | 0;
   HEAP32[i15 >> 2] = i3;
   do {
    if ((i14 | 0) != 0) {
     i3 = i14 | 0;
     i15 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
     if ((i15 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i14);
      break;
     } else {
      HEAP32[i3 >> 2] = i15;
      break;
     }
    }
   } while (0);
   i14 = HEAP8[i4 + 4 | 0] | 0;
   i21 = i1 + 92 | 0;
   HEAP8[i21] = HEAP8[i21] & -4 | i14 & 1 | i14 & 2;
   HEAP32[i1 + 96 >> 2] = HEAP32[i4 + 8 >> 2];
   HEAP32[i1 + 100 >> 2] = HEAP32[i4 + 12 >> 2];
   HEAP32[i1 + 104 >> 2] = HEAP32[i4 + 16 >> 2];
   HEAP32[i1 + 108 >> 2] = HEAP32[i4 + 20 >> 2];
   HEAP32[i1 + 112 >> 2] = HEAP32[i4 + 24 >> 2];
   HEAP32[i1 + 116 >> 2] = HEAP32[i4 + 28 >> 2];
   HEAP32[i1 + 120 >> 2] = HEAP32[i4 + 32 >> 2];
   HEAP32[i1 + 124 >> 2] = HEAP32[i4 + 36 >> 2];
   HEAP32[i1 + 128 >> 2] = HEAP32[i4 + 40 >> 2];
   HEAP32[i1 + 132 >> 2] = HEAP32[i4 + 44 >> 2];
   i14 = HEAP32[i20 >> 2] | 0;
   if ((i14 | 0) == 0) {
    i22 = i6;
    break;
   }
   i21 = i14 | 0;
   i15 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    i22 = i6;
    break;
   } else {
    HEAP32[i21 >> 2] = i15;
    i22 = i6;
    break;
   }
  }
 } while (0);
 HEAP8[i1 + 223 | 0] = 0;
 i1 = HEAP32[i12 >> 2] | 0;
 if ((i1 | 0) != 0) {
  i4 = HEAP32[i10 >> 2] | 0;
  i25 = i4 + (i1 << 2) | 0;
  i1 = i4;
  while (1) {
   i4 = (HEAP32[i1 >> 2] | 0) + 4 | 0;
   i24 = i4 | 0;
   i23 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
   do {
    if ((i23 | 0) == 0) {
     i8 = i4 - 4 | 0;
     if ((i8 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 127](i8);
    } else {
     HEAP32[i24 >> 2] = i23;
    }
   } while (0);
   i1 = i1 + 4 | 0;
   if ((i1 | 0) == (i25 | 0)) {
    break;
   }
  }
  HEAP32[i12 >> 2] = 0;
 }
 i12 = HEAP32[i10 >> 2] | 0;
 if ((i9 | 0) == (i12 | 0) | (i12 | 0) == 0) {
  i7 = i22;
  STACKTOP = i2;
  return i7 | 0;
 }
 HEAP32[i10 >> 2] = 0;
 HEAP32[i11 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i12);
 i7 = i22;
 STACKTOP = i2;
 return i7 | 0;
}
function __ZN7WebCore11FrameLoader23addExtraFieldsToRequestERNS_15ResourceRequestENS_13FrameLoadTypeEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i5 + 48 | 0;
 i13 = i5 + 56 | 0;
 i14 = i2 | 0;
 i15 = HEAP32[(__ZNK7WebCore19ResourceRequestBase20firstPartyForCookiesEv(i14) | 0) >> 2] | 0;
 if ((i15 | 0) == 0) {
  i16 = 3;
 } else {
  if ((HEAP32[i15 + 4 >> 2] | 0) == 0) {
   i16 = 3;
  }
 }
 L3 : do {
  if ((i16 | 0) == 3) {
   i15 = HEAP32[i1 >> 2] | 0;
   do {
    if (i4) {
     if ((HEAP32[i15 + 28 >> 2] | 0) != (i15 | 0)) {
      break;
     }
     __ZN7WebCore19ResourceRequestBase23setFirstPartyForCookiesERKNS_3URLE(i14, __ZNK7WebCore19ResourceRequestBase3urlEv(i14) | 0);
     break L3;
    }
   } while (0);
   i17 = HEAP32[i15 + 456 >> 2] | 0;
   if ((i17 | 0) == 0) {
    break;
   }
   __ZN7WebCore19ResourceRequestBase23setFirstPartyForCookiesERKNS_3URLE(i14, i17 + 596 | 0);
  }
 } while (0);
 i16 = HEAP32[(__ZNK7WebCore19ResourceRequestBase3urlEv(i14) | 0) >> 2] | 0;
 do {
  if ((i16 | 0) != 0) {
   if ((HEAP32[i16 + 4 >> 2] | 0) == 0) {
    break;
   }
   if ((HEAP8[(__ZNK7WebCore19ResourceRequestBase3urlEv(i14) | 0) + 4 | 0] & 2) != 0) {
    break;
   }
   STACKTOP = i5;
   return;
  }
 } while (0);
 i16 = __ZNK7WebCore19ResourceRequestBase3urlEv(i14) | 0;
 i17 = HEAP32[i1 + 4 >> 2] | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i17 >> 2] | 0) + 380 >> 2] & 3](i6, i17, i16);
 __ZN7WebCore19ResourceRequestBase18setHTTPHeaderFieldEPKcRKN3WTF6StringE(i14, H_BASE + 216 | 0, i6);
 i16 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i16 | 0) != 0) {
   i6 = i16 | 0;
   i17 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i17 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i16);
    break;
   } else {
    HEAP32[i6 >> 2] = i17;
    break;
   }
  }
 } while (0);
 do {
  if (i4) {
   if (!((i3 | 0) == 9 | (i3 | 0) == 4)) {
    if (!(__ZNK7WebCore19ResourceRequestBase13isConditionalEv(i14) | 0)) {
     break;
    }
   }
   __ZN7WebCore19ResourceRequestBase14setCachePolicyENS_26ResourceRequestCachePolicyE(i14, 1);
  } else {
   if (__ZNK7WebCore19ResourceRequestBase13isConditionalEv(i14) | 0) {
    __ZN7WebCore19ResourceRequestBase14setCachePolicyENS_26ResourceRequestCachePolicyE(i14, 1);
    break;
   }
   i16 = i1 + 48 | 0;
   if (__ZNK7WebCore14DocumentLoader19isLoadingInAPISenseEv(HEAP32[i16 >> 2] | 0) | 0) {
    i17 = __ZNK7WebCore19ResourceRequestBase11cachePolicyEv(__ZNK7WebCore14DocumentLoader15originalRequestEv(HEAP32[i16 >> 2] | 0) | 0) | 0;
    __ZN7WebCore19ResourceRequestBase14setCachePolicyENS_26ResourceRequestCachePolicyE(i14, (i17 | 0) == 3 ? 2 : i17);
    break;
   } else {
    __ZN7WebCore19ResourceRequestBase14setCachePolicyENS_26ResourceRequestCachePolicyE(i14, 0);
    break;
   }
  }
 } while (0);
 do {
  if ((__ZNK7WebCore19ResourceRequestBase11cachePolicyEv(i14) | 0) == 1) {
   if ((i3 | 0) == 4) {
    __ZN3WTF6StringC1EPKc(i7, H_BASE + 1040 | 0);
    __ZN7WebCore19ResourceRequestBase18setHTTPHeaderFieldEPKcRKN3WTF6StringE(i14, H_BASE + 1056 | 0, i7);
    i17 = HEAP32[i7 >> 2] | 0;
    if ((i17 | 0) == 0) {
     break;
    }
    i16 = i17 | 0;
    i6 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
    if ((i6 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i17);
     break;
    } else {
     HEAP32[i16 >> 2] = i6;
     break;
    }
   } else if ((i3 | 0) != 9) {
    break;
   }
   __ZN3WTF6StringC1EPKc(i8, H_BASE + 1024 | 0);
   __ZN7WebCore19ResourceRequestBase18setHTTPHeaderFieldEPKcRKN3WTF6StringE(i14, H_BASE + 1056 | 0, i8);
   i6 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i6 | 0) != 0) {
     i16 = i6 | 0;
     i17 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
     if ((i17 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i6);
      break;
     } else {
      HEAP32[i16 >> 2] = i17;
      break;
     }
    }
   } while (0);
   __ZN3WTF6StringC1EPKc(i9, H_BASE + 1024 | 0);
   __ZN7WebCore19ResourceRequestBase18setHTTPHeaderFieldEPKcRKN3WTF6StringE(i14, H_BASE + 928 | 0, i9);
   i6 = HEAP32[i9 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   i15 = i6 | 0;
   i17 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i17 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i15 >> 2] = i17;
    break;
   }
  }
 } while (0);
 do {
  if (i4) {
   __ZN3WTF6StringC1EPKc(i10, H_BASE + 2096 | 0);
   __ZN7WebCore19ResourceRequestBase18setHTTPHeaderFieldEPKcRKN3WTF6StringE(i14, H_BASE + 152 | 0, i10);
   i9 = HEAP32[i10 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   i8 = i9 | 0;
   i3 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i8 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i10 = i11 | 0;
 HEAP32[i10 >> 2] = 0;
 __ZN7WebCore11FrameLoader21addHTTPOriginIfNeededERNS_15ResourceRequestERKN3WTF6StringE(i2, i11);
 i11 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i10 = i11 | 0;
   i4 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i10 >> 2] = i4;
    break;
   }
  }
 } while (0);
 if ((HEAP32[i2 + 144 >> 2] | 0) != 0) {
  STACKTOP = i5;
  return;
 }
 __ZN3WTF6StringC1EPKc(i12, H_BASE + 1136 | 0);
 i2 = i1 | 0;
 __ZNK7WebCore8Document8encodingEv(i13, HEAP32[(HEAP32[i2 >> 2] | 0) + 456 >> 2] | 0);
 __ZN7WebCore19ResourceRequestBase50setResponseContentDispositionEncodingFallbackArrayERKN3WTF6StringES4_S4_(i14, i12, i13, (HEAP32[(HEAP32[i2 >> 2] | 0) + 36 >> 2] | 0) + 88 | 0);
 i2 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i13 = i2 | 0;
   i14 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i13 >> 2] = i14;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i12 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i12 = i2 | 0;
 i14 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
 if ((i14 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i12 >> 2] = i14;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore11FrameLoader33continueLoadAfterNavigationPolicyERKNS_15ResourceRequestEN3WTF10PassRefPtrINS_9FormStateEEEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i2 | 0;
 i6 = i2 + 8 | 0;
 i7 = i1 + 12 | 0;
 i8 = HEAP32[(HEAP32[i7 >> 2] | 0) + 12 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i9 = 0;
 } else {
  i9 = __ZNK7WebCore11HistoryItem12isTargetItemEv(i8) | 0;
 }
 do {
  if (i4) {
   if (!(__ZN7WebCore11FrameLoader11shouldCloseEv(i1) | 0)) {
    break;
   }
   i8 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 8 >> 2] | 0;
   __ZN7WebCore11FrameLoader14stopAllLoadersENS_26ClearProvisionalItemPolicyE(i1, 1);
   i10 = i1 | 0;
   i11 = HEAP32[i10 >> 2] | 0;
   i12 = HEAP32[i11 + 32 >> 2] | 0;
   if ((i12 | 0) == 0) {
    STACKTOP = i2;
    return;
   }
   if ((HEAP32[i11 + 28 >> 2] | 0) == (i11 | 0)) {
    __ZN7WebCore19InspectorController6resumeEv(HEAP32[i12 + 40 >> 2] | 0);
   }
   i12 = i1 + 56 | 0;
   i11 = HEAP32[i12 >> 2] | 0;
   i13 = i1 + 52 | 0;
   i14 = HEAP32[i13 >> 2] | 0;
   do {
    if ((i14 | 0) != 0) {
     if ((i14 | 0) == (HEAP32[i1 + 48 >> 2] | 0)) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 40 >> 2] & 127](i14);
    }
   } while (0);
   if ((i11 | 0) != 0) {
    i14 = i11 + 4 | 0;
    HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
   }
   i14 = HEAP32[i13 >> 2] | 0;
   HEAP32[i13 >> 2] = i11;
   do {
    if ((i14 | 0) != 0) {
     i15 = i14 + 4 | 0;
     i16 = i15 | 0;
     i17 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
     if ((i17 | 0) != 0) {
      HEAP32[i16 >> 2] = i17;
      break;
     }
     i17 = i15 - 4 | 0;
     if ((i17 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 4 >> 2] & 127](i17);
    }
   } while (0);
   HEAP32[i1 + 44 >> 2] = i8;
   HEAP32[i1 + 40 >> 2] = 0;
   i14 = i1 + 24 | 0;
   if (__ZNK7WebCore23FrameLoaderStateMachine15firstLayoutDoneEv(i14) | 0) {
    __ZN7WebCore23FrameLoaderStateMachine9advanceToENS0_5StateE(i14, 3);
   }
   __ZN7WebCore19NavigationScheduler6cancelEb((HEAP32[i10 >> 2] | 0) + 376 | 0, 1);
   i14 = i1 + 4 | 0;
   i11 = HEAP32[i14 >> 2] | 0;
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 360 >> 2] & 127](i11);
   i11 = HEAP32[i12 >> 2] | 0;
   do {
    if ((i11 | 0) != 0) {
     if ((i11 | 0) == (HEAP32[i13 >> 2] | 0)) {
      HEAP32[i12 >> 2] = 0;
      i18 = i11;
     } else {
      if ((i11 | 0) == (HEAP32[i1 + 48 >> 2] | 0)) {
       i19 = i11;
      } else {
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 40 >> 2] & 127](i11);
       i19 = HEAP32[i12 >> 2] | 0;
      }
      HEAP32[i12 >> 2] = 0;
      if ((i19 | 0) == 0) {
       break;
      } else {
       i18 = i19;
      }
     }
     i17 = i18 + 4 | 0;
     i15 = i17 | 0;
     i16 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
     if ((i16 | 0) != 0) {
      HEAP32[i15 >> 2] = i16;
      break;
     }
     i16 = i17 - 4 | 0;
     if ((i16 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 127](i16);
    }
   } while (0);
   do {
    if ((i8 - 1 | 0) >>> 0 < 3 >>> 0) {
     if ((HEAP32[(HEAP32[(HEAP32[i7 >> 2] | 0) + 12 >> 2] | 0) + 156 >> 2] | 0) == 0) {
      break;
     }
     __ZN7WebCore11FrameLoader33loadProvisionalItemFromCachedPageEv(i1);
     STACKTOP = i2;
     return;
    }
   } while (0);
   i8 = i3 | 0;
   i12 = HEAP32[i8 >> 2] | 0;
   if ((i12 | 0) == 0) {
    __ZN7WebCore11FrameLoader31continueLoadAfterWillSubmitFormEv(i1);
    STACKTOP = i2;
    return;
   }
   i11 = HEAP32[i14 >> 2] | 0;
   i13 = HEAP32[(HEAP32[i11 >> 2] | 0) + 204 >> 2] | 0;
   i10 = i5 | 0;
   HEAP32[i8 >> 2] = 0;
   HEAP32[i10 >> 2] = i12;
   i12 = i6 + 16 | 0;
   i8 = i6;
   HEAP32[i12 >> 2] = i8;
   HEAP32[i6 >> 2] = H_BASE + 1336;
   HEAP32[i6 + 4 >> 2] = i1;
   FUNCTION_TABLE_viii[i13 & 3](i11, i5, i6);
   i11 = HEAP32[i12 >> 2] | 0;
   do {
    if ((i11 | 0) == (i8 | 0)) {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 16 >> 2] & 127](i8);
    } else {
     if ((i11 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 20 >> 2] & 127](i11);
    }
   } while (0);
   i11 = HEAP32[i10 >> 2] | 0;
   if ((i11 | 0) == 0) {
    STACKTOP = i2;
    return;
   }
   __ZN3WTF10RefCountedIN7WebCore9FormStateEE5derefEv(i11 | 0);
   STACKTOP = i2;
   return;
  }
 } while (0);
 i6 = i1 + 61 | 0;
 if ((HEAP8[i6] & 1) != 0) {
  i5 = HEAP32[i1 + 4 >> 2] | 0;
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 92 >> 2] & 127](i5);
  HEAP8[i6] = 0;
  HEAP8[i1 + 62 | 0] = 0;
 }
 i6 = i1 + 56 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   if ((i5 | 0) == (HEAP32[i1 + 52 >> 2] | 0)) {
    HEAP32[i6 >> 2] = 0;
    i20 = i5;
   } else {
    if ((i5 | 0) == (HEAP32[i1 + 48 >> 2] | 0)) {
     i21 = i5;
    } else {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 40 >> 2] & 127](i5);
     i21 = HEAP32[i6 >> 2] | 0;
    }
    HEAP32[i6 >> 2] = 0;
    if ((i21 | 0) == 0) {
     break;
    } else {
     i20 = i21;
    }
   }
   i3 = i20 + 4 | 0;
   i7 = i3 | 0;
   i18 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i18 | 0) != 0) {
    HEAP32[i7 >> 2] = i18;
    break;
   }
   i18 = i3 - 4 | 0;
   if ((i18 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 127](i18);
  }
 } while (0);
 do {
  if (!i9) {
   i20 = HEAP32[i1 >> 2] | 0;
   if ((HEAP32[i20 + 28 >> 2] | 0) == (i20 | 0)) {
    break;
   }
   STACKTOP = i2;
   return;
  }
 } while (0);
 if (((HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 8 >> 2] | 0) - 1 | 0) >>> 0 >= 3 >>> 0) {
  STACKTOP = i2;
  return;
 }
 i9 = i1 | 0;
 i1 = HEAP32[i9 >> 2] | 0;
 i20 = HEAP32[i1 + 32 >> 2] | 0;
 if ((i20 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i21 = HEAP32[(HEAP32[(HEAP32[i1 + 28 >> 2] | 0) + 92 >> 2] | 0) + 4 >> 2] | 0;
 if ((i21 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore21BackForwardController14setCurrentItemEPNS_11HistoryItemE(HEAP32[i20 + 56 >> 2] | 0, i21);
 i21 = HEAP32[(HEAP32[i9 >> 2] | 0) + 84 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 276 >> 2] & 127](i21);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore11FrameLoader18loadInSameDocumentERKNS_3URLEN3WTF10PassRefPtrINS_21SerializedScriptValueEEEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 56 | 0;
 i9 = i5 + 64 | 0;
 i10 = i5 + 72 | 0;
 i11 = i1 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 i13 = HEAP32[i12 + 456 >> 2] | 0;
 i14 = i7 | 0;
 i15 = HEAP32[i13 + 356 >> 2] | 0;
 HEAP32[i14 >> 2] = i15;
 if ((i15 | 0) == 0) {
  i16 = 0;
  i17 = i12;
  i18 = i7 + 4 | 0;
 } else {
  i12 = i15 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
  i12 = i7 + 4 | 0;
  i16 = HEAP8[i12] & -2;
  i17 = HEAP32[i11 >> 2] | 0;
  i18 = i12;
 }
 i12 = i13 + 360 | 0;
 i15 = i16 | HEAP8[i12] & 1;
 HEAP8[i18] = i15;
 HEAP8[i18] = i15 & -3 | HEAP8[i12] & 2;
 HEAP32[i7 + 8 >> 2] = HEAP32[i13 + 364 >> 2];
 HEAP32[i7 + 12 >> 2] = HEAP32[i13 + 368 >> 2];
 HEAP32[i7 + 16 >> 2] = HEAP32[i13 + 372 >> 2];
 HEAP32[i7 + 20 >> 2] = HEAP32[i13 + 376 >> 2];
 HEAP32[i7 + 24 >> 2] = HEAP32[i13 + 380 >> 2];
 HEAP32[i7 + 28 >> 2] = HEAP32[i13 + 384 >> 2];
 HEAP32[i7 + 32 >> 2] = HEAP32[i13 + 388 >> 2];
 HEAP32[i7 + 36 >> 2] = HEAP32[i13 + 392 >> 2];
 HEAP32[i7 + 40 >> 2] = HEAP32[i13 + 396 >> 2];
 HEAP32[i7 + 44 >> 2] = HEAP32[i13 + 400 >> 2];
 __ZN7WebCore8Document6setURLERKNS_3URLE(HEAP32[i17 + 456 >> 2] | 0, i2);
 __ZNK7WebCore3URL24strippedForUseAsReferrerEv(i6, i2);
 i17 = i6 | 0;
 i6 = HEAP32[i17 >> 2] | 0;
 HEAP32[i17 >> 2] = 0;
 i13 = i1 + 64 | 0;
 i12 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = i6;
 do {
  if ((i12 | 0) != 0) {
   i6 = i12 | 0;
   i13 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i6 >> 2] = i13;
    break;
   }
  }
 } while (0);
 i12 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i17 = i12 | 0;
   i13 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i17 >> 2] = i13;
    break;
   }
  }
 } while (0);
 __ZN7WebCore14DocumentLoader42replaceRequestURLForSameDocumentNavigationERKNS_3URLE(HEAP32[i1 + 48 >> 2] | 0, i2);
 do {
  if (i4) {
   if (__ZNK7WebCore11FrameLoader29shouldTreatURLAsSameAsCurrentERKNS_3URLE(i1, i2) | 0) {
    break;
   }
   if ((HEAP32[i3 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore17HistoryController38updateBackForwardListForFragmentScrollEv(HEAP32[i1 + 12 >> 2] | 0);
  }
 } while (0);
 L22 : do {
  if (__ZN7WebCore31equalIgnoringFragmentIdentifierERKNS_3URLES2_(i2, i7) | 0) {
   __ZNK7WebCore3URL18fragmentIdentifierEv(i8, i2);
   __ZNK7WebCore3URL18fragmentIdentifierEv(i9, i7);
   i12 = i8 | 0;
   i13 = i9 | 0;
   i17 = __ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i12 >> 2] | 0, HEAP32[i13 >> 2] | 0) | 0;
   i6 = HEAP32[i13 >> 2] | 0;
   do {
    if ((i6 | 0) != 0) {
     i13 = i6 | 0;
     i15 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
     if ((i15 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i6);
      break;
     } else {
      HEAP32[i13 >> 2] = i15;
      break;
     }
    }
   } while (0);
   i6 = HEAP32[i12 >> 2] | 0;
   do {
    if ((i6 | 0) == 0) {
     __ZN7WebCore17HistoryController31updateForSameDocumentNavigationEv(HEAP32[i1 + 12 >> 2] | 0);
     if (i17) {
      i19 = 0;
      break L22;
     }
    } else {
     i15 = i6 | 0;
     i13 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
     if ((i13 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i6);
      __ZN7WebCore17HistoryController31updateForSameDocumentNavigationEv(HEAP32[i1 + 12 >> 2] | 0);
      if (i17) {
       i19 = 0;
       break L22;
      } else {
       break;
      }
     } else {
      HEAP32[i15 >> 2] = i13;
      __ZN7WebCore17HistoryController31updateForSameDocumentNavigationEv(HEAP32[i1 + 12 >> 2] | 0);
      if (i17) {
       i19 = 0;
       break L22;
      } else {
       break;
      }
     }
    }
   } while (0);
   __ZN7WebCore12EventHandler19stopAutoscrollTimerEb(HEAP32[(HEAP32[i11 >> 2] | 0) + 472 >> 2] | 0, 0);
   i19 = 1;
  } else {
   __ZN7WebCore17HistoryController31updateForSameDocumentNavigationEv(HEAP32[i1 + 12 >> 2] | 0);
   i19 = 0;
  }
 } while (0);
 __ZN7WebCore11FrameLoader7startedEv(i1);
 __ZN7WebCore11FrameLoader34scrollToFragmentWithParentBoundaryERKNS_3URLE(i1, i2);
 HEAP8[i1 + 76 | 0] = 0;
 __ZN7WebCore11FrameLoader14checkCompletedEv(i1);
 if (i4) {
  __ZN7WebCore11FrameLoader17checkLoadCompleteEv(i1);
 }
 i4 = i1 + 4 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 100 >> 2] & 127](i1);
 i1 = HEAP32[(HEAP32[i11 >> 2] | 0) + 456 >> 2] | 0;
 i9 = i3 | 0;
 i3 = HEAP32[i9 >> 2] | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore21SerializedScriptValue9nullValueEv(i10);
  i20 = i10 | 0;
 } else {
  i8 = i10 | 0;
  HEAP32[i9 >> 2] = 0;
  HEAP32[i8 >> 2] = i3;
  i20 = i8;
 }
 __ZN7WebCore8Document11statePoppedEN3WTF10PassRefPtrINS_21SerializedScriptValueEEE(i1, i10);
 i10 = HEAP32[i20 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i20 = i10 | 0;
   if (((tempValue = HEAP32[i20 >> 2] | 0, HEAP32[i20 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN7WebCore21SerializedScriptValueD1Ev(i10);
   __ZN3WTF8fastFreeEPv(i10);
  }
 } while (0);
 i10 = HEAP32[i4 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 116 >> 2] & 127](i10);
 if (i19) {
  __ZN7WebCore8Document22enqueueHashchangeEventERKN3WTF6StringES4_(HEAP32[(HEAP32[i11 >> 2] | 0) + 456 >> 2] | 0, i7 | 0, i2 | 0);
  i2 = HEAP32[i4 >> 2] | 0;
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 104 >> 2] & 127](i2);
 }
 i2 = HEAP32[i4 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 364 >> 2] & 127](i2);
 i2 = HEAP32[i14 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i14 = i2 | 0;
 i4 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i14 >> 2] = i4;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore11FrameLoader4initEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 368 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 200 | 0;
 i7 = i2 + 248 | 0;
 i8 = i2 + 360 | 0;
 i9 = i1 + 4 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 i11 = HEAP32[(HEAP32[i10 >> 2] | 0) + 372 >> 2] | 0;
 __ZN7WebCore3URLC1ENS_18ParsedURLStringTagERKN3WTF6StringE(i6, 0, __ZN3WTF11emptyStringEv() | 0);
 i12 = i6 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 HEAP32[i5 >> 2] = i13;
 if ((i13 | 0) != 0) {
  i14 = i13 | 0;
  HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
 }
 i14 = HEAP8[i6 + 4 | 0] | 0;
 i13 = i5 + 4 | 0;
 HEAP8[i13] = HEAP8[i13] & -4 | i14 & 1 | i14 & 2;
 HEAP32[i5 + 8 >> 2] = HEAP32[i6 + 8 >> 2];
 HEAP32[i5 + 12 >> 2] = HEAP32[i6 + 12 >> 2];
 HEAP32[i5 + 16 >> 2] = HEAP32[i6 + 16 >> 2];
 HEAP32[i5 + 20 >> 2] = HEAP32[i6 + 20 >> 2];
 HEAP32[i5 + 24 >> 2] = HEAP32[i6 + 24 >> 2];
 HEAP32[i5 + 28 >> 2] = HEAP32[i6 + 28 >> 2];
 HEAP32[i5 + 32 >> 2] = HEAP32[i6 + 32 >> 2];
 HEAP32[i5 + 36 >> 2] = HEAP32[i6 + 36 >> 2];
 HEAP32[i5 + 40 >> 2] = HEAP32[i6 + 40 >> 2];
 HEAP32[i5 + 44 >> 2] = HEAP32[i6 + 44 >> 2];
 HEAP32[i5 + 48 >> 2] = 0;
 HEAPF64[i5 + 56 >> 3] = +HEAPF64[__ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE >> 3];
 i6 = i5 + 64 | 0;
 HEAP32[i6 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i6);
 HEAP32[i3 >> 2] = H_BASE + 920;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i5 + 112 | 0, i3);
 __ZN7WebCore13HTTPHeaderMapC1Ev(i5 + 116 | 0);
 _memset(i5 + 136 | 0, 0, 16) | 0;
 HEAP8[i5 + 152 | 0] = 11;
 HEAP32[i5 + 156 >> 2] = 1;
 _memset(i5 + 160 | 0, 0, 19) | 0;
 HEAP32[i5 + 180 >> 2] = 15;
 _memset(i7 | 0, 0, 16) | 0;
 __ZN7WebCore3URL10invalidateEv(i7 + 12 | 0);
 i3 = i7 + 60 | 0;
 HEAP32[i3 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i3);
 HEAP8[i7 + 108 | 0] = 0;
 FUNCTION_TABLE_viiii[i11 & 7](i4, i10, i5, i7);
 i10 = i4 | 0;
 i4 = HEAP32[i10 >> 2] | 0;
 i11 = i1 + 56 | 0;
 i3 = HEAP32[i11 >> 2] | 0;
 if ((i3 | 0) == (i4 | 0)) {
  i15 = i4;
 } else {
  i6 = (i4 | 0) == 0;
  if (i6) {
   i16 = i3;
  } else {
   __ZN7WebCore14DocumentLoader8setFrameEPNS_5FrameE(i4, HEAP32[i1 >> 2] | 0);
   i16 = HEAP32[i11 >> 2] | 0;
  }
  do {
   if ((i16 | 0) != 0) {
    if ((i16 | 0) == (HEAP32[i1 + 52 >> 2] | 0)) {
     break;
    }
    if ((i16 | 0) == (HEAP32[i1 + 48 >> 2] | 0)) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 40 >> 2] & 127](i16);
   }
  } while (0);
  if (!i6) {
   i6 = i4 + 4 | 0;
   HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
  }
  i6 = HEAP32[i11 >> 2] | 0;
  HEAP32[i11 >> 2] = i4;
  do {
   if ((i6 | 0) != 0) {
    i4 = i6 + 4 | 0;
    i16 = i4 | 0;
    i3 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
    if ((i3 | 0) != 0) {
     HEAP32[i16 >> 2] = i3;
     break;
    }
    i3 = i4 - 4 | 0;
    if ((i3 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 127](i3);
   }
  } while (0);
  i15 = HEAP32[i10 >> 2] | 0;
 }
 do {
  if ((i15 | 0) != 0) {
   i10 = i15 + 4 | 0;
   i6 = i10 | 0;
   i3 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i6 >> 2] = i3;
    break;
   }
   i3 = i10 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 127](i3);
  }
 } while (0);
 __ZN7WebCore14SubstituteDataD2Ev(i7);
 __ZN7WebCore15ResourceRequestD2Ev(i5);
 i5 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i12 = i5 | 0;
   i7 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i12 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i11 >> 2] | 0;
 i11 = i1 + 52 | 0;
 i7 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   if ((i7 | 0) == (HEAP32[i1 + 48 >> 2] | 0)) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 40 >> 2] & 127](i7);
  }
 } while (0);
 if ((i5 | 0) != 0) {
  i7 = i5 + 4 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 }
 i7 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = i5;
 do {
  if ((i7 | 0) != 0) {
   i5 = i7 + 4 | 0;
   i12 = i5 | 0;
   i15 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) != 0) {
    HEAP32[i12 >> 2] = i15;
    break;
   }
   i15 = i5 - 4 | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 127](i15);
  }
 } while (0);
 __ZN7WebCore14DocumentLoader24startLoadingMainResourceEv(HEAP32[i11 >> 2] | 0);
 i11 = i1 | 0;
 __ZN7WebCore8Document13cancelParsingEv(HEAP32[(HEAP32[i11 >> 2] | 0) + 456 >> 2] | 0);
 __ZN7WebCore23FrameLoaderStateMachine9advanceToENS0_5StateE(i1 + 24 | 0, 1);
 i7 = HEAP32[i9 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i7 >> 2] | 0) + 504 >> 2] & 63](i8, i7);
 i7 = i8 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i9 = i1 + 232 | 0;
 i15 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = i8;
 do {
  if ((i15 | 0) != 0) {
   i8 = i15 + 4 | 0;
   i9 = i8 | 0;
   i5 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i9 >> 2] = i5;
    break;
   }
   i5 = i8 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 127](i5);
  }
 } while (0);
 i15 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i7 = i15 + 4 | 0;
   i5 = i7 | 0;
   i8 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i5 >> 2] = i8;
    break;
   }
   i8 = i7 - 4 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 127](i8);
  }
 } while (0);
 i15 = HEAP32[i11 >> 2] | 0;
 i11 = __Znwj(8) | 0;
 HEAP32[i11 >> 2] = i15;
 HEAP8[i11 + 4 | 0] = 0;
 i15 = i1 + 36 | 0;
 i1 = HEAP32[i15 >> 2] | 0;
 HEAP32[i15 >> 2] = i11;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP8[i1 + 4 | 0] & 1) != 0) {
  i11 = HEAP32[i1 >> 2] | 0;
  __ZN7WebCore15ProgressTracker17progressCompletedEPNS_5FrameE(HEAP32[(HEAP32[i11 + 32 >> 2] | 0) + 52 >> 2] | 0, i11);
 }
 __ZdlPv(i1);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore11FrameLoaderD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 196 | 0;
 do {
  if ((HEAP32[i4 >> 2] | 0) != 0) {
   i5 = HEAP32[i1 + 4 >> 2] | 0;
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 280 >> 2] & 127](i5);
   i5 = HEAP32[i4 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   HEAP32[i3 >> 2] = HEAP32[i1 >> 2];
   __ZN3WTF7HashSetIPN7WebCore5FrameENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i5 + 280 | 0, i3) | 0;
  }
 } while (0);
 HEAP32[i4 >> 2] = 0;
 i4 = HEAP32[(HEAP32[i1 >> 2] | 0) + 456 >> 2] | 0;
 if ((i4 | 0) != 0) {
  __ZN7WebCore8Document19initSecurityContextEv(i4);
 }
 i4 = i1 + 200 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 i5 = HEAP32[i1 + 204 >> 2] | 0;
 i6 = i3 + (i5 << 2) | 0;
 L8 : do {
  if ((HEAP32[i1 + 212 >> 2] | 0) != 0) {
   L10 : do {
    if ((i5 | 0) == 0) {
     i7 = i3;
    } else {
     i8 = i3;
     while (1) {
      i9 = HEAP32[i8 >> 2] | 0;
      if (!((i9 | 0) == (-1 | 0) | (i9 | 0) == 0)) {
       i7 = i8;
       break L10;
      }
      i8 = i8 + 4 | 0;
      if ((i8 | 0) == (i6 | 0)) {
       break L8;
      }
     }
    }
   } while (0);
   if ((i7 | 0) == (i6 | 0)) {
    break;
   } else {
    i10 = i7;
   }
   while (1) {
    HEAP32[(HEAP32[i10 >> 2] | 0) + 276 >> 2] = 0;
    i8 = i10 + 4 | 0;
    if ((i8 | 0) == (i6 | 0)) {
     break L8;
    } else {
     i11 = i8;
    }
    while (1) {
     i8 = HEAP32[i11 >> 2] | 0;
     if (!((i8 | 0) == (-1 | 0) | (i8 | 0) == 0)) {
      break;
     }
     i8 = i11 + 4 | 0;
     if ((i8 | 0) == (i6 | 0)) {
      break L8;
     } else {
      i11 = i8;
     }
    }
    if ((i11 | 0) == (i6 | 0)) {
     break;
    } else {
     i10 = i11;
    }
   }
  }
 } while (0);
 i11 = HEAP32[i1 + 4 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 12 >> 2] & 127](i11);
 i11 = i1 + 232 | 0;
 i10 = HEAP32[i11 >> 2] | 0;
 if ((i10 | 0) != 0) {
  HEAP32[i10 + 8 >> 2] = 0;
 }
 i10 = i1 + 288 | 0;
 i6 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 if ((i6 | 0) != 0) {
  __ZN7WebCore26PageActivityAssertionTokenD1Ev(i6);
  __ZdlPv(i6);
 }
 i6 = HEAP32[i1 + 284 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i10 = i6 | 0;
   i7 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) == 0) {
    __ZN7WebCore11HistoryItemD1Ev(i6);
    __ZN3WTF8fastFreeEPv(i6);
    break;
   } else {
    HEAP32[i10 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i1 + 236 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i7 = i6 | 0;
   i10 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i7 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i11 = i6 + 4 | 0;
   i10 = i11 | 0;
   i7 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i10 >> 2] = i7;
    break;
   }
   i7 = i11 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 127](i7);
  }
 } while (0);
 i6 = HEAP32[i4 >> 2] | 0;
 if ((i6 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i6);
 }
 __ZN7WebCore9TimerBaseD2Ev(i1 + 136 | 0);
 i6 = HEAP32[i1 + 88 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i4 = i6 | 0;
   i7 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i4 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i1 + 80 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i7 = i6 | 0;
   if (((tempValue = HEAP32[i7 >> 2] | 0, HEAP32[i7 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN7WebCore21SerializedScriptValueD1Ev(i6);
   __ZN3WTF8fastFreeEPv(i6);
  }
 } while (0);
 i6 = HEAP32[i1 + 64 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i7 = i6 | 0;
   i4 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i7 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i1 + 56 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i4 = i6 + 4 | 0;
   i7 = i4 | 0;
   i11 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) != 0) {
    HEAP32[i7 >> 2] = i11;
    break;
   }
   i11 = i4 - 4 | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 127](i11);
  }
 } while (0);
 i6 = HEAP32[i1 + 52 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i11 = i6 + 4 | 0;
   i4 = i11 | 0;
   i7 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i4 >> 2] = i7;
    break;
   }
   i7 = i11 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 127](i7);
  }
 } while (0);
 i6 = HEAP32[i1 + 48 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i7 = i6 + 4 | 0;
   i11 = i7 | 0;
   i4 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i11 >> 2] = i4;
    break;
   }
   i4 = i7 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 127](i4);
  }
 } while (0);
 i6 = i1 + 36 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 if ((i4 | 0) != 0) {
  if ((HEAP8[i4 + 4 | 0] & 1) != 0) {
   i6 = HEAP32[i4 >> 2] | 0;
   __ZN7WebCore15ProgressTracker17progressCompletedEPNS_5FrameE(HEAP32[(HEAP32[i6 + 32 >> 2] | 0) + 52 >> 2] | 0, i6);
  }
  __ZdlPv(i4);
 }
 i4 = i1 + 28 | 0;
 i6 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 if ((i6 | 0) != 0) {
  __ZN7WebCore14IconControllerD1Ev(i6);
  __ZN3WTF8fastFreeEPv(i6);
 }
 i6 = i1 + 20 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 if ((i4 | 0) != 0) {
  __ZdlPv(i4 | 0);
 }
 i4 = i1 + 12 | 0;
 i6 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 if ((i6 | 0) != 0) {
  __ZN7WebCore17HistoryControllerD1Ev(i6);
  __ZdlPv(i6);
 }
 i6 = i1 + 8 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore14PolicyCallbackD1Ev(i1 + 16 | 0);
 __ZdlPv(i1);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore11FrameLoaderD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 196 | 0;
 do {
  if ((HEAP32[i4 >> 2] | 0) != 0) {
   i5 = HEAP32[i1 + 4 >> 2] | 0;
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 280 >> 2] & 127](i5);
   i5 = HEAP32[i4 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   HEAP32[i3 >> 2] = HEAP32[i1 >> 2];
   __ZN3WTF7HashSetIPN7WebCore5FrameENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i5 + 280 | 0, i3) | 0;
  }
 } while (0);
 HEAP32[i4 >> 2] = 0;
 i4 = HEAP32[(HEAP32[i1 >> 2] | 0) + 456 >> 2] | 0;
 if ((i4 | 0) != 0) {
  __ZN7WebCore8Document19initSecurityContextEv(i4);
 }
 i4 = i1 + 200 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 i5 = HEAP32[i1 + 204 >> 2] | 0;
 i6 = i3 + (i5 << 2) | 0;
 L8 : do {
  if ((HEAP32[i1 + 212 >> 2] | 0) != 0) {
   L10 : do {
    if ((i5 | 0) == 0) {
     i7 = i3;
    } else {
     i8 = i3;
     while (1) {
      i9 = HEAP32[i8 >> 2] | 0;
      if (!((i9 | 0) == (-1 | 0) | (i9 | 0) == 0)) {
       i7 = i8;
       break L10;
      }
      i8 = i8 + 4 | 0;
      if ((i8 | 0) == (i6 | 0)) {
       break L8;
      }
     }
    }
   } while (0);
   if ((i7 | 0) == (i6 | 0)) {
    break;
   } else {
    i10 = i7;
   }
   while (1) {
    HEAP32[(HEAP32[i10 >> 2] | 0) + 276 >> 2] = 0;
    i8 = i10 + 4 | 0;
    if ((i8 | 0) == (i6 | 0)) {
     break L8;
    } else {
     i11 = i8;
    }
    while (1) {
     i8 = HEAP32[i11 >> 2] | 0;
     if (!((i8 | 0) == (-1 | 0) | (i8 | 0) == 0)) {
      break;
     }
     i8 = i11 + 4 | 0;
     if ((i8 | 0) == (i6 | 0)) {
      break L8;
     } else {
      i11 = i8;
     }
    }
    if ((i11 | 0) == (i6 | 0)) {
     break;
    } else {
     i10 = i11;
    }
   }
  }
 } while (0);
 i11 = HEAP32[i1 + 4 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 12 >> 2] & 127](i11);
 i11 = i1 + 232 | 0;
 i10 = HEAP32[i11 >> 2] | 0;
 if ((i10 | 0) != 0) {
  HEAP32[i10 + 8 >> 2] = 0;
 }
 i10 = i1 + 288 | 0;
 i6 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 if ((i6 | 0) != 0) {
  __ZN7WebCore26PageActivityAssertionTokenD1Ev(i6);
  __ZdlPv(i6);
 }
 i6 = HEAP32[i1 + 284 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i10 = i6 | 0;
   i7 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) == 0) {
    __ZN7WebCore11HistoryItemD1Ev(i6);
    __ZN3WTF8fastFreeEPv(i6);
    break;
   } else {
    HEAP32[i10 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i1 + 236 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i7 = i6 | 0;
   i10 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i7 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i11 = i6 + 4 | 0;
   i10 = i11 | 0;
   i7 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i10 >> 2] = i7;
    break;
   }
   i7 = i11 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 127](i7);
  }
 } while (0);
 i6 = HEAP32[i4 >> 2] | 0;
 if ((i6 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i6);
 }
 __ZN7WebCore9TimerBaseD2Ev(i1 + 136 | 0);
 i6 = HEAP32[i1 + 88 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i4 = i6 | 0;
   i7 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i4 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i1 + 80 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i7 = i6 | 0;
   if (((tempValue = HEAP32[i7 >> 2] | 0, HEAP32[i7 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN7WebCore21SerializedScriptValueD1Ev(i6);
   __ZN3WTF8fastFreeEPv(i6);
  }
 } while (0);
 i6 = HEAP32[i1 + 64 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i7 = i6 | 0;
   i4 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i7 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i1 + 56 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i4 = i6 + 4 | 0;
   i7 = i4 | 0;
   i11 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) != 0) {
    HEAP32[i7 >> 2] = i11;
    break;
   }
   i11 = i4 - 4 | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 127](i11);
  }
 } while (0);
 i6 = HEAP32[i1 + 52 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i11 = i6 + 4 | 0;
   i4 = i11 | 0;
   i7 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i4 >> 2] = i7;
    break;
   }
   i7 = i11 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 127](i7);
  }
 } while (0);
 i6 = HEAP32[i1 + 48 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i7 = i6 + 4 | 0;
   i11 = i7 | 0;
   i4 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i11 >> 2] = i4;
    break;
   }
   i4 = i7 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 127](i4);
  }
 } while (0);
 i6 = i1 + 36 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 if ((i4 | 0) != 0) {
  if ((HEAP8[i4 + 4 | 0] & 1) != 0) {
   i6 = HEAP32[i4 >> 2] | 0;
   __ZN7WebCore15ProgressTracker17progressCompletedEPNS_5FrameE(HEAP32[(HEAP32[i6 + 32 >> 2] | 0) + 52 >> 2] | 0, i6);
  }
  __ZdlPv(i4);
 }
 i4 = i1 + 28 | 0;
 i6 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 if ((i6 | 0) != 0) {
  __ZN7WebCore14IconControllerD1Ev(i6);
  __ZN3WTF8fastFreeEPv(i6);
 }
 i6 = i1 + 20 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 if ((i4 | 0) != 0) {
  __ZdlPv(i4 | 0);
 }
 i4 = i1 + 12 | 0;
 i6 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 if ((i6 | 0) != 0) {
  __ZN7WebCore17HistoryControllerD1Ev(i6);
  __ZdlPv(i6);
 }
 i6 = i1 + 8 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore14PolicyCallbackD1Ev(i1 + 16 | 0);
 __ZdlPv(i1);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore11FrameLoader21transitionToCommittedEPNS_10CachedPageE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = i1 + 40 | 0;
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[(HEAP32[i4 >> 2] | 0) + 452 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i6 = HEAP32[i5 + 40 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 20 >> 2] & 127](i6);
  }
 } while (0);
 i5 = i1 + 4 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 32 >> 2] & 127](i6);
 i6 = i1 + 12 | 0;
 __ZN7WebCore17HistoryController15updateForCommitEv(HEAP32[i6 >> 2] | 0);
 i7 = i1 + 52 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = i1 + 48 | 0;
 do {
  if ((HEAP32[i9 >> 2] | 0) != 0) {
   __ZN7WebCore17HistoryController17saveDocumentStateEv(HEAP32[i6 >> 2] | 0);
   i10 = HEAP32[(HEAP32[i4 >> 2] | 0) + 456 >> 2] | 0;
   if ((i10 | 0) == 0) {
    i11 = 1;
   } else {
    i11 = (HEAP8[i10 + 1433 | 0] & 1) != 0 ? 1 : 2;
   }
   __ZN7WebCore11FrameLoader11stopLoadingENS_17UnloadEventPolicyE(i1, i11);
   __ZN7WebCore6Editor23clearUndoRedoOperationsEv(HEAP32[(HEAP32[i4 >> 2] | 0) + 464 >> 2] | 0);
   if ((HEAP32[i7 >> 2] | 0) != (i8 | 0)) {
    return;
   }
   i10 = HEAP32[i9 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   __ZN7WebCore14DocumentLoader23stopLoadingSubresourcesEv(i10);
   i10 = HEAP32[i9 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   __ZN7WebCore14DocumentLoader18stopLoadingPlugInsEv(i10);
  }
 } while (0);
 __ZN7WebCore11FrameLoader17setDocumentLoaderEPNS_14DocumentLoaderE(i1, HEAP32[i7 >> 2] | 0);
 i11 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   HEAP32[i7 >> 2] = 0;
  } else {
   if ((i11 | 0) == (HEAP32[i9 >> 2] | 0)) {
    HEAP32[i7 >> 2] = 0;
    i12 = i11;
   } else {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 40 >> 2] & 127](i11);
    i10 = HEAP32[i7 >> 2] | 0;
    HEAP32[i7 >> 2] = 0;
    if ((i10 | 0) == 0) {
     break;
    } else {
     i12 = i10;
    }
   }
   i10 = i12 + 4 | 0;
   i13 = i10 | 0;
   i14 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i14 | 0) != 0) {
    HEAP32[i13 >> 2] = i14;
    break;
   }
   i14 = i10 - 4 | 0;
   if ((i14 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 127](i14);
  }
 } while (0);
 if ((HEAP32[i9 >> 2] | 0) != (i8 | 0)) {
  return;
 }
 HEAP32[i3 >> 2] = 1;
 L34 : do {
  switch (HEAP32[i1 + 44 >> 2] | 0) {
  case 7:
   {
    __ZN7WebCore17HistoryController42updateForRedirectWithLockedBackForwardListEv(HEAP32[i6 >> 2] | 0);
    i3 = HEAP32[i5 >> 2] | 0;
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 392 >> 2] & 127](i3);
    break;
   }
  case 0:
   {
    __ZN7WebCore17HistoryController21updateForStandardLoadENS0_17HistoryUpdateTypeE(HEAP32[i6 >> 2] | 0, 0);
    i3 = HEAP32[(HEAP32[i4 >> 2] | 0) + 452 >> 2] | 0;
    if ((i3 | 0) != 0) {
     __ZN7WebCore10ScrollView23setScrollbarsSuppressedEbb(i3 | 0, 1, 0);
    }
    i3 = HEAP32[i5 >> 2] | 0;
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 392 >> 2] & 127](i3);
    break;
   }
  case 2:
  case 1:
  case 3:
   {
    if ((HEAP32[(HEAP32[i4 >> 2] | 0) + 32 >> 2] | 0) == 0) {
     break L34;
    }
    do {
     if (!(__ZNK7WebCore23FrameLoaderStateMachine30committedFirstRealDocumentLoadEv(i1 + 24 | 0) | 0)) {
      i3 = HEAP32[i4 >> 2] | 0;
      if ((HEAP32[i3 + 28 >> 2] | 0) != (i3 | 0)) {
       break;
      }
      __ZN7WebCore17HistoryController21updateForStandardLoadENS0_17HistoryUpdateTypeE(HEAP32[i6 >> 2] | 0, 1);
     }
    } while (0);
    __ZN7WebCore17HistoryController30updateForBackForwardNavigationEv(HEAP32[i6 >> 2] | 0);
    i3 = HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] | 0;
    i12 = (i2 | 0) == 0;
    do {
     if ((i3 | 0) != 0 & i12) {
      i7 = HEAP32[i3 + 136 >> 2] | 0;
      if ((i7 | 0) != 0) {
       i11 = i7 | 0;
       tempValue = HEAP32[i11 >> 2] | 0, HEAP32[i11 >> 2] = tempValue + 1, tempValue;
      }
      i11 = i1 + 80 | 0;
      i14 = HEAP32[i11 >> 2] | 0;
      HEAP32[i11 >> 2] = i7;
      if ((i14 | 0) == 0) {
       break;
      }
      i7 = i14 | 0;
      if (((tempValue = HEAP32[i7 >> 2] | 0, HEAP32[i7 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
       break;
      }
      __ZN7WebCore21SerializedScriptValueD1Ev(i14);
      __ZN3WTF8fastFreeEPv(i14);
     }
    } while (0);
    if (i12) {
     i3 = HEAP32[i5 >> 2] | 0;
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 392 >> 2] & 127](i3);
     break L34;
    } else {
     i3 = i2 + 16 | 0;
     __ZN7WebCore14DocumentLoader8setFrameEPNS_5FrameE(HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] | 0, HEAP32[i4 >> 2] | 0);
     i14 = HEAP32[i5 >> 2] | 0;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i14 >> 2] | 0) + 388 >> 2] & 63](i14, HEAP32[i3 >> 2] | 0);
     break L34;
    }
    break;
   }
  case 4:
  case 9:
  case 6:
  case 8:
   {
    __ZN7WebCore17HistoryController15updateForReloadEv(HEAP32[i6 >> 2] | 0);
    i3 = HEAP32[i5 >> 2] | 0;
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 392 >> 2] & 127](i3);
    break;
   }
  default:
   {}
  }
 } while (0);
 i5 = HEAP32[i9 >> 2] | 0;
 i9 = HEAP32[(__ZNK7WebCore14DocumentLoader16responseMIMETypeEv(i8) | 0) >> 2] | 0;
 if ((i9 | 0) != 0) {
  i8 = i9 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 i8 = i5 + 92 | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = i9;
 do {
  if ((i5 | 0) != 0) {
   i9 = i5 | 0;
   i8 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i9 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i5 = i1 + 24 | 0;
 if (__ZNK7WebCore23FrameLoaderStateMachine28creatingInitialEmptyDocumentEv(i5) | 0) {
  return;
 }
 if (__ZNK7WebCore23FrameLoaderStateMachine30committedFirstRealDocumentLoadEv(i5) | 0) {
  return;
 }
 __ZN7WebCore23FrameLoaderStateMachine9advanceToENS0_5StateE(i5, 2);
 return;
}
function __ZN7WebCore11FrameLoader4openERNS_15CachedFrameBaseE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 104 | 0;
 i4 = i3 | 0;
 i5 = i3 + 48 | 0;
 i6 = i3 + 56 | 0;
 i7 = i3 + 64 | 0;
 i8 = i3 + 72 | 0;
 i9 = i3 + 88 | 0;
 i10 = i3 + 96 | 0;
 i11 = i1 + 76 | 0;
 HEAP8[i11] = 0;
 i12 = i1 + 69 | 0;
 HEAP8[i12] = 1;
 i13 = i4 | 0;
 i14 = HEAP32[i2 + 16 >> 2] | 0;
 HEAP32[i13 >> 2] = i14;
 if ((i14 | 0) == 0) {
  i15 = 0;
  i16 = i4 + 4 | 0;
 } else {
  i17 = i14 | 0;
  HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 2;
  i17 = i4 + 4 | 0;
  i15 = HEAP8[i17] & -4;
  i16 = i17;
 }
 i17 = HEAP8[i2 + 20 | 0] | 0;
 i14 = i17 & 2;
 HEAP8[i16] = i15 | i17 & 1 | i14;
 HEAP32[i4 + 8 >> 2] = HEAP32[i2 + 24 >> 2];
 HEAP32[i4 + 12 >> 2] = HEAP32[i2 + 28 >> 2];
 HEAP32[i4 + 16 >> 2] = HEAP32[i2 + 32 >> 2];
 HEAP32[i4 + 20 >> 2] = HEAP32[i2 + 36 >> 2];
 HEAP32[i4 + 24 >> 2] = HEAP32[i2 + 40 >> 2];
 HEAP32[i4 + 28 >> 2] = HEAP32[i2 + 44 >> 2];
 HEAP32[i4 + 32 >> 2] = HEAP32[i2 + 48 >> 2];
 HEAP32[i4 + 36 >> 2] = HEAP32[i2 + 52 >> 2];
 HEAP32[i4 + 40 >> 2] = HEAP32[i2 + 56 >> 2];
 HEAP32[i4 + 44 >> 2] = HEAP32[i2 + 60 >> 2];
 L5 : do {
  if (i14 << 24 >> 24 != 0) {
   __ZNK7WebCore3URL4hostEv(i5, i4);
   i17 = i5 | 0;
   i15 = HEAP32[i17 >> 2] | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   do {
    if ((HEAP32[i15 + 4 >> 2] | 0) == 0) {
     i18 = 0;
    } else {
     __ZNK7WebCore3URL4pathEv(i6, i4);
     i16 = HEAP32[i6 >> 2] | 0;
     if ((i16 | 0) == 0) {
      i18 = 1;
      break;
     }
     i19 = (HEAP32[i16 + 4 >> 2] | 0) == 0;
     i20 = i16 | 0;
     i21 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
     if ((i21 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i16);
      i18 = i19;
      break;
     } else {
      HEAP32[i20 >> 2] = i21;
      i18 = i19;
      break;
     }
    }
   } while (0);
   i15 = HEAP32[i17 >> 2] | 0;
   do {
    if ((i15 | 0) == 0) {
     if (!i18) {
      break L5;
     }
    } else {
     i19 = i15 | 0;
     i21 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
     if ((i21 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i15);
      if (i18) {
       break;
      } else {
       break L5;
      }
     } else {
      HEAP32[i19 >> 2] = i21;
      if (i18) {
       break;
      } else {
       break L5;
      }
     }
    }
   } while (0);
   __ZN3WTF6StringC1EPKc(i7, H_BASE + 1088 | 0);
   __ZN7WebCore3URL7setPathERKN3WTF6StringE(i4, i7);
   i15 = HEAP32[i7 >> 2] | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   i17 = i15 | 0;
   i21 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i21 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i15);
    break;
   } else {
    HEAP32[i17 >> 2] = i21;
    break;
   }
  }
 } while (0);
 __ZN7WebCore11FrameLoader7startedEv(i1);
 i7 = HEAP32[i2 >> 2] | 0;
 __ZN7WebCore11FrameLoader5clearEPNS_8DocumentEbbb(i1, i7, 1, 1, (HEAP8[i2 + 72 | 0] & 1) != 0);
 __ZN7WebCore8Document14setInPageCacheEb(i7, 0);
 HEAP8[i1 + 84 | 0] = 1;
 HEAP8[i11] = 0;
 HEAP8[i12] = 0;
 i12 = HEAP32[i13 >> 2] | 0;
 if ((i12 | 0) != 0) {
  i11 = i12 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
 }
 i11 = i1 + 64 | 0;
 i4 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = i12;
 do {
  if ((i4 | 0) != 0) {
   i12 = i4 | 0;
   i11 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i12 >> 2] = i11;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i2 + 8 >> 2] | 0;
 __ZN7WebCore9FrameView20setWasScrolledByUserEb(i4, 0);
 i11 = i1 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 i18 = HEAP32[i12 + 452 >> 2] | 0;
 if ((i18 | 0) == 0) {
  i22 = i12;
 } else {
  __ZNK7WebCore6Widget9frameRectEv(i8, i18 | 0);
  __ZN7WebCore9FrameView12setFrameRectERKNS_7IntRectE(i4, i8);
  i22 = HEAP32[i11 >> 2] | 0;
 }
 i8 = i9 | 0;
 HEAP32[i8 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i18 = i4 + 4 | 0;
  HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
 }
 __ZN7WebCore5Frame7setViewEN3WTF10PassRefPtrINS_9FrameViewEEE(i22, i9);
 i9 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i8 = i9 + 4 | 0;
   i22 = i8 | 0;
   i18 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
   if ((i18 | 0) != 0) {
    HEAP32[i22 >> 2] = i18;
    break;
   }
   i18 = i8 - 4 | 0;
   if ((i18 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 127](i18);
  }
 } while (0);
 i9 = HEAP32[i11 >> 2] | 0;
 i18 = i10 | 0;
 HEAP32[i18 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i8 = i7 + 8 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 }
 __ZN7WebCore5Frame11setDocumentEN3WTF10PassRefPtrINS_8DocumentEEE(i9, i10);
 i10 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i18 = i10 + 8 | 0;
   i9 = i18 | 0;
   i8 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   HEAP32[i9 >> 2] = i8;
   if ((i8 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore9DOMWindow19resumeFromPageCacheEv(HEAP32[i7 + 336 >> 2] | 0);
 i7 = (__ZNK7WebCore9FrameTree6parentEv((HEAP32[i11 >> 2] | 0) + 40 | 0) | 0) == 0;
 i10 = HEAP32[i11 >> 2] | 0;
 if (i7) {
  __ZN7WebCore11FrameLoader23setFirstPartyForCookiesERKNS_3URLE(i1, (HEAP32[i10 + 456 >> 2] | 0) + 356 | 0);
 } else {
  __ZN7WebCore11FrameLoader23setFirstPartyForCookiesERKNS_3URLE(i1, (HEAP32[(__ZNK7WebCore9FrameTree6parentEv(i10 + 40 | 0) | 0) + 456 >> 2] | 0) + 596 | 0);
 }
 __ZN7WebCore15CachedFrameBase7restoreEv(i2);
 i2 = HEAP32[i13 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i13 = i2 | 0;
 i10 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
 if ((i10 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i13 >> 2] = i10;
  STACKTOP = i3;
  return;
 }
}
function __ZN3WTF13tryMakeStringINS_6StringEPKcS1_EENS_10PassRefPtrINS_10StringImplEEET_T0_T1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = _strlen(i3 | 0) | 0;
 i9 = i2 | 0;
 i2 = HEAP32[i9 >> 2] | 0;
 i10 = (i2 | 0) == 0;
 if (i10) {
  i11 = 0;
 } else {
  i11 = HEAP32[i2 + 4 >> 2] | 0;
 }
 i12 = _llvm_uadd_with_overflow_i32(i11 | 0, i8 | 0) | 0;
 i11 = tempRet0;
 i13 = i4 | 0;
 i4 = HEAP32[i13 >> 2] | 0;
 i14 = (i4 | 0) == 0;
 if (i14) {
  i15 = 0;
 } else {
  i15 = HEAP32[i4 + 4 >> 2] | 0;
 }
 i16 = _llvm_uadd_with_overflow_i32(i12 | 0, i15 | 0) | 0;
 i15 = i16;
 if (tempRet0 | i11) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i5;
  return;
 }
 if (i10) {
  i17 = 9;
 } else {
  if ((HEAP32[i2 + 16 >> 2] & 32 | 0) != 0) {
   i17 = 9;
  }
 }
 do {
  if ((i17 | 0) == 9) {
   if (!i14) {
    if ((HEAP32[i4 + 16 >> 2] & 32 | 0) == 0) {
     break;
    }
   }
   do {
    if ((i15 | 0) == 0) {
     i2 = __ZN3WTF10StringImpl5emptyEv() | 0;
     if ((i2 | 0) == 0) {
      i17 = 26;
      break;
     }
     i10 = i2 | 0;
     HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
     i18 = i2;
     i19 = 0;
    } else {
     if (i15 >>> 0 > 4294967275 >>> 0) {
      i17 = 26;
      break;
     }
     __ZN3WTF13tryFastMallocEj(i7, i15 + 20 | 0);
     i2 = i7 | 0;
     i10 = HEAP32[i2 >> 2] | 0;
     HEAP32[i2 >> 2] = 0;
     if ((i10 | 0) == 0) {
      i17 = 26;
      break;
     }
     i2 = i10 + 20 | 0;
     HEAP32[i10 >> 2] = 2;
     HEAP32[i10 + 4 >> 2] = i15;
     HEAP32[i10 + 8 >> 2] = i2;
     HEAP32[i10 + 12 >> 2] = 0;
     HEAP32[i10 + 16 >> 2] = 32;
     i18 = i10;
     i19 = i2;
    }
   } while (0);
   if ((i17 | 0) == 26) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i5;
    return;
   }
   i2 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i2 | 0) == 0) {
     i20 = 0;
    } else {
     i10 = HEAP32[i2 + 4 >> 2] | 0;
     i11 = HEAP32[i2 + 8 >> 2] | 0;
     if ((i10 | 0) == 0) {
      i21 = i2;
     } else {
      i16 = 0;
      while (1) {
       HEAP8[i19 + i16 | 0] = HEAP8[i11 + i16 | 0] | 0;
       i16 = i16 + 1 | 0;
       if (i16 >>> 0 >= i10 >>> 0) {
        break;
       }
      }
      i10 = HEAP32[i9 >> 2] | 0;
      if ((i10 | 0) == 0) {
       i20 = 0;
       break;
      } else {
       i21 = i10;
      }
     }
     i20 = HEAP32[i21 + 4 >> 2] | 0;
    }
   } while (0);
   _memcpy(i19 + i20 | 0, i3 | 0, i8) | 0;
   i2 = i20 + i8 | 0;
   i10 = HEAP32[i13 >> 2] | 0;
   do {
    if ((i10 | 0) != 0) {
     i16 = HEAP32[i10 + 4 >> 2] | 0;
     i11 = HEAP32[i10 + 8 >> 2] | 0;
     if ((i16 | 0) == 0) {
      break;
     } else {
      i22 = 0;
     }
     while (1) {
      HEAP8[i19 + (i2 + i22) | 0] = HEAP8[i11 + i22 | 0] | 0;
      i22 = i22 + 1 | 0;
      if (i22 >>> 0 >= i16 >>> 0) {
       break;
      }
     }
    }
   } while (0);
   HEAP32[i1 >> 2] = i18;
   STACKTOP = i5;
   return;
  }
 } while (0);
 do {
  if ((i15 | 0) == 0) {
   i18 = __ZN3WTF10StringImpl5emptyEv() | 0;
   if ((i18 | 0) == 0) {
    i17 = 50;
    break;
   }
   i22 = i18 | 0;
   HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 2;
   i23 = i18;
   i24 = 0;
  } else {
   if (i15 >>> 0 > 2147483637 >>> 0) {
    i17 = 50;
    break;
   }
   __ZN3WTF13tryFastMallocEj(i6, (i15 << 1) + 20 | 0);
   i18 = i6 | 0;
   i22 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = 0;
   if ((i22 | 0) == 0) {
    i17 = 50;
    break;
   }
   i18 = i22 + 20 | 0;
   HEAP32[i22 >> 2] = 2;
   HEAP32[i22 + 4 >> 2] = i15;
   HEAP32[i22 + 8 >> 2] = i18;
   HEAP32[i22 + 12 >> 2] = 0;
   HEAP32[i22 + 16 >> 2] = 0;
   i23 = i22;
   i24 = i18;
  }
 } while (0);
 if ((i17 | 0) == 50) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i5;
  return;
 }
 i17 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i17 | 0) == 0) {
   i25 = 0;
  } else {
   i15 = HEAP32[i17 + 4 >> 2] | 0;
   do {
    if ((HEAP32[i17 + 16 >> 2] & 32 | 0) == 0) {
     i6 = HEAP32[i17 + 8 >> 2] | 0;
     if ((i15 | 0) == 0) {
      break;
     } else {
      i26 = 0;
     }
     while (1) {
      HEAP16[i24 + (i26 << 1) >> 1] = HEAP16[i6 + (i26 << 1) >> 1] | 0;
      i26 = i26 + 1 | 0;
      if (i26 >>> 0 >= i15 >>> 0) {
       break;
      }
     }
    } else {
     i6 = HEAP32[i17 + 8 >> 2] | 0;
     if ((i15 | 0) == 0) {
      break;
     } else {
      i27 = 0;
     }
     while (1) {
      HEAP16[i24 + (i27 << 1) >> 1] = HEAPU8[i6 + i27 | 0] | 0;
      i27 = i27 + 1 | 0;
      if (i27 >>> 0 >= i15 >>> 0) {
       break;
      }
     }
    }
   } while (0);
   i15 = HEAP32[i9 >> 2] | 0;
   if ((i15 | 0) == 0) {
    i25 = 0;
    break;
   }
   i25 = HEAP32[i15 + 4 >> 2] | 0;
  }
 } while (0);
 if ((i8 | 0) != 0) {
  i9 = 0;
  while (1) {
   HEAP16[i24 + (i9 + i25 << 1) >> 1] = HEAPU8[i3 + i9 | 0] | 0;
   i9 = i9 + 1 | 0;
   if (i9 >>> 0 >= i8 >>> 0) {
    break;
   }
  }
 }
 i9 = i25 + i8 | 0;
 i8 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i13 = HEAP32[i8 + 4 >> 2] | 0;
   if ((HEAP32[i8 + 16 >> 2] & 32 | 0) == 0) {
    i25 = HEAP32[i8 + 8 >> 2] | 0;
    if ((i13 | 0) == 0) {
     break;
    } else {
     i28 = 0;
    }
    while (1) {
     HEAP16[i24 + (i28 + i9 << 1) >> 1] = HEAP16[i25 + (i28 << 1) >> 1] | 0;
     i28 = i28 + 1 | 0;
     if (i28 >>> 0 >= i13 >>> 0) {
      break;
     }
    }
   } else {
    i25 = HEAP32[i8 + 8 >> 2] | 0;
    if ((i13 | 0) == 0) {
     break;
    } else {
     i29 = 0;
    }
    while (1) {
     HEAP16[i24 + (i29 + i9 << 1) >> 1] = HEAPU8[i25 + i29 | 0] | 0;
     i29 = i29 + 1 | 0;
     if (i29 >>> 0 >= i13 >>> 0) {
      break;
     }
    }
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = i23;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore11FrameLoader19requestFromDelegateERNS_15ResourceRequestERmRNS_13ResourceErrorE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 376 | 0;
 i6 = i5 | 0;
 i7 = i5 + 184 | 0;
 i8 = i5 + 352 | 0;
 HEAP32[i3 >> 2] = 0;
 if ((HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] | 0) != 0) {
  i9 = __ZN7WebCore15ProgressTracker22createUniqueIdentifierEv() | 0;
  HEAP32[i3 >> 2] = i9;
  __ZN7WebCore20ResourceLoadNotifier32assignIdentifierToInitialRequestEmPNS_14DocumentLoaderERKNS_15ResourceRequestE(i1 + 16 | 0, i9, HEAP32[i1 + 48 >> 2] | 0, i2);
 }
 i9 = i6 | 0;
 __ZN7WebCore19ResourceRequestBaseC2ERKS0_(i9, i2 | 0);
 i10 = HEAP32[i2 + 160 >> 2] | 0;
 HEAP32[i6 + 160 >> 2] = i10;
 if ((i10 | 0) != 0) {
  i11 = i10 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
 }
 i11 = HEAP32[i2 + 164 >> 2] | 0;
 HEAP32[i6 + 164 >> 2] = i11;
 if ((i11 | 0) != 0) {
  i10 = i11 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
 }
 i10 = HEAP32[i2 + 168 >> 2] | 0;
 HEAP32[i6 + 168 >> 2] = i10;
 if ((i10 | 0) != 0) {
  i11 = i10 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
 }
 i11 = HEAP32[i2 + 172 >> 2] | 0;
 HEAP32[i6 + 172 >> 2] = i11;
 if ((i11 | 0) != 0) {
  i10 = i11 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
 }
 HEAP8[i6 + 176 | 0] = HEAP8[i2 + 176 | 0] & 1;
 HEAP8[i6 + 177 | 0] = HEAP8[i2 + 177 | 0] & 1;
 HEAP8[i6 + 178 | 0] = HEAP8[i2 + 178 | 0] & 1;
 HEAP32[i6 + 180 >> 2] = HEAP32[i2 + 180 >> 2];
 i10 = HEAP32[i1 + 48 >> 2] | 0;
 i11 = HEAP32[i3 >> 2] | 0;
 i3 = i7 | 0;
 __ZN7WebCore20ResourceResponseBaseC2Ev(i3);
 HEAP8[i7 + 160 | 0] = 0;
 __ZN7WebCore20ResourceLoadNotifier23dispatchWillSendRequestEPNS_14DocumentLoaderEmRNS_15ResourceRequestERKNS_16ResourceResponseE(i1 + 16 | 0, i10, i11, i6, i7);
 __ZN7WebCore20ResourceResponseBaseD2Ev(i3);
 if (!(__ZNK7WebCore19ResourceRequestBase6isNullEv(i9) | 0)) {
  i9 = i4 | 0;
  i3 = HEAP32[i9 >> 2] | 0;
  HEAP32[i9 >> 2] = 0;
  do {
   if ((i3 | 0) != 0) {
    i9 = i3 | 0;
    i7 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
    if ((i7 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i3);
     break;
    } else {
     HEAP32[i9 >> 2] = i7;
     break;
    }
   }
  } while (0);
  HEAP32[i4 + 4 >> 2] = 0;
  i3 = i4 + 8 | 0;
  i7 = HEAP32[i3 >> 2] | 0;
  HEAP32[i3 >> 2] = 0;
  do {
   if ((i7 | 0) != 0) {
    i3 = i7 | 0;
    i9 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
    if ((i9 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i7);
     break;
    } else {
     HEAP32[i3 >> 2] = i9;
     break;
    }
   }
  } while (0);
  i7 = i4 + 12 | 0;
  i9 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = 0;
  do {
   if ((i9 | 0) != 0) {
    i7 = i9 | 0;
    i3 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
    if ((i3 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i9);
     break;
    } else {
     HEAP32[i7 >> 2] = i3;
     break;
    }
   }
  } while (0);
  HEAP8[i4 + 16 | 0] = 1;
  HEAP8[i4 + 17 | 0] = 0;
  HEAP8[i4 + 18 | 0] = 0;
  i12 = __ZN7WebCore15ResourceRequestaSERKS0_(i2, i6) | 0;
  __ZN7WebCore15ResourceRequestD2Ev(i6);
  STACKTOP = i5;
  return;
 }
 i9 = HEAP32[i1 + 4 >> 2] | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i9 >> 2] | 0) + 296 >> 2] & 3](i8, i9, i2);
 i9 = i8 + 17 | 0;
 HEAP8[i9] = 1;
 i1 = i8 | 0;
 i3 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 i7 = i4 | 0;
 i11 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i3;
 do {
  if ((i11 | 0) != 0) {
   i3 = i11 | 0;
   i7 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i3 >> 2] = i7;
    break;
   }
  }
 } while (0);
 HEAP32[i4 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
 i11 = i8 + 8 | 0;
 i7 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 i3 = i4 + 8 | 0;
 i10 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i7;
 do {
  if ((i10 | 0) != 0) {
   i7 = i10 | 0;
   i3 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i7 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i10 = i8 + 12 | 0;
 i3 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 i7 = i4 + 12 | 0;
 i13 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i3;
 do {
  if ((i13 | 0) != 0) {
   i3 = i13 | 0;
   i7 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i3 >> 2] = i7;
    break;
   }
  }
 } while (0);
 HEAP8[i4 + 16 | 0] = HEAP8[i8 + 16 | 0] & 1;
 HEAP8[i4 + 17 | 0] = HEAP8[i9] & 1;
 HEAP8[i4 + 18 | 0] = HEAP8[i8 + 18 | 0] & 1;
 i8 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i10 = i8 | 0;
   i4 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i10 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i8 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i11 = i8 | 0;
   i4 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i11 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i8 = HEAP32[i1 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i12 = __ZN7WebCore15ResourceRequestaSERKS0_(i2, i6) | 0;
  __ZN7WebCore15ResourceRequestD2Ev(i6);
  STACKTOP = i5;
  return;
 }
 i1 = i8 | 0;
 i4 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i8);
  i12 = __ZN7WebCore15ResourceRequestaSERKS0_(i2, i6) | 0;
  __ZN7WebCore15ResourceRequestD2Ev(i6);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i1 >> 2] = i4;
  i12 = __ZN7WebCore15ResourceRequestaSERKS0_(i2, i6) | 0;
  __ZN7WebCore15ResourceRequestD2Ev(i6);
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore11FrameLoader26reloadWithOverrideEncodingERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 360 | 0;
 i4 = i3 | 0;
 i5 = i3 + 184 | 0;
 i6 = i3 + 232 | 0;
 i7 = i3 + 240 | 0;
 i8 = i3 + 352 | 0;
 i9 = i1 + 48 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i11 = __ZN7WebCore14DocumentLoader7requestEv(i10) | 0;
 i10 = i4 | 0;
 __ZN7WebCore19ResourceRequestBaseC2ERKS0_(i10, i11 | 0);
 i12 = HEAP32[i11 + 160 >> 2] | 0;
 HEAP32[i4 + 160 >> 2] = i12;
 if ((i12 | 0) != 0) {
  i13 = i12 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
 }
 i13 = HEAP32[i11 + 164 >> 2] | 0;
 HEAP32[i4 + 164 >> 2] = i13;
 if ((i13 | 0) != 0) {
  i12 = i13 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
 }
 i12 = HEAP32[i11 + 168 >> 2] | 0;
 HEAP32[i4 + 168 >> 2] = i12;
 if ((i12 | 0) != 0) {
  i13 = i12 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
 }
 i13 = HEAP32[i11 + 172 >> 2] | 0;
 HEAP32[i4 + 172 >> 2] = i13;
 if ((i13 | 0) != 0) {
  i12 = i13 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
 }
 HEAP8[i4 + 176 | 0] = HEAP8[i11 + 176 | 0] & 1;
 HEAP8[i4 + 177 | 0] = HEAP8[i11 + 177 | 0] & 1;
 HEAP8[i4 + 178 | 0] = HEAP8[i11 + 178 | 0] & 1;
 HEAP32[i4 + 180 >> 2] = HEAP32[i11 + 180 >> 2];
 i11 = __ZNK7WebCore14DocumentLoader14unreachableURLEv(HEAP32[i9 >> 2] | 0) | 0;
 i12 = i5 | 0;
 i13 = HEAP32[i11 >> 2] | 0;
 HEAP32[i12 >> 2] = i13;
 if ((i13 | 0) == 0) {
  i14 = 0;
 } else {
  i15 = i13 | 0;
  HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 2;
  i14 = HEAP32[i12 >> 2] | 0;
 }
 i15 = i11 + 4 | 0;
 i13 = i5 + 4 | 0;
 i16 = HEAP8[i13] & -2 | HEAP8[i15] & 1;
 HEAP8[i13] = i16;
 HEAP8[i13] = i16 & -3 | HEAP8[i15] & 2;
 HEAP32[i5 + 8 >> 2] = HEAP32[i11 + 8 >> 2];
 HEAP32[i5 + 12 >> 2] = HEAP32[i11 + 12 >> 2];
 HEAP32[i5 + 16 >> 2] = HEAP32[i11 + 16 >> 2];
 HEAP32[i5 + 20 >> 2] = HEAP32[i11 + 20 >> 2];
 HEAP32[i5 + 24 >> 2] = HEAP32[i11 + 24 >> 2];
 HEAP32[i5 + 28 >> 2] = HEAP32[i11 + 28 >> 2];
 HEAP32[i5 + 32 >> 2] = HEAP32[i11 + 32 >> 2];
 HEAP32[i5 + 36 >> 2] = HEAP32[i11 + 36 >> 2];
 HEAP32[i5 + 40 >> 2] = HEAP32[i11 + 40 >> 2];
 HEAP32[i5 + 44 >> 2] = HEAP32[i11 + 44 >> 2];
 do {
  if ((i14 | 0) != 0) {
   if ((HEAP32[i14 + 4 >> 2] | 0) == 0) {
    break;
   }
   __ZN7WebCore19ResourceRequestBase6setURLERKNS_3URLE(i10, i5);
  }
 } while (0);
 __ZN7WebCore19ResourceRequestBase14setCachePolicyENS_26ResourceRequestCachePolicyE(i10, 2);
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 i14 = HEAP32[(HEAP32[i5 >> 2] | 0) + 372 >> 2] | 0;
 __ZN7WebCore11FrameLoader27defaultSubstituteDataForURLERKNS_3URLE(i7, i1, __ZNK7WebCore19ResourceRequestBase3urlEv(i10) | 0);
 FUNCTION_TABLE_viiii[i14 & 7](i6, i5, i4, i7);
 i5 = i6 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 __ZN7WebCore14SubstituteDataD2Ev(i7);
 i7 = i1 + 56 | 0;
 i5 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i5 | 0) != (i6 | 0)) {
   i14 = (i6 | 0) == 0;
   if (i14) {
    i17 = i5;
   } else {
    __ZN7WebCore14DocumentLoader8setFrameEPNS_5FrameE(i6, HEAP32[i1 >> 2] | 0);
    i17 = HEAP32[i7 >> 2] | 0;
   }
   do {
    if ((i17 | 0) != 0) {
     if ((i17 | 0) == (HEAP32[i1 + 52 >> 2] | 0)) {
      break;
     }
     if ((i17 | 0) == (HEAP32[i9 >> 2] | 0)) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 40 >> 2] & 127](i17);
    }
   } while (0);
   if (!i14) {
    i10 = i6 + 4 | 0;
    HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
   }
   i10 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = i6;
   if ((i10 | 0) == 0) {
    break;
   }
   i11 = i10 + 4 | 0;
   i10 = i11 | 0;
   i15 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) != 0) {
    HEAP32[i10 >> 2] = i15;
    break;
   }
   i15 = i11 - 4 | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 127](i15);
  }
 } while (0);
 i7 = HEAP32[i2 >> 2] | 0;
 if ((i7 | 0) != 0) {
  i2 = i7 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 i2 = i6 + 988 | 0;
 i17 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i7;
 do {
  if ((i17 | 0) != 0) {
   i7 = i17 | 0;
   i2 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    break;
   } else {
    HEAP32[i7 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i17 = i8 | 0;
 HEAP32[i17 >> 2] = 0;
 __ZN7WebCore11FrameLoader22loadWithDocumentLoaderEPNS_14DocumentLoaderENS_13FrameLoadTypeEN3WTF10PassRefPtrINS_9FormStateEEE(i1, i6, 4, i8);
 i8 = HEAP32[i17 >> 2] | 0;
 if ((i8 | 0) != 0) {
  __ZN3WTF10RefCountedIN7WebCore9FormStateEE5derefEv(i8 | 0);
 }
 do {
  if ((i6 | 0) != 0) {
   i8 = i6 + 4 | 0;
   i17 = i8 | 0;
   i1 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
   if ((i1 | 0) != 0) {
    HEAP32[i17 >> 2] = i1;
    break;
   }
   i1 = i8 - 4 | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 127](i1);
  }
 } while (0);
 i6 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i12 = i6 | 0;
   i1 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i12 >> 2] = i1;
    break;
   }
  }
 } while (0);
 __ZN7WebCore15ResourceRequestD2Ev(i4);
 STACKTOP = i3;
 return;
}
function __ZN3WTF13tryMakeStringINS_12StringAppendIPKcNS_6StringEEES3_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = _strlen(i3 | 0) | 0;
 i8 = i2 | 0;
 i9 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
 i10 = i2 + 4 | 0;
 i2 = HEAP32[i10 >> 2] | 0;
 i11 = (i2 | 0) == 0;
 if (i11) {
  i12 = 0;
 } else {
  i12 = HEAP32[i2 + 4 >> 2] | 0;
 }
 i13 = _llvm_uadd_with_overflow_i32(i12 + i9 | 0, i7 | 0) | 0;
 i9 = i13;
 if (tempRet0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 do {
  if (!i11) {
   if ((HEAP32[i2 + 16 >> 2] & 32 | 0) != 0) {
    break;
   }
   do {
    if ((i9 | 0) == 0) {
     i13 = __ZN3WTF10StringImpl5emptyEv() | 0;
     if ((i13 | 0) == 0) {
      i14 = 42;
      break;
     }
     i12 = i13 | 0;
     HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
     i15 = i13;
     i16 = 0;
    } else {
     if (i9 >>> 0 > 2147483637 >>> 0) {
      i14 = 42;
      break;
     }
     __ZN3WTF13tryFastMallocEj(i5, (i9 << 1) + 20 | 0);
     i13 = i5 | 0;
     i12 = HEAP32[i13 >> 2] | 0;
     HEAP32[i13 >> 2] = 0;
     if ((i12 | 0) == 0) {
      i14 = 42;
      break;
     }
     i13 = i12 + 20 | 0;
     HEAP32[i12 >> 2] = 2;
     HEAP32[i12 + 4 >> 2] = i9;
     HEAP32[i12 + 8 >> 2] = i13;
     HEAP32[i12 + 12 >> 2] = 0;
     HEAP32[i12 + 16 >> 2] = 0;
     i15 = i12;
     i16 = i13;
    }
   } while (0);
   if ((i14 | 0) == 42) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   i13 = HEAP32[i8 >> 2] | 0;
   i12 = _strlen(i13 | 0) | 0;
   if ((i12 | 0) != 0) {
    i17 = 0;
    while (1) {
     HEAP16[i16 + (i17 << 1) >> 1] = HEAPU8[i13 + i17 | 0] | 0;
     i17 = i17 + 1 | 0;
     if (i17 >>> 0 >= i12 >>> 0) {
      break;
     }
    }
   }
   i17 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i17 | 0) == 0) {
     i18 = 0;
     i19 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
    } else {
     i13 = HEAP32[i17 + 4 >> 2] | 0;
     do {
      if ((HEAP32[i17 + 16 >> 2] & 32 | 0) == 0) {
       i20 = HEAP32[i17 + 8 >> 2] | 0;
       if ((i13 | 0) == 0) {
        break;
       } else {
        i21 = 0;
       }
       while (1) {
        HEAP16[i16 + (i21 + i12 << 1) >> 1] = HEAP16[i20 + (i21 << 1) >> 1] | 0;
        i21 = i21 + 1 | 0;
        if (i21 >>> 0 >= i13 >>> 0) {
         break;
        }
       }
      } else {
       i20 = HEAP32[i17 + 8 >> 2] | 0;
       if ((i13 | 0) == 0) {
        break;
       } else {
        i22 = 0;
       }
       while (1) {
        HEAP16[i16 + (i22 + i12 << 1) >> 1] = HEAPU8[i20 + i22 | 0] | 0;
        i22 = i22 + 1 | 0;
        if (i22 >>> 0 >= i13 >>> 0) {
         break;
        }
       }
      }
     } while (0);
     i13 = HEAP32[i10 >> 2] | 0;
     i20 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
     if ((i13 | 0) == 0) {
      i18 = 0;
      i19 = i20;
      break;
     }
     i18 = HEAP32[i13 + 4 >> 2] | 0;
     i19 = i20;
    }
   } while (0);
   i12 = i18 + i19 | 0;
   if ((i7 | 0) != 0) {
    i17 = 0;
    while (1) {
     HEAP16[i16 + (i12 + i17 << 1) >> 1] = HEAPU8[i3 + i17 | 0] | 0;
     i17 = i17 + 1 | 0;
     if (i17 >>> 0 >= i7 >>> 0) {
      break;
     }
    }
   }
   HEAP32[i1 >> 2] = i15;
   STACKTOP = i4;
   return;
  }
 } while (0);
 do {
  if ((i9 | 0) == 0) {
   i15 = __ZN3WTF10StringImpl5emptyEv() | 0;
   if ((i15 | 0) == 0) {
    i14 = 21;
    break;
   }
   i16 = i15 | 0;
   HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
   i23 = i15;
   i24 = 0;
  } else {
   if (i9 >>> 0 > 4294967275 >>> 0) {
    i14 = 21;
    break;
   }
   __ZN3WTF13tryFastMallocEj(i6, i9 + 20 | 0);
   i15 = i6 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   HEAP32[i15 >> 2] = 0;
   if ((i16 | 0) == 0) {
    i14 = 21;
    break;
   }
   i15 = i16 + 20 | 0;
   HEAP32[i16 >> 2] = 2;
   HEAP32[i16 + 4 >> 2] = i9;
   HEAP32[i16 + 8 >> 2] = i15;
   HEAP32[i16 + 12 >> 2] = 0;
   HEAP32[i16 + 16 >> 2] = 32;
   i23 = i16;
   i24 = i15;
  }
 } while (0);
 if ((i14 | 0) == 21) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 i14 = HEAP32[i8 >> 2] | 0;
 i9 = _strlen(i14 | 0) | 0;
 _memcpy(i24 | 0, i14 | 0, i9) | 0;
 i14 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i14 | 0) == 0) {
   i25 = 0;
   i26 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
  } else {
   i6 = HEAP32[i14 + 4 >> 2] | 0;
   i15 = HEAP32[i14 + 8 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i27 = i14;
    i28 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
   } else {
    i16 = 0;
    while (1) {
     HEAP8[i24 + (i16 + i9) | 0] = HEAP8[i15 + i16 | 0] | 0;
     i16 = i16 + 1 | 0;
     if (i16 >>> 0 >= i6 >>> 0) {
      break;
     }
    }
    i6 = HEAP32[i10 >> 2] | 0;
    i16 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
    if ((i6 | 0) == 0) {
     i25 = 0;
     i26 = i16;
     break;
    } else {
     i27 = i6;
     i28 = i16;
    }
   }
   i25 = HEAP32[i27 + 4 >> 2] | 0;
   i26 = i28;
  }
 } while (0);
 _memcpy(i24 + (i25 + i26) | 0, i3 | 0, i7) | 0;
 HEAP32[i1 >> 2] = i23;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore11FrameLoader32continueLoadAfterNewWindowPolicyERKNS_15ResourceRequestEN3WTF10PassRefPtrINS_9FormStateEEERKNS4_6StringERKNS_16NavigationActionEb(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 248 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i7 + 16 | 0;
 i11 = i7 + 32 | 0;
 i12 = i7 + 40 | 0;
 i13 = i7 + 48 | 0;
 i14 = i7 + 240 | 0;
 if (!i6) {
  STACKTOP = i7;
  return;
 }
 i6 = HEAP32[i1 >> 2] | 0;
 i15 = i6 + 4 | 0;
 HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
 i15 = HEAP32[i1 + 4 >> 2] | 0;
 i16 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i15 >> 2] | 0) + 168 >> 2] & 15](i15, i5) | 0;
 do {
  if ((i16 | 0) != 0) {
   i5 = i16 + 4 | 0;
   HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
   i5 = i4 | 0;
   do {
    if (!(__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i5 >> 2] | 0, H_BASE + 656 | 0) | 0)) {
     i15 = i16 + 40 | 0;
     i17 = HEAP32[i5 >> 2] | 0;
     do {
      if ((i17 | 0) == 0) {
       i18 = i11 | 0;
       HEAP32[i18 >> 2] = 0;
       i19 = i18;
      } else {
       if ((HEAP32[i17 + 16 >> 2] & 16 | 0) == 0) {
        __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i11, i17);
        i19 = i11 | 0;
        break;
       } else {
        i18 = i11 | 0;
        HEAP32[i18 >> 2] = i17;
        i20 = i17 | 0;
        HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 2;
        i19 = i18;
        break;
       }
      }
     } while (0);
     i17 = i12 | 0;
     HEAP32[i17 >> 2] = HEAP32[i19 >> 2];
     __ZN7WebCore9FrameTree7setNameERKN3WTF12AtomicStringE(i15, i12);
     i18 = HEAP32[i17 >> 2] | 0;
     if ((i18 | 0) == 0) {
      break;
     }
     i17 = i18 | 0;
     i20 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
     if ((i20 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i18);
      break;
     } else {
      HEAP32[i17 >> 2] = i20;
      break;
     }
    }
   } while (0);
   __ZN7WebCore4Page14setOpenedByDOMEv(HEAP32[i16 + 32 >> 2] | 0);
   i5 = i16 + 80 | 0;
   i20 = i16 + 84 | 0;
   i17 = HEAP32[i20 >> 2] | 0;
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 172 >> 2] & 127](i17);
   if ((HEAP8[i1 + 222 | 0] & 1) == 0) {
    i17 = i16 + 276 | 0;
    i18 = HEAP32[i17 >> 2] | 0;
    i21 = (i6 | 0) == 0;
    if ((i18 | 0) != 0 & i21) {
     i22 = HEAP32[i20 >> 2] | 0;
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i22 >> 2] | 0) + 280 >> 2] & 127](i22);
     i23 = HEAP32[i17 >> 2] | 0;
    } else {
     i23 = i18;
    }
    if ((i23 | 0) == 0) {
     i24 = i5 | 0;
    } else {
     i18 = i5 | 0;
     HEAP32[i8 >> 2] = HEAP32[i18 >> 2];
     __ZN3WTF7HashSetIPN7WebCore5FrameENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i23 + 280 | 0, i8) | 0;
     i24 = i18;
    }
    if (!i21) {
     HEAP32[i9 >> 2] = HEAP32[i24 >> 2];
     __ZN3WTF9HashTableIPN7WebCore5FrameES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i10, i6 + 280 | 0, i9, i9);
    }
    HEAP32[i17 >> 2] = i6;
    i17 = HEAP32[(HEAP32[i24 >> 2] | 0) + 456 >> 2] | 0;
    if ((i17 | 0) != 0) {
     __ZN7WebCore8Document19initSecurityContextEv(i17);
    }
    HEAP32[(HEAP32[i16 + 456 >> 2] | 0) + 1944 >> 2] = HEAP32[(HEAP32[i6 + 456 >> 2] | 0) + 1944 >> 2];
   }
   __ZN7WebCore16NavigationActionC1ERKNS_15ResourceRequestE(i13, i2);
   i17 = i14 | 0;
   i21 = i3 | 0;
   i18 = HEAP32[i21 >> 2] | 0;
   HEAP32[i21 >> 2] = 0;
   HEAP32[i17 >> 2] = i18;
   __ZN7WebCore11FrameLoader24loadWithNavigationActionERKNS_15ResourceRequestERKNS_16NavigationActionEbNS_13FrameLoadTypeEN3WTF10PassRefPtrINS_9FormStateEEE(i5, i2, i13, 0, 0, i14);
   i5 = HEAP32[i17 >> 2] | 0;
   if ((i5 | 0) != 0) {
    __ZN3WTF10RefCountedIN7WebCore9FormStateEE5derefEv(i5 | 0);
   }
   i5 = HEAP32[i13 + 188 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i17 = i5 + 8 | 0;
     i18 = i17 | 0;
     i21 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
     if ((i21 | 0) != 0) {
      HEAP32[i18 >> 2] = i21;
      break;
     }
     i21 = i17 - 8 | 0;
     if ((i21 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 127](i21);
    }
   } while (0);
   __ZN7WebCore15ResourceRequestD2Ev(i13 | 0);
   i5 = i16 + 4 | 0;
   i21 = i5 | 0;
   i17 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
   if ((i17 | 0) != 0) {
    HEAP32[i21 >> 2] = i17;
    break;
   }
   i17 = i5 - 4 | 0;
   if ((i17 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 4 >> 2] & 127](i17);
  }
 } while (0);
 i16 = i6 + 4 | 0;
 i6 = i16 | 0;
 i13 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i13 | 0) != 0) {
  HEAP32[i6 >> 2] = i13;
  STACKTOP = i7;
  return;
 }
 i13 = i16 - 4 | 0;
 if ((i13 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 127](i13);
 STACKTOP = i7;
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
function __ZN7WebCore11FrameLoader24loadWithNavigationActionERKNS_15ResourceRequestERKNS_16NavigationActionEbNS_13FrameLoadTypeEN3WTF10PassRefPtrINS_9FormStateEEE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 176 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i7 + 120 | 0;
 i11 = i7 + 168 | 0;
 i12 = HEAP32[i1 + 4 >> 2] | 0;
 i13 = HEAP32[(HEAP32[i12 >> 2] | 0) + 372 >> 2] | 0;
 __ZN7WebCore11FrameLoader27defaultSubstituteDataForURLERKNS_3URLE(i9, i1, __ZNK7WebCore19ResourceRequestBase3urlEv(i2 | 0) | 0);
 FUNCTION_TABLE_viiii[i13 & 7](i8, i12, i2, i9);
 i2 = i8 | 0;
 i8 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 __ZN7WebCore14SubstituteDataD2Ev(i9);
 do {
  if (i4) {
   i9 = HEAP32[i1 + 48 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   do {
    if ((HEAP8[i9 + 1504 | 0] & 1) == 0) {
     i2 = HEAP32[i9 + 1500 >> 2] | 0;
     if ((i2 | 0) == 0) {
      i14 = 0;
      i15 = 0;
      i16 = 1;
      i17 = 1;
      break;
     }
     i12 = i2 | 0;
     i13 = (HEAP32[i12 >> 2] | 0) + 2 | 0;
     HEAP32[i12 >> 2] = i13;
     i18 = 1;
     i19 = 0;
     i20 = i2;
     i21 = i13;
     i22 = 8;
    } else {
     __ZNK7WebCore14DocumentLoader13urlForHistoryEv(i10, i9);
     i13 = HEAP32[i10 >> 2] | 0;
     if ((i13 | 0) == 0) {
      i14 = 0;
      i15 = 1;
      i16 = 0;
      i17 = 1;
      break;
     }
     i2 = i13 | 0;
     i12 = (HEAP32[i2 >> 2] | 0) + 2 | 0;
     HEAP32[i2 >> 2] = i12;
     i18 = 0;
     i19 = 1;
     i20 = i13;
     i21 = i12;
     i22 = 8;
    }
   } while (0);
   if ((i22 | 0) == 8) {
    HEAP32[i20 >> 2] = i21 + 2;
    i14 = i20;
    i15 = i19;
    i16 = i18;
    i17 = (i20 | 0) == 0;
   }
   i9 = i8 + 1500 | 0;
   i12 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = i14;
   do {
    if ((i12 | 0) != 0) {
     i9 = i12 | 0;
     i13 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
     if ((i13 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i12);
      break;
     } else {
      HEAP32[i9 >> 2] = i13;
      break;
     }
    }
   } while (0);
   do {
    if (!(i17 | i16 ^ 1)) {
     i12 = i14 | 0;
     i13 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
     if ((i13 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i14);
      break;
     } else {
      HEAP32[i12 >> 2] = i13;
      break;
     }
    }
   } while (0);
   if (!i15) {
    break;
   }
   do {
    if (!i17) {
     i13 = i14 | 0;
     i12 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
     if ((i12 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i14);
      break;
     } else {
      HEAP32[i13 >> 2] = i12;
      break;
     }
    }
   } while (0);
   i12 = HEAP32[i10 >> 2] | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   i13 = i12 | 0;
   i9 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i13 >> 2] = i9;
    break;
   }
  }
 } while (0);
 __ZN7WebCore15ResourceRequestaSERKS0_(i8 + 992 | 0, i3 | 0) | 0;
 HEAP32[i8 + 1176 >> 2] = HEAP32[i3 + 184 >> 2];
 i10 = HEAP32[i3 + 188 >> 2] | 0;
 if ((i10 | 0) != 0) {
  i3 = i10 + 8 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 i3 = i8 + 1180 | 0;
 i14 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i10;
 do {
  if ((i14 | 0) != 0) {
   i10 = i14 + 8 | 0;
   i3 = i10 | 0;
   i17 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i17 | 0) != 0) {
    HEAP32[i3 >> 2] = i17;
    break;
   }
   i17 = i10 - 8 | 0;
   if ((i17 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 4 >> 2] & 127](i17);
  }
 } while (0);
 i14 = HEAP32[i1 + 48 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i17 = HEAP32[i14 + 988 >> 2] | 0;
   if ((i17 | 0) != 0) {
    i10 = i17 | 0;
    HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
   }
   i10 = i8 + 988 | 0;
   i3 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = i17;
   if ((i3 | 0) == 0) {
    break;
   }
   i17 = i3 | 0;
   i10 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i17 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i14 = i11 | 0;
 i10 = i6 | 0;
 i6 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i14 >> 2] = i6;
 __ZN7WebCore11FrameLoader22loadWithDocumentLoaderEPNS_14DocumentLoaderENS_13FrameLoadTypeEN3WTF10PassRefPtrINS_9FormStateEEE(i1, i8, i5, i11);
 i11 = HEAP32[i14 >> 2] | 0;
 if ((i11 | 0) != 0) {
  __ZN3WTF10RefCountedIN7WebCore9FormStateEE5derefEv(i11 | 0);
 }
 if ((i8 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i11 = i8 + 4 | 0;
 i8 = i11 | 0;
 i14 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 if ((i14 | 0) != 0) {
  HEAP32[i8 >> 2] = i14;
  STACKTOP = i7;
  return;
 }
 i14 = i11 - 4 | 0;
 if ((i14 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 127](i14);
 STACKTOP = i7;
 return;
}
function __ZN7WebCore11FrameLoader25receivedMainResourceErrorERKNS_13ResourceErrorE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i1 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = i6 + 4 | 0;
 HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 i7 = i1 + 40 | 0;
 i8 = i1 + 52 | 0;
 i9 = HEAP32[((HEAP32[i7 >> 2] | 0) == 0 ? i8 : i1 + 48 | 0) >> 2] | 0;
 i10 = (i9 | 0) != 0;
 if (i10) {
  i11 = i9 + 4 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
 }
 i11 = HEAP32[i5 >> 2] | 0;
 i12 = i11 + 4 | 0;
 HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
 i12 = HEAP32[(HEAP32[(HEAP32[i5 >> 2] | 0) + 456 >> 2] | 0) + 344 >> 2] | 0;
 if ((i12 | 0) != 0) {
  i13 = i12;
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 52 >> 2] & 127](i12);
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 36 >> 2] & 127](i12);
 }
 __ZN7WebCore14IconController10stopLoaderEv(HEAP32[i1 + 28 >> 2] | 0);
 i12 = i11 + 4 | 0;
 i11 = i12 | 0;
 i13 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
 do {
  if ((i13 | 0) == 0) {
   i14 = i12 - 4 | 0;
   if ((i14 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 127](i14);
  } else {
   HEAP32[i11 >> 2] = i13;
  }
 } while (0);
 i13 = i1 + 4 | 0;
 i11 = HEAP32[i13 >> 2] | 0;
 do {
  if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i11 >> 2] | 0) + 324 >> 2] & 15](i11, i2) | 0) {
   i12 = HEAP32[(HEAP32[i5 >> 2] | 0) + 448 >> 2] | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   i14 = HEAP32[i12 + 44 >> 2] | 0;
   i15 = HEAP32[__ZN7WebCore9HTMLNames9objectTagE >> 2] | 0;
   if ((i14 | 0) != (i15 | 0)) {
    if ((HEAP32[i14 + 12 >> 2] | 0) != (HEAP32[i15 + 12 >> 2] | 0)) {
     break;
    }
    if ((HEAP32[i14 + 16 >> 2] | 0) != (HEAP32[i15 + 16 >> 2] | 0)) {
     break;
    }
   }
   __ZN7WebCore17HTMLObjectElement21renderFallbackContentEv(i12);
  }
 } while (0);
 do {
  if ((HEAP32[i7 >> 2] | 0) == 0) {
   i2 = HEAP32[i8 >> 2] | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   i11 = __ZNK7WebCore19ResourceRequestBase3urlEv(__ZNK7WebCore14DocumentLoader19originalRequestCopyEv(i2) | 0) | 0;
   i2 = i1 + 88 | 0;
   do {
    if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i2 >> 2] | 0, HEAP32[i11 >> 2] | 0) | 0) {
     i12 = i4 | 0;
     HEAP32[i12 >> 2] = 0;
     __ZN7WebCore3URL10invalidateEv(i4);
     i15 = HEAP32[i12 >> 2] | 0;
     HEAP32[i12 >> 2] = 0;
     i14 = HEAP32[i2 >> 2] | 0;
     HEAP32[i2 >> 2] = i15;
     do {
      if ((i14 | 0) != 0) {
       i15 = i14 | 0;
       i16 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
       if ((i16 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i14);
        break;
       } else {
        HEAP32[i15 >> 2] = i16;
        break;
       }
      }
     } while (0);
     i14 = HEAP8[i4 + 4 | 0] | 0;
     i16 = i1 + 92 | 0;
     HEAP8[i16] = HEAP8[i16] & -4 | i14 & 1 | i14 & 2;
     HEAP32[i1 + 96 >> 2] = HEAP32[i4 + 8 >> 2];
     HEAP32[i1 + 100 >> 2] = HEAP32[i4 + 12 >> 2];
     HEAP32[i1 + 104 >> 2] = HEAP32[i4 + 16 >> 2];
     HEAP32[i1 + 108 >> 2] = HEAP32[i4 + 20 >> 2];
     HEAP32[i1 + 112 >> 2] = HEAP32[i4 + 24 >> 2];
     HEAP32[i1 + 116 >> 2] = HEAP32[i4 + 28 >> 2];
     HEAP32[i1 + 120 >> 2] = HEAP32[i4 + 32 >> 2];
     HEAP32[i1 + 124 >> 2] = HEAP32[i4 + 36 >> 2];
     HEAP32[i1 + 128 >> 2] = HEAP32[i4 + 40 >> 2];
     HEAP32[i1 + 132 >> 2] = HEAP32[i4 + 44 >> 2];
     i14 = HEAP32[i12 >> 2] | 0;
     if ((i14 | 0) == 0) {
      break;
     }
     i16 = i14 | 0;
     i15 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
     if ((i15 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i14);
      break;
     } else {
      HEAP32[i16 >> 2] = i15;
      break;
     }
    }
   } while (0);
   __ZN7WebCore17HistoryController31invalidateCurrentItemCachedPageEv(HEAP32[i1 + 12 >> 2] | 0);
   i2 = i1 + 62 | 0;
   if ((HEAP8[i2] & 1) == 0) {
    break;
   }
   i11 = HEAP32[i13 >> 2] | 0;
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 92 >> 2] & 127](i11);
   HEAP8[i1 + 61 | 0] = 0;
   HEAP8[i2] = 0;
  }
 } while (0);
 __ZN7WebCore11FrameLoader14checkCompletedEv(i1);
 if ((HEAP32[(HEAP32[i5 >> 2] | 0) + 32 >> 2] | 0) != 0) {
  __ZN7WebCore11FrameLoader17checkLoadCompleteEv(i1);
 }
 do {
  if (i10) {
   i1 = i9 + 4 | 0;
   i5 = i1 | 0;
   i13 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i13 | 0) != 0) {
    HEAP32[i5 >> 2] = i13;
    break;
   }
   i13 = i1 - 4 | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 127](i13);
  }
 } while (0);
 i9 = i6 + 4 | 0;
 i6 = i9 | 0;
 i10 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i10 | 0) != 0) {
  HEAP32[i6 >> 2] = i10;
  STACKTOP = i3;
  return;
 }
 i10 = i9 - 4 | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 127](i10);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11FrameLoader16detachFromParentEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i1 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = i6 + 4 | 0;
 HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 i7 = i1 + 12 | 0;
 __ZN7WebCore17HistoryController17saveDocumentStateEv(HEAP32[i7 >> 2] | 0);
 i8 = HEAP32[(HEAP32[i5 >> 2] | 0) + 456 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i9 = 1;
 } else {
  i9 = (HEAP8[i8 + 1433 | 0] & 1) != 0 ? 1 : 2;
 }
 __ZN7WebCore11FrameLoader11stopLoadingENS_17UnloadEventPolicyE(i1, i9);
 __ZN7WebCore6Editor23clearUndoRedoOperationsEv(HEAP32[(HEAP32[i5 >> 2] | 0) + 464 >> 2] | 0);
 i9 = HEAP32[i7 >> 2] | 0;
 __ZN7WebCore17HistoryController36saveScrollPositionAndViewStateToItemEPNS_11HistoryItemE(i9, HEAP32[i9 + 4 >> 2] | 0);
 __ZN7WebCore11FrameLoader14detachChildrenEv(i1);
 __ZN7WebCore11FrameLoader14stopAllLoadersENS_26ClearProvisionalItemPolicyE(i1, 0);
 i9 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i7 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(HEAP32[i9 + 32 >> 2] | 0) | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   __ZN7WebCore24InspectorInstrumentation27frameDetachedFromParentImplEPNS_19InstrumentingAgentsEPNS_5FrameE(i7, i9);
  }
 } while (0);
 i9 = i1 + 4 | 0;
 i7 = HEAP32[i9 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 36 >> 2] & 127](i7);
 i7 = i1 + 48 | 0;
 do {
  if ((HEAP32[i7 >> 2] | 0) != 0) {
   i8 = HEAP32[i9 >> 2] | 0;
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 368 >> 2] & 127](i8);
   __ZN7WebCore11FrameLoader14detachChildrenEv(i1);
   i8 = HEAP32[i7 >> 2] | 0;
   if ((i8 | 0) == 0) {
    HEAP32[i7 >> 2] = 0;
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 40 >> 2] & 127](i8);
   i8 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = 0;
   if ((i8 | 0) == 0) {
    break;
   }
   i10 = i8 + 4 | 0;
   i8 = i10 | 0;
   i11 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) != 0) {
    HEAP32[i8 >> 2] = i11;
    break;
   }
   i11 = i10 - 4 | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 127](i11);
  }
 } while (0);
 i7 = HEAP32[i9 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 40 >> 2] & 127](i7);
 i7 = i1 + 36 | 0;
 i1 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 if ((i1 | 0) != 0) {
  if ((HEAP8[i1 + 4 | 0] & 1) != 0) {
   i7 = HEAP32[i1 >> 2] | 0;
   __ZN7WebCore15ProgressTracker17progressCompletedEPNS_5FrameE(HEAP32[(HEAP32[i7 + 32 >> 2] | 0) + 52 >> 2] | 0, i7);
  }
  __ZdlPv(i1);
 }
 i1 = __ZNK7WebCore9FrameTree6parentEv((HEAP32[i5 >> 2] | 0) + 40 | 0) | 0;
 i7 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i1 | 0) == 0) {
   i9 = i4 | 0;
   HEAP32[i9 >> 2] = 0;
   __ZN7WebCore5Frame7setViewEN3WTF10PassRefPtrINS_9FrameViewEEE(i7, i4);
   i11 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i11 | 0) != 0) {
     i9 = i11 + 4 | 0;
     i10 = i9 | 0;
     i8 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
     if ((i8 | 0) != 0) {
      HEAP32[i10 >> 2] = i8;
      break;
     }
     i8 = i9 - 4 | 0;
     if ((i8 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 127](i8);
    }
   } while (0);
   __ZN7WebCore5Frame14willDetachPageEv(HEAP32[i5 >> 2] | 0);
   HEAP32[(HEAP32[i5 >> 2] | 0) + 32 >> 2] = 0;
  } else {
   HEAP32[i7 + 44 >> 2] = 0;
   i11 = i3 | 0;
   HEAP32[i11 >> 2] = 0;
   __ZN7WebCore5Frame7setViewEN3WTF10PassRefPtrINS_9FrameViewEEE(i7, i3);
   i8 = HEAP32[i11 >> 2] | 0;
   do {
    if ((i8 | 0) != 0) {
     i11 = i8 + 4 | 0;
     i9 = i11 | 0;
     i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
     if ((i10 | 0) != 0) {
      HEAP32[i9 >> 2] = i10;
      break;
     }
     i10 = i11 - 4 | 0;
     if ((i10 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 127](i10);
    }
   } while (0);
   i8 = i7 + 32 | 0;
   do {
    if ((HEAP32[i7 + 448 >> 2] | 0) != 0) {
     i10 = HEAP32[i8 >> 2] | 0;
     if ((i10 | 0) == 0) {
      break;
     }
     i11 = i10 + 88 | 0;
     HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) - 1;
    }
   } while (0);
   __ZN7WebCore5Frame14willDetachPageEv(i7);
   HEAP32[i8 >> 2] = 0;
   __ZN7WebCore9FrameTree11removeChildEPNS_5FrameE((HEAP32[i1 + 80 >> 2] | 0) + 40 | 0, i7);
   HEAP8[i1 + 272 | 0] = 1;
   if (+HEAPF64[i1 + 224 >> 3] != +0) {
    break;
   }
   __ZN7WebCore9TimerBase5startEdd(i1 + 216 | 0, +0, +0);
  }
 } while (0);
 i1 = i6 + 4 | 0;
 i6 = i1 | 0;
 i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i7 | 0) != 0) {
  HEAP32[i6 >> 2] = i7;
  STACKTOP = i2;
  return;
 }
 i7 = i1 - 4 | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 127](i7);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore11FrameLoader24defaultObjectContentTypeERKNS_3URLERKN3WTF6StringEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i5 | 0;
 i12 = HEAP32[i2 >> 2] | 0;
 HEAP32[i11 >> 2] = i12;
 do {
  if ((i12 | 0) == 0) {
   i13 = 4;
  } else {
   i2 = i12 | 0;
   HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
   i2 = HEAP32[i11 >> 2] | 0;
   if ((i2 | 0) == 0) {
    i13 = 4;
    break;
   }
   if ((HEAP32[i2 + 4 >> 2] | 0) == 0) {
    i13 = 4;
   }
  }
 } while (0);
 do {
  if ((i13 | 0) == 4) {
   __ZN7WebCore15mimeTypeFromURLERKNS_3URLE(i6, i1);
   i12 = i6 | 0;
   i2 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   i14 = HEAP32[i11 >> 2] | 0;
   HEAP32[i11 >> 2] = i2;
   do {
    if ((i14 | 0) != 0) {
     i2 = i14 | 0;
     i15 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
     if ((i15 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i14);
      break;
     } else {
      HEAP32[i2 >> 2] = i15;
      break;
     }
    }
   } while (0);
   i14 = HEAP32[i12 >> 2] | 0;
   if ((i14 | 0) == 0) {
    break;
   }
   i15 = i14 | 0;
   i2 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    break;
   } else {
    HEAP32[i15 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i11 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i13 = 14;
 } else {
  if ((HEAP32[i6 + 4 >> 2] | 0) == 0) {
   i13 = 14;
  }
 }
 do {
  if ((i13 | 0) == 14) {
   __ZNK7WebCore3URL4pathEv(i8, i1);
   __ZN7WebCore24decodeURLEscapeSequencesERKN3WTF6StringE(i7, i8);
   i6 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i6 | 0) != 0) {
     i2 = i6 | 0;
     i15 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
     if ((i15 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i6);
      break;
     } else {
      HEAP32[i2 >> 2] = i15;
      break;
     }
    }
   } while (0);
   i6 = __ZN7WebCore14PluginDatabase16installedPluginsEb(1) | 0;
   i12 = i7 | 0;
   i15 = HEAP32[i12 >> 2] | 0;
   if ((i15 | 0) == 0) {
    i16 = 0;
   } else {
    i16 = (__ZN3WTF10StringImpl11reverseFindEtj(i15, 46, -1) | 0) + 1 | 0;
   }
   __ZNK3WTF6String9substringEjj(i10, i7, i16, -1);
   __ZNK7WebCore14PluginDatabase20MIMETypeForExtensionERKN3WTF6StringE(i9, i6, i10);
   i6 = i9 | 0;
   i15 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = 0;
   i2 = HEAP32[i11 >> 2] | 0;
   HEAP32[i11 >> 2] = i15;
   do {
    if ((i2 | 0) != 0) {
     i15 = i2 | 0;
     i14 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i2);
      break;
     } else {
      HEAP32[i15 >> 2] = i14;
      break;
     }
    }
   } while (0);
   i2 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i2 | 0) != 0) {
     i14 = i2 | 0;
     i15 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
     if ((i15 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i2);
      break;
     } else {
      HEAP32[i14 >> 2] = i15;
      break;
     }
    }
   } while (0);
   i2 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i2 | 0) != 0) {
     i6 = i2 | 0;
     i15 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
     if ((i15 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i2);
      break;
     } else {
      HEAP32[i6 >> 2] = i15;
      break;
     }
    }
   } while (0);
   i2 = HEAP32[i12 >> 2] | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   i15 = i2 | 0;
   i6 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i15 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i10 = HEAP32[i11 >> 2] | 0;
 if ((i10 | 0) == 0) {
  i17 = 2;
  STACKTOP = i4;
  return i17 | 0;
 }
 do {
  if ((HEAP32[i10 + 4 >> 2] | 0) == 0) {
   i18 = 2;
  } else {
   i9 = __ZN7WebCore14PluginDatabase20isMIMETypeRegisteredERKN3WTF6StringE(__ZN7WebCore14PluginDatabase16installedPluginsEb(1) | 0, i5) | 0;
   if (__ZN7WebCore16MIMETypeRegistry24isSupportedImageMIMETypeERKN3WTF6StringE(i5) | 0) {
    if (!i3) {
     i18 = 1;
     break;
    }
    i18 = i9 ? 3 : 1;
    break;
   } else {
    if (i9) {
     i18 = 3;
     break;
    }
    i9 = __ZN7WebCore16MIMETypeRegistry27isSupportedNonImageMIMETypeERKN3WTF6StringE(i5) | 0;
    i18 = i9 ? 2 : 0;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i11 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i17 = i18;
  STACKTOP = i4;
  return i17 | 0;
 }
 i11 = i5 | 0;
 i3 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  i17 = i18;
  STACKTOP = i4;
  return i17 | 0;
 } else {
  HEAP32[i11 >> 2] = i3;
  i17 = i18;
  STACKTOP = i4;
  return i17 | 0;
 }
 return 0;
}
function __ZN7WebCore11FrameLoader27defaultSubstituteDataForURLERKNS_3URLE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 136 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 88 | 0;
 if (!(__ZNK7WebCore11FrameLoader30shouldTreatURLAsSrcdocDocumentERKNS_3URLE(i2, i3) | 0)) {
  _memset(i1 | 0, 0, 16) | 0;
  __ZN7WebCore3URL10invalidateEv(i1 + 12 | 0);
  i3 = i1 + 60 | 0;
  HEAP32[i3 >> 2] = 0;
  __ZN7WebCore3URL10invalidateEv(i3);
  HEAP8[i1 + 108 | 0] = 0;
  STACKTOP = i4;
  return;
 }
 i3 = HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 448 >> 2] | 0) + 48 >> 2] | 0;
 L5 : do {
  if ((i3 | 0) == 0) {
   i12 = __ZN3WTF8nullAtomE;
  } else {
   i2 = HEAP32[i3 + 4 >> 2] | 0;
   if ((i2 & 1 | 0) == 0) {
    i13 = i2 >>> 1 & 134217727;
    i14 = i3 + 20 | 0;
   } else {
    i2 = i3 + 24 | 0;
    i13 = HEAP32[i2 + 8 >> 2] | 0;
    i14 = HEAP32[i2 >> 2] | 0;
   }
   if ((i13 | 0) == 0) {
    i12 = __ZN3WTF8nullAtomE;
    break;
   }
   i2 = HEAP32[__ZN7WebCore9HTMLNames10srcdocAttrE >> 2] | 0;
   i15 = i2 + 12 | 0;
   i16 = i2 + 16 | 0;
   i17 = 0;
   while (1) {
    i18 = i14 + (i17 << 3) | 0;
    i19 = HEAP32[i18 >> 2] | 0;
    if ((i19 | 0) == (i2 | 0)) {
     break;
    }
    if ((HEAP32[i19 + 12 >> 2] | 0) == (HEAP32[i15 >> 2] | 0)) {
     if ((HEAP32[i19 + 16 >> 2] | 0) == (HEAP32[i16 >> 2] | 0)) {
      break;
     }
    }
    i19 = i17 + 1 | 0;
    if (i19 >>> 0 < i13 >>> 0) {
     i17 = i19;
    } else {
     i12 = __ZN3WTF8nullAtomE;
     break L5;
    }
   }
   i12 = (i18 | 0) == 0 ? __ZN3WTF8nullAtomE : i14 + (i17 << 3) + 4 | 0;
  }
 } while (0);
 i14 = i5 | 0;
 i18 = HEAP32[i12 >> 2] | 0;
 HEAP32[i14 >> 2] = i18;
 if ((i18 | 0) != 0) {
  i12 = i18 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
 }
 __ZNK3WTF6String4utf8ENS_14ConversionModeE(i6, i5, 0);
 i5 = i6 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i20 = 0;
  i21 = 0;
 } else {
  i20 = HEAP32[i6 + 4 >> 2] | 0;
  i21 = i6 + 8 | 0;
 }
 i6 = __ZN3WTF10fastMallocEj(40) | 0;
 __ZN7WebCore12SharedBufferC1EPKcj(i6, i21, i20);
 i20 = i7 | 0;
 HEAP32[i20 >> 2] = i6;
 __ZN3WTF6StringC1EPKc(i8, H_BASE + 1144 | 0);
 __ZN3WTF6StringC1EPKc(i9, H_BASE + 1136 | 0);
 i6 = i10 | 0;
 HEAP32[i6 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i10);
 i21 = i11 | 0;
 HEAP32[i21 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i11);
 __ZN7WebCore14SubstituteDataC2EN3WTF10PassRefPtrINS_12SharedBufferEEERKNS1_6StringES7_RKNS_3URLESA_b(i1, i7, i8, i9, i10, i11, 0);
 i11 = HEAP32[i21 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i21 = i11 | 0;
   i10 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i21 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i11 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i6 = i11 | 0;
   i10 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i6 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i11 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i9 = i11 | 0;
   i10 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i9 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i11 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i8 = i11 | 0;
   i10 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i8 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i11 = HEAP32[i20 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i20 = i11 | 0;
   i10 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) == 0) {
    __ZN7WebCore12SharedBufferD1Ev(i11);
    __ZN3WTF8fastFreeEPv(i11);
    break;
   } else {
    HEAP32[i20 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i11 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i5 = i11 | 0;
   i10 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF8fastFreeEPv(i11);
    break;
   } else {
    HEAP32[i5 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i11 = HEAP32[i14 >> 2] | 0;
 if ((i11 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i14 = i11 | 0;
 i10 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
 if ((i10 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i11);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i14 >> 2] = i10;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore11FrameLoader23willLoadMediaElementURLERNS_3URLE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 408 | 0;
 i4 = i3 | 0;
 i5 = i3 + 184 | 0;
 i6 = i3 + 192 | 0;
 i7 = i3 + 216 | 0;
 i8 = i3 + 384 | 0;
 i9 = i3 + 392 | 0;
 i10 = i3 + 400 | 0;
 i11 = i4 | 0;
 __ZN7WebCore19ResourceRequestBaseC2ERKNS_3URLENS_26ResourceRequestCachePolicyE(i11, i2, 0);
 _memset(i4 + 160 | 0, 0, 19) | 0;
 HEAP32[i4 + 180 >> 2] = 15;
 i12 = i6 + 16 | 0;
 _memset(i6 | 0, 0, 16) | 0;
 HEAP8[i12] = 1;
 HEAP8[i6 + 17 | 0] = 0;
 HEAP8[i6 + 18 | 0] = 0;
 __ZN7WebCore11FrameLoader19requestFromDelegateERNS_15ResourceRequestERmRNS_13ResourceErrorE(i1, i4, i5, i6);
 i13 = HEAP32[i1 + 48 >> 2] | 0;
 i14 = HEAP32[i5 >> 2] | 0;
 i5 = i8 | 0;
 HEAP32[i5 >> 2] = 0;
 i15 = i9 | 0;
 HEAP32[i15 >> 2] = 0;
 i16 = i10 | 0;
 HEAP32[i16 >> 2] = 0;
 i17 = i7 | 0;
 __ZN7WebCore20ResourceResponseBaseC2ERKNS_3URLERKN3WTF6StringExS7_S7_(i17, i2, i8, -1, -1, i9, i10);
 HEAP8[i7 + 160 | 0] = 0;
 __ZN7WebCore20ResourceLoadNotifier29sendRemainingDelegateMessagesEPNS_14DocumentLoaderEmRKNS_15ResourceRequestERKNS_16ResourceResponseEPKciiRKNS_13ResourceErrorE(i1 + 16 | 0, i13, i14, i4, i7, 0, -1, -1, i6);
 __ZN7WebCore20ResourceResponseBaseD2Ev(i17);
 i17 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i16 = i17 | 0;
   i7 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    break;
   } else {
    HEAP32[i16 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i17 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i15 = i17 | 0;
   i7 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    break;
   } else {
    HEAP32[i15 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i17 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i5 = i17 | 0;
   i7 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    break;
   } else {
    HEAP32[i5 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i17 = __ZNK7WebCore19ResourceRequestBase3urlEv(i11) | 0;
 i11 = HEAP32[i17 >> 2] | 0;
 if ((i11 | 0) != 0) {
  i7 = i11 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = i2 | 0;
 i5 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i11;
 do {
  if ((i5 | 0) != 0) {
   i11 = i5 | 0;
   i7 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i11 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i5 = i17 + 4 | 0;
 i7 = i2 + 4 | 0;
 i11 = HEAP8[i7] & -2 | HEAP8[i5] & 1;
 HEAP8[i7] = i11;
 HEAP8[i7] = i11 & -3 | HEAP8[i5] & 2;
 HEAP32[i2 + 8 >> 2] = HEAP32[i17 + 8 >> 2];
 HEAP32[i2 + 12 >> 2] = HEAP32[i17 + 12 >> 2];
 HEAP32[i2 + 16 >> 2] = HEAP32[i17 + 16 >> 2];
 HEAP32[i2 + 20 >> 2] = HEAP32[i17 + 20 >> 2];
 HEAP32[i2 + 24 >> 2] = HEAP32[i17 + 24 >> 2];
 HEAP32[i2 + 28 >> 2] = HEAP32[i17 + 28 >> 2];
 HEAP32[i2 + 32 >> 2] = HEAP32[i17 + 32 >> 2];
 HEAP32[i2 + 36 >> 2] = HEAP32[i17 + 36 >> 2];
 HEAP32[i2 + 40 >> 2] = HEAP32[i17 + 40 >> 2];
 HEAP32[i2 + 44 >> 2] = HEAP32[i17 + 44 >> 2];
 i17 = (HEAP8[i12] & 1) != 0;
 i12 = HEAP32[i6 + 12 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i2 = i12 | 0;
   i5 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i2 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i12 = HEAP32[i6 + 8 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i5 = i12 | 0;
   i2 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i5 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i12 = HEAP32[i6 >> 2] | 0;
 if ((i12 | 0) == 0) {
  __ZN7WebCore15ResourceRequestD2Ev(i4);
  STACKTOP = i3;
  return i17 | 0;
 }
 i6 = i12 | 0;
 i2 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i12);
  __ZN7WebCore15ResourceRequestD2Ev(i4);
  STACKTOP = i3;
  return i17 | 0;
 } else {
  HEAP32[i6 >> 2] = i2;
  __ZN7WebCore15ResourceRequestD2Ev(i4);
  STACKTOP = i3;
  return i17 | 0;
 }
 return 0;
}
function __ZN7WebCore11FrameLoader17receivedFirstDataEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 __ZN7WebCore11FrameLoader21dispatchDidCommitLoadEv(i1);
 __ZN7WebCore11FrameLoader40dispatchDidClearWindowObjectsInAllWorldsEv(i1);
 __ZN7WebCore11FrameLoader40dispatchGlobalObjectAvailableInAllWorldsEv(i1);
 i8 = i1 + 48 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i10 = i3 | 0;
 i11 = HEAP32[i9 + 980 >> 2] | 0;
 HEAP32[i10 >> 2] = i11;
 do {
  if ((i11 | 0) == 0) {
   HEAP32[i3 + 4 >> 2] = HEAP32[i9 + 984 >> 2];
  } else {
   i12 = i11 | 0;
   HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
   i12 = (HEAP32[i10 >> 2] | 0) == 0;
   HEAP32[i3 + 4 >> 2] = HEAP32[i9 + 984 >> 2];
   if (i12) {
    break;
   }
   i12 = HEAP32[i1 + 4 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i12 >> 2] | 0) + 132 >> 2] & 63](i12, i3);
   i12 = HEAP32[i10 >> 2] | 0;
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
 i10 = HEAP32[i8 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i8 = i1 | 0;
 if ((HEAP8[(HEAP32[(HEAP32[i8 >> 2] | 0) + 456 >> 2] | 0) + 1579 | 0] & 1) != 0) {
  STACKTOP = i2;
  return;
 }
 i1 = i5 | 0;
 HEAP32[i1 >> 2] = 0;
 __ZNK7WebCore20ResourceResponseBase15httpHeaderFieldEPKc(i6, i10 + 784 | 0, H_BASE + 456 | 0);
 i10 = __ZN7WebCore16parseHTTPRefreshERKN3WTF6StringEbRdRS1_(i6, 0, i4, i5) | 0;
 i3 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i6 = i3 | 0;
   i9 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i6 >> 2] = i9;
    break;
   }
  }
 } while (0);
 if (i10) {
  i10 = HEAP32[i1 >> 2] | 0;
  do {
   if ((i10 | 0) == 0) {
    i15 = HEAP32[(HEAP32[i8 >> 2] | 0) + 456 >> 2] | 0;
    i16 = 19;
   } else {
    i3 = HEAP32[(HEAP32[i8 >> 2] | 0) + 456 >> 2] | 0;
    if ((HEAP32[i10 + 4 >> 2] | 0) == 0) {
     i15 = i3;
     i16 = 19;
     break;
    }
    __ZNK7WebCore8Document11completeURLERKN3WTF6StringE(i7, i3, i5);
    i3 = i7 | 0;
    i9 = HEAP32[i3 >> 2] | 0;
    if ((i9 | 0) != 0) {
     i6 = i9 | 0;
     HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
    }
    i6 = HEAP32[i1 >> 2] | 0;
    HEAP32[i1 >> 2] = i9;
    do {
     if ((i6 | 0) != 0) {
      i9 = i6 | 0;
      i11 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
      if ((i11 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i6);
       break;
      } else {
       HEAP32[i9 >> 2] = i11;
       break;
      }
     }
    } while (0);
    i6 = HEAP32[i3 >> 2] | 0;
    if ((i6 | 0) == 0) {
     break;
    }
    i11 = i6 | 0;
    i9 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
    if ((i9 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i6);
     break;
    } else {
     HEAP32[i11 >> 2] = i9;
     break;
    }
   }
  } while (0);
  do {
   if ((i16 | 0) == 19) {
    i7 = HEAP32[i15 + 356 >> 2] | 0;
    if ((i7 | 0) == 0) {
     i17 = i10;
    } else {
     i9 = i7 | 0;
     HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
     i17 = HEAP32[i1 >> 2] | 0;
    }
    HEAP32[i1 >> 2] = i7;
    if ((i17 | 0) == 0) {
     break;
    }
    i7 = i17 | 0;
    i9 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
    if ((i9 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i17);
     break;
    } else {
     HEAP32[i7 >> 2] = i9;
     break;
    }
   }
  } while (0);
  __ZN7WebCore19NavigationScheduler16scheduleRedirectEdRKN3WTF6StringE((HEAP32[i8 >> 2] | 0) + 376 | 0, +HEAPF64[i4 >> 3], i5);
 }
 i5 = HEAP32[i1 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i1 = i5 | 0;
 i4 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i1 >> 2] = i4;
  STACKTOP = i2;
  return;
 }
}
function __ZN3WTF13tryMakeStringIPKcNS_6StringEEENS_10PassRefPtrINS_10StringImplEEET_T0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = _strlen(i2 | 0) | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 i9 = (i3 | 0) == 0;
 if (i9) {
  i10 = 0;
 } else {
  i10 = HEAP32[i3 + 4 >> 2] | 0;
 }
 i11 = _llvm_uadd_with_overflow_i32(i7 | 0, i10 | 0) | 0;
 i10 = i11;
 if (tempRet0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 do {
  if (i9) {
   if ((i10 | 0) == 0) {
    i12 = 9;
   } else {
    i12 = 11;
   }
  } else {
   i11 = (i10 | 0) == 0;
   if ((HEAP32[i3 + 16 >> 2] & 32 | 0) != 0) {
    if (i11) {
     i12 = 9;
     break;
    } else {
     i12 = 11;
     break;
    }
   }
   do {
    if (i11) {
     i13 = __ZN3WTF10StringImpl5emptyEv() | 0;
     if ((i13 | 0) == 0) {
      i12 = 34;
      break;
     }
     i14 = i13 | 0;
     HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
     i15 = i13;
     i16 = 0;
    } else {
     if (i10 >>> 0 > 2147483637 >>> 0) {
      i12 = 34;
      break;
     }
     __ZN3WTF13tryFastMallocEj(i5, (i10 << 1) + 20 | 0);
     i13 = i5 | 0;
     i14 = HEAP32[i13 >> 2] | 0;
     HEAP32[i13 >> 2] = 0;
     if ((i14 | 0) == 0) {
      i12 = 34;
      break;
     }
     i13 = i14 + 20 | 0;
     HEAP32[i14 >> 2] = 2;
     HEAP32[i14 + 4 >> 2] = i10;
     HEAP32[i14 + 8 >> 2] = i13;
     HEAP32[i14 + 12 >> 2] = 0;
     HEAP32[i14 + 16 >> 2] = 0;
     i15 = i14;
     i16 = i13;
    }
   } while (0);
   if ((i12 | 0) == 34) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   if ((i7 | 0) != 0) {
    i11 = 0;
    while (1) {
     HEAP16[i16 + (i11 << 1) >> 1] = HEAPU8[i2 + i11 | 0] | 0;
     i11 = i11 + 1 | 0;
     if (i11 >>> 0 >= i7 >>> 0) {
      break;
     }
    }
   }
   i11 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i11 | 0) != 0) {
     i13 = HEAP32[i11 + 4 >> 2] | 0;
     if ((HEAP32[i11 + 16 >> 2] & 32 | 0) == 0) {
      i14 = HEAP32[i11 + 8 >> 2] | 0;
      if ((i13 | 0) == 0) {
       break;
      } else {
       i17 = 0;
      }
      while (1) {
       HEAP16[i16 + (i17 + i7 << 1) >> 1] = HEAP16[i14 + (i17 << 1) >> 1] | 0;
       i17 = i17 + 1 | 0;
       if (i17 >>> 0 >= i13 >>> 0) {
        break;
       }
      }
     } else {
      i14 = HEAP32[i11 + 8 >> 2] | 0;
      if ((i13 | 0) == 0) {
       break;
      } else {
       i18 = 0;
      }
      while (1) {
       HEAP16[i16 + (i18 + i7 << 1) >> 1] = HEAPU8[i14 + i18 | 0] | 0;
       i18 = i18 + 1 | 0;
       if (i18 >>> 0 >= i13 >>> 0) {
        break;
       }
      }
     }
    }
   } while (0);
   HEAP32[i1 >> 2] = i15;
   STACKTOP = i4;
   return;
  }
 } while (0);
 do {
  if ((i12 | 0) == 11) {
   if (i10 >>> 0 > 4294967275 >>> 0) {
    i12 = 18;
    break;
   }
   __ZN3WTF13tryFastMallocEj(i6, i10 + 20 | 0);
   i15 = i6 | 0;
   i18 = HEAP32[i15 >> 2] | 0;
   HEAP32[i15 >> 2] = 0;
   if ((i18 | 0) == 0) {
    i12 = 18;
    break;
   }
   i15 = i18 + 20 | 0;
   HEAP32[i18 >> 2] = 2;
   HEAP32[i18 + 4 >> 2] = i10;
   HEAP32[i18 + 8 >> 2] = i15;
   HEAP32[i18 + 12 >> 2] = 0;
   HEAP32[i18 + 16 >> 2] = 32;
   i19 = i18;
   i20 = i15;
  } else if ((i12 | 0) == 9) {
   i15 = __ZN3WTF10StringImpl5emptyEv() | 0;
   if ((i15 | 0) == 0) {
    i12 = 18;
    break;
   }
   i18 = i15 | 0;
   HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 2;
   i19 = i15;
   i20 = 0;
  }
 } while (0);
 if ((i12 | 0) == 18) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 _memcpy(i20 | 0, i2 | 0, i7) | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i8 = HEAP32[i2 + 4 >> 2] | 0;
   i12 = HEAP32[i2 + 8 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   } else {
    i21 = 0;
   }
   while (1) {
    HEAP8[i20 + (i21 + i7) | 0] = HEAP8[i12 + i21 | 0] | 0;
    i21 = i21 + 1 | 0;
    if (i21 >>> 0 >= i8 >>> 0) {
     break;
    }
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = i19;
 STACKTOP = i4;
 return;
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
function __ZN7WebCore11FrameLoader11urlSelectedERKNS_16FrameLoadRequestEN3WTF10PassRefPtrINS_5EventEEEbbNS_18ShouldSendReferrerENS_36ShouldReplaceDocumentIfJavaScriptURLE(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 336 | 0;
 i9 = i8 | 0;
 i10 = i8 + 312 | 0;
 i11 = i8 + 320 | 0;
 i12 = i8 + 328 | 0;
 i13 = i1 | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 i15 = i14 + 4 | 0;
 HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
 __ZN7WebCore16FrameLoadRequestC1ERKS0_(i9, i2);
 i2 = HEAP32[(HEAP32[i13 >> 2] | 0) + 460 >> 2] | 0;
 i15 = i9 + 8 | 0;
 i16 = i9 + 192 | 0;
 if (!(__ZN7WebCore16ScriptController22executeIfJavaScriptURLERKNS_3URLENS_36ShouldReplaceDocumentIfJavaScriptURLE(i2, __ZNK7WebCore19ResourceRequestBase3urlEv(i15 | 0) | 0, i7) | 0)) {
  i7 = HEAP32[i16 >> 2] | 0;
  if ((i7 | 0) == 0) {
   i17 = 4;
  } else {
   if ((HEAP32[i7 + 4 >> 2] | 0) == 0) {
    i17 = 4;
   }
  }
  do {
   if ((i17 | 0) == 4) {
    i2 = HEAP32[(HEAP32[(HEAP32[i13 >> 2] | 0) + 456 >> 2] | 0) + 648 >> 2] | 0;
    if ((i2 | 0) == 0) {
     i18 = i7;
    } else {
     i19 = i2 | 0;
     HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 2;
     i18 = HEAP32[i16 >> 2] | 0;
    }
    HEAP32[i16 >> 2] = i2;
    if ((i18 | 0) == 0) {
     break;
    }
    i2 = i18 | 0;
    i19 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
    if ((i19 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i18);
     break;
    } else {
     HEAP32[i2 >> 2] = i19;
     break;
    }
   }
  } while (0);
  if ((i6 | 0) == 1) {
   HEAP8[i1 + 222 | 0] = 1;
  }
  __ZNK7WebCore14SecurityOrigin8toStringEv(i10, HEAP32[(HEAP32[(HEAP32[i13 >> 2] | 0) + 456 >> 2] | 0) + 100 >> 2] | 0);
  __ZN7WebCore11FrameLoader21addHTTPOriginIfNeededERNS_15ResourceRequestERKN3WTF6StringE(i15, i10);
  i13 = HEAP32[i10 >> 2] | 0;
  do {
   if ((i13 | 0) != 0) {
    i10 = i13 | 0;
    i18 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
    if ((i18 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i13);
     break;
    } else {
     HEAP32[i10 >> 2] = i18;
     break;
    }
   }
  } while (0);
  i13 = i11 | 0;
  i18 = i3 | 0;
  i3 = HEAP32[i18 >> 2] | 0;
  HEAP32[i18 >> 2] = 0;
  HEAP32[i13 >> 2] = i3;
  i3 = i12 | 0;
  HEAP32[i3 >> 2] = 0;
  __ZN7WebCore11FrameLoader16loadFrameRequestERKNS_16FrameLoadRequestEbbN3WTF10PassRefPtrINS_5EventEEENS5_INS_9FormStateEEENS_18ShouldSendReferrerE(i1, i9, i4, i5, i11, i12, i6);
  i6 = HEAP32[i3 >> 2] | 0;
  if ((i6 | 0) != 0) {
   __ZN3WTF10RefCountedIN7WebCore9FormStateEE5derefEv(i6 | 0);
  }
  i6 = HEAP32[i13 >> 2] | 0;
  do {
   if ((i6 | 0) != 0) {
    i13 = i6 + 8 | 0;
    i3 = i13 | 0;
    i12 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
    if ((i12 | 0) != 0) {
     HEAP32[i3 >> 2] = i12;
     break;
    }
    i12 = i13 - 8 | 0;
    if ((i12 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 127](i12);
   }
  } while (0);
  HEAP8[i1 + 222 | 0] = 0;
 }
 __ZN7WebCore14SubstituteDataD2Ev(i9 + 200 | 0);
 i1 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i16 = i1 | 0;
   i6 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i16 >> 2] = i6;
    break;
   }
  }
 } while (0);
 __ZN7WebCore15ResourceRequestD2Ev(i15);
 i15 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i9 = i15 | 0;
   if (((tempValue = HEAP32[i9 >> 2] | 0, HEAP32[i9 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN7WebCore14SecurityOriginD2Ev(i15);
   __ZN3WTF8fastFreeEPv(i15);
  }
 } while (0);
 i15 = i14 + 4 | 0;
 i14 = i15 | 0;
 i9 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
 if ((i9 | 0) != 0) {
  HEAP32[i14 >> 2] = i9;
  STACKTOP = i8;
  return;
 }
 i9 = i15 - 4 | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i8;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 127](i9);
 STACKTOP = i8;
 return;
}
function __ZN7WebCore19ResourceRequestBaseaSERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
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
 i5 = i2 + 4 | 0;
 i4 = i1 + 4 | 0;
 i3 = HEAP8[i4] & -2 | HEAP8[i5] & 1;
 HEAP8[i4] = i3;
 HEAP8[i4] = i3 & -3 | HEAP8[i5] & 2;
 HEAP32[i1 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAP32[i1 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
 HEAP32[i1 + 16 >> 2] = HEAP32[i2 + 16 >> 2];
 HEAP32[i1 + 20 >> 2] = HEAP32[i2 + 20 >> 2];
 HEAP32[i1 + 24 >> 2] = HEAP32[i2 + 24 >> 2];
 HEAP32[i1 + 28 >> 2] = HEAP32[i2 + 28 >> 2];
 HEAP32[i1 + 32 >> 2] = HEAP32[i2 + 32 >> 2];
 HEAP32[i1 + 36 >> 2] = HEAP32[i2 + 36 >> 2];
 HEAP32[i1 + 40 >> 2] = HEAP32[i2 + 40 >> 2];
 HEAP32[i1 + 44 >> 2] = HEAP32[i2 + 44 >> 2];
 HEAP32[i1 + 48 >> 2] = HEAP32[i2 + 48 >> 2];
 HEAPF64[i1 + 56 >> 3] = +HEAPF64[i2 + 56 >> 3];
 i5 = HEAP32[i2 + 64 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i3 = i5 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 i3 = i1 + 64 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i5;
 do {
  if ((i4 | 0) != 0) {
   i5 = i4 | 0;
   i3 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i5 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i4 = i2 + 68 | 0;
 i3 = i1 + 68 | 0;
 i5 = HEAP8[i3] & -2 | HEAP8[i4] & 1;
 HEAP8[i3] = i5;
 HEAP8[i3] = i5 & -3 | HEAP8[i4] & 2;
 HEAP32[i1 + 72 >> 2] = HEAP32[i2 + 72 >> 2];
 HEAP32[i1 + 76 >> 2] = HEAP32[i2 + 76 >> 2];
 HEAP32[i1 + 80 >> 2] = HEAP32[i2 + 80 >> 2];
 HEAP32[i1 + 84 >> 2] = HEAP32[i2 + 84 >> 2];
 HEAP32[i1 + 88 >> 2] = HEAP32[i2 + 88 >> 2];
 HEAP32[i1 + 92 >> 2] = HEAP32[i2 + 92 >> 2];
 HEAP32[i1 + 96 >> 2] = HEAP32[i2 + 96 >> 2];
 HEAP32[i1 + 100 >> 2] = HEAP32[i2 + 100 >> 2];
 HEAP32[i1 + 104 >> 2] = HEAP32[i2 + 104 >> 2];
 HEAP32[i1 + 108 >> 2] = HEAP32[i2 + 108 >> 2];
 i4 = HEAP32[i2 + 112 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i5 = i4 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
 }
 i5 = i1 + 112 | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i4;
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
 __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_EaSERKSE_(i1 + 116 | 0, i2 + 116 | 0) | 0;
 __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEEaSERKS3_(i1 + 136 | 0, i2 + 136 | 0) | 0;
 i3 = HEAP32[i2 + 148 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i5 = i3 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 i5 = i1 + 148 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i3;
 do {
  if ((i4 | 0) != 0) {
   i3 = i4 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) == 0) {
    __ZN7WebCore8FormDataD1Ev(i4);
    __ZN3WTF8fastFreeEPv(i4);
    break;
   } else {
    HEAP32[i3 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i4 = i2 + 152 | 0;
 i5 = i1 + 152 | 0;
 i3 = HEAP8[i5] & -2 | HEAP8[i4] & 1;
 HEAP8[i5] = i3;
 i6 = i3 & -3 | HEAP8[i4] & 2;
 HEAP8[i5] = i6;
 i3 = i6 & -5 | HEAP8[i4] & 4;
 HEAP8[i5] = i3;
 i6 = i3 & -9 | HEAP8[i4] & 8;
 HEAP8[i5] = i6;
 i3 = i6 & -17 | HEAP8[i4] & 16;
 HEAP8[i5] = i3;
 i6 = i3 & -33 | HEAP8[i4] & 32;
 HEAP8[i5] = i6;
 i3 = i6 & -65 | HEAP8[i4] & 64;
 HEAP8[i5] = i3;
 HEAP8[i5] = i3 & 127 | HEAP8[i4] & -128;
 HEAP32[i1 + 156 >> 2] = HEAP32[i2 + 156 >> 2];
 return i1 | 0;
}
function __ZN7WebCore11FrameLoader17checkLoadCompleteEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i3 = i2 | 0;
 HEAP8[i1 + 193 | 0] = 0;
 i4 = HEAP32[i1 >> 2] | 0;
 if ((HEAP32[i4 + 32 >> 2] | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i1 = i3 + 12 | 0;
 i5 = i3 | 0;
 HEAP32[i5 >> 2] = i1;
 i6 = i3 + 4 | 0;
 HEAP32[i6 >> 2] = 16;
 i7 = i3 + 8 | 0;
 HEAP32[i7 >> 2] = 0;
 i3 = HEAP32[i4 + 28 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3;
   i8 = 0;
   i9 = 16;
   L6 : while (1) {
    if ((i8 | 0) == (i9 | 0)) {
     i10 = i9 + 1 | 0;
     i11 = i10 + (i9 >>> 2) | 0;
     i12 = i11 >>> 0 > 16 >>> 0 ? i11 : 16;
     i11 = i12 >>> 0 > i10 >>> 0 ? i12 : i10;
     do {
      if (i9 >>> 0 < i11 >>> 0) {
       i10 = HEAP32[i5 >> 2] | 0;
       if (i11 >>> 0 > 16 >>> 0) {
        if (i11 >>> 0 > 1073741823 >>> 0) {
         i13 = 10;
         break L6;
        }
        i12 = __ZN3WTF18fastMallocGoodSizeEj(i11 << 2) | 0;
        HEAP32[i6 >> 2] = i12 >>> 2;
        i14 = __ZN3WTF10fastMallocEj(i12) | 0;
        HEAP32[i5 >> 2] = i14;
        i15 = i14;
       } else {
        HEAP32[i5 >> 2] = i1;
        HEAP32[i6 >> 2] = 16;
        i15 = i1;
       }
       i14 = i10;
       _memcpy(i15 | 0, i14 | 0, i9 << 2) | 0;
       if ((i1 | 0) == (i10 | 0) | (i10 | 0) == 0) {
        break;
       }
       if ((HEAP32[i5 >> 2] | 0) == (i10 | 0)) {
        HEAP32[i5 >> 2] = 0;
        HEAP32[i6 >> 2] = 0;
       }
       __ZN3WTF8fastFreeEPv(i14);
      }
     } while (0);
     HEAP32[(HEAP32[i5 >> 2] | 0) + (HEAP32[i7 >> 2] << 2) >> 2] = i4;
     i11 = i4 + 4 | 0;
     HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
     i16 = HEAP32[i7 >> 2] | 0;
    } else {
     HEAP32[(HEAP32[i5 >> 2] | 0) + (i8 << 2) >> 2] = i4;
     i11 = i4 + 4 | 0;
     HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
     i16 = HEAP32[i7 >> 2] | 0;
    }
    HEAP32[i7 >> 2] = i16 + 1;
    i11 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i4 + 40 | 0, 0) | 0;
    i17 = HEAP32[i7 >> 2] | 0;
    if ((i11 | 0) == 0) {
     break;
    }
    i4 = i11;
    i8 = i17;
    i9 = HEAP32[i6 >> 2] | 0;
   }
   if ((i13 | 0) == 10) {
    _WTFCrash();
   }
   L28 : do {
    if ((i17 | 0) == 0) {
     i18 = 0;
    } else {
     i9 = i17;
     i8 = i17;
     while (1) {
      i4 = i9 - 1 | 0;
      if (i8 >>> 0 <= i4 >>> 0) {
       break;
      }
      __ZN7WebCore11FrameLoader29checkLoadCompleteForThisFrameEv((HEAP32[(HEAP32[i5 >> 2] | 0) + (i4 << 2) >> 2] | 0) + 80 | 0);
      i11 = HEAP32[i7 >> 2] | 0;
      if ((i4 | 0) == 0) {
       i18 = i11;
       break L28;
      } else {
       i9 = i4;
       i8 = i11;
      }
     }
     __ZN3WTF15CrashOnOverflow10overflowedEv();
    }
   } while (0);
   if ((i18 | 0) == 0) {
    break;
   }
   i8 = HEAP32[i5 >> 2] | 0;
   i9 = i8 + (i18 << 2) | 0;
   i11 = i8;
   while (1) {
    i8 = (HEAP32[i11 >> 2] | 0) + 4 | 0;
    i4 = i8 | 0;
    i14 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
    do {
     if ((i14 | 0) == 0) {
      i10 = i8 - 4 | 0;
      if ((i10 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 127](i10);
     } else {
      HEAP32[i4 >> 2] = i14;
     }
    } while (0);
    i11 = i11 + 4 | 0;
    if ((i11 | 0) == (i9 | 0)) {
     break;
    }
   }
   HEAP32[i7 >> 2] = 0;
  }
 } while (0);
 i7 = HEAP32[i5 >> 2] | 0;
 if ((i1 | 0) == (i7 | 0) | (i7 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 HEAP32[i5 >> 2] = 0;
 HEAP32[i6 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i7);
 STACKTOP = i2;
 return;
}
function __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E3addINS_22IdentityHashTranslatorIS7_EERKS1_RKS4_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S4_S6_S7_SD_SA_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E6expandEPS4_(i2, 0) | 0;
  i7 = HEAP32[i5 >> 2] | 0;
 } else {
  i7 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = i3 | 0;
 i3 = __ZN3WTF15CaseFoldingHash4hashERNS_10StringImplE(HEAP32[i8 >> 2] | 0) | 0;
 i9 = (i3 >>> 23) + ~i3 | 0;
 i10 = i9 << 12 ^ i9;
 i9 = i10 >>> 7 ^ i10;
 i10 = i9 << 2 ^ i9;
 i9 = i10 >>> 20 ^ i10 | 1;
 i10 = 0;
 i11 = i3;
 i3 = 0;
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
   i15 = HEAP32[i8 >> 2] | 0;
   if ((i14 | 0) == (i15 | 0)) {
    i17 = 7;
    break;
   }
   if (__ZN3WTF24equalIgnoringCaseNonNullEPKNS_10StringImplES2_(i14, i15) | 0) {
    i17 = 7;
    break;
   } else {
    i16 = i10;
   }
  }
  i15 = (i3 | 0) == 0 ? i9 : i3;
  i10 = i16;
  i11 = i15 + i12 | 0;
  i3 = i15;
 }
 if ((i17 | 0) == 7) {
  i17 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 3) | 0;
  i3 = i1;
  HEAP32[i3 >> 2] = i13;
  HEAP32[i3 + 4 >> 2] = i17;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i10 | 0) == 0) {
  i18 = i13;
 } else {
  i13 = i10;
  HEAP32[i13 >> 2] = 0;
  HEAP32[i13 + 4 >> 2] = 0;
  i13 = i2 + 16 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) - 1;
  i18 = i10;
 }
 i10 = HEAP32[i4 >> 2] | 0;
 if ((i10 | 0) != 0) {
  i13 = i10 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
 }
 i13 = i18 | 0;
 i17 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = i10;
 do {
  if ((i17 | 0) != 0) {
   i10 = i17 | 0;
   i13 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    break;
   } else {
    HEAP32[i10 >> 2] = i13;
    break;
   }
  }
 } while (0);
 i17 = HEAP32[i4 + 4 >> 2] | 0;
 if ((i17 | 0) != 0) {
  i4 = i17 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i18 + 4 | 0;
 i13 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i17;
 do {
  if ((i13 | 0) != 0) {
   i17 = i13 | 0;
   i4 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i17 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i13 = i2 + 12 | 0;
 i4 = (HEAP32[i13 >> 2] | 0) + 1 | 0;
 HEAP32[i13 >> 2] = i4;
 i13 = i2 + 4 | 0;
 i17 = HEAP32[i13 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i4 << 1 | 0) < (i17 | 0)) {
  i19 = i18;
  i20 = i17;
 } else {
  i17 = __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E6expandEPS4_(i2, i18) | 0;
  i19 = i17;
  i20 = HEAP32[i13 >> 2] | 0;
 }
 i13 = (HEAP32[i5 >> 2] | 0) + (i20 << 3) | 0;
 i20 = i1;
 HEAP32[i20 >> 2] = i19;
 HEAP32[i20 + 4 >> 2] = i13;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore11FrameLoader5clearEPNS_8DocumentEbbb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6 | 0;
 i8 = i1 | 0;
 __ZN7WebCore6Editor5clearEv(HEAP32[(HEAP32[i8 >> 2] | 0) + 464 >> 2] | 0);
 i9 = i1 + 84 | 0;
 if ((HEAP8[i9] & 1) == 0) {
  STACKTOP = i6;
  return;
 }
 HEAP8[i9] = 0;
 i9 = HEAP32[(HEAP32[i8 >> 2] | 0) + 456 >> 2] | 0;
 do {
  if ((HEAP8[i9 + 1433 | 0] & 1) == 0) {
   __ZN7WebCore8Document13cancelParsingEv(i9);
   i10 = HEAP32[(HEAP32[i8 >> 2] | 0) + 456 >> 2] | 0;
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 264 >> 2] & 127](i10);
   i10 = HEAP32[(HEAP32[i8 >> 2] | 0) + 456 >> 2] | 0;
   if ((HEAP32[i10 + 1584 >> 2] | 0) == 0) {
    break;
   }
   if ((HEAP8[i10 + 2285 | 0] & 1) != 0) {
    break;
   }
   __ZN7WebCore8Document21prepareForDestructionEv(i10);
   i10 = HEAP32[(HEAP32[i8 >> 2] | 0) + 456 >> 2] | 0;
   __ZN7WebCore8Document26removeFocusedNodeOfSubtreeEPNS_4NodeEb(i10, i10 | 0, 0);
  }
 } while (0);
 if (i3) {
  i3 = HEAP32[i8 >> 2] | 0;
  i9 = HEAP32[(HEAP32[i3 + 456 >> 2] | 0) + 336 >> 2] | 0;
  do {
   if ((i3 | 0) != 0) {
    i10 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(HEAP32[i3 + 32 >> 2] | 0) | 0;
    if ((i10 | 0) == 0) {
     break;
    }
    __ZN7WebCore24InspectorInstrumentation24frameWindowDiscardedImplEPNS_19InstrumentingAgentsEPNS_9DOMWindowE(i10, i9);
   }
  } while (0);
  __ZN7WebCore9DOMWindow32resetUnlessSuspendedForPageCacheEv(HEAP32[(HEAP32[(HEAP32[i8 >> 2] | 0) + 456 >> 2] | 0) + 336 >> 2] | 0);
  i9 = HEAP32[i8 >> 2] | 0;
  __ZN7WebCore16ScriptController16clearWindowShellEPNS_9DOMWindowEb(HEAP32[i9 + 460 >> 2] | 0, HEAP32[i2 + 336 >> 2] | 0, (HEAP8[(HEAP32[i9 + 456 >> 2] | 0) + 1433 | 0] & 1) != 0);
 }
 __ZN7WebCore14FrameSelection21prepareForDestructionEv(HEAP32[(HEAP32[i8 >> 2] | 0) + 468 >> 2] | 0);
 __ZN7WebCore12EventHandler5clearEv(HEAP32[(HEAP32[i8 >> 2] | 0) + 472 >> 2] | 0);
 do {
  if (i5) {
   i9 = HEAP32[(HEAP32[i8 >> 2] | 0) + 452 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN7WebCore9FrameView5clearEv(i9);
  }
 } while (0);
 i5 = HEAP32[i8 >> 2] | 0;
 i9 = i7 | 0;
 HEAP32[i9 >> 2] = 0;
 __ZN7WebCore5Frame11setDocumentEN3WTF10PassRefPtrINS_8DocumentEEE(i5, i7);
 i7 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i9 = i7 + 8 | 0;
   i5 = i9 | 0;
   i2 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i2;
   if ((i2 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore14SubframeLoader5clearEv(HEAP32[i1 + 20 >> 2] | 0);
 if (i4) {
  __ZN7WebCore16ScriptController18clearScriptObjectsEv(HEAP32[(HEAP32[i8 >> 2] | 0) + 460 >> 2] | 0);
 }
 __ZN7WebCore16ScriptController10enableEvalEv(HEAP32[(HEAP32[i8 >> 2] | 0) + 460 >> 2] | 0);
 __ZN7WebCore19NavigationScheduler5clearEv((HEAP32[i8 >> 2] | 0) + 376 | 0);
 __ZN7WebCore9TimerBase4stopEv(i1 + 136 | 0);
 HEAP8[i1 + 192 | 0] = 0;
 HEAP8[i1 + 193 | 0] = 0;
 i8 = i1 + 24 | 0;
 if (!(__ZNK7WebCore23FrameLoaderStateMachine32isDisplayingInitialEmptyDocumentEv(i8) | 0)) {
  STACKTOP = i6;
  return;
 }
 if (!(__ZNK7WebCore23FrameLoaderStateMachine30committedFirstRealDocumentLoadEv(i8) | 0)) {
  STACKTOP = i6;
  return;
 }
 __ZN7WebCore23FrameLoaderStateMachine9advanceToENS0_5StateE(i8, 3);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore14SubstituteDataaSERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = i3 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i3;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore12SharedBufferD1Ev(i5);
    __ZN3WTF8fastFreeEPv(i5);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i2 + 4 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i4 = i5 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i1 + 4 | 0;
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
 i3 = HEAP32[i2 + 8 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = i3 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i1 + 8 | 0;
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
 i5 = HEAP32[i2 + 12 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i4 = i5 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
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
 i3 = HEAP32[i2 + 60 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i5 = i3 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
 }
 i5 = i1 + 60 | 0;
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
 i4 = i2 + 64 | 0;
 i5 = i1 + 64 | 0;
 i3 = HEAP8[i5] & -2 | HEAP8[i4] & 1;
 HEAP8[i5] = i3;
 HEAP8[i5] = i3 & -3 | HEAP8[i4] & 2;
 HEAP32[i1 + 68 >> 2] = HEAP32[i2 + 68 >> 2];
 HEAP32[i1 + 72 >> 2] = HEAP32[i2 + 72 >> 2];
 HEAP32[i1 + 76 >> 2] = HEAP32[i2 + 76 >> 2];
 HEAP32[i1 + 80 >> 2] = HEAP32[i2 + 80 >> 2];
 HEAP32[i1 + 84 >> 2] = HEAP32[i2 + 84 >> 2];
 HEAP32[i1 + 88 >> 2] = HEAP32[i2 + 88 >> 2];
 HEAP32[i1 + 92 >> 2] = HEAP32[i2 + 92 >> 2];
 HEAP32[i1 + 96 >> 2] = HEAP32[i2 + 96 >> 2];
 HEAP32[i1 + 100 >> 2] = HEAP32[i2 + 100 >> 2];
 HEAP32[i1 + 104 >> 2] = HEAP32[i2 + 104 >> 2];
 HEAP8[i1 + 108 | 0] = HEAP8[i2 + 108 | 0] & 1;
 return i1 | 0;
}
function __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_EaSERKSE_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 _memset(i5 | 0, 0, 20) | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 i7 = HEAP32[i2 + 4 >> 2] | 0;
 i8 = i6 + (i7 << 3) | 0;
 L1 : do {
  if ((HEAP32[i2 + 12 >> 2] | 0) != 0) {
   L3 : do {
    if ((i7 | 0) == 0) {
     i9 = i6;
    } else {
     i10 = i6;
     while (1) {
      i11 = HEAP32[i10 >> 2] | 0;
      if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
       i9 = i10;
       break L3;
      }
      i10 = i10 + 8 | 0;
      if ((i10 | 0) == (i8 | 0)) {
       break L1;
      }
     }
    }
   } while (0);
   if ((i9 | 0) == (i8 | 0)) {
    break;
   } else {
    i12 = i9;
   }
   while (1) {
    __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E3addINS_22IdentityHashTranslatorIS7_EERKS1_RKS4_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S4_S6_S7_SD_SA_EEEEOT0_OT1_(i4, i5, i12 | 0, i12);
    i10 = i12 + 8 | 0;
    if ((i10 | 0) == (i8 | 0)) {
     break L1;
    } else {
     i13 = i10;
    }
    while (1) {
     i10 = HEAP32[i13 >> 2] | 0;
     if (!((i10 | 0) == (-1 | 0) | (i10 | 0) == 0)) {
      break;
     }
     i10 = i13 + 8 | 0;
     if ((i10 | 0) == (i8 | 0)) {
      break L1;
     } else {
      i13 = i10;
     }
    }
    if ((i13 | 0) == (i8 | 0)) {
     break;
    } else {
     i12 = i13;
    }
   }
  }
 } while (0);
 i13 = i1 | 0;
 i12 = HEAP32[i13 >> 2] | 0;
 i8 = i5 | 0;
 HEAP32[i13 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i8 >> 2] = i12;
 i8 = i1 + 4 | 0;
 i13 = HEAP32[i8 >> 2] | 0;
 i4 = i5 + 4 | 0;
 HEAP32[i8 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i4 >> 2] = i13;
 i4 = i1 + 8 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 i9 = i5 + 8 | 0;
 HEAP32[i4 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i9 >> 2] = i8;
 i8 = i1 + 12 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i4 = i5 + 12 | 0;
 HEAP32[i8 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i4 >> 2] = i9;
 i9 = i1 + 16 | 0;
 i4 = HEAP32[i9 >> 2] | 0;
 i8 = i5 + 16 | 0;
 HEAP32[i9 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i8 >> 2] = i4;
 if ((i12 | 0) == 0) {
  STACKTOP = i3;
  return i1 | 0;
 }
 if ((i13 | 0) > 0) {
  i4 = 0;
  while (1) {
   i8 = i12 + (i4 << 3) | 0;
   do {
    if ((HEAP32[i8 >> 2] | 0) != -1) {
     i9 = HEAP32[i12 + (i4 << 3) + 4 >> 2] | 0;
     do {
      if ((i9 | 0) != 0) {
       i5 = i9 | 0;
       i6 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
       if ((i6 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i9);
        break;
       } else {
        HEAP32[i5 >> 2] = i6;
        break;
       }
      }
     } while (0);
     i9 = HEAP32[i8 >> 2] | 0;
     if ((i9 | 0) == 0) {
      break;
     }
     i6 = i9 | 0;
     i5 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
     if ((i5 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i9);
      break;
     } else {
      HEAP32[i6 >> 2] = i5;
      break;
     }
    }
   } while (0);
   i4 = i4 + 1 | 0;
   if ((i4 | 0) >= (i13 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i12);
 STACKTOP = i3;
 return i1 | 0;
}
function __ZN7WebCore11FrameLoader17reloadWithRequestERKNS_15ResourceRequestEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 320 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 120 | 0;
 i8 = i4 + 312 | 0;
 i9 = HEAP32[i1 + 4 >> 2] | 0;
 i10 = HEAP32[(HEAP32[i9 >> 2] | 0) + 372 >> 2] | 0;
 __ZN7WebCore11FrameLoader27defaultSubstituteDataForURLERKNS_3URLE(i6, i1, __ZNK7WebCore19ResourceRequestBase3urlEv(i2 | 0) | 0);
 FUNCTION_TABLE_viiii[i10 & 7](i5, i9, i2, i6);
 i2 = i5 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 __ZN7WebCore14SubstituteDataD2Ev(i6);
 i6 = __ZN7WebCore14DocumentLoader7requestEv(i5) | 0;
 i2 = i6 | 0;
 __ZN7WebCore19ResourceRequestBase14setCachePolicyENS_26ResourceRequestCachePolicyE(i2, 1);
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[(__ZNK7WebCore19ResourceRequestBase10httpMethodEv(i2) | 0) >> 2] | 0, H_BASE + 1160 | 0) | 0) {
  __ZN7WebCore16NavigationActionC1ERKNS_15ResourceRequestENS_14NavigationTypeE(i7, i6, 4);
  i6 = i7 | 0;
  __ZN7WebCore15ResourceRequestaSERKS0_(i5 + 992 | 0, i6) | 0;
  HEAP32[i5 + 1176 >> 2] = HEAP32[i7 + 184 >> 2];
  i2 = i7 + 188 | 0;
  i7 = HEAP32[i2 >> 2] | 0;
  if ((i7 | 0) != 0) {
   i9 = i7 + 8 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
  }
  i9 = i5 + 1180 | 0;
  i10 = HEAP32[i9 >> 2] | 0;
  HEAP32[i9 >> 2] = i7;
  do {
   if ((i10 | 0) != 0) {
    i7 = i10 + 8 | 0;
    i9 = i7 | 0;
    i11 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
    if ((i11 | 0) != 0) {
     HEAP32[i9 >> 2] = i11;
     break;
    }
    i11 = i7 - 8 | 0;
    if ((i11 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 127](i11);
   }
  } while (0);
  i10 = HEAP32[i2 >> 2] | 0;
  do {
   if ((i10 | 0) != 0) {
    i2 = i10 + 8 | 0;
    i11 = i2 | 0;
    i7 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
    if ((i7 | 0) != 0) {
     HEAP32[i11 >> 2] = i7;
     break;
    }
    i7 = i2 - 8 | 0;
    if ((i7 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 127](i7);
   }
  } while (0);
  __ZN7WebCore15ResourceRequestD2Ev(i6);
 }
 i6 = HEAP32[(HEAP32[i1 + 48 >> 2] | 0) + 988 >> 2] | 0;
 if ((i6 | 0) != 0) {
  i10 = i6 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
 }
 i10 = i5 + 988 | 0;
 i7 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = i6;
 do {
  if ((i7 | 0) != 0) {
   i6 = i7 | 0;
   i10 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i6 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i7 = i8 | 0;
 HEAP32[i7 >> 2] = 0;
 __ZN7WebCore11FrameLoader22loadWithDocumentLoaderEPNS_14DocumentLoaderENS_13FrameLoadTypeEN3WTF10PassRefPtrINS_9FormStateEEE(i1, i5, i3 ? 9 : 4, i8);
 i8 = HEAP32[i7 >> 2] | 0;
 if ((i8 | 0) != 0) {
  __ZN3WTF10RefCountedIN7WebCore9FormStateEE5derefEv(i8 | 0);
 }
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i8 = i5 + 4 | 0;
 i5 = i8 | 0;
 i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i7 | 0) != 0) {
  HEAP32[i5 >> 2] = i7;
  STACKTOP = i4;
  return;
 }
 i7 = i8 - 4 | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 127](i7);
 STACKTOP = i4;
 return;
}
function __ZN3WTF6VectorIN7WebCore15ResourceRequestELj0ENS_15CrashOnOverflowEE14appendSlowCaseIRKS2_EEvOT_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i4 + 1 | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if (i7 >>> 0 > i2 >>> 0) {
   i8 = 3;
  } else {
   if ((i7 + (i4 * 184 & -1) | 0) >>> 0 <= i2 >>> 0) {
    i8 = 3;
    break;
   }
   i9 = HEAP32[i1 + 4 >> 2] | 0;
   i10 = i9 + 1 + (i9 >>> 2) | 0;
   i9 = i10 >>> 0 > 16 >>> 0 ? i10 : 16;
   __ZN3WTF6VectorIN7WebCore15ResourceRequestELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i9 >>> 0 > i5 >>> 0 ? i9 : i5);
   i9 = HEAP32[i6 >> 2] | 0;
   i11 = i9 + (((i2 - i7 | 0) / 184 & -1) * 184 & -1) | 0;
   i12 = i9;
  }
 } while (0);
 if ((i8 | 0) == 3) {
  i8 = HEAP32[i1 + 4 >> 2] | 0;
  i7 = i8 + 1 + (i8 >>> 2) | 0;
  i8 = i7 >>> 0 > 16 >>> 0 ? i7 : 16;
  __ZN3WTF6VectorIN7WebCore15ResourceRequestELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i8 >>> 0 > i5 >>> 0 ? i8 : i5);
  i11 = i2;
  i12 = HEAP32[i6 >> 2] | 0;
 }
 i6 = HEAP32[i3 >> 2] | 0;
 __ZN7WebCore19ResourceRequestBaseC2ERKS0_(i12 + (i6 * 184 & -1) | 0, i11 | 0);
 i2 = HEAP32[i11 + 160 >> 2] | 0;
 HEAP32[i12 + (i6 * 184 & -1) + 160 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i5 = i2 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
 }
 i5 = HEAP32[i11 + 164 >> 2] | 0;
 HEAP32[i12 + (i6 * 184 & -1) + 164 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i2 = i5 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 i2 = HEAP32[i11 + 168 >> 2] | 0;
 HEAP32[i12 + (i6 * 184 & -1) + 168 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i5 = i2 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
 }
 i5 = HEAP32[i11 + 172 >> 2] | 0;
 HEAP32[i12 + (i6 * 184 & -1) + 172 >> 2] = i5;
 if ((i5 | 0) == 0) {
  i13 = i12 + (i6 * 184 & -1) + 176 | 0;
  i14 = i11 + 176 | 0;
  i15 = HEAP8[i14] | 0;
  i16 = i15 & 1;
  HEAP8[i13] = i16;
  i17 = i12 + (i6 * 184 & -1) + 177 | 0;
  i18 = i11 + 177 | 0;
  i19 = HEAP8[i18] | 0;
  i20 = i19 & 1;
  HEAP8[i17] = i20;
  i21 = i12 + (i6 * 184 & -1) + 178 | 0;
  i22 = i11 + 178 | 0;
  i23 = HEAP8[i22] | 0;
  i24 = i23 & 1;
  HEAP8[i21] = i24;
  i25 = i12 + (i6 * 184 & -1) + 180 | 0;
  i26 = i11 + 180 | 0;
  i27 = HEAP32[i26 >> 2] | 0;
  HEAP32[i25 >> 2] = i27;
  i28 = HEAP32[i3 >> 2] | 0;
  i29 = i28 + 1 | 0;
  HEAP32[i3 >> 2] = i29;
  return;
 }
 i2 = i5 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 i13 = i12 + (i6 * 184 & -1) + 176 | 0;
 i14 = i11 + 176 | 0;
 i15 = HEAP8[i14] | 0;
 i16 = i15 & 1;
 HEAP8[i13] = i16;
 i17 = i12 + (i6 * 184 & -1) + 177 | 0;
 i18 = i11 + 177 | 0;
 i19 = HEAP8[i18] | 0;
 i20 = i19 & 1;
 HEAP8[i17] = i20;
 i21 = i12 + (i6 * 184 & -1) + 178 | 0;
 i22 = i11 + 178 | 0;
 i23 = HEAP8[i22] | 0;
 i24 = i23 & 1;
 HEAP8[i21] = i24;
 i25 = i12 + (i6 * 184 & -1) + 180 | 0;
 i26 = i11 + 180 | 0;
 i27 = HEAP32[i26 >> 2] | 0;
 HEAP32[i25 >> 2] = i27;
 i28 = HEAP32[i3 >> 2] | 0;
 i29 = i28 + 1 | 0;
 HEAP32[i3 >> 2] = i29;
 return;
}
function __ZN3WTF9HashTableIPN7WebCore5FrameES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableIPN7WebCore5FrameES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i8, 0) | 0;
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
  i26 = __ZN3WTF9HashTableIPN7WebCore5FrameES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i29, i25) | 0;
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
function __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E6rehashEiPS1_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 i4 = i1 + 8 | 0;
 HEAP32[i4 >> 2] = i2 - 1;
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
  i12 = i2 | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i11;
  } else {
   i14 = HEAP32[i6 >> 2] | 0;
   i16 = HEAP32[i4 >> 2] | 0;
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
    i22 = i14 + (i21 << 2) | 0;
    i23 = HEAP32[i22 >> 2] | 0;
    i24 = i23;
    if ((i24 | 0) == (-1 | 0)) {
     i25 = i22;
    } else if ((i24 | 0) == 0) {
     i26 = 9;
     break;
    } else {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i23, HEAP32[i12 >> 2] | 0) | 0) {
      i27 = i22;
      break;
     } else {
      i25 = i20;
     }
    }
    i23 = (i19 | 0) == 0 ? i13 : i19;
    i17 = i23 + i21 | 0;
    i19 = i23;
    i20 = i25;
   }
   if ((i26 | 0) == 9) {
    i26 = 0;
    i27 = (i20 | 0) != 0 ? i20 : i22;
   }
   i19 = i27 | 0;
   i17 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i13 = i17 | 0;
     i14 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i17);
      break;
     } else {
      HEAP32[i13 >> 2] = i14;
      break;
     }
    }
   } while (0);
   i17 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   HEAP32[i19 >> 2] = i17;
   i15 = (i2 | 0) == (i3 | 0) ? i27 : i11;
  }
  i17 = i10 + 1 | 0;
  if ((i17 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i17;
   i11 = i15;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i28 = 0;
 } else {
  i8 = i15;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  i1 = HEAP32[i7 + (i28 << 2) >> 2] | 0;
  i11 = i1;
  do {
   if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
    i10 = i1 | 0;
    i27 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
    if ((i27 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i1);
     break;
    } else {
     HEAP32[i10 >> 2] = i27;
     break;
    }
   }
  } while (0);
  i1 = i28 + 1 | 0;
  if ((i1 | 0) < (i5 | 0)) {
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
function __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
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
  __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E6rehashEiPS1_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 i9 = HEAP32[i3 + 16 >> 2] | 0;
 if (i9 >>> 0 > 127 >>> 0) {
  i11 = i9 >>> 7;
 } else {
  i11 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i3) | 0;
 }
 i3 = (i11 >>> 23) + ~i11 | 0;
 i9 = i3 << 12 ^ i3;
 i3 = i9 >>> 7 ^ i9;
 i9 = i3 << 2 ^ i3;
 i3 = i9 >>> 20 ^ i9 | 1;
 i9 = 0;
 i7 = i11;
 i11 = 0;
 while (1) {
  i12 = i7 & i6;
  i13 = i10 + (i12 << 2) | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  i15 = i14;
  if ((i15 | 0) == (-1 | 0)) {
   i16 = i13;
  } else if ((i15 | 0) == 0) {
   break;
  } else {
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i14, HEAP32[i8 >> 2] | 0) | 0) {
    i17 = 11;
    break;
   } else {
    i16 = i9;
   }
  }
  i14 = (i11 | 0) == 0 ? i3 : i11;
  i9 = i16;
  i7 = i14 + i12 | 0;
  i11 = i14;
 }
 if ((i17 | 0) == 11) {
  i17 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 2) | 0;
  i11 = i1;
  HEAP32[i11 >> 2] = i13;
  HEAP32[i11 + 4 >> 2] = i17;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i9 | 0) == 0) {
  i18 = i13;
 } else {
  HEAP32[i9 >> 2] = 0;
  i13 = i2 + 16 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) - 1;
  i18 = i9;
 }
 i9 = HEAP32[i4 >> 2] | 0;
 if ((i9 | 0) != 0) {
  i4 = i9 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i18 | 0;
 i13 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i9;
 do {
  if ((i13 | 0) != 0) {
   i9 = i13 | 0;
   i4 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i9 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i13 = i2 + 12 | 0;
 i4 = (HEAP32[i13 >> 2] | 0) + 1 | 0;
 HEAP32[i13 >> 2] = i4;
 i13 = i2 + 4 | 0;
 i9 = HEAP32[i13 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i4 << 1 | 0) < (i9 | 0)) {
  i19 = i18;
  i20 = i9;
 } else {
  if ((i9 | 0) == 0) {
   i21 = 8;
  } else {
   i17 = i9 << 1;
   i21 = (i4 * 6 & -1 | 0) < (i17 | 0) ? i9 : i17;
  }
  i17 = __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E6rehashEiPS1_(i2, i21, i18) | 0;
  i19 = i17;
  i20 = HEAP32[i13 >> 2] | 0;
 }
 i13 = (HEAP32[i5 >> 2] | 0) + (i20 << 2) | 0;
 i20 = i1;
 HEAP32[i20 >> 2] = i19;
 HEAP32[i20 + 4 >> 2] = i13;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore11FrameLoader6reloadEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 232 | 0;
 i4 = i3 | 0;
 i5 = i3 + 184 | 0;
 i6 = i1 + 48 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i8 = HEAP32[(__ZNK7WebCore19ResourceRequestBase3urlEv(__ZN7WebCore14DocumentLoader7requestEv(i7) | 0) | 0) >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i8 + 4 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i8 = __ZN7WebCore14DocumentLoader7requestEv(HEAP32[i6 >> 2] | 0) | 0;
 i7 = i4 | 0;
 __ZN7WebCore19ResourceRequestBaseC2ERKS0_(i7, i8 | 0);
 i9 = HEAP32[i8 + 160 >> 2] | 0;
 HEAP32[i4 + 160 >> 2] = i9;
 if ((i9 | 0) != 0) {
  i10 = i9 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
 }
 i10 = HEAP32[i8 + 164 >> 2] | 0;
 HEAP32[i4 + 164 >> 2] = i10;
 if ((i10 | 0) != 0) {
  i9 = i10 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
 }
 i9 = HEAP32[i8 + 168 >> 2] | 0;
 HEAP32[i4 + 168 >> 2] = i9;
 if ((i9 | 0) != 0) {
  i10 = i9 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
 }
 i10 = HEAP32[i8 + 172 >> 2] | 0;
 HEAP32[i4 + 172 >> 2] = i10;
 if ((i10 | 0) != 0) {
  i9 = i10 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
 }
 HEAP8[i4 + 176 | 0] = HEAP8[i8 + 176 | 0] & 1;
 HEAP8[i4 + 177 | 0] = HEAP8[i8 + 177 | 0] & 1;
 HEAP8[i4 + 178 | 0] = HEAP8[i8 + 178 | 0] & 1;
 HEAP32[i4 + 180 >> 2] = HEAP32[i8 + 180 >> 2];
 i8 = __ZNK7WebCore14DocumentLoader14unreachableURLEv(HEAP32[i6 >> 2] | 0) | 0;
 i6 = i5 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 HEAP32[i6 >> 2] = i9;
 if ((i9 | 0) == 0) {
  i11 = 0;
 } else {
  i10 = i9 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
  i11 = HEAP32[i6 >> 2] | 0;
 }
 i10 = i8 + 4 | 0;
 i9 = i5 + 4 | 0;
 i12 = HEAP8[i9] & -2 | HEAP8[i10] & 1;
 HEAP8[i9] = i12;
 HEAP8[i9] = i12 & -3 | HEAP8[i10] & 2;
 HEAP32[i5 + 8 >> 2] = HEAP32[i8 + 8 >> 2];
 HEAP32[i5 + 12 >> 2] = HEAP32[i8 + 12 >> 2];
 HEAP32[i5 + 16 >> 2] = HEAP32[i8 + 16 >> 2];
 HEAP32[i5 + 20 >> 2] = HEAP32[i8 + 20 >> 2];
 HEAP32[i5 + 24 >> 2] = HEAP32[i8 + 24 >> 2];
 HEAP32[i5 + 28 >> 2] = HEAP32[i8 + 28 >> 2];
 HEAP32[i5 + 32 >> 2] = HEAP32[i8 + 32 >> 2];
 HEAP32[i5 + 36 >> 2] = HEAP32[i8 + 36 >> 2];
 HEAP32[i5 + 40 >> 2] = HEAP32[i8 + 40 >> 2];
 HEAP32[i5 + 44 >> 2] = HEAP32[i8 + 44 >> 2];
 do {
  if ((i11 | 0) != 0) {
   if ((HEAP32[i11 + 4 >> 2] | 0) == 0) {
    break;
   }
   __ZN7WebCore19ResourceRequestBase6setURLERKNS_3URLE(i7, i5);
  }
 } while (0);
 __ZN7WebCore11FrameLoader17reloadWithRequestERKNS_15ResourceRequestEb(i1, i4, i2);
 i2 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i6 = i2 | 0;
   i1 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i6 >> 2] = i1;
    break;
   }
  }
 } while (0);
 __ZN7WebCore15ResourceRequestD2Ev(i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11FrameLoader14checkCompletedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = i1 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i3 + 4 | 0;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 HEAP8[i1 + 192 | 0] = 0;
 i4 = HEAP32[(HEAP32[i2 >> 2] | 0) + 452 >> 2] | 0;
 if ((i4 | 0) != 0) {
  __ZN7WebCore9FrameView19handleLoadCompletedEv(i4);
 }
 i4 = i1 + 76 | 0;
 L4 : do {
  if ((HEAP8[i4] & 1) == 0) {
   i5 = HEAP32[i2 >> 2] | 0;
   i6 = HEAP32[i5 + 456 >> 2] | 0;
   if ((HEAP8[i6 + 964 | 0] & 1) != 0) {
    break;
   }
   if ((HEAP32[(HEAP32[i6 + 340 >> 2] | 0) + 52 >> 2] | 0) != 0) {
    break;
   }
   if ((HEAP32[i6 + 1832 >> 2] | 0) != 0) {
    break;
   }
   i6 = i5 + 64 | 0;
   while (1) {
    i5 = HEAP32[i6 >> 2] | 0;
    if ((i5 | 0) == 0) {
     break;
    }
    if ((HEAP8[i5 + 156 | 0] & 1) == 0) {
     break L4;
    } else {
     i6 = i5 + 56 | 0;
    }
   }
   HEAP8[i4] = 1;
   i6 = i1 + 284 | 0;
   i5 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = 0;
   do {
    if ((i5 | 0) != 0) {
     i6 = i5 | 0;
     i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
     if ((i7 | 0) == 0) {
      __ZN7WebCore11HistoryItemD1Ev(i5);
      __ZN3WTF8fastFreeEPv(i5);
      break;
     } else {
      HEAP32[i6 >> 2] = i7;
      break;
     }
    }
   } while (0);
   __ZN7WebCore8Document13setReadyStateENS0_10ReadyStateE(HEAP32[(HEAP32[i2 >> 2] | 0) + 456 >> 2] | 0, 2);
   i5 = i1 + 69 | 0;
   L19 : do {
    if ((HEAP8[i5] & 1) == 0) {
     i7 = HEAP32[i2 >> 2] | 0;
     i6 = i7 + 456 | 0;
     i8 = HEAP32[i6 >> 2] | 0;
     if ((HEAP8[i8 + 964 | 0] & 1) != 0) {
      break;
     }
     if ((HEAP32[i8 + 1832 >> 2] | 0) != 0) {
      break;
     }
     i8 = i7 + 64 | 0;
     while (1) {
      i7 = HEAP32[i8 >> 2] | 0;
      if ((i7 | 0) == 0) {
       break;
      }
      if ((HEAP8[i7 + 156 | 0] & 1) == 0) {
       break L19;
      } else {
       i8 = i7 + 56 | 0;
      }
     }
     HEAP8[i5] = 1;
     HEAP8[i1 + 70 | 0] = 0;
     __ZN7WebCore8Document13implicitCloseEv(HEAP32[i6 >> 2] | 0);
    }
   } while (0);
   __ZN7WebCore19NavigationScheduler10startTimerEv((HEAP32[i2 >> 2] | 0) + 376 | 0);
   __ZN7WebCore11FrameLoader9completedEv(i1);
   i5 = HEAP32[i2 >> 2] | 0;
   if ((HEAP32[i5 + 32 >> 2] | 0) == 0) {
    i9 = i5;
   } else {
    __ZN7WebCore11FrameLoader17checkLoadCompleteEv(i1);
    i9 = HEAP32[i2 >> 2] | 0;
   }
   i5 = HEAP32[i9 + 452 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   __ZN7WebCore9FrameView19handleLoadCompletedEv(i5);
  }
 } while (0);
 i9 = i3 + 4 | 0;
 i3 = i9 | 0;
 i2 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i3 >> 2] = i2;
  return;
 }
 i2 = i9 - 4 | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 127](i2);
 return;
}
function __ZN7WebCore11FrameLoader14stopAllLoadersENS_26ClearProvisionalItemPolicyE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 if ((HEAP32[i1 + 72 >> 2] | 0) != 0) {
  return;
 }
 i3 = i1 + 63 | 0;
 if ((HEAP8[i3] & 1) != 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i5 + 4 | 0;
 HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 HEAP8[i3] = 1;
 __ZN7WebCore13PolicyChecker9stopCheckEv(HEAP32[i1 + 8 >> 2] | 0);
 if ((i2 | 0) == 0) {
  __ZN7WebCore17HistoryController18setProvisionalItemEPNS_11HistoryItemE(HEAP32[i1 + 12 >> 2] | 0, 0);
 }
 i6 = HEAP32[(HEAP32[i4 >> 2] | 0) + 64 >> 2] | 0;
 if ((i6 | 0) != 0) {
  i4 = i6 + 4 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
  i4 = i6;
  while (1) {
   __ZN7WebCore11FrameLoader14stopAllLoadersENS_26ClearProvisionalItemPolicyE(i4 + 80 | 0, i2);
   i6 = HEAP32[i4 + 56 >> 2] | 0;
   i7 = (i6 | 0) == 0;
   if (!i7) {
    i8 = i6 + 4 | 0;
    HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
   }
   i8 = i4 + 4 | 0;
   i9 = i8 | 0;
   i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   do {
    if ((i10 | 0) == 0) {
     i11 = i8 - 4 | 0;
     if ((i11 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 127](i11);
    } else {
     HEAP32[i9 >> 2] = i10;
    }
   } while (0);
   if (i7) {
    break;
   } else {
    i4 = i6;
   }
  }
 }
 i4 = i1 + 52 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore14DocumentLoader11stopLoadingEv(i2);
 }
 i2 = i1 + 48 | 0;
 i10 = HEAP32[i2 >> 2] | 0;
 if ((i10 | 0) != 0) {
  __ZN7WebCore14DocumentLoader11stopLoadingEv(i10);
 }
 i10 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i10 | 0) == 0) {
   HEAP32[i4 >> 2] = 0;
  } else {
   if ((i10 | 0) == (HEAP32[i2 >> 2] | 0)) {
    HEAP32[i4 >> 2] = 0;
    i12 = i10;
   } else {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 40 >> 2] & 127](i10);
    i9 = HEAP32[i4 >> 2] | 0;
    HEAP32[i4 >> 2] = 0;
    if ((i9 | 0) == 0) {
     break;
    } else {
     i12 = i9;
    }
   }
   i9 = i12 + 4 | 0;
   i8 = i9 | 0;
   i11 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) != 0) {
    HEAP32[i8 >> 2] = i11;
    break;
   }
   i11 = i9 - 4 | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 127](i11);
  }
 } while (0);
 __ZN7WebCore9TimerBase4stopEv(i1 + 136 | 0);
 HEAP8[i3] = 0;
 i3 = i5 + 4 | 0;
 i5 = i3 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i5 >> 2] = i1;
  return;
 }
 i1 = i3 - 4 | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 127](i1);
 return;
}
function __ZN7WebCore11FrameLoader21loadURLIntoChildFrameERKNS_3URLERKN3WTF6StringEPNS_5FrameE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = HEAP32[(HEAP32[i1 + 12 >> 2] | 0) + 4 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   if ((HEAP32[(__ZNK7WebCore11HistoryItem8childrenEv(i9) | 0) + 8 >> 2] | 0) == 0) {
    break;
   }
   i10 = i1 + 44 | 0;
   if (((HEAP32[i10 >> 2] | 0) - 1 | 0) >>> 0 >= 3 >>> 0) {
    break;
   }
   if ((HEAP8[(HEAP32[(HEAP32[i1 >> 2] | 0) + 456 >> 2] | 0) + 1245 | 0] & 1) != 0) {
    break;
   }
   i11 = __ZNK7WebCore11HistoryItem19childItemWithTargetERKN3WTF6StringE(i9, i4 + 52 | 0) | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   i12 = i4 + 80 | 0;
   i13 = i11 | 0;
   HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
   i13 = i4 + 364 | 0;
   i14 = HEAP32[i13 >> 2] | 0;
   HEAP32[i13 >> 2] = i11;
   do {
    if ((i14 | 0) != 0) {
     i13 = i14 | 0;
     i15 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
     if ((i15 | 0) == 0) {
      __ZN7WebCore11HistoryItemD1Ev(i14);
      __ZN3WTF8fastFreeEPv(i14);
      break;
     } else {
      HEAP32[i13 >> 2] = i15;
      break;
     }
    }
   } while (0);
   __ZN7WebCore11FrameLoader25loadDifferentDocumentItemEPNS_11HistoryItemENS_13FrameLoadTypeENS0_29FormSubmissionCacheLoadPolicyE(i12, i11, HEAP32[i10 >> 2] | 0, 0);
   STACKTOP = i5;
   return;
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i6, H_BASE + 1200 | 0);
 i9 = i7 | 0;
 HEAP32[i9 >> 2] = 0;
 i1 = i8 | 0;
 HEAP32[i1 >> 2] = 0;
 __ZN7WebCore11FrameLoader7loadURLERKNS_3URLERKN3WTF6StringES7_bNS_13FrameLoadTypeENS4_10PassRefPtrINS_5EventEEENS9_INS_9FormStateEEE(i4 + 80 | 0, i2, i3, i6, 0, 7, i7, i8);
 i8 = HEAP32[i1 >> 2] | 0;
 if ((i8 | 0) != 0) {
  __ZN3WTF10RefCountedIN7WebCore9FormStateEE5derefEv(i8 | 0);
 }
 i8 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i9 = i8 + 8 | 0;
   i1 = i9 | 0;
   i7 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i1 >> 2] = i7;
    break;
   }
   i7 = i9 - 8 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 127](i7);
  }
 } while (0);
 i8 = HEAP32[i6 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i6 = i8 | 0;
 i7 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i7 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i8);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i6 >> 2] = i7;
  STACKTOP = i5;
  return;
 }
}
function __ZN3WTF9HashTableIPN7WebCore5FrameES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1, i2, i3) {
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
function __ZN7WebCore11FrameLoader14changeLocationEPNS_14SecurityOriginERKNS_3URLERKN3WTF6StringEbbb(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 512 | 0;
 i9 = i8 | 0;
 i10 = i8 + 312 | 0;
 i11 = i8 + 496 | 0;
 i12 = i8 + 504 | 0;
 i13 = i10 | 0;
 __ZN7WebCore19ResourceRequestBaseC2ERKNS_3URLENS_26ResourceRequestCachePolicyE(i13, i3, i7 & 1);
 _memset(i10 + 160 | 0, 0, 19) | 0;
 HEAP32[i10 + 180 >> 2] = 15;
 __ZN7WebCore19ResourceRequestBase18setHTTPHeaderFieldEPKcRKN3WTF6StringE(i13, H_BASE + 144 | 0, i4);
 __ZN3WTF6StringC1EPKc(i11, H_BASE + 1200 | 0);
 __ZN7WebCore16FrameLoadRequestC1EPNS_14SecurityOriginERKNS_15ResourceRequestERKN3WTF6StringE(i9, i2, i10, i11);
 i2 = i12 | 0;
 HEAP32[i2 >> 2] = 0;
 __ZN7WebCore11FrameLoader11urlSelectedERKNS_16FrameLoadRequestEN3WTF10PassRefPtrINS_5EventEEEbbNS_18ShouldSendReferrerENS_36ShouldReplaceDocumentIfJavaScriptURLE(i1, i9, i12, i5, i6, 0, 0);
 i6 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i2 = i6 + 8 | 0;
   i5 = i2 | 0;
   i12 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) != 0) {
    HEAP32[i5 >> 2] = i12;
    break;
   }
   i12 = i2 - 8 | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 127](i12);
  }
 } while (0);
 __ZN7WebCore14SubstituteDataD2Ev(i9 + 200 | 0);
 i6 = HEAP32[i9 + 192 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i12 = i6 | 0;
   i2 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i12 >> 2] = i2;
    break;
   }
  }
 } while (0);
 __ZN7WebCore15ResourceRequestD2Ev(i9 + 8 | 0);
 i6 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i9 = i6 | 0;
   if (((tempValue = HEAP32[i9 >> 2] | 0, HEAP32[i9 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN7WebCore14SecurityOriginD2Ev(i6);
   __ZN3WTF8fastFreeEPv(i6);
  }
 } while (0);
 i6 = HEAP32[i11 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN7WebCore15ResourceRequestD2Ev(i10);
  STACKTOP = i8;
  return;
 }
 i11 = i6 | 0;
 i9 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
 if ((i9 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i6);
  __ZN7WebCore15ResourceRequestD2Ev(i10);
  STACKTOP = i8;
  return;
 } else {
  HEAP32[i11 >> 2] = i9;
  __ZN7WebCore15ResourceRequestD2Ev(i10);
  STACKTOP = i8;
  return;
 }
}
function __ZN7WebCore14FormSubmissionD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 88 >> 2] | 0;
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
 i2 = HEAP32[i1 + 84 >> 2] | 0;
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
 i2 = HEAP32[i1 + 80 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 8 | 0;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 127](i5);
  }
 } while (0);
 i2 = HEAP32[i1 + 72 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 | 0;
   i3 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i5 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 68 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) == 0) {
    __ZN7WebCore8FormDataD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 64 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN3WTF10RefCountedIN7WebCore9FormStateEE5derefEv(i2 | 0);
 }
 i2 = HEAP32[i1 + 60 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 | 0;
   i3 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i5 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 56 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i5 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i5;
  return;
 }
}
function __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E6expandEPS4_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
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
 HEAP32[i1 + 8 >> 2] = i5 - 1;
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
  i4 = HEAP32[i5 >> 2] | 0;
  if ((i4 | 0) == (-1 | 0) | (i4 | 0) == 0) {
   i12 = i11;
  } else {
   i4 = __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E8reinsertEOS4_(i1, i5) | 0;
   i12 = (i5 | 0) == (i2 | 0) ? i4 : i11;
  }
  i4 = i10 + 1 | 0;
  if ((i4 | 0) == (i6 | 0)) {
   break;
  } else {
   i10 = i4;
   i11 = i12;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i6 | 0) > 0) {
  i13 = 0;
 } else {
  i8 = i12;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  i1 = i7 + (i13 << 3) | 0;
  do {
   if ((HEAP32[i1 >> 2] | 0) != -1) {
    i11 = HEAP32[i7 + (i13 << 3) + 4 >> 2] | 0;
    do {
     if ((i11 | 0) != 0) {
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
    i11 = HEAP32[i1 >> 2] | 0;
    if ((i11 | 0) == 0) {
     break;
    }
    i2 = i11 | 0;
    i10 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
    if ((i10 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i11);
     break;
    } else {
     HEAP32[i2 >> 2] = i10;
     break;
    }
   }
  } while (0);
  i1 = i13 + 1 | 0;
  if ((i1 | 0) < (i6 | 0)) {
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
function __ZN7WebCore11FrameLoader14detachChildrenEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i3 = i2 | 0;
 i4 = i3 + 12 | 0;
 i5 = i3 | 0;
 HEAP32[i5 >> 2] = i4;
 i6 = i3 + 4 | 0;
 HEAP32[i6 >> 2] = 16;
 i7 = i3 + 8 | 0;
 HEAP32[i7 >> 2] = 0;
 i3 = i1 | 0;
 i1 = __ZNK7WebCore9FrameTree10childCountEv((HEAP32[i3 >> 2] | 0) + 40 | 0) | 0;
 do {
  if (i1 >>> 0 > 16 >>> 0) {
   if (i1 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   } else {
    i8 = __ZN3WTF18fastMallocGoodSizeEj(i1 << 2) | 0;
    HEAP32[i6 >> 2] = i8 >>> 2;
    HEAP32[i5 >> 2] = __ZN3WTF10fastMallocEj(i8) | 0;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[(HEAP32[i3 >> 2] | 0) + 68 >> 2] | 0;
 i3 = HEAP32[i7 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i9 = i3;
 } else {
  i8 = i1;
  i1 = i3;
  while (1) {
   HEAP32[(HEAP32[i5 >> 2] | 0) + (i1 << 2) >> 2] = i8;
   i3 = i8 + 4 | 0;
   HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
   i3 = (HEAP32[i7 >> 2] | 0) + 1 | 0;
   HEAP32[i7 >> 2] = i3;
   i10 = HEAP32[i8 + 60 >> 2] | 0;
   if ((i10 | 0) == 0) {
    i9 = i3;
    break;
   } else {
    i8 = i10;
    i1 = i3;
   }
  }
 }
 do {
  if ((i9 | 0) != 0) {
   i1 = 0;
   while (1) {
    __ZN7WebCore11FrameLoader16detachFromParentEv((HEAP32[(HEAP32[i5 >> 2] | 0) + (i1 << 2) >> 2] | 0) + 80 | 0);
    i1 = i1 + 1 | 0;
    i11 = HEAP32[i7 >> 2] | 0;
    if (i1 >>> 0 >= i11 >>> 0) {
     break;
    }
   }
   if ((i11 | 0) == 0) {
    break;
   }
   i1 = HEAP32[i5 >> 2] | 0;
   i8 = i1 + (i11 << 2) | 0;
   i3 = i1;
   while (1) {
    i1 = (HEAP32[i3 >> 2] | 0) + 4 | 0;
    i10 = i1 | 0;
    i12 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
    do {
     if ((i12 | 0) == 0) {
      i13 = i1 - 4 | 0;
      if ((i13 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 127](i13);
     } else {
      HEAP32[i10 >> 2] = i12;
     }
    } while (0);
    i3 = i3 + 4 | 0;
    if ((i3 | 0) == (i8 | 0)) {
     break;
    }
   }
   HEAP32[i7 >> 2] = 0;
  }
 } while (0);
 i7 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) == (i7 | 0) | (i7 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 HEAP32[i5 >> 2] = 0;
 HEAP32[i6 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i7);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore11FrameLoader21addHTTPOriginIfNeededERNS_15ResourceRequestERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i1 | 0;
 __ZNK7WebCore19ResourceRequestBase15httpHeaderFieldEPKc(i4, i7, H_BASE + 184 | 0);
 i1 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i4 = (HEAP32[i1 + 4 >> 2] | 0) == 0;
   i8 = i1 | 0;
   i9 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    if (i4) {
     break;
    }
    STACKTOP = i3;
    return;
   } else {
    HEAP32[i8 >> 2] = i9;
    if (i4) {
     break;
    }
    STACKTOP = i3;
    return;
   }
  }
 } while (0);
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[(__ZNK7WebCore19ResourceRequestBase10httpMethodEv(i7) | 0) >> 2] | 0, H_BASE + 920 | 0) | 0) {
  STACKTOP = i3;
  return;
 }
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[(__ZNK7WebCore19ResourceRequestBase10httpMethodEv(i7) | 0) >> 2] | 0, H_BASE + 912 | 0) | 0) {
  STACKTOP = i3;
  return;
 }
 i1 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   if ((HEAP32[i1 + 4 >> 2] | 0) == 0) {
    break;
   }
   __ZN7WebCore19ResourceRequestBase18setHTTPHeaderFieldEPKcRKN3WTF6StringE(i7, H_BASE + 184 | 0, i2);
   STACKTOP = i3;
   return;
  }
 } while (0);
 __ZN7WebCore14SecurityOrigin12createUniqueEv(i6);
 i2 = i6 | 0;
 __ZNK7WebCore14SecurityOrigin8toStringEv(i5, HEAP32[i2 >> 2] | 0);
 __ZN7WebCore19ResourceRequestBase18setHTTPHeaderFieldEPKcRKN3WTF6StringE(i7, H_BASE + 184 | 0, i5);
 i7 = HEAP32[i5 >> 2] | 0;
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
 i7 = HEAP32[i2 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i2 = i7 | 0;
 if (((tempValue = HEAP32[i2 >> 2] | 0, HEAP32[i2 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore14SecurityOriginD2Ev(i7);
 __ZN3WTF8fastFreeEPv(i7);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11FrameLoader11urlSelectedERKNS_3URLERKN3WTF6StringENS4_10PassRefPtrINS_5EventEEEbbNS_18ShouldSendReferrerE(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 504 | 0;
 i9 = i8 | 0;
 i10 = i8 + 312 | 0;
 i11 = i8 + 496 | 0;
 i12 = HEAP32[(HEAP32[(HEAP32[i1 >> 2] | 0) + 456 >> 2] | 0) + 100 >> 2] | 0;
 __ZN7WebCore19ResourceRequestBaseC2ERKNS_3URLENS_26ResourceRequestCachePolicyE(i10 | 0, i2, 0);
 _memset(i10 + 160 | 0, 0, 19) | 0;
 HEAP32[i10 + 180 >> 2] = 15;
 __ZN7WebCore16FrameLoadRequestC1EPNS_14SecurityOriginERKNS_15ResourceRequestERKN3WTF6StringE(i9, i12, i10, i3);
 i3 = i11 | 0;
 i12 = i4 | 0;
 i4 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = 0;
 HEAP32[i3 >> 2] = i4;
 __ZN7WebCore11FrameLoader11urlSelectedERKNS_16FrameLoadRequestEN3WTF10PassRefPtrINS_5EventEEEbbNS_18ShouldSendReferrerENS_36ShouldReplaceDocumentIfJavaScriptURLE(i1, i9, i11, i5, i6, i7, 1);
 i7 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i3 = i7 + 8 | 0;
   i6 = i3 | 0;
   i5 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i6 >> 2] = i5;
    break;
   }
   i5 = i3 - 8 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 127](i5);
  }
 } while (0);
 __ZN7WebCore14SubstituteDataD2Ev(i9 + 200 | 0);
 i7 = HEAP32[i9 + 192 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i5 = i7 | 0;
   i3 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i5 >> 2] = i3;
    break;
   }
  }
 } while (0);
 __ZN7WebCore15ResourceRequestD2Ev(i9 + 8 | 0);
 i7 = HEAP32[i9 >> 2] | 0;
 if ((i7 | 0) == 0) {
  __ZN7WebCore15ResourceRequestD2Ev(i10);
  STACKTOP = i8;
  return;
 }
 i9 = i7 | 0;
 if (((tempValue = HEAP32[i9 >> 2] | 0, HEAP32[i9 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  __ZN7WebCore15ResourceRequestD2Ev(i10);
  STACKTOP = i8;
  return;
 }
 __ZN7WebCore14SecurityOriginD2Ev(i7);
 __ZN3WTF8fastFreeEPv(i7);
 __ZN7WebCore15ResourceRequestD2Ev(i10);
 STACKTOP = i8;
 return;
}
function __ZN7WebCore11FrameLoader43continueFragmentScrollAfterNavigationPolicyERKNS_15ResourceRequestEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i1 + 61 | 0;
 HEAP8[i6] = 0;
 if (!i3) {
  STACKTOP = i4;
  return;
 }
 i3 = i1 + 52 | 0;
 i7 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i8 = __ZNK7WebCore19ResourceRequestBase3urlEv(__ZN7WebCore14DocumentLoader7requestEv(i7) | 0) | 0;
   if (__ZN7WebCore31equalIgnoringFragmentIdentifierERKNS_3URLES2_(i8, __ZNK7WebCore19ResourceRequestBase3urlEv(i2 | 0) | 0) | 0) {
    break;
   }
   __ZN7WebCore14DocumentLoader11stopLoadingEv(HEAP32[i3 >> 2] | 0);
   i8 = HEAP32[i3 >> 2] | 0;
   if ((i8 | 0) == 0) {
    HEAP32[i3 >> 2] = 0;
    break;
   }
   if ((i8 | 0) == (HEAP32[i1 + 48 >> 2] | 0)) {
    HEAP32[i3 >> 2] = 0;
    i9 = i8;
   } else {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 40 >> 2] & 127](i8);
    i8 = HEAP32[i3 >> 2] | 0;
    HEAP32[i3 >> 2] = 0;
    if ((i8 | 0) == 0) {
     break;
    } else {
     i9 = i8;
    }
   }
   i8 = i9 + 4 | 0;
   i10 = i8 | 0;
   i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) != 0) {
    HEAP32[i10 >> 2] = i11;
    break;
   }
   i11 = i8 - 4 | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 127](i11);
  }
 } while (0);
 if ((HEAP8[i6] & 1) == 0) {
  i12 = (HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 8 >> 2] | 0) != 7;
 } else {
  i12 = 0;
 }
 i6 = __ZNK7WebCore19ResourceRequestBase3urlEv(i2 | 0) | 0;
 i2 = i5 | 0;
 HEAP32[i2 >> 2] = 0;
 __ZN7WebCore11FrameLoader18loadInSameDocumentERKNS_3URLEN3WTF10PassRefPtrINS_21SerializedScriptValueEEEb(i1, i6, i5, i12);
 i12 = HEAP32[i2 >> 2] | 0;
 if ((i12 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i2 = i12 | 0;
 if (((tempValue = HEAP32[i2 >> 2] | 0, HEAP32[i2 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore21SerializedScriptValueD1Ev(i12);
 __ZN3WTF8fastFreeEPv(i12);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore14SubstituteDataC2EN3WTF10PassRefPtrINS_12SharedBufferEEERKNS1_6StringES7_RKNS_3URLESA_b(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0;
 i8 = i2 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i1 >> 2] = i2;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i1 + 4 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i3 = i2 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i1 + 8 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i4 = i3 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i1 + 12 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i3 = i4 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 i3 = i5 + 4 | 0;
 i4 = i1 + 16 | 0;
 i2 = HEAP8[i4] & -2 | HEAP8[i3] & 1;
 HEAP8[i4] = i2;
 HEAP8[i4] = i2 & -3 | HEAP8[i3] & 2;
 HEAP32[i1 + 20 >> 2] = HEAP32[i5 + 8 >> 2];
 HEAP32[i1 + 24 >> 2] = HEAP32[i5 + 12 >> 2];
 HEAP32[i1 + 28 >> 2] = HEAP32[i5 + 16 >> 2];
 HEAP32[i1 + 32 >> 2] = HEAP32[i5 + 20 >> 2];
 HEAP32[i1 + 36 >> 2] = HEAP32[i5 + 24 >> 2];
 HEAP32[i1 + 40 >> 2] = HEAP32[i5 + 28 >> 2];
 HEAP32[i1 + 44 >> 2] = HEAP32[i5 + 32 >> 2];
 HEAP32[i1 + 48 >> 2] = HEAP32[i5 + 36 >> 2];
 HEAP32[i1 + 52 >> 2] = HEAP32[i5 + 40 >> 2];
 HEAP32[i1 + 56 >> 2] = HEAP32[i5 + 44 >> 2];
 i5 = HEAP32[i6 >> 2] | 0;
 HEAP32[i1 + 60 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i3 = i5 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 i3 = i6 + 4 | 0;
 i5 = i1 + 64 | 0;
 i2 = HEAP8[i5] & -2 | HEAP8[i3] & 1;
 HEAP8[i5] = i2;
 HEAP8[i5] = i2 & -3 | HEAP8[i3] & 2;
 HEAP32[i1 + 68 >> 2] = HEAP32[i6 + 8 >> 2];
 HEAP32[i1 + 72 >> 2] = HEAP32[i6 + 12 >> 2];
 HEAP32[i1 + 76 >> 2] = HEAP32[i6 + 16 >> 2];
 HEAP32[i1 + 80 >> 2] = HEAP32[i6 + 20 >> 2];
 HEAP32[i1 + 84 >> 2] = HEAP32[i6 + 24 >> 2];
 HEAP32[i1 + 88 >> 2] = HEAP32[i6 + 28 >> 2];
 HEAP32[i1 + 92 >> 2] = HEAP32[i6 + 32 >> 2];
 HEAP32[i1 + 96 >> 2] = HEAP32[i6 + 36 >> 2];
 HEAP32[i1 + 100 >> 2] = HEAP32[i6 + 40 >> 2];
 HEAP32[i1 + 104 >> 2] = HEAP32[i6 + 44 >> 2];
 HEAP8[i1 + 108 | 0] = i7 & 1;
 return;
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
function __ZN7WebCore15ResourceRequestaSERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 __ZN7WebCore19ResourceRequestBaseaSERKS0_(i1 | 0, i2 | 0) | 0;
 i3 = HEAP32[i2 + 160 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = i3 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i1 + 160 | 0;
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
 i5 = HEAP32[i2 + 164 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i4 = i5 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i1 + 164 | 0;
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
 i3 = HEAP32[i2 + 168 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = i3 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i1 + 168 | 0;
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
 i5 = HEAP32[i2 + 172 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i4 = i5 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i1 + 172 | 0;
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
 HEAP8[i1 + 176 | 0] = HEAP8[i2 + 176 | 0] & 1;
 HEAP8[i1 + 177 | 0] = HEAP8[i2 + 177 | 0] & 1;
 HEAP8[i1 + 178 | 0] = HEAP8[i2 + 178 | 0] & 1;
 HEAP32[i1 + 180 >> 2] = HEAP32[i2 + 180 >> 2];
 return i1 | 0;
}
function __ZN7WebCore11FrameLoader4loadEPNS_14DocumentLoaderE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = __ZN7WebCore14DocumentLoader7requestEv(i2) | 0;
 i6 = i1 + 44 | 0;
 __ZN7WebCore11FrameLoader23addExtraFieldsToRequestERNS_15ResourceRequestENS_13FrameLoadTypeEb(i1, i5, HEAP32[i6 >> 2] | 0, 1);
 do {
  if (__ZNK7WebCore11FrameLoader29shouldTreatURLAsSameAsCurrentERKNS_3URLE(i1, __ZNK7WebCore19ResourceRequestBase3urlEv(__ZNK7WebCore14DocumentLoader15originalRequestEv(i2) | 0) | 0) | 0) {
   __ZN7WebCore19ResourceRequestBase14setCachePolicyENS_26ResourceRequestCachePolicyE(i5 | 0, 1);
   i7 = 6;
  } else {
   if (__ZNK7WebCore11FrameLoader29shouldTreatURLAsSameAsCurrentERKNS_3URLE(i1, __ZNK7WebCore14DocumentLoader14unreachableURLEv(i2) | 0) | 0) {
    if ((HEAP32[i6 >> 2] | 0) == 4) {
     i7 = 4;
     break;
    }
   }
   i7 = 0;
  }
 } while (0);
 i6 = HEAP32[i1 + 48 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i5 = HEAP32[i6 + 988 >> 2] | 0;
   if ((i5 | 0) != 0) {
    i8 = i5 | 0;
    HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
   }
   i8 = i2 + 988 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = i5;
   if ((i9 | 0) == 0) {
    break;
   }
   i5 = i9 | 0;
   i8 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i5 >> 2] = i8;
    break;
   }
  }
 } while (0);
 if (__ZN7WebCore11FrameLoader34shouldReloadToHandleUnreachableURLEPNS_14DocumentLoaderE(i1, i2) | 0) {
  __ZN7WebCore17HistoryController26saveDocumentAndScrollStateEv(HEAP32[i1 + 12 >> 2] | 0);
  i10 = 4;
 } else {
  i10 = i7;
 }
 i7 = i4 | 0;
 HEAP32[i7 >> 2] = 0;
 __ZN7WebCore11FrameLoader22loadWithDocumentLoaderEPNS_14DocumentLoaderENS_13FrameLoadTypeEN3WTF10PassRefPtrINS_9FormStateEEE(i1, i2, i10, i4);
 i4 = HEAP32[i7 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN3WTF10RefCountedIN7WebCore9FormStateEE5derefEv(i4 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore16FrameLoadRequestC1EPNS_14SecurityOriginERKNS_15ResourceRequestERKN3WTF6StringE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 HEAP32[i1 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i5 = i2 | 0;
  tempValue = HEAP32[i5 >> 2] | 0, HEAP32[i5 >> 2] = tempValue + 1, tempValue;
 }
 __ZN7WebCore19ResourceRequestBaseC2ERKS0_(i1 + 8 | 0, i3 | 0);
 i5 = HEAP32[i3 + 160 >> 2] | 0;
 HEAP32[i1 + 168 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i2 = i5 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 i2 = HEAP32[i3 + 164 >> 2] | 0;
 HEAP32[i1 + 172 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i5 = i2 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
 }
 i5 = HEAP32[i3 + 168 >> 2] | 0;
 HEAP32[i1 + 176 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i2 = i5 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 i2 = HEAP32[i3 + 172 >> 2] | 0;
 HEAP32[i1 + 180 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i5 = i2 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
 }
 HEAP8[i1 + 184 | 0] = HEAP8[i3 + 176 | 0] & 1;
 HEAP8[i1 + 185 | 0] = HEAP8[i3 + 177 | 0] & 1;
 HEAP8[i1 + 186 | 0] = HEAP8[i3 + 178 | 0] & 1;
 HEAP32[i1 + 188 >> 2] = HEAP32[i3 + 180 >> 2];
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i1 + 192 >> 2] = i3;
 if ((i3 | 0) == 0) {
  i6 = i1 + 196 | 0;
  HEAP8[i6] = 0;
  i7 = i1 + 197 | 0;
  HEAP8[i7] = 0;
  i8 = i1 + 200 | 0;
  i9 = i1 + 212 | 0;
  i10 = i8;
  _memset(i10 | 0, 0, 16) | 0;
  __ZN7WebCore3URL10invalidateEv(i9);
  i11 = i1 + 260 | 0;
  i12 = i11 | 0;
  HEAP32[i12 >> 2] = 0;
  __ZN7WebCore3URL10invalidateEv(i11);
  i13 = i1 + 308 | 0;
  HEAP8[i13] = 0;
  return;
 }
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 i6 = i1 + 196 | 0;
 HEAP8[i6] = 0;
 i7 = i1 + 197 | 0;
 HEAP8[i7] = 0;
 i8 = i1 + 200 | 0;
 i9 = i1 + 212 | 0;
 i10 = i8;
 _memset(i10 | 0, 0, 16) | 0;
 __ZN7WebCore3URL10invalidateEv(i9);
 i11 = i1 + 260 | 0;
 i12 = i11 | 0;
 HEAP32[i12 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i11);
 i13 = i1 + 308 | 0;
 HEAP8[i13] = 0;
 return;
}
function __ZN7WebCore14SubstituteDataC2ERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i4 = i3 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i1 + 4 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i3 = i4 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 i3 = HEAP32[i2 + 8 >> 2] | 0;
 HEAP32[i1 + 8 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i4 = i3 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = HEAP32[i2 + 12 >> 2] | 0;
 HEAP32[i1 + 12 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i3 = i4 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
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
 i3 = HEAP32[i2 + 60 >> 2] | 0;
 HEAP32[i1 + 60 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i5 = i3 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
 }
 i5 = i2 + 64 | 0;
 i3 = i1 + 64 | 0;
 i4 = HEAP8[i3] & -2 | HEAP8[i5] & 1;
 HEAP8[i3] = i4;
 HEAP8[i3] = i4 & -3 | HEAP8[i5] & 2;
 HEAP32[i1 + 68 >> 2] = HEAP32[i2 + 68 >> 2];
 HEAP32[i1 + 72 >> 2] = HEAP32[i2 + 72 >> 2];
 HEAP32[i1 + 76 >> 2] = HEAP32[i2 + 76 >> 2];
 HEAP32[i1 + 80 >> 2] = HEAP32[i2 + 80 >> 2];
 HEAP32[i1 + 84 >> 2] = HEAP32[i2 + 84 >> 2];
 HEAP32[i1 + 88 >> 2] = HEAP32[i2 + 88 >> 2];
 HEAP32[i1 + 92 >> 2] = HEAP32[i2 + 92 >> 2];
 HEAP32[i1 + 96 >> 2] = HEAP32[i2 + 96 >> 2];
 HEAP32[i1 + 100 >> 2] = HEAP32[i2 + 100 >> 2];
 HEAP32[i1 + 104 >> 2] = HEAP32[i2 + 104 >> 2];
 HEAP8[i1 + 108 | 0] = HEAP8[i2 + 108 | 0] & 1;
 return;
}
function __ZN7WebCore15ResourceRequestC2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i4);
 i6 = HEAP32[i5 >> 2] | 0;
 HEAP32[i1 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i7 = i6 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = HEAP8[i4 + 4 | 0] | 0;
 i6 = i1 + 4 | 0;
 HEAP8[i6] = HEAP8[i6] & -4 | i7 & 1 | i7 & 2;
 HEAP32[i1 + 8 >> 2] = HEAP32[i4 + 8 >> 2];
 HEAP32[i1 + 12 >> 2] = HEAP32[i4 + 12 >> 2];
 HEAP32[i1 + 16 >> 2] = HEAP32[i4 + 16 >> 2];
 HEAP32[i1 + 20 >> 2] = HEAP32[i4 + 20 >> 2];
 HEAP32[i1 + 24 >> 2] = HEAP32[i4 + 24 >> 2];
 HEAP32[i1 + 28 >> 2] = HEAP32[i4 + 28 >> 2];
 HEAP32[i1 + 32 >> 2] = HEAP32[i4 + 32 >> 2];
 HEAP32[i1 + 36 >> 2] = HEAP32[i4 + 36 >> 2];
 HEAP32[i1 + 40 >> 2] = HEAP32[i4 + 40 >> 2];
 HEAP32[i1 + 44 >> 2] = HEAP32[i4 + 44 >> 2];
 HEAP32[i1 + 48 >> 2] = 0;
 HEAPF64[i1 + 56 >> 3] = +HEAPF64[__ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE >> 3];
 i4 = i1 + 64 | 0;
 HEAP32[i4 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i4);
 HEAP32[i3 >> 2] = H_BASE + 920;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i1 + 112 | 0, i3);
 __ZN7WebCore13HTTPHeaderMapC1Ev(i1 + 116 | 0);
 _memset(i1 + 136 | 0, 0, 16) | 0;
 HEAP8[i1 + 152 | 0] = 11;
 HEAP32[i1 + 156 >> 2] = 1;
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i8 = i1 + 160 | 0;
  i9 = i1 + 180 | 0;
  i10 = i8;
  _memset(i10 | 0, 0, 19) | 0;
  HEAP32[i9 >> 2] = 15;
  STACKTOP = i2;
  return;
 }
 i5 = i3 | 0;
 i4 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i3);
  i8 = i1 + 160 | 0;
  i9 = i1 + 180 | 0;
  i10 = i8;
  _memset(i10 | 0, 0, 19) | 0;
  HEAP32[i9 >> 2] = 15;
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i5 >> 2] = i4;
  i8 = i1 + 160 | 0;
  i9 = i1 + 180 | 0;
  i10 = i8;
  _memset(i10 | 0, 0, 19) | 0;
  HEAP32[i9 >> 2] = 15;
  STACKTOP = i2;
  return;
 }
}
function __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E8reinsertEOS4_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i2 | 0;
 i5 = __ZN3WTF15CaseFoldingHash4hashERNS_10StringImplE(HEAP32[i1 >> 2] | 0) | 0;
 i6 = (i5 >>> 23) + ~i5 | 0;
 i7 = i6 << 12 ^ i6;
 i6 = i7 >>> 7 ^ i7;
 i7 = i6 << 2 ^ i6;
 i6 = i7 >>> 20 ^ i7 | 1;
 i7 = i5;
 i5 = 0;
 i8 = 0;
 while (1) {
  i9 = i7 & i4;
  i10 = i3 + (i9 << 3) | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  i12 = i11;
  if ((i12 | 0) == 0) {
   i13 = 3;
   break;
  } else if ((i12 | 0) == (-1 | 0)) {
   i14 = i10;
  } else {
   i12 = HEAP32[i1 >> 2] | 0;
   if ((i11 | 0) == (i12 | 0)) {
    i15 = i10;
    break;
   }
   if (__ZN3WTF24equalIgnoringCaseNonNullEPKNS_10StringImplES2_(i11, i12) | 0) {
    i15 = i10;
    break;
   } else {
    i14 = i8;
   }
  }
  i12 = (i5 | 0) == 0 ? i6 : i5;
  i7 = i12 + i9 | 0;
  i5 = i12;
  i8 = i14;
 }
 if ((i13 | 0) == 3) {
  i15 = (i8 | 0) != 0 ? i8 : i10;
 }
 i10 = i15 + 4 | 0;
 i8 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i13 = i8 | 0;
   i14 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i13 >> 2] = i14;
    break;
   }
  }
 } while (0);
 i8 = i15 | 0;
 i14 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i13 = i14 | 0;
   i5 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    break;
   } else {
    HEAP32[i13 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i14 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i8 >> 2] = i14;
 i14 = i2 + 4 | 0;
 i2 = HEAP32[i14 >> 2] | 0;
 HEAP32[i14 >> 2] = 0;
 HEAP32[i10 >> 2] = i2;
 return i15 | 0;
}
function __ZN7WebCore11FrameLoader21reportLocalLoadFailedEPNS_5FrameERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i7 = HEAP32[i1 + 456 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i7 >> 2] | 0) + 316 >> 2] | 0;
 i8 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i8 | 0) == 0) {
   i9 = 0;
  } else {
   i2 = i8 | 0;
   i10 = HEAP32[i2 >> 2] | 0;
   i11 = i10 + 2 | 0;
   HEAP32[i2 >> 2] = i10 + 4;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    i9 = i8;
    break;
   } else {
    HEAP32[i2 >> 2] = i11;
    i9 = i8;
    break;
   }
  }
 } while (0);
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i9;
 i11 = (i9 | 0) == 0;
 if (!i11) {
  i2 = i9 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 __ZN3WTF13tryMakeStringIPKcNS_6StringEEENS_10PassRefPtrINS_10StringImplEEET_T0_(i4, H_BASE + 1096 | 0, i5);
 i5 = i4 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 | 0;
   i2 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i8 >> 2] = i2;
    break;
   }
  }
 } while (0);
 if ((i4 | 0) == 0) {
  _WTFCrash();
 }
 i5 = i6 | 0;
 HEAP32[i5 >> 2] = i4;
 FUNCTION_TABLE_viiiii[i1 & 1](i7, 8, 3, i6, 0);
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i5 = i6 | 0;
   i7 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i5 >> 2] = i7;
    break;
   }
  }
 } while (0);
 if (i11) {
  STACKTOP = i3;
  return;
 }
 i11 = i9 | 0;
 i6 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i9);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i11 >> 2] = i6;
  STACKTOP = i3;
  return;
 }
}
function __ZN3WTF7HashSetIPN7WebCore5FrameENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1, i2) {
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
 __ZN3WTF9HashTableIPN7WebCore5FrameES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1 | 0, (i5 | 0) / 2 & -1, 0) | 0;
 i21 = 1;
 return i21 | 0;
}
function __ZN7WebCore16FrameLoadRequestC1ERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i4 = i3 | 0;
  tempValue = HEAP32[i4 >> 2] | 0, HEAP32[i4 >> 2] = tempValue + 1, tempValue;
 }
 __ZN7WebCore19ResourceRequestBaseC2ERKS0_(i1 + 8 | 0, i2 + 8 | 0);
 i4 = HEAP32[i2 + 168 >> 2] | 0;
 HEAP32[i1 + 168 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i3 = i4 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 i3 = HEAP32[i2 + 172 >> 2] | 0;
 HEAP32[i1 + 172 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i4 = i3 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = HEAP32[i2 + 176 >> 2] | 0;
 HEAP32[i1 + 176 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i3 = i4 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 i3 = HEAP32[i2 + 180 >> 2] | 0;
 HEAP32[i1 + 180 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i4 = i3 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 HEAP8[i1 + 184 | 0] = HEAP8[i2 + 184 | 0] & 1;
 HEAP8[i1 + 185 | 0] = HEAP8[i2 + 185 | 0] & 1;
 HEAP8[i1 + 186 | 0] = HEAP8[i2 + 186 | 0] & 1;
 HEAP32[i1 + 188 >> 2] = HEAP32[i2 + 188 >> 2];
 i4 = HEAP32[i2 + 192 >> 2] | 0;
 HEAP32[i1 + 192 >> 2] = i4;
 if ((i4 | 0) == 0) {
  i5 = i1 + 196 | 0;
  i6 = i2 + 196 | 0;
  i7 = HEAP8[i6] | 0;
  i8 = i7 & 1;
  HEAP8[i5] = i8;
  i9 = i1 + 197 | 0;
  i10 = i2 + 197 | 0;
  i11 = HEAP8[i10] | 0;
  i12 = i11 & 1;
  HEAP8[i9] = i12;
  i13 = i1 + 200 | 0;
  i14 = i2 + 200 | 0;
  __ZN7WebCore14SubstituteDataC2ERKS0_(i13, i14);
  return;
 }
 i3 = i4 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 i5 = i1 + 196 | 0;
 i6 = i2 + 196 | 0;
 i7 = HEAP8[i6] | 0;
 i8 = i7 & 1;
 HEAP8[i5] = i8;
 i9 = i1 + 197 | 0;
 i10 = i2 + 197 | 0;
 i11 = HEAP8[i10] | 0;
 i12 = i11 & 1;
 HEAP8[i9] = i12;
 i13 = i1 + 200 | 0;
 i14 = i2 + 200 | 0;
 __ZN7WebCore14SubstituteDataC2ERKS0_(i13, i14);
 return;
}
function __ZN3WTF10makeStringINS_6StringEPKcS1_S3_S1_EES1_T_T0_T1_T2_T3_(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i7 + 16 | 0;
 i11 = i7 + 24 | 0;
 i12 = i9 | 0;
 i13 = HEAP32[i2 >> 2] | 0;
 HEAP32[i12 >> 2] = i13;
 if ((i13 | 0) != 0) {
  i2 = i13 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 i2 = i10 | 0;
 i13 = HEAP32[i4 >> 2] | 0;
 HEAP32[i2 >> 2] = i13;
 if ((i13 | 0) != 0) {
  i4 = i13 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i11 | 0;
 i13 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i13;
 if ((i13 | 0) != 0) {
  i6 = i13 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
 }
 __ZN3WTF13tryMakeStringINS_6StringEPKcS1_S3_S1_EENS_10PassRefPtrINS_10StringImplEEET_T0_T1_T2_T3_(i8, i9, i3, i10, i5, i11);
 i11 = i8 | 0;
 i8 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 i11 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i4 = i11 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i4 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i11 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i2 = i11 | 0;
   i5 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i2 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i11 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i12 = i11 | 0;
   i5 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i12 >> 2] = i5;
    break;
   }
  }
 } while (0);
 if ((i8 | 0) == 0) {
  _WTFCrash();
 } else {
  HEAP32[i1 >> 2] = i8;
  STACKTOP = i7;
  return;
 }
}
function __ZN7WebCore19ResourceRequestBaseD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = HEAP32[i1 + 148 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore8FormDataD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = i1 + 144 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i3 = i1 + 136 | 0;
 if ((i4 | 0) != 0) {
  i5 = HEAP32[i3 >> 2] | 0;
  i6 = i5 + (i4 << 2) | 0;
  i4 = i5;
  while (1) {
   i5 = HEAP32[i4 >> 2] | 0;
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
   i4 = i4 + 4 | 0;
   if ((i4 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i1 + 140 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 __ZN7WebCore13HTTPHeaderMapD1Ev(i1 + 116 | 0);
 i2 = HEAP32[i1 + 112 >> 2] | 0;
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
 i2 = HEAP32[i1 + 64 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i6 = i2 | 0;
   i3 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i6 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZN7WebCore11FrameLoader20loadSameDocumentItemEPNS_11HistoryItemE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i4 = i3 | 0;
 i5 = i3 + 48 | 0;
 i6 = i1 + 12 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 __ZN7WebCore17HistoryController36saveScrollPositionAndViewStateToItemEPNS_11HistoryItemE(i7, HEAP32[i7 + 4 >> 2] | 0);
 i7 = HEAP32[(HEAP32[i1 >> 2] | 0) + 452 >> 2] | 0;
 if ((i7 | 0) != 0) {
  __ZN7WebCore9FrameView20setWasScrolledByUserEb(i7, 0);
 }
 __ZN7WebCore17HistoryController14setCurrentItemEPNS_11HistoryItemE(HEAP32[i6 >> 2] | 0, i2);
 __ZNK7WebCore11HistoryItem3urlEv(i4, i2);
 i7 = i5 | 0;
 i8 = HEAP32[i2 + 136 >> 2] | 0;
 HEAP32[i7 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i2 = i8 | 0;
  tempValue = HEAP32[i2 >> 2] | 0, HEAP32[i2 >> 2] = tempValue + 1, tempValue;
 }
 __ZN7WebCore11FrameLoader18loadInSameDocumentERKNS_3URLEN3WTF10PassRefPtrINS_21SerializedScriptValueEEEb(i1, i4, i5, 0);
 i5 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i7 = i5 | 0;
   if (((tempValue = HEAP32[i7 >> 2] | 0, HEAP32[i7 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN7WebCore21SerializedScriptValueD1Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  }
 } while (0);
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i9 = HEAP32[i6 >> 2] | 0;
  __ZN7WebCore17HistoryController33restoreScrollPositionAndViewStateEv(i9);
  STACKTOP = i3;
  return;
 }
 i4 = i5 | 0;
 i7 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i7 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  i9 = HEAP32[i6 >> 2] | 0;
  __ZN7WebCore17HistoryController33restoreScrollPositionAndViewStateEv(i9);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i4 >> 2] = i7;
  i9 = HEAP32[i6 >> 2] | 0;
  __ZN7WebCore17HistoryController33restoreScrollPositionAndViewStateEv(i9);
  STACKTOP = i3;
  return;
 }
}
function __ZN3WTF6VectorIN7WebCore15ResourceRequestELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i5 + (i6 * 184 & -1) | 0;
 if (i2 >>> 0 > 23342213 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 * 184 & -1) | 0;
 HEAP32[i3 >> 2] = (i7 >>> 0) / 184 & -1;
 i2 = __ZN3WTF10fastMallocEj(i7) | 0;
 HEAP32[i4 >> 2] = i2;
 if ((i6 | 0) != 0) {
  i6 = i5;
  i7 = i2;
  while (1) {
   __ZN7WebCore19ResourceRequestBaseC2ERKS0_(i7 | 0, i6 | 0);
   i2 = HEAP32[i6 + 160 >> 2] | 0;
   HEAP32[i7 + 160 >> 2] = i2;
   if ((i2 | 0) != 0) {
    i8 = i2 | 0;
    HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
   }
   i8 = HEAP32[i6 + 164 >> 2] | 0;
   HEAP32[i7 + 164 >> 2] = i8;
   if ((i8 | 0) != 0) {
    i2 = i8 | 0;
    HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
   }
   i2 = HEAP32[i6 + 168 >> 2] | 0;
   HEAP32[i7 + 168 >> 2] = i2;
   if ((i2 | 0) != 0) {
    i8 = i2 | 0;
    HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
   }
   i8 = HEAP32[i6 + 172 >> 2] | 0;
   HEAP32[i7 + 172 >> 2] = i8;
   if ((i8 | 0) != 0) {
    i2 = i8 | 0;
    HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
   }
   HEAP8[i7 + 176 | 0] = HEAP8[i6 + 176 | 0] & 1;
   HEAP8[i7 + 177 | 0] = HEAP8[i6 + 177 | 0] & 1;
   HEAP8[i7 + 178 | 0] = HEAP8[i6 + 178 | 0] & 1;
   HEAP32[i7 + 180 >> 2] = HEAP32[i6 + 180 >> 2];
   __ZN7WebCore15ResourceRequestD2Ev(i6);
   i2 = i6 + 184 | 0;
   if ((i2 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i2;
    i7 = i7 + 184 | 0;
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
function __ZN7WebCore11FrameLoader23setFirstPartyForCookiesERKNS_3URLE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i3 = i1 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i4 = i2 | 0;
 i5 = i2 + 4 | 0;
 i6 = i2 + 8 | 0;
 i7 = i2 + 12 | 0;
 i8 = i2 + 16 | 0;
 i9 = i2 + 20 | 0;
 i10 = i2 + 24 | 0;
 i11 = i2 + 28 | 0;
 i12 = i2 + 32 | 0;
 i13 = i2 + 36 | 0;
 i14 = i2 + 40 | 0;
 i15 = i2 + 44 | 0;
 i2 = i1;
 while (1) {
  i1 = HEAP32[i2 + 456 >> 2] | 0;
  i16 = HEAP32[i4 >> 2] | 0;
  if ((i16 | 0) != 0) {
   i17 = i16 | 0;
   HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 2;
  }
  i17 = i1 + 596 | 0;
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
  i18 = i1 + 600 | 0;
  i17 = HEAP8[i18] & -2 | HEAP8[i5] & 1;
  HEAP8[i18] = i17;
  HEAP8[i18] = i17 & -3 | HEAP8[i5] & 2;
  HEAP32[i1 + 604 >> 2] = HEAP32[i6 >> 2];
  HEAP32[i1 + 608 >> 2] = HEAP32[i7 >> 2];
  HEAP32[i1 + 612 >> 2] = HEAP32[i8 >> 2];
  HEAP32[i1 + 616 >> 2] = HEAP32[i9 >> 2];
  HEAP32[i1 + 620 >> 2] = HEAP32[i10 >> 2];
  HEAP32[i1 + 624 >> 2] = HEAP32[i11 >> 2];
  HEAP32[i1 + 628 >> 2] = HEAP32[i12 >> 2];
  HEAP32[i1 + 632 >> 2] = HEAP32[i13 >> 2];
  HEAP32[i1 + 636 >> 2] = HEAP32[i14 >> 2];
  HEAP32[i1 + 640 >> 2] = HEAP32[i15 >> 2];
  i2 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i2 + 40 | 0, HEAP32[i3 >> 2] | 0) | 0;
  if ((i2 | 0) == 0) {
   break;
  }
 }
 return;
}
function __ZNK7WebCore11FrameLoader30shouldTreatURLAsSrcdocDocumentERKNS_3URLE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 if (!(__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i2 >> 2] | 0, H_BASE + 368 | 0) | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i2 = HEAP32[(HEAP32[i1 >> 2] | 0) + 448 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = HEAP32[i2 + 44 >> 2] | 0;
 i4 = HEAP32[__ZN7WebCore9HTMLNames9iframeTagE >> 2] | 0;
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
 i4 = HEAP32[i2 + 48 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i2 = HEAP32[i4 + 4 >> 2] | 0;
 if ((i2 & 1 | 0) == 0) {
  i5 = i2 >>> 1 & 134217727;
  i6 = i4 + 20 | 0;
 } else {
  i2 = i4 + 24 | 0;
  i5 = HEAP32[i2 + 8 >> 2] | 0;
  i6 = HEAP32[i2 >> 2] | 0;
 }
 L21 : do {
  if ((i5 | 0) == 0) {
   i7 = 0;
  } else {
   i2 = HEAP32[__ZN7WebCore9HTMLNames10srcdocAttrE >> 2] | 0;
   i4 = i2 + 12 | 0;
   i1 = i2 + 16 | 0;
   i8 = 0;
   while (1) {
    i9 = i6 + (i8 << 3) | 0;
    i10 = HEAP32[i9 >> 2] | 0;
    if ((i10 | 0) == (i2 | 0)) {
     i7 = i9;
     break L21;
    }
    if ((HEAP32[i10 + 12 >> 2] | 0) == (HEAP32[i4 >> 2] | 0)) {
     if ((HEAP32[i10 + 16 >> 2] | 0) == (HEAP32[i1 >> 2] | 0)) {
      i7 = i9;
      break L21;
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
 i3 = (i7 | 0) != 0;
 return i3 | 0;
}
function __ZN7WebCore11FrameLoader35tellClientAboutPastMemoryCacheLoadsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 184 | 0;
 i3 = i2 | 0;
 i4 = i1 + 48 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i6 = i5 + 1496 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 i6 = i5 + 1488 | 0;
 i8 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i5 + 1492 >> 2] = 0;
 i5 = (i7 | 0) == 0;
 do {
  if (!i5) {
   i6 = i3 | 0;
   i9 = i3 + 180 | 0;
   i10 = i3 + 160 | 0;
   i11 = i1 + 4 | 0;
   i12 = 0;
   while (1) {
    i13 = __ZN7WebCore11MemoryCache18resourceForRequestERKNS_15ResourceRequestE(__ZN7WebCore11memoryCacheEv() | 0, i8 + (i12 * 184 & -1) | 0) | 0;
    if ((i13 | 0) != 0) {
     __ZN7WebCore19ResourceRequestBaseC2ERKNS_3URLENS_26ResourceRequestCachePolicyE(i6, __ZNK7WebCore19ResourceRequestBase3urlEv(i13 + 48 | 0) | 0, 0);
     _memset(i10 | 0, 0, 19) | 0;
     HEAP32[i9 >> 2] = 15;
     i14 = HEAP32[i11 >> 2] | 0;
     FUNCTION_TABLE_iiiiii[HEAP32[(HEAP32[i14 >> 2] | 0) + 80 >> 2] & 1](i14, HEAP32[i4 >> 2] | 0, i3, i13 + 272 | 0, HEAP32[i13 + 568 >> 2] | 0) | 0;
     __ZN7WebCore15ResourceRequestD2Ev(i3);
    }
    i12 = i12 + 1 | 0;
    if (i12 >>> 0 >= i7 >>> 0) {
     break;
    }
   }
   if (i5) {
    break;
   }
   i12 = i8 + (i7 * 184 & -1) | 0;
   i11 = i8;
   while (1) {
    __ZN7WebCore15ResourceRequestD2Ev(i11);
    i11 = i11 + 184 | 0;
    if ((i11 | 0) == (i12 | 0)) {
     break;
    }
   }
  }
 } while (0);
 if ((i8 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZN3WTF8fastFreeEPv(i8);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore11FrameLoader27prepareForCachedPageRestoreEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i1 | 0;
 __ZN7WebCore19NavigationScheduler6cancelEb((HEAP32[i5 >> 2] | 0) + 376 | 0, 0);
 __ZN7WebCore17HistoryController17saveDocumentStateEv(HEAP32[i1 + 12 >> 2] | 0);
 i6 = HEAP32[(HEAP32[i5 >> 2] | 0) + 456 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = 1;
 } else {
  i7 = (HEAP8[i6 + 1433 | 0] & 1) != 0 ? 1 : 2;
 }
 __ZN7WebCore11FrameLoader11stopLoadingENS_17UnloadEventPolicyE(i1, i7);
 __ZN7WebCore6Editor23clearUndoRedoOperationsEv(HEAP32[(HEAP32[i5 >> 2] | 0) + 464 >> 2] | 0);
 if (!(__ZN7WebCore16ScriptController17canExecuteScriptsENS_33ReasonForCallingCanExecuteScriptsE(HEAP32[(HEAP32[i5 >> 2] | 0) + 460 >> 2] | 0, 1) | 0)) {
  STACKTOP = i2;
  return;
 }
 i7 = HEAP32[(HEAP32[(HEAP32[i5 >> 2] | 0) + 456 >> 2] | 0) + 336 >> 2] | 0;
 i5 = i3 | 0;
 HEAP32[i5 >> 2] = 0;
 __ZN7WebCore9DOMWindow9setStatusERKN3WTF6StringE(i7, i3);
 i3 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 | 0;
   i1 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i5 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i3 = i4 | 0;
 HEAP32[i3 >> 2] = 0;
 __ZN7WebCore9DOMWindow16setDefaultStatusERKN3WTF6StringE(i7, i4);
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i3 = i4 | 0;
 i7 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
 if ((i7 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i3 >> 2] = i7;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore11FrameLoader15setupForReplaceEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 4 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 48 | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 208 >> 2] & 63](i3, HEAP32[i4 >> 2] | 0);
 HEAP32[i1 + 40 >> 2] = 0;
 i3 = i1 + 24 | 0;
 if (__ZNK7WebCore23FrameLoaderStateMachine15firstLayoutDoneEv(i3) | 0) {
  __ZN7WebCore23FrameLoaderStateMachine9advanceToENS0_5StateE(i3, 3);
 }
 __ZN7WebCore19NavigationScheduler6cancelEb((HEAP32[i1 >> 2] | 0) + 376 | 0, 1);
 i3 = HEAP32[i2 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 360 >> 2] & 127](i3);
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i2 = i3 + 4 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 }
 i2 = i1 + 52 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i3;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 + 4 | 0;
   i2 = i3 | 0;
   i6 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i2 >> 2] = i6;
    break;
   }
   i6 = i3 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 127](i6);
  }
 } while (0);
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore11FrameLoader14detachChildrenEv(i1);
  return;
 }
 i4 = i5 + 4 | 0;
 i5 = i4 | 0;
 i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i6 | 0) != 0) {
  HEAP32[i5 >> 2] = i6;
  __ZN7WebCore11FrameLoader14detachChildrenEv(i1);
  return;
 }
 i6 = i4 - 4 | 0;
 if ((i6 | 0) == 0) {
  __ZN7WebCore11FrameLoader14detachChildrenEv(i1);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 127](i6);
 __ZN7WebCore11FrameLoader14detachChildrenEv(i1);
 return;
}
function __ZN7WebCore20ResourceResponseBaseD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 112 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 __ZN7WebCore13HTTPHeaderMapD1Ev(i1 + 80 | 0);
 i2 = HEAP32[i1 + 76 >> 2] | 0;
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
 i2 = HEAP32[i1 + 64 >> 2] | 0;
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
 i2 = HEAP32[i1 + 48 >> 2] | 0;
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
 i2 = HEAP32[i1 >> 2] | 0;
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
function __ZNK7WebCore16ScriptController19existingWindowShellERNS_15DOMWrapperWorldE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = HEAP32[i1 + 4 >> 2] | 0;
  i5 = i4 << 3 | 0;
  i6 = 0;
  i7 = i4;
 } else {
  i4 = HEAP32[i1 + 8 >> 2] | 0;
  i8 = i2;
  i9 = i8 + ~(i8 << 15) | 0;
  i8 = (i9 >>> 10 ^ i9) * 9 & -1;
  i9 = i8 >>> 6 ^ i8;
  i8 = i9 + ~(i9 << 11) | 0;
  i9 = i8 >>> 16 ^ i8;
  i8 = i4 & i9;
  i10 = i3 + (i8 << 3) | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  L3 : do {
   if ((i11 | 0) == (i2 | 0)) {
    i12 = i10;
   } else {
    i13 = (i9 >>> 23) + ~i9 | 0;
    i14 = i13 << 12 ^ i13;
    i13 = i14 >>> 7 ^ i14;
    i14 = i13 << 2 ^ i13;
    i13 = i14 >>> 20 ^ i14 | 1;
    i14 = 0;
    i15 = i8;
    i16 = i11;
    while (1) {
     if ((i16 | 0) == 0) {
      i12 = 0;
      break L3;
     }
     i17 = (i14 | 0) == 0 ? i13 : i14;
     i18 = i17 + i15 & i4;
     i19 = i3 + (i18 << 3) | 0;
     i20 = HEAP32[i19 >> 2] | 0;
     if ((i20 | 0) == (i2 | 0)) {
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
  i2 = HEAP32[i1 + 4 >> 2] | 0;
  i5 = (i12 | 0) == 0 ? i3 + (i2 << 3) | 0 : i12;
  i6 = i3;
  i7 = i2;
 }
 if ((i5 | 0) == (i6 + (i7 << 3) | 0)) {
  i21 = 0;
  return i21 | 0;
 }
 i7 = HEAP32[i5 + 4 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i21 = 0;
  return i21 | 0;
 }
 if ((HEAP32[i7 + 4 >> 2] | 0) == -6) {
  i21 = 0;
  return i21 | 0;
 }
 i21 = HEAP32[i7 >> 2] | 0;
 return i21 | 0;
}
function __ZN7WebCore11FrameLoader10didOpenURLEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i1 | 0;
 if (__ZN7WebCore19NavigationScheduler27redirectScheduledDuringLoadEv((HEAP32[i5 >> 2] | 0) + 376 | 0) | 0) {
  i6 = 0;
  STACKTOP = i2;
  return i6 | 0;
 }
 __ZN7WebCore19NavigationScheduler6cancelEb((HEAP32[i5 >> 2] | 0) + 376 | 0, 0);
 __ZN7WebCore6Editor20clearLastEditCommandEv(HEAP32[(HEAP32[i5 >> 2] | 0) + 464 >> 2] | 0);
 HEAP8[i1 + 76 | 0] = 0;
 HEAP8[i1 + 69 | 0] = 0;
 do {
  if (!(__ZNK7WebCore23FrameLoaderStateMachine28creatingInitialEmptyDocumentEv(i1 + 24 | 0) | 0)) {
   i7 = HEAP32[(HEAP32[(HEAP32[i5 >> 2] | 0) + 456 >> 2] | 0) + 336 >> 2] | 0;
   i8 = i3 | 0;
   HEAP32[i8 >> 2] = 0;
   __ZN7WebCore9DOMWindow9setStatusERKN3WTF6StringE(i7, i3);
   i9 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
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
   i9 = i4 | 0;
   HEAP32[i9 >> 2] = 0;
   __ZN7WebCore9DOMWindow16setDefaultStatusERKN3WTF6StringE(i7, i4);
   i10 = HEAP32[i9 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   i9 = i10 | 0;
   i8 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i9 >> 2] = i8;
    break;
   }
  }
 } while (0);
 __ZN7WebCore11FrameLoader7startedEv(i1);
 i6 = 1;
 STACKTOP = i2;
 return i6 | 0;
}
function __ZN7WebCore11FrameLoader40dispatchDidClearWindowObjectsInAllWorldsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 if (!(__ZN7WebCore16ScriptController17canExecuteScriptsENS_33ReasonForCallingCanExecuteScriptsE(HEAP32[(HEAP32[i1 >> 2] | 0) + 460 >> 2] | 0, 1) | 0)) {
  STACKTOP = i2;
  return;
 }
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = 0;
 i5 = i3 + 4 | 0;
 HEAP32[i5 >> 2] = 0;
 i6 = i3 + 8 | 0;
 HEAP32[i6 >> 2] = 0;
 __ZN7WebCore16ScriptController12getAllWorldsERN3WTF6VectorINS1_3RefINS_15DOMWrapperWorldEEELj0ENS1_15CrashOnOverflowEEE(i3);
 do {
  if ((HEAP32[i6 >> 2] | 0) != 0) {
   i3 = 0;
   while (1) {
    __ZN7WebCore11FrameLoader35dispatchDidClearWindowObjectInWorldERNS_15DOMWrapperWorldE(i1, HEAP32[(HEAP32[i4 >> 2] | 0) + (i3 << 2) >> 2] | 0);
    i3 = i3 + 1 | 0;
    i7 = HEAP32[i6 >> 2] | 0;
    if (i3 >>> 0 >= i7 >>> 0) {
     break;
    }
   }
   if ((i7 | 0) == 0) {
    break;
   }
   i3 = HEAP32[i4 >> 2] | 0;
   i8 = i3 + (i7 << 2) | 0;
   i9 = i3;
   while (1) {
    i3 = HEAP32[i9 >> 2] | 0;
    i10 = i3 | 0;
    i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
    if ((i11 | 0) == 0) {
     __ZN7WebCore15DOMWrapperWorldD1Ev(i3);
     __ZN3WTF8fastFreeEPv(i3);
    } else {
     HEAP32[i10 >> 2] = i11;
    }
    i9 = i9 + 4 | 0;
    if ((i9 | 0) == (i8 | 0)) {
     break;
    }
   }
   HEAP32[i6 >> 2] = 0;
  }
 } while (0);
 i6 = HEAP32[i4 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i5 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i6);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore11FrameLoader21reloadWithOverrideURLERKNS_3URLEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 184 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i1 + 48 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i7 = HEAP32[i2 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i7 + 4 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i7 = __ZN7WebCore14DocumentLoader7requestEv(i6) | 0;
 i6 = i5 | 0;
 __ZN7WebCore19ResourceRequestBaseC2ERKS0_(i6, i7 | 0);
 i8 = HEAP32[i7 + 160 >> 2] | 0;
 HEAP32[i5 + 160 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i9 = i8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
 }
 i9 = HEAP32[i7 + 164 >> 2] | 0;
 HEAP32[i5 + 164 >> 2] = i9;
 if ((i9 | 0) != 0) {
  i8 = i9 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 i8 = HEAP32[i7 + 168 >> 2] | 0;
 HEAP32[i5 + 168 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i9 = i8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
 }
 i9 = HEAP32[i7 + 172 >> 2] | 0;
 HEAP32[i5 + 172 >> 2] = i9;
 if ((i9 | 0) != 0) {
  i8 = i9 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 HEAP8[i5 + 176 | 0] = HEAP8[i7 + 176 | 0] & 1;
 HEAP8[i5 + 177 | 0] = HEAP8[i7 + 177 | 0] & 1;
 HEAP8[i5 + 178 | 0] = HEAP8[i7 + 178 | 0] & 1;
 HEAP32[i5 + 180 >> 2] = HEAP32[i7 + 180 >> 2];
 __ZN7WebCore19ResourceRequestBase6setURLERKNS_3URLE(i6, i2);
 __ZN7WebCore11FrameLoader17reloadWithRequestERKNS_15ResourceRequestEb(i1, i5, i3);
 __ZN7WebCore15ResourceRequestD2Ev(i5);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore11FrameLoaderC2ERNS_5FrameERNS_17FrameLoaderClientE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i1 >> 2] = i2;
 HEAP32[i1 + 4 >> 2] = i3;
 i3 = __Znwj(472) | 0;
 __ZN7WebCore13PolicyCheckerC1ERNS_5FrameE(i3, i2);
 HEAP32[i1 + 8 >> 2] = i3;
 i3 = __Znwj(28) | 0;
 __ZN7WebCore17HistoryControllerC1ERNS_5FrameE(i3, i2);
 HEAP32[i1 + 12 >> 2] = i3;
 __ZN7WebCore20ResourceLoadNotifierC1ERNS_5FrameE(i1 + 16 | 0, i2);
 i3 = __Znwj(8) | 0;
 __ZN7WebCore14SubframeLoaderC1ERNS_5FrameE(i3, i2);
 HEAP32[i1 + 20 >> 2] = i3;
 __ZN7WebCore23FrameLoaderStateMachineC1Ev(i1 + 24 | 0);
 i3 = __ZN3WTF10fastMallocEj(12) | 0;
 __ZN7WebCore14IconControllerC1ERNS_5FrameE(i3, i2);
 HEAP32[i1 + 28 >> 2] = i3;
 __ZN7WebCore19MixedContentCheckerC1ERNS_5FrameE(i1 + 32 | 0, i2);
 _memset(i1 + 36 | 0, 0, 33) | 0;
 HEAP8[i1 + 69 | 0] = 1;
 HEAP8[i1 + 70 | 0] = 0;
 HEAP32[i1 + 72 >> 2] = 0;
 HEAP8[i1 + 76 | 0] = 0;
 HEAP32[i1 + 80 >> 2] = 0;
 HEAP8[i1 + 84 | 0] = 0;
 i2 = i1 + 88 | 0;
 HEAP32[i2 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i2);
 i2 = i1 + 136 | 0;
 __ZN7WebCore9TimerBaseC2Ev(i2);
 HEAP32[i2 >> 2] = H_BASE + 1496;
 HEAP32[i1 + 180 >> 2] = i1;
 i2 = i1 + 184 | 0;
 HEAP32[i2 >> 2] = F_BASE_vii + 30;
 HEAP32[i2 + 4 >> 2] = 0;
 HEAP8[i1 + 192 | 0] = 0;
 HEAP8[i1 + 193 | 0] = 0;
 HEAP32[i1 + 228 >> 2] = 0;
 HEAP32[i1 + 232 >> 2] = 0;
 i2 = i1 + 236 | 0;
 HEAP32[i2 >> 2] = 0;
 _memset(i1 + 196 | 0, 0, 29) | 0;
 __ZN7WebCore3URL10invalidateEv(i2);
 HEAP32[i1 + 284 >> 2] = 0;
 HEAP32[i1 + 288 >> 2] = 0;
 return;
}
function __ZN7WebCore11FrameLoaderC1ERNS_5FrameERNS_17FrameLoaderClientE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i1 >> 2] = i2;
 HEAP32[i1 + 4 >> 2] = i3;
 i3 = __Znwj(472) | 0;
 __ZN7WebCore13PolicyCheckerC1ERNS_5FrameE(i3, i2);
 HEAP32[i1 + 8 >> 2] = i3;
 i3 = __Znwj(28) | 0;
 __ZN7WebCore17HistoryControllerC1ERNS_5FrameE(i3, i2);
 HEAP32[i1 + 12 >> 2] = i3;
 __ZN7WebCore20ResourceLoadNotifierC1ERNS_5FrameE(i1 + 16 | 0, i2);
 i3 = __Znwj(8) | 0;
 __ZN7WebCore14SubframeLoaderC1ERNS_5FrameE(i3, i2);
 HEAP32[i1 + 20 >> 2] = i3;
 __ZN7WebCore23FrameLoaderStateMachineC1Ev(i1 + 24 | 0);
 i3 = __ZN3WTF10fastMallocEj(12) | 0;
 __ZN7WebCore14IconControllerC1ERNS_5FrameE(i3, i2);
 HEAP32[i1 + 28 >> 2] = i3;
 __ZN7WebCore19MixedContentCheckerC1ERNS_5FrameE(i1 + 32 | 0, i2);
 _memset(i1 + 36 | 0, 0, 33) | 0;
 HEAP8[i1 + 69 | 0] = 1;
 HEAP8[i1 + 70 | 0] = 0;
 HEAP32[i1 + 72 >> 2] = 0;
 HEAP8[i1 + 76 | 0] = 0;
 HEAP32[i1 + 80 >> 2] = 0;
 HEAP8[i1 + 84 | 0] = 0;
 i2 = i1 + 88 | 0;
 HEAP32[i2 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i2);
 i2 = i1 + 136 | 0;
 __ZN7WebCore9TimerBaseC2Ev(i2);
 HEAP32[i2 >> 2] = H_BASE + 1496;
 HEAP32[i1 + 180 >> 2] = i1;
 i2 = i1 + 184 | 0;
 HEAP32[i2 >> 2] = F_BASE_vii + 30;
 HEAP32[i2 + 4 >> 2] = 0;
 HEAP8[i1 + 192 | 0] = 0;
 HEAP8[i1 + 193 | 0] = 0;
 HEAP32[i1 + 228 >> 2] = 0;
 HEAP32[i1 + 232 >> 2] = 0;
 i2 = i1 + 236 | 0;
 HEAP32[i2 >> 2] = 0;
 _memset(i1 + 196 | 0, 0, 29) | 0;
 __ZN7WebCore3URL10invalidateEv(i2);
 HEAP32[i1 + 284 >> 2] = 0;
 HEAP32[i1 + 288 >> 2] = 0;
 return;
}
function __ZN7WebCore11FrameLoader8setStateENS_10FrameStateE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, d5 = +0;
 HEAP32[i1 + 40 >> 2] = i2;
 if ((i2 | 0) == 2) {
  i3 = HEAP32[i1 + 4 >> 2] | 0;
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 348 >> 2] & 127](i3);
  __ZN7WebCore17HistoryController27updateForFrameLoadCompletedEv(HEAP32[i1 + 12 >> 2] | 0);
  i3 = i1 + 48 | 0;
  do {
   if ((HEAP32[i3 >> 2] | 0) != 0) {
    i4 = i1 + 24 | 0;
    if (!(__ZNK7WebCore23FrameLoaderStateMachine30committedFirstRealDocumentLoadEv(i4) | 0)) {
     break;
    }
    if (__ZNK7WebCore23FrameLoaderStateMachine32isDisplayingInitialEmptyDocumentEv(i4) | 0) {
     break;
    }
    if (__ZNK7WebCore23FrameLoaderStateMachine15firstLayoutDoneEv(i4) | 0) {
     break;
    }
    __ZN7WebCore23FrameLoaderStateMachine9advanceToENS0_5StateE(i4, 4);
   }
  } while (0);
  d5 = +__ZN3WTF27monotonicallyIncreasingTimeEv();
  HEAPF64[H_BASE + 2088 >> 3] = d5;
  i4 = HEAP32[i3 >> 2] | 0;
  if ((i4 | 0) == 0) {
   return;
  }
  __ZN7WebCore14DocumentLoader22stopRecordingResponsesEv(i4);
  return;
 } else if ((i2 | 0) == 0) {
  i2 = i1 + 24 | 0;
  if (__ZNK7WebCore23FrameLoaderStateMachine15firstLayoutDoneEv(i2) | 0) {
   __ZN7WebCore23FrameLoaderStateMachine9advanceToENS0_5StateE(i2, 3);
  }
  __ZN7WebCore19NavigationScheduler6cancelEb((HEAP32[i1 >> 2] | 0) + 376 | 0, 1);
  i2 = HEAP32[i1 + 4 >> 2] | 0;
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 360 >> 2] & 127](i2);
  return;
 } else {
  return;
 }
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
function __ZN7WebCore11FrameLoader40dispatchGlobalObjectAvailableInAllWorldsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = 0;
 i5 = i3 + 4 | 0;
 HEAP32[i5 >> 2] = 0;
 i6 = i3 + 8 | 0;
 HEAP32[i6 >> 2] = 0;
 __ZN7WebCore16ScriptController12getAllWorldsERN3WTF6VectorINS1_3RefINS_15DOMWrapperWorldEEELj0ENS1_15CrashOnOverflowEEE(i3);
 do {
  if ((HEAP32[i6 >> 2] | 0) != 0) {
   i3 = i1 + 4 | 0;
   i7 = 0;
   while (1) {
    i8 = HEAP32[i3 >> 2] | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i8 >> 2] | 0) + 516 >> 2] & 63](i8, HEAP32[(HEAP32[i4 >> 2] | 0) + (i7 << 2) >> 2] | 0);
    i7 = i7 + 1 | 0;
    i9 = HEAP32[i6 >> 2] | 0;
    if (i7 >>> 0 >= i9 >>> 0) {
     break;
    }
   }
   if ((i9 | 0) == 0) {
    break;
   }
   i7 = HEAP32[i4 >> 2] | 0;
   i3 = i7 + (i9 << 2) | 0;
   i8 = i7;
   while (1) {
    i7 = HEAP32[i8 >> 2] | 0;
    i10 = i7 | 0;
    i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
    if ((i11 | 0) == 0) {
     __ZN7WebCore15DOMWrapperWorldD1Ev(i7);
     __ZN3WTF8fastFreeEPv(i7);
    } else {
     HEAP32[i10 >> 2] = i11;
    }
    i8 = i8 + 4 | 0;
    if ((i8 | 0) == (i3 | 0)) {
     break;
    }
   }
   HEAP32[i6 >> 2] = 0;
  }
 } while (0);
 i6 = HEAP32[i4 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i5 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i6);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore11FrameLoader37resetMultipleFormSubmissionProtectionEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i3 = i2 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i3);
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 i6 = i1 + 88 | 0;
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
 i7 = HEAP8[i3 + 4 | 0] | 0;
 i6 = i1 + 92 | 0;
 HEAP8[i6] = HEAP8[i6] & -4 | i7 & 1 | i7 & 2;
 HEAP32[i1 + 96 >> 2] = HEAP32[i3 + 8 >> 2];
 HEAP32[i1 + 100 >> 2] = HEAP32[i3 + 12 >> 2];
 HEAP32[i1 + 104 >> 2] = HEAP32[i3 + 16 >> 2];
 HEAP32[i1 + 108 >> 2] = HEAP32[i3 + 20 >> 2];
 HEAP32[i1 + 112 >> 2] = HEAP32[i3 + 24 >> 2];
 HEAP32[i1 + 116 >> 2] = HEAP32[i3 + 28 >> 2];
 HEAP32[i1 + 120 >> 2] = HEAP32[i3 + 32 >> 2];
 HEAP32[i1 + 124 >> 2] = HEAP32[i3 + 36 >> 2];
 HEAP32[i1 + 128 >> 2] = HEAP32[i3 + 40 >> 2];
 HEAP32[i1 + 132 >> 2] = HEAP32[i3 + 44 >> 2];
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i3 | 0;
 i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i3);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i4 >> 2] = i1;
  STACKTOP = i2;
  return;
 }
}
function __ZNK7WebCore11FrameLoader29shouldTreatURLAsSameAsCurrentERKNS_3URLE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i4 = i3 | 0;
 i5 = i3 + 48 | 0;
 i6 = i1 + 12 | 0;
 i1 = HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i7 = 0;
  STACKTOP = i3;
  return i7 | 0;
 }
 __ZNK7WebCore11HistoryItem3urlEv(i4, i1);
 i1 = i2 | 0;
 i2 = i4 | 0;
 do {
  if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i1 >> 2] | 0, HEAP32[i2 >> 2] | 0) | 0) {
   i8 = 1;
  } else {
   __ZNK7WebCore11HistoryItem11originalURLEv(i5, HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] | 0);
   i4 = i5 | 0;
   i9 = __ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i1 >> 2] | 0, HEAP32[i4 >> 2] | 0) | 0;
   i10 = HEAP32[i4 >> 2] | 0;
   if ((i10 | 0) == 0) {
    i8 = i9;
    break;
   }
   i4 = i10 | 0;
   i11 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    i8 = i9;
    break;
   } else {
    HEAP32[i4 >> 2] = i11;
    i8 = i9;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i7 = i8;
  STACKTOP = i3;
  return i7 | 0;
 }
 i2 = i1 | 0;
 i5 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  i7 = i8;
  STACKTOP = i3;
  return i7 | 0;
 } else {
  HEAP32[i2 >> 2] = i5;
  i7 = i8;
  STACKTOP = i3;
  return i7 | 0;
 }
 return 0;
}
function __ZN7WebCore11FrameLoader34shouldReloadToHandleUnreachableURLEPNS_14DocumentLoaderE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = HEAP32[(__ZNK7WebCore14DocumentLoader14unreachableURLEv(i2) | 0) >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i2 = i3 | 0;
 i5 = (HEAP32[i2 >> 2] | 0) + 2 | 0;
 HEAP32[i2 >> 2] = i5;
 if ((HEAP32[i3 + 4 >> 2] | 0) == 0) {
  i6 = 0;
  i7 = i5;
 } else {
  i5 = HEAP32[i1 + 8 >> 2] | 0;
  L6 : do {
   if (((HEAP32[i5 + 8 >> 2] | 0) - 1 | 0) >>> 0 < 3 >>> 0) {
    do {
     if ((HEAP8[i5 + 4 | 0] & 1) == 0) {
      if ((HEAP8[i5 + 5 | 0] & 1) != 0) {
       i8 = 6;
       break;
      }
      if ((HEAP8[i1 + 60 | 0] & 1) == 0) {
       i9 = 0;
       break L6;
      }
      i10 = i1 + 52 | 0;
     } else {
      i8 = 6;
     }
    } while (0);
    if ((i8 | 0) == 6) {
     i10 = i1 + 56 | 0;
    }
    i11 = HEAP32[i10 >> 2] | 0;
    if ((i11 | 0) == 0) {
     i9 = 0;
     break;
    }
    i9 = __ZN3WTF5equalEPKNS_10StringImplES2_(i3, HEAP32[(__ZNK7WebCore19ResourceRequestBase3urlEv(__ZN7WebCore14DocumentLoader7requestEv(i11) | 0) | 0) >> 2] | 0) | 0;
   } else {
    i9 = 0;
   }
  } while (0);
  i6 = i9;
  i7 = HEAP32[i2 >> 2] | 0;
 }
 i9 = i7 - 2 | 0;
 if ((i9 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i3);
  i4 = i6;
  return i4 | 0;
 } else {
  HEAP32[i2 >> 2] = i9;
  i4 = i6;
  return i4 | 0;
 }
 return 0;
}
function __ZN7WebCore19ResourceRequestBaseC2ERKNS_3URLENS_26ResourceRequestCachePolicyE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i7 = i6 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = i2 + 4 | 0;
 i6 = i1 + 4 | 0;
 i8 = HEAP8[i6] & -2 | HEAP8[i7] & 1;
 HEAP8[i6] = i8;
 HEAP8[i6] = i8 & -3 | HEAP8[i7] & 2;
 HEAP32[i1 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAP32[i1 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
 HEAP32[i1 + 16 >> 2] = HEAP32[i2 + 16 >> 2];
 HEAP32[i1 + 20 >> 2] = HEAP32[i2 + 20 >> 2];
 HEAP32[i1 + 24 >> 2] = HEAP32[i2 + 24 >> 2];
 HEAP32[i1 + 28 >> 2] = HEAP32[i2 + 28 >> 2];
 HEAP32[i1 + 32 >> 2] = HEAP32[i2 + 32 >> 2];
 HEAP32[i1 + 36 >> 2] = HEAP32[i2 + 36 >> 2];
 HEAP32[i1 + 40 >> 2] = HEAP32[i2 + 40 >> 2];
 HEAP32[i1 + 44 >> 2] = HEAP32[i2 + 44 >> 2];
 HEAP32[i1 + 48 >> 2] = i3;
 HEAPF64[i1 + 56 >> 3] = +HEAPF64[__ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE >> 3];
 i3 = i1 + 64 | 0;
 HEAP32[i3 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i3);
 HEAP32[i5 >> 2] = H_BASE + 920;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i1 + 112 | 0, i5);
 __ZN7WebCore13HTTPHeaderMapC1Ev(i1 + 116 | 0);
 _memset(i1 + 136 | 0, 0, 16) | 0;
 HEAP8[i1 + 152 | 0] = 11;
 HEAP32[i1 + 156 >> 2] = 1;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore11FrameLoader14didChangeTitleEPNS_14DocumentLoaderE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i1 + 4 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i6 >> 2] | 0) + 248 >> 2] & 63](i6, i2);
 if ((HEAP32[i1 + 48 >> 2] | 0) == (i2 | 0)) {
  i6 = i2 + 980 | 0;
  __ZN7WebCore17HistoryController19setCurrentItemTitleERKNS_19StringWithDirectionE(HEAP32[i1 + 12 >> 2] | 0, i6);
  i7 = HEAP32[i5 >> 2] | 0;
  i8 = HEAP32[(HEAP32[i7 >> 2] | 0) + 376 >> 2] | 0;
  __ZNK7WebCore14DocumentLoader13urlForHistoryEv(i4, i2);
  FUNCTION_TABLE_viii[i8 & 3](i7, i6, i4);
  i7 = HEAP32[i4 >> 2] | 0;
  do {
   if ((i7 | 0) != 0) {
    i4 = i7 | 0;
    i8 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
    if ((i8 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i7);
     break;
    } else {
     HEAP32[i4 >> 2] = i8;
     break;
    }
   }
  } while (0);
  i7 = HEAP32[i5 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i7 >> 2] | 0) + 236 >> 2] & 63](i7, 1);
  i7 = HEAP32[i5 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i7 >> 2] | 0) + 132 >> 2] & 63](i7, i6);
 }
 i6 = HEAP32[i1 >> 2] | 0;
 if ((HEAP32[i6 + 28 >> 2] | 0) != (i6 | 0)) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore4Page35remoteInspectorInformationDidChangeEv(HEAP32[i6 + 32 >> 2] | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore14SubstituteDataD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 60 >> 2] | 0;
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
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore12SharedBufferD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZN7WebCore11FrameLoader22findFrameForNavigationERKN3WTF12AtomicStringEPNS_8DocumentE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = i1 | 0;
 i1 = __ZNK7WebCore9FrameTree4findERKN3WTF12AtomicStringE((HEAP32[i4 >> 2] | 0) + 40 | 0, i2) | 0;
 L1 : do {
  if ((i1 | 0) == (HEAP32[i4 >> 2] | 0)) {
   if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i2 >> 2] | 0, H_BASE + 1200 | 0) | 0) {
    i5 = i1;
    break;
   }
   if (!(__ZNK7WebCore8Document33shouldDisplaySeamlesslyWithParentEv(HEAP32[(HEAP32[i4 >> 2] | 0) + 456 >> 2] | 0) | 0)) {
    i5 = i1;
    break;
   }
   i6 = HEAP32[i4 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i5 = i1;
    break;
   } else {
    i7 = i6;
   }
   while (1) {
    if (!(__ZNK7WebCore8Document33shouldDisplaySeamlesslyWithParentEv(HEAP32[i7 + 456 >> 2] | 0) | 0)) {
     i5 = i7;
     break L1;
    }
    i6 = __ZNK7WebCore9FrameTree6parentEv(i7 + 40 | 0) | 0;
    if ((i6 | 0) == 0) {
     i5 = i1;
     break;
    } else {
     i7 = i6;
    }
   }
  } else {
   i5 = i1;
  }
 } while (0);
 if ((i3 | 0) != 0) {
  i8 = i3;
  i9 = __ZN7WebCore8Document11canNavigateEPNS_5FrameE(i8, i5) | 0;
  i10 = i9 ? i5 : 0;
  return i10 | 0;
 }
 i8 = HEAP32[(HEAP32[i4 >> 2] | 0) + 456 >> 2] | 0;
 i9 = __ZN7WebCore8Document11canNavigateEPNS_5FrameE(i8, i5) | 0;
 i10 = i9 ? i5 : 0;
 return i10 | 0;
}
function __ZN3WTF10makeStringINS_6StringEPKcS1_EES1_T_T0_T1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i7 | 0;
 i10 = HEAP32[i2 >> 2] | 0;
 HEAP32[i9 >> 2] = i10;
 if ((i10 | 0) != 0) {
  i2 = i10 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 i2 = i8 | 0;
 i10 = HEAP32[i4 >> 2] | 0;
 HEAP32[i2 >> 2] = i10;
 if ((i10 | 0) != 0) {
  i4 = i10 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 __ZN3WTF13tryMakeStringINS_6StringEPKcS1_EENS_10PassRefPtrINS_10StringImplEEET_T0_T1_(i6, i7, i3, i8);
 i8 = i6 | 0;
 i6 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 i8 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i2 = i8 | 0;
   i3 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i2 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i8 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i9 = i8 | 0;
   i3 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i9 >> 2] = i3;
    break;
   }
  }
 } while (0);
 if ((i6 | 0) == 0) {
  _WTFCrash();
 } else {
  HEAP32[i1 >> 2] = i6;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore15ResourceRequestD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 172 >> 2] | 0;
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
 i2 = HEAP32[i1 + 168 >> 2] | 0;
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
 i2 = HEAP32[i1 + 164 >> 2] | 0;
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
 i2 = HEAP32[i1 + 160 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i5 = i1 | 0;
  __ZN7WebCore19ResourceRequestBaseD2Ev(i5);
  return;
 }
 i4 = i2 | 0;
 i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  i5 = i1 | 0;
  __ZN7WebCore19ResourceRequestBaseD2Ev(i5);
  return;
 } else {
  HEAP32[i4 >> 2] = i3;
  i5 = i1 | 0;
  __ZN7WebCore19ResourceRequestBaseD2Ev(i5);
  return;
 }
}
function __ZN7WebCore11FrameLoader21dispatchDidCommitLoadEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 if (__ZNK7WebCore23FrameLoaderStateMachine28creatingInitialEmptyDocumentEv(i1 + 24 | 0) | 0) {
  return;
 }
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 140 >> 2] & 127](i2);
 i2 = i1 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((HEAP32[i3 + 28 >> 2] | 0) == (i3 | 0)) {
  __ZN7WebCore4Page16resetSeenPluginsEv(HEAP32[i3 + 32 >> 2] | 0);
  __ZN7WebCore4Page21resetSeenMediaEnginesEv(HEAP32[(HEAP32[i2 >> 2] | 0) + 32 >> 2] | 0);
  i4 = HEAP32[i2 >> 2] | 0;
 } else {
  i4 = i3;
 }
 i3 = HEAP32[i1 + 48 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i1 = i4 + 32 | 0;
   i5 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(HEAP32[i1 >> 2] | 0) | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   __ZN7WebCore24InspectorInstrumentation17didCommitLoadImplEPNS_19InstrumentingAgentsEPNS_4PageEPNS_14DocumentLoaderE(i5, HEAP32[i1 >> 2] | 0, i3);
  }
 } while (0);
 i3 = HEAP32[i2 >> 2] | 0;
 if ((HEAP32[i3 + 28 >> 2] | 0) != (i3 | 0)) {
  return;
 }
 __ZN7WebCore15FeatureObserver13didCommitLoadEv((HEAP32[i3 + 32 >> 2] | 0) + 84 | 0);
 __ZNK7WebCore4Page35remoteInspectorInformationDidChangeEv(HEAP32[(HEAP32[i2 >> 2] | 0) + 32 >> 2] | 0);
 return;
}
function __ZN7WebCore11FrameLoader9completedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i3 + 4 | 0;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 i4 = HEAP32[i2 >> 2] | 0;
 i5 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i4 + 40 | 0, i4) | 0;
 if ((i5 | 0) != 0) {
  i4 = i5;
  while (1) {
   __ZN7WebCore19NavigationScheduler10startTimerEv(i4 + 376 | 0);
   i4 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i4 + 40 | 0, HEAP32[i2 >> 2] | 0) | 0;
   if ((i4 | 0) == 0) {
    break;
   }
  }
 }
 i4 = __ZNK7WebCore9FrameTree6parentEv((HEAP32[i2 >> 2] | 0) + 40 | 0) | 0;
 if ((i4 | 0) != 0) {
  __ZN7WebCore11FrameLoader14checkCompletedEv(i4 + 80 | 0);
 }
 i4 = HEAP32[(HEAP32[i2 >> 2] | 0) + 452 >> 2] | 0;
 if ((i4 | 0) != 0) {
  __ZN7WebCore9FrameView30maintainScrollPositionAtAnchorEPNS_4NodeE(i4, 0);
 }
 i4 = i1 + 288 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 if ((i1 | 0) != 0) {
  __ZN7WebCore26PageActivityAssertionTokenD1Ev(i1);
  __ZdlPv(i1);
 }
 i1 = i3 + 4 | 0;
 i3 = i1 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i3 >> 2] = i4;
  return;
 }
 i4 = i1 - 4 | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 127](i4);
 return;
}
function __ZN7WebCore11FrameLoader17setDocumentLoaderEPNS_14DocumentLoaderE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = (i2 | 0) == 0;
 do {
  if (i3) {
   i4 = i1 + 48 | 0;
   if ((HEAP32[i4 >> 2] | 0) == 0) {
    return;
   } else {
    i5 = HEAP32[i1 + 4 >> 2] | 0;
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 368 >> 2] & 127](i5);
    __ZN7WebCore11FrameLoader14detachChildrenEv(i1);
    i6 = i4;
    break;
   }
  } else {
   i4 = HEAP32[i1 + 4 >> 2] | 0;
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 368 >> 2] & 127](i4);
   __ZN7WebCore11FrameLoader14detachChildrenEv(i1);
   if ((HEAP32[i2 + 12 >> 2] | 0) == 0) {
    return;
   } else {
    i6 = i1 + 48 | 0;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i6 >> 2] | 0;
 if ((i1 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 40 >> 2] & 127](i1);
 }
 if (!i3) {
  i3 = i2 + 4 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 i3 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i2;
 if ((i3 | 0) == 0) {
  return;
 }
 i2 = i3 + 4 | 0;
 i3 = i2 | 0;
 i6 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i6 | 0) != 0) {
  HEAP32[i3 >> 2] = i6;
  return;
 }
 i6 = i2 - 4 | 0;
 if ((i6 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 127](i6);
 return;
}
function __ZN7WebCore11FrameLoader15finishedParsingEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 | 0;
 __ZN7WebCore5Frame17injectUserScriptsENS_23UserScriptInjectionTimeE(HEAP32[i2 >> 2] | 0, 1);
 if (__ZNK7WebCore23FrameLoaderStateMachine28creatingInitialEmptyDocumentEv(i1 + 24 | 0) | 0) {
  return;
 }
 i3 = HEAP32[i2 >> 2] | 0;
 if ((HEAP32[i3 + 452 >> 2] | 0) != 0 & (i3 | 0) != 0) {
  i4 = i3 + 4 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
  i5 = i3;
  i6 = 1;
 } else {
  i5 = 0;
  i6 = 0;
 }
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 152 >> 2] & 127](i3);
 __ZN7WebCore11FrameLoader14checkCompletedEv(i1);
 i3 = HEAP32[(HEAP32[i2 >> 2] | 0) + 452 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN7WebCore9FrameView16restoreScrollbarEv(i3);
  __ZN7WebCore11FrameLoader34scrollToFragmentWithParentBoundaryERKNS_3URLE(i1, (HEAP32[(HEAP32[i2 >> 2] | 0) + 456 >> 2] | 0) + 356 | 0);
 }
 if (!i6) {
  return;
 }
 i6 = i5 + 4 | 0;
 i5 = i6 | 0;
 i2 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i5 >> 2] = i2;
  return;
 }
 i2 = i6 - 4 | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 127](i2);
 return;
}
function __ZN7WebCore11FrameLoader35dispatchDidClearWindowObjectInWorldERNS_15DOMWrapperWorldE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = i1 | 0;
 if (!(__ZN7WebCore16ScriptController17canExecuteScriptsENS_33ReasonForCallingCanExecuteScriptsE(HEAP32[(HEAP32[i3 >> 2] | 0) + 460 >> 2] | 0, 1) | 0)) {
  return;
 }
 if ((__ZNK7WebCore16ScriptController19existingWindowShellERNS_15DOMWrapperWorldE(HEAP32[(HEAP32[i3 >> 2] | 0) + 460 >> 2] | 0, i2) | 0) == 0) {
  return;
 }
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 448 >> 2] & 63](i4, i2);
 i4 = HEAP32[i3 >> 2] | 0;
 i1 = HEAP32[i4 + 32 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i5 = i4;
 } else {
  __ZN7WebCore19InspectorController27didClearWindowObjectInWorldEPNS_5FrameERNS_15DOMWrapperWorldE(HEAP32[i1 + 40 >> 2] | 0, i4, i2);
  i5 = HEAP32[i3 >> 2] | 0;
 }
 if ((i5 | 0) == 0) {
  return;
 }
 i3 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(HEAP32[i5 + 32 >> 2] | 0) | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 __ZN7WebCore24InspectorInstrumentation31didClearWindowObjectInWorldImplEPNS_19InstrumentingAgentsEPNS_5FrameERNS_15DOMWrapperWorldE(i3, i5, i2);
 return;
}
function __ZN7WebCore11FrameLoader9setOpenerEPNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 + 196 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = (i2 | 0) == 0;
 if ((i7 | 0) != 0 & i8) {
  i9 = HEAP32[i1 + 4 >> 2] | 0;
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 280 >> 2] & 127](i9);
  i10 = HEAP32[i6 >> 2] | 0;
 } else {
  i10 = i7;
 }
 if ((i10 | 0) != 0) {
  HEAP32[i4 >> 2] = HEAP32[i1 >> 2];
  __ZN3WTF7HashSetIPN7WebCore5FrameENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i10 + 280 | 0, i4) | 0;
 }
 i4 = i1 | 0;
 if (!i8) {
  HEAP32[i5 >> 2] = HEAP32[i4 >> 2];
  __ZN3WTF9HashTableIPN7WebCore5FrameES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i3 + 16 | 0, i2 + 280 | 0, i5, i5);
 }
 HEAP32[i6 >> 2] = i2;
 i2 = HEAP32[(HEAP32[i4 >> 2] | 0) + 456 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore8Document19initSecurityContextEv(i2);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11FrameLoader27prepareForHistoryNavigationEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   i4 = __ZN3WTF10fastMallocEj(160) | 0;
   i5 = i4;
   __ZN7WebCore11HistoryItemC1Ev(i5);
   HEAP8[i4 + 80 | 0] = 1;
   __ZN7WebCore17HistoryController14setCurrentItemEPNS_11HistoryItemE(HEAP32[i2 >> 2] | 0, i5);
   __ZN7WebCore21BackForwardController14setCurrentItemEPNS_11HistoryItemE(HEAP32[(HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] | 0) + 56 >> 2] | 0, i5);
   i6 = i1 + 24 | 0;
   __ZN7WebCore23FrameLoaderStateMachine9advanceToENS0_5StateE(i6, 2);
   __ZN7WebCore23FrameLoaderStateMachine9advanceToENS0_5StateE(i6, 3);
   if ((i4 | 0) == 0) {
    return;
   } else {
    i7 = i5;
    i8 = HEAP32[i4 >> 2] | 0;
    break;
   }
  } else {
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
   HEAP32[i4 >> 2] = i5;
   i7 = i3;
   i8 = i5;
  }
 } while (0);
 i3 = i8 - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore11HistoryItemD1Ev(i7);
  __ZN3WTF8fastFreeEPv(i7);
  return;
 } else {
  HEAP32[i7 >> 2] = i3;
  return;
 }
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
function __ZN3WTF6VectorINSt3__14pairINS_6StringES3_EELj0ENS_15CrashOnOverflowEED2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 + 8 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 3) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 + 4 >> 2] | 0;
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
   i5 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i8 = i5 | 0;
     i7 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
     if ((i7 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i8 >> 2] = i7;
      break;
     }
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
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 return;
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
function __ZN7WebCore11FrameLoader28detachViewsAndDocumentLoaderEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 4 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 36 >> 2] & 127](i3);
 i3 = i1 + 48 | 0;
 do {
  if ((HEAP32[i3 >> 2] | 0) != 0) {
   i4 = HEAP32[i2 >> 2] | 0;
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 368 >> 2] & 127](i4);
   __ZN7WebCore11FrameLoader14detachChildrenEv(i1);
   i4 = HEAP32[i3 >> 2] | 0;
   if ((i4 | 0) == 0) {
    HEAP32[i3 >> 2] = 0;
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 40 >> 2] & 127](i4);
   i4 = HEAP32[i3 >> 2] | 0;
   HEAP32[i3 >> 2] = 0;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 127](i6);
  }
 } while (0);
 i3 = HEAP32[i2 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 40 >> 2] & 127](i3);
 return;
}
function __ZN7WebCore11FrameLoader34scrollToFragmentWithParentBoundaryERKNS_3URLE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i1 | 0;
 i1 = HEAP32[(HEAP32[i3 >> 2] | 0) + 452 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 do {
  if (__ZNK7WebCore3URL21hasFragmentIdentifierEv(i2) | 0) {
   i4 = __ZN7WebCore8Document41findUnsafeParentScrollPropagationBoundaryEv(HEAP32[(HEAP32[i3 >> 2] | 0) + 456 >> 2] | 0) | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   i5 = i4 + 4 | 0;
   HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
   i5 = i4 + 452 | 0;
   HEAP8[(HEAP32[i5 >> 2] | 0) + 434 | 0] = 0;
   __ZN7WebCore9FrameView16scrollToFragmentERKNS_3URLE(i1, i2) | 0;
   HEAP8[(HEAP32[i5 >> 2] | 0) + 434 | 0] = 1;
   i5 = i4 + 4 | 0;
   i4 = i5 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i4 >> 2] = i6;
    return;
   }
   i6 = i5 - 4 | 0;
   if ((i6 | 0) == 0) {
    return;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 127](i6);
   return;
  }
 } while (0);
 __ZN7WebCore9FrameView16scrollToFragmentERKNS_3URLE(i1, i2) | 0;
 return;
}
function __ZN7WebCore11FrameLoader20clearProvisionalLoadEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = i1 + 52 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   HEAP32[i2 >> 2] = 0;
  } else {
   if ((i3 | 0) == (HEAP32[i1 + 48 >> 2] | 0)) {
    HEAP32[i2 >> 2] = 0;
    i4 = i3;
   } else {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 40 >> 2] & 127](i3);
    i5 = HEAP32[i2 >> 2] | 0;
    HEAP32[i2 >> 2] = 0;
    if ((i5 | 0) == 0) {
     break;
    } else {
     i4 = i5;
    }
   }
   i5 = i4 + 4 | 0;
   i6 = i5 | 0;
   i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i6 >> 2] = i7;
    break;
   }
   i7 = i5 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 127](i7);
  }
 } while (0);
 i4 = HEAP32[i1 + 36 >> 2] | 0;
 HEAP8[i4 + 4 | 0] = 0;
 i2 = HEAP32[i4 >> 2] | 0;
 __ZN7WebCore15ProgressTracker17progressCompletedEPNS_5FrameE(HEAP32[(HEAP32[i2 + 32 >> 2] | 0) + 52 >> 2] | 0, i2);
 __ZN7WebCore11FrameLoader8setStateENS_10FrameStateE(i1, 2);
 return;
}
function __ZN7WebCore11FrameLoader19closeAndRemoveChildEPNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 HEAP32[i2 + 44 >> 2] = 0;
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = 0;
 __ZN7WebCore5Frame7setViewEN3WTF10PassRefPtrINS_9FrameViewEEE(i2, i4);
 i4 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i5 = i4 + 4 | 0;
   i6 = i5 | 0;
   i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i6 >> 2] = i7;
    break;
   }
   i7 = i5 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 127](i7);
  }
 } while (0);
 i4 = i2 + 32 | 0;
 do {
  if ((HEAP32[i2 + 448 >> 2] | 0) != 0) {
   i7 = HEAP32[i4 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   i5 = i7 + 88 | 0;
   HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) - 1;
  }
 } while (0);
 __ZN7WebCore5Frame14willDetachPageEv(i2);
 HEAP32[i4 >> 2] = 0;
 __ZN7WebCore9FrameTree11removeChildEPNS_5FrameE((HEAP32[i1 >> 2] | 0) + 40 | 0, i2);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11FrameLoader7startedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i5 + 32 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = i5;
 } else {
  __ZN7WebCore4Page19createActivityTokenEv(i3, i6);
  i6 = i3 | 0;
  i3 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = 0;
  i5 = i1 + 288 | 0;
  i1 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = i3;
  do {
   if ((i1 | 0) == 0) {
    HEAP32[i6 >> 2] = 0;
   } else {
    __ZN7WebCore26PageActivityAssertionTokenD1Ev(i1);
    __ZdlPv(i1);
    i3 = HEAP32[i6 >> 2] | 0;
    HEAP32[i6 >> 2] = 0;
    if ((i3 | 0) == 0) {
     break;
    }
    __ZN7WebCore26PageActivityAssertionTokenD1Ev(i3);
    __ZdlPv(i3);
   }
  } while (0);
  i7 = HEAP32[i4 >> 2] | 0;
 }
 if ((i7 | 0) == 0) {
  STACKTOP = i2;
  return;
 } else {
  i8 = i7;
 }
 while (1) {
  HEAP8[i8 + 156 | 0] = 0;
  i8 = __ZNK7WebCore9FrameTree6parentEv(i8 + 40 | 0) | 0;
  if ((i8 | 0) == 0) {
   break;
  }
 }
 STACKTOP = i2;
 return;
}
function __ZN7WebCore11FrameLoader23setPolicyDocumentLoaderEPNS_14DocumentLoaderE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i1 + 56 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == (i2 | 0)) {
  return;
 }
 i5 = (i2 | 0) == 0;
 if (i5) {
  i6 = i4;
 } else {
  __ZN7WebCore14DocumentLoader8setFrameEPNS_5FrameE(i2, HEAP32[i1 >> 2] | 0);
  i6 = HEAP32[i3 >> 2] | 0;
 }
 do {
  if ((i6 | 0) != 0) {
   if ((i6 | 0) == (HEAP32[i1 + 52 >> 2] | 0)) {
    break;
   }
   if ((i6 | 0) == (HEAP32[i1 + 48 >> 2] | 0)) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 40 >> 2] & 127](i6);
  }
 } while (0);
 if (!i5) {
  i5 = i2 + 4 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i2;
 if ((i5 | 0) == 0) {
  return;
 }
 i2 = i5 + 4 | 0;
 i5 = i2 | 0;
 i3 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i5 >> 2] = i3;
  return;
 }
 i3 = i2 - 4 | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 127](i3);
 return;
}
function __ZN7WebCore11FrameLoader8loadItemEPNS_11HistoryItemENS_13FrameLoadTypeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 if ((i2 | 0) != 0) {
  i4 = i2 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = i1 + 284 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) == 0) {
    __ZN7WebCore11HistoryItemD1Ev(i5);
    __ZN3WTF8fastFreeEPv(i5);
    break;
   } else {
    HEAP32[i4 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[(HEAP32[i1 + 12 >> 2] | 0) + 4 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   if (!(__ZNK7WebCore11HistoryItem32shouldDoSameDocumentNavigationToEPS0_(i2, i5) | 0)) {
    break;
   }
   __ZN7WebCore11FrameLoader20loadSameDocumentItemEPNS_11HistoryItemE(i1, i2);
   return;
  }
 } while (0);
 __ZN7WebCore11FrameLoader25loadDifferentDocumentItemEPNS_11HistoryItemENS_13FrameLoadTypeENS0_29FormSubmissionCacheLoadPolicyE(i1, i2, i3, 0);
 return;
}
function __ZN3WTF10RefCountedIN7WebCore9FormStateEE5derefEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = i3;
  return;
 }
 i3 = HEAP32[i1 + 20 >> 2] | 0;
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
 __ZN3WTF6VectorINSt3__14pairINS_6StringES3_EELj0ENS_15CrashOnOverflowEED2Ev(i1 + 8 | 0);
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 + 8 | 0;
   i5 = i2 | 0;
   i4 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i4;
   if ((i4 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore11FrameLoader31continueLoadAfterWillSubmitFormEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 52 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  return;
 }
 i3 = HEAP32[i1 + 36 >> 2] | 0;
 i4 = i3 + 4 | 0;
 if ((HEAP8[i4] & 1) == 0) {
  i5 = HEAP32[i3 >> 2] | 0;
  __ZN7WebCore15ProgressTracker15progressStartedEPNS_5FrameE(HEAP32[(HEAP32[i5 + 32 >> 2] | 0) + 52 >> 2] | 0, i5);
 }
 HEAP8[i4] = 1;
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 128 >> 2] & 127](i4);
 __ZNK7WebCore8Document21existingAXObjectCacheEv(HEAP32[(HEAP32[i1 >> 2] | 0) + 456 >> 2] | 0) | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 i5 = HEAP32[((HEAP32[i1 + 40 >> 2] | 0) == 0 ? i2 : i1 + 48 | 0) >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   if ((HEAP8[i5 + 1505 | 0] & 1) == 0) {
    break;
   }
   return;
  }
 } while (0);
 HEAP8[i1 + 221 | 0] = 0;
 __ZN7WebCore14DocumentLoader24startLoadingMainResourceEv(i4);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader15loadPostRequestERKNS2_15ResourceRequestERKN3WTF6StringESA_bNS2_13FrameLoadTypeENS7_10PassRefPtrINS2_5EventEEENSC_INS2_9FormStateEEEE3$_5NS_9allocatorISH_EEFvS6_SG_SA_RKNS2_16NavigationActionEbEEclES6_OSG_SA_SM_Ob_(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i8 = i7 | 0;
 i9 = i3 | 0;
 i3 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 i9 = (HEAP8[i6] & 1) != 0;
 i6 = HEAP32[i1 + 4 >> 2] | 0;
 i1 = i8 | 0;
 HEAP32[i1 >> 2] = i3;
 __ZN7WebCore11FrameLoader32continueLoadAfterNewWindowPolicyERKNS_15ResourceRequestEN3WTF10PassRefPtrINS_9FormStateEEERKNS4_6StringERKNS_16NavigationActionEb(i6, i2, i8, i4, i5, i9);
 i9 = HEAP32[i1 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 __ZN3WTF10RefCountedIN7WebCore9FormStateEE5derefEv(i9 | 0);
 STACKTOP = i7;
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader7loadURLERKNS2_3URLERKN3WTF6StringESA_bNS2_13FrameLoadTypeENS7_10PassRefPtrINS2_5EventEEENSC_INS2_9FormStateEEEE3$_0NS_9allocatorISH_EEFvRKNS2_15ResourceRequestESG_SA_RKNS2_16NavigationActionEbEEclESM_OSG_SA_SP_Ob_(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i8 = i7 | 0;
 i9 = i3 | 0;
 i3 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 i9 = (HEAP8[i6] & 1) != 0;
 i6 = HEAP32[i1 + 4 >> 2] | 0;
 i1 = i8 | 0;
 HEAP32[i1 >> 2] = i3;
 __ZN7WebCore11FrameLoader32continueLoadAfterNewWindowPolicyERKNS_15ResourceRequestEN3WTF10PassRefPtrINS_9FormStateEEERKNS4_6StringERKNS_16NavigationActionEb(i6, i2, i8, i4, i5, i9);
 i9 = HEAP32[i1 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 __ZN3WTF10RefCountedIN7WebCore9FormStateEE5derefEv(i9 | 0);
 STACKTOP = i7;
 return;
}
function __ZN7WebCore11FrameLoader33loadProvisionalItemFromCachedPageEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 104 | 0;
 i3 = i2 | 0;
 i4 = HEAP32[i1 + 52 >> 2] | 0;
 i5 = HEAP32[i1 + 36 >> 2] | 0;
 i6 = i5 + 4 | 0;
 if ((HEAP8[i6] & 1) == 0) {
  i7 = HEAP32[i5 >> 2] | 0;
  __ZN7WebCore15ProgressTracker15progressStartedEPNS_5FrameE(HEAP32[(HEAP32[i7 + 32 >> 2] | 0) + 52 >> 2] | 0, i7);
 }
 HEAP8[i6] = 1;
 i6 = HEAP32[i1 + 4 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 128 >> 2] & 127](i6);
 __ZNK7WebCore8Document21existingAXObjectCacheEv(HEAP32[(HEAP32[i1 >> 2] | 0) + 456 >> 2] | 0) | 0;
 HEAP8[i1 + 221 | 0] = 1;
 i6 = i4 + 1512 | 0;
 __ZN7WebCore18DocumentLoadTimingC1Ev(i3);
 _memcpy(i6 | 0, i3 | 0, 98) | 0;
 __ZN7WebCore18DocumentLoadTiming19markNavigationStartEv(i6);
 HEAP8[i4 + 973 | 0] = 1;
 __ZN7WebCore11FrameLoader21commitProvisionalLoadEv(i1);
 STACKTOP = i2;
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader4loadERKNS2_16FrameLoadRequestEE3$_2NS_9allocatorIS7_EEFvRKNS2_15ResourceRequestEN3WTF10PassRefPtrINS2_9FormStateEEERKNSD_6StringERKNS2_16NavigationActionEbEEclESC_OSG_SJ_SM_Ob_(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i8 = i7 | 0;
 i9 = i3 | 0;
 i3 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 i9 = (HEAP8[i6] & 1) != 0;
 i6 = HEAP32[i1 + 4 >> 2] | 0;
 i1 = i8 | 0;
 HEAP32[i1 >> 2] = i3;
 __ZN7WebCore11FrameLoader32continueLoadAfterNewWindowPolicyERKNS_15ResourceRequestEN3WTF10PassRefPtrINS_9FormStateEEERKNS4_6StringERKNS_16NavigationActionEb(i6, i2, i8, i4, i5, i9);
 i9 = HEAP32[i1 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 __ZN3WTF10RefCountedIN7WebCore9FormStateEE5derefEv(i9 | 0);
 STACKTOP = i7;
 return;
}
function __ZN7WebCore11FrameLoader31shouldPerformFragmentNavigationEbRKN3WTF6StringENS_13FrameLoadTypeERKNS_3URLE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0;
 do {
  if (i2) {
   if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i3 >> 2] | 0, H_BASE + 920 | 0) | 0) {
    break;
   } else {
    i6 = 0;
   }
   return i6 | 0;
  }
 } while (0);
 if ((i4 | 0) == 9 | (i4 | 0) == 6 | (i4 | 0) == 4) {
  i6 = 0;
  return i6 | 0;
 }
 i4 = i1 | 0;
 i1 = HEAP32[(HEAP32[i4 >> 2] | 0) + 456 >> 2] | 0;
 if (!(__ZNK7WebCore3URL21hasFragmentIdentifierEv(i5) | 0)) {
  i6 = 0;
  return i6 | 0;
 }
 if (!(__ZN7WebCore31equalIgnoringFragmentIdentifierERKNS_3URLES2_(i1 + 356 | 0, i5) | 0)) {
  i6 = 0;
  return i6 | 0;
 }
 i5 = HEAP32[(HEAP32[i4 >> 2] | 0) + 456 >> 2] | 0;
 i6 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 252 >> 2] & 31](i5) | 0) ^ 1;
 return i6 | 0;
}
function __ZN7WebCore11FrameLoader15checkTimerFiredEPNS_5TimerIS0_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i3 + 4 | 0;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 i4 = HEAP32[(HEAP32[i2 >> 2] | 0) + 32 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = 3;
 } else {
  if ((HEAP8[i4 + 98 | 0] & 1) == 0) {
   i5 = 3;
  }
 }
 do {
  if ((i5 | 0) == 3) {
   if ((HEAP8[i1 + 192 | 0] & 1) != 0) {
    __ZN7WebCore11FrameLoader14checkCompletedEv(i1);
   }
   if ((HEAP8[i1 + 193 | 0] & 1) == 0) {
    break;
   }
   __ZN7WebCore11FrameLoader17checkLoadCompleteEv(i1);
  }
 } while (0);
 i1 = i3 + 4 | 0;
 i3 = i1 | 0;
 i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i3 >> 2] = i5;
  return;
 }
 i5 = i1 - 4 | 0;
 if ((i5 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 127](i5);
 return;
}
function __ZNK7WebCore11FrameLoader17subframeIsLoadingEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = (HEAP32[i1 >> 2] | 0) + 68 | 0;
 while (1) {
  i1 = HEAP32[i2 >> 2] | 0;
  if ((i1 | 0) == 0) {
   i3 = 0;
   i4 = 9;
   break;
  }
  i5 = HEAP32[i1 + 128 >> 2] | 0;
  if ((i5 | 0) != 0) {
   if (__ZNK7WebCore14DocumentLoader19isLoadingInAPISenseEv(i5) | 0) {
    i3 = 1;
    i4 = 10;
    break;
   }
  }
  i5 = HEAP32[i1 + 132 >> 2] | 0;
  if ((i5 | 0) != 0) {
   if (__ZNK7WebCore14DocumentLoader19isLoadingInAPISenseEv(i5) | 0) {
    i3 = 1;
    i4 = 11;
    break;
   }
  }
  if ((HEAP32[i1 + 136 >> 2] | 0) == 0) {
   i2 = i1 + 60 | 0;
  } else {
   i3 = 1;
   i4 = 12;
   break;
  }
 }
 if ((i4 | 0) == 9) {
  return i3 | 0;
 } else if ((i4 | 0) == 10) {
  return i3 | 0;
 } else if ((i4 | 0) == 11) {
  return i3 | 0;
 } else if ((i4 | 0) == 12) {
  return i3 | 0;
 }
 return 0;
}
function __ZN7WebCore11FrameLoader19setOutgoingReferrerERKNS_3URLE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 __ZNK7WebCore3URL24strippedForUseAsReferrerEv(i4, i2);
 i2 = i4 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i5 = i1 + 64 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i4;
 do {
  if ((i1 | 0) != 0) {
   i4 = i1 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i4 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i2 = i1 | 0;
 i5 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i2 >> 2] = i5;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore11FrameLoader16setDefersLoadingEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i1 + 48 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN7WebCore14DocumentLoader16setDefersLoadingEb(i3, i2);
 }
 i3 = HEAP32[i1 + 52 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN7WebCore14DocumentLoader16setDefersLoadingEb(i3, i2);
 }
 i3 = HEAP32[i1 + 56 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN7WebCore14DocumentLoader16setDefersLoadingEb(i3, i2);
 }
 __ZN7WebCore17HistoryController16setDefersLoadingEb(HEAP32[i1 + 12 >> 2] | 0, i2);
 if (i2) {
  return;
 }
 __ZN7WebCore19NavigationScheduler10startTimerEv((HEAP32[i1 >> 2] | 0) + 376 | 0);
 do {
  if ((HEAP8[i1 + 192 | 0] & 1) == 0) {
   if ((HEAP8[i1 + 193 | 0] & 1) != 0) {
    break;
   }
   return;
  }
 } while (0);
 if (+HEAPF64[i1 + 144 >> 3] != +0) {
  return;
 }
 __ZN7WebCore9TimerBase5startEdd(i1 + 136 | 0, +0, +0);
 return;
}
function __ZN7WebCore11FrameLoader14cancelAndClearEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 | 0;
 __ZN7WebCore19NavigationScheduler6cancelEb((HEAP32[i2 >> 2] | 0) + 376 | 0, 0);
 if ((HEAP8[i1 + 76 | 0] & 1) == 0) {
  __ZN7WebCore17HistoryController17saveDocumentStateEv(HEAP32[i1 + 12 >> 2] | 0);
  i3 = HEAP32[(HEAP32[i2 >> 2] | 0) + 456 >> 2] | 0;
  if ((i3 | 0) == 0) {
   i4 = 1;
  } else {
   i4 = (HEAP8[i3 + 1433 | 0] & 1) != 0 ? 1 : 2;
  }
  __ZN7WebCore11FrameLoader11stopLoadingENS_17UnloadEventPolicyE(i1, i4);
  __ZN7WebCore6Editor23clearUndoRedoOperationsEv(HEAP32[(HEAP32[i2 >> 2] | 0) + 464 >> 2] | 0);
 }
 __ZN7WebCore11FrameLoader5clearEPNS_8DocumentEbbb(i1, HEAP32[(HEAP32[i2 >> 2] | 0) + 456 >> 2] | 0, 0, 1, 1);
 __ZN7WebCore16ScriptController27updatePlatformScriptObjectsEv(HEAP32[(HEAP32[i2 >> 2] | 0) + 460 >> 2] | 0);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader22loadWithDocumentLoaderEPNS2_14DocumentLoaderENS2_13FrameLoadTypeEN3WTF10PassRefPtrINS2_9FormStateEEEE3$_4_0NS_9allocatorISB_EEFvRKNS2_15ResourceRequestESA_bEEclESG_OSA_Ob_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i2 | 0;
 i6 = i3 | 0;
 i3 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 i6 = (HEAP8[i4] & 1) != 0;
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 i1 = i5 | 0;
 HEAP32[i1 >> 2] = i3;
 __ZN7WebCore11FrameLoader33continueLoadAfterNavigationPolicyERKNS_15ResourceRequestEN3WTF10PassRefPtrINS_9FormStateEEEb(i4, 0, i5, i6);
 i6 = HEAP32[i1 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZN3WTF10RefCountedIN7WebCore9FormStateEE5derefEv(i6 | 0);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore11FrameLoader36callContinueLoadAfterNewWindowPolicyEPvRKNS_15ResourceRequestEN3WTF10PassRefPtrINS_9FormStateEEERKNS5_6StringERKNS_16NavigationActionEb(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i8 = i7 | 0;
 i9 = i8 | 0;
 i10 = i3 | 0;
 i3 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i9 >> 2] = i3;
 __ZN7WebCore11FrameLoader32continueLoadAfterNewWindowPolicyERKNS_15ResourceRequestEN3WTF10PassRefPtrINS_9FormStateEEERKNS4_6StringERKNS_16NavigationActionEb(i1, i2, i8, i4, i5, i6);
 i6 = HEAP32[i9 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 __ZN3WTF10RefCountedIN7WebCore9FormStateEE5derefEv(i6 | 0);
 STACKTOP = i7;
 return;
}
function __ZN7WebCore11FrameLoader28setProvisionalDocumentLoaderEPNS_14DocumentLoaderE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i1 + 52 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   if ((i4 | 0) == (HEAP32[i1 + 48 >> 2] | 0)) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 40 >> 2] & 127](i4);
  }
 } while (0);
 if ((i2 | 0) != 0) {
  i4 = i2 + 4 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i2;
 if ((i4 | 0) == 0) {
  return;
 }
 i2 = i4 + 4 | 0;
 i4 = i2 | 0;
 i3 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i4 >> 2] = i3;
  return;
 }
 i3 = i2 - 4 | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 127](i3);
 return;
}
function __ZNK7WebCore11FrameLoader22subresourceCachePolicyEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 if ((HEAP8[i1 + 76 | 0] & 1) != 0) {
  i2 = 1;
  return i2 | 0;
 }
 i3 = i1 + 44 | 0;
 if ((HEAP32[i3 >> 2] | 0) == 9) {
  i2 = 3;
  return i2 | 0;
 }
 i4 = __ZNK7WebCore9FrameTree6parentEv((HEAP32[i1 >> 2] | 0) + 40 | 0) | 0;
 do {
  if ((i4 | 0) != 0) {
   i5 = __ZNK7WebCore11FrameLoader22subresourceCachePolicyEv(i4 + 80 | 0) | 0;
   if ((i5 | 0) == 1) {
    break;
   } else {
    i2 = i5;
   }
   return i2 | 0;
  }
 } while (0);
 if ((HEAP32[i3 >> 2] | 0) == 4) {
  i2 = 2;
  return i2 | 0;
 }
 i3 = (__ZNK7WebCore19ResourceRequestBase11cachePolicyEv(__ZN7WebCore14DocumentLoader7requestEv(HEAP32[i1 + 48 >> 2] | 0) | 0) | 0) == 2;
 i2 = i3 ? 4 : 1;
 return i2 | 0;
}
function __ZN7WebCore11FrameLoader4stopEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i3 + 4 | 0;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 i4 = HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 456 >> 2] | 0) + 344 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i2 = i4;
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 52 >> 2] & 127](i4);
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 36 >> 2] & 127](i4);
 }
 __ZN7WebCore14IconController10stopLoaderEv(HEAP32[i1 + 28 >> 2] | 0);
 i1 = i3 + 4 | 0;
 i3 = i1 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i3 >> 2] = i4;
  return;
 }
 i4 = i1 - 4 | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 127](i4);
 return;
}
function __ZN7WebCore11FrameLoader14applyUserAgentERNS_15ResourceRequestE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i2 | 0;
 i2 = __ZNK7WebCore19ResourceRequestBase3urlEv(i5) | 0;
 i6 = HEAP32[i1 + 4 >> 2] | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i6 >> 2] | 0) + 380 >> 2] & 3](i4, i6, i2);
 __ZN7WebCore19ResourceRequestBase18setHTTPHeaderFieldEPKcRKN3WTF6StringE(i5, H_BASE + 216 | 0, i4);
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = i5 | 0;
 i2 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i4 >> 2] = i2;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore11FrameLoader14didFirstLayoutEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 do {
  if ((HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] | 0) != 0) {
   if (((HEAP32[i1 + 44 >> 2] | 0) - 1 | 0) >>> 0 >= 3 >>> 0) {
    break;
   }
   __ZN7WebCore17HistoryController33restoreScrollPositionAndViewStateEv(HEAP32[i1 + 12 >> 2] | 0);
  }
 } while (0);
 i2 = i1 + 24 | 0;
 if (!(__ZNK7WebCore23FrameLoaderStateMachine30committedFirstRealDocumentLoadEv(i2) | 0)) {
  return;
 }
 if (__ZNK7WebCore23FrameLoaderStateMachine32isDisplayingInitialEmptyDocumentEv(i2) | 0) {
  return;
 }
 if (__ZNK7WebCore23FrameLoaderStateMachine15firstLayoutDoneEv(i2) | 0) {
  return;
 }
 __ZN7WebCore23FrameLoaderStateMachine9advanceToENS0_5StateE(i2, 4);
 return;
}
function __ZN7WebCore11FrameLoader30checkDidPerformFirstNavigationEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i3 = i1 + 220 | 0;
 if ((HEAP8[i3] & 1) != 0) {
  return;
 }
 i4 = i2 + 56 | 0;
 if ((__ZN7WebCore21BackForwardController11itemAtIndexEi(HEAP32[i4 >> 2] | 0, 0) | 0) == 0) {
  return;
 }
 if ((__ZN7WebCore21BackForwardController11itemAtIndexEi(HEAP32[i4 >> 2] | 0, -1) | 0) != 0) {
  return;
 }
 if ((__ZN7WebCore21BackForwardController11itemAtIndexEi(HEAP32[i4 >> 2] | 0, 1) | 0) != 0) {
  return;
 }
 HEAP8[i3] = 1;
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 456 >> 2] & 127](i3);
 return;
}
function __ZN7WebCore11FrameLoader16clientRedirectedERKNS_3URLEddb(i1, i2, d3, d4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 d4 = +d4;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0;
 i6 = HEAP32[i1 + 4 >> 2] | 0;
 FUNCTION_TABLE_viidd[HEAP32[(HEAP32[i6 >> 2] | 0) + 96 >> 2] & 1](i6, i2, d3, d4);
 HEAP8[i1 + 62 | 0] = 1;
 do {
  if (!i5) {
   if (__ZNK7WebCore17HistoryController27currentItemShouldBeReplacedEv(HEAP32[i1 + 12 >> 2] | 0) | 0) {
    break;
   } else {
    i7 = 0;
   }
   i8 = i1 + 61 | 0;
   HEAP8[i8] = i7;
   return;
  }
 } while (0);
 if ((HEAP32[i1 + 48 >> 2] | 0) == 0) {
  i7 = 0;
  i8 = i1 + 61 | 0;
  HEAP8[i8] = i7;
  return;
 }
 i7 = HEAP8[i1 + 68 | 0] & 1 ^ 1;
 i8 = i1 + 61 | 0;
 HEAP8[i8] = i7;
 return;
}
function __ZN7WebCore11FrameLoader18frameLoadCompletedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 348 >> 2] & 127](i2);
 __ZN7WebCore17HistoryController27updateForFrameLoadCompletedEv(HEAP32[i1 + 12 >> 2] | 0);
 if ((HEAP32[i1 + 48 >> 2] | 0) == 0) {
  return;
 }
 i2 = i1 + 24 | 0;
 if (!(__ZNK7WebCore23FrameLoaderStateMachine30committedFirstRealDocumentLoadEv(i2) | 0)) {
  return;
 }
 if (__ZNK7WebCore23FrameLoaderStateMachine32isDisplayingInitialEmptyDocumentEv(i2) | 0) {
  return;
 }
 if (__ZNK7WebCore23FrameLoaderStateMachine15firstLayoutDoneEv(i2) | 0) {
  return;
 }
 __ZN7WebCore23FrameLoaderStateMachine9advanceToENS0_5StateE(i2, 4);
 return;
}
function __ZN7WebCore11FrameLoader22checkCallImplicitCloseEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 69 | 0;
 if ((HEAP8[i2] & 1) != 0) {
  return;
 }
 i3 = HEAP32[i1 >> 2] | 0;
 i4 = i3 + 456 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((HEAP8[i5 + 964 | 0] & 1) != 0) {
  return;
 }
 if ((HEAP32[i5 + 1832 >> 2] | 0) != 0) {
  return;
 }
 i5 = i3 + 64 | 0;
 while (1) {
  i3 = HEAP32[i5 >> 2] | 0;
  if ((i3 | 0) == 0) {
   break;
  }
  if ((HEAP8[i3 + 156 | 0] & 1) == 0) {
   i6 = 10;
   break;
  } else {
   i5 = i3 + 56 | 0;
  }
 }
 if ((i6 | 0) == 10) {
  return;
 }
 HEAP8[i2] = 1;
 HEAP8[i1 + 70 | 0] = 0;
 __ZN7WebCore8Document13implicitCloseEv(HEAP32[i4 >> 2] | 0);
 return;
}
function __ZNK7WebCore11FrameLoader27numPendingOrLoadingRequestsEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = i1 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 if (!i2) {
  i4 = HEAP32[(HEAP32[(HEAP32[i1 + 456 >> 2] | 0) + 340 >> 2] | 0) + 52 >> 2] | 0;
  return i4 | 0;
 }
 if ((i1 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 } else {
  i5 = 0;
  i6 = i1;
  i7 = i1;
 }
 while (1) {
  i1 = (HEAP32[(HEAP32[(HEAP32[i6 + 456 >> 2] | 0) + 340 >> 2] | 0) + 52 >> 2] | 0) + i5 | 0;
  i2 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i6 + 40 | 0, i7) | 0;
  if ((i2 | 0) == 0) {
   i4 = i1;
   break;
  }
  i5 = i1;
  i6 = i2;
  i7 = HEAP32[i3 >> 2] | 0;
 }
 return i4 | 0;
}
function __ZN7WebCore11FrameLoader37callContinueLoadAfterNavigationPolicyEPvRKNS_15ResourceRequestEN3WTF10PassRefPtrINS_9FormStateEEEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i2 | 0;
 i6 = i5 | 0;
 i7 = i3 | 0;
 i3 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i6 >> 2] = i3;
 __ZN7WebCore11FrameLoader33continueLoadAfterNavigationPolicyERKNS_15ResourceRequestEN3WTF10PassRefPtrINS_9FormStateEEEb(i1, 0, i5, i4);
 i4 = HEAP32[i6 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZN3WTF10RefCountedIN7WebCore9FormStateEE5derefEv(i4 | 0);
 STACKTOP = i2;
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader7loadURLERKNS2_3URLERKN3WTF6StringESA_bNS2_13FrameLoadTypeENS7_10PassRefPtrINS2_5EventEEENSC_INS2_9FormStateEEEE3$_1_0NS_9allocatorISH_EEFvRKNS2_15ResourceRequestESG_bEEclESM_OSG_Ob_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 i5 = i3 | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 __ZN7WebCore11FrameLoader43continueFragmentScrollAfterNavigationPolicyERKNS_15ResourceRequestEb(HEAP32[i1 + 4 >> 2] | 0, i2, (HEAP8[i4] & 1) != 0);
 if ((i3 | 0) == 0) {
  return;
 }
 __ZN3WTF10RefCountedIN7WebCore9FormStateEE5derefEv(i3 | 0);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader22loadWithDocumentLoaderEPNS2_14DocumentLoaderENS2_13FrameLoadTypeEN3WTF10PassRefPtrINS2_9FormStateEEEE3$_3NS_9allocatorISB_EEFvRKNS2_15ResourceRequestESA_bEEclESG_OSA_Ob_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 i5 = i3 | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 __ZN7WebCore11FrameLoader43continueFragmentScrollAfterNavigationPolicyERKNS_15ResourceRequestEb(HEAP32[i1 + 4 >> 2] | 0, i2, (HEAP8[i4] & 1) != 0);
 if ((i3 | 0) == 0) {
  return;
 }
 __ZN3WTF10RefCountedIN7WebCore9FormStateEE5derefEv(i3 | 0);
 return;
}
function __ZN7WebCore11FrameLoader19closeOldDataSourcesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[(HEAP32[i1 >> 2] | 0) + 64 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = i2;
  while (1) {
   __ZN7WebCore11FrameLoader19closeOldDataSourcesEv(i3 + 80 | 0);
   i3 = HEAP32[i3 + 56 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
  }
 }
 i3 = i1 + 4 | 0;
 if ((HEAP32[i1 + 48 >> 2] | 0) != 0) {
  i1 = HEAP32[i3 >> 2] | 0;
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 120 >> 2] & 127](i1);
 }
 i1 = HEAP32[i3 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 236 >> 2] & 63](i1, 0);
 return;
}
function __ZNK7WebCore11FrameLoader16outgoingReferrerEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((HEAP8[(HEAP32[i3 + 456 >> 2] | 0) + 1581 | 0] & 1) == 0) {
  i4 = i3;
 } else {
  i2 = i3;
  while (1) {
   i3 = __ZNK7WebCore9FrameTree6parentEv(i2 + 40 | 0) | 0;
   if ((HEAP8[(HEAP32[i3 + 456 >> 2] | 0) + 1581 | 0] & 1) == 0) {
    i4 = i3;
    break;
   } else {
    i2 = i3;
   }
  }
 }
 i2 = HEAP32[i4 + 144 >> 2] | 0;
 HEAP32[i1 >> 2] = i2;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
 return;
}
function __ZN7WebCore11FrameLoader21handleFallbackContentEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[(HEAP32[i1 >> 2] | 0) + 448 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i2 + 44 >> 2] | 0;
 i3 = HEAP32[__ZN7WebCore9HTMLNames9objectTagE >> 2] | 0;
 do {
  if ((i1 | 0) != (i3 | 0)) {
   if ((HEAP32[i1 + 12 >> 2] | 0) != (HEAP32[i3 + 12 >> 2] | 0)) {
    return;
   }
   if ((HEAP32[i1 + 16 >> 2] | 0) == (HEAP32[i3 + 16 >> 2] | 0)) {
    break;
   }
   return;
  }
 } while (0);
 __ZN7WebCore17HTMLObjectElement21renderFallbackContentEv(i2);
 return;
}
function __ZN7WebCore11FrameLoader19prepareForLoadStartEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 36 >> 2] | 0;
 i3 = i2 + 4 | 0;
 if ((HEAP8[i3] & 1) == 0) {
  i4 = HEAP32[i2 >> 2] | 0;
  __ZN7WebCore15ProgressTracker15progressStartedEPNS_5FrameE(HEAP32[(HEAP32[i4 + 32 >> 2] | 0) + 52 >> 2] | 0, i4);
 }
 HEAP8[i3] = 1;
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 128 >> 2] & 127](i3);
 __ZNK7WebCore8Document21existingAXObjectCacheEv(HEAP32[(HEAP32[i1 >> 2] | 0) + 456 >> 2] | 0) | 0;
 return;
}
function __ZNK7WebCore11FrameLoader23allAncestorsAreCompleteEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 1;
  return i3 | 0;
 } else {
  i4 = i2;
 }
 while (1) {
  if ((HEAP8[i4 + 156 | 0] & 1) == 0) {
   i3 = 0;
   i5 = 6;
   break;
  }
  i2 = __ZNK7WebCore9FrameTree6parentEv(i4 + 40 | 0) | 0;
  if ((i2 | 0) == 0) {
   i3 = 1;
   i5 = 5;
   break;
  } else {
   i4 = i2;
  }
 }
 if ((i5 | 0) == 6) {
  return i3 | 0;
 } else if ((i5 | 0) == 5) {
  return i3 | 0;
 }
 return 0;
}
function __ZN7WebCore11FrameLoader26updateFirstPartyForCookiesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 | 0;
 i3 = (__ZNK7WebCore9FrameTree6parentEv((HEAP32[i2 >> 2] | 0) + 40 | 0) | 0) == 0;
 i4 = HEAP32[i2 >> 2] | 0;
 if (i3) {
  __ZN7WebCore11FrameLoader23setFirstPartyForCookiesERKNS_3URLE(i1, (HEAP32[i4 + 456 >> 2] | 0) + 356 | 0);
  return;
 } else {
  __ZN7WebCore11FrameLoader23setFirstPartyForCookiesERKNS_3URLE(i1, (HEAP32[(__ZNK7WebCore9FrameTree6parentEv(i4 + 40 | 0) | 0) + 456 >> 2] | 0) + 596 | 0);
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
function __ZNK7WebCore11FrameLoader23isHostedByObjectElementEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[(HEAP32[i1 >> 2] | 0) + 448 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = HEAP32[i2 + 44 >> 2] | 0;
 i2 = HEAP32[__ZN7WebCore9HTMLNames9objectTagE >> 2] | 0;
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
function __ZN7WebCore11FrameLoader8closeURLEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 __ZN7WebCore17HistoryController17saveDocumentStateEv(HEAP32[i1 + 12 >> 2] | 0);
 i2 = i1 | 0;
 i3 = HEAP32[(HEAP32[i2 >> 2] | 0) + 456 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = 1;
 } else {
  i4 = (HEAP8[i3 + 1433 | 0] & 1) != 0 ? 1 : 2;
 }
 __ZN7WebCore11FrameLoader11stopLoadingENS_17UnloadEventPolicyE(i1, i4);
 __ZN7WebCore6Editor23clearUndoRedoOperationsEv(HEAP32[(HEAP32[i2 >> 2] | 0) + 464 >> 2] | 0);
 return 1;
}
function __ZNK7WebCore11FrameLoader21effectiveSandboxFlagsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 228 >> 2] | 0;
 i3 = i1 | 0;
 i1 = __ZNK7WebCore9FrameTree6parentEv((HEAP32[i3 >> 2] | 0) + 40 | 0) | 0;
 if ((i1 | 0) == 0) {
  i4 = i2;
 } else {
  i4 = HEAP32[(HEAP32[i1 + 456 >> 2] | 0) + 96 >> 2] | i2;
 }
 i2 = HEAP32[(HEAP32[i3 >> 2] | 0) + 448 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i5 = i4;
  return i5 | 0;
 }
 i5 = HEAP32[i2 + 56 >> 2] | i4;
 return i5 | 0;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore11FrameLoader15loadPostRequestERKNS2_15ResourceRequestERKN3WTF6StringESA_bNS2_13FrameLoadTypeENS7_10PassRefPtrINS2_5EventEEENSC_INS2_9FormStateEEEE3$_5NS_9allocatorISH_EEFvS6_SG_SA_RKNS2_16NavigationActionEbEE7__cloneEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = __Znwj(8) | 0;
 if ((i2 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 HEAP32[i2 >> 2] = H_BASE + 1456;
 HEAP32[i2 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 i3 = i2;
 return i3 | 0;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore11FrameLoader7loadURLERKNS2_3URLERKN3WTF6StringESA_bNS2_13FrameLoadTypeENS7_10PassRefPtrINS2_5EventEEENSC_INS2_9FormStateEEEE3$_0NS_9allocatorISH_EEFvRKNS2_15ResourceRequestESG_SA_RKNS2_16NavigationActionEbEE7__cloneEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = __Znwj(8) | 0;
 if ((i2 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 HEAP32[i2 >> 2] = H_BASE + 1256;
 HEAP32[i2 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 i3 = i2;
 return i3 | 0;
}
function __ZN7WebCore11FrameLoader17stopForUserCancelEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore11FrameLoader14stopAllLoadersENS_26ClearProvisionalItemPolicyE(i1, 0);
 if (i2) {
  HEAP8[i1 + 193 | 0] = 1;
  if (+HEAPF64[i1 + 144 >> 3] != +0) {
   return;
  }
  __ZN7WebCore9TimerBase5startEdd(i1 + 136 | 0, +0, +0);
  return;
 } else {
  if ((HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] | 0) == 0) {
   return;
  }
  __ZN7WebCore11FrameLoader17checkLoadCompleteEv(i1);
  return;
 }
}
function __ZN7WebCore11FrameLoader25willTransitionToCommittedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 | 0;
 i1 = HEAP32[(HEAP32[i2 >> 2] | 0) + 464 >> 2] | 0;
 if ((HEAP32[i1 + 8 >> 2] | 0) == 0) {
  return;
 }
 __ZN7WebCore6Editor18confirmCompositionEv(i1);
 i1 = __ZNK7WebCore6Editor6clientEv(HEAP32[(HEAP32[i2 >> 2] | 0) + 464 >> 2] | 0) | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 80 >> 2] & 63](i1, HEAP32[i2 >> 2] | 0);
 return;
}
function __ZNK7WebCore11FrameLoader29checkIfFormActionAllowedByCSPERKNS_3URLE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = HEAP32[i1 + 88 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = 1;
  return i4 | 0;
 }
 if ((HEAP32[i3 + 4 >> 2] | 0) == 0) {
  i4 = 1;
  return i4 | 0;
 }
 i4 = __ZNK7WebCore21ContentSecurityPolicy15allowFormActionERKNS_3URLENS0_15ReportingStatusE(HEAP32[(HEAP32[(HEAP32[i1 >> 2] | 0) + 456 >> 2] | 0) + 104 >> 2] | 0, i2, 0) | 0;
 return i4 | 0;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore11FrameLoader7loadURLERKNS2_3URLERKN3WTF6StringESA_bNS2_13FrameLoadTypeENS7_10PassRefPtrINS2_5EventEEENSC_INS2_9FormStateEEEE3$_1_0NS_9allocatorISH_EEFvRKNS2_15ResourceRequestESG_bEE7__cloneEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = __Znwj(8) | 0;
 if ((i2 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 HEAP32[i2 >> 2] = H_BASE + 1216;
 HEAP32[i2 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 i3 = i2;
 return i3 | 0;
}
function __ZNK7WebCore11FrameLoader22allChildrenAreCompleteEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = (HEAP32[i1 >> 2] | 0) + 64 | 0;
 while (1) {
  i1 = HEAP32[i2 >> 2] | 0;
  if ((i1 | 0) == 0) {
   i3 = 1;
   i4 = 6;
   break;
  }
  if ((HEAP8[i1 + 156 | 0] & 1) == 0) {
   i3 = 0;
   i4 = 5;
   break;
  } else {
   i2 = i1 + 56 | 0;
  }
 }
 if ((i4 | 0) == 5) {
  return i3 | 0;
 } else if ((i4 | 0) == 6) {
  return i3 | 0;
 }
 return 0;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore11FrameLoader22loadWithDocumentLoaderEPNS2_14DocumentLoaderENS2_13FrameLoadTypeEN3WTF10PassRefPtrINS2_9FormStateEEEE3$_4_0NS_9allocatorISB_EEFvRKNS2_15ResourceRequestESA_bEE7__cloneEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = __Znwj(8) | 0;
 if ((i2 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 HEAP32[i2 >> 2] = H_BASE + 1376;
 HEAP32[i2 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 i3 = i2;
 return i3 | 0;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore11FrameLoader4loadERKNS2_16FrameLoadRequestEE3$_2NS_9allocatorIS7_EEFvRKNS2_15ResourceRequestEN3WTF10PassRefPtrINS2_9FormStateEEERKNSD_6StringERKNS2_16NavigationActionEbEE7__cloneEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = __Znwj(8) | 0;
 if ((i2 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 HEAP32[i2 >> 2] = H_BASE + 1296;
 HEAP32[i2 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 i3 = i2;
 return i3 | 0;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore11FrameLoader22loadWithDocumentLoaderEPNS2_14DocumentLoaderENS2_13FrameLoadTypeEN3WTF10PassRefPtrINS2_9FormStateEEEE3$_3NS_9allocatorISB_EEFvRKNS2_15ResourceRequestESA_bEE7__cloneEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = __Znwj(8) | 0;
 if ((i2 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 HEAP32[i2 >> 2] = H_BASE + 1416;
 HEAP32[i2 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 i3 = i2;
 return i3 | 0;
}
function __ZN7WebCore11FrameLoader22provisionalLoadStartedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 24 | 0;
 if (__ZNK7WebCore23FrameLoaderStateMachine15firstLayoutDoneEv(i2) | 0) {
  __ZN7WebCore23FrameLoaderStateMachine9advanceToENS0_5StateE(i2, 3);
 }
 __ZN7WebCore19NavigationScheduler6cancelEb((HEAP32[i1 >> 2] | 0) + 376 | 0, 1);
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 360 >> 2] & 127](i2);
 return;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore11FrameLoader15loadPostRequestERKNS2_15ResourceRequestERKN3WTF6StringESA_bNS2_13FrameLoadTypeENS7_10PassRefPtrINS2_5EventEEENSC_INS2_9FormStateEEEE3$_5NS_9allocatorISH_EEFvS6_SG_SA_RKNS2_16NavigationActionEbEE7__cloneEPNS0_6__baseISN_EE_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = H_BASE + 1456;
 HEAP32[i2 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 return;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore11FrameLoader7loadURLERKNS2_3URLERKN3WTF6StringESA_bNS2_13FrameLoadTypeENS7_10PassRefPtrINS2_5EventEEENSC_INS2_9FormStateEEEE3$_0NS_9allocatorISH_EEFvRKNS2_15ResourceRequestESG_SA_RKNS2_16NavigationActionEbEE7__cloneEPNS0_6__baseISQ_EE_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = H_BASE + 1256;
 HEAP32[i2 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 return;
}
function __ZN7WebCore5TimerINS_11FrameLoaderEE5firedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 48 | 0;
 i3 = (HEAP32[i1 + 44 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] | 0) | 0;
 i4 = i3;
 i5 = HEAP32[i2 >> 2] | 0;
 if ((i5 & 1 | 0) == 0) {
  i6 = i5;
  FUNCTION_TABLE_vii[i6 & 63](i4, i1);
  return;
 } else {
  i6 = HEAP32[(HEAP32[i3 >> 2] | 0) + (i5 - 1) >> 2] | 0;
  FUNCTION_TABLE_vii[i6 & 63](i4, i1);
  return;
 }
}
function __ZN7WebCore11FrameLoader41retryAfterFailedCacheOnlyMainResourceLoadEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 44 >> 2] | 0;
 i3 = HEAP32[(HEAP32[i1 + 12 >> 2] | 0) + 12 >> 2] | 0;
 __ZN7WebCore11FrameLoader14stopAllLoadersENS_26ClearProvisionalItemPolicyE(i1, 1);
 __ZN7WebCore11FrameLoader25loadDifferentDocumentItemEPNS_11HistoryItemENS_13FrameLoadTypeENS0_29FormSubmissionCacheLoadPolicyE(i1, i3, i2, 1);
 return;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore11FrameLoader33continueLoadAfterNavigationPolicyERKNS2_15ResourceRequestEN3WTF10PassRefPtrINS2_9FormStateEEEbE3$_6NS_9allocatorISB_EEFvNS2_12PolicyActionEEE7__cloneEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = __Znwj(8) | 0;
 if ((i2 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 HEAP32[i2 >> 2] = H_BASE + 1336;
 HEAP32[i2 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 i3 = i2;
 return i3 | 0;
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
function ___ZNKSt3__110__function6__funcIZN7WebCore11FrameLoader7loadURLERKNS2_3URLERKN3WTF6StringESA_bNS2_13FrameLoadTypeENS7_10PassRefPtrINS2_5EventEEENSC_INS2_9FormStateEEEE3$_1_0NS_9allocatorISH_EEFvRKNS2_15ResourceRequestESG_bEE7__cloneEPNS0_6__baseISN_EE_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = H_BASE + 1216;
 HEAP32[i2 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader33continueLoadAfterNavigationPolicyERKNS2_15ResourceRequestEN3WTF10PassRefPtrINS2_9FormStateEEEbE3$_6NS_9allocatorISB_EEFvNS2_12PolicyActionEEEclEOSE__(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore13PolicyChecker31continueLoadAfterWillSubmitFormENS_12PolicyActionE(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 8 >> 2] | 0, HEAP32[i2 >> 2] | 0);
 return;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore11FrameLoader22loadWithDocumentLoaderEPNS2_14DocumentLoaderENS2_13FrameLoadTypeEN3WTF10PassRefPtrINS2_9FormStateEEEE3$_4_0NS_9allocatorISB_EEFvRKNS2_15ResourceRequestESA_bEE7__cloneEPNS0_6__baseISH_EE_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = H_BASE + 1376;
 HEAP32[i2 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 return;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore11FrameLoader4loadERKNS2_16FrameLoadRequestEE3$_2NS_9allocatorIS7_EEFvRKNS2_15ResourceRequestEN3WTF10PassRefPtrINS2_9FormStateEEERKNSD_6StringERKNS2_16NavigationActionEbEE7__cloneEPNS0_6__baseISN_EE_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = H_BASE + 1296;
 HEAP32[i2 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 return;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore11FrameLoader22loadWithDocumentLoaderEPNS2_14DocumentLoaderENS2_13FrameLoadTypeEN3WTF10PassRefPtrINS2_9FormStateEEEE3$_3NS_9allocatorISB_EEFvRKNS2_15ResourceRequestESA_bEE7__cloneEPNS0_6__baseISH_EE_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = H_BASE + 1416;
 HEAP32[i2 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 return;
}
function __ZNK7WebCore11FrameLoader14frameHasLoadedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 24 | 0;
 if (__ZNK7WebCore23FrameLoaderStateMachine30committedFirstRealDocumentLoadEv(i2) | 0) {
  i3 = 1;
  return i3 | 0;
 }
 if ((HEAP32[i1 + 52 >> 2] | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (__ZNK7WebCore23FrameLoaderStateMachine28creatingInitialEmptyDocumentEv(i2) | 0) ^ 1;
 return i3 | 0;
}
function __ZN7WebCore11FrameLoader15didExplicitOpenEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP8[i1 + 76 | 0] = 0;
 HEAP8[i1 + 69 | 0] = 0;
 i2 = i1 + 24 | 0;
 if (!(__ZNK7WebCore23FrameLoaderStateMachine30committedFirstRealDocumentLoadEv(i2) | 0)) {
  __ZN7WebCore23FrameLoaderStateMachine9advanceToENS0_5StateE(i2, 2);
 }
 __ZN7WebCore19NavigationScheduler6cancelEb((HEAP32[i1 >> 2] | 0) + 376 | 0, 0);
 return;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore11FrameLoader33continueLoadAfterNavigationPolicyERKNS2_15ResourceRequestEN3WTF10PassRefPtrINS2_9FormStateEEEbE3$_6NS_9allocatorISB_EEFvNS2_12PolicyActionEEE7__cloneEPNS0_6__baseISF_EE_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = H_BASE + 1336;
 HEAP32[i2 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 return;
}
function __ZN7WebCore11FrameLoader33clientRedirectCancelledOrFinishedEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 92 >> 2] & 127](i3);
 if (i2) {
  i4 = i1 + 62 | 0;
  HEAP8[i4] = 0;
  return;
 }
 HEAP8[i1 + 61 | 0] = 0;
 i4 = i1 + 62 | 0;
 HEAP8[i4] = 0;
 return;
}
function __ZNK7WebCore11FrameLoader8referrerEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i2 + 48 >> 2] | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF6StringC1EPKc(i1, H_BASE + 2160 | 0);
  return;
 } else {
  __ZNK7WebCore19ResourceRequestBase15httpHeaderFieldEPKc(i1, __ZN7WebCore14DocumentLoader7requestEv(i3) | 0, H_BASE + 144 | 0);
  return;
 }
}
function __ZN7WebCore11FrameLoader13frameDetachedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 __ZN7WebCore11FrameLoader14stopAllLoadersENS_26ClearProvisionalItemPolicyE(i1, 0);
 i2 = HEAP32[(HEAP32[i1 >> 2] | 0) + 456 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 264 >> 2] & 127](i2);
 __ZN7WebCore11FrameLoader16detachFromParentEv(i1);
 return;
}
function __ZN7WebCore11isHTMLSpaceEt(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 L1 : do {
  if ((i1 & 65535) >>> 0 < 33 >>> 0) {
   switch (i1 << 16 >> 16) {
   case 32:
   case 10:
   case 9:
   case 13:
   case 12:
    {
     i2 = 1;
     break L1;
     break;
    }
   default:
    {}
   }
   i2 = 0;
  } else {
   i2 = 0;
  }
 } while (0);
 return i2 | 0;
}
function __ZN7WebCore11FrameLoader28loadProgressingStatusChangedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[(HEAP32[(HEAP32[i1 >> 2] | 0) + 28 >> 2] | 0) + 452 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN7WebCore9FrameView37updateLayerFlushThrottlingInAllFramesEv(i2);
 __ZN7WebCore9FrameView26adjustTiledBackingCoverageEv(i2);
 return;
}
function __ZN7WebCore11FrameLoader47callContinueFragmentScrollAfterNavigationPolicyEPvRKNS_15ResourceRequestEN3WTF10PassRefPtrINS_9FormStateEEEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore11FrameLoader43continueFragmentScrollAfterNavigationPolicyERKNS_15ResourceRequestEb(i1, i2, i4);
 return;
}
function __ZN7WebCore11FrameLoader23startCheckCompleteTimerEv(i1) {
 i1 = i1 | 0;
 do {
  if ((HEAP8[i1 + 192 | 0] & 1) == 0) {
   if ((HEAP8[i1 + 193 | 0] & 1) != 0) {
    break;
   }
   return;
  }
 } while (0);
 if (+HEAPF64[i1 + 144 >> 3] != +0) {
  return;
 }
 __ZN7WebCore9TimerBase5startEdd(i1 + 136 | 0, +0, +0);
 return;
}
function __ZN7WebCore11FrameLoader19handledOnloadEventsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 84 >> 2] & 127](i2);
 i2 = HEAP32[i1 + 48 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN7WebCore14DocumentLoader19handledOnloadEventsEv(i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader15loadPostRequestERKNS2_15ResourceRequestERKN3WTF6StringESA_bNS2_13FrameLoadTypeENS7_10PassRefPtrINS2_5EventEEENSC_INS2_9FormStateEEEE3$_5NS_9allocatorISH_EEFvS6_SG_SA_RKNS2_16NavigationActionEbEE18destroy_deallocateEv_(i1) {
 i1 = i1 | 0;
 __ZdlPv(i1);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader7loadURLERKNS2_3URLERKN3WTF6StringESA_bNS2_13FrameLoadTypeENS7_10PassRefPtrINS2_5EventEEENSC_INS2_9FormStateEEEE3$_0NS_9allocatorISH_EEFvRKNS2_15ResourceRequestESG_SA_RKNS2_16NavigationActionEbEE18destroy_deallocateEv_(i1) {
 i1 = i1 | 0;
 __ZdlPv(i1);
 return;
}
function __ZN7WebCore11FrameLoader12shouldReloadERKNS_3URLES3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 if (!(__ZNK7WebCore3URL21hasFragmentIdentifierEv(i3) | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 i4 = (__ZN7WebCore31equalIgnoringFragmentIdentifierERKNS_3URLES2_(i2, i3) | 0) ^ 1;
 return i4 | 0;
}
function dynCall_viiiiiiiii(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10) {
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
 FUNCTION_TABLE_viiiiiiiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0, i9 | 0, i10 | 0);
}
function __ZN7WebCore11FrameLoader32dispatchDocumentElementAvailableEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 __ZN7WebCore5Frame17injectUserScriptsENS_23UserScriptInjectionTimeE(HEAP32[i1 >> 2] | 0, 0);
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 452 >> 2] & 127](i2);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader15loadPostRequestERKNS2_15ResourceRequestERKN3WTF6StringESA_bNS2_13FrameLoadTypeENS7_10PassRefPtrINS2_5EventEEENSC_INS2_9FormStateEEEE3$_5NS_9allocatorISH_EEFvS6_SG_SA_RKNS2_16NavigationActionEbEED0Ev_(i1) {
 i1 = i1 | 0;
 __ZdlPv(i1);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader7loadURLERKNS2_3URLERKN3WTF6StringESA_bNS2_13FrameLoadTypeENS7_10PassRefPtrINS2_5EventEEENSC_INS2_9FormStateEEEE3$_0NS_9allocatorISH_EEFvRKNS2_15ResourceRequestESG_SA_RKNS2_16NavigationActionEbEED0Ev_(i1) {
 i1 = i1 | 0;
 __ZdlPv(i1);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader15loadPostRequestERKNS2_15ResourceRequestERKN3WTF6StringESA_bNS2_13FrameLoadTypeENS7_10PassRefPtrINS2_5EventEEENSC_INS2_9FormStateEEEE3$_5NS_9allocatorISH_EEFvS6_SG_SA_RKNS2_16NavigationActionEbEE7destroyEv_(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore11FrameLoader9isLoadingEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[((HEAP32[i1 + 40 >> 2] | 0) == 0 ? i1 + 52 | 0 : i1 + 48 | 0) >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = __ZNK7WebCore14DocumentLoader9isLoadingEv(i2) | 0;
 return i3 | 0;
}
function ___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader7loadURLERKNS2_3URLERKN3WTF6StringESA_bNS2_13FrameLoadTypeENS7_10PassRefPtrINS2_5EventEEENSC_INS2_9FormStateEEEE3$_1_0NS_9allocatorISH_EEFvRKNS2_15ResourceRequestESG_bEE18destroy_deallocateEv_(i1) {
 i1 = i1 | 0;
 __ZdlPv(i1);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader7loadURLERKNS2_3URLERKN3WTF6StringESA_bNS2_13FrameLoadTypeENS7_10PassRefPtrINS2_5EventEEENSC_INS2_9FormStateEEEE3$_0NS_9allocatorISH_EEFvRKNS2_15ResourceRequestESG_SA_RKNS2_16NavigationActionEbEE7destroyEv_(i1) {
 i1 = i1 | 0;
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader15loadPostRequestERKNS2_15ResourceRequestERKN3WTF6StringESA_bNS2_13FrameLoadTypeENS7_10PassRefPtrINS2_5EventEEENSC_INS2_9FormStateEEEE3$_5NS_9allocatorISH_EEFvS6_SG_SA_RKNS2_16NavigationActionEbEED2Ev_(i1) {
 i1 = i1 | 0;
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader7loadURLERKNS2_3URLERKN3WTF6StringESA_bNS2_13FrameLoadTypeENS7_10PassRefPtrINS2_5EventEEENSC_INS2_9FormStateEEEE3$_0NS_9allocatorISH_EEFvRKNS2_15ResourceRequestESG_SA_RKNS2_16NavigationActionEbEED2Ev_(i1) {
 i1 = i1 | 0;
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader22loadWithDocumentLoaderEPNS2_14DocumentLoaderENS2_13FrameLoadTypeEN3WTF10PassRefPtrINS2_9FormStateEEEE3$_4_0NS_9allocatorISB_EEFvRKNS2_15ResourceRequestESA_bEE18destroy_deallocateEv_(i1) {
 i1 = i1 | 0;
 __ZdlPv(i1);
 return;
}
function __ZNK7WebCore11FrameLoader14cancelledErrorERKNS_15ResourceRequestE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = HEAP32[i2 + 4 >> 2] | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i4 >> 2] | 0) + 296 >> 2] & 3](i1, i4, i3);
 HEAP8[i1 + 17 | 0] = 1;
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader4loadERKNS2_16FrameLoadRequestEE3$_2NS_9allocatorIS7_EEFvRKNS2_15ResourceRequestEN3WTF10PassRefPtrINS2_9FormStateEEERKNSD_6StringERKNS2_16NavigationActionEbEE18destroy_deallocateEv_(i1) {
 i1 = i1 | 0;
 __ZdlPv(i1);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader22loadWithDocumentLoaderEPNS2_14DocumentLoaderENS2_13FrameLoadTypeEN3WTF10PassRefPtrINS2_9FormStateEEEE3$_3NS_9allocatorISB_EEFvRKNS2_15ResourceRequestESA_bEE18destroy_deallocateEv_(i1) {
 i1 = i1 | 0;
 __ZdlPv(i1);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader7loadURLERKNS2_3URLERKN3WTF6StringESA_bNS2_13FrameLoadTypeENS7_10PassRefPtrINS2_5EventEEENSC_INS2_9FormStateEEEE3$_1_0NS_9allocatorISH_EEFvRKNS2_15ResourceRequestESG_bEED0Ev_(i1) {
 i1 = i1 | 0;
 __ZdlPv(i1);
 return;
}
function __ZN7WebCore11FrameLoader35addExtraFieldsToMainResourceRequestERNS_15ResourceRequestE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore11FrameLoader23addExtraFieldsToRequestERNS_15ResourceRequestENS_13FrameLoadTypeEb(i1, i2, HEAP32[i1 + 44 >> 2] | 0, 1);
 return;
}
function __ZN7WebCore11FrameLoader34addExtraFieldsToSubresourceRequestERNS_15ResourceRequestE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore11FrameLoader23addExtraFieldsToRequestERNS_15ResourceRequestENS_13FrameLoadTypeEb(i1, i2, HEAP32[i1 + 44 >> 2] | 0, 0);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader7loadURLERKNS2_3URLERKN3WTF6StringESA_bNS2_13FrameLoadTypeENS7_10PassRefPtrINS2_5EventEEENSC_INS2_9FormStateEEEE3$_1_0NS_9allocatorISH_EEFvRKNS2_15ResourceRequestESG_bEE7destroyEv_(i1) {
 i1 = i1 | 0;
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader33continueLoadAfterNavigationPolicyERKNS2_15ResourceRequestEN3WTF10PassRefPtrINS2_9FormStateEEEbE3$_6NS_9allocatorISB_EEFvNS2_12PolicyActionEEE18destroy_deallocateEv_(i1) {
 i1 = i1 | 0;
 __ZdlPv(i1);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader22loadWithDocumentLoaderEPNS2_14DocumentLoaderENS2_13FrameLoadTypeEN3WTF10PassRefPtrINS2_9FormStateEEEE3$_4_0NS_9allocatorISB_EEFvRKNS2_15ResourceRequestESA_bEED0Ev_(i1) {
 i1 = i1 | 0;
 __ZdlPv(i1);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader4loadERKNS2_16FrameLoadRequestEE3$_2NS_9allocatorIS7_EEFvRKNS2_15ResourceRequestEN3WTF10PassRefPtrINS2_9FormStateEEERKNSD_6StringERKNS2_16NavigationActionEbEED0Ev_(i1) {
 i1 = i1 | 0;
 __ZdlPv(i1);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader22loadWithDocumentLoaderEPNS2_14DocumentLoaderENS2_13FrameLoadTypeEN3WTF10PassRefPtrINS2_9FormStateEEEE3$_3NS_9allocatorISB_EEFvRKNS2_15ResourceRequestESA_bEED0Ev_(i1) {
 i1 = i1 | 0;
 __ZdlPv(i1);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader7loadURLERKNS2_3URLERKN3WTF6StringESA_bNS2_13FrameLoadTypeENS7_10PassRefPtrINS2_5EventEEENSC_INS2_9FormStateEEEE3$_1_0NS_9allocatorISH_EEFvRKNS2_15ResourceRequestESG_bEED2Ev_(i1) {
 i1 = i1 | 0;
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader22loadWithDocumentLoaderEPNS2_14DocumentLoaderENS2_13FrameLoadTypeEN3WTF10PassRefPtrINS2_9FormStateEEEE3$_4_0NS_9allocatorISB_EEFvRKNS2_15ResourceRequestESA_bEE7destroyEv_(i1) {
 i1 = i1 | 0;
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader4loadERKNS2_16FrameLoadRequestEE3$_2NS_9allocatorIS7_EEFvRKNS2_15ResourceRequestEN3WTF10PassRefPtrINS2_9FormStateEEERKNSD_6StringERKNS2_16NavigationActionEbEE7destroyEv_(i1) {
 i1 = i1 | 0;
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader22loadWithDocumentLoaderEPNS2_14DocumentLoaderENS2_13FrameLoadTypeEN3WTF10PassRefPtrINS2_9FormStateEEEE3$_3NS_9allocatorISB_EEFvRKNS2_15ResourceRequestESA_bEE7destroyEv_(i1) {
 i1 = i1 | 0;
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader22loadWithDocumentLoaderEPNS2_14DocumentLoaderENS2_13FrameLoadTypeEN3WTF10PassRefPtrINS2_9FormStateEEEE3$_4_0NS_9allocatorISB_EEFvRKNS2_15ResourceRequestESA_bEED2Ev_(i1) {
 i1 = i1 | 0;
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader4loadERKNS2_16FrameLoadRequestEE3$_2NS_9allocatorIS7_EEFvRKNS2_15ResourceRequestEN3WTF10PassRefPtrINS2_9FormStateEEERKNSD_6StringERKNS2_16NavigationActionEbEED2Ev_(i1) {
 i1 = i1 | 0;
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader22loadWithDocumentLoaderEPNS2_14DocumentLoaderENS2_13FrameLoadTypeEN3WTF10PassRefPtrINS2_9FormStateEEEE3$_3NS_9allocatorISB_EEFvRKNS2_15ResourceRequestESA_bEED2Ev_(i1) {
 i1 = i1 | 0;
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader33continueLoadAfterNavigationPolicyERKNS2_15ResourceRequestEN3WTF10PassRefPtrINS2_9FormStateEEEbE3$_6NS_9allocatorISB_EEFvNS2_12PolicyActionEEED0Ev_(i1) {
 i1 = i1 | 0;
 __ZdlPv(i1);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader33continueLoadAfterNavigationPolicyERKNS2_15ResourceRequestEN3WTF10PassRefPtrINS2_9FormStateEEEbE3$_6NS_9allocatorISB_EEFvNS2_12PolicyActionEEE7destroyEv_(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore11FrameLoader9userAgentERKNS_3URLE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = HEAP32[i2 + 4 >> 2] | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i4 >> 2] | 0) + 380 >> 2] & 3](i1, i4, i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader33continueLoadAfterNavigationPolicyERKNS2_15ResourceRequestEN3WTF10PassRefPtrINS2_9FormStateEEEbE3$_6NS_9allocatorISB_EEFvNS2_12PolicyActionEEED2Ev_(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore11FrameLoader15willChangeTitleEPNS_14DocumentLoaderE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 244 >> 2] & 63](i3, i2);
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
function __ZN7WebCore11FrameLoader14didChangeIconsENS_8IconTypeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 136 >> 2] & 63](i3, i2);
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore11FrameLoader25scheduleCheckLoadCompleteEv(i1) {
 i1 = i1 | 0;
 HEAP8[i1 + 193 | 0] = 1;
 if (+HEAPF64[i1 + 144 >> 3] != +0) {
  return;
 }
 __ZN7WebCore9TimerBase5startEdd(i1 + 136 | 0, +0, +0);
 return;
}
function __ZN7WebCore11FrameLoader22scheduleCheckCompletedEv(i1) {
 i1 = i1 | 0;
 HEAP8[i1 + 192 | 0] = 1;
 if (+HEAPF64[i1 + 144 >> 3] != +0) {
  return;
 }
 __ZN7WebCore9TimerBase5startEdd(i1 + 136 | 0, +0, +0);
 return;
}
function __ZNK7WebCore11FrameLoader15originalRequestEv(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore14DocumentLoader19originalRequestCopyEv(HEAP32[((HEAP32[i1 + 40 >> 2] | 0) == 0 ? i1 + 52 | 0 : i1 + 48 | 0) >> 2] | 0) | 0;
}
function __ZNK7WebCore11FrameLoader14outgoingOriginEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore14SecurityOrigin8toStringEv(i1, HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 456 >> 2] | 0) + 100 >> 2] | 0);
 return;
}
function dynCall_iiiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 return FUNCTION_TABLE_iiiiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0) | 0;
}
function __ZNK7WebCore11FrameLoader14initialRequestEv(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore14DocumentLoader15originalRequestEv(HEAP32[((HEAP32[i1 + 40 >> 2] | 0) == 0 ? i1 + 52 | 0 : i1 + 48 | 0) >> 2] | 0) | 0;
}
function __ZN7WebCore11FrameLoader9didLayoutEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 164 >> 2] & 63](i3, i2);
 return;
}
function __ZN7WebCore11FrameLoader27forcePageTransitionIfNeededEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 540 >> 2] & 127](i2);
 return;
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
function __ZN7WebCore17FrameLoaderClient30allowDisplayingInsecureContentEbPNS_14SecurityOriginERKNS_3URLE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return i2 | 0;
}
function __ZN7WebCore17FrameLoaderClient27allowRunningInsecureContentEbPNS_14SecurityOriginERKNS_3URLE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return i2 | 0;
}
function dynCall_iiiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return FUNCTION_TABLE_iiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
}
function b10(i1, i2, i3, i4, i5, i6, i7, i8, i9) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 abort(10);
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function __ZN7WebCore17FrameLoaderClient56dispatchWillDisconnectDOMWindowExtensionFromGlobalObjectEPNS_18DOMWindowExtensionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZNK7WebCore11FrameLoader20activeDocumentLoaderEv(i1) {
 i1 = i1 | 0;
 return HEAP32[((HEAP32[i1 + 40 >> 2] | 0) == 0 ? i1 + 52 | 0 : i1 + 48 | 0) >> 2] | 0;
}
function __ZN7WebCore17FrameLoaderClient52dispatchWillDestroyGlobalObjectForDOMWindowExtensionEPNS_18DOMWindowExtensionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore17FrameLoaderClient52dispatchDidReconnectDOMWindowExtensionToGlobalObjectEPNS_18DOMWindowExtensionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function dynCall_viidd(i1, i2, i3, d4, d5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 d5 = +d5;
 FUNCTION_TABLE_viidd[i1 & 1](i2 | 0, i3 | 0, +d4, +d5);
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
 FUNCTION_TABLE_viii[i1 & 3](i2 | 0, i3 | 0, i4 | 0);
}
function __ZN7WebCore17FrameLoaderClient21allowScriptFromSourceEbRKNS_3URLE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return i2 | 0;
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function __ZN7WebCore17FrameLoaderClient27dispatchWillRequestResourceEPNS_21CachedResourceRequestE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore5TimerINS_11FrameLoaderEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBaseD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1 | 0);
 return;
}
function __ZN7WebCore17FrameLoaderClient28dispatchWillOpenSocketStreamEPNS_18SocketStreamHandleE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore17FrameLoaderClient29dispatchGlobalObjectAvailableERNS_15DOMWrapperWorldE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore17FrameLoaderClient38shouldForceUniversalAccessFromLocalURLERKNS_3URLE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 0;
}
function __ZNK7WebCore17FrameLoaderClient29shouldAlwaysUsePluginDocumentERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 0;
}
function __ZNK7WebCore17FrameLoaderClient28dispatchDidFailToStartPluginEPKNS_10PluginViewE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore17FrameLoaderClient10allowImageEbRKNS_3URLE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return i2 | 0;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 15](i2 | 0, i3 | 0) | 0;
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
function __ZNK7WebCore17FrameLoaderClient25shouldLoadMediaElementURLERKNS_3URLE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 1;
}
function b13(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(13);
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
function __ZN7WebCore21isBackForwardLoadTypeENS_13FrameLoadTypeE(i1) {
 i1 = i1 | 0;
 return (i1 - 1 | 0) >>> 0 < 3 >>> 0 | 0;
}
function __ZNK7WebCore17FrameLoaderClient22shouldPaintBrokenImageERKNS_3URLE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 1;
}
function setThrew(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((__THREW__ | 0) == 0) {
  __THREW__ = i1;
  threwValue = i2;
 }
}
function __ZN7WebCore11FrameLoader8loadDoneEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11FrameLoader14checkCompletedEv(i1);
 return;
}
function dynCall_did(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 return +FUNCTION_TABLE_did[i1 & 3](i2 | 0, +d3);
}
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 63](i2 | 0, i3 | 0);
}
function __ZNK7WebCore11FrameLoader11isReplacingEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 44 >> 2] | 0) == 8 | 0;
}
function b0(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(0);
}
function __ZNK7WebCore11FrameLoader10isCompleteEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[i1 + 76 | 0] & 1) != 0 | 0;
}
function __ZN7WebCore5TimerINS_11FrameLoaderEED1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBaseD2Ev(i1);
 return;
}
function __ZNK7WebCore11FrameLoader17networkingContextEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 232 >> 2] | 0;
}
function __ZN7WebCore17FrameLoaderClient19didLoseWebGLContextEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore17FrameLoaderClient12allowPluginsEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return i2 | 0;
}
function __ZN7WebCore17FrameLoaderClient11allowScriptEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return i2 | 0;
}
function __ZN7WebCore17FrameLoaderClient17dispatchDidLayoutEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore17FrameLoaderClient10allowWebGLEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return i2 | 0;
}
function b2(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(2);
 return 0;
}
function __ZN7WebCore11FrameLoader23timeOfLastCompletedLoadEv() {
 return +(+HEAPF64[H_BASE + 2088 >> 3]);
}
function __ZN7WebCore11FrameLoader12setReplacingEv(i1) {
 i1 = i1 | 0;
 HEAP32[i1 + 44 >> 2] = 8;
 return;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 31](i2 | 0) | 0;
}
function __ZN7WebCore17FrameLoaderClient30updateGlobalHistoryItemForPageEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore17FrameLoaderClient29dispatchDidNavigateWithinPageEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore11FrameLoader8loadTypeEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 44 >> 2] | 0;
}
function __ZN7WebCore17FrameLoaderClient27willChangeEstimatedProgressEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore17FrameLoaderClient27forcePageTransitionIfNeededEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore9TimerBase15alignedFireTimeEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 return +d2;
}
function __ZN7WebCore17FrameLoaderClient26didChangeEstimatedProgressEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore17FrameLoaderClient24isEmptyFrameLoaderClientEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b11(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(11);
}
function __ZN7WebCore11FrameLoader6openerEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 196 >> 2] | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 127](i2 | 0);
}
function __ZN7WebCore17FrameLoaderClient21didChangeScrollOffsetEv(i1) {
 i1 = i1 | 0;
 return;
}
function b8(i1, i2, d3, d4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 d4 = +d4;
 abort(8);
}
function __ZN7WebCore17FrameLoaderClient17dispatchDidLayoutEv(i1) {
 i1 = i1 | 0;
 return;
}
function b7(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(7);
 return 0;
}
function __ZN7WebCore17FrameLoaderClient15didDisownOpenerEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore17FrameLoaderClient11hasHTMLViewEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZN7WebCore17FrameLoaderClientD0Ev(i1) {
 i1 = i1 | 0;
 __ZdlPv(i1);
 return;
}
function b14(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(14);
}
function b12(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(12);
 return 0;
}
function __ZN7WebCore17FrameLoaderClientD1Ev(i1) {
 i1 = i1 | 0;
 return;
}
function b3(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 abort(3);
 return +0;
}
function v____cxa_pure_virtual__wrapper() {
 ___cxa_pure_virtual();
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 3]();
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
  var FUNCTION_TABLE_viiiii = [b0,b0];
  var FUNCTION_TABLE_viiiiii = [b1,b1,___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader15loadPostRequestERKNS2_15ResourceRequestERKN3WTF6StringESA_bNS2_13FrameLoadTypeENS7_10PassRefPtrINS2_5EventEEENSC_INS2_9FormStateEEEE3$_5NS_9allocatorISH_EEFvS6_SG_SA_RKNS2_16NavigationActionEbEEclES6_OSG_SA_SM_Ob_,b1,___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader4loadERKNS2_16FrameLoadRequestEE3$_2NS_9allocatorIS7_EEFvRKNS2_15ResourceRequestEN3WTF10PassRefPtrINS2_9FormStateEEERKNSD_6StringERKNS2_16NavigationActionEbEEclESC_OSG_SJ_SM_Ob_,b1,___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader7loadURLERKNS2_3URLERKN3WTF6StringESA_bNS2_13FrameLoadTypeENS7_10PassRefPtrINS2_5EventEEENSC_INS2_9FormStateEEEE3$_0NS_9allocatorISH_EEFvRKNS2_15ResourceRequestESG_SA_RKNS2_16NavigationActionEbEEclESM_OSG_SA_SP_Ob_,b1];
  var FUNCTION_TABLE_iiiii = [b2,b2,__ZN7WebCore17FrameLoaderClient27allowRunningInsecureContentEbPNS_14SecurityOriginERKNS_3URLE,b2,__ZN7WebCore17FrameLoaderClient30allowDisplayingInsecureContentEbPNS_14SecurityOriginERKNS_3URLE,b2,b2,b2];
  var FUNCTION_TABLE_did = [b3,b3,__ZNK7WebCore9TimerBase15alignedFireTimeEd,b3];
  var FUNCTION_TABLE_vi = [b4,b4,___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader22loadWithDocumentLoaderEPNS2_14DocumentLoaderENS2_13FrameLoadTypeEN3WTF10PassRefPtrINS2_9FormStateEEEE3$_3NS_9allocatorISB_EEFvRKNS2_15ResourceRequestESA_bEE7destroyEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader7loadURLERKNS2_3URLERKN3WTF6StringESA_bNS2_13FrameLoadTypeENS7_10PassRefPtrINS2_5EventEEENSC_INS2_9FormStateEEEE3$_1_0NS_9allocatorISH_EEFvRKNS2_15ResourceRequestESG_bEE7destroyEv_,b4,__ZN7WebCore5TimerINS_11FrameLoaderEED1Ev,b4,__ZN7WebCore17FrameLoaderClientD0Ev,b4,__ZN7WebCore17FrameLoaderClient30updateGlobalHistoryItemForPageEv,b4,___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader7loadURLERKNS2_3URLERKN3WTF6StringESA_bNS2_13FrameLoadTypeENS7_10PassRefPtrINS2_5EventEEENSC_INS2_9FormStateEEEE3$_0NS_9allocatorISH_EEFvRKNS2_15ResourceRequestESG_SA_RKNS2_16NavigationActionEbEED2Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader15loadPostRequestERKNS2_15ResourceRequestERKN3WTF6StringESA_bNS2_13FrameLoadTypeENS7_10PassRefPtrINS2_5EventEEENSC_INS2_9FormStateEEEE3$_5NS_9allocatorISH_EEFvS6_SG_SA_RKNS2_16NavigationActionEbEED0Ev_,b4,__ZN7WebCore17FrameLoaderClient26didChangeEstimatedProgressEv,b4,__ZN7WebCore5TimerINS_11FrameLoaderEE5firedEv,b4,___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader22loadWithDocumentLoaderEPNS2_14DocumentLoaderENS2_13FrameLoadTypeEN3WTF10PassRefPtrINS2_9FormStateEEEE3$_3NS_9allocatorISB_EEFvRKNS2_15ResourceRequestESA_bEED0Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader15loadPostRequestERKNS2_15ResourceRequestERKN3WTF6StringESA_bNS2_13FrameLoadTypeENS7_10PassRefPtrINS2_5EventEEENSC_INS2_9FormStateEEEE3$_5NS_9allocatorISH_EEFvS6_SG_SA_RKNS2_16NavigationActionEbEED2Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader4loadERKNS2_16FrameLoadRequestEE3$_2NS_9allocatorIS7_EEFvRKNS2_15ResourceRequestEN3WTF10PassRefPtrINS2_9FormStateEEERKNSD_6StringERKNS2_16NavigationActionEbEED2Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader4loadERKNS2_16FrameLoadRequestEE3$_2NS_9allocatorIS7_EEFvRKNS2_15ResourceRequestEN3WTF10PassRefPtrINS2_9FormStateEEERKNSD_6StringERKNS2_16NavigationActionEbEE7destroyEv_,b4,__ZN7WebCore17FrameLoaderClient27willChangeEstimatedProgressEv
  ,b4,___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader4loadERKNS2_16FrameLoadRequestEE3$_2NS_9allocatorIS7_EEFvRKNS2_15ResourceRequestEN3WTF10PassRefPtrINS2_9FormStateEEERKNSD_6StringERKNS2_16NavigationActionEbEE18destroy_deallocateEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader33continueLoadAfterNavigationPolicyERKNS2_15ResourceRequestEN3WTF10PassRefPtrINS2_9FormStateEEEbE3$_6NS_9allocatorISB_EEFvNS2_12PolicyActionEEED0Ev_,b4,__ZN7WebCore17FrameLoaderClient15didDisownOpenerEv,b4,__ZN7WebCore17FrameLoaderClient21didChangeScrollOffsetEv,b4,___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader7loadURLERKNS2_3URLERKN3WTF6StringESA_bNS2_13FrameLoadTypeENS7_10PassRefPtrINS2_5EventEEENSC_INS2_9FormStateEEEE3$_0NS_9allocatorISH_EEFvRKNS2_15ResourceRequestESG_SA_RKNS2_16NavigationActionEbEE18destroy_deallocateEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader22loadWithDocumentLoaderEPNS2_14DocumentLoaderENS2_13FrameLoadTypeEN3WTF10PassRefPtrINS2_9FormStateEEEE3$_4_0NS_9allocatorISB_EEFvRKNS2_15ResourceRequestESA_bEE18destroy_deallocateEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader7loadURLERKNS2_3URLERKN3WTF6StringESA_bNS2_13FrameLoadTypeENS7_10PassRefPtrINS2_5EventEEENSC_INS2_9FormStateEEEE3$_1_0NS_9allocatorISH_EEFvRKNS2_15ResourceRequestESG_bEED0Ev_,b4,__ZN7WebCore17FrameLoaderClient29dispatchDidNavigateWithinPageEv,b4,___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader33continueLoadAfterNavigationPolicyERKNS2_15ResourceRequestEN3WTF10PassRefPtrINS2_9FormStateEEEbE3$_6NS_9allocatorISB_EEFvNS2_12PolicyActionEEE18destroy_deallocateEv_,b4,__ZN7WebCore5TimerINS_11FrameLoaderEED0Ev,b4,___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader33continueLoadAfterNavigationPolicyERKNS2_15ResourceRequestEN3WTF10PassRefPtrINS2_9FormStateEEEbE3$_6NS_9allocatorISB_EEFvNS2_12PolicyActionEEED2Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader4loadERKNS2_16FrameLoadRequestEE3$_2NS_9allocatorIS7_EEFvRKNS2_15ResourceRequestEN3WTF10PassRefPtrINS2_9FormStateEEERKNSD_6StringERKNS2_16NavigationActionEbEED0Ev_,b4,__ZN7WebCore17FrameLoaderClientD1Ev,b4,___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader22loadWithDocumentLoaderEPNS2_14DocumentLoaderENS2_13FrameLoadTypeEN3WTF10PassRefPtrINS2_9FormStateEEEE3$_4_0NS_9allocatorISB_EEFvRKNS2_15ResourceRequestESA_bEED0Ev_,b4,__ZN7WebCore17FrameLoaderClient27forcePageTransitionIfNeededEv
  ,b4,___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader33continueLoadAfterNavigationPolicyERKNS2_15ResourceRequestEN3WTF10PassRefPtrINS2_9FormStateEEEbE3$_6NS_9allocatorISB_EEFvNS2_12PolicyActionEEE7destroyEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader15loadPostRequestERKNS2_15ResourceRequestERKN3WTF6StringESA_bNS2_13FrameLoadTypeENS7_10PassRefPtrINS2_5EventEEENSC_INS2_9FormStateEEEE3$_5NS_9allocatorISH_EEFvS6_SG_SA_RKNS2_16NavigationActionEbEE7destroyEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader15loadPostRequestERKNS2_15ResourceRequestERKN3WTF6StringESA_bNS2_13FrameLoadTypeENS7_10PassRefPtrINS2_5EventEEENSC_INS2_9FormStateEEEE3$_5NS_9allocatorISH_EEFvS6_SG_SA_RKNS2_16NavigationActionEbEE18destroy_deallocateEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader22loadWithDocumentLoaderEPNS2_14DocumentLoaderENS2_13FrameLoadTypeEN3WTF10PassRefPtrINS2_9FormStateEEEE3$_4_0NS_9allocatorISB_EEFvRKNS2_15ResourceRequestESA_bEE7destroyEv_,b4,___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader7loadURLERKNS2_3URLERKN3WTF6StringESA_bNS2_13FrameLoadTypeENS7_10PassRefPtrINS2_5EventEEENSC_INS2_9FormStateEEEE3$_1_0NS_9allocatorISH_EEFvRKNS2_15ResourceRequestESG_bEED2Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader22loadWithDocumentLoaderEPNS2_14DocumentLoaderENS2_13FrameLoadTypeEN3WTF10PassRefPtrINS2_9FormStateEEEE3$_3NS_9allocatorISB_EEFvRKNS2_15ResourceRequestESA_bEED2Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader22loadWithDocumentLoaderEPNS2_14DocumentLoaderENS2_13FrameLoadTypeEN3WTF10PassRefPtrINS2_9FormStateEEEE3$_3NS_9allocatorISB_EEFvRKNS2_15ResourceRequestESA_bEE18destroy_deallocateEv_,b4,__ZN7WebCore11FrameLoaderD2Ev,b4,___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader22loadWithDocumentLoaderEPNS2_14DocumentLoaderENS2_13FrameLoadTypeEN3WTF10PassRefPtrINS2_9FormStateEEEE3$_4_0NS_9allocatorISB_EEFvRKNS2_15ResourceRequestESA_bEED2Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader7loadURLERKNS2_3URLERKN3WTF6StringESA_bNS2_13FrameLoadTypeENS7_10PassRefPtrINS2_5EventEEENSC_INS2_9FormStateEEEE3$_1_0NS_9allocatorISH_EEFvRKNS2_15ResourceRequestESG_bEE18destroy_deallocateEv_,b4,__ZN7WebCore17FrameLoaderClient17dispatchDidLayoutEv,b4,___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader7loadURLERKNS2_3URLERKN3WTF6StringESA_bNS2_13FrameLoadTypeENS7_10PassRefPtrINS2_5EventEEENSC_INS2_9FormStateEEEE3$_0NS_9allocatorISH_EEFvRKNS2_15ResourceRequestESG_SA_RKNS2_16NavigationActionEbEED0Ev_,b4,___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader7loadURLERKNS2_3URLERKN3WTF6StringESA_bNS2_13FrameLoadTypeENS7_10PassRefPtrINS2_5EventEEENSC_INS2_9FormStateEEEE3$_0NS_9allocatorISH_EEFvRKNS2_15ResourceRequestESG_SA_RKNS2_16NavigationActionEbEE7destroyEv_,b4,b4,b4,b4
  ,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4
  ,b4,b4,b4,b4,b4,b4,b4,b4,b4];
  var FUNCTION_TABLE_vii = [b5,b5,__ZN7WebCore17FrameLoaderClient19didLoseWebGLContextEi,b5,___ZNKSt3__110__function6__funcIZN7WebCore11FrameLoader7loadURLERKNS2_3URLERKN3WTF6StringESA_bNS2_13FrameLoadTypeENS7_10PassRefPtrINS2_5EventEEENSC_INS2_9FormStateEEEE3$_1_0NS_9allocatorISH_EEFvRKNS2_15ResourceRequestESG_bEE7__cloneEPNS0_6__baseISN_EE_,b5,___ZNKSt3__110__function6__funcIZN7WebCore11FrameLoader22loadWithDocumentLoaderEPNS2_14DocumentLoaderENS2_13FrameLoadTypeEN3WTF10PassRefPtrINS2_9FormStateEEEE3$_4_0NS_9allocatorISB_EEFvRKNS2_15ResourceRequestESA_bEE7__cloneEPNS0_6__baseISH_EE_,b5,___ZNKSt3__110__function6__funcIZN7WebCore11FrameLoader22loadWithDocumentLoaderEPNS2_14DocumentLoaderENS2_13FrameLoadTypeEN3WTF10PassRefPtrINS2_9FormStateEEEE3$_3NS_9allocatorISB_EEFvRKNS2_15ResourceRequestESA_bEE7__cloneEPNS0_6__baseISH_EE_,b5,__ZN7WebCore17FrameLoaderClient28dispatchWillOpenSocketStreamEPNS_18SocketStreamHandleE,b5,___ZNKSt3__110__function6__funcIZN7WebCore11FrameLoader33continueLoadAfterNavigationPolicyERKNS2_15ResourceRequestEN3WTF10PassRefPtrINS2_9FormStateEEEbE3$_6NS_9allocatorISB_EEFvNS2_12PolicyActionEEE7__cloneEPNS0_6__baseISF_EE_,b5,__ZN7WebCore17FrameLoaderClient27dispatchWillRequestResourceEPNS_21CachedResourceRequestE,b5,__ZN7WebCore17FrameLoaderClient29dispatchGlobalObjectAvailableERNS_15DOMWrapperWorldE,b5,__ZNK7WebCore17FrameLoaderClient28dispatchDidFailToStartPluginEPKNS_10PluginViewE,b5,___ZNKSt3__110__function6__funcIZN7WebCore11FrameLoader7loadURLERKNS2_3URLERKN3WTF6StringESA_bNS2_13FrameLoadTypeENS7_10PassRefPtrINS2_5EventEEENSC_INS2_9FormStateEEEE3$_0NS_9allocatorISH_EEFvRKNS2_15ResourceRequestESG_SA_RKNS2_16NavigationActionEbEE7__cloneEPNS0_6__baseISQ_EE_,b5,__ZN7WebCore17FrameLoaderClient52dispatchDidReconnectDOMWindowExtensionToGlobalObjectEPNS_18DOMWindowExtensionE,b5,__ZN7WebCore17FrameLoaderClient52dispatchWillDestroyGlobalObjectForDOMWindowExtensionEPNS_18DOMWindowExtensionE,b5,___ZNKSt3__110__function6__funcIZN7WebCore11FrameLoader4loadERKNS2_16FrameLoadRequestEE3$_2NS_9allocatorIS7_EEFvRKNS2_15ResourceRequestEN3WTF10PassRefPtrINS2_9FormStateEEERKNSD_6StringERKNS2_16NavigationActionEbEE7__cloneEPNS0_6__baseISN_EE_,b5,__ZN7WebCore17FrameLoaderClient56dispatchWillDisconnectDOMWindowExtensionFromGlobalObjectEPNS_18DOMWindowExtensionE
  ,b5,__ZN7WebCore11FrameLoader15checkTimerFiredEPNS_5TimerIS0_EE,b5,__ZN7WebCore17FrameLoaderClient17dispatchDidLayoutEj,b5,___ZNKSt3__110__function6__funcIZN7WebCore11FrameLoader15loadPostRequestERKNS2_15ResourceRequestERKN3WTF6StringESA_bNS2_13FrameLoadTypeENS7_10PassRefPtrINS2_5EventEEENSC_INS2_9FormStateEEEE3$_5NS_9allocatorISH_EEFvS6_SG_SA_RKNS2_16NavigationActionEbEE7__cloneEPNS0_6__baseISN_EE_,b5,___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader33continueLoadAfterNavigationPolicyERKNS2_15ResourceRequestEN3WTF10PassRefPtrINS2_9FormStateEEEbE3$_6NS_9allocatorISB_EEFvNS2_12PolicyActionEEEclEOSE__,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5
  ,b5,b5,b5,b5,b5];
  var FUNCTION_TABLE_ii = [b6,b6,___ZNKSt3__110__function6__funcIZN7WebCore11FrameLoader7loadURLERKNS2_3URLERKN3WTF6StringESA_bNS2_13FrameLoadTypeENS7_10PassRefPtrINS2_5EventEEENSC_INS2_9FormStateEEEE3$_1_0NS_9allocatorISH_EEFvRKNS2_15ResourceRequestESG_bEE7__cloneEv_,b6,__ZN7WebCore17FrameLoaderClient24isEmptyFrameLoaderClientEv,b6,___ZNKSt3__110__function6__funcIZN7WebCore11FrameLoader7loadURLERKNS2_3URLERKN3WTF6StringESA_bNS2_13FrameLoadTypeENS7_10PassRefPtrINS2_5EventEEENSC_INS2_9FormStateEEEE3$_0NS_9allocatorISH_EEFvRKNS2_15ResourceRequestESG_SA_RKNS2_16NavigationActionEbEE7__cloneEv_,b6,___ZNKSt3__110__function6__funcIZN7WebCore11FrameLoader15loadPostRequestERKNS2_15ResourceRequestERKN3WTF6StringESA_bNS2_13FrameLoadTypeENS7_10PassRefPtrINS2_5EventEEENSC_INS2_9FormStateEEEE3$_5NS_9allocatorISH_EEFvS6_SG_SA_RKNS2_16NavigationActionEbEE7__cloneEv_,b6,__ZNK7WebCore17FrameLoaderClient11hasHTMLViewEv,b6,___ZNKSt3__110__function6__funcIZN7WebCore11FrameLoader33continueLoadAfterNavigationPolicyERKNS2_15ResourceRequestEN3WTF10PassRefPtrINS2_9FormStateEEEbE3$_6NS_9allocatorISB_EEFvNS2_12PolicyActionEEE7__cloneEv_,b6,__ZN7WebCore11isHTMLSpaceEt,b6,___ZNKSt3__110__function6__funcIZN7WebCore11FrameLoader4loadERKNS2_16FrameLoadRequestEE3$_2NS_9allocatorIS7_EEFvRKNS2_15ResourceRequestEN3WTF10PassRefPtrINS2_9FormStateEEERKNSD_6StringERKNS2_16NavigationActionEbEE7__cloneEv_,b6,___ZNKSt3__110__function6__funcIZN7WebCore11FrameLoader22loadWithDocumentLoaderEPNS2_14DocumentLoaderENS2_13FrameLoadTypeEN3WTF10PassRefPtrINS2_9FormStateEEEE3$_4_0NS_9allocatorISB_EEFvRKNS2_15ResourceRequestESA_bEE7__cloneEv_,b6,___ZNKSt3__110__function6__funcIZN7WebCore11FrameLoader22loadWithDocumentLoaderEPNS2_14DocumentLoaderENS2_13FrameLoadTypeEN3WTF10PassRefPtrINS2_9FormStateEEEE3$_3NS_9allocatorISB_EEFvRKNS2_15ResourceRequestESA_bEE7__cloneEv_,b6,b6,b6,b6,b6,b6,b6,b6
  ,b6,b6,b6];
  var FUNCTION_TABLE_iiii = [b7,b7,__ZN7WebCore17FrameLoaderClient10allowImageEbRKNS_3URLE,b7,__ZN7WebCore17FrameLoaderClient21allowScriptFromSourceEbRKNS_3URLE,b7,b7,b7];
  var FUNCTION_TABLE_viidd = [b8,b8];
  var FUNCTION_TABLE_v = [b9,b9,v____cxa_pure_virtual__wrapper,b9];
  var FUNCTION_TABLE_viiiiiiiii = [b10,b10];
  var FUNCTION_TABLE_viiii = [b11,b11,___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader7loadURLERKNS2_3URLERKN3WTF6StringESA_bNS2_13FrameLoadTypeENS7_10PassRefPtrINS2_5EventEEENSC_INS2_9FormStateEEEE3$_1_0NS_9allocatorISH_EEFvRKNS2_15ResourceRequestESG_bEEclESM_OSG_Ob_,b11,___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader22loadWithDocumentLoaderEPNS2_14DocumentLoaderENS2_13FrameLoadTypeEN3WTF10PassRefPtrINS2_9FormStateEEEE3$_3NS_9allocatorISB_EEFvRKNS2_15ResourceRequestESA_bEEclESG_OSA_Ob_,b11,___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader22loadWithDocumentLoaderEPNS2_14DocumentLoaderENS2_13FrameLoadTypeEN3WTF10PassRefPtrINS2_9FormStateEEEE3$_4_0NS_9allocatorISB_EEFvRKNS2_15ResourceRequestESA_bEEclESG_OSA_Ob_,b11];
  var FUNCTION_TABLE_iii = [b12,b12,__ZN7WebCore17FrameLoaderClient11allowScriptEb,b12,__ZN7WebCore17FrameLoaderClient38shouldForceUniversalAccessFromLocalURLERKNS_3URLE,b12,__ZNK7WebCore17FrameLoaderClient29shouldAlwaysUsePluginDocumentERKN3WTF6StringE,b12,__ZNK7WebCore17FrameLoaderClient25shouldLoadMediaElementURLERKNS_3URLE,b12,__ZNK7WebCore17FrameLoaderClient22shouldPaintBrokenImageERKNS_3URLE,b12,__ZN7WebCore17FrameLoaderClient10allowWebGLEb,b12,__ZN7WebCore17FrameLoaderClient12allowPluginsEb,b12];
  var FUNCTION_TABLE_iiiiii = [b13,b13];
  var FUNCTION_TABLE_viii = [b14,b14,__ZN7WebCore11FrameLoaderC2ERNS_5FrameERNS_17FrameLoaderClientE,b14];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_viiiiii: dynCall_viiiiii, dynCall_iiiii: dynCall_iiiii, dynCall_did: dynCall_did, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_iiii: dynCall_iiii, dynCall_viidd: dynCall_viidd, dynCall_v: dynCall_v, dynCall_viiiiiiiii: dynCall_viiiiiiiii, dynCall_viiii: dynCall_viiii, dynCall_iii: dynCall_iii, dynCall_iiiiii: dynCall_iiiiii, dynCall_viii: dynCall_viii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_viiiiii": invoke_viiiiii, "invoke_iiiii": invoke_iiiii, "invoke_did": invoke_did, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_iiii": invoke_iiii, "invoke_viidd": invoke_viidd, "invoke_v": invoke_v, "invoke_viiiiiiiii": invoke_viiiiiiiii, "invoke_viiii": invoke_viiii, "invoke_iii": invoke_iii, "invoke_iiiiii": invoke_iiiiii, "invoke_viii": invoke_viii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___cxa_pure_virtual": ___cxa_pure_virtual, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames9iframeTagE": __ZN7WebCore9HTMLNames9iframeTagE, "__ZN3WTF8nullAtomE": __ZN3WTF8nullAtomE, "__ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE": __ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE, "__ZN7WebCore9HTMLNames10srcdocAttrE": __ZN7WebCore9HTMLNames10srcdocAttrE, "__ZN3WTF10StringImpl19latin1CaseFoldTableE": __ZN3WTF10StringImpl19latin1CaseFoldTableE, "__ZN7WebCore9HTMLNames9objectTagE": __ZN7WebCore9HTMLNames9objectTagE, "__ZN7WebCore33NavigationDisablerForBeforeUnload24s_navigationDisableCountE": __ZN7WebCore33NavigationDisablerForBeforeUnload24s_navigationDisableCountE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_viiiiii = Module["dynCall_viiiiii"] = asm["dynCall_viiiiii"];
var dynCall_iiiii = Module["dynCall_iiiii"] = asm["dynCall_iiiii"];
var dynCall_did = Module["dynCall_did"] = asm["dynCall_did"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
var dynCall_viidd = Module["dynCall_viidd"] = asm["dynCall_viidd"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_viiiiiiiii = Module["dynCall_viiiiiiiii"] = asm["dynCall_viiiiiiiii"];
var dynCall_viiii = Module["dynCall_viiii"] = asm["dynCall_viiii"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
var dynCall_iiiiii = Module["dynCall_iiiiii"] = asm["dynCall_iiiiii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore19ResourceRequestBaseaSERKS0_","___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader15loadPostRequestERKNS2_15ResourceRequestERKN3WTF6StringESA_bNS2_13FrameLoadTypeENS7_10PassRefPtrINS2_5EventEEENSC_INS2_9FormStateEEEE3$_5NS_9allocatorISH_EEFvS6_SG_SA_RKNS2_16NavigationActionEbEE18destroy_deallocateEv_","__ZN7WebCore17FrameLoaderClient11allowScriptEb","__ZN7WebCore11FrameLoader29checkLoadCompleteForThisFrameEv","__ZN7WebCore11FrameLoader11shouldCloseEv","__ZN7WebCore14SecurityOriginD2Ev","__ZN7WebCore11FrameLoader40dispatchDidClearWindowObjectsInAllWorldsEv","__ZN7WebCore15ResourceRequestC2Ev","__ZN7WebCore11FrameLoader24defaultObjectContentTypeERKNS_3URLERKN3WTF6StringEb","___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader22loadWithDocumentLoaderEPNS2_14DocumentLoaderENS2_13FrameLoadTypeEN3WTF10PassRefPtrINS2_9FormStateEEEE3$_3NS_9allocatorISB_EEFvRKNS2_15ResourceRequestESA_bEE7destroyEv_","__ZN7WebCore11FrameLoader25loadDifferentDocumentItemEPNS_11HistoryItemENS_13FrameLoadTypeENS0_29FormSubmissionCacheLoadPolicyE","__ZN7WebCore11FrameLoader16clientRedirectedERKNS_3URLEddb","__ZN7WebCore11FrameLoader22scheduleCheckCompletedEv","__ZN3WTF12StringHasher28addCharactersAssumingAlignedItXadL_ZNS_15CaseFoldingHash8foldCaseItEEtT_EEEEvPKS4_j","__ZN7WebCore17FrameLoaderClient10allowImageEbRKNS_3URLE","__ZN7WebCore11FrameLoader33clientRedirectCancelledOrFinishedEb","__ZN7WebCore11FrameLoader16loadFrameRequestERKNS_16FrameLoadRequestEbbN3WTF10PassRefPtrINS_5EventEEENS5_INS_9FormStateEEENS_18ShouldSendReferrerE","__ZN7WebCore11FrameLoader17stopForUserCancelEb","__ZN3WTF7HashSetIPN7WebCore5FrameENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_","__ZN7WebCore20ResourceResponseBaseD2Ev","__ZN3WTF12StringAppendINS0_IPKcNS_6StringEEES2_E7writeToEPt","__ZN7WebCore11FrameLoader43continueFragmentScrollAfterNavigationPolicyERKNS_15ResourceRequestEb","__ZN7WebCore11FrameLoader4initEv","__ZN7WebCore11FrameLoader25receivedMainResourceErrorERKNS_13ResourceErrorE","__ZN7WebCore11FrameLoader34shouldReloadToHandleUnreachableURLEPNS_14DocumentLoaderE","___ZNKSt3__110__function6__funcIZN7WebCore11FrameLoader15loadPostRequestERKNS2_15ResourceRequestERKN3WTF6StringESA_bNS2_13FrameLoadTypeENS7_10PassRefPtrINS2_5EventEEENSC_INS2_9FormStateEEEE3$_5NS_9allocatorISH_EEFvS6_SG_SA_RKNS2_16NavigationActionEbEE7__cloneEv_","__ZN3WTF15CaseFoldingHash4hashERNS_10StringImplE","___ZNKSt3__110__function6__funcIZN7WebCore11FrameLoader7loadURLERKNS2_3URLERKN3WTF6StringESA_bNS2_13FrameLoadTypeENS7_10PassRefPtrINS2_5EventEEENSC_INS2_9FormStateEEEE3$_1_0NS_9allocatorISH_EEFvRKNS2_15ResourceRequestESG_bEE7__cloneEPNS0_6__baseISN_EE_","__ZN7WebCore11FrameLoader21commitProvisionalLoadEv","_memcpy","__ZN7WebCore11FrameLoader15didExplicitOpenEv","__ZN7WebCore11FrameLoader22loadWithDocumentLoaderEPNS_14DocumentLoaderENS_13FrameLoadTypeEN3WTF10PassRefPtrINS_9FormStateEEE","__ZN7WebCore17FrameLoaderClient27allowRunningInsecureContentEbPNS_14SecurityOriginERKNS_3URLE","__ZN7WebCore11FrameLoader35dispatchDidClearWindowObjectInWorldERNS_15DOMWrapperWorldE","__ZN7WebCore11FrameLoader27prepareForCachedPageRestoreEv","__ZN7WebCore11FrameLoader23willLoadMediaElementURLERNS_3URLE","__ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E3addINS_22IdentityHashTranslatorIS7_EERKS1_RKS4_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S4_S6_S7_SD_SA_EEEEOT0_OT1_","__ZN7WebCore11FrameLoader22provisionalLoadStartedEv","___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader7loadURLERKNS2_3URLERKN3WTF6StringESA_bNS2_13FrameLoadTypeENS7_10PassRefPtrINS2_5EventEEENSC_INS2_9FormStateEEEE3$_0NS_9allocatorISH_EEFvRKNS2_15ResourceRequestESG_SA_RKNS2_16NavigationActionEbEED2Ev_","__ZN7WebCore17FrameLoaderClient38shouldForceUniversalAccessFromLocalURLERKNS_3URLE","___ZNKSt3__110__function6__funcIZN7WebCore11FrameLoader22loadWithDocumentLoaderEPNS2_14DocumentLoaderENS2_13FrameLoadTypeEN3WTF10PassRefPtrINS2_9FormStateEEEE3$_3NS_9allocatorISB_EEFvRKNS2_15ResourceRequestESA_bEE7__cloneEPNS0_6__baseISH_EE_","__ZN3WTF10makeStringINS_6StringEPKcS1_EES1_T_T0_T1_","___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader4loadERKNS2_16FrameLoadRequestEE3$_2NS_9allocatorIS7_EEFvRKNS2_15ResourceRequestEN3WTF10PassRefPtrINS2_9FormStateEEERKNSD_6StringERKNS2_16NavigationActionEbEE18destroy_deallocateEv_","__ZN7WebCore11FrameLoader25scheduleCheckLoadCompleteEv","__ZN7WebCore5TimerINS_11FrameLoaderEE5firedEv","__ZN7WebCore11FrameLoader19closeAndRemoveChildEPNS_5FrameE","___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader15loadPostRequestERKNS2_15ResourceRequestERKN3WTF6StringESA_bNS2_13FrameLoadTypeENS7_10PassRefPtrINS2_5EventEEENSC_INS2_9FormStateEEEE3$_5NS_9allocatorISH_EEFvS6_SG_SA_RKNS2_16NavigationActionEbEED0Ev_","__ZN7WebCore11FrameLoader15setupForReplaceEv","__ZN7WebCore11FrameLoader7startedEv","__ZNK7WebCore11FrameLoader27numPendingOrLoadingRequestsEb","__ZN7WebCore11FrameLoaderC2ERNS_5FrameERNS_17FrameLoaderClientE","__ZN7WebCore11FrameLoader27prepareForHistoryNavigationEv","__ZN7WebCore11FrameLoader32continueLoadAfterNewWindowPolicyERKNS_15ResourceRequestEN3WTF10PassRefPtrINS_9FormStateEEERKNS4_6StringERKNS_16NavigationActionEb","__ZN7WebCore11FrameLoader23setPolicyDocumentLoaderEPNS_14DocumentLoaderE","__ZN7WebCore11FrameLoader16detachFromParentEv","__ZN7WebCore11FrameLoader37callContinueLoadAfterNavigationPolicyEPvRKNS_15ResourceRequestEN3WTF10PassRefPtrINS_9FormStateEEEb","__ZN7WebCore11FrameLoader32setOriginalURLForDownloadRequestERNS_15ResourceRequestE","__ZN7WebCore17FrameLoaderClient52dispatchDidReconnectDOMWindowExtensionToGlobalObjectEPNS_18DOMWindowExtensionE","__ZN7WebCore11FrameLoader37resetMultipleFormSubmissionProtectionEv","__ZN7WebCore15ResourceRequestaSERKS0_","__ZN7WebCore11FrameLoader18frameLoadCompletedEv","__ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_","__ZN7WebCore11FrameLoader47callContinueFragmentScrollAfterNavigationPolicyEPvRKNS_15ResourceRequestEN3WTF10PassRefPtrINS_9FormStateEEEb","__ZN7WebCore11FrameLoader19requestFromDelegateERNS_15ResourceRequestERmRNS_13ResourceErrorE","__ZN7WebCore11FrameLoader6reloadEb","__ZN7WebCore11FrameLoader34addExtraFieldsToSubresourceRequestERNS_15ResourceRequestE","__ZNK7WebCore11FrameLoader23isHostedByObjectElementEv","__ZN7WebCore14SubstituteDataC2ERKS0_","__ZNK7WebCore17FrameLoaderClient28dispatchDidFailToStartPluginEPKNS_10PluginViewE","__ZN7WebCore11FrameLoader22findFrameForNavigationERKN3WTF12AtomicStringEPNS_8DocumentE","__ZN7WebCore11FrameLoader23timeOfLastCompletedLoadEv","___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader22loadWithDocumentLoaderEPNS2_14DocumentLoaderENS2_13FrameLoadTypeEN3WTF10PassRefPtrINS2_9FormStateEEEE3$_3NS_9allocatorISB_EEFvRKNS2_15ResourceRequestESA_bEED0Ev_","___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader7loadURLERKNS2_3URLERKN3WTF6StringESA_bNS2_13FrameLoadTypeENS7_10PassRefPtrINS2_5EventEEENSC_INS2_9FormStateEEEE3$_1_0NS_9allocatorISH_EEFvRKNS2_15ResourceRequestESG_bEED2Ev_","__ZN7WebCore17FrameLoaderClientD1Ev","__ZN7WebCore11FrameLoader19prepareForLoadStartEv","__ZNK7WebCore17FrameLoaderClient11hasHTMLViewEv","___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader15loadPostRequestERKNS2_15ResourceRequestERKN3WTF6StringESA_bNS2_13FrameLoadTypeENS7_10PassRefPtrINS2_5EventEEENSC_INS2_9FormStateEEEE3$_5NS_9allocatorISH_EEFvS6_SG_SA_RKNS2_16NavigationActionEbEEclES6_OSG_SA_SM_Ob_","__ZN7WebCore11FrameLoader14detachChildrenEv","___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader4loadERKNS2_16FrameLoadRequestEE3$_2NS_9allocatorIS7_EEFvRKNS2_15ResourceRequestEN3WTF10PassRefPtrINS2_9FormStateEEERKNSD_6StringERKNS2_16NavigationActionEbEED2Ev_","__ZNK7WebCore11FrameLoader30shouldTreatURLAsSrcdocDocumentERKNS_3URLE","__ZN7WebCore11FrameLoader23handleBeforeUnloadEventERNS_6ChromeEPS0_","__ZN7WebCore11FrameLoader23addExtraFieldsToRequestERNS_15ResourceRequestENS_13FrameLoadTypeEb","__ZN7WebCore11FrameLoader33continueLoadAfterNavigationPolicyERKNS_15ResourceRequestEN3WTF10PassRefPtrINS_9FormStateEEEb","__ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E6rehashEiPS1_","__ZNK7WebCore11FrameLoader10isCompleteEv","___ZNKSt3__110__function6__funcIZN7WebCore11FrameLoader7loadURLERKNS2_3URLERKN3WTF6StringESA_bNS2_13FrameLoadTypeENS7_10PassRefPtrINS2_5EventEEENSC_INS2_9FormStateEEEE3$_1_0NS_9allocatorISH_EEFvRKNS2_15ResourceRequestESG_bEE7__cloneEv_","__ZN7WebCore17FrameLoaderClient10allowWebGLEb","__ZN3WTF9HashTableIPN7WebCore5FrameES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_","__ZNK7WebCore11FrameLoader14cancelledErrorERKNS_15ResourceRequestE","__ZNK7WebCore9TimerBase15alignedFireTimeEd","___ZNKSt3__110__function6__funcIZN7WebCore11FrameLoader33continueLoadAfterNavigationPolicyERKNS2_15ResourceRequestEN3WTF10PassRefPtrINS2_9FormStateEEEbE3$_6NS_9allocatorISB_EEFvNS2_12PolicyActionEEE7__cloneEPNS0_6__baseISF_EE_","___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader7loadURLERKNS2_3URLERKN3WTF6StringESA_bNS2_13FrameLoadTypeENS7_10PassRefPtrINS2_5EventEEENSC_INS2_9FormStateEEEE3$_1_0NS_9allocatorISH_EEFvRKNS2_15ResourceRequestESG_bEE18destroy_deallocateEv_","___ZNKSt3__110__function6__funcIZN7WebCore11FrameLoader33continueLoadAfterNavigationPolicyERKNS2_15ResourceRequestEN3WTF10PassRefPtrINS2_9FormStateEEEbE3$_6NS_9allocatorISB_EEFvNS2_12PolicyActionEEE7__cloneEv_","__ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_EaSERKSE_","__ZN7WebCore11FrameLoader21dispatchDidCommitLoadEv","__ZN7WebCore21isBackForwardLoadTypeENS_13FrameLoadTypeE","__ZN7WebCore11FrameLoader16didBeginDocumentEb","__ZN7WebCore17FrameLoaderClient24isEmptyFrameLoaderClientEv","___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader7loadURLERKNS2_3URLERKN3WTF6StringESA_bNS2_13FrameLoadTypeENS7_10PassRefPtrINS2_5EventEEENSC_INS2_9FormStateEEEE3$_1_0NS_9allocatorISH_EEFvRKNS2_15ResourceRequestESG_bEEclESM_OSG_Ob_","__ZN7WebCore5TimerINS_11FrameLoaderEED1Ev","__ZN7WebCore15ResourceRequestD2Ev","__ZN7WebCore11FrameLoader14cancelAndClearEv","__ZN7WebCore11FrameLoader21addHTTPOriginIfNeededERNS_15ResourceRequestERKN3WTF6StringE","__ZN7WebCore11FrameLoader27forcePageTransitionIfNeededEv","___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader33continueLoadAfterNavigationPolicyERKNS2_15ResourceRequestEN3WTF10PassRefPtrINS2_9FormStateEEEbE3$_6NS_9allocatorISB_EEFvNS2_12PolicyActionEEED0Ev_","__ZN7WebCore16FrameLoadRequestC1EPNS_14SecurityOriginERKNS_15ResourceRequestERKN3WTF6StringE","__ZN7WebCore11FrameLoader4loadEPNS_14DocumentLoaderE","__ZN7WebCore11FrameLoader14changeLocationEPNS_14SecurityOriginERKNS_3URLERKN3WTF6StringEbbb","__ZN7WebCore11FrameLoader6openerEv","__ZN7WebCore11FrameLoader13frameDetachedEv","__ZNK7WebCore11FrameLoader8referrerEv","__ZNK7WebCore11FrameLoader22subresourceCachePolicyEv","__ZN7WebCore11FrameLoader23setFirstPartyForCookiesERKNS_3URLE","__ZN7WebCore17FrameLoaderClient21didChangeScrollOffsetEv","__ZNK7WebCore11FrameLoader9isLoadingEv","__ZN7WebCore11FrameLoader17setDocumentLoaderEPNS_14DocumentLoaderE","__ZNK7WebCore11FrameLoader14outgoingOriginEv","__ZN7WebCore17FrameLoaderClient27dispatchWillRequestResourceEPNS_21CachedResourceRequestE","__ZNK7WebCore11FrameLoader29checkIfFormActionAllowedByCSPERKNS_3URLE","__ZN3WTF13tryMakeStringINS_6StringEPKcS1_S3_S1_EENS_10PassRefPtrINS_10StringImplEEET_T0_T1_T2_T3_","___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader22loadWithDocumentLoaderEPNS2_14DocumentLoaderENS2_13FrameLoadTypeEN3WTF10PassRefPtrINS2_9FormStateEEEE3$_3NS_9allocatorISB_EEFvRKNS2_15ResourceRequestESA_bEE18destroy_deallocateEv_","__ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEEaSERKS3_","__ZNK7WebCore11FrameLoader11isReplacingEv","__ZNK7WebCore11FrameLoader14frameHasLoadedEv","__ZN7WebCore11FrameLoader22checkCallImplicitCloseEv","__ZN7WebCore11FrameLoader14stopAllLoadersENS_26ClearProvisionalItemPolicyE","___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader22loadWithDocumentLoaderEPNS2_14DocumentLoaderENS2_13FrameLoadTypeEN3WTF10PassRefPtrINS2_9FormStateEEEE3$_4_0NS_9allocatorISB_EEFvRKNS2_15ResourceRequestESA_bEE18destroy_deallocateEv_","__ZN3WTF10makeStringINS_6StringEPKcS1_S3_S1_EES1_T_T0_T1_T2_T3_","__ZN7WebCore11FrameLoader41retryAfterFailedCacheOnlyMainResourceLoadEv","__ZN7WebCore11FrameLoader8setStateENS_10FrameStateE","___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader7loadURLERKNS2_3URLERKN3WTF6StringESA_bNS2_13FrameLoadTypeENS7_10PassRefPtrINS2_5EventEEENSC_INS2_9FormStateEEEE3$_0NS_9allocatorISH_EEFvRKNS2_15ResourceRequestESG_SA_RKNS2_16NavigationActionEbEE18destroy_deallocateEv_","__ZN7WebCore17FrameLoaderClient29dispatchDidNavigateWithinPageEv","___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader22loadWithDocumentLoaderEPNS2_14DocumentLoaderENS2_13FrameLoadTypeEN3WTF10PassRefPtrINS2_9FormStateEEEE3$_3NS_9allocatorISB_EEFvRKNS2_15ResourceRequestESA_bEEclESG_OSA_Ob_","__ZN7WebCore11FrameLoader5clearEPNS_8DocumentEbbb","__ZN7WebCore11FrameLoader30checkDidPerformFirstNavigationEv","__ZN3WTF6VectorIN7WebCore15ResourceRequestELj0ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN7WebCore17FrameLoaderClient21allowScriptFromSourceEbRKNS_3URLE","__ZN3WTF6VectorIN7WebCore15ResourceRequestELj0ENS_15CrashOnOverflowEE14appendSlowCaseIRKS2_EEvOT_","__ZNK7WebCore17FrameLoaderClient29shouldAlwaysUsePluginDocumentERKN3WTF6StringE","__ZN3WTF13tryMakeStringINS_12StringAppendINS1_INS1_IPKcNS_6StringEEES3_EES4_EES3_EENS_10PassRefPtrINS_10StringImplEEET_T0_","___ZNKSt3__110__function6__funcIZN7WebCore11FrameLoader4loadERKNS2_16FrameLoadRequestEE3$_2NS_9allocatorIS7_EEFvRKNS2_15ResourceRequestEN3WTF10PassRefPtrINS2_9FormStateEEERKNSD_6StringERKNS2_16NavigationActionEbEE7__cloneEv_","___ZNKSt3__110__function6__funcIZN7WebCore11FrameLoader7loadURLERKNS2_3URLERKN3WTF6StringESA_bNS2_13FrameLoadTypeENS7_10PassRefPtrINS2_5EventEEENSC_INS2_9FormStateEEEE3$_0NS_9allocatorISH_EEFvRKNS2_15ResourceRequestESG_SA_RKNS2_16NavigationActionEbEE7__cloneEv_","__ZN7WebCore11FrameLoader35shouldInterruptLoadForXFrameOptionsERKN3WTF6StringERKNS_3URLEm","___ZNKSt3__110__function6__funcIZN7WebCore11FrameLoader22loadWithDocumentLoaderEPNS2_14DocumentLoaderENS2_13FrameLoadTypeEN3WTF10PassRefPtrINS2_9FormStateEEEE3$_4_0NS_9allocatorISB_EEFvRKNS2_15ResourceRequestESA_bEE7__cloneEv_","__ZN3WTF6VectorINSt3__14pairINS_6StringES3_EELj0ENS_15CrashOnOverflowEED2Ev","__ZN7WebCore11FrameLoader19setOutgoingReferrerERKNS_3URLE","__ZN7WebCore11FrameLoader15loadPostRequestERKNS_15ResourceRequestERKN3WTF6StringES7_bNS_13FrameLoadTypeENS4_10PassRefPtrINS_5EventEEENS9_INS_9FormStateEEE","_memset","__ZN7WebCore17FrameLoaderClient15didDisownOpenerEv","__ZN7WebCore17FrameLoaderClient29dispatchGlobalObjectAvailableERNS_15DOMWrapperWorldE","__ZNK7WebCore11FrameLoader8loadTypeEv","__ZNK3WTF12StringAppendINS0_INS0_INS0_IPKcNS_6StringEEES2_EES3_EES2_EcvS3_Ev","___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader4loadERKNS2_16FrameLoadRequestEE3$_2NS_9allocatorIS7_EEFvRKNS2_15ResourceRequestEN3WTF10PassRefPtrINS2_9FormStateEEERKNSD_6StringERKNS2_16NavigationActionEbEED0Ev_","__ZN7WebCore17FrameLoaderClient27willChangeEstimatedProgressEv","__ZN7WebCore19ResourceRequestBaseC2ERKS0_","___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader15loadPostRequestERKNS2_15ResourceRequestERKN3WTF6StringESA_bNS2_13FrameLoadTypeENS7_10PassRefPtrINS2_5EventEEENSC_INS2_9FormStateEEEE3$_5NS_9allocatorISH_EEFvS6_SG_SA_RKNS2_16NavigationActionEbEED2Ev_","__ZN7WebCore14SubstituteDataD2Ev","__ZN7WebCore11FrameLoader31continueLoadAfterWillSubmitFormEv","__ZN3WTF10RefCountedIN7WebCore9FormStateEE5derefEv","__ZN7WebCore11FrameLoader25willTransitionToCommittedEv","__ZN7WebCore11FrameLoader36callContinueLoadAfterNewWindowPolicyEPvRKNS_15ResourceRequestEN3WTF10PassRefPtrINS_9FormStateEEERKNS5_6StringERKNS_16NavigationActionEb","__ZN7WebCore12createWindowEPNS_5FrameES1_RKNS_16FrameLoadRequestERKNS_14WindowFeaturesERb","__ZN7WebCore11FrameLoader20loadSameDocumentItemEPNS_11HistoryItemE","__ZN7WebCore11FrameLoader35addExtraFieldsToMainResourceRequestERNS_15ResourceRequestE","__ZN7WebCore11FrameLoader40dispatchGlobalObjectAvailableInAllWorldsEv","__ZN7WebCore11FrameLoader4stopEv","__ZN7WebCore11FrameLoader17reloadWithRequestERKNS_15ResourceRequestEb","__ZN7WebCore11FrameLoader11stopLoadingENS_17UnloadEventPolicyE","__ZN7WebCore17FrameLoaderClient12allowPluginsEb","__ZN7WebCore11FrameLoader16setDefersLoadingEb","__ZN7WebCore11FrameLoader31shouldPerformFragmentNavigationEbRKN3WTF6StringENS_13FrameLoadTypeERKNS_3URLE","__ZN7WebCore11FrameLoader10submitFormEN3WTF10PassRefPtrINS_14FormSubmissionEEE","__ZN7WebCore11FrameLoader9completedEv","__ZN7WebCore11FrameLoader33loadProvisionalItemFromCachedPageEv","__ZN7WebCore17FrameLoaderClient27forcePageTransitionIfNeededEv","___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader33continueLoadAfterNavigationPolicyERKNS2_15ResourceRequestEN3WTF10PassRefPtrINS2_9FormStateEEEbE3$_6NS_9allocatorISB_EEFvNS2_12PolicyActionEEE7destroyEv_","__ZN3WTF12StringAppendINS0_IPKcNS_6StringEEES2_E7writeToEPh","__ZNK7WebCore11FrameLoader17networkingContextEv","__ZN7WebCore17FrameLoaderClient17dispatchDidLayoutEv","__ZNK7WebCore11FrameLoader23allAncestorsAreCompleteEv","__ZN7WebCore11FrameLoader35tellClientAboutPastMemoryCacheLoadsEv","__ZN7WebCore11FrameLoader4openERNS_15CachedFrameBaseE","___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader15loadPostRequestERKNS2_15ResourceRequestERKN3WTF6StringESA_bNS2_13FrameLoadTypeENS7_10PassRefPtrINS2_5EventEEENSC_INS2_9FormStateEEEE3$_5NS_9allocatorISH_EEFvS6_SG_SA_RKNS2_16NavigationActionEbEE7destroyEv_","__ZN7WebCore11FrameLoader27defaultSubstituteDataForURLERKNS_3URLE","__ZN7WebCore11FrameLoader11urlSelectedERKNS_16FrameLoadRequestEN3WTF10PassRefPtrINS_5EventEEEbbNS_18ShouldSendReferrerENS_36ShouldReplaceDocumentIfJavaScriptURLE","__ZN7WebCore11FrameLoader15finishedParsingEv","__ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E6expandEPS4_","__ZNK7WebCore17FrameLoaderClient22shouldPaintBrokenImageERKNS_3URLE","__ZN7WebCore11FrameLoader21transitionToCommittedEPNS_10CachedPageE","__ZN7WebCore17FrameLoaderClient26didChangeEstimatedProgressEv","___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader4loadERKNS2_16FrameLoadRequestEE3$_2NS_9allocatorIS7_EEFvRKNS2_15ResourceRequestEN3WTF10PassRefPtrINS2_9FormStateEEERKNSD_6StringERKNS2_16NavigationActionEbEE7destroyEv_","__ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E8reinsertEOS4_","__ZN7WebCore11FrameLoader26reloadWithOverrideEncodingERKN3WTF6StringE","___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader22loadWithDocumentLoaderEPNS2_14DocumentLoaderENS2_13FrameLoadTypeEN3WTF10PassRefPtrINS2_9FormStateEEEE3$_4_0NS_9allocatorISB_EEFvRKNS2_15ResourceRequestESA_bEED0Ev_","__ZN7WebCore11FrameLoader20clearProvisionalLoadEv","__ZN7WebCore11FrameLoader12shouldReloadERKNS_3URLES3_","__ZN7WebCore17FrameLoaderClientD0Ev","___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader22loadWithDocumentLoaderEPNS2_14DocumentLoaderENS2_13FrameLoadTypeEN3WTF10PassRefPtrINS2_9FormStateEEEE3$_4_0NS_9allocatorISB_EEFvRKNS2_15ResourceRequestESA_bEE7destroyEv_","__ZN3WTF13tryMakeStringINS_12StringAppendIPKcNS_6StringEEES3_EENS_10PassRefPtrINS_10StringImplEEET_T0_","__ZN7WebCore11FrameLoader32dispatchDocumentElementAvailableEv","__ZN7WebCore14SubstituteDataC2EN3WTF10PassRefPtrINS_12SharedBufferEEERKNS1_6StringES7_RKNS_3URLESA_b","__ZN7WebCore11FrameLoader17receivedFirstDataEv","___ZNKSt3__110__function6__funcIZN7WebCore11FrameLoader4loadERKNS2_16FrameLoadRequestEE3$_2NS_9allocatorIS7_EEFvRKNS2_15ResourceRequestEN3WTF10PassRefPtrINS2_9FormStateEEERKNSD_6StringERKNS2_16NavigationActionEbEE7__cloneEPNS0_6__baseISN_EE_","_strlen","___ZNKSt3__110__function6__funcIZN7WebCore11FrameLoader22loadWithDocumentLoaderEPNS2_14DocumentLoaderENS2_13FrameLoadTypeEN3WTF10PassRefPtrINS2_9FormStateEEEE3$_4_0NS_9allocatorISB_EEFvRKNS2_15ResourceRequestESA_bEE7__cloneEPNS0_6__baseISH_EE_","__ZN7WebCore11FrameLoader14didFirstLayoutEv","__ZN7WebCore11FrameLoader23startCheckCompleteTimerEv","__ZN7WebCore11FrameLoader26updateFirstPartyForCookiesEv","___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader4loadERKNS2_16FrameLoadRequestEE3$_2NS_9allocatorIS7_EEFvRKNS2_15ResourceRequestEN3WTF10PassRefPtrINS2_9FormStateEEERKNSD_6StringERKNS2_16NavigationActionEbEEclESC_OSG_SJ_SM_Ob_","__ZN3WTF13tryMakeStringIPKcNS_6StringEEENS_10PassRefPtrINS_10StringImplEEET_T0_","__ZN7WebCore11FrameLoader12setReplacingEv","__ZNK7WebCore11FrameLoader21effectiveSandboxFlagsEv","__ZN7WebCore11FrameLoader8loadItemEPNS_11HistoryItemENS_13FrameLoadTypeE","__ZN7WebCore11FrameLoader24loadWithNavigationActionERKNS_15ResourceRequestERKNS_16NavigationActionEbNS_13FrameLoadTypeEN3WTF10PassRefPtrINS_9FormStateEEE","__ZN7WebCore11FrameLoader18loadInSameDocumentERKNS_3URLEN3WTF10PassRefPtrINS_21SerializedScriptValueEEEb","__ZN7WebCore11isHTMLSpaceEt","__ZN7WebCore11FrameLoader21loadURLIntoChildFrameERKNS_3URLERKN3WTF6StringEPNS_5FrameE","__ZNK7WebCore11FrameLoader17subframeIsLoadingEv","__ZN7WebCore11FrameLoader4loadERKNS_16FrameLoadRequestE","__ZN7WebCore17FrameLoaderClient19didLoseWebGLContextEi","___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader22loadWithDocumentLoaderEPNS2_14DocumentLoaderENS2_13FrameLoadTypeEN3WTF10PassRefPtrINS2_9FormStateEEEE3$_3NS_9allocatorISB_EEFvRKNS2_15ResourceRequestESA_bEED2Ev_","__ZN7WebCore17FrameLoaderClient30updateGlobalHistoryItemForPageEv","__ZN7WebCore11FrameLoader29loadedResourceFromMemoryCacheEPNS_14CachedResourceERNS_15ResourceRequestE","__ZN7WebCore11FrameLoader8loadDoneEv","__ZN7WebCore11FrameLoader7loadURLERKNS_3URLERKN3WTF6StringES7_bNS_13FrameLoadTypeENS4_10PassRefPtrINS_5EventEEENS9_INS_9FormStateEEE","__ZN7WebCore17FrameLoaderClient30allowDisplayingInsecureContentEbPNS_14SecurityOriginERKNS_3URLE","__ZN7WebCore17FrameLoaderClient52dispatchWillDestroyGlobalObjectForDOMWindowExtensionEPNS_18DOMWindowExtensionE","__ZNK7WebCore11FrameLoader29shouldTreatURLAsSameAsCurrentERKNS_3URLE","__ZN7WebCore11FrameLoader21handleFallbackContentEv","__ZN7WebCore11FrameLoader8closeURLEv","___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader22loadWithDocumentLoaderEPNS2_14DocumentLoaderENS2_13FrameLoadTypeEN3WTF10PassRefPtrINS2_9FormStateEEEE3$_4_0NS_9allocatorISB_EEFvRKNS2_15ResourceRequestESA_bEEclESG_OSA_Ob_","__ZN3WTF12StringAppendINS0_INS0_IPKcNS_6StringEEES2_EES3_E7writeToEPt","__ZNK7WebCore11FrameLoader15originalRequestEv","__ZNK7WebCore11FrameLoader14initialRequestEv","__ZN7WebCore11FrameLoader25loadResourceSynchronouslyERKNS_15ResourceRequestENS_17StoredCredentialsENS_22ClientCredentialPolicyERNS_13ResourceErrorERNS_16ResourceResponseERN3WTF6VectorIcLj0ENSA_15CrashOnOverflowEEE","__ZN7WebCore17FrameLoaderClient56dispatchWillDisconnectDOMWindowExtensionFromGlobalObjectEPNS_18DOMWindowExtensionE","__ZN7WebCore11FrameLoader14applyUserAgentERNS_15ResourceRequestE","__ZN7WebCore11FrameLoaderD2Ev","__ZN7WebCore11FrameLoader15checkTimerFiredEPNS_5TimerIS0_EE","__ZN7WebCore11FrameLoader28detachViewsAndDocumentLoaderEv","__ZNK7WebCore16ScriptController19existingWindowShellERNS_15DOMWrapperWorldE","__ZN7WebCore11FrameLoader14didChangeIconsENS_8IconTypeE","___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader7loadURLERKNS2_3URLERKN3WTF6StringESA_bNS2_13FrameLoadTypeENS7_10PassRefPtrINS2_5EventEEENSC_INS2_9FormStateEEEE3$_1_0NS_9allocatorISH_EEFvRKNS2_15ResourceRequestESG_bEED0Ev_","__ZNK7WebCore17FrameLoaderClient25shouldLoadMediaElementURLERKNS_3URLE","__ZNK7WebCore11FrameLoader22allChildrenAreCompleteEv","___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader33continueLoadAfterNavigationPolicyERKNS2_15ResourceRequestEN3WTF10PassRefPtrINS2_9FormStateEEEbE3$_6NS_9allocatorISB_EEFvNS2_12PolicyActionEEEclEOSE__","__ZN7WebCore11FrameLoader14checkCompletedEv","__ZN7WebCore11FrameLoader15willChangeTitleEPNS_14DocumentLoaderE","__ZN7WebCore11FrameLoader17checkLoadCompleteEv","__ZN7WebCore11FrameLoader28setProvisionalDocumentLoaderEPNS_14DocumentLoaderE","___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader7loadURLERKNS2_3URLERKN3WTF6StringESA_bNS2_13FrameLoadTypeENS7_10PassRefPtrINS2_5EventEEENSC_INS2_9FormStateEEEE3$_0NS_9allocatorISH_EEFvRKNS2_15ResourceRequestESG_SA_RKNS2_16NavigationActionEbEEclESM_OSG_SA_SP_Ob_","__ZNK7WebCore11FrameLoader16outgoingReferrerEv","__ZN7WebCore19ResourceRequestBaseC2ERKNS_3URLENS_26ResourceRequestCachePolicyE","__ZN7WebCore11FrameLoader9setOpenerEPNS_5FrameE","__ZN7WebCore5TimerINS_11FrameLoaderEED0Ev","__ZN7WebCore11FrameLoader9didLayoutEj","__ZN7WebCore17FrameLoaderClient17dispatchDidLayoutEj","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore11FrameLoader21reportLocalLoadFailedEPNS_5FrameERKN3WTF6StringE","__ZN7WebCore11FrameLoader11urlSelectedERKNS_3URLERKN3WTF6StringENS4_10PassRefPtrINS_5EventEEEbbNS_18ShouldSendReferrerE","__ZN7WebCore11FrameLoader14didChangeTitleEPNS_14DocumentLoaderE","__ZN7WebCore14SubstituteDataaSERKS0_","___ZNKSt3__110__function6__funcIZN7WebCore11FrameLoader7loadURLERKNS2_3URLERKN3WTF6StringESA_bNS2_13FrameLoadTypeENS7_10PassRefPtrINS2_5EventEEENSC_INS2_9FormStateEEEE3$_0NS_9allocatorISH_EEFvRKNS2_15ResourceRequestESG_SA_RKNS2_16NavigationActionEbEE7__cloneEPNS0_6__baseISQ_EE_","__ZN7WebCore11FrameLoader21reloadWithOverrideURLERKNS_3URLEb","___ZNKSt3__110__function6__funcIZN7WebCore11FrameLoader15loadPostRequestERKNS2_15ResourceRequestERKN3WTF6StringESA_bNS2_13FrameLoadTypeENS7_10PassRefPtrINS2_5EventEEENSC_INS2_9FormStateEEEE3$_5NS_9allocatorISH_EEFvS6_SG_SA_RKNS2_16NavigationActionEbEE7__cloneEPNS0_6__baseISN_EE_","__ZN7WebCore11FrameLoader34scrollToFragmentWithParentBoundaryERKNS_3URLE","___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader22loadWithDocumentLoaderEPNS2_14DocumentLoaderENS2_13FrameLoadTypeEN3WTF10PassRefPtrINS2_9FormStateEEEE3$_4_0NS_9allocatorISB_EEFvRKNS2_15ResourceRequestESA_bEED2Ev_","__ZN7WebCore17FrameLoaderClient28dispatchWillOpenSocketStreamEPNS_18SocketStreamHandleE","__ZN3WTF13tryMakeStringINS_6StringEPKcS1_EENS_10PassRefPtrINS_10StringImplEEET_T0_T1_","__ZN7WebCore16FrameLoadRequestC1ERKS0_","__ZN7WebCore11FrameLoader10didOpenURLEv","__ZN7WebCore11FrameLoader19closeOldDataSourcesEv","__ZN3WTF9HashTableIPN7WebCore5FrameES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_","___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader33continueLoadAfterNavigationPolicyERKNS2_15ResourceRequestEN3WTF10PassRefPtrINS2_9FormStateEEEbE3$_6NS_9allocatorISB_EEFvNS2_12PolicyActionEEE18destroy_deallocateEv_","___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader33continueLoadAfterNavigationPolicyERKNS2_15ResourceRequestEN3WTF10PassRefPtrINS2_9FormStateEEEbE3$_6NS_9allocatorISB_EEFvNS2_12PolicyActionEEED2Ev_","__ZNK7WebCore11FrameLoader20activeDocumentLoaderEv","___ZNKSt3__110__function6__funcIZN7WebCore11FrameLoader22loadWithDocumentLoaderEPNS2_14DocumentLoaderENS2_13FrameLoadTypeEN3WTF10PassRefPtrINS2_9FormStateEEEE3$_3NS_9allocatorISB_EEFvRKNS2_15ResourceRequestESA_bEE7__cloneEv_","___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader7loadURLERKNS2_3URLERKN3WTF6StringESA_bNS2_13FrameLoadTypeENS7_10PassRefPtrINS2_5EventEEENSC_INS2_9FormStateEEEE3$_1_0NS_9allocatorISH_EEFvRKNS2_15ResourceRequestESG_bEE7destroyEv_","__ZN7WebCore14FormSubmissionD2Ev","__ZN7WebCore19ResourceRequestBaseD2Ev","__ZNK7WebCore11FrameLoader9userAgentERKNS_3URLE","___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader7loadURLERKNS2_3URLERKN3WTF6StringESA_bNS2_13FrameLoadTypeENS7_10PassRefPtrINS2_5EventEEENSC_INS2_9FormStateEEEE3$_0NS_9allocatorISH_EEFvRKNS2_15ResourceRequestESG_SA_RKNS2_16NavigationActionEbEED0Ev_","___ZNSt3__110__function6__funcIZN7WebCore11FrameLoader7loadURLERKNS2_3URLERKN3WTF6StringESA_bNS2_13FrameLoadTypeENS7_10PassRefPtrINS2_5EventEEENSC_INS2_9FormStateEEEE3$_0NS_9allocatorISH_EEFvRKNS2_15ResourceRequestESG_SA_RKNS2_16NavigationActionEbEE7destroyEv_","__ZN7WebCore11FrameLoader28loadProgressingStatusChangedEv","__ZN7WebCore11FrameLoader19handledOnloadEventsEv"]

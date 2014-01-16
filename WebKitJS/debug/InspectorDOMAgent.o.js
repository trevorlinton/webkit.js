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
H_BASE = parentModule["_malloc"](2432 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 2432;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore28RevalidateStyleAttributeTaskC1EPNS_17InspectorDOMAgentE;
var __ZN7WebCore17InspectorDOMAgentC1EPNS_19InstrumentingAgentsEPNS_18InspectorPageAgentEPN9Inspector21InjectedScriptManagerEPNS_16InspectorOverlayE;
var __ZN7WebCore17InspectorDOMAgentD1Ev;
/* memory initializer */ allocate([68,79,77,32,69,114,114,111,114,32,119,104,105,108,101,32,113,117,101,114,121,105,110,103,0,0,0,0,0,0,0,0,80,108,101,97,115,101,32,112,114,111,118,105,100,101,32,97,32,112,111,115,105,116,105,118,101,32,105,110,116,101,103,101,114,32,97,115,32,97,32,100,101,112,116,104,32,111,114,32,45,49,32,102,111,114,32,101,110,116,105,114,101,32,115,117,98,116,114,101,101,0,0,0,97,0,0,0,0,0,0,0,98,0,0,0,0,0,0,0,78,111,100,101,32,105,115,32,110,111,116,32,112,97,114,116,32,111,102,32,116,104,101,32,100,111,99,117,109,101,110,116,32,119,105,116,104,32,103,105,118,101,110,32,105,100,0,0,103,0,0,0,0,0,0,0,114,0,0,0,0,0,0,0,99,104,105,108,100,78,111,100,101,67,111,117,110,116,0,0,99,104,105,108,100,114,101,110,0,0,0,0,0,0,0,0,97,116,116,114,105,98,117,116,101,115,0,0,0,0,0,0,102,114,97,109,101,73,100,0,99,111,110,116,101,110,116,68,111,99,117,109,101,110,116,0,115,104,97,100,111,119,82,111,111,116,115,0,0,0,0,0,116,101,109,112,108,97,116,101,67,111,110,116,101,110,116,0,100,111,99,117,109,101,110,116,85,82,76,0,0,0,0,0,67,97,110,32,110,111,116,32,101,100,105,116,32,101,108,101,109,101,110,116,115,32,102,114,111,109,32,115,104,97,100,111,119,32,116,114,101,101,115,0,98,97,115,101,85,82,76,0,120,109,108,86,101,114,115,105,111,110,0,0,0,0,0,0,112,117,98,108,105,99,73,100,0,0,0,0,0,0,0,0,115,121,115,116,101,109,73,100,0,0,0,0,0,0,0,0,105,110,116,101,114,110,97,108,83,117,98,115,101,116,0,0,110,97,109,101,0,0,0,0,118,97,108,117,101,0,0,0,104,97,110,100,108,101,114,0,108,111,99,97,116,105,111,110,0,0,0,0,0,0,0,0,115,111,117,114,99,101,78,97,109,101,0,0,0,0,0,0,67,97,110,32,110,111,116,32,101,100,105,116,32,110,111,100,101,115,32,102,114,111,109,32,115,104,97,100,111,119,32,116,114,101,101,115,0,0,0,0,110,111,100,101,84,121,112,101,0,0,0,0,0,0,0,0,110,111,100,101,78,97,109,101,0,0,0,0,0,0,0,0,108,111,99,97,108,78,97,109,101,0,0,0,0,0,0,0,110,111,100,101,86,97,108,117,101,0,0,0,0,0,0,0,116,121,112,101,0,0,0,0,117,115,101,67,97,112,116,117,114,101,0,0,0,0,0,0,105,115,65,116,116,114,105,98,117,116,101,0,0,0,0,0,110,111,100,101,73,100,0,0,104,97,110,100,108,101,114,66,111,100,121,0,0,0,0,0,115,99,114,105,112,116,73,100,0,0,0,0,0,0,0,0,78,111,100,101,32,105,115,32,110,111,116,32,97,110,32,69,108,101,109,101,110,116,0,0,108,105,110,101,78,117,109,98,101,114,0,0,0,0,0,0,78,111,32,110,111,100,101,32,119,105,116,104,32,103,105,118,101,110,32,98,97,99,107,101,110,100,32,105,100,32,102,111,117,110,100,0,0,0,0,0,78,111,32,110,111,100,101,32,119,105,116,104,32,103,105,118,101,110,32,112,97,116,104,32,102,111,117,110,100,0,0,0,44,0,0,0,0,0,0,0,78,111,100,101,32,119,105,116,104,32,103,105,118,101,110,32,105,100,32,100,111,101,115,32,110,111,116,32,98,101,108,111,110,103,32,116,111,32,116,104,101,32,100,111,99,117,109,101,110,116,0,0,0,0,0,0,78,111,32,110,111,100,101,32,119,105,116,104,32,103,105,118,101,110,32,105,100,32,102,111,117,110,100,0,0,0,0,0,69,108,101,109,101,110,116,32,105,115,32,110,111,116,32,102,111,99,117,115,97,98,108,101,0,0,0,0,0,0,0,0,65,110,99,104,111,114,32,110,111,100,101,32,109,117,115,116,32,98,101,32,99,104,105,108,100,32,111,102,32,116,104,101,32,116,97,114,103,101,116,32,101,108,101,109,101,110,116,0,69,105,116,104,101,114,32,110,111,100,101,73,100,32,111,114,32,111,98,106,101,99,116,73,100,32,109,117,115,116,32,98,101,32,115,112,101,99,105,102,105,101,100,0,0,0,0,0,78,111,100,101,32,102,111,114,32,103,105,118,101,110,32,111,98,106,101,99,116,73,100,32,110,111,116,32,102,111,117,110,100,0,0,0,0,0,0,0,68,111,99,117,109,101,110,116,32,105,115,32,110,111,116,32,97,118,97,105,108,97,98,108,101,0,0,0,0,0,0,0,73,110,118,97,108,105,100,32,81,117,97,100,32,102,111,114,109,97,116,0,0,0,0,0,109,97,114,103,105,110,67,111,108,111,114,0,0,0,0,0,98,111,114,100,101,114,67,111,108,111,114,0,0,0,0,0,112,97,100,100,105,110,103,67,111,108,111,114,0,0,0,0,99,111,110,116,101,110,116,79,117,116,108,105,110,101,67,111,108,111,114,0,0,0,0,0,99,111,110,116,101,110,116,67,111,108,111,114,0,0,0,0,115,104,111,119,82,117,108,101,114,115,0,0,0,0,0,0,115,104,111,119,73,110,102,111,0,0,0,0,0,0,0,0,73,110,116,101,114,110,97,108,32,101,114,114,111,114,58,32,104,105,103,104,108,105,103,104,116,32,99,111,110,102,105,103,117,114,97,116,105,111,110,32,112,97,114,97,109,101,116,101,114,32,105,115,32,109,105,115,115,105,110,103,0,0,0,0,73,110,118,97,108,105,100,32,115,101,97,114,99,104,32,114,101,115,117,108,116,32,114,97,110,103,101,0,0,0,0,0,67,111,117,108,100,32,110,111,116,32,102,105,110,100,32,110,111,100,101,32,119,105,116,104,32,103,105,118,101,110,32,105,100,0,0,0,0,0,0,0,78,111,32,115,101,97,114,99,104,32,115,101,115,115,105,111,110,32,119,105,116,104,32,103,105,118,101,110,32,105,100,32,102,111,117,110,100,0,0,0,73,110,118,97,108,105,100,32,110,111,100,101,73,100,115,32,105,116,101,109,32,116,121,112,101,46,32,69,120,112,101,99,116,105,110,103,32,105,110,116,101,103,101,114,32,116,121,112,101,115,46,0,0,0,0,0,73,110,118,97,108,105,100,32,110,111,100,101,73,100,115,32,105,116,101,109,46,0,0,0,67,97,110,32,111,110,108,121,32,115,101,116,32,118,97,108,117,101,32,111,102,32,116,101,120,116,32,110,111,100,101,115,0,0,0,0,0,0,0,0,78,111,116,32,97,110,32,72,84,77,76,47,88,77,76,32,100,111,99,117,109,101,110,116,0,0,0,0,0,0,0,0,67,97,110,32,110,111,116,32,114,101,109,111,118,101,32,100,101,116,97,99,104,101,100,32,110,111,100,101,0,0,0,0,67,111,117,108,100,32,110,111,116,32,112,97,114,115,101,32,118,97,108,117,101,32,97,115,32,97,116,116,114,105,98,117,116,101,115,0,0,0,0,0,62,60,47,115,112,97,110,62,0,0,0,0,0,0,0,0,60,115,112,97,110,32,0,0,71,114,111,117,112,32,110,97,109,101,32,110,111,116,32,102,111,117,110,100,0,0,0,0,68,79,77,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,244,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,38,32,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_viiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9) {
  try {
    Module["dynCall_viiiiiiiii"](index,a1,a2,a3,a4,a5,a6,a7,a8,a9);
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
  var __ZN7WebCore9HTMLNames11templateTagE=env.__ZN7WebCore9HTMLNames11templateTagE|0;
  var __ZN7WebCore9HTMLNames7spanTagE=env.__ZN7WebCore9HTMLNames7spanTagE|0;
  var __ZN3JSC10JSFunction6s_infoE=env.__ZN3JSC10JSFunction6s_infoE|0;
  var __ZTVN10Deprecated11ScriptValueE=env.__ZTVN10Deprecated11ScriptValueE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN9Inspector11TypeBuilder5ArrayINS0_3DOM4NodeEEE=(H_BASE+1792)|0;
  var __ZTVN9Inspector11TypeBuilder5ArrayIN3WTF6StringEEE=(H_BASE+1952)|0;
  var __ZTVN7WebCore17InspectorDOMAgentE=(H_BASE+2104)|0;
  var __ZTVN7WebCore5TimerINS_28RevalidateStyleAttributeTaskEEE=(H_BASE+2032)|0;
  var __ZTVN9Inspector18InspectorAgentBaseE=(H_BASE+1672)|0;
  var __ZTVN9Inspector11TypeBuilder5ArrayINS0_3DOM13EventListenerEEE=(H_BASE+1872)|0;
  var __ZTVN9Inspector11TypeBuilder5ArrayIiEE=(H_BASE+1712)|0;
  var __ZTVN7WebCore18InspectorAgentBaseE=(H_BASE+2064)|0;
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
  var invoke_did=env.invoke_did;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_viiiiiiiii=env.invoke_viiiiiiiii;
  var invoke_viiiiii=env.invoke_viiiiii;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
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
function __ZN7WebCore17InspectorDOMAgent18buildObjectForNodeEPNS_4NodeEiPN3WTF7HashMapINS3_6RefPtrIS1_EEiNS3_7PtrHashIS6_EENS3_10HashTraitsIS6_EENS9_IiEEEE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0, i89 = 0, i90 = 0, i91 = 0, i92 = 0, i93 = 0, i94 = 0, i95 = 0, i96 = 0, i97 = 0, i98 = 0, i99 = 0, i100 = 0, i101 = 0, i102 = 0, i103 = 0, i104 = 0, i105 = 0, i106 = 0, i107 = 0, i108 = 0, i109 = 0, i110 = 0, i111 = 0, i112 = 0, d113 = +0, i114 = 0, i115 = 0, i116 = 0, i117 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 800 | 0;
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
 i29 = i6 + 176 | 0;
 i30 = i6 + 184 | 0;
 i31 = i6 + 192 | 0;
 i32 = i6 + 200 | 0;
 i33 = i6 + 208 | 0;
 i34 = i6 + 216 | 0;
 i35 = i6 + 224 | 0;
 i36 = i6 + 232 | 0;
 i37 = i6 + 240 | 0;
 i38 = i6 + 248 | 0;
 i39 = i6 + 256 | 0;
 i40 = i6 + 264 | 0;
 i41 = i6 + 272 | 0;
 i42 = i6 + 280 | 0;
 i43 = i6 + 288 | 0;
 i44 = i6 + 296 | 0;
 i45 = i6 + 304 | 0;
 i46 = i6 + 312 | 0;
 i47 = i6 + 320 | 0;
 i48 = i6 + 328 | 0;
 i49 = i6 + 336 | 0;
 i50 = i6 + 384 | 0;
 i51 = i6 + 392 | 0;
 i52 = i6 + 400 | 0;
 i53 = i6 + 408 | 0;
 i54 = i6 + 416 | 0;
 i55 = i6 + 424 | 0;
 i56 = i6 + 432 | 0;
 i57 = i6 + 440 | 0;
 i58 = i6 + 448 | 0;
 i59 = i6 + 456 | 0;
 i60 = i6 + 464 | 0;
 i61 = i6 + 472 | 0;
 i62 = i6 + 480 | 0;
 i63 = i6 + 488 | 0;
 i64 = i6 + 496 | 0;
 i65 = i6 + 504 | 0;
 i66 = i6 + 512 | 0;
 i67 = i6 + 520 | 0;
 i68 = i6 + 528 | 0;
 i69 = i6 + 536 | 0;
 i70 = i6 + 544 | 0;
 i71 = i6 + 552 | 0;
 i72 = i6 + 560 | 0;
 i73 = i6 + 568 | 0;
 i74 = i6 + 576 | 0;
 i75 = i6 + 584 | 0;
 i76 = i6 + 592 | 0;
 i77 = i6 + 600 | 0;
 i78 = i6 + 608 | 0;
 i79 = i6 + 616 | 0;
 i80 = i6 + 624 | 0;
 i81 = i6 + 632 | 0;
 i82 = i6 + 640 | 0;
 i83 = i6 + 648 | 0;
 i84 = i6 + 656 | 0;
 i85 = i6 + 664 | 0;
 i86 = i6 + 672 | 0;
 i87 = i6 + 680 | 0;
 i88 = i6 + 688 | 0;
 i89 = i6 + 696 | 0;
 i90 = i6 + 704 | 0;
 i91 = i6 + 712 | 0;
 i92 = i6 + 720 | 0;
 i93 = i6 + 728 | 0;
 i94 = i6 + 736 | 0;
 i95 = i6 + 744 | 0;
 i96 = i6 + 752 | 0;
 i97 = i6 + 760 | 0;
 i98 = i6 + 768 | 0;
 i99 = i6 + 776 | 0;
 i100 = i6 + 784 | 0;
 i101 = i6 + 792 | 0;
 i102 = __ZN7WebCore17InspectorDOMAgent4bindEPNS_4NodeEPN3WTF7HashMapINS3_6RefPtrIS1_EEiNS3_7PtrHashIS6_EENS3_10HashTraitsIS6_EENS9_IiEEEE(i2, i3, i5) | 0;
 i103 = i85 | 0;
 HEAP32[i103 >> 2] = 0;
 i104 = i86 | 0;
 HEAP32[i104 >> 2] = 0;
 i105 = i87 | 0;
 HEAP32[i105 >> 2] = 0;
 i106 = i3;
 i107 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i106 >> 2] | 0) + 76 >> 2] & 1](i3) | 0;
 do {
  if ((i107 | 0) == 2) {
   i108 = HEAP32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 88 >> 2] & 1](i3) | 0) >> 2] | 0;
   if ((i108 | 0) != 0) {
    i109 = i108 | 0;
    HEAP32[i109 >> 2] = (HEAP32[i109 >> 2] | 0) + 2;
   }
   i109 = HEAP32[i104 >> 2] | 0;
   HEAP32[i104 >> 2] = i108;
   if ((i109 | 0) == 0) {
    break;
   }
   i108 = i109 | 0;
   i110 = (HEAP32[i108 >> 2] | 0) - 2 | 0;
   if ((i110 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i109);
    break;
   } else {
    HEAP32[i108 >> 2] = i110;
    break;
   }
  } else if ((i107 | 0) == 3 | (i107 | 0) == 8 | (i107 | 0) == 4) {
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 68 >> 2] & 31](i88, i3);
   i110 = i88 | 0;
   i108 = HEAP32[i110 >> 2] | 0;
   HEAP32[i110 >> 2] = 0;
   i109 = HEAP32[i105 >> 2] | 0;
   HEAP32[i105 >> 2] = i108;
   do {
    if ((i109 | 0) != 0) {
     i108 = i109 | 0;
     i111 = (HEAP32[i108 >> 2] | 0) - 2 | 0;
     if ((i111 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i109);
      break;
     } else {
      HEAP32[i108 >> 2] = i111;
      break;
     }
    }
   } while (0);
   i109 = HEAP32[i110 >> 2] | 0;
   do {
    if ((i109 | 0) != 0) {
     i111 = i109 | 0;
     i108 = (HEAP32[i111 >> 2] | 0) - 2 | 0;
     if ((i108 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i109);
      break;
     } else {
      HEAP32[i111 >> 2] = i108;
      break;
     }
    }
   } while (0);
   i109 = HEAP32[i105 >> 2] | 0;
   if ((i109 | 0) == 0) {
    break;
   }
   if ((HEAP32[i109 + 4 >> 2] | 0) >>> 0 <= 1e4 >>> 0) {
    break;
   }
   __ZNK3WTF6String9substringEjj(i89, i87, 0, 1e4);
   i109 = i89 | 0;
   i110 = HEAP32[i109 >> 2] | 0;
   HEAP32[i109 >> 2] = 0;
   i108 = HEAP32[i105 >> 2] | 0;
   HEAP32[i105 >> 2] = i110;
   do {
    if ((i108 | 0) != 0) {
     i110 = i108 | 0;
     i111 = (HEAP32[i110 >> 2] | 0) - 2 | 0;
     if ((i111 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i108);
      break;
     } else {
      HEAP32[i110 >> 2] = i111;
      break;
     }
    }
   } while (0);
   i108 = HEAP32[i109 >> 2] | 0;
   do {
    if ((i108 | 0) != 0) {
     i111 = i108 | 0;
     i110 = (HEAP32[i111 >> 2] | 0) - 2 | 0;
     if ((i110 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i108);
      break;
     } else {
      HEAP32[i111 >> 2] = i110;
      break;
     }
    }
   } while (0);
   __ZN3WTF6StringC1EPKt(i90, H_BASE + 2424 | 0);
   __ZN3WTF6String6appendERKS0_(i87, i90);
   i108 = HEAP32[i90 >> 2] | 0;
   if ((i108 | 0) == 0) {
    break;
   }
   i109 = i108 | 0;
   i110 = (HEAP32[i109 >> 2] | 0) - 2 | 0;
   if ((i110 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i108);
    break;
   } else {
    HEAP32[i109 >> 2] = i110;
    break;
   }
  } else {
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 64 >> 2] & 31](i91, i3);
   i110 = i91 | 0;
   i109 = HEAP32[i110 >> 2] | 0;
   HEAP32[i110 >> 2] = 0;
   i108 = HEAP32[i103 >> 2] | 0;
   HEAP32[i103 >> 2] = i109;
   do {
    if ((i108 | 0) != 0) {
     i109 = i108 | 0;
     i111 = (HEAP32[i109 >> 2] | 0) - 2 | 0;
     if ((i111 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i108);
      break;
     } else {
      HEAP32[i109 >> 2] = i111;
      break;
     }
    }
   } while (0);
   i108 = HEAP32[i110 >> 2] | 0;
   do {
    if ((i108 | 0) != 0) {
     i111 = i108 | 0;
     i109 = (HEAP32[i111 >> 2] | 0) - 2 | 0;
     if ((i109 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i108);
      break;
     } else {
      HEAP32[i111 >> 2] = i109;
      break;
     }
    }
   } while (0);
   i108 = HEAP32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 88 >> 2] & 1](i3) | 0) >> 2] | 0;
   if ((i108 | 0) != 0) {
    i110 = i108 | 0;
    HEAP32[i110 >> 2] = (HEAP32[i110 >> 2] | 0) + 2;
   }
   i110 = HEAP32[i104 >> 2] | 0;
   HEAP32[i104 >> 2] = i108;
   if ((i110 | 0) == 0) {
    break;
   }
   i108 = i110 | 0;
   i109 = (HEAP32[i108 >> 2] | 0) - 2 | 0;
   if ((i109 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i110);
    break;
   } else {
    HEAP32[i108 >> 2] = i109;
    break;
   }
  }
 } while (0);
 __ZN9Inspector15InspectorObject6createEv(i84);
 i91 = HEAP32[i84 >> 2] | 0;
 i84 = i91 | 0;
 HEAP32[i83 >> 2] = H_BASE + 624;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i82, i83);
 __ZN9Inspector19InspectorBasicValue6createEd(i36, +(i102 | 0));
 i102 = i35 | 0;
 i83 = i36 | 0;
 i36 = HEAP32[i83 >> 2] | 0;
 HEAP32[i83 >> 2] = 0;
 HEAP32[i102 >> 2] = i36;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i84, i82, i35);
 i35 = HEAP32[i102 >> 2] | 0;
 do {
  if ((i35 | 0) != 0) {
   i102 = i35 + 4 | 0;
   i36 = i102 | 0;
   i90 = (HEAP32[i36 >> 2] | 0) - 1 | 0;
   if ((i90 | 0) != 0) {
    HEAP32[i36 >> 2] = i90;
    break;
   }
   i90 = i102 - 4 | 0;
   if ((i90 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i90 >> 2] | 0) + 4 >> 2] & 63](i90);
  }
 } while (0);
 i35 = HEAP32[i83 >> 2] | 0;
 do {
  if ((i35 | 0) != 0) {
   i83 = i35 + 4 | 0;
   i90 = i83 | 0;
   i102 = (HEAP32[i90 >> 2] | 0) - 1 | 0;
   if ((i102 | 0) != 0) {
    HEAP32[i90 >> 2] = i102;
    break;
   }
   i102 = i83 - 4 | 0;
   if ((i102 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i102 >> 2] | 0) + 4 >> 2] & 63](i102);
  }
 } while (0);
 i35 = HEAP32[i82 >> 2] | 0;
 do {
  if ((i35 | 0) != 0) {
   i82 = i35 | 0;
   i102 = (HEAP32[i82 >> 2] | 0) - 2 | 0;
   if ((i102 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i35);
    break;
   } else {
    HEAP32[i82 >> 2] = i102;
    break;
   }
  }
 } while (0);
 i35 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i106 >> 2] | 0) + 76 >> 2] & 1](i3) | 0;
 HEAP32[i81 >> 2] = H_BASE + 520;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i80, i81);
 __ZN9Inspector19InspectorBasicValue6createEd(i34, +(i35 | 0));
 i35 = i33 | 0;
 i81 = i34 | 0;
 i34 = HEAP32[i81 >> 2] | 0;
 HEAP32[i81 >> 2] = 0;
 HEAP32[i35 >> 2] = i34;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i84, i80, i33);
 i33 = HEAP32[i35 >> 2] | 0;
 do {
  if ((i33 | 0) != 0) {
   i35 = i33 + 4 | 0;
   i34 = i35 | 0;
   i102 = (HEAP32[i34 >> 2] | 0) - 1 | 0;
   if ((i102 | 0) != 0) {
    HEAP32[i34 >> 2] = i102;
    break;
   }
   i102 = i35 - 4 | 0;
   if ((i102 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i102 >> 2] | 0) + 4 >> 2] & 63](i102);
  }
 } while (0);
 i33 = HEAP32[i81 >> 2] | 0;
 do {
  if ((i33 | 0) != 0) {
   i81 = i33 + 4 | 0;
   i102 = i81 | 0;
   i35 = (HEAP32[i102 >> 2] | 0) - 1 | 0;
   if ((i35 | 0) != 0) {
    HEAP32[i102 >> 2] = i35;
    break;
   }
   i35 = i81 - 4 | 0;
   if ((i35 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i35 >> 2] | 0) + 4 >> 2] & 63](i35);
  }
 } while (0);
 i33 = HEAP32[i80 >> 2] | 0;
 do {
  if ((i33 | 0) != 0) {
   i80 = i33 | 0;
   i35 = (HEAP32[i80 >> 2] | 0) - 2 | 0;
   if ((i35 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i33);
    break;
   } else {
    HEAP32[i80 >> 2] = i35;
    break;
   }
  }
 } while (0);
 HEAP32[i79 >> 2] = H_BASE + 536;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i78, i79);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i32, i85);
 i85 = i31 | 0;
 i79 = i32 | 0;
 i32 = HEAP32[i79 >> 2] | 0;
 HEAP32[i79 >> 2] = 0;
 HEAP32[i85 >> 2] = i32;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i84, i78, i31);
 i31 = HEAP32[i85 >> 2] | 0;
 do {
  if ((i31 | 0) != 0) {
   i85 = i31 + 4 | 0;
   i32 = i85 | 0;
   i33 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
   if ((i33 | 0) != 0) {
    HEAP32[i32 >> 2] = i33;
    break;
   }
   i33 = i85 - 4 | 0;
   if ((i33 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i33 >> 2] | 0) + 4 >> 2] & 63](i33);
  }
 } while (0);
 i31 = HEAP32[i79 >> 2] | 0;
 do {
  if ((i31 | 0) != 0) {
   i79 = i31 + 4 | 0;
   i33 = i79 | 0;
   i85 = (HEAP32[i33 >> 2] | 0) - 1 | 0;
   if ((i85 | 0) != 0) {
    HEAP32[i33 >> 2] = i85;
    break;
   }
   i85 = i79 - 4 | 0;
   if ((i85 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i85 >> 2] | 0) + 4 >> 2] & 63](i85);
  }
 } while (0);
 i31 = HEAP32[i78 >> 2] | 0;
 do {
  if ((i31 | 0) != 0) {
   i78 = i31 | 0;
   i85 = (HEAP32[i78 >> 2] | 0) - 2 | 0;
   if ((i85 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i31);
    break;
   } else {
    HEAP32[i78 >> 2] = i85;
    break;
   }
  }
 } while (0);
 HEAP32[i77 >> 2] = H_BASE + 552;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i76, i77);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i30, i86);
 i86 = i29 | 0;
 i77 = i30 | 0;
 i30 = HEAP32[i77 >> 2] | 0;
 HEAP32[i77 >> 2] = 0;
 HEAP32[i86 >> 2] = i30;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i84, i76, i29);
 i29 = HEAP32[i86 >> 2] | 0;
 do {
  if ((i29 | 0) != 0) {
   i86 = i29 + 4 | 0;
   i30 = i86 | 0;
   i31 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
   if ((i31 | 0) != 0) {
    HEAP32[i30 >> 2] = i31;
    break;
   }
   i31 = i86 - 4 | 0;
   if ((i31 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i31 >> 2] | 0) + 4 >> 2] & 63](i31);
  }
 } while (0);
 i29 = HEAP32[i77 >> 2] | 0;
 do {
  if ((i29 | 0) != 0) {
   i77 = i29 + 4 | 0;
   i31 = i77 | 0;
   i86 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
   if ((i86 | 0) != 0) {
    HEAP32[i31 >> 2] = i86;
    break;
   }
   i86 = i77 - 4 | 0;
   if ((i86 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i86 >> 2] | 0) + 4 >> 2] & 63](i86);
  }
 } while (0);
 i29 = HEAP32[i76 >> 2] | 0;
 do {
  if ((i29 | 0) != 0) {
   i76 = i29 | 0;
   i86 = (HEAP32[i76 >> 2] | 0) - 2 | 0;
   if ((i86 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i29);
    break;
   } else {
    HEAP32[i76 >> 2] = i86;
    break;
   }
  }
 } while (0);
 HEAP32[i75 >> 2] = H_BASE + 568;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i74, i75);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i28, i87);
 i87 = i27 | 0;
 i75 = i28 | 0;
 i28 = HEAP32[i75 >> 2] | 0;
 HEAP32[i75 >> 2] = 0;
 HEAP32[i87 >> 2] = i28;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i84, i74, i27);
 i27 = HEAP32[i87 >> 2] | 0;
 do {
  if ((i27 | 0) != 0) {
   i87 = i27 + 4 | 0;
   i28 = i87 | 0;
   i29 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
   if ((i29 | 0) != 0) {
    HEAP32[i28 >> 2] = i29;
    break;
   }
   i29 = i87 - 4 | 0;
   if ((i29 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i29 >> 2] | 0) + 4 >> 2] & 63](i29);
  }
 } while (0);
 i27 = HEAP32[i75 >> 2] | 0;
 do {
  if ((i27 | 0) != 0) {
   i75 = i27 + 4 | 0;
   i29 = i75 | 0;
   i87 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
   if ((i87 | 0) != 0) {
    HEAP32[i29 >> 2] = i87;
    break;
   }
   i87 = i75 - 4 | 0;
   if ((i87 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i87 >> 2] | 0) + 4 >> 2] & 63](i87);
  }
 } while (0);
 i27 = HEAP32[i74 >> 2] | 0;
 do {
  if ((i27 | 0) != 0) {
   i74 = i27 | 0;
   i87 = (HEAP32[i74 >> 2] | 0) - 2 | 0;
   if ((i87 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i27);
    break;
   } else {
    HEAP32[i74 >> 2] = i87;
    break;
   }
  }
 } while (0);
 i27 = i91;
 do {
  if ((i91 | 0) != 0) {
   i87 = i91 + 4 | 0;
   i74 = HEAP32[i87 >> 2] | 0;
   HEAP32[i87 >> 2] = i74 + 1;
   i87 = i91 + 4 | 0;
   if ((i74 | 0) != 0) {
    HEAP32[i87 >> 2] = i74;
    break;
   }
   i74 = i87 - 4 | 0;
   if ((i74 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i74 >> 2] | 0) + 4 >> 2] & 63](i74);
  }
 } while (0);
 i91 = i3 + 12 | 0;
 do {
  if ((HEAP32[i91 >> 2] & 2 | 0) != 0) {
   i74 = HEAP32[i3 + 36 >> 2] | 0;
   if (__ZN7WebCore17InspectorDOMAgent12isWhitespaceEPNS_4NodeE(i74) | 0) {
    i87 = i74;
    while (1) {
     i75 = HEAP32[i87 + 28 >> 2] | 0;
     if (__ZN7WebCore17InspectorDOMAgent12isWhitespaceEPNS_4NodeE(i75) | 0) {
      i87 = i75;
     } else {
      i112 = i75;
      break;
     }
    }
   } else {
    i112 = i74;
   }
   if ((i112 | 0) == 0) {
    d113 = +0;
   } else {
    i87 = 0;
    i75 = i112;
    while (1) {
     i29 = i75;
     while (1) {
      i29 = HEAP32[i29 + 28 >> 2] | 0;
      if (!(__ZN7WebCore17InspectorDOMAgent12isWhitespaceEPNS_4NodeE(i29) | 0)) {
       break;
      }
     }
     i114 = i87 + 1 | 0;
     if ((i29 | 0) == 0) {
      break;
     } else {
      i87 = i114;
      i75 = i29;
     }
    }
    d113 = +(i114 | 0);
   }
   HEAP32[i73 >> 2] = H_BASE + 192;
   __ZN3WTF6StringC1ENS_12ASCIILiteralE(i72, i73);
   __ZN9Inspector19InspectorBasicValue6createEd(i26, d113);
   i75 = i25 | 0;
   i87 = i26 | 0;
   i74 = HEAP32[i87 >> 2] | 0;
   HEAP32[i87 >> 2] = 0;
   HEAP32[i75 >> 2] = i74;
   __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i84, i72, i25);
   i74 = HEAP32[i75 >> 2] | 0;
   do {
    if ((i74 | 0) != 0) {
     i75 = i74 + 4 | 0;
     i28 = i75 | 0;
     i86 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
     if ((i86 | 0) != 0) {
      HEAP32[i28 >> 2] = i86;
      break;
     }
     i86 = i75 - 4 | 0;
     if ((i86 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i86 >> 2] | 0) + 4 >> 2] & 63](i86);
    }
   } while (0);
   i74 = HEAP32[i87 >> 2] | 0;
   do {
    if ((i74 | 0) != 0) {
     i86 = i74 + 4 | 0;
     i75 = i86 | 0;
     i28 = (HEAP32[i75 >> 2] | 0) - 1 | 0;
     if ((i28 | 0) != 0) {
      HEAP32[i75 >> 2] = i28;
      break;
     }
     i28 = i86 - 4 | 0;
     if ((i28 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i28 >> 2] | 0) + 4 >> 2] & 63](i28);
    }
   } while (0);
   i74 = HEAP32[i72 >> 2] | 0;
   do {
    if ((i74 | 0) != 0) {
     i87 = i74 | 0;
     i28 = (HEAP32[i87 >> 2] | 0) - 2 | 0;
     if ((i28 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i74);
      break;
     } else {
      HEAP32[i87 >> 2] = i28;
      break;
     }
    }
   } while (0);
   __ZN7WebCore17InspectorDOMAgent30buildArrayForContainerChildrenEPNS_4NodeEiPN3WTF7HashMapINS3_6RefPtrIS1_EEiNS3_7PtrHashIS6_EENS3_10HashTraitsIS6_EENS9_IiEEEE(i92, i2, i3, i4, i5);
   i74 = i92 | 0;
   i28 = HEAP32[i74 >> 2] | 0;
   HEAP32[i74 >> 2] = 0;
   if ((HEAP32[i28 + 20 >> 2] | 0) == 0) {
    if ((i28 | 0) == 0) {
     break;
    }
    i74 = i28 + 4 | 0;
    i87 = i74 | 0;
    i86 = (HEAP32[i87 >> 2] | 0) - 1 | 0;
    if ((i86 | 0) != 0) {
     HEAP32[i87 >> 2] = i86;
     break;
    }
    i86 = i74 - 4 | 0;
    if ((i86 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i86 >> 2] | 0) + 4 >> 2] & 63](i86);
    break;
   }
   HEAP32[i70 >> 2] = H_BASE + 208;
   __ZN3WTF6StringC1ENS_12ASCIILiteralE(i69, i70);
   i86 = i71 | 0;
   HEAP32[i86 >> 2] = i28;
   __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i84, i69, i71);
   i28 = HEAP32[i86 >> 2] | 0;
   do {
    if ((i28 | 0) != 0) {
     i86 = i28 + 4 | 0;
     i74 = i86 | 0;
     i87 = (HEAP32[i74 >> 2] | 0) - 1 | 0;
     if ((i87 | 0) != 0) {
      HEAP32[i74 >> 2] = i87;
      break;
     }
     i87 = i86 - 4 | 0;
     if ((i87 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i87 >> 2] | 0) + 4 >> 2] & 63](i87);
    }
   } while (0);
   i28 = HEAP32[i69 >> 2] | 0;
   if ((i28 | 0) == 0) {
    break;
   }
   i87 = i28 | 0;
   i86 = (HEAP32[i87 >> 2] | 0) - 2 | 0;
   if ((i86 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i28);
    break;
   } else {
    HEAP32[i87 >> 2] = i86;
    break;
   }
  }
 } while (0);
 do {
  if ((HEAP32[i91 >> 2] & 4 | 0) == 0) {
   if ((HEAP32[(HEAP32[i3 + 20 >> 2] | 0) + 8 >> 2] | 0) == (i3 | 0)) {
    i69 = i3;
    do {
     if ((i3 | 0) == 0) {
      i115 = 229;
     } else {
      i71 = HEAP32[i3 + 356 >> 2] | 0;
      if ((i71 | 0) == 0) {
       i115 = 229;
       break;
      }
      HEAP32[i98 >> 2] = i71;
      i70 = i71 | 0;
      HEAP32[i70 >> 2] = (HEAP32[i70 >> 2] | 0) + 2;
     }
    } while (0);
    if ((i115 | 0) == 229) {
     __ZN3WTF6StringC1EPKc(i98, H_BASE + 2432 | 0);
    }
    HEAP32[i52 >> 2] = H_BASE + 296;
    __ZN3WTF6StringC1ENS_12ASCIILiteralE(i51, i52);
    __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i20, i98);
    i70 = i19 | 0;
    i71 = i20 | 0;
    i92 = HEAP32[i71 >> 2] | 0;
    HEAP32[i71 >> 2] = 0;
    HEAP32[i70 >> 2] = i92;
    __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i84, i51, i19);
    i92 = HEAP32[i70 >> 2] | 0;
    do {
     if ((i92 | 0) != 0) {
      i70 = i92 + 4 | 0;
      i4 = i70 | 0;
      i72 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
      if ((i72 | 0) != 0) {
       HEAP32[i4 >> 2] = i72;
       break;
      }
      i72 = i70 - 4 | 0;
      if ((i72 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i72 >> 2] | 0) + 4 >> 2] & 63](i72);
     }
    } while (0);
    i92 = HEAP32[i71 >> 2] | 0;
    do {
     if ((i92 | 0) != 0) {
      i72 = i92 + 4 | 0;
      i70 = i72 | 0;
      i4 = (HEAP32[i70 >> 2] | 0) - 1 | 0;
      if ((i4 | 0) != 0) {
       HEAP32[i70 >> 2] = i4;
       break;
      }
      i4 = i72 - 4 | 0;
      if ((i4 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 63](i4);
     }
    } while (0);
    i92 = HEAP32[i51 >> 2] | 0;
    do {
     if ((i92 | 0) != 0) {
      i71 = i92 | 0;
      i4 = (HEAP32[i71 >> 2] | 0) - 2 | 0;
      if ((i4 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i92);
       break;
      } else {
       HEAP32[i71 >> 2] = i4;
       break;
      }
     }
    } while (0);
    i92 = HEAP32[i98 >> 2] | 0;
    do {
     if ((i92 | 0) != 0) {
      i4 = i92 | 0;
      i71 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
      if ((i71 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i92);
       break;
      } else {
       HEAP32[i4 >> 2] = i71;
       break;
      }
     }
    } while (0);
    __ZN3WTF6StringC1EPKc(i50, H_BASE + 2432 | 0);
    __ZNK7WebCore8Document11completeURLERKN3WTF6StringE(i49, i69, i50);
    i92 = i99 | 0;
    i71 = i49 | 0;
    i4 = HEAP32[i71 >> 2] | 0;
    HEAP32[i92 >> 2] = i4;
    do {
     if ((i4 | 0) != 0) {
      i72 = i4 | 0;
      HEAP32[i72 >> 2] = (HEAP32[i72 >> 2] | 0) + 2;
      i72 = HEAP32[i71 >> 2] | 0;
      if ((i72 | 0) == 0) {
       break;
      }
      i70 = i72 | 0;
      i25 = (HEAP32[i70 >> 2] | 0) - 2 | 0;
      if ((i25 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i72);
       break;
      } else {
       HEAP32[i70 >> 2] = i25;
       break;
      }
     }
    } while (0);
    i71 = HEAP32[i50 >> 2] | 0;
    do {
     if ((i71 | 0) != 0) {
      i4 = i71 | 0;
      i69 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
      if ((i69 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i71);
       break;
      } else {
       HEAP32[i4 >> 2] = i69;
       break;
      }
     }
    } while (0);
    HEAP32[i48 >> 2] = H_BASE + 352;
    __ZN3WTF6StringC1ENS_12ASCIILiteralE(i47, i48);
    __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i18, i99);
    i71 = i17 | 0;
    i69 = i18 | 0;
    i4 = HEAP32[i69 >> 2] | 0;
    HEAP32[i69 >> 2] = 0;
    HEAP32[i71 >> 2] = i4;
    __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i84, i47, i17);
    i4 = HEAP32[i71 >> 2] | 0;
    do {
     if ((i4 | 0) != 0) {
      i71 = i4 + 4 | 0;
      i25 = i71 | 0;
      i70 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
      if ((i70 | 0) != 0) {
       HEAP32[i25 >> 2] = i70;
       break;
      }
      i70 = i71 - 4 | 0;
      if ((i70 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i70 >> 2] | 0) + 4 >> 2] & 63](i70);
     }
    } while (0);
    i4 = HEAP32[i69 >> 2] | 0;
    do {
     if ((i4 | 0) != 0) {
      i70 = i4 + 4 | 0;
      i71 = i70 | 0;
      i25 = (HEAP32[i71 >> 2] | 0) - 1 | 0;
      if ((i25 | 0) != 0) {
       HEAP32[i71 >> 2] = i25;
       break;
      }
      i25 = i70 - 4 | 0;
      if ((i25 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i25 >> 2] | 0) + 4 >> 2] & 63](i25);
     }
    } while (0);
    i4 = HEAP32[i47 >> 2] | 0;
    do {
     if ((i4 | 0) != 0) {
      i69 = i4 | 0;
      i25 = (HEAP32[i69 >> 2] | 0) - 2 | 0;
      if ((i25 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i4);
       break;
      } else {
       HEAP32[i69 >> 2] = i25;
       break;
      }
     }
    } while (0);
    i4 = HEAP32[i92 >> 2] | 0;
    do {
     if ((i4 | 0) != 0) {
      i25 = i4 | 0;
      i69 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
      if ((i69 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i4);
       break;
      } else {
       HEAP32[i25 >> 2] = i69;
       break;
      }
     }
    } while (0);
    i4 = i100 | 0;
    i92 = HEAP32[i3 + 1296 >> 2] | 0;
    HEAP32[i4 >> 2] = i92;
    if ((i92 | 0) != 0) {
     i69 = i92 | 0;
     HEAP32[i69 >> 2] = (HEAP32[i69 >> 2] | 0) + 2;
    }
    HEAP32[i46 >> 2] = H_BASE + 360;
    __ZN3WTF6StringC1ENS_12ASCIILiteralE(i45, i46);
    __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i16, i100);
    i69 = i15 | 0;
    i92 = i16 | 0;
    i25 = HEAP32[i92 >> 2] | 0;
    HEAP32[i92 >> 2] = 0;
    HEAP32[i69 >> 2] = i25;
    __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i84, i45, i15);
    i25 = HEAP32[i69 >> 2] | 0;
    do {
     if ((i25 | 0) != 0) {
      i69 = i25 + 4 | 0;
      i70 = i69 | 0;
      i71 = (HEAP32[i70 >> 2] | 0) - 1 | 0;
      if ((i71 | 0) != 0) {
       HEAP32[i70 >> 2] = i71;
       break;
      }
      i71 = i69 - 4 | 0;
      if ((i71 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i71 >> 2] | 0) + 4 >> 2] & 63](i71);
     }
    } while (0);
    i25 = HEAP32[i92 >> 2] | 0;
    do {
     if ((i25 | 0) != 0) {
      i71 = i25 + 4 | 0;
      i69 = i71 | 0;
      i70 = (HEAP32[i69 >> 2] | 0) - 1 | 0;
      if ((i70 | 0) != 0) {
       HEAP32[i69 >> 2] = i70;
       break;
      }
      i70 = i71 - 4 | 0;
      if ((i70 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i70 >> 2] | 0) + 4 >> 2] & 63](i70);
     }
    } while (0);
    i25 = HEAP32[i45 >> 2] | 0;
    do {
     if ((i25 | 0) != 0) {
      i92 = i25 | 0;
      i70 = (HEAP32[i92 >> 2] | 0) - 2 | 0;
      if ((i70 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i25);
       break;
      } else {
       HEAP32[i92 >> 2] = i70;
       break;
      }
     }
    } while (0);
    i25 = HEAP32[i4 >> 2] | 0;
    if ((i25 | 0) == 0) {
     break;
    }
    i70 = i25 | 0;
    i92 = (HEAP32[i70 >> 2] | 0) - 2 | 0;
    if ((i92 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i25);
     break;
    } else {
     HEAP32[i70 >> 2] = i92;
     break;
    }
   }
   if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i106 >> 2] | 0) + 76 >> 2] & 1](i3) | 0) != 10) {
    if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 112 >> 2] & 1](i3) | 0)) {
     break;
    }
    i92 = i3;
    __ZNK7WebCore13QualifiedName8toStringEv(i101, i3 + 48 | 0);
    HEAP32[i38 >> 2] = H_BASE + 424;
    __ZN3WTF6StringC1ENS_12ASCIILiteralE(i37, i38);
    __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i8, i101);
    i70 = i7 | 0;
    i25 = i8 | 0;
    i71 = HEAP32[i25 >> 2] | 0;
    HEAP32[i25 >> 2] = 0;
    HEAP32[i70 >> 2] = i71;
    __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i84, i37, i7);
    i71 = HEAP32[i70 >> 2] | 0;
    do {
     if ((i71 | 0) != 0) {
      i70 = i71 + 4 | 0;
      i69 = i70 | 0;
      i72 = (HEAP32[i69 >> 2] | 0) - 1 | 0;
      if ((i72 | 0) != 0) {
       HEAP32[i69 >> 2] = i72;
       break;
      }
      i72 = i70 - 4 | 0;
      if ((i72 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i72 >> 2] | 0) + 4 >> 2] & 63](i72);
     }
    } while (0);
    i71 = HEAP32[i25 >> 2] | 0;
    do {
     if ((i71 | 0) != 0) {
      i4 = i71 + 4 | 0;
      i72 = i4 | 0;
      i70 = (HEAP32[i72 >> 2] | 0) - 1 | 0;
      if ((i70 | 0) != 0) {
       HEAP32[i72 >> 2] = i70;
       break;
      }
      i70 = i4 - 4 | 0;
      if ((i70 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i70 >> 2] | 0) + 4 >> 2] & 63](i70);
     }
    } while (0);
    i71 = HEAP32[i37 >> 2] | 0;
    do {
     if ((i71 | 0) != 0) {
      i25 = i71 | 0;
      i70 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
      if ((i70 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i71);
       break;
      } else {
       HEAP32[i25 >> 2] = i70;
       break;
      }
     }
    } while (0);
    i71 = HEAP32[i101 >> 2] | 0;
    do {
     if ((i71 | 0) != 0) {
      i70 = i71 | 0;
      i25 = (HEAP32[i70 >> 2] | 0) - 2 | 0;
      if ((i25 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i71);
       break;
      } else {
       HEAP32[i70 >> 2] = i25;
       break;
      }
     }
    } while (0);
    i71 = __ZNK7WebCore4Attr5valueEv(i92) | 0;
    HEAP32[i57 >> 2] = H_BASE + 432;
    __ZN3WTF6StringC1ENS_12ASCIILiteralE(i56, i57);
    __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i22, i71);
    i71 = i21 | 0;
    i25 = i22 | 0;
    i70 = HEAP32[i25 >> 2] | 0;
    HEAP32[i25 >> 2] = 0;
    HEAP32[i71 >> 2] = i70;
    __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i84, i56, i21);
    i70 = HEAP32[i71 >> 2] | 0;
    do {
     if ((i70 | 0) != 0) {
      i71 = i70 + 4 | 0;
      i4 = i71 | 0;
      i72 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
      if ((i72 | 0) != 0) {
       HEAP32[i4 >> 2] = i72;
       break;
      }
      i72 = i71 - 4 | 0;
      if ((i72 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i72 >> 2] | 0) + 4 >> 2] & 63](i72);
     }
    } while (0);
    i70 = HEAP32[i25 >> 2] | 0;
    do {
     if ((i70 | 0) != 0) {
      i92 = i70 + 4 | 0;
      i72 = i92 | 0;
      i71 = (HEAP32[i72 >> 2] | 0) - 1 | 0;
      if ((i71 | 0) != 0) {
       HEAP32[i72 >> 2] = i71;
       break;
      }
      i71 = i92 - 4 | 0;
      if ((i71 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i71 >> 2] | 0) + 4 >> 2] & 63](i71);
     }
    } while (0);
    i70 = HEAP32[i56 >> 2] | 0;
    if ((i70 | 0) == 0) {
     break;
    }
    i25 = i70 | 0;
    i71 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
    if ((i71 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i70);
     break;
    } else {
     HEAP32[i25 >> 2] = i71;
     break;
    }
   }
   HEAP32[i44 >> 2] = H_BASE + 376;
   __ZN3WTF6StringC1ENS_12ASCIILiteralE(i43, i44);
   __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i14, i3 + 48 | 0);
   i71 = i13 | 0;
   i25 = i14 | 0;
   i70 = HEAP32[i25 >> 2] | 0;
   HEAP32[i25 >> 2] = 0;
   HEAP32[i71 >> 2] = i70;
   __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i84, i43, i13);
   i70 = HEAP32[i71 >> 2] | 0;
   do {
    if ((i70 | 0) != 0) {
     i71 = i70 + 4 | 0;
     i92 = i71 | 0;
     i72 = (HEAP32[i92 >> 2] | 0) - 1 | 0;
     if ((i72 | 0) != 0) {
      HEAP32[i92 >> 2] = i72;
      break;
     }
     i72 = i71 - 4 | 0;
     if ((i72 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i72 >> 2] | 0) + 4 >> 2] & 63](i72);
    }
   } while (0);
   i70 = HEAP32[i25 >> 2] | 0;
   do {
    if ((i70 | 0) != 0) {
     i72 = i70 + 4 | 0;
     i71 = i72 | 0;
     i92 = (HEAP32[i71 >> 2] | 0) - 1 | 0;
     if ((i92 | 0) != 0) {
      HEAP32[i71 >> 2] = i92;
      break;
     }
     i92 = i72 - 4 | 0;
     if ((i92 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i92 >> 2] | 0) + 4 >> 2] & 63](i92);
    }
   } while (0);
   i70 = HEAP32[i43 >> 2] | 0;
   do {
    if ((i70 | 0) != 0) {
     i25 = i70 | 0;
     i92 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
     if ((i92 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i70);
      break;
     } else {
      HEAP32[i25 >> 2] = i92;
      break;
     }
    }
   } while (0);
   HEAP32[i42 >> 2] = H_BASE + 392;
   __ZN3WTF6StringC1ENS_12ASCIILiteralE(i41, i42);
   __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i12, i3 + 52 | 0);
   i70 = i11 | 0;
   i92 = i12 | 0;
   i25 = HEAP32[i92 >> 2] | 0;
   HEAP32[i92 >> 2] = 0;
   HEAP32[i70 >> 2] = i25;
   __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i84, i41, i11);
   i25 = HEAP32[i70 >> 2] | 0;
   do {
    if ((i25 | 0) != 0) {
     i70 = i25 + 4 | 0;
     i72 = i70 | 0;
     i71 = (HEAP32[i72 >> 2] | 0) - 1 | 0;
     if ((i71 | 0) != 0) {
      HEAP32[i72 >> 2] = i71;
      break;
     }
     i71 = i70 - 4 | 0;
     if ((i71 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i71 >> 2] | 0) + 4 >> 2] & 63](i71);
    }
   } while (0);
   i25 = HEAP32[i92 >> 2] | 0;
   do {
    if ((i25 | 0) != 0) {
     i71 = i25 + 4 | 0;
     i70 = i71 | 0;
     i72 = (HEAP32[i70 >> 2] | 0) - 1 | 0;
     if ((i72 | 0) != 0) {
      HEAP32[i70 >> 2] = i72;
      break;
     }
     i72 = i71 - 4 | 0;
     if ((i72 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i72 >> 2] | 0) + 4 >> 2] & 63](i72);
    }
   } while (0);
   i25 = HEAP32[i41 >> 2] | 0;
   do {
    if ((i25 | 0) != 0) {
     i92 = i25 | 0;
     i72 = (HEAP32[i92 >> 2] | 0) - 2 | 0;
     if ((i72 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i25);
      break;
     } else {
      HEAP32[i92 >> 2] = i72;
      break;
     }
    }
   } while (0);
   HEAP32[i40 >> 2] = H_BASE + 408;
   __ZN3WTF6StringC1ENS_12ASCIILiteralE(i39, i40);
   __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i10, i3 + 56 | 0);
   i25 = i9 | 0;
   i72 = i10 | 0;
   i92 = HEAP32[i72 >> 2] | 0;
   HEAP32[i72 >> 2] = 0;
   HEAP32[i25 >> 2] = i92;
   __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i84, i39, i9);
   i92 = HEAP32[i25 >> 2] | 0;
   do {
    if ((i92 | 0) != 0) {
     i25 = i92 + 4 | 0;
     i71 = i25 | 0;
     i70 = (HEAP32[i71 >> 2] | 0) - 1 | 0;
     if ((i70 | 0) != 0) {
      HEAP32[i71 >> 2] = i70;
      break;
     }
     i70 = i25 - 4 | 0;
     if ((i70 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i70 >> 2] | 0) + 4 >> 2] & 63](i70);
    }
   } while (0);
   i92 = HEAP32[i72 >> 2] | 0;
   do {
    if ((i92 | 0) != 0) {
     i70 = i92 + 4 | 0;
     i25 = i70 | 0;
     i71 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
     if ((i71 | 0) != 0) {
      HEAP32[i25 >> 2] = i71;
      break;
     }
     i71 = i70 - 4 | 0;
     if ((i71 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i71 >> 2] | 0) + 4 >> 2] & 63](i71);
    }
   } while (0);
   i92 = HEAP32[i39 >> 2] | 0;
   if ((i92 | 0) == 0) {
    break;
   }
   i72 = i92 | 0;
   i71 = (HEAP32[i72 >> 2] | 0) - 2 | 0;
   if ((i71 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i92);
    break;
   } else {
    HEAP32[i72 >> 2] = i71;
    break;
   }
  } else {
   i71 = i3;
   __ZN7WebCore17InspectorDOMAgent30buildArrayForElementAttributesEPNS_7ElementE(i93, 0, i71);
   HEAP32[i67 >> 2] = H_BASE + 224;
   __ZN3WTF6StringC1ENS_12ASCIILiteralE(i66, i67);
   i72 = i68 | 0;
   i92 = i93 | 0;
   i70 = HEAP32[i92 >> 2] | 0;
   HEAP32[i92 >> 2] = 0;
   HEAP32[i72 >> 2] = i70;
   __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i84, i66, i68);
   i70 = HEAP32[i72 >> 2] | 0;
   do {
    if ((i70 | 0) != 0) {
     i72 = i70 + 4 | 0;
     i92 = i72 | 0;
     i25 = (HEAP32[i92 >> 2] | 0) - 1 | 0;
     if ((i25 | 0) != 0) {
      HEAP32[i92 >> 2] = i25;
      break;
     }
     i25 = i72 - 4 | 0;
     if ((i25 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i25 >> 2] | 0) + 4 >> 2] & 63](i25);
    }
   } while (0);
   i70 = HEAP32[i66 >> 2] | 0;
   do {
    if ((i70 | 0) != 0) {
     i25 = i70 | 0;
     i72 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
     if ((i72 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i70);
      break;
     } else {
      HEAP32[i25 >> 2] = i72;
      break;
     }
    }
   } while (0);
   do {
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 120 >> 2] & 1](i3) | 0) {
     i70 = i3;
     i72 = HEAP32[i3 + 52 >> 2] | 0;
     do {
      if ((i72 | 0) != 0) {
       __ZN7WebCore18InspectorPageAgent7frameIdEPNS_5FrameE(i94, HEAP32[i2 + 16 >> 2] | 0, i72);
       HEAP32[i65 >> 2] = H_BASE + 240;
       __ZN3WTF6StringC1ENS_12ASCIILiteralE(i64, i65);
       __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i24, i94);
       i25 = i23 | 0;
       i92 = i24 | 0;
       i4 = HEAP32[i92 >> 2] | 0;
       HEAP32[i92 >> 2] = 0;
       HEAP32[i25 >> 2] = i4;
       __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i84, i64, i23);
       i4 = HEAP32[i25 >> 2] | 0;
       do {
        if ((i4 | 0) != 0) {
         i25 = i4 + 4 | 0;
         i69 = i25 | 0;
         i26 = (HEAP32[i69 >> 2] | 0) - 1 | 0;
         if ((i26 | 0) != 0) {
          HEAP32[i69 >> 2] = i26;
          break;
         }
         i26 = i25 - 4 | 0;
         if ((i26 | 0) == 0) {
          break;
         }
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i26 >> 2] | 0) + 4 >> 2] & 63](i26);
        }
       } while (0);
       i4 = HEAP32[i92 >> 2] | 0;
       do {
        if ((i4 | 0) != 0) {
         i26 = i4 + 4 | 0;
         i25 = i26 | 0;
         i69 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
         if ((i69 | 0) != 0) {
          HEAP32[i25 >> 2] = i69;
          break;
         }
         i69 = i26 - 4 | 0;
         if ((i69 | 0) == 0) {
          break;
         }
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i69 >> 2] | 0) + 4 >> 2] & 63](i69);
        }
       } while (0);
       i4 = HEAP32[i64 >> 2] | 0;
       do {
        if ((i4 | 0) != 0) {
         i92 = i4 | 0;
         i69 = (HEAP32[i92 >> 2] | 0) - 2 | 0;
         if ((i69 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i4);
          break;
         } else {
          HEAP32[i92 >> 2] = i69;
          break;
         }
        }
       } while (0);
       i4 = HEAP32[i94 >> 2] | 0;
       if ((i4 | 0) == 0) {
        break;
       }
       i69 = i4 | 0;
       i92 = (HEAP32[i69 >> 2] | 0) - 2 | 0;
       if ((i92 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i4);
        break;
       } else {
        HEAP32[i69 >> 2] = i92;
        break;
       }
      }
     } while (0);
     i72 = __ZNK7WebCore21HTMLFrameOwnerElement15contentDocumentEv(i70) | 0;
     if ((i72 | 0) == 0) {
      break;
     }
     __ZN7WebCore17InspectorDOMAgent18buildObjectForNodeEPNS_4NodeEiPN3WTF7HashMapINS3_6RefPtrIS1_EEiNS3_7PtrHashIS6_EENS3_10HashTraitsIS6_EENS9_IiEEEE(i95, i2, i72 | 0, 0, i5);
     HEAP32[i62 >> 2] = H_BASE + 248;
     __ZN3WTF6StringC1ENS_12ASCIILiteralE(i61, i62);
     i72 = i63 | 0;
     i29 = i95 | 0;
     i92 = HEAP32[i29 >> 2] | 0;
     HEAP32[i29 >> 2] = 0;
     HEAP32[i72 >> 2] = i92;
     __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i84, i61, i63);
     i92 = HEAP32[i72 >> 2] | 0;
     do {
      if ((i92 | 0) != 0) {
       i72 = i92 + 4 | 0;
       i29 = i72 | 0;
       i69 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
       if ((i69 | 0) != 0) {
        HEAP32[i29 >> 2] = i69;
        break;
       }
       i69 = i72 - 4 | 0;
       if ((i69 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i69 >> 2] | 0) + 4 >> 2] & 63](i69);
      }
     } while (0);
     i92 = HEAP32[i61 >> 2] | 0;
     if ((i92 | 0) == 0) {
      break;
     }
     i70 = i92 | 0;
     i69 = (HEAP32[i70 >> 2] | 0) - 2 | 0;
     if ((i69 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i92);
      break;
     } else {
      HEAP32[i70 >> 2] = i69;
      break;
     }
    }
   } while (0);
   i69 = __ZNK7WebCore7Element10shadowRootEv(i71) | 0;
   do {
    if ((i69 | 0) != 0) {
     i70 = __ZN3WTF10fastMallocEj(24) | 0;
     __ZN9Inspector18InspectorArrayBaseC2Ev(i70);
     HEAP32[i70 >> 2] = H_BASE + 1800;
     __ZN7WebCore17InspectorDOMAgent18buildObjectForNodeEPNS_4NodeEiPN3WTF7HashMapINS3_6RefPtrIS1_EEiNS3_7PtrHashIS6_EENS3_10HashTraitsIS6_EENS9_IiEEEE(i96, i2, i69 | 0, 0, i5);
     i92 = i96 | 0;
     i72 = HEAP32[i92 >> 2] | 0;
     HEAP32[i92 >> 2] = 0;
     i92 = i72 | 0;
     i72 = i70 + 12 | 0;
     i29 = i70 + 20 | 0;
     i4 = HEAP32[i29 >> 2] | 0;
     if ((i4 | 0) == (HEAP32[i70 + 16 >> 2] | 0)) {
      __ZN3WTF6VectorINS_6RefPtrIN9Inspector14InspectorValueEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i72, i4 + 1 | 0);
      HEAP32[(HEAP32[i72 >> 2] | 0) + (HEAP32[i29 >> 2] << 2) >> 2] = i92;
      HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 1;
      if ((i70 | 0) == 0) {
       i116 = 1;
      } else {
       i117 = 0;
       i115 = 200;
      }
     } else {
      HEAP32[(HEAP32[i72 >> 2] | 0) + (i4 << 2) >> 2] = i92;
      HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 1;
      i117 = (i70 | 0) == 0;
      i115 = 200;
     }
     if ((i115 | 0) == 200) {
      i29 = i70 + 4 | 0;
      HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 1;
      i116 = i117;
     }
     HEAP32[i59 >> 2] = H_BASE + 264;
     __ZN3WTF6StringC1ENS_12ASCIILiteralE(i58, i59);
     i29 = i60 | 0;
     i92 = i70;
     HEAP32[i29 >> 2] = i92;
     __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i84, i58, i60);
     i4 = HEAP32[i29 >> 2] | 0;
     do {
      if ((i4 | 0) != 0) {
       i29 = i4 + 4 | 0;
       i72 = i29 | 0;
       i26 = (HEAP32[i72 >> 2] | 0) - 1 | 0;
       if ((i26 | 0) != 0) {
        HEAP32[i72 >> 2] = i26;
        break;
       }
       i26 = i29 - 4 | 0;
       if ((i26 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i26 >> 2] | 0) + 4 >> 2] & 63](i26);
      }
     } while (0);
     i4 = HEAP32[i58 >> 2] | 0;
     do {
      if ((i4 | 0) != 0) {
       i26 = i4 | 0;
       i29 = (HEAP32[i26 >> 2] | 0) - 2 | 0;
       if ((i29 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i4);
        break;
       } else {
        HEAP32[i26 >> 2] = i29;
        break;
       }
      }
     } while (0);
     if (i116) {
      break;
     }
     i4 = i70 + 4 | 0;
     i29 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
     if ((i29 | 0) == 0) {
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i70 >> 2] | 0) + 4 >> 2] & 63](i92);
      break;
     } else {
      HEAP32[i4 >> 2] = i29;
      break;
     }
    }
   } while (0);
   i69 = HEAP32[i3 + 44 >> 2] | 0;
   i71 = HEAP32[__ZN7WebCore9HTMLNames11templateTagE >> 2] | 0;
   if ((i69 | 0) != (i71 | 0)) {
    if ((HEAP32[i69 + 12 >> 2] | 0) != (HEAP32[i71 + 12 >> 2] | 0)) {
     break;
    }
    if ((HEAP32[i69 + 16 >> 2] | 0) != (HEAP32[i71 + 16 >> 2] | 0)) {
     break;
    }
   }
   __ZN7WebCore17InspectorDOMAgent18buildObjectForNodeEPNS_4NodeEiPN3WTF7HashMapINS3_6RefPtrIS1_EEiNS3_7PtrHashIS6_EENS3_10HashTraitsIS6_EENS9_IiEEEE(i97, i2, __ZNK7WebCore19HTMLTemplateElement7contentEv(i3) | 0, 0, i5);
   HEAP32[i54 >> 2] = H_BASE + 280;
   __ZN3WTF6StringC1ENS_12ASCIILiteralE(i53, i54);
   i71 = i55 | 0;
   i69 = i97 | 0;
   i29 = HEAP32[i69 >> 2] | 0;
   HEAP32[i69 >> 2] = 0;
   HEAP32[i71 >> 2] = i29;
   __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i84, i53, i55);
   i29 = HEAP32[i71 >> 2] | 0;
   do {
    if ((i29 | 0) != 0) {
     i71 = i29 + 4 | 0;
     i69 = i71 | 0;
     i4 = (HEAP32[i69 >> 2] | 0) - 1 | 0;
     if ((i4 | 0) != 0) {
      HEAP32[i69 >> 2] = i4;
      break;
     }
     i4 = i71 - 4 | 0;
     if ((i4 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 63](i4);
    }
   } while (0);
   i29 = HEAP32[i53 >> 2] | 0;
   if ((i29 | 0) == 0) {
    break;
   }
   i4 = i29 | 0;
   i71 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i71 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i29);
    break;
   } else {
    HEAP32[i4 >> 2] = i71;
    break;
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = i27;
 i27 = HEAP32[i105 >> 2] | 0;
 do {
  if ((i27 | 0) != 0) {
   i105 = i27 | 0;
   i1 = (HEAP32[i105 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i27);
    break;
   } else {
    HEAP32[i105 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i27 = HEAP32[i104 >> 2] | 0;
 do {
  if ((i27 | 0) != 0) {
   i104 = i27 | 0;
   i1 = (HEAP32[i104 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i27);
    break;
   } else {
    HEAP32[i104 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i27 = HEAP32[i103 >> 2] | 0;
 if ((i27 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i103 = i27 | 0;
 i1 = (HEAP32[i103 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i27);
  STACKTOP = i6;
  return;
 } else {
  HEAP32[i103 >> 2] = i1;
  STACKTOP = i6;
  return;
 }
}
function __ZN7WebCore17InspectorDOMAgent27buildObjectForEventListenerERKNS_23RegisteredEventListenerERKN3WTF12AtomicStringEPNS_4NodeEPKNS4_6StringE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 408 | 0;
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
 i19 = i7 + 88 | 0;
 i20 = i7 + 96 | 0;
 i21 = i7 + 104 | 0;
 i22 = i7 + 112 | 0;
 i23 = i7 + 120 | 0;
 i24 = i7 + 128 | 0;
 i25 = i7 + 136 | 0;
 i26 = i7 + 144 | 0;
 i27 = i7 + 152 | 0;
 i28 = i7 + 160 | 0;
 i29 = i7 + 168 | 0;
 i30 = i7 + 176 | 0;
 i31 = i7 + 184 | 0;
 i32 = i7 + 192 | 0;
 i33 = i7 + 200 | 0;
 i34 = i7 + 208 | 0;
 i35 = i7 + 216 | 0;
 i36 = i7 + 224 | 0;
 i37 = i7 + 232 | 0;
 i38 = i7 + 240 | 0;
 i39 = i7 + 248 | 0;
 i40 = i7 + 256 | 0;
 i41 = i7 + 264 | 0;
 i42 = i7 + 272 | 0;
 i43 = i7 + 280 | 0;
 i44 = i7 + 288 | 0;
 i45 = i7 + 296 | 0;
 i46 = i7 + 304 | 0;
 i47 = i7 + 312 | 0;
 i48 = i7 + 320 | 0;
 i49 = i7 + 328 | 0;
 i50 = i7 + 336 | 0;
 i51 = i7 + 344 | 0;
 i52 = i7 + 352 | 0;
 i53 = i7 + 360 | 0;
 i54 = i7 + 368 | 0;
 i55 = i7 + 392 | 0;
 i56 = i7 + 400 | 0;
 i57 = HEAP32[i3 >> 2] | 0;
 i58 = (i57 | 0) == 0;
 if (!i58) {
  i59 = i57 + 4 | 0;
  HEAP32[i59 >> 2] = (HEAP32[i59 >> 2] | 0) + 1;
 }
 i59 = i49 | 0;
 HEAP32[i59 >> 2] = 0;
 i60 = i50 | 0;
 HEAP32[i60 >> 2] = 0;
 i61 = i51 | 0;
 HEAP32[i61 >> 2] = 0;
 if ((HEAP32[i57 + 8 >> 2] | 0) != 0 | i58) {
  i62 = 0;
  i63 = 0;
  i64 = 0;
 } else {
  i65 = i57 + 24 | 0;
  __ZN3JSC12JSLockHolderC1EPNS_2VME(i52, HEAP32[(HEAP32[i65 >> 2] | 0) + 68 >> 2] | 0);
  i66 = i5 + 20 | 0;
  i67 = __ZN7WebCore17execStateFromNodeERNS_15DOMWrapperWorldEPNS_4NodeE(HEAP32[i65 >> 2] | 0, HEAP32[(HEAP32[i66 >> 2] | 0) + 8 >> 2] | 0) | 0;
  i65 = HEAP32[(HEAP32[i66 >> 2] | 0) + 8 >> 2] | 0;
  i66 = __ZNK7WebCore15JSEventListener10jsFunctionEPNS_22ScriptExecutionContextE(i57, (i65 | 0) == 0 ? 0 : i65 + 88 | 0) | 0;
  L6 : do {
   if ((i66 | 0) == 0) {
    i68 = 0;
   } else {
    i65 = __ZNK3JSC8JSObject8toStringEPNS_9ExecStateE(i66, i67) | 0;
    i69 = i65 + 12 | 0;
    i70 = HEAP32[i69 >> 2] | 0;
    if ((i70 | 0) == 0) {
     __ZNK3JSC12JSRopeString11resolveRopeEPNS_9ExecStateE(i65, i67);
     i65 = HEAP32[i69 >> 2] | 0;
     if ((i65 | 0) == 0) {
      i71 = 0;
     } else {
      i72 = i65;
      i73 = 7;
     }
    } else {
     i72 = i70;
     i73 = 7;
    }
    if ((i73 | 0) == 7) {
     i70 = i72 | 0;
     HEAP32[i70 >> 2] = (HEAP32[i70 >> 2] | 0) + 2;
     i71 = i72;
    }
    i70 = HEAP32[i59 >> 2] | 0;
    HEAP32[i59 >> 2] = i71;
    do {
     if ((i70 | 0) != 0) {
      i65 = i70 | 0;
      i69 = (HEAP32[i65 >> 2] | 0) - 2 | 0;
      if ((i69 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i70);
       break;
      } else {
       HEAP32[i65 >> 2] = i69;
       break;
      }
     }
    } while (0);
    if ((HEAP32[(i66 & -65536) + 1048 >> 2] | 0) == 2) {
     i74 = i66 + 8 | 0;
    } else {
     i74 = (HEAP32[i66 >> 2] | 0) + 32 | 0;
    }
    i70 = HEAP32[i74 >> 2] | 0;
    if ((i70 | 0) == 0) {
     i68 = 0;
     break;
    } else {
     i75 = i70;
    }
    while (1) {
     if ((i75 | 0) == (__ZN3JSC10JSFunction6s_infoE | 0)) {
      break;
     }
     i70 = HEAP32[i75 + 4 >> 2] | 0;
     if ((i70 | 0) == 0) {
      i68 = 0;
      break L6;
     } else {
      i75 = i70;
     }
    }
    i70 = HEAP32[i66 + 12 >> 2] | 0;
    if ((HEAP32[i70 + 4 >> 2] | 0) == 0 | (i70 | 0) == 0) {
     i68 = 0;
     break;
    }
    i69 = (HEAP32[i70 + 64 >> 2] | 0) - 1 | 0;
    i65 = i70 + 36 | 0;
    i70 = HEAP32[i65 >> 2] | 0;
    do {
     if ((i70 | 0) == 0) {
      i73 = 23;
     } else {
      i76 = i70 + 20 | 0;
      i77 = HEAP32[i76 >> 2] | 0;
      if (i77 >>> 0 > 1 >>> 0) {
       i78 = i77;
      } else {
       __ZN3JSC14SourceProvider5getIDEv(i70);
       i78 = HEAP32[i76 >> 2] | 0;
      }
      if ((i78 & -2 | 0) == 2) {
       i73 = 23;
       break;
      }
      i76 = HEAP32[i65 >> 2] | 0;
      if ((i76 | 0) == 0) {
       i79 = 1;
      } else {
       i77 = i76 + 20 | 0;
       i80 = HEAP32[i77 >> 2] | 0;
       if (i80 >>> 0 > 1 >>> 0) {
        i81 = i80;
       } else {
        __ZN3JSC14SourceProvider5getIDEv(i76);
        i81 = HEAP32[i77 >> 2] | 0;
       }
       i79 = i81 >>> 1;
      }
      __ZN3WTF6String6numberEi(i53, i79);
      i82 = 1;
      i83 = 0;
      i84 = i53 | 0;
     }
    } while (0);
    do {
     if ((i73 | 0) == 23) {
      i70 = i53 | 0;
      i77 = HEAP32[(__ZN3WTF11emptyStringEv() | 0) >> 2] | 0;
      HEAP32[i70 >> 2] = i77;
      if ((i77 | 0) == 0) {
       i82 = 0;
       i83 = 1;
       i84 = i70;
       break;
      }
      i76 = i77 | 0;
      HEAP32[i76 >> 2] = (HEAP32[i76 >> 2] | 0) + 2;
      i82 = 0;
      i83 = 1;
      i84 = i70;
     }
    } while (0);
    i70 = HEAP32[i84 >> 2] | 0;
    if ((i70 | 0) != 0) {
     i76 = i70 | 0;
     HEAP32[i76 >> 2] = (HEAP32[i76 >> 2] | 0) + 2;
    }
    i76 = HEAP32[i60 >> 2] | 0;
    HEAP32[i60 >> 2] = i70;
    do {
     if ((i76 | 0) != 0) {
      i70 = i76 | 0;
      i77 = (HEAP32[i70 >> 2] | 0) - 2 | 0;
      if ((i77 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i76);
       break;
      } else {
       HEAP32[i70 >> 2] = i77;
       break;
      }
     }
    } while (0);
    do {
     if (i82) {
      i76 = HEAP32[i84 >> 2] | 0;
      if ((i76 | 0) == 0) {
       break;
      }
      i77 = i76 | 0;
      i70 = (HEAP32[i77 >> 2] | 0) - 2 | 0;
      if ((i70 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i76);
       break;
      } else {
       HEAP32[i77 >> 2] = i70;
       break;
      }
     }
    } while (0);
    do {
     if (i83) {
      i70 = HEAP32[i84 >> 2] | 0;
      if ((i70 | 0) == 0) {
       break;
      }
      i77 = i70 | 0;
      i76 = (HEAP32[i77 >> 2] | 0) - 2 | 0;
      if ((i76 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i70);
       break;
      } else {
       HEAP32[i77 >> 2] = i76;
       break;
      }
     }
    } while (0);
    i76 = HEAP32[(HEAP32[i65 >> 2] | 0) + 8 >> 2] | 0;
    if ((i76 | 0) != 0) {
     i77 = i76 | 0;
     HEAP32[i77 >> 2] = (HEAP32[i77 >> 2] | 0) + 2;
    }
    i77 = HEAP32[i61 >> 2] | 0;
    HEAP32[i61 >> 2] = i76;
    if ((i77 | 0) == 0) {
     i68 = i69;
     break;
    }
    i76 = i77 | 0;
    i70 = (HEAP32[i76 >> 2] | 0) - 2 | 0;
    if ((i70 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i77);
     i68 = i69;
     break;
    } else {
     HEAP32[i76 >> 2] = i70;
     i68 = i69;
     break;
    }
   }
  } while (0);
  __ZN3JSC12JSLockHolderD1Ev(i52);
  i62 = i67;
  i63 = i66;
  i64 = i68;
 }
 __ZN9Inspector15InspectorObject6createEv(i41);
 i68 = HEAP32[i41 >> 2] | 0;
 i41 = i68 | 0;
 HEAP32[i40 >> 2] = H_BASE + 584;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i39, i40);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i38, i4 | 0);
 i4 = i37 | 0;
 i40 = i38 | 0;
 i38 = HEAP32[i40 >> 2] | 0;
 HEAP32[i40 >> 2] = 0;
 HEAP32[i4 >> 2] = i38;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i41, i39, i37);
 i37 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i37 | 0) != 0) {
   i4 = i37 + 4 | 0;
   i38 = i4 | 0;
   i66 = (HEAP32[i38 >> 2] | 0) - 1 | 0;
   if ((i66 | 0) != 0) {
    HEAP32[i38 >> 2] = i66;
    break;
   }
   i66 = i4 - 4 | 0;
   if ((i66 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i66 >> 2] | 0) + 4 >> 2] & 63](i66);
  }
 } while (0);
 i37 = HEAP32[i40 >> 2] | 0;
 do {
  if ((i37 | 0) != 0) {
   i40 = i37 + 4 | 0;
   i66 = i40 | 0;
   i4 = (HEAP32[i66 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i66 >> 2] = i4;
    break;
   }
   i4 = i40 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 63](i4);
  }
 } while (0);
 i37 = HEAP32[i39 >> 2] | 0;
 do {
  if ((i37 | 0) != 0) {
   i39 = i37 | 0;
   i4 = (HEAP32[i39 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i37);
    break;
   } else {
    HEAP32[i39 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i37 = (HEAP8[i3 + 4 | 0] & 1) != 0;
 HEAP32[i36 >> 2] = H_BASE + 592;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i35, i36);
 __ZN9Inspector19InspectorBasicValue6createEb(i34, i37);
 i37 = i33 | 0;
 i36 = i34 | 0;
 i34 = HEAP32[i36 >> 2] | 0;
 HEAP32[i36 >> 2] = 0;
 HEAP32[i37 >> 2] = i34;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i41, i35, i33);
 i33 = HEAP32[i37 >> 2] | 0;
 do {
  if ((i33 | 0) != 0) {
   i37 = i33 + 4 | 0;
   i34 = i37 | 0;
   i3 = (HEAP32[i34 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i34 >> 2] = i3;
    break;
   }
   i3 = i37 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 63](i3);
  }
 } while (0);
 i33 = HEAP32[i36 >> 2] | 0;
 do {
  if ((i33 | 0) != 0) {
   i36 = i33 + 4 | 0;
   i3 = i36 | 0;
   i37 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i37 | 0) != 0) {
    HEAP32[i3 >> 2] = i37;
    break;
   }
   i37 = i36 - 4 | 0;
   if ((i37 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i37 >> 2] | 0) + 4 >> 2] & 63](i37);
  }
 } while (0);
 i33 = HEAP32[i35 >> 2] | 0;
 do {
  if ((i33 | 0) != 0) {
   i35 = i33 | 0;
   i37 = (HEAP32[i35 >> 2] | 0) - 2 | 0;
   if ((i37 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i33);
    break;
   } else {
    HEAP32[i35 >> 2] = i37;
    break;
   }
  }
 } while (0);
 i33 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i57 >> 2] | 0) + 24 >> 2] & 1](i57) | 0;
 HEAP32[i32 >> 2] = H_BASE + 608;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i31, i32);
 __ZN9Inspector19InspectorBasicValue6createEb(i30, i33);
 i33 = i29 | 0;
 i32 = i30 | 0;
 i30 = HEAP32[i32 >> 2] | 0;
 HEAP32[i32 >> 2] = 0;
 HEAP32[i33 >> 2] = i30;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i41, i31, i29);
 i29 = HEAP32[i33 >> 2] | 0;
 do {
  if ((i29 | 0) != 0) {
   i33 = i29 + 4 | 0;
   i30 = i33 | 0;
   i37 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
   if ((i37 | 0) != 0) {
    HEAP32[i30 >> 2] = i37;
    break;
   }
   i37 = i33 - 4 | 0;
   if ((i37 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i37 >> 2] | 0) + 4 >> 2] & 63](i37);
  }
 } while (0);
 i29 = HEAP32[i32 >> 2] | 0;
 do {
  if ((i29 | 0) != 0) {
   i32 = i29 + 4 | 0;
   i37 = i32 | 0;
   i33 = (HEAP32[i37 >> 2] | 0) - 1 | 0;
   if ((i33 | 0) != 0) {
    HEAP32[i37 >> 2] = i33;
    break;
   }
   i33 = i32 - 4 | 0;
   if ((i33 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i33 >> 2] | 0) + 4 >> 2] & 63](i33);
  }
 } while (0);
 i29 = HEAP32[i31 >> 2] | 0;
 do {
  if ((i29 | 0) != 0) {
   i31 = i29 | 0;
   i33 = (HEAP32[i31 >> 2] | 0) - 2 | 0;
   if ((i33 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i29);
    break;
   } else {
    HEAP32[i31 >> 2] = i33;
    break;
   }
  }
 } while (0);
 i29 = __ZN7WebCore17InspectorDOMAgent22pushNodePathToFrontendEPNS_4NodeE(i2, i5) | 0;
 HEAP32[i28 >> 2] = H_BASE + 624;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i27, i28);
 __ZN9Inspector19InspectorBasicValue6createEd(i26, +(i29 | 0));
 i29 = i25 | 0;
 i28 = i26 | 0;
 i26 = HEAP32[i28 >> 2] | 0;
 HEAP32[i28 >> 2] = 0;
 HEAP32[i29 >> 2] = i26;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i41, i27, i25);
 i25 = HEAP32[i29 >> 2] | 0;
 do {
  if ((i25 | 0) != 0) {
   i29 = i25 + 4 | 0;
   i26 = i29 | 0;
   i5 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i26 >> 2] = i5;
    break;
   }
   i5 = i29 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 63](i5);
  }
 } while (0);
 i25 = HEAP32[i28 >> 2] | 0;
 do {
  if ((i25 | 0) != 0) {
   i28 = i25 + 4 | 0;
   i5 = i28 | 0;
   i29 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i29 | 0) != 0) {
    HEAP32[i5 >> 2] = i29;
    break;
   }
   i29 = i28 - 4 | 0;
   if ((i29 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i29 >> 2] | 0) + 4 >> 2] & 63](i29);
  }
 } while (0);
 i25 = HEAP32[i27 >> 2] | 0;
 do {
  if ((i25 | 0) != 0) {
   i27 = i25 | 0;
   i29 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
   if ((i29 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i25);
    break;
   } else {
    HEAP32[i27 >> 2] = i29;
    break;
   }
  }
 } while (0);
 HEAP32[i24 >> 2] = H_BASE + 632;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i23, i24);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i22, i49);
 i49 = i21 | 0;
 i24 = i22 | 0;
 i22 = HEAP32[i24 >> 2] | 0;
 HEAP32[i24 >> 2] = 0;
 HEAP32[i49 >> 2] = i22;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i41, i23, i21);
 i21 = HEAP32[i49 >> 2] | 0;
 do {
  if ((i21 | 0) != 0) {
   i49 = i21 + 4 | 0;
   i22 = i49 | 0;
   i25 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
   if ((i25 | 0) != 0) {
    HEAP32[i22 >> 2] = i25;
    break;
   }
   i25 = i49 - 4 | 0;
   if ((i25 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i25 >> 2] | 0) + 4 >> 2] & 63](i25);
  }
 } while (0);
 i21 = HEAP32[i24 >> 2] | 0;
 do {
  if ((i21 | 0) != 0) {
   i24 = i21 + 4 | 0;
   i25 = i24 | 0;
   i49 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
   if ((i49 | 0) != 0) {
    HEAP32[i25 >> 2] = i49;
    break;
   }
   i49 = i24 - 4 | 0;
   if ((i49 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i49 >> 2] | 0) + 4 >> 2] & 63](i49);
  }
 } while (0);
 i21 = HEAP32[i23 >> 2] | 0;
 do {
  if ((i21 | 0) != 0) {
   i23 = i21 | 0;
   i49 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
   if ((i49 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i21);
    break;
   } else {
    HEAP32[i23 >> 2] = i49;
    break;
   }
  }
 } while (0);
 i21 = i68;
 do {
  if ((i68 | 0) != 0) {
   i49 = i68 + 4 | 0;
   i23 = HEAP32[i49 >> 2] | 0;
   HEAP32[i49 >> 2] = i23 + 1;
   i49 = i68 + 4 | 0;
   if ((i23 | 0) != 0) {
    HEAP32[i49 >> 2] = i23;
    break;
   }
   i23 = i49 - 4 | 0;
   if ((i23 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i23 >> 2] | 0) + 4 >> 2] & 63](i23);
  }
 } while (0);
 if (!((i6 | 0) == 0 | (i63 | 0) == 0 | (i62 | 0) == 0)) {
  __ZN9Inspector21InjectedScriptManager17injectedScriptForEPN3JSC9ExecStateE(i54, HEAP32[i2 + 20 >> 2] | 0, i62);
  i2 = HEAP32[i54 + 12 >> 2] | 0;
  do {
   if ((i2 | 0) != 0) {
    if ((HEAP32[i2 + 4 >> 2] | 0) == -6) {
     break;
    }
    i68 = HEAP32[(HEAP32[i62 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
    HEAP32[i56 >> 2] = __ZTVN10Deprecated11ScriptValueE + 8;
    if ((HEAP32[i68 + 20444 >> 2] | 0) != 0) {
     _WTFCrash();
    }
    i23 = i68 + 20440 | 0;
    i49 = HEAP32[i23 >> 2] | 0;
    if ((i49 | 0) == 0) {
     __ZN3JSC9HandleSet4growEv(i68 + 20360 | 0);
     i85 = HEAP32[i23 >> 2] | 0;
    } else {
     i85 = i49;
    }
    i49 = i85 + 12 | 0;
    HEAP32[i23 >> 2] = HEAP32[i49 >> 2];
    HEAP32[i85 + 4 >> 2] = -6;
    HEAP32[i85 >> 2] = 0;
    i23 = i85 + 8 | 0;
    HEAP32[i23 >> 2] = 0;
    HEAP32[i49 >> 2] = 0;
    i24 = i68 + 20420 | 0;
    i25 = HEAP32[i24 >> 2] | 0;
    HEAP32[i23 >> 2] = i68 + 20408;
    HEAP32[i49 >> 2] = i25;
    HEAP32[i24 >> 2] = i85;
    HEAP32[i25 + 8 >> 2] = i85;
    i25 = i85 | 0;
    HEAP32[i56 + 4 >> 2] = i25;
    i24 = i20 | 0;
    HEAP32[i24 >> 2] = i63;
    HEAP32[i24 + 4 >> 2] = -5;
    __ZN3JSC9HandleSet12writeBarrierEPNS_7JSValueERKS1_(HEAP32[(i85 & -4096) + 12 >> 2] | 0, i25, i20);
    i25 = HEAP32[i24 + 4 >> 2] | 0;
    i49 = i85 | 0;
    HEAP32[i49 >> 2] = HEAP32[i24 >> 2];
    HEAP32[i49 + 4 >> 2] = i25;
    __ZNK9Inspector14InjectedScript10wrapObjectERKN10Deprecated11ScriptValueERKN3WTF6StringEb(i55, i54, i56, i6, 0);
    HEAP32[i18 >> 2] = H_BASE + 440;
    __ZN3WTF6StringC1ENS_12ASCIILiteralE(i17, i18);
    i25 = i19 | 0;
    i49 = i55 | 0;
    i24 = HEAP32[i49 >> 2] | 0;
    HEAP32[i49 >> 2] = 0;
    HEAP32[i25 >> 2] = i24;
    __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i41, i17, i19);
    i24 = HEAP32[i25 >> 2] | 0;
    do {
     if ((i24 | 0) != 0) {
      i25 = i24 + 4 | 0;
      i68 = i25 | 0;
      i23 = (HEAP32[i68 >> 2] | 0) - 1 | 0;
      if ((i23 | 0) != 0) {
       HEAP32[i68 >> 2] = i23;
       break;
      }
      i23 = i25 - 4 | 0;
      if ((i23 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i23 >> 2] | 0) + 4 >> 2] & 63](i23);
     }
    } while (0);
    i24 = HEAP32[i17 >> 2] | 0;
    do {
     if ((i24 | 0) != 0) {
      i69 = i24 | 0;
      i65 = (HEAP32[i69 >> 2] | 0) - 2 | 0;
      if ((i65 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i24);
       break;
      } else {
       HEAP32[i69 >> 2] = i65;
       break;
      }
     }
    } while (0);
    i24 = HEAP32[i49 >> 2] | 0;
    do {
     if ((i24 | 0) != 0) {
      i65 = i24 + 4 | 0;
      i69 = i65 | 0;
      i23 = (HEAP32[i69 >> 2] | 0) - 1 | 0;
      if ((i23 | 0) != 0) {
       HEAP32[i69 >> 2] = i23;
       break;
      }
      i23 = i65 - 4 | 0;
      if ((i23 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i23 >> 2] | 0) + 4 >> 2] & 63](i23);
     }
    } while (0);
    __ZN10Deprecated11ScriptValueD1Ev(i56);
   }
  } while (0);
  __ZN9Inspector14InjectedScriptD1Ev(i54);
 }
 do {
  if ((HEAP32[i60 >> 2] | 0) != 0) {
   __ZN9Inspector15InspectorObject6createEv(i16);
   i54 = HEAP32[i16 >> 2] | 0;
   i56 = i54 | 0;
   HEAP32[i15 >> 2] = H_BASE + 648;
   __ZN3WTF6StringC1ENS_12ASCIILiteralE(i14, i15);
   __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i13, i50);
   i17 = i12 | 0;
   i19 = i13 | 0;
   i55 = HEAP32[i19 >> 2] | 0;
   HEAP32[i19 >> 2] = 0;
   HEAP32[i17 >> 2] = i55;
   __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i56, i14, i12);
   i55 = HEAP32[i17 >> 2] | 0;
   do {
    if ((i55 | 0) != 0) {
     i17 = i55 + 4 | 0;
     i18 = i17 | 0;
     i6 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
     if ((i6 | 0) != 0) {
      HEAP32[i18 >> 2] = i6;
      break;
     }
     i6 = i17 - 4 | 0;
     if ((i6 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 63](i6);
    }
   } while (0);
   i55 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i55 | 0) != 0) {
     i6 = i55 + 4 | 0;
     i17 = i6 | 0;
     i18 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
     if ((i18 | 0) != 0) {
      HEAP32[i17 >> 2] = i18;
      break;
     }
     i18 = i6 - 4 | 0;
     if ((i18 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 63](i18);
    }
   } while (0);
   i55 = HEAP32[i14 >> 2] | 0;
   do {
    if ((i55 | 0) != 0) {
     i19 = i55 | 0;
     i18 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
     if ((i18 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i55);
      break;
     } else {
      HEAP32[i19 >> 2] = i18;
      break;
     }
    }
   } while (0);
   HEAP32[i11 >> 2] = H_BASE + 688;
   __ZN3WTF6StringC1ENS_12ASCIILiteralE(i10, i11);
   __ZN9Inspector19InspectorBasicValue6createEd(i9, +(i64 | 0));
   i55 = i8 | 0;
   i18 = i9 | 0;
   i19 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = 0;
   HEAP32[i55 >> 2] = i19;
   __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i56, i10, i8);
   i19 = HEAP32[i55 >> 2] | 0;
   do {
    if ((i19 | 0) != 0) {
     i55 = i19 + 4 | 0;
     i6 = i55 | 0;
     i17 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
     if ((i17 | 0) != 0) {
      HEAP32[i6 >> 2] = i17;
      break;
     }
     i17 = i55 - 4 | 0;
     if ((i17 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 4 >> 2] & 63](i17);
    }
   } while (0);
   i19 = HEAP32[i18 >> 2] | 0;
   do {
    if ((i19 | 0) != 0) {
     i56 = i19 + 4 | 0;
     i17 = i56 | 0;
     i55 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
     if ((i55 | 0) != 0) {
      HEAP32[i17 >> 2] = i55;
      break;
     }
     i55 = i56 - 4 | 0;
     if ((i55 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i55 >> 2] | 0) + 4 >> 2] & 63](i55);
    }
   } while (0);
   i19 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i19 | 0) != 0) {
     i18 = i19 | 0;
     i55 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
     if ((i55 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i19);
      break;
     } else {
      HEAP32[i18 >> 2] = i55;
      break;
     }
    }
   } while (0);
   do {
    if ((i54 | 0) != 0) {
     i19 = i54 + 4 | 0;
     i55 = HEAP32[i19 >> 2] | 0;
     HEAP32[i19 >> 2] = i55 + 1;
     i19 = i54 + 4 | 0;
     if ((i55 | 0) != 0) {
      HEAP32[i19 >> 2] = i55;
      break;
     }
     i55 = i19 - 4 | 0;
     if ((i55 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i55 >> 2] | 0) + 4 >> 2] & 63](i55);
    }
   } while (0);
   HEAP32[i43 >> 2] = H_BASE + 448;
   __ZN3WTF6StringC1ENS_12ASCIILiteralE(i42, i43);
   i55 = i44 | 0;
   HEAP32[i55 >> 2] = i54;
   __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i41, i42, i44);
   i19 = HEAP32[i55 >> 2] | 0;
   do {
    if ((i19 | 0) != 0) {
     i55 = i19 + 4 | 0;
     i18 = i55 | 0;
     i56 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
     if ((i56 | 0) != 0) {
      HEAP32[i18 >> 2] = i56;
      break;
     }
     i56 = i55 - 4 | 0;
     if ((i56 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i56 >> 2] | 0) + 4 >> 2] & 63](i56);
    }
   } while (0);
   i19 = HEAP32[i42 >> 2] | 0;
   do {
    if ((i19 | 0) != 0) {
     i54 = i19 | 0;
     i56 = (HEAP32[i54 >> 2] | 0) - 2 | 0;
     if ((i56 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i19);
      break;
     } else {
      HEAP32[i54 >> 2] = i56;
      break;
     }
    }
   } while (0);
   i19 = HEAP32[i61 >> 2] | 0;
   if ((i19 | 0) == 0) {
    break;
   }
   if ((HEAP32[i19 + 4 >> 2] | 0) == 0) {
    break;
   }
   HEAP32[i48 >> 2] = H_BASE + 464;
   __ZN3WTF6StringC1ENS_12ASCIILiteralE(i47, i48);
   __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i46, i51);
   i19 = i45 | 0;
   i56 = i46 | 0;
   i54 = HEAP32[i56 >> 2] | 0;
   HEAP32[i56 >> 2] = 0;
   HEAP32[i19 >> 2] = i54;
   __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i41, i47, i45);
   i54 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i54 | 0) != 0) {
     i19 = i54 + 4 | 0;
     i55 = i19 | 0;
     i18 = (HEAP32[i55 >> 2] | 0) - 1 | 0;
     if ((i18 | 0) != 0) {
      HEAP32[i55 >> 2] = i18;
      break;
     }
     i18 = i19 - 4 | 0;
     if ((i18 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 63](i18);
    }
   } while (0);
   i54 = HEAP32[i56 >> 2] | 0;
   do {
    if ((i54 | 0) != 0) {
     i18 = i54 + 4 | 0;
     i19 = i18 | 0;
     i55 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
     if ((i55 | 0) != 0) {
      HEAP32[i19 >> 2] = i55;
      break;
     }
     i55 = i18 - 4 | 0;
     if ((i55 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i55 >> 2] | 0) + 4 >> 2] & 63](i55);
    }
   } while (0);
   i54 = HEAP32[i47 >> 2] | 0;
   if ((i54 | 0) == 0) {
    break;
   }
   i56 = i54 | 0;
   i55 = (HEAP32[i56 >> 2] | 0) - 2 | 0;
   if ((i55 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i54);
    break;
   } else {
    HEAP32[i56 >> 2] = i55;
    break;
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = i21;
 i21 = HEAP32[i61 >> 2] | 0;
 do {
  if ((i21 | 0) != 0) {
   i61 = i21 | 0;
   i1 = (HEAP32[i61 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i21);
    break;
   } else {
    HEAP32[i61 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i21 = HEAP32[i60 >> 2] | 0;
 do {
  if ((i21 | 0) != 0) {
   i60 = i21 | 0;
   i1 = (HEAP32[i60 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i21);
    break;
   } else {
    HEAP32[i60 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i21 = HEAP32[i59 >> 2] | 0;
 do {
  if ((i21 | 0) != 0) {
   i59 = i21 | 0;
   i1 = (HEAP32[i59 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i21);
    break;
   } else {
    HEAP32[i59 >> 2] = i1;
    break;
   }
  }
 } while (0);
 if (i58) {
  STACKTOP = i7;
  return;
 }
 i58 = i57 + 4 | 0;
 i57 = i58 | 0;
 i21 = (HEAP32[i57 >> 2] | 0) - 1 | 0;
 if ((i21 | 0) != 0) {
  HEAP32[i57 >> 2] = i21;
  STACKTOP = i7;
  return;
 }
 i21 = i58 - 4 | 0;
 if ((i21 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 63](i21);
 STACKTOP = i7;
 return;
}
function __ZN7WebCore17InspectorDOMAgent17getEventListenersEPNS_4NodeERN3WTF6VectorINS_17EventListenerInfoELj0ENS3_15CrashOnOverflowEEEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i5 = i1 | 0;
 i6 = i1 + 16 | 0;
 i7 = i1 + 40 | 0;
 i8 = __ZN3WTF18fastMallocGoodSizeEj(64) | 0;
 i9 = i8 >>> 2;
 i10 = __ZN3WTF10fastMallocEj(i8) | 0;
 HEAP32[i10 >> 2] = i2;
 do {
  if (i4) {
   do {
    if ((HEAP32[i2 + 12 >> 2] & 4096 | 0) == 0) {
     i11 = 5;
    } else {
     if ((HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 4 >> 2] | 0) != (i2 | 0)) {
      i11 = 5;
      break;
     }
     i12 = HEAP32[i2 + 92 >> 2] | 0;
    }
   } while (0);
   if ((i11 | 0) == 5) {
    i12 = HEAP32[i2 + 16 >> 2] | 0;
   }
   if ((i12 | 0) == 0) {
    i13 = 1;
    i14 = i10;
    i11 = 21;
    break;
   } else {
    i15 = 1;
    i16 = i9;
    i17 = i10;
    i18 = i12;
   }
   L9 : while (1) {
    if ((i15 | 0) == (i16 | 0)) {
     i8 = i16 + 1 | 0;
     i19 = i8 + (i16 >>> 2) | 0;
     i20 = i19 >>> 0 > 16 >>> 0 ? i19 : 16;
     i19 = i20 >>> 0 > i8 >>> 0 ? i20 : i8;
     do {
      if (i16 >>> 0 < i19 >>> 0) {
       if (i19 >>> 0 > 1073741823 >>> 0) {
        i11 = 11;
        break L9;
       }
       i20 = __ZN3WTF18fastMallocGoodSizeEj(i19 << 2) | 0;
       i21 = i20 >>> 2;
       i22 = __ZN3WTF10fastMallocEj(i20) | 0;
       i20 = i22;
       i23 = i17;
       _memcpy(i22 | 0, i23 | 0, i16 << 2) | 0;
       if ((i17 | 0) == 0) {
        i24 = i20;
        i25 = i21;
        break;
       }
       i22 = (i20 | 0) == (i17 | 0);
       __ZN3WTF8fastFreeEPv(i23);
       i24 = i22 ? 0 : i20;
       i25 = i22 ? 0 : i21;
      } else {
       i24 = i17;
       i25 = i16;
      }
     } while (0);
     HEAP32[i24 + (i16 << 2) >> 2] = i18;
     i26 = i24;
     i27 = i25;
     i28 = i8;
    } else {
     HEAP32[i17 + (i15 << 2) >> 2] = i18;
     i26 = i17;
     i27 = i16;
     i28 = i15 + 1 | 0;
    }
    i19 = i18 | 0;
    do {
     if ((HEAP32[i18 + 12 >> 2] & 4096 | 0) == 0) {
      i11 = 19;
     } else {
      if ((HEAP32[(HEAP32[i18 + 20 >> 2] | 0) + 4 >> 2] | 0) != (i18 | 0)) {
       i11 = 19;
       break;
      }
      i29 = HEAP32[i19 + 92 >> 2] | 0;
     }
    } while (0);
    if ((i11 | 0) == 19) {
     i11 = 0;
     i29 = HEAP32[i18 + 16 >> 2] | 0;
    }
    if ((i29 | 0) == 0) {
     i11 = 20;
     break;
    } else {
     i15 = i28;
     i16 = i27;
     i17 = i26;
     i18 = i29;
    }
   }
   if ((i11 | 0) == 20) {
    if ((i28 | 0) == 0) {
     i30 = i26;
     break;
    } else {
     i13 = i28;
     i14 = i26;
     i11 = 21;
     break;
    }
   } else if ((i11 | 0) == 11) {
    _WTFCrash();
   }
  } else {
   i13 = 1;
   i14 = i10;
   i11 = 21;
  }
 } while (0);
 L29 : do {
  if ((i11 | 0) == 21) {
   i10 = i5 + 8 | 0;
   i26 = i5 | 0;
   i28 = i5 + 4 | 0;
   i29 = i6 + 12 | 0;
   i18 = i6 | 0;
   i17 = i6 + 4 | 0;
   i27 = i6 + 8 | 0;
   i16 = i7 | 0;
   i15 = i7 + 4 | 0;
   i25 = i7 + 20 | 0;
   i24 = i7 + 8 | 0;
   i12 = i7 + 12 | 0;
   i9 = i7 + 16 | 0;
   i2 = i3 + 8 | 0;
   i4 = i3 + 4 | 0;
   i19 = i3 | 0;
   i8 = i13;
   L31 : while (1) {
    i21 = i8 - 1 | 0;
    if (i13 >>> 0 <= i21 >>> 0) {
     i11 = 23;
     break;
    }
    i22 = HEAP32[i14 + (i21 << 2) >> 2] | 0;
    i20 = __ZN7WebCore4Node15eventTargetDataEv(i22) | 0;
    do {
     if ((i20 | 0) != 0) {
      __ZNK7WebCore16EventListenerMap10eventTypesEv(i5, i20 | 0);
      do {
       if ((HEAP32[i10 >> 2] | 0) != 0) {
        i23 = i22 | 0;
        i31 = 0;
        while (1) {
         i32 = (HEAP32[i26 >> 2] | 0) + (i31 << 2) | 0;
         i33 = __ZN7WebCore11EventTarget17getEventListenersERKN3WTF12AtomicStringE(i23, i32) | 0;
         HEAP32[i18 >> 2] = i29;
         HEAP32[i17 >> 2] = 1;
         HEAP32[i27 >> 2] = 0;
         i34 = i33 + 8 | 0;
         __ZN3WTF6VectorIN7WebCore23RegisteredEventListenerELj1ENS_15CrashOnOverflowEE15reserveCapacityEj(i6, HEAP32[i34 >> 2] | 0);
         if ((HEAP32[i34 >> 2] | 0) != 0) {
          i35 = i33 | 0;
          i33 = 0;
          while (1) {
           i36 = HEAP32[i35 >> 2] | 0;
           i37 = i36 + (i33 << 3) | 0;
           i38 = HEAP32[i37 >> 2] | 0;
           do {
            if ((HEAP32[i38 + 8 >> 2] | 0) == 0) {
             i39 = HEAP32[i27 >> 2] | 0;
             if ((i39 | 0) != (HEAP32[i17 >> 2] | 0)) {
              i40 = HEAP32[i18 >> 2] | 0;
              HEAP32[i40 + (i39 << 3) >> 2] = i38;
              if ((i38 | 0) != 0) {
               i41 = i38 + 4 | 0;
               HEAP32[i41 >> 2] = (HEAP32[i41 >> 2] | 0) + 1;
              }
              HEAP8[i40 + (i39 << 3) + 4 | 0] = HEAP8[i36 + (i33 << 3) + 4 | 0] & 1;
              HEAP32[i27 >> 2] = (HEAP32[i27 >> 2] | 0) + 1;
              break;
             }
             i40 = i39 + 1 | 0;
             i41 = HEAP32[i18 >> 2] | 0;
             do {
              if (i41 >>> 0 > i37 >>> 0) {
               i11 = 36;
              } else {
               if ((i41 + (i39 << 3) | 0) >>> 0 <= i37 >>> 0) {
                i11 = 36;
                break;
               }
               i42 = i40 + (i39 >>> 2) | 0;
               i43 = i42 >>> 0 > 16 >>> 0 ? i42 : 16;
               __ZN3WTF6VectorIN7WebCore23RegisteredEventListenerELj1ENS_15CrashOnOverflowEE15reserveCapacityEj(i6, i43 >>> 0 > i40 >>> 0 ? i43 : i40);
               i43 = HEAP32[i18 >> 2] | 0;
               i44 = i43 + (i37 - i41 >> 3 << 3) | 0;
               i45 = i43;
              }
             } while (0);
             if ((i11 | 0) == 36) {
              i11 = 0;
              i41 = i40 + (i39 >>> 2) | 0;
              i43 = i41 >>> 0 > 16 >>> 0 ? i41 : 16;
              __ZN3WTF6VectorIN7WebCore23RegisteredEventListenerELj1ENS_15CrashOnOverflowEE15reserveCapacityEj(i6, i43 >>> 0 > i40 >>> 0 ? i43 : i40);
              i44 = i37;
              i45 = HEAP32[i18 >> 2] | 0;
             }
             i43 = HEAP32[i27 >> 2] | 0;
             i41 = HEAP32[i44 >> 2] | 0;
             HEAP32[i45 + (i43 << 3) >> 2] = i41;
             if ((i41 | 0) != 0) {
              i42 = i41 + 4 | 0;
              HEAP32[i42 >> 2] = (HEAP32[i42 >> 2] | 0) + 1;
             }
             HEAP8[i45 + (i43 << 3) + 4 | 0] = HEAP8[i44 + 4 | 0] & 1;
             HEAP32[i27 >> 2] = (HEAP32[i27 >> 2] | 0) + 1;
            }
           } while (0);
           i33 = i33 + 1 | 0;
           if (i33 >>> 0 >= (HEAP32[i34 >> 2] | 0) >>> 0) {
            break;
           }
          }
         }
         i34 = HEAP32[i27 >> 2] | 0;
         do {
          if ((i34 | 0) != 0) {
           HEAP32[i16 >> 2] = i22;
           i33 = HEAP32[i32 >> 2] | 0;
           HEAP32[i15 >> 2] = i33;
           if ((i33 | 0) == 0) {
            i46 = i34;
           } else {
            i35 = i33 | 0;
            HEAP32[i35 >> 2] = (HEAP32[i35 >> 2] | 0) + 2;
            i46 = HEAP32[i27 >> 2] | 0;
           }
           i35 = HEAP32[i17 >> 2] | 0;
           HEAP32[i24 >> 2] = i25;
           HEAP32[i12 >> 2] = 1;
           HEAP32[i9 >> 2] = i46;
           do {
            if (i35 >>> 0 > 1 >>> 0) {
             if (i35 >>> 0 > 536870911 >>> 0) {
              i11 = 47;
              break L31;
             }
             i33 = __ZN3WTF18fastMallocGoodSizeEj(i35 << 3) | 0;
             HEAP32[i12 >> 2] = i33 >>> 3;
             i37 = __ZN3WTF10fastMallocEj(i33) | 0;
             i33 = i37;
             HEAP32[i24 >> 2] = i33;
             if ((i37 | 0) == 0) {
              break;
             }
             i47 = i33;
             i48 = HEAP32[i27 >> 2] | 0;
             i11 = 50;
            } else {
             i47 = i25;
             i48 = i46;
             i11 = 50;
            }
           } while (0);
           do {
            if ((i11 | 0) == 50) {
             i11 = 0;
             i35 = HEAP32[i18 >> 2] | 0;
             i33 = i35 + (i48 << 3) | 0;
             if ((i48 | 0) == 0) {
              break;
             } else {
              i49 = i35;
              i50 = i47;
             }
             while (1) {
              i35 = HEAP32[i49 >> 2] | 0;
              HEAP32[i50 >> 2] = i35;
              if ((i35 | 0) != 0) {
               i37 = i35 + 4 | 0;
               HEAP32[i37 >> 2] = (HEAP32[i37 >> 2] | 0) + 1;
              }
              HEAP8[i50 + 4 | 0] = HEAP8[i49 + 4 | 0] & 1;
              i37 = i49 + 8 | 0;
              if ((i37 | 0) == (i33 | 0)) {
               break;
              } else {
               i49 = i37;
               i50 = i50 + 8 | 0;
              }
             }
            }
           } while (0);
           i33 = HEAP32[i2 >> 2] | 0;
           if ((i33 | 0) == (HEAP32[i4 >> 2] | 0)) {
            __ZN3WTF6VectorIN7WebCore17EventListenerInfoELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_(i3, i7);
           } else {
            i40 = HEAP32[i19 >> 2] | 0;
            HEAP32[i40 + (i33 * 28 & -1) >> 2] = HEAP32[i16 >> 2];
            i39 = HEAP32[i15 >> 2] | 0;
            HEAP32[i40 + (i33 * 28 & -1) + 4 >> 2] = i39;
            if ((i39 | 0) != 0) {
             i37 = i39 | 0;
             HEAP32[i37 >> 2] = (HEAP32[i37 >> 2] | 0) + 2;
            }
            i37 = HEAP32[i12 >> 2] | 0;
            i39 = HEAP32[i9 >> 2] | 0;
            i35 = i40 + (i33 * 28 & -1) + 20 | 0;
            i36 = i40 + (i33 * 28 & -1) + 8 | 0;
            HEAP32[i36 >> 2] = i35;
            i38 = i40 + (i33 * 28 & -1) + 12 | 0;
            HEAP32[i38 >> 2] = 1;
            HEAP32[i40 + (i33 * 28 & -1) + 16 >> 2] = i39;
            if (i37 >>> 0 > 1 >>> 0) {
             if (i37 >>> 0 > 536870911 >>> 0) {
              i11 = 59;
              break L31;
             }
             i39 = __ZN3WTF18fastMallocGoodSizeEj(i37 << 3) | 0;
             HEAP32[i38 >> 2] = i39 >>> 3;
             i38 = __ZN3WTF10fastMallocEj(i39) | 0;
             HEAP32[i36 >> 2] = i38;
             i51 = i38;
            } else {
             i51 = i35;
            }
            do {
             if ((i51 | 0) != 0) {
              i35 = HEAP32[i24 >> 2] | 0;
              i38 = HEAP32[i9 >> 2] | 0;
              i36 = i35 + (i38 << 3) | 0;
              if ((i38 | 0) == 0) {
               break;
              } else {
               i52 = i35;
               i53 = i51;
              }
              while (1) {
               i35 = HEAP32[i52 >> 2] | 0;
               HEAP32[i53 >> 2] = i35;
               if ((i35 | 0) != 0) {
                i38 = i35 + 4 | 0;
                HEAP32[i38 >> 2] = (HEAP32[i38 >> 2] | 0) + 1;
               }
               HEAP8[i53 + 4 | 0] = HEAP8[i52 + 4 | 0] & 1;
               i38 = i52 + 8 | 0;
               if ((i38 | 0) == (i36 | 0)) {
                break;
               } else {
                i52 = i38;
                i53 = i53 + 8 | 0;
               }
              }
             }
            } while (0);
            HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
           }
           i36 = HEAP32[i9 >> 2] | 0;
           if ((i36 | 0) != 0) {
            i38 = HEAP32[i24 >> 2] | 0;
            i35 = i38 + (i36 << 3) | 0;
            i36 = i38;
            while (1) {
             i38 = HEAP32[i36 >> 2] | 0;
             do {
              if ((i38 | 0) != 0) {
               i39 = i38 + 4 | 0;
               i37 = i39 | 0;
               i33 = (HEAP32[i37 >> 2] | 0) - 1 | 0;
               if ((i33 | 0) != 0) {
                HEAP32[i37 >> 2] = i33;
                break;
               }
               i33 = i39 - 4 | 0;
               if ((i33 | 0) == 0) {
                break;
               }
               FUNCTION_TABLE_vi[HEAP32[(HEAP32[i33 >> 2] | 0) + 4 >> 2] & 63](i33);
              }
             } while (0);
             i36 = i36 + 8 | 0;
             if ((i36 | 0) == (i35 | 0)) {
              break;
             }
            }
            HEAP32[i9 >> 2] = 0;
           }
           i35 = HEAP32[i24 >> 2] | 0;
           if (!((i25 | 0) == (i35 | 0) | (i35 | 0) == 0)) {
            HEAP32[i24 >> 2] = 0;
            HEAP32[i12 >> 2] = 0;
            __ZN3WTF8fastFreeEPv(i35);
           }
           i35 = HEAP32[i15 >> 2] | 0;
           do {
            if ((i35 | 0) != 0) {
             i36 = i35 | 0;
             i38 = (HEAP32[i36 >> 2] | 0) - 2 | 0;
             if ((i38 | 0) == 0) {
              __ZN3WTF10StringImpl7destroyEPS0_(i35);
              break;
             } else {
              HEAP32[i36 >> 2] = i38;
              break;
             }
            }
           } while (0);
           i35 = HEAP32[i27 >> 2] | 0;
           if ((i35 | 0) == 0) {
            break;
           }
           i38 = HEAP32[i18 >> 2] | 0;
           i36 = i38 + (i35 << 3) | 0;
           i35 = i38;
           while (1) {
            i38 = HEAP32[i35 >> 2] | 0;
            do {
             if ((i38 | 0) != 0) {
              i33 = i38 + 4 | 0;
              i39 = i33 | 0;
              i37 = (HEAP32[i39 >> 2] | 0) - 1 | 0;
              if ((i37 | 0) != 0) {
               HEAP32[i39 >> 2] = i37;
               break;
              }
              i37 = i33 - 4 | 0;
              if ((i37 | 0) == 0) {
               break;
              }
              FUNCTION_TABLE_vi[HEAP32[(HEAP32[i37 >> 2] | 0) + 4 >> 2] & 63](i37);
             }
            } while (0);
            i35 = i35 + 8 | 0;
            if ((i35 | 0) == (i36 | 0)) {
             break;
            }
           }
           HEAP32[i27 >> 2] = 0;
          }
         } while (0);
         i34 = HEAP32[i18 >> 2] | 0;
         if (!((i29 | 0) == (i34 | 0) | (i34 | 0) == 0)) {
          HEAP32[i18 >> 2] = 0;
          HEAP32[i17 >> 2] = 0;
          __ZN3WTF8fastFreeEPv(i34);
         }
         i31 = i31 + 1 | 0;
         i54 = HEAP32[i10 >> 2] | 0;
         if (i31 >>> 0 >= i54 >>> 0) {
          break;
         }
        }
        if ((i54 | 0) == 0) {
         break;
        }
        i31 = HEAP32[i26 >> 2] | 0;
        i23 = i31 + (i54 << 2) | 0;
        i34 = i31;
        while (1) {
         i31 = HEAP32[i34 >> 2] | 0;
         do {
          if ((i31 | 0) != 0) {
           i32 = i31 | 0;
           i36 = (HEAP32[i32 >> 2] | 0) - 2 | 0;
           if ((i36 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i31);
            break;
           } else {
            HEAP32[i32 >> 2] = i36;
            break;
           }
          }
         } while (0);
         i34 = i34 + 4 | 0;
         if ((i34 | 0) == (i23 | 0)) {
          break;
         }
        }
        HEAP32[i10 >> 2] = 0;
       }
      } while (0);
      i23 = HEAP32[i26 >> 2] | 0;
      if ((i23 | 0) == 0) {
       break;
      }
      HEAP32[i26 >> 2] = 0;
      HEAP32[i28 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i23);
     }
    } while (0);
    if ((i21 | 0) == 0) {
     i30 = i14;
     break L29;
    } else {
     i8 = i21;
    }
   }
   if ((i11 | 0) == 47) {
    _WTFCrash();
   } else if ((i11 | 0) == 23) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i11 | 0) == 59) {
    _WTFCrash();
   }
  }
 } while (0);
 if ((i30 | 0) == 0) {
  STACKTOP = i1;
  return;
 }
 __ZN3WTF8fastFreeEPv(i30);
 STACKTOP = i1;
 return;
}
function __ZN7WebCore17InspectorDOMAgent22pushNodePathToFrontendEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = HEAP32[i1 + 180 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i8 = 0;
  STACKTOP = i3;
  return i8 | 0;
 }
 i9 = i1 + 40 | 0;
 i10 = i7 | 0;
 i11 = i7 + 8 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = i12 + 1;
 i11 = i9 | 0;
 i13 = HEAP32[i11 >> 2] | 0;
 if ((i13 | 0) == 0) {
  i14 = 0;
 } else {
  i15 = HEAP32[i1 + 48 >> 2] | 0;
  i16 = i7;
  i17 = i16 + ~(i16 << 15) | 0;
  i16 = (i17 >>> 10 ^ i17) * 9 & -1;
  i17 = i16 >>> 6 ^ i16;
  i16 = i17 + ~(i17 << 11) | 0;
  i17 = i16 >>> 16 ^ i16;
  i16 = i15 & i17;
  i18 = i13 + (i16 << 3) | 0;
  i19 = HEAP32[i18 >> 2] | 0;
  L6 : do {
   if ((i19 | 0) == (i10 | 0)) {
    i20 = i18;
   } else {
    i21 = (i17 >>> 23) + ~i17 | 0;
    i22 = i21 << 12 ^ i21;
    i21 = i22 >>> 7 ^ i22;
    i22 = i21 << 2 ^ i21;
    i21 = i22 >>> 20 ^ i22 | 1;
    i22 = 0;
    i23 = i16;
    i24 = i19;
    while (1) {
     if ((i24 | 0) == 0) {
      i20 = 0;
      break L6;
     }
     i25 = (i22 | 0) == 0 ? i21 : i22;
     i26 = i25 + i23 & i15;
     i27 = i13 + (i26 << 3) | 0;
     i28 = HEAP32[i27 >> 2] | 0;
     if ((i28 | 0) == (i10 | 0)) {
      i20 = i27;
      break;
     } else {
      i22 = i25;
      i23 = i26;
      i24 = i28;
     }
    }
   }
  } while (0);
  i14 = (i20 | 0) != 0;
 }
 i20 = i7 + 8 | 0;
 i7 = i20 - 8 | 0;
 HEAP32[i20 >> 2] = i12;
 do {
  if ((i12 | 0) < 1) {
   if ((HEAP32[i20 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i7);
  }
 } while (0);
 if (!i14) {
  i8 = 0;
  STACKTOP = i3;
  return i8 | 0;
 }
 i14 = i1 + 48 | 0;
 i7 = HEAP32[i14 >> 2] | 0;
 i20 = HEAP32[i11 >> 2] | 0;
 i12 = i2;
 i10 = i12 + ~(i12 << 15) | 0;
 i12 = (i10 >>> 10 ^ i10) * 9 & -1;
 i10 = i12 >>> 6 ^ i12;
 i12 = i10 + ~(i10 << 11) | 0;
 i10 = i12 >>> 16 ^ i12;
 L20 : do {
  if ((i20 | 0) != 0) {
   i12 = i7 & i10;
   i13 = i20 + (i12 << 3) | 0;
   i15 = HEAP32[i13 >> 2] | 0;
   if ((i15 | 0) == (i2 | 0)) {
    i29 = i13;
   } else {
    i13 = (i10 >>> 23) + ~i10 | 0;
    i19 = i13 << 12 ^ i13;
    i13 = i19 >>> 7 ^ i19;
    i19 = i13 << 2 ^ i13;
    i13 = i19 >>> 20 ^ i19 | 1;
    i19 = 0;
    i16 = i12;
    i12 = i15;
    while (1) {
     if ((i12 | 0) == 0) {
      break L20;
     }
     i15 = (i19 | 0) == 0 ? i13 : i19;
     i17 = i15 + i16 & i7;
     i18 = i20 + (i17 << 3) | 0;
     i24 = HEAP32[i18 >> 2] | 0;
     if ((i24 | 0) == (i2 | 0)) {
      i29 = i18;
      break;
     } else {
      i19 = i15;
      i16 = i17;
      i12 = i24;
     }
    }
   }
   if ((i29 | 0) == 0) {
    break;
   }
   i12 = HEAP32[i29 + 4 >> 2] | 0;
   if ((i12 | 0) == 0) {
    break;
   } else {
    i8 = i12;
   }
   STACKTOP = i3;
   return i8 | 0;
  }
 } while (0);
 i29 = i4;
 i20 = i2;
 i7 = 0;
 i12 = 0;
 i16 = 0;
 L31 : while (1) {
  if ((HEAP32[(HEAP32[i20 + 20 >> 2] | 0) + 8 >> 2] | 0) == (i20 | 0)) {
   i30 = __ZNK7WebCore8Document12ownerElementEv(i20) | 0;
  } else {
   i30 = HEAP32[i20 + 16 >> 2] | 0;
  }
  HEAP32[i4 >> 2] = i30;
  if ((i30 | 0) == 0) {
   i31 = 24;
   break;
  }
  if ((i16 | 0) == (i12 | 0)) {
   i19 = i16 + 1 | 0;
   do {
    if (i7 >>> 0 > i4 >>> 0) {
     i31 = 45;
    } else {
     if ((i7 + (i16 << 2) | 0) >>> 0 <= i4 >>> 0) {
      i31 = 45;
      break;
     }
     i13 = i29 - i7 >> 2;
     i24 = i19 + (i16 >>> 2) | 0;
     i17 = i24 >>> 0 > 16 >>> 0 ? i24 : 16;
     i24 = i17 >>> 0 > i19 >>> 0 ? i17 : i19;
     do {
      if (i16 >>> 0 < i24 >>> 0) {
       if (i24 >>> 0 > 1073741823 >>> 0) {
        i31 = 52;
        break L31;
       }
       i17 = __ZN3WTF18fastMallocGoodSizeEj(i24 << 2) | 0;
       i15 = i17 >>> 2;
       i18 = __ZN3WTF10fastMallocEj(i17) | 0;
       i17 = i18;
       i23 = i7;
       _memcpy(i18 | 0, i23 | 0, i16 << 2) | 0;
       if ((i7 | 0) == 0) {
        i32 = i17;
        i33 = i15;
        break;
       }
       i18 = (i17 | 0) == (i7 | 0);
       __ZN3WTF8fastFreeEPv(i23);
       i32 = i18 ? 0 : i17;
       i33 = i18 ? 0 : i15;
      } else {
       i32 = i7;
       i33 = i16;
      }
     } while (0);
     i34 = i32 + (i13 << 2) | 0;
     i35 = i32;
     i36 = i33;
    }
   } while (0);
   do {
    if ((i31 | 0) == 45) {
     i31 = 0;
     i24 = i19 + (i16 >>> 2) | 0;
     i15 = i24 >>> 0 > 16 >>> 0 ? i24 : 16;
     i24 = i15 >>> 0 > i19 >>> 0 ? i15 : i19;
     if (i16 >>> 0 >= i24 >>> 0) {
      i34 = i4;
      i35 = i7;
      i36 = i16;
      break;
     }
     if (i24 >>> 0 > 1073741823 >>> 0) {
      i31 = 47;
      break L31;
     }
     i15 = __ZN3WTF18fastMallocGoodSizeEj(i24 << 2) | 0;
     i24 = i15 >>> 2;
     i18 = __ZN3WTF10fastMallocEj(i15) | 0;
     i15 = i18;
     i17 = i7;
     _memcpy(i18 | 0, i17 | 0, i16 << 2) | 0;
     if ((i7 | 0) == 0) {
      i34 = i4;
      i35 = i15;
      i36 = i24;
      break;
     }
     i18 = (i15 | 0) == (i7 | 0);
     __ZN3WTF8fastFreeEPv(i17);
     i34 = i4;
     i35 = i18 ? 0 : i15;
     i36 = i18 ? 0 : i24;
    }
   } while (0);
   HEAP32[i35 + (i16 << 2) >> 2] = HEAP32[i34 >> 2];
   i37 = i35;
   i38 = i36;
   i39 = i19;
  } else {
   HEAP32[i7 + (i16 << 2) >> 2] = i30;
   i37 = i7;
   i38 = i12;
   i39 = i16 + 1 | 0;
  }
  i24 = HEAP32[i4 >> 2] | 0;
  i18 = HEAP32[i14 >> 2] | 0;
  i15 = HEAP32[i11 >> 2] | 0;
  i17 = i24;
  i23 = i17 + ~(i17 << 15) | 0;
  i17 = (i23 >>> 10 ^ i23) * 9 & -1;
  i23 = i17 >>> 6 ^ i17;
  i17 = i23 + ~(i23 << 11) | 0;
  i23 = i17 >>> 16 ^ i17;
  if ((i15 | 0) == 0) {
   i20 = i24;
   i7 = i37;
   i12 = i38;
   i16 = i39;
   continue;
  }
  i17 = i23 & i18;
  i22 = i15 + (i17 << 3) | 0;
  i21 = HEAP32[i22 >> 2] | 0;
  if ((i21 | 0) == (i24 | 0)) {
   i40 = i22;
  } else {
   i22 = (i23 >>> 23) + ~i23 | 0;
   i23 = i22 << 12 ^ i22;
   i22 = i23 >>> 7 ^ i23;
   i23 = i22 << 2 ^ i22;
   i22 = i23 >>> 20 ^ i23 | 1;
   i23 = 0;
   i28 = i17;
   i17 = i21;
   while (1) {
    if ((i17 | 0) == 0) {
     i20 = i24;
     i7 = i37;
     i12 = i38;
     i16 = i39;
     continue L31;
    }
    i21 = (i23 | 0) == 0 ? i22 : i23;
    i26 = i21 + i28 & i18;
    i25 = i15 + (i26 << 3) | 0;
    i27 = HEAP32[i25 >> 2] | 0;
    if ((i27 | 0) == (i24 | 0)) {
     i40 = i25;
     break;
    } else {
     i23 = i21;
     i28 = i26;
     i17 = i27;
    }
   }
  }
  if ((i40 | 0) == 0) {
   i20 = i24;
   i7 = i37;
   i12 = i38;
   i16 = i39;
   continue;
  }
  if ((HEAP32[i40 + 4 >> 2] | 0) == 0) {
   i20 = i24;
   i7 = i37;
   i12 = i38;
   i16 = i39;
  } else {
   i41 = 0;
   i42 = i37;
   i43 = i39;
   break;
  }
 }
 do {
  if ((i31 | 0) == 24) {
   i39 = __ZN3WTF10fastMallocEj(20) | 0;
   i37 = i39;
   _memset(i39 | 0, 0, 20) | 0;
   i39 = i1 + 80 | 0;
   i38 = i1 + 88 | 0;
   i12 = HEAP32[i38 >> 2] | 0;
   if ((i12 | 0) == (HEAP32[i1 + 84 >> 2] | 0)) {
    __ZN3WTF6VectorINS_6OwnPtrINS_7HashMapINS_6RefPtrIN7WebCore4NodeEEEiNS_7PtrHashIS6_EENS_10HashTraitsIS6_EENS9_IiEEEEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i39, i12 + 1 | 0);
    HEAP32[(HEAP32[i39 >> 2] | 0) + (HEAP32[i38 >> 2] << 2) >> 2] = i37;
   } else {
    HEAP32[(HEAP32[i39 >> 2] | 0) + (i12 << 2) >> 2] = i37;
   }
   HEAP32[i38 >> 2] = (HEAP32[i38 >> 2] | 0) + 1;
   i38 = __ZN3WTF10fastMallocEj(24) | 0;
   __ZN9Inspector18InspectorArrayBaseC2Ev(i38);
   HEAP32[i38 >> 2] = H_BASE + 1800;
   __ZN7WebCore17InspectorDOMAgent18buildObjectForNodeEPNS_4NodeEiPN3WTF7HashMapINS3_6RefPtrIS1_EEiNS3_7PtrHashIS6_EENS3_10HashTraitsIS6_EENS9_IiEEEE(i5, i1, i20, 0, i37);
   i12 = i5 | 0;
   i39 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   i12 = i39 | 0;
   i39 = i38 + 12 | 0;
   i40 = i38 + 20 | 0;
   i11 = HEAP32[i40 >> 2] | 0;
   if ((i11 | 0) == (HEAP32[i38 + 16 >> 2] | 0)) {
    __ZN3WTF6VectorINS_6RefPtrIN9Inspector14InspectorValueEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i39, i11 + 1 | 0);
    HEAP32[(HEAP32[i39 >> 2] | 0) + (HEAP32[i40 >> 2] << 2) >> 2] = i12;
   } else {
    HEAP32[(HEAP32[i39 >> 2] | 0) + (i11 << 2) >> 2] = i12;
   }
   HEAP32[i40 >> 2] = (HEAP32[i40 >> 2] | 0) + 1;
   i40 = HEAP32[i1 + 28 >> 2] | 0;
   i12 = i6 | 0;
   HEAP32[i12 >> 2] = i38;
   i11 = (i38 | 0) == 0;
   if (!i11) {
    i39 = i38 + 4 | 0;
    HEAP32[i39 >> 2] = (HEAP32[i39 >> 2] | 0) + 1;
   }
   __ZN9Inspector30InspectorDOMFrontendDispatcher13setChildNodesEiN3WTF10PassRefPtrINS_11TypeBuilder5ArrayINS3_3DOM4NodeEEEEE(i40, 0, i6);
   i40 = HEAP32[i12 >> 2] | 0;
   do {
    if ((i40 | 0) != 0) {
     i12 = i40 + 4 | 0;
     i39 = i12 | 0;
     i14 = (HEAP32[i39 >> 2] | 0) - 1 | 0;
     if ((i14 | 0) != 0) {
      HEAP32[i39 >> 2] = i14;
      break;
     }
     i14 = i12 - 4 | 0;
     if ((i14 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 63](i14);
    }
   } while (0);
   if (i11) {
    i41 = i37;
    i42 = i7;
    i43 = i16;
    break;
   }
   i40 = i38 + 4 | 0;
   i24 = (HEAP32[i40 >> 2] | 0) - 1 | 0;
   if ((i24 | 0) == 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i38 >> 2] | 0) + 4 >> 2] & 63](i38);
    i41 = i37;
    i42 = i7;
    i43 = i16;
    break;
   } else {
    HEAP32[i40 >> 2] = i24;
    i41 = i37;
    i42 = i7;
    i43 = i16;
    break;
   }
  } else if ((i31 | 0) == 47) {
   _WTFCrash();
   return 0;
  } else if ((i31 | 0) == 52) {
   _WTFCrash();
   return 0;
  }
 } while (0);
 i31 = (i41 | 0) != 0 ? i41 : i9;
 i9 = i43 - 1 | 0;
 i41 = i31 + 8 | 0;
 i16 = i31 | 0;
 L91 : do {
  if ((i9 | 0) > -1) {
   i31 = i9;
   while (1) {
    if (i43 >>> 0 <= i31 >>> 0) {
     break;
    }
    i7 = HEAP32[i42 + (i31 << 2) >> 2] | 0;
    i6 = HEAP32[i41 >> 2] | 0;
    i5 = HEAP32[i16 >> 2] | 0;
    i20 = i7;
    i24 = i20 + ~(i20 << 15) | 0;
    i20 = (i24 >>> 10 ^ i24) * 9 & -1;
    i24 = i20 >>> 6 ^ i20;
    i20 = i24 + ~(i24 << 11) | 0;
    i24 = i20 >>> 16 ^ i20;
    L95 : do {
     if ((i5 | 0) == 0) {
      i44 = 0;
     } else {
      i20 = i24 & i6;
      i40 = i5 + (i20 << 3) | 0;
      i14 = HEAP32[i40 >> 2] | 0;
      if ((i14 | 0) == (i7 | 0)) {
       i45 = i40;
      } else {
       i40 = (i24 >>> 23) + ~i24 | 0;
       i12 = i40 << 12 ^ i40;
       i40 = i12 >>> 7 ^ i12;
       i12 = i40 << 2 ^ i40;
       i40 = i12 >>> 20 ^ i12 | 1;
       i12 = 0;
       i39 = i20;
       i20 = i14;
       while (1) {
        if ((i20 | 0) == 0) {
         i44 = 0;
         break L95;
        }
        i14 = (i12 | 0) == 0 ? i40 : i12;
        i4 = i14 + i39 & i6;
        i30 = i5 + (i4 << 3) | 0;
        i36 = HEAP32[i30 >> 2] | 0;
        if ((i36 | 0) == (i7 | 0)) {
         i45 = i30;
         break;
        } else {
         i12 = i14;
         i39 = i4;
         i20 = i36;
        }
       }
      }
      if ((i45 | 0) == 0) {
       i44 = 0;
       break;
      }
      i44 = HEAP32[i45 + 4 >> 2] | 0;
     }
    } while (0);
    __ZN7WebCore17InspectorDOMAgent24pushChildNodesToFrontendEii(i1, i44, 1);
    i31 = i31 - 1 | 0;
    if ((i31 | 0) <= -1) {
     break L91;
    }
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
   return 0;
  }
 } while (0);
 i44 = HEAP32[i41 >> 2] | 0;
 i41 = HEAP32[i16 >> 2] | 0;
 L107 : do {
  if ((i41 | 0) == 0) {
   i46 = 0;
  } else {
   i16 = i44 & i10;
   i1 = i41 + (i16 << 3) | 0;
   i45 = HEAP32[i1 >> 2] | 0;
   if ((i45 | 0) == (i2 | 0)) {
    i47 = i1;
   } else {
    i1 = (i10 >>> 23) + ~i10 | 0;
    i43 = i1 << 12 ^ i1;
    i1 = i43 >>> 7 ^ i43;
    i43 = i1 << 2 ^ i1;
    i1 = i43 >>> 20 ^ i43 | 1;
    i43 = 0;
    i9 = i16;
    i16 = i45;
    while (1) {
     if ((i16 | 0) == 0) {
      i46 = 0;
      break L107;
     }
     i45 = (i43 | 0) == 0 ? i1 : i43;
     i31 = i45 + i9 & i44;
     i37 = i41 + (i31 << 3) | 0;
     i38 = HEAP32[i37 >> 2] | 0;
     if ((i38 | 0) == (i2 | 0)) {
      i47 = i37;
      break;
     } else {
      i43 = i45;
      i9 = i31;
      i16 = i38;
     }
    }
   }
   if ((i47 | 0) == 0) {
    i46 = 0;
    break;
   }
   i46 = HEAP32[i47 + 4 >> 2] | 0;
  }
 } while (0);
 if ((i42 | 0) == 0) {
  i8 = i46;
  STACKTOP = i3;
  return i8 | 0;
 }
 __ZN3WTF8fastFreeEPv(i42);
 i8 = i46;
 STACKTOP = i3;
 return i8 | 0;
}
function __ZN7WebCore17InspectorDOMAgent19setAttributesAsTextEPN3WTF6StringEiRKS2_PS4_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 104 | 0;
 i7 = i6 | 0;
 i8 = i6 + 24 | 0;
 i9 = i6 + 32 | 0;
 i10 = i6 + 40 | 0;
 i11 = i6 + 48 | 0;
 i12 = i6 + 56 | 0;
 i13 = i6 + 64 | 0;
 i14 = i6 + 72 | 0;
 i15 = i6 + 80 | 0;
 i16 = i6 + 88 | 0;
 i17 = i6 + 96 | 0;
 i18 = __ZN7WebCore17InspectorDOMAgent21assertEditableElementEPN3WTF6StringEi(i1, i2, i3) | 0;
 if ((i18 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 __ZN7WebCore17createHTMLElementERNS_8DocumentERKNS_13QualifiedNameE(i10, HEAP32[(HEAP32[i18 + 20 >> 2] | 0) + 8 >> 2] | 0, __ZN7WebCore9HTMLNames7spanTagE);
 i3 = i10 | 0;
 i10 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i11 >> 2] = 0;
 i3 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   i19 = 0;
   i20 = 1;
  } else {
   i4 = i3 | 0;
   i21 = HEAP32[i4 >> 2] | 0;
   i22 = i21 + 2 | 0;
   HEAP32[i4 >> 2] = i21 + 4;
   if ((i22 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    i23 = HEAP32[i4 >> 2] | 0;
   } else {
    HEAP32[i4 >> 2] = i22;
    i23 = i22;
   }
   i22 = i23 + 2 | 0;
   HEAP32[i4 >> 2] = i23 + 4;
   if ((i22 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    i19 = i3;
    i20 = 0;
    break;
   } else {
    HEAP32[i4 >> 2] = i22;
    i19 = i3;
    i20 = 0;
    break;
   }
  }
 } while (0);
 HEAP32[i9 >> 2] = H_BASE + 1632;
 i3 = i9 + 4 | 0;
 HEAP32[i3 >> 2] = i19;
 i23 = (i19 | 0) == 0;
 if (!i23) {
  i22 = i19 | 0;
  HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 2;
 }
 __ZN3WTF13tryMakeStringINS_12StringAppendIPKcNS_6StringEEES3_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i8, i9, H_BASE + 1616 | 0);
 i9 = i8 | 0;
 i8 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 i9 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i3 = i9 | 0;
   i22 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i22 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i3 >> 2] = i22;
    break;
   }
  }
 } while (0);
 if ((i8 | 0) == 0) {
  _WTFCrash();
 }
 i9 = i12 | 0;
 HEAP32[i9 >> 2] = i8;
 __ZN7WebCore11HTMLElement12setInnerHTMLERKN3WTF6StringERi(i10, i12, i11);
 i12 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i9 = i12 | 0;
   i8 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i9 >> 2] = i8;
    break;
   }
  }
 } while (0);
 do {
  if (!i23) {
   i12 = i19 | 0;
   i8 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i19);
    break;
   } else {
    HEAP32[i12 >> 2] = i8;
    break;
   }
  }
 } while (0);
 do {
  if (!i20) {
   i23 = i19 | 0;
   i8 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i19);
    break;
   } else {
    HEAP32[i23 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i19 = HEAP32[i11 >> 2] | 0;
 L44 : do {
  if ((i19 | 0) == 0) {
   i11 = HEAP32[i10 + 36 >> 2] | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF6StringC1EPKc(i14, H_BASE + 1576 | 0);
    i20 = i14 | 0;
    i8 = HEAP32[i20 >> 2] | 0;
    HEAP32[i20 >> 2] = 0;
    i23 = i2 | 0;
    i12 = HEAP32[i23 >> 2] | 0;
    HEAP32[i23 >> 2] = i8;
    do {
     if ((i12 | 0) != 0) {
      i8 = i12 | 0;
      i23 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
      if ((i23 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i12);
       break;
      } else {
       HEAP32[i8 >> 2] = i23;
       break;
      }
     }
    } while (0);
    i12 = HEAP32[i20 >> 2] | 0;
    if ((i12 | 0) == 0) {
     break;
    }
    i23 = i12 | 0;
    i8 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
    if ((i8 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i12);
     break;
    } else {
     HEAP32[i23 >> 2] = i8;
     break;
    }
   }
   i8 = (i5 | 0) == 0;
   if (!(__ZNK7WebCore7Element13hasAttributesEv(i11) | 0 | i8)) {
    __ZN7WebCore9DOMEditor15removeAttributeEPNS_7ElementERKN3WTF6StringEPS4_(HEAP32[i1 + 224 >> 2] | 0, i18, i5, i2) | 0;
    break;
   }
   i23 = i11 + 48 | 0;
   i12 = HEAP32[i23 >> 2] | 0;
   i9 = HEAP32[i12 + 4 >> 2] | 0;
   if ((i9 & 1 | 0) == 0) {
    i24 = i9 >>> 1 & 134217727;
   } else {
    i24 = HEAP32[i12 + 32 >> 2] | 0;
   }
   i12 = i1 + 224 | 0;
   i9 = i16 | 0;
   i22 = i15 | 0;
   i3 = i5 | 0;
   L77 : do {
    if (i8) {
     i4 = 0;
     while (1) {
      if (i4 >>> 0 >= i24 >>> 0) {
       i25 = 0;
       break L77;
      }
      i21 = HEAP32[i23 >> 2] | 0;
      i26 = HEAP32[i21 + 4 >> 2] | 0;
      i27 = (i26 & 1 | 0) == 0;
      if (i27) {
       i28 = i26 >>> 1 & 134217727;
      } else {
       i28 = HEAP32[i21 + 32 >> 2] | 0;
      }
      if (i28 >>> 0 <= i4 >>> 0) {
       break;
      }
      if (i27) {
       i29 = i21 + 20 | 0;
      } else {
       i29 = HEAP32[i21 + 24 >> 2] | 0;
      }
      i21 = HEAP32[i12 >> 2] | 0;
      __ZNK7WebCore13QualifiedName8toStringEv(i16, i29 + (i4 << 3) | 0);
      i27 = __ZN7WebCore9DOMEditor12setAttributeEPNS_7ElementERKN3WTF6StringES6_PS4_(i21, i18, i16, i29 + (i4 << 3) + 4 | 0, i2) | 0;
      i21 = HEAP32[i9 >> 2] | 0;
      do {
       if ((i21 | 0) != 0) {
        i26 = i21 | 0;
        i30 = (HEAP32[i26 >> 2] | 0) - 2 | 0;
        if ((i30 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i21);
         break;
        } else {
         HEAP32[i26 >> 2] = i30;
         break;
        }
       }
      } while (0);
      if (i27) {
       i4 = i4 + 1 | 0;
      } else {
       break L44;
      }
     }
     _WTFCrash();
    } else {
     i4 = 0;
     i21 = 0;
     while (1) {
      if (i4 >>> 0 >= i24 >>> 0) {
       i25 = i21;
       break L77;
      }
      i30 = HEAP32[i23 >> 2] | 0;
      i26 = HEAP32[i30 + 4 >> 2] | 0;
      i31 = (i26 & 1 | 0) == 0;
      if (i31) {
       i32 = i26 >>> 1 & 134217727;
      } else {
       i32 = HEAP32[i30 + 32 >> 2] | 0;
      }
      if (i32 >>> 0 <= i4 >>> 0) {
       break;
      }
      if (i31) {
       i33 = i30 + 20 | 0;
      } else {
       i33 = HEAP32[i30 + 24 >> 2] | 0;
      }
      i30 = i33 + (i4 << 3) | 0;
      do {
       if (i21) {
        i34 = 1;
       } else {
        __ZNK7WebCore13QualifiedName8toStringEv(i15, i30);
        i31 = __ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i22 >> 2] | 0, HEAP32[i3 >> 2] | 0) | 0;
        i26 = HEAP32[i22 >> 2] | 0;
        if ((i26 | 0) == 0) {
         i34 = i31;
         break;
        }
        i35 = i26 | 0;
        i36 = (HEAP32[i35 >> 2] | 0) - 2 | 0;
        if ((i36 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i26);
         i34 = i31;
         break;
        } else {
         HEAP32[i35 >> 2] = i36;
         i34 = i31;
         break;
        }
       }
      } while (0);
      i27 = HEAP32[i12 >> 2] | 0;
      __ZNK7WebCore13QualifiedName8toStringEv(i16, i30);
      i31 = __ZN7WebCore9DOMEditor12setAttributeEPNS_7ElementERKN3WTF6StringES6_PS4_(i27, i18, i16, i33 + (i4 << 3) + 4 | 0, i2) | 0;
      i27 = HEAP32[i9 >> 2] | 0;
      do {
       if ((i27 | 0) != 0) {
        i36 = i27 | 0;
        i35 = (HEAP32[i36 >> 2] | 0) - 2 | 0;
        if ((i35 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i27);
         break;
        } else {
         HEAP32[i36 >> 2] = i35;
         break;
        }
       }
      } while (0);
      if (i31) {
       i4 = i4 + 1 | 0;
       i21 = i34;
      } else {
       break L44;
      }
     }
     _WTFCrash();
    }
   } while (0);
   if (i25 | i8) {
    break;
   }
   __ZNK3WTF6String15stripWhiteSpaceEv(i17, i5);
   i9 = HEAP32[i17 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   i22 = (HEAP32[i9 + 4 >> 2] | 0) != 0;
   i3 = i9 | 0;
   i23 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i23 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    if (!i22) {
     break;
    }
   } else {
    HEAP32[i3 >> 2] = i23;
    if (!i22) {
     break;
    }
   }
   __ZN7WebCore9DOMEditor15removeAttributeEPNS_7ElementERKN3WTF6StringEPS4_(HEAP32[i12 >> 2] | 0, i18, i5, i2) | 0;
  } else {
   __ZN7WebCore24ExceptionCodeDescriptionC1Ei(i7, i19);
   __ZN3WTF6StringC1EPKc(i13, HEAP32[i7 + 4 >> 2] | 0);
   i22 = i13 | 0;
   i23 = HEAP32[i22 >> 2] | 0;
   HEAP32[i22 >> 2] = 0;
   i3 = i2 | 0;
   i9 = HEAP32[i3 >> 2] | 0;
   HEAP32[i3 >> 2] = i23;
   do {
    if ((i9 | 0) != 0) {
     i23 = i9 | 0;
     i3 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
     if ((i3 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i9);
      break;
     } else {
      HEAP32[i23 >> 2] = i3;
      break;
     }
    }
   } while (0);
   i9 = HEAP32[i22 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
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
 if ((i10 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i2 = i10 + 8 | 0;
 i10 = i2 | 0;
 i13 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
 HEAP32[i10 >> 2] = i13;
 if ((i13 | 0) >= 1) {
  STACKTOP = i6;
  return;
 }
 if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
  STACKTOP = i6;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore17InspectorDOMAgent34highlightConfigFromInspectorObjectEPN3WTF6StringEPN9Inspector15InspectorObjectE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 200 | 0;
 i5 = i2 | 0;
 i6 = i2 + 8 | 0;
 i7 = i2 + 16 | 0;
 i8 = i2 + 24 | 0;
 i9 = i2 + 32 | 0;
 i10 = i2 + 40 | 0;
 i11 = i2 + 48 | 0;
 i12 = i2 + 56 | 0;
 i13 = i2 + 64 | 0;
 i14 = i2 + 72 | 0;
 i15 = i2 + 80 | 0;
 i16 = i2 + 88 | 0;
 i17 = i2 + 96 | 0;
 i18 = i2 + 104 | 0;
 i19 = i2 + 112 | 0;
 i20 = i2 + 120 | 0;
 i21 = i2 + 128 | 0;
 i22 = i2 + 136 | 0;
 i23 = i2 + 144 | 0;
 i24 = i2 + 152 | 0;
 i25 = i2 + 160 | 0;
 i26 = i2 + 168 | 0;
 i27 = i2 + 176 | 0;
 i28 = i2 + 184 | 0;
 i29 = i2 + 192 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF6StringC1EPKc(i15, H_BASE + 1216 | 0);
  i30 = i15 | 0;
  i15 = HEAP32[i30 >> 2] | 0;
  HEAP32[i30 >> 2] = 0;
  i31 = i3 | 0;
  i3 = HEAP32[i31 >> 2] | 0;
  HEAP32[i31 >> 2] = i15;
  do {
   if ((i3 | 0) != 0) {
    i15 = i3 | 0;
    i31 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
    if ((i31 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i3);
     break;
    } else {
     HEAP32[i15 >> 2] = i31;
     break;
    }
   }
  } while (0);
  i3 = HEAP32[i30 >> 2] | 0;
  do {
   if ((i3 | 0) != 0) {
    i30 = i3 | 0;
    i31 = (HEAP32[i30 >> 2] | 0) - 2 | 0;
    if ((i31 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i3);
     break;
    } else {
     HEAP32[i30 >> 2] = i31;
     break;
    }
   }
  } while (0);
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i2;
  return;
 }
 i3 = __ZN3WTF10fastMallocEj(44) | 0;
 i31 = i3;
 _memset(i3 | 0, 0, 44) | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP8[i3 + 4 | 0] = 0;
 i30 = i3 + 8 | 0;
 HEAP32[i30 >> 2] = 0;
 HEAP8[i3 + 12 | 0] = 0;
 i15 = i3 + 16 | 0;
 HEAP32[i15 >> 2] = 0;
 HEAP8[i3 + 20 | 0] = 0;
 i32 = i3 + 24 | 0;
 HEAP32[i32 >> 2] = 0;
 HEAP8[i3 + 28 | 0] = 0;
 i33 = i3 + 32 | 0;
 HEAP32[i33 >> 2] = 0;
 HEAP8[i3 + 36 | 0] = 0;
 HEAP8[i16] = 0;
 i34 = i4 | 0;
 __ZN3WTF6StringC1EPKc(i17, H_BASE + 1200 | 0);
 __ZNK9Inspector19InspectorObjectBase10getBooleanERKN3WTF6StringEPb(i34, i17, i16) | 0;
 i4 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i17 = i4 | 0;
   i35 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i35 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i17 >> 2] = i35;
    break;
   }
  }
 } while (0);
 HEAP8[i3 + 40 | 0] = HEAP8[i16] & 1;
 HEAP8[i18] = 0;
 __ZN3WTF6StringC1EPKc(i19, H_BASE + 1184 | 0);
 __ZNK9Inspector19InspectorObjectBase10getBooleanERKN3WTF6StringEPb(i34, i19, i18) | 0;
 i16 = HEAP32[i19 >> 2] | 0;
 do {
  if ((i16 | 0) != 0) {
   i19 = i16 | 0;
   i4 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i16);
    break;
   } else {
    HEAP32[i19 >> 2] = i4;
    break;
   }
  }
 } while (0);
 HEAP8[i3 + 41 | 0] = HEAP8[i18] & 1;
 __ZN3WTF6StringC1EPKc(i21, H_BASE + 1168 | 0);
 __ZNK9Inspector19InspectorObjectBase9getObjectERKN3WTF6StringE(i10, i34, i21);
 i18 = i9 | 0;
 i16 = i10 | 0;
 i10 = HEAP32[i16 >> 2] | 0;
 HEAP32[i16 >> 2] = 0;
 HEAP32[i18 >> 2] = i10;
 __ZN7WebCoreL10parseColorEPKN3WTF6RefPtrIN9Inspector15InspectorObjectEEE(i20, i9);
 i9 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i18 = i9 + 4 | 0;
   i10 = i18 | 0;
   i16 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i16 | 0) != 0) {
    HEAP32[i10 >> 2] = i16;
    break;
   }
   i16 = i18 - 4 | 0;
   if ((i16 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 63](i16);
  }
 } while (0);
 i9 = i20;
 HEAP32[i3 >> 2] = HEAP32[i9 >> 2];
 HEAP8[i3 + 4 | 0] = HEAP8[i9 + 4 | 0] | 0;
 i9 = HEAP32[i21 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i21 = i9 | 0;
   i3 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i21 >> 2] = i3;
    break;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i23, H_BASE + 1144 | 0);
 __ZNK9Inspector19InspectorObjectBase9getObjectERKN3WTF6StringE(i8, i34, i23);
 i9 = i7 | 0;
 i3 = i8 | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i9 >> 2] = i8;
 __ZN7WebCoreL10parseColorEPKN3WTF6RefPtrIN9Inspector15InspectorObjectEEE(i22, i7);
 i7 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i9 = i7 + 4 | 0;
   i8 = i9 | 0;
   i3 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i8 >> 2] = i3;
    break;
   }
   i3 = i9 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 63](i3);
  }
 } while (0);
 i7 = i22;
 HEAP32[i30 >> 2] = HEAP32[i7 >> 2];
 HEAP8[i30 + 4 | 0] = HEAP8[i7 + 4 | 0] | 0;
 i7 = HEAP32[i23 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i23 = i7 | 0;
   i30 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
   if ((i30 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i23 >> 2] = i30;
    break;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i25, H_BASE + 1128 | 0);
 __ZNK9Inspector19InspectorObjectBase9getObjectERKN3WTF6StringE(i6, i34, i25);
 i7 = i5 | 0;
 i30 = i6 | 0;
 i6 = HEAP32[i30 >> 2] | 0;
 HEAP32[i30 >> 2] = 0;
 HEAP32[i7 >> 2] = i6;
 __ZN7WebCoreL10parseColorEPKN3WTF6RefPtrIN9Inspector15InspectorObjectEEE(i24, i5);
 i5 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i7 = i5 + 4 | 0;
   i6 = i7 | 0;
   i30 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i30 | 0) != 0) {
    HEAP32[i6 >> 2] = i30;
    break;
   }
   i30 = i7 - 4 | 0;
   if ((i30 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i30 >> 2] | 0) + 4 >> 2] & 63](i30);
  }
 } while (0);
 i5 = i24;
 HEAP32[i15 >> 2] = HEAP32[i5 >> 2];
 HEAP8[i15 + 4 | 0] = HEAP8[i5 + 4 | 0] | 0;
 i5 = HEAP32[i25 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i25 = i5 | 0;
   i15 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i25 >> 2] = i15;
    break;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i27, H_BASE + 1112 | 0);
 __ZNK9Inspector19InspectorObjectBase9getObjectERKN3WTF6StringE(i12, i34, i27);
 i5 = i11 | 0;
 i15 = i12 | 0;
 i12 = HEAP32[i15 >> 2] | 0;
 HEAP32[i15 >> 2] = 0;
 HEAP32[i5 >> 2] = i12;
 __ZN7WebCoreL10parseColorEPKN3WTF6RefPtrIN9Inspector15InspectorObjectEEE(i26, i11);
 i11 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i5 = i11 + 4 | 0;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 63](i15);
  }
 } while (0);
 i11 = i26;
 HEAP32[i32 >> 2] = HEAP32[i11 >> 2];
 HEAP8[i32 + 4 | 0] = HEAP8[i11 + 4 | 0] | 0;
 i11 = HEAP32[i27 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i27 = i11 | 0;
   i32 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
   if ((i32 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i27 >> 2] = i32;
    break;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i29, H_BASE + 1096 | 0);
 __ZNK9Inspector19InspectorObjectBase9getObjectERKN3WTF6StringE(i14, i34, i29);
 i34 = i13 | 0;
 i11 = i14 | 0;
 i14 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i34 >> 2] = i14;
 __ZN7WebCoreL10parseColorEPKN3WTF6RefPtrIN9Inspector15InspectorObjectEEE(i28, i13);
 i13 = HEAP32[i34 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i34 = i13 + 4 | 0;
   i14 = i34 | 0;
   i11 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) != 0) {
    HEAP32[i14 >> 2] = i11;
    break;
   }
   i11 = i34 - 4 | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 63](i11);
  }
 } while (0);
 i13 = i28;
 HEAP32[i33 >> 2] = HEAP32[i13 >> 2];
 HEAP8[i33 + 4 | 0] = HEAP8[i13 + 4 | 0] | 0;
 i13 = HEAP32[i29 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i29 = i13 | 0;
   i33 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
   if ((i33 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i29 >> 2] = i33;
    break;
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = i31;
 STACKTOP = i2;
 return;
}
function __ZN7WebCore17InspectorDOMAgent13performSearchEPN3WTF6StringERKS2_PKNS1_6RefPtrIN9Inspector14InspectorArrayEEES3_Pi(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
 i8 = i7 | 0;
 i9 = i7 + 48 | 0;
 i10 = i7 + 56 | 0;
 i11 = i7 + 64 | 0;
 i12 = i7 + 72 | 0;
 i13 = i7 + 80 | 0;
 i14 = i7 + 88 | 0;
 i15 = i7 + 96 | 0;
 i16 = i7 + 112 | 0;
 i17 = i9 | 0;
 i18 = HEAP32[i3 >> 2] | 0;
 HEAP32[i17 >> 2] = i18;
 if ((i18 | 0) != 0) {
  i3 = i18 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 __ZN7WebCore19InspectorNodeFinderC1EN3WTF6StringE(i8, i9);
 i9 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i17 = i9 | 0;
   i3 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i17 >> 2] = i3;
    break;
   }
  }
 } while (0);
 L10 : do {
  if ((i4 | 0) == 0) {
   i9 = HEAP32[i1 + 180 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN7WebCore19InspectorNodeFinder13performSearchEPNS_4NodeE(i8, i9 | 0);
  } else {
   i9 = i4 | 0;
   i3 = i10 | 0;
   i17 = i11 | 0;
   i18 = i2 | 0;
   i19 = i13 | 0;
   i20 = 0;
   while (1) {
    i21 = HEAP32[i9 >> 2] | 0;
    if (i20 >>> 0 >= (HEAP32[i21 + 20 >> 2] | 0) >>> 0) {
     break L10;
    }
    __ZN9Inspector18InspectorArrayBase3getEj(i10, i21 | 0, i20);
    i21 = HEAP32[i3 >> 2] | 0;
    HEAP32[i3 >> 2] = 0;
    i22 = (i21 | 0) == 0;
    do {
     if (i22) {
      __ZN3WTF6StringC1EPKc(i11, H_BASE + 1448 | 0);
      i23 = HEAP32[i17 >> 2] | 0;
      HEAP32[i17 >> 2] = 0;
      i24 = HEAP32[i18 >> 2] | 0;
      HEAP32[i18 >> 2] = i23;
      do {
       if ((i24 | 0) != 0) {
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
      i24 = HEAP32[i17 >> 2] | 0;
      if ((i24 | 0) == 0) {
       i26 = 30;
       break;
      }
      i25 = i24 | 0;
      i23 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
      if ((i23 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i24);
       i26 = 30;
       break;
      } else {
       HEAP32[i25 >> 2] = i23;
       i26 = 30;
       break;
      }
     } else {
      HEAP32[i12 >> 2] = 0;
      if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i21 >> 2] | 0) + 20 >> 2] & 31](i21, i12) | 0) {
       i23 = __ZN7WebCore17InspectorDOMAgent10assertNodeEPN3WTF6StringEi(i1, i2, HEAP32[i12 >> 2] | 0) | 0;
       if ((i23 | 0) == 0) {
        i27 = 1;
        break;
       }
       __ZN7WebCore19InspectorNodeFinder13performSearchEPNS_4NodeE(i8, i23);
       i27 = 0;
       break;
      }
      __ZN3WTF6StringC1EPKc(i13, H_BASE + 1392 | 0);
      i23 = HEAP32[i19 >> 2] | 0;
      HEAP32[i19 >> 2] = 0;
      i25 = HEAP32[i18 >> 2] | 0;
      HEAP32[i18 >> 2] = i23;
      do {
       if ((i25 | 0) != 0) {
        i23 = i25 | 0;
        i24 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
        if ((i24 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i25);
         break;
        } else {
         HEAP32[i23 >> 2] = i24;
         break;
        }
       }
      } while (0);
      i25 = HEAP32[i19 >> 2] | 0;
      if ((i25 | 0) == 0) {
       i26 = 30;
       break;
      }
      i24 = i25 | 0;
      i23 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
      if ((i23 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i25);
       i26 = 30;
       break;
      } else {
       HEAP32[i24 >> 2] = i23;
       i26 = 30;
       break;
      }
     }
    } while (0);
    if ((i26 | 0) == 30) {
     i26 = 0;
     if (i22) {
      i26 = 69;
      break;
     } else {
      i27 = 1;
     }
    }
    i23 = i21 + 4 | 0;
    i24 = i23 | 0;
    i25 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
    do {
     if ((i25 | 0) == 0) {
      i28 = i23 - 4 | 0;
      if ((i28 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i28 >> 2] | 0) + 4 >> 2] & 63](i28);
     } else {
      HEAP32[i24 >> 2] = i25;
     }
    } while (0);
    if ((i27 | 0) == 0) {
     i20 = i20 + 1 | 0;
    } else {
     i26 = 70;
     break;
    }
   }
   if ((i26 | 0) == 69) {
    __ZN7WebCore19InspectorNodeFinderD2Ev(i8);
    STACKTOP = i7;
    return;
   } else if ((i26 | 0) == 70) {
    __ZN7WebCore19InspectorNodeFinderD2Ev(i8);
    STACKTOP = i7;
    return;
   }
  }
 } while (0);
 __ZN7WebCore18IdentifiersFactory16createIdentifierEv(i14);
 i26 = i14 | 0;
 i14 = HEAP32[i26 >> 2] | 0;
 HEAP32[i26 >> 2] = 0;
 i27 = i5 | 0;
 i13 = HEAP32[i27 >> 2] | 0;
 HEAP32[i27 >> 2] = i14;
 do {
  if ((i13 | 0) != 0) {
   i14 = i13 | 0;
   i27 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i27 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i14 >> 2] = i27;
    break;
   }
  }
 } while (0);
 i13 = HEAP32[i26 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i26 = i13 | 0;
   i27 = (HEAP32[i26 >> 2] | 0) - 2 | 0;
   if ((i27 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i26 >> 2] = i27;
    break;
   }
  }
 } while (0);
 i13 = i15 | 0;
 HEAP32[i13 >> 2] = 0;
 i27 = i15 + 4 | 0;
 HEAP32[i27 >> 2] = 0;
 i26 = i15 + 8 | 0;
 HEAP32[i26 >> 2] = 0;
 __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6VectorINS_6RefPtrIN7WebCore4NodeEEELj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorISA_EENS_10StringHashENS_7HashMapIS1_S9_SD_NS_10HashTraitsIS1_EENSF_IS9_EEE18KeyValuePairTraitsESG_E3addINS_17HashMapTranslatorISJ_SD_EERKS1_S9_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_SA_SC_SD_SJ_SG_EEEEOT0_OT1_(i16, i1 + 184 | 0, i5, i15);
 i15 = HEAP32[i16 >> 2] | 0;
 i16 = i15 + 4 | 0;
 i5 = HEAP32[i26 >> 2] | 0;
 i1 = HEAP32[i13 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i14 = i1 + (i5 << 2) | 0;
  i5 = i1;
  while (1) {
   i12 = HEAP32[i5 >> 2] | 0;
   do {
    if ((i12 | 0) != 0) {
     i2 = i12 + 8 | 0;
     i11 = i2 | 0;
     i10 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
     HEAP32[i11 >> 2] = i10;
     if ((i10 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
    }
   } while (0);
   i5 = i5 + 4 | 0;
   if ((i5 | 0) == (i14 | 0)) {
    break;
   }
  }
  HEAP32[i26 >> 2] = 0;
 }
 if ((i1 | 0) != 0) {
  HEAP32[i13 >> 2] = 0;
  HEAP32[i27 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i1);
 }
 i1 = HEAP32[i8 + 36 >> 2] | 0;
 i27 = i15 + 12 | 0;
 if ((i1 | 0) == 0) {
  i29 = HEAP32[i27 >> 2] | 0;
 } else {
  i13 = i15 + 8 | 0;
  i15 = i16 | 0;
  i26 = i1;
  i1 = HEAP32[i27 >> 2] | 0;
  while (1) {
   i14 = i26 | 0;
   if ((i1 | 0) == (HEAP32[i13 >> 2] | 0)) {
    __ZN3WTF6VectorINS_6RefPtrIN7WebCore4NodeEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i16, i1 + 1 | 0);
    i5 = HEAP32[i14 >> 2] | 0;
    HEAP32[(HEAP32[i15 >> 2] | 0) + (HEAP32[i27 >> 2] << 2) >> 2] = i5;
    if ((i5 | 0) != 0) {
     i12 = i5 + 8 | 0;
     HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
    }
   } else {
    i12 = HEAP32[i14 >> 2] | 0;
    HEAP32[(HEAP32[i15 >> 2] | 0) + (i1 << 2) >> 2] = i12;
    if ((i12 | 0) != 0) {
     i14 = i12 + 8 | 0;
     HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
    }
   }
   i14 = (HEAP32[i27 >> 2] | 0) + 1 | 0;
   HEAP32[i27 >> 2] = i14;
   i12 = HEAP32[i26 + 8 >> 2] | 0;
   if ((i12 | 0) == 0) {
    i29 = i14;
    break;
   } else {
    i26 = i12;
    i1 = i14;
   }
  }
 }
 HEAP32[i6 >> 2] = i29;
 __ZN7WebCore19InspectorNodeFinderD2Ev(i8);
 STACKTOP = i7;
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 1680 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 1684 >> 2] = F_BASE_vi + 38;
 HEAP32[H_BASE + 1688 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1692 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1696 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 1720 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 1724 >> 2] = F_BASE_vi + 42;
 HEAP32[H_BASE + 1728 >> 2] = F_BASE_iii + 18;
 HEAP32[H_BASE + 1732 >> 2] = F_BASE_iii + 10;
 HEAP32[H_BASE + 1736 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 1740 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 1744 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 1748 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 1752 >> 2] = F_BASE_iii + 16;
 HEAP32[H_BASE + 1756 >> 2] = F_BASE_iii + 20;
 HEAP32[H_BASE + 1760 >> 2] = F_BASE_iii + 14;
 HEAP32[H_BASE + 1764 >> 2] = F_BASE_iii + 12;
 HEAP32[H_BASE + 1768 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 1772 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 1776 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 1800 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 1804 >> 2] = F_BASE_vi + 36;
 HEAP32[H_BASE + 1808 >> 2] = F_BASE_iii + 18;
 HEAP32[H_BASE + 1812 >> 2] = F_BASE_iii + 10;
 HEAP32[H_BASE + 1816 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 1820 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 1824 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 1828 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 1832 >> 2] = F_BASE_iii + 16;
 HEAP32[H_BASE + 1836 >> 2] = F_BASE_iii + 20;
 HEAP32[H_BASE + 1840 >> 2] = F_BASE_iii + 14;
 HEAP32[H_BASE + 1844 >> 2] = F_BASE_iii + 12;
 HEAP32[H_BASE + 1848 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 1852 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 1856 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 1880 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 1884 >> 2] = F_BASE_vi + 32;
 HEAP32[H_BASE + 1888 >> 2] = F_BASE_iii + 18;
 HEAP32[H_BASE + 1892 >> 2] = F_BASE_iii + 10;
 HEAP32[H_BASE + 1896 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 1900 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 1904 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 1908 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 1912 >> 2] = F_BASE_iii + 16;
 HEAP32[H_BASE + 1916 >> 2] = F_BASE_iii + 20;
 HEAP32[H_BASE + 1920 >> 2] = F_BASE_iii + 14;
 HEAP32[H_BASE + 1924 >> 2] = F_BASE_iii + 12;
 HEAP32[H_BASE + 1928 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 1932 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 1936 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 1960 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 1964 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 1968 >> 2] = F_BASE_iii + 18;
 HEAP32[H_BASE + 1972 >> 2] = F_BASE_iii + 10;
 HEAP32[H_BASE + 1976 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 1980 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 1984 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 1988 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 1992 >> 2] = F_BASE_iii + 16;
 HEAP32[H_BASE + 1996 >> 2] = F_BASE_iii + 20;
 HEAP32[H_BASE + 2e3 >> 2] = F_BASE_iii + 14;
 HEAP32[H_BASE + 2004 >> 2] = F_BASE_iii + 12;
 HEAP32[H_BASE + 2008 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 2012 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 2016 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 2040 >> 2] = F_BASE_vi + 34;
 HEAP32[H_BASE + 2044 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 2048 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 2052 >> 2] = F_BASE_did + 2;
 HEAP32[H_BASE + 2072 >> 2] = F_BASE_vi + 40;
 HEAP32[H_BASE + 2076 >> 2] = F_BASE_vi + 28;
 HEAP32[H_BASE + 2080 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 2084 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 2088 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 2112 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 2116 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 2120 >> 2] = F_BASE_viii + 22;
 HEAP32[H_BASE + 2124 >> 2] = F_BASE_vi + 30;
 HEAP32[H_BASE + 2128 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 2132 >> 2] = F_BASE_viiiii + 16;
 HEAP32[H_BASE + 2136 >> 2] = F_BASE_viiiii + 30;
 HEAP32[H_BASE + 2140 >> 2] = F_BASE_viii + 12;
 HEAP32[H_BASE + 2144 >> 2] = F_BASE_viiii + 16;
 HEAP32[H_BASE + 2148 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 2152 >> 2] = F_BASE_viiiii + 38;
 HEAP32[H_BASE + 2156 >> 2] = F_BASE_viiii + 26;
 HEAP32[H_BASE + 2160 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 2164 >> 2] = F_BASE_viiiii + 24;
 HEAP32[H_BASE + 2168 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 2172 >> 2] = F_BASE_viiii + 20;
 HEAP32[H_BASE + 2176 >> 2] = F_BASE_viiii + 6;
 HEAP32[H_BASE + 2180 >> 2] = F_BASE_viiiii + 22;
 HEAP32[H_BASE + 2184 >> 2] = F_BASE_viiiiii + 12;
 HEAP32[H_BASE + 2188 >> 2] = F_BASE_viiiiii + 4;
 HEAP32[H_BASE + 2192 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 2196 >> 2] = F_BASE_viiiii + 6;
 HEAP32[H_BASE + 2200 >> 2] = F_BASE_viiii + 28;
 HEAP32[H_BASE + 2204 >> 2] = F_BASE_viiii + 32;
 HEAP32[H_BASE + 2208 >> 2] = F_BASE_viiii + 18;
 HEAP32[H_BASE + 2212 >> 2] = F_BASE_viiii + 30;
 HEAP32[H_BASE + 2216 >> 2] = F_BASE_viiii + 8;
 HEAP32[H_BASE + 2220 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 2224 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 2228 >> 2] = F_BASE_viiiiiiiii + 2;
 HEAP32[H_BASE + 2232 >> 2] = F_BASE_viiiiii + 8;
 HEAP32[H_BASE + 2236 >> 2] = F_BASE_viiiii + 18;
 HEAP32[H_BASE + 2240 >> 2] = F_BASE_viiiii + 4;
 HEAP32[H_BASE + 2244 >> 2] = F_BASE_viiiiii + 10;
 HEAP32[H_BASE + 2248 >> 2] = F_BASE_vii + 22;
 HEAP32[H_BASE + 2252 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 2256 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 2260 >> 2] = F_BASE_viii + 18;
 HEAP32[H_BASE + 2272 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 2276 >> 2] = F_BASE_viiii + 36;
 HEAP32[H_BASE + 2280 >> 2] = F_BASE_viiiii + 32;
 HEAP32[H_BASE + 2284 >> 2] = F_BASE_viiiii + 12;
 HEAP32[H_BASE + 2288 >> 2] = F_BASE_viiiii + 28;
 HEAP32[H_BASE + 2292 >> 2] = F_BASE_viiii + 38;
 HEAP32[H_BASE + 2296 >> 2] = F_BASE_viii + 16;
 HEAP32[H_BASE + 2300 >> 2] = F_BASE_viiiii + 14;
 HEAP32[H_BASE + 2304 >> 2] = F_BASE_viiiii + 26;
 HEAP32[H_BASE + 2308 >> 2] = F_BASE_viiii + 22;
 HEAP32[H_BASE + 2312 >> 2] = F_BASE_viiiii + 34;
 HEAP32[H_BASE + 2316 >> 2] = F_BASE_viiii + 10;
 HEAP32[H_BASE + 2320 >> 2] = F_BASE_viiii + 34;
 HEAP32[H_BASE + 2324 >> 2] = F_BASE_viiiiii + 14;
 HEAP32[H_BASE + 2328 >> 2] = F_BASE_viiiiii + 6;
 HEAP32[H_BASE + 2332 >> 2] = F_BASE_viii + 14;
 HEAP32[H_BASE + 2336 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 2340 >> 2] = F_BASE_viiii + 40;
 HEAP32[H_BASE + 2344 >> 2] = F_BASE_viiiiiiiii + 4;
 HEAP32[H_BASE + 2348 >> 2] = F_BASE_viiiiii + 2;
 HEAP32[H_BASE + 2352 >> 2] = F_BASE_viiiii + 36;
 HEAP32[H_BASE + 2356 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 2360 >> 2] = F_BASE_viiiii + 10;
 HEAP32[H_BASE + 2364 >> 2] = F_BASE_viiii + 24;
 HEAP32[H_BASE + 2368 >> 2] = F_BASE_viiii + 12;
 HEAP32[H_BASE + 2372 >> 2] = F_BASE_viii + 20;
 HEAP32[H_BASE + 2376 >> 2] = F_BASE_viiiii + 8;
 HEAP32[H_BASE + 2380 >> 2] = F_BASE_viiii + 14;
 HEAP32[H_BASE + 2384 >> 2] = F_BASE_viiiiii + 16;
 HEAP32[H_BASE + 2388 >> 2] = F_BASE_vii + 24;
 HEAP32[H_BASE + 2392 >> 2] = F_BASE_vii + 26;
 HEAP32[H_BASE + 2396 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 2400 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 2404 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 2408 >> 2] = F_BASE_vi + 14;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_7HashMapINS_6RefPtrIN7WebCore4NodeEEEiNS_7PtrHashIS7_EENS_10HashTraitsIS7_EENSA_IiEEEEEENS_24KeyValuePairKeyExtractorISE_EENS_10StringHashENS3_IS1_SD_SH_NSA_IS1_EENSA_ISD_EEE18KeyValuePairTraitsESI_E3addINS_17HashMapTranslatorISL_SH_EERKS1_SD_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_SE_SG_SH_SL_SI_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = i2 + 4 | 0;
  i8 = HEAP32[i7 >> 2] | 0;
  if ((i8 | 0) == 0) {
   i9 = 8;
   i10 = 0;
  } else {
   i11 = i8 << 1;
   i9 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i11 | 0) ? i8 : i11;
   i10 = i8;
  }
  HEAP32[i7 >> 2] = i9;
  i7 = i2 + 8 | 0;
  HEAP32[i7 >> 2] = i9 - 1;
  i8 = __ZN3WTF10fastMallocEj(i9 * 24 & -1) | 0;
  if ((i9 | 0) > 0) {
   i11 = 0;
   while (1) {
    __ZN3WTF26HashTableBucketInitializerILb0EE10initializeINS_7HashMapINS_6StringENS3_INS_6RefPtrIN7WebCore4NodeEEEiNS_7PtrHashIS8_EENS_10HashTraitsIS8_EENSB_IiEEEENS_10StringHashENSB_IS4_EENSB_ISE_EEE18KeyValuePairTraitsENS_12KeyValuePairIS4_SE_EEEEvRT0_(i8 + (i11 * 24 & -1) | 0);
    i11 = i11 + 1 | 0;
    if ((i11 | 0) >= (i9 | 0)) {
     break;
    }
   }
  }
  HEAP32[i5 >> 2] = i8;
  if ((i10 | 0) != 0) {
   i8 = 0;
   while (1) {
    i9 = i8 * 24 & -1 | 0;
    i11 = HEAP32[i9 >> 2] | 0;
    if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
     __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_7HashMapINS_6RefPtrIN7WebCore4NodeEEEiNS_7PtrHashIS7_EENS_10HashTraitsIS7_EENSA_IiEEEEEENS_24KeyValuePairKeyExtractorISE_EENS_10StringHashENS3_IS1_SD_SH_NSA_IS1_EENSA_ISD_EEE18KeyValuePairTraitsESI_E8reinsertEOSE_(i2, i9) | 0;
    }
    i8 = i8 + 1 | 0;
    if ((i8 | 0) == (i10 | 0)) {
     break;
    }
   }
  }
  HEAP32[i2 + 16 >> 2] = 0;
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_7HashMapINS_6RefPtrIN7WebCore4NodeEEEiNS_7PtrHashIS7_EENS_10HashTraitsIS7_EENSA_IiEEEEEENS_24KeyValuePairKeyExtractorISE_EENS_10StringHashENS3_IS1_SD_SH_NSA_IS1_EENSA_ISD_EEE18KeyValuePairTraitsESI_E15deallocateTableEPSE_i(0, i10);
  i12 = HEAP32[i5 >> 2] | 0;
  i13 = i7;
 } else {
  i12 = i6;
  i13 = i2 + 8 | 0;
 }
 i6 = HEAP32[i13 >> 2] | 0;
 i7 = i3 | 0;
 i3 = HEAP32[i7 >> 2] | 0;
 i10 = HEAP32[i3 + 16 >> 2] | 0;
 if (i10 >>> 0 > 127 >>> 0) {
  i14 = i10 >>> 7;
 } else {
  i14 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i3) | 0;
 }
 i3 = (i14 >>> 23) + ~i14 | 0;
 i10 = i3 << 12 ^ i3;
 i3 = i10 >>> 7 ^ i10;
 i10 = i3 << 2 ^ i3;
 i3 = i10 >>> 20 ^ i10 | 1;
 i10 = 0;
 i8 = i14;
 i14 = 0;
 while (1) {
  i9 = i8 & i6;
  i15 = i12 + (i9 * 24 & -1) | 0;
  i11 = HEAP32[i15 >> 2] | 0;
  i16 = i11;
  if ((i16 | 0) == (-1 | 0)) {
   i17 = i15;
  } else if ((i16 | 0) == 0) {
   break;
  } else {
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i11, HEAP32[i7 >> 2] | 0) | 0) {
    i18 = 18;
    break;
   } else {
    i17 = i10;
   }
  }
  i11 = (i14 | 0) == 0 ? i3 : i14;
  i10 = i17;
  i8 = i11 + i9 | 0;
  i14 = i11;
 }
 if ((i18 | 0) == 18) {
  i18 = (HEAP32[i5 >> 2] | 0) + ((HEAP32[i2 + 4 >> 2] | 0) * 24 & -1) | 0;
  i14 = i1;
  HEAP32[i14 >> 2] = i15;
  HEAP32[i14 + 4 >> 2] = i18;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i10 | 0) == 0) {
  i19 = i15;
 } else {
  __ZN3WTF26HashTableBucketInitializerILb0EE10initializeINS_7HashMapINS_6StringENS3_INS_6RefPtrIN7WebCore4NodeEEEiNS_7PtrHashIS8_EENS_10HashTraitsIS8_EENSB_IiEEEENS_10StringHashENSB_IS4_EENSB_ISE_EEE18KeyValuePairTraitsENS_12KeyValuePairIS4_SE_EEEEvRT0_(i10);
  i15 = i2 + 16 | 0;
  HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) - 1;
  i19 = i10;
 }
 i10 = HEAP32[i7 >> 2] | 0;
 if ((i10 | 0) != 0) {
  i7 = i10 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = i19 | 0;
 i15 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i10;
 do {
  if ((i15 | 0) != 0) {
   i10 = i15 | 0;
   i7 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i15);
    break;
   } else {
    HEAP32[i10 >> 2] = i7;
    break;
   }
  }
 } while (0);
 __ZN3WTF9HashTableINS_6RefPtrIN7WebCore4NodeEEENS_12KeyValuePairIS4_iEENS_24KeyValuePairKeyExtractorIS6_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSC_IiEEEESD_EaSERKSG_(i19 + 4 | 0, i4 | 0) | 0;
 i4 = i2 + 12 | 0;
 i15 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i15;
 i4 = i2 + 16 | 0;
 i7 = i2 + 4 | 0;
 i10 = HEAP32[i7 >> 2] | 0;
 if (((HEAP32[i4 >> 2] | 0) + i15 << 1 | 0) < (i10 | 0)) {
  i20 = i19;
  i21 = i10;
 } else {
  i18 = (i10 | 0) == 0;
  if (i18) {
   i22 = 8;
  } else {
   i14 = i10 << 1;
   i22 = (i15 * 6 & -1 | 0) < (i14 | 0) ? i10 : i14;
  }
  i14 = HEAP32[i5 >> 2] | 0;
  HEAP32[i7 >> 2] = i22;
  HEAP32[i13 >> 2] = i22 - 1;
  i13 = __ZN3WTF10fastMallocEj(i22 * 24 & -1) | 0;
  if ((i22 | 0) > 0) {
   i15 = 0;
   while (1) {
    __ZN3WTF26HashTableBucketInitializerILb0EE10initializeINS_7HashMapINS_6StringENS3_INS_6RefPtrIN7WebCore4NodeEEEiNS_7PtrHashIS8_EENS_10HashTraitsIS8_EENSB_IiEEEENS_10StringHashENSB_IS4_EENSB_ISE_EEE18KeyValuePairTraitsENS_12KeyValuePairIS4_SE_EEEEvRT0_(i13 + (i15 * 24 & -1) | 0);
    i15 = i15 + 1 | 0;
    if ((i15 | 0) >= (i22 | 0)) {
     break;
    }
   }
  }
  HEAP32[i5 >> 2] = i13;
  if (i18) {
   i23 = 0;
  } else {
   i18 = 0;
   i13 = 0;
   while (1) {
    i22 = i14 + (i18 * 24 & -1) | 0;
    i15 = HEAP32[i22 >> 2] | 0;
    if ((i15 | 0) == (-1 | 0) | (i15 | 0) == 0) {
     i24 = i13;
    } else {
     i15 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_7HashMapINS_6RefPtrIN7WebCore4NodeEEEiNS_7PtrHashIS7_EENS_10HashTraitsIS7_EENSA_IiEEEEEENS_24KeyValuePairKeyExtractorISE_EENS_10StringHashENS3_IS1_SD_SH_NSA_IS1_EENSA_ISD_EEE18KeyValuePairTraitsESI_E8reinsertEOSE_(i2, i22) | 0;
     i24 = (i22 | 0) == (i19 | 0) ? i15 : i13;
    }
    i15 = i18 + 1 | 0;
    if ((i15 | 0) == (i10 | 0)) {
     i23 = i24;
     break;
    } else {
     i18 = i15;
     i13 = i24;
    }
   }
  }
  HEAP32[i4 >> 2] = 0;
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_7HashMapINS_6RefPtrIN7WebCore4NodeEEEiNS_7PtrHashIS7_EENS_10HashTraitsIS7_EENSA_IiEEEEEENS_24KeyValuePairKeyExtractorISE_EENS_10StringHashENS3_IS1_SD_SH_NSA_IS1_EENSA_ISD_EEE18KeyValuePairTraitsESI_E15deallocateTableEPSE_i(i14, i10);
  i20 = i23;
  i21 = HEAP32[i7 >> 2] | 0;
 }
 i7 = (HEAP32[i5 >> 2] | 0) + (i21 * 24 & -1) | 0;
 i21 = i1;
 HEAP32[i21 >> 2] = i20;
 HEAP32[i21 + 4 >> 2] = i7;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore17InspectorDOMAgent20backendNodeIdForNodeEPNS_4NodeERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 104 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 32 | 0;
 i8 = i4 + 48 | 0;
 i9 = i4 + 56 | 0;
 i10 = i4 + 64 | 0;
 i11 = i4 + 80 | 0;
 i12 = i4 + 88 | 0;
 if ((i2 | 0) == 0) {
  i13 = 0;
  STACKTOP = i4;
  return i13 | 0;
 }
 i14 = i1 + 60 | 0;
 i15 = HEAP32[i14 >> 2] | 0;
 L4 : do {
  if ((i15 | 0) == 0) {
   i16 = 11;
  } else {
   i17 = HEAP32[i1 + 68 >> 2] | 0;
   i18 = i3 | 0;
   i19 = HEAP32[i18 >> 2] | 0;
   i20 = HEAP32[i19 + 16 >> 2] | 0;
   if (i20 >>> 0 > 127 >>> 0) {
    i21 = i20 >>> 7;
   } else {
    i21 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i19) | 0;
   }
   i19 = (i21 >>> 23) + ~i21 | 0;
   i20 = i19 << 12 ^ i19;
   i19 = i20 >>> 7 ^ i20;
   i20 = i19 << 2 ^ i19;
   i19 = i20 >>> 20 ^ i20 | 1;
   i20 = i21;
   i22 = 0;
   while (1) {
    i23 = i20 & i17;
    i24 = i15 + (i23 * 24 & -1) | 0;
    i25 = HEAP32[i24 >> 2] | 0;
    i26 = i25;
    if ((i26 | 0) == 0) {
     i16 = 11;
     break L4;
    } else if ((i26 | 0) != (-1 | 0)) {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i25, HEAP32[i18 >> 2] | 0) | 0) {
      break;
     }
    }
    i25 = (i22 | 0) == 0 ? i19 : i22;
    i20 = i25 + i23 | 0;
    i22 = i25;
   }
   if ((i24 | 0) == 0) {
    i16 = 11;
   }
  }
 } while (0);
 do {
  if ((i16 | 0) == 11) {
   _memset(i6 | 0, 0, 20) | 0;
   __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_7HashMapINS_6RefPtrIN7WebCore4NodeEEEiNS_7PtrHashIS7_EENS_10HashTraitsIS7_EENSA_IiEEEEEENS_24KeyValuePairKeyExtractorISE_EENS_10StringHashENS3_IS1_SD_SH_NSA_IS1_EENSA_ISD_EEE18KeyValuePairTraitsESI_E3addINS_17HashMapTranslatorISL_SH_EERKS1_SD_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_SE_SG_SH_SL_SI_EEEEOT0_OT1_(i7, i14 | 0, i3, i6);
   if ((HEAP8[i7 + 8 | 0] & 1) == 0) {
    __ZN3WTF9HashTableINS_6RefPtrIN7WebCore4NodeEEENS_12KeyValuePairIS4_iEENS_24KeyValuePairKeyExtractorIS6_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSC_IiEEEESD_EaSERKSG_((HEAP32[i7 >> 2] | 0) + 4 | 0, i6 | 0) | 0;
   }
   i24 = HEAP32[i6 >> 2] | 0;
   if ((i24 | 0) == 0) {
    break;
   }
   i15 = HEAP32[i6 + 4 >> 2] | 0;
   if ((i15 | 0) > 0) {
    i21 = 0;
    while (1) {
     i22 = HEAP32[i24 + (i21 << 3) >> 2] | 0;
     i20 = i22;
     do {
      if (!((i20 | 0) == (-1 | 0) | (i20 | 0) == 0)) {
       i19 = i22 + 8 | 0;
       i18 = i19 | 0;
       i17 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
       HEAP32[i18 >> 2] = i17;
       if ((i17 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
      }
     } while (0);
     i21 = i21 + 1 | 0;
     if ((i21 | 0) >= (i15 | 0)) {
      break;
     }
    }
   }
   __ZN3WTF8fastFreeEPv(i24);
  }
 } while (0);
 __ZN3WTF7HashMapINS_6StringENS0_INS_6RefPtrIN7WebCore4NodeEEEiNS_7PtrHashIS5_EENS_10HashTraitsIS5_EENS8_IiEEEENS_10StringHashENS8_IS1_EENS8_ISB_EEE4findERKS1_(i8, i14, i3);
 i14 = HEAP32[i8 >> 2] | 0;
 i8 = i14 + 4 | 0;
 i6 = HEAP32[i14 + 12 >> 2] | 0;
 i14 = HEAP32[i8 >> 2] | 0;
 i7 = i2;
 i15 = i7 + ~(i7 << 15) | 0;
 i7 = (i15 >>> 10 ^ i15) * 9 & -1;
 i15 = i7 >>> 6 ^ i7;
 i7 = i15 + ~(i15 << 11) | 0;
 i15 = i7 >>> 16 ^ i7;
 L32 : do {
  if ((i14 | 0) == 0) {
   i16 = 27;
  } else {
   i7 = i6 & i15;
   i21 = i14 + (i7 << 3) | 0;
   i22 = HEAP32[i21 >> 2] | 0;
   if ((i22 | 0) == (i2 | 0)) {
    i27 = i21;
   } else {
    i21 = (i15 >>> 23) + ~i15 | 0;
    i20 = i21 << 12 ^ i21;
    i21 = i20 >>> 7 ^ i20;
    i20 = i21 << 2 ^ i21;
    i21 = i20 >>> 20 ^ i20 | 1;
    i20 = 0;
    i19 = i7;
    i7 = i22;
    while (1) {
     if ((i7 | 0) == 0) {
      i16 = 27;
      break L32;
     }
     i22 = (i20 | 0) == 0 ? i21 : i20;
     i17 = i22 + i19 & i6;
     i18 = i14 + (i17 << 3) | 0;
     i25 = HEAP32[i18 >> 2] | 0;
     if ((i25 | 0) == (i2 | 0)) {
      i27 = i18;
      break;
     } else {
      i20 = i22;
      i19 = i17;
      i7 = i25;
     }
    }
   }
   if ((i27 | 0) == 0) {
    i16 = 27;
    break;
   }
   i7 = HEAP32[i27 + 4 >> 2] | 0;
   HEAP32[i9 >> 2] = i7;
   if ((i7 | 0) == 0) {
    i16 = 29;
   }
  }
 } while (0);
 if ((i16 | 0) == 27) {
  HEAP32[i9 >> 2] = 0;
  i16 = 29;
 }
 do {
  if ((i16 | 0) == 29) {
   i27 = i1 + 176 | 0;
   i14 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
   HEAP32[i27 >> 2] = i14;
   HEAP32[i9 >> 2] = i14;
   HEAP32[i5 >> 2] = i2;
   __ZN3WTF9HashTableINS_6RefPtrIN7WebCore4NodeEEENS_12KeyValuePairIS4_iEENS_24KeyValuePairKeyExtractorIS6_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSC_IiEEEESD_E3addINS_17HashMapTranslatorISF_SA_EERPS3_RiEENS_18HashTableAddResultINS_17HashTableIteratorIS4_S6_S8_SA_SF_SD_EEEEOT0_OT1_(i10, i8 | 0, i5, i9);
   if ((HEAP8[i10 + 8 | 0] & 1) == 0) {
    HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] = HEAP32[i9 >> 2];
   }
   i14 = i11 | 0;
   HEAP32[i14 >> 2] = i2;
   i27 = i11 + 4 | 0;
   i6 = HEAP32[i3 >> 2] | 0;
   HEAP32[i27 >> 2] = i6;
   if ((i6 | 0) != 0) {
    i15 = i6 | 0;
    HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 2;
   }
   __ZN3WTF9HashTableIiNS_12KeyValuePairIiNSt3__14pairIPN7WebCore4NodeENS_6StringEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7IntHashIjEENS_7HashMapIiS8_SD_NS_10HashTraitsIiEENSF_IS8_EEE18KeyValuePairTraitsESG_E3addINS_17HashMapTranslatorISJ_SD_EERKiS8_EENS_18HashTableAddResultINS_17HashTableIteratorIiS9_SB_SD_SJ_SG_EEEEOT0_OT1_(i12, i1 + 152 | 0, i9, i11);
   if ((HEAP8[i12 + 8 | 0] & 1) == 0) {
    i15 = HEAP32[i12 >> 2] | 0;
    HEAP32[i15 + 4 >> 2] = HEAP32[i14 >> 2];
    i14 = HEAP32[i27 >> 2] | 0;
    HEAP32[i27 >> 2] = 0;
    i6 = i15 + 8 | 0;
    i15 = HEAP32[i6 >> 2] | 0;
    HEAP32[i6 >> 2] = i14;
    if ((i15 | 0) == 0) {
     break;
    }
    i14 = i15 | 0;
    i6 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
    if ((i6 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i15);
     break;
    } else {
     HEAP32[i14 >> 2] = i6;
     break;
    }
   } else {
    i6 = HEAP32[i27 >> 2] | 0;
    if ((i6 | 0) == 0) {
     break;
    }
    i27 = i6 | 0;
    i14 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
    if ((i14 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i6);
     break;
    } else {
     HEAP32[i27 >> 2] = i14;
     break;
    }
   }
  }
 } while (0);
 i13 = HEAP32[i9 >> 2] | 0;
 STACKTOP = i4;
 return i13 | 0;
}
function __ZN7WebCore17InspectorDOMAgent24getEventListenersForNodeEPN3WTF6StringEiPKS2_RNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINS8_3DOM13EventListenerEEEEE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i7 = i6 | 0;
 i8 = i6 + 16 | 0;
 i9 = i6 + 24 | 0;
 i10 = __ZN3WTF10fastMallocEj(24) | 0;
 __ZN9Inspector18InspectorArrayBaseC2Ev(i10);
 HEAP32[i10 >> 2] = H_BASE + 1880;
 i11 = i5 | 0;
 i5 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = i10;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 4 | 0;
   i12 = i10 | 0;
   i13 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   if ((i13 | 0) != 0) {
    HEAP32[i12 >> 2] = i13;
    break;
   }
   i13 = i10 - 4 | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 63](i13);
  }
 } while (0);
 i5 = __ZN7WebCore17InspectorDOMAgent10assertNodeEPN3WTF6StringEi(i1, i2, i3) | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i3 = i7 | 0;
 HEAP32[i3 >> 2] = 0;
 i2 = i7 + 4 | 0;
 HEAP32[i2 >> 2] = 0;
 i13 = i7 + 8 | 0;
 HEAP32[i13 >> 2] = 0;
 __ZN7WebCore17InspectorDOMAgent17getEventListenersEPNS_4NodeERN3WTF6VectorINS_17EventListenerInfoELj0ENS3_15CrashOnOverflowEEEb(0, i5, i7, 1);
 i7 = HEAP32[i13 >> 2] | 0;
 i5 = (i7 | 0) == 0;
 do {
  if (!i5) {
   i10 = HEAP32[i3 >> 2] | 0;
   i12 = i8 | 0;
   i14 = 0;
   while (1) {
    if (i7 >>> 0 <= i14 >>> 0) {
     i15 = 12;
     break;
    }
    i16 = i10 + (i14 * 28 & -1) + 16 | 0;
    if ((HEAP32[i16 >> 2] | 0) != 0) {
     i17 = i10 + (i14 * 28 & -1) + 8 | 0;
     i18 = i10 + (i14 * 28 & -1) + 4 | 0;
     i19 = i10 + (i14 * 28 & -1) | 0;
     i20 = 0;
     while (1) {
      i21 = HEAP32[i17 >> 2] | 0;
      if ((HEAP8[i21 + (i20 << 3) + 4 | 0] & 1) != 0) {
       i22 = HEAP32[i11 >> 2] | 0;
       __ZN7WebCore17InspectorDOMAgent27buildObjectForEventListenerERKNS_23RegisteredEventListenerERKN3WTF12AtomicStringEPNS_4NodeEPKNS4_6StringE(i8, i1, i21 + (i20 << 3) | 0, i18, HEAP32[i19 >> 2] | 0, i4);
       i21 = HEAP32[i12 >> 2] | 0;
       HEAP32[i12 >> 2] = 0;
       i23 = i21 | 0;
       i21 = i22 + 12 | 0;
       i24 = i22 + 20 | 0;
       i25 = HEAP32[i24 >> 2] | 0;
       if ((i25 | 0) == (HEAP32[i22 + 16 >> 2] | 0)) {
        __ZN3WTF6VectorINS_6RefPtrIN9Inspector14InspectorValueEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i21, i25 + 1 | 0);
        HEAP32[(HEAP32[i21 >> 2] | 0) + (HEAP32[i24 >> 2] << 2) >> 2] = i23;
       } else {
        HEAP32[(HEAP32[i21 >> 2] | 0) + (i25 << 2) >> 2] = i23;
       }
       HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 1;
      }
      i20 = i20 + 1 | 0;
      if (i20 >>> 0 >= (HEAP32[i16 >> 2] | 0) >>> 0) {
       break;
      }
     }
    }
    i14 = i14 + 1 | 0;
    if (i14 >>> 0 >= i7 >>> 0) {
     break;
    }
   }
   if ((i15 | 0) == 12) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
   L31 : do {
    if (i5) {
     i26 = 0;
    } else {
     i14 = HEAP32[i3 >> 2] | 0;
     i12 = i9 | 0;
     i10 = i7;
     while (1) {
      i16 = i10 - 1 | 0;
      if (i7 >>> 0 <= i16 >>> 0) {
       break;
      }
      i20 = i14 + (i16 * 28 & -1) + 16 | 0;
      if ((HEAP32[i20 >> 2] | 0) != 0) {
       i19 = i14 + (i16 * 28 & -1) + 8 | 0;
       i18 = i14 + (i16 * 28 & -1) + 4 | 0;
       i17 = i14 + (i16 * 28 & -1) | 0;
       i24 = 0;
       while (1) {
        i23 = HEAP32[i19 >> 2] | 0;
        if ((HEAP8[i23 + (i24 << 3) + 4 | 0] & 1) == 0) {
         i25 = HEAP32[i11 >> 2] | 0;
         __ZN7WebCore17InspectorDOMAgent27buildObjectForEventListenerERKNS_23RegisteredEventListenerERKN3WTF12AtomicStringEPNS_4NodeEPKNS4_6StringE(i9, i1, i23 + (i24 << 3) | 0, i18, HEAP32[i17 >> 2] | 0, i4);
         i23 = HEAP32[i12 >> 2] | 0;
         HEAP32[i12 >> 2] = 0;
         i21 = i23 | 0;
         i23 = i25 + 12 | 0;
         i22 = i25 + 20 | 0;
         i27 = HEAP32[i22 >> 2] | 0;
         if ((i27 | 0) == (HEAP32[i25 + 16 >> 2] | 0)) {
          __ZN3WTF6VectorINS_6RefPtrIN9Inspector14InspectorValueEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i23, i27 + 1 | 0);
          HEAP32[(HEAP32[i23 >> 2] | 0) + (HEAP32[i22 >> 2] << 2) >> 2] = i21;
         } else {
          HEAP32[(HEAP32[i23 >> 2] | 0) + (i27 << 2) >> 2] = i21;
         }
         HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
        }
        i24 = i24 + 1 | 0;
        if (i24 >>> 0 >= (HEAP32[i20 >> 2] | 0) >>> 0) {
         break;
        }
       }
      }
      if ((i16 | 0) == 0) {
       i26 = i7;
       break L31;
      } else {
       i10 = i16;
      }
     }
     __ZN3WTF15CrashOnOverflow10overflowedEv();
    }
   } while (0);
   if ((i26 | 0) == 0) {
    break;
   }
   i10 = HEAP32[i3 >> 2] | 0;
   i12 = i10 + (i26 * 28 & -1) | 0;
   i14 = i10;
   while (1) {
    i10 = i14 + 16 | 0;
    i20 = HEAP32[i10 >> 2] | 0;
    i24 = i14 + 8 | 0;
    if ((i20 | 0) != 0) {
     i17 = HEAP32[i24 >> 2] | 0;
     i18 = i17 + (i20 << 3) | 0;
     i20 = i17;
     while (1) {
      i17 = HEAP32[i20 >> 2] | 0;
      do {
       if ((i17 | 0) != 0) {
        i19 = i17 + 4 | 0;
        i22 = i19 | 0;
        i21 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
        if ((i21 | 0) != 0) {
         HEAP32[i22 >> 2] = i21;
         break;
        }
        i21 = i19 - 4 | 0;
        if ((i21 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 63](i21);
       }
      } while (0);
      i20 = i20 + 8 | 0;
      if ((i20 | 0) == (i18 | 0)) {
       break;
      }
     }
     HEAP32[i10 >> 2] = 0;
    }
    i18 = HEAP32[i24 >> 2] | 0;
    if (!((i14 + 20 | 0) == (i18 | 0) | (i18 | 0) == 0)) {
     HEAP32[i24 >> 2] = 0;
     HEAP32[i14 + 12 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i18);
    }
    i18 = HEAP32[i14 + 4 >> 2] | 0;
    do {
     if ((i18 | 0) != 0) {
      i20 = i18 | 0;
      i17 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
      if ((i17 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i18);
       break;
      } else {
       HEAP32[i20 >> 2] = i17;
       break;
      }
     }
    } while (0);
    i14 = i14 + 28 | 0;
    if ((i14 | 0) == (i12 | 0)) {
     break;
    }
   }
   HEAP32[i13 >> 2] = 0;
  }
 } while (0);
 i13 = HEAP32[i3 >> 2] | 0;
 if ((i13 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 HEAP32[i3 >> 2] = 0;
 HEAP32[i2 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i13);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore17InspectorDOMAgent24pushChildNodesToFrontendEii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 HEAP32[i5 >> 2] = i2;
 if ((i2 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i9 = i1 + 92 | 0;
 __ZN3WTF7HashMapIiPN7WebCore4NodeENS_7IntHashIjEENS_10HashTraitsIiEENS6_IS3_EEE4findERKi(i6, i9, i5);
 i5 = HEAP32[i6 >> 2] | 0;
 if ((i5 | 0) == ((HEAP32[i9 >> 2] | 0) + (HEAP32[i1 + 96 >> 2] << 3) | 0)) {
  STACKTOP = i4;
  return;
 }
 i9 = HEAP32[i5 + 4 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i5 = i9;
 do {
  if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 76 >> 2] & 1](i9) | 0) != 1) {
   if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 76 >> 2] & 1](i9) | 0) == 9) {
    break;
   }
   if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 76 >> 2] & 1](i9) | 0) == 11) {
    break;
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 i5 = HEAP32[i1 + 120 >> 2] | 0;
 i6 = HEAP32[i1 + 112 >> 2] | 0;
 i10 = ~(i2 << 15) + i2 | 0;
 i11 = (i10 >>> 10 ^ i10) * 9 & -1;
 i10 = i11 >>> 6 ^ i11;
 i11 = i10 + ~(i10 << 11) | 0;
 i10 = i11 >>> 16 ^ i11;
 L15 : do {
  if ((i6 | 0) == 0) {
   i12 = 0;
  } else {
   i11 = i5 & i10;
   i13 = i6 + (i11 << 3) | 0;
   i14 = HEAP32[i13 >> 2] | 0;
   if ((i14 | 0) == (i2 | 0)) {
    i15 = i13;
   } else {
    i13 = (i10 >>> 23) + ~i10 | 0;
    i16 = i13 << 12 ^ i13;
    i13 = i16 >>> 7 ^ i16;
    i16 = i13 << 2 ^ i13;
    i13 = i16 >>> 20 ^ i16 | 1;
    i16 = 0;
    i17 = i11;
    i11 = i14;
    while (1) {
     if ((i11 | 0) == 0) {
      i12 = 0;
      break L15;
     }
     i14 = (i16 | 0) == 0 ? i13 : i16;
     i18 = i14 + i17 & i5;
     i19 = i6 + (i18 << 3) | 0;
     i20 = HEAP32[i19 >> 2] | 0;
     if ((i20 | 0) == (i2 | 0)) {
      i15 = i19;
      break;
     } else {
      i16 = i14;
      i17 = i18;
      i11 = i20;
     }
    }
   }
   if ((i15 | 0) == 0) {
    i12 = 0;
    break;
   }
   i12 = HEAP32[i15 + 4 >> 2] | 0;
  }
 } while (0);
 i15 = HEAP32[i1 + 132 >> 2] | 0;
 L25 : do {
  if ((i15 | 0) != 0) {
   i6 = HEAP32[i1 + 140 >> 2] | 0;
   i5 = i6 & i10;
   i11 = i15 + (i5 << 2) | 0;
   i17 = HEAP32[i11 >> 2] | 0;
   if ((i17 | 0) == (i2 | 0)) {
    i21 = i11;
   } else {
    i11 = (i10 >>> 23) + ~i10 | 0;
    i16 = i11 << 12 ^ i11;
    i11 = i16 >>> 7 ^ i16;
    i16 = i11 << 2 ^ i11;
    i11 = i16 >>> 20 ^ i16 | 1;
    i16 = 0;
    i13 = i5;
    i5 = i17;
    while (1) {
     if ((i5 | 0) == 0) {
      break L25;
     }
     i17 = (i16 | 0) == 0 ? i11 : i16;
     i20 = i17 + i13 & i6;
     i18 = i15 + (i20 << 2) | 0;
     i14 = HEAP32[i18 >> 2] | 0;
     if ((i14 | 0) == (i2 | 0)) {
      i21 = i18;
      break;
     } else {
      i16 = i17;
      i13 = i20;
      i5 = i14;
     }
    }
   }
   if ((i21 | 0) == 0) {
    break;
   }
   if ((i3 | 0) < 2) {
    STACKTOP = i4;
    return;
   }
   i5 = i3 - 1 | 0;
   if ((HEAP32[i9 + 12 >> 2] & 2 | 0) == 0) {
    i22 = 0;
   } else {
    i22 = HEAP32[i9 + 36 >> 2] | 0;
   }
   if (__ZN7WebCore17InspectorDOMAgent12isWhitespaceEPNS_4NodeE(i22) | 0) {
    i13 = i22;
    while (1) {
     i16 = HEAP32[i13 + 28 >> 2] | 0;
     if (__ZN7WebCore17InspectorDOMAgent12isWhitespaceEPNS_4NodeE(i16) | 0) {
      i13 = i16;
     } else {
      i23 = i16;
      break;
     }
    }
   } else {
    i23 = i22;
   }
   if ((i23 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i13 = i12 + 8 | 0;
   i16 = i12 | 0;
   i6 = i23;
   while (1) {
    i11 = HEAP32[i13 >> 2] | 0;
    i14 = HEAP32[i16 >> 2] | 0;
    i20 = i6;
    i17 = i20 + ~(i20 << 15) | 0;
    i20 = (i17 >>> 10 ^ i17) * 9 & -1;
    i17 = i20 >>> 6 ^ i20;
    i20 = i17 + ~(i17 << 11) | 0;
    i17 = i20 >>> 16 ^ i20;
    L49 : do {
     if ((i14 | 0) == 0) {
      i24 = 0;
     } else {
      i20 = i11 & i17;
      i18 = i14 + (i20 << 3) | 0;
      i19 = HEAP32[i18 >> 2] | 0;
      if ((i19 | 0) == (i6 | 0)) {
       i25 = i18;
      } else {
       i18 = (i17 >>> 23) + ~i17 | 0;
       i26 = i18 << 12 ^ i18;
       i18 = i26 >>> 7 ^ i26;
       i26 = i18 << 2 ^ i18;
       i18 = i26 >>> 20 ^ i26 | 1;
       i26 = 0;
       i27 = i20;
       i20 = i19;
       while (1) {
        if ((i20 | 0) == 0) {
         i24 = 0;
         break L49;
        }
        i19 = (i26 | 0) == 0 ? i18 : i26;
        i28 = i19 + i27 & i11;
        i29 = i14 + (i28 << 3) | 0;
        i30 = HEAP32[i29 >> 2] | 0;
        if ((i30 | 0) == (i6 | 0)) {
         i25 = i29;
         break;
        } else {
         i26 = i19;
         i27 = i28;
         i20 = i30;
        }
       }
      }
      if ((i25 | 0) == 0) {
       i24 = 0;
       break;
      }
      i24 = HEAP32[i25 + 4 >> 2] | 0;
     }
    } while (0);
    __ZN7WebCore17InspectorDOMAgent24pushChildNodesToFrontendEii(i1, i24, i5);
    i14 = i6;
    while (1) {
     i14 = HEAP32[i14 + 28 >> 2] | 0;
     if (!(__ZN7WebCore17InspectorDOMAgent12isWhitespaceEPNS_4NodeE(i14) | 0)) {
      break;
     }
    }
    if ((i14 | 0) == 0) {
     break;
    } else {
     i6 = i14;
    }
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 __ZN7WebCore17InspectorDOMAgent30buildArrayForContainerChildrenEPNS_4NodeEiPN3WTF7HashMapINS3_6RefPtrIS1_EEiNS3_7PtrHashIS6_EENS3_10HashTraitsIS6_EENS9_IiEEEE(i7, i1, i9, i3, i12);
 i12 = i7 | 0;
 i7 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = 0;
 i12 = HEAP32[i1 + 28 >> 2] | 0;
 i1 = i8 | 0;
 HEAP32[i1 >> 2] = i7;
 __ZN9Inspector30InspectorDOMFrontendDispatcher13setChildNodesEiN3WTF10PassRefPtrINS_11TypeBuilder5ArrayINS3_3DOM4NodeEEEEE(i12, i2, i8);
 i8 = HEAP32[i1 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i1 = i8 + 4 | 0;
 i8 = i1 | 0;
 i2 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i8 >> 2] = i2;
  STACKTOP = i4;
  return;
 }
 i2 = i1 - 4 | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 63](i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore17InspectorDOMAgent16didInsertDOMNodeEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 if (__ZN7WebCore17InspectorDOMAgent12isWhitespaceEPNS_4NodeE(i2) | 0) {
  STACKTOP = i3;
  return;
 }
 i6 = i1 + 40 | 0;
 __ZN7WebCore17InspectorDOMAgent6unbindEPNS_4NodeEPN3WTF7HashMapINS3_6RefPtrIS1_EEiNS3_7PtrHashIS6_EENS3_10HashTraitsIS6_EENS9_IiEEEE(i1, i2, i6);
 i7 = HEAP32[i2 + 16 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i8 = i7 | 0;
 i9 = i1 + 48 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 i11 = i6 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 i13 = i7;
 i14 = i13 + ~(i13 << 15) | 0;
 i13 = (i14 >>> 10 ^ i14) * 9 & -1;
 i14 = i13 >>> 6 ^ i13;
 i13 = i14 + ~(i14 << 11) | 0;
 i14 = i13 >>> 16 ^ i13;
 if ((i12 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i13 = i10 & i14;
 i15 = i12 + (i13 << 3) | 0;
 i16 = HEAP32[i15 >> 2] | 0;
 L10 : do {
  if ((i16 | 0) == (i8 | 0)) {
   i17 = i15;
  } else {
   i18 = (i14 >>> 23) + ~i14 | 0;
   i19 = i18 << 12 ^ i18;
   i18 = i19 >>> 7 ^ i19;
   i19 = i18 << 2 ^ i18;
   i18 = i19 >>> 20 ^ i19 | 1;
   i19 = 0;
   i20 = i13;
   i21 = i16;
   while (1) {
    if ((i21 | 0) == 0) {
     break;
    }
    i22 = (i19 | 0) == 0 ? i18 : i19;
    i23 = i22 + i20 & i10;
    i24 = i12 + (i23 << 3) | 0;
    i25 = HEAP32[i24 >> 2] | 0;
    if ((i25 | 0) == (i8 | 0)) {
     i17 = i24;
     break L10;
    } else {
     i19 = i22;
     i20 = i23;
     i21 = i25;
    }
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 if ((i17 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i12 = HEAP32[i17 + 4 >> 2] | 0;
 if ((i12 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i17 = HEAP32[i1 + 132 >> 2] | 0;
 L23 : do {
  if ((i17 | 0) != 0) {
   i10 = HEAP32[i1 + 140 >> 2] | 0;
   i16 = i12 + ~(i12 << 15) | 0;
   i13 = (i16 >>> 10 ^ i16) * 9 & -1;
   i16 = i13 >>> 6 ^ i13;
   i13 = i16 + ~(i16 << 11) | 0;
   i16 = i13 >>> 16 ^ i13;
   i13 = i10 & i16;
   i14 = i17 + (i13 << 2) | 0;
   i15 = HEAP32[i14 >> 2] | 0;
   if ((i15 | 0) == (i12 | 0)) {
    i26 = i14;
   } else {
    i14 = (i16 >>> 23) + ~i16 | 0;
    i16 = i14 << 12 ^ i14;
    i14 = i16 >>> 7 ^ i16;
    i16 = i14 << 2 ^ i14;
    i14 = i16 >>> 20 ^ i16 | 1;
    i16 = 0;
    i21 = i13;
    i13 = i15;
    while (1) {
     if ((i13 | 0) == 0) {
      break L23;
     }
     i15 = (i16 | 0) == 0 ? i14 : i16;
     i20 = i15 + i21 & i10;
     i19 = i17 + (i20 << 2) | 0;
     i18 = HEAP32[i19 >> 2] | 0;
     if ((i18 | 0) == (i12 | 0)) {
      i26 = i19;
      break;
     } else {
      i16 = i15;
      i21 = i20;
      i13 = i18;
     }
    }
   }
   if ((i26 | 0) == 0) {
    break;
   } else {
    i27 = i2;
   }
   while (1) {
    i27 = HEAP32[i27 + 24 >> 2] | 0;
    if (!(__ZN7WebCore17InspectorDOMAgent12isWhitespaceEPNS_4NodeE(i27) | 0)) {
     break;
    }
   }
   L34 : do {
    if ((i27 | 0) == 0) {
     i28 = 0;
    } else {
     i13 = HEAP32[i9 >> 2] | 0;
     i21 = HEAP32[i11 >> 2] | 0;
     i16 = i27;
     i10 = i16 + ~(i16 << 15) | 0;
     i16 = (i10 >>> 10 ^ i10) * 9 & -1;
     i10 = i16 >>> 6 ^ i16;
     i16 = i10 + ~(i10 << 11) | 0;
     i10 = i16 >>> 16 ^ i16;
     if ((i21 | 0) == 0) {
      i28 = 0;
      break;
     }
     i16 = i13 & i10;
     i14 = i21 + (i16 << 3) | 0;
     i18 = HEAP32[i14 >> 2] | 0;
     if ((i18 | 0) == (i27 | 0)) {
      i29 = i14;
     } else {
      i14 = (i10 >>> 23) + ~i10 | 0;
      i10 = i14 << 12 ^ i14;
      i14 = i10 >>> 7 ^ i10;
      i10 = i14 << 2 ^ i14;
      i14 = i10 >>> 20 ^ i10 | 1;
      i10 = 0;
      i20 = i16;
      i16 = i18;
      while (1) {
       if ((i16 | 0) == 0) {
        i28 = 0;
        break L34;
       }
       i18 = (i10 | 0) == 0 ? i14 : i10;
       i15 = i18 + i20 & i13;
       i19 = i21 + (i15 << 3) | 0;
       i25 = HEAP32[i19 >> 2] | 0;
       if ((i25 | 0) == (i27 | 0)) {
        i29 = i19;
        break;
       } else {
        i10 = i18;
        i20 = i15;
        i16 = i25;
       }
      }
     }
     if ((i29 | 0) == 0) {
      i28 = 0;
      break;
     }
     i28 = HEAP32[i29 + 4 >> 2] | 0;
    }
   } while (0);
   __ZN7WebCore17InspectorDOMAgent18buildObjectForNodeEPNS_4NodeEiPN3WTF7HashMapINS3_6RefPtrIS1_EEiNS3_7PtrHashIS6_EENS3_10HashTraitsIS6_EENS9_IiEEEE(i4, i1, i2, 0, i6);
   i16 = i4 | 0;
   i20 = HEAP32[i16 >> 2] | 0;
   HEAP32[i16 >> 2] = 0;
   i16 = HEAP32[i1 + 28 >> 2] | 0;
   i10 = i5 | 0;
   HEAP32[i10 >> 2] = i20;
   __ZN9Inspector30InspectorDOMFrontendDispatcher17childNodeInsertedEiiN3WTF10PassRefPtrINS_11TypeBuilder3DOM4NodeEEE(i16, i12, i28, i5);
   i16 = HEAP32[i10 >> 2] | 0;
   if ((i16 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   i10 = i16 + 4 | 0;
   i16 = i10 | 0;
   i20 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
   if ((i20 | 0) != 0) {
    HEAP32[i16 >> 2] = i20;
    STACKTOP = i3;
    return;
   }
   i20 = i10 - 4 | 0;
   if ((i20 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] & 63](i20);
   STACKTOP = i3;
   return;
  }
 } while (0);
 i5 = HEAP32[i1 + 28 >> 2] | 0;
 if ((HEAP32[i7 + 12 >> 2] & 2 | 0) == 0) {
  i30 = 0;
 } else {
  i30 = HEAP32[i8 + 36 >> 2] | 0;
 }
 if (__ZN7WebCore17InspectorDOMAgent12isWhitespaceEPNS_4NodeE(i30) | 0) {
  i8 = i30;
  while (1) {
   i7 = HEAP32[i8 + 28 >> 2] | 0;
   if (__ZN7WebCore17InspectorDOMAgent12isWhitespaceEPNS_4NodeE(i7) | 0) {
    i8 = i7;
   } else {
    i31 = i7;
    break;
   }
  }
 } else {
  i31 = i30;
 }
 if ((i31 | 0) == 0) {
  i32 = 0;
 } else {
  i30 = 0;
  i8 = i31;
  while (1) {
   i31 = i8;
   while (1) {
    i31 = HEAP32[i31 + 28 >> 2] | 0;
    if (!(__ZN7WebCore17InspectorDOMAgent12isWhitespaceEPNS_4NodeE(i31) | 0)) {
     break;
    }
   }
   i7 = i30 + 1 | 0;
   if ((i31 | 0) == 0) {
    i32 = i7;
    break;
   } else {
    i30 = i7;
    i8 = i31;
   }
  }
 }
 __ZN9Inspector30InspectorDOMFrontendDispatcher21childNodeCountUpdatedEii(i5, i12, i32);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore28RevalidateStyleAttributeTask7onTimerEPNS_5TimerIS0_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i3 | 0;
 HEAP32[i5 >> 2] = 0;
 i6 = i3 + 4 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i3 + 8 | 0;
 HEAP32[i7 >> 2] = 0;
 i8 = i1 + 64 | 0;
 i9 = i8 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 i11 = i1 + 68 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 i13 = i10 + (i12 << 2) | 0;
 L1 : do {
  if ((HEAP32[i1 + 76 >> 2] | 0) != 0) {
   L3 : do {
    if ((i12 | 0) == 0) {
     i14 = i10;
    } else {
     i15 = i10;
     while (1) {
      i16 = HEAP32[i15 >> 2] | 0;
      if (!((i16 | 0) == (-1 | 0) | (i16 | 0) == 0)) {
       i14 = i15;
       break L3;
      }
      i15 = i15 + 4 | 0;
      if ((i15 | 0) == (i13 | 0)) {
       break L1;
      }
     }
    }
   } while (0);
   if ((i14 | 0) == (i13 | 0)) {
    break;
   }
   i15 = i4;
   i16 = i14;
   i17 = 0;
   i18 = 0;
   i19 = 0;
   i20 = 0;
   L9 : while (1) {
    i21 = HEAP32[i16 >> 2] | 0;
    HEAP32[i4 >> 2] = i21;
    if ((i17 | 0) == (i18 | 0)) {
     i22 = i18 + 1 | 0;
     do {
      if (i19 >>> 0 > i4 >>> 0) {
       i23 = 11;
      } else {
       if ((i19 + (i18 << 2) | 0) >>> 0 <= i4 >>> 0) {
        i23 = 11;
        break;
       }
       i24 = i15 - i19 >> 2;
       i25 = i22 + (i18 >>> 2) | 0;
       i26 = i25 >>> 0 > 16 >>> 0 ? i25 : 16;
       i25 = i26 >>> 0 > i22 >>> 0 ? i26 : i22;
       do {
        if (i18 >>> 0 < i25 >>> 0) {
         if (i25 >>> 0 > 1073741823 >>> 0) {
          i23 = 20;
          break L9;
         }
         i26 = __ZN3WTF18fastMallocGoodSizeEj(i25 << 2) | 0;
         i27 = i26 >>> 2;
         HEAP32[i6 >> 2] = i27;
         i28 = __ZN3WTF10fastMallocEj(i26) | 0;
         i26 = i28;
         HEAP32[i5 >> 2] = i26;
         i29 = i19;
         _memcpy(i28 | 0, i29 | 0, i18 << 2) | 0;
         if ((i19 | 0) == 0) {
          i30 = i27;
          i31 = i27;
          i32 = i26;
          break;
         }
         if ((i26 | 0) == (i19 | 0)) {
          HEAP32[i5 >> 2] = 0;
          HEAP32[i6 >> 2] = 0;
          i33 = 0;
          i34 = 0;
         } else {
          i33 = i27;
          i34 = i26;
         }
         __ZN3WTF8fastFreeEPv(i29);
         i30 = i33;
         i31 = i33;
         i32 = i34;
        } else {
         i30 = i18;
         i31 = i20;
         i32 = i19;
        }
       } while (0);
       i35 = i32 + (i24 << 2) | 0;
       i36 = i32;
       i37 = i30;
       i38 = i31;
      }
     } while (0);
     do {
      if ((i23 | 0) == 11) {
       i23 = 0;
       i25 = i20 + 1 + (i20 >>> 2) | 0;
       i29 = i25 >>> 0 > 16 >>> 0 ? i25 : 16;
       i25 = i29 >>> 0 > i22 >>> 0 ? i29 : i22;
       if (i20 >>> 0 >= i25 >>> 0) {
        i35 = i4;
        i36 = i19;
        i37 = i20;
        i38 = i20;
        break;
       }
       if (i25 >>> 0 > 1073741823 >>> 0) {
        i23 = 13;
        break L9;
       }
       i29 = __ZN3WTF18fastMallocGoodSizeEj(i25 << 2) | 0;
       i25 = i29 >>> 2;
       HEAP32[i6 >> 2] = i25;
       i26 = __ZN3WTF10fastMallocEj(i29) | 0;
       i29 = i26;
       HEAP32[i5 >> 2] = i29;
       i27 = i19;
       _memcpy(i26 | 0, i27 | 0, i18 << 2) | 0;
       if ((i19 | 0) == 0) {
        i35 = i4;
        i36 = i29;
        i37 = i25;
        i38 = i25;
        break;
       }
       if ((i29 | 0) == (i19 | 0)) {
        HEAP32[i5 >> 2] = 0;
        HEAP32[i6 >> 2] = 0;
        i39 = 0;
        i40 = 0;
       } else {
        i39 = i25;
        i40 = i29;
       }
       __ZN3WTF8fastFreeEPv(i27);
       i35 = i4;
       i36 = i40;
       i37 = i39;
       i38 = i39;
      }
     } while (0);
     HEAP32[i36 + (i18 << 2) >> 2] = HEAP32[i35 >> 2];
     i41 = HEAP32[i7 >> 2] | 0;
     i42 = i37;
     i43 = i36;
     i44 = i38;
    } else {
     HEAP32[i19 + (i17 << 2) >> 2] = i21;
     i41 = HEAP32[i7 >> 2] | 0;
     i42 = i18;
     i43 = i19;
     i44 = i20;
    }
    i22 = i41 + 1 | 0;
    HEAP32[i7 >> 2] = i22;
    i27 = i16 + 4 | 0;
    if ((i27 | 0) == (i13 | 0)) {
     break L1;
    } else {
     i45 = i27;
    }
    while (1) {
     i27 = HEAP32[i45 >> 2] | 0;
     if (!((i27 | 0) == (-1 | 0) | (i27 | 0) == 0)) {
      break;
     }
     i27 = i45 + 4 | 0;
     if ((i27 | 0) == (i13 | 0)) {
      break L1;
     } else {
      i45 = i27;
     }
    }
    if ((i45 | 0) == (i13 | 0)) {
     break L1;
    } else {
     i16 = i45;
     i17 = i22;
     i18 = i42;
     i19 = i43;
     i20 = i44;
    }
   }
   if ((i23 | 0) == 13) {
    _WTFCrash();
   } else if ((i23 | 0) == 20) {
    _WTFCrash();
   }
  }
 } while (0);
 __ZN7WebCore17InspectorDOMAgent25styleAttributeInvalidatedERKN3WTF6VectorIPNS_7ElementELj0ENS1_15CrashOnOverflowEEE(HEAP32[i1 >> 2] | 0, i3);
 i3 = HEAP32[i9 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i9 = HEAP32[i11 >> 2] | 0;
  if ((i9 | 0) > 0) {
   i11 = 0;
   while (1) {
    i1 = HEAP32[i3 + (i11 << 2) >> 2] | 0;
    i23 = i1;
    do {
     if (!((i23 | 0) == (-1 | 0) | (i23 | 0) == 0)) {
      i44 = i1 + 8 | 0;
      i43 = i44 | 0;
      i42 = (HEAP32[i43 >> 2] | 0) - 1 | 0;
      HEAP32[i43 >> 2] = i42;
      if ((i42 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i44 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i44 - 8 | 0);
     }
    } while (0);
    i11 = i11 + 1 | 0;
    if ((i11 | 0) >= (i9 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i3);
  _memset(i8 | 0, 0, 16) | 0;
 }
 if ((HEAP32[i7 >> 2] | 0) != 0) {
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
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6VectorINS_6RefPtrIN7WebCore4NodeEEELj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorISA_EENS_10StringHashENS_7HashMapIS1_S9_SD_NS_10HashTraitsIS1_EENSF_IS9_EEE18KeyValuePairTraitsESG_E3addINS_17HashMapTranslatorISJ_SD_EERKS1_S9_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_SA_SC_SD_SJ_SG_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = i2 + 4 | 0;
  i8 = HEAP32[i7 >> 2] | 0;
  if ((i8 | 0) == 0) {
   i9 = 8;
   i10 = 0;
  } else {
   i11 = i8 << 1;
   i9 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i11 | 0) ? i8 : i11;
   i10 = i8;
  }
  HEAP32[i7 >> 2] = i9;
  i7 = i2 + 8 | 0;
  HEAP32[i7 >> 2] = i9 - 1;
  i8 = __ZN3WTF10fastMallocEj(i9 << 4) | 0;
  if ((i9 | 0) > 0) {
   i11 = 0;
   while (1) {
    _memset(i8 + (i11 << 4) | 0, 0, 16) | 0;
    i11 = i11 + 1 | 0;
    if ((i11 | 0) >= (i9 | 0)) {
     break;
    }
   }
  }
  HEAP32[i5 >> 2] = i8;
  if ((i10 | 0) != 0) {
   i8 = 0;
   while (1) {
    i9 = i8 << 4 | 0;
    i11 = HEAP32[i9 >> 2] | 0;
    if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
     __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6VectorINS_6RefPtrIN7WebCore4NodeEEELj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorISA_EENS_10StringHashENS_7HashMapIS1_S9_SD_NS_10HashTraitsIS1_EENSF_IS9_EEE18KeyValuePairTraitsESG_E8reinsertEOSA_(i2, i9) | 0;
    }
    i8 = i8 + 1 | 0;
    if ((i8 | 0) == (i10 | 0)) {
     break;
    }
   }
  }
  HEAP32[i2 + 16 >> 2] = 0;
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6VectorINS_6RefPtrIN7WebCore4NodeEEELj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorISA_EENS_10StringHashENS_7HashMapIS1_S9_SD_NS_10HashTraitsIS1_EENSF_IS9_EEE18KeyValuePairTraitsESG_E15deallocateTableEPSA_i(0, i10);
  i12 = HEAP32[i5 >> 2] | 0;
  i13 = i7;
 } else {
  i12 = i6;
  i13 = i2 + 8 | 0;
 }
 i6 = HEAP32[i13 >> 2] | 0;
 i7 = i3 | 0;
 i3 = HEAP32[i7 >> 2] | 0;
 i10 = HEAP32[i3 + 16 >> 2] | 0;
 if (i10 >>> 0 > 127 >>> 0) {
  i14 = i10 >>> 7;
 } else {
  i14 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i3) | 0;
 }
 i3 = (i14 >>> 23) + ~i14 | 0;
 i10 = i3 << 12 ^ i3;
 i3 = i10 >>> 7 ^ i10;
 i10 = i3 << 2 ^ i3;
 i3 = i10 >>> 20 ^ i10 | 1;
 i10 = 0;
 i8 = i14;
 i14 = 0;
 while (1) {
  i9 = i8 & i6;
  i15 = i12 + (i9 << 4) | 0;
  i11 = HEAP32[i15 >> 2] | 0;
  i16 = i11;
  if ((i16 | 0) == 0) {
   break;
  } else if ((i16 | 0) == (-1 | 0)) {
   i17 = i15;
  } else {
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i11, HEAP32[i7 >> 2] | 0) | 0) {
    i18 = 18;
    break;
   } else {
    i17 = i10;
   }
  }
  i11 = (i14 | 0) == 0 ? i3 : i14;
  i10 = i17;
  i8 = i11 + i9 | 0;
  i14 = i11;
 }
 if ((i18 | 0) == 18) {
  i18 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 4) | 0;
  i14 = i1;
  HEAP32[i14 >> 2] = i15;
  HEAP32[i14 + 4 >> 2] = i18;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i10 | 0) == 0) {
  i19 = i15;
 } else {
  _memset(i10 | 0, 0, 16) | 0;
  i15 = i2 + 16 | 0;
  HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) - 1;
  i19 = i10;
 }
 i10 = HEAP32[i7 >> 2] | 0;
 if ((i10 | 0) != 0) {
  i7 = i10 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = i19 | 0;
 i15 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i10;
 do {
  if ((i15 | 0) != 0) {
   i10 = i15 | 0;
   i7 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i15);
    break;
   } else {
    HEAP32[i10 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i15 = i19 + 12 | 0;
 i7 = i4 + 8 | 0;
 i10 = HEAP32[i15 >> 2] | 0;
 HEAP32[i15 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i7 >> 2] = i10;
 i10 = i19 + 4 | 0;
 i7 = i4 | 0;
 i15 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i7 >> 2] = i15;
 i15 = i19 + 8 | 0;
 i7 = i4 + 4 | 0;
 i4 = HEAP32[i15 >> 2] | 0;
 HEAP32[i15 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i7 >> 2] = i4;
 i4 = i2 + 12 | 0;
 i7 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i7;
 i4 = i2 + 16 | 0;
 i15 = i2 + 4 | 0;
 i10 = HEAP32[i15 >> 2] | 0;
 if (((HEAP32[i4 >> 2] | 0) + i7 << 1 | 0) < (i10 | 0)) {
  i20 = i19;
  i21 = i10;
 } else {
  i18 = (i10 | 0) == 0;
  if (i18) {
   i22 = 8;
  } else {
   i14 = i10 << 1;
   i22 = (i7 * 6 & -1 | 0) < (i14 | 0) ? i10 : i14;
  }
  i14 = HEAP32[i5 >> 2] | 0;
  HEAP32[i15 >> 2] = i22;
  HEAP32[i13 >> 2] = i22 - 1;
  i13 = __ZN3WTF10fastMallocEj(i22 << 4) | 0;
  if ((i22 | 0) > 0) {
   i7 = 0;
   while (1) {
    _memset(i13 + (i7 << 4) | 0, 0, 16) | 0;
    i7 = i7 + 1 | 0;
    if ((i7 | 0) >= (i22 | 0)) {
     break;
    }
   }
  }
  HEAP32[i5 >> 2] = i13;
  if (i18) {
   i23 = 0;
  } else {
   i18 = 0;
   i13 = 0;
   while (1) {
    i22 = i14 + (i18 << 4) | 0;
    i7 = HEAP32[i22 >> 2] | 0;
    if ((i7 | 0) == (-1 | 0) | (i7 | 0) == 0) {
     i24 = i13;
    } else {
     i7 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6VectorINS_6RefPtrIN7WebCore4NodeEEELj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorISA_EENS_10StringHashENS_7HashMapIS1_S9_SD_NS_10HashTraitsIS1_EENSF_IS9_EEE18KeyValuePairTraitsESG_E8reinsertEOSA_(i2, i22) | 0;
     i24 = (i22 | 0) == (i19 | 0) ? i7 : i13;
    }
    i7 = i18 + 1 | 0;
    if ((i7 | 0) == (i10 | 0)) {
     i23 = i24;
     break;
    } else {
     i18 = i7;
     i13 = i24;
    }
   }
  }
  HEAP32[i4 >> 2] = 0;
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6VectorINS_6RefPtrIN7WebCore4NodeEEELj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorISA_EENS_10StringHashENS_7HashMapIS1_S9_SD_NS_10HashTraitsIS1_EENSF_IS9_EEE18KeyValuePairTraitsESG_E15deallocateTableEPSA_i(i14, i10);
  i20 = i23;
  i21 = HEAP32[i15 >> 2] | 0;
 }
 i15 = (HEAP32[i5 >> 2] | 0) + (i21 << 4) | 0;
 i21 = i1;
 HEAP32[i21 >> 2] = i20;
 HEAP32[i21 + 4 >> 2] = i15;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore17InspectorDOMAgent11nodeForPathERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 24 | 0;
 i7 = i3 + 32 | 0;
 i8 = HEAP32[i1 + 180 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i9 = 0;
  STACKTOP = i3;
  return i9 | 0;
 }
 i1 = i8 | 0;
 i8 = i4 | 0;
 HEAP32[i8 >> 2] = 0;
 i10 = i4 + 4 | 0;
 HEAP32[i10 >> 2] = 0;
 i11 = i4 + 8 | 0;
 HEAP32[i11 >> 2] = 0;
 __ZN3WTF6StringC1EPKc(i5, H_BASE + 776 | 0);
 __ZNK3WTF6String5splitERKS0_bRNS_6VectorIS0_Lj0ENS_15CrashOnOverflowEEE(i2, i5, 0, i4);
 i4 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i5 = i4 | 0;
   i2 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i5 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i4 | 0) == 0) {
   i12 = 0;
  } else {
   i2 = i7 | 0;
   i5 = 0;
   i13 = i1;
   i14 = i4;
   while (1) {
    if (i5 >>> 0 >= (i14 - 1 | 0) >>> 0) {
     i15 = i13;
     i16 = i14;
     break;
    }
    HEAP8[i6] = 1;
    if (i14 >>> 0 <= i5 >>> 0) {
     i17 = 10;
     break;
    }
    i18 = __ZNK3WTF6String6toUIntEPb((HEAP32[i8 >> 2] | 0) + (i5 << 2) | 0, i6) | 0;
    if ((HEAP8[i6] & 1) == 0) {
     i17 = 44;
     break;
    }
    i19 = i13 + 12 | 0;
    if ((HEAP32[i19 >> 2] & 2 | 0) == 0) {
     i20 = 0;
    } else {
     i20 = HEAP32[i13 + 36 >> 2] | 0;
    }
    if (__ZN7WebCore17InspectorDOMAgent12isWhitespaceEPNS_4NodeE(i20) | 0) {
     i21 = i20;
     while (1) {
      i22 = HEAP32[i21 + 28 >> 2] | 0;
      if (__ZN7WebCore17InspectorDOMAgent12isWhitespaceEPNS_4NodeE(i22) | 0) {
       i21 = i22;
      } else {
       i23 = i22;
       break;
      }
     }
    } else {
     i23 = i20;
    }
    if ((i23 | 0) == 0) {
     i24 = 0;
    } else {
     i21 = 0;
     i22 = i23;
     while (1) {
      i25 = i22;
      while (1) {
       i25 = HEAP32[i25 + 28 >> 2] | 0;
       if (!(__ZN7WebCore17InspectorDOMAgent12isWhitespaceEPNS_4NodeE(i25) | 0)) {
        break;
       }
      }
      i26 = i21 + 1 | 0;
      if ((i25 | 0) == 0) {
       i24 = i26;
       break;
      } else {
       i21 = i26;
       i22 = i25;
      }
     }
    }
    if (i18 >>> 0 >= i24 >>> 0) {
     i17 = 44;
     break;
    }
    if ((HEAP32[i19 >> 2] & 2 | 0) == 0) {
     i27 = 0;
    } else {
     i27 = HEAP32[i13 + 36 >> 2] | 0;
    }
    if (__ZN7WebCore17InspectorDOMAgent12isWhitespaceEPNS_4NodeE(i27) | 0) {
     i22 = i27;
     while (1) {
      i21 = HEAP32[i22 + 28 >> 2] | 0;
      if (__ZN7WebCore17InspectorDOMAgent12isWhitespaceEPNS_4NodeE(i21) | 0) {
       i22 = i21;
      } else {
       i28 = i21;
       break;
      }
     }
    } else {
     i28 = i27;
    }
    i22 = i5 | 1;
    if ((HEAP32[i11 >> 2] | 0) >>> 0 <= i22 >>> 0) {
     i17 = 26;
     break;
    }
    i19 = HEAP32[(HEAP32[i8 >> 2] | 0) + (i22 << 2) >> 2] | 0;
    i22 = (i19 | 0) == 0;
    if (!i22) {
     i21 = i19 | 0;
     HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 2;
    }
    i21 = (i28 | 0) != 0;
    if (i21 & (i18 | 0) != 0) {
     i26 = i28;
     i29 = 0;
     while (1) {
      i30 = i26;
      while (1) {
       i30 = HEAP32[i30 + 28 >> 2] | 0;
       if (!(__ZN7WebCore17InspectorDOMAgent12isWhitespaceEPNS_4NodeE(i30) | 0)) {
        break;
       }
      }
      i25 = i29 + 1 | 0;
      i31 = (i30 | 0) != 0;
      if (i31 & i25 >>> 0 < i18 >>> 0) {
       i26 = i30;
       i29 = i25;
      } else {
       i32 = i30;
       i33 = i31;
       break;
      }
     }
    } else {
     i32 = i28;
     i33 = i21;
    }
    do {
     if (i33) {
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i32 >> 2] | 0) + 64 >> 2] & 31](i7, i32);
      i29 = (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i2 >> 2] | 0, i19) | 0) ^ 1;
      i26 = HEAP32[i2 >> 2] | 0;
      if ((i26 | 0) == 0) {
       i34 = i29;
       break;
      }
      i18 = i26 | 0;
      i31 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
      if ((i31 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i26);
       i34 = i29;
       break;
      } else {
       HEAP32[i18 >> 2] = i31;
       i34 = i29;
       break;
      }
     } else {
      i34 = 1;
     }
    } while (0);
    i21 = i34 ? i13 : i32;
    do {
     if (!i22) {
      i29 = i19 | 0;
      i31 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
      if ((i31 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i19);
       break;
      } else {
       HEAP32[i29 >> 2] = i31;
       break;
      }
     }
    } while (0);
    if (i34) {
     i17 = 44;
     break;
    }
    i5 = i5 + 2 | 0;
    i13 = i21;
    i14 = HEAP32[i11 >> 2] | 0;
   }
   if ((i17 | 0) == 44) {
    i15 = 0;
    i16 = HEAP32[i11 >> 2] | 0;
   } else if ((i17 | 0) == 10) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
    return 0;
   } else if ((i17 | 0) == 26) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
    return 0;
   }
   if ((i16 | 0) == 0) {
    i12 = i15;
    break;
   }
   i14 = HEAP32[i8 >> 2] | 0;
   i13 = i14 + (i16 << 2) | 0;
   i5 = i14;
   while (1) {
    i14 = HEAP32[i5 >> 2] | 0;
    do {
     if ((i14 | 0) != 0) {
      i2 = i14 | 0;
      i19 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
      if ((i19 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i14);
       break;
      } else {
       HEAP32[i2 >> 2] = i19;
       break;
      }
     }
    } while (0);
    i5 = i5 + 4 | 0;
    if ((i5 | 0) == (i13 | 0)) {
     break;
    }
   }
   HEAP32[i11 >> 2] = 0;
   i12 = i15;
  }
 } while (0);
 i15 = HEAP32[i8 >> 2] | 0;
 if ((i15 | 0) == 0) {
  i9 = i12;
  STACKTOP = i3;
  return i9 | 0;
 }
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i15);
 i9 = i12;
 STACKTOP = i3;
 return i9 | 0;
}
function __ZN7WebCore17InspectorDOMAgent6unbindEPNS_4NodeEPN3WTF7HashMapINS3_6RefPtrIS1_EEiNS3_7PtrHashIS6_EENS3_10HashTraitsIS6_EENS9_IiEEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = HEAP32[i3 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i9 = i2;
 i10 = i9 + ~(i9 << 15) | 0;
 i9 = (i10 >>> 10 ^ i10) * 9 & -1;
 i10 = i9 >>> 6 ^ i9;
 i9 = i10 + ~(i10 << 11) | 0;
 i10 = i9 >>> 16 ^ i9;
 L1 : do {
  if ((i8 | 0) != 0) {
   i9 = i7 & i10;
   i11 = i8 + (i9 << 3) | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   if ((i12 | 0) == (i2 | 0)) {
    i13 = i11;
   } else {
    i11 = (i10 >>> 23) + ~i10 | 0;
    i14 = i11 << 12 ^ i11;
    i11 = i14 >>> 7 ^ i14;
    i14 = i11 << 2 ^ i11;
    i11 = i14 >>> 20 ^ i14 | 1;
    i14 = 0;
    i15 = i9;
    i9 = i12;
    while (1) {
     if ((i9 | 0) == 0) {
      break L1;
     }
     i12 = (i14 | 0) == 0 ? i11 : i14;
     i16 = i12 + i15 & i7;
     i17 = i8 + (i16 << 3) | 0;
     i18 = HEAP32[i17 >> 2] | 0;
     if ((i18 | 0) == (i2 | 0)) {
      i13 = i17;
      break;
     } else {
      i14 = i12;
      i15 = i16;
      i9 = i18;
     }
    }
   }
   if ((i13 | 0) == 0) {
    break;
   }
   i9 = HEAP32[i13 + 4 >> 2] | 0;
   HEAP32[i6 >> 2] = i9;
   if ((i9 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i9 = i1 + 92 | 0;
   __ZN3WTF7HashMapIiPN7WebCore4NodeENS_7IntHashIjEENS_10HashTraitsIiEENS6_IS3_EEE4findERKi(i5, i9, i6);
   i15 = HEAP32[i5 >> 2] | 0;
   i14 = i9 | 0;
   i11 = i1 + 96 | 0;
   do {
    if ((i15 | 0) != ((HEAP32[i9 >> 2] | 0) + (HEAP32[i11 >> 2] << 3) | 0)) {
     HEAP32[i15 >> 2] = -1;
     i18 = i1 + 108 | 0;
     HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
     i18 = i1 + 104 | 0;
     i16 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
     HEAP32[i18 >> 2] = i16;
     i18 = HEAP32[i11 >> 2] | 0;
     if (!((i16 * 6 & -1 | 0) < (i18 | 0) & (i18 | 0) > 8)) {
      break;
     }
     __ZN3WTF9HashTableIiNS_12KeyValuePairIiPN7WebCore4NodeEEENS_24KeyValuePairKeyExtractorIS5_EENS_7IntHashIjEENS_7HashMapIiS4_S9_NS_10HashTraitsIiEENSB_IS4_EEE18KeyValuePairTraitsESC_E6rehashEiPS5_(i14, (i18 | 0) / 2 & -1, 0) | 0;
    }
   } while (0);
   do {
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 120 >> 2] & 1](i2) | 0) {
     i14 = __ZNK7WebCore21HTMLFrameOwnerElement15contentDocumentEv(i2) | 0;
     i11 = HEAP32[i1 + 36 >> 2] | 0;
     if ((i11 | 0) != 0) {
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i11 >> 2] | 0) + 8 >> 2] & 31](i11, i14);
     }
     if ((i14 | 0) == 0) {
      break;
     }
     __ZN7WebCore17InspectorDOMAgent6unbindEPNS_4NodeEPN3WTF7HashMapINS3_6RefPtrIS1_EEiNS3_7PtrHashIS6_EENS3_10HashTraitsIS6_EENS9_IiEEEE(i1, i14 | 0, i3);
    }
   } while (0);
   i14 = i2 + 12 | 0;
   do {
    if ((HEAP32[i14 >> 2] & 4 | 0) != 0) {
     i11 = __ZNK7WebCore7Element10shadowRootEv(i2) | 0;
     if ((i11 | 0) == 0) {
      break;
     }
     __ZN7WebCore17InspectorDOMAgent6unbindEPNS_4NodeEPN3WTF7HashMapINS3_6RefPtrIS1_EEiNS3_7PtrHashIS6_EENS3_10HashTraitsIS6_EENS9_IiEEEE(i1, i11 | 0, i3);
    }
   } while (0);
   __ZN3WTF7HashMapINS_6RefPtrIN7WebCore4NodeEEEiNS_7PtrHashIS4_EENS_10HashTraitsIS4_EENS7_IiEEE6removeEPS3_(i3, i2) | 0;
   i11 = HEAP32[i1 + 36 >> 2] | 0;
   if ((i11 | 0) != 0) {
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i11 >> 2] | 0) + 12 >> 2] & 31](i11, i2);
   }
   i11 = i1 + 132 | 0;
   i15 = HEAP32[i11 >> 2] | 0;
   if ((i15 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i9 = HEAP32[i1 + 140 >> 2] | 0;
   i18 = HEAP32[i6 >> 2] | 0;
   i16 = i18 + ~(i18 << 15) | 0;
   i12 = (i16 >>> 10 ^ i16) * 9 & -1;
   i16 = i12 >>> 6 ^ i12;
   i12 = i16 + ~(i16 << 11) | 0;
   i16 = i12 >>> 16 ^ i12;
   i12 = i16 & i9;
   i17 = i15 + (i12 << 2) | 0;
   i19 = HEAP32[i17 >> 2] | 0;
   L34 : do {
    if ((i19 | 0) == (i18 | 0)) {
     i20 = i17;
    } else {
     i21 = (i16 >>> 23) + ~i16 | 0;
     i22 = i21 << 12 ^ i21;
     i21 = i22 >>> 7 ^ i22;
     i22 = i21 << 2 ^ i21;
     i21 = i22 >>> 20 ^ i22 | 1;
     i22 = 0;
     i23 = i12;
     i24 = i19;
     while (1) {
      if ((i24 | 0) == 0) {
       break;
      }
      i25 = (i22 | 0) == 0 ? i21 : i22;
      i26 = i25 + i23 & i9;
      i27 = i15 + (i26 << 2) | 0;
      i28 = HEAP32[i27 >> 2] | 0;
      if ((i28 | 0) == (i18 | 0)) {
       i20 = i27;
       break L34;
      } else {
       i22 = i25;
       i23 = i26;
       i24 = i28;
      }
     }
     STACKTOP = i4;
     return;
    }
   } while (0);
   if ((i20 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   __ZN3WTF7HashSetIiNS_7IntHashIjEENS_10HashTraitsIiEEE6removeERKi(i11, i6) | 0;
   if ((HEAP32[i14 >> 2] & 2 | 0) == 0) {
    i29 = 0;
   } else {
    i29 = HEAP32[i2 + 36 >> 2] | 0;
   }
   if (__ZN7WebCore17InspectorDOMAgent12isWhitespaceEPNS_4NodeE(i29) | 0) {
    i18 = i29;
    while (1) {
     i15 = HEAP32[i18 + 28 >> 2] | 0;
     if (__ZN7WebCore17InspectorDOMAgent12isWhitespaceEPNS_4NodeE(i15) | 0) {
      i18 = i15;
     } else {
      i30 = i15;
      break;
     }
    }
   } else {
    i30 = i29;
   }
   if ((i30 | 0) == 0) {
    STACKTOP = i4;
    return;
   } else {
    i31 = i30;
   }
   while (1) {
    __ZN7WebCore17InspectorDOMAgent6unbindEPNS_4NodeEPN3WTF7HashMapINS3_6RefPtrIS1_EEiNS3_7PtrHashIS6_EENS3_10HashTraitsIS6_EENS9_IiEEEE(i1, i31, i3);
    i18 = i31;
    while (1) {
     i18 = HEAP32[i18 + 28 >> 2] | 0;
     if (!(__ZN7WebCore17InspectorDOMAgent12isWhitespaceEPNS_4NodeE(i18) | 0)) {
      break;
     }
    }
    if ((i18 | 0) == 0) {
     break;
    } else {
     i31 = i18;
    }
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 HEAP32[i6 >> 2] = 0;
 STACKTOP = i4;
 return;
}
function __ZN7WebCoreL10parseColorEPKN3WTF6RefPtrIN9Inspector15InspectorObjectEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, d27 = +0, d28 = +0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = i3 + 48 | 0;
 i11 = i3 + 56 | 0;
 i12 = i3 + 64 | 0;
 i13 = i3 + 72 | 0;
 i14 = i3 + 80 | 0;
 i15 = i3 + 88 | 0;
 do {
  if ((i2 | 0) != 0) {
   i16 = i2 | 0;
   i17 = HEAP32[i16 >> 2] | 0;
   if ((i17 | 0) == 0) {
    break;
   }
   __ZN3WTF6StringC1EPKc(i11, H_BASE + 184 | 0);
   __ZNK9Inspector19InspectorObjectBase3getERKN3WTF6StringE(i7, i17 | 0, i11);
   i17 = i7 | 0;
   i18 = HEAP32[i17 >> 2] | 0;
   HEAP32[i17 >> 2] = 0;
   do {
    if ((i18 | 0) == 0) {
     i19 = 0;
    } else {
     i17 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i18 >> 2] | 0) + 20 >> 2] & 31](i18, i8) | 0;
     i20 = i18 + 4 | 0;
     i21 = i20 | 0;
     i22 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
     if ((i22 | 0) != 0) {
      HEAP32[i21 >> 2] = i22;
      i19 = i17;
      break;
     }
     i22 = i20 - 4 | 0;
     if ((i22 | 0) == 0) {
      i19 = i17;
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i22 >> 2] | 0) + 4 >> 2] & 63](i22);
     i19 = i17;
    }
   } while (0);
   i18 = HEAP32[i11 >> 2] | 0;
   do {
    if ((i18 | 0) != 0) {
     i17 = i18 | 0;
     i22 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
     if ((i22 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i18);
      break;
     } else {
      HEAP32[i17 >> 2] = i22;
      break;
     }
    }
   } while (0);
   i18 = HEAP32[i16 >> 2] | 0;
   __ZN3WTF6StringC1EPKc(i12, H_BASE + 176 | 0);
   __ZNK9Inspector19InspectorObjectBase3getERKN3WTF6StringE(i6, i18, i12);
   i18 = i6 | 0;
   i22 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = 0;
   do {
    if ((i22 | 0) == 0) {
     i23 = 0;
    } else {
     i18 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i22 >> 2] | 0) + 20 >> 2] & 31](i22, i9) | 0;
     i17 = i22 + 4 | 0;
     i20 = i17 | 0;
     i21 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
     if ((i21 | 0) != 0) {
      HEAP32[i20 >> 2] = i21;
      i23 = i18;
      break;
     }
     i21 = i17 - 4 | 0;
     if ((i21 | 0) == 0) {
      i23 = i18;
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 63](i21);
     i23 = i18;
    }
   } while (0);
   i22 = i19 | i23;
   i18 = HEAP32[i12 >> 2] | 0;
   do {
    if ((i18 | 0) != 0) {
     i21 = i18 | 0;
     i17 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
     if ((i17 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i18);
      break;
     } else {
      HEAP32[i21 >> 2] = i17;
      break;
     }
    }
   } while (0);
   i18 = HEAP32[i16 >> 2] | 0;
   __ZN3WTF6StringC1EPKc(i13, H_BASE + 120 | 0);
   __ZNK9Inspector19InspectorObjectBase3getERKN3WTF6StringE(i5, i18, i13);
   i18 = i5 | 0;
   i17 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = 0;
   do {
    if ((i17 | 0) == 0) {
     i24 = 0;
    } else {
     i18 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i17 >> 2] | 0) + 20 >> 2] & 31](i17, i10) | 0;
     i21 = i17 + 4 | 0;
     i20 = i21 | 0;
     i25 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
     if ((i25 | 0) != 0) {
      HEAP32[i20 >> 2] = i25;
      i24 = i18;
      break;
     }
     i25 = i21 - 4 | 0;
     if ((i25 | 0) == 0) {
      i24 = i18;
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i25 >> 2] | 0) + 4 >> 2] & 63](i25);
     i24 = i18;
    }
   } while (0);
   i17 = i22 | i24;
   i18 = HEAP32[i13 >> 2] | 0;
   do {
    if ((i18 | 0) != 0) {
     i25 = i18 | 0;
     i21 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
     if ((i21 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i18);
      break;
     } else {
      HEAP32[i25 >> 2] = i21;
      break;
     }
    }
   } while (0);
   if (!i17) {
    HEAP32[i1 >> 2] = 0;
    HEAP8[i1 + 4 | 0] = 1;
    STACKTOP = i3;
    return;
   }
   i18 = HEAP32[i16 >> 2] | 0;
   __ZN3WTF6StringC1EPKc(i15, H_BASE + 112 | 0);
   __ZNK9Inspector19InspectorObjectBase3getERKN3WTF6StringE(i4, i18, i15);
   i18 = i4 | 0;
   i22 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = 0;
   do {
    if ((i22 | 0) == 0) {
     i26 = 0;
    } else {
     i18 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i22 >> 2] | 0) + 12 >> 2] & 31](i22, i14) | 0;
     i21 = i22 + 4 | 0;
     i25 = i21 | 0;
     i20 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
     if ((i20 | 0) != 0) {
      HEAP32[i25 >> 2] = i20;
      i26 = i18;
      break;
     }
     i20 = i21 - 4 | 0;
     if ((i20 | 0) == 0) {
      i26 = i18;
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] & 63](i20);
     i26 = i18;
    }
   } while (0);
   i22 = HEAP32[i15 >> 2] | 0;
   do {
    if ((i22 | 0) != 0) {
     i16 = i22 | 0;
     i17 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
     if ((i17 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i22);
      break;
     } else {
      HEAP32[i16 >> 2] = i17;
      break;
     }
    }
   } while (0);
   if (!i26) {
    HEAP32[i1 >> 2] = __ZN7WebCore7makeRGBEiii(HEAP32[i8 >> 2] | 0, HEAP32[i9 >> 2] | 0, HEAP32[i10 >> 2] | 0) | 0;
    HEAP8[i1 + 4 | 0] = 1;
    STACKTOP = i3;
    return;
   }
   d27 = +HEAPF64[i14 >> 3];
   do {
    if (d27 < +0) {
     HEAPF64[i14 >> 3] = +0;
     d28 = +0;
    } else {
     if (d27 <= +1) {
      d28 = d27;
      break;
     }
     HEAPF64[i14 >> 3] = +1;
     d28 = +1;
    }
   } while (0);
   HEAP32[i1 >> 2] = __ZN7WebCore8makeRGBAEiiii(HEAP32[i8 >> 2] | 0, HEAP32[i9 >> 2] | 0, HEAP32[i10 >> 2] | 0, ~~(d28 * +255)) | 0;
   HEAP8[i1 + 4 | 0] = 1;
   STACKTOP = i3;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 HEAP8[i1 + 4 | 0] = 1;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore17InspectorDOMAgent16didRemoveDOMNodeEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
 if (__ZN7WebCore17InspectorDOMAgent12isWhitespaceEPNS_4NodeE(i2) | 0) {
  return;
 }
 i3 = HEAP32[i2 + 16 >> 2] | 0;
 i4 = i1 + 40 | 0;
 i5 = i3 | 0;
 i6 = HEAP32[i4 >> 2] | 0;
 if ((i6 | 0) == 0) {
  return;
 }
 i7 = HEAP32[i1 + 48 >> 2] | 0;
 i8 = i3;
 i9 = i8 + ~(i8 << 15) | 0;
 i8 = (i9 >>> 10 ^ i9) * 9 & -1;
 i9 = i8 >>> 6 ^ i8;
 i8 = i9 + ~(i9 << 11) | 0;
 i9 = i8 >>> 16 ^ i8;
 i8 = i7 & i9;
 i10 = i6 + (i8 << 3) | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 i12 = (i11 | 0) == (i5 | 0);
 L7 : do {
  if (i12) {
   i13 = i10;
  } else {
   i14 = (i9 >>> 23) + ~i9 | 0;
   i15 = i14 << 12 ^ i14;
   i14 = i15 >>> 7 ^ i15;
   i15 = i14 << 2 ^ i14;
   i14 = i15 >>> 20 ^ i15 | 1;
   i15 = 0;
   i16 = i8;
   i17 = i11;
   while (1) {
    if ((i17 | 0) == 0) {
     break;
    }
    i18 = (i15 | 0) == 0 ? i14 : i15;
    i19 = i18 + i16 & i7;
    i20 = i6 + (i19 << 3) | 0;
    i21 = HEAP32[i20 >> 2] | 0;
    if ((i21 | 0) == (i5 | 0)) {
     i13 = i20;
     break L7;
    } else {
     i15 = i18;
     i16 = i19;
     i17 = i21;
    }
   }
   return;
  }
 } while (0);
 if ((i13 | 0) == 0) {
  return;
 }
 L17 : do {
  if (i12) {
   i22 = i10;
   i23 = 12;
  } else {
   i13 = (i9 >>> 23) + ~i9 | 0;
   i17 = i13 << 12 ^ i13;
   i13 = i17 >>> 7 ^ i17;
   i17 = i13 << 2 ^ i13;
   i13 = i17 >>> 20 ^ i17 | 1;
   i17 = 0;
   i16 = i8;
   i15 = i11;
   while (1) {
    if ((i15 | 0) == 0) {
     i24 = 0;
     break L17;
    }
    i14 = (i17 | 0) == 0 ? i13 : i17;
    i21 = i14 + i16 & i7;
    i19 = i6 + (i21 << 3) | 0;
    i18 = HEAP32[i19 >> 2] | 0;
    if ((i18 | 0) == (i5 | 0)) {
     i22 = i19;
     i23 = 12;
     break;
    } else {
     i17 = i14;
     i16 = i21;
     i15 = i18;
    }
   }
  }
 } while (0);
 do {
  if ((i23 | 0) == 12) {
   if ((i22 | 0) == 0) {
    i24 = 0;
    break;
   }
   i24 = HEAP32[i22 + 4 >> 2] | 0;
  }
 } while (0);
 i22 = HEAP32[i1 + 132 >> 2] | 0;
 L26 : do {
  if ((i22 | 0) == 0) {
   i23 = 20;
  } else {
   i11 = HEAP32[i1 + 140 >> 2] | 0;
   i8 = i24 + ~(i24 << 15) | 0;
   i9 = (i8 >>> 10 ^ i8) * 9 & -1;
   i8 = i9 >>> 6 ^ i9;
   i9 = i8 + ~(i8 << 11) | 0;
   i8 = i9 >>> 16 ^ i9;
   i9 = i11 & i8;
   i10 = i22 + (i9 << 2) | 0;
   i12 = HEAP32[i10 >> 2] | 0;
   if ((i12 | 0) == (i24 | 0)) {
    i25 = i10;
   } else {
    i10 = (i8 >>> 23) + ~i8 | 0;
    i8 = i10 << 12 ^ i10;
    i10 = i8 >>> 7 ^ i8;
    i8 = i10 << 2 ^ i10;
    i10 = i8 >>> 20 ^ i8 | 1;
    i8 = 0;
    i15 = i9;
    i9 = i12;
    while (1) {
     if ((i9 | 0) == 0) {
      i23 = 20;
      break L26;
     }
     i12 = (i8 | 0) == 0 ? i10 : i8;
     i16 = i12 + i15 & i11;
     i17 = i22 + (i16 << 2) | 0;
     i13 = HEAP32[i17 >> 2] | 0;
     if ((i13 | 0) == (i24 | 0)) {
      i25 = i17;
      break;
     } else {
      i8 = i12;
      i15 = i16;
      i9 = i13;
     }
    }
   }
   if ((i25 | 0) == 0) {
    i23 = 20;
    break;
   }
   i9 = HEAP32[i1 + 28 >> 2] | 0;
   i15 = i2;
   i8 = i15 + ~(i15 << 15) | 0;
   i15 = (i8 >>> 10 ^ i8) * 9 & -1;
   i8 = i15 >>> 6 ^ i15;
   i15 = i8 + ~(i8 << 11) | 0;
   i8 = i15 >>> 16 ^ i15;
   i15 = i7 & i8;
   i11 = i6 + (i15 << 3) | 0;
   i10 = HEAP32[i11 >> 2] | 0;
   L35 : do {
    if ((i10 | 0) == (i2 | 0)) {
     i26 = i11;
     i23 = 34;
    } else {
     i13 = (i8 >>> 23) + ~i8 | 0;
     i16 = i13 << 12 ^ i13;
     i13 = i16 >>> 7 ^ i16;
     i16 = i13 << 2 ^ i13;
     i13 = i16 >>> 20 ^ i16 | 1;
     i16 = 0;
     i12 = i15;
     i17 = i10;
     while (1) {
      if ((i17 | 0) == 0) {
       i27 = 0;
       break L35;
      }
      i18 = (i16 | 0) == 0 ? i13 : i16;
      i21 = i18 + i12 & i7;
      i14 = i6 + (i21 << 3) | 0;
      i19 = HEAP32[i14 >> 2] | 0;
      if ((i19 | 0) == (i2 | 0)) {
       i26 = i14;
       i23 = 34;
       break;
      } else {
       i16 = i18;
       i12 = i21;
       i17 = i19;
      }
     }
    }
   } while (0);
   do {
    if ((i23 | 0) == 34) {
     if ((i26 | 0) == 0) {
      i27 = 0;
      break;
     }
     i27 = HEAP32[i26 + 4 >> 2] | 0;
    }
   } while (0);
   __ZN9Inspector30InspectorDOMFrontendDispatcher16childNodeRemovedEii(i9, i24, i27);
  }
 } while (0);
 do {
  if ((i23 | 0) == 20) {
   if ((HEAP32[i3 + 12 >> 2] & 2 | 0) == 0) {
    i28 = 0;
   } else {
    i28 = HEAP32[i5 + 36 >> 2] | 0;
   }
   if (__ZN7WebCore17InspectorDOMAgent12isWhitespaceEPNS_4NodeE(i28) | 0) {
    i27 = i28;
    while (1) {
     i26 = HEAP32[i27 + 28 >> 2] | 0;
     if (__ZN7WebCore17InspectorDOMAgent12isWhitespaceEPNS_4NodeE(i26) | 0) {
      i27 = i26;
     } else {
      i29 = i26;
      break;
     }
    }
   } else {
    i29 = i28;
   }
   if ((i29 | 0) == 0) {
    break;
   } else {
    i30 = 0;
    i31 = i29;
   }
   while (1) {
    i27 = i31;
    while (1) {
     i27 = HEAP32[i27 + 28 >> 2] | 0;
     if (!(__ZN7WebCore17InspectorDOMAgent12isWhitespaceEPNS_4NodeE(i27) | 0)) {
      break;
     }
    }
    if ((i27 | 0) == 0) {
     break;
    } else {
     i30 = i30 + 1 | 0;
     i31 = i27;
    }
   }
   if ((i30 | 0) != 0) {
    break;
   }
   __ZN9Inspector30InspectorDOMFrontendDispatcher21childNodeCountUpdatedEii(HEAP32[i1 + 28 >> 2] | 0, i24, 0);
  }
 } while (0);
 __ZN7WebCore17InspectorDOMAgent6unbindEPNS_4NodeEPN3WTF7HashMapINS3_6RefPtrIS1_EEiNS3_7PtrHashIS6_EENS3_10HashTraitsIS6_EENS9_IiEEEE(i1, i2, i4);
 return;
}
function __ZN7WebCore17InspectorDOMAgentD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = i1 | 0;
 HEAP32[i2 >> 2] = H_BASE + 2112;
 HEAP32[i1 + 12 >> 2] = H_BASE + 2272;
 __ZN7WebCore17InspectorDOMAgent5resetEv(i1);
 i3 = HEAP32[i1 + 224 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN7WebCore9DOMEditorD1Ev(i3);
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 220 >> 2] | 0;
 if ((i3 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 63](i3);
 }
 i3 = HEAP32[i1 + 216 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 208 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 + 8 | 0;
   i5 = i4 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
  }
 } while (0);
 i3 = HEAP32[i1 + 204 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = HEAP32[i3 + 64 >> 2] | 0;
  if ((i4 | 0) != 0) {
   i6 = HEAP32[i3 + 68 >> 2] | 0;
   if ((i6 | 0) > 0) {
    i5 = 0;
    while (1) {
     i7 = HEAP32[i4 + (i5 << 2) >> 2] | 0;
     i8 = i7;
     do {
      if (!((i8 | 0) == (-1 | 0) | (i8 | 0) == 0)) {
       i9 = i7 + 8 | 0;
       i10 = i9 | 0;
       i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
       HEAP32[i10 >> 2] = i11;
       if ((i11 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
      }
     } while (0);
     i5 = i5 + 1 | 0;
     if ((i5 | 0) >= (i6 | 0)) {
      break;
     }
    }
   }
   __ZN3WTF8fastFreeEPv(i4);
  }
  __ZN7WebCore9TimerBaseD2Ev(i3 + 8 | 0);
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 184 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6VectorINS_6RefPtrIN7WebCore4NodeEEELj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorISA_EENS_10StringHashENS_7HashMapIS1_S9_SD_NS_10HashTraitsIS1_EENSF_IS9_EEE18KeyValuePairTraitsESG_E15deallocateTableEPSA_i(i3, HEAP32[i1 + 188 >> 2] | 0);
 }
 i3 = HEAP32[i1 + 180 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 + 8 | 0;
   i6 = i4 | 0;
   i5 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
  }
 } while (0);
 i3 = HEAP32[i1 + 152 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = HEAP32[i1 + 156 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i5 = 0;
   while (1) {
    do {
     if ((HEAP32[i3 + (i5 * 12 & -1) >> 2] | 0) != -1) {
      i6 = HEAP32[i3 + (i5 * 12 & -1) + 8 >> 2] | 0;
      if ((i6 | 0) == 0) {
       break;
      }
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
    i5 = i5 + 1 | 0;
    if ((i5 | 0) >= (i4 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 132 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 112 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 92 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = i1 + 80 | 0;
 if ((HEAP32[i1 + 88 >> 2] | 0) != 0) {
  __ZN3WTF6VectorINS_6OwnPtrINS_7HashMapINS_6RefPtrIN7WebCore4NodeEEEiNS_7PtrHashIS6_EENS_10HashTraitsIS6_EENS9_IiEEEEEELj0ENS_15CrashOnOverflowEE6shrinkEj(i3, 0);
 }
 i4 = i3 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 84 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 60 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_7HashMapINS_6RefPtrIN7WebCore4NodeEEEiNS_7PtrHashIS7_EENS_10HashTraitsIS7_EENSA_IiEEEEEENS_24KeyValuePairKeyExtractorISE_EENS_10StringHashENS3_IS1_SD_SH_NSA_IS1_EENSA_ISD_EEE18KeyValuePairTraitsESI_E15deallocateTableEPSE_i(i3, HEAP32[i1 + 64 >> 2] | 0);
 }
 i3 = HEAP32[i1 + 40 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = HEAP32[i1 + 44 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i5 = 0;
   while (1) {
    i8 = HEAP32[i3 + (i5 << 3) >> 2] | 0;
    i7 = i8;
    do {
     if (!((i7 | 0) == (-1 | 0) | (i7 | 0) == 0)) {
      i6 = i8 + 8 | 0;
      i9 = i6 | 0;
      i11 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
      HEAP32[i9 >> 2] = i11;
      if ((i11 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
     }
    } while (0);
    i5 = i5 + 1 | 0;
    if ((i5 | 0) >= (i4 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 + 4 | 0;
   i5 = i4 | 0;
   i8 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i5 >> 2] = i8;
    break;
   }
   i8 = i4 - 4 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 63](i8);
  }
 } while (0);
 i3 = i1 + 28 | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i8 | 0) != 0) {
  __ZdlPv(i8);
 }
 __ZN9Inspector36InspectorDOMBackendDispatcherHandlerD2Ev(i1 + 12 | 0);
 HEAP32[i2 >> 2] = H_BASE + 1680;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i8 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i8 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i8;
  return;
 }
}
function __ZN7WebCore17InspectorDOMAgentD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = i1 | 0;
 HEAP32[i2 >> 2] = H_BASE + 2112;
 HEAP32[i1 + 12 >> 2] = H_BASE + 2272;
 __ZN7WebCore17InspectorDOMAgent5resetEv(i1);
 i3 = HEAP32[i1 + 224 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN7WebCore9DOMEditorD1Ev(i3);
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 220 >> 2] | 0;
 if ((i3 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 63](i3);
 }
 i3 = HEAP32[i1 + 216 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 208 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 + 8 | 0;
   i5 = i4 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
  }
 } while (0);
 i3 = HEAP32[i1 + 204 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = HEAP32[i3 + 64 >> 2] | 0;
  if ((i4 | 0) != 0) {
   i6 = HEAP32[i3 + 68 >> 2] | 0;
   if ((i6 | 0) > 0) {
    i5 = 0;
    while (1) {
     i7 = HEAP32[i4 + (i5 << 2) >> 2] | 0;
     i8 = i7;
     do {
      if (!((i8 | 0) == (-1 | 0) | (i8 | 0) == 0)) {
       i9 = i7 + 8 | 0;
       i10 = i9 | 0;
       i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
       HEAP32[i10 >> 2] = i11;
       if ((i11 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
      }
     } while (0);
     i5 = i5 + 1 | 0;
     if ((i5 | 0) >= (i6 | 0)) {
      break;
     }
    }
   }
   __ZN3WTF8fastFreeEPv(i4);
  }
  __ZN7WebCore9TimerBaseD2Ev(i3 + 8 | 0);
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 184 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6VectorINS_6RefPtrIN7WebCore4NodeEEELj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorISA_EENS_10StringHashENS_7HashMapIS1_S9_SD_NS_10HashTraitsIS1_EENSF_IS9_EEE18KeyValuePairTraitsESG_E15deallocateTableEPSA_i(i3, HEAP32[i1 + 188 >> 2] | 0);
 }
 i3 = HEAP32[i1 + 180 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 + 8 | 0;
   i6 = i4 | 0;
   i5 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
  }
 } while (0);
 i3 = HEAP32[i1 + 152 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = HEAP32[i1 + 156 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i5 = 0;
   while (1) {
    do {
     if ((HEAP32[i3 + (i5 * 12 & -1) >> 2] | 0) != -1) {
      i6 = HEAP32[i3 + (i5 * 12 & -1) + 8 >> 2] | 0;
      if ((i6 | 0) == 0) {
       break;
      }
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
    i5 = i5 + 1 | 0;
    if ((i5 | 0) >= (i4 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 132 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 112 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 92 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = i1 + 80 | 0;
 if ((HEAP32[i1 + 88 >> 2] | 0) != 0) {
  __ZN3WTF6VectorINS_6OwnPtrINS_7HashMapINS_6RefPtrIN7WebCore4NodeEEEiNS_7PtrHashIS6_EENS_10HashTraitsIS6_EENS9_IiEEEEEELj0ENS_15CrashOnOverflowEE6shrinkEj(i3, 0);
 }
 i4 = i3 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 84 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 60 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_7HashMapINS_6RefPtrIN7WebCore4NodeEEEiNS_7PtrHashIS7_EENS_10HashTraitsIS7_EENSA_IiEEEEEENS_24KeyValuePairKeyExtractorISE_EENS_10StringHashENS3_IS1_SD_SH_NSA_IS1_EENSA_ISD_EEE18KeyValuePairTraitsESI_E15deallocateTableEPSE_i(i3, HEAP32[i1 + 64 >> 2] | 0);
 }
 i3 = HEAP32[i1 + 40 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = HEAP32[i1 + 44 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i5 = 0;
   while (1) {
    i8 = HEAP32[i3 + (i5 << 3) >> 2] | 0;
    i7 = i8;
    do {
     if (!((i7 | 0) == (-1 | 0) | (i7 | 0) == 0)) {
      i6 = i8 + 8 | 0;
      i9 = i6 | 0;
      i11 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
      HEAP32[i9 >> 2] = i11;
      if ((i11 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
     }
    } while (0);
    i5 = i5 + 1 | 0;
    if ((i5 | 0) >= (i4 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 + 4 | 0;
   i5 = i4 | 0;
   i8 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i5 >> 2] = i8;
    break;
   }
   i8 = i4 - 4 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 63](i8);
  }
 } while (0);
 i3 = i1 + 28 | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i8 | 0) != 0) {
  __ZdlPv(i8);
 }
 __ZN9Inspector36InspectorDOMBackendDispatcherHandlerD2Ev(i1 + 12 | 0);
 HEAP32[i2 >> 2] = H_BASE + 1680;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i8 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i8 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i8;
  return;
 }
}
function __ZN7WebCore17InspectorDOMAgent11setNodeNameEPN3WTF6StringEiRKS2_Pi(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 i11 = i6 + 32 | 0;
 i12 = i6 + 40 | 0;
 i13 = i6 + 48 | 0;
 i14 = i6 + 56 | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i8 >> 2] = i3;
 if ((i3 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i15 = i1 + 92 | 0;
 __ZN3WTF7HashMapIiPN7WebCore4NodeENS_7IntHashIjEENS_10HashTraitsIiEENS6_IS3_EEE4findERKi(i9, i15, i8);
 i8 = HEAP32[i9 >> 2] | 0;
 if ((i8 | 0) == ((HEAP32[i15 >> 2] | 0) + (HEAP32[i1 + 96 >> 2] << 3) | 0)) {
  STACKTOP = i6;
  return;
 }
 i15 = HEAP32[i8 + 4 >> 2] | 0;
 if ((i15 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i8 = i15 + 12 | 0;
 if ((HEAP32[i8 >> 2] & 4 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = HEAP32[(HEAP32[i15 + 20 >> 2] | 0) + 8 >> 2] | 0;
 i16 = HEAP32[(HEAP32[i9 >> 2] | 0) + 248 >> 2] | 0;
 i17 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i17 | 0) == 0) {
   i4 = i7 | 0;
   HEAP32[i4 >> 2] = 0;
   i18 = i4;
  } else {
   if ((HEAP32[i17 + 16 >> 2] & 16 | 0) == 0) {
    __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i7, i17);
    i18 = i7 | 0;
    break;
   } else {
    i4 = i7 | 0;
    HEAP32[i4 >> 2] = i17;
    i19 = i17 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 2;
    i18 = i4;
    break;
   }
  }
 } while (0);
 i17 = i12 | 0;
 HEAP32[i17 >> 2] = HEAP32[i18 >> 2];
 FUNCTION_TABLE_viiii[i16 & 63](i11, i9, i12, i10);
 i12 = i11 | 0;
 i11 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = 0;
 i12 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i17 = i12 | 0;
   i9 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i17 >> 2] = i9;
    break;
   }
  }
 } while (0);
 L26 : do {
  if ((HEAP32[i10 >> 2] | 0) == 0) {
   __ZN7WebCore7Element26cloneAttributesFromElementERKS0_(i11, i15);
   i12 = i15 + 36 | 0;
   i9 = i1 + 224 | 0;
   i17 = i11 | 0;
   i16 = i13 | 0;
   while (1) {
    if ((HEAP32[i8 >> 2] & 2 | 0) == 0) {
     break;
    }
    i18 = HEAP32[i12 >> 2] | 0;
    if ((i18 | 0) == 0) {
     break;
    }
    i7 = HEAP32[i9 >> 2] | 0;
    HEAP32[i16 >> 2] = i18;
    i4 = i18 + 8 | 0;
    HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
    i4 = __ZN7WebCore9DOMEditor12insertBeforeEPNS_4NodeEN3WTF10PassRefPtrIS1_EES2_PNS3_6StringE(i7, i17, i13, 0, i2) | 0;
    i7 = HEAP32[i16 >> 2] | 0;
    do {
     if ((i7 | 0) != 0) {
      i18 = i7 + 8 | 0;
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
    if (!i4) {
     break L26;
    }
   }
   i16 = HEAP32[i9 >> 2] | 0;
   i12 = HEAP32[i15 + 16 >> 2] | 0;
   i7 = i14 | 0;
   HEAP32[i7 >> 2] = i17;
   if ((i11 | 0) != 0) {
    i18 = i11 + 8 | 0;
    HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
   }
   i18 = __ZN7WebCore9DOMEditor12insertBeforeEPNS_4NodeEN3WTF10PassRefPtrIS1_EES2_PNS3_6StringE(i16, i12, i14, HEAP32[i15 + 28 >> 2] | 0, i2) | 0;
   i16 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i16 | 0) != 0) {
     i7 = i16 + 8 | 0;
     i20 = i7 | 0;
     i19 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
     HEAP32[i20 >> 2] = i19;
     if ((i19 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
    }
   } while (0);
   if (!i18) {
    break;
   }
   if (!(__ZN7WebCore9DOMEditor11removeChildEPNS_4NodeES2_PN3WTF6StringE(HEAP32[i9 >> 2] | 0, i12, i15, i2) | 0)) {
    break;
   }
   i16 = __ZN7WebCore17InspectorDOMAgent22pushNodePathToFrontendEPNS_4NodeE(i1, i17) | 0;
   HEAP32[i5 >> 2] = i16;
   i7 = HEAP32[i1 + 132 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   i19 = HEAP32[i1 + 140 >> 2] | 0;
   i20 = ~(i3 << 15) + i3 | 0;
   i21 = (i20 >>> 10 ^ i20) * 9 & -1;
   i20 = i21 >>> 6 ^ i21;
   i21 = i20 + ~(i20 << 11) | 0;
   i20 = i21 >>> 16 ^ i21;
   i21 = i19 & i20;
   i22 = i7 + (i21 << 2) | 0;
   i23 = HEAP32[i22 >> 2] | 0;
   if ((i23 | 0) == (i3 | 0)) {
    i24 = i22;
   } else {
    i22 = (i20 >>> 23) + ~i20 | 0;
    i20 = i22 << 12 ^ i22;
    i22 = i20 >>> 7 ^ i20;
    i20 = i22 << 2 ^ i22;
    i22 = i20 >>> 20 ^ i20 | 1;
    i20 = 0;
    i25 = i21;
    i21 = i23;
    while (1) {
     if ((i21 | 0) == 0) {
      break L26;
     }
     i23 = (i20 | 0) == 0 ? i22 : i20;
     i26 = i23 + i25 & i19;
     i27 = i7 + (i26 << 2) | 0;
     i28 = HEAP32[i27 >> 2] | 0;
     if ((i28 | 0) == (i3 | 0)) {
      i24 = i27;
      break;
     } else {
      i20 = i23;
      i25 = i26;
      i21 = i28;
     }
    }
   }
   if ((i24 | 0) == 0) {
    break;
   }
   __ZN7WebCore17InspectorDOMAgent24pushChildNodesToFrontendEii(i1, i16, 1);
  }
 } while (0);
 if ((i11 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i1 = i11 + 8 | 0;
 i11 = i1 | 0;
 i24 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
 HEAP32[i11 >> 2] = i24;
 if ((i24 | 0) >= 1) {
  STACKTOP = i6;
  return;
 }
 if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
  STACKTOP = i6;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore17InspectorDOMAgent13didCommitLoadEPNS_8DocumentE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZNK7WebCore8Document12ownerElementEv(i2) | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i2 = i1 + 40 | 0;
 i7 = i6 | 0;
 i8 = i1 + 48 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = i2 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 i12 = i6;
 i13 = i12 + ~(i12 << 15) | 0;
 i12 = (i13 >>> 10 ^ i13) * 9 & -1;
 i13 = i12 >>> 6 ^ i12;
 i12 = i13 + ~(i13 << 11) | 0;
 i13 = i12 >>> 16 ^ i12;
 if ((i11 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i12 = i9 & i13;
 i14 = i11 + (i12 << 3) | 0;
 i15 = HEAP32[i14 >> 2] | 0;
 L7 : do {
  if ((i15 | 0) == (i7 | 0)) {
   i16 = i14;
  } else {
   i17 = (i13 >>> 23) + ~i13 | 0;
   i18 = i17 << 12 ^ i17;
   i17 = i18 >>> 7 ^ i18;
   i18 = i17 << 2 ^ i17;
   i17 = i18 >>> 20 ^ i18 | 1;
   i18 = 0;
   i19 = i12;
   i20 = i15;
   while (1) {
    if ((i20 | 0) == 0) {
     break;
    }
    i21 = (i18 | 0) == 0 ? i17 : i18;
    i22 = i21 + i19 & i9;
    i23 = i11 + (i22 << 3) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    if ((i24 | 0) == (i7 | 0)) {
     i16 = i23;
     break L7;
    } else {
     i18 = i21;
     i19 = i22;
     i20 = i24;
    }
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 if ((i16 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i15 = HEAP32[i16 + 4 >> 2] | 0;
 if ((i15 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[(HEAP32[i6 + 20 >> 2] | 0) + 8 >> 2] | 0) == (i7 | 0)) {
  i16 = __ZNK7WebCore8Document12ownerElementEv(i6) | 0;
  i25 = i16;
  i26 = HEAP32[i8 >> 2] | 0;
  i27 = HEAP32[i10 >> 2] | 0;
 } else {
  i25 = HEAP32[i6 + 16 >> 2] | 0;
  i26 = i9;
  i27 = i11;
 }
 i11 = i25;
 i9 = i11 + ~(i11 << 15) | 0;
 i11 = (i9 >>> 10 ^ i9) * 9 & -1;
 i9 = i11 >>> 6 ^ i11;
 i11 = i9 + ~(i9 << 11) | 0;
 i9 = i11 >>> 16 ^ i11;
 L24 : do {
  if ((i27 | 0) == 0) {
   i28 = 0;
  } else {
   i11 = i9 & i26;
   i6 = i27 + (i11 << 3) | 0;
   i16 = HEAP32[i6 >> 2] | 0;
   if ((i16 | 0) == (i25 | 0)) {
    i29 = i6;
   } else {
    i6 = (i9 >>> 23) + ~i9 | 0;
    i12 = i6 << 12 ^ i6;
    i6 = i12 >>> 7 ^ i12;
    i12 = i6 << 2 ^ i6;
    i6 = i12 >>> 20 ^ i12 | 1;
    i12 = 0;
    i13 = i11;
    i11 = i16;
    while (1) {
     if ((i11 | 0) == 0) {
      i28 = 0;
      break L24;
     }
     i16 = (i12 | 0) == 0 ? i6 : i12;
     i14 = i16 + i13 & i26;
     i20 = i27 + (i14 << 3) | 0;
     i19 = HEAP32[i20 >> 2] | 0;
     if ((i19 | 0) == (i25 | 0)) {
      i29 = i20;
      break;
     } else {
      i12 = i16;
      i13 = i14;
      i11 = i19;
     }
    }
   }
   if ((i29 | 0) == 0) {
    i28 = 0;
    break;
   }
   i28 = HEAP32[i29 + 4 >> 2] | 0;
  }
 } while (0);
 i29 = i1 + 28 | 0;
 __ZN9Inspector30InspectorDOMFrontendDispatcher16childNodeRemovedEii(HEAP32[i29 >> 2] | 0, i28, i15);
 __ZN7WebCore17InspectorDOMAgent6unbindEPNS_4NodeEPN3WTF7HashMapINS3_6RefPtrIS1_EEiNS3_7PtrHashIS6_EENS3_10HashTraitsIS6_EENS9_IiEEEE(i1, i7, i2);
 __ZN7WebCore17InspectorDOMAgent18buildObjectForNodeEPNS_4NodeEiPN3WTF7HashMapINS3_6RefPtrIS1_EEiNS3_7PtrHashIS6_EENS3_10HashTraitsIS6_EENS9_IiEEEE(i4, i1, i7, 0, i2);
 i2 = i4 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i2 = i7;
 while (1) {
  i2 = HEAP32[i2 + 24 >> 2] | 0;
  if (!(__ZN7WebCore17InspectorDOMAgent12isWhitespaceEPNS_4NodeE(i2) | 0)) {
   break;
  }
 }
 L37 : do {
  if ((i2 | 0) == 0) {
   i30 = 0;
  } else {
   i7 = HEAP32[i8 >> 2] | 0;
   i1 = HEAP32[i10 >> 2] | 0;
   i15 = i2;
   i25 = i15 + ~(i15 << 15) | 0;
   i15 = (i25 >>> 10 ^ i25) * 9 & -1;
   i25 = i15 >>> 6 ^ i15;
   i15 = i25 + ~(i25 << 11) | 0;
   i25 = i15 >>> 16 ^ i15;
   if ((i1 | 0) == 0) {
    i30 = 0;
    break;
   }
   i15 = i7 & i25;
   i27 = i1 + (i15 << 3) | 0;
   i26 = HEAP32[i27 >> 2] | 0;
   if ((i26 | 0) == (i2 | 0)) {
    i31 = i27;
   } else {
    i27 = (i25 >>> 23) + ~i25 | 0;
    i25 = i27 << 12 ^ i27;
    i27 = i25 >>> 7 ^ i25;
    i25 = i27 << 2 ^ i27;
    i27 = i25 >>> 20 ^ i25 | 1;
    i25 = 0;
    i9 = i15;
    i15 = i26;
    while (1) {
     if ((i15 | 0) == 0) {
      i30 = 0;
      break L37;
     }
     i26 = (i25 | 0) == 0 ? i27 : i25;
     i11 = i26 + i9 & i7;
     i13 = i1 + (i11 << 3) | 0;
     i12 = HEAP32[i13 >> 2] | 0;
     if ((i12 | 0) == (i2 | 0)) {
      i31 = i13;
      break;
     } else {
      i25 = i26;
      i9 = i11;
      i15 = i12;
     }
    }
   }
   if ((i31 | 0) == 0) {
    i30 = 0;
    break;
   }
   i30 = HEAP32[i31 + 4 >> 2] | 0;
  }
 } while (0);
 i31 = HEAP32[i29 >> 2] | 0;
 i29 = i5 | 0;
 HEAP32[i29 >> 2] = i4;
 __ZN9Inspector30InspectorDOMFrontendDispatcher17childNodeInsertedEiiN3WTF10PassRefPtrINS_11TypeBuilder3DOM4NodeEEE(i31, i28, i30, i5);
 i5 = HEAP32[i29 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i29 = i5 + 4 | 0;
 i5 = i29 | 0;
 i30 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i30 | 0) != 0) {
  HEAP32[i5 >> 2] = i30;
  STACKTOP = i3;
  return;
 }
 i30 = i29 - 4 | 0;
 if ((i30 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i30 >> 2] | 0) + 4 >> 2] & 63](i30);
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
function __ZN7WebCore17InspectorDOMAgent17nodeAsScriptValueEPN3JSC9ExecStateEPNS_4NodeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 if (!(__ZN7WebCore23shouldAllowAccessToNodeEPN3JSC9ExecStateEPNS_4NodeE(i2, i3) | 0)) {
  i9 = HEAP32[(HEAP32[i2 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
  HEAP32[i1 >> 2] = __ZTVN10Deprecated11ScriptValueE + 8;
  if ((HEAP32[i9 + 20444 >> 2] | 0) != 0) {
   _WTFCrash();
  }
  i10 = i9 + 20440 | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  if ((i11 | 0) == 0) {
   __ZN3JSC9HandleSet4growEv(i9 + 20360 | 0);
   i12 = HEAP32[i10 >> 2] | 0;
  } else {
   i12 = i11;
  }
  i11 = i12 + 12 | 0;
  HEAP32[i10 >> 2] = HEAP32[i11 >> 2];
  HEAP32[i12 + 4 >> 2] = -6;
  HEAP32[i12 >> 2] = 0;
  i10 = i12 + 8 | 0;
  HEAP32[i10 >> 2] = 0;
  HEAP32[i11 >> 2] = 0;
  i13 = i9 + 20420 | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  HEAP32[i10 >> 2] = i9 + 20408;
  HEAP32[i11 >> 2] = i14;
  HEAP32[i13 >> 2] = i12;
  HEAP32[i14 + 8 >> 2] = i12;
  i14 = i12 | 0;
  HEAP32[i1 + 4 >> 2] = i14;
  i13 = i5 | 0;
  HEAP32[i13 >> 2] = 0;
  HEAP32[i13 + 4 >> 2] = -3;
  __ZN3JSC9HandleSet12writeBarrierEPNS_7JSValueERKS1_(HEAP32[(i12 & -4096) + 12 >> 2] | 0, i14, i5);
  i5 = HEAP32[i13 + 4 >> 2] | 0;
  i14 = i12 | 0;
  HEAP32[i14 >> 2] = HEAP32[i13 >> 2];
  HEAP32[i14 + 4 >> 2] = i5;
  STACKTOP = i4;
  return;
 }
 __ZN3JSC12JSLockHolderC1EPNS_9ExecStateE(i7, i2);
 i5 = HEAP32[i2 + 16 >> 2] | 0;
 i14 = HEAP32[(i5 & -65536) + 1076 >> 2] | 0;
 i13 = HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] | 0;
 i5 = i13;
 L11 : do {
  if ((i3 | 0) == 0) {
   HEAP32[i8 + 4 >> 2] = -3;
   HEAP32[i8 >> 2] = 0;
  } else {
   i12 = HEAP32[i13 + 656 >> 2] | 0;
   do {
    if ((HEAP8[i12 + 92 | 0] & 1) == 0) {
     i15 = 14;
    } else {
     i11 = HEAP32[i3 + 4 >> 2] | 0;
     if ((i11 | 0) == 0) {
      i15 = 14;
      break;
     }
     if ((HEAP32[i11 + 8 >> 2] & 3 | 0) != 0) {
      i15 = 14;
      break;
     }
     i9 = HEAP32[i11 >> 2] | 0;
     if ((i9 | 0) == 0) {
      i15 = 14;
      break;
     }
     i16 = i9 | 0;
     i15 = 23;
    }
   } while (0);
   L19 : do {
    if ((i15 | 0) == 14) {
     i9 = i3;
     i11 = HEAP32[i12 + 12 >> 2] | 0;
     i10 = HEAP32[i12 + 4 >> 2] | 0;
     i17 = i3;
     i18 = i17 + ~(i17 << 15) | 0;
     i17 = (i18 >>> 10 ^ i18) * 9 & -1;
     i18 = i17 >>> 6 ^ i17;
     i17 = i18 + ~(i18 << 11) | 0;
     i18 = i17 >>> 16 ^ i17;
     if ((i10 | 0) == 0) {
      break;
     }
     i17 = i11 & i18;
     i19 = i10 + (i17 << 3) | 0;
     i20 = HEAP32[i19 >> 2] | 0;
     if ((i20 | 0) == (i9 | 0)) {
      i21 = i19;
     } else {
      i19 = (i18 >>> 23) + ~i18 | 0;
      i18 = i19 << 12 ^ i19;
      i19 = i18 >>> 7 ^ i18;
      i18 = i19 << 2 ^ i19;
      i19 = i18 >>> 20 ^ i18 | 1;
      i18 = 0;
      i22 = i17;
      i17 = i20;
      while (1) {
       if ((i17 | 0) == 0) {
        break L19;
       }
       i20 = (i18 | 0) == 0 ? i19 : i18;
       i23 = i20 + i22 & i11;
       i24 = i10 + (i23 << 3) | 0;
       i25 = HEAP32[i24 >> 2] | 0;
       if ((i25 | 0) == (i9 | 0)) {
        i21 = i24;
        break;
       } else {
        i18 = i20;
        i22 = i23;
        i17 = i25;
       }
      }
     }
     if ((i21 | 0) == 0) {
      break;
     }
     i17 = HEAP32[i21 + 4 >> 2] | 0;
     if ((i17 | 0) == 0) {
      break;
     }
     if ((HEAP32[i17 + 8 >> 2] & 3 | 0) != 0) {
      break;
     }
     i16 = HEAP32[i17 >> 2] | 0;
     i15 = 23;
    }
   } while (0);
   do {
    if ((i15 | 0) == 23) {
     if ((i16 | 0) == 0) {
      break;
     }
     HEAP32[i8 + 4 >> 2] = -5;
     HEAP32[i8 >> 2] = i16;
     break L11;
    }
   } while (0);
   __ZN7WebCore13createWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_4NodeE(i8, i2, i5, i3);
  }
 } while (0);
 i3 = i8 | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i5 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i1 >> 2] = __ZTVN10Deprecated11ScriptValueE + 8;
 if ((HEAP32[i14 + 20444 >> 2] | 0) != 0) {
  _WTFCrash();
 }
 i3 = i14 + 20440 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) == 0) {
  __ZN3JSC9HandleSet4growEv(i14 + 20360 | 0);
  i26 = HEAP32[i3 >> 2] | 0;
 } else {
  i26 = i2;
 }
 i2 = i26 + 12 | 0;
 HEAP32[i3 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i26 + 4 >> 2] = -6;
 HEAP32[i26 >> 2] = 0;
 i3 = i26 + 8 | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i2 >> 2] = 0;
 i16 = i14 + 20420 | 0;
 i15 = HEAP32[i16 >> 2] | 0;
 HEAP32[i3 >> 2] = i14 + 20408;
 HEAP32[i2 >> 2] = i15;
 HEAP32[i16 >> 2] = i26;
 HEAP32[i15 + 8 >> 2] = i26;
 i15 = i26 | 0;
 HEAP32[i1 + 4 >> 2] = i15;
 i1 = i6 | 0;
 HEAP32[i1 >> 2] = i8;
 HEAP32[i1 + 4 >> 2] = i5;
 __ZN3JSC9HandleSet12writeBarrierEPNS_7JSValueERKS1_(HEAP32[(i26 & -4096) + 12 >> 2] | 0, i15, i6);
 i6 = HEAP32[i1 + 4 >> 2] | 0;
 i15 = i26 | 0;
 HEAP32[i15 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i15 + 4 >> 2] = i6;
 __ZN3JSC12JSLockHolderD1Ev(i7);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore17InspectorDOMAgent16querySelectorAllEPN3WTF6StringEiRKS2_RNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayIiEEEE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 i11 = i6 + 32 | 0;
 i12 = i6 + 40 | 0;
 i13 = __ZN7WebCore17InspectorDOMAgent10assertNodeEPN3WTF6StringEi(i1, i2, i3) | 0;
 if ((i13 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 if ((HEAP32[i13 + 12 >> 2] & 2 | 0) == 0) {
  __ZN7WebCore17InspectorDOMAgent13assertElementEPN3WTF6StringEi(i1, i2, i3) | 0;
  STACKTOP = i6;
  return;
 }
 HEAP32[i9 >> 2] = 0;
 i3 = i13;
 i13 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i13 | 0) == 0) {
   i4 = i7 | 0;
   HEAP32[i4 >> 2] = 0;
   i14 = i4;
  } else {
   if ((HEAP32[i13 + 16 >> 2] & 16 | 0) == 0) {
    __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i7, i13);
    i14 = i7 | 0;
    break;
   } else {
    i4 = i7 | 0;
    HEAP32[i4 >> 2] = i13;
    i15 = i13 | 0;
    HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 2;
    i14 = i4;
    break;
   }
  }
 } while (0);
 i13 = i11 | 0;
 HEAP32[i13 >> 2] = HEAP32[i14 >> 2];
 __ZN7WebCore13ContainerNode16querySelectorAllERKN3WTF12AtomicStringERi(i10, i3, i11, i9);
 i11 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i13 = i11 | 0;
   i3 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i13 >> 2] = i3;
    break;
   }
  }
 } while (0);
 do {
  if ((HEAP32[i9 >> 2] | 0) == 0) {
   i11 = __ZN3WTF10fastMallocEj(24) | 0;
   __ZN9Inspector18InspectorArrayBaseC2Ev(i11);
   HEAP32[i11 >> 2] = H_BASE + 1720;
   i3 = i5 | 0;
   i13 = HEAP32[i3 >> 2] | 0;
   HEAP32[i3 >> 2] = i11;
   do {
    if ((i13 | 0) != 0) {
     i11 = i13 + 4 | 0;
     i14 = i11 | 0;
     i7 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
     if ((i7 | 0) != 0) {
      HEAP32[i14 >> 2] = i7;
      break;
     }
     i7 = i11 - 4 | 0;
     if ((i7 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 63](i7);
    }
   } while (0);
   i13 = i10 | 0;
   i7 = HEAP32[i13 >> 2] | 0;
   if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 8 >> 2] & 1](i7) | 0) == 0) {
    break;
   }
   i7 = i8 | 0;
   i11 = 0;
   while (1) {
    i14 = HEAP32[i3 >> 2] | 0;
    i4 = HEAP32[i13 >> 2] | 0;
    i15 = i14 + 12 | 0;
    __ZN9Inspector19InspectorBasicValue6createEi(i8, __ZN7WebCore17InspectorDOMAgent22pushNodePathToFrontendEPNS_4NodeE(i1, FUNCTION_TABLE_iii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 31](i4, i11) | 0) | 0);
    i4 = i14 + 20 | 0;
    i16 = HEAP32[i4 >> 2] | 0;
    if ((i16 | 0) == (HEAP32[i14 + 16 >> 2] | 0)) {
     __ZN3WTF6VectorINS_6RefPtrIN9Inspector14InspectorValueEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i15, i16 + 1 | 0);
     i14 = (HEAP32[i15 >> 2] | 0) + (HEAP32[i4 >> 2] << 2) | 0;
     i17 = HEAP32[i7 >> 2] | 0;
     HEAP32[i7 >> 2] = 0;
     HEAP32[i14 >> 2] = i17;
    } else {
     i17 = (HEAP32[i15 >> 2] | 0) + (i16 << 2) | 0;
     i16 = HEAP32[i7 >> 2] | 0;
     HEAP32[i7 >> 2] = 0;
     HEAP32[i17 >> 2] = i16;
    }
    HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
    i4 = HEAP32[i7 >> 2] | 0;
    do {
     if ((i4 | 0) != 0) {
      i16 = i4 + 4 | 0;
      i17 = i16 | 0;
      i15 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
      if ((i15 | 0) != 0) {
       HEAP32[i17 >> 2] = i15;
       break;
      }
      i15 = i16 - 4 | 0;
      if ((i15 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 63](i15);
     }
    } while (0);
    i11 = i11 + 1 | 0;
    i4 = HEAP32[i13 >> 2] | 0;
    if (i11 >>> 0 >= (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] & 1](i4) | 0) >>> 0) {
     break;
    }
   }
  } else {
   __ZN3WTF6StringC1EPKc(i12, H_BASE + 8 | 0);
   i11 = i12 | 0;
   i13 = HEAP32[i11 >> 2] | 0;
   HEAP32[i11 >> 2] = 0;
   i7 = i2 | 0;
   i3 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = i13;
   do {
    if ((i3 | 0) != 0) {
     i13 = i3 | 0;
     i7 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
     if ((i7 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i3);
      break;
     } else {
      HEAP32[i13 >> 2] = i7;
      break;
     }
    }
   } while (0);
   i3 = HEAP32[i11 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   i7 = i3 | 0;
   i13 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i7 >> 2] = i13;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i10 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i10 = i2 + 8 | 0;
 i2 = i10 | 0;
 i12 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i12 | 0) != 0) {
  HEAP32[i2 >> 2] = i12;
  STACKTOP = i6;
  return;
 }
 i12 = i10 - 8 | 0;
 if ((i12 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 63](i12);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore17InspectorDOMAgent30buildArrayForElementAttributesEPNS_7ElementE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i2 | 0;
 i5 = i2 + 8 | 0;
 i6 = i2 + 16 | 0;
 i7 = i2 + 24 | 0;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 i9 = i8;
 __ZN9Inspector18InspectorArrayBaseC2Ev(i8);
 HEAP32[i8 >> 2] = H_BASE + 1960;
 if (!(__ZNK7WebCore7Element13hasAttributesEv(i3) | 0)) {
  HEAP32[i1 >> 2] = i9;
  STACKTOP = i2;
  return;
 }
 i10 = i3 + 48 | 0;
 i3 = HEAP32[i10 >> 2] | 0;
 i11 = HEAP32[i3 + 4 >> 2] | 0;
 if ((i11 & 1 | 0) == 0) {
  i12 = i11 >>> 1 & 134217727;
 } else {
  i12 = HEAP32[i3 + 32 >> 2] | 0;
 }
 L9 : do {
  if ((i12 | 0) != 0) {
   i13 = i8 + 12 | 0;
   i14 = i13;
   i15 = i8 + 20 | 0;
   i16 = i8 + 16 | 0;
   i17 = i13;
   i13 = i4 | 0;
   i18 = i6 | 0;
   i19 = i7 | 0;
   i20 = i5 | 0;
   i21 = 0;
   i22 = i3;
   i23 = i11;
   while (1) {
    i24 = (i23 & 1 | 0) == 0;
    if (i24) {
     i25 = i23 >>> 1 & 134217727;
    } else {
     i25 = HEAP32[i22 + 32 >> 2] | 0;
    }
    if (i25 >>> 0 <= i21 >>> 0) {
     break;
    }
    if (i24) {
     i26 = i22 + 20 | 0;
    } else {
     i26 = HEAP32[i22 + 24 >> 2] | 0;
    }
    __ZNK7WebCore13QualifiedName8toStringEv(i6, i26 + (i21 << 3) | 0);
    __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i4, i6);
    i24 = HEAP32[i15 >> 2] | 0;
    if ((i24 | 0) == (HEAP32[i16 >> 2] | 0)) {
     __ZN3WTF6VectorINS_6RefPtrIN9Inspector14InspectorValueEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i14, i24 + 1 | 0);
     i27 = (HEAP32[i17 >> 2] | 0) + (HEAP32[i15 >> 2] << 2) | 0;
     i28 = HEAP32[i13 >> 2] | 0;
     HEAP32[i13 >> 2] = 0;
     HEAP32[i27 >> 2] = i28;
    } else {
     i28 = (HEAP32[i17 >> 2] | 0) + (i24 << 2) | 0;
     i24 = HEAP32[i13 >> 2] | 0;
     HEAP32[i13 >> 2] = 0;
     HEAP32[i28 >> 2] = i24;
    }
    HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
    i24 = HEAP32[i13 >> 2] | 0;
    do {
     if ((i24 | 0) != 0) {
      i28 = i24 + 4 | 0;
      i27 = i28 | 0;
      i29 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
      if ((i29 | 0) != 0) {
       HEAP32[i27 >> 2] = i29;
       break;
      }
      i29 = i28 - 4 | 0;
      if ((i29 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i29 >> 2] | 0) + 4 >> 2] & 63](i29);
     }
    } while (0);
    i24 = HEAP32[i18 >> 2] | 0;
    do {
     if ((i24 | 0) != 0) {
      i29 = i24 | 0;
      i28 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
      if ((i28 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i24);
       break;
      } else {
       HEAP32[i29 >> 2] = i28;
       break;
      }
     }
    } while (0);
    i24 = HEAP32[i26 + (i21 << 3) + 4 >> 2] | 0;
    HEAP32[i19 >> 2] = i24;
    if ((i24 | 0) != 0) {
     i28 = i24 | 0;
     HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 2;
    }
    __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i5, i7);
    i28 = HEAP32[i15 >> 2] | 0;
    if ((i28 | 0) == (HEAP32[i16 >> 2] | 0)) {
     __ZN3WTF6VectorINS_6RefPtrIN9Inspector14InspectorValueEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i14, i28 + 1 | 0);
     i24 = (HEAP32[i17 >> 2] | 0) + (HEAP32[i15 >> 2] << 2) | 0;
     i29 = HEAP32[i20 >> 2] | 0;
     HEAP32[i20 >> 2] = 0;
     HEAP32[i24 >> 2] = i29;
    } else {
     i29 = (HEAP32[i17 >> 2] | 0) + (i28 << 2) | 0;
     i28 = HEAP32[i20 >> 2] | 0;
     HEAP32[i20 >> 2] = 0;
     HEAP32[i29 >> 2] = i28;
    }
    HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
    i28 = HEAP32[i20 >> 2] | 0;
    do {
     if ((i28 | 0) != 0) {
      i29 = i28 + 4 | 0;
      i24 = i29 | 0;
      i27 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
      if ((i27 | 0) != 0) {
       HEAP32[i24 >> 2] = i27;
       break;
      }
      i27 = i29 - 4 | 0;
      if ((i27 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i27 >> 2] | 0) + 4 >> 2] & 63](i27);
     }
    } while (0);
    i28 = HEAP32[i19 >> 2] | 0;
    do {
     if ((i28 | 0) != 0) {
      i27 = i28 | 0;
      i29 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
      if ((i29 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i28);
       break;
      } else {
       HEAP32[i27 >> 2] = i29;
       break;
      }
     }
    } while (0);
    i28 = i21 + 1 | 0;
    if (i28 >>> 0 >= i12 >>> 0) {
     break L9;
    }
    i29 = HEAP32[i10 >> 2] | 0;
    i21 = i28;
    i22 = i29;
    i23 = HEAP32[i29 + 4 >> 2] | 0;
   }
   _WTFCrash();
  }
 } while (0);
 HEAP32[i1 >> 2] = i9;
 STACKTOP = i2;
 return;
}
function __ZN7WebCore17InspectorDOMAgent16getSearchResultsEPN3WTF6StringERKS2_iiRNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayIiEEEE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i7 + 16 | 0;
 i11 = i7 + 24 | 0;
 i12 = i1 + 184 | 0;
 __ZN3WTF7HashMapINS_6StringENS_6VectorINS_6RefPtrIN7WebCore4NodeEEELj0ENS_15CrashOnOverflowEEENS_10StringHashENS_10HashTraitsIS1_EENSA_IS8_EEE4findERKS1_(i9, i12, i3);
 i3 = HEAP32[i9 >> 2] | 0;
 if ((i3 | 0) == ((HEAP32[i12 >> 2] | 0) + (HEAP32[i1 + 188 >> 2] << 4) | 0)) {
  __ZN3WTF6StringC1EPKc(i10, H_BASE + 1352 | 0);
  i12 = i10 | 0;
  i10 = HEAP32[i12 >> 2] | 0;
  HEAP32[i12 >> 2] = 0;
  i9 = i2 | 0;
  i13 = HEAP32[i9 >> 2] | 0;
  HEAP32[i9 >> 2] = i10;
  do {
   if ((i13 | 0) != 0) {
    i10 = i13 | 0;
    i9 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
    if ((i9 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i13);
     break;
    } else {
     HEAP32[i10 >> 2] = i9;
     break;
    }
   }
  } while (0);
  i13 = HEAP32[i12 >> 2] | 0;
  if ((i13 | 0) == 0) {
   STACKTOP = i7;
   return;
  }
  i12 = i13 | 0;
  i9 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
  if ((i9 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i13);
   STACKTOP = i7;
   return;
  } else {
   HEAP32[i12 >> 2] = i9;
   STACKTOP = i7;
   return;
  }
 }
 i9 = i3 + 12 | 0;
 if (!((HEAP32[i9 >> 2] | 0) >= (i5 | 0) & (i4 | 0) > -1 & (i4 | 0) < (i5 | 0))) {
  __ZN3WTF6StringC1EPKc(i11, H_BASE + 1280 | 0);
  i12 = i11 | 0;
  i11 = HEAP32[i12 >> 2] | 0;
  HEAP32[i12 >> 2] = 0;
  i13 = i2 | 0;
  i2 = HEAP32[i13 >> 2] | 0;
  HEAP32[i13 >> 2] = i11;
  do {
   if ((i2 | 0) != 0) {
    i11 = i2 | 0;
    i13 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
    if ((i13 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i2);
     break;
    } else {
     HEAP32[i11 >> 2] = i13;
     break;
    }
   }
  } while (0);
  i2 = HEAP32[i12 >> 2] | 0;
  if ((i2 | 0) == 0) {
   STACKTOP = i7;
   return;
  }
  i12 = i2 | 0;
  i13 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
  if ((i13 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i2);
   STACKTOP = i7;
   return;
  } else {
   HEAP32[i12 >> 2] = i13;
   STACKTOP = i7;
   return;
  }
 }
 i13 = __ZN3WTF10fastMallocEj(24) | 0;
 __ZN9Inspector18InspectorArrayBaseC2Ev(i13);
 HEAP32[i13 >> 2] = H_BASE + 1720;
 i12 = i6 | 0;
 i6 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = i13;
 do {
  if ((i6 | 0) != 0) {
   i13 = i6 + 4 | 0;
   i2 = i13 | 0;
   i11 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) != 0) {
    HEAP32[i2 >> 2] = i11;
    break;
   }
   i11 = i13 - 4 | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 63](i11);
  }
 } while (0);
 i6 = i3 + 4 | 0;
 i3 = i8 | 0;
 i11 = i4;
 while (1) {
  i4 = HEAP32[i12 >> 2] | 0;
  if ((HEAP32[i9 >> 2] | 0) >>> 0 <= i11 >>> 0) {
   i14 = 26;
   break;
  }
  i13 = i4 + 12 | 0;
  __ZN9Inspector19InspectorBasicValue6createEi(i8, __ZN7WebCore17InspectorDOMAgent22pushNodePathToFrontendEPNS_4NodeE(i1, HEAP32[(HEAP32[i6 >> 2] | 0) + (i11 << 2) >> 2] | 0) | 0);
  i2 = i4 + 20 | 0;
  i10 = HEAP32[i2 >> 2] | 0;
  if ((i10 | 0) == (HEAP32[i4 + 16 >> 2] | 0)) {
   __ZN3WTF6VectorINS_6RefPtrIN9Inspector14InspectorValueEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i13, i10 + 1 | 0);
   i4 = (HEAP32[i13 >> 2] | 0) + (HEAP32[i2 >> 2] << 2) | 0;
   i15 = HEAP32[i3 >> 2] | 0;
   HEAP32[i3 >> 2] = 0;
   HEAP32[i4 >> 2] = i15;
  } else {
   i15 = (HEAP32[i13 >> 2] | 0) + (i10 << 2) | 0;
   i10 = HEAP32[i3 >> 2] | 0;
   HEAP32[i3 >> 2] = 0;
   HEAP32[i15 >> 2] = i10;
  }
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
  i2 = HEAP32[i3 >> 2] | 0;
  do {
   if ((i2 | 0) != 0) {
    i10 = i2 + 4 | 0;
    i15 = i10 | 0;
    i13 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
    if ((i13 | 0) != 0) {
     HEAP32[i15 >> 2] = i13;
     break;
    }
    i13 = i10 - 4 | 0;
    if ((i13 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 63](i13);
   }
  } while (0);
  i2 = i11 + 1 | 0;
  if ((i2 | 0) < (i5 | 0)) {
   i11 = i2;
  } else {
   i14 = 42;
   break;
  }
 }
 if ((i14 | 0) == 42) {
  STACKTOP = i7;
  return;
 } else if ((i14 | 0) == 26) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6expandEPS7_(i1, i2) {
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
     i13 = i17 + 4 | 0;
     i14 = i13 | 0;
     i16 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
     if ((i16 | 0) != 0) {
      HEAP32[i14 >> 2] = i16;
      break;
     }
     i16 = i13 - 4 | 0;
     if ((i16 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 63](i16);
    }
   } while (0);
   i17 = i27 | 0;
   i20 = HEAP32[i17 >> 2] | 0;
   do {
    if ((i20 | 0) != 0) {
     i16 = i20 | 0;
     i13 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
     if ((i13 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i20);
      break;
     } else {
      HEAP32[i16 >> 2] = i13;
      break;
     }
    }
   } while (0);
   i20 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   HEAP32[i17 >> 2] = i20;
   i20 = i7 + (i10 << 3) + 4 | 0;
   i13 = HEAP32[i20 >> 2] | 0;
   HEAP32[i20 >> 2] = 0;
   HEAP32[i19 >> 2] = i13;
   i15 = (i5 | 0) == (i2 | 0) ? i27 : i11;
  }
  i13 = i10 + 1 | 0;
  if ((i13 | 0) == (i6 | 0)) {
   break;
  } else {
   i10 = i13;
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
      i10 = i11 + 4 | 0;
      i27 = i10 | 0;
      i2 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
      if ((i2 | 0) != 0) {
       HEAP32[i27 >> 2] = i2;
       break;
      }
      i2 = i10 - 4 | 0;
      if ((i2 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 63](i2);
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
function __ZN7WebCore17InspectorDOMAgent25styleAttributeInvalidatedERKN3WTF6VectorIPNS_7ElementELj0ENS1_15CrashOnOverflowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN3WTF10fastMallocEj(24) | 0;
 i7 = i6;
 __ZN9Inspector18InspectorArrayBaseC2Ev(i6);
 HEAP32[i6 >> 2] = H_BASE + 1720;
 i8 = i2 + 8 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 L1 : do {
  if ((i9 | 0) != 0) {
   i10 = i2 | 0;
   i11 = i1 + 48 | 0;
   i12 = i1 + 40 | 0;
   i13 = i1 + 36 | 0;
   i14 = i6 + 12 | 0;
   i15 = i6 + 20 | 0;
   i16 = i6 + 16 | 0;
   i17 = i14;
   i18 = i14;
   i14 = i4 | 0;
   i19 = 0;
   i20 = i9;
   while (1) {
    if (i20 >>> 0 <= i19 >>> 0) {
     break;
    }
    i21 = HEAP32[(HEAP32[i10 >> 2] | 0) + (i19 << 2) >> 2] | 0;
    i22 = i21 | 0;
    i23 = HEAP32[i11 >> 2] | 0;
    i24 = HEAP32[i12 >> 2] | 0;
    i25 = i21;
    i26 = i25 + ~(i25 << 15) | 0;
    i25 = (i26 >>> 10 ^ i26) * 9 & -1;
    i26 = i25 >>> 6 ^ i25;
    i25 = i26 + ~(i26 << 11) | 0;
    i26 = i25 >>> 16 ^ i25;
    L6 : do {
     if ((i24 | 0) != 0) {
      i25 = i26 & i23;
      i27 = i24 + (i25 << 3) | 0;
      i28 = HEAP32[i27 >> 2] | 0;
      if ((i28 | 0) == (i22 | 0)) {
       i29 = i27;
      } else {
       i27 = (i26 >>> 23) + ~i26 | 0;
       i30 = i27 << 12 ^ i27;
       i27 = i30 >>> 7 ^ i30;
       i30 = i27 << 2 ^ i27;
       i27 = i30 >>> 20 ^ i30 | 1;
       i30 = 0;
       i31 = i25;
       i25 = i28;
       while (1) {
        if ((i25 | 0) == 0) {
         break L6;
        }
        i28 = (i30 | 0) == 0 ? i27 : i30;
        i32 = i28 + i31 & i23;
        i33 = i24 + (i32 << 3) | 0;
        i34 = HEAP32[i33 >> 2] | 0;
        if ((i34 | 0) == (i22 | 0)) {
         i29 = i33;
         break;
        } else {
         i30 = i28;
         i31 = i32;
         i25 = i34;
        }
       }
      }
      if ((i29 | 0) == 0) {
       break;
      }
      i25 = HEAP32[i29 + 4 >> 2] | 0;
      if ((i25 | 0) == 0) {
       break;
      }
      i31 = HEAP32[i13 >> 2] | 0;
      if ((i31 | 0) != 0) {
       FUNCTION_TABLE_vii[HEAP32[(HEAP32[i31 >> 2] | 0) + 16 >> 2] & 31](i31, i21);
      }
      __ZN9Inspector19InspectorBasicValue6createEi(i4, i25);
      i25 = HEAP32[i15 >> 2] | 0;
      if ((i25 | 0) == (HEAP32[i16 >> 2] | 0)) {
       __ZN3WTF6VectorINS_6RefPtrIN9Inspector14InspectorValueEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i17, i25 + 1 | 0);
       i31 = (HEAP32[i18 >> 2] | 0) + (HEAP32[i15 >> 2] << 2) | 0;
       i30 = HEAP32[i14 >> 2] | 0;
       HEAP32[i14 >> 2] = 0;
       HEAP32[i31 >> 2] = i30;
      } else {
       i30 = (HEAP32[i18 >> 2] | 0) + (i25 << 2) | 0;
       i25 = HEAP32[i14 >> 2] | 0;
       HEAP32[i14 >> 2] = 0;
       HEAP32[i30 >> 2] = i25;
      }
      HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
      i25 = HEAP32[i14 >> 2] | 0;
      if ((i25 | 0) == 0) {
       break;
      }
      i30 = i25 + 4 | 0;
      i25 = i30 | 0;
      i31 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
      if ((i31 | 0) != 0) {
       HEAP32[i25 >> 2] = i31;
       break;
      }
      i31 = i30 - 4 | 0;
      if ((i31 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i31 >> 2] | 0) + 4 >> 2] & 63](i31);
     }
    } while (0);
    i21 = i19 + 1 | 0;
    if (i21 >>> 0 >= i9 >>> 0) {
     break L1;
    }
    i19 = i21;
    i20 = HEAP32[i8 >> 2] | 0;
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 i8 = HEAP32[i1 + 28 >> 2] | 0;
 i1 = i5 | 0;
 HEAP32[i1 >> 2] = i7;
 __ZN9Inspector30InspectorDOMFrontendDispatcher22inlineStyleInvalidatedEN3WTF10PassRefPtrINS_11TypeBuilder5ArrayIiEEEE(i8, i5);
 i5 = HEAP32[i1 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i1 = i5 + 4 | 0;
 i5 = i1 | 0;
 i8 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i8 | 0) != 0) {
  HEAP32[i5 >> 2] = i8;
  STACKTOP = i3;
  return;
 }
 i8 = i1 - 4 | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 63](i8);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore17InspectorDOMAgent21releaseBackendNodeIdsEPN3WTF6StringERKS2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i1 + 60 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 L1 : do {
  if ((i9 | 0) != 0) {
   i10 = HEAP32[i1 + 68 >> 2] | 0;
   i11 = i3 | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   i13 = HEAP32[i12 + 16 >> 2] | 0;
   if (i13 >>> 0 > 127 >>> 0) {
    i14 = i13 >>> 7;
   } else {
    i14 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i12) | 0;
   }
   i12 = (i14 >>> 23) + ~i14 | 0;
   i13 = i12 << 12 ^ i12;
   i12 = i13 >>> 7 ^ i13;
   i13 = i12 << 2 ^ i12;
   i12 = i13 >>> 20 ^ i13 | 1;
   i13 = i14;
   i15 = 0;
   while (1) {
    i16 = i13 & i10;
    i17 = i9 + (i16 * 24 & -1) | 0;
    i18 = HEAP32[i17 >> 2] | 0;
    i19 = i18;
    if ((i19 | 0) == 0) {
     break L1;
    } else if ((i19 | 0) != (-1 | 0)) {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i18, HEAP32[i11 >> 2] | 0) | 0) {
      break;
     }
    }
    i18 = (i15 | 0) == 0 ? i12 : i15;
    i13 = i18 + i16 | 0;
    i15 = i18;
   }
   if ((i17 | 0) == 0) {
    break;
   }
   __ZN3WTF7HashMapINS_6StringENS0_INS_6RefPtrIN7WebCore4NodeEEEiNS_7PtrHashIS5_EENS_10HashTraitsIS5_EENS8_IiEEEENS_10StringHashENS8_IS1_EENS8_ISB_EEE4findERKS1_(i6, i8, i3);
   i15 = HEAP32[i6 >> 2] | 0;
   i13 = i15 + 4 | 0;
   i12 = HEAP32[i13 >> 2] | 0;
   i11 = i15 + 8 | 0;
   i10 = HEAP32[i11 >> 2] | 0;
   i18 = i12 + (i10 << 3) | 0;
   L14 : do {
    if ((HEAP32[i15 + 16 >> 2] | 0) != 0) {
     L16 : do {
      if ((i10 | 0) == 0) {
       i20 = i12;
      } else {
       i16 = i12;
       while (1) {
        i19 = HEAP32[i16 >> 2] | 0;
        if (!((i19 | 0) == (-1 | 0) | (i19 | 0) == 0)) {
         i20 = i16;
         break L16;
        }
        i16 = i16 + 8 | 0;
        if ((i16 | 0) == (i18 | 0)) {
         break L14;
        }
       }
      }
     } while (0);
     if ((i20 | 0) == (i18 | 0)) {
      break;
     }
     i16 = i1 + 152 | 0;
     i19 = i20;
     while (1) {
      __ZN3WTF7HashMapIiNSt3__14pairIPN7WebCore4NodeENS_6StringEEENS_7IntHashIjEENS_10HashTraitsIiEENSA_IS7_EEE6removeERKi(i16, i19 + 4 | 0) | 0;
      i21 = i19 + 8 | 0;
      L24 : do {
       if ((i21 | 0) == (i18 | 0)) {
        i22 = i18;
       } else {
        i23 = i21;
        while (1) {
         i24 = HEAP32[i23 >> 2] | 0;
         if (!((i24 | 0) == (-1 | 0) | (i24 | 0) == 0)) {
          i22 = i23;
          break L24;
         }
         i24 = i23 + 8 | 0;
         if ((i24 | 0) == (i18 | 0)) {
          i22 = i18;
          break;
         } else {
          i23 = i24;
         }
        }
       }
      } while (0);
      if ((i22 | 0) == ((HEAP32[i13 >> 2] | 0) + (HEAP32[i11 >> 2] << 3) | 0)) {
       break;
      } else {
       i19 = i22;
      }
     }
    }
   } while (0);
   __ZN3WTF7HashMapINS_6StringENS0_INS_6RefPtrIN7WebCore4NodeEEEiNS_7PtrHashIS5_EENS_10HashTraitsIS5_EENS8_IiEEEENS_10StringHashENS8_IS1_EENS8_ISB_EEE4findERKS1_(i5, i8, i3);
   __ZN3WTF7HashMapINS_6StringENS0_INS_6RefPtrIN7WebCore4NodeEEEiNS_7PtrHashIS5_EENS_10HashTraitsIS5_EENS8_IiEEEENS_10StringHashENS8_IS1_EENS8_ISB_EEE6removeENS_24HashTableIteratorAdapterINS_9HashTableIS1_NS_12KeyValuePairIS1_SB_EENS_24KeyValuePairKeyExtractorISJ_EESC_NSF_18KeyValuePairTraitsESD_EESJ_EE(i8, i5) | 0;
   STACKTOP = i4;
   return;
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i7, H_BASE + 1640 | 0);
 i5 = i7 | 0;
 i7 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 i8 = i2 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = i7;
 do {
  if ((i2 | 0) != 0) {
   i7 = i2 | 0;
   i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i7 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i5 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i5 = i2 | 0;
 i8 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i8 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i5 >> 2] = i8;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore17InspectorDOMAgent11resolveNodeEPN3WTF6StringEiPKS2_RNS1_6RefPtrIN9Inspector11TypeBuilder7Runtime12RemoteObjectEEE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 i11 = i6 + 32 | 0;
 i12 = i6 + 40 | 0;
 do {
  if ((i4 | 0) == 0) {
   __ZN3WTF6StringC1EPKc(i9, H_BASE + 2432 | 0);
  } else {
   i13 = HEAP32[i4 >> 2] | 0;
   HEAP32[i9 >> 2] = i13;
   if ((i13 | 0) == 0) {
    break;
   }
   i14 = i13 | 0;
   HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
  }
 } while (0);
 HEAP32[i7 >> 2] = i3;
 do {
  if ((i3 | 0) == 0) {
   i15 = 8;
  } else {
   i4 = i1 + 92 | 0;
   __ZN3WTF7HashMapIiPN7WebCore4NodeENS_7IntHashIjEENS_10HashTraitsIiEENS6_IS3_EEE4findERKi(i8, i4, i7);
   i14 = HEAP32[i8 >> 2] | 0;
   if ((i14 | 0) == ((HEAP32[i4 >> 2] | 0) + (HEAP32[i1 + 96 >> 2] << 3) | 0)) {
    i15 = 8;
    break;
   }
   i4 = HEAP32[i14 + 4 >> 2] | 0;
   if ((i4 | 0) == 0) {
    i15 = 8;
    break;
   }
   __ZN7WebCore17InspectorDOMAgent11resolveNodeEPNS_4NodeERKN3WTF6StringE(i11, i1, i4, i9);
   i4 = i11 | 0;
   i14 = HEAP32[i4 >> 2] | 0;
   HEAP32[i4 >> 2] = 0;
   i4 = (i14 | 0) == 0;
   do {
    if (i4) {
     __ZN3WTF6StringC1EPKc(i12, H_BASE + 784 | 0);
     i13 = i12 | 0;
     i16 = HEAP32[i13 >> 2] | 0;
     HEAP32[i13 >> 2] = 0;
     i17 = i2 | 0;
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
     i18 = HEAP32[i13 >> 2] | 0;
     if ((i18 | 0) == 0) {
      i15 = 30;
      break;
     }
     i17 = i18 | 0;
     i16 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
     if ((i16 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i18);
      i15 = 30;
      break;
     } else {
      HEAP32[i17 >> 2] = i16;
      i15 = 30;
      break;
     }
    } else {
     i16 = i14 + 4 | 0;
     HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
     i16 = i5 | 0;
     i17 = HEAP32[i16 >> 2] | 0;
     HEAP32[i16 >> 2] = i14;
     if ((i17 | 0) == 0) {
      break;
     }
     i16 = i17 + 4 | 0;
     i17 = i16 | 0;
     i18 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
     if ((i18 | 0) != 0) {
      HEAP32[i17 >> 2] = i18;
      i15 = 30;
      break;
     }
     i18 = i16 - 4 | 0;
     if ((i18 | 0) == 0) {
      i15 = 30;
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 63](i18);
     i15 = 30;
    }
   } while (0);
   if ((i15 | 0) == 30) {
    if (i4) {
     break;
    }
   }
   i18 = i14 + 4 | 0;
   i16 = i18 | 0;
   i17 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
   if ((i17 | 0) != 0) {
    HEAP32[i16 >> 2] = i17;
    break;
   }
   i17 = i18 - 4 | 0;
   if ((i17 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 4 >> 2] & 63](i17);
  }
 } while (0);
 do {
  if ((i15 | 0) == 8) {
   __ZN3WTF6StringC1EPKc(i10, H_BASE + 840 | 0);
   i5 = i10 | 0;
   i12 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   i11 = i2 | 0;
   i1 = HEAP32[i11 >> 2] | 0;
   HEAP32[i11 >> 2] = i12;
   do {
    if ((i1 | 0) != 0) {
     i12 = i1 | 0;
     i11 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
     if ((i11 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i1);
      break;
     } else {
      HEAP32[i12 >> 2] = i11;
      break;
     }
    }
   } while (0);
   i1 = HEAP32[i5 >> 2] | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   i14 = i1 | 0;
   i4 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i14 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i9 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i9 = i2 | 0;
 i10 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
 if ((i10 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  STACKTOP = i6;
  return;
 } else {
  HEAP32[i9 >> 2] = i10;
  STACKTOP = i6;
  return;
 }
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_7HashMapINS_6RefPtrIN7WebCore4NodeEEEiNS_7PtrHashIS7_EENS_10HashTraitsIS7_EENSA_IiEEEEEENS_24KeyValuePairKeyExtractorISE_EENS_10StringHashENS3_IS1_SD_SH_NSA_IS1_EENSA_ISD_EEE18KeyValuePairTraitsESI_E8reinsertEOSE_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i1 >> 2] | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i2 | 0;
 i7 = HEAP32[i1 >> 2] | 0;
 i8 = HEAP32[i7 + 16 >> 2] | 0;
 if (i8 >>> 0 > 127 >>> 0) {
  i9 = i8 >>> 7;
 } else {
  i9 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i7) | 0;
 }
 i7 = (i9 >>> 23) + ~i9 | 0;
 i8 = i7 << 12 ^ i7;
 i7 = i8 >>> 7 ^ i8;
 i8 = i7 << 2 ^ i7;
 i7 = i8 >>> 20 ^ i8 | 1;
 i8 = i9;
 i9 = 0;
 i10 = 0;
 while (1) {
  i11 = i8 & i6;
  i12 = i5 + (i11 * 24 & -1) | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == 0) {
   i15 = 6;
   break;
  } else if ((i14 | 0) == (-1 | 0)) {
   i16 = i12;
  } else {
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i13, HEAP32[i1 >> 2] | 0) | 0) {
    i17 = i12;
    break;
   } else {
    i16 = i10;
   }
  }
  i13 = (i9 | 0) == 0 ? i7 : i9;
  i8 = i13 + i11 | 0;
  i9 = i13;
  i10 = i16;
 }
 if ((i15 | 0) == 6) {
  i17 = (i10 | 0) != 0 ? i10 : i12;
 }
 i12 = HEAP32[i17 + 4 >> 2] | 0;
 if ((i12 | 0) != 0) {
  i10 = HEAP32[i17 + 8 >> 2] | 0;
  if ((i10 | 0) > 0) {
   i16 = 0;
   while (1) {
    i9 = HEAP32[i12 + (i16 << 3) >> 2] | 0;
    i8 = i9;
    do {
     if (!((i8 | 0) == (-1 | 0) | (i8 | 0) == 0)) {
      i7 = i9 + 8 | 0;
      i5 = i7 | 0;
      i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
      HEAP32[i5 >> 2] = i6;
      if ((i6 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
     }
    } while (0);
    i16 = i16 + 1 | 0;
    if ((i16 | 0) >= (i10 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i12);
 }
 i12 = i17 | 0;
 i10 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i16 = i10 | 0;
   i9 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i16 >> 2] = i9;
    break;
   }
  }
 } while (0);
 i10 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i12 >> 2] = i10;
 i10 = i17 + 4 | 0;
 i12 = i10 | 0;
 _memset(i10 | 0, 0, 20) | 0;
 i10 = HEAP32[i2 + 4 >> 2] | 0;
 i1 = HEAP32[i2 + 8 >> 2] | 0;
 i9 = i10 + (i1 << 3) | 0;
 if ((HEAP32[i2 + 16 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return i17 | 0;
 }
 L34 : do {
  if ((i1 | 0) == 0) {
   i18 = i10;
  } else {
   i2 = i10;
   while (1) {
    i16 = HEAP32[i2 >> 2] | 0;
    if (!((i16 | 0) == (-1 | 0) | (i16 | 0) == 0)) {
     i18 = i2;
     break L34;
    }
    i2 = i2 + 8 | 0;
    if ((i2 | 0) == (i9 | 0)) {
     break;
    }
   }
   STACKTOP = i3;
   return i17 | 0;
  }
 } while (0);
 if ((i18 | 0) == (i9 | 0)) {
  STACKTOP = i3;
  return i17 | 0;
 } else {
  i19 = i18;
 }
 L42 : while (1) {
  __ZN3WTF9HashTableINS_6RefPtrIN7WebCore4NodeEEENS_12KeyValuePairIS4_iEENS_24KeyValuePairKeyExtractorIS6_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSC_IiEEEESD_E3addINS_22IdentityHashTranslatorISA_EERKS4_RKS6_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S6_S8_SA_SF_SD_EEEEOT0_OT1_(i4, i12, i19 | 0, i19);
  i18 = i19 + 8 | 0;
  if ((i18 | 0) == (i9 | 0)) {
   i15 = 36;
   break;
  } else {
   i20 = i18;
  }
  while (1) {
   i18 = HEAP32[i20 >> 2] | 0;
   if (!((i18 | 0) == (-1 | 0) | (i18 | 0) == 0)) {
    break;
   }
   i18 = i20 + 8 | 0;
   if ((i18 | 0) == (i9 | 0)) {
    i15 = 33;
    break L42;
   } else {
    i20 = i18;
   }
  }
  if ((i20 | 0) == (i9 | 0)) {
   i15 = 32;
   break;
  } else {
   i19 = i20;
  }
 }
 if ((i15 | 0) == 33) {
  STACKTOP = i3;
  return i17 | 0;
 } else if ((i15 | 0) == 36) {
  STACKTOP = i3;
  return i17 | 0;
 } else if ((i15 | 0) == 32) {
  STACKTOP = i3;
  return i17 | 0;
 }
 return 0;
}
function __ZN7WebCore17InspectorDOMAgent30buildArrayForContainerChildrenEPNS_4NodeEiPN3WTF7HashMapINS3_6RefPtrIS1_EEiNS3_7PtrHashIS6_EENS3_10HashTraitsIS6_EENS9_IiEEEE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 32 | 0;
 i11 = i6 + 40 | 0;
 i12 = i6 + 56 | 0;
 i13 = __ZN3WTF10fastMallocEj(24) | 0;
 i14 = i13;
 __ZN9Inspector18InspectorArrayBaseC2Ev(i13);
 HEAP32[i13 >> 2] = H_BASE + 1800;
 i15 = (HEAP32[i3 + 12 >> 2] & 2 | 0) == 0;
 if ((i4 | 0) == 0) {
  do {
   if (!i15) {
    i16 = HEAP32[i3 + 36 >> 2] | 0;
    if ((i16 | 0) == 0) {
     break;
    }
    if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i16 >> 2] | 0) + 76 >> 2] & 1](i16) | 0) != 3) {
     break;
    }
    if ((HEAP32[i16 + 28 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore17InspectorDOMAgent18buildObjectForNodeEPNS_4NodeEiPN3WTF7HashMapINS3_6RefPtrIS1_EEiNS3_7PtrHashIS6_EENS3_10HashTraitsIS6_EENS9_IiEEEE(i7, i2, i16, 0, i5);
    i16 = i7 | 0;
    i17 = HEAP32[i16 >> 2] | 0;
    HEAP32[i16 >> 2] = 0;
    i16 = i17 | 0;
    i17 = i13 + 12 | 0;
    i18 = i13 + 20 | 0;
    i19 = HEAP32[i18 >> 2] | 0;
    if ((i19 | 0) == (HEAP32[i13 + 16 >> 2] | 0)) {
     __ZN3WTF6VectorINS_6RefPtrIN9Inspector14InspectorValueEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i17, i19 + 1 | 0);
     HEAP32[(HEAP32[i17 >> 2] | 0) + (HEAP32[i18 >> 2] << 2) >> 2] = i16;
    } else {
     HEAP32[(HEAP32[i17 >> 2] | 0) + (i19 << 2) >> 2] = i16;
    }
    HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
    HEAP32[i8 >> 2] = __ZN7WebCore17InspectorDOMAgent4bindEPNS_4NodeEPN3WTF7HashMapINS3_6RefPtrIS1_EEiNS3_7PtrHashIS6_EENS3_10HashTraitsIS6_EENS9_IiEEEE(i2, i3, i5) | 0;
    __ZN3WTF9HashTableIiiNS_17IdentityExtractorENS_7IntHashIjEENS_10HashTraitsIiEES5_E3addINS_22IdentityHashTranslatorIS3_EERKiiEENS_18HashTableAddResultINS_17HashTableIteratorIiiS1_S3_S5_S5_EEEEOT0_OT1_(i9, i2 + 132 | 0, i8, i8);
   }
  } while (0);
  HEAP32[i1 >> 2] = i14;
  STACKTOP = i6;
  return;
 }
 if (i15) {
  i20 = 0;
 } else {
  i20 = HEAP32[i3 + 36 >> 2] | 0;
 }
 if (__ZN7WebCore17InspectorDOMAgent12isWhitespaceEPNS_4NodeE(i20) | 0) {
  i15 = i20;
  while (1) {
   i8 = HEAP32[i15 + 28 >> 2] | 0;
   if (__ZN7WebCore17InspectorDOMAgent12isWhitespaceEPNS_4NodeE(i8) | 0) {
    i15 = i8;
   } else {
    i21 = i8;
    break;
   }
  }
 } else {
  i21 = i20;
 }
 i20 = i4 - 1 | 0;
 HEAP32[i10 >> 2] = __ZN7WebCore17InspectorDOMAgent4bindEPNS_4NodeEPN3WTF7HashMapINS3_6RefPtrIS1_EEiNS3_7PtrHashIS6_EENS3_10HashTraitsIS6_EENS9_IiEEEE(i2, i3, i5) | 0;
 __ZN3WTF9HashTableIiiNS_17IdentityExtractorENS_7IntHashIjEENS_10HashTraitsIiEES5_E3addINS_22IdentityHashTranslatorIS3_EERKiiEENS_18HashTableAddResultINS_17HashTableIteratorIiiS1_S3_S5_S5_EEEEOT0_OT1_(i11, i2 + 132 | 0, i10, i10);
 if ((i21 | 0) != 0) {
  i10 = i12 | 0;
  i11 = i13 + 12 | 0;
  i3 = i13 + 20 | 0;
  i4 = i13 + 16 | 0;
  i13 = i11;
  i15 = i11;
  i11 = i21;
  while (1) {
   __ZN7WebCore17InspectorDOMAgent18buildObjectForNodeEPNS_4NodeEiPN3WTF7HashMapINS3_6RefPtrIS1_EEiNS3_7PtrHashIS6_EENS3_10HashTraitsIS6_EENS9_IiEEEE(i12, i2, i11, i20, i5);
   i21 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = 0;
   i8 = i21 | 0;
   i21 = HEAP32[i3 >> 2] | 0;
   if ((i21 | 0) == (HEAP32[i4 >> 2] | 0)) {
    __ZN3WTF6VectorINS_6RefPtrIN9Inspector14InspectorValueEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i13, i21 + 1 | 0);
    HEAP32[(HEAP32[i15 >> 2] | 0) + (HEAP32[i3 >> 2] << 2) >> 2] = i8;
   } else {
    HEAP32[(HEAP32[i15 >> 2] | 0) + (i21 << 2) >> 2] = i8;
   }
   HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
   i8 = i11;
   while (1) {
    i8 = HEAP32[i8 + 28 >> 2] | 0;
    if (!(__ZN7WebCore17InspectorDOMAgent12isWhitespaceEPNS_4NodeE(i8) | 0)) {
     break;
    }
   }
   if ((i8 | 0) == 0) {
    break;
   } else {
    i11 = i8;
   }
  }
 }
 HEAP32[i1 >> 2] = i14;
 STACKTOP = i6;
 return;
}
function __ZNK7WebCore15JSEventListener10jsFunctionEPNS_22ScriptExecutionContextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i1 + 4 | 0;
 HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 i7 = HEAP32[(HEAP32[i1 + 24 >> 2] | 0) + 68 >> 2] | 0;
 i8 = i1 + 16 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i9 | 0) == 0) {
   i10 = 0;
  } else {
   if ((HEAP32[i9 + 8 >> 2] & 3 | 0) != 0) {
    i10 = 0;
    break;
   }
   i10 = HEAP32[i9 >> 2] | 0;
  }
 } while (0);
 if ((HEAP32[i7 + 20444 >> 2] | 0) != 0) {
  _WTFCrash();
  return 0;
 }
 i9 = i7 + 20440 | 0;
 i11 = HEAP32[i9 >> 2] | 0;
 if ((i11 | 0) == 0) {
  __ZN3JSC9HandleSet4growEv(i7 + 20360 | 0);
  i12 = HEAP32[i9 >> 2] | 0;
 } else {
  i12 = i11;
 }
 i11 = i12 + 12 | 0;
 HEAP32[i9 >> 2] = HEAP32[i11 >> 2];
 HEAP32[i12 + 4 >> 2] = -6;
 HEAP32[i12 >> 2] = 0;
 i9 = i12 + 8 | 0;
 HEAP32[i9 >> 2] = 0;
 HEAP32[i11 >> 2] = 0;
 i13 = i7 + 20420 | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 HEAP32[i9 >> 2] = i7 + 20408;
 HEAP32[i11 >> 2] = i14;
 HEAP32[i13 >> 2] = i12;
 HEAP32[i14 + 8 >> 2] = i12;
 i14 = i12 | 0;
 HEAP32[i4 + 4 >> 2] = (i10 | 0) == 0 ? -6 : -5;
 HEAP32[i4 >> 2] = i10;
 i10 = (i12 & -4096) + 12 | 0;
 __ZN3JSC9HandleSet12writeBarrierEPNS_7JSValueERKS1_(HEAP32[i10 >> 2] | 0, i14, i4);
 i13 = i4 | 0;
 i4 = HEAP32[i13 + 4 >> 2] | 0;
 i7 = i12 | 0;
 HEAP32[i7 >> 2] = HEAP32[i13 >> 2];
 HEAP32[i7 + 4 >> 2] = i4;
 i4 = i1 + 12 | 0;
 i7 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i7 | 0) == 0) {
   i15 = 11;
  } else {
   if ((HEAP32[i7 + 4 >> 2] | 0) == -6) {
    i15 = 11;
    break;
   }
   if ((HEAP32[i7 + 8 >> 2] & 3 | 0) != 0) {
    i15 = 11;
   }
  }
 } while (0);
 do {
  if ((i15 | 0) == 11) {
   i7 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i1 >> 2] | 0) + 28 >> 2] & 31](i1, i2) | 0;
   i13 = i6 | 0;
   if ((i7 | 0) == 0) {
    i16 = 0;
   } else {
    i9 = i7;
    i7 = (i9 & -65536) + 1060 | 0;
    i17 = i7 | 0;
    i18 = HEAP32[i17 >> 2] | 0;
    if ((i18 | 0) == 0) {
     i19 = __ZN3JSC7WeakSet13findAllocatorEv(i7) | 0;
    } else {
     i19 = i18;
    }
    HEAP32[i17 >> 2] = HEAP32[i19 >> 2];
    i17 = i19;
    HEAP32[i17 >> 2] = i9;
    HEAP32[i17 + 4 >> 2] = -5;
    HEAP32[i19 + 8 >> 2] = 0;
    HEAP32[i19 + 12 >> 2] = 0;
    i16 = i19;
   }
   i17 = i5 | 0;
   HEAP32[i13 >> 2] = 0;
   i9 = HEAP32[i4 >> 2] | 0;
   HEAP32[i4 >> 2] = i16;
   HEAP32[i17 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
   if ((HEAP32[i13 >> 2] | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i13);
  }
 } while (0);
 i16 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i16 | 0) == 0) {
   i20 = 0;
  } else {
   if ((HEAP32[i16 + 4 >> 2] | 0) == -6) {
    i20 = 0;
    break;
   }
   if ((HEAP32[i16 + 8 >> 2] & 3 | 0) != 0) {
    i20 = 0;
    break;
   }
   i8 = HEAP32[i4 >> 2] | 0;
   if ((i8 | 0) == 0) {
    i20 = 0;
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] & 3 | 0) != 0) {
    i20 = 0;
    break;
   }
   i20 = HEAP32[i8 >> 2] | 0;
  }
 } while (0);
 if ((i12 | 0) != 0) {
  i4 = HEAP32[i10 >> 2] | 0;
  i10 = i4 + 84 | 0;
  if ((i12 | 0) == (HEAP32[i10 >> 2] | 0)) {
   HEAP32[i10 >> 2] = HEAP32[i11 >> 2];
  }
  i10 = i14 + 8 | 0;
  i14 = HEAP32[i10 >> 2] | 0;
  i16 = HEAP32[i11 >> 2] | 0;
  HEAP32[i14 + 12 >> 2] = i16;
  HEAP32[i16 + 8 >> 2] = i14;
  HEAP32[i10 >> 2] = 0;
  HEAP32[i11 >> 2] = 0;
  i10 = i4 + 80 | 0;
  HEAP32[i11 >> 2] = HEAP32[i10 >> 2];
  HEAP32[i10 >> 2] = i12;
 }
 i12 = i1 + 4 | 0;
 i1 = i12 | 0;
 i10 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i10 | 0) != 0) {
  HEAP32[i1 >> 2] = i10;
  STACKTOP = i3;
  return i20 | 0;
 }
 i10 = i12 - 4 | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i3;
  return i20 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 63](i10);
 STACKTOP = i3;
 return i20 | 0;
}
function __ZN3WTF6VectorIN7WebCore17EventListenerInfoELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i5 + (i6 * 28 & -1) | 0;
 if (i2 >>> 0 > 153391689 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 * 28 & -1) | 0;
 HEAP32[i3 >> 2] = (i7 >>> 0) / 28 & -1;
 i2 = __ZN3WTF10fastMallocEj(i7) | 0;
 HEAP32[i4 >> 2] = i2;
 L7 : do {
  if ((i6 | 0) != 0) {
   i7 = i5;
   i8 = i2;
   while (1) {
    HEAP32[i8 >> 2] = HEAP32[i7 >> 2];
    i9 = i7 + 4 | 0;
    i10 = HEAP32[i9 >> 2] | 0;
    HEAP32[i8 + 4 >> 2] = i10;
    if ((i10 | 0) != 0) {
     i11 = i10 | 0;
     HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
    }
    i11 = i7 + 12 | 0;
    i10 = HEAP32[i11 >> 2] | 0;
    i12 = i7 + 16 | 0;
    i13 = HEAP32[i12 >> 2] | 0;
    i14 = i8 + 20 | 0;
    i15 = i8 + 8 | 0;
    HEAP32[i15 >> 2] = i14;
    i16 = i8 + 12 | 0;
    HEAP32[i16 >> 2] = 1;
    HEAP32[i8 + 16 >> 2] = i13;
    if (i10 >>> 0 > 1 >>> 0) {
     if (i10 >>> 0 > 536870911 >>> 0) {
      break;
     }
     i13 = __ZN3WTF18fastMallocGoodSizeEj(i10 << 3) | 0;
     HEAP32[i16 >> 2] = i13 >>> 3;
     i16 = __ZN3WTF10fastMallocEj(i13) | 0;
     HEAP32[i15 >> 2] = i16;
     i17 = i16;
    } else {
     i17 = i14;
    }
    i14 = i7 + 8 | 0;
    do {
     if ((i17 | 0) == 0) {
      i18 = 16;
     } else {
      i16 = HEAP32[i14 >> 2] | 0;
      i15 = HEAP32[i12 >> 2] | 0;
      i13 = i16 + (i15 << 3) | 0;
      if ((i15 | 0) == 0) {
       break;
      } else {
       i19 = i16;
       i20 = i17;
      }
      while (1) {
       i16 = HEAP32[i19 >> 2] | 0;
       HEAP32[i20 >> 2] = i16;
       if ((i16 | 0) != 0) {
        i15 = i16 + 4 | 0;
        HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
       }
       HEAP8[i20 + 4 | 0] = HEAP8[i19 + 4 | 0] & 1;
       i15 = i19 + 8 | 0;
       if ((i15 | 0) == (i13 | 0)) {
        i18 = 16;
        break;
       } else {
        i19 = i15;
        i20 = i20 + 8 | 0;
       }
      }
     }
    } while (0);
    do {
     if ((i18 | 0) == 16) {
      i18 = 0;
      i13 = HEAP32[i12 >> 2] | 0;
      if ((i13 | 0) == 0) {
       break;
      }
      i15 = HEAP32[i14 >> 2] | 0;
      i16 = i15 + (i13 << 3) | 0;
      i13 = i15;
      while (1) {
       i15 = HEAP32[i13 >> 2] | 0;
       do {
        if ((i15 | 0) != 0) {
         i10 = i15 + 4 | 0;
         i21 = i10 | 0;
         i22 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
         if ((i22 | 0) != 0) {
          HEAP32[i21 >> 2] = i22;
          break;
         }
         i22 = i10 - 4 | 0;
         if ((i22 | 0) == 0) {
          break;
         }
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i22 >> 2] | 0) + 4 >> 2] & 63](i22);
        }
       } while (0);
       i13 = i13 + 8 | 0;
       if ((i13 | 0) == (i16 | 0)) {
        break;
       }
      }
      HEAP32[i12 >> 2] = 0;
     }
    } while (0);
    i12 = HEAP32[i14 >> 2] | 0;
    if (!((i7 + 20 | 0) == (i12 | 0) | (i12 | 0) == 0)) {
     HEAP32[i14 >> 2] = 0;
     HEAP32[i11 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i12);
    }
    i12 = HEAP32[i9 >> 2] | 0;
    do {
     if ((i12 | 0) != 0) {
      i16 = i12 | 0;
      i13 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
      if ((i13 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i12);
       break;
      } else {
       HEAP32[i16 >> 2] = i13;
       break;
      }
     }
    } while (0);
    i12 = i7 + 28 | 0;
    if ((i12 | 0) == (i1 | 0)) {
     break L7;
    } else {
     i7 = i12;
     i8 = i8 + 28 | 0;
    }
   }
   _WTFCrash();
  }
 } while (0);
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
function __ZN7WebCore17InspectorDOMAgent29pushNodeByBackendIdToFrontendEPN3WTF6StringEiPi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 HEAP32[i6 >> 2] = i3;
 i12 = i1 + 152 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 L1 : do {
  if ((i13 | 0) != 0) {
   i14 = HEAP32[i1 + 160 >> 2] | 0;
   i15 = ~(i3 << 15) + i3 | 0;
   i16 = (i15 >>> 10 ^ i15) * 9 & -1;
   i15 = i16 >>> 6 ^ i16;
   i16 = i15 + ~(i15 << 11) | 0;
   i15 = i16 >>> 16 ^ i16;
   i16 = i14 & i15;
   i17 = i13 + (i16 * 12 & -1) | 0;
   i18 = HEAP32[i17 >> 2] | 0;
   if ((i18 | 0) == (i3 | 0)) {
    i19 = i17;
   } else {
    i17 = (i15 >>> 23) + ~i15 | 0;
    i15 = i17 << 12 ^ i17;
    i17 = i15 >>> 7 ^ i15;
    i15 = i17 << 2 ^ i17;
    i17 = i15 >>> 20 ^ i15 | 1;
    i15 = 0;
    i20 = i16;
    i16 = i18;
    while (1) {
     if ((i16 | 0) == 0) {
      break L1;
     }
     i18 = (i15 | 0) == 0 ? i17 : i15;
     i21 = i18 + i20 & i14;
     i22 = i13 + (i21 * 12 & -1) | 0;
     i23 = HEAP32[i22 >> 2] | 0;
     if ((i23 | 0) == (i3 | 0)) {
      i19 = i22;
      break;
     } else {
      i15 = i18;
      i20 = i21;
      i16 = i23;
     }
    }
   }
   if ((i19 | 0) == 0) {
    break;
   }
   __ZNK3WTF7HashMapIiNSt3__14pairIPN7WebCore4NodeENS_6StringEEENS_7IntHashIjEENS_10HashTraitsIiEENSA_IS7_EEE3getERKi(i8, i12, i6);
   i16 = HEAP32[i8 >> 2] | 0;
   i20 = HEAP32[i8 + 4 >> 2] | 0;
   do {
    if ((i20 | 0) != 0) {
     i15 = i20 | 0;
     i14 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i20);
      break;
     } else {
      HEAP32[i15 >> 2] = i14;
      break;
     }
    }
   } while (0);
   __ZNK3WTF7HashMapIiNSt3__14pairIPN7WebCore4NodeENS_6StringEEENS_7IntHashIjEENS_10HashTraitsIiEENSA_IS7_EEE3getERKi(i10, i12, i6);
   i20 = i10 + 4 | 0;
   i14 = HEAP32[i20 >> 2] | 0;
   HEAP32[i20 >> 2] = 0;
   i20 = i9 | 0;
   HEAP32[i20 >> 2] = i14;
   HEAP32[i4 >> 2] = __ZN7WebCore17InspectorDOMAgent22pushNodePathToFrontendEPNS_4NodeE(i1, i16) | 0;
   if (__ZN3WTF5equalEPKNS_10StringImplEPKh(i14, H_BASE + 2432 | 0) | 0) {
    __ZN3WTF7HashMapIiNSt3__14pairIPN7WebCore4NodeENS_6StringEEENS_7IntHashIjEENS_10HashTraitsIiEENSA_IS7_EEE6removeERKi(i12, i6) | 0;
    __ZN3WTF7HashMapINS_6StringENS0_INS_6RefPtrIN7WebCore4NodeEEEiNS_7PtrHashIS5_EENS_10HashTraitsIS5_EENS8_IiEEEENS_10StringHashENS8_IS1_EENS8_ISB_EEE4findERKS1_(i11, i1 + 60 | 0, i9);
    __ZN3WTF7HashMapINS_6RefPtrIN7WebCore4NodeEEEiNS_7PtrHashIS4_EENS_10HashTraitsIS4_EENS7_IiEEE6removeEPS3_((HEAP32[i11 >> 2] | 0) + 4 | 0, i16) | 0;
    i24 = HEAP32[i20 >> 2] | 0;
   } else {
    i24 = i14;
   }
   if ((i24 | 0) == 0) {
    STACKTOP = i5;
    return;
   }
   i14 = i24 | 0;
   i20 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i20 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i24);
    STACKTOP = i5;
    return;
   } else {
    HEAP32[i14 >> 2] = i20;
    STACKTOP = i5;
    return;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i7, H_BASE + 704 | 0);
 i24 = i7 | 0;
 i7 = HEAP32[i24 >> 2] | 0;
 HEAP32[i24 >> 2] = 0;
 i11 = i2 | 0;
 i2 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = i7;
 do {
  if ((i2 | 0) != 0) {
   i7 = i2 | 0;
   i11 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i7 >> 2] = i11;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i24 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i24 = i2 | 0;
 i11 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
 if ((i11 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i24 >> 2] = i11;
  STACKTOP = i5;
  return;
 }
}
function __ZN3WTF9HashTableINS_6RefPtrIN7WebCore4NodeEEENS_12KeyValuePairIS4_iEENS_24KeyValuePairKeyExtractorIS6_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSC_IiEEEESD_E3addINS_17HashMapTranslatorISF_SA_EERPS3_RiEENS_18HashTableAddResultINS_17HashTableIteratorIS4_S6_S8_SA_SF_SD_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableINS_6RefPtrIN7WebCore4NodeEEENS_12KeyValuePairIS4_iEENS_24KeyValuePairKeyExtractorIS6_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSC_IiEEEESD_E6rehashEiPS6_(i2, i8, 0) | 0;
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
   i14 = i8;
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
     i21 = 8;
     break;
    }
    i22 = (i20 | 0) == -1 ? i19 : i17;
    i23 = (i16 | 0) == 0 ? i15 : i16;
    i24 = i23 + i18 & i6;
    i25 = i10 + (i24 << 3) | 0;
    i26 = HEAP32[i25 >> 2] | 0;
    if ((i26 | 0) == 0) {
     i21 = 10;
     break;
    } else {
     i16 = i23;
     i17 = i22;
     i18 = i24;
     i19 = i25;
     i20 = i26;
    }
   }
   if ((i21 | 0) == 10) {
    if ((i22 | 0) == 0) {
     i13 = i25;
     i14 = i8;
     break;
    }
    i20 = i22;
    HEAP32[i20 >> 2] = 0;
    HEAP32[i20 + 4 >> 2] = 0;
    i20 = i2 + 16 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) - 1;
    i13 = i22;
    i14 = HEAP32[i3 >> 2] | 0;
    break;
   } else if ((i21 | 0) == 8) {
    i20 = i10 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i18 = i1;
    HEAP32[i18 >> 2] = i19;
    HEAP32[i18 + 4 >> 2] = i20;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   }
  }
 } while (0);
 if ((i14 | 0) != 0) {
  i10 = i14 + 8 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
 }
 i10 = i13 | 0;
 i21 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = i14;
 do {
  if ((i21 | 0) != 0) {
   i14 = i21 + 8 | 0;
   i10 = i14 | 0;
   i3 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i3;
   if ((i3 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
  }
 } while (0);
 HEAP32[i13 + 4 >> 2] = HEAP32[i4 >> 2];
 i4 = i2 + 12 | 0;
 i21 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i21;
 i4 = i2 + 4 | 0;
 i14 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i21 << 1 | 0) < (i14 | 0)) {
  i27 = i13;
  i28 = i14;
 } else {
  if ((i14 | 0) == 0) {
   i29 = 8;
  } else {
   i3 = i14 << 1;
   i29 = (i21 * 6 & -1 | 0) < (i3 | 0) ? i14 : i3;
  }
  i3 = __ZN3WTF9HashTableINS_6RefPtrIN7WebCore4NodeEEENS_12KeyValuePairIS4_iEENS_24KeyValuePairKeyExtractorIS6_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSC_IiEEEESD_E6rehashEiPS6_(i2, i29, i13) | 0;
  i27 = i3;
  i28 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i28 << 3) | 0;
 i28 = i1;
 HEAP32[i28 >> 2] = i27;
 HEAP32[i28 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableIiNS_12KeyValuePairIiNSt3__14pairIPN7WebCore4NodeENS_6StringEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7IntHashIjEENS_7HashMapIiS8_SD_NS_10HashTraitsIiEENSF_IS8_EEE18KeyValuePairTraitsESG_E3addINS_17HashMapTranslatorISJ_SD_EERKiS8_EENS_18HashTableAddResultINS_17HashTableIteratorIiS9_SB_SD_SJ_SG_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableIiNS_12KeyValuePairIiNSt3__14pairIPN7WebCore4NodeENS_6StringEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7IntHashIjEENS_7HashMapIiS8_SD_NS_10HashTraitsIiEENSF_IS8_EEE18KeyValuePairTraitsESG_E6rehashEiPS9_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i9 = i8 + ~(i8 << 15) | 0;
 i7 = (i9 >>> 10 ^ i9) * 9 & -1;
 i9 = i7 >>> 6 ^ i7;
 i7 = i9 + ~(i9 << 11) | 0;
 i9 = i7 >>> 16 ^ i7;
 i7 = i9 & i6;
 i11 = i10 + (i7 * 12 & -1) | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i12 | 0) == 0) {
   i13 = i11;
   i14 = i8;
  } else {
   i15 = (i9 >>> 23) + ~i9 | 0;
   i16 = i15 << 12 ^ i15;
   i15 = i16 >>> 7 ^ i16;
   i16 = i15 << 2 ^ i15;
   i15 = i16 >>> 20 ^ i16 | 1;
   i16 = 0;
   i17 = 0;
   i18 = i7;
   i19 = i11;
   i20 = i12;
   while (1) {
    if ((i20 | 0) == (i8 | 0)) {
     i21 = 8;
     break;
    }
    i22 = (i20 | 0) == -1 ? i19 : i17;
    i23 = (i16 | 0) == 0 ? i15 : i16;
    i24 = i23 + i18 & i6;
    i25 = i10 + (i24 * 12 & -1) | 0;
    i26 = HEAP32[i25 >> 2] | 0;
    if ((i26 | 0) == 0) {
     i21 = 10;
     break;
    } else {
     i16 = i23;
     i17 = i22;
     i18 = i24;
     i19 = i25;
     i20 = i26;
    }
   }
   if ((i21 | 0) == 8) {
    i20 = i10 + ((HEAP32[i2 + 4 >> 2] | 0) * 12 & -1) | 0;
    i18 = i1;
    HEAP32[i18 >> 2] = i19;
    HEAP32[i18 + 4 >> 2] = i20;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i21 | 0) == 10) {
    if ((i22 | 0) == 0) {
     i13 = i25;
     i14 = i8;
     break;
    }
    _memset(i22 | 0, 0, 12) | 0;
    i20 = i2 + 16 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) - 1;
    i13 = i22;
    i14 = HEAP32[i3 >> 2] | 0;
    break;
   }
  }
 } while (0);
 HEAP32[i13 >> 2] = i14;
 HEAP32[i13 + 4 >> 2] = HEAP32[i4 >> 2];
 i14 = i4 + 4 | 0;
 i4 = HEAP32[i14 >> 2] | 0;
 HEAP32[i14 >> 2] = 0;
 i14 = i13 + 8 | 0;
 i3 = HEAP32[i14 >> 2] | 0;
 HEAP32[i14 >> 2] = i4;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 | 0;
   i14 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i4 >> 2] = i14;
    break;
   }
  }
 } while (0);
 i3 = i2 + 12 | 0;
 i14 = (HEAP32[i3 >> 2] | 0) + 1 | 0;
 HEAP32[i3 >> 2] = i14;
 i3 = i2 + 4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i14 << 1 | 0) < (i4 | 0)) {
  i27 = i13;
  i28 = i4;
 } else {
  if ((i4 | 0) == 0) {
   i29 = 8;
  } else {
   i22 = i4 << 1;
   i29 = (i14 * 6 & -1 | 0) < (i22 | 0) ? i4 : i22;
  }
  i22 = __ZN3WTF9HashTableIiNS_12KeyValuePairIiNSt3__14pairIPN7WebCore4NodeENS_6StringEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7IntHashIjEENS_7HashMapIiS8_SD_NS_10HashTraitsIiEENSF_IS8_EEE18KeyValuePairTraitsESG_E6rehashEiPS9_(i2, i29, i13) | 0;
  i27 = i22;
  i28 = HEAP32[i3 >> 2] | 0;
 }
 i3 = (HEAP32[i5 >> 2] | 0) + (i28 * 12 & -1) | 0;
 i28 = i1;
 HEAP32[i28 >> 2] = i27;
 HEAP32[i28 + 4 >> 2] = i3;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableINS_6RefPtrIN7WebCore4NodeEEENS_12KeyValuePairIS4_iEENS_24KeyValuePairKeyExtractorIS6_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSC_IiEEEESD_E3addINS_22IdentityHashTranslatorISA_EERKS4_RKS6_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S6_S8_SA_SF_SD_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableINS_6RefPtrIN7WebCore4NodeEEENS_12KeyValuePairIS4_iEENS_24KeyValuePairKeyExtractorIS6_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSC_IiEEEESD_E6rehashEiPS6_(i2, i8, 0) | 0;
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
 i7 = i10 + (i3 << 3) | 0;
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
    i23 = i10 + (i22 << 3) | 0;
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
   if ((i19 | 0) == 10) {
    if ((i20 | 0) == 0) {
     i12 = i23;
     break;
    }
    i18 = i20;
    HEAP32[i18 >> 2] = 0;
    HEAP32[i18 + 4 >> 2] = 0;
    i18 = i2 + 16 | 0;
    HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) - 1;
    i12 = i20;
    break;
   } else if ((i19 | 0) == 8) {
    i18 = i10 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i16 = i1;
    HEAP32[i16 >> 2] = i17;
    HEAP32[i16 + 4 >> 2] = i18;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   }
  }
 } while (0);
 i10 = HEAP32[i4 >> 2] | 0;
 if ((i10 | 0) != 0) {
  i19 = i10 + 8 | 0;
  HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
 }
 i19 = i12 | 0;
 i20 = HEAP32[i19 >> 2] | 0;
 HEAP32[i19 >> 2] = i10;
 do {
  if ((i20 | 0) != 0) {
   i10 = i20 + 8 | 0;
   i19 = i10 | 0;
   i23 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
   HEAP32[i19 >> 2] = i23;
   if ((i23 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 HEAP32[i12 + 4 >> 2] = HEAP32[i4 + 4 >> 2];
 i4 = i2 + 12 | 0;
 i20 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i20;
 i4 = i2 + 4 | 0;
 i10 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i20 << 1 | 0) < (i10 | 0)) {
  i25 = i12;
  i26 = i10;
 } else {
  if ((i10 | 0) == 0) {
   i27 = 8;
  } else {
   i23 = i10 << 1;
   i27 = (i20 * 6 & -1 | 0) < (i23 | 0) ? i10 : i23;
  }
  i23 = __ZN3WTF9HashTableINS_6RefPtrIN7WebCore4NodeEEENS_12KeyValuePairIS4_iEENS_24KeyValuePairKeyExtractorIS6_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSC_IiEEEESD_E6rehashEiPS6_(i2, i27, i12) | 0;
  i25 = i23;
  i26 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i26 << 3) | 0;
 i26 = i1;
 HEAP32[i26 >> 2] = i25;
 HEAP32[i26 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore17InspectorDOMAgent22didInvalidateStyleAttrEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 24 | 0;
 i7 = HEAP32[i1 + 48 >> 2] | 0;
 i8 = HEAP32[i1 + 40 >> 2] | 0;
 i9 = i2;
 i10 = i9 + ~(i9 << 15) | 0;
 i9 = (i10 >>> 10 ^ i10) * 9 & -1;
 i10 = i9 >>> 6 ^ i9;
 i9 = i10 + ~(i10 << 11) | 0;
 i10 = i9 >>> 16 ^ i9;
 if ((i8 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i9 = i7 & i10;
 i11 = i8 + (i9 << 3) | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 L4 : do {
  if ((i12 | 0) == (i2 | 0)) {
   i13 = i11;
  } else {
   i14 = (i10 >>> 23) + ~i10 | 0;
   i15 = i14 << 12 ^ i14;
   i14 = i15 >>> 7 ^ i15;
   i15 = i14 << 2 ^ i14;
   i14 = i15 >>> 20 ^ i15 | 1;
   i15 = 0;
   i16 = i9;
   i17 = i12;
   while (1) {
    if ((i17 | 0) == 0) {
     break;
    }
    i18 = (i15 | 0) == 0 ? i14 : i15;
    i19 = i18 + i16 & i7;
    i20 = i8 + (i19 << 3) | 0;
    i21 = HEAP32[i20 >> 2] | 0;
    if ((i21 | 0) == (i2 | 0)) {
     i13 = i20;
     break L4;
    } else {
     i15 = i18;
     i16 = i19;
     i17 = i21;
    }
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 if ((i13 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i13 + 4 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i13 = i1 + 204 | 0;
 i8 = i13 | 0;
 do {
  if ((HEAP32[i8 >> 2] | 0) == 0) {
   i7 = __ZN3WTF10fastMallocEj(88) | 0;
   i12 = i7;
   HEAP32[i7 >> 2] = i1;
   i9 = i7 + 8 | 0;
   __ZN7WebCore9TimerBaseC2Ev(i9);
   HEAP32[i9 >> 2] = H_BASE + 2040;
   HEAP32[i7 + 52 >> 2] = i12;
   i9 = i7 + 56 | 0;
   HEAP32[i9 >> 2] = F_BASE_vii + 16;
   HEAP32[i9 + 4 >> 2] = 0;
   _memset(i7 + 64 | 0, 0, 20) | 0;
   i7 = i6 | 0;
   HEAP32[i7 >> 2] = i12;
   __ZN3WTF6OwnPtrIN7WebCore28RevalidateStyleAttributeTaskEEaSERKNS_10PassOwnPtrIS2_EE(i13, i6) | 0;
   i12 = HEAP32[i7 >> 2] | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   i7 = HEAP32[i12 + 64 >> 2] | 0;
   if ((i7 | 0) != 0) {
    i9 = HEAP32[i12 + 68 >> 2] | 0;
    if ((i9 | 0) > 0) {
     i10 = 0;
     while (1) {
      i11 = HEAP32[i7 + (i10 << 2) >> 2] | 0;
      i17 = i11;
      do {
       if (!((i17 | 0) == (-1 | 0) | (i17 | 0) == 0)) {
        i16 = i11 + 8 | 0;
        i15 = i16 | 0;
        i14 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
        HEAP32[i15 >> 2] = i14;
        if ((i14 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
       }
      } while (0);
      i10 = i10 + 1 | 0;
      if ((i10 | 0) >= (i9 | 0)) {
       break;
      }
     }
    }
    __ZN3WTF8fastFreeEPv(i7);
   }
   __ZN7WebCore9TimerBaseD2Ev(i12 + 8 | 0);
   __ZN3WTF8fastFreeEPv(i12);
  }
 } while (0);
 i6 = HEAP32[i8 >> 2] | 0;
 i8 = i4 | 0;
 HEAP32[i8 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i13 = i2 + 8 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
 }
 __ZN3WTF9HashTableINS_6RefPtrIN7WebCore7ElementEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_(i5, i6 + 64 | 0, i4, i4);
 i4 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i8 = i4 + 8 | 0;
   i5 = i8 | 0;
   i13 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i13;
   if ((i13 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 if (+HEAPF64[i6 + 16 >> 3] != +0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore9TimerBase5startEdd(i6 + 8 | 0, +0, +0);
 STACKTOP = i3;
 return;
}
function __ZN3WTF9HashTableIiNS_12KeyValuePairIiNSt3__14pairIPN7WebCore4NodeENS_6StringEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7IntHashIjEENS_7HashMapIiS8_SD_NS_10HashTraitsIiEENSF_IS8_EEE18KeyValuePairTraitsESG_E6rehashEiPS9_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0;
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
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 } else {
  i10 = 0;
  i11 = 0;
 }
 while (1) {
  i2 = i7 + (i10 * 12 & -1) | 0;
  i12 = i2 | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  if ((i13 | 0) == (-1 | 0) | (i13 | 0) == 0) {
   i14 = i11;
  } else {
   i15 = HEAP32[i6 >> 2] | 0;
   i16 = HEAP32[i4 >> 2] | 0;
   i17 = i13 + ~(i13 << 15) | 0;
   i18 = (i17 >>> 10 ^ i17) * 9 & -1;
   i17 = i18 >>> 6 ^ i18;
   i18 = i17 + ~(i17 << 11) | 0;
   i17 = i18 >>> 16 ^ i18;
   i18 = i16 & i17;
   i19 = i15 + (i18 * 12 & -1) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L8 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 6;
    } else {
     i24 = (i17 >>> 23) + ~i17 | 0;
     i25 = i24 << 12 ^ i24;
     i24 = i25 >>> 7 ^ i25;
     i25 = i24 << 2 ^ i24;
     i24 = i25 >>> 20 ^ i25 | 1;
     i25 = 0;
     i26 = 0;
     i27 = i18;
     i28 = i19;
     i29 = i20;
     while (1) {
      if ((i29 | 0) == (i13 | 0)) {
       i30 = i28;
       break L8;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i16;
      i34 = i15 + (i33 * 12 & -1) | 0;
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
   i15 = i30 + 8 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   do {
    if ((i16 | 0) != 0) {
     i13 = i16 | 0;
     i20 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
     if ((i20 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i16);
      break;
     } else {
      HEAP32[i13 >> 2] = i20;
      break;
     }
    }
   } while (0);
   HEAP32[i30 >> 2] = HEAP32[i12 >> 2];
   HEAP32[i30 + 4 >> 2] = HEAP32[i7 + (i10 * 12 & -1) + 4 >> 2];
   i16 = i7 + (i10 * 12 & -1) + 8 | 0;
   i20 = HEAP32[i16 >> 2] | 0;
   HEAP32[i16 >> 2] = 0;
   HEAP32[i15 >> 2] = i20;
   i14 = (i2 | 0) == (i3 | 0) ? i30 : i11;
  }
  i20 = i10 + 1 | 0;
  if ((i20 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i20;
   i11 = i14;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i36 = 0;
 } else {
  i8 = i14;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  do {
   if ((HEAP32[i7 + (i36 * 12 & -1) >> 2] | 0) != -1) {
    i1 = HEAP32[i7 + (i36 * 12 & -1) + 8 >> 2] | 0;
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
  i2 = i36 + 1 | 0;
  if ((i2 | 0) < (i5 | 0)) {
   i36 = i2;
  } else {
   i8 = i14;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN3WTF9HashTableINS_6RefPtrIN7WebCore4NodeEEENS_12KeyValuePairIS4_iEENS_24KeyValuePairKeyExtractorIS6_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSC_IiEEEESD_E6rehashEiPS6_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0;
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
   i14 = i18 & i17;
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
   i16 = i30 | 0;
   i17 = HEAP32[i16 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i13 = i17 + 8 | 0;
     i20 = i13 | 0;
     i19 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
     HEAP32[i20 >> 2] = i19;
     if ((i19 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
    }
   } while (0);
   i17 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   HEAP32[i16 >> 2] = i17;
   HEAP32[i30 + 4 >> 2] = HEAP32[i7 + (i10 << 3) + 4 >> 2];
   i15 = (i2 | 0) == (i3 | 0) ? i30 : i11;
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
  i36 = 0;
 } else {
  i8 = i15;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  i1 = HEAP32[i7 + (i36 << 3) >> 2] | 0;
  i11 = i1;
  do {
   if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
    i10 = i1 + 8 | 0;
    i30 = i10 | 0;
    i3 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
    HEAP32[i30 >> 2] = i3;
    if ((i3 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
   }
  } while (0);
  i1 = i36 + 1 | 0;
  if ((i1 | 0) < (i5 | 0)) {
   i36 = i1;
  } else {
   i8 = i15;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RNS_10PassRefPtrIS5_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6expandEPS7_(i2, 0) | 0;
  i7 = HEAP32[i5 >> 2] | 0;
 } else {
  i7 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 i9 = HEAP32[i3 + 16 >> 2] | 0;
 if (i9 >>> 0 > 127 >>> 0) {
  i10 = i9 >>> 7;
 } else {
  i10 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i3) | 0;
 }
 i3 = (i10 >>> 23) + ~i10 | 0;
 i9 = i3 << 12 ^ i3;
 i3 = i9 >>> 7 ^ i9;
 i9 = i3 << 2 ^ i3;
 i3 = i9 >>> 20 ^ i9 | 1;
 i9 = 0;
 i11 = i10;
 i10 = 0;
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
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i14, HEAP32[i8 >> 2] | 0) | 0) {
    i17 = 9;
    break;
   } else {
    i16 = i9;
   }
  }
  i14 = (i10 | 0) == 0 ? i3 : i10;
  i9 = i16;
  i11 = i14 + i12 | 0;
  i10 = i14;
 }
 if ((i17 | 0) == 9) {
  i17 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 3) | 0;
  i10 = i1;
  HEAP32[i10 >> 2] = i13;
  HEAP32[i10 + 4 >> 2] = i17;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i9 | 0) == 0) {
  i18 = i13;
 } else {
  i13 = i9;
  HEAP32[i13 >> 2] = 0;
  HEAP32[i13 + 4 >> 2] = 0;
  i13 = i2 + 16 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) - 1;
  i18 = i9;
 }
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) != 0) {
  i8 = i9 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 i8 = i18 | 0;
 i13 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = i9;
 do {
  if ((i13 | 0) != 0) {
   i9 = i13 | 0;
   i8 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i9 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i13 = i4 | 0;
 i4 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 i13 = i18 + 4 | 0;
 i8 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = i4;
 do {
  if ((i8 | 0) != 0) {
   i4 = i8 + 4 | 0;
   i13 = i4 | 0;
   i9 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i13 >> 2] = i9;
    break;
   }
   i9 = i4 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 63](i9);
  }
 } while (0);
 i8 = i2 + 12 | 0;
 i9 = (HEAP32[i8 >> 2] | 0) + 1 | 0;
 HEAP32[i8 >> 2] = i9;
 i8 = i2 + 4 | 0;
 i4 = HEAP32[i8 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i9 << 1 | 0) < (i4 | 0)) {
  i19 = i18;
  i20 = i4;
 } else {
  i4 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6expandEPS7_(i2, i18) | 0;
  i19 = i4;
  i20 = HEAP32[i8 >> 2] | 0;
 }
 i8 = (HEAP32[i5 >> 2] | 0) + (i20 << 3) | 0;
 i20 = i1;
 HEAP32[i20 >> 2] = i19;
 HEAP32[i20 + 4 >> 2] = i8;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF7HashMapINS_6StringENS0_INS_6RefPtrIN7WebCore4NodeEEEiNS_7PtrHashIS5_EENS_10HashTraitsIS5_EENS8_IiEEEENS_10StringHashENS8_IS1_EENS8_ISB_EEE6removeENS_24HashTableIteratorAdapterINS_9HashTableIS1_NS_12KeyValuePairIS1_SB_EENS_24KeyValuePairKeyExtractorISJ_EESC_NSF_18KeyValuePairTraitsESD_EESJ_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 i4 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i2 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i4 + 4 >> 2];
 i4 = i1 | 0;
 i5 = i1 | 0;
 i6 = i1 + 4 | 0;
 i7 = (HEAP32[i5 >> 2] | 0) + ((HEAP32[i6 >> 2] | 0) * 24 & -1) | 0;
 if ((HEAP32[i2 >> 2] | 0) == (i7 | 0)) {
  i8 = 0;
  STACKTOP = i3;
  return i8 | 0;
 }
 i9 = HEAP32[i2 >> 2] | 0;
 if ((i9 | 0) == (i7 | 0)) {
  i8 = 1;
  STACKTOP = i3;
  return i8 | 0;
 }
 i7 = HEAP32[i9 + 4 >> 2] | 0;
 if ((i7 | 0) != 0) {
  i2 = HEAP32[i9 + 8 >> 2] | 0;
  if ((i2 | 0) > 0) {
   i10 = 0;
   while (1) {
    i11 = HEAP32[i7 + (i10 << 3) >> 2] | 0;
    i12 = i11;
    do {
     if (!((i12 | 0) == (-1 | 0) | (i12 | 0) == 0)) {
      i13 = i11 + 8 | 0;
      i14 = i13 | 0;
      i15 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
      HEAP32[i14 >> 2] = i15;
      if ((i15 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
     }
    } while (0);
    i10 = i10 + 1 | 0;
    if ((i10 | 0) >= (i2 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i7);
 }
 i7 = i9 | 0;
 i9 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i2 = i9 | 0;
   i10 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i2 >> 2] = i10;
    break;
   }
  }
 } while (0);
 HEAP32[i7 >> 2] = -1;
 i7 = i1 + 16 | 0;
 HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 i9 = i1 + 12 | 0;
 i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
 HEAP32[i9 >> 2] = i10;
 i9 = HEAP32[i6 >> 2] | 0;
 if (!((i10 * 6 & -1 | 0) < (i9 | 0) & (i9 | 0) > 8)) {
  i8 = 1;
  STACKTOP = i3;
  return i8 | 0;
 }
 i10 = (i9 | 0) / 2 & -1;
 i2 = HEAP32[i5 >> 2] | 0;
 HEAP32[i6 >> 2] = i10;
 HEAP32[i1 + 8 >> 2] = i10 - 1;
 i1 = __ZN3WTF10fastMallocEj(i10 * 24 & -1) | 0;
 if ((i9 | 0) > 1) {
  i6 = 0;
  while (1) {
   __ZN3WTF26HashTableBucketInitializerILb0EE10initializeINS_7HashMapINS_6StringENS3_INS_6RefPtrIN7WebCore4NodeEEEiNS_7PtrHashIS8_EENS_10HashTraitsIS8_EENSB_IiEEEENS_10StringHashENSB_IS4_EENSB_ISE_EEE18KeyValuePairTraitsENS_12KeyValuePairIS4_SE_EEEEvRT0_(i1 + (i6 * 24 & -1) | 0);
   i6 = i6 + 1 | 0;
   if ((i6 | 0) >= (i10 | 0)) {
    break;
   }
  }
 }
 HEAP32[i5 >> 2] = i1;
 if ((i9 | 0) != 0) {
  i1 = 0;
  while (1) {
   i5 = i2 + (i1 * 24 & -1) | 0;
   i10 = HEAP32[i5 >> 2] | 0;
   if (!((i10 | 0) == (-1 | 0) | (i10 | 0) == 0)) {
    __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_7HashMapINS_6RefPtrIN7WebCore4NodeEEEiNS_7PtrHashIS7_EENS_10HashTraitsIS7_EENSA_IiEEEEEENS_24KeyValuePairKeyExtractorISE_EENS_10StringHashENS3_IS1_SD_SH_NSA_IS1_EENSA_ISD_EEE18KeyValuePairTraitsESI_E8reinsertEOSE_(i4, i5) | 0;
   }
   i1 = i1 + 1 | 0;
   if ((i1 | 0) == (i9 | 0)) {
    break;
   }
  }
 }
 HEAP32[i7 >> 2] = 0;
 __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_7HashMapINS_6RefPtrIN7WebCore4NodeEEEiNS_7PtrHashIS7_EENS_10HashTraitsIS7_EENSA_IiEEEEEENS_24KeyValuePairKeyExtractorISE_EENS_10StringHashENS3_IS1_SD_SH_NSA_IS1_EENSA_ISD_EEE18KeyValuePairTraitsESI_E15deallocateTableEPSE_i(i2, i9);
 i8 = 1;
 STACKTOP = i3;
 return i8 | 0;
}
function __ZN3WTF9HashTableIiNS_12KeyValuePairIiPN7WebCore4NodeEEENS_24KeyValuePairKeyExtractorIS5_EENS_7IntHashIjEENS_7HashMapIiS4_S9_NS_10HashTraitsIiEENSB_IS4_EEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKiRS4_EENS_18HashTableAddResultINS_17HashTableIteratorIiS5_S7_S9_SF_SC_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableIiNS_12KeyValuePairIiPN7WebCore4NodeEEENS_24KeyValuePairKeyExtractorIS5_EENS_7IntHashIjEENS_7HashMapIiS4_S9_NS_10HashTraitsIiEENSB_IS4_EEE18KeyValuePairTraitsESC_E6rehashEiPS5_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i9 = i8 + ~(i8 << 15) | 0;
 i7 = (i9 >>> 10 ^ i9) * 9 & -1;
 i9 = i7 >>> 6 ^ i7;
 i7 = i9 + ~(i9 << 11) | 0;
 i9 = i7 >>> 16 ^ i7;
 i7 = i9 & i6;
 i11 = i10 + (i7 << 3) | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i12 | 0) == 0) {
   i13 = i11;
   i14 = 11;
  } else {
   i15 = (i9 >>> 23) + ~i9 | 0;
   i16 = i15 << 12 ^ i15;
   i15 = i16 >>> 7 ^ i16;
   i16 = i15 << 2 ^ i15;
   i15 = i16 >>> 20 ^ i16 | 1;
   i16 = 0;
   i17 = 0;
   i18 = i7;
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
   if ((i14 | 0) == 10) {
    if ((i21 | 0) == 0) {
     i13 = i24;
     i14 = 11;
     break;
    }
    i20 = i21;
    HEAP32[i20 >> 2] = 0;
    HEAP32[i20 + 4 >> 2] = 0;
    i20 = i2 + 16 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) - 1;
    i26 = i21;
    i27 = HEAP32[i3 >> 2] | 0;
    i28 = i20;
    break;
   } else if ((i14 | 0) == 8) {
    i20 = i10 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i18 = i1;
    HEAP32[i18 >> 2] = i19;
    HEAP32[i18 + 4 >> 2] = i20;
    HEAP8[i1 + 8 | 0] = 0;
    return;
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
  i28 = __ZN3WTF9HashTableIiNS_12KeyValuePairIiPN7WebCore4NodeEEENS_24KeyValuePairKeyExtractorIS5_EENS_7IntHashIjEENS_7HashMapIiS4_S9_NS_10HashTraitsIiEENSB_IS4_EEE18KeyValuePairTraitsESC_E6rehashEiPS5_(i2, i31, i26) | 0;
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
function __ZN7WebCore17InspectorDOMAgent4bindEPNS_4NodeEPN3WTF7HashMapINS3_6RefPtrIS1_EEiNS3_7PtrHashIS6_EENS3_10HashTraitsIS6_EENS9_IiEEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 48 | 0;
 i11 = i4 + 64 | 0;
 HEAP32[i6 >> 2] = i2;
 HEAP32[i7 >> 2] = i3;
 i12 = HEAP32[i3 + 8 >> 2] | 0;
 i13 = HEAP32[i3 >> 2] | 0;
 i14 = i2;
 i15 = i14 + ~(i14 << 15) | 0;
 i14 = (i15 >>> 10 ^ i15) * 9 & -1;
 i15 = i14 >>> 6 ^ i14;
 i14 = i15 + ~(i15 << 11) | 0;
 i15 = i14 >>> 16 ^ i14;
 L1 : do {
  if ((i13 | 0) == 0) {
   i16 = 7;
  } else {
   i14 = i12 & i15;
   i17 = i13 + (i14 << 3) | 0;
   i18 = HEAP32[i17 >> 2] | 0;
   if ((i18 | 0) == (i2 | 0)) {
    i19 = i17;
   } else {
    i17 = (i15 >>> 23) + ~i15 | 0;
    i20 = i17 << 12 ^ i17;
    i17 = i20 >>> 7 ^ i20;
    i20 = i17 << 2 ^ i17;
    i17 = i20 >>> 20 ^ i20 | 1;
    i20 = 0;
    i21 = i14;
    i14 = i18;
    while (1) {
     if ((i14 | 0) == 0) {
      i16 = 7;
      break L1;
     }
     i18 = (i20 | 0) == 0 ? i17 : i20;
     i22 = i18 + i21 & i12;
     i23 = i13 + (i22 << 3) | 0;
     i24 = HEAP32[i23 >> 2] | 0;
     if ((i24 | 0) == (i2 | 0)) {
      i19 = i23;
      break;
     } else {
      i20 = i18;
      i21 = i22;
      i14 = i24;
     }
    }
   }
   if ((i19 | 0) == 0) {
    i16 = 7;
    break;
   }
   i14 = HEAP32[i19 + 4 >> 2] | 0;
   HEAP32[i8 >> 2] = i14;
   if ((i14 | 0) == 0) {
    break;
   } else {
    i25 = i14;
   }
   STACKTOP = i4;
   return i25 | 0;
  }
 } while (0);
 if ((i16 | 0) == 7) {
  HEAP32[i8 >> 2] = 0;
 }
 i16 = i1 + 172 | 0;
 i19 = HEAP32[i16 >> 2] | 0;
 HEAP32[i16 >> 2] = i19 + 1;
 HEAP32[i8 >> 2] = i19;
 HEAP32[i5 >> 2] = i2;
 __ZN3WTF9HashTableINS_6RefPtrIN7WebCore4NodeEEENS_12KeyValuePairIS4_iEENS_24KeyValuePairKeyExtractorIS6_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSC_IiEEEESD_E3addINS_17HashMapTranslatorISF_SA_EERPS3_RiEENS_18HashTableAddResultINS_17HashTableIteratorIS4_S6_S8_SA_SF_SD_EEEEOT0_OT1_(i9, i3 | 0, i5, i8);
 if ((HEAP8[i9 + 8 | 0] & 1) == 0) {
  HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] = HEAP32[i8 >> 2];
 }
 __ZN3WTF9HashTableIiNS_12KeyValuePairIiPN7WebCore4NodeEEENS_24KeyValuePairKeyExtractorIS5_EENS_7IntHashIjEENS_7HashMapIiS4_S9_NS_10HashTraitsIiEENSB_IS4_EEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKiRS4_EENS_18HashTableAddResultINS_17HashTableIteratorIiS5_S7_S9_SF_SC_EEEEOT0_OT1_(i10, i1 + 92 | 0, i8, i6);
 if ((HEAP8[i10 + 8 | 0] & 1) == 0) {
  HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] = HEAP32[i6 >> 2];
 }
 __ZN3WTF9HashTableIiNS_12KeyValuePairIiPNS_7HashMapINS_6RefPtrIN7WebCore4NodeEEEiNS_7PtrHashIS6_EENS_10HashTraitsIS6_EENS9_IiEEEEEENS_24KeyValuePairKeyExtractorISE_EENS_7IntHashIjEENS2_IiSD_SI_SB_NS9_ISD_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISL_SI_EERKiRSD_EENS_18HashTableAddResultINS_17HashTableIteratorIiSE_SG_SI_SL_SB_EEEEOT0_OT1_(i11, i1 + 112 | 0, i8, i7);
 if ((HEAP8[i11 + 8 | 0] & 1) == 0) {
  HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] = HEAP32[i7 >> 2];
 }
 i25 = HEAP32[i8 >> 2] | 0;
 STACKTOP = i4;
 return i25 | 0;
}
function __ZN3WTF9HashTableIiNS_12KeyValuePairIiPNS_7HashMapINS_6RefPtrIN7WebCore4NodeEEEiNS_7PtrHashIS6_EENS_10HashTraitsIS6_EENS9_IiEEEEEENS_24KeyValuePairKeyExtractorISE_EENS_7IntHashIjEENS2_IiSD_SI_SB_NS9_ISD_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISL_SI_EERKiRSD_EENS_18HashTableAddResultINS_17HashTableIteratorIiSE_SG_SI_SL_SB_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableIiNS_12KeyValuePairIiPNS_7HashMapINS_6RefPtrIN7WebCore4NodeEEEiNS_7PtrHashIS6_EENS_10HashTraitsIS6_EENS9_IiEEEEEENS_24KeyValuePairKeyExtractorISE_EENS_7IntHashIjEENS2_IiSD_SI_SB_NS9_ISD_EEE18KeyValuePairTraitsESB_E6expandEPSE_(i2, 0) | 0;
  i7 = HEAP32[i5 >> 2] | 0;
 } else {
  i7 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i9 = i8 + ~(i8 << 15) | 0;
 i10 = (i9 >>> 10 ^ i9) * 9 & -1;
 i9 = i10 >>> 6 ^ i10;
 i10 = i9 + ~(i9 << 11) | 0;
 i9 = i10 >>> 16 ^ i10;
 i10 = i9 & i6;
 i11 = i7 + (i10 << 3) | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i12 | 0) == 0) {
   i13 = i11;
   i14 = 9;
  } else {
   i15 = (i9 >>> 23) + ~i9 | 0;
   i16 = i15 << 12 ^ i15;
   i15 = i16 >>> 7 ^ i16;
   i16 = i15 << 2 ^ i15;
   i15 = i16 >>> 20 ^ i16 | 1;
   i16 = 0;
   i17 = 0;
   i18 = i10;
   i19 = i11;
   i20 = i12;
   while (1) {
    if ((i20 | 0) == (i8 | 0)) {
     i14 = 6;
     break;
    }
    i21 = (i20 | 0) == -1 ? i19 : i17;
    i22 = (i16 | 0) == 0 ? i15 : i16;
    i23 = i22 + i18 & i6;
    i24 = i7 + (i23 << 3) | 0;
    i25 = HEAP32[i24 >> 2] | 0;
    if ((i25 | 0) == 0) {
     i14 = 8;
     break;
    } else {
     i16 = i22;
     i17 = i21;
     i18 = i23;
     i19 = i24;
     i20 = i25;
    }
   }
   if ((i14 | 0) == 6) {
    i20 = i7 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i18 = i1;
    HEAP32[i18 >> 2] = i19;
    HEAP32[i18 + 4 >> 2] = i20;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i14 | 0) == 8) {
    if ((i21 | 0) == 0) {
     i13 = i24;
     i14 = 9;
     break;
    }
    i20 = i21;
    HEAP32[i20 >> 2] = 0;
    HEAP32[i20 + 4 >> 2] = 0;
    i20 = i2 + 16 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) - 1;
    i26 = i21;
    i27 = HEAP32[i3 >> 2] | 0;
    i28 = i20;
    break;
   }
  }
 } while (0);
 if ((i14 | 0) == 9) {
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
  i8 = __ZN3WTF9HashTableIiNS_12KeyValuePairIiPNS_7HashMapINS_6RefPtrIN7WebCore4NodeEEEiNS_7PtrHashIS6_EENS_10HashTraitsIS6_EENS9_IiEEEEEENS_24KeyValuePairKeyExtractorISE_EENS_7IntHashIjEENS2_IiSD_SI_SB_NS9_ISD_EEE18KeyValuePairTraitsESB_E6expandEPSE_(i2, i26) | 0;
  i29 = i8;
  i30 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i30 << 3) | 0;
 i30 = i1;
 HEAP32[i30 >> 2] = i29;
 HEAP32[i30 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore17InspectorDOMAgent13highlightQuadEPN3WTF6StringERKNS1_6RefPtrIN9Inspector14InspectorArrayEEEPKNS4_INS5_15InspectorObjectEEESD_PKb(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, d22 = +0, d23 = +0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i8 = i7 | 0;
 i9 = i7 + 64 | 0;
 i10 = i7 + 72 | 0;
 i11 = i7 + 80 | 0;
 i12 = __Znwj(32) | 0;
 i13 = i12;
 _memset(i12 | 0, 0, 32) | 0;
 i14 = i3 | 0;
 i3 = HEAP32[i14 >> 2] | 0;
 L1 : do {
  if ((i3 | 0) != 0) {
   if ((HEAP32[i3 + 20 >> 2] | 0) != 8) {
    break;
   }
   i15 = i9 | 0;
   i16 = 0;
   while (1) {
    if (i16 >>> 0 >= 8 >>> 0) {
     break;
    }
    __ZN9Inspector18InspectorArrayBase3getEj(i9, HEAP32[i14 >> 2] | 0, i16);
    i17 = HEAP32[i15 >> 2] | 0;
    i18 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i17 >> 2] | 0) + 12 >> 2] & 31](i17, i8 + (i16 << 3) | 0) | 0;
    i17 = HEAP32[i15 >> 2] | 0;
    do {
     if ((i17 | 0) != 0) {
      i19 = i17 + 4 | 0;
      i20 = i19 | 0;
      i21 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
      if ((i21 | 0) != 0) {
       HEAP32[i20 >> 2] = i21;
       break;
      }
      i21 = i19 - 4 | 0;
      if ((i21 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 63](i21);
     }
    } while (0);
    if (i18) {
     i16 = i16 + 1 | 0;
    } else {
     break L1;
    }
   }
   i16 = i12;
   d22 = +(+HEAPF64[i8 >> 3]);
   d23 = +(+HEAPF64[i8 + 8 >> 3]);
   HEAPF32[i16 >> 2] = d22;
   HEAPF32[i16 + 4 >> 2] = d23;
   i16 = i12 + 8 | 0;
   d23 = +(+HEAPF64[i8 + 16 >> 3]);
   d22 = +(+HEAPF64[i8 + 24 >> 3]);
   HEAPF32[i16 >> 2] = d23;
   HEAPF32[i16 + 4 >> 2] = d22;
   i16 = i12 + 16 | 0;
   d22 = +(+HEAPF64[i8 + 32 >> 3]);
   d23 = +(+HEAPF64[i8 + 40 >> 3]);
   HEAPF32[i16 >> 2] = d22;
   HEAPF32[i16 + 4 >> 2] = d23;
   i16 = i12 + 24 | 0;
   d23 = +(+HEAPF64[i8 + 48 >> 3]);
   d22 = +(+HEAPF64[i8 + 56 >> 3]);
   HEAPF32[i16 >> 2] = d23;
   HEAPF32[i16 + 4 >> 2] = d22;
   i16 = i11 | 0;
   HEAP32[i16 >> 2] = i13;
   __ZN7WebCore17InspectorDOMAgent18innerHighlightQuadEN3WTF10PassOwnPtrINS_9FloatQuadEEEPKNS1_6RefPtrIN9Inspector15InspectorObjectEEESA_PKb(i1, i11, i4, i5, i6);
   i15 = HEAP32[i16 >> 2] | 0;
   if ((i15 | 0) == 0) {
    STACKTOP = i7;
    return;
   }
   __ZdlPv(i15);
   STACKTOP = i7;
   return;
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i10, H_BASE + 1072 | 0);
 i6 = i10 | 0;
 i10 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 i5 = i2 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i10;
 do {
  if ((i2 | 0) != 0) {
   i10 = i2 | 0;
   i5 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i10 >> 2] = i5;
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
 if ((i12 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 __ZdlPv(i12);
 STACKTOP = i7;
 return;
}
function __ZN3WTF26HashTableBucketInitializerILb0EE10initializeINS_7HashMapINS_6StringENS3_INS_6RefPtrIN7WebCore4NodeEEEiNS_7PtrHashIS8_EENS_10HashTraitsIS8_EENSB_IiEEEENS_10StringHashENSB_IS4_EENSB_ISE_EEE18KeyValuePairTraitsENS_12KeyValuePairIS4_SE_EEEEvRT0_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 __ZN3WTF22KeyValuePairHashTraitsINS_10HashTraitsINS_6StringEEENS1_INS_7HashMapINS_6RefPtrIN7WebCore4NodeEEEiNS_7PtrHashIS8_EENS1_IS8_EENS1_IiEEEEEEE10emptyValueEv(i4);
 i5 = i4 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i1 >> 2] = i6;
 i6 = i1 + 4 | 0;
 i1 = i6 | 0;
 i7 = i4 + 4 | 0;
 _memset(i6 | 0, 0, 20) | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 i8 = i4 + 8 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = i6 + (i9 << 3) | 0;
 L1 : do {
  if ((HEAP32[i4 + 16 >> 2] | 0) != 0) {
   L3 : do {
    if ((i9 | 0) == 0) {
     i11 = i6;
    } else {
     i12 = i6;
     while (1) {
      i13 = HEAP32[i12 >> 2] | 0;
      if (!((i13 | 0) == (-1 | 0) | (i13 | 0) == 0)) {
       i11 = i12;
       break L3;
      }
      i12 = i12 + 8 | 0;
      if ((i12 | 0) == (i10 | 0)) {
       break L1;
      }
     }
    }
   } while (0);
   if ((i11 | 0) == (i10 | 0)) {
    break;
   } else {
    i14 = i11;
   }
   while (1) {
    __ZN3WTF9HashTableINS_6RefPtrIN7WebCore4NodeEEENS_12KeyValuePairIS4_iEENS_24KeyValuePairKeyExtractorIS6_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSC_IiEEEESD_E3addINS_22IdentityHashTranslatorISA_EERKS4_RKS6_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S6_S8_SA_SF_SD_EEEEOT0_OT1_(i3, i1, i14 | 0, i14);
    i12 = i14 + 8 | 0;
    if ((i12 | 0) == (i10 | 0)) {
     break L1;
    } else {
     i15 = i12;
    }
    while (1) {
     i12 = HEAP32[i15 >> 2] | 0;
     if (!((i12 | 0) == (-1 | 0) | (i12 | 0) == 0)) {
      break;
     }
     i12 = i15 + 8 | 0;
     if ((i12 | 0) == (i10 | 0)) {
      break L1;
     } else {
      i15 = i12;
     }
    }
    if ((i15 | 0) == (i10 | 0)) {
     break;
    } else {
     i14 = i15;
    }
   }
  }
 } while (0);
 i15 = HEAP32[i7 >> 2] | 0;
 if ((i15 | 0) != 0) {
  i7 = HEAP32[i8 >> 2] | 0;
  if ((i7 | 0) > 0) {
   i8 = 0;
   while (1) {
    i14 = HEAP32[i15 + (i8 << 3) >> 2] | 0;
    i10 = i14;
    do {
     if (!((i10 | 0) == (-1 | 0) | (i10 | 0) == 0)) {
      i1 = i14 + 8 | 0;
      i3 = i1 | 0;
      i11 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
      HEAP32[i3 >> 2] = i11;
      if ((i11 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
     }
    } while (0);
    i8 = i8 + 1 | 0;
    if ((i8 | 0) >= (i7 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i15);
 }
 i15 = HEAP32[i5 >> 2] | 0;
 if ((i15 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i5 = i15 | 0;
 i7 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i7 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i15);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i5 >> 2] = i7;
  STACKTOP = i2;
  return;
 }
}
function __ZN3WTF9HashTableINS_6RefPtrIN7WebCore4NodeEEENS_12KeyValuePairIS4_iEENS_24KeyValuePairKeyExtractorIS6_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSC_IiEEEESD_EaSERKSG_(i1, i2) {
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
    __ZN3WTF9HashTableINS_6RefPtrIN7WebCore4NodeEEENS_12KeyValuePairIS4_iEENS_24KeyValuePairKeyExtractorIS6_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSC_IiEEEESD_E3addINS_22IdentityHashTranslatorISA_EERKS4_RKS6_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S6_S8_SA_SF_SD_EEEEOT0_OT1_(i4, i5, i12 | 0, i12);
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
   i8 = HEAP32[i12 + (i4 << 3) >> 2] | 0;
   i9 = i8;
   do {
    if (!((i9 | 0) == (-1 | 0) | (i9 | 0) == 0)) {
     i5 = i8 + 8 | 0;
     i6 = i5 | 0;
     i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
     HEAP32[i6 >> 2] = i7;
     if ((i7 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
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
function __ZN7WebCore17InspectorDOMAgent12setOuterHTMLEPN3WTF6StringEiRKS2_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i6 = i5 | 0;
 i7 = i5 + 32 | 0;
 i8 = i5 + 40 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore15DOMPatchSupportC1EPNS_9DOMEditorEPNS_8DocumentE(i6, HEAP32[i1 + 224 >> 2] | 0, HEAP32[i1 + 180 >> 2] | 0);
  __ZN7WebCore15DOMPatchSupport13patchDocumentERKN3WTF6StringE(i6, i4);
  __ZN7WebCore15DOMPatchSupportD1Ev(i6);
  STACKTOP = i5;
  return;
 }
 i6 = __ZN7WebCore17InspectorDOMAgent18assertEditableNodeEPN3WTF6StringEi(i1, i2, i3) | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 if ((HEAP8[(HEAP32[(HEAP32[i6 + 20 >> 2] | 0) + 8 >> 2] | 0) + 1576 | 0] & 35) == 0) {
  __ZN3WTF6StringC1EPKc(i7, H_BASE + 1512 | 0);
  i9 = i7 | 0;
  i7 = HEAP32[i9 >> 2] | 0;
  HEAP32[i9 >> 2] = 0;
  i10 = i2 | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  HEAP32[i10 >> 2] = i7;
  do {
   if ((i11 | 0) != 0) {
    i7 = i11 | 0;
    i10 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
    if ((i10 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i11);
     break;
    } else {
     HEAP32[i7 >> 2] = i10;
     break;
    }
   }
  } while (0);
  i11 = HEAP32[i9 >> 2] | 0;
  if ((i11 | 0) == 0) {
   STACKTOP = i5;
   return;
  }
  i9 = i11 | 0;
  i10 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
  if ((i10 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i11);
   STACKTOP = i5;
   return;
  } else {
   HEAP32[i9 >> 2] = i10;
   STACKTOP = i5;
   return;
  }
 }
 HEAP32[i8 >> 2] = 0;
 i10 = __ZN7WebCore9DOMEditor12setOuterHTMLERNS_4NodeERKN3WTF6StringEPPS1_PS4_(HEAP32[i1 + 224 >> 2] | 0, i6, i4, i8, i2) | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 if (!(i10 & (i2 | 0) != 0)) {
  STACKTOP = i5;
  return;
 }
 i10 = __ZN7WebCore17InspectorDOMAgent22pushNodePathToFrontendEPNS_4NodeE(i1, i2) | 0;
 i2 = HEAP32[i1 + 132 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i8 = HEAP32[i1 + 140 >> 2] | 0;
 i4 = ~(i3 << 15) + i3 | 0;
 i6 = (i4 >>> 10 ^ i4) * 9 & -1;
 i4 = i6 >>> 6 ^ i6;
 i6 = i4 + ~(i4 << 11) | 0;
 i4 = i6 >>> 16 ^ i6;
 i6 = i8 & i4;
 i9 = i2 + (i6 << 2) | 0;
 i11 = HEAP32[i9 >> 2] | 0;
 L31 : do {
  if ((i11 | 0) == (i3 | 0)) {
   i12 = i9;
  } else {
   i7 = (i4 >>> 23) + ~i4 | 0;
   i13 = i7 << 12 ^ i7;
   i7 = i13 >>> 7 ^ i13;
   i13 = i7 << 2 ^ i7;
   i7 = i13 >>> 20 ^ i13 | 1;
   i13 = 0;
   i14 = i6;
   i15 = i11;
   while (1) {
    if ((i15 | 0) == 0) {
     break;
    }
    i16 = (i13 | 0) == 0 ? i7 : i13;
    i17 = i16 + i14 & i8;
    i18 = i2 + (i17 << 2) | 0;
    i19 = HEAP32[i18 >> 2] | 0;
    if ((i19 | 0) == (i3 | 0)) {
     i12 = i18;
     break L31;
    } else {
     i13 = i16;
     i14 = i17;
     i15 = i19;
    }
   }
   STACKTOP = i5;
   return;
  }
 } while (0);
 if ((i12 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore17InspectorDOMAgent24pushChildNodesToFrontendEii(i1, i10, 1);
 STACKTOP = i5;
 return;
}
function __ZN3WTF9HashTableIiiNS_17IdentityExtractorENS_7IntHashIjEENS_10HashTraitsIiEES5_E3addINS_22IdentityHashTranslatorIS3_EERKiiEENS_18HashTableAddResultINS_17HashTableIteratorIiiS1_S3_S5_S5_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableIiiNS_17IdentityExtractorENS_7IntHashIjEENS_10HashTraitsIiEES5_E6rehashEiPi(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i3 = i8 + ~(i8 << 15) | 0;
 i9 = (i3 >>> 10 ^ i3) * 9 & -1;
 i3 = i9 >>> 6 ^ i9;
 i9 = i3 + ~(i3 << 11) | 0;
 i3 = i9 >>> 16 ^ i9;
 i9 = i3 & i6;
 i7 = i10 + (i9 << 2) | 0;
 i11 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i12 = i7;
   i13 = 11;
  } else {
   i14 = (i3 >>> 23) + ~i3 | 0;
   i15 = i14 << 12 ^ i14;
   i14 = i15 >>> 7 ^ i15;
   i15 = i14 << 2 ^ i14;
   i14 = i15 >>> 20 ^ i15 | 1;
   i15 = 0;
   i16 = 0;
   i17 = i9;
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
  i26 = __ZN3WTF9HashTableIiiNS_17IdentityExtractorENS_7IntHashIjEENS_10HashTraitsIiEES5_E6rehashEiPi(i2, i29, i25) | 0;
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
function __ZN7WebCore17InspectorDOMAgent13querySelectorEPN3WTF6StringEiRKS2_Pi(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 HEAP32[i5 >> 2] = 0;
 i11 = __ZN7WebCore17InspectorDOMAgent10assertNodeEPN3WTF6StringEi(i1, i2, i3) | 0;
 if ((i11 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 if ((HEAP32[i11 + 12 >> 2] & 2 | 0) == 0) {
  __ZN7WebCore17InspectorDOMAgent13assertElementEPN3WTF6StringEi(i1, i2, i3) | 0;
  STACKTOP = i6;
  return;
 }
 HEAP32[i8 >> 2] = 0;
 i3 = i11;
 i11 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i4 = i7 | 0;
   HEAP32[i4 >> 2] = 0;
   i12 = i4;
  } else {
   if ((HEAP32[i11 + 16 >> 2] & 16 | 0) == 0) {
    __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i7, i11);
    i12 = i7 | 0;
    break;
   } else {
    i4 = i7 | 0;
    HEAP32[i4 >> 2] = i11;
    i13 = i11 | 0;
    HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
    i12 = i4;
    break;
   }
  }
 } while (0);
 i11 = i9 | 0;
 HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
 i12 = __ZN7WebCore13ContainerNode13querySelectorERKN3WTF12AtomicStringERi(i3, i9, i8) | 0;
 i9 = (i12 | 0) == 0;
 if (!i9) {
  i3 = i12 + 8 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 i3 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i11 = i3 | 0;
   i7 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i11 >> 2] = i7;
    break;
   }
  }
 } while (0);
 do {
  if ((HEAP32[i8 >> 2] | 0) == 0) {
   if (i9) {
    STACKTOP = i6;
    return;
   } else {
    HEAP32[i5 >> 2] = __ZN7WebCore17InspectorDOMAgent22pushNodePathToFrontendEPNS_4NodeE(i1, i12 | 0) | 0;
    break;
   }
  } else {
   __ZN3WTF6StringC1EPKc(i10, H_BASE + 8 | 0);
   i3 = i10 | 0;
   i7 = HEAP32[i3 >> 2] | 0;
   HEAP32[i3 >> 2] = 0;
   i11 = i2 | 0;
   i4 = HEAP32[i11 >> 2] | 0;
   HEAP32[i11 >> 2] = i7;
   do {
    if ((i4 | 0) != 0) {
     i7 = i4 | 0;
     i11 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
     if ((i11 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i4);
      break;
     } else {
      HEAP32[i7 >> 2] = i11;
      break;
     }
    }
   } while (0);
   i4 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i4 | 0) != 0) {
     i11 = i4 | 0;
     i7 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
     if ((i7 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i4);
      break;
     } else {
      HEAP32[i11 >> 2] = i7;
      break;
     }
    }
   } while (0);
   if (!i9) {
    break;
   }
   STACKTOP = i6;
   return;
  }
 } while (0);
 i9 = i12 + 8 | 0;
 i12 = i9 | 0;
 i2 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
 HEAP32[i12 >> 2] = i2;
 if ((i2 | 0) >= 1) {
  STACKTOP = i6;
  return;
 }
 if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
  STACKTOP = i6;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
 STACKTOP = i6;
 return;
}
function __ZN3WTF9HashTableIiNS_12KeyValuePairIiPNS_7HashMapINS_6RefPtrIN7WebCore4NodeEEEiNS_7PtrHashIS6_EENS_10HashTraitsIS6_EENS9_IiEEEEEENS_24KeyValuePairKeyExtractorISE_EENS_7IntHashIjEENS2_IiSD_SI_SB_NS9_ISD_EEE18KeyValuePairTraitsESB_E6expandEPSE_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
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
  i13 = HEAP32[i5 >> 2] | 0;
  if ((i13 | 0) == (-1 | 0) | (i13 | 0) == 0) {
   i14 = i12;
  } else {
   i15 = HEAP32[i4 >> 2] | 0;
   i16 = HEAP32[i3 >> 2] | 0;
   i17 = i13 + ~(i13 << 15) | 0;
   i18 = (i17 >>> 10 ^ i17) * 9 & -1;
   i17 = i18 >>> 6 ^ i18;
   i18 = i17 + ~(i17 << 11) | 0;
   i17 = i18 >>> 16 ^ i18;
   i18 = i16 & i17;
   i19 = i15 + (i18 << 3) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L10 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 7;
    } else {
     i24 = (i17 >>> 23) + ~i17 | 0;
     i25 = i24 << 12 ^ i24;
     i24 = i25 >>> 7 ^ i25;
     i25 = i24 << 2 ^ i24;
     i24 = i25 >>> 20 ^ i25 | 1;
     i25 = 0;
     i26 = 0;
     i27 = i18;
     i28 = i19;
     i29 = i20;
     while (1) {
      if ((i29 | 0) == (i13 | 0)) {
       i30 = i28;
       break L10;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i16;
      i34 = i15 + (i33 << 3) | 0;
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
   i15 = i5;
   i16 = i30;
   i13 = HEAP32[i15 + 4 >> 2] | 0;
   HEAP32[i16 >> 2] = HEAP32[i15 >> 2];
   HEAP32[i16 + 4 >> 2] = i13;
   i14 = (i5 | 0) == (i2 | 0) ? i30 : i12;
  }
  i13 = i11 + 1 | 0;
  if ((i13 | 0) == (i6 | 0)) {
   i8 = i14;
   break;
  } else {
   i11 = i13;
   i12 = i14;
  }
 }
 i9 = i1 + 16 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i7;
 __ZN3WTF8fastFreeEPv(i10);
 return i8 | 0;
}
function __ZN7WebCore17InspectorDOMAgent13highlightNodeEPN3WTF6StringERKNS1_6RefPtrIN9Inspector15InspectorObjectEEEPKiPKS2_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 do {
  if ((i4 | 0) == 0) {
   if ((i5 | 0) == 0) {
    __ZN3WTF6StringC1EPKc(i8, H_BASE + 952 | 0);
    i10 = i8 | 0;
    i11 = HEAP32[i10 >> 2] | 0;
    HEAP32[i10 >> 2] = 0;
    i12 = i2 | 0;
    i13 = HEAP32[i12 >> 2] | 0;
    HEAP32[i12 >> 2] = i11;
    do {
     if ((i13 | 0) != 0) {
      i11 = i13 | 0;
      i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
      if ((i12 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i13);
       break;
      } else {
       HEAP32[i11 >> 2] = i12;
       break;
      }
     }
    } while (0);
    i13 = HEAP32[i10 >> 2] | 0;
    if ((i13 | 0) == 0) {
     STACKTOP = i6;
     return;
    }
    i12 = i13 | 0;
    i11 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
    if ((i11 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i13);
     STACKTOP = i6;
     return;
    } else {
     HEAP32[i12 >> 2] = i11;
     STACKTOP = i6;
     return;
    }
   }
   i11 = __ZN7WebCore17InspectorDOMAgent15nodeForObjectIdERKN3WTF6StringE(i1, i5) | 0;
   if ((i11 | 0) != 0) {
    i14 = i11;
    break;
   }
   __ZN3WTF6StringC1EPKc(i7, H_BASE + 1e3 | 0);
   i11 = i7 | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   HEAP32[i11 >> 2] = 0;
   i13 = i2 | 0;
   i15 = HEAP32[i13 >> 2] | 0;
   HEAP32[i13 >> 2] = i12;
   do {
    if ((i15 | 0) != 0) {
     i12 = i15 | 0;
     i13 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
     if ((i13 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i15);
      break;
     } else {
      HEAP32[i12 >> 2] = i13;
      break;
     }
    }
   } while (0);
   i15 = HEAP32[i11 >> 2] | 0;
   if ((i15 | 0) == 0) {
    STACKTOP = i6;
    return;
   }
   i10 = i15 | 0;
   i13 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i15);
    STACKTOP = i6;
    return;
   } else {
    HEAP32[i10 >> 2] = i13;
    STACKTOP = i6;
    return;
   }
  } else {
   i13 = __ZN7WebCore17InspectorDOMAgent10assertNodeEPN3WTF6StringEi(i1, i2, HEAP32[i4 >> 2] | 0) | 0;
   if ((i13 | 0) != 0) {
    i14 = i13;
    break;
   }
   STACKTOP = i6;
   return;
  }
 } while (0);
 __ZN7WebCore17InspectorDOMAgent34highlightConfigFromInspectorObjectEPN3WTF6StringEPN9Inspector15InspectorObjectE(i9, 0, i2, HEAP32[i3 >> 2] | 0);
 i3 = i9 | 0;
 i9 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 __ZN7WebCore16InspectorOverlay13highlightNodeEPNS_4NodeERKNS_15HighlightConfigE(HEAP32[i1 + 24 >> 2] | 0, i14, i9);
 __ZN3WTF8fastFreeEPv(i9);
 STACKTOP = i6;
 return;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6VectorINS_6RefPtrIN7WebCore4NodeEEELj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorISA_EENS_10StringHashENS_7HashMapIS1_S9_SD_NS_10HashTraitsIS1_EENSF_IS9_EEE18KeyValuePairTraitsESG_E8reinsertEOSA_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i2 | 0;
 i5 = HEAP32[i1 >> 2] | 0;
 i6 = HEAP32[i5 + 16 >> 2] | 0;
 if (i6 >>> 0 > 127 >>> 0) {
  i7 = i6 >>> 7;
 } else {
  i7 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i5) | 0;
 }
 i5 = (i7 >>> 23) + ~i7 | 0;
 i6 = i5 << 12 ^ i5;
 i5 = i6 >>> 7 ^ i6;
 i6 = i5 << 2 ^ i5;
 i5 = i6 >>> 20 ^ i6 | 1;
 i6 = i7;
 i7 = 0;
 i8 = 0;
 while (1) {
  i9 = i6 & i4;
  i10 = i3 + (i9 << 4) | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  i12 = i11;
  if ((i12 | 0) == (-1 | 0)) {
   i13 = i10;
  } else if ((i12 | 0) == 0) {
   i14 = 6;
   break;
  } else {
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i11, HEAP32[i1 >> 2] | 0) | 0) {
    i15 = i10;
    break;
   } else {
    i13 = i8;
   }
  }
  i11 = (i7 | 0) == 0 ? i5 : i7;
  i6 = i11 + i9 | 0;
  i7 = i11;
  i8 = i13;
 }
 if ((i14 | 0) == 6) {
  i15 = (i8 | 0) != 0 ? i8 : i10;
 }
 i10 = i15 + 12 | 0;
 i8 = HEAP32[i10 >> 2] | 0;
 i14 = i15 + 4 | 0;
 if ((i8 | 0) != 0) {
  i13 = HEAP32[i14 >> 2] | 0;
  i7 = i13 + (i8 << 2) | 0;
  i8 = i13;
  while (1) {
   i13 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i13 | 0) != 0) {
     i6 = i13 + 8 | 0;
     i5 = i6 | 0;
     i3 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
     HEAP32[i5 >> 2] = i3;
     if ((i3 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
    }
   } while (0);
   i8 = i8 + 4 | 0;
   if ((i8 | 0) == (i7 | 0)) {
    break;
   }
  }
  HEAP32[i10 >> 2] = 0;
 }
 i7 = HEAP32[i14 >> 2] | 0;
 if ((i7 | 0) != 0) {
  HEAP32[i14 >> 2] = 0;
  HEAP32[i15 + 8 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i7);
 }
 i7 = i15 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i13 = i8 | 0;
   i6 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i13 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i8 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i7 >> 2] = i8;
 HEAP32[i14 >> 2] = 0;
 i8 = i15 + 8 | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = 0;
 i7 = i2 + 12 | 0;
 HEAP32[i10 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i7 >> 2] = 0;
 i7 = i2 + 4 | 0;
 i10 = HEAP32[i14 >> 2] | 0;
 HEAP32[i14 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i7 >> 2] = i10;
 i10 = i2 + 8 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i10 >> 2] = i2;
 return i15 | 0;
}
function __ZN3WTF6VectorIN7WebCore17EventListenerInfoELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i4 + 1 | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if (i7 >>> 0 > i2 >>> 0) {
   i8 = 3;
  } else {
   if ((i7 + (i4 * 28 & -1) | 0) >>> 0 <= i2 >>> 0) {
    i8 = 3;
    break;
   }
   i9 = HEAP32[i1 + 4 >> 2] | 0;
   i10 = i9 + 1 + (i9 >>> 2) | 0;
   i9 = i10 >>> 0 > 16 >>> 0 ? i10 : 16;
   __ZN3WTF6VectorIN7WebCore17EventListenerInfoELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i9 >>> 0 > i5 >>> 0 ? i9 : i5);
   i9 = HEAP32[i6 >> 2] | 0;
   i11 = i9 + (((i2 - i7 | 0) / 28 & -1) * 28 & -1) | 0;
   i12 = i9;
  }
 } while (0);
 if ((i8 | 0) == 3) {
  i8 = HEAP32[i1 + 4 >> 2] | 0;
  i7 = i8 + 1 + (i8 >>> 2) | 0;
  i8 = i7 >>> 0 > 16 >>> 0 ? i7 : 16;
  __ZN3WTF6VectorIN7WebCore17EventListenerInfoELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i8 >>> 0 > i5 >>> 0 ? i8 : i5);
  i11 = i2;
  i12 = HEAP32[i6 >> 2] | 0;
 }
 i6 = HEAP32[i3 >> 2] | 0;
 HEAP32[i12 + (i6 * 28 & -1) >> 2] = HEAP32[i11 >> 2];
 i2 = HEAP32[i11 + 4 >> 2] | 0;
 HEAP32[i12 + (i6 * 28 & -1) + 4 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i5 = i2 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
 }
 i5 = HEAP32[i11 + 12 >> 2] | 0;
 i2 = i11 + 16 | 0;
 i8 = HEAP32[i2 >> 2] | 0;
 i1 = i12 + (i6 * 28 & -1) + 20 | 0;
 i7 = i12 + (i6 * 28 & -1) + 8 | 0;
 HEAP32[i7 >> 2] = i1;
 i4 = i12 + (i6 * 28 & -1) + 12 | 0;
 HEAP32[i4 >> 2] = 1;
 HEAP32[i12 + (i6 * 28 & -1) + 16 >> 2] = i8;
 do {
  if (i5 >>> 0 > 1 >>> 0) {
   if (i5 >>> 0 > 536870911 >>> 0) {
    _WTFCrash();
   } else {
    i8 = __ZN3WTF18fastMallocGoodSizeEj(i5 << 3) | 0;
    HEAP32[i4 >> 2] = i8 >>> 3;
    i6 = __ZN3WTF10fastMallocEj(i8) | 0;
    HEAP32[i7 >> 2] = i6;
    i13 = i6;
    break;
   }
  } else {
   i13 = i1;
  }
 } while (0);
 if ((i13 | 0) == 0) {
  i14 = HEAP32[i3 >> 2] | 0;
  i15 = i14 + 1 | 0;
  HEAP32[i3 >> 2] = i15;
  return;
 }
 i1 = HEAP32[i11 + 8 >> 2] | 0;
 i11 = HEAP32[i2 >> 2] | 0;
 i2 = i1 + (i11 << 3) | 0;
 if ((i11 | 0) == 0) {
  i14 = HEAP32[i3 >> 2] | 0;
  i15 = i14 + 1 | 0;
  HEAP32[i3 >> 2] = i15;
  return;
 } else {
  i16 = i1;
  i17 = i13;
 }
 while (1) {
  i13 = HEAP32[i16 >> 2] | 0;
  HEAP32[i17 >> 2] = i13;
  if ((i13 | 0) != 0) {
   i1 = i13 + 4 | 0;
   HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
  }
  HEAP8[i17 + 4 | 0] = HEAP8[i16 + 4 | 0] & 1;
  i1 = i16 + 8 | 0;
  if ((i1 | 0) == (i2 | 0)) {
   break;
  } else {
   i16 = i1;
   i17 = i17 + 8 | 0;
  }
 }
 i14 = HEAP32[i3 >> 2] | 0;
 i15 = i14 + 1 | 0;
 HEAP32[i3 >> 2] = i15;
 return;
}
function __ZN7WebCore17InspectorDOMAgent15discardBindingsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = i1 + 40 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = HEAP32[i1 + 44 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i5 = 0;
   while (1) {
    i6 = HEAP32[i3 + (i5 << 3) >> 2] | 0;
    i7 = i6;
    do {
     if (!((i7 | 0) == (-1 | 0) | (i7 | 0) == 0)) {
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
    i5 = i5 + 1 | 0;
    if ((i5 | 0) >= (i4 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i3);
  _memset(i2 | 0, 0, 16) | 0;
 }
 i2 = i1 + 92 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i3);
  _memset(i2 | 0, 0, 16) | 0;
 }
 i2 = i1 + 80 | 0;
 i3 = i1 + 84 | 0;
 do {
  if ((HEAP32[i3 >> 2] | 0) != 0) {
   if ((HEAP32[i1 + 88 >> 2] | 0) != 0) {
    __ZN3WTF6VectorINS_6OwnPtrINS_7HashMapINS_6RefPtrIN7WebCore4NodeEEEiNS_7PtrHashIS6_EENS_10HashTraitsIS6_EENS9_IiEEEEEELj0ENS_15CrashOnOverflowEE6shrinkEj(i2, 0);
   }
   i4 = i2 | 0;
   i5 = HEAP32[i4 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   HEAP32[i4 >> 2] = 0;
   HEAP32[i3 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i5);
  }
 } while (0);
 i3 = i1 + 132 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i2);
  _memset(i3 | 0, 0, 16) | 0;
 }
 i3 = i1 + 152 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i5 = HEAP32[i1 + 156 >> 2] | 0;
  if ((i5 | 0) > 0) {
   i4 = 0;
   while (1) {
    do {
     if ((HEAP32[i2 + (i4 * 12 & -1) >> 2] | 0) != -1) {
      i6 = HEAP32[i2 + (i4 * 12 & -1) + 8 >> 2] | 0;
      if ((i6 | 0) == 0) {
       break;
      }
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
    i4 = i4 + 1 | 0;
    if ((i4 | 0) >= (i5 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
  _memset(i3 | 0, 0, 16) | 0;
 }
 i3 = i1 + 60 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_7HashMapINS_6RefPtrIN7WebCore4NodeEEEiNS_7PtrHashIS7_EENS_10HashTraitsIS7_EENSA_IiEEEEEENS_24KeyValuePairKeyExtractorISE_EENS_10StringHashENS3_IS1_SD_SH_NSA_IS1_EENSA_ISD_EEE18KeyValuePairTraitsESI_E15deallocateTableEPSE_i(i2, HEAP32[i1 + 64 >> 2] | 0);
 _memset(i3 | 0, 0, 16) | 0;
 return;
}
function __ZN3WTF9HashTableIiNS_12KeyValuePairIiPN7WebCore4NodeEEENS_24KeyValuePairKeyExtractorIS5_EENS_7IntHashIjEENS_7HashMapIiS4_S9_NS_10HashTraitsIiEENSB_IS4_EEE18KeyValuePairTraitsESC_E6rehashEiPS5_(i1, i2, i3) {
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
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 3) | 0;
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
  i2 = i7 + (i11 << 3) | 0;
  i13 = HEAP32[i2 >> 2] | 0;
  if ((i13 | 0) == (-1 | 0) | (i13 | 0) == 0) {
   i14 = i12;
  } else {
   i15 = HEAP32[i6 >> 2] | 0;
   i16 = HEAP32[i4 >> 2] | 0;
   i17 = i13 + ~(i13 << 15) | 0;
   i18 = (i17 >>> 10 ^ i17) * 9 & -1;
   i17 = i18 >>> 6 ^ i18;
   i18 = i17 + ~(i17 << 11) | 0;
   i17 = i18 >>> 16 ^ i18;
   i18 = i16 & i17;
   i19 = i15 + (i18 << 3) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L7 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 5;
    } else {
     i24 = (i17 >>> 23) + ~i17 | 0;
     i25 = i24 << 12 ^ i24;
     i24 = i25 >>> 7 ^ i25;
     i25 = i24 << 2 ^ i24;
     i24 = i25 >>> 20 ^ i25 | 1;
     i25 = 0;
     i26 = 0;
     i27 = i18;
     i28 = i19;
     i29 = i20;
     while (1) {
      if ((i29 | 0) == (i13 | 0)) {
       i30 = i28;
       break L7;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i16;
      i34 = i15 + (i33 << 3) | 0;
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
   i15 = i2;
   i16 = i30;
   i13 = HEAP32[i15 + 4 >> 2] | 0;
   HEAP32[i16 >> 2] = HEAP32[i15 >> 2];
   HEAP32[i16 + 4 >> 2] = i13;
   i14 = (i2 | 0) == (i3 | 0) ? i30 : i12;
  }
  i13 = i11 + 1 | 0;
  if ((i13 | 0) == (i5 | 0)) {
   i8 = i14;
   break;
  } else {
   i11 = i13;
   i12 = i14;
  }
 }
 i9 = i1 + 16 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i7;
 __ZN3WTF8fastFreeEPv(i10);
 return i8 | 0;
}
function __ZN7WebCore17InspectorDOMAgent27didCreateFrontendAndBackendEPN9Inspector24InspectorFrontendChannelEPNS1_26InspectorBackendDispatcherE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = __Znwj(4) | 0;
 HEAP32[i6 >> 2] = i2;
 i2 = i1 + 28 | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i6;
 if ((i7 | 0) != 0) {
  __ZdlPv(i7);
 }
 __ZN9Inspector29InspectorDOMBackendDispatcher6createEPNS_26InspectorBackendDispatcherEPNS_36InspectorDOMBackendDispatcherHandlerE(i5, i3, i1 + 12 | 0);
 i3 = i5 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i7 = i1 + 32 | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i5;
 do {
  if ((i6 | 0) != 0) {
   i5 = i6 + 4 | 0;
   i7 = i5 | 0;
   i2 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i7 >> 2] = i2;
    break;
   }
   i2 = i5 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 63](i2);
  }
 } while (0);
 i6 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i3 = i6 + 4 | 0;
   i2 = i3 | 0;
   i5 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i2 >> 2] = i5;
    break;
   }
   i5 = i3 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 63](i5);
  }
 } while (0);
 i6 = __ZN3WTF10fastMallocEj(20) | 0;
 __ZN7WebCore16InspectorHistoryC1Ev(i6);
 i5 = i1 + 220 | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i6;
 if ((i3 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 63](i3);
 }
 i3 = __ZN3WTF10fastMallocEj(4) | 0;
 __ZN7WebCore9DOMEditorC1EPNS_16InspectorHistoryE(i3, HEAP32[i5 >> 2] | 0);
 i5 = i1 + 224 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i3;
 if ((i6 | 0) != 0) {
  __ZN7WebCore9DOMEditorD1Ev(i6);
  __ZN3WTF8fastFreeEPv(i6);
 }
 HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 28 >> 2] = i1;
 i6 = HEAP32[(__ZN7WebCore18InspectorPageAgent9mainFrameEv(HEAP32[i1 + 16 >> 2] | 0) | 0) + 456 >> 2] | 0;
 if ((i6 | 0) != 0) {
  i3 = i6 + 8 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 i3 = i1 + 180 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i6;
 do {
  if ((i5 | 0) != 0) {
   i6 = i5 + 8 | 0;
   i3 = i6 | 0;
   i2 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   HEAP32[i3 >> 2] = i2;
   if ((i2 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  }
 } while (0);
 if ((HEAP32[i1 + 208 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore17InspectorDOMAgent9focusNodeEv(i1);
 STACKTOP = i4;
 return;
}
function __ZN3WTF7HashMapINS_6StringENS_6VectorINS_6RefPtrIN7WebCore4NodeEEELj0ENS_15CrashOnOverflowEEENS_10StringHashENS_10HashTraitsIS1_EENSA_IS8_EEE6removeENS_24HashTableIteratorAdapterINS_9HashTableIS1_NS_12KeyValuePairIS1_S8_EENS_24KeyValuePairKeyExtractorISH_EES9_NSD_18KeyValuePairTraitsESB_EESH_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 i4 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i2 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i4 + 4 >> 2];
 i4 = i1 | 0;
 i5 = i1 | 0;
 i6 = i1 + 4 | 0;
 i7 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i6 >> 2] << 4) | 0;
 if ((HEAP32[i2 >> 2] | 0) == (i7 | 0)) {
  i8 = 0;
  STACKTOP = i3;
  return i8 | 0;
 }
 i9 = HEAP32[i2 >> 2] | 0;
 if ((i9 | 0) == (i7 | 0)) {
  i8 = 1;
  STACKTOP = i3;
  return i8 | 0;
 }
 __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6VectorINS_6RefPtrIN7WebCore4NodeEEELj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorISA_EENS_10StringHashENS_7HashMapIS1_S9_SD_NS_10HashTraitsIS1_EENSF_IS9_EEE18KeyValuePairTraitsESG_E12deleteBucketERSA_(i9);
 i9 = i1 + 16 | 0;
 HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 i7 = i1 + 12 | 0;
 i2 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 HEAP32[i7 >> 2] = i2;
 i7 = HEAP32[i6 >> 2] | 0;
 if (!((i2 * 6 & -1 | 0) < (i7 | 0) & (i7 | 0) > 8)) {
  i8 = 1;
  STACKTOP = i3;
  return i8 | 0;
 }
 i2 = (i7 | 0) / 2 & -1;
 i10 = HEAP32[i5 >> 2] | 0;
 HEAP32[i6 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = i2 - 1;
 i1 = __ZN3WTF10fastMallocEj(i2 << 4) | 0;
 if ((i7 | 0) > 1) {
  i6 = 0;
  while (1) {
   _memset(i1 + (i6 << 4) | 0, 0, 16) | 0;
   i6 = i6 + 1 | 0;
   if ((i6 | 0) >= (i2 | 0)) {
    break;
   }
  }
 }
 HEAP32[i5 >> 2] = i1;
 if ((i7 | 0) != 0) {
  i1 = 0;
  while (1) {
   i5 = i10 + (i1 << 4) | 0;
   i2 = HEAP32[i5 >> 2] | 0;
   if (!((i2 | 0) == (-1 | 0) | (i2 | 0) == 0)) {
    __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6VectorINS_6RefPtrIN7WebCore4NodeEEELj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorISA_EENS_10StringHashENS_7HashMapIS1_S9_SD_NS_10HashTraitsIS1_EENSF_IS9_EEE18KeyValuePairTraitsESG_E8reinsertEOSA_(i4, i5) | 0;
   }
   i1 = i1 + 1 | 0;
   if ((i1 | 0) == (i7 | 0)) {
    break;
   }
  }
 }
 HEAP32[i9 >> 2] = 0;
 __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6VectorINS_6RefPtrIN7WebCore4NodeEEELj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorISA_EENS_10StringHashENS_7HashMapIS1_S9_SD_NS_10HashTraitsIS1_EENSF_IS9_EEE18KeyValuePairTraitsESG_E15deallocateTableEPSA_i(i10, i7);
 i8 = 1;
 STACKTOP = i3;
 return i8 | 0;
}
function __ZN7WebCore17InspectorDOMAgent11getDocumentEPN3WTF6StringERNS1_6RefPtrIN9Inspector11TypeBuilder3DOM4NodeEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 HEAP8[i1 + 229 | 0] = 1;
 i7 = i1 + 180 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 if ((i8 | 0) == 0) {
  __ZN3WTF6StringC1EPKc(i5, H_BASE + 1040 | 0);
  i9 = i5 | 0;
  i5 = HEAP32[i9 >> 2] | 0;
  HEAP32[i9 >> 2] = 0;
  i10 = i2 | 0;
  i2 = HEAP32[i10 >> 2] | 0;
  HEAP32[i10 >> 2] = i5;
  do {
   if ((i2 | 0) != 0) {
    i5 = i2 | 0;
    i10 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
    if ((i10 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i2);
     break;
    } else {
     HEAP32[i5 >> 2] = i10;
     break;
    }
   }
  } while (0);
  i2 = HEAP32[i9 >> 2] | 0;
  if ((i2 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i9 = i2 | 0;
  i10 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
  if ((i10 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i2);
   STACKTOP = i4;
   return;
  } else {
   HEAP32[i9 >> 2] = i10;
   STACKTOP = i4;
   return;
  }
 }
 i10 = i8 + 8 | 0;
 HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
 __ZN7WebCore17InspectorDOMAgent5resetEv(i1);
 HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
 i10 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i8;
 do {
  if ((i10 | 0) != 0) {
   i9 = i10 + 8 | 0;
   i2 = i9 | 0;
   i5 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore17InspectorDOMAgent18buildObjectForNodeEPNS_4NodeEiPN3WTF7HashMapINS3_6RefPtrIS1_EEiNS3_7PtrHashIS6_EENS3_10HashTraitsIS6_EENS9_IiEEEE(i6, i1, HEAP32[i7 >> 2] | 0, 2, i1 + 40 | 0);
 i1 = i6 | 0;
 i6 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 i1 = i3 | 0;
 i3 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = i6;
 do {
  if ((i3 | 0) != 0) {
   i6 = i3 + 4 | 0;
   i1 = i6 | 0;
   i7 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i1 >> 2] = i7;
    break;
   }
   i7 = i6 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 63](i7);
  }
 } while (0);
 i3 = i8 + 8 | 0;
 i8 = i3 | 0;
 i7 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 HEAP32[i8 >> 2] = i7;
 if ((i7 | 0) >= 1) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore17InspectorDOMAgent6moveToEPN3WTF6StringEiiPKiPi(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = __ZN7WebCore17InspectorDOMAgent18assertEditableNodeEPN3WTF6StringEi(i1, i2, i3) | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i3 = __ZN7WebCore17InspectorDOMAgent21assertEditableElementEPN3WTF6StringEi(i1, i2, i4) | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 do {
  if ((i5 | 0) == 0) {
   i11 = 0;
  } else {
   i4 = HEAP32[i5 >> 2] | 0;
   if ((i4 | 0) == 0) {
    i11 = 0;
    break;
   }
   i12 = __ZN7WebCore17InspectorDOMAgent18assertEditableNodeEPN3WTF6StringEi(i1, i2, i4) | 0;
   if ((i12 | 0) == 0) {
    STACKTOP = i7;
    return;
   }
   if ((HEAP32[i12 + 16 >> 2] | 0) == (i3 | 0)) {
    i11 = i12;
    break;
   }
   __ZN3WTF6StringC1EPKc(i8, H_BASE + 904 | 0);
   i12 = i8 | 0;
   i4 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   i13 = i2 | 0;
   i14 = HEAP32[i13 >> 2] | 0;
   HEAP32[i13 >> 2] = i4;
   do {
    if ((i14 | 0) != 0) {
     i4 = i14 | 0;
     i13 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
     if ((i13 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i14);
      break;
     } else {
      HEAP32[i4 >> 2] = i13;
      break;
     }
    }
   } while (0);
   i14 = HEAP32[i12 >> 2] | 0;
   if ((i14 | 0) == 0) {
    STACKTOP = i7;
    return;
   }
   i13 = i14 | 0;
   i4 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    STACKTOP = i7;
    return;
   } else {
    HEAP32[i13 >> 2] = i4;
    STACKTOP = i7;
    return;
   }
  }
 } while (0);
 i8 = HEAP32[i1 + 224 >> 2] | 0;
 i5 = i9 | 0;
 HEAP32[i5 >> 2] = i10;
 i4 = i10 + 8 | 0;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 i4 = __ZN7WebCore9DOMEditor12insertBeforeEPNS_4NodeEN3WTF10PassRefPtrIS1_EES2_PNS3_6StringE(i8, i3 | 0, i9, i11, i2) | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 + 8 | 0;
   i11 = i5 | 0;
   i9 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   HEAP32[i11 >> 2] = i9;
   if ((i9 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 if (!i4) {
  STACKTOP = i7;
  return;
 }
 HEAP32[i6 >> 2] = __ZN7WebCore17InspectorDOMAgent22pushNodePathToFrontendEPNS_4NodeE(i1, i10) | 0;
 STACKTOP = i7;
 return;
}
function __ZN3WTF9HashTableIiiNS_17IdentityExtractorENS_7IntHashIjEENS_10HashTraitsIiEES5_E6rehashEiPi(i1, i2, i3) {
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
  if ((i13 | 0) == (-1 | 0) | (i13 | 0) == 0) {
   i14 = i12;
  } else {
   i15 = HEAP32[i6 >> 2] | 0;
   i16 = HEAP32[i4 >> 2] | 0;
   i17 = i13 + ~(i13 << 15) | 0;
   i18 = (i17 >>> 10 ^ i17) * 9 & -1;
   i17 = i18 >>> 6 ^ i18;
   i18 = i17 + ~(i17 << 11) | 0;
   i17 = i18 >>> 16 ^ i18;
   i18 = i16 & i17;
   i19 = i15 + (i18 << 2) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L7 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 5;
    } else {
     i24 = (i17 >>> 23) + ~i17 | 0;
     i25 = i24 << 12 ^ i24;
     i24 = i25 >>> 7 ^ i25;
     i25 = i24 << 2 ^ i24;
     i24 = i25 >>> 20 ^ i25 | 1;
     i25 = 0;
     i26 = 0;
     i27 = i18;
     i28 = i19;
     i29 = i20;
     while (1) {
      if ((i29 | 0) == (i13 | 0)) {
       i30 = i28;
       break L7;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i16;
      i34 = i15 + (i33 << 2) | 0;
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
   i14 = (i2 | 0) == (i3 | 0) ? i30 : i12;
  }
  i15 = i11 + 1 | 0;
  if ((i15 | 0) == (i5 | 0)) {
   i8 = i14;
   break;
  } else {
   i11 = i15;
   i12 = i14;
  }
 }
 i9 = i1 + 16 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i7;
 __ZN3WTF8fastFreeEPv(i10);
 return i8 | 0;
}
function __ZN7WebCore17InspectorDOMAgent7inspectEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = 0;
 i6 = (i2 | 0) == 0;
 if (!i6) {
  i7 = i2 + 8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 }
 i7 = i1 + 212 | 0;
 if ((HEAP8[i7] & 1) != 0) {
  HEAP8[i7] = 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 112 >> 2] & 31](i1, i4);
  __ZN7WebCore16InspectorOverlay22didSetSearchingForNodeEb(HEAP32[i1 + 24 >> 2] | 0, (HEAP8[i7] & 1) != 0);
 }
 i7 = i2;
 do {
  if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 76 >> 2] & 1](i2) | 0) == 1) {
   i8 = i2;
  } else {
   if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 76 >> 2] & 1](i2) | 0) == 9) {
    i8 = i2;
    break;
   }
   i4 = HEAP32[i2 + 16 >> 2] | 0;
   i9 = i4 | 0;
   if ((i4 | 0) != 0) {
    i10 = i4 + 8 | 0;
    HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
   }
   if (i6) {
    i8 = i9;
    break;
   }
   i10 = i2 + 8 | 0;
   i4 = i10 | 0;
   i11 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i11;
   if ((i11 | 0) >= 1) {
    i8 = i9;
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    i8 = i9;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
   i8 = i9;
  }
 } while (0);
 i2 = (i8 | 0) == 0;
 if (!i2) {
  i6 = i8 + 8 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 }
 i6 = i1 + 208 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i8;
 do {
  if ((i7 | 0) != 0) {
   i6 = i7 + 8 | 0;
   i9 = i6 | 0;
   i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   HEAP32[i9 >> 2] = i10;
   if ((i10 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore17InspectorDOMAgent9focusNodeEv(i1);
 do {
  if (!i2) {
   i1 = i8 + 8 | 0;
   i7 = i1 | 0;
   i6 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   HEAP32[i7 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
  }
 } while (0);
 i8 = HEAP32[i5 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = i8 | 0;
 i2 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i8);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i5 >> 2] = i2;
  STACKTOP = i3;
  return;
 }
}
function __ZN3WTF7HashMapIiNSt3__14pairIPN7WebCore4NodeENS_6StringEEENS_7IntHashIjEENS_10HashTraitsIiEENSA_IS7_EEE6removeERKi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = HEAP32[i1 + 4 >> 2] | 0;
  i5 = i4 * 12 & -1 | 0;
  i6 = 0;
  i7 = i4;
 } else {
  i4 = HEAP32[i1 + 8 >> 2] | 0;
  i8 = HEAP32[i2 >> 2] | 0;
  i2 = i8 + ~(i8 << 15) | 0;
  i9 = (i2 >>> 10 ^ i2) * 9 & -1;
  i2 = i9 >>> 6 ^ i9;
  i9 = i2 + ~(i2 << 11) | 0;
  i2 = i9 >>> 16 ^ i9;
  i9 = i2 & i4;
  i10 = i3 + (i9 * 12 & -1) | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  L3 : do {
   if ((i11 | 0) == (i8 | 0)) {
    i12 = i10;
   } else {
    i13 = (i2 >>> 23) + ~i2 | 0;
    i14 = i13 << 12 ^ i13;
    i13 = i14 >>> 7 ^ i14;
    i14 = i13 << 2 ^ i13;
    i13 = i14 >>> 20 ^ i14 | 1;
    i14 = 0;
    i15 = i9;
    i16 = i11;
    while (1) {
     if ((i16 | 0) == 0) {
      i12 = 0;
      break L3;
     }
     i17 = (i14 | 0) == 0 ? i13 : i14;
     i18 = i17 + i15 & i4;
     i19 = i3 + (i18 * 12 & -1) | 0;
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
  i5 = (i12 | 0) == 0 ? i3 + (i8 * 12 & -1) | 0 : i12;
  i6 = i3;
  i7 = i8;
 }
 i8 = i1 | 0;
 i3 = i1 + 4 | 0;
 if ((i5 | 0) == (i6 + (i7 * 12 & -1) | 0)) {
  i21 = 0;
  return i21 | 0;
 }
 i7 = HEAP32[i5 + 8 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i6 = i7 | 0;
   i12 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i6 >> 2] = i12;
    break;
   }
  }
 } while (0);
 HEAP32[i5 >> 2] = -1;
 i5 = i1 + 16 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 i5 = i1 + 12 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i1;
 i5 = HEAP32[i3 >> 2] | 0;
 if (!((i1 * 6 & -1 | 0) < (i5 | 0) & (i5 | 0) > 8)) {
  i21 = 1;
  return i21 | 0;
 }
 __ZN3WTF9HashTableIiNS_12KeyValuePairIiNSt3__14pairIPN7WebCore4NodeENS_6StringEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7IntHashIjEENS_7HashMapIiS8_SD_NS_10HashTraitsIiEENSF_IS8_EEE18KeyValuePairTraitsESG_E6rehashEiPS9_(i8, (i5 | 0) / 2 & -1, 0) | 0;
 i21 = 1;
 return i21 | 0;
}
function __ZN3WTF7HashMapINS_6RefPtrIN7WebCore4NodeEEEiNS_7PtrHashIS4_EENS_10HashTraitsIS4_EENS7_IiEEE6removeEPS3_(i1, i2) {
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
  L4 : do {
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
      break L4;
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
 i2 = i1 | 0;
 i3 = i1 + 4 | 0;
 if ((i5 | 0) == (i6 + (i7 << 3) | 0)) {
  i21 = 0;
  return i21 | 0;
 }
 i7 = i5 | 0;
 i5 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i6 = i5 + 8 | 0;
   i12 = i6 | 0;
   i4 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   HEAP32[i12 >> 2] = i4;
   if ((i4 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  }
 } while (0);
 HEAP32[i7 >> 2] = -1;
 i7 = i1 + 16 | 0;
 HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 i7 = i1 + 12 | 0;
 i1 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 HEAP32[i7 >> 2] = i1;
 i7 = HEAP32[i3 >> 2] | 0;
 if (!((i1 * 6 & -1 | 0) < (i7 | 0) & (i7 | 0) > 8)) {
  i21 = 1;
  return i21 | 0;
 }
 __ZN3WTF9HashTableINS_6RefPtrIN7WebCore4NodeEEENS_12KeyValuePairIS4_iEENS_24KeyValuePairKeyExtractorIS6_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSC_IiEEEESD_E6rehashEiPS6_(i2, (i7 | 0) / 2 & -1, 0) | 0;
 i21 = 1;
 return i21 | 0;
}
function __ZN7WebCore17InspectorDOMAgent17willPopShadowRootEPNS_7ElementEPNS_10ShadowRootE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i4 = i2 | 0;
 i5 = HEAP32[i1 + 48 >> 2] | 0;
 i6 = HEAP32[i1 + 40 >> 2] | 0;
 i7 = i2;
 i2 = i7 + ~(i7 << 15) | 0;
 i7 = (i2 >>> 10 ^ i2) * 9 & -1;
 i2 = i7 >>> 6 ^ i7;
 i7 = i2 + ~(i2 << 11) | 0;
 i2 = i7 >>> 16 ^ i7;
 i7 = (i6 | 0) == 0;
 L1 : do {
  if (i7) {
   i8 = 0;
  } else {
   i9 = i5 & i2;
   i10 = i6 + (i9 << 3) | 0;
   i11 = HEAP32[i10 >> 2] | 0;
   if ((i11 | 0) == (i4 | 0)) {
    i12 = i10;
   } else {
    i10 = (i2 >>> 23) + ~i2 | 0;
    i13 = i10 << 12 ^ i10;
    i10 = i13 >>> 7 ^ i13;
    i13 = i10 << 2 ^ i10;
    i10 = i13 >>> 20 ^ i13 | 1;
    i13 = 0;
    i14 = i9;
    i9 = i11;
    while (1) {
     if ((i9 | 0) == 0) {
      i8 = 0;
      break L1;
     }
     i11 = (i13 | 0) == 0 ? i10 : i13;
     i15 = i11 + i14 & i5;
     i16 = i6 + (i15 << 3) | 0;
     i17 = HEAP32[i16 >> 2] | 0;
     if ((i17 | 0) == (i4 | 0)) {
      i12 = i16;
      break;
     } else {
      i13 = i11;
      i14 = i15;
      i9 = i17;
     }
    }
   }
   if ((i12 | 0) == 0) {
    i8 = 0;
    break;
   }
   i8 = HEAP32[i12 + 4 >> 2] | 0;
  }
 } while (0);
 i12 = i3 | 0;
 i4 = i3;
 i3 = i4 + ~(i4 << 15) | 0;
 i4 = (i3 >>> 10 ^ i3) * 9 & -1;
 i3 = i4 >>> 6 ^ i4;
 i4 = i3 + ~(i3 << 11) | 0;
 i3 = i4 >>> 16 ^ i4;
 if (i7) {
  return;
 }
 i7 = i5 & i3;
 i4 = i6 + (i7 << 3) | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 L14 : do {
  if ((i2 | 0) == (i12 | 0)) {
   i18 = i4;
  } else {
   i9 = (i3 >>> 23) + ~i3 | 0;
   i14 = i9 << 12 ^ i9;
   i9 = i14 >>> 7 ^ i14;
   i14 = i9 << 2 ^ i9;
   i9 = i14 >>> 20 ^ i14 | 1;
   i14 = 0;
   i13 = i7;
   i10 = i2;
   while (1) {
    if ((i10 | 0) == 0) {
     break;
    }
    i17 = (i14 | 0) == 0 ? i9 : i14;
    i15 = i17 + i13 & i5;
    i11 = i6 + (i15 << 3) | 0;
    i16 = HEAP32[i11 >> 2] | 0;
    if ((i16 | 0) == (i12 | 0)) {
     i18 = i11;
     break L14;
    } else {
     i14 = i17;
     i13 = i15;
     i10 = i16;
    }
   }
   return;
  }
 } while (0);
 if ((i18 | 0) == 0) {
  return;
 }
 i12 = HEAP32[i18 + 4 >> 2] | 0;
 if ((i8 | 0) == 0 | (i12 | 0) == 0) {
  return;
 }
 __ZN9Inspector30InspectorDOMFrontendDispatcher16shadowRootPoppedEii(HEAP32[i1 + 28 >> 2] | 0, i8, i12);
 return;
}
function __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RNS_10PassRefPtrIS5_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_(i5, i1 + 12 | 0, i2, i3);
 if ((HEAP8[i5 + 8 | 0] & 1) == 0) {
  i6 = HEAP32[i5 >> 2] | 0;
  i5 = i3 | 0;
  i3 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = 0;
  i5 = i6 + 4 | 0;
  i6 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = i3;
  if ((i6 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i3 = i6 + 4 | 0;
  i6 = i3 | 0;
  i5 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
  if ((i5 | 0) != 0) {
   HEAP32[i6 >> 2] = i5;
   STACKTOP = i4;
   return;
  }
  i5 = i3 - 4 | 0;
  if ((i5 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 63](i5);
  STACKTOP = i4;
  return;
 }
 i5 = i1 + 32 | 0;
 i3 = i1 + 40 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 if ((i6 | 0) != (HEAP32[i1 + 36 >> 2] | 0)) {
  i1 = HEAP32[i2 >> 2] | 0;
  HEAP32[(HEAP32[i5 >> 2] | 0) + (i6 << 2) >> 2] = i1;
  if ((i1 | 0) != 0) {
   i7 = i1 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
  }
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
  STACKTOP = i4;
  return;
 }
 i7 = i6 + 1 | 0;
 i1 = i5 | 0;
 i8 = HEAP32[i1 >> 2] | 0;
 do {
  if (i8 >>> 0 > i2 >>> 0) {
   i9 = 13;
  } else {
   if ((i8 + (i6 << 2) | 0) >>> 0 <= i2 >>> 0) {
    i9 = 13;
    break;
   }
   __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i5, i7);
   i10 = HEAP32[i1 >> 2] | 0;
   i11 = i10 + (i2 - i8 >> 2 << 2) | 0;
   i12 = i10;
  }
 } while (0);
 if ((i9 | 0) == 13) {
  __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i5, i7);
  i11 = i2;
  i12 = HEAP32[i1 >> 2] | 0;
 }
 i1 = HEAP32[i11 >> 2] | 0;
 HEAP32[i12 + (HEAP32[i3 >> 2] << 2) >> 2] = i1;
 if ((i1 | 0) != 0) {
  i12 = i1 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
 }
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore17InspectorDOMAgent17didPushShadowRootEPNS_7ElementEPNS_10ShadowRootE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i1 + 40 | 0;
 i7 = i2 | 0;
 i8 = HEAP32[i1 + 48 >> 2] | 0;
 i9 = HEAP32[i6 >> 2] | 0;
 i10 = i2;
 i2 = i10 + ~(i10 << 15) | 0;
 i10 = (i2 >>> 10 ^ i2) * 9 & -1;
 i2 = i10 >>> 6 ^ i10;
 i10 = i2 + ~(i2 << 11) | 0;
 i2 = i10 >>> 16 ^ i10;
 if ((i9 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i10 = i8 & i2;
 i11 = i9 + (i10 << 3) | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 L4 : do {
  if ((i12 | 0) == (i7 | 0)) {
   i13 = i11;
  } else {
   i14 = (i2 >>> 23) + ~i2 | 0;
   i15 = i14 << 12 ^ i14;
   i14 = i15 >>> 7 ^ i15;
   i15 = i14 << 2 ^ i14;
   i14 = i15 >>> 20 ^ i15 | 1;
   i15 = 0;
   i16 = i10;
   i17 = i12;
   while (1) {
    if ((i17 | 0) == 0) {
     break;
    }
    i18 = (i15 | 0) == 0 ? i14 : i15;
    i19 = i18 + i16 & i8;
    i20 = i9 + (i19 << 3) | 0;
    i21 = HEAP32[i20 >> 2] | 0;
    if ((i21 | 0) == (i7 | 0)) {
     i13 = i20;
     break L4;
    } else {
     i15 = i18;
     i16 = i19;
     i17 = i21;
    }
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 if ((i13 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i7 = HEAP32[i13 + 4 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i13 = HEAP32[i1 + 28 >> 2] | 0;
 __ZN7WebCore17InspectorDOMAgent18buildObjectForNodeEPNS_4NodeEiPN3WTF7HashMapINS3_6RefPtrIS1_EEiNS3_7PtrHashIS6_EENS3_10HashTraitsIS6_EENS9_IiEEEE(i5, i1, i3 | 0, 0, i6);
 __ZN9Inspector30InspectorDOMFrontendDispatcher16shadowRootPushedEiN3WTF10PassRefPtrINS_11TypeBuilder3DOM4NodeEEE(i13, i7, i5);
 i7 = HEAP32[i5 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i5 = i7 + 4 | 0;
 i7 = i5 | 0;
 i13 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 if ((i13 | 0) != 0) {
  HEAP32[i7 >> 2] = i13;
  STACKTOP = i4;
  return;
 }
 i13 = i5 - 4 | 0;
 if ((i13 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 63](i13);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore17InspectorDOMAgent21characterDataModifiedEPNS_13CharacterDataE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i2 | 0;
 i6 = HEAP32[i1 + 48 >> 2] | 0;
 i7 = HEAP32[i1 + 40 >> 2] | 0;
 i8 = i2;
 i9 = i8 + ~(i8 << 15) | 0;
 i8 = (i9 >>> 10 ^ i9) * 9 & -1;
 i9 = i8 >>> 6 ^ i8;
 i8 = i9 + ~(i9 << 11) | 0;
 i9 = i8 >>> 16 ^ i8;
 L1 : do {
  if ((i7 | 0) != 0) {
   i8 = i6 & i9;
   i10 = i7 + (i8 << 3) | 0;
   i11 = HEAP32[i10 >> 2] | 0;
   if ((i11 | 0) == (i5 | 0)) {
    i12 = i10;
   } else {
    i10 = (i9 >>> 23) + ~i9 | 0;
    i13 = i10 << 12 ^ i10;
    i10 = i13 >>> 7 ^ i13;
    i13 = i10 << 2 ^ i10;
    i10 = i13 >>> 20 ^ i13 | 1;
    i13 = 0;
    i14 = i8;
    i8 = i11;
    while (1) {
     if ((i8 | 0) == 0) {
      break L1;
     }
     i11 = (i13 | 0) == 0 ? i10 : i13;
     i15 = i11 + i14 & i6;
     i16 = i7 + (i15 << 3) | 0;
     i17 = HEAP32[i16 >> 2] | 0;
     if ((i17 | 0) == (i5 | 0)) {
      i12 = i16;
      break;
     } else {
      i13 = i11;
      i14 = i15;
      i8 = i17;
     }
    }
   }
   if ((i12 | 0) == 0) {
    break;
   }
   i8 = HEAP32[i12 + 4 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   i14 = HEAP32[i1 + 28 >> 2] | 0;
   i13 = i4 | 0;
   i10 = HEAP32[i2 + 36 >> 2] | 0;
   HEAP32[i13 >> 2] = i10;
   if ((i10 | 0) != 0) {
    i17 = i10 | 0;
    HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 2;
   }
   __ZN9Inspector30InspectorDOMFrontendDispatcher21characterDataModifiedEiRKN3WTF6StringE(i14, i8, i4);
   i8 = HEAP32[i13 >> 2] | 0;
   if ((i8 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   i13 = i8 | 0;
   i14 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    STACKTOP = i3;
    return;
   } else {
    HEAP32[i13 >> 2] = i14;
    STACKTOP = i3;
    return;
   }
  }
 } while (0);
 __ZN7WebCore17InspectorDOMAgent16didInsertDOMNodeEPNS_4NodeE(i1, i5);
 STACKTOP = i3;
 return;
}
function __ZN3WTF7HashSetIiNS_7IntHashIjEENS_10HashTraitsIiEEE6removeERKi(i1, i2) {
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
  i2 = i8 + ~(i8 << 15) | 0;
  i9 = (i2 >>> 10 ^ i2) * 9 & -1;
  i2 = i9 >>> 6 ^ i9;
  i9 = i2 + ~(i2 << 11) | 0;
  i2 = i9 >>> 16 ^ i9;
  i9 = i2 & i4;
  i10 = i3 + (i9 << 2) | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  L4 : do {
   if ((i11 | 0) == (i8 | 0)) {
    i12 = i10;
   } else {
    i13 = (i2 >>> 23) + ~i2 | 0;
    i14 = i13 << 12 ^ i13;
    i13 = i14 >>> 7 ^ i14;
    i14 = i13 << 2 ^ i13;
    i13 = i14 >>> 20 ^ i14 | 1;
    i14 = 0;
    i15 = i9;
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
 __ZN3WTF9HashTableIiiNS_17IdentityExtractorENS_7IntHashIjEENS_10HashTraitsIiEES5_E6rehashEiPi(i1 | 0, (i5 | 0) / 2 & -1, 0) | 0;
 i21 = 1;
 return i21 | 0;
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
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6VectorINS_6RefPtrIN7WebCore4NodeEEELj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorISA_EENS_10StringHashENS_7HashMapIS1_S9_SD_NS_10HashTraitsIS1_EENSF_IS9_EEE18KeyValuePairTraitsESG_E15deallocateTableEPSA_i(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 if ((i2 | 0) > 0) {
  i3 = 0;
 } else {
  i4 = i1;
  __ZN3WTF8fastFreeEPv(i4);
  return;
 }
 while (1) {
  i5 = i1 + (i3 << 4) | 0;
  do {
   if ((HEAP32[i5 >> 2] | 0) != -1) {
    i6 = i1 + (i3 << 4) + 12 | 0;
    i7 = HEAP32[i6 >> 2] | 0;
    i8 = i1 + (i3 << 4) + 4 | 0;
    if ((i7 | 0) != 0) {
     i9 = HEAP32[i8 >> 2] | 0;
     i10 = i9 + (i7 << 2) | 0;
     i7 = i9;
     while (1) {
      i9 = HEAP32[i7 >> 2] | 0;
      do {
       if ((i9 | 0) != 0) {
        i11 = i9 + 8 | 0;
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
      i7 = i7 + 4 | 0;
      if ((i7 | 0) == (i10 | 0)) {
       break;
      }
     }
     HEAP32[i6 >> 2] = 0;
    }
    i10 = HEAP32[i8 >> 2] | 0;
    if ((i10 | 0) != 0) {
     HEAP32[i8 >> 2] = 0;
     HEAP32[i1 + (i3 << 4) + 8 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i10);
    }
    i10 = HEAP32[i5 >> 2] | 0;
    if ((i10 | 0) == 0) {
     break;
    }
    i7 = i10 | 0;
    i9 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
    if ((i9 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i10);
     break;
    } else {
     HEAP32[i7 >> 2] = i9;
     break;
    }
   }
  } while (0);
  i3 = i3 + 1 | 0;
  if ((i3 | 0) >= (i2 | 0)) {
   break;
  }
 }
 i4 = i1;
 __ZN3WTF8fastFreeEPv(i4);
 return;
}
function __ZN7WebCore17InspectorDOMAgent9documentsEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 | 0;
 HEAP32[i5 >> 2] = 0;
 i6 = i1 + 4 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i1 + 8 | 0;
 HEAP32[i7 >> 2] = 0;
 i8 = HEAP32[(HEAP32[i2 + 180 >> 2] | 0) + 332 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i2 = i4;
 i9 = i8;
 i8 = 0;
 i10 = 0;
 while (1) {
  i11 = HEAP32[i9 + 456 >> 2] | 0;
  HEAP32[i4 >> 2] = i11;
  do {
   if ((i11 | 0) == 0) {
    i12 = i8;
    i13 = i10;
   } else {
    if ((i8 | 0) != (HEAP32[i6 >> 2] | 0)) {
     HEAP32[i10 + (i8 << 2) >> 2] = i11;
     i14 = (HEAP32[i7 >> 2] | 0) + 1 | 0;
     HEAP32[i7 >> 2] = i14;
     i12 = i14;
     i13 = i10;
     break;
    }
    i14 = i8 + 1 | 0;
    do {
     if (i10 >>> 0 > i4 >>> 0) {
      i15 = 8;
     } else {
      if ((i10 + (i8 << 2) | 0) >>> 0 <= i4 >>> 0) {
       i15 = 8;
       break;
      }
      __ZN3WTF6VectorIPN7WebCore8DocumentELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i14);
      i16 = HEAP32[i5 >> 2] | 0;
      i17 = i16 + (i2 - i10 >> 2 << 2) | 0;
      i18 = i16;
     }
    } while (0);
    if ((i15 | 0) == 8) {
     i15 = 0;
     __ZN3WTF6VectorIPN7WebCore8DocumentELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i14);
     i17 = i4;
     i18 = HEAP32[i5 >> 2] | 0;
    }
    i16 = HEAP32[i7 >> 2] | 0;
    HEAP32[i18 + (i16 << 2) >> 2] = HEAP32[i17 >> 2];
    i19 = i16 + 1 | 0;
    HEAP32[i7 >> 2] = i19;
    i12 = i19;
    i13 = i18;
   }
  } while (0);
  i11 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i9 + 40 | 0, 0) | 0;
  if ((i11 | 0) == 0) {
   break;
  } else {
   i9 = i11;
   i8 = i12;
   i10 = i13;
  }
 }
 STACKTOP = i3;
 return;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_7HashMapINS_6RefPtrIN7WebCore4NodeEEEiNS_7PtrHashIS7_EENS_10HashTraitsIS7_EENSA_IiEEEEEENS_24KeyValuePairKeyExtractorISE_EENS_10StringHashENS3_IS1_SD_SH_NSA_IS1_EENSA_ISD_EEE18KeyValuePairTraitsESI_E15deallocateTableEPSE_i(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 if ((i2 | 0) > 0) {
  i3 = 0;
 } else {
  i4 = i1;
  __ZN3WTF8fastFreeEPv(i4);
  return;
 }
 while (1) {
  i5 = i1 + (i3 * 24 & -1) | 0;
  i6 = HEAP32[i5 >> 2] | 0;
  do {
   if ((i6 | 0) != -1) {
    i7 = HEAP32[i1 + (i3 * 24 & -1) + 4 >> 2] | 0;
    if ((i7 | 0) == 0) {
     i8 = i6;
    } else {
     i9 = HEAP32[i1 + (i3 * 24 & -1) + 8 >> 2] | 0;
     if ((i9 | 0) > 0) {
      i10 = 0;
      while (1) {
       i11 = HEAP32[i7 + (i10 << 3) >> 2] | 0;
       i12 = i11;
       do {
        if (!((i12 | 0) == (-1 | 0) | (i12 | 0) == 0)) {
         i13 = i11 + 8 | 0;
         i14 = i13 | 0;
         i15 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
         HEAP32[i14 >> 2] = i15;
         if ((i15 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
        }
       } while (0);
       i10 = i10 + 1 | 0;
       if ((i10 | 0) >= (i9 | 0)) {
        break;
       }
      }
     }
     __ZN3WTF8fastFreeEPv(i7);
     i8 = HEAP32[i5 >> 2] | 0;
    }
    if ((i8 | 0) == 0) {
     break;
    }
    i9 = i8 | 0;
    i10 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
    if ((i10 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i8);
     break;
    } else {
     HEAP32[i9 >> 2] = i10;
     break;
    }
   }
  } while (0);
  i3 = i3 + 1 | 0;
  if ((i3 | 0) >= (i2 | 0)) {
   break;
  }
 }
 i4 = i1;
 __ZN3WTF8fastFreeEPv(i4);
 return;
}
function __ZN7WebCore17InspectorDOMAgent9focusNodeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 24 | 0;
 if ((HEAP32[i1 + 28 >> 2] | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i5 = i1 + 208 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = (i6 | 0) == 0;
 do {
  if (i7) {
   HEAP32[i5 >> 2] = 0;
  } else {
   i8 = i6 + 8 | 0;
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
   i8 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i8 | 0) == 0) {
    break;
   }
   i9 = i8 + 8 | 0;
   i8 = i9 | 0;
   i10 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i10;
   if ((i10 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
  }
 } while (0);
 i5 = HEAP32[(HEAP32[(HEAP32[i6 + 20 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i9 = __ZN7WebCore18mainWorldExecStateEPNS_5FrameE(i5) | 0;
  __ZN9Inspector21InjectedScriptManager17injectedScriptForEPN3JSC9ExecStateE(i3, HEAP32[i1 + 20 >> 2] | 0, i9);
  i1 = HEAP32[i3 + 12 >> 2] | 0;
  do {
   if ((i1 | 0) != 0) {
    if ((HEAP32[i1 + 4 >> 2] | 0) == -6) {
     break;
    }
    __ZN7WebCore17InspectorDOMAgent17nodeAsScriptValueEPN3JSC9ExecStateEPNS_4NodeE(i4, i9, i6);
    __ZN9Inspector14InjectedScript13inspectObjectEN10Deprecated11ScriptValueE(i3, i4);
    __ZN10Deprecated11ScriptValueD1Ev(i4);
   }
  } while (0);
  __ZN9Inspector14InjectedScriptD1Ev(i3);
 }
 if (i7) {
  STACKTOP = i2;
  return;
 }
 i7 = i6 + 8 | 0;
 i6 = i7 | 0;
 i3 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 HEAP32[i6 >> 2] = i3;
 if ((i3 | 0) >= 1) {
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
function __ZN7WebCore17InspectorDOMAgent29willDestroyFrontendAndBackendEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 28 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 if ((i5 | 0) != 0) {
  __ZdlPv(i5);
 }
 i5 = i1 + 32 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 63](i7);
  }
 } while (0);
 i4 = i1 + 220 | 0;
 i7 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 if ((i7 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 63](i7);
 }
 i7 = i1 + 224 | 0;
 i4 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 if ((i4 | 0) != 0) {
  __ZN7WebCore9DOMEditorD1Ev(i4);
  __ZN3WTF8fastFreeEPv(i4);
 }
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = 0;
 i7 = i1 + 212 | 0;
 if ((HEAP8[i7] & 1) == 0) {
  i8 = i1;
 } else {
  HEAP8[i7] = 0;
  i5 = i1;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 112 >> 2] & 31](i1, i3);
  __ZN7WebCore16InspectorOverlay22didSetSearchingForNodeEb(HEAP32[i1 + 24 >> 2] | 0, (HEAP8[i7] & 1) != 0);
  i8 = i5;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i8 >> 2] | 0) + 112 >> 2] & 31](i1, i3);
 HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 28 >> 2] = 0;
 HEAP8[i1 + 229 | 0] = 0;
 __ZN7WebCore17InspectorDOMAgent5resetEv(i1);
 i1 = HEAP32[i4 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i1 | 0;
 i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i4 >> 2] = i3;
  STACKTOP = i2;
  return;
 }
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
function __ZN3WTF7HashMapINS_6StringENS0_INS_6RefPtrIN7WebCore4NodeEEEiNS_7PtrHashIS5_EENS_10HashTraitsIS5_EENS8_IiEEEENS_10StringHashENS8_IS1_EENS8_ISB_EEE4findERKS1_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i4 = i2 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   i6 = (HEAP32[i2 + 4 >> 2] | 0) * 24 & -1 | 0;
   i7 = i6;
   i8 = i6;
  } else {
   i6 = HEAP32[i2 + 8 >> 2] | 0;
   i9 = i3 | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   i11 = HEAP32[i10 + 16 >> 2] | 0;
   if (i11 >>> 0 > 127 >>> 0) {
    i12 = i11 >>> 7;
   } else {
    i12 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i10) | 0;
   }
   i10 = (i12 >>> 23) + ~i12 | 0;
   i11 = i10 << 12 ^ i10;
   i10 = i11 >>> 7 ^ i11;
   i11 = i10 << 2 ^ i10;
   i10 = i11 >>> 20 ^ i11 | 1;
   i11 = i12;
   i13 = 0;
   while (1) {
    i14 = i11 & i6;
    i15 = i5 + (i14 * 24 & -1) | 0;
    i16 = HEAP32[i15 >> 2] | 0;
    i17 = i16;
    if ((i17 | 0) == 0) {
     i18 = 8;
     break;
    } else if ((i17 | 0) != (-1 | 0)) {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i16, HEAP32[i9 >> 2] | 0) | 0) {
      i18 = 11;
      break;
     }
    }
    i16 = (i13 | 0) == 0 ? i10 : i13;
    i11 = i16 + i14 | 0;
    i13 = i16;
   }
   if ((i18 | 0) == 8) {
    i13 = (HEAP32[i4 >> 2] | 0) + ((HEAP32[i2 + 4 >> 2] | 0) * 24 & -1) | 0;
    i7 = i13;
    i8 = i13;
    break;
   } else if ((i18 | 0) == 11) {
    i13 = (HEAP32[i4 >> 2] | 0) + ((HEAP32[i2 + 4 >> 2] | 0) * 24 & -1) | 0;
    i7 = (i15 | 0) == 0 ? i13 : i15;
    i8 = i13;
    break;
   }
  }
 } while (0);
 i15 = i1;
 HEAP32[i15 >> 2] = i7;
 HEAP32[i15 + 4 >> 2] = i8;
 return;
}
function __ZN7WebCore17InspectorDOMAgent16didModifyDOMAttrEPNS_7ElementERKN3WTF12AtomicStringES6_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i5 = i1 + 228 | 0;
 i6 = (HEAP8[i5] & 1) == 0;
 HEAP8[i5] = 0;
 if (!i6) {
  return;
 }
 i6 = i2 | 0;
 i5 = HEAP32[i1 + 48 >> 2] | 0;
 i7 = HEAP32[i1 + 40 >> 2] | 0;
 i8 = i2;
 i9 = i8 + ~(i8 << 15) | 0;
 i8 = (i9 >>> 10 ^ i9) * 9 & -1;
 i9 = i8 >>> 6 ^ i8;
 i8 = i9 + ~(i9 << 11) | 0;
 i9 = i8 >>> 16 ^ i8;
 if ((i7 | 0) == 0) {
  return;
 }
 i8 = i5 & i9;
 i10 = i7 + (i8 << 3) | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 L7 : do {
  if ((i11 | 0) == (i6 | 0)) {
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
     break;
    }
    i17 = (i14 | 0) == 0 ? i13 : i14;
    i18 = i17 + i15 & i5;
    i19 = i7 + (i18 << 3) | 0;
    i20 = HEAP32[i19 >> 2] | 0;
    if ((i20 | 0) == (i6 | 0)) {
     i12 = i19;
     break L7;
    } else {
     i14 = i17;
     i15 = i18;
     i16 = i20;
    }
   }
   return;
  }
 } while (0);
 if ((i12 | 0) == 0) {
  return;
 }
 i6 = HEAP32[i12 + 4 >> 2] | 0;
 if ((i6 | 0) == 0) {
  return;
 }
 i12 = HEAP32[i1 + 36 >> 2] | 0;
 if ((i12 | 0) != 0) {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i12 >> 2] | 0) + 16 >> 2] & 31](i12, i2);
 }
 __ZN9Inspector30InspectorDOMFrontendDispatcher17attributeModifiedEiRKN3WTF6StringES4_(HEAP32[i1 + 28 >> 2] | 0, i6, i3 | 0, i4 | 0);
 return;
}
function __ZN3WTF7HashMapINS_6StringENS_6VectorINS_6RefPtrIN7WebCore4NodeEEELj0ENS_15CrashOnOverflowEEENS_10StringHashENS_10HashTraitsIS1_EENSA_IS8_EEE4findERKS1_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i4 = i2 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   i6 = HEAP32[i2 + 4 >> 2] << 4 | 0;
   i7 = i6;
   i8 = i6;
  } else {
   i6 = HEAP32[i2 + 8 >> 2] | 0;
   i9 = i3 | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   i11 = HEAP32[i10 + 16 >> 2] | 0;
   if (i11 >>> 0 > 127 >>> 0) {
    i12 = i11 >>> 7;
   } else {
    i12 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i10) | 0;
   }
   i10 = (i12 >>> 23) + ~i12 | 0;
   i11 = i10 << 12 ^ i10;
   i10 = i11 >>> 7 ^ i11;
   i11 = i10 << 2 ^ i10;
   i10 = i11 >>> 20 ^ i11 | 1;
   i11 = i12;
   i13 = 0;
   while (1) {
    i14 = i11 & i6;
    i15 = i5 + (i14 << 4) | 0;
    i16 = HEAP32[i15 >> 2] | 0;
    i17 = i16;
    if ((i17 | 0) == 0) {
     i18 = 8;
     break;
    } else if ((i17 | 0) != (-1 | 0)) {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i16, HEAP32[i9 >> 2] | 0) | 0) {
      i18 = 11;
      break;
     }
    }
    i16 = (i13 | 0) == 0 ? i10 : i13;
    i11 = i16 + i14 | 0;
    i13 = i16;
   }
   if ((i18 | 0) == 8) {
    i13 = (HEAP32[i4 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 4) | 0;
    i7 = i13;
    i8 = i13;
    break;
   } else if ((i18 | 0) == 11) {
    i13 = (HEAP32[i4 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 4) | 0;
    i7 = (i15 | 0) == 0 ? i13 : i15;
    i8 = i13;
    break;
   }
  }
 } while (0);
 i15 = i1;
 HEAP32[i15 >> 2] = i7;
 HEAP32[i15 + 4 >> 2] = i8;
 return;
}
function __ZN3WTF6VectorIN7WebCore23RegisteredEventListenerELj1ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i7 = i5 + (i6 << 3) | 0;
 do {
  if (i2 >>> 0 > 1 >>> 0) {
   if (i2 >>> 0 > 536870911 >>> 0) {
    _WTFCrash();
   } else {
    i8 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 3) | 0;
    HEAP32[i3 >> 2] = i8 >>> 3;
    i9 = __ZN3WTF10fastMallocEj(i8) | 0;
    HEAP32[i4 >> 2] = i9;
    i10 = i9;
    break;
   }
  } else {
   i9 = i1 + 12 | 0;
   HEAP32[i4 >> 2] = i9;
   HEAP32[i3 >> 2] = 1;
   i10 = i9;
  }
 } while (0);
 if ((i6 | 0) != 0) {
  i6 = i5;
  i2 = i10;
  while (1) {
   i10 = i6 | 0;
   i9 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = 0;
   HEAP32[i2 >> 2] = i9;
   HEAP8[i2 + 4 | 0] = HEAP8[i6 + 4 | 0] & 1;
   i9 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i10 = i9 + 4 | 0;
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
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 63](i11);
    }
   } while (0);
   i9 = i6 + 8 | 0;
   if ((i9 | 0) == (i7 | 0)) {
    break;
   } else {
    i6 = i9;
    i2 = i2 + 8 | 0;
   }
  }
 }
 if ((i1 + 12 | 0) == (i5 | 0) | (i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i5);
 return;
}
function __ZN7WebCore19InspectorNodeFinderD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = HEAP32[i1 + 36 >> 2] | 0;
 i3 = i1 + 44 | 0;
 if ((i2 | 0) != 0) {
  i4 = i2;
  while (1) {
   i2 = i4 + 8 | 0;
   i5 = HEAP32[i2 >> 2] | 0;
   i6 = HEAP32[i3 >> 2] | 0;
   i7 = i6 + 8 | 0;
   do {
    if (i7 >>> 0 > i4 >>> 0) {
     i8 = 5;
    } else {
     if ((i7 + 3072 | 0) >>> 0 <= i4 >>> 0) {
      i8 = 5;
      break;
     }
     i9 = i6 | 0;
     HEAP32[i2 >> 2] = HEAP32[i9 >> 2];
     HEAP32[i9 >> 2] = i4;
    }
   } while (0);
   if ((i8 | 0) == 5) {
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
 i4 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i4 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i4);
 }
 i4 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i3 = i4 | 0;
   i8 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i3 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i8 = i4 | 0;
   i3 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i8 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 i1 = i4 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZN3WTF7HashMapIiPN7WebCore4NodeENS_7IntHashIjEENS_10HashTraitsIiEENS6_IS3_EEE4findERKi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 L1 : do {
  if ((i4 | 0) == 0) {
   i5 = HEAP32[i2 + 4 >> 2] << 3 | 0;
   i6 = i5;
   i7 = i5;
  } else {
   i5 = HEAP32[i2 + 8 >> 2] | 0;
   i8 = HEAP32[i3 >> 2] | 0;
   i9 = i8 + ~(i8 << 15) | 0;
   i10 = (i9 >>> 10 ^ i9) * 9 & -1;
   i9 = i10 >>> 6 ^ i10;
   i10 = i9 + ~(i9 << 11) | 0;
   i9 = i10 >>> 16 ^ i10;
   i10 = i9 & i5;
   i11 = i4 + (i10 << 3) | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   L4 : do {
    if ((i12 | 0) == (i8 | 0)) {
     i13 = i11;
    } else {
     i14 = (i9 >>> 23) + ~i9 | 0;
     i15 = i14 << 12 ^ i14;
     i14 = i15 >>> 7 ^ i15;
     i15 = i14 << 2 ^ i14;
     i14 = i15 >>> 20 ^ i15 | 1;
     i15 = 0;
     i16 = i10;
     i17 = i12;
     while (1) {
      if ((i17 | 0) == 0) {
       break;
      }
      i18 = (i15 | 0) == 0 ? i14 : i15;
      i19 = i18 + i16 & i5;
      i20 = i4 + (i19 << 3) | 0;
      i21 = HEAP32[i20 >> 2] | 0;
      if ((i21 | 0) == (i8 | 0)) {
       i13 = i20;
       break L4;
      } else {
       i15 = i18;
       i16 = i19;
       i17 = i21;
      }
     }
     i17 = i4 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
     i6 = i17;
     i7 = i17;
     break L1;
    }
   } while (0);
   i8 = i4 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
   i6 = (i13 | 0) == 0 ? i8 : i13;
   i7 = i8;
  }
 } while (0);
 i13 = i1;
 HEAP32[i13 >> 2] = i6;
 HEAP32[i13 + 4 >> 2] = i7;
 return;
}
function __ZN7WebCore17InspectorDOMAgent18innerHighlightQuadEN3WTF10PassOwnPtrINS_9FloatQuadEEEPKNS1_6RefPtrIN9Inspector15InspectorObjectEEESA_PKb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = __ZN3WTF10fastMallocEj(44) | 0;
 i11 = i10;
 _memset(i10 | 0, 0, 44) | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP8[i10 + 4 | 0] = 0;
 i12 = i10 + 8 | 0;
 HEAP32[i12 >> 2] = 0;
 HEAP8[i10 + 12 | 0] = 0;
 HEAP32[i10 + 16 >> 2] = 0;
 HEAP8[i10 + 20 | 0] = 0;
 HEAP32[i10 + 24 >> 2] = 0;
 HEAP8[i10 + 28 | 0] = 0;
 HEAP32[i10 + 32 >> 2] = 0;
 HEAP8[i10 + 36 | 0] = 0;
 __ZN7WebCoreL10parseColorEPKN3WTF6RefPtrIN9Inspector15InspectorObjectEEE(i7, i3);
 i3 = i7;
 HEAP32[i10 >> 2] = HEAP32[i3 >> 2];
 HEAP8[i10 + 4 | 0] = HEAP8[i3 + 4 | 0] | 0;
 __ZN7WebCoreL10parseColorEPKN3WTF6RefPtrIN9Inspector15InspectorObjectEEE(i8, i4);
 i4 = i8;
 HEAP32[i12 >> 2] = HEAP32[i4 >> 2];
 HEAP8[i12 + 4 | 0] = HEAP8[i4 + 4 | 0] | 0;
 if ((i5 | 0) == 0) {
  i13 = 0;
 } else {
  i13 = HEAP8[i5] & 1;
 }
 HEAP8[i10 + 42 | 0] = i13;
 i13 = HEAP32[i1 + 24 >> 2] | 0;
 i1 = i9 | 0;
 i5 = i2 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i1 >> 2] = i2;
 __ZN7WebCore16InspectorOverlay13highlightQuadEN3WTF10PassOwnPtrINS_9FloatQuadEEERKNS_15HighlightConfigE(i13, i9, i11);
 i11 = HEAP32[i1 >> 2] | 0;
 if ((i11 | 0) != 0) {
  __ZdlPv(i11);
 }
 if ((i10 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 __ZN3WTF8fastFreeEPv(i10);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore17InspectorDOMAgent16didRemoveDOMAttrEPNS_7ElementERKN3WTF12AtomicStringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = i2 | 0;
 i5 = HEAP32[i1 + 48 >> 2] | 0;
 i6 = HEAP32[i1 + 40 >> 2] | 0;
 i7 = i2;
 i8 = i7 + ~(i7 << 15) | 0;
 i7 = (i8 >>> 10 ^ i8) * 9 & -1;
 i8 = i7 >>> 6 ^ i7;
 i7 = i8 + ~(i8 << 11) | 0;
 i8 = i7 >>> 16 ^ i7;
 if ((i6 | 0) == 0) {
  return;
 }
 i7 = i5 & i8;
 i9 = i6 + (i7 << 3) | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 L4 : do {
  if ((i10 | 0) == (i4 | 0)) {
   i11 = i9;
  } else {
   i12 = (i8 >>> 23) + ~i8 | 0;
   i13 = i12 << 12 ^ i12;
   i12 = i13 >>> 7 ^ i13;
   i13 = i12 << 2 ^ i12;
   i12 = i13 >>> 20 ^ i13 | 1;
   i13 = 0;
   i14 = i7;
   i15 = i10;
   while (1) {
    if ((i15 | 0) == 0) {
     break;
    }
    i16 = (i13 | 0) == 0 ? i12 : i13;
    i17 = i16 + i14 & i5;
    i18 = i6 + (i17 << 3) | 0;
    i19 = HEAP32[i18 >> 2] | 0;
    if ((i19 | 0) == (i4 | 0)) {
     i11 = i18;
     break L4;
    } else {
     i13 = i16;
     i14 = i17;
     i15 = i19;
    }
   }
   return;
  }
 } while (0);
 if ((i11 | 0) == 0) {
  return;
 }
 i4 = HEAP32[i11 + 4 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 i11 = HEAP32[i1 + 36 >> 2] | 0;
 if ((i11 | 0) != 0) {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i11 >> 2] | 0) + 16 >> 2] & 31](i11, i2);
 }
 __ZN9Inspector30InspectorDOMFrontendDispatcher16attributeRemovedEiRKN3WTF6StringE(HEAP32[i1 + 28 >> 2] | 0, i4, i3 | 0);
 return;
}
function __ZN3JSC6StrongINS_7UnknownEEC2ERKS2_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 | 0;
 HEAP32[i5 >> 2] = 0;
 i1 = i2 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = HEAP32[(i2 & -4096) + 12 >> 2] | 0;
 if ((HEAP32[i6 + 84 >> 2] | 0) != 0) {
  _WTFCrash();
 }
 i2 = i6 + 80 | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 if ((i7 | 0) == 0) {
  __ZN3JSC9HandleSet4growEv(i6);
  i8 = HEAP32[i2 >> 2] | 0;
 } else {
  i8 = i7;
 }
 i7 = i8 + 12 | 0;
 HEAP32[i2 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i8 + 4 >> 2] = -6;
 HEAP32[i8 >> 2] = 0;
 i2 = i8 + 8 | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i7 >> 2] = 0;
 i9 = i6 + 60 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 HEAP32[i2 >> 2] = i6 + 48;
 HEAP32[i7 >> 2] = i10;
 HEAP32[i9 >> 2] = i8;
 HEAP32[i10 + 8 >> 2] = i8;
 i10 = i8 | 0;
 HEAP32[i5 >> 2] = i10;
 i9 = HEAP32[i1 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i11 = 0;
  i12 = 0;
  i13 = -6;
  i14 = 0;
 } else {
  i1 = i9 | 0;
  i9 = HEAP32[i1 >> 2] | 0;
  i7 = HEAP32[i1 + 4 >> 2] | 0;
  i11 = i7 & 0;
  i12 = i9 & -1;
  i13 = i7 & -1;
  i14 = i9 & 0;
 }
 i9 = i4 | 0;
 HEAP32[i9 >> 2] = i12 | i14;
 HEAP32[i9 + 4 >> 2] = i11 | i13;
 __ZN3JSC9HandleSet12writeBarrierEPNS_7JSValueERKS1_(HEAP32[(i8 & -4096) + 12 >> 2] | 0, i10, i4);
 i4 = HEAP32[i9 + 4 >> 2] | 0;
 i10 = HEAP32[i5 >> 2] | 0;
 HEAP32[i10 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i10 + 4 >> 2] = i4;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore17InspectorDOMAgent14highlightFrameEPN3WTF6StringERKS2_PKNS1_6RefPtrIN9Inspector15InspectorObjectEEESB_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i2 | 0;
 i7 = i2 + 8 | 0;
 i8 = __ZN7WebCore18InspectorPageAgent10frameForIdERKN3WTF6StringE(HEAP32[i1 + 16 >> 2] | 0, i3) | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i3 = i8 + 448 | 0;
 if ((HEAP32[i3 >> 2] | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i8 = __ZN3WTF10fastMallocEj(44) | 0;
 i9 = i8;
 _memset(i8 | 0, 0, 44) | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP8[i8 + 4 | 0] = 0;
 i10 = i8 + 8 | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP8[i8 + 12 | 0] = 0;
 HEAP32[i8 + 16 >> 2] = 0;
 HEAP8[i8 + 20 | 0] = 0;
 HEAP32[i8 + 24 >> 2] = 0;
 HEAP8[i8 + 28 | 0] = 0;
 HEAP32[i8 + 32 >> 2] = 0;
 HEAP8[i8 + 36 | 0] = 0;
 HEAP8[i8 + 40 | 0] = 1;
 __ZN7WebCoreL10parseColorEPKN3WTF6RefPtrIN9Inspector15InspectorObjectEEE(i6, i4);
 i4 = i6;
 HEAP32[i8 >> 2] = HEAP32[i4 >> 2];
 HEAP8[i8 + 4 | 0] = HEAP8[i4 + 4 | 0] | 0;
 __ZN7WebCoreL10parseColorEPKN3WTF6RefPtrIN9Inspector15InspectorObjectEEE(i7, i5);
 i5 = i7;
 HEAP32[i10 >> 2] = HEAP32[i5 >> 2];
 HEAP8[i10 + 4 | 0] = HEAP8[i5 + 4 | 0] | 0;
 __ZN7WebCore16InspectorOverlay13highlightNodeEPNS_4NodeERKNS_15HighlightConfigE(HEAP32[i1 + 24 >> 2] | 0, HEAP32[i3 >> 2] | 0, i9);
 if ((i8 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZN3WTF8fastFreeEPv(i8);
 STACKTOP = i2;
 return;
}
function __ZNK3WTF7HashMapIiNSt3__14pairIPN7WebCore4NodeENS_6StringEEENS_7IntHashIjEENS_10HashTraitsIiEENSA_IS7_EEE3getERKi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = HEAP32[i2 + 8 >> 2] | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 i3 = i2 + ~(i2 << 15) | 0;
 i6 = (i3 >>> 10 ^ i3) * 9 & -1;
 i3 = i6 >>> 6 ^ i6;
 i6 = i3 + ~(i3 << 11) | 0;
 i3 = i6 >>> 16 ^ i6;
 L1 : do {
  if ((i5 | 0) != 0) {
   i6 = i3 & i4;
   i7 = i5 + (i6 * 12 & -1) | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   if ((i8 | 0) == (i2 | 0)) {
    i9 = i7;
   } else {
    i7 = (i3 >>> 23) + ~i3 | 0;
    i10 = i7 << 12 ^ i7;
    i7 = i10 >>> 7 ^ i10;
    i10 = i7 << 2 ^ i7;
    i7 = i10 >>> 20 ^ i10 | 1;
    i10 = 0;
    i11 = i6;
    i6 = i8;
    while (1) {
     if ((i6 | 0) == 0) {
      break L1;
     }
     i8 = (i10 | 0) == 0 ? i7 : i10;
     i12 = i8 + i11 & i4;
     i13 = i5 + (i12 * 12 & -1) | 0;
     i14 = HEAP32[i13 >> 2] | 0;
     if ((i14 | 0) == (i2 | 0)) {
      i9 = i13;
      break;
     } else {
      i10 = i8;
      i11 = i12;
      i6 = i14;
     }
    }
   }
   if ((i9 | 0) == 0) {
    break;
   }
   HEAP32[i1 >> 2] = HEAP32[i9 + 4 >> 2];
   i6 = HEAP32[i9 + 8 >> 2] | 0;
   HEAP32[i1 + 4 >> 2] = i6;
   if ((i6 | 0) == 0) {
    return;
   }
   i11 = i6 | 0;
   HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 return;
}
function __ZN7WebCore17InspectorDOMAgent10assertNodeEPN3WTF6StringEi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 HEAP32[i5 >> 2] = i3;
 do {
  if ((i3 | 0) != 0) {
   i8 = i1 + 92 | 0;
   __ZN3WTF7HashMapIiPN7WebCore4NodeENS_7IntHashIjEENS_10HashTraitsIiEENS6_IS3_EEE4findERKi(i6, i8, i5);
   i9 = HEAP32[i6 >> 2] | 0;
   if ((i9 | 0) == ((HEAP32[i8 >> 2] | 0) + (HEAP32[i1 + 96 >> 2] << 3) | 0)) {
    break;
   }
   i8 = HEAP32[i9 + 4 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   } else {
    i10 = i8;
   }
   STACKTOP = i4;
   return i10 | 0;
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i7, H_BASE + 1312 | 0);
 i1 = i7 | 0;
 i7 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 i6 = i2 | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i7;
 do {
  if ((i2 | 0) != 0) {
   i7 = i2 | 0;
   i6 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i7 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i10 = 0;
  STACKTOP = i4;
  return i10 | 0;
 }
 i1 = i2 | 0;
 i6 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  i10 = 0;
  STACKTOP = i4;
  return i10 | 0;
 } else {
  HEAP32[i1 >> 2] = i6;
  i10 = 0;
  STACKTOP = i4;
  return i10 | 0;
 }
 return 0;
}
function __ZN7WebCore17InspectorDOMAgentC2EPNS_19InstrumentingAgentsEPNS_18InspectorPageAgentEPN9Inspector21InjectedScriptManagerEPNS_16InspectorOverlayE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 HEAP32[i8 >> 2] = H_BASE + 1664;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i7, i8);
 i8 = i1 | 0;
 HEAP32[i8 >> 2] = H_BASE + 1680;
 i9 = i7 | 0;
 i7 = HEAP32[i9 >> 2] | 0;
 HEAP32[i1 + 4 >> 2] = i7;
 do {
  if ((i7 | 0) == 0) {
   HEAP32[i8 >> 2] = H_BASE + 2072;
   HEAP32[i1 + 8 >> 2] = i2;
  } else {
   i10 = i7 | 0;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
   i10 = HEAP32[i9 >> 2] | 0;
   HEAP32[i8 >> 2] = H_BASE + 2072;
   HEAP32[i1 + 8 >> 2] = i2;
   if ((i10 | 0) == 0) {
    break;
   }
   i11 = i10 | 0;
   i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i11 >> 2] = i12;
    break;
   }
  }
 } while (0);
 HEAP32[i8 >> 2] = H_BASE + 2112;
 HEAP32[i1 + 12 >> 2] = H_BASE + 2272;
 HEAP32[i1 + 16 >> 2] = i3;
 HEAP32[i1 + 20 >> 2] = i4;
 HEAP32[i1 + 24 >> 2] = i5;
 _memset(i1 + 28 | 0, 0, 144) | 0;
 HEAP32[i1 + 172 >> 2] = 1;
 HEAP32[i1 + 176 >> 2] = -1;
 _memset(i1 + 180 | 0, 0, 33) | 0;
 _memset(i1 + 216 | 0, 0, 14) | 0;
 STACKTOP = i6;
 return;
}
function __ZN7WebCore17InspectorDOMAgentC1EPNS_19InstrumentingAgentsEPNS_18InspectorPageAgentEPN9Inspector21InjectedScriptManagerEPNS_16InspectorOverlayE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 HEAP32[i8 >> 2] = H_BASE + 1664;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i7, i8);
 i8 = i1 | 0;
 HEAP32[i8 >> 2] = H_BASE + 1680;
 i9 = i7 | 0;
 i7 = HEAP32[i9 >> 2] | 0;
 HEAP32[i1 + 4 >> 2] = i7;
 do {
  if ((i7 | 0) == 0) {
   HEAP32[i8 >> 2] = H_BASE + 2072;
   HEAP32[i1 + 8 >> 2] = i2;
  } else {
   i10 = i7 | 0;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
   i10 = HEAP32[i9 >> 2] | 0;
   HEAP32[i8 >> 2] = H_BASE + 2072;
   HEAP32[i1 + 8 >> 2] = i2;
   if ((i10 | 0) == 0) {
    break;
   }
   i11 = i10 | 0;
   i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i11 >> 2] = i12;
    break;
   }
  }
 } while (0);
 HEAP32[i8 >> 2] = H_BASE + 2112;
 HEAP32[i1 + 12 >> 2] = H_BASE + 2272;
 HEAP32[i1 + 16 >> 2] = i3;
 HEAP32[i1 + 20 >> 2] = i4;
 HEAP32[i1 + 24 >> 2] = i5;
 _memset(i1 + 28 | 0, 0, 144) | 0;
 HEAP32[i1 + 172 >> 2] = 1;
 HEAP32[i1 + 176 >> 2] = -1;
 _memset(i1 + 180 | 0, 0, 33) | 0;
 _memset(i1 + 216 | 0, 0, 14) | 0;
 STACKTOP = i6;
 return;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6VectorINS_6RefPtrIN7WebCore4NodeEEELj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorISA_EENS_10StringHashENS_7HashMapIS1_S9_SD_NS_10HashTraitsIS1_EENSF_IS9_EEE18KeyValuePairTraitsESG_E12deleteBucketERSA_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i7 = i5 + 8 | 0;
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
  HEAP32[i1 + 8 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = i1 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  HEAP32[i2 >> 2] = -1;
  return;
 }
 i4 = i1 | 0;
 i6 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  HEAP32[i2 >> 2] = -1;
  return;
 } else {
  HEAP32[i4 >> 2] = i6;
  HEAP32[i2 >> 2] = -1;
  return;
 }
}
function __ZN3WTF6VectorINS_6OwnPtrINS_7HashMapINS_6RefPtrIN7WebCore4NodeEEEiNS_7PtrHashIS6_EENS_10HashTraitsIS6_EENS9_IiEEEEEELj0ENS_15CrashOnOverflowEE6shrinkEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 i4 = i1 + 8 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 i5 = i3 + (i1 << 2) | 0;
 if ((i1 | 0) == (i2 | 0)) {
  HEAP32[i4 >> 2] = i2;
  return;
 }
 i1 = i3 + (i2 << 2) | 0;
 while (1) {
  i3 = HEAP32[i1 >> 2] | 0;
  if ((i3 | 0) != 0) {
   i6 = HEAP32[i3 >> 2] | 0;
   if ((i6 | 0) != 0) {
    i7 = HEAP32[i3 + 4 >> 2] | 0;
    if ((i7 | 0) > 0) {
     i8 = 0;
     while (1) {
      i9 = HEAP32[i6 + (i8 << 3) >> 2] | 0;
      i10 = i9;
      do {
       if (!((i10 | 0) == (-1 | 0) | (i10 | 0) == 0)) {
        i11 = i9 + 8 | 0;
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
      i8 = i8 + 1 | 0;
      if ((i8 | 0) >= (i7 | 0)) {
       break;
      }
     }
    }
    __ZN3WTF8fastFreeEPv(i6);
   }
   __ZN3WTF8fastFreeEPv(i3);
  }
  i1 = i1 + 4 | 0;
  if ((i1 | 0) == (i5 | 0)) {
   break;
  }
 }
 HEAP32[i4 >> 2] = i2;
 return;
}
function __ZN3WTF22KeyValuePairHashTraitsINS_10HashTraitsINS_6StringEEENS1_INS_7HashMapINS_6RefPtrIN7WebCore4NodeEEEiNS_7PtrHashIS8_EENS1_IS8_EENS1_IiEEEEEEE10emptyValueEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i3 | 0;
 _memset(i3 | 0, 0, 24) | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 >> 2] = 0;
 _memset(i1 + 4 | 0, 0, 20) | 0;
 i1 = HEAP32[i3 + 4 >> 2] | 0;
 if ((i1 | 0) != 0) {
  i5 = HEAP32[i3 + 8 >> 2] | 0;
  if ((i5 | 0) > 0) {
   i3 = 0;
   while (1) {
    i6 = HEAP32[i1 + (i3 << 3) >> 2] | 0;
    i7 = i6;
    do {
     if (!((i7 | 0) == (-1 | 0) | (i7 | 0) == 0)) {
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
    i3 = i3 + 1 | 0;
    if ((i3 | 0) >= (i5 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i1);
 }
 i1 = HEAP32[i4 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i1 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i4 >> 2] = i5;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore17InspectorDOMAgent17requestChildNodesEPN3WTF6StringEiPKi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 do {
  if ((i4 | 0) == 0) {
   i7 = 1;
  } else {
   i8 = HEAP32[i4 >> 2] | 0;
   if ((i8 | 0) == -1) {
    i7 = 2147483647;
    break;
   }
   if ((i8 | 0) > 0) {
    i7 = i8;
    break;
   }
   __ZN3WTF6StringC1EPKc(i6, H_BASE + 40 | 0);
   i8 = i6 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = 0;
   i10 = i2 | 0;
   i11 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = i9;
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
   if ((i11 | 0) == 0) {
    STACKTOP = i5;
    return;
   }
   i10 = i11 | 0;
   i9 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    STACKTOP = i5;
    return;
   } else {
    HEAP32[i10 >> 2] = i9;
    STACKTOP = i5;
    return;
   }
  }
 } while (0);
 __ZN7WebCore17InspectorDOMAgent24pushChildNodesToFrontendEii(i1, i3, i7);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore17InspectorDOMAgent18pushNodeToFrontendEPN3WTF6StringEiPNS_4NodeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = __ZN7WebCore17InspectorDOMAgent14assertDocumentEPN3WTF6StringEi(i1, i2, i3) | 0;
 if ((i7 | 0) == 0) {
  i8 = 0;
  STACKTOP = i5;
  return i8 | 0;
 }
 if ((HEAP32[(HEAP32[i4 + 20 >> 2] | 0) + 8 >> 2] | 0) == (i7 | 0)) {
  i8 = __ZN7WebCore17InspectorDOMAgent22pushNodePathToFrontendEPNS_4NodeE(i1, i4) | 0;
  STACKTOP = i5;
  return i8 | 0;
 }
 __ZN3WTF6StringC1EPKc(i6, H_BASE + 128 | 0);
 i4 = i6 | 0;
 i6 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 i1 = i2 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = i6;
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
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i8 = 0;
  STACKTOP = i5;
  return i8 | 0;
 }
 i4 = i2 | 0;
 i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  i8 = 0;
  STACKTOP = i5;
  return i8 | 0;
 } else {
  HEAP32[i4 >> 2] = i1;
  i8 = 0;
  STACKTOP = i5;
  return i8 | 0;
 }
 return 0;
}
function __ZN7WebCore17InspectorDOMAgent12setNodeValueEPN3WTF6StringEiRKS2_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = __ZN7WebCore17InspectorDOMAgent18assertEditableNodeEPN3WTF6StringEi(i1, i2, i3) | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 76 >> 2] & 1](i7) | 0) == 3) {
  __ZN7WebCore9DOMEditor16replaceWholeTextEPNS_4TextERKN3WTF6StringEPS4_(HEAP32[i1 + 224 >> 2] | 0, i7, i4, i2) | 0;
  STACKTOP = i5;
  return;
 }
 __ZN3WTF6StringC1EPKc(i6, H_BASE + 1472 | 0);
 i4 = i6 | 0;
 i6 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 i7 = i2 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i6;
 do {
  if ((i2 | 0) != 0) {
   i6 = i2 | 0;
   i7 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i6 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i4 = i2 | 0;
 i7 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i7 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i4 >> 2] = i7;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore17InspectorDOMAgent11boundNodeIdEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = HEAP32[i1 + 48 >> 2] | 0;
 i4 = HEAP32[i1 + 40 >> 2] | 0;
 i1 = i2;
 i5 = i1 + ~(i1 << 15) | 0;
 i1 = (i5 >>> 10 ^ i5) * 9 & -1;
 i5 = i1 >>> 6 ^ i1;
 i1 = i5 + ~(i5 << 11) | 0;
 i5 = i1 >>> 16 ^ i1;
 if ((i4 | 0) == 0) {
  i6 = 0;
  return i6 | 0;
 }
 i1 = i3 & i5;
 i7 = i4 + (i1 << 3) | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 L4 : do {
  if ((i8 | 0) == (i2 | 0)) {
   i9 = i7;
  } else {
   i10 = (i5 >>> 23) + ~i5 | 0;
   i11 = i10 << 12 ^ i10;
   i10 = i11 >>> 7 ^ i11;
   i11 = i10 << 2 ^ i10;
   i10 = i11 >>> 20 ^ i11 | 1;
   i11 = 0;
   i12 = i1;
   i13 = i8;
   while (1) {
    if ((i13 | 0) == 0) {
     i6 = 0;
     break;
    }
    i14 = (i11 | 0) == 0 ? i10 : i11;
    i15 = i14 + i12 & i3;
    i16 = i4 + (i15 << 3) | 0;
    i17 = HEAP32[i16 >> 2] | 0;
    if ((i17 | 0) == (i2 | 0)) {
     i9 = i16;
     break L4;
    } else {
     i11 = i14;
     i12 = i15;
     i13 = i17;
    }
   }
   return i6 | 0;
  }
 } while (0);
 if ((i9 | 0) == 0) {
  i6 = 0;
  return i6 | 0;
 }
 i6 = HEAP32[i9 + 4 >> 2] | 0;
 return i6 | 0;
}
function __ZN7WebCore17InspectorDOMAgent15nodeForObjectIdERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 32 | 0;
 i7 = i3 + 40 | 0;
 __ZN9Inspector21InjectedScriptManager25injectedScriptForObjectIdERKN3WTF6StringE(i5, HEAP32[i1 + 20 >> 2] | 0, i2);
 __ZNK9Inspector14InjectedScript14findObjectByIdERKN3WTF6StringE(i6, i5, i2);
 HEAP32[i7 >> 2] = __ZTVN10Deprecated11ScriptValueE + 8;
 __ZN3JSC6StrongINS_7UnknownEEC2ERKS2_(i7 + 4 | 0, i6 + 4 | 0);
 do {
  if (__ZNK10Deprecated11ScriptValue8isObjectEv(i7) | 0) {
   if (__ZNK10Deprecated11ScriptValue6isNullEv(i7) | 0) {
    i8 = 0;
    break;
   }
   i2 = HEAP32[i7 + 4 >> 2] | 0;
   if ((i2 | 0) == 0) {
    HEAP32[i4 + 4 >> 2] = -6;
    HEAP32[i4 >> 2] = 0;
   } else {
    i1 = i2 | 0;
    i2 = HEAP32[i1 + 4 >> 2] | 0;
    i9 = i4 | 0;
    HEAP32[i9 >> 2] = HEAP32[i1 >> 2];
    HEAP32[i9 + 4 >> 2] = i2;
   }
   i8 = __ZN7WebCore6toNodeEN3JSC7JSValueE(i4) | 0;
  } else {
   i8 = 0;
  }
 } while (0);
 __ZN10Deprecated11ScriptValueD1Ev(i7);
 __ZN10Deprecated11ScriptValueD1Ev(i6);
 __ZN9Inspector14InjectedScriptD1Ev(i5);
 STACKTOP = i3;
 return i8 | 0;
}
function __ZN7WebCore17InspectorDOMAgent14assertDocumentEPN3WTF6StringEi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = __ZN7WebCore17InspectorDOMAgent10assertNodeEPN3WTF6StringEi(i1, i2, i3) | 0;
 if ((i6 | 0) == 0) {
  i7 = 0;
  STACKTOP = i4;
  return i7 | 0;
 }
 if ((HEAP32[(HEAP32[i6 + 20 >> 2] | 0) + 8 >> 2] | 0) == (i6 | 0)) {
  i7 = i6;
  STACKTOP = i4;
  return i7 | 0;
 }
 __ZN3WTF6StringC1EPKc(i5, H_BASE + 1040 | 0);
 i6 = i5 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i5;
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
 i2 = HEAP32[i6 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i7 = 0;
  STACKTOP = i4;
  return i7 | 0;
 }
 i6 = i2 | 0;
 i3 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  i7 = 0;
  STACKTOP = i4;
  return i7 | 0;
 } else {
  HEAP32[i6 >> 2] = i3;
  i7 = 0;
  STACKTOP = i4;
  return i7 | 0;
 }
 return 0;
}
function __ZN7WebCore17InspectorDOMAgent12isWhitespaceEPNS_4NodeE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 if ((i1 | 0) == 0) {
  i5 = 0;
  STACKTOP = i2;
  return i5 | 0;
 }
 if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 76 >> 2] & 1](i1) | 0) != 3) {
  i5 = 0;
  STACKTOP = i2;
  return i5 | 0;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 68 >> 2] & 31](i4, i1);
 __ZNK3WTF6String15stripWhiteSpaceEv(i3, i4);
 i1 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i1 | 0) == 0) {
   i6 = 1;
  } else {
   i3 = (HEAP32[i1 + 4 >> 2] | 0) == 0;
   i7 = i1 | 0;
   i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    i6 = i3;
    break;
   } else {
    HEAP32[i7 >> 2] = i8;
    i6 = i3;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i4 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i5 = i6;
  STACKTOP = i2;
  return i5 | 0;
 }
 i4 = i1 | 0;
 i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  i5 = i6;
  STACKTOP = i2;
  return i5 | 0;
 } else {
  HEAP32[i4 >> 2] = i3;
  i5 = i6;
  STACKTOP = i2;
  return i5 | 0;
 }
 return 0;
}
function __ZN7WebCore17InspectorDOMAgent10removeNodeEPN3WTF6StringEi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = __ZN7WebCore17InspectorDOMAgent18assertEditableNodeEPN3WTF6StringEi(i1, i2, i3) | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i3 = HEAP32[i6 + 16 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN7WebCore9DOMEditor11removeChildEPNS_4NodeES2_PN3WTF6StringE(HEAP32[i1 + 224 >> 2] | 0, i3 | 0, i6, i2) | 0;
  STACKTOP = i4;
  return;
 }
 __ZN3WTF6StringC1EPKc(i5, H_BASE + 1544 | 0);
 i6 = i5 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i5;
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
 i2 = HEAP32[i6 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i6 = i2 | 0;
 i3 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i6 >> 2] = i3;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore17InspectorDOMAgent21setInspectModeEnabledEPN3WTF6StringEbPKNS1_6RefPtrIN9Inspector15InspectorObjectEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 if ((i4 | 0) == 0) {
  i7 = 0;
 } else {
  i7 = HEAP32[i4 >> 2] | 0;
 }
 i4 = i1 + 212 | 0;
 if ((HEAP8[i4] & 1 | 0) == (i3 & 1 | 0)) {
  STACKTOP = i5;
  return;
 }
 HEAP8[i4] = i3 & 1;
 do {
  if (i3) {
   __ZN7WebCore17InspectorDOMAgent34highlightConfigFromInspectorObjectEPN3WTF6StringEPN9Inspector15InspectorObjectE(i6, 0, i2, i7);
   i8 = i1 + 216 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   i10 = i6 | 0;
   i11 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = 0;
   HEAP32[i8 >> 2] = i11;
   if ((i9 | 0) == 0) {
    i12 = i11;
   } else {
    __ZN3WTF8fastFreeEPv(i9);
    i12 = HEAP32[i8 >> 2] | 0;
   }
   if ((i12 | 0) != 0) {
    break;
   }
   STACKTOP = i5;
   return;
  } else {
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 112 >> 2] & 31](i1, i2);
  }
 } while (0);
 __ZN7WebCore16InspectorOverlay22didSetSearchingForNodeEb(HEAP32[i1 + 24 >> 2] | 0, (HEAP8[i4] & 1) != 0);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore17InspectorDOMAgent21assertEditableElementEPN3WTF6StringEi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = __ZN7WebCore17InspectorDOMAgent13assertElementEPN3WTF6StringEi(i1, i2, i3) | 0;
 if ((i6 | 0) == 0) {
  i7 = 0;
  STACKTOP = i4;
  return i7 | 0;
 }
 if ((HEAP32[i6 + 12 >> 2] & 8388608 | 0) == 0) {
  i7 = i6;
  STACKTOP = i4;
  return i7 | 0;
 }
 __ZN3WTF6StringC1EPKc(i5, H_BASE + 312 | 0);
 i6 = i5 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i5;
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
 i2 = HEAP32[i6 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i7 = 0;
  STACKTOP = i4;
  return i7 | 0;
 }
 i6 = i2 | 0;
 i3 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  i7 = 0;
  STACKTOP = i4;
  return i7 | 0;
 } else {
  HEAP32[i6 >> 2] = i3;
  i7 = 0;
  STACKTOP = i4;
  return i7 | 0;
 }
 return 0;
}
function __ZN7WebCore17InspectorDOMAgent18assertEditableNodeEPN3WTF6StringEi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = __ZN7WebCore17InspectorDOMAgent10assertNodeEPN3WTF6StringEi(i1, i2, i3) | 0;
 if ((i6 | 0) == 0) {
  i7 = 0;
  STACKTOP = i4;
  return i7 | 0;
 }
 if ((HEAP32[i6 + 12 >> 2] & 8388608 | 0) == 0) {
  i7 = i6;
  STACKTOP = i4;
  return i7 | 0;
 }
 __ZN3WTF6StringC1EPKc(i5, H_BASE + 480 | 0);
 i6 = i5 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i5;
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
 i2 = HEAP32[i6 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i7 = 0;
  STACKTOP = i4;
  return i7 | 0;
 }
 i6 = i2 | 0;
 i3 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  i7 = 0;
  STACKTOP = i4;
  return i7 | 0;
 } else {
  HEAP32[i6 >> 2] = i3;
  i7 = 0;
  STACKTOP = i4;
  return i7 | 0;
 }
 return 0;
}
function __ZN7WebCore17InspectorDOMAgent5focusEPN3WTF6StringEi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = __ZN7WebCore17InspectorDOMAgent13assertElementEPN3WTF6StringEi(i1, i2, i3) | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 348 >> 2] & 1](i6) | 0) {
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i6 >> 2] | 0) + 392 >> 2] & 31](i6, 1, 0);
  STACKTOP = i4;
  return;
 }
 __ZN3WTF6StringC1EPKc(i5, H_BASE + 872 | 0);
 i6 = i5 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i5;
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
 i2 = HEAP32[i6 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i6 = i2 | 0;
 i3 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i6 >> 2] = i3;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore17InspectorDOMAgent12getOuterHTMLEPN3WTF6StringEiS3_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = __ZN7WebCore17InspectorDOMAgent10assertNodeEPN3WTF6StringEi(i1, i2, i3) | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore12createMarkupERKNS_4NodeENS_13EChildrenOnlyEPN3WTF6VectorIPS0_Lj0ENS4_15CrashOnOverflowEEENS_13EAbsoluteURLsEPNS5_INS_13QualifiedNameELj0ES7_EENS_22EFragmentSerializationE(i6, i7, 0, 0, 0, 0, 0);
 i7 = i6 | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i3 = i4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i6;
 do {
  if ((i4 | 0) != 0) {
   i6 = i4 | 0;
   i3 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i6 >> 2] = i3;
    break;
   }
  }
 } while (0);
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
function __ZN7WebCore17InspectorDOMAgent13assertElementEPN3WTF6StringEi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = __ZN7WebCore17InspectorDOMAgent10assertNodeEPN3WTF6StringEi(i1, i2, i3) | 0;
 if ((i6 | 0) == 0) {
  i7 = 0;
  STACKTOP = i4;
  return i7 | 0;
 }
 if ((HEAP32[i6 + 12 >> 2] & 4 | 0) != 0) {
  i7 = i6;
  STACKTOP = i4;
  return i7 | 0;
 }
 __ZN3WTF6StringC1EPKc(i5, H_BASE + 664 | 0);
 i6 = i5 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i5;
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
 i2 = HEAP32[i6 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i7 = 0;
  STACKTOP = i4;
  return i7 | 0;
 }
 i6 = i2 | 0;
 i3 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  i7 = 0;
  STACKTOP = i4;
  return i7 | 0;
 } else {
  HEAP32[i6 >> 2] = i3;
  i7 = 0;
  STACKTOP = i4;
  return i7 | 0;
 }
 return 0;
}
function __ZN7WebCore17InspectorDOMAgent4undoEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 24 | 0;
 i6 = i3 + 32 | 0;
 HEAP32[i5 >> 2] = 0;
 __ZN7WebCore16InspectorHistory4undoERi(HEAP32[i1 + 220 >> 2] | 0, i5) | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF6StringC1EPKc(i6, H_BASE + 2432 | 0);
 } else {
  __ZN7WebCore24ExceptionCodeDescriptionC1Ei(i4, i1);
  __ZN3WTF6StringC1EPKc(i6, HEAP32[i4 + 4 >> 2] | 0);
 }
 i4 = i6 | 0;
 i6 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 i1 = i2 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = i6;
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
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = i2 | 0;
 i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i4 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore17InspectorDOMAgent4redoEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 24 | 0;
 i6 = i3 + 32 | 0;
 HEAP32[i5 >> 2] = 0;
 __ZN7WebCore16InspectorHistory4redoERi(HEAP32[i1 + 220 >> 2] | 0, i5) | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF6StringC1EPKc(i6, H_BASE + 2432 | 0);
 } else {
  __ZN7WebCore24ExceptionCodeDescriptionC1Ei(i4, i1);
  __ZN3WTF6StringC1EPKc(i6, HEAP32[i4 + 4 >> 2] | 0);
 }
 i4 = i6 | 0;
 i6 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 i1 = i2 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = i6;
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
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = i2 | 0;
 i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i4 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore17InspectorDOMAgent24pushNodeByPathToFrontendEPN3WTF6StringERKS2_Pi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = __ZN7WebCore17InspectorDOMAgent11nodeForPathERKN3WTF6StringE(i1, i3) | 0;
 if ((i7 | 0) != 0) {
  HEAP32[i4 >> 2] = __ZN7WebCore17InspectorDOMAgent22pushNodePathToFrontendEPNS_4NodeE(i1, i7) | 0;
  STACKTOP = i5;
  return;
 }
 __ZN3WTF6StringC1EPKc(i6, H_BASE + 744 | 0);
 i7 = i6 | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i1 = i2 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = i6;
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
 i2 = HEAP32[i7 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i7 = i2 | 0;
 i1 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i7 >> 2] = i1;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore17InspectorDOMAgent19setSearchingForNodeEPN3WTF6StringEbPN9Inspector15InspectorObjectE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = i1 + 212 | 0;
 if ((HEAP8[i7] & 1 | 0) == (i3 & 1 | 0)) {
  STACKTOP = i5;
  return;
 }
 HEAP8[i7] = i3 & 1;
 do {
  if (i3) {
   __ZN7WebCore17InspectorDOMAgent34highlightConfigFromInspectorObjectEPN3WTF6StringEPN9Inspector15InspectorObjectE(i6, 0, i2, i4);
   i8 = i1 + 216 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   i10 = i6 | 0;
   i11 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = 0;
   HEAP32[i8 >> 2] = i11;
   if ((i9 | 0) == 0) {
    i12 = i11;
   } else {
    __ZN3WTF8fastFreeEPv(i9);
    i12 = HEAP32[i8 >> 2] | 0;
   }
   if ((i12 | 0) != 0) {
    break;
   }
   STACKTOP = i5;
   return;
  } else {
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 112 >> 2] & 31](i1, i2);
  }
 } while (0);
 __ZN7WebCore16InspectorOverlay22didSetSearchingForNodeEb(HEAP32[i1 + 24 >> 2] | 0, (HEAP8[i7] & 1) != 0);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore17InspectorDOMAgent11resolveNodeEPNS_4NodeERKN3WTF6StringE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i6 = i5 | 0;
 i7 = i5 + 24 | 0;
 i8 = HEAP32[(HEAP32[(HEAP32[i3 + 20 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0;
 if ((i8 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i5;
  return;
 }
 i9 = __ZN7WebCore18mainWorldExecStateEPNS_5FrameE(i8) | 0;
 __ZN9Inspector21InjectedScriptManager17injectedScriptForEPN3JSC9ExecStateE(i6, HEAP32[i2 + 20 >> 2] | 0, i9);
 i2 = HEAP32[i6 + 12 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   i10 = 5;
  } else {
   if ((HEAP32[i2 + 4 >> 2] | 0) == -6) {
    i10 = 5;
    break;
   }
   __ZN7WebCore17InspectorDOMAgent17nodeAsScriptValueEPN3JSC9ExecStateEPNS_4NodeE(i7, i9, i3);
   __ZNK9Inspector14InjectedScript10wrapObjectERKN10Deprecated11ScriptValueERKN3WTF6StringEb(i1, i6, i7, i4, 0);
   __ZN10Deprecated11ScriptValueD1Ev(i7);
  }
 } while (0);
 if ((i10 | 0) == 5) {
  HEAP32[i1 >> 2] = 0;
 }
 __ZN9Inspector14InjectedScriptD1Ev(i6);
 STACKTOP = i5;
 return;
}
function __ZThn12_N7WebCore17InspectorDOMAgent13highlightRectEPN3WTF6StringEiiiiPKNS1_6RefPtrIN9Inspector15InspectorObjectEEES9_PKb(i1, i2, i3, i4, i5, i6, i7, i8, i9) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 var i10 = 0, i11 = 0, d12 = +0, d13 = +0, d14 = +0, d15 = +0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i10 = i2 | 0;
 i11 = __Znwj(32) | 0;
 d12 = +(i3 | 0);
 d13 = +(i4 | 0);
 i4 = i11;
 d14 = +d12;
 d15 = +d13;
 HEAPF32[i4 >> 2] = d14;
 HEAPF32[i4 + 4 >> 2] = d15;
 d15 = d12 + +(i5 | 0);
 HEAPF32[i11 + 8 >> 2] = d15;
 HEAPF32[i11 + 12 >> 2] = d13;
 d14 = d13 + +(i6 | 0);
 HEAPF32[i11 + 16 >> 2] = d15;
 HEAPF32[i11 + 20 >> 2] = d14;
 HEAPF32[i11 + 24 >> 2] = d12;
 HEAPF32[i11 + 28 >> 2] = d14;
 i6 = i10 | 0;
 HEAP32[i6 >> 2] = i11;
 __ZN7WebCore17InspectorDOMAgent18innerHighlightQuadEN3WTF10PassOwnPtrINS_9FloatQuadEEEPKNS1_6RefPtrIN9Inspector15InspectorObjectEEESA_PKb(i1 - 232 + 220 | 0, i10, i7, i8, i9);
 i9 = HEAP32[i6 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZdlPv(i9);
 STACKTOP = i2;
 return;
}
function __ZN3WTF6OwnPtrIN7WebCore28RevalidateStyleAttributeTaskEEaSERKNS_10PassOwnPtrIS2_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = i1 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i2 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i3 >> 2] = i2;
 if ((i4 | 0) == 0) {
  return i1 | 0;
 }
 i2 = HEAP32[i4 + 64 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i4 + 68 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i5 = 0;
   while (1) {
    i6 = HEAP32[i2 + (i5 << 2) >> 2] | 0;
    i7 = i6;
    do {
     if (!((i7 | 0) == (-1 | 0) | (i7 | 0) == 0)) {
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
    i5 = i5 + 1 | 0;
    if ((i5 | 0) >= (i3 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 __ZN7WebCore9TimerBaseD2Ev(i4 + 8 | 0);
 __ZN3WTF8fastFreeEPv(i4);
 return i1 | 0;
}
function __ZN7WebCore17InspectorDOMAgent13highlightRectEPN3WTF6StringEiiiiPKNS1_6RefPtrIN9Inspector15InspectorObjectEEES9_PKb(i1, i2, i3, i4, i5, i6, i7, i8, i9) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 var i10 = 0, i11 = 0, d12 = +0, d13 = +0, d14 = +0, d15 = +0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i10 = i2 | 0;
 i11 = __Znwj(32) | 0;
 d12 = +(i3 | 0);
 d13 = +(i4 | 0);
 i4 = i11;
 d14 = +d12;
 d15 = +d13;
 HEAPF32[i4 >> 2] = d14;
 HEAPF32[i4 + 4 >> 2] = d15;
 d15 = d12 + +(i5 | 0);
 HEAPF32[i11 + 8 >> 2] = d15;
 HEAPF32[i11 + 12 >> 2] = d13;
 d14 = d13 + +(i6 | 0);
 HEAPF32[i11 + 16 >> 2] = d15;
 HEAPF32[i11 + 20 >> 2] = d14;
 HEAPF32[i11 + 24 >> 2] = d12;
 HEAPF32[i11 + 28 >> 2] = d14;
 i6 = i10 | 0;
 HEAP32[i6 >> 2] = i11;
 __ZN7WebCore17InspectorDOMAgent18innerHighlightQuadEN3WTF10PassOwnPtrINS_9FloatQuadEEEPKNS1_6RefPtrIN9Inspector15InspectorObjectEEESA_PKb(i1, i10, i7, i8, i9);
 i9 = HEAP32[i6 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZdlPv(i9);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore17InspectorDOMAgent5resetEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 220 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore16InspectorHistory5resetEv(i2);
 }
 i2 = i1 + 184 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6VectorINS_6RefPtrIN7WebCore4NodeEEELj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorISA_EENS_10StringHashENS_7HashMapIS1_S9_SD_NS_10HashTraitsIS1_EENSF_IS9_EEE18KeyValuePairTraitsESG_E15deallocateTableEPSA_i(i3, HEAP32[i1 + 188 >> 2] | 0);
  _memset(i2 | 0, 0, 16) | 0;
 }
 __ZN7WebCore17InspectorDOMAgent15discardBindingsEv(i1);
 i2 = HEAP32[i1 + 204 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore9TimerBase4stopEv(i2 + 8 | 0);
 }
 i2 = i1 + 180 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
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
function __ZN7WebCore28RevalidateStyleAttributeTask11scheduleForEPNS_7ElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i6 = i2 + 8 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 }
 __ZN3WTF9HashTableINS_6RefPtrIN7WebCore7ElementEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_(i3 + 8 | 0, i1 + 64 | 0, i4, i4);
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
 if (+HEAPF64[i1 + 16 >> 3] != +0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore9TimerBase5startEdd(i1 + 8 | 0, +0, +0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore17InspectorDOMAgent20frameDocumentUpdatedEPNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = HEAP32[i2 + 456 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 if ((HEAP32[(HEAP32[i2 + 32 >> 2] | 0) + 60 >> 2] | 0) != (i2 | 0)) {
  return;
 }
 i2 = i1 + 180 | 0;
 if ((HEAP32[i2 >> 2] | 0) == (i3 | 0)) {
  return;
 }
 __ZN7WebCore17InspectorDOMAgent5resetEv(i1);
 i4 = i3 + 8 | 0;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i3;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 + 8 | 0;
   i5 = i2 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 if ((HEAP8[i1 + 229 | 0] & 1) == 0) {
  return;
 }
 if ((HEAP8[i3 + 964 | 0] & 1) != 0) {
  return;
 }
 __ZN9Inspector30InspectorDOMFrontendDispatcher15documentUpdatedEv(HEAP32[i1 + 28 >> 2] | 0);
 return;
}
function __ZThn12_N7WebCore17InspectorDOMAgent13getAttributesEPN3WTF6StringEiRNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayIS2_EEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = __ZN7WebCore17InspectorDOMAgent13assertElementEPN3WTF6StringEi(i1 - 232 + 220 | 0, i2, i3) | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore17InspectorDOMAgent30buildArrayForElementAttributesEPNS_7ElementE(i6, 0, i7);
 i7 = i6 | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i7 = i4 | 0;
 i4 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i6;
 if ((i4 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i6 = i4 + 4 | 0;
 i4 = i6 | 0;
 i7 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i7 | 0) != 0) {
  HEAP32[i4 >> 2] = i7;
  STACKTOP = i5;
  return;
 }
 i7 = i6 - 4 | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 63](i7);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore17InspectorDOMAgent13getAttributesEPN3WTF6StringEiRNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayIS2_EEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = __ZN7WebCore17InspectorDOMAgent13assertElementEPN3WTF6StringEi(i1, i2, i3) | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore17InspectorDOMAgent30buildArrayForElementAttributesEPNS_7ElementE(i6, 0, i7);
 i7 = i6 | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i7 = i4 | 0;
 i4 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i6;
 if ((i4 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i6 = i4 + 4 | 0;
 i4 = i6 | 0;
 i7 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i7 | 0) != 0) {
  HEAP32[i4 >> 2] = i7;
  STACKTOP = i5;
  return;
 }
 i7 = i6 - 4 | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 63](i7);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore17InspectorDOMAgent11setDocumentEPNS_8DocumentE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = i1 + 180 | 0;
 if ((HEAP32[i3 >> 2] | 0) == (i2 | 0)) {
  return;
 }
 __ZN7WebCore17InspectorDOMAgent5resetEv(i1);
 i4 = (i2 | 0) == 0;
 if (!i4) {
  i5 = i2 + 8 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i2;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 + 8 | 0;
   i6 = i3 | 0;
   i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i7;
   if ((i7 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 if ((HEAP8[i1 + 229 | 0] & 1) == 0) {
  return;
 }
 do {
  if (!i4) {
   if ((HEAP8[i2 + 964 | 0] & 1) == 0) {
    break;
   }
   return;
  }
 } while (0);
 __ZN9Inspector30InspectorDOMFrontendDispatcher15documentUpdatedEv(HEAP32[i1 + 28 >> 2] | 0);
 return;
}
function __ZN3WTF6VectorINS_6OwnPtrINS_7HashMapINS_6RefPtrIN7WebCore4NodeEEEiNS_7PtrHashIS6_EENS_10HashTraitsIS6_EENS9_IiEEEEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN7WebCore17InspectorDOMAgent19innerChildNodeCountEPNS_4NodeE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 if ((HEAP32[i1 + 12 >> 2] & 2 | 0) == 0) {
  i2 = 0;
 } else {
  i2 = HEAP32[i1 + 36 >> 2] | 0;
 }
 if (__ZN7WebCore17InspectorDOMAgent12isWhitespaceEPNS_4NodeE(i2) | 0) {
  i1 = i2;
  while (1) {
   i3 = HEAP32[i1 + 28 >> 2] | 0;
   if (__ZN7WebCore17InspectorDOMAgent12isWhitespaceEPNS_4NodeE(i3) | 0) {
    i1 = i3;
   } else {
    i4 = i3;
    break;
   }
  }
 } else {
  i4 = i2;
 }
 if ((i4 | 0) == 0) {
  i5 = 0;
  return i5 | 0;
 } else {
  i6 = 0;
  i7 = i4;
 }
 while (1) {
  i4 = i7;
  while (1) {
   i4 = HEAP32[i4 + 28 >> 2] | 0;
   if (!(__ZN7WebCore17InspectorDOMAgent12isWhitespaceEPNS_4NodeE(i4) | 0)) {
    break;
   }
  }
  i2 = i6 + 1 | 0;
  if ((i4 | 0) == 0) {
   i5 = i2;
   break;
  } else {
   i6 = i2;
   i7 = i4;
  }
 }
 return i5 | 0;
}
function __ZN3WTF6VectorINS_6RefPtrIN9Inspector14InspectorValueEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN3WTF6VectorINS_6RefPtrIN7WebCore4NodeEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN3WTF6VectorIPN7WebCore8DocumentELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN7WebCore17InspectorDOMAgent23mouseDidMoveOverElementERKNS_13HitTestResultEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 if ((HEAP8[i1 + 212 | 0] & 1) == 0) {
  return;
 }
 i3 = HEAP32[i2 + 72 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 } else {
  i4 = i3;
 }
 while (1) {
  if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 76 >> 2] & 1](i4) | 0) != 3) {
   break;
  }
  i3 = HEAP32[i4 + 16 >> 2] | 0;
  if ((i3 | 0) == 0) {
   i5 = 8;
   break;
  } else {
   i4 = i3 | 0;
  }
 }
 if ((i5 | 0) == 8) {
  return;
 }
 i5 = HEAP32[i1 + 216 >> 2] | 0;
 if ((i5 | 0) == 0) {
  return;
 }
 __ZN7WebCore16InspectorOverlay13highlightNodeEPNS_4NodeERKNS_15HighlightConfigE(HEAP32[i1 + 24 >> 2] | 0, i4, i5);
 return;
}
function __ZThn12_N7WebCore17InspectorDOMAgent20discardSearchResultsEPN3WTF6StringERKS2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i2 | 0;
 i5 = i1 - 232 + 404 | 0;
 __ZN3WTF7HashMapINS_6StringENS_6VectorINS_6RefPtrIN7WebCore4NodeEEELj0ENS_15CrashOnOverflowEEENS_10StringHashENS_10HashTraitsIS1_EENSA_IS8_EEE4findERKS1_(i4, i5, i3);
 __ZN3WTF7HashMapINS_6StringENS_6VectorINS_6RefPtrIN7WebCore4NodeEEELj0ENS_15CrashOnOverflowEEENS_10StringHashENS_10HashTraitsIS1_EENSA_IS8_EEE6removeENS_24HashTableIteratorAdapterINS_9HashTableIS1_NS_12KeyValuePairIS1_S8_EENS_24KeyValuePairKeyExtractorISH_EES9_NSD_18KeyValuePairTraitsESB_EESH_EE(i5, i4) | 0;
 STACKTOP = i2;
 return;
}
function __ZN7WebCore17InspectorDOMAgent17scriptValueAsNodeEN10Deprecated11ScriptValueE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 if (!(__ZNK10Deprecated11ScriptValue8isObjectEv(i1) | 0)) {
  i4 = 0;
  STACKTOP = i2;
  return i4 | 0;
 }
 if (__ZNK10Deprecated11ScriptValue6isNullEv(i1) | 0) {
  i4 = 0;
  STACKTOP = i2;
  return i4 | 0;
 }
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i3 + 4 >> 2] = -6;
  HEAP32[i3 >> 2] = 0;
 } else {
  i1 = i5 | 0;
  i5 = HEAP32[i1 + 4 >> 2] | 0;
  i6 = i3 | 0;
  HEAP32[i6 >> 2] = HEAP32[i1 >> 2];
  HEAP32[i6 + 4 >> 2] = i5;
 }
 i4 = __ZN7WebCore6toNodeEN3JSC7JSValueE(i3) | 0;
 STACKTOP = i2;
 return i4 | 0;
}
function __ZN7WebCore17InspectorDOMAgent20discardSearchResultsEPN3WTF6StringERKS2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i2 | 0;
 i5 = i1 + 184 | 0;
 __ZN3WTF7HashMapINS_6StringENS_6VectorINS_6RefPtrIN7WebCore4NodeEEELj0ENS_15CrashOnOverflowEEENS_10StringHashENS_10HashTraitsIS1_EENSA_IS8_EEE4findERKS1_(i4, i5, i3);
 __ZN3WTF7HashMapINS_6StringENS_6VectorINS_6RefPtrIN7WebCore4NodeEEELj0ENS_15CrashOnOverflowEEENS_10StringHashENS_10HashTraitsIS1_EENSA_IS8_EEE6removeENS_24HashTableIteratorAdapterINS_9HashTableIS1_NS_12KeyValuePairIS1_S8_EENS_24KeyValuePairKeyExtractorISH_EES9_NSD_18KeyValuePairTraitsESB_EESH_EE(i5, i4) | 0;
 STACKTOP = i2;
 return;
}
function __ZN7WebCore17InspectorDOMAgent9nodeForIdEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 HEAP32[i4 >> 2] = i2;
 if ((i2 | 0) == 0) {
  i6 = 0;
  STACKTOP = i3;
  return i6 | 0;
 }
 i2 = i1 + 92 | 0;
 __ZN3WTF7HashMapIiPN7WebCore4NodeENS_7IntHashIjEENS_10HashTraitsIiEENS6_IS3_EEE4findERKi(i5, i2, i4);
 i4 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) == ((HEAP32[i2 >> 2] | 0) + (HEAP32[i1 + 96 >> 2] << 3) | 0)) {
  i6 = 0;
  STACKTOP = i3;
  return i6 | 0;
 }
 i6 = HEAP32[i4 + 4 >> 2] | 0;
 STACKTOP = i3;
 return i6 | 0;
}
function __ZN7WebCore17InspectorDOMAgent20releaseDanglingNodesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 80 | 0;
 i3 = i1 + 84 | 0;
 if ((HEAP32[i3 >> 2] | 0) == 0) {
  return;
 }
 if ((HEAP32[i1 + 88 >> 2] | 0) != 0) {
  __ZN3WTF6VectorINS_6OwnPtrINS_7HashMapINS_6RefPtrIN7WebCore4NodeEEEiNS_7PtrHashIS6_EENS_10HashTraitsIS6_EENS9_IiEEEEEELj0ENS_15CrashOnOverflowEE6shrinkEj(i2, 0);
 }
 i1 = i2 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i1 >> 2] = 0;
 HEAP32[i3 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
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
function __ZN7WebCore17InspectorDOMAgent15innerFirstChildEPNS_4NodeE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 if ((HEAP32[i1 + 12 >> 2] & 2 | 0) == 0) {
  i2 = 0;
 } else {
  i2 = HEAP32[i1 + 36 >> 2] | 0;
 }
 if (__ZN7WebCore17InspectorDOMAgent12isWhitespaceEPNS_4NodeE(i2) | 0) {
  i3 = i2;
 } else {
  i4 = i2;
  return i4 | 0;
 }
 while (1) {
  i2 = HEAP32[i3 + 28 >> 2] | 0;
  if (__ZN7WebCore17InspectorDOMAgent12isWhitespaceEPNS_4NodeE(i2) | 0) {
   i3 = i2;
  } else {
   i4 = i2;
   break;
  }
 }
 return i4 | 0;
}
function __ZN7WebCore17InspectorDOMAgent16handleTouchEventEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 if ((HEAP8[i1 + 212 | 0] & 1) == 0 | (i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = HEAP32[i1 + 216 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 __ZN7WebCore16InspectorOverlay13highlightNodeEPNS_4NodeERKNS_15HighlightConfigE(HEAP32[i1 + 24 >> 2] | 0, i2, i4);
 __ZN7WebCore17InspectorDOMAgent7inspectEPNS_4NodeE(i1, i2);
 i3 = 1;
 return i3 | 0;
}
function __ZThn12_N7WebCore17InspectorDOMAgent17setAttributeValueEPN3WTF6StringEiRKS2_S5_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0;
 i6 = i1 - 232 + 220 | 0;
 i1 = __ZN7WebCore17InspectorDOMAgent21assertEditableElementEPN3WTF6StringEi(i6, i2, i3) | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 __ZN7WebCore9DOMEditor12setAttributeEPNS_7ElementERKN3WTF6StringES6_PS4_(HEAP32[i6 + 224 >> 2] | 0, i1, i4, i5, i2) | 0;
 return;
}
function __ZThn12_N7WebCore17InspectorDOMAgent11requestNodeEPN3WTF6StringERKS2_Pi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 i2 = i1 - 232 + 220 | 0;
 i1 = __ZN7WebCore17InspectorDOMAgent15nodeForObjectIdERKN3WTF6StringE(i2, i3) | 0;
 if ((i1 | 0) == 0) {
  i5 = 0;
  HEAP32[i4 >> 2] = i5;
  return;
 }
 i5 = __ZN7WebCore17InspectorDOMAgent22pushNodePathToFrontendEPNS_4NodeE(i2, i1) | 0;
 HEAP32[i4 >> 2] = i5;
 return;
}
function __ZN7WebCore5TimerINS_28RevalidateStyleAttributeTaskEE5firedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 48 | 0;
 i3 = (HEAP32[i1 + 44 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] | 0) | 0;
 i4 = i3;
 i5 = HEAP32[i2 >> 2] | 0;
 if ((i5 & 1 | 0) == 0) {
  i6 = i5;
  FUNCTION_TABLE_vii[i6 & 31](i4, i1);
  return;
 } else {
  i6 = HEAP32[(HEAP32[i3 >> 2] | 0) + (i5 - 1) >> 2] | 0;
  FUNCTION_TABLE_vii[i6 & 31](i4, i1);
  return;
 }
}
function __ZThn12_N7WebCore17InspectorDOMAgent13highlightQuadEPN3WTF6StringERKNS1_6RefPtrIN9Inspector14InspectorArrayEEEPKNS4_INS5_15InspectorObjectEEESD_PKb(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 __ZN7WebCore17InspectorDOMAgent13highlightQuadEPN3WTF6StringERKNS1_6RefPtrIN9Inspector14InspectorArrayEEEPKNS4_INS5_15InspectorObjectEEESD_PKb(i1 - 232 + 220 | 0, i2, i3, i4, i5, i6);
 return;
}
function __ZN7WebCore17InspectorDOMAgent13toErrorStringERKi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF6StringC1EPKc(i1, H_BASE + 2432 | 0);
  STACKTOP = i3;
  return;
 } else {
  __ZN7WebCore24ExceptionCodeDescriptionC1Ei(i4, i5);
  __ZN3WTF6StringC1EPKc(i1, HEAP32[i4 + 4 >> 2] | 0);
  STACKTOP = i3;
  return;
 }
}
function __ZThn12_N7WebCore17InspectorDOMAgent24getEventListenersForNodeEPN3WTF6StringEiPKS2_RNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINS8_3DOM13EventListenerEEEEE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZN7WebCore17InspectorDOMAgent24getEventListenersForNodeEPN3WTF6StringEiPKS2_RNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINS8_3DOM13EventListenerEEEEE(i1 - 232 + 220 | 0, i2, i3, i4, i5);
 return;
}
function __ZThn12_N7WebCore17InspectorDOMAgent15removeAttributeEPN3WTF6StringEiRKS2_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 i5 = i1 - 232 + 220 | 0;
 i1 = __ZN7WebCore17InspectorDOMAgent21assertEditableElementEPN3WTF6StringEi(i5, i2, i3) | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 __ZN7WebCore9DOMEditor15removeAttributeEPNS_7ElementERKN3WTF6StringEPS4_(HEAP32[i5 + 224 >> 2] | 0, i1, i4, i2) | 0;
 return;
}
function __ZN7WebCore17InspectorDOMAgent17setAttributeValueEPN3WTF6StringEiRKS2_S5_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0;
 i6 = __ZN7WebCore17InspectorDOMAgent21assertEditableElementEPN3WTF6StringEi(i1, i2, i3) | 0;
 if ((i6 | 0) == 0) {
  return;
 }
 __ZN7WebCore9DOMEditor12setAttributeEPNS_7ElementERKN3WTF6StringES6_PS4_(HEAP32[i1 + 224 >> 2] | 0, i6, i4, i5, i2) | 0;
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
function __ZN7WebCore17InspectorDOMAgent11requestNodeEPN3WTF6StringERKS2_Pi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 i2 = __ZN7WebCore17InspectorDOMAgent15nodeForObjectIdERKN3WTF6StringE(i1, i3) | 0;
 if ((i2 | 0) == 0) {
  i5 = 0;
  HEAP32[i4 >> 2] = i5;
  return;
 }
 i5 = __ZN7WebCore17InspectorDOMAgent22pushNodePathToFrontendEPNS_4NodeE(i1, i2) | 0;
 HEAP32[i4 >> 2] = i5;
 return;
}
function __ZN7WebCore17InspectorDOMAgent15removeAttributeEPN3WTF6StringEiRKS2_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 i5 = __ZN7WebCore17InspectorDOMAgent21assertEditableElementEPN3WTF6StringEi(i1, i2, i3) | 0;
 if ((i5 | 0) == 0) {
  return;
 }
 __ZN7WebCore9DOMEditor15removeAttributeEPNS_7ElementERKN3WTF6StringEPS4_(HEAP32[i1 + 224 >> 2] | 0, i5, i4, i2) | 0;
 return;
}
function __ZN9Inspector18InspectorAgentBaseD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1680;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
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
 __ZdlPv(i1);
 return;
}
function __ZThn12_N7WebCore17InspectorDOMAgent16getSearchResultsEPN3WTF6StringERKS2_iiRNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayIiEEEE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 __ZN7WebCore17InspectorDOMAgent16getSearchResultsEPN3WTF6StringERKS2_iiRNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayIiEEEE(i1 - 232 + 220 | 0, i2, i3, i4, i5, i6);
 return;
}
function __ZN7WebCore18InspectorAgentBaseD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1680;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
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
 __ZdlPv(i1);
 return;
}
function __ZN7WebCore17InspectorDOMAgent17documentURLStringEPNS_8DocumentE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = HEAP32[i2 + 356 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   HEAP32[i1 >> 2] = i3;
   i4 = i3 | 0;
   HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
   return;
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i1, H_BASE + 2432 | 0);
 return;
}
function __ZThn12_N7WebCore17InspectorDOMAgent11resolveNodeEPN3WTF6StringEiPKS2_RNS1_6RefPtrIN9Inspector11TypeBuilder7Runtime12RemoteObjectEEE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZN7WebCore17InspectorDOMAgent11resolveNodeEPN3WTF6StringEiPKS2_RNS1_6RefPtrIN9Inspector11TypeBuilder7Runtime12RemoteObjectEEE(i1 - 232 + 220 | 0, i2, i3, i4, i5);
 return;
}
function __ZThn12_N7WebCore17InspectorDOMAgent13performSearchEPN3WTF6StringERKS2_PKNS1_6RefPtrIN9Inspector14InspectorArrayEEES3_Pi(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 __ZN7WebCore17InspectorDOMAgent13performSearchEPN3WTF6StringERKS2_PKNS1_6RefPtrIN9Inspector14InspectorArrayEEES3_Pi(i1 - 232 + 220 | 0, i2, i3, i4, i5, i6);
 return;
}
function __ZN7WebCore17InspectorDOMAgent16handleMousePressEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 if ((HEAP8[i1 + 212 | 0] & 1) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = __ZNK7WebCore16InspectorOverlay15highlightedNodeEv(HEAP32[i1 + 24 >> 2] | 0) | 0;
 if ((i3 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 __ZN7WebCore17InspectorDOMAgent7inspectEPNS_4NodeE(i1, i3);
 i2 = 1;
 return i2 | 0;
}
function __ZThn12_N7WebCore17InspectorDOMAgent16querySelectorAllEPN3WTF6StringEiRKS2_RNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayIiEEEE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZN7WebCore17InspectorDOMAgent16querySelectorAllEPN3WTF6StringEiRKS2_RNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayIiEEEE(i1 - 232 + 220 | 0, i2, i3, i4, i5);
 return;
}
function __ZThn12_N7WebCore17InspectorDOMAgent14highlightFrameEPN3WTF6StringERKS2_PKNS1_6RefPtrIN9Inspector15InspectorObjectEEESB_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZN7WebCore17InspectorDOMAgent14highlightFrameEPN3WTF6StringERKS2_PKNS1_6RefPtrIN9Inspector15InspectorObjectEEESB_(i1 - 232 + 220 | 0, 0, i3, i4, i5);
 return;
}
function __ZThn12_N7WebCore17InspectorDOMAgent13highlightNodeEPN3WTF6StringERKNS1_6RefPtrIN9Inspector15InspectorObjectEEEPKiPKS2_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZN7WebCore17InspectorDOMAgent13highlightNodeEPN3WTF6StringERKNS1_6RefPtrIN9Inspector15InspectorObjectEEEPKiPKS2_(i1 - 232 + 220 | 0, i2, i3, i4, i5);
 return;
}
function __ZN7WebCore28RevalidateStyleAttributeTaskC2EPNS_17InspectorDOMAgentE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = i2;
 i2 = i1 + 8 | 0;
 __ZN7WebCore9TimerBaseC2Ev(i2);
 HEAP32[i2 >> 2] = H_BASE + 2040;
 HEAP32[i1 + 52 >> 2] = i1;
 i2 = i1 + 56 | 0;
 HEAP32[i2 >> 2] = F_BASE_vii + 16;
 HEAP32[i2 + 4 >> 2] = 0;
 _memset(i1 + 64 | 0, 0, 20) | 0;
 return;
}
function __ZN7WebCore28RevalidateStyleAttributeTaskC1EPNS_17InspectorDOMAgentE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = i2;
 i2 = i1 + 8 | 0;
 __ZN7WebCore9TimerBaseC2Ev(i2);
 HEAP32[i2 >> 2] = H_BASE + 2040;
 HEAP32[i1 + 52 >> 2] = i1;
 i2 = i1 + 56 | 0;
 HEAP32[i2 >> 2] = F_BASE_vii + 16;
 HEAP32[i2 + 4 >> 2] = 0;
 _memset(i1 + 64 | 0, 0, 20) | 0;
 return;
}
function __ZThn12_N7WebCore17InspectorDOMAgent21setInspectModeEnabledEPN3WTF6StringEbPKNS1_6RefPtrIN9Inspector15InspectorObjectEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore17InspectorDOMAgent21setInspectModeEnabledEPN3WTF6StringEbPKNS1_6RefPtrIN9Inspector15InspectorObjectEEE(i1 - 232 + 220 | 0, i2, i3, i4);
 return;
}
function __ZN9Inspector18InspectorAgentBaseD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1680;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
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
function __ZN7WebCore18InspectorAgentBaseD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1680;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
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
function __ZThn12_N7WebCore17InspectorDOMAgent11getDocumentEPN3WTF6StringERNS1_6RefPtrIN9Inspector11TypeBuilder3DOM4NodeEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore17InspectorDOMAgent11getDocumentEPN3WTF6StringERNS1_6RefPtrIN9Inspector11TypeBuilder3DOM4NodeEEE(i1 - 232 + 220 | 0, i2, i3);
 return;
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
 FUNCTION_TABLE_viiiiiiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0, i9 | 0, i10 | 0);
}
function __ZN7WebCore17InspectorDOMAgent15innerParentNodeEPNS_4NodeE(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) == (i1 | 0)) {
  i2 = __ZNK7WebCore8Document12ownerElementEv(i1) | 0;
  return i2 | 0;
 } else {
  i2 = HEAP32[i1 + 16 >> 2] | 0;
  return i2 | 0;
 }
 return 0;
}
function __ZThn12_N7WebCore17InspectorDOMAgent19setAttributesAsTextEPN3WTF6StringEiRKS2_PS4_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZN7WebCore17InspectorDOMAgent19setAttributesAsTextEPN3WTF6StringEiRKS2_PS4_(i1 - 232 + 220 | 0, i2, i3, i4, i5);
 return;
}
function __ZN7WebCore17InspectorDOMAgent25mainFrameDOMContentLoadedEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore17InspectorDOMAgent15discardBindingsEv(i1);
 if ((HEAP8[i1 + 229 | 0] & 1) == 0) {
  return;
 }
 __ZN9Inspector30InspectorDOMFrontendDispatcher15documentUpdatedEv(HEAP32[i1 + 28 >> 2] | 0);
 return;
}
function __ZThn12_N7WebCore17InspectorDOMAgent6moveToEPN3WTF6StringEiiPKiPi(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 __ZN7WebCore17InspectorDOMAgent6moveToEPN3WTF6StringEiiPKiPi(i1 - 232 + 220 | 0, i2, i3, i4, i5, i6);
 return;
}
function __ZThn12_N7WebCore17InspectorDOMAgent29pushNodeByBackendIdToFrontendEPN3WTF6StringEiPi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore17InspectorDOMAgent29pushNodeByBackendIdToFrontendEPN3WTF6StringEiPi(i1 - 232 + 220 | 0, i2, i3, i4);
 return;
}
function __ZThn12_N7WebCore17InspectorDOMAgent13querySelectorEPN3WTF6StringEiRKS2_Pi(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZN7WebCore17InspectorDOMAgent13querySelectorEPN3WTF6StringEiRKS2_Pi(i1 - 232 + 220 | 0, i2, i3, i4, i5);
 return;
}
function __ZThn12_N7WebCore17InspectorDOMAgent24pushNodeByPathToFrontendEPN3WTF6StringERKS2_Pi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore17InspectorDOMAgent24pushNodeByPathToFrontendEPN3WTF6StringERKS2_Pi(i1 - 232 + 220 | 0, i2, i3, i4);
 return;
}
function __ZThn12_N7WebCore17InspectorDOMAgent11setNodeNameEPN3WTF6StringEiRKS2_Pi(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZN7WebCore17InspectorDOMAgent11setNodeNameEPN3WTF6StringEiRKS2_Pi(i1 - 232 + 220 | 0, i2, i3, i4, i5);
 return;
}
function __ZN7WebCore17InspectorDOMAgent20innerPreviousSiblingEPNS_4NodeE(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1;
 while (1) {
  i2 = HEAP32[i2 + 24 >> 2] | 0;
  if (!(__ZN7WebCore17InspectorDOMAgent12isWhitespaceEPNS_4NodeE(i2) | 0)) {
   break;
  }
 }
 return i2 | 0;
}
function __ZThn12_N7WebCore17InspectorDOMAgent17requestChildNodesEPN3WTF6StringEiPKi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore17InspectorDOMAgent17requestChildNodesEPN3WTF6StringEiPKi(i1 - 232 + 220 | 0, i2, i3, i4);
 return;
}
function __ZN7WebCore17InspectorDOMAgent16innerNextSiblingEPNS_4NodeE(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1;
 while (1) {
  i2 = HEAP32[i2 + 28 >> 2] | 0;
  if (!(__ZN7WebCore17InspectorDOMAgent12isWhitespaceEPNS_4NodeE(i2) | 0)) {
   break;
  }
 }
 return i2 | 0;
}
function __ZThn12_N7WebCore17InspectorDOMAgent12setOuterHTMLEPN3WTF6StringEiRKS2_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore17InspectorDOMAgent12setOuterHTMLEPN3WTF6StringEiRKS2_(i1 - 232 + 220 | 0, i2, i3, i4);
 return;
}
function __ZThn12_N7WebCore17InspectorDOMAgent12setNodeValueEPN3WTF6StringEiRKS2_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore17InspectorDOMAgent12setNodeValueEPN3WTF6StringEiRKS2_(i1 - 232 + 220 | 0, i2, i3, i4);
 return;
}
function __ZThn12_N7WebCore17InspectorDOMAgent12getOuterHTMLEPN3WTF6StringEiS3_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore17InspectorDOMAgent12getOuterHTMLEPN3WTF6StringEiS3_(i1 - 232 + 220 | 0, i2, i3, i4);
 return;
}
function __ZThn12_N7WebCore17InspectorDOMAgent21releaseBackendNodeIdsEPN3WTF6StringERKS2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore17InspectorDOMAgent21releaseBackendNodeIdsEPN3WTF6StringERKS2_(i1 - 232 + 220 | 0, i2, i3);
 return;
}
function __ZN7WebCore17InspectorDOMAgent17willModifyDOMAttrEPNS_7ElementERKN3WTF12AtomicStringES6_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 HEAP8[i1 + 228 | 0] = (HEAP32[i3 >> 2] | 0) == (HEAP32[i4 >> 2] | 0) | 0;
 return;
}
function iii___ZN9Inspector18InspectorArrayBase7asArrayEPN3WTF6RefPtrINS_14InspectorArrayEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN9Inspector18InspectorArrayBase7asArrayEPN3WTF6RefPtrINS_14InspectorArrayEEE(i1 | 0, i2 | 0) | 0;
}
function iii___ZN9Inspector14InspectorValue8asObjectEPN3WTF6RefPtrINS_15InspectorObjectEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN9Inspector14InspectorValue8asObjectEPN3WTF6RefPtrINS_15InspectorObjectEEE(i1 | 0, i2 | 0) | 0;
}
function dynCall_viiiiii(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 FUNCTION_TABLE_viiiiii[i1 & 31](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0);
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZThn12_N7WebCore17InspectorDOMAgent10removeNodeEPN3WTF6StringEi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore17InspectorDOMAgent10removeNodeEPN3WTF6StringEi(i1 - 232 + 220 | 0, i2, i3);
 return;
}
function __ZThn12_N7WebCore17InspectorDOMAgent5focusEPN3WTF6StringEi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore17InspectorDOMAgent5focusEPN3WTF6StringEi(i1 - 232 + 220 | 0, i2, i3);
 return;
}
function vii___ZNK9Inspector18InspectorArrayBase9writeJSONEPN3WTF13StringBuilderE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK9Inspector18InspectorArrayBase9writeJSONEPN3WTF13StringBuilderE(i1 | 0, i2 | 0);
}
function __ZThn12_N7WebCore17InspectorDOMAgent17markUndoableStateEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore16InspectorHistory17markUndoableStateEv(HEAP32[i1 - 232 + 440 >> 2] | 0);
 return;
}
function iii___ZN9Inspector14InspectorValue7asValueEPN3WTF6RefPtrIS0_EE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN9Inspector14InspectorValue7asValueEPN3WTF6RefPtrIS0_EE(i1 | 0, i2 | 0) | 0;
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
function __ZThn12_N7WebCore17InspectorDOMAgent13hideHighlightEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore16InspectorOverlay13hideHighlightEv(HEAP32[i1 - 232 + 244 >> 2] | 0);
 return;
}
function __ZN7WebCore17InspectorDOMAgent17markUndoableStateEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore16InspectorHistory17markUndoableStateEv(HEAP32[i1 + 220 >> 2] | 0);
 return;
}
function iii___ZNK9Inspector14InspectorValue8asStringEPN3WTF6StringE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK9Inspector14InspectorValue8asStringEPN3WTF6StringE(i1 | 0, i2 | 0) | 0;
}
function __ZN7WebCore17InspectorDOMAgent13hideHighlightEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore16InspectorOverlay13hideHighlightEv(HEAP32[i1 + 24 >> 2] | 0);
 return;
}
function __ZThn12_N7WebCore17InspectorDOMAgent4undoEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore17InspectorDOMAgent4undoEPN3WTF6StringE(i1 - 232 + 220 | 0, i2);
 return;
}
function __ZThn12_N7WebCore17InspectorDOMAgent4redoEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore17InspectorDOMAgent4redoEPN3WTF6StringE(i1 - 232 + 220 | 0, i2);
 return;
}
function b7(i1, i2, i3, i4, i5, i6, i7, i8, i9) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 abort(7);
}
function iii___ZNK9Inspector14InspectorValue9asBooleanEPb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK9Inspector14InspectorValue9asBooleanEPb(i1 | 0, i2 | 0) | 0;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 63](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function __ZN9Inspector11TypeBuilder5ArrayINS0_3DOM13EventListenerEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN9Inspector18InspectorArrayBaseD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function iii___ZNK9Inspector14InspectorValue8asNumberEPm__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK9Inspector14InspectorValue8asNumberEPm(i1 | 0, i2 | 0) | 0;
}
function iii___ZNK9Inspector14InspectorValue8asNumberEPl__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK9Inspector14InspectorValue8asNumberEPl(i1 | 0, i2 | 0) | 0;
}
function iii___ZNK9Inspector14InspectorValue8asNumberEPj__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK9Inspector14InspectorValue8asNumberEPj(i1 | 0, i2 | 0) | 0;
}
function iii___ZNK9Inspector14InspectorValue8asNumberEPi__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK9Inspector14InspectorValue8asNumberEPi(i1 | 0, i2 | 0) | 0;
}
function iii___ZNK9Inspector14InspectorValue8asNumberEPd__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK9Inspector14InspectorValue8asNumberEPd(i1 | 0, i2 | 0) | 0;
}
function __ZThn12_N7WebCore17InspectorDOMAgentD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 232 + 220 | 0;
 __ZN7WebCore17InspectorDOMAgentD2Ev(i2);
 __ZdlPv(i2);
 return;
}
function vii___ZN9Inspector18InspectorArrayBase7asArrayEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN9Inspector18InspectorArrayBase7asArrayEv(i1 | 0, i2 | 0);
}
function __ZN9Inspector11TypeBuilder5ArrayINS0_3DOM4NodeEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN9Inspector18InspectorArrayBaseD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN9Inspector11TypeBuilder5ArrayIN3WTF6StringEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN9Inspector18InspectorArrayBaseD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function vii___ZN9Inspector14InspectorValue8asObjectEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN9Inspector14InspectorValue8asObjectEv(i1 | 0, i2 | 0);
}
function __ZN7WebCore5TimerINS_28RevalidateStyleAttributeTaskEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBaseD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1 | 0);
 return;
}
function __ZN9Inspector11TypeBuilder5ArrayIiED0Ev(i1) {
 i1 = i1 | 0;
 __ZN9Inspector18InspectorArrayBaseD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore17InspectorDOMAgent14setDOMListenerEPNS0_11DOMListenerE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 + 36 >> 2] = i2;
 return;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 31](i2 | 0, i3 | 0, i4 | 0);
}
function __ZN9Inspector11TypeBuilder5ArrayINS0_3DOM13EventListenerEED1Ev(i1) {
 i1 = i1 | 0;
 __ZN9Inspector18InspectorArrayBaseD2Ev(i1 | 0);
 return;
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function __ZN9Inspector11TypeBuilder5ArrayINS0_3DOM4NodeEED1Ev(i1) {
 i1 = i1 | 0;
 __ZN9Inspector18InspectorArrayBaseD2Ev(i1 | 0);
 return;
}
function __ZN9Inspector11TypeBuilder5ArrayIN3WTF6StringEED1Ev(i1) {
 i1 = i1 | 0;
 __ZN9Inspector18InspectorArrayBaseD2Ev(i1 | 0);
 return;
}
function __ZThn12_N7WebCore17InspectorDOMAgentD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore17InspectorDOMAgentD2Ev(i1 - 232 + 220 | 0);
 return;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 31](i2 | 0, i3 | 0) | 0;
}
function b8(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(8);
}
function __ZN7WebCore5TimerINS_28RevalidateStyleAttributeTaskEED1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBaseD2Ev(i1);
 return;
}
function __ZN7WebCore17InspectorDOMAgentD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore17InspectorDOMAgentD2Ev(i1);
 __ZdlPv(i1);
 return;
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
function __ZN9Inspector11TypeBuilder5ArrayIiED1Ev(i1) {
 i1 = i1 | 0;
 __ZN9Inspector18InspectorArrayBaseD2Ev(i1 | 0);
 return;
}
function setThrew(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((__THREW__ | 0) == 0) {
  __THREW__ = i1;
  threwValue = i2;
 }
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
 FUNCTION_TABLE_vii[i1 & 31](i2 | 0, i3 | 0);
}
function b0(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(0);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function __ZNK7WebCore9TimerBase15alignedFireTimeEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 return +d2;
}
function b10(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(10);
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 63](i2 | 0);
}
function __ZN9Inspector18InspectorAgentBase12discardAgentEv(i1) {
 i1 = i1 | 0;
 return;
}
function b5(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(5);
}
function b9(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(9);
 return 0;
}
function b1(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 abort(1);
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
function b4(i1) {
 i1 = i1 | 0;
 abort(4);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b2(i1) {
 i1 = i1 | 0;
 abort(2);
}
function b6() {
 abort(6);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_viiiii = [b0,b0,__ZN7WebCore17InspectorDOMAgent17setAttributeValueEPN3WTF6StringEiRKS2_S5_,b0,__ZN7WebCore17InspectorDOMAgent14highlightFrameEPN3WTF6StringERKS2_PKNS1_6RefPtrIN9Inspector15InspectorObjectEEESB_,b0,__ZN7WebCore17InspectorDOMAgent11resolveNodeEPN3WTF6StringEiPKS2_RNS1_6RefPtrIN9Inspector11TypeBuilder7Runtime12RemoteObjectEEE,b0,__ZThn12_N7WebCore17InspectorDOMAgent11resolveNodeEPN3WTF6StringEiPKS2_RNS1_6RefPtrIN9Inspector11TypeBuilder7Runtime12RemoteObjectEEE,b0,__ZThn12_N7WebCore17InspectorDOMAgent14highlightFrameEPN3WTF6StringERKS2_PKNS1_6RefPtrIN9Inspector15InspectorObjectEEESB_,b0,__ZThn12_N7WebCore17InspectorDOMAgent16querySelectorAllEPN3WTF6StringEiRKS2_RNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayIiEEEE,b0,__ZThn12_N7WebCore17InspectorDOMAgent17setAttributeValueEPN3WTF6StringEiRKS2_S5_,b0,__ZN7WebCore17InspectorDOMAgent13querySelectorEPN3WTF6StringEiRKS2_Pi,b0,__ZN7WebCore17InspectorDOMAgent13highlightNodeEPN3WTF6StringERKNS1_6RefPtrIN9Inspector15InspectorObjectEEEPKiPKS2_,b0,__ZN7WebCore17InspectorDOMAgentC2EPNS_19InstrumentingAgentsEPNS_18InspectorPageAgentEPN9Inspector21InjectedScriptManagerEPNS_16InspectorOverlayE,b0,__ZN7WebCore17InspectorDOMAgent24getEventListenersForNodeEPN3WTF6StringEiPKS2_RNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINS8_3DOM13EventListenerEEEEE,b0,__ZN7WebCore17InspectorDOMAgent11setNodeNameEPN3WTF6StringEiRKS2_Pi,b0,__ZThn12_N7WebCore17InspectorDOMAgent19setAttributesAsTextEPN3WTF6StringEiRKS2_PS4_,b0,__ZThn12_N7WebCore17InspectorDOMAgent11setNodeNameEPN3WTF6StringEiRKS2_Pi
  ,b0,__ZN7WebCore17InspectorDOMAgent16querySelectorAllEPN3WTF6StringEiRKS2_RNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayIiEEEE,b0,__ZThn12_N7WebCore17InspectorDOMAgent13querySelectorEPN3WTF6StringEiRKS2_Pi,b0,__ZThn12_N7WebCore17InspectorDOMAgent24getEventListenersForNodeEPN3WTF6StringEiPKS2_RNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINS8_3DOM13EventListenerEEEEE,b0,__ZThn12_N7WebCore17InspectorDOMAgent13highlightNodeEPN3WTF6StringERKNS1_6RefPtrIN9Inspector15InspectorObjectEEEPKiPKS2_,b0,__ZN7WebCore17InspectorDOMAgent19setAttributesAsTextEPN3WTF6StringEiRKS2_PS4_,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
  ,b0,b0,b0,b0,b0];
  var FUNCTION_TABLE_did = [b1,b1,__ZNK7WebCore9TimerBase15alignedFireTimeEd,b1];
  var FUNCTION_TABLE_vi = [b2,b2,__ZN7WebCore17InspectorDOMAgentD2Ev,b2,__ZN9Inspector18InspectorAgentBase12discardAgentEv,b2,__ZN9Inspector11TypeBuilder5ArrayIiED1Ev,b2,__ZN9Inspector11TypeBuilder5ArrayIN3WTF6StringEED0Ev,b2,__ZN7WebCore5TimerINS_28RevalidateStyleAttributeTaskEED0Ev,b2,__ZN9Inspector11TypeBuilder5ArrayIN3WTF6StringEED1Ev,b2,__ZThn12_N7WebCore17InspectorDOMAgentD0Ev,b2,__ZN9Inspector18InspectorAgentBaseD1Ev,b2,__ZN7WebCore17InspectorDOMAgentD0Ev,b2,__ZN9Inspector11TypeBuilder5ArrayINS0_3DOM13EventListenerEED1Ev,b2,__ZThn12_N7WebCore17InspectorDOMAgentD1Ev,b2,__ZN9Inspector11TypeBuilder5ArrayINS0_3DOM4NodeEED1Ev,b2,__ZN7WebCore5TimerINS_28RevalidateStyleAttributeTaskEE5firedEv,b2,__ZN7WebCore18InspectorAgentBaseD0Ev
  ,b2,__ZN7WebCore17InspectorDOMAgent29willDestroyFrontendAndBackendEv,b2,__ZN9Inspector11TypeBuilder5ArrayINS0_3DOM13EventListenerEED0Ev,b2,__ZN7WebCore5TimerINS_28RevalidateStyleAttributeTaskEED1Ev,b2,__ZN9Inspector11TypeBuilder5ArrayINS0_3DOM4NodeEED0Ev,b2,__ZN9Inspector18InspectorAgentBaseD0Ev,b2,__ZN7WebCore18InspectorAgentBaseD1Ev,b2,__ZN9Inspector11TypeBuilder5ArrayIiED0Ev,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2
  ,b2,b2,b2,b2,b2];
  var FUNCTION_TABLE_vii = [b3,b3,__ZN7WebCore28RevalidateStyleAttributeTaskC2EPNS_17InspectorDOMAgentE,b3,__ZN7WebCore17InspectorDOMAgent13hideHighlightEPN3WTF6StringE,b3,__ZThn12_N7WebCore17InspectorDOMAgent17markUndoableStateEPN3WTF6StringE,b3,vii___ZN9Inspector14InspectorValue8asObjectEv__wrapper,b3,__ZN7WebCore17InspectorDOMAgent17markUndoableStateEPN3WTF6StringE,b3,vii___ZNK9Inspector18InspectorArrayBase9writeJSONEPN3WTF13StringBuilderE__wrapper,b3,__ZThn12_N7WebCore17InspectorDOMAgent13hideHighlightEPN3WTF6StringE,b3,__ZN7WebCore28RevalidateStyleAttributeTask7onTimerEPNS_5TimerIS0_EE,b3,__ZN7WebCore17InspectorDOMAgent4redoEPN3WTF6StringE,b3,vii___ZN9Inspector18InspectorArrayBase7asArrayEv__wrapper,b3,__ZN7WebCore17InspectorDOMAgent4undoEPN3WTF6StringE,b3,__ZThn12_N7WebCore17InspectorDOMAgent4undoEPN3WTF6StringE,b3,__ZThn12_N7WebCore17InspectorDOMAgent4redoEPN3WTF6StringE,b3,b3
  ,b3,b3,b3];
  var FUNCTION_TABLE_ii = [b4,b4];
  var FUNCTION_TABLE_viii = [b5,b5,__ZN7WebCore17InspectorDOMAgent20discardSearchResultsEPN3WTF6StringERKS2_,b5,__ZThn12_N7WebCore17InspectorDOMAgent11getDocumentEPN3WTF6StringERNS1_6RefPtrIN9Inspector11TypeBuilder3DOM4NodeEEE,b5,__ZN7WebCore17InspectorDOMAgent21releaseBackendNodeIdsEPN3WTF6StringERKS2_,b5,__ZN7WebCore17InspectorDOMAgent10removeNodeEPN3WTF6StringEi,b5,__ZThn12_N7WebCore17InspectorDOMAgent5focusEPN3WTF6StringEi,b5,__ZN7WebCore17InspectorDOMAgent11getDocumentEPN3WTF6StringERNS1_6RefPtrIN9Inspector11TypeBuilder3DOM4NodeEEE,b5,__ZThn12_N7WebCore17InspectorDOMAgent20discardSearchResultsEPN3WTF6StringERKS2_,b5,__ZThn12_N7WebCore17InspectorDOMAgent10removeNodeEPN3WTF6StringEi,b5,__ZN7WebCore17InspectorDOMAgent5focusEPN3WTF6StringEi,b5,__ZThn12_N7WebCore17InspectorDOMAgent21releaseBackendNodeIdsEPN3WTF6StringERKS2_,b5,__ZN7WebCore17InspectorDOMAgent27didCreateFrontendAndBackendEPN9Inspector24InspectorFrontendChannelEPNS1_26InspectorBackendDispatcherE,b5,b5,b5,b5,b5,b5
  ,b5,b5,b5];
  var FUNCTION_TABLE_v = [b6,b6,v____cxa_pure_virtual__wrapper,b6];
  var FUNCTION_TABLE_viiiiiiiii = [b7,b7,__ZN7WebCore17InspectorDOMAgent13highlightRectEPN3WTF6StringEiiiiPKNS1_6RefPtrIN9Inspector15InspectorObjectEEES9_PKb,b7,__ZThn12_N7WebCore17InspectorDOMAgent13highlightRectEPN3WTF6StringEiiiiPKNS1_6RefPtrIN9Inspector15InspectorObjectEEES9_PKb,b7,b7,b7];
  var FUNCTION_TABLE_viiiiii = [b8,b8,__ZThn12_N7WebCore17InspectorDOMAgent13highlightQuadEPN3WTF6StringERKNS1_6RefPtrIN9Inspector14InspectorArrayEEEPKNS4_INS5_15InspectorObjectEEESD_PKb,b8,__ZN7WebCore17InspectorDOMAgent16getSearchResultsEPN3WTF6StringERKS2_iiRNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayIiEEEE,b8,__ZThn12_N7WebCore17InspectorDOMAgent16getSearchResultsEPN3WTF6StringERKS2_iiRNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayIiEEEE,b8,__ZN7WebCore17InspectorDOMAgent13highlightQuadEPN3WTF6StringERKNS1_6RefPtrIN9Inspector14InspectorArrayEEEPKNS4_INS5_15InspectorObjectEEESD_PKb,b8,__ZN7WebCore17InspectorDOMAgent6moveToEPN3WTF6StringEiiPKiPi,b8,__ZN7WebCore17InspectorDOMAgent13performSearchEPN3WTF6StringERKS2_PKNS1_6RefPtrIN9Inspector14InspectorArrayEEES3_Pi,b8,__ZThn12_N7WebCore17InspectorDOMAgent13performSearchEPN3WTF6StringERKS2_PKNS1_6RefPtrIN9Inspector14InspectorArrayEEES3_Pi,b8,__ZThn12_N7WebCore17InspectorDOMAgent6moveToEPN3WTF6StringEiiPKiPi,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8
  ,b8,b8,b8];
  var FUNCTION_TABLE_iii = [b9,b9,iii___ZNK9Inspector14InspectorValue8asNumberEPj__wrapper,b9,iii___ZNK9Inspector14InspectorValue8asNumberEPi__wrapper,b9,iii___ZNK9Inspector14InspectorValue8asNumberEPm__wrapper,b9,iii___ZNK9Inspector14InspectorValue8asNumberEPl__wrapper,b9,iii___ZNK9Inspector14InspectorValue8asNumberEPd__wrapper,b9,iii___ZN9Inspector18InspectorArrayBase7asArrayEPN3WTF6RefPtrINS_14InspectorArrayEEE__wrapper,b9,iii___ZN9Inspector14InspectorValue8asObjectEPN3WTF6RefPtrINS_15InspectorObjectEEE__wrapper,b9,iii___ZNK9Inspector14InspectorValue8asStringEPN3WTF6StringE__wrapper,b9,iii___ZNK9Inspector14InspectorValue9asBooleanEPb__wrapper,b9,iii___ZN9Inspector14InspectorValue7asValueEPN3WTF6RefPtrIS0_EE__wrapper,b9,b9,b9,b9,b9,b9,b9,b9
  ,b9,b9,b9];
  var FUNCTION_TABLE_viiii = [b10,b10,__ZThn12_N7WebCore17InspectorDOMAgent11requestNodeEPN3WTF6StringERKS2_Pi,b10,__ZN7WebCore17InspectorDOMAgent12getOuterHTMLEPN3WTF6StringEiS3_,b10,__ZN7WebCore17InspectorDOMAgent12setNodeValueEPN3WTF6StringEiRKS2_,b10,__ZN7WebCore17InspectorDOMAgent29pushNodeByBackendIdToFrontendEPN3WTF6StringEiPi,b10,__ZThn12_N7WebCore17InspectorDOMAgent12getOuterHTMLEPN3WTF6StringEiS3_,b10,__ZThn12_N7WebCore17InspectorDOMAgent29pushNodeByBackendIdToFrontendEPN3WTF6StringEiPi,b10,__ZThn12_N7WebCore17InspectorDOMAgent13getAttributesEPN3WTF6StringEiRNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayIS2_EEEE,b10,__ZN7WebCore17InspectorDOMAgent17requestChildNodesEPN3WTF6StringEiPKi,b10,__ZN7WebCore17InspectorDOMAgent11requestNodeEPN3WTF6StringERKS2_Pi,b10,__ZN7WebCore17InspectorDOMAgent12setOuterHTMLEPN3WTF6StringEiRKS2_,b10,__ZThn12_N7WebCore17InspectorDOMAgent15removeAttributeEPN3WTF6StringEiRKS2_,b10,__ZThn12_N7WebCore17InspectorDOMAgent24pushNodeByPathToFrontendEPN3WTF6StringERKS2_Pi,b10,__ZN7WebCore17InspectorDOMAgent15removeAttributeEPN3WTF6StringEiRKS2_,b10,__ZN7WebCore17InspectorDOMAgent13getAttributesEPN3WTF6StringEiRNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayIS2_EEEE
  ,b10,__ZN7WebCore17InspectorDOMAgent24pushNodeByPathToFrontendEPN3WTF6StringERKS2_Pi,b10,__ZN7WebCore17InspectorDOMAgent21setInspectModeEnabledEPN3WTF6StringEbPKNS1_6RefPtrIN9Inspector15InspectorObjectEEE,b10,__ZThn12_N7WebCore17InspectorDOMAgent12setOuterHTMLEPN3WTF6StringEiRKS2_,b10,__ZThn12_N7WebCore17InspectorDOMAgent17requestChildNodesEPN3WTF6StringEiPKi,b10,__ZThn12_N7WebCore17InspectorDOMAgent12setNodeValueEPN3WTF6StringEiRKS2_,b10,__ZThn12_N7WebCore17InspectorDOMAgent21setInspectModeEnabledEPN3WTF6StringEbPKNS1_6RefPtrIN9Inspector15InspectorObjectEEE,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10
  ,b10,b10,b10,b10,b10];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_did: dynCall_did, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_viiiiiiiii: dynCall_viiiiiiiii, dynCall_viiiiii: dynCall_viiiiii, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_did": invoke_did, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_viiiiiiiii": invoke_viiiiiiiii, "invoke_viiiiii": invoke_viiiiii, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___cxa_pure_virtual": ___cxa_pure_virtual, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames11templateTagE": __ZN7WebCore9HTMLNames11templateTagE, "__ZN7WebCore9HTMLNames7spanTagE": __ZN7WebCore9HTMLNames7spanTagE, "__ZN3JSC10JSFunction6s_infoE": __ZN3JSC10JSFunction6s_infoE, "__ZTVN10Deprecated11ScriptValueE": __ZTVN10Deprecated11ScriptValueE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_did = Module["dynCall_did"] = asm["dynCall_did"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_viiiiiiiii = Module["dynCall_viiiiiiiii"] = asm["dynCall_viiiiiiiii"];
var dynCall_viiiiii = Module["dynCall_viiiiii"] = asm["dynCall_viiiiii"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZThn12_N7WebCore17InspectorDOMAgent4undoEPN3WTF6StringE","__ZN7WebCore17InspectorDOMAgent16handleMousePressEv","__ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN3WTF7HashSetIiNS_7IntHashIjEENS_10HashTraitsIiEEE6removeERKi","__ZN7WebCore17InspectorDOMAgent17setAttributeValueEPN3WTF6StringEiRKS2_S5_","__ZN7WebCore17InspectorDOMAgent11nodeForPathERKN3WTF6StringE","__ZN7WebCore17InspectorDOMAgent14assertDocumentEPN3WTF6StringEi","__ZN7WebCore17InspectorDOMAgent14highlightFrameEPN3WTF6StringERKS2_PKNS1_6RefPtrIN9Inspector15InspectorObjectEEESB_","_strlen","__ZN7WebCore17InspectorDOMAgent11resolveNodeEPN3WTF6StringEiPKS2_RNS1_6RefPtrIN9Inspector11TypeBuilder7Runtime12RemoteObjectEEE","__ZN7WebCore28RevalidateStyleAttributeTaskC2EPNS_17InspectorDOMAgentE","__ZN7WebCore17InspectorDOMAgentD2Ev","__ZThn12_N7WebCore17InspectorDOMAgent11resolveNodeEPN3WTF6StringEiPKS2_RNS1_6RefPtrIN9Inspector11TypeBuilder7Runtime12RemoteObjectEEE","__ZN3WTF9HashTableIiNS_12KeyValuePairIiNSt3__14pairIPN7WebCore4NodeENS_6StringEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7IntHashIjEENS_7HashMapIiS8_SD_NS_10HashTraitsIiEENSF_IS8_EEE18KeyValuePairTraitsESG_E3addINS_17HashMapTranslatorISJ_SD_EERKiS8_EENS_18HashTableAddResultINS_17HashTableIteratorIiS9_SB_SD_SJ_SG_EEEEOT0_OT1_","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6VectorINS_6RefPtrIN7WebCore4NodeEEELj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorISA_EENS_10StringHashENS_7HashMapIS1_S9_SD_NS_10HashTraitsIS1_EENSF_IS9_EEE18KeyValuePairTraitsESG_E8reinsertEOSA_","__ZN7WebCore17InspectorDOMAgent4bindEPNS_4NodeEPN3WTF7HashMapINS3_6RefPtrIS1_EEiNS3_7PtrHashIS6_EENS3_10HashTraitsIS6_EENS9_IiEEEE","__ZN9Inspector18InspectorAgentBase12discardAgentEv","__ZThn12_N7WebCore17InspectorDOMAgent11requestNodeEPN3WTF6StringERKS2_Pi","__ZN3WTF13tryMakeStringINS_12StringAppendIPKcNS_6StringEEES3_EENS_10PassRefPtrINS_10StringImplEEET_T0_","__ZThn12_N7WebCore17InspectorDOMAgent14highlightFrameEPN3WTF6StringERKS2_PKNS1_6RefPtrIN9Inspector15InspectorObjectEEESB_","__ZThn12_N7WebCore17InspectorDOMAgent16querySelectorAllEPN3WTF6StringEiRKS2_RNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayIiEEEE","__ZN7WebCore17InspectorDOMAgent19setSearchingForNodeEPN3WTF6StringEbPN9Inspector15InspectorObjectE","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6VectorINS_6RefPtrIN7WebCore4NodeEEELj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorISA_EENS_10StringHashENS_7HashMapIS1_S9_SD_NS_10HashTraitsIS1_EENSF_IS9_EEE18KeyValuePairTraitsESG_E12deleteBucketERSA_","__ZN7WebCore17InspectorDOMAgent27buildObjectForEventListenerERKNS_23RegisteredEventListenerERKN3WTF12AtomicStringEPNS_4NodeEPKNS4_6StringE","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6VectorINS_6RefPtrIN7WebCore4NodeEEELj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorISA_EENS_10StringHashENS_7HashMapIS1_S9_SD_NS_10HashTraitsIS1_EENSF_IS9_EEE18KeyValuePairTraitsESG_E3addINS_17HashMapTranslatorISJ_SD_EERKS1_S9_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_SA_SC_SD_SJ_SG_EEEEOT0_OT1_","__ZN3WTF9HashTableINS_6RefPtrIN7WebCore7ElementEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6rehashEiPS4_","__ZThn12_N7WebCore17InspectorDOMAgent13highlightQuadEPN3WTF6StringERKNS1_6RefPtrIN9Inspector14InspectorArrayEEEPKNS4_INS5_15InspectorObjectEEESD_PKb","_memcpy","__ZN3WTF7HashMapINS_6StringENS_6VectorINS_6RefPtrIN7WebCore4NodeEEELj0ENS_15CrashOnOverflowEEENS_10StringHashENS_10HashTraitsIS1_EENSA_IS8_EEE4findERKS1_","__ZN7WebCoreL10parseColorEPKN3WTF6RefPtrIN9Inspector15InspectorObjectEEE","__ZN3WTF9HashTableINS_6RefPtrIN7WebCore7ElementEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E8reinsertEOS4_","__ZN7WebCore17InspectorDOMAgent15discardBindingsEv","__ZN7WebCore17InspectorDOMAgent20releaseDanglingNodesEv","__ZThn12_N7WebCore17InspectorDOMAgent17setAttributeValueEPN3WTF6StringEiRKS2_S5_","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RNS_10PassRefPtrIS5_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_","__ZN7WebCore17InspectorDOMAgent12getOuterHTMLEPN3WTF6StringEiS3_","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_7HashMapINS_6RefPtrIN7WebCore4NodeEEEiNS_7PtrHashIS7_EENS_10HashTraitsIS7_EENSA_IiEEEEEENS_24KeyValuePairKeyExtractorISE_EENS_10StringHashENS3_IS1_SD_SH_NSA_IS1_EENSA_ISD_EEE18KeyValuePairTraitsESI_E8reinsertEOSE_","__ZN3WTF6VectorIN7WebCore17EventListenerInfoELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_","__ZN3WTF7HashMapIiPN7WebCore4NodeENS_7IntHashIjEENS_10HashTraitsIiEENS6_IS3_EEE4findERKi","__ZN7WebCore17InspectorDOMAgent17nodeAsScriptValueEPN3JSC9ExecStateEPNS_4NodeE","__ZN9Inspector11TypeBuilder5ArrayIiED1Ev","__ZN7WebCore17InspectorDOMAgent12setNodeValueEPN3WTF6StringEiRKS2_","__ZN7WebCore17InspectorDOMAgent13hideHighlightEPN3WTF6StringE","__ZThn12_N7WebCore17InspectorDOMAgent17markUndoableStateEPN3WTF6StringE","__ZN7WebCore17InspectorDOMAgent18pushNodeToFrontendEPN3WTF6StringEiPNS_4NodeE","__ZN7WebCore17InspectorDOMAgent11resolveNodeEPNS_4NodeERKN3WTF6StringE","__ZN7WebCore17InspectorDOMAgent13highlightNodeEPN3WTF6StringERKNS1_6RefPtrIN9Inspector15InspectorObjectEEEPKiPKS2_","__ZN3JSC6StrongINS_7UnknownEEC2ERKS2_","__ZN7WebCore17InspectorDOMAgentC2EPNS_19InstrumentingAgentsEPNS_18InspectorPageAgentEPN9Inspector21InjectedScriptManagerEPNS_16InspectorOverlayE","__ZN7WebCore17InspectorDOMAgent20discardSearchResultsEPN3WTF6StringERKS2_","__ZN7WebCore17InspectorDOMAgent24getEventListenersForNodeEPN3WTF6StringEiPKS2_RNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINS8_3DOM13EventListenerEEEEE","__ZThn12_N7WebCore17InspectorDOMAgent11getDocumentEPN3WTF6StringERNS1_6RefPtrIN9Inspector11TypeBuilder3DOM4NodeEEE","__ZN7WebCore17InspectorDOMAgent5focusEPN3WTF6StringEi","__ZThn12_N7WebCore17InspectorDOMAgent19setAttributesAsTextEPN3WTF6StringEiRKS2_PS4_","__ZN9Inspector18InspectorAgentBaseD0Ev","__ZN7WebCore17InspectorDOMAgent16getSearchResultsEPN3WTF6StringERKS2_iiRNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayIiEEEE","__ZN7WebCore17InspectorDOMAgent24pushNodeByPathToFrontendEPN3WTF6StringERKS2_Pi","__ZN7WebCore17InspectorDOMAgent21releaseBackendNodeIdsEPN3WTF6StringERKS2_","__ZThn12_N7WebCore17InspectorDOMAgent11setNodeNameEPN3WTF6StringEiRKS2_Pi","__ZN3WTF9HashTableINS_6RefPtrIN7WebCore4NodeEEENS_12KeyValuePairIS4_iEENS_24KeyValuePairKeyExtractorIS6_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSC_IiEEEESD_E6rehashEiPS6_","__ZN7WebCore17InspectorDOMAgent16innerNextSiblingEPNS_4NodeE","__ZN7WebCore17InspectorDOMAgent16didModifyDOMAttrEPNS_7ElementERKN3WTF12AtomicStringES6_","__ZN7WebCore17InspectorDOMAgent17markUndoableStateEPN3WTF6StringE","__ZN7WebCore17InspectorDOMAgent15innerParentNodeEPNS_4NodeE","__ZN9Inspector11TypeBuilder5ArrayIN3WTF6StringEED0Ev","__ZN7WebCore17InspectorDOMAgent16didInsertDOMNodeEPNS_4NodeE","__ZN7WebCore17InspectorDOMAgent17getEventListenersEPNS_4NodeERN3WTF6VectorINS_17EventListenerInfoELj0ENS3_15CrashOnOverflowEEEb","__ZN7WebCore17InspectorDOMAgent14setDOMListenerEPNS0_11DOMListenerE","__ZThn12_N7WebCore17InspectorDOMAgent16getSearchResultsEPN3WTF6StringERKS2_iiRNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayIiEEEE","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_7HashMapINS_6RefPtrIN7WebCore4NodeEEEiNS_7PtrHashIS7_EENS_10HashTraitsIS7_EENSA_IiEEEEEENS_24KeyValuePairKeyExtractorISE_EENS_10StringHashENS3_IS1_SD_SH_NSA_IS1_EENSA_ISD_EEE18KeyValuePairTraitsESI_E3addINS_17HashMapTranslatorISL_SH_EERKS1_SD_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_SE_SG_SH_SL_SI_EEEEOT0_OT1_","__ZN7WebCore17InspectorDOMAgent16querySelectorAllEPN3WTF6StringEiRKS2_RNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayIiEEEE","__ZN3WTF9HashTableIiNS_12KeyValuePairIiNSt3__14pairIPN7WebCore4NodeENS_6StringEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7IntHashIjEENS_7HashMapIiS8_SD_NS_10HashTraitsIiEENSF_IS8_EEE18KeyValuePairTraitsESG_E6rehashEiPS9_","__ZN7WebCore17InspectorDOMAgent17scriptValueAsNodeEN10Deprecated11ScriptValueE","__ZN7WebCore17InspectorDOMAgent25styleAttributeInvalidatedERKN3WTF6VectorIPNS_7ElementELj0ENS1_15CrashOnOverflowEEE","__ZN3WTF9HashTableIiNS_12KeyValuePairIiPNS_7HashMapINS_6RefPtrIN7WebCore4NodeEEEiNS_7PtrHashIS6_EENS_10HashTraitsIS6_EENS9_IiEEEEEENS_24KeyValuePairKeyExtractorISE_EENS_7IntHashIjEENS2_IiSD_SI_SB_NS9_ISD_EEE18KeyValuePairTraitsESB_E6expandEPSE_","__ZN7WebCore17InspectorDOMAgent29pushNodeByBackendIdToFrontendEPN3WTF6StringEiPi","__ZN3WTF6VectorIN7WebCore17EventListenerInfoELj0ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZThn12_N7WebCore17InspectorDOMAgent12getOuterHTMLEPN3WTF6StringEiS3_","__ZN7WebCore17InspectorDOMAgent16didRemoveDOMAttrEPNS_7ElementERKN3WTF12AtomicStringE","__ZThn12_N7WebCore17InspectorDOMAgentD0Ev","__ZN7WebCore17InspectorDOMAgent13highlightQuadEPN3WTF6StringERKNS1_6RefPtrIN9Inspector14InspectorArrayEEEPKNS4_INS5_15InspectorObjectEEESD_PKb","__ZThn12_N7WebCore17InspectorDOMAgent13querySelectorEPN3WTF6StringEiRKS2_Pi","__ZThn12_N7WebCore17InspectorDOMAgent21releaseBackendNodeIdsEPN3WTF6StringERKS2_","__ZN7WebCore17InspectorDOMAgent6moveToEPN3WTF6StringEiiPKiPi","__ZN3WTF6VectorINS_6RefPtrIN7WebCore4NodeEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN9Inspector18InspectorAgentBaseD1Ev","__ZN7WebCore17InspectorDOMAgent18innerHighlightQuadEN3WTF10PassOwnPtrINS_9FloatQuadEEEPKNS1_6RefPtrIN9Inspector15InspectorObjectEEESA_PKb","__ZN7WebCore5TimerINS_28RevalidateStyleAttributeTaskEED0Ev","__ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE","__ZN3WTF6VectorINS_6RefPtrIN9Inspector14InspectorValueEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore17InspectorDOMAgent10removeNodeEPN3WTF6StringEi","__ZN7WebCore17InspectorDOMAgent17didPushShadowRootEPNS_7ElementEPNS_10ShadowRootE","__ZN7WebCore17InspectorDOMAgent9nodeForIdEi","__ZN3WTF9HashTableINS_6RefPtrIN7WebCore4NodeEEENS_12KeyValuePairIS4_iEENS_24KeyValuePairKeyExtractorIS6_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSC_IiEEEESD_E3addINS_22IdentityHashTranslatorISA_EERKS4_RKS6_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S6_S8_SA_SF_SD_EEEEOT0_OT1_","__ZN7WebCore17InspectorDOMAgent13performSearchEPN3WTF6StringERKS2_PKNS1_6RefPtrIN9Inspector14InspectorArrayEEES3_Pi","__ZThn12_N7WebCore17InspectorDOMAgent29pushNodeByBackendIdToFrontendEPN3WTF6StringEiPi","__ZN7WebCore17InspectorDOMAgent20innerPreviousSiblingEPNS_4NodeE","__ZN7WebCore17InspectorDOMAgent24pushChildNodesToFrontendEii","__ZN3WTF6VectorIN7WebCore23RegisteredEventListenerELj1ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZThn12_N7WebCore17InspectorDOMAgent13getAttributesEPN3WTF6StringEiRNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayIS2_EEEE","__ZN7WebCore17InspectorDOMAgent21characterDataModifiedEPNS_13CharacterDataE","__ZThn12_N7WebCore17InspectorDOMAgent5focusEPN3WTF6StringEi","__ZN7WebCore17InspectorDOMAgent17requestChildNodesEPN3WTF6StringEiPKi","__ZN7WebCore17InspectorDOMAgent11requestNodeEPN3WTF6StringERKS2_Pi","__ZN7WebCore17InspectorDOMAgent16handleTouchEventEPNS_4NodeE","__ZN3WTF22KeyValuePairHashTraitsINS_10HashTraitsINS_6StringEEENS1_INS_7HashMapINS_6RefPtrIN7WebCore4NodeEEEiNS_7PtrHashIS8_EENS1_IS8_EENS1_IiEEEEEEE10emptyValueEv","__ZN7WebCore17InspectorDOMAgent19innerChildNodeCountEPNS_4NodeE","__ZN7WebCore28RevalidateStyleAttributeTask11scheduleForEPNS_7ElementE","__ZN3WTF7HashMapINS_6StringENS_6VectorINS_6RefPtrIN7WebCore4NodeEEELj0ENS_15CrashOnOverflowEEENS_10StringHashENS_10HashTraitsIS1_EENSA_IS8_EEE6removeENS_24HashTableIteratorAdapterINS_9HashTableIS1_NS_12KeyValuePairIS1_S8_EENS_24KeyValuePairKeyExtractorISH_EES9_NSD_18KeyValuePairTraitsESB_EESH_EE","__ZN3WTF6VectorINS_6OwnPtrINS_7HashMapINS_6RefPtrIN7WebCore4NodeEEEiNS_7PtrHashIS6_EENS_10HashTraitsIS6_EENS9_IiEEEEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN9Inspector11TypeBuilder5ArrayIiED0Ev","__ZN7WebCore17InspectorDOMAgent15innerFirstChildEPNS_4NodeE","__ZN7WebCore17InspectorDOMAgent11getDocumentEPN3WTF6StringERNS1_6RefPtrIN9Inspector11TypeBuilder3DOM4NodeEEE","__ZThn12_N7WebCore17InspectorDOMAgent24getEventListenersForNodeEPN3WTF6StringEiPKS2_RNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINS8_3DOM13EventListenerEEEEE","__ZN3WTF9HashTableIiiNS_17IdentityExtractorENS_7IntHashIjEENS_10HashTraitsIiEES5_E3addINS_22IdentityHashTranslatorIS3_EERKiiEENS_18HashTableAddResultINS_17HashTableIteratorIiiS1_S3_S5_S5_EEEEOT0_OT1_","__ZN9Inspector11TypeBuilder5ArrayINS0_3DOM13EventListenerEED1Ev","__ZN7WebCore17InspectorDOMAgent21setInspectModeEnabledEPN3WTF6StringEbPKNS1_6RefPtrIN9Inspector15InspectorObjectEEE","__ZThn12_N7WebCore17InspectorDOMAgentD1Ev","__ZN7WebCore17InspectorDOMAgent20frameDocumentUpdatedEPNS_5FrameE","__ZN7WebCore17InspectorDOMAgent10assertNodeEPN3WTF6StringEi","__ZN7WebCore17InspectorDOMAgent9documentsEv","__ZN7WebCore17InspectorDOMAgent12setOuterHTMLEPN3WTF6StringEiRKS2_","__ZN7WebCore17InspectorDOMAgent15nodeForObjectIdERKN3WTF6StringE","__ZThn12_N7WebCore17InspectorDOMAgent13hideHighlightEPN3WTF6StringE","__ZN9Inspector11TypeBuilder5ArrayIN3WTF6StringEED1Ev","__ZN9Inspector11TypeBuilder5ArrayINS0_3DOM4NodeEED1Ev","__ZN7WebCore17InspectorDOMAgent21assertEditableElementEPN3WTF6StringEi","__ZN3WTF7HashMapINS_6StringENS0_INS_6RefPtrIN7WebCore4NodeEEEiNS_7PtrHashIS5_EENS_10HashTraitsIS5_EENS8_IiEEEENS_10StringHashENS8_IS1_EENS8_ISB_EEE4findERKS1_","__ZN3WTF26HashTableBucketInitializerILb0EE10initializeINS_7HashMapINS_6StringENS3_INS_6RefPtrIN7WebCore4NodeEEEiNS_7PtrHashIS8_EENS_10HashTraitsIS8_EENSB_IiEEEENS_10StringHashENSB_IS4_EENSB_ISE_EEE18KeyValuePairTraitsENS_12KeyValuePairIS4_SE_EEEEvRT0_","__ZN7WebCore17InspectorDOMAgent34highlightConfigFromInspectorObjectEPN3WTF6StringEPN9Inspector15InspectorObjectE","__ZN7WebCore17InspectorDOMAgent16didRemoveDOMNodeEPNS_4NodeE","__ZThn12_N7WebCore17InspectorDOMAgent20discardSearchResultsEPN3WTF6StringERKS2_","__ZN7WebCore17InspectorDOMAgent30buildArrayForElementAttributesEPNS_7ElementE","__ZN3WTF6VectorINS_6OwnPtrINS_7HashMapINS_6RefPtrIN7WebCore4NodeEEEiNS_7PtrHashIS6_EENS_10HashTraitsIS6_EENS9_IiEEEEEELj0ENS_15CrashOnOverflowEE6shrinkEj","__ZN7WebCore5TimerINS_28RevalidateStyleAttributeTaskEE5firedEv","__ZN7WebCore28RevalidateStyleAttributeTask7onTimerEPNS_5TimerIS0_EE","__ZNK3WTF7HashMapIiNSt3__14pairIPN7WebCore4NodeENS_6StringEEENS_7IntHashIjEENS_10HashTraitsIiEENSA_IS7_EEE3getERKi","__ZN7WebCore17InspectorDOMAgent22didInvalidateStyleAttrEPNS_4NodeE","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6VectorINS_6RefPtrIN7WebCore4NodeEEELj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorISA_EENS_10StringHashENS_7HashMapIS1_S9_SD_NS_10HashTraitsIS1_EENSF_IS9_EEE18KeyValuePairTraitsESG_E15deallocateTableEPSA_i","__ZThn12_N7WebCore17InspectorDOMAgent10removeNodeEPN3WTF6StringEi","__ZThn12_N7WebCore17InspectorDOMAgent15removeAttributeEPN3WTF6StringEiRKS2_","__ZN7WebCore17InspectorDOMAgent4redoEPN3WTF6StringE","__ZN7WebCore17InspectorDOMAgent13getAttributesEPN3WTF6StringEiRNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayIS2_EEEE","__ZN3WTF9HashTableINS_6RefPtrIN7WebCore4NodeEEENS_12KeyValuePairIS4_iEENS_24KeyValuePairKeyExtractorIS6_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSC_IiEEEESD_E3addINS_17HashMapTranslatorISF_SA_EERPS3_RiEENS_18HashTableAddResultINS_17HashTableIteratorIS4_S6_S8_SA_SF_SD_EEEEOT0_OT1_","__ZThn12_N7WebCore17InspectorDOMAgent13performSearchEPN3WTF6StringERKS2_PKNS1_6RefPtrIN9Inspector14InspectorArrayEEES3_Pi","__ZThn12_N7WebCore17InspectorDOMAgent24pushNodeByPathToFrontendEPN3WTF6StringERKS2_Pi","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_7HashMapINS_6RefPtrIN7WebCore4NodeEEEiNS_7PtrHashIS7_EENS_10HashTraitsIS7_EENSA_IiEEEEEENS_24KeyValuePairKeyExtractorISE_EENS_10StringHashENS3_IS1_SD_SH_NSA_IS1_EENSA_ISD_EEE18KeyValuePairTraitsESI_E15deallocateTableEPSE_i","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6expandEPS7_","__ZN7WebCore17InspectorDOMAgent25mainFrameDOMContentLoadedEv","__ZN7WebCore17InspectorDOMAgent9focusNodeEv","__ZN7WebCore17InspectorDOMAgent13assertElementEPN3WTF6StringEi","__ZN7WebCore18InspectorAgentBaseD0Ev","__ZN7WebCore17InspectorDOMAgent23mouseDidMoveOverElementERKNS_13HitTestResultEj","__ZN7WebCore17InspectorDOMAgent13querySelectorEPN3WTF6StringEiRKS2_Pi","__ZN7WebCore17InspectorDOMAgent11boundNodeIdEPNS_4NodeE","__ZN7WebCore17InspectorDOMAgent15removeAttributeEPN3WTF6StringEiRKS2_","__ZN7WebCore17InspectorDOMAgent11setNodeNameEPN3WTF6StringEiRKS2_Pi","__ZN3WTF9HashTableIiNS_12KeyValuePairIiPN7WebCore4NodeEEENS_24KeyValuePairKeyExtractorIS5_EENS_7IntHashIjEENS_7HashMapIiS4_S9_NS_10HashTraitsIiEENSB_IS4_EEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKiRS4_EENS_18HashTableAddResultINS_17HashTableIteratorIiS5_S7_S9_SF_SC_EEEEOT0_OT1_","__ZN3WTF6OwnPtrIN7WebCore28RevalidateStyleAttributeTaskEEaSERKNS_10PassOwnPtrIS2_EE","__ZN7WebCore17InspectorDOMAgent13toErrorStringERKi","__ZN3WTF9HashTableIiNS_12KeyValuePairIiPN7WebCore4NodeEEENS_24KeyValuePairKeyExtractorIS5_EENS_7IntHashIjEENS_7HashMapIiS4_S9_NS_10HashTraitsIiEENSB_IS4_EEE18KeyValuePairTraitsESC_E6rehashEiPS5_","__ZN7WebCore17InspectorDOMAgent5resetEv","__ZN3WTF7HashMapINS_6RefPtrIN7WebCore4NodeEEEiNS_7PtrHashIS4_EENS_10HashTraitsIS4_EENS7_IiEEE6removeEPS3_","__ZThn12_N7WebCore17InspectorDOMAgent12setOuterHTMLEPN3WTF6StringEiRKS2_","__ZN7WebCore5TimerINS_28RevalidateStyleAttributeTaskEED1Ev","__ZN7WebCore17InspectorDOMAgent29willDestroyFrontendAndBackendEv","__ZThn12_N7WebCore17InspectorDOMAgent13highlightNodeEPN3WTF6StringERKNS1_6RefPtrIN9Inspector15InspectorObjectEEEPKiPKS2_","__ZN9Inspector11TypeBuilder5ArrayINS0_3DOM13EventListenerEED0Ev","__ZN7WebCore17InspectorDOMAgent4undoEPN3WTF6StringE","__ZN3WTF9HashTableIiiNS_17IdentityExtractorENS_7IntHashIjEENS_10HashTraitsIiEES5_E6rehashEiPi","__ZN3WTF9HashTableINS_6RefPtrIN7WebCore4NodeEEENS_12KeyValuePairIS4_iEENS_24KeyValuePairKeyExtractorIS6_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSC_IiEEEESD_EaSERKSG_","__ZN3WTF7HashMapIiNSt3__14pairIPN7WebCore4NodeENS_6StringEEENS_7IntHashIjEENS_10HashTraitsIiEENSA_IS7_EEE6removeERKi","__ZN3WTF7HashMapINS_6StringENS0_INS_6RefPtrIN7WebCore4NodeEEEiNS_7PtrHashIS5_EENS_10HashTraitsIS5_EENS8_IiEEEENS_10StringHashENS8_IS1_EENS8_ISB_EEE6removeENS_24HashTableIteratorAdapterINS_9HashTableIS1_NS_12KeyValuePairIS1_SB_EENS_24KeyValuePairKeyExtractorISJ_EESC_NSF_18KeyValuePairTraitsESD_EESJ_EE","__ZN7WebCore17InspectorDOMAgent18assertEditableNodeEPN3WTF6StringEi","__ZThn12_N7WebCore17InspectorDOMAgent6moveToEPN3WTF6StringEiiPKiPi","__ZN9Inspector11TypeBuilder5ArrayINS0_3DOM4NodeEED0Ev","__ZN3WTF9HashTableIiNS_12KeyValuePairIiPNS_7HashMapINS_6RefPtrIN7WebCore4NodeEEEiNS_7PtrHashIS6_EENS_10HashTraitsIS6_EENS9_IiEEEEEENS_24KeyValuePairKeyExtractorISE_EENS_7IntHashIjEENS2_IiSD_SI_SB_NS9_ISD_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISL_SI_EERKiRSD_EENS_18HashTableAddResultINS_17HashTableIteratorIiSE_SG_SI_SL_SB_EEEEOT0_OT1_","__ZN3WTF9HashTableINS_6RefPtrIN7WebCore7ElementEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_","__ZN7WebCore17InspectorDOMAgent13didCommitLoadEPNS_8DocumentE","__ZN7WebCore17InspectorDOMAgent13highlightRectEPN3WTF6StringEiiiiPKNS1_6RefPtrIN9Inspector15InspectorObjectEEES9_PKb","__ZN7WebCore17InspectorDOMAgent18buildObjectForNodeEPNS_4NodeEiPN3WTF7HashMapINS3_6RefPtrIS1_EEiNS3_7PtrHashIS6_EENS3_10HashTraitsIS6_EENS9_IiEEEE","__ZThn12_N7WebCore17InspectorDOMAgent17requestChildNodesEPN3WTF6StringEiPKi","__ZN7WebCore17InspectorDOMAgent17willPopShadowRootEPNS_7ElementEPNS_10ShadowRootE","__ZN7WebCore17InspectorDOMAgent17willModifyDOMAttrEPNS_7ElementERKN3WTF12AtomicStringES6_","__ZThn12_N7WebCore17InspectorDOMAgent12setNodeValueEPN3WTF6StringEiRKS2_","__ZN7WebCore18InspectorAgentBaseD1Ev","__ZN7WebCore17InspectorDOMAgent12isWhitespaceEPNS_4NodeE","__ZN7WebCore17InspectorDOMAgent19setAttributesAsTextEPN3WTF6StringEiRKS2_PS4_","__ZN3WTF6VectorIPN7WebCore8DocumentELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZNK7WebCore15JSEventListener10jsFunctionEPNS_22ScriptExecutionContextE","__ZN3WTF15CrashOnOverflow10overflowedEv","_memset","__ZN7WebCore17InspectorDOMAgent20backendNodeIdForNodeEPNS_4NodeERKN3WTF6StringE","__ZN7WebCore17InspectorDOMAgent27didCreateFrontendAndBackendEPN9Inspector24InspectorFrontendChannelEPNS1_26InspectorBackendDispatcherE","__ZN7WebCore17InspectorDOMAgentD0Ev","__ZN7WebCore17InspectorDOMAgent22pushNodePathToFrontendEPNS_4NodeE","__ZThn12_N7WebCore17InspectorDOMAgent13highlightRectEPN3WTF6StringEiiiiPKNS1_6RefPtrIN9Inspector15InspectorObjectEEES9_PKb","__ZN7WebCore17InspectorDOMAgent17documentURLStringEPNS_8DocumentE","__ZThn12_N7WebCore17InspectorDOMAgent4redoEPN3WTF6StringE","__ZN7WebCore19InspectorNodeFinderD2Ev","__ZThn12_N7WebCore17InspectorDOMAgent21setInspectModeEnabledEPN3WTF6StringEbPKNS1_6RefPtrIN9Inspector15InspectorObjectEEE","__ZNK7WebCore9TimerBase15alignedFireTimeEd","__ZN7WebCore17InspectorDOMAgent30buildArrayForContainerChildrenEPNS_4NodeEiPN3WTF7HashMapINS3_6RefPtrIS1_EEiNS3_7PtrHashIS6_EENS3_10HashTraitsIS6_EENS9_IiEEEE","__ZN7WebCore17InspectorDOMAgent6unbindEPNS_4NodeEPN3WTF7HashMapINS3_6RefPtrIS1_EEiNS3_7PtrHashIS6_EENS3_10HashTraitsIS6_EENS9_IiEEEE","__ZN7WebCore17InspectorDOMAgent11setDocumentEPNS_8DocumentE","__ZN7WebCore17InspectorDOMAgent7inspectEPNS_4NodeE"]

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
H_BASE = parentModule["_malloc"](1952 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 1952;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore9DOMWindowC1EPNS_8DocumentE;
var __ZN7WebCore9DOMWindowD1Ev;
/* memory initializer */ allocate([85,115,101,32,111,102,32,119,105,110,100,111,119,46,112,114,111,109,112,116,32,105,115,32,110,111,116,32,97,108,108,111,119,101,100,32,100,117,114,105,110,103,32,98,101,102,111,114,101,117,110,108,111,97,100,32,101,118,101,110,116,32,100,105,115,112,97,116,99,104,46,0,85,115,101,32,111,102,32,119,105,110,100,111,119,46,99,111,110,102,105,114,109,32,105,115,32,110,111,116,32,97,108,108,111,119,101,100,32,100,117,114,105,110,103,32,98,101,102,111,114,101,117,110,108,111,97,100,32,101,118,101,110,116,32,100,105,115,112,97,116,99,104,46,0,0,0,0,0,0,0,0,85,115,101,32,111,102,32,119,105,110,100,111,119,46,97,108,101,114,116,32,105,115,32,110,111,116,32,97,108,108,111,119,101,100,32,100,117,114,105,110,103,32,98,101,102,111,114,101,117,110,108,111,97,100,32,101,118,101,110,116,32,100,105,115,112,97,116,99,104,46,0,0,85,115,101,32,111,102,32,119,105,110,100,111,119,46,112,114,105,110,116,32,105,115,32,110,111,116,32,97,108,108,111,119,101,100,32,100,117,114,105,110,103,32,98,101,102,111,114,101,117,110,108,111,97,100,32,101,118,101,110,116,32,100,105,115,112,97,116,99,104,46,0,0,67,97,110,39,116,32,99,108,111,115,101,32,116,104,101,32,119,105,110,100,111,119,32,115,105,110,99,101,32,105,116,32,119,97,115,32,110,111,116,32,111,112,101,110,101,100,32,98,121,32,74,97,118,97,83,99,114,105,112,116,0,0,0,0,46,10,0,0,0,0,0,0,71,69,84,0,0,0,0,0,82,101,102,101,114,101,114,0,85,115,101,32,111,102,32,119,105,110,100,111,119,46,115,104,111,119,77,111,100,97,108,68,105,97,108,111,103,32,105,115,32,110,111,116,32,97,108,108,111,119,101,100,32,100,117,114,105,110,103,32,98,101,102,111,114,101,117,110,108,111,97,100,32,101,118,101,110,116,32,100,105,115,112,97,116,99,104,46,0,0,0,0,0,0,0,0,95,112,97,114,101,110,116,0,95,116,111,112,0,0,0,0,39,46,10,0,0,0,0,0,46,32,82,101,99,105,112,105,101,110,116,32,104,97,115,32,111,114,105,103,105,110,32,0,85,110,97,98,108,101,32,116,111,32,111,112,101,110,32,97,32,119,105,110,100,111,119,32,119,105,116,104,32,105,110,118,97,108,105,100,32,85,82,76,32,39,0,0,0,0,0,0,80,114,111,116,111,99,111,108,115,44,32,100,111,109,97,105,110,115,44,32,97,110,100,32,112,111,114,116,115,32,109,117,115,116,32,109,97,116,99,104,46,0,0,0,0,0,0,0,34,44,32,98,117,116,32,116,104,101,32,102,114,97,109,101,32,114,101,113,117,101,115,116,105,110,103,32,97,99,99,101,115,115,32,100,105,100,32,110,111,116,46,32,66,111,116,104,32,109,117,115,116,32,115,101,116,32,34,100,111,99,117,109,101,110,116,46,100,111,109,97,105,110,34,32,116,111,32,116,104,101,32,115,97,109,101,32,118,97,108,117,101,32,116,111,32,97,108,108,111,119,32,97,99,99,101,115,115,46,0,0,84,104,101,32,102,114,97,109,101,32,98,101,105,110,103,32,97,99,99,101,115,115,101,100,32,115,101,116,32,34,100,111,99,117,109,101,110,116,46,100,111,109,97,105,110,34,32,116,111,32,34,0,0,0,0,0,34,44,32,98,117,116,32,116,104,101,32,102,114,97,109,101,32,98,101,105,110,103,32,97,99,99,101,115,115,101,100,32,100,105,100,32,110,111,116,46,32,66,111,116,104,32,109,117,115,116,32,115,101,116,32,34,100,111,99,117,109,101,110,116,46,100,111,109,97,105,110,34,32,116,111,32,116,104,101,32,115,97,109,101,32,118,97,108,117,101,32,116,111,32,97,108,108,111,119,32,97,99,99,101,115,115,46,0,0,0,0,0,34,46,32,66,111,116,104,32,109,117,115,116,32,115,101,116,32,34,100,111,99,117,109,101,110,116,46,100,111,109,97,105,110,34,32,116,111,32,116,104,101,32,115,97,109,101,32,118,97,108,117,101,32,116,111,32,97,108,108,111,119,32,97,99,99,101,115,115,46,0,0,0,34,44,32,116,104,101,32,102,114,97,109,101,32,98,101,105,110,103,32,97,99,99,101,115,115,101,100,32,115,101,116,32,105,116,32,116,111,32,34,0,84,104,101,32,102,114,97,109,101,32,114,101,113,117,101,115,116,105,110,103,32,97,99,99,101,115,115,32,115,101,116,32,34,100,111,99,117,109,101,110,116,46,100,111,109,97,105,110,34,32,116,111,32,34,0,0,34,46,32,80,114,111,116,111,99,111,108,115,32,109,117,115,116,32,109,97,116,99,104,46,10,0,0,0,0,0,0,0,34,44,32,116,104,101,32,102,114,97,109,101,32,98,101,105,110,103,32,97,99,99,101,115,115,101,100,32,104,97,115,32,97,32,112,114,111,116,111,99,111,108,32,111,102,32,34,0,85,110,97,98,108,101,32,116,111,32,112,111,115,116,32,109,101,115,115,97,103,101,32,116,111,32,0,0,0,0,0,0,32,84,104,101,32,102,114,97,109,101,32,114,101,113,117,101,115,116,105,110,103,32,97,99,99,101,115,115,32,104,97,115,32,97,32,112,114,111,116,111,99,111,108,32,111,102,32,34,0,0,0,0,0,0,0,0,32,84,104,101,32,102,114,97,109,101,32,114,101,113,117,101,115,116,105,110,103,32,97,99,99,101,115,115,32,105,115,32,115,97,110,100,98,111,120,101,100,32,97,110,100,32,108,97,99,107,115,32,116,104,101,32,34,97,108,108,111,119,45,115,97,109,101,45,111,114,105,103,105,110,34,32,102,108,97,103,46,0,0,0,0,0,0,0,32,84,104,101,32,102,114,97,109,101,32,98,101,105,110,103,32,97,99,99,101,115,115,101,100,32,105,115,32,115,97,110,100,98,111,120,101,100,32,97,110,100,32,108,97,99,107,115,32,116,104,101,32,34,97,108,108,111,119,45,115,97,109,101,45,111,114,105,103,105,110,34,32,102,108,97,103,46,0,0,32,66,111,116,104,32,102,114,97,109,101,115,32,97,114,101,32,115,97,110,100,98,111,120,101,100,32,97,110,100,32,108,97,99,107,32,116,104,101,32,34,97,108,108,111,119,45,115,97,109,101,45,111,114,105,103,105,110,34,32,102,108,97,103,46,0,0,0,0,0,0,0,83,97,110,100,98,111,120,32,97,99,99,101,115,115,32,118,105,111,108,97,116,105,111,110,58,32,0,0,0,0,0,0,34,32,102,114,111,109,32,97,99,99,101,115,115,105,110,103,32,97,32,102,114,97,109,101,32,97,116,32,34,0,0,0,66,108,111,99,107,101,100,32,97,32,102,114,97,109,101,32,97,116,32,34,0,0,0,0,34,46,32,0,0,0,0,0,34,32,102,114,111,109,32,97,99,99,101,115,115,105,110,103,32,97,32,102,114,97,109,101,32,119,105,116,104,32,111,114,105,103,105,110,32,34,0,0,66,108,111,99,107,101,100,32,97,32,102,114,97,109,101,32,119,105,116,104,32,111,114,105,103,105,110,32,34,0,0,0,42,0,0,0,0,0,0,0,47,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,216,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,208,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_iii(index,a1,a2) {
  try {
    return Module["dynCall_iii"](index,a1,a2);
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
  var __ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE=env.__ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE|0;
  var __ZN3WTF10StringImpl19latin1CaseFoldTableE=env.__ZN3WTF10StringImpl19latin1CaseFoldTableE|0;
  var __ZN3WTF9emptyAtomE=env.__ZN3WTF9emptyAtomE|0;
  var __ZN7WebCore24InspectorInstrumentation17s_frontendCounterE=env.__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore25EventTargetWithInlineDataE=(H_BASE+1816)|0;
  var __ZTVN7WebCore16PostMessageTimerE=(H_BASE+1896)|0;
  var __ZTVN7WebCore9DOMWindowE=(H_BASE+1680)|0;
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
  var invoke_iiiii=env.invoke_iiiii;
  var invoke_did=env.invoke_did;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
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
function __ZN7WebCore9DOMWindow29crossDomainAccessErrorMessageERKS0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 456 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i4 + 56 | 0;
 i13 = i4 + 64 | 0;
 i14 = i4 + 72 | 0;
 i15 = i4 + 96 | 0;
 i16 = i4 + 104 | 0;
 i17 = i4 + 112 | 0;
 i18 = i4 + 160 | 0;
 i19 = i4 + 208 | 0;
 i20 = i4 + 216 | 0;
 i21 = i4 + 240 | 0;
 i22 = i4 + 248 | 0;
 i23 = i4 + 256 | 0;
 i24 = i4 + 264 | 0;
 i25 = i4 + 272 | 0;
 i26 = i4 + 296 | 0;
 i27 = i4 + 320 | 0;
 i28 = i4 + 336 | 0;
 i29 = i4 + 344 | 0;
 i30 = i4 + 352 | 0;
 i31 = i4 + 376 | 0;
 i32 = i4 + 400 | 0;
 i33 = i4 + 416 | 0;
 i34 = i4 + 424 | 0;
 i35 = i4 + 440 | 0;
 i36 = i3 + 44 | 0;
 i3 = (HEAP32[i36 >> 2] | 0) - 156 + 68 | 0;
 if ((HEAP32[i3 + 356 >> 2] | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 i37 = HEAP32[i3 + 100 >> 2] | 0;
 i3 = i2 + 44 | 0;
 i2 = HEAP32[(HEAP32[i3 >> 2] | 0) - 156 + 168 >> 2] | 0;
 __ZNK7WebCore14SecurityOrigin8toStringEv(i15, i37);
 i38 = i15 | 0;
 i15 = HEAP32[i38 >> 2] | 0;
 if ((i15 | 0) == 0) {
  __ZNK7WebCore14SecurityOrigin8toStringEv(i16, i2);
  i39 = 0;
  i40 = 1;
 } else {
  i41 = i15 | 0;
  i42 = HEAP32[i41 >> 2] | 0;
  i43 = i42 + 2 | 0;
  HEAP32[i41 >> 2] = i42 + 4;
  if ((i43 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i15);
   i44 = HEAP32[i41 >> 2] | 0;
  } else {
   HEAP32[i41 >> 2] = i43;
   i44 = i43;
  }
  i43 = i44 + 2 | 0;
  HEAP32[i41 >> 2] = i44 + 4;
  if ((i43 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i15);
   __ZNK7WebCore14SecurityOrigin8toStringEv(i16, i2);
  } else {
   HEAP32[i41 >> 2] = i43;
   __ZNK7WebCore14SecurityOrigin8toStringEv(i16, i2);
  }
  HEAP32[i41 >> 2] = (HEAP32[i41 >> 2] | 0) + 2;
  i39 = i15;
  i40 = 0;
 }
 i15 = i16 | 0;
 i16 = HEAP32[i15 >> 2] | 0;
 i41 = (i16 | 0) == 0;
 if (!i41) {
  i43 = i16 | 0;
  HEAP32[i43 >> 2] = (HEAP32[i43 >> 2] | 0) + 2;
 }
 if (!i40) {
  i43 = i39 | 0;
  HEAP32[i43 >> 2] = (HEAP32[i43 >> 2] | 0) + 2;
 }
 do {
  if (!i41) {
   i43 = i16 | 0;
   i44 = HEAP32[i43 >> 2] | 0;
   HEAP32[i43 >> 2] = i44 + 2;
   if ((i44 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i16);
    break;
   } else {
    HEAP32[i43 >> 2] = i44;
    break;
   }
  }
 } while (0);
 if (!i40) {
  i44 = i39 | 0;
  i43 = (HEAP32[i44 >> 2] | 0) - 2 | 0;
  if ((i43 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i39);
   i45 = HEAP32[i44 >> 2] | 0;
  } else {
   HEAP32[i44 >> 2] = i43;
   i45 = i43;
  }
  HEAP32[i44 >> 2] = i45 + 2;
 }
 if (!i41) {
  i45 = i16 | 0;
  HEAP32[i45 >> 2] = (HEAP32[i45 >> 2] | 0) + 2;
 }
 HEAP32[i14 >> 2] = H_BASE + 1616;
 i45 = i14 + 4 | 0;
 HEAP32[i45 >> 2] = i39;
 if (!i40) {
  i44 = i39 | 0;
  HEAP32[i44 >> 2] = (HEAP32[i44 >> 2] | 0) + 2;
 }
 HEAP32[i14 + 8 >> 2] = H_BASE + 1576;
 i44 = i14 + 12 | 0;
 HEAP32[i44 >> 2] = i16;
 do {
  if (i41) {
   HEAP32[i14 + 16 >> 2] = H_BASE + 1568;
  } else {
   i43 = i16 | 0;
   i42 = HEAP32[i43 >> 2] | 0;
   HEAP32[i43 >> 2] = i42 + 2;
   HEAP32[i14 + 16 >> 2] = H_BASE + 1568;
   if ((i42 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i16);
    break;
   } else {
    HEAP32[i43 >> 2] = i42;
    break;
   }
  }
 } while (0);
 do {
  if (!i40) {
   i42 = i39 | 0;
   i43 = (HEAP32[i42 >> 2] | 0) - 2 | 0;
   if ((i43 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i39);
    break;
   } else {
    HEAP32[i42 >> 2] = i43;
    break;
   }
  }
 } while (0);
 __ZNK3WTF12StringAppendINS0_INS0_INS0_IPKcNS_6StringEEES2_EES3_EES2_EcvS3_Ev(i13, i14);
 i14 = HEAP32[i44 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i44 = i14 | 0;
   i43 = (HEAP32[i44 >> 2] | 0) - 2 | 0;
   if ((i43 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    break;
   } else {
    HEAP32[i44 >> 2] = i43;
    break;
   }
  }
 } while (0);
 i14 = HEAP32[i45 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i45 = i14 | 0;
   i43 = (HEAP32[i45 >> 2] | 0) - 2 | 0;
   if ((i43 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    break;
   } else {
    HEAP32[i45 >> 2] = i43;
    break;
   }
  }
 } while (0);
 do {
  if (!i41) {
   i14 = i16 | 0;
   i43 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i43 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i16);
    break;
   } else {
    HEAP32[i14 >> 2] = i43;
    break;
   }
  }
 } while (0);
 do {
  if (!i40) {
   i16 = i39 | 0;
   i41 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
   if ((i41 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i39);
    break;
   } else {
    HEAP32[i16 >> 2] = i41;
    break;
   }
  }
 } while (0);
 i41 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i41 | 0) != 0) {
   i15 = i41 | 0;
   i16 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i41);
    break;
   } else {
    HEAP32[i15 >> 2] = i16;
    break;
   }
  }
 } while (0);
 do {
  if (!i40) {
   i41 = i39 | 0;
   i16 = (HEAP32[i41 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i39);
   } else {
    HEAP32[i41 >> 2] = i16;
   }
   i16 = (HEAP32[i41 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i39);
    break;
   } else {
    HEAP32[i41 >> 2] = i16;
    break;
   }
  }
 } while (0);
 i39 = HEAP32[i38 >> 2] | 0;
 do {
  if ((i39 | 0) != 0) {
   i38 = i39 | 0;
   i40 = (HEAP32[i38 >> 2] | 0) - 2 | 0;
   if ((i40 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i39);
    break;
   } else {
    HEAP32[i38 >> 2] = i40;
    break;
   }
  }
 } while (0);
 i39 = (HEAP32[i36 >> 2] | 0) - 156 + 68 | 0;
 i40 = i17 | 0;
 i38 = HEAP32[i39 + 356 >> 2] | 0;
 HEAP32[i40 >> 2] = i38;
 if ((i38 | 0) != 0) {
  i16 = i38 | 0;
  HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
 }
 i16 = i39 + 360 | 0;
 i38 = i17 + 4 | 0;
 i41 = HEAP8[i38] & -2 | HEAP8[i16] & 1;
 HEAP8[i38] = i41;
 HEAP8[i38] = i41 & -3 | HEAP8[i16] & 2;
 HEAP32[i17 + 8 >> 2] = HEAP32[i39 + 364 >> 2];
 HEAP32[i17 + 12 >> 2] = HEAP32[i39 + 368 >> 2];
 HEAP32[i17 + 16 >> 2] = HEAP32[i39 + 372 >> 2];
 HEAP32[i17 + 20 >> 2] = HEAP32[i39 + 376 >> 2];
 HEAP32[i17 + 24 >> 2] = HEAP32[i39 + 380 >> 2];
 HEAP32[i17 + 28 >> 2] = HEAP32[i39 + 384 >> 2];
 HEAP32[i17 + 32 >> 2] = HEAP32[i39 + 388 >> 2];
 HEAP32[i17 + 36 >> 2] = HEAP32[i39 + 392 >> 2];
 HEAP32[i17 + 40 >> 2] = HEAP32[i39 + 396 >> 2];
 HEAP32[i17 + 44 >> 2] = HEAP32[i39 + 400 >> 2];
 i39 = HEAP32[i3 >> 2] | 0;
 i16 = i39 - 156 + 68 | 0;
 i41 = i18 | 0;
 i38 = HEAP32[i16 + 356 >> 2] | 0;
 HEAP32[i41 >> 2] = i38;
 if ((i38 | 0) == 0) {
  i46 = i39;
 } else {
  i39 = i38 | 0;
  HEAP32[i39 >> 2] = (HEAP32[i39 >> 2] | 0) + 2;
  i46 = HEAP32[i3 >> 2] | 0;
 }
 i39 = i16 + 360 | 0;
 i38 = i18 + 4 | 0;
 i15 = HEAP8[i38] & -2 | HEAP8[i39] & 1;
 HEAP8[i38] = i15;
 HEAP8[i38] = i15 & -3 | HEAP8[i39] & 2;
 HEAP32[i18 + 8 >> 2] = HEAP32[i16 + 364 >> 2];
 HEAP32[i18 + 12 >> 2] = HEAP32[i16 + 368 >> 2];
 HEAP32[i18 + 16 >> 2] = HEAP32[i16 + 372 >> 2];
 HEAP32[i18 + 20 >> 2] = HEAP32[i16 + 376 >> 2];
 HEAP32[i18 + 24 >> 2] = HEAP32[i16 + 380 >> 2];
 HEAP32[i18 + 28 >> 2] = HEAP32[i16 + 384 >> 2];
 HEAP32[i18 + 32 >> 2] = HEAP32[i16 + 388 >> 2];
 HEAP32[i18 + 36 >> 2] = HEAP32[i16 + 392 >> 2];
 HEAP32[i18 + 40 >> 2] = HEAP32[i16 + 396 >> 2];
 HEAP32[i18 + 44 >> 2] = HEAP32[i16 + 400 >> 2];
 L107 : do {
  if ((HEAP32[i46 - 156 + 164 >> 2] & 4 | 0) == 0) {
   if ((HEAP32[(HEAP32[i36 >> 2] | 0) - 156 + 164 >> 2] & 4 | 0) != 0) {
    i47 = 75;
    break;
   }
   i16 = HEAP32[i2 + 4 >> 2] | 0;
   i39 = (i16 | 0) == 0;
   if (!i39) {
    i15 = i16 | 0;
    HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 2;
   }
   i15 = HEAP32[i37 + 4 >> 2] | 0;
   do {
    if ((i15 | 0) == 0) {
     i48 = (__ZN3WTF5equalEPKNS_10StringImplES2_(i16, 0) | 0) ^ 1;
    } else {
     i38 = i15 | 0;
     HEAP32[i38 >> 2] = (HEAP32[i38 >> 2] | 0) + 2;
     i43 = (__ZN3WTF5equalEPKNS_10StringImplES2_(i16, i15) | 0) ^ 1;
     i14 = (HEAP32[i38 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i15);
      i48 = i43;
      break;
     } else {
      HEAP32[i38 >> 2] = i14;
      i48 = i43;
      break;
     }
    }
   } while (0);
   do {
    if (!i39) {
     i15 = i16 | 0;
     i43 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
     if ((i43 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i16);
      break;
     } else {
      HEAP32[i15 >> 2] = i43;
      break;
     }
    }
   } while (0);
   if (i48) {
    i16 = HEAP32[i13 >> 2] | 0;
    if ((i16 | 0) == 0) {
     __ZNK7WebCore3URL8protocolEv(i28, i17);
     i49 = 0;
     i50 = 1;
    } else {
     i39 = i16 | 0;
     i43 = HEAP32[i39 >> 2] | 0;
     i15 = i43 + 2 | 0;
     HEAP32[i39 >> 2] = i43 + 4;
     if ((i15 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i16);
      __ZNK7WebCore3URL8protocolEv(i28, i17);
     } else {
      HEAP32[i39 >> 2] = i15;
      __ZNK7WebCore3URL8protocolEv(i28, i17);
     }
     HEAP32[i39 >> 2] = (HEAP32[i39 >> 2] | 0) + 2;
     i49 = i16;
     i50 = 0;
    }
    i39 = i28 | 0;
    i15 = HEAP32[i39 >> 2] | 0;
    i43 = (i15 | 0) == 0;
    if (!i43) {
     i14 = i15 | 0;
     HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
    }
    if (!i50) {
     i14 = i49 | 0;
     HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
    }
    do {
     if (!i43) {
      i14 = i15 | 0;
      i38 = HEAP32[i14 >> 2] | 0;
      HEAP32[i14 >> 2] = i38 + 2;
      if ((i38 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i15);
       break;
      } else {
       HEAP32[i14 >> 2] = i38;
       break;
      }
     }
    } while (0);
    if (!i50) {
     i38 = i49 | 0;
     i14 = (HEAP32[i38 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i49);
      i51 = HEAP32[i38 >> 2] | 0;
     } else {
      HEAP32[i38 >> 2] = i14;
      i51 = i14;
     }
     HEAP32[i38 >> 2] = i51 + 2;
    }
    if (!i43) {
     i38 = i15 | 0;
     HEAP32[i38 >> 2] = (HEAP32[i38 >> 2] | 0) + 2;
    }
    i38 = i27 | 0;
    HEAP32[i38 >> 2] = i49;
    if (!i50) {
     i14 = i49 | 0;
     HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
    }
    HEAP32[i27 + 4 >> 2] = H_BASE + 1184;
    i14 = i27 + 8 | 0;
    HEAP32[i14 >> 2] = i15;
    do {
     if (i43) {
      HEAP32[i27 + 12 >> 2] = H_BASE + 1104;
     } else {
      i45 = i15 | 0;
      i44 = HEAP32[i45 >> 2] | 0;
      HEAP32[i45 >> 2] = i44 + 2;
      HEAP32[i27 + 12 >> 2] = H_BASE + 1104;
      if ((i44 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i15);
       break;
      } else {
       HEAP32[i45 >> 2] = i44;
       break;
      }
     }
    } while (0);
    do {
     if (!i50) {
      i44 = i49 | 0;
      i45 = (HEAP32[i44 >> 2] | 0) - 2 | 0;
      if ((i45 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i49);
       break;
      } else {
       HEAP32[i44 >> 2] = i45;
       break;
      }
     }
    } while (0);
    __ZNK7WebCore3URL8protocolEv(i29, i18);
    __ZN3WTFplINS_12StringAppendINS1_INS_6StringEPKcEES2_EES4_S2_EENS1_INS1_IT_T0_EET1_EERKS9_SA_(i26, i27, i29);
    __ZN3WTFplINS_12StringAppendINS1_INS1_INS_6StringEPKcEES2_EES4_EES2_S4_EENS1_INS1_IT_T0_EET1_EERKSA_SB_(i25, i26, H_BASE + 1072 | 0);
    __ZNK3WTF12StringAppendINS0_INS0_INS0_INS0_INS_6StringEPKcEES1_EES3_EES1_EES3_EcvS1_Ev(i1, i25);
    i45 = HEAP32[i25 + 16 >> 2] | 0;
    do {
     if ((i45 | 0) != 0) {
      i44 = i45 | 0;
      i42 = (HEAP32[i44 >> 2] | 0) - 2 | 0;
      if ((i42 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i45);
       break;
      } else {
       HEAP32[i44 >> 2] = i42;
       break;
      }
     }
    } while (0);
    i45 = HEAP32[i25 + 8 >> 2] | 0;
    do {
     if ((i45 | 0) != 0) {
      i42 = i45 | 0;
      i44 = (HEAP32[i42 >> 2] | 0) - 2 | 0;
      if ((i44 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i45);
       break;
      } else {
       HEAP32[i42 >> 2] = i44;
       break;
      }
     }
    } while (0);
    i45 = HEAP32[i25 >> 2] | 0;
    do {
     if ((i45 | 0) != 0) {
      i44 = i45 | 0;
      i42 = (HEAP32[i44 >> 2] | 0) - 2 | 0;
      if ((i42 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i45);
       break;
      } else {
       HEAP32[i44 >> 2] = i42;
       break;
      }
     }
    } while (0);
    i45 = HEAP32[i26 + 16 >> 2] | 0;
    do {
     if ((i45 | 0) != 0) {
      i42 = i45 | 0;
      i44 = (HEAP32[i42 >> 2] | 0) - 2 | 0;
      if ((i44 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i45);
       break;
      } else {
       HEAP32[i42 >> 2] = i44;
       break;
      }
     }
    } while (0);
    i45 = HEAP32[i26 + 8 >> 2] | 0;
    do {
     if ((i45 | 0) != 0) {
      i44 = i45 | 0;
      i42 = (HEAP32[i44 >> 2] | 0) - 2 | 0;
      if ((i42 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i45);
       break;
      } else {
       HEAP32[i44 >> 2] = i42;
       break;
      }
     }
    } while (0);
    i45 = HEAP32[i26 >> 2] | 0;
    do {
     if ((i45 | 0) != 0) {
      i42 = i45 | 0;
      i44 = (HEAP32[i42 >> 2] | 0) - 2 | 0;
      if ((i44 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i45);
       break;
      } else {
       HEAP32[i42 >> 2] = i44;
       break;
      }
     }
    } while (0);
    i45 = HEAP32[i29 >> 2] | 0;
    do {
     if ((i45 | 0) != 0) {
      i44 = i45 | 0;
      i42 = (HEAP32[i44 >> 2] | 0) - 2 | 0;
      if ((i42 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i45);
       break;
      } else {
       HEAP32[i44 >> 2] = i42;
       break;
      }
     }
    } while (0);
    i45 = HEAP32[i14 >> 2] | 0;
    do {
     if ((i45 | 0) != 0) {
      i42 = i45 | 0;
      i44 = (HEAP32[i42 >> 2] | 0) - 2 | 0;
      if ((i44 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i45);
       break;
      } else {
       HEAP32[i42 >> 2] = i44;
       break;
      }
     }
    } while (0);
    i45 = HEAP32[i38 >> 2] | 0;
    do {
     if ((i45 | 0) != 0) {
      i14 = i45 | 0;
      i44 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
      if ((i44 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i45);
       break;
      } else {
       HEAP32[i14 >> 2] = i44;
       break;
      }
     }
    } while (0);
    do {
     if (!i43) {
      i45 = i15 | 0;
      i38 = (HEAP32[i45 >> 2] | 0) - 2 | 0;
      if ((i38 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i15);
       break;
      } else {
       HEAP32[i45 >> 2] = i38;
       break;
      }
     }
    } while (0);
    do {
     if (!i50) {
      i15 = i49 | 0;
      i43 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
      if ((i43 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i49);
       break;
      } else {
       HEAP32[i15 >> 2] = i43;
       break;
      }
     }
    } while (0);
    i43 = HEAP32[i39 >> 2] | 0;
    do {
     if ((i43 | 0) != 0) {
      i15 = i43 | 0;
      i38 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
      if ((i38 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i43);
       break;
      } else {
       HEAP32[i15 >> 2] = i38;
       break;
      }
     }
    } while (0);
    if (i50) {
     i52 = i16;
     break;
    }
    i43 = i49 | 0;
    i39 = (HEAP32[i43 >> 2] | 0) - 2 | 0;
    if ((i39 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i49);
     i52 = i16;
     break;
    } else {
     HEAP32[i43 >> 2] = i39;
     i52 = i16;
     break;
    }
   }
   i39 = (HEAP8[i2 + 24 | 0] & 1) == 0;
   i43 = HEAP8[i37 + 24 | 0] | 0;
   do {
    if (!i39) {
     if ((i43 & 1) == 0) {
      break;
     }
     i38 = HEAP32[i13 >> 2] | 0;
     do {
      if ((i38 | 0) == 0) {
       i53 = 0;
      } else {
       i15 = i38 | 0;
       i45 = HEAP32[i15 >> 2] | 0;
       i44 = i45 + 2 | 0;
       HEAP32[i15 >> 2] = i45 + 4;
       if ((i44 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i38);
        i53 = i38;
        break;
       } else {
        HEAP32[i15 >> 2] = i44;
        i53 = i38;
        break;
       }
      }
     } while (0);
     i44 = HEAP32[i37 + 12 >> 2] | 0;
     i15 = (i44 | 0) == 0;
     if (!i15) {
      i45 = i44 | 0;
      HEAP32[i45 >> 2] = (HEAP32[i45 >> 2] | 0) + 2;
     }
     i45 = (i53 | 0) == 0;
     if (!i45) {
      i14 = i53 | 0;
      HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
     }
     if (!i15) {
      i14 = i44 | 0;
      HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
     }
     if (!i45) {
      i14 = i53 | 0;
      HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
     }
     do {
      if (!i15) {
       i14 = i44 | 0;
       i42 = HEAP32[i14 >> 2] | 0;
       HEAP32[i14 >> 2] = i42 + 2;
       if ((i42 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i44);
        break;
       } else {
        HEAP32[i14 >> 2] = i42;
        break;
       }
      }
     } while (0);
     if (!i45) {
      i42 = i53 | 0;
      i14 = (HEAP32[i42 >> 2] | 0) - 2 | 0;
      if ((i14 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i53);
       i54 = HEAP32[i42 >> 2] | 0;
      } else {
       HEAP32[i42 >> 2] = i14;
       i54 = i14;
      }
      HEAP32[i42 >> 2] = i54 + 2;
     }
     if (!i15) {
      i42 = i44 | 0;
      HEAP32[i42 >> 2] = (HEAP32[i42 >> 2] | 0) + 2;
     }
     i42 = i32 | 0;
     HEAP32[i42 >> 2] = i53;
     if (!i45) {
      i14 = i53 | 0;
      HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
     }
     HEAP32[i32 + 4 >> 2] = H_BASE + 1016;
     i14 = i32 + 8 | 0;
     HEAP32[i14 >> 2] = i44;
     do {
      if (i15) {
       HEAP32[i32 + 12 >> 2] = H_BASE + 976;
      } else {
       i55 = i44 | 0;
       i56 = HEAP32[i55 >> 2] | 0;
       HEAP32[i55 >> 2] = i56 + 2;
       HEAP32[i32 + 12 >> 2] = H_BASE + 976;
       if ((i56 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i44);
        break;
       } else {
        HEAP32[i55 >> 2] = i56;
        break;
       }
      }
     } while (0);
     do {
      if (!i45) {
       i56 = i53 | 0;
       i55 = (HEAP32[i56 >> 2] | 0) - 2 | 0;
       if ((i55 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i53);
        break;
       } else {
        HEAP32[i56 >> 2] = i55;
        break;
       }
      }
     } while (0);
     i55 = i33 | 0;
     i56 = HEAP32[i2 + 12 >> 2] | 0;
     HEAP32[i55 >> 2] = i56;
     if ((i56 | 0) != 0) {
      i57 = i56 | 0;
      HEAP32[i57 >> 2] = (HEAP32[i57 >> 2] | 0) + 2;
     }
     __ZN3WTFplINS_12StringAppendINS1_INS_6StringEPKcEES2_EES4_S2_EENS1_INS1_IT_T0_EET1_EERKS9_SA_(i31, i32, i33);
     __ZN3WTFplINS_12StringAppendINS1_INS1_INS_6StringEPKcEES2_EES4_EES2_S4_EENS1_INS1_IT_T0_EET1_EERKSA_SB_(i30, i31, H_BASE + 904 | 0);
     __ZNK3WTF12StringAppendINS0_INS0_INS0_INS0_INS_6StringEPKcEES1_EES3_EES1_EES3_EcvS1_Ev(i1, i30);
     i57 = HEAP32[i30 + 16 >> 2] | 0;
     do {
      if ((i57 | 0) != 0) {
       i56 = i57 | 0;
       i58 = (HEAP32[i56 >> 2] | 0) - 2 | 0;
       if ((i58 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i57);
        break;
       } else {
        HEAP32[i56 >> 2] = i58;
        break;
       }
      }
     } while (0);
     i57 = HEAP32[i30 + 8 >> 2] | 0;
     do {
      if ((i57 | 0) != 0) {
       i58 = i57 | 0;
       i56 = (HEAP32[i58 >> 2] | 0) - 2 | 0;
       if ((i56 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i57);
        break;
       } else {
        HEAP32[i58 >> 2] = i56;
        break;
       }
      }
     } while (0);
     i57 = HEAP32[i30 >> 2] | 0;
     do {
      if ((i57 | 0) != 0) {
       i56 = i57 | 0;
       i58 = (HEAP32[i56 >> 2] | 0) - 2 | 0;
       if ((i58 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i57);
        break;
       } else {
        HEAP32[i56 >> 2] = i58;
        break;
       }
      }
     } while (0);
     i57 = HEAP32[i31 + 16 >> 2] | 0;
     do {
      if ((i57 | 0) != 0) {
       i58 = i57 | 0;
       i56 = (HEAP32[i58 >> 2] | 0) - 2 | 0;
       if ((i56 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i57);
        break;
       } else {
        HEAP32[i58 >> 2] = i56;
        break;
       }
      }
     } while (0);
     i57 = HEAP32[i31 + 8 >> 2] | 0;
     do {
      if ((i57 | 0) != 0) {
       i56 = i57 | 0;
       i58 = (HEAP32[i56 >> 2] | 0) - 2 | 0;
       if ((i58 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i57);
        break;
       } else {
        HEAP32[i56 >> 2] = i58;
        break;
       }
      }
     } while (0);
     i57 = HEAP32[i31 >> 2] | 0;
     do {
      if ((i57 | 0) != 0) {
       i58 = i57 | 0;
       i56 = (HEAP32[i58 >> 2] | 0) - 2 | 0;
       if ((i56 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i57);
        break;
       } else {
        HEAP32[i58 >> 2] = i56;
        break;
       }
      }
     } while (0);
     i57 = HEAP32[i55 >> 2] | 0;
     do {
      if ((i57 | 0) != 0) {
       i56 = i57 | 0;
       i58 = (HEAP32[i56 >> 2] | 0) - 2 | 0;
       if ((i58 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i57);
        break;
       } else {
        HEAP32[i56 >> 2] = i58;
        break;
       }
      }
     } while (0);
     i57 = HEAP32[i14 >> 2] | 0;
     do {
      if ((i57 | 0) != 0) {
       i55 = i57 | 0;
       i58 = (HEAP32[i55 >> 2] | 0) - 2 | 0;
       if ((i58 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i57);
        break;
       } else {
        HEAP32[i55 >> 2] = i58;
        break;
       }
      }
     } while (0);
     i57 = HEAP32[i42 >> 2] | 0;
     do {
      if ((i57 | 0) != 0) {
       i14 = i57 | 0;
       i58 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
       if ((i58 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i57);
        break;
       } else {
        HEAP32[i14 >> 2] = i58;
        break;
       }
      }
     } while (0);
     do {
      if (!i15) {
       i57 = i44 | 0;
       i42 = (HEAP32[i57 >> 2] | 0) - 2 | 0;
       if ((i42 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i44);
        break;
       } else {
        HEAP32[i57 >> 2] = i42;
        break;
       }
      }
     } while (0);
     do {
      if (!i45) {
       i42 = i53 | 0;
       i57 = (HEAP32[i42 >> 2] | 0) - 2 | 0;
       if ((i57 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i53);
        break;
       } else {
        HEAP32[i42 >> 2] = i57;
        break;
       }
      }
     } while (0);
     do {
      if (!i15) {
       i57 = i44 | 0;
       i42 = (HEAP32[i57 >> 2] | 0) - 2 | 0;
       if ((i42 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i44);
        break;
       } else {
        HEAP32[i57 >> 2] = i42;
        break;
       }
      }
     } while (0);
     if (i45) {
      i52 = i38;
      break L107;
     }
     i44 = i53 | 0;
     i15 = (HEAP32[i44 >> 2] | 0) - 2 | 0;
     if ((i15 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i53);
      i52 = i38;
      break L107;
     } else {
      HEAP32[i44 >> 2] = i15;
      i52 = i38;
      break L107;
     }
    }
   } while (0);
   i16 = HEAP32[i13 >> 2] | 0;
   i15 = (i16 | 0) == 0;
   if ((i43 & 1) != 0) {
    do {
     if (i15) {
      i59 = 0;
     } else {
      i44 = i16 | 0;
      i42 = HEAP32[i44 >> 2] | 0;
      i57 = i42 + 2 | 0;
      HEAP32[i44 >> 2] = i42 + 4;
      if ((i57 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i16);
       i59 = i16;
       break;
      } else {
       HEAP32[i44 >> 2] = i57;
       i59 = i16;
       break;
      }
     }
    } while (0);
    i43 = HEAP32[i37 + 12 >> 2] | 0;
    i57 = (i43 | 0) == 0;
    if (!i57) {
     i44 = i43 | 0;
     HEAP32[i44 >> 2] = (HEAP32[i44 >> 2] | 0) + 2;
    }
    i44 = (i59 | 0) == 0;
    if (!i44) {
     i42 = i59 | 0;
     HEAP32[i42 >> 2] = (HEAP32[i42 >> 2] | 0) + 2;
    }
    if (!i57) {
     i42 = i43 | 0;
     HEAP32[i42 >> 2] = (HEAP32[i42 >> 2] | 0) + 2;
    }
    if (!i44) {
     i42 = i59 | 0;
     HEAP32[i42 >> 2] = (HEAP32[i42 >> 2] | 0) + 2;
    }
    do {
     if (!i57) {
      i42 = i43 | 0;
      i58 = HEAP32[i42 >> 2] | 0;
      HEAP32[i42 >> 2] = i58 + 2;
      if ((i58 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i43);
       break;
      } else {
       HEAP32[i42 >> 2] = i58;
       break;
      }
     }
    } while (0);
    if (!i44) {
     i58 = i59 | 0;
     i42 = (HEAP32[i58 >> 2] | 0) - 2 | 0;
     if ((i42 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i59);
      i60 = HEAP32[i58 >> 2] | 0;
     } else {
      HEAP32[i58 >> 2] = i42;
      i60 = i42;
     }
     HEAP32[i58 >> 2] = i60 + 2;
    }
    if (!i57) {
     i58 = i43 | 0;
     HEAP32[i58 >> 2] = (HEAP32[i58 >> 2] | 0) + 2;
    }
    i58 = i34 | 0;
    HEAP32[i58 >> 2] = i59;
    if (!i44) {
     i42 = i59 | 0;
     HEAP32[i42 >> 2] = (HEAP32[i42 >> 2] | 0) + 2;
    }
    HEAP32[i34 + 4 >> 2] = H_BASE + 1016;
    i42 = i34 + 8 | 0;
    HEAP32[i42 >> 2] = i43;
    do {
     if (i57) {
      HEAP32[i34 + 12 >> 2] = H_BASE + 792;
     } else {
      i14 = i43 | 0;
      i55 = HEAP32[i14 >> 2] | 0;
      HEAP32[i14 >> 2] = i55 + 2;
      HEAP32[i34 + 12 >> 2] = H_BASE + 792;
      if ((i55 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i43);
       break;
      } else {
       HEAP32[i14 >> 2] = i55;
       break;
      }
     }
    } while (0);
    do {
     if (!i44) {
      i55 = i59 | 0;
      i14 = (HEAP32[i55 >> 2] | 0) - 2 | 0;
      if ((i14 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i59);
       break;
      } else {
       HEAP32[i55 >> 2] = i14;
       break;
      }
     }
    } while (0);
    __ZNK3WTF12StringAppendINS0_INS0_INS_6StringEPKcEES1_EES3_EcvS1_Ev(i1, i34);
    i14 = HEAP32[i42 >> 2] | 0;
    do {
     if ((i14 | 0) != 0) {
      i55 = i14 | 0;
      i56 = (HEAP32[i55 >> 2] | 0) - 2 | 0;
      if ((i56 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i14);
       break;
      } else {
       HEAP32[i55 >> 2] = i56;
       break;
      }
     }
    } while (0);
    i14 = HEAP32[i58 >> 2] | 0;
    do {
     if ((i14 | 0) != 0) {
      i42 = i14 | 0;
      i56 = (HEAP32[i42 >> 2] | 0) - 2 | 0;
      if ((i56 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i14);
       break;
      } else {
       HEAP32[i42 >> 2] = i56;
       break;
      }
     }
    } while (0);
    do {
     if (!i57) {
      i14 = i43 | 0;
      i58 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
      if ((i58 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i43);
       break;
      } else {
       HEAP32[i14 >> 2] = i58;
       break;
      }
     }
    } while (0);
    do {
     if (!i44) {
      i58 = i59 | 0;
      i14 = (HEAP32[i58 >> 2] | 0) - 2 | 0;
      if ((i14 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i59);
       break;
      } else {
       HEAP32[i58 >> 2] = i14;
       break;
      }
     }
    } while (0);
    do {
     if (!i57) {
      i14 = i43 | 0;
      i58 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
      if ((i58 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i43);
       break;
      } else {
       HEAP32[i14 >> 2] = i58;
       break;
      }
     }
    } while (0);
    if (i44) {
     i52 = i16;
     break;
    }
    i43 = i59 | 0;
    i57 = (HEAP32[i43 >> 2] | 0) - 2 | 0;
    if ((i57 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i59);
     i52 = i16;
     break;
    } else {
     HEAP32[i43 >> 2] = i57;
     i52 = i16;
     break;
    }
   }
   if (i39) {
    do {
     if (i15) {
      i61 = 0;
     } else {
      i57 = i16 | 0;
      i43 = HEAP32[i57 >> 2] | 0;
      i58 = i43 + 2 | 0;
      HEAP32[i57 >> 2] = i43 + 4;
      if ((i58 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i16);
       i61 = i16;
       break;
      } else {
       HEAP32[i57 >> 2] = i58;
       i61 = i16;
       break;
      }
     }
    } while (0);
    i39 = i12 | 0;
    HEAP32[i39 >> 2] = i61;
    i44 = (i61 | 0) == 0;
    if (!i44) {
     i58 = i61 | 0;
     HEAP32[i58 >> 2] = (HEAP32[i58 >> 2] | 0) + 2;
    }
    __ZN3WTF13tryMakeStringINS_6StringEPKcEENS_10PassRefPtrINS_10StringImplEEET_T0_(i11, i12, H_BASE + 576 | 0);
    i58 = i11 | 0;
    i57 = HEAP32[i58 >> 2] | 0;
    HEAP32[i58 >> 2] = 0;
    i58 = HEAP32[i39 >> 2] | 0;
    do {
     if ((i58 | 0) != 0) {
      i39 = i58 | 0;
      i43 = (HEAP32[i39 >> 2] | 0) - 2 | 0;
      if ((i43 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i58);
       break;
      } else {
       HEAP32[i39 >> 2] = i43;
       break;
      }
     }
    } while (0);
    if ((i57 | 0) == 0) {
     _WTFCrash();
    }
    HEAP32[i1 >> 2] = i57;
    if (i44) {
     i52 = i16;
     break;
    }
    i58 = i61 | 0;
    i43 = (HEAP32[i58 >> 2] | 0) - 2 | 0;
    if ((i43 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i61);
     i52 = i16;
     break;
    } else {
     HEAP32[i58 >> 2] = i43;
     i52 = i16;
     break;
    }
   }
   do {
    if (i15) {
     i62 = 0;
    } else {
     i43 = i16 | 0;
     i58 = HEAP32[i43 >> 2] | 0;
     i39 = i58 + 2 | 0;
     HEAP32[i43 >> 2] = i58 + 4;
     if ((i39 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i16);
      i62 = i16;
      break;
     } else {
      HEAP32[i43 >> 2] = i39;
      i62 = i16;
      break;
     }
    }
   } while (0);
   i15 = HEAP32[i2 + 12 >> 2] | 0;
   i44 = (i15 | 0) == 0;
   if (!i44) {
    i57 = i15 | 0;
    HEAP32[i57 >> 2] = (HEAP32[i57 >> 2] | 0) + 2;
   }
   i57 = (i62 | 0) == 0;
   if (!i57) {
    i39 = i62 | 0;
    HEAP32[i39 >> 2] = (HEAP32[i39 >> 2] | 0) + 2;
   }
   if (!i44) {
    i39 = i15 | 0;
    HEAP32[i39 >> 2] = (HEAP32[i39 >> 2] | 0) + 2;
   }
   if (!i57) {
    i39 = i62 | 0;
    HEAP32[i39 >> 2] = (HEAP32[i39 >> 2] | 0) + 2;
   }
   do {
    if (!i44) {
     i39 = i15 | 0;
     i43 = HEAP32[i39 >> 2] | 0;
     HEAP32[i39 >> 2] = i43 + 2;
     if ((i43 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i15);
      break;
     } else {
      HEAP32[i39 >> 2] = i43;
      break;
     }
    }
   } while (0);
   if (!i57) {
    i43 = i62 | 0;
    i39 = (HEAP32[i43 >> 2] | 0) - 2 | 0;
    if ((i39 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i62);
     i63 = HEAP32[i43 >> 2] | 0;
    } else {
     HEAP32[i43 >> 2] = i39;
     i63 = i39;
    }
    HEAP32[i43 >> 2] = i63 + 2;
   }
   if (!i44) {
    i43 = i15 | 0;
    HEAP32[i43 >> 2] = (HEAP32[i43 >> 2] | 0) + 2;
   }
   i43 = i35 | 0;
   HEAP32[i43 >> 2] = i62;
   if (!i57) {
    i39 = i62 | 0;
    HEAP32[i39 >> 2] = (HEAP32[i39 >> 2] | 0) + 2;
   }
   HEAP32[i35 + 4 >> 2] = H_BASE + 736;
   i39 = i35 + 8 | 0;
   HEAP32[i39 >> 2] = i15;
   do {
    if (i44) {
     HEAP32[i35 + 12 >> 2] = H_BASE + 624;
    } else {
     i58 = i15 | 0;
     i14 = HEAP32[i58 >> 2] | 0;
     HEAP32[i58 >> 2] = i14 + 2;
     HEAP32[i35 + 12 >> 2] = H_BASE + 624;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i15);
      break;
     } else {
      HEAP32[i58 >> 2] = i14;
      break;
     }
    }
   } while (0);
   do {
    if (!i57) {
     i14 = i62 | 0;
     i58 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
     if ((i58 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i62);
      break;
     } else {
      HEAP32[i14 >> 2] = i58;
      break;
     }
    }
   } while (0);
   __ZNK3WTF12StringAppendINS0_INS0_INS_6StringEPKcEES1_EES3_EcvS1_Ev(i1, i35);
   i58 = HEAP32[i39 >> 2] | 0;
   do {
    if ((i58 | 0) != 0) {
     i14 = i58 | 0;
     i56 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
     if ((i56 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i58);
      break;
     } else {
      HEAP32[i14 >> 2] = i56;
      break;
     }
    }
   } while (0);
   i58 = HEAP32[i43 >> 2] | 0;
   do {
    if ((i58 | 0) != 0) {
     i39 = i58 | 0;
     i56 = (HEAP32[i39 >> 2] | 0) - 2 | 0;
     if ((i56 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i58);
      break;
     } else {
      HEAP32[i39 >> 2] = i56;
      break;
     }
    }
   } while (0);
   do {
    if (!i44) {
     i58 = i15 | 0;
     i43 = (HEAP32[i58 >> 2] | 0) - 2 | 0;
     if ((i43 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i15);
      break;
     } else {
      HEAP32[i58 >> 2] = i43;
      break;
     }
    }
   } while (0);
   do {
    if (!i57) {
     i43 = i62 | 0;
     i58 = (HEAP32[i43 >> 2] | 0) - 2 | 0;
     if ((i58 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i62);
      break;
     } else {
      HEAP32[i43 >> 2] = i58;
      break;
     }
    }
   } while (0);
   do {
    if (!i44) {
     i58 = i15 | 0;
     i43 = (HEAP32[i58 >> 2] | 0) - 2 | 0;
     if ((i43 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i15);
      break;
     } else {
      HEAP32[i58 >> 2] = i43;
      break;
     }
    }
   } while (0);
   if (i57) {
    i52 = i16;
    break;
   }
   i15 = i62 | 0;
   i44 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i44 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i62);
    i52 = i16;
    break;
   } else {
    HEAP32[i15 >> 2] = i44;
    i52 = i16;
    break;
   }
  } else {
   i47 = 75;
  }
 } while (0);
 do {
  if ((i47 | 0) == 75) {
   __ZN7WebCore14SecurityOrigin6createERKNS_3URLE(i22, i17);
   i62 = i22 | 0;
   __ZNK7WebCore14SecurityOrigin8toStringEv(i21, HEAP32[i62 >> 2] | 0);
   i35 = i21 | 0;
   i63 = HEAP32[i35 >> 2] | 0;
   do {
    if ((i63 | 0) == 0) {
     i64 = 0;
     i65 = 1;
    } else {
     i2 = i63 | 0;
     i61 = HEAP32[i2 >> 2] | 0;
     i11 = i61 + 2 | 0;
     HEAP32[i2 >> 2] = i61 + 4;
     if ((i11 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i63);
      i66 = HEAP32[i2 >> 2] | 0;
     } else {
      HEAP32[i2 >> 2] = i11;
      i66 = i11;
     }
     i11 = i66 + 2 | 0;
     HEAP32[i2 >> 2] = i66 + 4;
     if ((i11 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i63);
      i64 = i63;
      i65 = 0;
      break;
     } else {
      HEAP32[i2 >> 2] = i11;
      i64 = i63;
      i65 = 0;
      break;
     }
    }
   } while (0);
   __ZN7WebCore14SecurityOrigin6createERKNS_3URLE(i24, i18);
   i63 = i24 | 0;
   __ZNK7WebCore14SecurityOrigin8toStringEv(i23, HEAP32[i63 >> 2] | 0);
   i16 = (i64 | 0) == 0;
   if (!i16) {
    i57 = i64 | 0;
    HEAP32[i57 >> 2] = (HEAP32[i57 >> 2] | 0) + 2;
   }
   i57 = i23 | 0;
   i11 = HEAP32[i57 >> 2] | 0;
   i2 = (i11 | 0) == 0;
   if (!i2) {
    i61 = i11 | 0;
    HEAP32[i61 >> 2] = (HEAP32[i61 >> 2] | 0) + 2;
   }
   if (!i16) {
    i61 = i64 | 0;
    HEAP32[i61 >> 2] = (HEAP32[i61 >> 2] | 0) + 2;
   }
   do {
    if (!i2) {
     i61 = i11 | 0;
     i12 = HEAP32[i61 >> 2] | 0;
     HEAP32[i61 >> 2] = i12 + 2;
     if ((i12 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i11);
      break;
     } else {
      HEAP32[i61 >> 2] = i12;
      break;
     }
    }
   } while (0);
   if (!i16) {
    i12 = i64 | 0;
    i61 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
    if ((i61 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i64);
     i67 = HEAP32[i12 >> 2] | 0;
    } else {
     HEAP32[i12 >> 2] = i61;
     i67 = i61;
    }
    HEAP32[i12 >> 2] = i67 + 2;
   }
   if (!i2) {
    i12 = i11 | 0;
    HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
   }
   HEAP32[i20 >> 2] = H_BASE + 1544;
   i12 = i20 + 4 | 0;
   HEAP32[i12 >> 2] = i64;
   if (!i16) {
    i61 = i64 | 0;
    HEAP32[i61 >> 2] = (HEAP32[i61 >> 2] | 0) + 2;
   }
   HEAP32[i20 + 8 >> 2] = H_BASE + 1512;
   i61 = i20 + 12 | 0;
   HEAP32[i61 >> 2] = i11;
   do {
    if (i2) {
     HEAP32[i20 + 16 >> 2] = H_BASE + 1568;
    } else {
     i59 = i11 | 0;
     i34 = HEAP32[i59 >> 2] | 0;
     HEAP32[i59 >> 2] = i34 + 2;
     HEAP32[i20 + 16 >> 2] = H_BASE + 1568;
     if ((i34 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i11);
      break;
     } else {
      HEAP32[i59 >> 2] = i34;
      break;
     }
    }
   } while (0);
   do {
    if (!i16) {
     i34 = i64 | 0;
     i59 = (HEAP32[i34 >> 2] | 0) - 2 | 0;
     if ((i59 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i64);
      break;
     } else {
      HEAP32[i34 >> 2] = i59;
      break;
     }
    }
   } while (0);
   __ZNK3WTF12StringAppendINS0_INS0_INS0_IPKcNS_6StringEEES2_EES3_EES2_EcvS3_Ev(i19, i20);
   i59 = i19 | 0;
   i34 = HEAP32[i59 >> 2] | 0;
   HEAP32[i59 >> 2] = 0;
   i59 = i13 | 0;
   i60 = HEAP32[i59 >> 2] | 0;
   HEAP32[i59 >> 2] = i34;
   do {
    if ((i60 | 0) != 0) {
     i34 = i60 | 0;
     i37 = (HEAP32[i34 >> 2] | 0) - 2 | 0;
     if ((i37 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i60);
      break;
     } else {
      HEAP32[i34 >> 2] = i37;
      break;
     }
    }
   } while (0);
   i60 = HEAP32[i61 >> 2] | 0;
   do {
    if ((i60 | 0) != 0) {
     i37 = i60 | 0;
     i34 = (HEAP32[i37 >> 2] | 0) - 2 | 0;
     if ((i34 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i60);
      break;
     } else {
      HEAP32[i37 >> 2] = i34;
      break;
     }
    }
   } while (0);
   i60 = HEAP32[i12 >> 2] | 0;
   do {
    if ((i60 | 0) != 0) {
     i61 = i60 | 0;
     i34 = (HEAP32[i61 >> 2] | 0) - 2 | 0;
     if ((i34 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i60);
      break;
     } else {
      HEAP32[i61 >> 2] = i34;
      break;
     }
    }
   } while (0);
   do {
    if (!i2) {
     i60 = i11 | 0;
     i12 = (HEAP32[i60 >> 2] | 0) - 2 | 0;
     if ((i12 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i11);
      break;
     } else {
      HEAP32[i60 >> 2] = i12;
      break;
     }
    }
   } while (0);
   do {
    if (!i16) {
     i11 = i64 | 0;
     i2 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
     if ((i2 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i64);
      break;
     } else {
      HEAP32[i11 >> 2] = i2;
      break;
     }
    }
   } while (0);
   i2 = HEAP32[i57 >> 2] | 0;
   do {
    if ((i2 | 0) != 0) {
     i11 = i2 | 0;
     i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
     if ((i12 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i2);
      break;
     } else {
      HEAP32[i11 >> 2] = i12;
      break;
     }
    }
   } while (0);
   i2 = HEAP32[i63 >> 2] | 0;
   do {
    if ((i2 | 0) != 0) {
     i57 = i2 | 0;
     if (((tempValue = HEAP32[i57 >> 2] | 0, HEAP32[i57 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
      break;
     }
     __ZN7WebCore14SecurityOriginD2Ev(i2);
     __ZN3WTF8fastFreeEPv(i2);
    }
   } while (0);
   do {
    if (!i16) {
     i2 = i64 | 0;
     i63 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
     if ((i63 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i64);
      break;
     } else {
      HEAP32[i2 >> 2] = i63;
      break;
     }
    }
   } while (0);
   do {
    if (!i65) {
     i16 = i64 | 0;
     i63 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
     if ((i63 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i64);
      break;
     } else {
      HEAP32[i16 >> 2] = i63;
      break;
     }
    }
   } while (0);
   i63 = HEAP32[i35 >> 2] | 0;
   do {
    if ((i63 | 0) != 0) {
     i16 = i63 | 0;
     i2 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
     if ((i2 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i63);
      break;
     } else {
      HEAP32[i16 >> 2] = i2;
      break;
     }
    }
   } while (0);
   i63 = HEAP32[i62 >> 2] | 0;
   do {
    if ((i63 | 0) != 0) {
     i35 = i63 | 0;
     if (((tempValue = HEAP32[i35 >> 2] | 0, HEAP32[i35 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
      break;
     }
     __ZN7WebCore14SecurityOriginD2Ev(i63);
     __ZN3WTF8fastFreeEPv(i63);
    }
   } while (0);
   if ((HEAP32[(HEAP32[i3 >> 2] | 0) - 156 + 164 >> 2] & 4 | 0) == 0) {
    i63 = HEAP32[i59 >> 2] | 0;
    do {
     if ((i63 | 0) == 0) {
      i68 = 1;
      i69 = 0;
     } else {
      i62 = i63 | 0;
      i35 = HEAP32[i62 >> 2] | 0;
      i2 = i35 + 2 | 0;
      HEAP32[i62 >> 2] = i35 + 4;
      if ((i2 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i63);
       i70 = HEAP32[i62 >> 2] | 0;
      } else {
       HEAP32[i62 >> 2] = i2;
       i70 = i2;
      }
      i2 = i70 + 2 | 0;
      HEAP32[i62 >> 2] = i70 + 4;
      if ((i2 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i63);
       i68 = 0;
       i69 = i63;
       break;
      } else {
       HEAP32[i62 >> 2] = i2;
       i68 = 0;
       i69 = i63;
       break;
      }
     }
    } while (0);
    HEAP32[i6 >> 2] = H_BASE + 1480;
    i63 = i6 + 4 | 0;
    HEAP32[i63 >> 2] = i69;
    i2 = (i69 | 0) == 0;
    if (!i2) {
     i62 = i69 | 0;
     HEAP32[i62 >> 2] = (HEAP32[i62 >> 2] | 0) + 2;
    }
    __ZN3WTF13tryMakeStringINS_12StringAppendIPKcNS_6StringEEES3_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i5, i6, H_BASE + 1240 | 0);
    i62 = i5 | 0;
    i35 = HEAP32[i62 >> 2] | 0;
    HEAP32[i62 >> 2] = 0;
    i62 = HEAP32[i63 >> 2] | 0;
    do {
     if ((i62 | 0) != 0) {
      i63 = i62 | 0;
      i16 = (HEAP32[i63 >> 2] | 0) - 2 | 0;
      if ((i16 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i62);
       break;
      } else {
       HEAP32[i63 >> 2] = i16;
       break;
      }
     }
    } while (0);
    if ((i35 | 0) == 0) {
     _WTFCrash();
    }
    HEAP32[i1 >> 2] = i35;
    do {
     if (!i2) {
      i62 = i69 | 0;
      i16 = (HEAP32[i62 >> 2] | 0) - 2 | 0;
      if ((i16 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i69);
       break;
      } else {
       HEAP32[i62 >> 2] = i16;
       break;
      }
     }
    } while (0);
    if (i68) {
     i52 = i69;
     break;
    }
    i2 = i69 | 0;
    i35 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
    if ((i35 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i69);
     i52 = i69;
     break;
    } else {
     HEAP32[i2 >> 2] = i35;
     i52 = i69;
     break;
    }
   }
   i35 = HEAP32[i59 >> 2] | 0;
   i2 = (i35 | 0) == 0;
   if ((HEAP32[(HEAP32[i36 >> 2] | 0) - 156 + 164 >> 2] & 4 | 0) == 0) {
    do {
     if (i2) {
      i71 = 1;
      i72 = 0;
     } else {
      i16 = i35 | 0;
      i62 = HEAP32[i16 >> 2] | 0;
      i63 = i62 + 2 | 0;
      HEAP32[i16 >> 2] = i62 + 4;
      if ((i63 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i35);
       i73 = HEAP32[i16 >> 2] | 0;
      } else {
       HEAP32[i16 >> 2] = i63;
       i73 = i63;
      }
      i63 = i73 + 2 | 0;
      HEAP32[i16 >> 2] = i73 + 4;
      if ((i63 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i35);
       i71 = 0;
       i72 = i35;
       break;
      } else {
       HEAP32[i16 >> 2] = i63;
       i71 = 0;
       i72 = i35;
       break;
      }
     }
    } while (0);
    HEAP32[i8 >> 2] = H_BASE + 1480;
    i59 = i8 + 4 | 0;
    HEAP32[i59 >> 2] = i72;
    i63 = (i72 | 0) == 0;
    if (!i63) {
     i16 = i72 | 0;
     HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
    }
    __ZN3WTF13tryMakeStringINS_12StringAppendIPKcNS_6StringEEES3_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i7, i8, H_BASE + 1328 | 0);
    i16 = i7 | 0;
    i62 = HEAP32[i16 >> 2] | 0;
    HEAP32[i16 >> 2] = 0;
    i16 = HEAP32[i59 >> 2] | 0;
    do {
     if ((i16 | 0) != 0) {
      i59 = i16 | 0;
      i57 = (HEAP32[i59 >> 2] | 0) - 2 | 0;
      if ((i57 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i16);
       break;
      } else {
       HEAP32[i59 >> 2] = i57;
       break;
      }
     }
    } while (0);
    if ((i62 | 0) == 0) {
     _WTFCrash();
    }
    HEAP32[i1 >> 2] = i62;
    do {
     if (!i63) {
      i16 = i72 | 0;
      i57 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
      if ((i57 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i72);
       break;
      } else {
       HEAP32[i16 >> 2] = i57;
       break;
      }
     }
    } while (0);
    if (i71) {
     i52 = i72;
     break;
    }
    i63 = i72 | 0;
    i62 = (HEAP32[i63 >> 2] | 0) - 2 | 0;
    if ((i62 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i72);
     i52 = i72;
     break;
    } else {
     HEAP32[i63 >> 2] = i62;
     i52 = i72;
     break;
    }
   } else {
    do {
     if (i2) {
      i74 = 0;
      i75 = 1;
     } else {
      i62 = i35 | 0;
      i63 = HEAP32[i62 >> 2] | 0;
      i57 = i63 + 2 | 0;
      HEAP32[i62 >> 2] = i63 + 4;
      if ((i57 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i35);
       i76 = HEAP32[i62 >> 2] | 0;
      } else {
       HEAP32[i62 >> 2] = i57;
       i76 = i57;
      }
      i57 = i76 + 2 | 0;
      HEAP32[i62 >> 2] = i76 + 4;
      if ((i57 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i35);
       i74 = i35;
       i75 = 0;
       break;
      } else {
       HEAP32[i62 >> 2] = i57;
       i74 = i35;
       i75 = 0;
       break;
      }
     }
    } while (0);
    HEAP32[i10 >> 2] = H_BASE + 1480;
    i2 = i10 + 4 | 0;
    HEAP32[i2 >> 2] = i74;
    i57 = (i74 | 0) == 0;
    if (!i57) {
     i62 = i74 | 0;
     HEAP32[i62 >> 2] = (HEAP32[i62 >> 2] | 0) + 2;
    }
    __ZN3WTF13tryMakeStringINS_12StringAppendIPKcNS_6StringEEES3_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i9, i10, H_BASE + 1408 | 0);
    i62 = i9 | 0;
    i63 = HEAP32[i62 >> 2] | 0;
    HEAP32[i62 >> 2] = 0;
    i62 = HEAP32[i2 >> 2] | 0;
    do {
     if ((i62 | 0) != 0) {
      i2 = i62 | 0;
      i16 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
      if ((i16 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i62);
       break;
      } else {
       HEAP32[i2 >> 2] = i16;
       break;
      }
     }
    } while (0);
    if ((i63 | 0) == 0) {
     _WTFCrash();
    }
    HEAP32[i1 >> 2] = i63;
    do {
     if (!i57) {
      i62 = i74 | 0;
      i16 = (HEAP32[i62 >> 2] | 0) - 2 | 0;
      if ((i16 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i74);
       break;
      } else {
       HEAP32[i62 >> 2] = i16;
       break;
      }
     }
    } while (0);
    if (i75) {
     i52 = i35;
     break;
    }
    i57 = i74 | 0;
    i63 = (HEAP32[i57 >> 2] | 0) - 2 | 0;
    if ((i63 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i74);
     i52 = i35;
     break;
    } else {
     HEAP32[i57 >> 2] = i63;
     i52 = i35;
     break;
    }
   }
  }
 } while (0);
 i74 = HEAP32[i41 >> 2] | 0;
 do {
  if ((i74 | 0) != 0) {
   i41 = i74 | 0;
   i75 = (HEAP32[i41 >> 2] | 0) - 2 | 0;
   if ((i75 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i74);
    break;
   } else {
    HEAP32[i41 >> 2] = i75;
    break;
   }
  }
 } while (0);
 i74 = HEAP32[i40 >> 2] | 0;
 do {
  if ((i74 | 0) != 0) {
   i40 = i74 | 0;
   i75 = (HEAP32[i40 >> 2] | 0) - 2 | 0;
   if ((i75 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i74);
    break;
   } else {
    HEAP32[i40 >> 2] = i75;
    break;
   }
  }
 } while (0);
 if ((i52 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i74 = i52 | 0;
 i75 = (HEAP32[i74 >> 2] | 0) - 2 | 0;
 if ((i75 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i52);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i74 >> 2] = i75;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore9DOMWindow12createWindowERKN3WTF6StringERKNS1_12AtomicStringERKNS_14WindowFeaturesERS0_PNS_5FrameESD_PFvPS0_PvESF_(i1, i2, i3, i4, i5, i6, i7, i8, i9) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 var i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 616 | 0;
 i11 = i10 | 0;
 i12 = i10 + 8 | 0;
 i13 = i10 + 16 | 0;
 i14 = i10 + 24 | 0;
 i15 = i10 + 72 | 0;
 i16 = i10 + 80 | 0;
 i17 = i10 + 88 | 0;
 i18 = i10 + 96 | 0;
 i19 = i10 + 280 | 0;
 i20 = i10 + 288 | 0;
 i21 = i10 + 600 | 0;
 i22 = i10 + 608 | 0;
 i23 = i5 + 52 | 0;
 i24 = HEAP32[i23 >> 2] | 0;
 i25 = i2 | 0;
 i26 = HEAP32[i25 >> 2] | 0;
 do {
  if ((i26 | 0) == 0) {
   i27 = 3;
  } else {
   if ((HEAP32[i26 + 4 >> 2] | 0) == 0) {
    i27 = 3;
    break;
   }
   __ZNK7WebCore8Document11completeURLERKN3WTF6StringE(i14, HEAP32[i6 + 456 >> 2] | 0, i2);
  }
 } while (0);
 if ((i27 | 0) == 3) {
  __ZN7WebCore3URLC1ENS_18ParsedURLStringTagERKN3WTF6StringE(i14, 0, __ZN3WTF11emptyStringEv() | 0);
 }
 i2 = i14 | 0;
 i26 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i26 | 0) == 0) {
   i27 = 39;
  } else {
   if ((HEAP32[i26 + 4 >> 2] | 0) == 0) {
    i27 = 39;
    break;
   }
   if ((HEAP8[i14 + 4 | 0] & 1) != 0) {
    i27 = 39;
    break;
   }
   i28 = i26 | 0;
   i29 = HEAP32[i28 >> 2] | 0;
   i30 = i29 + 2 | 0;
   HEAP32[i28 >> 2] = i29 + 4;
   if ((i30 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i26);
    i31 = HEAP32[i28 >> 2] | 0;
   } else {
    HEAP32[i28 >> 2] = i30;
    i31 = i30;
   }
   i30 = i31 + 2 | 0;
   HEAP32[i28 >> 2] = i31 + 4;
   if ((i30 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i26);
   } else {
    HEAP32[i28 >> 2] = i30;
   }
   HEAP32[i13 >> 2] = H_BASE + 528;
   i30 = i13 + 4 | 0;
   HEAP32[i30 >> 2] = i26;
   i28 = (i26 | 0) == 0;
   if (!i28) {
    i29 = i26 | 0;
    HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 2;
   }
   __ZN3WTF13tryMakeStringINS_12StringAppendIPKcNS_6StringEEES3_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i12, i13, H_BASE + 496 | 0);
   i29 = i12 | 0;
   i32 = HEAP32[i29 >> 2] | 0;
   HEAP32[i29 >> 2] = 0;
   i29 = HEAP32[i30 >> 2] | 0;
   do {
    if ((i29 | 0) != 0) {
     i30 = i29 | 0;
     i33 = (HEAP32[i30 >> 2] | 0) - 2 | 0;
     if ((i33 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i29);
      break;
     } else {
      HEAP32[i30 >> 2] = i33;
      break;
     }
    }
   } while (0);
   if ((i32 | 0) == 0) {
    _WTFCrash();
   }
   i29 = i15 | 0;
   HEAP32[i29 >> 2] = i32;
   if ((HEAP32[i32 + 4 >> 2] | 0) == 0) {
    i34 = i32;
    i27 = 28;
   } else {
    i33 = HEAP32[i23 >> 2] | 0;
    do {
     if ((i33 | 0) == 0) {
      i35 = 0;
     } else {
      if ((HEAP32[(HEAP32[i33 + 456 >> 2] | 0) + 336 >> 2] | 0) != (i5 | 0)) {
       i35 = 0;
       break;
      }
      i30 = HEAP32[i33 + 32 >> 2] | 0;
      if ((i30 | 0) == 0) {
       i35 = 0;
       break;
      }
      i35 = HEAP32[i30 + 1148 >> 2] | 0;
     }
    } while (0);
    __ZN7WebCore11PageConsole10addMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringEmPNS_8DocumentE(i35, 1, 3, i15, 0, 0);
    i33 = HEAP32[i29 >> 2] | 0;
    if ((i33 | 0) != 0) {
     i34 = i33;
     i27 = 28;
    }
   }
   do {
    if ((i27 | 0) == 28) {
     i33 = i34 | 0;
     i32 = (HEAP32[i33 >> 2] | 0) - 2 | 0;
     if ((i32 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i34);
      break;
     } else {
      HEAP32[i33 >> 2] = i32;
      break;
     }
    }
   } while (0);
   do {
    if (!i28) {
     i29 = i26 | 0;
     i32 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
     if ((i32 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i26);
      break;
     } else {
      HEAP32[i29 >> 2] = i32;
      break;
     }
    }
   } while (0);
   i28 = i26 | 0;
   i32 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
   if ((i32 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i26);
   } else {
    HEAP32[i28 >> 2] = i32;
   }
   HEAP32[i1 >> 2] = 0;
  }
 } while (0);
 do {
  if ((i27 | 0) == 39) {
   i26 = HEAP32[(HEAP32[i6 + 456 >> 2] | 0) + 1944 >> 2] | 0;
   i34 = i6 + 80 | 0;
   __ZNK7WebCore11FrameLoader16outgoingReferrerEv(i17, i34);
   __ZN7WebCore14SecurityPolicy22generateReferrerHeaderENS_14ReferrerPolicyERKNS_3URLERKN3WTF6StringE(i16, i26, i14, i17);
   i26 = HEAP32[i17 >> 2] | 0;
   do {
    if ((i26 | 0) != 0) {
     i15 = i26 | 0;
     i35 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
     if ((i35 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i26);
      break;
     } else {
      HEAP32[i15 >> 2] = i35;
      break;
     }
    }
   } while (0);
   i26 = i18 | 0;
   i35 = HEAP32[i2 >> 2] | 0;
   HEAP32[i18 >> 2] = i35;
   if ((i35 | 0) != 0) {
    i15 = i35 | 0;
    HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 2;
   }
   i15 = HEAP8[i14 + 4 | 0] | 0;
   i35 = i18 + 4 | 0;
   HEAP8[i35] = HEAP8[i35] & -4 | i15 & 1 | i15 & 2;
   HEAP32[i18 + 8 >> 2] = HEAP32[i14 + 8 >> 2];
   HEAP32[i18 + 12 >> 2] = HEAP32[i14 + 12 >> 2];
   HEAP32[i18 + 16 >> 2] = HEAP32[i14 + 16 >> 2];
   HEAP32[i18 + 20 >> 2] = HEAP32[i14 + 20 >> 2];
   HEAP32[i18 + 24 >> 2] = HEAP32[i14 + 24 >> 2];
   HEAP32[i18 + 28 >> 2] = HEAP32[i14 + 28 >> 2];
   HEAP32[i18 + 32 >> 2] = HEAP32[i14 + 32 >> 2];
   HEAP32[i18 + 36 >> 2] = HEAP32[i14 + 36 >> 2];
   HEAP32[i18 + 40 >> 2] = HEAP32[i14 + 40 >> 2];
   HEAP32[i18 + 44 >> 2] = HEAP32[i14 + 44 >> 2];
   HEAP32[i18 + 48 >> 2] = 0;
   HEAPF64[i18 + 56 >> 3] = +HEAPF64[__ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE >> 3];
   i15 = i18 + 64 | 0;
   HEAP32[i15 >> 2] = 0;
   __ZN7WebCore3URL10invalidateEv(i15);
   HEAP32[i11 >> 2] = H_BASE + 376;
   __ZN3WTF6StringC1ENS_12ASCIILiteralE(i18 + 112 | 0, i11);
   __ZN7WebCore13HTTPHeaderMapC1Ev(i18 + 116 | 0);
   _memset(i18 + 136 | 0, 0, 16) | 0;
   HEAP8[i18 + 152 | 0] = 11;
   HEAP32[i18 + 156 >> 2] = 1;
   i15 = i18 + 160 | 0;
   i35 = i18 + 180 | 0;
   _memset(i15 | 0, 0, 19) | 0;
   HEAP32[i35 >> 2] = 15;
   __ZN7WebCore19ResourceRequestBase18setHTTPHeaderFieldEPKcRKN3WTF6StringE(i26, H_BASE + 384 | 0, i16);
   __ZNK7WebCore11FrameLoader14outgoingOriginEv(i19, i34);
   __ZN7WebCore11FrameLoader21addHTTPOriginIfNeededERNS_15ResourceRequestERKN3WTF6StringE(i18, i19);
   i23 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i23 | 0) != 0) {
     i12 = i23 | 0;
     i13 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
     if ((i13 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i23);
      break;
     } else {
      HEAP32[i12 >> 2] = i13;
      break;
     }
    }
   } while (0);
   i23 = i5 + 44 | 0;
   i34 = HEAP32[(HEAP32[i23 >> 2] | 0) - 156 + 168 >> 2] | 0;
   i13 = i20 | 0;
   HEAP32[i13 >> 2] = i34;
   if ((i34 | 0) != 0) {
    i12 = i34 | 0;
    tempValue = HEAP32[i12 >> 2] | 0, HEAP32[i12 >> 2] = tempValue + 1, tempValue;
   }
   i12 = i20 + 8 | 0;
   __ZN7WebCore19ResourceRequestBaseC2ERKS0_(i12 | 0, i26);
   i34 = HEAP32[i15 >> 2] | 0;
   HEAP32[i20 + 168 >> 2] = i34;
   if ((i34 | 0) != 0) {
    i31 = i34 | 0;
    HEAP32[i31 >> 2] = (HEAP32[i31 >> 2] | 0) + 2;
   }
   i31 = HEAP32[i18 + 164 >> 2] | 0;
   HEAP32[i20 + 172 >> 2] = i31;
   if ((i31 | 0) != 0) {
    i34 = i31 | 0;
    HEAP32[i34 >> 2] = (HEAP32[i34 >> 2] | 0) + 2;
   }
   i34 = HEAP32[i18 + 168 >> 2] | 0;
   HEAP32[i20 + 176 >> 2] = i34;
   if ((i34 | 0) != 0) {
    i31 = i34 | 0;
    HEAP32[i31 >> 2] = (HEAP32[i31 >> 2] | 0) + 2;
   }
   i31 = HEAP32[i18 + 172 >> 2] | 0;
   HEAP32[i20 + 180 >> 2] = i31;
   if ((i31 | 0) != 0) {
    i34 = i31 | 0;
    HEAP32[i34 >> 2] = (HEAP32[i34 >> 2] | 0) + 2;
   }
   HEAP8[i20 + 184 | 0] = HEAP8[i18 + 176 | 0] & 1;
   HEAP8[i20 + 185 | 0] = HEAP8[i18 + 177 | 0] & 1;
   HEAP8[i20 + 186 | 0] = HEAP8[i18 + 178 | 0] & 1;
   HEAP32[i20 + 188 >> 2] = HEAP32[i35 >> 2];
   i34 = i20 + 192 | 0;
   i31 = HEAP32[i3 >> 2] | 0;
   HEAP32[i34 >> 2] = i31;
   if ((i31 | 0) != 0) {
    i32 = i31 | 0;
    HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + 2;
   }
   HEAP8[i20 + 196 | 0] = 0;
   HEAP8[i20 + 197 | 0] = 0;
   i32 = i20 + 200 | 0;
   _memset(i32 | 0, 0, 16) | 0;
   __ZN7WebCore3URL10invalidateEv(i20 + 212 | 0);
   i31 = i20 + 260 | 0;
   HEAP32[i31 >> 2] = 0;
   __ZN7WebCore3URL10invalidateEv(i31);
   HEAP8[i20 + 308 | 0] = 0;
   __ZN7WebCore12createWindowEPNS_5FrameES1_RKNS_16FrameLoadRequestERKNS_14WindowFeaturesERb(i22, i24, i7, i20, i4, i21);
   i31 = i22 | 0;
   i28 = HEAP32[i31 >> 2] | 0;
   HEAP32[i31 >> 2] = 0;
   do {
    if ((i28 | 0) == 0) {
     HEAP32[i1 >> 2] = 0;
    } else {
     i31 = i28 + 80 | 0;
     __ZN7WebCore11FrameLoader9setOpenerEPNS_5FrameE(i31, i7);
     i29 = i28 + 32 | 0;
     __ZN7WebCore4Page14setOpenedByDOMEv(HEAP32[i29 >> 2] | 0);
     i33 = i28 + 456 | 0;
     i30 = i14 | 0;
     if (__ZN7WebCore9DOMWindow22isInsecureScriptAccessERS0_RKN3WTF6StringE(HEAP32[(HEAP32[i33 >> 2] | 0) + 336 >> 2] | 0, i5, i30) | 0) {
      HEAP32[i1 >> 2] = i28;
      break;
     }
     if ((i8 | 0) != 0) {
      FUNCTION_TABLE_vii[i8 & 3](HEAP32[(HEAP32[i33 >> 2] | 0) + 336 >> 2] | 0, i9);
     }
     do {
      if ((HEAP8[i21] & 1) == 0) {
       i33 = HEAP32[i25 >> 2] | 0;
       if ((i33 | 0) == 0) {
        break;
       }
       if ((HEAP32[i33 + 4 >> 2] | 0) == 0) {
        break;
       }
       i33 = (__ZN7WebCore16ScriptController21processingUserGestureEv() | 0) ^ 1;
       __ZN7WebCore19NavigationScheduler22scheduleLocationChangeEPNS_14SecurityOriginERKN3WTF6StringES6_bb(i28 + 376 | 0, HEAP32[(HEAP32[i23 >> 2] | 0) - 156 + 168 >> 2] | 0, i30, i16, i33, 0);
      } else {
       __ZN7WebCore11FrameLoader14changeLocationEPNS_14SecurityOriginERKNS_3URLERKN3WTF6StringEbbb(i31, HEAP32[(HEAP32[i23 >> 2] | 0) - 156 + 168 >> 2] | 0, i14, i16, 0, 0, 0);
      }
     } while (0);
     i31 = i1 | 0;
     if ((HEAP32[i29 >> 2] | 0) != 0) {
      HEAP32[i31 >> 2] = i28;
      break;
     }
     HEAP32[i31 >> 2] = 0;
     i31 = i28 + 4 | 0;
     i30 = i31 | 0;
     i33 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
     if ((i33 | 0) != 0) {
      HEAP32[i30 >> 2] = i33;
      break;
     }
     i33 = i31 - 4 | 0;
     if ((i33 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i33 >> 2] | 0) + 4 >> 2] & 63](i33);
    }
   } while (0);
   __ZN7WebCore14SubstituteDataD2Ev(i32);
   i28 = HEAP32[i34 >> 2] | 0;
   do {
    if ((i28 | 0) != 0) {
     i23 = i28 | 0;
     i35 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
     if ((i35 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i28);
      break;
     } else {
      HEAP32[i23 >> 2] = i35;
      break;
     }
    }
   } while (0);
   __ZN7WebCore15ResourceRequestD2Ev(i12);
   i28 = HEAP32[i13 >> 2] | 0;
   do {
    if ((i28 | 0) != 0) {
     i34 = i28 | 0;
     if (((tempValue = HEAP32[i34 >> 2] | 0, HEAP32[i34 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
      break;
     }
     __ZN7WebCore14SecurityOriginD2Ev(i28);
     __ZN3WTF8fastFreeEPv(i28);
    }
   } while (0);
   __ZN7WebCore15ResourceRequestD2Ev(i18);
   i28 = HEAP32[i16 >> 2] | 0;
   if ((i28 | 0) == 0) {
    break;
   }
   i13 = i28 | 0;
   i12 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i28);
    break;
   } else {
    HEAP32[i13 >> 2] = i12;
    break;
   }
  }
 } while (0);
 i16 = HEAP32[i2 >> 2] | 0;
 if ((i16 | 0) == 0) {
  STACKTOP = i10;
  return;
 }
 i2 = i16 | 0;
 i18 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
 if ((i18 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i16);
  STACKTOP = i10;
  return;
 } else {
  HEAP32[i2 >> 2] = i18;
  STACKTOP = i10;
  return;
 }
}
function __ZN7WebCore9DOMWindowD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i1 | 0;
 HEAP32[i7 >> 2] = H_BASE + 1688;
 HEAP32[i1 + 40 >> 2] = H_BASE + 1768;
 HEAP32[i1 + 48 >> 2] = H_BASE + 1788;
 if ((HEAP8[i1 + 77 | 0] & 1) == 0) {
  __ZN7WebCore9DOMWindow26willDestroyDocumentInFrameEv(i1);
 } else {
  __ZN7WebCore9DOMWindow22willDestroyCachedFrameEv(i1);
 }
 __ZN7WebCore9DOMWindow24resetDOMWindowPropertiesEv(i1);
 HEAP32[i6 >> 2] = i1;
 if (HEAP8[H_BASE + 1936 | 0] | 0) {
  i8 = HEAP32[H_BASE + 1952 >> 2] | 0;
 } else {
  i9 = __ZN3WTF10fastMallocEj(20) | 0;
  i10 = i9;
  _memset(i9 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 1952 >> 2] = i10;
  HEAP8[H_BASE + 1936 | 0] = 1;
  i8 = i10;
 }
 __ZN3WTF14HashCountedSetIPN7WebCore9DOMWindowENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE4findERKS3_(i4, i8, i6);
 i10 = HEAP32[i4 >> 2] | 0;
 i4 = i8 + 4 | 0;
 do {
  if ((i10 | 0) != ((HEAP32[i8 >> 2] | 0) + (HEAP32[i4 >> 2] << 3) | 0)) {
   HEAP32[i10 >> 2] = -1;
   i9 = i8 + 16 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
   i9 = i8 + 12 | 0;
   i11 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   HEAP32[i9 >> 2] = i11;
   i9 = HEAP32[i4 >> 2] | 0;
   if ((i11 * 6 & -1 | 0) < (i9 | 0) & (i9 | 0) > 8) {
    __ZN3WTF9HashTableIPN7WebCore9DOMWindowENS_12KeyValuePairIS3_jEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_jS9_NS_10HashTraitsIS3_EENSB_IjEEE18KeyValuePairTraitsESC_E6rehashEiPS5_(i8 | 0, (i9 | 0) / 2 & -1, 0) | 0;
   }
   i9 = HEAP32[(HEAP32[i6 >> 2] | 0) + 52 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   i11 = HEAP32[i9 + 32 >> 2] | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   __ZN7WebCore6Chrome23enableSuddenTerminationEv(HEAP32[i11 + 20 >> 2] | 0);
  }
 } while (0);
 HEAP32[i5 >> 2] = i1;
 if (HEAP8[H_BASE + 1928 | 0] | 0) {
  i12 = HEAP32[H_BASE + 1944 >> 2] | 0;
 } else {
  i6 = __ZN3WTF10fastMallocEj(20) | 0;
  i8 = i6;
  _memset(i6 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 1944 >> 2] = i8;
  HEAP8[H_BASE + 1928 | 0] = 1;
  i12 = i8;
 }
 __ZN3WTF14HashCountedSetIPN7WebCore9DOMWindowENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE4findERKS3_(i3, i12, i5);
 i8 = HEAP32[i3 >> 2] | 0;
 i3 = i12 + 4 | 0;
 do {
  if ((i8 | 0) != ((HEAP32[i12 >> 2] | 0) + (HEAP32[i3 >> 2] << 3) | 0)) {
   HEAP32[i8 >> 2] = -1;
   i6 = i12 + 16 | 0;
   HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
   i6 = i12 + 12 | 0;
   i4 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i4;
   i6 = HEAP32[i3 >> 2] | 0;
   if ((i4 * 6 & -1 | 0) < (i6 | 0) & (i6 | 0) > 8) {
    __ZN3WTF9HashTableIPN7WebCore9DOMWindowENS_12KeyValuePairIS3_jEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_jS9_NS_10HashTraitsIS3_EENSB_IjEEE18KeyValuePairTraitsESC_E6rehashEiPS5_(i12 | 0, (i6 | 0) / 2 & -1, 0) | 0;
   }
   i6 = HEAP32[(HEAP32[i5 >> 2] | 0) + 52 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   i4 = HEAP32[i6 + 32 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   __ZN7WebCore6Chrome23enableSuddenTerminationEv(HEAP32[i4 + 20 >> 2] | 0);
  }
 } while (0);
 i5 = HEAP32[i1 + 172 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i12 = i5 + 40 | 0;
   i3 = i12 | 0;
   i8 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i3 >> 2] = i8;
    break;
   }
   i8 = i12 - 40 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 44 >> 2] & 63](i8);
  }
 } while (0);
 i5 = HEAP32[i1 + 168 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 16 | 0;
   i12 = i8 | 0;
   i3 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i12 >> 2] = i3;
    break;
   }
   i3 = i8 - 16 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 24 >> 2] & 63](i3);
  }
 } while (0);
 i5 = HEAP32[i1 + 164 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 + 16 | 0;
   i8 = i3 | 0;
   i12 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) != 0) {
    HEAP32[i8 >> 2] = i12;
    break;
   }
   i12 = i3 - 16 | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 24 >> 2] & 63](i12);
  }
 } while (0);
 i5 = HEAP32[i1 + 156 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i12 = i5 | 0;
   i3 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i12 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i1 + 152 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 | 0;
   i12 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i3 >> 2] = i12;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i1 + 148 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i12 = i5 + 12 | 0;
   i3 = i12 | 0;
   i8 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i3 >> 2] = i8;
    break;
   }
   i8 = i12 - 12 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 24 >> 2] & 63](i8);
  }
 } while (0);
 i5 = HEAP32[i1 + 144 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 16 | 0;
   i12 = i8 | 0;
   i3 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i12 >> 2] = i3;
    break;
   }
   i3 = i8 - 16 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 24 >> 2] & 63](i3);
  }
 } while (0);
 i5 = HEAP32[i1 + 140 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 + 8 | 0;
   i8 = i3 | 0;
   i12 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) != 0) {
    HEAP32[i8 >> 2] = i12;
    break;
   }
   i12 = i3 - 8 | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 8 >> 2] & 63](i12);
  }
 } while (0);
 i5 = HEAP32[i1 + 136 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i12 = i5 + 16 | 0;
   i3 = i12 | 0;
   i8 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i3 >> 2] = i8;
    break;
   }
   i8 = i12 - 16 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 24 >> 2] & 63](i8);
  }
 } while (0);
 i5 = HEAP32[i1 + 132 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 16 | 0;
   i12 = i8 | 0;
   i3 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i12 >> 2] = i3;
    break;
   }
   i3 = i8 - 16 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 24 >> 2] & 63](i3);
  }
 } while (0);
 i5 = HEAP32[i1 + 128 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 + 16 | 0;
   i8 = i3 | 0;
   i12 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) != 0) {
    HEAP32[i8 >> 2] = i12;
    break;
   }
   i12 = i3 - 16 | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 24 >> 2] & 63](i12);
  }
 } while (0);
 i5 = HEAP32[i1 + 124 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i12 = i5 + 16 | 0;
   i3 = i12 | 0;
   i8 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i3 >> 2] = i8;
    break;
   }
   i8 = i12 - 16 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 24 >> 2] & 63](i8);
  }
 } while (0);
 i5 = HEAP32[i1 + 120 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 16 | 0;
   i12 = i8 | 0;
   i3 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i12 >> 2] = i3;
    break;
   }
   i3 = i8 - 16 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 24 >> 2] & 63](i3);
  }
 } while (0);
 i5 = HEAP32[i1 + 116 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 + 16 | 0;
   i8 = i3 | 0;
   i12 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) != 0) {
    HEAP32[i8 >> 2] = i12;
    break;
   }
   i12 = i3 - 16 | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 24 >> 2] & 63](i12);
  }
 } while (0);
 i5 = HEAP32[i1 + 112 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i12 = i5 + 16 | 0;
   i3 = i12 | 0;
   i8 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i3 >> 2] = i8;
    break;
   }
   i8 = i12 - 16 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 24 >> 2] & 63](i8);
  }
 } while (0);
 i5 = HEAP32[i1 + 108 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 8 | 0;
   i12 = i8 | 0;
   i3 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i12 >> 2] = i3;
    break;
   }
   i3 = i8 - 8 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] & 63](i3);
  }
 } while (0);
 i5 = HEAP32[i1 + 104 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 + 16 | 0;
   i8 = i3 | 0;
   i12 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) != 0) {
    HEAP32[i8 >> 2] = i12;
    break;
   }
   i12 = i3 - 16 | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 24 >> 2] & 63](i12);
  }
 } while (0);
 i5 = HEAP32[i1 + 100 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i12 = i5 + 16 | 0;
   i3 = i12 | 0;
   i8 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i3 >> 2] = i8;
    break;
   }
   i8 = i12 - 16 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 24 >> 2] & 63](i8);
  }
 } while (0);
 i5 = HEAP32[i1 + 80 >> 2] | 0;
 if ((i5 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i5);
 }
 i5 = HEAP32[i1 + 56 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i13 = i1 + 48 | 0;
  __ZN7WebCore24FrameDestructionObserverD2Ev(i13);
  i14 = i1 + 40 | 0;
  __ZN7WebCore26ContextDestructionObserverD2Ev(i14);
  HEAP32[i7 >> 2] = H_BASE + 1824;
  i15 = i1 + 4 | 0;
  __ZN7WebCore15EventTargetDataD1Ev(i15);
  i16 = i1 | 0;
  __ZN7WebCore11EventTargetD2Ev(i16);
  STACKTOP = i2;
  return;
 }
 i8 = HEAP32[i1 + 60 >> 2] | 0;
 if ((i8 | 0) > 0) {
  i12 = 0;
  while (1) {
   do {
    if ((HEAP32[i5 + (i12 << 3) >> 2] | 0) != -1) {
     i3 = HEAP32[i5 + (i12 << 3) + 4 >> 2] | 0;
     if ((i3 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 63](i3);
    }
   } while (0);
   i12 = i12 + 1 | 0;
   if ((i12 | 0) >= (i8 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i5);
 i13 = i1 + 48 | 0;
 __ZN7WebCore24FrameDestructionObserverD2Ev(i13);
 i14 = i1 + 40 | 0;
 __ZN7WebCore26ContextDestructionObserverD2Ev(i14);
 HEAP32[i7 >> 2] = H_BASE + 1824;
 i15 = i1 + 4 | 0;
 __ZN7WebCore15EventTargetDataD1Ev(i15);
 i16 = i1 | 0;
 __ZN7WebCore11EventTargetD2Ev(i16);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore9DOMWindowD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i1 | 0;
 HEAP32[i7 >> 2] = H_BASE + 1688;
 HEAP32[i1 + 40 >> 2] = H_BASE + 1768;
 HEAP32[i1 + 48 >> 2] = H_BASE + 1788;
 if ((HEAP8[i1 + 77 | 0] & 1) == 0) {
  __ZN7WebCore9DOMWindow26willDestroyDocumentInFrameEv(i1);
 } else {
  __ZN7WebCore9DOMWindow22willDestroyCachedFrameEv(i1);
 }
 __ZN7WebCore9DOMWindow24resetDOMWindowPropertiesEv(i1);
 HEAP32[i6 >> 2] = i1;
 if (HEAP8[H_BASE + 1936 | 0] | 0) {
  i8 = HEAP32[H_BASE + 1952 >> 2] | 0;
 } else {
  i9 = __ZN3WTF10fastMallocEj(20) | 0;
  i10 = i9;
  _memset(i9 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 1952 >> 2] = i10;
  HEAP8[H_BASE + 1936 | 0] = 1;
  i8 = i10;
 }
 __ZN3WTF14HashCountedSetIPN7WebCore9DOMWindowENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE4findERKS3_(i4, i8, i6);
 i10 = HEAP32[i4 >> 2] | 0;
 i4 = i8 + 4 | 0;
 do {
  if ((i10 | 0) != ((HEAP32[i8 >> 2] | 0) + (HEAP32[i4 >> 2] << 3) | 0)) {
   HEAP32[i10 >> 2] = -1;
   i9 = i8 + 16 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
   i9 = i8 + 12 | 0;
   i11 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   HEAP32[i9 >> 2] = i11;
   i9 = HEAP32[i4 >> 2] | 0;
   if ((i11 * 6 & -1 | 0) < (i9 | 0) & (i9 | 0) > 8) {
    __ZN3WTF9HashTableIPN7WebCore9DOMWindowENS_12KeyValuePairIS3_jEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_jS9_NS_10HashTraitsIS3_EENSB_IjEEE18KeyValuePairTraitsESC_E6rehashEiPS5_(i8 | 0, (i9 | 0) / 2 & -1, 0) | 0;
   }
   i9 = HEAP32[(HEAP32[i6 >> 2] | 0) + 52 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   i11 = HEAP32[i9 + 32 >> 2] | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   __ZN7WebCore6Chrome23enableSuddenTerminationEv(HEAP32[i11 + 20 >> 2] | 0);
  }
 } while (0);
 HEAP32[i5 >> 2] = i1;
 if (HEAP8[H_BASE + 1928 | 0] | 0) {
  i12 = HEAP32[H_BASE + 1944 >> 2] | 0;
 } else {
  i6 = __ZN3WTF10fastMallocEj(20) | 0;
  i8 = i6;
  _memset(i6 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 1944 >> 2] = i8;
  HEAP8[H_BASE + 1928 | 0] = 1;
  i12 = i8;
 }
 __ZN3WTF14HashCountedSetIPN7WebCore9DOMWindowENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE4findERKS3_(i3, i12, i5);
 i8 = HEAP32[i3 >> 2] | 0;
 i3 = i12 + 4 | 0;
 do {
  if ((i8 | 0) != ((HEAP32[i12 >> 2] | 0) + (HEAP32[i3 >> 2] << 3) | 0)) {
   HEAP32[i8 >> 2] = -1;
   i6 = i12 + 16 | 0;
   HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
   i6 = i12 + 12 | 0;
   i4 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i4;
   i6 = HEAP32[i3 >> 2] | 0;
   if ((i4 * 6 & -1 | 0) < (i6 | 0) & (i6 | 0) > 8) {
    __ZN3WTF9HashTableIPN7WebCore9DOMWindowENS_12KeyValuePairIS3_jEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_jS9_NS_10HashTraitsIS3_EENSB_IjEEE18KeyValuePairTraitsESC_E6rehashEiPS5_(i12 | 0, (i6 | 0) / 2 & -1, 0) | 0;
   }
   i6 = HEAP32[(HEAP32[i5 >> 2] | 0) + 52 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   i4 = HEAP32[i6 + 32 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   __ZN7WebCore6Chrome23enableSuddenTerminationEv(HEAP32[i4 + 20 >> 2] | 0);
  }
 } while (0);
 i5 = HEAP32[i1 + 172 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i12 = i5 + 40 | 0;
   i3 = i12 | 0;
   i8 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i3 >> 2] = i8;
    break;
   }
   i8 = i12 - 40 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 44 >> 2] & 63](i8);
  }
 } while (0);
 i5 = HEAP32[i1 + 168 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 16 | 0;
   i12 = i8 | 0;
   i3 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i12 >> 2] = i3;
    break;
   }
   i3 = i8 - 16 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 24 >> 2] & 63](i3);
  }
 } while (0);
 i5 = HEAP32[i1 + 164 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 + 16 | 0;
   i8 = i3 | 0;
   i12 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) != 0) {
    HEAP32[i8 >> 2] = i12;
    break;
   }
   i12 = i3 - 16 | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 24 >> 2] & 63](i12);
  }
 } while (0);
 i5 = HEAP32[i1 + 156 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i12 = i5 | 0;
   i3 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i12 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i1 + 152 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 | 0;
   i12 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i3 >> 2] = i12;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i1 + 148 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i12 = i5 + 12 | 0;
   i3 = i12 | 0;
   i8 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i3 >> 2] = i8;
    break;
   }
   i8 = i12 - 12 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 24 >> 2] & 63](i8);
  }
 } while (0);
 i5 = HEAP32[i1 + 144 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 16 | 0;
   i12 = i8 | 0;
   i3 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i12 >> 2] = i3;
    break;
   }
   i3 = i8 - 16 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 24 >> 2] & 63](i3);
  }
 } while (0);
 i5 = HEAP32[i1 + 140 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 + 8 | 0;
   i8 = i3 | 0;
   i12 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) != 0) {
    HEAP32[i8 >> 2] = i12;
    break;
   }
   i12 = i3 - 8 | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 8 >> 2] & 63](i12);
  }
 } while (0);
 i5 = HEAP32[i1 + 136 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i12 = i5 + 16 | 0;
   i3 = i12 | 0;
   i8 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i3 >> 2] = i8;
    break;
   }
   i8 = i12 - 16 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 24 >> 2] & 63](i8);
  }
 } while (0);
 i5 = HEAP32[i1 + 132 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 16 | 0;
   i12 = i8 | 0;
   i3 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i12 >> 2] = i3;
    break;
   }
   i3 = i8 - 16 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 24 >> 2] & 63](i3);
  }
 } while (0);
 i5 = HEAP32[i1 + 128 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 + 16 | 0;
   i8 = i3 | 0;
   i12 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) != 0) {
    HEAP32[i8 >> 2] = i12;
    break;
   }
   i12 = i3 - 16 | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 24 >> 2] & 63](i12);
  }
 } while (0);
 i5 = HEAP32[i1 + 124 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i12 = i5 + 16 | 0;
   i3 = i12 | 0;
   i8 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i3 >> 2] = i8;
    break;
   }
   i8 = i12 - 16 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 24 >> 2] & 63](i8);
  }
 } while (0);
 i5 = HEAP32[i1 + 120 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 16 | 0;
   i12 = i8 | 0;
   i3 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i12 >> 2] = i3;
    break;
   }
   i3 = i8 - 16 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 24 >> 2] & 63](i3);
  }
 } while (0);
 i5 = HEAP32[i1 + 116 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 + 16 | 0;
   i8 = i3 | 0;
   i12 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) != 0) {
    HEAP32[i8 >> 2] = i12;
    break;
   }
   i12 = i3 - 16 | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 24 >> 2] & 63](i12);
  }
 } while (0);
 i5 = HEAP32[i1 + 112 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i12 = i5 + 16 | 0;
   i3 = i12 | 0;
   i8 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i3 >> 2] = i8;
    break;
   }
   i8 = i12 - 16 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 24 >> 2] & 63](i8);
  }
 } while (0);
 i5 = HEAP32[i1 + 108 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 8 | 0;
   i12 = i8 | 0;
   i3 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i12 >> 2] = i3;
    break;
   }
   i3 = i8 - 8 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] & 63](i3);
  }
 } while (0);
 i5 = HEAP32[i1 + 104 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 + 16 | 0;
   i8 = i3 | 0;
   i12 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) != 0) {
    HEAP32[i8 >> 2] = i12;
    break;
   }
   i12 = i3 - 16 | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 24 >> 2] & 63](i12);
  }
 } while (0);
 i5 = HEAP32[i1 + 100 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i12 = i5 + 16 | 0;
   i3 = i12 | 0;
   i8 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i3 >> 2] = i8;
    break;
   }
   i8 = i12 - 16 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 24 >> 2] & 63](i8);
  }
 } while (0);
 i5 = HEAP32[i1 + 80 >> 2] | 0;
 if ((i5 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i5);
 }
 i5 = HEAP32[i1 + 56 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i13 = i1 + 48 | 0;
  __ZN7WebCore24FrameDestructionObserverD2Ev(i13);
  i14 = i1 + 40 | 0;
  __ZN7WebCore26ContextDestructionObserverD2Ev(i14);
  HEAP32[i7 >> 2] = H_BASE + 1824;
  i15 = i1 + 4 | 0;
  __ZN7WebCore15EventTargetDataD1Ev(i15);
  i16 = i1 | 0;
  __ZN7WebCore11EventTargetD2Ev(i16);
  STACKTOP = i2;
  return;
 }
 i8 = HEAP32[i1 + 60 >> 2] | 0;
 if ((i8 | 0) > 0) {
  i12 = 0;
  while (1) {
   do {
    if ((HEAP32[i5 + (i12 << 3) >> 2] | 0) != -1) {
     i3 = HEAP32[i5 + (i12 << 3) + 4 >> 2] | 0;
     if ((i3 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 63](i3);
    }
   } while (0);
   i12 = i12 + 1 | 0;
   if ((i12 | 0) >= (i8 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i5);
 i13 = i1 + 48 | 0;
 __ZN7WebCore24FrameDestructionObserverD2Ev(i13);
 i14 = i1 + 40 | 0;
 __ZN7WebCore26ContextDestructionObserverD2Ev(i14);
 HEAP32[i7 >> 2] = H_BASE + 1824;
 i15 = i1 + 4 | 0;
 __ZN7WebCore15EventTargetDataD1Ev(i15);
 i16 = i1 | 0;
 __ZN7WebCore11EventTargetD2Ev(i16);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore9DOMWindow35dispatchMessageEventWithOriginCheckEPNS_14SecurityOriginEN3WTF10PassRefPtrINS_5EventEEENS4_INS_15ScriptCallStackEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 32 | 0;
 i9 = i5 + 40 | 0;
 i10 = i5 + 48 | 0;
 i11 = i5 + 56 | 0;
 do {
  if ((i2 | 0) != 0) {
   i12 = i1 + 44 | 0;
   if (__ZNK7WebCore14SecurityOrigin20isSameSchemeHostPortEPKS0_(i2, HEAP32[(HEAP32[i12 >> 2] | 0) - 156 + 168 >> 2] | 0) | 0) {
    break;
   }
   __ZNK7WebCore14SecurityOrigin8toStringEv(i8, i2);
   i13 = i8 | 0;
   i14 = HEAP32[i13 >> 2] | 0;
   do {
    if ((i14 | 0) == 0) {
     i15 = 0;
     i16 = 1;
    } else {
     i17 = i14 | 0;
     i18 = HEAP32[i17 >> 2] | 0;
     i19 = i18 + 2 | 0;
     HEAP32[i17 >> 2] = i18 + 4;
     if ((i19 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i14);
      i20 = HEAP32[i17 >> 2] | 0;
     } else {
      HEAP32[i17 >> 2] = i19;
      i20 = i19;
     }
     i19 = i20 + 2 | 0;
     HEAP32[i17 >> 2] = i20 + 4;
     if ((i19 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i14);
      i15 = i14;
      i16 = 0;
      break;
     } else {
      HEAP32[i17 >> 2] = i19;
      i15 = i14;
      i16 = 0;
      break;
     }
    }
   } while (0);
   __ZNK7WebCore14SecurityOrigin8toStringEv(i9, HEAP32[(HEAP32[i12 >> 2] | 0) - 156 + 168 >> 2] | 0);
   i14 = (i15 | 0) == 0;
   if (!i14) {
    i19 = i15 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 2;
   }
   i19 = i9 | 0;
   i17 = HEAP32[i19 >> 2] | 0;
   i18 = (i17 | 0) == 0;
   if (!i18) {
    i21 = i17 | 0;
    HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 2;
   }
   if (!i14) {
    i21 = i15 | 0;
    HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 2;
   }
   do {
    if (!i18) {
     i21 = i17 | 0;
     i22 = HEAP32[i21 >> 2] | 0;
     HEAP32[i21 >> 2] = i22 + 2;
     if ((i22 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i17);
      break;
     } else {
      HEAP32[i21 >> 2] = i22;
      break;
     }
    }
   } while (0);
   if (!i14) {
    i12 = i15 | 0;
    i22 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
    if ((i22 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i15);
     i23 = HEAP32[i12 >> 2] | 0;
    } else {
     HEAP32[i12 >> 2] = i22;
     i23 = i22;
    }
    HEAP32[i12 >> 2] = i23 + 2;
   }
   if (!i18) {
    i12 = i17 | 0;
    HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
   }
   HEAP32[i7 >> 2] = H_BASE + 1152;
   i12 = i7 + 4 | 0;
   HEAP32[i12 >> 2] = i15;
   if (!i14) {
    i22 = i15 | 0;
    HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 2;
   }
   HEAP32[i7 + 8 >> 2] = H_BASE + 504;
   i22 = i7 + 12 | 0;
   HEAP32[i22 >> 2] = i17;
   do {
    if (i18) {
     HEAP32[i7 + 16 >> 2] = H_BASE + 368;
    } else {
     i21 = i17 | 0;
     i24 = HEAP32[i21 >> 2] | 0;
     HEAP32[i21 >> 2] = i24 + 2;
     HEAP32[i7 + 16 >> 2] = H_BASE + 368;
     if ((i24 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i17);
      break;
     } else {
      HEAP32[i21 >> 2] = i24;
      break;
     }
    }
   } while (0);
   do {
    if (!i14) {
     i24 = i15 | 0;
     i21 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
     if ((i21 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i15);
      break;
     } else {
      HEAP32[i24 >> 2] = i21;
      break;
     }
    }
   } while (0);
   __ZNK3WTF12StringAppendINS0_INS0_INS0_IPKcNS_6StringEEES2_EES3_EES2_EcvS3_Ev(i6, i7);
   i21 = HEAP32[i22 >> 2] | 0;
   do {
    if ((i21 | 0) != 0) {
     i24 = i21 | 0;
     i25 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
     if ((i25 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i21);
      break;
     } else {
      HEAP32[i24 >> 2] = i25;
      break;
     }
    }
   } while (0);
   i21 = HEAP32[i12 >> 2] | 0;
   do {
    if ((i21 | 0) != 0) {
     i22 = i21 | 0;
     i25 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
     if ((i25 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i21);
      break;
     } else {
      HEAP32[i22 >> 2] = i25;
      break;
     }
    }
   } while (0);
   do {
    if (!i18) {
     i21 = i17 | 0;
     i12 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
     if ((i12 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i17);
      break;
     } else {
      HEAP32[i21 >> 2] = i12;
      break;
     }
    }
   } while (0);
   do {
    if (!i14) {
     i17 = i15 | 0;
     i18 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
     if ((i18 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i15);
      break;
     } else {
      HEAP32[i17 >> 2] = i18;
      break;
     }
    }
   } while (0);
   i18 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i18 | 0) != 0) {
     i17 = i18 | 0;
     i12 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
     if ((i12 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i18);
      break;
     } else {
      HEAP32[i17 >> 2] = i12;
      break;
     }
    }
   } while (0);
   do {
    if (!i14) {
     i18 = i15 | 0;
     i19 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
     if ((i19 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i15);
      break;
     } else {
      HEAP32[i18 >> 2] = i19;
      break;
     }
    }
   } while (0);
   do {
    if (!i16) {
     i14 = i15 | 0;
     i19 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
     if ((i19 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i15);
      break;
     } else {
      HEAP32[i14 >> 2] = i19;
      break;
     }
    }
   } while (0);
   i19 = HEAP32[i13 >> 2] | 0;
   do {
    if ((i19 | 0) != 0) {
     i14 = i19 | 0;
     i18 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
     if ((i18 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i19);
      break;
     } else {
      HEAP32[i14 >> 2] = i18;
      break;
     }
    }
   } while (0);
   i19 = HEAP32[i1 + 52 >> 2] | 0;
   do {
    if ((i19 | 0) == 0) {
     i26 = 0;
    } else {
     if ((HEAP32[(HEAP32[i19 + 456 >> 2] | 0) + 336 >> 2] | 0) != (i1 | 0)) {
      i26 = 0;
      break;
     }
     i13 = HEAP32[i19 + 32 >> 2] | 0;
     if ((i13 | 0) == 0) {
      i26 = 0;
      break;
     }
     i26 = HEAP32[i13 + 1148 >> 2] | 0;
    }
   } while (0);
   i19 = i10 | 0;
   i13 = i4 | 0;
   i18 = HEAP32[i13 >> 2] | 0;
   HEAP32[i13 >> 2] = 0;
   HEAP32[i19 >> 2] = i18;
   __ZN7WebCore11PageConsole10addMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringENS3_10PassRefPtrINS_15ScriptCallStackEEE(i26, 8, 3, i6, i10);
   i18 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i18 | 0) != 0) {
     i19 = i18 | 0;
     i13 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
     if ((i13 | 0) == 0) {
      __ZN7WebCore15ScriptCallStackD1Ev(i18);
      __ZN3WTF8fastFreeEPv(i18);
      break;
     } else {
      HEAP32[i19 >> 2] = i13;
      break;
     }
    }
   } while (0);
   i18 = HEAP32[i6 >> 2] | 0;
   if ((i18 | 0) == 0) {
    STACKTOP = i5;
    return;
   }
   i13 = i18 | 0;
   i19 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i19 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i18);
    STACKTOP = i5;
    return;
   } else {
    HEAP32[i13 >> 2] = i19;
    STACKTOP = i5;
    return;
   }
  }
 } while (0);
 i6 = i11 | 0;
 i10 = i3 | 0;
 i3 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i6 >> 2] = i3;
 __ZN7WebCore11EventTarget13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE(i1 | 0, i11) | 0;
 i11 = HEAP32[i6 >> 2] | 0;
 if ((i11 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i6 = i11 + 8 | 0;
 i11 = i6 | 0;
 i1 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i11 >> 2] = i1;
  STACKTOP = i5;
  return;
 }
 i1 = i6 - 8 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 63](i1);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore9DOMWindow30dispatchAllPendingUnloadEventsEv() {
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i2 = i1 | 0;
 i3 = i1 + 8 | 0;
 i4 = i1 + 16 | 0;
 i5 = i1 + 24 | 0;
 if (HEAP8[H_BASE + 1936 | 0] | 0) {
  i6 = HEAP32[H_BASE + 1952 >> 2] | 0;
 } else {
  i7 = __ZN3WTF10fastMallocEj(20) | 0;
  i8 = i7;
  _memset(i7 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 1952 >> 2] = i8;
  HEAP8[H_BASE + 1936 | 0] = 1;
  i6 = i8;
 }
 i8 = i6 + 12 | 0;
 i7 = HEAP32[i8 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i1;
  return;
 }
 if (HEAP8[H_BASE + 1672 | 0] | 0) {
  STACKTOP = i1;
  return;
 }
 if (i7 >>> 0 > 1073741823 >>> 0) {
  _WTFCrash();
 }
 i9 = __ZN3WTF10fastMallocEj(__ZN3WTF18fastMallocGoodSizeEj(i7 << 2) | 0) | 0;
 i7 = i9;
 i10 = i6 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 i12 = HEAP32[i6 + 4 >> 2] | 0;
 i13 = i11 + (i12 << 3) | 0;
 L14 : do {
  if ((HEAP32[i8 >> 2] | 0) == 0) {
   i14 = 51;
  } else {
   L16 : do {
    if ((i12 | 0) == 0) {
     i15 = i11;
    } else {
     i16 = i11;
     while (1) {
      i17 = HEAP32[i16 >> 2] | 0;
      if (!((i17 | 0) == (-1 | 0) | (i17 | 0) == 0)) {
       i15 = i16;
       break L16;
      }
      i17 = i16 + 8 | 0;
      if ((i17 | 0) == (i13 | 0)) {
       i14 = 51;
       break L14;
      } else {
       i16 = i17;
      }
     }
    }
   } while (0);
   if ((i15 | 0) == (i13 | 0)) {
    i14 = 51;
    break;
   } else {
    i18 = 0;
    i19 = i15;
   }
   L21 : while (1) {
    i16 = HEAP32[i19 >> 2] | 0;
    HEAP32[i7 + (i18 << 2) >> 2] = i16;
    i17 = i16 + 36 | 0;
    HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
    i20 = i18 + 1 | 0;
    i17 = i19 + 8 | 0;
    if ((i17 | 0) == (i13 | 0)) {
     break;
    } else {
     i21 = i17;
    }
    while (1) {
     i17 = HEAP32[i21 >> 2] | 0;
     if (!((i17 | 0) == (-1 | 0) | (i17 | 0) == 0)) {
      break;
     }
     i17 = i21 + 8 | 0;
     if ((i17 | 0) == (i13 | 0)) {
      break L21;
     } else {
      i21 = i17;
     }
    }
    if ((i21 | 0) == (i13 | 0)) {
     break;
    } else {
     i18 = i20;
     i19 = i21;
    }
   }
   i17 = (i20 | 0) == 0;
   if (i17) {
    i14 = 51;
    break;
   }
   i16 = i6 + 8 | 0;
   i22 = i2 | 0;
   i23 = i3 | 0;
   i24 = i4 | 0;
   i25 = i5 | 0;
   i26 = 0;
   while (1) {
    i27 = HEAP32[i7 + (i26 << 2) >> 2] | 0;
    i28 = HEAP32[i10 >> 2] | 0;
    L31 : do {
     if ((i28 | 0) != 0) {
      i29 = HEAP32[i16 >> 2] | 0;
      i30 = i27;
      i31 = i30 + ~(i30 << 15) | 0;
      i30 = (i31 >>> 10 ^ i31) * 9 & -1;
      i31 = i30 >>> 6 ^ i30;
      i30 = i31 + ~(i31 << 11) | 0;
      i31 = i30 >>> 16 ^ i30;
      i30 = i29 & i31;
      i32 = i28 + (i30 << 3) | 0;
      i33 = HEAP32[i32 >> 2] | 0;
      if ((i33 | 0) == (i27 | 0)) {
       i34 = i32;
      } else {
       i32 = (i31 >>> 23) + ~i31 | 0;
       i31 = i32 << 12 ^ i32;
       i32 = i31 >>> 7 ^ i31;
       i31 = i32 << 2 ^ i32;
       i32 = i31 >>> 20 ^ i31 | 1;
       i31 = 0;
       i35 = i30;
       i30 = i33;
       while (1) {
        if ((i30 | 0) == 0) {
         break L31;
        }
        i33 = (i31 | 0) == 0 ? i32 : i31;
        i36 = i33 + i35 & i29;
        i37 = i28 + (i36 << 3) | 0;
        i38 = HEAP32[i37 >> 2] | 0;
        if ((i38 | 0) == (i27 | 0)) {
         i34 = i37;
         break;
        } else {
         i31 = i33;
         i35 = i36;
         i30 = i38;
        }
       }
      }
      if ((i34 | 0) == 0) {
       break;
      }
      i30 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 288 | 0;
      i35 = __ZN3WTF10fastMallocEj(56) | 0;
      __ZN7WebCore19PageTransitionEventC1ERKN3WTF12AtomicStringEb(i35, i30, 0);
      HEAP32[i22 >> 2] = i35;
      i35 = i27 + 44 | 0;
      i30 = HEAP32[i35 >> 2] | 0;
      do {
       if ((i30 | 0) == 0) {
        HEAP32[i23 >> 2] = 0;
       } else {
        i31 = i30 - 156 + 68 | 0;
        i29 = i31;
        HEAP32[i23 >> 2] = i29;
        if ((i31 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i31 >> 2] | 0) + 56 >> 2] & 63](i29);
       }
      } while (0);
      __ZN7WebCore9DOMWindow13dispatchEventEN3WTF10PassRefPtrINS_5EventEEENS2_INS_11EventTargetEEE(i27, i2, i3) | 0;
      i30 = HEAP32[i23 >> 2] | 0;
      if ((i30 | 0) != 0) {
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i30 >> 2] | 0) + 60 >> 2] & 63](i30);
      }
      i30 = HEAP32[i22 >> 2] | 0;
      do {
       if ((i30 | 0) != 0) {
        i29 = i30 + 8 | 0;
        i31 = i29 | 0;
        i32 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
        if ((i32 | 0) != 0) {
         HEAP32[i31 >> 2] = i32;
         break;
        }
        i32 = i29 - 8 | 0;
        if ((i32 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i32 >> 2] | 0) + 4 >> 2] & 63](i32);
       }
      } while (0);
      i30 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 348 | 0;
      i32 = __ZN3WTF10fastMallocEj(56) | 0;
      __ZN7WebCore5EventC1ERKN3WTF12AtomicStringEbb(i32, i30, 0, 0);
      HEAP32[i24 >> 2] = i32;
      i32 = HEAP32[i35 >> 2] | 0;
      do {
       if ((i32 | 0) == 0) {
        HEAP32[i25 >> 2] = 0;
       } else {
        i30 = i32 - 156 + 68 | 0;
        i29 = i30;
        HEAP32[i25 >> 2] = i29;
        if ((i30 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i30 >> 2] | 0) + 56 >> 2] & 63](i29);
       }
      } while (0);
      __ZN7WebCore9DOMWindow13dispatchEventEN3WTF10PassRefPtrINS_5EventEEENS2_INS_11EventTargetEEE(i27, i4, i5) | 0;
      i32 = HEAP32[i25 >> 2] | 0;
      if ((i32 | 0) != 0) {
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i32 >> 2] | 0) + 60 >> 2] & 63](i32);
      }
      i32 = HEAP32[i24 >> 2] | 0;
      do {
       if ((i32 | 0) != 0) {
        i35 = i32 + 8 | 0;
        i29 = i35 | 0;
        i30 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
        if ((i30 | 0) != 0) {
         HEAP32[i29 >> 2] = i30;
         break;
        }
        i30 = i35 - 8 | 0;
        if ((i30 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i30 >> 2] | 0) + 4 >> 2] & 63](i30);
       }
      } while (0);
      i32 = HEAP32[i27 + 52 >> 2] | 0;
      if ((i32 | 0) == 0) {
       break;
      }
      i30 = HEAP32[i32 + 32 >> 2] | 0;
      if ((i30 | 0) == 0) {
       break;
      }
      __ZN7WebCore6Chrome23enableSuddenTerminationEv(HEAP32[i30 + 20 >> 2] | 0);
     }
    } while (0);
    i26 = i26 + 1 | 0;
    if (i26 >>> 0 >= i20 >>> 0) {
     break;
    }
   }
   HEAP8[H_BASE + 1672 | 0] = 1;
   if (i17) {
    break;
   }
   i26 = i7 + (i20 << 2) | 0;
   i24 = i7;
   while (1) {
    i25 = (HEAP32[i24 >> 2] | 0) + 36 | 0;
    i22 = i25 | 0;
    i23 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
    do {
     if ((i23 | 0) == 0) {
      i16 = i25 - 36 | 0;
      if ((i16 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 44 >> 2] & 63](i16);
     } else {
      HEAP32[i22 >> 2] = i23;
     }
    } while (0);
    i24 = i24 + 4 | 0;
    if ((i24 | 0) == (i26 | 0)) {
     break;
    }
   }
  }
 } while (0);
 if ((i14 | 0) == 51) {
  HEAP8[H_BASE + 1672 | 0] = 1;
 }
 if ((i9 | 0) == 0) {
  STACKTOP = i1;
  return;
 }
 __ZN3WTF8fastFreeEPv(i9);
 STACKTOP = i1;
 return;
}
function __ZN7WebCore9DOMWindow4openERKN3WTF6StringERKNS1_12AtomicStringES4_RS0_S8_(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 120 | 0;
 i9 = i8 | 0;
 i10 = i8 + 48 | 0;
 i11 = i8 + 56 | 0;
 i12 = i8 + 112 | 0;
 i13 = i2 + 52 | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   if ((HEAP32[(HEAP32[i14 + 456 >> 2] | 0) + 336 >> 2] | 0) != (i2 | 0)) {
    break;
   }
   i15 = HEAP32[i6 + 44 >> 2] | 0;
   do {
    if ((i15 | 0) != 0) {
     i16 = i15 - 156 + 68 | 0;
     i17 = i16;
     if ((i16 | 0) == 0) {
      break;
     }
     i18 = HEAP32[i7 + 52 >> 2] | 0;
     if ((i18 | 0) == 0) {
      HEAP32[i1 >> 2] = 0;
      STACKTOP = i8;
      return;
     }
     L11 : do {
      if (!(__ZN7WebCore16ScriptController21processingUserGestureEv() | 0)) {
       if ((HEAP8[(HEAP32[i18 + 36 >> 2] | 0) + 186 | 0] & 1) != 0) {
        break;
       }
       i19 = HEAP32[i4 >> 2] | 0;
       do {
        if ((i19 | 0) != 0) {
         if ((HEAP32[i19 + 4 >> 2] | 0) == 0) {
          break;
         }
         if ((__ZNK7WebCore9FrameTree4findERKN3WTF12AtomicStringE((HEAP32[i13 >> 2] | 0) + 40 | 0, i4) | 0) != 0) {
          break L11;
         }
        }
       } while (0);
       HEAP32[i1 >> 2] = 0;
       STACKTOP = i8;
       return;
      }
     } while (0);
     i19 = i4 | 0;
     do {
      if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i19 >> 2] | 0, H_BASE + 488 | 0) | 0) {
       i20 = __ZNK7WebCore9FrameTree3topEv((HEAP32[i13 >> 2] | 0) + 40 | 0) | 0;
       i21 = 20;
      } else {
       if (!(__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i19 >> 2] | 0, H_BASE + 480 | 0) | 0)) {
        i21 = 40;
        break;
       }
       i22 = __ZNK7WebCore9FrameTree6parentEv((HEAP32[i13 >> 2] | 0) + 40 | 0) | 0;
       if ((i22 | 0) != 0) {
        i23 = i22;
        break;
       }
       i20 = HEAP32[i13 >> 2] | 0;
       i21 = 20;
      }
     } while (0);
     if ((i21 | 0) == 20) {
      if ((i20 | 0) == 0) {
       i21 = 40;
      } else {
       i23 = i20;
      }
     }
     if ((i21 | 0) == 40) {
      __ZN7WebCore14WindowFeaturesC1ERKN3WTF6StringE(i11, i5);
      __ZN7WebCore9DOMWindow12createWindowERKN3WTF6StringERKNS1_12AtomicStringERKNS_14WindowFeaturesERS0_PNS_5FrameESD_PFvPS0_PvESF_(i12, i3, i4, i11, i6, i18, HEAP32[i13 >> 2] | 0, 0, 0);
      i19 = i12 | 0;
      i22 = HEAP32[i19 >> 2] | 0;
      HEAP32[i19 >> 2] = 0;
      do {
       if ((i22 | 0) == 0) {
        HEAP32[i1 >> 2] = 0;
       } else {
        i19 = HEAP32[(HEAP32[i22 + 456 >> 2] | 0) + 336 >> 2] | 0;
        HEAP32[i1 >> 2] = i19;
        if ((i19 | 0) != 0) {
         i24 = i19 + 36 | 0;
         HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 1;
        }
        i24 = i22 + 4 | 0;
        i19 = i24 | 0;
        i25 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
        if ((i25 | 0) != 0) {
         HEAP32[i19 >> 2] = i25;
         break;
        }
        i25 = i24 - 4 | 0;
        if ((i25 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i25 >> 2] | 0) + 4 >> 2] & 63](i25);
       }
      } while (0);
      i22 = i11 + 48 | 0;
      i25 = HEAP32[i22 >> 2] | 0;
      i24 = i11 + 40 | 0;
      if ((i25 | 0) != 0) {
       i19 = HEAP32[i24 >> 2] | 0;
       i26 = i19 + (i25 << 2) | 0;
       i25 = i19;
       while (1) {
        i19 = HEAP32[i25 >> 2] | 0;
        do {
         if ((i19 | 0) != 0) {
          i27 = i19 | 0;
          i28 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
          if ((i28 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i19);
           break;
          } else {
           HEAP32[i27 >> 2] = i28;
           break;
          }
         }
        } while (0);
        i25 = i25 + 4 | 0;
        if ((i25 | 0) == (i26 | 0)) {
         break;
        }
       }
       HEAP32[i22 >> 2] = 0;
      }
      i26 = HEAP32[i24 >> 2] | 0;
      if ((i26 | 0) == 0) {
       STACKTOP = i8;
       return;
      }
      HEAP32[i24 >> 2] = 0;
      HEAP32[i11 + 44 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i26);
      STACKTOP = i8;
      return;
     }
     if (!(__ZN7WebCore8Document11canNavigateEPNS_5FrameE(i17, i23) | 0)) {
      HEAP32[i1 >> 2] = 0;
      STACKTOP = i8;
      return;
     }
     __ZNK7WebCore8Document11completeURLERKN3WTF6StringE(i9, HEAP32[i18 + 456 >> 2] | 0, i3);
     i26 = i23 + 456 | 0;
     i25 = i9 | 0;
     L61 : do {
      if (__ZN7WebCore9DOMWindow22isInsecureScriptAccessERS0_RKN3WTF6StringE(HEAP32[(HEAP32[i26 >> 2] | 0) + 336 >> 2] | 0, i6, i25) | 0) {
       i19 = HEAP32[(HEAP32[i26 >> 2] | 0) + 336 >> 2] | 0;
       HEAP32[i1 >> 2] = i19;
       if ((i19 | 0) == 0) {
        break;
       }
       i28 = i19 + 36 | 0;
       HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 1;
      } else {
       i28 = HEAP32[i3 >> 2] | 0;
       do {
        if ((i28 | 0) != 0) {
         if ((HEAP32[i28 + 4 >> 2] | 0) == 0) {
          break;
         }
         i19 = (__ZN7WebCore16ScriptController21processingUserGestureEv() | 0) ^ 1;
         i27 = HEAP32[i16 + 100 >> 2] | 0;
         __ZNK7WebCore11FrameLoader16outgoingReferrerEv(i10, i18 + 80 | 0);
         __ZN7WebCore19NavigationScheduler22scheduleLocationChangeEPNS_14SecurityOriginERKN3WTF6StringES6_bb(i23 + 376 | 0, i27, i25, i10, i19, 0);
         i19 = HEAP32[i10 >> 2] | 0;
         do {
          if ((i19 | 0) != 0) {
           i27 = i19 | 0;
           i29 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
           if ((i29 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i19);
            break;
           } else {
            HEAP32[i27 >> 2] = i29;
            break;
           }
          }
         } while (0);
         i19 = HEAP32[(HEAP32[i26 >> 2] | 0) + 336 >> 2] | 0;
         HEAP32[i1 >> 2] = i19;
         if ((i19 | 0) == 0) {
          break L61;
         }
         i29 = i19 + 36 | 0;
         HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 1;
         break L61;
        }
       } while (0);
       i28 = HEAP32[(HEAP32[i26 >> 2] | 0) + 336 >> 2] | 0;
       HEAP32[i1 >> 2] = i28;
       if ((i28 | 0) == 0) {
        break;
       }
       i29 = i28 + 36 | 0;
       HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 1;
      }
     } while (0);
     i26 = HEAP32[i9 >> 2] | 0;
     if ((i26 | 0) == 0) {
      STACKTOP = i8;
      return;
     }
     i25 = i26 | 0;
     i18 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
     if ((i18 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i26);
      STACKTOP = i8;
      return;
     } else {
      HEAP32[i25 >> 2] = i18;
      STACKTOP = i8;
      return;
     }
    }
   } while (0);
   HEAP32[i1 >> 2] = 0;
   STACKTOP = i8;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 STACKTOP = i8;
 return;
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
function __ZNK7WebCore9DOMWindow18getMatchedCSSRulesEPNS_7ElementERKN3WTF6StringEb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 i11 = i6 + 40 | 0;
 i12 = i2 + 52 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   if ((HEAP32[(HEAP32[i13 + 456 >> 2] | 0) + 336 >> 2] | 0) != (i2 | 0)) {
    break;
   }
   i14 = i4 | 0;
   i15 = HEAP32[i14 >> 2] | 0;
   do {
    if ((i15 | 0) == 0) {
     i16 = 0;
    } else {
     i17 = HEAP32[i15 + 4 >> 2] | 0;
     if ((i17 | 0) == 0) {
      i16 = 0;
      break;
     }
     i18 = (HEAP32[i15 + 16 >> 2] & 32 | 0) == 0;
     i19 = i15 + 8 | 0;
     if (i18) {
      i20 = HEAP32[i19 >> 2] | 0;
      i21 = HEAP16[i20 >> 1] | 0;
      i22 = i20;
      i23 = i20;
     } else {
      i20 = HEAP32[i19 >> 2] | 0;
      i21 = HEAPU8[i20] | 0;
      i22 = i20;
      i23 = i20;
     }
     if (i21 << 16 >> 16 != 58) {
      i16 = 0;
      break;
     }
     do {
      if (i17 >>> 0 > 1 >>> 0) {
       if (i18) {
        i24 = HEAP16[i22 + 2 >> 1] | 0;
        break;
       } else {
        i24 = HEAPU8[i23 + 1 | 0] | 0;
        break;
       }
      } else {
       i24 = 0;
      }
     } while (0);
     i16 = i24 << 16 >> 16 == 58 ? 2 : 1;
    }
   } while (0);
   __ZNK3WTF6String9substringEjj(i9, i4, i16, -1);
   i15 = i9 | 0;
   i18 = HEAP32[i15 >> 2] | 0;
   do {
    if ((i18 | 0) == 0) {
     i17 = i7 | 0;
     HEAP32[i17 >> 2] = 0;
     i25 = i17;
    } else {
     if ((HEAP32[i18 + 16 >> 2] & 16 | 0) == 0) {
      __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i7, i18);
      i25 = i7 | 0;
      break;
     } else {
      i17 = i7 | 0;
      HEAP32[i17 >> 2] = i18;
      i20 = i18 | 0;
      HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 2;
      i25 = i17;
      break;
     }
    }
   } while (0);
   i18 = i8 | 0;
   HEAP32[i18 >> 2] = HEAP32[i25 >> 2];
   i17 = __ZN7WebCore11CSSSelector15parsePseudoTypeERKN3WTF12AtomicStringE(i8) | 0;
   i20 = HEAP32[i18 >> 2] | 0;
   do {
    if ((i20 | 0) != 0) {
     i18 = i20 | 0;
     i19 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
     if ((i19 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i20);
      break;
     } else {
      HEAP32[i18 >> 2] = i19;
      break;
     }
    }
   } while (0);
   i20 = HEAP32[i15 >> 2] | 0;
   do {
    if ((i20 | 0) != 0) {
     i19 = i20 | 0;
     i18 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
     if ((i18 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i20);
      break;
     } else {
      HEAP32[i19 >> 2] = i18;
      break;
     }
    }
   } while (0);
   do {
    if ((i17 | 0) == 1) {
     i20 = HEAP32[i14 >> 2] | 0;
     if ((i20 | 0) == 0) {
      break;
     }
     if ((HEAP32[i20 + 4 >> 2] | 0) == 0) {
      break;
     }
     HEAP32[i1 >> 2] = 0;
     STACKTOP = i6;
     return;
    }
   } while (0);
   i14 = i5 ? 4 : 6;
   i20 = (HEAP8[(HEAP32[(HEAP32[i12 >> 2] | 0) + 36 >> 2] | 0) + 183 | 0] & 32) != 0 ? i14 | 16 : i14;
   i14 = __ZN7WebCore11CSSSelector8pseudoIdENS0_10PseudoTypeE(i17) | 0;
   i15 = HEAP32[(HEAP32[i12 >> 2] | 0) + 456 >> 2] | 0;
   i18 = i15 + 320 | 0;
   i19 = HEAP32[i18 >> 2] | 0;
   if ((i19 | 0) == 0) {
    __ZN7WebCore8Document19createStyleResolverEv(i15);
    i26 = HEAP32[i18 >> 2] | 0;
   } else {
    i26 = i19;
   }
   __ZN7WebCore13StyleResolver26pseudoStyleRulesForElementEPNS_7ElementENS_8PseudoIdEj(i10, i26, i3, i14, i20);
   i20 = i10 + 8 | 0;
   do {
    if ((HEAP32[i20 >> 2] | 0) == 0) {
     HEAP32[i1 >> 2] = 0;
     i27 = i10 | 0;
    } else {
     i14 = __ZN3WTF10fastMallocEj(20) | 0;
     __ZN7WebCore17StaticCSSRuleListC1Ev(i14);
     if ((HEAP32[i20 >> 2] | 0) == 0) {
      HEAP32[i1 >> 2] = i14;
      i27 = i10 | 0;
      break;
     }
     i19 = i14 + 4 | 0;
     i18 = i10 | 0;
     i15 = i14 + 12 | 0;
     i28 = i14 + 8 | 0;
     i29 = i19;
     i30 = i19;
     i19 = i11 | 0;
     i31 = 0;
     while (1) {
      __ZNK7WebCore13StyleRuleBase18createCSSOMWrapperEPNS_13CSSStyleSheetE(i11, HEAP32[(HEAP32[i18 >> 2] | 0) + (i31 << 2) >> 2] | 0, 0);
      i32 = HEAP32[i15 >> 2] | 0;
      if ((i32 | 0) == (HEAP32[i28 >> 2] | 0)) {
       __ZN3WTF6VectorINS_6RefPtrIN7WebCore7CSSRuleEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i29, i32 + 1 | 0);
       i33 = (HEAP32[i30 >> 2] | 0) + (HEAP32[i15 >> 2] << 2) | 0;
       i34 = HEAP32[i19 >> 2] | 0;
       HEAP32[i19 >> 2] = 0;
       HEAP32[i33 >> 2] = i34;
      } else {
       i34 = (HEAP32[i30 >> 2] | 0) + (i32 << 2) | 0;
       i32 = HEAP32[i19 >> 2] | 0;
       HEAP32[i19 >> 2] = 0;
       HEAP32[i34 >> 2] = i32;
      }
      HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
      i32 = HEAP32[i19 >> 2] | 0;
      do {
       if ((i32 | 0) != 0) {
        i34 = i32 + 4 | 0;
        i33 = i34 | 0;
        i35 = (HEAP32[i33 >> 2] | 0) - 1 | 0;
        if ((i35 | 0) != 0) {
         HEAP32[i33 >> 2] = i35;
         break;
        }
        i35 = i34 - 4 | 0;
        if ((i35 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i35 >> 2] | 0) + 4 >> 2] & 63](i35);
       }
      } while (0);
      i31 = i31 + 1 | 0;
      i36 = HEAP32[i20 >> 2] | 0;
      if (i31 >>> 0 >= i36 >>> 0) {
       break;
      }
     }
     HEAP32[i1 >> 2] = i14;
     i31 = i10 | 0;
     if ((i36 | 0) == 0) {
      i27 = i31;
      break;
     }
     i19 = HEAP32[i31 >> 2] | 0;
     i15 = i19 + (i36 << 2) | 0;
     i30 = i19;
     while (1) {
      i19 = HEAP32[i30 >> 2] | 0;
      do {
       if ((i19 | 0) != 0) {
        i29 = i19 | 0;
        i28 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
        if ((i28 | 0) == 0) {
         __ZN7WebCore13StyleRuleBase7destroyEv(i19);
         break;
        } else {
         HEAP32[i29 >> 2] = i28;
         break;
        }
       }
      } while (0);
      i30 = i30 + 4 | 0;
      if ((i30 | 0) == (i15 | 0)) {
       break;
      }
     }
     HEAP32[i20 >> 2] = 0;
     i27 = i31;
    }
   } while (0);
   i20 = HEAP32[i27 >> 2] | 0;
   if ((i20 | 0) == 0) {
    STACKTOP = i6;
    return;
   }
   HEAP32[i27 >> 2] = 0;
   HEAP32[i10 + 4 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i20);
   STACKTOP = i6;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 STACKTOP = i6;
 return;
}
function __ZN7WebCore9DOMWindow24resetDOMWindowPropertiesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 80 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i3);
  _memset(i2 | 0, 0, 16) | 0;
 }
 i2 = i1 + 100 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 + 16 | 0;
   i4 = i2 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    break;
   }
   i5 = i2 - 16 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 24 >> 2] & 63](i5);
  }
 } while (0);
 i3 = i1 + 104 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 + 16 | 0;
   i2 = i3 | 0;
   i4 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i2 >> 2] = i4;
    break;
   }
   i4 = i3 - 16 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 24 >> 2] & 63](i4);
  }
 } while (0);
 i5 = i1 + 108 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 do {
  if ((i4 | 0) != 0) {
   i5 = i4 + 8 | 0;
   i3 = i5 | 0;
   i2 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i3 >> 2] = i2;
    break;
   }
   i2 = i5 - 8 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 63](i2);
  }
 } while (0);
 i4 = i1 + 112 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 + 16 | 0;
   i5 = i4 | 0;
   i3 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i5 >> 2] = i3;
    break;
   }
   i3 = i4 - 16 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 24 >> 2] & 63](i3);
  }
 } while (0);
 i2 = i1 + 116 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 + 16 | 0;
   i4 = i2 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    break;
   }
   i5 = i2 - 16 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 24 >> 2] & 63](i5);
  }
 } while (0);
 i3 = i1 + 120 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 + 16 | 0;
   i2 = i3 | 0;
   i4 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i2 >> 2] = i4;
    break;
   }
   i4 = i3 - 16 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 24 >> 2] & 63](i4);
  }
 } while (0);
 i5 = i1 + 124 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 do {
  if ((i4 | 0) != 0) {
   i5 = i4 + 16 | 0;
   i3 = i5 | 0;
   i2 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i3 >> 2] = i2;
    break;
   }
   i2 = i5 - 16 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 24 >> 2] & 63](i2);
  }
 } while (0);
 i4 = i1 + 128 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 + 16 | 0;
   i5 = i4 | 0;
   i3 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i5 >> 2] = i3;
    break;
   }
   i3 = i4 - 16 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 24 >> 2] & 63](i3);
  }
 } while (0);
 i2 = i1 + 132 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 + 16 | 0;
   i4 = i2 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    break;
   }
   i5 = i2 - 16 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 24 >> 2] & 63](i5);
  }
 } while (0);
 i3 = i1 + 136 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 + 16 | 0;
   i2 = i3 | 0;
   i4 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i2 >> 2] = i4;
    break;
   }
   i4 = i3 - 16 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 24 >> 2] & 63](i4);
  }
 } while (0);
 i5 = i1 + 140 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 do {
  if ((i4 | 0) != 0) {
   i5 = i4 + 8 | 0;
   i3 = i5 | 0;
   i2 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i3 >> 2] = i2;
    break;
   }
   i2 = i5 - 8 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 63](i2);
  }
 } while (0);
 i4 = i1 + 144 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 + 16 | 0;
   i5 = i4 | 0;
   i3 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i5 >> 2] = i3;
    break;
   }
   i3 = i4 - 16 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 24 >> 2] & 63](i3);
  }
 } while (0);
 i2 = i1 + 148 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 + 12 | 0;
   i4 = i2 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    break;
   }
   i5 = i2 - 12 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 24 >> 2] & 63](i5);
  }
 } while (0);
 i3 = i1 + 164 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 + 16 | 0;
   i2 = i3 | 0;
   i4 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i2 >> 2] = i4;
    break;
   }
   i4 = i3 - 16 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 24 >> 2] & 63](i4);
  }
 } while (0);
 i5 = i1 + 168 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 do {
  if ((i4 | 0) != 0) {
   i5 = i4 + 16 | 0;
   i3 = i5 | 0;
   i2 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i3 >> 2] = i2;
    break;
   }
   i2 = i5 - 16 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 24 >> 2] & 63](i2);
  }
 } while (0);
 i4 = i1 + 172 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i4 = i1 + 40 | 0;
 i1 = i4 | 0;
 i2 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i1 >> 2] = i2;
  return;
 }
 i2 = i4 - 40 | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 44 >> 2] & 63](i2);
 return;
}
function __ZNK7WebCore9DOMWindow12localStorageERi(i1, i2) {
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
 i9 = i3 + 40 | 0;
 i10 = i1 + 52 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 if ((i11 | 0) == 0) {
  i12 = 0;
  STACKTOP = i3;
  return i12 | 0;
 }
 if ((HEAP32[(HEAP32[i11 + 456 >> 2] | 0) + 336 >> 2] | 0) != (i1 | 0)) {
  i12 = 0;
  STACKTOP = i3;
  return i12 | 0;
 }
 i11 = HEAP32[i1 + 44 >> 2] | 0;
 if ((i11 | 0) == 0) {
  i12 = 0;
  STACKTOP = i3;
  return i12 | 0;
 }
 i13 = i11 - 156 + 68 | 0;
 i11 = i13;
 if ((i13 | 0) == 0) {
  i12 = 0;
  STACKTOP = i3;
  return i12 | 0;
 }
 i14 = i13 + 100 | 0;
 if (!(__ZNK7WebCore14SecurityOrigin16canAccessStorageEPKS0_NS0_25ShouldAllowFromThirdPartyE(HEAP32[i14 >> 2] | 0, 0, 1) | 0)) {
  HEAP32[i2 >> 2] = 18;
  i12 = 0;
  STACKTOP = i3;
  return i12 | 0;
 }
 i15 = i1 + 168 | 0;
 i1 = HEAP32[i15 >> 2] | 0;
 if ((i1 | 0) != 0) {
  i16 = HEAP32[i1 + 20 >> 2] | 0;
  if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i16 >> 2] | 0) + 36 >> 2] & 3](i16, HEAP32[i10 >> 2] | 0) | 0) {
   i12 = HEAP32[i15 >> 2] | 0;
   STACKTOP = i3;
   return i12 | 0;
  } else {
   HEAP32[i2 >> 2] = 18;
   i12 = 0;
   STACKTOP = i3;
   return i12 | 0;
  }
 }
 i16 = __ZNK7WebCore8Document4pageEv(i11) | 0;
 if ((i16 | 0) == 0) {
  i12 = 0;
  STACKTOP = i3;
  return i12 | 0;
 }
 if ((HEAP8[(HEAP32[i16 + 48 >> 2] | 0) + 186 | 0] & 32) == 0) {
  i12 = 0;
  STACKTOP = i3;
  return i12 | 0;
 }
 i1 = HEAP32[i14 >> 2] | 0;
 i17 = i13;
 i13 = __ZNK7WebCore14SecurityOrigin16canAccessStorageEPKS0_NS0_25ShouldAllowFromThirdPartyE(i1, FUNCTION_TABLE_ii[HEAP32[(HEAP32[i17 >> 2] | 0) + 320 >> 2] & 31](i11) | 0, 1) | 0;
 i1 = i16 + 160 | 0;
 i18 = HEAP32[i1 >> 2] | 0;
 if ((i18 | 0) == 0) {
  __ZN7WebCore4Page9initGroupEv(i16);
  i19 = HEAP32[i1 >> 2] | 0;
 } else {
  i19 = i18;
 }
 do {
  if (i13) {
   i18 = __ZN7WebCore9PageGroup12localStorageEv(i19) | 0;
   i1 = HEAP32[(HEAP32[i18 >> 2] | 0) + 8 >> 2] | 0;
   i16 = HEAP32[i14 >> 2] | 0;
   i20 = i7 | 0;
   HEAP32[i20 >> 2] = i16;
   if ((i16 | 0) != 0) {
    i21 = i16 | 0;
    tempValue = HEAP32[i21 >> 2] | 0, HEAP32[i21 >> 2] = tempValue + 1, tempValue;
   }
   FUNCTION_TABLE_viii[i1 & 1](i6, i18, i7);
   i18 = i6 | 0;
   i1 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = 0;
   i18 = HEAP32[i20 >> 2] | 0;
   if ((i18 | 0) == 0) {
    i22 = i1;
    break;
   }
   i20 = i18 | 0;
   if (((tempValue = HEAP32[i20 >> 2] | 0, HEAP32[i20 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    i22 = i1;
    break;
   }
   __ZN7WebCore14SecurityOriginD2Ev(i18);
   __ZN3WTF8fastFreeEPv(i18);
   i22 = i1;
  } else {
   i1 = __ZN7WebCore9PageGroup21transientLocalStorageEPNS_14SecurityOriginE(i19, FUNCTION_TABLE_ii[HEAP32[(HEAP32[i17 >> 2] | 0) + 320 >> 2] & 31](i11) | 0) | 0;
   i18 = HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] | 0;
   i20 = HEAP32[i14 >> 2] | 0;
   i21 = i5 | 0;
   HEAP32[i21 >> 2] = i20;
   if ((i20 | 0) != 0) {
    i16 = i20 | 0;
    tempValue = HEAP32[i16 >> 2] | 0, HEAP32[i16 >> 2] = tempValue + 1, tempValue;
   }
   FUNCTION_TABLE_viii[i18 & 1](i4, i1, i5);
   i1 = i4 | 0;
   i18 = HEAP32[i1 >> 2] | 0;
   HEAP32[i1 >> 2] = 0;
   i1 = HEAP32[i21 >> 2] | 0;
   if ((i1 | 0) == 0) {
    i22 = i18;
    break;
   }
   i21 = i1 | 0;
   if (((tempValue = HEAP32[i21 >> 2] | 0, HEAP32[i21 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    i22 = i18;
    break;
   }
   __ZN7WebCore14SecurityOriginD2Ev(i1);
   __ZN3WTF8fastFreeEPv(i1);
   i22 = i18;
  }
 } while (0);
 if (!(FUNCTION_TABLE_iii[HEAP32[(HEAP32[i22 >> 2] | 0) + 36 >> 2] & 3](i22, HEAP32[i10 >> 2] | 0) | 0)) {
  HEAP32[i2 >> 2] = 18;
  if ((i22 | 0) == 0) {
   i12 = 0;
   STACKTOP = i3;
   return i12 | 0;
  }
  i2 = i22 + 4 | 0;
  i4 = i2 | 0;
  i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
  if ((i5 | 0) != 0) {
   HEAP32[i4 >> 2] = i5;
   i12 = 0;
   STACKTOP = i3;
   return i12 | 0;
  }
  i5 = i2 - 4 | 0;
  if ((i5 | 0) == 0) {
   i12 = 0;
   STACKTOP = i3;
   return i12 | 0;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 63](i5);
  i12 = 0;
  STACKTOP = i3;
  return i12 | 0;
 }
 i5 = HEAP32[i10 >> 2] | 0;
 i10 = i9 | 0;
 HEAP32[i10 >> 2] = i22;
 __ZN7WebCore7Storage6createEPNS_5FrameEN3WTF10PassRefPtrINS_11StorageAreaEEE(i8, i5, i9);
 i9 = i8 | 0;
 i8 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 i5 = HEAP32[i15 >> 2] | 0;
 HEAP32[i15 >> 2] = i8;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 16 | 0;
   i22 = i8 | 0;
   i2 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i22 >> 2] = i2;
    break;
   }
   i2 = i8 - 16 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 24 >> 2] & 63](i2);
  }
 } while (0);
 i5 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i9 = i5 + 16 | 0;
   i2 = i9 | 0;
   i8 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i2 >> 2] = i8;
    break;
   }
   i8 = i9 - 16 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 24 >> 2] & 63](i8);
  }
 } while (0);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 4 | 0;
   i8 = i10 | 0;
   i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i8 >> 2] = i9;
    break;
   }
   i9 = i10 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 63](i9);
  }
 } while (0);
 i12 = HEAP32[i15 >> 2] | 0;
 STACKTOP = i3;
 return i12 | 0;
}
function __ZN7WebCore9DOMWindow16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 48 | 0;
 i12 = i5 + 56 | 0;
 i13 = i5 + 64 | 0;
 i14 = i5 + 80 | 0;
 i15 = i14 | 0;
 i16 = i3 | 0;
 i3 = HEAP32[i16 >> 2] | 0;
 HEAP32[i16 >> 2] = 0;
 HEAP32[i15 >> 2] = i3;
 i3 = __ZN7WebCore11EventTarget16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb(i1 | 0, i2, i14, i4) | 0;
 i4 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i15 = i4 + 4 | 0;
   i14 = i15 | 0;
   i16 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   if ((i16 | 0) != 0) {
    HEAP32[i14 >> 2] = i16;
    break;
   }
   i16 = i15 - 4 | 0;
   if ((i16 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 63](i16);
  }
 } while (0);
 if (!i3) {
  i17 = 0;
  STACKTOP = i5;
  return i17 | 0;
 }
 i3 = HEAP32[i1 + 44 >> 2] | 0;
 L11 : do {
  if ((i3 | 0) != 0) {
   i4 = i3 - 156 + 68 | 0;
   i16 = i4;
   if ((i4 | 0) == 0) {
    break;
   }
   __ZN7WebCore8Document23addListenerTypeIfNeededERKN3WTF12AtomicStringE(i16, i2);
   i15 = HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0;
   i14 = HEAP32[i2 >> 2] | 0;
   do {
    if ((i14 | 0) != (HEAP32[i15 + 368 >> 2] | 0)) {
     if ((i14 | 0) == (HEAP32[i15 + 260 >> 2] | 0)) {
      break;
     }
     do {
      if ((i14 | 0) != (HEAP32[i15 + 632 >> 2] | 0)) {
       if ((i14 | 0) == (HEAP32[i15 + 636 >> 2] | 0)) {
        break;
       }
       if ((i14 | 0) == (HEAP32[i15 + 640 >> 2] | 0)) {
        break;
       }
       if ((i14 | 0) == (HEAP32[i15 + 644 >> 2] | 0)) {
        break;
       }
       if ((i14 | 0) != (HEAP32[(HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 336 >> 2] | 0)) {
        break L11;
       }
       i18 = i6 | 0;
       HEAP32[i18 >> 2] = 0;
       __ZNK7WebCore9DOMWindow12localStorageERi(i1, i18) | 0;
       i18 = i7 | 0;
       HEAP32[i18 >> 2] = 0;
       __ZNK7WebCore9DOMWindow14sessionStorageERi(i1, i18) | 0;
       break L11;
      }
     } while (0);
     __ZN7WebCore8Document23didAddTouchEventHandlerEPNS_4NodeE(i16, i4);
     break L11;
    }
   } while (0);
   __ZN7WebCore8Document23didAddWheelEventHandlerEv(i16);
  }
 } while (0);
 i7 = HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 if ((i6 | 0) == (HEAP32[i7 + 348 >> 2] | 0)) {
  HEAP32[i9 >> 2] = i1;
  if (HEAP8[H_BASE + 1936 | 0] | 0) {
   i19 = HEAP32[H_BASE + 1952 >> 2] | 0;
  } else {
   i2 = __ZN3WTF10fastMallocEj(20) | 0;
   i3 = i2;
   _memset(i2 | 0, 0, 20) | 0;
   HEAP32[H_BASE + 1952 >> 2] = i3;
   HEAP8[H_BASE + 1936 | 0] = 1;
   i19 = i3;
  }
  HEAP32[i8 >> 2] = 0;
  __ZN3WTF9HashTableIPN7WebCore9DOMWindowENS_12KeyValuePairIS3_jEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_jS9_NS_10HashTraitsIS3_EENSB_IjEEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKS3_iEENS_18HashTableAddResultINS_17HashTableIteratorIS3_S5_S7_S9_SF_SC_EEEEOT0_OT1_(i10, i19 | 0, i9, i8);
  i8 = (HEAP32[i10 >> 2] | 0) + 4 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
  if ((HEAP8[i10 + 8 | 0] & 1) == 0) {
   i17 = 1;
   STACKTOP = i5;
   return i17 | 0;
  }
  i10 = HEAP32[(HEAP32[i9 >> 2] | 0) + 52 >> 2] | 0;
  if ((i10 | 0) == 0) {
   i17 = 1;
   STACKTOP = i5;
   return i17 | 0;
  }
  i9 = HEAP32[i10 + 32 >> 2] | 0;
  if ((i9 | 0) == 0) {
   i17 = 1;
   STACKTOP = i5;
   return i17 | 0;
  }
  __ZN7WebCore6Chrome24disableSuddenTerminationEv(HEAP32[i9 + 20 >> 2] | 0);
  i17 = 1;
  STACKTOP = i5;
  return i17 | 0;
 }
 if ((i6 | 0) != (HEAP32[i7 + 24 >> 2] | 0)) {
  i17 = 1;
  STACKTOP = i5;
  return i17 | 0;
 }
 i7 = HEAP32[i1 + 52 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i17 = 1;
  STACKTOP = i5;
  return i17 | 0;
 }
 if ((HEAP32[i7 + 32 >> 2] | 0) == 0) {
  i17 = 1;
  STACKTOP = i5;
  return i17 | 0;
 }
 if ((HEAP32[i7 + 28 >> 2] | 0) != (i7 | 0)) {
  i17 = 1;
  STACKTOP = i5;
  return i17 | 0;
 }
 HEAP32[i12 >> 2] = i1;
 if (HEAP8[H_BASE + 1928 | 0] | 0) {
  i20 = HEAP32[H_BASE + 1944 >> 2] | 0;
 } else {
  i1 = __ZN3WTF10fastMallocEj(20) | 0;
  i7 = i1;
  _memset(i1 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 1944 >> 2] = i7;
  HEAP8[H_BASE + 1928 | 0] = 1;
  i20 = i7;
 }
 HEAP32[i11 >> 2] = 0;
 __ZN3WTF9HashTableIPN7WebCore9DOMWindowENS_12KeyValuePairIS3_jEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_jS9_NS_10HashTraitsIS3_EENSB_IjEEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKS3_iEENS_18HashTableAddResultINS_17HashTableIteratorIS3_S5_S7_S9_SF_SC_EEEEOT0_OT1_(i13, i20 | 0, i12, i11);
 i11 = (HEAP32[i13 >> 2] | 0) + 4 | 0;
 HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
 if ((HEAP8[i13 + 8 | 0] & 1) == 0) {
  i17 = 1;
  STACKTOP = i5;
  return i17 | 0;
 }
 i13 = HEAP32[(HEAP32[i12 >> 2] | 0) + 52 >> 2] | 0;
 if ((i13 | 0) == 0) {
  i17 = 1;
  STACKTOP = i5;
  return i17 | 0;
 }
 i12 = HEAP32[i13 + 32 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i17 = 1;
  STACKTOP = i5;
  return i17 | 0;
 }
 __ZN7WebCore6Chrome24disableSuddenTerminationEv(HEAP32[i12 + 20 >> 2] | 0);
 i17 = 1;
 STACKTOP = i5;
 return i17 | 0;
}
function __ZN7WebCore9DOMWindow17dispatchLoadEventEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 212 | 0;
 i9 = __ZN3WTF10fastMallocEj(56) | 0;
 i10 = i9;
 __ZN7WebCore5EventC1ERKN3WTF12AtomicStringEbb(i10, i8, 0, 0);
 i8 = i1 + 52 | 0;
 i11 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i12 = 21;
  } else {
   i13 = HEAP32[i11 + 128 >> 2] | 0;
   if ((i13 | 0) == 0) {
    i12 = 21;
    break;
   }
   i14 = i13 + 1592 | 0;
   if (+HEAPF64[i14 >> 3] != +0) {
    i12 = 21;
    break;
   }
   i15 = i13 + 4 | 0;
   HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
   HEAPF64[i14 >> 3] = +__ZN3WTF27monotonicallyIncreasingTimeEv();
   i14 = i3 | 0;
   HEAP32[i14 >> 2] = i10;
   if ((i9 | 0) != 0) {
    i15 = i9 + 8 | 0;
    HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
   }
   i15 = HEAP32[i1 + 44 >> 2] | 0;
   do {
    if ((i15 | 0) == 0) {
     i16 = i4 | 0;
     HEAP32[i16 >> 2] = 0;
     i17 = i16;
    } else {
     i16 = i15 - 156 + 68 | 0;
     i18 = i16;
     i19 = i4 | 0;
     HEAP32[i19 >> 2] = i18;
     if ((i16 | 0) == 0) {
      i17 = i19;
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 56 >> 2] & 63](i18);
     i17 = i19;
    }
   } while (0);
   __ZN7WebCore9DOMWindow13dispatchEventEN3WTF10PassRefPtrINS_5EventEEENS2_INS_11EventTargetEEE(i1, i3, i4) | 0;
   i15 = HEAP32[i17 >> 2] | 0;
   if ((i15 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 60 >> 2] & 63](i15);
   }
   i15 = HEAP32[i14 >> 2] | 0;
   do {
    if ((i15 | 0) != 0) {
     i19 = i15 + 8 | 0;
     i18 = i19 | 0;
     i16 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
     if ((i16 | 0) != 0) {
      HEAP32[i18 >> 2] = i16;
      break;
     }
     i16 = i19 - 8 | 0;
     if ((i16 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 63](i16);
    }
   } while (0);
   HEAPF64[i13 + 1600 >> 3] = +__ZN3WTF27monotonicallyIncreasingTimeEv();
   i15 = i13 + 4 | 0;
   i14 = i15 | 0;
   i16 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   if ((i16 | 0) != 0) {
    HEAP32[i14 >> 2] = i16;
    break;
   }
   i16 = i15 - 4 | 0;
   if ((i16 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 63](i16);
  }
 } while (0);
 do {
  if ((i12 | 0) == 21) {
   i17 = i5 | 0;
   HEAP32[i17 >> 2] = i10;
   if ((i9 | 0) != 0) {
    i4 = i9 + 8 | 0;
    HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
   }
   i4 = HEAP32[i1 + 44 >> 2] | 0;
   do {
    if ((i4 | 0) == 0) {
     i3 = i6 | 0;
     HEAP32[i3 >> 2] = 0;
     i20 = i3;
    } else {
     i3 = i4 - 156 + 68 | 0;
     i11 = i3;
     i16 = i6 | 0;
     HEAP32[i16 >> 2] = i11;
     if ((i3 | 0) == 0) {
      i20 = i16;
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 56 >> 2] & 63](i11);
     i20 = i16;
    }
   } while (0);
   __ZN7WebCore9DOMWindow13dispatchEventEN3WTF10PassRefPtrINS_5EventEEENS2_INS_11EventTargetEEE(i1, i5, i6) | 0;
   i4 = HEAP32[i20 >> 2] | 0;
   if ((i4 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 60 >> 2] & 63](i4);
   }
   i4 = HEAP32[i17 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   i13 = i4 + 8 | 0;
   i4 = i13 | 0;
   i16 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i16 | 0) != 0) {
    HEAP32[i4 >> 2] = i16;
    break;
   }
   i16 = i13 - 8 | 0;
   if ((i16 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 63](i16);
  }
 } while (0);
 i20 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i20 | 0) != 0) {
   i6 = HEAP32[i20 + 448 >> 2] | 0;
   do {
    if ((i6 | 0) != 0) {
     i5 = HEAP32[(HEAP32[i6 >> 2] | 0) + 32 >> 2] | 0;
     i1 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 212 | 0;
     i12 = __ZN3WTF10fastMallocEj(56) | 0;
     __ZN7WebCore5EventC1ERKN3WTF12AtomicStringEbb(i12, i1, 0, 0);
     i1 = i7 | 0;
     HEAP32[i1 >> 2] = i12;
     FUNCTION_TABLE_iii[i5 & 3](i6 | 0, i7) | 0;
     i5 = HEAP32[i1 >> 2] | 0;
     if ((i5 | 0) == 0) {
      break;
     }
     i1 = i5 + 8 | 0;
     i5 = i1 | 0;
     i12 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
     if ((i12 | 0) != 0) {
      HEAP32[i5 >> 2] = i12;
      break;
     }
     i12 = i1 - 8 | 0;
     if ((i12 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 63](i12);
    }
   } while (0);
   i6 = HEAP32[i8 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   i17 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(HEAP32[i6 + 32 >> 2] | 0) | 0;
   if ((i17 | 0) == 0) {
    break;
   }
   __ZN7WebCore24InspectorInstrumentation18loadEventFiredImplEPNS_19InstrumentingAgentsEPNS_5FrameE(i17, i6);
  }
 } while (0);
 if ((i9 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i8 = i9 + 8 | 0;
 i7 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 if ((i7 | 0) == 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 63](i10);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i8 >> 2] = i7;
  STACKTOP = i2;
  return;
 }
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
function __ZN7WebCore9DOMWindow19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 if (!(__ZN7WebCore11EventTarget19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb(i1 | 0, i2, i3, i4) | 0)) {
  i10 = 0;
  STACKTOP = i5;
  return i10 | 0;
 }
 i4 = HEAP32[i1 + 44 >> 2] | 0;
 L4 : do {
  if ((i4 | 0) != 0) {
   i3 = i4 - 156 + 68 | 0;
   i11 = i3;
   if ((i3 | 0) == 0) {
    break;
   }
   i12 = HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0;
   i13 = HEAP32[i2 >> 2] | 0;
   do {
    if ((i13 | 0) != (HEAP32[i12 + 368 >> 2] | 0)) {
     if ((i13 | 0) == (HEAP32[i12 + 260 >> 2] | 0)) {
      break;
     }
     do {
      if ((i13 | 0) != (HEAP32[i12 + 632 >> 2] | 0)) {
       if ((i13 | 0) == (HEAP32[i12 + 636 >> 2] | 0)) {
        break;
       }
       if ((i13 | 0) == (HEAP32[i12 + 640 >> 2] | 0)) {
        break;
       }
       if ((i13 | 0) != (HEAP32[i12 + 644 >> 2] | 0)) {
        break L4;
       }
      }
     } while (0);
     __ZN7WebCore8Document26didRemoveTouchEventHandlerEPNS_4NodeE(i11, i3);
     break L4;
    }
   } while (0);
   __ZN7WebCore8Document26didRemoveWheelEventHandlerEv(i11);
  }
 } while (0);
 i4 = HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == (HEAP32[i4 + 348 >> 2] | 0)) {
  HEAP32[i7 >> 2] = i1;
  if (HEAP8[H_BASE + 1936 | 0] | 0) {
   i14 = HEAP32[H_BASE + 1952 >> 2] | 0;
  } else {
   i2 = __ZN3WTF10fastMallocEj(20) | 0;
   i12 = i2;
   _memset(i2 | 0, 0, 20) | 0;
   HEAP32[H_BASE + 1952 >> 2] = i12;
   HEAP8[H_BASE + 1936 | 0] = 1;
   i14 = i12;
  }
  __ZN3WTF14HashCountedSetIPN7WebCore9DOMWindowENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE4findERKS3_(i6, i14, i7);
  i12 = HEAP32[i6 >> 2] | 0;
  i6 = i14 + 4 | 0;
  if ((i12 | 0) == ((HEAP32[i14 >> 2] | 0) + (HEAP32[i6 >> 2] << 3) | 0)) {
   i10 = 1;
   STACKTOP = i5;
   return i10 | 0;
  }
  i2 = i12 + 4 | 0;
  i13 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
  if ((i13 | 0) != 0) {
   HEAP32[i2 >> 2] = i13;
   i10 = 1;
   STACKTOP = i5;
   return i10 | 0;
  }
  HEAP32[i12 >> 2] = -1;
  i12 = i14 + 16 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
  i12 = i14 + 12 | 0;
  i13 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
  HEAP32[i12 >> 2] = i13;
  i12 = HEAP32[i6 >> 2] | 0;
  if ((i13 * 6 & -1 | 0) < (i12 | 0) & (i12 | 0) > 8) {
   __ZN3WTF9HashTableIPN7WebCore9DOMWindowENS_12KeyValuePairIS3_jEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_jS9_NS_10HashTraitsIS3_EENSB_IjEEE18KeyValuePairTraitsESC_E6rehashEiPS5_(i14 | 0, (i12 | 0) / 2 & -1, 0) | 0;
  }
  i12 = HEAP32[(HEAP32[i7 >> 2] | 0) + 52 >> 2] | 0;
  if ((i12 | 0) == 0) {
   i10 = 1;
   STACKTOP = i5;
   return i10 | 0;
  }
  i7 = HEAP32[i12 + 32 >> 2] | 0;
  if ((i7 | 0) == 0) {
   i10 = 1;
   STACKTOP = i5;
   return i10 | 0;
  }
  __ZN7WebCore6Chrome23enableSuddenTerminationEv(HEAP32[i7 + 20 >> 2] | 0);
  i10 = 1;
  STACKTOP = i5;
  return i10 | 0;
 }
 if ((i3 | 0) != (HEAP32[i4 + 24 >> 2] | 0)) {
  i10 = 1;
  STACKTOP = i5;
  return i10 | 0;
 }
 i4 = HEAP32[i1 + 52 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i10 = 1;
  STACKTOP = i5;
  return i10 | 0;
 }
 if ((HEAP32[i4 + 32 >> 2] | 0) == 0) {
  i10 = 1;
  STACKTOP = i5;
  return i10 | 0;
 }
 if ((HEAP32[i4 + 28 >> 2] | 0) != (i4 | 0)) {
  i10 = 1;
  STACKTOP = i5;
  return i10 | 0;
 }
 HEAP32[i9 >> 2] = i1;
 if (HEAP8[H_BASE + 1928 | 0] | 0) {
  i15 = HEAP32[H_BASE + 1944 >> 2] | 0;
 } else {
  i1 = __ZN3WTF10fastMallocEj(20) | 0;
  i4 = i1;
  _memset(i1 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 1944 >> 2] = i4;
  HEAP8[H_BASE + 1928 | 0] = 1;
  i15 = i4;
 }
 __ZN3WTF14HashCountedSetIPN7WebCore9DOMWindowENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE4findERKS3_(i8, i15, i9);
 i4 = HEAP32[i8 >> 2] | 0;
 i8 = i15 + 4 | 0;
 if ((i4 | 0) == ((HEAP32[i15 >> 2] | 0) + (HEAP32[i8 >> 2] << 3) | 0)) {
  i10 = 1;
  STACKTOP = i5;
  return i10 | 0;
 }
 i1 = i4 + 4 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i1 >> 2] = i3;
  i10 = 1;
  STACKTOP = i5;
  return i10 | 0;
 }
 HEAP32[i4 >> 2] = -1;
 i4 = i15 + 16 | 0;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 i4 = i15 + 12 | 0;
 i3 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 HEAP32[i4 >> 2] = i3;
 i4 = HEAP32[i8 >> 2] | 0;
 if ((i3 * 6 & -1 | 0) < (i4 | 0) & (i4 | 0) > 8) {
  __ZN3WTF9HashTableIPN7WebCore9DOMWindowENS_12KeyValuePairIS3_jEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_jS9_NS_10HashTraitsIS3_EENSB_IjEEE18KeyValuePairTraitsESC_E6rehashEiPS5_(i15 | 0, (i4 | 0) / 2 & -1, 0) | 0;
 }
 i4 = HEAP32[(HEAP32[i9 >> 2] | 0) + 52 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i10 = 1;
  STACKTOP = i5;
  return i10 | 0;
 }
 i9 = HEAP32[i4 + 32 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = 1;
  STACKTOP = i5;
  return i10 | 0;
 }
 __ZN7WebCore6Chrome23enableSuddenTerminationEv(HEAP32[i9 + 20 >> 2] | 0);
 i10 = 1;
 STACKTOP = i5;
 return i10 | 0;
}
function __ZN7WebCore9DOMWindow36dispatchAllPendingBeforeUnloadEventsEv() {
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0;
 if (HEAP8[H_BASE + 1928 | 0] | 0) {
  i1 = HEAP32[H_BASE + 1944 >> 2] | 0;
 } else {
  i2 = __ZN3WTF10fastMallocEj(20) | 0;
  i3 = i2;
  _memset(i2 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 1944 >> 2] = i3;
  HEAP8[H_BASE + 1928 | 0] = 1;
  i1 = i3;
 }
 i3 = i1 + 12 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i4 = 1;
  return i4 | 0;
 }
 if (HEAP8[H_BASE + 1664 | 0] | 0) {
  i4 = 1;
  return i4 | 0;
 }
 if (i2 >>> 0 > 1073741823 >>> 0) {
  _WTFCrash();
  return 0;
 }
 i5 = __ZN3WTF10fastMallocEj(__ZN3WTF18fastMallocGoodSizeEj(i2 << 2) | 0) | 0;
 i2 = i5;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = HEAP32[i1 + 4 >> 2] | 0;
 i9 = i7 + (i8 << 3) | 0;
 L14 : do {
  if ((HEAP32[i3 >> 2] | 0) == 0) {
   i10 = 31;
  } else {
   L16 : do {
    if ((i8 | 0) == 0) {
     i11 = i7;
    } else {
     i12 = i7;
     while (1) {
      i13 = HEAP32[i12 >> 2] | 0;
      if (!((i13 | 0) == (-1 | 0) | (i13 | 0) == 0)) {
       i11 = i12;
       break L16;
      }
      i13 = i12 + 8 | 0;
      if ((i13 | 0) == (i9 | 0)) {
       i10 = 31;
       break L14;
      } else {
       i12 = i13;
      }
     }
    }
   } while (0);
   if ((i11 | 0) == (i9 | 0)) {
    i10 = 31;
    break;
   } else {
    i14 = 0;
    i15 = i11;
   }
   L21 : while (1) {
    i12 = HEAP32[i15 >> 2] | 0;
    HEAP32[i2 + (i14 << 2) >> 2] = i12;
    i13 = i12 + 36 | 0;
    HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
    i16 = i14 + 1 | 0;
    i13 = i15 + 8 | 0;
    if ((i13 | 0) == (i9 | 0)) {
     break;
    } else {
     i17 = i13;
    }
    while (1) {
     i13 = HEAP32[i17 >> 2] | 0;
     if (!((i13 | 0) == (-1 | 0) | (i13 | 0) == 0)) {
      break;
     }
     i13 = i17 + 8 | 0;
     if ((i13 | 0) == (i9 | 0)) {
      break L21;
     } else {
      i17 = i13;
     }
    }
    if ((i17 | 0) == (i9 | 0)) {
     break;
    } else {
     i14 = i16;
     i15 = i17;
    }
   }
   i13 = (i16 | 0) == 0;
   if (i13) {
    i10 = 31;
    break;
   }
   i12 = i1 + 8 | 0;
   i18 = 0;
   L29 : while (1) {
    i19 = HEAP32[i2 + (i18 << 2) >> 2] | 0;
    i20 = HEAP32[i6 >> 2] | 0;
    L31 : do {
     if ((i20 | 0) != 0) {
      i21 = HEAP32[i12 >> 2] | 0;
      i22 = i19;
      i23 = i22 + ~(i22 << 15) | 0;
      i22 = (i23 >>> 10 ^ i23) * 9 & -1;
      i23 = i22 >>> 6 ^ i22;
      i22 = i23 + ~(i23 << 11) | 0;
      i23 = i22 >>> 16 ^ i22;
      i22 = i21 & i23;
      i24 = i20 + (i22 << 3) | 0;
      i25 = HEAP32[i24 >> 2] | 0;
      if ((i25 | 0) == (i19 | 0)) {
       i26 = i24;
      } else {
       i24 = (i23 >>> 23) + ~i23 | 0;
       i23 = i24 << 12 ^ i24;
       i24 = i23 >>> 7 ^ i23;
       i23 = i24 << 2 ^ i24;
       i24 = i23 >>> 20 ^ i23 | 1;
       i23 = 0;
       i27 = i22;
       i22 = i25;
       while (1) {
        if ((i22 | 0) == 0) {
         break L31;
        }
        i25 = (i23 | 0) == 0 ? i24 : i23;
        i28 = i25 + i27 & i21;
        i29 = i20 + (i28 << 3) | 0;
        i30 = HEAP32[i29 >> 2] | 0;
        if ((i30 | 0) == (i19 | 0)) {
         i26 = i29;
         break;
        } else {
         i23 = i25;
         i27 = i28;
         i22 = i30;
        }
       }
      }
      if ((i26 | 0) == 0) {
       break;
      }
      i22 = i19 + 52 | 0;
      i27 = HEAP32[i22 >> 2] | 0;
      if ((i27 | 0) == 0) {
       break;
      }
      if (!(__ZN7WebCore11FrameLoader11shouldCloseEv(i27 + 80 | 0) | 0)) {
       i10 = 33;
       break L29;
      }
      i27 = HEAP32[i22 >> 2] | 0;
      if ((i27 | 0) == 0) {
       break;
      }
      i22 = HEAP32[i27 + 32 >> 2] | 0;
      if ((i22 | 0) == 0) {
       break;
      }
      __ZN7WebCore6Chrome23enableSuddenTerminationEv(HEAP32[i22 + 20 >> 2] | 0);
     }
    } while (0);
    i19 = i18 + 1 | 0;
    if (i19 >>> 0 < i16 >>> 0) {
     i18 = i19;
    } else {
     i10 = 32;
     break;
    }
   }
   if ((i10 | 0) == 32) {
    HEAP8[H_BASE + 1664 | 0] = 1;
    if (i13) {
     i31 = 1;
     break;
    } else {
     i32 = 1;
    }
   } else if ((i10 | 0) == 33) {
    if (i13) {
     i31 = 0;
     break;
    } else {
     i32 = 0;
    }
   }
   i18 = i2 + (i16 << 2) | 0;
   i12 = i2;
   while (1) {
    i19 = (HEAP32[i12 >> 2] | 0) + 36 | 0;
    i20 = i19 | 0;
    i22 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
    do {
     if ((i22 | 0) == 0) {
      i27 = i19 - 36 | 0;
      if ((i27 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i27 >> 2] | 0) + 44 >> 2] & 63](i27);
     } else {
      HEAP32[i20 >> 2] = i22;
     }
    } while (0);
    i22 = i12 + 4 | 0;
    if ((i22 | 0) == (i18 | 0)) {
     i31 = i32;
     break;
    } else {
     i12 = i22;
    }
   }
  }
 } while (0);
 if ((i10 | 0) == 31) {
  HEAP8[H_BASE + 1664 | 0] = 1;
  i31 = 1;
 }
 if ((i5 | 0) == 0) {
  i4 = i31;
  return i4 | 0;
 }
 __ZN3WTF8fastFreeEPv(i5);
 i4 = i31;
 return i4 | 0;
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
function __ZN7WebCore9DOMWindow11postMessageEN3WTF10PassRefPtrINS_21SerializedScriptValueEEEPKNS1_6VectorINS1_6RefPtrINS_11MessagePortEEELj1ENS1_15CrashOnOverflowEEERKNS1_6StringERS0_Ri(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i7 + 16 | 0;
 i11 = i7 + 24 | 0;
 i12 = HEAP32[i1 + 52 >> 2] | 0;
 if ((i12 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 if ((HEAP32[(HEAP32[i12 + 456 >> 2] | 0) + 336 >> 2] | 0) != (i1 | 0)) {
  STACKTOP = i7;
  return;
 }
 i12 = HEAP32[i5 + 44 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = 0;
 } else {
  i13 = i12 - 156 + 68 | 0;
 }
 i12 = i4 | 0;
 do {
  if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i12 >> 2] | 0, H_BASE + 1656 | 0) | 0) {
   if ((i13 | 0) == 0) {
    STACKTOP = i7;
    return;
   }
   i14 = HEAP32[i13 + 100 >> 2] | 0;
   if ((i14 | 0) == 0) {
    i15 = 0;
    i16 = 12;
    break;
   }
   i17 = i14 | 0;
   tempValue = HEAP32[i17 >> 2] | 0, HEAP32[i17 >> 2] = tempValue + 1, tempValue;
   i15 = i14;
   i16 = 12;
  } else {
   if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i12 >> 2] | 0, H_BASE + 1648 | 0) | 0) {
    i15 = 0;
    i16 = 12;
    break;
   }
   __ZN7WebCore14SecurityOrigin16createFromStringERKN3WTF6StringE(i8, i4);
   i14 = i8 | 0;
   i17 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = 0;
   if ((HEAP8[i17 + 22 | 0] & 1) == 0) {
    i15 = i17;
    i16 = 12;
    break;
   }
   HEAP32[i6 >> 2] = 12;
   i18 = i17;
  }
 } while (0);
 do {
  if ((i16 | 0) == 12) {
   __ZN7WebCore11MessagePort16disentanglePortsEPKN3WTF6VectorINS1_6RefPtrIS0_EELj1ENS1_15CrashOnOverflowEEERi(i9, i3, i6);
   i8 = i9 | 0;
   i4 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = 0;
   if ((HEAP32[i6 >> 2] | 0) != 0 | (i13 | 0) == 0) {
    if ((i4 | 0) == 0) {
     i18 = i15;
     break;
    }
    i8 = i4 + 8 | 0;
    i12 = HEAP32[i8 >> 2] | 0;
    i17 = i4 | 0;
    if ((i12 | 0) != 0) {
     i14 = HEAP32[i17 >> 2] | 0;
     i19 = i14 + (i12 << 2) | 0;
     i12 = i14;
     while (1) {
      i14 = HEAP32[i12 >> 2] | 0;
      if ((i14 | 0) != 0) {
       __ZN7WebCore18MessagePortChannelD1Ev(i14);
       __ZN3WTF8fastFreeEPv(i14);
      }
      i12 = i12 + 4 | 0;
      if ((i12 | 0) == (i19 | 0)) {
       break;
      }
     }
     HEAP32[i8 >> 2] = 0;
    }
    i19 = HEAP32[i17 >> 2] | 0;
    if (!((i4 + 12 | 0) == (i19 | 0) | (i19 | 0) == 0)) {
     HEAP32[i17 >> 2] = 0;
     HEAP32[i4 + 4 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i19);
    }
    __ZN3WTF8fastFreeEPv(i4);
    i18 = i15;
    break;
   }
   __ZNK7WebCore14SecurityOrigin8toStringEv(i10, HEAP32[i13 + 100 >> 2] | 0);
   if (__ZN7WebCore24InspectorInstrumentation19consoleAgentEnabledEPNS_22ScriptExecutionContextE(i13 + 88 | 0) | 0) {
    __ZN7WebCore21createScriptCallStackEjb(i11, 200, 1);
    i19 = i11 | 0;
    i12 = HEAP32[i19 >> 2] | 0;
    HEAP32[i19 >> 2] = 0;
    i20 = i12;
   } else {
    i20 = 0;
   }
   i12 = __ZN3WTF10fastMallocEj(72) | 0;
   i19 = i2 | 0;
   i14 = HEAP32[i19 >> 2] | 0;
   HEAP32[i19 >> 2] = 0;
   if ((i5 | 0) != 0) {
    i19 = i5 + 36 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
   }
   i19 = i12;
   __ZN7WebCore9TimerBaseC2Ev(i19);
   HEAP32[i12 >> 2] = H_BASE + 1904;
   HEAP32[i12 + 44 >> 2] = i1;
   if ((i1 | 0) != 0) {
    i21 = i1 + 36 | 0;
    HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
   }
   HEAP32[i12 + 48 >> 2] = i14;
   i14 = i10 | 0;
   i21 = HEAP32[i14 >> 2] | 0;
   HEAP32[i12 + 52 >> 2] = i21;
   if ((i21 | 0) != 0) {
    i22 = i21 | 0;
    HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 2;
   }
   HEAP32[i12 + 56 >> 2] = i5;
   HEAP32[i12 + 60 >> 2] = i4;
   HEAP32[i12 + 64 >> 2] = i15;
   if ((i15 | 0) != 0) {
    i22 = i15 | 0;
    tempValue = HEAP32[i22 >> 2] | 0, HEAP32[i22 >> 2] = tempValue + 1, tempValue;
   }
   HEAP32[i12 + 68 >> 2] = i20;
   __ZN7WebCore9TimerBase5startEdd(i19, +0, +0);
   i19 = HEAP32[i14 >> 2] | 0;
   if ((i19 | 0) == 0) {
    i18 = i15;
    break;
   }
   i14 = i19 | 0;
   i12 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i19);
    i18 = i15;
    break;
   } else {
    HEAP32[i14 >> 2] = i12;
    i18 = i15;
    break;
   }
  }
 } while (0);
 if ((i18 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i15 = i18 | 0;
 if (((tempValue = HEAP32[i15 >> 2] | 0, HEAP32[i15 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  STACKTOP = i7;
  return;
 }
 __ZN7WebCore14SecurityOriginD2Ev(i18);
 __ZN3WTF8fastFreeEPv(i18);
 STACKTOP = i7;
 return;
}
function __ZN3WTF13tryMakeStringINS_12StringAppendINS1_INS1_INS1_INS_6StringEPKcEES2_EES4_EES2_EES4_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = _strlen(i3 | 0) | 0;
 i8 = i2 + 12 | 0;
 i9 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
 i10 = i2 + 4 | 0;
 i11 = _strlen(HEAP32[i10 >> 2] | 0) | 0;
 i12 = i2 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 i14 = (i13 | 0) == 0;
 if (i14) {
  i15 = 0;
 } else {
  i15 = HEAP32[i13 + 4 >> 2] | 0;
 }
 i16 = i2 + 8 | 0;
 i17 = HEAP32[i16 >> 2] | 0;
 i18 = (i17 | 0) == 0;
 if (i18) {
  i19 = 0;
 } else {
  i19 = HEAP32[i17 + 4 >> 2] | 0;
 }
 i20 = i2 + 16 | 0;
 i21 = HEAP32[i20 >> 2] | 0;
 i22 = (i21 | 0) == 0;
 if (i22) {
  i23 = 0;
 } else {
  i23 = HEAP32[i21 + 4 >> 2] | 0;
 }
 i24 = _llvm_uadd_with_overflow_i32(i11 + i9 + i15 + i19 + i23 | 0, i7 | 0) | 0;
 i23 = i24;
 if (tempRet0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 if (i14) {
  i25 = 11;
 } else {
  if ((HEAP32[i13 + 16 >> 2] & 32 | 0) != 0) {
   i25 = 11;
  }
 }
 do {
  if ((i25 | 0) == 11) {
   if (!i18) {
    if ((HEAP32[i17 + 16 >> 2] & 32 | 0) == 0) {
     break;
    }
   }
   if (!i22) {
    if ((HEAP32[i21 + 16 >> 2] & 32 | 0) == 0) {
     break;
    }
   }
   do {
    if ((i23 | 0) == 0) {
     i13 = __ZN3WTF10StringImpl5emptyEv() | 0;
     if ((i13 | 0) == 0) {
      i25 = 28;
      break;
     }
     i14 = i13 | 0;
     HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
     i26 = i13;
     i27 = 0;
    } else {
     if (i23 >>> 0 > 4294967275 >>> 0) {
      i25 = 28;
      break;
     }
     __ZN3WTF13tryFastMallocEj(i6, i23 + 20 | 0);
     i13 = i6 | 0;
     i14 = HEAP32[i13 >> 2] | 0;
     HEAP32[i13 >> 2] = 0;
     if ((i14 | 0) == 0) {
      i25 = 28;
      break;
     }
     i13 = i14 + 20 | 0;
     HEAP32[i14 >> 2] = 2;
     HEAP32[i14 + 4 >> 2] = i23;
     HEAP32[i14 + 8 >> 2] = i13;
     HEAP32[i14 + 12 >> 2] = 0;
     HEAP32[i14 + 16 >> 2] = 32;
     i26 = i14;
     i27 = i13;
    }
   } while (0);
   if ((i25 | 0) == 28) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   __ZN3WTF12StringAppendINS0_INS0_INS0_INS_6StringEPKcEES1_EES3_EES1_E7writeToEPh(i2, i27);
   i13 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
   i14 = _strlen(HEAP32[i10 >> 2] | 0) | 0;
   i24 = HEAP32[i12 >> 2] | 0;
   if ((i24 | 0) == 0) {
    i28 = 0;
   } else {
    i28 = HEAP32[i24 + 4 >> 2] | 0;
   }
   i24 = HEAP32[i16 >> 2] | 0;
   if ((i24 | 0) == 0) {
    i29 = 0;
   } else {
    i29 = HEAP32[i24 + 4 >> 2] | 0;
   }
   i24 = HEAP32[i20 >> 2] | 0;
   if ((i24 | 0) == 0) {
    i30 = 0;
   } else {
    i30 = HEAP32[i24 + 4 >> 2] | 0;
   }
   _memcpy(i27 + (i14 + i13 + i28 + i29 + i30) | 0, i3 | 0, i7) | 0;
   HEAP32[i1 >> 2] = i26;
   STACKTOP = i4;
   return;
  }
 } while (0);
 do {
  if ((i23 | 0) == 0) {
   i26 = __ZN3WTF10StringImpl5emptyEv() | 0;
   if ((i26 | 0) == 0) {
    i25 = 44;
    break;
   }
   i30 = i26 | 0;
   HEAP32[i30 >> 2] = (HEAP32[i30 >> 2] | 0) + 2;
   i31 = i26;
   i32 = 0;
  } else {
   if (i23 >>> 0 > 2147483637 >>> 0) {
    i25 = 44;
    break;
   }
   __ZN3WTF13tryFastMallocEj(i5, (i23 << 1) + 20 | 0);
   i26 = i5 | 0;
   i30 = HEAP32[i26 >> 2] | 0;
   HEAP32[i26 >> 2] = 0;
   if ((i30 | 0) == 0) {
    i25 = 44;
    break;
   }
   i26 = i30 + 20 | 0;
   HEAP32[i30 >> 2] = 2;
   HEAP32[i30 + 4 >> 2] = i23;
   HEAP32[i30 + 8 >> 2] = i26;
   HEAP32[i30 + 12 >> 2] = 0;
   HEAP32[i30 + 16 >> 2] = 0;
   i31 = i30;
   i32 = i26;
  }
 } while (0);
 if ((i25 | 0) == 44) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 __ZN3WTF12StringAppendINS0_INS0_INS0_INS_6StringEPKcEES1_EES3_EES1_E7writeToEPt(i2, i32);
 i2 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
 i8 = _strlen(HEAP32[i10 >> 2] | 0) | 0;
 i10 = HEAP32[i12 >> 2] | 0;
 if ((i10 | 0) == 0) {
  i33 = 0;
 } else {
  i33 = HEAP32[i10 + 4 >> 2] | 0;
 }
 i10 = HEAP32[i16 >> 2] | 0;
 if ((i10 | 0) == 0) {
  i34 = 0;
 } else {
  i34 = HEAP32[i10 + 4 >> 2] | 0;
 }
 i10 = HEAP32[i20 >> 2] | 0;
 if ((i10 | 0) == 0) {
  i35 = 0;
 } else {
  i35 = HEAP32[i10 + 4 >> 2] | 0;
 }
 i10 = i8 + i2 + i33 + i34 + i35 | 0;
 if ((i7 | 0) != 0) {
  i35 = 0;
  while (1) {
   HEAP16[i32 + (i10 + i35 << 1) >> 1] = HEAPU8[i3 + i35 | 0] | 0;
   i35 = i35 + 1 | 0;
   if (i35 >>> 0 >= i7 >>> 0) {
    break;
   }
  }
 }
 HEAP32[i1 >> 2] = i31;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore9DOMWindow15showModalDialogERKN3WTF6StringES4_RS0_S5_PFvPS0_PvES7_(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i9 = i8 | 0;
 i10 = i8 + 8 | 0;
 i11 = i8 + 64 | 0;
 i12 = i8 + 80 | 0;
 i13 = i1 + 52 | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 if ((i14 | 0) == 0) {
  STACKTOP = i8;
  return;
 }
 if ((HEAP32[(HEAP32[i14 + 456 >> 2] | 0) + 336 >> 2] | 0) != (i1 | 0)) {
  STACKTOP = i8;
  return;
 }
 if ((HEAP32[i4 + 52 >> 2] | 0) == 0) {
  STACKTOP = i8;
  return;
 }
 i15 = i5 + 52 | 0;
 i5 = HEAP32[i15 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i8;
  return;
 }
 i16 = HEAP32[i14 + 32 >> 2] | 0;
 do {
  if ((i16 | 0) == 0) {
   i17 = i14;
  } else {
   if (!(__ZN7WebCore4Page35isAnyFrameHandlingBeforeUnloadEventEv(i16) | 0)) {
    i17 = HEAP32[i13 >> 2] | 0;
    break;
   }
   __ZN3WTF6StringC1EPKc(i9, H_BASE + 392 | 0);
   i18 = i9 | 0;
   i19 = HEAP32[i18 >> 2] | 0;
   if ((i19 | 0) == 0) {
    STACKTOP = i8;
    return;
   }
   do {
    if ((HEAP32[i19 + 4 >> 2] | 0) == 0) {
     i20 = i19;
    } else {
     i21 = HEAP32[i13 >> 2] | 0;
     do {
      if ((i21 | 0) == 0) {
       i22 = 0;
      } else {
       if ((HEAP32[(HEAP32[i21 + 456 >> 2] | 0) + 336 >> 2] | 0) != (i1 | 0)) {
        i22 = 0;
        break;
       }
       i23 = HEAP32[i21 + 32 >> 2] | 0;
       if ((i23 | 0) == 0) {
        i22 = 0;
        break;
       }
       i22 = HEAP32[i23 + 1148 >> 2] | 0;
      }
     } while (0);
     __ZN7WebCore11PageConsole10addMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringEmPNS_8DocumentE(i22, 1, 3, i9, 0, 0);
     i21 = HEAP32[i18 >> 2] | 0;
     if ((i21 | 0) != 0) {
      i20 = i21;
      break;
     }
     STACKTOP = i8;
     return;
    }
   } while (0);
   i18 = i20 | 0;
   i19 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
   if ((i19 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i20);
    STACKTOP = i8;
    return;
   } else {
    HEAP32[i18 >> 2] = i19;
    STACKTOP = i8;
    return;
   }
  }
 } while (0);
 if ((i17 | 0) == 0) {
  STACKTOP = i8;
  return;
 }
 i20 = HEAP32[i17 + 32 >> 2] | 0;
 if ((i20 | 0) == 0) {
  STACKTOP = i8;
  return;
 }
 if (!(__ZNK7WebCore6Chrome14canRunModalNowEv(HEAP32[i20 + 20 >> 2] | 0) | 0)) {
  STACKTOP = i8;
  return;
 }
 i20 = HEAP32[i15 >> 2] | 0;
 if ((i20 | 0) == 0) {
  STACKTOP = i8;
  return;
 }
 do {
  if (!(__ZN7WebCore16ScriptController21processingUserGestureEv() | 0)) {
   if ((HEAP8[(HEAP32[i20 + 36 >> 2] | 0) + 186 | 0] & 1) != 0) {
    break;
   }
   STACKTOP = i8;
   return;
  }
 } while (0);
 __ZN7WebCore19screenAvailableRectEPNS_6WidgetE(i11, HEAP32[(HEAP32[i13 >> 2] | 0) + 452 >> 2] | 0);
 __ZN7WebCore14WindowFeaturesC1ERKN3WTF6StringERKNS_9FloatRectE(i10, i3, i11);
 __ZN7WebCore9DOMWindow12createWindowERKN3WTF6StringERKNS1_12AtomicStringERKNS_14WindowFeaturesERS0_PNS_5FrameESD_PFvPS0_PvESF_(i12, i2, __ZN3WTF9emptyAtomE, i10, i4, i5, HEAP32[i13 >> 2] | 0, i6, i7);
 i7 = i12 | 0;
 i12 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 do {
  if ((i12 | 0) != 0) {
   __ZNK7WebCore6Chrome8runModalEv(HEAP32[(HEAP32[i12 + 32 >> 2] | 0) + 20 >> 2] | 0);
   i7 = i12 + 4 | 0;
   i6 = i7 | 0;
   i13 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i13 | 0) != 0) {
    HEAP32[i6 >> 2] = i13;
    break;
   }
   i13 = i7 - 4 | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 63](i13);
  }
 } while (0);
 i12 = i10 + 48 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 i7 = i10 + 40 | 0;
 if ((i13 | 0) != 0) {
  i6 = HEAP32[i7 >> 2] | 0;
  i5 = i6 + (i13 << 2) | 0;
  i13 = i6;
  while (1) {
   i6 = HEAP32[i13 >> 2] | 0;
   do {
    if ((i6 | 0) != 0) {
     i4 = i6 | 0;
     i2 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
     if ((i2 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i6);
      break;
     } else {
      HEAP32[i4 >> 2] = i2;
      break;
     }
    }
   } while (0);
   i13 = i13 + 4 | 0;
   if ((i13 | 0) == (i5 | 0)) {
    break;
   }
  }
  HEAP32[i12 >> 2] = 0;
 }
 i12 = HEAP32[i7 >> 2] | 0;
 if ((i12 | 0) == 0) {
  STACKTOP = i8;
  return;
 }
 HEAP32[i7 >> 2] = 0;
 HEAP32[i10 + 44 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i12);
 STACKTOP = i8;
 return;
}
function __ZN3WTF13tryMakeStringINS_6StringEPKcEENS_10PassRefPtrINS_10StringImplEEET_T0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = _strlen(i3 | 0) | 0;
 i8 = i2 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 i9 = (i2 | 0) == 0;
 if (i9) {
  i10 = 0;
 } else {
  i10 = HEAP32[i2 + 4 >> 2] | 0;
 }
 i11 = _llvm_uadd_with_overflow_i32(i10 | 0, i7 | 0) | 0;
 i10 = i11;
 if (tempRet0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 do {
  if (!i9) {
   if ((HEAP32[i2 + 16 >> 2] & 32 | 0) != 0) {
    break;
   }
   do {
    if ((i10 | 0) == 0) {
     i11 = __ZN3WTF10StringImpl5emptyEv() | 0;
     if ((i11 | 0) == 0) {
      i12 = 37;
      break;
     }
     i13 = i11 | 0;
     HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
     i14 = i11;
     i15 = 0;
    } else {
     if (i10 >>> 0 > 2147483637 >>> 0) {
      i12 = 37;
      break;
     }
     __ZN3WTF13tryFastMallocEj(i5, (i10 << 1) + 20 | 0);
     i11 = i5 | 0;
     i13 = HEAP32[i11 >> 2] | 0;
     HEAP32[i11 >> 2] = 0;
     if ((i13 | 0) == 0) {
      i12 = 37;
      break;
     }
     i11 = i13 + 20 | 0;
     HEAP32[i13 >> 2] = 2;
     HEAP32[i13 + 4 >> 2] = i10;
     HEAP32[i13 + 8 >> 2] = i11;
     HEAP32[i13 + 12 >> 2] = 0;
     HEAP32[i13 + 16 >> 2] = 0;
     i14 = i13;
     i15 = i11;
    }
   } while (0);
   if ((i12 | 0) == 37) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   i11 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i11 | 0) == 0) {
     i16 = 0;
    } else {
     i13 = HEAP32[i11 + 4 >> 2] | 0;
     do {
      if ((HEAP32[i11 + 16 >> 2] & 32 | 0) == 0) {
       i17 = HEAP32[i11 + 8 >> 2] | 0;
       if ((i13 | 0) == 0) {
        break;
       } else {
        i18 = 0;
       }
       while (1) {
        HEAP16[i15 + (i18 << 1) >> 1] = HEAP16[i17 + (i18 << 1) >> 1] | 0;
        i18 = i18 + 1 | 0;
        if (i18 >>> 0 >= i13 >>> 0) {
         break;
        }
       }
      } else {
       i17 = HEAP32[i11 + 8 >> 2] | 0;
       if ((i13 | 0) == 0) {
        break;
       } else {
        i19 = 0;
       }
       while (1) {
        HEAP16[i15 + (i19 << 1) >> 1] = HEAPU8[i17 + i19 | 0] | 0;
        i19 = i19 + 1 | 0;
        if (i19 >>> 0 >= i13 >>> 0) {
         break;
        }
       }
      }
     } while (0);
     i13 = HEAP32[i8 >> 2] | 0;
     if ((i13 | 0) == 0) {
      i16 = 0;
      break;
     }
     i16 = HEAP32[i13 + 4 >> 2] | 0;
    }
   } while (0);
   if ((i7 | 0) != 0) {
    i11 = 0;
    while (1) {
     HEAP16[i15 + (i11 + i16 << 1) >> 1] = HEAPU8[i3 + i11 | 0] | 0;
     i11 = i11 + 1 | 0;
     if (i11 >>> 0 >= i7 >>> 0) {
      break;
     }
    }
   }
   HEAP32[i1 >> 2] = i14;
   STACKTOP = i4;
   return;
  }
 } while (0);
 do {
  if ((i10 | 0) == 0) {
   i14 = __ZN3WTF10StringImpl5emptyEv() | 0;
   if ((i14 | 0) == 0) {
    i12 = 19;
    break;
   }
   i16 = i14 | 0;
   HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
   i20 = i14;
   i21 = 0;
  } else {
   if (i10 >>> 0 > 4294967275 >>> 0) {
    i12 = 19;
    break;
   }
   __ZN3WTF13tryFastMallocEj(i6, i10 + 20 | 0);
   i14 = i6 | 0;
   i16 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = 0;
   if ((i16 | 0) == 0) {
    i12 = 19;
    break;
   }
   i14 = i16 + 20 | 0;
   HEAP32[i16 >> 2] = 2;
   HEAP32[i16 + 4 >> 2] = i10;
   HEAP32[i16 + 8 >> 2] = i14;
   HEAP32[i16 + 12 >> 2] = 0;
   HEAP32[i16 + 16 >> 2] = 32;
   i20 = i16;
   i21 = i14;
  }
 } while (0);
 if ((i12 | 0) == 19) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 i12 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i12 | 0) == 0) {
   i22 = 0;
  } else {
   i10 = HEAP32[i12 + 4 >> 2] | 0;
   i6 = HEAP32[i12 + 8 >> 2] | 0;
   if ((i10 | 0) == 0) {
    i23 = i12;
   } else {
    i14 = 0;
    while (1) {
     HEAP8[i21 + i14 | 0] = HEAP8[i6 + i14 | 0] | 0;
     i14 = i14 + 1 | 0;
     if (i14 >>> 0 >= i10 >>> 0) {
      break;
     }
    }
    i10 = HEAP32[i8 >> 2] | 0;
    if ((i10 | 0) == 0) {
     i22 = 0;
     break;
    } else {
     i23 = i10;
    }
   }
   i22 = HEAP32[i23 + 4 >> 2] | 0;
  }
 } while (0);
 _memcpy(i21 + i22 | 0, i3 | 0, i7) | 0;
 HEAP32[i1 >> 2] = i20;
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore9DOMWindow14sessionStorageERi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i1 + 52 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = 0;
  STACKTOP = i3;
  return i10 | 0;
 }
 if ((HEAP32[(HEAP32[i9 + 456 >> 2] | 0) + 336 >> 2] | 0) != (i1 | 0)) {
  i10 = 0;
  STACKTOP = i3;
  return i10 | 0;
 }
 i9 = HEAP32[i1 + 44 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = 0;
  STACKTOP = i3;
  return i10 | 0;
 }
 i11 = i9 - 156 + 68 | 0;
 i9 = i11;
 if ((i11 | 0) == 0) {
  i10 = 0;
  STACKTOP = i3;
  return i10 | 0;
 }
 i12 = i11 + 100 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 if (!(__ZNK7WebCore14SecurityOrigin16canAccessStorageEPKS0_NS0_25ShouldAllowFromThirdPartyE(i13, FUNCTION_TABLE_ii[HEAP32[(HEAP32[i11 >> 2] | 0) + 320 >> 2] & 31](i9) | 0, 0) | 0)) {
  HEAP32[i2 >> 2] = 18;
  i10 = 0;
  STACKTOP = i3;
  return i10 | 0;
 }
 i11 = i1 + 164 | 0;
 i1 = HEAP32[i11 >> 2] | 0;
 if ((i1 | 0) != 0) {
  i13 = HEAP32[i1 + 20 >> 2] | 0;
  if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i13 >> 2] | 0) + 36 >> 2] & 3](i13, HEAP32[i8 >> 2] | 0) | 0) {
   i10 = HEAP32[i11 >> 2] | 0;
   STACKTOP = i3;
   return i10 | 0;
  } else {
   HEAP32[i2 >> 2] = 18;
   i10 = 0;
   STACKTOP = i3;
   return i10 | 0;
  }
 }
 i13 = __ZNK7WebCore8Document4pageEv(i9) | 0;
 if ((i13 | 0) == 0) {
  i10 = 0;
  STACKTOP = i3;
  return i10 | 0;
 }
 i9 = __ZN7WebCore4Page14sessionStorageEb(i13, 1) | 0;
 i13 = HEAP32[(HEAP32[i9 >> 2] | 0) + 8 >> 2] | 0;
 i1 = HEAP32[i12 >> 2] | 0;
 i12 = i5 | 0;
 HEAP32[i12 >> 2] = i1;
 if ((i1 | 0) != 0) {
  i14 = i1 | 0;
  tempValue = HEAP32[i14 >> 2] | 0, HEAP32[i14 >> 2] = tempValue + 1, tempValue;
 }
 FUNCTION_TABLE_viii[i13 & 1](i4, i9, i5);
 i5 = i4 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 i5 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i12 = i5 | 0;
   if (((tempValue = HEAP32[i12 >> 2] | 0, HEAP32[i12 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN7WebCore14SecurityOriginD2Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  }
 } while (0);
 if (!(FUNCTION_TABLE_iii[HEAP32[(HEAP32[i4 >> 2] | 0) + 36 >> 2] & 3](i4, HEAP32[i8 >> 2] | 0) | 0)) {
  HEAP32[i2 >> 2] = 18;
  if ((i4 | 0) == 0) {
   i10 = 0;
   STACKTOP = i3;
   return i10 | 0;
  }
  i2 = i4 + 4 | 0;
  i5 = i2 | 0;
  i12 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
  if ((i12 | 0) != 0) {
   HEAP32[i5 >> 2] = i12;
   i10 = 0;
   STACKTOP = i3;
   return i10 | 0;
  }
  i12 = i2 - 4 | 0;
  if ((i12 | 0) == 0) {
   i10 = 0;
   STACKTOP = i3;
   return i10 | 0;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 63](i12);
  i10 = 0;
  STACKTOP = i3;
  return i10 | 0;
 }
 i12 = HEAP32[i8 >> 2] | 0;
 i8 = i7 | 0;
 HEAP32[i8 >> 2] = i4;
 __ZN7WebCore7Storage6createEPNS_5FrameEN3WTF10PassRefPtrINS_11StorageAreaEEE(i6, i12, i7);
 i7 = i6 | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i12 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = i6;
 do {
  if ((i12 | 0) != 0) {
   i6 = i12 + 16 | 0;
   i4 = i6 | 0;
   i2 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i4 >> 2] = i2;
    break;
   }
   i2 = i6 - 16 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 24 >> 2] & 63](i2);
  }
 } while (0);
 i12 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i7 = i12 + 16 | 0;
   i2 = i7 | 0;
   i6 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i2 >> 2] = i6;
    break;
   }
   i6 = i7 - 16 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 24 >> 2] & 63](i6);
  }
 } while (0);
 i12 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i8 = i12 + 4 | 0;
   i6 = i8 | 0;
   i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i6 >> 2] = i7;
    break;
   }
   i7 = i8 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 63](i7);
  }
 } while (0);
 i10 = HEAP32[i11 >> 2] | 0;
 STACKTOP = i3;
 return i10 | 0;
}
function __ZN3WTF13tryMakeStringINS_12StringAppendINS1_INS_6StringEPKcEES2_EES4_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = _strlen(i3 | 0) | 0;
 i8 = i2 + 4 | 0;
 i9 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
 i10 = i2 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 i12 = (i11 | 0) == 0;
 if (i12) {
  i13 = 0;
 } else {
  i13 = HEAP32[i11 + 4 >> 2] | 0;
 }
 i14 = i2 + 8 | 0;
 i15 = HEAP32[i14 >> 2] | 0;
 i16 = (i15 | 0) == 0;
 if (i16) {
  i17 = 0;
 } else {
  i17 = HEAP32[i15 + 4 >> 2] | 0;
 }
 i18 = _llvm_uadd_with_overflow_i32(i13 + i9 + i17 | 0, i7 | 0) | 0;
 i17 = i18;
 if (tempRet0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 if (i12) {
  i19 = 9;
 } else {
  if ((HEAP32[i11 + 16 >> 2] & 32 | 0) != 0) {
   i19 = 9;
  }
 }
 do {
  if ((i19 | 0) == 9) {
   if (!i16) {
    if ((HEAP32[i15 + 16 >> 2] & 32 | 0) == 0) {
     break;
    }
   }
   do {
    if ((i17 | 0) == 0) {
     i11 = __ZN3WTF10StringImpl5emptyEv() | 0;
     if ((i11 | 0) == 0) {
      i19 = 22;
      break;
     }
     i12 = i11 | 0;
     HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
     i20 = i11;
     i21 = 0;
    } else {
     if (i17 >>> 0 > 4294967275 >>> 0) {
      i19 = 22;
      break;
     }
     __ZN3WTF13tryFastMallocEj(i6, i17 + 20 | 0);
     i11 = i6 | 0;
     i12 = HEAP32[i11 >> 2] | 0;
     HEAP32[i11 >> 2] = 0;
     if ((i12 | 0) == 0) {
      i19 = 22;
      break;
     }
     i11 = i12 + 20 | 0;
     HEAP32[i12 >> 2] = 2;
     HEAP32[i12 + 4 >> 2] = i17;
     HEAP32[i12 + 8 >> 2] = i11;
     HEAP32[i12 + 12 >> 2] = 0;
     HEAP32[i12 + 16 >> 2] = 32;
     i20 = i12;
     i21 = i11;
    }
   } while (0);
   if ((i19 | 0) == 22) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   __ZN3WTF12StringAppendINS0_INS_6StringEPKcEES1_E7writeToEPh(i2, i21);
   i11 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
   i12 = HEAP32[i10 >> 2] | 0;
   if ((i12 | 0) == 0) {
    i22 = 0;
   } else {
    i22 = HEAP32[i12 + 4 >> 2] | 0;
   }
   i12 = HEAP32[i14 >> 2] | 0;
   if ((i12 | 0) == 0) {
    i23 = 0;
   } else {
    i23 = HEAP32[i12 + 4 >> 2] | 0;
   }
   _memcpy(i21 + (i22 + i11 + i23) | 0, i3 | 0, i7) | 0;
   HEAP32[i1 >> 2] = i20;
   STACKTOP = i4;
   return;
  }
 } while (0);
 do {
  if ((i17 | 0) == 0) {
   i20 = __ZN3WTF10StringImpl5emptyEv() | 0;
   if ((i20 | 0) == 0) {
    i19 = 36;
    break;
   }
   i23 = i20 | 0;
   HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 2;
   i24 = i20;
   i25 = 0;
  } else {
   if (i17 >>> 0 > 2147483637 >>> 0) {
    i19 = 36;
    break;
   }
   __ZN3WTF13tryFastMallocEj(i5, (i17 << 1) + 20 | 0);
   i20 = i5 | 0;
   i23 = HEAP32[i20 >> 2] | 0;
   HEAP32[i20 >> 2] = 0;
   if ((i23 | 0) == 0) {
    i19 = 36;
    break;
   }
   i20 = i23 + 20 | 0;
   HEAP32[i23 >> 2] = 2;
   HEAP32[i23 + 4 >> 2] = i17;
   HEAP32[i23 + 8 >> 2] = i20;
   HEAP32[i23 + 12 >> 2] = 0;
   HEAP32[i23 + 16 >> 2] = 0;
   i24 = i23;
   i25 = i20;
  }
 } while (0);
 if ((i19 | 0) == 36) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 __ZN3WTF12StringAppendINS0_INS_6StringEPKcEES1_E7writeToEPt(i2, i25);
 i2 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
 i8 = HEAP32[i10 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i26 = 0;
 } else {
  i26 = HEAP32[i8 + 4 >> 2] | 0;
 }
 i8 = HEAP32[i14 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i27 = 0;
 } else {
  i27 = HEAP32[i8 + 4 >> 2] | 0;
 }
 i8 = i26 + i2 + i27 | 0;
 if ((i7 | 0) != 0) {
  i27 = 0;
  while (1) {
   HEAP16[i25 + (i8 + i27 << 1) >> 1] = HEAPU8[i3 + i27 | 0] | 0;
   i27 = i27 + 1 | 0;
   if (i27 >>> 0 >= i7 >>> 0) {
    break;
   }
  }
 }
 HEAP32[i1 >> 2] = i24;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore16PostMessageTimer5eventEPNS_22ScriptExecutionContextE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i2 + 60 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 i11 = i6 | 0;
 HEAP32[i11 >> 2] = i12;
 __ZN7WebCore11MessagePort13entanglePortsERNS_22ScriptExecutionContextEN3WTF10PassOwnPtrINS3_6VectorINS3_6OwnPtrINS_18MessagePortChannelEEELj1ENS3_15CrashOnOverflowEEEEE(i5, i3, i6);
 i6 = i5 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 i6 = HEAP32[i11 >> 2] | 0;
 if ((i6 | 0) != 0) {
  i11 = i6 + 8 | 0;
  i3 = HEAP32[i11 >> 2] | 0;
  i12 = i6 | 0;
  if ((i3 | 0) != 0) {
   i13 = HEAP32[i12 >> 2] | 0;
   i14 = i13 + (i3 << 2) | 0;
   i3 = i13;
   while (1) {
    i13 = HEAP32[i3 >> 2] | 0;
    if ((i13 | 0) != 0) {
     __ZN7WebCore18MessagePortChannelD1Ev(i13);
     __ZN3WTF8fastFreeEPv(i13);
    }
    i3 = i3 + 4 | 0;
    if ((i3 | 0) == (i14 | 0)) {
     break;
    }
   }
   HEAP32[i11 >> 2] = 0;
  }
  i11 = HEAP32[i12 >> 2] | 0;
  if (!((i6 + 12 | 0) == (i11 | 0) | (i11 | 0) == 0)) {
   HEAP32[i12 >> 2] = 0;
   HEAP32[i6 + 4 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i11);
  }
  __ZN3WTF8fastFreeEPv(i6);
 }
 i6 = i7 | 0;
 HEAP32[i6 >> 2] = i5;
 i5 = i8 | 0;
 i11 = HEAP32[i2 + 48 >> 2] | 0;
 HEAP32[i5 >> 2] = i11;
 if ((i11 | 0) != 0) {
  i12 = i11 | 0;
  tempValue = HEAP32[i12 >> 2] | 0, HEAP32[i12 >> 2] = tempValue + 1, tempValue;
 }
 i12 = i9 | 0;
 HEAP32[i12 >> 2] = 0;
 i11 = i10 | 0;
 i14 = HEAP32[i2 + 56 >> 2] | 0;
 i3 = i14 | 0;
 HEAP32[i11 >> 2] = i3;
 if ((i14 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 56 >> 2] & 63](i3);
 }
 __ZN7WebCore12MessageEvent6createEN3WTF10PassOwnPtrINS1_6VectorINS1_6RefPtrINS_11MessagePortEEELj1ENS1_15CrashOnOverflowEEEEENS1_10PassRefPtrINS_21SerializedScriptValueEEERKNS1_6StringESF_NSA_INS_11EventTargetEEE(i1, i7, i8, i2 + 52 | 0, i9, i10);
 i10 = HEAP32[i11 >> 2] | 0;
 if ((i10 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 60 >> 2] & 63](i10);
 }
 i10 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i12 = i10 | 0;
   i11 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i12 >> 2] = i11;
    break;
   }
  }
 } while (0);
 i10 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i5 = i10 | 0;
   if (((tempValue = HEAP32[i5 >> 2] | 0, HEAP32[i5 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN7WebCore21SerializedScriptValueD1Ev(i10);
   __ZN3WTF8fastFreeEPv(i10);
  }
 } while (0);
 i10 = HEAP32[i6 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i6 = i10 + 8 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 i11 = i10 | 0;
 if ((i5 | 0) != 0) {
  i12 = HEAP32[i11 >> 2] | 0;
  i9 = i12 + (i5 << 2) | 0;
  i5 = i12;
  while (1) {
   i12 = HEAP32[i5 >> 2] | 0;
   do {
    if ((i12 | 0) != 0) {
     i2 = i12 + 36 | 0;
     i8 = i2 | 0;
     i7 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     if ((i7 | 0) != 0) {
      HEAP32[i8 >> 2] = i7;
      break;
     }
     i7 = i2 - 36 | 0;
     if ((i7 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 44 >> 2] & 63](i7);
    }
   } while (0);
   i5 = i5 + 4 | 0;
   if ((i5 | 0) == (i9 | 0)) {
    break;
   }
  }
  HEAP32[i6 >> 2] = 0;
 }
 i6 = HEAP32[i11 >> 2] | 0;
 if (!((i10 + 12 | 0) == (i6 | 0) | (i6 | 0) == 0)) {
  HEAP32[i11 >> 2] = 0;
  HEAP32[i10 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i6);
 }
 __ZN3WTF8fastFreeEPv(i10);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore9DOMWindow13dispatchEventEN3WTF10PassRefPtrINS_5EventEEENS2_INS_11EventTargetEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i1 | 0;
 i8 = i1;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 56 >> 2] & 63](i7);
 i9 = i2 | 0;
 i2 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 do {
  if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 31](i2) | 0) == 14) {
   i9 = HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0;
   i10 = HEAP32[i2 + 12 >> 2] | 0;
   if ((i10 | 0) == (HEAP32[i9 + 292 >> 2] | 0)) {
    i11 = i1 + 160 | 0;
    if ((HEAP32[i11 >> 2] | 0) == 1) {
     i12 = 1;
     break;
    }
    HEAP32[i11 >> 2] = 1;
    i13 = 8;
    break;
   }
   if ((i10 | 0) != (HEAP32[i9 + 288 >> 2] | 0)) {
    i13 = 8;
    break;
   }
   i9 = i1 + 160 | 0;
   if ((HEAP32[i9 >> 2] | 0) == 2) {
    i12 = 1;
    break;
   }
   HEAP32[i9 >> 2] = 2;
   i13 = 8;
  } else {
   i13 = 8;
  }
 } while (0);
 if ((i13 | 0) == 8) {
  i13 = i3 | 0;
  i3 = HEAP32[i13 >> 2] | 0;
  i9 = i5 | 0;
  do {
   if ((i3 | 0) == 0) {
    HEAP32[i9 >> 2] = i7;
    if ((i1 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 56 >> 2] & 63](i7);
   } else {
    HEAP32[i13 >> 2] = 0;
    HEAP32[i9 >> 2] = i3;
   }
  } while (0);
  __ZN7WebCore5Event9setTargetEN3WTF10PassRefPtrINS_11EventTargetEEE(i2, i5);
  i5 = HEAP32[i9 >> 2] | 0;
  if ((i5 | 0) != 0) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 60 >> 2] & 63](i5);
  }
  HEAP32[i2 + 28 >> 2] = i7;
  HEAP16[i2 + 24 >> 1] = 2;
  i5 = HEAP32[i1 + 52 >> 2] | 0;
  L19 : do {
   if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) == 0) {
    __ZN7WebCore30InspectorInstrumentationCookieC1Ev(i6);
   } else {
    do {
     if ((i5 | 0) != 0) {
      i9 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(HEAP32[i5 + 32 >> 2] | 0) | 0;
      if ((i9 | 0) == 0) {
       break;
      }
      __ZN7WebCore24InspectorInstrumentation29willDispatchEventOnWindowImplEPNS_19InstrumentingAgentsERKNS_5EventEPNS_9DOMWindowE(i6, i9, i2, i1);
      break L19;
     }
    } while (0);
    __ZN7WebCore30InspectorInstrumentationCookieC1Ev(i6);
   }
  } while (0);
  i1 = __ZN7WebCore11EventTarget18fireEventListenersEPNS_5EventE(i7, i2) | 0;
  do {
   if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) != 0) {
    if ((HEAP32[i6 >> 2] | 0) == 0) {
     break;
    }
    __ZN7WebCore24InspectorInstrumentation28didDispatchEventOnWindowImplERKNS_30InspectorInstrumentationCookieE(i6);
   }
  } while (0);
  __ZN7WebCore30InspectorInstrumentationCookieD1Ev(i6);
  i12 = i1;
 }
 if ((i2 | 0) == 0) {
  i14 = HEAP32[i8 >> 2] | 0;
  i15 = i14 + 60 | 0;
  i16 = HEAP32[i15 >> 2] | 0;
  FUNCTION_TABLE_vi[i16 & 63](i7);
  STACKTOP = i4;
  return i12 | 0;
 }
 i1 = i2 + 8 | 0;
 i2 = i1 | 0;
 i6 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i6 | 0) != 0) {
  HEAP32[i2 >> 2] = i6;
  i14 = HEAP32[i8 >> 2] | 0;
  i15 = i14 + 60 | 0;
  i16 = HEAP32[i15 >> 2] | 0;
  FUNCTION_TABLE_vi[i16 & 63](i7);
  STACKTOP = i4;
  return i12 | 0;
 }
 i6 = i1 - 8 | 0;
 if ((i6 | 0) == 0) {
  i14 = HEAP32[i8 >> 2] | 0;
  i15 = i14 + 60 | 0;
  i16 = HEAP32[i15 >> 2] | 0;
  FUNCTION_TABLE_vi[i16 & 63](i7);
  STACKTOP = i4;
  return i12 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 63](i6);
 i14 = HEAP32[i8 >> 2] | 0;
 i15 = i14 + 60 | 0;
 i16 = HEAP32[i15 >> 2] | 0;
 FUNCTION_TABLE_vi[i16 & 63](i7);
 STACKTOP = i4;
 return i12 | 0;
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
function __ZN3WTF9HashTableIPN7WebCore9DOMWindowENS_12KeyValuePairIS3_jEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_jS9_NS_10HashTraitsIS3_EENSB_IjEEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKS3_iEENS_18HashTableAddResultINS_17HashTableIteratorIS3_S5_S7_S9_SF_SC_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableIPN7WebCore9DOMWindowENS_12KeyValuePairIS3_jEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_jS9_NS_10HashTraitsIS3_EENSB_IjEEE18KeyValuePairTraitsESC_E6rehashEiPS5_(i2, i8, 0) | 0;
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
  i28 = __ZN3WTF9HashTableIPN7WebCore9DOMWindowENS_12KeyValuePairIS3_jEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_jS9_NS_10HashTraitsIS3_EENSB_IjEEE18KeyValuePairTraitsESC_E6rehashEiPS5_(i2, i31, i26) | 0;
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
function __ZN3WTF9HashTableIPN7WebCore17DOMWindowPropertyES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableIPN7WebCore17DOMWindowPropertyES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i8, 0) | 0;
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
  i26 = __ZN3WTF9HashTableIPN7WebCore17DOMWindowPropertyES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i29, i25) | 0;
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
function __ZN7WebCore9DOMWindow23removeAllEventListenersEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 __ZN7WebCore11EventTarget23removeAllEventListenersEv(i1 | 0);
 HEAP32[i6 >> 2] = i1;
 if (HEAP8[H_BASE + 1936 | 0] | 0) {
  i7 = HEAP32[H_BASE + 1952 >> 2] | 0;
 } else {
  i8 = __ZN3WTF10fastMallocEj(20) | 0;
  i9 = i8;
  _memset(i8 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 1952 >> 2] = i9;
  HEAP8[H_BASE + 1936 | 0] = 1;
  i7 = i9;
 }
 __ZN3WTF14HashCountedSetIPN7WebCore9DOMWindowENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE4findERKS3_(i4, i7, i6);
 i9 = HEAP32[i4 >> 2] | 0;
 i4 = i7 + 4 | 0;
 do {
  if ((i9 | 0) != ((HEAP32[i7 >> 2] | 0) + (HEAP32[i4 >> 2] << 3) | 0)) {
   HEAP32[i9 >> 2] = -1;
   i8 = i7 + 16 | 0;
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
   i8 = i7 + 12 | 0;
   i10 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i10;
   i8 = HEAP32[i4 >> 2] | 0;
   if ((i10 * 6 & -1 | 0) < (i8 | 0) & (i8 | 0) > 8) {
    __ZN3WTF9HashTableIPN7WebCore9DOMWindowENS_12KeyValuePairIS3_jEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_jS9_NS_10HashTraitsIS3_EENSB_IjEEE18KeyValuePairTraitsESC_E6rehashEiPS5_(i7 | 0, (i8 | 0) / 2 & -1, 0) | 0;
   }
   i8 = HEAP32[(HEAP32[i6 >> 2] | 0) + 52 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   i10 = HEAP32[i8 + 32 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   __ZN7WebCore6Chrome23enableSuddenTerminationEv(HEAP32[i10 + 20 >> 2] | 0);
  }
 } while (0);
 HEAP32[i5 >> 2] = i1;
 if (HEAP8[H_BASE + 1928 | 0] | 0) {
  i11 = HEAP32[H_BASE + 1944 >> 2] | 0;
 } else {
  i1 = __ZN3WTF10fastMallocEj(20) | 0;
  i6 = i1;
  _memset(i1 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 1944 >> 2] = i6;
  HEAP8[H_BASE + 1928 | 0] = 1;
  i11 = i6;
 }
 __ZN3WTF14HashCountedSetIPN7WebCore9DOMWindowENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE4findERKS3_(i3, i11, i5);
 i6 = HEAP32[i3 >> 2] | 0;
 i3 = i11 + 4 | 0;
 if ((i6 | 0) == ((HEAP32[i11 >> 2] | 0) + (HEAP32[i3 >> 2] << 3) | 0)) {
  STACKTOP = i2;
  return;
 }
 HEAP32[i6 >> 2] = -1;
 i6 = i11 + 16 | 0;
 HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 i6 = i11 + 12 | 0;
 i1 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 HEAP32[i6 >> 2] = i1;
 i6 = HEAP32[i3 >> 2] | 0;
 if ((i1 * 6 & -1 | 0) < (i6 | 0) & (i6 | 0) > 8) {
  __ZN3WTF9HashTableIPN7WebCore9DOMWindowENS_12KeyValuePairIS3_jEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_jS9_NS_10HashTraitsIS3_EENSB_IjEEE18KeyValuePairTraitsESC_E6rehashEiPS5_(i11 | 0, (i6 | 0) / 2 & -1, 0) | 0;
 }
 i6 = HEAP32[(HEAP32[i5 >> 2] | 0) + 52 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i5 = HEAP32[i6 + 32 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore6Chrome23enableSuddenTerminationEv(HEAP32[i5 + 20 >> 2] | 0);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore16PostMessageTimerD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1904;
 i2 = HEAP32[i1 + 68 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore15ScriptCallStackD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
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
   if (((tempValue = HEAP32[i4 >> 2] | 0, HEAP32[i4 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN7WebCore14SecurityOriginD2Ev(i2);
   __ZN3WTF8fastFreeEPv(i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 60 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i4 = i2 + 8 | 0;
  i3 = HEAP32[i4 >> 2] | 0;
  i5 = i2 | 0;
  if ((i3 | 0) != 0) {
   i6 = HEAP32[i5 >> 2] | 0;
   i7 = i6 + (i3 << 2) | 0;
   i3 = i6;
   while (1) {
    i6 = HEAP32[i3 >> 2] | 0;
    if ((i6 | 0) != 0) {
     __ZN7WebCore18MessagePortChannelD1Ev(i6);
     __ZN3WTF8fastFreeEPv(i6);
    }
    i3 = i3 + 4 | 0;
    if ((i3 | 0) == (i7 | 0)) {
     break;
    }
   }
   HEAP32[i4 >> 2] = 0;
  }
  i4 = HEAP32[i5 >> 2] | 0;
  if (!((i2 + 12 | 0) == (i4 | 0) | (i4 | 0) == 0)) {
   HEAP32[i5 >> 2] = 0;
   HEAP32[i2 + 4 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i4);
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 56 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 + 36 | 0;
   i5 = i4 | 0;
   i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i5 >> 2] = i7;
    break;
   }
   i7 = i4 - 36 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 44 >> 2] & 63](i7);
  }
 } while (0);
 i2 = HEAP32[i1 + 52 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i7 = i2 | 0;
   i4 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i7 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 48 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   if (((tempValue = HEAP32[i4 >> 2] | 0, HEAP32[i4 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN7WebCore21SerializedScriptValueD1Ev(i2);
   __ZN3WTF8fastFreeEPv(i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 44 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i8 = i1;
  __ZN7WebCore9TimerBaseD2Ev(i8);
  return;
 }
 i4 = i2 + 36 | 0;
 i2 = i4 | 0;
 i7 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i7 | 0) != 0) {
  HEAP32[i2 >> 2] = i7;
  i8 = i1;
  __ZN7WebCore9TimerBaseD2Ev(i8);
  return;
 }
 i7 = i4 - 36 | 0;
 if ((i7 | 0) == 0) {
  i8 = i1;
  __ZN7WebCore9TimerBaseD2Ev(i8);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 44 >> 2] & 63](i7);
 i8 = i1;
 __ZN7WebCore9TimerBaseD2Ev(i8);
 return;
}
function __ZN7WebCore9DOMWindow5focusEPNS_22ScriptExecutionContextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 52 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i7 = HEAP32[i6 + 32 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 if (__ZN7WebCore27WindowFocusAllowedIndicator18windowFocusAllowedEv() | 0) {
  i8 = 1;
 } else {
  i8 = (HEAP8[(HEAP32[(HEAP32[i5 >> 2] | 0) + 36 >> 2] | 0) + 193 | 0] & 64) == 0;
 }
 do {
  if ((i2 | 0) == 0) {
   i9 = i8;
  } else {
   i6 = i2 - 156 + 68 | 0;
   i10 = HEAP32[i5 >> 2] | 0;
   if ((i10 | 0) == 0) {
    i9 = i8;
    break;
   }
   i11 = __ZN7WebCore11FrameLoader6openerEv(i10 + 80 | 0) | 0;
   if ((i11 | 0) == 0) {
    i9 = i8;
    break;
   }
   if ((HEAP32[(HEAP32[i11 + 456 >> 2] | 0) + 336 >> 2] | 0) == 0) {
    i9 = i8;
    break;
   }
   i11 = HEAP32[i5 >> 2] | 0;
   do {
    if ((i11 | 0) == 0) {
     i12 = 0;
    } else {
     i10 = __ZN7WebCore11FrameLoader6openerEv(i11 + 80 | 0) | 0;
     if ((i10 | 0) == 0) {
      i12 = 0;
      break;
     }
     i12 = HEAP32[(HEAP32[i10 + 456 >> 2] | 0) + 336 >> 2] | 0;
    }
   } while (0);
   if ((i12 | 0) == (i1 | 0)) {
    i9 = i8;
    break;
   }
   i11 = HEAP32[i6 + 336 >> 2] | 0;
   i10 = HEAP32[i5 >> 2] | 0;
   do {
    if ((i10 | 0) == 0) {
     i13 = 0;
    } else {
     i14 = __ZN7WebCore11FrameLoader6openerEv(i10 + 80 | 0) | 0;
     if ((i14 | 0) == 0) {
      i13 = 0;
      break;
     }
     i13 = HEAP32[(HEAP32[i14 + 456 >> 2] | 0) + 336 >> 2] | 0;
    }
   } while (0);
   i9 = (i11 | 0) == (i13 | 0) | i8;
  }
 } while (0);
 i8 = HEAP32[i5 >> 2] | 0;
 if ((HEAP32[i8 + 28 >> 2] | 0) != (i8 | 0) | i9 ^ 1) {
  i15 = i8;
 } else {
  __ZNK7WebCore6Chrome5focusEv(HEAP32[i7 + 20 >> 2] | 0);
  i15 = HEAP32[i5 >> 2] | 0;
 }
 if ((i15 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i8 = HEAP32[(HEAP32[i7 + 32 >> 2] | 0) + 4 >> 2] | 0;
 do {
  if (!((i8 | 0) == 0 | (i8 | 0) == (i15 | 0))) {
   i7 = HEAP32[i8 + 456 >> 2] | 0;
   i9 = i4 | 0;
   HEAP32[i9 >> 2] = 0;
   __ZN7WebCore8Document17setFocusedElementEN3WTF10PassRefPtrINS_7ElementEEENS_14FocusDirectionE(i7, i4, 0) | 0;
   i7 = HEAP32[i9 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   i9 = i7 + 8 | 0;
   i7 = i9 | 0;
   i13 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   HEAP32[i7 >> 2] = i13;
   if ((i13 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore12EventHandler17focusDocumentViewEv(HEAP32[(HEAP32[i5 >> 2] | 0) + 472 >> 2] | 0);
 STACKTOP = i3;
 return;
}
function __ZN3WTF9HashTableIPN7WebCore9DOMWindowENS_12KeyValuePairIS3_jEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_jS9_NS_10HashTraitsIS3_EENSB_IjEEE18KeyValuePairTraitsESC_E6rehashEiPS5_(i1, i2, i3) {
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
   i19 = i16 + (i14 << 3) | 0;
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
      i34 = i16 + (i33 << 3) | 0;
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
   i16 = i2;
   i17 = i30;
   i13 = HEAP32[i16 + 4 >> 2] | 0;
   HEAP32[i17 >> 2] = HEAP32[i16 >> 2];
   HEAP32[i17 + 4 >> 2] = i13;
   i15 = (i2 | 0) == (i3 | 0) ? i30 : i12;
  }
  i13 = i11 + 1 | 0;
  if ((i13 | 0) == (i5 | 0)) {
   i8 = i15;
   break;
  } else {
   i11 = i13;
   i12 = i15;
  }
 }
 i9 = i1 + 16 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i7;
 __ZN3WTF8fastFreeEPv(i10);
 return i8 | 0;
}
function __ZN7WebCore9DOMWindow6promptERKN3WTF6StringES4_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i2 + 52 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i5;
  return;
 }
 i10 = HEAP32[i9 + 32 >> 2] | 0;
 do {
  if ((i10 | 0) == 0) {
   i11 = i9;
  } else {
   if (!(__ZN7WebCore4Page35isAnyFrameHandlingBeforeUnloadEventEv(i10) | 0)) {
    i11 = HEAP32[i8 >> 2] | 0;
    break;
   }
   __ZN3WTF6StringC1EPKc(i6, H_BASE + 8 | 0);
   i12 = i6 | 0;
   i13 = HEAP32[i12 >> 2] | 0;
   do {
    if ((i13 | 0) != 0) {
     if ((HEAP32[i13 + 4 >> 2] | 0) == 0) {
      i14 = i13;
     } else {
      i15 = HEAP32[i8 >> 2] | 0;
      do {
       if ((i15 | 0) == 0) {
        i16 = 0;
       } else {
        if ((HEAP32[(HEAP32[i15 + 456 >> 2] | 0) + 336 >> 2] | 0) != (i2 | 0)) {
         i16 = 0;
         break;
        }
        i17 = HEAP32[i15 + 32 >> 2] | 0;
        if ((i17 | 0) == 0) {
         i16 = 0;
         break;
        }
        i16 = HEAP32[i17 + 1148 >> 2] | 0;
       }
      } while (0);
      __ZN7WebCore11PageConsole10addMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringEmPNS_8DocumentE(i16, 1, 3, i6, 0, 0);
      i15 = HEAP32[i12 >> 2] | 0;
      if ((i15 | 0) == 0) {
       break;
      } else {
       i14 = i15;
      }
     }
     i15 = i14 | 0;
     i17 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
     if ((i17 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i14);
      break;
     } else {
      HEAP32[i15 >> 2] = i17;
      break;
     }
    }
   } while (0);
   HEAP32[i1 >> 2] = 0;
   STACKTOP = i5;
   return;
  }
 } while (0);
 __ZN7WebCore8Document19updateStyleIfNeededEv(HEAP32[i11 + 456 >> 2] | 0);
 i11 = HEAP32[i8 >> 2] | 0;
 i8 = HEAP32[i11 + 32 >> 2] | 0;
 if ((i8 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i5;
  return;
 }
 i14 = i7 | 0;
 HEAP32[i14 >> 2] = 0;
 if (__ZN7WebCore6Chrome19runJavaScriptPromptEPNS_5FrameERKN3WTF6StringES6_RS4_(HEAP32[i8 + 20 >> 2] | 0, i11, i3, i4, i7) | 0) {
  i7 = HEAP32[i14 >> 2] | 0;
  HEAP32[i14 >> 2] = 0;
  HEAP32[i1 >> 2] = i7;
  STACKTOP = i5;
  return;
 }
 HEAP32[i1 >> 2] = 0;
 i1 = HEAP32[i14 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i14 = i1 | 0;
 i7 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
 if ((i7 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i14 >> 2] = i7;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore9DOMWindow27willDetachDocumentFromFrameEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i2 = i1 + 92 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = (i3 | 0) == 0;
 if (i4) {
  return;
 }
 i5 = i3 >>> 0 < 16 >>> 0 ? 16 : i3;
 do {
  if ((i5 | 0) == 0) {
   i6 = HEAP32[i1 + 80 >> 2] | 0;
   i7 = HEAP32[i1 + 84 >> 2] | 0;
   i8 = 0;
   i9 = i6;
   i10 = i7;
   i11 = i6 + (i7 << 2) | 0;
   i12 = 7;
  } else {
   if (i5 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   } else {
    i7 = __ZN3WTF10fastMallocEj(__ZN3WTF18fastMallocGoodSizeEj(i5 << 2) | 0) | 0;
    i6 = HEAP32[i1 + 80 >> 2] | 0;
    i13 = HEAP32[i1 + 84 >> 2] | 0;
    if ((HEAP32[i2 >> 2] | 0) == 0) {
     i14 = i7;
     break;
    } else {
     i8 = i7;
     i9 = i6;
     i10 = i13;
     i11 = i6 + (i13 << 2) | 0;
     i12 = 7;
     break;
    }
   }
  }
 } while (0);
 L10 : do {
  if ((i12 | 0) == 7) {
   L12 : do {
    if ((i10 | 0) == 0) {
     i15 = i9;
    } else {
     i2 = i9;
     while (1) {
      i1 = HEAP32[i2 >> 2] | 0;
      if (!((i1 | 0) == (-1 | 0) | (i1 | 0) == 0)) {
       i15 = i2;
       break L12;
      }
      i1 = i2 + 4 | 0;
      if ((i1 | 0) == (i11 | 0)) {
       i14 = i8;
       break L10;
      } else {
       i2 = i1;
      }
     }
    }
   } while (0);
   if ((i15 | 0) == (i11 | 0)) {
    i14 = i8;
    break;
   } else {
    i16 = i15;
    i17 = 0;
   }
   while (1) {
    if (i3 >>> 0 <= i17 >>> 0) {
     break;
    }
    HEAP32[i8 + (i17 << 2) >> 2] = HEAP32[i16 >> 2];
    i2 = i16 + 4 | 0;
    if ((i2 | 0) == (i11 | 0)) {
     i14 = i8;
     break L10;
    } else {
     i18 = i2;
    }
    while (1) {
     i2 = HEAP32[i18 >> 2] | 0;
     if (!((i2 | 0) == (-1 | 0) | (i2 | 0) == 0)) {
      break;
     }
     i2 = i18 + 4 | 0;
     if ((i2 | 0) == (i11 | 0)) {
      i14 = i8;
      break L10;
     } else {
      i18 = i2;
     }
    }
    if ((i18 | 0) == (i11 | 0)) {
     i14 = i8;
     break L10;
    } else {
     i16 = i18;
     i17 = i17 + 1 | 0;
    }
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 do {
  if (i4) {
   if ((i14 | 0) != 0) {
    break;
   }
   return;
  } else {
   i17 = 0;
   while (1) {
    i18 = HEAP32[i14 + (i17 << 2) >> 2] | 0;
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 16 >> 2] & 63](i18);
    i17 = i17 + 1 | 0;
    if (i17 >>> 0 >= i3 >>> 0) {
     break;
    }
   }
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i14);
 return;
}
function __ZN7WebCore9DOMWindow26willDestroyDocumentInFrameEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i2 = i1 + 92 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = (i3 | 0) == 0;
 if (i4) {
  return;
 }
 i5 = i3 >>> 0 < 16 >>> 0 ? 16 : i3;
 do {
  if ((i5 | 0) == 0) {
   i6 = HEAP32[i1 + 80 >> 2] | 0;
   i7 = HEAP32[i1 + 84 >> 2] | 0;
   i8 = 0;
   i9 = i6;
   i10 = i7;
   i11 = i6 + (i7 << 2) | 0;
   i12 = 7;
  } else {
   if (i5 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   } else {
    i7 = __ZN3WTF10fastMallocEj(__ZN3WTF18fastMallocGoodSizeEj(i5 << 2) | 0) | 0;
    i6 = HEAP32[i1 + 80 >> 2] | 0;
    i13 = HEAP32[i1 + 84 >> 2] | 0;
    if ((HEAP32[i2 >> 2] | 0) == 0) {
     i14 = i7;
     break;
    } else {
     i8 = i7;
     i9 = i6;
     i10 = i13;
     i11 = i6 + (i13 << 2) | 0;
     i12 = 7;
     break;
    }
   }
  }
 } while (0);
 L10 : do {
  if ((i12 | 0) == 7) {
   L12 : do {
    if ((i10 | 0) == 0) {
     i15 = i9;
    } else {
     i2 = i9;
     while (1) {
      i1 = HEAP32[i2 >> 2] | 0;
      if (!((i1 | 0) == (-1 | 0) | (i1 | 0) == 0)) {
       i15 = i2;
       break L12;
      }
      i1 = i2 + 4 | 0;
      if ((i1 | 0) == (i11 | 0)) {
       i14 = i8;
       break L10;
      } else {
       i2 = i1;
      }
     }
    }
   } while (0);
   if ((i15 | 0) == (i11 | 0)) {
    i14 = i8;
    break;
   } else {
    i16 = i15;
    i17 = 0;
   }
   while (1) {
    if (i3 >>> 0 <= i17 >>> 0) {
     break;
    }
    HEAP32[i8 + (i17 << 2) >> 2] = HEAP32[i16 >> 2];
    i2 = i16 + 4 | 0;
    if ((i2 | 0) == (i11 | 0)) {
     i14 = i8;
     break L10;
    } else {
     i18 = i2;
    }
    while (1) {
     i2 = HEAP32[i18 >> 2] | 0;
     if (!((i2 | 0) == (-1 | 0) | (i2 | 0) == 0)) {
      break;
     }
     i2 = i18 + 4 | 0;
     if ((i2 | 0) == (i11 | 0)) {
      i14 = i8;
      break L10;
     } else {
      i18 = i2;
     }
    }
    if ((i18 | 0) == (i11 | 0)) {
     i14 = i8;
     break L10;
    } else {
     i16 = i18;
     i17 = i17 + 1 | 0;
    }
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 do {
  if (i4) {
   if ((i14 | 0) != 0) {
    break;
   }
   return;
  } else {
   i17 = 0;
   while (1) {
    i18 = HEAP32[i14 + (i17 << 2) >> 2] | 0;
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 12 >> 2] & 63](i18);
    i17 = i17 + 1 | 0;
    if (i17 >>> 0 >= i3 >>> 0) {
     break;
    }
   }
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i14);
 return;
}
function __ZN7WebCore9DOMWindow22willDestroyCachedFrameEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i2 = i1 + 92 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = (i3 | 0) == 0;
 if (i4) {
  return;
 }
 i5 = i3 >>> 0 < 16 >>> 0 ? 16 : i3;
 do {
  if ((i5 | 0) == 0) {
   i6 = HEAP32[i1 + 80 >> 2] | 0;
   i7 = HEAP32[i1 + 84 >> 2] | 0;
   i8 = 0;
   i9 = i6;
   i10 = i7;
   i11 = i6 + (i7 << 2) | 0;
   i12 = 7;
  } else {
   if (i5 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   } else {
    i7 = __ZN3WTF10fastMallocEj(__ZN3WTF18fastMallocGoodSizeEj(i5 << 2) | 0) | 0;
    i6 = HEAP32[i1 + 80 >> 2] | 0;
    i13 = HEAP32[i1 + 84 >> 2] | 0;
    if ((HEAP32[i2 >> 2] | 0) == 0) {
     i14 = i7;
     break;
    } else {
     i8 = i7;
     i9 = i6;
     i10 = i13;
     i11 = i6 + (i13 << 2) | 0;
     i12 = 7;
     break;
    }
   }
  }
 } while (0);
 L10 : do {
  if ((i12 | 0) == 7) {
   L12 : do {
    if ((i10 | 0) == 0) {
     i15 = i9;
    } else {
     i2 = i9;
     while (1) {
      i1 = HEAP32[i2 >> 2] | 0;
      if (!((i1 | 0) == (-1 | 0) | (i1 | 0) == 0)) {
       i15 = i2;
       break L12;
      }
      i1 = i2 + 4 | 0;
      if ((i1 | 0) == (i11 | 0)) {
       i14 = i8;
       break L10;
      } else {
       i2 = i1;
      }
     }
    }
   } while (0);
   if ((i15 | 0) == (i11 | 0)) {
    i14 = i8;
    break;
   } else {
    i16 = i15;
    i17 = 0;
   }
   while (1) {
    if (i3 >>> 0 <= i17 >>> 0) {
     break;
    }
    HEAP32[i8 + (i17 << 2) >> 2] = HEAP32[i16 >> 2];
    i2 = i16 + 4 | 0;
    if ((i2 | 0) == (i11 | 0)) {
     i14 = i8;
     break L10;
    } else {
     i18 = i2;
    }
    while (1) {
     i2 = HEAP32[i18 >> 2] | 0;
     if (!((i2 | 0) == (-1 | 0) | (i2 | 0) == 0)) {
      break;
     }
     i2 = i18 + 4 | 0;
     if ((i2 | 0) == (i11 | 0)) {
      i14 = i8;
      break L10;
     } else {
      i18 = i2;
     }
    }
    if ((i18 | 0) == (i11 | 0)) {
     i14 = i8;
     break L10;
    } else {
     i16 = i18;
     i17 = i17 + 1 | 0;
    }
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 do {
  if (i4) {
   if ((i14 | 0) != 0) {
    break;
   }
   return;
  } else {
   i17 = 0;
   while (1) {
    i18 = HEAP32[i14 + (i17 << 2) >> 2] | 0;
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 8 >> 2] & 63](i18);
    i17 = i17 + 1 | 0;
    if (i17 >>> 0 >= i3 >>> 0) {
     break;
    }
   }
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i14);
 return;
}
function __ZN7WebCore9DOMWindow29disconnectDOMWindowPropertiesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i2 = i1 + 92 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = (i3 | 0) == 0;
 if (i4) {
  return;
 }
 i5 = i3 >>> 0 < 16 >>> 0 ? 16 : i3;
 do {
  if ((i5 | 0) == 0) {
   i6 = HEAP32[i1 + 80 >> 2] | 0;
   i7 = HEAP32[i1 + 84 >> 2] | 0;
   i8 = 0;
   i9 = i6;
   i10 = i7;
   i11 = i6 + (i7 << 2) | 0;
   i12 = 7;
  } else {
   if (i5 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   } else {
    i7 = __ZN3WTF10fastMallocEj(__ZN3WTF18fastMallocGoodSizeEj(i5 << 2) | 0) | 0;
    i6 = HEAP32[i1 + 80 >> 2] | 0;
    i13 = HEAP32[i1 + 84 >> 2] | 0;
    if ((HEAP32[i2 >> 2] | 0) == 0) {
     i14 = i7;
     break;
    } else {
     i8 = i7;
     i9 = i6;
     i10 = i13;
     i11 = i6 + (i13 << 2) | 0;
     i12 = 7;
     break;
    }
   }
  }
 } while (0);
 L10 : do {
  if ((i12 | 0) == 7) {
   L12 : do {
    if ((i10 | 0) == 0) {
     i15 = i9;
    } else {
     i2 = i9;
     while (1) {
      i1 = HEAP32[i2 >> 2] | 0;
      if (!((i1 | 0) == (-1 | 0) | (i1 | 0) == 0)) {
       i15 = i2;
       break L12;
      }
      i1 = i2 + 4 | 0;
      if ((i1 | 0) == (i11 | 0)) {
       i14 = i8;
       break L10;
      } else {
       i2 = i1;
      }
     }
    }
   } while (0);
   if ((i15 | 0) == (i11 | 0)) {
    i14 = i8;
    break;
   } else {
    i16 = i15;
    i17 = 0;
   }
   while (1) {
    if (i3 >>> 0 <= i17 >>> 0) {
     break;
    }
    HEAP32[i8 + (i17 << 2) >> 2] = HEAP32[i16 >> 2];
    i2 = i16 + 4 | 0;
    if ((i2 | 0) == (i11 | 0)) {
     i14 = i8;
     break L10;
    } else {
     i18 = i2;
    }
    while (1) {
     i2 = HEAP32[i18 >> 2] | 0;
     if (!((i2 | 0) == (-1 | 0) | (i2 | 0) == 0)) {
      break;
     }
     i2 = i18 + 4 | 0;
     if ((i2 | 0) == (i11 | 0)) {
      i14 = i8;
      break L10;
     } else {
      i18 = i2;
     }
    }
    if ((i18 | 0) == (i11 | 0)) {
     i14 = i8;
     break L10;
    } else {
     i16 = i18;
     i17 = i17 + 1 | 0;
    }
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 do {
  if (i4) {
   if ((i14 | 0) != 0) {
    break;
   }
   return;
  } else {
   i17 = 0;
   while (1) {
    i18 = HEAP32[i14 + (i17 << 2) >> 2] | 0;
    FUNCTION_TABLE_vi[HEAP32[HEAP32[i18 >> 2] >> 2] & 63](i18);
    i17 = i17 + 1 | 0;
    if (i17 >>> 0 >= i3 >>> 0) {
     break;
    }
   }
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i14);
 return;
}
function __ZN7WebCore9DOMWindow28reconnectDOMWindowPropertiesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i2 = i1 + 92 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = (i3 | 0) == 0;
 if (i4) {
  return;
 }
 i5 = i3 >>> 0 < 16 >>> 0 ? 16 : i3;
 do {
  if ((i5 | 0) == 0) {
   i6 = HEAP32[i1 + 80 >> 2] | 0;
   i7 = HEAP32[i1 + 84 >> 2] | 0;
   i8 = 0;
   i9 = i6;
   i10 = i7;
   i11 = i6 + (i7 << 2) | 0;
   i12 = 7;
  } else {
   if (i5 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   } else {
    i7 = __ZN3WTF10fastMallocEj(__ZN3WTF18fastMallocGoodSizeEj(i5 << 2) | 0) | 0;
    i6 = HEAP32[i1 + 80 >> 2] | 0;
    i13 = HEAP32[i1 + 84 >> 2] | 0;
    if ((HEAP32[i2 >> 2] | 0) == 0) {
     i14 = i7;
     break;
    } else {
     i8 = i7;
     i9 = i6;
     i10 = i13;
     i11 = i6 + (i13 << 2) | 0;
     i12 = 7;
     break;
    }
   }
  }
 } while (0);
 L10 : do {
  if ((i12 | 0) == 7) {
   L12 : do {
    if ((i10 | 0) == 0) {
     i15 = i9;
    } else {
     i2 = i9;
     while (1) {
      i5 = HEAP32[i2 >> 2] | 0;
      if (!((i5 | 0) == (-1 | 0) | (i5 | 0) == 0)) {
       i15 = i2;
       break L12;
      }
      i5 = i2 + 4 | 0;
      if ((i5 | 0) == (i11 | 0)) {
       i14 = i8;
       break L10;
      } else {
       i2 = i5;
      }
     }
    }
   } while (0);
   if ((i15 | 0) == (i11 | 0)) {
    i14 = i8;
    break;
   } else {
    i16 = i15;
    i17 = 0;
   }
   while (1) {
    if (i3 >>> 0 <= i17 >>> 0) {
     break;
    }
    HEAP32[i8 + (i17 << 2) >> 2] = HEAP32[i16 >> 2];
    i2 = i16 + 4 | 0;
    if ((i2 | 0) == (i11 | 0)) {
     i14 = i8;
     break L10;
    } else {
     i18 = i2;
    }
    while (1) {
     i2 = HEAP32[i18 >> 2] | 0;
     if (!((i2 | 0) == (-1 | 0) | (i2 | 0) == 0)) {
      break;
     }
     i2 = i18 + 4 | 0;
     if ((i2 | 0) == (i11 | 0)) {
      i14 = i8;
      break L10;
     } else {
      i18 = i2;
     }
    }
    if ((i18 | 0) == (i11 | 0)) {
     i14 = i8;
     break L10;
    } else {
     i16 = i18;
     i17 = i17 + 1 | 0;
    }
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 if (!i4) {
  i4 = i1 + 52 | 0;
  i1 = 0;
  while (1) {
   i17 = HEAP32[i14 + (i1 << 2) >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i17 >> 2] | 0) + 4 >> 2] & 3](i17, HEAP32[i4 >> 2] | 0);
   i1 = i1 + 1 | 0;
   if (i1 >>> 0 >= i3 >>> 0) {
    break;
   }
  }
 }
 if ((i14 | 0) == 0) {
  return;
 }
 __ZN3WTF8fastFreeEPv(i14);
 return;
}
function __ZN3WTF9HashTableIPN7WebCore17DOMWindowPropertyES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1, i2, i3) {
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
function __ZN7WebCore12MessageEvent6createEN3WTF10PassOwnPtrINS1_6VectorINS1_6RefPtrINS_11MessagePortEEELj1ENS1_15CrashOnOverflowEEEEENS1_10PassRefPtrINS_21SerializedScriptValueEEERKNS1_6StringESF_NSA_INS_11EventTargetEEE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i7 + 16 | 0;
 i11 = __ZN3WTF10fastMallocEj(96) | 0;
 i12 = i8 | 0;
 i13 = i3 | 0;
 i3 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 HEAP32[i12 >> 2] = i3;
 i3 = i9 | 0;
 i13 = i6 | 0;
 i6 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 HEAP32[i3 >> 2] = i6;
 i6 = i10 | 0;
 i13 = i2 | 0;
 i2 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 HEAP32[i6 >> 2] = i2;
 __ZN7WebCore12MessageEventC1EN3WTF10PassRefPtrINS_21SerializedScriptValueEEERKNS1_6StringES7_NS2_INS_11EventTargetEEENS1_10PassOwnPtrINS1_6VectorINS1_6RefPtrINS_11MessagePortEEELj1ENS1_15CrashOnOverflowEEEEE(i11, i8, i4, i5, i9, i10);
 HEAP32[i1 >> 2] = i11;
 i11 = HEAP32[i6 >> 2] | 0;
 if ((i11 | 0) != 0) {
  i6 = i11 + 8 | 0;
  i1 = HEAP32[i6 >> 2] | 0;
  i10 = i11 | 0;
  if ((i1 | 0) != 0) {
   i9 = HEAP32[i10 >> 2] | 0;
   i5 = i9 + (i1 << 2) | 0;
   i1 = i9;
   while (1) {
    i9 = HEAP32[i1 >> 2] | 0;
    do {
     if ((i9 | 0) != 0) {
      i4 = i9 + 36 | 0;
      i8 = i4 | 0;
      i2 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
      if ((i2 | 0) != 0) {
       HEAP32[i8 >> 2] = i2;
       break;
      }
      i2 = i4 - 36 | 0;
      if ((i2 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 44 >> 2] & 63](i2);
     }
    } while (0);
    i1 = i1 + 4 | 0;
    if ((i1 | 0) == (i5 | 0)) {
     break;
    }
   }
   HEAP32[i6 >> 2] = 0;
  }
  i6 = HEAP32[i10 >> 2] | 0;
  if (!((i11 + 12 | 0) == (i6 | 0) | (i6 | 0) == 0)) {
   HEAP32[i10 >> 2] = 0;
   HEAP32[i11 + 4 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i6);
  }
  __ZN3WTF8fastFreeEPv(i11);
 }
 i11 = HEAP32[i3 >> 2] | 0;
 if ((i11 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 60 >> 2] & 63](i11);
 }
 i11 = HEAP32[i12 >> 2] | 0;
 if ((i11 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i12 = i11 | 0;
 if (((tempValue = HEAP32[i12 >> 2] | 0, HEAP32[i12 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  STACKTOP = i7;
  return;
 }
 __ZN7WebCore21SerializedScriptValueD1Ev(i11);
 __ZN3WTF8fastFreeEPv(i11);
 STACKTOP = i7;
 return;
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
function __ZN3WTF12StringAppendINS0_INS_6StringEPKcEES1_E7writeToEPt(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = i1 + 4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = _strlen(i4 | 0) | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i7 | 0) == 0) {
   i8 = 0;
   i9 = 0;
  } else {
   i10 = HEAP32[i7 + 4 >> 2] | 0;
   do {
    if ((HEAP32[i7 + 16 >> 2] & 32 | 0) == 0) {
     i11 = HEAP32[i7 + 8 >> 2] | 0;
     if ((i10 | 0) == 0) {
      break;
     } else {
      i12 = 0;
     }
     while (1) {
      HEAP16[i2 + (i12 << 1) >> 1] = HEAP16[i11 + (i12 << 1) >> 1] | 0;
      i12 = i12 + 1 | 0;
      if (i12 >>> 0 >= i10 >>> 0) {
       break;
      }
     }
    } else {
     i11 = HEAP32[i7 + 8 >> 2] | 0;
     if ((i10 | 0) == 0) {
      break;
     } else {
      i13 = 0;
     }
     while (1) {
      HEAP16[i2 + (i13 << 1) >> 1] = HEAPU8[i11 + i13 | 0] | 0;
      i13 = i13 + 1 | 0;
      if (i13 >>> 0 >= i10 >>> 0) {
       break;
      }
     }
    }
   } while (0);
   i10 = HEAP32[i6 >> 2] | 0;
   if ((i10 | 0) == 0) {
    i8 = 0;
    i9 = 0;
    break;
   }
   i8 = HEAP32[i10 + 4 >> 2] | 0;
   i9 = i10;
  }
 } while (0);
 if ((i5 | 0) == 0) {
  i14 = i9;
 } else {
  i9 = 0;
  while (1) {
   HEAP16[i2 + (i9 + i8 << 1) >> 1] = HEAPU8[i4 + i9 | 0] | 0;
   i9 = i9 + 1 | 0;
   if (i9 >>> 0 >= i5 >>> 0) {
    break;
   }
  }
  i14 = HEAP32[i6 >> 2] | 0;
 }
 i6 = _strlen(HEAP32[i3 >> 2] | 0) | 0;
 if ((i14 | 0) == 0) {
  i15 = 0;
 } else {
  i15 = HEAP32[i14 + 4 >> 2] | 0;
 }
 i14 = i15 + i6 | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i6 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i6 + 4 >> 2] | 0;
 if ((HEAP32[i6 + 16 >> 2] & 32 | 0) == 0) {
  i15 = HEAP32[i6 + 8 >> 2] | 0;
  if ((i1 | 0) == 0) {
   return;
  } else {
   i16 = 0;
  }
  while (1) {
   HEAP16[i2 + (i16 + i14 << 1) >> 1] = HEAP16[i15 + (i16 << 1) >> 1] | 0;
   i16 = i16 + 1 | 0;
   if (i16 >>> 0 >= i1 >>> 0) {
    break;
   }
  }
  return;
 } else {
  i16 = HEAP32[i6 + 8 >> 2] | 0;
  if ((i1 | 0) == 0) {
   return;
  } else {
   i17 = 0;
  }
  while (1) {
   HEAP16[i2 + (i17 + i14 << 1) >> 1] = HEAPU8[i16 + i17 | 0] | 0;
   i17 = i17 + 1 | 0;
   if (i17 >>> 0 >= i1 >>> 0) {
    break;
   }
  }
  return;
 }
}
function __ZN7WebCore15ScheduledActionD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore15DOMWrapperWorldD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 16 >> 2] | 0;
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
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   if ((i7 | 0) != 0) {
    i8 = HEAP32[(i7 & -4096) + 12 >> 2] | 0;
    i9 = i7;
    i10 = i8 + 84 | 0;
    i11 = i9 + 12 | 0;
    if ((i9 | 0) == (HEAP32[i10 >> 2] | 0)) {
     HEAP32[i10 >> 2] = HEAP32[i11 >> 2];
    }
    i10 = i7 + 8 | 0;
    i7 = HEAP32[i10 >> 2] | 0;
    i12 = HEAP32[i11 >> 2] | 0;
    HEAP32[i7 + 12 >> 2] = i12;
    HEAP32[i12 + 8 >> 2] = i7;
    HEAP32[i10 >> 2] = 0;
    HEAP32[i11 >> 2] = 0;
    i10 = i8 + 80 | 0;
    HEAP32[i11 >> 2] = HEAP32[i10 >> 2];
    HEAP32[i10 >> 2] = i9;
    HEAP32[i5 >> 2] = 0;
   }
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
  return;
 }
 i4 = HEAP32[(i1 & -4096) + 12 >> 2] | 0;
 i6 = i1;
 i3 = i4 + 84 | 0;
 i5 = i6 + 12 | 0;
 if ((i6 | 0) == (HEAP32[i3 >> 2] | 0)) {
  HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 }
 i3 = i1 + 8 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 i9 = HEAP32[i5 >> 2] | 0;
 HEAP32[i1 + 12 >> 2] = i9;
 HEAP32[i9 + 8 >> 2] = i1;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i5 >> 2] = 0;
 i3 = i4 + 80 | 0;
 HEAP32[i5 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i3 >> 2] = i6;
 HEAP32[i2 >> 2] = 0;
 return;
}
function __ZN7WebCore9DOMWindow7confirmERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 52 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = 0;
  STACKTOP = i3;
  return i7 | 0;
 }
 i8 = HEAP32[i6 + 32 >> 2] | 0;
 do {
  if ((i8 | 0) == 0) {
   i9 = i6;
  } else {
   if (!(__ZN7WebCore4Page35isAnyFrameHandlingBeforeUnloadEventEv(i8) | 0)) {
    i9 = HEAP32[i5 >> 2] | 0;
    break;
   }
   __ZN3WTF6StringC1EPKc(i4, H_BASE + 80 | 0);
   i10 = i4 | 0;
   i11 = HEAP32[i10 >> 2] | 0;
   if ((i11 | 0) == 0) {
    i7 = 0;
    STACKTOP = i3;
    return i7 | 0;
   }
   do {
    if ((HEAP32[i11 + 4 >> 2] | 0) == 0) {
     i12 = i11;
    } else {
     i13 = HEAP32[i5 >> 2] | 0;
     do {
      if ((i13 | 0) == 0) {
       i14 = 0;
      } else {
       if ((HEAP32[(HEAP32[i13 + 456 >> 2] | 0) + 336 >> 2] | 0) != (i1 | 0)) {
        i14 = 0;
        break;
       }
       i15 = HEAP32[i13 + 32 >> 2] | 0;
       if ((i15 | 0) == 0) {
        i14 = 0;
        break;
       }
       i14 = HEAP32[i15 + 1148 >> 2] | 0;
      }
     } while (0);
     __ZN7WebCore11PageConsole10addMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringEmPNS_8DocumentE(i14, 1, 3, i4, 0, 0);
     i13 = HEAP32[i10 >> 2] | 0;
     if ((i13 | 0) == 0) {
      i7 = 0;
     } else {
      i12 = i13;
      break;
     }
     STACKTOP = i3;
     return i7 | 0;
    }
   } while (0);
   i10 = i12 | 0;
   i11 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    i7 = 0;
    STACKTOP = i3;
    return i7 | 0;
   } else {
    HEAP32[i10 >> 2] = i11;
    i7 = 0;
    STACKTOP = i3;
    return i7 | 0;
   }
  }
 } while (0);
 __ZN7WebCore8Document19updateStyleIfNeededEv(HEAP32[i9 + 456 >> 2] | 0);
 i9 = HEAP32[i5 >> 2] | 0;
 i5 = HEAP32[i9 + 32 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i7 = 0;
  STACKTOP = i3;
  return i7 | 0;
 }
 i7 = __ZN7WebCore6Chrome20runJavaScriptConfirmEPNS_5FrameERKN3WTF6StringE(HEAP32[i5 + 20 >> 2] | 0, i9, i2) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore9DOMWindow5closeEPNS_22ScriptExecutionContextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 + 52 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i8 = HEAP32[i7 + 32 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i7 + 28 >> 2] | 0) != (i7 | 0)) {
  STACKTOP = i3;
  return;
 }
 do {
  if ((i2 | 0) == 0) {
   i9 = i7;
  } else {
   i10 = i2 - 156 + 68 | 0;
   if ((i10 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   if (__ZN7WebCore8Document11canNavigateEPNS_5FrameE(i10, i7) | 0) {
    i9 = HEAP32[i6 >> 2] | 0;
    break;
   } else {
    STACKTOP = i3;
    return;
   }
  }
 } while (0);
 i7 = HEAP8[(HEAP32[i9 + 36 >> 2] | 0) + 181 | 0] | 0;
 do {
  if (!(__ZNK7WebCore4Page11openedByDOMEv(i8) | 0)) {
   if ((__ZNK7WebCore21BackForwardController5countEv(HEAP32[i8 + 56 >> 2] | 0) | 0) < 2 | (i7 & 64) != 0) {
    break;
   }
   i9 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i9 | 0) == 0) {
     i11 = 0;
    } else {
     if ((HEAP32[(HEAP32[i9 + 456 >> 2] | 0) + 336 >> 2] | 0) != (i1 | 0)) {
      i11 = 0;
      break;
     }
     i2 = HEAP32[i9 + 32 >> 2] | 0;
     if ((i2 | 0) == 0) {
      i11 = 0;
      break;
     }
     i11 = HEAP32[i2 + 1148 >> 2] | 0;
    }
   } while (0);
   HEAP32[i5 >> 2] = H_BASE + 304;
   __ZN3WTF6StringC1ENS_12ASCIILiteralE(i4, i5);
   __ZN7WebCore11PageConsole10addMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringEmPNS_8DocumentE(i11, 1, 2, i4, 0, 0);
   i9 = HEAP32[i4 >> 2] | 0;
   if ((i9 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   i2 = i9 | 0;
   i10 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    STACKTOP = i3;
    return;
   } else {
    HEAP32[i2 >> 2] = i10;
    STACKTOP = i3;
    return;
   }
  }
 } while (0);
 if (!(__ZN7WebCore11FrameLoader11shouldCloseEv((HEAP32[i6 >> 2] | 0) + 80 | 0) | 0)) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore6Chrome15closeWindowSoonEv(HEAP32[i8 + 20 >> 2] | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore9DOMWindow11setLocationERKN3WTF6StringERS0_S5_NS_18SetLocationLockingE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i7 = i6 | 0;
 i8 = i6 + 48 | 0;
 i9 = i1 + 52 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 if ((HEAP32[(HEAP32[i10 + 456 >> 2] | 0) + 336 >> 2] | 0) != (i1 | 0)) {
  STACKTOP = i6;
  return;
 }
 i11 = HEAP32[i3 + 44 >> 2] | 0;
 if ((i11 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i12 = i11 - 156 + 68 | 0;
 if ((i12 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 if (!(__ZN7WebCore8Document11canNavigateEPNS_5FrameE(i12, i10) | 0)) {
  STACKTOP = i6;
  return;
 }
 i10 = HEAP32[i4 + 52 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 __ZNK7WebCore8Document11completeURLERKN3WTF6StringE(i7, HEAP32[i10 + 456 >> 2] | 0, i2);
 i2 = i7 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i10 = i7 | 0;
 do {
  if (!(__ZN7WebCore9DOMWindow22isInsecureScriptAccessERS0_RKN3WTF6StringE(i1, i3, i10) | 0)) {
   i7 = (HEAP32[i9 >> 2] | 0) + 376 | 0;
   i4 = HEAP32[i12 + 100 >> 2] | 0;
   __ZNK7WebCore11FrameLoader16outgoingReferrerEv(i8, (HEAP32[i12 + 332 >> 2] | 0) + 80 | 0);
   i11 = (i5 | 0) != 0;
   if (i11) {
    i13 = 1;
   } else {
    i13 = (__ZN7WebCore16ScriptController21processingUserGestureEv() | 0) ^ 1;
   }
   __ZN7WebCore19NavigationScheduler22scheduleLocationChangeEPNS_14SecurityOriginERKN3WTF6StringES6_bb(i7, i4, i10, i8, i13, i11);
   i11 = HEAP32[i8 >> 2] | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   i4 = i11 | 0;
   i7 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i4 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i8 = HEAP32[i2 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i2 = i8 | 0;
 i13 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
 if ((i13 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i8);
  STACKTOP = i6;
  return;
 } else {
  HEAP32[i2 >> 2] = i13;
  STACKTOP = i6;
  return;
 }
}
function __ZN7WebCore9DOMWindow11postMessageEN3WTF10PassRefPtrINS_21SerializedScriptValueEEEPNS_11MessagePortERKNS1_6StringERS0_Ri(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i8 = i7 | 0;
 i9 = i7 + 16 | 0;
 i10 = i8 + 12 | 0;
 i11 = i10;
 i12 = i8 | 0;
 HEAP32[i12 >> 2] = i11;
 i13 = i8 + 4 | 0;
 HEAP32[i13 >> 2] = 1;
 i14 = i8 + 8 | 0;
 HEAP32[i14 >> 2] = 0;
 if ((i3 | 0) != 0) {
  HEAP32[i10 >> 2] = i3;
  i10 = i3 + 36 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
  HEAP32[i14 >> 2] = 1;
 }
 i10 = i9 | 0;
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i10 >> 2] = i2;
 __ZN7WebCore9DOMWindow11postMessageEN3WTF10PassRefPtrINS_21SerializedScriptValueEEEPKNS1_6VectorINS1_6RefPtrINS_11MessagePortEEELj1ENS1_15CrashOnOverflowEEERKNS1_6StringERS0_Ri(i1, i9, i8, i4, i5, i6);
 i6 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i10 = i6 | 0;
   if (((tempValue = HEAP32[i10 >> 2] | 0, HEAP32[i10 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN7WebCore21SerializedScriptValueD1Ev(i6);
   __ZN3WTF8fastFreeEPv(i6);
  }
 } while (0);
 i6 = HEAP32[i14 >> 2] | 0;
 if ((i6 | 0) != 0) {
  i10 = HEAP32[i12 >> 2] | 0;
  i5 = i10 + (i6 << 2) | 0;
  i6 = i10;
  while (1) {
   i10 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i10 | 0) != 0) {
     i4 = i10 + 36 | 0;
     i8 = i4 | 0;
     i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     if ((i9 | 0) != 0) {
      HEAP32[i8 >> 2] = i9;
      break;
     }
     i9 = i4 - 36 | 0;
     if ((i9 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 44 >> 2] & 63](i9);
    }
   } while (0);
   i6 = i6 + 4 | 0;
   if ((i6 | 0) == (i5 | 0)) {
    break;
   }
  }
  HEAP32[i14 >> 2] = 0;
 }
 i14 = HEAP32[i12 >> 2] | 0;
 if ((i11 | 0) == (i14 | 0) | (i14 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 HEAP32[i12 >> 2] = 0;
 HEAP32[i13 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i14);
 STACKTOP = i7;
 return;
}
function __ZN7WebCore9DOMWindow21postMessageTimerFiredEN3WTF10PassOwnPtrINS_16PostMessageTimerEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i2 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i7 = HEAP32[i1 + 44 >> 2] | 0;
 i8 = i7 - 156 + 68 | 0;
 do {
  if (!((i7 | 0) == 0 | (i8 | 0) == 0)) {
   i9 = HEAP32[i1 + 52 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   if ((HEAP32[(HEAP32[i9 + 456 >> 2] | 0) + 336 >> 2] | 0) != (i1 | 0)) {
    break;
   }
   i9 = HEAP32[i2 + 64 >> 2] | 0;
   __ZN7WebCore16PostMessageTimer5eventEPNS_22ScriptExecutionContextE(i5, i2, (i8 | 0) == 0 ? 0 : i8 + 88 | 0);
   i10 = i4 | 0;
   i11 = i5 | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   HEAP32[i11 >> 2] = 0;
   HEAP32[i10 >> 2] = i12;
   i12 = HEAP32[i2 + 68 >> 2] | 0;
   i11 = i6 | 0;
   HEAP32[i11 >> 2] = i12;
   if ((i12 | 0) != 0) {
    i13 = i12 | 0;
    HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
   }
   __ZN7WebCore9DOMWindow35dispatchMessageEventWithOriginCheckEPNS_14SecurityOriginEN3WTF10PassRefPtrINS_5EventEEENS4_INS_15ScriptCallStackEEE(i1, i9, i4, i6);
   i9 = HEAP32[i11 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i11 = i9 | 0;
     i13 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
     if ((i13 | 0) == 0) {
      __ZN7WebCore15ScriptCallStackD1Ev(i9);
      __ZN3WTF8fastFreeEPv(i9);
      break;
     } else {
      HEAP32[i11 >> 2] = i13;
      break;
     }
    }
   } while (0);
   i9 = HEAP32[i10 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   i13 = i9 + 8 | 0;
   i9 = i13 | 0;
   i11 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) != 0) {
    HEAP32[i9 >> 2] = i11;
    break;
   }
   i11 = i13 - 8 | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 63](i11);
  }
 } while (0);
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 63](i2);
 STACKTOP = i3;
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
function runPostSets() {
 HEAP32[H_BASE + 1688 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 1692 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 1696 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 1700 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 1704 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 1708 >> 2] = F_BASE_iiiii + 8;
 HEAP32[H_BASE + 1712 >> 2] = F_BASE_iiiii + 2;
 HEAP32[H_BASE + 1716 >> 2] = F_BASE_vi + 28;
 HEAP32[H_BASE + 1720 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 1724 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 1728 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 1732 >> 2] = F_BASE_vi + 42;
 HEAP32[H_BASE + 1736 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 1740 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 1744 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 1748 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 1752 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 1756 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 1768 >> 2] = F_BASE_vi + 36;
 HEAP32[H_BASE + 1772 >> 2] = F_BASE_vi + 40;
 HEAP32[H_BASE + 1776 >> 2] = F_BASE_vi + 38;
 HEAP32[H_BASE + 1788 >> 2] = F_BASE_vi + 32;
 HEAP32[H_BASE + 1792 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 1796 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 1800 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 1824 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1828 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1832 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 1836 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 1840 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 1844 >> 2] = F_BASE_iiiii + 6;
 HEAP32[H_BASE + 1848 >> 2] = F_BASE_iiiii + 4;
 HEAP32[H_BASE + 1852 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 1856 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 1860 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 1864 >> 2] = F_BASE_vi + 34;
 HEAP32[H_BASE + 1868 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 1872 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 1876 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 1880 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1884 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1904 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 1908 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 1912 >> 2] = F_BASE_vi + 30;
 HEAP32[H_BASE + 1916 >> 2] = F_BASE_did + 2;
}
function __ZN7WebCore9DOMWindow22isInsecureScriptAccessERS0_RKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 if (!(__ZN7WebCore20protocolIsJavaScriptERKN3WTF6StringE(i3) | 0)) {
  i6 = 0;
  STACKTOP = i4;
  return i6 | 0;
 }
 i3 = i1 + 52 | 0;
 i7 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   if ((HEAP32[(HEAP32[i7 + 456 >> 2] | 0) + 336 >> 2] | 0) != (i1 | 0)) {
    break;
   }
   if ((i2 | 0) == (i1 | 0)) {
    i6 = 0;
    STACKTOP = i4;
    return i6 | 0;
   }
   if (__ZNK7WebCore14SecurityOrigin9canAccessEPKS0_(HEAP32[(HEAP32[i2 + 44 >> 2] | 0) - 156 + 168 >> 2] | 0, HEAP32[(HEAP32[i1 + 44 >> 2] | 0) - 156 + 168 >> 2] | 0) | 0) {
    i6 = 0;
   } else {
    break;
   }
   STACKTOP = i4;
   return i6 | 0;
  }
 } while (0);
 __ZN7WebCore9DOMWindow29crossDomainAccessErrorMessageERKS0_(i5, i1, i2);
 i2 = i5 | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i6 = 1;
  STACKTOP = i4;
  return i6 | 0;
 }
 do {
  if ((HEAP32[i7 + 4 >> 2] | 0) == 0) {
   i8 = i7;
  } else {
   i9 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i9 | 0) == 0) {
     i10 = 0;
    } else {
     if ((HEAP32[(HEAP32[i9 + 456 >> 2] | 0) + 336 >> 2] | 0) != (i1 | 0)) {
      i10 = 0;
      break;
     }
     i11 = HEAP32[i9 + 32 >> 2] | 0;
     if ((i11 | 0) == 0) {
      i10 = 0;
      break;
     }
     i10 = HEAP32[i11 + 1148 >> 2] | 0;
    }
   } while (0);
   __ZN7WebCore11PageConsole10addMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringEmPNS_8DocumentE(i10, 1, 3, i5, 0, 0);
   i9 = HEAP32[i2 >> 2] | 0;
   if ((i9 | 0) == 0) {
    i6 = 1;
   } else {
    i8 = i9;
    break;
   }
   STACKTOP = i4;
   return i6 | 0;
  }
 } while (0);
 i2 = i8 | 0;
 i5 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i8);
  i6 = 1;
  STACKTOP = i4;
  return i6 | 0;
 } else {
  HEAP32[i2 >> 2] = i5;
  i6 = 1;
  STACKTOP = i4;
  return i6 | 0;
 }
 return 0;
}
function __ZN3WTF12StringAppendINS0_INS0_INS0_INS_6StringEPKcEES1_EES3_EES1_E7writeToEPt(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i3 = i1 + 12 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = _strlen(i4 | 0) | 0;
 __ZN3WTF12StringAppendINS0_INS_6StringEPKcEES1_E7writeToEPt(i1 | 0, i2);
 i6 = i1 + 4 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = _strlen(i7 | 0) | 0;
 i9 = i1 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 if ((i10 | 0) == 0) {
  i11 = 0;
 } else {
  i11 = HEAP32[i10 + 4 >> 2] | 0;
 }
 i12 = i1 + 8 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 if ((i13 | 0) == 0) {
  i14 = 0;
 } else {
  i14 = HEAP32[i13 + 4 >> 2] | 0;
 }
 i13 = i11 + i8 + i14 | 0;
 if ((i5 | 0) == 0) {
  i15 = i7;
  i16 = i10;
 } else {
  i10 = 0;
  while (1) {
   HEAP16[i2 + (i13 + i10 << 1) >> 1] = HEAPU8[i4 + i10 | 0] | 0;
   i10 = i10 + 1 | 0;
   if (i10 >>> 0 >= i5 >>> 0) {
    break;
   }
  }
  i15 = HEAP32[i6 >> 2] | 0;
  i16 = HEAP32[i9 >> 2] | 0;
 }
 i9 = _strlen(HEAP32[i3 >> 2] | 0) | 0;
 i3 = _strlen(i15 | 0) | 0;
 if ((i16 | 0) == 0) {
  i17 = 0;
 } else {
  i17 = HEAP32[i16 + 4 >> 2] | 0;
 }
 i16 = HEAP32[i12 >> 2] | 0;
 if ((i16 | 0) == 0) {
  i18 = 0;
 } else {
  i18 = HEAP32[i16 + 4 >> 2] | 0;
 }
 i16 = i3 + i9 + i17 + i18 | 0;
 i18 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i18 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i18 + 4 >> 2] | 0;
 if ((HEAP32[i18 + 16 >> 2] & 32 | 0) == 0) {
  i17 = HEAP32[i18 + 8 >> 2] | 0;
  if ((i1 | 0) == 0) {
   return;
  } else {
   i19 = 0;
  }
  while (1) {
   HEAP16[i2 + (i19 + i16 << 1) >> 1] = HEAP16[i17 + (i19 << 1) >> 1] | 0;
   i19 = i19 + 1 | 0;
   if (i19 >>> 0 >= i1 >>> 0) {
    break;
   }
  }
  return;
 } else {
  i19 = HEAP32[i18 + 8 >> 2] | 0;
  if ((i1 | 0) == 0) {
   return;
  } else {
   i20 = 0;
  }
  while (1) {
   HEAP16[i2 + (i20 + i16 << 1) >> 1] = HEAPU8[i19 + i20 | 0] | 0;
   i20 = i20 + 1 | 0;
   if (i20 >>> 0 >= i1 >>> 0) {
    break;
   }
  }
  return;
 }
}
function __ZN7WebCore9DOMWindow5alertERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 52 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i7 = HEAP32[i6 + 32 >> 2] | 0;
 do {
  if ((i7 | 0) == 0) {
   i8 = i6;
  } else {
   if (!(__ZN7WebCore4Page35isAnyFrameHandlingBeforeUnloadEventEv(i7) | 0)) {
    i8 = HEAP32[i5 >> 2] | 0;
    break;
   }
   __ZN3WTF6StringC1EPKc(i4, H_BASE + 160 | 0);
   i9 = i4 | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   if ((i10 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   do {
    if ((HEAP32[i10 + 4 >> 2] | 0) == 0) {
     i11 = i10;
    } else {
     i12 = HEAP32[i5 >> 2] | 0;
     do {
      if ((i12 | 0) == 0) {
       i13 = 0;
      } else {
       if ((HEAP32[(HEAP32[i12 + 456 >> 2] | 0) + 336 >> 2] | 0) != (i1 | 0)) {
        i13 = 0;
        break;
       }
       i14 = HEAP32[i12 + 32 >> 2] | 0;
       if ((i14 | 0) == 0) {
        i13 = 0;
        break;
       }
       i13 = HEAP32[i14 + 1148 >> 2] | 0;
      }
     } while (0);
     __ZN7WebCore11PageConsole10addMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringEmPNS_8DocumentE(i13, 1, 3, i4, 0, 0);
     i12 = HEAP32[i9 >> 2] | 0;
     if ((i12 | 0) != 0) {
      i11 = i12;
      break;
     }
     STACKTOP = i3;
     return;
    }
   } while (0);
   i9 = i11 | 0;
   i10 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    STACKTOP = i3;
    return;
   } else {
    HEAP32[i9 >> 2] = i10;
    STACKTOP = i3;
    return;
   }
  }
 } while (0);
 __ZN7WebCore8Document19updateStyleIfNeededEv(HEAP32[i8 + 456 >> 2] | 0);
 i8 = HEAP32[i5 >> 2] | 0;
 i5 = HEAP32[i8 + 32 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore6Chrome18runJavaScriptAlertEPNS_5FrameERKN3WTF6StringE(HEAP32[i5 + 20 >> 2] | 0, i8, i2);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore9DOMWindow16adjustWindowRectEPNS_4PageERKNS_9FloatRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, d8 = +0, d9 = +0, d10 = +0, d11 = +0, d12 = +0, d13 = +0, d14 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 __ZN7WebCore19screenAvailableRectEPNS_6WidgetE(i5, HEAP32[(HEAP32[i2 + 60 >> 2] | 0) + 452 >> 2] | 0);
 i7 = i2 + 20 | 0;
 __ZNK7WebCore6Chrome10windowRectEv(i1, HEAP32[i7 >> 2] | 0);
 d8 = +HEAPF32[i3 >> 2];
 if (((HEAPF32[tempDoublePtr >> 2] = d8, HEAP32[tempDoublePtr >> 2] | 0) & 2147483647) >>> 0 <= 2139095040 >>> 0) {
  HEAPF32[i1 >> 2] = d8;
 }
 d8 = +HEAPF32[i3 + 4 >> 2];
 if (((HEAPF32[tempDoublePtr >> 2] = d8, HEAP32[tempDoublePtr >> 2] | 0) & 2147483647) >>> 0 <= 2139095040 >>> 0) {
  HEAPF32[i1 + 4 >> 2] = d8;
 }
 d8 = +HEAPF32[i3 + 8 >> 2];
 if (((HEAPF32[tempDoublePtr >> 2] = d8, HEAP32[tempDoublePtr >> 2] | 0) & 2147483647) >>> 0 <= 2139095040 >>> 0) {
  HEAPF32[i1 + 8 >> 2] = d8;
 }
 d8 = +HEAPF32[i3 + 12 >> 2];
 i3 = i1 + 12 | 0;
 if (((HEAPF32[tempDoublePtr >> 2] = d8, HEAP32[tempDoublePtr >> 2] | 0) & 2147483647) >>> 0 <= 2139095040 >>> 0) {
  HEAPF32[i3 >> 2] = d8;
 }
 i2 = HEAP32[(HEAP32[i7 >> 2] | 0) + 8 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 420 >> 2] & 3](i6, i2);
 d8 = +HEAPF32[i6 >> 2];
 i2 = i1 + 8 | 0;
 d9 = +HEAPF32[i2 >> 2];
 d10 = +HEAPF32[i5 + 8 >> 2];
 d11 = d8 < d9 ? d9 : d8;
 d8 = d10 < d11 ? d10 : d11;
 HEAPF32[i2 >> 2] = d8;
 d11 = +HEAPF32[i6 + 4 >> 2];
 d9 = +HEAPF32[i3 >> 2];
 d12 = +HEAPF32[i5 + 12 >> 2];
 d13 = d11 < d9 ? d9 : d11;
 d11 = d12 < d13 ? d12 : d13;
 HEAPF32[i3 >> 2] = d11;
 d13 = +HEAPF32[i5 >> 2];
 i3 = i1 | 0;
 d9 = +HEAPF32[i3 >> 2];
 d14 = d13 + d10 - d8;
 d8 = d14 < d9 ? d14 : d9;
 HEAPF32[i3 >> 2] = d13 < d8 ? d8 : d13;
 d13 = +HEAPF32[i5 + 4 >> 2];
 i5 = i1 + 4 | 0;
 d8 = +HEAPF32[i5 >> 2];
 d9 = d13 + d12 - d11;
 d11 = d9 < d8 ? d9 : d8;
 HEAPF32[i5 >> 2] = d13 < d11 ? d11 : d13;
 STACKTOP = i4;
 return;
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
  if ((i12 | 0) == (-1 | 0)) {
   i13 = i10;
  } else if ((i12 | 0) == 0) {
   i14 = 3;
   break;
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
    i13 = i8;
   }
  }
  i12 = (i5 | 0) == 0 ? i6 : i5;
  i7 = i12 + i9 | 0;
  i5 = i12;
  i8 = i13;
 }
 if ((i14 | 0) == 3) {
  i15 = (i8 | 0) != 0 ? i8 : i10;
 }
 i10 = i15 + 4 | 0;
 i8 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i14 = i8 | 0;
   i13 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i14 >> 2] = i13;
    break;
   }
  }
 } while (0);
 i8 = i15 | 0;
 i13 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i14 = i13 | 0;
   i5 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i14 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i13 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i8 >> 2] = i13;
 i13 = i2 + 4 | 0;
 i2 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 HEAP32[i10 >> 2] = i2;
 return i15 | 0;
}
function __ZN3WTF7HashSetIPN7WebCore17DOMWindowPropertyENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1, i2) {
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
 __ZN3WTF9HashTableIPN7WebCore17DOMWindowPropertyES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1 | 0, (i5 | 0) / 2 & -1, 0) | 0;
 i21 = 1;
 return i21 | 0;
}
function __ZNK3WTF12StringAppendINS0_INS0_INS0_INS0_INS_6StringEPKcEES1_EES3_EES1_EES3_EcvS1_Ev(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i5 | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 HEAP32[i6 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i8 = i7 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 HEAP32[i5 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 i8 = i5 + 8 | 0;
 i7 = HEAP32[i2 + 8 >> 2] | 0;
 HEAP32[i8 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i9 = i7 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
 }
 HEAP32[i5 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
 i9 = i5 + 16 | 0;
 i7 = HEAP32[i2 + 16 >> 2] | 0;
 HEAP32[i9 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i10 = i7 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
 }
 __ZN3WTF13tryMakeStringINS_12StringAppendINS1_INS1_INS1_INS_6StringEPKcEES2_EES4_EES2_EES4_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i4, i5, HEAP32[i2 + 20 >> 2] | 0);
 i2 = i4 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i2 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i9 = i2 | 0;
   i5 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i9 >> 2] = i5;
    break;
   }
  }
 } while (0);
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
function __ZN7WebCore9DOMWindow5printEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 52 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i6 = HEAP32[i5 + 32 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 if (!(__ZN7WebCore4Page35isAnyFrameHandlingBeforeUnloadEventEv(i6) | 0)) {
  i5 = i1 + 76 | 0;
  if (__ZNK7WebCore14DocumentLoader9isLoadingEv(__ZNK7WebCore11FrameLoader20activeDocumentLoaderEv((HEAP32[i4 >> 2] | 0) + 80 | 0) | 0) | 0) {
   HEAP8[i5] = 1;
   STACKTOP = i2;
   return;
  } else {
   HEAP8[i5] = 0;
   __ZN7WebCore6Chrome5printEPNS_5FrameE(HEAP32[i6 + 20 >> 2] | 0, HEAP32[i4 >> 2] | 0);
   STACKTOP = i2;
   return;
  }
 }
 __ZN3WTF6StringC1EPKc(i3, H_BASE + 232 | 0);
 i6 = i3 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 do {
  if ((HEAP32[i5 + 4 >> 2] | 0) == 0) {
   i7 = i5;
  } else {
   i8 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i8 | 0) == 0) {
     i9 = 0;
    } else {
     if ((HEAP32[(HEAP32[i8 + 456 >> 2] | 0) + 336 >> 2] | 0) != (i1 | 0)) {
      i9 = 0;
      break;
     }
     i10 = HEAP32[i8 + 32 >> 2] | 0;
     if ((i10 | 0) == 0) {
      i9 = 0;
      break;
     }
     i9 = HEAP32[i10 + 1148 >> 2] | 0;
    }
   } while (0);
   __ZN7WebCore11PageConsole10addMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringEmPNS_8DocumentE(i9, 1, 3, i3, 0, 0);
   i8 = HEAP32[i6 >> 2] | 0;
   if ((i8 | 0) != 0) {
    i7 = i8;
    break;
   }
   STACKTOP = i2;
   return;
  }
 } while (0);
 i6 = i7 | 0;
 i3 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i7);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i6 >> 2] = i3;
  STACKTOP = i2;
  return;
 }
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
function __ZN3WTFplINS_12StringAppendINS1_INS1_INS_6StringEPKcEES2_EES4_EES2_S4_EENS1_INS1_IT_T0_EET1_EERKSA_SB_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i5 = (i4 | 0) == 0;
 if (!i5) {
  i6 = i4 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
 }
 i6 = HEAP32[i2 + 4 >> 2] | 0;
 i7 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = (i7 | 0) == 0;
 if (!i8) {
  i9 = i7 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
 }
 i9 = HEAP32[i2 + 12 >> 2] | 0;
 i10 = HEAP32[i2 + 16 >> 2] | 0;
 i2 = (i10 | 0) == 0;
 if (!i2) {
  i11 = i10 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
 }
 HEAP32[i1 >> 2] = i4;
 if (!i5) {
  i11 = i4 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
 }
 HEAP32[i1 + 4 >> 2] = i6;
 HEAP32[i1 + 8 >> 2] = i7;
 if (!i8) {
  i6 = i7 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
 }
 HEAP32[i1 + 12 >> 2] = i9;
 HEAP32[i1 + 16 >> 2] = i10;
 do {
  if (i2) {
   HEAP32[i1 + 20 >> 2] = i3;
  } else {
   i9 = i10 | 0;
   i6 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = i6 + 2;
   HEAP32[i1 + 20 >> 2] = i3;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i9 >> 2] = i6;
    break;
   }
  }
 } while (0);
 do {
  if (!i8) {
   i10 = i7 | 0;
   i3 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i10 >> 2] = i3;
    break;
   }
  }
 } while (0);
 if (i5) {
  return;
 }
 i5 = i4 | 0;
 i7 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i7 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  return;
 } else {
  HEAP32[i5 >> 2] = i7;
  return;
 }
}
function __ZN3WTFplINS_12StringAppendINS1_INS_6StringEPKcEES2_EES4_S2_EENS1_INS1_IT_T0_EET1_EERKS9_SA_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i5 = (i4 | 0) == 0;
 if (!i5) {
  i6 = i4 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
 }
 i6 = HEAP32[i2 + 4 >> 2] | 0;
 i7 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = (i7 | 0) == 0;
 if (!i8) {
  i9 = i7 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
 }
 i9 = HEAP32[i2 + 12 >> 2] | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 i3 = (i2 | 0) == 0;
 if (!i3) {
  i10 = i2 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
 }
 HEAP32[i1 >> 2] = i4;
 if (!i5) {
  i10 = i4 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
 }
 HEAP32[i1 + 4 >> 2] = i6;
 HEAP32[i1 + 8 >> 2] = i7;
 if (!i8) {
  i6 = i7 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
 }
 HEAP32[i1 + 12 >> 2] = i9;
 HEAP32[i1 + 16 >> 2] = i2;
 do {
  if (!i3) {
   i1 = i2 | 0;
   i9 = HEAP32[i1 >> 2] | 0;
   HEAP32[i1 >> 2] = i9 + 2;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i1 >> 2] = i9;
    break;
   }
  }
 } while (0);
 do {
  if (!i8) {
   i2 = i7 | 0;
   i3 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i2 >> 2] = i3;
    break;
   }
  }
 } while (0);
 if (i5) {
  return;
 }
 i5 = i4 | 0;
 i7 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i7 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  return;
 } else {
  HEAP32[i5 >> 2] = i7;
  return;
 }
}
function __ZNK7WebCore9DOMWindow6moveToEff(i1, d2, d3) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i5 | 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i8 = i7 | 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i11 = HEAP32[i1 + 52 >> 2] | 0;
 if ((i11 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i1 = HEAP32[i11 + 32 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i11 + 28 >> 2] | 0) != (i11 | 0)) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP8[(HEAP32[i11 + 472 >> 2] | 0) + 4 | 0] & 1) != 0) {
  STACKTOP = i4;
  return;
 }
 i11 = i1 + 20 | 0;
 __ZNK7WebCore6Chrome10windowRectEv(i5, HEAP32[i11 >> 2] | 0);
 __ZN7WebCore19screenAvailableRectEPNS_6WidgetE(i7, HEAP32[(HEAP32[i1 + 60 >> 2] | 0) + 452 >> 2] | 0);
 i7 = HEAP32[i8 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i6 + 4 >> 2] = i7;
 i7 = i9;
 i6 = i5;
 HEAP32[i7 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i7 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
 HEAP32[i7 + 8 >> 2] = HEAP32[i6 + 8 >> 2];
 HEAP32[i7 + 12 >> 2] = HEAP32[i6 + 12 >> 2];
 i6 = i9 | 0;
 HEAPF32[i6 >> 2] = +HEAPF32[i6 >> 2] + d2;
 i6 = i9 + 4 | 0;
 HEAPF32[i6 >> 2] = +HEAPF32[i6 >> 2] + d3;
 i6 = HEAP32[i11 >> 2] | 0;
 __ZN7WebCore9DOMWindow16adjustWindowRectEPNS_4PageERKNS_9FloatRectE(i10, i1, i9);
 __ZNK7WebCore6Chrome13setWindowRectERKNS_9FloatRectE(i6, i10);
 STACKTOP = i4;
 return;
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
function __ZN3WTF14HashCountedSetIPN7WebCore9DOMWindowENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE4findERKS3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = HEAP32[i2 + 4 >> 2] << 3 | 0;
  i6 = i5;
  i7 = i5;
 } else {
  i5 = HEAP32[i2 + 8 >> 2] | 0;
  i8 = HEAP32[i3 >> 2] | 0;
  i3 = i8;
  i9 = i3 + ~(i3 << 15) | 0;
  i3 = (i9 >>> 10 ^ i9) * 9 & -1;
  i9 = i3 >>> 6 ^ i3;
  i3 = i9 + ~(i9 << 11) | 0;
  i9 = i3 >>> 16 ^ i3;
  i3 = i9 & i5;
  i10 = i4 + (i3 << 3) | 0;
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
    i15 = i3;
    i16 = i11;
    while (1) {
     if ((i16 | 0) == 0) {
      i12 = 0;
      break L4;
     }
     i17 = (i14 | 0) == 0 ? i13 : i14;
     i18 = i17 + i15 & i5;
     i19 = i4 + (i18 << 3) | 0;
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
  i8 = i4 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
  i6 = (i12 | 0) == 0 ? i8 : i12;
  i7 = i8;
 }
 i8 = i1;
 HEAP32[i8 >> 2] = i6;
 HEAP32[i8 + 4 >> 2] = i7;
 return;
}
function __ZNK7WebCore9DOMWindow27pendingUnloadEventListenersEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 if (HEAP8[H_BASE + 1936 | 0] | 0) {
  i2 = HEAP32[H_BASE + 1952 >> 2] | 0;
 } else {
  i3 = __ZN3WTF10fastMallocEj(20) | 0;
  i4 = i3;
  _memset(i3 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 1952 >> 2] = i4;
  HEAP8[H_BASE + 1936 | 0] = 1;
  i2 = i4;
 }
 i4 = HEAP32[i2 + 8 >> 2] | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i2 = i1;
 i5 = i2 + ~(i2 << 15) | 0;
 i2 = (i5 >>> 10 ^ i5) * 9 & -1;
 i5 = i2 >>> 6 ^ i2;
 i2 = i5 + ~(i5 << 11) | 0;
 i5 = i2 >>> 16 ^ i2;
 if ((i3 | 0) == 0) {
  i6 = 0;
  return i6 | 0;
 }
 i2 = i4 & i5;
 i7 = i3 + (i2 << 3) | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 L8 : do {
  if ((i8 | 0) == (i1 | 0)) {
   i9 = i7;
  } else {
   i10 = (i5 >>> 23) + ~i5 | 0;
   i11 = i10 << 12 ^ i10;
   i10 = i11 >>> 7 ^ i11;
   i11 = i10 << 2 ^ i10;
   i10 = i11 >>> 20 ^ i11 | 1;
   i11 = 0;
   i12 = i2;
   i13 = i8;
   while (1) {
    if ((i13 | 0) == 0) {
     i6 = 0;
     break;
    }
    i14 = (i11 | 0) == 0 ? i10 : i11;
    i15 = i14 + i12 & i4;
    i16 = i3 + (i15 << 3) | 0;
    i17 = HEAP32[i16 >> 2] | 0;
    if ((i17 | 0) == (i1 | 0)) {
     i9 = i16;
     break L8;
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
function __ZN7WebCore9DOMWindow4atobERKN3WTF6StringERi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i2 | 0;
 i6 = i2 + 16 | 0;
 i7 = HEAP32[i3 >> 2] | 0;
 if ((i7 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i2;
  return;
 }
 i8 = HEAP32[i7 + 4 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   if ((HEAP32[i7 + 16 >> 2] & 32 | 0) != 0) {
    break;
   }
   i9 = HEAP32[i7 + 8 >> 2] | 0;
   i10 = 0;
   i11 = 0;
   while (1) {
    i10 = HEAPU16[i9 + (i11 << 1) >> 1] | 0 | i10;
    i11 = i11 + 1 | 0;
    if (i11 >>> 0 >= i8 >>> 0) {
     break;
    }
   }
   if ((i10 & 65280 | 0) == 0) {
    break;
   }
   HEAP32[i4 >> 2] = 5;
   HEAP32[i1 >> 2] = 0;
   STACKTOP = i2;
   return;
  }
 } while (0);
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = 0;
 i7 = i5 + 4 | 0;
 HEAP32[i7 >> 2] = 0;
 i11 = i5 + 8 | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i6 >> 2] = i5;
 if (__ZN3WTF12base64DecodeERKNS_6StringENS_33SignedOrUnsignedCharVectorAdapterENS_18Base64DecodePolicyE(i3, i6, 0) | 0) {
  __ZN3WTF6StringC1EPKcj(i1, HEAP32[i8 >> 2] | 0, HEAP32[i11 >> 2] | 0);
 } else {
  HEAP32[i4 >> 2] = 5;
  HEAP32[i1 >> 2] = 0;
 }
 if ((HEAP32[i11 >> 2] | 0) != 0) {
  HEAP32[i11 >> 2] = 0;
 }
 i11 = HEAP32[i8 >> 2] | 0;
 if ((i11 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 HEAP32[i8 >> 2] = 0;
 HEAP32[i7 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i11);
 STACKTOP = i2;
 return;
}
function __ZNK3WTF12StringAppendINS0_INS0_INS_6StringEPKcEES1_EES3_EcvS1_Ev(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i5 | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 HEAP32[i6 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i8 = i7 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 HEAP32[i5 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 i8 = i5 + 8 | 0;
 i7 = HEAP32[i2 + 8 >> 2] | 0;
 HEAP32[i8 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i9 = i7 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
 }
 __ZN3WTF13tryMakeStringINS_12StringAppendINS1_INS_6StringEPKcEES2_EES4_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i4, i5, HEAP32[i2 + 12 >> 2] | 0);
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
function __ZNK7WebCore9DOMWindow8scrollToEii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i1 + 52 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[(HEAP32[i9 + 456 >> 2] | 0) + 336 >> 2] | 0) != (i1 | 0)) {
  STACKTOP = i4;
  return;
 }
 i9 = HEAP32[i1 + 44 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = 0;
 } else {
  i10 = i9 - 156 + 68 | 0;
 }
 __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(i10);
 i10 = HEAP32[(HEAP32[i8 >> 2] | 0) + 452 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i8 = i10 + 4 | 0;
 HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 __ZNK7WebCore9FrameView23mapFromCSSToLayoutUnitsEi(i6, i10, i2);
 i2 = HEAP32[i6 >> 2] | 0;
 __ZNK7WebCore9FrameView23mapFromCSSToLayoutUnitsEi(i7, i10, i3);
 i3 = HEAP32[i7 >> 2] | 0;
 HEAP32[i5 >> 2] = i2;
 HEAP32[i5 + 4 >> 2] = i3;
 __ZN7WebCore9FrameView17setScrollPositionERKNS_8IntPointE(i10, i5);
 i5 = i10 + 4 | 0;
 i10 = i5 | 0;
 i3 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i10 >> 2] = i3;
  STACKTOP = i4;
  return;
 }
 i3 = i5 - 4 | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 63](i3);
 STACKTOP = i4;
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
function __ZN3WTF12StringAppendINS0_INS0_INS0_INS_6StringEPKcEES1_EES3_EES1_E7writeToEPh(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = i1 + 12 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = _strlen(i4 | 0) | 0;
 __ZN3WTF12StringAppendINS0_INS_6StringEPKcEES1_E7writeToEPh(i1 | 0, i2);
 i6 = i1 + 4 | 0;
 i7 = _strlen(HEAP32[i6 >> 2] | 0) | 0;
 i8 = i1 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = 0;
 } else {
  i10 = HEAP32[i9 + 4 >> 2] | 0;
 }
 i9 = i1 + 8 | 0;
 i11 = HEAP32[i9 >> 2] | 0;
 if ((i11 | 0) == 0) {
  i12 = 0;
 } else {
  i12 = HEAP32[i11 + 4 >> 2] | 0;
 }
 _memcpy(i2 + (i10 + i7 + i12) | 0, i4 | 0, i5) | 0;
 i5 = _strlen(HEAP32[i3 >> 2] | 0) | 0;
 i3 = _strlen(HEAP32[i6 >> 2] | 0) | 0;
 i6 = HEAP32[i8 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i13 = 0;
 } else {
  i13 = HEAP32[i6 + 4 >> 2] | 0;
 }
 i6 = HEAP32[i9 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i14 = 0;
 } else {
  i14 = HEAP32[i6 + 4 >> 2] | 0;
 }
 i6 = i3 + i5 + i13 + i14 | 0;
 i14 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i14 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i14 + 4 >> 2] | 0;
 i13 = HEAP32[i14 + 8 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 } else {
  i15 = 0;
 }
 while (1) {
  HEAP8[i2 + (i6 + i15) | 0] = HEAP8[i13 + i15 | 0] | 0;
  i15 = i15 + 1 | 0;
  if (i15 >>> 0 >= i1 >>> 0) {
   break;
  }
 }
 return;
}
function __ZN7WebCore9DOMWindow4btoaERKN3WTF6StringERi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i2 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 if ((i6 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i2;
  return;
 }
 i7 = HEAP32[i6 + 4 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   if ((HEAP32[i6 + 16 >> 2] & 32 | 0) != 0) {
    break;
   }
   i8 = HEAP32[i6 + 8 >> 2] | 0;
   i9 = 0;
   i10 = 0;
   while (1) {
    i9 = HEAPU16[i8 + (i10 << 1) >> 1] | 0 | i9;
    i10 = i10 + 1 | 0;
    if (i10 >>> 0 >= i7 >>> 0) {
     break;
    }
   }
   if ((i9 & 65280 | 0) == 0) {
    break;
   }
   HEAP32[i4 >> 2] = 5;
   HEAP32[i1 >> 2] = 0;
   STACKTOP = i2;
   return;
  }
 } while (0);
 __ZNK3WTF6String6latin1Ev(i5, i3);
 i3 = i5 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i11 = 0;
  i12 = 0;
 } else {
  i11 = HEAP32[i5 + 4 >> 2] | 0;
  i12 = i5 + 8 | 0;
 }
 __ZN3WTF12base64EncodeEPKvjNS_18Base64EncodePolicyE(i1, i12, i11, 0);
 i11 = HEAP32[i3 >> 2] | 0;
 if ((i11 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i3 = i11 | 0;
 i12 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i12 | 0) == 0) {
  __ZN3WTF8fastFreeEPv(i11);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i3 >> 2] = i12;
  STACKTOP = i2;
  return;
 }
}
function __ZN3WTF12StringAppendINS0_INS_6StringEPKcEES1_E7writeToEPh(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = i1 + 4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = _strlen(i4 | 0) | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i7 | 0) == 0) {
   i8 = 0;
  } else {
   i9 = HEAP32[i7 + 4 >> 2] | 0;
   i10 = HEAP32[i7 + 8 >> 2] | 0;
   if ((i9 | 0) == 0) {
    i8 = 0;
    break;
   } else {
    i11 = 0;
   }
   while (1) {
    HEAP8[i2 + i11 | 0] = HEAP8[i10 + i11 | 0] | 0;
    i11 = i11 + 1 | 0;
    if (i11 >>> 0 >= i9 >>> 0) {
     break;
    }
   }
   i9 = HEAP32[i6 >> 2] | 0;
   if ((i9 | 0) == 0) {
    i8 = 0;
    break;
   }
   i8 = HEAP32[i9 + 4 >> 2] | 0;
  }
 } while (0);
 _memcpy(i2 + i8 | 0, i4 | 0, i5) | 0;
 i5 = _strlen(HEAP32[i3 >> 2] | 0) | 0;
 i3 = HEAP32[i6 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i12 = 0;
 } else {
  i12 = HEAP32[i3 + 4 >> 2] | 0;
 }
 i3 = i12 + i5 | 0;
 i5 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i5 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i5 + 4 >> 2] | 0;
 i12 = HEAP32[i5 + 8 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 } else {
  i13 = 0;
 }
 while (1) {
  HEAP8[i2 + (i3 + i13) | 0] = HEAP8[i12 + i13 | 0] | 0;
  i13 = i13 + 1 | 0;
  if (i13 >>> 0 >= i1 >>> 0) {
   break;
  }
 }
 return;
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
function __ZNK7WebCore9DOMWindow10styleMediaEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = HEAP32[i2 + 52 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   if ((HEAP32[(HEAP32[i3 + 456 >> 2] | 0) + 336 >> 2] | 0) != (i2 | 0)) {
    break;
   }
   i4 = i2 + 148 | 0;
   i5 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i5 | 0) == 0) {
     i6 = __ZN3WTF10fastMallocEj(16) | 0;
     __ZN7WebCore10StyleMediaC1EPNS_5FrameE(i6, i3);
     i7 = HEAP32[i4 >> 2] | 0;
     HEAP32[i4 >> 2] = i6;
     if ((i7 | 0) == 0) {
      i8 = i6;
     } else {
      i6 = i7 + 12 | 0;
      i7 = i6 | 0;
      i9 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
      do {
       if ((i9 | 0) == 0) {
        i10 = i6 - 12 | 0;
        if ((i10 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 24 >> 2] & 63](i10);
       } else {
        HEAP32[i7 >> 2] = i9;
       }
      } while (0);
      i8 = HEAP32[i4 >> 2] | 0;
     }
     HEAP32[i1 >> 2] = i8;
     if ((i8 | 0) != 0) {
      i11 = i8;
      break;
     }
     return;
    } else {
     HEAP32[i1 >> 2] = i5;
     i11 = i5;
    }
   } while (0);
   i5 = i11 + 12 | 0;
   HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZNK7WebCore9DOMWindow8resizeByEff(i1, d2, d3) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, d12 = +0, d13 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i5 | 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i8 = i7 | 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i10 = HEAP32[i1 + 52 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i1 = HEAP32[i10 + 32 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i10 + 28 >> 2] | 0) != (i10 | 0)) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP8[(HEAP32[i10 + 472 >> 2] | 0) + 4 | 0] & 1) != 0) {
  STACKTOP = i4;
  return;
 }
 i10 = i1 + 20 | 0;
 __ZNK7WebCore6Chrome10windowRectEv(i5, HEAP32[i10 >> 2] | 0);
 i11 = i5 + 8 | 0;
 d12 = +HEAPF32[i11 >> 2];
 d13 = +HEAPF32[i11 + 4 >> 2] + d3;
 i11 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i8 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i8 + 4 >> 2] = i11;
 i11 = i7 + 8 | 0;
 d3 = +(d12 + d2);
 d2 = +d13;
 HEAPF32[i11 >> 2] = d3;
 HEAPF32[i11 + 4 >> 2] = d2;
 i11 = HEAP32[i10 >> 2] | 0;
 __ZN7WebCore9DOMWindow16adjustWindowRectEPNS_4PageERKNS_9FloatRectE(i9, i1, i7);
 __ZNK7WebCore6Chrome13setWindowRectERKNS_9FloatRectE(i11, i9);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore9DOMWindow8scrollByEii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i1 + 52 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[(HEAP32[i10 + 456 >> 2] | 0) + 336 >> 2] | 0) != (i1 | 0)) {
  STACKTOP = i4;
  return;
 }
 i10 = HEAP32[i1 + 44 >> 2] | 0;
 if ((i10 | 0) == 0) {
  i11 = 0;
 } else {
  i11 = i10 - 156 + 68 | 0;
 }
 __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(i11);
 i11 = HEAP32[(HEAP32[i9 >> 2] | 0) + 452 >> 2] | 0;
 if ((i11 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZNK7WebCore9FrameView23mapFromCSSToLayoutUnitsEi(i7, i11, i2);
 i2 = HEAP32[i7 >> 2] | 0;
 __ZNK7WebCore9FrameView23mapFromCSSToLayoutUnitsEi(i8, i11, i3);
 i3 = HEAP32[i8 >> 2] | 0;
 i8 = i11 | 0;
 i7 = HEAP32[i11 >> 2] | 0;
 i11 = HEAP32[i7 + 208 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[i7 + 192 >> 2] & 3](i6, i8);
 i7 = (HEAP32[i6 + 4 >> 2] | 0) + i3 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i6 >> 2] | 0) + i2;
 HEAP32[i5 + 4 >> 2] = i7;
 FUNCTION_TABLE_vii[i11 & 3](i8, i5);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore9DOMWindow27webkitRequestAnimationFrameEN3WTF10PassRefPtrINS_29RequestAnimationFrameCallbackEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i2 | 0;
 HEAP8[(HEAP32[i5 >> 2] | 0) + 13 | 0] = 1;
 i2 = HEAP32[i1 + 44 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i6 = 0;
  STACKTOP = i3;
  return i6 | 0;
 }
 i1 = i2 - 156 + 68 | 0;
 if ((i1 | 0) == 0) {
  i6 = 0;
  STACKTOP = i3;
  return i6 | 0;
 }
 i2 = i4 | 0;
 i7 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i2 >> 2] = i7;
 i7 = __ZN7WebCore8Document21requestAnimationFrameEN3WTF10PassRefPtrINS_29RequestAnimationFrameCallbackEEE(i1, i4) | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i6 = i7;
  STACKTOP = i3;
  return i6 | 0;
 }
 i2 = i4 + 4 | 0;
 i4 = i2 | 0;
 i1 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i4 >> 2] = i1;
  i6 = i7;
  STACKTOP = i3;
  return i6 | 0;
 }
 i1 = i2 - 4 | 0;
 if ((i1 | 0) == 0) {
  i6 = i7;
  STACKTOP = i3;
  return i6 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 63](i1);
 i6 = i7;
 STACKTOP = i3;
 return i6 | 0;
}
function __ZN7WebCore9DOMWindow21requestAnimationFrameEN3WTF10PassRefPtrINS_29RequestAnimationFrameCallbackEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i2 | 0;
 HEAP8[(HEAP32[i5 >> 2] | 0) + 13 | 0] = 0;
 i2 = HEAP32[i1 + 44 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i6 = 0;
  STACKTOP = i3;
  return i6 | 0;
 }
 i1 = i2 - 156 + 68 | 0;
 if ((i1 | 0) == 0) {
  i6 = 0;
  STACKTOP = i3;
  return i6 | 0;
 }
 i2 = i4 | 0;
 i7 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i2 >> 2] = i7;
 i7 = __ZN7WebCore8Document21requestAnimationFrameEN3WTF10PassRefPtrINS_29RequestAnimationFrameCallbackEEE(i1, i4) | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i6 = i7;
  STACKTOP = i3;
  return i6 | 0;
 }
 i2 = i4 + 4 | 0;
 i4 = i2 | 0;
 i1 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i4 >> 2] = i1;
  i6 = i7;
  STACKTOP = i3;
  return i6 | 0;
 }
 i1 = i2 - 4 | 0;
 if ((i1 | 0) == 0) {
  i6 = i7;
  STACKTOP = i3;
  return i6 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 63](i1);
 i6 = i7;
 STACKTOP = i3;
 return i6 | 0;
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
function __ZNK7WebCore9DOMWindow8resizeToEff(i1, d2, d3) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, d11 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i5 | 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i8 = i7 | 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i10 = HEAP32[i1 + 52 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i1 = HEAP32[i10 + 32 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i10 + 28 >> 2] | 0) != (i10 | 0)) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP8[(HEAP32[i10 + 472 >> 2] | 0) + 4 | 0] & 1) != 0) {
  STACKTOP = i4;
  return;
 }
 i10 = i1 + 20 | 0;
 __ZNK7WebCore6Chrome10windowRectEv(i5, HEAP32[i10 >> 2] | 0);
 i5 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i8 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i8 + 4 >> 2] = i5;
 i5 = i7 + 8 | 0;
 d11 = +d2;
 d2 = +d3;
 HEAPF32[i5 >> 2] = d11;
 HEAPF32[i5 + 4 >> 2] = d2;
 i5 = HEAP32[i10 >> 2] | 0;
 __ZN7WebCore9DOMWindow16adjustWindowRectEPNS_4PageERKNS_9FloatRectE(i9, i1, i7);
 __ZNK7WebCore6Chrome13setWindowRectERKNS_9FloatRectE(i5, i9);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore9DOMWindow7setNameERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = HEAP32[i1 + 52 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i1 = i6 + 40 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i6 | 0) == 0) {
   i2 = i4 | 0;
   HEAP32[i2 >> 2] = 0;
   i7 = i2;
  } else {
   if ((HEAP32[i6 + 16 >> 2] & 16 | 0) == 0) {
    __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i4, i6);
    i7 = i4 | 0;
    break;
   } else {
    i2 = i4 | 0;
    HEAP32[i2 >> 2] = i6;
    i8 = i6 | 0;
    HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
    i7 = i2;
    break;
   }
  }
 } while (0);
 i6 = i5 | 0;
 HEAP32[i6 >> 2] = HEAP32[i7 >> 2];
 __ZN7WebCore9FrameTree7setNameERKN3WTF12AtomicStringE(i1, i5);
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
function __ZNK7WebCore9DOMWindow32webkitConvertPointFromPageToNodeEPNS_4NodeEPKNS_11WebKitPointE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, d10 = +0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = i6;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 if ((i3 | 0) == 0 | (i4 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i5;
  return;
 }
 i9 = HEAP32[i2 + 44 >> 2] | 0;
 i2 = i9 - 156 + 68 | 0;
 if ((i9 | 0) == 0 | (i2 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i5;
  return;
 } else {
  __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(i2);
  d10 = +HEAPF32[i4 + 8 >> 2];
  HEAPF32[i6 >> 2] = +HEAPF32[i4 + 4 >> 2];
  HEAPF32[i7 + 4 >> 2] = d10;
  __ZNK7WebCore4Node15convertFromPageERKNS_10FloatPointE(i8, i3, i7);
  i7 = HEAP32[i8 >> 2] | 0;
  i3 = HEAP32[i8 + 4 >> 2] | 0;
  HEAP32[i6 >> 2] = i7;
  HEAP32[i6 + 4 >> 2] = i3;
  i6 = i7 | 0;
  i7 = i3 | 0;
  i3 = __ZN3WTF10fastMallocEj(12) | 0;
  HEAP32[i3 >> 2] = 1;
  HEAP32[i3 + 4 >> 2] = i6;
  HEAP32[i3 + 8 >> 2] = i7;
  HEAP32[i1 >> 2] = i3;
  STACKTOP = i5;
  return;
 }
}
function __ZNK7WebCore9DOMWindow32webkitConvertPointFromNodeToPageEPNS_4NodeEPKNS_11WebKitPointE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, d10 = +0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = i6;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 if ((i3 | 0) == 0 | (i4 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i5;
  return;
 }
 i9 = HEAP32[i2 + 44 >> 2] | 0;
 i2 = i9 - 156 + 68 | 0;
 if ((i9 | 0) == 0 | (i2 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i5;
  return;
 } else {
  __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(i2);
  d10 = +HEAPF32[i4 + 8 >> 2];
  HEAPF32[i6 >> 2] = +HEAPF32[i4 + 4 >> 2];
  HEAPF32[i7 + 4 >> 2] = d10;
  __ZNK7WebCore4Node13convertToPageERKNS_10FloatPointE(i8, i3, i7);
  i7 = HEAP32[i8 >> 2] | 0;
  i3 = HEAP32[i8 + 4 >> 2] | 0;
  HEAP32[i6 >> 2] = i7;
  HEAP32[i6 + 4 >> 2] = i3;
  i6 = i7 | 0;
  i7 = i3 | 0;
  i3 = __ZN3WTF10fastMallocEj(12) | 0;
  HEAP32[i3 >> 2] = 1;
  HEAP32[i3 + 4 >> 2] = i6;
  HEAP32[i3 + 8 >> 2] = i7;
  HEAP32[i1 >> 2] = i3;
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
function __ZNK7WebCore9DOMWindow6cryptoEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = HEAP32[i1 + 52 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP32[(HEAP32[i2 + 456 >> 2] | 0) + 336 >> 2] | 0) != (i1 | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i2 = i1 + 108 | 0;
 do {
  if ((HEAP32[i2 >> 2] | 0) == 0) {
   i4 = HEAP32[i1 + 44 >> 2] | 0;
   if ((i4 | 0) == 0) {
    i5 = 0;
   } else {
    i5 = i4 - 156 + 68 | 0;
   }
   i4 = __ZN3WTF10fastMallocEj(12) | 0;
   __ZN7WebCore6CryptoC1ERNS_8DocumentE(i4, i5);
   i6 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = i4;
   if ((i6 | 0) == 0) {
    break;
   }
   i4 = i6 + 8 | 0;
   i6 = i4 | 0;
   i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i6 >> 2] = i7;
    break;
   }
   i7 = i4 - 8 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 8 >> 2] & 63](i7);
  }
 } while (0);
 i3 = HEAP32[i2 >> 2] | 0;
 return i3 | 0;
}
function __ZNK7WebCore9DOMWindow7scrollYEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i1 + 52 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i7 = 0;
  STACKTOP = i2;
  return i7 | 0;
 }
 i8 = HEAP32[i1 + 452 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i7 = 0;
  STACKTOP = i2;
  return i7 | 0;
 }
 i1 = i8 | 0;
 i9 = i8;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 192 >> 2] & 3](i3, i1);
 if ((HEAP32[i3 + 4 >> 2] | 0) == 0) {
  i7 = 0;
  STACKTOP = i2;
  return i7 | 0;
 }
 __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[(HEAP32[i6 >> 2] | 0) + 456 >> 2] | 0);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 192 >> 2] & 3](i4, i1);
 HEAP32[i5 >> 2] = HEAP32[i4 + 4 >> 2];
 i7 = __ZNK7WebCore9FrameView23mapFromLayoutToCSSUnitsENS_10LayoutUnitE(i8, i5) | 0;
 STACKTOP = i2;
 return i7 | 0;
}
function __ZNK7WebCore9DOMWindow7scrollXEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i1 + 52 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i7 = 0;
  STACKTOP = i2;
  return i7 | 0;
 }
 i8 = HEAP32[i1 + 452 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i7 = 0;
  STACKTOP = i2;
  return i7 | 0;
 }
 i1 = i8 | 0;
 i9 = i8;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 192 >> 2] & 3](i3, i1);
 if ((HEAP32[i3 >> 2] | 0) == 0) {
  i7 = 0;
  STACKTOP = i2;
  return i7 | 0;
 }
 __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[(HEAP32[i6 >> 2] | 0) + 456 >> 2] | 0);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 192 >> 2] & 3](i4, i1);
 HEAP32[i5 >> 2] = HEAP32[i4 >> 2];
 i7 = __ZNK7WebCore9FrameView23mapFromLayoutToCSSUnitsENS_10LayoutUnitE(i8, i5) | 0;
 STACKTOP = i2;
 return i7 | 0;
}
function __ZNK7WebCore9DOMWindow6moveByEff(i1, d2, d3) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = HEAP32[i1 + 52 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i1 = HEAP32[i7 + 32 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i7 + 28 >> 2] | 0) != (i7 | 0)) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP8[(HEAP32[i7 + 472 >> 2] | 0) + 4 | 0] & 1) != 0) {
  STACKTOP = i4;
  return;
 }
 i7 = i1 + 20 | 0;
 __ZNK7WebCore6Chrome10windowRectEv(i5, HEAP32[i7 >> 2] | 0);
 i8 = i5 | 0;
 HEAPF32[i8 >> 2] = +HEAPF32[i8 >> 2] + d2;
 i8 = i5 + 4 | 0;
 HEAPF32[i8 >> 2] = +HEAPF32[i8 >> 2] + d3;
 i8 = HEAP32[i7 >> 2] | 0;
 __ZN7WebCore9DOMWindow16adjustWindowRectEPNS_4PageERKNS_9FloatRectE(i6, i1, i5);
 __ZNK7WebCore6Chrome13setWindowRectERKNS_9FloatRectE(i8, i6);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore9DOMWindow16getComputedStyleEPNS_7ElementERKN3WTF6StringE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i2 | 0;
 if ((i3 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i2;
  return;
 }
 i6 = i3 + 8 | 0;
 HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 i6 = __ZN3WTF10fastMallocEj(24) | 0;
 i7 = i5 | 0;
 HEAP32[i7 >> 2] = i3;
 __ZN7WebCore27CSSComputedStyleDeclarationC1EN3WTF10PassRefPtrINS_4NodeEEEbRKNS1_6StringE(i6, i5, 0, i4);
 i4 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i7 = i4 + 8 | 0;
   i5 = i7 | 0;
   i3 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i3;
   if ((i3 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
  }
 } while (0);
 HEAP32[i1 >> 2] = i6;
 STACKTOP = i2;
 return;
}
function __ZNK7WebCore9DOMWindow16applicationCacheEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = HEAP32[i1 + 52 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP32[(HEAP32[i2 + 456 >> 2] | 0) + 336 >> 2] | 0) != (i1 | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = i1 + 172 | 0;
 do {
  if ((HEAP32[i4 >> 2] | 0) == 0) {
   i1 = __ZN3WTF10fastMallocEj(56) | 0;
   __ZN7WebCore19DOMApplicationCacheC1EPNS_5FrameE(i1, i2);
   i5 = HEAP32[i4 >> 2] | 0;
   HEAP32[i4 >> 2] = i1;
   if ((i5 | 0) == 0) {
    break;
   }
   i1 = i5 + 40 | 0;
   i5 = i1 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i5 >> 2] = i6;
    break;
   }
   i6 = i1 - 40 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 44 >> 2] & 63](i6);
  }
 } while (0);
 i3 = HEAP32[i4 >> 2] | 0;
 return i3 | 0;
}
function __ZNK7WebCore9DOMWindow11personalbarEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = HEAP32[i1 + 52 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP32[(HEAP32[i2 + 456 >> 2] | 0) + 336 >> 2] | 0) != (i1 | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = i1 + 120 | 0;
 do {
  if ((HEAP32[i4 >> 2] | 0) == 0) {
   i1 = __ZN3WTF10fastMallocEj(24) | 0;
   __ZN7WebCore7BarPropC1EPNS_5FrameENS0_4TypeE(i1, i2, 2);
   i5 = HEAP32[i4 >> 2] | 0;
   HEAP32[i4 >> 2] = i1;
   if ((i5 | 0) == 0) {
    break;
   }
   i1 = i5 + 16 | 0;
   i5 = i1 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i5 >> 2] = i6;
    break;
   }
   i6 = i1 - 16 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 24 >> 2] & 63](i6);
  }
 } while (0);
 i3 = HEAP32[i4 >> 2] | 0;
 return i3 | 0;
}
function __ZNK7WebCore9DOMWindow11locationbarEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = HEAP32[i1 + 52 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP32[(HEAP32[i2 + 456 >> 2] | 0) + 336 >> 2] | 0) != (i1 | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = i1 + 112 | 0;
 do {
  if ((HEAP32[i4 >> 2] | 0) == 0) {
   i1 = __ZN3WTF10fastMallocEj(24) | 0;
   __ZN7WebCore7BarPropC1EPNS_5FrameENS0_4TypeE(i1, i2, 0);
   i5 = HEAP32[i4 >> 2] | 0;
   HEAP32[i4 >> 2] = i1;
   if ((i5 | 0) == 0) {
    break;
   }
   i1 = i5 + 16 | 0;
   i5 = i1 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i5 >> 2] = i6;
    break;
   }
   i6 = i1 - 16 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 24 >> 2] & 63](i6);
  }
 } while (0);
 i3 = HEAP32[i4 >> 2] | 0;
 return i3 | 0;
}
function __ZNK7WebCore9DOMWindow10scrollbarsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = HEAP32[i1 + 52 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP32[(HEAP32[i2 + 456 >> 2] | 0) + 336 >> 2] | 0) != (i1 | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = i1 + 124 | 0;
 do {
  if ((HEAP32[i4 >> 2] | 0) == 0) {
   i1 = __ZN3WTF10fastMallocEj(24) | 0;
   __ZN7WebCore7BarPropC1EPNS_5FrameENS0_4TypeE(i1, i2, 3);
   i5 = HEAP32[i4 >> 2] | 0;
   HEAP32[i4 >> 2] = i1;
   if ((i5 | 0) == 0) {
    break;
   }
   i1 = i5 + 16 | 0;
   i5 = i1 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i5 >> 2] = i6;
    break;
   }
   i6 = i1 - 16 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 24 >> 2] & 63](i6);
  }
 } while (0);
 i3 = HEAP32[i4 >> 2] | 0;
 return i3 | 0;
}
function __ZNK7WebCore9DOMWindow9statusbarEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = HEAP32[i1 + 52 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP32[(HEAP32[i2 + 456 >> 2] | 0) + 336 >> 2] | 0) != (i1 | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = i1 + 128 | 0;
 do {
  if ((HEAP32[i4 >> 2] | 0) == 0) {
   i1 = __ZN3WTF10fastMallocEj(24) | 0;
   __ZN7WebCore7BarPropC1EPNS_5FrameENS0_4TypeE(i1, i2, 4);
   i5 = HEAP32[i4 >> 2] | 0;
   HEAP32[i4 >> 2] = i1;
   if ((i5 | 0) == 0) {
    break;
   }
   i1 = i5 + 16 | 0;
   i5 = i1 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i5 >> 2] = i6;
    break;
   }
   i6 = i1 - 16 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 24 >> 2] & 63](i6);
  }
 } while (0);
 i3 = HEAP32[i4 >> 2] | 0;
 return i3 | 0;
}
function __ZNK7WebCore9DOMWindow7toolbarEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = HEAP32[i1 + 52 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP32[(HEAP32[i2 + 456 >> 2] | 0) + 336 >> 2] | 0) != (i1 | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = i1 + 132 | 0;
 do {
  if ((HEAP32[i4 >> 2] | 0) == 0) {
   i1 = __ZN3WTF10fastMallocEj(24) | 0;
   __ZN7WebCore7BarPropC1EPNS_5FrameENS0_4TypeE(i1, i2, 5);
   i5 = HEAP32[i4 >> 2] | 0;
   HEAP32[i4 >> 2] = i1;
   if ((i5 | 0) == 0) {
    break;
   }
   i1 = i5 + 16 | 0;
   i5 = i1 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i5 >> 2] = i6;
    break;
   }
   i6 = i1 - 16 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 24 >> 2] & 63](i6);
  }
 } while (0);
 i3 = HEAP32[i4 >> 2] | 0;
 return i3 | 0;
}
function __ZNK7WebCore9DOMWindow7menubarEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = HEAP32[i1 + 52 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP32[(HEAP32[i2 + 456 >> 2] | 0) + 336 >> 2] | 0) != (i1 | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = i1 + 116 | 0;
 do {
  if ((HEAP32[i4 >> 2] | 0) == 0) {
   i1 = __ZN3WTF10fastMallocEj(24) | 0;
   __ZN7WebCore7BarPropC1EPNS_5FrameENS0_4TypeE(i1, i2, 1);
   i5 = HEAP32[i4 >> 2] | 0;
   HEAP32[i4 >> 2] = i1;
   if ((i5 | 0) == 0) {
    break;
   }
   i1 = i5 + 16 | 0;
   i5 = i1 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i5 >> 2] = i6;
    break;
   }
   i6 = i1 - 16 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 24 >> 2] & 63](i6);
  }
 } while (0);
 i3 = HEAP32[i4 >> 2] | 0;
 return i3 | 0;
}
function __ZNK7WebCore9DOMWindow8locationEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = HEAP32[i1 + 52 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP32[(HEAP32[i2 + 456 >> 2] | 0) + 336 >> 2] | 0) != (i1 | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = i1 + 144 | 0;
 do {
  if ((HEAP32[i4 >> 2] | 0) == 0) {
   i1 = __ZN3WTF10fastMallocEj(20) | 0;
   __ZN7WebCore8LocationC1EPNS_5FrameE(i1, i2);
   i5 = HEAP32[i4 >> 2] | 0;
   HEAP32[i4 >> 2] = i1;
   if ((i5 | 0) == 0) {
    break;
   }
   i1 = i5 + 16 | 0;
   i5 = i1 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i5 >> 2] = i6;
    break;
   }
   i6 = i1 - 16 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 24 >> 2] & 63](i6);
  }
 } while (0);
 i3 = HEAP32[i4 >> 2] | 0;
 return i3 | 0;
}
function __ZNK7WebCore9DOMWindow9navigatorEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = HEAP32[i1 + 52 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP32[(HEAP32[i2 + 456 >> 2] | 0) + 336 >> 2] | 0) != (i1 | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = i1 + 140 | 0;
 do {
  if ((HEAP32[i4 >> 2] | 0) == 0) {
   i1 = __ZN3WTF10fastMallocEj(52) | 0;
   __ZN7WebCore9NavigatorC1EPNS_5FrameE(i1, i2);
   i5 = HEAP32[i4 >> 2] | 0;
   HEAP32[i4 >> 2] = i1;
   if ((i5 | 0) == 0) {
    break;
   }
   i1 = i5 + 8 | 0;
   i5 = i1 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i5 >> 2] = i6;
    break;
   }
   i6 = i1 - 8 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] & 63](i6);
  }
 } while (0);
 i3 = HEAP32[i4 >> 2] | 0;
 return i3 | 0;
}
function __ZNK7WebCore9DOMWindow7historyEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = HEAP32[i1 + 52 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP32[(HEAP32[i2 + 456 >> 2] | 0) + 336 >> 2] | 0) != (i1 | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = i1 + 104 | 0;
 do {
  if ((HEAP32[i4 >> 2] | 0) == 0) {
   i1 = __ZN3WTF10fastMallocEj(24) | 0;
   __ZN7WebCore7HistoryC1EPNS_5FrameE(i1, i2);
   i5 = HEAP32[i4 >> 2] | 0;
   HEAP32[i4 >> 2] = i1;
   if ((i5 | 0) == 0) {
    break;
   }
   i1 = i5 + 16 | 0;
   i5 = i1 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i5 >> 2] = i6;
    break;
   }
   i6 = i1 - 16 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 24 >> 2] & 63](i6);
  }
 } while (0);
 i3 = HEAP32[i4 >> 2] | 0;
 return i3 | 0;
}
function __ZNK7WebCore9DOMWindow7consoleEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = HEAP32[i1 + 52 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP32[(HEAP32[i2 + 456 >> 2] | 0) + 336 >> 2] | 0) != (i1 | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = i1 + 136 | 0;
 do {
  if ((HEAP32[i4 >> 2] | 0) == 0) {
   i1 = __ZN3WTF10fastMallocEj(32) | 0;
   __ZN7WebCore7ConsoleC1EPNS_5FrameE(i1, i2);
   i5 = HEAP32[i4 >> 2] | 0;
   HEAP32[i4 >> 2] = i1;
   if ((i5 | 0) == 0) {
    break;
   }
   i1 = i5 + 16 | 0;
   i5 = i1 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i5 >> 2] = i6;
    break;
   }
   i6 = i1 - 16 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 24 >> 2] & 63](i6);
  }
 } while (0);
 i3 = HEAP32[i4 >> 2] | 0;
 return i3 | 0;
}
function __ZNK7WebCore9DOMWindow6screenEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = HEAP32[i1 + 52 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP32[(HEAP32[i2 + 456 >> 2] | 0) + 336 >> 2] | 0) != (i1 | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = i1 + 100 | 0;
 do {
  if ((HEAP32[i4 >> 2] | 0) == 0) {
   i1 = __ZN3WTF10fastMallocEj(20) | 0;
   __ZN7WebCore6ScreenC1EPNS_5FrameE(i1, i2);
   i5 = HEAP32[i4 >> 2] | 0;
   HEAP32[i4 >> 2] = i1;
   if ((i5 | 0) == 0) {
    break;
   }
   i1 = i5 + 16 | 0;
   i5 = i1 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i5 >> 2] = i6;
    break;
   }
   i6 = i1 - 16 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 24 >> 2] & 63](i6);
  }
 } while (0);
 i3 = HEAP32[i4 >> 2] | 0;
 return i3 | 0;
}
function __ZN3WTF6VectorINS_6RefPtrIN7WebCore7CSSRuleEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN7WebCore9DOMWindow11setIntervalEN3WTF10PassOwnPtrINS_15ScheduledActionEEEiRi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = HEAP32[i1 + 44 >> 2] | 0;
 if ((i7 | 0) == 0) {
  HEAP32[i4 >> 2] = 15;
  i8 = -1;
  STACKTOP = i5;
  return i8 | 0;
 }
 i4 = i6 | 0;
 i1 = i2 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i4 >> 2] = i2;
 i2 = __ZN7WebCore8DOMTimer7installEPNS_22ScriptExecutionContextEN3WTF10PassOwnPtrINS_15ScheduledActionEEEib(i7, i6, i3, 0) | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i8 = i2;
  STACKTOP = i5;
  return i8 | 0;
 }
 __ZN7WebCore15ScheduledActionD2Ev(i3);
 __ZN3WTF8fastFreeEPv(i3);
 i8 = i2;
 STACKTOP = i5;
 return i8 | 0;
}
function __ZN7WebCore9DOMWindow10setTimeoutEN3WTF10PassOwnPtrINS_15ScheduledActionEEEiRi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = HEAP32[i1 + 44 >> 2] | 0;
 if ((i7 | 0) == 0) {
  HEAP32[i4 >> 2] = 15;
  i8 = -1;
  STACKTOP = i5;
  return i8 | 0;
 }
 i4 = i6 | 0;
 i1 = i2 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i4 >> 2] = i2;
 i2 = __ZN7WebCore8DOMTimer7installEPNS_22ScriptExecutionContextEN3WTF10PassOwnPtrINS_15ScheduledActionEEEib(i7, i6, i3, 1) | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i8 = i2;
  STACKTOP = i5;
  return i8 | 0;
 }
 __ZN7WebCore15ScheduledActionD2Ev(i3);
 __ZN3WTF8fastFreeEPv(i3);
 i8 = i2;
 STACKTOP = i5;
 return i8 | 0;
}
function __ZN7WebCore9DOMWindow16setDefaultStatusERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = i1 + 156 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i2 = i4 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 i2 = i3 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i4;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 | 0;
   i2 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i4 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i1 + 52 >> 2] | 0;
 if ((i5 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i5 + 32 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 __ZN7WebCore6Chrome16setStatusbarTextEPNS_5FrameERKN3WTF6StringE(HEAP32[i1 + 20 >> 2] | 0, i5, i3);
 return;
}
function __ZN7WebCore9DOMWindow9setStatusERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = i1 + 152 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i2 = i4 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 i2 = i3 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i4;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 | 0;
   i2 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i4 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i1 + 52 >> 2] | 0;
 if ((i5 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i5 + 32 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 __ZN7WebCore6Chrome16setStatusbarTextEPNS_5FrameERKN3WTF6StringE(HEAP32[i1 + 20 >> 2] | 0, i5, i3);
 return;
}
function __ZN7WebCore9DOMWindow17printErrorMessageERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 if ((HEAP32[i3 + 4 >> 2] | 0) == 0) {
  return;
 }
 i3 = HEAP32[i1 + 52 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   i4 = 0;
  } else {
   if ((HEAP32[(HEAP32[i3 + 456 >> 2] | 0) + 336 >> 2] | 0) != (i1 | 0)) {
    i4 = 0;
    break;
   }
   i5 = HEAP32[i3 + 32 >> 2] | 0;
   if ((i5 | 0) == 0) {
    i4 = 0;
    break;
   }
   i4 = HEAP32[i5 + 1148 >> 2] | 0;
  }
 } while (0);
 __ZN7WebCore11PageConsole10addMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringEmPNS_8DocumentE(i4, 1, 3, i2, 0, 0);
 return;
}
function __ZN7WebCore9DOMWindowC2EPNS_8DocumentE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 HEAP32[i1 + 36 >> 2] = 1;
 i3 = i1 | 0;
 HEAP32[i3 >> 2] = H_BASE + 1824;
 __ZN7WebCore15EventTargetDataC1Ev(i1 + 4 | 0);
 __ZN7WebCore26ContextDestructionObserverC2EPNS_22ScriptExecutionContextE(i1 + 40 | 0, (i2 | 0) == 0 ? 0 : i2 + 88 | 0);
 __ZN7WebCore24FrameDestructionObserverC2EPNS_5FrameE(i1 + 48 | 0, HEAP32[i2 + 332 >> 2] | 0);
 _memset(i1 + 56 | 0, 0, 20) | 0;
 HEAP32[i3 >> 2] = H_BASE + 1688;
 HEAP32[i1 + 40 >> 2] = H_BASE + 1768;
 HEAP32[i1 + 48 >> 2] = H_BASE + 1788;
 HEAP8[i1 + 76 | 0] = 0;
 HEAP8[i1 + 77 | 0] = 0;
 _memset(i1 + 80 | 0, 0, 96) | 0;
 return;
}
function __ZN7WebCore9DOMWindowC1EPNS_8DocumentE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 HEAP32[i1 + 36 >> 2] = 1;
 i3 = i1 | 0;
 HEAP32[i3 >> 2] = H_BASE + 1824;
 __ZN7WebCore15EventTargetDataC1Ev(i1 + 4 | 0);
 __ZN7WebCore26ContextDestructionObserverC2EPNS_22ScriptExecutionContextE(i1 + 40 | 0, (i2 | 0) == 0 ? 0 : i2 + 88 | 0);
 __ZN7WebCore24FrameDestructionObserverC2EPNS_5FrameE(i1 + 48 | 0, HEAP32[i2 + 332 >> 2] | 0);
 _memset(i1 + 56 | 0, 0, 20) | 0;
 HEAP32[i3 >> 2] = H_BASE + 1688;
 HEAP32[i1 + 40 >> 2] = H_BASE + 1768;
 HEAP32[i1 + 48 >> 2] = H_BASE + 1788;
 HEAP8[i1 + 76 | 0] = 0;
 HEAP8[i1 + 77 | 0] = 0;
 _memset(i1 + 80 | 0, 0, 96) | 0;
 return;
}
function __ZNK7WebCore9DOMWindow11innerHeightEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = HEAP32[i1 + 52 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = 0;
  STACKTOP = i2;
  return i6 | 0;
 }
 i1 = HEAP32[i5 + 452 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i6 = 0;
  STACKTOP = i2;
  return i6 | 0;
 }
 __ZNK7WebCore10ScrollView18visibleContentRectENS_14ScrollableArea36VisibleContentRectIncludesScrollbarsE(i4, i1 | 0, 1);
 HEAP32[i3 >> 2] = HEAP32[i4 + 12 >> 2];
 i6 = __ZNK7WebCore9FrameView23mapFromLayoutToCSSUnitsENS_10LayoutUnitE(i1, i3) | 0;
 STACKTOP = i2;
 return i6 | 0;
}
function __ZNK7WebCore9DOMWindow10innerWidthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = HEAP32[i1 + 52 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = 0;
  STACKTOP = i2;
  return i6 | 0;
 }
 i1 = HEAP32[i5 + 452 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i6 = 0;
  STACKTOP = i2;
  return i6 | 0;
 }
 __ZNK7WebCore10ScrollView18visibleContentRectENS_14ScrollableArea36VisibleContentRectIncludesScrollbarsE(i4, i1 | 0, 1);
 HEAP32[i3 >> 2] = HEAP32[i4 + 8 >> 2];
 i6 = __ZNK7WebCore9FrameView23mapFromLayoutToCSSUnitsENS_10LayoutUnitE(i1, i3) | 0;
 STACKTOP = i2;
 return i6 | 0;
}
function __ZNK7WebCore9DOMWindow4findERKN3WTF6StringEbbbbbb(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 var i9 = 0;
 i8 = HEAP32[i1 + 52 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i9 = 0;
  return i9 | 0;
 }
 if ((HEAP32[(HEAP32[i8 + 456 >> 2] | 0) + 336 >> 2] | 0) != (i1 | 0)) {
  i9 = 0;
  return i9 | 0;
 }
 i9 = __ZN7WebCore6Editor10findStringERKN3WTF6StringEj(HEAP32[i8 + 464 >> 2] | 0, i2, ((i4 ? 8 : 0) | i3 & 1 | (i5 ? 16 : 0)) ^ 1) | 0;
 return i9 | 0;
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
function __ZN7WebCore9DOMWindow16registerPropertyEPNS_17DOMWindowPropertyE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i2;
 __ZN3WTF9HashTableIPN7WebCore17DOMWindowPropertyES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i3 + 8 | 0, i1 + 80 | 0, i4, i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore16PostMessageTimer5firedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = HEAP32[i1 + 44 >> 2] | 0;
 i5 = i3 | 0;
 HEAP32[i5 >> 2] = i1;
 __ZN7WebCore9DOMWindow21postMessageTimerFiredEN3WTF10PassOwnPtrINS_16PostMessageTimerEEE(i4, i3);
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 63](i3);
 STACKTOP = i2;
 return;
}
function __ZNK7WebCore9DOMWindow11outerHeightEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = HEAP32[i1 + 52 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = 0;
  STACKTOP = i2;
  return i5 | 0;
 }
 i1 = HEAP32[i4 + 32 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i5 = 0;
  STACKTOP = i2;
  return i5 | 0;
 }
 __ZNK7WebCore6Chrome10windowRectEv(i3, HEAP32[i1 + 20 >> 2] | 0);
 i5 = ~~+HEAPF32[i3 + 12 >> 2];
 STACKTOP = i2;
 return i5 | 0;
}
function __ZNK7WebCore9DOMWindow10outerWidthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = HEAP32[i1 + 52 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = 0;
  STACKTOP = i2;
  return i5 | 0;
 }
 i1 = HEAP32[i4 + 32 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i5 = 0;
  STACKTOP = i2;
  return i5 | 0;
 }
 __ZNK7WebCore6Chrome10windowRectEv(i3, HEAP32[i1 + 20 >> 2] | 0);
 i5 = ~~+HEAPF32[i3 + 8 >> 2];
 STACKTOP = i2;
 return i5 | 0;
}
function __ZNK7WebCore9DOMWindow7screenYEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = HEAP32[i1 + 52 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = 0;
  STACKTOP = i2;
  return i5 | 0;
 }
 i1 = HEAP32[i4 + 32 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i5 = 0;
  STACKTOP = i2;
  return i5 | 0;
 }
 __ZNK7WebCore6Chrome10windowRectEv(i3, HEAP32[i1 + 20 >> 2] | 0);
 i5 = ~~+HEAPF32[i3 + 4 >> 2];
 STACKTOP = i2;
 return i5 | 0;
}
function __ZNK7WebCore9DOMWindow7screenXEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = HEAP32[i1 + 52 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = 0;
  STACKTOP = i2;
  return i5 | 0;
 }
 i1 = HEAP32[i4 + 32 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i5 = 0;
  STACKTOP = i2;
  return i5 | 0;
 }
 __ZNK7WebCore6Chrome10windowRectEv(i3, HEAP32[i1 + 20 >> 2] | 0);
 i5 = ~~+HEAPF32[i3 >> 2];
 STACKTOP = i2;
 return i5 | 0;
}
function __ZThn48_N7WebCore9DOMWindow14willDetachPageEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 - 176 + 128 | 0;
 i1 = HEAP32[i2 + 52 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i3 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(HEAP32[i1 + 32 >> 2] | 0) | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 __ZN7WebCore24InspectorInstrumentation24frameWindowDiscardedImplEPNS_19InstrumentingAgentsEPNS_9DOMWindowE(i3, i2);
 return;
}
function __ZNK7WebCore9DOMWindow6parentEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 + 52 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = __ZNK7WebCore9FrameTree6parentEv(i1 + 40 | 0) | 0;
 if ((i4 | 0) == 0) {
  i3 = HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 456 >> 2] | 0) + 336 >> 2] | 0;
  return i3 | 0;
 } else {
  i3 = HEAP32[(HEAP32[i4 + 456 >> 2] | 0) + 336 >> 2] | 0;
  return i3 | 0;
 }
 return 0;
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
function __ZN7WebCore9DOMWindow14willDetachPageEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 52 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i3 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(HEAP32[i2 + 32 >> 2] | 0) | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 __ZN7WebCore24InspectorInstrumentation24frameWindowDiscardedImplEPNS_19InstrumentingAgentsEPNS_9DOMWindowE(i3, i1);
 return;
}
function __ZNK7WebCore9DOMWindow29allowedToChangeWindowGeometryEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 52 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP32[i2 + 32 >> 2] | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP32[i2 + 28 >> 2] | 0) != (i2 | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (HEAP8[(HEAP32[i2 + 472 >> 2] | 0) + 4 | 0] & 1) == 0;
 return i3 | 0;
}
function __ZN7WebCore9DOMWindow4blurEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 52 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i2 + 32 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 if ((HEAP8[(HEAP32[i2 + 36 >> 2] | 0) + 193 | 0] & 64) != 0) {
  return;
 }
 if ((HEAP32[i2 + 28 >> 2] | 0) != (i2 | 0)) {
  return;
 }
 __ZNK7WebCore6Chrome7unfocusEv(HEAP32[i1 + 20 >> 2] | 0);
 return;
}
function __ZNK7WebCore9DOMWindow11pageConsoleEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 52 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP32[(HEAP32[i2 + 456 >> 2] | 0) + 336 >> 2] | 0) != (i1 | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = HEAP32[i2 + 32 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = HEAP32[i1 + 1148 >> 2] | 0;
 return i3 | 0;
}
function __ZN7WebCore9DOMWindow10matchMediaERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = HEAP32[i2 + 44 >> 2] | 0;
 i2 = i4 - 156 + 68 | 0;
 if ((i4 | 0) == 0 | (i2 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  return;
 } else {
  __ZN7WebCore17MediaQueryMatcher10matchMediaERKN3WTF6StringE(i1, __ZN7WebCore8Document17mediaQueryMatcherEv(i2) | 0, i3);
  return;
 }
}
function __ZN7WebCore9DOMWindow12getSelectionEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 52 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = HEAP32[i2 + 456 >> 2] | 0;
 if ((HEAP32[i4 + 336 >> 2] | 0) != (i1 | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = __ZNK7WebCore9TreeScope12getSelectionEv(i4 + 44 | 0) | 0;
 return i3 | 0;
}
function __ZN7WebCore9DOMWindow18unregisterPropertyEPNS_17DOMWindowPropertyE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i2;
 __ZN3WTF7HashSetIPN7WebCore17DOMWindowPropertyENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1 + 80 | 0, i4) | 0;
 STACKTOP = i3;
 return;
}
function iiiii___ZN7WebCore11EventTarget16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZN7WebCore11EventTarget16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}
function __ZN7WebCore9DOMWindow16derefEventTargetEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
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
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 44 >> 2] & 63](i3);
 return;
}
function __ZNK7WebCore9DOMWindow6lengthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 52 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP32[(HEAP32[i2 + 456 >> 2] | 0) + 336 >> 2] | 0) != (i1 | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = __ZNK7WebCore9FrameTree16scopedChildCountEv(i2 + 40 | 0) | 0;
 return i3 | 0;
}
function __ZNK7WebCore9DOMWindow4nameEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i2 + 52 >> 2] | 0;
 i2 = i1 | 0;
 if ((i3 | 0) == 0) {
  HEAP32[i2 >> 2] = 0;
  return;
 }
 i1 = HEAP32[i3 + 48 >> 2] | 0;
 HEAP32[i2 >> 2] = i1;
 if ((i1 | 0) == 0) {
  return;
 }
 i2 = i1 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 return;
}
function __ZNK7WebCore9DOMWindow3topEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 52 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP32[i2 + 32 >> 2] | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = HEAP32[(HEAP32[(__ZNK7WebCore9FrameTree3topEv(i2 + 40 | 0) | 0) + 456 >> 2] | 0) + 336 >> 2] | 0;
 return i3 | 0;
}
function __ZNK7WebCore9DOMWindow6openerEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 52 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = __ZN7WebCore11FrameLoader6openerEv(i2 + 80 | 0) | 0;
 if ((i1 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = HEAP32[(HEAP32[i1 + 456 >> 2] | 0) + 336 >> 2] | 0;
 return i3 | 0;
}
function __ZN7WebCore9DOMWindow10allowPopUpEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 52 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if (__ZN7WebCore16ScriptController21processingUserGestureEv() | 0) {
  i3 = 1;
  return i3 | 0;
 }
 i3 = (HEAP8[(HEAP32[i2 + 36 >> 2] | 0) + 186 | 0] & 1) != 0;
 return i3 | 0;
}
function __ZN7WebCore9DOMWindow21canShowModalDialogNowEPKNS_5FrameE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 if ((i1 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = HEAP32[i1 + 32 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = __ZNK7WebCore6Chrome14canRunModalNowEv(HEAP32[i3 + 20 >> 2] | 0) | 0;
 return i2 | 0;
}
function __ZN7WebCore9DOMWindow18canShowModalDialogEPKNS_5FrameE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 if ((i1 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = HEAP32[i1 + 32 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = __ZNK7WebCore6Chrome11canRunModalEv(HEAP32[i3 + 20 >> 2] | 0) | 0;
 return i2 | 0;
}
function iiiii___ZN7WebCore11EventTarget19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZN7WebCore11EventTarget19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}
function __ZThn48_N7WebCore9DOMWindow14frameDestroyedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 176 + 128 | 0;
 i1 = i2;
 __ZN7WebCore9DOMWindow26willDestroyDocumentInFrameEv(i1);
 __ZN7WebCore24FrameDestructionObserver14frameDestroyedEv(i2 + 48 | 0);
 __ZN7WebCore9DOMWindow24resetDOMWindowPropertiesEv(i1);
 return;
}
function __ZN7WebCore9DOMWindow24disableSuddenTerminationEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 52 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i2 + 32 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 __ZN7WebCore6Chrome24disableSuddenTerminationEv(HEAP32[i1 + 20 >> 2] | 0);
 return;
}
function __ZN7WebCore9DOMWindow23enableSuddenTerminationEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 52 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i2 + 32 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 __ZN7WebCore6Chrome23enableSuddenTerminationEv(HEAP32[i1 + 20 >> 2] | 0);
 return;
}
function __ZNK7WebCore9DOMWindow16devicePixelRatioEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, d3 = +0;
 i2 = HEAP32[i1 + 52 >> 2] | 0;
 if ((i2 | 0) == 0) {
  d3 = +0;
  return +d3;
 }
 i1 = HEAP32[i2 + 32 >> 2] | 0;
 if ((i1 | 0) == 0) {
  d3 = +0;
  return +d3;
 }
 d3 = +HEAPF32[i1 + 116 >> 2];
 return +d3;
}
function __ZN7WebCore9DOMWindow20cancelAnimationFrameEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i1 + 44 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = i3 - 156 + 68 | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 __ZN7WebCore8Document20cancelAnimationFrameEi(i1, i2);
 return;
}
function __ZNK7WebCore9DOMWindow27isCurrentlyDisplayedInFrameEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 52 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (HEAP32[(HEAP32[i2 + 456 >> 2] | 0) + 336 >> 2] | 0) == (i1 | 0);
 return i3 | 0;
}
function __ZN7WebCore9DOMWindow14frameDestroyedEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9DOMWindow26willDestroyDocumentInFrameEv(i1);
 __ZN7WebCore24FrameDestructionObserver14frameDestroyedEv(i1 + 48 | 0);
 __ZN7WebCore9DOMWindow24resetDOMWindowPropertiesEv(i1);
 return;
}
function __ZN7WebCore9DOMWindow10allowPopUpEPNS_5FrameE(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if (__ZN7WebCore16ScriptController21processingUserGestureEv() | 0) {
  i2 = 1;
  return i2 | 0;
 }
 i2 = (HEAP8[(HEAP32[i1 + 36 >> 2] | 0) + 186 | 0] & 1) != 0;
 return i2 | 0;
}
function __ZN7WebCore9DOMWindow32resetUnlessSuspendedForPageCacheEv(i1) {
 i1 = i1 | 0;
 if ((HEAP8[i1 + 77 | 0] & 1) != 0) {
  return;
 }
 __ZN7WebCore9DOMWindow26willDestroyDocumentInFrameEv(i1);
 __ZN7WebCore9DOMWindow24resetDOMWindowPropertiesEv(i1);
 return;
}
function __ZN7WebCore9DOMWindow21didSecureTransitionToEPNS_8DocumentE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore26ContextDestructionObserver14observeContextEPNS_22ScriptExecutionContextE(i1 + 40 | 0, (i2 | 0) == 0 ? 0 : i2 + 88 | 0);
 return;
}
function __ZN7WebCore9DOMWindow13clearIntervalEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i1 + 44 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 __ZN7WebCore8DOMTimer10removeByIdEPNS_22ScriptExecutionContextEi(i3, i2);
 return;
}
function __ZN7WebCore9DOMWindow12clearTimeoutEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i1 + 44 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 __ZN7WebCore8DOMTimer10removeByIdEPNS_22ScriptExecutionContextEi(i3, i2);
 return;
}
function __ZNK7WebCore9DOMWindow4selfEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 52 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = HEAP32[(HEAP32[i2 + 456 >> 2] | 0) + 336 >> 2] | 0;
 return i3 | 0;
}
function iii___ZN7WebCore11EventTarget13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore11EventTarget13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE(i1 | 0, i2 | 0) | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZNK7WebCore9DOMWindow12frameElementEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 52 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = HEAP32[i2 + 448 >> 2] | 0;
 return i3 | 0;
}
function __ZN7WebCore25EventTargetWithInlineDataD0Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = H_BASE + 1824;
 __ZN7WebCore15EventTargetDataD1Ev(i1 + 4 | 0);
 __ZN7WebCore11EventTargetD2Ev(i1 | 0);
 __ZdlPv(i1);
 return;
}
function __ZN7WebCore9DOMWindow4stopEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 52 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN7WebCore11FrameLoader17stopForUserCancelEb(i2 + 80 | 0, 1);
 return;
}
function __ZN7WebCore9DOMWindow4pageEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 52 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = HEAP32[i2 + 32 >> 2] | 0;
 return i3 | 0;
}
function __ZNK7WebCore9DOMWindow8documentEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 44 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = i2 - 156 + 68 | 0;
 return i3 | 0;
}
function __ZN7WebCore9DOMWindow15finishedLoadingEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 76 | 0;
 if ((HEAP8[i2] & 1) == 0) {
  return;
 }
 HEAP8[i2] = 0;
 __ZN7WebCore9DOMWindow5printEv(i1);
 return;
}
function __ZN7WebCore25EventTargetWithInlineDataD1Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = H_BASE + 1824;
 __ZN7WebCore15EventTargetDataD1Ev(i1 + 4 | 0);
 __ZN7WebCore11EventTargetD2Ev(i1 | 0);
 return;
}
function dynCall_iiiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return FUNCTION_TABLE_iiiii[i1 & 15](i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
}
function vi___ZN7WebCore26ContextDestructionObserver16contextDestroyedEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore26ContextDestructionObserver16contextDestroyedEv(i1 | 0);
}
function vi___ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv(i1 | 0);
}
function __ZN7WebCore9DOMWindow19suspendForPageCacheEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9DOMWindow29disconnectDOMWindowPropertiesEv(i1);
 HEAP8[i1 + 77 | 0] = 1;
 return;
}
function __ZThn48_N7WebCore9DOMWindowD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 176 + 128 | 0;
 __ZN7WebCore9DOMWindowD2Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZThn40_N7WebCore9DOMWindowD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 176 + 136 | 0;
 __ZN7WebCore9DOMWindowD2Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore9DOMWindow19resumeFromPageCacheEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9DOMWindow28reconnectDOMWindowPropertiesEv(i1);
 HEAP8[i1 + 77 | 0] = 0;
 return;
}
function vi___ZN7WebCore11EventTarget23removeAllEventListenersEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11EventTarget23removeAllEventListenersEv(i1 | 0);
}
function __ZN7WebCore9DOMWindow14refEventTargetEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 36 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 return;
}
function ii___ZNK7WebCore11EventTarget13isMessagePortEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore11EventTarget13isMessagePortEv(i1 | 0) | 0;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 1](i2 | 0, i3 | 0, i4 | 0);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function __ZN7WebCore16PostMessageTimerD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore16PostMessageTimerD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1 | 0);
 return;
}
function ii___ZN7WebCore11EventTarget11toDOMWindowEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore11EventTarget11toDOMWindowEv(i1 | 0) | 0;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 3](i2 | 0, i3 | 0) | 0;
}
function ii___ZN7WebCore11EventTarget6toNodeEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore11EventTarget6toNodeEv(i1 | 0) | 0;
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
function __ZN7WebCore9DOMWindowD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9DOMWindowD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
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
 FUNCTION_TABLE_vii[i1 & 3](i2 | 0, i3 | 0);
}
function __ZThn48_N7WebCore9DOMWindowD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9DOMWindowD2Ev(i1 - 176 + 128 | 0);
 return;
}
function __ZThn40_N7WebCore9DOMWindowD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9DOMWindowD2Ev(i1 - 176 + 136 | 0);
 return;
}
function __ZN7WebCore25EventTargetWithInlineData21ensureEventTargetDataEv(i1) {
 i1 = i1 | 0;
 return i1 + 4 | 0;
}
function __ZN7WebCore16PostMessageTimerD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore16PostMessageTimerD2Ev(i1);
 return;
}
function __ZNK7WebCore9DOMWindow22scriptExecutionContextEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 44 >> 2] | 0;
}
function b0(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(0);
 return 0;
}
function __ZN7WebCore25EventTargetWithInlineData15eventTargetDataEv(i1) {
 i1 = i1 | 0;
 return i1 + 4 | 0;
}
function __ZNK7WebCore9DOMWindow6closedEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 52 >> 2] | 0) == 0 | 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 31](i2 | 0) | 0;
}
function __ZNK7WebCore9TimerBase15alignedFireTimeEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 return +d2;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 63](i2 | 0);
}
function __ZN7WebCore9DOMWindow29resetAllGeolocationPermissionEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore9DOMWindow20eventTargetInterfaceEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore9DOMWindow18offscreenBufferingEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZN7WebCore9DOMWindow11toDOMWindowEv(i1) {
 i1 = i1 | 0;
 return i1 | 0;
}
function b5(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(5);
}
function __ZN7WebCore9DOMWindow13releaseEventsEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore9DOMWindow13captureEventsEv(i1) {
 i1 = i1 | 0;
 return;
}
function b7(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(7);
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
  var FUNCTION_TABLE_iiiii = [b0,b0,__ZN7WebCore9DOMWindow19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb,b0,iiiii___ZN7WebCore11EventTarget19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb__wrapper,b0,iiiii___ZN7WebCore11EventTarget16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb__wrapper,b0,__ZN7WebCore9DOMWindow16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb,b0,b0,b0,b0,b0,b0,b0];
  var FUNCTION_TABLE_did = [b1,b1,__ZNK7WebCore9TimerBase15alignedFireTimeEd,b1];
  var FUNCTION_TABLE_vi = [b2,b2,__ZN7WebCore9DOMWindow14frameDestroyedEv,b2,__ZN7WebCore16PostMessageTimerD1Ev,b2,__ZN7WebCore9DOMWindow16derefEventTargetEv,b2,__ZN7WebCore9DOMWindow14willDetachPageEv,b2,__ZThn48_N7WebCore9DOMWindowD1Ev,b2,__ZThn48_N7WebCore9DOMWindowD0Ev,b2,__ZN7WebCore16PostMessageTimerD0Ev,b2,__ZN7WebCore25EventTargetWithInlineDataD0Ev,b2,__ZN7WebCore9DOMWindowD2Ev,b2,vi___ZN7WebCore11EventTarget23removeAllEventListenersEv__wrapper,b2,vi___ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv__wrapper,b2,__ZThn48_N7WebCore9DOMWindow14willDetachPageEv,b2,__ZN7WebCore9DOMWindow14refEventTargetEv,b2,__ZN7WebCore9DOMWindow23removeAllEventListenersEv
  ,b2,__ZN7WebCore16PostMessageTimer5firedEv,b2,__ZThn48_N7WebCore9DOMWindow14frameDestroyedEv,b2,__ZN7WebCore25EventTargetWithInlineDataD1Ev,b2,vi___ZN7WebCore26ContextDestructionObserver16contextDestroyedEv__wrapper,b2,__ZThn40_N7WebCore9DOMWindowD0Ev,b2,__ZThn40_N7WebCore9DOMWindowD1Ev,b2,__ZN7WebCore9DOMWindowD0Ev,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2
  ,b2,b2,b2,b2,b2];
  var FUNCTION_TABLE_vii = [b3,b3,__ZN7WebCore9DOMWindowC2EPNS_8DocumentE,b3];
  var FUNCTION_TABLE_ii = [b4,b4,__ZNK7WebCore9DOMWindow22scriptExecutionContextEv,b4,__ZN7WebCore25EventTargetWithInlineData21ensureEventTargetDataEv,b4,ii___ZN7WebCore11EventTarget6toNodeEv__wrapper,b4,ii___ZNK7WebCore11EventTarget13isMessagePortEv__wrapper,b4,__ZN7WebCore25EventTargetWithInlineData15eventTargetDataEv,b4,__ZNK7WebCore9DOMWindow20eventTargetInterfaceEv,b4,ii___ZN7WebCore11EventTarget11toDOMWindowEv__wrapper,b4,__ZN7WebCore9DOMWindow11toDOMWindowEv,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4
  ,b4,b4,b4];
  var FUNCTION_TABLE_viii = [b5,b5];
  var FUNCTION_TABLE_v = [b6,b6,v____cxa_pure_virtual__wrapper,b6];
  var FUNCTION_TABLE_iii = [b7,b7,iii___ZN7WebCore11EventTarget13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE__wrapper,b7];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_iiiii: dynCall_iiiii, dynCall_did: dynCall_did, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_iiiii": invoke_iiiii, "invoke_did": invoke_did, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___cxa_pure_virtual": ___cxa_pure_virtual, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE": __ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE, "__ZN3WTF10StringImpl19latin1CaseFoldTableE": __ZN3WTF10StringImpl19latin1CaseFoldTableE, "__ZN3WTF9emptyAtomE": __ZN3WTF9emptyAtomE, "__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE": __ZN7WebCore24InspectorInstrumentation17s_frontendCounterE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_iiiii = Module["dynCall_iiiii"] = asm["dynCall_iiiii"];
var dynCall_did = Module["dynCall_did"] = asm["dynCall_did"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZNK7WebCore9DOMWindow11innerHeightEv","_strlen","__ZN7WebCore9DOMWindow4atobERKN3WTF6StringERi","__ZN7WebCore9DOMWindow16adjustWindowRectEPNS_4PageERKNS_9FloatRectE","__ZNK7WebCore9DOMWindow4findERKN3WTF6StringEbbbbbb","__ZN7WebCore16PostMessageTimerD1Ev","__ZN7WebCore9DOMWindow14refEventTargetEv","__ZN7WebCore9DOMWindow17dispatchLoadEventEv","__ZN7WebCore9DOMWindow19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb","__ZNK7WebCore9DOMWindow16applicationCacheEv","__ZN7WebCore9DOMWindow18canShowModalDialogEPKNS_5FrameE","__ZNK7WebCore9DOMWindow27isCurrentlyDisplayedInFrameEv","__ZN7WebCore9DOMWindow24resetDOMWindowPropertiesEv","__ZN7WebCore9DOMWindow27webkitRequestAnimationFrameEN3WTF10PassRefPtrINS_29RequestAnimationFrameCallbackEEE","__ZN7WebCore9DOMWindowD0Ev","__ZN3WTF13tryMakeStringINS_12StringAppendIPKcNS_6StringEEES3_EENS_10PassRefPtrINS_10StringImplEEET_T0_","__ZN7WebCore9DOMWindow10allowPopUpEv","__ZN3WTF13tryMakeStringINS_12StringAppendINS1_INS1_IPKcNS_6StringEEES3_EES4_EES3_EENS_10PassRefPtrINS_10StringImplEEET_T0_","__ZN7WebCore12MessageEvent6createEN3WTF10PassOwnPtrINS1_6VectorINS1_6RefPtrINS_11MessagePortEEELj1ENS1_15CrashOnOverflowEEEEENS1_10PassRefPtrINS_21SerializedScriptValueEEERKNS1_6StringESF_NSA_INS_11EventTargetEEE","__ZN7WebCore9DOMWindow9setStatusERKN3WTF6StringE","__ZN3WTF12StringAppendINS0_IPKcNS_6StringEEES2_E7writeToEPt","__ZN3WTF15CaseFoldingHash4hashERNS_10StringImplE","__ZNK7WebCore9DOMWindow10outerWidthEv","__ZN7WebCore9DOMWindow18unregisterPropertyEPNS_17DOMWindowPropertyE","__ZNK7WebCore9DOMWindow18getMatchedCSSRulesEPNS_7ElementERKN3WTF6StringEb","__ZN3WTF13tryMakeStringINS_6StringEPKcEENS_10PassRefPtrINS_10StringImplEEET_T0_","__ZN3WTF12StringAppendINS0_IPKcNS_6StringEEES2_E7writeToEPh","__ZNK7WebCore9DOMWindow7menubarEv","__ZNK7WebCore9DOMWindow7toolbarEv","__ZNK7WebCore9DOMWindow6moveByEff","__ZNK7WebCore9DOMWindow7historyEv","__ZN7WebCore9DOMWindow24disableSuddenTerminationEv","__ZN7WebCore9DOMWindow20cancelAnimationFrameEi","__ZN7WebCore9DOMWindow17printErrorMessageERKN3WTF6StringE","__ZNK7WebCore9DOMWindow6screenEv","__ZNK7WebCore9DOMWindow6cryptoEv","__ZN7WebCore9DOMWindow11postMessageEN3WTF10PassRefPtrINS_21SerializedScriptValueEEEPNS_11MessagePortERKNS1_6StringERS0_Ri","__ZN7WebCore15ScheduledActionD2Ev","__ZN7WebCore9DOMWindow23enableSuddenTerminationEv","__ZN7WebCore25EventTargetWithInlineDataD1Ev","__ZN3WTF13tryMakeStringINS_12StringAppendINS1_INS1_INS1_INS_6StringEPKcEES2_EES4_EES2_EES4_EENS_10PassRefPtrINS_10StringImplEEET_T0_","__ZN7WebCore9DOMWindow27willDetachDocumentFromFrameEv","__ZNK7WebCore9DOMWindow8resizeByEff","__ZN7WebCore9DOMWindow16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb","__ZNK7WebCore9DOMWindow8documentEv","__ZNK7WebCore9DOMWindow32webkitConvertPointFromPageToNodeEPNS_4NodeEPKNS_11WebKitPointE","__ZN7WebCore16PostMessageTimer5eventEPNS_22ScriptExecutionContextE","__ZNK7WebCore9DOMWindow32webkitConvertPointFromNodeToPageEPNS_4NodeEPKNS_11WebKitPointE","__ZN7WebCore9DOMWindow28reconnectDOMWindowPropertiesEv","__ZN7WebCore9DOMWindow23removeAllEventListenersEv","__ZN7WebCore19ResourceRequestBaseC2ERKS0_","__ZNK3WTF12StringAppendINS0_INS0_INS0_INS0_INS_6StringEPKcEES1_EES3_EES1_EES3_EcvS1_Ev","__ZN7WebCore9DOMWindow7setNameERKN3WTF6StringE","__ZN7WebCore9DOMWindow13clearIntervalEi","__ZN7WebCore25EventTargetWithInlineData21ensureEventTargetDataEv","__ZN7WebCore9DOMWindow22willDestroyCachedFrameEv","__ZNK7WebCore9DOMWindow7consoleEv","__ZN7WebCore9DOMWindow11setLocationERKN3WTF6StringERS0_S5_NS_18SetLocationLockingE","__ZNK7WebCore9DOMWindow7screenYEv","__ZN7WebCore9DOMWindow29crossDomainAccessErrorMessageERKS0_","__ZNK7WebCore9TimerBase15alignedFireTimeEd","__ZNK7WebCore9DOMWindow27pendingUnloadEventListenersEv","__ZNK3WTF12StringAppendINS0_INS0_INS_6StringEPKcEES1_EES3_EcvS1_Ev","__ZN7WebCore14SubstituteDataD2Ev","__ZNK7WebCore9DOMWindow8locationEv","__ZNK7WebCore9DOMWindow12localStorageERi","__ZN7WebCore9DOMWindow10matchMediaERKN3WTF6StringE","__ZN7WebCore9DOMWindow30dispatchAllPendingUnloadEventsEv","__ZN3WTF9HashTableIPN7WebCore9DOMWindowENS_12KeyValuePairIS3_jEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_jS9_NS_10HashTraitsIS3_EENSB_IjEEE18KeyValuePairTraitsESC_E6rehashEiPS5_","__ZN7WebCore9DOMWindow16registerPropertyEPNS_17DOMWindowPropertyE","__ZNK7WebCore9DOMWindow6parentEv","__ZN7WebCore9DOMWindow5focusEPNS_22ScriptExecutionContextE","__ZThn48_N7WebCore9DOMWindow14frameDestroyedEv","__ZNK7WebCore9DOMWindow6closedEv","__ZNK7WebCore9DOMWindow7scrollYEv","__ZN7WebCore16PostMessageTimerD2Ev","__ZN3WTF12StringAppendINS0_INS0_IPKcNS_6StringEEES2_EES3_E7writeToEPt","__ZN7WebCore9DOMWindow12getSelectionEv","__ZNK7WebCore9DOMWindow16getComputedStyleEPNS_7ElementERKN3WTF6StringE","__ZNK7WebCore9DOMWindow10innerWidthEv","__ZN7WebCore9DOMWindow14frameDestroyedEv","__ZNK7WebCore9DOMWindow12frameElementEv","__ZNK7WebCore9DOMWindow10scrollbarsEv","__ZN7WebCore9DOMWindow14willDetachPageEv","__ZN3WTF7HashSetIPN7WebCore17DOMWindowPropertyENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_","_memset","__ZNK3WTF12StringAppendINS0_INS0_INS0_IPKcNS_6StringEEES2_EES3_EES2_EcvS3_Ev","__ZThn48_N7WebCore9DOMWindowD0Ev","__ZNK7WebCore9DOMWindow9statusbarEv","__ZN3WTF6VectorINS_6RefPtrIN7WebCore7CSSRuleEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZNK7WebCore9DOMWindow4selfEv","__ZNK7WebCore9DOMWindow3topEv","__ZNK7WebCore9DOMWindow4nameEv","__ZN3WTFplINS_12StringAppendINS1_INS_6StringEPKcEES2_EES4_S2_EENS1_INS1_IT_T0_EET1_EERKS9_SA_","__ZN7WebCore9DOMWindow13dispatchEventEN3WTF10PassRefPtrINS_5EventEEENS2_INS_11EventTargetEEE","__ZN3WTF12StringHasher28addCharactersAssumingAlignedItXadL_ZNS_15CaseFoldingHash8foldCaseItEEtT_EEEEvPKS4_j","__ZNK7WebCore9DOMWindow9navigatorEv","__ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E3addINS_22IdentityHashTranslatorIS7_EERKS1_RKS4_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S4_S6_S7_SD_SA_EEEEOT0_OT1_","__ZN7WebCore9DOMWindowD2Ev","__ZN3WTF9HashTableIPN7WebCore17DOMWindowPropertyES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_","__ZN7WebCore9DOMWindow26willDestroyDocumentInFrameEv","__ZN7WebCore9DOMWindow10setTimeoutEN3WTF10PassOwnPtrINS_15ScheduledActionEEEiRi","__ZN7WebCore14SecurityOriginD2Ev","__ZN7WebCore9DOMWindow4openERKN3WTF6StringERKNS1_12AtomicStringES4_RS0_S8_","__ZNK7WebCore9DOMWindow16devicePixelRatioEv","__ZN3WTF9HashTableIPN7WebCore17DOMWindowPropertyES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_","__ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E6expandEPS4_","__ZN7WebCore9DOMWindow15finishedLoadingEv","__ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E8reinsertEOS4_","__ZN7WebCore9DOMWindow4btoaERKN3WTF6StringERi","__ZN3WTF14HashCountedSetIPN7WebCore9DOMWindowENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE4findERKS3_","__ZThn48_N7WebCore9DOMWindow14willDetachPageEv","__ZN7WebCore9DOMWindow10allowPopUpEPNS_5FrameE","__ZN7WebCore9DOMWindow7confirmERKN3WTF6StringE","__ZN7WebCore9DOMWindow5closeEPNS_22ScriptExecutionContextE","__ZNK7WebCore9DOMWindow11locationbarEv","__ZNK7WebCore9DOMWindow20eventTargetInterfaceEv","__ZNK7WebCore9DOMWindow7scrollXEv","__ZN7WebCore15ResourceRequestD2Ev","__ZN7WebCore9DOMWindow11setIntervalEN3WTF10PassOwnPtrINS_15ScheduledActionEEEiRi","__ZN7WebCore9DOMWindow21postMessageTimerFiredEN3WTF10PassOwnPtrINS_16PostMessageTimerEEE","__ZN7WebCore9DOMWindow22isInsecureScriptAccessERS0_RKN3WTF6StringE","__ZNK7WebCore9DOMWindow8resizeToEff","__ZN7WebCore9DOMWindow11toDOMWindowEv","__ZNK7WebCore9DOMWindow6lengthEv","__ZThn40_N7WebCore9DOMWindowD1Ev","__ZN7WebCore9DOMWindow13captureEventsEv","__ZNK7WebCore9DOMWindow11pageConsoleEv","__ZN7WebCore9DOMWindow29disconnectDOMWindowPropertiesEv","__ZN7WebCore9DOMWindow21didSecureTransitionToEPNS_8DocumentE","__ZN7WebCore9DOMWindow12createWindowERKN3WTF6StringERKNS1_12AtomicStringERKNS_14WindowFeaturesERS0_PNS_5FrameESD_PFvPS0_PvESF_","__ZN7WebCore9DOMWindow4stopEv","__ZNK7WebCore9DOMWindow10styleMediaEv","__ZN7WebCore9DOMWindow13releaseEventsEv","__ZN3WTF9HashTableIPN7WebCore9DOMWindowENS_12KeyValuePairIS3_jEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_jS9_NS_10HashTraitsIS3_EENSB_IjEEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKS3_iEENS_18HashTableAddResultINS_17HashTableIteratorIS3_S5_S7_S9_SF_SC_EEEEOT0_OT1_","__ZN7WebCore9DOMWindow16derefEventTargetEv","__ZN7WebCore9DOMWindow32resetUnlessSuspendedForPageCacheEv","__ZN7WebCore9DOMWindow29resetAllGeolocationPermissionEv","__ZN7WebCore9DOMWindow4blurEv","__ZN3WTFplINS_12StringAppendINS1_INS1_INS_6StringEPKcEES2_EES4_EES2_S4_EENS1_INS1_IT_T0_EET1_EERKSA_SB_","__ZThn48_N7WebCore9DOMWindowD1Ev","__ZN7WebCore9DOMWindow35dispatchMessageEventWithOriginCheckEPNS_14SecurityOriginEN3WTF10PassRefPtrINS_5EventEEENS4_INS_15ScriptCallStackEEE","__ZNK7WebCore9DOMWindow22scriptExecutionContextEv","__ZN7WebCore9DOMWindow36dispatchAllPendingBeforeUnloadEventsEv","__ZNK7WebCore9DOMWindow6moveToEff","__ZN7WebCore25EventTargetWithInlineDataD0Ev","__ZNK7WebCore9DOMWindow29allowedToChangeWindowGeometryEv","__ZN7WebCore9DOMWindow15showModalDialogERKN3WTF6StringES4_RS0_S5_PFvPS0_PvES7_","__ZN7WebCore16PostMessageTimerD0Ev","__ZN7WebCore9DOMWindow6promptERKN3WTF6StringES4_","__ZN3WTF12StringAppendINS0_INS0_INS0_INS_6StringEPKcEES1_EES3_EES1_E7writeToEPh","__ZNK7WebCore9DOMWindow14sessionStorageERi","__ZN3WTF12StringAppendINS0_INS0_INS0_INS_6StringEPKcEES1_EES3_EES1_E7writeToEPt","__ZNK7WebCore9DOMWindow6openerEv","__ZN7WebCore9DOMWindow19suspendForPageCacheEv","__ZN7WebCore9DOMWindow5printEv","__ZN7WebCore9DOMWindow19resumeFromPageCacheEv","__ZN7WebCore25EventTargetWithInlineData15eventTargetDataEv","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZNK7WebCore9DOMWindow11outerHeightEv","__ZN3WTF13tryMakeStringINS_12StringAppendINS1_INS_6StringEPKcEES2_EES4_EENS_10PassRefPtrINS_10StringImplEEET_T0_","__ZN7WebCore9DOMWindow12clearTimeoutEi","__ZNK7WebCore9DOMWindow18offscreenBufferingEv","__ZNK7WebCore9DOMWindow8scrollToEii","__ZNK7WebCore9DOMWindow7screenXEv","__ZNK7WebCore9DOMWindow8scrollByEii","__ZN7WebCore16PostMessageTimer5firedEv","__ZN7WebCore9DOMWindow21requestAnimationFrameEN3WTF10PassRefPtrINS_29RequestAnimationFrameCallbackEEE","__ZN7WebCore19ResourceRequestBaseD2Ev","__ZN3WTF12StringAppendINS0_INS_6StringEPKcEES1_E7writeToEPt","__ZN7WebCore9DOMWindow5alertERKN3WTF6StringE","__ZN7WebCore9DOMWindowC2EPNS_8DocumentE","__ZN7WebCore9DOMWindow4pageEv","_memcpy","__ZN7WebCore9DOMWindow21canShowModalDialogNowEPKNS_5FrameE","__ZN3WTF12StringAppendINS0_INS_6StringEPKcEES1_E7writeToEPh","__ZNK7WebCore9DOMWindow11personalbarEv","__ZN7WebCore9DOMWindow11postMessageEN3WTF10PassRefPtrINS_21SerializedScriptValueEEEPKNS1_6VectorINS1_6RefPtrINS_11MessagePortEEELj1ENS1_15CrashOnOverflowEEERKNS1_6StringERS0_Ri","__ZThn40_N7WebCore9DOMWindowD0Ev","__ZN7WebCore9DOMWindow16setDefaultStatusERKN3WTF6StringE"]

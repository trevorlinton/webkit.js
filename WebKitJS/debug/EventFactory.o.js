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
H_BASE = parentModule["_malloc"](984 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 984;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
/* memory initializer */ allocate([72,84,77,76,69,118,101,110,116,115,0,0,0,0,0,0,70,111,99,117,115,69,118,101,110,116,0,0,0,0,0,0,69,118,101,110,116,115,0,0,69,118,101,110,116,0,0,0,69,114,114,111,114,69,118,101,110,116,0,0,0,0,0,0,67,117,115,116,111,109,69,118,101,110,116,0,0,0,0,0,88,77,76,72,116,116,112,82,101,113,117,101,115,116,80,114,111,103,114,101,115,115,69,118,101,110,116,0,0,0,0,0,87,104,101,101,108,69,118,101,110,116,0,0,0,0,0,0,87,101,98,75,105,116,84,114,97,110,115,105,116,105,111,110,69,118,101,110,116,0,0,0,87,101,98,75,105,116,65,110,105,109,97,116,105,111,110,69,118,101,110,116,0,0,0,0,87,101,98,71,76,67,111,110,116,101,120,116,69,118,101,110,116,0,0,0,0,0,0,0,85,73,82,101,113,117,101,115,116,69,118,101,110,116,0,0,85,73,69,118,101,110,116,115,0,0,0,0,0,0,0,0,85,73,69,118,101,110,116,0,67,111,109,112,111,115,105,116,105,111,110,69,118,101,110,116,0,0,0,0,0,0,0,0,84,114,97,110,115,105,116,105,111,110,69,118,101,110,116,0,84,101,120,116,69,118,101,110,116,0,0,0,0,0,0,0,83,116,111,114,97,103,101,69,118,101,110,116,0,0,0,0,83,112,101,101,99,104,83,121,110,116,104,101,115,105,115,69,118,101,110,116,0,0,0,0,83,86,71,90,111,111,109,69,118,101,110,116,115,0,0,0,83,86,71,90,111,111,109,69,118,101,110,116,0,0,0,0,83,86,71,69,118,101,110,116,115,0,0,0,0,0,0,0,80,114,111,103,114,101,115,115,69,118,101,110,116,0,0,0,80,111,112,83,116,97,116,101,69,118,101,110,116,0,0,0,80,97,103,101,84,114,97,110,115,105,116,105,111,110,69,118,101,110,116,0,0,0,0,0,67,108,111,115,101,69,118,101,110,116,0,0,0,0,0,0,79,118,101,114,102,108,111,119,69,118,101,110,116,0,0,0,77,117,116,97,116,105,111,110,69,118,101,110,116,115,0,0,77,117,116,97,116,105,111,110,69,118,101,110,116,0,0,0,77,111,117,115,101,69,118,101,110,116,115,0,0,0,0,0,77,111,117,115,101,69,118,101,110,116,0,0,0,0,0,0,77,101,115,115,97,103,101,69,118,101,110,116,0,0,0,0,75,101,121,98,111,97,114,100,69,118,101,110,116,115,0,0,75,101,121,98,111,97,114,100,69,118,101,110,116,0,0,0,73,68,66,86,101,114,115,105,111,110,67,104,97,110,103,101,69,118,101,110,116,0,0,0,72,97,115,104,67,104,97,110,103,101,69,118,101,110,116,0,66,101,102,111,114,101,85,110,108,111,97,100,69,118,101,110,116,0,0,0,0,0,0,0,66,101,102,111,114,101,76,111,97,100,69,118,101,110,116,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_vi(index,a1) {
  try {
    Module["dynCall_vi"](index,a1);
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
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore15BeforeLoadEventE=(H_BASE+832)|0;
  var __ZTVN7WebCore27XMLHttpRequestProgressEventE=(H_BASE+672)|0;
  var __ZTVN7WebCore15HashChangeEventE=(H_BASE+752)|0;
  var __ZTVN7WebCore10CloseEventE=(H_BASE+912)|0;
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
  var invoke_vi=env.invoke_vi;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore12EventFactory6createERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = i2 | 0;
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i10 >> 2] | 0, H_BASE + 656 | 0) | 0) {
  i2 = __ZN3WTF10fastMallocEj(56) | 0;
  i11 = i2;
  __ZN7WebCore5EventC2Ev(i11);
  HEAP32[i2 >> 2] = H_BASE + 840;
  HEAP32[i2 + 52 >> 2] = 0;
  HEAP32[i1 >> 2] = i11;
  STACKTOP = i3;
  return;
 }
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i10 >> 2] | 0, H_BASE + 632 | 0) | 0) {
  i11 = __ZN3WTF10fastMallocEj(56) | 0;
  __ZN7WebCore17BeforeUnloadEventC1Ev(i11);
  HEAP32[i1 >> 2] = i11;
  STACKTOP = i3;
  return;
 }
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i10 >> 2] | 0, H_BASE + 448 | 0) | 0) {
  i11 = __ZN3WTF10fastMallocEj(64) | 0;
  i2 = i11;
  __ZN7WebCore5EventC2ERKN3WTF12AtomicStringEbb(i2, (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 60 | 0, 0, 0);
  HEAP32[i11 >> 2] = H_BASE + 920;
  HEAP8[i11 + 52 | 0] = 0;
  HEAP16[i11 + 54 >> 1] = 0;
  HEAP32[i11 + 56 >> 2] = 0;
  HEAP32[i1 >> 2] = i2;
  STACKTOP = i3;
  return;
 }
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i10 >> 2] | 0, H_BASE + 248 | 0) | 0) {
  i2 = __ZN3WTF10fastMallocEj(64) | 0;
  __ZN7WebCore16CompositionEventC1Ev(i2);
  HEAP32[i1 >> 2] = i2;
  STACKTOP = i3;
  return;
 }
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i10 >> 2] | 0, H_BASE + 72 | 0) | 0) {
  i2 = __ZN3WTF10fastMallocEj(64) | 0;
  __ZN7WebCore11CustomEventC1Ev(i2);
  HEAP32[i1 >> 2] = i2;
  STACKTOP = i3;
  return;
 }
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i10 >> 2] | 0, H_BASE + 56 | 0) | 0) {
  i2 = __ZN3WTF10fastMallocEj(72) | 0;
  __ZN7WebCore10ErrorEventC1Ev(i2);
  HEAP32[i1 >> 2] = i2;
  STACKTOP = i3;
  return;
 }
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i10 >> 2] | 0, H_BASE + 48 | 0) | 0) {
  i2 = __ZN3WTF10fastMallocEj(56) | 0;
  __ZN7WebCore5EventC1Ev(i2);
  HEAP32[i1 >> 2] = i2;
  STACKTOP = i3;
  return;
 }
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i10 >> 2] | 0, H_BASE + 40 | 0) | 0) {
  i2 = __ZN3WTF10fastMallocEj(56) | 0;
  __ZN7WebCore5EventC1Ev(i2);
  HEAP32[i1 >> 2] = i2;
  STACKTOP = i3;
  return;
 }
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i10 >> 2] | 0, H_BASE + 24 | 0) | 0) {
  i2 = __ZN3WTF10fastMallocEj(64) | 0;
  __ZN7WebCore10FocusEventC1Ev(i2);
  HEAP32[i1 >> 2] = i2;
  STACKTOP = i3;
  return;
 }
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i10 >> 2] | 0, H_BASE + 8 | 0) | 0) {
  i2 = __ZN3WTF10fastMallocEj(56) | 0;
  __ZN7WebCore5EventC1Ev(i2);
  HEAP32[i1 >> 2] = i2;
  STACKTOP = i3;
  return;
 }
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i10 >> 2] | 0, H_BASE + 616 | 0) | 0) {
  i2 = __ZN3WTF10fastMallocEj(64) | 0;
  i11 = i2;
  __ZN7WebCore5EventC2Ev(i11);
  HEAP32[i2 >> 2] = H_BASE + 760;
  HEAP32[i2 + 52 >> 2] = 0;
  HEAP32[i2 + 56 >> 2] = 0;
  HEAP32[i1 >> 2] = i11;
  STACKTOP = i3;
  return;
 }
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i10 >> 2] | 0, H_BASE + 592 | 0) | 0) {
  i11 = i4 | 0;
  HEAP32[i11 >> 2] = 0;
  i2 = __ZN3WTF10fastMallocEj(80) | 0;
  __ZN7WebCore21IDBVersionChangeEventC1EyyNS_9IndexedDB15VersionNullnessERKN3WTF12AtomicStringE(i2, 0, 0, 0, 0, 0, i4);
  HEAP32[i1 >> 2] = i2;
  i2 = HEAP32[i11 >> 2] | 0;
  if ((i2 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i11 = i2 | 0;
  i4 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
  if ((i4 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i2);
   STACKTOP = i3;
   return;
  } else {
   HEAP32[i11 >> 2] = i4;
   STACKTOP = i3;
   return;
  }
 }
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i10 >> 2] | 0, H_BASE + 576 | 0) | 0) {
  i4 = __ZN3WTF10fastMallocEj(80) | 0;
  __ZN7WebCore13KeyboardEventC1Ev(i4);
  HEAP32[i1 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i10 >> 2] | 0, H_BASE + 560 | 0) | 0) {
  i4 = __ZN3WTF10fastMallocEj(80) | 0;
  __ZN7WebCore13KeyboardEventC1Ev(i4);
  HEAP32[i1 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i10 >> 2] | 0, H_BASE + 544 | 0) | 0) {
  i4 = __ZN3WTF10fastMallocEj(96) | 0;
  __ZN7WebCore12MessageEventC1Ev(i4);
  HEAP32[i1 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i10 >> 2] | 0, H_BASE + 528 | 0) | 0) {
  i4 = __ZN3WTF10fastMallocEj(128) | 0;
  __ZN7WebCore10MouseEventC1Ev(i4);
  HEAP32[i1 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i10 >> 2] | 0, H_BASE + 512 | 0) | 0) {
  i4 = __ZN3WTF10fastMallocEj(128) | 0;
  __ZN7WebCore10MouseEventC1Ev(i4);
  HEAP32[i1 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i10 >> 2] | 0, H_BASE + 496 | 0) | 0) {
  i4 = __ZN3WTF10fastMallocEj(72) | 0;
  __ZN7WebCore13MutationEventC1Ev(i4);
  HEAP32[i1 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i10 >> 2] | 0, H_BASE + 480 | 0) | 0) {
  i4 = __ZN3WTF10fastMallocEj(72) | 0;
  __ZN7WebCore13MutationEventC1Ev(i4);
  HEAP32[i1 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i10 >> 2] | 0, H_BASE + 464 | 0) | 0) {
  i4 = __ZN3WTF10fastMallocEj(56) | 0;
  __ZN7WebCore13OverflowEventC1Ev(i4);
  HEAP32[i1 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i10 >> 2] | 0, H_BASE + 424 | 0) | 0) {
  i4 = __ZN3WTF10fastMallocEj(56) | 0;
  __ZN7WebCore19PageTransitionEventC1Ev(i4);
  HEAP32[i1 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i10 >> 2] | 0, H_BASE + 408 | 0) | 0) {
  __ZN7WebCore13PopStateEvent6createEv(i5);
  i4 = i5 | 0;
  i5 = HEAP32[i4 >> 2] | 0;
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 >> 2] = i5;
  STACKTOP = i3;
  return;
 }
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i10 >> 2] | 0, H_BASE + 392 | 0) | 0) {
  i5 = __ZN3WTF10fastMallocEj(72) | 0;
  __ZN7WebCore13ProgressEventC1Ev(i5);
  HEAP32[i1 >> 2] = i5;
  STACKTOP = i3;
  return;
 }
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i10 >> 2] | 0, H_BASE + 376 | 0) | 0) {
  i5 = __ZN3WTF10fastMallocEj(56) | 0;
  __ZN7WebCore5EventC1Ev(i5);
  HEAP32[i1 >> 2] = i5;
  STACKTOP = i3;
  return;
 }
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i10 >> 2] | 0, H_BASE + 360 | 0) | 0) {
  i5 = __ZN3WTF10fastMallocEj(104) | 0;
  __ZN7WebCore12SVGZoomEventC1Ev(i5);
  HEAP32[i1 >> 2] = i5;
  STACKTOP = i3;
  return;
 }
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i10 >> 2] | 0, H_BASE + 344 | 0) | 0) {
  i5 = __ZN3WTF10fastMallocEj(104) | 0;
  __ZN7WebCore12SVGZoomEventC1Ev(i5);
  HEAP32[i1 >> 2] = i5;
  STACKTOP = i3;
  return;
 }
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i10 >> 2] | 0, H_BASE + 320 | 0) | 0) {
  __ZN7WebCore20SpeechSynthesisEvent6createEv(i6);
  i5 = i6 | 0;
  i6 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = 0;
  HEAP32[i1 >> 2] = i6;
  STACKTOP = i3;
  return;
 }
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i10 >> 2] | 0, H_BASE + 304 | 0) | 0) {
  __ZN7WebCore12StorageEvent6createEv(i7);
  i6 = i7 | 0;
  i7 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = 0;
  HEAP32[i1 >> 2] = i7;
  STACKTOP = i3;
  return;
 }
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i10 >> 2] | 0, H_BASE + 288 | 0) | 0) {
  __ZN7WebCore9TextEvent6createEv(i8);
  i7 = i8 | 0;
  i8 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = 0;
  HEAP32[i1 >> 2] = i8;
  STACKTOP = i3;
  return;
 }
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i10 >> 2] | 0, H_BASE + 272 | 0) | 0) {
  i8 = __ZN3WTF10fastMallocEj(72) | 0;
  __ZN7WebCore15TransitionEventC1Ev(i8);
  HEAP32[i1 >> 2] = i8;
  STACKTOP = i3;
  return;
 }
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i10 >> 2] | 0, H_BASE + 240 | 0) | 0) {
  i8 = __ZN3WTF10fastMallocEj(64) | 0;
  __ZN7WebCore7UIEventC1Ev(i8);
  HEAP32[i1 >> 2] = i8;
  STACKTOP = i3;
  return;
 }
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i10 >> 2] | 0, H_BASE + 224 | 0) | 0) {
  i8 = __ZN3WTF10fastMallocEj(64) | 0;
  __ZN7WebCore7UIEventC1Ev(i8);
  HEAP32[i1 >> 2] = i8;
  STACKTOP = i3;
  return;
 }
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i10 >> 2] | 0, H_BASE + 208 | 0) | 0) {
  __ZN7WebCore14UIRequestEvent6createEv(i9);
  i8 = i9 | 0;
  i9 = HEAP32[i8 >> 2] | 0;
  HEAP32[i8 >> 2] = 0;
  HEAP32[i1 >> 2] = i9;
  STACKTOP = i3;
  return;
 }
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i10 >> 2] | 0, H_BASE + 184 | 0) | 0) {
  i9 = __ZN3WTF10fastMallocEj(56) | 0;
  __ZN7WebCore17WebGLContextEventC1Ev(i9);
  HEAP32[i1 >> 2] = i9;
  STACKTOP = i3;
  return;
 }
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i10 >> 2] | 0, H_BASE + 160 | 0) | 0) {
  i9 = __ZN3WTF10fastMallocEj(64) | 0;
  __ZN7WebCore20WebKitAnimationEventC1Ev(i9);
  HEAP32[i1 >> 2] = i9;
  STACKTOP = i3;
  return;
 }
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i10 >> 2] | 0, H_BASE + 136 | 0) | 0) {
  i9 = __ZN3WTF10fastMallocEj(72) | 0;
  __ZN7WebCore21WebKitTransitionEventC1Ev(i9);
  HEAP32[i1 >> 2] = i9;
  STACKTOP = i3;
  return;
 }
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i10 >> 2] | 0, H_BASE + 120 | 0) | 0) {
  i9 = __ZN3WTF10fastMallocEj(168) | 0;
  __ZN7WebCore10WheelEventC1Ev(i9);
  HEAP32[i1 >> 2] = i9;
  STACKTOP = i3;
  return;
 }
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i10 >> 2] | 0, H_BASE + 88 | 0) | 0) {
  i10 = __ZN3WTF10fastMallocEj(72) | 0;
  __ZN7WebCore13ProgressEventC2Ev(i10);
  HEAP32[i10 >> 2] = H_BASE + 680;
  HEAP32[i1 >> 2] = i10;
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i3;
  return;
 }
}
function runPostSets() {
 HEAP32[H_BASE + 680 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 684 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 688 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 692 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 696 >> 2] = F_BASE_ii + 28;
 HEAP32[H_BASE + 700 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 704 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 708 >> 2] = F_BASE_ii + 30;
 HEAP32[H_BASE + 712 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 716 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 720 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 724 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 728 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 732 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 736 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 740 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 760 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 764 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 768 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 772 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 776 >> 2] = F_BASE_ii + 28;
 HEAP32[H_BASE + 780 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 784 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 788 >> 2] = F_BASE_ii + 30;
 HEAP32[H_BASE + 792 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 796 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 800 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 804 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 808 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 812 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 816 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 820 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 840 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 844 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 848 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 852 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 856 >> 2] = F_BASE_ii + 28;
 HEAP32[H_BASE + 860 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 864 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 868 >> 2] = F_BASE_ii + 30;
 HEAP32[H_BASE + 872 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 876 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 880 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 884 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 888 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 892 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 896 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 900 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 920 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 924 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 928 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 932 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 936 >> 2] = F_BASE_ii + 28;
 HEAP32[H_BASE + 940 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 944 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 948 >> 2] = F_BASE_ii + 30;
 HEAP32[H_BASE + 952 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 956 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 960 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 964 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 968 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 972 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 976 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 980 >> 2] = F_BASE_vi + 12;
}
function __ZN7WebCore15HashChangeEventD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 760;
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
function __ZN7WebCore15HashChangeEventD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 760;
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
function __ZN7WebCore15BeforeLoadEventD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 840;
 i2 = HEAP32[i1 + 52 >> 2] | 0;
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
 __ZN7WebCore5EventD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1 | 0);
 return;
}
function __ZN7WebCore10CloseEventD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 920;
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
 __ZN7WebCore5EventD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1 | 0);
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
function __ZN7WebCore15BeforeLoadEventD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 840;
 i2 = HEAP32[i1 + 52 >> 2] | 0;
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
 __ZN7WebCore5EventD2Ev(i1);
 return;
}
function __ZN7WebCore10CloseEventD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 920;
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
 __ZN7WebCore5EventD2Ev(i1);
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function viii___ZNK7WebCore5Event8cloneForEPNS_17HTMLIFrameElementE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore5Event8cloneForEPNS_17HTMLIFrameElementE(i1 | 0, i2 | 0, i3 | 0);
}
function ii___ZNK7WebCore5Event25isBeforeTextInsertedEventEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore5Event25isBeforeTextInsertedEventEv(i1 | 0) | 0;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 3](i2 | 0, i3 | 0, i4 | 0);
}
function ii___ZNK7WebCore5Event19isBeforeUnloadEventEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore5Event19isBeforeUnloadEventEv(i1 | 0) | 0;
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function __ZN7WebCore27XMLHttpRequestProgressEventD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore5EventD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1 | 0);
 return;
}
function ii___ZNK7WebCore5Event16isClipboardEventEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore5Event16isClipboardEventEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore5Event15isKeyboardEventEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore5Event15isKeyboardEventEv(i1 | 0) | 0;
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
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 1](i2 | 0, i3 | 0) | 0;
}
function ii___ZNK7WebCore5Event11isDragEventEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore5Event11isDragEventEv(i1 | 0) | 0;
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
function ii___ZNK7WebCore5Event9isUIEventEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore5Event9isUIEventEv(i1 | 0) | 0;
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
function __ZN7WebCore27XMLHttpRequestProgressEventD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore5EventD2Ev(i1);
 return;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 31](i2 | 0) | 0;
}
function __ZNK7WebCore27XMLHttpRequestProgressEvent14eventInterfaceEv(i1) {
 i1 = i1 | 0;
 return 24;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 31](i2 | 0);
}
function __ZNK7WebCore15HashChangeEvent14eventInterfaceEv(i1) {
 i1 = i1 | 0;
 return 8;
}
function __ZNK7WebCore15BeforeLoadEvent14eventInterfaceEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore10CloseEvent14eventInterfaceEv(i1) {
 i1 = i1 | 0;
 return 2;
}
function b2(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(2);
}
function __ZNK7WebCore5Event13relatedTargetEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b4(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(4);
 return 0;
}
function __ZNK7WebCore5Event9clipboardEv(i1) {
 i1 = i1 | 0;
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
function b1(i1) {
 i1 = i1 | 0;
 abort(1);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b0(i1) {
 i1 = i1 | 0;
 abort(0);
}
function b3() {
 abort(3);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore10CloseEventD1Ev,b0,__ZN7WebCore15BeforeLoadEventD0Ev,b0,__ZN7WebCore15BeforeLoadEventD1Ev,b0,__ZN7WebCore27XMLHttpRequestProgressEventD1Ev,b0,__ZN7WebCore15HashChangeEventD0Ev,b0,vi___ZN7WebCore5Event14receivedTargetEv__wrapper,b0,__ZN7WebCore10CloseEventD0Ev,b0,__ZN7WebCore15HashChangeEventD1Ev,b0,__ZN7WebCore27XMLHttpRequestProgressEventD0Ev,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
  ,b0,b0,b0];
  var FUNCTION_TABLE_ii = [b1,b1,ii___ZNK7WebCore5Event15isKeyboardEventEv__wrapper,b1,ii___ZNK7WebCore5Event25isBeforeTextInsertedEventEv__wrapper,b1,__ZNK7WebCore5Event13relatedTargetEv,b1,__ZNK7WebCore15BeforeLoadEvent14eventInterfaceEv,b1,__ZNK7WebCore27XMLHttpRequestProgressEvent14eventInterfaceEv,b1,__ZNK7WebCore15HashChangeEvent14eventInterfaceEv,b1,__ZNK7WebCore10CloseEvent14eventInterfaceEv,b1,ii___ZNK7WebCore5Event9isUIEventEv__wrapper,b1,ii___ZNK7WebCore5Event12isFocusEventEv__wrapper,b1,ii___ZNK7WebCore5Event11isDragEventEv__wrapper,b1,__ZNK7WebCore5Event9clipboardEv,b1,ii___ZNK7WebCore5Event16isClipboardEventEv__wrapper,b1,ii___ZNK7WebCore5Event19isBeforeUnloadEventEv__wrapper,b1,ii___ZNK7WebCore5Event12isMouseEventEv__wrapper
  ,b1,ii___ZNK7WebCore5Event12isTouchEventEv__wrapper,b1];
  var FUNCTION_TABLE_viii = [b2,b2,viii___ZNK7WebCore5Event8cloneForEPNS_17HTMLIFrameElementE__wrapper,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_iii = [b4,b4];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore15HashChangeEventD0Ev","__ZN7WebCore10CloseEventD1Ev","__ZNK7WebCore10CloseEvent14eventInterfaceEv","__ZN7WebCore15BeforeLoadEventD0Ev","__ZN7WebCore27XMLHttpRequestProgressEventD1Ev","__ZN7WebCore15BeforeLoadEventD1Ev","_memset","_strlen","_memcpy","__ZNK7WebCore5Event9clipboardEv","__ZN7WebCore15HashChangeEventD1Ev","__ZNK7WebCore27XMLHttpRequestProgressEvent14eventInterfaceEv","__ZN7WebCore10CloseEventD0Ev","__ZNK7WebCore5Event13relatedTargetEv","__ZNK7WebCore15HashChangeEvent14eventInterfaceEv","__ZN7WebCore12EventFactory6createERKN3WTF6StringE","__ZNK7WebCore15BeforeLoadEvent14eventInterfaceEv","__ZN7WebCore27XMLHttpRequestProgressEventD0Ev"]

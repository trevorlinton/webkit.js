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
H_BASE = parentModule["_malloc"](56 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 56;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore11BlobBuilderC1Ev;
/* memory initializer */ allocate([87,101,98,67,111,114,101,46,66,108,111,98,46,99,111,110,115,116,114,117,99,116,111,114,46,65,114,114,97,121,66,117,102,102,101,114,79,114,86,105,101,119,0,0,0,0,0,0,110,97,116,105,118,101,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var cttz_i8=env.cttz_i8|0;
  var ctlz_i8=env.ctlz_i8|0;
  var __ZN7WebCore12BlobDataItem11toEndOfFileE=env.__ZN7WebCore12BlobDataItem11toEndOfFileE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
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
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _llvm_uadd_with_overflow_i32=env._llvm_uadd_with_overflow_i32;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore11BlobBuilder6appendEPNS_4BlobE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, d11 = +0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 192 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 104 | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1](i2) | 0) {
  __ZNK7WebCore4File15captureSnapshotERxRd(i2, i4, i5);
  i8 = HEAP32[i4 >> 2] | 0;
  i9 = HEAP32[i4 + 4 >> 2] | 0;
  i4 = i1 | 0;
  i10 = _i64Add(HEAP32[i4 >> 2] | 0, HEAP32[i4 + 4 >> 2] | 0, i8, i9) | 0;
  HEAP32[i4 >> 2] = i10;
  HEAP32[i4 + 4 >> 2] = tempRet0;
  i4 = i1 + 8 | 0;
  d11 = +HEAPF64[i5 >> 3];
  i5 = i6 | 0;
  HEAP32[i5 >> 2] = 1;
  i10 = i6 + 4 | 0;
  HEAP32[i10 >> 2] = 0;
  i12 = i6 + 8 | 0;
  i13 = HEAP32[i2 + 72 >> 2] | 0;
  HEAP32[i12 >> 2] = i13;
  if ((i13 | 0) != 0) {
   i14 = i13 | 0;
   HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
  }
  i14 = i6 + 12 | 0;
  HEAP32[i14 >> 2] = 0;
  __ZN7WebCore3URL10invalidateEv(i14);
  i14 = i6 + 64 | 0;
  HEAP32[i14 >> 2] = 0;
  HEAP32[i14 + 4 >> 2] = 0;
  i13 = i6 + 72 | 0;
  HEAP32[i13 >> 2] = i8;
  HEAP32[i13 + 4 >> 2] = i9;
  i9 = i6 + 80 | 0;
  HEAPF64[i9 >> 3] = d11;
  i8 = i1 + 16 | 0;
  i15 = HEAP32[i8 >> 2] | 0;
  if ((i15 | 0) == (HEAP32[i1 + 12 >> 2] | 0)) {
   __ZN3WTF6VectorIN7WebCore12BlobDataItemELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_(i4, i6);
   i16 = i6 + 12 | 0;
  } else {
   i17 = HEAP32[i4 >> 2] | 0;
   HEAP32[i17 + (i15 * 88 & -1) >> 2] = HEAP32[i5 >> 2];
   i5 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = 0;
   HEAP32[i17 + (i15 * 88 & -1) + 4 >> 2] = i5;
   i5 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   HEAP32[i17 + (i15 * 88 & -1) + 8 >> 2] = i5;
   i5 = i6 + 12 | 0;
   i4 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   HEAP32[i17 + (i15 * 88 & -1) + 12 >> 2] = i4;
   i4 = i6 + 16 | 0;
   i18 = i17 + (i15 * 88 & -1) + 16 | 0;
   i19 = HEAP8[i18] & -2 | HEAP8[i4] & 1;
   HEAP8[i18] = i19;
   HEAP8[i18] = i19 & -3 | HEAP8[i4] & 2;
   HEAP32[i17 + (i15 * 88 & -1) + 20 >> 2] = HEAP32[i6 + 20 >> 2];
   HEAP32[i17 + (i15 * 88 & -1) + 24 >> 2] = HEAP32[i6 + 24 >> 2];
   HEAP32[i17 + (i15 * 88 & -1) + 28 >> 2] = HEAP32[i6 + 28 >> 2];
   HEAP32[i17 + (i15 * 88 & -1) + 32 >> 2] = HEAP32[i6 + 32 >> 2];
   HEAP32[i17 + (i15 * 88 & -1) + 36 >> 2] = HEAP32[i6 + 36 >> 2];
   HEAP32[i17 + (i15 * 88 & -1) + 40 >> 2] = HEAP32[i6 + 40 >> 2];
   HEAP32[i17 + (i15 * 88 & -1) + 44 >> 2] = HEAP32[i6 + 44 >> 2];
   HEAP32[i17 + (i15 * 88 & -1) + 48 >> 2] = HEAP32[i6 + 48 >> 2];
   HEAP32[i17 + (i15 * 88 & -1) + 52 >> 2] = HEAP32[i6 + 52 >> 2];
   HEAP32[i17 + (i15 * 88 & -1) + 56 >> 2] = HEAP32[i6 + 56 >> 2];
   i6 = i17 + (i15 * 88 & -1) + 64 | 0;
   i4 = HEAP32[i14 + 4 >> 2] | 0;
   HEAP32[i6 >> 2] = HEAP32[i14 >> 2];
   HEAP32[i6 + 4 >> 2] = i4;
   i4 = i17 + (i15 * 88 & -1) + 72 | 0;
   i6 = HEAP32[i13 + 4 >> 2] | 0;
   HEAP32[i4 >> 2] = HEAP32[i13 >> 2];
   HEAP32[i4 + 4 >> 2] = i6;
   HEAPF64[i17 + (i15 * 88 & -1) + 80 >> 3] = +HEAPF64[i9 >> 3];
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
   i16 = i5;
  }
  i5 = HEAP32[i16 >> 2] | 0;
  do {
   if ((i5 | 0) != 0) {
    i16 = i5 | 0;
    i8 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
    if ((i8 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i5);
     break;
    } else {
     HEAP32[i16 >> 2] = i8;
     break;
    }
   }
  } while (0);
  i5 = HEAP32[i12 >> 2] | 0;
  do {
   if ((i5 | 0) != 0) {
    i12 = i5 | 0;
    i8 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
    if ((i8 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i5);
     break;
    } else {
     HEAP32[i12 >> 2] = i8;
     break;
    }
   }
  } while (0);
  i5 = HEAP32[i10 >> 2] | 0;
  if ((i5 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i10 = i5 | 0;
  i8 = i5 | 0;
  if (((tempValue = HEAP32[i8 >> 2] | 0, HEAP32[i8 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
   STACKTOP = i3;
   return;
  }
  i8 = i10 + 12 | 0;
  if ((HEAP32[i8 >> 2] | 0) != 0) {
   HEAP32[i8 >> 2] = 0;
  }
  i8 = i10 + 4 | 0;
  i12 = HEAP32[i8 >> 2] | 0;
  if ((i12 | 0) != 0) {
   HEAP32[i8 >> 2] = 0;
   HEAP32[i10 + 8 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i12);
  }
  __ZN3WTF8fastFreeEPv(i5);
  STACKTOP = i3;
  return;
 }
 i5 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 1](i2) | 0;
 i12 = tempRet0;
 i10 = i1 | 0;
 i8 = _i64Add(HEAP32[i10 >> 2] | 0, HEAP32[i10 + 4 >> 2] | 0, i5, i12) | 0;
 HEAP32[i10 >> 2] = i8;
 HEAP32[i10 + 4 >> 2] = tempRet0;
 i10 = i1 + 8 | 0;
 i8 = i7 | 0;
 HEAP32[i8 >> 2] = 2;
 i16 = i7 + 4 | 0;
 HEAP32[i16 >> 2] = 0;
 i9 = i7 + 8 | 0;
 HEAP32[i9 >> 2] = 0;
 i15 = i7 + 12 | 0;
 i17 = HEAP32[i2 + 12 >> 2] | 0;
 HEAP32[i15 >> 2] = i17;
 if ((i17 | 0) == 0) {
  i20 = 0;
  i21 = i7 + 16 | 0;
 } else {
  i6 = i17 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
  i6 = i7 + 16 | 0;
  i20 = HEAP8[i6] & -4;
  i21 = i6;
 }
 i6 = HEAP8[i2 + 16 | 0] | 0;
 HEAP8[i21] = i20 | i6 & 1 | i6 & 2;
 i6 = i7 + 20 | 0;
 HEAP32[i6 >> 2] = HEAP32[i2 + 20 >> 2];
 i20 = i7 + 24 | 0;
 HEAP32[i20 >> 2] = HEAP32[i2 + 24 >> 2];
 i17 = i7 + 28 | 0;
 HEAP32[i17 >> 2] = HEAP32[i2 + 28 >> 2];
 i4 = i7 + 32 | 0;
 HEAP32[i4 >> 2] = HEAP32[i2 + 32 >> 2];
 i13 = i7 + 36 | 0;
 HEAP32[i13 >> 2] = HEAP32[i2 + 36 >> 2];
 i14 = i7 + 40 | 0;
 HEAP32[i14 >> 2] = HEAP32[i2 + 40 >> 2];
 i19 = i7 + 44 | 0;
 HEAP32[i19 >> 2] = HEAP32[i2 + 44 >> 2];
 i18 = i7 + 48 | 0;
 HEAP32[i18 >> 2] = HEAP32[i2 + 48 >> 2];
 i22 = i7 + 52 | 0;
 HEAP32[i22 >> 2] = HEAP32[i2 + 52 >> 2];
 i23 = i7 + 56 | 0;
 HEAP32[i23 >> 2] = HEAP32[i2 + 56 >> 2];
 i2 = i7 + 64 | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i2 + 4 >> 2] = 0;
 i24 = i7 + 72 | 0;
 HEAP32[i24 >> 2] = i5;
 HEAP32[i24 + 4 >> 2] = i12;
 i12 = i7 + 80 | 0;
 HEAPF64[i12 >> 3] = +NaN;
 i5 = i1 + 16 | 0;
 i25 = HEAP32[i5 >> 2] | 0;
 if ((i25 | 0) == (HEAP32[i1 + 12 >> 2] | 0)) {
  __ZN3WTF6VectorIN7WebCore12BlobDataItemELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_(i10, i7);
 } else {
  i7 = HEAP32[i10 >> 2] | 0;
  HEAP32[i7 + (i25 * 88 & -1) >> 2] = HEAP32[i8 >> 2];
  i8 = HEAP32[i16 >> 2] | 0;
  HEAP32[i16 >> 2] = 0;
  HEAP32[i7 + (i25 * 88 & -1) + 4 >> 2] = i8;
  i8 = HEAP32[i9 >> 2] | 0;
  HEAP32[i9 >> 2] = 0;
  HEAP32[i7 + (i25 * 88 & -1) + 8 >> 2] = i8;
  i8 = HEAP32[i15 >> 2] | 0;
  HEAP32[i15 >> 2] = 0;
  HEAP32[i7 + (i25 * 88 & -1) + 12 >> 2] = i8;
  i8 = i7 + (i25 * 88 & -1) + 16 | 0;
  i10 = HEAP8[i8] & -2 | HEAP8[i21] & 1;
  HEAP8[i8] = i10;
  HEAP8[i8] = i10 & -3 | HEAP8[i21] & 2;
  HEAP32[i7 + (i25 * 88 & -1) + 20 >> 2] = HEAP32[i6 >> 2];
  HEAP32[i7 + (i25 * 88 & -1) + 24 >> 2] = HEAP32[i20 >> 2];
  HEAP32[i7 + (i25 * 88 & -1) + 28 >> 2] = HEAP32[i17 >> 2];
  HEAP32[i7 + (i25 * 88 & -1) + 32 >> 2] = HEAP32[i4 >> 2];
  HEAP32[i7 + (i25 * 88 & -1) + 36 >> 2] = HEAP32[i13 >> 2];
  HEAP32[i7 + (i25 * 88 & -1) + 40 >> 2] = HEAP32[i14 >> 2];
  HEAP32[i7 + (i25 * 88 & -1) + 44 >> 2] = HEAP32[i19 >> 2];
  HEAP32[i7 + (i25 * 88 & -1) + 48 >> 2] = HEAP32[i18 >> 2];
  HEAP32[i7 + (i25 * 88 & -1) + 52 >> 2] = HEAP32[i22 >> 2];
  HEAP32[i7 + (i25 * 88 & -1) + 56 >> 2] = HEAP32[i23 >> 2];
  i23 = i7 + (i25 * 88 & -1) + 64 | 0;
  i22 = HEAP32[i2 + 4 >> 2] | 0;
  HEAP32[i23 >> 2] = HEAP32[i2 >> 2];
  HEAP32[i23 + 4 >> 2] = i22;
  i22 = i7 + (i25 * 88 & -1) + 72 | 0;
  i23 = HEAP32[i24 + 4 >> 2] | 0;
  HEAP32[i22 >> 2] = HEAP32[i24 >> 2];
  HEAP32[i22 + 4 >> 2] = i23;
  HEAPF64[i7 + (i25 * 88 & -1) + 80 >> 3] = +HEAPF64[i12 >> 3];
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 i5 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i15 = i5 | 0;
   i12 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i15 >> 2] = i12;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i9 = i5 | 0;
   i12 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i9 >> 2] = i12;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i16 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i16 = i5 | 0;
 i12 = i5 | 0;
 if (((tempValue = HEAP32[i12 >> 2] | 0, HEAP32[i12 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  STACKTOP = i3;
  return;
 }
 i12 = i16 + 12 | 0;
 if ((HEAP32[i12 >> 2] | 0) != 0) {
  HEAP32[i12 >> 2] = 0;
 }
 i12 = i16 + 4 | 0;
 i9 = HEAP32[i12 >> 2] | 0;
 if ((i9 | 0) != 0) {
  HEAP32[i12 >> 2] = 0;
  HEAP32[i16 + 8 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i9);
 }
 __ZN3WTF8fastFreeEPv(i5);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11BlobBuilder7getBlobERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 104 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = __ZN3WTF10fastMallocEj(20) | 0;
 i9 = i8;
 _memset(i8 | 0, 0, 20) | 0;
 __ZN7WebCore4Blob21normalizedContentTypeERKN3WTF6StringE(i6, i3);
 __ZN7WebCore8BlobData14setContentTypeERKN3WTF6StringE(i9, i6);
 i3 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i6 = i3 | 0;
   i8 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i6 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i3 = i2 + 8 | 0;
 __ZN7WebCore8BlobData9swapItemsERN3WTF6VectorINS_12BlobDataItemELj0ENS1_15CrashOnOverflowEEE(i9, i3);
 i8 = i2 | 0;
 i6 = HEAP32[i8 >> 2] | 0;
 i10 = HEAP32[i8 + 4 >> 2] | 0;
 i11 = __ZN3WTF10fastMallocEj(72) | 0;
 i12 = i11;
 i13 = i5 | 0;
 HEAP32[i13 >> 2] = i9;
 __ZN7WebCore4BlobC1ENSt3__110unique_ptrINS_8BlobDataENS1_14default_deleteIS3_EEEEx(i12, i5, i6, i10);
 i10 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 if ((i10 | 0) != 0) {
  i13 = i10 + 16 | 0;
  i6 = HEAP32[i13 >> 2] | 0;
  i5 = i10 + 8 | 0;
  if ((i6 | 0) != 0) {
   i9 = HEAP32[i5 >> 2] | 0;
   i14 = i9 + (i6 * 88 & -1) | 0;
   i6 = i9;
   while (1) {
    __ZN7WebCore12BlobDataItemD2Ev(i6);
    i6 = i6 + 88 | 0;
    if ((i6 | 0) == (i14 | 0)) {
     break;
    }
   }
   HEAP32[i13 >> 2] = 0;
  }
  i13 = HEAP32[i5 >> 2] | 0;
  if ((i13 | 0) != 0) {
   HEAP32[i5 >> 2] = 0;
   HEAP32[i10 + 12 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i13);
  }
  i13 = HEAP32[i10 + 4 >> 2] | 0;
  do {
   if ((i13 | 0) != 0) {
    i5 = i13 | 0;
    i14 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
    if ((i14 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i13);
     break;
    } else {
     HEAP32[i5 >> 2] = i14;
     break;
    }
   }
  } while (0);
  i13 = HEAP32[i10 >> 2] | 0;
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
  __ZN3WTF8fastFreeEPv(i10);
 }
 i10 = HEAP32[i8 >> 2] | 0;
 i13 = HEAP32[i8 + 4 >> 2] | 0;
 i8 = i7 | 0;
 HEAP32[i8 >> 2] = 2;
 i5 = i7 + 4 | 0;
 HEAP32[i5 >> 2] = 0;
 i14 = i7 + 8 | 0;
 HEAP32[i14 >> 2] = 0;
 i6 = i7 + 12 | 0;
 i9 = HEAP32[i11 + 12 >> 2] | 0;
 HEAP32[i6 >> 2] = i9;
 if ((i9 | 0) != 0) {
  i15 = i9 | 0;
  HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 2;
 }
 i15 = i11 + 16 | 0;
 i9 = i7 + 16 | 0;
 i16 = HEAP8[i9] & -2 | HEAP8[i15] & 1;
 HEAP8[i9] = i16;
 HEAP8[i9] = i16 & -3 | HEAP8[i15] & 2;
 i15 = i7 + 20 | 0;
 HEAP32[i15 >> 2] = HEAP32[i11 + 20 >> 2];
 i16 = i7 + 24 | 0;
 HEAP32[i16 >> 2] = HEAP32[i11 + 24 >> 2];
 i17 = i7 + 28 | 0;
 HEAP32[i17 >> 2] = HEAP32[i11 + 28 >> 2];
 i18 = i7 + 32 | 0;
 HEAP32[i18 >> 2] = HEAP32[i11 + 32 >> 2];
 i19 = i7 + 36 | 0;
 HEAP32[i19 >> 2] = HEAP32[i11 + 36 >> 2];
 i20 = i7 + 40 | 0;
 HEAP32[i20 >> 2] = HEAP32[i11 + 40 >> 2];
 i21 = i7 + 44 | 0;
 HEAP32[i21 >> 2] = HEAP32[i11 + 44 >> 2];
 i22 = i7 + 48 | 0;
 HEAP32[i22 >> 2] = HEAP32[i11 + 48 >> 2];
 i23 = i7 + 52 | 0;
 HEAP32[i23 >> 2] = HEAP32[i11 + 52 >> 2];
 i24 = i7 + 56 | 0;
 HEAP32[i24 >> 2] = HEAP32[i11 + 56 >> 2];
 i25 = i7 + 64 | 0;
 HEAP32[i25 >> 2] = 0;
 HEAP32[i25 + 4 >> 2] = 0;
 i26 = i7 + 72 | 0;
 HEAP32[i26 >> 2] = i10;
 HEAP32[i26 + 4 >> 2] = i13;
 i13 = i7 + 80 | 0;
 HEAPF64[i13 >> 3] = +NaN;
 i10 = i2 + 16 | 0;
 i27 = HEAP32[i10 >> 2] | 0;
 if ((i27 | 0) == (HEAP32[i2 + 12 >> 2] | 0)) {
  __ZN3WTF6VectorIN7WebCore12BlobDataItemELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_(i3, i7);
 } else {
  i7 = HEAP32[i3 >> 2] | 0;
  HEAP32[i7 + (i27 * 88 & -1) >> 2] = HEAP32[i8 >> 2];
  i8 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = 0;
  HEAP32[i7 + (i27 * 88 & -1) + 4 >> 2] = i8;
  i8 = HEAP32[i14 >> 2] | 0;
  HEAP32[i14 >> 2] = 0;
  HEAP32[i7 + (i27 * 88 & -1) + 8 >> 2] = i8;
  i8 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = 0;
  HEAP32[i7 + (i27 * 88 & -1) + 12 >> 2] = i8;
  i8 = i7 + (i27 * 88 & -1) + 16 | 0;
  i3 = HEAP8[i8] & -2 | HEAP8[i9] & 1;
  HEAP8[i8] = i3;
  HEAP8[i8] = i3 & -3 | HEAP8[i9] & 2;
  HEAP32[i7 + (i27 * 88 & -1) + 20 >> 2] = HEAP32[i15 >> 2];
  HEAP32[i7 + (i27 * 88 & -1) + 24 >> 2] = HEAP32[i16 >> 2];
  HEAP32[i7 + (i27 * 88 & -1) + 28 >> 2] = HEAP32[i17 >> 2];
  HEAP32[i7 + (i27 * 88 & -1) + 32 >> 2] = HEAP32[i18 >> 2];
  HEAP32[i7 + (i27 * 88 & -1) + 36 >> 2] = HEAP32[i19 >> 2];
  HEAP32[i7 + (i27 * 88 & -1) + 40 >> 2] = HEAP32[i20 >> 2];
  HEAP32[i7 + (i27 * 88 & -1) + 44 >> 2] = HEAP32[i21 >> 2];
  HEAP32[i7 + (i27 * 88 & -1) + 48 >> 2] = HEAP32[i22 >> 2];
  HEAP32[i7 + (i27 * 88 & -1) + 52 >> 2] = HEAP32[i23 >> 2];
  HEAP32[i7 + (i27 * 88 & -1) + 56 >> 2] = HEAP32[i24 >> 2];
  i24 = i7 + (i27 * 88 & -1) + 64 | 0;
  i23 = HEAP32[i25 + 4 >> 2] | 0;
  HEAP32[i24 >> 2] = HEAP32[i25 >> 2];
  HEAP32[i24 + 4 >> 2] = i23;
  i23 = i7 + (i27 * 88 & -1) + 72 | 0;
  i24 = HEAP32[i26 + 4 >> 2] | 0;
  HEAP32[i23 >> 2] = HEAP32[i26 >> 2];
  HEAP32[i23 + 4 >> 2] = i24;
  HEAPF64[i7 + (i27 * 88 & -1) + 80 >> 3] = +HEAPF64[i13 >> 3];
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
 }
 i10 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i6 = i10 | 0;
   i13 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i6 >> 2] = i13;
    break;
   }
  }
 } while (0);
 i10 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i14 = i10 | 0;
   i13 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i14 >> 2] = i13;
    break;
   }
  }
 } while (0);
 i10 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i5 = i10 | 0;
   i13 = i10 | 0;
   if (((tempValue = HEAP32[i13 >> 2] | 0, HEAP32[i13 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   i13 = i5 + 12 | 0;
   if ((HEAP32[i13 >> 2] | 0) != 0) {
    HEAP32[i13 >> 2] = 0;
   }
   i13 = i5 + 4 | 0;
   i14 = HEAP32[i13 >> 2] | 0;
   if ((i14 | 0) != 0) {
    HEAP32[i13 >> 2] = 0;
    HEAP32[i5 + 8 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i14);
   }
   __ZN3WTF8fastFreeEPv(i10);
  }
 } while (0);
 HEAP32[i1 >> 2] = i12;
 if ((i11 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i1 = i11 + 8 | 0;
 i10 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = i10 + 1;
 if ((i10 | 0) == 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 3](i12);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i1 >> 2] = i10;
  STACKTOP = i4;
  return;
 }
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
function __ZN7WebCore11BlobBuilder9getBufferEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i3 = i2 | 0;
 i4 = i1 + 8 | 0;
 i5 = i1 + 16 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i6 | 0) == 0) {
   i7 = 5;
  } else {
   i8 = _llvm_uadd_with_overflow_i32(i6 | 0, -1 | 0) | 0;
   if (tempRet0) {
    if ((HEAP32[(HEAP32[i4 >> 2] | 0) + (i8 * 88 & -1) >> 2] | 0) == 0) {
     break;
    } else {
     i7 = 5;
     break;
    }
   } else {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
    return 0;
   }
  }
 } while (0);
 do {
  if ((i7 | 0) == 5) {
   i6 = __ZN3WTF10fastMallocEj(16) | 0;
   __ZN7WebCore7RawDataC1Ev(i6);
   i8 = i3 | 0;
   HEAP32[i8 >> 2] = 0;
   i9 = i3 + 4 | 0;
   HEAP32[i9 >> 2] = i6;
   i6 = i3 + 8 | 0;
   HEAP32[i6 >> 2] = 0;
   i10 = i3 + 12 | 0;
   HEAP32[i10 >> 2] = 0;
   __ZN7WebCore3URL10invalidateEv(i10);
   i10 = i3 + 64 | 0;
   HEAP32[i10 >> 2] = 0;
   HEAP32[i10 + 4 >> 2] = 0;
   i11 = i3 + 72 | 0;
   i12 = HEAP32[__ZN7WebCore12BlobDataItem11toEndOfFileE + 4 >> 2] | 0;
   HEAP32[i11 >> 2] = HEAP32[__ZN7WebCore12BlobDataItem11toEndOfFileE >> 2];
   HEAP32[i11 + 4 >> 2] = i12;
   i12 = i3 + 80 | 0;
   HEAPF64[i12 >> 3] = +NaN;
   i13 = HEAP32[i5 >> 2] | 0;
   if ((i13 | 0) == (HEAP32[i1 + 12 >> 2] | 0)) {
    __ZN3WTF6VectorIN7WebCore12BlobDataItemELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_(i4, i3);
    i14 = i3 + 12 | 0;
   } else {
    i15 = HEAP32[i4 >> 2] | 0;
    HEAP32[i15 + (i13 * 88 & -1) >> 2] = HEAP32[i8 >> 2];
    i8 = HEAP32[i9 >> 2] | 0;
    HEAP32[i9 >> 2] = 0;
    HEAP32[i15 + (i13 * 88 & -1) + 4 >> 2] = i8;
    i8 = HEAP32[i6 >> 2] | 0;
    HEAP32[i6 >> 2] = 0;
    HEAP32[i15 + (i13 * 88 & -1) + 8 >> 2] = i8;
    i8 = i3 + 12 | 0;
    i16 = HEAP32[i8 >> 2] | 0;
    HEAP32[i8 >> 2] = 0;
    HEAP32[i15 + (i13 * 88 & -1) + 12 >> 2] = i16;
    i16 = i3 + 16 | 0;
    i17 = i15 + (i13 * 88 & -1) + 16 | 0;
    i18 = HEAP8[i17] & -2 | HEAP8[i16] & 1;
    HEAP8[i17] = i18;
    HEAP8[i17] = i18 & -3 | HEAP8[i16] & 2;
    HEAP32[i15 + (i13 * 88 & -1) + 20 >> 2] = HEAP32[i3 + 20 >> 2];
    HEAP32[i15 + (i13 * 88 & -1) + 24 >> 2] = HEAP32[i3 + 24 >> 2];
    HEAP32[i15 + (i13 * 88 & -1) + 28 >> 2] = HEAP32[i3 + 28 >> 2];
    HEAP32[i15 + (i13 * 88 & -1) + 32 >> 2] = HEAP32[i3 + 32 >> 2];
    HEAP32[i15 + (i13 * 88 & -1) + 36 >> 2] = HEAP32[i3 + 36 >> 2];
    HEAP32[i15 + (i13 * 88 & -1) + 40 >> 2] = HEAP32[i3 + 40 >> 2];
    HEAP32[i15 + (i13 * 88 & -1) + 44 >> 2] = HEAP32[i3 + 44 >> 2];
    HEAP32[i15 + (i13 * 88 & -1) + 48 >> 2] = HEAP32[i3 + 48 >> 2];
    HEAP32[i15 + (i13 * 88 & -1) + 52 >> 2] = HEAP32[i3 + 52 >> 2];
    HEAP32[i15 + (i13 * 88 & -1) + 56 >> 2] = HEAP32[i3 + 56 >> 2];
    i16 = i15 + (i13 * 88 & -1) + 64 | 0;
    i18 = HEAP32[i10 + 4 >> 2] | 0;
    HEAP32[i16 >> 2] = HEAP32[i10 >> 2];
    HEAP32[i16 + 4 >> 2] = i18;
    i18 = i15 + (i13 * 88 & -1) + 72 | 0;
    i16 = HEAP32[i11 + 4 >> 2] | 0;
    HEAP32[i18 >> 2] = HEAP32[i11 >> 2];
    HEAP32[i18 + 4 >> 2] = i16;
    HEAPF64[i15 + (i13 * 88 & -1) + 80 >> 3] = +HEAPF64[i12 >> 3];
    HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
    i14 = i8;
   }
   i8 = HEAP32[i14 >> 2] | 0;
   do {
    if ((i8 | 0) != 0) {
     i12 = i8 | 0;
     i13 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
     if ((i13 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i8);
      break;
     } else {
      HEAP32[i12 >> 2] = i13;
      break;
     }
    }
   } while (0);
   i8 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i8 | 0) != 0) {
     i13 = i8 | 0;
     i12 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
     if ((i12 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i8);
      break;
     } else {
      HEAP32[i13 >> 2] = i12;
      break;
     }
    }
   } while (0);
   i8 = HEAP32[i9 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   i6 = i8 | 0;
   i12 = i8 | 0;
   if (((tempValue = HEAP32[i12 >> 2] | 0, HEAP32[i12 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   i12 = i6 + 12 | 0;
   if ((HEAP32[i12 >> 2] | 0) != 0) {
    HEAP32[i12 >> 2] = 0;
   }
   i12 = i6 + 4 | 0;
   i13 = HEAP32[i12 >> 2] | 0;
   if ((i13 | 0) != 0) {
    HEAP32[i12 >> 2] = 0;
    HEAP32[i6 + 8 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i13);
   }
   __ZN3WTF8fastFreeEPv(i8);
  }
 } while (0);
 i14 = _llvm_uadd_with_overflow_i32(HEAP32[i5 >> 2] | 0, -1 | 0) | 0;
 if (tempRet0) {
  STACKTOP = i2;
  return (HEAP32[(HEAP32[i4 >> 2] | 0) + (i14 * 88 & -1) + 4 >> 2] | 0) + 4 | 0;
 } else {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 return 0;
}
function __ZN3WTF6VectorIN7WebCore12BlobDataItemELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_(i1, i2) {
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
   if ((i7 + (i4 * 88 & -1) | 0) >>> 0 <= i2 >>> 0) {
    i8 = 3;
    break;
   }
   i9 = HEAP32[i1 + 4 >> 2] | 0;
   i10 = i9 + 1 + (i9 >>> 2) | 0;
   i9 = i10 >>> 0 > 16 >>> 0 ? i10 : 16;
   __ZN3WTF6VectorIN7WebCore12BlobDataItemELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i9 >>> 0 > i5 >>> 0 ? i9 : i5);
   i9 = HEAP32[i6 >> 2] | 0;
   i11 = i9 + (((i2 - i7 | 0) / 88 & -1) * 88 & -1) | 0;
   i12 = i9;
  }
 } while (0);
 if ((i8 | 0) == 3) {
  i8 = HEAP32[i1 + 4 >> 2] | 0;
  i7 = i8 + 1 + (i8 >>> 2) | 0;
  i8 = i7 >>> 0 > 16 >>> 0 ? i7 : 16;
  __ZN3WTF6VectorIN7WebCore12BlobDataItemELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i8 >>> 0 > i5 >>> 0 ? i8 : i5);
  i11 = i2;
  i12 = HEAP32[i6 >> 2] | 0;
 }
 i6 = HEAP32[i3 >> 2] | 0;
 HEAP32[i12 + (i6 * 88 & -1) >> 2] = HEAP32[i11 >> 2];
 i2 = i11 + 4 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i12 + (i6 * 88 & -1) + 4 >> 2] = i5;
 i5 = i11 + 8 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i12 + (i6 * 88 & -1) + 8 >> 2] = i2;
 i2 = i11 + 12 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i12 + (i6 * 88 & -1) + 12 >> 2] = i5;
 i5 = i11 + 16 | 0;
 i2 = i12 + (i6 * 88 & -1) + 16 | 0;
 i8 = HEAP8[i2] & -2 | HEAP8[i5] & 1;
 HEAP8[i2] = i8;
 HEAP8[i2] = i8 & -3 | HEAP8[i5] & 2;
 HEAP32[i12 + (i6 * 88 & -1) + 20 >> 2] = HEAP32[i11 + 20 >> 2];
 HEAP32[i12 + (i6 * 88 & -1) + 24 >> 2] = HEAP32[i11 + 24 >> 2];
 HEAP32[i12 + (i6 * 88 & -1) + 28 >> 2] = HEAP32[i11 + 28 >> 2];
 HEAP32[i12 + (i6 * 88 & -1) + 32 >> 2] = HEAP32[i11 + 32 >> 2];
 HEAP32[i12 + (i6 * 88 & -1) + 36 >> 2] = HEAP32[i11 + 36 >> 2];
 HEAP32[i12 + (i6 * 88 & -1) + 40 >> 2] = HEAP32[i11 + 40 >> 2];
 HEAP32[i12 + (i6 * 88 & -1) + 44 >> 2] = HEAP32[i11 + 44 >> 2];
 HEAP32[i12 + (i6 * 88 & -1) + 48 >> 2] = HEAP32[i11 + 48 >> 2];
 HEAP32[i12 + (i6 * 88 & -1) + 52 >> 2] = HEAP32[i11 + 52 >> 2];
 HEAP32[i12 + (i6 * 88 & -1) + 56 >> 2] = HEAP32[i11 + 56 >> 2];
 i5 = i12 + (i6 * 88 & -1) + 64 | 0;
 i8 = i11 + 64 | 0;
 i2 = HEAP32[i8 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i5 + 4 >> 2] = i2;
 i2 = i12 + (i6 * 88 & -1) + 72 | 0;
 i5 = i11 + 72 | 0;
 i8 = HEAP32[i5 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i2 + 4 >> 2] = i8;
 HEAPF64[i12 + (i6 * 88 & -1) + 80 >> 3] = +HEAPF64[i11 + 80 >> 3];
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 return;
}
function __ZN3WTF6VectorIN7WebCore12BlobDataItemELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
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
 i1 = i5 + (i6 * 88 & -1) | 0;
 if (i2 >>> 0 > 48806446 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 * 88 & -1) | 0;
 HEAP32[i3 >> 2] = (i7 >>> 0) / 88 & -1;
 i2 = __ZN3WTF10fastMallocEj(i7) | 0;
 HEAP32[i4 >> 2] = i2;
 if ((i6 | 0) != 0) {
  i6 = i5;
  i7 = i2;
  while (1) {
   HEAP32[i7 >> 2] = HEAP32[i6 >> 2];
   i2 = i6 + 4 | 0;
   i8 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   HEAP32[i7 + 4 >> 2] = i8;
   i8 = i6 + 8 | 0;
   i2 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = 0;
   HEAP32[i7 + 8 >> 2] = i2;
   i2 = i6 + 12 | 0;
   i8 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   HEAP32[i7 + 12 >> 2] = i8;
   i8 = i6 + 16 | 0;
   i2 = i7 + 16 | 0;
   i9 = HEAP8[i2] & -2 | HEAP8[i8] & 1;
   HEAP8[i2] = i9;
   HEAP8[i2] = i9 & -3 | HEAP8[i8] & 2;
   HEAP32[i7 + 20 >> 2] = HEAP32[i6 + 20 >> 2];
   HEAP32[i7 + 24 >> 2] = HEAP32[i6 + 24 >> 2];
   HEAP32[i7 + 28 >> 2] = HEAP32[i6 + 28 >> 2];
   HEAP32[i7 + 32 >> 2] = HEAP32[i6 + 32 >> 2];
   HEAP32[i7 + 36 >> 2] = HEAP32[i6 + 36 >> 2];
   HEAP32[i7 + 40 >> 2] = HEAP32[i6 + 40 >> 2];
   HEAP32[i7 + 44 >> 2] = HEAP32[i6 + 44 >> 2];
   HEAP32[i7 + 48 >> 2] = HEAP32[i6 + 48 >> 2];
   HEAP32[i7 + 52 >> 2] = HEAP32[i6 + 52 >> 2];
   HEAP32[i7 + 56 >> 2] = HEAP32[i6 + 56 >> 2];
   i8 = i7 + 64 | 0;
   i9 = i6 + 64 | 0;
   i2 = HEAP32[i9 + 4 >> 2] | 0;
   HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
   HEAP32[i8 + 4 >> 2] = i2;
   i2 = i7 + 72 | 0;
   i8 = i6 + 72 | 0;
   i9 = HEAP32[i8 + 4 >> 2] | 0;
   HEAP32[i2 >> 2] = HEAP32[i8 >> 2];
   HEAP32[i2 + 4 >> 2] = i9;
   HEAPF64[i7 + 80 >> 3] = +HEAPF64[i6 + 80 >> 3];
   __ZN7WebCore12BlobDataItemD2Ev(i6);
   i9 = i6 + 88 | 0;
   if ((i9 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i9;
    i7 = i7 + 88 | 0;
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
function __ZN7WebCore11BlobBuilder6appendERKN3WTF6StringES4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = __ZN7WebCore12UTF8EncodingEv() | 0;
 i7 = i2 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   i8 = 0;
   i9 = 0;
  } else {
   if ((HEAP32[i2 + 16 >> 2] & 32 | 0) == 0) {
    i10 = HEAP32[i2 + 8 >> 2] | 0;
    i11 = i2;
   } else {
    i12 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i2) | 0;
    i10 = i12;
    i11 = HEAP32[i7 >> 2] | 0;
   }
   if ((i11 | 0) == 0) {
    i8 = 0;
    i9 = i10;
    break;
   }
   i8 = HEAP32[i11 + 4 >> 2] | 0;
   i9 = i10;
  }
 } while (0);
 __ZNK7WebCore12TextEncoding6encodeEPKtjNS_19UnencodableHandlingE(i5, i6, i9, i8, 1);
 i8 = __ZN7WebCore11BlobBuilder9getBufferEv(i1) | 0;
 i9 = i8 + 8 | 0;
 i6 = HEAP32[i9 >> 2] | 0;
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i3 >> 2] | 0, H_BASE + 56 | 0) | 0) {
  __ZN7WebCore28normalizeLineEndingsToNativeERKN3WTF7CStringERNS0_6VectorIcLj0ENS0_15CrashOnOverflowEEE(i5, i8);
  i13 = i5 | 0;
 } else {
  i3 = i5 | 0;
  i5 = HEAP32[i3 >> 2] | 0;
  if ((i5 | 0) == 0) {
   i14 = 0;
   i15 = 0;
  } else {
   i14 = HEAP32[i5 + 4 >> 2] | 0;
   i15 = i5 + 8 | 0;
  }
  __ZN3WTF6VectorIcLj0ENS_15CrashOnOverflowEE6appendIcEEvPKT_j(i8, i15, i14);
  i13 = i3;
 }
 i3 = i1 | 0;
 i1 = _i64Add((HEAP32[i9 >> 2] | 0) - i6 | 0, 0, HEAP32[i3 >> 2] | 0, HEAP32[i3 + 4 >> 2] | 0) | 0;
 HEAP32[i3 >> 2] = i1;
 HEAP32[i3 + 4 >> 2] = tempRet0;
 i3 = HEAP32[i13 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i13 = i3 | 0;
 i1 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF8fastFreeEPv(i3);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i13 >> 2] = i1;
  STACKTOP = i4;
  return;
 }
}
function __ZN3WTF6VectorIcLj0ENS_15CrashOnOverflowEE6appendIcEEvPKT_j(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i4 = i1 + 8 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i5 + i3 | 0;
 i7 = i1 + 4 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 do {
  if (i6 >>> 0 > i8 >>> 0) {
   i9 = i8 + 1 + (i8 >>> 2) | 0;
   i10 = i9 >>> 0 > 16 >>> 0 ? i9 : 16;
   i9 = i10 >>> 0 > i6 >>> 0 ? i10 : i6;
   if (i8 >>> 0 >= i9 >>> 0) {
    break;
   }
   i10 = i1 | 0;
   i11 = HEAP32[i10 >> 2] | 0;
   i12 = __ZN3WTF18fastMallocGoodSizeEj(i9) | 0;
   HEAP32[i7 >> 2] = i12;
   i9 = __ZN3WTF10fastMallocEj(i12) | 0;
   HEAP32[i10 >> 2] = i9;
   _memcpy(i9 | 0, i11 | 0, i5) | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   if ((HEAP32[i10 >> 2] | 0) == (i11 | 0)) {
    HEAP32[i10 >> 2] = 0;
    HEAP32[i7 >> 2] = 0;
   }
   __ZN3WTF8fastFreeEPv(i11);
  }
 } while (0);
 i7 = HEAP32[i4 >> 2] | 0;
 if (i6 >>> 0 < i7 >>> 0) {
  _WTFCrash();
 }
 i5 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  HEAP32[i4 >> 2] = i6;
  return;
 } else {
  i13 = 0;
 }
 while (1) {
  HEAP8[i5 + (i13 + i7) | 0] = HEAP8[i2 + i13 | 0] | 0;
  i13 = i13 + 1 | 0;
  if (i13 >>> 0 >= i3 >>> 0) {
   break;
  }
 }
 HEAP32[i4 >> 2] = i6;
 return;
}
function __ZN7WebCore12BlobDataItemD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 12 >> 2] | 0;
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
 i2 = HEAP32[i1 + 8 >> 2] | 0;
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
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = i2 | 0;
 if (((tempValue = HEAP32[i3 >> 2] | 0, HEAP32[i3 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  return;
 }
 i3 = i1 + 12 | 0;
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
 }
 i3 = i1 + 4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i1 + 8 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i4);
 }
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore11BlobBuilder6appendEN3WTF10PassRefPtrIN3JSC15ArrayBufferViewEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(H_BASE + 8 | 0, 1, 2);
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i2 = HEAP32[i3 + 16 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   i4 = 0;
  } else {
   if ((HEAP32[i2 + 12 >> 2] | 0) == 0) {
    i4 = 0;
    break;
   }
   i4 = HEAP32[i3 + 8 >> 2] | 0;
  }
 } while (0);
 i2 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 1](i3) | 0;
 i3 = __ZN7WebCore11BlobBuilder9getBufferEv(i1) | 0;
 i5 = i3 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 __ZN3WTF6VectorIcLj0ENS_15CrashOnOverflowEE6appendIcEEvPKT_j(i3, i4, i2);
 i2 = i1 | 0;
 i1 = _i64Add((HEAP32[i5 >> 2] | 0) - i6 | 0, 0, HEAP32[i2 >> 2] | 0, HEAP32[i2 + 4 >> 2] | 0) | 0;
 HEAP32[i2 >> 2] = i1;
 HEAP32[i2 + 4 >> 2] = tempRet0;
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
function __ZN7WebCore11BlobBuilder6appendEPN3JSC11ArrayBufferE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(H_BASE + 8 | 0, 0, 2);
 if ((i2 | 0) == 0) {
  return;
 }
 i3 = HEAP32[i2 + 12 >> 2] | 0;
 i4 = HEAP32[i2 + 16 >> 2] | 0;
 i2 = __ZN7WebCore11BlobBuilder9getBufferEv(i1) | 0;
 i5 = i2 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 __ZN3WTF6VectorIcLj0ENS_15CrashOnOverflowEE6appendIcEEvPKT_j(i2, i3, i4);
 i4 = i1 | 0;
 i1 = _i64Add((HEAP32[i5 >> 2] | 0) - i6 | 0, 0, HEAP32[i4 >> 2] | 0, HEAP32[i4 + 4 >> 2] | 0) | 0;
 HEAP32[i4 >> 2] = i1;
 HEAP32[i4 + 4 >> 2] = tempRet0;
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
function __ZN7WebCore11BlobBuilder15appendBytesDataEPKvj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = __ZN7WebCore11BlobBuilder9getBufferEv(i1) | 0;
 i5 = i4 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 __ZN3WTF6VectorIcLj0ENS_15CrashOnOverflowEE6appendIcEEvPKT_j(i4, i2, i3);
 i3 = i1 | 0;
 i1 = _i64Add((HEAP32[i5 >> 2] | 0) - i6 | 0, 0, HEAP32[i3 >> 2] | 0, HEAP32[i3 + 4 >> 2] | 0) | 0;
 HEAP32[i3 >> 2] = i1;
 HEAP32[i3 + 4 >> 2] = tempRet0;
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
function __ZN7WebCore11BlobBuilderC2Ev(i1) {
 i1 = i1 | 0;
 _memset(i1 | 0, 0, 20) | 0;
 return;
}
function __ZN7WebCore11BlobBuilderC1Ev(i1) {
 i1 = i1 | 0;
 _memset(i1 | 0, 0, 20) | 0;
 return;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 3](i2 | 0);
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
function __ZN3WTF15CrashOnOverflow10overflowedEv() {
 _WTFCrash();
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
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_ii = [b0,b0];
  var FUNCTION_TABLE_v = [b1,b1];
  var FUNCTION_TABLE_iii = [b2,b2];
  var FUNCTION_TABLE_vi = [b3,b3,__ZN7WebCore11BlobBuilderC2Ev,b3];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_vi: dynCall_vi };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_vi": invoke_vi, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "cttz_i8": cttz_i8, "ctlz_i8": ctlz_i8, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore12BlobDataItem11toEndOfFileE": __ZN7WebCore12BlobDataItem11toEndOfFileE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN3WTF6VectorIN7WebCore12BlobDataItemELj0ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore11BlobBuilder7getBlobERKN3WTF6StringE","__ZN7WebCore12BlobDataItemD2Ev","__ZN7WebCore11BlobBuilder6appendEN3WTF10PassRefPtrIN3JSC15ArrayBufferViewEEE","__ZN7WebCore11BlobBuilder6appendERKN3WTF6StringES4_","__ZN3WTF6VectorIcLj0ENS_15CrashOnOverflowEE6appendIcEEvPKT_j","_memset","__ZN3WTF6VectorIN7WebCore12BlobDataItemELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_","_memcpy","__ZN7WebCore11BlobBuilder6appendEPNS_4BlobE","__ZN7WebCore11BlobBuilderC2Ev","__ZN7WebCore11BlobBuilder15appendBytesDataEPKvj","__ZN7WebCore11BlobBuilder9getBufferEv","__ZN7WebCore11BlobBuilder6appendEPN3JSC11ArrayBufferE","_i64Add","_i64Subtract","_bitshift64Shl","_bitshift64Lshr","_bitshift64Ashr","_llvm_ctlz_i32","_llvm_cttz_i32"]

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
H_BASE = parentModule["_malloc"](8 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 8;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore7RawDataC1Ev;
var __ZN7WebCore14BlobDataHandleC1ENSt3__110unique_ptrINS_8BlobDataENS1_14default_deleteIS3_EEEEx;
var __ZN7WebCore14BlobDataHandleD1Ev;
/* memory initializer */ allocate([255,255,255,255,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
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
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZN7WebCore12BlobDataItem11toEndOfFileE=(H_BASE+8)|0;
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
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore8BlobData10appendBlobERKNS_3URLExx(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i8 = i7 | 0;
 i9 = i1 + 8 | 0;
 i10 = i8 | 0;
 HEAP32[i10 >> 2] = 2;
 i11 = i8 + 4 | 0;
 HEAP32[i11 >> 2] = 0;
 i12 = i8 + 8 | 0;
 HEAP32[i12 >> 2] = 0;
 i13 = i8 + 12 | 0;
 i14 = HEAP32[i2 >> 2] | 0;
 HEAP32[i13 >> 2] = i14;
 if ((i14 | 0) == 0) {
  i15 = 0;
  i16 = i8 + 16 | 0;
 } else {
  i17 = i14 | 0;
  HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 2;
  i17 = i8 + 16 | 0;
  i15 = HEAP8[i17] & -4;
  i16 = i17;
 }
 i17 = HEAP8[i2 + 4 | 0] | 0;
 HEAP8[i16] = i15 | i17 & 1 | i17 & 2;
 i17 = i8 + 20 | 0;
 HEAP32[i17 >> 2] = HEAP32[i2 + 8 >> 2];
 i15 = i8 + 24 | 0;
 HEAP32[i15 >> 2] = HEAP32[i2 + 12 >> 2];
 i14 = i8 + 28 | 0;
 HEAP32[i14 >> 2] = HEAP32[i2 + 16 >> 2];
 i18 = i8 + 32 | 0;
 HEAP32[i18 >> 2] = HEAP32[i2 + 20 >> 2];
 i19 = i8 + 36 | 0;
 HEAP32[i19 >> 2] = HEAP32[i2 + 24 >> 2];
 i20 = i8 + 40 | 0;
 HEAP32[i20 >> 2] = HEAP32[i2 + 28 >> 2];
 i21 = i8 + 44 | 0;
 HEAP32[i21 >> 2] = HEAP32[i2 + 32 >> 2];
 i22 = i8 + 48 | 0;
 HEAP32[i22 >> 2] = HEAP32[i2 + 36 >> 2];
 i23 = i8 + 52 | 0;
 HEAP32[i23 >> 2] = HEAP32[i2 + 40 >> 2];
 i24 = i8 + 56 | 0;
 HEAP32[i24 >> 2] = HEAP32[i2 + 44 >> 2];
 i2 = i8 + 64 | 0;
 HEAP32[i2 >> 2] = i3;
 HEAP32[i2 + 4 >> 2] = i4;
 i4 = i8 + 72 | 0;
 HEAP32[i4 >> 2] = i5;
 HEAP32[i4 + 4 >> 2] = i6;
 i6 = i8 + 80 | 0;
 HEAPF64[i6 >> 3] = +NaN;
 i5 = i1 + 16 | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 | 0) == (HEAP32[i1 + 12 >> 2] | 0)) {
  __ZN3WTF6VectorIN7WebCore12BlobDataItemELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_(i9, i8);
 } else {
  i8 = HEAP32[i9 >> 2] | 0;
  HEAP32[i8 + (i3 * 88 & -1) >> 2] = HEAP32[i10 >> 2];
  i10 = HEAP32[i11 >> 2] | 0;
  HEAP32[i11 >> 2] = 0;
  HEAP32[i8 + (i3 * 88 & -1) + 4 >> 2] = i10;
  i10 = HEAP32[i12 >> 2] | 0;
  HEAP32[i12 >> 2] = 0;
  HEAP32[i8 + (i3 * 88 & -1) + 8 >> 2] = i10;
  i10 = HEAP32[i13 >> 2] | 0;
  HEAP32[i13 >> 2] = 0;
  HEAP32[i8 + (i3 * 88 & -1) + 12 >> 2] = i10;
  i10 = i8 + (i3 * 88 & -1) + 16 | 0;
  i9 = HEAP8[i10] & -2 | HEAP8[i16] & 1;
  HEAP8[i10] = i9;
  HEAP8[i10] = i9 & -3 | HEAP8[i16] & 2;
  HEAP32[i8 + (i3 * 88 & -1) + 20 >> 2] = HEAP32[i17 >> 2];
  HEAP32[i8 + (i3 * 88 & -1) + 24 >> 2] = HEAP32[i15 >> 2];
  HEAP32[i8 + (i3 * 88 & -1) + 28 >> 2] = HEAP32[i14 >> 2];
  HEAP32[i8 + (i3 * 88 & -1) + 32 >> 2] = HEAP32[i18 >> 2];
  HEAP32[i8 + (i3 * 88 & -1) + 36 >> 2] = HEAP32[i19 >> 2];
  HEAP32[i8 + (i3 * 88 & -1) + 40 >> 2] = HEAP32[i20 >> 2];
  HEAP32[i8 + (i3 * 88 & -1) + 44 >> 2] = HEAP32[i21 >> 2];
  HEAP32[i8 + (i3 * 88 & -1) + 48 >> 2] = HEAP32[i22 >> 2];
  HEAP32[i8 + (i3 * 88 & -1) + 52 >> 2] = HEAP32[i23 >> 2];
  HEAP32[i8 + (i3 * 88 & -1) + 56 >> 2] = HEAP32[i24 >> 2];
  i24 = i8 + (i3 * 88 & -1) + 64 | 0;
  i23 = HEAP32[i2 + 4 >> 2] | 0;
  HEAP32[i24 >> 2] = HEAP32[i2 >> 2];
  HEAP32[i24 + 4 >> 2] = i23;
  i23 = i8 + (i3 * 88 & -1) + 72 | 0;
  i24 = HEAP32[i4 + 4 >> 2] | 0;
  HEAP32[i23 >> 2] = HEAP32[i4 >> 2];
  HEAP32[i23 + 4 >> 2] = i24;
  HEAPF64[i8 + (i3 * 88 & -1) + 80 >> 3] = +HEAPF64[i6 >> 3];
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 i5 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i13 = i5 | 0;
   i6 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i13 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i12 = i5 | 0;
   i6 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i12 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i11 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i11 = i5 | 0;
 i6 = i5 | 0;
 if (((tempValue = HEAP32[i6 >> 2] | 0, HEAP32[i6 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  STACKTOP = i7;
  return;
 }
 i6 = i11 + 12 | 0;
 if ((HEAP32[i6 >> 2] | 0) != 0) {
  HEAP32[i6 >> 2] = 0;
 }
 i6 = i11 + 4 | 0;
 i12 = HEAP32[i6 >> 2] | 0;
 if ((i12 | 0) != 0) {
  HEAP32[i6 >> 2] = 0;
  HEAP32[i11 + 8 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i12);
 }
 __ZN3WTF8fastFreeEPv(i5);
 STACKTOP = i7;
 return;
}
function __ZN7WebCore8BlobData10appendFileERKN3WTF6StringExxd(i1, i2, i3, i4, i5, i6, d7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 d7 = +d7;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i9 = i8 | 0;
 i10 = i1 + 8 | 0;
 i11 = i9 | 0;
 HEAP32[i11 >> 2] = 1;
 i12 = i9 + 4 | 0;
 HEAP32[i12 >> 2] = 0;
 i13 = i9 + 8 | 0;
 i14 = HEAP32[i2 >> 2] | 0;
 HEAP32[i13 >> 2] = i14;
 if ((i14 | 0) != 0) {
  i2 = i14 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 i2 = i9 + 12 | 0;
 HEAP32[i2 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i2);
 i2 = i9 + 64 | 0;
 HEAP32[i2 >> 2] = i3;
 HEAP32[i2 + 4 >> 2] = i4;
 i4 = i9 + 72 | 0;
 HEAP32[i4 >> 2] = i5;
 HEAP32[i4 + 4 >> 2] = i6;
 i6 = i9 + 80 | 0;
 HEAPF64[i6 >> 3] = d7;
 i5 = i1 + 16 | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 | 0) == (HEAP32[i1 + 12 >> 2] | 0)) {
  __ZN3WTF6VectorIN7WebCore12BlobDataItemELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_(i10, i9);
  i15 = i9 + 12 | 0;
 } else {
  i1 = HEAP32[i10 >> 2] | 0;
  HEAP32[i1 + (i3 * 88 & -1) >> 2] = HEAP32[i11 >> 2];
  i11 = HEAP32[i12 >> 2] | 0;
  HEAP32[i12 >> 2] = 0;
  HEAP32[i1 + (i3 * 88 & -1) + 4 >> 2] = i11;
  i11 = HEAP32[i13 >> 2] | 0;
  HEAP32[i13 >> 2] = 0;
  HEAP32[i1 + (i3 * 88 & -1) + 8 >> 2] = i11;
  i11 = i9 + 12 | 0;
  i10 = HEAP32[i11 >> 2] | 0;
  HEAP32[i11 >> 2] = 0;
  HEAP32[i1 + (i3 * 88 & -1) + 12 >> 2] = i10;
  i10 = i9 + 16 | 0;
  i14 = i1 + (i3 * 88 & -1) + 16 | 0;
  i16 = HEAP8[i14] & -2 | HEAP8[i10] & 1;
  HEAP8[i14] = i16;
  HEAP8[i14] = i16 & -3 | HEAP8[i10] & 2;
  HEAP32[i1 + (i3 * 88 & -1) + 20 >> 2] = HEAP32[i9 + 20 >> 2];
  HEAP32[i1 + (i3 * 88 & -1) + 24 >> 2] = HEAP32[i9 + 24 >> 2];
  HEAP32[i1 + (i3 * 88 & -1) + 28 >> 2] = HEAP32[i9 + 28 >> 2];
  HEAP32[i1 + (i3 * 88 & -1) + 32 >> 2] = HEAP32[i9 + 32 >> 2];
  HEAP32[i1 + (i3 * 88 & -1) + 36 >> 2] = HEAP32[i9 + 36 >> 2];
  HEAP32[i1 + (i3 * 88 & -1) + 40 >> 2] = HEAP32[i9 + 40 >> 2];
  HEAP32[i1 + (i3 * 88 & -1) + 44 >> 2] = HEAP32[i9 + 44 >> 2];
  HEAP32[i1 + (i3 * 88 & -1) + 48 >> 2] = HEAP32[i9 + 48 >> 2];
  HEAP32[i1 + (i3 * 88 & -1) + 52 >> 2] = HEAP32[i9 + 52 >> 2];
  HEAP32[i1 + (i3 * 88 & -1) + 56 >> 2] = HEAP32[i9 + 56 >> 2];
  i9 = i1 + (i3 * 88 & -1) + 64 | 0;
  i10 = HEAP32[i2 + 4 >> 2] | 0;
  HEAP32[i9 >> 2] = HEAP32[i2 >> 2];
  HEAP32[i9 + 4 >> 2] = i10;
  i10 = i1 + (i3 * 88 & -1) + 72 | 0;
  i9 = HEAP32[i4 + 4 >> 2] | 0;
  HEAP32[i10 >> 2] = HEAP32[i4 >> 2];
  HEAP32[i10 + 4 >> 2] = i9;
  HEAPF64[i1 + (i3 * 88 & -1) + 80 >> 3] = +HEAPF64[i6 >> 3];
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
  i15 = i11;
 }
 i11 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i15 = i11 | 0;
   i5 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i15 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i11 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i13 = i11 | 0;
   i5 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i13 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i11 = HEAP32[i12 >> 2] | 0;
 if ((i11 | 0) == 0) {
  STACKTOP = i8;
  return;
 }
 i12 = i11 | 0;
 i5 = i11 | 0;
 if (((tempValue = HEAP32[i5 >> 2] | 0, HEAP32[i5 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  STACKTOP = i8;
  return;
 }
 i5 = i12 + 12 | 0;
 if ((HEAP32[i5 >> 2] | 0) != 0) {
  HEAP32[i5 >> 2] = 0;
 }
 i5 = i12 + 4 | 0;
 i13 = HEAP32[i5 >> 2] | 0;
 if ((i13 | 0) != 0) {
  HEAP32[i5 >> 2] = 0;
  HEAP32[i12 + 8 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i13);
 }
 __ZN3WTF8fastFreeEPv(i11);
 STACKTOP = i8;
 return;
}
function __ZN7WebCore8BlobData10appendDataEN3WTF10PassRefPtrINS_7RawDataEEExx(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i8 = i7 | 0;
 i9 = i1 + 8 | 0;
 i10 = i2 | 0;
 i2 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 i10 = i8 | 0;
 HEAP32[i10 >> 2] = 0;
 i11 = i8 + 4 | 0;
 HEAP32[i11 >> 2] = i2;
 i2 = i8 + 8 | 0;
 HEAP32[i2 >> 2] = 0;
 i12 = i8 + 12 | 0;
 HEAP32[i12 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i12);
 i12 = i8 + 64 | 0;
 HEAP32[i12 >> 2] = i3;
 HEAP32[i12 + 4 >> 2] = i4;
 i4 = i8 + 72 | 0;
 HEAP32[i4 >> 2] = i5;
 HEAP32[i4 + 4 >> 2] = i6;
 i6 = i8 + 80 | 0;
 HEAPF64[i6 >> 3] = +NaN;
 i5 = i1 + 16 | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 | 0) == (HEAP32[i1 + 12 >> 2] | 0)) {
  __ZN3WTF6VectorIN7WebCore12BlobDataItemELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_(i9, i8);
  i13 = i8 + 12 | 0;
 } else {
  i1 = HEAP32[i9 >> 2] | 0;
  HEAP32[i1 + (i3 * 88 & -1) >> 2] = HEAP32[i10 >> 2];
  i10 = HEAP32[i11 >> 2] | 0;
  HEAP32[i11 >> 2] = 0;
  HEAP32[i1 + (i3 * 88 & -1) + 4 >> 2] = i10;
  i10 = HEAP32[i2 >> 2] | 0;
  HEAP32[i2 >> 2] = 0;
  HEAP32[i1 + (i3 * 88 & -1) + 8 >> 2] = i10;
  i10 = i8 + 12 | 0;
  i9 = HEAP32[i10 >> 2] | 0;
  HEAP32[i10 >> 2] = 0;
  HEAP32[i1 + (i3 * 88 & -1) + 12 >> 2] = i9;
  i9 = i8 + 16 | 0;
  i14 = i1 + (i3 * 88 & -1) + 16 | 0;
  i15 = HEAP8[i14] & -2 | HEAP8[i9] & 1;
  HEAP8[i14] = i15;
  HEAP8[i14] = i15 & -3 | HEAP8[i9] & 2;
  HEAP32[i1 + (i3 * 88 & -1) + 20 >> 2] = HEAP32[i8 + 20 >> 2];
  HEAP32[i1 + (i3 * 88 & -1) + 24 >> 2] = HEAP32[i8 + 24 >> 2];
  HEAP32[i1 + (i3 * 88 & -1) + 28 >> 2] = HEAP32[i8 + 28 >> 2];
  HEAP32[i1 + (i3 * 88 & -1) + 32 >> 2] = HEAP32[i8 + 32 >> 2];
  HEAP32[i1 + (i3 * 88 & -1) + 36 >> 2] = HEAP32[i8 + 36 >> 2];
  HEAP32[i1 + (i3 * 88 & -1) + 40 >> 2] = HEAP32[i8 + 40 >> 2];
  HEAP32[i1 + (i3 * 88 & -1) + 44 >> 2] = HEAP32[i8 + 44 >> 2];
  HEAP32[i1 + (i3 * 88 & -1) + 48 >> 2] = HEAP32[i8 + 48 >> 2];
  HEAP32[i1 + (i3 * 88 & -1) + 52 >> 2] = HEAP32[i8 + 52 >> 2];
  HEAP32[i1 + (i3 * 88 & -1) + 56 >> 2] = HEAP32[i8 + 56 >> 2];
  i8 = i1 + (i3 * 88 & -1) + 64 | 0;
  i9 = HEAP32[i12 + 4 >> 2] | 0;
  HEAP32[i8 >> 2] = HEAP32[i12 >> 2];
  HEAP32[i8 + 4 >> 2] = i9;
  i9 = i1 + (i3 * 88 & -1) + 72 | 0;
  i8 = HEAP32[i4 + 4 >> 2] | 0;
  HEAP32[i9 >> 2] = HEAP32[i4 >> 2];
  HEAP32[i9 + 4 >> 2] = i8;
  HEAPF64[i1 + (i3 * 88 & -1) + 80 >> 3] = +HEAPF64[i6 >> 3];
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
  i13 = i10;
 }
 i10 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i13 = i10 | 0;
   i5 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i13 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i10 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i2 = i10 | 0;
   i5 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i2 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i10 = HEAP32[i11 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i11 = i10 | 0;
 i5 = i10 | 0;
 if (((tempValue = HEAP32[i5 >> 2] | 0, HEAP32[i5 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  STACKTOP = i7;
  return;
 }
 i5 = i11 + 12 | 0;
 if ((HEAP32[i5 >> 2] | 0) != 0) {
  HEAP32[i5 >> 2] = 0;
 }
 i5 = i11 + 4 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i5 >> 2] = 0;
  HEAP32[i11 + 8 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 __ZN3WTF8fastFreeEPv(i10);
 STACKTOP = i7;
 return;
}
function __ZN7WebCore8BlobData10appendFileERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i4 = i3 | 0;
 i5 = i1 + 8 | 0;
 i6 = i4 | 0;
 HEAP32[i6 >> 2] = 1;
 i7 = i4 + 4 | 0;
 HEAP32[i7 >> 2] = 0;
 i8 = i4 + 8 | 0;
 i9 = HEAP32[i2 >> 2] | 0;
 HEAP32[i8 >> 2] = i9;
 if ((i9 | 0) != 0) {
  i2 = i9 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 i2 = i4 + 12 | 0;
 HEAP32[i2 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i2);
 i2 = i4 + 64 | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i2 + 4 >> 2] = 0;
 i9 = i4 + 72 | 0;
 HEAP32[i9 >> 2] = -1;
 HEAP32[i9 + 4 >> 2] = -1;
 i10 = i4 + 80 | 0;
 HEAPF64[i10 >> 3] = +NaN;
 i11 = i1 + 16 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == (HEAP32[i1 + 12 >> 2] | 0)) {
  __ZN3WTF6VectorIN7WebCore12BlobDataItemELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_(i5, i4);
  i13 = i4 + 12 | 0;
 } else {
  i1 = HEAP32[i5 >> 2] | 0;
  HEAP32[i1 + (i12 * 88 & -1) >> 2] = HEAP32[i6 >> 2];
  i6 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = 0;
  HEAP32[i1 + (i12 * 88 & -1) + 4 >> 2] = i6;
  i6 = HEAP32[i8 >> 2] | 0;
  HEAP32[i8 >> 2] = 0;
  HEAP32[i1 + (i12 * 88 & -1) + 8 >> 2] = i6;
  i6 = i4 + 12 | 0;
  i5 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = 0;
  HEAP32[i1 + (i12 * 88 & -1) + 12 >> 2] = i5;
  i5 = i4 + 16 | 0;
  i14 = i1 + (i12 * 88 & -1) + 16 | 0;
  i15 = HEAP8[i14] & -2 | HEAP8[i5] & 1;
  HEAP8[i14] = i15;
  HEAP8[i14] = i15 & -3 | HEAP8[i5] & 2;
  HEAP32[i1 + (i12 * 88 & -1) + 20 >> 2] = HEAP32[i4 + 20 >> 2];
  HEAP32[i1 + (i12 * 88 & -1) + 24 >> 2] = HEAP32[i4 + 24 >> 2];
  HEAP32[i1 + (i12 * 88 & -1) + 28 >> 2] = HEAP32[i4 + 28 >> 2];
  HEAP32[i1 + (i12 * 88 & -1) + 32 >> 2] = HEAP32[i4 + 32 >> 2];
  HEAP32[i1 + (i12 * 88 & -1) + 36 >> 2] = HEAP32[i4 + 36 >> 2];
  HEAP32[i1 + (i12 * 88 & -1) + 40 >> 2] = HEAP32[i4 + 40 >> 2];
  HEAP32[i1 + (i12 * 88 & -1) + 44 >> 2] = HEAP32[i4 + 44 >> 2];
  HEAP32[i1 + (i12 * 88 & -1) + 48 >> 2] = HEAP32[i4 + 48 >> 2];
  HEAP32[i1 + (i12 * 88 & -1) + 52 >> 2] = HEAP32[i4 + 52 >> 2];
  HEAP32[i1 + (i12 * 88 & -1) + 56 >> 2] = HEAP32[i4 + 56 >> 2];
  i4 = i1 + (i12 * 88 & -1) + 64 | 0;
  i5 = HEAP32[i2 + 4 >> 2] | 0;
  HEAP32[i4 >> 2] = HEAP32[i2 >> 2];
  HEAP32[i4 + 4 >> 2] = i5;
  i5 = i1 + (i12 * 88 & -1) + 72 | 0;
  i4 = HEAP32[i9 + 4 >> 2] | 0;
  HEAP32[i5 >> 2] = HEAP32[i9 >> 2];
  HEAP32[i5 + 4 >> 2] = i4;
  HEAPF64[i1 + (i12 * 88 & -1) + 80 >> 3] = +HEAPF64[i10 >> 3];
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
  i13 = i6;
 }
 i6 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i13 = i6 | 0;
   i11 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i13 >> 2] = i11;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i8 = i6 | 0;
   i11 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i8 >> 2] = i11;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i7 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i7 = i6 | 0;
 i11 = i6 | 0;
 if (((tempValue = HEAP32[i11 >> 2] | 0, HEAP32[i11 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  STACKTOP = i3;
  return;
 }
 i11 = i7 + 12 | 0;
 if ((HEAP32[i11 >> 2] | 0) != 0) {
  HEAP32[i11 >> 2] = 0;
 }
 i11 = i7 + 4 | 0;
 i8 = HEAP32[i11 >> 2] | 0;
 if ((i8 | 0) != 0) {
  HEAP32[i11 >> 2] = 0;
  HEAP32[i7 + 8 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i8);
 }
 __ZN3WTF8fastFreeEPv(i6);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore14BlobDataHandleC2ENSt3__110unique_ptrINS_8BlobDataENS1_14default_deleteIS3_EEEEx(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i3 = i4 | 0;
 i5 = i4 + 48 | 0;
 HEAP32[i1 >> 2] = 1;
 i6 = i1 + 4 | 0;
 i7 = i6 | 0;
 HEAP32[i7 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i6);
 __ZN7WebCore7BlobURL17createInternalURLEv(i3);
 i8 = i3 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 i10 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i9;
 do {
  if ((i10 | 0) != 0) {
   i9 = i10 | 0;
   i7 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i9 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i10 = HEAP8[i3 + 4 | 0] | 0;
 i7 = i1 + 8 | 0;
 HEAP8[i7] = HEAP8[i7] & -4 | i10 & 1 | i10 & 2;
 HEAP32[i1 + 12 >> 2] = HEAP32[i3 + 8 >> 2];
 HEAP32[i1 + 16 >> 2] = HEAP32[i3 + 12 >> 2];
 HEAP32[i1 + 20 >> 2] = HEAP32[i3 + 16 >> 2];
 HEAP32[i1 + 24 >> 2] = HEAP32[i3 + 20 >> 2];
 HEAP32[i1 + 28 >> 2] = HEAP32[i3 + 24 >> 2];
 HEAP32[i1 + 32 >> 2] = HEAP32[i3 + 28 >> 2];
 HEAP32[i1 + 36 >> 2] = HEAP32[i3 + 32 >> 2];
 HEAP32[i1 + 40 >> 2] = HEAP32[i3 + 36 >> 2];
 HEAP32[i1 + 44 >> 2] = HEAP32[i3 + 40 >> 2];
 HEAP32[i1 + 48 >> 2] = HEAP32[i3 + 44 >> 2];
 i3 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i8 = i3 | 0;
   i1 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i8 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i3 = i5 | 0;
 HEAP32[i3 >> 2] = i2;
 __ZN7WebCore22ThreadableBlobRegistry15registerBlobURLERKNS_3URLENSt3__110unique_ptrINS_8BlobDataENS4_14default_deleteIS6_EEEE(i6, i5);
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i3 = i5 + 16 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 i2 = i5 + 8 | 0;
 if ((i6 | 0) != 0) {
  i1 = HEAP32[i2 >> 2] | 0;
  i8 = i1 + (i6 * 88 & -1) | 0;
  i6 = i1;
  while (1) {
   __ZN7WebCore12BlobDataItemD2Ev(i6);
   i6 = i6 + 88 | 0;
   if ((i6 | 0) == (i8 | 0)) {
    break;
   }
  }
  HEAP32[i3 >> 2] = 0;
 }
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i5 + 12 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i5 + 4 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 | 0;
   i8 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i2 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i8 = i3 | 0;
   i2 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i8 >> 2] = i2;
    break;
   }
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i5);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore14BlobDataHandleC1ENSt3__110unique_ptrINS_8BlobDataENS1_14default_deleteIS3_EEEEx(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i3 = i4 | 0;
 i5 = i4 + 48 | 0;
 HEAP32[i1 >> 2] = 1;
 i6 = i1 + 4 | 0;
 i7 = i6 | 0;
 HEAP32[i7 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i6);
 __ZN7WebCore7BlobURL17createInternalURLEv(i3);
 i8 = i3 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 i10 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i9;
 do {
  if ((i10 | 0) != 0) {
   i9 = i10 | 0;
   i7 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i9 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i10 = HEAP8[i3 + 4 | 0] | 0;
 i7 = i1 + 8 | 0;
 HEAP8[i7] = HEAP8[i7] & -4 | i10 & 1 | i10 & 2;
 HEAP32[i1 + 12 >> 2] = HEAP32[i3 + 8 >> 2];
 HEAP32[i1 + 16 >> 2] = HEAP32[i3 + 12 >> 2];
 HEAP32[i1 + 20 >> 2] = HEAP32[i3 + 16 >> 2];
 HEAP32[i1 + 24 >> 2] = HEAP32[i3 + 20 >> 2];
 HEAP32[i1 + 28 >> 2] = HEAP32[i3 + 24 >> 2];
 HEAP32[i1 + 32 >> 2] = HEAP32[i3 + 28 >> 2];
 HEAP32[i1 + 36 >> 2] = HEAP32[i3 + 32 >> 2];
 HEAP32[i1 + 40 >> 2] = HEAP32[i3 + 36 >> 2];
 HEAP32[i1 + 44 >> 2] = HEAP32[i3 + 40 >> 2];
 HEAP32[i1 + 48 >> 2] = HEAP32[i3 + 44 >> 2];
 i3 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i8 = i3 | 0;
   i1 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i8 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i3 = i5 | 0;
 HEAP32[i3 >> 2] = i2;
 __ZN7WebCore22ThreadableBlobRegistry15registerBlobURLERKNS_3URLENSt3__110unique_ptrINS_8BlobDataENS4_14default_deleteIS6_EEEE(i6, i5);
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i3 = i5 + 16 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 i2 = i5 + 8 | 0;
 if ((i6 | 0) != 0) {
  i1 = HEAP32[i2 >> 2] | 0;
  i8 = i1 + (i6 * 88 & -1) | 0;
  i6 = i1;
  while (1) {
   __ZN7WebCore12BlobDataItemD2Ev(i6);
   i6 = i6 + 88 | 0;
   if ((i6 | 0) == (i8 | 0)) {
    break;
   }
  }
  HEAP32[i3 >> 2] = 0;
 }
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i5 + 12 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i5 + 4 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 | 0;
   i8 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i2 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i8 = i3 | 0;
   i2 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i8 >> 2] = i2;
    break;
   }
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i5);
 STACKTOP = i4;
 return;
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
function __ZN7WebCore12BlobDataItem23detachFromCurrentThreadEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i1 + 8 | 0;
 __ZNKR3WTF6String12isolatedCopyEv(i3, i5);
 i6 = i3 | 0;
 i3 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i5 | 0;
 i5 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i3;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 | 0;
   i7 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i3 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i6 >> 2] | 0;
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
 i5 = i1 + 12 | 0;
 __ZNK7WebCore3URL4copyEv(i4, i5);
 i7 = i4 | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i3 = i5 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i6;
 do {
  if ((i5 | 0) != 0) {
   i6 = i5 | 0;
   i3 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i6 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i5 = HEAP8[i4 + 4 | 0] | 0;
 i3 = i1 + 16 | 0;
 HEAP8[i3] = HEAP8[i3] & -4 | i5 & 1 | i5 & 2;
 HEAP32[i1 + 20 >> 2] = HEAP32[i4 + 8 >> 2];
 HEAP32[i1 + 24 >> 2] = HEAP32[i4 + 12 >> 2];
 HEAP32[i1 + 28 >> 2] = HEAP32[i4 + 16 >> 2];
 HEAP32[i1 + 32 >> 2] = HEAP32[i4 + 20 >> 2];
 HEAP32[i1 + 36 >> 2] = HEAP32[i4 + 24 >> 2];
 HEAP32[i1 + 40 >> 2] = HEAP32[i4 + 28 >> 2];
 HEAP32[i1 + 44 >> 2] = HEAP32[i4 + 32 >> 2];
 HEAP32[i1 + 48 >> 2] = HEAP32[i4 + 36 >> 2];
 HEAP32[i1 + 52 >> 2] = HEAP32[i4 + 40 >> 2];
 HEAP32[i1 + 56 >> 2] = HEAP32[i4 + 44 >> 2];
 i4 = HEAP32[i7 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i7 = i4 | 0;
 i1 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i7 >> 2] = i1;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore8BlobData23detachFromCurrentThreadEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 __ZNKR3WTF6String12isolatedCopyEv(i3, i1 | 0);
 i5 = i3 | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i3;
 do {
  if ((i7 | 0) != 0) {
   i3 = i7 | 0;
   i6 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i3 >> 2] = i6;
    break;
   }
  }
 } while (0);
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
 i7 = i1 + 4 | 0;
 __ZNKR3WTF6String12isolatedCopyEv(i4, i7);
 i6 = i4 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 i5 = i7 | 0;
 i7 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i4;
 do {
  if ((i7 | 0) != 0) {
   i4 = i7 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i4 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
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
 i7 = i1 + 16 | 0;
 if ((HEAP32[i7 >> 2] | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i5 = i1 + 8 | 0;
 i1 = 0;
 while (1) {
  __ZN7WebCore12BlobDataItem23detachFromCurrentThreadEv((HEAP32[i5 >> 2] | 0) + (i1 * 88 & -1) | 0);
  i1 = i1 + 1 | 0;
  if (i1 >>> 0 >= (HEAP32[i7 >> 2] | 0) >>> 0) {
   break;
  }
 }
 STACKTOP = i2;
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
function __ZN7WebCore8BlobData9swapItemsERN3WTF6VectorINS_12BlobDataItemELj0ENS1_15CrashOnOverflowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = i1 + 16 | 0;
 i4 = i2 + 8 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i4 >> 2] = i5;
 i5 = i1 + 8 | 0;
 i4 = i2 | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i4 >> 2] = i3;
 i3 = i1 + 12 | 0;
 i1 = i2 + 4 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i1 >> 2] = i2;
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
function __ZN7WebCore8BlobData14setContentTypeERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i2 = i3 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 i2 = i1 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i3;
 if ((i1 | 0) == 0) {
  return;
 }
 i3 = i1 | 0;
 i2 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  return;
 } else {
  HEAP32[i3 >> 2] = i2;
  return;
 }
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
function __ZN7WebCore14BlobDataHandleD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 4 | 0;
 __ZN7WebCore22ThreadableBlobRegistry17unregisterBlobURLERKNS_3URLE(i2);
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  return;
 } else {
  HEAP32[i2 >> 2] = i3;
  return;
 }
}
function __ZN7WebCore14BlobDataHandleD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 4 | 0;
 __ZN7WebCore22ThreadableBlobRegistry17unregisterBlobURLERKNS_3URLE(i2);
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  return;
 } else {
  HEAP32[i2 >> 2] = i3;
  return;
 }
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function __ZN7WebCore7RawDataC2Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = 1;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = 0;
 return;
}
function __ZN7WebCore7RawDataC1Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = 1;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = 0;
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
function b4(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(4);
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 7](i2 | 0);
}
function __ZN7WebCore7RawData23detachFromCurrentThreadEv(i1) {
 i1 = i1 | 0;
 return;
}
function b3(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(3);
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
function b2() {
 abort(2);
}
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore7RawDataC2Ev,b0,__ZN7WebCore14BlobDataHandleD2Ev,b0,b0,b0];
  var FUNCTION_TABLE_ii = [b1,b1];
  var FUNCTION_TABLE_v = [b2,b2];
  var FUNCTION_TABLE_iii = [b3,b3];
  var FUNCTION_TABLE_viiii = [b4,b4,__ZN7WebCore14BlobDataHandleC2ENSt3__110unique_ptrINS_8BlobDataENS1_14default_deleteIS3_EEEEx,b4];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore8BlobData10appendBlobERKNS_3URLExx","_strlen","__ZN7WebCore14BlobDataHandleC2ENSt3__110unique_ptrINS_8BlobDataENS1_14default_deleteIS3_EEEEx","__ZN7WebCore12BlobDataItemD2Ev","__ZN3WTF6VectorIN7WebCore12BlobDataItemELj0ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN7WebCore14BlobDataHandleD2Ev","_memset","__ZN7WebCore8BlobData10appendFileERKN3WTF6StringE","__ZN7WebCore8BlobData14setContentTypeERKN3WTF6StringE","__ZN3WTF6VectorIN7WebCore12BlobDataItemELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_","_memcpy","__ZN7WebCore8BlobData10appendFileERKN3WTF6StringExxd","__ZN7WebCore8BlobData23detachFromCurrentThreadEv","__ZN7WebCore8BlobData10appendDataEN3WTF10PassRefPtrINS_7RawDataEEExx","__ZN7WebCore12BlobDataItem23detachFromCurrentThreadEv","__ZN7WebCore8BlobData9swapItemsERN3WTF6VectorINS_12BlobDataItemELj0ENS1_15CrashOnOverflowEEE","__ZN7WebCore7RawData23detachFromCurrentThreadEv","__ZN7WebCore7RawDataC2Ev"]

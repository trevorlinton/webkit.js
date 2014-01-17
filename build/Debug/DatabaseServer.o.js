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
H_BASE = parentModule["_malloc"](96 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 96;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_iiiii(index,a1,a2,a3,a4) {
  try {
    return Module["dynCall_iiiii"](index,a1,a2,a3,a4);
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
  var __ZTVN7WebCore14DatabaseServerE=(H_BASE+8)|0;
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
  var invoke_viiiii=env.invoke_viiiii;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_viiiiiiiiiiii=env.invoke_viiiiiiiiiiii;
  var invoke_iiiii=env.invoke_iiiii;
  var invoke_iiii=env.invoke_iiii;
  var invoke_viiiiiiiiiii=env.invoke_viiiiiiiiiii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore14DatabaseServer14createDatabaseERN3WTF6RefPtrINS_22DatabaseBackendContextEEENS_12DatabaseTypeERKNS1_6StringES9_S9_mbRNS_13DatabaseErrorERS7_(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11) {
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
 var i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i12 = i2 | 0;
 i13 = i2 + 8 | 0;
 do {
  if ((i4 | 0) == 0) {
   i14 = __ZN3WTF10fastMallocEj(224) | 0;
   i15 = i12 | 0;
   i16 = HEAP32[i3 >> 2] | 0;
   HEAP32[i15 >> 2] = i16;
   if ((i16 | 0) != 0) {
    i17 = i16 + 12 | 0;
    tempValue = HEAP32[i17 >> 2] | 0, HEAP32[i17 >> 2] = tempValue + 1, tempValue;
   }
   __ZN7WebCore8DatabaseC1EN3WTF10PassRefPtrINS_22DatabaseBackendContextEEERKNS1_6StringES7_S7_m(i14, i12, i5, i6, i7, i8);
   i17 = i14;
   i14 = HEAP32[i15 >> 2] | 0;
   if ((i14 | 0) == 0) {
    i18 = i17;
    break;
   }
   i15 = i14 + 12 | 0;
   i14 = i15 | 0;
   if (((tempValue = HEAP32[i14 >> 2] | 0, HEAP32[i14 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
    i18 = i17;
    break;
   }
   i14 = i15 - 12 | 0;
   if ((i14 | 0) == 0) {
    i18 = i17;
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 8 >> 2] & 7](i14);
   i18 = i17;
  } else if ((i4 | 0) == 1) {
   i17 = __ZN3WTF10fastMallocEj(168) | 0;
   i14 = i13 | 0;
   i15 = HEAP32[i3 >> 2] | 0;
   HEAP32[i14 >> 2] = i15;
   if ((i15 | 0) != 0) {
    i16 = i15 + 12 | 0;
    tempValue = HEAP32[i16 >> 2] | 0, HEAP32[i16 >> 2] = tempValue + 1, tempValue;
   }
   __ZN7WebCore12DatabaseSyncC1EN3WTF10PassRefPtrINS_22DatabaseBackendContextEEERKNS1_6StringES7_S7_m(i17, i13, i5, i6, i7, i8);
   i16 = i17;
   i17 = HEAP32[i14 >> 2] | 0;
   if ((i17 | 0) == 0) {
    i18 = i16;
    break;
   }
   i14 = i17 + 12 | 0;
   i17 = i14 | 0;
   if (((tempValue = HEAP32[i17 >> 2] | 0, HEAP32[i17 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
    i18 = i16;
    break;
   }
   i17 = i14 - 12 | 0;
   if ((i17 | 0) == 0) {
    i18 = i16;
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 8 >> 2] & 7](i17);
   i18 = i16;
  } else {
   i18 = 0;
  }
 } while (0);
 if (FUNCTION_TABLE_iiiii[HEAP32[(HEAP32[i18 >> 2] | 0) + 44 >> 2] & 1](i18, i9, i10, i11) | 0) {
  i11 = __ZN7WebCore15DatabaseTracker7trackerEv() | 0;
  __ZN7WebCore15DatabaseTracker18setDatabaseDetailsEPNS_14SecurityOriginERKN3WTF6StringES6_m(i11, __ZNK7WebCore22DatabaseBackendContext14securityOriginEv(HEAP32[i3 >> 2] | 0) | 0, i5, i7, i8);
  HEAP32[i1 >> 2] = i18;
  STACKTOP = i2;
  return;
 }
 HEAP32[i1 >> 2] = 0;
 if ((i18 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i1 = i18 + 4 | 0;
 i18 = i1 | 0;
 if (((tempValue = HEAP32[i18 >> 2] | 0, HEAP32[i18 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
  STACKTOP = i2;
  return;
 }
 i18 = i1 - 4 | 0;
 if ((i18 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 7](i18);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore14DatabaseServer12openDatabaseERN3WTF6RefPtrINS_22DatabaseBackendContextEEENS_12DatabaseTypeERKNS1_6StringES9_S9_mbRNS_13DatabaseErrorERS7_NS_22AbstractDatabaseServer11OpenAttemptE(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12) {
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
 var i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i14 = i13 | 0;
 if ((i12 | 0) == 1) {
  i15 = __ZN7WebCore15DatabaseTracker7trackerEv() | 0;
  if (__ZN7WebCore15DatabaseTracker25retryCanEstablishDatabaseEPNS_22DatabaseBackendContextERKN3WTF6StringEmRNS_13DatabaseErrorE(i15, HEAP32[i3 >> 2] | 0, i5, i8, i10) | 0) {
   i16 = 4;
  } else {
   i17 = 0;
  }
 } else if ((i12 | 0) == 0) {
  i12 = __ZN7WebCore15DatabaseTracker7trackerEv() | 0;
  if (__ZN7WebCore15DatabaseTracker20canEstablishDatabaseEPNS_22DatabaseBackendContextERKN3WTF6StringEmRNS_13DatabaseErrorE(i12, HEAP32[i3 >> 2] | 0, i5, i8, i10) | 0) {
   i16 = 4;
  } else {
   i17 = 0;
  }
 } else {
  i17 = 0;
 }
 if ((i16 | 0) == 4) {
  FUNCTION_TABLE_viiiiiiiiiii[HEAP32[(HEAP32[i2 >> 2] | 0) + 76 >> 2] & 3](i14, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11);
  i11 = i14 | 0;
  i14 = HEAP32[i11 >> 2] | 0;
  HEAP32[i11 >> 2] = 0;
  i17 = i14;
 }
 HEAP32[i1 >> 2] = i17;
 STACKTOP = i13;
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_viiiiiiiiiiii + 2;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_iiii + 4;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_iiii + 2;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_viiiiiiiiiii + 2;
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
function __ZN7WebCore14DatabaseServer22databaseNamesForOriginEPNS_14SecurityOriginERN3WTF6VectorINS3_6StringELj0ENS3_15CrashOnOverflowEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return __ZN7WebCore15DatabaseTracker22databaseNamesForOriginEPNS_14SecurityOriginERN3WTF6VectorINS3_6StringELj0ENS3_15CrashOnOverflowEEE(__ZN7WebCore15DatabaseTracker7trackerEv() | 0, i2, i3) | 0;
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
 FUNCTION_TABLE_viiiiiiiiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0, i9 | 0, i10 | 0, i11 | 0, i12 | 0);
}
function __ZN7WebCore14DatabaseServer19fullPathForDatabaseEPNS_14SecurityOriginERKN3WTF6StringEb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZN7WebCore15DatabaseTracker19fullPathForDatabaseEPNS_14SecurityOriginERKN3WTF6StringEb(i1, __ZN7WebCore15DatabaseTracker7trackerEv() | 0, i3, i4, i5);
 return;
}
function __ZN7WebCore14DatabaseServer7originsERN3WTF6VectorINS1_6RefPtrINS_14SecurityOriginEEELj0ENS1_15CrashOnOverflowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore15DatabaseTracker7originsERN3WTF6VectorINS1_6RefPtrINS_14SecurityOriginEEELj0ENS1_15CrashOnOverflowEEE(__ZN7WebCore15DatabaseTracker7trackerEv() | 0, i2);
 return;
}
function __ZN7WebCore14DatabaseServer23detailsForNameAndOriginERKN3WTF6StringEPNS_14SecurityOriginE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore15DatabaseTracker23detailsForNameAndOriginERKN3WTF6StringEPNS_14SecurityOriginE(i1, __ZN7WebCore15DatabaseTracker7trackerEv() | 0, i3, i4);
 return;
}
function __ZN7WebCore14DatabaseServer14deleteDatabaseEPNS_14SecurityOriginERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return __ZN7WebCore15DatabaseTracker14deleteDatabaseEPNS_14SecurityOriginERKN3WTF6StringE(__ZN7WebCore15DatabaseTracker7trackerEv() | 0, i2, i3) | 0;
}
function __ZN7WebCore14DatabaseServer31interruptAllDatabasesForContextEPKNS_22DatabaseBackendContextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore15DatabaseTracker31interruptAllDatabasesForContextEPKNS_22DatabaseBackendContextE(__ZN7WebCore15DatabaseTracker7trackerEv() | 0, i2);
 return;
}
function __ZN7WebCore14DatabaseServer14usageForOriginEPNS_14SecurityOriginE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i1 = __ZN7WebCore15DatabaseTracker14usageForOriginEPNS_14SecurityOriginE(__ZN7WebCore15DatabaseTracker7trackerEv() | 0, i2) | 0;
 return (tempRet0 = tempRet0, i1) | 0;
}
function __ZN7WebCore14DatabaseServer14quotaForOriginEPNS_14SecurityOriginE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i1 = __ZN7WebCore15DatabaseTracker14quotaForOriginEPNS_14SecurityOriginE(__ZN7WebCore15DatabaseTracker7trackerEv() | 0, i2) | 0;
 return (tempRet0 = tempRet0, i1) | 0;
}
function __ZN7WebCore14DatabaseServer8setQuotaEPNS_14SecurityOriginEy(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore15DatabaseTracker8setQuotaEPNS_14SecurityOriginEy(__ZN7WebCore15DatabaseTracker7trackerEv() | 0, i2, i3, i4);
 return;
}
function __ZN7WebCore14DatabaseServer24setDatabaseDirectoryPathERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore15DatabaseTracker24setDatabaseDirectoryPathERKN3WTF6StringE(__ZN7WebCore15DatabaseTracker7trackerEv() | 0, i2);
 return;
}
function __ZN7WebCore14DatabaseServer17hasEntryForOriginEPNS_14SecurityOriginE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore15DatabaseTracker17hasEntryForOriginEPNS_14SecurityOriginE(__ZN7WebCore15DatabaseTracker7trackerEv() | 0, i2) | 0;
}
function b4(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12) {
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
 abort(4);
}
function __ZN7WebCore14DatabaseServer9setClientEPNS_21DatabaseManagerClientE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore15DatabaseTracker9setClientEPNS_21DatabaseManagerClientE(__ZN7WebCore15DatabaseTracker7trackerEv() | 0, i2);
 return;
}
function __ZN7WebCore14DatabaseServer12deleteOriginEPNS_14SecurityOriginE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore15DatabaseTracker12deleteOriginEPNS_14SecurityOriginE(__ZN7WebCore15DatabaseTracker7trackerEv() | 0, i2) | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function b7(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11) {
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
 abort(7);
}
function __ZNK7WebCore14DatabaseServer21databaseDirectoryPathEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore15DatabaseTracker21databaseDirectoryPathEv(i1, __ZN7WebCore15DatabaseTracker7trackerEv() | 0);
 return;
}
function dynCall_viiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 FUNCTION_TABLE_viiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
}
function __ZN7WebCore14DatabaseServer18deleteAllDatabasesEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore15DatabaseTracker18deleteAllDatabasesEv(__ZN7WebCore15DatabaseTracker7trackerEv() | 0);
 return;
}
function dynCall_iiiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return FUNCTION_TABLE_iiiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
}
function __ZN7WebCore14DatabaseServer10initializeERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore15DatabaseTracker17initializeTrackerERKN3WTF6StringE(i2);
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
function dynCall_iiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0) | 0;
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
 return FUNCTION_TABLE_iii[i1 & 15](i2 | 0, i3 | 0) | 0;
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
function b1(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(1);
}
function b5(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(5);
 return 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
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
 FUNCTION_TABLE_vi[i1 & 7](i2 | 0);
}
function b6(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(6);
 return 0;
}
function __ZN7WebCore14DatabaseServerD0Ev(i1) {
 i1 = i1 | 0;
 __ZdlPv(i1);
 return;
}
function b9(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(9);
 return 0;
}
function __ZN7WebCore14DatabaseServerD1Ev(i1) {
 i1 = i1 | 0;
 return;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
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
function b0(i1) {
 i1 = i1 | 0;
 abort(0);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b2(i1) {
 i1 = i1 | 0;
 abort(2);
}
function b8() {
 abort(8);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_ii = [b0,b0];
  var FUNCTION_TABLE_viiiii = [b1,b1,__ZN7WebCore14DatabaseServer19fullPathForDatabaseEPNS_14SecurityOriginERKN3WTF6StringEb,b1];
  var FUNCTION_TABLE_vi = [b2,b2,__ZN7WebCore14DatabaseServerD0Ev,b2,__ZN7WebCore14DatabaseServer18deleteAllDatabasesEv,b2,__ZN7WebCore14DatabaseServerD1Ev,b2];
  var FUNCTION_TABLE_vii = [b3,b3,__ZN7WebCore14DatabaseServer7originsERN3WTF6VectorINS1_6RefPtrINS_14SecurityOriginEEELj0ENS1_15CrashOnOverflowEEE,b3,__ZN7WebCore14DatabaseServer9setClientEPNS_21DatabaseManagerClientE,b3,__ZN7WebCore14DatabaseServer10initializeERKN3WTF6StringE,b3,__ZNK7WebCore14DatabaseServer21databaseDirectoryPathEv,b3,__ZN7WebCore14DatabaseServer24setDatabaseDirectoryPathERKN3WTF6StringE,b3,__ZN7WebCore14DatabaseServer31interruptAllDatabasesForContextEPKNS_22DatabaseBackendContextE,b3,b3,b3];
  var FUNCTION_TABLE_viiiiiiiiiiii = [b4,b4,__ZN7WebCore14DatabaseServer12openDatabaseERN3WTF6RefPtrINS_22DatabaseBackendContextEEENS_12DatabaseTypeERKNS1_6StringES9_S9_mbRNS_13DatabaseErrorERS7_NS_22AbstractDatabaseServer11OpenAttemptE,b4];
  var FUNCTION_TABLE_iiiii = [b5,b5];
  var FUNCTION_TABLE_iiii = [b6,b6,__ZN7WebCore14DatabaseServer14deleteDatabaseEPNS_14SecurityOriginERKN3WTF6StringE,b6,__ZN7WebCore14DatabaseServer22databaseNamesForOriginEPNS_14SecurityOriginERN3WTF6VectorINS3_6StringELj0ENS3_15CrashOnOverflowEEE,b6,b6,b6];
  var FUNCTION_TABLE_viiiiiiiiiii = [b7,b7,__ZN7WebCore14DatabaseServer14createDatabaseERN3WTF6RefPtrINS_22DatabaseBackendContextEEENS_12DatabaseTypeERKNS1_6StringES9_S9_mbRNS_13DatabaseErrorERS7_,b7];
  var FUNCTION_TABLE_v = [b8,b8];
  var FUNCTION_TABLE_iii = [b9,b9,__ZN7WebCore14DatabaseServer14quotaForOriginEPNS_14SecurityOriginE,b9,__ZN7WebCore14DatabaseServer17hasEntryForOriginEPNS_14SecurityOriginE,b9,__ZN7WebCore14DatabaseServer12deleteOriginEPNS_14SecurityOriginE,b9,__ZN7WebCore14DatabaseServer14usageForOriginEPNS_14SecurityOriginE,b9,b9,b9,b9,b9,b9,b9];
  var FUNCTION_TABLE_viiii = [b10,b10,__ZN7WebCore14DatabaseServer8setQuotaEPNS_14SecurityOriginEy,b10,__ZN7WebCore14DatabaseServer23detailsForNameAndOriginERKN3WTF6StringEPNS_14SecurityOriginE,b10,b10,b10];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_ii: dynCall_ii, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_viiiiiiiiiiii: dynCall_viiiiiiiiiiii, dynCall_iiiii: dynCall_iiiii, dynCall_iiii: dynCall_iiii, dynCall_viiiiiiiiiii: dynCall_viiiiiiiiiii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_viiiiiiiiiiii": invoke_viiiiiiiiiiii, "invoke_iiiii": invoke_iiiii, "invoke_iiii": invoke_iiii, "invoke_viiiiiiiiiii": invoke_viiiiiiiiiii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_viiiiiiiiiiii = Module["dynCall_viiiiiiiiiiii"] = asm["dynCall_viiiiiiiiiiii"];
var dynCall_iiiii = Module["dynCall_iiiii"] = asm["dynCall_iiiii"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
var dynCall_viiiiiiiiiii = Module["dynCall_viiiiiiiiiii"] = asm["dynCall_viiiiiiiiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore14DatabaseServer8setQuotaEPNS_14SecurityOriginEy","_strlen","__ZN7WebCore14DatabaseServer7originsERN3WTF6VectorINS1_6RefPtrINS_14SecurityOriginEEELj0ENS1_15CrashOnOverflowEEE","__ZN7WebCore14DatabaseServer23detailsForNameAndOriginERKN3WTF6StringEPNS_14SecurityOriginE","__ZN7WebCore14DatabaseServer12deleteOriginEPNS_14SecurityOriginE","__ZN7WebCore14DatabaseServer22databaseNamesForOriginEPNS_14SecurityOriginERN3WTF6VectorINS3_6StringELj0ENS3_15CrashOnOverflowEEE","__ZN7WebCore14DatabaseServer14quotaForOriginEPNS_14SecurityOriginE","__ZN7WebCore14DatabaseServer19fullPathForDatabaseEPNS_14SecurityOriginERKN3WTF6StringEb","__ZN7WebCore14DatabaseServer14createDatabaseERN3WTF6RefPtrINS_22DatabaseBackendContextEEENS_12DatabaseTypeERKNS1_6StringES9_S9_mbRNS_13DatabaseErrorERS7_","_memset","__ZN7WebCore14DatabaseServerD0Ev","_memcpy","__ZN7WebCore14DatabaseServerD1Ev","__ZN7WebCore14DatabaseServer18deleteAllDatabasesEv","__ZN7WebCore14DatabaseServer14deleteDatabaseEPNS_14SecurityOriginERKN3WTF6StringE","__ZN7WebCore14DatabaseServer9setClientEPNS_21DatabaseManagerClientE","__ZN7WebCore14DatabaseServer12openDatabaseERN3WTF6RefPtrINS_22DatabaseBackendContextEEENS_12DatabaseTypeERKNS1_6StringES9_S9_mbRNS_13DatabaseErrorERS7_NS_22AbstractDatabaseServer11OpenAttemptE","__ZNK7WebCore14DatabaseServer21databaseDirectoryPathEv","__ZN7WebCore14DatabaseServer14usageForOriginEPNS_14SecurityOriginE","__ZN7WebCore14DatabaseServer10initializeERKN3WTF6StringE","__ZN7WebCore14DatabaseServer24setDatabaseDirectoryPathERKN3WTF6StringE","__ZN7WebCore14DatabaseServer17hasEntryForOriginEPNS_14SecurityOriginE","__ZN7WebCore14DatabaseServer31interruptAllDatabasesForContextEPKNS_22DatabaseBackendContextE"]

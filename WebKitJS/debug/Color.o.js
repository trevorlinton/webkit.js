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
H_BASE = parentModule["_malloc"](152 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 152;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore5ColorC1ERKN3WTF6StringE;
var __ZN7WebCore5ColorC1EPKc;
/* memory initializer */ allocate([35,37,48,50,88,37,48,50,88,37,48,50,88,0,0,0,35,37,48,50,88,37,48,50,88,37,48,50,88,37,48,50,88,0,0,0,0,0,0,0,114,103,98,97,40,0,0,0,44,32,0,0,0,0,0,0,192,192,192,255,0,0,0,0,128,128,128,255,0,0,0,0,255,255,255,255,0,0,0,0,0,0,0,255,0,0,0,0,160,160,160,255,0,0,0,0,48,49,50,51,52,53,54,55,56,57,65,66,67,68,69,70,0,0,0,0,0,0,0,0,48,49,50,51,52,53,54,55,56,57,97,98,99,100,101,102,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var __ZN7WebCore5Color8darkGrayE=(H_BASE+72)|0;
  var __ZN7WebCore5Color5whiteE=(H_BASE+80)|0;
  var __ZN7WebCore5Color4grayE=(H_BASE+96)|0;
  var __ZN7WebCore5Color5blackE=(H_BASE+88)|0;
  var __ZN7WebCore5Color11transparentE=(H_BASE+152)|0;
  var __ZN7WebCore5Color9lightGrayE=(H_BASE+64)|0;
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
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _llvm_uadd_with_overflow_i32=env._llvm_uadd_with_overflow_i32;
  var _free=env._free;
  var _round=env._round;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZNK7WebCore5Color10serializedEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 240 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 32 | 0;
 i7 = i3 + 48 | 0;
 i8 = i3 + 144 | 0;
 i9 = i2 | 0;
 if ((HEAP32[i9 >> 2] & -16777216 | 0) == -16777216) {
  i2 = i5 | 0;
  HEAP32[i2 >> 2] = 0;
  i10 = i5 + 4 | 0;
  HEAP32[i10 >> 2] = 0;
  i11 = i5 + 8 | 0;
  HEAP32[i11 >> 2] = 0;
  i12 = i5 + 12 | 0;
  HEAP8[i12] = 1;
  HEAP32[i5 + 16 >> 2] = 0;
  i13 = i5 + 20 | 0;
  HEAP32[i13 >> 2] = 0;
  __ZN3WTF13StringBuilder15reserveCapacityEj(i5, 7);
  HEAP8[i4] = 35;
  i14 = HEAP32[i11 >> 2] | 0;
  do {
   if ((i14 | 0) == 0) {
    i15 = 8;
   } else {
    i16 = HEAP32[i2 >> 2] | 0;
    if (i16 >>> 0 >= (HEAP32[i14 + 4 >> 2] | 0) >>> 0) {
     i15 = 8;
     break;
    }
    if ((HEAP32[i10 >> 2] | 0) != 0) {
     i15 = 8;
     break;
    }
    i17 = (HEAP8[i12] & 1) == 0;
    HEAP32[i2 >> 2] = i16 + 1;
    if (i17) {
     HEAP16[(HEAP32[i5 + 20 >> 2] | 0) + (i16 << 1) >> 1] = 35;
     break;
    } else {
     HEAP8[(HEAP32[i13 >> 2] | 0) + i16 | 0] = 35;
     break;
    }
   }
  } while (0);
  if ((i15 | 0) == 8) {
   __ZN3WTF13StringBuilder6appendEPKhj(i5, i4, 1);
  }
  __ZN3WTF15appendByteAsHexINS_13StringBuilderEEEvhRT_NS_17HexConversionModeE((HEAP32[i9 >> 2] | 0) >>> 16 & 255, i5, 0);
  __ZN3WTF15appendByteAsHexINS_13StringBuilderEEEvhRT_NS_17HexConversionModeE((HEAP32[i9 >> 2] | 0) >>> 8 & 255, i5, 0);
  __ZN3WTF15appendByteAsHexINS_13StringBuilderEEEvhRT_NS_17HexConversionModeE(HEAP32[i9 >> 2] & 255, i5, 0);
  __ZN3WTF13StringBuilder11shrinkToFitEv(i5);
  i4 = HEAP32[i10 >> 2] | 0;
  if ((i4 | 0) == 0) {
   __ZNK3WTF13StringBuilder11reifyStringEv(i5);
   i5 = HEAP32[i10 >> 2] | 0;
   HEAP32[i1 >> 2] = i5;
   if ((i5 | 0) != 0) {
    i18 = i5;
    i15 = 12;
   }
  } else {
   HEAP32[i1 >> 2] = i4;
   i18 = i4;
   i15 = 12;
  }
  if ((i15 | 0) == 12) {
   i15 = i18 | 0;
   HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 2;
  }
  i15 = HEAP32[i11 >> 2] | 0;
  do {
   if ((i15 | 0) != 0) {
    i11 = i15 | 0;
    i18 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
    if ((i18 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i15);
     break;
    } else {
     HEAP32[i11 >> 2] = i18;
     break;
    }
   }
  } while (0);
  i15 = HEAP32[i10 >> 2] | 0;
  if ((i15 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i10 = i15 | 0;
  i18 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
  if ((i18 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i15);
   STACKTOP = i3;
   return;
  } else {
   HEAP32[i10 >> 2] = i18;
   STACKTOP = i3;
   return;
  }
 }
 i18 = i6 | 0;
 i10 = i6 + 4 | 0;
 i15 = i6 + 8 | 0;
 HEAP32[i15 >> 2] = 0;
 i11 = __ZN3WTF18fastMallocGoodSizeEj(28) | 0;
 HEAP32[i10 >> 2] = i11;
 HEAP32[i18 >> 2] = __ZN3WTF10fastMallocEj(i11) | 0;
 __ZN3WTF6VectorIhLj0ENS_15CrashOnOverflowEE6appendIcEEvPKT_j(i6, H_BASE + 48 | 0, 5);
 __ZN3WTF12appendNumberIhEEvRNS_6VectorIT_Lj0ENS_15CrashOnOverflowEEEh(i6, (HEAP32[i9 >> 2] | 0) >>> 16 & 255);
 __ZN3WTF6VectorIhLj0ENS_15CrashOnOverflowEE6appendIcEEvPKT_j(i6, H_BASE + 56 | 0, 2);
 __ZN3WTF12appendNumberIhEEvRNS_6VectorIT_Lj0ENS_15CrashOnOverflowEEEh(i6, (HEAP32[i9 >> 2] | 0) >>> 8 & 255);
 __ZN3WTF6VectorIhLj0ENS_15CrashOnOverflowEE6appendIcEEvPKT_j(i6, H_BASE + 56 | 0, 2);
 __ZN3WTF12appendNumberIhEEvRNS_6VectorIT_Lj0ENS_15CrashOnOverflowEEEh(i6, HEAP32[i9 >> 2] & 255);
 __ZN3WTF6VectorIhLj0ENS_15CrashOnOverflowEE6appendIcEEvPKT_j(i6, H_BASE + 56 | 0, 2);
 i6 = (HEAP32[i9 >> 2] | 0) >>> 24;
 do {
  if ((i6 | 0) == 0) {
   i9 = HEAP32[i15 >> 2] | 0;
   i11 = HEAP32[i10 >> 2] | 0;
   if ((i9 | 0) != (i11 | 0)) {
    i4 = HEAP32[i18 >> 2] | 0;
    HEAP8[i4 + i9 | 0] = 48;
    i5 = i9 + 1 | 0;
    HEAP32[i15 >> 2] = i5;
    i19 = i5;
    i20 = i11;
    i21 = i4;
    break;
   }
   i4 = i9 + 1 | 0;
   i11 = i4 + (i9 >>> 2) | 0;
   i5 = i11 >>> 0 > 16 >>> 0 ? i11 : 16;
   i11 = i5 >>> 0 > i4 >>> 0 ? i5 : i4;
   i5 = HEAP32[i18 >> 2] | 0;
   do {
    if (i9 >>> 0 < i11 >>> 0) {
     i13 = __ZN3WTF18fastMallocGoodSizeEj(i11) | 0;
     HEAP32[i10 >> 2] = i13;
     i2 = __ZN3WTF10fastMallocEj(i13) | 0;
     HEAP32[i18 >> 2] = i2;
     _memcpy(i2 | 0, i5 | 0, i9) | 0;
     if ((i5 | 0) == 0) {
      i22 = i13;
      i23 = i2;
      break;
     }
     if ((i2 | 0) == (i5 | 0)) {
      HEAP32[i18 >> 2] = 0;
      HEAP32[i10 >> 2] = 0;
      i24 = 0;
      i25 = 0;
     } else {
      i24 = i13;
      i25 = i2;
     }
     __ZN3WTF8fastFreeEPv(i5);
     i22 = i24;
     i23 = i25;
    } else {
     i22 = i9;
     i23 = i5;
    }
   } while (0);
   HEAP8[i23 + i9 | 0] = 48;
   HEAP32[i15 >> 2] = i4;
   i19 = i4;
   i20 = i22;
   i21 = i23;
  } else {
   __ZN3WTF4dtoaEPcdRbRiRj(i8 + 8 | 0, +(i6 | 0) / +255, i8 | 0, i8 + 4 | 0, i8 + 88 | 0);
   i5 = __ZNK3WTF13DecimalNumber15toStringDecimalEPhj(i8, i7 | 0, 96) | 0;
   i11 = HEAP32[i15 >> 2] | 0;
   i2 = _llvm_uadd_with_overflow_i32(i11 | 0, i5 | 0) | 0;
   i13 = tempRet0;
   i12 = i2;
   i2 = HEAP32[i10 >> 2] | 0;
   do {
    if (i12 >>> 0 > i2 >>> 0) {
     i14 = i2 + 1 + (i2 >>> 2) | 0;
     i16 = i14 >>> 0 > 16 >>> 0 ? i14 : 16;
     i14 = i16 >>> 0 > i12 >>> 0 ? i16 : i12;
     if (i2 >>> 0 >= i14 >>> 0) {
      i26 = i2;
      break;
     }
     i16 = HEAP32[i18 >> 2] | 0;
     i17 = __ZN3WTF18fastMallocGoodSizeEj(i14) | 0;
     HEAP32[i10 >> 2] = i17;
     i14 = __ZN3WTF10fastMallocEj(i17) | 0;
     HEAP32[i18 >> 2] = i14;
     _memcpy(i14 | 0, i16 | 0, i11) | 0;
     if ((i16 | 0) == 0) {
      i26 = i17;
      break;
     }
     if ((i14 | 0) == (i16 | 0)) {
      HEAP32[i18 >> 2] = 0;
      HEAP32[i10 >> 2] = 0;
      i27 = 0;
     } else {
      i27 = i17;
     }
     __ZN3WTF8fastFreeEPv(i16);
     i26 = i27;
    } else {
     i26 = i2;
    }
   } while (0);
   if (i13) {
    _WTFCrash();
   }
   i2 = HEAP32[i18 >> 2] | 0;
   if ((i5 | 0) != 0) {
    i4 = 0;
    while (1) {
     HEAP8[i2 + (i4 + i11) | 0] = HEAP8[i7 + i4 | 0] | 0;
     i4 = i4 + 1 | 0;
     if (i4 >>> 0 >= i5 >>> 0) {
      break;
     }
    }
   }
   HEAP32[i15 >> 2] = i12;
   i19 = i12;
   i20 = i26;
   i21 = i2;
  }
 } while (0);
 if ((i19 | 0) == (i20 | 0)) {
  i26 = i20 + 1 | 0;
  i7 = i26 + (i20 >>> 2) | 0;
  i27 = i7 >>> 0 > 16 >>> 0 ? i7 : 16;
  i7 = i27 >>> 0 > i26 >>> 0 ? i27 : i26;
  do {
   if (i20 >>> 0 < i7 >>> 0) {
    i26 = __ZN3WTF18fastMallocGoodSizeEj(i7) | 0;
    HEAP32[i10 >> 2] = i26;
    i27 = __ZN3WTF10fastMallocEj(i26) | 0;
    HEAP32[i18 >> 2] = i27;
    _memcpy(i27 | 0, i21 | 0, i20) | 0;
    if ((i21 | 0) == 0) {
     i28 = i27;
     break;
    }
    if ((i27 | 0) == (i21 | 0)) {
     HEAP32[i18 >> 2] = 0;
     HEAP32[i10 >> 2] = 0;
     i29 = 0;
    } else {
     i29 = i27;
    }
    __ZN3WTF8fastFreeEPv(i21);
    i28 = i29;
   } else {
    i28 = i21;
   }
  } while (0);
  HEAP8[i28 + i20 | 0] = 41;
  i30 = HEAP32[i15 >> 2] | 0;
 } else {
  HEAP8[i21 + i19 | 0] = 41;
  i30 = i19;
 }
 i19 = i30 + 1 | 0;
 HEAP32[i15 >> 2] = i19;
 if ((i19 | 0) == 0) {
  i30 = __ZN3WTF10StringImpl5emptyEv() | 0;
  i21 = i30 | 0;
  HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 2;
  i31 = i30;
 } else {
  i30 = __ZN3WTF10fastMallocEj(20) | 0;
  i21 = HEAP32[i18 >> 2] | 0;
  HEAP32[i18 >> 2] = 0;
  HEAP32[i10 >> 2] = 0;
  HEAP32[i15 >> 2] = 0;
  HEAP32[i30 >> 2] = 2;
  HEAP32[i30 + 4 >> 2] = i19;
  HEAP32[i30 + 8 >> 2] = i21;
  HEAP32[i30 + 12 >> 2] = 0;
  HEAP32[i30 + 16 >> 2] = 33;
  __ZN3WTF8fastFreeEPv(0);
  i31 = i30;
 }
 HEAP32[i1 >> 2] = i31;
 i31 = HEAP32[i18 >> 2] | 0;
 if ((i31 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i18 >> 2] = 0;
 HEAP32[i10 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i31);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore5ColorC2ERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = HEAP32[i3 + 4 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   i5 = (HEAP32[i3 + 16 >> 2] & 32 | 0) == 0;
   i6 = i3 + 8 | 0;
   if (i5) {
    i7 = HEAP32[i6 >> 2] | 0;
    i8 = HEAP16[i7 >> 1] | 0;
    i9 = i7;
    i10 = i7;
   } else {
    i7 = HEAP32[i6 >> 2] | 0;
    i8 = HEAPU8[i7] | 0;
    i9 = i7;
    i10 = i7;
   }
   if (i8 << 16 >> 16 != 35) {
    break;
   }
   i7 = i4 - 1 | 0;
   i6 = i1 | 0;
   if (i5) {
    L29 : do {
     if ((i4 | 0) == 7 | (i4 | 0) == 4) {
      i5 = 0;
      i11 = 0;
      while (1) {
       i11 = i11 + 1 | 0;
       i12 = HEAP16[i9 + (i11 << 1) >> 1] | 0;
       do {
        if ((i12 - 48 & 65535) >>> 0 < 10 >>> 0) {
         i13 = i5 << 4;
         i14 = i12 & 65535;
         i15 = 25;
        } else {
         i16 = i12 & 65535;
         if (((i16 | 32) - 97 | 0) >>> 0 >= 6 >>> 0) {
          i17 = 0;
          break L29;
         }
         i18 = i5 << 4;
         if ((i12 & 65535) >>> 0 < 65 >>> 0) {
          i13 = i18;
          i14 = i16;
          i15 = 25;
          break;
         }
         i19 = i16 + 9 & 15;
         i20 = i18;
        }
       } while (0);
       if ((i15 | 0) == 25) {
        i15 = 0;
        i19 = i14 - 48 | 0;
        i20 = i13;
       }
       i5 = i19 | i20;
       if (i11 >>> 0 >= i7 >>> 0) {
        break;
       }
      }
      if ((i7 | 0) == 6) {
       HEAP32[i6 >> 2] = i5 | -16777216;
       i17 = 1;
       break;
      } else {
       i11 = i5 & 3840;
       i12 = i5 & 240;
       i18 = i5 & 15;
       HEAP32[i6 >> 2] = i18 | i11 << 8 | i11 << 12 | i12 << 8 | i12 << 4 | i18 << 4 | -16777216;
       i17 = 1;
       break;
      }
     } else {
      i17 = 0;
     }
    } while (0);
    HEAP8[i1 + 4 | 0] = i17;
    return;
   } else {
    L11 : do {
     if ((i4 | 0) == 7 | (i4 | 0) == 4) {
      i18 = 0;
      i12 = 0;
      while (1) {
       i12 = i12 + 1 | 0;
       i11 = HEAP8[i10 + i12 | 0] | 0;
       do {
        if ((i11 - 48 & 255) >>> 0 < 10 >>> 0) {
         i21 = i18 << 4;
         i22 = i11 & 255;
         i15 = 13;
        } else {
         i16 = i11 & 255;
         if (((i16 | 32) - 97 | 0) >>> 0 >= 6 >>> 0) {
          i23 = 0;
          break L11;
         }
         i24 = i18 << 4;
         if ((i11 & 255) >>> 0 < 65 >>> 0) {
          i21 = i24;
          i22 = i16;
          i15 = 13;
          break;
         }
         i25 = i16 + 9 & 15;
         i26 = i24;
        }
       } while (0);
       if ((i15 | 0) == 13) {
        i15 = 0;
        i25 = i22 - 48 | 0;
        i26 = i21;
       }
       i18 = i25 | i26;
       if (i12 >>> 0 >= i7 >>> 0) {
        break;
       }
      }
      if ((i7 | 0) == 6) {
       HEAP32[i6 >> 2] = i18 | -16777216;
       i23 = 1;
       break;
      } else {
       i12 = i18 & 3840;
       i5 = i18 & 240;
       i11 = i18 & 15;
       HEAP32[i6 >> 2] = i11 | i12 << 8 | i12 << 12 | i5 << 8 | i5 << 4 | i11 << 4 | -16777216;
       i23 = 1;
       break;
      }
     } else {
      i23 = 0;
     }
    } while (0);
    HEAP8[i1 + 4 | 0] = i23;
    return;
   }
  }
 } while (0);
 __ZN7WebCore5Color13setNamedColorERKN3WTF6StringE(i1, i2);
 return;
}
function __ZN7WebCore5ColorC1ERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = HEAP32[i3 + 4 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   i5 = (HEAP32[i3 + 16 >> 2] & 32 | 0) == 0;
   i6 = i3 + 8 | 0;
   if (i5) {
    i7 = HEAP32[i6 >> 2] | 0;
    i8 = HEAP16[i7 >> 1] | 0;
    i9 = i7;
    i10 = i7;
   } else {
    i7 = HEAP32[i6 >> 2] | 0;
    i8 = HEAPU8[i7] | 0;
    i9 = i7;
    i10 = i7;
   }
   if (i8 << 16 >> 16 != 35) {
    break;
   }
   i7 = i4 - 1 | 0;
   i6 = i1 | 0;
   if (i5) {
    L29 : do {
     if ((i4 | 0) == 7 | (i4 | 0) == 4) {
      i5 = 0;
      i11 = 0;
      while (1) {
       i11 = i11 + 1 | 0;
       i12 = HEAP16[i9 + (i11 << 1) >> 1] | 0;
       do {
        if ((i12 - 48 & 65535) >>> 0 < 10 >>> 0) {
         i13 = i5 << 4;
         i14 = i12 & 65535;
         i15 = 25;
        } else {
         i16 = i12 & 65535;
         if (((i16 | 32) - 97 | 0) >>> 0 >= 6 >>> 0) {
          i17 = 0;
          break L29;
         }
         i18 = i5 << 4;
         if ((i12 & 65535) >>> 0 < 65 >>> 0) {
          i13 = i18;
          i14 = i16;
          i15 = 25;
          break;
         }
         i19 = i16 + 9 & 15;
         i20 = i18;
        }
       } while (0);
       if ((i15 | 0) == 25) {
        i15 = 0;
        i19 = i14 - 48 | 0;
        i20 = i13;
       }
       i5 = i19 | i20;
       if (i11 >>> 0 >= i7 >>> 0) {
        break;
       }
      }
      if ((i7 | 0) == 6) {
       HEAP32[i6 >> 2] = i5 | -16777216;
       i17 = 1;
       break;
      } else {
       i11 = i5 & 3840;
       i12 = i5 & 240;
       i18 = i5 & 15;
       HEAP32[i6 >> 2] = i18 | i11 << 8 | i11 << 12 | i12 << 8 | i12 << 4 | i18 << 4 | -16777216;
       i17 = 1;
       break;
      }
     } else {
      i17 = 0;
     }
    } while (0);
    HEAP8[i1 + 4 | 0] = i17;
    return;
   } else {
    L11 : do {
     if ((i4 | 0) == 7 | (i4 | 0) == 4) {
      i18 = 0;
      i12 = 0;
      while (1) {
       i12 = i12 + 1 | 0;
       i11 = HEAP8[i10 + i12 | 0] | 0;
       do {
        if ((i11 - 48 & 255) >>> 0 < 10 >>> 0) {
         i21 = i18 << 4;
         i22 = i11 & 255;
         i15 = 13;
        } else {
         i16 = i11 & 255;
         if (((i16 | 32) - 97 | 0) >>> 0 >= 6 >>> 0) {
          i23 = 0;
          break L11;
         }
         i24 = i18 << 4;
         if ((i11 & 255) >>> 0 < 65 >>> 0) {
          i21 = i24;
          i22 = i16;
          i15 = 13;
          break;
         }
         i25 = i16 + 9 & 15;
         i26 = i24;
        }
       } while (0);
       if ((i15 | 0) == 13) {
        i15 = 0;
        i25 = i22 - 48 | 0;
        i26 = i21;
       }
       i18 = i25 | i26;
       if (i12 >>> 0 >= i7 >>> 0) {
        break;
       }
      }
      if ((i7 | 0) == 6) {
       HEAP32[i6 >> 2] = i18 | -16777216;
       i23 = 1;
       break;
      } else {
       i12 = i18 & 3840;
       i5 = i18 & 240;
       i11 = i18 & 15;
       HEAP32[i6 >> 2] = i11 | i12 << 8 | i12 << 12 | i5 << 8 | i5 << 4 | i11 << 4 | -16777216;
       i23 = 1;
       break;
      }
     } else {
      i23 = 0;
     }
    } while (0);
    HEAP8[i1 + 4 | 0] = i23;
    return;
   }
  }
 } while (0);
 __ZN7WebCore5Color13setNamedColorERKN3WTF6StringE(i1, i2);
 return;
}
function __ZN7WebCore5Color13parseHexColorERKN3WTF6StringERj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i1 = HEAP32[i3 + 4 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 if ((HEAP32[i3 + 16 >> 2] & 32 | 0) == 0) {
  i5 = HEAP32[i3 + 8 >> 2] | 0;
  if ((i1 | 0) == 6 | (i1 | 0) == 3) {
   i6 = 0;
   i7 = 0;
  } else {
   i4 = 0;
   return i4 | 0;
  }
  L32 : while (1) {
   i8 = HEAP16[i5 + (i7 << 1) >> 1] | 0;
   do {
    if ((i8 - 48 & 65535) >>> 0 < 10 >>> 0) {
     i9 = i6 << 4;
     i10 = i8 & 65535;
     i11 = 20;
    } else {
     i12 = i8 & 65535;
     if (((i12 | 32) - 97 | 0) >>> 0 >= 6 >>> 0) {
      i4 = 0;
      i11 = 36;
      break L32;
     }
     i13 = i6 << 4;
     if ((i8 & 65535) >>> 0 < 65 >>> 0) {
      i9 = i13;
      i10 = i12;
      i11 = 20;
      break;
     }
     i14 = i12 + 9 & 15;
     i15 = i13;
    }
   } while (0);
   if ((i11 | 0) == 20) {
    i11 = 0;
    i14 = i10 - 48 | 0;
    i15 = i9;
   }
   i6 = i14 | i15;
   i7 = i7 + 1 | 0;
   if (i7 >>> 0 >= i1 >>> 0) {
    break;
   }
  }
  if ((i11 | 0) == 36) {
   return i4 | 0;
  }
  if ((i1 | 0) == 6) {
   HEAP32[i2 >> 2] = i6 | -16777216;
   i4 = 1;
   return i4 | 0;
  } else {
   i7 = i6 & 3840;
   i15 = i6 & 240;
   i14 = i6 & 15;
   HEAP32[i2 >> 2] = i14 | i7 << 8 | i7 << 12 | i15 << 8 | i15 << 4 | i14 << 4 | -16777216;
   i4 = 1;
   return i4 | 0;
  }
 } else {
  i14 = HEAP32[i3 + 8 >> 2] | 0;
  if ((i1 | 0) == 6 | (i1 | 0) == 3) {
   i16 = 0;
   i17 = 0;
  } else {
   i4 = 0;
   return i4 | 0;
  }
  L11 : while (1) {
   i3 = HEAP8[i14 + i17 | 0] | 0;
   do {
    if ((i3 - 48 & 255) >>> 0 < 10 >>> 0) {
     i18 = i16 << 4;
     i19 = i3 & 255;
     i11 = 9;
    } else {
     i15 = i3 & 255;
     if (((i15 | 32) - 97 | 0) >>> 0 >= 6 >>> 0) {
      i4 = 0;
      i11 = 30;
      break L11;
     }
     i7 = i16 << 4;
     if ((i3 & 255) >>> 0 < 65 >>> 0) {
      i18 = i7;
      i19 = i15;
      i11 = 9;
      break;
     }
     i20 = i15 + 9 & 15;
     i21 = i7;
    }
   } while (0);
   if ((i11 | 0) == 9) {
    i11 = 0;
    i20 = i19 - 48 | 0;
    i21 = i18;
   }
   i16 = i20 | i21;
   i17 = i17 + 1 | 0;
   if (i17 >>> 0 >= i1 >>> 0) {
    break;
   }
  }
  if ((i11 | 0) == 30) {
   return i4 | 0;
  }
  if ((i1 | 0) == 6) {
   HEAP32[i2 >> 2] = i16 | -16777216;
   i4 = 1;
   return i4 | 0;
  } else {
   i1 = i16 & 3840;
   i11 = i16 & 240;
   i17 = i16 & 15;
   HEAP32[i2 >> 2] = i17 | i1 << 8 | i1 << 12 | i11 << 8 | i11 << 4 | i17 << 4 | -16777216;
   i4 = 1;
   return i4 | 0;
  }
 }
 return 0;
}
function __ZN7WebCore16makeRGBAFromHSLAEdddd(d1, d2, d3, d4) {
 d1 = +d1;
 d2 = +d2;
 d3 = +d3;
 d4 = +d4;
 var d5 = +0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, d10 = +0, d11 = +0, d12 = +0, d13 = +0, d14 = +0, d15 = +0, d16 = +0, i17 = 0, i18 = 0;
 d5 = +_nextafter(+256, +0);
 if (d2 == +0) {
  i6 = ~~(d5 * d3);
  i7 = ~~(d5 * d4);
  i8 = (i7 | 0) > 255 ? 255 : i7;
  i7 = (i6 | 0) > 255 ? 255 : i6;
  i6 = (i7 | 0) > 0;
  i9 = (i6 ? i7 << 8 : 0) | (i6 ? i7 << 16 : 0) | (i6 ? i7 : 0) | ((i8 | 0) > 0 ? i8 << 24 : 0);
  return i9 | 0;
 }
 if (d3 < +.5) {
  d10 = (d2 + +1) * d3;
 } else {
  d10 = d2 + d3 - d2 * d3;
 }
 d2 = d3 * +2 - d10;
 d3 = d1 + +.3333333333333333;
 do {
  if (d3 < +0) {
   d11 = d3 + +1;
  } else {
   if (d3 <= +1) {
    d11 = d3;
    break;
   }
   d11 = d3 + +-1;
  }
 } while (0);
 do {
  if (d11 * +6 < +1) {
   d12 = d2 + (d10 - d2) * d11 * +6;
  } else {
   if (d11 * +2 < +1) {
    d12 = d10;
    break;
   }
   if (d11 * +3 >= +2) {
    d12 = d2;
    break;
   }
   d12 = d2 + (d10 - d2) * (+.6666666666666666 - d11) * +6;
  }
 } while (0);
 i8 = ~~(d5 * d12);
 do {
  if (d1 < +0) {
   d13 = d1 + +1;
  } else {
   if (d1 <= +1) {
    d13 = d1;
    break;
   }
   d13 = d1 + +-1;
  }
 } while (0);
 do {
  if (d13 * +6 < +1) {
   d14 = d2 + (d10 - d2) * d13 * +6;
  } else {
   if (d13 * +2 < +1) {
    d14 = d10;
    break;
   }
   if (d13 * +3 >= +2) {
    d14 = d2;
    break;
   }
   d14 = d2 + (d10 - d2) * (+.6666666666666666 - d13) * +6;
  }
 } while (0);
 i7 = ~~(d5 * d14);
 d14 = d1 + +-.3333333333333333;
 do {
  if (d14 < +0) {
   d15 = d14 + +1;
  } else {
   if (d14 <= +1) {
    d15 = d14;
    break;
   }
   d15 = d14 + +-1;
  }
 } while (0);
 do {
  if (d15 * +6 < +1) {
   d16 = d2 + (d10 - d2) * d15 * +6;
  } else {
   if (d15 * +2 < +1) {
    d16 = d10;
    break;
   }
   if (d15 * +3 >= +2) {
    d16 = d2;
    break;
   }
   d16 = d2 + (d10 - d2) * (+.6666666666666666 - d15) * +6;
  }
 } while (0);
 i6 = ~~(d5 * d16);
 i17 = ~~(d5 * d4);
 i18 = (i17 | 0) > 255 ? 255 : i17;
 i17 = (i8 | 0) > 255 ? 255 : i8;
 i8 = (i7 | 0) > 255 ? 255 : i7;
 i7 = (i6 | 0) > 255 ? 255 : i6;
 i9 = ((i17 | 0) > 0 ? i17 << 16 : 0) | ((i18 | 0) > 0 ? i18 << 24 : 0) | ((i8 | 0) > 0 ? i8 << 8 : 0) | ((i7 | 0) > 0 ? i7 : 0);
 return i9 | 0;
}
function __ZN3WTF12appendNumberIhEEvRNS_6VectorIT_Lj0ENS_15CrashOnOverflowEEEh(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 if ((i2 & 255) >>> 0 > 99 >>> 0) {
  i3 = 3;
 } else {
  i3 = (i2 & 255) >>> 0 > 9 >>> 0 ? 2 : 1;
 }
 i4 = i1 + 8 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i5 + i3 | 0;
 i7 = i1 + 4 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 do {
  if (i8 >>> 0 < i6 >>> 0) {
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
 HEAP32[i4 >> 2] = i6;
 if ((i3 | 0) == 2) {
  i13 = i2;
  i14 = i6;
  i15 = 13;
 } else if ((i3 | 0) == 1) {
  i16 = i2;
  i17 = i6;
 } else if ((i3 | 0) == 3) {
  i15 = 10;
 } else {
  return;
 }
 do {
  if ((i15 | 0) == 10) {
   i3 = i5 + 2 | 0;
   if (i6 >>> 0 > i3 >>> 0) {
    HEAP8[(HEAP32[i1 >> 2] | 0) + i3 | 0] = (i2 & 255) % 10 & -1 | 48;
    i13 = (i2 & 255) / 10 & -1;
    i14 = HEAP32[i4 >> 2] | 0;
    i15 = 13;
    break;
   } else {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
  }
 } while (0);
 do {
  if ((i15 | 0) == 13) {
   i2 = i5 + 1 | 0;
   if (i14 >>> 0 > i2 >>> 0) {
    HEAP8[(HEAP32[i1 >> 2] | 0) + i2 | 0] = (i13 & 255) % 10 & -1 | 48;
    i16 = (i13 & 255) / 10 & -1;
    i17 = HEAP32[i4 >> 2] | 0;
    break;
   } else {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
  }
 } while (0);
 if (i17 >>> 0 <= i5 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 HEAP8[(HEAP32[i1 >> 2] | 0) + i5 | 0] = (i16 & 255) % 10 & -1 | 48;
 return;
}
function __ZN3WTF15appendByteAsHexINS_13StringBuilderEEEvhRT_NS_17HexConversionModeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = (i3 | 0) == 0 ? H_BASE + 128 : H_BASE + 104;
 i3 = i1 & 255;
 i1 = HEAP8[i7 + (i3 >>> 4) | 0] | 0;
 HEAP8[i5] = i1;
 i8 = i2 + 8 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i9 | 0) == 0) {
   i10 = 7;
  } else {
   i11 = i2 | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   if (i12 >>> 0 >= (HEAP32[i9 + 4 >> 2] | 0) >>> 0) {
    i10 = 7;
    break;
   }
   if ((HEAP32[i2 + 4 >> 2] | 0) != 0) {
    i10 = 7;
    break;
   }
   if ((HEAP8[i2 + 12 | 0] & 1) == 0) {
    HEAP32[i11 >> 2] = i12 + 1;
    HEAP16[(HEAP32[i2 + 20 >> 2] | 0) + (i12 << 1) >> 1] = i1 & 255;
    break;
   } else {
    HEAP32[i11 >> 2] = i12 + 1;
    HEAP8[(HEAP32[i2 + 20 >> 2] | 0) + i12 | 0] = i1;
    break;
   }
  }
 } while (0);
 if ((i10 | 0) == 7) {
  __ZN3WTF13StringBuilder6appendEPKhj(i2, i5, 1);
 }
 i5 = HEAP8[i7 + (i3 & 15) | 0] | 0;
 HEAP8[i6] = i5;
 i3 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i8 = i2 | 0;
   i7 = HEAP32[i8 >> 2] | 0;
   if (i7 >>> 0 >= (HEAP32[i3 + 4 >> 2] | 0) >>> 0) {
    break;
   }
   if ((HEAP32[i2 + 4 >> 2] | 0) != 0) {
    break;
   }
   if ((HEAP8[i2 + 12 | 0] & 1) == 0) {
    HEAP32[i8 >> 2] = i7 + 1;
    HEAP16[(HEAP32[i2 + 20 >> 2] | 0) + (i7 << 1) >> 1] = i5 & 255;
    STACKTOP = i4;
    return;
   } else {
    HEAP32[i8 >> 2] = i7 + 1;
    HEAP8[(HEAP32[i2 + 20 >> 2] | 0) + i7 | 0] = i5;
    STACKTOP = i4;
    return;
   }
  }
 } while (0);
 __ZN3WTF13StringBuilder6appendEPKhj(i2, i6, 1);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore5Color13setNamedColorERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 i2 = i4 | 0;
 L1 : do {
  if ((i5 | 0) == 0) {
   i6 = 0;
   i7 = 14;
  } else {
   i8 = i5 + 4 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   if (i9 >>> 0 > 63 >>> 0) {
    i10 = 0;
    i11 = 0;
    break;
   }
   if ((i9 | 0) == 0) {
    i6 = 0;
    i7 = 14;
    break;
   }
   i12 = i5 + 16 | 0;
   i13 = i5 + 8 | 0;
   i14 = i13;
   i15 = i13 | 0;
   i13 = 0;
   i16 = i9;
   while (1) {
    if (i16 >>> 0 <= i13 >>> 0) {
     i10 = 0;
     i11 = 0;
     break L1;
    }
    if ((HEAP32[i12 >> 2] & 32 | 0) == 0) {
     i17 = HEAP16[(HEAP32[i14 >> 2] | 0) + (i13 << 1) >> 1] | 0;
    } else {
     i17 = HEAPU8[(HEAP32[i15 >> 2] | 0) + i13 | 0] | 0;
    }
    if (i17 << 16 >> 16 == 0 | (i17 & 65535) >>> 0 > 127 >>> 0) {
     i10 = 0;
     i11 = 0;
     break L1;
    }
    i18 = i17 & 255;
    if (i18 << 24 >> 24 > 64) {
     i19 = (i18 << 24 >> 24 < 91) << 5;
    } else {
     i19 = 0;
    }
    HEAP8[i4 + i13 | 0] = i19 | i18;
    i18 = i13 + 1 | 0;
    if (i18 >>> 0 >= i9 >>> 0) {
     i6 = i9;
     i7 = 14;
     break L1;
    }
    i13 = i18;
    i16 = HEAP32[i8 >> 2] | 0;
   }
  }
 } while (0);
 do {
  if ((i7 | 0) == 14) {
   HEAP8[i4 + i6 | 0] = 0;
   i19 = __ZN7WebCore9findColorEPKcj(i2, i6) | 0;
   if ((i19 | 0) == 0) {
    i10 = 0;
    i11 = 0;
    break;
   }
   i10 = HEAP32[i19 + 4 >> 2] | 0;
   i11 = 1;
  }
 } while (0);
 HEAP32[i1 >> 2] = i10;
 HEAP8[i1 + 4 | 0] = i11;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore5Color5blendERKS0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i5 = i4 >>> 24;
 do {
  if ((i5 | 0) != 0) {
   i6 = HEAP32[i3 >> 2] | 0;
   if ((i6 & -16777216 | 0) == -16777216) {
    break;
   }
   i7 = i6 >>> 24;
   if ((i7 | 0) == 0) {
    i8 = i2;
    i9 = i1;
    i10 = HEAP32[i8 + 4 >> 2] | 0;
    HEAP32[i9 >> 2] = HEAP32[i8 >> 2];
    HEAP32[i9 + 4 >> 2] = i10;
    return;
   } else {
    i10 = ((i7 + i5 | 0) * 255 & -1) - (Math_imul(i7, i5) | 0) | 0;
    i9 = (i10 | 0) / 255 & -1;
    i8 = i7 ^ 255;
    i11 = i7 * 255 & -1;
    i7 = ((Math_imul(Math_imul(i4 >>> 16 & 255, i5) | 0, i8) | 0) + (Math_imul(i11, i6 >>> 16 & 255) | 0) | 0) / (i10 | 0) & -1;
    i12 = ((Math_imul(Math_imul(i4 >>> 8 & 255, i5) | 0, i8) | 0) + (Math_imul(i11, i6 >>> 8 & 255) | 0) | 0) / (i10 | 0) & -1;
    i13 = ((Math_imul(Math_imul(i4 & 255, i5) | 0, i8) | 0) + (Math_imul(i11, i6 & 255) | 0) | 0) / (i10 | 0) & -1;
    i10 = (i9 | 0) > 255 ? 255 : i9;
    i9 = (i7 | 0) > 255 ? 255 : i7;
    i7 = (i12 | 0) > 255 ? 255 : i12;
    i12 = (i13 | 0) > 255 ? 255 : i13;
    HEAP32[i1 >> 2] = ((i9 | 0) > 0 ? i9 << 16 : 0) | ((i10 | 0) > 0 ? i10 << 24 : 0) | ((i7 | 0) > 0 ? i7 << 8 : 0) | ((i12 | 0) > 0 ? i12 : 0);
    HEAP8[i1 + 4 | 0] = 1;
    return;
   }
  }
 } while (0);
 i5 = i3;
 i3 = i1;
 i1 = HEAP32[i5 + 4 >> 2] | 0;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i3 + 4 >> 2] = i1;
 return;
}
function __ZNK7WebCore5Color6getHSLERdS1_S1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, d6 = +0, d7 = +0, d8 = +0, d9 = +0, d10 = +0, d11 = +0, d12 = +0, d13 = +0, d14 = +0, d15 = +0;
 i5 = HEAP32[i1 >> 2] | 0;
 d6 = +(i5 >>> 16 & 255 | 0) / +255;
 d7 = +(i5 >>> 8 & 255 | 0) / +255;
 d8 = +(i5 & 255 | 0) / +255;
 d9 = d6 < d7 ? d7 : d6;
 d10 = d9 < d8 ? d8 : d9;
 d9 = d7 < d6 ? d7 : d6;
 d11 = d8 < d9 ? d8 : d9;
 i5 = d10 == d11;
 do {
  if (i5) {
   HEAPF64[i2 >> 3] = +0;
   HEAPF64[i4 >> 3] = (d10 + d11) * +.5;
  } else {
   do {
    if (d10 == d6) {
     d9 = (d7 - d8) / (d10 - d11) * +60 + +360;
     HEAPF64[i2 >> 3] = d9;
     d12 = d9;
    } else {
     if (d10 == d7) {
      d9 = (d8 - d6) / (d10 - d11) * +60 + +120;
      HEAPF64[i2 >> 3] = d9;
      d12 = d9;
      break;
     } else {
      d9 = (d6 - d7) / (d10 - d11) * +60 + +240;
      HEAPF64[i2 >> 3] = d9;
      d12 = d9;
      break;
     }
    }
   } while (0);
   if (d12 < +360) {
    d13 = d12;
   } else {
    d9 = d12 + +-360;
    HEAPF64[i2 >> 3] = d9;
    d13 = d9;
   }
   HEAPF64[i2 >> 3] = d13 / +360;
   d9 = d10 + d11;
   d14 = d9 * +.5;
   HEAPF64[i4 >> 3] = d14;
   if (i5) {
    break;
   }
   d15 = d10 - d11;
   if (d14 > +.5) {
    HEAPF64[i3 >> 3] = d15 / (+2 - d9);
    return;
   } else {
    HEAPF64[i3 >> 3] = d15 / d9;
    return;
   }
  }
 } while (0);
 HEAPF64[i3 >> 3] = +0;
 return;
}
function __ZN3WTF6VectorIhLj0ENS_15CrashOnOverflowEE6appendIcEEvPKT_j(i1, i2, i3) {
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
function __ZN7WebCore5Color13parseHexColorEPKtjRj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 if ((i2 | 0) == 6 | (i2 | 0) == 3) {
  i4 = 0;
  i5 = 0;
 } else {
  i6 = 0;
  return i6 | 0;
 }
 L3 : while (1) {
  i7 = HEAP16[i1 + (i5 << 1) >> 1] | 0;
  do {
   if ((i7 - 48 & 65535) >>> 0 < 10 >>> 0) {
    i8 = i4 << 4;
    i9 = i7 & 65535;
    i10 = 6;
   } else {
    i11 = i7 & 65535;
    if (((i11 | 32) - 97 | 0) >>> 0 >= 6 >>> 0) {
     i6 = 0;
     i10 = 14;
     break L3;
    }
    i12 = i4 << 4;
    if ((i7 & 65535) >>> 0 < 65 >>> 0) {
     i8 = i12;
     i9 = i11;
     i10 = 6;
     break;
    }
    i13 = i11 + 9 & 15;
    i14 = i12;
   }
  } while (0);
  if ((i10 | 0) == 6) {
   i10 = 0;
   i13 = i9 - 48 | 0;
   i14 = i8;
  }
  i4 = i13 | i14;
  i5 = i5 + 1 | 0;
  if (i5 >>> 0 >= i2 >>> 0) {
   break;
  }
 }
 if ((i10 | 0) == 14) {
  return i6 | 0;
 }
 if ((i2 | 0) == 6) {
  HEAP32[i3 >> 2] = i4 | -16777216;
  i6 = 1;
  return i6 | 0;
 } else {
  i2 = i4 & 3840;
  i10 = i4 & 240;
  i5 = i4 & 15;
  HEAP32[i3 >> 2] = i5 | i2 << 8 | i2 << 12 | i10 << 8 | i10 << 4 | i5 << 4 | -16777216;
  i6 = 1;
  return i6 | 0;
 }
 return 0;
}
function __ZN7WebCore5Color13parseHexColorEPKhjRj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 if ((i2 | 0) == 6 | (i2 | 0) == 3) {
  i4 = 0;
  i5 = 0;
 } else {
  i6 = 0;
  return i6 | 0;
 }
 L3 : while (1) {
  i7 = HEAP8[i1 + i5 | 0] | 0;
  do {
   if ((i7 - 48 & 255) >>> 0 < 10 >>> 0) {
    i8 = i4 << 4;
    i9 = i7 & 255;
    i10 = 6;
   } else {
    i11 = i7 & 255;
    if (((i11 | 32) - 97 | 0) >>> 0 >= 6 >>> 0) {
     i6 = 0;
     i10 = 14;
     break L3;
    }
    i12 = i4 << 4;
    if ((i7 & 255) >>> 0 < 65 >>> 0) {
     i8 = i12;
     i9 = i11;
     i10 = 6;
     break;
    }
    i13 = i11 + 9 & 15;
    i14 = i12;
   }
  } while (0);
  if ((i10 | 0) == 6) {
   i10 = 0;
   i13 = i9 - 48 | 0;
   i14 = i8;
  }
  i4 = i13 | i14;
  i5 = i5 + 1 | 0;
  if (i5 >>> 0 >= i2 >>> 0) {
   break;
  }
 }
 if ((i10 | 0) == 14) {
  return i6 | 0;
 }
 if ((i2 | 0) == 6) {
  HEAP32[i3 >> 2] = i4 | -16777216;
  i6 = 1;
  return i6 | 0;
 } else {
  i2 = i4 & 3840;
  i10 = i4 & 240;
  i5 = i4 & 15;
  HEAP32[i3 >> 2] = i5 | i2 << 8 | i2 << 12 | i10 << 8 | i10 << 4 | i5 << 4 | -16777216;
  i6 = 1;
  return i6 | 0;
 }
 return 0;
}
function __ZNK7WebCore5Color14blendWithWhiteEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, d11 = +0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 & -16777216 | 0) == -16777216) {
  i4 = 153;
  i5 = 0;
  i6 = 0;
 } else {
  i7 = i2;
  i2 = i1;
  i8 = HEAP32[i7 + 4 >> 2] | 0;
  HEAP32[i2 >> 2] = HEAP32[i7 >> 2];
  HEAP32[i2 + 4 >> 2] = i8;
  return;
 }
 while (1) {
  if ((i4 | 0) >= 205) {
   i9 = i5;
   i10 = i6;
   break;
  }
  d11 = +(i4 | 0) / +255;
  i8 = i4 - 255 | 0;
  i2 = ~~(+(i8 + (i3 >>> 16 & 255) | 0) / d11);
  i7 = ~~(+(i8 + (i3 >>> 8 & 255) | 0) / d11);
  i12 = ~~(+(i8 + (i3 & 255) | 0) / d11);
  i8 = (i2 | 0) > 255 ? 255 : i2;
  i13 = (i7 | 0) > 255 ? 255 : i7;
  i14 = (i12 | 0) > 255 ? 255 : i12;
  i15 = ((i8 | 0) > 0 ? i8 << 16 : 0) | i4 << 24 | ((i13 | 0) > 0 ? i13 << 8 : 0) | ((i14 | 0) > 0 ? i14 : 0);
  if ((i7 | i2 | i12 | 0) > -1) {
   i9 = i15;
   i10 = 1;
   break;
  } else {
   i4 = i4 + 17 | 0;
   i5 = i15;
   i6 = 1;
  }
 }
 i6 = i1;
 HEAP32[i6 >> 2] = i9;
 HEAP32[i6 + 4 >> 2] = i10 & 255;
 return;
}
function __ZNK7WebCore5Color5lightEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, d4 = +0, d5 = +0, d6 = +0, d7 = +0, d8 = +0, d9 = +0, d10 = +0, i11 = 0, i12 = 0, i13 = 0;
 i3 = i2 | 0;
 if ((HEAP32[i3 >> 2] | 0) == -16777216) {
  HEAP32[i1 >> 2] = -11250604;
  HEAP8[i1 + 4 | 0] = 1;
  return;
 }
 d4 = +_nextafterf(+256, +0);
 i2 = HEAP32[i3 >> 2] | 0;
 d5 = +(i2 >>> 16 & 255 | 0) / +255;
 d6 = +(i2 >>> 8 & 255 | 0) / +255;
 d7 = +(i2 & 255 | 0) / +255;
 i3 = i2 >>> 24;
 d8 = d6 < d7 ? d7 : d6;
 d9 = d5 < d8 ? d8 : d5;
 if (d9 == +0) {
  HEAP32[i1 >> 2] = i3 << 24 | 5526612;
  HEAP8[i1 + 4 | 0] = 1;
  return;
 } else {
  d8 = d9 + +.33000001311302185;
  d10 = (d8 < +1 ? d8 : +1) / d9;
  i2 = ~~(d4 * d5 * d10);
  i11 = ~~(d4 * d6 * d10);
  i12 = ~~(d4 * d7 * d10);
  i13 = (i2 | 0) > 255 ? 255 : i2;
  i2 = (i11 | 0) > 255 ? 255 : i11;
  i11 = (i12 | 0) > 255 ? 255 : i12;
  HEAP32[i1 >> 2] = ((i13 | 0) > 0 ? i13 << 16 : 0) | i3 << 24 | ((i2 | 0) > 0 ? i2 << 8 : 0) | ((i11 | 0) > 0 ? i11 : 0);
  HEAP8[i1 + 4 | 0] = 1;
  return;
 }
}
function __ZNK7WebCore5Color4darkEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, d4 = +0, d5 = +0, d6 = +0, d7 = +0, d8 = +0, d9 = +0, i10 = 0, i11 = 0, i12 = 0;
 i3 = i2 | 0;
 if ((HEAP32[i3 >> 2] | 0) == -1) {
  HEAP32[i1 >> 2] = -5526613;
  HEAP8[i1 + 4 | 0] = 1;
  return;
 } else {
  d4 = +_nextafterf(+256, +0);
  i2 = HEAP32[i3 >> 2] | 0;
  d5 = +(i2 >>> 16 & 255 | 0) / +255;
  d6 = +(i2 >>> 8 & 255 | 0) / +255;
  d7 = +(i2 & 255 | 0) / +255;
  d8 = d6 < d7 ? d7 : d6;
  d9 = d5 < d8 ? d8 : d5;
  d8 = (d9 + +-.33000001311302185) / d9;
  d9 = d8 > +0 ? d8 : +0;
  i3 = ~~(d4 * d5 * d9);
  i10 = ~~(d4 * d6 * d9);
  i11 = ~~(d4 * d7 * d9);
  i12 = (i3 | 0) > 255 ? 255 : i3;
  i3 = (i10 | 0) > 255 ? 255 : i10;
  i10 = (i11 | 0) > 255 ? 255 : i11;
  HEAP32[i1 >> 2] = ((i12 | 0) > 0 ? i12 << 16 : 0) | i2 & -16777216 | ((i3 | 0) > 0 ? i3 << 8 : 0) | ((i10 | 0) > 0 ? i10 : 0);
  HEAP8[i1 + 4 | 0] = 1;
  return;
 }
}
function __ZN7WebCore5ColorC2EPKc(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 if ((HEAP8[i2] | 0) != 35) {
  i5 = __ZN7WebCore9findColorEPKcj(i2, _strlen(i2 | 0) | 0) | 0;
  i6 = (i5 | 0) != 0;
  if (i6) {
   i7 = HEAP32[i5 + 4 >> 2] | 0;
  } else {
   i7 = 0;
  }
  HEAP32[i1 >> 2] = i7;
  HEAP8[i1 + 4 | 0] = i6 & 1;
  STACKTOP = i3;
  return;
 }
 __ZN3WTF6StringC1EPKc(i4, i2 + 1 | 0);
 HEAP8[i1 + 4 | 0] = (__ZN7WebCore5Color13parseHexColorERKN3WTF6StringERj(i4, i1 | 0) | 0) & 1;
 i1 = HEAP32[i4 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = i1 | 0;
 i2 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i4 >> 2] = i2;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore5ColorC1EPKc(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 if ((HEAP8[i2] | 0) != 35) {
  i5 = __ZN7WebCore9findColorEPKcj(i2, _strlen(i2 | 0) | 0) | 0;
  i6 = (i5 | 0) != 0;
  if (i6) {
   i7 = HEAP32[i5 + 4 >> 2] | 0;
  } else {
   i7 = 0;
  }
  HEAP32[i1 >> 2] = i7;
  HEAP8[i1 + 4 | 0] = i6 & 1;
  STACKTOP = i3;
  return;
 }
 __ZN3WTF6StringC1EPKc(i4, i2 + 1 | 0);
 HEAP8[i1 + 4 | 0] = (__ZN7WebCore5Color13parseHexColorERKN3WTF6StringERj(i4, i1 | 0) | 0) & 1;
 i1 = HEAP32[i4 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = i1 | 0;
 i2 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i4 >> 2] = i2;
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore5Color23nameForRenderTreeAsTextEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 i4 = HEAP32[i2 >> 2] | 0;
 i2 = i4 >>> 24;
 i5 = i4 >>> 16 & 255;
 i6 = i4 >>> 8 & 255;
 i7 = i4 & 255;
 if ((i2 | 0) == 255) {
  __ZN3WTF6String6formatEPKcz(i1, H_BASE + 8 | 0, (i8 = STACKTOP, STACKTOP = STACKTOP + 24 | 0, HEAP32[i8 >> 2] = i5, HEAP32[i8 + 8 >> 2] = i6, HEAP32[i8 + 16 >> 2] = i7, i8) | 0);
  STACKTOP = i8;
  STACKTOP = i3;
  return;
 } else {
  __ZN3WTF6String6formatEPKcz(i1, H_BASE + 24 | 0, (i8 = STACKTOP, STACKTOP = STACKTOP + 32 | 0, HEAP32[i8 >> 2] = i5, HEAP32[i8 + 8 >> 2] = i6, HEAP32[i8 + 16 >> 2] = i7, HEAP32[i8 + 24 >> 2] = i2, i8) | 0);
  STACKTOP = i8;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore26premultipliedARGBFromColorERKNS_5ColorE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 i1 = i2 >>> 24;
 if ((i1 | 0) == 255) {
  i3 = i2;
  return i3 | 0;
 }
 i4 = (Math_imul(i2 >>> 16 & 255, i1) | 0) + 254 & 65535;
 i5 = (i4 & 65535) >>> 8;
 i6 = (Math_imul(i2 >>> 8 & 255, i1) | 0) + 254 & 65535;
 i7 = (i6 & 65535) >>> 8;
 i8 = (Math_imul(i2 & 255, i1) | 0) + 254 & 65535;
 i2 = (i8 & 65535) >>> 8;
 i3 = (((i8 + 1 & 65535) + (i2 * -255 & 65535) & 65535) >>> 8) + i2 & 65535 | i1 << 24 | ((((i4 + 1 & 65535) + (i5 * -255 & 65535) & 65535) >>> 8) + i5 & 65535) << 16 | ((((i6 + 1 & 65535) + (i7 * -255 & 65535) & 65535) >>> 8) + i7 & 65535) << 8;
 return i3 | 0;
}
function __ZN7WebCore17makeRGBAFromCMYKAEfffff(d1, d2, d3, d4, d5) {
 d1 = +d1;
 d2 = +d2;
 d3 = +d3;
 d4 = +d4;
 d5 = +d5;
 var d6 = +0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 d6 = +1 - d4;
 i7 = ~~((+1 - d1) * d6 * +_nextafter(+256, +0));
 i8 = ~~((+1 - d2) * d6 * +_nextafter(+256, +0));
 i9 = ~~((+1 - d3) * d6 * +_nextafter(+256, +0));
 i10 = ~~(d5 * +_nextafter(+256, +0));
 i11 = (i10 | 0) > 255 ? 255 : i10;
 i10 = (i7 | 0) > 255 ? 255 : i7;
 i7 = (i8 | 0) > 255 ? 255 : i8;
 i8 = (i9 | 0) > 255 ? 255 : i9;
 return ((i7 | 0) > 0 ? i7 << 8 : 0) | ((i10 | 0) > 0 ? i10 << 16 : 0) | ((i8 | 0) > 0 ? i8 : 0) | ((i11 | 0) > 0 ? i11 << 24 : 0) | 0;
}
function __ZN7WebCore20makeRGBA32FromFloatsEffff(d1, d2, d3, d4) {
 d1 = +d1;
 d2 = +d2;
 d3 = +d3;
 d4 = +d4;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i5 = _round(+(d4 * +255)) | 0;
 i6 = (i5 | 0) > 255 ? 255 : i5;
 i5 = _round(+(d1 * +255)) | 0;
 i7 = (i5 | 0) > 255 ? 255 : i5;
 i5 = _round(+(d2 * +255)) | 0;
 i8 = (i5 | 0) > 255 ? 255 : i5;
 i5 = _round(+(d3 * +255)) | 0;
 i9 = (i5 | 0) > 255 ? 255 : i5;
 return ((i7 | 0) > 0 ? i7 << 16 : 0) | ((i6 | 0) > 0 ? i6 << 24 : 0) | ((i8 | 0) > 0 ? i8 << 8 : 0) | ((i9 | 0) > 0 ? i9 : 0) | 0;
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
function __ZN7WebCore26colorFromPremultipliedARGBEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i2 >>> 24;
 if ((i3 | 0) == 255 | (i3 | 0) == 0) {
  HEAP32[i1 >> 2] = i2;
  HEAP8[i1 + 4 | 0] = 1;
  return;
 } else {
  HEAP32[i1 >> 2] = ((((i2 >>> 16 & 255) * 255 & -1) >>> 0) / (i3 >>> 0) & -1) << 16 | i3 << 24 | ((((i2 >>> 8 & 255) * 255 & -1) >>> 0) / (i3 >>> 0) & -1) << 8 | (((i2 & 255) * 255 & -1) >>> 0) / (i3 >>> 0) & -1;
  HEAP8[i1 + 4 | 0] = 1;
  return;
 }
}
function __ZNK7WebCore5Color7getRGBAERfS1_S1_S1_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0;
 i6 = i1 | 0;
 HEAPF32[i2 >> 2] = +((HEAP32[i6 >> 2] | 0) >>> 16 & 255 | 0) / +255;
 HEAPF32[i3 >> 2] = +((HEAP32[i6 >> 2] | 0) >>> 8 & 255 | 0) / +255;
 HEAPF32[i4 >> 2] = +(HEAP32[i6 >> 2] & 255 | 0) / +255;
 HEAPF32[i5 >> 2] = +((HEAP32[i6 >> 2] | 0) >>> 24 | 0) / +255;
 return;
}
function __ZNK7WebCore5Color7getRGBAERdS1_S1_S1_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0;
 i6 = i1 | 0;
 HEAPF64[i2 >> 3] = +((HEAP32[i6 >> 2] | 0) >>> 16 & 255 | 0) / +255;
 HEAPF64[i3 >> 3] = +((HEAP32[i6 >> 2] | 0) >>> 8 & 255 | 0) / +255;
 HEAPF64[i4 >> 3] = +(HEAP32[i6 >> 2] & 255 | 0) / +255;
 HEAPF64[i5 >> 3] = +((HEAP32[i6 >> 2] | 0) >>> 24 | 0) / +255;
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
function __ZN7WebCore17differenceSquaredERKNS_5ColorES2_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 i2 = (i3 >>> 16 & 255) - (i1 >>> 16 & 255) | 0;
 i4 = (i3 >>> 8 & 255) - (i1 >>> 8 & 255) | 0;
 i5 = (i3 & 255) - (i1 & 255) | 0;
 return (Math_imul(i4, i4) | 0) + (Math_imul(i5, i5) | 0) + (Math_imul(i2, i2) | 0) | 0;
}
function __ZNK7WebCore5Color6isDarkEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, d3 = +0, d4 = +0, d5 = +0, i6 = 0, d7 = +0;
 i2 = HEAP32[i1 >> 2] | 0;
 d3 = +(i2 >>> 16 & 255 | 0) / +255;
 d4 = +(i2 >>> 8 & 255 | 0) / +255;
 d5 = +(i2 & 255 | 0) / +255;
 if (+(i2 >>> 24 | 0) / +255 <= +.5) {
  i6 = 0;
  return i6 | 0;
 }
 d7 = d4 < d5 ? d5 : d4;
 i6 = (d3 < d7 ? d7 : d3) < +.5;
 return i6 | 0;
}
function __ZN7WebCore8makeRGBAEiiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 i5 = (i4 | 0) > 255 ? 255 : i4;
 i4 = (i1 | 0) > 255 ? 255 : i1;
 i1 = (i2 | 0) > 255 ? 255 : i2;
 i2 = (i3 | 0) > 255 ? 255 : i3;
 return ((i1 | 0) > 0 ? i1 << 8 : 0) | ((i4 | 0) > 0 ? i4 << 16 : 0) | ((i2 | 0) > 0 ? i2 : 0) | ((i5 | 0) > 0 ? i5 << 24 : 0) | 0;
}
function __ZN7WebCore7makeRGBEiii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = (i1 | 0) > 255 ? 255 : i1;
 i1 = (i2 | 0) > 255 ? 255 : i2;
 i2 = (i3 | 0) > 255 ? 255 : i3;
 return ((i4 | 0) > 0 ? i4 << 16 | -16777216 : -16777216) | ((i1 | 0) > 0 ? i1 << 8 : 0) | ((i2 | 0) > 0 ? i2 : 0) | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore22colorWithOverrideAlphaEjf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var i3 = 0, i4 = 0;
 i3 = _round(+(d2 * +255)) | 0;
 i4 = (i3 | 0) > 255 ? 255 : i3;
 return ((i4 | 0) > 0 ? i4 << 24 : 0) | i1 & 16777215 | 0;
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
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 7](i2 | 0, i3 | 0);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 1](i2 | 0);
}
function b4(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(4);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
}
function __ZN3WTF15CrashOnOverflow10overflowedEv() {
 _WTFCrash();
}
function b1(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(1);
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
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0];
  var FUNCTION_TABLE_vii = [b1,b1,__ZN7WebCore5ColorC2EPKc,b1,__ZN7WebCore5ColorC2ERKN3WTF6StringE,b1,b1,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_iii = [b4,b4];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_free": _free, "_round": _round, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore17differenceSquaredERKNS_5ColorES2_","_strlen","__ZN3WTF15appendByteAsHexINS_13StringBuilderEEEvhRT_NS_17HexConversionModeE","__ZN7WebCore26premultipliedARGBFromColorERKNS_5ColorE","__ZN7WebCore5ColorC2ERKN3WTF6StringE","__ZNK7WebCore5Color6isDarkEv","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZNK7WebCore5Color10serializedEv","__ZNK7WebCore5Color14blendWithWhiteEv","__ZNK7WebCore5Color23nameForRenderTreeAsTextEv","_memset","__ZN7WebCore16makeRGBAFromHSLAEdddd","__ZN7WebCore8makeRGBAEiiii","__ZN7WebCore17makeRGBAFromCMYKAEfffff","__ZN3WTF6VectorIhLj0ENS_15CrashOnOverflowEE6appendIcEEvPKT_j","__ZN7WebCore5Color13parseHexColorERKN3WTF6StringERj","__ZNK7WebCore5Color5lightEv","__ZN7WebCore20makeRGBA32FromFloatsEffff","__ZN7WebCore5Color13parseHexColorEPKtjRj","__ZN3WTF12appendNumberIhEEvRNS_6VectorIT_Lj0ENS_15CrashOnOverflowEEEh","__ZN7WebCore5Color13parseHexColorEPKhjRj","__ZNK7WebCore5Color6getHSLERdS1_S1_","__ZNK7WebCore5Color7getRGBAERfS1_S1_S1_","__ZNK7WebCore5Color4darkEv","__ZN7WebCore26colorFromPremultipliedARGBEj","__ZN7WebCore5ColorC2EPKc","__ZN7WebCore7makeRGBEiii","__ZN7WebCore5Color13setNamedColorERKN3WTF6StringE","__ZN7WebCore22colorWithOverrideAlphaEjf","__ZNK7WebCore5Color5blendERKS0_","_memcpy","__ZNK7WebCore5Color7getRGBAERdS1_S1_S1_"]

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
H_BASE = parentModule["_malloc"](352 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 352;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,69,254,0,0,0,0,0,0,206,37,0,0,0,0,0,0,201,37,0,0,0,0,0,0,16,32,0,0,0,0,0,0,34,32,0,0,0,0,0,0,179,37,0,0,0,0,0,0,178,37,0,0,0,0,0,0,70,254,0,0,0,0,0,0,203,37,0,0,0,0,0,0,230,37,0,0,0,0,0,0,45,0,0,0,0,0,0,0,207,37,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_iiii(index,a1,a2,a3) {
  try {
    return Module["dynCall_iiii"](index,a1,a2,a3);
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
  var __ZTVN7WebCore16QuoteContentDataE=env.__ZTVN7WebCore16QuoteContentDataE|0;
  var __ZN3WTF8nullAtomE=env.__ZN3WTF8nullAtomE|0;
  var __ZTVN7WebCore18CounterContentDataE=env.__ZTVN7WebCore18CounterContentDataE|0;
  var __ZN7WebCore13StyleResolver22s_styleNotYetAvailableE=env.__ZN7WebCore13StyleResolver22s_styleNotYetAvailableE|0;
  var __ZTVN7WebCore15TextContentDataE=env.__ZTVN7WebCore15TextContentDataE|0;
  var __ZTVN7WebCore16ImageContentDataE=env.__ZTVN7WebCore16ImageContentDataE|0;
  var __ZTVN7WebCore23ScaleTransformOperationE=env.__ZTVN7WebCore23ScaleTransformOperationE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZZN7WebCore12defaultStyleEvE5style=(H_BASE+328)|0;
  var __ZGVZN7WebCore12defaultStyleEvE5style=(H_BASE+352)|0;
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
  var invoke_iiii=env.invoke_iiii;
  var invoke_vi=env.invoke_vi;
  var invoke_ii=env.invoke_ii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _ceilf=env._ceilf;
  var ___setErrNo=env.___setErrNo;
  var _llvm_uadd_with_overflow_i32=env._llvm_uadd_with_overflow_i32;
  var _malloc=env._malloc;
  var _free=env._free;
  var _round=env._round;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZNK7WebCore11RenderStyle20changeRequiresLayoutEPKS0_Rj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, d14 = +0, d15 = +0, i16 = 0, i17 = 0, d18 = +0, d19 = +0, i20 = 0, i21 = 0, d22 = +0, d23 = +0, i24 = 0, i25 = 0, d26 = +0, d27 = +0, i28 = 0, i29 = 0, d30 = +0, d31 = +0, i32 = 0, i33 = 0, d34 = +0, d35 = +0, d36 = +0, d37 = +0, i38 = 0, i39 = 0, d40 = +0, d41 = +0, i42 = 0, i43 = 0, d44 = +0, d45 = +0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, d55 = +0, d56 = +0, i57 = 0, i58 = 0, d59 = +0, d60 = +0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i5 + 4 | 0;
 i7 = i2 + 4 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = i8 + 4 | 0;
 i10 = HEAP8[i5 + 9 | 0] | 0;
 if (i10 << 24 >> 24 != (HEAP8[i8 + 9 | 0] | 0)) {
  i11 = 1;
  return i11 | 0;
 }
 if (((HEAP8[i8 + 8 | 0] ^ HEAP8[i5 + 8 | 0]) & 1) != 0) {
  i11 = 1;
  return i11 | 0;
 }
 do {
  if (i10 << 24 >> 24 == 15) {
   i12 = i5;
   i13 = i8;
  } else {
   if ((HEAP8[i5 + 10 | 0] & 1) == 0) {
    d14 = +(HEAP32[i6 >> 2] | 0);
   } else {
    d14 = +HEAPF32[i6 >> 2];
   }
   if ((HEAP8[i8 + 10 | 0] & 1) == 0) {
    d15 = +(HEAP32[i9 >> 2] | 0);
   } else {
    d15 = +HEAPF32[i9 >> 2];
   }
   if (d14 == d15) {
    i12 = i5;
    i13 = i8;
    break;
   }
   if (__ZNK7WebCore6Length17isCalculatedEqualERKS0_(i6, i9) | 0) {
    i12 = HEAP32[i4 >> 2] | 0;
    i13 = HEAP32[i7 >> 2] | 0;
    break;
   } else {
    i11 = 1;
    return i11 | 0;
   }
  }
 } while (0);
 i9 = i12 + 20 | 0;
 i6 = i13 + 20 | 0;
 i8 = HEAP8[i12 + 25 | 0] | 0;
 if (i8 << 24 >> 24 != (HEAP8[i13 + 25 | 0] | 0)) {
  i11 = 1;
  return i11 | 0;
 }
 if (((HEAP8[i13 + 24 | 0] ^ HEAP8[i12 + 24 | 0]) & 1) != 0) {
  i11 = 1;
  return i11 | 0;
 }
 do {
  if (i8 << 24 >> 24 == 15) {
   i16 = i12;
   i17 = i13;
  } else {
   if ((HEAP8[i12 + 26 | 0] & 1) == 0) {
    d18 = +(HEAP32[i9 >> 2] | 0);
   } else {
    d18 = +HEAPF32[i9 >> 2];
   }
   if ((HEAP8[i13 + 26 | 0] & 1) == 0) {
    d19 = +(HEAP32[i6 >> 2] | 0);
   } else {
    d19 = +HEAPF32[i6 >> 2];
   }
   if (d18 == d19) {
    i16 = i12;
    i17 = i13;
    break;
   }
   if (__ZNK7WebCore6Length17isCalculatedEqualERKS0_(i9, i6) | 0) {
    i16 = HEAP32[i4 >> 2] | 0;
    i17 = HEAP32[i7 >> 2] | 0;
    break;
   } else {
    i11 = 1;
    return i11 | 0;
   }
  }
 } while (0);
 i6 = i16 + 28 | 0;
 i9 = i17 + 28 | 0;
 i13 = HEAP8[i16 + 33 | 0] | 0;
 if (i13 << 24 >> 24 != (HEAP8[i17 + 33 | 0] | 0)) {
  i11 = 1;
  return i11 | 0;
 }
 if (((HEAP8[i17 + 32 | 0] ^ HEAP8[i16 + 32 | 0]) & 1) != 0) {
  i11 = 1;
  return i11 | 0;
 }
 do {
  if (i13 << 24 >> 24 == 15) {
   i20 = i16;
   i21 = i17;
  } else {
   if ((HEAP8[i16 + 34 | 0] & 1) == 0) {
    d22 = +(HEAP32[i6 >> 2] | 0);
   } else {
    d22 = +HEAPF32[i6 >> 2];
   }
   if ((HEAP8[i17 + 34 | 0] & 1) == 0) {
    d23 = +(HEAP32[i9 >> 2] | 0);
   } else {
    d23 = +HEAPF32[i9 >> 2];
   }
   if (d22 == d23) {
    i20 = i16;
    i21 = i17;
    break;
   }
   if (__ZNK7WebCore6Length17isCalculatedEqualERKS0_(i6, i9) | 0) {
    i20 = HEAP32[i4 >> 2] | 0;
    i21 = HEAP32[i7 >> 2] | 0;
    break;
   } else {
    i11 = 1;
    return i11 | 0;
   }
  }
 } while (0);
 i9 = i20 + 12 | 0;
 i6 = i21 + 12 | 0;
 i17 = HEAP8[i20 + 17 | 0] | 0;
 if (i17 << 24 >> 24 != (HEAP8[i21 + 17 | 0] | 0)) {
  i11 = 1;
  return i11 | 0;
 }
 if (((HEAP8[i21 + 16 | 0] ^ HEAP8[i20 + 16 | 0]) & 1) != 0) {
  i11 = 1;
  return i11 | 0;
 }
 do {
  if (i17 << 24 >> 24 == 15) {
   i24 = i20;
   i25 = i21;
  } else {
   if ((HEAP8[i20 + 18 | 0] & 1) == 0) {
    d26 = +(HEAP32[i9 >> 2] | 0);
   } else {
    d26 = +HEAPF32[i9 >> 2];
   }
   if ((HEAP8[i21 + 18 | 0] & 1) == 0) {
    d27 = +(HEAP32[i6 >> 2] | 0);
   } else {
    d27 = +HEAPF32[i6 >> 2];
   }
   if (d26 == d27) {
    i24 = i20;
    i25 = i21;
    break;
   }
   if (__ZNK7WebCore6Length17isCalculatedEqualERKS0_(i9, i6) | 0) {
    i24 = HEAP32[i4 >> 2] | 0;
    i25 = HEAP32[i7 >> 2] | 0;
    break;
   } else {
    i11 = 1;
    return i11 | 0;
   }
  }
 } while (0);
 i6 = i24 + 36 | 0;
 i9 = i25 + 36 | 0;
 i21 = HEAP8[i24 + 41 | 0] | 0;
 if (i21 << 24 >> 24 != (HEAP8[i25 + 41 | 0] | 0)) {
  i11 = 1;
  return i11 | 0;
 }
 if (((HEAP8[i25 + 40 | 0] ^ HEAP8[i24 + 40 | 0]) & 1) != 0) {
  i11 = 1;
  return i11 | 0;
 }
 do {
  if (i21 << 24 >> 24 == 15) {
   i28 = i24;
   i29 = i25;
  } else {
   if ((HEAP8[i24 + 42 | 0] & 1) == 0) {
    d30 = +(HEAP32[i6 >> 2] | 0);
   } else {
    d30 = +HEAPF32[i6 >> 2];
   }
   if ((HEAP8[i25 + 42 | 0] & 1) == 0) {
    d31 = +(HEAP32[i9 >> 2] | 0);
   } else {
    d31 = +HEAPF32[i9 >> 2];
   }
   if (d30 == d31) {
    i28 = i24;
    i29 = i25;
    break;
   }
   if (__ZNK7WebCore6Length17isCalculatedEqualERKS0_(i6, i9) | 0) {
    i28 = HEAP32[i4 >> 2] | 0;
    i29 = HEAP32[i7 >> 2] | 0;
    break;
   } else {
    i11 = 1;
    return i11 | 0;
   }
  }
 } while (0);
 i9 = i28 + 44 | 0;
 i6 = i29 + 44 | 0;
 i25 = HEAP8[i28 + 49 | 0] | 0;
 if (i25 << 24 >> 24 != (HEAP8[i29 + 49 | 0] | 0)) {
  i11 = 1;
  return i11 | 0;
 }
 if (((HEAP8[i29 + 48 | 0] ^ HEAP8[i28 + 48 | 0]) & 1) != 0) {
  i11 = 1;
  return i11 | 0;
 }
 do {
  if (i25 << 24 >> 24 == 15) {
   i32 = i28;
   i33 = i29;
  } else {
   if ((HEAP8[i28 + 50 | 0] & 1) == 0) {
    d34 = +(HEAP32[i9 >> 2] | 0);
   } else {
    d34 = +HEAPF32[i9 >> 2];
   }
   if ((HEAP8[i29 + 50 | 0] & 1) == 0) {
    d35 = +(HEAP32[i6 >> 2] | 0);
   } else {
    d35 = +HEAPF32[i6 >> 2];
   }
   if (d34 == d35) {
    i32 = i28;
    i33 = i29;
    break;
   }
   if (__ZNK7WebCore6Length17isCalculatedEqualERKS0_(i9, i6) | 0) {
    i32 = HEAP32[i4 >> 2] | 0;
    i33 = HEAP32[i7 >> 2] | 0;
    break;
   } else {
    i11 = 1;
    return i11 | 0;
   }
  }
 } while (0);
 i6 = i32 + 52 | 0;
 i9 = i33 + 52 | 0;
 i29 = HEAP8[i32 + 57 | 0] | 0;
 if (i29 << 24 >> 24 != (HEAP8[i33 + 57 | 0] | 0)) {
  i11 = 1;
  return i11 | 0;
 }
 if (((HEAP8[i33 + 56 | 0] ^ HEAP8[i32 + 56 | 0]) & 1) != 0) {
  i11 = 1;
  return i11 | 0;
 }
 do {
  if (i29 << 24 >> 24 != 15) {
   if ((HEAP8[i32 + 58 | 0] & 1) == 0) {
    d36 = +(HEAP32[i6 >> 2] | 0);
   } else {
    d36 = +HEAPF32[i6 >> 2];
   }
   if ((HEAP8[i33 + 58 | 0] & 1) == 0) {
    d37 = +(HEAP32[i9 >> 2] | 0);
   } else {
    d37 = +HEAPF32[i9 >> 2];
   }
   if (d36 == d37) {
    break;
   }
   if (__ZNK7WebCore6Length17isCalculatedEqualERKS0_(i6, i9) | 0) {
    break;
   } else {
    i11 = 1;
   }
   return i11 | 0;
  }
 } while (0);
 i9 = i1 + 48 | 0;
 i6 = i2 + 48 | 0;
 if (((HEAP32[i6 >> 2] ^ HEAP32[i9 >> 2]) & 983040 | 0) != 0) {
  i11 = 1;
  return i11 | 0;
 }
 if (((HEAP32[(HEAP32[i7 >> 2] | 0) + 64 >> 2] ^ HEAP32[(HEAP32[i4 >> 2] | 0) + 64 >> 2]) & 2 | 0) != 0) {
  i11 = 1;
  return i11 | 0;
 }
 i7 = i1 + 16 | 0;
 i33 = i2 + 16 | 0;
 if (!(__ZNK7WebCore9LengthBoxeqERKS0_((HEAP32[i7 >> 2] | 0) + 36 | 0, (HEAP32[i33 >> 2] | 0) + 36 | 0) | 0)) {
  i11 = 1;
  return i11 | 0;
 }
 if (!(__ZNK7WebCore9LengthBoxeqERKS0_((HEAP32[i7 >> 2] | 0) + 68 | 0, (HEAP32[i33 >> 2] | 0) + 68 | 0) | 0)) {
  i11 = 1;
  return i11 | 0;
 }
 i32 = i1 + 20 | 0;
 i29 = HEAP32[i32 >> 2] | 0;
 i28 = i2 + 20 | 0;
 i25 = HEAP32[i28 >> 2] | 0;
 do {
  if ((i29 | 0) != (i25 | 0)) {
   i24 = HEAP32[i25 + 296 >> 2] ^ HEAP32[i29 + 296 >> 2];
   if ((i24 & 63 | 0) != 0) {
    i11 = 1;
    return i11 | 0;
   }
   i21 = HEAP32[i25 + 292 >> 2] ^ HEAP32[i29 + 292 >> 2];
   if ((i21 & 1006632960 | 0) != 0) {
    i11 = 1;
    return i11 | 0;
   }
   if ((HEAP32[i29 + 40 >> 2] | 0) != (HEAP32[i25 + 40 >> 2] | 0)) {
    i11 = 1;
    return i11 | 0;
   }
   if ((HEAP32[i29 + 36 >> 2] | 0) == 1 ^ (HEAP32[i25 + 36 >> 2] | 0) == 1) {
    i11 = 1;
    return i11 | 0;
   }
   if ((i21 & 33554433 | 0) != 0) {
    i11 = 1;
    return i11 | 0;
   }
   if ((i24 & 30720 | 0) != 0) {
    i11 = 1;
    return i11 | 0;
   }
   i24 = i29 + 192 | 0;
   i21 = i25 + 192 | 0;
   i20 = HEAP8[i29 + 197 | 0] | 0;
   if (i20 << 24 >> 24 != (HEAP8[i25 + 197 | 0] | 0)) {
    i11 = 1;
    return i11 | 0;
   }
   if (((HEAP8[i25 + 196 | 0] ^ HEAP8[i29 + 196 | 0]) & 1) != 0) {
    i11 = 1;
    return i11 | 0;
   }
   do {
    if (i20 << 24 >> 24 == 15) {
     i38 = i29;
     i39 = i25;
    } else {
     if ((HEAP8[i29 + 198 | 0] & 1) == 0) {
      d40 = +(HEAP32[i24 >> 2] | 0);
     } else {
      d40 = +HEAPF32[i24 >> 2];
     }
     if ((HEAP8[i25 + 198 | 0] & 1) == 0) {
      d41 = +(HEAP32[i21 >> 2] | 0);
     } else {
      d41 = +HEAPF32[i21 >> 2];
     }
     if (d40 == d41) {
      i38 = i29;
      i39 = i25;
      break;
     }
     if (__ZNK7WebCore6Length17isCalculatedEqualERKS0_(i24, i21) | 0) {
      i38 = HEAP32[i32 >> 2] | 0;
      i39 = HEAP32[i28 >> 2] | 0;
      break;
     } else {
      i11 = 1;
      return i11 | 0;
     }
    }
   } while (0);
   i21 = i38 + 200 | 0;
   i24 = i39 + 200 | 0;
   i20 = HEAP8[i38 + 205 | 0] | 0;
   if (i20 << 24 >> 24 != (HEAP8[i39 + 205 | 0] | 0)) {
    i11 = 1;
    return i11 | 0;
   }
   if (((HEAP8[i39 + 204 | 0] ^ HEAP8[i38 + 204 | 0]) & 1) != 0) {
    i11 = 1;
    return i11 | 0;
   }
   do {
    if (i20 << 24 >> 24 == 15) {
     i42 = i38;
     i43 = i39;
    } else {
     if ((HEAP8[i38 + 206 | 0] & 1) == 0) {
      d44 = +(HEAP32[i21 >> 2] | 0);
     } else {
      d44 = +HEAPF32[i21 >> 2];
     }
     if ((HEAP8[i39 + 206 | 0] & 1) == 0) {
      d45 = +(HEAP32[i24 >> 2] | 0);
     } else {
      d45 = +HEAPF32[i24 >> 2];
     }
     if (d44 == d45) {
      i42 = i38;
      i43 = i39;
      break;
     }
     if (__ZNK7WebCore6Length17isCalculatedEqualERKS0_(i21, i24) | 0) {
      i42 = HEAP32[i32 >> 2] | 0;
      i43 = HEAP32[i28 >> 2] | 0;
      break;
     } else {
      i11 = 1;
      return i11 | 0;
     }
    }
   } while (0);
   i24 = HEAP32[i42 + 56 >> 2] | 0;
   i21 = HEAP32[i43 + 56 >> 2] | 0;
   do {
    if ((i24 | 0) == (i21 | 0)) {
     i46 = i42;
     i47 = i43;
    } else {
     if (__ZNK7WebCore30StyleDeprecatedFlexibleBoxDataeqERKS0_(i24, i21) | 0) {
      i46 = HEAP32[i32 >> 2] | 0;
      i47 = HEAP32[i28 >> 2] | 0;
      break;
     } else {
      i11 = 1;
      return i11 | 0;
     }
    }
   } while (0);
   i21 = HEAP32[i46 + 60 >> 2] | 0;
   i24 = HEAP32[i47 + 60 >> 2] | 0;
   do {
    if ((i21 | 0) == (i24 | 0)) {
     i48 = i46;
     i49 = i47;
    } else {
     if (__ZNK7WebCore20StyleFlexibleBoxDataeqERKS0_(i21, i24) | 0) {
      i48 = HEAP32[i32 >> 2] | 0;
      i49 = HEAP32[i28 >> 2] | 0;
      break;
     } else {
      i11 = 1;
      return i11 | 0;
     }
    }
   } while (0);
   if ((HEAP32[i48 + 280 >> 2] | 0) != (HEAP32[i49 + 280 >> 2] | 0)) {
    i11 = 1;
    return i11 | 0;
   }
   if (((HEAP32[i49 + 292 >> 2] ^ HEAP32[i48 + 292 >> 2]) & 8386560 | 0) != 0) {
    i11 = 1;
    return i11 | 0;
   }
   if (!(__ZNK7WebCore25StyleRareNonInheritedData20shadowDataEquivalentERKS0_(i48, i49) | 0)) {
    i11 = 1;
    return i11 | 0;
   }
   if (!(__ZNK7WebCore25StyleRareNonInheritedData24reflectionDataEquivalentERKS0_(HEAP32[i32 >> 2] | 0, HEAP32[i28 >> 2] | 0) | 0)) {
    i11 = 1;
    return i11 | 0;
   }
   i24 = HEAP32[i32 >> 2] | 0;
   i21 = HEAP32[i24 + 68 >> 2] | 0;
   i20 = HEAP32[i28 >> 2] | 0;
   i17 = HEAP32[i20 + 68 >> 2] | 0;
   do {
    if ((i21 | 0) == (i17 | 0)) {
     i50 = i24;
     i51 = i20;
    } else {
     if (__ZNK7WebCore17StyleMultiColDataeqERKS0_(i21, i17) | 0) {
      i50 = HEAP32[i32 >> 2] | 0;
      i51 = HEAP32[i28 >> 2] | 0;
      break;
     } else {
      i11 = 1;
      return i11 | 0;
     }
    }
   } while (0);
   i17 = HEAP32[i50 + 72 >> 2] | 0;
   i21 = HEAP32[i51 + 72 >> 2] | 0;
   do {
    if ((i17 | 0) != (i21 | 0)) {
     if (__ZNK7WebCore18StyleTransformDataeqERKS0_(i17, i21) | 0) {
      break;
     }
     HEAP32[i3 >> 2] = HEAP32[i3 >> 2] | 1;
    }
   } while (0);
   i21 = HEAP32[i32 >> 2] | 0;
   i17 = HEAP32[i28 >> 2] | 0;
   if ((HEAP32[i21 + 80 >> 2] | 0) != (HEAP32[i17 + 80 >> 2] | 0)) {
    i11 = 1;
    return i11 | 0;
   }
   if ((HEAP32[i21 + 84 >> 2] | 0) != (HEAP32[i17 + 84 >> 2] | 0)) {
    i11 = 1;
    return i11 | 0;
   }
   i20 = HEAP32[i21 + 52 >> 2] | 0;
   if ((i20 | 0) != (HEAP32[i17 + 52 >> 2] | 0)) {
    i11 = 1;
    return i11 | 0;
   }
   i24 = HEAP32[i21 + 44 >> 2] | 0;
   i21 = HEAP32[i17 + 44 >> 2] | 0;
   i17 = 0;
   while (1) {
    if (i17 >>> 0 >= i20 >>> 0) {
     i52 = 143;
     break;
    }
    if ((HEAP32[i24 + (i17 * 40 & -1) + 36 >> 2] | 0) != (HEAP32[i21 + (i17 * 40 & -1) + 36 >> 2] | 0)) {
     i11 = 1;
     i52 = 307;
     break;
    }
    if (!(__ZNK7WebCore9LengthBoxeqERKS0_(i24 + (i17 * 40 & -1) + 4 | 0, i21 + (i17 * 40 & -1) + 4 | 0) | 0)) {
     i11 = 1;
     i52 = 308;
     break;
    }
    if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i24 + (i17 * 40 & -1) >> 2] | 0, HEAP32[i21 + (i17 * 40 & -1) >> 2] | 0) | 0) {
     i17 = i17 + 1 | 0;
    } else {
     i11 = 1;
     i52 = 309;
     break;
    }
   }
   if ((i52 | 0) == 143) {
    if ((HEAP32[(HEAP32[i32 >> 2] | 0) + 184 >> 2] | 0) == (HEAP32[(HEAP32[i28 >> 2] | 0) + 184 >> 2] | 0)) {
     break;
    } else {
     i11 = 1;
    }
    return i11 | 0;
   } else if ((i52 | 0) == 307) {
    return i11 | 0;
   } else if ((i52 | 0) == 308) {
    return i11 | 0;
   } else if ((i52 | 0) == 309) {
    return i11 | 0;
   }
  }
 } while (0);
 i3 = i1 + 24 | 0;
 i51 = HEAP32[i3 >> 2] | 0;
 i50 = i2 + 24 | 0;
 i49 = HEAP32[i50 >> 2] | 0;
 do {
  if ((i51 | 0) != (i49 | 0)) {
   if ((HEAP32[i51 + 64 >> 2] | 0) != (HEAP32[i49 + 64 >> 2] | 0)) {
    i11 = 1;
    return i11 | 0;
   }
   i48 = i51 + 72 | 0;
   i47 = i49 + 72 | 0;
   i46 = HEAP8[i51 + 77 | 0] | 0;
   if (i46 << 24 >> 24 != (HEAP8[i49 + 77 | 0] | 0)) {
    i11 = 1;
    return i11 | 0;
   }
   if (((HEAP8[i49 + 76 | 0] ^ HEAP8[i51 + 76 | 0]) & 1) != 0) {
    i11 = 1;
    return i11 | 0;
   }
   do {
    if (i46 << 24 >> 24 == 15) {
     i53 = i51;
     i54 = i49;
    } else {
     if ((HEAP8[i51 + 78 | 0] & 1) == 0) {
      d55 = +(HEAP32[i48 >> 2] | 0);
     } else {
      d55 = +HEAPF32[i48 >> 2];
     }
     if ((HEAP8[i49 + 78 | 0] & 1) == 0) {
      d56 = +(HEAP32[i47 >> 2] | 0);
     } else {
      d56 = +HEAPF32[i47 >> 2];
     }
     if (d55 == d56) {
      i53 = i51;
      i54 = i49;
      break;
     }
     if (__ZNK7WebCore6Length17isCalculatedEqualERKS0_(i48, i47) | 0) {
      i53 = HEAP32[i3 >> 2] | 0;
      i54 = HEAP32[i50 >> 2] | 0;
      break;
     } else {
      i11 = 1;
      return i11 | 0;
     }
    }
   } while (0);
   if (+HEAPF32[i53 + 80 >> 2] != +HEAPF32[i54 + 80 >> 2]) {
    i11 = 1;
    return i11 | 0;
   }
   i47 = HEAP32[i54 + 88 >> 2] ^ HEAP32[i53 + 88 >> 2];
   if ((i47 & 6299596 | 0) != 0) {
    i11 = 1;
    return i11 | 0;
   }
   if ((HEAP16[i53 + 100 >> 1] | 0) != (HEAP16[i54 + 100 >> 1] | 0)) {
    i11 = 1;
    return i11 | 0;
   }
   if ((HEAP16[i53 + 102 >> 1] | 0) != (HEAP16[i54 + 102 >> 1] | 0)) {
    i11 = 1;
    return i11 | 0;
   }
   if ((HEAP32[i53 + 96 >> 2] | 0) != (HEAP32[i54 + 96 >> 2] | 0)) {
    i11 = 1;
    return i11 | 0;
   }
   if ((HEAP32[i53 + 108 >> 2] | 0) != (HEAP32[i54 + 108 >> 2] | 0)) {
    i11 = 1;
    return i11 | 0;
   }
   i48 = HEAP32[i54 + 92 >> 2] ^ HEAP32[i53 + 92 >> 2];
   if ((i48 & 1048576 | 0) != 0) {
    i11 = 1;
    return i11 | 0;
   }
   if ((i47 & 251658240 | 0) != 0) {
    i11 = 1;
    return i11 | 0;
   }
   if ((HEAP32[i53 + 112 >> 2] | 0) != (HEAP32[i54 + 112 >> 2] | 0)) {
    i11 = 1;
    return i11 | 0;
   }
   if ((i47 & 805306368 | 0) != 0) {
    i11 = 1;
    return i11 | 0;
   }
   if ((HEAP32[i53 + 124 >> 2] | 0) != (HEAP32[i54 + 124 >> 2] | 0)) {
    i11 = 1;
    return i11 | 0;
   }
   if ((i48 & 127 | 0) != 0) {
    i11 = 1;
    return i11 | 0;
   }
   if ((HEAP32[i53 + 120 >> 2] | 0) != (HEAP32[i54 + 120 >> 2] | 0)) {
    i11 = 1;
    return i11 | 0;
   }
   if ((i48 & 3584 | 0) != 0) {
    i11 = 1;
    return i11 | 0;
   }
   if ((HEAP32[i53 + 4 >> 2] | 0) != (HEAP32[i54 + 4 >> 2] | 0)) {
    i11 = 1;
    return i11 | 0;
   }
   if (!(__ZNK7WebCore22StyleRareInheritedData20shadowDataEquivalentERKS0_(i53, i54) | 0)) {
    i11 = 1;
    return i11 | 0;
   }
   if (+HEAPF32[(HEAP32[i3 >> 2] | 0) + 16 >> 2] != +HEAPF32[(HEAP32[i50 >> 2] | 0) + 16 >> 2]) {
    i11 = 1;
   } else {
    break;
   }
   return i11 | 0;
  }
 } while (0);
 i54 = i1 + 28 | 0;
 i53 = HEAP32[i54 >> 2] | 0;
 i49 = i53 + 8 | 0;
 i51 = i2 + 28 | 0;
 i48 = HEAP32[i51 >> 2] | 0;
 i47 = i48 + 8 | 0;
 i46 = HEAP8[i53 + 13 | 0] | 0;
 if (i46 << 24 >> 24 != (HEAP8[i48 + 13 | 0] | 0)) {
  i11 = 1;
  return i11 | 0;
 }
 if (((HEAP8[i48 + 12 | 0] ^ HEAP8[i53 + 12 | 0]) & 1) != 0) {
  i11 = 1;
  return i11 | 0;
 }
 do {
  if (i46 << 24 >> 24 == 15) {
   i57 = i53;
   i58 = i48;
  } else {
   if ((HEAP8[i53 + 14 | 0] & 1) == 0) {
    d59 = +(HEAP32[i49 >> 2] | 0);
   } else {
    d59 = +HEAPF32[i49 >> 2];
   }
   if ((HEAP8[i48 + 14 | 0] & 1) == 0) {
    d60 = +(HEAP32[i47 >> 2] | 0);
   } else {
    d60 = +HEAPF32[i47 >> 2];
   }
   if (d59 == d60) {
    i57 = i53;
    i58 = i48;
    break;
   }
   if (__ZNK7WebCore6Length17isCalculatedEqualERKS0_(i49, i47) | 0) {
    i57 = HEAP32[i54 >> 2] | 0;
    i58 = HEAP32[i51 >> 2] | 0;
    break;
   } else {
    i11 = 1;
    return i11 | 0;
   }
  }
 } while (0);
 if (!(__ZNK7WebCore4FonteqERKS0_(i57 + 16 | 0, i58 + 16 | 0) | 0)) {
  i11 = 1;
  return i11 | 0;
 }
 i58 = HEAP32[i54 >> 2] | 0;
 i54 = HEAP32[i51 >> 2] | 0;
 if ((HEAP16[i58 + 4 >> 1] | 0) != (HEAP16[i54 + 4 >> 1] | 0)) {
  i11 = 1;
  return i11 | 0;
 }
 if ((HEAP16[i58 + 6 >> 1] | 0) != (HEAP16[i54 + 6 >> 1] | 0)) {
  i11 = 1;
  return i11 | 0;
 }
 i54 = i1 + 40 | 0;
 i1 = HEAP32[i54 + 4 >> 2] | 0;
 i58 = i2 + 40 | 0;
 i2 = HEAP32[i58 + 4 >> 2] | 0;
 i51 = i2 ^ i1;
 if ((i51 & 48 | 0) != 0) {
  i11 = 1;
  return i11 | 0;
 }
 i57 = HEAP32[i9 >> 2] | 0;
 i47 = HEAP32[i6 >> 2] ^ i57;
 if ((i47 & 130024416 | 0) != 0) {
  i11 = 1;
  return i11 | 0;
 }
 do {
  if ((i57 & 30) >>> 0 > 5 >>> 0) {
   i6 = i1 >>> 3 & 1;
   if ((i6 | 0) != (i2 >>> 3 & 1 | 0)) {
    i11 = 1;
    return i11 | 0;
   }
   if (((HEAP32[i58 >> 2] ^ HEAP32[i54 >> 2]) & 7 | 0) != 0) {
    i11 = 1;
    return i11 | 0;
   }
   if ((i47 & 134217728 | 0) != 0) {
    i11 = 1;
    return i11 | 0;
   }
   if ((i6 | 0) == 0) {
    break;
   }
   i6 = HEAP32[i7 >> 2] | 0;
   i49 = HEAP32[i6 + 120 >> 2] & 2013265920;
   do {
    if ((i49 | 0) == 134217728) {
     if ((HEAP32[(HEAP32[i33 >> 2] | 0) + 120 >> 2] & 2013265920 | 0) == 0) {
      i11 = 1;
     } else {
      break;
     }
     return i11 | 0;
    } else if ((i49 | 0) == 0) {
     if ((HEAP32[(HEAP32[i33 >> 2] | 0) + 120 >> 2] & 2013265920 | 0) == 134217728) {
      i11 = 1;
     } else {
      break;
     }
     return i11 | 0;
    }
   } while (0);
   i49 = HEAP32[i6 + 128 >> 2] & 2013265920;
   do {
    if ((i49 | 0) == 134217728) {
     if ((HEAP32[(HEAP32[i33 >> 2] | 0) + 128 >> 2] & 2013265920 | 0) == 0) {
      i11 = 1;
     } else {
      break;
     }
     return i11 | 0;
    } else if ((i49 | 0) == 0) {
     if ((HEAP32[(HEAP32[i33 >> 2] | 0) + 128 >> 2] & 2013265920 | 0) == 134217728) {
      i11 = 1;
     } else {
      break;
     }
     return i11 | 0;
    }
   } while (0);
   i49 = HEAP32[i6 + 104 >> 2] & 2013265920;
   do {
    if ((i49 | 0) == 134217728) {
     if ((HEAP32[(HEAP32[i33 >> 2] | 0) + 104 >> 2] & 2013265920 | 0) == 0) {
      i11 = 1;
     } else {
      break;
     }
     return i11 | 0;
    } else if ((i49 | 0) == 0) {
     if ((HEAP32[(HEAP32[i33 >> 2] | 0) + 104 >> 2] & 2013265920 | 0) == 134217728) {
      i11 = 1;
     } else {
      break;
     }
     return i11 | 0;
    }
   } while (0);
   i49 = HEAP32[i6 + 112 >> 2] & 2013265920;
   if ((i49 | 0) == 134217728) {
    if ((HEAP32[(HEAP32[i33 >> 2] | 0) + 112 >> 2] & 2013265920 | 0) == 0) {
     i11 = 1;
    } else {
     break;
    }
    return i11 | 0;
   } else if ((i49 | 0) == 0) {
    if ((HEAP32[(HEAP32[i33 >> 2] | 0) + 112 >> 2] & 2013265920 | 0) == 134217728) {
     i11 = 1;
    } else {
     break;
    }
    return i11 | 0;
   } else {
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i54 >> 2] | 0;
 i1 = HEAP32[i58 >> 2] | 0;
 do {
  if ((i57 & 31 | 0) == 2) {
   if (((i1 ^ i2) & 2040 | 0) == 0) {
    break;
   } else {
    i11 = 1;
   }
   return i11 | 0;
  }
 } while (0);
 i57 = i54;
 i54 = i58;
 if (((i1 ^ i2) & 1074257920 | 0) != 0) {
  i11 = 1;
  return i11 | 0;
 }
 if ((i51 & 7 | 0) != 0) {
  i11 = 1;
  return i11 | 0;
 }
 if ((i47 & 1882193920 | 0) != 0) {
  i11 = 1;
  return i11 | 0;
 }
 if ((i51 & 24576 | 0) != 0) {
  i11 = 1;
  return i11 | 0;
 }
 i51 = HEAP32[i32 >> 2] | 0;
 i2 = HEAP32[i28 >> 2] | 0;
 if (((HEAP32[i2 + 296 >> 2] ^ HEAP32[i51 + 296 >> 2]) & 128 | 0) != 0) {
  i11 = 1;
  return i11 | 0;
 }
 if ((i47 & 64512 | 0) != 0) {
  i11 = 1;
  return i11 | 0;
 }
 i47 = HEAP32[i7 >> 2] | 0;
 i1 = (HEAP32[(HEAP32[i47 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0;
 i58 = HEAP32[i47 + 104 >> 2] | 0;
 if (i1) {
  if ((i58 & 1879048192) >>> 0 < 268435456 >>> 0) {
   i61 = 0;
  } else {
   i52 = 219;
  }
 } else {
  i52 = 219;
 }
 if ((i52 | 0) == 219) {
  i61 = i58 >>> 1 & 67108863;
 }
 i58 = HEAP32[i33 >> 2] | 0;
 i49 = (HEAP32[(HEAP32[i58 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0;
 i48 = HEAP32[i58 + 104 >> 2] | 0;
 if (i49) {
  if ((i48 & 1879048192) >>> 0 < 268435456 >>> 0) {
   i62 = 0;
  } else {
   i52 = 222;
  }
 } else {
  i52 = 222;
 }
 if ((i52 | 0) == 222) {
  i62 = i48 >>> 1 & 67108863;
 }
 if ((i61 | 0) != (i62 | 0)) {
  i11 = 1;
  return i11 | 0;
 }
 i62 = HEAP32[i47 + 120 >> 2] | 0;
 if (i1) {
  if ((i62 & 1879048192) >>> 0 < 268435456 >>> 0) {
   i63 = 0;
  } else {
   i52 = 226;
  }
 } else {
  i52 = 226;
 }
 if ((i52 | 0) == 226) {
  i63 = i62 >>> 1 & 67108863;
 }
 i62 = HEAP32[i58 + 120 >> 2] | 0;
 if (i49) {
  if ((i62 & 1879048192) >>> 0 < 268435456 >>> 0) {
   i64 = 0;
  } else {
   i52 = 229;
  }
 } else {
  i52 = 229;
 }
 if ((i52 | 0) == 229) {
  i64 = i62 >>> 1 & 67108863;
 }
 if ((i63 | 0) != (i64 | 0)) {
  i11 = 1;
  return i11 | 0;
 }
 i64 = HEAP32[i47 + 128 >> 2] | 0;
 if (i1) {
  if ((i64 & 1879048192) >>> 0 < 268435456 >>> 0) {
   i65 = 0;
  } else {
   i52 = 233;
  }
 } else {
  i52 = 233;
 }
 if ((i52 | 0) == 233) {
  i65 = i64 >>> 1 & 67108863;
 }
 i64 = HEAP32[i58 + 128 >> 2] | 0;
 if (i49) {
  if ((i64 & 1879048192) >>> 0 < 268435456 >>> 0) {
   i66 = 0;
  } else {
   i52 = 236;
  }
 } else {
  i52 = 236;
 }
 if ((i52 | 0) == 236) {
  i66 = i64 >>> 1 & 67108863;
 }
 if ((i65 | 0) != (i66 | 0)) {
  i11 = 1;
  return i11 | 0;
 }
 i66 = HEAP32[i47 + 112 >> 2] | 0;
 if (i1) {
  if ((i66 & 1879048192) >>> 0 < 268435456 >>> 0) {
   i67 = 0;
  } else {
   i52 = 240;
  }
 } else {
  i52 = 240;
 }
 if ((i52 | 0) == 240) {
  i67 = i66 >>> 1 & 67108863;
 }
 i66 = HEAP32[i58 + 112 >> 2] | 0;
 if (i49) {
  if ((i66 & 1879048192) >>> 0 < 268435456 >>> 0) {
   i68 = 0;
  } else {
   i52 = 243;
  }
 } else {
  i52 = 243;
 }
 if ((i52 | 0) == 243) {
  i68 = i66 >>> 1 & 67108863;
 }
 if ((i67 | 0) != (i68 | 0)) {
  i11 = 1;
  return i11 | 0;
 }
 i68 = HEAP32[i51 + 92 >> 2] | 0;
 i51 = HEAP32[i2 + 92 >> 2] | 0;
 do {
  if ((i68 | 0) != (i51 | 0)) {
   if ((i68 | 0) == 0 | (i51 | 0) == 0) {
    i11 = 1;
    return i11 | 0;
   }
   if (__ZN3WTFeqINS_12AtomicStringEN7WebCore17CounterDirectivesENS_16AtomicStringHashENS_10HashTraitsIS1_EENS5_IS3_EEEEbRKNS_7HashMapIT_T0_T1_T2_T3_EESG_(i68, i51) | 0) {
    break;
   } else {
    i11 = 1;
   }
   return i11 | 0;
  }
 } while (0);
 if ((HEAP32[i57 >> 2] & 6144 | 0) == 4096 ^ (HEAP32[i54 >> 2] & 6144 | 0) == 4096) {
  i11 = 1;
  return i11 | 0;
 }
 i54 = HEAP32[i32 >> 2] | 0;
 if (+HEAPF32[i54 + 4 >> 2] < +1 ^ +HEAPF32[(HEAP32[i28 >> 2] | 0) + 4 >> 2] < +1) {
  i11 = 1;
  return i11 | 0;
 }
 i32 = __ZNK7WebCore25StyleRareNonInheritedData10hasFiltersEv(i54) | 0;
 if (i32 ^ (__ZNK7WebCore25StyleRareNonInheritedData10hasFiltersEv(HEAP32[i28 >> 2] | 0) | 0)) {
  i11 = 1;
  return i11 | 0;
 }
 i28 = HEAP32[(HEAP32[i3 >> 2] | 0) + 116 >> 2] | 0;
 i3 = HEAP32[(HEAP32[i50 >> 2] | 0) + 116 >> 2] | 0;
 do {
  if ((i28 | 0) != (i3 | 0)) {
   if ((i28 | 0) == 0 | (i3 | 0) == 0) {
    i11 = 1;
    return i11 | 0;
   }
   if (__ZN7WebCoreeqERKNS_10QuotesDataES2_(i28, i3) | 0) {
    break;
   } else {
    i11 = 1;
   }
   return i11 | 0;
  }
 } while (0);
 do {
  if ((HEAP32[i9 >> 2] & 29360128 | 0) != 0) {
   if (__ZNK7WebCore9LengthBoxeqERKS0_((HEAP32[i7 >> 2] | 0) + 4 | 0, (HEAP32[i33 >> 2] | 0) + 4 | 0) | 0) {
    break;
   }
   if ((HEAP32[i9 >> 2] & 29360128 | 0) != 8388608) {
    i11 = 1;
    return i11 | 0;
   }
   if (__ZN7WebCoreL28positionChangeIsMovementOnlyERKNS_9LengthBoxES2_RKNS_6LengthE((HEAP32[i7 >> 2] | 0) + 4 | 0, (HEAP32[i33 >> 2] | 0) + 4 | 0, (HEAP32[i4 >> 2] | 0) + 4 | 0) | 0) {
    break;
   } else {
    i11 = 1;
   }
   return i11 | 0;
  }
 } while (0);
 i11 = 0;
 return i11 | 0;
}
function __ZN7WebCore11RenderStyle10setContentERKN3WTF6StringEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i1 + 20 | 0;
 i1 = HEAP32[i12 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i13 = i1;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i9, i1);
  i1 = HEAP32[i9 >> 2] | 0;
  i9 = HEAP32[i12 >> 2] | 0;
  i14 = i9 | 0;
  i15 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
  if ((i15 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i9);
   __ZN3WTF8fastFreeEPv(i9);
  } else {
   HEAP32[i14 >> 2] = i15;
  }
  HEAP32[i12 >> 2] = i1;
  i13 = i1;
 }
 i1 = i13 + 88 | 0;
 L8 : do {
  if (i3) {
   i13 = HEAP32[i1 >> 2] | 0;
   while (1) {
    if ((i13 | 0) == 0) {
     break L8;
    }
    i16 = i13 + 4 | 0;
    i15 = HEAP32[i16 >> 2] | 0;
    if ((i15 | 0) == 0) {
     break;
    } else {
     i13 = i15;
    }
   }
   do {
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 20 >> 2] & 1](i13) | 0) {
     i15 = i13 + 12 | 0;
     i14 = HEAP32[i2 >> 2] | 0;
     i9 = (i14 | 0) == 0;
     if (!i9) {
      i17 = i14 | 0;
      HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 2;
     }
     i17 = i15;
     i18 = HEAP32[i17 >> 2] | 0;
     i19 = (i18 | 0) == 0;
     if (!i19) {
      i20 = i18 | 0;
      HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 2;
     }
     if (!i9) {
      i20 = i14 | 0;
      HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 2;
     }
     i20 = i11 | 0;
     HEAP32[i20 >> 2] = i18;
     if (!i19) {
      i21 = i18 | 0;
      HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 2;
     }
     i21 = i11 + 4 | 0;
     HEAP32[i21 >> 2] = i14;
     do {
      if (!i9) {
       i22 = i14 | 0;
       i23 = HEAP32[i22 >> 2] | 0;
       HEAP32[i22 >> 2] = i23 + 2;
       if ((i23 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i14);
        break;
       } else {
        HEAP32[i22 >> 2] = i23;
        break;
       }
      }
     } while (0);
     do {
      if (!i19) {
       i23 = i18 | 0;
       i22 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
       if ((i22 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i18);
        break;
       } else {
        HEAP32[i23 >> 2] = i22;
        break;
       }
      }
     } while (0);
     __ZNK3WTF12StringAppendINS_6StringES1_EcvS1_Ev(i10, i11);
     i18 = HEAP32[i10 >> 2] | 0;
     i19 = (i18 | 0) == 0;
     if (!i19) {
      i22 = i18 | 0;
      HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 2;
     }
     i22 = HEAP32[i17 >> 2] | 0;
     HEAP32[i15 >> 2] = i18;
     do {
      if ((i22 | 0) != 0) {
       i23 = i22 | 0;
       i24 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
       if ((i24 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i22);
        break;
       } else {
        HEAP32[i23 >> 2] = i24;
        break;
       }
      }
     } while (0);
     do {
      if (!i19) {
       i22 = i18 | 0;
       i15 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
       if ((i15 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i18);
        break;
       } else {
        HEAP32[i22 >> 2] = i15;
        break;
       }
      }
     } while (0);
     i18 = HEAP32[i21 >> 2] | 0;
     do {
      if ((i18 | 0) != 0) {
       i19 = i18 | 0;
       i15 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
       if ((i15 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i18);
        break;
       } else {
        HEAP32[i19 >> 2] = i15;
        break;
       }
      }
     } while (0);
     i18 = HEAP32[i20 >> 2] | 0;
     do {
      if ((i18 | 0) != 0) {
       i21 = i18 | 0;
       i15 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
       if ((i15 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i18);
        break;
       } else {
        HEAP32[i21 >> 2] = i15;
        break;
       }
      }
     } while (0);
     if (i9) {
      break;
     }
     i18 = i14 | 0;
     i20 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
     if ((i20 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i14);
      break;
     } else {
      HEAP32[i18 >> 2] = i20;
      break;
     }
    } else {
     i20 = __ZN3WTF10fastMallocEj(16) | 0;
     HEAP32[i20 + 4 >> 2] = 0;
     HEAP32[i20 + 8 >> 2] = 0;
     HEAP32[i20 >> 2] = __ZTVN7WebCore15TextContentDataE + 8;
     i18 = HEAP32[i2 >> 2] | 0;
     HEAP32[i20 + 12 >> 2] = i18;
     if ((i18 | 0) != 0) {
      i15 = i18 | 0;
      HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 2;
     }
     i15 = HEAP32[i16 >> 2] | 0;
     HEAP32[i16 >> 2] = i20;
     if ((i15 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 1](i15);
    }
   } while (0);
   i15 = HEAP32[i12 >> 2] | 0;
   if ((HEAP32[i15 >> 2] | 0) == 1) {
    i25 = i15;
   } else {
    __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i7, i15);
    i15 = HEAP32[i7 >> 2] | 0;
    i20 = HEAP32[i12 >> 2] | 0;
    i18 = i20 | 0;
    i21 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
    if ((i21 | 0) == 0) {
     __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i20);
     __ZN3WTF8fastFreeEPv(i20);
    } else {
     HEAP32[i18 >> 2] = i21;
    }
    HEAP32[i12 >> 2] = i15;
    i25 = i15;
   }
   if ((HEAP32[i25 + 96 >> 2] | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   if ((HEAP32[i25 >> 2] | 0) == 1) {
    i26 = i25;
   } else {
    __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i6, i25);
    i15 = HEAP32[i6 >> 2] | 0;
    i21 = HEAP32[i12 >> 2] | 0;
    i18 = i21 | 0;
    i20 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
    if ((i20 | 0) == 0) {
     __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i21);
     __ZN3WTF8fastFreeEPv(i21);
    } else {
     HEAP32[i18 >> 2] = i20;
    }
    HEAP32[i12 >> 2] = i15;
    i26 = i15;
   }
   i15 = HEAP32[i26 + 96 >> 2] | 0;
   if ((i15 | 0) != 0) {
    i20 = i15 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 2;
   }
   i20 = i13 + 8 | 0;
   i18 = HEAP32[i20 >> 2] | 0;
   HEAP32[i20 >> 2] = i15;
   if ((i18 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i15 = i18 | 0;
   i20 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i20 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i18);
    STACKTOP = i4;
    return;
   } else {
    HEAP32[i15 >> 2] = i20;
    STACKTOP = i4;
    return;
   }
  }
 } while (0);
 i26 = __ZN3WTF10fastMallocEj(16) | 0;
 HEAP32[i26 + 4 >> 2] = 0;
 HEAP32[i26 + 8 >> 2] = 0;
 HEAP32[i26 >> 2] = __ZTVN7WebCore15TextContentDataE + 8;
 i6 = HEAP32[i2 >> 2] | 0;
 HEAP32[i26 + 12 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i2 = i6 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 i2 = i1 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i26;
 if ((i1 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 1](i1);
 }
 i1 = HEAP32[i12 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i27 = i1;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i5, i1);
  i1 = HEAP32[i5 >> 2] | 0;
  i5 = HEAP32[i12 >> 2] | 0;
  i26 = i5 | 0;
  i6 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
  if ((i6 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  } else {
   HEAP32[i26 >> 2] = i6;
  }
  HEAP32[i12 >> 2] = i1;
  i27 = i1;
 }
 if ((HEAP32[i27 + 96 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i1 = HEAP32[i2 >> 2] | 0;
 if ((HEAP32[i27 >> 2] | 0) == 1) {
  i28 = i27;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i8, i27);
  i27 = HEAP32[i8 >> 2] | 0;
  i8 = HEAP32[i12 >> 2] | 0;
  i2 = i8 | 0;
  i6 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
  if ((i6 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i8);
   __ZN3WTF8fastFreeEPv(i8);
  } else {
   HEAP32[i2 >> 2] = i6;
  }
  HEAP32[i12 >> 2] = i27;
  i28 = i27;
 }
 i27 = HEAP32[i28 + 96 >> 2] | 0;
 if ((i27 | 0) != 0) {
  i28 = i27 | 0;
  HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 2;
 }
 i28 = i1 + 8 | 0;
 i1 = HEAP32[i28 >> 2] | 0;
 HEAP32[i28 >> 2] = i27;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i27 = i1 | 0;
 i28 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
 if ((i28 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i27 >> 2] = i28;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore11RenderStyle14setMarginStartENS_6LengthE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i8;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i11 = i10;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i13 = i12;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i15 = i14;
 i16 = (HEAP32[i1 + 44 >> 2] | 0) >>> 13 & 3;
 i17 = (HEAP32[i1 + 40 >> 2] & 1073741824 | 0) != 0;
 if ((i16 | 0) == 3 | (i16 | 0) == 0) {
  i16 = i2;
  i18 = HEAP32[i16 >> 2] | 0;
  i19 = HEAP32[i16 + 4 >> 2] | 0;
  if (i17) {
   HEAP32[i8 >> 2] = i18;
   HEAP32[i8 + 4 >> 2] = i19;
   if ((i18 & 0 | 0) == 0 & (i19 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i9);
   }
   i16 = i1 + 16 | 0;
   do {
    if (!(__Z12compareEqualIN7WebCore6LengthES1_EbRKT_RKT0_((HEAP32[i16 >> 2] | 0) + 36 | 0, i9) | 0)) {
     i20 = HEAP32[i16 >> 2] | 0;
     if ((HEAP32[i20 >> 2] | 0) == 1) {
      i21 = i20;
     } else {
      __ZNK7WebCore17StyleSurroundData4copyEv(i6, i20);
      i20 = HEAP32[i6 >> 2] | 0;
      i22 = HEAP32[i16 >> 2] | 0;
      i23 = i22 | 0;
      i24 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
      if ((i24 | 0) == 0) {
       __ZN7WebCore17StyleSurroundDataD2Ev(i22);
       __ZN3WTF8fastFreeEPv(i22);
      } else {
       HEAP32[i23 >> 2] = i24;
      }
      HEAP32[i16 >> 2] = i20;
      i21 = i20;
     }
     i20 = i21 + 36 | 0;
     if ((i20 | 0) == (i9 | 0)) {
      break;
     }
     i24 = i20;
     i20 = HEAP32[i8 + 4 >> 2] | 0;
     HEAP32[i24 >> 2] = HEAP32[i8 >> 2];
     HEAP32[i24 + 4 >> 2] = i20;
     HEAP8[i9 + 5 | 0] = 0;
    }
   } while (0);
   if ((HEAP8[i9 + 5 | 0] | 0) != 10) {
    STACKTOP = i3;
    return;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i9);
   STACKTOP = i3;
   return;
  } else {
   HEAP32[i10 >> 2] = i18;
   HEAP32[i10 + 4 >> 2] = i19;
   if ((i18 & 0 | 0) == 0 & (i19 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i11);
   }
   i19 = i1 + 16 | 0;
   do {
    if (!(__Z12compareEqualIN7WebCore6LengthES1_EbRKT_RKT0_((HEAP32[i19 >> 2] | 0) + 44 | 0, i11) | 0)) {
     i18 = HEAP32[i19 >> 2] | 0;
     if ((HEAP32[i18 >> 2] | 0) == 1) {
      i25 = i18;
     } else {
      __ZNK7WebCore17StyleSurroundData4copyEv(i5, i18);
      i18 = HEAP32[i5 >> 2] | 0;
      i9 = HEAP32[i19 >> 2] | 0;
      i8 = i9 | 0;
      i21 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
      if ((i21 | 0) == 0) {
       __ZN7WebCore17StyleSurroundDataD2Ev(i9);
       __ZN3WTF8fastFreeEPv(i9);
      } else {
       HEAP32[i8 >> 2] = i21;
      }
      HEAP32[i19 >> 2] = i18;
      i25 = i18;
     }
     i18 = i25 + 44 | 0;
     if ((i18 | 0) == (i11 | 0)) {
      break;
     }
     i21 = i18;
     i18 = HEAP32[i10 + 4 >> 2] | 0;
     HEAP32[i21 >> 2] = HEAP32[i10 >> 2];
     HEAP32[i21 + 4 >> 2] = i18;
     HEAP8[i11 + 5 | 0] = 0;
    }
   } while (0);
   if ((HEAP8[i11 + 5 | 0] | 0) != 10) {
    STACKTOP = i3;
    return;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i11);
   STACKTOP = i3;
   return;
  }
 } else {
  i11 = i2;
  i2 = HEAP32[i11 >> 2] | 0;
  i10 = HEAP32[i11 + 4 >> 2] | 0;
  if (i17) {
   HEAP32[i12 >> 2] = i2;
   HEAP32[i12 + 4 >> 2] = i10;
   if ((i2 & 0 | 0) == 0 & (i10 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i13);
   }
   i17 = i1 + 16 | 0;
   do {
    if (!(__Z12compareEqualIN7WebCore6LengthES1_EbRKT_RKT0_((HEAP32[i17 >> 2] | 0) + 52 | 0, i13) | 0)) {
     i11 = HEAP32[i17 >> 2] | 0;
     if ((HEAP32[i11 >> 2] | 0) == 1) {
      i26 = i11;
     } else {
      __ZNK7WebCore17StyleSurroundData4copyEv(i4, i11);
      i11 = HEAP32[i4 >> 2] | 0;
      i25 = HEAP32[i17 >> 2] | 0;
      i19 = i25 | 0;
      i5 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
      if ((i5 | 0) == 0) {
       __ZN7WebCore17StyleSurroundDataD2Ev(i25);
       __ZN3WTF8fastFreeEPv(i25);
      } else {
       HEAP32[i19 >> 2] = i5;
      }
      HEAP32[i17 >> 2] = i11;
      i26 = i11;
     }
     i11 = i26 + 52 | 0;
     if ((i11 | 0) == (i13 | 0)) {
      break;
     }
     i5 = i11;
     i11 = HEAP32[i12 + 4 >> 2] | 0;
     HEAP32[i5 >> 2] = HEAP32[i12 >> 2];
     HEAP32[i5 + 4 >> 2] = i11;
     HEAP8[i13 + 5 | 0] = 0;
    }
   } while (0);
   if ((HEAP8[i13 + 5 | 0] | 0) != 10) {
    STACKTOP = i3;
    return;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i13);
   STACKTOP = i3;
   return;
  } else {
   HEAP32[i14 >> 2] = i2;
   HEAP32[i14 + 4 >> 2] = i10;
   if ((i2 & 0 | 0) == 0 & (i10 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i15);
   }
   i10 = i1 + 16 | 0;
   do {
    if (!(__Z12compareEqualIN7WebCore6LengthES1_EbRKT_RKT0_((HEAP32[i10 >> 2] | 0) + 60 | 0, i15) | 0)) {
     i1 = HEAP32[i10 >> 2] | 0;
     if ((HEAP32[i1 >> 2] | 0) == 1) {
      i27 = i1;
     } else {
      __ZNK7WebCore17StyleSurroundData4copyEv(i7, i1);
      i1 = HEAP32[i7 >> 2] | 0;
      i2 = HEAP32[i10 >> 2] | 0;
      i13 = i2 | 0;
      i12 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
      if ((i12 | 0) == 0) {
       __ZN7WebCore17StyleSurroundDataD2Ev(i2);
       __ZN3WTF8fastFreeEPv(i2);
      } else {
       HEAP32[i13 >> 2] = i12;
      }
      HEAP32[i10 >> 2] = i1;
      i27 = i1;
     }
     i1 = i27 + 60 | 0;
     if ((i1 | 0) == (i15 | 0)) {
      break;
     }
     i12 = i1;
     i1 = HEAP32[i14 + 4 >> 2] | 0;
     HEAP32[i12 >> 2] = HEAP32[i14 >> 2];
     HEAP32[i12 + 4 >> 2] = i1;
     HEAP8[i15 + 5 | 0] = 0;
    }
   } while (0);
   if ((HEAP8[i15 + 5 | 0] | 0) != 10) {
    STACKTOP = i3;
    return;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i15);
   STACKTOP = i3;
   return;
  }
 }
}
function __ZN7WebCore11RenderStyle12setMarginEndENS_6LengthE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i8;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i11 = i10;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i13 = i12;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i15 = i14;
 i16 = (HEAP32[i1 + 44 >> 2] | 0) >>> 13 & 3;
 i17 = (HEAP32[i1 + 40 >> 2] & 1073741824 | 0) != 0;
 if ((i16 | 0) == 3 | (i16 | 0) == 0) {
  i16 = i2;
  i18 = HEAP32[i16 >> 2] | 0;
  i19 = HEAP32[i16 + 4 >> 2] | 0;
  if (i17) {
   HEAP32[i8 >> 2] = i18;
   HEAP32[i8 + 4 >> 2] = i19;
   if ((i18 & 0 | 0) == 0 & (i19 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i9);
   }
   i16 = i1 + 16 | 0;
   do {
    if (!(__Z12compareEqualIN7WebCore6LengthES1_EbRKT_RKT0_((HEAP32[i16 >> 2] | 0) + 44 | 0, i9) | 0)) {
     i20 = HEAP32[i16 >> 2] | 0;
     if ((HEAP32[i20 >> 2] | 0) == 1) {
      i21 = i20;
     } else {
      __ZNK7WebCore17StyleSurroundData4copyEv(i6, i20);
      i20 = HEAP32[i6 >> 2] | 0;
      i22 = HEAP32[i16 >> 2] | 0;
      i23 = i22 | 0;
      i24 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
      if ((i24 | 0) == 0) {
       __ZN7WebCore17StyleSurroundDataD2Ev(i22);
       __ZN3WTF8fastFreeEPv(i22);
      } else {
       HEAP32[i23 >> 2] = i24;
      }
      HEAP32[i16 >> 2] = i20;
      i21 = i20;
     }
     i20 = i21 + 44 | 0;
     if ((i20 | 0) == (i9 | 0)) {
      break;
     }
     i24 = i20;
     i20 = HEAP32[i8 + 4 >> 2] | 0;
     HEAP32[i24 >> 2] = HEAP32[i8 >> 2];
     HEAP32[i24 + 4 >> 2] = i20;
     HEAP8[i9 + 5 | 0] = 0;
    }
   } while (0);
   if ((HEAP8[i9 + 5 | 0] | 0) != 10) {
    STACKTOP = i3;
    return;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i9);
   STACKTOP = i3;
   return;
  } else {
   HEAP32[i10 >> 2] = i18;
   HEAP32[i10 + 4 >> 2] = i19;
   if ((i18 & 0 | 0) == 0 & (i19 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i11);
   }
   i19 = i1 + 16 | 0;
   do {
    if (!(__Z12compareEqualIN7WebCore6LengthES1_EbRKT_RKT0_((HEAP32[i19 >> 2] | 0) + 36 | 0, i11) | 0)) {
     i18 = HEAP32[i19 >> 2] | 0;
     if ((HEAP32[i18 >> 2] | 0) == 1) {
      i25 = i18;
     } else {
      __ZNK7WebCore17StyleSurroundData4copyEv(i5, i18);
      i18 = HEAP32[i5 >> 2] | 0;
      i9 = HEAP32[i19 >> 2] | 0;
      i8 = i9 | 0;
      i21 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
      if ((i21 | 0) == 0) {
       __ZN7WebCore17StyleSurroundDataD2Ev(i9);
       __ZN3WTF8fastFreeEPv(i9);
      } else {
       HEAP32[i8 >> 2] = i21;
      }
      HEAP32[i19 >> 2] = i18;
      i25 = i18;
     }
     i18 = i25 + 36 | 0;
     if ((i18 | 0) == (i11 | 0)) {
      break;
     }
     i21 = i18;
     i18 = HEAP32[i10 + 4 >> 2] | 0;
     HEAP32[i21 >> 2] = HEAP32[i10 >> 2];
     HEAP32[i21 + 4 >> 2] = i18;
     HEAP8[i11 + 5 | 0] = 0;
    }
   } while (0);
   if ((HEAP8[i11 + 5 | 0] | 0) != 10) {
    STACKTOP = i3;
    return;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i11);
   STACKTOP = i3;
   return;
  }
 } else {
  i11 = i2;
  i2 = HEAP32[i11 >> 2] | 0;
  i10 = HEAP32[i11 + 4 >> 2] | 0;
  if (i17) {
   HEAP32[i12 >> 2] = i2;
   HEAP32[i12 + 4 >> 2] = i10;
   if ((i2 & 0 | 0) == 0 & (i10 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i13);
   }
   i17 = i1 + 16 | 0;
   do {
    if (!(__Z12compareEqualIN7WebCore6LengthES1_EbRKT_RKT0_((HEAP32[i17 >> 2] | 0) + 60 | 0, i13) | 0)) {
     i11 = HEAP32[i17 >> 2] | 0;
     if ((HEAP32[i11 >> 2] | 0) == 1) {
      i26 = i11;
     } else {
      __ZNK7WebCore17StyleSurroundData4copyEv(i4, i11);
      i11 = HEAP32[i4 >> 2] | 0;
      i25 = HEAP32[i17 >> 2] | 0;
      i19 = i25 | 0;
      i5 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
      if ((i5 | 0) == 0) {
       __ZN7WebCore17StyleSurroundDataD2Ev(i25);
       __ZN3WTF8fastFreeEPv(i25);
      } else {
       HEAP32[i19 >> 2] = i5;
      }
      HEAP32[i17 >> 2] = i11;
      i26 = i11;
     }
     i11 = i26 + 60 | 0;
     if ((i11 | 0) == (i13 | 0)) {
      break;
     }
     i5 = i11;
     i11 = HEAP32[i12 + 4 >> 2] | 0;
     HEAP32[i5 >> 2] = HEAP32[i12 >> 2];
     HEAP32[i5 + 4 >> 2] = i11;
     HEAP8[i13 + 5 | 0] = 0;
    }
   } while (0);
   if ((HEAP8[i13 + 5 | 0] | 0) != 10) {
    STACKTOP = i3;
    return;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i13);
   STACKTOP = i3;
   return;
  } else {
   HEAP32[i14 >> 2] = i2;
   HEAP32[i14 + 4 >> 2] = i10;
   if ((i2 & 0 | 0) == 0 & (i10 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i15);
   }
   i10 = i1 + 16 | 0;
   do {
    if (!(__Z12compareEqualIN7WebCore6LengthES1_EbRKT_RKT0_((HEAP32[i10 >> 2] | 0) + 52 | 0, i15) | 0)) {
     i1 = HEAP32[i10 >> 2] | 0;
     if ((HEAP32[i1 >> 2] | 0) == 1) {
      i27 = i1;
     } else {
      __ZNK7WebCore17StyleSurroundData4copyEv(i7, i1);
      i1 = HEAP32[i7 >> 2] | 0;
      i2 = HEAP32[i10 >> 2] | 0;
      i13 = i2 | 0;
      i12 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
      if ((i12 | 0) == 0) {
       __ZN7WebCore17StyleSurroundDataD2Ev(i2);
       __ZN3WTF8fastFreeEPv(i2);
      } else {
       HEAP32[i13 >> 2] = i12;
      }
      HEAP32[i10 >> 2] = i1;
      i27 = i1;
     }
     i1 = i27 + 52 | 0;
     if ((i1 | 0) == (i15 | 0)) {
      break;
     }
     i12 = i1;
     i1 = HEAP32[i14 + 4 >> 2] | 0;
     HEAP32[i12 >> 2] = HEAP32[i14 >> 2];
     HEAP32[i12 + 4 >> 2] = i1;
     HEAP8[i15 + 5 | 0] = 0;
    }
   } while (0);
   if ((HEAP8[i15 + 5 | 0] | 0) != 10) {
    STACKTOP = i3;
    return;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i15);
   STACKTOP = i3;
   return;
  }
 }
}
function __ZN7WebCore11RenderStyle6createEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0;
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
 i11 = __ZN3WTF10fastMallocEj(56) | 0;
 i12 = i11;
 HEAP32[i11 >> 2] = 1;
 if ((HEAP8[H_BASE + 352 | 0] | 0) == 0) {
  __ZN7WebCore11RenderStyle18createDefaultStyleEv(i9);
  i13 = HEAP32[i9 >> 2] | 0;
  HEAP32[H_BASE + 328 >> 2] = i13;
  HEAP32[H_BASE + 352 >> 2] = 1;
  HEAP32[H_BASE + 356 >> 2] = 0;
  i14 = i13;
 } else {
  i14 = HEAP32[H_BASE + 328 >> 2] | 0;
 }
 i13 = HEAP32[i14 + 4 >> 2] | 0;
 HEAP32[i11 + 4 >> 2] = i13;
 i14 = i13 | 0;
 HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
 if ((HEAP8[H_BASE + 352 | 0] | 0) == 0) {
  __ZN7WebCore11RenderStyle18createDefaultStyleEv(i7);
  i14 = HEAP32[i7 >> 2] | 0;
  HEAP32[H_BASE + 328 >> 2] = i14;
  HEAP32[H_BASE + 352 >> 2] = 1;
  HEAP32[H_BASE + 356 >> 2] = 0;
  i15 = i14;
 } else {
  i15 = HEAP32[H_BASE + 328 >> 2] | 0;
 }
 i14 = HEAP32[i15 + 8 >> 2] | 0;
 HEAP32[i11 + 8 >> 2] = i14;
 i15 = i14 | 0;
 HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
 if ((HEAP8[H_BASE + 352 | 0] | 0) == 0) {
  __ZN7WebCore11RenderStyle18createDefaultStyleEv(i5);
  i15 = HEAP32[i5 >> 2] | 0;
  HEAP32[H_BASE + 328 >> 2] = i15;
  HEAP32[H_BASE + 352 >> 2] = 1;
  HEAP32[H_BASE + 356 >> 2] = 0;
  i16 = i15;
 } else {
  i16 = HEAP32[H_BASE + 328 >> 2] | 0;
 }
 i15 = HEAP32[i16 + 12 >> 2] | 0;
 HEAP32[i11 + 12 >> 2] = i15;
 i16 = i15 | 0;
 HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
 if ((HEAP8[H_BASE + 352 | 0] | 0) == 0) {
  __ZN7WebCore11RenderStyle18createDefaultStyleEv(i3);
  i16 = HEAP32[i3 >> 2] | 0;
  HEAP32[H_BASE + 328 >> 2] = i16;
  HEAP32[H_BASE + 352 >> 2] = 1;
  HEAP32[H_BASE + 356 >> 2] = 0;
  i17 = i16;
 } else {
  i17 = HEAP32[H_BASE + 328 >> 2] | 0;
 }
 i16 = HEAP32[i17 + 16 >> 2] | 0;
 HEAP32[i11 + 16 >> 2] = i16;
 i17 = i16 | 0;
 HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
 if ((HEAP8[H_BASE + 352 | 0] | 0) == 0) {
  __ZN7WebCore11RenderStyle18createDefaultStyleEv(i4);
  i17 = HEAP32[i4 >> 2] | 0;
  HEAP32[H_BASE + 328 >> 2] = i17;
  HEAP32[H_BASE + 352 >> 2] = 1;
  HEAP32[H_BASE + 356 >> 2] = 0;
  i18 = i17;
 } else {
  i18 = HEAP32[H_BASE + 328 >> 2] | 0;
 }
 i17 = HEAP32[i18 + 20 >> 2] | 0;
 HEAP32[i11 + 20 >> 2] = i17;
 i18 = i17 | 0;
 HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
 if ((HEAP8[H_BASE + 352 | 0] | 0) == 0) {
  __ZN7WebCore11RenderStyle18createDefaultStyleEv(i6);
  i18 = HEAP32[i6 >> 2] | 0;
  HEAP32[H_BASE + 328 >> 2] = i18;
  HEAP32[H_BASE + 352 >> 2] = 1;
  HEAP32[H_BASE + 356 >> 2] = 0;
  i19 = i18;
 } else {
  i19 = HEAP32[H_BASE + 328 >> 2] | 0;
 }
 i18 = HEAP32[i19 + 24 >> 2] | 0;
 HEAP32[i11 + 24 >> 2] = i18;
 i19 = i18 | 0;
 HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
 if ((HEAP8[H_BASE + 352 | 0] | 0) == 0) {
  __ZN7WebCore11RenderStyle18createDefaultStyleEv(i8);
  i19 = HEAP32[i8 >> 2] | 0;
  HEAP32[H_BASE + 328 >> 2] = i19;
  HEAP32[H_BASE + 352 >> 2] = 1;
  HEAP32[H_BASE + 356 >> 2] = 0;
  i20 = i19;
 } else {
  i20 = HEAP32[H_BASE + 328 >> 2] | 0;
 }
 i19 = HEAP32[i20 + 28 >> 2] | 0;
 HEAP32[i11 + 28 >> 2] = i19;
 i20 = i19 | 0;
 HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
 HEAP32[i11 + 32 >> 2] = 0;
 i20 = i11 + 36 | 0;
 if ((HEAP8[H_BASE + 352 | 0] | 0) == 0) {
  __ZN7WebCore11RenderStyle18createDefaultStyleEv(i10);
  i19 = HEAP32[i10 >> 2] | 0;
  HEAP32[H_BASE + 328 >> 2] = i19;
  HEAP32[H_BASE + 352 >> 2] = 1;
  HEAP32[H_BASE + 356 >> 2] = 0;
  i21 = i19;
  i22 = i21 + 36 | 0;
  i23 = HEAP32[i22 >> 2] | 0;
  i24 = i20;
  HEAP32[i24 >> 2] = i23;
  i25 = i23 | 0;
  i26 = HEAP32[i25 >> 2] | 0;
  i27 = i26 + 1 | 0;
  HEAP32[i25 >> 2] = i27;
  i28 = i11 + 40 | 0;
  i29 = i28;
  i30 = HEAP32[i29 >> 2] | 0;
  i31 = i30 & -2147483648;
  i32 = i31 | 1074192384;
  HEAP32[i29 >> 2] = i32;
  i33 = i11 + 44 | 0;
  i34 = i33;
  i35 = HEAP32[i34 >> 2] | 0;
  i36 = i35 & -32768;
  i37 = i36 | 128;
  HEAP32[i34 >> 2] = i37;
  i38 = i11 + 48 | 0;
  i39 = i38;
  i40 = HEAP32[i39 >> 2] | 0;
  i41 = i40 & -2147483648;
  HEAP32[i39 >> 2] = i41;
  i42 = i11 + 52 | 0;
  i43 = i42;
  i44 = HEAP32[i43 >> 2] | 0;
  i45 = i44 & -268435456;
  HEAP32[i43 >> 2] = i45;
  i46 = i1 | 0;
  HEAP32[i46 >> 2] = i12;
  STACKTOP = i2;
  return;
 } else {
  i21 = HEAP32[H_BASE + 328 >> 2] | 0;
  i22 = i21 + 36 | 0;
  i23 = HEAP32[i22 >> 2] | 0;
  i24 = i20;
  HEAP32[i24 >> 2] = i23;
  i25 = i23 | 0;
  i26 = HEAP32[i25 >> 2] | 0;
  i27 = i26 + 1 | 0;
  HEAP32[i25 >> 2] = i27;
  i28 = i11 + 40 | 0;
  i29 = i28;
  i30 = HEAP32[i29 >> 2] | 0;
  i31 = i30 & -2147483648;
  i32 = i31 | 1074192384;
  HEAP32[i29 >> 2] = i32;
  i33 = i11 + 44 | 0;
  i34 = i33;
  i35 = HEAP32[i34 >> 2] | 0;
  i36 = i35 & -32768;
  i37 = i36 | 128;
  HEAP32[i34 >> 2] = i37;
  i38 = i11 + 48 | 0;
  i39 = i38;
  i40 = HEAP32[i39 >> 2] | 0;
  i41 = i40 & -2147483648;
  HEAP32[i39 >> 2] = i41;
  i42 = i11 + 52 | 0;
  i43 = i42;
  i44 = HEAP32[i43 >> 2] | 0;
  i45 = i44 & -268435456;
  HEAP32[i43 >> 2] = i45;
  i46 = i1 | 0;
  HEAP32[i46 >> 2] = i12;
  STACKTOP = i2;
  return;
 }
}
function __ZN3WTF13tryMakeStringINS_6StringES1_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i2 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 i8 = (i2 | 0) == 0;
 if (i8) {
  i9 = 0;
 } else {
  i9 = HEAP32[i2 + 4 >> 2] | 0;
 }
 i10 = i3 | 0;
 i3 = HEAP32[i10 >> 2] | 0;
 i11 = (i3 | 0) == 0;
 if (i11) {
  i12 = 0;
 } else {
  i12 = HEAP32[i3 + 4 >> 2] | 0;
 }
 i13 = _llvm_uadd_with_overflow_i32(i9 | 0, i12 | 0) | 0;
 i12 = i13;
 if (tempRet0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 if (i8) {
  i14 = 9;
 } else {
  if ((HEAP32[i2 + 16 >> 2] & 32 | 0) != 0) {
   i14 = 9;
  }
 }
 do {
  if ((i14 | 0) == 9) {
   if (!i11) {
    if ((HEAP32[i3 + 16 >> 2] & 32 | 0) == 0) {
     break;
    }
   }
   do {
    if ((i12 | 0) == 0) {
     i2 = __ZN3WTF10StringImpl5emptyEv() | 0;
     if ((i2 | 0) == 0) {
      i14 = 26;
      break;
     }
     i8 = i2 | 0;
     HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
     i15 = i2;
     i16 = 0;
    } else {
     if (i12 >>> 0 > 4294967275 >>> 0) {
      i14 = 26;
      break;
     }
     __ZN3WTF13tryFastMallocEj(i6, i12 + 20 | 0);
     i2 = i6 | 0;
     i8 = HEAP32[i2 >> 2] | 0;
     HEAP32[i2 >> 2] = 0;
     if ((i8 | 0) == 0) {
      i14 = 26;
      break;
     }
     i2 = i8 + 20 | 0;
     HEAP32[i8 >> 2] = 2;
     HEAP32[i8 + 4 >> 2] = i12;
     HEAP32[i8 + 8 >> 2] = i2;
     HEAP32[i8 + 12 >> 2] = 0;
     HEAP32[i8 + 16 >> 2] = 32;
     i15 = i8;
     i16 = i2;
    }
   } while (0);
   if ((i14 | 0) == 26) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   i2 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i2 | 0) == 0) {
     i17 = 0;
    } else {
     i8 = HEAP32[i2 + 4 >> 2] | 0;
     i13 = HEAP32[i2 + 8 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i18 = i2;
     } else {
      i9 = 0;
      while (1) {
       HEAP8[i16 + i9 | 0] = HEAP8[i13 + i9 | 0] | 0;
       i9 = i9 + 1 | 0;
       if (i9 >>> 0 >= i8 >>> 0) {
        break;
       }
      }
      i8 = HEAP32[i7 >> 2] | 0;
      if ((i8 | 0) == 0) {
       i17 = 0;
       break;
      } else {
       i18 = i8;
      }
     }
     i17 = HEAP32[i18 + 4 >> 2] | 0;
    }
   } while (0);
   i2 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i2 | 0) != 0) {
     i8 = HEAP32[i2 + 4 >> 2] | 0;
     i9 = HEAP32[i2 + 8 >> 2] | 0;
     if ((i8 | 0) == 0) {
      break;
     } else {
      i19 = 0;
     }
     while (1) {
      HEAP8[i16 + (i19 + i17) | 0] = HEAP8[i9 + i19 | 0] | 0;
      i19 = i19 + 1 | 0;
      if (i19 >>> 0 >= i8 >>> 0) {
       break;
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
  if ((i12 | 0) == 0) {
   i15 = __ZN3WTF10StringImpl5emptyEv() | 0;
   if ((i15 | 0) == 0) {
    i14 = 48;
    break;
   }
   i19 = i15 | 0;
   HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 2;
   i20 = i15;
   i21 = 0;
  } else {
   if (i12 >>> 0 > 2147483637 >>> 0) {
    i14 = 48;
    break;
   }
   __ZN3WTF13tryFastMallocEj(i5, (i12 << 1) + 20 | 0);
   i15 = i5 | 0;
   i19 = HEAP32[i15 >> 2] | 0;
   HEAP32[i15 >> 2] = 0;
   if ((i19 | 0) == 0) {
    i14 = 48;
    break;
   }
   i15 = i19 + 20 | 0;
   HEAP32[i19 >> 2] = 2;
   HEAP32[i19 + 4 >> 2] = i12;
   HEAP32[i19 + 8 >> 2] = i15;
   HEAP32[i19 + 12 >> 2] = 0;
   HEAP32[i19 + 16 >> 2] = 0;
   i20 = i19;
   i21 = i15;
  }
 } while (0);
 if ((i14 | 0) == 48) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 i14 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i14 | 0) == 0) {
   i22 = 0;
  } else {
   i12 = HEAP32[i14 + 4 >> 2] | 0;
   do {
    if ((HEAP32[i14 + 16 >> 2] & 32 | 0) == 0) {
     i5 = HEAP32[i14 + 8 >> 2] | 0;
     if ((i12 | 0) == 0) {
      break;
     } else {
      i23 = 0;
     }
     while (1) {
      HEAP16[i21 + (i23 << 1) >> 1] = HEAP16[i5 + (i23 << 1) >> 1] | 0;
      i23 = i23 + 1 | 0;
      if (i23 >>> 0 >= i12 >>> 0) {
       break;
      }
     }
    } else {
     i5 = HEAP32[i14 + 8 >> 2] | 0;
     if ((i12 | 0) == 0) {
      break;
     } else {
      i24 = 0;
     }
     while (1) {
      HEAP16[i21 + (i24 << 1) >> 1] = HEAPU8[i5 + i24 | 0] | 0;
      i24 = i24 + 1 | 0;
      if (i24 >>> 0 >= i12 >>> 0) {
       break;
      }
     }
    }
   } while (0);
   i12 = HEAP32[i7 >> 2] | 0;
   if ((i12 | 0) == 0) {
    i22 = 0;
    break;
   }
   i22 = HEAP32[i12 + 4 >> 2] | 0;
  }
 } while (0);
 i7 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i10 = HEAP32[i7 + 4 >> 2] | 0;
   if ((HEAP32[i7 + 16 >> 2] & 32 | 0) == 0) {
    i24 = HEAP32[i7 + 8 >> 2] | 0;
    if ((i10 | 0) == 0) {
     break;
    } else {
     i25 = 0;
    }
    while (1) {
     HEAP16[i21 + (i25 + i22 << 1) >> 1] = HEAP16[i24 + (i25 << 1) >> 1] | 0;
     i25 = i25 + 1 | 0;
     if (i25 >>> 0 >= i10 >>> 0) {
      break;
     }
    }
   } else {
    i24 = HEAP32[i7 + 8 >> 2] | 0;
    if ((i10 | 0) == 0) {
     break;
    } else {
     i26 = 0;
    }
    while (1) {
     HEAP16[i21 + (i26 + i22 << 1) >> 1] = HEAPU8[i24 + i26 | 0] | 0;
     i26 = i26 + 1 | 0;
     if (i26 >>> 0 >= i10 >>> 0) {
      break;
     }
    }
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = i20;
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore11RenderStyle22colorIncludingFallbackEib(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 switch (i3 | 0) {
 case 23:
  {
   if (i4) {
    i3 = (HEAP32[i2 + 20 >> 2] | 0) + 232 | 0;
    i5 = i1;
    i6 = HEAP32[i3 + 4 >> 2] | 0;
    HEAP32[i5 >> 2] = HEAP32[i3 >> 2];
    HEAP32[i5 + 4 >> 2] = i6;
    return;
   } else {
    i6 = (HEAP32[i2 + 12 >> 2] | 0) + 52 | 0;
    i5 = i1;
    i3 = HEAP32[i6 + 4 >> 2] | 0;
    HEAP32[i5 >> 2] = HEAP32[i6 >> 2];
    HEAP32[i5 + 4 >> 2] = i3;
    return;
   }
   break;
  }
 case 49:
  {
   if (i4) {
    i3 = (HEAP32[i2 + 20 >> 2] | 0) + 248 | 0;
    i7 = HEAP32[i3 >> 2] | 0;
    i8 = HEAP32[i3 + 4 >> 2] & 255;
    i9 = HEAP32[(HEAP32[i2 + 16 >> 2] | 0) + 104 >> 2] | 0;
   } else {
    i3 = HEAP32[i2 + 16 >> 2] | 0;
    i5 = HEAP32[i3 + 104 >> 2] | 0;
    i7 = HEAP32[i3 + 100 >> 2] | 0;
    i8 = i5 & 1;
    i9 = i5;
   }
   i10 = i9 >>> 27 & 15;
   i11 = i8 & 255 | 0;
   i12 = i7 | 0;
   i13 = 36;
   break;
  }
 case 337:
  {
   i7 = HEAP32[i2 + 24 >> 2] | 0;
   i8 = i4 ? i7 + 52 | 0 : i7 + 28 | 0;
   i10 = 0;
   i11 = HEAP32[i8 + 4 >> 2] | 0;
   i12 = HEAP32[i8 >> 2] | 0;
   i13 = 36;
   break;
  }
 case 105:
  {
   if (i4) {
    i8 = (HEAP32[i2 + 20 >> 2] | 0) + 240 | 0;
    i14 = HEAP32[i8 >> 2] | 0;
    i15 = HEAP32[i8 + 4 >> 2] & 255;
   } else {
    i8 = HEAP32[i2 + 12 >> 2] | 0;
    i14 = HEAP32[i8 + 60 >> 2] | 0;
    i15 = HEAP32[i8 + 64 >> 2] & 1;
   }
   i10 = 0;
   i11 = i15 & 255 | 0;
   i12 = i14 | 0;
   i13 = 36;
   break;
  }
 case 340:
  {
   i14 = HEAP32[i2 + 24 >> 2] | 0;
   i15 = i4 ? i14 + 44 | 0 : i14 + 20 | 0;
   i10 = 0;
   i11 = HEAP32[i15 + 4 >> 2] | 0;
   i12 = HEAP32[i15 >> 2] | 0;
   i13 = 36;
   break;
  }
 case 60:
  {
   if (i4) {
    i15 = (HEAP32[i2 + 20 >> 2] | 0) + 264 | 0;
    i16 = HEAP32[i15 >> 2] | 0;
    i17 = HEAP32[i15 + 4 >> 2] & 255;
    i18 = HEAP32[(HEAP32[i2 + 16 >> 2] | 0) + 120 >> 2] | 0;
   } else {
    i15 = HEAP32[i2 + 16 >> 2] | 0;
    i14 = HEAP32[i15 + 120 >> 2] | 0;
    i16 = HEAP32[i15 + 116 >> 2] | 0;
    i17 = i14 & 1;
    i18 = i14;
   }
   i10 = i18 >>> 27 & 15;
   i11 = i17 & 255 | 0;
   i12 = i16 | 0;
   i13 = 36;
   break;
  }
 case 343:
  {
   i16 = HEAP32[i2 + 24 >> 2] | 0;
   i17 = i4 ? i16 + 36 | 0 : i16 + 8 | 0;
   i10 = 0;
   i11 = HEAP32[i17 + 4 >> 2] | 0;
   i12 = HEAP32[i17 >> 2] | 0;
   i13 = 36;
   break;
  }
 case 35:
  {
   if (i4) {
    i17 = (HEAP32[i2 + 20 >> 2] | 0) + 272 | 0;
    i19 = HEAP32[i17 >> 2] | 0;
    i20 = HEAP32[i17 + 4 >> 2] & 255;
    i21 = HEAP32[(HEAP32[i2 + 16 >> 2] | 0) + 128 >> 2] | 0;
   } else {
    i17 = HEAP32[i2 + 16 >> 2] | 0;
    i16 = HEAP32[i17 + 128 >> 2] | 0;
    i19 = HEAP32[i17 + 124 >> 2] | 0;
    i20 = i16 & 1;
    i21 = i16;
   }
   i10 = i21 >>> 27 & 15;
   i11 = i20 & 255 | 0;
   i12 = i19 | 0;
   i13 = 36;
   break;
  }
 case 229:
  {
   i19 = HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 68 >> 2] | 0;
   if (i4) {
    i20 = i19 + 24 | 0;
    i22 = HEAP32[i20 >> 2] | 0;
    i23 = HEAP32[i20 + 4 >> 2] & 255;
   } else {
    i22 = HEAP32[i19 + 16 >> 2] | 0;
    i23 = HEAP32[i19 + 20 >> 2] & 1;
   }
   i10 = 0;
   i11 = i23 & 255 | 0;
   i12 = i22 | 0;
   i13 = 36;
   break;
  }
 case 332:
  {
   i22 = HEAP32[i2 + 20 >> 2] | 0;
   if (i4) {
    i23 = i22 + 224 | 0;
    i19 = i1;
    i20 = HEAP32[i23 + 4 >> 2] | 0;
    HEAP32[i19 >> 2] = HEAP32[i23 >> 2];
    HEAP32[i19 + 4 >> 2] = i20;
    return;
   } else {
    i20 = i22 + 216 | 0;
    i22 = i1;
    i19 = HEAP32[i20 + 4 >> 2] | 0;
    HEAP32[i22 >> 2] = HEAP32[i20 >> 2];
    HEAP32[i22 + 4 >> 2] = i19;
    return;
   }
   break;
  }
 case 54:
  {
   if (i4) {
    i19 = (HEAP32[i2 + 20 >> 2] | 0) + 256 | 0;
    i24 = HEAP32[i19 >> 2] | 0;
    i25 = HEAP32[i19 + 4 >> 2] & 255;
    i26 = HEAP32[(HEAP32[i2 + 16 >> 2] | 0) + 112 >> 2] | 0;
   } else {
    i19 = HEAP32[i2 + 16 >> 2] | 0;
    i22 = HEAP32[i19 + 112 >> 2] | 0;
    i24 = HEAP32[i19 + 108 >> 2] | 0;
    i25 = i22 & 1;
    i26 = i22;
   }
   i10 = i26 >>> 27 & 15;
   i11 = i25 & 255 | 0;
   i12 = i24 | 0;
   i13 = 36;
   break;
  }
 case 1:
  {
   i24 = HEAP32[i2 + 28 >> 2] | 0;
   i25 = i4 ? i24 + 64 | 0 : i24 + 56 | 0;
   i10 = 0;
   i11 = HEAP32[i25 + 4 >> 2] | 0;
   i12 = HEAP32[i25 >> 2] | 0;
   i13 = 36;
   break;
  }
 default:
  {
   i27 = 0;
   i13 = 37;
  }
 }
 if ((i13 | 0) == 36) {
  if ((i12 & 0 | 0) == 0 & (i11 & 1 | 0) == 0 << 24 >> 24) {
   i27 = i10;
   i13 = 37;
  } else {
   i28 = i11;
   i29 = i12;
  }
 }
 L50 : do {
  if ((i13 | 0) == 37) {
   do {
    if (i4) {
     i30 = (HEAP32[i2 + 28 >> 2] | 0) + 64 | 0;
    } else {
     if ((i27 - 2 | 0) >>> 0 < 4 >>> 0) {
      i28 = 1;
      i29 = __ZN7WebCore7makeRGBEiii(238, 238, 238) | 0;
      break L50;
     } else {
      i30 = (HEAP32[i2 + 28 >> 2] | 0) + 56 | 0;
      break;
     }
    }
   } while (0);
   i12 = i30;
   i28 = HEAP32[i12 + 4 >> 2] | 0;
   i29 = HEAP32[i12 >> 2] | 0;
  }
 } while (0);
 i30 = i1;
 HEAP32[i30 >> 2] = i29;
 HEAP32[i30 + 4 >> 2] = i28;
 return;
}
function __ZNK7WebCore11RenderStyle19getRoundedBorderForERKNS_10LayoutRectEPNS_10RenderViewEbb(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, d32 = +0, d33 = +0, d34 = +0, d35 = +0, d36 = +0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 208 | 0;
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
 i25 = i7 + 144 | 0;
 i26 = i7 + 176 | 0;
 i27 = i26 | 0;
 i28 = i26;
 __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i24, i3);
 _memset(i25 | 0, 0, 32) | 0;
 __ZN7WebCore11RoundedRectC1ERKNS_7IntRectERKNS0_5RadiiE(i1, i24, i25);
 i25 = HEAP32[i2 + 16 >> 2] | 0;
 i3 = i25 + 136 | 0;
 do {
  if ((HEAP8[i25 + 141 | 0] | 0) != 10) {
   if ((HEAP8[i25 + 142 | 0] & 1) == 0) {
    if ((HEAP32[i3 >> 2] | 0) != 0) {
     break;
    }
   } else {
    if (+HEAPF32[i3 >> 2] != +0) {
     break;
    }
   }
   i29 = i25 + 152 | 0;
   if ((HEAP8[i25 + 157 | 0] | 0) == 10) {
    break;
   }
   if ((HEAP8[i25 + 158 | 0] & 1) == 0) {
    if ((HEAP32[i29 >> 2] | 0) != 0) {
     break;
    }
   } else {
    if (+HEAPF32[i29 >> 2] != +0) {
     break;
    }
   }
   i29 = i25 + 168 | 0;
   if ((HEAP8[i25 + 173 | 0] | 0) == 10) {
    break;
   }
   if ((HEAP8[i25 + 174 | 0] & 1) == 0) {
    if ((HEAP32[i29 >> 2] | 0) != 0) {
     break;
    }
   } else {
    if (+HEAPF32[i29 >> 2] != +0) {
     break;
    }
   }
   i29 = i25 + 184 | 0;
   if ((HEAP8[i25 + 189 | 0] | 0) == 10) {
    break;
   }
   if ((HEAP8[i25 + 190 | 0] & 1) == 0) {
    if ((HEAP32[i29 >> 2] | 0) != 0) {
     break;
    }
    STACKTOP = i7;
    return;
   } else {
    if (+HEAPF32[i29 >> 2] != +0) {
     break;
    }
    STACKTOP = i7;
    return;
   }
  }
 } while (0);
 i29 = i24 + 8 | 0;
 i30 = HEAP32[i29 >> 2] | 0;
 i31 = HEAP32[i29 + 4 >> 2] | 0;
 HEAP32[i8 >> 2] = i30;
 __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i9, i3, i8, i4, 0);
 i8 = HEAP32[i9 >> 2] | 0;
 HEAP32[i10 >> 2] = i31;
 __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i11, i25 + 144 | 0, i10, i4, 0);
 i10 = HEAP32[i11 >> 2] | 0;
 HEAP32[i12 >> 2] = i30;
 __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i13, i25 + 152 | 0, i12, i4, 0);
 i12 = HEAP32[i13 >> 2] | 0;
 HEAP32[i14 >> 2] = i31;
 __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i15, i25 + 160 | 0, i14, i4, 0);
 i14 = HEAP32[i15 >> 2] | 0;
 HEAP32[i16 >> 2] = i30;
 __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i17, i25 + 168 | 0, i16, i4, 0);
 i16 = HEAP32[i17 >> 2] | 0;
 HEAP32[i18 >> 2] = i31;
 __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i19, i25 + 176 | 0, i18, i4, 0);
 i18 = HEAP32[i19 >> 2] | 0;
 HEAP32[i20 >> 2] = i30;
 __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i21, i25 + 184 | 0, i20, i4, 0);
 i20 = HEAP32[i21 >> 2] | 0;
 HEAP32[i22 >> 2] = i31;
 __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i23, i25 + 192 | 0, i22, i4, 0);
 i4 = HEAP32[i23 >> 2] | 0;
 HEAP32[i27 >> 2] = i8;
 HEAP32[i27 + 4 >> 2] = i10;
 i27 = i26 + 8 | 0;
 HEAP32[i27 >> 2] = i12;
 HEAP32[i27 + 4 >> 2] = i14;
 i27 = i26 + 16 | 0;
 HEAP32[i27 >> 2] = i16;
 HEAP32[i27 + 4 >> 2] = i18;
 i27 = i26 + 24 | 0;
 HEAP32[i27 >> 2] = i20;
 HEAP32[i27 + 4 >> 2] = i4;
 i27 = HEAP32[i24 + 8 >> 2] | 0;
 i26 = HEAP32[i24 + 12 >> 2] | 0;
 i24 = i12 + i8 | 0;
 if (i24 >>> 0 > i27 >>> 0) {
  d32 = +(i27 | 0) / +(i24 >>> 0 >>> 0);
  d33 = d32 > +1 ? +1 : d32;
 } else {
  d33 = +1;
 }
 i24 = i20 + i16 | 0;
 if (i24 >>> 0 > i27 >>> 0) {
  d32 = +(i27 | 0) / +(i24 >>> 0 >>> 0);
  d34 = d33 < d32 ? d33 : d32;
 } else {
  d34 = d33;
 }
 i24 = i18 + i10 | 0;
 if (i24 >>> 0 > i26 >>> 0) {
  d33 = +(i26 | 0) / +(i24 >>> 0 >>> 0);
  d35 = d34 < d33 ? d34 : d33;
 } else {
  d35 = d34;
 }
 i24 = i4 + i14 | 0;
 if (i24 >>> 0 > i26 >>> 0) {
  d34 = +(i26 | 0) / +(i24 >>> 0 >>> 0);
  d36 = d35 < d34 ? d35 : d34;
 } else {
  d36 = d35;
 }
 __ZN7WebCore11RoundedRect5Radii5scaleEf(i28, d36);
 i24 = (HEAP32[i2 + 44 >> 2] | 0) >>> 13 & 3;
 __ZN7WebCore11RoundedRect19includeLogicalEdgesERKNS0_5RadiiEbbb(i1, i28, (i24 | 0) == 0 | (i24 | 0) == 3, i5, i6);
 STACKTOP = i7;
 return;
}
function __ZNK7WebCore11RenderStyle22textEmphasisMarkStringEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
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
 i13 = i1 + 24 | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 i15 = (HEAP32[i14 + 88 >> 2] | 0) >>> 24 & 7;
 if ((i15 | 0) == 1) {
  i16 = (HEAP32[i1 + 44 >> 2] | 0) >>> 13 & 3;
  i17 = (i16 | 0) == 0 | (i16 | 0) == 3 ? 2 : 6;
 } else {
  i17 = i15;
 }
 switch (i17 | 0) {
 case 2:
  {
   if (!(HEAP8[H_BASE + 176 | 0] | 0)) {
    i17 = __Znwj(4) | 0;
    __ZN3WTF12AtomicString3addEPKtj(i10, H_BASE + 48, 1);
    HEAP32[i17 >> 2] = HEAP32[i10 >> 2];
    HEAP32[H_BASE + 296 >> 2] = i17;
    HEAP8[H_BASE + 176 | 0] = 1;
   }
   if (HEAP8[H_BASE + 184 | 0] | 0) {
    i18 = HEAP32[H_BASE + 304 >> 2] | 0;
   } else {
    i17 = __Znwj(4) | 0;
    i10 = i17;
    __ZN3WTF12AtomicString3addEPKtj(i9, H_BASE + 88, 1);
    HEAP32[i17 >> 2] = HEAP32[i9 >> 2];
    HEAP32[H_BASE + 304 >> 2] = i10;
    HEAP8[H_BASE + 184 | 0] = 1;
    i18 = i10;
   }
   i19 = (HEAP32[(HEAP32[i13 >> 2] | 0) + 88 >> 2] & 8388608 | 0) == 0 ? HEAP32[H_BASE + 296 >> 2] | 0 : i18;
   STACKTOP = i2;
   return i19 | 0;
  }
 case 7:
  {
   i19 = i14 + 112 | 0;
   STACKTOP = i2;
   return i19 | 0;
  }
 case 5:
  {
   if (!(HEAP8[H_BASE + 128 | 0] | 0)) {
    i14 = __Znwj(4) | 0;
    __ZN3WTF12AtomicString3addEPKtj(i5, H_BASE + 64, 1);
    HEAP32[i14 >> 2] = HEAP32[i5 >> 2];
    HEAP32[H_BASE + 248 >> 2] = i14;
    HEAP8[H_BASE + 128 | 0] = 1;
   }
   if (HEAP8[H_BASE + 136 | 0] | 0) {
    i20 = HEAP32[H_BASE + 256 >> 2] | 0;
   } else {
    i14 = __Znwj(4) | 0;
    i5 = i14;
    __ZN3WTF12AtomicString3addEPKtj(i8, H_BASE + 56, 1);
    HEAP32[i14 >> 2] = HEAP32[i8 >> 2];
    HEAP32[H_BASE + 256 >> 2] = i5;
    HEAP8[H_BASE + 136 | 0] = 1;
    i20 = i5;
   }
   i19 = (HEAP32[(HEAP32[i13 >> 2] | 0) + 88 >> 2] & 8388608 | 0) == 0 ? HEAP32[H_BASE + 248 >> 2] | 0 : i20;
   STACKTOP = i2;
   return i19 | 0;
  }
 case 6:
  {
   if (!(HEAP8[H_BASE + 144 | 0] | 0)) {
    i20 = __Znwj(4) | 0;
    __ZN3WTF12AtomicString3addEPKtj(i11, H_BASE + 16, 1);
    HEAP32[i20 >> 2] = HEAP32[i11 >> 2];
    HEAP32[H_BASE + 264 >> 2] = i20;
    HEAP8[H_BASE + 144 | 0] = 1;
   }
   if (HEAP8[H_BASE + 160 | 0] | 0) {
    i21 = HEAP32[H_BASE + 280 >> 2] | 0;
   } else {
    i20 = __Znwj(4) | 0;
    i11 = i20;
    __ZN3WTF12AtomicString3addEPKtj(i12, H_BASE + 72, 1);
    HEAP32[i20 >> 2] = HEAP32[i12 >> 2];
    HEAP32[H_BASE + 280 >> 2] = i11;
    HEAP8[H_BASE + 160 | 0] = 1;
    i21 = i11;
   }
   i19 = (HEAP32[(HEAP32[i13 >> 2] | 0) + 88 >> 2] & 8388608 | 0) == 0 ? HEAP32[H_BASE + 264 >> 2] | 0 : i21;
   STACKTOP = i2;
   return i19 | 0;
  }
 case 3:
  {
   if (!(HEAP8[H_BASE + 152 | 0] | 0)) {
    i21 = __Znwj(4) | 0;
    __ZN3WTF12AtomicString3addEPKtj(i7, H_BASE + 104, 1);
    HEAP32[i21 >> 2] = HEAP32[i7 >> 2];
    HEAP32[H_BASE + 272 >> 2] = i21;
    HEAP8[H_BASE + 152 | 0] = 1;
   }
   if (HEAP8[H_BASE + 168 | 0] | 0) {
    i22 = HEAP32[H_BASE + 288 >> 2] | 0;
   } else {
    i21 = __Znwj(4) | 0;
    i7 = i21;
    __ZN3WTF12AtomicString3addEPKtj(i6, H_BASE + 80, 1);
    HEAP32[i21 >> 2] = HEAP32[i6 >> 2];
    HEAP32[H_BASE + 288 >> 2] = i7;
    HEAP8[H_BASE + 168 | 0] = 1;
    i22 = i7;
   }
   i19 = (HEAP32[(HEAP32[i13 >> 2] | 0) + 88 >> 2] & 8388608 | 0) == 0 ? HEAP32[H_BASE + 272 >> 2] | 0 : i22;
   STACKTOP = i2;
   return i19 | 0;
  }
 case 4:
  {
   if (!(HEAP8[H_BASE + 112 | 0] | 0)) {
    i22 = __Znwj(4) | 0;
    __ZN3WTF12AtomicString3addEPKtj(i4, H_BASE + 32, 1);
    HEAP32[i22 >> 2] = HEAP32[i4 >> 2];
    HEAP32[H_BASE + 232 >> 2] = i22;
    HEAP8[H_BASE + 112 | 0] = 1;
   }
   if (HEAP8[H_BASE + 120 | 0] | 0) {
    i23 = HEAP32[H_BASE + 240 >> 2] | 0;
   } else {
    i22 = __Znwj(4) | 0;
    i4 = i22;
    __ZN3WTF12AtomicString3addEPKtj(i3, H_BASE + 24, 1);
    HEAP32[i22 >> 2] = HEAP32[i3 >> 2];
    HEAP32[H_BASE + 240 >> 2] = i4;
    HEAP8[H_BASE + 120 | 0] = 1;
    i23 = i4;
   }
   i19 = (HEAP32[(HEAP32[i13 >> 2] | 0) + 88 >> 2] & 8388608 | 0) == 0 ? HEAP32[H_BASE + 232 >> 2] | 0 : i23;
   STACKTOP = i2;
   return i19 | 0;
  }
 default:
  {
   i19 = __ZN3WTF8nullAtomE;
   STACKTOP = i2;
   return i19 | 0;
  }
 }
 return 0;
}
function __ZN3WTF6VectorINS_6RefPtrIN7WebCore18TransformOperationEEELj0ENS_15CrashOnOverflowEEaSERKS6_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
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
      i10 = i7 + 4 | 0;
      i11 = i10 | 0;
      i12 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
      if ((i12 | 0) != 0) {
       HEAP32[i11 >> 2] = i12;
       break;
      }
      i12 = i10 - 4 | 0;
      if ((i12 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 1](i12);
     }
    } while (0);
    i9 = i9 + 4 | 0;
    if ((i9 | 0) == (i8 | 0)) {
     break;
    }
   }
  }
  HEAP32[i3 >> 2] = i6;
  i13 = i6;
 } else {
  i8 = i1 + 4 | 0;
  i9 = HEAP32[i8 >> 2] | 0;
  do {
   if (i6 >>> 0 > i9 >>> 0) {
    do {
     if ((i9 | 0) != 0) {
      i7 = i1 | 0;
      if ((i4 | 0) != 0) {
       i12 = HEAP32[i7 >> 2] | 0;
       i10 = i12 + (i4 << 2) | 0;
       i11 = i12;
       while (1) {
        i12 = HEAP32[i11 >> 2] | 0;
        do {
         if ((i12 | 0) != 0) {
          i14 = i12 + 4 | 0;
          i15 = i14 | 0;
          i16 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
          if ((i16 | 0) != 0) {
           HEAP32[i15 >> 2] = i16;
           break;
          }
          i16 = i14 - 4 | 0;
          if ((i16 | 0) == 0) {
           break;
          }
          FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 1](i16);
         }
        } while (0);
        i11 = i11 + 4 | 0;
        if ((i11 | 0) == (i10 | 0)) {
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
    i11 = i1 | 0;
    i12 = HEAP32[i11 >> 2] | 0;
    if (i10 >>> 0 > 1073741823 >>> 0) {
     _WTFCrash();
     return 0;
    }
    i16 = HEAP32[i3 >> 2] | 0;
    i14 = __ZN3WTF18fastMallocGoodSizeEj(i10 << 2) | 0;
    HEAP32[i8 >> 2] = i14 >>> 2;
    i10 = __ZN3WTF10fastMallocEj(i14) | 0;
    HEAP32[i11 >> 2] = i10;
    i14 = i12;
    _memcpy(i10 | 0, i14 | 0, i16 << 2) | 0;
    if ((i12 | 0) == 0) {
     break;
    }
    if ((HEAP32[i11 >> 2] | 0) == (i12 | 0)) {
     HEAP32[i11 >> 2] = 0;
     HEAP32[i8 >> 2] = 0;
    }
    __ZN3WTF8fastFreeEPv(i14);
   }
  } while (0);
  i13 = HEAP32[i3 >> 2] | 0;
 }
 i8 = i2 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 i4 = i2 + (i13 << 2) | 0;
 i9 = i1 | 0;
 if ((i13 | 0) == 0) {
  i17 = i2;
  i18 = 0;
 } else {
  i13 = HEAP32[i9 >> 2] | 0;
  i6 = i2;
  while (1) {
   i2 = HEAP32[i6 >> 2] | 0;
   if ((i2 | 0) != 0) {
    i14 = i2 + 4 | 0;
    HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
   }
   i14 = i13 | 0;
   i11 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = i2;
   do {
    if ((i11 | 0) != 0) {
     i2 = i11 + 4 | 0;
     i14 = i2 | 0;
     i12 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
     if ((i12 | 0) != 0) {
      HEAP32[i14 >> 2] = i12;
      break;
     }
     i12 = i2 - 4 | 0;
     if ((i12 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 1](i12);
    }
   } while (0);
   i11 = i6 + 4 | 0;
   if ((i11 | 0) == (i4 | 0)) {
    break;
   } else {
    i13 = i13 + 4 | 0;
    i6 = i11;
   }
  }
  i17 = HEAP32[i8 >> 2] | 0;
  i18 = HEAP32[i3 >> 2] | 0;
 }
 i8 = HEAP32[i5 >> 2] | 0;
 i6 = i17 + (i8 << 2) | 0;
 if ((i18 | 0) == (i8 | 0)) {
  i19 = i18;
 } else {
  i8 = i17 + (i18 << 2) | 0;
  i17 = (HEAP32[i9 >> 2] | 0) + (i18 << 2) | 0;
  while (1) {
   i18 = HEAP32[i8 >> 2] | 0;
   HEAP32[i17 >> 2] = i18;
   if ((i18 | 0) != 0) {
    i9 = i18 + 4 | 0;
    HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
   }
   i9 = i8 + 4 | 0;
   if ((i9 | 0) == (i6 | 0)) {
    break;
   } else {
    i8 = i9;
    i17 = i17 + 4 | 0;
   }
  }
  i19 = HEAP32[i5 >> 2] | 0;
 }
 HEAP32[i3 >> 2] = i19;
 return i1 | 0;
}
function __ZN7WebCore11RenderStyle20noneDashboardRegionsEv() {
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i2 = i1 | 0;
 i3 = i1 + 40 | 0;
 i4 = i1 + 48 | 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 if (!(HEAP8[H_BASE + 216 | 0] | 0)) {
  i8 = __ZN3WTF10fastMallocEj(12) | 0;
  HEAP32[i8 >> 2] = 0;
  HEAP32[i8 + 4 >> 2] = 0;
  HEAP32[i8 + 8 >> 2] = 0;
  HEAP32[H_BASE + 344 >> 2] = i8;
  HEAP8[H_BASE + 216 | 0] = 1;
 }
 if (HEAP8[H_BASE + 8 | 0] | 0) {
  i9 = HEAP32[H_BASE + 344 >> 2] | 0;
  STACKTOP = i1;
  return i9 | 0;
 }
 i8 = i2 + 12 | 0;
 i10 = i2 + 20 | 0;
 i11 = i2 + 28 | 0;
 HEAP32[i2 >> 2] = 0;
 __ZN3WTF6StringC1EPKc(i3, H_BASE + 224 | 0);
 i12 = i3 | 0;
 i3 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = 0;
 i12 = i2 | 0;
 HEAP32[i12 >> 2] = i3;
 _memset(i4 | 0, 0, 7) | 0;
 i3 = i10;
 i13 = HEAP32[i4 + 4 >> 2] | 0;
 HEAP32[i3 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i3 + 4 >> 2] = i13;
 HEAP8[i4 + 5 | 0] = 0;
 _memset(i5 | 0, 0, 7) | 0;
 i4 = i8;
 i13 = HEAP32[i5 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i4 + 4 >> 2] = i13;
 HEAP8[i5 + 5 | 0] = 0;
 _memset(i6 | 0, 0, 7) | 0;
 i5 = i11;
 i13 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i5 + 4 >> 2] = i13;
 HEAP8[i6 + 5 | 0] = 0;
 i6 = i2 + 4 | 0;
 _memset(i7 | 0, 0, 7) | 0;
 i13 = i6;
 i14 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i13 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i13 + 4 >> 2] = i14;
 HEAP8[i7 + 5 | 0] = 0;
 i7 = i2 + 36 | 0;
 HEAP32[i7 >> 2] = 0;
 i14 = HEAP32[H_BASE + 344 >> 2] | 0;
 i13 = i14 + 8 | 0;
 i15 = HEAP32[i13 >> 2] | 0;
 if ((i15 | 0) == (HEAP32[i14 + 4 >> 2] | 0)) {
  __ZN3WTF6VectorIN7WebCore20StyleDashboardRegionELj0ENS_15CrashOnOverflowEE14appendSlowCaseIRS2_EEvOT_(i14, i2);
 } else {
  i16 = HEAP32[i14 >> 2] | 0;
  i14 = HEAP32[i12 >> 2] | 0;
  HEAP32[i16 + (i15 * 40 & -1) >> 2] = i14;
  if ((i14 | 0) != 0) {
   i17 = i14 | 0;
   HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 2;
  }
  i17 = i16 + (i15 * 40 & -1) + 4 | 0;
  i14 = i2 + 4 | 0;
  i18 = i17;
  i19 = HEAP32[i14 >> 2] | 0;
  i20 = HEAP32[i14 + 4 >> 2] | 0;
  HEAP32[i18 >> 2] = i19;
  HEAP32[i18 + 4 >> 2] = i20;
  if ((i19 & 0 | 0) == 0 & (i20 & 65280 | 0) == 2560) {
   __ZNK7WebCore6Length22incrementCalculatedRefEv(i17 | 0);
  }
  i17 = i16 + (i15 * 40 & -1) + 12 | 0;
  i20 = i17;
  i19 = HEAP32[i4 >> 2] | 0;
  i18 = HEAP32[i4 + 4 >> 2] | 0;
  HEAP32[i20 >> 2] = i19;
  HEAP32[i20 + 4 >> 2] = i18;
  if ((i19 & 0 | 0) == 0 & (i18 & 65280 | 0) == 2560) {
   __ZNK7WebCore6Length22incrementCalculatedRefEv(i17);
  }
  i17 = i16 + (i15 * 40 & -1) + 20 | 0;
  i18 = i17;
  i19 = HEAP32[i3 >> 2] | 0;
  i20 = HEAP32[i3 + 4 >> 2] | 0;
  HEAP32[i18 >> 2] = i19;
  HEAP32[i18 + 4 >> 2] = i20;
  if ((i19 & 0 | 0) == 0 & (i20 & 65280 | 0) == 2560) {
   __ZNK7WebCore6Length22incrementCalculatedRefEv(i17);
  }
  i17 = i16 + (i15 * 40 & -1) + 28 | 0;
  i20 = i17;
  i19 = HEAP32[i5 >> 2] | 0;
  i18 = HEAP32[i5 + 4 >> 2] | 0;
  HEAP32[i20 >> 2] = i19;
  HEAP32[i20 + 4 >> 2] = i18;
  if ((i19 & 0 | 0) == 0 & (i18 & 65280 | 0) == 2560) {
   __ZNK7WebCore6Length22incrementCalculatedRefEv(i17);
  }
  HEAP32[i16 + (i15 * 40 & -1) + 36 >> 2] = HEAP32[i7 >> 2];
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
 }
 HEAP8[H_BASE + 8 | 0] = 1;
 if ((HEAP8[i2 + 33 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i11);
 }
 if ((HEAP8[i2 + 25 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i10);
 }
 if ((HEAP8[i2 + 17 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i8);
 }
 if ((HEAP8[i2 + 9 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i6);
 }
 i6 = HEAP32[i12 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i9 = HEAP32[H_BASE + 344 >> 2] | 0;
  STACKTOP = i1;
  return i9 | 0;
 }
 i12 = i6 | 0;
 i2 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i6);
  i9 = HEAP32[H_BASE + 344 >> 2] | 0;
  STACKTOP = i1;
  return i9 | 0;
 } else {
  HEAP32[i12 >> 2] = i2;
  i9 = HEAP32[H_BASE + 344 >> 2] | 0;
  STACKTOP = i1;
  return i9 | 0;
 }
 return 0;
}
function __ZN7WebCore11RenderStyle9addCursorEN3WTF10PassRefPtrINS_10StyleImageEEERKNS_8IntPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i1 + 24 | 0;
 i1 = HEAP32[i9 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i10 = i1;
 } else {
  __ZNK7WebCore22StyleRareInheritedData4copyEv(i7, i1);
  i1 = HEAP32[i7 >> 2] | 0;
  i7 = HEAP32[i9 >> 2] | 0;
  i11 = i7 | 0;
  i12 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
  if ((i12 | 0) == 0) {
   __ZN7WebCore22StyleRareInheritedDataD1Ev(i7);
   __ZN3WTF8fastFreeEPv(i7);
  } else {
   HEAP32[i11 >> 2] = i12;
  }
  HEAP32[i9 >> 2] = i1;
  i10 = i1;
 }
 do {
  if ((HEAP32[i10 + 68 >> 2] | 0) == 0) {
   if ((HEAP32[i10 >> 2] | 0) == 1) {
    i13 = i10;
   } else {
    __ZNK7WebCore22StyleRareInheritedData4copyEv(i6, i10);
    i1 = HEAP32[i6 >> 2] | 0;
    i12 = HEAP32[i9 >> 2] | 0;
    i11 = i12 | 0;
    i7 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
    if ((i7 | 0) == 0) {
     __ZN7WebCore22StyleRareInheritedDataD1Ev(i12);
     __ZN3WTF8fastFreeEPv(i12);
    } else {
     HEAP32[i11 >> 2] = i7;
    }
    HEAP32[i9 >> 2] = i1;
    i13 = i1;
   }
   i1 = __ZN3WTF10fastMallocEj(16) | 0;
   HEAP32[i1 >> 2] = 1;
   HEAP32[i1 + 4 >> 2] = 0;
   HEAP32[i1 + 8 >> 2] = 0;
   HEAP32[i1 + 12 >> 2] = 0;
   i7 = i13 + 68 | 0;
   i11 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = i1;
   if ((i11 | 0) == 0) {
    break;
   }
   i1 = i11 | 0;
   i7 = i11 | 0;
   i12 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) != 0) {
    HEAP32[i7 >> 2] = i12;
    break;
   }
   i12 = i1 + 12 | 0;
   i7 = HEAP32[i12 >> 2] | 0;
   i14 = i1 + 4 | 0;
   i15 = i14;
   if ((i7 | 0) != 0) {
    i16 = HEAP32[i15 >> 2] | 0;
    i17 = i16 + (i7 * 12 & -1) | 0;
    i7 = i16;
    while (1) {
     i16 = HEAP32[i7 >> 2] | 0;
     do {
      if ((i16 | 0) != 0) {
       i18 = i16 + 4 | 0;
       i19 = i18 | 0;
       i20 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
       if ((i20 | 0) != 0) {
        HEAP32[i19 >> 2] = i20;
        break;
       }
       i20 = i18 - 4 | 0;
       if ((i20 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] & 1](i20);
      }
     } while (0);
     i7 = i7 + 12 | 0;
     if ((i7 | 0) == (i17 | 0)) {
      break;
     }
    }
    HEAP32[i12 >> 2] = 0;
   }
   i17 = HEAP32[i15 >> 2] | 0;
   if ((i17 | 0) != 0) {
    HEAP32[i14 >> 2] = 0;
    HEAP32[i1 + 8 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i17);
   }
   __ZN3WTF8fastFreeEPv(i11);
  }
 } while (0);
 i13 = HEAP32[i9 >> 2] | 0;
 if ((HEAP32[i13 >> 2] | 0) == 1) {
  i21 = i13;
 } else {
  __ZNK7WebCore22StyleRareInheritedData4copyEv(i5, i13);
  i13 = HEAP32[i5 >> 2] | 0;
  i5 = HEAP32[i9 >> 2] | 0;
  i6 = i5 | 0;
  i10 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
  if ((i10 | 0) == 0) {
   __ZN7WebCore22StyleRareInheritedDataD1Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  } else {
   HEAP32[i6 >> 2] = i10;
  }
  HEAP32[i9 >> 2] = i13;
  i21 = i13;
 }
 i13 = HEAP32[i21 + 68 >> 2] | 0;
 i21 = i2 | 0;
 i2 = HEAP32[i21 >> 2] | 0;
 HEAP32[i21 >> 2] = 0;
 i21 = i8 | 0;
 HEAP32[i21 >> 2] = i2;
 i2 = i3;
 i3 = i8 + 4 | 0;
 i9 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i3 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i3 + 4 >> 2] = i9;
 __ZN7WebCore10CursorList6appendERKNS_10CursorDataE(i13, i8);
 i8 = HEAP32[i21 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i21 = i8 + 4 | 0;
 i8 = i21 | 0;
 i13 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 if ((i13 | 0) != 0) {
  HEAP32[i8 >> 2] = i13;
  STACKTOP = i4;
  return;
 }
 i13 = i21 - 4 | 0;
 if ((i13 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 1](i13);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore11RenderStyle20copyNonInheritedFromEPKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i2 + 4 >> 2] | 0;
 i6 = i5 | 0;
 HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 i6 = i1 + 4 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = i7 | 0;
 i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 if ((i9 | 0) == 0) {
  __ZN7WebCore12StyleBoxDataD2Ev(i7);
  __ZN3WTF8fastFreeEPv(i7);
 } else {
  HEAP32[i8 >> 2] = i9;
 }
 HEAP32[i6 >> 2] = i5;
 i5 = HEAP32[i2 + 8 >> 2] | 0;
 i6 = i5 | 0;
 HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 i6 = i1 + 8 | 0;
 i9 = HEAP32[i6 >> 2] | 0;
 i8 = i9 | 0;
 i7 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 if ((i7 | 0) == 0) {
  __ZN7WebCore15StyleVisualDataD1Ev(i9);
  __ZN3WTF8fastFreeEPv(i9);
 } else {
  HEAP32[i8 >> 2] = i7;
 }
 HEAP32[i6 >> 2] = i5;
 i5 = HEAP32[i2 + 12 >> 2] | 0;
 i6 = i5 | 0;
 HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 i6 = i1 + 12 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = i7 | 0;
 i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 if ((i9 | 0) == 0) {
  __ZN7WebCore9FillLayerD1Ev(i7 + 4 | 0);
  __ZN3WTF8fastFreeEPv(i7);
 } else {
  HEAP32[i8 >> 2] = i9;
 }
 HEAP32[i6 >> 2] = i5;
 i5 = HEAP32[i2 + 16 >> 2] | 0;
 i6 = i5 | 0;
 HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 i6 = i1 + 16 | 0;
 i9 = HEAP32[i6 >> 2] | 0;
 i8 = i9 | 0;
 i7 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 if ((i7 | 0) == 0) {
  __ZN7WebCore17StyleSurroundDataD2Ev(i9);
  __ZN3WTF8fastFreeEPv(i9);
 } else {
  HEAP32[i8 >> 2] = i7;
 }
 HEAP32[i6 >> 2] = i5;
 i5 = HEAP32[i2 + 20 >> 2] | 0;
 i6 = i5 | 0;
 HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 i6 = i1 + 20 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = i7 | 0;
 i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 if ((i9 | 0) == 0) {
  __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i7);
  __ZN3WTF8fastFreeEPv(i7);
 } else {
  HEAP32[i8 >> 2] = i9;
 }
 HEAP32[i6 >> 2] = i5;
 i5 = i2 + 48 | 0;
 i6 = i5;
 i9 = i1 + 48 | 0;
 i8 = i9;
 i7 = HEAP32[i8 >> 2] & -32 | HEAP32[i6 >> 2] & 31;
 HEAP32[i8 >> 2] = i7;
 i10 = i7 & -993 | HEAP32[i6 >> 2] & 992;
 HEAP32[i8 >> 2] = i10;
 i7 = i10 & -7169 | HEAP32[i6 >> 2] & 7168;
 HEAP32[i8 >> 2] = i7;
 i10 = i7 & -57345 | HEAP32[i6 >> 2] & 57344;
 HEAP32[i8 >> 2] = i10;
 i7 = i10 & -983041 | HEAP32[i6 >> 2] & 983040;
 HEAP32[i8 >> 2] = i7;
 i10 = i7 & -3145729 | HEAP32[i6 >> 2] & 3145728;
 HEAP32[i8 >> 2] = i10;
 i7 = i10 & -29360129 | HEAP32[i6 >> 2] & 29360128;
 HEAP32[i8 >> 2] = i7;
 i10 = i7 & -100663297 | HEAP32[i6 >> 2] & 100663296;
 HEAP32[i8 >> 2] = i10;
 i7 = i10 & -134217729 | HEAP32[i6 >> 2] & 134217728;
 HEAP32[i8 >> 2] = i7;
 HEAP32[i8 >> 2] = i7 & -1879048193 | HEAP32[i6 >> 2] & 1879048192;
 i6 = i5 + 4 | 0;
 i5 = i9 + 4 | 0;
 i9 = HEAP32[i5 >> 2] & -4 | HEAP32[i6 >> 2] & 3;
 HEAP32[i5 >> 2] = i9;
 i7 = i9 & -13 | HEAP32[i6 >> 2] & 12;
 HEAP32[i5 >> 2] = i7;
 i9 = i7 & -49 | HEAP32[i6 >> 2] & 48;
 HEAP32[i5 >> 2] = i9;
 HEAP32[i5 >> 2] = i9 & -524289 | HEAP32[i6 >> 2] & 524288;
 i6 = i1 + 36 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 i9 = i2 + 36 | 0;
 i2 = HEAP32[i9 >> 2] | 0;
 if ((i1 | 0) == (i2 | 0)) {
  STACKTOP = i3;
  return;
 }
 if (__ZNK7WebCore14SVGRenderStyleeqERKS0_(i1, i2) | 0) {
  STACKTOP = i3;
  return;
 }
 i2 = HEAP32[i6 >> 2] | 0;
 if ((HEAP32[i2 >> 2] | 0) == 1) {
  i11 = i2;
 } else {
  __ZNK7WebCore14SVGRenderStyle4copyEv(i4, i2);
  i2 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i6 >> 2] | 0;
  i1 = i4 | 0;
  i5 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
  if ((i5 | 0) == 0) {
   __ZN7WebCore14SVGRenderStyleD1Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i1 >> 2] = i5;
  }
  HEAP32[i6 >> 2] = i2;
  i11 = i2;
 }
 __ZN7WebCore14SVGRenderStyle20copyNonInheritedFromEPKS0_(i11, HEAP32[i9 >> 2] | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderStyle10setContentEN3WTF10PassRefPtrINS_10StyleImageEEEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i2 | 0;
 if ((HEAP32[i10 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 if (i3) {
  i3 = __ZN3WTF10fastMallocEj(16) | 0;
  i2 = HEAP32[i10 >> 2] | 0;
  HEAP32[i10 >> 2] = 0;
  HEAP32[i3 + 4 >> 2] = 0;
  HEAP32[i3 + 8 >> 2] = 0;
  HEAP32[i3 >> 2] = __ZTVN7WebCore16ImageContentDataE + 8;
  HEAP32[i3 + 12 >> 2] = i2;
  i2 = i9 | 0;
  HEAP32[i2 >> 2] = i3;
  __ZN7WebCore11RenderStyle13appendContentENSt3__110unique_ptrINS_11ContentDataENS1_14default_deleteIS3_EEEE(i1, i9);
  i9 = HEAP32[i2 >> 2] | 0;
  HEAP32[i2 >> 2] = 0;
  if ((i9 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 1](i9);
  STACKTOP = i4;
  return;
 }
 i9 = i1 + 20 | 0;
 i1 = HEAP32[i9 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i11 = i1;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i8, i1);
  i1 = HEAP32[i8 >> 2] | 0;
  i8 = HEAP32[i9 >> 2] | 0;
  i2 = i8 | 0;
  i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
  if ((i3 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i8);
   __ZN3WTF8fastFreeEPv(i8);
  } else {
   HEAP32[i2 >> 2] = i3;
  }
  HEAP32[i9 >> 2] = i1;
  i11 = i1;
 }
 i1 = __ZN3WTF10fastMallocEj(16) | 0;
 i3 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 HEAP32[i1 >> 2] = __ZTVN7WebCore16ImageContentDataE + 8;
 HEAP32[i1 + 12 >> 2] = i3;
 i3 = i11 + 88 | 0;
 i11 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i1;
 if ((i11 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 1](i11);
 }
 i11 = HEAP32[i9 >> 2] | 0;
 if ((HEAP32[i11 >> 2] | 0) == 1) {
  i12 = i11;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i7, i11);
  i11 = HEAP32[i7 >> 2] | 0;
  i7 = HEAP32[i9 >> 2] | 0;
  i1 = i7 | 0;
  i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
  if ((i3 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i7);
   __ZN3WTF8fastFreeEPv(i7);
  } else {
   HEAP32[i1 >> 2] = i3;
  }
  HEAP32[i9 >> 2] = i11;
  i12 = i11;
 }
 if ((HEAP32[i12 + 96 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i12 >> 2] | 0) == 1) {
  i13 = i12;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i6, i12);
  i12 = HEAP32[i6 >> 2] | 0;
  i6 = HEAP32[i9 >> 2] | 0;
  i11 = i6 | 0;
  i3 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
  if ((i3 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i6);
   __ZN3WTF8fastFreeEPv(i6);
  } else {
   HEAP32[i11 >> 2] = i3;
  }
  HEAP32[i9 >> 2] = i12;
  i13 = i12;
 }
 i12 = HEAP32[i13 + 88 >> 2] | 0;
 if ((HEAP32[i13 >> 2] | 0) == 1) {
  i14 = i13;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i5, i13);
  i13 = HEAP32[i5 >> 2] | 0;
  i5 = HEAP32[i9 >> 2] | 0;
  i3 = i5 | 0;
  i11 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
  if ((i11 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  } else {
   HEAP32[i3 >> 2] = i11;
  }
  HEAP32[i9 >> 2] = i13;
  i14 = i13;
 }
 i13 = HEAP32[i14 + 96 >> 2] | 0;
 if ((i13 | 0) != 0) {
  i14 = i13 | 0;
  HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
 }
 i14 = i12 + 8 | 0;
 i12 = HEAP32[i14 >> 2] | 0;
 HEAP32[i14 >> 2] = i13;
 if ((i12 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i13 = i12 | 0;
 i14 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
 if ((i14 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i12);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i13 >> 2] = i14;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore11RenderStyle17adjustTransitionsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 20 | 0;
 i1 = HEAP32[(HEAP32[i4 >> 2] | 0) + 112 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i5 = i1 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i7 = HEAP32[i1 >> 2] | 0;
   i8 = 0;
   L6 : while (1) {
    i9 = HEAP32[i7 + (i8 << 2) >> 2] | 0;
    i10 = HEAP8[i9 + 44 | 0] | 0;
    do {
     if (i10 << 24 >> 24 >= 0) {
      i11 = HEAP8[i9 + 45 | 0] | 0;
      if ((i11 & 31) != 0) {
       break;
      }
      if ((i10 & 64) != 0) {
       break;
      }
      if ((i11 & 96) == 0) {
       i12 = 8;
       break L6;
      }
     }
    } while (0);
    i10 = i8 + 1 | 0;
    if (i10 >>> 0 < i6 >>> 0) {
     i8 = i10;
    } else {
     i13 = i6;
     break;
    }
   }
   if ((i12 | 0) == 8) {
    __ZN3WTF6VectorINS_6RefPtrIN7WebCore9AnimationEEELj0ENS_15CrashOnOverflowEE6resizeEj(i1 | 0, i8);
    i13 = HEAP32[i5 >> 2] | 0;
   }
   if ((i13 | 0) == 0) {
    break;
   }
   __ZN7WebCore13AnimationList19fillUnsetPropertiesEv(i1);
   i7 = HEAP32[i5 >> 2] | 0;
   if ((i7 | 0) == 0) {
    STACKTOP = i2;
    return;
   }
   i10 = i1 | 0;
   i9 = 0;
   i11 = i7;
   L20 : while (1) {
    i7 = i9 + 1 | 0;
    if (i7 >>> 0 < i11 >>> 0) {
     i14 = i7;
     i15 = i11;
     while (1) {
      if (i15 >>> 0 <= i9 >>> 0) {
       i12 = 22;
       break L20;
      }
      i16 = HEAP32[i10 >> 2] | 0;
      i17 = HEAP32[i16 + (i9 << 2) >> 2] | 0;
      if ((HEAP32[i17 + 8 >> 2] | 0) == (HEAP32[(HEAP32[i16 + (i14 << 2) >> 2] | 0) + 8 >> 2] | 0)) {
       i18 = i16 + (i9 << 2) | 0;
       do {
        if ((i17 | 0) != 0) {
         i19 = i17 | 0;
         i20 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
         if ((i20 | 0) == 0) {
          __ZN7WebCore9AnimationD1Ev(i17);
          __ZN3WTF8fastFreeEPv(i17);
          break;
         } else {
          HEAP32[i19 >> 2] = i20;
          break;
         }
        }
       } while (0);
       i17 = i16 + (i7 << 2) | 0;
       _memmove(i18 | 0, i17 | 0, (HEAP32[i10 >> 2] | 0) + (HEAP32[i5 >> 2] << 2) - i17 | 0) | 0;
       i17 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
       HEAP32[i5 >> 2] = i17;
       i21 = i9;
       i22 = i17;
      } else {
       i21 = i14;
       i22 = i15;
      }
      i17 = i21 + 1 | 0;
      if (i17 >>> 0 < i22 >>> 0) {
       i14 = i17;
       i15 = i22;
      } else {
       i23 = i22;
       break;
      }
     }
    } else {
     i23 = i11;
    }
    if (i7 >>> 0 < i23 >>> 0) {
     i9 = i7;
     i11 = i23;
    } else {
     i12 = 32;
     break;
    }
   }
   if ((i12 | 0) == 22) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i12 | 0) == 32) {
    STACKTOP = i2;
    return;
   }
  }
 } while (0);
 i12 = HEAP32[i4 >> 2] | 0;
 if ((HEAP32[i12 >> 2] | 0) == 1) {
  i24 = i12;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i3, i12);
  i12 = HEAP32[i3 >> 2] | 0;
  i3 = HEAP32[i4 >> 2] | 0;
  i23 = i3 | 0;
  i22 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
  if ((i22 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i3);
   __ZN3WTF8fastFreeEPv(i3);
  } else {
   HEAP32[i23 >> 2] = i22;
  }
  HEAP32[i4 >> 2] = i12;
  i24 = i12;
 }
 __ZN3WTF6OwnPtrIN7WebCore13AnimationListEE5clearEv(i24 + 112 | 0);
 STACKTOP = i2;
 return;
}
function __ZNK7WebCore11RenderStyle12imageOutsetsERKNS_14NinePieceImageE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, d7 = +0, i8 = 0, d9 = +0, d10 = +0, i11 = 0, d12 = +0, d13 = +0, i14 = 0, d15 = +0, d16 = +0, i17 = 0, d18 = +0, d19 = +0, i20 = 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i3 = i4 + 92 | 0;
 i5 = HEAP32[i2 + 16 >> 2] | 0;
 i2 = (HEAP32[(HEAP32[i5 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0;
 i6 = HEAP32[i5 + 120 >> 2] | 0;
 if (i2) {
  if ((i6 & 1879048192) >>> 0 < 268435456 >>> 0) {
   d7 = +0;
  } else {
   i8 = 3;
  }
 } else {
  i8 = 3;
 }
 if ((i8 | 0) == 3) {
  d7 = +(i6 >>> 1 & 67108863 | 0);
 }
 if ((HEAP8[i4 + 98 | 0] & 1) == 0) {
  d9 = +(HEAP32[i3 >> 2] | 0);
 } else {
  d9 = +HEAPF32[i3 >> 2];
 }
 do {
  if ((HEAP8[i4 + 97 | 0] | 0) == 1) {
   d10 = d7 * d9;
   if (d10 >= +2147483647) {
    i11 = 2147483647;
    break;
   }
   if (d10 <= +-2147483648) {
    i11 = -2147483648;
    break;
   }
   i11 = ~~d10;
  } else {
   if (d9 >= +2147483647) {
    i11 = 2147483647;
    break;
   }
   if (d9 <= +-2147483648) {
    i11 = -2147483648;
    break;
   }
   i11 = ~~d9;
  }
 } while (0);
 i3 = i4 + 84 | 0;
 i6 = HEAP32[i5 + 112 >> 2] | 0;
 if (i2) {
  if ((i6 & 1879048192) >>> 0 < 268435456 >>> 0) {
   d12 = +0;
  } else {
   i8 = 16;
  }
 } else {
  i8 = 16;
 }
 if ((i8 | 0) == 16) {
  d12 = +(i6 >>> 1 & 67108863 | 0);
 }
 if ((HEAP8[i4 + 90 | 0] & 1) == 0) {
  d13 = +(HEAP32[i3 >> 2] | 0);
 } else {
  d13 = +HEAPF32[i3 >> 2];
 }
 do {
  if ((HEAP8[i4 + 89 | 0] | 0) == 1) {
   d9 = d12 * d13;
   if (d9 >= +2147483647) {
    i14 = 2147483647;
    break;
   }
   if (d9 <= +-2147483648) {
    i14 = -2147483648;
    break;
   }
   i14 = ~~d9;
  } else {
   if (d13 >= +2147483647) {
    i14 = 2147483647;
    break;
   }
   if (d13 <= +-2147483648) {
    i14 = -2147483648;
    break;
   }
   i14 = ~~d13;
  }
 } while (0);
 i3 = i4 + 100 | 0;
 i6 = HEAP32[i5 + 128 >> 2] | 0;
 if (i2) {
  if ((i6 & 1879048192) >>> 0 < 268435456 >>> 0) {
   d15 = +0;
  } else {
   i8 = 29;
  }
 } else {
  i8 = 29;
 }
 if ((i8 | 0) == 29) {
  d15 = +(i6 >>> 1 & 67108863 | 0);
 }
 if ((HEAP8[i4 + 106 | 0] & 1) == 0) {
  d16 = +(HEAP32[i3 >> 2] | 0);
 } else {
  d16 = +HEAPF32[i3 >> 2];
 }
 do {
  if ((HEAP8[i4 + 105 | 0] | 0) == 1) {
   d13 = d15 * d16;
   if (d13 >= +2147483647) {
    i17 = 2147483647;
    break;
   }
   if (d13 <= +-2147483648) {
    i17 = -2147483648;
    break;
   }
   i17 = ~~d13;
  } else {
   if (d16 >= +2147483647) {
    i17 = 2147483647;
    break;
   }
   if (d16 <= +-2147483648) {
    i17 = -2147483648;
    break;
   }
   i17 = ~~d16;
  }
 } while (0);
 i3 = i4 + 76 | 0;
 i6 = HEAP32[i5 + 104 >> 2] | 0;
 if (i2) {
  if ((i6 & 1879048192) >>> 0 < 268435456 >>> 0) {
   d18 = +0;
  } else {
   i8 = 42;
  }
 } else {
  i8 = 42;
 }
 if ((i8 | 0) == 42) {
  d18 = +(i6 >>> 1 & 67108863 | 0);
 }
 if ((HEAP8[i4 + 82 | 0] & 1) == 0) {
  d19 = +(HEAP32[i3 >> 2] | 0);
 } else {
  d19 = +HEAPF32[i3 >> 2];
 }
 do {
  if ((HEAP8[i4 + 81 | 0] | 0) == 1) {
   d16 = d18 * d19;
   if (d16 >= +2147483647) {
    i20 = 2147483647;
    break;
   }
   if (d16 <= +-2147483648) {
    i20 = -2147483648;
    break;
   }
   i20 = ~~d16;
  } else {
   if (d19 >= +2147483647) {
    i20 = 2147483647;
    break;
   }
   if (d19 <= +-2147483648) {
    i20 = -2147483648;
    break;
   }
   i20 = ~~d19;
  }
 } while (0);
 HEAP32[i1 >> 2] = i11;
 HEAP32[i1 + 4 >> 2] = i14;
 HEAP32[i1 + 8 >> 2] = i17;
 HEAP32[i1 + 12 >> 2] = i20;
 return;
}
function __ZN7WebCore11RenderStyle20setBorderImageOutsetENS_9LengthBoxE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i6 | 0;
 i8 = i6;
 i9 = i1 + 16 | 0;
 if (__ZNK7WebCore9LengthBoxeqERKS0_((HEAP32[(HEAP32[i9 >> 2] | 0) + 132 >> 2] | 0) + 76 | 0, i2) | 0) {
  STACKTOP = i3;
  return;
 }
 i1 = HEAP32[i9 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i10 = i1;
 } else {
  __ZNK7WebCore17StyleSurroundData4copyEv(i5, i1);
  i1 = HEAP32[i5 >> 2] | 0;
  i5 = HEAP32[i9 >> 2] | 0;
  i11 = i5 | 0;
  i12 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
  if ((i12 | 0) == 0) {
   __ZN7WebCore17StyleSurroundDataD2Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  } else {
   HEAP32[i11 >> 2] = i12;
  }
  HEAP32[i9 >> 2] = i1;
  i10 = i1;
 }
 i1 = i2;
 i9 = HEAP32[i1 >> 2] | 0;
 i12 = HEAP32[i1 + 4 >> 2] | 0;
 HEAP32[i7 >> 2] = i9;
 HEAP32[i7 + 4 >> 2] = i12;
 if ((i9 & 0 | 0) == 0 & (i12 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i6);
 }
 i12 = i6 + 8 | 0;
 i9 = i12;
 i1 = i2 + 8 | 0;
 i11 = HEAP32[i1 >> 2] | 0;
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 HEAP32[i12 >> 2] = i11;
 HEAP32[i12 + 4 >> 2] = i5;
 if ((i11 & 0 | 0) == 0 & (i5 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i9);
 }
 i5 = i6 + 16 | 0;
 i11 = i5;
 i1 = i2 + 16 | 0;
 i13 = HEAP32[i1 >> 2] | 0;
 i14 = HEAP32[i1 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = i13;
 HEAP32[i5 + 4 >> 2] = i14;
 if ((i13 & 0 | 0) == 0 & (i14 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i11);
 }
 i14 = i6 + 24 | 0;
 i13 = i14;
 i1 = i2 + 24 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 i15 = HEAP32[i1 + 4 >> 2] | 0;
 HEAP32[i14 >> 2] = i2;
 HEAP32[i14 + 4 >> 2] = i15;
 if ((i2 & 0 | 0) == 0 & (i15 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i13);
 }
 i15 = i10 + 132 | 0;
 i10 = HEAP32[i15 >> 2] | 0;
 if ((HEAP32[i10 >> 2] | 0) == 1) {
  i16 = i10;
 } else {
  __ZNK7WebCore18NinePieceImageData4copyEv(i4, i10);
  i10 = HEAP32[i4 >> 2] | 0;
  __ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv(HEAP32[i15 >> 2] | 0);
  HEAP32[i15 >> 2] = i10;
  i16 = i10;
 }
 i10 = i16 + 76 | 0;
 do {
  if ((i10 | 0) == (i8 | 0)) {
   if ((HEAP8[i8 + 29 | 0] | 0) != 10) {
    break;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i13);
  } else {
   i15 = i10;
   i4 = HEAP32[i7 + 4 >> 2] | 0;
   HEAP32[i15 >> 2] = HEAP32[i7 >> 2];
   HEAP32[i15 + 4 >> 2] = i4;
   HEAP8[i8 + 5 | 0] = 0;
   i4 = i16 + 84 | 0;
   i15 = HEAP32[i12 + 4 >> 2] | 0;
   HEAP32[i4 >> 2] = HEAP32[i12 >> 2];
   HEAP32[i4 + 4 >> 2] = i15;
   HEAP8[i8 + 13 | 0] = 0;
   i15 = i16 + 92 | 0;
   i4 = HEAP32[i5 + 4 >> 2] | 0;
   HEAP32[i15 >> 2] = HEAP32[i5 >> 2];
   HEAP32[i15 + 4 >> 2] = i4;
   HEAP8[i8 + 21 | 0] = 0;
   i4 = i16 + 100 | 0;
   i15 = HEAP32[i14 + 4 >> 2] | 0;
   HEAP32[i4 >> 2] = HEAP32[i14 >> 2];
   HEAP32[i4 + 4 >> 2] = i15;
   HEAP8[i8 + 29 | 0] = 0;
  }
 } while (0);
 if ((HEAP8[i8 + 21 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i11);
 }
 if ((HEAP8[i8 + 13 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i9);
 }
 if ((HEAP8[i8 + 5 | 0] | 0) != 10) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i6);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderStyle20setBorderImageSlicesENS_9LengthBoxE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i6 | 0;
 i8 = i6;
 i9 = i1 + 16 | 0;
 if (__ZNK7WebCore9LengthBoxeqERKS0_((HEAP32[(HEAP32[i9 >> 2] | 0) + 132 >> 2] | 0) + 12 | 0, i2) | 0) {
  STACKTOP = i3;
  return;
 }
 i1 = HEAP32[i9 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i10 = i1;
 } else {
  __ZNK7WebCore17StyleSurroundData4copyEv(i5, i1);
  i1 = HEAP32[i5 >> 2] | 0;
  i5 = HEAP32[i9 >> 2] | 0;
  i11 = i5 | 0;
  i12 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
  if ((i12 | 0) == 0) {
   __ZN7WebCore17StyleSurroundDataD2Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  } else {
   HEAP32[i11 >> 2] = i12;
  }
  HEAP32[i9 >> 2] = i1;
  i10 = i1;
 }
 i1 = i2;
 i9 = HEAP32[i1 >> 2] | 0;
 i12 = HEAP32[i1 + 4 >> 2] | 0;
 HEAP32[i7 >> 2] = i9;
 HEAP32[i7 + 4 >> 2] = i12;
 if ((i9 & 0 | 0) == 0 & (i12 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i6);
 }
 i12 = i6 + 8 | 0;
 i9 = i12;
 i1 = i2 + 8 | 0;
 i11 = HEAP32[i1 >> 2] | 0;
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 HEAP32[i12 >> 2] = i11;
 HEAP32[i12 + 4 >> 2] = i5;
 if ((i11 & 0 | 0) == 0 & (i5 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i9);
 }
 i5 = i6 + 16 | 0;
 i11 = i5;
 i1 = i2 + 16 | 0;
 i13 = HEAP32[i1 >> 2] | 0;
 i14 = HEAP32[i1 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = i13;
 HEAP32[i5 + 4 >> 2] = i14;
 if ((i13 & 0 | 0) == 0 & (i14 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i11);
 }
 i14 = i6 + 24 | 0;
 i13 = i14;
 i1 = i2 + 24 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 i15 = HEAP32[i1 + 4 >> 2] | 0;
 HEAP32[i14 >> 2] = i2;
 HEAP32[i14 + 4 >> 2] = i15;
 if ((i2 & 0 | 0) == 0 & (i15 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i13);
 }
 i15 = i10 + 132 | 0;
 i10 = HEAP32[i15 >> 2] | 0;
 if ((HEAP32[i10 >> 2] | 0) == 1) {
  i16 = i10;
 } else {
  __ZNK7WebCore18NinePieceImageData4copyEv(i4, i10);
  i10 = HEAP32[i4 >> 2] | 0;
  __ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv(HEAP32[i15 >> 2] | 0);
  HEAP32[i15 >> 2] = i10;
  i16 = i10;
 }
 i10 = i16 + 12 | 0;
 do {
  if ((i10 | 0) == (i8 | 0)) {
   if ((HEAP8[i8 + 29 | 0] | 0) != 10) {
    break;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i13);
  } else {
   i15 = i10;
   i4 = HEAP32[i7 + 4 >> 2] | 0;
   HEAP32[i15 >> 2] = HEAP32[i7 >> 2];
   HEAP32[i15 + 4 >> 2] = i4;
   HEAP8[i8 + 5 | 0] = 0;
   i4 = i16 + 20 | 0;
   i15 = HEAP32[i12 + 4 >> 2] | 0;
   HEAP32[i4 >> 2] = HEAP32[i12 >> 2];
   HEAP32[i4 + 4 >> 2] = i15;
   HEAP8[i8 + 13 | 0] = 0;
   i15 = i16 + 28 | 0;
   i4 = HEAP32[i5 + 4 >> 2] | 0;
   HEAP32[i15 >> 2] = HEAP32[i5 >> 2];
   HEAP32[i15 + 4 >> 2] = i4;
   HEAP8[i8 + 21 | 0] = 0;
   i4 = i16 + 36 | 0;
   i15 = HEAP32[i14 + 4 >> 2] | 0;
   HEAP32[i4 >> 2] = HEAP32[i14 >> 2];
   HEAP32[i4 + 4 >> 2] = i15;
   HEAP8[i8 + 29 | 0] = 0;
  }
 } while (0);
 if ((HEAP8[i8 + 21 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i11);
 }
 if ((HEAP8[i8 + 13 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i9);
 }
 if ((HEAP8[i8 + 5 | 0] | 0) != 10) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i6);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderStyle19setBorderImageWidthENS_9LengthBoxE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i6 | 0;
 i8 = i6;
 i9 = i1 + 16 | 0;
 if (__ZNK7WebCore9LengthBoxeqERKS0_((HEAP32[(HEAP32[i9 >> 2] | 0) + 132 >> 2] | 0) + 44 | 0, i2) | 0) {
  STACKTOP = i3;
  return;
 }
 i1 = HEAP32[i9 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i10 = i1;
 } else {
  __ZNK7WebCore17StyleSurroundData4copyEv(i5, i1);
  i1 = HEAP32[i5 >> 2] | 0;
  i5 = HEAP32[i9 >> 2] | 0;
  i11 = i5 | 0;
  i12 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
  if ((i12 | 0) == 0) {
   __ZN7WebCore17StyleSurroundDataD2Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  } else {
   HEAP32[i11 >> 2] = i12;
  }
  HEAP32[i9 >> 2] = i1;
  i10 = i1;
 }
 i1 = i2;
 i9 = HEAP32[i1 >> 2] | 0;
 i12 = HEAP32[i1 + 4 >> 2] | 0;
 HEAP32[i7 >> 2] = i9;
 HEAP32[i7 + 4 >> 2] = i12;
 if ((i9 & 0 | 0) == 0 & (i12 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i6);
 }
 i12 = i6 + 8 | 0;
 i9 = i12;
 i1 = i2 + 8 | 0;
 i11 = HEAP32[i1 >> 2] | 0;
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 HEAP32[i12 >> 2] = i11;
 HEAP32[i12 + 4 >> 2] = i5;
 if ((i11 & 0 | 0) == 0 & (i5 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i9);
 }
 i5 = i6 + 16 | 0;
 i11 = i5;
 i1 = i2 + 16 | 0;
 i13 = HEAP32[i1 >> 2] | 0;
 i14 = HEAP32[i1 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = i13;
 HEAP32[i5 + 4 >> 2] = i14;
 if ((i13 & 0 | 0) == 0 & (i14 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i11);
 }
 i14 = i6 + 24 | 0;
 i13 = i14;
 i1 = i2 + 24 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 i15 = HEAP32[i1 + 4 >> 2] | 0;
 HEAP32[i14 >> 2] = i2;
 HEAP32[i14 + 4 >> 2] = i15;
 if ((i2 & 0 | 0) == 0 & (i15 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i13);
 }
 i15 = i10 + 132 | 0;
 i10 = HEAP32[i15 >> 2] | 0;
 if ((HEAP32[i10 >> 2] | 0) == 1) {
  i16 = i10;
 } else {
  __ZNK7WebCore18NinePieceImageData4copyEv(i4, i10);
  i10 = HEAP32[i4 >> 2] | 0;
  __ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv(HEAP32[i15 >> 2] | 0);
  HEAP32[i15 >> 2] = i10;
  i16 = i10;
 }
 i10 = i16 + 44 | 0;
 do {
  if ((i10 | 0) == (i8 | 0)) {
   if ((HEAP8[i8 + 29 | 0] | 0) != 10) {
    break;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i13);
  } else {
   i15 = i10;
   i4 = HEAP32[i7 + 4 >> 2] | 0;
   HEAP32[i15 >> 2] = HEAP32[i7 >> 2];
   HEAP32[i15 + 4 >> 2] = i4;
   HEAP8[i8 + 5 | 0] = 0;
   i4 = i16 + 52 | 0;
   i15 = HEAP32[i12 + 4 >> 2] | 0;
   HEAP32[i4 >> 2] = HEAP32[i12 >> 2];
   HEAP32[i4 + 4 >> 2] = i15;
   HEAP8[i8 + 13 | 0] = 0;
   i15 = i16 + 60 | 0;
   i4 = HEAP32[i5 + 4 >> 2] | 0;
   HEAP32[i15 >> 2] = HEAP32[i5 >> 2];
   HEAP32[i15 + 4 >> 2] = i4;
   HEAP8[i8 + 21 | 0] = 0;
   i4 = i16 + 68 | 0;
   i15 = HEAP32[i14 + 4 >> 2] | 0;
   HEAP32[i4 >> 2] = HEAP32[i14 >> 2];
   HEAP32[i4 + 4 >> 2] = i15;
   HEAP8[i8 + 29 | 0] = 0;
  }
 } while (0);
 if ((HEAP8[i8 + 21 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i11);
 }
 if ((HEAP8[i8 + 13 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i9);
 }
 if ((HEAP8[i8 + 5 | 0] | 0) != 10) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i6);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore11RenderStyle14applyTransformERNS_20TransformationMatrixERKNS_10LayoutSizeENS0_20ApplyTransformOriginE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, d20 = +0, d21 = +0, i22 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i1 + 20 | 0;
 i1 = HEAP32[(HEAP32[i11 >> 2] | 0) + 72 >> 2] | 0;
 i12 = i1 + 4 | 0;
 i13 = i1 + 12 | 0;
 L1 : do {
  if ((i4 | 0) == 0) {
   i1 = HEAP32[i13 >> 2] | 0;
   i14 = i12 | 0;
   i15 = 0;
   while (1) {
    if (i15 >>> 0 >= i1 >>> 0) {
     i16 = 0;
     break L1;
    }
    if ((HEAP32[i13 >> 2] | 0) >>> 0 <= i15 >>> 0) {
     i17 = 5;
     break;
    }
    i18 = HEAP32[(HEAP32[i14 >> 2] | 0) + (i15 << 2) >> 2] | 0;
    i19 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i18 >> 2] | 0) + 24 >> 2] & 1](i18) | 0;
    if ((i19 - 3 | 0) >>> 0 > 1 >>> 0 & (i19 | 0) != 5 & (i19 | 0) != 13 & (i19 | 0) != 14) {
     i17 = 7;
     break;
    } else {
     i15 = i15 + 1 | 0;
    }
   }
   if ((i17 | 0) == 7) {
    i15 = (HEAP32[(HEAP32[i11 >> 2] | 0) + 72 >> 2] | 0) + 16 | 0;
    HEAP32[i6 >> 2] = HEAP32[i3 >> 2];
    d20 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewE(i15, i6, 0);
    i15 = (HEAP32[(HEAP32[i11 >> 2] | 0) + 72 >> 2] | 0) + 24 | 0;
    HEAP32[i7 >> 2] = HEAP32[i3 + 4 >> 2];
    d21 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewE(i15, i7, 0);
    __ZN7WebCore20TransformationMatrix11translate3dEddd(i2, d20, d21, +HEAPF32[(HEAP32[(HEAP32[i11 >> 2] | 0) + 72 >> 2] | 0) + 32 >> 2]) | 0;
    i16 = 1;
    break;
   } else if ((i17 | 0) == 5) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
  } else {
   i16 = 0;
  }
 } while (0);
 i17 = HEAP32[i13 >> 2] | 0;
 L11 : do {
  if ((i17 | 0) != 0) {
   i7 = i12 | 0;
   i6 = i3 | 0;
   i4 = i3 + 4 | 0;
   i15 = i8 | 0;
   i14 = i8 + 4 | 0;
   i1 = 0;
   i19 = i17;
   while (1) {
    if (i19 >>> 0 <= i1 >>> 0) {
     break;
    }
    i18 = HEAP32[(HEAP32[i7 >> 2] | 0) + (i1 << 2) >> 2] | 0;
    i22 = HEAP32[(HEAP32[i18 >> 2] | 0) + 16 >> 2] | 0;
    d21 = +(HEAP32[i4 >> 2] | 0);
    HEAPF32[i15 >> 2] = +(HEAP32[i6 >> 2] | 0);
    HEAPF32[i14 >> 2] = d21;
    FUNCTION_TABLE_iiii[i22 & 1](i18, i2, i8) | 0;
    i18 = i1 + 1 | 0;
    if (i18 >>> 0 >= i17 >>> 0) {
     break L11;
    }
    i1 = i18;
    i19 = HEAP32[i13 >> 2] | 0;
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 if (!i16) {
  STACKTOP = i5;
  return;
 }
 i16 = (HEAP32[(HEAP32[i11 >> 2] | 0) + 72 >> 2] | 0) + 16 | 0;
 HEAP32[i9 >> 2] = HEAP32[i3 >> 2];
 d21 = +-0 - +__ZN7WebCore19floatValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewE(i16, i9, 0);
 i9 = (HEAP32[(HEAP32[i11 >> 2] | 0) + 72 >> 2] | 0) + 24 | 0;
 HEAP32[i10 >> 2] = HEAP32[i3 + 4 >> 2];
 d20 = +-0 - +__ZN7WebCore19floatValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewE(i9, i10, 0);
 __ZN7WebCore20TransformationMatrix11translate3dEddd(i2, d21, d20, +-0 - +HEAPF32[(HEAP32[(HEAP32[i11 >> 2] | 0) + 72 >> 2] | 0) + 32 >> 2]) | 0;
 STACKTOP = i5;
 return;
}
function __ZNK7WebCore11RenderStyle14applyTransformERNS_20TransformationMatrixERKNS_9FloatRectENS0_20ApplyTransformOriginE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, d20 = +0, d21 = +0, d22 = +0, d23 = +0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = i6;
 i8 = i1 + 20 | 0;
 i1 = HEAP32[(HEAP32[i8 >> 2] | 0) + 72 >> 2] | 0;
 i9 = i1 + 4 | 0;
 do {
  if ((i4 | 0) == 0) {
   i10 = i1 + 12 | 0;
   i11 = HEAP32[i10 >> 2] | 0;
   i12 = i9 | 0;
   i13 = 0;
   while (1) {
    if (i13 >>> 0 >= i11 >>> 0) {
     i14 = 0;
     i15 = 7;
     break;
    }
    if ((HEAP32[i10 >> 2] | 0) >>> 0 <= i13 >>> 0) {
     i15 = 5;
     break;
    }
    i16 = HEAP32[(HEAP32[i12 >> 2] | 0) + (i13 << 2) >> 2] | 0;
    i17 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i16 >> 2] | 0) + 24 >> 2] & 1](i16) | 0;
    if ((i17 - 3 | 0) >>> 0 > 1 >>> 0 & (i17 | 0) != 5 & (i17 | 0) != 13 & (i17 | 0) != 14) {
     i14 = 1;
     i15 = 7;
     break;
    } else {
     i13 = i13 + 1 | 0;
    }
   }
   if ((i15 | 0) == 7) {
    i18 = i14;
    i19 = HEAP32[(HEAP32[i8 >> 2] | 0) + 72 >> 2] | 0;
    break;
   } else if ((i15 | 0) == 5) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
  } else {
   i18 = 0;
   i19 = i1;
  }
 } while (0);
 if ((HEAP8[i19 + 21 | 0] | 0) == 2) {
  d20 = +HEAPF32[i3 >> 2];
 } else {
  d20 = +0;
 }
 if ((HEAP8[i19 + 29 | 0] | 0) == 2) {
  d21 = +HEAPF32[i3 + 4 >> 2];
 } else {
  d21 = +0;
 }
 if (i18) {
  d22 = d20 + +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i19 + 16 | 0, +HEAPF32[i3 + 8 >> 2], 0);
  d23 = d21 + +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE((HEAP32[(HEAP32[i8 >> 2] | 0) + 72 >> 2] | 0) + 24 | 0, +HEAPF32[i3 + 12 >> 2], 0);
  __ZN7WebCore20TransformationMatrix11translate3dEddd(i2, d22, d23, +HEAPF32[(HEAP32[(HEAP32[i8 >> 2] | 0) + 72 >> 2] | 0) + 32 >> 2]) | 0;
 }
 i19 = i1 + 12 | 0;
 i1 = HEAP32[i19 >> 2] | 0;
 L20 : do {
  if ((i1 | 0) != 0) {
   i15 = i9 | 0;
   i14 = i3 + 8 | 0;
   i4 = 0;
   i13 = i1;
   while (1) {
    if (i13 >>> 0 <= i4 >>> 0) {
     break;
    }
    i12 = HEAP32[(HEAP32[i15 >> 2] | 0) + (i4 << 2) >> 2] | 0;
    i10 = HEAP32[(HEAP32[i12 >> 2] | 0) + 16 >> 2] | 0;
    i11 = HEAP32[i14 + 4 >> 2] | 0;
    HEAP32[i6 >> 2] = HEAP32[i14 >> 2];
    HEAP32[i6 + 4 >> 2] = i11;
    FUNCTION_TABLE_iiii[i10 & 1](i12, i2, i7) | 0;
    i12 = i4 + 1 | 0;
    if (i12 >>> 0 >= i1 >>> 0) {
     break L20;
    }
    i4 = i12;
    i13 = HEAP32[i19 >> 2] | 0;
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 if (!i18) {
  STACKTOP = i5;
  return;
 }
 d23 = +-0 - +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE((HEAP32[(HEAP32[i8 >> 2] | 0) + 72 >> 2] | 0) + 16 | 0, +HEAPF32[i3 + 8 >> 2], 0) - d20;
 d20 = +-0 - +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE((HEAP32[(HEAP32[i8 >> 2] | 0) + 72 >> 2] | 0) + 24 | 0, +HEAPF32[i3 + 12 >> 2], 0) - d21;
 __ZN7WebCore20TransformationMatrix11translate3dEddd(i2, d23, d20, +-0 - +HEAPF32[(HEAP32[(HEAP32[i8 >> 2] | 0) + 72 >> 2] | 0) + 32 >> 2]) | 0;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore11RenderStyle21setPageScaleTransformEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, d7 = +0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 24 | 0;
 if (d2 == +1) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore19TransformOperationsC1Eb(i4, 0);
 d7 = d2;
 i8 = __ZN3WTF10fastMallocEj(40) | 0;
 HEAP32[i8 + 4 >> 2] = 1;
 HEAP32[i8 >> 2] = __ZTVN7WebCore23ScaleTransformOperationE + 8;
 HEAPF64[i8 + 8 >> 3] = d7;
 HEAPF64[i8 + 16 >> 3] = d7;
 HEAPF64[i8 + 24 >> 3] = +1;
 HEAP32[i8 + 32 >> 2] = 2;
 i9 = i4 + 8 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 i11 = i4 + 4 | 0;
 if ((i10 | 0) == (HEAP32[i11 >> 2] | 0)) {
  i12 = i10 + 1 | 0;
  i13 = i12 + (i10 >>> 2) | 0;
  i14 = i13 >>> 0 > 16 >>> 0 ? i13 : 16;
  i13 = i14 >>> 0 > i12 >>> 0 ? i14 : i12;
  i12 = i4 | 0;
  do {
   if (i10 >>> 0 < i13 >>> 0) {
    i14 = HEAP32[i12 >> 2] | 0;
    if (i13 >>> 0 > 1073741823 >>> 0) {
     _WTFCrash();
    }
    i15 = __ZN3WTF18fastMallocGoodSizeEj(i13 << 2) | 0;
    HEAP32[i11 >> 2] = i15 >>> 2;
    i16 = __ZN3WTF10fastMallocEj(i15) | 0;
    HEAP32[i12 >> 2] = i16;
    i15 = i14;
    _memcpy(i16 | 0, i15 | 0, i10 << 2) | 0;
    if ((i14 | 0) == 0) {
     break;
    }
    if ((HEAP32[i12 >> 2] | 0) == (i14 | 0)) {
     HEAP32[i12 >> 2] = 0;
     HEAP32[i11 >> 2] = 0;
    }
    __ZN3WTF8fastFreeEPv(i15);
   }
  } while (0);
  HEAP32[(HEAP32[i12 >> 2] | 0) + (HEAP32[i9 >> 2] << 2) >> 2] = i8;
  i17 = HEAP32[i9 >> 2] | 0;
 } else {
  HEAP32[(HEAP32[i4 >> 2] | 0) + (i10 << 2) >> 2] = i8;
  i17 = HEAP32[i9 >> 2] | 0;
 }
 HEAP32[i9 >> 2] = i17 + 1;
 __ZN7WebCore11RenderStyle12setTransformERKNS_19TransformOperationsE(i1, i4);
 HEAP32[i5 >> 2] = 0;
 HEAP8[i5 + 4 | 0] = 0;
 i17 = i5 + 5 | 0;
 HEAP8[i17] = 3;
 HEAP8[i5 + 6 | 0] = 0;
 __ZN7WebCore11RenderStyle19setTransformOriginXENS_6LengthE(i1, i5);
 if ((HEAP8[i17] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i5);
 }
 HEAP32[i6 >> 2] = 0;
 HEAP8[i6 + 4 | 0] = 0;
 i5 = i6 + 5 | 0;
 HEAP8[i5] = 3;
 HEAP8[i6 + 6 | 0] = 0;
 __ZN7WebCore11RenderStyle19setTransformOriginYENS_6LengthE(i1, i6);
 if ((HEAP8[i5] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i6);
 }
 i6 = HEAP32[i9 >> 2] | 0;
 i5 = i4 | 0;
 if ((i6 | 0) != 0) {
  i4 = HEAP32[i5 >> 2] | 0;
  i1 = i4 + (i6 << 2) | 0;
  i6 = i4;
  while (1) {
   i4 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i4 | 0) != 0) {
     i17 = i4 + 4 | 0;
     i8 = i17 | 0;
     i10 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     if ((i10 | 0) != 0) {
      HEAP32[i8 >> 2] = i10;
      break;
     }
     i10 = i17 - 4 | 0;
     if ((i10 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 1](i10);
    }
   } while (0);
   i6 = i6 + 4 | 0;
   if ((i6 | 0) == (i1 | 0)) {
    break;
   }
  }
  HEAP32[i9 >> 2] = 0;
 }
 i9 = HEAP32[i5 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i5 >> 2] = 0;
 HEAP32[i11 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i9);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderStyle11inheritFromEPKS0_NS0_18IsAtShadowBoundaryE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 do {
  if ((i3 | 0) == 0) {
   i7 = i1 + 24 | 0;
   i8 = (HEAP32[(HEAP32[i7 >> 2] | 0) + 88 >> 2] | 0) >>> 4 & 3;
   i9 = HEAP32[i2 + 24 >> 2] | 0;
   i10 = i9 | 0;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
   i11 = HEAP32[i7 >> 2] | 0;
   i12 = i11 | 0;
   i13 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   if ((i13 | 0) == 0) {
    __ZN7WebCore22StyleRareInheritedDataD1Ev(i11);
    __ZN3WTF8fastFreeEPv(i11);
   } else {
    HEAP32[i12 >> 2] = i13;
   }
   HEAP32[i7 >> 2] = i9;
   if (((HEAP32[i9 + 88 >> 2] | 0) >>> 4 & 3 | 0) == (i8 | 0)) {
    break;
   }
   if ((HEAP32[i10 >> 2] | 0) == 1) {
    i14 = i9;
   } else {
    __ZNK7WebCore22StyleRareInheritedData4copyEv(i5, i9);
    i9 = HEAP32[i5 >> 2] | 0;
    i10 = HEAP32[i7 >> 2] | 0;
    i13 = i10 | 0;
    i12 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
    if ((i12 | 0) == 0) {
     __ZN7WebCore22StyleRareInheritedDataD1Ev(i10);
     __ZN3WTF8fastFreeEPv(i10);
    } else {
     HEAP32[i13 >> 2] = i12;
    }
    HEAP32[i7 >> 2] = i9;
    i14 = i9;
   }
   i9 = i14 + 88 | 0;
   HEAP32[i9 >> 2] = HEAP32[i9 >> 2] & -49 | i8 << 4;
  } else {
   i8 = HEAP32[i2 + 24 >> 2] | 0;
   i9 = i8 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
   i9 = i1 + 24 | 0;
   i7 = HEAP32[i9 >> 2] | 0;
   i12 = i7 | 0;
   i13 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   if ((i13 | 0) == 0) {
    __ZN7WebCore22StyleRareInheritedDataD1Ev(i7);
    __ZN3WTF8fastFreeEPv(i7);
   } else {
    HEAP32[i12 >> 2] = i13;
   }
   HEAP32[i9 >> 2] = i8;
  }
 } while (0);
 i14 = HEAP32[i2 + 28 >> 2] | 0;
 i5 = i14 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 i5 = i1 + 28 | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 i8 = i3 | 0;
 i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 if ((i9 | 0) == 0) {
  __ZN7WebCore18StyleInheritedDataD1Ev(i3);
  __ZN3WTF8fastFreeEPv(i3);
 } else {
  HEAP32[i8 >> 2] = i9;
 }
 HEAP32[i5 >> 2] = i14;
 i14 = i2 + 40 | 0;
 i5 = i1 + 40 | 0;
 i9 = HEAP32[i14 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i14 >> 2];
 HEAP32[i5 + 4 >> 2] = i9;
 i9 = i1 + 36 | 0;
 i1 = HEAP32[i9 >> 2] | 0;
 i5 = i2 + 36 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 if ((i1 | 0) == (i2 | 0)) {
  STACKTOP = i4;
  return;
 }
 if (__ZNK7WebCore14SVGRenderStyleeqERKS0_(i1, i2) | 0) {
  STACKTOP = i4;
  return;
 }
 i2 = HEAP32[i9 >> 2] | 0;
 if ((HEAP32[i2 >> 2] | 0) == 1) {
  i15 = i2;
 } else {
  __ZNK7WebCore14SVGRenderStyle4copyEv(i6, i2);
  i2 = HEAP32[i6 >> 2] | 0;
  i6 = HEAP32[i9 >> 2] | 0;
  i1 = i6 | 0;
  i14 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
  if ((i14 | 0) == 0) {
   __ZN7WebCore14SVGRenderStyleD1Ev(i6);
   __ZN3WTF8fastFreeEPv(i6);
  } else {
   HEAP32[i1 >> 2] = i14;
  }
  HEAP32[i9 >> 2] = i2;
  i15 = i2;
 }
 __ZN7WebCore14SVGRenderStyle11inheritFromEPKS0_(i15, HEAP32[i5 >> 2] | 0);
 STACKTOP = i4;
 return;
}
function __ZN3WTFeqINS_12AtomicStringEN7WebCore17CounterDirectivesENS_16AtomicStringHashENS_10HashTraitsIS1_EENS5_IS3_EEEEbRKNS_7HashMapIT_T0_T1_T2_T3_EESG_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i3 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i3 | 0) != (HEAP32[i2 + 12 >> 2] | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = HEAP32[i1 >> 2] | 0;
 i6 = HEAP32[i1 + 4 >> 2] | 0;
 i1 = i5 + (i6 << 4) | 0;
 i7 = i2 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = i2 + 4 | 0;
 i10 = i8 + (HEAP32[i9 >> 2] << 4) | 0;
 if ((i3 | 0) == 0) {
  i4 = 1;
  return i4 | 0;
 }
 L7 : do {
  if ((i6 | 0) == 0) {
   i11 = i5;
  } else {
   i3 = i5;
   while (1) {
    i12 = HEAP32[i3 >> 2] | 0;
    if (!((i12 | 0) == (-1 | 0) | (i12 | 0) == 0)) {
     i11 = i3;
     break L7;
    }
    i12 = i3 + 16 | 0;
    if ((i12 | 0) == (i1 | 0)) {
     i4 = 1;
     break;
    } else {
     i3 = i12;
    }
   }
   return i4 | 0;
  }
 } while (0);
 if ((i11 | 0) == (i1 | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 i5 = i2 + 8 | 0;
 i2 = i11;
 i11 = i8;
 L16 : while (1) {
  do {
   if ((i11 | 0) == 0) {
    i13 = HEAP32[i9 >> 2] << 4 | 0;
   } else {
    i8 = HEAP32[i5 >> 2] | 0;
    i6 = HEAP32[i2 >> 2] | 0;
    i3 = HEAP32[i6 + 16 >> 2] | 0;
    i12 = i3 >>> 7;
    i14 = (i3 >>> 30) + ~i12 | 0;
    i3 = i14 << 12 ^ i14;
    i14 = i3 >>> 7 ^ i3;
    i3 = i14 << 2 ^ i14;
    i14 = i3 >>> 20 ^ i3 | 1;
    i3 = i12;
    i12 = 0;
    while (1) {
     i15 = i3 & i8;
     i16 = i11 + (i15 << 4) | 0;
     i17 = HEAP32[i16 >> 2] | 0;
     i18 = i17;
     if ((i18 | 0) == 0) {
      break;
     } else if ((i18 | 0) != (-1 | 0)) {
      if ((i17 | 0) == (i6 | 0)) {
       i19 = 14;
       break;
      }
     }
     i17 = (i12 | 0) == 0 ? i14 : i12;
     i3 = i17 + i15 | 0;
     i12 = i17;
    }
    if ((i19 | 0) == 14) {
     i19 = 0;
     if ((i16 | 0) != 0) {
      i13 = i16;
      break;
     }
    }
    i13 = i11 + (HEAP32[i9 >> 2] << 4) | 0;
   }
  } while (0);
  if ((i13 | 0) == (i10 | 0)) {
   i4 = 0;
   i19 = 30;
   break;
  }
  if (!(__ZN7WebCoreeqERKNS_17CounterDirectivesES2_(i2 + 4 | 0, i13 + 4 | 0) | 0)) {
   i4 = 0;
   i19 = 29;
   break;
  }
  i12 = i2 + 16 | 0;
  if ((i12 | 0) == (i1 | 0)) {
   i4 = 1;
   i19 = 31;
   break;
  } else {
   i20 = i12;
  }
  while (1) {
   i12 = HEAP32[i20 >> 2] | 0;
   if (!((i12 | 0) == (-1 | 0) | (i12 | 0) == 0)) {
    break;
   }
   i12 = i20 + 16 | 0;
   if ((i12 | 0) == (i1 | 0)) {
    i4 = 1;
    i19 = 28;
    break L16;
   } else {
    i20 = i12;
   }
  }
  if ((i20 | 0) == (i1 | 0)) {
   i4 = 1;
   i19 = 32;
   break;
  }
  i2 = i20;
  i11 = HEAP32[i7 >> 2] | 0;
 }
 if ((i19 | 0) == 29) {
  return i4 | 0;
 } else if ((i19 | 0) == 28) {
  return i4 | 0;
 } else if ((i19 | 0) == 30) {
  return i4 | 0;
 } else if ((i19 | 0) == 32) {
  return i4 | 0;
 } else if ((i19 | 0) == 31) {
  return i4 | 0;
 }
 return 0;
}
function __ZNK7WebCore11RenderStyleeqERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = i1 + 40 | 0;
 i4 = i2 + 40 | 0;
 if (((HEAP32[i4 >> 2] ^ HEAP32[i3 >> 2]) & 2147483647 | 0) != 0) {
  i5 = 0;
  return i5 | 0;
 }
 if (((HEAP32[i4 + 4 >> 2] ^ HEAP32[i3 + 4 >> 2]) & 32767 | 0) != 0) {
  i5 = 0;
  return i5 | 0;
 }
 i3 = i1 + 48 | 0;
 i4 = i2 + 48 | 0;
 i6 = HEAP32[i4 >> 2] ^ HEAP32[i3 >> 2];
 if ((i6 & 268435455 | 0) != 0) {
  i5 = 0;
  return i5 | 0;
 }
 i7 = HEAP32[i4 + 4 >> 2] ^ HEAP32[i3 + 4 >> 2];
 if ((i7 & 117964799 | 0) != 0) {
  i5 = 0;
  return i5 | 0;
 }
 if ((i6 & 1879048192 | 0) != 0) {
  i5 = 0;
  return i5 | 0;
 }
 if ((i7 & 150470656 | 0) != 0) {
  i5 = 0;
  return i5 | 0;
 }
 i7 = HEAP32[i1 + 4 >> 2] | 0;
 i6 = HEAP32[i2 + 4 >> 2] | 0;
 do {
  if ((i7 | 0) != (i6 | 0)) {
   if (__ZNK7WebCore12StyleBoxDataeqERKS0_(i7, i6) | 0) {
    break;
   } else {
    i5 = 0;
   }
   return i5 | 0;
  }
 } while (0);
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i7 = HEAP32[i2 + 8 >> 2] | 0;
 do {
  if ((i6 | 0) != (i7 | 0)) {
   if (!(__ZNK7WebCore9LengthBoxeqERKS0_(i6 + 4 | 0, i7 + 4 | 0) | 0)) {
    i5 = 0;
    return i5 | 0;
   }
   i3 = i6 + 36 | 0;
   i4 = i7 + 36 | 0;
   if (((HEAP8[i4] ^ HEAP8[i3]) & 1) != 0) {
    i5 = 0;
    return i5 | 0;
   }
   if (((HEAP32[i4 >> 2] ^ HEAP32[i3 >> 2]) & 30 | 0) != 0) {
    i5 = 0;
    return i5 | 0;
   }
   if (+HEAPF32[i6 + 40 >> 2] == +HEAPF32[i7 + 40 >> 2]) {
    break;
   } else {
    i5 = 0;
   }
   return i5 | 0;
  }
 } while (0);
 i7 = HEAP32[i1 + 12 >> 2] | 0;
 i6 = HEAP32[i2 + 12 >> 2] | 0;
 do {
  if ((i7 | 0) != (i6 | 0)) {
   if (__ZNK7WebCore19StyleBackgroundDataeqERKS0_(i7, i6) | 0) {
    break;
   } else {
    i5 = 0;
   }
   return i5 | 0;
  }
 } while (0);
 i6 = HEAP32[i1 + 16 >> 2] | 0;
 i7 = HEAP32[i2 + 16 >> 2] | 0;
 do {
  if ((i6 | 0) != (i7 | 0)) {
   if (__ZNK7WebCore17StyleSurroundDataeqERKS0_(i6, i7) | 0) {
    break;
   } else {
    i5 = 0;
   }
   return i5 | 0;
  }
 } while (0);
 i7 = HEAP32[i1 + 20 >> 2] | 0;
 i6 = HEAP32[i2 + 20 >> 2] | 0;
 do {
  if ((i7 | 0) != (i6 | 0)) {
   if (__ZNK7WebCore25StyleRareNonInheritedDataeqERKS0_(i7, i6) | 0) {
    break;
   } else {
    i5 = 0;
   }
   return i5 | 0;
  }
 } while (0);
 i6 = HEAP32[i1 + 24 >> 2] | 0;
 i7 = HEAP32[i2 + 24 >> 2] | 0;
 do {
  if ((i6 | 0) != (i7 | 0)) {
   if (__ZNK7WebCore22StyleRareInheritedDataeqERKS0_(i6, i7) | 0) {
    break;
   } else {
    i5 = 0;
   }
   return i5 | 0;
  }
 } while (0);
 i7 = HEAP32[i1 + 28 >> 2] | 0;
 i6 = HEAP32[i2 + 28 >> 2] | 0;
 do {
  if ((i7 | 0) != (i6 | 0)) {
   if (__ZNK7WebCore18StyleInheritedDataeqERKS0_(i7, i6) | 0) {
    break;
   } else {
    i5 = 0;
   }
   return i5 | 0;
  }
 } while (0);
 i6 = HEAP32[i1 + 36 >> 2] | 0;
 i1 = HEAP32[i2 + 36 >> 2] | 0;
 if ((i6 | 0) == (i1 | 0)) {
  i5 = 1;
  return i5 | 0;
 }
 i5 = __ZNK7WebCore14SVGRenderStyleeqERKS0_(i6, i1) | 0;
 return i5 | 0;
}
function __ZNK7WebCore9LengthBoxeqERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, d7 = +0, d8 = +0, d9 = +0, d10 = +0, d11 = +0, d12 = +0, d13 = +0, d14 = +0;
 i3 = i1 | 0;
 i4 = i2 | 0;
 i5 = HEAP8[i1 + 5 | 0] | 0;
 if (i5 << 24 >> 24 != (HEAP8[i2 + 5 | 0] | 0)) {
  i6 = 0;
  return i6 | 0;
 }
 if (((HEAP8[i2 + 4 | 0] ^ HEAP8[i1 + 4 | 0]) & 1) != 0) {
  i6 = 0;
  return i6 | 0;
 }
 do {
  if (i5 << 24 >> 24 != 15) {
   if ((HEAP8[i1 + 6 | 0] & 1) == 0) {
    d7 = +(HEAP32[i1 >> 2] | 0);
   } else {
    d7 = +HEAPF32[i1 >> 2];
   }
   if ((HEAP8[i2 + 6 | 0] & 1) == 0) {
    d8 = +(HEAP32[i2 >> 2] | 0);
   } else {
    d8 = +HEAPF32[i2 >> 2];
   }
   if (d7 == d8) {
    break;
   }
   if (__ZNK7WebCore6Length17isCalculatedEqualERKS0_(i3, i4) | 0) {
    break;
   } else {
    i6 = 0;
   }
   return i6 | 0;
  }
 } while (0);
 i4 = i1 + 8 | 0;
 i3 = i2 + 8 | 0;
 i5 = HEAP8[i1 + 13 | 0] | 0;
 if (i5 << 24 >> 24 != (HEAP8[i2 + 13 | 0] | 0)) {
  i6 = 0;
  return i6 | 0;
 }
 if (((HEAP8[i2 + 12 | 0] ^ HEAP8[i1 + 12 | 0]) & 1) != 0) {
  i6 = 0;
  return i6 | 0;
 }
 do {
  if (i5 << 24 >> 24 != 15) {
   if ((HEAP8[i1 + 14 | 0] & 1) == 0) {
    d9 = +(HEAP32[i4 >> 2] | 0);
   } else {
    d9 = +HEAPF32[i4 >> 2];
   }
   if ((HEAP8[i2 + 14 | 0] & 1) == 0) {
    d10 = +(HEAP32[i3 >> 2] | 0);
   } else {
    d10 = +HEAPF32[i3 >> 2];
   }
   if (d9 == d10) {
    break;
   }
   if (__ZNK7WebCore6Length17isCalculatedEqualERKS0_(i4, i3) | 0) {
    break;
   } else {
    i6 = 0;
   }
   return i6 | 0;
  }
 } while (0);
 i3 = i1 + 16 | 0;
 i4 = i2 + 16 | 0;
 i5 = HEAP8[i1 + 21 | 0] | 0;
 if (i5 << 24 >> 24 != (HEAP8[i2 + 21 | 0] | 0)) {
  i6 = 0;
  return i6 | 0;
 }
 if (((HEAP8[i2 + 20 | 0] ^ HEAP8[i1 + 20 | 0]) & 1) != 0) {
  i6 = 0;
  return i6 | 0;
 }
 do {
  if (i5 << 24 >> 24 != 15) {
   if ((HEAP8[i1 + 22 | 0] & 1) == 0) {
    d11 = +(HEAP32[i3 >> 2] | 0);
   } else {
    d11 = +HEAPF32[i3 >> 2];
   }
   if ((HEAP8[i2 + 22 | 0] & 1) == 0) {
    d12 = +(HEAP32[i4 >> 2] | 0);
   } else {
    d12 = +HEAPF32[i4 >> 2];
   }
   if (d11 == d12) {
    break;
   }
   if (__ZNK7WebCore6Length17isCalculatedEqualERKS0_(i3, i4) | 0) {
    break;
   } else {
    i6 = 0;
   }
   return i6 | 0;
  }
 } while (0);
 i4 = i1 + 24 | 0;
 i3 = i2 + 24 | 0;
 i5 = HEAP8[i1 + 29 | 0] | 0;
 if (i5 << 24 >> 24 != (HEAP8[i2 + 29 | 0] | 0)) {
  i6 = 0;
  return i6 | 0;
 }
 if (((HEAP8[i2 + 28 | 0] ^ HEAP8[i1 + 28 | 0]) & 1) != 0) {
  i6 = 0;
  return i6 | 0;
 }
 if (i5 << 24 >> 24 == 15) {
  i6 = 1;
  return i6 | 0;
 }
 if ((HEAP8[i1 + 30 | 0] & 1) == 0) {
  d13 = +(HEAP32[i4 >> 2] | 0);
 } else {
  d13 = +HEAPF32[i4 >> 2];
 }
 if ((HEAP8[i2 + 30 | 0] & 1) == 0) {
  d14 = +(HEAP32[i3 >> 2] | 0);
 } else {
  d14 = +HEAPF32[i3 >> 2];
 }
 if (d13 == d14) {
  i6 = 1;
  return i6 | 0;
 }
 i6 = __ZNK7WebCore6Length17isCalculatedEqualERKS0_(i4, i3) | 0;
 return i6 | 0;
}
function __ZN3WTF6VectorIN7WebCore20StyleDashboardRegionELj0ENS_15CrashOnOverflowEE14appendSlowCaseIRS2_EEvOT_(i1, i2) {
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
   if ((i7 + (i4 * 40 & -1) | 0) >>> 0 <= i2 >>> 0) {
    i8 = 3;
    break;
   }
   i9 = HEAP32[i1 + 4 >> 2] | 0;
   i10 = i9 + 1 + (i9 >>> 2) | 0;
   i9 = i10 >>> 0 > 16 >>> 0 ? i10 : 16;
   __ZN3WTF6VectorIN7WebCore20StyleDashboardRegionELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i9 >>> 0 > i5 >>> 0 ? i9 : i5);
   i9 = HEAP32[i6 >> 2] | 0;
   i11 = i9 + (((i2 - i7 | 0) / 40 & -1) * 40 & -1) | 0;
   i12 = i9;
  }
 } while (0);
 if ((i8 | 0) == 3) {
  i8 = HEAP32[i1 + 4 >> 2] | 0;
  i7 = i8 + 1 + (i8 >>> 2) | 0;
  i8 = i7 >>> 0 > 16 >>> 0 ? i7 : 16;
  __ZN3WTF6VectorIN7WebCore20StyleDashboardRegionELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i8 >>> 0 > i5 >>> 0 ? i8 : i5);
  i11 = i2;
  i12 = HEAP32[i6 >> 2] | 0;
 }
 i6 = HEAP32[i3 >> 2] | 0;
 i2 = HEAP32[i11 >> 2] | 0;
 HEAP32[i12 + (i6 * 40 & -1) >> 2] = i2;
 if ((i2 | 0) != 0) {
  i5 = i2 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
 }
 i5 = i12 + (i6 * 40 & -1) + 4 | 0;
 i2 = i11 + 4 | 0;
 i8 = i5;
 i1 = HEAP32[i2 >> 2] | 0;
 i7 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i8 >> 2] = i1;
 HEAP32[i8 + 4 >> 2] = i7;
 if ((i1 & 0 | 0) == 0 & (i7 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i5 | 0);
 }
 i5 = i12 + (i6 * 40 & -1) + 12 | 0;
 i7 = i11 + 12 | 0;
 i1 = i5;
 i8 = HEAP32[i7 >> 2] | 0;
 i2 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i1 >> 2] = i8;
 HEAP32[i1 + 4 >> 2] = i2;
 if ((i8 & 0 | 0) == 0 & (i2 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i5);
 }
 i5 = i12 + (i6 * 40 & -1) + 20 | 0;
 i2 = i11 + 20 | 0;
 i8 = i5;
 i1 = HEAP32[i2 >> 2] | 0;
 i7 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i8 >> 2] = i1;
 HEAP32[i8 + 4 >> 2] = i7;
 if ((i1 & 0 | 0) == 0 & (i7 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i5);
 }
 i5 = i12 + (i6 * 40 & -1) + 28 | 0;
 i7 = i11 + 28 | 0;
 i1 = i5;
 i8 = HEAP32[i7 >> 2] | 0;
 i2 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i1 >> 2] = i8;
 HEAP32[i1 + 4 >> 2] = i2;
 if (!((i8 & 0 | 0) == 0 & (i2 & 65280 | 0) == 2560)) {
  i13 = i12 + (i6 * 40 & -1) + 36 | 0;
  i14 = i11 + 36 | 0;
  i15 = HEAP32[i14 >> 2] | 0;
  HEAP32[i13 >> 2] = i15;
  i16 = HEAP32[i3 >> 2] | 0;
  i17 = i16 + 1 | 0;
  HEAP32[i3 >> 2] = i17;
  return;
 }
 __ZNK7WebCore6Length22incrementCalculatedRefEv(i5);
 i13 = i12 + (i6 * 40 & -1) + 36 | 0;
 i14 = i11 + 36 | 0;
 i15 = HEAP32[i14 >> 2] | 0;
 HEAP32[i13 >> 2] = i15;
 i16 = HEAP32[i3 >> 2] | 0;
 i17 = i16 + 1 | 0;
 HEAP32[i3 >> 2] = i17;
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
function __ZNK7WebCore11RenderStyle18computedLineHeightEPNS_10RenderViewE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, d16 = +0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, d21 = +0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i10 = i1 + 28 | 0;
 i1 = (HEAP32[i10 >> 2] | 0) + 8 | 0;
 i11 = HEAP32[i1 >> 2] | 0;
 i12 = HEAP32[i1 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i11;
 HEAP32[i4 + 4 >> 2] = i12;
 if ((i11 & 0 | 0) == 0 & (i12 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i5);
  i11 = i5 + 5 | 0;
  i13 = HEAP8[i11] | 0;
  i14 = i11;
 } else {
  i13 = (i12 >>> 8 | 0 << 24) & 255;
  i14 = i5 + 5 | 0;
 }
 do {
  if ((i13 << 24 >> 24 | 0) == 15 | (i13 << 24 >> 24 | 0) == 10) {
   i15 = 12;
  } else {
   if ((HEAP8[i5 + 6 | 0] & 1) == 0) {
    d16 = +(HEAP32[i4 >> 2] | 0);
   } else {
    d16 = +HEAPF32[i4 >> 2];
   }
   if (d16 >= +0) {
    i15 = 12;
    break;
   }
   i12 = HEAP32[i10 >> 2] | 0;
   i11 = HEAP32[i12 + 40 >> 2] | 0;
   i1 = i11 + 44 | 0;
   i17 = HEAP32[i1 >> 2] | 0;
   if ((i17 | 0) == 0) {
    i18 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i11, i12 + 16 | 0, 0) | 0;
    i12 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i18 >> 2] | 0) + 8 >> 2] & 1](i18, 32) | 0;
    HEAP32[i1 >> 2] = i12;
    i19 = i12;
   } else {
    i19 = i17;
   }
   i20 = _round(+(+HEAPF32[i19 + 28 >> 2])) | 0;
  }
 } while (0);
 do {
  if ((i15 | 0) == 12) {
   i19 = HEAP8[i14] | 0;
   if ((i19 << 24 >> 24 | 0) == 10 | (i19 << 24 >> 24 | 0) == 2) {
    HEAP32[i6 >> 2] = ~~(+HEAPF32[(HEAP32[i10 >> 2] | 0) + 28 >> 2] + +.5);
    __ZN7WebCore21minimumValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i7, i5, i6, 0, 0);
    i20 = HEAP32[i7 >> 2] | 0;
    break;
   }
   if ((i19 - 11 & 255) >>> 0 < 4 >>> 0) {
    HEAP32[i8 >> 2] = 0;
    __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i9, i5, i8, i2, 0);
    i20 = HEAP32[i9 >> 2] | 0;
    break;
   }
   if ((HEAP8[i5 + 6 | 0] & 1) == 0) {
    d21 = +(HEAP32[i4 >> 2] | 0);
   } else {
    d21 = +HEAPF32[i4 >> 2];
   }
   i20 = ~~d21;
  }
 } while (0);
 if ((HEAP8[i14] | 0) != 10) {
  STACKTOP = i3;
  return i20 | 0;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i5);
 STACKTOP = i3;
 return i20 | 0;
}
function __ZNK7WebCore11RenderStyle24getRoundedInnerBorderForERKNS_10LayoutRectEiiiibb(i1, i2, i3, i4, i5, i6, i7, i8, i9) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 var i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i10 = STACKTOP;
 i11 = -i5 | 0;
 i12 = -i4 | 0;
 i13 = -i7 | 0;
 i14 = -i6 | 0;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i18 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i19 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i20 = (HEAP32[i3 + 4 >> 2] | 0) + i4 | 0;
 i21 = (HEAP32[i3 + 8 >> 2] | 0) - (i7 + i6) | 0;
 i7 = (HEAP32[i3 + 12 >> 2] | 0) - (i5 + i4) | 0;
 HEAP32[i15 >> 2] = (HEAP32[i3 >> 2] | 0) + i6;
 HEAP32[i15 + 4 >> 2] = i20;
 HEAP32[i15 + 8 >> 2] = i21;
 HEAP32[i15 + 12 >> 2] = i7;
 __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i16, i15);
 _memset(i17 | 0, 0, 32) | 0;
 __ZN7WebCore11RoundedRectC1ERKNS_7IntRectERKNS0_5RadiiE(i1, i16, i17);
 i17 = HEAP32[i2 + 16 >> 2] | 0;
 i16 = i17 + 136 | 0;
 do {
  if ((HEAP8[i17 + 141 | 0] | 0) != 10) {
   if ((HEAP8[i17 + 142 | 0] & 1) == 0) {
    if ((HEAP32[i16 >> 2] | 0) != 0) {
     break;
    }
   } else {
    if (+HEAPF32[i16 >> 2] != +0) {
     break;
    }
   }
   i15 = i17 + 152 | 0;
   if ((HEAP8[i17 + 157 | 0] | 0) == 10) {
    break;
   }
   if ((HEAP8[i17 + 158 | 0] & 1) == 0) {
    if ((HEAP32[i15 >> 2] | 0) != 0) {
     break;
    }
   } else {
    if (+HEAPF32[i15 >> 2] != +0) {
     break;
    }
   }
   i15 = i17 + 168 | 0;
   if ((HEAP8[i17 + 173 | 0] | 0) == 10) {
    break;
   }
   if ((HEAP8[i17 + 174 | 0] & 1) == 0) {
    if ((HEAP32[i15 >> 2] | 0) != 0) {
     break;
    }
   } else {
    if (+HEAPF32[i15 >> 2] != +0) {
     break;
    }
   }
   i15 = i17 + 184 | 0;
   if ((HEAP8[i17 + 189 | 0] | 0) == 10) {
    break;
   }
   if ((HEAP8[i17 + 190 | 0] & 1) == 0) {
    if ((HEAP32[i15 >> 2] | 0) != 0) {
     break;
    }
    STACKTOP = i10;
    return;
   } else {
    if (+HEAPF32[i15 >> 2] != +0) {
     break;
    }
    STACKTOP = i10;
    return;
   }
  }
 } while (0);
 __ZNK7WebCore11RenderStyle19getRoundedBorderForERKNS_10LayoutRectEPNS_10RenderViewEbb(i19, i2, i3, 0, 1, 1);
 _memcpy(i18 | 0, i19 + 16 | 0, 32) | 0;
 __ZN7WebCore11RoundedRect5Radii6expandEiiii(i18, i12, i11, i14, i13);
 i13 = (HEAP32[i2 + 44 >> 2] | 0) >>> 13 & 3;
 __ZN7WebCore11RoundedRect19includeLogicalEdgesERKNS0_5RadiiEbbb(i1, i18, (i13 | 0) == 0 | (i13 | 0) == 3, i8, i9);
 STACKTOP = i10;
 return;
}
function __ZN3WTF6VectorIN7WebCore20StyleDashboardRegionELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
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
   i2 = i6 | 0;
   i8 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   HEAP32[i7 >> 2] = i8;
   i8 = i6 + 4 | 0;
   i9 = i7 + 4 | 0;
   i10 = HEAP32[i8 + 4 >> 2] | 0;
   HEAP32[i9 >> 2] = HEAP32[i8 >> 2];
   HEAP32[i9 + 4 >> 2] = i10;
   i10 = i6 + 9 | 0;
   HEAP8[i10] = 0;
   i9 = i6 + 12 | 0;
   i8 = i9;
   i11 = i7 + 12 | 0;
   i12 = HEAP32[i8 + 4 >> 2] | 0;
   HEAP32[i11 >> 2] = HEAP32[i8 >> 2];
   HEAP32[i11 + 4 >> 2] = i12;
   i12 = i6 + 17 | 0;
   HEAP8[i12] = 0;
   i11 = i6 + 20 | 0;
   i8 = i11;
   i13 = i7 + 20 | 0;
   i14 = HEAP32[i8 + 4 >> 2] | 0;
   HEAP32[i13 >> 2] = HEAP32[i8 >> 2];
   HEAP32[i13 + 4 >> 2] = i14;
   i14 = i6 + 25 | 0;
   HEAP8[i14] = 0;
   i13 = i6 + 28 | 0;
   i8 = i13;
   i15 = i7 + 28 | 0;
   i16 = HEAP32[i8 + 4 >> 2] | 0;
   HEAP32[i15 >> 2] = HEAP32[i8 >> 2];
   HEAP32[i15 + 4 >> 2] = i16;
   i16 = i6 + 33 | 0;
   HEAP8[i16] = 0;
   HEAP32[i7 + 36 >> 2] = HEAP32[i6 + 36 >> 2];
   if ((HEAP8[i16] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i13);
   }
   if ((HEAP8[i14] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i11);
   }
   if ((HEAP8[i12] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i9);
   }
   if ((HEAP8[i10] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i6 + 4 | 0);
   }
   i10 = HEAP32[i2 >> 2] | 0;
   do {
    if ((i10 | 0) != 0) {
     i2 = i10 | 0;
     i9 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
     if ((i9 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i10);
      break;
     } else {
      HEAP32[i2 >> 2] = i9;
      break;
     }
    }
   } while (0);
   i10 = i6 + 40 | 0;
   if ((i10 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i10;
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
function __ZN7WebCore11RenderStyle17setContentAltTextERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i1 + 20 | 0;
 i1 = HEAP32[i7 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i8 = i1;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i6, i1);
  i1 = HEAP32[i6 >> 2] | 0;
  i6 = HEAP32[i7 >> 2] | 0;
  i9 = i6 | 0;
  i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
  if ((i10 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i6);
   __ZN3WTF8fastFreeEPv(i6);
  } else {
   HEAP32[i9 >> 2] = i10;
  }
  HEAP32[i7 >> 2] = i1;
  i8 = i1;
 }
 i1 = i2 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i10 = i2 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
 }
 i10 = i8 + 96 | 0;
 i8 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = i2;
 do {
  if ((i8 | 0) != 0) {
   i2 = i8 | 0;
   i10 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i2 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i8 = HEAP32[i7 >> 2] | 0;
 if ((HEAP32[i8 >> 2] | 0) == 1) {
  i11 = i8;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i5, i8);
  i8 = HEAP32[i5 >> 2] | 0;
  i5 = HEAP32[i7 >> 2] | 0;
  i10 = i5 | 0;
  i2 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
  if ((i2 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  } else {
   HEAP32[i10 >> 2] = i2;
  }
  HEAP32[i7 >> 2] = i8;
  i11 = i8;
 }
 if ((HEAP32[i11 + 88 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i11 >> 2] | 0) == 1) {
  i12 = i11;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i4, i11);
  i11 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i7 >> 2] | 0;
  i8 = i4 | 0;
  i2 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
  if ((i2 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i8 >> 2] = i2;
  }
  HEAP32[i7 >> 2] = i11;
  i12 = i11;
 }
 i11 = HEAP32[i12 + 88 >> 2] | 0;
 i12 = HEAP32[i1 >> 2] | 0;
 if ((i12 | 0) != 0) {
  i1 = i12 | 0;
  HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
 }
 i1 = i11 + 8 | 0;
 i11 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = i12;
 if ((i11 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i12 = i11 | 0;
 i1 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i11);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i12 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore11RenderStyle18setFontDescriptionERKNS_15FontDescriptionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 + 28 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 i7 = HEAP32[i1 + 16 >> 2] | 0;
 i8 = HEAP32[i2 >> 2] | 0;
 L1 : do {
  if ((i7 | 0) == (i8 | 0)) {
   i9 = 6;
  } else {
   if ((i7 | 0) == 0 | (i8 | 0) == 0) {
    break;
   }
   i10 = HEAP32[i7 - 4 >> 2] | 0;
   if ((i10 | 0) == (HEAP32[i8 - 4 >> 2] | 0)) {
    i11 = 0;
   } else {
    break;
   }
   while (1) {
    if (i11 >>> 0 >= i10 >>> 0) {
     i9 = 6;
     break L1;
    }
    if ((HEAP32[i7 + (i11 << 2) >> 2] | 0) == (HEAP32[i8 + (i11 << 2) >> 2] | 0)) {
     i11 = i11 + 1 | 0;
    } else {
     break;
    }
   }
  }
 } while (0);
 do {
  if ((i9 | 0) == 6) {
   if (+HEAPF32[i1 + 24 >> 2] != +HEAPF32[i2 + 8 >> 2]) {
    break;
   }
   if (+HEAPF32[i1 + 28 >> 2] != +HEAPF32[i2 + 12 >> 2]) {
    break;
   }
   i11 = HEAP32[i1 + 32 >> 2] | 0;
   i8 = HEAP32[i2 + 16 >> 2] | 0;
   i7 = i8 ^ i11;
   if ((i7 & 268435440 | 0) != 0) {
    break;
   }
   if ((i11 >>> 28 | 0) != (i8 >>> 28 | 0)) {
    break;
   }
   i8 = HEAP32[i2 + 20 >> 2] ^ HEAP32[i1 + 36 >> 2];
   if ((i8 & 31 | 0) != 0) {
    break;
   }
   if ((i7 & 15 | 0) != 0) {
    break;
   }
   if ((i8 & 4064 | 0) != 0) {
    break;
   }
   if ((HEAP32[i1 + 20 >> 2] | 0) == (HEAP32[i2 + 4 >> 2] | 0)) {
    i12 = 0;
   } else {
    break;
   }
   STACKTOP = i3;
   return i12 | 0;
  }
 } while (0);
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i13 = i1;
 } else {
  __ZNK7WebCore18StyleInheritedData4copyEv(i4, i1);
  i1 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i6 >> 2] | 0;
  i9 = i4 | 0;
  i8 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
  if ((i8 | 0) == 0) {
   __ZN7WebCore18StyleInheritedDataD1Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i9 >> 2] = i8;
  }
  HEAP32[i6 >> 2] = i1;
  i13 = i1;
 }
 __ZN7WebCore4FontC1ERKNS_15FontDescriptionEff(i5, i2, +HEAPF32[i13 + 44 >> 2], +HEAPF32[i13 + 48 >> 2]);
 __ZN7WebCore4FontaSERKS0_(i13 + 16 | 0, i5) | 0;
 i13 = HEAP32[i5 + 24 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i2 = i13 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i1 | 0) == 0) {
    __ZN7WebCore10FontGlyphsD2Ev(i13);
    __ZN3WTF8fastFreeEPv(i13);
    break;
   } else {
    HEAP32[i2 >> 2] = i1;
    break;
   }
  }
 } while (0);
 __ZN7WebCore15FontDescriptionD2Ev(i5 | 0);
 i12 = 1;
 STACKTOP = i3;
 return i12 | 0;
}
function __ZNK7WebCore11RenderStyle30changeRequiresRecompositeLayerEPKS0_Rj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, d11 = +0, d12 = +0, d13 = +0, d14 = +0;
 i3 = i1 + 20 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 i4 = i2 + 20 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i1 | 0) != (i2 | 0)) {
   if (((HEAP32[i2 + 292 >> 2] ^ HEAP32[i1 + 292 >> 2]) & 1536 | 0) != 0) {
    i5 = 1;
    return i5 | 0;
   }
   if (+HEAPF32[i1 + 16 >> 2] != +HEAPF32[i2 + 16 >> 2]) {
    i5 = 1;
    return i5 | 0;
   }
   i6 = i1 + 20 | 0;
   i7 = i2 + 20 | 0;
   i8 = HEAP8[i1 + 25 | 0] | 0;
   if (i8 << 24 >> 24 != (HEAP8[i2 + 25 | 0] | 0)) {
    i5 = 1;
    return i5 | 0;
   }
   if (((HEAP8[i2 + 24 | 0] ^ HEAP8[i1 + 24 | 0]) & 1) != 0) {
    i5 = 1;
    return i5 | 0;
   }
   do {
    if (i8 << 24 >> 24 == 15) {
     i9 = i1;
     i10 = i2;
    } else {
     if ((HEAP8[i1 + 26 | 0] & 1) == 0) {
      d11 = +(HEAP32[i6 >> 2] | 0);
     } else {
      d11 = +HEAPF32[i6 >> 2];
     }
     if ((HEAP8[i2 + 26 | 0] & 1) == 0) {
      d12 = +(HEAP32[i7 >> 2] | 0);
     } else {
      d12 = +HEAPF32[i7 >> 2];
     }
     if (d11 == d12) {
      i9 = i1;
      i10 = i2;
      break;
     }
     if (__ZNK7WebCore6Length17isCalculatedEqualERKS0_(i6, i7) | 0) {
      i9 = HEAP32[i3 >> 2] | 0;
      i10 = HEAP32[i4 >> 2] | 0;
      break;
     } else {
      i5 = 1;
      return i5 | 0;
     }
    }
   } while (0);
   i7 = i9 + 28 | 0;
   i6 = i10 + 28 | 0;
   i8 = HEAP8[i9 + 33 | 0] | 0;
   if (i8 << 24 >> 24 != (HEAP8[i10 + 33 | 0] | 0)) {
    i5 = 1;
    return i5 | 0;
   }
   if (((HEAP8[i10 + 32 | 0] ^ HEAP8[i9 + 32 | 0]) & 1) != 0) {
    i5 = 1;
    return i5 | 0;
   }
   if (i8 << 24 >> 24 == 15) {
    break;
   }
   if ((HEAP8[i9 + 34 | 0] & 1) == 0) {
    d13 = +(HEAP32[i7 >> 2] | 0);
   } else {
    d13 = +HEAPF32[i7 >> 2];
   }
   if ((HEAP8[i10 + 34 | 0] & 1) == 0) {
    d14 = +(HEAP32[i6 >> 2] | 0);
   } else {
    d14 = +HEAPF32[i6 >> 2];
   }
   if (d13 == d14) {
    break;
   }
   if (__ZNK7WebCore6Length17isCalculatedEqualERKS0_(i7, i6) | 0) {
    break;
   } else {
    i5 = 1;
   }
   return i5 | 0;
  }
 } while (0);
 i5 = 0;
 return i5 | 0;
}
function __Z12compareEqualIN7WebCore19TransformOperationsES1_EbRKT_RKT0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i2 + 4 >> 2] | 0;
 i6 = i2 + 8 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = i4 | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = i4 + 4 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i4 + 8 | 0;
 HEAP32[i10 >> 2] = i7;
 do {
  if ((i5 | 0) != 0) {
   if (i5 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
    return 0;
   }
   i7 = __ZN3WTF18fastMallocGoodSizeEj(i5 << 2) | 0;
   HEAP32[i9 >> 2] = i7 >>> 2;
   i11 = __ZN3WTF10fastMallocEj(i7) | 0;
   i7 = i11;
   HEAP32[i8 >> 2] = i7;
   if ((i11 | 0) == 0) {
    break;
   }
   i11 = HEAP32[i2 >> 2] | 0;
   i12 = HEAP32[i6 >> 2] | 0;
   i13 = i11 + (i12 << 2) | 0;
   if ((i12 | 0) == 0) {
    break;
   } else {
    i14 = i11;
    i15 = i7;
   }
   while (1) {
    i7 = HEAP32[i14 >> 2] | 0;
    HEAP32[i15 >> 2] = i7;
    if ((i7 | 0) != 0) {
     i11 = i7 + 4 | 0;
     HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
    }
    i11 = i14 + 4 | 0;
    if ((i11 | 0) == (i13 | 0)) {
     break;
    } else {
     i14 = i11;
     i15 = i15 + 4 | 0;
    }
   }
  }
 } while (0);
 i15 = __ZNK7WebCore19TransformOperationseqERKS0_(i1, i4) | 0;
 i4 = HEAP32[i10 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i1 = HEAP32[i8 >> 2] | 0;
  i14 = i1 + (i4 << 2) | 0;
  i4 = i1;
  while (1) {
   i1 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i1 | 0) != 0) {
     i6 = i1 + 4 | 0;
     i2 = i6 | 0;
     i5 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
     if ((i5 | 0) != 0) {
      HEAP32[i2 >> 2] = i5;
      break;
     }
     i5 = i6 - 4 | 0;
     if ((i5 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 1](i5);
    }
   } while (0);
   i4 = i4 + 4 | 0;
   if ((i4 | 0) == (i14 | 0)) {
    break;
   }
  }
  HEAP32[i10 >> 2] = 0;
 }
 i10 = HEAP32[i8 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i3;
  return i15 | 0;
 }
 HEAP32[i8 >> 2] = 0;
 HEAP32[i9 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i10);
 STACKTOP = i3;
 return i15 | 0;
}
function __ZN7WebCore11RenderStyle33setColumnStylesFromPaginationModeERKNS_10Pagination4ModeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 4) {
  __ZN7WebCore11RenderStyle13setColumnAxisENS_10ColumnAxisE(i1, 1);
  i2 = (HEAP32[i1 + 44 >> 2] | 0) >>> 13 & 3;
  if ((i2 | 0) == 3 | (i2 | 0) == 0) {
   __ZN7WebCore11RenderStyle20setColumnProgressionENS_17ColumnProgressionE(i1, ((i2 | 0) == 1 | (i2 | 0) == 3) & 1 ^ 1);
   return;
  } else {
   __ZN7WebCore11RenderStyle20setColumnProgressionENS_17ColumnProgressionE(i1, (HEAP32[i1 + 40 >> 2] | 0) >>> 30 & 1);
   return;
  }
 } else if ((i3 | 0) == 3) {
  __ZN7WebCore11RenderStyle13setColumnAxisENS_10ColumnAxisE(i1, 1);
  i2 = (HEAP32[i1 + 44 >> 2] | 0) >>> 13 & 3;
  if ((i2 | 0) == 3 | (i2 | 0) == 0) {
   __ZN7WebCore11RenderStyle20setColumnProgressionENS_17ColumnProgressionE(i1, ((i2 | 0) == 1 | (i2 | 0) == 3) & 1);
   return;
  } else {
   __ZN7WebCore11RenderStyle20setColumnProgressionENS_17ColumnProgressionE(i1, (HEAP32[i1 + 40 >> 2] | 0) >>> 30 & 1 ^ 1);
   return;
  }
 } else if ((i3 | 0) == 1) {
  __ZN7WebCore11RenderStyle13setColumnAxisENS_10ColumnAxisE(i1, 0);
  i2 = (HEAP32[i1 + 44 >> 2] | 0) >>> 13 & 3;
  if ((i2 | 0) == 3 | (i2 | 0) == 0) {
   __ZN7WebCore11RenderStyle20setColumnProgressionENS_17ColumnProgressionE(i1, (HEAP32[i1 + 40 >> 2] | 0) >>> 30 & 1 ^ 1);
   return;
  } else {
   __ZN7WebCore11RenderStyle20setColumnProgressionENS_17ColumnProgressionE(i1, ((i2 | 0) == 1 | (i2 | 0) == 3) & 1);
   return;
  }
 } else if ((i3 | 0) == 2) {
  __ZN7WebCore11RenderStyle13setColumnAxisENS_10ColumnAxisE(i1, 0);
  i3 = (HEAP32[i1 + 44 >> 2] | 0) >>> 13 & 3;
  if ((i3 | 0) == 3 | (i3 | 0) == 0) {
   __ZN7WebCore11RenderStyle20setColumnProgressionENS_17ColumnProgressionE(i1, (HEAP32[i1 + 40 >> 2] | 0) >>> 30 & 1);
   return;
  } else {
   __ZN7WebCore11RenderStyle20setColumnProgressionENS_17ColumnProgressionE(i1, ((i3 | 0) == 1 | (i3 | 0) == 3) & 1 ^ 1);
   return;
  }
 } else {
  return;
 }
}
function __ZN7WebCoreL28positionChangeIsMovementOnlyERKNS_9LengthBoxES2_RKNS_6LengthE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = HEAP8[i1 + 5 | 0] | 0;
 i5 = i4 & 255;
 if (i4 << 24 >> 24 != (HEAP8[i2 + 5 | 0] | 0)) {
  i6 = 0;
  return i6 | 0;
 }
 i7 = HEAP8[i1 + 13 | 0] | 0;
 if (i7 << 24 >> 24 != (HEAP8[i2 + 13 | 0] | 0)) {
  i6 = 0;
  return i6 | 0;
 }
 i8 = HEAP8[i1 + 21 | 0] | 0;
 if (i8 << 24 >> 24 != (HEAP8[i2 + 21 | 0] | 0)) {
  i6 = 0;
  return i6 | 0;
 }
 i9 = HEAP8[i1 + 29 | 0] | 0;
 if (i9 << 24 >> 24 != (HEAP8[i2 + 29 | 0] | 0)) {
  i6 = 0;
  return i6 | 0;
 }
 i2 = i4 << 24 >> 24 == 0 | (i4 - 4 & 255) >>> 0 < 2 >>> 0;
 do {
  if (!i2) {
   if ((i5 - 6 | 0) >>> 0 < 4 >>> 0) {
    break;
   }
   if (i7 << 24 >> 24 == 0 | (i7 - 4 & 255) >>> 0 < 2 >>> 0) {
    break;
   }
   if (((i7 & 255) - 6 | 0) >>> 0 < 4 >>> 0) {
    break;
   } else {
    i6 = 0;
   }
   return i6 | 0;
  }
 } while (0);
 do {
  if (!(i8 << 24 >> 24 == 0 | (i8 - 4 & 255) >>> 0 < 2 >>> 0)) {
   if (((i8 & 255) - 6 | 0) >>> 0 < 4 >>> 0) {
    break;
   }
   if (i9 << 24 >> 24 == 0 | (i9 - 4 & 255) >>> 0 < 2 >>> 0) {
    break;
   }
   if (((i9 & 255) - 6 | 0) >>> 0 < 4 >>> 0) {
    break;
   } else {
    i6 = 0;
   }
   return i6 | 0;
  }
 } while (0);
 if (i2) {
  i10 = 15;
 } else {
  if ((i5 - 6 | 0) >>> 0 < 4 >>> 0) {
   i10 = 15;
  } else {
   i10 = 17;
  }
 }
 do {
  if ((i10 | 0) == 15) {
   if (i7 << 24 >> 24 == 0 | (i7 - 4 & 255) >>> 0 < 2 >>> 0) {
    break;
   }
   if (((i7 & 255) - 6 | 0) >>> 0 >= 4 >>> 0) {
    i10 = 17;
   }
  }
 } while (0);
 do {
  if ((i10 | 0) == 17) {
   i7 = HEAP8[i3 + 5 | 0] | 0;
   if (i7 << 24 >> 24 == 0 | (i7 - 4 & 255) >>> 0 < 2 >>> 0) {
    i6 = 0;
    return i6 | 0;
   }
   if (((i7 & 255) - 6 | 0) >>> 0 < 4 >>> 0) {
    i6 = 0;
   } else {
    break;
   }
   return i6 | 0;
  }
 } while (0);
 i6 = 1;
 return i6 | 0;
}
function __ZN7WebCore15FontDescriptionD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i3 >> 2] = i4;
    break;
   }
   i4 = i2 + 12 | 0;
   i3 = HEAP32[i4 >> 2] | 0;
   i5 = i2 + 4 | 0;
   if ((i3 | 0) != 0) {
    i6 = HEAP32[i5 >> 2] | 0;
    i7 = i6 + (i3 << 3) | 0;
    i3 = i6;
    while (1) {
     i6 = HEAP32[i3 >> 2] | 0;
     do {
      if ((i6 | 0) != 0) {
       i8 = i6 | 0;
       i9 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
       if ((i9 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i6);
        break;
       } else {
        HEAP32[i8 >> 2] = i9;
        break;
       }
      }
     } while (0);
     i3 = i3 + 8 | 0;
     if ((i3 | 0) == (i7 | 0)) {
      break;
     }
    }
    HEAP32[i4 >> 2] = 0;
   }
   i7 = HEAP32[i5 >> 2] | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i5 >> 2] = 0;
    HEAP32[i2 + 8 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i7);
   }
   __ZN3WTF8fastFreeEPv(i2);
  }
 } while (0);
 i2 = i1 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i7 = i1 - 8 | 0;
 i1 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 HEAP32[i7 >> 2] = i1;
 if ((i1 | 0) != 0) {
  return;
 }
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i10 = 0;
 } else {
  i10 = i1 + (HEAP32[i1 - 4 >> 2] << 2) | 0;
 }
 if ((i1 | 0) == (i10 | 0)) {
  i11 = i1;
 } else {
  i7 = i1;
  while (1) {
   i1 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i1 | 0) != 0) {
     i3 = i1 | 0;
     i6 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
     if ((i6 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i1);
      break;
     } else {
      HEAP32[i3 >> 2] = i6;
      break;
     }
    }
   } while (0);
   i7 = i7 + 4 | 0;
   if ((i7 | 0) == (i10 | 0)) {
    break;
   }
  }
  i11 = HEAP32[i2 >> 2] | 0;
 }
 __ZN3WTF8fastFreeEPv(i11 - 8 | 0);
 return;
}
function __ZNK7WebCore11RenderStyle24getRoundedInnerBorderForERKNS_10LayoutRectEbb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i6 = (HEAP32[i2 + 44 >> 2] | 0) >>> 13 & 3;
 i7 = (i6 | 0) != 3 & (i6 | 0) != 0;
 do {
  if (i7 | i4) {
   i8 = HEAP32[i2 + 16 >> 2] | 0;
   i9 = HEAP32[i8 + 104 >> 2] | 0;
   if ((HEAP32[(HEAP32[i8 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0) {
    if ((i9 & 1879048192) >>> 0 < 268435456 >>> 0) {
     i10 = 0;
     break;
    }
   }
   i10 = i9 >>> 1 & 67108863;
  } else {
   i10 = 0;
  }
 } while (0);
 do {
  if (i7 | i5) {
   i9 = HEAP32[i2 + 16 >> 2] | 0;
   i8 = HEAP32[i9 + 112 >> 2] | 0;
   if ((HEAP32[(HEAP32[i9 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0) {
    if ((i8 & 1879048192) >>> 0 < 268435456 >>> 0) {
     i11 = 0;
     break;
    }
   }
   i11 = i8 >>> 1 & 67108863;
  } else {
   i11 = 0;
  }
 } while (0);
 if (i4) {
  i12 = 11;
 } else {
  if ((i6 | 0) == 3 | (i6 | 0) == 0) {
   i12 = 11;
  } else {
   i13 = 0;
  }
 }
 do {
  if ((i12 | 0) == 11) {
   i7 = HEAP32[i2 + 16 >> 2] | 0;
   i8 = HEAP32[i7 + 120 >> 2] | 0;
   if ((HEAP32[(HEAP32[i7 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0) {
    if ((i8 & 1879048192) >>> 0 < 268435456 >>> 0) {
     i13 = 0;
     break;
    }
   }
   i13 = i8 >>> 1 & 67108863;
  }
 } while (0);
 if (i5) {
  i12 = 16;
 } else {
  if ((i6 | 0) == 3 | (i6 | 0) == 0) {
   i12 = 16;
  } else {
   i14 = 0;
  }
 }
 do {
  if ((i12 | 0) == 16) {
   i6 = HEAP32[i2 + 16 >> 2] | 0;
   i8 = HEAP32[i6 + 128 >> 2] | 0;
   if ((HEAP32[(HEAP32[i6 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0) {
    if ((i8 & 1879048192) >>> 0 < 268435456 >>> 0) {
     i14 = 0;
     break;
    }
   }
   i14 = i8 >>> 1 & 67108863;
  }
 } while (0);
 __ZNK7WebCore11RenderStyle24getRoundedInnerBorderForERKNS_10LayoutRectEiiiibb(i1, i2, i3, i13, i14, i10, i11, i4, i5);
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 1](i5);
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore10CursorList6appendERKNS_10CursorDataE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = i1 + 4 | 0;
 i4 = i1 + 12 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) != (HEAP32[i1 + 8 >> 2] | 0)) {
  i1 = HEAP32[i3 >> 2] | 0;
  i6 = HEAP32[i2 >> 2] | 0;
  HEAP32[i1 + (i5 * 12 & -1) >> 2] = i6;
  if ((i6 | 0) != 0) {
   i7 = i6 + 4 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
  }
  i7 = i2 + 4 | 0;
  i6 = i1 + (i5 * 12 & -1) + 4 | 0;
  i1 = HEAP32[i7 + 4 >> 2] | 0;
  HEAP32[i6 >> 2] = HEAP32[i7 >> 2];
  HEAP32[i6 + 4 >> 2] = i1;
  i8 = HEAP32[i4 >> 2] | 0;
  i9 = i8 + 1 | 0;
  HEAP32[i4 >> 2] = i9;
  return;
 }
 i1 = i5 + 1 | 0;
 i6 = i3 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if (i7 >>> 0 > i2 >>> 0) {
   i10 = 7;
  } else {
   if ((i7 + (i5 * 12 & -1) | 0) >>> 0 <= i2 >>> 0) {
    i10 = 7;
    break;
   }
   i11 = i1 + (i5 >>> 2) | 0;
   i12 = i11 >>> 0 > 16 >>> 0 ? i11 : 16;
   __ZN3WTF6VectorIN7WebCore10CursorDataELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i3, i12 >>> 0 > i1 >>> 0 ? i12 : i1);
   i12 = HEAP32[i6 >> 2] | 0;
   i13 = i12 + (((i2 - i7 | 0) / 12 & -1) * 12 & -1) | 0;
   i14 = i12;
  }
 } while (0);
 if ((i10 | 0) == 7) {
  i10 = i1 + (i5 >>> 2) | 0;
  i5 = i10 >>> 0 > 16 >>> 0 ? i10 : 16;
  __ZN3WTF6VectorIN7WebCore10CursorDataELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i3, i5 >>> 0 > i1 >>> 0 ? i5 : i1);
  i13 = i2;
  i14 = HEAP32[i6 >> 2] | 0;
 }
 i6 = HEAP32[i4 >> 2] | 0;
 i2 = HEAP32[i13 >> 2] | 0;
 HEAP32[i14 + (i6 * 12 & -1) >> 2] = i2;
 if ((i2 | 0) != 0) {
  i1 = i2 + 4 | 0;
  HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 }
 i1 = i13 + 4 | 0;
 i13 = i14 + (i6 * 12 & -1) + 4 | 0;
 i6 = HEAP32[i1 + 4 >> 2] | 0;
 HEAP32[i13 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i13 + 4 >> 2] = i6;
 i8 = HEAP32[i4 >> 2] | 0;
 i9 = i8 + 1 | 0;
 HEAP32[i4 >> 2] = i9;
 return;
}
function __ZN7WebCore11RenderStyle13setCursorListEN3WTF10PassRefPtrINS_10CursorListEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 24 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i6 = i1;
 } else {
  __ZNK7WebCore22StyleRareInheritedData4copyEv(i4, i1);
  i1 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  i7 = i4 | 0;
  i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i8 | 0) == 0) {
   __ZN7WebCore22StyleRareInheritedDataD1Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i7 >> 2] = i8;
  }
  HEAP32[i5 >> 2] = i1;
  i6 = i1;
 }
 i1 = i2 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 i1 = i6 + 68 | 0;
 i6 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = i2;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i2 = i6 | 0;
 i1 = i6 | 0;
 i5 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i1 >> 2] = i5;
  STACKTOP = i3;
  return;
 }
 i5 = i2 + 12 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 i8 = i2 + 4 | 0;
 i7 = i8;
 if ((i1 | 0) != 0) {
  i4 = HEAP32[i7 >> 2] | 0;
  i9 = i4 + (i1 * 12 & -1) | 0;
  i1 = i4;
  while (1) {
   i4 = HEAP32[i1 >> 2] | 0;
   do {
    if ((i4 | 0) != 0) {
     i10 = i4 + 4 | 0;
     i11 = i10 | 0;
     i12 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
     if ((i12 | 0) != 0) {
      HEAP32[i11 >> 2] = i12;
      break;
     }
     i12 = i10 - 4 | 0;
     if ((i12 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 1](i12);
    }
   } while (0);
   i1 = i1 + 12 | 0;
   if ((i1 | 0) == (i9 | 0)) {
    break;
   }
  }
  HEAP32[i5 >> 2] = 0;
 }
 i5 = HEAP32[i7 >> 2] | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i8 >> 2] = 0;
  HEAP32[i2 + 8 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i5);
 }
 __ZN3WTF8fastFreeEPv(i6);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore11RenderStyle26changeRequiresLayerRepaintEPKS0_Rj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 do {
  if ((HEAP32[i1 + 48 >> 2] & 29360128 | 0) != 0) {
   i4 = HEAP32[i1 + 4 >> 2] | 0;
   i5 = HEAP32[i2 + 4 >> 2] | 0;
   if ((HEAP32[i4 + 60 >> 2] | 0) != (HEAP32[i5 + 60 >> 2] | 0)) {
    i6 = 1;
    return i6 | 0;
   }
   if ((HEAP32[i4 + 64 >> 2] & 1 | 0) != 0 ^ (HEAP32[i5 + 64 >> 2] & 1 | 0) != 0) {
    i6 = 1;
    return i6 | 0;
   }
   i5 = i1 + 8 | 0;
   i4 = i2 + 8 | 0;
   if (!(__ZNK7WebCore9LengthBoxeqERKS0_((HEAP32[i5 >> 2] | 0) + 4 | 0, (HEAP32[i4 >> 2] | 0) + 4 | 0) | 0)) {
    i6 = 1;
    return i6 | 0;
   }
   if (((HEAP8[(HEAP32[i4 >> 2] | 0) + 36 | 0] ^ HEAP8[(HEAP32[i5 >> 2] | 0) + 36 | 0]) & 1) == 0) {
    break;
   } else {
    i6 = 1;
   }
   return i6 | 0;
  }
 } while (0);
 i5 = i1 + 20 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 i4 = i2 + 20 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i2 + 296 >> 2] ^ HEAP32[i1 + 296 >> 2]) & 4063232 | 0) != 0) {
  i6 = 1;
  return i6 | 0;
 }
 if (+HEAPF32[i1 + 4 >> 2] != +HEAPF32[i2 + 4 >> 2]) {
  HEAP32[i3 >> 2] = HEAP32[i3 >> 2] | 2;
  i7 = HEAP32[i5 >> 2] | 0;
  i8 = HEAP32[i4 >> 2] | 0;
 } else {
  i7 = i1;
  i8 = i2;
 }
 i2 = HEAP32[i7 + 76 >> 2] | 0;
 i7 = HEAP32[i8 + 76 >> 2] | 0;
 do {
  if ((i2 | 0) != (i7 | 0)) {
   if (__ZNK7WebCore15StyleFilterDataeqERKS0_(i2, i7) | 0) {
    break;
   }
   HEAP32[i3 >> 2] = HEAP32[i3 >> 2] | 4;
  }
 } while (0);
 if (!(__ZNK7WebCore9FillLayereqERKS0_((HEAP32[i5 >> 2] | 0) + 116 | 0, (HEAP32[i4 >> 2] | 0) + 116 | 0) | 0)) {
  i6 = 1;
  return i6 | 0;
 }
 i3 = HEAP32[(HEAP32[i5 >> 2] | 0) + 164 >> 2] | 0;
 i5 = HEAP32[(HEAP32[i4 >> 2] | 0) + 164 >> 2] | 0;
 if ((i3 | 0) == (i5 | 0)) {
  i6 = 0;
  return i6 | 0;
 }
 i6 = (__ZNK7WebCore18NinePieceImageDataeqERKS0_(i3, i5) | 0) ^ 1;
 return i6 | 0;
}
function __ZNK7WebCore11RenderStyle17borderBeforeWidthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = (HEAP32[i1 + 44 >> 2] | 0) >>> 13 & 3;
 if ((i2 | 0) == 1) {
  i3 = HEAP32[i1 + 16 >> 2] | 0;
  i4 = HEAP32[i3 + 112 >> 2] | 0;
  do {
   if ((HEAP32[(HEAP32[i3 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0) {
    if ((i4 & 1879048192) >>> 0 < 268435456 >>> 0) {
     i5 = 0;
    } else {
     break;
    }
    return i5 | 0;
   }
  } while (0);
  i5 = i4 >>> 1 & 65535;
  return i5 | 0;
 } else if ((i2 | 0) == 2) {
  i4 = HEAP32[i1 + 16 >> 2] | 0;
  i3 = HEAP32[i4 + 104 >> 2] | 0;
  do {
   if ((HEAP32[(HEAP32[i4 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0) {
    if ((i3 & 1879048192) >>> 0 < 268435456 >>> 0) {
     i5 = 0;
    } else {
     break;
    }
    return i5 | 0;
   }
  } while (0);
  i5 = i3 >>> 1 & 65535;
  return i5 | 0;
 } else if ((i2 | 0) == 3) {
  i3 = HEAP32[i1 + 16 >> 2] | 0;
  i4 = HEAP32[i3 + 128 >> 2] | 0;
  do {
   if ((HEAP32[(HEAP32[i3 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0) {
    if ((i4 & 1879048192) >>> 0 < 268435456 >>> 0) {
     i5 = 0;
    } else {
     break;
    }
    return i5 | 0;
   }
  } while (0);
  i5 = i4 >>> 1 & 65535;
  return i5 | 0;
 } else if ((i2 | 0) == 0) {
  i2 = HEAP32[i1 + 16 >> 2] | 0;
  i4 = HEAP32[i2 + 120 >> 2] | 0;
  do {
   if ((HEAP32[(HEAP32[i2 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0) {
    if ((i4 & 1879048192) >>> 0 < 268435456 >>> 0) {
     i5 = 0;
    } else {
     break;
    }
    return i5 | 0;
   }
  } while (0);
  i5 = i4 >>> 1 & 65535;
  return i5 | 0;
 } else {
  i4 = HEAP32[i1 + 16 >> 2] | 0;
  i1 = HEAP32[i4 + 120 >> 2] | 0;
  do {
   if ((HEAP32[(HEAP32[i4 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0) {
    if ((i1 & 1879048192) >>> 0 < 268435456 >>> 0) {
     i5 = 0;
    } else {
     break;
    }
    return i5 | 0;
   }
  } while (0);
  i5 = i1 >>> 1 & 65535;
  return i5 | 0;
 }
 return 0;
}
function __ZNK7WebCore11RenderStyle16borderAfterWidthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = (HEAP32[i1 + 44 >> 2] | 0) >>> 13 & 3;
 if ((i2 | 0) == 3) {
  i3 = HEAP32[i1 + 16 >> 2] | 0;
  i4 = HEAP32[i3 + 120 >> 2] | 0;
  do {
   if ((HEAP32[(HEAP32[i3 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0) {
    if ((i4 & 1879048192) >>> 0 < 268435456 >>> 0) {
     i5 = 0;
    } else {
     break;
    }
    return i5 | 0;
   }
  } while (0);
  i5 = i4 >>> 1 & 65535;
  return i5 | 0;
 } else if ((i2 | 0) == 1) {
  i4 = HEAP32[i1 + 16 >> 2] | 0;
  i3 = HEAP32[i4 + 104 >> 2] | 0;
  do {
   if ((HEAP32[(HEAP32[i4 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0) {
    if ((i3 & 1879048192) >>> 0 < 268435456 >>> 0) {
     i5 = 0;
    } else {
     break;
    }
    return i5 | 0;
   }
  } while (0);
  i5 = i3 >>> 1 & 65535;
  return i5 | 0;
 } else if ((i2 | 0) == 2) {
  i3 = HEAP32[i1 + 16 >> 2] | 0;
  i4 = HEAP32[i3 + 112 >> 2] | 0;
  do {
   if ((HEAP32[(HEAP32[i3 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0) {
    if ((i4 & 1879048192) >>> 0 < 268435456 >>> 0) {
     i5 = 0;
    } else {
     break;
    }
    return i5 | 0;
   }
  } while (0);
  i5 = i4 >>> 1 & 65535;
  return i5 | 0;
 } else if ((i2 | 0) == 0) {
  i2 = HEAP32[i1 + 16 >> 2] | 0;
  i4 = HEAP32[i2 + 128 >> 2] | 0;
  do {
   if ((HEAP32[(HEAP32[i2 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0) {
    if ((i4 & 1879048192) >>> 0 < 268435456 >>> 0) {
     i5 = 0;
    } else {
     break;
    }
    return i5 | 0;
   }
  } while (0);
  i5 = i4 >>> 1 & 65535;
  return i5 | 0;
 } else {
  i4 = HEAP32[i1 + 16 >> 2] | 0;
  i1 = HEAP32[i4 + 128 >> 2] | 0;
  do {
   if ((HEAP32[(HEAP32[i4 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0) {
    if ((i1 & 1879048192) >>> 0 < 268435456 >>> 0) {
     i5 = 0;
    } else {
     break;
    }
    return i5 | 0;
   }
  } while (0);
  i5 = i1 >>> 1 & 65535;
  return i5 | 0;
 }
 return 0;
}
function __ZN7WebCore11RenderStyle11setFontSizeEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var i3 = 0, i4 = 0, i5 = 0, d6 = +0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, d11 = +0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 24 | 0;
 if (((HEAPF32[tempDoublePtr >> 2] = d2, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 > 2139095039 >>> 0 | d2 < +0) {
  d6 = +0;
 } else {
  d6 = d2 < +1e6 ? d2 : +1e6;
 }
 i7 = i1 + 28 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = HEAP32[i8 + 40 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = 0;
 } else {
  i10 = HEAP32[i9 + 48 >> 2] | 0;
 }
 __ZN7WebCore15FontDescriptionC2ERKS0_(i4, i8 + 16 | 0);
 do {
  if (d6 < 3.4028234663852886e+38) {
   i8 = d6 > -3.4028234663852886e+38;
   HEAPF32[i4 + 8 >> 2] = i8 ? d6 : -3.4028234663852886e+38;
   if (!i8) {
    d11 = -3.4028234663852886e+38;
    break;
   }
   d11 = d6;
  } else {
   HEAPF32[i4 + 8 >> 2] = 3.4028234663852886e+38;
   d11 = 3.4028234663852886e+38;
  }
 } while (0);
 HEAPF32[i4 + 12 >> 2] = d11;
 __ZN7WebCore11RenderStyle18setFontDescriptionERKNS_15FontDescriptionE(i1, i4) | 0;
 i1 = (HEAP32[i7 >> 2] | 0) + 16 | 0;
 i7 = i5 | 0;
 HEAP32[i7 >> 2] = i10;
 if ((i10 | 0) != 0) {
  i8 = i10 + 4 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 }
 __ZNK7WebCore4Font6updateEN3WTF10PassRefPtrINS_12FontSelectorEEE(i1, i5);
 i5 = HEAP32[i7 >> 2] | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore15FontDescriptionD2Ev(i4);
  STACKTOP = i3;
  return;
 }
 i7 = i5 + 4 | 0;
 i5 = i7 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i5 >> 2] = i1;
  __ZN7WebCore15FontDescriptionD2Ev(i4);
  STACKTOP = i3;
  return;
 }
 i1 = i7 - 4 | 0;
 if ((i1 | 0) == 0) {
  __ZN7WebCore15FontDescriptionD2Ev(i4);
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 1](i1);
 __ZN7WebCore15FontDescriptionD2Ev(i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderStyle10setContentENSt3__110unique_ptrINS_14CounterContentENS1_14default_deleteIS3_EEEEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i2 | 0;
 if ((HEAP32[i7 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 if (i3) {
  i3 = __ZN3WTF10fastMallocEj(16) | 0;
  i2 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = 0;
  HEAP32[i3 + 4 >> 2] = 0;
  HEAP32[i3 + 8 >> 2] = 0;
  HEAP32[i3 >> 2] = __ZTVN7WebCore18CounterContentDataE + 8;
  HEAP32[i3 + 12 >> 2] = i2;
  i2 = i6 | 0;
  HEAP32[i2 >> 2] = i3;
  __ZN7WebCore11RenderStyle13appendContentENSt3__110unique_ptrINS_11ContentDataENS1_14default_deleteIS3_EEEE(i1, i6);
  i6 = HEAP32[i2 >> 2] | 0;
  HEAP32[i2 >> 2] = 0;
  if ((i6 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 1](i6);
  STACKTOP = i4;
  return;
 }
 i6 = i1 + 20 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i8 = i1;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i5, i1);
  i1 = HEAP32[i5 >> 2] | 0;
  i5 = HEAP32[i6 >> 2] | 0;
  i2 = i5 | 0;
  i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
  if ((i3 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  } else {
   HEAP32[i2 >> 2] = i3;
  }
  HEAP32[i6 >> 2] = i1;
  i8 = i1;
 }
 i1 = __ZN3WTF10fastMallocEj(16) | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 HEAP32[i1 >> 2] = __ZTVN7WebCore18CounterContentDataE + 8;
 HEAP32[i1 + 12 >> 2] = i6;
 i6 = i8 + 88 | 0;
 i8 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i1;
 if ((i8 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 1](i8);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore11RenderStyle4diffEPKS0_Rj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 HEAP32[i3 >> 2] = 0;
 i4 = i1 + 36 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i2 + 36 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i5 | 0) == (i7 | 0)) {
   i8 = 0;
  } else {
   if (__ZNK7WebCore14SVGRenderStyleeqERKS0_(i5, i7) | 0) {
    i8 = 0;
    break;
   }
   i9 = __ZNK7WebCore14SVGRenderStyle4diffEPKS0_(HEAP32[i4 >> 2] | 0, HEAP32[i6 >> 2] | 0) | 0;
   if ((i9 | 0) == 8) {
    i10 = 8;
   } else {
    i8 = i9;
    break;
   }
   return i10 | 0;
  }
 } while (0);
 if (__ZNK7WebCore11RenderStyle20changeRequiresLayoutEPKS0_Rj(i1, i2, i3) | 0) {
  i10 = 8;
  return i10 | 0;
 }
 if ((i8 | 0) != 0) {
  i10 = i8;
  return i10 | 0;
 }
 i8 = i1 + 48 | 0;
 do {
  if ((HEAP32[i8 >> 2] & 29360128 | 0) != 0) {
   i6 = i1 + 16 | 0;
   i4 = i2 + 16 | 0;
   if (__ZNK7WebCore9LengthBoxeqERKS0_((HEAP32[i6 >> 2] | 0) + 4 | 0, (HEAP32[i4 >> 2] | 0) + 4 | 0) | 0) {
    break;
   }
   if ((HEAP32[i8 >> 2] & 29360128 | 0) != 8388608) {
    break;
   }
   if (__ZN7WebCoreL28positionChangeIsMovementOnlyERKNS_9LengthBoxES2_RKNS_6LengthE((HEAP32[i6 >> 2] | 0) + 4 | 0, (HEAP32[i4 >> 2] | 0) + 4 | 0, (HEAP32[i1 + 4 >> 2] | 0) + 4 | 0) | 0) {
    i10 = 5;
   } else {
    break;
   }
   return i10 | 0;
  }
 } while (0);
 if (__ZNK7WebCore11RenderStyle26changeRequiresLayerRepaintEPKS0_Rj(i1, i2, i3) | 0) {
  i10 = 4;
  return i10 | 0;
 }
 if (__ZNK7WebCore11RenderStyle21changeRequiresRepaintEPKS0_Rj(i1, i2, 0) | 0) {
  i10 = 2;
  return i10 | 0;
 }
 if (__ZNK7WebCore11RenderStyle30changeRequiresRecompositeLayerEPKS0_Rj(i1, i2, 0) | 0) {
  i10 = 1;
  return i10 | 0;
 }
 i3 = __ZNK7WebCore11RenderStyle44changeRequiresRepaintIfTextOrBorderOrOutlineEPKS0_Rj(i1, i2, 0) | 0;
 i10 = i3 ? 3 : 0;
 return i10 | 0;
}
function __ZN7WebCore15FontDescriptionC2ERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i4 = i3 - 8 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i1 + 4 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i3 = i4 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 HEAPF32[i1 + 8 >> 2] = +HEAPF32[i2 + 8 >> 2];
 HEAPF32[i1 + 12 >> 2] = +HEAPF32[i2 + 12 >> 2];
 i3 = i2 + 16 | 0;
 i4 = i1 + 16 | 0;
 i5 = HEAP32[i4 >> 2] & -2 | HEAP32[i3 >> 2] & 1;
 HEAP32[i4 >> 2] = i5;
 i6 = i5 & -3 | HEAP32[i3 >> 2] & 2;
 HEAP32[i4 >> 2] = i6;
 i5 = i6 & -13 | HEAP32[i3 >> 2] & 12;
 HEAP32[i4 >> 2] = i5;
 i6 = i5 & -17 | HEAP32[i3 >> 2] & 16;
 HEAP32[i4 >> 2] = i6;
 i5 = i6 & -33 | HEAP32[i3 >> 2] & 32;
 HEAP32[i4 >> 2] = i5;
 i6 = i5 & -65 | HEAP32[i3 >> 2] & 64;
 HEAP32[i4 >> 2] = i6;
 i5 = i6 & -32641 | HEAP32[i3 >> 2] & 32640;
 HEAP32[i4 >> 2] = i5;
 i6 = i5 & -229377 | HEAP32[i3 >> 2] & 229376;
 HEAP32[i4 >> 2] = i6;
 i5 = i6 & -262145 | HEAP32[i3 >> 2] & 262144;
 HEAP32[i4 >> 2] = i5;
 i6 = i5 & -524289 | HEAP32[i3 >> 2] & 524288;
 HEAP32[i4 >> 2] = i6;
 i5 = i6 & -3145729 | HEAP32[i3 >> 2] & 3145728;
 HEAP32[i4 >> 2] = i5;
 i6 = i5 & -12582913 | HEAP32[i3 >> 2] & 12582912;
 HEAP32[i4 >> 2] = i6;
 i5 = i6 & -50331649 | HEAP32[i3 >> 2] & 50331648;
 HEAP32[i4 >> 2] = i5;
 i6 = i5 & -201326593 | HEAP32[i3 >> 2] & 201326592;
 HEAP32[i4 >> 2] = i6;
 HEAP32[i4 >> 2] = i6 & 268435455 | HEAP32[i3 >> 2] & -268435456;
 i3 = i2 + 20 | 0;
 i2 = i1 + 20 | 0;
 i1 = HEAP32[i2 >> 2] & -4 | HEAP32[i3 >> 2] & 3;
 HEAP32[i2 >> 2] = i1;
 i6 = i1 & -13 | HEAP32[i3 >> 2] & 12;
 HEAP32[i2 >> 2] = i6;
 i1 = i6 & -17 | HEAP32[i3 >> 2] & 16;
 HEAP32[i2 >> 2] = i1;
 HEAP32[i2 >> 2] = i1 & -4065 | HEAP32[i3 >> 2] & 4064;
 return;
}
function __ZN7WebCore11RenderStyle15clearCursorListEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 24 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 if ((HEAP32[i1 + 68 >> 2] | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i5 = i1;
 } else {
  __ZNK7WebCore22StyleRareInheritedData4copyEv(i3, i1);
  i1 = HEAP32[i3 >> 2] | 0;
  i3 = HEAP32[i4 >> 2] | 0;
  i6 = i3 | 0;
  i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
  if ((i7 | 0) == 0) {
   __ZN7WebCore22StyleRareInheritedDataD1Ev(i3);
   __ZN3WTF8fastFreeEPv(i3);
  } else {
   HEAP32[i6 >> 2] = i7;
  }
  HEAP32[i4 >> 2] = i1;
  i5 = i1;
 }
 i1 = i5 + 68 | 0;
 i5 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i1 = i5 | 0;
 i4 = i5 | 0;
 i7 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i7 | 0) != 0) {
  HEAP32[i4 >> 2] = i7;
  STACKTOP = i2;
  return;
 }
 i7 = i1 + 12 | 0;
 i4 = HEAP32[i7 >> 2] | 0;
 i6 = i1 + 4 | 0;
 i3 = i6;
 if ((i4 | 0) != 0) {
  i8 = HEAP32[i3 >> 2] | 0;
  i9 = i8 + (i4 * 12 & -1) | 0;
  i4 = i8;
  while (1) {
   i8 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i8 | 0) != 0) {
     i10 = i8 + 4 | 0;
     i11 = i10 | 0;
     i12 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
     if ((i12 | 0) != 0) {
      HEAP32[i11 >> 2] = i12;
      break;
     }
     i12 = i10 - 4 | 0;
     if ((i12 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 1](i12);
    }
   } while (0);
   i4 = i4 + 12 | 0;
   if ((i4 | 0) == (i9 | 0)) {
    break;
   }
  }
  HEAP32[i7 >> 2] = 0;
 }
 i7 = HEAP32[i3 >> 2] | 0;
 if ((i7 | 0) != 0) {
  HEAP32[i6 >> 2] = 0;
  HEAP32[i1 + 8 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i7);
 }
 __ZN3WTF8fastFreeEPv(i5);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore11RenderStyle16adjustAnimationsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 20 | 0;
 i1 = HEAP32[(HEAP32[i4 >> 2] | 0) + 108 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i5 = i1 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i7 = HEAP32[i1 >> 2] | 0;
   i8 = 0;
   L6 : while (1) {
    i9 = HEAP32[i7 + (i8 << 2) >> 2] | 0;
    i10 = HEAP8[i9 + 44 | 0] | 0;
    do {
     if (i10 << 24 >> 24 >= 0) {
      i11 = HEAP8[i9 + 45 | 0] | 0;
      if ((i11 & 31) != 0) {
       break;
      }
      if ((i10 & 64) != 0) {
       break;
      }
      if ((i11 & 96) == 0) {
       i12 = 8;
       break L6;
      }
     }
    } while (0);
    i10 = i8 + 1 | 0;
    if (i10 >>> 0 < i6 >>> 0) {
     i8 = i10;
    } else {
     i13 = i6;
     break;
    }
   }
   if ((i12 | 0) == 8) {
    __ZN3WTF6VectorINS_6RefPtrIN7WebCore9AnimationEEELj0ENS_15CrashOnOverflowEE6resizeEj(i1 | 0, i8);
    i13 = HEAP32[i5 >> 2] | 0;
   }
   if ((i13 | 0) == 0) {
    break;
   }
   __ZN7WebCore13AnimationList19fillUnsetPropertiesEv(i1);
   STACKTOP = i2;
   return;
  }
 } while (0);
 i1 = HEAP32[i4 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i14 = i1;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i3, i1);
  i1 = HEAP32[i3 >> 2] | 0;
  i3 = HEAP32[i4 >> 2] | 0;
  i13 = i3 | 0;
  i5 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
  if ((i5 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i3);
   __ZN3WTF8fastFreeEPv(i3);
  } else {
   HEAP32[i13 >> 2] = i5;
  }
  HEAP32[i4 >> 2] = i1;
  i14 = i1;
 }
 __ZN3WTF6OwnPtrIN7WebCore13AnimationListEE5clearEv(i14 + 108 | 0);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore11RenderStyle7setClipENS_6LengthES1_S1_S1_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6 | 0;
 i8 = i1 + 8 | 0;
 i1 = HEAP32[i8 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i9 = i1;
 } else {
  __ZNK7WebCore15StyleVisualData4copyEv(i7, i1);
  i1 = HEAP32[i7 >> 2] | 0;
  i7 = HEAP32[i8 >> 2] | 0;
  i10 = i7 | 0;
  i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
  if ((i11 | 0) == 0) {
   __ZN7WebCore15StyleVisualDataD1Ev(i7);
   __ZN3WTF8fastFreeEPv(i7);
  } else {
   HEAP32[i10 >> 2] = i11;
  }
  HEAP32[i8 >> 2] = i1;
  i9 = i1;
 }
 i1 = i9 + 20 | 0;
 i8 = i2;
 i2 = i1;
 i11 = HEAP32[i8 >> 2] | 0;
 i10 = HEAP32[i8 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = i11;
 HEAP32[i2 + 4 >> 2] = i10;
 if ((i11 & 0 | 0) == 0 & (i10 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i1);
 }
 i1 = i9 + 12 | 0;
 i10 = i3;
 i3 = i1;
 i11 = HEAP32[i10 >> 2] | 0;
 i2 = HEAP32[i10 + 4 >> 2] | 0;
 HEAP32[i3 >> 2] = i11;
 HEAP32[i3 + 4 >> 2] = i2;
 if ((i11 & 0 | 0) == 0 & (i2 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i1);
 }
 i1 = i9 + 28 | 0;
 i2 = i4;
 i4 = i1;
 i11 = HEAP32[i2 >> 2] | 0;
 i3 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i11;
 HEAP32[i4 + 4 >> 2] = i3;
 if ((i11 & 0 | 0) == 0 & (i3 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i1);
 }
 i1 = i9 + 4 | 0;
 i9 = i5;
 i5 = i1;
 i3 = HEAP32[i9 >> 2] | 0;
 i11 = HEAP32[i9 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = i3;
 HEAP32[i5 + 4 >> 2] = i11;
 if (!((i3 & 0 | 0) == 0 & (i11 & 65280 | 0) == 2560)) {
  STACKTOP = i6;
  return;
 }
 __ZNK7WebCore6Length22incrementCalculatedRefEv(i1);
 STACKTOP = i6;
 return;
}
function __ZNK7WebCore10BorderDataeqERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = HEAP32[i2 + 4 >> 2] ^ HEAP32[i1 + 4 >> 2];
 if ((i3 & 2147483646 | 0) != 0) {
  i4 = 0;
  return i4 | 0;
 }
 if ((HEAP32[i1 >> 2] | 0) != (HEAP32[i2 >> 2] | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 if ((i3 & 1 | 0) != 0) {
  i4 = 0;
  return i4 | 0;
 }
 i3 = HEAP32[i2 + 12 >> 2] ^ HEAP32[i1 + 12 >> 2];
 if ((i3 & 2147483646 | 0) != 0) {
  i4 = 0;
  return i4 | 0;
 }
 if ((HEAP32[i1 + 8 >> 2] | 0) != (HEAP32[i2 + 8 >> 2] | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 if ((i3 & 1 | 0) != 0) {
  i4 = 0;
  return i4 | 0;
 }
 i3 = HEAP32[i2 + 20 >> 2] ^ HEAP32[i1 + 20 >> 2];
 if ((i3 & 2147483646 | 0) != 0) {
  i4 = 0;
  return i4 | 0;
 }
 if ((HEAP32[i1 + 16 >> 2] | 0) != (HEAP32[i2 + 16 >> 2] | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 if ((i3 & 1 | 0) != 0) {
  i4 = 0;
  return i4 | 0;
 }
 i3 = HEAP32[i2 + 28 >> 2] ^ HEAP32[i1 + 28 >> 2];
 if ((i3 & 2147483646 | 0) != 0) {
  i4 = 0;
  return i4 | 0;
 }
 if ((HEAP32[i1 + 24 >> 2] | 0) != (HEAP32[i2 + 24 >> 2] | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 if ((i3 & 1 | 0) != 0) {
  i4 = 0;
  return i4 | 0;
 }
 i3 = HEAP32[i1 + 32 >> 2] | 0;
 i5 = HEAP32[i2 + 32 >> 2] | 0;
 do {
  if ((i3 | 0) != (i5 | 0)) {
   if (__ZNK7WebCore18NinePieceImageDataeqERKS0_(i3, i5) | 0) {
    break;
   } else {
    i4 = 0;
   }
   return i4 | 0;
  }
 } while (0);
 if (!(__ZNK7WebCore10LengthSizeeqERKS0_(i1 + 36 | 0, i2 + 36 | 0) | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 if (!(__ZNK7WebCore10LengthSizeeqERKS0_(i1 + 52 | 0, i2 + 52 | 0) | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 if (!(__ZNK7WebCore10LengthSizeeqERKS0_(i1 + 68 | 0, i2 + 68 | 0) | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = __ZNK7WebCore10LengthSizeeqERKS0_(i1 + 84 | 0, i2 + 84 | 0) | 0;
 return i4 | 0;
}
function __ZN7WebCore11RenderStyle20setColumnProgressionENS_17ColumnProgressionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i1 + 20 | 0;
 i1 = HEAP32[i7 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i8 = i1;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i6, i1);
  i1 = HEAP32[i6 >> 2] | 0;
  i6 = HEAP32[i7 >> 2] | 0;
  i9 = i6 | 0;
  i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
  if ((i10 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i6);
   __ZN3WTF8fastFreeEPv(i6);
  } else {
   HEAP32[i9 >> 2] = i10;
  }
  HEAP32[i7 >> 2] = i1;
  i8 = i1;
 }
 if (((HEAP32[(HEAP32[i8 + 68 >> 2] | 0) + 32 >> 2] | 0) >>> 13 & 3 | 0) == (i2 | 0)) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i8 >> 2] | 0) == 1) {
  i11 = i8;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i5, i8);
  i8 = HEAP32[i5 >> 2] | 0;
  i5 = HEAP32[i7 >> 2] | 0;
  i1 = i5 | 0;
  i10 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
  if ((i10 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  } else {
   HEAP32[i1 >> 2] = i10;
  }
  HEAP32[i7 >> 2] = i8;
  i11 = i8;
 }
 i8 = i11 + 68 | 0;
 i11 = HEAP32[i8 >> 2] | 0;
 if ((HEAP32[i11 >> 2] | 0) == 1) {
  i12 = i11;
 } else {
  __ZNK7WebCore17StyleMultiColData4copyEv(i4, i11);
  i11 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i8 >> 2] | 0;
  i7 = i4 | 0;
  i10 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i10 | 0) == 0) {
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i7 >> 2] = i10;
  }
  HEAP32[i8 >> 2] = i11;
  i12 = i11;
 }
 i11 = i12 + 32 | 0;
 HEAP32[i11 >> 2] = HEAP32[i11 >> 2] & -24577 | i2 << 13 & 24576;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderStyle13setColumnAxisENS_10ColumnAxisE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i1 + 20 | 0;
 i1 = HEAP32[i7 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i8 = i1;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i6, i1);
  i1 = HEAP32[i6 >> 2] | 0;
  i6 = HEAP32[i7 >> 2] | 0;
  i9 = i6 | 0;
  i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
  if ((i10 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i6);
   __ZN3WTF8fastFreeEPv(i6);
  } else {
   HEAP32[i9 >> 2] = i10;
  }
  HEAP32[i7 >> 2] = i1;
  i8 = i1;
 }
 if (((HEAP32[(HEAP32[i8 + 68 >> 2] | 0) + 32 >> 2] | 0) >>> 11 & 3 | 0) == (i2 | 0)) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i8 >> 2] | 0) == 1) {
  i11 = i8;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i5, i8);
  i8 = HEAP32[i5 >> 2] | 0;
  i5 = HEAP32[i7 >> 2] | 0;
  i1 = i5 | 0;
  i10 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
  if ((i10 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  } else {
   HEAP32[i1 >> 2] = i10;
  }
  HEAP32[i7 >> 2] = i8;
  i11 = i8;
 }
 i8 = i11 + 68 | 0;
 i11 = HEAP32[i8 >> 2] | 0;
 if ((HEAP32[i11 >> 2] | 0) == 1) {
  i12 = i11;
 } else {
  __ZNK7WebCore17StyleMultiColData4copyEv(i4, i11);
  i11 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i8 >> 2] | 0;
  i7 = i4 | 0;
  i10 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i10 | 0) == 0) {
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i7 >> 2] = i10;
  }
  HEAP32[i8 >> 2] = i11;
  i12 = i11;
 }
 i11 = i12 + 32 | 0;
 HEAP32[i11 >> 2] = HEAP32[i11 >> 2] & -6145 | i2 << 11 & 6144;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore7DataRefINS_18StyleTransformDataEE6accessEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i5 = i1;
  STACKTOP = i2;
  return i5 | 0;
 }
 __ZNK7WebCore18StyleTransformData4copyEv(i3, i1);
 i1 = HEAP32[i3 >> 2] | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 i6 = i3 | 0;
 i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i7 | 0) == 0) {
  if ((HEAP8[i3 + 29 | 0] | 0) == 10) {
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i3 + 24 | 0);
  }
  if ((HEAP8[i3 + 21 | 0] | 0) == 10) {
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i3 + 16 | 0);
  }
  i8 = i3 + 12 | 0;
  i9 = HEAP32[i8 >> 2] | 0;
  i10 = i3 + 4 | 0;
  if ((i9 | 0) != 0) {
   i11 = HEAP32[i10 >> 2] | 0;
   i12 = i11 + (i9 << 2) | 0;
   i9 = i11;
   while (1) {
    i11 = HEAP32[i9 >> 2] | 0;
    do {
     if ((i11 | 0) != 0) {
      i13 = i11 + 4 | 0;
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
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 1](i15);
     }
    } while (0);
    i9 = i9 + 4 | 0;
    if ((i9 | 0) == (i12 | 0)) {
     break;
    }
   }
   HEAP32[i8 >> 2] = 0;
  }
  i8 = HEAP32[i10 >> 2] | 0;
  if ((i8 | 0) != 0) {
   HEAP32[i10 >> 2] = 0;
   HEAP32[i3 + 8 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i8);
  }
  __ZN3WTF8fastFreeEPv(i3);
 } else {
  HEAP32[i6 >> 2] = i7;
 }
 HEAP32[i4 >> 2] = i1;
 i5 = i1;
 STACKTOP = i2;
 return i5 | 0;
}
function __ZN7WebCore11RenderStyle23accessCounterDirectivesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 20 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i5 = i1;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i3, i1);
  i1 = HEAP32[i3 >> 2] | 0;
  i3 = HEAP32[i4 >> 2] | 0;
  i6 = i3 | 0;
  i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
  if ((i7 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i3);
   __ZN3WTF8fastFreeEPv(i3);
  } else {
   HEAP32[i6 >> 2] = i7;
  }
  HEAP32[i4 >> 2] = i1;
  i5 = i1;
 }
 i1 = i5 + 92 | 0;
 i5 = HEAP32[i1 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i8 = i5;
  STACKTOP = i2;
  return i8 | 0;
 }
 i5 = __ZN3WTF10fastMallocEj(20) | 0;
 i4 = i5;
 _memset(i5 | 0, 0, 20) | 0;
 i5 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = i4;
 if ((i5 | 0) == 0) {
  i8 = i4;
  STACKTOP = i2;
  return i8 | 0;
 }
 i4 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i7 = HEAP32[i5 + 4 >> 2] | 0;
  if ((i7 | 0) > 0) {
   i6 = 0;
   while (1) {
    i3 = HEAP32[i4 + (i6 << 4) >> 2] | 0;
    i9 = i3;
    do {
     if (!((i9 | 0) == (-1 | 0) | (i9 | 0) == 0)) {
      i10 = i3 | 0;
      i11 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
      if ((i11 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i3);
       break;
      } else {
       HEAP32[i10 >> 2] = i11;
       break;
      }
     }
    } while (0);
    i6 = i6 + 1 | 0;
    if ((i6 | 0) >= (i7 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i4);
 }
 __ZN3WTF8fastFreeEPv(i5);
 i8 = HEAP32[i1 >> 2] | 0;
 STACKTOP = i2;
 return i8 | 0;
}
function __ZNK7WebCore11RenderStyle44changeRequiresRepaintIfTextOrBorderOrOutlineEPKS0_Rj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i3 = HEAP32[i1 + 28 >> 2] | 0;
 i4 = HEAP32[i2 + 28 >> 2] | 0;
 if ((HEAP32[i3 + 56 >> 2] | 0) != (HEAP32[i4 + 56 >> 2] | 0)) {
  return 1;
 }
 if ((HEAP8[i3 + 60 | 0] & 1) != 0 ^ (HEAP8[i4 + 60 | 0] & 1) != 0) {
  return 1;
 }
 if (((HEAP32[i2 + 40 >> 2] ^ HEAP32[i1 + 40 >> 2]) & 7864320 | 0) != 0) {
  return 1;
 }
 if (((HEAP32[(HEAP32[i2 + 8 >> 2] | 0) + 36 >> 2] ^ HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2]) & 30 | 0) != 0) {
  return 1;
 }
 i4 = HEAP32[i1 + 20 >> 2] | 0;
 i3 = HEAP32[i2 + 20 >> 2] | 0;
 if (((HEAP32[i3 + 296 >> 2] ^ HEAP32[i4 + 296 >> 2]) & 1792 | 0) != 0) {
  return 1;
 }
 if ((HEAP32[i4 + 216 >> 2] | 0) != (HEAP32[i3 + 216 >> 2] | 0)) {
  return 1;
 }
 if ((HEAP8[i4 + 220 | 0] & 1) != 0 ^ (HEAP8[i3 + 220 | 0] & 1) != 0) {
  return 1;
 }
 i3 = HEAP32[i1 + 24 >> 2] | 0;
 i1 = HEAP32[i2 + 24 >> 2] | 0;
 if (((HEAP32[i1 + 92 >> 2] ^ HEAP32[i3 + 92 >> 2]) & 126976 | 0) != 0) {
  return 1;
 }
 if ((HEAP32[i3 + 20 >> 2] | 0) != (HEAP32[i1 + 20 >> 2] | 0)) {
  return 1;
 }
 if ((HEAP8[i3 + 24 | 0] & 1) != 0 ^ (HEAP8[i1 + 24 | 0] & 1) != 0) {
  return 1;
 }
 if ((HEAP32[i3 + 8 >> 2] | 0) != (HEAP32[i1 + 8 >> 2] | 0)) {
  return 1;
 }
 if ((HEAP8[i3 + 12 | 0] & 1) != 0 ^ (HEAP8[i1 + 12 | 0] & 1) != 0) {
  return 1;
 }
 if ((HEAP32[i3 + 28 >> 2] | 0) != (HEAP32[i1 + 28 >> 2] | 0)) {
  return 1;
 }
 if ((HEAP8[i3 + 32 | 0] & 1) != 0 ^ (HEAP8[i1 + 32 | 0] & 1) != 0) {
  return 1;
 } else {
  return ((HEAP32[i1 + 88 >> 2] ^ HEAP32[i3 + 88 >> 2]) & 8388608 | 0) != 0 | 0;
 }
 return 0;
}
function __ZN7WebCore11RenderStyle20setBorderImageSourceEN3WTF10PassRefPtrINS_10StyleImageEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 + 16 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 i7 = i2 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 if ((HEAP32[(HEAP32[i1 + 132 >> 2] | 0) + 8 >> 2] | 0) == (i2 | 0)) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i8 = i1;
  i9 = i2;
 } else {
  __ZNK7WebCore17StyleSurroundData4copyEv(i4, i1);
  i1 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i6 >> 2] | 0;
  i2 = i4 | 0;
  i10 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
  if ((i10 | 0) == 0) {
   __ZN7WebCore17StyleSurroundDataD2Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i2 >> 2] = i10;
  }
  HEAP32[i6 >> 2] = i1;
  i8 = i1;
  i9 = HEAP32[i7 >> 2] | 0;
 }
 HEAP32[i7 >> 2] = 0;
 i7 = i8 + 132 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 if ((HEAP32[i8 >> 2] | 0) == 1) {
  i11 = i8;
 } else {
  __ZNK7WebCore18NinePieceImageData4copyEv(i5, i8);
  i8 = HEAP32[i5 >> 2] | 0;
  __ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv(HEAP32[i7 >> 2] | 0);
  HEAP32[i7 >> 2] = i8;
  i11 = i8;
 }
 i8 = i11 + 8 | 0;
 i11 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = i9;
 if ((i11 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i9 = i11 + 4 | 0;
 i11 = i9 | 0;
 i8 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
 if ((i8 | 0) != 0) {
  HEAP32[i11 >> 2] = i8;
  STACKTOP = i3;
  return;
 }
 i8 = i9 - 4 | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 1](i8);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderStyle20addCachedPseudoStyleEN3WTF10PassRefPtrIS0_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i2 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i6 = 0;
  STACKTOP = i3;
  return i6 | 0;
 }
 i7 = i1 + 32 | 0;
 i1 = i7 | 0;
 i8 = HEAP32[i1 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i9 = __ZN3WTF10fastMallocEj(28) | 0;
  HEAP32[i9 >> 2] = i9 + 12;
  HEAP32[i9 + 4 >> 2] = 4;
  HEAP32[i9 + 8 >> 2] = 0;
  HEAP32[i4 >> 2] = i9;
  __ZN3WTF6OwnPtrINS_6VectorINS_6RefPtrIN7WebCore11RenderStyleEEELj4ENS_15CrashOnOverflowEEEEaSERKNS_10PassOwnPtrIS7_EE(i7, i4) | 0;
  __ZN3WTF10PassOwnPtrINS_6VectorINS_6RefPtrIN7WebCore11RenderStyleEEELj4ENS_15CrashOnOverflowEEEED2Ev(i4);
  i10 = HEAP32[i1 >> 2] | 0;
 } else {
  i10 = i8;
 }
 i8 = i10 + 8 | 0;
 i1 = HEAP32[i8 >> 2] | 0;
 if ((i1 | 0) == (HEAP32[i10 + 4 >> 2] | 0)) {
  i4 = i1 + 1 | 0;
  i7 = i4 + (i1 >>> 2) | 0;
  i9 = i7 >>> 0 > 16 >>> 0 ? i7 : 16;
  __ZN3WTF6VectorINS_6RefPtrIN7WebCore11RenderStyleEEELj4ENS_15CrashOnOverflowEE15reserveCapacityEj(i10, i9 >>> 0 > i4 >>> 0 ? i9 : i4);
  i4 = (HEAP32[i10 >> 2] | 0) + (HEAP32[i8 >> 2] << 2) | 0;
  i9 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = 0;
  HEAP32[i4 >> 2] = i9;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
  i6 = i2;
  STACKTOP = i3;
  return i6 | 0;
 } else {
  i9 = (HEAP32[i10 >> 2] | 0) + (i1 << 2) | 0;
  i1 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = 0;
  HEAP32[i9 >> 2] = i1;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
  i6 = i2;
  STACKTOP = i3;
  return i6 | 0;
 }
 return 0;
}
function __ZNK7WebCore11RenderStyle15getShadowExtentEPKNS_10ShadowDataERNS_10LayoutUnitES5_S5_S5_(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i7 = i1 | 0;
 i8 = i1 + 8 | 0;
 i9 = i1 + 16 | 0;
 i10 = i1 + 24 | 0;
 i11 = i3 | 0;
 HEAP32[i11 >> 2] = 0;
 i12 = i4 | 0;
 HEAP32[i12 >> 2] = 0;
 i13 = i5 | 0;
 HEAP32[i13 >> 2] = 0;
 i14 = i6 | 0;
 HEAP32[i14 >> 2] = 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i1;
  return;
 }
 i15 = i7;
 i16 = i8;
 i17 = i9;
 i18 = i10;
 i19 = i2;
 while (1) {
  if ((HEAP32[i19 + 24 >> 2] | 0) != 1) {
   i2 = ~~+Math_ceil(+(HEAP32[i19 + 8 >> 2] | 0) * 1.399999976158142);
   i20 = i2 + (HEAP32[i19 + 12 >> 2] | 0) | 0;
   i2 = i19 + 4 | 0;
   i21 = (HEAP32[i2 >> 2] | 0) - i20 | 0;
   HEAP32[i7 >> 2] = i21;
   HEAP32[i11 >> 2] = HEAP32[((i21 | 0) < (HEAP32[i11 >> 2] | 0) ? i15 : i3) >> 2];
   i21 = i19 | 0;
   i22 = (HEAP32[i21 >> 2] | 0) + i20 | 0;
   HEAP32[i8 >> 2] = i22;
   HEAP32[i12 >> 2] = HEAP32[((HEAP32[i12 >> 2] | 0) < (i22 | 0) ? i16 : i4) >> 2];
   i22 = (HEAP32[i2 >> 2] | 0) + i20 | 0;
   HEAP32[i9 >> 2] = i22;
   HEAP32[i13 >> 2] = HEAP32[((HEAP32[i13 >> 2] | 0) < (i22 | 0) ? i17 : i5) >> 2];
   i22 = (HEAP32[i21 >> 2] | 0) - i20 | 0;
   HEAP32[i10 >> 2] = i22;
   HEAP32[i14 >> 2] = HEAP32[((i22 | 0) < (HEAP32[i14 >> 2] | 0) ? i18 : i6) >> 2];
  }
  i19 = HEAP32[i19 + 32 >> 2] | 0;
  if ((i19 | 0) == 0) {
   break;
  }
 }
 STACKTOP = i1;
 return;
}
function __ZN7WebCore11RenderStyle10setContentENS_9QuoteTypeEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 if (i3) {
  i3 = __ZN3WTF10fastMallocEj(16) | 0;
  HEAP32[i3 + 4 >> 2] = 0;
  HEAP32[i3 + 8 >> 2] = 0;
  HEAP32[i3 >> 2] = __ZTVN7WebCore16QuoteContentDataE + 8;
  HEAP32[i3 + 12 >> 2] = i2;
  i7 = i6 | 0;
  HEAP32[i7 >> 2] = i3;
  __ZN7WebCore11RenderStyle13appendContentENSt3__110unique_ptrINS_11ContentDataENS1_14default_deleteIS3_EEEE(i1, i6);
  i6 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = 0;
  if ((i6 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 1](i6);
  STACKTOP = i4;
  return;
 }
 i6 = i1 + 20 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i8 = i1;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i5, i1);
  i1 = HEAP32[i5 >> 2] | 0;
  i5 = HEAP32[i6 >> 2] | 0;
  i7 = i5 | 0;
  i3 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i3 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  } else {
   HEAP32[i7 >> 2] = i3;
  }
  HEAP32[i6 >> 2] = i1;
  i8 = i1;
 }
 i1 = __ZN3WTF10fastMallocEj(16) | 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 HEAP32[i1 >> 2] = __ZTVN7WebCore16QuoteContentDataE + 8;
 HEAP32[i1 + 12 >> 2] = i2;
 i2 = i8 + 88 | 0;
 i8 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i1;
 if ((i8 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 1](i8);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore11RenderStyle17accessTransitionsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i1 + 20 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i7 = i1;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i4, i1);
  i1 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i6 >> 2] | 0;
  i8 = i4 | 0;
  i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
  if ((i9 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i8 >> 2] = i9;
  }
  HEAP32[i6 >> 2] = i1;
  i7 = i1;
 }
 i1 = HEAP32[i7 + 112 >> 2] | 0;
 if ((i1 | 0) != 0) {
  i10 = i1;
  STACKTOP = i2;
  return i10 | 0;
 }
 if ((HEAP32[i7 >> 2] | 0) == 1) {
  i11 = i7;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i3, i7);
  i7 = HEAP32[i3 >> 2] | 0;
  i3 = HEAP32[i6 >> 2] | 0;
  i1 = i3 | 0;
  i9 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
  if ((i9 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i3);
   __ZN3WTF8fastFreeEPv(i3);
  } else {
   HEAP32[i1 >> 2] = i9;
  }
  HEAP32[i6 >> 2] = i7;
  i11 = i7;
 }
 i7 = __ZN3WTF10fastMallocEj(12) | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i7 + 4 >> 2] = 0;
 HEAP32[i7 + 8 >> 2] = 0;
 HEAP32[i5 >> 2] = i7;
 __ZN3WTF6OwnPtrIN7WebCore13AnimationListEEaSERKNS_10PassOwnPtrIS2_EE(i11 + 112 | 0, i5) | 0;
 __ZN3WTF10PassOwnPtrIN7WebCore13AnimationListEED2Ev(i5);
 i10 = HEAP32[(HEAP32[i6 >> 2] | 0) + 112 >> 2] | 0;
 STACKTOP = i2;
 return i10 | 0;
}
function __ZN7WebCore11RenderStyle16accessAnimationsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i1 + 20 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i7 = i1;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i4, i1);
  i1 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i6 >> 2] | 0;
  i8 = i4 | 0;
  i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
  if ((i9 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i8 >> 2] = i9;
  }
  HEAP32[i6 >> 2] = i1;
  i7 = i1;
 }
 i1 = HEAP32[i7 + 108 >> 2] | 0;
 if ((i1 | 0) != 0) {
  i10 = i1;
  STACKTOP = i2;
  return i10 | 0;
 }
 if ((HEAP32[i7 >> 2] | 0) == 1) {
  i11 = i7;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i3, i7);
  i7 = HEAP32[i3 >> 2] | 0;
  i3 = HEAP32[i6 >> 2] | 0;
  i1 = i3 | 0;
  i9 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
  if ((i9 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i3);
   __ZN3WTF8fastFreeEPv(i3);
  } else {
   HEAP32[i1 >> 2] = i9;
  }
  HEAP32[i6 >> 2] = i7;
  i11 = i7;
 }
 i7 = __ZN3WTF10fastMallocEj(12) | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i7 + 4 >> 2] = 0;
 HEAP32[i7 + 8 >> 2] = 0;
 HEAP32[i5 >> 2] = i7;
 __ZN3WTF6OwnPtrIN7WebCore13AnimationListEEaSERKNS_10PassOwnPtrIS2_EE(i11 + 108 | 0, i5) | 0;
 __ZN3WTF10PassOwnPtrIN7WebCore13AnimationListEED2Ev(i5);
 i10 = HEAP32[(HEAP32[i6 >> 2] | 0) + 108 >> 2] | 0;
 STACKTOP = i2;
 return i10 | 0;
}
function __ZN7WebCore10FontGlyphsD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 __ZN7WebCore10FontGlyphs15releaseFontDataEv(i1);
 i2 = HEAP32[i1 + 80 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 60 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 48 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 1](i5);
  }
 } while (0);
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = i1 + 12 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 i3 = i1 + 4 | 0;
 if ((i5 | 0) != 0) {
  i4 = HEAP32[i3 >> 2] | 0;
  i6 = i4 + (i5 << 2) | 0;
  i5 = i4;
  while (1) {
   i4 = HEAP32[i5 >> 2] | 0;
   do {
    if ((i4 | 0) != 0) {
     i7 = i4 + 4 | 0;
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
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 1](i9);
    }
   } while (0);
   i5 = i5 + 4 | 0;
   if ((i5 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i1 + 16 | 0) == (i2 | 0) | (i2 | 0) == 0) {
  return;
 }
 HEAP32[i3 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore11RenderStyle19setTransformOriginYENS_6LengthE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 + 20 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i7 = i1;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i5, i1);
  i1 = HEAP32[i5 >> 2] | 0;
  i5 = HEAP32[i6 >> 2] | 0;
  i8 = i5 | 0;
  i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
  if ((i9 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  } else {
   HEAP32[i8 >> 2] = i9;
  }
  HEAP32[i6 >> 2] = i1;
  i7 = i1;
 }
 if (__Z12compareEqualIN7WebCore6LengthES1_EbRKT_RKT0_((HEAP32[i7 + 72 >> 2] | 0) + 24 | 0, i2) | 0) {
  STACKTOP = i3;
  return;
 }
 i7 = HEAP32[i6 >> 2] | 0;
 if ((HEAP32[i7 >> 2] | 0) == 1) {
  i10 = i7;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i4, i7);
  i7 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i6 >> 2] | 0;
  i1 = i4 | 0;
  i9 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
  if ((i9 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i1 >> 2] = i9;
  }
  HEAP32[i6 >> 2] = i7;
  i10 = i7;
 }
 i7 = (__ZN7WebCore7DataRefINS_18StyleTransformDataEE6accessEv(i10 + 72 | 0) | 0) + 24 | 0;
 if ((i7 | 0) == (i2 | 0)) {
  STACKTOP = i3;
  return;
 }
 i10 = i2;
 i6 = i7;
 i7 = HEAP32[i10 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i6 + 4 >> 2] = i7;
 HEAP8[i2 + 5 | 0] = 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderStyle19setTransformOriginXENS_6LengthE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 + 20 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i7 = i1;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i5, i1);
  i1 = HEAP32[i5 >> 2] | 0;
  i5 = HEAP32[i6 >> 2] | 0;
  i8 = i5 | 0;
  i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
  if ((i9 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  } else {
   HEAP32[i8 >> 2] = i9;
  }
  HEAP32[i6 >> 2] = i1;
  i7 = i1;
 }
 if (__Z12compareEqualIN7WebCore6LengthES1_EbRKT_RKT0_((HEAP32[i7 + 72 >> 2] | 0) + 16 | 0, i2) | 0) {
  STACKTOP = i3;
  return;
 }
 i7 = HEAP32[i6 >> 2] | 0;
 if ((HEAP32[i7 >> 2] | 0) == 1) {
  i10 = i7;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i4, i7);
  i7 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i6 >> 2] | 0;
  i1 = i4 | 0;
  i9 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
  if ((i9 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i1 >> 2] = i9;
  }
  HEAP32[i6 >> 2] = i7;
  i10 = i7;
 }
 i7 = (__ZN7WebCore7DataRefINS_18StyleTransformDataEE6accessEv(i10 + 72 | 0) | 0) + 16 | 0;
 if ((i7 | 0) == (i2 | 0)) {
  STACKTOP = i3;
  return;
 }
 i10 = i2;
 i6 = i7;
 i7 = HEAP32[i10 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i6 + 4 >> 2] = i7;
 HEAP8[i2 + 5 | 0] = 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderStyle12setBoxShadowEN3WTF10PassOwnPtrINS_10ShadowDataEEEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i1 + 20 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i7 = i1;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i5, i1);
  i1 = HEAP32[i5 >> 2] | 0;
  i5 = HEAP32[i6 >> 2] | 0;
  i8 = i5 | 0;
  i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
  if ((i9 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  } else {
   HEAP32[i8 >> 2] = i9;
  }
  HEAP32[i6 >> 2] = i1;
  i7 = i1;
 }
 if (!i3) {
  i3 = i7 + 100 | 0;
  i1 = HEAP32[i3 >> 2] | 0;
  i6 = i2 | 0;
  i9 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = 0;
  HEAP32[i3 >> 2] = i9;
  if ((i1 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3WTF6OwnPtrIN7WebCore10ShadowDataEED2Ev(i1 + 32 | 0);
  __ZN3WTF8fastFreeEPv(i1);
  STACKTOP = i4;
  return;
 }
 i1 = i2 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 i9 = i7 + 100 | 0;
 i7 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 i3 = i2 + 32 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i7;
 if ((i2 | 0) != 0) {
  __ZN3WTF6OwnPtrIN7WebCore10ShadowDataEED2Ev(i2 + 32 | 0);
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i9 >> 2] | 0;
 i7 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i9 >> 2] = i7;
 if ((i2 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3WTF6OwnPtrIN7WebCore10ShadowDataEED2Ev(i2 + 32 | 0);
 __ZN3WTF8fastFreeEPv(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore11RenderStyle13setTextShadowEN3WTF10PassOwnPtrINS_10ShadowDataEEEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i1 + 24 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i7 = i1;
 } else {
  __ZNK7WebCore22StyleRareInheritedData4copyEv(i5, i1);
  i1 = HEAP32[i5 >> 2] | 0;
  i5 = HEAP32[i6 >> 2] | 0;
  i8 = i5 | 0;
  i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
  if ((i9 | 0) == 0) {
   __ZN7WebCore22StyleRareInheritedDataD1Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  } else {
   HEAP32[i8 >> 2] = i9;
  }
  HEAP32[i6 >> 2] = i1;
  i7 = i1;
 }
 if (!i3) {
  i3 = i7 + 60 | 0;
  i1 = HEAP32[i3 >> 2] | 0;
  i6 = i2 | 0;
  i9 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = 0;
  HEAP32[i3 >> 2] = i9;
  if ((i1 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3WTF6OwnPtrIN7WebCore10ShadowDataEED2Ev(i1 + 32 | 0);
  __ZN3WTF8fastFreeEPv(i1);
  STACKTOP = i4;
  return;
 }
 i1 = i2 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 i9 = i7 + 60 | 0;
 i7 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 i3 = i2 + 32 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i7;
 if ((i2 | 0) != 0) {
  __ZN3WTF6OwnPtrIN7WebCore10ShadowDataEED2Ev(i2 + 32 | 0);
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i9 >> 2] | 0;
 i7 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i9 >> 2] = i7;
 if ((i2 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3WTF6OwnPtrIN7WebCore10ShadowDataEED2Ev(i2 + 32 | 0);
 __ZN3WTF8fastFreeEPv(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore11RenderStyle13appendContentENSt3__110unique_ptrINS_11ContentDataENS1_14default_deleteIS3_EEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 20 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i6 = i1;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i4, i1);
  i1 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  i7 = i4 | 0;
  i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i8 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i7 >> 2] = i8;
  }
  HEAP32[i5 >> 2] = i1;
  i6 = i1;
 }
 i1 = i6 + 88 | 0;
 i6 = HEAP32[i1 >> 2] | 0;
 while (1) {
  if ((i6 | 0) == 0) {
   i9 = 11;
   break;
  }
  i10 = i6 + 4 | 0;
  i5 = HEAP32[i10 >> 2] | 0;
  if ((i5 | 0) == 0) {
   i9 = 9;
   break;
  } else {
   i6 = i5;
  }
 }
 if ((i9 | 0) == 11) {
  i6 = i2 | 0;
  i5 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = 0;
  i6 = HEAP32[i1 >> 2] | 0;
  HEAP32[i1 >> 2] = i5;
  if ((i6 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 1](i6);
  STACKTOP = i3;
  return;
 } else if ((i9 | 0) == 9) {
  i9 = i2 | 0;
  i2 = HEAP32[i9 >> 2] | 0;
  HEAP32[i9 >> 2] = 0;
  i9 = HEAP32[i10 >> 2] | 0;
  HEAP32[i10 >> 2] = i2;
  if ((i9 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 1](i9);
  STACKTOP = i3;
  return;
 }
}
function __ZN3WTF6VectorIN7WebCore10CursorDataELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i5 + (i6 * 12 & -1) | 0;
 if (i2 >>> 0 > 357913941 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 * 12 & -1) | 0;
 HEAP32[i3 >> 2] = (i7 >>> 0) / 12 & -1;
 i2 = __ZN3WTF10fastMallocEj(i7) | 0;
 HEAP32[i4 >> 2] = i2;
 if ((i6 | 0) != 0) {
  i6 = i5;
  i7 = i2;
  while (1) {
   i2 = i6 | 0;
   i8 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   HEAP32[i7 >> 2] = i8;
   i8 = i6 + 4 | 0;
   i9 = i7 + 4 | 0;
   i10 = HEAP32[i8 + 4 >> 2] | 0;
   HEAP32[i9 >> 2] = HEAP32[i8 >> 2];
   HEAP32[i9 + 4 >> 2] = i10;
   i10 = HEAP32[i2 >> 2] | 0;
   do {
    if ((i10 | 0) != 0) {
     i2 = i10 + 4 | 0;
     i9 = i2 | 0;
     i8 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
     if ((i8 | 0) != 0) {
      HEAP32[i9 >> 2] = i8;
      break;
     }
     i8 = i2 - 4 | 0;
     if ((i8 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 1](i8);
    }
   } while (0);
   i10 = i6 + 12 | 0;
   if ((i10 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i10;
    i7 = i7 + 12 | 0;
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
function __ZN7WebCore11RenderStyle12setTransformERKNS_19TransformOperationsE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 + 20 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i7 = i1;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i5, i1);
  i1 = HEAP32[i5 >> 2] | 0;
  i5 = HEAP32[i6 >> 2] | 0;
  i8 = i5 | 0;
  i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
  if ((i9 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  } else {
   HEAP32[i8 >> 2] = i9;
  }
  HEAP32[i6 >> 2] = i1;
  i7 = i1;
 }
 if (__Z12compareEqualIN7WebCore19TransformOperationsES1_EbRKT_RKT0_((HEAP32[i7 + 72 >> 2] | 0) + 4 | 0, i2) | 0) {
  STACKTOP = i3;
  return;
 }
 i7 = HEAP32[i6 >> 2] | 0;
 if ((HEAP32[i7 >> 2] | 0) == 1) {
  i10 = i7;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i4, i7);
  i7 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i6 >> 2] | 0;
  i1 = i4 | 0;
  i9 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
  if ((i9 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i1 >> 2] = i9;
  }
  HEAP32[i6 >> 2] = i7;
  i10 = i7;
 }
 __ZN3WTF6VectorINS_6RefPtrIN7WebCore18TransformOperationEEELj0ENS_15CrashOnOverflowEEaSERKS6_((__ZN7WebCore7DataRefINS_18StyleTransformDataEE6accessEv(i10 + 72 | 0) | 0) + 4 | 0, i2 | 0) | 0;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore11RenderStyle16borderStartWidthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = (HEAP32[i1 + 44 >> 2] | 0) >>> 13 & 3;
 i3 = (HEAP32[i1 + 40 >> 2] & 1073741824 | 0) != 0;
 if ((i2 | 0) == 3 | (i2 | 0) == 0) {
  i2 = HEAP32[i1 + 16 >> 2] | 0;
  i4 = (HEAP32[(HEAP32[i2 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0;
  if (i3) {
   i5 = HEAP32[i2 + 104 >> 2] | 0;
   do {
    if (i4) {
     if ((i5 & 1879048192) >>> 0 < 268435456 >>> 0) {
      i6 = 0;
     } else {
      break;
     }
     return i6 | 0;
    }
   } while (0);
   i6 = i5 >>> 1 & 65535;
   return i6 | 0;
  } else {
   i5 = HEAP32[i2 + 112 >> 2] | 0;
   do {
    if (i4) {
     if ((i5 & 1879048192) >>> 0 < 268435456 >>> 0) {
      i6 = 0;
     } else {
      break;
     }
     return i6 | 0;
    }
   } while (0);
   i6 = i5 >>> 1 & 65535;
   return i6 | 0;
  }
 } else {
  i5 = HEAP32[i1 + 16 >> 2] | 0;
  i1 = (HEAP32[(HEAP32[i5 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0;
  if (i3) {
   i3 = HEAP32[i5 + 120 >> 2] | 0;
   do {
    if (i1) {
     if ((i3 & 1879048192) >>> 0 < 268435456 >>> 0) {
      i6 = 0;
     } else {
      break;
     }
     return i6 | 0;
    }
   } while (0);
   i6 = i3 >>> 1 & 65535;
   return i6 | 0;
  } else {
   i3 = HEAP32[i5 + 128 >> 2] | 0;
   do {
    if (i1) {
     if ((i3 & 1879048192) >>> 0 < 268435456 >>> 0) {
      i6 = 0;
     } else {
      break;
     }
     return i6 | 0;
    }
   } while (0);
   i6 = i3 >>> 1 & 65535;
   return i6 | 0;
  }
 }
 return 0;
}
function __ZNK7WebCore11RenderStyle14borderEndWidthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = (HEAP32[i1 + 44 >> 2] | 0) >>> 13 & 3;
 i3 = (HEAP32[i1 + 40 >> 2] & 1073741824 | 0) != 0;
 if ((i2 | 0) == 3 | (i2 | 0) == 0) {
  i2 = HEAP32[i1 + 16 >> 2] | 0;
  i4 = (HEAP32[(HEAP32[i2 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0;
  if (i3) {
   i5 = HEAP32[i2 + 112 >> 2] | 0;
   do {
    if (i4) {
     if ((i5 & 1879048192) >>> 0 < 268435456 >>> 0) {
      i6 = 0;
     } else {
      break;
     }
     return i6 | 0;
    }
   } while (0);
   i6 = i5 >>> 1 & 65535;
   return i6 | 0;
  } else {
   i5 = HEAP32[i2 + 104 >> 2] | 0;
   do {
    if (i4) {
     if ((i5 & 1879048192) >>> 0 < 268435456 >>> 0) {
      i6 = 0;
     } else {
      break;
     }
     return i6 | 0;
    }
   } while (0);
   i6 = i5 >>> 1 & 65535;
   return i6 | 0;
  }
 } else {
  i5 = HEAP32[i1 + 16 >> 2] | 0;
  i1 = (HEAP32[(HEAP32[i5 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0;
  if (i3) {
   i3 = HEAP32[i5 + 128 >> 2] | 0;
   do {
    if (i1) {
     if ((i3 & 1879048192) >>> 0 < 268435456 >>> 0) {
      i6 = 0;
     } else {
      break;
     }
     return i6 | 0;
    }
   } while (0);
   i6 = i3 >>> 1 & 65535;
   return i6 | 0;
  } else {
   i3 = HEAP32[i5 + 120 >> 2] | 0;
   do {
    if (i1) {
     if ((i3 & 1879048192) >>> 0 < 268435456 >>> 0) {
      i6 = 0;
     } else {
      break;
     }
     return i6 | 0;
    }
   } while (0);
   i6 = i3 >>> 1 & 65535;
   return i6 | 0;
  }
 }
 return 0;
}
function __ZNK7WebCore10LengthSizeeqERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, d7 = +0, d8 = +0, d9 = +0, d10 = +0;
 i3 = i1 | 0;
 i4 = i2 | 0;
 i5 = HEAP8[i1 + 5 | 0] | 0;
 if (i5 << 24 >> 24 != (HEAP8[i2 + 5 | 0] | 0)) {
  i6 = 0;
  return i6 | 0;
 }
 if (((HEAP8[i2 + 4 | 0] ^ HEAP8[i1 + 4 | 0]) & 1) != 0) {
  i6 = 0;
  return i6 | 0;
 }
 do {
  if (i5 << 24 >> 24 != 15) {
   if ((HEAP8[i1 + 6 | 0] & 1) == 0) {
    d7 = +(HEAP32[i1 >> 2] | 0);
   } else {
    d7 = +HEAPF32[i1 >> 2];
   }
   if ((HEAP8[i2 + 6 | 0] & 1) == 0) {
    d8 = +(HEAP32[i2 >> 2] | 0);
   } else {
    d8 = +HEAPF32[i2 >> 2];
   }
   if (d7 == d8) {
    break;
   }
   if (__ZNK7WebCore6Length17isCalculatedEqualERKS0_(i3, i4) | 0) {
    break;
   } else {
    i6 = 0;
   }
   return i6 | 0;
  }
 } while (0);
 i4 = i1 + 8 | 0;
 i3 = i2 + 8 | 0;
 i5 = HEAP8[i1 + 13 | 0] | 0;
 if (i5 << 24 >> 24 != (HEAP8[i2 + 13 | 0] | 0)) {
  i6 = 0;
  return i6 | 0;
 }
 if (((HEAP8[i2 + 12 | 0] ^ HEAP8[i1 + 12 | 0]) & 1) != 0) {
  i6 = 0;
  return i6 | 0;
 }
 if (i5 << 24 >> 24 == 15) {
  i6 = 1;
  return i6 | 0;
 }
 if ((HEAP8[i1 + 14 | 0] & 1) == 0) {
  d9 = +(HEAP32[i4 >> 2] | 0);
 } else {
  d9 = +HEAPF32[i4 >> 2];
 }
 if ((HEAP8[i2 + 14 | 0] & 1) == 0) {
  d10 = +(HEAP32[i3 >> 2] | 0);
 } else {
  d10 = +HEAPF32[i3 >> 2];
 }
 if (d9 == d10) {
  i6 = 1;
  return i6 | 0;
 }
 i6 = __ZNK7WebCore6Length17isCalculatedEqualERKS0_(i4, i3) | 0;
 return i6 | 0;
}
function __ZN7WebCore11RenderStyle5cloneEPKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = __ZN3WTF10fastMallocEj(56) | 0;
 HEAP32[i3 >> 2] = 1;
 i4 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i3 + 4 >> 2] = i4;
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 i5 = HEAP32[i2 + 8 >> 2] | 0;
 HEAP32[i3 + 8 >> 2] = i5;
 i4 = i5 | 0;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 i4 = HEAP32[i2 + 12 >> 2] | 0;
 HEAP32[i3 + 12 >> 2] = i4;
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 i5 = HEAP32[i2 + 16 >> 2] | 0;
 HEAP32[i3 + 16 >> 2] = i5;
 i4 = i5 | 0;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 i4 = HEAP32[i2 + 20 >> 2] | 0;
 HEAP32[i3 + 20 >> 2] = i4;
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 i5 = HEAP32[i2 + 24 >> 2] | 0;
 HEAP32[i3 + 24 >> 2] = i5;
 i4 = i5 | 0;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 i4 = HEAP32[i2 + 28 >> 2] | 0;
 HEAP32[i3 + 28 >> 2] = i4;
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 HEAP32[i3 + 32 >> 2] = 0;
 i5 = HEAP32[i2 + 36 >> 2] | 0;
 HEAP32[i3 + 36 >> 2] = i5;
 i4 = i5 | 0;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 i4 = i2 + 40 | 0;
 i5 = i3 + 40 | 0;
 i6 = HEAP32[i4 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i5 + 4 >> 2] = i6;
 i6 = i2 + 48 | 0;
 i2 = i3 + 48 | 0;
 i5 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i2 + 4 >> 2] = i5;
 HEAP32[i1 >> 2] = i3;
 return;
}
function __ZN7WebCore11RenderStyle9setQuotesEN3WTF10PassRefPtrINS_10QuotesDataEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 24 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 i6 = HEAP32[i1 + 116 >> 2] | 0;
 i7 = i2 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 if ((i6 | 0) == (i2 | 0)) {
  STACKTOP = i3;
  return;
 }
 do {
  if ((i6 | 0) == 0 | (i2 | 0) == 0) {
   i8 = i1;
  } else {
   if (__ZN7WebCoreeqERKNS_10QuotesDataES2_(i6, i2) | 0) {
    STACKTOP = i3;
    return;
   } else {
    i8 = HEAP32[i5 >> 2] | 0;
    break;
   }
  }
 } while (0);
 if ((HEAP32[i8 >> 2] | 0) == 1) {
  i9 = i8;
 } else {
  __ZNK7WebCore22StyleRareInheritedData4copyEv(i4, i8);
  i8 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  i2 = i4 | 0;
  i6 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
  if ((i6 | 0) == 0) {
   __ZN7WebCore22StyleRareInheritedDataD1Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i2 >> 2] = i6;
  }
  HEAP32[i5 >> 2] = i8;
  i9 = i8;
 }
 i8 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i7 = i9 + 116 | 0;
 i9 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i8;
 if ((i9 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i8 = i9 | 0;
 i7 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 if ((i7 | 0) == 0) {
  __ZN7WebCore10QuotesDataD1Ev(i9);
  __ZN3WTF8fastFreeEPv(i9);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i8 >> 2] = i7;
  STACKTOP = i3;
  return;
 }
}
function __Z12compareEqualIN7WebCore6LengthES1_EbRKT_RKT0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, d11 = +0, d12 = +0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4;
 i6 = i2;
 i2 = HEAP32[i6 >> 2] | 0;
 i7 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 HEAP32[i4 + 4 >> 2] = i7;
 if ((i2 & 0 | 0) == 0 & (i7 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i5);
  i2 = i5 + 5 | 0;
  i8 = HEAP8[i2] | 0;
  i9 = i2;
 } else {
  i8 = (i7 >>> 8 | 0 << 24) & 255;
  i9 = i5 + 5 | 0;
 }
 if ((HEAP8[i1 + 5 | 0] | 0) == i8 << 24 >> 24) {
  do {
   if (((HEAP8[i5 + 4 | 0] ^ HEAP8[i1 + 4 | 0]) & 1) == 0) {
    if (i8 << 24 >> 24 == 15) {
     i10 = 1;
     break;
    }
    if ((HEAP8[i1 + 6 | 0] & 1) == 0) {
     d11 = +(HEAP32[i1 >> 2] | 0);
    } else {
     d11 = +HEAPF32[i1 >> 2];
    }
    if ((HEAP8[i5 + 6 | 0] & 1) == 0) {
     d12 = +(HEAP32[i4 >> 2] | 0);
    } else {
     d12 = +HEAPF32[i4 >> 2];
    }
    if (d11 == d12) {
     i10 = 1;
     break;
    }
    i10 = __ZNK7WebCore6Length17isCalculatedEqualERKS0_(i1, i5) | 0;
   } else {
    i10 = 0;
   }
  } while (0);
  i13 = i10;
  i14 = HEAP8[i9] | 0;
 } else {
  i13 = 0;
  i14 = i8;
 }
 if (i14 << 24 >> 24 != 10) {
  STACKTOP = i3;
  return i13 | 0;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i5);
 STACKTOP = i3;
 return i13 | 0;
}
function __ZNK7WebCore11RenderStyle21changeRequiresRepaintEPKS0_Rj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i3 = i1 + 40 | 0;
 i4 = i2 + 40 | 0;
 if (((HEAP32[i4 >> 2] ^ HEAP32[i3 >> 2]) & 6144 | 0) != 0) {
  i5 = 1;
  return i5 | 0;
 }
 if (((HEAP32[i4 + 4 >> 2] ^ HEAP32[i3 + 4 >> 2]) & 6208 | 0) != 0) {
  i5 = 1;
  return i5 | 0;
 }
 if (!(__ZNK7WebCore10BorderDataeqERKS0_((HEAP32[i1 + 16 >> 2] | 0) + 100 | 0, (HEAP32[i2 + 16 >> 2] | 0) + 100 | 0) | 0)) {
  i5 = 1;
  return i5 | 0;
 }
 if (!(__ZNK7WebCore19StyleBackgroundData23isEquivalentForPaintingERKS0_(HEAP32[i1 + 12 >> 2] | 0, HEAP32[i2 + 12 >> 2] | 0) | 0)) {
  i5 = 1;
  return i5 | 0;
 }
 i3 = HEAP32[i1 + 24 >> 2] | 0;
 i4 = HEAP32[i2 + 24 >> 2] | 0;
 if (((HEAP32[i4 + 88 >> 2] ^ HEAP32[i3 + 88 >> 2]) & 98352 | 0) != 0) {
  i5 = 1;
  return i5 | 0;
 }
 i6 = HEAP32[i1 + 20 >> 2] | 0;
 i1 = HEAP32[i2 + 20 >> 2] | 0;
 if (((HEAP32[i1 + 292 >> 2] ^ HEAP32[i6 + 292 >> 2]) & 25165824 | 0) != 0) {
  i5 = 1;
  return i5 | 0;
 }
 if (((HEAP32[i1 + 296 >> 2] ^ HEAP32[i6 + 296 >> 2]) & 29360192 | 0) != 0) {
  i5 = 1;
  return i5 | 0;
 }
 if (((HEAP32[i4 + 92 >> 2] ^ HEAP32[i3 + 92 >> 2]) & 384 | 0) != 0) {
  i5 = 1;
  return i5 | 0;
 }
 if ((HEAP32[i6 + 188 >> 2] | 0) != (HEAP32[i1 + 188 >> 2] | 0)) {
  i5 = 1;
  return i5 | 0;
 }
 i5 = (HEAP32[i6 + 212 >> 2] | 0) != (HEAP32[i1 + 212 >> 2] | 0);
 return i5 | 0;
}
function __ZNK7WebCore11RenderStyle20getCounterDirectivesERKN3WTF12AtomicStringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i4 = HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 92 >> 2] | 0;
 if ((i4 | 0) == 0) {
  HEAP8[i1 | 0] = 0;
  HEAP8[i1 + 1 | 0] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  HEAP32[i1 + 8 >> 2] = 0;
  return;
 }
 i2 = HEAP32[i4 + 8 >> 2] | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i3 = HEAP32[i4 + 16 >> 2] | 0;
 i6 = i3 >>> 7;
 L5 : do {
  if ((i5 | 0) != 0) {
   i7 = (i3 >>> 30) + ~i6 | 0;
   i8 = i7 << 12 ^ i7;
   i7 = i8 >>> 7 ^ i8;
   i8 = i7 << 2 ^ i7;
   i7 = i8 >>> 20 ^ i8 | 1;
   i8 = i6;
   i9 = 0;
   while (1) {
    i10 = i8 & i2;
    i11 = i5 + (i10 << 4) | 0;
    i12 = HEAP32[i11 >> 2] | 0;
    i13 = i12;
    if ((i13 | 0) == 0) {
     break L5;
    } else if ((i13 | 0) != (-1 | 0)) {
     if ((i12 | 0) == (i4 | 0)) {
      break;
     }
    }
    i12 = (i9 | 0) == 0 ? i7 : i9;
    i8 = i12 + i10 | 0;
    i9 = i12;
   }
   if ((i11 | 0) == 0) {
    break;
   }
   i9 = i1 | 0;
   i8 = i5 + (i10 << 4) + 4 | 0;
   HEAP32[i9 >> 2] = HEAP32[i8 >> 2];
   HEAP32[i9 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
   HEAP32[i9 + 8 >> 2] = HEAP32[i8 + 8 >> 2];
   return;
  }
 } while (0);
 HEAP8[i1 | 0] = 0;
 HEAP8[i1 + 1 | 0] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
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
function __ZN7WebCore11RenderStyle18createDefaultStyleEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = __ZN3WTF10fastMallocEj(56) | 0;
 HEAP32[i2 >> 2] = 1;
 i3 = __ZN3WTF10fastMallocEj(68) | 0;
 __ZN7WebCore12StyleBoxDataC1Ev(i3);
 HEAP32[i2 + 4 >> 2] = i3;
 i3 = __ZN3WTF10fastMallocEj(44) | 0;
 __ZN7WebCore15StyleVisualDataC1Ev(i3);
 HEAP32[i2 + 8 >> 2] = i3;
 i3 = __ZN3WTF10fastMallocEj(72) | 0;
 __ZN7WebCore19StyleBackgroundDataC1Ev(i3);
 HEAP32[i2 + 12 >> 2] = i3;
 i3 = __ZN3WTF10fastMallocEj(200) | 0;
 __ZN7WebCore17StyleSurroundDataC1Ev(i3);
 HEAP32[i2 + 16 >> 2] = i3;
 i3 = __ZN3WTF10fastMallocEj(300) | 0;
 __ZN7WebCore25StyleRareNonInheritedDataC1Ev(i3);
 HEAP32[i2 + 20 >> 2] = i3;
 i3 = __ZN3WTF10fastMallocEj(128) | 0;
 __ZN7WebCore22StyleRareInheritedDataC1Ev(i3);
 HEAP32[i2 + 24 >> 2] = i3;
 i3 = __ZN3WTF10fastMallocEj(72) | 0;
 __ZN7WebCore18StyleInheritedDataC1Ev(i3);
 HEAP32[i2 + 28 >> 2] = i3;
 HEAP32[i2 + 32 >> 2] = 0;
 i3 = __ZN3WTF10fastMallocEj(44) | 0;
 __ZN7WebCore14SVGRenderStyleC1Ev(i3);
 HEAP32[i2 + 36 >> 2] = i3;
 i3 = i2 + 40 | 0;
 HEAP32[i3 >> 2] = HEAP32[i3 >> 2] & -2147483648 | 1074192384;
 i3 = i2 + 44 | 0;
 HEAP32[i3 >> 2] = HEAP32[i3 >> 2] & -32768 | 128;
 i3 = i2 + 48 | 0;
 HEAP32[i3 >> 2] = HEAP32[i3 >> 2] & -2147483648;
 i3 = i2 + 52 | 0;
 HEAP32[i3 >> 2] = HEAP32[i3 >> 2] & -268435456;
 HEAP32[i1 >> 2] = i2;
 return;
}
function __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6;
 __ZNK7WebCore11RenderStyle22colorIncludingFallbackEib(i5, i2, i3, 0);
 if ((HEAP32[i2 + 44 >> 2] & 6144 | 0) != 4096) {
  i8 = i1;
  i9 = HEAP32[i5 + 4 >> 2] | 0;
  HEAP32[i8 >> 2] = HEAP32[i5 >> 2];
  HEAP32[i8 + 4 >> 2] = i9;
  STACKTOP = i4;
  return;
 }
 __ZNK7WebCore11RenderStyle22colorIncludingFallbackEib(i7, i2, i3, 1);
 do {
  if ((i3 | 0) == 23) {
   i2 = HEAP32[i6 >> 2] | 0;
   if ((i2 | 0) != 0) {
    i10 = i2;
    break;
   }
   if ((HEAP8[i7 + 4 | 0] & 1) == 0) {
    i10 = 0;
    break;
   }
   i2 = i1;
   i9 = HEAP32[i5 + 4 >> 2] | 0;
   HEAP32[i2 >> 2] = HEAP32[i5 >> 2];
   HEAP32[i2 + 4 >> 2] = i9;
   STACKTOP = i4;
   return;
  } else if ((i3 | 0) == 332) {
   i9 = i1;
   i2 = HEAP32[i6 + 4 >> 2] | 0;
   HEAP32[i9 >> 2] = HEAP32[i6 >> 2];
   HEAP32[i9 + 4 >> 2] = i2;
   STACKTOP = i4;
   return;
  } else {
   i10 = HEAP32[i6 >> 2] | 0;
  }
 } while (0);
 HEAP32[i1 >> 2] = __ZN7WebCore8makeRGBAEiiii(i10 >>> 16 & 255, i10 >>> 8 & 255, i10 & 255, (HEAP32[i5 >> 2] | 0) >>> 24) | 0;
 HEAP8[i1 + 4 | 0] = 1;
 STACKTOP = i4;
 return;
}
function __ZNK3WTF12StringAppendINS_6StringES1_EcvS1_Ev(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i5 | 0;
 i8 = HEAP32[i2 >> 2] | 0;
 HEAP32[i7 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i9 = i8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
 }
 i9 = i6 | 0;
 i8 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i9 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i2 = i8 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 __ZN3WTF13tryMakeStringINS_6StringES1_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i4, i5, i6);
 i6 = i4 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 i6 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i9 = i6 | 0;
   i5 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i9 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i7 >> 2] | 0;
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
 if ((i4 | 0) == 0) {
  _WTFCrash();
 } else {
  HEAP32[i1 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore11RenderStyle20getShadowInsetExtentEPKNS_10ShadowDataE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 if ((i3 | 0) == 0) {
  i4 = 0;
  i5 = 0;
  i6 = 0;
  i7 = 0;
 } else {
  i2 = i3;
  i3 = 0;
  i8 = 0;
  i9 = 0;
  i10 = 0;
  while (1) {
   if ((HEAP32[i2 + 24 >> 2] | 0) == 0) {
    i11 = i3;
    i12 = i8;
    i13 = i9;
    i14 = i10;
   } else {
    i15 = ~~+Math_ceil(+(HEAP32[i2 + 8 >> 2] | 0) * 1.399999976158142);
    i16 = i15 + (HEAP32[i2 + 12 >> 2] | 0) | 0;
    i15 = HEAP32[i2 + 4 >> 2] | 0;
    i17 = i15 + i16 | 0;
    i18 = HEAP32[i2 >> 2] | 0;
    i19 = i18 - i16 | 0;
    i20 = i15 - i16 | 0;
    i15 = i18 + i16 | 0;
    i11 = (i3 | 0) < (i17 | 0) ? i17 : i3;
    i12 = (i19 | 0) < (i8 | 0) ? i19 : i8;
    i13 = (i20 | 0) < (i9 | 0) ? i20 : i9;
    i14 = (i10 | 0) < (i15 | 0) ? i15 : i10;
   }
   i15 = HEAP32[i2 + 32 >> 2] | 0;
   if ((i15 | 0) == 0) {
    i4 = i11;
    i5 = i12;
    i6 = i13;
    i7 = i14;
    break;
   } else {
    i2 = i15;
    i3 = i11;
    i8 = i12;
    i9 = i13;
    i10 = i14;
   }
  }
 }
 HEAP32[i1 >> 2] = i4;
 HEAP32[i1 + 4 >> 2] = i5;
 HEAP32[i1 + 8 >> 2] = i6;
 HEAP32[i1 + 12 >> 2] = i7;
 return;
}
function __ZN7WebCore11RenderStyle17setListStyleImageEN3WTF10PassRefPtrINS_10StyleImageEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 24 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 i6 = i2 | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 if ((HEAP32[i1 + 4 >> 2] | 0) == (i2 | 0)) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i7 = i1;
  i8 = i2;
 } else {
  __ZNK7WebCore22StyleRareInheritedData4copyEv(i4, i1);
  i1 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  i2 = i4 | 0;
  i9 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
  if ((i9 | 0) == 0) {
   __ZN7WebCore22StyleRareInheritedDataD1Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i2 >> 2] = i9;
  }
  HEAP32[i5 >> 2] = i1;
  i7 = i1;
  i8 = HEAP32[i6 >> 2] | 0;
 }
 HEAP32[i6 >> 2] = 0;
 i6 = i7 + 4 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i8;
 if ((i7 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i8 = i7 + 4 | 0;
 i7 = i8 | 0;
 i6 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 if ((i6 | 0) != 0) {
  HEAP32[i7 >> 2] = i6;
  STACKTOP = i3;
  return;
 }
 i6 = i8 - 4 | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 1](i6);
 STACKTOP = i3;
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
function __ZN3WTF6VectorINS_6RefPtrIN7WebCore9AnimationEEELj0ENS_15CrashOnOverflowEE6resizeEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if (i4 >>> 0 < i2 >>> 0) {
  if ((HEAP32[i1 + 4 >> 2] | 0) >>> 0 < i2 >>> 0) {
   __ZN3WTF6VectorINS_6RefPtrIN7WebCore9AnimationEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2);
  }
  i5 = HEAP32[i1 >> 2] | 0;
  if ((i5 | 0) == 0) {
   HEAP32[i3 >> 2] = i2;
   return;
  }
  i6 = HEAP32[i3 >> 2] | 0;
  _memset(i5 + (i6 << 2) | 0, 0, i2 - i6 << 2 | 0) | 0;
  HEAP32[i3 >> 2] = i2;
  return;
 }
 i6 = HEAP32[i1 >> 2] | 0;
 i1 = i6 + (i4 << 2) | 0;
 if ((i4 | 0) == (i2 | 0)) {
  HEAP32[i3 >> 2] = i2;
  return;
 }
 i4 = i6 + (i2 << 2) | 0;
 while (1) {
  i6 = HEAP32[i4 >> 2] | 0;
  do {
   if ((i6 | 0) != 0) {
    i5 = i6 | 0;
    i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
    if ((i7 | 0) == 0) {
     __ZN7WebCore9AnimationD1Ev(i6);
     __ZN3WTF8fastFreeEPv(i6);
     break;
    } else {
     HEAP32[i5 >> 2] = i7;
     break;
    }
   }
  } while (0);
  i4 = i4 + 4 | 0;
  if ((i4 | 0) == (i1 | 0)) {
   break;
  }
 }
 HEAP32[i3 >> 2] = i2;
 return;
}
function __ZN3WTF6OwnPtrINS_6VectorINS_6RefPtrIN7WebCore11RenderStyleEEELj4ENS_15CrashOnOverflowEEEEaSERKNS_10PassOwnPtrIS7_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = i1 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i2 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i3 >> 2] = i2;
 if ((i4 | 0) == 0) {
  return i1 | 0;
 }
 i2 = i4 + 8 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i5 = i4 | 0;
 if ((i3 | 0) != 0) {
  i6 = HEAP32[i5 >> 2] | 0;
  i7 = i6 + (i3 << 2) | 0;
  i3 = i6;
  while (1) {
   i6 = HEAP32[i3 >> 2] | 0;
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
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i7 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i5 >> 2] | 0;
 if (!((i4 + 12 | 0) == (i2 | 0) | (i2 | 0) == 0)) {
  HEAP32[i5 >> 2] = 0;
  HEAP32[i4 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 __ZN3WTF8fastFreeEPv(i4);
 return i1 | 0;
}
function __ZN3WTF6OwnPtrIN7WebCore13AnimationListEEaSERKNS_10PassOwnPtrIS2_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = i1 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i2 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i3 >> 2] = i2;
 if ((i4 | 0) == 0) {
  return i1 | 0;
 }
 i2 = i4 + 8 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i5 = i4 | 0;
 if ((i3 | 0) != 0) {
  i6 = HEAP32[i5 >> 2] | 0;
  i7 = i6 + (i3 << 2) | 0;
  i3 = i6;
  while (1) {
   i6 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i6 | 0) != 0) {
     i8 = i6 | 0;
     i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     if ((i9 | 0) == 0) {
      __ZN7WebCore9AnimationD1Ev(i6);
      __ZN3WTF8fastFreeEPv(i6);
      break;
     } else {
      HEAP32[i8 >> 2] = i9;
      break;
     }
    }
   } while (0);
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i7 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i5 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i5 >> 2] = 0;
  HEAP32[i4 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 __ZN3WTF8fastFreeEPv(i4);
 return i1 | 0;
}
function __ZNK7WebCore11RenderStyle23getShadowVerticalExtentEPKNS_10ShadowDataERNS_10LayoutUnitES5_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i1 | 0;
 i6 = i1 + 8 | 0;
 i7 = i3 | 0;
 HEAP32[i7 >> 2] = 0;
 i8 = i4 | 0;
 HEAP32[i8 >> 2] = 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i1;
  return;
 }
 i9 = i5;
 i10 = i6;
 i11 = i2;
 while (1) {
  if ((HEAP32[i11 + 24 >> 2] | 0) != 1) {
   i2 = ~~+Math_ceil(+(HEAP32[i11 + 8 >> 2] | 0) * 1.399999976158142);
   i12 = i2 + (HEAP32[i11 + 12 >> 2] | 0) | 0;
   i2 = i11 + 4 | 0;
   i13 = (HEAP32[i2 >> 2] | 0) - i12 | 0;
   HEAP32[i5 >> 2] = i13;
   HEAP32[i7 >> 2] = HEAP32[((i13 | 0) < (HEAP32[i7 >> 2] | 0) ? i9 : i3) >> 2];
   i13 = (HEAP32[i2 >> 2] | 0) + i12 | 0;
   HEAP32[i6 >> 2] = i13;
   HEAP32[i8 >> 2] = HEAP32[((HEAP32[i8 >> 2] | 0) < (i13 | 0) ? i10 : i4) >> 2];
  }
  i11 = HEAP32[i11 + 32 >> 2] | 0;
  if ((i11 | 0) == 0) {
   break;
  }
 }
 STACKTOP = i1;
 return;
}
function __ZN7WebCore11RenderStyle13setLineHeightENS_6LengthE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 28 | 0;
 if (__Z12compareEqualIN7WebCore6LengthES1_EbRKT_RKT0_((HEAP32[i5 >> 2] | 0) + 8 | 0, i2) | 0) {
  STACKTOP = i3;
  return;
 }
 i1 = HEAP32[i5 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i6 = i1;
 } else {
  __ZNK7WebCore18StyleInheritedData4copyEv(i4, i1);
  i1 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  i7 = i4 | 0;
  i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i8 | 0) == 0) {
   __ZN7WebCore18StyleInheritedDataD1Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i7 >> 2] = i8;
  }
  HEAP32[i5 >> 2] = i1;
  i6 = i1;
 }
 i1 = i6 + 8 | 0;
 i6 = i2;
 i2 = i1;
 i5 = HEAP32[i6 >> 2] | 0;
 i8 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = i5;
 HEAP32[i2 + 4 >> 2] = i8;
 if (!((i5 & 0 | 0) == 0 & (i8 & 65280 | 0) == 2560)) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore6Length22incrementCalculatedRefEv(i1);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore11RenderStyle25getShadowHorizontalExtentEPKNS_10ShadowDataERNS_10LayoutUnitES5_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i1 | 0;
 i6 = i1 + 8 | 0;
 i7 = i3 | 0;
 HEAP32[i7 >> 2] = 0;
 i8 = i4 | 0;
 HEAP32[i8 >> 2] = 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i1;
  return;
 }
 i9 = i5;
 i10 = i6;
 i11 = i2;
 while (1) {
  if ((HEAP32[i11 + 24 >> 2] | 0) != 1) {
   i2 = ~~+Math_ceil(+(HEAP32[i11 + 8 >> 2] | 0) * 1.399999976158142);
   i12 = i2 + (HEAP32[i11 + 12 >> 2] | 0) | 0;
   i2 = i11 | 0;
   i13 = (HEAP32[i2 >> 2] | 0) - i12 | 0;
   HEAP32[i5 >> 2] = i13;
   HEAP32[i7 >> 2] = HEAP32[((i13 | 0) < (HEAP32[i7 >> 2] | 0) ? i9 : i3) >> 2];
   i13 = (HEAP32[i2 >> 2] | 0) + i12 | 0;
   HEAP32[i6 >> 2] = i13;
   HEAP32[i8 >> 2] = HEAP32[((HEAP32[i8 >> 2] | 0) < (i13 | 0) ? i10 : i4) >> 2];
  }
  i11 = HEAP32[i11 + 32 >> 2] | 0;
  if ((i11 | 0) == 0) {
   break;
  }
 }
 STACKTOP = i1;
 return;
}
function __ZN7WebCore11RenderStyle19setVisitedLinkColorERKNS_5ColorE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 28 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 i6 = i2;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((HEAP32[i1 + 64 >> 2] | 0) == (i7 | 0)) {
   if ((HEAP8[i1 + 68 | 0] & 1) != 0 ^ ((i7 & 0 | 0) != 0 | (HEAP32[i6 + 4 >> 2] & 1 | 0) != 0)) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i8 = i1;
 } else {
  __ZNK7WebCore18StyleInheritedData4copyEv(i4, i1);
  i1 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  i6 = i4 | 0;
  i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
  if ((i7 | 0) == 0) {
   __ZN7WebCore18StyleInheritedDataD1Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i6 >> 2] = i7;
  }
  HEAP32[i5 >> 2] = i1;
  i8 = i1;
 }
 i1 = i8 + 64 | 0;
 i8 = i2;
 HEAP32[i1 >> 2] = HEAP32[i8 >> 2];
 HEAP8[i1 + 4 | 0] = HEAP8[i8 + 4 | 0] | 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderStyle8setColorERKNS_5ColorE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 28 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 i6 = i2;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((HEAP32[i1 + 56 >> 2] | 0) == (i7 | 0)) {
   if ((HEAP8[i1 + 60 | 0] & 1) != 0 ^ ((i7 & 0 | 0) != 0 | (HEAP32[i6 + 4 >> 2] & 1 | 0) != 0)) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i8 = i1;
 } else {
  __ZNK7WebCore18StyleInheritedData4copyEv(i4, i1);
  i1 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  i6 = i4 | 0;
  i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
  if ((i7 | 0) == 0) {
   __ZN7WebCore18StyleInheritedDataD1Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i6 >> 2] = i7;
  }
  HEAP32[i5 >> 2] = i1;
  i8 = i1;
 }
 i1 = i8 + 56 | 0;
 i8 = i2;
 HEAP32[i1 >> 2] = HEAP32[i8 >> 2];
 HEAP8[i1 + 4 | 0] = HEAP8[i8 + 4 | 0] | 0;
 STACKTOP = i3;
 return;
}
function __ZN3WTF6VectorINS_6RefPtrIN7WebCore11RenderStyleEEELj4ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if (i2 >>> 0 > 4 >>> 0) {
   if (i2 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   } else {
    i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 2) | 0;
    HEAP32[i3 >> 2] = i7 >>> 2;
    i8 = __ZN3WTF10fastMallocEj(i7) | 0;
    HEAP32[i4 >> 2] = i8;
    i9 = i8;
    i10 = i1 + 12 | 0;
    break;
   }
  } else {
   i8 = i1 + 12 | 0;
   HEAP32[i4 >> 2] = i8;
   HEAP32[i3 >> 2] = 4;
   i9 = i8;
   i10 = i8;
  }
 } while (0);
 i1 = i5;
 _memcpy(i9 | 0, i1 | 0, i6 << 2) | 0;
 if ((i10 | 0) == (i5 | 0) | (i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore11RenderStyle23removeCachedPseudoStyleENS_8PseudoIdE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = HEAP32[i1 + 32 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = i3 + 8 | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 i5 = i3 | 0;
 i3 = 0;
 while (1) {
  if (i3 >>> 0 >= i4 >>> 0) {
   i6 = 12;
   break;
  }
  i7 = HEAP32[i5 >> 2] | 0;
  i8 = i7 + (i3 << 2) | 0;
  i9 = HEAP32[i8 >> 2] | 0;
  i3 = i3 + 1 | 0;
  if (((HEAP32[i9 + 52 >> 2] | 0) >>> 6 & 63 | 0) == (i2 | 0)) {
   break;
  }
 }
 if ((i6 | 0) == 12) {
  return;
 }
 do {
  if ((i9 | 0) != 0) {
   i6 = i9 | 0;
   i2 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) == 0) {
    __ZN7WebCore11RenderStyleD2Ev(i9);
    __ZN3WTF8fastFreeEPv(i9);
    break;
   } else {
    HEAP32[i6 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i9 = i7 + (i3 << 2) | 0;
 _memmove(i8 | 0, i9 | 0, (HEAP32[i5 >> 2] | 0) + (HEAP32[i1 >> 2] << 2) - i9 | 0) | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) - 1;
 return;
}
function __ZN3WTF10PassOwnPtrINS_6VectorINS_6RefPtrIN7WebCore11RenderStyleEEELj4ENS_15CrashOnOverflowEEEED2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 8 | 0;
 i3 = HEAP32[i1 >> 2] | 0;
 i4 = i2 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i7 = i5 | 0;
     i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
     if ((i8 | 0) == 0) {
      __ZN7WebCore11RenderStyleD2Ev(i5);
      __ZN3WTF8fastFreeEPv(i5);
      break;
     } else {
      HEAP32[i7 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i1 >> 2] = 0;
 }
 i1 = HEAP32[i4 >> 2] | 0;
 if (!((i2 + 12 | 0) == (i1 | 0) | (i1 | 0) == 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i2 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i1);
 }
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZNK7WebCore11RenderStyle12hyphenStringEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = (HEAP32[i1 + 24 >> 2] | 0) + 96 | 0;
 if ((HEAP32[i5 >> 2] | 0) != 0) {
  i6 = i5;
  STACKTOP = i2;
  return i6 | 0;
 }
 if (!(HEAP8[H_BASE + 192 | 0] | 0)) {
  i5 = __Znwj(4) | 0;
  __ZN3WTF12AtomicString3addEPKtj(i3, H_BASE + 96, 1);
  HEAP32[i5 >> 2] = HEAP32[i3 >> 2];
  HEAP32[H_BASE + 312 >> 2] = i5;
  HEAP8[H_BASE + 192 | 0] = 1;
 }
 if (!(HEAP8[H_BASE + 200 | 0] | 0)) {
  i5 = __Znwj(4) | 0;
  __ZN3WTF12AtomicString3addEPKtj(i4, H_BASE + 40, 1);
  HEAP32[i5 >> 2] = HEAP32[i4 >> 2];
  HEAP32[H_BASE + 320 >> 2] = i5;
  HEAP8[H_BASE + 200 | 0] = 1;
 }
 i5 = __ZNK7WebCore4Font31primaryFontHasGlyphForCharacterEi((HEAP32[i1 + 28 >> 2] | 0) + 16 | 0, 8208) | 0;
 i6 = i5 ? HEAP32[H_BASE + 320 >> 2] | 0 : HEAP32[H_BASE + 312 >> 2] | 0;
 STACKTOP = i2;
 return i6 | 0;
}
function __ZN3WTF6OwnPtrIN7WebCore13AnimationListEE5clearEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i2 = i1 + 8 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i7 = i5 | 0;
     i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
     if ((i8 | 0) == 0) {
      __ZN7WebCore9AnimationD1Ev(i5);
      __ZN3WTF8fastFreeEPv(i5);
      break;
     } else {
      HEAP32[i7 >> 2] = i8;
      break;
     }
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
  HEAP32[i1 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZNK7WebCore11RenderStyle17inheritedNotEqualEPKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = i1 + 40 | 0;
 i4 = i2 + 40 | 0;
 if (((HEAP32[i4 >> 2] ^ HEAP32[i3 >> 2]) & 2147483647 | 0) != 0) {
  i5 = 1;
  return i5 | 0;
 }
 if (((HEAP32[i4 + 4 >> 2] ^ HEAP32[i3 + 4 >> 2]) & 32767 | 0) != 0) {
  i5 = 1;
  return i5 | 0;
 }
 i3 = HEAP32[i1 + 28 >> 2] | 0;
 i4 = HEAP32[i2 + 28 >> 2] | 0;
 do {
  if ((i3 | 0) != (i4 | 0)) {
   if (__ZNK7WebCore18StyleInheritedDataeqERKS0_(i3, i4) | 0) {
    break;
   } else {
    i5 = 1;
   }
   return i5 | 0;
  }
 } while (0);
 if (__ZNK7WebCore14SVGRenderStyle17inheritedNotEqualEPKS0_(HEAP32[i1 + 36 >> 2] | 0, HEAP32[i2 + 36 >> 2] | 0) | 0) {
  i5 = 1;
  return i5 | 0;
 }
 i4 = HEAP32[i1 + 24 >> 2] | 0;
 i1 = HEAP32[i2 + 24 >> 2] | 0;
 if ((i4 | 0) == (i1 | 0)) {
  i5 = 0;
  return i5 | 0;
 }
 i5 = (__ZNK7WebCore22StyleRareInheritedDataeqERKS0_(i4, i1) | 0) ^ 1;
 return i5 | 0;
}
function __ZN3WTF10PassOwnPtrIN7WebCore13AnimationListEED2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 8 | 0;
 i3 = HEAP32[i1 >> 2] | 0;
 i4 = i2 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i7 = i5 | 0;
     i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
     if ((i8 | 0) == 0) {
      __ZN7WebCore9AnimationD1Ev(i5);
      __ZN3WTF8fastFreeEPv(i5);
      break;
     } else {
      HEAP32[i7 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i1 >> 2] = 0;
 }
 i1 = HEAP32[i4 >> 2] | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i2 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i1);
 }
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore11RenderStyle12clearContentEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 20 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 if ((HEAP32[i1 + 88 >> 2] | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i5 = i1;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i3, i1);
  i1 = HEAP32[i3 >> 2] | 0;
  i3 = HEAP32[i4 >> 2] | 0;
  i6 = i3 | 0;
  i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
  if ((i7 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i3);
   __ZN3WTF8fastFreeEPv(i3);
  } else {
   HEAP32[i6 >> 2] = i7;
  }
  HEAP32[i4 >> 2] = i1;
  i5 = i1;
 }
 i1 = i5 + 88 | 0;
 i5 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 1](i5);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore11RenderStyle26getFontAndGlyphOrientationERNS_15FontOrientationERNS_22NonCJKGlyphOrientationE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = (HEAP32[i1 + 44 >> 2] | 0) >>> 13 & 3;
 if ((i4 | 0) == 3 | (i4 | 0) == 0) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
  return;
 }
 i5 = (HEAP32[(HEAP32[i1 + 24 >> 2] | 0) + 88 >> 2] | 0) >>> 28 & 3;
 if ((i5 | 0) == 3) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
  return;
 } else if ((i5 | 0) == 1) {
  HEAP32[i2 >> 2] = 1;
  HEAP32[i3 >> 2] = 1;
  return;
 } else if ((i5 | 0) == 2) {
  if ((i4 | 0) == 2) {
   HEAP32[i2 >> 2] = 1;
   HEAP32[i3 >> 2] = 0;
   return;
  } else {
   HEAP32[i2 >> 2] = 0;
   HEAP32[i3 >> 2] = 0;
   return;
  }
 } else if ((i5 | 0) == 0) {
  HEAP32[i2 >> 2] = 1;
  HEAP32[i3 >> 2] = 0;
  return;
 } else {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
  return;
 }
}
function __ZN3WTF6VectorINS_6RefPtrIN7WebCore9AnimationEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZNK7WebCore11RenderStyle21transitionForPropertyENS_13CSSPropertyIDE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 112 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i1 = HEAP32[i3 + 8 >> 2] | 0;
 i5 = i3 | 0;
 i3 = 0;
 while (1) {
  if (i3 >>> 0 >= i1 >>> 0) {
   i4 = 0;
   i6 = 7;
   break;
  }
  i7 = HEAP32[(HEAP32[i5 >> 2] | 0) + (i3 << 2) >> 2] | 0;
  if ((HEAP32[i7 + 12 >> 2] | 0) == 0) {
   i4 = i7;
   i6 = 9;
   break;
  }
  if ((HEAP32[i7 + 8 >> 2] | 0) == (i2 | 0)) {
   i4 = i7;
   i6 = 10;
   break;
  } else {
   i3 = i3 + 1 | 0;
  }
 }
 if ((i6 | 0) == 7) {
  return i4 | 0;
 } else if ((i6 | 0) == 10) {
  return i4 | 0;
 } else if ((i6 | 0) == 9) {
  return i4 | 0;
 }
 return 0;
}
function __ZNK7WebCore11RenderStyle20getCachedPseudoStyleENS_8PseudoIdE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = HEAP32[i1 + 32 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = HEAP32[i3 + 8 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 if ((HEAP32[i1 + 52 >> 2] & 4032 | 0) != 0) {
  i4 = 0;
  return i4 | 0;
 }
 i1 = i3 | 0;
 i3 = 0;
 while (1) {
  if (i3 >>> 0 >= i5 >>> 0) {
   i4 = 0;
   i6 = 11;
   break;
  }
  i7 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i3 << 2) >> 2] | 0;
  if (((HEAP32[i7 + 52 >> 2] | 0) >>> 6 & 63 | 0) == (i2 | 0)) {
   i4 = i7;
   i6 = 12;
   break;
  } else {
   i3 = i3 + 1 | 0;
  }
 }
 if ((i6 | 0) == 11) {
  return i4 | 0;
 } else if ((i6 | 0) == 12) {
  return i4 | 0;
 }
 return 0;
}
function __ZN7WebCore11RenderStyle26setHorizontalBorderSpacingEs(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 28 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 if ((HEAP16[i1 + 4 >> 1] | 0) == i2 << 16 >> 16) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i6 = i1;
 } else {
  __ZNK7WebCore18StyleInheritedData4copyEv(i4, i1);
  i1 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  i7 = i4 | 0;
  i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i8 | 0) == 0) {
   __ZN7WebCore18StyleInheritedDataD1Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i7 >> 2] = i8;
  }
  HEAP32[i5 >> 2] = i1;
  i6 = i1;
 }
 HEAP16[i6 + 4 >> 1] = i2;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderStyle24setVerticalBorderSpacingEs(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 28 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 if ((HEAP16[i1 + 6 >> 1] | 0) == i2 << 16 >> 16) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i6 = i1;
 } else {
  __ZNK7WebCore18StyleInheritedData4copyEv(i4, i1);
  i1 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  i7 = i4 | 0;
  i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i8 | 0) == 0) {
   __ZN7WebCore18StyleInheritedDataD1Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i7 >> 2] = i8;
  }
  HEAP32[i5 >> 2] = i1;
  i6 = i1;
 }
 HEAP16[i6 + 6 >> 1] = i2;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore11RenderStyle34changeRequiresPositionedLayoutOnlyEPKS0_Rj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i3 = i1 + 48 | 0;
 if ((HEAP32[i3 >> 2] & 29360128 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = i1 + 16 | 0;
 i6 = i2 + 16 | 0;
 do {
  if (!(__ZNK7WebCore9LengthBoxeqERKS0_((HEAP32[i5 >> 2] | 0) + 4 | 0, (HEAP32[i6 >> 2] | 0) + 4 | 0) | 0)) {
   if ((HEAP32[i3 >> 2] & 29360128 | 0) != 8388608) {
    break;
   }
   if (__ZN7WebCoreL28positionChangeIsMovementOnlyERKNS_9LengthBoxES2_RKNS_6LengthE((HEAP32[i5 >> 2] | 0) + 4 | 0, (HEAP32[i6 >> 2] | 0) + 4 | 0, (HEAP32[i1 + 4 >> 2] | 0) + 4 | 0) | 0) {
    i4 = 1;
   } else {
    break;
   }
   return i4 | 0;
  }
 } while (0);
 i4 = 0;
 return i4 | 0;
}
function __ZN7WebCore11RenderStyle16setLetterSpacingEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 28 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i6 = i1;
  i7 = i6 + 44 | 0;
  HEAPF32[i7 >> 2] = d2;
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore18StyleInheritedData4copyEv(i4, i1);
 i1 = HEAP32[i4 >> 2] | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 i8 = i4 | 0;
 i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 if ((i9 | 0) == 0) {
  __ZN7WebCore18StyleInheritedDataD1Ev(i4);
  __ZN3WTF8fastFreeEPv(i4);
 } else {
  HEAP32[i8 >> 2] = i9;
 }
 HEAP32[i5 >> 2] = i1;
 i6 = i1;
 i7 = i6 + 44 | 0;
 HEAPF32[i7 >> 2] = d2;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderStyle14setWordSpacingEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 28 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i6 = i1;
  i7 = i6 + 48 | 0;
  HEAPF32[i7 >> 2] = d2;
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore18StyleInheritedData4copyEv(i4, i1);
 i1 = HEAP32[i4 >> 2] | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 i8 = i4 | 0;
 i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 if ((i9 | 0) == 0) {
  __ZN7WebCore18StyleInheritedDataD1Ev(i4);
  __ZN3WTF8fastFreeEPv(i4);
 } else {
  HEAP32[i8 >> 2] = i9;
 }
 HEAP32[i5 >> 2] = i1;
 i6 = i1;
 i7 = i6 + 48 | 0;
 HEAPF32[i7 >> 2] = d2;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore11RenderStyle20hasUniquePseudoStyleEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP32[i1 + 52 >> 2] & 4032 | 0) != 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = HEAP32[i2 + 8 >> 2] | 0;
 i4 = i2 | 0;
 i2 = 0;
 while (1) {
  if (i2 >>> 0 >= i1 >>> 0) {
   i3 = 0;
   i5 = 7;
   break;
  }
  if ((HEAP32[(HEAP32[(HEAP32[i4 >> 2] | 0) + (i2 << 2) >> 2] | 0) + 52 >> 2] & 1048576 | 0) == 0) {
   i2 = i2 + 1 | 0;
  } else {
   i3 = 1;
   i5 = 9;
   break;
  }
 }
 if ((i5 | 0) == 9) {
  return i3 | 0;
 } else if ((i5 | 0) == 7) {
  return i3 | 0;
 }
 return 0;
}
function __ZNK7WebCore11RenderStyle19inheritedDataSharedEPKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = i1 + 40 | 0;
 i4 = i2 + 40 | 0;
 if (((HEAP32[i4 >> 2] ^ HEAP32[i3 >> 2]) & 2147483647 | 0) != 0) {
  i5 = 0;
  return i5 | 0;
 }
 if (((HEAP32[i4 + 4 >> 2] ^ HEAP32[i3 + 4 >> 2]) & 32767 | 0) != 0) {
  i5 = 0;
  return i5 | 0;
 }
 if ((HEAP32[i1 + 28 >> 2] | 0) != (HEAP32[i2 + 28 >> 2] | 0)) {
  i5 = 0;
  return i5 | 0;
 }
 if ((HEAP32[i1 + 36 >> 2] | 0) != (HEAP32[i2 + 36 >> 2] | 0)) {
  i5 = 0;
  return i5 | 0;
 }
 i5 = (HEAP32[i1 + 24 >> 2] | 0) == (HEAP32[i2 + 24 >> 2] | 0);
 return i5 | 0;
}
function __ZNK7WebCore11RenderStyle12borderBeforeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = (HEAP32[i1 + 44 >> 2] | 0) >>> 13 & 3;
 if ((i2 | 0) == 1) {
  i3 = (HEAP32[i1 + 16 >> 2] | 0) + 108 | 0;
  return i3 | 0;
 } else if ((i2 | 0) == 0) {
  i3 = (HEAP32[i1 + 16 >> 2] | 0) + 116 | 0;
  return i3 | 0;
 } else if ((i2 | 0) == 3) {
  i3 = (HEAP32[i1 + 16 >> 2] | 0) + 124 | 0;
  return i3 | 0;
 } else if ((i2 | 0) == 2) {
  i3 = (HEAP32[i1 + 16 >> 2] | 0) + 100 | 0;
  return i3 | 0;
 } else {
  i3 = (HEAP32[i1 + 16 >> 2] | 0) + 116 | 0;
  return i3 | 0;
 }
 return 0;
}
function __ZNK7WebCore11RenderStyle11borderAfterEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = (HEAP32[i1 + 44 >> 2] | 0) >>> 13 & 3;
 if ((i2 | 0) == 0) {
  i3 = (HEAP32[i1 + 16 >> 2] | 0) + 124 | 0;
  return i3 | 0;
 } else if ((i2 | 0) == 1) {
  i3 = (HEAP32[i1 + 16 >> 2] | 0) + 100 | 0;
  return i3 | 0;
 } else if ((i2 | 0) == 3) {
  i3 = (HEAP32[i1 + 16 >> 2] | 0) + 116 | 0;
  return i3 | 0;
 } else if ((i2 | 0) == 2) {
  i3 = (HEAP32[i1 + 16 >> 2] | 0) + 108 | 0;
  return i3 | 0;
 } else {
  i3 = (HEAP32[i1 + 16 >> 2] | 0) + 124 | 0;
  return i3 | 0;
 }
 return 0;
}
function __ZNK7WebCore11RenderStyle26hasEntirelyFixedBackgroundEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = (HEAP32[i1 + 12 >> 2] | 0) + 4 | 0;
 if ((i2 | 0) == 0) {
  i3 = 1;
 } else {
  i1 = 1;
  i4 = i2;
  while (1) {
   if ((HEAP32[i4 + 4 >> 2] | 0) == 0) {
    i5 = 0;
   } else {
    i5 = (HEAP32[i4 + 40 >> 2] & 3 | 0) == 2 | 0;
   }
   i6 = (i5 & (i1 & 1) | 0) != 0;
   i7 = HEAP32[i4 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i3 = i6;
    break;
   } else {
    i1 = i6;
    i4 = i7;
   }
  }
 }
 return i3 & (i2 | 0) != 0 | 0;
}
function __ZNK7WebCore11RenderStyle11fontMetricsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = HEAP32[i1 + 28 >> 2] | 0;
 i1 = HEAP32[i2 + 40 >> 2] | 0;
 i3 = i1 + 44 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i5 = i4;
  i6 = i5 + 12 | 0;
  return i6 | 0;
 }
 i4 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i1, i2 + 16 | 0, 0) | 0;
 i2 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] & 1](i4, 32) | 0;
 HEAP32[i3 >> 2] = i2;
 i5 = i2;
 i6 = i5 + 12 | 0;
 return i6 | 0;
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
function __ZNK7WebCore11RenderStyle11borderStartEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = (HEAP32[i1 + 44 >> 2] | 0) >>> 13 & 3;
 i3 = (HEAP32[i1 + 40 >> 2] & 1073741824 | 0) != 0;
 if ((i2 | 0) == 3 | (i2 | 0) == 0) {
  i2 = HEAP32[i1 + 16 >> 2] | 0;
  if (i3) {
   i4 = i2 + 100 | 0;
   return i4 | 0;
  } else {
   i4 = i2 + 108 | 0;
   return i4 | 0;
  }
 } else {
  i2 = HEAP32[i1 + 16 >> 2] | 0;
  if (i3) {
   i4 = i2 + 116 | 0;
   return i4 | 0;
  } else {
   i4 = i2 + 124 | 0;
   return i4 | 0;
  }
 }
 return 0;
}
function __ZNK7WebCore11RenderStyle9borderEndEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = (HEAP32[i1 + 44 >> 2] | 0) >>> 13 & 3;
 i3 = (HEAP32[i1 + 40 >> 2] & 1073741824 | 0) != 0;
 if ((i2 | 0) == 3 | (i2 | 0) == 0) {
  i2 = HEAP32[i1 + 16 >> 2] | 0;
  if (i3) {
   i4 = i2 + 108 | 0;
   return i4 | 0;
  } else {
   i4 = i2 + 100 | 0;
   return i4 | 0;
  }
 } else {
  i2 = HEAP32[i1 + 16 >> 2] | 0;
  if (i3) {
   i4 = i2 + 124 | 0;
   return i4 | 0;
  } else {
   i4 = i2 + 116 | 0;
   return i4 | 0;
  }
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
function __ZN7WebCore11RenderStyle31createAnonymousStyleWithDisplayEPKS0_NS_8EDisplayE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 __ZN7WebCore11RenderStyle6createEv(i1);
 i4 = HEAP32[i1 >> 2] | 0;
 __ZN7WebCore11RenderStyle11inheritFromEPKS0_NS0_18IsAtShadowBoundaryE(i4, i2, 1);
 i1 = i4 + 48 | 0;
 HEAP32[i1 >> 2] = HEAP32[i1 >> 2] & -1879048224 | HEAP32[i2 + 48 >> 2] & 1879048192 | i3 & 31;
 return;
}
function __ZN7WebCore11RenderStyle23initialDashboardRegionsEv() {
 var i1 = 0, i2 = 0, i3 = 0;
 if (HEAP8[H_BASE + 208 | 0] | 0) {
  i1 = HEAP32[H_BASE + 336 >> 2] | 0;
  return i1 | 0;
 } else {
  i2 = __ZN3WTF10fastMallocEj(12) | 0;
  i3 = i2;
  HEAP32[i2 >> 2] = 0;
  HEAP32[i2 + 4 >> 2] = 0;
  HEAP32[i2 + 8 >> 2] = 0;
  HEAP32[H_BASE + 336 >> 2] = i3;
  HEAP8[H_BASE + 208 | 0] = 1;
  i1 = i3;
  return i1 | 0;
 }
 return 0;
}
function __ZNK7WebCore11RenderStyle10lineHeightEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = (HEAP32[i2 + 28 >> 2] | 0) + 8 | 0;
 i2 = i1;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = i4;
 HEAP32[i2 + 4 >> 2] = i5;
 if (!((i4 & 0 | 0) == 0 & (i5 & 65280 | 0) == 2560)) {
  return;
 }
 __ZNK7WebCore6Length22incrementCalculatedRefEv(i1);
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
function __ZNK7WebCore11RenderStyle16textEmphasisMarkEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = (HEAP32[(HEAP32[i1 + 24 >> 2] | 0) + 88 >> 2] | 0) >>> 24 & 7;
 if ((i2 | 0) != 1) {
  i3 = i2;
  return i3 | 0;
 }
 i2 = (HEAP32[i1 + 44 >> 2] | 0) >>> 13 & 3;
 i3 = (i2 | 0) == 0 | (i2 | 0) == 3 ? 2 : 6;
 return i3 | 0;
}
function __ZNK7WebCore11RenderStyle16visitedLinkColorEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = (HEAP32[i2 + 28 >> 2] | 0) + 64 | 0;
 i2 = i1;
 i1 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i2 + 4 >> 2] = i1;
 return;
}
function __ZN3WTF6OwnPtrIN7WebCore10ShadowDataEED2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 } else {
  __ZN3WTF6OwnPtrIN7WebCore10ShadowDataEED2Ev(i2 + 32 | 0);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 }
}
function __ZNK7WebCore11RenderStyle5colorEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = (HEAP32[i2 + 28 >> 2] | 0) + 56 | 0;
 i2 = i1;
 i1 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i2 + 4 >> 2] = i1;
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZNK7WebCore11RenderStyle19diffRequiresRepaintEPKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore11RenderStyle21changeRequiresRepaintEPKS0_Rj(i1, i2, 0) | 0;
}
function __ZNK7WebCore11RenderStyle16isStyleAvailableEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[__ZN7WebCore13StyleResolver22s_styleNotYetAvailableE >> 2] | 0) != (i1 | 0) | 0;
}
function dynCall_iiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0) | 0;
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function __ZNK7WebCore11RenderStyle23horizontalBorderSpacingEv(i1) {
 i1 = i1 | 0;
 return HEAP16[(HEAP32[i1 + 28 >> 2] | 0) + 4 >> 1] | 0;
}
function __ZNK7WebCore11RenderStyle21verticalBorderSpacingEv(i1) {
 i1 = i1 | 0;
 return HEAP16[(HEAP32[i1 + 28 >> 2] | 0) + 6 >> 1] | 0;
}
function __ZNK7WebCore11RenderStyle8fontSizeEv(i1) {
 i1 = i1 | 0;
 return ~~(+HEAPF32[(HEAP32[i1 + 28 >> 2] | 0) + 28 >> 2] + +.5) | 0;
}
function __ZNK7WebCore11RenderStyle17specifiedFontSizeEv(i1) {
 i1 = i1 | 0;
 return +(+HEAPF32[(HEAP32[i1 + 28 >> 2] | 0) + 24 >> 2]);
}
function __ZNK7WebCore11RenderStyle17counterDirectivesEv(i1) {
 i1 = i1 | 0;
 return HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 92 >> 2] | 0;
}
function __ZNK7WebCore11RenderStyle16computedFontSizeEv(i1) {
 i1 = i1 | 0;
 return +(+HEAPF32[(HEAP32[i1 + 28 >> 2] | 0) + 28 >> 2]);
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 1](i2 | 0, i3 | 0) | 0;
}
function __ZNK7WebCore11RenderStyle13letterSpacingEv(i1) {
 i1 = i1 | 0;
 return +(+HEAPF32[(HEAP32[i1 + 28 >> 2] | 0) + 44 >> 2]);
}
function __ZNK7WebCore11RenderStyle14listStyleImageEv(i1) {
 i1 = i1 | 0;
 return HEAP32[(HEAP32[i1 + 24 >> 2] | 0) + 4 >> 2] | 0;
}
function __ZNK7WebCore11RenderStyle11wordSpacingEv(i1) {
 i1 = i1 | 0;
 return +(+HEAPF32[(HEAP32[i1 + 28 >> 2] | 0) + 48 >> 2]);
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
function __ZNK7WebCore11RenderStyle19specifiedLineHeightEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 28 >> 2] | 0) + 8 | 0;
}
function __ZNK7WebCore11RenderStyle15fontDescriptionEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 28 >> 2] | 0) + 16 | 0;
}
function __ZNK7WebCore11RenderStyle14contentAltTextEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 20 >> 2] | 0) + 96 | 0;
}
function __ZNK7WebCore11RenderStyle4fontEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 28 >> 2] | 0) + 16 | 0;
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
function b0(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(0);
 return 0;
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
function b1(i1) {
 i1 = i1 | 0;
 abort(1);
}
function b3() {
 abort(3);
}
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_iiii = [b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_iii = [b4,b4];
  return { _memmove: _memmove, _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_iiii: dynCall_iiii, dynCall_vi: dynCall_vi, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_iiii": invoke_iiii, "invoke_vi": invoke_vi, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_ceilf": _ceilf, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_malloc": _malloc, "_free": _free, "_round": _round, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZTVN7WebCore16QuoteContentDataE": __ZTVN7WebCore16QuoteContentDataE, "__ZN3WTF8nullAtomE": __ZN3WTF8nullAtomE, "__ZTVN7WebCore18CounterContentDataE": __ZTVN7WebCore18CounterContentDataE, "__ZN7WebCore13StyleResolver22s_styleNotYetAvailableE": __ZN7WebCore13StyleResolver22s_styleNotYetAvailableE, "__ZTVN7WebCore15TextContentDataE": __ZTVN7WebCore15TextContentDataE, "__ZTVN7WebCore16ImageContentDataE": __ZTVN7WebCore16ImageContentDataE, "__ZTVN7WebCore23ScaleTransformOperationE": __ZTVN7WebCore23ScaleTransformOperationE }, buffer);
var _memmove = Module["_memmove"] = asm["_memmove"];
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZNK7WebCore11RenderStyle12borderBeforeEv","__ZN7WebCore11RenderStyle14setWordSpacingEf","__ZN7WebCore11RenderStyle11inheritFromEPKS0_NS0_18IsAtShadowBoundaryE","__ZN3WTF6VectorIN7WebCore20StyleDashboardRegionELj0ENS_15CrashOnOverflowEE14appendSlowCaseIRS2_EEvOT_","__ZN7WebCore11RenderStyle15clearCursorListEv","__ZN7WebCore11RenderStyle20copyNonInheritedFromEPKS0_","__ZNK7WebCore11RenderStyle14contentAltTextEv","__ZNK7WebCore11RenderStyle14applyTransformERNS_20TransformationMatrixERKNS_9FloatRectENS0_20ApplyTransformOriginE","__ZNK7WebCore11RenderStyleeqERKS0_","__ZN7WebCore11RenderStyle21setPageScaleTransformEf","__ZN7WebCore15FontDescriptionC2ERKS0_","_memcpy","__ZNK7WebCore11RenderStyle30changeRequiresRecompositeLayerEPKS0_Rj","__ZN7WebCoreL28positionChangeIsMovementOnlyERKNS_9LengthBoxES2_RKNS_6LengthE","__ZN7WebCore11RenderStyle20setBorderImageOutsetENS_9LengthBoxE","__ZN7WebCore11RenderStyle17setContentAltTextERKN3WTF6StringE","__ZN7WebCore11RenderStyle18createDefaultStyleEv","__ZN7WebCore11RenderStyle17accessTransitionsEv","__ZN3WTF6OwnPtrINS_6VectorINS_6RefPtrIN7WebCore11RenderStyleEEELj4ENS_15CrashOnOverflowEEEEaSERKNS_10PassOwnPtrIS7_EE","__ZN3WTF10PassOwnPtrINS_6VectorINS_6RefPtrIN7WebCore11RenderStyleEEELj4ENS_15CrashOnOverflowEEEED2Ev","__ZNK7WebCore11RenderStyle19inheritedDataSharedEPKS0_","__ZNK7WebCore11RenderStyle9borderEndEv","__ZN3WTF6VectorINS_6RefPtrIN7WebCore9AnimationEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore10BorderDataD2Ev","__ZNK7WebCore11RenderStyle16computedFontSizeEv","__ZNK7WebCore11RenderStyle4diffEPKS0_Rj","__ZN7WebCore11RenderStyle16accessAnimationsEv","__ZNK7WebCore11RenderStyle15getShadowExtentEPKNS_10ShadowDataERNS_10LayoutUnitES5_S5_S5_","__ZN7WebCore11RenderStyle9addCursorEN3WTF10PassRefPtrINS_10StyleImageEEERKNS_8IntPointE","__ZN7WebCore17StyleSurroundDataD2Ev","__ZN7WebCore11RenderStyle18setFontDescriptionERKNS_15FontDescriptionE","__ZNK7WebCore11RenderStyle21visitedDependentColorEi","__ZNK7WebCore11RenderStyle12hyphenStringEv","__ZNK7WebCore11RenderStyle24getRoundedInnerBorderForERKNS_10LayoutRectEiiiibb","__ZN7WebCore11RenderStyle12clearContentEv","__ZN7WebCore11RenderStyle13appendContentENSt3__110unique_ptrINS_11ContentDataENS1_14default_deleteIS3_EEEE","__ZN7WebCore11RenderStyle19setBorderImageWidthENS_9LengthBoxE","__ZN3WTF13tryMakeStringINS_6StringES1_EENS_10PassRefPtrINS_10StringImplEEET_T0_","__Z12compareEqualIN7WebCore19TransformOperationsES1_EbRKT_RKT0_","__ZN7WebCore11RenderStyle13setColumnAxisENS_10ColumnAxisE","__ZNK3WTF12StringAppendINS_6StringES1_EcvS1_Ev","__ZN7WebCore11RenderStyle20addCachedPseudoStyleEN3WTF10PassRefPtrIS0_EE","__ZNK7WebCore11RenderStyle16borderStartWidthEv","__ZN7WebCore11RenderStyle10setContentEN3WTF10PassRefPtrINS_10StyleImageEEEb","__ZN7WebCore10FontGlyphsD2Ev","__ZNK7WebCore11RenderStyle20getCounterDirectivesERKN3WTF12AtomicStringE","__ZN7WebCore11RenderStyle19setTransformOriginXENS_6LengthE","__ZN7WebCore11RenderStyle7setClipENS_6LengthES1_S1_S1_","__ZN3WTF6VectorINS_6RefPtrIN7WebCore11RenderStyleEEELj4ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN7WebCore11RenderStyle10setContentENSt3__110unique_ptrINS_14CounterContentENS1_14default_deleteIS3_EEEEb","__ZN7WebCore11RenderStyle31createAnonymousStyleWithDisplayEPKS0_NS_8EDisplayE","__ZNK7WebCore11RenderStyle20getShadowInsetExtentEPKNS_10ShadowDataE","__ZN7WebCore11RenderStyle20setColumnProgressionENS_17ColumnProgressionE","__ZN3WTF6VectorINS_6RefPtrIN7WebCore9AnimationEEELj0ENS_15CrashOnOverflowEE6resizeEj","__ZN7WebCore11RenderStyle23initialDashboardRegionsEv","__ZN7WebCore12StyleBoxDataD2Ev","__ZN3WTF6VectorINS_6RefPtrIN7WebCore18TransformOperationEEELj0ENS_15CrashOnOverflowEEaSERKS6_","__ZN7WebCore11RenderStyleD2Ev","__ZN7WebCore7DataRefINS_18StyleTransformDataEE6accessEv","__ZNK7WebCore11RenderStyle14borderEndWidthEv","__ZNK7WebCore11RenderStyle21transitionForPropertyENS_13CSSPropertyIDE","__ZNK7WebCore11RenderStyle17borderBeforeWidthEv","__ZNK7WebCore9LengthBoxeqERKS0_","__ZNK7WebCore11RenderStyle16isStyleAvailableEv","__ZNK7WebCore11RenderStyle19getRoundedBorderForERKNS_10LayoutRectEPNS_10RenderViewEbb","__ZNK7WebCore11RenderStyle23horizontalBorderSpacingEv","__ZNK7WebCore11RenderStyle10lineHeightEv","__ZNK7WebCore11RenderStyle16visitedLinkColorEv","__ZNK7WebCore11RenderStyle20hasUniquePseudoStyleEv","__ZN7WebCore11RenderStyle13setLineHeightENS_6LengthE","__ZN7WebCore11RenderStyle20setBorderImageSlicesENS_9LengthBoxE","__ZNK7WebCore11RenderStyle17specifiedFontSizeEv","__ZN3WTFeqINS_12AtomicStringEN7WebCore17CounterDirectivesENS_16AtomicStringHashENS_10HashTraitsIS1_EENS5_IS3_EEEEbRKNS_7HashMapIT_T0_T1_T2_T3_EESG_","__Z12compareEqualIN7WebCore6LengthES1_EbRKT_RKT0_","__ZNK7WebCore11RenderStyle21changeRequiresRepaintEPKS0_Rj","__ZN3WTF6VectorIN7WebCore20StyleDashboardRegionELj0ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN7WebCore11RenderStyle20noneDashboardRegionsEv","__ZNK7WebCore11RenderStyle20getCachedPseudoStyleENS_8PseudoIdE","__ZNK7WebCore11RenderStyle24getRoundedInnerBorderForERKNS_10LayoutRectEbb","__ZNK7WebCore11RenderStyle14applyTransformERNS_20TransformationMatrixERKNS_10LayoutSizeENS0_20ApplyTransformOriginE","__ZN3WTF6OwnPtrIN7WebCore13AnimationListEE5clearEv","_memset","__ZN3WTF6VectorIN7WebCore10CursorDataELj0ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZNK7WebCore11RenderStyle26changeRequiresLayerRepaintEPKS0_Rj","__ZN3WTF10PassOwnPtrIN7WebCore13AnimationListEED2Ev","__ZN7WebCore11RenderStyle16setLetterSpacingEf","__ZNK7WebCore11RenderStyle34changeRequiresPositionedLayoutOnlyEPKS0_Rj","__ZN7WebCore11RenderStyle17setListStyleImageEN3WTF10PassRefPtrINS_10StyleImageEEE","__ZN7WebCore11RenderStyle12setBoxShadowEN3WTF10PassOwnPtrINS_10ShadowDataEEEb","__ZN7WebCore11RenderStyle19setVisitedLinkColorERKNS_5ColorE","__ZNK7WebCore11RenderStyle11borderStartEv","__ZN7WebCore11RenderStyle8setColorERKNS_5ColorE","__ZN7WebCore11RenderStyle16adjustAnimationsEv","__ZNK7WebCore11RenderStyle19diffRequiresRepaintEPKS0_","__ZN7WebCore11RenderStyle19setTransformOriginYENS_6LengthE","__ZNK7WebCore11RenderStyle16borderAfterWidthEv","__ZN7WebCore11RenderStyle9setQuotesEN3WTF10PassRefPtrINS_10QuotesDataEEE","__ZNK7WebCore11RenderStyle4fontEv","__ZNK7WebCore11RenderStyle17counterDirectivesEv","__ZN7WebCore11RenderStyle23removeCachedPseudoStyleENS_8PseudoIdE","__ZN7WebCore11RenderStyle11setFontSizeEf","__ZNK7WebCore11RenderStyle20changeRequiresLayoutEPKS0_Rj","__ZNK7WebCore11RenderStyle11fontMetricsEv","__ZNK7WebCore10BorderDataeqERKS0_","__ZNK7WebCore11RenderStyle15fontDescriptionEv","__ZN7WebCore11RenderStyle12setMarginEndENS_6LengthE","__ZN7WebCore11RenderStyle26setHorizontalBorderSpacingEs","__ZN7WebCore11RenderStyle5cloneEPKS0_","__ZNK7WebCore11RenderStyle17inheritedNotEqualEPKS0_","__ZN7WebCore11RenderStyle17adjustTransitionsEv","__ZNK7WebCore11RenderStyle23getShadowVerticalExtentEPKNS_10ShadowDataERNS_10LayoutUnitES5_","__ZNK7WebCore11RenderStyle5colorEv","__ZNK7WebCore11RenderStyle12imageOutsetsERKNS_14NinePieceImageE","__ZN3WTF6OwnPtrIN7WebCore13AnimationListEEaSERKNS_10PassOwnPtrIS2_EE","__ZNK7WebCore11RenderStyle13letterSpacingEv","__ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv","__ZNK7WebCore11RenderStyle25getShadowHorizontalExtentEPKNS_10ShadowDataERNS_10LayoutUnitES5_","__ZN7WebCore11RenderStyle23accessCounterDirectivesEv","__ZNK7WebCore11RenderStyle8fontSizeEv","__ZN7WebCore15FontDescriptionD2Ev","__ZN3WTF6OwnPtrIN7WebCore10ShadowDataEED2Ev","__ZNK7WebCore11RenderStyle16textEmphasisMarkEv","__ZN7WebCore11RenderStyle33setColumnStylesFromPaginationModeERKNS_10Pagination4ModeE","__ZNK7WebCore11RenderStyle14listStyleImageEv","__ZNK7WebCore11RenderStyle18computedLineHeightEPNS_10RenderViewE","__ZN7WebCore11RenderStyle13setCursorListEN3WTF10PassRefPtrINS_10CursorListEEE","__ZN7WebCore11RenderStyle14setMarginStartENS_6LengthE","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore11RenderStyle26getFontAndGlyphOrientationERNS_15FontOrientationERNS_22NonCJKGlyphOrientationE","__ZN7WebCore11RenderStyle24setVerticalBorderSpacingEs","__ZN7WebCore11RenderStyle13setTextShadowEN3WTF10PassOwnPtrINS_10ShadowDataEEEb","__ZNK7WebCore10LengthSizeeqERKS0_","__ZN7WebCore11RenderStyle12setTransformERKNS_19TransformOperationsE","__ZN7WebCore10CursorList6appendERKNS_10CursorDataE","__ZN7WebCore11RenderStyle10setContentERKN3WTF6StringEb","__ZN7WebCore11RenderStyle20setBorderImageSourceEN3WTF10PassRefPtrINS_10StyleImageEEE","__ZN7WebCore11RenderStyle6createEv","__ZNK7WebCore11RenderStyle26hasEntirelyFixedBackgroundEv","__ZNK7WebCore11RenderStyle19specifiedLineHeightEv","__ZN7WebCore11RenderStyle10setContentENS_9QuoteTypeEb","__ZNK7WebCore11RenderStyle11borderAfterEv","_memmove","__ZNK7WebCore11RenderStyle44changeRequiresRepaintIfTextOrBorderOrOutlineEPKS0_Rj","__ZNK7WebCore11RenderStyle21verticalBorderSpacingEv","__ZNK7WebCore11RenderStyle22textEmphasisMarkStringEv","__ZNK7WebCore11RenderStyle11wordSpacingEv","__ZNK7WebCore11RenderStyle22colorIncludingFallbackEib"]

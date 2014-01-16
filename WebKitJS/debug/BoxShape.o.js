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
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
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
  var __ZTVN7WebCore8BoxShapeE=(H_BASE+8)|0;
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
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZNK7WebCore8BoxShape20getExcludedIntervalsENS_10LayoutUnitES1_RN3WTF6VectorINS_11LineSegmentELj0ENS2_15CrashOnOverflowEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, d16 = +0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, d22 = +0, d23 = +0, d24 = +0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, d29 = +0, d30 = +0, d31 = +0, d32 = +0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, d37 = +0, d38 = +0, d39 = +0, d40 = +0, i41 = 0, i42 = 0, i43 = 0, i44 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i6 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i2 >> 2] = HEAP32[i6 >> 2];
 i6 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i6 >> 2];
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 i8 = i5 + 64 | 0;
 i9 = i8;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i11 = i10;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i15 = i14;
 _memcpy(i7 | 0, i1 + 16 | 0, 48) | 0;
 d16 = +HEAPF32[i1 + 8 >> 2];
 if (d16 > +0) {
  i17 = i7 | 0;
  HEAPF32[i17 >> 2] = +HEAPF32[i17 >> 2] - d16;
  i17 = i7 + 8 | 0;
  HEAPF32[i17 >> 2] = d16 + (d16 + +HEAPF32[i17 >> 2]);
  i18 = i7 + 4 | 0;
  HEAPF32[i18 >> 2] = +HEAPF32[i18 >> 2] - d16;
  i18 = i7 + 12 | 0;
  HEAPF32[i18 >> 2] = d16 + (d16 + +HEAPF32[i18 >> 2]);
  __ZN7WebCore16FloatRoundedRect5Radii6expandEffff(i7 + 16 | 0, d16, d16, d16, d16);
  i19 = i17;
 } else {
  i19 = i7 + 8 | 0;
 }
 if (+HEAPF32[i19 >> 2] <= +0) {
  STACKTOP = i5;
  return;
 }
 i17 = i7 + 12 | 0;
 if (+HEAPF32[i17 >> 2] <= +0) {
  STACKTOP = i5;
  return;
 }
 i18 = HEAP32[i2 >> 2] | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] & 7](i6, i1 | 0);
 if ((HEAP32[i6 + 8 >> 2] | 0) < 1) {
  STACKTOP = i5;
  return;
 }
 i1 = HEAP32[i6 + 12 >> 2] | 0;
 if ((i1 | 0) < 1) {
  STACKTOP = i5;
  return;
 }
 i3 = HEAP32[i6 + 4 >> 2] | 0;
 if ((i18 | 0) < (i3 + i1 | 0)) {
  i1 = i2 + i18 | 0;
  if ((i1 | 0) > (i3 | 0)) {
   i20 = i1;
  } else {
   i21 = 10;
  }
 } else {
  i21 = 10;
 }
 do {
  if ((i21 | 0) == 10) {
   if ((i2 | 0) == 0 & (i18 | 0) == (i3 | 0)) {
    i20 = i2 + i18 | 0;
    break;
   } else {
    STACKTOP = i5;
    return;
   }
  }
 } while (0);
 d16 = +(i18 | 0);
 d22 = +(i20 | 0);
 if (__ZNK7WebCore16FloatRoundedRect5Radii6isZeroEv(i7 + 16 | 0) | 0) {
  d23 = +HEAPF32[i7 >> 2];
  d24 = d23 + +HEAPF32[i19 >> 2];
  do {
   if (d23 < +2147483647) {
    if (d23 <= +-2147483648) {
     i25 = -2147483648;
     break;
    }
    i25 = ~~d23;
   } else {
    i25 = 2147483647;
   }
  } while (0);
  HEAP32[i8 >> 2] = i25;
  do {
   if (d24 < +2147483647) {
    if (d24 <= +-2147483648) {
     i26 = -2147483648;
     break;
    }
    i26 = ~~d24;
   } else {
    i26 = 2147483647;
   }
  } while (0);
  HEAP32[i9 + 4 >> 2] = i26;
  i26 = i4 + 8 | 0;
  i25 = HEAP32[i26 >> 2] | 0;
  if ((i25 | 0) != (HEAP32[i4 + 4 >> 2] | 0)) {
   i20 = (HEAP32[i4 >> 2] | 0) + (i25 << 3) | 0;
   i18 = HEAP32[i8 + 4 >> 2] | 0;
   HEAP32[i20 >> 2] = HEAP32[i8 >> 2];
   HEAP32[i20 + 4 >> 2] = i18;
   HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 1;
   STACKTOP = i5;
   return;
  }
  i18 = i25 + 1 | 0;
  i20 = i4 | 0;
  i2 = HEAP32[i20 >> 2] | 0;
  do {
   if (i2 >>> 0 > i9 >>> 0) {
    i21 = 23;
   } else {
    if ((i2 + (i25 << 3) | 0) >>> 0 <= i9 >>> 0) {
     i21 = 23;
     break;
    }
    __ZN3WTF6VectorIN7WebCore11LineSegmentELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i4, i18);
    i3 = HEAP32[i20 >> 2] | 0;
    i27 = i3 + (i8 - i2 >> 3 << 3) | 0;
    i28 = i3;
   }
  } while (0);
  if ((i21 | 0) == 23) {
   __ZN3WTF6VectorIN7WebCore11LineSegmentELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i4, i18);
   i27 = i9;
   i28 = HEAP32[i20 >> 2] | 0;
  }
  i20 = i27;
  i27 = i28 + (HEAP32[i26 >> 2] << 3) | 0;
  i28 = HEAP32[i20 + 4 >> 2] | 0;
  HEAP32[i27 >> 2] = HEAP32[i20 >> 2];
  HEAP32[i27 + 4 >> 2] = i28;
  HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 1;
  STACKTOP = i5;
  return;
 }
 d24 = +HEAPF32[i7 + 4 >> 2];
 d23 = d24 + +HEAPF32[i7 + 20 >> 2];
 d29 = d24 + +HEAPF32[i7 + 28 >> 2];
 d30 = d24 + +HEAPF32[i17 >> 2];
 d24 = d30 - +HEAPF32[i7 + 36 >> 2];
 d31 = d30 - +HEAPF32[i7 + 44 >> 2];
 do {
  if (d16 <= (d23 < d29 ? d29 : d23)) {
   if (d22 < (d31 < d24 ? d31 : d24)) {
    break;
   }
   d30 = +HEAPF32[i7 >> 2];
   d32 = d30 + +HEAPF32[i19 >> 2];
   do {
    if (d30 < +2147483647) {
     if (d30 <= +-2147483648) {
      i33 = -2147483648;
      break;
     }
     i33 = ~~d30;
    } else {
     i33 = 2147483647;
    }
   } while (0);
   HEAP32[i10 >> 2] = i33;
   do {
    if (d32 < +2147483647) {
     if (d32 <= +-2147483648) {
      i34 = -2147483648;
      break;
     }
     i34 = ~~d32;
    } else {
     i34 = 2147483647;
    }
   } while (0);
   HEAP32[i11 + 4 >> 2] = i34;
   i17 = i4 + 8 | 0;
   i26 = HEAP32[i17 >> 2] | 0;
   if ((i26 | 0) != (HEAP32[i4 + 4 >> 2] | 0)) {
    i28 = (HEAP32[i4 >> 2] | 0) + (i26 << 3) | 0;
    i27 = HEAP32[i10 + 4 >> 2] | 0;
    HEAP32[i28 >> 2] = HEAP32[i10 >> 2];
    HEAP32[i28 + 4 >> 2] = i27;
    HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
    STACKTOP = i5;
    return;
   }
   i27 = i26 + 1 | 0;
   i28 = i4 | 0;
   i20 = HEAP32[i28 >> 2] | 0;
   do {
    if (i20 >>> 0 > i11 >>> 0) {
     i21 = 38;
    } else {
     if ((i20 + (i26 << 3) | 0) >>> 0 <= i11 >>> 0) {
      i21 = 38;
      break;
     }
     __ZN3WTF6VectorIN7WebCore11LineSegmentELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i4, i27);
     i9 = HEAP32[i28 >> 2] | 0;
     i35 = i9 + (i10 - i20 >> 3 << 3) | 0;
     i36 = i9;
    }
   } while (0);
   if ((i21 | 0) == 38) {
    __ZN3WTF6VectorIN7WebCore11LineSegmentELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i4, i27);
    i35 = i11;
    i36 = HEAP32[i28 >> 2] | 0;
   }
   i20 = i35;
   i26 = i36 + (HEAP32[i17 >> 2] << 3) | 0;
   i9 = HEAP32[i20 + 4 >> 2] | 0;
   HEAP32[i26 >> 2] = HEAP32[i20 >> 2];
   HEAP32[i26 + 4 >> 2] = i9;
   HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
   STACKTOP = i5;
   return;
  }
 } while (0);
 d24 = +HEAPF32[i7 >> 2];
 d31 = d24 + +HEAPF32[i19 >> 2];
 if (__ZNK7WebCore16FloatRoundedRect14xInterceptsAtYEfRfS1_(i7, d16, i12, i13) | 0) {
  d16 = +HEAPF32[i12 >> 2];
  d23 = +HEAPF32[i13 >> 2];
  d37 = d16 < d31 ? d16 : d31;
  d38 = d24 < d23 ? d23 : d24;
 } else {
  d37 = d31;
  d38 = d24;
 }
 if (__ZNK7WebCore16FloatRoundedRect14xInterceptsAtYEfRfS1_(i7, d22, i12, i13) | 0) {
  d22 = +HEAPF32[i12 >> 2];
  d24 = +HEAPF32[i13 >> 2];
  d39 = d22 < d37 ? d22 : d37;
  d40 = d38 < d24 ? d24 : d38;
 } else {
  d39 = d37;
  d40 = d38;
 }
 do {
  if (d39 < +2147483647) {
   if (d39 <= +-2147483648) {
    i41 = -2147483648;
    break;
   }
   i41 = ~~d39;
  } else {
   i41 = 2147483647;
  }
 } while (0);
 HEAP32[i14 >> 2] = i41;
 do {
  if (d40 < +2147483647) {
   if (d40 <= +-2147483648) {
    i42 = -2147483648;
    break;
   }
   i42 = ~~d40;
  } else {
   i42 = 2147483647;
  }
 } while (0);
 HEAP32[i15 + 4 >> 2] = i42;
 i42 = i4 + 8 | 0;
 i41 = HEAP32[i42 >> 2] | 0;
 if ((i41 | 0) != (HEAP32[i4 + 4 >> 2] | 0)) {
  i13 = (HEAP32[i4 >> 2] | 0) + (i41 << 3) | 0;
  i12 = HEAP32[i14 + 4 >> 2] | 0;
  HEAP32[i13 >> 2] = HEAP32[i14 >> 2];
  HEAP32[i13 + 4 >> 2] = i12;
  HEAP32[i42 >> 2] = (HEAP32[i42 >> 2] | 0) + 1;
  STACKTOP = i5;
  return;
 }
 i12 = i41 + 1 | 0;
 i13 = i4 | 0;
 i7 = HEAP32[i13 >> 2] | 0;
 do {
  if (i7 >>> 0 > i15 >>> 0) {
   i21 = 55;
  } else {
   if ((i7 + (i41 << 3) | 0) >>> 0 <= i15 >>> 0) {
    i21 = 55;
    break;
   }
   __ZN3WTF6VectorIN7WebCore11LineSegmentELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i4, i12);
   i19 = HEAP32[i13 >> 2] | 0;
   i43 = i19 + (i14 - i7 >> 3 << 3) | 0;
   i44 = i19;
  }
 } while (0);
 if ((i21 | 0) == 55) {
  __ZN3WTF6VectorIN7WebCore11LineSegmentELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i4, i12);
  i43 = i15;
  i44 = HEAP32[i13 >> 2] | 0;
 }
 i13 = i43;
 i43 = i44 + (HEAP32[i42 >> 2] << 3) | 0;
 i44 = HEAP32[i13 + 4 >> 2] | 0;
 HEAP32[i43 >> 2] = HEAP32[i13 >> 2];
 HEAP32[i43 + 4 >> 2] = i44;
 HEAP32[i42 >> 2] = (HEAP32[i42 >> 2] | 0) + 1;
 STACKTOP = i5;
 return;
}
function __ZNK7WebCore8BoxShape20getIncludedIntervalsENS_10LayoutUnitES1_RN3WTF6VectorINS_11LineSegmentELj0ENS2_15CrashOnOverflowEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, d13 = +0, i14 = 0, d15 = +0, i16 = 0, d17 = +0, d18 = +0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, d24 = +0, d25 = +0, d26 = +0, d27 = +0, d28 = +0, i29 = 0, i30 = 0, i31 = 0, i32 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i6 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i2 >> 2] = HEAP32[i6 >> 2];
 i6 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i6 >> 2];
 i6 = i5 | 0;
 i7 = i5 + 48 | 0;
 i8 = i7;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i12 = i11;
 _memcpy(i6 | 0, i1 + 16 | 0, 48) | 0;
 d13 = +HEAPF32[i1 + 12 >> 2];
 if (d13 > +0) {
  i1 = i6 | 0;
  HEAPF32[i1 >> 2] = d13 + +HEAPF32[i1 >> 2];
  i1 = i6 + 8 | 0;
  HEAPF32[i1 >> 2] = +HEAPF32[i1 >> 2] - d13 - d13;
  i14 = i6 + 4 | 0;
  HEAPF32[i14 >> 2] = d13 + +HEAPF32[i14 >> 2];
  i14 = i6 + 12 | 0;
  HEAPF32[i14 >> 2] = +HEAPF32[i14 >> 2] - d13 - d13;
  d15 = +-0 - d13;
  __ZN7WebCore16FloatRoundedRect5Radii6expandEffff(i6 + 16 | 0, d15, d15, d15, d15);
  i16 = i1;
 } else {
  i16 = i6 + 8 | 0;
 }
 if (+HEAPF32[i16 >> 2] <= +0) {
  STACKTOP = i5;
  return;
 }
 d15 = +HEAPF32[i6 + 12 >> 2];
 if (d15 <= +0) {
  STACKTOP = i5;
  return;
 }
 i1 = HEAP32[i2 >> 2] | 0;
 d13 = +(i1 | 0);
 d17 = +((HEAP32[i3 >> 2] | 0) + i1 | 0);
 d18 = +HEAPF32[i6 + 4 >> 2];
 if (d13 < d18) {
  STACKTOP = i5;
  return;
 }
 if (d17 > d18 + d15) {
  STACKTOP = i5;
  return;
 }
 i1 = __ZNK7WebCore16FloatRoundedRect5Radii6isZeroEv(i6 + 16 | 0) | 0;
 d15 = +HEAPF32[i6 >> 2];
 d18 = d15 + +HEAPF32[i16 >> 2];
 if (i1) {
  do {
   if (d15 < +2147483647) {
    if (d15 <= +-2147483648) {
     i19 = -2147483648;
     break;
    }
    i19 = ~~d15;
   } else {
    i19 = 2147483647;
   }
  } while (0);
  HEAP32[i7 >> 2] = i19;
  do {
   if (d18 < +2147483647) {
    if (d18 <= +-2147483648) {
     i20 = -2147483648;
     break;
    }
    i20 = ~~d18;
   } else {
    i20 = 2147483647;
   }
  } while (0);
  HEAP32[i8 + 4 >> 2] = i20;
  i20 = i4 + 8 | 0;
  i19 = HEAP32[i20 >> 2] | 0;
  if ((i19 | 0) != (HEAP32[i4 + 4 >> 2] | 0)) {
   i1 = (HEAP32[i4 >> 2] | 0) + (i19 << 3) | 0;
   i16 = HEAP32[i7 + 4 >> 2] | 0;
   HEAP32[i1 >> 2] = HEAP32[i7 >> 2];
   HEAP32[i1 + 4 >> 2] = i16;
   HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
   STACKTOP = i5;
   return;
  }
  i16 = i19 + 1 | 0;
  i1 = i4 | 0;
  i3 = HEAP32[i1 >> 2] | 0;
  do {
   if (i3 >>> 0 > i8 >>> 0) {
    i21 = 19;
   } else {
    if ((i3 + (i19 << 3) | 0) >>> 0 <= i8 >>> 0) {
     i21 = 19;
     break;
    }
    __ZN3WTF6VectorIN7WebCore11LineSegmentELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i4, i16);
    i2 = HEAP32[i1 >> 2] | 0;
    i22 = i2 + (i7 - i3 >> 3 << 3) | 0;
    i23 = i2;
   }
  } while (0);
  if ((i21 | 0) == 19) {
   __ZN3WTF6VectorIN7WebCore11LineSegmentELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i4, i16);
   i22 = i8;
   i23 = HEAP32[i1 >> 2] | 0;
  }
  i1 = i22;
  i22 = i23 + (HEAP32[i20 >> 2] << 3) | 0;
  i23 = HEAP32[i1 + 4 >> 2] | 0;
  HEAP32[i22 >> 2] = HEAP32[i1 >> 2];
  HEAP32[i22 + 4 >> 2] = i23;
  HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
  STACKTOP = i5;
  return;
 }
 if (__ZNK7WebCore16FloatRoundedRect14xInterceptsAtYEfRfS1_(i6, d13, i9, i10) | 0) {
  d13 = +HEAPF32[i9 >> 2];
  d24 = +HEAPF32[i10 >> 2];
  d25 = d15 < d13 ? d13 : d15;
  d26 = d24 < d18 ? d24 : d18;
 } else {
  d25 = d15;
  d26 = d18;
 }
 if (__ZNK7WebCore16FloatRoundedRect14xInterceptsAtYEfRfS1_(i6, d17, i9, i10) | 0) {
  d17 = +HEAPF32[i9 >> 2];
  d18 = +HEAPF32[i10 >> 2];
  d27 = d25 < d17 ? d17 : d25;
  d28 = d18 < d26 ? d18 : d26;
 } else {
  d27 = d25;
  d28 = d26;
 }
 do {
  if (d27 < +2147483647) {
   if (d27 <= +-2147483648) {
    i29 = -2147483648;
    break;
   }
   i29 = ~~d27;
  } else {
   i29 = 2147483647;
  }
 } while (0);
 HEAP32[i11 >> 2] = i29;
 do {
  if (d28 < +2147483647) {
   if (d28 <= +-2147483648) {
    i30 = -2147483648;
    break;
   }
   i30 = ~~d28;
  } else {
   i30 = 2147483647;
  }
 } while (0);
 HEAP32[i12 + 4 >> 2] = i30;
 i30 = i4 + 8 | 0;
 i29 = HEAP32[i30 >> 2] | 0;
 if ((i29 | 0) != (HEAP32[i4 + 4 >> 2] | 0)) {
  i10 = (HEAP32[i4 >> 2] | 0) + (i29 << 3) | 0;
  i9 = HEAP32[i11 + 4 >> 2] | 0;
  HEAP32[i10 >> 2] = HEAP32[i11 >> 2];
  HEAP32[i10 + 4 >> 2] = i9;
  HEAP32[i30 >> 2] = (HEAP32[i30 >> 2] | 0) + 1;
  STACKTOP = i5;
  return;
 }
 i9 = i29 + 1 | 0;
 i10 = i4 | 0;
 i6 = HEAP32[i10 >> 2] | 0;
 do {
  if (i6 >>> 0 > i12 >>> 0) {
   i21 = 36;
  } else {
   if ((i6 + (i29 << 3) | 0) >>> 0 <= i12 >>> 0) {
    i21 = 36;
    break;
   }
   __ZN3WTF6VectorIN7WebCore11LineSegmentELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i4, i9);
   i20 = HEAP32[i10 >> 2] | 0;
   i31 = i20 + (i11 - i6 >> 3 << 3) | 0;
   i32 = i20;
  }
 } while (0);
 if ((i21 | 0) == 36) {
  __ZN3WTF6VectorIN7WebCore11LineSegmentELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i4, i9);
  i31 = i12;
  i32 = HEAP32[i10 >> 2] | 0;
 }
 i10 = i31;
 i31 = i32 + (HEAP32[i30 >> 2] << 3) | 0;
 i32 = HEAP32[i10 + 4 >> 2] | 0;
 HEAP32[i31 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i31 + 4 >> 2] = i32;
 HEAP32[i30 >> 2] = (HEAP32[i30 >> 2] | 0) + 1;
 STACKTOP = i5;
 return;
}
function __ZN3WTF6VectorIN7WebCore11LineSegmentELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
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
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i2 + (i6 << 3) | 0;
 if (i5 >>> 0 > 536870911 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i5 << 3) | 0;
 HEAP32[i3 >> 2] = i7 >>> 3;
 i5 = __ZN3WTF10fastMallocEj(i7) | 0;
 HEAP32[i4 >> 2] = i5;
 if ((i6 | 0) != 0) {
  i6 = i2;
  i7 = i5;
  while (1) {
   i5 = i6;
   i8 = i7;
   i9 = HEAP32[i5 + 4 >> 2] | 0;
   HEAP32[i8 >> 2] = HEAP32[i5 >> 2];
   HEAP32[i8 + 4 >> 2] = i9;
   i9 = i6 + 8 | 0;
   if ((i9 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i9;
    i7 = i7 + 8 | 0;
   }
  }
 }
 if ((i2 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i2 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZNK7WebCore8BoxShape17buildDisplayPathsERNS_5Shape12DisplayPathsE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, d6 = +0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i1 + 16 | 0;
 __ZN7WebCore4Path14addRoundedRectERKNS_9FloatRectERKNS_9FloatSizeES6_S6_S6_NS0_19RoundedRectStrategyE(i2 | 0, i5 | 0, i1 + 32 | 0, i1 + 40 | 0, i1 + 48 | 0, i1 + 56 | 0, 1);
 d6 = +HEAPF32[i1 + 8 >> 2];
 if (d6 == +0) {
  STACKTOP = i3;
  return;
 }
 _memcpy(i4 | 0, i5 | 0, 48) | 0;
 if (d6 > +0) {
  i5 = i4 | 0;
  HEAPF32[i5 >> 2] = +HEAPF32[i5 >> 2] - d6;
  i5 = i4 + 8 | 0;
  HEAPF32[i5 >> 2] = d6 + (d6 + +HEAPF32[i5 >> 2]);
  i5 = i4 + 4 | 0;
  HEAPF32[i5 >> 2] = +HEAPF32[i5 >> 2] - d6;
  i5 = i4 + 12 | 0;
  HEAPF32[i5 >> 2] = d6 + (d6 + +HEAPF32[i5 >> 2]);
  __ZN7WebCore16FloatRoundedRect5Radii6expandEffff(i4 + 16 | 0, d6, d6, d6, d6);
 }
 __ZN7WebCore4Path14addRoundedRectERKNS_9FloatRectERKNS_9FloatSizeES6_S6_S6_NS0_19RoundedRectStrategyE(i2 + 4 | 0, i4 | 0, i4 + 16 | 0, i4 + 24 | 0, i4 + 32 | 0, i4 + 40 | 0, 1);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore8BoxShape29shapeMarginLogicalBoundingBoxEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, d7 = +0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i4;
 i6 = i2 + 16 | 0;
 HEAP32[i5 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i5 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
 HEAP32[i5 + 8 >> 2] = HEAP32[i6 + 8 >> 2];
 HEAP32[i5 + 12 >> 2] = HEAP32[i6 + 12 >> 2];
 d7 = +HEAPF32[i2 + 8 >> 2];
 if (d7 <= +0) {
  __ZN7WebCore10LayoutRectC1ERKNS_9FloatRectE(i1, i4);
  STACKTOP = i3;
  return;
 }
 i2 = i4 | 0;
 HEAPF32[i2 >> 2] = +HEAPF32[i2 >> 2] - d7;
 i2 = i4 + 8 | 0;
 HEAPF32[i2 >> 2] = d7 + (d7 + +HEAPF32[i2 >> 2]);
 i2 = i4 + 4 | 0;
 HEAPF32[i2 >> 2] = +HEAPF32[i2 >> 2] - d7;
 i2 = i4 + 12 | 0;
 HEAPF32[i2 >> 2] = d7 + (d7 + +HEAPF32[i2 >> 2]);
 __ZN7WebCore10LayoutRectC1ERKNS_9FloatRectE(i1, i4);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore8BoxShape30shapePaddingLogicalBoundingBoxEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, d7 = +0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i4;
 i6 = i2 + 16 | 0;
 HEAP32[i5 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i5 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
 HEAP32[i5 + 8 >> 2] = HEAP32[i6 + 8 >> 2];
 HEAP32[i5 + 12 >> 2] = HEAP32[i6 + 12 >> 2];
 d7 = +HEAPF32[i2 + 12 >> 2];
 if (d7 <= +0) {
  __ZN7WebCore10LayoutRectC1ERKNS_9FloatRectE(i1, i4);
  STACKTOP = i3;
  return;
 }
 i2 = i4 | 0;
 HEAPF32[i2 >> 2] = d7 + +HEAPF32[i2 >> 2];
 i2 = i4 + 8 | 0;
 HEAPF32[i2 >> 2] = +HEAPF32[i2 >> 2] - d7 - d7;
 i2 = i4 + 4 | 0;
 HEAPF32[i2 >> 2] = d7 + +HEAPF32[i2 >> 2];
 i2 = i4 + 12 | 0;
 HEAPF32[i2 >> 2] = +HEAPF32[i2 >> 2] - d7 - d7;
 __ZN7WebCore10LayoutRectC1ERKNS_9FloatRectE(i1, i4);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore8BoxShape18shapePaddingBoundsEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, d4 = +0;
 _memcpy(i1 | 0, i2 + 16 | 0, 48) | 0;
 i3 = i2 + 12 | 0;
 d4 = +HEAPF32[i3 >> 2];
 if (d4 <= +0) {
  return;
 }
 i2 = i1 | 0;
 HEAPF32[i2 >> 2] = d4 + +HEAPF32[i2 >> 2];
 i2 = i1 + 8 | 0;
 HEAPF32[i2 >> 2] = +HEAPF32[i2 >> 2] - d4 - d4;
 i2 = i1 + 4 | 0;
 HEAPF32[i2 >> 2] = d4 + +HEAPF32[i2 >> 2];
 i2 = i1 + 12 | 0;
 HEAPF32[i2 >> 2] = +HEAPF32[i2 >> 2] - d4 - d4;
 d4 = +-0 - +HEAPF32[i3 >> 2];
 __ZN7WebCore16FloatRoundedRect5Radii6expandEffff(i1 + 16 | 0, d4, d4, d4, d4);
 return;
}
function __ZNK7WebCore8BoxShape17shapeMarginBoundsEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, d4 = +0;
 _memcpy(i1 | 0, i2 + 16 | 0, 48) | 0;
 i3 = i2 + 8 | 0;
 d4 = +HEAPF32[i3 >> 2];
 if (d4 <= +0) {
  return;
 }
 i2 = i1 | 0;
 HEAPF32[i2 >> 2] = +HEAPF32[i2 >> 2] - d4;
 i2 = i1 + 8 | 0;
 HEAPF32[i2 >> 2] = d4 + (d4 + +HEAPF32[i2 >> 2]);
 i2 = i1 + 4 | 0;
 HEAPF32[i2 >> 2] = +HEAPF32[i2 >> 2] - d4;
 i2 = i1 + 12 | 0;
 HEAPF32[i2 >> 2] = d4 + (d4 + +HEAPF32[i2 >> 2]);
 d4 = +HEAPF32[i3 >> 2];
 __ZN7WebCore16FloatRoundedRect5Radii6expandEffff(i1 + 16 | 0, d4, d4, d4, d4);
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
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_iiiii + 2;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_vii + 2;
}
function __ZNK7WebCore8BoxShape31firstIncludedIntervalLogicalTopENS_10LayoutUnitERKNS_10LayoutSizeERS1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i3 = STACKTOP;
 i1 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i2 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i4 >> 2] = HEAP32[i2 >> 2];
 STACKTOP = i3;
 return 1;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZNK7WebCore8BoxShape7isEmptyEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if (+HEAPF32[i1 + 24 >> 2] <= +0) {
  i2 = 1;
  return i2 | 0;
 }
 i2 = +HEAPF32[i1 + 28 >> 2] <= +0;
 return i2 | 0;
}
function dynCall_iiiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return FUNCTION_TABLE_iiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
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
function b0(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(0);
 return 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 3](i2 | 0) | 0;
}
function b6(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(6);
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 7](i2 | 0);
}
function __ZN7WebCore8BoxShapeD0Ev(i1) {
 i1 = i1 | 0;
 __ZdlPv(i1);
 return;
}
function b5(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(5);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
}
function __ZN7WebCore8BoxShapeD1Ev(i1) {
 i1 = i1 | 0;
 return;
}
function b2(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(2);
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
function b3(i1) {
 i1 = i1 | 0;
 abort(3);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b1(i1) {
 i1 = i1 | 0;
 abort(1);
}
function b4() {
 abort(4);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_iiiii = [b0,b0,__ZNK7WebCore8BoxShape31firstIncludedIntervalLogicalTopENS_10LayoutUnitERKNS_10LayoutSizeERS1_,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore8BoxShapeD1Ev,b1,__ZN7WebCore8BoxShapeD0Ev,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,__ZNK7WebCore8BoxShape17buildDisplayPathsERNS_5Shape12DisplayPathsE,b2,__ZNK7WebCore8BoxShape30shapePaddingLogicalBoundingBoxEv,b2,__ZNK7WebCore8BoxShape29shapeMarginLogicalBoundingBoxEv,b2];
  var FUNCTION_TABLE_ii = [b3,b3,__ZNK7WebCore8BoxShape7isEmptyEv,b3];
  var FUNCTION_TABLE_v = [b4,b4];
  var FUNCTION_TABLE_iii = [b5,b5];
  var FUNCTION_TABLE_viiii = [b6,b6,__ZNK7WebCore8BoxShape20getIncludedIntervalsENS_10LayoutUnitES1_RN3WTF6VectorINS_11LineSegmentELj0ENS2_15CrashOnOverflowEEE,b6,__ZNK7WebCore8BoxShape20getExcludedIntervalsENS_10LayoutUnitES1_RN3WTF6VectorINS_11LineSegmentELj0ENS2_15CrashOnOverflowEEE,b6,b6,b6];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_iiiii: dynCall_iiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_iiiii": invoke_iiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_iiiii = Module["dynCall_iiiii"] = asm["dynCall_iiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZNK7WebCore8BoxShape17buildDisplayPathsERNS_5Shape12DisplayPathsE","_strlen","__ZN7WebCore8BoxShapeD1Ev","__ZN3WTF6VectorIN7WebCore11LineSegmentELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZNK7WebCore8BoxShape31firstIncludedIntervalLogicalTopENS_10LayoutUnitERKNS_10LayoutSizeERS1_","__ZNK7WebCore8BoxShape30shapePaddingLogicalBoundingBoxEv","_memset","__ZNK7WebCore8BoxShape17shapeMarginBoundsEv","_memcpy","__ZNK7WebCore8BoxShape18shapePaddingBoundsEv","__ZN7WebCore8BoxShapeD0Ev","__ZNK7WebCore8BoxShape20getIncludedIntervalsENS_10LayoutUnitES1_RN3WTF6VectorINS_11LineSegmentELj0ENS2_15CrashOnOverflowEEE","__ZNK7WebCore8BoxShape29shapeMarginLogicalBoundingBoxEv","__ZNK7WebCore8BoxShape7isEmptyEv","__ZNK7WebCore8BoxShape20getExcludedIntervalsENS_10LayoutUnitES1_RN3WTF6VectorINS_11LineSegmentELj0ENS2_15CrashOnOverflowEEE"]

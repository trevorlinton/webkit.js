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
var __ZN7WebCore16SimpleLineLayout6LayoutC1ERKN3WTF6VectorINS0_3RunELj10ENS2_15CrashOnOverflowEEEj;
/* memory initializer */ allocate([32,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_fiiiifii(index,a1,a2,a3,a4,a5,a6,a7) {
  try {
    return Module["dynCall_fiiiifii"](index,a1,a2,a3,a4,a5,a6,a7);
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
  var __ZN7WebCore19asciiLineBreakTableE=env.__ZN7WebCore19asciiLineBreakTableE|0;
  var __ZN7WebCore9HTMLNames8wrapAttrE=env.__ZN7WebCore9HTMLNames8wrapAttrE|0;
  var __ZN7WebCore7TextRun21s_allowsRoundingHacksE=env.__ZN7WebCore7TextRun21s_allowsRoundingHacksE|0;
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
  var invoke_fiiiifii=env.invoke_fiiiifii;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _llvm_uadd_with_overflow_i32=env._llvm_uadd_with_overflow_i32;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore16SimpleLineLayout14createLineRunsIhEEN3WTF6VectorINS0_3RunELj4ENS2_15CrashOnOverflowEEEjRNS_9LineWidthERNS_21LazyLineBreakIteratorERKNS0_5StyleEPKT_jRKNS_10RenderTextE(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 var i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, d38 = +0, d39 = +0, d40 = +0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i10 = i9 | 0;
 i11 = i9 + 16 | 0;
 i12 = i1 + 12 | 0;
 i13 = i1 | 0;
 HEAP32[i13 >> 2] = i12;
 i14 = i1 + 4 | 0;
 HEAP32[i14 >> 2] = 4;
 i15 = i1 + 8 | 0;
 HEAP32[i12 >> 2] = i2;
 HEAP32[i1 + 16 >> 2] = i2 & 2147483647;
 HEAPF32[i1 + 20 >> 2] = +0;
 HEAPF32[i1 + 24 >> 2] = +0;
 HEAP32[i15 >> 2] = 1;
 if (i2 >>> 0 >= i7 >>> 0) {
  STACKTOP = i9;
  return;
 }
 i12 = i5 + 9 | 0;
 i16 = i5 + 8 | 0;
 i17 = i3 + 8 | 0;
 i18 = i5 + 12 | 0;
 i19 = i3 + 4 | 0;
 i20 = i5 + 10 | 0;
 i21 = i11 | 0;
 i22 = i11 + 4 | 0;
 i23 = i11 + 8 | 0;
 i24 = i11 + 12 | 0;
 i25 = i11;
 i26 = i11;
 i27 = i5 + 11 | 0;
 i28 = i2;
 L4 : while (1) {
  i29 = (HEAP8[i12] & 1) == 0;
  if (!i29) {
   if ((HEAP8[i6 + i28 | 0] | 0) == 10) {
    i30 = 5;
    break;
   }
  }
  i31 = HEAP8[i16] | 0;
  do {
   if ((i31 & 1) == 0) {
    i32 = HEAP8[i6 + i28 | 0] | 0;
    i33 = i32 & 255;
    if (!((i33 << 16 >> 16 | 0) == 32 | (i33 << 16 >> 16 | 0) == 9)) {
     if (!(i32 << 24 >> 24 == 10 & i29)) {
      i30 = 24;
      break;
     }
    }
    i34 = i28 + 1 | 0;
    i35 = i31;
   } else {
    i30 = 24;
   }
  } while (0);
  if ((i30 | 0) == 24) {
   i30 = 0;
   i31 = __ZN7WebCore21nextBreakablePositionIhLb0EEEiRNS_21LazyLineBreakIteratorEPKT_ji(i4, i6, i7, i28 + 1 | 0) | 0;
   i34 = i31;
   i35 = HEAP8[i16] | 0;
  }
  i31 = (i35 & 1) != 0;
  do {
   if (i31 & i28 >>> 0 > i2 >>> 0) {
    i29 = HEAP8[i6 + (i28 - 1) | 0] | 0;
    i32 = i29 & 255;
    if ((i32 << 16 >> 16 | 0) == 32 | (i32 << 16 >> 16 | 0) == 9) {
     i36 = -1;
     break;
    }
    i36 = (i29 << 24 >> 24 == 10 & (HEAP8[i12] & 1) == 0) << 31 >> 31;
   } else {
    i36 = 0;
   }
  } while (0);
  i37 = i36 + i28 | 0;
  d38 = +HEAPF32[i17 >> 2];
  i29 = i37 + 1 | 0;
  do {
   if ((HEAP8[i6 + i37 | 0] | 0) == 32 & (i29 | 0) == (i34 | 0)) {
    d39 = +HEAPF32[i18 >> 2];
   } else {
    if (!(i31 & i34 >>> 0 < i7 >>> 0)) {
     d39 = +__ZN7WebCore16SimpleLineLayoutL9textWidthIhEEfRKNS_10RenderTextEPKT_jjjfRKNS0_5StyleE(i8, i6, i7, i37, i34, d38, i5);
     break;
    }
    i32 = (HEAP8[i6 + i34 | 0] | 0) == 32;
    d40 = +__ZN7WebCore16SimpleLineLayoutL9textWidthIhEEfRKNS_10RenderTextEPKT_jjjfRKNS0_5StyleE(i8, i6, i7, i37, (i32 & 1) + i34 | 0, d38, i5);
    if (!i32) {
     d39 = d40;
     break;
    }
    d39 = d40 - +HEAPF32[i18 >> 2];
   }
  } while (0);
  HEAPF32[i19 >> 2] = d39 + +HEAPF32[i19 >> 2];
  do {
   if ((HEAP8[i20] & 1) != 0) {
    if (!(__ZNK7WebCore9LineWidth10fitsOnLineEb(i3, 0) | 0)) {
     if (+HEAPF32[i17 >> 2] != +0) {
      i30 = 107;
      break L4;
     }
    }
    if ((HEAP8[i16] & 1) != 0) {
     break;
    }
    if (!((__ZNK7WebCore9LineWidth10fitsOnLineEb(i3, 0) | 0) & i34 >>> 0 < i7 >>> 0)) {
     break;
    }
    i31 = HEAP8[i6 + i34 | 0] | 0;
    i32 = i31 & 255;
    if (!((i32 << 16 >> 16 | 0) == 32 | (i32 << 16 >> 16 | 0) == 9)) {
     if (!(i31 << 24 >> 24 == 10 & (HEAP8[i12] & 1) == 0)) {
      break;
     }
    }
    if (!(__ZNK7WebCore9LineWidth29fitsOnLineIncludingExtraWidthEf(i3, +__ZN7WebCore16SimpleLineLayoutL9textWidthIhEEfRKNS_10RenderTextEPKT_jjjfRKNS0_5StyleE(i8, i6, i7, i34, i34 + 1 | 0, +HEAPF32[i17 >> 2], i5)) | 0)) {
     i30 = 42;
     break L4;
    }
   }
  } while (0);
  i31 = _llvm_uadd_with_overflow_i32(HEAP32[i15 >> 2] | 0, -1 | 0) | 0;
  if (!tempRet0) {
   i30 = 56;
   break;
  }
  i32 = (HEAP32[i13 >> 2] | 0) + (i31 << 4) + 4 | 0;
  i31 = HEAP32[i32 >> 2] | 0;
  do {
   if (i37 >>> 0 > (i31 & 2147483647) >>> 0) {
    HEAP32[i32 >> 2] = i31 + 1 & 2147483647 | i31 & -2147483648;
    i33 = _llvm_uadd_with_overflow_i32(HEAP32[i15 >> 2] | 0, -1 | 0) | 0;
    if (!tempRet0) {
     i30 = 59;
     break L4;
    }
    i41 = (HEAP32[i13 >> 2] | 0) + (i33 << 4) + 12 | 0;
    HEAPF32[i41 >> 2] = +HEAPF32[i18 >> 2] + +HEAPF32[i41 >> 2];
    i41 = HEAP32[i15 >> 2] | 0;
    i33 = _llvm_uadd_with_overflow_i32(i41 | 0, -1 | 0) | 0;
    if (!tempRet0) {
     i30 = 61;
     break L4;
    }
    i42 = HEAP32[i13 >> 2] | 0;
    d38 = +HEAPF32[i42 + (i33 << 4) + 12 >> 2];
    HEAP32[i21 >> 2] = i29;
    HEAP32[i22 >> 2] = i29 & 2147483647;
    HEAPF32[i23 >> 2] = d38;
    HEAPF32[i24 >> 2] = d38;
    if ((i41 | 0) != (HEAP32[i14 >> 2] | 0)) {
     i33 = i42 + (i41 << 4) | 0;
     HEAP32[i33 >> 2] = HEAP32[i26 >> 2];
     HEAP32[i33 + 4 >> 2] = HEAP32[i26 + 4 >> 2];
     HEAP32[i33 + 8 >> 2] = HEAP32[i26 + 8 >> 2];
     HEAP32[i33 + 12 >> 2] = HEAP32[i26 + 12 >> 2];
     HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
     break;
    }
    i33 = i41 + 1 | 0;
    do {
     if (i42 >>> 0 > i11 >>> 0) {
      i30 = 66;
     } else {
      if ((i42 + (i41 << 4) | 0) >>> 0 <= i11 >>> 0) {
       i30 = 66;
       break;
      }
      i43 = i33 + (i41 >>> 2) | 0;
      i44 = i43 >>> 0 > 16 >>> 0 ? i43 : 16;
      __ZN3WTF6VectorIN7WebCore16SimpleLineLayout3RunELj4ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i44 >>> 0 > i33 >>> 0 ? i44 : i33);
      i44 = HEAP32[i13 >> 2] | 0;
      i45 = i44 + (i25 - i42 >> 4 << 4) | 0;
      i46 = i44;
     }
    } while (0);
    if ((i30 | 0) == 66) {
     i30 = 0;
     i42 = i33 + (i41 >>> 2) | 0;
     i44 = i42 >>> 0 > 16 >>> 0 ? i42 : 16;
     __ZN3WTF6VectorIN7WebCore16SimpleLineLayout3RunELj4ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i44 >>> 0 > i33 >>> 0 ? i44 : i33);
     i45 = i11;
     i46 = HEAP32[i13 >> 2] | 0;
    }
    i44 = i46 + (HEAP32[i15 >> 2] << 4) | 0;
    i42 = i45;
    HEAP32[i44 >> 2] = HEAP32[i42 >> 2];
    HEAP32[i44 + 4 >> 2] = HEAP32[i42 + 4 >> 2];
    HEAP32[i44 + 8 >> 2] = HEAP32[i42 + 8 >> 2];
    HEAP32[i44 + 12 >> 2] = HEAP32[i42 + 12 >> 2];
    HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
   }
  } while (0);
  if (!(__ZNK7WebCore9LineWidth10fitsOnLineEb(i3, 0) | 0)) {
   if ((HEAP8[i27] & 1) != 0) {
    i30 = 71;
    break;
   }
  }
  __ZN7WebCore9LineWidth6commitEv(i3);
  i29 = _llvm_uadd_with_overflow_i32(HEAP32[i15 >> 2] | 0, -1 | 0) | 0;
  if (!tempRet0) {
   i30 = 84;
   break;
  }
  HEAPF32[(HEAP32[i13 >> 2] | 0) + (i29 << 4) + 12 >> 2] = +HEAPF32[i17 >> 2];
  i29 = _llvm_uadd_with_overflow_i32(HEAP32[i15 >> 2] | 0, -1 | 0) | 0;
  if (!tempRet0) {
   i30 = 86;
   break;
  }
  i31 = (HEAP32[i13 >> 2] | 0) + (i29 << 4) + 4 | 0;
  HEAP32[i31 >> 2] = HEAP32[i31 >> 2] & -2147483648 | i34 & 2147483647;
  L60 : do {
   if ((HEAP8[i16] & 1) == 0) {
    i47 = i34;
   } else {
    if (i34 >>> 0 >= i7 >>> 0) {
     i47 = i7;
     break;
    }
    if ((HEAP8[i12] & 1) == 0) {
     i48 = i34;
    } else {
     i31 = i34;
     while (1) {
      i29 = HEAPU8[i6 + i31 | 0] | 0;
      if (!((i29 << 16 >> 16 | 0) == 32 | (i29 << 16 >> 16 | 0) == 9)) {
       i47 = i31;
       break L60;
      }
      i29 = i31 + 1 | 0;
      if (i29 >>> 0 < i7 >>> 0) {
       i31 = i29;
      } else {
       i47 = i7;
       break L60;
      }
     }
    }
    while (1) {
     i31 = HEAP8[i6 + i48 | 0] | 0;
     i33 = i31 & 255;
     if (!((i33 << 16 >> 16 | 0) == 32 | (i33 << 16 >> 16 | 0) == 9)) {
      if (i31 << 24 >> 24 != 10) {
       i47 = i48;
       break L60;
      }
     }
     i31 = i48 + 1 | 0;
     if (i31 >>> 0 < i7 >>> 0) {
      i48 = i31;
     } else {
      i47 = i7;
      break;
     }
    }
   }
  } while (0);
  if (__ZNK7WebCore9LineWidth10fitsOnLineEb(i3, 0) | 0) {
   if (i47 >>> 0 < i7 >>> 0) {
    i28 = i47;
    continue;
   } else {
    i30 = 99;
    break;
   }
  } else {
   if ((HEAP8[i20] & 1) == 0 & i47 >>> 0 < i7 >>> 0) {
    i28 = i47;
    continue;
   } else {
    i30 = 100;
    break;
   }
  }
 }
 if ((i30 | 0) == 71) {
  d39 = +HEAPF32[i19 >> 2];
  HEAPF32[i19 >> 2] = d39 - d39;
  L78 : do {
   if (i37 >>> 0 < i34 >>> 0) {
    i47 = i37;
    while (1) {
     i20 = i47 + 1 | 0;
     d39 = +__ZN7WebCore16SimpleLineLayoutL9textWidthIhEEfRKNS_10RenderTextEPKT_jjjfRKNS0_5StyleE(i8, i6, i7, i47, i20, +0, i5);
     HEAPF32[i19 >> 2] = d39 + +HEAPF32[i19 >> 2];
     if (i47 >>> 0 > i2 >>> 0 & ((__ZNK7WebCore9LineWidth10fitsOnLineEb(i3, 0) | 0) ^ 1)) {
      i49 = i47;
      break L78;
     }
     __ZN7WebCore9LineWidth6commitEv(i3);
     if (i20 >>> 0 < i34 >>> 0) {
      i47 = i20;
     } else {
      i49 = i20;
      break;
     }
    }
   } else {
    i49 = i37;
   }
  } while (0);
  i37 = _llvm_uadd_with_overflow_i32(HEAP32[i15 >> 2] | 0, -1 | 0) | 0;
  if (!tempRet0) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
  i19 = (HEAP32[i13 >> 2] | 0) + (i37 << 4) + 4 | 0;
  HEAP32[i19 >> 2] = HEAP32[i19 >> 2] & -2147483648 | i49 & 2147483647;
  i49 = _llvm_uadd_with_overflow_i32(HEAP32[i15 >> 2] | 0, -1 | 0) | 0;
  if (!tempRet0) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
  HEAPF32[(HEAP32[i13 >> 2] | 0) + (i49 << 4) + 12 >> 2] = +HEAPF32[i17 >> 2];
  i17 = _llvm_uadd_with_overflow_i32(HEAP32[i15 >> 2] | 0, -1 | 0) | 0;
  if (!tempRet0) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
  i49 = i17;
  i17 = HEAP32[i13 >> 2] | 0;
  i19 = HEAP32[i17 + (i49 << 4) >> 2] | 0;
  if ((HEAP8[i6 + i19 | 0] | 0) != 32) {
   STACKTOP = i9;
   return;
  }
  if ((i19 + 1 | 0) != (HEAP32[i17 + (i49 << 4) + 4 >> 2] & 2147483647 | 0)) {
   STACKTOP = i9;
   return;
  }
  HEAPF32[i17 + (i49 << 4) + 12 >> 2] = +HEAPF32[i17 + (i49 << 4) + 8 >> 2];
  STACKTOP = i9;
  return;
 } else if ((i30 | 0) == 84) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i30 | 0) == 86) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i30 | 0) == 5) {
  i49 = i28 + 1 | 0;
  i17 = HEAP32[i15 >> 2] | 0;
  do {
   if (i28 >>> 0 > i2 >>> 0) {
    i19 = _llvm_uadd_with_overflow_i32(i17 | 0, -1 | 0) | 0;
    if (!tempRet0) {
     __ZN3WTF15CrashOnOverflow10overflowedEv();
    }
    i37 = HEAP32[i13 >> 2] | 0;
    d39 = +HEAPF32[i37 + (i19 << 4) + 12 >> 2];
    HEAP32[i10 >> 2] = i28;
    HEAP32[i10 + 4 >> 2] = i28 & 2147483647;
    HEAPF32[i10 + 8 >> 2] = d39;
    HEAPF32[i10 + 12 >> 2] = d39;
    if ((i17 | 0) != (HEAP32[i14 >> 2] | 0)) {
     i19 = i37 + (i17 << 4) | 0;
     i5 = i10;
     HEAP32[i19 >> 2] = HEAP32[i5 >> 2];
     HEAP32[i19 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
     HEAP32[i19 + 8 >> 2] = HEAP32[i5 + 8 >> 2];
     HEAP32[i19 + 12 >> 2] = HEAP32[i5 + 12 >> 2];
     i5 = (HEAP32[i15 >> 2] | 0) + 1 | 0;
     HEAP32[i15 >> 2] = i5;
     i50 = i5;
     break;
    }
    i5 = i17 + 1 | 0;
    do {
     if (i37 >>> 0 > i10 >>> 0) {
      i30 = 12;
     } else {
      if ((i37 + (i17 << 4) | 0) >>> 0 <= i10 >>> 0) {
       i30 = 12;
       break;
      }
      i19 = i5 + (i17 >>> 2) | 0;
      i8 = i19 >>> 0 > 16 >>> 0 ? i19 : 16;
      __ZN3WTF6VectorIN7WebCore16SimpleLineLayout3RunELj4ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i8 >>> 0 > i5 >>> 0 ? i8 : i5);
      i8 = HEAP32[i13 >> 2] | 0;
      i51 = i8 + (i10 - i37 >> 4 << 4) | 0;
      i52 = i8;
     }
    } while (0);
    if ((i30 | 0) == 12) {
     i37 = i5 + (i17 >>> 2) | 0;
     i8 = i37 >>> 0 > 16 >>> 0 ? i37 : 16;
     __ZN3WTF6VectorIN7WebCore16SimpleLineLayout3RunELj4ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i8 >>> 0 > i5 >>> 0 ? i8 : i5);
     i51 = i10;
     i52 = HEAP32[i13 >> 2] | 0;
    }
    i8 = i52 + (HEAP32[i15 >> 2] << 4) | 0;
    i37 = i51;
    HEAP32[i8 >> 2] = HEAP32[i37 >> 2];
    HEAP32[i8 + 4 >> 2] = HEAP32[i37 + 4 >> 2];
    HEAP32[i8 + 8 >> 2] = HEAP32[i37 + 8 >> 2];
    HEAP32[i8 + 12 >> 2] = HEAP32[i37 + 12 >> 2];
    i37 = (HEAP32[i15 >> 2] | 0) + 1 | 0;
    HEAP32[i15 >> 2] = i37;
    i50 = i37;
   } else {
    i50 = i17;
   }
  } while (0);
  i17 = _llvm_uadd_with_overflow_i32(i50 | 0, -1 | 0) | 0;
  if (!tempRet0) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
  i50 = i17;
  i17 = HEAP32[i13 >> 2] | 0;
  HEAPF32[i17 + (i50 << 4) + 12 >> 2] = +HEAPF32[i17 + (i50 << 4) + 8 >> 2];
  i50 = _llvm_uadd_with_overflow_i32(HEAP32[i15 >> 2] | 0, -1 | 0) | 0;
  if (!tempRet0) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
  i17 = (HEAP32[i13 >> 2] | 0) + (i50 << 4) + 4 | 0;
  HEAP32[i17 >> 2] = HEAP32[i17 >> 2] & -2147483648 | i49 & 2147483647;
  STACKTOP = i9;
  return;
 } else if ((i30 | 0) == 42) {
  L125 : do {
   if ((HEAP8[i12] & 1) == 0) {
    i49 = i34;
    while (1) {
     i17 = HEAP8[i6 + i49 | 0] | 0;
     i50 = i17 & 255;
     if (!((i50 << 16 >> 16 | 0) == 32 | (i50 << 16 >> 16 | 0) == 9)) {
      if (i17 << 24 >> 24 != 10) {
       i53 = i49;
       i54 = i17;
       i30 = 48;
       break L125;
      }
     }
     i17 = i49 + 1 | 0;
     if (i17 >>> 0 < i7 >>> 0) {
      i49 = i17;
     } else {
      i55 = i7;
      break;
     }
    }
   } else {
    i49 = i34;
    while (1) {
     i5 = HEAP8[i6 + i49 | 0] | 0;
     i17 = i5 & 255;
     if (!((i17 << 16 >> 16 | 0) == 32 | (i17 << 16 >> 16 | 0) == 9)) {
      i53 = i49;
      i54 = i5;
      i30 = 48;
      break L125;
     }
     i5 = i49 + 1 | 0;
     if (i5 >>> 0 < i7 >>> 0) {
      i49 = i5;
     } else {
      i55 = i7;
      break;
     }
    }
   }
  } while (0);
  do {
   if ((i30 | 0) == 48) {
    if (i53 >>> 0 >= i7 >>> 0) {
     i55 = i53;
     break;
    }
    i55 = (i54 << 24 >> 24 == 10) + i53 | 0;
   }
  } while (0);
  i53 = _llvm_uadd_with_overflow_i32(HEAP32[i15 >> 2] | 0, -1 | 0) | 0;
  if (!tempRet0) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
  i54 = (HEAP32[i13 >> 2] | 0) + (i53 << 4) + 4 | 0;
  HEAP32[i54 >> 2] = HEAP32[i54 >> 2] & -2147483648 | i55 & 2147483647;
  i55 = _llvm_uadd_with_overflow_i32(HEAP32[i15 >> 2] | 0, -1 | 0) | 0;
  if (!tempRet0) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
  HEAPF32[(HEAP32[i13 >> 2] | 0) + (i55 << 4) + 12 >> 2] = +HEAPF32[i3 + 32 >> 2];
  STACKTOP = i9;
  return;
 } else if ((i30 | 0) == 56) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i30 | 0) == 59) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i30 | 0) == 61) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i30 | 0) == 99) {
  STACKTOP = i9;
  return;
 } else if ((i30 | 0) == 100) {
  STACKTOP = i9;
  return;
 } else if ((i30 | 0) == 107) {
  STACKTOP = i9;
  return;
 }
}
function __ZN7WebCore16SimpleLineLayout14createLineRunsItEEN3WTF6VectorINS0_3RunELj4ENS2_15CrashOnOverflowEEEjRNS_9LineWidthERNS_21LazyLineBreakIteratorERKNS0_5StyleEPKT_jRKNS_10RenderTextE(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 var i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, d37 = +0, d38 = +0, d39 = +0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i10 = i9 | 0;
 i11 = i9 + 16 | 0;
 i12 = i1 + 12 | 0;
 i13 = i1 | 0;
 HEAP32[i13 >> 2] = i12;
 i14 = i1 + 4 | 0;
 HEAP32[i14 >> 2] = 4;
 i15 = i1 + 8 | 0;
 HEAP32[i12 >> 2] = i2;
 HEAP32[i1 + 16 >> 2] = i2 & 2147483647;
 HEAPF32[i1 + 20 >> 2] = +0;
 HEAPF32[i1 + 24 >> 2] = +0;
 HEAP32[i15 >> 2] = 1;
 if (i2 >>> 0 >= i7 >>> 0) {
  STACKTOP = i9;
  return;
 }
 i12 = i5 + 9 | 0;
 i16 = i5 + 8 | 0;
 i17 = i3 + 8 | 0;
 i18 = i5 + 12 | 0;
 i19 = i3 + 4 | 0;
 i20 = i5 + 10 | 0;
 i21 = i11 | 0;
 i22 = i11 + 4 | 0;
 i23 = i11 + 8 | 0;
 i24 = i11 + 12 | 0;
 i25 = i11;
 i26 = i11;
 i27 = i5 + 11 | 0;
 i28 = i2;
 L4 : while (1) {
  i29 = (HEAP8[i12] & 1) == 0;
  if (!i29) {
   if ((HEAP16[i6 + (i28 << 1) >> 1] | 0) == 10) {
    i30 = 5;
    break;
   }
  }
  i31 = HEAP8[i16] | 0;
  do {
   if ((i31 & 1) == 0) {
    i32 = HEAP16[i6 + (i28 << 1) >> 1] | 0;
    if (!((i32 << 16 >> 16 | 0) == 32 | (i32 << 16 >> 16 | 0) == 9)) {
     if (!(i32 << 16 >> 16 == 10 & i29)) {
      i30 = 24;
      break;
     }
    }
    i33 = i28 + 1 | 0;
    i34 = i31;
   } else {
    i30 = 24;
   }
  } while (0);
  if ((i30 | 0) == 24) {
   i30 = 0;
   i31 = __ZN7WebCore21nextBreakablePositionItLb0EEEiRNS_21LazyLineBreakIteratorEPKT_ji(i4, i6, i7, i28 + 1 | 0) | 0;
   i33 = i31;
   i34 = HEAP8[i16] | 0;
  }
  i31 = (i34 & 1) != 0;
  do {
   if (i31 & i28 >>> 0 > i2 >>> 0) {
    i29 = HEAP16[i6 + (i28 - 1 << 1) >> 1] | 0;
    if ((i29 << 16 >> 16 | 0) == 32 | (i29 << 16 >> 16 | 0) == 9) {
     i35 = -1;
     break;
    }
    i35 = (i29 << 16 >> 16 == 10 & (HEAP8[i12] & 1) == 0) << 31 >> 31;
   } else {
    i35 = 0;
   }
  } while (0);
  i36 = i35 + i28 | 0;
  d37 = +HEAPF32[i17 >> 2];
  i29 = i36 + 1 | 0;
  do {
   if ((HEAP16[i6 + (i36 << 1) >> 1] | 0) == 32 & (i29 | 0) == (i33 | 0)) {
    d38 = +HEAPF32[i18 >> 2];
   } else {
    if (!(i31 & i33 >>> 0 < i7 >>> 0)) {
     d38 = +__ZN7WebCore16SimpleLineLayoutL9textWidthItEEfRKNS_10RenderTextEPKT_jjjfRKNS0_5StyleE(i8, i6, i7, i36, i33, d37, i5);
     break;
    }
    i32 = (HEAP16[i6 + (i33 << 1) >> 1] | 0) == 32;
    d39 = +__ZN7WebCore16SimpleLineLayoutL9textWidthItEEfRKNS_10RenderTextEPKT_jjjfRKNS0_5StyleE(i8, i6, i7, i36, (i32 & 1) + i33 | 0, d37, i5);
    if (!i32) {
     d38 = d39;
     break;
    }
    d38 = d39 - +HEAPF32[i18 >> 2];
   }
  } while (0);
  HEAPF32[i19 >> 2] = d38 + +HEAPF32[i19 >> 2];
  do {
   if ((HEAP8[i20] & 1) != 0) {
    if (!(__ZNK7WebCore9LineWidth10fitsOnLineEb(i3, 0) | 0)) {
     if (+HEAPF32[i17 >> 2] != +0) {
      i30 = 100;
      break L4;
     }
    }
    if ((HEAP8[i16] & 1) != 0) {
     break;
    }
    if (!((__ZNK7WebCore9LineWidth10fitsOnLineEb(i3, 0) | 0) & i33 >>> 0 < i7 >>> 0)) {
     break;
    }
    i31 = HEAP16[i6 + (i33 << 1) >> 1] | 0;
    if (!((i31 << 16 >> 16 | 0) == 32 | (i31 << 16 >> 16 | 0) == 9)) {
     if (!(i31 << 16 >> 16 == 10 & (HEAP8[i12] & 1) == 0)) {
      break;
     }
    }
    if (!(__ZNK7WebCore9LineWidth29fitsOnLineIncludingExtraWidthEf(i3, +__ZN7WebCore16SimpleLineLayoutL9textWidthItEEfRKNS_10RenderTextEPKT_jjjfRKNS0_5StyleE(i8, i6, i7, i33, i33 + 1 | 0, +HEAPF32[i17 >> 2], i5)) | 0)) {
     i30 = 42;
     break L4;
    }
   }
  } while (0);
  i31 = _llvm_uadd_with_overflow_i32(HEAP32[i15 >> 2] | 0, -1 | 0) | 0;
  if (!tempRet0) {
   i30 = 55;
   break;
  }
  i32 = (HEAP32[i13 >> 2] | 0) + (i31 << 4) + 4 | 0;
  i31 = HEAP32[i32 >> 2] | 0;
  do {
   if (i36 >>> 0 > (i31 & 2147483647) >>> 0) {
    HEAP32[i32 >> 2] = i31 + 1 & 2147483647 | i31 & -2147483648;
    i40 = _llvm_uadd_with_overflow_i32(HEAP32[i15 >> 2] | 0, -1 | 0) | 0;
    if (!tempRet0) {
     i30 = 58;
     break L4;
    }
    i41 = (HEAP32[i13 >> 2] | 0) + (i40 << 4) + 12 | 0;
    HEAPF32[i41 >> 2] = +HEAPF32[i18 >> 2] + +HEAPF32[i41 >> 2];
    i41 = HEAP32[i15 >> 2] | 0;
    i40 = _llvm_uadd_with_overflow_i32(i41 | 0, -1 | 0) | 0;
    if (!tempRet0) {
     i30 = 60;
     break L4;
    }
    i42 = HEAP32[i13 >> 2] | 0;
    d37 = +HEAPF32[i42 + (i40 << 4) + 12 >> 2];
    HEAP32[i21 >> 2] = i29;
    HEAP32[i22 >> 2] = i29 & 2147483647;
    HEAPF32[i23 >> 2] = d37;
    HEAPF32[i24 >> 2] = d37;
    if ((i41 | 0) != (HEAP32[i14 >> 2] | 0)) {
     i40 = i42 + (i41 << 4) | 0;
     HEAP32[i40 >> 2] = HEAP32[i26 >> 2];
     HEAP32[i40 + 4 >> 2] = HEAP32[i26 + 4 >> 2];
     HEAP32[i40 + 8 >> 2] = HEAP32[i26 + 8 >> 2];
     HEAP32[i40 + 12 >> 2] = HEAP32[i26 + 12 >> 2];
     HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
     break;
    }
    i40 = i41 + 1 | 0;
    do {
     if (i42 >>> 0 > i11 >>> 0) {
      i30 = 65;
     } else {
      if ((i42 + (i41 << 4) | 0) >>> 0 <= i11 >>> 0) {
       i30 = 65;
       break;
      }
      i43 = i40 + (i41 >>> 2) | 0;
      i44 = i43 >>> 0 > 16 >>> 0 ? i43 : 16;
      __ZN3WTF6VectorIN7WebCore16SimpleLineLayout3RunELj4ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i44 >>> 0 > i40 >>> 0 ? i44 : i40);
      i44 = HEAP32[i13 >> 2] | 0;
      i45 = i44 + (i25 - i42 >> 4 << 4) | 0;
      i46 = i44;
     }
    } while (0);
    if ((i30 | 0) == 65) {
     i30 = 0;
     i42 = i40 + (i41 >>> 2) | 0;
     i44 = i42 >>> 0 > 16 >>> 0 ? i42 : 16;
     __ZN3WTF6VectorIN7WebCore16SimpleLineLayout3RunELj4ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i44 >>> 0 > i40 >>> 0 ? i44 : i40);
     i45 = i11;
     i46 = HEAP32[i13 >> 2] | 0;
    }
    i44 = i46 + (HEAP32[i15 >> 2] << 4) | 0;
    i42 = i45;
    HEAP32[i44 >> 2] = HEAP32[i42 >> 2];
    HEAP32[i44 + 4 >> 2] = HEAP32[i42 + 4 >> 2];
    HEAP32[i44 + 8 >> 2] = HEAP32[i42 + 8 >> 2];
    HEAP32[i44 + 12 >> 2] = HEAP32[i42 + 12 >> 2];
    HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
   }
  } while (0);
  if (!(__ZNK7WebCore9LineWidth10fitsOnLineEb(i3, 0) | 0)) {
   if ((HEAP8[i27] & 1) != 0) {
    i30 = 70;
    break;
   }
  }
  __ZN7WebCore9LineWidth6commitEv(i3);
  i29 = _llvm_uadd_with_overflow_i32(HEAP32[i15 >> 2] | 0, -1 | 0) | 0;
  if (!tempRet0) {
   i30 = 83;
   break;
  }
  HEAPF32[(HEAP32[i13 >> 2] | 0) + (i29 << 4) + 12 >> 2] = +HEAPF32[i17 >> 2];
  i29 = _llvm_uadd_with_overflow_i32(HEAP32[i15 >> 2] | 0, -1 | 0) | 0;
  if (!tempRet0) {
   i30 = 85;
   break;
  }
  i31 = (HEAP32[i13 >> 2] | 0) + (i29 << 4) + 4 | 0;
  HEAP32[i31 >> 2] = HEAP32[i31 >> 2] & -2147483648 | i33 & 2147483647;
  L60 : do {
   if ((HEAP8[i16] & 1) == 0) {
    i47 = i33;
   } else {
    if (i33 >>> 0 >= i7 >>> 0) {
     i47 = i7;
     break;
    }
    if ((HEAP8[i12] & 1) == 0) {
     i31 = i33;
     while (1) {
      i29 = HEAP16[i6 + (i31 << 1) >> 1] | 0;
      if (!((i29 << 16 >> 16 | 0) == 32 | (i29 << 16 >> 16 | 0) == 9 | (i29 << 16 >> 16 | 0) == 10)) {
       i47 = i31;
       break L60;
      }
      i29 = i31 + 1 | 0;
      if (i29 >>> 0 < i7 >>> 0) {
       i31 = i29;
      } else {
       i47 = i7;
       break;
      }
     }
    } else {
     i31 = i33;
     while (1) {
      i40 = HEAP16[i6 + (i31 << 1) >> 1] | 0;
      if (!((i40 << 16 >> 16 | 0) == 32 | (i40 << 16 >> 16 | 0) == 9)) {
       i47 = i31;
       break L60;
      }
      i40 = i31 + 1 | 0;
      if (i40 >>> 0 < i7 >>> 0) {
       i31 = i40;
      } else {
       i47 = i7;
       break;
      }
     }
    }
   }
  } while (0);
  if (__ZNK7WebCore9LineWidth10fitsOnLineEb(i3, 0) | 0) {
   if (i47 >>> 0 < i7 >>> 0) {
    i28 = i47;
    continue;
   } else {
    i30 = 104;
    break;
   }
  } else {
   if ((HEAP8[i20] & 1) == 0 & i47 >>> 0 < i7 >>> 0) {
    i28 = i47;
    continue;
   } else {
    i30 = 105;
    break;
   }
  }
 }
 if ((i30 | 0) == 5) {
  i47 = i28 + 1 | 0;
  i20 = HEAP32[i15 >> 2] | 0;
  do {
   if (i28 >>> 0 > i2 >>> 0) {
    i16 = _llvm_uadd_with_overflow_i32(i20 | 0, -1 | 0) | 0;
    if (!tempRet0) {
     __ZN3WTF15CrashOnOverflow10overflowedEv();
    }
    i27 = HEAP32[i13 >> 2] | 0;
    d38 = +HEAPF32[i27 + (i16 << 4) + 12 >> 2];
    HEAP32[i10 >> 2] = i28;
    HEAP32[i10 + 4 >> 2] = i28 & 2147483647;
    HEAPF32[i10 + 8 >> 2] = d38;
    HEAPF32[i10 + 12 >> 2] = d38;
    if ((i20 | 0) != (HEAP32[i14 >> 2] | 0)) {
     i16 = i27 + (i20 << 4) | 0;
     i45 = i10;
     HEAP32[i16 >> 2] = HEAP32[i45 >> 2];
     HEAP32[i16 + 4 >> 2] = HEAP32[i45 + 4 >> 2];
     HEAP32[i16 + 8 >> 2] = HEAP32[i45 + 8 >> 2];
     HEAP32[i16 + 12 >> 2] = HEAP32[i45 + 12 >> 2];
     i45 = (HEAP32[i15 >> 2] | 0) + 1 | 0;
     HEAP32[i15 >> 2] = i45;
     i48 = i45;
     break;
    }
    i45 = i20 + 1 | 0;
    do {
     if (i27 >>> 0 > i10 >>> 0) {
      i30 = 12;
     } else {
      if ((i27 + (i20 << 4) | 0) >>> 0 <= i10 >>> 0) {
       i30 = 12;
       break;
      }
      i16 = i45 + (i20 >>> 2) | 0;
      i46 = i16 >>> 0 > 16 >>> 0 ? i16 : 16;
      __ZN3WTF6VectorIN7WebCore16SimpleLineLayout3RunELj4ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i46 >>> 0 > i45 >>> 0 ? i46 : i45);
      i46 = HEAP32[i13 >> 2] | 0;
      i49 = i46 + (i10 - i27 >> 4 << 4) | 0;
      i50 = i46;
     }
    } while (0);
    if ((i30 | 0) == 12) {
     i27 = i45 + (i20 >>> 2) | 0;
     i46 = i27 >>> 0 > 16 >>> 0 ? i27 : 16;
     __ZN3WTF6VectorIN7WebCore16SimpleLineLayout3RunELj4ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i46 >>> 0 > i45 >>> 0 ? i46 : i45);
     i49 = i10;
     i50 = HEAP32[i13 >> 2] | 0;
    }
    i46 = i50 + (HEAP32[i15 >> 2] << 4) | 0;
    i27 = i49;
    HEAP32[i46 >> 2] = HEAP32[i27 >> 2];
    HEAP32[i46 + 4 >> 2] = HEAP32[i27 + 4 >> 2];
    HEAP32[i46 + 8 >> 2] = HEAP32[i27 + 8 >> 2];
    HEAP32[i46 + 12 >> 2] = HEAP32[i27 + 12 >> 2];
    i27 = (HEAP32[i15 >> 2] | 0) + 1 | 0;
    HEAP32[i15 >> 2] = i27;
    i48 = i27;
   } else {
    i48 = i20;
   }
  } while (0);
  i20 = _llvm_uadd_with_overflow_i32(i48 | 0, -1 | 0) | 0;
  if (!tempRet0) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
  i48 = i20;
  i20 = HEAP32[i13 >> 2] | 0;
  HEAPF32[i20 + (i48 << 4) + 12 >> 2] = +HEAPF32[i20 + (i48 << 4) + 8 >> 2];
  i48 = _llvm_uadd_with_overflow_i32(HEAP32[i15 >> 2] | 0, -1 | 0) | 0;
  if (!tempRet0) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
  i20 = (HEAP32[i13 >> 2] | 0) + (i48 << 4) + 4 | 0;
  HEAP32[i20 >> 2] = HEAP32[i20 >> 2] & -2147483648 | i47 & 2147483647;
  STACKTOP = i9;
  return;
 } else if ((i30 | 0) == 42) {
  L99 : do {
   if ((HEAP8[i12] & 1) == 0) {
    i47 = i33;
    while (1) {
     i20 = HEAP16[i6 + (i47 << 1) >> 1] | 0;
     if (!((i20 << 16 >> 16 | 0) == 32 | (i20 << 16 >> 16 | 0) == 9 | (i20 << 16 >> 16 | 0) == 10)) {
      i51 = i47;
      i52 = i20;
      i30 = 47;
      break L99;
     }
     i20 = i47 + 1 | 0;
     if (i20 >>> 0 < i7 >>> 0) {
      i47 = i20;
     } else {
      i53 = i7;
      break;
     }
    }
   } else {
    i47 = i33;
    while (1) {
     i45 = HEAP16[i6 + (i47 << 1) >> 1] | 0;
     if (!((i45 << 16 >> 16 | 0) == 32 | (i45 << 16 >> 16 | 0) == 9)) {
      i51 = i47;
      i52 = i45;
      i30 = 47;
      break L99;
     }
     i45 = i47 + 1 | 0;
     if (i45 >>> 0 < i7 >>> 0) {
      i47 = i45;
     } else {
      i53 = i7;
      break;
     }
    }
   }
  } while (0);
  do {
   if ((i30 | 0) == 47) {
    if (i51 >>> 0 >= i7 >>> 0) {
     i53 = i51;
     break;
    }
    i53 = (i52 << 16 >> 16 == 10) + i51 | 0;
   }
  } while (0);
  i51 = _llvm_uadd_with_overflow_i32(HEAP32[i15 >> 2] | 0, -1 | 0) | 0;
  if (!tempRet0) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
  i52 = (HEAP32[i13 >> 2] | 0) + (i51 << 4) + 4 | 0;
  HEAP32[i52 >> 2] = HEAP32[i52 >> 2] & -2147483648 | i53 & 2147483647;
  i53 = _llvm_uadd_with_overflow_i32(HEAP32[i15 >> 2] | 0, -1 | 0) | 0;
  if (!tempRet0) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
  HEAPF32[(HEAP32[i13 >> 2] | 0) + (i53 << 4) + 12 >> 2] = +HEAPF32[i3 + 32 >> 2];
  STACKTOP = i9;
  return;
 } else if ((i30 | 0) == 55) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i30 | 0) == 58) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i30 | 0) == 60) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i30 | 0) == 70) {
  d38 = +HEAPF32[i19 >> 2];
  HEAPF32[i19 >> 2] = d38 - d38;
  L121 : do {
   if (i36 >>> 0 < i33 >>> 0) {
    i53 = i36;
    while (1) {
     i52 = i53 + 1 | 0;
     d38 = +__ZN7WebCore16SimpleLineLayoutL9textWidthItEEfRKNS_10RenderTextEPKT_jjjfRKNS0_5StyleE(i8, i6, i7, i53, i52, +0, i5);
     HEAPF32[i19 >> 2] = d38 + +HEAPF32[i19 >> 2];
     if (i53 >>> 0 > i2 >>> 0 & ((__ZNK7WebCore9LineWidth10fitsOnLineEb(i3, 0) | 0) ^ 1)) {
      i54 = i53;
      break L121;
     }
     __ZN7WebCore9LineWidth6commitEv(i3);
     if (i52 >>> 0 < i33 >>> 0) {
      i53 = i52;
     } else {
      i54 = i52;
      break;
     }
    }
   } else {
    i54 = i36;
   }
  } while (0);
  i36 = _llvm_uadd_with_overflow_i32(HEAP32[i15 >> 2] | 0, -1 | 0) | 0;
  if (!tempRet0) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
  i33 = (HEAP32[i13 >> 2] | 0) + (i36 << 4) + 4 | 0;
  HEAP32[i33 >> 2] = HEAP32[i33 >> 2] & -2147483648 | i54 & 2147483647;
  i54 = _llvm_uadd_with_overflow_i32(HEAP32[i15 >> 2] | 0, -1 | 0) | 0;
  if (!tempRet0) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
  HEAPF32[(HEAP32[i13 >> 2] | 0) + (i54 << 4) + 12 >> 2] = +HEAPF32[i17 >> 2];
  i17 = _llvm_uadd_with_overflow_i32(HEAP32[i15 >> 2] | 0, -1 | 0) | 0;
  if (!tempRet0) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
  i15 = i17;
  i17 = HEAP32[i13 >> 2] | 0;
  i13 = HEAP32[i17 + (i15 << 4) >> 2] | 0;
  if ((HEAP16[i6 + (i13 << 1) >> 1] | 0) != 32) {
   STACKTOP = i9;
   return;
  }
  if ((i13 + 1 | 0) != (HEAP32[i17 + (i15 << 4) + 4 >> 2] & 2147483647 | 0)) {
   STACKTOP = i9;
   return;
  }
  HEAPF32[i17 + (i15 << 4) + 12 >> 2] = +HEAPF32[i17 + (i15 << 4) + 8 >> 2];
  STACKTOP = i9;
  return;
 } else if ((i30 | 0) == 83) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i30 | 0) == 85) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i30 | 0) == 100) {
  STACKTOP = i9;
  return;
 } else if ((i30 | 0) == 104) {
  STACKTOP = i9;
  return;
 } else if ((i30 | 0) == 105) {
  STACKTOP = i9;
  return;
 }
}
function __ZN7WebCore16SimpleLineLayout9canUseForERKNS_15RenderBlockFlowE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, d20 = +0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i3 = i2 | 0;
 i4 = i2 + 48 | 0;
 i5 = i1 | 0;
 i6 = i1 + 4 | 0;
 if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i6 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 36 >> 2] | 0) + 191 | 0] & 1) == 0) {
  i7 = 0;
  STACKTOP = i2;
  return i7 | 0;
 }
 i8 = i1 + 28 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i7 = 0;
  STACKTOP = i2;
  return i7 | 0;
 }
 if ((i9 | 0) != (HEAP32[i1 + 32 >> 2] | 0)) {
  i7 = 0;
  STACKTOP = i2;
  return i7 | 0;
 }
 if ((HEAP32[i9 + 20 >> 2] & 768 | 0) != 256) {
  i7 = 0;
  STACKTOP = i2;
  return i7 | 0;
 }
 i9 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i9 & 805314560 | 0) != 8192) {
  i7 = 0;
  STACKTOP = i2;
  return i7 | 0;
 }
 if ((i9 & 768 | 0) == 256) {
  i10 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i10 = HEAP32[i5 + 36 >> 2] | 0;
 }
 i9 = HEAP32[(HEAP32[i10 + 12 >> 2] | 0) + 64 >> 2] | 0;
 if ((i9 & 131070 | 0) != 0 & (i9 & 2013265920 | 0) != 0 & (i9 & 1879048192) >>> 0 > 134217728 >>> 0) {
  i7 = 0;
  STACKTOP = i2;
  return i7 | 0;
 }
 if (__ZNK7WebCore12RenderObject20hasOutlineAnnotationEv(i5) | 0) {
  i7 = 0;
  STACKTOP = i2;
  return i7 | 0;
 }
 i9 = i1;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 172 >> 2] & 1](i5) | 0) {
  i7 = 0;
  STACKTOP = i2;
  return i7 | 0;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 164 >> 2] & 1](i5) | 0) {
  i7 = 0;
  STACKTOP = i2;
  return i7 | 0;
 }
 i9 = i1 + 8 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 548 >> 2] & 1](i10 | 0) | 0) {
  i7 = 0;
  STACKTOP = i2;
  return i7 | 0;
 }
 i10 = HEAP32[i9 >> 2] | 0;
 i11 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 212 >> 2] & 1](i10 | 0) | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 L35 : do {
  if (i11) {
   i12 = HEAP32[(HEAP32[i10 + 4 >> 2] | 0) + 48 >> 2] | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   i13 = HEAP32[i12 + 4 >> 2] | 0;
   if ((i13 & 1 | 0) == 0) {
    i14 = i13 >>> 1 & 134217727;
    i15 = i12 + 20 | 0;
   } else {
    i13 = i12 + 24 | 0;
    i14 = HEAP32[i13 + 8 >> 2] | 0;
    i15 = HEAP32[i13 >> 2] | 0;
   }
   if ((i14 | 0) == 0) {
    break;
   }
   i13 = HEAP32[__ZN7WebCore9HTMLNames8wrapAttrE >> 2] | 0;
   i12 = i13 + 12 | 0;
   i16 = i13 + 16 | 0;
   i17 = 0;
   while (1) {
    i18 = i15 + (i17 << 3) | 0;
    i19 = HEAP32[i18 >> 2] | 0;
    if ((i19 | 0) == (i13 | 0)) {
     break;
    }
    if ((HEAP32[i19 + 12 >> 2] | 0) == (HEAP32[i12 >> 2] | 0)) {
     if ((HEAP32[i19 + 16 >> 2] | 0) == (HEAP32[i16 >> 2] | 0)) {
      break;
     }
    }
    i17 = i17 + 1 | 0;
    if (i17 >>> 0 >= i14 >>> 0) {
     break L35;
    }
   }
   if ((i18 | 0) == 0) {
    break;
   } else {
    i7 = 0;
   }
   STACKTOP = i2;
   return i7 | 0;
  }
 } while (0);
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 208 >> 2] & 1](i10 | 0) | 0) {
   i18 = __ZNK7WebCore17RenderTextControl22textFormControlElementEv(HEAP32[i9 >> 2] | 0) | 0;
   if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i18 >> 2] | 0) + 712 >> 2] & 1](i18) | 0) == 0) {
    break;
   } else {
    i7 = 0;
   }
   STACKTOP = i2;
   return i7 | 0;
  }
 } while (0);
 i10 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i6 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 192 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   if ((HEAP32[i10 + 16 >> 2] | 0) != 0) {
    i7 = 0;
    STACKTOP = i2;
    return i7 | 0;
   }
   if ((HEAP32[i10 + 4 >> 2] | 0) == 0) {
    break;
   } else {
    i7 = 0;
   }
   STACKTOP = i2;
   return i7 | 0;
  }
 } while (0);
 i10 = HEAP32[i1 + 36 >> 2] | 0;
 i6 = i10 + 40 | 0;
 i18 = HEAP32[i6 >> 2] | 0;
 if ((i18 & 7864320 | 0) != 0 | (i18 & 122880 | 0) == 24576) {
  i7 = 0;
  STACKTOP = i2;
  return i7 | 0;
 }
 i18 = i10 + 48 | 0;
 if ((HEAP32[i18 >> 2] & 64512 | 0) != 0) {
  i7 = 0;
  STACKTOP = i2;
  return i7 | 0;
 }
 i14 = i10 + 24 | 0;
 i15 = HEAP32[i14 >> 2] | 0;
 i11 = i15 + 72 | 0;
 if ((HEAP8[i15 + 77 | 0] | 0) == 10) {
  i7 = 0;
  STACKTOP = i2;
  return i7 | 0;
 }
 do {
  if ((HEAP8[i15 + 78 | 0] & 1) == 0) {
   if ((HEAP32[i11 >> 2] | 0) == 0) {
    break;
   } else {
    i7 = 0;
   }
   STACKTOP = i2;
   return i7 | 0;
  } else {
   if (+HEAPF32[i11 >> 2] != +0) {
    i7 = 0;
   } else {
    break;
   }
   STACKTOP = i2;
   return i7 | 0;
  }
 } while (0);
 if (+__ZNK7WebCore11RenderStyle11wordSpacingEv(i10) != +0) {
  i7 = 0;
  STACKTOP = i2;
  return i7 | 0;
 }
 if (+__ZNK7WebCore11RenderStyle13letterSpacingEv(i10) != +0) {
  i7 = 0;
  STACKTOP = i2;
  return i7 | 0;
 }
 if ((HEAP32[i6 >> 2] & 1074135040 | 0) != 1074135040) {
  i7 = 0;
  STACKTOP = i2;
  return i7 | 0;
 }
 i6 = HEAP32[i14 >> 2] | 0;
 i11 = HEAP32[i6 + 92 >> 2] | 0;
 if ((i11 & 127 | 0) != 19) {
  i7 = 0;
  STACKTOP = i2;
  return i7 | 0;
 }
 i15 = HEAP32[i10 + 44 >> 2] | 0;
 if ((i15 & 24576 | 0) != 0) {
  i7 = 0;
  STACKTOP = i2;
  return i7 | 0;
 }
 i17 = HEAP32[i6 + 88 >> 2] | 0;
 if ((i17 & 7360 | 0) != 0) {
  i7 = 0;
  STACKTOP = i2;
  return i7 | 0;
 }
 if ((HEAP32[i18 >> 2] & 1879048192 | 0) != 0) {
  i7 = 0;
  STACKTOP = i2;
  return i7 | 0;
 }
 if ((i15 & 32 | 0) != 0) {
  i7 = 0;
  STACKTOP = i2;
  return i7 | 0;
 }
 if ((i11 & 3584 | 0) != 0) {
  i7 = 0;
  STACKTOP = i2;
  return i7 | 0;
 }
 if (!((i17 & 6291456 | 0) != 4194304 & (i17 & 8388608 | 0) == 0)) {
  i7 = 0;
  STACKTOP = i2;
  return i7 | 0;
 }
 if ((__ZNK7WebCore11RenderStyle16textEmphasisMarkEv(i10) | 0) != 0) {
  i7 = 0;
  STACKTOP = i2;
  return i7 | 0;
 }
 if ((HEAP32[(HEAP32[i14 >> 2] | 0) + 60 >> 2] | 0) != 0) {
  i7 = 0;
  STACKTOP = i2;
  return i7 | 0;
 }
 i14 = i10 + 20 | 0;
 i17 = HEAP32[i14 >> 2] | 0;
 i11 = HEAP32[i17 + 184 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   if ((HEAP32[i11 + 4 >> 2] | 0) != 2) {
    i7 = 1;
    STACKTOP = i2;
    return i7 | 0;
   }
   if ((HEAP32[i17 + 188 >> 2] | 0) == 0) {
    break;
   } else {
    i7 = 1;
   }
   STACKTOP = i2;
   return i7 | 0;
  }
 } while (0);
 if ((HEAP32[i17 + 292 >> 2] & 33554432 | 0) != 0) {
  i7 = 0;
  STACKTOP = i2;
  return i7 | 0;
 }
 do {
  if (__ZNK7WebCore12RenderObject16isAnonymousBlockEv(i5) | 0) {
   if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i9 >> 2] | 0) + 36 >> 2] | 0) + 20 >> 2] | 0) + 292 >> 2] & 33554432 | 0) == 0) {
    break;
   } else {
    i7 = 0;
   }
   STACKTOP = i2;
   return i7 | 0;
  }
 } while (0);
 if ((HEAP32[i10 + 52 >> 2] & 12288 | 0) != 0) {
  i7 = 0;
  STACKTOP = i2;
  return i7 | 0;
 }
 i9 = HEAP32[(HEAP32[i14 >> 2] | 0) + 296 >> 2] | 0;
 if ((i9 & 128 | 0) != 0) {
  i7 = 0;
  STACKTOP = i2;
  return i7 | 0;
 }
 if ((HEAP32[(HEAP32[i10 + 12 >> 2] | 0) + 44 >> 2] & 12 | 0) == 12) {
  i7 = 0;
  STACKTOP = i2;
  return i7 | 0;
 }
 if ((i9 & 64 | 0) != 0) {
  i7 = 0;
  STACKTOP = i2;
  return i7 | 0;
 }
 i9 = HEAP32[i8 >> 2] | 0;
 i8 = i9;
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 1024 >> 2] & 1](i1) | 0) {
   d20 = +__ZNK7WebCore10RenderText15minLogicalWidthEv(i8);
   __ZN7WebCore9LineWidthC1ERNS_15RenderBlockFlowEbNS_15IndentTextOrNotE(i3, i1, 0, 0);
   if (d20 > +HEAPF32[i3 + 32 >> 2]) {
    i7 = 0;
   } else {
    break;
   }
   STACKTOP = i2;
   return i7 | 0;
  }
 } while (0);
 i3 = i9;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 560 >> 2] & 1](i9) | 0) {
  i7 = 0;
  STACKTOP = i2;
  return i7 | 0;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 60 >> 2] & 1](i9) | 0) {
  i7 = 0;
  STACKTOP = i2;
  return i7 | 0;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 64 >> 2] & 1](i9) | 0) {
  i7 = 0;
  STACKTOP = i2;
  return i7 | 0;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 624 >> 2] & 1](i8) | 0) {
  i7 = 0;
  STACKTOP = i2;
  return i7 | 0;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 368 >> 2] & 1](i9) | 0) {
  i7 = 0;
  STACKTOP = i2;
  return i7 | 0;
 }
 i3 = __ZNK7WebCore11RenderStyle4fontEv(i10) | 0;
 i8 = i9 + 44 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i1 = (i9 | 0) == 0;
 if (i1) {
  HEAP32[i4 + 4 >> 2] = 0;
  i21 = 0;
  i22 = i4 + 8 | 0;
 } else {
  i14 = i9 | 0;
  HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
  i14 = i9 + 4 | 0;
  HEAP32[i4 + 4 >> 2] = HEAP32[i14 >> 2];
  i21 = HEAP32[i14 >> 2] | 0;
  i22 = i4 + 8 | 0;
 }
 HEAP32[i22 >> 2] = i21;
 HEAPF32[i4 + 12 >> 2] = +0;
 HEAPF32[i4 + 16 >> 2] = +1;
 HEAPF32[i4 + 20 >> 2] = +0;
 i21 = i4 + 24 | 0;
 i22 = HEAPU8[__ZN7WebCore7TextRun21s_allowsRoundingHacksE] | 0;
 i14 = i22 << 7 & 128 | (HEAP32[i21 >> 2] & -1020 | 81) | i22 << 8 & 256;
 HEAP32[i21 >> 2] = i14;
 HEAP32[i4 + 28 >> 2] = 0;
 i22 = i4 + 32 | 0;
 HEAP32[i22 >> 2] = 0;
 do {
  if (i1) {
   i23 = 0;
   i24 = i14;
  } else {
   if ((HEAP32[i9 + 16 >> 2] & 32 | 0) == 0) {
    i23 = HEAP32[i9 + 8 >> 2] | 0;
    i24 = i14;
    break;
   } else {
    i5 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i9) | 0;
    i23 = i5;
    i24 = HEAP32[i21 >> 2] | 0;
    break;
   }
  }
 } while (0);
 HEAP32[i4 >> 2] = i23;
 HEAP32[i21 >> 2] = i24 & -5;
 i24 = (__ZNK7WebCore4Font8codePathERKNS_7TextRunE(i3, i4) | 0) == 1;
 i4 = HEAP32[i22 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i22 = i4 + 4 | 0;
   i3 = i22 | 0;
   i21 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i21 | 0) != 0) {
    HEAP32[i3 >> 2] = i21;
    break;
   }
   i21 = i22 - 4 | 0;
   if ((i21 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 1](i21);
  }
 } while (0);
 do {
  if (!i1) {
   i4 = i9 | 0;
   i21 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i21 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i4 >> 2] = i21;
    break;
   }
  }
 } while (0);
 if (!i24) {
  i7 = 0;
  STACKTOP = i2;
  return i7 | 0;
 }
 i24 = __ZNK7WebCore11RenderStyle4fontEv(i10) | 0;
 i9 = HEAP32[i24 + 24 >> 2] | 0;
 i1 = i9 + 44 | 0;
 i21 = HEAP32[i1 >> 2] | 0;
 if ((i21 | 0) == 0) {
  i4 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i9, i24 | 0, 0) | 0;
  i24 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] & 1](i4, 32) | 0;
  HEAP32[i1 >> 2] = i24;
  i25 = i24;
 } else {
  i25 = i21;
 }
 if ((HEAP32[i25 + 76 >> 2] | 0) != 0) {
  i7 = 0;
  STACKTOP = i2;
  return i7 | 0;
 }
 i25 = __ZNK7WebCore11RenderStyle4fontEv(i10) | 0;
 i10 = HEAP32[i25 + 24 >> 2] | 0;
 i21 = i10 + 44 | 0;
 i24 = HEAP32[i21 >> 2] | 0;
 if ((i24 | 0) == 0) {
  i1 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i10, i25 | 0, 0) | 0;
  i25 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] & 1](i1, 32) | 0;
  HEAP32[i21 >> 2] = i25;
  i26 = i25;
 } else {
  i26 = i24;
 }
 if ((HEAP8[i26 + 1118 | 0] & 1) != 0) {
  i7 = 0;
  STACKTOP = i2;
  return i7 | 0;
 }
 i24 = HEAP32[i8 >> 2] | 0;
 if ((HEAP32[i24 + 16 >> 2] & 32 | 0) == 0) {
  i8 = HEAP32[i24 + 8 >> 2] | 0;
  i25 = HEAP32[i24 + 4 >> 2] | 0;
  if ((i25 | 0) == 0) {
   i7 = 0;
   STACKTOP = i2;
   return i7 | 0;
  } else {
   i27 = 0;
  }
  L215 : while (1) {
   i21 = HEAP16[i8 + (i27 << 1) >> 1] | 0;
   i1 = i21 & 65535;
   if ((i21 << 16 >> 16 | 0) == 160 | (i21 << 16 >> 16 | 0) == 173) {
    i7 = 0;
    i28 = 155;
    break;
   } else if ((i21 << 16 >> 16 | 0) != 32) {
    switch (_u_charDirection(i1) | 0) {
    case 18:
    case 16:
    case 15:
    case 14:
    case 13:
    case 12:
    case 11:
    case 1:
     {
      i7 = 0;
      i28 = 156;
      break L215;
      break;
     }
    default:
     {}
    }
    if ((__ZNK7WebCore14SimpleFontData17glyphForCharacterEi(i26, i1) | 0) << 16 >> 16 == 0) {
     i7 = 0;
     i28 = 157;
     break;
    }
   }
   i1 = i27 + 1 | 0;
   if (i1 >>> 0 < i25 >>> 0) {
    i27 = i1;
   } else {
    i7 = 1;
    i28 = 158;
    break;
   }
  }
  if ((i28 | 0) == 155) {
   STACKTOP = i2;
   return i7 | 0;
  } else if ((i28 | 0) == 156) {
   STACKTOP = i2;
   return i7 | 0;
  } else if ((i28 | 0) == 157) {
   STACKTOP = i2;
   return i7 | 0;
  } else if ((i28 | 0) == 158) {
   STACKTOP = i2;
   return i7 | 0;
  }
 } else {
  i27 = HEAP32[i24 + 8 >> 2] | 0;
  i25 = HEAP32[i24 + 4 >> 2] | 0;
  if ((i25 | 0) == 0) {
   i7 = 0;
   STACKTOP = i2;
   return i7 | 0;
  } else {
   i29 = 0;
  }
  L201 : while (1) {
   i24 = HEAP8[i27 + i29 | 0] | 0;
   i8 = i24 & 255;
   if ((i24 << 24 >> 24 | 0) == (-96 | 0) | (i24 << 24 >> 24 | 0) == (-83 | 0)) {
    i7 = 0;
    i28 = 150;
    break;
   } else if ((i24 << 24 >> 24 | 0) != 32) {
    switch (_u_charDirection(i8) | 0) {
    case 18:
    case 16:
    case 15:
    case 14:
    case 13:
    case 12:
    case 11:
    case 1:
     {
      i7 = 0;
      i28 = 151;
      break L201;
      break;
     }
    default:
     {}
    }
    if ((__ZNK7WebCore14SimpleFontData17glyphForCharacterEi(i26, i8) | 0) << 16 >> 16 == 0) {
     i7 = 0;
     i28 = 152;
     break;
    }
   }
   i8 = i29 + 1 | 0;
   if (i8 >>> 0 < i25 >>> 0) {
    i29 = i8;
   } else {
    i7 = 1;
    i28 = 153;
    break;
   }
  }
  if ((i28 | 0) == 150) {
   STACKTOP = i2;
   return i7 | 0;
  } else if ((i28 | 0) == 151) {
   STACKTOP = i2;
   return i7 | 0;
  } else if ((i28 | 0) == 152) {
   STACKTOP = i2;
   return i7 | 0;
  } else if ((i28 | 0) == 153) {
   STACKTOP = i2;
   return i7 | 0;
  }
 }
 return 0;
}
function __ZN7WebCore16SimpleLineLayout14createTextRunsItEEvRN3WTF6VectorINS0_3RunELj10ENS2_15CrashOnOverflowEEERjRNS_15RenderBlockFlowERNS_10RenderTextE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, d41 = +0, d42 = +0, d43 = +0, d44 = +0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 192 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 32 | 0;
 i9 = i5 + 40 | 0;
 i10 = i5 + 64 | 0;
 i11 = i5 + 112 | 0;
 i12 = i3 + 36 | 0;
 __ZN7WebCore16SimpleLineLayout5StyleC2ERKNS_11RenderStyleE(i7, HEAP32[i12 >> 2] | 0);
 i13 = i4 + 44 | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 if ((HEAP32[i14 + 16 >> 2] & 32 | 0) == 0) {
  i15 = HEAP32[i14 + 8 >> 2] | 0;
  i16 = i14;
 } else {
  i17 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i14) | 0;
  i15 = i17;
  i16 = HEAP32[i13 >> 2] | 0;
 }
 i17 = HEAP32[i16 + 4 >> 2] | 0;
 i16 = i3 | 0;
 i14 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 752 >> 2] & 1](i16) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 720 >> 2] & 1](i6, i16);
 i16 = (HEAP32[i6 >> 2] | 0) + i14 | 0;
 __ZNK7WebCore11RenderBlock10lineHeightEbNS_17LineDirectionModeENS_16LinePositionModeE(i8, i3 | 0, 0, 0, 1);
 i14 = HEAP32[i13 >> 2] | 0;
 i13 = (i14 | 0) == 0;
 if (i13) {
  i6 = HEAP32[(HEAP32[i12 >> 2] | 0) + 24 >> 2] | 0;
  i18 = i9 | 0;
  HEAP32[i18 >> 2] = 0;
  i19 = i6;
  i20 = i18;
 } else {
  i18 = i14 | 0;
  HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 2;
  i6 = HEAP32[(HEAP32[i12 >> 2] | 0) + 24 >> 2] | 0;
  i21 = i9 | 0;
  HEAP32[i21 >> 2] = i14;
  HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 2;
  i19 = i6;
  i20 = i21;
 }
 i21 = i9 + 4 | 0;
 i6 = HEAP32[i19 + 108 >> 2] | 0;
 HEAP32[i21 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i19 = i6 | 0;
  HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 2;
 }
 i19 = i9 + 8 | 0;
 _memset(i19 | 0, 0, 16) | 0;
 do {
  if (!i13) {
   i6 = i14 | 0;
   i18 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i18 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    break;
   } else {
    HEAP32[i6 >> 2] = i18;
    break;
   }
  }
 } while (0);
 L18 : do {
  if ((i17 | 0) != 0) {
   i14 = i7 + 8 | 0;
   i13 = i8 | 0;
   i18 = i3 + 52 | 0;
   i6 = i11 + 8 | 0;
   i22 = i11 | 0;
   i23 = i11 + 12 | 0;
   i24 = i11 + 4 | 0;
   i25 = i7 + 4 | 0;
   i26 = i10 + 8 | 0;
   i27 = i10 + 24 | 0;
   i28 = i10 + 32 | 0;
   i29 = i1 + 8 | 0;
   i30 = i1 + 4 | 0;
   i31 = i1 | 0;
   i32 = i3 + 56 | 0;
   i33 = i7 + 9 | 0;
   i34 = 0;
   L20 : while (1) {
    L22 : do {
     if ((HEAP8[i14] & 1) == 0) {
      i35 = i34;
     } else {
      if ((HEAP8[i33] & 1) == 0) {
       i36 = i34;
       while (1) {
        i37 = HEAP16[i15 + (i36 << 1) >> 1] | 0;
        if (!((i37 << 16 >> 16 | 0) == 32 | (i37 << 16 >> 16 | 0) == 9 | (i37 << 16 >> 16 | 0) == 10)) {
         i35 = i36;
         break L22;
        }
        i37 = i36 + 1 | 0;
        if (i37 >>> 0 < i17 >>> 0) {
         i36 = i37;
        } else {
         i35 = i17;
         break;
        }
       }
      } else {
       i36 = i34;
       while (1) {
        i37 = HEAP16[i15 + (i36 << 1) >> 1] | 0;
        if (!((i37 << 16 >> 16 | 0) == 32 | (i37 << 16 >> 16 | 0) == 9)) {
         i35 = i36;
         break L22;
        }
        i37 = i36 + 1 | 0;
        if (i37 >>> 0 < i17 >>> 0) {
         i36 = i37;
        } else {
         i35 = i17;
         break;
        }
       }
      }
     }
    } while (0);
    i36 = HEAP32[i2 >> 2] | 0;
    i37 = i16 + (Math_imul(i36 >>> 0 < 2147483647 >>> 0 ? i36 : 2147483647, HEAP32[i13 >> 2] | 0) | 0) | 0;
    i36 = (HEAP32[(HEAP32[i12 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
    if ((i36 | 0) == 3 | (i36 | 0) == 0) {
     HEAP32[i32 >> 2] = i37;
    } else {
     HEAP32[i18 >> 2] = i37;
    }
    __ZN7WebCore9LineWidthC1ERNS_15RenderBlockFlowEbNS_15IndentTextOrNotE(i10, i3, 0, 0);
    __ZN7WebCore16SimpleLineLayout14createLineRunsItEEN3WTF6VectorINS0_3RunELj4ENS2_15CrashOnOverflowEEEjRNS_9LineWidthERNS_21LazyLineBreakIteratorERKNS0_5StyleEPKT_jRKNS_10RenderTextE(i11, i35, i10, i9, i7, i15, i17, i4);
    i37 = HEAP32[i6 >> 2] | 0;
    i36 = _llvm_uadd_with_overflow_i32(i37 | 0, -1 | 0) | 0;
    if (!tempRet0) {
     i38 = 25;
     break;
    }
    i39 = (HEAP32[i22 >> 2] | 0) + (i36 << 4) + 4 | 0;
    i36 = HEAP32[i39 >> 2] | 0;
    i34 = i36 & 2147483647;
    if ((i35 | 0) == (i34 | 0)) {
     i40 = i37;
    } else {
     HEAP32[i39 >> 2] = i36 | -2147483648;
     d41 = +HEAPF32[i27 >> 2];
     d42 = +HEAPF32[i28 >> 2] - +HEAPF32[i26 >> 2];
     switch (HEAP32[i25 >> 2] | 0) {
     case 1:
     case 5:
     case 8:
      {
       d43 = d41 + (d42 < +0 ? +0 : d42);
       i38 = 30;
       break;
      }
     case 2:
     case 6:
      {
       d44 = d42 * +.5;
       d43 = d41 + (d44 < +0 ? +0 : d44);
       i38 = 30;
       break;
      }
     case 0:
     case 4:
     case 7:
      {
       d43 = d41;
       i38 = 30;
       break;
      }
     default:
      {
       i38 = 35;
      }
     }
     do {
      if ((i38 | 0) == 30) {
       i38 = 0;
       if (d43 == +0) {
        i38 = 35;
        break;
       }
       if ((HEAP32[i6 >> 2] | 0) == 0) {
        i45 = 0;
        break;
       } else {
        i46 = 0;
       }
       while (1) {
        i36 = (HEAP32[i22 >> 2] | 0) + (i46 << 4) + 8 | 0;
        HEAPF32[i36 >> 2] = d43 + +HEAPF32[i36 >> 2];
        if ((HEAP32[i6 >> 2] | 0) >>> 0 <= i46 >>> 0) {
         i38 = 33;
         break L20;
        }
        i36 = (HEAP32[i22 >> 2] | 0) + (i46 << 4) + 12 | 0;
        HEAPF32[i36 >> 2] = d43 + +HEAPF32[i36 >> 2];
        i36 = i46 + 1 | 0;
        i39 = HEAP32[i6 >> 2] | 0;
        if (i36 >>> 0 < i39 >>> 0) {
         i46 = i36;
        } else {
         i47 = i39;
         i38 = 36;
         break;
        }
       }
      }
     } while (0);
     if ((i38 | 0) == 35) {
      i38 = 0;
      i47 = HEAP32[i6 >> 2] | 0;
      i38 = 36;
     }
     do {
      if ((i38 | 0) == 36) {
       i38 = 0;
       if ((i47 | 0) == 0) {
        i45 = 0;
        break;
       }
       i39 = 0;
       i36 = HEAP32[i29 >> 2] | 0;
       while (1) {
        i37 = (HEAP32[i22 >> 2] | 0) + (i39 << 4) | 0;
        if ((i36 | 0) == (HEAP32[i30 >> 2] | 0)) {
         i48 = i36 + 1 | 0;
         i49 = HEAP32[i31 >> 2] | 0;
         do {
          if (i49 >>> 0 > i37 >>> 0) {
           i38 = 42;
          } else {
           if ((i49 + (i36 << 4) | 0) >>> 0 <= i37 >>> 0) {
            i38 = 42;
            break;
           }
           i50 = i48 + (i36 >>> 2) | 0;
           i51 = i50 >>> 0 > 16 >>> 0 ? i50 : 16;
           __ZN3WTF6VectorIN7WebCore16SimpleLineLayout3RunELj10ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i51 >>> 0 > i48 >>> 0 ? i51 : i48);
           i51 = HEAP32[i31 >> 2] | 0;
           i52 = i51 + (i37 - i49 >> 4 << 4) | 0;
           i53 = i51;
          }
         } while (0);
         if ((i38 | 0) == 42) {
          i38 = 0;
          i49 = i48 + (i36 >>> 2) | 0;
          i51 = i49 >>> 0 > 16 >>> 0 ? i49 : 16;
          __ZN3WTF6VectorIN7WebCore16SimpleLineLayout3RunELj10ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i51 >>> 0 > i48 >>> 0 ? i51 : i48);
          i52 = i37;
          i53 = HEAP32[i31 >> 2] | 0;
         }
         i51 = i53 + (HEAP32[i29 >> 2] << 4) | 0;
         i49 = i52;
         HEAP32[i51 >> 2] = HEAP32[i49 >> 2];
         HEAP32[i51 + 4 >> 2] = HEAP32[i49 + 4 >> 2];
         HEAP32[i51 + 8 >> 2] = HEAP32[i49 + 8 >> 2];
         HEAP32[i51 + 12 >> 2] = HEAP32[i49 + 12 >> 2];
        } else {
         i49 = (HEAP32[i31 >> 2] | 0) + (i36 << 4) | 0;
         i51 = i37;
         HEAP32[i49 >> 2] = HEAP32[i51 >> 2];
         HEAP32[i49 + 4 >> 2] = HEAP32[i51 + 4 >> 2];
         HEAP32[i49 + 8 >> 2] = HEAP32[i51 + 8 >> 2];
         HEAP32[i49 + 12 >> 2] = HEAP32[i51 + 12 >> 2];
        }
        i51 = (HEAP32[i29 >> 2] | 0) + 1 | 0;
        HEAP32[i29 >> 2] = i51;
        i49 = i39 + 1 | 0;
        i50 = HEAP32[i6 >> 2] | 0;
        if (i49 >>> 0 < i50 >>> 0) {
         i39 = i49;
         i36 = i51;
        } else {
         i45 = i50;
         break;
        }
       }
      }
     } while (0);
     HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
     i40 = i45;
    }
    if ((i40 | 0) != 0) {
     HEAP32[i6 >> 2] = 0;
    }
    i36 = HEAP32[i22 >> 2] | 0;
    if (!((i23 | 0) == (i36 | 0) | (i36 | 0) == 0)) {
     HEAP32[i22 >> 2] = 0;
     HEAP32[i24 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i36);
    }
    if (i34 >>> 0 >= i17 >>> 0) {
     break L18;
    }
   }
   if ((i38 | 0) == 25) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i38 | 0) == 33) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
  }
 } while (0);
 i38 = HEAP32[i19 >> 2] | 0;
 if ((i38 | 0) != 0) {
  __ZN7WebCore24releaseLineBreakIteratorEPNS_17TextBreakIteratorE(i38);
 }
 i38 = HEAP32[i21 >> 2] | 0;
 do {
  if ((i38 | 0) != 0) {
   i21 = i38 | 0;
   i19 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
   if ((i19 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i38);
    break;
   } else {
    HEAP32[i21 >> 2] = i19;
    break;
   }
  }
 } while (0);
 i38 = HEAP32[i20 >> 2] | 0;
 if ((i38 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i20 = i38 | 0;
 i19 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
 if ((i19 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i38);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i20 >> 2] = i19;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore16SimpleLineLayout14createTextRunsIhEEvRN3WTF6VectorINS0_3RunELj10ENS2_15CrashOnOverflowEEERjRNS_15RenderBlockFlowERNS_10RenderTextE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, d42 = +0, d43 = +0, d44 = +0, d45 = +0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 192 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 32 | 0;
 i9 = i5 + 40 | 0;
 i10 = i5 + 64 | 0;
 i11 = i5 + 112 | 0;
 i12 = i3 + 36 | 0;
 __ZN7WebCore16SimpleLineLayout5StyleC2ERKNS_11RenderStyleE(i7, HEAP32[i12 >> 2] | 0);
 i13 = i4 + 44 | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 i15 = HEAP32[i14 + 8 >> 2] | 0;
 i16 = HEAP32[i14 + 4 >> 2] | 0;
 i14 = i3 | 0;
 i17 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 752 >> 2] & 1](i14) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 720 >> 2] & 1](i6, i14);
 i14 = (HEAP32[i6 >> 2] | 0) + i17 | 0;
 __ZNK7WebCore11RenderBlock10lineHeightEbNS_17LineDirectionModeENS_16LinePositionModeE(i8, i3 | 0, 0, 0, 1);
 i17 = HEAP32[i13 >> 2] | 0;
 i13 = (i17 | 0) == 0;
 if (i13) {
  i6 = HEAP32[(HEAP32[i12 >> 2] | 0) + 24 >> 2] | 0;
  i18 = i9 | 0;
  HEAP32[i18 >> 2] = 0;
  i19 = i6;
  i20 = i18;
 } else {
  i18 = i17 | 0;
  HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 2;
  i6 = HEAP32[(HEAP32[i12 >> 2] | 0) + 24 >> 2] | 0;
  i21 = i9 | 0;
  HEAP32[i21 >> 2] = i17;
  HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 2;
  i19 = i6;
  i20 = i21;
 }
 i21 = i9 + 4 | 0;
 i6 = HEAP32[i19 + 108 >> 2] | 0;
 HEAP32[i21 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i19 = i6 | 0;
  HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 2;
 }
 i19 = i9 + 8 | 0;
 _memset(i19 | 0, 0, 16) | 0;
 do {
  if (!i13) {
   i6 = i17 | 0;
   i18 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i18 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    break;
   } else {
    HEAP32[i6 >> 2] = i18;
    break;
   }
  }
 } while (0);
 L14 : do {
  if ((i16 | 0) != 0) {
   i17 = i7 + 8 | 0;
   i13 = i8 | 0;
   i18 = i3 + 52 | 0;
   i6 = i11 + 8 | 0;
   i22 = i11 | 0;
   i23 = i11 + 12 | 0;
   i24 = i11 + 4 | 0;
   i25 = i7 + 4 | 0;
   i26 = i10 + 8 | 0;
   i27 = i10 + 24 | 0;
   i28 = i10 + 32 | 0;
   i29 = i1 + 8 | 0;
   i30 = i1 + 4 | 0;
   i31 = i1 | 0;
   i32 = i3 + 56 | 0;
   i33 = i7 + 9 | 0;
   i34 = 0;
   L16 : while (1) {
    L18 : do {
     if ((HEAP8[i17] & 1) == 0) {
      i35 = i34;
     } else {
      if ((HEAP8[i33] & 1) == 0) {
       i36 = i34;
      } else {
       i37 = i34;
       while (1) {
        i38 = HEAPU8[i15 + i37 | 0] | 0;
        if (!((i38 << 16 >> 16 | 0) == 32 | (i38 << 16 >> 16 | 0) == 9)) {
         i35 = i37;
         break L18;
        }
        i38 = i37 + 1 | 0;
        if (i38 >>> 0 < i16 >>> 0) {
         i37 = i38;
        } else {
         i35 = i16;
         break L18;
        }
       }
      }
      while (1) {
       i37 = HEAP8[i15 + i36 | 0] | 0;
       i38 = i37 & 255;
       if (!((i38 << 16 >> 16 | 0) == 32 | (i38 << 16 >> 16 | 0) == 9)) {
        if (i37 << 24 >> 24 != 10) {
         i35 = i36;
         break L18;
        }
       }
       i37 = i36 + 1 | 0;
       if (i37 >>> 0 < i16 >>> 0) {
        i36 = i37;
       } else {
        i35 = i16;
        break;
       }
      }
     }
    } while (0);
    i37 = HEAP32[i2 >> 2] | 0;
    i38 = i14 + (Math_imul(i37 >>> 0 < 2147483647 >>> 0 ? i37 : 2147483647, HEAP32[i13 >> 2] | 0) | 0) | 0;
    i37 = (HEAP32[(HEAP32[i12 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
    if ((i37 | 0) == 3 | (i37 | 0) == 0) {
     HEAP32[i32 >> 2] = i38;
    } else {
     HEAP32[i18 >> 2] = i38;
    }
    __ZN7WebCore9LineWidthC1ERNS_15RenderBlockFlowEbNS_15IndentTextOrNotE(i10, i3, 0, 0);
    __ZN7WebCore16SimpleLineLayout14createLineRunsIhEEN3WTF6VectorINS0_3RunELj4ENS2_15CrashOnOverflowEEEjRNS_9LineWidthERNS_21LazyLineBreakIteratorERKNS0_5StyleEPKT_jRKNS_10RenderTextE(i11, i35, i10, i9, i7, i15, i16, i4);
    i38 = HEAP32[i6 >> 2] | 0;
    i37 = _llvm_uadd_with_overflow_i32(i38 | 0, -1 | 0) | 0;
    if (!tempRet0) {
     i39 = 23;
     break;
    }
    i40 = (HEAP32[i22 >> 2] | 0) + (i37 << 4) + 4 | 0;
    i37 = HEAP32[i40 >> 2] | 0;
    i34 = i37 & 2147483647;
    if ((i35 | 0) == (i34 | 0)) {
     i41 = i38;
    } else {
     HEAP32[i40 >> 2] = i37 | -2147483648;
     d42 = +HEAPF32[i27 >> 2];
     d43 = +HEAPF32[i28 >> 2] - +HEAPF32[i26 >> 2];
     switch (HEAP32[i25 >> 2] | 0) {
     case 1:
     case 5:
     case 8:
      {
       d44 = d42 + (d43 < +0 ? +0 : d43);
       i39 = 28;
       break;
      }
     case 2:
     case 6:
      {
       d45 = d43 * +.5;
       d44 = d42 + (d45 < +0 ? +0 : d45);
       i39 = 28;
       break;
      }
     case 0:
     case 4:
     case 7:
      {
       d44 = d42;
       i39 = 28;
       break;
      }
     default:
      {
       i39 = 33;
      }
     }
     do {
      if ((i39 | 0) == 28) {
       i39 = 0;
       if (d44 == +0) {
        i39 = 33;
        break;
       }
       if ((HEAP32[i6 >> 2] | 0) == 0) {
        i46 = 0;
        break;
       } else {
        i47 = 0;
       }
       while (1) {
        i37 = (HEAP32[i22 >> 2] | 0) + (i47 << 4) + 8 | 0;
        HEAPF32[i37 >> 2] = d44 + +HEAPF32[i37 >> 2];
        if ((HEAP32[i6 >> 2] | 0) >>> 0 <= i47 >>> 0) {
         i39 = 31;
         break L16;
        }
        i37 = (HEAP32[i22 >> 2] | 0) + (i47 << 4) + 12 | 0;
        HEAPF32[i37 >> 2] = d44 + +HEAPF32[i37 >> 2];
        i37 = i47 + 1 | 0;
        i40 = HEAP32[i6 >> 2] | 0;
        if (i37 >>> 0 < i40 >>> 0) {
         i47 = i37;
        } else {
         i48 = i40;
         i39 = 34;
         break;
        }
       }
      }
     } while (0);
     if ((i39 | 0) == 33) {
      i39 = 0;
      i48 = HEAP32[i6 >> 2] | 0;
      i39 = 34;
     }
     do {
      if ((i39 | 0) == 34) {
       i39 = 0;
       if ((i48 | 0) == 0) {
        i46 = 0;
        break;
       }
       i40 = 0;
       i37 = HEAP32[i29 >> 2] | 0;
       while (1) {
        i38 = (HEAP32[i22 >> 2] | 0) + (i40 << 4) | 0;
        if ((i37 | 0) == (HEAP32[i30 >> 2] | 0)) {
         i49 = i37 + 1 | 0;
         i50 = HEAP32[i31 >> 2] | 0;
         do {
          if (i50 >>> 0 > i38 >>> 0) {
           i39 = 40;
          } else {
           if ((i50 + (i37 << 4) | 0) >>> 0 <= i38 >>> 0) {
            i39 = 40;
            break;
           }
           i51 = i49 + (i37 >>> 2) | 0;
           i52 = i51 >>> 0 > 16 >>> 0 ? i51 : 16;
           __ZN3WTF6VectorIN7WebCore16SimpleLineLayout3RunELj10ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i52 >>> 0 > i49 >>> 0 ? i52 : i49);
           i52 = HEAP32[i31 >> 2] | 0;
           i53 = i52 + (i38 - i50 >> 4 << 4) | 0;
           i54 = i52;
          }
         } while (0);
         if ((i39 | 0) == 40) {
          i39 = 0;
          i50 = i49 + (i37 >>> 2) | 0;
          i52 = i50 >>> 0 > 16 >>> 0 ? i50 : 16;
          __ZN3WTF6VectorIN7WebCore16SimpleLineLayout3RunELj10ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i52 >>> 0 > i49 >>> 0 ? i52 : i49);
          i53 = i38;
          i54 = HEAP32[i31 >> 2] | 0;
         }
         i52 = i54 + (HEAP32[i29 >> 2] << 4) | 0;
         i50 = i53;
         HEAP32[i52 >> 2] = HEAP32[i50 >> 2];
         HEAP32[i52 + 4 >> 2] = HEAP32[i50 + 4 >> 2];
         HEAP32[i52 + 8 >> 2] = HEAP32[i50 + 8 >> 2];
         HEAP32[i52 + 12 >> 2] = HEAP32[i50 + 12 >> 2];
        } else {
         i50 = (HEAP32[i31 >> 2] | 0) + (i37 << 4) | 0;
         i52 = i38;
         HEAP32[i50 >> 2] = HEAP32[i52 >> 2];
         HEAP32[i50 + 4 >> 2] = HEAP32[i52 + 4 >> 2];
         HEAP32[i50 + 8 >> 2] = HEAP32[i52 + 8 >> 2];
         HEAP32[i50 + 12 >> 2] = HEAP32[i52 + 12 >> 2];
        }
        i52 = (HEAP32[i29 >> 2] | 0) + 1 | 0;
        HEAP32[i29 >> 2] = i52;
        i50 = i40 + 1 | 0;
        i51 = HEAP32[i6 >> 2] | 0;
        if (i50 >>> 0 < i51 >>> 0) {
         i40 = i50;
         i37 = i52;
        } else {
         i46 = i51;
         break;
        }
       }
      }
     } while (0);
     HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
     i41 = i46;
    }
    if ((i41 | 0) != 0) {
     HEAP32[i6 >> 2] = 0;
    }
    i37 = HEAP32[i22 >> 2] | 0;
    if (!((i23 | 0) == (i37 | 0) | (i37 | 0) == 0)) {
     HEAP32[i22 >> 2] = 0;
     HEAP32[i24 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i37);
    }
    if (i34 >>> 0 >= i16 >>> 0) {
     break L14;
    }
   }
   if ((i39 | 0) == 23) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i39 | 0) == 31) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
  }
 } while (0);
 i39 = HEAP32[i19 >> 2] | 0;
 if ((i39 | 0) != 0) {
  __ZN7WebCore24releaseLineBreakIteratorEPNS_17TextBreakIteratorE(i39);
 }
 i39 = HEAP32[i21 >> 2] | 0;
 do {
  if ((i39 | 0) != 0) {
   i21 = i39 | 0;
   i19 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
   if ((i19 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i39);
    break;
   } else {
    HEAP32[i21 >> 2] = i19;
    break;
   }
  }
 } while (0);
 i39 = HEAP32[i20 >> 2] | 0;
 if ((i39 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i20 = i39 | 0;
 i19 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
 if ((i19 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i39);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i20 >> 2] = i19;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore16SimpleLineLayoutL9textWidthIhEEfRKNS_10RenderTextEPKT_jjjfRKNS0_5StyleE(i1, i2, i3, i4, i5, d6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 d6 = +d6;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, d29 = +0, d30 = +0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i9 = i8 | 0;
 i10 = i8 + 40 | 0;
 i11 = i7 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 i13 = HEAP32[i12 + 24 >> 2] | 0;
 i14 = i13 + 108 | 0;
 i15 = HEAP32[i14 >> 2] | 0;
 if ((i15 & 458752 | 0) == 0) {
  __ZNK7WebCore10FontGlyphs14determinePitchERKNS_15FontDescriptionE(i13, i12 | 0);
  i16 = HEAP32[i14 >> 2] | 0;
 } else {
  i16 = i15;
 }
 do {
  if ((i16 & 458752 | 0) != 65536) {
   if ((i4 | 0) == 0 & (i5 | 0) == (i3 | 0)) {
    break;
   }
   __ZN3WTF6StringC1EPKh(i10, i2 + i4 | 0);
   i15 = i9 + 4 | 0;
   i14 = i10 | 0;
   i12 = HEAP32[i14 >> 2] | 0;
   i13 = (i12 | 0) == 0;
   if (i13) {
    HEAP32[i15 >> 2] = 0;
    i17 = 0;
    i18 = i9 + 8 | 0;
   } else {
    HEAP32[i15 >> 2] = HEAP32[i12 + 4 >> 2];
    i17 = HEAP32[i12 + 4 >> 2] | 0;
    i18 = i9 + 8 | 0;
   }
   HEAP32[i18 >> 2] = i17;
   i19 = i9 + 12 | 0;
   HEAPF32[i19 >> 2] = +((i5 - i4 | 0) >>> 0 >>> 0);
   HEAPF32[i9 + 16 >> 2] = +1;
   HEAPF32[i9 + 20 >> 2] = +0;
   i20 = i9 + 24 | 0;
   i21 = HEAPU8[__ZN7WebCore7TextRun21s_allowsRoundingHacksE] | 0;
   i22 = i21 << 7 & 128 | (HEAP32[i20 >> 2] & -1020 | 81) | i21 << 8 & 256;
   HEAP32[i20 >> 2] = i22;
   i21 = i9 + 28 | 0;
   HEAP32[i21 >> 2] = 0;
   i23 = i9 + 32 | 0;
   HEAP32[i23 >> 2] = 0;
   do {
    if (i13) {
     HEAP32[i9 >> 2] = 0;
     HEAP32[i20 >> 2] = i22 & -559;
    } else {
     if ((HEAP32[i12 + 16 >> 2] & 32 | 0) == 0) {
      i24 = HEAP32[i12 + 8 >> 2] | 0;
      i25 = i22;
      i26 = i12;
     } else {
      i27 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i12) | 0;
      i24 = i27;
      i25 = HEAP32[i20 >> 2] | 0;
      i26 = HEAP32[i14 >> 2] | 0;
     }
     HEAP32[i9 >> 2] = i24;
     HEAP32[i20 >> 2] = i25 & -5;
     if ((i26 | 0) == 0) {
      break;
     }
     i27 = i26 | 0;
     i28 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
     if ((i28 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i26);
      break;
     } else {
      HEAP32[i27 >> 2] = i28;
      break;
     }
    }
   } while (0);
   HEAPF32[i19 >> 2] = d6;
   HEAP32[i15 >> 2] = i3 - i4;
   i14 = HEAP32[i7 + 16 >> 2] | 0;
   HEAP32[i20 >> 2] = ((i14 | 0) != 0) << 3 | HEAP32[i20 >> 2] & -9;
   HEAP32[i21 >> 2] = i14;
   d29 = +__ZNK7WebCore4Font5widthERKNS_7TextRunEPN3WTF7HashSetIPKNS_14SimpleFontDataENS4_7PtrHashIS8_EENS4_10HashTraitsIS8_EEEEPNS_13GlyphOverflowE(HEAP32[i11 >> 2] | 0, i9, 0, 0);
   i14 = HEAP32[i23 >> 2] | 0;
   if ((i14 | 0) == 0) {
    d30 = d29;
    STACKTOP = i8;
    return +d30;
   }
   i12 = i14 + 4 | 0;
   i14 = i12 | 0;
   i22 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   if ((i22 | 0) != 0) {
    HEAP32[i14 >> 2] = i22;
    d30 = d29;
    STACKTOP = i8;
    return +d30;
   }
   i22 = i12 - 4 | 0;
   if ((i22 | 0) == 0) {
    d30 = d29;
    STACKTOP = i8;
    return +d30;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i22 >> 2] | 0) + 4 >> 2] & 1](i22);
   d30 = d29;
   STACKTOP = i8;
   return +d30;
  }
 } while (0);
 d30 = +FUNCTION_TABLE_fiiiifii[HEAP32[(HEAP32[i1 >> 2] | 0) + 632 >> 2] & 1](i1, i4, i5 - i4 | 0, HEAP32[i11 >> 2] | 0, d6, 0, 0);
 STACKTOP = i8;
 return +d30;
}
function __ZN7WebCore21nextBreakablePositionItLb0EEEiRNS_21LazyLineBreakIteratorEPKT_ji(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 do {
  if ((i4 | 0) > 1) {
   i5 = HEAP16[i2 + (i4 - 2 << 1) >> 1] | 0;
   i6 = 4;
  } else {
   i7 = HEAP16[i1 + 12 >> 1] | 0;
   if ((i4 | 0) > 0) {
    i5 = i7;
    i6 = 4;
    break;
   }
   i8 = i1 + 14 | 0;
   i9 = i8;
   i10 = i7;
   i11 = i8;
  }
 } while (0);
 if ((i6 | 0) == 4) {
  i9 = i2 + (i4 - 1 << 1) | 0;
  i10 = i5;
  i11 = i1 + 14 | 0;
 }
 if ((HEAP16[i11 >> 1] | 0) == 0) {
  i12 = 0;
 } else {
  i12 = (HEAP16[i1 + 12 >> 1] | 0) == 0 ? 1 : 2;
 }
 if ((i4 | 0) >= (i3 | 0)) {
  i13 = i3;
  return i13 | 0;
 }
 i11 = i12 - 1 | 0;
 i5 = HEAP16[i9 >> 1] | 0;
 i9 = i10;
 i10 = i4;
 i4 = -1;
 L14 : while (1) {
  i8 = HEAP16[i2 + (i10 << 1) >> 1] | 0;
  i7 = i8 & 65535;
  if ((i7 | 0) == 32 | (i7 | 0) == 10 | (i7 | 0) == 9) {
   i13 = i10;
   i6 = 32;
   break;
  }
  i14 = i5 & 65535;
  do {
   if (i5 << 16 >> 16 == 45) {
    if ((i8 - 48 & 65535) >>> 0 >= 10 >>> 0) {
     if ((i8 - 33 & 65535) >>> 0 < 95 >>> 0) {
      i6 = 16;
      break;
     } else {
      break;
     }
    }
    if ((i9 - 48 & 65535) >>> 0 < 10 >>> 0) {
     i13 = i10;
     i6 = 28;
     break L14;
    }
    if (((i9 & 65535 | 32) - 97 | 0) >>> 0 < 26 >>> 0) {
     i13 = i10;
     i6 = 34;
     break L14;
    }
   } else {
    if ((i5 - 33 & 65535) >>> 0 < 95 >>> 0 & (i8 - 33 & 65535) >>> 0 < 95 >>> 0) {
     i6 = 16;
    }
   }
  } while (0);
  if ((i6 | 0) == 16) {
   i6 = 0;
   i15 = i7 - 33 | 0;
   if ((HEAPU8[((i15 | 0) / 8 & -1) + (__ZN7WebCore19asciiLineBreakTableE + ((i14 - 33 | 0) * 12 & -1)) | 0] & 1 << (i15 & 7) | 0) != 0) {
    i13 = i10;
    i6 = 29;
    break;
   }
  }
  if ((i8 & 65535) >>> 0 > 127 >>> 0 & i8 << 16 >> 16 != 160) {
   i6 = 20;
  } else {
   if ((i5 & 65535) >>> 0 > 127 >>> 0 & i5 << 16 >> 16 != 160) {
    i6 = 20;
   } else {
    i16 = i4;
   }
  }
  do {
   if ((i6 | 0) == 20) {
    i6 = 0;
    do {
     if ((i4 | 0) < (i10 | 0)) {
      if ((i10 | i12 | 0) == 0) {
       i17 = i4;
       break;
      }
      i15 = __ZN7WebCore21LazyLineBreakIterator3getEj(i1, i12) | 0;
      if ((i15 | 0) == 0) {
       i17 = i4;
       break;
      }
      i18 = __ZN7WebCore18textBreakFollowingEPNS_17TextBreakIteratorEi(i15, i11 + i10 | 0) | 0;
      i17 = i18 - ((i18 | 0) > -1 ? i12 : 0) | 0;
     } else {
      i17 = i4;
     }
    } while (0);
    if ((i10 | 0) != (i17 | 0)) {
     i16 = i17;
     break;
    }
    if ((i14 | 0) == 32 | (i14 | 0) == 10 | (i14 | 0) == 9) {
     i16 = i10;
    } else {
     i13 = i10;
     i6 = 33;
     break L14;
    }
   }
  } while (0);
  i14 = i10 + 1 | 0;
  if ((i14 | 0) < (i3 | 0)) {
   i9 = i5;
   i5 = i8;
   i10 = i14;
   i4 = i16;
  } else {
   i13 = i3;
   i6 = 31;
   break;
  }
 }
 if ((i6 | 0) == 28) {
  return i13 | 0;
 } else if ((i6 | 0) == 29) {
  return i13 | 0;
 } else if ((i6 | 0) == 31) {
  return i13 | 0;
 } else if ((i6 | 0) == 32) {
  return i13 | 0;
 } else if ((i6 | 0) == 33) {
  return i13 | 0;
 } else if ((i6 | 0) == 34) {
  return i13 | 0;
 }
 return 0;
}
function __ZN7WebCore21nextBreakablePositionIhLb0EEEiRNS_21LazyLineBreakIteratorEPKT_ji(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 do {
  if ((i4 | 0) > 1) {
   i5 = HEAP8[i2 + (i4 - 2) | 0] | 0;
   i6 = 4;
  } else {
   i7 = HEAP16[i1 + 12 >> 1] & 255;
   if ((i4 | 0) > 0) {
    i5 = i7;
    i6 = 4;
    break;
   }
   i8 = HEAP16[i1 + 14 >> 1] | 0;
   i9 = i8 & 255;
   i10 = i7;
   i11 = i8;
  }
 } while (0);
 if ((i6 | 0) == 4) {
  i9 = HEAP8[i2 + (i4 - 1) | 0] | 0;
  i10 = i5;
  i11 = HEAP16[i1 + 14 >> 1] | 0;
 }
 if (i11 << 16 >> 16 == 0) {
  i12 = 0;
 } else {
  i12 = (HEAP16[i1 + 12 >> 1] | 0) == 0 ? 1 : 2;
 }
 if ((i4 | 0) >= (i3 | 0)) {
  i13 = i3;
  return i13 | 0;
 }
 i11 = i12 - 1 | 0;
 i5 = i9;
 i9 = i10;
 i10 = i4;
 i4 = -1;
 L14 : while (1) {
  i8 = HEAP8[i2 + i10 | 0] | 0;
  i7 = i8 & 255;
  i14 = i8 & 255;
  if ((i14 | 0) == 32 | (i14 | 0) == 10 | (i14 | 0) == 9) {
   i13 = i10;
   i6 = 31;
   break;
  }
  i15 = i9 & 255;
  i16 = i5 & 255;
  do {
   if (i5 << 24 >> 24 == 45) {
    if ((i7 - 48 & 65535) >>> 0 >= 10 >>> 0) {
     i6 = 15;
     break;
    }
    if ((i15 - 48 & 65535) >>> 0 < 10 >>> 0) {
     i13 = i10;
     i6 = 28;
     break L14;
    }
    if (((i9 & 255 | 32) - 97 | 0) >>> 0 < 26 >>> 0) {
     i13 = i10;
     i6 = 32;
     break L14;
    }
   } else {
    if (((i5 & 255) - 33 & 65535) >>> 0 < 95 >>> 0) {
     i6 = 15;
    }
   }
  } while (0);
  do {
   if ((i6 | 0) == 15) {
    i6 = 0;
    if ((i7 - 33 & 65535) >>> 0 >= 95 >>> 0) {
     break;
    }
    i15 = i14 - 33 | 0;
    if ((HEAPU8[((i15 | 0) / 8 & -1) + (__ZN7WebCore19asciiLineBreakTableE + ((i16 - 33 | 0) * 12 & -1)) | 0] & 1 << (i15 & 7) | 0) != 0) {
     i13 = i10;
     i6 = 33;
     break L14;
    }
   }
  } while (0);
  if (i8 << 24 >> 24 < 0 & i8 << 24 >> 24 != -96) {
   i6 = 20;
  } else {
   if (i5 << 24 >> 24 < 0 & i5 << 24 >> 24 != -96) {
    i6 = 20;
   } else {
    i17 = i4;
   }
  }
  do {
   if ((i6 | 0) == 20) {
    i6 = 0;
    do {
     if ((i4 | 0) < (i10 | 0)) {
      if ((i10 | i12 | 0) == 0) {
       i18 = i4;
       break;
      }
      i14 = __ZN7WebCore21LazyLineBreakIterator3getEj(i1, i12) | 0;
      if ((i14 | 0) == 0) {
       i18 = i4;
       break;
      }
      i7 = __ZN7WebCore18textBreakFollowingEPNS_17TextBreakIteratorEi(i14, i11 + i10 | 0) | 0;
      i18 = i7 - ((i7 | 0) > -1 ? i12 : 0) | 0;
     } else {
      i18 = i4;
     }
    } while (0);
    if ((i10 | 0) != (i18 | 0)) {
     i17 = i18;
     break;
    }
    if ((i16 | 0) == 32 | (i16 | 0) == 10 | (i16 | 0) == 9) {
     i17 = i10;
    } else {
     i13 = i10;
     i6 = 34;
     break L14;
    }
   }
  } while (0);
  i16 = i10 + 1 | 0;
  if ((i16 | 0) < (i3 | 0)) {
   i9 = i5;
   i5 = i8;
   i10 = i16;
   i4 = i17;
  } else {
   i13 = i3;
   i6 = 29;
   break;
  }
 }
 if ((i6 | 0) == 28) {
  return i13 | 0;
 } else if ((i6 | 0) == 29) {
  return i13 | 0;
 } else if ((i6 | 0) == 31) {
  return i13 | 0;
 } else if ((i6 | 0) == 32) {
  return i13 | 0;
 } else if ((i6 | 0) == 33) {
  return i13 | 0;
 } else if ((i6 | 0) == 34) {
  return i13 | 0;
 }
 return 0;
}
function __ZN7WebCore16SimpleLineLayoutL9textWidthItEEfRKNS_10RenderTextEPKT_jjjfRKNS0_5StyleE(i1, i2, i3, i4, i5, d6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 d6 = +d6;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, d16 = +0, d17 = +0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i9 = i8 | 0;
 i10 = i7 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 i12 = HEAP32[i11 + 24 >> 2] | 0;
 i13 = i12 + 108 | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 if ((i14 & 458752 | 0) == 0) {
  __ZNK7WebCore10FontGlyphs14determinePitchERKNS_15FontDescriptionE(i12, i11 | 0);
  i15 = HEAP32[i13 >> 2] | 0;
 } else {
  i15 = i14;
 }
 do {
  if ((i15 & 458752 | 0) != 65536) {
   if ((i4 | 0) == 0 & (i5 | 0) == (i3 | 0)) {
    break;
   }
   HEAP32[i9 + 8 >> 2] = i5 - i4;
   HEAPF32[i9 + 16 >> 2] = +1;
   HEAPF32[i9 + 20 >> 2] = +0;
   i14 = i9 + 24 | 0;
   i13 = HEAPU8[__ZN7WebCore7TextRun21s_allowsRoundingHacksE] | 0;
   i11 = i13 << 7 & 128 | (HEAP32[i14 >> 2] & -1024 | 81) | i13 << 8 & 256;
   i13 = i9 + 32 | 0;
   HEAP32[i13 >> 2] = 0;
   HEAP32[i9 >> 2] = i2 + (i4 << 1);
   HEAPF32[i9 + 12 >> 2] = d6;
   HEAP32[i9 + 4 >> 2] = i3 - i4;
   i12 = HEAP32[i7 + 16 >> 2] | 0;
   HEAP32[i14 >> 2] = ((i12 | 0) != 0) << 3 | i11;
   HEAP32[i9 + 28 >> 2] = i12;
   d16 = +__ZNK7WebCore4Font5widthERKNS_7TextRunEPN3WTF7HashSetIPKNS_14SimpleFontDataENS4_7PtrHashIS8_EENS4_10HashTraitsIS8_EEEEPNS_13GlyphOverflowE(HEAP32[i10 >> 2] | 0, i9, 0, 0);
   i12 = HEAP32[i13 >> 2] | 0;
   if ((i12 | 0) == 0) {
    d17 = d16;
    STACKTOP = i8;
    return +d17;
   }
   i13 = i12 + 4 | 0;
   i12 = i13 | 0;
   i11 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) != 0) {
    HEAP32[i12 >> 2] = i11;
    d17 = d16;
    STACKTOP = i8;
    return +d17;
   }
   i11 = i13 - 4 | 0;
   if ((i11 | 0) == 0) {
    d17 = d16;
    STACKTOP = i8;
    return +d17;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 1](i11);
   d17 = d16;
   STACKTOP = i8;
   return +d17;
  }
 } while (0);
 d17 = +FUNCTION_TABLE_fiiiifii[HEAP32[(HEAP32[i1 >> 2] | 0) + 632 >> 2] & 1](i1, i4, i5 - i4 | 0, HEAP32[i10 >> 2] | 0, d6, 0, 0);
 STACKTOP = i8;
 return +d17;
}
function __ZN7WebCore16SimpleLineLayout5StyleC2ERKNS_11RenderStyleE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, d12 = +0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = __ZNK7WebCore11RenderStyle4fontEv(i2) | 0;
 HEAP32[i1 >> 2] = i5;
 HEAP32[i1 + 4 >> 2] = (HEAP32[i2 + 40 >> 2] | 0) >>> 13 & 15;
 i6 = i1 + 8 | 0;
 i7 = i2 + 44 | 0;
 HEAP8[i6] = ((HEAP32[i7 >> 2] & 7) - 1 | 0) >>> 0 > 1 >>> 0 | 0;
 i8 = HEAP32[i7 >> 2] & 7;
 i9 = (i8 | 0) != 4 & (i8 | 0) != 0 & 1;
 HEAP8[i1 + 9 | 0] = i9;
 i8 = HEAP32[i7 >> 2] & 7;
 HEAP8[i1 + 10 | 0] = (i8 | 0) != 1 & (i8 | 0) != 4 & 1;
 i7 = i1 + 11 | 0;
 i10 = i2 + 24 | 0;
 do {
  if ((HEAP32[(HEAP32[i10 >> 2] | 0) + 88 >> 2] & 256 | 0) == 0) {
   i11 = 0;
  } else {
   if (!((i8 | 0) == 4 | (i8 | 0) == 1)) {
    i11 = 1;
    break;
   }
   i11 = i9;
  }
 } while (0);
 HEAP8[i7] = i11;
 i11 = i1 + 12 | 0;
 HEAP32[i4 + 4 >> 2] = 1;
 HEAP32[i4 + 8 >> 2] = 1;
 HEAPF32[i4 + 12 >> 2] = +0;
 HEAPF32[i4 + 16 >> 2] = +1;
 HEAPF32[i4 + 20 >> 2] = +0;
 i7 = HEAPU8[__ZN7WebCore7TextRun21s_allowsRoundingHacksE] | 0;
 HEAP32[i4 + 24 >> 2] = i7 << 7 & 128 | i7 << 8 & 256 | 81;
 HEAP32[i4 + 28 >> 2] = 0;
 i7 = i4 + 32 | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i4 >> 2] = H_BASE + 8;
 d12 = +__ZNK7WebCore4Font5widthERKNS_7TextRunEPN3WTF7HashSetIPKNS_14SimpleFontDataENS4_7PtrHashIS8_EENS4_10HashTraitsIS8_EEEEPNS_13GlyphOverflowE(i5, i4, 0, 0);
 i4 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i7 = i4 + 4 | 0;
   i5 = i7 | 0;
   i9 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i5 >> 2] = i9;
    break;
   }
   i9 = i7 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 1](i9);
  }
 } while (0);
 HEAPF32[i11 >> 2] = d12;
 i11 = i1 + 16 | 0;
 if ((HEAP8[i6] & 1) != 0) {
  i13 = 0;
  HEAP32[i11 >> 2] = i13;
  STACKTOP = i3;
  return;
 }
 i13 = HEAP32[(HEAP32[i10 >> 2] | 0) + 124 >> 2] | 0;
 HEAP32[i11 >> 2] = i13;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore21LazyLineBreakIterator3getEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 if ((i2 | 0) == 0) {
  i5 = 0;
 } else {
  i5 = i1 + 12 + (2 - i2 << 1) | 0;
 }
 i6 = i1 + 8 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i8 = HEAP32[i1 >> 2] | 0;
  i9 = (i8 | 0) == 0;
  if ((HEAP32[i8 + 16 >> 2] & 32 | 0) == 0) {
   if (i9) {
    i10 = 0;
    i11 = 0;
   } else {
    i10 = HEAP32[i8 + 4 >> 2] | 0;
    i11 = HEAP32[i8 + 8 >> 2] | 0;
   }
   i12 = __ZN7WebCore24acquireLineBreakIteratorEPKtiRKN3WTF12AtomicStringES1_j(i11, i10, i1 + 4 | 0, i5, i2) | 0;
  } else {
   if (i9) {
    i13 = 0;
    i14 = 0;
   } else {
    i13 = HEAP32[i8 + 4 >> 2] | 0;
    i14 = HEAP32[i8 + 8 >> 2] | 0;
   }
   i12 = __ZN7WebCore24acquireLineBreakIteratorEPKhiRKN3WTF12AtomicStringEPKtj(i14, i13, i1 + 4 | 0, i5, i2) | 0;
  }
  HEAP32[i6 >> 2] = i12;
  HEAP32[i1 + 16 >> 2] = i5;
  HEAP32[i1 + 20 >> 2] = i2;
  i15 = i12;
  STACKTOP = i3;
  return i15 | 0;
 }
 do {
  if ((i5 | 0) == (HEAP32[i1 + 16 >> 2] | 0)) {
   if ((HEAP32[i1 + 20 >> 2] | 0) == (i2 | 0)) {
    i15 = i7;
   } else {
    break;
   }
   STACKTOP = i3;
   return i15 | 0;
  }
 } while (0);
 i7 = i4 | 0;
 i5 = HEAP32[i1 >> 2] | 0;
 HEAP32[i7 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i12 = i5 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
 }
 __ZN7WebCore21LazyLineBreakIterator29resetStringAndReleaseIteratorEN3WTF6StringERKNS1_12AtomicStringE(i1, i4, i1 + 4 | 0);
 i4 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i7 = i4 | 0;
   i12 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i7 >> 2] = i12;
    break;
   }
  }
 } while (0);
 i15 = __ZN7WebCore21LazyLineBreakIterator3getEj(i1, i2) | 0;
 STACKTOP = i3;
 return i15 | 0;
}
function __ZNK7WebCore12RenderObject16isAnonymousBlockEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 + 20 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 & 128 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = (i3 & 768 | 0) == 256;
 if (i5) {
  i6 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i6 = HEAP32[i1 + 36 >> 2] | 0;
 }
 do {
  if ((HEAP32[i6 + 48 >> 2] & 31 | 0) != 1) {
   if (i5) {
    i7 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0;
   } else {
    i7 = HEAP32[i1 + 36 >> 2] | 0;
   }
   if ((HEAP32[i7 + 48 >> 2] & 31 | 0) == 16) {
    break;
   } else {
    i4 = 0;
   }
   return i4 | 0;
  }
 } while (0);
 if (i5) {
  i8 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i8 = HEAP32[i1 + 36 >> 2] | 0;
 }
 if ((HEAP32[i8 + 52 >> 2] & 4032 | 0) != 0 | i5) {
  i4 = 0;
  return i4 | 0;
 }
 if ((HEAP32[i1 + 24 >> 2] & 16 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = i1;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 108 >> 2] & 1](i1) | 0) {
  i4 = 0;
  return i4 | 0;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 248 >> 2] & 1](i1) | 0) {
  i4 = 0;
  return i4 | 0;
 }
 if ((HEAP32[i2 >> 2] & 768 | 0) == 768) {
  i4 = 0;
  return i4 | 0;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 236 >> 2] & 1](i1) | 0) {
  i4 = 0;
  return i4 | 0;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 240 >> 2] & 1](i1) | 0) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 272 >> 2] & 1](i1) | 0) ^ 1;
 return i4 | 0;
}
function __ZN7WebCore16SimpleLineLayout6createERNS_15RenderBlockFlowE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 184 | 0;
 i4 = i3 | 0;
 i5 = i3 + 176 | 0;
 i6 = i4 + 12 | 0;
 i7 = i4 | 0;
 HEAP32[i7 >> 2] = i6;
 i8 = i4 + 4 | 0;
 HEAP32[i8 >> 2] = 10;
 i9 = i4 + 8 | 0;
 HEAP32[i9 >> 2] = 0;
 HEAP32[i5 >> 2] = 0;
 i10 = HEAP32[i2 + 28 >> 2] | 0;
 i11 = i10;
 if ((HEAP32[(HEAP32[i10 + 44 >> 2] | 0) + 16 >> 2] & 32 | 0) == 0) {
  __ZN7WebCore16SimpleLineLayout14createTextRunsItEEvRN3WTF6VectorINS0_3RunELj10ENS2_15CrashOnOverflowEEERjRNS_15RenderBlockFlowERNS_10RenderTextE(i4, i5, i2, i11);
 } else {
  __ZN7WebCore16SimpleLineLayout14createTextRunsIhEEvRN3WTF6VectorINS0_3RunELj10ENS2_15CrashOnOverflowEEERjRNS_15RenderBlockFlowERNS_10RenderTextE(i4, i5, i2, i11);
 }
 __ZN7WebCore12RenderObject16clearNeedsLayoutEv(i10);
 i10 = HEAP32[i5 >> 2] | 0;
 i5 = __ZN3WTF10fastMallocEj(HEAP32[i9 >> 2] << 4 | 8) | 0;
 HEAP32[i5 >> 2] = i10;
 i10 = HEAP32[i9 >> 2] | 0;
 HEAP32[i5 + 4 >> 2] = i10;
 _memcpy(i5 + 8 | 0, HEAP32[i7 >> 2] | 0, i10 << 4) | 0;
 HEAP32[i1 >> 2] = i5;
 if ((HEAP32[i9 >> 2] | 0) != 0) {
  HEAP32[i9 >> 2] = 0;
 }
 i9 = HEAP32[i7 >> 2] | 0;
 if ((i6 | 0) == (i9 | 0) | (i9 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i7 >> 2] = 0;
 HEAP32[i8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i9);
 STACKTOP = i3;
 return;
}
function __ZN3WTF6VectorIN7WebCore16SimpleLineLayout3RunELj10ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
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
 i7 = i5 + (i6 << 4) | 0;
 do {
  if (i2 >>> 0 > 10 >>> 0) {
   if (i2 >>> 0 > 268435455 >>> 0) {
    _WTFCrash();
   } else {
    i8 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 4) | 0;
    HEAP32[i3 >> 2] = i8 >>> 4;
    i9 = __ZN3WTF10fastMallocEj(i8) | 0;
    HEAP32[i4 >> 2] = i9;
    i10 = i9;
    break;
   }
  } else {
   i9 = i1 + 12 | 0;
   HEAP32[i4 >> 2] = i9;
   HEAP32[i3 >> 2] = 10;
   i10 = i9;
  }
 } while (0);
 if ((i6 | 0) != 0) {
  i6 = i5;
  i2 = i10;
  while (1) {
   i10 = i2;
   i9 = i6;
   HEAP32[i10 >> 2] = HEAP32[i9 >> 2];
   HEAP32[i10 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
   HEAP32[i10 + 8 >> 2] = HEAP32[i9 + 8 >> 2];
   HEAP32[i10 + 12 >> 2] = HEAP32[i9 + 12 >> 2];
   i9 = i6 + 16 | 0;
   if ((i9 | 0) == (i7 | 0)) {
    break;
   } else {
    i6 = i9;
    i2 = i2 + 16 | 0;
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
function __ZN3WTF6VectorIN7WebCore16SimpleLineLayout3RunELj4ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
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
 i7 = i5 + (i6 << 4) | 0;
 do {
  if (i2 >>> 0 > 4 >>> 0) {
   if (i2 >>> 0 > 268435455 >>> 0) {
    _WTFCrash();
   } else {
    i8 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 4) | 0;
    HEAP32[i3 >> 2] = i8 >>> 4;
    i9 = __ZN3WTF10fastMallocEj(i8) | 0;
    HEAP32[i4 >> 2] = i9;
    i10 = i9;
    break;
   }
  } else {
   i9 = i1 + 12 | 0;
   HEAP32[i4 >> 2] = i9;
   HEAP32[i3 >> 2] = 4;
   i10 = i9;
  }
 } while (0);
 if ((i6 | 0) != 0) {
  i6 = i5;
  i2 = i10;
  while (1) {
   i10 = i2;
   i9 = i6;
   HEAP32[i10 >> 2] = HEAP32[i9 >> 2];
   HEAP32[i10 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
   HEAP32[i10 + 8 >> 2] = HEAP32[i9 + 8 >> 2];
   HEAP32[i10 + 12 >> 2] = HEAP32[i9 + 12 >> 2];
   i9 = i6 + 16 | 0;
   if ((i9 | 0) == (i7 | 0)) {
    break;
   } else {
    i6 = i9;
    i2 = i2 + 16 | 0;
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
function __ZN7WebCore21LazyLineBreakIterator29resetStringAndReleaseIteratorEN3WTF6StringERKNS1_12AtomicStringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = i1 + 8 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) != 0) {
  __ZN7WebCore24releaseLineBreakIteratorEPNS_17TextBreakIteratorE(i5);
 }
 i5 = HEAP32[i2 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i2 = i5 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 i2 = i1 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i5;
 do {
  if ((i6 | 0) != 0) {
   i5 = i6 | 0;
   i2 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i5 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i3 >> 2] | 0;
 if ((i6 | 0) != 0) {
  i3 = i6 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 i3 = i1 + 4 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i6;
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
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 16 >> 2] = 0;
 HEAP32[i1 + 20 >> 2] = 0;
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
function __ZN7WebCore16SimpleLineLayout6Layout6createERKN3WTF6VectorINS0_3RunELj10ENS2_15CrashOnOverflowEEEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = i2 + 8 | 0;
 i5 = __ZN3WTF10fastMallocEj(HEAP32[i4 >> 2] << 4 | 8) | 0;
 HEAP32[i5 >> 2] = i3;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i5 + 4 >> 2] = i3;
 _memcpy(i5 + 8 | 0, HEAP32[i2 >> 2] | 0, i3 << 4) | 0;
 HEAP32[i1 >> 2] = i5;
 return;
}
function __ZN7WebCore16SimpleLineLayout6LayoutC2ERKN3WTF6VectorINS0_3RunELj10ENS2_15CrashOnOverflowEEEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i1 >> 2] = i3;
 i3 = HEAP32[i2 + 8 >> 2] | 0;
 HEAP32[i1 + 4 >> 2] = i3;
 _memcpy(i1 + 8 | 0, HEAP32[i2 >> 2] | 0, i3 << 4) | 0;
 return;
}
function __ZN7WebCore16SimpleLineLayout6LayoutC1ERKN3WTF6VectorINS0_3RunELj10ENS2_15CrashOnOverflowEEEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i1 >> 2] = i3;
 i3 = HEAP32[i2 + 8 >> 2] | 0;
 HEAP32[i1 + 4 >> 2] = i3;
 _memcpy(i1 + 8 | 0, HEAP32[i2 >> 2] | 0, i3 << 4) | 0;
 return;
}
function dynCall_fiiiifii(i1, i2, i3, i4, i5, d6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 d6 = +d6;
 i7 = i7 | 0;
 i8 = i8 | 0;
 return +FUNCTION_TABLE_fiiiifii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0, +d6, i7 | 0, i8 | 0);
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function b0(i1, i2, i3, i4, d5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 i6 = i6 | 0;
 i7 = i7 | 0;
 abort(0);
 return +0;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 3](i2 | 0, i3 | 0, i4 | 0);
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
 FUNCTION_TABLE_vii[i1 & 1](i2 | 0, i3 | 0);
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
function b4(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(4);
}
function b6(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(6);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
}
function __ZN3WTF15CrashOnOverflow10overflowedEv() {
 _WTFCrash();
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
function b5() {
 abort(5);
}
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_fiiiifii = [b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2];
  var FUNCTION_TABLE_ii = [b3,b3];
  var FUNCTION_TABLE_viii = [b4,b4,__ZN7WebCore16SimpleLineLayout6LayoutC2ERKN3WTF6VectorINS0_3RunELj10ENS2_15CrashOnOverflowEEEj,b4];
  var FUNCTION_TABLE_v = [b5,b5];
  var FUNCTION_TABLE_iii = [b6,b6];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_fiiiifii: dynCall_fiiiifii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_fiiiifii": invoke_fiiiifii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore19asciiLineBreakTableE": __ZN7WebCore19asciiLineBreakTableE, "__ZN7WebCore9HTMLNames8wrapAttrE": __ZN7WebCore9HTMLNames8wrapAttrE, "__ZN7WebCore7TextRun21s_allowsRoundingHacksE": __ZN7WebCore7TextRun21s_allowsRoundingHacksE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_fiiiifii = Module["dynCall_fiiiifii"] = asm["dynCall_fiiiifii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore21LazyLineBreakIterator3getEj","__ZN7WebCore16SimpleLineLayout14createTextRunsIhEEvRN3WTF6VectorINS0_3RunELj10ENS2_15CrashOnOverflowEEERjRNS_15RenderBlockFlowERNS_10RenderTextE","__ZNK7WebCore12RenderObject16isAnonymousBlockEv","__ZN7WebCore21nextBreakablePositionItLb0EEEiRNS_21LazyLineBreakIteratorEPKT_ji","__ZN7WebCore16SimpleLineLayout9canUseForERKNS_15RenderBlockFlowE","__ZN7WebCore16SimpleLineLayout14createLineRunsItEEN3WTF6VectorINS0_3RunELj4ENS2_15CrashOnOverflowEEEjRNS_9LineWidthERNS_21LazyLineBreakIteratorERKNS0_5StyleEPKT_jRKNS_10RenderTextE","__ZN7WebCore16SimpleLineLayout6createERNS_15RenderBlockFlowE","__ZN7WebCore21nextBreakablePositionIhLb0EEEiRNS_21LazyLineBreakIteratorEPKT_ji","__ZN3WTF6VectorIN7WebCore16SimpleLineLayout3RunELj4ENS_15CrashOnOverflowEE15reserveCapacityEj","_memset","_memcpy","__ZN7WebCore21LazyLineBreakIterator29resetStringAndReleaseIteratorEN3WTF6StringERKNS1_12AtomicStringE","__ZN7WebCore16SimpleLineLayout6LayoutC2ERKN3WTF6VectorINS0_3RunELj10ENS2_15CrashOnOverflowEEEj","__ZN7WebCore16SimpleLineLayoutL9textWidthItEEfRKNS_10RenderTextEPKT_jjjfRKNS0_5StyleE","__ZN7WebCore16SimpleLineLayout14createLineRunsIhEEN3WTF6VectorINS0_3RunELj4ENS2_15CrashOnOverflowEEEjRNS_9LineWidthERNS_21LazyLineBreakIteratorERKNS0_5StyleEPKT_jRKNS_10RenderTextE","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore16SimpleLineLayoutL9textWidthIhEEfRKNS_10RenderTextEPKT_jjjfRKNS0_5StyleE","__ZN7WebCore16SimpleLineLayout6Layout6createERKN3WTF6VectorINS0_3RunELj10ENS2_15CrashOnOverflowEEEj","__ZN7WebCore16SimpleLineLayout5StyleC2ERKNS_11RenderStyleE","__ZN7WebCore16SimpleLineLayout14createTextRunsItEEvRN3WTF6VectorINS0_3RunELj10ENS2_15CrashOnOverflowEEERjRNS_15RenderBlockFlowERNS_10RenderTextE","__ZN3WTF6VectorIN7WebCore16SimpleLineLayout3RunELj10ENS_15CrashOnOverflowEE15reserveCapacityEj"]

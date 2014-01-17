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
H_BASE = parentModule["_malloc"](16 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 16;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore14IconControllerC1ERNS_5FrameE;
var __ZN7WebCore14IconControllerD1Ev;
/* memory initializer */ allocate([47,102,97,118,105,99,111,110,46,105,99,111,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_iiii(index,a1,a2,a3) {
  try {
    return Module["dynCall_iiii"](index,a1,a2,a3);
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
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_iiii=env.invoke_iiii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore14IconController12urlsForTypesEi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i5 = i4 | 0;
 i6 = i1 | 0;
 HEAP32[i6 >> 2] = i1 + 12;
 i7 = i1 + 4 | 0;
 HEAP32[i7 >> 2] = 1;
 i8 = i1 + 8 | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = i2 | 0;
 if ((__ZNK7WebCore9FrameTree6parentEv((HEAP32[i9 >> 2] | 0) + 40 | 0) | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 do {
  if ((i3 & 1 | 0) != 0) {
   if (__ZN7WebCore14IconController16appendToIconURLsENS_8IconTypeEPN3WTF6VectorINS_7IconURLELj1ENS2_15CrashOnOverflowEEE(i2, 1, i1) | 0) {
    break;
   }
   __ZN7WebCore14IconController10defaultURLENS_8IconTypeE(i5, i2, 1);
   i10 = HEAP32[i8 >> 2] | 0;
   if ((i10 | 0) == (HEAP32[i7 >> 2] | 0)) {
    __ZN3WTF6VectorIN7WebCore7IconURLELj1ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_(i1, i5);
    i11 = i5 + 12 | 0;
   } else {
    i12 = HEAP32[i6 >> 2] | 0;
    HEAP32[i12 + (i10 << 6) >> 2] = HEAP32[i5 >> 2];
    i13 = i5 + 4 | 0;
    i14 = HEAP32[i13 >> 2] | 0;
    HEAP32[i13 >> 2] = 0;
    HEAP32[i12 + (i10 << 6) + 4 >> 2] = i14;
    i14 = i5 + 8 | 0;
    i13 = HEAP32[i14 >> 2] | 0;
    HEAP32[i14 >> 2] = 0;
    HEAP32[i12 + (i10 << 6) + 8 >> 2] = i13;
    i13 = i5 + 12 | 0;
    i14 = HEAP32[i13 >> 2] | 0;
    HEAP32[i13 >> 2] = 0;
    HEAP32[i12 + (i10 << 6) + 12 >> 2] = i14;
    i14 = i5 + 16 | 0;
    i15 = i12 + (i10 << 6) + 16 | 0;
    i16 = HEAP8[i15] & -2 | HEAP8[i14] & 1;
    HEAP8[i15] = i16;
    HEAP8[i15] = i16 & -3 | HEAP8[i14] & 2;
    HEAP32[i12 + (i10 << 6) + 20 >> 2] = HEAP32[i5 + 20 >> 2];
    HEAP32[i12 + (i10 << 6) + 24 >> 2] = HEAP32[i5 + 24 >> 2];
    HEAP32[i12 + (i10 << 6) + 28 >> 2] = HEAP32[i5 + 28 >> 2];
    HEAP32[i12 + (i10 << 6) + 32 >> 2] = HEAP32[i5 + 32 >> 2];
    HEAP32[i12 + (i10 << 6) + 36 >> 2] = HEAP32[i5 + 36 >> 2];
    HEAP32[i12 + (i10 << 6) + 40 >> 2] = HEAP32[i5 + 40 >> 2];
    HEAP32[i12 + (i10 << 6) + 44 >> 2] = HEAP32[i5 + 44 >> 2];
    HEAP32[i12 + (i10 << 6) + 48 >> 2] = HEAP32[i5 + 48 >> 2];
    HEAP32[i12 + (i10 << 6) + 52 >> 2] = HEAP32[i5 + 52 >> 2];
    HEAP32[i12 + (i10 << 6) + 56 >> 2] = HEAP32[i5 + 56 >> 2];
    HEAP8[i12 + (i10 << 6) + 60 | 0] = HEAP8[i5 + 60 | 0] & 1;
    HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
    i11 = i13;
   }
   i13 = HEAP32[i11 >> 2] | 0;
   do {
    if ((i13 | 0) != 0) {
     i10 = i13 | 0;
     i12 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
     if ((i12 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i13);
      break;
     } else {
      HEAP32[i10 >> 2] = i12;
      break;
     }
    }
   } while (0);
   i13 = HEAP32[i5 + 8 >> 2] | 0;
   do {
    if ((i13 | 0) != 0) {
     i12 = i13 | 0;
     i10 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
     if ((i10 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i13);
      break;
     } else {
      HEAP32[i12 >> 2] = i10;
      break;
     }
    }
   } while (0);
   i13 = HEAP32[i5 + 4 >> 2] | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   i10 = i13 | 0;
   i12 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i10 >> 2] = i12;
    break;
   }
  }
 } while (0);
 i5 = __ZN7WebCore8Document8iconURLsEi(HEAP32[(HEAP32[i9 >> 2] | 0) + 456 >> 2] | 0, i3) | 0;
 i3 = i5 | 0;
 i9 = i5 + 8 | 0;
 if ((HEAP32[i9 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i5 = HEAP32[i3 >> 2] | 0;
 L31 : while (1) {
  i11 = HEAP32[i8 >> 2] | 0;
  i2 = 0;
  while (1) {
   if ((i2 | 0) >= (i11 | 0)) {
    break;
   }
   if ((HEAP32[i8 >> 2] | 0) >>> 0 <= i2 >>> 0) {
    i17 = 24;
    break L31;
   }
   if (__ZN7WebCoreeqERKNS_7IconURLES2_(i5, (HEAP32[i6 >> 2] | 0) + (i2 << 6) | 0) | 0) {
    break;
   } else {
    i2 = i2 + 1 | 0;
   }
  }
  do {
   if ((i2 | 0) == (i11 | 0)) {
    i12 = HEAP32[i8 >> 2] | 0;
    if ((i12 | 0) == (HEAP32[i7 >> 2] | 0)) {
     __ZN3WTF6VectorIN7WebCore7IconURLELj1ENS_15CrashOnOverflowEE14appendSlowCaseIRKS2_EEvOT_(i1, i5);
     break;
    }
    i10 = HEAP32[i6 >> 2] | 0;
    HEAP32[i10 + (i12 << 6) >> 2] = HEAP32[i5 >> 2];
    i13 = HEAP32[i5 + 4 >> 2] | 0;
    HEAP32[i10 + (i12 << 6) + 4 >> 2] = i13;
    if ((i13 | 0) != 0) {
     i14 = i13 | 0;
     HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
    }
    i14 = HEAP32[i5 + 8 >> 2] | 0;
    HEAP32[i10 + (i12 << 6) + 8 >> 2] = i14;
    if ((i14 | 0) != 0) {
     i13 = i14 | 0;
     HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
    }
    i13 = HEAP32[i5 + 12 >> 2] | 0;
    HEAP32[i10 + (i12 << 6) + 12 >> 2] = i13;
    if ((i13 | 0) != 0) {
     i14 = i13 | 0;
     HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
    }
    i14 = i5 + 16 | 0;
    i13 = i10 + (i12 << 6) + 16 | 0;
    i16 = HEAP8[i13] & -2 | HEAP8[i14] & 1;
    HEAP8[i13] = i16;
    HEAP8[i13] = i16 & -3 | HEAP8[i14] & 2;
    HEAP32[i10 + (i12 << 6) + 20 >> 2] = HEAP32[i5 + 20 >> 2];
    HEAP32[i10 + (i12 << 6) + 24 >> 2] = HEAP32[i5 + 24 >> 2];
    HEAP32[i10 + (i12 << 6) + 28 >> 2] = HEAP32[i5 + 28 >> 2];
    HEAP32[i10 + (i12 << 6) + 32 >> 2] = HEAP32[i5 + 32 >> 2];
    HEAP32[i10 + (i12 << 6) + 36 >> 2] = HEAP32[i5 + 36 >> 2];
    HEAP32[i10 + (i12 << 6) + 40 >> 2] = HEAP32[i5 + 40 >> 2];
    HEAP32[i10 + (i12 << 6) + 44 >> 2] = HEAP32[i5 + 44 >> 2];
    HEAP32[i10 + (i12 << 6) + 48 >> 2] = HEAP32[i5 + 48 >> 2];
    HEAP32[i10 + (i12 << 6) + 52 >> 2] = HEAP32[i5 + 52 >> 2];
    HEAP32[i10 + (i12 << 6) + 56 >> 2] = HEAP32[i5 + 56 >> 2];
    HEAP8[i10 + (i12 << 6) + 60 | 0] = HEAP8[i5 + 60 | 0] & 1;
    HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
   }
  } while (0);
  i11 = i5 + 64 | 0;
  if ((i11 | 0) == ((HEAP32[i3 >> 2] | 0) + (HEAP32[i9 >> 2] << 6) | 0)) {
   i17 = 40;
   break;
  } else {
   i5 = i11;
  }
 }
 if ((i17 | 0) == 24) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i17 | 0) == 40) {
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore14IconController16appendToIconURLsENS_8IconTypeEPN3WTF6VectorINS_7IconURLELj1ENS2_15CrashOnOverflowEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i5 = i4 | 0;
 i6 = i5 + 12 | 0;
 _memset(i5 | 0, 0, 16) | 0;
 __ZN7WebCore3URL10invalidateEv(i6);
 i7 = i5 + 60 | 0;
 HEAP8[i7] = 0;
 i8 = __ZN7WebCore8Document8iconURLsEi(HEAP32[(HEAP32[i1 >> 2] | 0) + 456 >> 2] | 0, i2) | 0;
 i2 = i8 | 0;
 i1 = i8 + 8 | 0;
 i8 = HEAP32[i1 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i9 = i6 | 0;
 } else {
  i10 = HEAP32[i2 >> 2] | 0;
  i11 = i6 | 0;
  i6 = i10;
  i12 = i10;
  i10 = i8;
  while (1) {
   i8 = HEAP32[i11 >> 2] | 0;
   do {
    if ((i8 | 0) == 0) {
     i13 = 8;
    } else {
     if ((HEAP32[i8 + 4 >> 2] | 0) == 0) {
      i13 = 8;
      break;
     }
     i14 = HEAP32[i6 + 8 >> 2] | 0;
     if ((i14 | 0) == 0) {
      i15 = i12;
      i16 = i10;
      break;
     }
     if ((HEAP32[i14 + 4 >> 2] | 0) == 0) {
      i15 = i12;
      i16 = i10;
     } else {
      i13 = 8;
     }
    }
   } while (0);
   if ((i13 | 0) == 8) {
    i13 = 0;
    __ZN7WebCore7IconURLaSERKS0_(i5, i6) | 0;
    i15 = HEAP32[i2 >> 2] | 0;
    i16 = HEAP32[i1 >> 2] | 0;
   }
   i8 = i6 + 64 | 0;
   if ((i8 | 0) == (i15 + (i16 << 6) | 0)) {
    i9 = i11;
    break;
   } else {
    i6 = i8;
    i12 = i15;
    i10 = i16;
   }
  }
 }
 i16 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i16 | 0) == 0) {
   i17 = 0;
  } else {
   if ((HEAP32[i16 + 4 >> 2] | 0) == 0) {
    i17 = 0;
    break;
   }
   i9 = i3 + 8 | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   if ((i10 | 0) == (HEAP32[i3 + 4 >> 2] | 0)) {
    __ZN3WTF6VectorIN7WebCore7IconURLELj1ENS_15CrashOnOverflowEE14appendSlowCaseIRS2_EEvOT_(i3, i5);
    i17 = 1;
    break;
   }
   i15 = HEAP32[i3 >> 2] | 0;
   HEAP32[i15 + (i10 << 6) >> 2] = HEAP32[i5 >> 2];
   i12 = HEAP32[i5 + 4 >> 2] | 0;
   HEAP32[i15 + (i10 << 6) + 4 >> 2] = i12;
   if ((i12 | 0) != 0) {
    i6 = i12 | 0;
    HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
   }
   i6 = HEAP32[i5 + 8 >> 2] | 0;
   HEAP32[i15 + (i10 << 6) + 8 >> 2] = i6;
   if ((i6 | 0) != 0) {
    i12 = i6 | 0;
    HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
   }
   i12 = HEAP32[i5 + 12 >> 2] | 0;
   HEAP32[i15 + (i10 << 6) + 12 >> 2] = i12;
   if ((i12 | 0) != 0) {
    i6 = i12 | 0;
    HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
   }
   i6 = i5 + 16 | 0;
   i12 = i15 + (i10 << 6) + 16 | 0;
   i11 = HEAP8[i12] & -2 | HEAP8[i6] & 1;
   HEAP8[i12] = i11;
   HEAP8[i12] = i11 & -3 | HEAP8[i6] & 2;
   HEAP32[i15 + (i10 << 6) + 20 >> 2] = HEAP32[i5 + 20 >> 2];
   HEAP32[i15 + (i10 << 6) + 24 >> 2] = HEAP32[i5 + 24 >> 2];
   HEAP32[i15 + (i10 << 6) + 28 >> 2] = HEAP32[i5 + 28 >> 2];
   HEAP32[i15 + (i10 << 6) + 32 >> 2] = HEAP32[i5 + 32 >> 2];
   HEAP32[i15 + (i10 << 6) + 36 >> 2] = HEAP32[i5 + 36 >> 2];
   HEAP32[i15 + (i10 << 6) + 40 >> 2] = HEAP32[i5 + 40 >> 2];
   HEAP32[i15 + (i10 << 6) + 44 >> 2] = HEAP32[i5 + 44 >> 2];
   HEAP32[i15 + (i10 << 6) + 48 >> 2] = HEAP32[i5 + 48 >> 2];
   HEAP32[i15 + (i10 << 6) + 52 >> 2] = HEAP32[i5 + 52 >> 2];
   HEAP32[i15 + (i10 << 6) + 56 >> 2] = HEAP32[i5 + 56 >> 2];
   HEAP8[i15 + (i10 << 6) + 60 | 0] = HEAP8[i7] & 1;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
   i17 = 1;
  }
 } while (0);
 i7 = HEAP32[i5 + 12 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i3 = i7 | 0;
   i16 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i3 >> 2] = i16;
    break;
   }
  }
 } while (0);
 i7 = HEAP32[i5 + 8 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i16 = i7 | 0;
   i3 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i16 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i7 = HEAP32[i5 + 4 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i4;
  return i17 | 0;
 }
 i5 = i7 | 0;
 i3 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i7);
  STACKTOP = i4;
  return i17 | 0;
 } else {
  HEAP32[i5 >> 2] = i3;
  STACKTOP = i4;
  return i17 | 0;
 }
 return 0;
}
function __ZN7WebCore14IconController24continueLoadWithDecisionENS_16IconLoadDecisionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i4 = i3 | 0;
 i5 = i3 + 48 | 0;
 i6 = i3 + 56 | 0;
 i7 = i3 + 64 | 0;
 i8 = __ZN7WebCore12iconDatabaseEv() | 0;
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 48 >> 2] & 1](i8) | 0) {
   if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] | 0) + 48 >> 2] | 0) + 194 | 0] & 64) == 0) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 if ((i2 | 0) != 1) {
  i2 = i1 + 4 | 0;
  i8 = HEAP32[i2 >> 2] | 0;
  do {
   if ((i8 | 0) == 0) {
    i9 = HEAP32[i1 >> 2] | 0;
    i10 = __ZN3WTF10fastMallocEj(12) | 0;
    __ZN7WebCore10IconLoaderC1ERNS_5FrameE(i10, i9);
    i9 = HEAP32[i2 >> 2] | 0;
    HEAP32[i2 >> 2] = i10;
    if ((i9 | 0) == 0) {
     i11 = i10;
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 3](i9);
    i11 = HEAP32[i2 >> 2] | 0;
   } else {
    i11 = i8;
   }
  } while (0);
  __ZN7WebCore10IconLoader12startLoadingEv(i11);
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore14IconController3urlEv(i4, i1);
 i11 = i4 | 0;
 i8 = i5 | 0;
 i2 = i4 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i8 >> 2] = i4;
 do {
  if ((i4 | 0) != 0) {
   i9 = i4 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
   i9 = HEAP32[i8 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   do {
    if ((HEAP32[i9 + 4 >> 2] | 0) != 0) {
     i10 = __ZN7WebCore12iconDatabaseEv() | 0;
     i12 = i1 | 0;
     FUNCTION_TABLE_viii[HEAP32[(HEAP32[i10 >> 2] | 0) + 20 >> 2] & 1](i10, i11, (HEAP32[(HEAP32[i12 >> 2] | 0) + 456 >> 2] | 0) + 356 | 0);
     i10 = __ZN7WebCore12iconDatabaseEv() | 0;
     i13 = HEAP32[(HEAP32[i10 >> 2] | 0) + 20 >> 2] | 0;
     i14 = __ZNK7WebCore19ResourceRequestBase3urlEv(__ZNK7WebCore11FrameLoader14initialRequestEv((HEAP32[i12 >> 2] | 0) + 80 | 0) | 0) | 0;
     FUNCTION_TABLE_viii[i13 & 1](i10, i11, i14);
     i14 = __ZN7WebCore12iconDatabaseEv() | 0;
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 48 >> 2] & 1](i14) | 0) {
      __ZN7WebCore14DocumentLoader21getIconDataForIconURLERKN3WTF6StringE(HEAP32[(HEAP32[i12 >> 2] | 0) + 128 >> 2] | 0, i5);
      break;
     }
     i14 = __ZN7WebCore12iconDatabaseEv() | 0;
     i10 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i14 >> 2] | 0) + 32 >> 2] & 1](i14, i5) | 0;
     i14 = HEAP32[(HEAP32[i12 >> 2] | 0) + 84 >> 2] | 0;
     if (i10) {
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 124 >> 2] & 3](i14);
      break;
     } else {
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i14 >> 2] | 0) + 460 >> 2] & 3](i14, 1);
      i14 = __ZN7WebCore12iconDatabaseEv() | 0;
      i10 = HEAP32[(HEAP32[i14 >> 2] | 0) + 40 >> 2] | 0;
      i13 = (HEAP32[(HEAP32[i12 >> 2] | 0) + 456 >> 2] | 0) + 356 | 0;
      HEAP32[i6 >> 2] = 0;
      HEAP32[i6 + 4 >> 2] = 0;
      FUNCTION_TABLE_iiii[i10 & 1](i14, i13, i6) | 0;
      i13 = __ZN7WebCore12iconDatabaseEv() | 0;
      i14 = HEAP32[(HEAP32[i13 >> 2] | 0) + 40 >> 2] | 0;
      i10 = __ZNK7WebCore19ResourceRequestBase3urlEv(__ZNK7WebCore11FrameLoader14initialRequestEv((HEAP32[i12 >> 2] | 0) + 80 | 0) | 0) | 0;
      HEAP32[i7 >> 2] = 0;
      HEAP32[i7 + 4 >> 2] = 0;
      FUNCTION_TABLE_iiii[i14 & 1](i13, i10, i7) | 0;
      break;
     }
    }
   } while (0);
   i9 = HEAP32[i8 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   i10 = i9 | 0;
   i13 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i10 >> 2] = i13;
    break;
   }
  }
 } while (0);
 i8 = HEAP32[i2 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i2 = i8 | 0;
 i7 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
 if ((i7 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i8);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i2 >> 2] = i7;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore14IconController11startLoaderEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i3 = i2 | 0;
 i4 = i2 + 48 | 0;
 i5 = i1 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((HEAP32[i6 + 28 >> 2] | 0) != (i6 | 0)) {
  STACKTOP = i2;
  return;
 }
 i6 = __ZN7WebCore12iconDatabaseEv() | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] & 1](i6) | 0)) {
  STACKTOP = i2;
  return;
 }
 if (!(__ZN7WebCore19documentCanHaveIconERKN3WTF6StringE((HEAP32[(HEAP32[i5 >> 2] | 0) + 456 >> 2] | 0) + 356 | 0) | 0)) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore14IconController3urlEv(i3, i1);
 i6 = i3 | 0;
 i7 = i4 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i7 >> 2] = i3;
 do {
  if ((i3 | 0) != 0) {
   i9 = i3 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
   i9 = HEAP32[i7 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   L13 : do {
    if ((HEAP32[i9 + 4 >> 2] | 0) != 0) {
     i10 = HEAP32[i5 >> 2] | 0;
     i11 = HEAP32[i10 + 36 >> 2] | 0;
     if ((HEAP8[i11 + 194 | 0] & 32) == 0) {
      if ((HEAP8[i11 + 186 | 0] & 8) == 0) {
       break;
      }
     }
     do {
      if ((__ZNK7WebCore11FrameLoader8loadTypeEv(i10 + 80 | 0) | 0) == 4) {
       if ((__ZNK7WebCore11FrameLoader8loadTypeEv((HEAP32[i5 >> 2] | 0) + 80 | 0) | 0) != 9) {
        break;
       }
       __ZN7WebCore14IconController24continueLoadWithDecisionENS_16IconLoadDecisionE(i1, 0);
       break L13;
      }
     } while (0);
     i10 = __ZN7WebCore12iconDatabaseEv() | 0;
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 48 >> 2] & 1](i10) | 0) {
      __ZN7WebCore14DocumentLoader29getIconLoadDecisionForIconURLERKN3WTF6StringE(HEAP32[(HEAP32[i5 >> 2] | 0) + 128 >> 2] | 0, i4);
      i10 = __ZN7WebCore12iconDatabaseEv() | 0;
      FUNCTION_TABLE_viii[HEAP32[(HEAP32[i10 >> 2] | 0) + 20 >> 2] & 1](i10, i6, (HEAP32[(HEAP32[i5 >> 2] | 0) + 456 >> 2] | 0) + 356 | 0);
      i10 = __ZN7WebCore12iconDatabaseEv() | 0;
      i11 = HEAP32[(HEAP32[i10 >> 2] | 0) + 20 >> 2] | 0;
      i12 = __ZNK7WebCore19ResourceRequestBase3urlEv(__ZNK7WebCore11FrameLoader14initialRequestEv((HEAP32[i5 >> 2] | 0) + 80 | 0) | 0) | 0;
      FUNCTION_TABLE_viii[i11 & 1](i10, i6, i12);
      break;
     }
     i12 = __ZN7WebCore12iconDatabaseEv() | 0;
     i10 = FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i12 >> 2] | 0) + 36 >> 2] & 1](i12, i4, HEAP32[(HEAP32[i5 >> 2] | 0) + 128 >> 2] | 0) | 0;
     if ((i10 | 0) == 2) {
      HEAP8[i1 + 8 | 0] = 1;
      i12 = HEAP32[(HEAP32[i5 >> 2] | 0) + 84 >> 2] | 0;
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i12 >> 2] | 0) + 460 >> 2] & 3](i12, 1);
      i12 = __ZN7WebCore12iconDatabaseEv() | 0;
      FUNCTION_TABLE_viii[HEAP32[(HEAP32[i12 >> 2] | 0) + 20 >> 2] & 1](i12, i6, (HEAP32[(HEAP32[i5 >> 2] | 0) + 456 >> 2] | 0) + 356 | 0);
      i12 = __ZN7WebCore12iconDatabaseEv() | 0;
      i11 = HEAP32[(HEAP32[i12 >> 2] | 0) + 20 >> 2] | 0;
      i13 = __ZNK7WebCore19ResourceRequestBase3urlEv(__ZNK7WebCore11FrameLoader14initialRequestEv((HEAP32[i5 >> 2] | 0) + 80 | 0) | 0) | 0;
      FUNCTION_TABLE_viii[i11 & 1](i12, i6, i13);
      break;
     } else {
      __ZN7WebCore14IconController24continueLoadWithDecisionENS_16IconLoadDecisionE(i1, i10);
      break;
     }
    }
   } while (0);
   i9 = HEAP32[i7 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   i10 = i9 | 0;
   i13 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i10 >> 2] = i13;
    break;
   }
  }
 } while (0);
 i7 = HEAP32[i8 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i8 = i7 | 0;
 i1 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i7);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i8 >> 2] = i1;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore14IconController10defaultURLENS_8IconTypeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 120 | 0;
 i5 = i4 | 0;
 i6 = i4 + 48 | 0;
 i7 = i4 + 96 | 0;
 i8 = i4 + 104 | 0;
 i9 = i4 + 112 | 0;
 i10 = HEAP32[(HEAP32[i2 >> 2] | 0) + 456 >> 2] | 0;
 i2 = i5 | 0;
 i11 = HEAP32[i10 + 356 >> 2] | 0;
 HEAP32[i2 >> 2] = i11;
 if ((i11 | 0) == 0) {
  i12 = 0;
  i13 = i5 + 4 | 0;
 } else {
  i14 = i11 | 0;
  HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
  i14 = i5 + 4 | 0;
  i12 = HEAP8[i14] & -2;
  i13 = i14;
 }
 i14 = i10 + 360 | 0;
 i11 = i12 | HEAP8[i14] & 1;
 HEAP8[i13] = i11;
 i12 = HEAP8[i14] & 2;
 HEAP8[i13] = i11 & -3 | i12;
 HEAP32[i5 + 8 >> 2] = HEAP32[i10 + 364 >> 2];
 HEAP32[i5 + 12 >> 2] = HEAP32[i10 + 368 >> 2];
 HEAP32[i5 + 16 >> 2] = HEAP32[i10 + 372 >> 2];
 HEAP32[i5 + 20 >> 2] = HEAP32[i10 + 376 >> 2];
 i11 = i5 + 24 | 0;
 HEAP32[i11 >> 2] = HEAP32[i10 + 380 >> 2];
 i13 = i5 + 28 | 0;
 HEAP32[i13 >> 2] = HEAP32[i10 + 384 >> 2];
 HEAP32[i5 + 32 >> 2] = HEAP32[i10 + 388 >> 2];
 HEAP32[i5 + 36 >> 2] = HEAP32[i10 + 392 >> 2];
 HEAP32[i5 + 40 >> 2] = HEAP32[i10 + 396 >> 2];
 HEAP32[i5 + 44 >> 2] = HEAP32[i10 + 400 >> 2];
 do {
  if (i12 << 24 >> 24 == 0) {
   _memset(i1 | 0, 0, 16) | 0;
   __ZN7WebCore3URL10invalidateEv(i1 + 12 | 0);
   HEAP8[i1 + 60 | 0] = 0;
  } else {
   i10 = i6 | 0;
   HEAP32[i10 >> 2] = 0;
   __ZN7WebCore3URL10invalidateEv(i6);
   __ZNK7WebCore3URL8protocolEv(i7, i5);
   __ZN7WebCore3URL11setProtocolERKN3WTF6StringE(i6, i7) | 0;
   i14 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i14 | 0) != 0) {
     i15 = i14 | 0;
     i16 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
     if ((i16 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i14);
      break;
     } else {
      HEAP32[i15 >> 2] = i16;
      break;
     }
    }
   } while (0);
   __ZNK7WebCore3URL4hostEv(i8, i5);
   __ZN7WebCore3URL7setHostERKN3WTF6StringE(i6, i8);
   i14 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i14 | 0) != 0) {
     i16 = i14 | 0;
     i15 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
     if ((i15 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i14);
      break;
     } else {
      HEAP32[i16 >> 2] = i15;
      break;
     }
    }
   } while (0);
   if ((HEAP32[i11 >> 2] | 0) < (HEAP32[i13 >> 2] | 0)) {
    __ZN7WebCore3URL7setPortEt(i6, __ZNK7WebCore3URL4portEv(i5) | 0);
   }
   if ((i3 | 0) == 1) {
    __ZN3WTF6StringC1EPKc(i9, H_BASE + 8 | 0);
    __ZN7WebCore3URL7setPathERKN3WTF6StringE(i6, i9);
    i14 = HEAP32[i9 >> 2] | 0;
    do {
     if ((i14 | 0) != 0) {
      i15 = i14 | 0;
      i16 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
      if ((i16 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i14);
       break;
      } else {
       HEAP32[i15 >> 2] = i16;
       break;
      }
     }
    } while (0);
    __ZN7WebCore7IconURL14defaultIconURLERKNS_3URLENS_8IconTypeE(i1, i6, 1);
   } else {
    _memset(i1 | 0, 0, 16) | 0;
    __ZN7WebCore3URL10invalidateEv(i1 + 12 | 0);
    HEAP8[i1 + 60 | 0] = 0;
   }
   i14 = HEAP32[i10 >> 2] | 0;
   if ((i14 | 0) == 0) {
    break;
   }
   i16 = i14 | 0;
   i15 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    break;
   } else {
    HEAP32[i16 >> 2] = i15;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i2 = i1 | 0;
 i6 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i2 >> 2] = i6;
  STACKTOP = i4;
  return;
 }
}
function __ZN3WTF6VectorIN7WebCore7IconURLELj1ENS_15CrashOnOverflowEE14appendSlowCaseIRKS2_EEvOT_(i1, i2) {
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
   if ((i7 + (i4 << 6) | 0) >>> 0 <= i2 >>> 0) {
    i8 = 3;
    break;
   }
   i9 = HEAP32[i1 + 4 >> 2] | 0;
   i10 = i9 + 1 + (i9 >>> 2) | 0;
   i9 = i10 >>> 0 > 16 >>> 0 ? i10 : 16;
   __ZN3WTF6VectorIN7WebCore7IconURLELj1ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i9 >>> 0 > i5 >>> 0 ? i9 : i5);
   i9 = HEAP32[i6 >> 2] | 0;
   i11 = i9 + (i2 - i7 >> 6 << 6) | 0;
   i12 = i9;
  }
 } while (0);
 if ((i8 | 0) == 3) {
  i8 = HEAP32[i1 + 4 >> 2] | 0;
  i7 = i8 + 1 + (i8 >>> 2) | 0;
  i8 = i7 >>> 0 > 16 >>> 0 ? i7 : 16;
  __ZN3WTF6VectorIN7WebCore7IconURLELj1ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i8 >>> 0 > i5 >>> 0 ? i8 : i5);
  i11 = i2;
  i12 = HEAP32[i6 >> 2] | 0;
 }
 i6 = HEAP32[i3 >> 2] | 0;
 HEAP32[i12 + (i6 << 6) >> 2] = HEAP32[i11 >> 2];
 i2 = HEAP32[i11 + 4 >> 2] | 0;
 HEAP32[i12 + (i6 << 6) + 4 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i5 = i2 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
 }
 i5 = HEAP32[i11 + 8 >> 2] | 0;
 HEAP32[i12 + (i6 << 6) + 8 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i2 = i5 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 i2 = HEAP32[i11 + 12 >> 2] | 0;
 HEAP32[i12 + (i6 << 6) + 12 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i5 = i2 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
 }
 i5 = i11 + 16 | 0;
 i2 = i12 + (i6 << 6) + 16 | 0;
 i8 = HEAP8[i2] & -2 | HEAP8[i5] & 1;
 HEAP8[i2] = i8;
 HEAP8[i2] = i8 & -3 | HEAP8[i5] & 2;
 HEAP32[i12 + (i6 << 6) + 20 >> 2] = HEAP32[i11 + 20 >> 2];
 HEAP32[i12 + (i6 << 6) + 24 >> 2] = HEAP32[i11 + 24 >> 2];
 HEAP32[i12 + (i6 << 6) + 28 >> 2] = HEAP32[i11 + 28 >> 2];
 HEAP32[i12 + (i6 << 6) + 32 >> 2] = HEAP32[i11 + 32 >> 2];
 HEAP32[i12 + (i6 << 6) + 36 >> 2] = HEAP32[i11 + 36 >> 2];
 HEAP32[i12 + (i6 << 6) + 40 >> 2] = HEAP32[i11 + 40 >> 2];
 HEAP32[i12 + (i6 << 6) + 44 >> 2] = HEAP32[i11 + 44 >> 2];
 HEAP32[i12 + (i6 << 6) + 48 >> 2] = HEAP32[i11 + 48 >> 2];
 HEAP32[i12 + (i6 << 6) + 52 >> 2] = HEAP32[i11 + 52 >> 2];
 HEAP32[i12 + (i6 << 6) + 56 >> 2] = HEAP32[i11 + 56 >> 2];
 HEAP8[i12 + (i6 << 6) + 60 | 0] = HEAP8[i11 + 60 | 0] & 1;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 return;
}
function __ZN3WTF6VectorIN7WebCore7IconURLELj1ENS_15CrashOnOverflowEE14appendSlowCaseIRS2_EEvOT_(i1, i2) {
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
   if ((i7 + (i4 << 6) | 0) >>> 0 <= i2 >>> 0) {
    i8 = 3;
    break;
   }
   i9 = HEAP32[i1 + 4 >> 2] | 0;
   i10 = i9 + 1 + (i9 >>> 2) | 0;
   i9 = i10 >>> 0 > 16 >>> 0 ? i10 : 16;
   __ZN3WTF6VectorIN7WebCore7IconURLELj1ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i9 >>> 0 > i5 >>> 0 ? i9 : i5);
   i9 = HEAP32[i6 >> 2] | 0;
   i11 = i9 + (i2 - i7 >> 6 << 6) | 0;
   i12 = i9;
  }
 } while (0);
 if ((i8 | 0) == 3) {
  i8 = HEAP32[i1 + 4 >> 2] | 0;
  i7 = i8 + 1 + (i8 >>> 2) | 0;
  i8 = i7 >>> 0 > 16 >>> 0 ? i7 : 16;
  __ZN3WTF6VectorIN7WebCore7IconURLELj1ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i8 >>> 0 > i5 >>> 0 ? i8 : i5);
  i11 = i2;
  i12 = HEAP32[i6 >> 2] | 0;
 }
 i6 = HEAP32[i3 >> 2] | 0;
 HEAP32[i12 + (i6 << 6) >> 2] = HEAP32[i11 >> 2];
 i2 = HEAP32[i11 + 4 >> 2] | 0;
 HEAP32[i12 + (i6 << 6) + 4 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i5 = i2 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
 }
 i5 = HEAP32[i11 + 8 >> 2] | 0;
 HEAP32[i12 + (i6 << 6) + 8 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i2 = i5 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 i2 = HEAP32[i11 + 12 >> 2] | 0;
 HEAP32[i12 + (i6 << 6) + 12 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i5 = i2 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
 }
 i5 = i11 + 16 | 0;
 i2 = i12 + (i6 << 6) + 16 | 0;
 i8 = HEAP8[i2] & -2 | HEAP8[i5] & 1;
 HEAP8[i2] = i8;
 HEAP8[i2] = i8 & -3 | HEAP8[i5] & 2;
 HEAP32[i12 + (i6 << 6) + 20 >> 2] = HEAP32[i11 + 20 >> 2];
 HEAP32[i12 + (i6 << 6) + 24 >> 2] = HEAP32[i11 + 24 >> 2];
 HEAP32[i12 + (i6 << 6) + 28 >> 2] = HEAP32[i11 + 28 >> 2];
 HEAP32[i12 + (i6 << 6) + 32 >> 2] = HEAP32[i11 + 32 >> 2];
 HEAP32[i12 + (i6 << 6) + 36 >> 2] = HEAP32[i11 + 36 >> 2];
 HEAP32[i12 + (i6 << 6) + 40 >> 2] = HEAP32[i11 + 40 >> 2];
 HEAP32[i12 + (i6 << 6) + 44 >> 2] = HEAP32[i11 + 44 >> 2];
 HEAP32[i12 + (i6 << 6) + 48 >> 2] = HEAP32[i11 + 48 >> 2];
 HEAP32[i12 + (i6 << 6) + 52 >> 2] = HEAP32[i11 + 52 >> 2];
 HEAP32[i12 + (i6 << 6) + 56 >> 2] = HEAP32[i11 + 56 >> 2];
 HEAP8[i12 + (i6 << 6) + 60 | 0] = HEAP8[i11 + 60 | 0] & 1;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 return;
}
function __ZN3WTF6VectorIN7WebCore7IconURLELj1ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_(i1, i2) {
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
   if ((i7 + (i4 << 6) | 0) >>> 0 <= i2 >>> 0) {
    i8 = 3;
    break;
   }
   i9 = HEAP32[i1 + 4 >> 2] | 0;
   i10 = i9 + 1 + (i9 >>> 2) | 0;
   i9 = i10 >>> 0 > 16 >>> 0 ? i10 : 16;
   __ZN3WTF6VectorIN7WebCore7IconURLELj1ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i9 >>> 0 > i5 >>> 0 ? i9 : i5);
   i9 = HEAP32[i6 >> 2] | 0;
   i11 = i9 + (i2 - i7 >> 6 << 6) | 0;
   i12 = i9;
  }
 } while (0);
 if ((i8 | 0) == 3) {
  i8 = HEAP32[i1 + 4 >> 2] | 0;
  i7 = i8 + 1 + (i8 >>> 2) | 0;
  i8 = i7 >>> 0 > 16 >>> 0 ? i7 : 16;
  __ZN3WTF6VectorIN7WebCore7IconURLELj1ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i8 >>> 0 > i5 >>> 0 ? i8 : i5);
  i11 = i2;
  i12 = HEAP32[i6 >> 2] | 0;
 }
 i6 = HEAP32[i3 >> 2] | 0;
 HEAP32[i12 + (i6 << 6) >> 2] = HEAP32[i11 >> 2];
 i2 = i11 + 4 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i12 + (i6 << 6) + 4 >> 2] = i5;
 i5 = i11 + 8 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i12 + (i6 << 6) + 8 >> 2] = i2;
 i2 = i11 + 12 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i12 + (i6 << 6) + 12 >> 2] = i5;
 i5 = i11 + 16 | 0;
 i2 = i12 + (i6 << 6) + 16 | 0;
 i8 = HEAP8[i2] & -2 | HEAP8[i5] & 1;
 HEAP8[i2] = i8;
 HEAP8[i2] = i8 & -3 | HEAP8[i5] & 2;
 HEAP32[i12 + (i6 << 6) + 20 >> 2] = HEAP32[i11 + 20 >> 2];
 HEAP32[i12 + (i6 << 6) + 24 >> 2] = HEAP32[i11 + 24 >> 2];
 HEAP32[i12 + (i6 << 6) + 28 >> 2] = HEAP32[i11 + 28 >> 2];
 HEAP32[i12 + (i6 << 6) + 32 >> 2] = HEAP32[i11 + 32 >> 2];
 HEAP32[i12 + (i6 << 6) + 36 >> 2] = HEAP32[i11 + 36 >> 2];
 HEAP32[i12 + (i6 << 6) + 40 >> 2] = HEAP32[i11 + 40 >> 2];
 HEAP32[i12 + (i6 << 6) + 44 >> 2] = HEAP32[i11 + 44 >> 2];
 HEAP32[i12 + (i6 << 6) + 48 >> 2] = HEAP32[i11 + 48 >> 2];
 HEAP32[i12 + (i6 << 6) + 52 >> 2] = HEAP32[i11 + 52 >> 2];
 HEAP32[i12 + (i6 << 6) + 56 >> 2] = HEAP32[i11 + 56 >> 2];
 HEAP8[i12 + (i6 << 6) + 60 | 0] = HEAP8[i11 + 60 | 0] & 1;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 return;
}
function __ZN3WTF11VectorMoverILb0EN7WebCore7IconURLEE4moveEPS2_S4_S4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 if ((i1 | 0) == (i2 | 0)) {
  return;
 } else {
  i4 = i1;
  i5 = i3;
 }
 while (1) {
  HEAP32[i5 >> 2] = HEAP32[i4 >> 2];
  i3 = i4 + 4 | 0;
  i1 = HEAP32[i3 >> 2] | 0;
  HEAP32[i3 >> 2] = 0;
  HEAP32[i5 + 4 >> 2] = i1;
  i1 = i4 + 8 | 0;
  i6 = HEAP32[i1 >> 2] | 0;
  HEAP32[i1 >> 2] = 0;
  HEAP32[i5 + 8 >> 2] = i6;
  i6 = i4 + 12 | 0;
  i7 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = 0;
  HEAP32[i5 + 12 >> 2] = i7;
  i7 = i4 + 16 | 0;
  i8 = i5 + 16 | 0;
  i9 = HEAP8[i8] & -2 | HEAP8[i7] & 1;
  HEAP8[i8] = i9;
  HEAP8[i8] = i9 & -3 | HEAP8[i7] & 2;
  HEAP32[i5 + 20 >> 2] = HEAP32[i4 + 20 >> 2];
  HEAP32[i5 + 24 >> 2] = HEAP32[i4 + 24 >> 2];
  HEAP32[i5 + 28 >> 2] = HEAP32[i4 + 28 >> 2];
  HEAP32[i5 + 32 >> 2] = HEAP32[i4 + 32 >> 2];
  HEAP32[i5 + 36 >> 2] = HEAP32[i4 + 36 >> 2];
  HEAP32[i5 + 40 >> 2] = HEAP32[i4 + 40 >> 2];
  HEAP32[i5 + 44 >> 2] = HEAP32[i4 + 44 >> 2];
  HEAP32[i5 + 48 >> 2] = HEAP32[i4 + 48 >> 2];
  HEAP32[i5 + 52 >> 2] = HEAP32[i4 + 52 >> 2];
  HEAP32[i5 + 56 >> 2] = HEAP32[i4 + 56 >> 2];
  HEAP8[i5 + 60 | 0] = HEAP8[i4 + 60 | 0] & 1;
  i7 = HEAP32[i6 >> 2] | 0;
  do {
   if ((i7 | 0) != 0) {
    i6 = i7 | 0;
    i9 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
    if ((i9 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i7);
     break;
    } else {
     HEAP32[i6 >> 2] = i9;
     break;
    }
   }
  } while (0);
  i7 = HEAP32[i1 >> 2] | 0;
  do {
   if ((i7 | 0) != 0) {
    i9 = i7 | 0;
    i6 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
    if ((i6 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i7);
     break;
    } else {
     HEAP32[i9 >> 2] = i6;
     break;
    }
   }
  } while (0);
  i7 = HEAP32[i3 >> 2] | 0;
  do {
   if ((i7 | 0) != 0) {
    i1 = i7 | 0;
    i6 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
    if ((i6 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i7);
     break;
    } else {
     HEAP32[i1 >> 2] = i6;
     break;
    }
   }
  } while (0);
  i7 = i4 + 64 | 0;
  if ((i7 | 0) == (i2 | 0)) {
   break;
  } else {
   i4 = i7;
   i5 = i5 + 64 | 0;
  }
 }
 return;
}
function __ZN7WebCore7IconURLaSERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = HEAP32[i2 >> 2];
 i3 = HEAP32[i2 + 4 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = i3 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i3;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i2 + 8 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i4 = i5 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i1 + 8 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i5;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 | 0;
   i4 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i5 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i2 + 12 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = i3 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i1 + 12 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i3;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i5 = i2 + 16 | 0;
 i4 = i1 + 16 | 0;
 i3 = HEAP8[i4] & -2 | HEAP8[i5] & 1;
 HEAP8[i4] = i3;
 HEAP8[i4] = i3 & -3 | HEAP8[i5] & 2;
 HEAP32[i1 + 20 >> 2] = HEAP32[i2 + 20 >> 2];
 HEAP32[i1 + 24 >> 2] = HEAP32[i2 + 24 >> 2];
 HEAP32[i1 + 28 >> 2] = HEAP32[i2 + 28 >> 2];
 HEAP32[i1 + 32 >> 2] = HEAP32[i2 + 32 >> 2];
 HEAP32[i1 + 36 >> 2] = HEAP32[i2 + 36 >> 2];
 HEAP32[i1 + 40 >> 2] = HEAP32[i2 + 40 >> 2];
 HEAP32[i1 + 44 >> 2] = HEAP32[i2 + 44 >> 2];
 HEAP32[i1 + 48 >> 2] = HEAP32[i2 + 48 >> 2];
 HEAP32[i1 + 52 >> 2] = HEAP32[i2 + 52 >> 2];
 HEAP32[i1 + 56 >> 2] = HEAP32[i2 + 56 >> 2];
 HEAP8[i1 + 60 | 0] = HEAP8[i2 + 60 | 0] & 1;
 return i1 | 0;
}
function __ZN7WebCore14IconController3urlEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i4 = i3 | 0;
 __ZN7WebCore14IconController12urlsForTypesEi(i4, i2, 1);
 i2 = i4 + 8 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  __ZN7WebCore3URL10invalidateEv(i1);
 } else {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = HEAP32[i5 + 12 >> 2] | 0;
  HEAP32[i1 >> 2] = i6;
  if ((i6 | 0) != 0) {
   i7 = i6 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
  }
  i7 = i5 + 16 | 0;
  i6 = i1 + 4 | 0;
  i8 = HEAP8[i6] & -2 | HEAP8[i7] & 1;
  HEAP8[i6] = i8;
  HEAP8[i6] = i8 & -3 | HEAP8[i7] & 2;
  HEAP32[i1 + 8 >> 2] = HEAP32[i5 + 20 >> 2];
  HEAP32[i1 + 12 >> 2] = HEAP32[i5 + 24 >> 2];
  HEAP32[i1 + 16 >> 2] = HEAP32[i5 + 28 >> 2];
  HEAP32[i1 + 20 >> 2] = HEAP32[i5 + 32 >> 2];
  HEAP32[i1 + 24 >> 2] = HEAP32[i5 + 36 >> 2];
  HEAP32[i1 + 28 >> 2] = HEAP32[i5 + 40 >> 2];
  HEAP32[i1 + 32 >> 2] = HEAP32[i5 + 44 >> 2];
  HEAP32[i1 + 36 >> 2] = HEAP32[i5 + 48 >> 2];
  HEAP32[i1 + 40 >> 2] = HEAP32[i5 + 52 >> 2];
  HEAP32[i1 + 44 >> 2] = HEAP32[i5 + 56 >> 2];
 }
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  __ZN3WTF6VectorIN7WebCore7IconURLELj1ENS_15CrashOnOverflowEE6shrinkEj(i4, 0);
 }
 i2 = i4 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 if ((i4 + 12 | 0) == (i5 | 0) | (i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i2 >> 2] = 0;
 HEAP32[i4 + 4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i5);
 STACKTOP = i3;
 return;
}
function __ZN3WTF6VectorIN7WebCore7IconURLELj1ENS_15CrashOnOverflowEE6shrinkEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 i4 = i1 + 8 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 i5 = i3 + (i1 << 6) | 0;
 if ((i1 | 0) == (i2 | 0)) {
  HEAP32[i4 >> 2] = i2;
  return;
 }
 i1 = i3 + (i2 << 6) | 0;
 while (1) {
  i3 = HEAP32[i1 + 12 >> 2] | 0;
  do {
   if ((i3 | 0) != 0) {
    i6 = i3 | 0;
    i7 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
    if ((i7 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i3);
     break;
    } else {
     HEAP32[i6 >> 2] = i7;
     break;
    }
   }
  } while (0);
  i3 = HEAP32[i1 + 8 >> 2] | 0;
  do {
   if ((i3 | 0) != 0) {
    i7 = i3 | 0;
    i6 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
    if ((i6 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i3);
     break;
    } else {
     HEAP32[i7 >> 2] = i6;
     break;
    }
   }
  } while (0);
  i3 = HEAP32[i1 + 4 >> 2] | 0;
  do {
   if ((i3 | 0) != 0) {
    i6 = i3 | 0;
    i7 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
    if ((i7 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i3);
     break;
    } else {
     HEAP32[i6 >> 2] = i7;
     break;
    }
   }
  } while (0);
  i1 = i1 + 64 | 0;
  if ((i1 | 0) == (i5 | 0)) {
   break;
  }
 }
 HEAP32[i4 >> 2] = i2;
 return;
}
function __ZNK7WebCore14IconController7iconURLENS_8IconTypeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = i1 + 12 | 0;
 _memset(i1 | 0, 0, 16) | 0;
 __ZN7WebCore3URL10invalidateEv(i4);
 HEAP8[i1 + 60 | 0] = 0;
 i5 = __ZN7WebCore8Document8iconURLsEi(HEAP32[(HEAP32[i2 >> 2] | 0) + 456 >> 2] | 0, i3) | 0;
 i3 = i5 | 0;
 i2 = i5 + 8 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 if ((i5 | 0) == 0) {
  return;
 }
 i6 = HEAP32[i3 >> 2] | 0;
 i7 = i4 | 0;
 i4 = i6;
 i8 = i6;
 i6 = i5;
 while (1) {
  i5 = HEAP32[i7 >> 2] | 0;
  do {
   if ((i5 | 0) == 0) {
    i9 = 7;
   } else {
    if ((HEAP32[i5 + 4 >> 2] | 0) == 0) {
     i9 = 7;
     break;
    }
    i10 = HEAP32[i4 + 8 >> 2] | 0;
    if ((i10 | 0) == 0) {
     i11 = i8;
     i12 = i6;
     break;
    }
    if ((HEAP32[i10 + 4 >> 2] | 0) == 0) {
     i11 = i8;
     i12 = i6;
    } else {
     i9 = 7;
    }
   }
  } while (0);
  if ((i9 | 0) == 7) {
   i9 = 0;
   __ZN7WebCore7IconURLaSERKS0_(i1, i4) | 0;
   i11 = HEAP32[i3 >> 2] | 0;
   i12 = HEAP32[i2 >> 2] | 0;
  }
  i5 = i4 + 64 | 0;
  if ((i5 | 0) == (i11 + (i12 << 6) | 0)) {
   break;
  } else {
   i4 = i5;
   i8 = i11;
   i6 = i12;
  }
 }
 return;
}
function __ZN3WTF6VectorIN7WebCore7IconURLELj1ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i5 + (HEAP32[i1 + 8 >> 2] << 6) | 0;
 do {
  if (i2 >>> 0 > 1 >>> 0) {
   if (i2 >>> 0 > 67108863 >>> 0) {
    _WTFCrash();
   } else {
    i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 6) | 0;
    HEAP32[i3 >> 2] = i7 >>> 6;
    i8 = __ZN3WTF10fastMallocEj(i7) | 0;
    HEAP32[i4 >> 2] = i8;
    i9 = i8;
    i10 = i1 + 12 | 0;
    break;
   }
  } else {
   i8 = i1 + 12 | 0;
   HEAP32[i4 >> 2] = i8;
   HEAP32[i3 >> 2] = 1;
   i9 = i8;
   i10 = i8;
  }
 } while (0);
 __ZN3WTF11VectorMoverILb0EN7WebCore7IconURLEE4moveEPS2_S4_S4_(i5, i6, i9);
 if ((i10 | 0) == (i5 | 0) | (i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i5);
 return;
}
function __ZN7WebCore14IconController16commitToDatabaseERKNS_3URLE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = __ZN7WebCore12iconDatabaseEv() | 0;
 i4 = i2 | 0;
 i2 = i1 | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i3 >> 2] | 0) + 20 >> 2] & 1](i3, i4, (HEAP32[(HEAP32[i2 >> 2] | 0) + 456 >> 2] | 0) + 356 | 0);
 i3 = __ZN7WebCore12iconDatabaseEv() | 0;
 i1 = HEAP32[(HEAP32[i3 >> 2] | 0) + 20 >> 2] | 0;
 i5 = __ZNK7WebCore19ResourceRequestBase3urlEv(__ZNK7WebCore11FrameLoader14initialRequestEv((HEAP32[i2 >> 2] | 0) + 80 | 0) | 0) | 0;
 FUNCTION_TABLE_viii[i1 & 1](i3, i4, i5);
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
function __ZN7WebCore14IconController20loadDecisionReceivedENS_16IconLoadDecisionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 8 | 0;
 if ((HEAP8[i3] & 1) == 0) {
  return;
 }
 __ZN7WebCore14IconController24continueLoadWithDecisionENS_16IconLoadDecisionE(i1, i2);
 HEAP8[i3] = 0;
 return;
}
function __ZN7WebCore14IconControllerD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 4 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 3](i1);
 return;
}
function __ZN7WebCore14IconControllerD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 4 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 3](i1);
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore14IconController10stopLoaderEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN7WebCore10IconLoader11stopLoadingEv(i2);
 return;
}
function __ZN7WebCore14IconControllerC2ERNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = i2;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP8[i1 + 8 | 0] = 0;
 return;
}
function __ZN7WebCore14IconControllerC1ERNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = i2;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP8[i1 + 8 | 0] = 0;
 return;
}
function dynCall_iiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0) | 0;
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
 FUNCTION_TABLE_vii[i1 & 3](i2 | 0, i3 | 0);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 3](i2 | 0);
}
function b3(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(3);
 return 0;
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
function b0(i1) {
 i1 = i1 | 0;
 abort(0);
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
  var FUNCTION_TABLE_ii = [b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore14IconControllerD2Ev,b1];
  var FUNCTION_TABLE_vii = [b2,b2,__ZN7WebCore14IconControllerC2ERNS_5FrameE,b2];
  var FUNCTION_TABLE_iiii = [b3,b3];
  var FUNCTION_TABLE_viii = [b4,b4];
  var FUNCTION_TABLE_v = [b5,b5];
  var FUNCTION_TABLE_iii = [b6,b6];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_ii: dynCall_ii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_iiii: dynCall_iiii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_iiii": invoke_iiii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore14IconController11startLoaderEv","_strlen","__ZN7WebCore7IconURLaSERKS0_","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN3WTF6VectorIN7WebCore7IconURLELj1ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN3WTF6VectorIN7WebCore7IconURLELj1ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_","_memset","_memcpy","__ZN3WTF6VectorIN7WebCore7IconURLELj1ENS_15CrashOnOverflowEE14appendSlowCaseIRS2_EEvOT_","__ZN7WebCore14IconController16commitToDatabaseERKNS_3URLE","__ZN7WebCore14IconController20loadDecisionReceivedENS_16IconLoadDecisionE","__ZN7WebCore14IconController10defaultURLENS_8IconTypeE","__ZN7WebCore14IconControllerC2ERNS_5FrameE","__ZN7WebCore14IconController3urlEv","__ZN3WTF11VectorMoverILb0EN7WebCore7IconURLEE4moveEPS2_S4_S4_","__ZN7WebCore14IconController16appendToIconURLsENS_8IconTypeEPN3WTF6VectorINS_7IconURLELj1ENS2_15CrashOnOverflowEEE","__ZN3WTF6VectorIN7WebCore7IconURLELj1ENS_15CrashOnOverflowEE6shrinkEj","__ZN3WTF6VectorIN7WebCore7IconURLELj1ENS_15CrashOnOverflowEE14appendSlowCaseIRKS2_EEvOT_","__ZN7WebCore14IconController10stopLoaderEv","__ZNK7WebCore14IconController7iconURLENS_8IconTypeE","__ZN7WebCore14IconController12urlsForTypesEi","__ZN7WebCore14IconControllerD2Ev","__ZN7WebCore14IconController24continueLoadWithDecisionENS_16IconLoadDecisionE"]

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
var __ZN7WebCore23SVGAnimatedRectAnimatorC1EPNS_19SVGAnimationElementEPNS_10SVGElementE;
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
var Math_min = Math.min;
function invoke_fiii(index,a1,a2,a3) {
  try {
    return Module["dynCall_fiii"](index,a1,a2,a3);
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
function invoke_vifiiiii(index,a1,a2,a3,a4,a5,a6,a7) {
  try {
    Module["dynCall_vifiiiii"](index,a1,a2,a3,a4,a5,a6,a7);
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
  var __ZTVN7WebCore23SVGAnimatedRectAnimatorE=(H_BASE+8)|0;
  var __ZTVN7WebCore18SVGPropertyTearOffINS_9FloatRectEEE=(H_BASE+72)|0;
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
  var invoke_fiii=env.invoke_fiii;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_vifiiiii=env.invoke_vifiiiii;
  var invoke_iii=env.invoke_iii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore23SVGAnimatedRectAnimator22calculateAnimatedValueEfjPNS_15SVGAnimatedTypeES2_S2_S2_(i1, d2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 d2 = +d2;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, d11 = +0, i12 = 0, d13 = +0, i14 = 0, d15 = +0, i16 = 0, d17 = +0, d18 = +0, d19 = +0, d20 = +0, d21 = +0, d22 = +0, d23 = +0, d24 = +0, d25 = +0, d26 = +0, d27 = +0, d28 = +0, d29 = +0, d30 = +0, d31 = +0, d32 = +0;
 i8 = i1 + 8 | 0;
 i1 = HEAP32[i8 >> 2] | 0;
 i9 = i1 + 400 | 0;
 i10 = HEAP32[((HEAP32[i9 >> 2] | 0) == 3 ? i7 : i4) + 8 >> 2] | 0;
 i4 = HEAP32[i5 + 8 >> 2] | 0;
 i5 = HEAP32[i6 + 8 >> 2] | 0;
 i6 = HEAP32[i7 + 8 >> 2] | 0;
 i7 = i6 | 0;
 d11 = +HEAPF32[i7 >> 2];
 i12 = i6 + 4 | 0;
 d13 = +HEAPF32[i12 >> 2];
 i14 = i6 + 8 | 0;
 d15 = +HEAPF32[i14 >> 2];
 i16 = i6 + 12 | 0;
 d17 = +HEAPF32[i16 >> 2];
 d18 = +HEAPF32[i10 >> 2];
 d19 = +HEAPF32[i4 >> 2];
 d20 = +HEAPF32[i5 >> 2];
 if ((HEAP32[i1 + 396 >> 2] | 0) == 0) {
  d21 = d2 < +.5 ? d18 : d19;
 } else {
  d21 = d18 + (d19 - d18) * d2;
 }
 i6 = (i3 | 0) == 0;
 if (i6 | (__ZNK7WebCore19SVGAnimationElement13isAccumulatedEv(i1) | 0) ^ 1) {
  d22 = d21;
 } else {
  d22 = +(i3 >>> 0 >>> 0) * d20 + d21;
 }
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 668 >> 2] & 3](i1) | 0) {
   if ((HEAP32[i9 >> 2] | 0) == 3) {
    d23 = d22;
    break;
   }
   d23 = d11 + d22;
  } else {
   d23 = d22;
  }
 } while (0);
 i9 = HEAP32[i8 >> 2] | 0;
 d22 = +HEAPF32[i10 + 4 >> 2];
 d11 = +HEAPF32[i4 + 4 >> 2];
 d21 = +HEAPF32[i5 + 4 >> 2];
 if ((HEAP32[i9 + 396 >> 2] | 0) == 0) {
  d24 = d2 < +.5 ? d22 : d11;
 } else {
  d24 = d22 + (d11 - d22) * d2;
 }
 if (i6 | (__ZNK7WebCore19SVGAnimationElement13isAccumulatedEv(i9) | 0) ^ 1) {
  d25 = d24;
 } else {
  d25 = +(i3 >>> 0 >>> 0) * d21 + d24;
 }
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 668 >> 2] & 3](i9) | 0) {
   if ((HEAP32[i9 + 400 >> 2] | 0) == 3) {
    d26 = d25;
    break;
   }
   d26 = d13 + d25;
  } else {
   d26 = d25;
  }
 } while (0);
 i9 = HEAP32[i8 >> 2] | 0;
 d25 = +HEAPF32[i10 + 8 >> 2];
 d13 = +HEAPF32[i4 + 8 >> 2];
 d24 = +HEAPF32[i5 + 8 >> 2];
 if ((HEAP32[i9 + 396 >> 2] | 0) == 0) {
  d27 = d2 < +.5 ? d25 : d13;
 } else {
  d27 = d25 + (d13 - d25) * d2;
 }
 if (i6 | (__ZNK7WebCore19SVGAnimationElement13isAccumulatedEv(i9) | 0) ^ 1) {
  d28 = d27;
 } else {
  d28 = +(i3 >>> 0 >>> 0) * d24 + d27;
 }
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 668 >> 2] & 3](i9) | 0) {
   if ((HEAP32[i9 + 400 >> 2] | 0) == 3) {
    d29 = d28;
    break;
   }
   d29 = d15 + d28;
  } else {
   d29 = d28;
  }
 } while (0);
 i9 = HEAP32[i8 >> 2] | 0;
 d28 = +HEAPF32[i10 + 12 >> 2];
 d15 = +HEAPF32[i4 + 12 >> 2];
 d27 = +HEAPF32[i5 + 12 >> 2];
 if ((HEAP32[i9 + 396 >> 2] | 0) == 0) {
  d30 = d2 < +.5 ? d28 : d15;
 } else {
  d30 = d28 + (d15 - d28) * d2;
 }
 if (i6 | (__ZNK7WebCore19SVGAnimationElement13isAccumulatedEv(i9) | 0) ^ 1) {
  d31 = d30;
 } else {
  d31 = +(i3 >>> 0 >>> 0) * d27 + d30;
 }
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 668 >> 2] & 3](i9) | 0)) {
  d32 = d31;
  HEAPF32[i7 >> 2] = d23;
  HEAPF32[i12 >> 2] = d26;
  HEAPF32[i14 >> 2] = d29;
  HEAPF32[i16 >> 2] = d32;
  return;
 }
 if ((HEAP32[i9 + 400 >> 2] | 0) == 3) {
  d32 = d31;
  HEAPF32[i7 >> 2] = d23;
  HEAPF32[i12 >> 2] = d26;
  HEAPF32[i14 >> 2] = d29;
  HEAPF32[i16 >> 2] = d32;
  return;
 }
 d32 = d17 + d31;
 HEAPF32[i7 >> 2] = d23;
 HEAPF32[i12 >> 2] = d26;
 HEAPF32[i14 >> 2] = d29;
 HEAPF32[i16 >> 2] = d32;
 return;
}
function __ZN7WebCore23SVGAnimatedTypeAnimator13executeActionINS_26SVGAnimatedPropertyTearOffINS_9FloatRectEEEEEvNS0_15AnimationActionERKN3WTF6VectorINS_28SVGElementAnimatedPropertiesELj0ENS6_15CrashOnOverflowEEEjPNT_11ContentTypeE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i1 | 0;
 i7 = i3 + 8 | 0;
 if ((HEAP32[i7 >> 2] | 0) == 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i8 = i3 | 0;
 __ZN7WebCore18SVGElementInstance21InstanceUpdateBlockerC1EPNS_10SVGElementE(i6, HEAP32[HEAP32[i8 >> 2] >> 2] | 0);
 i3 = HEAP32[i8 >> 2] | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i7 = i3 + (i8 << 4) | 0;
 if ((i8 | 0) == 0) {
  __ZN7WebCore18SVGElementInstance21InstanceUpdateBlockerD1Ev(i6);
  STACKTOP = i1;
  return;
 }
 if ((i2 | 0) == 0) {
  i8 = i3;
  while (1) {
   if ((HEAP32[i8 + 12 >> 2] | 0) >>> 0 <= i4 >>> 0) {
    i9 = 21;
    break;
   }
   i10 = HEAP32[(HEAP32[i8 + 4 >> 2] | 0) + (i4 << 2) >> 2] | 0;
   i11 = i10 + 20 | 0;
   if ((HEAP8[i11] & 1) == 0) {
    i12 = __ZN7WebCore26SVGAnimatedPropertyTearOffINS_9FloatRectEE7animValEv(i10) | 0;
    i10 = i12 + 24 | 0;
    i13 = HEAP8[i10] | 0;
    i14 = i12 + 20 | 0;
    do {
     if ((i13 & 1) == 0) {
      i15 = i13;
     } else {
      i12 = HEAP32[i14 >> 2] | 0;
      if ((i12 | 0) == 0) {
       i15 = i13;
       break;
      }
      __ZdlPv(i12);
      i15 = HEAP8[i10] | 0;
     }
    } while (0);
    HEAP8[i10] = i15 & -2;
    HEAP32[i14 >> 2] = i5;
    HEAP8[i11] = 1;
   }
   i13 = i8 + 16 | 0;
   if ((i13 | 0) == (i7 | 0)) {
    i9 = 24;
    break;
   } else {
    i8 = i13;
   }
  }
  if ((i9 | 0) == 21) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  } else if ((i9 | 0) == 24) {
   __ZN7WebCore18SVGElementInstance21InstanceUpdateBlockerD1Ev(i6);
   STACKTOP = i1;
   return;
  }
 } else if ((i2 | 0) == 1) {
  i2 = i3;
  while (1) {
   if ((HEAP32[i2 + 12 >> 2] | 0) >>> 0 <= i4 >>> 0) {
    i9 = 22;
    break;
   }
   i8 = HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + (i4 << 2) >> 2] | 0;
   i5 = HEAP32[i8 + 32 >> 2] | 0;
   i15 = HEAP32[i8 + 24 >> 2] | 0;
   i13 = i5 + 24 | 0;
   i12 = HEAP8[i13] | 0;
   i16 = i5 + 20 | 0;
   do {
    if ((i12 & 1) == 0) {
     i17 = i12;
    } else {
     i5 = HEAP32[i16 >> 2] | 0;
     if ((i5 | 0) == 0) {
      i17 = i12;
      break;
     }
     __ZdlPv(i5);
     i17 = HEAP8[i13] | 0;
    }
   } while (0);
   HEAP8[i13] = i17 & -2;
   HEAP32[i16 >> 2] = i15;
   HEAP8[i8 + 20 | 0] = 0;
   i12 = i2 + 16 | 0;
   if ((i12 | 0) == (i7 | 0)) {
    i9 = 26;
    break;
   } else {
    i2 = i12;
   }
  }
  if ((i9 | 0) == 22) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  } else if ((i9 | 0) == 26) {
   __ZN7WebCore18SVGElementInstance21InstanceUpdateBlockerD1Ev(i6);
   STACKTOP = i1;
   return;
  }
 } else {
  i2 = i3;
  while (1) {
   if ((HEAP32[i2 + 12 >> 2] | 0) >>> 0 <= i4 >>> 0) {
    i9 = 23;
    break;
   }
   i3 = i2 + 16 | 0;
   if ((i3 | 0) == (i7 | 0)) {
    i9 = 27;
    break;
   } else {
    i2 = i3;
   }
  }
  if ((i9 | 0) == 23) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  } else if ((i9 | 0) == 27) {
   __ZN7WebCore18SVGElementInstance21InstanceUpdateBlockerD1Ev(i6);
   STACKTOP = i1;
   return;
  }
 }
}
function __ZN7WebCore26SVGAnimatedPropertyTearOffINS_9FloatRectEE7animValEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 + 32 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  i3 = HEAP32[i2 >> 2] | 0;
  return i3 | 0;
 }
 i4 = HEAP32[i1 + 24 >> 2] | 0;
 i5 = __ZN3WTF10fastMallocEj(28) | 0;
 i6 = i5;
 HEAP32[i5 + 4 >> 2] = 1;
 HEAP32[i5 >> 2] = H_BASE + 80;
 i7 = i5 + 8 | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i5 + 12 >> 2] = i1;
 HEAP32[i5 + 16 >> 2] = 2;
 HEAP32[i5 + 20 >> 2] = i4;
 i4 = i5 + 24 | 0;
 HEAP8[i4] = HEAP8[i4] & -2;
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i4 | 0) == 0) {
   HEAP32[i7 >> 2] = 0;
  } else {
   i1 = i4 + 8 | 0;
   HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
   i1 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = i4;
   if ((i1 | 0) == 0) {
    break;
   }
   i5 = i1 + 8 | 0;
   i1 = i5 | 0;
   i8 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   HEAP32[i1 >> 2] = i8;
   if ((i8 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i6;
 if ((i4 | 0) == 0) {
  i3 = HEAP32[i2 >> 2] | 0;
  return i3 | 0;
 }
 i6 = i4 + 4 | 0;
 i4 = i6 | 0;
 i7 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i7 | 0) != 0) {
  HEAP32[i4 >> 2] = i7;
  i3 = HEAP32[i2 >> 2] | 0;
  return i3 | 0;
 }
 i7 = i6 - 4 | 0;
 if ((i7 | 0) == 0) {
  i3 = HEAP32[i2 >> 2] | 0;
  return i3 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 15](i7);
 i3 = HEAP32[i2 >> 2] | 0;
 return i3 | 0;
}
function __ZN7WebCore23SVGAnimatedRectAnimator21startAnimValAnimationERKN3WTF6VectorINS_28SVGElementAnimatedPropertiesELj0ENS1_15CrashOnOverflowEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 if ((HEAP32[i3 + 8 >> 2] | 0) == 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i6 = HEAP32[i3 >> 2] | 0;
 if ((HEAP32[i6 + 12 >> 2] | 0) == 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i7 = HEAP32[(HEAP32[HEAP32[i6 + 4 >> 2] >> 2] | 0) + 24 >> 2] | 0;
 i6 = __Znwj(16) | 0;
 i8 = i6;
 i9 = i7;
 HEAP32[i6 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i6 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
 HEAP32[i6 + 8 >> 2] = HEAP32[i9 + 8 >> 2];
 HEAP32[i6 + 12 >> 2] = HEAP32[i9 + 12 >> 2];
 i9 = i5 | 0;
 HEAP32[i9 >> 2] = i8;
 __ZN7WebCore23SVGAnimatedTypeAnimator13executeActionINS_26SVGAnimatedPropertyTearOffINS_9FloatRectEEEEEvNS0_15AnimationActionERKN3WTF6VectorINS_28SVGElementAnimatedPropertiesELj0ENS6_15CrashOnOverflowEEEjPNT_11ContentTypeE(i2 | 0, 0, i3, 0, i8);
 __ZN7WebCore15SVGAnimatedType10createRectENSt3__110unique_ptrINS_9FloatRectENS1_14default_deleteIS3_EEEE(i1, i5);
 i5 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZdlPv(i5);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore23SVGAnimatedRectAnimator17animValWillChangeERKN3WTF6VectorINS_28SVGElementAnimatedPropertiesELj0ENS1_15CrashOnOverflowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i1 | 0;
 i4 = i2 + 8 | 0;
 if ((HEAP32[i4 >> 2] | 0) == 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i5 = i2 | 0;
 __ZN7WebCore18SVGElementInstance21InstanceUpdateBlockerC1EPNS_10SVGElementE(i3, HEAP32[HEAP32[i5 >> 2] >> 2] | 0);
 i2 = HEAP32[i5 >> 2] | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i4 = i2 + (i5 << 4) | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore18SVGElementInstance21InstanceUpdateBlockerD1Ev(i3);
  STACKTOP = i1;
  return;
 } else {
  i6 = i2;
 }
 while (1) {
  if ((HEAP32[i6 + 12 >> 2] | 0) == 0) {
   i7 = 5;
   break;
  }
  i2 = i6 + 16 | 0;
  if ((i2 | 0) == (i4 | 0)) {
   i7 = 9;
   break;
  } else {
   i6 = i2;
  }
 }
 if ((i7 | 0) == 5) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i7 | 0) == 9) {
  __ZN7WebCore18SVGElementInstance21InstanceUpdateBlockerD1Ev(i3);
  STACKTOP = i1;
  return;
 }
}
function __ZN7WebCore23SVGAnimatedRectAnimator16animValDidChangeERKN3WTF6VectorINS_28SVGElementAnimatedPropertiesELj0ENS1_15CrashOnOverflowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i1 | 0;
 i4 = i2 + 8 | 0;
 if ((HEAP32[i4 >> 2] | 0) == 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i5 = i2 | 0;
 __ZN7WebCore18SVGElementInstance21InstanceUpdateBlockerC1EPNS_10SVGElementE(i3, HEAP32[HEAP32[i5 >> 2] >> 2] | 0);
 i2 = HEAP32[i5 >> 2] | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i4 = i2 + (i5 << 4) | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore18SVGElementInstance21InstanceUpdateBlockerD1Ev(i3);
  STACKTOP = i1;
  return;
 } else {
  i6 = i2;
 }
 while (1) {
  if ((HEAP32[i6 + 12 >> 2] | 0) == 0) {
   i7 = 5;
   break;
  }
  i2 = i6 + 16 | 0;
  if ((i2 | 0) == (i4 | 0)) {
   i7 = 8;
   break;
  } else {
   i6 = i2;
  }
 }
 if ((i7 | 0) == 5) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i7 | 0) == 8) {
  __ZN7WebCore18SVGElementInstance21InstanceUpdateBlockerD1Ev(i3);
  STACKTOP = i1;
  return;
 }
}
function __ZN7WebCore23SVGAnimatedRectAnimator21resetAnimValToBaseValERKN3WTF6VectorINS_28SVGElementAnimatedPropertiesELj0ENS1_15CrashOnOverflowEEEPNS_15SVGAnimatedTypeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = HEAP32[i3 + 8 >> 2] | 0;
 if ((HEAP32[i2 + 8 >> 2] | 0) == 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i3 = HEAP32[i2 >> 2] | 0;
 if ((HEAP32[i3 + 12 >> 2] | 0) == 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else {
  i5 = i4;
  i6 = HEAP32[(HEAP32[HEAP32[i3 + 4 >> 2] >> 2] | 0) + 24 >> 2] | 0;
  HEAP32[i5 >> 2] = HEAP32[i6 >> 2];
  HEAP32[i5 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
  HEAP32[i5 + 8 >> 2] = HEAP32[i6 + 8 >> 2];
  HEAP32[i5 + 12 >> 2] = HEAP32[i6 + 12 >> 2];
  __ZN7WebCore23SVGAnimatedTypeAnimator13executeActionINS_26SVGAnimatedPropertyTearOffINS_9FloatRectEEEEEvNS0_15AnimationActionERKN3WTF6VectorINS_28SVGElementAnimatedPropertiesELj0ENS6_15CrashOnOverflowEEEjPNT_11ContentTypeE(i1 | 0, 0, i2, 0, i4);
  return;
 }
}
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_vifiiiii + 2;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_fiii + 2;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_vi + 6;
}
function __ZN7WebCore18SVGPropertyTearOffINS_9FloatRectEED0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 80;
 do {
  if ((HEAP8[i1 + 24 | 0] & 1) != 0) {
   i2 = HEAP32[i1 + 20 >> 2] | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   __ZdlPv(i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 8 | 0;
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore23SVGAnimatedRectAnimator19constructFromStringERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i2 | 0;
 i5 = __Znwj(16) | 0;
 _memset(i5 | 0, 0, 16) | 0;
 i6 = i4 | 0;
 HEAP32[i6 >> 2] = i5;
 __ZN7WebCore15SVGAnimatedType10createRectENSt3__110unique_ptrINS_9FloatRectENS1_14default_deleteIS3_EEEE(i1, i4);
 i4 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 if ((i4 | 0) != 0) {
  __ZdlPv(i4);
 }
 __ZN7WebCore9parseRectERKN3WTF6StringERNS_9FloatRectE(i3, HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] | 0) | 0;
 STACKTOP = i2;
 return;
}
function __ZN7WebCore18SVGPropertyTearOffINS_9FloatRectEED1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 80;
 do {
  if ((HEAP8[i1 + 24 | 0] & 1) != 0) {
   i2 = HEAP32[i1 + 20 >> 2] | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   __ZdlPv(i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 8 | 0;
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i3;
 if ((i3 | 0) >= 1) {
  return;
 }
 if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
 return;
}
function __ZN7WebCore23SVGAnimatedRectAnimator16addAnimatedTypesEPNS_15SVGAnimatedTypeES2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var d4 = +0;
 i1 = HEAP32[i3 + 8 >> 2] | 0;
 i3 = HEAP32[i2 + 8 >> 2] | 0;
 d4 = +HEAPF32[i3 + 4 >> 2];
 i2 = i1 | 0;
 HEAPF32[i2 >> 2] = +HEAPF32[i3 >> 2] + +HEAPF32[i2 >> 2];
 i2 = i1 + 4 | 0;
 HEAPF32[i2 >> 2] = d4 + +HEAPF32[i2 >> 2];
 i2 = i1 + 8 | 0;
 HEAPF32[i2 >> 2] = +HEAPF32[i2 >> 2] + +HEAPF32[i3 + 8 >> 2];
 i2 = i1 + 12 | 0;
 HEAPF32[i2 >> 2] = +HEAPF32[i2 >> 2] + +HEAPF32[i3 + 12 >> 2];
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
function __ZN7WebCore23SVGAnimatedRectAnimator20stopAnimValAnimationERKN3WTF6VectorINS_28SVGElementAnimatedPropertiesELj0ENS1_15CrashOnOverflowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore23SVGAnimatedTypeAnimator13executeActionINS_26SVGAnimatedPropertyTearOffINS_9FloatRectEEEEEvNS0_15AnimationActionERKN3WTF6VectorINS_28SVGElementAnimatedPropertiesELj0ENS6_15CrashOnOverflowEEEjPNT_11ContentTypeE(i1 | 0, 1, i2, 0, 0);
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
function __ZNK7WebCore18SVGPropertyTearOffINS_9FloatRectEE10isReadOnlyEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 if ((HEAP32[i1 + 16 >> 2] | 0) == 2) {
  i2 = 1;
  return i2 | 0;
 }
 i3 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   if ((HEAP8[i3 + 21 | 0] & 1) == 0) {
    break;
   } else {
    i2 = 1;
   }
   return i2 | 0;
  }
 } while (0);
 i2 = 0;
 return i2 | 0;
}
function __ZN7WebCore23SVGAnimatedRectAnimatorC2EPNS_19SVGAnimationElementEPNS_10SVGElementE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore23SVGAnimatedTypeAnimatorC2ENS_20AnimatedPropertyTypeEPNS_19SVGAnimationElementEPNS_10SVGElementE(i1 | 0, 14, i2, i3);
 HEAP32[i1 >> 2] = H_BASE + 16;
 return;
}
function __ZN7WebCore23SVGAnimatedRectAnimatorC1EPNS_19SVGAnimationElementEPNS_10SVGElementE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore23SVGAnimatedTypeAnimatorC2ENS_20AnimatedPropertyTypeEPNS_19SVGAnimationElementEPNS_10SVGElementE(i1 | 0, 14, i2, i3);
 HEAP32[i1 >> 2] = H_BASE + 16;
 return;
}
function __ZN7WebCore18SVGPropertyTearOffINS_9FloatRectEE12commitChangeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 if ((HEAP8[i1 + 24 | 0] & 1) != 0) {
  return;
 }
 __ZN7WebCore19SVGAnimatedProperty12commitChangeEv(i2);
 return;
}
function dynCall_vifiiiii(i1, i2, d3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 FUNCTION_TABLE_vifiiiii[i1 & 3](i2 | 0, +d3, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0);
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore23SVGAnimatedRectAnimatorD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore23SVGAnimatedTypeAnimatorD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function dynCall_fiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return +FUNCTION_TABLE_fiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0);
}
function __ZN7WebCore23SVGAnimatedRectAnimator17calculateDistanceERKN3WTF6StringES4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return +(+-1);
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 15](i2 | 0, i3 | 0, i4 | 0);
}
function b6(i1, d2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 d2 = +d2;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 abort(6);
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
function __ZN7WebCore23SVGAnimatedRectAnimatorD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore23SVGAnimatedTypeAnimatorD2Ev(i1 | 0);
 return;
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
 return FUNCTION_TABLE_ii[i1 & 3](i2 | 0) | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 15](i2 | 0);
}
function b0(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(0);
 return +0;
}
function b4(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(4);
}
function b7(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(7);
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
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_fiii = [b0,b0,__ZN7WebCore23SVGAnimatedRectAnimator17calculateDistanceERKN3WTF6StringES4_,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore23SVGAnimatedRectAnimatorD1Ev,b1,__ZN7WebCore18SVGPropertyTearOffINS_9FloatRectEED1Ev,b1,__ZN7WebCore18SVGPropertyTearOffINS_9FloatRectEE12commitChangeEv,b1,__ZN7WebCore18SVGPropertyTearOffINS_9FloatRectEED0Ev,b1,__ZN7WebCore23SVGAnimatedRectAnimatorD0Ev,b1,b1,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,__ZN7WebCore23SVGAnimatedRectAnimator20stopAnimValAnimationERKN3WTF6VectorINS_28SVGElementAnimatedPropertiesELj0ENS1_15CrashOnOverflowEEE,b2,__ZN7WebCore23SVGAnimatedRectAnimator17animValWillChangeERKN3WTF6VectorINS_28SVGElementAnimatedPropertiesELj0ENS1_15CrashOnOverflowEEE,b2,__ZN7WebCore23SVGAnimatedRectAnimator16animValDidChangeERKN3WTF6VectorINS_28SVGElementAnimatedPropertiesELj0ENS1_15CrashOnOverflowEEE,b2];
  var FUNCTION_TABLE_ii = [b3,b3,__ZNK7WebCore18SVGPropertyTearOffINS_9FloatRectEE10isReadOnlyEv,b3];
  var FUNCTION_TABLE_viii = [b4,b4,__ZN7WebCore23SVGAnimatedRectAnimator16addAnimatedTypesEPNS_15SVGAnimatedTypeES2_,b4,__ZN7WebCore23SVGAnimatedRectAnimator19constructFromStringERKN3WTF6StringE,b4,__ZN7WebCore23SVGAnimatedRectAnimator21startAnimValAnimationERKN3WTF6VectorINS_28SVGElementAnimatedPropertiesELj0ENS1_15CrashOnOverflowEEE,b4,__ZN7WebCore23SVGAnimatedRectAnimator21resetAnimValToBaseValERKN3WTF6VectorINS_28SVGElementAnimatedPropertiesELj0ENS1_15CrashOnOverflowEEEPNS_15SVGAnimatedTypeE,b4,__ZN7WebCore23SVGAnimatedRectAnimatorC2EPNS_19SVGAnimationElementEPNS_10SVGElementE,b4,b4,b4,b4,b4];
  var FUNCTION_TABLE_v = [b5,b5];
  var FUNCTION_TABLE_vifiiiii = [b6,b6,__ZN7WebCore23SVGAnimatedRectAnimator22calculateAnimatedValueEfjPNS_15SVGAnimatedTypeES2_S2_S2_,b6];
  var FUNCTION_TABLE_iii = [b7,b7];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_fiii: dynCall_fiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_vifiiiii: dynCall_vifiiiii, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_fiii": invoke_fiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_vifiiiii": invoke_vifiiiii, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_fiii = Module["dynCall_fiii"] = asm["dynCall_fiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_vifiiiii = Module["dynCall_vifiiiii"] = asm["dynCall_vifiiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore23SVGAnimatedRectAnimatorC2EPNS_19SVGAnimationElementEPNS_10SVGElementE","__ZN7WebCore23SVGAnimatedRectAnimatorD1Ev","_memset","_memcpy","__ZNK7WebCore18SVGPropertyTearOffINS_9FloatRectEE10isReadOnlyEv","__ZN7WebCore23SVGAnimatedRectAnimatorD0Ev","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore23SVGAnimatedRectAnimator20stopAnimValAnimationERKN3WTF6VectorINS_28SVGElementAnimatedPropertiesELj0ENS1_15CrashOnOverflowEEE","__ZN7WebCore23SVGAnimatedRectAnimator21startAnimValAnimationERKN3WTF6VectorINS_28SVGElementAnimatedPropertiesELj0ENS1_15CrashOnOverflowEEE","__ZN7WebCore23SVGAnimatedRectAnimator22calculateAnimatedValueEfjPNS_15SVGAnimatedTypeES2_S2_S2_","__ZN7WebCore18SVGPropertyTearOffINS_9FloatRectEED1Ev","__ZN7WebCore18SVGPropertyTearOffINS_9FloatRectEED0Ev","__ZN7WebCore23SVGAnimatedRectAnimator16animValDidChangeERKN3WTF6VectorINS_28SVGElementAnimatedPropertiesELj0ENS1_15CrashOnOverflowEEE","__ZN7WebCore23SVGAnimatedTypeAnimator13executeActionINS_26SVGAnimatedPropertyTearOffINS_9FloatRectEEEEEvNS0_15AnimationActionERKN3WTF6VectorINS_28SVGElementAnimatedPropertiesELj0ENS6_15CrashOnOverflowEEEjPNT_11ContentTypeE","__ZN7WebCore26SVGAnimatedPropertyTearOffINS_9FloatRectEE7animValEv","__ZN7WebCore23SVGAnimatedRectAnimator21resetAnimValToBaseValERKN3WTF6VectorINS_28SVGElementAnimatedPropertiesELj0ENS1_15CrashOnOverflowEEEPNS_15SVGAnimatedTypeE","__ZN7WebCore23SVGAnimatedRectAnimator16addAnimatedTypesEPNS_15SVGAnimatedTypeES2_","__ZN7WebCore18SVGPropertyTearOffINS_9FloatRectEE12commitChangeEv","__ZN7WebCore23SVGAnimatedRectAnimator19constructFromStringERKN3WTF6StringE","__ZN7WebCore23SVGAnimatedRectAnimator17animValWillChangeERKN3WTF6VectorINS_28SVGElementAnimatedPropertiesELj0ENS1_15CrashOnOverflowEEE","__ZN7WebCore23SVGAnimatedRectAnimator17calculateDistanceERKN3WTF6StringES4_"]

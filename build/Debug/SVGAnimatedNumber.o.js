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
H_BASE = parentModule["_malloc"](64 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 64;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore25SVGAnimatedNumberAnimatorC1EPNS_19SVGAnimationElementEPNS_10SVGElementE;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var __ZTVN7WebCore25SVGAnimatedNumberAnimatorE=(H_BASE+8)|0;
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
  var _fabsf=env._fabsf;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore25SVGAnimatedNumberAnimator22calculateAnimatedValueEfjPNS_15SVGAnimatedTypeES2_S2_S2_(i1, d2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 d2 = +d2;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, d15 = +0, d16 = +0, d17 = +0, d18 = +0, d19 = +0, i20 = 0, d21 = +0, d22 = +0, d23 = +0, d24 = +0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i9 = i8 | 0;
 i10 = i8 + 8 | 0;
 i11 = i8 + 16 | 0;
 i12 = i8 + 24 | 0;
 i13 = i1 + 8 | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 d15 = +HEAPF32[HEAP32[((HEAP32[i14 + 400 >> 2] | 0) == 3 ? i7 : i4) + 8 >> 2] >> 2];
 d16 = +HEAPF32[HEAP32[i5 + 8 >> 2] >> 2];
 d17 = +HEAPF32[HEAP32[i6 + 8 >> 2] >> 2];
 i6 = HEAP32[i7 + 8 >> 2] | 0;
 i7 = i1 + 12 | 0;
 i1 = HEAP32[i7 >> 2] | 0;
 do {
  if ((HEAP32[i14 + 320 >> 2] | 0) == 2) {
   i5 = i10 | 0;
   HEAP32[i5 >> 2] = 0;
   __ZN7WebCore19SVGAnimationElement20adjustForInheritanceEPNS_10SVGElementERKNS_13QualifiedNameERN3WTF6StringE(i14, i1, i14 + 92 | 0, i10);
   HEAPF32[i9 >> 2] = +0;
   __ZN7WebCore21parseNumberFromStringERKN3WTF6StringERfb(i10, i9, 1) | 0;
   d18 = +HEAPF32[i9 >> 2];
   i4 = HEAP32[i5 >> 2] | 0;
   if ((i4 | 0) == 0) {
    d19 = d18;
    break;
   }
   i5 = i4 | 0;
   i20 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i20 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    d19 = d18;
    break;
   } else {
    HEAP32[i5 >> 2] = i20;
    d19 = d18;
    break;
   }
  } else {
   d19 = d15;
  }
 } while (0);
 i9 = HEAP32[i13 >> 2] | 0;
 i10 = HEAP32[i7 >> 2] | 0;
 do {
  if ((HEAP32[i9 + 324 >> 2] | 0) == 2) {
   i7 = i12 | 0;
   HEAP32[i7 >> 2] = 0;
   __ZN7WebCore19SVGAnimationElement20adjustForInheritanceEPNS_10SVGElementERKNS_13QualifiedNameERN3WTF6StringE(i9, i10, i9 + 92 | 0, i12);
   HEAPF32[i11 >> 2] = +0;
   __ZN7WebCore21parseNumberFromStringERKN3WTF6StringERfb(i12, i11, 1) | 0;
   d15 = +HEAPF32[i11 >> 2];
   i14 = HEAP32[i7 >> 2] | 0;
   if ((i14 | 0) == 0) {
    d21 = d15;
    break;
   }
   i7 = i14 | 0;
   i1 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    d21 = d15;
    break;
   } else {
    HEAP32[i7 >> 2] = i1;
    d21 = d15;
    break;
   }
  } else {
   d21 = d16;
  }
 } while (0);
 i11 = HEAP32[i13 >> 2] | 0;
 if ((HEAP32[i11 + 396 >> 2] | 0) == 0) {
  d22 = d2 < +.5 ? d19 : d21;
 } else {
  d22 = d19 + (d21 - d19) * d2;
 }
 if ((i3 | 0) == 0 | (__ZNK7WebCore19SVGAnimationElement13isAccumulatedEv(i11) | 0) ^ 1) {
  d23 = d22;
 } else {
  d23 = +(i3 >>> 0 >>> 0) * d17 + d22;
 }
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i11 >> 2] | 0) + 668 >> 2] & 3](i11) | 0)) {
  d24 = d23;
  HEAPF32[i6 >> 2] = d24;
  STACKTOP = i8;
  return;
 }
 if ((HEAP32[i11 + 400 >> 2] | 0) == 3) {
  d24 = d23;
  HEAPF32[i6 >> 2] = d24;
  STACKTOP = i8;
  return;
 }
 d24 = d23 + +HEAPF32[i6 >> 2];
 HEAPF32[i6 >> 2] = d24;
 STACKTOP = i8;
 return;
}
function __ZN7WebCore23SVGAnimatedTypeAnimator18resetFromBaseValueINS_32SVGAnimatedStaticPropertyTearOffIfEEEEvRKN3WTF6VectorINS_28SVGElementAnimatedPropertiesELj0ENS4_15CrashOnOverflowEEEPNS_15SVGAnimatedTypeEMSB_FRNT_11ContentTypeEvE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i4 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i4 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
 i5 = i1 | 0;
 i6 = HEAP32[i4 >> 2] | 0;
 i7 = i3 + (HEAP32[i4 + 4 >> 2] | 0) | 0;
 if ((i6 & 1 | 0) == 0) {
  i8 = i6;
 } else {
  i8 = HEAP32[(HEAP32[i7 >> 2] | 0) + (i6 - 1) >> 2] | 0;
 }
 i6 = FUNCTION_TABLE_ii[i8 & 3](i7) | 0;
 i7 = i2 + 8 | 0;
 if ((HEAP32[i7 >> 2] | 0) == 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i8 = i2 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 if ((HEAP32[i2 + 12 >> 2] | 0) == 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 HEAPF32[i6 >> 2] = +HEAPF32[HEAP32[(HEAP32[HEAP32[i2 + 4 >> 2] >> 2] | 0) + 24 >> 2] >> 2];
 if ((HEAP32[i7 >> 2] | 0) == 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 __ZN7WebCore18SVGElementInstance21InstanceUpdateBlockerC1EPNS_10SVGElementE(i5, HEAP32[HEAP32[i8 >> 2] >> 2] | 0);
 i2 = HEAP32[i8 >> 2] | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i7 = i2 + (i8 << 4) | 0;
 if ((i8 | 0) == 0) {
  __ZN7WebCore18SVGElementInstance21InstanceUpdateBlockerD1Ev(i5);
  STACKTOP = i1;
  return;
 }
 i8 = i6;
 i6 = i2;
 while (1) {
  if ((HEAP32[i6 + 12 >> 2] | 0) == 0) {
   i9 = 16;
   break;
  }
  i2 = HEAP32[HEAP32[i6 + 4 >> 2] >> 2] | 0;
  i4 = i2 + 20 | 0;
  if ((HEAP8[i4] & 1) == 0) {
   HEAP32[i2 + 28 >> 2] = i8;
   HEAP8[i4] = 1;
  }
  i4 = i6 + 16 | 0;
  if ((i4 | 0) == (i7 | 0)) {
   i9 = 19;
   break;
  } else {
   i6 = i4;
  }
 }
 if ((i9 | 0) == 16) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i9 | 0) == 19) {
  __ZN7WebCore18SVGElementInstance21InstanceUpdateBlockerD1Ev(i5);
  STACKTOP = i1;
  return;
 }
}
function __ZN7WebCore23SVGAnimatedTypeAnimator22constructFromBaseValueINS_32SVGAnimatedStaticPropertyTearOffIfEEEENSt3__110unique_ptrINT_11ContentTypeENS4_14default_deleteIS7_EEEERKN3WTF6VectorINS_28SVGElementAnimatedPropertiesELj0ENSB_15CrashOnOverflowEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i2 | 0;
 i5 = i3 + 8 | 0;
 if ((HEAP32[i5 >> 2] | 0) == 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i6 = i3 | 0;
 i3 = HEAP32[i6 >> 2] | 0;
 if ((HEAP32[i3 + 12 >> 2] | 0) == 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i7 = HEAP32[(HEAP32[HEAP32[i3 + 4 >> 2] >> 2] | 0) + 24 >> 2] | 0;
 i8 = __Znwj(4) | 0;
 i9 = i8;
 HEAPF32[i9 >> 2] = +HEAPF32[i7 >> 2];
 HEAP32[i1 >> 2] = i9;
 __ZN7WebCore18SVGElementInstance21InstanceUpdateBlockerC1EPNS_10SVGElementE(i4, HEAP32[i3 >> 2] | 0);
 i3 = HEAP32[i6 >> 2] | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i5 = i3 + (i6 << 4) | 0;
 if ((i6 | 0) == 0) {
  __ZN7WebCore18SVGElementInstance21InstanceUpdateBlockerD1Ev(i4);
  STACKTOP = i2;
  return;
 }
 i6 = i8;
 i8 = i3;
 while (1) {
  if ((HEAP32[i8 + 12 >> 2] | 0) == 0) {
   i10 = 11;
   break;
  }
  i3 = HEAP32[HEAP32[i8 + 4 >> 2] >> 2] | 0;
  i9 = i3 + 20 | 0;
  if ((HEAP8[i9] & 1) == 0) {
   HEAP32[i3 + 28 >> 2] = i6;
   HEAP8[i9] = 1;
  }
  i9 = i8 + 16 | 0;
  if ((i9 | 0) == (i5 | 0)) {
   i10 = 14;
   break;
  } else {
   i8 = i9;
  }
 }
 if ((i10 | 0) == 11) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i10 | 0) == 14) {
  __ZN7WebCore18SVGElementInstance21InstanceUpdateBlockerD1Ev(i4);
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore25SVGAnimatedNumberAnimator20stopAnimValAnimationERKN3WTF6VectorINS_28SVGElementAnimatedPropertiesELj0ENS1_15CrashOnOverflowEEE(i1, i2) {
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
   i7 = 6;
   break;
  }
  i2 = HEAP32[HEAP32[i6 + 4 >> 2] >> 2] | 0;
  HEAP32[i2 + 28 >> 2] = 0;
  HEAP8[i2 + 20 | 0] = 0;
  i2 = i6 + 16 | 0;
  if ((i2 | 0) == (i4 | 0)) {
   i7 = 8;
   break;
  } else {
   i6 = i2;
  }
 }
 if ((i7 | 0) == 6) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i7 | 0) == 8) {
  __ZN7WebCore18SVGElementInstance21InstanceUpdateBlockerD1Ev(i3);
  STACKTOP = i1;
  return;
 }
}
function __ZN7WebCore25SVGAnimatedNumberAnimator17animValWillChangeERKN3WTF6VectorINS_28SVGElementAnimatedPropertiesELj0ENS1_15CrashOnOverflowEEE(i1, i2) {
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
function __ZN7WebCore25SVGAnimatedNumberAnimator16animValDidChangeERKN3WTF6VectorINS_28SVGElementAnimatedPropertiesELj0ENS1_15CrashOnOverflowEEE(i1, i2) {
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
function __ZN7WebCore25SVGAnimatedNumberAnimator21startAnimValAnimationERKN3WTF6VectorINS_28SVGElementAnimatedPropertiesELj0ENS1_15CrashOnOverflowEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 __ZN7WebCore23SVGAnimatedTypeAnimator22constructFromBaseValueINS_32SVGAnimatedStaticPropertyTearOffIfEEEENSt3__110unique_ptrINT_11ContentTypeENS4_14default_deleteIS7_EEEERKN3WTF6VectorINS_28SVGElementAnimatedPropertiesELj0ENSB_15CrashOnOverflowEEE(i5, i2 | 0, i3);
 __ZN7WebCore15SVGAnimatedType12createNumberENSt3__110unique_ptrIfNS1_14default_deleteIfEEEE(i1, i5);
 i1 = i5 | 0;
 i5 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZdlPv(i5);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore25SVGAnimatedNumberAnimator19constructFromStringERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i2 | 0;
 i5 = __Znwj(4) | 0;
 HEAPF32[i5 >> 2] = +0;
 i6 = i4 | 0;
 HEAP32[i6 >> 2] = i5;
 __ZN7WebCore15SVGAnimatedType12createNumberENSt3__110unique_ptrIfNS1_14default_deleteIfEEEE(i1, i4);
 i4 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 if ((i4 | 0) != 0) {
  __ZdlPv(i4);
 }
 i4 = HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] | 0;
 if (__ZN7WebCore21parseNumberFromStringERKN3WTF6StringERfb(i3, i4, 1) | 0) {
  STACKTOP = i2;
  return;
 }
 HEAPF32[i4 >> 2] = +0;
 STACKTOP = i2;
 return;
}
function __ZN7WebCore25SVGAnimatedNumberAnimator21resetAnimValToBaseValERKN3WTF6VectorINS_28SVGElementAnimatedPropertiesELj0ENS1_15CrashOnOverflowEEEPNS_15SVGAnimatedTypeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = F_BASE_ii + 2;
 HEAP32[i5 + 4 >> 2] = 0;
 __ZN7WebCore23SVGAnimatedTypeAnimator18resetFromBaseValueINS_32SVGAnimatedStaticPropertyTearOffIfEEEEvRKN3WTF6VectorINS_28SVGElementAnimatedPropertiesELj0ENS4_15CrashOnOverflowEEEPNS_15SVGAnimatedTypeEMSB_FRNT_11ContentTypeEvE(i1 | 0, i2, i3, i5);
 STACKTOP = i4;
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
function __ZN7WebCore25SVGAnimatedNumberAnimator17calculateDistanceERKN3WTF6StringES4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, d6 = +0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i1 | 0;
 i5 = i1 + 8 | 0;
 HEAPF32[i4 >> 2] = +0;
 HEAPF32[i5 >> 2] = +0;
 __ZN7WebCore21parseNumberFromStringERKN3WTF6StringERfb(i2, i4, 1) | 0;
 __ZN7WebCore21parseNumberFromStringERKN3WTF6StringERfb(i3, i5, 1) | 0;
 d6 = +Math_abs(+(+HEAPF32[i5 >> 2] - +HEAPF32[i4 >> 2]));
 STACKTOP = i1;
 return +d6;
}
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_vifiiiii + 2;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_fiii + 2;
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
function __ZN7WebCore25SVGAnimatedNumberAnimatorC2EPNS_19SVGAnimationElementEPNS_10SVGElementE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore23SVGAnimatedTypeAnimatorC2ENS_20AnimatedPropertyTypeEPNS_19SVGAnimationElementEPNS_10SVGElementE(i1 | 0, 8, i2, i3);
 HEAP32[i1 >> 2] = H_BASE + 16;
 return;
}
function __ZN7WebCore25SVGAnimatedNumberAnimatorC1EPNS_19SVGAnimationElementEPNS_10SVGElementE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore23SVGAnimatedTypeAnimatorC2ENS_20AnimatedPropertyTypeEPNS_19SVGAnimationElementEPNS_10SVGElementE(i1 | 0, 8, i2, i3);
 HEAP32[i1 >> 2] = H_BASE + 16;
 return;
}
function __ZN7WebCore25SVGAnimatedNumberAnimator16addAnimatedTypesEPNS_15SVGAnimatedTypeES2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i1 = HEAP32[i3 + 8 >> 2] | 0;
 HEAPF32[i1 >> 2] = +HEAPF32[HEAP32[i2 + 8 >> 2] >> 2] + +HEAPF32[i1 >> 2];
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
function __ZN7WebCore25SVGAnimatedNumberAnimatorD0Ev(i1) {
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
function __ZN7WebCore25SVGAnimatedNumberAnimatorD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore23SVGAnimatedTypeAnimatorD2Ev(i1 | 0);
 return;
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
 return FUNCTION_TABLE_ii[i1 & 3](i2 | 0) | 0;
}
function __ZN7WebCore15SVGAnimatedType6numberEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 8 >> 2] | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 7](i2 | 0);
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
  var FUNCTION_TABLE_fiii = [b0,b0,__ZN7WebCore25SVGAnimatedNumberAnimator17calculateDistanceERKN3WTF6StringES4_,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore25SVGAnimatedNumberAnimatorD1Ev,b1,__ZN7WebCore25SVGAnimatedNumberAnimatorD0Ev,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,__ZN7WebCore25SVGAnimatedNumberAnimator17animValWillChangeERKN3WTF6VectorINS_28SVGElementAnimatedPropertiesELj0ENS1_15CrashOnOverflowEEE,b2,__ZN7WebCore25SVGAnimatedNumberAnimator16animValDidChangeERKN3WTF6VectorINS_28SVGElementAnimatedPropertiesELj0ENS1_15CrashOnOverflowEEE,b2,__ZN7WebCore25SVGAnimatedNumberAnimator20stopAnimValAnimationERKN3WTF6VectorINS_28SVGElementAnimatedPropertiesELj0ENS1_15CrashOnOverflowEEE,b2];
  var FUNCTION_TABLE_ii = [b3,b3,__ZN7WebCore15SVGAnimatedType6numberEv,b3];
  var FUNCTION_TABLE_viii = [b4,b4,__ZN7WebCore25SVGAnimatedNumberAnimator19constructFromStringERKN3WTF6StringE,b4,__ZN7WebCore25SVGAnimatedNumberAnimator21startAnimValAnimationERKN3WTF6VectorINS_28SVGElementAnimatedPropertiesELj0ENS1_15CrashOnOverflowEEE,b4,__ZN7WebCore25SVGAnimatedNumberAnimator21resetAnimValToBaseValERKN3WTF6VectorINS_28SVGElementAnimatedPropertiesELj0ENS1_15CrashOnOverflowEEEPNS_15SVGAnimatedTypeE,b4,__ZN7WebCore25SVGAnimatedNumberAnimator16addAnimatedTypesEPNS_15SVGAnimatedTypeES2_,b4,__ZN7WebCore25SVGAnimatedNumberAnimatorC2EPNS_19SVGAnimationElementEPNS_10SVGElementE,b4,b4,b4,b4,b4];
  var FUNCTION_TABLE_v = [b5,b5];
  var FUNCTION_TABLE_vifiiiii = [b6,b6,__ZN7WebCore25SVGAnimatedNumberAnimator22calculateAnimatedValueEfjPNS_15SVGAnimatedTypeES2_S2_S2_,b6];
  var FUNCTION_TABLE_iii = [b7,b7];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_fiii: dynCall_fiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_vifiiiii: dynCall_vifiiiii, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_fiii": invoke_fiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_vifiiiii": invoke_vifiiiii, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "_fabsf": _fabsf, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore23SVGAnimatedTypeAnimator18resetFromBaseValueINS_32SVGAnimatedStaticPropertyTearOffIfEEEEvRKN3WTF6VectorINS_28SVGElementAnimatedPropertiesELj0ENS4_15CrashOnOverflowEEEPNS_15SVGAnimatedTypeEMSB_FRNT_11ContentTypeEvE","__ZN7WebCore25SVGAnimatedNumberAnimator19constructFromStringERKN3WTF6StringE","__ZN3WTF15CrashOnOverflow10overflowedEv","_memset","__ZN7WebCore25SVGAnimatedNumberAnimatorD0Ev","__ZN7WebCore25SVGAnimatedNumberAnimator21startAnimValAnimationERKN3WTF6VectorINS_28SVGElementAnimatedPropertiesELj0ENS1_15CrashOnOverflowEEE","__ZN7WebCore25SVGAnimatedNumberAnimator21resetAnimValToBaseValERKN3WTF6VectorINS_28SVGElementAnimatedPropertiesELj0ENS1_15CrashOnOverflowEEEPNS_15SVGAnimatedTypeE","__ZN7WebCore25SVGAnimatedNumberAnimator16addAnimatedTypesEPNS_15SVGAnimatedTypeES2_","__ZN7WebCore25SVGAnimatedNumberAnimatorD1Ev","__ZN7WebCore15SVGAnimatedType6numberEv","__ZN7WebCore25SVGAnimatedNumberAnimator17animValWillChangeERKN3WTF6VectorINS_28SVGElementAnimatedPropertiesELj0ENS1_15CrashOnOverflowEEE","__ZN7WebCore25SVGAnimatedNumberAnimator16animValDidChangeERKN3WTF6VectorINS_28SVGElementAnimatedPropertiesELj0ENS1_15CrashOnOverflowEEE","__ZN7WebCore25SVGAnimatedNumberAnimator22calculateAnimatedValueEfjPNS_15SVGAnimatedTypeES2_S2_S2_","_memcpy","_strlen","__ZN7WebCore25SVGAnimatedNumberAnimator20stopAnimValAnimationERKN3WTF6VectorINS_28SVGElementAnimatedPropertiesELj0ENS1_15CrashOnOverflowEEE","__ZN7WebCore25SVGAnimatedNumberAnimator17calculateDistanceERKN3WTF6StringES4_","__ZN7WebCore23SVGAnimatedTypeAnimator22constructFromBaseValueINS_32SVGAnimatedStaticPropertyTearOffIfEEEENSt3__110unique_ptrINT_11ContentTypeENS4_14default_deleteIS7_EEEERKN3WTF6VectorINS_28SVGElementAnimatedPropertiesELj0ENSB_15CrashOnOverflowEEE","__ZN7WebCore25SVGAnimatedNumberAnimatorC2EPNS_19SVGAnimationElementEPNS_10SVGElementE"]

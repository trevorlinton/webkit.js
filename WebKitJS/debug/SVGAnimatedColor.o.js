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
var __ZN7WebCore24SVGAnimatedColorAnimatorC1EPNS_19SVGAnimationElementEPNS_10SVGElementE;
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
  var __ZTVN7WebCore24SVGAnimatedColorAnimatorE=(H_BASE+8)|0;
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
  var _round=env._round;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore24SVGAnimatedColorAnimator22calculateAnimatedValueEfjPNS_15SVGAnimatedTypeES2_S2_S2_(i1, d2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 d2 = +d2;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, d31 = +0, d32 = +0, d33 = +0, d34 = +0, d35 = +0, d36 = +0, d37 = +0, d38 = +0, d39 = +0, d40 = +0, d41 = +0, d42 = +0, d43 = +0, d44 = +0, d45 = +0, d46 = +0, d47 = +0, i48 = 0, d49 = +0, i50 = 0, d51 = +0, i52 = 0, d53 = +0, i54 = 0, i55 = 0, i56 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i9 = i8 | 0;
 i10 = i8 + 8 | 0;
 i11 = i8 + 16 | 0;
 i12 = i8 + 24 | 0;
 i13 = i8 + 32 | 0;
 i14 = i8 + 40 | 0;
 i15 = i8 + 48 | 0;
 i16 = i1 + 8 | 0;
 i17 = HEAP32[i16 >> 2] | 0;
 i18 = HEAP32[HEAP32[((HEAP32[i17 + 400 >> 2] | 0) == 3 ? i7 : i4) + 8 >> 2] >> 2] | 0;
 i4 = HEAP32[HEAP32[i5 + 8 >> 2] >> 2] | 0;
 i5 = HEAP32[i6 + 8 >> 2] | 0;
 i6 = HEAP32[i7 + 8 >> 2] | 0;
 i7 = i1 + 12 | 0;
 i1 = HEAP32[i7 >> 2] | 0;
 do {
  if ((HEAP32[i17 + 320 >> 2] | 0) == 2) {
   i19 = i13 | 0;
   HEAP32[i19 >> 2] = 0;
   __ZN7WebCore19SVGAnimationElement20adjustForInheritanceEPNS_10SVGElementERKNS_13QualifiedNameERN3WTF6StringE(i17, i1, i17 + 92 | 0, i13);
   __ZN7WebCore8SVGColor23colorFromRGBColorStringERKN3WTF6StringE(i14, i13);
   i20 = HEAP32[i14 >> 2] | 0;
   i21 = HEAP32[i19 >> 2] | 0;
   if ((i21 | 0) == 0) {
    i22 = i20;
    break;
   }
   i19 = i21 | 0;
   i23 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
   if ((i23 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i21);
    i22 = i20;
    break;
   } else {
    HEAP32[i19 >> 2] = i23;
    i22 = i20;
    break;
   }
  } else {
   i22 = i18;
  }
 } while (0);
 i18 = HEAP32[i16 >> 2] | 0;
 i14 = HEAP32[i7 >> 2] | 0;
 do {
  if ((HEAP32[i18 + 324 >> 2] | 0) == 2) {
   i13 = i11 | 0;
   HEAP32[i13 >> 2] = 0;
   __ZN7WebCore19SVGAnimationElement20adjustForInheritanceEPNS_10SVGElementERKNS_13QualifiedNameERN3WTF6StringE(i18, i14, i18 + 92 | 0, i11);
   __ZN7WebCore8SVGColor23colorFromRGBColorStringERKN3WTF6StringE(i12, i11);
   i17 = HEAP32[i12 >> 2] | 0;
   i1 = HEAP32[i13 >> 2] | 0;
   if ((i1 | 0) == 0) {
    i24 = i17;
    break;
   }
   i13 = i1 | 0;
   i20 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i20 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    i24 = i17;
    break;
   } else {
    HEAP32[i13 >> 2] = i20;
    i24 = i17;
    break;
   }
  } else {
   i24 = i4;
  }
 } while (0);
 i4 = HEAP32[i16 >> 2] | 0;
 do {
  if ((HEAP32[i4 + 320 >> 2] | 0) == 1) {
   i12 = HEAP32[i7 >> 2] | 0;
   i11 = i12 + 32 | 0;
   if ((HEAP32[i12 + 12 >> 2] & 2048 | 0) == 0) {
    i25 = i11 | 0;
   } else {
    i25 = HEAP32[i11 >> 2] | 0;
   }
   i11 = HEAP32[i25 >> 2] | 0;
   if ((i11 | 0) == 0) {
    i26 = 0;
    i27 = i4;
    break;
   }
   __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i10, HEAP32[i11 + 36 >> 2] | 0, 1);
   i26 = HEAP32[i10 >> 2] | 0;
   i27 = HEAP32[i16 >> 2] | 0;
  } else {
   i26 = i22;
   i27 = i4;
  }
 } while (0);
 do {
  if ((HEAP32[i27 + 324 >> 2] | 0) == 1) {
   i4 = HEAP32[i7 >> 2] | 0;
   i22 = i4 + 32 | 0;
   if ((HEAP32[i4 + 12 >> 2] & 2048 | 0) == 0) {
    i28 = i22 | 0;
   } else {
    i28 = HEAP32[i22 >> 2] | 0;
   }
   i22 = HEAP32[i28 >> 2] | 0;
   if ((i22 | 0) == 0) {
    i29 = 0;
    i30 = i27;
    break;
   }
   __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i9, HEAP32[i22 + 36 >> 2] | 0, 1);
   i29 = HEAP32[i9 >> 2] | 0;
   i30 = HEAP32[i16 >> 2] | 0;
  } else {
   i29 = i24;
   i30 = i27;
  }
 } while (0);
 i27 = i6 | 0;
 d31 = +((HEAP32[i27 >> 2] | 0) >>> 16 & 255 | 0);
 d32 = +(i26 >>> 16 & 255 | 0);
 d33 = +(i29 >>> 16 & 255 | 0);
 i24 = i5 | 0;
 d34 = +((HEAP32[i24 >> 2] | 0) >>> 16 & 255 | 0);
 if ((HEAP32[i30 + 396 >> 2] | 0) == 0) {
  d35 = d2 < +.5 ? d32 : d33;
 } else {
  d35 = d32 + (d33 - d32) * d2;
 }
 i5 = (i3 | 0) == 0;
 if (i5 | (__ZNK7WebCore19SVGAnimationElement13isAccumulatedEv(i30) | 0) ^ 1) {
  d36 = d35;
 } else {
  d36 = +(i3 >>> 0 >>> 0) * d34 + d35;
 }
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i30 >> 2] | 0) + 668 >> 2] & 1](i30) | 0) {
   if ((HEAP32[i30 + 400 >> 2] | 0) == 3) {
    d37 = d36;
    break;
   }
   d37 = d31 + d36;
  } else {
   d37 = d36;
  }
 } while (0);
 d36 = +((HEAP32[i27 >> 2] | 0) >>> 8 & 255 | 0);
 i30 = HEAP32[i16 >> 2] | 0;
 d31 = +(i26 >>> 8 & 255 | 0);
 d35 = +(i29 >>> 8 & 255 | 0);
 d34 = +((HEAP32[i24 >> 2] | 0) >>> 8 & 255 | 0);
 if ((HEAP32[i30 + 396 >> 2] | 0) == 0) {
  d38 = d2 < +.5 ? d31 : d35;
 } else {
  d38 = d31 + (d35 - d31) * d2;
 }
 if (i5 | (__ZNK7WebCore19SVGAnimationElement13isAccumulatedEv(i30) | 0) ^ 1) {
  d39 = d38;
 } else {
  d39 = +(i3 >>> 0 >>> 0) * d34 + d38;
 }
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i30 >> 2] | 0) + 668 >> 2] & 1](i30) | 0) {
   if ((HEAP32[i30 + 400 >> 2] | 0) == 3) {
    d40 = d39;
    break;
   }
   d40 = d36 + d39;
  } else {
   d40 = d39;
  }
 } while (0);
 d39 = +(HEAP32[i27 >> 2] & 255 | 0);
 i30 = HEAP32[i16 >> 2] | 0;
 d36 = +(i26 & 255 | 0);
 d38 = +(i29 & 255 | 0);
 d34 = +(HEAP32[i24 >> 2] & 255 | 0);
 if ((HEAP32[i30 + 396 >> 2] | 0) == 0) {
  d41 = d2 < +.5 ? d36 : d38;
 } else {
  d41 = d36 + (d38 - d36) * d2;
 }
 if (i5 | (__ZNK7WebCore19SVGAnimationElement13isAccumulatedEv(i30) | 0) ^ 1) {
  d42 = d41;
 } else {
  d42 = +(i3 >>> 0 >>> 0) * d34 + d41;
 }
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i30 >> 2] | 0) + 668 >> 2] & 1](i30) | 0) {
   if ((HEAP32[i30 + 400 >> 2] | 0) == 3) {
    d43 = d42;
    break;
   }
   d43 = d39 + d42;
  } else {
   d43 = d42;
  }
 } while (0);
 d42 = +((HEAP32[i27 >> 2] | 0) >>> 24 | 0);
 i27 = HEAP32[i16 >> 2] | 0;
 d39 = +(i26 >>> 24 | 0);
 d41 = +(i29 >>> 24 | 0);
 d34 = +((HEAP32[i24 >> 2] | 0) >>> 24 | 0);
 if ((HEAP32[i27 + 396 >> 2] | 0) == 0) {
  d44 = d2 < +.5 ? d39 : d41;
 } else {
  d44 = d39 + (d41 - d39) * d2;
 }
 if (i5 | (__ZNK7WebCore19SVGAnimationElement13isAccumulatedEv(i27) | 0) ^ 1) {
  d45 = d44;
 } else {
  d45 = +(i3 >>> 0 >>> 0) * d34 + d44;
 }
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i27 >> 2] | 0) + 668 >> 2] & 1](i27) | 0)) {
  d46 = d45;
  d47 = +_round(+d37);
  i48 = ~~d47;
  d49 = +_round(+d40);
  i50 = ~~d49;
  d51 = +_round(+d43);
  i52 = ~~d51;
  d53 = +_round(+d46);
  i54 = ~~d53;
  __ZN7WebCore13ColorDistance10clampColorEiiii(i15, i48, i50, i52, i54);
  i55 = i6;
  i56 = i15;
  HEAP32[i55 >> 2] = HEAP32[i56 >> 2];
  HEAP8[i55 + 4 | 0] = HEAP8[i56 + 4 | 0] | 0;
  STACKTOP = i8;
  return;
 }
 if ((HEAP32[i27 + 400 >> 2] | 0) == 3) {
  d46 = d45;
  d47 = +_round(+d37);
  i48 = ~~d47;
  d49 = +_round(+d40);
  i50 = ~~d49;
  d51 = +_round(+d43);
  i52 = ~~d51;
  d53 = +_round(+d46);
  i54 = ~~d53;
  __ZN7WebCore13ColorDistance10clampColorEiiii(i15, i48, i50, i52, i54);
  i55 = i6;
  i56 = i15;
  HEAP32[i55 >> 2] = HEAP32[i56 >> 2];
  HEAP8[i55 + 4 | 0] = HEAP8[i56 + 4 | 0] | 0;
  STACKTOP = i8;
  return;
 }
 d46 = d42 + d45;
 d47 = +_round(+d37);
 i48 = ~~d47;
 d49 = +_round(+d40);
 i50 = ~~d49;
 d51 = +_round(+d43);
 i52 = ~~d51;
 d53 = +_round(+d46);
 i54 = ~~d53;
 __ZN7WebCore13ColorDistance10clampColorEiiii(i15, i48, i50, i52, i54);
 i55 = i6;
 i56 = i15;
 HEAP32[i55 >> 2] = HEAP32[i56 >> 2];
 HEAP8[i55 + 4 | 0] = HEAP8[i56 + 4 | 0] | 0;
 STACKTOP = i8;
 return;
}
function __ZN7WebCore24SVGAnimatedColorAnimator19constructFromStringERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i2 | 0;
 i5 = i2 + 8 | 0;
 i6 = __ZN3WTF10fastMallocEj(8) | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP8[i6 + 4 | 0] = 0;
 i7 = i4 | 0;
 HEAP32[i7 >> 2] = i6;
 __ZN7WebCore15SVGAnimatedType11createColorENSt3__110unique_ptrINS_5ColorENS1_14default_deleteIS3_EEEE(i1, i4);
 i4 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 if ((i4 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i4);
 }
 i4 = HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   if ((HEAP32[i1 + 4 >> 2] | 0) == 0) {
    break;
   }
   __ZN7WebCore8SVGColor23colorFromRGBColorStringERKN3WTF6StringE(i5, i3);
   i8 = i4;
   i9 = i5;
   HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
   HEAP8[i8 + 4 | 0] = HEAP8[i9 + 4 | 0] | 0;
   STACKTOP = i2;
   return;
  }
 } while (0);
 HEAP32[i5 >> 2] = 0;
 HEAP8[i5 + 4 | 0] = 0;
 i8 = i4;
 i9 = i5;
 HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
 HEAP8[i8 + 4 | 0] = HEAP8[i9 + 4 | 0] | 0;
 STACKTOP = i2;
 return;
}
function __ZN7WebCore24SVGAnimatedColorAnimator17calculateDistanceERKN3WTF6StringES4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, d7 = +0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i1 | 0;
 i5 = i1 + 8 | 0;
 i6 = i1 + 16 | 0;
 __ZN7WebCore8SVGColor23colorFromRGBColorStringERKN3WTF6StringE(i4, i2);
 if ((HEAP8[i4 + 4 | 0] & 1) == 0) {
  d7 = +-1;
  STACKTOP = i1;
  return +d7;
 }
 __ZN7WebCore8SVGColor23colorFromRGBColorStringERKN3WTF6StringE(i5, i3);
 if ((HEAP8[i5 + 4 | 0] & 1) == 0) {
  d7 = +-1;
  STACKTOP = i1;
  return +d7;
 }
 __ZN7WebCore13ColorDistanceC1ERKNS_5ColorES3_(i6, i4, i5);
 d7 = +__ZNK7WebCore13ColorDistance8distanceEv(i6);
 STACKTOP = i1;
 return +d7;
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
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_vifiiiii + 2;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_fiii + 2;
}
function __ZN7WebCore24SVGAnimatedColorAnimator16addAnimatedTypesEPNS_15SVGAnimatedTypeES2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i1 | 0;
 i5 = HEAP32[i3 + 8 >> 2] | 0;
 __ZN7WebCore13ColorDistance9addColorsERKNS_5ColorES3_(i4, HEAP32[i2 + 8 >> 2] | 0, i5);
 i2 = i5;
 i5 = i4;
 HEAP32[i2 >> 2] = HEAP32[i5 >> 2];
 HEAP8[i2 + 4 | 0] = HEAP8[i5 + 4 | 0] | 0;
 STACKTOP = i1;
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
function __ZN7WebCore24SVGAnimatedColorAnimatorC2EPNS_19SVGAnimationElementEPNS_10SVGElementE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore23SVGAnimatedTypeAnimatorC2ENS_20AnimatedPropertyTypeEPNS_19SVGAnimationElementEPNS_10SVGElementE(i1 | 0, 2, i2, i3);
 HEAP32[i1 >> 2] = H_BASE + 16;
 return;
}
function __ZN7WebCore24SVGAnimatedColorAnimatorC1EPNS_19SVGAnimationElementEPNS_10SVGElementE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore23SVGAnimatedTypeAnimatorC2ENS_20AnimatedPropertyTypeEPNS_19SVGAnimationElementEPNS_10SVGElementE(i1 | 0, 2, i2, i3);
 HEAP32[i1 >> 2] = H_BASE + 16;
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
function __ZN7WebCore24SVGAnimatedColorAnimator21startAnimValAnimationERKN3WTF6VectorINS_28SVGElementAnimatedPropertiesELj0ENS1_15CrashOnOverflowEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZN7WebCore24SVGAnimatedColorAnimator21resetAnimValToBaseValERKN3WTF6VectorINS_28SVGElementAnimatedPropertiesELj0ENS1_15CrashOnOverflowEEEPNS_15SVGAnimatedTypeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore24SVGAnimatedColorAnimator20stopAnimValAnimationERKN3WTF6VectorINS_28SVGElementAnimatedPropertiesELj0ENS1_15CrashOnOverflowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore24SVGAnimatedColorAnimator17animValWillChangeERKN3WTF6VectorINS_28SVGElementAnimatedPropertiesELj0ENS1_15CrashOnOverflowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore24SVGAnimatedColorAnimator16animValDidChangeERKN3WTF6VectorINS_28SVGElementAnimatedPropertiesELj0ENS1_15CrashOnOverflowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore24SVGAnimatedColorAnimatorD0Ev(i1) {
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
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 1](i2 | 0, i3 | 0) | 0;
}
function __ZN7WebCore24SVGAnimatedColorAnimatorD1Ev(i1) {
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
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
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
  var FUNCTION_TABLE_fiii = [b0,b0,__ZN7WebCore24SVGAnimatedColorAnimator17calculateDistanceERKN3WTF6StringES4_,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore24SVGAnimatedColorAnimatorD1Ev,b1,__ZN7WebCore24SVGAnimatedColorAnimatorD0Ev,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,__ZN7WebCore24SVGAnimatedColorAnimator16animValDidChangeERKN3WTF6VectorINS_28SVGElementAnimatedPropertiesELj0ENS1_15CrashOnOverflowEEE,b2,__ZN7WebCore24SVGAnimatedColorAnimator17animValWillChangeERKN3WTF6VectorINS_28SVGElementAnimatedPropertiesELj0ENS1_15CrashOnOverflowEEE,b2,__ZN7WebCore24SVGAnimatedColorAnimator20stopAnimValAnimationERKN3WTF6VectorINS_28SVGElementAnimatedPropertiesELj0ENS1_15CrashOnOverflowEEE,b2];
  var FUNCTION_TABLE_ii = [b3,b3];
  var FUNCTION_TABLE_viii = [b4,b4,__ZN7WebCore24SVGAnimatedColorAnimator21startAnimValAnimationERKN3WTF6VectorINS_28SVGElementAnimatedPropertiesELj0ENS1_15CrashOnOverflowEEE,b4,__ZN7WebCore24SVGAnimatedColorAnimator19constructFromStringERKN3WTF6StringE,b4,__ZN7WebCore24SVGAnimatedColorAnimatorC2EPNS_19SVGAnimationElementEPNS_10SVGElementE,b4,__ZN7WebCore24SVGAnimatedColorAnimator21resetAnimValToBaseValERKN3WTF6VectorINS_28SVGElementAnimatedPropertiesELj0ENS1_15CrashOnOverflowEEEPNS_15SVGAnimatedTypeE,b4,__ZN7WebCore24SVGAnimatedColorAnimator16addAnimatedTypesEPNS_15SVGAnimatedTypeES2_,b4,b4,b4,b4,b4];
  var FUNCTION_TABLE_v = [b5,b5];
  var FUNCTION_TABLE_vifiiiii = [b6,b6,__ZN7WebCore24SVGAnimatedColorAnimator22calculateAnimatedValueEfjPNS_15SVGAnimatedTypeES2_S2_S2_,b6];
  var FUNCTION_TABLE_iii = [b7,b7];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_fiii: dynCall_fiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_vifiiiii: dynCall_vifiiiii, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_fiii": invoke_fiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_vifiiiii": invoke_vifiiiii, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_round": _round, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore24SVGAnimatedColorAnimator21startAnimValAnimationERKN3WTF6VectorINS_28SVGElementAnimatedPropertiesELj0ENS1_15CrashOnOverflowEEE","_strlen","__ZN7WebCore24SVGAnimatedColorAnimator22calculateAnimatedValueEfjPNS_15SVGAnimatedTypeES2_S2_S2_","__ZN7WebCore24SVGAnimatedColorAnimatorD1Ev","__ZN7WebCore24SVGAnimatedColorAnimatorD0Ev","__ZN7WebCore24SVGAnimatedColorAnimator19constructFromStringERKN3WTF6StringE","__ZN7WebCore24SVGAnimatedColorAnimator16animValDidChangeERKN3WTF6VectorINS_28SVGElementAnimatedPropertiesELj0ENS1_15CrashOnOverflowEEE","_memset","__ZN7WebCore24SVGAnimatedColorAnimator17animValWillChangeERKN3WTF6VectorINS_28SVGElementAnimatedPropertiesELj0ENS1_15CrashOnOverflowEEE","__ZN7WebCore24SVGAnimatedColorAnimatorC2EPNS_19SVGAnimationElementEPNS_10SVGElementE","__ZN7WebCore24SVGAnimatedColorAnimator20stopAnimValAnimationERKN3WTF6VectorINS_28SVGElementAnimatedPropertiesELj0ENS1_15CrashOnOverflowEEE","_memcpy","__ZN7WebCore24SVGAnimatedColorAnimator17calculateDistanceERKN3WTF6StringES4_","__ZN7WebCore24SVGAnimatedColorAnimator21resetAnimValToBaseValERKN3WTF6VectorINS_28SVGElementAnimatedPropertiesELj0ENS1_15CrashOnOverflowEEEPNS_15SVGAnimatedTypeE","__ZN7WebCore24SVGAnimatedColorAnimator16addAnimatedTypesEPNS_15SVGAnimatedTypeES2_"]

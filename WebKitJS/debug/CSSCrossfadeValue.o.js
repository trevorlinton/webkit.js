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
H_BASE = parentModule["_malloc"](80 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 80;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore17CSSCrossfadeValueD1Ev;
/* memory initializer */ allocate([44,32,0,0,0,0,0,0,45,119,101,98,107,105,116,45,99,114,111,115,115,45,102,97,100,101,40,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
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
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore17CSSCrossfadeValue30CrossfadeSubimageObserverProxyE=(H_BASE+40)|0;
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
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZNK7WebCore17CSSCrossfadeValue13customCSSTextEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 32 | 0;
 i7 = i3 + 40 | 0;
 i8 = i3 + 48 | 0;
 i9 = i5 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i5 + 4 | 0;
 HEAP32[i10 >> 2] = 0;
 i11 = i5 + 8 | 0;
 HEAP32[i11 >> 2] = 0;
 i12 = i5 + 12 | 0;
 HEAP8[i12] = 1;
 HEAP32[i5 + 16 >> 2] = 0;
 i13 = i5 + 20 | 0;
 HEAP32[i13 >> 2] = 0;
 __ZN3WTF13StringBuilder6appendEPKhj(i5, H_BASE + 16 | 0, 19);
 __ZNK7WebCore8CSSValue7cssTextEv(i6, HEAP32[i2 + 48 >> 2] | 0);
 __ZN3WTF13StringBuilder6appendERKNS_6StringE(i5, i6);
 i14 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i6 = i14 | 0;
   i15 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    break;
   } else {
    HEAP32[i6 >> 2] = i15;
    break;
   }
  }
 } while (0);
 __ZN3WTF13StringBuilder6appendEPKhj(i5, H_BASE + 8 | 0, 2);
 __ZNK7WebCore8CSSValue7cssTextEv(i7, HEAP32[i2 + 52 >> 2] | 0);
 __ZN3WTF13StringBuilder6appendERKNS_6StringE(i5, i7);
 i14 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i7 = i14 | 0;
   i15 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    break;
   } else {
    HEAP32[i7 >> 2] = i15;
    break;
   }
  }
 } while (0);
 __ZN3WTF13StringBuilder6appendEPKhj(i5, H_BASE + 8 | 0, 2);
 __ZNK7WebCore8CSSValue7cssTextEv(i8, HEAP32[i2 + 56 >> 2] | 0);
 __ZN3WTF13StringBuilder6appendERKNS_6StringE(i5, i8);
 i2 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i8 = i2 | 0;
   i14 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i8 >> 2] = i14;
    break;
   }
  }
 } while (0);
 HEAP8[i4] = 41;
 i2 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   i16 = 19;
  } else {
   i14 = HEAP32[i9 >> 2] | 0;
   if (i14 >>> 0 >= (HEAP32[i2 + 4 >> 2] | 0) >>> 0) {
    i16 = 19;
    break;
   }
   if ((HEAP32[i10 >> 2] | 0) != 0) {
    i16 = 19;
    break;
   }
   i8 = (HEAP8[i12] & 1) == 0;
   HEAP32[i9 >> 2] = i14 + 1;
   if (i8) {
    HEAP16[(HEAP32[i5 + 20 >> 2] | 0) + (i14 << 1) >> 1] = 41;
    break;
   } else {
    HEAP8[(HEAP32[i13 >> 2] | 0) + i14 | 0] = 41;
    break;
   }
  }
 } while (0);
 if ((i16 | 0) == 19) {
  __ZN3WTF13StringBuilder6appendEPKhj(i5, i4, 1);
 }
 __ZN3WTF13StringBuilder11shrinkToFitEv(i5);
 i4 = HEAP32[i10 >> 2] | 0;
 if ((i4 | 0) == 0) {
  __ZNK3WTF13StringBuilder11reifyStringEv(i5);
  i5 = HEAP32[i10 >> 2] | 0;
  HEAP32[i1 >> 2] = i5;
  if ((i5 | 0) != 0) {
   i17 = i5;
   i16 = 23;
  }
 } else {
  HEAP32[i1 >> 2] = i4;
  i17 = i4;
  i16 = 23;
 }
 if ((i16 | 0) == 23) {
  i16 = i17 | 0;
  HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
 }
 i16 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i16 | 0) != 0) {
   i11 = i16 | 0;
   i17 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i17 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i16);
    break;
   } else {
    HEAP32[i11 >> 2] = i17;
    break;
   }
  }
 } while (0);
 i16 = HEAP32[i10 >> 2] | 0;
 if ((i16 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i10 = i16 | 0;
 i17 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
 if ((i17 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i16);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i10 >> 2] = i17;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore17CSSCrossfadeValue5imageEPNS_13RenderElementERKNS_7IntSizeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, d14 = +0, d15 = +0, i16 = 0, i17 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i7;
 do {
  if ((HEAP32[i4 >> 2] | 0) >= 1) {
   if ((HEAP32[i4 + 4 >> 2] | 0) < 1) {
    break;
   }
   i9 = i3 | 0;
   i10 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i3 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 340 >> 2] | 0;
   i11 = __ZN7WebCore22CSSImageGeneratorValue22cachedImageForCSSValueEPNS_8CSSValueEPNS_20CachedResourceLoaderE(HEAP32[i2 + 48 >> 2] | 0, i10) | 0;
   i12 = __ZN7WebCore22CSSImageGeneratorValue22cachedImageForCSSValueEPNS_8CSSValueEPNS_20CachedResourceLoaderE(HEAP32[i2 + 52 >> 2] | 0, i10) | 0;
   if ((i11 | 0) == 0 | (i12 | 0) == 0) {
    i10 = __ZN7WebCore5Image9nullImageEv() | 0;
    HEAP32[i1 >> 2] = i10;
    if ((i10 | 0) == 0) {
     STACKTOP = i5;
     return;
    }
    i13 = i10 + 4 | 0;
    HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
    STACKTOP = i5;
    return;
   }
   i13 = __ZN7WebCore11CachedImage16imageForRendererEPKNS_12RenderObjectE(i11, i9) | 0;
   i11 = __ZN7WebCore11CachedImage16imageForRendererEPKNS_12RenderObjectE(i12, i9) | 0;
   if ((i13 | 0) == 0 | (i11 | 0) == 0) {
    i9 = __ZN7WebCore5Image9nullImageEv() | 0;
    HEAP32[i1 >> 2] = i9;
    if ((i9 | 0) == 0) {
     STACKTOP = i5;
     return;
    }
    i12 = i9 + 4 | 0;
    HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
    STACKTOP = i5;
    return;
   }
   d14 = +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEv(HEAP32[i2 + 56 >> 2] | 0);
   do {
    if (d14 < 3.4028234663852886e+38) {
     if (d14 <= -3.4028234663852886e+38) {
      d15 = -3.4028234663852886e+38;
      break;
     }
     d15 = d14;
    } else {
     d15 = 3.4028234663852886e+38;
    }
   } while (0);
   __ZN7WebCore17CSSCrossfadeValue9fixedSizeEPKNS_13RenderElementE(i8, i2, i3);
   i12 = HEAP32[i7 >> 2] | 0;
   i9 = HEAP32[i7 + 4 >> 2] | 0;
   i10 = __ZN3WTF10fastMallocEj(52) | 0;
   HEAP32[i6 >> 2] = i12;
   HEAP32[i6 + 4 >> 2] = i9;
   __ZN7WebCore23CrossfadeGeneratedImageC1EPNS_5ImageES2_fNS_7IntSizeERKS3_(i10, i13, i11, d15, i6, i4);
   i9 = i2 + 68 | 0;
   i12 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = i10;
   do {
    if ((i12 | 0) != 0) {
     i10 = i12 + 4 | 0;
     i16 = i10 | 0;
     i17 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
     if ((i17 | 0) != 0) {
      HEAP32[i16 >> 2] = i17;
      break;
     }
     i17 = i10 - 4 | 0;
     if ((i17 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 4 >> 2] & 7](i17);
    }
   } while (0);
   HEAP32[i1 >> 2] = HEAP32[i9 >> 2];
   HEAP32[i9 >> 2] = 0;
   STACKTOP = i5;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 STACKTOP = i5;
 return;
}
function __ZNK7WebCore17CSSCrossfadeValue5blendERKS0_d(i1, i2, i3, d4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, d13 = +0, d14 = +0, d15 = +0;
 i5 = i2 + 64 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = __ZN3WTF10fastMallocEj(20) | 0;
 __ZN7WebCore16StyleCachedImageC1EPNS_11CachedImageE(i7, i6);
 i6 = i2 + 60 | 0;
 i8 = HEAP32[i6 >> 2] | 0;
 i9 = __ZN3WTF10fastMallocEj(20) | 0;
 __ZN7WebCore16StyleCachedImageC1EPNS_11CachedImageE(i9, i8);
 i8 = __ZNK7WebCore19ResourceRequestBase3urlEv((HEAP32[i6 >> 2] | 0) + 48 | 0) | 0;
 i6 = i9;
 i10 = __ZN3WTF10fastMallocEj(24) | 0;
 __ZN7WebCore13CSSImageValueC1ERKN3WTF6StringEPNS_10StyleImageE(i10, i8, i6);
 i8 = __ZNK7WebCore19ResourceRequestBase3urlEv((HEAP32[i5 >> 2] | 0) + 48 | 0) | 0;
 i5 = i7;
 i11 = __ZN3WTF10fastMallocEj(24) | 0;
 __ZN7WebCore13CSSImageValueC1ERKN3WTF6StringEPNS_10StyleImageE(i11, i8, i5);
 i8 = __ZN3WTF10fastMallocEj(84) | 0;
 i12 = i8;
 __ZN7WebCore22CSSImageGeneratorValueC2ENS_8CSSValue9ClassTypeE(i8, 4);
 HEAP32[i8 + 48 >> 2] = i10;
 HEAP32[i8 + 52 >> 2] = i11;
 i11 = i8 + 56 | 0;
 HEAP32[i11 >> 2] = 0;
 __ZN7WebCore24CachedResourceHandleBaseC2Ev(i8 + 60 | 0);
 __ZN7WebCore24CachedResourceHandleBaseC2Ev(i8 + 64 | 0);
 HEAP32[i8 + 68 >> 2] = 0;
 HEAP32[i8 + 72 >> 2] = H_BASE + 48;
 HEAP32[i8 + 76 >> 2] = i12;
 HEAP8[i8 + 80 | 0] = 0;
 i8 = i3 + 56 | 0;
 d13 = +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEv(HEAP32[i8 >> 2] | 0);
 if ((__ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(HEAP32[i8 >> 2] | 0) | 0) << 16 >> 16 == 2) {
  d14 = d13 / +100;
 } else {
  d14 = d13;
 }
 i8 = i2 + 56 | 0;
 d13 = +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEv(HEAP32[i8 >> 2] | 0);
 if ((__ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(HEAP32[i8 >> 2] | 0) | 0) << 16 >> 16 == 2) {
  d15 = d13 / +100;
 } else {
  d15 = d13;
 }
 i8 = __ZN3WTF10fastMallocEj(16) | 0;
 __ZN7WebCore17CSSPrimitiveValueC1EdNS0_9UnitTypesE(i8, d14 + (d15 - d14) * d4, 1);
 i2 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = i8;
 do {
  if ((i2 | 0) != 0) {
   i8 = i2 | 0;
   i11 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i2 | 0);
    break;
   } else {
    HEAP32[i8 >> 2] = i11;
    break;
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = i12;
 do {
  if ((i9 | 0) != 0) {
   i12 = i9 + 4 | 0;
   i1 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   if ((i1 | 0) == 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 7](i6);
    break;
   } else {
    HEAP32[i12 >> 2] = i1;
    break;
   }
  }
 } while (0);
 if ((i7 | 0) == 0) {
  return;
 }
 i6 = i7 + 4 | 0;
 i9 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i9 | 0) == 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 7](i5);
  return;
 } else {
  HEAP32[i6 >> 2] = i9;
  return;
 }
}
function __ZN7WebCore17CSSCrossfadeValue13loadSubimagesEPNS_20CachedResourceLoaderE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 + 60 | 0;
 i7 = i4 | 0;
 i8 = i6 | 0;
 __ZN7WebCore24CachedResourceHandleBaseC2ERKS0_(i7, i8);
 i9 = i1 + 64 | 0;
 i10 = i5 | 0;
 i11 = i9 | 0;
 __ZN7WebCore24CachedResourceHandleBaseC2ERKS0_(i10, i11);
 __ZN7WebCore24CachedResourceHandleBase11setResourceEPNS_14CachedResourceE(i8, __ZN7WebCore22CSSImageGeneratorValue22cachedImageForCSSValueEPNS_8CSSValueEPNS_20CachedResourceLoaderE(HEAP32[i1 + 48 >> 2] | 0, i2) | 0);
 __ZN7WebCore24CachedResourceHandleBase11setResourceEPNS_14CachedResourceE(i11, __ZN7WebCore22CSSImageGeneratorValue22cachedImageForCSSValueEPNS_8CSSValueEPNS_20CachedResourceLoaderE(HEAP32[i1 + 52 >> 2] | 0, i2) | 0);
 i2 = i6 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 i11 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i6 | 0) != (i11 | 0)) {
   if ((i11 | 0) == 0) {
    i12 = i6;
   } else {
    __ZN7WebCore14CachedResource12removeClientEPNS_20CachedResourceClientE(i11, i1 + 72 | 0);
    i12 = HEAP32[i2 >> 2] | 0;
   }
   if ((i12 | 0) == 0) {
    break;
   }
   __ZN7WebCore14CachedResource9addClientEPNS_20CachedResourceClientE(i12, i1 + 72 | 0);
  }
 } while (0);
 i12 = i9 | 0;
 i9 = HEAP32[i12 >> 2] | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 if ((i9 | 0) == (i2 | 0)) {
  i13 = i1 + 80 | 0;
  HEAP8[i13] = 1;
  __ZN7WebCore24CachedResourceHandleBaseD2Ev(i10);
  __ZN7WebCore24CachedResourceHandleBaseD2Ev(i7);
  STACKTOP = i3;
  return;
 }
 if ((i2 | 0) == 0) {
  i14 = i9;
 } else {
  __ZN7WebCore14CachedResource12removeClientEPNS_20CachedResourceClientE(i2, i1 + 72 | 0);
  i14 = HEAP32[i12 >> 2] | 0;
 }
 if ((i14 | 0) == 0) {
  i13 = i1 + 80 | 0;
  HEAP8[i13] = 1;
  __ZN7WebCore24CachedResourceHandleBaseD2Ev(i10);
  __ZN7WebCore24CachedResourceHandleBaseD2Ev(i7);
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore14CachedResource9addClientEPNS_20CachedResourceClientE(i14, i1 + 72 | 0);
 i13 = i1 + 80 | 0;
 HEAP8[i13] = 1;
 __ZN7WebCore24CachedResourceHandleBaseD2Ev(i10);
 __ZN7WebCore24CachedResourceHandleBaseD2Ev(i7);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore17CSSCrossfadeValue9fixedSizeEPKNS_13RenderElementE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, d8 = +0, d9 = +0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i5;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 d8 = +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEv(HEAP32[i2 + 56 >> 2] | 0);
 do {
  if (d8 < 3.4028234663852886e+38) {
   if (d8 <= -3.4028234663852886e+38) {
    d9 = -3.4028234663852886e+38;
    break;
   }
   d9 = d8;
  } else {
   d9 = 3.4028234663852886e+38;
  }
 } while (0);
 d8 = +1 - d9;
 i10 = i3 | 0;
 i11 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i3 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 340 >> 2] | 0;
 i3 = __ZN7WebCore22CSSImageGeneratorValue22cachedImageForCSSValueEPNS_8CSSValueEPNS_20CachedResourceLoaderE(HEAP32[i2 + 48 >> 2] | 0, i11) | 0;
 i12 = __ZN7WebCore22CSSImageGeneratorValue22cachedImageForCSSValueEPNS_8CSSValueEPNS_20CachedResourceLoaderE(HEAP32[i2 + 52 >> 2] | 0, i11) | 0;
 if ((i3 | 0) == 0 | (i12 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 i11 = __ZN7WebCore11CachedImage16imageForRendererEPKNS_12RenderObjectE(i3, i10) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i11 >> 2] | 0) + 48 >> 2] & 7](i6, i11);
 i11 = __ZN7WebCore11CachedImage16imageForRendererEPKNS_12RenderObjectE(i12, i10) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i11 >> 2] | 0) + 48 >> 2] & 7](i7, i11);
 i11 = HEAP32[i5 >> 2] | 0;
 i10 = HEAP32[i7 >> 2] | 0;
 i12 = HEAP32[i6 + 4 >> 2] | 0;
 i6 = HEAP32[i7 + 4 >> 2] | 0;
 if ((i11 | 0) == (i10 | 0) & (i12 | 0) == (i6 | 0)) {
  i7 = i1;
  i3 = HEAP32[i5 + 4 >> 2] | 0;
  HEAP32[i7 >> 2] = HEAP32[i5 >> 2];
  HEAP32[i7 + 4 >> 2] = i3;
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i1 >> 2] = ~~(d8 * +(i11 | 0) + d9 * +(i10 | 0));
  HEAP32[i1 + 4 >> 2] = ~~(d8 * +(i12 | 0) + d9 * +(i6 | 0));
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore17CSSCrossfadeValueD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 + 60 | 0;
 i3 = i2 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) != 0) {
  __ZN7WebCore14CachedResource12removeClientEPNS_20CachedResourceClientE(i4, i1 + 72 | 0);
 }
 i4 = i1 + 64 | 0;
 i2 = i4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) != 0) {
  __ZN7WebCore14CachedResource12removeClientEPNS_20CachedResourceClientE(i5, i1 + 72 | 0);
 }
 i5 = HEAP32[i1 + 68 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 + 4 | 0;
   i6 = i4 | 0;
   i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i6 >> 2] = i7;
    break;
   }
   i7 = i4 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 7](i7);
  }
 } while (0);
 __ZN7WebCore24CachedResourceHandleBaseD2Ev(i2);
 __ZN7WebCore24CachedResourceHandleBaseD2Ev(i3);
 i3 = HEAP32[i1 + 56 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 | 0;
   i5 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i3 | 0);
    break;
   } else {
    HEAP32[i2 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 + 52 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 | 0;
   i2 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i3);
    break;
   } else {
    HEAP32[i5 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 + 48 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i8 = i1 | 0;
  __ZN7WebCore22CSSImageGeneratorValueD2Ev(i8);
  return;
 }
 i2 = i3 | 0;
 i5 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore8CSSValue7destroyEv(i3);
  i8 = i1 | 0;
  __ZN7WebCore22CSSImageGeneratorValueD2Ev(i8);
  return;
 } else {
  HEAP32[i2 >> 2] = i5;
  i8 = i1 | 0;
  __ZN7WebCore22CSSImageGeneratorValueD2Ev(i8);
  return;
 }
}
function __ZN7WebCore17CSSCrossfadeValueD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 + 60 | 0;
 i3 = i2 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) != 0) {
  __ZN7WebCore14CachedResource12removeClientEPNS_20CachedResourceClientE(i4, i1 + 72 | 0);
 }
 i4 = i1 + 64 | 0;
 i2 = i4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) != 0) {
  __ZN7WebCore14CachedResource12removeClientEPNS_20CachedResourceClientE(i5, i1 + 72 | 0);
 }
 i5 = HEAP32[i1 + 68 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 + 4 | 0;
   i6 = i4 | 0;
   i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i6 >> 2] = i7;
    break;
   }
   i7 = i4 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 7](i7);
  }
 } while (0);
 __ZN7WebCore24CachedResourceHandleBaseD2Ev(i2);
 __ZN7WebCore24CachedResourceHandleBaseD2Ev(i3);
 i3 = HEAP32[i1 + 56 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 | 0;
   i5 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i3 | 0);
    break;
   } else {
    HEAP32[i2 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 + 52 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 | 0;
   i2 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i3);
    break;
   } else {
    HEAP32[i5 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 + 48 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i8 = i1 | 0;
  __ZN7WebCore22CSSImageGeneratorValueD2Ev(i8);
  return;
 }
 i2 = i3 | 0;
 i5 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore8CSSValue7destroyEv(i3);
  i8 = i1 | 0;
  __ZN7WebCore22CSSImageGeneratorValueD2Ev(i8);
  return;
 } else {
  HEAP32[i2 >> 2] = i5;
  i8 = i1 | 0;
  __ZN7WebCore22CSSImageGeneratorValueD2Ev(i8);
  return;
 }
}
function __ZN7WebCore17CSSCrossfadeValue30CrossfadeSubimageObserverProxy12imageChangedEPNS_11CachedImageEPKNS_7IntRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 if ((HEAP8[i1 + 8 | 0] & 1) == 0) {
  return;
 }
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 i1 = HEAP32[i3 + 8 >> 2] | 0;
 i2 = HEAP32[i3 + 12 >> 2] | 0;
 i4 = i1 + (i2 << 3) | 0;
 if ((HEAP32[i3 + 20 >> 2] | 0) == 0) {
  return;
 }
 L7 : do {
  if ((i2 | 0) == 0) {
   i5 = i1;
  } else {
   i6 = i1;
   while (1) {
    i7 = HEAP32[i6 >> 2] | 0;
    if (!((i7 | 0) == (-1 | 0) | (i7 | 0) == 0)) {
     i5 = i6;
     break L7;
    }
    i6 = i6 + 8 | 0;
    if ((i6 | 0) == (i4 | 0)) {
     break;
    }
   }
   return;
  }
 } while (0);
 if ((i5 | 0) == (i4 | 0)) {
  return;
 }
 i1 = i3;
 i3 = i5;
 i2 = HEAP32[i5 >> 2] | 0;
 L16 : while (1) {
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i2 >> 2] | 0) + 584 >> 2] & 3](i2 | 0, i1, 0);
  i5 = i3 + 8 | 0;
  if ((i5 | 0) == (i4 | 0)) {
   i8 = 17;
   break;
  } else {
   i9 = i5;
  }
  while (1) {
   i10 = HEAP32[i9 >> 2] | 0;
   i5 = i10;
   if (!((i5 | 0) == (-1 | 0) | (i5 | 0) == 0)) {
    break;
   }
   i5 = i9 + 8 | 0;
   if ((i5 | 0) == (i4 | 0)) {
    i8 = 19;
    break L16;
   } else {
    i9 = i5;
   }
  }
  if ((i9 | 0) == (i4 | 0)) {
   i8 = 18;
   break;
  } else {
   i3 = i9;
   i2 = i10;
  }
 }
 if ((i8 | 0) == 17) {
  return;
 } else if ((i8 | 0) == 18) {
  return;
 } else if ((i8 | 0) == 19) {
  return;
 }
}
function __ZN7WebCore17CSSCrossfadeValue16crossfadeChangedERKNS_7IntRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 i3 = HEAP32[i1 + 12 >> 2] | 0;
 i4 = i2 + (i3 << 3) | 0;
 if ((HEAP32[i1 + 20 >> 2] | 0) == 0) {
  return;
 }
 L4 : do {
  if ((i3 | 0) == 0) {
   i5 = i2;
  } else {
   i6 = i2;
   while (1) {
    i7 = HEAP32[i6 >> 2] | 0;
    if (!((i7 | 0) == (-1 | 0) | (i7 | 0) == 0)) {
     i5 = i6;
     break L4;
    }
    i6 = i6 + 8 | 0;
    if ((i6 | 0) == (i4 | 0)) {
     break;
    }
   }
   return;
  }
 } while (0);
 if ((i5 | 0) == (i4 | 0)) {
  return;
 }
 i2 = i1;
 i1 = i5;
 L13 : while (1) {
  i5 = HEAP32[i1 >> 2] | 0;
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i5 >> 2] | 0) + 584 >> 2] & 3](i5 | 0, i2, 0);
  i5 = i1 + 8 | 0;
  if ((i5 | 0) == (i4 | 0)) {
   i8 = 15;
   break;
  } else {
   i9 = i5;
  }
  while (1) {
   i5 = HEAP32[i9 >> 2] | 0;
   if (!((i5 | 0) == (-1 | 0) | (i5 | 0) == 0)) {
    break;
   }
   i5 = i9 + 8 | 0;
   if ((i5 | 0) == (i4 | 0)) {
    i8 = 13;
    break L13;
   } else {
    i9 = i5;
   }
  }
  if ((i9 | 0) == (i4 | 0)) {
   i8 = 17;
   break;
  } else {
   i1 = i9;
  }
 }
 if ((i8 | 0) == 13) {
  return;
 } else if ((i8 | 0) == 15) {
  return;
 } else if ((i8 | 0) == 17) {
  return;
 }
}
function __ZN3WTF13StringBuilder6appendERKNS_6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i4 = HEAP32[i2 + 4 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 i5 = i1 | 0;
 do {
  if ((HEAP32[i5 >> 2] | 0) == 0) {
   if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
    break;
   }
   i6 = i2 | 0;
   HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
   i6 = i1 + 4 | 0;
   i7 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = i2;
   do {
    if ((i7 | 0) != 0) {
     i8 = i7 | 0;
     i9 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
     if ((i9 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i7);
      break;
     } else {
      HEAP32[i8 >> 2] = i9;
      break;
     }
    }
   } while (0);
   i7 = HEAP32[i3 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i10 = 0;
   } else {
    i10 = HEAP32[i7 + 4 >> 2] | 0;
   }
   HEAP32[i5 >> 2] = i10;
   HEAP8[i1 + 12 | 0] = (HEAP32[(HEAP32[i6 >> 2] | 0) + 16 >> 2] | 0) >>> 5 & 1;
   return;
  }
 } while (0);
 if ((HEAP32[i2 + 16 >> 2] & 32 | 0) == 0) {
  __ZN3WTF13StringBuilder6appendEPKtj(i1, HEAP32[i2 + 8 >> 2] | 0, i4);
  return;
 } else {
  __ZN3WTF13StringBuilder6appendEPKhj(i1, HEAP32[i2 + 8 >> 2] | 0, i4);
  return;
 }
}
function __ZNK7WebCore17CSSCrossfadeValue6equalsERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = HEAP32[i1 + 48 >> 2] | 0;
 i4 = (i3 | 0) == 0;
 i5 = HEAP32[i2 + 48 >> 2] | 0;
 i6 = (i5 | 0) == 0;
 do {
  if (i4 | i6) {
   if (i4 & i6) {
    break;
   } else {
    i7 = 0;
   }
   return i7 | 0;
  } else {
   if (__ZNK7WebCore8CSSValue6equalsERKS0_(i3, i5) | 0) {
    break;
   } else {
    i7 = 0;
   }
   return i7 | 0;
  }
 } while (0);
 i5 = HEAP32[i1 + 52 >> 2] | 0;
 i3 = (i5 | 0) == 0;
 i6 = HEAP32[i2 + 52 >> 2] | 0;
 i4 = (i6 | 0) == 0;
 do {
  if (i3 | i4) {
   if (i3 & i4) {
    break;
   } else {
    i7 = 0;
   }
   return i7 | 0;
  } else {
   if (__ZNK7WebCore8CSSValue6equalsERKS0_(i5, i6) | 0) {
    break;
   } else {
    i7 = 0;
   }
   return i7 | 0;
  }
 } while (0);
 i6 = HEAP32[i1 + 56 >> 2] | 0;
 i1 = (i6 | 0) == 0;
 i5 = HEAP32[i2 + 56 >> 2] | 0;
 i2 = (i5 | 0) == 0;
 if (i1 | i2) {
  i7 = i1 & i2;
  return i7 | 0;
 }
 i7 = __ZNK7WebCore17CSSPrimitiveValue6equalsERKS0_(i6, i5) | 0;
 return i7 | 0;
}
function __ZNK7WebCore17CSSCrossfadeValue15knownToBeOpaqueEPKNS_13RenderElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = HEAP32[i1 + 48 >> 2] | 0;
 i4 = HEAP32[i3 + 4 >> 2] | 0;
 do {
  if ((i4 & 516096 | 0) == 8192) {
   if (__ZNK7WebCore13CSSImageValue15knownToBeOpaqueEPKNS_13RenderElementE(i3, i2) | 0) {
    break;
   } else {
    i5 = 0;
   }
   return i5 | 0;
  } else {
   if (((i4 >>> 13 & 63) - 3 | 0) >>> 0 >= 5 >>> 0) {
    i5 = 0;
    return i5 | 0;
   }
   if (__ZNK7WebCore22CSSImageGeneratorValue15knownToBeOpaqueEPKNS_13RenderElementE(i3, i2) | 0) {
    break;
   } else {
    i5 = 0;
   }
   return i5 | 0;
  }
 } while (0);
 i3 = HEAP32[i1 + 52 >> 2] | 0;
 i1 = HEAP32[i3 + 4 >> 2] | 0;
 if ((i1 & 516096 | 0) == 8192) {
  i5 = __ZNK7WebCore13CSSImageValue15knownToBeOpaqueEPKNS_13RenderElementE(i3, i2) | 0;
  return i5 | 0;
 }
 if (((i1 >>> 13 & 63) - 3 | 0) >>> 0 >= 5 >>> 0) {
  i5 = 0;
  return i5 | 0;
 }
 i5 = __ZNK7WebCore22CSSImageGeneratorValue15knownToBeOpaqueEPKNS_13RenderElementE(i3, i2) | 0;
 return i5 | 0;
}
function __ZNK7WebCore17CSSCrossfadeValue16equalInputImagesERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = HEAP32[i1 + 48 >> 2] | 0;
 i4 = (i3 | 0) == 0;
 i5 = HEAP32[i2 + 48 >> 2] | 0;
 i6 = (i5 | 0) == 0;
 do {
  if (i4 | i6) {
   if (i4 & i6) {
    break;
   } else {
    i7 = 0;
   }
   return i7 | 0;
  } else {
   if (__ZNK7WebCore8CSSValue6equalsERKS0_(i3, i5) | 0) {
    break;
   } else {
    i7 = 0;
   }
   return i7 | 0;
  }
 } while (0);
 i5 = HEAP32[i1 + 52 >> 2] | 0;
 i1 = (i5 | 0) == 0;
 i3 = HEAP32[i2 + 52 >> 2] | 0;
 i2 = (i3 | 0) == 0;
 if (i1 | i2) {
  i7 = i1 & i2;
  return i7 | 0;
 }
 i7 = __ZNK7WebCore8CSSValue6equalsERKS0_(i5, i3) | 0;
 return i7 | 0;
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
function __ZNK7WebCore17CSSCrossfadeValue31hasFailedOrCanceledSubresourcesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 60 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   if ((HEAP8[i2 + 548 | 0] & 1) == 0) {
    i3 = 1;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 i2 = HEAP32[i1 + 64 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   if ((HEAP8[i2 + 548 | 0] & 1) == 0) {
    i3 = 1;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 i3 = 0;
 return i3 | 0;
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
function __ZNK7WebCore17CSSCrossfadeValue9isPendingEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if (__ZN7WebCore22CSSImageGeneratorValue17subimageIsPendingEPNS_8CSSValueE(HEAP32[i1 + 48 >> 2] | 0) | 0) {
  i2 = 1;
  return i2 | 0;
 }
 i2 = __ZN7WebCore22CSSImageGeneratorValue17subimageIsPendingEPNS_8CSSValueE(HEAP32[i1 + 52 >> 2] | 0) | 0;
 return i2 | 0;
}
function runPostSets() {
 HEAP32[H_BASE + 48 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_iii + 2;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 3](i2 | 0, i3 | 0, i4 | 0);
}
function __ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
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
 return FUNCTION_TABLE_iii[i1 & 3](i2 | 0, i3 | 0) | 0;
}
function __ZN7WebCore17CSSCrossfadeValue30CrossfadeSubimageObserverProxyD0Ev(i1) {
 i1 = i1 | 0;
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore20CachedResourceClient14notifyFinishedEPNS_14CachedResourceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
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
function __ZN7WebCore17CachedImageClient15willRenderImageEPNS_11CachedImageE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 0;
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
function __ZN7WebCore17CSSCrossfadeValue30CrossfadeSubimageObserverProxyD1Ev(i1) {
 i1 = i1 | 0;
 return;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 3](i2 | 0) | 0;
}
function __ZNK7WebCore17CachedImageClient18resourceClientTypeEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 7](i2 | 0);
}
function b3(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(3);
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
function b4() {
 abort(4);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore17CSSCrossfadeValue30CrossfadeSubimageObserverProxyD1Ev,b0,__ZN7WebCore17CSSCrossfadeValueD2Ev,b0,__ZN7WebCore17CSSCrossfadeValue30CrossfadeSubimageObserverProxyD0Ev,b0];
  var FUNCTION_TABLE_vii = [b1,b1,__ZN7WebCore20CachedResourceClient14notifyFinishedEPNS_14CachedResourceE,b1,__ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE,b1,b1,b1];
  var FUNCTION_TABLE_ii = [b2,b2,__ZNK7WebCore17CachedImageClient18resourceClientTypeEv,b2];
  var FUNCTION_TABLE_viii = [b3,b3,__ZN7WebCore17CSSCrossfadeValue30CrossfadeSubimageObserverProxy12imageChangedEPNS_11CachedImageEPKNS_7IntRectE,b3];
  var FUNCTION_TABLE_v = [b4,b4];
  var FUNCTION_TABLE_iii = [b5,b5,__ZN7WebCore17CachedImageClient15willRenderImageEPNS_11CachedImageE,b5];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore17CSSCrossfadeValue30CrossfadeSubimageObserverProxyD0Ev","__ZNK7WebCore17CSSCrossfadeValue16equalInputImagesERKS0_","__ZN7WebCore17CachedImageClient15willRenderImageEPNS_11CachedImageE","__ZN7WebCore17CSSCrossfadeValue9fixedSizeEPKNS_13RenderElementE","__ZNK7WebCore17CSSCrossfadeValue13customCSSTextEv","__ZN7WebCore20CachedResourceClient14notifyFinishedEPNS_14CachedResourceE","__ZN7WebCore17CSSCrossfadeValue5imageEPNS_13RenderElementERKNS_7IntSizeE","__ZNK7WebCore17CSSCrossfadeValue6equalsERKS0_","__ZNK7WebCore17CachedImageClient18resourceClientTypeEv","_memset","__ZNK7WebCore17CSSCrossfadeValue31hasFailedOrCanceledSubresourcesEv","_memcpy","__ZN7WebCore17CSSCrossfadeValueD2Ev","__ZN3WTF13StringBuilder6appendERKNS_6StringE","__ZN7WebCore17CSSCrossfadeValue30CrossfadeSubimageObserverProxy12imageChangedEPNS_11CachedImageEPKNS_7IntRectE","__ZNK7WebCore17CSSCrossfadeValue9isPendingEv","__ZN7WebCore17CSSCrossfadeValue30CrossfadeSubimageObserverProxyD1Ev","__ZN7WebCore17CSSCrossfadeValue16crossfadeChangedERKNS_7IntRectE","__ZNK7WebCore17CSSCrossfadeValue15knownToBeOpaqueEPKNS_13RenderElementE","__ZNK7WebCore17CSSCrossfadeValue5blendERKS0_d","__ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE","__ZN7WebCore17CSSCrossfadeValue13loadSubimagesEPNS_20CachedResourceLoaderE"]

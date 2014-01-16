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
H_BASE = parentModule["_malloc"](120 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 120;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore23CrossfadeGeneratedImageC1EPNS_5ImageES2_fNS_7IntSizeERKS3_;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_viiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8) {
  try {
    Module["dynCall_viiiiiiii"](index,a1,a2,a3,a4,a5,a6,a7,a8);
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
function invoke_viiifii(index,a1,a2,a3,a4,a5,a6) {
  try {
    Module["dynCall_viiifii"](index,a1,a2,a3,a4,a5,a6);
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
function invoke_viiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9) {
  try {
    Module["dynCall_viiiiiiiii"](index,a1,a2,a3,a4,a5,a6,a7,a8,a9);
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
  var __ZTVN7WebCore23CrossfadeGeneratedImageE=(H_BASE+8)|0;
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
  var invoke_viiiiiiii=env.invoke_viiiiiiii;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_viiifii=env.invoke_viiifii;
  var invoke_ii=env.invoke_ii;
  var invoke_v=env.invoke_v;
  var invoke_viiiiiiiii=env.invoke_viiiiiiiii;
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
function __ZN7WebCore23CrossfadeGeneratedImage4drawEPNS_15GraphicsContextERKNS_9FloatRectES5_NS_10ColorSpaceENS_17CompositeOperatorENS_9BlendModeENS_27ImageOrientationDescriptionE(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 var d9 = +0, d10 = +0, d11 = +0, i12 = 0, d13 = +0, d14 = +0, i15 = 0, d16 = +0, d17 = +0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i8;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i8 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i8 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
 i5 = i7 | 0;
 __ZN7WebCore15GraphicsContext4saveEv(i2);
 __ZN7WebCore15GraphicsContext21setCompositeOperationENS_17CompositeOperatorENS_9BlendModeE(i2, i6, 0);
 __ZN7WebCore15GraphicsContext4clipERKNS_9FloatRectE(i2, i3);
 __ZN7WebCore15GraphicsContext9translateEff(i2, +HEAPF32[i3 >> 2], +HEAPF32[i3 + 4 >> 2]);
 i6 = i3 + 8 | 0;
 d9 = +HEAPF32[i6 >> 2];
 d10 = +HEAPF32[i6 + 4 >> 2];
 i6 = i4 + 8 | 0;
 d11 = +HEAPF32[i6 >> 2];
 if (!(d9 != d11 | d10 != +HEAPF32[i6 + 4 >> 2])) {
  i12 = i4 | 0;
  d13 = +HEAPF32[i12 >> 2];
  d14 = +-0 - d13;
  i15 = i4 + 4 | 0;
  d16 = +HEAPF32[i15 >> 2];
  d17 = +-0 - d16;
  __ZN7WebCore15GraphicsContext9translateEff(i2, d14, d17);
  __ZN7WebCore23CrossfadeGeneratedImage13drawCrossfadeEPNS_15GraphicsContextE(i1, i2);
  __ZN7WebCore15GraphicsContext7restoreEv(i2);
  STACKTOP = i7;
  return;
 }
 d10 = +HEAPF32[i3 + 12 >> 2] / +HEAPF32[i4 + 12 >> 2];
 HEAPF32[i5 >> 2] = d9 / d11;
 HEAPF32[i5 + 4 >> 2] = d10;
 __ZN7WebCore15GraphicsContext5scaleERKNS_9FloatSizeE(i2, i5);
 i12 = i4 | 0;
 d13 = +HEAPF32[i12 >> 2];
 d14 = +-0 - d13;
 i15 = i4 + 4 | 0;
 d16 = +HEAPF32[i15 >> 2];
 d17 = +-0 - d16;
 __ZN7WebCore15GraphicsContext9translateEff(i2, d14, d17);
 __ZN7WebCore23CrossfadeGeneratedImage13drawCrossfadeEPNS_15GraphicsContextE(i1, i2);
 __ZN7WebCore15GraphicsContext7restoreEv(i2);
 STACKTOP = i7;
 return;
}
function __ZN7WebCoreL21drawCrossfadeSubimageEPNS_15GraphicsContextEPNS_5ImageENS_17CompositeOperatorEfNS_7IntSizeE(i1, i2, i3, d4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i7 + 16 | 0;
 i11 = i7 + 24 | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 48 >> 2] & 31](i8, i2);
 i12 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 31](i2) | 0;
 __ZN7WebCore15GraphicsContext4saveEv(i1);
 __ZN7WebCore15GraphicsContext21setCompositeOperationENS_17CompositeOperatorENS_9BlendModeE(i1, i3, 0);
 if (i12) {
  __ZN7WebCore15GraphicsContext22beginTransparencyLayerEf(i1, d4);
 } else {
  __ZN7WebCore15GraphicsContext8setAlphaEf(i1, d4);
 }
 i3 = HEAP32[i8 >> 2] | 0;
 i13 = HEAP32[i8 + 4 >> 2] | 0;
 if (!((i3 | 0) == (i5 | 0) & (i13 | 0) == (i6 | 0))) {
  HEAPF32[i9 >> 2] = +(i5 | 0) / +(i3 | 0);
  HEAPF32[i9 + 4 >> 2] = +(i6 | 0) / +(i13 | 0);
  __ZN7WebCore15GraphicsContext5scaleERKNS_9FloatSizeE(i1, i9);
 }
 HEAP32[i10 >> 2] = 0;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i11 + 4 >> 2] = 1;
 __ZN7WebCore15GraphicsContext9drawImageEPNS_5ImageENS_10ColorSpaceERKNS_8IntPointENS_17CompositeOperatorENS_27ImageOrientationDescriptionE(i1, i2, 0, i10, 2, i11);
 if (!i12) {
  __ZN7WebCore15GraphicsContext7restoreEv(i1);
  STACKTOP = i7;
  return;
 }
 __ZN7WebCore15GraphicsContext20endTransparencyLayerEv(i1);
 __ZN7WebCore15GraphicsContext7restoreEv(i1);
 STACKTOP = i7;
 return;
}
function __ZN7WebCore23CrossfadeGeneratedImage11drawPatternEPNS_15GraphicsContextERKNS_9FloatRectERKNS_15AffineTransformERKNS_10FloatPointENS_10ColorSpaceENS_17CompositeOperatorES5_NS_9BlendModeE(i1, i2, i3, i4, i5, i6, i7, i8, i9) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 var i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i10 = i9 | 0;
 i11 = i9 + 8 | 0;
 i12 = i1 + 44 | 0;
 i13 = HEAP32[i12 + 4 >> 2] | 0;
 HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
 HEAP32[i11 + 4 >> 2] = i13;
 i13 = __ZNK7WebCore15GraphicsContext20isAcceleratedContextEv(i2) | 0;
 HEAP8[i10] = 0;
 i12 = __ZN3WTF10fastMallocEj(144) | 0;
 i14 = i12;
 __ZN7WebCore11ImageBufferC1ERKNS_7IntSizeEfNS_10ColorSpaceENS_13RenderingModeERb(i14, i11, +1, 0, i13 ? 2 : 0, i10);
 if ((HEAP8[i10] & 1) == 0) {
  if ((i12 | 0) == 0) {
   STACKTOP = i9;
   return;
  }
  __ZN7WebCore11ImageBufferD1Ev(i14);
  __ZN3WTF8fastFreeEPv(i12);
  STACKTOP = i9;
  return;
 } else {
  if ((i12 | 0) == 0) {
   STACKTOP = i9;
   return;
  }
  __ZN7WebCore23CrossfadeGeneratedImage13drawCrossfadeEPNS_15GraphicsContextE(i1, __ZNK7WebCore11ImageBuffer7contextEv(i14) | 0);
  __ZN7WebCore11ImageBuffer11drawPatternEPNS_15GraphicsContextERKNS_9FloatRectERKNS_15AffineTransformERKNS_10FloatPointENS_10ColorSpaceENS_17CompositeOperatorES5_(i14, i2, i3, i4, i5, i6, i7, i8);
  __ZN7WebCore11ImageBufferD1Ev(i14);
  __ZN3WTF8fastFreeEPv(i12);
  STACKTOP = i9;
  return;
 }
}
function __ZN7WebCore23CrossfadeGeneratedImage13drawCrossfadeEPNS_15GraphicsContextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i4 | 0;
 i6 = i1 + 32 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) == (__ZN7WebCore5Image9nullImageEv() | 0)) {
  STACKTOP = i3;
  return;
 }
 i7 = i1 + 36 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 if ((i8 | 0) == (__ZN7WebCore5Image9nullImageEv() | 0)) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore15GraphicsContext4saveEv(i2);
 HEAP32[i5 >> 2] = 0;
 HEAP32[i5 + 4 >> 2] = 0;
 i5 = i4 + 8 | 0;
 i8 = i1 + 44 | 0;
 i9 = HEAP32[i8 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i5 + 4 >> 2] = i9;
 __ZN7WebCore15GraphicsContext4clipERKNS_7IntRectE(i2, i4);
 __ZN7WebCore15GraphicsContext22beginTransparencyLayerEf(i2, +1);
 i4 = i1 + 40 | 0;
 __ZN7WebCoreL21drawCrossfadeSubimageEPNS_15GraphicsContextEPNS_5ImageENS_17CompositeOperatorEfNS_7IntSizeE(i2, HEAP32[i6 >> 2] | 0, 2, +1 - +HEAPF32[i4 >> 2], HEAP32[i8 >> 2] | 0, HEAP32[i8 + 4 >> 2] | 0);
 __ZN7WebCoreL21drawCrossfadeSubimageEPNS_15GraphicsContextEPNS_5ImageENS_17CompositeOperatorEfNS_7IntSizeE(i2, HEAP32[i7 >> 2] | 0, 12, +HEAPF32[i4 >> 2], HEAP32[i8 >> 2] | 0, HEAP32[i8 + 4 >> 2] | 0);
 __ZN7WebCore15GraphicsContext20endTransparencyLayerEv(i2);
 __ZN7WebCore15GraphicsContext7restoreEv(i2);
 STACKTOP = i3;
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_viiiiiiiii + 2;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_viiiiiiii + 2;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_vii + 2;
}
function __ZN7WebCore23CrossfadeGeneratedImageC2EPNS_5ImageES2_fNS_7IntSizeERKS3_(i1, i2, i3, d4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0;
 i6 = STACKTOP;
 i7 = i5;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i5 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i5 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
 __ZN7WebCore5ImageC2EPNS_13ImageObserverE(i1 | 0, 0);
 HEAP32[i1 + 24 >> 2] = 0;
 HEAP32[i1 + 28 >> 2] = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i1 + 32 >> 2] = i2;
 HEAP32[i1 + 36 >> 2] = i3;
 HEAPF32[i1 + 40 >> 2] = d4;
 i3 = i5;
 i5 = i1 + 44 | 0;
 i1 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i5 + 4 >> 2] = i1;
 STACKTOP = i6;
 return;
}
function __ZN7WebCore23CrossfadeGeneratedImageC1EPNS_5ImageES2_fNS_7IntSizeERKS3_(i1, i2, i3, d4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0;
 i6 = STACKTOP;
 i7 = i5;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i5 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i5 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
 __ZN7WebCore5ImageC2EPNS_13ImageObserverE(i1 | 0, 0);
 HEAP32[i1 + 24 >> 2] = 0;
 HEAP32[i1 + 28 >> 2] = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i1 + 32 >> 2] = i2;
 HEAP32[i1 + 36 >> 2] = i3;
 HEAPF32[i1 + 40 >> 2] = d4;
 i3 = i5;
 i5 = i1 + 44 | 0;
 i1 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i5 + 4 >> 2] = i1;
 STACKTOP = i6;
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
function dynCall_viiiiiiiii(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10) {
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
 FUNCTION_TABLE_viiiiiiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0, i9 | 0, i10 | 0);
}
function viiii___ZN7WebCore14GeneratedImage26computeIntrinsicDimensionsERNS_6LengthES2_RNS_9FloatSizeE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore14GeneratedImage26computeIntrinsicDimensionsERNS_6LengthES2_RNS_9FloatSizeE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function dynCall_viiiiiiii(i1, i2, i3, i4, i5, i6, i7, i8, i9) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 FUNCTION_TABLE_viiiiiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0, i9 | 0);
}
function __ZNK7WebCore23CrossfadeGeneratedImage4sizeEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i2 + 44 | 0;
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
function dynCall_viiifii(i1, i2, i3, i4, d5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 i6 = i6 | 0;
 i7 = i7 | 0;
 FUNCTION_TABLE_viiifii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, +d5, i6 | 0, i7 | 0);
}
function b6(i1, i2, i3, i4, i5, i6, i7, i8, i9) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 abort(6);
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function __ZN7WebCore5Image26nativeImageForCurrentFrameEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
 __ZN3WTF12refIfNotNullI14_cairo_surfaceEEvPT_(0);
 return;
}
function b0(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 abort(0);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function __ZN7WebCore23CrossfadeGeneratedImageD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore5ImageD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZNK7WebCore5Image10solidColorEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP8[i1 + 4 | 0] = 0;
 return;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 7](i2 | 0, i3 | 0) | 0;
}
function b3(i1, i2, i3, d4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(3);
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
function __ZN7WebCore5Image26orientationForCurrentFrameEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 1;
 return;
}
function __ZN7WebCore23CrossfadeGeneratedImage16setContainerSizeERKNS_7IntSizeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
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
 FUNCTION_TABLE_vii[i1 & 31](i2 | 0, i3 | 0);
}
function __ZNK7WebCore5Image17filenameExtensionEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZN7WebCore23CrossfadeGeneratedImageD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore5ImageD2Ev(i1 | 0);
 return;
}
function __ZN7WebCore14GeneratedImage18destroyDecodedDataEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 31](i2 | 0) | 0;
}
function __ZNK7WebCore5Image10getHotSpotERNS_8IntPointE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 0;
}
function __ZNK7WebCore23CrossfadeGeneratedImage17usesContainerSizeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore23CrossfadeGeneratedImage17hasRelativeHeightEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore14GeneratedImage27currentFrameKnownToBeOpaqueEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore23CrossfadeGeneratedImage16hasRelativeWidthEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b8(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(8);
}
function __ZNK7WebCore14GeneratedImage23hasSingleSecurityOriginEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 15](i2 | 0);
}
function __ZN7WebCore5Image14startAnimationEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore5Image11dataChangedEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 0;
}
function __ZN7WebCore5Image21mayFillWithSolidColorEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore5Image18isPDFDocumentImageEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore5Image13isBitmapImageEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore5Image14resetAnimationEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore5Image10isSVGImageEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore5Image13stopAnimationEv(i1) {
 i1 = i1 | 0;
 return;
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
function b4(i1) {
 i1 = i1 | 0;
 abort(4);
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
  var FUNCTION_TABLE_viiiiiiii = [b0,b0,__ZN7WebCore23CrossfadeGeneratedImage4drawEPNS_15GraphicsContextERKNS_9FloatRectES5_NS_10ColorSpaceENS_17CompositeOperatorENS_9BlendModeENS_27ImageOrientationDescriptionE,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore5Image13stopAnimationEv,b1,__ZN7WebCore5Image14resetAnimationEv,b1,__ZN7WebCore23CrossfadeGeneratedImageD1Ev,b1,__ZN7WebCore23CrossfadeGeneratedImageD0Ev,b1,b1,b1,b1,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,__ZNK7WebCore5Image10solidColorEv,b2,__ZN7WebCore23CrossfadeGeneratedImage16setContainerSizeERKNS_7IntSizeE,b2,__ZNK7WebCore5Image17filenameExtensionEv,b2,__ZN7WebCore5Image26orientationForCurrentFrameEv,b2,__ZN7WebCore14GeneratedImage18destroyDecodedDataEb,b2,__ZNK7WebCore23CrossfadeGeneratedImage4sizeEv,b2,__ZN7WebCore5Image26nativeImageForCurrentFrameEv,b2,__ZN7WebCore5Image14startAnimationEb,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2
  ,b2,b2,b2];
  var FUNCTION_TABLE_viiifii = [b3,b3,__ZN7WebCore23CrossfadeGeneratedImageC2EPNS_5ImageES2_fNS_7IntSizeERKS3_,b3];
  var FUNCTION_TABLE_ii = [b4,b4,__ZNK7WebCore23CrossfadeGeneratedImage17hasRelativeHeightEv,b4,__ZNK7WebCore14GeneratedImage23hasSingleSecurityOriginEv,b4,__ZN7WebCore5Image21mayFillWithSolidColorEv,b4,__ZN7WebCore14GeneratedImage27currentFrameKnownToBeOpaqueEv,b4,__ZNK7WebCore23CrossfadeGeneratedImage17usesContainerSizeEv,b4,__ZNK7WebCore5Image18isPDFDocumentImageEv,b4,__ZNK7WebCore5Image13isBitmapImageEv,b4,__ZNK7WebCore5Image10isSVGImageEv,b4,__ZNK7WebCore23CrossfadeGeneratedImage16hasRelativeWidthEv,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4
  ,b4,b4,b4];
  var FUNCTION_TABLE_v = [b5,b5];
  var FUNCTION_TABLE_viiiiiiiii = [b6,b6,__ZN7WebCore23CrossfadeGeneratedImage11drawPatternEPNS_15GraphicsContextERKNS_9FloatRectERKNS_15AffineTransformERKNS_10FloatPointENS_10ColorSpaceENS_17CompositeOperatorES5_NS_9BlendModeE,b6];
  var FUNCTION_TABLE_iii = [b7,b7,__ZN7WebCore5Image11dataChangedEb,b7,__ZNK7WebCore5Image10getHotSpotERNS_8IntPointE,b7,b7,b7];
  var FUNCTION_TABLE_viiii = [b8,b8,viiii___ZN7WebCore14GeneratedImage26computeIntrinsicDimensionsERNS_6LengthES2_RNS_9FloatSizeE__wrapper,b8];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiiiiii: dynCall_viiiiiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_viiifii: dynCall_viiifii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_viiiiiiiii: dynCall_viiiiiiiii, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiiiiii": invoke_viiiiiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_viiifii": invoke_viiifii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_viiiiiiiii": invoke_viiiiiiiii, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiiiiii = Module["dynCall_viiiiiiii"] = asm["dynCall_viiiiiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_viiifii = Module["dynCall_viiifii"] = asm["dynCall_viiifii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_viiiiiiiii = Module["dynCall_viiiiiiiii"] = asm["dynCall_viiiiiiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore5Image13stopAnimationEv","_strlen","__ZNK7WebCore23CrossfadeGeneratedImage17hasRelativeHeightEv","__ZNK7WebCore5Image10solidColorEv","__ZNK7WebCore14GeneratedImage23hasSingleSecurityOriginEv","__ZN7WebCoreL21drawCrossfadeSubimageEPNS_15GraphicsContextEPNS_5ImageENS_17CompositeOperatorEfNS_7IntSizeE","__ZN7WebCore23CrossfadeGeneratedImage16setContainerSizeERKNS_7IntSizeE","__ZN7WebCore5Image21mayFillWithSolidColorEv","__ZN7WebCore14GeneratedImage27currentFrameKnownToBeOpaqueEv","__ZNK7WebCore5Image17filenameExtensionEv","__ZN7WebCore5Image14resetAnimationEv","_memset","__ZN7WebCore23CrossfadeGeneratedImage11drawPatternEPNS_15GraphicsContextERKNS_9FloatRectERKNS_15AffineTransformERKNS_10FloatPointENS_10ColorSpaceENS_17CompositeOperatorES5_NS_9BlendModeE","_memcpy","__ZN7WebCore5Image11dataChangedEb","__ZNK7WebCore23CrossfadeGeneratedImage17usesContainerSizeEv","__ZN7WebCore23CrossfadeGeneratedImageD1Ev","__ZN7WebCore5Image26orientationForCurrentFrameEv","__ZN7WebCore23CrossfadeGeneratedImageC2EPNS_5ImageES2_fNS_7IntSizeERKS3_","__ZN7WebCore14GeneratedImage18destroyDecodedDataEb","__ZNK7WebCore5Image10getHotSpotERNS_8IntPointE","__ZNK7WebCore23CrossfadeGeneratedImage4sizeEv","__ZN7WebCore5Image26nativeImageForCurrentFrameEv","__ZNK7WebCore5Image18isPDFDocumentImageEv","__ZN7WebCore23CrossfadeGeneratedImage4drawEPNS_15GraphicsContextERKNS_9FloatRectES5_NS_10ColorSpaceENS_17CompositeOperatorENS_9BlendModeENS_27ImageOrientationDescriptionE","__ZNK7WebCore5Image13isBitmapImageEv","__ZN7WebCore23CrossfadeGeneratedImage13drawCrossfadeEPNS_15GraphicsContextE","__ZN7WebCore23CrossfadeGeneratedImageD0Ev","__ZN7WebCore5Image14startAnimationEb","__ZNK7WebCore5Image10isSVGImageEv","__ZNK7WebCore23CrossfadeGeneratedImage16hasRelativeWidthEv"]

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
H_BASE = parentModule["_malloc"](136 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 136;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore5ImageD1Ev;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_v(index) {
  try {
    Module["dynCall_v"](index);
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
function invoke_viiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8) {
  try {
    Module["dynCall_viiiiiiii"](index,a1,a2,a3,a4,a5,a6,a7,a8);
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
  var __ZTVN7WebCore5ImageE=(H_BASE+8)|0;
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
  var invoke_v=env.invoke_v;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_viiiiiiii=env.invoke_viiiiiiii;
  var invoke_viiiiiiiii=env.invoke_viiiiiiiii;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _malloc=env._malloc;
  var ___cxa_pure_virtual=env.___cxa_pure_virtual;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _fmod=env._fmod;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore5Image9drawTiledEPNS_15GraphicsContextERKNS_9FloatRectERKNS_10FloatPointERKNS_9FloatSizeENS_10ColorSpaceENS_17CompositeOperatorENS_9BlendModeE(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 var i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, d29 = +0, d30 = +0, d31 = +0, d32 = +0, d33 = +0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i10 = i9 | 0;
 i11 = i9 + 8 | 0;
 i12 = i11;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i15 = i14 | 0;
 i16 = i14;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i18 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i19 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i20 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i21 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i22 = i21 | 0;
 i23 = i21;
 i24 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i25 = i24;
 i26 = i1;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i26 >> 2] | 0) + 96 >> 2] & 31](i1) | 0) {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 100 >> 2] & 15](i10, i1);
  i27 = i10 | 0;
  if ((HEAP32[i27 >> 2] | 0) >>> 0 < 16777216 >>> 0) {
   STACKTOP = i9;
   return;
  }
  i28 = __ZNK7WebCore15GraphicsContext18compositeOperationEv(i2) | 0;
  __ZN7WebCore15GraphicsContext21setCompositeOperationENS_17CompositeOperatorENS_9BlendModeE(i2, (HEAP32[i27 >> 2] & -16777216 | 0) == -16777216 & (i7 | 0) == 2 ? 1 : i7, 0);
  __ZN7WebCore15GraphicsContext8fillRectERKNS_9FloatRectERKNS_5ColorENS_10ColorSpaceE(i2, i3, i10, i6);
  __ZN7WebCore15GraphicsContext21setCompositeOperationENS_17CompositeOperatorENS_9BlendModeE(i2, i28, 0);
  STACKTOP = i9;
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 48 >> 2] & 15](i13, i1);
 __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i12, i13);
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i26 >> 2] | 0) + 36 >> 2] & 31](i1) | 0) {
  HEAPF32[i11 >> 2] = +HEAPF32[i5 >> 2];
 }
 i13 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i26 >> 2] | 0) + 40 >> 2] & 31](i1) | 0;
 d29 = +HEAPF32[i5 + 4 >> 2];
 i26 = i12 + 4 | 0;
 if (i13) {
  HEAPF32[i26 >> 2] = d29;
  d30 = d29;
 } else {
  d30 = +HEAPF32[i26 >> 2];
 }
 d31 = +HEAPF32[i5 >> 2];
 d32 = d31 / +HEAPF32[i11 >> 2];
 d33 = d29 / d30;
 i26 = i14 | 0;
 HEAP32[i26 >> 2] = 0;
 HEAP32[i26 + 4 >> 2] = 0;
 i26 = i1 + 16 | 0;
 d30 = d31 + +HEAPF32[i26 >> 2];
 d31 = d29 + +HEAPF32[i26 + 4 >> 2];
 i26 = i3 | 0;
 d29 = +HEAPF32[i26 >> 2];
 i13 = i14;
 HEAPF32[i13 >> 2] = d29 + +_fmod(+(+_fmod(+(+-0 - +HEAPF32[i4 >> 2]), +d30) - d30), +d30);
 i12 = i3 + 4 | 0;
 d30 = +HEAPF32[i12 >> 2];
 i28 = i16 + 4 | 0;
 HEAPF32[i28 >> 2] = d30 + +_fmod(+(+_fmod(+(+-0 - +HEAPF32[i4 + 4 >> 2]), +d31) - d31), +d31);
 i4 = i14 + 8 | 0;
 i14 = i5;
 i5 = HEAP32[i14 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i14 >> 2];
 HEAP32[i4 + 4 >> 2] = i5;
 do {
  if (__ZNK7WebCore9FloatRect8containsERKS0_(i16, i3) | 0) {
   if (__ZNK7WebCore15GraphicsContext17drawLuminanceMaskEv(i2) | 0) {
    break;
   }
   _memset(i17 | 0, 0, 12) | 0;
   HEAPF32[i17 >> 2] = (+HEAPF32[i26 >> 2] - +HEAPF32[i13 >> 2]) / d32;
   HEAPF32[i17 + 4 >> 2] = (+HEAPF32[i12 >> 2] - +HEAPF32[i28 >> 2]) / d33;
   HEAPF32[i17 + 8 >> 2] = +HEAPF32[i3 + 8 >> 2] / d32;
   HEAPF32[i17 + 12 >> 2] = +HEAPF32[i3 + 12 >> 2] / d33;
   i5 = HEAP32[(HEAP32[i1 >> 2] | 0) + 92 >> 2] | 0;
   HEAP32[i18 >> 2] = 0;
   HEAP32[i18 + 4 >> 2] = 1;
   FUNCTION_TABLE_viiiiiiii[i5 & 3](i1, i2, i3, i17, i6, i7, i8, i18);
   STACKTOP = i9;
   return;
  }
 } while (0);
 __ZN7WebCore15AffineTransformC1Ev(i20);
 i18 = i19;
 i17 = __ZN7WebCore15AffineTransform15scaleNonUniformEdd(i20, d32, d33) | 0;
 HEAP32[i18 >> 2] = HEAP32[i17 >> 2];
 HEAP32[i18 + 4 >> 2] = HEAP32[i17 + 4 >> 2];
 HEAP32[i18 + 8 >> 2] = HEAP32[i17 + 8 >> 2];
 HEAP32[i18 + 12 >> 2] = HEAP32[i17 + 12 >> 2];
 HEAP32[i18 + 16 >> 2] = HEAP32[i17 + 16 >> 2];
 HEAP32[i18 + 20 >> 2] = HEAP32[i17 + 20 >> 2];
 HEAP32[i18 + 24 >> 2] = HEAP32[i17 + 24 >> 2];
 HEAP32[i18 + 28 >> 2] = HEAP32[i17 + 28 >> 2];
 HEAP32[i18 + 32 >> 2] = HEAP32[i17 + 32 >> 2];
 HEAP32[i18 + 36 >> 2] = HEAP32[i17 + 36 >> 2];
 HEAP32[i18 + 40 >> 2] = HEAP32[i17 + 40 >> 2];
 HEAP32[i18 + 44 >> 2] = HEAP32[i17 + 44 >> 2];
 HEAP32[i22 >> 2] = 0;
 HEAP32[i22 + 4 >> 2] = 0;
 i22 = i21 + 8 | 0;
 i21 = HEAP32[i11 + 4 >> 2] | 0;
 HEAP32[i22 >> 2] = HEAP32[i11 >> 2];
 HEAP32[i22 + 4 >> 2] = i21;
 i21 = HEAP32[(HEAP32[i1 >> 2] | 0) + 88 >> 2] | 0;
 i22 = HEAP32[i15 + 4 >> 2] | 0;
 HEAP32[i24 >> 2] = HEAP32[i15 >> 2];
 HEAP32[i24 + 4 >> 2] = i22;
 FUNCTION_TABLE_viiiiiiiii[i21 & 3](i1, i2, i23, i19, i25, i6, i7, i3, i8);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 68 >> 2] & 15](i1, 1);
 STACKTOP = i9;
 return;
}
function __ZN7WebCore5Image9drawTiledEPNS_15GraphicsContextERKNS_9FloatRectES5_RKNS_9FloatSizeENS0_8TileRuleES9_NS_10ColorSpaceENS_17CompositeOperatorE(i1, i2, i3, i4, i5, i6, i7, i8, i9) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 var i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, d17 = +0, d18 = +0, d19 = +0, d20 = +0, d21 = +0, d22 = +0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 112 | 0;
 i11 = i10 | 0;
 i12 = i10 + 8 | 0;
 i13 = i10 + 56 | 0;
 i14 = i10 + 104 | 0;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 96 >> 2] & 31](i1) | 0) {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 100 >> 2] & 15](i11, i1);
  i15 = i11 | 0;
  if ((HEAP32[i15 >> 2] | 0) >>> 0 < 16777216 >>> 0) {
   STACKTOP = i10;
   return;
  }
  i16 = __ZNK7WebCore15GraphicsContext18compositeOperationEv(i2) | 0;
  __ZN7WebCore15GraphicsContext21setCompositeOperationENS_17CompositeOperatorENS_9BlendModeE(i2, (HEAP32[i15 >> 2] & -16777216 | 0) == -16777216 & (i9 | 0) == 2 ? 1 : i9, 0);
  __ZN7WebCore15GraphicsContext8fillRectERKNS_9FloatRectERKNS_5ColorENS_10ColorSpaceE(i2, i3, i11, i8);
  __ZN7WebCore15GraphicsContext21setCompositeOperationENS_17CompositeOperatorENS_9BlendModeE(i2, i16, 0);
  STACKTOP = i10;
  return;
 }
 __ZN7WebCore15AffineTransformC1Ev(i13);
 i16 = i5 | 0;
 i11 = i5 + 4 | 0;
 i5 = i12;
 i15 = __ZN7WebCore15AffineTransform15scaleNonUniformEdd(i13, +HEAPF32[i16 >> 2], +HEAPF32[i11 >> 2]) | 0;
 HEAP32[i5 >> 2] = HEAP32[i15 >> 2];
 HEAP32[i5 + 4 >> 2] = HEAP32[i15 + 4 >> 2];
 HEAP32[i5 + 8 >> 2] = HEAP32[i15 + 8 >> 2];
 HEAP32[i5 + 12 >> 2] = HEAP32[i15 + 12 >> 2];
 HEAP32[i5 + 16 >> 2] = HEAP32[i15 + 16 >> 2];
 HEAP32[i5 + 20 >> 2] = HEAP32[i15 + 20 >> 2];
 HEAP32[i5 + 24 >> 2] = HEAP32[i15 + 24 >> 2];
 HEAP32[i5 + 28 >> 2] = HEAP32[i15 + 28 >> 2];
 HEAP32[i5 + 32 >> 2] = HEAP32[i15 + 32 >> 2];
 HEAP32[i5 + 36 >> 2] = HEAP32[i15 + 36 >> 2];
 HEAP32[i5 + 40 >> 2] = HEAP32[i15 + 40 >> 2];
 HEAP32[i5 + 44 >> 2] = HEAP32[i15 + 44 >> 2];
 d17 = +HEAPF32[i16 >> 2];
 d18 = d17 * +HEAPF32[i4 >> 2];
 d19 = +HEAPF32[i11 >> 2];
 d20 = d19 * +HEAPF32[i4 + 4 >> 2];
 if ((i6 - 1 | 0) >>> 0 < 3 >>> 0) {
  d21 = d18 - (+HEAPF32[i3 + 8 >> 2] - d17 * +HEAPF32[i4 + 8 >> 2]) * +.5;
 } else {
  d21 = d18;
 }
 if ((i7 - 1 | 0) >>> 0 < 3 >>> 0) {
  d22 = d20 - (+HEAPF32[i3 + 12 >> 2] - d19 * +HEAPF32[i4 + 12 >> 2]) * +.5;
 } else {
  d22 = d20;
 }
 d20 = +HEAPF32[i3 + 4 >> 2] - d22;
 HEAPF32[i14 >> 2] = +HEAPF32[i3 >> 2] - d21;
 HEAPF32[i14 + 4 >> 2] = d20;
 FUNCTION_TABLE_viiiiiiiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 88 >> 2] & 3](i1, i2, i4, i12, i14, i8, i9, i3, 0);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 68 >> 2] & 15](i1, 1);
 STACKTOP = i10;
 return;
}
function __ZN7WebCore5Image26computeIntrinsicDimensionsERNS_6LengthES2_RNS_9FloatSizeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i9 = i8;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i11 = i10;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 48 >> 2] & 15](i7, i1);
 __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i6, i7);
 i7 = i4;
 i1 = HEAP32[i6 >> 2] | 0;
 i12 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i7 >> 2] = i1;
 HEAP32[i7 + 4 >> 2] = i12;
 HEAPF32[i8 >> 2] = (HEAP32[tempDoublePtr >> 2] = i1, +HEAPF32[tempDoublePtr >> 2]);
 HEAP8[i9 + 4 | 0] = 0;
 HEAP8[i9 + 5 | 0] = 3;
 HEAP8[i9 + 6 | 0] = 1;
 i9 = i2;
 i2 = HEAP32[i8 + 4 >> 2] | 0;
 HEAP32[i9 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i9 + 4 >> 2] = i2;
 HEAPF32[i10 >> 2] = +HEAPF32[i4 + 4 >> 2];
 HEAP8[i11 + 4 | 0] = 0;
 HEAP8[i11 + 5 | 0] = 3;
 HEAP8[i11 + 6 | 0] = 1;
 i11 = i3;
 i3 = HEAP32[i10 + 4 >> 2] | 0;
 HEAP32[i11 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i11 + 4 >> 2] = i3;
 STACKTOP = i5;
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_viiiiiiiii + 2;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_viiiiiiii + 2;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_vii + 2;
}
function __ZN7WebCore5Image7setDataEN3WTF10PassRefPtrINS_12SharedBufferEEEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = i2 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 i4 = i1 + 8 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 if ((i5 | 0) == 0) {
  i6 = i2;
 } else {
  i2 = i5 | 0;
  i7 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
  if ((i7 | 0) == 0) {
   __ZN7WebCore12SharedBufferD1Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  } else {
   HEAP32[i2 >> 2] = i7;
  }
  i6 = HEAP32[i4 >> 2] | 0;
 }
 if ((i6 | 0) == 0) {
  i8 = 1;
  return i8 | 0;
 }
 if ((__ZNK7WebCore12SharedBuffer4sizeEv(i6) | 0) == 0) {
  i8 = 1;
  return i8 | 0;
 }
 i8 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i1 >> 2] | 0) + 56 >> 2] & 7](i1, i3) | 0;
 return i8 | 0;
}
function __ZN7WebCore5Image4drawEPNS_15GraphicsContextERKNS_9FloatRectES5_NS_10ColorSpaceENS_17CompositeOperatorENS_9BlendModeENS_27ImageOrientationDescriptionE(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 var i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i10 = i8;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i8 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i8 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
 i10 = i9 | 0;
 i11 = HEAP32[(HEAP32[i1 >> 2] | 0) + 92 >> 2] | 0;
 i12 = i8;
 i8 = HEAP32[i12 + 4 >> 2] | 0;
 HEAP32[i10 >> 2] = HEAP32[i12 >> 2];
 HEAP32[i10 + 4 >> 2] = i8;
 FUNCTION_TABLE_viiiiiiii[i11 & 3](i1, i2, i3, i4, i5, i6, i7, i10);
 STACKTOP = i9;
 return;
}
function __ZN7WebCore5Image18fillWithSolidColorEPNS_15GraphicsContextERKNS_9FloatRectERKNS_5ColorENS_10ColorSpaceENS_17CompositeOperatorE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0;
 i6 = i3 | 0;
 if ((HEAP32[i6 >> 2] | 0) >>> 0 < 16777216 >>> 0) {
  return;
 }
 i7 = __ZNK7WebCore15GraphicsContext18compositeOperationEv(i1) | 0;
 __ZN7WebCore15GraphicsContext21setCompositeOperationENS_17CompositeOperatorENS_9BlendModeE(i1, (HEAP32[i6 >> 2] & -16777216 | 0) == -16777216 & (i5 | 0) == 2 ? 1 : i5, 0);
 __ZN7WebCore15GraphicsContext8fillRectERKNS_9FloatRectERKNS_5ColorENS_10ColorSpaceE(i1, i2, i3, i4);
 __ZN7WebCore15GraphicsContext21setCompositeOperationENS_17CompositeOperatorENS_9BlendModeE(i1, i7, 0);
 return;
}
function viiiiiiiii___ZN7WebCore5Image11drawPatternEPNS_15GraphicsContextERKNS_9FloatRectERKNS_15AffineTransformERKNS_10FloatPointENS_10ColorSpaceENS_17CompositeOperatorES5_NS_9BlendModeE__wrapper(i1, i2, i3, i4, i5, i6, i7, i8, i9) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 __ZN7WebCore5Image11drawPatternEPNS_15GraphicsContextERKNS_9FloatRectERKNS_15AffineTransformERKNS_10FloatPointENS_10ColorSpaceENS_17CompositeOperatorES5_NS_9BlendModeE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0, i9 | 0);
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
function __ZN7WebCore5ImageD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore12SharedBufferD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i1);
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
function __ZN7WebCore5Image9nullImageEv() {
 var i1 = 0, i2 = 0, i3 = 0;
 if (HEAP8[H_BASE + 128 | 0] | 0) {
  i1 = HEAP32[H_BASE + 136 >> 2] | 0;
  return i1 | 0;
 } else {
  i2 = __ZN3WTF10fastMallocEj(152) | 0;
  __ZN7WebCore11BitmapImageC1EPNS_13ImageObserverE(i2, 0);
  i3 = i2;
  HEAP32[H_BASE + 136 >> 2] = i3;
  HEAP8[H_BASE + 128 | 0] = 1;
  i1 = i3;
  return i1 | 0;
 }
 return 0;
}
function __ZN7WebCore5ImageD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore12SharedBufferD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZN7WebCore5ImageD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore12SharedBufferD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
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
function __ZN7WebCore5ImageC2EPNS_13ImageObserverE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 + 4 >> 2] = 1;
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i1 + 8 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = i2;
 HEAPF32[i1 + 16 >> 2] = +0;
 HEAPF32[i1 + 20 >> 2] = +0;
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function b5(i1, i2, i3, i4, i5, i6, i7, i8, i9) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 abort(5);
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
function __ZN7WebCore5Image12supportsTypeERKN3WTF6StringE(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore16MIMETypeRegistry32isSupportedImageResourceMIMETypeERKN3WTF6StringE(i1) | 0;
}
function b4(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 abort(4);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
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
 FUNCTION_TABLE_vii[i1 & 15](i2 | 0, i3 | 0);
}
function __ZNK7WebCore5Image17filenameExtensionEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZN7WebCore5Image16setContainerSizeERKNS_7IntSizeE(i1, i2) {
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
function b7(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(7);
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
function __ZNK7WebCore5Image23hasSingleSecurityOriginEv(i1) {
 i1 = i1 | 0;
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
function __ZNK7WebCore5Image17usesContainerSizeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore5Image17hasRelativeHeightEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore5Image16hasRelativeWidthEv(i1) {
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
function b6(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(6);
 return 0;
}
function v____cxa_pure_virtual__wrapper() {
 ___cxa_pure_virtual();
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 3]();
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
function b0() {
 abort(0);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_v = [b0,b0,v____cxa_pure_virtual__wrapper,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore5Image13stopAnimationEv,b1,__ZN7WebCore5Image14resetAnimationEv,b1,__ZN7WebCore5ImageD2Ev,b1,__ZN7WebCore5ImageD0Ev,b1,b1,b1,b1,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,__ZNK7WebCore5Image10solidColorEv,b2,__ZN7WebCore5Image26orientationForCurrentFrameEv,b2,__ZNK7WebCore5Image17filenameExtensionEv,b2,__ZN7WebCore5Image16setContainerSizeERKNS_7IntSizeE,b2,__ZN7WebCore5Image26nativeImageForCurrentFrameEv,b2,__ZN7WebCore5Image14startAnimationEb,b2,b2,b2];
  var FUNCTION_TABLE_ii = [b3,b3,__ZNK7WebCore5Image17hasRelativeHeightEv,b3,__ZN7WebCore5Image21mayFillWithSolidColorEv,b3,__ZNK7WebCore5Image16hasRelativeWidthEv,b3,__ZNK7WebCore5Image17usesContainerSizeEv,b3,__ZNK7WebCore5Image18isPDFDocumentImageEv,b3,__ZNK7WebCore5Image13isBitmapImageEv,b3,__ZNK7WebCore5Image23hasSingleSecurityOriginEv,b3,__ZNK7WebCore5Image10isSVGImageEv,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3];
  var FUNCTION_TABLE_viiiiiiii = [b4,b4,__ZN7WebCore5Image4drawEPNS_15GraphicsContextERKNS_9FloatRectES5_NS_10ColorSpaceENS_17CompositeOperatorENS_9BlendModeENS_27ImageOrientationDescriptionE,b4];
  var FUNCTION_TABLE_viiiiiiiii = [b5,b5,viiiiiiiii___ZN7WebCore5Image11drawPatternEPNS_15GraphicsContextERKNS_9FloatRectERKNS_15AffineTransformERKNS_10FloatPointENS_10ColorSpaceENS_17CompositeOperatorES5_NS_9BlendModeE__wrapper,b5];
  var FUNCTION_TABLE_iii = [b6,b6,__ZN7WebCore5Image11dataChangedEb,b6,__ZNK7WebCore5Image10getHotSpotERNS_8IntPointE,b6,b6,b6];
  var FUNCTION_TABLE_viiii = [b7,b7,__ZN7WebCore5Image26computeIntrinsicDimensionsERNS_6LengthES2_RNS_9FloatSizeE,b7];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_v: dynCall_v, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viiiiiiii: dynCall_viiiiiiii, dynCall_viiiiiiiii: dynCall_viiiiiiiii, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_v": invoke_v, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viiiiiiii": invoke_viiiiiiii, "invoke_viiiiiiiii": invoke_viiiiiiiii, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_malloc": _malloc, "___cxa_pure_virtual": ___cxa_pure_virtual, "___setErrNo": ___setErrNo, "_free": _free, "_fmod": _fmod, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viiiiiiii = Module["dynCall_viiiiiiii"] = asm["dynCall_viiiiiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore5Image13stopAnimationEv","_strlen","__ZNK7WebCore5Image17hasRelativeHeightEv","__ZN7WebCore5Image18fillWithSolidColorEPNS_15GraphicsContextERKNS_9FloatRectERKNS_5ColorENS_10ColorSpaceENS_17CompositeOperatorE","__ZN7WebCore5Image7setDataEN3WTF10PassRefPtrINS_12SharedBufferEEEb","__ZN7WebCore5Image26orientationForCurrentFrameEv","__ZN7WebCore5Image26computeIntrinsicDimensionsERNS_6LengthES2_RNS_9FloatSizeE","__ZN7WebCore5Image9drawTiledEPNS_15GraphicsContextERKNS_9FloatRectES5_RKNS_9FloatSizeENS0_8TileRuleES9_NS_10ColorSpaceENS_17CompositeOperatorE","__ZN7WebCore5Image21mayFillWithSolidColorEv","__ZNK7WebCore5Image16hasRelativeWidthEv","__ZNK7WebCore5Image10solidColorEv","__ZNK7WebCore5Image17filenameExtensionEv","__ZN7WebCore5Image14resetAnimationEv","_memset","__ZN7WebCore5Image16setContainerSizeERKNS_7IntSizeE","_memcpy","__ZN7WebCore5Image11dataChangedEb","__ZN7WebCore5Image4drawEPNS_15GraphicsContextERKNS_9FloatRectES5_NS_10ColorSpaceENS_17CompositeOperatorENS_9BlendModeENS_27ImageOrientationDescriptionE","__ZN7WebCore5ImageD2Ev","__ZN7WebCore5ImageD0Ev","__ZN7WebCore5Image9drawTiledEPNS_15GraphicsContextERKNS_9FloatRectERKNS_10FloatPointERKNS_9FloatSizeENS_10ColorSpaceENS_17CompositeOperatorENS_9BlendModeE","__ZN7WebCore5Image9nullImageEv","__ZNK7WebCore5Image17usesContainerSizeEv","__ZNK7WebCore5Image10getHotSpotERNS_8IntPointE","__ZN7WebCore5Image12supportsTypeERKN3WTF6StringE","__ZN7WebCore5Image26nativeImageForCurrentFrameEv","__ZNK7WebCore5Image18isPDFDocumentImageEv","__ZNK7WebCore5Image13isBitmapImageEv","__ZN7WebCore5Image14startAnimationEb","__ZNK7WebCore5Image10isSVGImageEv","__ZNK7WebCore5Image23hasSingleSecurityOriginEv","__ZN7WebCore5ImageC2EPNS_13ImageObserverE"]

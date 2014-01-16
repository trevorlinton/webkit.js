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
var __ZN7WebCore10ShadowBlurC1ERKNS_9FloatSizeES3_RKNS_5ColorENS_10ColorSpaceE;
var __ZN7WebCore10ShadowBlurC1ERKNS_20GraphicsContextStateE;
var __ZN7WebCore10ShadowBlurC1Ev;
/* memory initializer */ allocate([3,0,0,0,0,0,0,0,1,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_viiiii(index,a1,a2,a3,a4,a5) {
  try {
    Module["dynCall_viiiii"](index,a1,a2,a3,a4,a5);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_did(index,a1,a2) {
  try {
    return Module["dynCall_did"](index,a1,a2);
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
  var __ZTVN7WebCore5TimerINS_13ScratchBufferEEE=(H_BASE+24)|0;
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
  var invoke_viiiii=env.invoke_viiiii;
  var invoke_did=env.invoke_did;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _ceilf=env._ceilf;
  var _fabsf=env._fabsf;
  var _floorf=env._floorf;
  var ___setErrNo=env.___setErrNo;
  var _malloc=env._malloc;
  var _free=env._free;
  var _round=env._round;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore10ShadowBlur25drawInsetShadowWithTilingEPNS_15GraphicsContextERKNS_9FloatRectES5_RKNS_11RoundedRect5RadiiERKNS_7IntSizeESC_(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, d32 = +0, d33 = +0, d34 = +0, d35 = +0, d36 = +0, i37 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 184 | 0;
 i9 = i8 | 0;
 i10 = i8 + 16 | 0;
 i11 = i8 + 32 | 0;
 i12 = i8 + 48 | 0;
 i13 = i8 + 56 | 0;
 i14 = i8 + 64 | 0;
 i15 = i8 + 72 | 0;
 i16 = i8 + 80 | 0;
 i17 = i8 + 88 | 0;
 i18 = i8 + 96 | 0;
 i19 = i8 + 144 | 0;
 i20 = i8 + 160 | 0;
 i21 = i8 + 176 | 0;
 if (HEAP8[H_BASE + 56 | 0] | 0) {
  i22 = HEAP32[H_BASE + 64 >> 2] | 0;
 } else {
  i23 = __ZN3WTF10fastMallocEj(160) | 0;
  i24 = i23;
  HEAP32[i23 >> 2] = 0;
  i25 = i23 + 8 | 0;
  __ZN7WebCore9TimerBaseC2Ev(i25);
  HEAP32[i25 >> 2] = H_BASE + 32;
  HEAP32[i23 + 52 >> 2] = i24;
  i25 = i23 + 56 | 0;
  HEAP32[i25 >> 2] = F_BASE_vii + 2;
  HEAP32[i25 + 4 >> 2] = 0;
  HEAPF32[i23 + 140 >> 2] = +0;
  HEAPF32[i23 + 144 >> 2] = +0;
  HEAP8[i23 + 148 | 0] = 0;
  HEAPF32[i23 + 152 >> 2] = +0;
  HEAPF32[i23 + 156 >> 2] = +0;
  _memset(i23 + 64 | 0, 0, 69) | 0;
  HEAP32[H_BASE + 64 >> 2] = i24;
  HEAP8[H_BASE + 56 | 0] = 1;
  i22 = i24;
 }
 i24 = __ZN7WebCore13ScratchBuffer16getScratchBufferERKNS_7IntSizeE(i22, i6) | 0;
 i22 = i1 + 32 | 0;
 HEAP32[i22 >> 2] = i24;
 if ((i24 | 0) == 0) {
  STACKTOP = i8;
  return;
 }
 i24 = i6 | 0;
 i23 = HEAP32[i24 >> 2] | 0;
 i25 = i6 + 4 | 0;
 i26 = HEAP32[i25 >> 2] | 0;
 HEAPF32[i10 >> 2] = +0;
 HEAPF32[i10 + 4 >> 2] = +0;
 HEAPF32[i10 + 8 >> 2] = +(i23 | 0);
 HEAPF32[i10 + 12 >> 2] = +(i26 | 0);
 i27 = i7 | 0;
 i28 = HEAP32[i27 >> 2] | 0;
 i29 = i7 + 4 | 0;
 i30 = HEAP32[i29 >> 2] | 0;
 HEAPF32[i11 >> 2] = +(i28 | 0);
 HEAPF32[i11 + 4 >> 2] = +(i30 | 0);
 HEAPF32[i11 + 8 >> 2] = +(i23 - (i28 << 1) | 0);
 HEAPF32[i11 + 12 >> 2] = +(i26 - (i30 << 1) | 0);
 if (HEAP8[H_BASE + 56 | 0] | 0) {
  i31 = HEAP32[H_BASE + 64 >> 2] | 0;
 } else {
  i30 = __ZN3WTF10fastMallocEj(160) | 0;
  i26 = i30;
  HEAP32[i30 >> 2] = 0;
  i28 = i30 + 8 | 0;
  __ZN7WebCore9TimerBaseC2Ev(i28);
  HEAP32[i28 >> 2] = H_BASE + 32;
  HEAP32[i30 + 52 >> 2] = i26;
  i28 = i30 + 56 | 0;
  HEAP32[i28 >> 2] = F_BASE_vii + 2;
  HEAP32[i28 + 4 >> 2] = 0;
  HEAPF32[i30 + 140 >> 2] = +0;
  HEAPF32[i30 + 144 >> 2] = +0;
  HEAP8[i30 + 148 | 0] = 0;
  HEAPF32[i30 + 152 >> 2] = +0;
  HEAPF32[i30 + 156 >> 2] = +0;
  _memset(i30 + 64 | 0, 0, 69) | 0;
  HEAP32[H_BASE + 64 >> 2] = i26;
  HEAP8[H_BASE + 56 | 0] = 1;
  i31 = i26;
 }
 i26 = i1 + 4 | 0;
 i30 = i1 + 12 | 0;
 if (__ZN7WebCore13ScratchBuffer26setCachedInsetShadowValuesERKNS_9FloatSizeERKNS_5ColorENS_10ColorSpaceERKNS_9FloatRectESA_RKNS_11RoundedRect5RadiiE(i31, i1 + 16 | 0, i26, HEAP32[i30 >> 2] | 0, i10, i11, i5) | 0) {
  i31 = __ZNK7WebCore11ImageBuffer7contextEv(HEAP32[i22 >> 2] | 0) | 0;
  __ZN7WebCore15GraphicsContext4saveEv(i31);
  __ZN7WebCore15GraphicsContext9clearRectERKNS_9FloatRectE(i31, i10);
  __ZN7WebCore15GraphicsContext11setFillRuleENS_8WindRuleE(i31, 1);
  HEAP32[i12 >> 2] = -16777216;
  HEAP8[i12 + 4 | 0] = 1;
  __ZN7WebCore15GraphicsContext12setFillColorERKNS_5ColorENS_10ColorSpaceE(i31, i12, 0);
  __ZN7WebCore4PathC1Ev(i13);
  __ZN7WebCore4Path7addRectERKNS_9FloatRectE(i13, i10);
  if (__ZNK7WebCore11RoundedRect5Radii6isZeroEv(i5) | 0) {
   __ZN7WebCore4Path7addRectERKNS_9FloatRectE(i13, i11);
  } else {
   __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i14, i5 | 0);
   __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i15, i5 + 8 | 0);
   __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i16, i5 + 16 | 0);
   __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i17, i5 + 24 | 0);
   __ZN7WebCore4Path14addRoundedRectERKNS_9FloatRectERKNS_9FloatSizeES6_S6_S6_NS0_19RoundedRectStrategyE(i13, i11, i14, i15, i16, i17, 0);
  }
  __ZN7WebCore15GraphicsContext8fillPathERKNS_4PathE(i31, i13);
  __ZN7WebCore10ShadowBlur16blurShadowBufferERKNS_7IntSizeE(i1, i6);
  i17 = __ZNK7WebCore11ImageBuffer7contextEv(HEAP32[i22 >> 2] | 0) | 0;
  __ZN7WebCore15GraphicsContext4saveEv(i17);
  __ZN7WebCore15GraphicsContext21setCompositeOperationENS_17CompositeOperatorENS_9BlendModeE(i17, 3, 0);
  __ZN7WebCore15GraphicsContext12setFillColorERKNS_5ColorENS_10ColorSpaceE(i17, i26, HEAP32[i30 >> 2] | 0);
  d32 = +(HEAP32[i24 >> 2] | 0);
  d33 = +(HEAP32[i25 >> 2] | 0);
  HEAPF32[i9 >> 2] = +0;
  HEAPF32[i9 + 4 >> 2] = +0;
  HEAPF32[i9 + 8 >> 2] = d32;
  HEAPF32[i9 + 12 >> 2] = d33;
  __ZN7WebCore15GraphicsContext8fillRectERKNS_9FloatRectE(i17, i9);
  __ZN7WebCore15GraphicsContext7restoreEv(i17);
  __ZN7WebCore4PathD1Ev(i13);
  __ZN7WebCore15GraphicsContext7restoreEv(i31);
 }
 i31 = i1 + 24 | 0;
 d33 = +HEAPF32[i31 >> 2];
 d32 = +HEAPF32[i31 + 4 >> 2];
 if ((HEAP8[i1 + 76 | 0] & 1) == 0) {
  d34 = d33;
  d35 = d32;
 } else {
  __ZNK7WebCore15GraphicsContext6getCTMENS0_18IncludeDeviceScaleE(i18, i2, 1);
  d36 = +1 / +__ZNK7WebCore15AffineTransform6xScaleEv(i18);
  d34 = d33 * d36;
  d35 = d32 * (+1 / +__ZNK7WebCore15AffineTransform6yScaleEv(i18));
 }
 i18 = i19;
 i31 = i3;
 HEAP32[i18 >> 2] = HEAP32[i31 >> 2];
 HEAP32[i18 + 4 >> 2] = HEAP32[i31 + 4 >> 2];
 HEAP32[i18 + 8 >> 2] = HEAP32[i31 + 8 >> 2];
 HEAP32[i18 + 12 >> 2] = HEAP32[i31 + 12 >> 2];
 i31 = i19 | 0;
 HEAPF32[i31 >> 2] = d34 + +HEAPF32[i31 >> 2];
 i31 = i19 + 4 | 0;
 HEAPF32[i31 >> 2] = d35 + +HEAPF32[i31 >> 2];
 i31 = i4 + 8 | 0;
 i18 = HEAP32[i31 >> 2] | 0;
 i3 = HEAP32[i31 + 4 >> 2] | 0;
 d32 = d34 + +HEAPF32[i4 >> 2];
 d34 = d35 + +HEAPF32[i4 + 4 >> 2];
 i4 = i20 + 8 | 0;
 HEAP32[i4 >> 2] = i18;
 HEAP32[i4 + 4 >> 2] = i3;
 d35 = +(HEAP32[i27 >> 2] | 0);
 HEAPF32[i20 >> 2] = d32 - d35;
 HEAPF32[i20 + 8 >> 2] = d35 + (d35 + (HEAP32[tempDoublePtr >> 2] = i18, +HEAPF32[tempDoublePtr >> 2]));
 d35 = +(HEAP32[i29 >> 2] | 0);
 HEAPF32[i20 + 4 >> 2] = d34 - d35;
 HEAPF32[i20 + 12 >> 2] = d35 + (d35 + (HEAP32[tempDoublePtr >> 2] = i3, +HEAPF32[tempDoublePtr >> 2]));
 __ZN7WebCore4PathC1Ev(i21);
 __ZN7WebCore4Path7addRectERKNS_9FloatRectE(i21, i19);
 __ZN7WebCore4Path7addRectERKNS_9FloatRectE(i21, i20);
 __ZN7WebCore15GraphicsContext4saveEv(i2);
 __ZN7WebCore15GraphicsContext11setFillRuleENS_8WindRuleE(i2, 1);
 __ZN7WebCore15GraphicsContext12setFillColorERKNS_5ColorENS_10ColorSpaceE(i2, i26, HEAP32[i30 >> 2] | 0);
 __ZN7WebCore15GraphicsContext11clearShadowEv(i2);
 __ZN7WebCore15GraphicsContext8fillPathERKNS_4PathE(i2, i21);
 __ZN7WebCore15GraphicsContext7restoreEv(i2);
 __ZN7WebCore10ShadowBlur15drawLayerPiecesEPNS_15GraphicsContextERKNS_9FloatRectERKNS_11RoundedRect5RadiiERKNS_7IntSizeESC_NS0_15ShadowDirectionE(i1, i2, i20, i5, i7, i6, 1);
 HEAP32[i22 >> 2] = 0;
 if (HEAP8[H_BASE + 56 | 0] | 0) {
  i37 = HEAP32[H_BASE + 64 >> 2] | 0;
 } else {
  i22 = __ZN3WTF10fastMallocEj(160) | 0;
  i6 = i22;
  HEAP32[i22 >> 2] = 0;
  i7 = i22 + 8 | 0;
  __ZN7WebCore9TimerBaseC2Ev(i7);
  HEAP32[i7 >> 2] = H_BASE + 32;
  HEAP32[i22 + 52 >> 2] = i6;
  i7 = i22 + 56 | 0;
  HEAP32[i7 >> 2] = F_BASE_vii + 2;
  HEAP32[i7 + 4 >> 2] = 0;
  HEAPF32[i22 + 140 >> 2] = +0;
  HEAPF32[i22 + 144 >> 2] = +0;
  HEAP8[i22 + 148 | 0] = 0;
  HEAPF32[i22 + 152 >> 2] = +0;
  HEAPF32[i22 + 156 >> 2] = +0;
  _memset(i22 + 64 | 0, 0, 69) | 0;
  HEAP32[H_BASE + 64 >> 2] = i6;
  HEAP8[H_BASE + 56 | 0] = 1;
  i37 = i6;
 }
 i6 = i37 + 8 | 0;
 if (+HEAPF64[i37 + 16 >> 3] != +0) {
  __ZN7WebCore9TimerBase4stopEv(i6);
 }
 __ZN7WebCore9TimerBase5startEdd(i6, +2, +0);
 __ZN7WebCore4PathD1Ev(i21);
 STACKTOP = i8;
 return;
}
function __ZN7WebCore10ShadowBlur14blurLayerImageEPhRKNS_7IntSizeEi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, d8 = +0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, d24 = +0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, d73 = +0, i74 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i6 = i5 | 0;
 i7 = i1 + 16 | 0;
 d8 = +HEAPF32[i7 >> 2];
 i9 = i1 + 76 | 0;
 if ((HEAP8[i9] & 1) == 0) {
  i10 = ~~+Math_floor(d8 * +.5 * 1.8799712657928467 * +.8799999952316284 + +.5);
  i11 = (i10 | 0) > 2 ? i10 : 2;
 } else {
  i10 = ~~+Math_floor(d8 * +.6666666865348816);
  i11 = (i10 | 0) > 2 ? i10 : 2;
 }
 if ((i11 & 1 | 0) == 0) {
  i10 = (i11 | 0) / 2 & -1;
  HEAP32[i6 >> 2] = i10;
  i12 = i10 - 1 | 0;
  HEAP32[i6 + 4 >> 2] = i12;
  HEAP32[i6 + 8 >> 2] = i12;
  HEAP32[i6 + 12 >> 2] = i10;
  HEAP32[i6 + 16 >> 2] = i10;
  HEAP32[i6 + 20 >> 2] = i10;
 } else {
  i10 = (i11 - 1 | 0) / 2 & -1;
  HEAP32[i6 >> 2] = i10;
  HEAP32[i6 + 4 >> 2] = i10;
  HEAP32[i6 + 8 >> 2] = i10;
  HEAP32[i6 + 12 >> 2] = i10;
  HEAP32[i6 + 16 >> 2] = i10;
  HEAP32[i6 + 20 >> 2] = i10;
 }
 i10 = i3 + 4 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 i12 = i3 | 0;
 i3 = HEAP32[i12 >> 2] | 0;
 i13 = i1 + 20 | 0;
 i1 = i6 | 0;
 i14 = i6 + 4 | 0;
 i15 = i6 + 8 | 0;
 i16 = i6 + 12 | 0;
 i17 = i6 + 16 | 0;
 i18 = i6 + 20 | 0;
 i19 = 0;
 i20 = i3;
 i21 = i11;
 i22 = i4;
 i23 = 4;
 d24 = d8;
 i25 = i3;
 i3 = i11;
 while (1) {
  if (((i19 | 0) != 0 | d24 != +0) & (i21 | 0) > 0) {
   i11 = Math_imul(i23, i20 - 1 | 0) | 0;
   i26 = ~i20;
   i27 = 0;
   i28 = i2;
   while (1) {
    i29 = 0;
    i30 = 3;
    while (1) {
     i31 = HEAP32[i6 + (i29 << 3) >> 2] | 0;
     i32 = HEAP32[i6 + (i29 << 3) + 4 >> 2] | 0;
     i33 = i31 + 1 + i32 | 0;
     i34 = (i33 + 32767 | 0) / (i33 | 0) & -1;
     i33 = i32 + 1 | 0;
     i35 = H_BASE + 8 + (i29 << 2) | 0;
     i36 = HEAPU8[i28 + i30 | 0] | 0;
     i37 = HEAPU8[i28 + (i30 + i11) | 0] | 0;
     i38 = i29 + 1 | 0;
     i39 = HEAP32[H_BASE + 8 + (i38 << 2) >> 2] | 0;
     i40 = i28 + i39 | 0;
     i41 = i28 + ((Math_imul(i33, i23) | 0) + i30) | 0;
     i42 = (Math_imul(i36, i31) | 0) + i36 | 0;
     i43 = (i20 | 0) < (i33 | 0) ? i20 : i33;
     if ((i43 | 0) > 1) {
      i44 = i28 + (i30 + i23) | 0;
      i45 = 1;
      i46 = i42;
      while (1) {
       i47 = (HEAPU8[i44] | 0) + i46 | 0;
       i48 = i45 + 1 | 0;
       if ((i48 | 0) < (i43 | 0)) {
        i44 = i44 + i23 | 0;
        i45 = i48;
        i46 = i47;
       } else {
        i49 = i47;
        break;
       }
      }
     } else {
      i49 = i42;
     }
     if ((i43 | 0) > (i32 | 0)) {
      i50 = i49;
     } else {
      i50 = i49 + (Math_imul(i37, i33 - i43 | 0) | 0) | 0;
     }
     i46 = (i31 | 0) < (i20 | 0) ? i31 : i20;
     if ((i46 | 0) > 0) {
      i45 = ~i31;
      i44 = (i26 | 0) > (i45 | 0) ? i26 : i45;
      i45 = i32 - i44 | 0;
      i47 = i33;
      i48 = i40;
      i51 = i41;
      i52 = 0;
      i53 = i50;
      while (1) {
       HEAP8[i48] = (Math_imul(i53, i34) | 0) >>> 15;
       if ((i47 | 0) < (i20 | 0)) {
        i54 = HEAPU8[i51] | 0;
       } else {
        i54 = i37;
       }
       i55 = i53 - i36 + i54 | 0;
       i56 = i48 + i23 | 0;
       i57 = i51 + i23 | 0;
       i58 = i52 + 1 | 0;
       if ((i58 | 0) < (i46 | 0)) {
        i47 = i47 + 1 | 0;
        i48 = i56;
        i51 = i57;
        i52 = i58;
        i53 = i55;
       } else {
        break;
       }
      }
      i59 = i45;
      i60 = i56;
      i61 = i57;
      i62 = ~i44;
      i63 = i55;
     } else {
      i59 = i33;
      i60 = i40;
      i61 = i41;
      i62 = 0;
      i63 = i50;
     }
     i53 = i28 + (HEAP32[i35 >> 2] | 0) | 0;
     if ((i59 | 0) < (i20 | 0)) {
      i52 = i20 + i62 | 0;
      i51 = Math_imul(i23, i20 - i59 | 0) | 0;
      i48 = i59;
      i47 = i60;
      i46 = i53;
      i36 = i61;
      i32 = i63;
      while (1) {
       HEAP8[i47] = (Math_imul(i32, i34) | 0) >>> 15;
       i64 = (HEAPU8[i36] | 0) + i32 - (HEAPU8[i46] | 0) | 0;
       i65 = i46 + i23 | 0;
       i31 = i48 + 1 | 0;
       if ((i31 | 0) < (i20 | 0)) {
        i48 = i31;
        i47 = i47 + i23 | 0;
        i46 = i65;
        i36 = i36 + i23 | 0;
        i32 = i64;
       } else {
        break;
       }
      }
      i66 = i60 + i51 | 0;
      i67 = i65;
      i68 = i52 - i59 | 0;
      i69 = i64;
     } else {
      i66 = i60;
      i67 = i53;
      i68 = i62;
      i69 = i63;
     }
     if ((i68 | 0) < (i20 | 0)) {
      i32 = i66;
      i36 = i67;
      i46 = i68;
      i47 = i69;
      while (1) {
       HEAP8[i32] = (Math_imul(i47, i34) | 0) >>> 15;
       i48 = i47 + i37 - (HEAPU8[i36] | 0) | 0;
       i35 = i46 + 1 | 0;
       if ((i35 | 0) < (i20 | 0)) {
        i32 = i32 + i23 | 0;
        i36 = i36 + i23 | 0;
        i46 = i35;
        i47 = i48;
       } else {
        break;
       }
      }
     }
     if ((i38 | 0) < 3) {
      i29 = i38;
      i30 = i39;
     } else {
      break;
     }
    }
    i30 = i27 + 1 | 0;
    if ((i30 | 0) < (i21 | 0)) {
     i27 = i30;
     i28 = i28 + i22 | 0;
    } else {
     break;
    }
   }
   i70 = HEAP32[i12 >> 2] | 0;
   i71 = HEAP32[i10 >> 2] | 0;
  } else {
   i70 = i25;
   i71 = i3;
  }
  d8 = +HEAPF32[i13 >> 2];
  if (d8 == +0) {
   i72 = 41;
   break;
  }
  d73 = +HEAPF32[i7 >> 2];
  do {
   if (d73 != d8) {
    if ((HEAP8[i9] & 1) == 0) {
     i28 = ~~+Math_floor(d8 * +.5 * 1.8799712657928467 * +.8799999952316284 + +.5);
     i74 = (i28 | 0) > 2 ? i28 : 2;
    } else {
     i28 = ~~+Math_floor(d8 * +.6666666865348816);
     i74 = (i28 | 0) > 2 ? i28 : 2;
    }
    if ((i74 & 1 | 0) == 0) {
     i28 = (i74 | 0) / 2 & -1;
     HEAP32[i1 >> 2] = i28;
     i27 = i28 - 1 | 0;
     HEAP32[i14 >> 2] = i27;
     HEAP32[i15 >> 2] = i27;
     HEAP32[i16 >> 2] = i28;
     HEAP32[i17 >> 2] = i28;
     HEAP32[i18 >> 2] = i28;
     break;
    } else {
     i28 = (i74 - 1 | 0) / 2 & -1;
     HEAP32[i1 >> 2] = i28;
     HEAP32[i14 >> 2] = i28;
     HEAP32[i15 >> 2] = i28;
     HEAP32[i16 >> 2] = i28;
     HEAP32[i17 >> 2] = i28;
     HEAP32[i18 >> 2] = i28;
     break;
    }
   }
  } while (0);
  i28 = i19 + 1 | 0;
  if ((i28 | 0) < 2) {
   i19 = i28;
   i20 = i71;
   i21 = i70;
   i22 = 4;
   i23 = i4;
   d24 = d73;
   i25 = i70;
   i3 = i71;
  } else {
   i72 = 42;
   break;
  }
 }
 if ((i72 | 0) == 41) {
  STACKTOP = i5;
  return;
 } else if ((i72 | 0) == 42) {
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore10ShadowBlur26calculateLayerBoundingRectEPNS_15GraphicsContextERKNS_9FloatRectERKNS_7IntRectE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, d21 = +0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, d28 = +0, d29 = +0, d30 = +0, d31 = +0, d32 = +0, d33 = +0, d34 = +0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
 i7 = i6 | 0;
 i8 = i6 + 16 | 0;
 i9 = i6 + 64 | 0;
 i10 = i6 + 96 | 0;
 i11 = i10 | 0;
 i12 = i10;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i18 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i19 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i20 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 d21 = +Math_ceil(+HEAPF32[i2 + 16 >> 2]);
 do {
  if (d21 < +2147483647) {
   if (d21 <= +-2147483648) {
    i22 = -2147483648;
    break;
   }
   i22 = ~~d21;
  } else {
   i22 = 2147483647;
  }
 } while (0);
 d21 = +Math_ceil(+HEAPF32[i2 + 20 >> 2]);
 do {
  if (d21 < +2147483647) {
   if (d21 <= +-2147483648) {
    i23 = -2147483648;
    break;
   }
   i23 = ~~d21;
  } else {
   i23 = 2147483647;
  }
 } while (0);
 i24 = (i22 | 0) == 1 ? 2 : i22;
 i22 = (i23 | 0) == 1 ? 2 : i23;
 i23 = i7;
 _memset(i23 | 0, 0, 16) | 0;
 __ZNK7WebCore15GraphicsContext6getCTMENS0_18IncludeDeviceScaleE(i8, i3, 1);
 do {
  if ((HEAP8[i2 + 76 | 0] & 1) == 0) {
   i25 = 10;
  } else {
   if (__ZNK7WebCore15AffineTransform10isIdentityEv(i8) | 0) {
    i25 = 10;
    break;
   }
   i3 = i4;
   i26 = HEAP32[i3 >> 2] | 0;
   i27 = HEAP32[i3 + 4 >> 2] | 0;
   HEAP32[i11 >> 2] = i26;
   HEAP32[i11 + 4 >> 2] = i27;
   d21 = (HEAP32[tempDoublePtr >> 2] = i26, +HEAPF32[tempDoublePtr >> 2]);
   d28 = d21 + +HEAPF32[i4 + 8 >> 2];
   d29 = +HEAPF32[i4 + 4 >> 2];
   HEAPF32[i10 + 8 >> 2] = d28;
   HEAPF32[i12 + 12 >> 2] = d29;
   d30 = d29 + +HEAPF32[i4 + 12 >> 2];
   HEAPF32[i10 + 16 >> 2] = d28;
   HEAPF32[i12 + 20 >> 2] = d30;
   HEAPF32[i10 + 24 >> 2] = d21;
   HEAPF32[i12 + 28 >> 2] = d30;
   __ZNK7WebCore15AffineTransform7mapQuadERKNS_9FloatQuadE(i9, i8, i12);
   d30 = +HEAPF32[i2 + 24 >> 2];
   d21 = +HEAPF32[i2 + 28 >> 2];
   i26 = i9 | 0;
   HEAPF32[i26 >> 2] = d30 + +HEAPF32[i26 >> 2];
   i26 = i9 + 4 | 0;
   HEAPF32[i26 >> 2] = d21 + +HEAPF32[i26 >> 2];
   i26 = i9 + 8 | 0;
   HEAPF32[i26 >> 2] = d30 + +HEAPF32[i26 >> 2];
   i26 = i9 + 12 | 0;
   HEAPF32[i26 >> 2] = d21 + +HEAPF32[i26 >> 2];
   i26 = i9 + 16 | 0;
   HEAPF32[i26 >> 2] = d30 + +HEAPF32[i26 >> 2];
   i26 = i9 + 20 | 0;
   HEAPF32[i26 >> 2] = d21 + +HEAPF32[i26 >> 2];
   i26 = i9 + 24 | 0;
   HEAPF32[i26 >> 2] = d30 + +HEAPF32[i26 >> 2];
   i26 = i9 + 28 | 0;
   HEAPF32[i26 >> 2] = d21 + +HEAPF32[i26 >> 2];
   __ZNK7WebCore15AffineTransform7inverseEv(i14, i8);
   __ZNK7WebCore15AffineTransform7mapQuadERKNS_9FloatQuadE(i15, i14, i9);
   __ZNK7WebCore9FloatQuad11boundingBoxEv(i13, i15);
   i26 = i13;
   HEAP32[i23 >> 2] = HEAP32[i26 >> 2];
   HEAP32[i23 + 4 >> 2] = HEAP32[i26 + 4 >> 2];
   HEAP32[i23 + 8 >> 2] = HEAP32[i26 + 8 >> 2];
   HEAP32[i23 + 12 >> 2] = HEAP32[i26 + 12 >> 2];
  }
 } while (0);
 if ((i25 | 0) == 10) {
  i25 = i4;
  HEAP32[i23 >> 2] = HEAP32[i25 >> 2];
  HEAP32[i23 + 4 >> 2] = HEAP32[i25 + 4 >> 2];
  HEAP32[i23 + 8 >> 2] = HEAP32[i25 + 8 >> 2];
  HEAP32[i23 + 12 >> 2] = HEAP32[i25 + 12 >> 2];
  d21 = +HEAPF32[i2 + 28 >> 2];
  i25 = i7 | 0;
  HEAPF32[i25 >> 2] = +HEAPF32[i2 + 24 >> 2] + +HEAPF32[i25 >> 2];
  i25 = i7 + 4 | 0;
  HEAPF32[i25 >> 2] = d21 + +HEAPF32[i25 >> 2];
 }
 i25 = i2 | 0;
 if ((HEAP32[i25 >> 2] | 0) == 2) {
  d21 = +(i24 | 0);
  i13 = i7 | 0;
  d30 = +HEAPF32[i13 >> 2] - d21;
  HEAPF32[i13 >> 2] = d30;
  i13 = i7 + 8 | 0;
  HEAPF32[i13 >> 2] = d21 + (d21 + +HEAPF32[i13 >> 2]);
  d28 = +(i22 | 0);
  i13 = i7 + 4 | 0;
  d29 = +HEAPF32[i13 >> 2] - d28;
  HEAPF32[i13 >> 2] = d29;
  i13 = i7 + 12 | 0;
  HEAPF32[i13 >> 2] = d28 + (d28 + +HEAPF32[i13 >> 2]);
  d31 = d21;
  d32 = d28;
  d33 = d30;
  d34 = d29;
 } else {
  d31 = +0;
  d32 = +0;
  d33 = +HEAPF32[i7 >> 2];
  d34 = +HEAPF32[i7 + 4 >> 2];
 }
 i13 = i7 | 0;
 i15 = i7 + 4 | 0;
 i9 = i7 + 8 | 0;
 __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i16, i7);
 L19 : do {
  if (!(__ZNK7WebCore7IntRect8containsERKS0_(i5, i16) | 0)) {
   __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i17, i5);
   i14 = i18;
   HEAP32[i14 >> 2] = HEAP32[i23 >> 2];
   HEAP32[i14 + 4 >> 2] = HEAP32[i23 + 4 >> 2];
   HEAP32[i14 + 8 >> 2] = HEAP32[i23 + 8 >> 2];
   HEAP32[i14 + 12 >> 2] = HEAP32[i23 + 12 >> 2];
   __ZN7WebCore9FloatRect9intersectERKS0_(i18, i17);
   do {
    if (+HEAPF32[i18 + 8 >> 2] > +0) {
     if (+HEAPF32[i18 + 12 >> 2] <= +0) {
      break;
     }
     i14 = i19;
     i8 = i5;
     HEAP32[i14 >> 2] = HEAP32[i8 >> 2];
     HEAP32[i14 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
     HEAP32[i14 + 8 >> 2] = HEAP32[i8 + 8 >> 2];
     HEAP32[i14 + 12 >> 2] = HEAP32[i8 + 12 >> 2];
     i8 = i19 | 0;
     i14 = HEAP32[i8 >> 2] | 0;
     if ((HEAP32[i25 >> 2] | 0) == 2) {
      HEAP32[i8 >> 2] = i14 - i24;
      i12 = i19 + 8 | 0;
      HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + (i24 << 1);
      i12 = i19 + 4 | 0;
      HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) - i22;
      i12 = i19 + 12 | 0;
      HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + (i22 << 1);
     } else {
      HEAP32[i8 >> 2] = i14 - 1;
      i14 = i19 + 8 | 0;
      HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
      i14 = i19 + 4 | 0;
      HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) - 1;
      i14 = i19 + 12 | 0;
      HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
     }
     __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i20, i19);
     __ZN7WebCore9FloatRect9intersectERKS0_(i7, i20);
     break L19;
    }
   } while (0);
   _memset(i1 | 0, 0, 16) | 0;
   STACKTOP = i6;
   return;
  }
 } while (0);
 d29 = +(~~(d31 * +2) | 0) + +HEAPF32[i4 + 8 >> 2];
 d30 = +(~~(d32 * +2) | 0) + +HEAPF32[i4 + 12 >> 2];
 HEAPF32[i2 + 36 >> 2] = +0;
 HEAPF32[i2 + 40 >> 2] = +0;
 HEAPF32[i2 + 44 >> 2] = d29;
 HEAPF32[i2 + 48 >> 2] = d30;
 d30 = +HEAPF32[i13 >> 2];
 d29 = +HEAPF32[i15 >> 2];
 i15 = i2 + 52 | 0;
 d28 = +d30;
 d21 = +d29;
 HEAPF32[i15 >> 2] = d28;
 HEAPF32[i15 + 4 >> 2] = d21;
 i15 = i9;
 i9 = HEAP32[i15 + 4 >> 2] | 0;
 i13 = i2 + 60 | 0;
 HEAP32[i13 >> 2] = HEAP32[i15 >> 2];
 HEAP32[i13 + 4 >> 2] = i9;
 d21 = d31 - +HEAPF32[i4 >> 2] - +Math_abs(+(d33 - d30));
 d30 = d32 - +HEAPF32[i4 + 4 >> 2] - +Math_abs(+(d34 - d29));
 i4 = i2 + 68 | 0;
 d29 = +d21;
 d21 = +d30;
 HEAPF32[i4 >> 2] = d29;
 HEAPF32[i4 + 4 >> 2] = d21;
 __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i1, i7);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore10ShadowBlur15drawLayerPiecesEPNS_15GraphicsContextERKNS_9FloatRectERKNS_11RoundedRect5RadiiERKNS_7IntSizeESC_NS0_15ShadowDirectionE(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, d22 = +0, d23 = +0, d24 = +0, d25 = +0, d26 = +0, d27 = +0, d28 = +0, i29 = 0, d30 = +0, d31 = +0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i9 = i8 | 0;
 i10 = i8 + 16 | 0;
 i11 = i8 + 32 | 0;
 i12 = i8 + 48 | 0;
 i13 = i8 + 64 | 0;
 i14 = HEAP32[i5 >> 2] << 1;
 i15 = HEAP32[i5 + 4 >> 2] << 1;
 i5 = HEAP32[i4 >> 2] | 0;
 i16 = HEAP32[i4 + 16 >> 2] | 0;
 i17 = HEAP32[i4 + 8 >> 2] | 0;
 i18 = HEAP32[i4 + 24 >> 2] | 0;
 i19 = ((i17 | 0) < (i18 | 0) ? i18 : i17) + i14 | 0;
 i17 = HEAP32[i4 + 4 >> 2] | 0;
 i18 = HEAP32[i4 + 12 >> 2] | 0;
 i20 = HEAP32[i4 + 20 >> 2] | 0;
 i21 = HEAP32[i4 + 28 >> 2] | 0;
 i4 = ((i20 | 0) < (i21 | 0) ? i21 : i20) + i15 | 0;
 d22 = +(((i5 | 0) < (i16 | 0) ? i16 : i5) + i14 | 0);
 d23 = +(i19 | 0);
 i14 = ~~(+HEAPF32[i3 + 8 >> 2] - d22 - d23);
 d24 = +(((i17 | 0) < (i18 | 0) ? i18 : i17) + i15 | 0);
 d25 = +(i4 | 0);
 i15 = ~~(+HEAPF32[i3 + 12 >> 2] - d24 - d25);
 i17 = i3 | 0;
 do {
  if ((i7 | 0) == 0) {
   i18 = i3 + 4 | 0;
   d26 = d24 + +HEAPF32[i18 >> 2];
   d27 = +(i14 | 0);
   d28 = +(i15 | 0);
   HEAPF32[i9 >> 2] = d22 + +HEAPF32[i17 >> 2];
   HEAPF32[i9 + 4 >> 2] = d26;
   HEAPF32[i9 + 8 >> 2] = d27;
   HEAPF32[i9 + 12 >> 2] = d28;
   if (d27 <= +0 | d28 <= +0) {
    i29 = i18;
    d30 = d27;
    d31 = d28;
    break;
   }
   __ZN7WebCore15GraphicsContext4saveEv(i2);
   __ZN7WebCore15GraphicsContext12setFillColorERKNS_5ColorENS_10ColorSpaceE(i2, i1 + 4 | 0, HEAP32[i1 + 12 >> 2] | 0);
   __ZN7WebCore15GraphicsContext11clearShadowEv(i2);
   __ZN7WebCore15GraphicsContext8fillRectERKNS_9FloatRectE(i2, i9);
   __ZN7WebCore15GraphicsContext7restoreEv(i2);
   i29 = i18;
   d30 = d27;
   d31 = d28;
  } else {
   i29 = i3 + 4 | 0;
   d30 = +(i14 | 0);
   d31 = +(i15 | 0);
  }
 } while (0);
 __ZN7WebCore15GraphicsContext4saveEv(i2);
 __ZN7WebCore15GraphicsContext12setFillColorERKNS_5ColorENS_10ColorSpaceE(i2, i1 + 4 | 0, HEAP32[i1 + 12 >> 2] | 0);
 __ZN7WebCore15GraphicsContext11clearShadowEv(i2);
 d28 = d24 + +HEAPF32[i29 >> 2];
 i29 = i10 | 0;
 HEAPF32[i29 >> 2] = d22 + +HEAPF32[i17 >> 2];
 i17 = i10 + 4 | 0;
 HEAPF32[i17 >> 2] = d28;
 i15 = i10 + 8 | 0;
 HEAPF32[i15 >> 2] = d30;
 i14 = i10 + 12 | 0;
 HEAPF32[i14 >> 2] = d31;
 __ZN7WebCore15GraphicsContext19roundToDevicePixelsERKNS_9FloatRectENS0_12RoundingModeE(i11, i2, i10, 0);
 i3 = i10;
 i10 = i11;
 HEAP32[i3 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i3 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
 HEAP32[i3 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
 HEAP32[i3 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
 i10 = i12 | 0;
 HEAPF32[i10 >> 2] = d22;
 i3 = i12 + 4 | 0;
 HEAPF32[i3 >> 2] = +0;
 i11 = i12 + 8 | 0;
 HEAPF32[i11 >> 2] = +1;
 i9 = i12 + 12 | 0;
 HEAPF32[i9 >> 2] = d24;
 d31 = +HEAPF32[i17 >> 2] - d24;
 d30 = +HEAPF32[i15 >> 2];
 i7 = i13 | 0;
 HEAPF32[i7 >> 2] = +HEAPF32[i29 >> 2];
 i18 = i13 + 4 | 0;
 HEAPF32[i18 >> 2] = d31;
 i5 = i13 + 8 | 0;
 HEAPF32[i5 >> 2] = d30;
 i16 = i13 + 12 | 0;
 HEAPF32[i16 >> 2] = d24;
 i20 = i1 + 32 | 0;
 __ZN7WebCore15GraphicsContext15drawImageBufferEPNS_11ImageBufferENS_10ColorSpaceERKNS_9FloatRectES6_NS_17CompositeOperatorENS_9BlendModeEb(i2, HEAP32[i20 >> 2] | 0, 0, i13, i12, 2, 0, 0);
 i1 = i6 + 4 | 0;
 HEAPF32[i3 >> 2] = +((HEAP32[i1 >> 2] | 0) - i4 | 0);
 HEAPF32[i9 >> 2] = d25;
 HEAPF32[i18 >> 2] = +HEAPF32[i17 >> 2] + +HEAPF32[i14 >> 2];
 HEAPF32[i16 >> 2] = d25;
 __ZN7WebCore15GraphicsContext15drawImageBufferEPNS_11ImageBufferENS_10ColorSpaceERKNS_9FloatRectES6_NS_17CompositeOperatorENS_9BlendModeEb(i2, HEAP32[i20 >> 2] | 0, 0, i13, i12, 2, 0, 0);
 HEAPF32[i10 >> 2] = +0;
 HEAPF32[i3 >> 2] = d24;
 HEAPF32[i11 >> 2] = d22;
 HEAPF32[i9 >> 2] = +1;
 d30 = +HEAPF32[i17 >> 2];
 d31 = +HEAPF32[i14 >> 2];
 HEAPF32[i7 >> 2] = +HEAPF32[i29 >> 2] - d22;
 HEAPF32[i18 >> 2] = d30;
 HEAPF32[i5 >> 2] = d22;
 HEAPF32[i16 >> 2] = d31;
 __ZN7WebCore15GraphicsContext15drawImageBufferEPNS_11ImageBufferENS_10ColorSpaceERKNS_9FloatRectES6_NS_17CompositeOperatorENS_9BlendModeEb(i2, HEAP32[i20 >> 2] | 0, 0, i13, i12, 2, 0, 0);
 i21 = i6 | 0;
 HEAPF32[i10 >> 2] = +((HEAP32[i21 >> 2] | 0) - i19 | 0);
 HEAPF32[i11 >> 2] = d23;
 HEAPF32[i7 >> 2] = +HEAPF32[i29 >> 2] + +HEAPF32[i15 >> 2];
 HEAPF32[i5 >> 2] = d23;
 __ZN7WebCore15GraphicsContext15drawImageBufferEPNS_11ImageBufferENS_10ColorSpaceERKNS_9FloatRectES6_NS_17CompositeOperatorENS_9BlendModeEb(i2, HEAP32[i20 >> 2] | 0, 0, i13, i12, 2, 0, 0);
 HEAPF32[i10 >> 2] = +0;
 HEAPF32[i3 >> 2] = +0;
 HEAPF32[i11 >> 2] = d22;
 HEAPF32[i9 >> 2] = d24;
 d31 = +HEAPF32[i17 >> 2] - d24;
 HEAPF32[i7 >> 2] = +HEAPF32[i29 >> 2] - d22;
 HEAPF32[i18 >> 2] = d31;
 HEAPF32[i5 >> 2] = d22;
 HEAPF32[i16 >> 2] = d24;
 __ZN7WebCore15GraphicsContext15drawImageBufferEPNS_11ImageBufferENS_10ColorSpaceERKNS_9FloatRectES6_NS_17CompositeOperatorENS_9BlendModeEb(i2, HEAP32[i20 >> 2] | 0, 0, i13, i12, 2, 0, 0);
 HEAPF32[i10 >> 2] = +((HEAP32[i21 >> 2] | 0) - i19 | 0);
 HEAPF32[i3 >> 2] = +0;
 HEAPF32[i11 >> 2] = d23;
 HEAPF32[i9 >> 2] = d24;
 d31 = +HEAPF32[i17 >> 2] - d24;
 HEAPF32[i7 >> 2] = +HEAPF32[i29 >> 2] + +HEAPF32[i15 >> 2];
 HEAPF32[i18 >> 2] = d31;
 HEAPF32[i5 >> 2] = d23;
 HEAPF32[i16 >> 2] = d24;
 __ZN7WebCore15GraphicsContext15drawImageBufferEPNS_11ImageBufferENS_10ColorSpaceERKNS_9FloatRectES6_NS_17CompositeOperatorENS_9BlendModeEb(i2, HEAP32[i20 >> 2] | 0, 0, i13, i12, 2, 0, 0);
 d24 = +((HEAP32[i1 >> 2] | 0) - i4 | 0);
 HEAPF32[i10 >> 2] = +((HEAP32[i21 >> 2] | 0) - i19 | 0);
 HEAPF32[i3 >> 2] = d24;
 HEAPF32[i11 >> 2] = d23;
 HEAPF32[i9 >> 2] = d25;
 d24 = +HEAPF32[i17 >> 2] + +HEAPF32[i14 >> 2];
 HEAPF32[i7 >> 2] = +HEAPF32[i29 >> 2] + +HEAPF32[i15 >> 2];
 HEAPF32[i18 >> 2] = d24;
 HEAPF32[i5 >> 2] = d23;
 HEAPF32[i16 >> 2] = d25;
 __ZN7WebCore15GraphicsContext15drawImageBufferEPNS_11ImageBufferENS_10ColorSpaceERKNS_9FloatRectES6_NS_17CompositeOperatorENS_9BlendModeEb(i2, HEAP32[i20 >> 2] | 0, 0, i13, i12, 2, 0, 0);
 d23 = +((HEAP32[i1 >> 2] | 0) - i4 | 0);
 HEAPF32[i10 >> 2] = +0;
 HEAPF32[i3 >> 2] = d23;
 HEAPF32[i11 >> 2] = d22;
 HEAPF32[i9 >> 2] = d25;
 d23 = +HEAPF32[i17 >> 2] + +HEAPF32[i14 >> 2];
 HEAPF32[i7 >> 2] = +HEAPF32[i29 >> 2] - d22;
 HEAPF32[i18 >> 2] = d23;
 HEAPF32[i5 >> 2] = d22;
 HEAPF32[i16 >> 2] = d25;
 __ZN7WebCore15GraphicsContext15drawImageBufferEPNS_11ImageBufferENS_10ColorSpaceERKNS_9FloatRectES6_NS_17CompositeOperatorENS_9BlendModeEb(i2, HEAP32[i20 >> 2] | 0, 0, i13, i12, 2, 0, 0);
 __ZN7WebCore15GraphicsContext7restoreEv(i2);
 STACKTOP = i8;
 return;
}
function __ZN7WebCore10ShadowBlur24drawRectShadowWithTilingEPNS_15GraphicsContextERKNS_9FloatRectERKNS_11RoundedRect5RadiiERKNS_7IntSizeESC_(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, d25 = +0, i26 = 0, d27 = +0, i28 = 0, i29 = 0, d30 = +0, d31 = +0, d32 = +0, i33 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 160 | 0;
 i8 = i7 | 0;
 i9 = i7 + 16 | 0;
 i10 = i7 + 32 | 0;
 i11 = i7 + 48 | 0;
 i12 = i7 + 56 | 0;
 i13 = i7 + 64 | 0;
 i14 = i7 + 72 | 0;
 i15 = i7 + 80 | 0;
 i16 = i7 + 88 | 0;
 i17 = i7 + 96 | 0;
 i18 = i7 + 144 | 0;
 if (HEAP8[H_BASE + 56 | 0] | 0) {
  i19 = HEAP32[H_BASE + 64 >> 2] | 0;
 } else {
  i20 = __ZN3WTF10fastMallocEj(160) | 0;
  i21 = i20;
  HEAP32[i20 >> 2] = 0;
  i22 = i20 + 8 | 0;
  __ZN7WebCore9TimerBaseC2Ev(i22);
  HEAP32[i22 >> 2] = H_BASE + 32;
  HEAP32[i20 + 52 >> 2] = i21;
  i22 = i20 + 56 | 0;
  HEAP32[i22 >> 2] = F_BASE_vii + 2;
  HEAP32[i22 + 4 >> 2] = 0;
  HEAPF32[i20 + 140 >> 2] = +0;
  HEAPF32[i20 + 144 >> 2] = +0;
  HEAP8[i20 + 148 | 0] = 0;
  HEAPF32[i20 + 152 >> 2] = +0;
  HEAPF32[i20 + 156 >> 2] = +0;
  _memset(i20 + 64 | 0, 0, 69) | 0;
  HEAP32[H_BASE + 64 >> 2] = i21;
  HEAP8[H_BASE + 56 | 0] = 1;
  i19 = i21;
 }
 i21 = __ZN7WebCore13ScratchBuffer16getScratchBufferERKNS_7IntSizeE(i19, i5) | 0;
 i19 = i1 + 32 | 0;
 HEAP32[i19 >> 2] = i21;
 if ((i21 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i21 = i6 | 0;
 i20 = HEAP32[i21 >> 2] | 0;
 i22 = i6 + 4 | 0;
 i23 = HEAP32[i22 >> 2] | 0;
 i24 = i5 | 0;
 d25 = +((HEAP32[i24 >> 2] | 0) - (i20 << 1) | 0);
 i26 = i5 + 4 | 0;
 d27 = +((HEAP32[i26 >> 2] | 0) - (i23 << 1) | 0);
 HEAPF32[i9 >> 2] = +(i20 | 0);
 HEAPF32[i9 + 4 >> 2] = +(i23 | 0);
 HEAPF32[i9 + 8 >> 2] = d25;
 HEAPF32[i9 + 12 >> 2] = d27;
 if (HEAP8[H_BASE + 56 | 0] | 0) {
  i28 = HEAP32[H_BASE + 64 >> 2] | 0;
 } else {
  i23 = __ZN3WTF10fastMallocEj(160) | 0;
  i20 = i23;
  HEAP32[i23 >> 2] = 0;
  i29 = i23 + 8 | 0;
  __ZN7WebCore9TimerBaseC2Ev(i29);
  HEAP32[i29 >> 2] = H_BASE + 32;
  HEAP32[i23 + 52 >> 2] = i20;
  i29 = i23 + 56 | 0;
  HEAP32[i29 >> 2] = F_BASE_vii + 2;
  HEAP32[i29 + 4 >> 2] = 0;
  HEAPF32[i23 + 140 >> 2] = +0;
  HEAPF32[i23 + 144 >> 2] = +0;
  HEAP8[i23 + 148 | 0] = 0;
  HEAPF32[i23 + 152 >> 2] = +0;
  HEAPF32[i23 + 156 >> 2] = +0;
  _memset(i23 + 64 | 0, 0, 69) | 0;
  HEAP32[H_BASE + 64 >> 2] = i20;
  HEAP8[H_BASE + 56 | 0] = 1;
  i28 = i20;
 }
 i20 = i1 + 4 | 0;
 i23 = i1 + 12 | 0;
 if (__ZN7WebCore13ScratchBuffer21setCachedShadowValuesERKNS_9FloatSizeERKNS_5ColorENS_10ColorSpaceERKNS_9FloatRectERKNS_11RoundedRect5RadiiES3_(i28, i1 + 16 | 0, i20, HEAP32[i23 >> 2] | 0, i9, i4, i1 + 60 | 0) | 0) {
  i28 = __ZNK7WebCore11ImageBuffer7contextEv(HEAP32[i19 >> 2] | 0) | 0;
  __ZN7WebCore15GraphicsContext4saveEv(i28);
  d27 = +(HEAP32[i24 >> 2] | 0);
  d25 = +(HEAP32[i26 >> 2] | 0);
  HEAPF32[i10 >> 2] = +0;
  HEAPF32[i10 + 4 >> 2] = +0;
  HEAPF32[i10 + 8 >> 2] = d27;
  HEAPF32[i10 + 12 >> 2] = d25;
  __ZN7WebCore15GraphicsContext9clearRectERKNS_9FloatRectE(i28, i10);
  HEAP32[i11 >> 2] = -16777216;
  HEAP8[i11 + 4 | 0] = 1;
  __ZN7WebCore15GraphicsContext12setFillColorERKNS_5ColorENS_10ColorSpaceE(i28, i11, 0);
  if (__ZNK7WebCore11RoundedRect5Radii6isZeroEv(i4) | 0) {
   __ZN7WebCore15GraphicsContext8fillRectERKNS_9FloatRectE(i28, i9);
  } else {
   __ZN7WebCore4PathC1Ev(i12);
   __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i13, i4 | 0);
   __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i14, i4 + 8 | 0);
   __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i15, i4 + 16 | 0);
   __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i16, i4 + 24 | 0);
   __ZN7WebCore4Path14addRoundedRectERKNS_9FloatRectERKNS_9FloatSizeES6_S6_S6_NS0_19RoundedRectStrategyE(i12, i9, i13, i14, i15, i16, 0);
   __ZN7WebCore15GraphicsContext8fillPathERKNS_4PathE(i28, i12);
   __ZN7WebCore4PathD1Ev(i12);
  }
  __ZN7WebCore10ShadowBlur16blurShadowBufferERKNS_7IntSizeE(i1, i5);
  i12 = __ZNK7WebCore11ImageBuffer7contextEv(HEAP32[i19 >> 2] | 0) | 0;
  __ZN7WebCore15GraphicsContext4saveEv(i12);
  __ZN7WebCore15GraphicsContext21setCompositeOperationENS_17CompositeOperatorENS_9BlendModeE(i12, 3, 0);
  __ZN7WebCore15GraphicsContext12setFillColorERKNS_5ColorENS_10ColorSpaceE(i12, i20, HEAP32[i23 >> 2] | 0);
  d25 = +(HEAP32[i24 >> 2] | 0);
  d27 = +(HEAP32[i26 >> 2] | 0);
  HEAPF32[i8 >> 2] = +0;
  HEAPF32[i8 + 4 >> 2] = +0;
  HEAPF32[i8 + 8 >> 2] = d25;
  HEAPF32[i8 + 12 >> 2] = d27;
  __ZN7WebCore15GraphicsContext8fillRectERKNS_9FloatRectE(i12, i8);
  __ZN7WebCore15GraphicsContext7restoreEv(i12);
  __ZN7WebCore15GraphicsContext7restoreEv(i28);
 }
 i28 = i1 + 24 | 0;
 d27 = +HEAPF32[i28 >> 2];
 d25 = +HEAPF32[i28 + 4 >> 2];
 if ((HEAP8[i1 + 76 | 0] & 1) == 0) {
  d30 = d27;
  d31 = d25;
 } else {
  __ZNK7WebCore15GraphicsContext6getCTMENS0_18IncludeDeviceScaleE(i17, i2, 1);
  d32 = +1 / +__ZNK7WebCore15AffineTransform6xScaleEv(i17);
  d30 = d27 * d32;
  d31 = d25 * (+1 / +__ZNK7WebCore15AffineTransform6yScaleEv(i17));
 }
 i17 = i18;
 i28 = i3;
 HEAP32[i17 >> 2] = HEAP32[i28 >> 2];
 HEAP32[i17 + 4 >> 2] = HEAP32[i28 + 4 >> 2];
 HEAP32[i17 + 8 >> 2] = HEAP32[i28 + 8 >> 2];
 HEAP32[i17 + 12 >> 2] = HEAP32[i28 + 12 >> 2];
 i28 = i18 | 0;
 i17 = i18 + 4 | 0;
 d25 = d31 + +HEAPF32[i17 >> 2];
 d31 = +(HEAP32[i21 >> 2] | 0);
 HEAPF32[i28 >> 2] = d30 + +HEAPF32[i28 >> 2] - d31;
 i28 = i18 + 8 | 0;
 HEAPF32[i28 >> 2] = d31 + (d31 + +HEAPF32[i28 >> 2]);
 d31 = +(HEAP32[i22 >> 2] | 0);
 HEAPF32[i17 >> 2] = d25 - d31;
 i17 = i18 + 12 | 0;
 HEAPF32[i17 >> 2] = d31 + (d31 + +HEAPF32[i17 >> 2]);
 __ZN7WebCore10ShadowBlur15drawLayerPiecesEPNS_15GraphicsContextERKNS_9FloatRectERKNS_11RoundedRect5RadiiERKNS_7IntSizeESC_NS0_15ShadowDirectionE(i1, i2, i18, i4, i6, i5, 0);
 HEAP32[i19 >> 2] = 0;
 if (HEAP8[H_BASE + 56 | 0] | 0) {
  i33 = HEAP32[H_BASE + 64 >> 2] | 0;
 } else {
  i19 = __ZN3WTF10fastMallocEj(160) | 0;
  i5 = i19;
  HEAP32[i19 >> 2] = 0;
  i6 = i19 + 8 | 0;
  __ZN7WebCore9TimerBaseC2Ev(i6);
  HEAP32[i6 >> 2] = H_BASE + 32;
  HEAP32[i19 + 52 >> 2] = i5;
  i6 = i19 + 56 | 0;
  HEAP32[i6 >> 2] = F_BASE_vii + 2;
  HEAP32[i6 + 4 >> 2] = 0;
  HEAPF32[i19 + 140 >> 2] = +0;
  HEAPF32[i19 + 144 >> 2] = +0;
  HEAP8[i19 + 148 | 0] = 0;
  HEAPF32[i19 + 152 >> 2] = +0;
  HEAPF32[i19 + 156 >> 2] = +0;
  _memset(i19 + 64 | 0, 0, 69) | 0;
  HEAP32[H_BASE + 64 >> 2] = i5;
  HEAP8[H_BASE + 56 | 0] = 1;
  i33 = i5;
 }
 i5 = i33 + 8 | 0;
 if (+HEAPF64[i33 + 16 >> 3] != +0) {
  __ZN7WebCore9TimerBase4stopEv(i5);
 }
 __ZN7WebCore9TimerBase5startEdd(i5, +2, +0);
 STACKTOP = i7;
 return;
}
function __ZN7WebCore10ShadowBlur28drawInsetShadowWithoutTilingEPNS_15GraphicsContextERKNS_9FloatRectES5_RKNS_11RoundedRect5RadiiERKNS_7IntRectE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, d24 = +0, d25 = +0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i8 = i7 | 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i18 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i19 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 if (HEAP8[H_BASE + 56 | 0] | 0) {
  i20 = HEAP32[H_BASE + 64 >> 2] | 0;
 } else {
  i21 = __ZN3WTF10fastMallocEj(160) | 0;
  i22 = i21;
  HEAP32[i21 >> 2] = 0;
  i23 = i21 + 8 | 0;
  __ZN7WebCore9TimerBaseC2Ev(i23);
  HEAP32[i23 >> 2] = H_BASE + 32;
  HEAP32[i21 + 52 >> 2] = i22;
  i23 = i21 + 56 | 0;
  HEAP32[i23 >> 2] = F_BASE_vii + 2;
  HEAP32[i23 + 4 >> 2] = 0;
  HEAPF32[i21 + 140 >> 2] = +0;
  HEAPF32[i21 + 144 >> 2] = +0;
  HEAP8[i21 + 148 | 0] = 0;
  HEAPF32[i21 + 152 >> 2] = +0;
  HEAPF32[i21 + 156 >> 2] = +0;
  _memset(i21 + 64 | 0, 0, 69) | 0;
  HEAP32[H_BASE + 64 >> 2] = i22;
  HEAP8[H_BASE + 56 | 0] = 1;
  i20 = i22;
 }
 i22 = i6 + 8 | 0;
 i6 = HEAP32[i22 + 4 >> 2] | 0;
 HEAP32[i8 >> 2] = HEAP32[i22 >> 2];
 HEAP32[i8 + 4 >> 2] = i6;
 i6 = __ZN7WebCore13ScratchBuffer16getScratchBufferERKNS_7IntSizeE(i20, i8) | 0;
 i8 = i1 + 32 | 0;
 HEAP32[i8 >> 2] = i6;
 if ((i6 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i6 = i9;
 i20 = i3;
 HEAP32[i6 >> 2] = HEAP32[i20 >> 2];
 HEAP32[i6 + 4 >> 2] = HEAP32[i20 + 4 >> 2];
 HEAP32[i6 + 8 >> 2] = HEAP32[i20 + 8 >> 2];
 HEAP32[i6 + 12 >> 2] = HEAP32[i20 + 12 >> 2];
 i20 = i1 + 68 | 0;
 d24 = +HEAPF32[i20 >> 2];
 i6 = i1 + 72 | 0;
 d25 = +HEAPF32[i6 >> 2];
 i22 = i9 | 0;
 HEAPF32[i22 >> 2] = d24 + +HEAPF32[i22 >> 2];
 i22 = i9 + 4 | 0;
 HEAPF32[i22 >> 2] = d25 + +HEAPF32[i22 >> 2];
 i22 = i10;
 i21 = i4;
 HEAP32[i22 >> 2] = HEAP32[i21 >> 2];
 HEAP32[i22 + 4 >> 2] = HEAP32[i21 + 4 >> 2];
 HEAP32[i22 + 8 >> 2] = HEAP32[i21 + 8 >> 2];
 HEAP32[i22 + 12 >> 2] = HEAP32[i21 + 12 >> 2];
 i21 = i10 | 0;
 HEAPF32[i21 >> 2] = d24 + +HEAPF32[i21 >> 2];
 i21 = i10 + 4 | 0;
 HEAPF32[i21 >> 2] = d25 + +HEAPF32[i21 >> 2];
 if (HEAP8[H_BASE + 56 | 0] | 0) {
  i26 = HEAP32[H_BASE + 64 >> 2] | 0;
 } else {
  i21 = __ZN3WTF10fastMallocEj(160) | 0;
  i22 = i21;
  HEAP32[i21 >> 2] = 0;
  i23 = i21 + 8 | 0;
  __ZN7WebCore9TimerBaseC2Ev(i23);
  HEAP32[i23 >> 2] = H_BASE + 32;
  HEAP32[i21 + 52 >> 2] = i22;
  i23 = i21 + 56 | 0;
  HEAP32[i23 >> 2] = F_BASE_vii + 2;
  HEAP32[i23 + 4 >> 2] = 0;
  HEAPF32[i21 + 140 >> 2] = +0;
  HEAPF32[i21 + 144 >> 2] = +0;
  HEAP8[i21 + 148 | 0] = 0;
  HEAPF32[i21 + 152 >> 2] = +0;
  HEAPF32[i21 + 156 >> 2] = +0;
  _memset(i21 + 64 | 0, 0, 69) | 0;
  HEAP32[H_BASE + 64 >> 2] = i22;
  HEAP8[H_BASE + 56 | 0] = 1;
  i26 = i22;
 }
 HEAP32[i11 >> 2] = -16777216;
 HEAP8[i11 + 4 | 0] = 1;
 if (__ZN7WebCore13ScratchBuffer26setCachedInsetShadowValuesERKNS_9FloatSizeERKNS_5ColorENS_10ColorSpaceERKNS_9FloatRectESA_RKNS_11RoundedRect5RadiiE(i26, i1 + 16 | 0, i11, 0, i9, i10, i5) | 0) {
  i10 = __ZNK7WebCore11ImageBuffer7contextEv(HEAP32[i8 >> 2] | 0) | 0;
  __ZN7WebCore15GraphicsContext4saveEv(i10);
  i9 = i1 + 60 | 0;
  d25 = +HEAPF32[i9 >> 2] + +1;
  i11 = i1 + 64 | 0;
  d24 = +HEAPF32[i11 >> 2] + +1;
  HEAPF32[i12 >> 2] = +0;
  HEAPF32[i12 + 4 >> 2] = +0;
  HEAPF32[i12 + 8 >> 2] = d25;
  HEAPF32[i12 + 12 >> 2] = d24;
  __ZN7WebCore15GraphicsContext9clearRectERKNS_9FloatRectE(i10, i12);
  __ZN7WebCore15GraphicsContext9translateEff(i10, +HEAPF32[i20 >> 2], +HEAPF32[i6 >> 2]);
  __ZN7WebCore4PathC1Ev(i13);
  __ZN7WebCore4Path7addRectERKNS_9FloatRectE(i13, i3);
  if (__ZNK7WebCore11RoundedRect5Radii6isZeroEv(i5) | 0) {
   __ZN7WebCore4Path7addRectERKNS_9FloatRectE(i13, i4);
  } else {
   __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i14, i5 | 0);
   __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i15, i5 + 8 | 0);
   __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i16, i5 + 16 | 0);
   __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i17, i5 + 24 | 0);
   __ZN7WebCore4Path14addRoundedRectERKNS_9FloatRectERKNS_9FloatSizeES6_S6_S6_NS0_19RoundedRectStrategyE(i13, i4, i14, i15, i16, i17, 0);
  }
  __ZN7WebCore15GraphicsContext11setFillRuleENS_8WindRuleE(i10, 1);
  HEAP32[i18 >> 2] = -16777216;
  HEAP8[i18 + 4 | 0] = 1;
  __ZN7WebCore15GraphicsContext12setFillColorERKNS_5ColorENS_10ColorSpaceE(i10, i18, 0);
  __ZN7WebCore15GraphicsContext8fillPathERKNS_4PathE(i10, i13);
  d24 = +Math_ceil(+HEAPF32[i9 >> 2]);
  do {
   if (d24 < +2147483647) {
    if (d24 <= +-2147483648) {
     i27 = -2147483648;
     break;
    }
    i27 = ~~d24;
   } else {
    i27 = 2147483647;
   }
  } while (0);
  d24 = +Math_ceil(+HEAPF32[i11 >> 2]);
  do {
   if (d24 < +2147483647) {
    if (d24 <= +-2147483648) {
     i28 = -2147483648;
     break;
    }
    i28 = ~~d24;
   } else {
    i28 = 2147483647;
   }
  } while (0);
  HEAP32[i19 >> 2] = i27;
  HEAP32[i19 + 4 >> 2] = i28;
  __ZN7WebCore10ShadowBlur16blurShadowBufferERKNS_7IntSizeE(i1, i19);
  __ZN7WebCore4PathD1Ev(i13);
  __ZN7WebCore15GraphicsContext7restoreEv(i10);
 }
 __ZN7WebCore10ShadowBlur16drawShadowBufferEPNS_15GraphicsContextE(i1, i2);
 HEAP32[i8 >> 2] = 0;
 if (HEAP8[H_BASE + 56 | 0] | 0) {
  i29 = HEAP32[H_BASE + 64 >> 2] | 0;
 } else {
  i8 = __ZN3WTF10fastMallocEj(160) | 0;
  i2 = i8;
  HEAP32[i8 >> 2] = 0;
  i1 = i8 + 8 | 0;
  __ZN7WebCore9TimerBaseC2Ev(i1);
  HEAP32[i1 >> 2] = H_BASE + 32;
  HEAP32[i8 + 52 >> 2] = i2;
  i1 = i8 + 56 | 0;
  HEAP32[i1 >> 2] = F_BASE_vii + 2;
  HEAP32[i1 + 4 >> 2] = 0;
  HEAPF32[i8 + 140 >> 2] = +0;
  HEAPF32[i8 + 144 >> 2] = +0;
  HEAP8[i8 + 148 | 0] = 0;
  HEAPF32[i8 + 152 >> 2] = +0;
  HEAPF32[i8 + 156 >> 2] = +0;
  _memset(i8 + 64 | 0, 0, 69) | 0;
  HEAP32[H_BASE + 64 >> 2] = i2;
  HEAP8[H_BASE + 56 | 0] = 1;
  i29 = i2;
 }
 i2 = i29 + 8 | 0;
 if (+HEAPF64[i29 + 16 >> 3] != +0) {
  __ZN7WebCore9TimerBase4stopEv(i2);
 }
 __ZN7WebCore9TimerBase5startEdd(i2, +2, +0);
 STACKTOP = i7;
 return;
}
function __ZN7WebCore10ShadowBlur27drawRectShadowWithoutTilingEPNS_15GraphicsContextERKNS_9FloatRectERKNS_11RoundedRect5RadiiERKNS_7IntRectE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, d22 = +0, i23 = 0, d24 = +0, i25 = 0, i26 = 0, i27 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6 | 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 if (HEAP8[H_BASE + 56 | 0] | 0) {
  i18 = HEAP32[H_BASE + 64 >> 2] | 0;
 } else {
  i19 = __ZN3WTF10fastMallocEj(160) | 0;
  i20 = i19;
  HEAP32[i19 >> 2] = 0;
  i21 = i19 + 8 | 0;
  __ZN7WebCore9TimerBaseC2Ev(i21);
  HEAP32[i21 >> 2] = H_BASE + 32;
  HEAP32[i19 + 52 >> 2] = i20;
  i21 = i19 + 56 | 0;
  HEAP32[i21 >> 2] = F_BASE_vii + 2;
  HEAP32[i21 + 4 >> 2] = 0;
  HEAPF32[i19 + 140 >> 2] = +0;
  HEAPF32[i19 + 144 >> 2] = +0;
  HEAP8[i19 + 148 | 0] = 0;
  HEAPF32[i19 + 152 >> 2] = +0;
  HEAPF32[i19 + 156 >> 2] = +0;
  _memset(i19 + 64 | 0, 0, 69) | 0;
  HEAP32[H_BASE + 64 >> 2] = i20;
  HEAP8[H_BASE + 56 | 0] = 1;
  i18 = i20;
 }
 i20 = i5 + 8 | 0;
 i5 = HEAP32[i20 + 4 >> 2] | 0;
 HEAP32[i7 >> 2] = HEAP32[i20 >> 2];
 HEAP32[i7 + 4 >> 2] = i5;
 i5 = __ZN7WebCore13ScratchBuffer16getScratchBufferERKNS_7IntSizeE(i18, i7) | 0;
 i7 = i1 + 32 | 0;
 HEAP32[i7 >> 2] = i5;
 if ((i5 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i5 = i8;
 i18 = i3;
 HEAP32[i5 >> 2] = HEAP32[i18 >> 2];
 HEAP32[i5 + 4 >> 2] = HEAP32[i18 + 4 >> 2];
 HEAP32[i5 + 8 >> 2] = HEAP32[i18 + 8 >> 2];
 HEAP32[i5 + 12 >> 2] = HEAP32[i18 + 12 >> 2];
 i18 = i1 + 68 | 0;
 i5 = i1 + 72 | 0;
 d22 = +HEAPF32[i5 >> 2];
 i20 = i8 | 0;
 HEAPF32[i20 >> 2] = +HEAPF32[i18 >> 2] + +HEAPF32[i20 >> 2];
 i20 = i8 + 4 | 0;
 HEAPF32[i20 >> 2] = d22 + +HEAPF32[i20 >> 2];
 if (HEAP8[H_BASE + 56 | 0] | 0) {
  i23 = HEAP32[H_BASE + 64 >> 2] | 0;
 } else {
  i20 = __ZN3WTF10fastMallocEj(160) | 0;
  i19 = i20;
  HEAP32[i20 >> 2] = 0;
  i21 = i20 + 8 | 0;
  __ZN7WebCore9TimerBaseC2Ev(i21);
  HEAP32[i21 >> 2] = H_BASE + 32;
  HEAP32[i20 + 52 >> 2] = i19;
  i21 = i20 + 56 | 0;
  HEAP32[i21 >> 2] = F_BASE_vii + 2;
  HEAP32[i21 + 4 >> 2] = 0;
  HEAPF32[i20 + 140 >> 2] = +0;
  HEAPF32[i20 + 144 >> 2] = +0;
  HEAP8[i20 + 148 | 0] = 0;
  HEAPF32[i20 + 152 >> 2] = +0;
  HEAPF32[i20 + 156 >> 2] = +0;
  _memset(i20 + 64 | 0, 0, 69) | 0;
  HEAP32[H_BASE + 64 >> 2] = i19;
  HEAP8[H_BASE + 56 | 0] = 1;
  i23 = i19;
 }
 HEAP32[i9 >> 2] = -16777216;
 HEAP8[i9 + 4 | 0] = 1;
 i19 = i1 + 60 | 0;
 if (__ZN7WebCore13ScratchBuffer21setCachedShadowValuesERKNS_9FloatSizeERKNS_5ColorENS_10ColorSpaceERKNS_9FloatRectERKNS_11RoundedRect5RadiiES3_(i23, i1 + 16 | 0, i9, 0, i8, i4, i19) | 0) {
  i8 = __ZNK7WebCore11ImageBuffer7contextEv(HEAP32[i7 >> 2] | 0) | 0;
  __ZN7WebCore15GraphicsContext4saveEv(i8);
  i9 = i19 | 0;
  d22 = +HEAPF32[i9 >> 2] + +1;
  i19 = i1 + 64 | 0;
  d24 = +HEAPF32[i19 >> 2] + +1;
  HEAPF32[i10 >> 2] = +0;
  HEAPF32[i10 + 4 >> 2] = +0;
  HEAPF32[i10 + 8 >> 2] = d22;
  HEAPF32[i10 + 12 >> 2] = d24;
  __ZN7WebCore15GraphicsContext9clearRectERKNS_9FloatRectE(i8, i10);
  __ZN7WebCore15GraphicsContext9translateEff(i8, +HEAPF32[i18 >> 2], +HEAPF32[i5 >> 2]);
  HEAP32[i11 >> 2] = -16777216;
  HEAP8[i11 + 4 | 0] = 1;
  __ZN7WebCore15GraphicsContext12setFillColorERKNS_5ColorENS_10ColorSpaceE(i8, i11, 0);
  if (__ZNK7WebCore11RoundedRect5Radii6isZeroEv(i4) | 0) {
   __ZN7WebCore15GraphicsContext8fillRectERKNS_9FloatRectE(i8, i3);
  } else {
   __ZN7WebCore4PathC1Ev(i12);
   __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i13, i4 | 0);
   __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i14, i4 + 8 | 0);
   __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i15, i4 + 16 | 0);
   __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i16, i4 + 24 | 0);
   __ZN7WebCore4Path14addRoundedRectERKNS_9FloatRectERKNS_9FloatSizeES6_S6_S6_NS0_19RoundedRectStrategyE(i12, i3, i13, i14, i15, i16, 0);
   __ZN7WebCore15GraphicsContext8fillPathERKNS_4PathE(i8, i12);
   __ZN7WebCore4PathD1Ev(i12);
  }
  d24 = +Math_ceil(+HEAPF32[i9 >> 2]);
  do {
   if (d24 < +2147483647) {
    if (d24 <= +-2147483648) {
     i25 = -2147483648;
     break;
    }
    i25 = ~~d24;
   } else {
    i25 = 2147483647;
   }
  } while (0);
  d24 = +Math_ceil(+HEAPF32[i19 >> 2]);
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
  HEAP32[i17 >> 2] = i25;
  HEAP32[i17 + 4 >> 2] = i26;
  __ZN7WebCore10ShadowBlur16blurShadowBufferERKNS_7IntSizeE(i1, i17);
  __ZN7WebCore15GraphicsContext7restoreEv(i8);
 }
 __ZN7WebCore10ShadowBlur16drawShadowBufferEPNS_15GraphicsContextE(i1, i2);
 HEAP32[i7 >> 2] = 0;
 if (HEAP8[H_BASE + 56 | 0] | 0) {
  i27 = HEAP32[H_BASE + 64 >> 2] | 0;
 } else {
  i7 = __ZN3WTF10fastMallocEj(160) | 0;
  i2 = i7;
  HEAP32[i7 >> 2] = 0;
  i1 = i7 + 8 | 0;
  __ZN7WebCore9TimerBaseC2Ev(i1);
  HEAP32[i1 >> 2] = H_BASE + 32;
  HEAP32[i7 + 52 >> 2] = i2;
  i1 = i7 + 56 | 0;
  HEAP32[i1 >> 2] = F_BASE_vii + 2;
  HEAP32[i1 + 4 >> 2] = 0;
  HEAPF32[i7 + 140 >> 2] = +0;
  HEAPF32[i7 + 144 >> 2] = +0;
  HEAP8[i7 + 148 | 0] = 0;
  HEAPF32[i7 + 152 >> 2] = +0;
  HEAPF32[i7 + 156 >> 2] = +0;
  _memset(i7 + 64 | 0, 0, 69) | 0;
  HEAP32[H_BASE + 64 >> 2] = i2;
  HEAP8[H_BASE + 56 | 0] = 1;
  i27 = i2;
 }
 i2 = i27 + 8 | 0;
 if (+HEAPF64[i27 + 16 >> 3] != +0) {
  __ZN7WebCore9TimerBase4stopEv(i2);
 }
 __ZN7WebCore9TimerBase5startEdd(i2, +2, +0);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore10ShadowBlur15drawInsetShadowEPNS_15GraphicsContextERKNS_9FloatRectES5_RKNS_11RoundedRect5RadiiE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, d14 = +0, d15 = +0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 136 | 0;
 i7 = i6 | 0;
 i8 = i6 + 48 | 0;
 i9 = i6 + 64 | 0;
 i10 = i6 + 80 | 0;
 i11 = i6 + 128 | 0;
 i12 = i11;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 __ZNK7WebCore15GraphicsContext10clipBoundsEv(i9, i2);
 __ZN7WebCore10ShadowBlur26calculateLayerBoundingRectEPNS_15GraphicsContextERKNS_9FloatRectERKNS_7IntRectE(i8, i1, i2, i3, i9);
 if ((HEAP32[i8 + 8 >> 2] | 0) < 1) {
  STACKTOP = i6;
  return;
 }
 if ((HEAP32[i8 + 12 >> 2] | 0) < 1) {
  STACKTOP = i6;
  return;
 }
 if ((HEAP8[i1 + 76 | 0] & 1) != 0) {
  __ZNK7WebCore15GraphicsContext6getCTMENS0_18IncludeDeviceScaleE(i7, i2, 1);
  d14 = +1 / +__ZNK7WebCore15AffineTransform6xScaleEv(i7);
  d15 = +1 / +__ZNK7WebCore15AffineTransform6yScaleEv(i7);
  i7 = i1 + 16 | 0;
  HEAPF32[i7 >> 2] = d14 * +HEAPF32[i7 >> 2];
  i7 = i1 + 20 | 0;
  HEAPF32[i7 >> 2] = d15 * +HEAPF32[i7 >> 2];
 }
 __ZNK7WebCore15GraphicsContext6getCTMENS0_18IncludeDeviceScaleE(i10, i2, 1);
 if (+HEAPF64[i10 + 8 >> 3] == +0) {
  if (+HEAPF64[i10 + 16 >> 3] == +0) {
   i16 = 9;
  } else {
   i16 = 7;
  }
 } else {
  i16 = 7;
 }
 do {
  if ((i16 | 0) == 7) {
   if (+HEAPF64[i10 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i10 + 24 >> 3] == +0) {
    i16 = 9;
   }
  }
 } while (0);
 do {
  if ((i16 | 0) == 9) {
   if ((HEAP32[i1 >> 2] | 0) != 2) {
    break;
   }
   d15 = +Math_ceil(+HEAPF32[i1 + 16 >> 2]);
   do {
    if (d15 < +2147483647) {
     if (d15 <= +-2147483648) {
      i17 = -2147483648;
      break;
     }
     i17 = ~~d15;
    } else {
     i17 = 2147483647;
    }
   } while (0);
   d15 = +Math_ceil(+HEAPF32[i1 + 20 >> 2]);
   do {
    if (d15 < +2147483647) {
     if (d15 <= +-2147483648) {
      i18 = -2147483648;
      break;
     }
     i18 = ~~d15;
    } else {
     i18 = 2147483647;
    }
   } while (0);
   i10 = i11;
   HEAP32[i10 >> 2] = i17;
   i7 = i12 + 4 | 0;
   HEAP32[i7 >> 2] = i18;
   if ((i17 | 0) == 1) {
    HEAP32[i10 >> 2] = 2;
   }
   if ((i18 | 0) == 1) {
    HEAP32[i7 >> 2] = 2;
   }
   i7 = HEAP32[i5 >> 2] | 0;
   i10 = HEAP32[i5 + 16 >> 2] | 0;
   i9 = HEAP32[i5 + 8 >> 2] | 0;
   i19 = HEAP32[i5 + 24 >> 2] | 0;
   i20 = HEAP32[i5 + 4 >> 2] | 0;
   i21 = HEAP32[i5 + 12 >> 2] | 0;
   i22 = HEAP32[i5 + 20 >> 2] | 0;
   i23 = HEAP32[i5 + 28 >> 2] | 0;
   i24 = ((i7 | 0) < (i10 | 0) ? i10 : i7) + 1 + (~~(+(HEAP32[i11 >> 2] | 0) * +2) << 1) + ((i9 | 0) < (i19 | 0) ? i19 : i9) | 0;
   i9 = (~~(+(HEAP32[i11 + 4 >> 2] | 0) * +2) << 1 | 1) + ((i20 | 0) < (i21 | 0) ? i21 : i20) + ((i22 | 0) < (i23 | 0) ? i23 : i22) | 0;
   HEAP32[i13 >> 2] = i24;
   HEAP32[i13 + 4 >> 2] = i9;
   d15 = +HEAPF32[i4 + 8 >> 2];
   do {
    if (+(i24 | 0) <= d15) {
     d14 = +HEAPF32[i4 + 12 >> 2];
     if (+(i9 | 0) > d14) {
      break;
     }
     if (+(Math_imul(i9, i24) | 0) > d15 * d14) {
      break;
     }
     __ZN7WebCore10ShadowBlur25drawInsetShadowWithTilingEPNS_15GraphicsContextERKNS_9FloatRectES5_RKNS_11RoundedRect5RadiiERKNS_7IntSizeESC_(i1, i2, i3, i4, i5, i13, i12);
     STACKTOP = i6;
     return;
    }
   } while (0);
   __ZN7WebCore10ShadowBlur28drawInsetShadowWithoutTilingEPNS_15GraphicsContextERKNS_9FloatRectES5_RKNS_11RoundedRect5RadiiERKNS_7IntRectE(i1, i2, i3, i4, i5, i8);
   STACKTOP = i6;
   return;
  }
 } while (0);
 __ZN7WebCore10ShadowBlur28drawInsetShadowWithoutTilingEPNS_15GraphicsContextERKNS_9FloatRectES5_RKNS_11RoundedRect5RadiiERKNS_7IntRectE(i1, i2, i3, i4, i5, i8);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore10ShadowBlur14drawRectShadowEPNS_15GraphicsContextERKNS_9FloatRectERKNS_11RoundedRect5RadiiE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, d13 = +0, d14 = +0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 136 | 0;
 i6 = i5 | 0;
 i7 = i5 + 48 | 0;
 i8 = i5 + 64 | 0;
 i9 = i5 + 80 | 0;
 i10 = i5 + 128 | 0;
 i11 = i10;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 __ZNK7WebCore15GraphicsContext10clipBoundsEv(i8, i2);
 __ZN7WebCore10ShadowBlur26calculateLayerBoundingRectEPNS_15GraphicsContextERKNS_9FloatRectERKNS_7IntRectE(i7, i1, i2, i3, i8);
 if ((HEAP32[i7 + 8 >> 2] | 0) < 1) {
  STACKTOP = i5;
  return;
 }
 if ((HEAP32[i7 + 12 >> 2] | 0) < 1) {
  STACKTOP = i5;
  return;
 }
 if ((HEAP8[i1 + 76 | 0] & 1) != 0) {
  __ZNK7WebCore15GraphicsContext6getCTMENS0_18IncludeDeviceScaleE(i6, i2, 1);
  d13 = +1 / +__ZNK7WebCore15AffineTransform6xScaleEv(i6);
  d14 = +1 / +__ZNK7WebCore15AffineTransform6yScaleEv(i6);
  i6 = i1 + 16 | 0;
  HEAPF32[i6 >> 2] = d13 * +HEAPF32[i6 >> 2];
  i6 = i1 + 20 | 0;
  HEAPF32[i6 >> 2] = d14 * +HEAPF32[i6 >> 2];
 }
 __ZNK7WebCore15GraphicsContext6getCTMENS0_18IncludeDeviceScaleE(i9, i2, 1);
 if (+HEAPF64[i9 + 8 >> 3] == +0) {
  if (+HEAPF64[i9 + 16 >> 3] == +0) {
   i15 = 9;
  } else {
   i15 = 7;
  }
 } else {
  i15 = 7;
 }
 do {
  if ((i15 | 0) == 7) {
   if (+HEAPF64[i9 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i9 + 24 >> 3] == +0) {
    i15 = 9;
   }
  }
 } while (0);
 do {
  if ((i15 | 0) == 9) {
   if ((HEAP32[i1 >> 2] | 0) != 2) {
    break;
   }
   d14 = +Math_ceil(+HEAPF32[i1 + 16 >> 2]);
   do {
    if (d14 < +2147483647) {
     if (d14 <= +-2147483648) {
      i16 = -2147483648;
      break;
     }
     i16 = ~~d14;
    } else {
     i16 = 2147483647;
    }
   } while (0);
   d14 = +Math_ceil(+HEAPF32[i1 + 20 >> 2]);
   do {
    if (d14 < +2147483647) {
     if (d14 <= +-2147483648) {
      i17 = -2147483648;
      break;
     }
     i17 = ~~d14;
    } else {
     i17 = 2147483647;
    }
   } while (0);
   i9 = i10;
   HEAP32[i9 >> 2] = i16;
   i6 = i11 + 4 | 0;
   HEAP32[i6 >> 2] = i17;
   if ((i16 | 0) == 1) {
    HEAP32[i9 >> 2] = 2;
   }
   if ((i17 | 0) == 1) {
    HEAP32[i6 >> 2] = 2;
   }
   i6 = HEAP32[i4 >> 2] | 0;
   i9 = HEAP32[i4 + 16 >> 2] | 0;
   i8 = HEAP32[i4 + 8 >> 2] | 0;
   i18 = HEAP32[i4 + 24 >> 2] | 0;
   i19 = HEAP32[i4 + 4 >> 2] | 0;
   i20 = HEAP32[i4 + 12 >> 2] | 0;
   i21 = HEAP32[i4 + 20 >> 2] | 0;
   i22 = HEAP32[i4 + 28 >> 2] | 0;
   i23 = ((i6 | 0) < (i9 | 0) ? i9 : i6) + 1 + (~~(+(HEAP32[i10 >> 2] | 0) * +2) << 1) + ((i8 | 0) < (i18 | 0) ? i18 : i8) | 0;
   i8 = (~~(+(HEAP32[i10 + 4 >> 2] | 0) * +2) << 1 | 1) + ((i19 | 0) < (i20 | 0) ? i20 : i19) + ((i21 | 0) < (i22 | 0) ? i22 : i21) | 0;
   HEAP32[i12 >> 2] = i23;
   HEAP32[i12 + 4 >> 2] = i8;
   do {
    if (+(i23 | 0) <= +HEAPF32[i3 + 8 >> 2]) {
     if (+(i8 | 0) > +HEAPF32[i3 + 12 >> 2]) {
      break;
     }
     d14 = +(Math_imul(i8, i23) | 0);
     if (d14 > +HEAPF32[i1 + 44 >> 2] * +HEAPF32[i1 + 48 >> 2]) {
      break;
     }
     __ZN7WebCore10ShadowBlur24drawRectShadowWithTilingEPNS_15GraphicsContextERKNS_9FloatRectERKNS_11RoundedRect5RadiiERKNS_7IntSizeESC_(i1, i2, i3, i4, i12, i11);
     STACKTOP = i5;
     return;
    }
   } while (0);
   __ZN7WebCore10ShadowBlur27drawRectShadowWithoutTilingEPNS_15GraphicsContextERKNS_9FloatRectERKNS_11RoundedRect5RadiiERKNS_7IntRectE(i1, i2, i3, i4, i7);
   STACKTOP = i5;
   return;
  }
 } while (0);
 __ZN7WebCore10ShadowBlur27drawRectShadowWithoutTilingEPNS_15GraphicsContextERKNS_9FloatRectERKNS_11RoundedRect5RadiiERKNS_7IntRectE(i1, i2, i3, i4, i7);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore10ShadowBlur14endShadowLayerEPNS_15GraphicsContextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, d10 = +0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, d15 = +0, i16 = 0, i17 = 0, i18 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 24 | 0;
 i7 = i3 + 32 | 0;
 i8 = i1 + 32 | 0;
 __ZN7WebCore15GraphicsContext7restoreEv(__ZNK7WebCore11ImageBuffer7contextEv(HEAP32[i8 >> 2] | 0) | 0);
 i9 = i1 + 60 | 0;
 d10 = +Math_ceil(+HEAPF32[i9 >> 2]);
 do {
  if (d10 < +2147483647) {
   if (d10 <= +-2147483648) {
    i11 = -2147483648;
    break;
   }
   i11 = ~~d10;
  } else {
   i11 = 2147483647;
  }
 } while (0);
 i12 = i1 + 64 | 0;
 d10 = +Math_ceil(+HEAPF32[i12 >> 2]);
 do {
  if (d10 < +2147483647) {
   if (d10 <= +-2147483648) {
    i13 = -2147483648;
    break;
   }
   i13 = ~~d10;
  } else {
   i13 = 2147483647;
  }
 } while (0);
 i14 = i5 | 0;
 HEAP32[i14 >> 2] = i11;
 i11 = i5 + 4 | 0;
 HEAP32[i11 >> 2] = i13;
 __ZN7WebCore10ShadowBlur16blurShadowBufferERKNS_7IntSizeE(i1, i5);
 i5 = __ZNK7WebCore11ImageBuffer7contextEv(HEAP32[i8 >> 2] | 0) | 0;
 __ZN7WebCore15GraphicsContext4saveEv(i5);
 __ZN7WebCore15GraphicsContext21setCompositeOperationENS_17CompositeOperatorENS_9BlendModeE(i5, 3, 0);
 __ZN7WebCore15GraphicsContext12setFillColorERKNS_5ColorENS_10ColorSpaceE(i5, i1 + 4 | 0, HEAP32[i1 + 12 >> 2] | 0);
 d10 = +(HEAP32[i14 >> 2] | 0);
 d15 = +(HEAP32[i11 >> 2] | 0);
 HEAPF32[i4 >> 2] = +0;
 HEAPF32[i4 + 4 >> 2] = +0;
 HEAPF32[i4 + 8 >> 2] = d10;
 HEAPF32[i4 + 12 >> 2] = d15;
 __ZN7WebCore15GraphicsContext8fillRectERKNS_9FloatRectE(i5, i4);
 __ZN7WebCore15GraphicsContext7restoreEv(i5);
 __ZN7WebCore15GraphicsContext4saveEv(i2);
 __ZN7WebCore15GraphicsContext11clearShadowEv(i2);
 i5 = HEAP32[i8 >> 2] | 0;
 d15 = +_round(+(+HEAPF32[i1 + 52 >> 2]));
 do {
  if (d15 < +2147483647) {
   if (d15 <= +-2147483648) {
    i16 = -2147483648;
    break;
   }
   i16 = ~~d15;
  } else {
   i16 = 2147483647;
  }
 } while (0);
 d15 = +_round(+(+HEAPF32[i1 + 56 >> 2]));
 do {
  if (d15 < +2147483647) {
   if (d15 <= +-2147483648) {
    i17 = -2147483648;
    break;
   }
   i17 = ~~d15;
  } else {
   i17 = 2147483647;
  }
 } while (0);
 HEAP32[i6 >> 2] = i16;
 HEAP32[i6 + 4 >> 2] = i17;
 i17 = ~~+HEAPF32[i9 >> 2];
 i9 = ~~+HEAPF32[i12 >> 2];
 HEAP32[i7 >> 2] = 0;
 HEAP32[i7 + 4 >> 2] = 0;
 HEAP32[i7 + 8 >> 2] = i17;
 HEAP32[i7 + 12 >> 2] = i9;
 __ZN7WebCore15GraphicsContext15drawImageBufferEPNS_11ImageBufferENS_10ColorSpaceERKNS_8IntPointERKNS_7IntRectENS_17CompositeOperatorENS_9BlendModeE(i2, i5, 0, i6, i7, __ZNK7WebCore15GraphicsContext18compositeOperationEv(i2) | 0, 0);
 HEAP32[i8 >> 2] = 0;
 if (HEAP8[H_BASE + 56 | 0] | 0) {
  i18 = HEAP32[H_BASE + 64 >> 2] | 0;
 } else {
  i8 = __ZN3WTF10fastMallocEj(160) | 0;
  i7 = i8;
  HEAP32[i8 >> 2] = 0;
  i6 = i8 + 8 | 0;
  __ZN7WebCore9TimerBaseC2Ev(i6);
  HEAP32[i6 >> 2] = H_BASE + 32;
  HEAP32[i8 + 52 >> 2] = i7;
  i6 = i8 + 56 | 0;
  HEAP32[i6 >> 2] = F_BASE_vii + 2;
  HEAP32[i6 + 4 >> 2] = 0;
  HEAPF32[i8 + 140 >> 2] = +0;
  HEAPF32[i8 + 144 >> 2] = +0;
  HEAP8[i8 + 148 | 0] = 0;
  HEAPF32[i8 + 152 >> 2] = +0;
  HEAPF32[i8 + 156 >> 2] = +0;
  _memset(i8 + 64 | 0, 0, 69) | 0;
  HEAP32[H_BASE + 64 >> 2] = i7;
  HEAP8[H_BASE + 56 | 0] = 1;
  i18 = i7;
 }
 i7 = i18 + 8 | 0;
 if (+HEAPF64[i18 + 16 >> 3] == +0) {
  __ZN7WebCore9TimerBase5startEdd(i7, +2, +0);
  __ZN7WebCore15GraphicsContext7restoreEv(i2);
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore9TimerBase4stopEv(i7);
 __ZN7WebCore9TimerBase5startEdd(i7, +2, +0);
 __ZN7WebCore15GraphicsContext7restoreEv(i2);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore10ShadowBlur16beginShadowLayerEPNS_15GraphicsContextERKNS_9FloatRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, d15 = +0, d16 = +0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 168 | 0;
 i5 = i4 | 0;
 i6 = i4 + 48 | 0;
 i7 = i4 + 64 | 0;
 i8 = i4 + 80 | 0;
 i9 = i4 + 88 | 0;
 i10 = i4 + 96 | 0;
 i11 = i4 + 112 | 0;
 i12 = i4 + 128 | 0;
 i13 = i4 + 160 | 0;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((HEAP8[i1 + 76 | 0] & 1) != 0) {
  __ZNK7WebCore15GraphicsContext6getCTMENS0_18IncludeDeviceScaleE(i5, i2, 1);
  d15 = +1 / +__ZNK7WebCore15AffineTransform6xScaleEv(i5);
  d16 = +1 / +__ZNK7WebCore15AffineTransform6yScaleEv(i5);
  i5 = i1 + 16 | 0;
  HEAPF32[i5 >> 2] = d15 * +HEAPF32[i5 >> 2];
  i5 = i1 + 20 | 0;
  HEAPF32[i5 >> 2] = d16 * +HEAPF32[i5 >> 2];
 }
 __ZNK7WebCore15GraphicsContext10clipBoundsEv(i7, i2);
 __ZN7WebCore10ShadowBlur26calculateLayerBoundingRectEPNS_15GraphicsContextERKNS_9FloatRectERKNS_7IntRectE(i6, i1, i2, i3, i7);
 if ((HEAP32[i6 + 8 >> 2] | 0) < 1) {
  i17 = 0;
  STACKTOP = i4;
  return i17 | 0;
 }
 if ((HEAP32[i6 + 12 >> 2] | 0) < 1) {
  i17 = 0;
  STACKTOP = i4;
  return i17 | 0;
 }
 if (HEAP8[H_BASE + 56 | 0] | 0) {
  i18 = HEAP32[H_BASE + 64 >> 2] | 0;
 } else {
  i7 = __ZN3WTF10fastMallocEj(160) | 0;
  i3 = i7;
  HEAP32[i7 >> 2] = 0;
  i2 = i7 + 8 | 0;
  __ZN7WebCore9TimerBaseC2Ev(i2);
  HEAP32[i2 >> 2] = H_BASE + 32;
  HEAP32[i7 + 52 >> 2] = i3;
  i2 = i7 + 56 | 0;
  HEAP32[i2 >> 2] = F_BASE_vii + 2;
  HEAP32[i2 + 4 >> 2] = 0;
  HEAPF32[i7 + 140 >> 2] = +0;
  HEAPF32[i7 + 144 >> 2] = +0;
  HEAP8[i7 + 148 | 0] = 0;
  HEAPF32[i7 + 152 >> 2] = +0;
  HEAPF32[i7 + 156 >> 2] = +0;
  _memset(i7 + 64 | 0, 0, 69) | 0;
  HEAP32[H_BASE + 64 >> 2] = i3;
  HEAP8[H_BASE + 56 | 0] = 1;
  i18 = i3;
 }
 HEAPF32[i8 >> 2] = +0;
 HEAPF32[i8 + 4 >> 2] = +0;
 HEAP32[i9 >> 2] = -16777216;
 HEAP8[i9 + 4 | 0] = 1;
 _memset(i11 | 0, 0, 16) | 0;
 __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i10, i11);
 _memset(i12 | 0, 0, 32) | 0;
 i11 = i1 + 60 | 0;
 __ZN7WebCore13ScratchBuffer21setCachedShadowValuesERKNS_9FloatSizeERKNS_5ColorENS_10ColorSpaceERKNS_9FloatRectERKNS_11RoundedRect5RadiiES3_(i18, i8, i9, 0, i10, i12, i11) | 0;
 if (HEAP8[H_BASE + 56 | 0] | 0) {
  i19 = HEAP32[H_BASE + 64 >> 2] | 0;
 } else {
  i12 = __ZN3WTF10fastMallocEj(160) | 0;
  i10 = i12;
  HEAP32[i12 >> 2] = 0;
  i9 = i12 + 8 | 0;
  __ZN7WebCore9TimerBaseC2Ev(i9);
  HEAP32[i9 >> 2] = H_BASE + 32;
  HEAP32[i12 + 52 >> 2] = i10;
  i9 = i12 + 56 | 0;
  HEAP32[i9 >> 2] = F_BASE_vii + 2;
  HEAP32[i9 + 4 >> 2] = 0;
  HEAPF32[i12 + 140 >> 2] = +0;
  HEAPF32[i12 + 144 >> 2] = +0;
  HEAP8[i12 + 148 | 0] = 0;
  HEAPF32[i12 + 152 >> 2] = +0;
  HEAPF32[i12 + 156 >> 2] = +0;
  _memset(i12 + 64 | 0, 0, 69) | 0;
  HEAP32[H_BASE + 64 >> 2] = i10;
  HEAP8[H_BASE + 56 | 0] = 1;
  i19 = i10;
 }
 i10 = i6 + 8 | 0;
 i6 = HEAP32[i10 + 4 >> 2] | 0;
 HEAP32[i13 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i13 + 4 >> 2] = i6;
 i6 = __ZN7WebCore13ScratchBuffer16getScratchBufferERKNS_7IntSizeE(i19, i13) | 0;
 HEAP32[i1 + 32 >> 2] = i6;
 i13 = __ZNK7WebCore11ImageBuffer7contextEv(i6) | 0;
 __ZN7WebCore15GraphicsContext4saveEv(i13);
 d16 = +HEAPF32[i11 >> 2] + +1;
 d15 = +HEAPF32[i1 + 64 >> 2] + +1;
 HEAPF32[i14 >> 2] = +0;
 HEAPF32[i14 + 4 >> 2] = +0;
 HEAPF32[i14 + 8 >> 2] = d16;
 HEAPF32[i14 + 12 >> 2] = d15;
 __ZN7WebCore15GraphicsContext9clearRectERKNS_9FloatRectE(i13, i14);
 __ZN7WebCore15GraphicsContext9translateEff(i13, +HEAPF32[i1 + 68 >> 2], +HEAPF32[i1 + 72 >> 2]);
 i17 = i13;
 STACKTOP = i4;
 return i17 | 0;
}
function __ZN7WebCore13ScratchBuffer26setCachedInsetShadowValuesERKNS_9FloatSizeERKNS_5ColorENS_10ColorSpaceERKNS_9FloatRectESA_RKNS_11RoundedRect5RadiiE(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, d10 = +0, d11 = +0, d12 = +0, i13 = 0, i14 = 0;
 i8 = i1 + 148 | 0;
 do {
  if ((HEAP8[i8] & 1) != 0) {
   if (+HEAPF32[i1 + 140 >> 2] != +HEAPF32[i2 >> 2]) {
    break;
   }
   if (+HEAPF32[i1 + 144 >> 2] != +HEAPF32[i2 + 4 >> 2]) {
    break;
   }
   if ((HEAP32[i1 + 128 >> 2] | 0) != (HEAP32[i3 >> 2] | 0)) {
    break;
   }
   if ((HEAP8[i1 + 132 | 0] & 1) != 0 ^ (HEAP8[i3 + 4 | 0] & 1) != 0) {
    break;
   }
   if ((HEAP32[i1 + 136 >> 2] | 0) != (i4 | 0)) {
    break;
   }
   i9 = i1 + 64 | 0;
   d10 = +HEAPF32[i9 >> 2];
   d11 = +HEAPF32[i9 + 4 >> 2];
   i9 = i5;
   d12 = +HEAPF32[i9 >> 2];
   if (!(d10 == d12 & d11 == +HEAPF32[i9 + 4 >> 2])) {
    break;
   }
   i9 = i1 + 72 | 0;
   d11 = +HEAPF32[i9 >> 2];
   i13 = i5 + 8 | 0;
   if (d11 != +HEAPF32[i13 >> 2]) {
    break;
   }
   d11 = +HEAPF32[i13 + 4 >> 2];
   if (+HEAPF32[i9 + 4 >> 2] != d11) {
    break;
   }
   i9 = i6;
   d11 = +HEAPF32[i9 >> 2];
   d12 = +HEAPF32[i9 + 4 >> 2];
   i9 = i1 + 80 | 0;
   d10 = +HEAPF32[i9 >> 2];
   if (!(d11 == d10 & d12 == +HEAPF32[i9 + 4 >> 2])) {
    break;
   }
   i9 = i6 + 8 | 0;
   d12 = +HEAPF32[i9 >> 2];
   i13 = i1 + 88 | 0;
   if (d12 != +HEAPF32[i13 >> 2]) {
    break;
   }
   d12 = +HEAPF32[i13 + 4 >> 2];
   if (+HEAPF32[i9 + 4 >> 2] != d12) {
    break;
   }
   if ((HEAP32[i7 >> 2] | 0) != (HEAP32[i1 + 96 >> 2] | 0)) {
    break;
   }
   if ((HEAP32[i7 + 4 >> 2] | 0) != (HEAP32[i1 + 100 >> 2] | 0)) {
    break;
   }
   if ((HEAP32[i7 + 8 >> 2] | 0) != (HEAP32[i1 + 104 >> 2] | 0)) {
    break;
   }
   if ((HEAP32[i7 + 12 >> 2] | 0) != (HEAP32[i1 + 108 >> 2] | 0)) {
    break;
   }
   if ((HEAP32[i7 + 16 >> 2] | 0) != (HEAP32[i1 + 112 >> 2] | 0)) {
    break;
   }
   if ((HEAP32[i7 + 20 >> 2] | 0) != (HEAP32[i1 + 116 >> 2] | 0)) {
    break;
   }
   if ((HEAP32[i7 + 24 >> 2] | 0) != (HEAP32[i1 + 120 >> 2] | 0)) {
    break;
   }
   if ((HEAP32[i7 + 28 >> 2] | 0) == (HEAP32[i1 + 124 >> 2] | 0)) {
    i14 = 0;
   } else {
    break;
   }
   return i14 | 0;
  }
 } while (0);
 HEAP8[i8] = 1;
 i8 = i1 + 64 | 0;
 i9 = i5;
 HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i8 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
 HEAP32[i8 + 8 >> 2] = HEAP32[i9 + 8 >> 2];
 HEAP32[i8 + 12 >> 2] = HEAP32[i9 + 12 >> 2];
 i9 = i2;
 i2 = i1 + 140 | 0;
 i8 = HEAP32[i9 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i2 + 4 >> 2] = i8;
 i8 = i1 + 128 | 0;
 i2 = i3;
 HEAP32[i8 >> 2] = HEAP32[i2 >> 2];
 HEAP8[i8 + 4 | 0] = HEAP8[i2 + 4 | 0] | 0;
 HEAP32[i1 + 136 >> 2] = i4;
 i4 = i1 + 80 | 0;
 i2 = i6;
 HEAP32[i4 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i4 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 HEAP32[i4 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAP32[i4 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
 _memcpy(i1 + 96 | 0, i7 | 0, 32) | 0;
 i14 = 1;
 return i14 | 0;
}
function __ZN7WebCore13ScratchBuffer21setCachedShadowValuesERKNS_9FloatSizeERKNS_5ColorENS_10ColorSpaceERKNS_9FloatRectERKNS_11RoundedRect5RadiiES3_(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, d10 = +0, d11 = +0, d12 = +0, i13 = 0, i14 = 0;
 i8 = i1 + 148 | 0;
 do {
  if ((HEAP8[i8] & 1) == 0) {
   if (+HEAPF32[i1 + 140 >> 2] != +HEAPF32[i2 >> 2]) {
    break;
   }
   if (+HEAPF32[i1 + 144 >> 2] != +HEAPF32[i2 + 4 >> 2]) {
    break;
   }
   if ((HEAP32[i1 + 128 >> 2] | 0) != (HEAP32[i3 >> 2] | 0)) {
    break;
   }
   if ((HEAP8[i1 + 132 | 0] & 1) != 0 ^ (HEAP8[i3 + 4 | 0] & 1) != 0) {
    break;
   }
   if ((HEAP32[i1 + 136 >> 2] | 0) != (i4 | 0)) {
    break;
   }
   i9 = i1 + 80 | 0;
   d10 = +HEAPF32[i9 >> 2];
   d11 = +HEAPF32[i9 + 4 >> 2];
   i9 = i5;
   d12 = +HEAPF32[i9 >> 2];
   if (!(d10 == d12 & d11 == +HEAPF32[i9 + 4 >> 2])) {
    break;
   }
   i9 = i1 + 88 | 0;
   d11 = +HEAPF32[i9 >> 2];
   i13 = i5 + 8 | 0;
   if (d11 != +HEAPF32[i13 >> 2]) {
    break;
   }
   d11 = +HEAPF32[i13 + 4 >> 2];
   if (+HEAPF32[i9 + 4 >> 2] != d11) {
    break;
   }
   if ((HEAP32[i1 + 96 >> 2] | 0) != (HEAP32[i6 >> 2] | 0)) {
    break;
   }
   if ((HEAP32[i1 + 100 >> 2] | 0) != (HEAP32[i6 + 4 >> 2] | 0)) {
    break;
   }
   if ((HEAP32[i1 + 104 >> 2] | 0) != (HEAP32[i6 + 8 >> 2] | 0)) {
    break;
   }
   if ((HEAP32[i1 + 108 >> 2] | 0) != (HEAP32[i6 + 12 >> 2] | 0)) {
    break;
   }
   if ((HEAP32[i1 + 112 >> 2] | 0) != (HEAP32[i6 + 16 >> 2] | 0)) {
    break;
   }
   if ((HEAP32[i1 + 116 >> 2] | 0) != (HEAP32[i6 + 20 >> 2] | 0)) {
    break;
   }
   if ((HEAP32[i1 + 120 >> 2] | 0) != (HEAP32[i6 + 24 >> 2] | 0)) {
    break;
   }
   if ((HEAP32[i1 + 124 >> 2] | 0) != (HEAP32[i6 + 28 >> 2] | 0)) {
    break;
   }
   if (+HEAPF32[i1 + 152 >> 2] != +HEAPF32[i7 >> 2]) {
    break;
   }
   if (+HEAPF32[i1 + 156 >> 2] == +HEAPF32[i7 + 4 >> 2]) {
    i14 = 0;
   } else {
    break;
   }
   return i14 | 0;
  }
 } while (0);
 HEAP8[i8] = 0;
 i8 = i2;
 i2 = i1 + 140 | 0;
 i9 = HEAP32[i8 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i2 + 4 >> 2] = i9;
 i9 = i1 + 128 | 0;
 i2 = i3;
 HEAP32[i9 >> 2] = HEAP32[i2 >> 2];
 HEAP8[i9 + 4 | 0] = HEAP8[i2 + 4 | 0] | 0;
 HEAP32[i1 + 136 >> 2] = i4;
 i4 = i1 + 80 | 0;
 i2 = i5;
 HEAP32[i4 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i4 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 HEAP32[i4 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAP32[i4 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
 _memcpy(i1 + 96 | 0, i6 | 0, 32) | 0;
 i6 = i7;
 i7 = i1 + 152 | 0;
 i1 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i7 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i7 + 4 >> 2] = i1;
 i14 = 1;
 return i14 | 0;
}
function __ZN7WebCore10ShadowBlur16drawShadowBufferEPNS_15GraphicsContextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i8 = i7 | 0;
 i9 = i7;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i11 = i10 | 0;
 i12 = i10;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i14 = i13;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i16 = i15 | 0;
 i17 = i15;
 i18 = i1 + 32 | 0;
 if ((HEAP32[i18 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore15GraphicsContext4saveEv(i2);
 i19 = (HEAP32[i18 >> 2] | 0) + 112 | 0;
 i20 = HEAP32[i19 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i19 >> 2];
 HEAP32[i4 + 4 >> 2] = i20;
 __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i6, i5);
 i20 = i1 + 60 | 0;
 do {
  if (+HEAPF32[i6 >> 2] != +HEAPF32[i20 >> 2]) {
   i21 = 5;
  } else {
   if (+HEAPF32[i6 + 4 >> 2] != +HEAPF32[i1 + 64 >> 2]) {
    i21 = 5;
    break;
   }
   i22 = i1 + 52 | 0;
  }
 } while (0);
 if ((i21 | 0) == 5) {
  i21 = i1 + 52 | 0;
  i6 = HEAP32[i21 + 4 >> 2] | 0;
  HEAP32[i8 >> 2] = HEAP32[i21 >> 2];
  HEAP32[i8 + 4 >> 2] = i6;
  i6 = i7 + 8 | 0;
  i7 = i20;
  i20 = HEAP32[i7 + 4 >> 2] | 0;
  HEAP32[i6 >> 2] = HEAP32[i7 >> 2];
  HEAP32[i6 + 4 >> 2] = i20;
  __ZN7WebCore15GraphicsContext4clipERKNS_9FloatRectE(i2, i9);
  i22 = i21;
 }
 i21 = HEAP32[i18 >> 2] | 0;
 __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i14, i5);
 i5 = HEAP32[i22 + 4 >> 2] | 0;
 HEAP32[i11 >> 2] = HEAP32[i22 >> 2];
 HEAP32[i11 + 4 >> 2] = i5;
 i5 = i10 + 8 | 0;
 i10 = HEAP32[i13 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i13 >> 2];
 HEAP32[i5 + 4 >> 2] = i10;
 __ZN7WebCore15GraphicsContext17clipToImageBufferEPNS_11ImageBufferERKNS_9FloatRectE(i2, i21, i12);
 __ZN7WebCore15GraphicsContext12setFillColorERKNS_5ColorENS_10ColorSpaceE(i2, i1 + 4 | 0, HEAP32[i1 + 12 >> 2] | 0);
 __ZN7WebCore15GraphicsContext11clearShadowEv(i2);
 i12 = i1 + 44 | 0;
 i1 = HEAP32[i12 >> 2] | 0;
 i21 = HEAP32[i12 + 4 >> 2] | 0;
 i12 = HEAP32[i22 + 4 >> 2] | 0;
 HEAP32[i16 >> 2] = HEAP32[i22 >> 2];
 HEAP32[i16 + 4 >> 2] = i12;
 i12 = i15 + 8 | 0;
 HEAP32[i12 >> 2] = i1;
 HEAP32[i12 + 4 >> 2] = i21;
 __ZN7WebCore15GraphicsContext8fillRectERKNS_9FloatRectE(i2, i17);
 __ZN7WebCore15GraphicsContext7restoreEv(i2);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore10ShadowBlur16blurShadowBufferERKNS_7IntSizeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i4;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i8 = i7;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i10 = i9;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 if ((HEAP32[i1 >> 2] | 0) != 2) {
  STACKTOP = i3;
  return;
 }
 i12 = i4 | 0;
 HEAP32[i12 >> 2] = 0;
 HEAP32[i12 + 4 >> 2] = 0;
 i12 = i4 + 8 | 0;
 i4 = i2;
 i2 = HEAP32[i4 + 4 >> 2] | 0;
 HEAP32[i12 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i12 + 4 >> 2] = i2;
 i2 = i1 + 32 | 0;
 __ZNK7WebCore11ImageBuffer24getUnmultipliedImageDataERKNS_7IntRectENS0_16CoordinateSystemE(i6, HEAP32[i2 >> 2] | 0, i5, 0);
 i4 = i6 | 0;
 i6 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 i4 = HEAP32[i6 + 16 >> 2] | 0;
 do {
  if ((i4 | 0) == 0) {
   i13 = 0;
  } else {
   if ((HEAP32[i4 + 12 >> 2] | 0) == 0) {
    i13 = 0;
    break;
   }
   i13 = HEAP32[i6 + 8 >> 2] | 0;
  }
 } while (0);
 i4 = HEAP32[i12 >> 2] | 0;
 i14 = HEAP32[i12 + 4 >> 2] | 0;
 HEAP32[i7 >> 2] = i4;
 HEAP32[i7 + 4 >> 2] = i14;
 __ZN7WebCore10ShadowBlur14blurLayerImageEPhRKNS_7IntSizeEi(i1, i13, i8, i4 << 2);
 i4 = HEAP32[i2 >> 2] | 0;
 i2 = HEAP32[i12 + 4 >> 2] | 0;
 HEAP32[i9 >> 2] = HEAP32[i12 >> 2];
 HEAP32[i9 + 4 >> 2] = i2;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i11 + 4 >> 2] = 0;
 __ZN7WebCore11ImageBuffer12putByteArrayENS_8MultiplyEPN3JSC21GenericTypedArrayViewINS2_19Uint8ClampedAdaptorEEERKNS_7IntSizeERKNS_7IntRectERKNS_8IntPointENS0_16CoordinateSystemE(i4, 1, i6, i10, i5, i11, 0);
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i11 = i6 + 4 | 0;
 i6 = i11 | 0;
 i5 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i6 >> 2] = i5;
  STACKTOP = i3;
  return;
 }
 i5 = i11 - 4 | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 12 >> 2] & 15](i5);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore10ShadowBlur15setShadowValuesERKNS_9FloatSizeES3_RKNS_5ColorENS_10ColorSpaceEb(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, d12 = +0, d13 = +0, d14 = +0, d15 = +0;
 i7 = i2;
 i2 = i1 + 16 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = i8;
 HEAP32[i2 + 4 >> 2] = i9;
 i7 = i3;
 i3 = i1 + 24 | 0;
 i10 = HEAP32[i7 >> 2] | 0;
 i11 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i3 >> 2] = i10;
 HEAP32[i3 + 4 >> 2] = i11;
 i3 = i1 + 4 | 0;
 i7 = i4;
 HEAP32[i3 >> 2] = HEAP32[i7 >> 2];
 HEAP8[i3 + 4 | 0] = HEAP8[i7 + 4 | 0] | 0;
 HEAP32[i1 + 12 >> 2] = i5;
 HEAP8[i1 + 76 | 0] = i6 & 1;
 i6 = (HEAP32[tempDoublePtr >> 2] = i8, +HEAPF32[tempDoublePtr >> 2]) < +128;
 i5 = i9;
 i7 = (HEAP32[tempDoublePtr >> 2] = i5, +HEAPF32[tempDoublePtr >> 2]) < +128;
 i3 = i6 ? i8 & -1 : 1124073472;
 i8 = i7 ? i5 : 1124073472;
 HEAP32[i2 >> 2] = (i7 ? 0 : 0) | i3;
 HEAP32[i2 + 4 >> 2] = i8 | (i6 ? i9 & 0 : 0);
 d12 = (HEAP32[tempDoublePtr >> 2] = i3, +HEAPF32[tempDoublePtr >> 2]);
 d13 = (HEAP32[tempDoublePtr >> 2] = i8, +HEAPF32[tempDoublePtr >> 2]);
 d14 = (HEAP32[tempDoublePtr >> 2] = i10, +HEAPF32[tempDoublePtr >> 2]);
 d15 = (HEAP32[tempDoublePtr >> 2] = i11, +HEAPF32[tempDoublePtr >> 2]);
 do {
  if ((HEAP8[i1 + 8 | 0] & 1) != 0) {
   if ((HEAP32[i1 + 4 >> 2] | 0) >>> 0 < 16777216 >>> 0) {
    break;
   }
   if (d12 > +0 | d13 > +0) {
    HEAP32[i1 >> 2] = 2;
    return;
   }
   i11 = i1 | 0;
   if (d14 != +0 | d15 != +0) {
    HEAP32[i11 >> 2] = 1;
    return;
   } else {
    HEAP32[i11 >> 2] = 0;
    return;
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZN7WebCore13ScratchBuffer16getScratchBufferERKNS_7IntSizeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = (i7 | 0) == 0;
 do {
  if (i8) {
   i9 = HEAP32[i2 >> 2] | 0;
  } else {
   i10 = HEAP32[i2 >> 2] | 0;
   if ((HEAP32[i7 + 120 >> 2] | 0) < (i10 | 0)) {
    i9 = i10;
    break;
   }
   if ((HEAP32[i7 + 124 >> 2] | 0) < (HEAP32[i2 + 4 >> 2] | 0)) {
    i9 = i10;
    break;
   } else {
    i11 = i7;
   }
   STACKTOP = i3;
   return i11 | 0;
  }
 } while (0);
 i10 = (HEAP32[i2 + 4 >> 2] | 0) + 32 & -32;
 HEAP32[i5 >> 2] = i9 + 32 & -32;
 HEAP32[i5 + 4 >> 2] = i10;
 HEAP32[i6 >> 2] = 0;
 if (!i8) {
  __ZN7WebCore11ImageBufferD1Ev(i7);
  __ZN3WTF8fastFreeEPv(i7);
 }
 i7 = i1 + 140 | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i7 + 4 >> 2] = 0;
 i7 = i1 + 152 | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i7 + 4 >> 2] = 0;
 HEAP8[i4] = 0;
 i7 = __ZN3WTF10fastMallocEj(144) | 0;
 i1 = i7;
 __ZN7WebCore11ImageBufferC1ERKNS_7IntSizeEfNS_10ColorSpaceENS_13RenderingModeERb(i1, i5, +1, 0, 0, i4);
 do {
  if ((HEAP8[i4] & 1) == 0) {
   if ((i7 | 0) == 0) {
    i12 = 0;
    break;
   }
   __ZN7WebCore11ImageBufferD1Ev(i1);
   __ZN3WTF8fastFreeEPv(i7);
   i12 = 0;
  } else {
   i12 = i1;
  }
 } while (0);
 i1 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i12;
 if ((i1 | 0) == 0) {
  i11 = i12;
  STACKTOP = i3;
  return i11 | 0;
 }
 __ZN7WebCore11ImageBufferD1Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 i11 = HEAP32[i6 >> 2] | 0;
 STACKTOP = i3;
 return i11 | 0;
}
function __ZN7WebCore10ShadowBlurC2ERKNS_9FloatSizeES3_RKNS_5ColorENS_10ColorSpaceE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, d13 = +0, d14 = +0, d15 = +0;
 i6 = i4;
 i4 = i1 + 4 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i7;
 HEAP32[i4 + 4 >> 2] = i8;
 HEAP32[i1 + 12 >> 2] = i5;
 i5 = i2;
 i2 = i1 + 16 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 i6 = HEAP32[i5 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = i4;
 HEAP32[i2 + 4 >> 2] = i6;
 i5 = i3;
 i3 = i1 + 24 | 0;
 i9 = HEAP32[i5 >> 2] | 0;
 i10 = HEAP32[i5 + 4 >> 2] | 0;
 HEAP32[i3 >> 2] = i9;
 HEAP32[i3 + 4 >> 2] = i10;
 i3 = (HEAP32[tempDoublePtr >> 2] = i4, +HEAPF32[tempDoublePtr >> 2]) < +128;
 i5 = i6;
 i11 = (HEAP32[tempDoublePtr >> 2] = i5, +HEAPF32[tempDoublePtr >> 2]) < +128;
 i12 = i3 ? i4 & -1 : 1124073472;
 i4 = i11 ? i5 : 1124073472;
 _memset(i1 + 32 | 0, 0, 45) | 0;
 HEAP32[i2 >> 2] = (i11 ? 0 : 0) | i12;
 HEAP32[i2 + 4 >> 2] = i4 | (i3 ? i6 & 0 : 0);
 d13 = (HEAP32[tempDoublePtr >> 2] = i9, +HEAPF32[tempDoublePtr >> 2]);
 d14 = (HEAP32[tempDoublePtr >> 2] = i10, +HEAPF32[tempDoublePtr >> 2]);
 if ((i7 & 0 | 0) == 0 & (i8 & 1 | 0) == 0 | i7 >>> 0 < 16777216 >>> 0) {
  HEAP32[i1 >> 2] = 0;
  return;
 }
 d15 = (HEAP32[tempDoublePtr >> 2] = i4, +HEAPF32[tempDoublePtr >> 2]);
 if ((HEAP32[tempDoublePtr >> 2] = i12, +HEAPF32[tempDoublePtr >> 2]) > +0 | d15 > +0) {
  HEAP32[i1 >> 2] = 2;
  return;
 }
 i12 = i1 | 0;
 if (d13 != +0 | d14 != +0) {
  HEAP32[i12 >> 2] = 1;
  return;
 } else {
  HEAP32[i12 >> 2] = 0;
  return;
 }
}
function __ZN7WebCore10ShadowBlurC1ERKNS_9FloatSizeES3_RKNS_5ColorENS_10ColorSpaceE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, d13 = +0, d14 = +0, d15 = +0;
 i6 = i4;
 i4 = i1 + 4 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i7;
 HEAP32[i4 + 4 >> 2] = i8;
 HEAP32[i1 + 12 >> 2] = i5;
 i5 = i2;
 i2 = i1 + 16 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 i6 = HEAP32[i5 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = i4;
 HEAP32[i2 + 4 >> 2] = i6;
 i5 = i3;
 i3 = i1 + 24 | 0;
 i9 = HEAP32[i5 >> 2] | 0;
 i10 = HEAP32[i5 + 4 >> 2] | 0;
 HEAP32[i3 >> 2] = i9;
 HEAP32[i3 + 4 >> 2] = i10;
 i3 = (HEAP32[tempDoublePtr >> 2] = i4, +HEAPF32[tempDoublePtr >> 2]) < +128;
 i5 = i6;
 i11 = (HEAP32[tempDoublePtr >> 2] = i5, +HEAPF32[tempDoublePtr >> 2]) < +128;
 i12 = i3 ? i4 & -1 : 1124073472;
 i4 = i11 ? i5 : 1124073472;
 _memset(i1 + 32 | 0, 0, 45) | 0;
 HEAP32[i2 >> 2] = (i11 ? 0 : 0) | i12;
 HEAP32[i2 + 4 >> 2] = i4 | (i3 ? i6 & 0 : 0);
 d13 = (HEAP32[tempDoublePtr >> 2] = i9, +HEAPF32[tempDoublePtr >> 2]);
 d14 = (HEAP32[tempDoublePtr >> 2] = i10, +HEAPF32[tempDoublePtr >> 2]);
 if ((i7 & 0 | 0) == 0 & (i8 & 1 | 0) == 0 | i7 >>> 0 < 16777216 >>> 0) {
  HEAP32[i1 >> 2] = 0;
  return;
 }
 d15 = (HEAP32[tempDoublePtr >> 2] = i4, +HEAPF32[tempDoublePtr >> 2]);
 if ((HEAP32[tempDoublePtr >> 2] = i12, +HEAPF32[tempDoublePtr >> 2]) > +0 | d15 > +0) {
  HEAP32[i1 >> 2] = 2;
  return;
 }
 i12 = i1 | 0;
 if (d13 != +0 | d14 != +0) {
  HEAP32[i12 >> 2] = 1;
  return;
 } else {
  HEAP32[i12 >> 2] = 0;
  return;
 }
}
function __ZN7WebCore10ShadowBlurC2ERKNS_20GraphicsContextStateE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, d7 = +0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, d12 = +0, d13 = +0;
 i3 = i2 + 52 | 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 i6 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i5;
 HEAP32[i4 + 4 >> 2] = i6;
 HEAP32[i1 + 12 >> 2] = HEAP32[i2 + 76 >> 2];
 i4 = i1 + 16 | 0;
 d7 = +HEAPF32[i2 + 28 >> 2];
 HEAPF32[i4 >> 2] = d7;
 HEAPF32[i1 + 20 >> 2] = d7;
 i3 = i2 + 16 | 0;
 i8 = i1 + 24 | 0;
 i9 = HEAP32[i3 >> 2] | 0;
 i10 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i8 >> 2] = i9;
 HEAP32[i8 + 4 >> 2] = i10;
 _memset(i1 + 32 | 0, 0, 44) | 0;
 HEAP8[i1 + 76 | 0] = (HEAPU8[i2 + 88 | 0] | 0) >>> 4 & 1;
 i2 = d7 < +128;
 i8 = i4;
 i4 = (HEAPF32[tempDoublePtr >> 2] = d7, HEAP32[tempDoublePtr >> 2] | 0);
 i3 = i2 ? i4 : 1124073472;
 i11 = i2 ? i4 : 1124073472;
 HEAP32[i8 >> 2] = (i2 ? 0 : 0) | i3;
 HEAP32[i8 + 4 >> 2] = i11 | (i2 ? 0 : 0);
 d7 = (HEAP32[tempDoublePtr >> 2] = i9, +HEAPF32[tempDoublePtr >> 2]);
 d12 = (HEAP32[tempDoublePtr >> 2] = i10, +HEAPF32[tempDoublePtr >> 2]);
 if ((i5 & 0 | 0) == 0 & (i6 & 1 | 0) == 0 | i5 >>> 0 < 16777216 >>> 0) {
  HEAP32[i1 >> 2] = 0;
  return;
 }
 d13 = (HEAP32[tempDoublePtr >> 2] = i11, +HEAPF32[tempDoublePtr >> 2]);
 if ((HEAP32[tempDoublePtr >> 2] = i3, +HEAPF32[tempDoublePtr >> 2]) > +0 | d13 > +0) {
  HEAP32[i1 >> 2] = 2;
  return;
 }
 i3 = i1 | 0;
 if (d7 != +0 | d12 != +0) {
  HEAP32[i3 >> 2] = 1;
  return;
 } else {
  HEAP32[i3 >> 2] = 0;
  return;
 }
}
function __ZN7WebCore10ShadowBlurC1ERKNS_20GraphicsContextStateE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, d7 = +0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, d12 = +0, d13 = +0;
 i3 = i2 + 52 | 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 i6 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i5;
 HEAP32[i4 + 4 >> 2] = i6;
 HEAP32[i1 + 12 >> 2] = HEAP32[i2 + 76 >> 2];
 i4 = i1 + 16 | 0;
 d7 = +HEAPF32[i2 + 28 >> 2];
 HEAPF32[i4 >> 2] = d7;
 HEAPF32[i1 + 20 >> 2] = d7;
 i3 = i2 + 16 | 0;
 i8 = i1 + 24 | 0;
 i9 = HEAP32[i3 >> 2] | 0;
 i10 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i8 >> 2] = i9;
 HEAP32[i8 + 4 >> 2] = i10;
 _memset(i1 + 32 | 0, 0, 44) | 0;
 HEAP8[i1 + 76 | 0] = (HEAPU8[i2 + 88 | 0] | 0) >>> 4 & 1;
 i2 = d7 < +128;
 i8 = i4;
 i4 = (HEAPF32[tempDoublePtr >> 2] = d7, HEAP32[tempDoublePtr >> 2] | 0);
 i3 = i2 ? i4 : 1124073472;
 i11 = i2 ? i4 : 1124073472;
 HEAP32[i8 >> 2] = (i2 ? 0 : 0) | i3;
 HEAP32[i8 + 4 >> 2] = i11 | (i2 ? 0 : 0);
 d7 = (HEAP32[tempDoublePtr >> 2] = i9, +HEAPF32[tempDoublePtr >> 2]);
 d12 = (HEAP32[tempDoublePtr >> 2] = i10, +HEAPF32[tempDoublePtr >> 2]);
 if ((i5 & 0 | 0) == 0 & (i6 & 1 | 0) == 0 | i5 >>> 0 < 16777216 >>> 0) {
  HEAP32[i1 >> 2] = 0;
  return;
 }
 d13 = (HEAP32[tempDoublePtr >> 2] = i11, +HEAPF32[tempDoublePtr >> 2]);
 if ((HEAP32[tempDoublePtr >> 2] = i3, +HEAPF32[tempDoublePtr >> 2]) > +0 | d13 > +0) {
  HEAP32[i1 >> 2] = 2;
  return;
 }
 i3 = i1 | 0;
 if (d7 != +0 | d12 != +0) {
  HEAP32[i3 >> 2] = 1;
  return;
 } else {
  HEAP32[i3 >> 2] = 0;
  return;
 }
}
function __ZN7WebCore10ShadowBlur22updateShadowBlurValuesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, d3 = +0, i4 = 0, d5 = +0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 + 16 | 0;
 d3 = +HEAPF32[i2 >> 2];
 i4 = d3 < +128;
 d5 = +HEAPF32[i1 + 20 >> 2];
 i6 = d5 < +128;
 i7 = i2;
 i2 = (HEAPF32[tempDoublePtr >> 2] = d3, HEAP32[tempDoublePtr >> 2] | 0);
 i8 = i4 ? i2 : 1124073472;
 i2 = i6 ? (HEAPF32[tempDoublePtr >> 2] = d5, HEAP32[tempDoublePtr >> 2] | 0) : 1124073472;
 HEAP32[i7 >> 2] = (i6 ? 0 : 0) | i8;
 HEAP32[i7 + 4 >> 2] = i2 | (i4 ? 0 : 0);
 d5 = (HEAP32[tempDoublePtr >> 2] = i8, +HEAPF32[tempDoublePtr >> 2]);
 d3 = (HEAP32[tempDoublePtr >> 2] = i2, +HEAPF32[tempDoublePtr >> 2]);
 do {
  if ((HEAP8[i1 + 8 | 0] & 1) != 0) {
   if ((HEAP32[i1 + 4 >> 2] | 0) >>> 0 < 16777216 >>> 0) {
    break;
   }
   if (d5 > +0 | d3 > +0) {
    HEAP32[i1 >> 2] = 2;
    return;
   }
   do {
    if (+HEAPF32[i1 + 24 >> 2] == +0) {
     if (+HEAPF32[i1 + 28 >> 2] != +0) {
      break;
     }
     HEAP32[i1 >> 2] = 0;
     return;
    }
   } while (0);
   HEAP32[i1 >> 2] = 1;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZN7WebCore10ShadowBlur24blurAndColorShadowBufferERKNS_7IntSizeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, d6 = +0, d7 = +0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 __ZN7WebCore10ShadowBlur16blurShadowBufferERKNS_7IntSizeE(i1, i2);
 i5 = __ZNK7WebCore11ImageBuffer7contextEv(HEAP32[i1 + 32 >> 2] | 0) | 0;
 __ZN7WebCore15GraphicsContext4saveEv(i5);
 __ZN7WebCore15GraphicsContext21setCompositeOperationENS_17CompositeOperatorENS_9BlendModeE(i5, 3, 0);
 __ZN7WebCore15GraphicsContext12setFillColorERKNS_5ColorENS_10ColorSpaceE(i5, i1 + 4 | 0, HEAP32[i1 + 12 >> 2] | 0);
 d6 = +(HEAP32[i2 >> 2] | 0);
 d7 = +(HEAP32[i2 + 4 >> 2] | 0);
 HEAPF32[i4 >> 2] = +0;
 HEAPF32[i4 + 4 >> 2] = +0;
 HEAPF32[i4 + 8 >> 2] = d6;
 HEAPF32[i4 + 12 >> 2] = d7;
 __ZN7WebCore15GraphicsContext8fillRectERKNS_9FloatRectE(i5, i4);
 __ZN7WebCore15GraphicsContext7restoreEv(i5);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore10ShadowBlur12templateSizeERKNS_7IntSizeERKNS_11RoundedRect5RadiiE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = i3;
 i3 = HEAP32[i4 >> 2] | 0;
 i5 = HEAP32[i4 + 16 >> 2] | 0;
 i6 = HEAP32[i4 + 8 >> 2] | 0;
 i7 = HEAP32[i4 + 24 >> 2] | 0;
 i8 = HEAP32[i4 + 4 >> 2] | 0;
 i9 = HEAP32[i4 + 12 >> 2] | 0;
 i10 = HEAP32[i4 + 20 >> 2] | 0;
 i11 = HEAP32[i4 + 28 >> 2] | 0;
 i4 = ((i8 | 0) < (i9 | 0) ? i9 : i8) + 1 + ((i10 | 0) < (i11 | 0) ? i11 : i10) + (~~(+(HEAP32[i2 + 4 >> 2] | 0) * +2) << 1) | 0;
 HEAP32[i1 >> 2] = ((i3 | 0) < (i5 | 0) ? i5 : i3) + 1 + ((i6 | 0) < (i7 | 0) ? i7 : i6) + (~~(+(HEAP32[i2 >> 2] | 0) * +2) << 1);
 HEAP32[i1 + 4 >> 2] = i4;
 return;
}
function __ZN7WebCore13ScratchBuffer6sharedEv() {
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0;
 if (HEAP8[H_BASE + 56 | 0] | 0) {
  i1 = HEAP32[H_BASE + 64 >> 2] | 0;
  return i1 | 0;
 } else {
  i2 = __ZN3WTF10fastMallocEj(160) | 0;
  i3 = i2;
  HEAP32[i2 >> 2] = 0;
  i4 = i2 + 8 | 0;
  __ZN7WebCore9TimerBaseC2Ev(i4);
  HEAP32[i4 >> 2] = H_BASE + 32;
  HEAP32[i2 + 52 >> 2] = i3;
  i4 = i2 + 56 | 0;
  HEAP32[i4 >> 2] = F_BASE_vii + 2;
  HEAP32[i4 + 4 >> 2] = 0;
  HEAPF32[i2 + 140 >> 2] = +0;
  HEAPF32[i2 + 144 >> 2] = +0;
  HEAP8[i2 + 148 | 0] = 0;
  HEAPF32[i2 + 152 >> 2] = +0;
  HEAPF32[i2 + 156 >> 2] = +0;
  _memset(i2 + 64 | 0, 0, 69) | 0;
  HEAP32[H_BASE + 64 >> 2] = i3;
  HEAP8[H_BASE + 56 | 0] = 1;
  i1 = i3;
  return i1 | 0;
 }
 return 0;
}
function __ZNK7WebCore10ShadowBlur15blurredEdgeSizeEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var d3 = +0, i4 = 0, i5 = 0, i6 = 0;
 d3 = +Math_ceil(+HEAPF32[i2 + 16 >> 2]);
 do {
  if (d3 < +2147483647) {
   if (d3 <= +-2147483648) {
    i4 = -2147483648;
    break;
   }
   i4 = ~~d3;
  } else {
   i4 = 2147483647;
  }
 } while (0);
 d3 = +Math_ceil(+HEAPF32[i2 + 20 >> 2]);
 do {
  if (d3 < +2147483647) {
   if (d3 <= +-2147483648) {
    i5 = -2147483648;
    break;
   }
   i5 = ~~d3;
  } else {
   i5 = 2147483647;
  }
 } while (0);
 i2 = i1 | 0;
 HEAP32[i2 >> 2] = i4;
 i6 = i1 + 4 | 0;
 HEAP32[i6 >> 2] = i5;
 if ((i4 | 0) == 1) {
  HEAP32[i2 >> 2] = 2;
 }
 if ((i5 | 0) != 1) {
  return;
 }
 HEAP32[i6 >> 2] = 2;
 return;
}
function __ZN7WebCore10ShadowBlur16adjustBlurRadiusEPNS_15GraphicsContextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, d5 = +0, d6 = +0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 if ((HEAP8[i1 + 76 | 0] & 1) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore15GraphicsContext6getCTMENS0_18IncludeDeviceScaleE(i4, i2, 1);
 d5 = +1 / +__ZNK7WebCore15AffineTransform6xScaleEv(i4);
 d6 = +1 / +__ZNK7WebCore15AffineTransform6yScaleEv(i4);
 i4 = i1 + 16 | 0;
 HEAPF32[i4 >> 2] = d5 * +HEAPF32[i4 >> 2];
 i4 = i1 + 20 | 0;
 HEAPF32[i4 >> 2] = d6 * +HEAPF32[i4 >> 2];
 STACKTOP = i3;
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
function __ZN7WebCore5TimerINS_13ScratchBufferEE5firedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 48 | 0;
 i3 = (HEAP32[i1 + 44 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] | 0) | 0;
 i4 = i3;
 i5 = HEAP32[i2 >> 2] | 0;
 if ((i5 & 1 | 0) == 0) {
  i6 = i5;
  FUNCTION_TABLE_vii[i6 & 7](i4, i1);
  return;
 } else {
  i6 = HEAP32[(HEAP32[i3 >> 2] | 0) + (i5 - 1) >> 2] | 0;
  FUNCTION_TABLE_vii[i6 & 7](i4, i1);
  return;
 }
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
function __ZN7WebCore13ScratchBuffer10timerFiredEPNS_5TimerIS0_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i2 = i1 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) != 0) {
  __ZN7WebCore11ImageBufferD1Ev(i3);
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = i1 + 140 | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i3 + 4 >> 2] = 0;
 i3 = i1 + 152 | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i3 + 4 >> 2] = 0;
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore10ShadowBlurC2Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP8[i1 + 8 | 0] = 0;
 _memset(i1 + 16 | 0, 0, 16) | 0;
 _memset(i1 + 36 | 0, 0, 41) | 0;
 return;
}
function __ZN7WebCore10ShadowBlurC1Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP8[i1 + 8 | 0] = 0;
 _memset(i1 + 16 | 0, 0, 16) | 0;
 _memset(i1 + 36 | 0, 0, 41) | 0;
 return;
}
function dynCall_viiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 FUNCTION_TABLE_viiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
}
function runPostSets() {
 HEAP32[H_BASE + 32 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_did + 2;
}
function __ZN7WebCore10ShadowBlur5clearEv(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP8[i1 + 8 | 0] = 0;
 _memset(i1 + 16 | 0, 0, 16) | 0;
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
function __ZN7WebCore5TimerINS_13ScratchBufferEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBaseD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1 | 0);
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
function dynCall_did(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 return +FUNCTION_TABLE_did[i1 & 3](i2 | 0, +d3);
}
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 7](i2 | 0, i3 | 0);
}
function b0(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(0);
}
function __ZN7WebCore5TimerINS_13ScratchBufferEED1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBaseD2Ev(i1);
 return;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function __ZNK7WebCore9TimerBase15alignedFireTimeEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 return +d2;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 15](i2 | 0);
}
function b6(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(6);
 return 0;
}
function b1(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 abort(1);
 return +0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
}
function b3(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(3);
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
function b2(i1) {
 i1 = i1 | 0;
 abort(2);
}
function b5() {
 abort(5);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_viiiii = [b0,b0,__ZN7WebCore10ShadowBlurC2ERKNS_9FloatSizeES3_RKNS_5ColorENS_10ColorSpaceE,b0];
  var FUNCTION_TABLE_did = [b1,b1,__ZNK7WebCore9TimerBase15alignedFireTimeEd,b1];
  var FUNCTION_TABLE_vi = [b2,b2,__ZN7WebCore5TimerINS_13ScratchBufferEED1Ev,b2,__ZN7WebCore5TimerINS_13ScratchBufferEED0Ev,b2,__ZN7WebCore5TimerINS_13ScratchBufferEE5firedEv,b2,__ZN7WebCore10ShadowBlurC2Ev,b2,b2,b2,b2,b2,b2,b2];
  var FUNCTION_TABLE_vii = [b3,b3,__ZN7WebCore13ScratchBuffer10timerFiredEPNS_5TimerIS0_EE,b3,__ZN7WebCore10ShadowBlurC2ERKNS_20GraphicsContextStateE,b3,b3,b3];
  var FUNCTION_TABLE_ii = [b4,b4];
  var FUNCTION_TABLE_v = [b5,b5];
  var FUNCTION_TABLE_iii = [b6,b6];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_did: dynCall_did, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_did": invoke_did, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_ceilf": _ceilf, "_fabsf": _fabsf, "_floorf": _floorf, "___setErrNo": ___setErrNo, "_malloc": _malloc, "_free": _free, "_round": _round, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_did = Module["dynCall_did"] = asm["dynCall_did"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore10ShadowBlur5clearEv","_strlen","__ZN7WebCore5TimerINS_13ScratchBufferEED1Ev","__ZN7WebCore13ScratchBuffer10timerFiredEPNS_5TimerIS0_EE","__ZN7WebCore10ShadowBlur14blurLayerImageEPhRKNS_7IntSizeEi","__ZN7WebCore10ShadowBlurC2ERKNS_9FloatSizeES3_RKNS_5ColorENS_10ColorSpaceE","__ZN7WebCore10ShadowBlur14endShadowLayerEPNS_15GraphicsContextE","__ZN7WebCore10ShadowBlurC2ERKNS_20GraphicsContextStateE","__ZN7WebCore10ShadowBlur15drawLayerPiecesEPNS_15GraphicsContextERKNS_9FloatRectERKNS_11RoundedRect5RadiiERKNS_7IntSizeESC_NS0_15ShadowDirectionE","__ZNK7WebCore10ShadowBlur12templateSizeERKNS_7IntSizeERKNS_11RoundedRect5RadiiE","__ZN7WebCore10ShadowBlur16blurShadowBufferERKNS_7IntSizeE","__ZN7WebCore10ShadowBlur16adjustBlurRadiusEPNS_15GraphicsContextE","__ZN7WebCore13ScratchBuffer26setCachedInsetShadowValuesERKNS_9FloatSizeERKNS_5ColorENS_10ColorSpaceERKNS_9FloatRectESA_RKNS_11RoundedRect5RadiiE","__ZNK7WebCore9TimerBase15alignedFireTimeEd","__ZN7WebCore10ShadowBlur15setShadowValuesERKNS_9FloatSizeES3_RKNS_5ColorENS_10ColorSpaceEb","__ZN7WebCore10ShadowBlur15drawInsetShadowEPNS_15GraphicsContextERKNS_9FloatRectES5_RKNS_11RoundedRect5RadiiE","_memset","__ZN7WebCore10ShadowBlur28drawInsetShadowWithoutTilingEPNS_15GraphicsContextERKNS_9FloatRectES5_RKNS_11RoundedRect5RadiiERKNS_7IntRectE","__ZN7WebCore13ScratchBuffer6sharedEv","__ZN7WebCore10ShadowBlur25drawInsetShadowWithTilingEPNS_15GraphicsContextERKNS_9FloatRectES5_RKNS_11RoundedRect5RadiiERKNS_7IntSizeESC_","__ZN7WebCore10ShadowBlur24blurAndColorShadowBufferERKNS_7IntSizeE","__ZN7WebCore13ScratchBuffer21setCachedShadowValuesERKNS_9FloatSizeERKNS_5ColorENS_10ColorSpaceERKNS_9FloatRectERKNS_11RoundedRect5RadiiES3_","__ZN7WebCore10ShadowBlur14drawRectShadowEPNS_15GraphicsContextERKNS_9FloatRectERKNS_11RoundedRect5RadiiE","__ZN7WebCore10ShadowBlur26calculateLayerBoundingRectEPNS_15GraphicsContextERKNS_9FloatRectERKNS_7IntRectE","__ZN7WebCore10ShadowBlurC2Ev","__ZN7WebCore13ScratchBuffer16getScratchBufferERKNS_7IntSizeE","__ZN7WebCore10ShadowBlur24drawRectShadowWithTilingEPNS_15GraphicsContextERKNS_9FloatRectERKNS_11RoundedRect5RadiiERKNS_7IntSizeESC_","__ZN7WebCore10ShadowBlur16beginShadowLayerEPNS_15GraphicsContextERKNS_9FloatRectE","__ZN7WebCore10ShadowBlur22updateShadowBlurValuesEv","__ZN7WebCore5TimerINS_13ScratchBufferEED0Ev","__ZN7WebCore10ShadowBlur27drawRectShadowWithoutTilingEPNS_15GraphicsContextERKNS_9FloatRectERKNS_11RoundedRect5RadiiERKNS_7IntRectE","__ZN7WebCore10ShadowBlur16drawShadowBufferEPNS_15GraphicsContextE","_memcpy","__ZNK7WebCore10ShadowBlur15blurredEdgeSizeEv","__ZN7WebCore5TimerINS_13ScratchBufferEE5firedEv"]

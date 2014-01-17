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
var __ZN7WebCore9SVGLengthC1ENS_13SVGLengthModeERKN3WTF6StringE;
var __ZN7WebCore9SVGLengthC1ERKNS_16SVGLengthContextEfNS_13SVGLengthModeENS_13SVGLengthTypeE;
var __ZN7WebCore9SVGLengthC1ERKS0_;
/* memory initializer */ allocate([112,99,0,0,0,0,0,0,112,116,0,0,0,0,0,0,105,110,0,0,0,0,0,0,109,109,0,0,0,0,0,0,99,109,0,0,0,0,0,0,112,120,0,0,0,0,0,0,101,120,0,0,0,0,0,0,101,109,0,0,0,0,0,0,37,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
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
function invoke_viifii(index,a1,a2,a3,a4,a5) {
  try {
    Module["dynCall_viifii"](index,a1,a2,a3,a4,a5);
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
  var __ZN7WebCore8SVGNames6fxAttrE=env.__ZN7WebCore8SVGNames6fxAttrE|0;
  var __ZN7WebCore8SVGNames15markerWidthAttrE=env.__ZN7WebCore8SVGNames15markerWidthAttrE|0;
  var __ZN7WebCore8SVGNames16markerHeightAttrE=env.__ZN7WebCore8SVGNames16markerHeightAttrE|0;
  var __ZN7WebCore8SVGNames10heightAttrE=env.__ZN7WebCore8SVGNames10heightAttrE|0;
  var __ZN7WebCore8SVGNames6cyAttrE=env.__ZN7WebCore8SVGNames6cyAttrE|0;
  var __ZN7WebCore8SVGNames6x1AttrE=env.__ZN7WebCore8SVGNames6x1AttrE|0;
  var __ZN7WebCore8SVGNames6dxAttrE=env.__ZN7WebCore8SVGNames6dxAttrE|0;
  var __ZN7WebCore8SVGNames5yAttrE=env.__ZN7WebCore8SVGNames5yAttrE|0;
  var __ZN7WebCore8SVGNames6cxAttrE=env.__ZN7WebCore8SVGNames6cxAttrE|0;
  var __ZN7WebCore8SVGNames9widthAttrE=env.__ZN7WebCore8SVGNames9widthAttrE|0;
  var __ZN7WebCore8SVGNames5xAttrE=env.__ZN7WebCore8SVGNames5xAttrE|0;
  var __ZN7WebCore8SVGNames8refXAttrE=env.__ZN7WebCore8SVGNames8refXAttrE|0;
  var __ZN7WebCore8SVGNames6fyAttrE=env.__ZN7WebCore8SVGNames6fyAttrE|0;
  var __ZN7WebCore8SVGNames5rAttrE=env.__ZN7WebCore8SVGNames5rAttrE|0;
  var __ZN7WebCore8SVGNames14textLengthAttrE=env.__ZN7WebCore8SVGNames14textLengthAttrE|0;
  var __ZN7WebCore8SVGNames6y2AttrE=env.__ZN7WebCore8SVGNames6y2AttrE|0;
  var __ZN7WebCore8SVGNames8refYAttrE=env.__ZN7WebCore8SVGNames8refYAttrE|0;
  var __ZN7WebCore8SVGNames6y1AttrE=env.__ZN7WebCore8SVGNames6y1AttrE|0;
  var __ZN7WebCore8SVGNames6dyAttrE=env.__ZN7WebCore8SVGNames6dyAttrE|0;
  var __ZN7WebCore8SVGNames15startOffsetAttrE=env.__ZN7WebCore8SVGNames15startOffsetAttrE|0;
  var __ZN7WebCore8SVGNames6x2AttrE=env.__ZN7WebCore8SVGNames6x2AttrE|0;
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
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_viifii=env.invoke_viifii;
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
function __ZN7WebCore9SVGLength36lengthModeForAnimatedLengthAttributeERKNS_13QualifiedNameE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 504 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 24 | 0;
 i6 = i2 + 32 | 0;
 i7 = i2 + 48 | 0;
 i8 = i2 + 56 | 0;
 i9 = i2 + 72 | 0;
 i10 = i2 + 80 | 0;
 i11 = i2 + 96 | 0;
 i12 = i2 + 104 | 0;
 i13 = i2 + 120 | 0;
 i14 = i2 + 128 | 0;
 i15 = i2 + 144 | 0;
 i16 = i2 + 152 | 0;
 i17 = i2 + 168 | 0;
 i18 = i2 + 176 | 0;
 i19 = i2 + 192 | 0;
 i20 = i2 + 200 | 0;
 i21 = i2 + 216 | 0;
 i22 = i2 + 224 | 0;
 i23 = i2 + 240 | 0;
 i24 = i2 + 248 | 0;
 i25 = i2 + 264 | 0;
 i26 = i2 + 272 | 0;
 i27 = i2 + 288 | 0;
 i28 = i2 + 296 | 0;
 i29 = i2 + 312 | 0;
 i30 = i2 + 320 | 0;
 i31 = i2 + 336 | 0;
 i32 = i2 + 344 | 0;
 i33 = i2 + 360 | 0;
 i34 = i2 + 368 | 0;
 i35 = i2 + 384 | 0;
 i36 = i2 + 392 | 0;
 i37 = i2 + 408 | 0;
 i38 = i2 + 416 | 0;
 i39 = i2 + 432 | 0;
 i40 = i2 + 440 | 0;
 i41 = i2 + 456 | 0;
 i42 = i2 + 464 | 0;
 i43 = i2 + 480 | 0;
 i44 = i2 + 488 | 0;
 if (HEAP8[H_BASE + 80 | 0] | 0) {
  i45 = HEAP32[H_BASE + 96 >> 2] | 0;
 } else {
  i46 = __ZN3WTF10fastMallocEj(20) | 0;
  i47 = i46;
  _memset(i46 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 96 >> 2] = i47;
  HEAP8[H_BASE + 80 | 0] = 1;
  i45 = i47;
 }
 do {
  if ((HEAP32[i45 + 12 >> 2] | 0) == 0) {
   HEAP32[i3 >> 2] = 0;
   __ZN3WTF9HashTableIN7WebCore13QualifiedNameENS_12KeyValuePairIS2_NS1_13SVGLengthModeEEENS_24KeyValuePairKeyExtractorIS5_EENS1_17QualifiedNameHashENS_7HashMapIS2_S4_S8_NS_10HashTraitsIS2_EENSA_IS4_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EERKS2_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S5_S7_S8_SE_SB_EEEEOT0_OT1_(i4, i45 | 0, __ZN7WebCore8SVGNames5xAttrE, i3);
   if ((HEAP8[i4 + 8 | 0] & 1) == 0) {
    HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] = HEAP32[i3 >> 2];
   }
   i47 = HEAP32[H_BASE + 96 >> 2] | 0;
   HEAP32[i5 >> 2] = 1;
   __ZN3WTF9HashTableIN7WebCore13QualifiedNameENS_12KeyValuePairIS2_NS1_13SVGLengthModeEEENS_24KeyValuePairKeyExtractorIS5_EENS1_17QualifiedNameHashENS_7HashMapIS2_S4_S8_NS_10HashTraitsIS2_EENSA_IS4_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EERKS2_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S5_S7_S8_SE_SB_EEEEOT0_OT1_(i6, i47 | 0, __ZN7WebCore8SVGNames5yAttrE, i5);
   if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
    HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] = HEAP32[i5 >> 2];
   }
   i47 = HEAP32[H_BASE + 96 >> 2] | 0;
   HEAP32[i7 >> 2] = 0;
   __ZN3WTF9HashTableIN7WebCore13QualifiedNameENS_12KeyValuePairIS2_NS1_13SVGLengthModeEEENS_24KeyValuePairKeyExtractorIS5_EENS1_17QualifiedNameHashENS_7HashMapIS2_S4_S8_NS_10HashTraitsIS2_EENSA_IS4_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EERKS2_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S5_S7_S8_SE_SB_EEEEOT0_OT1_(i8, i47 | 0, __ZN7WebCore8SVGNames6cxAttrE, i7);
   if ((HEAP8[i8 + 8 | 0] & 1) == 0) {
    HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] = HEAP32[i7 >> 2];
   }
   i47 = HEAP32[H_BASE + 96 >> 2] | 0;
   HEAP32[i9 >> 2] = 1;
   __ZN3WTF9HashTableIN7WebCore13QualifiedNameENS_12KeyValuePairIS2_NS1_13SVGLengthModeEEENS_24KeyValuePairKeyExtractorIS5_EENS1_17QualifiedNameHashENS_7HashMapIS2_S4_S8_NS_10HashTraitsIS2_EENSA_IS4_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EERKS2_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S5_S7_S8_SE_SB_EEEEOT0_OT1_(i10, i47 | 0, __ZN7WebCore8SVGNames6cyAttrE, i9);
   if ((HEAP8[i10 + 8 | 0] & 1) == 0) {
    HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] = HEAP32[i9 >> 2];
   }
   i47 = HEAP32[H_BASE + 96 >> 2] | 0;
   HEAP32[i11 >> 2] = 0;
   __ZN3WTF9HashTableIN7WebCore13QualifiedNameENS_12KeyValuePairIS2_NS1_13SVGLengthModeEEENS_24KeyValuePairKeyExtractorIS5_EENS1_17QualifiedNameHashENS_7HashMapIS2_S4_S8_NS_10HashTraitsIS2_EENSA_IS4_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EERKS2_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S5_S7_S8_SE_SB_EEEEOT0_OT1_(i12, i47 | 0, __ZN7WebCore8SVGNames6dxAttrE, i11);
   if ((HEAP8[i12 + 8 | 0] & 1) == 0) {
    HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] = HEAP32[i11 >> 2];
   }
   i47 = HEAP32[H_BASE + 96 >> 2] | 0;
   HEAP32[i13 >> 2] = 1;
   __ZN3WTF9HashTableIN7WebCore13QualifiedNameENS_12KeyValuePairIS2_NS1_13SVGLengthModeEEENS_24KeyValuePairKeyExtractorIS5_EENS1_17QualifiedNameHashENS_7HashMapIS2_S4_S8_NS_10HashTraitsIS2_EENSA_IS4_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EERKS2_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S5_S7_S8_SE_SB_EEEEOT0_OT1_(i14, i47 | 0, __ZN7WebCore8SVGNames6dyAttrE, i13);
   if ((HEAP8[i14 + 8 | 0] & 1) == 0) {
    HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] = HEAP32[i13 >> 2];
   }
   i47 = HEAP32[H_BASE + 96 >> 2] | 0;
   HEAP32[i15 >> 2] = 0;
   __ZN3WTF9HashTableIN7WebCore13QualifiedNameENS_12KeyValuePairIS2_NS1_13SVGLengthModeEEENS_24KeyValuePairKeyExtractorIS5_EENS1_17QualifiedNameHashENS_7HashMapIS2_S4_S8_NS_10HashTraitsIS2_EENSA_IS4_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EERKS2_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S5_S7_S8_SE_SB_EEEEOT0_OT1_(i16, i47 | 0, __ZN7WebCore8SVGNames6fxAttrE, i15);
   if ((HEAP8[i16 + 8 | 0] & 1) == 0) {
    HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] = HEAP32[i15 >> 2];
   }
   i47 = HEAP32[H_BASE + 96 >> 2] | 0;
   HEAP32[i17 >> 2] = 1;
   __ZN3WTF9HashTableIN7WebCore13QualifiedNameENS_12KeyValuePairIS2_NS1_13SVGLengthModeEEENS_24KeyValuePairKeyExtractorIS5_EENS1_17QualifiedNameHashENS_7HashMapIS2_S4_S8_NS_10HashTraitsIS2_EENSA_IS4_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EERKS2_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S5_S7_S8_SE_SB_EEEEOT0_OT1_(i18, i47 | 0, __ZN7WebCore8SVGNames6fyAttrE, i17);
   if ((HEAP8[i18 + 8 | 0] & 1) == 0) {
    HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] = HEAP32[i17 >> 2];
   }
   i47 = HEAP32[H_BASE + 96 >> 2] | 0;
   HEAP32[i19 >> 2] = 2;
   __ZN3WTF9HashTableIN7WebCore13QualifiedNameENS_12KeyValuePairIS2_NS1_13SVGLengthModeEEENS_24KeyValuePairKeyExtractorIS5_EENS1_17QualifiedNameHashENS_7HashMapIS2_S4_S8_NS_10HashTraitsIS2_EENSA_IS4_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EERKS2_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S5_S7_S8_SE_SB_EEEEOT0_OT1_(i20, i47 | 0, __ZN7WebCore8SVGNames5rAttrE, i19);
   if ((HEAP8[i20 + 8 | 0] & 1) == 0) {
    HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] = HEAP32[i19 >> 2];
   }
   i47 = HEAP32[H_BASE + 96 >> 2] | 0;
   HEAP32[i21 >> 2] = 0;
   __ZN3WTF9HashTableIN7WebCore13QualifiedNameENS_12KeyValuePairIS2_NS1_13SVGLengthModeEEENS_24KeyValuePairKeyExtractorIS5_EENS1_17QualifiedNameHashENS_7HashMapIS2_S4_S8_NS_10HashTraitsIS2_EENSA_IS4_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EERKS2_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S5_S7_S8_SE_SB_EEEEOT0_OT1_(i22, i47 | 0, __ZN7WebCore8SVGNames9widthAttrE, i21);
   if ((HEAP8[i22 + 8 | 0] & 1) == 0) {
    HEAP32[(HEAP32[i22 >> 2] | 0) + 4 >> 2] = HEAP32[i21 >> 2];
   }
   i47 = HEAP32[H_BASE + 96 >> 2] | 0;
   HEAP32[i23 >> 2] = 1;
   __ZN3WTF9HashTableIN7WebCore13QualifiedNameENS_12KeyValuePairIS2_NS1_13SVGLengthModeEEENS_24KeyValuePairKeyExtractorIS5_EENS1_17QualifiedNameHashENS_7HashMapIS2_S4_S8_NS_10HashTraitsIS2_EENSA_IS4_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EERKS2_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S5_S7_S8_SE_SB_EEEEOT0_OT1_(i24, i47 | 0, __ZN7WebCore8SVGNames10heightAttrE, i23);
   if ((HEAP8[i24 + 8 | 0] & 1) == 0) {
    HEAP32[(HEAP32[i24 >> 2] | 0) + 4 >> 2] = HEAP32[i23 >> 2];
   }
   i47 = HEAP32[H_BASE + 96 >> 2] | 0;
   HEAP32[i25 >> 2] = 0;
   __ZN3WTF9HashTableIN7WebCore13QualifiedNameENS_12KeyValuePairIS2_NS1_13SVGLengthModeEEENS_24KeyValuePairKeyExtractorIS5_EENS1_17QualifiedNameHashENS_7HashMapIS2_S4_S8_NS_10HashTraitsIS2_EENSA_IS4_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EERKS2_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S5_S7_S8_SE_SB_EEEEOT0_OT1_(i26, i47 | 0, __ZN7WebCore8SVGNames6x1AttrE, i25);
   if ((HEAP8[i26 + 8 | 0] & 1) == 0) {
    HEAP32[(HEAP32[i26 >> 2] | 0) + 4 >> 2] = HEAP32[i25 >> 2];
   }
   i47 = HEAP32[H_BASE + 96 >> 2] | 0;
   HEAP32[i27 >> 2] = 0;
   __ZN3WTF9HashTableIN7WebCore13QualifiedNameENS_12KeyValuePairIS2_NS1_13SVGLengthModeEEENS_24KeyValuePairKeyExtractorIS5_EENS1_17QualifiedNameHashENS_7HashMapIS2_S4_S8_NS_10HashTraitsIS2_EENSA_IS4_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EERKS2_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S5_S7_S8_SE_SB_EEEEOT0_OT1_(i28, i47 | 0, __ZN7WebCore8SVGNames6x2AttrE, i27);
   if ((HEAP8[i28 + 8 | 0] & 1) == 0) {
    HEAP32[(HEAP32[i28 >> 2] | 0) + 4 >> 2] = HEAP32[i27 >> 2];
   }
   i47 = HEAP32[H_BASE + 96 >> 2] | 0;
   HEAP32[i29 >> 2] = 1;
   __ZN3WTF9HashTableIN7WebCore13QualifiedNameENS_12KeyValuePairIS2_NS1_13SVGLengthModeEEENS_24KeyValuePairKeyExtractorIS5_EENS1_17QualifiedNameHashENS_7HashMapIS2_S4_S8_NS_10HashTraitsIS2_EENSA_IS4_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EERKS2_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S5_S7_S8_SE_SB_EEEEOT0_OT1_(i30, i47 | 0, __ZN7WebCore8SVGNames6y1AttrE, i29);
   if ((HEAP8[i30 + 8 | 0] & 1) == 0) {
    HEAP32[(HEAP32[i30 >> 2] | 0) + 4 >> 2] = HEAP32[i29 >> 2];
   }
   i47 = HEAP32[H_BASE + 96 >> 2] | 0;
   HEAP32[i31 >> 2] = 1;
   __ZN3WTF9HashTableIN7WebCore13QualifiedNameENS_12KeyValuePairIS2_NS1_13SVGLengthModeEEENS_24KeyValuePairKeyExtractorIS5_EENS1_17QualifiedNameHashENS_7HashMapIS2_S4_S8_NS_10HashTraitsIS2_EENSA_IS4_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EERKS2_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S5_S7_S8_SE_SB_EEEEOT0_OT1_(i32, i47 | 0, __ZN7WebCore8SVGNames6y2AttrE, i31);
   if ((HEAP8[i32 + 8 | 0] & 1) == 0) {
    HEAP32[(HEAP32[i32 >> 2] | 0) + 4 >> 2] = HEAP32[i31 >> 2];
   }
   i47 = HEAP32[H_BASE + 96 >> 2] | 0;
   HEAP32[i33 >> 2] = 0;
   __ZN3WTF9HashTableIN7WebCore13QualifiedNameENS_12KeyValuePairIS2_NS1_13SVGLengthModeEEENS_24KeyValuePairKeyExtractorIS5_EENS1_17QualifiedNameHashENS_7HashMapIS2_S4_S8_NS_10HashTraitsIS2_EENSA_IS4_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EERKS2_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S5_S7_S8_SE_SB_EEEEOT0_OT1_(i34, i47 | 0, __ZN7WebCore8SVGNames8refXAttrE, i33);
   if ((HEAP8[i34 + 8 | 0] & 1) == 0) {
    HEAP32[(HEAP32[i34 >> 2] | 0) + 4 >> 2] = HEAP32[i33 >> 2];
   }
   i47 = HEAP32[H_BASE + 96 >> 2] | 0;
   HEAP32[i35 >> 2] = 1;
   __ZN3WTF9HashTableIN7WebCore13QualifiedNameENS_12KeyValuePairIS2_NS1_13SVGLengthModeEEENS_24KeyValuePairKeyExtractorIS5_EENS1_17QualifiedNameHashENS_7HashMapIS2_S4_S8_NS_10HashTraitsIS2_EENSA_IS4_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EERKS2_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S5_S7_S8_SE_SB_EEEEOT0_OT1_(i36, i47 | 0, __ZN7WebCore8SVGNames8refYAttrE, i35);
   if ((HEAP8[i36 + 8 | 0] & 1) == 0) {
    HEAP32[(HEAP32[i36 >> 2] | 0) + 4 >> 2] = HEAP32[i35 >> 2];
   }
   i47 = HEAP32[H_BASE + 96 >> 2] | 0;
   HEAP32[i37 >> 2] = 0;
   __ZN3WTF9HashTableIN7WebCore13QualifiedNameENS_12KeyValuePairIS2_NS1_13SVGLengthModeEEENS_24KeyValuePairKeyExtractorIS5_EENS1_17QualifiedNameHashENS_7HashMapIS2_S4_S8_NS_10HashTraitsIS2_EENSA_IS4_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EERKS2_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S5_S7_S8_SE_SB_EEEEOT0_OT1_(i38, i47 | 0, __ZN7WebCore8SVGNames15markerWidthAttrE, i37);
   if ((HEAP8[i38 + 8 | 0] & 1) == 0) {
    HEAP32[(HEAP32[i38 >> 2] | 0) + 4 >> 2] = HEAP32[i37 >> 2];
   }
   i47 = HEAP32[H_BASE + 96 >> 2] | 0;
   HEAP32[i39 >> 2] = 1;
   __ZN3WTF9HashTableIN7WebCore13QualifiedNameENS_12KeyValuePairIS2_NS1_13SVGLengthModeEEENS_24KeyValuePairKeyExtractorIS5_EENS1_17QualifiedNameHashENS_7HashMapIS2_S4_S8_NS_10HashTraitsIS2_EENSA_IS4_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EERKS2_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S5_S7_S8_SE_SB_EEEEOT0_OT1_(i40, i47 | 0, __ZN7WebCore8SVGNames16markerHeightAttrE, i39);
   if ((HEAP8[i40 + 8 | 0] & 1) == 0) {
    HEAP32[(HEAP32[i40 >> 2] | 0) + 4 >> 2] = HEAP32[i39 >> 2];
   }
   i47 = HEAP32[H_BASE + 96 >> 2] | 0;
   HEAP32[i41 >> 2] = 0;
   __ZN3WTF9HashTableIN7WebCore13QualifiedNameENS_12KeyValuePairIS2_NS1_13SVGLengthModeEEENS_24KeyValuePairKeyExtractorIS5_EENS1_17QualifiedNameHashENS_7HashMapIS2_S4_S8_NS_10HashTraitsIS2_EENSA_IS4_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EERKS2_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S5_S7_S8_SE_SB_EEEEOT0_OT1_(i42, i47 | 0, __ZN7WebCore8SVGNames14textLengthAttrE, i41);
   if ((HEAP8[i42 + 8 | 0] & 1) == 0) {
    HEAP32[(HEAP32[i42 >> 2] | 0) + 4 >> 2] = HEAP32[i41 >> 2];
   }
   i47 = HEAP32[H_BASE + 96 >> 2] | 0;
   HEAP32[i43 >> 2] = 0;
   __ZN3WTF9HashTableIN7WebCore13QualifiedNameENS_12KeyValuePairIS2_NS1_13SVGLengthModeEEENS_24KeyValuePairKeyExtractorIS5_EENS1_17QualifiedNameHashENS_7HashMapIS2_S4_S8_NS_10HashTraitsIS2_EENSA_IS4_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EERKS2_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S5_S7_S8_SE_SB_EEEEOT0_OT1_(i44, i47 | 0, __ZN7WebCore8SVGNames15startOffsetAttrE, i43);
   if ((HEAP8[i44 + 8 | 0] & 1) != 0) {
    break;
   }
   HEAP32[(HEAP32[i44 >> 2] | 0) + 4 >> 2] = HEAP32[i43 >> 2];
  }
 } while (0);
 i43 = HEAP32[H_BASE + 96 >> 2] | 0;
 if ((HEAP32[i43 >> 2] | 0) == 0) {
  i48 = 2;
  STACKTOP = i2;
  return i48 | 0;
 }
 if ((__ZN3WTF9HashTableIN7WebCore13QualifiedNameENS_12KeyValuePairIS2_NS1_13SVGLengthModeEEENS_24KeyValuePairKeyExtractorIS5_EENS1_17QualifiedNameHashENS_7HashMapIS2_S4_S8_NS_10HashTraitsIS2_EENSA_IS4_EEE18KeyValuePairTraitsESB_E6lookupINS_22IdentityHashTranslatorIS8_EES2_EEPS5_RKT0_(i43 | 0, i1) | 0) == 0) {
  i48 = 2;
  STACKTOP = i2;
  return i48 | 0;
 }
 i43 = __ZN3WTF9HashTableIN7WebCore13QualifiedNameENS_12KeyValuePairIS2_NS1_13SVGLengthModeEEENS_24KeyValuePairKeyExtractorIS5_EENS1_17QualifiedNameHashENS_7HashMapIS2_S4_S8_NS_10HashTraitsIS2_EENSA_IS4_EEE18KeyValuePairTraitsESB_E6lookupINS_22IdentityHashTranslatorIS8_EES2_EEPS5_RKT0_(HEAP32[H_BASE + 96 >> 2] | 0, i1) | 0;
 if ((i43 | 0) == 0) {
  i48 = 0;
  STACKTOP = i2;
  return i48 | 0;
 }
 i48 = HEAP32[i43 + 4 >> 2] | 0;
 STACKTOP = i2;
 return i48 | 0;
}
function __ZN3WTF9HashTableIN7WebCore13QualifiedNameENS_12KeyValuePairIS2_NS1_13SVGLengthModeEEENS_24KeyValuePairKeyExtractorIS5_EENS1_17QualifiedNameHashENS_7HashMapIS2_S4_S8_NS_10HashTraitsIS2_EENSA_IS4_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EERKS2_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S5_S7_S8_SE_SB_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i2 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 if ((i11 | 0) == 0) {
  i12 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i12 | 0) == 0) {
   i13 = 8;
  } else {
   i14 = i12 << 1;
   i13 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i14 | 0) ? i12 : i14;
  }
  __ZN3WTF9HashTableIN7WebCore13QualifiedNameENS_12KeyValuePairIS2_NS1_13SVGLengthModeEEENS_24KeyValuePairKeyExtractorIS5_EENS1_17QualifiedNameHashENS_7HashMapIS2_S4_S8_NS_10HashTraitsIS2_EENSA_IS4_EEE18KeyValuePairTraitsESB_E6rehashEiPS5_(i2, i13, 0) | 0;
  i15 = HEAP32[i10 >> 2] | 0;
 } else {
  i15 = i11;
 }
 i11 = HEAP32[i2 + 8 >> 2] | 0;
 i13 = i3 | 0;
 i3 = HEAP32[i13 >> 2] | 0;
 i14 = i3 + 4 | 0;
 i12 = HEAP32[i14 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i16 = __ZNK7WebCore13QualifiedName17QualifiedNameImpl11computeHashEv(i3) | 0;
  HEAP32[i14 >> 2] = i16;
  i17 = i16;
 } else {
  i17 = i12;
 }
 i12 = i17 & i11;
 i16 = i15 + (i12 << 3) | 0;
 i14 = i6 | 0;
 i3 = HEAP32[(__ZN7WebCore9nullQNameEv() | 0) >> 2] | 0;
 HEAP32[i14 >> 2] = i3;
 i18 = i3 | 0;
 HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
 i18 = i16 | 0;
 i3 = (HEAP32[i18 >> 2] | 0) == (HEAP32[i14 >> 2] | 0);
 __ZN7WebCore13QualifiedNameD1Ev(i6);
 do {
  if (i3) {
   i19 = i16;
   i20 = 14;
  } else {
   i21 = (i17 >>> 23) + ~i17 | 0;
   i22 = i21 << 12 ^ i21;
   i21 = i22 >>> 7 ^ i22;
   i22 = i21 << 2 ^ i21;
   i21 = i22 >>> 20 ^ i22 | 1;
   i22 = 0;
   i23 = 0;
   i24 = i12;
   i25 = i16;
   i26 = i18;
   while (1) {
    i27 = HEAP32[i26 >> 2] | 0;
    if ((i27 | 0) == -1) {
     i28 = i25;
    } else {
     if ((i27 | 0) == (HEAP32[i13 >> 2] | 0)) {
      i20 = 11;
      break;
     } else {
      i28 = i23;
     }
    }
    i27 = (i22 | 0) == 0 ? i21 : i22;
    i29 = i27 + i24 & i11;
    i30 = i15 + (i29 << 3) | 0;
    i31 = HEAP32[(__ZN7WebCore9nullQNameEv() | 0) >> 2] | 0;
    HEAP32[i14 >> 2] = i31;
    i32 = i31 | 0;
    HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + 1;
    i32 = i30 | 0;
    i31 = (HEAP32[i32 >> 2] | 0) == (HEAP32[i14 >> 2] | 0);
    __ZN7WebCore13QualifiedNameD1Ev(i6);
    if (i31) {
     i20 = 13;
     break;
    } else {
     i22 = i27;
     i23 = i28;
     i24 = i29;
     i25 = i30;
     i26 = i32;
    }
   }
   if ((i20 | 0) == 11) {
    i26 = (HEAP32[i10 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i24 = i1;
    HEAP32[i24 >> 2] = i25;
    HEAP32[i24 + 4 >> 2] = i26;
    HEAP8[i1 + 8 | 0] = 0;
    STACKTOP = i5;
    return;
   } else if ((i20 | 0) == 13) {
    if ((i28 | 0) == 0) {
     i19 = i30;
     i20 = 14;
     break;
    }
    i26 = i8 | 0;
    i24 = HEAP32[(__ZN7WebCore9nullQNameEv() | 0) >> 2] | 0;
    HEAP32[i26 >> 2] = i24;
    i23 = i24 | 0;
    HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 1;
    i23 = i7 | 0;
    i24 = HEAP32[i26 >> 2] | 0;
    HEAP32[i23 >> 2] = i24;
    i26 = i24 | 0;
    HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 1;
    i26 = i7 + 4 | 0;
    HEAP32[i26 >> 2] = 0;
    i24 = i9 | 0;
    i22 = HEAP32[i23 >> 2] | 0;
    HEAP32[i24 >> 2] = i22;
    i23 = i22 | 0;
    HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 1;
    i23 = i9 + 4 | 0;
    HEAP32[i23 >> 2] = HEAP32[i26 >> 2];
    __ZN7WebCore13QualifiedNameD1Ev(i7 | 0);
    __ZN7WebCore13QualifiedNameD1Ev(i8);
    i26 = HEAP32[i24 >> 2] | 0;
    HEAP32[i28 >> 2] = i26;
    i24 = i26 | 0;
    HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 1;
    HEAP32[i28 + 4 >> 2] = HEAP32[i23 >> 2];
    __ZN7WebCore13QualifiedNameD1Ev(i9 | 0);
    i23 = i2 + 16 | 0;
    HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) - 1;
    i33 = i28;
    i34 = i23;
    break;
   }
  }
 } while (0);
 if ((i20 | 0) == 14) {
  i33 = i19;
  i34 = i2 + 16 | 0;
 }
 i19 = HEAP32[i13 >> 2] | 0;
 HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
 __ZN7WebCore13QualifiedName5derefEv(i33 | 0);
 HEAP32[i33 >> 2] = HEAP32[i13 >> 2];
 HEAP32[i33 + 4 >> 2] = HEAP32[i4 >> 2];
 i4 = i2 + 12 | 0;
 i13 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i13;
 i4 = i2 + 4 | 0;
 i19 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i34 >> 2] | 0) + i13 << 1 | 0) < (i19 | 0)) {
  i35 = i33;
  i36 = i19;
 } else {
  if ((i19 | 0) == 0) {
   i37 = 8;
  } else {
   i34 = i19 << 1;
   i37 = (i13 * 6 & -1 | 0) < (i34 | 0) ? i19 : i34;
  }
  i34 = __ZN3WTF9HashTableIN7WebCore13QualifiedNameENS_12KeyValuePairIS2_NS1_13SVGLengthModeEEENS_24KeyValuePairKeyExtractorIS5_EENS1_17QualifiedNameHashENS_7HashMapIS2_S4_S8_NS_10HashTraitsIS2_EENSA_IS4_EEE18KeyValuePairTraitsESB_E6rehashEiPS5_(i2, i37, i33) | 0;
  i35 = i34;
  i36 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i10 >> 2] | 0) + (i36 << 3) | 0;
 i36 = i1;
 HEAP32[i36 >> 2] = i35;
 HEAP32[i36 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 STACKTOP = i5;
 return;
}
function __ZN3WTF13tryMakeStringINS_6StringES1_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i2 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 i8 = (i2 | 0) == 0;
 if (i8) {
  i9 = 0;
 } else {
  i9 = HEAP32[i2 + 4 >> 2] | 0;
 }
 i10 = i3 | 0;
 i3 = HEAP32[i10 >> 2] | 0;
 i11 = (i3 | 0) == 0;
 if (i11) {
  i12 = 0;
 } else {
  i12 = HEAP32[i3 + 4 >> 2] | 0;
 }
 i13 = _llvm_uadd_with_overflow_i32(i9 | 0, i12 | 0) | 0;
 i12 = i13;
 if (tempRet0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 if (i8) {
  i14 = 9;
 } else {
  if ((HEAP32[i2 + 16 >> 2] & 32 | 0) != 0) {
   i14 = 9;
  }
 }
 do {
  if ((i14 | 0) == 9) {
   if (!i11) {
    if ((HEAP32[i3 + 16 >> 2] & 32 | 0) == 0) {
     break;
    }
   }
   do {
    if ((i12 | 0) == 0) {
     i2 = __ZN3WTF10StringImpl5emptyEv() | 0;
     if ((i2 | 0) == 0) {
      i14 = 26;
      break;
     }
     i8 = i2 | 0;
     HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
     i15 = i2;
     i16 = 0;
    } else {
     if (i12 >>> 0 > 4294967275 >>> 0) {
      i14 = 26;
      break;
     }
     __ZN3WTF13tryFastMallocEj(i6, i12 + 20 | 0);
     i2 = i6 | 0;
     i8 = HEAP32[i2 >> 2] | 0;
     HEAP32[i2 >> 2] = 0;
     if ((i8 | 0) == 0) {
      i14 = 26;
      break;
     }
     i2 = i8 + 20 | 0;
     HEAP32[i8 >> 2] = 2;
     HEAP32[i8 + 4 >> 2] = i12;
     HEAP32[i8 + 8 >> 2] = i2;
     HEAP32[i8 + 12 >> 2] = 0;
     HEAP32[i8 + 16 >> 2] = 32;
     i15 = i8;
     i16 = i2;
    }
   } while (0);
   if ((i14 | 0) == 26) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   i2 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i2 | 0) == 0) {
     i17 = 0;
    } else {
     i8 = HEAP32[i2 + 4 >> 2] | 0;
     i13 = HEAP32[i2 + 8 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i18 = i2;
     } else {
      i9 = 0;
      while (1) {
       HEAP8[i16 + i9 | 0] = HEAP8[i13 + i9 | 0] | 0;
       i9 = i9 + 1 | 0;
       if (i9 >>> 0 >= i8 >>> 0) {
        break;
       }
      }
      i8 = HEAP32[i7 >> 2] | 0;
      if ((i8 | 0) == 0) {
       i17 = 0;
       break;
      } else {
       i18 = i8;
      }
     }
     i17 = HEAP32[i18 + 4 >> 2] | 0;
    }
   } while (0);
   i2 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i2 | 0) != 0) {
     i8 = HEAP32[i2 + 4 >> 2] | 0;
     i9 = HEAP32[i2 + 8 >> 2] | 0;
     if ((i8 | 0) == 0) {
      break;
     } else {
      i19 = 0;
     }
     while (1) {
      HEAP8[i16 + (i19 + i17) | 0] = HEAP8[i9 + i19 | 0] | 0;
      i19 = i19 + 1 | 0;
      if (i19 >>> 0 >= i8 >>> 0) {
       break;
      }
     }
    }
   } while (0);
   HEAP32[i1 >> 2] = i15;
   STACKTOP = i4;
   return;
  }
 } while (0);
 do {
  if ((i12 | 0) == 0) {
   i15 = __ZN3WTF10StringImpl5emptyEv() | 0;
   if ((i15 | 0) == 0) {
    i14 = 48;
    break;
   }
   i19 = i15 | 0;
   HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 2;
   i20 = i15;
   i21 = 0;
  } else {
   if (i12 >>> 0 > 2147483637 >>> 0) {
    i14 = 48;
    break;
   }
   __ZN3WTF13tryFastMallocEj(i5, (i12 << 1) + 20 | 0);
   i15 = i5 | 0;
   i19 = HEAP32[i15 >> 2] | 0;
   HEAP32[i15 >> 2] = 0;
   if ((i19 | 0) == 0) {
    i14 = 48;
    break;
   }
   i15 = i19 + 20 | 0;
   HEAP32[i19 >> 2] = 2;
   HEAP32[i19 + 4 >> 2] = i12;
   HEAP32[i19 + 8 >> 2] = i15;
   HEAP32[i19 + 12 >> 2] = 0;
   HEAP32[i19 + 16 >> 2] = 0;
   i20 = i19;
   i21 = i15;
  }
 } while (0);
 if ((i14 | 0) == 48) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 i14 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i14 | 0) == 0) {
   i22 = 0;
  } else {
   i12 = HEAP32[i14 + 4 >> 2] | 0;
   do {
    if ((HEAP32[i14 + 16 >> 2] & 32 | 0) == 0) {
     i5 = HEAP32[i14 + 8 >> 2] | 0;
     if ((i12 | 0) == 0) {
      break;
     } else {
      i23 = 0;
     }
     while (1) {
      HEAP16[i21 + (i23 << 1) >> 1] = HEAP16[i5 + (i23 << 1) >> 1] | 0;
      i23 = i23 + 1 | 0;
      if (i23 >>> 0 >= i12 >>> 0) {
       break;
      }
     }
    } else {
     i5 = HEAP32[i14 + 8 >> 2] | 0;
     if ((i12 | 0) == 0) {
      break;
     } else {
      i24 = 0;
     }
     while (1) {
      HEAP16[i21 + (i24 << 1) >> 1] = HEAPU8[i5 + i24 | 0] | 0;
      i24 = i24 + 1 | 0;
      if (i24 >>> 0 >= i12 >>> 0) {
       break;
      }
     }
    }
   } while (0);
   i12 = HEAP32[i7 >> 2] | 0;
   if ((i12 | 0) == 0) {
    i22 = 0;
    break;
   }
   i22 = HEAP32[i12 + 4 >> 2] | 0;
  }
 } while (0);
 i7 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i10 = HEAP32[i7 + 4 >> 2] | 0;
   if ((HEAP32[i7 + 16 >> 2] & 32 | 0) == 0) {
    i24 = HEAP32[i7 + 8 >> 2] | 0;
    if ((i10 | 0) == 0) {
     break;
    } else {
     i25 = 0;
    }
    while (1) {
     HEAP16[i21 + (i25 + i22 << 1) >> 1] = HEAP16[i24 + (i25 << 1) >> 1] | 0;
     i25 = i25 + 1 | 0;
     if (i25 >>> 0 >= i10 >>> 0) {
      break;
     }
    }
   } else {
    i24 = HEAP32[i7 + 8 >> 2] | 0;
    if ((i10 | 0) == 0) {
     break;
    } else {
     i26 = 0;
    }
    while (1) {
     HEAP16[i21 + (i26 + i22 << 1) >> 1] = HEAPU8[i24 + i26 | 0] | 0;
     i26 = i26 + 1 | 0;
     if (i26 >>> 0 >= i10 >>> 0) {
      break;
     }
    }
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = i20;
 STACKTOP = i4;
 return;
}
function __ZN3WTF9HashTableIN7WebCore13QualifiedNameENS_12KeyValuePairIS2_NS1_13SVGLengthModeEEENS_24KeyValuePairKeyExtractorIS5_EENS1_17QualifiedNameHashENS_7HashMapIS2_S4_S8_NS_10HashTraitsIS2_EENSA_IS4_EEE18KeyValuePairTraitsESB_E6rehashEiPS5_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i1 + 4 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 i12 = i1 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 HEAP32[i10 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = i2 - 1;
 i10 = __ZN3WTF10fastMallocEj(i2 << 3) | 0;
 if ((i2 | 0) > 0) {
  i14 = i8 | 0;
  i15 = i7 | 0;
  i16 = i7 + 4 | 0;
  i17 = i9 | 0;
  i18 = i9 + 4 | 0;
  i19 = i7 | 0;
  i7 = i9 | 0;
  i9 = 0;
  while (1) {
   i20 = HEAP32[(__ZN7WebCore9nullQNameEv() | 0) >> 2] | 0;
   HEAP32[i14 >> 2] = i20;
   i21 = i20 | 0;
   HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
   i21 = HEAP32[i14 >> 2] | 0;
   HEAP32[i15 >> 2] = i21;
   i20 = i21 | 0;
   HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
   HEAP32[i16 >> 2] = 0;
   i20 = HEAP32[i15 >> 2] | 0;
   HEAP32[i17 >> 2] = i20;
   i21 = i20 | 0;
   HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
   HEAP32[i18 >> 2] = HEAP32[i16 >> 2];
   __ZN7WebCore13QualifiedNameD1Ev(i19);
   __ZN7WebCore13QualifiedNameD1Ev(i8);
   i21 = HEAP32[i17 >> 2] | 0;
   HEAP32[i10 + (i9 << 3) >> 2] = i21;
   i20 = i21 | 0;
   HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
   HEAP32[i10 + (i9 << 3) + 4 >> 2] = HEAP32[i18 >> 2];
   __ZN7WebCore13QualifiedNameD1Ev(i7);
   i9 = i9 + 1 | 0;
   if ((i9 | 0) >= (i2 | 0)) {
    break;
   }
  }
 }
 HEAP32[i12 >> 2] = i10;
 if ((i11 | 0) == 0) {
  HEAP32[i1 + 16 >> 2] = 0;
  i22 = 0;
  i23 = i13;
  __ZN3WTF8fastFreeEPv(i23);
  STACKTOP = i4;
  return i22 | 0;
 }
 i10 = i6 | 0;
 i12 = i5 | 0;
 i2 = 0;
 i9 = 0;
 while (1) {
  i7 = i13 + (i2 << 3) | 0;
  i18 = HEAP32[(__ZN7WebCore9nullQNameEv() | 0) >> 2] | 0;
  HEAP32[i10 >> 2] = i18;
  i17 = i18 | 0;
  HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
  i17 = i7 | 0;
  i18 = (HEAP32[i17 >> 2] | 0) == (HEAP32[i10 >> 2] | 0);
  __ZN7WebCore13QualifiedNameD1Ev(i6);
  do {
   if (i18) {
    i24 = i9;
   } else {
    if ((HEAP32[i17 >> 2] | 0) == -1) {
     i24 = i9;
     break;
    }
    __ZN3WTF9HashTableIN7WebCore13QualifiedNameENS_12KeyValuePairIS2_NS1_13SVGLengthModeEEENS_24KeyValuePairKeyExtractorIS5_EENS1_17QualifiedNameHashENS_7HashMapIS2_S4_S8_NS_10HashTraitsIS2_EENSA_IS4_EEE18KeyValuePairTraitsESB_E16lookupForWritingINS_22IdentityHashTranslatorIS8_EES2_EENSt3__14pairIPS5_bEERKT0_(i5, i1, i7 | 0);
    i8 = HEAP32[i12 >> 2] | 0;
    __ZN7WebCore13QualifiedNameD1Ev(i8 | 0);
    i19 = HEAP32[i17 >> 2] | 0;
    HEAP32[i8 >> 2] = i19;
    i16 = i19 | 0;
    HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
    HEAP32[i8 + 4 >> 2] = HEAP32[i13 + (i2 << 3) + 4 >> 2];
    i24 = (i7 | 0) == (i3 | 0) ? i8 : i9;
   }
  } while (0);
  i7 = i2 + 1 | 0;
  if ((i7 | 0) == (i11 | 0)) {
   break;
  } else {
   i2 = i7;
   i9 = i24;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i11 | 0) > 0) {
  i25 = 0;
 } else {
  i22 = i24;
  i23 = i13;
  __ZN3WTF8fastFreeEPv(i23);
  STACKTOP = i4;
  return i22 | 0;
 }
 while (1) {
  i1 = i13 + (i25 << 3) | 0;
  if ((HEAP32[i1 >> 2] | 0) != -1) {
   __ZN7WebCore13QualifiedNameD1Ev(i1 | 0);
  }
  i1 = i25 + 1 | 0;
  if ((i1 | 0) < (i11 | 0)) {
   i25 = i1;
  } else {
   i22 = i24;
   break;
  }
 }
 i23 = i13;
 __ZN3WTF8fastFreeEPv(i23);
 STACKTOP = i4;
 return i22 | 0;
}
function __ZNK7WebCore9SVGLength13valueAsStringEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 __ZN3WTF6String6numberEdjNS_29TrailingZerosTruncatingPolicyE(i5, +HEAPF32[i2 >> 2], 6, 1);
 switch (HEAP32[i2 + 4 >> 2] & 15 | 0) {
 case 9:
  {
   __ZN3WTF6StringC1EPKc(i6, H_BASE + 16 | 0);
   break;
  }
 case 10:
  {
   __ZN3WTF6StringC1EPKc(i6, H_BASE + 8 | 0);
   break;
  }
 case 0:
 case 1:
  {
   __ZN3WTF6StringC1EPKc(i6, H_BASE + 88 | 0);
   break;
  }
 case 3:
  {
   __ZN3WTF6StringC1EPKc(i6, H_BASE + 64 | 0);
   break;
  }
 case 4:
  {
   __ZN3WTF6StringC1EPKc(i6, H_BASE + 56 | 0);
   break;
  }
 case 5:
  {
   __ZN3WTF6StringC1EPKc(i6, H_BASE + 48 | 0);
   break;
  }
 case 6:
  {
   __ZN3WTF6StringC1EPKc(i6, H_BASE + 40 | 0);
   break;
  }
 case 7:
  {
   __ZN3WTF6StringC1EPKc(i6, H_BASE + 32 | 0);
   break;
  }
 case 8:
  {
   __ZN3WTF6StringC1EPKc(i6, H_BASE + 24 | 0);
   break;
  }
 case 2:
  {
   __ZN3WTF6StringC1EPKc(i6, H_BASE + 72 | 0);
   break;
  }
 default:
  {
   HEAP32[i6 >> 2] = 0;
  }
 }
 i2 = i5 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 i7 = (i5 | 0) == 0;
 if (!i7) {
  i8 = i5 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 i8 = i6 | 0;
 i6 = HEAP32[i8 >> 2] | 0;
 i9 = (i6 | 0) == 0;
 if (!i9) {
  i10 = i6 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
 }
 i10 = i4 | 0;
 HEAP32[i10 >> 2] = i5;
 if (!i7) {
  i11 = i5 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
 }
 i11 = i4 + 4 | 0;
 HEAP32[i11 >> 2] = i6;
 do {
  if (!i9) {
   i12 = i6 | 0;
   i13 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = i13 + 2;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i12 >> 2] = i13;
    break;
   }
  }
 } while (0);
 do {
  if (!i7) {
   i6 = i5 | 0;
   i9 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i6 >> 2] = i9;
    break;
   }
  }
 } while (0);
 __ZNK3WTF12StringAppendINS_6StringES1_EcvS1_Ev(i1, i4);
 i4 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i11 = i4 | 0;
   i1 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i11 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i10 = i4 | 0;
   i1 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i10 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i8 = i4 | 0;
   i1 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i8 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i2 = i4 | 0;
 i1 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i2 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore9SVGLength21fromCSSPrimitiveValueEPNS_17CSSPrimitiveValueE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, d14 = +0, d15 = +0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 24 | 0;
 i7 = i3 + 32 | 0;
 i8 = i3 + 40 | 0;
 i9 = i3 + 48 | 0;
 i10 = (__ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(i2) | 0) & 65535;
 i11 = (i10 - 1 | 0) >>> 0 < 10 >>> 0 ? i10 : 0;
 if ((i11 | 0) == 0) {
  i10 = i6 | 0;
  HEAP32[i10 >> 2] = 0;
  HEAPF32[i1 >> 2] = +0;
  HEAP32[i1 + 4 >> 2] = 33;
  i12 = i3 + 16 | 0;
  HEAP32[i12 >> 2] = 0;
  __ZN7WebCore9SVGLength16setValueAsStringERKN3WTF6StringERi(i1, i6, i12);
  i12 = HEAP32[i10 >> 2] | 0;
  if ((i12 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i10 = i12 | 0;
  i6 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
  if ((i6 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i12);
   STACKTOP = i3;
   return;
  } else {
   HEAP32[i10 >> 2] = i6;
   STACKTOP = i3;
   return;
  }
 }
 i6 = i8 | 0;
 HEAP32[i6 >> 2] = 0;
 i10 = i7 | 0;
 HEAPF32[i10 >> 2] = +0;
 i12 = i7 + 4 | 0;
 HEAP32[i12 >> 2] = 33;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = 0;
 __ZN7WebCore9SVGLength16setValueAsStringERKN3WTF6StringERi(i7, i8, i13);
 i13 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i6 = i13 | 0;
   i8 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i6 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i13 = i11 & 65535;
 d14 = +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEv(i2);
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
 if (!(i13 << 16 >> 16 == 0 | (i13 & 65535) >>> 0 > 10 >>> 0)) {
  i13 = HEAP32[i12 >> 2] & -16 | i11;
  HEAP32[i12 >> 2] = i13;
  HEAPF32[i10 >> 2] = d15;
  HEAPF32[i1 >> 2] = d15;
  HEAP32[i1 + 4 >> 2] = i13;
  STACKTOP = i3;
  return;
 }
 i13 = i9 | 0;
 HEAP32[i13 >> 2] = 0;
 HEAPF32[i1 >> 2] = +0;
 HEAP32[i1 + 4 >> 2] = 33;
 i10 = i5 | 0;
 HEAP32[i10 >> 2] = 0;
 __ZN7WebCore9SVGLength16setValueAsStringERKN3WTF6StringERi(i1, i9, i10);
 i10 = HEAP32[i13 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i13 = i10 | 0;
 i9 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
 if ((i9 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i10);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i13 >> 2] = i9;
  STACKTOP = i3;
  return;
 }
}
function __ZN3WTF9HashTableIN7WebCore13QualifiedNameENS_12KeyValuePairIS2_NS1_13SVGLengthModeEEENS_24KeyValuePairKeyExtractorIS5_EENS1_17QualifiedNameHashENS_7HashMapIS2_S4_S8_NS_10HashTraitsIS2_EENSA_IS4_EEE18KeyValuePairTraitsESB_E16lookupForWritingINS_22IdentityHashTranslatorIS8_EES2_EENSt3__14pairIPS5_bEERKT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 i7 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = i3 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i8 = i3 + 4 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZNK7WebCore13QualifiedName17QualifiedNameImpl11computeHashEv(i3) | 0;
  HEAP32[i8 >> 2] = i10;
  i11 = i10;
 } else {
  i11 = i9;
 }
 i9 = i11 & i7;
 i10 = i6 + (i9 << 3) | 0;
 i8 = i5 | 0;
 i3 = HEAP32[(__ZN7WebCore9nullQNameEv() | 0) >> 2] | 0;
 HEAP32[i8 >> 2] = i3;
 i12 = i3 | 0;
 HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
 i12 = i10 | 0;
 i3 = (HEAP32[i12 >> 2] | 0) == (HEAP32[i8 >> 2] | 0);
 __ZN7WebCore13QualifiedNameD1Ev(i5);
 L4 : do {
  if (i3) {
   i13 = 0;
   i14 = i10;
  } else {
   i15 = (i11 >>> 23) + ~i11 | 0;
   i16 = i15 << 12 ^ i15;
   i15 = i16 >>> 7 ^ i16;
   i16 = i15 << 2 ^ i15;
   i15 = i16 >>> 20 ^ i16 | 1;
   i16 = 0;
   i17 = 0;
   i18 = i9;
   i19 = i10;
   i20 = i12;
   while (1) {
    i21 = HEAP32[i20 >> 2] | 0;
    if ((i21 | 0) == -1) {
     i22 = i19;
    } else {
     if ((i21 | 0) == (HEAP32[i2 >> 2] | 0)) {
      break;
     } else {
      i22 = i16;
     }
    }
    i21 = (i17 | 0) == 0 ? i15 : i17;
    i23 = i21 + i18 & i7;
    i24 = i6 + (i23 << 3) | 0;
    i25 = HEAP32[(__ZN7WebCore9nullQNameEv() | 0) >> 2] | 0;
    HEAP32[i8 >> 2] = i25;
    i26 = i25 | 0;
    HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 1;
    i26 = i24 | 0;
    i25 = (HEAP32[i26 >> 2] | 0) == (HEAP32[i8 >> 2] | 0);
    __ZN7WebCore13QualifiedNameD1Ev(i5);
    if (i25) {
     i13 = i22;
     i14 = i24;
     break L4;
    } else {
     i16 = i22;
     i17 = i21;
     i18 = i23;
     i19 = i24;
     i20 = i26;
    }
   }
   HEAP32[i1 >> 2] = i19;
   HEAP8[i1 + 4 | 0] = 1;
   STACKTOP = i4;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = (i13 | 0) != 0 ? i13 : i14;
 HEAP8[i1 + 4 | 0] = 0;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore9SVGLength16setValueAsStringERKN3WTF6StringERi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i2 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i2 + 4 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 HEAPF32[i5 >> 2] = +0;
 if ((HEAP32[i2 + 16 >> 2] & 32 | 0) == 0) {
  i8 = HEAP32[i2 + 8 >> 2] | 0;
  i9 = i2;
 } else {
  i10 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i2) | 0;
  i8 = i10;
  i9 = HEAP32[i7 >> 2] | 0;
 }
 HEAP32[i6 >> 2] = i8;
 if ((i9 | 0) == 0) {
  i11 = 0;
 } else {
  i11 = HEAP32[i9 + 4 >> 2] | 0;
 }
 i9 = i8 + (i11 << 1) | 0;
 if (!(__ZN7WebCore11parseNumberERPKtS1_Rfb(i6, i9, i5, 0) | 0)) {
  HEAP32[i3 >> 2] = 12;
  STACKTOP = i4;
  return;
 }
 i11 = HEAP32[i6 >> 2] | 0;
 L18 : do {
  if ((i11 | 0) == (i9 | 0)) {
   i12 = 1;
  } else {
   i8 = HEAP16[i11 >> 1] | 0;
   i7 = i11 + 2 | 0;
   HEAP32[i6 >> 2] = i7;
   do {
    if ((i7 | 0) == (i9 | 0)) {
     i13 = i8 << 16 >> 16 == 37 ? 2 : 0;
     i14 = 22;
    } else {
     i10 = HEAP16[i7 >> 1] | 0;
     i2 = i11 + 4 | 0;
     HEAP32[i6 >> 2] = i2;
     if ((i2 | 0) != (i9 | 0)) {
      break;
     }
     i2 = i8 << 16 >> 16 == 101;
     i15 = i10 << 16 >> 16 == 109;
     if (i2 & i15) {
      i12 = 3;
      break L18;
     }
     i16 = i10 << 16 >> 16 == 120;
     if (i2 & i16) {
      i12 = 4;
      break L18;
     }
     i2 = i8 << 16 >> 16 == 112;
     if (i2 & i16) {
      i12 = 5;
      break L18;
     }
     if (i8 << 16 >> 16 == 99 & i15) {
      i12 = 6;
      break L18;
     }
     if (i8 << 16 >> 16 == 109 & i15) {
      i12 = 7;
      break L18;
     }
     if (i8 << 16 >> 16 == 105 & i10 << 16 >> 16 == 110) {
      i12 = 8;
      break L18;
     }
     if (i2 & i10 << 16 >> 16 == 116) {
      i12 = 9;
      break L18;
     }
     i13 = i2 & i10 << 16 >> 16 == 99 ? 10 : 0;
     i14 = 22;
    }
   } while (0);
   if ((i14 | 0) == 22) {
    if ((i13 | 0) != 0) {
     i12 = i13;
     break;
    }
   }
   HEAP32[i3 >> 2] = 12;
   STACKTOP = i4;
   return;
  }
 } while (0);
 i3 = i1 + 4 | 0;
 HEAP32[i3 >> 2] = HEAP32[i3 >> 2] & -16 | i12;
 HEAPF32[i1 >> 2] = +HEAPF32[i5 >> 2];
 STACKTOP = i4;
 return;
}
function __ZN3WTF9HashTableIN7WebCore13QualifiedNameENS_12KeyValuePairIS2_NS1_13SVGLengthModeEEENS_24KeyValuePairKeyExtractorIS5_EENS1_17QualifiedNameHashENS_7HashMapIS2_S4_S8_NS_10HashTraitsIS2_EENSA_IS4_EEE18KeyValuePairTraitsESB_E6lookupINS_22IdentityHashTranslatorIS8_EES2_EEPS5_RKT0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i1 + 8 >> 2] | 0;
 i6 = HEAP32[i1 >> 2] | 0;
 i1 = i2 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 i7 = i2 + 4 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i9 = __ZNK7WebCore13QualifiedName17QualifiedNameImpl11computeHashEv(i2) | 0;
  HEAP32[i7 >> 2] = i9;
  i10 = i9;
 } else {
  i10 = i8;
 }
 if ((i6 | 0) == 0) {
  i11 = 0;
  STACKTOP = i3;
  return i11 | 0;
 }
 i8 = i10 & i5;
 i9 = i6 + (i8 << 3) | 0;
 i7 = i4 | 0;
 i2 = HEAP32[(__ZN7WebCore9nullQNameEv() | 0) >> 2] | 0;
 HEAP32[i7 >> 2] = i2;
 i12 = i2 | 0;
 HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
 i12 = i9 | 0;
 i2 = (HEAP32[i12 >> 2] | 0) == (HEAP32[i7 >> 2] | 0);
 __ZN7WebCore13QualifiedNameD1Ev(i4);
 if (i2) {
  i11 = 0;
  STACKTOP = i3;
  return i11 | 0;
 }
 i2 = (i10 >>> 23) + ~i10 | 0;
 i10 = i2 << 12 ^ i2;
 i2 = i10 >>> 7 ^ i10;
 i10 = i2 << 2 ^ i2;
 i2 = i10 >>> 20 ^ i10 | 1;
 i10 = 0;
 i13 = i8;
 i8 = i9;
 i9 = i12;
 while (1) {
  i12 = HEAP32[i9 >> 2] | 0;
  if ((i12 | 0) != -1) {
   if ((i12 | 0) == (HEAP32[i1 >> 2] | 0)) {
    i11 = i8;
    i14 = 10;
    break;
   }
  }
  i12 = (i10 | 0) == 0 ? i2 : i10;
  i15 = i12 + i13 & i5;
  i16 = i6 + (i15 << 3) | 0;
  i17 = HEAP32[(__ZN7WebCore9nullQNameEv() | 0) >> 2] | 0;
  HEAP32[i7 >> 2] = i17;
  i18 = i17 | 0;
  HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
  i18 = i16 | 0;
  i17 = (HEAP32[i18 >> 2] | 0) == (HEAP32[i7 >> 2] | 0);
  __ZN7WebCore13QualifiedNameD1Ev(i4);
  if (i17) {
   i11 = 0;
   i14 = 12;
   break;
  } else {
   i10 = i12;
   i13 = i15;
   i8 = i16;
   i9 = i18;
  }
 }
 if ((i14 | 0) == 12) {
  STACKTOP = i3;
  return i11 | 0;
 } else if ((i14 | 0) == 10) {
  STACKTOP = i3;
  return i11 | 0;
 }
 return 0;
}
function __ZNK3WTF12StringAppendINS_6StringES1_EcvS1_Ev(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i5 | 0;
 i8 = HEAP32[i2 >> 2] | 0;
 HEAP32[i7 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i9 = i8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
 }
 i9 = i6 | 0;
 i8 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i9 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i2 = i8 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 __ZN3WTF13tryMakeStringINS_6StringES1_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i4, i5, i6);
 i6 = i4 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 i6 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i9 = i6 | 0;
   i5 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i9 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i7 = i6 | 0;
   i5 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i7 >> 2] = i5;
    break;
   }
  }
 } while (0);
 if ((i4 | 0) == 0) {
  _WTFCrash();
 } else {
  HEAP32[i1 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore9SVGLength9constructENS_13SVGLengthModeERKN3WTF6StringERNS_15SVGParsingErrorENS_27SVGLengthNegativeValuesModeE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i7 = i6 + 8 | 0;
 i8 = i6 + 16 | 0;
 HEAP32[i7 >> 2] = 0;
 i9 = i8 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i1 | 0;
 HEAPF32[i10 >> 2] = +0;
 HEAP32[i1 + 4 >> 2] = i2 << 4 | 1;
 i2 = i6 | 0;
 HEAP32[i2 >> 2] = 0;
 __ZN7WebCore9SVGLength16setValueAsStringERKN3WTF6StringERi(i1, i8, i2);
 i2 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i9 = i2 | 0;
   i8 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i9 >> 2] = i8;
    break;
   }
  }
 } while (0);
 __ZN7WebCore9SVGLength16setValueAsStringERKN3WTF6StringERi(i1, i3, i7);
 if ((HEAP32[i7 >> 2] | 0) != 0) {
  HEAP32[i4 >> 2] = 1;
  STACKTOP = i6;
  return;
 }
 if ((i5 | 0) != 1) {
  STACKTOP = i6;
  return;
 }
 if (+HEAPF32[i10 >> 2] >= +0) {
  STACKTOP = i6;
  return;
 }
 HEAP32[i4 >> 2] = 2;
 STACKTOP = i6;
 return;
}
function __ZN7WebCore9SVGLength23convertToSpecifiedUnitsEtRKNS_16SVGLengthContextERi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, d7 = +0, d8 = +0;
 i5 = i2 & 65535;
 if (i2 << 16 >> 16 == 0 | (i2 & 65535) >>> 0 > 10 >>> 0) {
  HEAP32[i4 >> 2] = 9;
  return;
 }
 i2 = i1 | 0;
 i6 = i1 + 4 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 d7 = +__ZNK7WebCore16SVGLengthContext23convertValueToUserUnitsEfNS_13SVGLengthModeENS_13SVGLengthTypeERi(i3, +HEAPF32[i2 >> 2], i1 >>> 4, i1 & 15, i4);
 if ((HEAP32[i4 >> 2] | 0) != 0) {
  return;
 }
 i1 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i1 & -16 | i5;
 if ((i5 & 15 | 0) == 2) {
  d8 = d7 / +100;
 } else {
  d8 = d7;
 }
 HEAP32[i4 >> 2] = 0;
 i5 = HEAP32[i6 >> 2] | 0;
 d7 = +__ZNK7WebCore16SVGLengthContext25convertValueFromUserUnitsEfNS_13SVGLengthModeENS_13SVGLengthTypeERi(i3, d8, i5 >>> 4, i5 & 15, i4);
 do {
  if ((HEAP32[i4 >> 2] | 0) == 0) {
   HEAPF32[i2 >> 2] = d7;
   if ((HEAP32[i4 >> 2] | 0) != 0) {
    break;
   }
   return;
  }
 } while (0);
 HEAP32[i6 >> 2] = i1;
 return;
}
function __ZN7WebCore9SVGLength19toCSSPrimitiveValueERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, d5 = +0;
 i3 = HEAP32[i2 + 4 >> 2] & 15;
 switch (i3 | 0) {
 case 1:
  {
   i4 = i3;
   break;
  }
 case 2:
  {
   i4 = i3;
   break;
  }
 case 3:
  {
   i4 = i3;
   break;
  }
 case 4:
  {
   i4 = i3;
   break;
  }
 case 5:
  {
   i4 = i3;
   break;
  }
 case 6:
  {
   i4 = i3;
   break;
  }
 case 7:
  {
   i4 = i3;
   break;
  }
 case 8:
  {
   i4 = i3;
   break;
  }
 case 9:
  {
   i4 = i3;
   break;
  }
 case 10:
  {
   i4 = i3;
   break;
  }
 default:
  {
   i4 = 0;
  }
 }
 d5 = +HEAPF32[i2 >> 2];
 i2 = __ZN3WTF10fastMallocEj(16) | 0;
 __ZN7WebCore17CSSPrimitiveValueC1EdNS0_9UnitTypesE(i2, d5, i4);
 HEAP32[i1 >> 2] = i2;
 return;
}
function __ZN7WebCore9SVGLengthC2ERKNS_16SVGLengthContextEfNS_13SVGLengthModeENS_13SVGLengthTypeE(i1, i2, d3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, d9 = +0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i1 | 0;
 HEAPF32[i7 >> 2] = +0;
 i8 = i4 << 4 | i5;
 HEAP32[i1 + 4 >> 2] = i8;
 i1 = i6 | 0;
 HEAP32[i1 >> 2] = 0;
 i4 = i5 & 15;
 if ((i4 | 0) == 2) {
  d9 = d3 / +100;
 } else {
  d9 = d3;
 }
 HEAP32[i1 >> 2] = 0;
 d3 = +__ZNK7WebCore16SVGLengthContext25convertValueFromUserUnitsEfNS_13SVGLengthModeENS_13SVGLengthTypeERi(i2, d9, i8 >>> 4, i4, i1);
 if ((HEAP32[i1 >> 2] | 0) != 0) {
  STACKTOP = i6;
  return;
 }
 HEAPF32[i7 >> 2] = d3;
 STACKTOP = i6;
 return;
}
function __ZN7WebCore9SVGLengthC1ERKNS_16SVGLengthContextEfNS_13SVGLengthModeENS_13SVGLengthTypeE(i1, i2, d3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, d9 = +0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i1 | 0;
 HEAPF32[i7 >> 2] = +0;
 i8 = i4 << 4 | i5;
 HEAP32[i1 + 4 >> 2] = i8;
 i1 = i6 | 0;
 HEAP32[i1 >> 2] = 0;
 i4 = i5 & 15;
 if ((i4 | 0) == 2) {
  d9 = d3 / +100;
 } else {
  d9 = d3;
 }
 HEAP32[i1 >> 2] = 0;
 d3 = +__ZNK7WebCore16SVGLengthContext25convertValueFromUserUnitsEfNS_13SVGLengthModeENS_13SVGLengthTypeERi(i2, d9, i8 >>> 4, i4, i1);
 if ((HEAP32[i1 >> 2] | 0) != 0) {
  STACKTOP = i6;
  return;
 }
 HEAPF32[i7 >> 2] = d3;
 STACKTOP = i6;
 return;
}
function __ZN7WebCore9SVGLength8setValueERKNS_16SVGLengthContextEfNS_13SVGLengthModeENS_13SVGLengthTypeERi(i1, i2, d3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, d8 = +0;
 i7 = i1 + 4 | 0;
 HEAP32[i7 >> 2] = i4 << 4 | i5;
 if ((i5 & 15 | 0) == 2) {
  d8 = d3 / +100;
 } else {
  d8 = d3;
 }
 HEAP32[i6 >> 2] = 0;
 i5 = HEAP32[i7 >> 2] | 0;
 d3 = +__ZNK7WebCore16SVGLengthContext25convertValueFromUserUnitsEfNS_13SVGLengthModeENS_13SVGLengthTypeERi(i2, d8, i5 >>> 4, i5 & 15, i6);
 if ((HEAP32[i6 >> 2] | 0) != 0) {
  return;
 }
 HEAPF32[i1 >> 2] = d3;
 return;
}
function __ZN7WebCore9SVGLength8setValueEfRKNS_16SVGLengthContextERi(i1, d2, i3, i4) {
 i1 = i1 | 0;
 d2 = +d2;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, d6 = +0, i7 = 0;
 i5 = i1 + 4 | 0;
 if ((HEAP32[i5 >> 2] & 15 | 0) == 2) {
  d6 = d2 / +100;
 } else {
  d6 = d2;
 }
 HEAP32[i4 >> 2] = 0;
 i7 = HEAP32[i5 >> 2] | 0;
 d2 = +__ZNK7WebCore16SVGLengthContext25convertValueFromUserUnitsEfNS_13SVGLengthModeENS_13SVGLengthTypeERi(i3, d6, i7 >>> 4, i7 & 15, i4);
 if ((HEAP32[i4 >> 2] | 0) != 0) {
  return;
 }
 HEAPF32[i1 >> 2] = d2;
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
function __ZNK7WebCore9SVGLength5valueERKNS_16SVGLengthContextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, d6 = +0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = 0;
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 d6 = +__ZNK7WebCore16SVGLengthContext23convertValueToUserUnitsEfNS_13SVGLengthModeENS_13SVGLengthTypeERi(i2, +HEAPF32[i1 >> 2], i5 >>> 4, i5 & 15, i4);
 STACKTOP = i3;
 return +d6;
}
function __ZN7WebCore9SVGLengthC2ENS_13SVGLengthModeERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAPF32[i1 >> 2] = +0;
 HEAP32[i1 + 4 >> 2] = i2 << 4 | 1;
 i2 = i4 | 0;
 HEAP32[i2 >> 2] = 0;
 __ZN7WebCore9SVGLength16setValueAsStringERKN3WTF6StringERi(i1, i3, i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore9SVGLengthC1ENS_13SVGLengthModeERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAPF32[i1 >> 2] = +0;
 HEAP32[i1 + 4 >> 2] = i2 << 4 | 1;
 i2 = i4 | 0;
 HEAP32[i2 >> 2] = 0;
 __ZN7WebCore9SVGLength16setValueAsStringERKN3WTF6StringERi(i1, i3, i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore9SVGLength22newValueSpecifiedUnitsEtfRi(i1, i2, d3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 i4 = i4 | 0;
 if (i2 << 16 >> 16 == 0 | (i2 & 65535) >>> 0 > 10 >>> 0) {
  HEAP32[i4 >> 2] = 9;
  return;
 } else {
  i4 = i1 + 4 | 0;
  HEAP32[i4 >> 2] = HEAP32[i4 >> 2] & -16 | i2 & 65535;
  HEAPF32[i1 >> 2] = d3;
  return;
 }
}
function __ZNK7WebCore9SVGLength5valueERKNS_16SVGLengthContextERi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 return +(+__ZNK7WebCore16SVGLengthContext23convertValueToUserUnitsEfNS_13SVGLengthModeENS_13SVGLengthTypeERi(i2, +HEAPF32[i1 >> 2], i4 >>> 4, i4 & 15, i3));
}
function __ZN7WebCore9SVGLength16setValueAsStringERKN3WTF6StringENS_13SVGLengthModeERi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 HEAPF32[i1 >> 2] = +0;
 HEAP32[i1 + 4 >> 2] = i3 << 4 | 1;
 __ZN7WebCore9SVGLength16setValueAsStringERKN3WTF6StringERi(i1, i2, i4);
 return;
}
function __ZNK7WebCore9SVGLengthneERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if ((HEAP32[i1 + 4 >> 2] | 0) != (HEAP32[i2 + 4 >> 2] | 0)) {
  i3 = 1;
  return i3 | 0;
 }
 i3 = +HEAPF32[i1 >> 2] != +HEAPF32[i2 >> 2];
 return i3 | 0;
}
function __ZNK7WebCore9SVGLengtheqERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if ((HEAP32[i1 + 4 >> 2] | 0) != (HEAP32[i2 + 4 >> 2] | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = +HEAPF32[i1 >> 2] == +HEAPF32[i2 >> 2];
 return i3 | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZNK7WebCore9SVGLength17valueAsPercentageEv(i1) {
 i1 = i1 | 0;
 var d2 = +0, d3 = +0;
 d2 = +HEAPF32[i1 >> 2];
 if ((HEAP32[i1 + 4 >> 2] & 15 | 0) != 2) {
  d3 = d2;
  return +d3;
 }
 d3 = d2 / +100;
 return +d3;
}
function dynCall_viifii(i1, i2, i3, d4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 i6 = i6 | 0;
 FUNCTION_TABLE_viifii[i1 & 3](i2 | 0, i3 | 0, +d4, i5 | 0, i6 | 0);
}
function __ZN7WebCore9SVGLengthC2ERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAPF32[i1 >> 2] = +HEAPF32[i2 >> 2];
 HEAP32[i1 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 return;
}
function __ZN7WebCore9SVGLengthC1ERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAPF32[i1 >> 2] = +HEAPF32[i2 >> 2];
 HEAP32[i1 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 return;
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
 FUNCTION_TABLE_vii[i1 & 3](i2 | 0, i3 | 0);
}
function b4(i1, i2, d3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(4);
}
function __ZNK7WebCore9SVGLength8unitModeEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 4 >> 2] | 0) >>> 4 | 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function __ZNK7WebCore9SVGLength8unitTypeEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 4 >> 2] & 15 | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 1](i2 | 0);
}
function b3(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(3);
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
function b5() {
 abort(5);
}
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0];
  var FUNCTION_TABLE_vii = [b1,b1,__ZN7WebCore9SVGLengthC2ERKS0_,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_viii = [b3,b3,__ZN7WebCore9SVGLengthC2ENS_13SVGLengthModeERKN3WTF6StringE,b3];
  var FUNCTION_TABLE_viifii = [b4,b4,__ZN7WebCore9SVGLengthC2ERKNS_16SVGLengthContextEfNS_13SVGLengthModeENS_13SVGLengthTypeE,b4];
  var FUNCTION_TABLE_v = [b5,b5];
  var FUNCTION_TABLE_iii = [b6,b6];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_viifii: dynCall_viifii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_viifii": invoke_viifii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore8SVGNames6fxAttrE": __ZN7WebCore8SVGNames6fxAttrE, "__ZN7WebCore8SVGNames15markerWidthAttrE": __ZN7WebCore8SVGNames15markerWidthAttrE, "__ZN7WebCore8SVGNames16markerHeightAttrE": __ZN7WebCore8SVGNames16markerHeightAttrE, "__ZN7WebCore8SVGNames10heightAttrE": __ZN7WebCore8SVGNames10heightAttrE, "__ZN7WebCore8SVGNames6cyAttrE": __ZN7WebCore8SVGNames6cyAttrE, "__ZN7WebCore8SVGNames6x1AttrE": __ZN7WebCore8SVGNames6x1AttrE, "__ZN7WebCore8SVGNames6dxAttrE": __ZN7WebCore8SVGNames6dxAttrE, "__ZN7WebCore8SVGNames5yAttrE": __ZN7WebCore8SVGNames5yAttrE, "__ZN7WebCore8SVGNames6cxAttrE": __ZN7WebCore8SVGNames6cxAttrE, "__ZN7WebCore8SVGNames9widthAttrE": __ZN7WebCore8SVGNames9widthAttrE, "__ZN7WebCore8SVGNames5xAttrE": __ZN7WebCore8SVGNames5xAttrE, "__ZN7WebCore8SVGNames8refXAttrE": __ZN7WebCore8SVGNames8refXAttrE, "__ZN7WebCore8SVGNames6fyAttrE": __ZN7WebCore8SVGNames6fyAttrE, "__ZN7WebCore8SVGNames5rAttrE": __ZN7WebCore8SVGNames5rAttrE, "__ZN7WebCore8SVGNames14textLengthAttrE": __ZN7WebCore8SVGNames14textLengthAttrE, "__ZN7WebCore8SVGNames6y2AttrE": __ZN7WebCore8SVGNames6y2AttrE, "__ZN7WebCore8SVGNames8refYAttrE": __ZN7WebCore8SVGNames8refYAttrE, "__ZN7WebCore8SVGNames6y1AttrE": __ZN7WebCore8SVGNames6y1AttrE, "__ZN7WebCore8SVGNames6dyAttrE": __ZN7WebCore8SVGNames6dyAttrE, "__ZN7WebCore8SVGNames15startOffsetAttrE": __ZN7WebCore8SVGNames15startOffsetAttrE, "__ZN7WebCore8SVGNames6x2AttrE": __ZN7WebCore8SVGNames6x2AttrE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_viifii = Module["dynCall_viifii"] = asm["dynCall_viifii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore9SVGLengthC2ERKS0_","_strlen","__ZNK7WebCore9SVGLength8unitTypeEv","__ZN3WTF13tryMakeStringINS_6StringES1_EENS_10PassRefPtrINS_10StringImplEEET_T0_","__ZN7WebCore9SVGLength8setValueERKNS_16SVGLengthContextEfNS_13SVGLengthModeENS_13SVGLengthTypeERi","__ZNK3WTF12StringAppendINS_6StringES1_EcvS1_Ev","__ZN3WTF9HashTableIN7WebCore13QualifiedNameENS_12KeyValuePairIS2_NS1_13SVGLengthModeEEENS_24KeyValuePairKeyExtractorIS5_EENS1_17QualifiedNameHashENS_7HashMapIS2_S4_S8_NS_10HashTraitsIS2_EENSA_IS4_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EERKS2_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S5_S7_S8_SE_SB_EEEEOT0_OT1_","__ZNK7WebCore9SVGLength13valueAsStringEv","__ZN7WebCore9SVGLength8setValueEfRKNS_16SVGLengthContextERi","_memset","_memcpy","__ZN3WTF9HashTableIN7WebCore13QualifiedNameENS_12KeyValuePairIS2_NS1_13SVGLengthModeEEENS_24KeyValuePairKeyExtractorIS5_EENS1_17QualifiedNameHashENS_7HashMapIS2_S4_S8_NS_10HashTraitsIS2_EENSA_IS4_EEE18KeyValuePairTraitsESB_E6lookupINS_22IdentityHashTranslatorIS8_EES2_EEPS5_RKT0_","__ZNK7WebCore9SVGLength17valueAsPercentageEv","__ZNK7WebCore9SVGLength8unitModeEv","__ZN7WebCore9SVGLength19toCSSPrimitiveValueERKS0_","__ZN7WebCore9SVGLength16setValueAsStringERKN3WTF6StringERi","__ZN7WebCore9SVGLength22newValueSpecifiedUnitsEtfRi","__ZNK7WebCore9SVGLengtheqERKS0_","__ZN7WebCore9SVGLength23convertToSpecifiedUnitsEtRKNS_16SVGLengthContextERi","__ZN3WTF9HashTableIN7WebCore13QualifiedNameENS_12KeyValuePairIS2_NS1_13SVGLengthModeEEENS_24KeyValuePairKeyExtractorIS5_EENS1_17QualifiedNameHashENS_7HashMapIS2_S4_S8_NS_10HashTraitsIS2_EENSA_IS4_EEE18KeyValuePairTraitsESB_E16lookupForWritingINS_22IdentityHashTranslatorIS8_EES2_EENSt3__14pairIPS5_bEERKT0_","__ZN7WebCore9SVGLength36lengthModeForAnimatedLengthAttributeERKNS_13QualifiedNameE","__ZN7WebCore9SVGLengthC2ERKNS_16SVGLengthContextEfNS_13SVGLengthModeENS_13SVGLengthTypeE","__ZN7WebCore9SVGLength21fromCSSPrimitiveValueEPNS_17CSSPrimitiveValueE","__ZNK7WebCore9SVGLength5valueERKNS_16SVGLengthContextE","__ZN7WebCore9SVGLength9constructENS_13SVGLengthModeERKN3WTF6StringERNS_15SVGParsingErrorENS_27SVGLengthNegativeValuesModeE","__ZNK7WebCore9SVGLength5valueERKNS_16SVGLengthContextERi","__ZNK7WebCore9SVGLengthneERKS0_","__ZN7WebCore9SVGLengthC2ENS_13SVGLengthModeERKN3WTF6StringE","__ZN7WebCore9SVGLength16setValueAsStringERKN3WTF6StringENS_13SVGLengthModeERi","__ZN3WTF9HashTableIN7WebCore13QualifiedNameENS_12KeyValuePairIS2_NS1_13SVGLengthModeEEENS_24KeyValuePairKeyExtractorIS5_EENS1_17QualifiedNameHashENS_7HashMapIS2_S4_S8_NS_10HashTraitsIS2_EENSA_IS4_EEE18KeyValuePairTraitsESB_E6rehashEiPS5_"]

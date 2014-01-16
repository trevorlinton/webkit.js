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
H_BASE = parentModule["_malloc"](496 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 496;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore18DatabaseAuthorizerC1ERKN3WTF6StringE;
/* memory initializer */ allocate([108,101,110,103,116,104,0,0,108,97,115,116,95,105,110,115,101,114,116,95,114,111,119,105,100,0,0,0,0,0,0,0,104,101,120,0,0,0,0,0,105,102,110,117,108,108,0,0,99,111,97,108,101,115,99,101,0,0,0,0,0,0,0,0,102,116,115,51,0,0,0,0,114,101,103,101,120,112,0,0,111,112,116,105,109,105,122,101,0,0,0,0,0,0,0,0,111,102,102,115,101,116,115,0,115,110,105,112,112,101,116,0,99,104,97,110,103,101,115,0,109,97,116,99,104,0,0,0,116,111,116,97,108,0,0,0,115,117,109,0,0,0,0,0,103,114,111,117,112,95,99,111,110,99,97,116,0,0,0,0,99,111,117,110,116,0,0,0,97,118,103,0,0,0,0,0,115,116,114,102,116,105,109,101,0,0,0,0,0,0,0,0,106,117,108,105,97,110,100,97,121,0,0,0,0,0,0,0,100,97,116,101,116,105,109,101,0,0,0,0,0,0,0,0,116,105,109,101,0,0,0,0,97,98,115,0,0,0,0,0,100,97,116,101,0,0,0,0,122,101,114,111,98,108,111,98,0,0,0,0,0,0,0,0,117,112,112,101,114,0,0,0,116,121,112,101,111,102,0,0,116,114,105,109,0,0,0,0,116,111,116,97,108,95,99,104,97,110,103,101,115,0,0,0,115,117,98,115,116,114,0,0,115,113,108,105,116,101,95,118,101,114,115,105,111,110,0,0,115,113,108,105,116,101,95,115,111,117,114,99,101,95,105,100,0,0,0,0,0,0,0,0,115,111,117,110,100,101,120,0,103,108,111,98,0,0,0,0,114,116,114,105,109,0,0,0,114,111,117,110,100,0,0,0,114,101,112,108,97,99,101,0,113,117,111,116,101,0,0,0,110,117,108,108,105,102,0,0,109,105,110,0,0,0,0,0,109,97,120,0,0,0,0,0,108,116,114,105,109,0,0,0,108,111,119,101,114,0,0,0,108,105,107,101,0,0,0,0,115,113,108,105,116,101,95,114,101,110,97,109,101,95,116,114,105,103,103,101,114,0,0,0,115,113,108,105,116,101,95,114,101,110,97,109,101,95,116,97,98,108,101,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
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
  var __ZN3WTF10StringImpl19latin1CaseFoldTableE=env.__ZN3WTF10StringImpl19latin1CaseFoldTableE|0;
  var __ZN7WebCore11SQLAuthDenyE=env.__ZN7WebCore11SQLAuthDenyE|0;
  var __ZN7WebCore12SQLAuthAllowE=env.__ZN7WebCore12SQLAuthAllowE|0;
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
function __ZN7WebCore18DatabaseAuthorizer23addWhitelistedFunctionsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0, i89 = 0, i90 = 0, i91 = 0, i92 = 0, i93 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 1080 | 0;
 i3 = i2 | 0;
 i4 = i2 + 24 | 0;
 i5 = i2 + 32 | 0;
 i6 = i2 + 48 | 0;
 i7 = i2 + 56 | 0;
 i8 = i2 + 72 | 0;
 i9 = i2 + 80 | 0;
 i10 = i2 + 96 | 0;
 i11 = i2 + 104 | 0;
 i12 = i2 + 120 | 0;
 i13 = i2 + 128 | 0;
 i14 = i2 + 144 | 0;
 i15 = i2 + 152 | 0;
 i16 = i2 + 168 | 0;
 i17 = i2 + 176 | 0;
 i18 = i2 + 192 | 0;
 i19 = i2 + 200 | 0;
 i20 = i2 + 216 | 0;
 i21 = i2 + 224 | 0;
 i22 = i2 + 240 | 0;
 i23 = i2 + 248 | 0;
 i24 = i2 + 264 | 0;
 i25 = i2 + 272 | 0;
 i26 = i2 + 288 | 0;
 i27 = i2 + 296 | 0;
 i28 = i2 + 312 | 0;
 i29 = i2 + 320 | 0;
 i30 = i2 + 336 | 0;
 i31 = i2 + 344 | 0;
 i32 = i2 + 360 | 0;
 i33 = i2 + 368 | 0;
 i34 = i2 + 384 | 0;
 i35 = i2 + 392 | 0;
 i36 = i2 + 408 | 0;
 i37 = i2 + 416 | 0;
 i38 = i2 + 432 | 0;
 i39 = i2 + 440 | 0;
 i40 = i2 + 456 | 0;
 i41 = i2 + 464 | 0;
 i42 = i2 + 480 | 0;
 i43 = i2 + 488 | 0;
 i44 = i2 + 504 | 0;
 i45 = i2 + 512 | 0;
 i46 = i2 + 528 | 0;
 i47 = i2 + 536 | 0;
 i48 = i2 + 552 | 0;
 i49 = i2 + 560 | 0;
 i50 = i2 + 576 | 0;
 i51 = i2 + 584 | 0;
 i52 = i2 + 600 | 0;
 i53 = i2 + 608 | 0;
 i54 = i2 + 624 | 0;
 i55 = i2 + 632 | 0;
 i56 = i2 + 648 | 0;
 i57 = i2 + 656 | 0;
 i58 = i2 + 672 | 0;
 i59 = i2 + 680 | 0;
 i60 = i2 + 696 | 0;
 i61 = i2 + 704 | 0;
 i62 = i2 + 720 | 0;
 i63 = i2 + 728 | 0;
 i64 = i2 + 744 | 0;
 i65 = i2 + 752 | 0;
 i66 = i2 + 768 | 0;
 i67 = i2 + 776 | 0;
 i68 = i2 + 792 | 0;
 i69 = i2 + 800 | 0;
 i70 = i2 + 816 | 0;
 i71 = i2 + 824 | 0;
 i72 = i2 + 840 | 0;
 i73 = i2 + 848 | 0;
 i74 = i2 + 864 | 0;
 i75 = i2 + 872 | 0;
 i76 = i2 + 888 | 0;
 i77 = i2 + 896 | 0;
 i78 = i2 + 912 | 0;
 i79 = i2 + 920 | 0;
 i80 = i2 + 936 | 0;
 i81 = i2 + 944 | 0;
 i82 = i2 + 960 | 0;
 i83 = i2 + 968 | 0;
 i84 = i2 + 984 | 0;
 i85 = i2 + 992 | 0;
 i86 = i2 + 1008 | 0;
 i87 = i2 + 1016 | 0;
 i88 = i2 + 1032 | 0;
 i89 = i2 + 1040 | 0;
 i90 = i2 + 1056 | 0;
 i91 = i2 + 1064 | 0;
 __ZN3WTF6StringC1EPKc(i3, H_BASE + 480 | 0);
 i92 = i1 + 16 | 0;
 __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i2 + 8 | 0, i92, i3, i3);
 i1 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i3 = i1 | 0;
   i93 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i93 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i3 >> 2] = i93;
    break;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i4, H_BASE + 456 | 0);
 __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i5, i92, i4, i4);
 i5 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 | 0;
   i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i4 >> 2] = i1;
    break;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i6, H_BASE + 368 | 0);
 __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i7, i92, i6, i6);
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i6 = i7 | 0;
   i5 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i6 >> 2] = i5;
    break;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i8, H_BASE + 240 | 0);
 __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i9, i92, i8, i8);
 i9 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i8 = i9 | 0;
   i7 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i8 >> 2] = i7;
    break;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i10, H_BASE + 120 | 0);
 __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i11, i92, i10, i10);
 i11 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i10 = i11 | 0;
   i9 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i10 >> 2] = i9;
    break;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i12, H_BASE + 56 | 0);
 __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i13, i92, i12, i12);
 i13 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i12 = i13 | 0;
   i11 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i12 >> 2] = i11;
    break;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i14, H_BASE + 368 | 0);
 __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i15, i92, i14, i14);
 i15 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i14 = i15 | 0;
   i13 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i15);
    break;
   } else {
    HEAP32[i14 >> 2] = i13;
    break;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i16, H_BASE + 48 | 0);
 __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i17, i92, i16, i16);
 i17 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i16 = i17 | 0;
   i15 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    break;
   } else {
    HEAP32[i16 >> 2] = i15;
    break;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i18, H_BASE + 40 | 0);
 __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i19, i92, i18, i18);
 i19 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i19 | 0) != 0) {
   i18 = i19 | 0;
   i17 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
   if ((i17 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i19);
    break;
   } else {
    HEAP32[i18 >> 2] = i17;
    break;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i20, H_BASE + 16 | 0);
 __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i21, i92, i20, i20);
 i21 = HEAP32[i20 >> 2] | 0;
 do {
  if ((i21 | 0) != 0) {
   i20 = i21 | 0;
   i19 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
   if ((i19 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i21);
    break;
   } else {
    HEAP32[i20 >> 2] = i19;
    break;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i22, H_BASE + 8 | 0);
 __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i23, i92, i22, i22);
 i23 = HEAP32[i22 >> 2] | 0;
 do {
  if ((i23 | 0) != 0) {
   i22 = i23 | 0;
   i21 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
   if ((i21 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i23);
    break;
   } else {
    HEAP32[i22 >> 2] = i21;
    break;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i24, H_BASE + 448 | 0);
 __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i25, i92, i24, i24);
 i25 = HEAP32[i24 >> 2] | 0;
 do {
  if ((i25 | 0) != 0) {
   i24 = i25 | 0;
   i23 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
   if ((i23 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i25);
    break;
   } else {
    HEAP32[i24 >> 2] = i23;
    break;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i26, H_BASE + 440 | 0);
 __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i27, i92, i26, i26);
 i27 = HEAP32[i26 >> 2] | 0;
 do {
  if ((i27 | 0) != 0) {
   i26 = i27 | 0;
   i25 = (HEAP32[i26 >> 2] | 0) - 2 | 0;
   if ((i25 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i27);
    break;
   } else {
    HEAP32[i26 >> 2] = i25;
    break;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i28, H_BASE + 432 | 0);
 __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i29, i92, i28, i28);
 i29 = HEAP32[i28 >> 2] | 0;
 do {
  if ((i29 | 0) != 0) {
   i28 = i29 | 0;
   i27 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
   if ((i27 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i29);
    break;
   } else {
    HEAP32[i28 >> 2] = i27;
    break;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i30, H_BASE + 424 | 0);
 __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i31, i92, i30, i30);
 i31 = HEAP32[i30 >> 2] | 0;
 do {
  if ((i31 | 0) != 0) {
   i30 = i31 | 0;
   i29 = (HEAP32[i30 >> 2] | 0) - 2 | 0;
   if ((i29 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i31);
    break;
   } else {
    HEAP32[i30 >> 2] = i29;
    break;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i32, H_BASE + 416 | 0);
 __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i33, i92, i32, i32);
 i33 = HEAP32[i32 >> 2] | 0;
 do {
  if ((i33 | 0) != 0) {
   i32 = i33 | 0;
   i31 = (HEAP32[i32 >> 2] | 0) - 2 | 0;
   if ((i31 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i33);
    break;
   } else {
    HEAP32[i32 >> 2] = i31;
    break;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i34, H_BASE + 408 | 0);
 __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i35, i92, i34, i34);
 i35 = HEAP32[i34 >> 2] | 0;
 do {
  if ((i35 | 0) != 0) {
   i34 = i35 | 0;
   i33 = (HEAP32[i34 >> 2] | 0) - 2 | 0;
   if ((i33 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i35);
    break;
   } else {
    HEAP32[i34 >> 2] = i33;
    break;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i36, H_BASE + 400 | 0);
 __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i37, i92, i36, i36);
 i37 = HEAP32[i36 >> 2] | 0;
 do {
  if ((i37 | 0) != 0) {
   i36 = i37 | 0;
   i35 = (HEAP32[i36 >> 2] | 0) - 2 | 0;
   if ((i35 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i37);
    break;
   } else {
    HEAP32[i36 >> 2] = i35;
    break;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i38, H_BASE + 392 | 0);
 __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i39, i92, i38, i38);
 i39 = HEAP32[i38 >> 2] | 0;
 do {
  if ((i39 | 0) != 0) {
   i38 = i39 | 0;
   i37 = (HEAP32[i38 >> 2] | 0) - 2 | 0;
   if ((i37 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i39);
    break;
   } else {
    HEAP32[i38 >> 2] = i37;
    break;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i40, H_BASE + 384 | 0);
 __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i41, i92, i40, i40);
 i41 = HEAP32[i40 >> 2] | 0;
 do {
  if ((i41 | 0) != 0) {
   i40 = i41 | 0;
   i39 = (HEAP32[i40 >> 2] | 0) - 2 | 0;
   if ((i39 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i41);
    break;
   } else {
    HEAP32[i40 >> 2] = i39;
    break;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i42, H_BASE + 376 | 0);
 __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i43, i92, i42, i42);
 i43 = HEAP32[i42 >> 2] | 0;
 do {
  if ((i43 | 0) != 0) {
   i42 = i43 | 0;
   i41 = (HEAP32[i42 >> 2] | 0) - 2 | 0;
   if ((i41 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i43);
    break;
   } else {
    HEAP32[i42 >> 2] = i41;
    break;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i44, H_BASE + 360 | 0);
 __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i45, i92, i44, i44);
 i45 = HEAP32[i44 >> 2] | 0;
 do {
  if ((i45 | 0) != 0) {
   i44 = i45 | 0;
   i43 = (HEAP32[i44 >> 2] | 0) - 2 | 0;
   if ((i43 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i45);
    break;
   } else {
    HEAP32[i44 >> 2] = i43;
    break;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i46, H_BASE + 336 | 0);
 __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i47, i92, i46, i46);
 i47 = HEAP32[i46 >> 2] | 0;
 do {
  if ((i47 | 0) != 0) {
   i46 = i47 | 0;
   i45 = (HEAP32[i46 >> 2] | 0) - 2 | 0;
   if ((i45 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i47);
    break;
   } else {
    HEAP32[i46 >> 2] = i45;
    break;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i48, H_BASE + 320 | 0);
 __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i49, i92, i48, i48);
 i49 = HEAP32[i48 >> 2] | 0;
 do {
  if ((i49 | 0) != 0) {
   i48 = i49 | 0;
   i47 = (HEAP32[i48 >> 2] | 0) - 2 | 0;
   if ((i47 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i49);
    break;
   } else {
    HEAP32[i48 >> 2] = i47;
    break;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i50, H_BASE + 312 | 0);
 __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i51, i92, i50, i50);
 i51 = HEAP32[i50 >> 2] | 0;
 do {
  if ((i51 | 0) != 0) {
   i50 = i51 | 0;
   i49 = (HEAP32[i50 >> 2] | 0) - 2 | 0;
   if ((i49 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i51);
    break;
   } else {
    HEAP32[i50 >> 2] = i49;
    break;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i52, H_BASE + 296 | 0);
 __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i53, i92, i52, i52);
 i53 = HEAP32[i52 >> 2] | 0;
 do {
  if ((i53 | 0) != 0) {
   i52 = i53 | 0;
   i51 = (HEAP32[i52 >> 2] | 0) - 2 | 0;
   if ((i51 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i53);
    break;
   } else {
    HEAP32[i52 >> 2] = i51;
    break;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i54, H_BASE + 288 | 0);
 __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i55, i92, i54, i54);
 i55 = HEAP32[i54 >> 2] | 0;
 do {
  if ((i55 | 0) != 0) {
   i54 = i55 | 0;
   i53 = (HEAP32[i54 >> 2] | 0) - 2 | 0;
   if ((i53 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i55);
    break;
   } else {
    HEAP32[i54 >> 2] = i53;
    break;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i56, H_BASE + 280 | 0);
 __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i57, i92, i56, i56);
 i57 = HEAP32[i56 >> 2] | 0;
 do {
  if ((i57 | 0) != 0) {
   i56 = i57 | 0;
   i55 = (HEAP32[i56 >> 2] | 0) - 2 | 0;
   if ((i55 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i57);
    break;
   } else {
    HEAP32[i56 >> 2] = i55;
    break;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i58, H_BASE + 272 | 0);
 __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i59, i92, i58, i58);
 i59 = HEAP32[i58 >> 2] | 0;
 do {
  if ((i59 | 0) != 0) {
   i58 = i59 | 0;
   i57 = (HEAP32[i58 >> 2] | 0) - 2 | 0;
   if ((i57 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i59);
    break;
   } else {
    HEAP32[i58 >> 2] = i57;
    break;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i60, H_BASE + 256 | 0);
 __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i61, i92, i60, i60);
 i61 = HEAP32[i60 >> 2] | 0;
 do {
  if ((i61 | 0) != 0) {
   i60 = i61 | 0;
   i59 = (HEAP32[i60 >> 2] | 0) - 2 | 0;
   if ((i59 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i61);
    break;
   } else {
    HEAP32[i60 >> 2] = i59;
    break;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i62, H_BASE + 248 | 0);
 __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i63, i92, i62, i62);
 i63 = HEAP32[i62 >> 2] | 0;
 do {
  if ((i63 | 0) != 0) {
   i62 = i63 | 0;
   i61 = (HEAP32[i62 >> 2] | 0) - 2 | 0;
   if ((i61 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i63);
    break;
   } else {
    HEAP32[i62 >> 2] = i61;
    break;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i64, H_BASE + 232 | 0);
 __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i65, i92, i64, i64);
 i65 = HEAP32[i64 >> 2] | 0;
 do {
  if ((i65 | 0) != 0) {
   i64 = i65 | 0;
   i63 = (HEAP32[i64 >> 2] | 0) - 2 | 0;
   if ((i63 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i65);
    break;
   } else {
    HEAP32[i64 >> 2] = i63;
    break;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i66, H_BASE + 216 | 0);
 __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i67, i92, i66, i66);
 i67 = HEAP32[i66 >> 2] | 0;
 do {
  if ((i67 | 0) != 0) {
   i66 = i67 | 0;
   i65 = (HEAP32[i66 >> 2] | 0) - 2 | 0;
   if ((i65 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i67);
    break;
   } else {
    HEAP32[i66 >> 2] = i65;
    break;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i68, H_BASE + 200 | 0);
 __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i69, i92, i68, i68);
 i69 = HEAP32[i68 >> 2] | 0;
 do {
  if ((i69 | 0) != 0) {
   i68 = i69 | 0;
   i67 = (HEAP32[i68 >> 2] | 0) - 2 | 0;
   if ((i67 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i69);
    break;
   } else {
    HEAP32[i68 >> 2] = i67;
    break;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i70, H_BASE + 184 | 0);
 __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i71, i92, i70, i70);
 i71 = HEAP32[i70 >> 2] | 0;
 do {
  if ((i71 | 0) != 0) {
   i70 = i71 | 0;
   i69 = (HEAP32[i70 >> 2] | 0) - 2 | 0;
   if ((i69 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i71);
    break;
   } else {
    HEAP32[i70 >> 2] = i69;
    break;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i72, H_BASE + 176 | 0);
 __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i73, i92, i72, i72);
 i73 = HEAP32[i72 >> 2] | 0;
 do {
  if ((i73 | 0) != 0) {
   i72 = i73 | 0;
   i71 = (HEAP32[i72 >> 2] | 0) - 2 | 0;
   if ((i71 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i73);
    break;
   } else {
    HEAP32[i72 >> 2] = i71;
    break;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i74, H_BASE + 168 | 0);
 __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i75, i92, i74, i74);
 i75 = HEAP32[i74 >> 2] | 0;
 do {
  if ((i75 | 0) != 0) {
   i74 = i75 | 0;
   i73 = (HEAP32[i74 >> 2] | 0) - 2 | 0;
   if ((i73 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i75);
    break;
   } else {
    HEAP32[i74 >> 2] = i73;
    break;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i76, H_BASE + 152 | 0);
 __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i77, i92, i76, i76);
 i77 = HEAP32[i76 >> 2] | 0;
 do {
  if ((i77 | 0) != 0) {
   i76 = i77 | 0;
   i75 = (HEAP32[i76 >> 2] | 0) - 2 | 0;
   if ((i75 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i77);
    break;
   } else {
    HEAP32[i76 >> 2] = i75;
    break;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i78, H_BASE + 144 | 0);
 __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i79, i92, i78, i78);
 i79 = HEAP32[i78 >> 2] | 0;
 do {
  if ((i79 | 0) != 0) {
   i78 = i79 | 0;
   i77 = (HEAP32[i78 >> 2] | 0) - 2 | 0;
   if ((i77 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i79);
    break;
   } else {
    HEAP32[i78 >> 2] = i77;
    break;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i80, H_BASE + 136 | 0);
 __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i81, i92, i80, i80);
 i81 = HEAP32[i80 >> 2] | 0;
 do {
  if ((i81 | 0) != 0) {
   i80 = i81 | 0;
   i79 = (HEAP32[i80 >> 2] | 0) - 2 | 0;
   if ((i79 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i81);
    break;
   } else {
    HEAP32[i80 >> 2] = i79;
    break;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i82, H_BASE + 128 | 0);
 __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i83, i92, i82, i82);
 i83 = HEAP32[i82 >> 2] | 0;
 do {
  if ((i83 | 0) != 0) {
   i82 = i83 | 0;
   i81 = (HEAP32[i82 >> 2] | 0) - 2 | 0;
   if ((i81 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i83);
    break;
   } else {
    HEAP32[i82 >> 2] = i81;
    break;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i84, H_BASE + 112 | 0);
 __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i85, i92, i84, i84);
 i85 = HEAP32[i84 >> 2] | 0;
 do {
  if ((i85 | 0) != 0) {
   i84 = i85 | 0;
   i83 = (HEAP32[i84 >> 2] | 0) - 2 | 0;
   if ((i83 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i85);
    break;
   } else {
    HEAP32[i84 >> 2] = i83;
    break;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i86, H_BASE + 104 | 0);
 __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i87, i92, i86, i86);
 i87 = HEAP32[i86 >> 2] | 0;
 do {
  if ((i87 | 0) != 0) {
   i86 = i87 | 0;
   i85 = (HEAP32[i86 >> 2] | 0) - 2 | 0;
   if ((i85 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i87);
    break;
   } else {
    HEAP32[i86 >> 2] = i85;
    break;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i88, H_BASE + 88 | 0);
 __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i89, i92, i88, i88);
 i89 = HEAP32[i88 >> 2] | 0;
 do {
  if ((i89 | 0) != 0) {
   i88 = i89 | 0;
   i87 = (HEAP32[i88 >> 2] | 0) - 2 | 0;
   if ((i87 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i89);
    break;
   } else {
    HEAP32[i88 >> 2] = i87;
    break;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i90, H_BASE + 80 | 0);
 __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i91, i92, i90, i90);
 i92 = HEAP32[i90 >> 2] | 0;
 if ((i92 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i90 = i92 | 0;
 i91 = (HEAP32[i90 >> 2] | 0) - 2 | 0;
 if ((i91 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i92);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i90 >> 2] = i91;
  STACKTOP = i2;
  return;
 }
}
function __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E6rehashEiPS1_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 i4 = i1 + 8 | 0;
 HEAP32[i4 >> 2] = i2 - 1;
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 2) | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i1 + 16 >> 2] = 0;
  i8 = 0;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 } else {
  i10 = 0;
  i11 = 0;
 }
 while (1) {
  i2 = i7 + (i10 << 2) | 0;
  i12 = i2 | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i11;
  } else {
   i14 = HEAP32[i6 >> 2] | 0;
   i16 = HEAP32[i4 >> 2] | 0;
   i17 = __ZN3WTF15CaseFoldingHash4hashERNS_10StringImplE(i13) | 0;
   i13 = (i17 >>> 23) + ~i17 | 0;
   i18 = i13 << 12 ^ i13;
   i13 = i18 >>> 7 ^ i18;
   i18 = i13 << 2 ^ i13;
   i13 = i18 >>> 20 ^ i18 | 1;
   i18 = i17;
   i17 = 0;
   i19 = 0;
   while (1) {
    i20 = i18 & i16;
    i21 = i14 + (i20 << 2) | 0;
    i22 = HEAP32[i21 >> 2] | 0;
    i23 = i22;
    if ((i23 | 0) == 0) {
     i24 = 6;
     break;
    } else if ((i23 | 0) == (-1 | 0)) {
     i25 = i21;
    } else {
     if (__ZN3WTF24equalIgnoringCaseNonNullEPKNS_10StringImplES2_(i22, HEAP32[i12 >> 2] | 0) | 0) {
      i26 = i21;
      break;
     } else {
      i25 = i19;
     }
    }
    i22 = (i17 | 0) == 0 ? i13 : i17;
    i18 = i22 + i20 | 0;
    i17 = i22;
    i19 = i25;
   }
   if ((i24 | 0) == 6) {
    i24 = 0;
    i26 = (i19 | 0) != 0 ? i19 : i21;
   }
   i17 = i26 | 0;
   i18 = HEAP32[i17 >> 2] | 0;
   do {
    if ((i18 | 0) != 0) {
     i13 = i18 | 0;
     i14 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i18);
      break;
     } else {
      HEAP32[i13 >> 2] = i14;
      break;
     }
    }
   } while (0);
   i18 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   HEAP32[i17 >> 2] = i18;
   i15 = (i2 | 0) == (i3 | 0) ? i26 : i11;
  }
  i18 = i10 + 1 | 0;
  if ((i18 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i18;
   i11 = i15;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i27 = 0;
 } else {
  i8 = i15;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  i1 = HEAP32[i7 + (i27 << 2) >> 2] | 0;
  i11 = i1;
  do {
   if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
    i10 = i1 | 0;
    i26 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
    if ((i26 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i1);
     break;
    } else {
     HEAP32[i10 >> 2] = i26;
     break;
    }
   }
  } while (0);
  i1 = i27 + 1 | 0;
  if ((i1 | 0) < (i5 | 0)) {
   i27 = i1;
  } else {
   i8 = i15;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i7 | 0) == 0) {
   i8 = 8;
  } else {
   i9 = i7 << 1;
   i8 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i9 | 0) ? i7 : i9;
  }
  __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E6rehashEiPS1_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = i3 | 0;
 i3 = __ZN3WTF15CaseFoldingHash4hashERNS_10StringImplE(HEAP32[i8 >> 2] | 0) | 0;
 i9 = (i3 >>> 23) + ~i3 | 0;
 i7 = i9 << 12 ^ i9;
 i9 = i7 >>> 7 ^ i7;
 i7 = i9 << 2 ^ i9;
 i9 = i7 >>> 20 ^ i7 | 1;
 i7 = 0;
 i11 = i3;
 i3 = 0;
 while (1) {
  i12 = i11 & i6;
  i13 = i10 + (i12 << 2) | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  i15 = i14;
  if ((i15 | 0) == (-1 | 0)) {
   i16 = i13;
  } else if ((i15 | 0) == 0) {
   break;
  } else {
   if (__ZN3WTF24equalIgnoringCaseNonNullEPKNS_10StringImplES2_(i14, HEAP32[i8 >> 2] | 0) | 0) {
    i17 = 8;
    break;
   } else {
    i16 = i7;
   }
  }
  i14 = (i3 | 0) == 0 ? i9 : i3;
  i7 = i16;
  i11 = i14 + i12 | 0;
  i3 = i14;
 }
 if ((i17 | 0) == 8) {
  i17 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 2) | 0;
  i3 = i1;
  HEAP32[i3 >> 2] = i13;
  HEAP32[i3 + 4 >> 2] = i17;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i7 | 0) == 0) {
  i18 = i13;
 } else {
  HEAP32[i7 >> 2] = 0;
  i13 = i2 + 16 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) - 1;
  i18 = i7;
 }
 i7 = i4 | 0;
 i4 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i7 = i18 | 0;
 i13 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i4;
 do {
  if ((i13 | 0) != 0) {
   i4 = i13 | 0;
   i7 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i4 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i13 = i2 + 12 | 0;
 i7 = (HEAP32[i13 >> 2] | 0) + 1 | 0;
 HEAP32[i13 >> 2] = i7;
 i13 = i2 + 4 | 0;
 i4 = HEAP32[i13 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i7 << 1 | 0) < (i4 | 0)) {
  i19 = i18;
  i20 = i4;
 } else {
  if ((i4 | 0) == 0) {
   i21 = 8;
  } else {
   i17 = i4 << 1;
   i21 = (i7 * 6 & -1 | 0) < (i17 | 0) ? i4 : i17;
  }
  i17 = __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E6rehashEiPS1_(i2, i21, i18) | 0;
  i19 = i17;
  i20 = HEAP32[i13 >> 2] | 0;
 }
 i13 = (HEAP32[i5 >> 2] | 0) + (i20 << 2) | 0;
 i20 = i1;
 HEAP32[i20 >> 2] = i19;
 HEAP32[i20 + 4 >> 2] = i13;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF15CaseFoldingHash4hashERNS_10StringImplE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 if ((HEAP32[i1 + 16 >> 2] & 32 | 0) == 0) {
  i4 = HEAP32[i1 + 8 >> 2] | 0;
  i5 = HEAP32[i1 + 4 >> 2] | 0;
  i6 = i3 | 0;
  HEAP32[i6 >> 2] = -1640531527;
  i7 = i3 + 4 | 0;
  HEAP8[i7] = 0;
  i8 = i3 + 6 | 0;
  HEAP16[i8 >> 1] = 0;
  __ZN3WTF12StringHasher28addCharactersAssumingAlignedItXadL_ZNS_15CaseFoldingHash8foldCaseItEEtT_EEEEvPKS4_j(i3, i4, i5);
  i5 = HEAP32[i6 >> 2] | 0;
  if ((HEAP8[i7] & 1) == 0) {
   i9 = i5;
  } else {
   i7 = (HEAPU16[i8 >> 1] | 0) + i5 | 0;
   i5 = i7 << 11 ^ i7;
   i9 = (i5 >>> 17) + i5 | 0;
  }
  i5 = i9 << 3 ^ i9;
  i9 = (i5 >>> 5) + i5 | 0;
  i5 = i9 << 2 ^ i9;
  i9 = (i5 >>> 15) + i5 | 0;
  i5 = (i9 << 10 ^ i9) & 16777215;
  i10 = (i5 | 0) == 0 ? 8388608 : i5;
  STACKTOP = i2;
  return i10 | 0;
 }
 i5 = HEAP32[i1 + 8 >> 2] | 0;
 i9 = HEAP32[i1 + 4 >> 2] | 0;
 i1 = (i9 & 1 | 0) == 0;
 i7 = i9 >>> 1;
 if ((i7 | 0) == 0) {
  i11 = i5;
  i12 = -1640531527;
 } else {
  i9 = i7;
  i8 = i5;
  i6 = -1640531527;
  while (1) {
   i4 = i9 - 1 | 0;
   i3 = (HEAPU16[__ZN3WTF10StringImpl19latin1CaseFoldTableE + ((HEAPU8[i8] | 0) << 1) >> 1] | 0) + i6 | 0;
   i13 = i3 << 16 ^ i3 ^ (HEAPU16[__ZN3WTF10StringImpl19latin1CaseFoldTableE + ((HEAPU8[i8 + 1 | 0] | 0) << 1) >> 1] | 0) << 11;
   i14 = (i13 >>> 11) + i13 | 0;
   if ((i4 | 0) == 0) {
    break;
   } else {
    i9 = i4;
    i8 = i8 + 2 | 0;
    i6 = i14;
   }
  }
  i11 = i5 + (i7 << 1) | 0;
  i12 = i14;
 }
 if (i1) {
  i15 = i12;
 } else {
  i1 = (HEAPU16[__ZN3WTF10StringImpl19latin1CaseFoldTableE + ((HEAPU8[i11] | 0) << 1) >> 1] | 0) + i12 | 0;
  i12 = i1 << 11 ^ i1;
  i15 = (i12 >>> 17) + i12 | 0;
 }
 i12 = i15 << 3 ^ i15;
 i15 = (i12 >>> 5) + i12 | 0;
 i12 = i15 << 2 ^ i15;
 i15 = (i12 >>> 15) + i12 | 0;
 i12 = (i15 << 10 ^ i15) & 16777215;
 i10 = (i12 | 0) == 0 ? 8388608 : i12;
 STACKTOP = i2;
 return i10 | 0;
}
function __ZN7WebCore18DatabaseAuthorizer13allowFunctionERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 do {
  if ((HEAP8[i1 + 8 | 0] & 1) != 0) {
   i3 = HEAP32[i1 + 16 >> 2] | 0;
   if ((i3 | 0) == 0) {
    i4 = __ZN7WebCore11SQLAuthDenyE;
    i5 = HEAP32[i4 >> 2] | 0;
    return i5 | 0;
   }
   i6 = HEAP32[i1 + 24 >> 2] | 0;
   i7 = i2 | 0;
   i8 = __ZN3WTF15CaseFoldingHash4hashERNS_10StringImplE(HEAP32[i7 >> 2] | 0) | 0;
   i9 = (i8 >>> 23) + ~i8 | 0;
   i10 = i9 << 12 ^ i9;
   i9 = i10 >>> 7 ^ i10;
   i10 = i9 << 2 ^ i9;
   i9 = i10 >>> 20 ^ i10 | 1;
   i10 = i8;
   i8 = 0;
   while (1) {
    i11 = i10 & i6;
    i12 = i3 + (i11 << 2) | 0;
    i13 = HEAP32[i12 >> 2] | 0;
    i14 = i13;
    if ((i14 | 0) == 0) {
     i4 = __ZN7WebCore11SQLAuthDenyE;
     i15 = 11;
     break;
    } else if ((i14 | 0) != (-1 | 0)) {
     if (__ZN3WTF24equalIgnoringCaseNonNullEPKNS_10StringImplES2_(i13, HEAP32[i7 >> 2] | 0) | 0) {
      break;
     }
    }
    i13 = (i8 | 0) == 0 ? i9 : i8;
    i10 = i13 + i11 | 0;
    i8 = i13;
   }
   if ((i15 | 0) == 11) {
    i5 = HEAP32[i4 >> 2] | 0;
    return i5 | 0;
   }
   if ((i12 | 0) == 0) {
    i4 = __ZN7WebCore11SQLAuthDenyE;
   } else {
    break;
   }
   i5 = HEAP32[i4 >> 2] | 0;
   return i5 | 0;
  }
 } while (0);
 i4 = __ZN7WebCore12SQLAuthAllowE;
 i5 = HEAP32[i4 >> 2] | 0;
 return i5 | 0;
}
function __ZN3WTF12StringHasher28addCharactersAssumingAlignedItXadL_ZNS_15CaseFoldingHash8foldCaseItEEtT_EEEEvPKS4_j(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = (i3 & 1 | 0) == 0;
 i5 = i3 >>> 1;
 if ((i5 | 0) == 0) {
  i6 = i2;
 } else {
  i3 = i1 | 0;
  i7 = i5 << 1;
  i8 = i5;
  i5 = i2;
  while (1) {
   i9 = i8 - 1 | 0;
   i10 = _u_foldCase(HEAPU16[i5 >> 1] | 0, 0) | 0;
   i11 = _u_foldCase(HEAPU16[i5 + 2 >> 1] | 0, 0) | 0;
   i12 = (HEAP32[i3 >> 2] | 0) + (i10 & 65535) | 0;
   i10 = i12 ^ i11 << 11 & 134215680 ^ i12 << 16;
   HEAP32[i3 >> 2] = (i10 >>> 11) + i10;
   if ((i9 | 0) == 0) {
    break;
   } else {
    i8 = i9;
    i5 = i5 + 4 | 0;
   }
  }
  i6 = i2 + (i7 << 1) | 0;
 }
 if (i4) {
  return;
 }
 i4 = _u_foldCase(HEAPU16[i6 >> 1] | 0, 0) | 0;
 i6 = i1 + 4 | 0;
 if ((HEAP8[i6] & 1) == 0) {
  HEAP16[i1 + 6 >> 1] = i4;
  HEAP8[i6] = 1;
  return;
 } else {
  HEAP8[i6] = 0;
  i6 = i1 | 0;
  i7 = (HEAP32[i6 >> 2] | 0) + (HEAPU16[i1 + 6 >> 1] | 0) | 0;
  i1 = i7 ^ i4 << 11 & 134215680 ^ i7 << 16;
  HEAP32[i6 >> 2] = (i1 >>> 11) + i1;
  return;
 }
}
function __ZN7WebCore18DatabaseAuthorizer10dropVTableERKN3WTF6StringES4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = i1 + 8 | 0;
 do {
  if ((HEAP8[i4] & 1) != 0) {
   if ((HEAP32[i1 + 4 >> 2] & 6 | 0) == 0) {
    break;
   }
   i5 = HEAP32[__ZN7WebCore11SQLAuthDenyE >> 2] | 0;
   return i5 | 0;
  }
 } while (0);
 if (!(__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i3 >> 2] | 0, H_BASE + 72 | 0) | 0)) {
  i5 = HEAP32[__ZN7WebCore11SQLAuthDenyE >> 2] | 0;
  return i5 | 0;
 }
 if ((HEAP8[i4] & 1) == 0) {
  i6 = __ZN7WebCore12SQLAuthAllowE;
 } else {
  i3 = __ZN3WTF17equalIgnoringCaseEPKNS_10StringImplES2_(HEAP32[i2 >> 2] | 0, HEAP32[i1 + 12 >> 2] | 0) | 0;
  i6 = i3 ? __ZN7WebCore11SQLAuthDenyE : __ZN7WebCore12SQLAuthAllowE;
 }
 i3 = HEAP32[i6 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i5 = 0;
  return i5 | 0;
 }
 HEAP8[i4] = HEAP8[i4] | 8;
 i5 = i3;
 return i5 | 0;
}
function __ZN7WebCore18DatabaseAuthorizer12createVTableERKN3WTF6StringES4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = i1 + 8 | 0;
 if ((HEAP8[i4] & 1) == 0) {
  i5 = 3;
 } else {
  if ((HEAP32[i1 + 4 >> 2] & 6 | 0) == 0) {
   i5 = 3;
  } else {
   i6 = __ZN7WebCore11SQLAuthDenyE;
  }
 }
 do {
  if ((i5 | 0) == 3) {
   if (!(__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i3 >> 2] | 0, H_BASE + 72 | 0) | 0)) {
    i6 = __ZN7WebCore11SQLAuthDenyE;
    break;
   }
   i7 = HEAP8[i4] | 0;
   HEAP8[i4] = i7 | 4;
   if ((i7 & 1) == 0) {
    i6 = __ZN7WebCore12SQLAuthAllowE;
    break;
   }
   i7 = __ZN3WTF17equalIgnoringCaseEPKNS_10StringImplES2_(HEAP32[i2 >> 2] | 0, HEAP32[i1 + 12 >> 2] | 0) | 0;
   i6 = i7 ? __ZN7WebCore11SQLAuthDenyE : __ZN7WebCore12SQLAuthAllowE;
  }
 } while (0);
 return HEAP32[i6 >> 2] | 0;
}
function __ZN7WebCore18DatabaseAuthorizer15dropTempTriggerERKN3WTF6StringES4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 8 | 0;
 do {
  if ((HEAP8[i2] & 1) == 0) {
   i4 = __ZN7WebCore12SQLAuthAllowE;
  } else {
   if ((HEAP32[i1 + 4 >> 2] & 6 | 0) == 0) {
    i5 = __ZN3WTF17equalIgnoringCaseEPKNS_10StringImplES2_(HEAP32[i3 >> 2] | 0, HEAP32[i1 + 12 >> 2] | 0) | 0;
    i4 = i5 ? __ZN7WebCore11SQLAuthDenyE : __ZN7WebCore12SQLAuthAllowE;
    break;
   }
   i6 = HEAP32[__ZN7WebCore11SQLAuthDenyE >> 2] | 0;
   return i6 | 0;
  }
 } while (0);
 i1 = HEAP32[i4 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i6 = 0;
  return i6 | 0;
 }
 HEAP8[i2] = HEAP8[i2] | 8;
 i6 = i1;
 return i6 | 0;
}
function __ZN7WebCore18DatabaseAuthorizer13dropTempIndexERKN3WTF6StringES4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 8 | 0;
 do {
  if ((HEAP8[i2] & 1) == 0) {
   i4 = __ZN7WebCore12SQLAuthAllowE;
  } else {
   if ((HEAP32[i1 + 4 >> 2] & 6 | 0) == 0) {
    i5 = __ZN3WTF17equalIgnoringCaseEPKNS_10StringImplES2_(HEAP32[i3 >> 2] | 0, HEAP32[i1 + 12 >> 2] | 0) | 0;
    i4 = i5 ? __ZN7WebCore11SQLAuthDenyE : __ZN7WebCore12SQLAuthAllowE;
    break;
   }
   i6 = HEAP32[__ZN7WebCore11SQLAuthDenyE >> 2] | 0;
   return i6 | 0;
  }
 } while (0);
 i1 = HEAP32[i4 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i6 = 0;
  return i6 | 0;
 }
 HEAP8[i2] = HEAP8[i2] | 8;
 i6 = i1;
 return i6 | 0;
}
function __ZN7WebCore18DatabaseAuthorizer11dropTriggerERKN3WTF6StringES4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 8 | 0;
 do {
  if ((HEAP8[i2] & 1) == 0) {
   i4 = __ZN7WebCore12SQLAuthAllowE;
  } else {
   if ((HEAP32[i1 + 4 >> 2] & 6 | 0) == 0) {
    i5 = __ZN3WTF17equalIgnoringCaseEPKNS_10StringImplES2_(HEAP32[i3 >> 2] | 0, HEAP32[i1 + 12 >> 2] | 0) | 0;
    i4 = i5 ? __ZN7WebCore11SQLAuthDenyE : __ZN7WebCore12SQLAuthAllowE;
    break;
   }
   i6 = HEAP32[__ZN7WebCore11SQLAuthDenyE >> 2] | 0;
   return i6 | 0;
  }
 } while (0);
 i1 = HEAP32[i4 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i6 = 0;
  return i6 | 0;
 }
 HEAP8[i2] = HEAP8[i2] | 8;
 i6 = i1;
 return i6 | 0;
}
function __ZN7WebCore18DatabaseAuthorizer9dropIndexERKN3WTF6StringES4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 8 | 0;
 do {
  if ((HEAP8[i2] & 1) == 0) {
   i4 = __ZN7WebCore12SQLAuthAllowE;
  } else {
   if ((HEAP32[i1 + 4 >> 2] & 6 | 0) == 0) {
    i5 = __ZN3WTF17equalIgnoringCaseEPKNS_10StringImplES2_(HEAP32[i3 >> 2] | 0, HEAP32[i1 + 12 >> 2] | 0) | 0;
    i4 = i5 ? __ZN7WebCore11SQLAuthDenyE : __ZN7WebCore12SQLAuthAllowE;
    break;
   }
   i6 = HEAP32[__ZN7WebCore11SQLAuthDenyE >> 2] | 0;
   return i6 | 0;
  }
 } while (0);
 i1 = HEAP32[i4 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i6 = 0;
  return i6 | 0;
 }
 HEAP8[i2] = HEAP8[i2] | 8;
 i6 = i1;
 return i6 | 0;
}
function __ZN7WebCore18DatabaseAuthorizer13dropTempTableERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i1 + 8 | 0;
 do {
  if ((HEAP8[i3] & 1) == 0) {
   i4 = __ZN7WebCore12SQLAuthAllowE;
  } else {
   if ((HEAP32[i1 + 4 >> 2] & 6 | 0) == 0) {
    i5 = __ZN3WTF17equalIgnoringCaseEPKNS_10StringImplES2_(HEAP32[i2 >> 2] | 0, HEAP32[i1 + 12 >> 2] | 0) | 0;
    i4 = i5 ? __ZN7WebCore11SQLAuthDenyE : __ZN7WebCore12SQLAuthAllowE;
    break;
   }
   i6 = HEAP32[__ZN7WebCore11SQLAuthDenyE >> 2] | 0;
   return i6 | 0;
  }
 } while (0);
 i1 = HEAP32[i4 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i6 = 0;
  return i6 | 0;
 }
 HEAP8[i3] = HEAP8[i3] | 8;
 i6 = i1;
 return i6 | 0;
}
function __ZN7WebCore18DatabaseAuthorizer11allowDeleteERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i1 + 8 | 0;
 do {
  if ((HEAP8[i3] & 1) == 0) {
   i4 = __ZN7WebCore12SQLAuthAllowE;
  } else {
   if ((HEAP32[i1 + 4 >> 2] & 6 | 0) == 0) {
    i5 = __ZN3WTF17equalIgnoringCaseEPKNS_10StringImplES2_(HEAP32[i2 >> 2] | 0, HEAP32[i1 + 12 >> 2] | 0) | 0;
    i4 = i5 ? __ZN7WebCore11SQLAuthDenyE : __ZN7WebCore12SQLAuthAllowE;
    break;
   }
   i6 = HEAP32[__ZN7WebCore11SQLAuthDenyE >> 2] | 0;
   return i6 | 0;
  }
 } while (0);
 i1 = HEAP32[i4 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i6 = 0;
  return i6 | 0;
 }
 HEAP8[i3] = HEAP8[i3] | 8;
 i6 = i1;
 return i6 | 0;
}
function __ZN7WebCore18DatabaseAuthorizer9dropTableERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i1 + 8 | 0;
 do {
  if ((HEAP8[i3] & 1) == 0) {
   i4 = __ZN7WebCore12SQLAuthAllowE;
  } else {
   if ((HEAP32[i1 + 4 >> 2] & 6 | 0) == 0) {
    i5 = __ZN3WTF17equalIgnoringCaseEPKNS_10StringImplES2_(HEAP32[i2 >> 2] | 0, HEAP32[i1 + 12 >> 2] | 0) | 0;
    i4 = i5 ? __ZN7WebCore11SQLAuthDenyE : __ZN7WebCore12SQLAuthAllowE;
    break;
   }
   i6 = HEAP32[__ZN7WebCore11SQLAuthDenyE >> 2] | 0;
   return i6 | 0;
  }
 } while (0);
 i1 = HEAP32[i4 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i6 = 0;
  return i6 | 0;
 }
 HEAP8[i3] = HEAP8[i3] | 8;
 i6 = i1;
 return i6 | 0;
}
function __ZN7WebCore18DatabaseAuthorizer9allowReadERKN3WTF6StringES4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i3 = HEAP8[i1 + 8 | 0] | 0;
 do {
  if ((HEAP32[i1 + 4 >> 2] & 4 | 0) != 0) {
   if ((i3 & 1) == 0) {
    break;
   } else {
    i4 = __ZN7WebCore11SQLAuthDenyE;
   }
   i5 = HEAP32[i4 >> 2] | 0;
   return i5 | 0;
  }
 } while (0);
 if ((i3 & 1) == 0) {
  i4 = __ZN7WebCore12SQLAuthAllowE;
  i5 = HEAP32[i4 >> 2] | 0;
  return i5 | 0;
 }
 i3 = __ZN3WTF17equalIgnoringCaseEPKNS_10StringImplES2_(HEAP32[i2 >> 2] | 0, HEAP32[i1 + 12 >> 2] | 0) | 0;
 i4 = i3 ? __ZN7WebCore11SQLAuthDenyE : __ZN7WebCore12SQLAuthAllowE;
 i5 = HEAP32[i4 >> 2] | 0;
 return i5 | 0;
}
function __ZN7WebCore18DatabaseAuthorizer15allowAlterTableERKN3WTF6StringES4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 8 | 0;
 i4 = HEAP8[i2] | 0;
 if ((i4 & 1) == 0) {
  HEAP8[i2] = i4 | 4;
  i5 = __ZN7WebCore12SQLAuthAllowE;
  i6 = HEAP32[i5 >> 2] | 0;
  return i6 | 0;
 }
 if ((HEAP32[i1 + 4 >> 2] & 6 | 0) != 0) {
  i5 = __ZN7WebCore11SQLAuthDenyE;
  i6 = HEAP32[i5 >> 2] | 0;
  return i6 | 0;
 }
 HEAP8[i2] = i4 | 4;
 i4 = __ZN3WTF17equalIgnoringCaseEPKNS_10StringImplES2_(HEAP32[i3 >> 2] | 0, HEAP32[i1 + 12 >> 2] | 0) | 0;
 i5 = i4 ? __ZN7WebCore11SQLAuthDenyE : __ZN7WebCore12SQLAuthAllowE;
 i6 = HEAP32[i5 >> 2] | 0;
 return i6 | 0;
}
function __ZN7WebCore18DatabaseAuthorizer13createTriggerERKN3WTF6StringES4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 8 | 0;
 i4 = HEAP8[i2] | 0;
 if ((i4 & 1) == 0) {
  HEAP8[i2] = i4 | 4;
  i5 = __ZN7WebCore12SQLAuthAllowE;
  i6 = HEAP32[i5 >> 2] | 0;
  return i6 | 0;
 }
 if ((HEAP32[i1 + 4 >> 2] & 6 | 0) != 0) {
  i5 = __ZN7WebCore11SQLAuthDenyE;
  i6 = HEAP32[i5 >> 2] | 0;
  return i6 | 0;
 }
 HEAP8[i2] = i4 | 4;
 i4 = __ZN3WTF17equalIgnoringCaseEPKNS_10StringImplES2_(HEAP32[i3 >> 2] | 0, HEAP32[i1 + 12 >> 2] | 0) | 0;
 i5 = i4 ? __ZN7WebCore11SQLAuthDenyE : __ZN7WebCore12SQLAuthAllowE;
 i6 = HEAP32[i5 >> 2] | 0;
 return i6 | 0;
}
function __ZN7WebCore18DatabaseAuthorizer11createIndexERKN3WTF6StringES4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 8 | 0;
 i4 = HEAP8[i2] | 0;
 if ((i4 & 1) == 0) {
  HEAP8[i2] = i4 | 4;
  i5 = __ZN7WebCore12SQLAuthAllowE;
  i6 = HEAP32[i5 >> 2] | 0;
  return i6 | 0;
 }
 if ((HEAP32[i1 + 4 >> 2] & 6 | 0) != 0) {
  i5 = __ZN7WebCore11SQLAuthDenyE;
  i6 = HEAP32[i5 >> 2] | 0;
  return i6 | 0;
 }
 HEAP8[i2] = i4 | 4;
 i4 = __ZN3WTF17equalIgnoringCaseEPKNS_10StringImplES2_(HEAP32[i3 >> 2] | 0, HEAP32[i1 + 12 >> 2] | 0) | 0;
 i5 = i4 ? __ZN7WebCore11SQLAuthDenyE : __ZN7WebCore12SQLAuthAllowE;
 i6 = HEAP32[i5 >> 2] | 0;
 return i6 | 0;
}
function __ZN7WebCore18DatabaseAuthorizer11allowUpdateERKN3WTF6StringES4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i3 = i1 + 8 | 0;
 i4 = HEAP8[i3] | 0;
 if ((i4 & 1) == 0) {
  HEAP8[i3] = i4 | 4;
  i5 = __ZN7WebCore12SQLAuthAllowE;
  i6 = HEAP32[i5 >> 2] | 0;
  return i6 | 0;
 }
 if ((HEAP32[i1 + 4 >> 2] & 6 | 0) != 0) {
  i5 = __ZN7WebCore11SQLAuthDenyE;
  i6 = HEAP32[i5 >> 2] | 0;
  return i6 | 0;
 }
 HEAP8[i3] = i4 | 4;
 i4 = __ZN3WTF17equalIgnoringCaseEPKNS_10StringImplES2_(HEAP32[i2 >> 2] | 0, HEAP32[i1 + 12 >> 2] | 0) | 0;
 i5 = i4 ? __ZN7WebCore11SQLAuthDenyE : __ZN7WebCore12SQLAuthAllowE;
 i6 = HEAP32[i5 >> 2] | 0;
 return i6 | 0;
}
function __ZN7WebCore18DatabaseAuthorizer11createTableERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i1 + 8 | 0;
 i4 = HEAP8[i3] | 0;
 if ((i4 & 1) == 0) {
  HEAP8[i3] = i4 | 4;
  i5 = __ZN7WebCore12SQLAuthAllowE;
  i6 = HEAP32[i5 >> 2] | 0;
  return i6 | 0;
 }
 if ((HEAP32[i1 + 4 >> 2] & 6 | 0) != 0) {
  i5 = __ZN7WebCore11SQLAuthDenyE;
  i6 = HEAP32[i5 >> 2] | 0;
  return i6 | 0;
 }
 HEAP8[i3] = i4 | 4;
 i4 = __ZN3WTF17equalIgnoringCaseEPKNS_10StringImplES2_(HEAP32[i2 >> 2] | 0, HEAP32[i1 + 12 >> 2] | 0) | 0;
 i5 = i4 ? __ZN7WebCore11SQLAuthDenyE : __ZN7WebCore12SQLAuthAllowE;
 i6 = HEAP32[i5 >> 2] | 0;
 return i6 | 0;
}
function __ZN7WebCore18DatabaseAuthorizer11allowInsertERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i1 + 8 | 0;
 i4 = HEAP8[i3] | 0;
 if ((i4 & 1) == 0) {
  HEAP8[i3] = i4 | 6;
  i5 = __ZN7WebCore12SQLAuthAllowE;
  i6 = HEAP32[i5 >> 2] | 0;
  return i6 | 0;
 }
 if ((HEAP32[i1 + 4 >> 2] & 6 | 0) != 0) {
  i5 = __ZN7WebCore11SQLAuthDenyE;
  i6 = HEAP32[i5 >> 2] | 0;
  return i6 | 0;
 }
 HEAP8[i3] = i4 | 6;
 i4 = __ZN3WTF17equalIgnoringCaseEPKNS_10StringImplES2_(HEAP32[i2 >> 2] | 0, HEAP32[i1 + 12 >> 2] | 0) | 0;
 i5 = i4 ? __ZN7WebCore11SQLAuthDenyE : __ZN7WebCore12SQLAuthAllowE;
 i6 = HEAP32[i5 >> 2] | 0;
 return i6 | 0;
}
function __ZN7WebCore18DatabaseAuthorizer6createERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = __ZN3WTF10fastMallocEj(36) | 0;
 i4 = i3;
 HEAP32[i3 >> 2] = 1;
 i5 = i3 + 8 | 0;
 i6 = HEAP8[i5] & -2;
 HEAP8[i5] = i6;
 i7 = HEAP32[i2 >> 2] | 0;
 HEAP32[i3 + 12 >> 2] = i7;
 if ((i7 | 0) == 0) {
  i8 = i6;
 } else {
  i6 = i7 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
  i8 = HEAP8[i5] | 0;
 }
 _memset(i3 + 16 | 0, 0, 20) | 0;
 HEAP8[i5] = i8 & -7;
 HEAP32[i3 + 4 >> 2] = 0;
 __ZN7WebCore18DatabaseAuthorizer23addWhitelistedFunctionsEv(i4);
 HEAP32[i1 >> 2] = i4;
 return;
}
function __ZN7WebCore18DatabaseAuthorizer17createTempTriggerERKN3WTF6StringES4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 do {
  if ((HEAP8[i1 + 8 | 0] & 1) == 0) {
   i4 = __ZN7WebCore12SQLAuthAllowE;
  } else {
   if ((HEAP32[i1 + 4 >> 2] & 6 | 0) != 0) {
    i4 = __ZN7WebCore11SQLAuthDenyE;
    break;
   }
   i2 = __ZN3WTF17equalIgnoringCaseEPKNS_10StringImplES2_(HEAP32[i3 >> 2] | 0, HEAP32[i1 + 12 >> 2] | 0) | 0;
   i4 = i2 ? __ZN7WebCore11SQLAuthDenyE : __ZN7WebCore12SQLAuthAllowE;
  }
 } while (0);
 return HEAP32[i4 >> 2] | 0;
}
function __ZN7WebCore18DatabaseAuthorizer15createTempIndexERKN3WTF6StringES4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 do {
  if ((HEAP8[i1 + 8 | 0] & 1) == 0) {
   i4 = __ZN7WebCore12SQLAuthAllowE;
  } else {
   if ((HEAP32[i1 + 4 >> 2] & 6 | 0) != 0) {
    i4 = __ZN7WebCore11SQLAuthDenyE;
    break;
   }
   i2 = __ZN3WTF17equalIgnoringCaseEPKNS_10StringImplES2_(HEAP32[i3 >> 2] | 0, HEAP32[i1 + 12 >> 2] | 0) | 0;
   i4 = i2 ? __ZN7WebCore11SQLAuthDenyE : __ZN7WebCore12SQLAuthAllowE;
  }
 } while (0);
 return HEAP32[i4 >> 2] | 0;
}
function __ZN7WebCore18DatabaseAuthorizerC2ERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 HEAP32[i1 >> 2] = 1;
 i3 = i1 + 8 | 0;
 i4 = HEAP8[i3] & -2;
 HEAP8[i3] = i4;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 + 12 >> 2] = i5;
 if ((i5 | 0) == 0) {
  i6 = i4;
 } else {
  i4 = i5 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
  i6 = HEAP8[i3] | 0;
 }
 _memset(i1 + 16 | 0, 0, 20) | 0;
 HEAP8[i3] = i6 & -7;
 HEAP32[i1 + 4 >> 2] = 0;
 __ZN7WebCore18DatabaseAuthorizer23addWhitelistedFunctionsEv(i1);
 return;
}
function __ZN7WebCore18DatabaseAuthorizerC1ERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 HEAP32[i1 >> 2] = 1;
 i3 = i1 + 8 | 0;
 i4 = HEAP8[i3] & -2;
 HEAP8[i3] = i4;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 + 12 >> 2] = i5;
 if ((i5 | 0) == 0) {
  i6 = i4;
 } else {
  i4 = i5 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
  i6 = HEAP8[i3] | 0;
 }
 _memset(i1 + 16 | 0, 0, 20) | 0;
 HEAP8[i3] = i6 & -7;
 HEAP32[i1 + 4 >> 2] = 0;
 __ZN7WebCore18DatabaseAuthorizer23addWhitelistedFunctionsEv(i1);
 return;
}
function __ZN7WebCore18DatabaseAuthorizer15createTempTableERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 do {
  if ((HEAP8[i1 + 8 | 0] & 1) == 0) {
   i3 = __ZN7WebCore12SQLAuthAllowE;
  } else {
   if ((HEAP32[i1 + 4 >> 2] & 6 | 0) != 0) {
    i3 = __ZN7WebCore11SQLAuthDenyE;
    break;
   }
   i4 = __ZN3WTF17equalIgnoringCaseEPKNS_10StringImplES2_(HEAP32[i2 >> 2] | 0, HEAP32[i1 + 12 >> 2] | 0) | 0;
   i3 = i4 ? __ZN7WebCore11SQLAuthDenyE : __ZN7WebCore12SQLAuthAllowE;
  }
 } while (0);
 return HEAP32[i3 >> 2] | 0;
}
function __ZN7WebCore18DatabaseAuthorizer29updateDeletesBasedOnTableNameERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = i1 + 8 | 0;
 if ((HEAP8[i3] & 1) == 0) {
  i4 = __ZN7WebCore12SQLAuthAllowE;
 } else {
  i5 = __ZN3WTF17equalIgnoringCaseEPKNS_10StringImplES2_(HEAP32[i2 >> 2] | 0, HEAP32[i1 + 12 >> 2] | 0) | 0;
  i4 = i5 ? __ZN7WebCore11SQLAuthDenyE : __ZN7WebCore12SQLAuthAllowE;
 }
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  return i5 | 0;
 }
 HEAP8[i3] = HEAP8[i3] | 8;
 return i5 | 0;
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
function __ZNK7WebCore18DatabaseAuthorizer20denyBasedOnTableNameERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((HEAP8[i1 + 8 | 0] & 1) == 0) {
  i3 = __ZN7WebCore12SQLAuthAllowE;
  i4 = HEAP32[i3 >> 2] | 0;
  return i4 | 0;
 }
 i5 = __ZN3WTF17equalIgnoringCaseEPKNS_10StringImplES2_(HEAP32[i2 >> 2] | 0, HEAP32[i1 + 12 >> 2] | 0) | 0;
 i3 = i5 ? __ZN7WebCore11SQLAuthDenyE : __ZN7WebCore12SQLAuthAllowE;
 i4 = HEAP32[i3 >> 2] | 0;
 return i4 | 0;
}
function __ZN7WebCore18DatabaseAuthorizer12allowAnalyzeERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((HEAP8[i1 + 8 | 0] & 1) == 0) {
  i3 = __ZN7WebCore12SQLAuthAllowE;
  i4 = HEAP32[i3 >> 2] | 0;
  return i4 | 0;
 }
 i5 = __ZN3WTF17equalIgnoringCaseEPKNS_10StringImplES2_(HEAP32[i2 >> 2] | 0, HEAP32[i1 + 12 >> 2] | 0) | 0;
 i3 = i5 ? __ZN7WebCore11SQLAuthDenyE : __ZN7WebCore12SQLAuthAllowE;
 i4 = HEAP32[i3 >> 2] | 0;
 return i4 | 0;
}
function __ZN7WebCore18DatabaseAuthorizer12dropTempViewERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 8 | 0;
 i3 = HEAP8[i2] | 0;
 if ((i3 & 1) == 0) {
  i4 = 3;
 } else {
  if ((HEAP32[i1 + 4 >> 2] & 6 | 0) == 0) {
   i4 = 3;
  } else {
   i5 = __ZN7WebCore11SQLAuthDenyE;
  }
 }
 if ((i4 | 0) == 3) {
  HEAP8[i2] = i3 | 8;
  i5 = __ZN7WebCore12SQLAuthAllowE;
 }
 return HEAP32[i5 >> 2] | 0;
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
function __ZN7WebCore18DatabaseAuthorizer8dropViewERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 8 | 0;
 i3 = HEAP8[i2] | 0;
 if ((i3 & 1) == 0) {
  i4 = 3;
 } else {
  if ((HEAP32[i1 + 4 >> 2] & 6 | 0) == 0) {
   i4 = 3;
  } else {
   i5 = __ZN7WebCore11SQLAuthDenyE;
  }
 }
 if ((i4 | 0) == 3) {
  HEAP8[i2] = i3 | 8;
  i5 = __ZN7WebCore12SQLAuthAllowE;
 }
 return HEAP32[i5 >> 2] | 0;
}
function __ZN7WebCore18DatabaseAuthorizer14createTempViewERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 do {
  if ((HEAP8[i1 + 8 | 0] & 1) == 0) {
   i3 = 1;
  } else {
   i2 = HEAP32[i1 + 4 >> 2] | 0;
   if ((i2 & 2 | 0) != 0) {
    i3 = 0;
    break;
   }
   i3 = (i2 & 4 | 0) == 0;
  }
 } while (0);
 return (i3 ? HEAP32[__ZN7WebCore12SQLAuthAllowE >> 2] | 0 : HEAP32[__ZN7WebCore11SQLAuthDenyE >> 2] | 0) | 0;
}
function __ZN7WebCore18DatabaseAuthorizer12allowReindexERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 do {
  if ((HEAP8[i1 + 8 | 0] & 1) == 0) {
   i3 = 1;
  } else {
   i2 = HEAP32[i1 + 4 >> 2] | 0;
   if ((i2 & 2 | 0) != 0) {
    i3 = 0;
    break;
   }
   i3 = (i2 & 4 | 0) == 0;
  }
 } while (0);
 return (i3 ? HEAP32[__ZN7WebCore12SQLAuthAllowE >> 2] | 0 : HEAP32[__ZN7WebCore11SQLAuthDenyE >> 2] | 0) | 0;
}
function __ZN7WebCore18DatabaseAuthorizer10createViewERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 do {
  if ((HEAP8[i1 + 8 | 0] & 1) == 0) {
   i3 = 1;
  } else {
   i2 = HEAP32[i1 + 4 >> 2] | 0;
   if ((i2 & 2 | 0) != 0) {
    i3 = 0;
    break;
   }
   i3 = (i2 & 4 | 0) == 0;
  }
 } while (0);
 return (i3 ? HEAP32[__ZN7WebCore12SQLAuthAllowE >> 2] | 0 : HEAP32[__ZN7WebCore11SQLAuthDenyE >> 2] | 0) | 0;
}
function __ZN7WebCore18DatabaseAuthorizer10allowWriteEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 do {
  if ((HEAP8[i1 + 8 | 0] & 1) == 0) {
   i2 = 1;
  } else {
   i3 = HEAP32[i1 + 4 >> 2] | 0;
   if ((i3 & 2 | 0) != 0) {
    i2 = 0;
    break;
   }
   i2 = (i3 & 4 | 0) == 0;
  }
 } while (0);
 return i2 | 0;
}
function __ZN7WebCore18DatabaseAuthorizer11allowPragmaERKN3WTF6StringES4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return ((HEAP8[i1 + 8 | 0] & 1) != 0 ? HEAP32[__ZN7WebCore11SQLAuthDenyE >> 2] | 0 : HEAP32[__ZN7WebCore12SQLAuthAllowE >> 2] | 0) | 0;
}
function __ZN7WebCore18DatabaseAuthorizer11allowDetachERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return ((HEAP8[i1 + 8 | 0] & 1) != 0 ? HEAP32[__ZN7WebCore11SQLAuthDenyE >> 2] | 0 : HEAP32[__ZN7WebCore12SQLAuthAllowE >> 2] | 0) | 0;
}
function __ZN7WebCore18DatabaseAuthorizer11allowAttachERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return ((HEAP8[i1 + 8 | 0] & 1) != 0 ? HEAP32[__ZN7WebCore11SQLAuthDenyE >> 2] | 0 : HEAP32[__ZN7WebCore12SQLAuthAllowE >> 2] | 0) | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore18DatabaseAuthorizer16allowTransactionEv(i1) {
 i1 = i1 | 0;
 return ((HEAP8[i1 + 8 | 0] & 1) != 0 ? HEAP32[__ZN7WebCore11SQLAuthDenyE >> 2] | 0 : HEAP32[__ZN7WebCore12SQLAuthAllowE >> 2] | 0) | 0;
}
function __ZN7WebCore18DatabaseAuthorizer5resetEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 8 | 0;
 HEAP8[i2] = HEAP8[i2] & -7;
 HEAP32[i1 + 4 >> 2] = 0;
 return;
}
function __ZN7WebCore18DatabaseAuthorizer11setReadOnlyEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 4 | 0;
 HEAP32[i2 >> 2] = HEAP32[i2 >> 2] | 2;
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
function __ZN7WebCore18DatabaseAuthorizer12resetDeletesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 8 | 0;
 HEAP8[i2] = HEAP8[i2] & -9;
 return;
}
function __ZN7WebCore18DatabaseAuthorizer7disableEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 8 | 0;
 HEAP8[i2] = HEAP8[i2] & -2;
 return;
}
function __ZN7WebCore18DatabaseAuthorizer6enableEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 8 | 0;
 HEAP8[i2] = HEAP8[i2] | 1;
 return;
}
function __ZN7WebCore18DatabaseAuthorizer14setPermissionsEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 + 4 >> 2] = i2;
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
 FUNCTION_TABLE_vi[i1 & 1](i2 | 0);
}
function b4(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(4);
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
function b3() {
 abort(3);
}
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0];
  var FUNCTION_TABLE_vii = [b1,b1,__ZN7WebCore18DatabaseAuthorizerC2ERKN3WTF6StringE,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_iii = [b4,b4];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN3WTF10StringImpl19latin1CaseFoldTableE": __ZN3WTF10StringImpl19latin1CaseFoldTableE, "__ZN7WebCore11SQLAuthDenyE": __ZN7WebCore11SQLAuthDenyE, "__ZN7WebCore12SQLAuthAllowE": __ZN7WebCore12SQLAuthAllowE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore18DatabaseAuthorizer16allowTransactionEv","__ZN7WebCore18DatabaseAuthorizer14createTempViewERKN3WTF6StringE","__ZN7WebCore18DatabaseAuthorizer5resetEv","__ZN7WebCore18DatabaseAuthorizer8dropViewERKN3WTF6StringE","_strlen","__ZN7WebCore18DatabaseAuthorizer15dropTempTriggerERKN3WTF6StringES4_","__ZN7WebCore18DatabaseAuthorizer11createIndexERKN3WTF6StringES4_","__ZN7WebCore18DatabaseAuthorizerC2ERKN3WTF6StringE","__ZN7WebCore18DatabaseAuthorizer9dropTableERKN3WTF6StringE","__ZN7WebCore18DatabaseAuthorizer11allowInsertERKN3WTF6StringE","__ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E6rehashEiPS1_","__ZN7WebCore18DatabaseAuthorizer12allowReindexERKN3WTF6StringE","__ZN7WebCore18DatabaseAuthorizer6enableEv","__ZN7WebCore18DatabaseAuthorizer11allowDeleteERKN3WTF6StringE","__ZN7WebCore18DatabaseAuthorizer11allowPragmaERKN3WTF6StringES4_","__ZN7WebCore18DatabaseAuthorizer12allowAnalyzeERKN3WTF6StringE","__ZN7WebCore18DatabaseAuthorizer13dropTempIndexERKN3WTF6StringES4_","__ZN3WTF12StringHasher28addCharactersAssumingAlignedItXadL_ZNS_15CaseFoldingHash8foldCaseItEEtT_EEEEvPKS4_j","__ZN7WebCore18DatabaseAuthorizer15createTempTableERKN3WTF6StringE","__ZN3WTF15CaseFoldingHash4hashERNS_10StringImplE","__ZN7WebCore18DatabaseAuthorizer23addWhitelistedFunctionsEv","__ZN7WebCore18DatabaseAuthorizer10dropVTableERKN3WTF6StringES4_","__ZN7WebCore18DatabaseAuthorizer13createTriggerERKN3WTF6StringES4_","__ZN7WebCore18DatabaseAuthorizer9allowReadERKN3WTF6StringES4_","__ZN7WebCore18DatabaseAuthorizer11allowUpdateERKN3WTF6StringES4_","__ZN7WebCore18DatabaseAuthorizer11setReadOnlyEv","__ZN7WebCore18DatabaseAuthorizer15allowAlterTableERKN3WTF6StringES4_","__ZN7WebCore18DatabaseAuthorizer12createVTableERKN3WTF6StringES4_","__ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_","__ZN7WebCore18DatabaseAuthorizer9dropIndexERKN3WTF6StringES4_","__ZN7WebCore18DatabaseAuthorizer14setPermissionsEi","__ZN7WebCore18DatabaseAuthorizer11createTableERKN3WTF6StringE","__ZN7WebCore18DatabaseAuthorizer29updateDeletesBasedOnTableNameERKN3WTF6StringE","__ZN7WebCore18DatabaseAuthorizer7disableEv","__ZN7WebCore18DatabaseAuthorizer12dropTempViewERKN3WTF6StringE","__ZN7WebCore18DatabaseAuthorizer10createViewERKN3WTF6StringE","__ZN7WebCore18DatabaseAuthorizer6createERKN3WTF6StringE","__ZN7WebCore18DatabaseAuthorizer11allowDetachERKN3WTF6StringE","_memset","__ZN7WebCore18DatabaseAuthorizer10allowWriteEv","_memcpy","__ZNK7WebCore18DatabaseAuthorizer20denyBasedOnTableNameERKN3WTF6StringE","__ZN7WebCore18DatabaseAuthorizer17createTempTriggerERKN3WTF6StringES4_","__ZN7WebCore18DatabaseAuthorizer12resetDeletesEv","__ZN7WebCore18DatabaseAuthorizer13dropTempTableERKN3WTF6StringE","__ZN7WebCore18DatabaseAuthorizer11dropTriggerERKN3WTF6StringES4_","__ZN7WebCore18DatabaseAuthorizer11allowAttachERKN3WTF6StringE","__ZN7WebCore18DatabaseAuthorizer15createTempIndexERKN3WTF6StringES4_","__ZN7WebCore18DatabaseAuthorizer13allowFunctionERKN3WTF6StringE"]

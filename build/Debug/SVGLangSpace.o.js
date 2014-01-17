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
H_BASE = parentModule["_malloc"](48 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 48;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
/* memory initializer */ allocate([120,109,108,0,0,0,0,0,100,101,102,97,117,108,116,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
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
function invoke_vi(index,a1) {
  try {
    Module["dynCall_vi"](index,a1);
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
  var __ZN7WebCore8XMLNames8langAttrE=env.__ZN7WebCore8XMLNames8langAttrE|0;
  var __ZN7WebCore8XMLNames9spaceAttrE=env.__ZN7WebCore8XMLNames9spaceAttrE|0;
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
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var invoke_vi=env.invoke_vi;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = i2 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i9 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i9 | 0) == 0) {
   i10 = 8;
  } else {
   i11 = i9 << 1;
   i10 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i11 | 0) ? i9 : i11;
  }
  __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E6rehashEiPS2_(i2, i10, 0) | 0;
  i12 = HEAP32[i7 >> 2] | 0;
 } else {
  i12 = i8;
 }
 i8 = HEAP32[i2 + 8 >> 2] | 0;
 i10 = i3 | 0;
 i3 = HEAP32[i10 >> 2] | 0;
 i11 = i3 + 4 | 0;
 i9 = HEAP32[i11 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i13 = __ZNK7WebCore13QualifiedName17QualifiedNameImpl11computeHashEv(i3) | 0;
  HEAP32[i11 >> 2] = i13;
  i14 = i13;
 } else {
  i14 = i9;
 }
 i9 = i14 & i8;
 i13 = i12 + (i9 << 2) | 0;
 i11 = i6 | 0;
 i3 = HEAP32[(__ZN7WebCore9nullQNameEv() | 0) >> 2] | 0;
 HEAP32[i11 >> 2] = i3;
 i15 = i3 | 0;
 HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
 i15 = i13 | 0;
 i3 = (HEAP32[i15 >> 2] | 0) == (HEAP32[i11 >> 2] | 0);
 __ZN7WebCore13QualifiedNameD1Ev(i6);
 do {
  if (i3) {
   i16 = i13;
   i17 = 14;
  } else {
   i18 = (i14 >>> 23) + ~i14 | 0;
   i19 = i18 << 12 ^ i18;
   i18 = i19 >>> 7 ^ i19;
   i19 = i18 << 2 ^ i18;
   i18 = i19 >>> 20 ^ i19 | 1;
   i19 = 0;
   i20 = 0;
   i21 = i9;
   i22 = i13;
   i23 = i15;
   while (1) {
    i24 = HEAP32[i23 >> 2] | 0;
    if ((i24 | 0) == -1) {
     i25 = i22;
    } else {
     if ((i24 | 0) == (HEAP32[i10 >> 2] | 0)) {
      i17 = 11;
      break;
     } else {
      i25 = i20;
     }
    }
    i24 = (i19 | 0) == 0 ? i18 : i19;
    i26 = i24 + i21 & i8;
    i27 = i12 + (i26 << 2) | 0;
    i28 = HEAP32[(__ZN7WebCore9nullQNameEv() | 0) >> 2] | 0;
    HEAP32[i11 >> 2] = i28;
    i29 = i28 | 0;
    HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 1;
    i29 = i27 | 0;
    i28 = (HEAP32[i29 >> 2] | 0) == (HEAP32[i11 >> 2] | 0);
    __ZN7WebCore13QualifiedNameD1Ev(i6);
    if (i28) {
     i17 = 13;
     break;
    } else {
     i19 = i24;
     i20 = i25;
     i21 = i26;
     i22 = i27;
     i23 = i29;
    }
   }
   if ((i17 | 0) == 11) {
    i23 = (HEAP32[i7 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 2) | 0;
    i21 = i1;
    HEAP32[i21 >> 2] = i22;
    HEAP32[i21 + 4 >> 2] = i23;
    HEAP8[i1 + 8 | 0] = 0;
    STACKTOP = i5;
    return;
   } else if ((i17 | 0) == 13) {
    if ((i25 | 0) == 0) {
     i16 = i27;
     i17 = 14;
     break;
    }
    i23 = HEAP32[(__ZN7WebCore9nullQNameEv() | 0) >> 2] | 0;
    HEAP32[i25 >> 2] = i23;
    i21 = i23 | 0;
    HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
    i21 = i2 + 16 | 0;
    HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) - 1;
    i30 = i25;
    i31 = i21;
    break;
   }
  }
 } while (0);
 if ((i17 | 0) == 14) {
  i30 = i16;
  i31 = i2 + 16 | 0;
 }
 i16 = i4 | 0;
 i4 = HEAP32[i16 >> 2] | 0;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 __ZN7WebCore13QualifiedName5derefEv(i30);
 HEAP32[i30 >> 2] = HEAP32[i16 >> 2];
 i16 = i2 + 12 | 0;
 i4 = (HEAP32[i16 >> 2] | 0) + 1 | 0;
 HEAP32[i16 >> 2] = i4;
 i16 = i2 + 4 | 0;
 i17 = HEAP32[i16 >> 2] | 0;
 if (((HEAP32[i31 >> 2] | 0) + i4 << 1 | 0) < (i17 | 0)) {
  i32 = i30;
  i33 = i17;
 } else {
  if ((i17 | 0) == 0) {
   i34 = 8;
  } else {
   i31 = i17 << 1;
   i34 = (i4 * 6 & -1 | 0) < (i31 | 0) ? i17 : i31;
  }
  i31 = __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E6rehashEiPS2_(i2, i34, i30) | 0;
  i32 = i31;
  i33 = HEAP32[i16 >> 2] | 0;
 }
 i16 = (HEAP32[i7 >> 2] | 0) + (i33 << 2) | 0;
 i33 = i1;
 HEAP32[i33 >> 2] = i32;
 HEAP32[i33 + 4 >> 2] = i16;
 HEAP8[i1 + 8 | 0] = 1;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore12SVGLangSpace22addSupportedAttributesERN3WTF7HashSetINS_13QualifiedNameENS_17QualifiedNameHashENS1_10HashTraitsIS3_EEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 104 | 0;
 i3 = i1 | 0;
 i4 = i1 + 8 | 0;
 i5 = i1 + 16 | 0;
 i6 = i1 + 24 | 0;
 i7 = i1 + 64 | 0;
 if (!(HEAP8[H_BASE + 32 | 0] | 0)) {
  i8 = __Znwj(4) | 0;
  __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i5, H_BASE + 8 | 0, 3);
  i9 = i5 | 0;
  i5 = HEAP32[i9 >> 2] | 0;
  HEAP32[i9 >> 2] = 0;
  HEAP32[i8 >> 2] = i5;
  HEAP32[H_BASE + 48 >> 2] = i8;
  HEAP8[H_BASE + 32 | 0] = 1;
 }
 i8 = i6 | 0;
 i5 = HEAP32[__ZN7WebCore8XMLNames8langAttrE >> 2] | 0;
 HEAP32[i8 >> 2] = i5;
 i9 = i5 | 0;
 HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 i9 = HEAP32[i8 >> 2] | 0;
 __ZN7WebCore13QualifiedNameC1ERKN3WTF12AtomicStringES4_S4_(i4, HEAP32[H_BASE + 48 >> 2] | 0, i9 + 12 | 0, i9 + 16 | 0);
 i9 = i4 | 0;
 i5 = HEAP32[i9 >> 2] | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 __ZN7WebCore13QualifiedName5derefEv(i6);
 HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
 __ZN7WebCore13QualifiedNameD1Ev(i4);
 i4 = i2 | 0;
 __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_(i1 + 32 | 0, i4, i6, i6);
 __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_(i1 + 48 | 0, i4, __ZN7WebCore8XMLNames8langAttrE, __ZN7WebCore8XMLNames8langAttrE);
 i2 = i7 | 0;
 i9 = HEAP32[__ZN7WebCore8XMLNames9spaceAttrE >> 2] | 0;
 HEAP32[i2 >> 2] = i9;
 i8 = i9 | 0;
 HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 i8 = HEAP32[i2 >> 2] | 0;
 __ZN7WebCore13QualifiedNameC1ERKN3WTF12AtomicStringES4_S4_(i3, HEAP32[H_BASE + 48 >> 2] | 0, i8 + 12 | 0, i8 + 16 | 0);
 i8 = i3 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 __ZN7WebCore13QualifiedName5derefEv(i7);
 HEAP32[i2 >> 2] = HEAP32[i8 >> 2];
 __ZN7WebCore13QualifiedNameD1Ev(i3);
 __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_(i1 + 72 | 0, i4, i7, i7);
 __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_(i1 + 88 | 0, i4, __ZN7WebCore8XMLNames9spaceAttrE, __ZN7WebCore8XMLNames9spaceAttrE);
 __ZN7WebCore13QualifiedNameD1Ev(i7);
 __ZN7WebCore13QualifiedNameD1Ev(i6);
 STACKTOP = i1;
 return;
}
function __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E6rehashEiPS2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i1 + 4 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = i1 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 HEAP32[i7 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = i2 - 1;
 i7 = __ZN3WTF10fastMallocEj(i2 << 2) | 0;
 if ((i2 | 0) > 0) {
  i11 = 0;
  while (1) {
   i12 = HEAP32[(__ZN7WebCore9nullQNameEv() | 0) >> 2] | 0;
   HEAP32[i7 + (i11 << 2) >> 2] = i12;
   i13 = i12 | 0;
   HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
   i11 = i11 + 1 | 0;
   if ((i11 | 0) >= (i2 | 0)) {
    break;
   }
  }
 }
 HEAP32[i9 >> 2] = i7;
 if ((i8 | 0) == 0) {
  HEAP32[i1 + 16 >> 2] = 0;
  i14 = 0;
  i15 = i10;
  __ZN3WTF8fastFreeEPv(i15);
  STACKTOP = i4;
  return i14 | 0;
 }
 i7 = i6 | 0;
 i9 = i5 | 0;
 i2 = 0;
 i11 = 0;
 while (1) {
  i13 = i10 + (i2 << 2) | 0;
  i12 = HEAP32[(__ZN7WebCore9nullQNameEv() | 0) >> 2] | 0;
  HEAP32[i7 >> 2] = i12;
  i16 = i12 | 0;
  HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
  i16 = i13 | 0;
  i12 = (HEAP32[i16 >> 2] | 0) == (HEAP32[i7 >> 2] | 0);
  __ZN7WebCore13QualifiedNameD1Ev(i6);
  do {
   if (i12) {
    i17 = i11;
   } else {
    if ((HEAP32[i16 >> 2] | 0) == -1) {
     i17 = i11;
     break;
    }
    __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E16lookupForWritingINS_22IdentityHashTranslatorIS4_EES2_EENSt3__14pairIPS2_bEERKT0_(i5, i1, i13);
    i18 = HEAP32[i9 >> 2] | 0;
    __ZN7WebCore13QualifiedNameD1Ev(i18);
    i19 = HEAP32[i16 >> 2] | 0;
    HEAP32[i18 >> 2] = i19;
    i20 = i19 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
    i17 = (i13 | 0) == (i3 | 0) ? i18 : i11;
   }
  } while (0);
  i13 = i2 + 1 | 0;
  if ((i13 | 0) == (i8 | 0)) {
   break;
  } else {
   i2 = i13;
   i11 = i17;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i8 | 0) > 0) {
  i21 = 0;
 } else {
  i14 = i17;
  i15 = i10;
  __ZN3WTF8fastFreeEPv(i15);
  STACKTOP = i4;
  return i14 | 0;
 }
 while (1) {
  i1 = i10 + (i21 << 2) | 0;
  if ((HEAP32[i1 >> 2] | 0) != -1) {
   __ZN7WebCore13QualifiedNameD1Ev(i1);
  }
  i1 = i21 + 1 | 0;
  if ((i1 | 0) < (i8 | 0)) {
   i21 = i1;
  } else {
   i14 = i17;
   break;
  }
 }
 i15 = i10;
 __ZN3WTF8fastFreeEPv(i15);
 STACKTOP = i4;
 return i14 | 0;
}
function __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E16lookupForWritingINS_22IdentityHashTranslatorIS4_EES2_EENSt3__14pairIPS2_bEERKT0_(i1, i2, i3) {
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
 i10 = i6 + (i9 << 2) | 0;
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
    i24 = i6 + (i23 << 2) | 0;
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
function __ZN7WebCore12SVGLangSpace14parseAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i2 = HEAP32[__ZN7WebCore8XMLNames8langAttrE >> 2] | 0;
 do {
  if ((i4 | 0) != (i2 | 0)) {
   i5 = HEAP32[i4 + 12 >> 2] | 0;
   if ((i5 | 0) == (HEAP32[i2 + 12 >> 2] | 0)) {
    if ((HEAP32[i4 + 16 >> 2] | 0) == (HEAP32[i2 + 16 >> 2] | 0)) {
     break;
    }
   }
   i6 = HEAP32[__ZN7WebCore8XMLNames9spaceAttrE >> 2] | 0;
   do {
    if ((i4 | 0) != (i6 | 0)) {
     if ((i5 | 0) != (HEAP32[i6 + 12 >> 2] | 0)) {
      i7 = 0;
      return i7 | 0;
     }
     if ((HEAP32[i4 + 16 >> 2] | 0) == (HEAP32[i6 + 16 >> 2] | 0)) {
      break;
     } else {
      i7 = 0;
     }
     return i7 | 0;
    }
   } while (0);
   i6 = HEAP32[i3 >> 2] | 0;
   if ((i6 | 0) != 0) {
    i5 = i6 | 0;
    HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
   }
   i5 = i1 + 4 | 0;
   i8 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = i6;
   if ((i8 | 0) == 0) {
    i7 = 1;
    return i7 | 0;
   }
   i6 = i8 | 0;
   i5 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    i7 = 1;
    return i7 | 0;
   } else {
    HEAP32[i6 >> 2] = i5;
    i7 = 1;
    return i7 | 0;
   }
  }
 } while (0);
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i3 = i4 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 i3 = i1 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i4;
 if ((i1 | 0) == 0) {
  i7 = 1;
  return i7 | 0;
 }
 i4 = i1 | 0;
 i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  i7 = 1;
  return i7 | 0;
 } else {
  HEAP32[i4 >> 2] = i3;
  i7 = 1;
  return i7 | 0;
 }
 return 0;
}
function __ZN7WebCore12SVGLangSpace16isKnownAttributeERKNS_13QualifiedNameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i1 = HEAP32[i2 >> 2] | 0;
 i2 = HEAP32[__ZN7WebCore8XMLNames8langAttrE >> 2] | 0;
 if ((i1 | 0) == (i2 | 0)) {
  i3 = 1;
  return i3 | 0;
 }
 i4 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i4 | 0) == (HEAP32[i2 + 12 >> 2] | 0)) {
   if ((HEAP32[i1 + 16 >> 2] | 0) == (HEAP32[i2 + 16 >> 2] | 0)) {
    i3 = 1;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 i2 = HEAP32[__ZN7WebCore8XMLNames9spaceAttrE >> 2] | 0;
 if ((i1 | 0) == (i2 | 0)) {
  i3 = 1;
  return i3 | 0;
 }
 if ((i4 | 0) != (HEAP32[i2 + 12 >> 2] | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (HEAP32[i1 + 16 >> 2] | 0) == (HEAP32[i2 + 16 >> 2] | 0);
 return i3 | 0;
}
function __ZNK7WebCore12SVGLangSpace8xmlspaceEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 4 | 0;
 if ((HEAP32[i4 >> 2] | 0) != 0) {
  i5 = i4;
  STACKTOP = i2;
  return i5 | 0;
 }
 if (HEAP8[H_BASE + 24 | 0] | 0) {
  i5 = HEAP32[H_BASE + 40 >> 2] | 0;
  STACKTOP = i2;
  return i5 | 0;
 } else {
  i4 = __Znwj(4) | 0;
  i1 = i4;
  __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i3, H_BASE + 16 | 0, 7);
  i6 = i3 | 0;
  i3 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = 0;
  HEAP32[i4 >> 2] = i3;
  HEAP32[H_BASE + 40 >> 2] = i1;
  HEAP8[H_BASE + 24 | 0] = 1;
  i5 = i1;
  STACKTOP = i2;
  return i5 | 0;
 }
 return 0;
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
function __ZN7WebCore12SVGLangSpace11setXmlspaceERKN3WTF12AtomicStringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i2 = i3 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 i2 = i1 + 4 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i3;
 if ((i1 | 0) == 0) {
  return;
 }
 i3 = i1 | 0;
 i2 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  return;
 } else {
  HEAP32[i3 >> 2] = i2;
  return;
 }
}
function __ZN7WebCore12SVGLangSpace10setXmllangERKN3WTF12AtomicStringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i2 = i3 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 i2 = i1 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i3;
 if ((i1 | 0) == 0) {
  return;
 }
 i3 = i1 | 0;
 i2 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  return;
 } else {
  HEAP32[i3 >> 2] = i2;
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
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
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
function b2(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(2);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
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
function b3(i1) {
 i1 = i1 | 0;
 abort(3);
}
function b1() {
 abort(1);
}
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_ii = [b0,b0];
  var FUNCTION_TABLE_v = [b1,b1];
  var FUNCTION_TABLE_iii = [b2,b2];
  var FUNCTION_TABLE_vi = [b3,b3];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_vi: dynCall_vi };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_vi": invoke_vi, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore8XMLNames8langAttrE": __ZN7WebCore8XMLNames8langAttrE, "__ZN7WebCore8XMLNames9spaceAttrE": __ZN7WebCore8XMLNames9spaceAttrE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore12SVGLangSpace14parseAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE","__ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E6rehashEiPS2_","_memset","__ZN7WebCore12SVGLangSpace16isKnownAttributeERKNS_13QualifiedNameE","__ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_","__ZN7WebCore12SVGLangSpace10setXmllangERKN3WTF12AtomicStringE","_memcpy","__ZN7WebCore12SVGLangSpace11setXmlspaceERKN3WTF12AtomicStringE","__ZNK7WebCore12SVGLangSpace8xmlspaceEv","__ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E16lookupForWritingINS_22IdentityHashTranslatorIS4_EES2_EENSt3__14pairIPS2_bEERKT0_","__ZN7WebCore12SVGLangSpace22addSupportedAttributesERN3WTF7HashSetINS_13QualifiedNameENS_17QualifiedNameHashENS1_10HashTraitsIS3_EEEE"]

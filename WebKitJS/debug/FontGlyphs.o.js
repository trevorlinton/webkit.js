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
H_BASE = parentModule["_malloc"](0 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 0;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore10FontGlyphsC1EN3WTF10PassRefPtrINS_12FontSelectorEEE;
var __ZN7WebCore10FontGlyphsC1ERKNS_16FontPlatformDataE;
/* no memory initializer */
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
  var invoke_viiii=env.invoke_viiii;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZNK7WebCore10FontGlyphs28glyphDataAndPageForCharacterERKNS_15FontDescriptionEibNS_15FontDataVariantE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i7 + 16 | 0;
 i11 = i7 + 32 | 0;
 i12 = i11;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 12 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 12 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i18 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i19 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i20 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i21 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i22 = i21;
 do {
  if ((i6 | 0) == 0) {
   if ((HEAP32[i3 + 16 >> 2] & 32 | 0) == 0) {
    i23 = i4;
    i24 = 1;
    break;
   }
   i25 = i2 + 44 | 0;
   i26 = HEAP32[i25 >> 2] | 0;
   if ((i26 | 0) == 0) {
    i27 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i2, i3, 0) | 0;
    i28 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i27 >> 2] | 0) + 8 >> 2] & 1](i27, 32) | 0;
    HEAP32[i25 >> 2] = i28;
    i29 = i28;
   } else {
    i29 = i26;
   }
   if ((HEAP32[i29 + 76 >> 2] | 0) != 0) {
    i23 = i4;
    i24 = 1;
    break;
   }
   i26 = _u_toupper(i4) | 0;
   i23 = i26;
   i24 = (i26 | 0) == (i4 | 0) ? 1 : 2;
  } else {
   i23 = i4;
   i24 = i6;
  }
 } while (0);
 if (i5) {
  i30 = _u_charMirror(i23) | 0;
 } else {
  i30 = i23;
 }
 i23 = i30 >>> 8;
 i5 = (i23 | 0) != 0;
 L12 : do {
  if (i5) {
   i6 = HEAP32[i2 + 28 >> 2] | 0;
   i4 = HEAP32[i2 + 20 >> 2] | 0;
   i29 = i23 + ~(i23 << 15) | 0;
   i26 = (i29 >>> 10 ^ i29) * 9 & -1;
   i29 = i26 >>> 6 ^ i26;
   i26 = i29 + ~(i29 << 11) | 0;
   i29 = i26 >>> 16 ^ i26;
   L15 : do {
    if ((i4 | 0) != 0) {
     i26 = i6 & i29;
     i28 = i4 + (i26 << 3) | 0;
     i25 = HEAP32[i28 >> 2] | 0;
     if ((i25 | 0) == (i23 | 0)) {
      i31 = i28;
     } else {
      i28 = (i29 >>> 23) + ~i29 | 0;
      i27 = i28 << 12 ^ i28;
      i28 = i27 >>> 7 ^ i27;
      i27 = i28 << 2 ^ i28;
      i28 = i27 >>> 20 ^ i27 | 1;
      i27 = 0;
      i32 = i26;
      i26 = i25;
      while (1) {
       if ((i26 | 0) == 0) {
        break L15;
       }
       i25 = (i27 | 0) == 0 ? i28 : i27;
       i33 = i25 + i32 & i6;
       i34 = i4 + (i33 << 3) | 0;
       i35 = HEAP32[i34 >> 2] | 0;
       if ((i35 | 0) == (i23 | 0)) {
        i31 = i34;
        break;
       } else {
        i27 = i25;
        i32 = i33;
        i26 = i35;
       }
      }
     }
     if ((i31 | 0) == 0) {
      break;
     }
     i36 = i31 + 4 | 0;
     i37 = 19;
     break L12;
    }
   } while (0);
   HEAP32[i8 >> 2] = 0;
   i37 = 20;
  } else {
   i36 = i2 + 40 | 0;
   i37 = 19;
  }
 } while (0);
 if ((i37 | 0) == 19) {
  i31 = HEAP32[i36 >> 2] | 0;
  HEAP32[i8 >> 2] = i31;
  if ((i31 | 0) == 0) {
   i37 = 20;
  }
 }
 do {
  if ((i37 | 0) == 20) {
   i31 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i2, i3, 0) | 0;
   i36 = __ZN7WebCore17GlyphPageTreeNode8getChildEPKNS_8FontDataEj(__ZN7WebCore17GlyphPageTreeNode7getRootEj(i23) | 0, i31, i23) | 0;
   HEAP32[i8 >> 2] = i36;
   if (!i5) {
    HEAP32[i2 + 40 >> 2] = i36;
    break;
   }
   HEAP32[i9 >> 2] = i23;
   __ZN3WTF9HashTableIiNS_12KeyValuePairIiPN7WebCore17GlyphPageTreeNodeEEENS_24KeyValuePairKeyExtractorIS5_EENS_7IntHashIjEENS_7HashMapIiS4_S9_NS_10HashTraitsIiEENSB_IS4_EEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EEiRS4_EENS_18HashTableAddResultINS_17HashTableIteratorIiS5_S7_S9_SF_SC_EEEEOT0_OT1_(i10, i2 + 20 | 0, i9, i8);
   if ((HEAP8[i10 + 8 | 0] & 1) != 0) {
    break;
   }
   HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] = HEAP32[i8 >> 2];
  }
 } while (0);
 i10 = i2 + 20 | 0;
 L34 : do {
  if ((i24 | 0) == 1) {
   i9 = i14 + 8 | 0;
   i36 = i14 | 0;
   i31 = i2 + 40 | 0;
   i4 = i30 & 255;
   i6 = i11;
   i29 = i12 + 4 | 0;
   L36 : do {
    if (i5) {
     while (1) {
      i26 = HEAP32[i8 >> 2] | 0;
      i32 = HEAP32[i26 + 24 >> 2] | 0;
      if ((i32 | 0) != 0) {
       i27 = HEAP16[i32 + 12 + (i4 << 1) >> 1] | 0;
       i28 = HEAP32[i32 + 4 >> 2] | 0;
       if ((i28 | 0) == 0) {
        i38 = HEAP32[i32 + 524 + (i4 << 2) >> 2] | 0;
       } else {
        i38 = i27 << 16 >> 16 == 0 ? 0 : i28;
       }
       if ((i38 | 0) != 0) {
        i39 = i32;
        i40 = i27;
        i41 = i38;
        break L36;
       }
       if ((HEAP8[i26 + 31 | 0] | 0) < 0) {
        i42 = i32;
        i43 = i27;
        i37 = 82;
        break L36;
       }
      }
      HEAP32[i8 >> 2] = __ZN7WebCore17GlyphPageTreeNode8getChildEPKNS_8FontDataEj(i26, __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i2, i3, HEAP32[i26 + 28 >> 2] & 2147483647) | 0, i23) | 0;
      HEAP32[i13 >> 2] = i23;
      __ZN3WTF9HashTableIiNS_12KeyValuePairIiPN7WebCore17GlyphPageTreeNodeEEENS_24KeyValuePairKeyExtractorIS5_EENS_7IntHashIjEENS_7HashMapIiS4_S9_NS_10HashTraitsIiEENSB_IS4_EEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EEiRS4_EENS_18HashTableAddResultINS_17HashTableIteratorIiS5_S7_S9_SF_SC_EEEEOT0_OT1_(i14, i10, i13, i8);
      if ((HEAP8[i9] & 1) != 0) {
       continue;
      }
      HEAP32[(HEAP32[i36 >> 2] | 0) + 4 >> 2] = HEAP32[i8 >> 2];
     }
    } else {
     i26 = HEAP32[i8 >> 2] | 0;
     while (1) {
      i27 = HEAP32[i26 + 24 >> 2] | 0;
      if ((i27 | 0) != 0) {
       i32 = HEAP16[i27 + 12 + (i4 << 1) >> 1] | 0;
       i28 = HEAP32[i27 + 4 >> 2] | 0;
       if ((i28 | 0) == 0) {
        i44 = HEAP32[i27 + 524 + (i4 << 2) >> 2] | 0;
       } else {
        i44 = i32 << 16 >> 16 == 0 ? 0 : i28;
       }
       if ((i44 | 0) != 0) {
        i39 = i27;
        i40 = i32;
        i41 = i44;
        break L36;
       }
       if ((HEAP8[i26 + 31 | 0] | 0) < 0) {
        i42 = i27;
        i43 = i32;
        i37 = 82;
        break L36;
       }
      }
      i32 = __ZN7WebCore17GlyphPageTreeNode8getChildEPKNS_8FontDataEj(i26, __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i2, i3, HEAP32[i26 + 28 >> 2] & 2147483647) | 0, 0) | 0;
      HEAP32[i8 >> 2] = i32;
      HEAP32[i31 >> 2] = i32;
      i26 = i32;
     }
    }
   } while (0);
   if ((i37 | 0) == 82) {
    HEAP16[i6 >> 1] = i43;
    HEAP32[i29 >> 2] = 0;
    i45 = i42;
    i46 = 1;
    break;
   }
   HEAP16[i6 >> 1] = i40;
   HEAP32[i29 >> 2] = i41;
   do {
    if ((HEAP32[i41 + 56 >> 2] | 0) != 0) {
     if ((HEAP8[i41 + 1119 | 0] & 1) != 0) {
      break;
     }
     if (!(__ZN7WebCore4Font22isCJKIdeographOrSymbolEi(i30) | 0)) {
      __ZN7WebCoreL54glyphDataAndPageForNonCJKCharacterWithGlyphOrientationEiNS_22NonCJKGlyphOrientationERNS_9GlyphDataEPNS_9GlyphPageEj(i1, i30, (HEAP32[i3 + 16 >> 2] | 0) >>> 1 & 1, i12, i39, i23);
      STACKTOP = i7;
      return;
     }
     if ((HEAP8[i41 + 1121 | 0] & 1) == 0) {
      i47 = 4;
      i48 = i31;
      i49 = i4;
      i37 = 50;
      break L34;
     }
     i36 = i1;
     i9 = HEAP32[i11 + 4 >> 2] | 0;
     HEAP32[i36 >> 2] = HEAP32[i11 >> 2];
     HEAP32[i36 + 4 >> 2] = i9;
     HEAP32[i1 + 8 >> 2] = i39;
     STACKTOP = i7;
     return;
    }
   } while (0);
   i4 = i1;
   i31 = HEAP32[i11 + 4 >> 2] | 0;
   HEAP32[i4 >> 2] = HEAP32[i11 >> 2];
   HEAP32[i4 + 4 >> 2] = i31;
   HEAP32[i1 + 8 >> 2] = i39;
   STACKTOP = i7;
   return;
  } else {
   i47 = i24;
   i48 = i2 + 40 | 0;
   i49 = i30 & 255;
   i37 = 50;
  }
 } while (0);
 L74 : do {
  if ((i37 | 0) == 50) {
   i24 = i17 + 8 | 0;
   i39 = i17 | 0;
   L76 : do {
    if (i5) {
     while (1) {
      i11 = HEAP32[i8 >> 2] | 0;
      i41 = HEAP32[i11 + 24 >> 2] | 0;
      if ((i41 | 0) != 0) {
       i12 = HEAP16[i41 + 12 + (i49 << 1) >> 1] | 0;
       i40 = HEAP32[i41 + 4 >> 2] | 0;
       if ((i40 | 0) == 0) {
        i42 = HEAP32[i41 + 524 + (i49 << 2) >> 2] | 0;
        if ((i42 | 0) != 0) {
         i50 = i42;
         i51 = i41;
         i52 = i12;
         break L76;
        }
       } else {
        if (i12 << 16 >> 16 != 0) {
         i50 = i40;
         i51 = i41;
         i52 = i12;
         break L76;
        }
       }
       if ((HEAP8[i11 + 31 | 0] | 0) < 0) {
        i45 = i41;
        i46 = i47;
        break L74;
       }
      }
      HEAP32[i8 >> 2] = __ZN7WebCore17GlyphPageTreeNode8getChildEPKNS_8FontDataEj(i11, __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i2, i3, HEAP32[i11 + 28 >> 2] & 2147483647) | 0, i23) | 0;
      HEAP32[i16 >> 2] = i23;
      __ZN3WTF9HashTableIiNS_12KeyValuePairIiPN7WebCore17GlyphPageTreeNodeEEENS_24KeyValuePairKeyExtractorIS5_EENS_7IntHashIjEENS_7HashMapIiS4_S9_NS_10HashTraitsIiEENSB_IS4_EEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EEiRS4_EENS_18HashTableAddResultINS_17HashTableIteratorIiS5_S7_S9_SF_SC_EEEEOT0_OT1_(i17, i10, i16, i8);
      if ((HEAP8[i24] & 1) != 0) {
       continue;
      }
      HEAP32[(HEAP32[i39 >> 2] | 0) + 4 >> 2] = HEAP32[i8 >> 2];
     }
    } else {
     i11 = HEAP32[i8 >> 2] | 0;
     while (1) {
      i41 = HEAP32[i11 + 24 >> 2] | 0;
      if ((i41 | 0) != 0) {
       i12 = HEAP16[i41 + 12 + (i49 << 1) >> 1] | 0;
       i40 = HEAP32[i41 + 4 >> 2] | 0;
       if ((i40 | 0) == 0) {
        i42 = HEAP32[i41 + 524 + (i49 << 2) >> 2] | 0;
        if ((i42 | 0) != 0) {
         i50 = i42;
         i51 = i41;
         i52 = i12;
         break L76;
        }
       } else {
        if (i12 << 16 >> 16 != 0) {
         i50 = i40;
         i51 = i41;
         i52 = i12;
         break L76;
        }
       }
       if ((HEAP8[i11 + 31 | 0] | 0) < 0) {
        i45 = i41;
        i46 = i47;
        break L74;
       }
      }
      i41 = __ZN7WebCore17GlyphPageTreeNode8getChildEPKNS_8FontDataEj(i11, __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i2, i3, HEAP32[i11 + 28 >> 2] & 2147483647) | 0, 0) | 0;
      HEAP32[i8 >> 2] = i41;
      HEAP32[i48 >> 2] = i41;
      i11 = i41;
     }
    }
   } while (0);
   if ((i47 | 0) == 2) {
    __ZNK7WebCore14SimpleFontData17smallCapsFontDataERKNS_15FontDescriptionE(i15, i50, i3);
   } else if ((i47 | 0) == 3) {
    __ZNK7WebCore14SimpleFontData20emphasisMarkFontDataERKNS_15FontDescriptionE(i15, i50, i3);
   } else if ((i47 | 0) == 4) {
    __ZNK7WebCore14SimpleFontData23brokenIdeographFontDataEv(i15, i50);
   } else {
    HEAP32[i15 >> 2] = i50;
    i39 = i50 + 4 | 0;
    HEAP32[i39 >> 2] = (HEAP32[i39 >> 2] | 0) + 1;
   }
   i39 = i15 | 0;
   i24 = HEAP32[i39 >> 2] | 0;
   HEAP32[i39 >> 2] = 0;
   if ((i24 | 0) == 0) {
    i39 = i1;
    HEAP32[i39 >> 2] = i52 & 65535;
    HEAP32[i39 + 4 >> 2] = i50;
    HEAP32[i1 + 8 >> 2] = i51;
    STACKTOP = i7;
    return;
   }
   i39 = HEAP32[(__ZN7WebCore17GlyphPageTreeNode8getChildEPKNS_8FontDataEj(__ZN7WebCore17GlyphPageTreeNode7getRootEj(i23) | 0, i24 | 0, i23) | 0) + 24 >> 2] | 0;
   do {
    if ((i39 | 0) == 0) {
     i37 = 75;
    } else {
     i11 = HEAP16[i39 + 12 + (i49 << 1) >> 1] | 0;
     i41 = HEAP32[i39 + 4 >> 2] | 0;
     if ((i41 | 0) == 0) {
      i12 = HEAP32[i39 + 524 + (i49 << 2) >> 2] | 0;
      if ((i12 | 0) == 0) {
       i37 = 75;
       break;
      } else {
       i53 = i12;
      }
     } else {
      if (i11 << 16 >> 16 == 0) {
       i37 = 75;
       break;
      } else {
       i53 = i41;
      }
     }
     i41 = i1;
     HEAP32[i41 >> 2] = i11 & 65535;
     HEAP32[i41 + 4 >> 2] = i53;
     HEAP32[i1 + 8 >> 2] = i39;
    }
   } while (0);
   if ((i37 | 0) == 75) {
    i39 = i24 + 1140 | 0;
    i41 = i1;
    i11 = HEAP32[i39 + 4 >> 2] | 0;
    HEAP32[i41 >> 2] = HEAP32[i39 >> 2];
    HEAP32[i41 + 4 >> 2] = i11;
    HEAP32[i1 + 8 >> 2] = i51;
   }
   i11 = i24 + 4 | 0;
   i41 = i11 | 0;
   i39 = (HEAP32[i41 >> 2] | 0) - 1 | 0;
   if ((i39 | 0) != 0) {
    HEAP32[i41 >> 2] = i39;
    STACKTOP = i7;
    return;
   }
   i39 = i11 - 4 | 0;
   if ((i39 | 0) == 0) {
    STACKTOP = i7;
    return;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i39 >> 2] | 0) + 4 >> 2] & 1](i39);
   STACKTOP = i7;
   return;
  }
 } while (0);
 if ((i30 | 0) < 65536) {
  i51 = i30 & 65535;
  if ((i51 << 16 >> 16 | 0) == 32 | (i51 << 16 >> 16 | 0) == 9 | (i51 << 16 >> 16 | 0) == 10 | (i51 << 16 >> 16 | 0) == 160) {
   i54 = 32;
  } else {
   do {
    if ((i51 & 65535) >>> 0 < 32 >>> 0 | (i51 - 127 & 65535) >>> 0 < 33 >>> 0) {
     i55 = 1;
    } else {
     if ((i51 << 16 >> 16 | 0) == 8203 | (i51 << 16 >> 16 | 0) == 173) {
      i55 = 1;
      break;
     }
     if ((i51 - 8206 & 65535) >>> 0 < 2 >>> 0) {
      i55 = 1;
      break;
     }
     i55 = (i51 - 8234 & 65535) >>> 0 < 5 >>> 0 | i51 << 16 >> 16 == -257 | i51 << 16 >> 16 == -4;
    }
   } while (0);
   i54 = i55 | i51 << 16 >> 16 == 8204 | i51 << 16 >> 16 == 8205 ? 8203 : i51;
  }
  HEAP16[i18 >> 1] = i54;
  i56 = 1;
 } else {
  HEAP16[i18 >> 1] = (i30 >>> 10) + 55232;
  HEAP16[i18 + 2 >> 1] = i30 & 1023 | 56320;
  i56 = 2;
 }
 i54 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i2, i3, 0) | 0;
 i51 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i54 >> 2] | 0) + 8 >> 2] & 1](i54, i30) | 0;
 i54 = __ZN7WebCore9fontCacheEv() | 0;
 __ZN7WebCore9FontCache27systemFallbackForCharactersERKNS_15FontDescriptionEPKNS_14SimpleFontDataEbPKti(i19, i54, i3, i51, (HEAP8[i2 + 110 | 0] & 16) != 0, i18 | 0, i56);
 i56 = i19 | 0;
 i19 = HEAP32[i56 >> 2] | 0;
 HEAP32[i56 >> 2] = 0;
 do {
  if ((i19 | 0) == 0) {
   i57 = i46;
  } else {
   do {
    if ((HEAP32[i19 + 56 >> 2] | 0) == 1) {
     if ((HEAP8[i19 + 1121 | 0] & 1) != 0) {
      i58 = i46;
      break;
     }
     i56 = __ZN7WebCore4Font22isCJKIdeographOrSymbolEi(i30) | 0;
     i58 = i56 ? 4 : i46;
    } else {
     i58 = i46;
    }
   } while (0);
   if ((i58 | 0) == 2) {
    __ZNK7WebCore14SimpleFontData17smallCapsFontDataERKNS_15FontDescriptionE(i20, i19, i3);
    i37 = 101;
   } else if ((i58 | 0) == 3) {
    __ZNK7WebCore14SimpleFontData20emphasisMarkFontDataERKNS_15FontDescriptionE(i20, i19, i3);
    i37 = 101;
   } else if ((i58 | 0) == 4) {
    __ZNK7WebCore14SimpleFontData23brokenIdeographFontDataEv(i20, i19);
    i37 = 101;
   } else if ((i58 | 0) == 1) {
    i59 = 1;
    i60 = i19;
   } else {
    i24 = i20 | 0;
    HEAP32[i24 >> 2] = i19;
    i56 = i19 + 4 | 0;
    HEAP32[i56 >> 2] = (HEAP32[i56 >> 2] | 0) + 1;
    i56 = HEAP32[i24 >> 2] | 0;
    HEAP32[i24 >> 2] = 0;
    i61 = i24;
    i62 = i56;
    i37 = 102;
   }
   if ((i37 | 0) == 101) {
    i56 = i20 | 0;
    i24 = HEAP32[i56 >> 2] | 0;
    HEAP32[i56 >> 2] = 0;
    i61 = i56;
    i62 = i24;
    i37 = 102;
   }
   do {
    if ((i37 | 0) == 102) {
     i24 = i19 + 4 | 0;
     i56 = i24 | 0;
     i18 = (HEAP32[i56 >> 2] | 0) - 1 | 0;
     do {
      if ((i18 | 0) == 0) {
       i51 = i24 - 4 | 0;
       if ((i51 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i51 >> 2] | 0) + 4 >> 2] & 1](i51);
      } else {
       HEAP32[i56 >> 2] = i18;
      }
     } while (0);
     i18 = HEAP32[i61 >> 2] | 0;
     if ((i18 | 0) == 0) {
      i59 = i58;
      i60 = i62;
      break;
     }
     i56 = i18 + 4 | 0;
     i18 = i56 | 0;
     i24 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
     if ((i24 | 0) != 0) {
      HEAP32[i18 >> 2] = i24;
      i59 = i58;
      i60 = i62;
      break;
     }
     i24 = i56 - 4 | 0;
     if ((i24 | 0) == 0) {
      i59 = i58;
      i60 = i62;
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i24 >> 2] | 0) + 4 >> 2] & 1](i24);
     i59 = i58;
     i60 = i62;
    }
   } while (0);
   if ((i60 | 0) == 0) {
    i57 = i59;
    break;
   }
   i24 = HEAP32[(__ZN7WebCore17GlyphPageTreeNode8getChildEPKNS_8FontDataEj(__ZN7WebCore17GlyphPageTreeNode7getRootEj(i23) | 0, i60 | 0, i23) | 0) + 24 >> 2] | 0;
   do {
    if ((i24 | 0) == 0) {
     i37 = 118;
    } else {
     i56 = i30 & 255;
     i18 = HEAP32[i24 + 4 >> 2] | 0;
     if ((i18 | 0) == 0) {
      i51 = HEAP32[i24 + 524 + (i56 << 2) >> 2] | 0;
      if ((i51 | 0) == 0) {
       i37 = 118;
       break;
      }
      i54 = HEAP16[i24 + 12 + (i56 << 1) >> 1] | 0;
      HEAP16[i21 >> 1] = i54;
      HEAP32[i22 + 4 >> 2] = i51;
      i63 = i54;
      i64 = i51;
      break;
     } else {
      i51 = HEAP16[i24 + 12 + (i56 << 1) >> 1] | 0;
      if (i51 << 16 >> 16 == 0) {
       i37 = 118;
       break;
      }
      HEAP16[i21 >> 1] = i51;
      HEAP32[i22 + 4 >> 2] = i18;
      i63 = i51;
      i64 = i18;
      break;
     }
    }
   } while (0);
   if ((i37 | 0) == 118) {
    i18 = i60 + 1140 | 0;
    i51 = HEAP32[i18 >> 2] | 0;
    i56 = HEAP32[i18 + 4 >> 2] | 0;
    HEAP32[i21 >> 2] = i51;
    HEAP32[i21 + 4 >> 2] = i56;
    i63 = i51 & 65535;
    i64 = i56;
   }
   do {
    if ((i59 | 0) == 1) {
     i56 = i30 & 255;
     HEAP16[i45 + 12 + (i56 << 1) >> 1] = i63;
     if ((HEAP32[i45 + 4 >> 2] | 0) == 0) {
      HEAP32[i45 + 524 + (i56 << 2) >> 2] = i63 << 16 >> 16 != 0 ? i64 : 0;
     }
     i56 = HEAP32[i22 + 4 >> 2] | 0;
     i51 = i56 + 8 | 0;
     i18 = HEAP32[i51 >> 2] | 0;
     i54 = HEAP32[(HEAP32[i8 >> 2] | 0) + 28 >> 2] & 2147483647;
     HEAP32[i51 >> 2] = i18 >>> 0 < i54 >>> 0 ? i54 : i18;
     if (__ZN7WebCore4Font22isCJKIdeographOrSymbolEi(i30) | 0) {
      i37 = 125;
      break;
     }
     if ((HEAP32[i56 + 56 >> 2] | 0) == 0) {
      i37 = 125;
      break;
     }
     if ((HEAP8[i56 + 1119 | 0] & 1) != 0) {
      i37 = 125;
      break;
     }
     __ZN7WebCoreL54glyphDataAndPageForNonCJKCharacterWithGlyphOrientationEiNS_22NonCJKGlyphOrientationERNS_9GlyphDataEPNS_9GlyphPageEj(i1, i30, (HEAP32[i3 + 16 >> 2] | 0) >>> 1 & 1, i22, i24, i23);
    } else {
     i37 = 125;
    }
   } while (0);
   if ((i37 | 0) == 125) {
    i24 = i1;
    i56 = HEAP32[i21 + 4 >> 2] | 0;
    HEAP32[i24 >> 2] = HEAP32[i21 >> 2];
    HEAP32[i24 + 4 >> 2] = i56;
    HEAP32[i1 + 8 >> 2] = i45;
   }
   i56 = i60 + 4 | 0;
   i24 = i56 | 0;
   i18 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
   if ((i18 | 0) != 0) {
    HEAP32[i24 >> 2] = i18;
    STACKTOP = i7;
    return;
   }
   i18 = i56 - 4 | 0;
   if ((i18 | 0) == 0) {
    STACKTOP = i7;
    return;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 1](i18);
   STACKTOP = i7;
   return;
  }
 } while (0);
 i60 = i2 + 44 | 0;
 i21 = HEAP32[i60 >> 2] | 0;
 if ((i21 | 0) == 0) {
  i37 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i2, i3, 0) | 0;
  i3 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i37 >> 2] | 0) + 8 >> 2] & 1](i37, 32) | 0;
  HEAP32[i60 >> 2] = i3;
  i65 = i3;
 } else {
  i65 = i21;
 }
 i21 = i65 + 1140 | 0;
 i3 = HEAP16[i21 >> 1] | 0;
 i60 = HEAP16[i21 + 2 >> 1] | 0;
 i21 = HEAP32[i65 + 1144 >> 2] | 0;
 if ((i57 | 0) == 1) {
  i57 = i30 & 255;
  HEAP16[i45 + 12 + (i57 << 1) >> 1] = i3;
  if ((HEAP32[i45 + 4 >> 2] | 0) == 0) {
   HEAP32[i45 + 524 + (i57 << 2) >> 2] = i3 << 16 >> 16 != 0 ? i21 : 0;
  }
  i57 = i21 + 8 | 0;
  i30 = HEAP32[i57 >> 2] | 0;
  i65 = HEAP32[(HEAP32[i8 >> 2] | 0) + 28 >> 2] & 2147483647;
  HEAP32[i57 >> 2] = i30 >>> 0 < i65 >>> 0 ? i65 : i30;
 }
 HEAP16[i1 >> 1] = i3;
 HEAP16[i1 + 2 >> 1] = i60;
 HEAP32[i1 + 4 >> 2] = i21;
 HEAP32[i1 + 8 >> 2] = i45;
 STACKTOP = i7;
 return;
}
function __ZN7WebCoreL54glyphDataAndPageForNonCJKCharacterWithGlyphOrientationEiNS_22NonCJKGlyphOrientationERNS_9GlyphDataEPNS_9GlyphPageEj(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 L1 : do {
  if ((i3 | 0) == 1) {
   i10 = 14;
  } else {
   switch (i2 | 0) {
   case 174:
   case 169:
   case 167:
   case 190:
   case 189:
   case 188:
   case 182:
    {
     i10 = 14;
     break L1;
     break;
    }
   default:
    {}
   }
   if ((i2 - 741 | 0) >>> 0 < 7 >>> 0 | (i2 - 4352 | 0) >>> 0 < 256 >>> 0 | (i2 - 5121 | 0) >>> 0 < 639 >>> 0 | (i2 - 6144 | 0) >>> 0 < 256 >>> 0) {
    i10 = 14;
    break;
   }
   switch (i2 | 0) {
   case 8241:
   case 8240:
   case 8225:
   case 8224:
   case 8217:
   case 8216:
   case 8214:
    {
     i10 = 14;
     break L1;
     break;
    }
   default:
    {}
   }
   if ((i2 - 8251 | 0) >>> 0 < 3 >>> 0) {
    i10 = 14;
    break;
   }
   switch (i2 | 0) {
   case 8273:
   case 8265:
   case 8264:
   case 8263:
   case 8260:
   case 8258:
    {
     i10 = 14;
     break L1;
     break;
    }
   default:
    {}
   }
   if ((i2 - 8293 | 0) >>> 0 < 5 >>> 0 | (i2 - 8413 | 0) >>> 0 < 4 >>> 0 | (i2 - 8418 | 0) >>> 0 < 3 >>> 0 | (i2 - 8448 | 0) >>> 0 < 24 >>> 0 | (i2 - 8473 | 0) >>> 0 < 25 >>> 0 | (i2 - 8499 | 0) >>> 0 < 13 >>> 0) {
    i10 = 14;
    break;
   }
   if ((i2 - 8517 | 0) >>> 0 < 6 >>> 0 | (i2 - 8524 | 0) >>> 0 < 2 >>> 0 | (i2 - 8527 | 0) >>> 0 < 65 >>> 0 | (i2 - 8960 | 0) >>> 0 < 8 >>> 0 | (i2 - 8972 | 0) >>> 0 < 20 >>> 0 | (i2 - 8994 | 0) >>> 0 < 10 >>> 0 | (i2 - 9085 | 0) >>> 0 < 30 >>> 0 | (i2 - 9140 | 0) >>> 0 < 3 >>> 0 | (i2 - 9146 | 0) >>> 0 < 22 >>> 0 | (i2 - 9169 | 0) >>> 0 < 11 >>> 0 | (i2 - 9186 | 0) >>> 0 < 286 >>> 0 | (i2 - 9632 | 0) >>> 0 < 122 >>> 0 | (i2 - 9760 | 0) >>> 0 < 328 >>> 0 | (i2 - 10102 | 0) >>> 0 < 30 >>> 0 | (i2 - 11026 | 0) >>> 0 < 30 >>> 0 | (i2 - 11085 | 0) >>> 0 < 179 >>> 0) {
    i10 = 14;
    break;
   }
   if ((i2 - 11904 | 0) >>> 0 < 392 >>> 0 | (i2 - 12306 | 0) >>> 0 < 2 >>> 0 | (i2 - 12320 | 0) >>> 0 < 16 >>> 0 | (i2 - 12337 | 0) >>> 0 < 111 >>> 0 | (i2 - 12449 | 0) >>> 0 < 91 >>> 0 | (i2 - 12541 | 0) >>> 0 < 29651 >>> 0 | (i2 - 43072 | 0) >>> 0 < 64 >>> 0 | (i2 - 43360 | 0) >>> 0 < 32 >>> 0 | (i2 - 44032 | 0) >>> 0 < 11264 >>> 0 | (i2 - 57344 | 0) >>> 0 < 6912 >>> 0 | (i2 - 65040 | 0) >>> 0 < 16 >>> 0 | (i2 - 65072 | 0) >>> 0 < 25 >>> 0 | (i2 - 65104 | 0) >>> 0 < 8 >>> 0 | (i2 - 65119 | 0) >>> 0 < 4 >>> 0 | (i2 - 65127 | 0) >>> 0 < 9 >>> 0 | (i2 - 65281 | 0) >>> 0 < 7 >>> 0 | (i2 - 65290 | 0) >>> 0 < 3 >>> 0) {
    i10 = 14;
    break;
   }
   if ((i2 - 65294 | 0) >>> 0 < 12 >>> 0 | (i2 | 0) == 65307 | (i2 - 65311 | 0) >>> 0 < 28 >>> 0) {
    i10 = 14;
    break;
   }
   if ((i2 | 0) == 65342 | (i2 | 0) == 65340) {
    i10 = 14;
    break;
   }
   if ((i2 - 65344 | 0) >>> 0 < 27 >>> 0 | (i2 - 65504 | 0) >>> 0 < 3 >>> 0 | (i2 - 65508 | 0) >>> 0 < 4 >>> 0) {
    i10 = 14;
    break;
   }
   if ((i2 - 65520 | 0) >>> 0 < 9 >>> 0 | (i2 | 0) == 65533 | (i2 - 77824 | 0) >>> 0 < 1072 >>> 0 | (i2 - 110592 | 0) >>> 0 < 256 >>> 0 | (i2 - 118784 | 0) >>> 0 < 512 >>> 0 | (i2 - 119552 | 0) >>> 0 < 128 >>> 0 | (i2 - 126976 | 0) >>> 0 < 1616 >>> 0 | (i2 - 128640 | 0) >>> 0 < 256 >>> 0 | (i2 - 131072 | 0) >>> 0 < 65534 >>> 0 | (i2 - 196608 | 0) >>> 0 < 65534 >>> 0) {
    i10 = 14;
    break;
   }
   if ((i3 | 0) != 0) {
    break;
   }
   __ZNK7WebCore14SimpleFontData32verticalRightOrientationFontDataEv(i9, HEAP32[i4 + 4 >> 2] | 0);
   i11 = i9 | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   HEAP32[i11 >> 2] = 0;
   i11 = HEAP32[(__ZN7WebCore17GlyphPageTreeNode8getChildEPKNS_8FontDataEj(__ZN7WebCore17GlyphPageTreeNode7getRootEj(i6) | 0, i12 | 0, i6) | 0) + 24 >> 2] | 0;
   do {
    if ((i11 | 0) == 0) {
     i13 = 0;
    } else {
     i14 = i2 & 255;
     i15 = HEAP16[i11 + 12 + (i14 << 1) >> 1] | 0;
     i16 = HEAP32[i11 + 4 >> 2] | 0;
     if ((i16 | 0) == 0) {
      i17 = HEAP32[i11 + 524 + (i14 << 2) >> 2] | 0;
     } else {
      i17 = i15 << 16 >> 16 == 0 ? 0 : i16;
     }
     if ((HEAP16[i4 >> 1] | 0) != i15 << 16 >> 16) {
      i16 = i4;
      i14 = i1;
      i18 = HEAP32[i16 + 4 >> 2] | 0;
      HEAP32[i14 >> 2] = HEAP32[i16 >> 2];
      HEAP32[i14 + 4 >> 2] = i18;
      HEAP32[i1 + 8 >> 2] = i5;
      i13 = 1;
      break;
     }
     if ((i17 | 0) == 0) {
      i13 = 0;
      break;
     }
     i18 = i1;
     HEAP32[i18 >> 2] = i15 & 65535;
     HEAP32[i18 + 4 >> 2] = i17;
     HEAP32[i1 + 8 >> 2] = i11;
     i13 = 1;
    }
   } while (0);
   do {
    if ((i12 | 0) != 0) {
     i11 = i12 + 4 | 0;
     i18 = i11 | 0;
     i15 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
     if ((i15 | 0) != 0) {
      HEAP32[i18 >> 2] = i15;
      break;
     }
     i15 = i11 - 4 | 0;
     if ((i15 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 1](i15);
    }
   } while (0);
   if ((i13 | 0) != 1) {
    break;
   }
   STACKTOP = i7;
   return;
  }
 } while (0);
 do {
  if ((i10 | 0) == 14) {
   __ZNK7WebCore14SimpleFontData26uprightOrientationFontDataEv(i8, HEAP32[i4 + 4 >> 2] | 0);
   i13 = i8 | 0;
   i17 = HEAP32[i13 >> 2] | 0;
   HEAP32[i13 >> 2] = 0;
   i13 = HEAP32[(__ZN7WebCore17GlyphPageTreeNode8getChildEPKNS_8FontDataEj(__ZN7WebCore17GlyphPageTreeNode7getRootEj(i6) | 0, i17 | 0, i6) | 0) + 24 >> 2] | 0;
   do {
    if ((i13 | 0) == 0) {
     i19 = 0;
    } else {
     i9 = i2 & 255;
     i3 = HEAP16[i13 + 12 + (i9 << 1) >> 1] | 0;
     i12 = HEAP32[i13 + 4 >> 2] | 0;
     if ((i12 | 0) == 0) {
      i20 = HEAP32[i13 + 524 + (i9 << 2) >> 2] | 0;
     } else {
      i20 = i3 << 16 >> 16 == 0 ? 0 : i12;
     }
     if ((HEAP16[i4 >> 1] | 0) == i3 << 16 >> 16) {
      i12 = i4;
      i9 = i1;
      i15 = HEAP32[i12 + 4 >> 2] | 0;
      HEAP32[i9 >> 2] = HEAP32[i12 >> 2];
      HEAP32[i9 + 4 >> 2] = i15;
      HEAP32[i1 + 8 >> 2] = i5;
      i19 = 1;
      break;
     }
     if ((i20 | 0) == 0) {
      i19 = 0;
      break;
     }
     i15 = i1;
     HEAP32[i15 >> 2] = i3 & 65535;
     HEAP32[i15 + 4 >> 2] = i20;
     HEAP32[i1 + 8 >> 2] = i13;
     i19 = 1;
    }
   } while (0);
   do {
    if ((i17 | 0) != 0) {
     i13 = i17 + 4 | 0;
     i15 = i13 | 0;
     i3 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
     if ((i3 | 0) != 0) {
      HEAP32[i15 >> 2] = i3;
      break;
     }
     i3 = i13 - 4 | 0;
     if ((i3 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 1](i3);
    }
   } while (0);
   if ((i19 | 0) != 1) {
    break;
   }
   STACKTOP = i7;
   return;
  }
 } while (0);
 i19 = i4;
 i4 = i1;
 i20 = HEAP32[i19 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i19 >> 2];
 HEAP32[i4 + 4 >> 2] = i20;
 HEAP32[i1 + 8 >> 2] = i5;
 STACKTOP = i7;
 return;
}
function __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i1 + 4 | 0;
 i10 = i1 + 12 | 0;
 if ((HEAP32[i10 >> 2] | 0) >>> 0 > i3 >>> 0) {
  i11 = HEAP32[(HEAP32[i9 >> 2] | 0) + (i3 << 2) >> 2] | 0;
  STACKTOP = i4;
  return i11 | 0;
 }
 i3 = i1 + 104 | 0;
 i12 = HEAP32[i3 >> 2] | 0;
 if ((i12 | 0) >= 0) {
  i13 = __ZN7WebCore9fontCacheEv() | 0;
  __ZN7WebCore9FontCache11getFontDataERKNS_15FontDescriptionERiPNS_12FontSelectorE(i8, i13, i2, i3, HEAP32[i1 + 48 >> 2] | 0);
  i13 = i7 | 0;
  i14 = i8 | 0;
  i8 = HEAP32[i14 >> 2] | 0;
  HEAP32[i14 >> 2] = 0;
  HEAP32[i13 >> 2] = i8;
  if ((i8 | 0) == 0) {
   i11 = 0;
   STACKTOP = i4;
   return i11 | 0;
  }
  i14 = HEAP32[i10 >> 2] | 0;
  if ((i14 | 0) == (HEAP32[i1 + 8 >> 2] | 0)) {
   __ZN3WTF6VectorINS_6RefPtrIN7WebCore8FontDataEEELj1ENS_15CrashOnOverflowEE14appendSlowCaseIRS4_EEvOT_(i9, i7);
  } else {
   HEAP32[(HEAP32[i9 >> 2] | 0) + (i14 << 2) >> 2] = i8;
   i14 = i8 + 4 | 0;
   HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
  }
  i14 = HEAP32[i13 >> 2] | 0;
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 20 >> 2] & 1](i14) | 0) {
   i14 = i1 + 110 | 0;
   HEAP8[i14] = HEAP8[i14] | 8;
  }
  i14 = HEAP32[i13 >> 2] | 0;
  if ((i14 | 0) == 0) {
   i11 = 0;
   STACKTOP = i4;
   return i11 | 0;
  }
  i13 = i14 + 4 | 0;
  i8 = i13 | 0;
  i7 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
  if ((i7 | 0) != 0) {
   HEAP32[i8 >> 2] = i7;
   i11 = i14;
   STACKTOP = i4;
   return i11 | 0;
  }
  i7 = i13 - 4 | 0;
  if ((i7 | 0) == 0) {
   i11 = i14;
   STACKTOP = i4;
   return i11 | 0;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 1](i7);
  i11 = i14;
  STACKTOP = i4;
  return i11 | 0;
 }
 i14 = i1 + 48 | 0;
 i7 = HEAP32[i14 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i11 = 0;
  STACKTOP = i4;
  return i11 | 0;
 }
 i13 = ~i12;
 if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 16 >> 2] & 1](i7) | 0) == (i13 | 0)) {
  i11 = 0;
  STACKTOP = i4;
  return i11 | 0;
 }
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) - 1;
 i3 = HEAP32[i14 >> 2] | 0;
 FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i3 >> 2] | 0) + 12 >> 2] & 1](i6, i3, i2, i13);
 i13 = i5 | 0;
 i2 = i6 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i13 >> 2] = i6;
 if ((i6 | 0) == 0) {
  i11 = 0;
  STACKTOP = i4;
  return i11 | 0;
 }
 i2 = HEAP32[i10 >> 2] | 0;
 if ((i2 | 0) == (HEAP32[i1 + 8 >> 2] | 0)) {
  __ZN3WTF6VectorINS_6RefPtrIN7WebCore8FontDataEEELj1ENS_15CrashOnOverflowEE14appendSlowCaseIRS4_EEvOT_(i9, i5);
 } else {
  HEAP32[(HEAP32[i9 >> 2] | 0) + (i2 << 2) >> 2] = i6;
  i2 = i6 + 4 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
 }
 i10 = HEAP32[i13 >> 2] | 0;
 if ((i10 | 0) == 0) {
  i11 = 0;
  STACKTOP = i4;
  return i11 | 0;
 }
 i13 = i10 + 4 | 0;
 i2 = i13 | 0;
 i6 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i6 | 0) != 0) {
  HEAP32[i2 >> 2] = i6;
  i11 = i10;
  STACKTOP = i4;
  return i11 | 0;
 }
 i6 = i13 - 4 | 0;
 if ((i6 | 0) == 0) {
  i11 = i10;
  STACKTOP = i4;
  return i11 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 1](i6);
 i11 = i10;
 STACKTOP = i4;
 return i11 | 0;
}
function __ZN3WTF9HashTableIiNS_12KeyValuePairIiPN7WebCore17GlyphPageTreeNodeEEENS_24KeyValuePairKeyExtractorIS5_EENS_7IntHashIjEENS_7HashMapIiS4_S9_NS_10HashTraitsIiEENSB_IS4_EEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EEiRS4_EENS_18HashTableAddResultINS_17HashTableIteratorIiS5_S7_S9_SF_SC_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableIiNS_12KeyValuePairIiPN7WebCore17GlyphPageTreeNodeEEENS_24KeyValuePairKeyExtractorIS5_EENS_7IntHashIjEENS_7HashMapIiS4_S9_NS_10HashTraitsIiEENSB_IS4_EEE18KeyValuePairTraitsESC_E6expandEPS5_(i2, 0) | 0;
  i7 = HEAP32[i5 >> 2] | 0;
 } else {
  i7 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i9 = i8 + ~(i8 << 15) | 0;
 i10 = (i9 >>> 10 ^ i9) * 9 & -1;
 i9 = i10 >>> 6 ^ i10;
 i10 = i9 + ~(i9 << 11) | 0;
 i9 = i10 >>> 16 ^ i10;
 i10 = i9 & i6;
 i11 = i7 + (i10 << 3) | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i12 | 0) == 0) {
   i13 = i11;
   i14 = 9;
  } else {
   i15 = (i9 >>> 23) + ~i9 | 0;
   i16 = i15 << 12 ^ i15;
   i15 = i16 >>> 7 ^ i16;
   i16 = i15 << 2 ^ i15;
   i15 = i16 >>> 20 ^ i16 | 1;
   i16 = 0;
   i17 = 0;
   i18 = i10;
   i19 = i11;
   i20 = i12;
   while (1) {
    if ((i20 | 0) == (i8 | 0)) {
     i14 = 6;
     break;
    }
    i21 = (i20 | 0) == -1 ? i19 : i17;
    i22 = (i16 | 0) == 0 ? i15 : i16;
    i23 = i22 + i18 & i6;
    i24 = i7 + (i23 << 3) | 0;
    i25 = HEAP32[i24 >> 2] | 0;
    if ((i25 | 0) == 0) {
     i14 = 8;
     break;
    } else {
     i16 = i22;
     i17 = i21;
     i18 = i23;
     i19 = i24;
     i20 = i25;
    }
   }
   if ((i14 | 0) == 6) {
    i20 = i7 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i18 = i1;
    HEAP32[i18 >> 2] = i19;
    HEAP32[i18 + 4 >> 2] = i20;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i14 | 0) == 8) {
    if ((i21 | 0) == 0) {
     i13 = i24;
     i14 = 9;
     break;
    }
    i20 = i21;
    HEAP32[i20 >> 2] = 0;
    HEAP32[i20 + 4 >> 2] = 0;
    i20 = i2 + 16 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) - 1;
    i26 = i21;
    i27 = HEAP32[i3 >> 2] | 0;
    i28 = i20;
    break;
   }
  }
 } while (0);
 if ((i14 | 0) == 9) {
  i26 = i13;
  i27 = i8;
  i28 = i2 + 16 | 0;
 }
 HEAP32[i26 >> 2] = i27;
 HEAP32[i26 + 4 >> 2] = HEAP32[i4 >> 2];
 i4 = i2 + 12 | 0;
 i27 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i27;
 i4 = i2 + 4 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i28 >> 2] | 0) + i27 << 1 | 0) < (i8 | 0)) {
  i29 = i26;
  i30 = i8;
 } else {
  i8 = __ZN3WTF9HashTableIiNS_12KeyValuePairIiPN7WebCore17GlyphPageTreeNodeEEENS_24KeyValuePairKeyExtractorIS5_EENS_7IntHashIjEENS_7HashMapIiS4_S9_NS_10HashTraitsIiEENSB_IS4_EEE18KeyValuePairTraitsESC_E6expandEPS5_(i2, i26) | 0;
  i29 = i8;
  i30 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i30 << 3) | 0;
 i30 = i1;
 HEAP32[i30 >> 2] = i29;
 HEAP32[i30 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableIiNS_12KeyValuePairIiPN7WebCore17GlyphPageTreeNodeEEENS_24KeyValuePairKeyExtractorIS5_EENS_7IntHashIjEENS_7HashMapIiS4_S9_NS_10HashTraitsIiEENSB_IS4_EEE18KeyValuePairTraitsESC_E6expandEPS5_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i3 = i1 + 4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = 8;
  i6 = 0;
 } else {
  i7 = i4 << 1;
  i5 = ((HEAP32[i1 + 12 >> 2] | 0) * 6 & -1 | 0) < (i7 | 0) ? i4 : i7;
  i6 = i4;
 }
 i4 = i1 | 0;
 i7 = HEAP32[i4 >> 2] | 0;
 HEAP32[i3 >> 2] = i5;
 i3 = i1 + 8 | 0;
 HEAP32[i3 >> 2] = i5 - 1;
 HEAP32[i4 >> 2] = __ZN3WTF16fastZeroedMallocEj(i5 << 3) | 0;
 if ((i6 | 0) == 0) {
  i8 = 0;
  i9 = i1 + 16 | 0;
  HEAP32[i9 >> 2] = 0;
  i10 = i7;
  __ZN3WTF8fastFreeEPv(i10);
  return i8 | 0;
 } else {
  i11 = 0;
  i12 = 0;
 }
 while (1) {
  i5 = i7 + (i11 << 3) | 0;
  i13 = HEAP32[i5 >> 2] | 0;
  if ((i13 | 0) == (-1 | 0) | (i13 | 0) == 0) {
   i14 = i12;
  } else {
   i15 = HEAP32[i4 >> 2] | 0;
   i16 = HEAP32[i3 >> 2] | 0;
   i17 = i13 + ~(i13 << 15) | 0;
   i18 = (i17 >>> 10 ^ i17) * 9 & -1;
   i17 = i18 >>> 6 ^ i18;
   i18 = i17 + ~(i17 << 11) | 0;
   i17 = i18 >>> 16 ^ i18;
   i18 = i16 & i17;
   i19 = i15 + (i18 << 3) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L10 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 7;
    } else {
     i24 = (i17 >>> 23) + ~i17 | 0;
     i25 = i24 << 12 ^ i24;
     i24 = i25 >>> 7 ^ i25;
     i25 = i24 << 2 ^ i24;
     i24 = i25 >>> 20 ^ i25 | 1;
     i25 = 0;
     i26 = 0;
     i27 = i18;
     i28 = i19;
     i29 = i20;
     while (1) {
      if ((i29 | 0) == (i13 | 0)) {
       i30 = i28;
       break L10;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i16;
      i34 = i15 + (i33 << 3) | 0;
      i35 = HEAP32[i34 >> 2] | 0;
      if ((i35 | 0) == 0) {
       i21 = i31;
       i22 = i34;
       i23 = 7;
       break;
      } else {
       i25 = i31;
       i26 = i32;
       i27 = i33;
       i28 = i34;
       i29 = i35;
      }
     }
    }
   } while (0);
   if ((i23 | 0) == 7) {
    i23 = 0;
    i30 = (i21 | 0) != 0 ? i21 : i22;
   }
   i15 = i5;
   i16 = i30;
   i13 = HEAP32[i15 + 4 >> 2] | 0;
   HEAP32[i16 >> 2] = HEAP32[i15 >> 2];
   HEAP32[i16 + 4 >> 2] = i13;
   i14 = (i5 | 0) == (i2 | 0) ? i30 : i12;
  }
  i13 = i11 + 1 | 0;
  if ((i13 | 0) == (i6 | 0)) {
   i8 = i14;
   break;
  } else {
   i11 = i13;
   i12 = i14;
  }
 }
 i9 = i1 + 16 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i7;
 __ZN3WTF8fastFreeEPv(i10);
 return i8 | 0;
}
function __ZN7WebCore10FontGlyphsC2ERKNS_16FontPlatformDataE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 HEAP32[i1 >> 2] = 1;
 i5 = i1 + 4 | 0;
 i6 = i5 | 0;
 HEAP32[i6 >> 2] = i1 + 16;
 i7 = i1 + 8 | 0;
 HEAP32[i7 >> 2] = 1;
 i8 = i1 + 12 | 0;
 HEAP32[i8 >> 2] = 0;
 _memset(i1 + 20 | 0, 0, 32) | 0;
 HEAP32[i1 + 52 >> 2] = 20;
 HEAP32[i1 + 56 >> 2] = 20;
 _memset(i1 + 60 | 0, 0, 44) | 0;
 HEAP32[i1 + 104 >> 2] = -1;
 i9 = i1 + 108 | 0;
 HEAP16[i9 >> 1] = __ZN7WebCore9FontCache10generationEv(__ZN7WebCore9fontCacheEv() | 0) | 0;
 i10 = i9;
 i9 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = i9 & -458753;
 HEAP8[i1 + 110 | 0] = i9 >>> 16 & 255 & -32 | 16;
 __ZN7WebCore9FontCache17getCachedFontDataEPKNS_16FontPlatformDataENS0_12ShouldRetainE(i4, __ZN7WebCore9fontCacheEv() | 0, i2, 0);
 i2 = i4 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i2 = i4 | 0;
 i4 = HEAP32[i8 >> 2] | 0;
 if ((i4 | 0) == (HEAP32[i7 >> 2] | 0)) {
  i7 = i4 + 1 | 0;
  i9 = i7 + (i4 >>> 2) | 0;
  i1 = i9 >>> 0 > 16 >>> 0 ? i9 : 16;
  __ZN3WTF6VectorINS_6RefPtrIN7WebCore8FontDataEEELj1ENS_15CrashOnOverflowEE15reserveCapacityEj(i5, i1 >>> 0 > i7 >>> 0 ? i1 : i7);
  HEAP32[(HEAP32[i6 >> 2] | 0) + (HEAP32[i8 >> 2] << 2) >> 2] = i2;
  i11 = HEAP32[i8 >> 2] | 0;
  i12 = i11 + 1 | 0;
  HEAP32[i8 >> 2] = i12;
  STACKTOP = i3;
  return;
 } else {
  HEAP32[(HEAP32[i6 >> 2] | 0) + (i4 << 2) >> 2] = i2;
  i11 = HEAP32[i8 >> 2] | 0;
  i12 = i11 + 1 | 0;
  HEAP32[i8 >> 2] = i12;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore10FontGlyphsC1ERKNS_16FontPlatformDataE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 HEAP32[i1 >> 2] = 1;
 i5 = i1 + 4 | 0;
 i6 = i5 | 0;
 HEAP32[i6 >> 2] = i1 + 16;
 i7 = i1 + 8 | 0;
 HEAP32[i7 >> 2] = 1;
 i8 = i1 + 12 | 0;
 HEAP32[i8 >> 2] = 0;
 _memset(i1 + 20 | 0, 0, 32) | 0;
 HEAP32[i1 + 52 >> 2] = 20;
 HEAP32[i1 + 56 >> 2] = 20;
 _memset(i1 + 60 | 0, 0, 44) | 0;
 HEAP32[i1 + 104 >> 2] = -1;
 i9 = i1 + 108 | 0;
 HEAP16[i9 >> 1] = __ZN7WebCore9FontCache10generationEv(__ZN7WebCore9fontCacheEv() | 0) | 0;
 i10 = i9;
 i9 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = i9 & -458753;
 HEAP8[i1 + 110 | 0] = i9 >>> 16 & 255 & -32 | 16;
 __ZN7WebCore9FontCache17getCachedFontDataEPKNS_16FontPlatformDataENS0_12ShouldRetainE(i4, __ZN7WebCore9fontCacheEv() | 0, i2, 0);
 i2 = i4 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i2 = i4 | 0;
 i4 = HEAP32[i8 >> 2] | 0;
 if ((i4 | 0) == (HEAP32[i7 >> 2] | 0)) {
  i7 = i4 + 1 | 0;
  i9 = i7 + (i4 >>> 2) | 0;
  i1 = i9 >>> 0 > 16 >>> 0 ? i9 : 16;
  __ZN3WTF6VectorINS_6RefPtrIN7WebCore8FontDataEEELj1ENS_15CrashOnOverflowEE15reserveCapacityEj(i5, i1 >>> 0 > i7 >>> 0 ? i1 : i7);
  HEAP32[(HEAP32[i6 >> 2] | 0) + (HEAP32[i8 >> 2] << 2) >> 2] = i2;
  i11 = HEAP32[i8 >> 2] | 0;
  i12 = i11 + 1 | 0;
  HEAP32[i8 >> 2] = i12;
  STACKTOP = i3;
  return;
 } else {
  HEAP32[(HEAP32[i6 >> 2] | 0) + (i4 << 2) >> 2] = i2;
  i11 = HEAP32[i8 >> 2] | 0;
  i12 = i11 + 1 | 0;
  HEAP32[i8 >> 2] = i12;
  STACKTOP = i3;
  return;
 }
}
function __ZN3WTF6VectorINS_6RefPtrIN7WebCore8FontDataEEELj1ENS_15CrashOnOverflowEE14appendSlowCaseIRS4_EEvOT_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i4 + 1 | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if (i7 >>> 0 > i2 >>> 0) {
   i8 = 3;
  } else {
   if ((i7 + (i4 << 2) | 0) >>> 0 <= i2 >>> 0) {
    i8 = 3;
    break;
   }
   i9 = HEAP32[i1 + 4 >> 2] | 0;
   i10 = i9 + 1 + (i9 >>> 2) | 0;
   i9 = i10 >>> 0 > 16 >>> 0 ? i10 : 16;
   __ZN3WTF6VectorINS_6RefPtrIN7WebCore8FontDataEEELj1ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i9 >>> 0 > i5 >>> 0 ? i9 : i5);
   i9 = HEAP32[i6 >> 2] | 0;
   i11 = i9 + (i2 - i7 >> 2 << 2) | 0;
   i12 = i9;
  }
 } while (0);
 if ((i8 | 0) == 3) {
  i8 = HEAP32[i1 + 4 >> 2] | 0;
  i7 = i8 + 1 + (i8 >>> 2) | 0;
  i8 = i7 >>> 0 > 16 >>> 0 ? i7 : 16;
  __ZN3WTF6VectorINS_6RefPtrIN7WebCore8FontDataEEELj1ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i8 >>> 0 > i5 >>> 0 ? i8 : i5);
  i11 = i2;
  i12 = HEAP32[i6 >> 2] | 0;
 }
 i6 = HEAP32[i11 >> 2] | 0;
 HEAP32[i12 + (HEAP32[i3 >> 2] << 2) >> 2] = i6;
 if ((i6 | 0) == 0) {
  i13 = HEAP32[i3 >> 2] | 0;
  i14 = i13 + 1 | 0;
  HEAP32[i3 >> 2] = i14;
  return;
 }
 i12 = i6 + 4 | 0;
 HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
 i13 = HEAP32[i3 >> 2] | 0;
 i14 = i13 + 1 | 0;
 HEAP32[i3 >> 2] = i14;
 return;
}
function __ZNK7WebCore10FontGlyphs14determinePitchERKNS_15FontDescriptionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i1, i2, 0) | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 24 >> 2] & 1](i3) | 0)) {
  i2 = i1 + 108 | 0;
  HEAP32[i2 >> 2] = ((HEAP8[i3 + 1116 | 0] & 1) != 0 ? 65536 : 131072) | HEAP32[i2 >> 2] & -458753;
  return;
 }
 if ((HEAP32[i3 + 20 >> 2] | 0) != 1) {
  i2 = i1 + 108 | 0;
  HEAP32[i2 >> 2] = HEAP32[i2 >> 2] & -458753 | 131072;
  return;
 }
 i2 = HEAP32[(HEAP32[i3 + 12 >> 2] | 0) + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i4 = 1;
 } else {
  i3 = i2 + 4 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
  i4 = 0;
 }
 i3 = i1 + 108 | 0;
 HEAP32[i3 >> 2] = ((HEAP8[i2 + 1116 | 0] & 1) != 0 ? 65536 : 131072) | HEAP32[i3 >> 2] & -458753;
 if (i4) {
  return;
 }
 i4 = i2 + 4 | 0;
 i2 = i4 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = i3;
  return;
 }
 i3 = i4 - 4 | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 1](i3);
 return;
}
function __ZN3WTF6VectorINS_6RefPtrIN7WebCore8FontDataEEELj1ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if (i2 >>> 0 > 1 >>> 0) {
   if (i2 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   } else {
    i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 2) | 0;
    HEAP32[i3 >> 2] = i7 >>> 2;
    i8 = __ZN3WTF10fastMallocEj(i7) | 0;
    HEAP32[i4 >> 2] = i8;
    i9 = i8;
    i10 = i1 + 12 | 0;
    break;
   }
  } else {
   i8 = i1 + 12 | 0;
   HEAP32[i4 >> 2] = i8;
   HEAP32[i3 >> 2] = 1;
   i9 = i8;
   i10 = i8;
  }
 } while (0);
 i1 = i5;
 _memcpy(i9 | 0, i1 | 0, i6 << 2) | 0;
 if ((i10 | 0) == (i5 | 0) | (i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore10FontGlyphs15releaseFontDataEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i4 = i1 + 4 | 0;
 i1 = 0;
 i5 = i3;
 while (1) {
  if (i5 >>> 0 <= i1 >>> 0) {
   i6 = 4;
   break;
  }
  i7 = HEAP32[(HEAP32[i4 >> 2] | 0) + (i1 << 2) >> 2] | 0;
  if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 16 >> 2] & 1](i7) | 0)) {
   i7 = __ZN7WebCore9fontCacheEv() | 0;
   if ((HEAP32[i2 >> 2] | 0) >>> 0 <= i1 >>> 0) {
    i6 = 7;
    break;
   }
   __ZN7WebCore9FontCache15releaseFontDataEPKNS_14SimpleFontDataE(i7, HEAP32[(HEAP32[i4 >> 2] | 0) + (i1 << 2) >> 2] | 0);
  }
  i7 = i1 + 1 | 0;
  if (i7 >>> 0 >= i3 >>> 0) {
   i6 = 13;
   break;
  }
  i1 = i7;
  i5 = HEAP32[i2 >> 2] | 0;
 }
 if ((i6 | 0) == 4) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i6 | 0) == 7) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i6 | 0) == 13) {
  return;
 }
}
function __ZN7WebCore10FontGlyphsC2EN3WTF10PassRefPtrINS_12FontSelectorEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = 1;
 HEAP32[i1 + 4 >> 2] = i1 + 16;
 HEAP32[i1 + 8 >> 2] = 1;
 HEAP32[i1 + 12 >> 2] = 0;
 i3 = i2 | 0;
 _memset(i1 + 20 | 0, 0, 28) | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i1 + 48 >> 2] = i2;
 HEAP32[i1 + 52 >> 2] = 20;
 HEAP32[i1 + 56 >> 2] = 20;
 _memset(i1 + 60 | 0, 0, 40) | 0;
 if ((i2 | 0) == 0) {
  i4 = 0;
 } else {
  i4 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 40 >> 2] & 1](i2) | 0;
 }
 HEAP32[i1 + 100 >> 2] = i4;
 HEAP32[i1 + 104 >> 2] = 0;
 i4 = i1 + 108 | 0;
 HEAP16[i4 >> 1] = __ZN7WebCore9FontCache10generationEv(__ZN7WebCore9fontCacheEv() | 0) | 0;
 i2 = i4;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i4 & -458753;
 HEAP8[i1 + 110 | 0] = i4 >>> 16 & 255 & -32;
 return;
}
function __ZN7WebCore10FontGlyphsC1EN3WTF10PassRefPtrINS_12FontSelectorEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = 1;
 HEAP32[i1 + 4 >> 2] = i1 + 16;
 HEAP32[i1 + 8 >> 2] = 1;
 HEAP32[i1 + 12 >> 2] = 0;
 i3 = i2 | 0;
 _memset(i1 + 20 | 0, 0, 28) | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i1 + 48 >> 2] = i2;
 HEAP32[i1 + 52 >> 2] = 20;
 HEAP32[i1 + 56 >> 2] = 20;
 _memset(i1 + 60 | 0, 0, 40) | 0;
 if ((i2 | 0) == 0) {
  i4 = 0;
 } else {
  i4 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 40 >> 2] & 1](i2) | 0;
 }
 HEAP32[i1 + 100 >> 2] = i4;
 HEAP32[i1 + 104 >> 2] = 0;
 i4 = i1 + 108 | 0;
 HEAP16[i4 >> 1] = __ZN7WebCore9FontCache10generationEv(__ZN7WebCore9fontCacheEv() | 0) | 0;
 i2 = i4;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i4 & -458753;
 HEAP8[i1 + 110 | 0] = i4 >>> 16 & 255 & -32;
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
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
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
 FUNCTION_TABLE_vii[i1 & 7](i2 | 0, i3 | 0);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function b5(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(5);
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
function __ZN3WTF15CrashOnOverflow10overflowedEv() {
 _WTFCrash();
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
  var FUNCTION_TABLE_vii = [b1,b1,__ZN7WebCore10FontGlyphsC2EN3WTF10PassRefPtrINS_12FontSelectorEEE,b1,__ZN7WebCore10FontGlyphsC2ERKNS_16FontPlatformDataE,b1,b1,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_iii = [b4,b4];
  var FUNCTION_TABLE_viiii = [b5,b5];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZNK7WebCore10FontGlyphs28glyphDataAndPageForCharacterERKNS_15FontDescriptionEibNS_15FontDataVariantE","__ZN3WTF6VectorINS_6RefPtrIN7WebCore8FontDataEEELj1ENS_15CrashOnOverflowEE15reserveCapacityEj","_strlen","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCoreL54glyphDataAndPageForNonCJKCharacterWithGlyphOrientationEiNS_22NonCJKGlyphOrientationERNS_9GlyphDataEPNS_9GlyphPageEj","__ZN7WebCore10FontGlyphsC2EN3WTF10PassRefPtrINS_12FontSelectorEEE","__ZNK7WebCore10FontGlyphs14determinePitchERKNS_15FontDescriptionE","__ZN7WebCore10FontGlyphsC2ERKNS_16FontPlatformDataE","_memset","_memcpy","__ZN3WTF6VectorINS_6RefPtrIN7WebCore8FontDataEEELj1ENS_15CrashOnOverflowEE14appendSlowCaseIRS4_EEvOT_","__ZN7WebCore10FontGlyphs15releaseFontDataEv","__ZN3WTF9HashTableIiNS_12KeyValuePairIiPN7WebCore17GlyphPageTreeNodeEEENS_24KeyValuePairKeyExtractorIS5_EENS_7IntHashIjEENS_7HashMapIiS4_S9_NS_10HashTraitsIiEENSB_IS4_EEE18KeyValuePairTraitsESC_E6expandEPS5_","__ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj","__ZN3WTF9HashTableIiNS_12KeyValuePairIiPN7WebCore17GlyphPageTreeNodeEEENS_24KeyValuePairKeyExtractorIS5_EENS_7IntHashIjEENS_7HashMapIiS4_S9_NS_10HashTraitsIiEENSB_IS4_EEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EEiRS4_EENS_18HashTableAddResultINS_17HashTableIteratorIiS5_S7_S9_SF_SC_EEEEOT0_OT1_"]

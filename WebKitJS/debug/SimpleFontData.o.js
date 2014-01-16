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
var __ZN7WebCore14SimpleFontDataC1ERKNS_16FontPlatformDataEbbb;
var __ZN7WebCore14SimpleFontDataC1ENSt3__110unique_ptrINS0_18AdditionalFontDataENS1_14default_deleteIS3_EEEEfbb;
var __ZN7WebCore14SimpleFontDataD1Ev;
var __ZN7WebCore14SimpleFontData15DerivedFontDataD1Ev;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
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
function invoke_iiii(index,a1,a2,a3) {
  try {
    return Module["dynCall_iiii"](index,a1,a2,a3);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viiiii(index,a1,a2,a3,a4,a5) {
  try {
    Module["dynCall_viiiii"](index,a1,a2,a3,a4,a5);
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
function invoke_fiif(index,a1,a2,a3) {
  try {
    return Module["dynCall_fiif"](index,a1,a2,a3);
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
function invoke_viif(index,a1,a2,a3) {
  try {
    Module["dynCall_viif"](index,a1,a2,a3);
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
  var __ZTVN7WebCore14SimpleFontDataE=(H_BASE+8)|0;
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
  var invoke_iiii=env.invoke_iiii;
  var invoke_viiiii=env.invoke_viiiii;
  var invoke_vi=env.invoke_vi;
  var invoke_fiif=env.invoke_fiif;
  var invoke_ii=env.invoke_ii;
  var invoke_viifii=env.invoke_viifii;
  var invoke_v=env.invoke_v;
  var invoke_viif=env.invoke_viif;
  var invoke_iii=env.invoke_iii;
  var _ceilf=env._ceilf;
  var ___setErrNo=env.___setErrNo;
  var _malloc=env._malloc;
  var _free=env._free;
  var _fflush=env._fflush;
  var _round=env._round;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore14SimpleFontData17platformGlyphInitEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, d7 = +0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, d15 = +0, i16 = 0, d17 = +0, i18 = 0, d19 = +0, i20 = 0, d21 = +0, i22 = 0, d23 = +0;
 i2 = HEAP32[(__ZN7WebCore17GlyphPageTreeNode8getChildEPKNS_8FontDataEj(__ZN7WebCore17GlyphPageTreeNode7getRootEj(0) | 0, i1 | 0, 0) | 0) + 24 >> 2] | 0;
 if ((i2 | 0) == 0) {
  HEAPF32[i1 + 1132 >> 2] = +0;
  i3 = i1 + 1122 | 0;
  i4 = i3 | 0;
  tempBigInt = 0;
  HEAP16[i4 >> 1] = tempBigInt;
  HEAP16[i4 + 2 >> 1] = tempBigInt >> 16;
  i4 = i3 + 4 | 0;
  tempBigInt = 0;
  HEAP16[i4 >> 1] = tempBigInt;
  HEAP16[i4 + 2 >> 1] = tempBigInt >> 16;
  __ZN7WebCore14SimpleFontData14determinePitchEv(i1);
  HEAP16[i1 + 1136 >> 1] = 0;
  HEAP32[i1 + 1144 >> 2] = i1;
  HEAP16[i1 + 1140 >> 1] = 0;
  return;
 }
 i4 = HEAP16[i2 + 12 >> 1] | 0;
 i3 = i1 + 1136 | 0;
 HEAP16[i3 >> 1] = i4;
 i5 = HEAP16[i2 + 76 >> 1] | 0;
 i6 = i1 + 1122 | 0;
 HEAP16[i6 >> 1] = i5;
 do {
  if (i4 << 16 >> 16 == i5 << 16 >> 16 & i5 << 16 >> 16 != 0) {
   d7 = +0;
  } else {
   i8 = i1 + 84 | 0;
   i9 = i5 & 65535;
   i10 = i9 >>> 8;
   i11 = (i10 | 0) == 0;
   do {
    if (i11) {
     if ((HEAP8[i8 | 0] & 1) == 0) {
      i12 = 7;
      break;
     }
     i13 = i1 + 88 | 0;
    } else {
     i12 = 7;
    }
   } while (0);
   if ((i12 | 0) == 7) {
    i13 = __ZN7WebCore15GlyphMetricsMapIfE18locatePageSlowCaseEj(i8, i10) | 0;
   }
   i14 = i9 & 255;
   d15 = +HEAPF32[i13 + (i14 << 2) >> 2];
   if (d15 != +-1) {
    d7 = d15;
    break;
   }
   i16 = HEAP32[i1 + 76 >> 2] | 0;
   if ((i16 | 0) == 0) {
    d17 = +__ZNK7WebCore14SimpleFontData21platformWidthForGlyphEt(i1, i5);
   } else {
    d17 = +FUNCTION_TABLE_fiif[HEAP32[(HEAP32[i16 >> 2] | 0) + 12 >> 2] & 1](i16, i5, +HEAPF32[i1 + 60 >> 2]);
   }
   do {
    if (i11) {
     if ((HEAP8[i8 | 0] & 1) == 0) {
      i12 = 15;
      break;
     }
     i18 = i1 + 88 | 0;
    } else {
     i12 = 15;
    }
   } while (0);
   if ((i12 | 0) == 15) {
    i18 = __ZN7WebCore15GlyphMetricsMapIfE18locatePageSlowCaseEj(i8, i10) | 0;
   }
   HEAPF32[i18 + (i14 << 2) >> 2] = d17;
   d7 = d17;
  }
 } while (0);
 HEAPF32[i1 + 1124 >> 2] = d7;
 i18 = HEAP16[i2 + 108 >> 1] | 0;
 HEAP16[i1 + 1128 >> 1] = i18;
 do {
  if ((HEAP16[i3 >> 1] | 0) == i18 << 16 >> 16 & i18 << 16 >> 16 != 0) {
   d19 = +0;
  } else {
   i2 = i1 + 84 | 0;
   i5 = i18 & 65535;
   i13 = i5 >>> 8;
   i4 = (i13 | 0) == 0;
   do {
    if (i4) {
     if ((HEAP8[i2 | 0] & 1) == 0) {
      i12 = 21;
      break;
     }
     i20 = i1 + 88 | 0;
    } else {
     i12 = 21;
    }
   } while (0);
   if ((i12 | 0) == 21) {
    i20 = __ZN7WebCore15GlyphMetricsMapIfE18locatePageSlowCaseEj(i2, i13) | 0;
   }
   i14 = i5 & 255;
   d17 = +HEAPF32[i20 + (i14 << 2) >> 2];
   if (d17 != +-1) {
    d19 = d17;
    break;
   }
   i10 = HEAP32[i1 + 76 >> 2] | 0;
   if ((i10 | 0) == 0) {
    d21 = +__ZNK7WebCore14SimpleFontData21platformWidthForGlyphEt(i1, i18);
   } else {
    d21 = +FUNCTION_TABLE_fiif[HEAP32[(HEAP32[i10 >> 2] | 0) + 12 >> 2] & 1](i10, i18, +HEAPF32[i1 + 60 >> 2]);
   }
   do {
    if (i4) {
     if ((HEAP8[i2 | 0] & 1) == 0) {
      i12 = 29;
      break;
     }
     i22 = i1 + 88 | 0;
    } else {
     i12 = 29;
    }
   } while (0);
   if ((i12 | 0) == 29) {
    i22 = __ZN7WebCore15GlyphMetricsMapIfE18locatePageSlowCaseEj(i2, i13) | 0;
   }
   HEAPF32[i22 + (i14 << 2) >> 2] = d21;
   d19 = d21;
  }
 } while (0);
 HEAPF32[i1 + 36 >> 2] = d19;
 HEAP8[i1 + 41 | 0] = 1;
 __ZN7WebCore14SimpleFontData14determinePitchEv(i1);
 if ((HEAP8[i1 + 1116 | 0] & 1) == 0) {
  d23 = +_round(+d7);
 } else {
  d23 = +Math_ceil(d7);
 }
 HEAPF32[i1 + 1132 >> 2] = d23;
 if ((HEAP16[i3 >> 1] | 0) == (HEAP16[i6 >> 1] | 0)) {
  HEAP16[i3 >> 1] = 0;
 }
 HEAP32[i1 + 1144 >> 2] = i1;
 HEAP16[i1 + 1140 >> 1] = 0;
 return;
}
function __ZN7WebCore15GlyphMetricsMapIfE18locatePageSlowCaseEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 do {
  if ((i2 | 0) == 0) {
   HEAP8[i1 | 0] = 1;
   i7 = i1 + 4 | 0;
  } else {
   i8 = i1 + 1028 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   L3 : do {
    if ((i9 | 0) == 0) {
     i10 = __ZN3WTF10fastMallocEj(20) | 0;
     i11 = i10;
     _memset(i10 | 0, 0, 20) | 0;
     i10 = HEAP32[i8 >> 2] | 0;
     HEAP32[i8 >> 2] = i11;
     if ((i10 | 0) == 0) {
      i12 = i11;
      break;
     }
     i11 = HEAP32[i10 >> 2] | 0;
     if ((i11 | 0) != 0) {
      i13 = HEAP32[i10 + 4 >> 2] | 0;
      if ((i13 | 0) > 0) {
       i14 = 0;
       while (1) {
        do {
         if ((HEAP32[i11 + (i14 << 3) >> 2] | 0) != -1) {
          i15 = HEAP32[i11 + (i14 << 3) + 4 >> 2] | 0;
          if ((i15 | 0) == 0) {
           break;
          }
          __ZdlPv(i15);
         }
        } while (0);
        i14 = i14 + 1 | 0;
        if ((i14 | 0) >= (i13 | 0)) {
         break;
        }
       }
      }
      __ZN3WTF8fastFreeEPv(i11);
     }
     __ZN3WTF8fastFreeEPv(i10);
     i12 = HEAP32[i8 >> 2] | 0;
    } else {
     i13 = HEAP32[i9 + 8 >> 2] | 0;
     i14 = HEAP32[i9 >> 2] | 0;
     i15 = ~(i2 << 15) + i2 | 0;
     i16 = (i15 >>> 10 ^ i15) * 9 & -1;
     i15 = i16 >>> 6 ^ i16;
     i16 = i15 + ~(i15 << 11) | 0;
     i15 = i16 >>> 16 ^ i16;
     if ((i14 | 0) == 0) {
      i12 = i9;
      break;
     }
     i16 = i13 & i15;
     i17 = i14 + (i16 << 3) | 0;
     i18 = HEAP32[i17 >> 2] | 0;
     if ((i18 | 0) == (i2 | 0)) {
      i19 = i17;
     } else {
      i17 = (i15 >>> 23) + ~i15 | 0;
      i15 = i17 << 12 ^ i17;
      i17 = i15 >>> 7 ^ i15;
      i15 = i17 << 2 ^ i17;
      i17 = i15 >>> 20 ^ i15 | 1;
      i15 = 0;
      i20 = i16;
      i16 = i18;
      while (1) {
       if ((i16 | 0) == 0) {
        i12 = i9;
        break L3;
       }
       i18 = (i15 | 0) == 0 ? i17 : i15;
       i21 = i18 + i20 & i13;
       i22 = i14 + (i21 << 3) | 0;
       i23 = HEAP32[i22 >> 2] | 0;
       if ((i23 | 0) == (i2 | 0)) {
        i19 = i22;
        break;
       } else {
        i15 = i18;
        i20 = i21;
        i16 = i23;
       }
      }
     }
     if ((i19 | 0) == 0) {
      i12 = i9;
      break;
     }
     i16 = HEAP32[i19 + 4 >> 2] | 0;
     if ((i16 | 0) == 0) {
      i12 = i9;
      break;
     } else {
      i24 = i16;
     }
     STACKTOP = i3;
     return i24 | 0;
    }
   } while (0);
   i9 = __Znwj(1024) | 0;
   HEAP32[i4 >> 2] = i2;
   i8 = i5 | 0;
   HEAP32[i8 >> 2] = i9;
   __ZN3WTF9HashTableIiNS_12KeyValuePairIiNS_6OwnPtrIN7WebCore15GlyphMetricsMapIfE16GlyphMetricsPageEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7IntHashIjEENS_7HashMapIiS7_SC_NS_10HashTraitsIiEENSE_IS7_EEE18KeyValuePairTraitsESF_E3addINS_17HashMapTranslatorISI_SC_EEiNS_10PassOwnPtrIS6_EEEENS_18HashTableAddResultINS_17HashTableIteratorIiS8_SA_SC_SI_SF_EEEEOT0_OT1_(i6, i12 | 0, i4, i5);
   if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
    i16 = (HEAP32[i6 >> 2] | 0) + 4 | 0;
    i20 = HEAP32[i16 >> 2] | 0;
    i15 = HEAP32[i8 >> 2] | 0;
    HEAP32[i8 >> 2] = 0;
    HEAP32[i16 >> 2] = i15;
    if ((i20 | 0) == 0) {
     i7 = i9;
     break;
    }
    __ZdlPv(i20);
    i7 = i9;
    break;
   } else {
    i20 = HEAP32[i8 >> 2] | 0;
    if ((i20 | 0) == 0) {
     i7 = i9;
     break;
    }
    __ZdlPv(i20);
    i7 = i9;
    break;
   }
  }
 } while (0);
 i6 = 0;
 while (1) {
  HEAPF32[i7 + (i6 << 2) >> 2] = +-1;
  i5 = i6 + 1 | 0;
  if (i5 >>> 0 < 256 >>> 0) {
   i6 = i5;
  } else {
   i24 = i7;
   break;
  }
 }
 STACKTOP = i3;
 return i24 | 0;
}
function __ZN3WTF9HashTableIiNS_12KeyValuePairIiNS_6OwnPtrIN7WebCore15GlyphMetricsMapIfE16GlyphMetricsPageEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7IntHashIjEENS_7HashMapIiS7_SC_NS_10HashTraitsIiEENSE_IS7_EEE18KeyValuePairTraitsESF_E3addINS_17HashMapTranslatorISI_SC_EEiNS_10PassOwnPtrIS6_EEEENS_18HashTableAddResultINS_17HashTableIteratorIiS8_SA_SC_SI_SF_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
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
  __ZN3WTF9HashTableIiNS_12KeyValuePairIiNS_6OwnPtrIN7WebCore15GlyphMetricsMapIfE16GlyphMetricsPageEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7IntHashIjEENS_7HashMapIiS7_SC_NS_10HashTraitsIiEENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i9 = i8 + ~(i8 << 15) | 0;
 i7 = (i9 >>> 10 ^ i9) * 9 & -1;
 i9 = i7 >>> 6 ^ i7;
 i7 = i9 + ~(i9 << 11) | 0;
 i9 = i7 >>> 16 ^ i7;
 i7 = i9 & i6;
 i11 = i10 + (i7 << 3) | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i12 | 0) == 0) {
   i13 = i11;
   i14 = i8;
  } else {
   i15 = (i9 >>> 23) + ~i9 | 0;
   i16 = i15 << 12 ^ i15;
   i15 = i16 >>> 7 ^ i16;
   i16 = i15 << 2 ^ i15;
   i15 = i16 >>> 20 ^ i16 | 1;
   i16 = 0;
   i17 = 0;
   i18 = i7;
   i19 = i11;
   i20 = i12;
   while (1) {
    if ((i20 | 0) == (i8 | 0)) {
     i21 = 8;
     break;
    }
    i22 = (i20 | 0) == -1 ? i19 : i17;
    i23 = (i16 | 0) == 0 ? i15 : i16;
    i24 = i23 + i18 & i6;
    i25 = i10 + (i24 << 3) | 0;
    i26 = HEAP32[i25 >> 2] | 0;
    if ((i26 | 0) == 0) {
     i21 = 10;
     break;
    } else {
     i16 = i23;
     i17 = i22;
     i18 = i24;
     i19 = i25;
     i20 = i26;
    }
   }
   if ((i21 | 0) == 10) {
    if ((i22 | 0) == 0) {
     i13 = i25;
     i14 = i8;
     break;
    }
    i20 = i22;
    HEAP32[i20 >> 2] = 0;
    HEAP32[i20 + 4 >> 2] = 0;
    i20 = i2 + 16 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) - 1;
    i13 = i22;
    i14 = HEAP32[i3 >> 2] | 0;
    break;
   } else if ((i21 | 0) == 8) {
    i20 = i10 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i18 = i1;
    HEAP32[i18 >> 2] = i19;
    HEAP32[i18 + 4 >> 2] = i20;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   }
  }
 } while (0);
 HEAP32[i13 >> 2] = i14;
 i14 = i13 + 4 | 0;
 i10 = HEAP32[i14 >> 2] | 0;
 i21 = i4 | 0;
 i4 = HEAP32[i21 >> 2] | 0;
 HEAP32[i21 >> 2] = 0;
 HEAP32[i14 >> 2] = i4;
 if ((i10 | 0) != 0) {
  __ZdlPv(i10);
 }
 i10 = i2 + 12 | 0;
 i4 = (HEAP32[i10 >> 2] | 0) + 1 | 0;
 HEAP32[i10 >> 2] = i4;
 i10 = i2 + 4 | 0;
 i14 = HEAP32[i10 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i4 << 1 | 0) < (i14 | 0)) {
  i27 = i13;
  i28 = i14;
 } else {
  if ((i14 | 0) == 0) {
   i29 = 8;
  } else {
   i21 = i14 << 1;
   i29 = (i4 * 6 & -1 | 0) < (i21 | 0) ? i14 : i21;
  }
  i21 = __ZN3WTF9HashTableIiNS_12KeyValuePairIiNS_6OwnPtrIN7WebCore15GlyphMetricsMapIfE16GlyphMetricsPageEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7IntHashIjEENS_7HashMapIiS7_SC_NS_10HashTraitsIiEENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_(i2, i29, i13) | 0;
  i27 = i21;
  i28 = HEAP32[i10 >> 2] | 0;
 }
 i10 = (HEAP32[i5 >> 2] | 0) + (i28 << 3) | 0;
 i28 = i1;
 HEAP32[i28 >> 2] = i27;
 HEAP32[i28 + 4 >> 2] = i10;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableIiNS_12KeyValuePairIiNS_6OwnPtrIN7WebCore15GlyphMetricsMapIfE16GlyphMetricsPageEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7IntHashIjEENS_7HashMapIiS7_SC_NS_10HashTraitsIiEENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 i4 = i1 + 8 | 0;
 HEAP32[i4 >> 2] = i2 - 1;
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 3) | 0;
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
  i2 = i7 + (i10 << 3) | 0;
  i12 = i2 | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  if ((i13 | 0) == (-1 | 0) | (i13 | 0) == 0) {
   i14 = i11;
  } else {
   i15 = HEAP32[i6 >> 2] | 0;
   i16 = HEAP32[i4 >> 2] | 0;
   i17 = i13 + ~(i13 << 15) | 0;
   i18 = (i17 >>> 10 ^ i17) * 9 & -1;
   i17 = i18 >>> 6 ^ i18;
   i18 = i17 + ~(i17 << 11) | 0;
   i17 = i18 >>> 16 ^ i18;
   i18 = i16 & i17;
   i19 = i15 + (i18 << 3) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L8 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 6;
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
       break L8;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i16;
      i34 = i15 + (i33 << 3) | 0;
      i35 = HEAP32[i34 >> 2] | 0;
      if ((i35 | 0) == 0) {
       i21 = i31;
       i22 = i34;
       i23 = 6;
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
   if ((i23 | 0) == 6) {
    i23 = 0;
    i30 = (i21 | 0) != 0 ? i21 : i22;
   }
   i15 = i30 + 4 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i36 = i13;
   } else {
    __ZdlPv(i16);
    i36 = HEAP32[i12 >> 2] | 0;
   }
   HEAP32[i30 >> 2] = i36;
   i16 = i7 + (i10 << 3) + 4 | 0;
   i20 = HEAP32[i16 >> 2] | 0;
   HEAP32[i16 >> 2] = 0;
   HEAP32[i15 >> 2] = i20;
   i14 = (i2 | 0) == (i3 | 0) ? i30 : i11;
  }
  i20 = i10 + 1 | 0;
  if ((i20 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i20;
   i11 = i14;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i37 = 0;
 } else {
  i8 = i14;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  do {
   if ((HEAP32[i7 + (i37 << 3) >> 2] | 0) != -1) {
    i1 = HEAP32[i7 + (i37 << 3) + 4 >> 2] | 0;
    if ((i1 | 0) == 0) {
     break;
    }
    __ZdlPv(i1);
   }
  } while (0);
  i2 = i37 + 1 | 0;
  if ((i2 | 0) < (i5 | 0)) {
   i37 = i2;
  } else {
   i8 = i14;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN7WebCore14SimpleFontData15DerivedFontDataD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 do {
  if ((HEAP8[i1 | 0] & 1) != 0) {
   i2 = HEAP32[i1 + 4 >> 2] | 0;
   if ((i2 | 0) != 0) {
    __ZN7WebCore17GlyphPageTreeNode23pruneTreeCustomFontDataEPKNS_8FontDataE(i2 | 0);
   }
   i2 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i2 | 0) != 0) {
    __ZN7WebCore17GlyphPageTreeNode23pruneTreeCustomFontDataEPKNS_8FontDataE(i2 | 0);
   }
   i2 = HEAP32[i1 + 12 >> 2] | 0;
   if ((i2 | 0) != 0) {
    __ZN7WebCore17GlyphPageTreeNode23pruneTreeCustomFontDataEPKNS_8FontDataE(i2 | 0);
   }
   i2 = HEAP32[i1 + 16 >> 2] | 0;
   if ((i2 | 0) != 0) {
    __ZN7WebCore17GlyphPageTreeNode23pruneTreeCustomFontDataEPKNS_8FontDataE(i2 | 0);
   }
   i2 = HEAP32[i1 + 20 >> 2] | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   __ZN7WebCore17GlyphPageTreeNode23pruneTreeCustomFontDataEPKNS_8FontDataE(i2 | 0);
  }
 } while (0);
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 4 | 0;
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    break;
   }
   i5 = i3 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 7](i5);
  }
 } while (0);
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 + 4 | 0;
   i3 = i5 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i3 >> 2] = i4;
    break;
   }
   i4 = i5 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 7](i4);
  }
 } while (0);
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 + 4 | 0;
   i5 = i4 | 0;
   i3 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i5 >> 2] = i3;
    break;
   }
   i3 = i4 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 7](i3);
  }
 } while (0);
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 4 | 0;
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    break;
   }
   i5 = i3 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 7](i5);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 + 4 | 0;
   i3 = i5 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i3 >> 2] = i4;
    break;
   }
   i4 = i5 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 7](i4);
  }
 } while (0);
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 4 | 0;
 i2 = i1 | 0;
 i4 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i2 >> 2] = i4;
  return;
 }
 i4 = i1 - 4 | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 7](i4);
 return;
}
function __ZN7WebCore14SimpleFontData15DerivedFontDataD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 do {
  if ((HEAP8[i1 | 0] & 1) != 0) {
   i2 = HEAP32[i1 + 4 >> 2] | 0;
   if ((i2 | 0) != 0) {
    __ZN7WebCore17GlyphPageTreeNode23pruneTreeCustomFontDataEPKNS_8FontDataE(i2 | 0);
   }
   i2 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i2 | 0) != 0) {
    __ZN7WebCore17GlyphPageTreeNode23pruneTreeCustomFontDataEPKNS_8FontDataE(i2 | 0);
   }
   i2 = HEAP32[i1 + 12 >> 2] | 0;
   if ((i2 | 0) != 0) {
    __ZN7WebCore17GlyphPageTreeNode23pruneTreeCustomFontDataEPKNS_8FontDataE(i2 | 0);
   }
   i2 = HEAP32[i1 + 16 >> 2] | 0;
   if ((i2 | 0) != 0) {
    __ZN7WebCore17GlyphPageTreeNode23pruneTreeCustomFontDataEPKNS_8FontDataE(i2 | 0);
   }
   i2 = HEAP32[i1 + 20 >> 2] | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   __ZN7WebCore17GlyphPageTreeNode23pruneTreeCustomFontDataEPKNS_8FontDataE(i2 | 0);
  }
 } while (0);
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 4 | 0;
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    break;
   }
   i5 = i3 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 7](i5);
  }
 } while (0);
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 + 4 | 0;
   i3 = i5 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i3 >> 2] = i4;
    break;
   }
   i4 = i5 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 7](i4);
  }
 } while (0);
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 + 4 | 0;
   i5 = i4 | 0;
   i3 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i5 >> 2] = i3;
    break;
   }
   i3 = i4 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 7](i3);
  }
 } while (0);
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 4 | 0;
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    break;
   }
   i5 = i3 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 7](i5);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 + 4 | 0;
   i3 = i5 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i3 >> 2] = i4;
    break;
   }
   i4 = i5 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 7](i4);
  }
 } while (0);
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 4 | 0;
 i2 = i1 | 0;
 i4 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i2 >> 2] = i4;
  return;
 }
 i4 = i1 - 4 | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 7](i4);
 return;
}
function __ZNK7WebCore14SimpleFontData32verticalRightOrientationFontDataEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i2 + 1148 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = HEAP8[i2 + 1117 | 0] & 1;
  i8 = __Znwj(28) | 0;
  i9 = i8;
  HEAP8[i8] = i7;
  _memset(i8 + 4 | 0, 0, 24) | 0;
  HEAP32[i5 >> 2] = i9;
  i10 = i9;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i10 + 16 >> 2] | 0;
 do {
  if ((i6 | 0) == 0) {
   __ZN7WebCore16FontPlatformDataC1ERKS0_(i4, i2 + 52 | 0);
   HEAP32[i4 + 4 >> 2] = 0;
   i10 = HEAP32[i5 >> 2] | 0;
   i9 = HEAP8[i2 + 1117 | 0] & 1;
   i8 = __ZN3WTF10fastMallocEj(1156) | 0;
   i7 = i8;
   HEAP32[i8 + 4 >> 2] = 1;
   HEAP32[i8 + 8 >> 2] = 0;
   HEAP32[i8 >> 2] = H_BASE + 16;
   HEAP32[i8 + 12 >> 2] = 1e3;
   _memset(i8 + 16 | 0, 0, 26) | 0;
   HEAPF32[i8 + 44 >> 2] = +-1;
   HEAPF32[i8 + 48 >> 2] = +-1;
   __ZN7WebCore16FontPlatformDataC1ERKS0_(i8 + 52 | 0, i4);
   HEAP32[i8 + 76 >> 2] = 0;
   HEAP32[i8 + 80 >> 2] = 0;
   HEAP8[i8 + 84 | 0] = 0;
   HEAP32[i8 + 1112 >> 2] = 0;
   HEAP8[i8 + 1116 | 0] = 0;
   HEAP8[i8 + 1117 | 0] = i9;
   HEAP8[i8 + 1118 | 0] = 0;
   HEAP8[i8 + 1119 | 0] = 1;
   HEAP8[i8 + 1120 | 0] = 0;
   HEAP8[i8 + 1121 | 0] = 0;
   HEAP16[i8 + 1140 >> 1] = 0;
   HEAP32[i8 + 1144 >> 2] = 0;
   HEAP32[i8 + 1148 >> 2] = 0;
   __ZN7WebCore14SimpleFontData12platformInitEv(i7);
   __ZN7WebCore14SimpleFontData17platformGlyphInitEv(i7);
   __ZN7WebCore14SimpleFontData21platformCharWidthInitEv(i7);
   i8 = i10 + 16 | 0;
   i10 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = i7;
   do {
    if ((i10 | 0) != 0) {
     i7 = i10 + 4 | 0;
     i8 = i7 | 0;
     i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     if ((i9 | 0) != 0) {
      HEAP32[i8 >> 2] = i9;
      break;
     }
     i9 = i7 - 4 | 0;
     if ((i9 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 7](i9);
    }
   } while (0);
   __ZN7WebCore16FontPlatformDataD1Ev(i4);
   i10 = HEAP32[(HEAP32[i5 >> 2] | 0) + 16 >> 2] | 0;
   HEAP32[i1 >> 2] = i10;
   if ((i10 | 0) != 0) {
    i11 = i10;
    break;
   }
   STACKTOP = i3;
   return;
  } else {
   HEAP32[i1 >> 2] = i6;
   i11 = i6;
  }
 } while (0);
 i6 = i11 + 4 | 0;
 HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore14SimpleFontData26nonSyntheticItalicFontDataEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i2 + 1148 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = HEAP8[i2 + 1117 | 0] & 1;
  i8 = __Znwj(28) | 0;
  i9 = i8;
  HEAP8[i8] = i7;
  _memset(i8 + 4 | 0, 0, 24) | 0;
  HEAP32[i5 >> 2] = i9;
  i10 = i9;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i10 + 24 >> 2] | 0;
 do {
  if ((i6 | 0) == 0) {
   __ZN7WebCore16FontPlatformDataC1ERKS0_(i4, i2 + 52 | 0);
   i10 = HEAP32[i5 >> 2] | 0;
   i9 = HEAP8[i2 + 1117 | 0] & 1;
   i8 = __ZN3WTF10fastMallocEj(1156) | 0;
   i7 = i8;
   HEAP32[i8 + 4 >> 2] = 1;
   HEAP32[i8 + 8 >> 2] = 0;
   HEAP32[i8 >> 2] = H_BASE + 16;
   HEAP32[i8 + 12 >> 2] = 1e3;
   _memset(i8 + 16 | 0, 0, 26) | 0;
   HEAPF32[i8 + 44 >> 2] = +-1;
   HEAPF32[i8 + 48 >> 2] = +-1;
   __ZN7WebCore16FontPlatformDataC1ERKS0_(i8 + 52 | 0, i4);
   HEAP32[i8 + 76 >> 2] = 0;
   HEAP32[i8 + 80 >> 2] = 0;
   HEAP8[i8 + 84 | 0] = 0;
   HEAP32[i8 + 1112 >> 2] = 0;
   HEAP8[i8 + 1116 | 0] = 0;
   HEAP8[i8 + 1117 | 0] = i9;
   HEAP8[i8 + 1118 | 0] = 0;
   HEAP8[i8 + 1119 | 0] = 1;
   HEAP8[i8 + 1120 | 0] = 0;
   HEAP8[i8 + 1121 | 0] = 0;
   HEAP16[i8 + 1140 >> 1] = 0;
   HEAP32[i8 + 1144 >> 2] = 0;
   HEAP32[i8 + 1148 >> 2] = 0;
   __ZN7WebCore14SimpleFontData12platformInitEv(i7);
   __ZN7WebCore14SimpleFontData17platformGlyphInitEv(i7);
   __ZN7WebCore14SimpleFontData21platformCharWidthInitEv(i7);
   i8 = i10 + 24 | 0;
   i10 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = i7;
   do {
    if ((i10 | 0) != 0) {
     i7 = i10 + 4 | 0;
     i8 = i7 | 0;
     i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     if ((i9 | 0) != 0) {
      HEAP32[i8 >> 2] = i9;
      break;
     }
     i9 = i7 - 4 | 0;
     if ((i9 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 7](i9);
    }
   } while (0);
   __ZN7WebCore16FontPlatformDataD1Ev(i4);
   i10 = HEAP32[(HEAP32[i5 >> 2] | 0) + 24 >> 2] | 0;
   HEAP32[i1 >> 2] = i10;
   if ((i10 | 0) != 0) {
    i11 = i10;
    break;
   }
   STACKTOP = i3;
   return;
  } else {
   HEAP32[i1 >> 2] = i6;
   i11 = i6;
  }
 } while (0);
 i6 = i11 + 4 | 0;
 HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore14SimpleFontData23brokenIdeographFontDataEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = i2 + 1148 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = HEAP8[i2 + 1117 | 0] & 1;
  i6 = __Znwj(28) | 0;
  i7 = i6;
  HEAP8[i6] = i5;
  _memset(i6 + 4 | 0, 0, 24) | 0;
  HEAP32[i3 >> 2] = i7;
  i8 = i7;
 } else {
  i8 = i4;
 }
 i4 = i8 + 12 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i8 | 0) == 0) {
   i7 = HEAP8[i2 + 1117 | 0] & 1;
   i6 = __ZN3WTF10fastMallocEj(1156) | 0;
   i5 = i6;
   HEAP32[i6 + 4 >> 2] = 1;
   HEAP32[i6 + 8 >> 2] = 0;
   HEAP32[i6 >> 2] = H_BASE + 16;
   HEAP32[i6 + 12 >> 2] = 1e3;
   _memset(i6 + 16 | 0, 0, 26) | 0;
   HEAPF32[i6 + 44 >> 2] = +-1;
   HEAPF32[i6 + 48 >> 2] = +-1;
   __ZN7WebCore16FontPlatformDataC1ERKS0_(i6 + 52 | 0, i2 + 52 | 0);
   HEAP32[i6 + 76 >> 2] = 0;
   HEAP32[i6 + 80 >> 2] = 0;
   HEAP8[i6 + 84 | 0] = 0;
   HEAP32[i6 + 1112 >> 2] = 0;
   HEAP8[i6 + 1116 | 0] = 0;
   HEAP8[i6 + 1117 | 0] = i7;
   HEAP16[i6 + 1140 >> 1] = 0;
   HEAP32[i6 + 1144 >> 2] = 0;
   HEAP32[i6 + 1148 >> 2] = 0;
   i7 = i6 + 1118 | 0;
   tempBigInt = 0;
   HEAP8[i7] = tempBigInt;
   tempBigInt = tempBigInt >> 8;
   HEAP8[i7 + 1 | 0] = tempBigInt;
   tempBigInt = tempBigInt >> 8;
   HEAP8[i7 + 2 | 0] = tempBigInt;
   tempBigInt = tempBigInt >> 8;
   HEAP8[i7 + 3 | 0] = tempBigInt;
   __ZN7WebCore14SimpleFontData12platformInitEv(i5);
   __ZN7WebCore14SimpleFontData17platformGlyphInitEv(i5);
   __ZN7WebCore14SimpleFontData21platformCharWidthInitEv(i5);
   i7 = HEAP32[i4 >> 2] | 0;
   HEAP32[i4 >> 2] = i5;
   do {
    if ((i7 | 0) != 0) {
     i5 = i7 + 4 | 0;
     i6 = i5 | 0;
     i9 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
     if ((i9 | 0) != 0) {
      HEAP32[i6 >> 2] = i9;
      break;
     }
     i9 = i5 - 4 | 0;
     if ((i9 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 7](i9);
    }
   } while (0);
   HEAP8[(HEAP32[(HEAP32[i3 >> 2] | 0) + 12 >> 2] | 0) + 1120 | 0] = 1;
   i7 = HEAP32[(HEAP32[i3 >> 2] | 0) + 12 >> 2] | 0;
   HEAP32[i1 >> 2] = i7;
   if ((i7 | 0) != 0) {
    i10 = i7;
    break;
   }
   return;
  } else {
   HEAP32[i1 >> 2] = i8;
   i10 = i8;
  }
 } while (0);
 i8 = i10 + 4 | 0;
 HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 return;
}
function __ZN7WebCore14SimpleFontDataD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = i1 + 76 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  __ZN7WebCore14SimpleFontData15platformDestroyEv(i1);
 }
 if ((HEAP8[i1 + 1117 | 0] & 1) == 0) {
  __ZN7WebCore17GlyphPageTreeNode17pruneTreeFontDataEPKNS_14SimpleFontDataE(i1);
 } else {
  __ZN7WebCore17GlyphPageTreeNode23pruneTreeCustomFontDataEPKNS_8FontDataE(i1 | 0);
 }
 i3 = HEAP32[i1 + 1148 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN7WebCore14SimpleFontData15DerivedFontDataD2Ev(i3);
  __ZdlPv(i3 | 0);
 }
 i3 = HEAP32[i1 + 1112 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = HEAP32[i3 >> 2] | 0;
  if ((i4 | 0) != 0) {
   i5 = HEAP32[i3 + 4 >> 2] | 0;
   if ((i5 | 0) > 0) {
    i6 = 0;
    while (1) {
     do {
      if ((HEAP32[i4 + (i6 << 3) >> 2] | 0) != -1) {
       i7 = HEAP32[i4 + (i6 << 3) + 4 >> 2] | 0;
       if ((i7 | 0) == 0) {
        break;
       }
       __ZdlPv(i7);
      }
     } while (0);
     i6 = i6 + 1 | 0;
     if ((i6 | 0) >= (i5 | 0)) {
      break;
     }
    }
   }
   __ZN3WTF8fastFreeEPv(i4);
  }
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 80 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = HEAP32[i3 + 4100 >> 2] | 0;
  if ((i4 | 0) != 0) {
   i5 = HEAP32[i4 >> 2] | 0;
   if ((i5 | 0) != 0) {
    i6 = HEAP32[i4 + 4 >> 2] | 0;
    if ((i6 | 0) > 0) {
     i7 = 0;
     while (1) {
      do {
       if ((HEAP32[i5 + (i7 << 3) >> 2] | 0) != -1) {
        i8 = HEAP32[i5 + (i7 << 3) + 4 >> 2] | 0;
        if ((i8 | 0) == 0) {
         break;
        }
        __ZdlPv(i8);
       }
      } while (0);
      i7 = i7 + 1 | 0;
      if ((i7 | 0) >= (i6 | 0)) {
       break;
      }
     }
    }
    __ZN3WTF8fastFreeEPv(i5);
   }
   __ZN3WTF8fastFreeEPv(i4);
  }
  __ZdlPv(i3 | 0);
 }
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) == 0) {
  i9 = i1 + 52 | 0;
  __ZN7WebCore16FontPlatformDataD1Ev(i9);
  i10 = i1 | 0;
  __ZN7WebCore8FontDataD2Ev(i10);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 7](i3);
 i9 = i1 + 52 | 0;
 __ZN7WebCore16FontPlatformDataD1Ev(i9);
 i10 = i1 | 0;
 __ZN7WebCore8FontDataD2Ev(i10);
 return;
}
function __ZN7WebCore14SimpleFontDataD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = i1 + 76 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  __ZN7WebCore14SimpleFontData15platformDestroyEv(i1);
 }
 if ((HEAP8[i1 + 1117 | 0] & 1) == 0) {
  __ZN7WebCore17GlyphPageTreeNode17pruneTreeFontDataEPKNS_14SimpleFontDataE(i1);
 } else {
  __ZN7WebCore17GlyphPageTreeNode23pruneTreeCustomFontDataEPKNS_8FontDataE(i1 | 0);
 }
 i3 = HEAP32[i1 + 1148 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN7WebCore14SimpleFontData15DerivedFontDataD2Ev(i3);
  __ZdlPv(i3 | 0);
 }
 i3 = HEAP32[i1 + 1112 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = HEAP32[i3 >> 2] | 0;
  if ((i4 | 0) != 0) {
   i5 = HEAP32[i3 + 4 >> 2] | 0;
   if ((i5 | 0) > 0) {
    i6 = 0;
    while (1) {
     do {
      if ((HEAP32[i4 + (i6 << 3) >> 2] | 0) != -1) {
       i7 = HEAP32[i4 + (i6 << 3) + 4 >> 2] | 0;
       if ((i7 | 0) == 0) {
        break;
       }
       __ZdlPv(i7);
      }
     } while (0);
     i6 = i6 + 1 | 0;
     if ((i6 | 0) >= (i5 | 0)) {
      break;
     }
    }
   }
   __ZN3WTF8fastFreeEPv(i4);
  }
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 80 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = HEAP32[i3 + 4100 >> 2] | 0;
  if ((i4 | 0) != 0) {
   i5 = HEAP32[i4 >> 2] | 0;
   if ((i5 | 0) != 0) {
    i6 = HEAP32[i4 + 4 >> 2] | 0;
    if ((i6 | 0) > 0) {
     i7 = 0;
     while (1) {
      do {
       if ((HEAP32[i5 + (i7 << 3) >> 2] | 0) != -1) {
        i8 = HEAP32[i5 + (i7 << 3) + 4 >> 2] | 0;
        if ((i8 | 0) == 0) {
         break;
        }
        __ZdlPv(i8);
       }
      } while (0);
      i7 = i7 + 1 | 0;
      if ((i7 | 0) >= (i6 | 0)) {
       break;
      }
     }
    }
    __ZN3WTF8fastFreeEPv(i5);
   }
   __ZN3WTF8fastFreeEPv(i4);
  }
  __ZdlPv(i3 | 0);
 }
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) == 0) {
  i9 = i1 + 52 | 0;
  __ZN7WebCore16FontPlatformDataD1Ev(i9);
  i10 = i1 | 0;
  __ZN7WebCore8FontDataD2Ev(i10);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 7](i3);
 i9 = i1 + 52 | 0;
 __ZN7WebCore16FontPlatformDataD1Ev(i9);
 i10 = i1 | 0;
 __ZN7WebCore8FontDataD2Ev(i10);
 return;
}
function __ZN7WebCore14SimpleFontData14initCharWidthsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, d4 = +0, d5 = +0, i6 = 0, d7 = +0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, d15 = +0, i16 = 0, d17 = +0, i18 = 0, d19 = +0;
 i2 = HEAP32[(__ZN7WebCore17GlyphPageTreeNode8getChildEPKNS_8FontDataEj(__ZN7WebCore17GlyphPageTreeNode7getRootEj(0) | 0, i1 | 0, 0) | 0) + 24 >> 2] | 0;
 i3 = i1 + 48 | 0;
 d4 = +HEAPF32[i3 >> 2];
 do {
  if (d4 > +0 | (i2 | 0) == 0) {
   d5 = d4;
  } else {
   i6 = HEAP16[i2 + 108 >> 1] | 0;
   if (i6 << 16 >> 16 == 0) {
    d5 = d4;
    break;
   }
   do {
    if ((HEAP16[i1 + 1136 >> 1] | 0) == i6 << 16 >> 16) {
     d7 = +0;
    } else {
     i8 = i1 + 84 | 0;
     i9 = i6 & 65535;
     i10 = i9 >>> 8;
     i11 = (i10 | 0) == 0;
     do {
      if (i11) {
       if ((HEAP8[i8 | 0] & 1) == 0) {
        i12 = 7;
        break;
       }
       i13 = i1 + 88 | 0;
      } else {
       i12 = 7;
      }
     } while (0);
     if ((i12 | 0) == 7) {
      i13 = __ZN7WebCore15GlyphMetricsMapIfE18locatePageSlowCaseEj(i8, i10) | 0;
     }
     i14 = i9 & 255;
     d15 = +HEAPF32[i13 + (i14 << 2) >> 2];
     if (d15 != +-1) {
      d7 = d15;
      break;
     }
     i16 = HEAP32[i1 + 76 >> 2] | 0;
     if ((i16 | 0) == 0) {
      d17 = +__ZNK7WebCore14SimpleFontData21platformWidthForGlyphEt(i1, i6);
     } else {
      d17 = +FUNCTION_TABLE_fiif[HEAP32[(HEAP32[i16 >> 2] | 0) + 12 >> 2] & 1](i16, i6, +HEAPF32[i1 + 60 >> 2]);
     }
     do {
      if (i11) {
       if ((HEAP8[i8 | 0] & 1) == 0) {
        i12 = 15;
        break;
       }
       i18 = i1 + 88 | 0;
      } else {
       i12 = 15;
      }
     } while (0);
     if ((i12 | 0) == 15) {
      i18 = __ZN7WebCore15GlyphMetricsMapIfE18locatePageSlowCaseEj(i8, i10) | 0;
     }
     HEAPF32[i18 + (i14 << 2) >> 2] = d17;
     d7 = d17;
    }
   } while (0);
   HEAPF32[i3 >> 2] = d7;
   d5 = d7;
  }
 } while (0);
 if (d5 > +0) {
  d19 = d5;
 } else {
  d5 = +HEAPF32[i1 + 32 >> 2];
  HEAPF32[i3 >> 2] = d5;
  d19 = d5;
 }
 i3 = i1 + 44 | 0;
 if (+HEAPF32[i3 >> 2] > +0) {
  return;
 }
 d5 = +HEAPF32[i1 + 16 >> 2];
 HEAPF32[i3 >> 2] = d19 < d5 ? d5 : d19;
 return;
}
function __ZNK7WebCore14SimpleFontData26uprightOrientationFontDataEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = i2 + 1148 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = HEAP8[i2 + 1117 | 0] & 1;
  i6 = __Znwj(28) | 0;
  i7 = i6;
  HEAP8[i6] = i5;
  _memset(i6 + 4 | 0, 0, 24) | 0;
  HEAP32[i3 >> 2] = i7;
  i8 = i7;
 } else {
  i8 = i4;
 }
 i4 = i8 + 20 | 0;
 do {
  if ((HEAP32[i4 >> 2] | 0) == 0) {
   i8 = HEAP8[i2 + 1117 | 0] & 1;
   i7 = __ZN3WTF10fastMallocEj(1156) | 0;
   i6 = i7;
   HEAP32[i7 + 4 >> 2] = 1;
   HEAP32[i7 + 8 >> 2] = 0;
   HEAP32[i7 >> 2] = H_BASE + 16;
   HEAP32[i7 + 12 >> 2] = 1e3;
   _memset(i7 + 16 | 0, 0, 26) | 0;
   HEAPF32[i7 + 44 >> 2] = +-1;
   HEAPF32[i7 + 48 >> 2] = +-1;
   __ZN7WebCore16FontPlatformDataC1ERKS0_(i7 + 52 | 0, i2 + 52 | 0);
   HEAP32[i7 + 76 >> 2] = 0;
   HEAP32[i7 + 80 >> 2] = 0;
   HEAP8[i7 + 84 | 0] = 0;
   HEAP32[i7 + 1112 >> 2] = 0;
   HEAP8[i7 + 1116 | 0] = 0;
   HEAP8[i7 + 1117 | 0] = i8;
   HEAP8[i7 + 1118 | 0] = 0;
   HEAP8[i7 + 1119 | 0] = 1;
   HEAP8[i7 + 1120 | 0] = 0;
   HEAP8[i7 + 1121 | 0] = 0;
   HEAP16[i7 + 1140 >> 1] = 0;
   HEAP32[i7 + 1144 >> 2] = 0;
   HEAP32[i7 + 1148 >> 2] = 0;
   __ZN7WebCore14SimpleFontData12platformInitEv(i6);
   __ZN7WebCore14SimpleFontData17platformGlyphInitEv(i6);
   __ZN7WebCore14SimpleFontData21platformCharWidthInitEv(i6);
   i7 = HEAP32[i4 >> 2] | 0;
   HEAP32[i4 >> 2] = i6;
   if ((i7 | 0) == 0) {
    break;
   }
   i6 = i7 + 4 | 0;
   i7 = i6 | 0;
   i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i7 >> 2] = i8;
    break;
   }
   i8 = i6 - 4 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 7](i8);
  }
 } while (0);
 i4 = HEAP32[(HEAP32[i3 >> 2] | 0) + 20 >> 2] | 0;
 HEAP32[i1 >> 2] = i4;
 if ((i4 | 0) == 0) {
  return;
 }
 i1 = i4 + 4 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 return;
}
function __ZNK7WebCore14SimpleFontData17smallCapsFontDataERKNS_15FontDescriptionE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i2 + 1148 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i8 = HEAP8[i2 + 1117 | 0] & 1;
  i9 = __Znwj(28) | 0;
  i10 = i9;
  HEAP8[i9] = i8;
  _memset(i9 + 4 | 0, 0, 24) | 0;
  HEAP32[i6 >> 2] = i10;
  i11 = i10;
 } else {
  i11 = i7;
 }
 i7 = i11 + 4 | 0;
 do {
  if ((HEAP32[i7 >> 2] | 0) == 0) {
   if ((HEAP32[i2 + 76 >> 2] | 0) == 0) {
    __ZNK7WebCore14SimpleFontData28platformCreateScaledFontDataERKNS_15FontDescriptionEf(i5, i2, i3, +.699999988079071);
    i12 = HEAP32[i5 >> 2] | 0;
   } else {
    HEAP32[i5 >> 2] = 0;
    i12 = 0;
   }
   i11 = i5 | 0;
   HEAP32[i11 >> 2] = 0;
   i10 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = i12;
   do {
    if ((i10 | 0) != 0) {
     i9 = i10 + 4 | 0;
     i8 = i9 | 0;
     i13 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     if ((i13 | 0) != 0) {
      HEAP32[i8 >> 2] = i13;
      break;
     }
     i13 = i9 - 4 | 0;
     if ((i13 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 7](i13);
    }
   } while (0);
   i10 = HEAP32[i11 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   i13 = i10 + 4 | 0;
   i10 = i13 | 0;
   i9 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i10 >> 2] = i9;
    break;
   }
   i9 = i13 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 7](i9);
  }
 } while (0);
 i12 = HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] | 0;
 HEAP32[i1 >> 2] = i12;
 if ((i12 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i1 = i12 + 4 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore14SimpleFontData20emphasisMarkFontDataERKNS_15FontDescriptionE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i2 + 1148 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i8 = HEAP8[i2 + 1117 | 0] & 1;
  i9 = __Znwj(28) | 0;
  i10 = i9;
  HEAP8[i9] = i8;
  _memset(i9 + 4 | 0, 0, 24) | 0;
  HEAP32[i6 >> 2] = i10;
  i11 = i10;
 } else {
  i11 = i7;
 }
 i7 = i11 + 8 | 0;
 do {
  if ((HEAP32[i7 >> 2] | 0) == 0) {
   if ((HEAP32[i2 + 76 >> 2] | 0) == 0) {
    __ZNK7WebCore14SimpleFontData28platformCreateScaledFontDataERKNS_15FontDescriptionEf(i5, i2, i3, +.5);
    i12 = HEAP32[i5 >> 2] | 0;
   } else {
    HEAP32[i5 >> 2] = 0;
    i12 = 0;
   }
   i11 = i5 | 0;
   HEAP32[i11 >> 2] = 0;
   i10 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = i12;
   do {
    if ((i10 | 0) != 0) {
     i9 = i10 + 4 | 0;
     i8 = i9 | 0;
     i13 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     if ((i13 | 0) != 0) {
      HEAP32[i8 >> 2] = i13;
      break;
     }
     i13 = i9 - 4 | 0;
     if ((i13 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 7](i13);
    }
   } while (0);
   i10 = HEAP32[i11 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   i13 = i10 + 4 | 0;
   i10 = i13 | 0;
   i9 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i10 >> 2] = i9;
    break;
   }
   i9 = i13 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 7](i9);
  }
 } while (0);
 i12 = HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] | 0;
 HEAP32[i1 >> 2] = i12;
 if ((i12 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i1 = i12 + 4 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore14SimpleFontDataC2ENSt3__110unique_ptrINS0_18AdditionalFontDataENS1_14default_deleteIS3_EEEEfbb(i1, i2, d3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 i4 = i4 | 0;
 i5 = i5 | 0;
 HEAP32[i1 + 4 >> 2] = 1;
 HEAP32[i1 + 8 >> 2] = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i1 + 12 >> 2] = 1e3;
 _memset(i1 + 16 | 0, 0, 26) | 0;
 __ZN7WebCore16FontPlatformDataC1EfbbNS_15FontOrientationENS_16FontWidthVariantE(i1 + 52 | 0, d3, i4, i5, 0, 0);
 i5 = i2 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i1 + 76 >> 2] = i2;
 HEAP32[i1 + 80 >> 2] = 0;
 HEAP8[i1 + 84 | 0] = 0;
 HEAP32[i1 + 1112 >> 2] = 0;
 HEAP8[i1 + 1116 | 0] = 0;
 HEAP8[i1 + 1117 | 0] = 1;
 HEAP16[i1 + 1140 >> 1] = 0;
 HEAP32[i1 + 1144 >> 2] = 0;
 HEAP32[i1 + 1148 >> 2] = 0;
 i5 = i1 + 1118 | 0;
 tempBigInt = 0;
 HEAP8[i5] = tempBigInt;
 tempBigInt = tempBigInt >> 8;
 HEAP8[i5 + 1 | 0] = tempBigInt;
 tempBigInt = tempBigInt >> 8;
 HEAP8[i5 + 2 | 0] = tempBigInt;
 tempBigInt = tempBigInt >> 8;
 HEAP8[i5 + 3 | 0] = tempBigInt;
 FUNCTION_TABLE_viif[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 1](i2, i1, d3);
 return;
}
function __ZN7WebCore14SimpleFontDataC1ENSt3__110unique_ptrINS0_18AdditionalFontDataENS1_14default_deleteIS3_EEEEfbb(i1, i2, d3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 i4 = i4 | 0;
 i5 = i5 | 0;
 HEAP32[i1 + 4 >> 2] = 1;
 HEAP32[i1 + 8 >> 2] = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i1 + 12 >> 2] = 1e3;
 _memset(i1 + 16 | 0, 0, 26) | 0;
 __ZN7WebCore16FontPlatformDataC1EfbbNS_15FontOrientationENS_16FontWidthVariantE(i1 + 52 | 0, d3, i4, i5, 0, 0);
 i5 = i2 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i1 + 76 >> 2] = i2;
 HEAP32[i1 + 80 >> 2] = 0;
 HEAP8[i1 + 84 | 0] = 0;
 HEAP32[i1 + 1112 >> 2] = 0;
 HEAP8[i1 + 1116 | 0] = 0;
 HEAP8[i1 + 1117 | 0] = 1;
 HEAP16[i1 + 1140 >> 1] = 0;
 HEAP32[i1 + 1144 >> 2] = 0;
 HEAP32[i1 + 1148 >> 2] = 0;
 i5 = i1 + 1118 | 0;
 tempBigInt = 0;
 HEAP8[i5] = tempBigInt;
 tempBigInt = tempBigInt >> 8;
 HEAP8[i5 + 1 | 0] = tempBigInt;
 tempBigInt = tempBigInt >> 8;
 HEAP8[i5 + 2 | 0] = tempBigInt;
 tempBigInt = tempBigInt >> 8;
 HEAP8[i5 + 3 | 0] = tempBigInt;
 FUNCTION_TABLE_viif[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 1](i2, i1, d3);
 return;
}
function __ZN7WebCore14SimpleFontDataC2ERKNS_16FontPlatformDataEbbb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 HEAP32[i1 + 4 >> 2] = 1;
 HEAP32[i1 + 8 >> 2] = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i1 + 12 >> 2] = 1e3;
 _memset(i1 + 16 | 0, 0, 26) | 0;
 HEAPF32[i1 + 44 >> 2] = +-1;
 HEAPF32[i1 + 48 >> 2] = +-1;
 __ZN7WebCore16FontPlatformDataC1ERKS0_(i1 + 52 | 0, i2);
 HEAP32[i1 + 76 >> 2] = 0;
 HEAP32[i1 + 80 >> 2] = 0;
 HEAP8[i1 + 84 | 0] = 0;
 HEAP32[i1 + 1112 >> 2] = 0;
 HEAP8[i1 + 1116 | 0] = 0;
 HEAP8[i1 + 1117 | 0] = i3 & 1;
 HEAP8[i1 + 1118 | 0] = i4 & 1;
 HEAP8[i1 + 1119 | 0] = i5 & 1;
 HEAP8[i1 + 1120 | 0] = 0;
 HEAP8[i1 + 1121 | 0] = 0;
 HEAP16[i1 + 1140 >> 1] = 0;
 HEAP32[i1 + 1144 >> 2] = 0;
 HEAP32[i1 + 1148 >> 2] = 0;
 __ZN7WebCore14SimpleFontData12platformInitEv(i1);
 __ZN7WebCore14SimpleFontData17platformGlyphInitEv(i1);
 __ZN7WebCore14SimpleFontData21platformCharWidthInitEv(i1);
 return;
}
function __ZN7WebCore14SimpleFontDataC1ERKNS_16FontPlatformDataEbbb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 HEAP32[i1 + 4 >> 2] = 1;
 HEAP32[i1 + 8 >> 2] = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i1 + 12 >> 2] = 1e3;
 _memset(i1 + 16 | 0, 0, 26) | 0;
 HEAPF32[i1 + 44 >> 2] = +-1;
 HEAPF32[i1 + 48 >> 2] = +-1;
 __ZN7WebCore16FontPlatformDataC1ERKS0_(i1 + 52 | 0, i2);
 HEAP32[i1 + 76 >> 2] = 0;
 HEAP32[i1 + 80 >> 2] = 0;
 HEAP8[i1 + 84 | 0] = 0;
 HEAP32[i1 + 1112 >> 2] = 0;
 HEAP8[i1 + 1116 | 0] = 0;
 HEAP8[i1 + 1117 | 0] = i3 & 1;
 HEAP8[i1 + 1118 | 0] = i4 & 1;
 HEAP8[i1 + 1119 | 0] = i5 & 1;
 HEAP8[i1 + 1120 | 0] = 0;
 HEAP8[i1 + 1121 | 0] = 0;
 HEAP16[i1 + 1140 >> 1] = 0;
 HEAP32[i1 + 1144 >> 2] = 0;
 HEAP32[i1 + 1148 >> 2] = 0;
 __ZN7WebCore14SimpleFontData12platformInitEv(i1);
 __ZN7WebCore14SimpleFontData17platformGlyphInitEv(i1);
 __ZN7WebCore14SimpleFontData21platformCharWidthInitEv(i1);
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
function __ZNK7WebCore14SimpleFontData17glyphForCharacterEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = i2 >>> 8;
 i4 = HEAP32[(__ZN7WebCore17GlyphPageTreeNode8getChildEPKNS_8FontDataEj(__ZN7WebCore17GlyphPageTreeNode7getRootEj(i3) | 0, i1 | 0, i3) | 0) + 24 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = 0;
  return i5 | 0;
 }
 i5 = HEAP16[i4 + 12 + ((i2 & 255) << 1) >> 1] | 0;
 return i5 | 0;
}
function __ZNK7WebCore14SimpleFontData20createScaledFontDataERKNS_15FontDescriptionEf(i1, i2, i3, d4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 if ((HEAP32[i2 + 76 >> 2] | 0) == 0) {
  __ZNK7WebCore14SimpleFontData28platformCreateScaledFontDataERKNS_15FontDescriptionEf(i1, i2, i3, d4);
  return;
 } else {
  HEAP32[i1 >> 2] = 0;
  return;
 }
}
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_iiii + 2;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_ii + 4;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function iiii___ZNK7WebCore14SimpleFontData18containsCharactersEPKti__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return __ZNK7WebCore14SimpleFontData18containsCharactersEPKti(i1 | 0, i2 | 0, i3 | 0) | 0;
}
function __ZN7WebCore14SimpleFontData15DerivedFontData6createEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = __Znwj(28) | 0;
 HEAP8[i3] = i2 & 1;
 _memset(i3 + 4 | 0, 0, 24) | 0;
 HEAP32[i1 >> 2] = i3;
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
function dynCall_viifii(i1, i2, i3, d4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 i6 = i6 | 0;
 FUNCTION_TABLE_viifii[i1 & 3](i2 | 0, i3 | 0, +d4, i5 | 0, i6 | 0);
}
function dynCall_iiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0) | 0;
}
function dynCall_fiif(i1, i2, i3, d4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 return +FUNCTION_TABLE_fiif[i1 & 1](i2 | 0, i3 | 0, +d4);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function dynCall_viif(i1, i2, i3, d4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 FUNCTION_TABLE_viif[i1 & 1](i2 | 0, i3 | 0, +d4);
}
function __ZN7WebCore14SimpleFontDataD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore14SimpleFontDataD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 3](i2 | 0, i3 | 0) | 0;
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
function __ZNK7WebCore14SimpleFontData12isCustomFontEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[i1 + 1117 | 0] & 1) != 0 | 0;
}
function __ZNK7WebCore14SimpleFontData20fontDataForCharacterEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return i1 | 0;
}
function __ZNK7WebCore14SimpleFontData9isLoadingEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[i1 + 1118 | 0] & 1) != 0 | 0;
}
function b1(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(1);
}
function b5(i1, i2, d3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(5);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 7](i2 | 0) | 0;
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
 return 0;
}
function b3(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 abort(3);
 return +0;
}
function __ZNK7WebCore14SimpleFontData11isSegmentedEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b7(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 abort(7);
}
function b8(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(8);
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
function b6() {
 abort(6);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_iiii = [b0,b0,iiii___ZNK7WebCore14SimpleFontData18containsCharactersEPKti__wrapper,b0];
  var FUNCTION_TABLE_viiiii = [b1,b1,__ZN7WebCore14SimpleFontDataC2ERKNS_16FontPlatformDataEbbb,b1];
  var FUNCTION_TABLE_vi = [b2,b2,__ZN7WebCore14SimpleFontData15DerivedFontDataD2Ev,b2,__ZN7WebCore14SimpleFontDataD2Ev,b2,__ZN7WebCore14SimpleFontDataD0Ev,b2];
  var FUNCTION_TABLE_fiif = [b3,b3];
  var FUNCTION_TABLE_ii = [b4,b4,__ZNK7WebCore14SimpleFontData12isCustomFontEv,b4,__ZNK7WebCore14SimpleFontData11isSegmentedEv,b4,__ZNK7WebCore14SimpleFontData9isLoadingEv,b4];
  var FUNCTION_TABLE_viifii = [b5,b5,__ZN7WebCore14SimpleFontDataC2ENSt3__110unique_ptrINS0_18AdditionalFontDataENS1_14default_deleteIS3_EEEEfbb,b5];
  var FUNCTION_TABLE_v = [b6,b6];
  var FUNCTION_TABLE_viif = [b7,b7];
  var FUNCTION_TABLE_iii = [b8,b8,__ZNK7WebCore14SimpleFontData20fontDataForCharacterEi,b8];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_iiii: dynCall_iiii, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_fiif: dynCall_fiif, dynCall_ii: dynCall_ii, dynCall_viifii: dynCall_viifii, dynCall_v: dynCall_v, dynCall_viif: dynCall_viif, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_iiii": invoke_iiii, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_fiif": invoke_fiif, "invoke_ii": invoke_ii, "invoke_viifii": invoke_viifii, "invoke_v": invoke_v, "invoke_viif": invoke_viif, "invoke_iii": invoke_iii, "_ceilf": _ceilf, "___setErrNo": ___setErrNo, "_malloc": _malloc, "_free": _free, "_fflush": _fflush, "_round": _round, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_fiif = Module["dynCall_fiif"] = asm["dynCall_fiif"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viifii = Module["dynCall_viifii"] = asm["dynCall_viifii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_viif = Module["dynCall_viif"] = asm["dynCall_viif"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZNK7WebCore14SimpleFontData20createScaledFontDataERKNS_15FontDescriptionEf","__ZNK7WebCore14SimpleFontData26uprightOrientationFontDataEv","__ZNK7WebCore14SimpleFontData17glyphForCharacterEi","__ZNK7WebCore14SimpleFontData32verticalRightOrientationFontDataEv","__ZN7WebCore14SimpleFontData17platformGlyphInitEv","__ZNK7WebCore14SimpleFontData23brokenIdeographFontDataEv","__ZN7WebCore14SimpleFontDataC2ENSt3__110unique_ptrINS0_18AdditionalFontDataENS1_14default_deleteIS3_EEEEfbb","__ZN7WebCore14SimpleFontData15DerivedFontData6createEb","_memset","__ZN3WTF9HashTableIiNS_12KeyValuePairIiNS_6OwnPtrIN7WebCore15GlyphMetricsMapIfE16GlyphMetricsPageEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7IntHashIjEENS_7HashMapIiS7_SC_NS_10HashTraitsIiEENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_","_memcpy","__ZN7WebCore15GlyphMetricsMapIfE18locatePageSlowCaseEj","__ZN3WTF9HashTableIiNS_12KeyValuePairIiNS_6OwnPtrIN7WebCore15GlyphMetricsMapIfE16GlyphMetricsPageEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7IntHashIjEENS_7HashMapIiS7_SC_NS_10HashTraitsIiEENSE_IS7_EEE18KeyValuePairTraitsESF_E3addINS_17HashMapTranslatorISI_SC_EEiNS_10PassOwnPtrIS6_EEEENS_18HashTableAddResultINS_17HashTableIteratorIiS8_SA_SC_SI_SF_EEEEOT0_OT1_","__ZN7WebCore14SimpleFontData15DerivedFontDataD2Ev","__ZNK7WebCore14SimpleFontData20emphasisMarkFontDataERKNS_15FontDescriptionE","__ZN7WebCore14SimpleFontData14initCharWidthsEv","__ZN7WebCore14SimpleFontDataD2Ev","__ZNK7WebCore14SimpleFontData11isSegmentedEv","__ZNK7WebCore14SimpleFontData9isLoadingEv","__ZNK7WebCore14SimpleFontData26nonSyntheticItalicFontDataEv","__ZNK7WebCore14SimpleFontData20fontDataForCharacterEi","__ZNK7WebCore14SimpleFontData12isCustomFontEv","__ZNK7WebCore14SimpleFontData17smallCapsFontDataERKNS_15FontDescriptionE","__ZN7WebCore14SimpleFontDataD0Ev","__ZN7WebCore14SimpleFontDataC2ERKNS_16FontPlatformDataEbbb"]

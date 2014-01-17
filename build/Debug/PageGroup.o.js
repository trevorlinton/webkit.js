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
H_BASE = parentModule["_malloc"](24 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 24;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore9PageGroupC1ERKN3WTF6StringE;
var __ZN7WebCore9PageGroupC1ERNS_4PageE;
var __ZN7WebCore9PageGroupD1Ev;
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
function __ZN7WebCore9PageGroup24addUserStyleSheetToWorldERNS_15DOMWrapperWorldERKN3WTF6StringERKNS_3URLERKNS3_6VectorIS4_Lj0ENS3_15CrashOnOverflowEEESE_NS_25UserContentInjectedFramesENS_14UserStyleLevelENS_22UserStyleInjectionTimeE(i1, i2, i3, i4, i5, i6, i7, i8, i9) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 var i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i11 = i10 | 0;
 i12 = i10 + 8 | 0;
 i13 = i10 + 16 | 0;
 i14 = i10 + 24 | 0;
 i15 = __ZN3WTF10fastMallocEj(84) | 0;
 i16 = i15;
 i17 = HEAP32[i3 >> 2] | 0;
 HEAP32[i15 >> 2] = i17;
 if ((i17 | 0) != 0) {
  i3 = i17 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i15 + 4 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i17 = i3 | 0;
  HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 2;
 }
 i17 = i4 + 4 | 0;
 i3 = i15 + 8 | 0;
 i18 = HEAP8[i3] & -2 | HEAP8[i17] & 1;
 HEAP8[i3] = i18;
 HEAP8[i3] = i18 & -3 | HEAP8[i17] & 2;
 HEAP32[i15 + 12 >> 2] = HEAP32[i4 + 8 >> 2];
 HEAP32[i15 + 16 >> 2] = HEAP32[i4 + 12 >> 2];
 HEAP32[i15 + 20 >> 2] = HEAP32[i4 + 16 >> 2];
 HEAP32[i15 + 24 >> 2] = HEAP32[i4 + 20 >> 2];
 HEAP32[i15 + 28 >> 2] = HEAP32[i4 + 24 >> 2];
 HEAP32[i15 + 32 >> 2] = HEAP32[i4 + 28 >> 2];
 HEAP32[i15 + 36 >> 2] = HEAP32[i4 + 32 >> 2];
 HEAP32[i15 + 40 >> 2] = HEAP32[i4 + 36 >> 2];
 HEAP32[i15 + 44 >> 2] = HEAP32[i4 + 40 >> 2];
 HEAP32[i15 + 48 >> 2] = HEAP32[i4 + 44 >> 2];
 i4 = HEAP32[i5 + 4 >> 2] | 0;
 i17 = i5 + 8 | 0;
 i18 = HEAP32[i17 >> 2] | 0;
 i3 = i15 + 52 | 0;
 HEAP32[i3 >> 2] = 0;
 i19 = i15 + 56 | 0;
 HEAP32[i19 >> 2] = 0;
 HEAP32[i15 + 60 >> 2] = i18;
 do {
  if ((i4 | 0) != 0) {
   if (i4 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   }
   i18 = __ZN3WTF18fastMallocGoodSizeEj(i4 << 2) | 0;
   HEAP32[i19 >> 2] = i18 >>> 2;
   i20 = __ZN3WTF10fastMallocEj(i18) | 0;
   i18 = i20;
   HEAP32[i3 >> 2] = i18;
   if ((i20 | 0) == 0) {
    break;
   }
   i20 = HEAP32[i5 >> 2] | 0;
   i21 = HEAP32[i17 >> 2] | 0;
   i22 = i20 + (i21 << 2) | 0;
   if ((i21 | 0) == 0) {
    break;
   } else {
    i23 = i20;
    i24 = i18;
   }
   while (1) {
    i18 = HEAP32[i23 >> 2] | 0;
    HEAP32[i24 >> 2] = i18;
    if ((i18 | 0) != 0) {
     i20 = i18 | 0;
     HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 2;
    }
    i20 = i23 + 4 | 0;
    if ((i20 | 0) == (i22 | 0)) {
     break;
    } else {
     i23 = i20;
     i24 = i24 + 4 | 0;
    }
   }
  }
 } while (0);
 i24 = HEAP32[i6 + 4 >> 2] | 0;
 i23 = i6 + 8 | 0;
 i17 = HEAP32[i23 >> 2] | 0;
 i5 = i15 + 64 | 0;
 HEAP32[i5 >> 2] = 0;
 i3 = i15 + 68 | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i15 + 72 >> 2] = i17;
 do {
  if ((i24 | 0) != 0) {
   if (i24 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   }
   i17 = __ZN3WTF18fastMallocGoodSizeEj(i24 << 2) | 0;
   HEAP32[i3 >> 2] = i17 >>> 2;
   i19 = __ZN3WTF10fastMallocEj(i17) | 0;
   i17 = i19;
   HEAP32[i5 >> 2] = i17;
   if ((i19 | 0) == 0) {
    break;
   }
   i19 = HEAP32[i6 >> 2] | 0;
   i4 = HEAP32[i23 >> 2] | 0;
   i22 = i19 + (i4 << 2) | 0;
   if ((i4 | 0) == 0) {
    break;
   } else {
    i25 = i19;
    i26 = i17;
   }
   while (1) {
    i17 = HEAP32[i25 >> 2] | 0;
    HEAP32[i26 >> 2] = i17;
    if ((i17 | 0) != 0) {
     i19 = i17 | 0;
     HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 2;
    }
    i19 = i25 + 4 | 0;
    if ((i19 | 0) == (i22 | 0)) {
     break;
    } else {
     i25 = i19;
     i26 = i26 + 4 | 0;
    }
   }
  }
 } while (0);
 HEAP32[i15 + 76 >> 2] = i7;
 HEAP32[i15 + 80 >> 2] = i8;
 i8 = i12 | 0;
 HEAP32[i8 >> 2] = i16;
 i16 = i1 + 100 | 0;
 i15 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i15 | 0) == 0) {
   i7 = __ZN3WTF10fastMallocEj(20) | 0;
   i26 = i7;
   _memset(i7 | 0, 0, 20) | 0;
   i7 = HEAP32[i16 >> 2] | 0;
   HEAP32[i16 >> 2] = i26;
   if ((i7 | 0) == 0) {
    i27 = i26;
    break;
   }
   i26 = HEAP32[i7 >> 2] | 0;
   if ((i26 | 0) != 0) {
    i25 = HEAP32[i7 + 4 >> 2] | 0;
    if ((i25 | 0) > 0) {
     i23 = 0;
     while (1) {
      i6 = i26 + (i23 << 3) | 0;
      if ((HEAP32[i6 >> 2] | 0) != -1) {
       __ZN3WTF12KeyValuePairINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENSt3__110unique_ptrINS_6VectorINS6_INS2_14UserStyleSheetENS5_14default_deleteIS8_EEEELj0ENS_15CrashOnOverflowEEENS9_ISD_EEEEED2Ev(i6);
      }
      i23 = i23 + 1 | 0;
      if ((i23 | 0) >= (i25 | 0)) {
       break;
      }
     }
    }
    __ZN3WTF8fastFreeEPv(i26);
   }
   __ZN3WTF8fastFreeEPv(i7);
   i27 = HEAP32[i16 >> 2] | 0;
  } else {
   i27 = i15;
  }
 } while (0);
 HEAP32[i13 >> 2] = 0;
 HEAP32[i11 >> 2] = i2;
 __ZN3WTF9HashTableINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENS_12KeyValuePairIS4_NSt3__110unique_ptrINS_6VectorINS7_INS2_14UserStyleSheetENS6_14default_deleteIS9_EEEELj0ENS_15CrashOnOverflowEEENSA_ISE_EEEEEENS_24KeyValuePairKeyExtractorISH_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSN_ISG_EEEESO_E3addINS_17HashMapTranslatorISQ_SL_EERPS3_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS4_SH_SJ_SL_SQ_SO_EEEEOT0_OT1_(i14, i27 | 0, i11, i13);
 i13 = (HEAP32[i14 >> 2] | 0) + 4 | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i14 | 0) == 0) {
   i11 = __ZN3WTF10fastMallocEj(12) | 0;
   i27 = i11;
   HEAP32[i11 >> 2] = 0;
   HEAP32[i11 + 4 >> 2] = 0;
   HEAP32[i11 + 8 >> 2] = 0;
   i11 = HEAP32[i13 >> 2] | 0;
   HEAP32[i13 >> 2] = i27;
   if ((i11 | 0) == 0) {
    i28 = i27;
    break;
   }
   i27 = i11 + 8 | 0;
   i2 = HEAP32[i27 >> 2] | 0;
   i15 = i11 | 0;
   if ((i2 | 0) != 0) {
    i16 = HEAP32[i15 >> 2] | 0;
    i25 = i16 + (i2 << 2) | 0;
    i2 = i16;
    while (1) {
     i16 = i2 | 0;
     i23 = HEAP32[i16 >> 2] | 0;
     HEAP32[i16 >> 2] = 0;
     if ((i23 | 0) != 0) {
      __ZN7WebCore14UserStyleSheetD2Ev(i23);
      __ZN3WTF8fastFreeEPv(i23);
     }
     i2 = i2 + 4 | 0;
     if ((i2 | 0) == (i25 | 0)) {
      break;
     }
    }
    HEAP32[i27 >> 2] = 0;
   }
   i25 = HEAP32[i15 >> 2] | 0;
   if ((i25 | 0) != 0) {
    HEAP32[i15 >> 2] = 0;
    HEAP32[i11 + 4 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i25);
   }
   __ZN3WTF8fastFreeEPv(i11);
   i28 = HEAP32[i13 >> 2] | 0;
  } else {
   i28 = i14;
  }
 } while (0);
 i14 = i28 + 8 | 0;
 i13 = HEAP32[i14 >> 2] | 0;
 if ((i13 | 0) == (HEAP32[i28 + 4 >> 2] | 0)) {
  __ZN3WTF6VectorINSt3__110unique_ptrIN7WebCore14UserStyleSheetENS1_14default_deleteIS4_EEEELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS7_EEvOT_(i28, i12);
 } else {
  i12 = HEAP32[i28 >> 2] | 0;
  i28 = HEAP32[i8 >> 2] | 0;
  HEAP32[i8 >> 2] = 0;
  HEAP32[i12 + (i13 << 2) >> 2] = i28;
  HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
 }
 if ((i9 | 0) == 0) {
  __ZN7WebCore9PageGroup44invalidateInjectedStyleSheetCacheInAllFramesEv(i1);
 }
 i1 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i10;
  return;
 }
 __ZN7WebCore14UserStyleSheetD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 STACKTOP = i10;
 return;
}
function __ZN7WebCore9PageGroup20addUserScriptToWorldERNS_15DOMWrapperWorldERKN3WTF6StringERKNS_3URLERKNS3_6VectorIS4_Lj0ENS3_15CrashOnOverflowEEESE_NS_23UserScriptInjectionTimeENS_25UserContentInjectedFramesE(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 var i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i10 = i9 | 0;
 i11 = i9 + 8 | 0;
 i12 = i9 + 16 | 0;
 i13 = i9 + 24 | 0;
 i14 = __ZN3WTF10fastMallocEj(84) | 0;
 i15 = i14;
 i16 = HEAP32[i3 >> 2] | 0;
 HEAP32[i14 >> 2] = i16;
 if ((i16 | 0) != 0) {
  i3 = i16 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i14 + 4 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i16 = i3 | 0;
  HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
 }
 i16 = i4 + 4 | 0;
 i3 = i14 + 8 | 0;
 i17 = HEAP8[i3] & -2 | HEAP8[i16] & 1;
 HEAP8[i3] = i17;
 HEAP8[i3] = i17 & -3 | HEAP8[i16] & 2;
 HEAP32[i14 + 12 >> 2] = HEAP32[i4 + 8 >> 2];
 HEAP32[i14 + 16 >> 2] = HEAP32[i4 + 12 >> 2];
 HEAP32[i14 + 20 >> 2] = HEAP32[i4 + 16 >> 2];
 HEAP32[i14 + 24 >> 2] = HEAP32[i4 + 20 >> 2];
 HEAP32[i14 + 28 >> 2] = HEAP32[i4 + 24 >> 2];
 HEAP32[i14 + 32 >> 2] = HEAP32[i4 + 28 >> 2];
 HEAP32[i14 + 36 >> 2] = HEAP32[i4 + 32 >> 2];
 HEAP32[i14 + 40 >> 2] = HEAP32[i4 + 36 >> 2];
 HEAP32[i14 + 44 >> 2] = HEAP32[i4 + 40 >> 2];
 HEAP32[i14 + 48 >> 2] = HEAP32[i4 + 44 >> 2];
 i4 = HEAP32[i5 + 4 >> 2] | 0;
 i16 = i5 + 8 | 0;
 i17 = HEAP32[i16 >> 2] | 0;
 i3 = i14 + 52 | 0;
 HEAP32[i3 >> 2] = 0;
 i18 = i14 + 56 | 0;
 HEAP32[i18 >> 2] = 0;
 HEAP32[i14 + 60 >> 2] = i17;
 do {
  if ((i4 | 0) != 0) {
   if (i4 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   }
   i17 = __ZN3WTF18fastMallocGoodSizeEj(i4 << 2) | 0;
   HEAP32[i18 >> 2] = i17 >>> 2;
   i19 = __ZN3WTF10fastMallocEj(i17) | 0;
   i17 = i19;
   HEAP32[i3 >> 2] = i17;
   if ((i19 | 0) == 0) {
    break;
   }
   i19 = HEAP32[i5 >> 2] | 0;
   i20 = HEAP32[i16 >> 2] | 0;
   i21 = i19 + (i20 << 2) | 0;
   if ((i20 | 0) == 0) {
    break;
   } else {
    i22 = i19;
    i23 = i17;
   }
   while (1) {
    i17 = HEAP32[i22 >> 2] | 0;
    HEAP32[i23 >> 2] = i17;
    if ((i17 | 0) != 0) {
     i19 = i17 | 0;
     HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 2;
    }
    i19 = i22 + 4 | 0;
    if ((i19 | 0) == (i21 | 0)) {
     break;
    } else {
     i22 = i19;
     i23 = i23 + 4 | 0;
    }
   }
  }
 } while (0);
 i23 = HEAP32[i6 + 4 >> 2] | 0;
 i22 = i6 + 8 | 0;
 i16 = HEAP32[i22 >> 2] | 0;
 i5 = i14 + 64 | 0;
 HEAP32[i5 >> 2] = 0;
 i3 = i14 + 68 | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i14 + 72 >> 2] = i16;
 do {
  if ((i23 | 0) != 0) {
   if (i23 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   }
   i16 = __ZN3WTF18fastMallocGoodSizeEj(i23 << 2) | 0;
   HEAP32[i3 >> 2] = i16 >>> 2;
   i18 = __ZN3WTF10fastMallocEj(i16) | 0;
   i16 = i18;
   HEAP32[i5 >> 2] = i16;
   if ((i18 | 0) == 0) {
    break;
   }
   i18 = HEAP32[i6 >> 2] | 0;
   i4 = HEAP32[i22 >> 2] | 0;
   i21 = i18 + (i4 << 2) | 0;
   if ((i4 | 0) == 0) {
    break;
   } else {
    i24 = i18;
    i25 = i16;
   }
   while (1) {
    i16 = HEAP32[i24 >> 2] | 0;
    HEAP32[i25 >> 2] = i16;
    if ((i16 | 0) != 0) {
     i18 = i16 | 0;
     HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 2;
    }
    i18 = i24 + 4 | 0;
    if ((i18 | 0) == (i21 | 0)) {
     break;
    } else {
     i24 = i18;
     i25 = i25 + 4 | 0;
    }
   }
  }
 } while (0);
 HEAP32[i14 + 76 >> 2] = i7;
 HEAP32[i14 + 80 >> 2] = i8;
 i8 = i11 | 0;
 HEAP32[i8 >> 2] = i15;
 i15 = i1 + 96 | 0;
 i1 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i1 | 0) == 0) {
   i14 = __ZN3WTF10fastMallocEj(20) | 0;
   i7 = i14;
   _memset(i14 | 0, 0, 20) | 0;
   i14 = HEAP32[i15 >> 2] | 0;
   HEAP32[i15 >> 2] = i7;
   if ((i14 | 0) == 0) {
    i26 = i7;
    break;
   }
   i7 = HEAP32[i14 >> 2] | 0;
   if ((i7 | 0) != 0) {
    i25 = HEAP32[i14 + 4 >> 2] | 0;
    if ((i25 | 0) > 0) {
     i24 = 0;
     while (1) {
      i22 = i7 + (i24 << 3) | 0;
      if ((HEAP32[i22 >> 2] | 0) != -1) {
       __ZN3WTF12KeyValuePairINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENSt3__110unique_ptrINS_6VectorINS6_INS2_10UserScriptENS5_14default_deleteIS8_EEEELj0ENS_15CrashOnOverflowEEENS9_ISD_EEEEED2Ev(i22);
      }
      i24 = i24 + 1 | 0;
      if ((i24 | 0) >= (i25 | 0)) {
       break;
      }
     }
    }
    __ZN3WTF8fastFreeEPv(i7);
   }
   __ZN3WTF8fastFreeEPv(i14);
   i26 = HEAP32[i15 >> 2] | 0;
  } else {
   i26 = i1;
  }
 } while (0);
 HEAP32[i12 >> 2] = 0;
 HEAP32[i10 >> 2] = i2;
 __ZN3WTF9HashTableINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENS_12KeyValuePairIS4_NSt3__110unique_ptrINS_6VectorINS7_INS2_10UserScriptENS6_14default_deleteIS9_EEEELj0ENS_15CrashOnOverflowEEENSA_ISE_EEEEEENS_24KeyValuePairKeyExtractorISH_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSN_ISG_EEEESO_E3addINS_17HashMapTranslatorISQ_SL_EERPS3_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS4_SH_SJ_SL_SQ_SO_EEEEOT0_OT1_(i13, i26 | 0, i10, i12);
 i12 = (HEAP32[i13 >> 2] | 0) + 4 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i13 | 0) == 0) {
   i10 = __ZN3WTF10fastMallocEj(12) | 0;
   i26 = i10;
   HEAP32[i10 >> 2] = 0;
   HEAP32[i10 + 4 >> 2] = 0;
   HEAP32[i10 + 8 >> 2] = 0;
   i10 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = i26;
   if ((i10 | 0) == 0) {
    i27 = i26;
    break;
   }
   i26 = i10 + 8 | 0;
   i2 = HEAP32[i26 >> 2] | 0;
   i1 = i10 | 0;
   if ((i2 | 0) != 0) {
    i15 = HEAP32[i1 >> 2] | 0;
    i25 = i15 + (i2 << 2) | 0;
    i2 = i15;
    while (1) {
     i15 = i2 | 0;
     i24 = HEAP32[i15 >> 2] | 0;
     HEAP32[i15 >> 2] = 0;
     if ((i24 | 0) != 0) {
      __ZN7WebCore10UserScriptD2Ev(i24);
      __ZN3WTF8fastFreeEPv(i24);
     }
     i2 = i2 + 4 | 0;
     if ((i2 | 0) == (i25 | 0)) {
      break;
     }
    }
    HEAP32[i26 >> 2] = 0;
   }
   i25 = HEAP32[i1 >> 2] | 0;
   if ((i25 | 0) != 0) {
    HEAP32[i1 >> 2] = 0;
    HEAP32[i10 + 4 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i25);
   }
   __ZN3WTF8fastFreeEPv(i10);
   i27 = HEAP32[i12 >> 2] | 0;
  } else {
   i27 = i13;
  }
 } while (0);
 i13 = i27 + 8 | 0;
 i12 = HEAP32[i13 >> 2] | 0;
 if ((i12 | 0) == (HEAP32[i27 + 4 >> 2] | 0)) {
  __ZN3WTF6VectorINSt3__110unique_ptrIN7WebCore10UserScriptENS1_14default_deleteIS4_EEEELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS7_EEvOT_(i27, i11);
 } else {
  i11 = HEAP32[i27 >> 2] | 0;
  i27 = HEAP32[i8 >> 2] | 0;
  HEAP32[i8 >> 2] = 0;
  HEAP32[i11 + (i12 << 2) >> 2] = i27;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
 }
 i13 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 if ((i13 | 0) == 0) {
  STACKTOP = i9;
  return;
 }
 __ZN7WebCore10UserScriptD2Ev(i13);
 __ZN3WTF8fastFreeEPv(i13);
 STACKTOP = i9;
 return;
}
function __ZN7WebCore9PageGroupD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 __ZN7WebCore9PageGroup20removeAllUserContentEv(i1);
 i2 = i1 + 104 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) != 0) {
  i2 = HEAP32[i3 + 4 >> 2] | 0;
  do {
   if ((i2 | 0) != 0) {
    i4 = i2 | 0;
    i5 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
    if ((i5 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i2);
     break;
    } else {
     HEAP32[i4 >> 2] = i5;
     break;
    }
   }
  } while (0);
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = i1 + 100 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i2 >> 2] | 0;
  if ((i3 | 0) != 0) {
   i5 = HEAP32[i2 + 4 >> 2] | 0;
   if ((i5 | 0) > 0) {
    i4 = 0;
    while (1) {
     i6 = i3 + (i4 << 3) | 0;
     if ((HEAP32[i6 >> 2] | 0) != -1) {
      __ZN3WTF12KeyValuePairINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENSt3__110unique_ptrINS_6VectorINS6_INS2_14UserStyleSheetENS5_14default_deleteIS8_EEEELj0ENS_15CrashOnOverflowEEENS9_ISD_EEEEED2Ev(i6);
     }
     i4 = i4 + 1 | 0;
     if ((i4 | 0) >= (i5 | 0)) {
      break;
     }
    }
   }
   __ZN3WTF8fastFreeEPv(i3);
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = i1 + 96 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) != 0) {
  i2 = HEAP32[i3 >> 2] | 0;
  if ((i2 | 0) != 0) {
   i5 = HEAP32[i3 + 4 >> 2] | 0;
   if ((i5 | 0) > 0) {
    i4 = 0;
    while (1) {
     i6 = i2 + (i4 << 3) | 0;
     if ((HEAP32[i6 >> 2] | 0) != -1) {
      __ZN3WTF12KeyValuePairINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENSt3__110unique_ptrINS_6VectorINS6_INS2_10UserScriptENS5_14default_deleteIS8_EEEELj0ENS_15CrashOnOverflowEEENS9_ISD_EEEEED2Ev(i6);
     }
     i4 = i4 + 1 | 0;
     if ((i4 | 0) >= (i5 | 0)) {
      break;
     }
    }
   }
   __ZN3WTF8fastFreeEPv(i2);
  }
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 76 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i2 = HEAP32[i1 + 80 >> 2] | 0;
  if ((i2 | 0) > 0) {
   i5 = 0;
   while (1) {
    i4 = i3 + (i5 << 3) | 0;
    do {
     if ((HEAP32[i4 >> 2] | 0) != -1) {
      i6 = HEAP32[i3 + (i5 << 3) + 4 >> 2] | 0;
      do {
       if ((i6 | 0) != 0) {
        i7 = i6 + 4 | 0;
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
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 3](i9);
       }
      } while (0);
      i6 = HEAP32[i4 >> 2] | 0;
      if ((i6 | 0) == 0) {
       break;
      }
      i9 = i6 | 0;
      if (((tempValue = HEAP32[i9 >> 2] | 0, HEAP32[i9 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
       break;
      }
      __ZN7WebCore14SecurityOriginD2Ev(i6);
      __ZN3WTF8fastFreeEPv(i6);
     }
    } while (0);
    i5 = i5 + 1 | 0;
    if ((i5 | 0) >= (i2 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 72 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 + 4 | 0;
   i5 = i2 | 0;
   i4 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i5 >> 2] = i4;
    break;
   }
   i4 = i2 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 3](i4);
  }
 } while (0);
 i3 = HEAP32[i1 + 44 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 20 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 | 0;
   i2 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i4 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) > 0) {
  i1 = 0;
  while (1) {
   do {
    if ((HEAP32[i3 + (i1 << 3) >> 2] | 0) != -1) {
     i4 = HEAP32[i3 + (i1 << 3) + 4 >> 2] | 0;
     if ((i4 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 3](i4);
    }
   } while (0);
   i1 = i1 + 1 | 0;
   if ((i1 | 0) >= (i2 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i3);
 return;
}
function __ZN7WebCore9PageGroupD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 __ZN7WebCore9PageGroup20removeAllUserContentEv(i1);
 i2 = i1 + 104 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) != 0) {
  i2 = HEAP32[i3 + 4 >> 2] | 0;
  do {
   if ((i2 | 0) != 0) {
    i4 = i2 | 0;
    i5 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
    if ((i5 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i2);
     break;
    } else {
     HEAP32[i4 >> 2] = i5;
     break;
    }
   }
  } while (0);
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = i1 + 100 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i2 >> 2] | 0;
  if ((i3 | 0) != 0) {
   i5 = HEAP32[i2 + 4 >> 2] | 0;
   if ((i5 | 0) > 0) {
    i4 = 0;
    while (1) {
     i6 = i3 + (i4 << 3) | 0;
     if ((HEAP32[i6 >> 2] | 0) != -1) {
      __ZN3WTF12KeyValuePairINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENSt3__110unique_ptrINS_6VectorINS6_INS2_14UserStyleSheetENS5_14default_deleteIS8_EEEELj0ENS_15CrashOnOverflowEEENS9_ISD_EEEEED2Ev(i6);
     }
     i4 = i4 + 1 | 0;
     if ((i4 | 0) >= (i5 | 0)) {
      break;
     }
    }
   }
   __ZN3WTF8fastFreeEPv(i3);
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = i1 + 96 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) != 0) {
  i2 = HEAP32[i3 >> 2] | 0;
  if ((i2 | 0) != 0) {
   i5 = HEAP32[i3 + 4 >> 2] | 0;
   if ((i5 | 0) > 0) {
    i4 = 0;
    while (1) {
     i6 = i2 + (i4 << 3) | 0;
     if ((HEAP32[i6 >> 2] | 0) != -1) {
      __ZN3WTF12KeyValuePairINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENSt3__110unique_ptrINS_6VectorINS6_INS2_10UserScriptENS5_14default_deleteIS8_EEEELj0ENS_15CrashOnOverflowEEENS9_ISD_EEEEED2Ev(i6);
     }
     i4 = i4 + 1 | 0;
     if ((i4 | 0) >= (i5 | 0)) {
      break;
     }
    }
   }
   __ZN3WTF8fastFreeEPv(i2);
  }
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 76 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i2 = HEAP32[i1 + 80 >> 2] | 0;
  if ((i2 | 0) > 0) {
   i5 = 0;
   while (1) {
    i4 = i3 + (i5 << 3) | 0;
    do {
     if ((HEAP32[i4 >> 2] | 0) != -1) {
      i6 = HEAP32[i3 + (i5 << 3) + 4 >> 2] | 0;
      do {
       if ((i6 | 0) != 0) {
        i7 = i6 + 4 | 0;
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
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 3](i9);
       }
      } while (0);
      i6 = HEAP32[i4 >> 2] | 0;
      if ((i6 | 0) == 0) {
       break;
      }
      i9 = i6 | 0;
      if (((tempValue = HEAP32[i9 >> 2] | 0, HEAP32[i9 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
       break;
      }
      __ZN7WebCore14SecurityOriginD2Ev(i6);
      __ZN3WTF8fastFreeEPv(i6);
     }
    } while (0);
    i5 = i5 + 1 | 0;
    if ((i5 | 0) >= (i2 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 72 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 + 4 | 0;
   i5 = i2 | 0;
   i4 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i5 >> 2] = i4;
    break;
   }
   i4 = i2 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 3](i4);
  }
 } while (0);
 i3 = HEAP32[i1 + 44 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 20 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 | 0;
   i2 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i4 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) > 0) {
  i1 = 0;
  while (1) {
   do {
    if ((HEAP32[i3 + (i1 << 3) >> 2] | 0) != -1) {
     i4 = HEAP32[i3 + (i1 << 3) + 4 >> 2] | 0;
     if ((i4 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 3](i4);
    }
   } while (0);
   i1 = i1 + 1 | 0;
   if ((i1 | 0) >= (i2 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i3);
 return;
}
function __ZN3WTF9HashTableINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENS_12KeyValuePairIS4_NSt3__110unique_ptrINS_6VectorINS7_INS2_14UserStyleSheetENS6_14default_deleteIS9_EEEELj0ENS_15CrashOnOverflowEEENSA_ISE_EEEEEENS_24KeyValuePairKeyExtractorISH_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSN_ISG_EEEESO_E3addINS_17HashMapTranslatorISQ_SL_EERPS3_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS4_SH_SJ_SL_SQ_SO_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i4 = i2 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i6 | 0) == 0) {
   i7 = 8;
  } else {
   i8 = i6 << 1;
   i7 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i8 | 0) ? i6 : i8;
  }
  __ZN3WTF9HashTableINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENS_12KeyValuePairIS4_NSt3__110unique_ptrINS_6VectorINS7_INS2_14UserStyleSheetENS6_14default_deleteIS9_EEEELj0ENS_15CrashOnOverflowEEENSA_ISE_EEEEEENS_24KeyValuePairKeyExtractorISH_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSN_ISG_EEEESO_E6rehashEiPSH_(i2, i7, 0) | 0;
  i9 = HEAP32[i4 >> 2] | 0;
 } else {
  i9 = i5;
 }
 i5 = HEAP32[i2 + 8 >> 2] | 0;
 i7 = HEAP32[i3 >> 2] | 0;
 i8 = i7;
 i6 = i8 + ~(i8 << 15) | 0;
 i8 = (i6 >>> 10 ^ i6) * 9 & -1;
 i6 = i8 >>> 6 ^ i8;
 i8 = i6 + ~(i6 << 11) | 0;
 i6 = i8 >>> 16 ^ i8;
 i8 = i6 & i5;
 i10 = i9 + (i8 << 3) | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i12 = i10;
   i13 = 11;
  } else {
   i14 = (i6 >>> 23) + ~i6 | 0;
   i15 = i14 << 12 ^ i14;
   i14 = i15 >>> 7 ^ i15;
   i15 = i14 << 2 ^ i14;
   i14 = i15 >>> 20 ^ i15 | 1;
   i15 = 0;
   i16 = 0;
   i17 = i8;
   i18 = i10;
   i19 = i11;
   while (1) {
    if ((i19 | 0) == (i7 | 0)) {
     i13 = 8;
     break;
    }
    i20 = (i19 | 0) == -1 ? i18 : i16;
    i21 = (i15 | 0) == 0 ? i14 : i15;
    i22 = i21 + i17 & i5;
    i23 = i9 + (i22 << 3) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    if ((i24 | 0) == 0) {
     i13 = 10;
     break;
    } else {
     i15 = i21;
     i16 = i20;
     i17 = i22;
     i18 = i23;
     i19 = i24;
    }
   }
   if ((i13 | 0) == 8) {
    i19 = i9 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i17 = i1;
    HEAP32[i17 >> 2] = i18;
    HEAP32[i17 + 4 >> 2] = i19;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i13 | 0) == 10) {
    if ((i20 | 0) == 0) {
     i12 = i23;
     i13 = 11;
     break;
    }
    i19 = i20;
    HEAP32[i19 >> 2] = 0;
    HEAP32[i19 + 4 >> 2] = 0;
    i19 = i2 + 16 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) - 1;
    i25 = i20;
    i26 = i19;
    break;
   }
  }
 } while (0);
 if ((i13 | 0) == 11) {
  i25 = i12;
  i26 = i2 + 16 | 0;
 }
 __ZN3WTF17HashMapTranslatorINS_22KeyValuePairHashTraitsINS_10HashTraitsINS_6RefPtrIN7WebCore15DOMWrapperWorldEEEEENS2_INSt3__110unique_ptrINS_6VectorINS9_INS4_14UserStyleSheetENS8_14default_deleteISB_EEEELj0ENS_15CrashOnOverflowEEENSC_ISG_EEEEEEEENS_7PtrHashIS6_EEE9translateINS_12KeyValuePairIS6_SI_EERPS5_DnEEvRT_OT0_OT1_(i25, i3, 0);
 i3 = i2 + 12 | 0;
 i12 = (HEAP32[i3 >> 2] | 0) + 1 | 0;
 HEAP32[i3 >> 2] = i12;
 i3 = i2 + 4 | 0;
 i13 = HEAP32[i3 >> 2] | 0;
 if (((HEAP32[i26 >> 2] | 0) + i12 << 1 | 0) < (i13 | 0)) {
  i27 = i25;
  i28 = i13;
 } else {
  if ((i13 | 0) == 0) {
   i29 = 8;
  } else {
   i26 = i13 << 1;
   i29 = (i12 * 6 & -1 | 0) < (i26 | 0) ? i13 : i26;
  }
  i26 = __ZN3WTF9HashTableINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENS_12KeyValuePairIS4_NSt3__110unique_ptrINS_6VectorINS7_INS2_14UserStyleSheetENS6_14default_deleteIS9_EEEELj0ENS_15CrashOnOverflowEEENSA_ISE_EEEEEENS_24KeyValuePairKeyExtractorISH_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSN_ISG_EEEESO_E6rehashEiPSH_(i2, i29, i25) | 0;
  i27 = i26;
  i28 = HEAP32[i3 >> 2] | 0;
 }
 i3 = (HEAP32[i4 >> 2] | 0) + (i28 << 3) | 0;
 i28 = i1;
 HEAP32[i28 >> 2] = i27;
 HEAP32[i28 + 4 >> 2] = i3;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENS_12KeyValuePairIS4_NSt3__110unique_ptrINS_6VectorINS7_INS2_10UserScriptENS6_14default_deleteIS9_EEEELj0ENS_15CrashOnOverflowEEENSA_ISE_EEEEEENS_24KeyValuePairKeyExtractorISH_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSN_ISG_EEEESO_E3addINS_17HashMapTranslatorISQ_SL_EERPS3_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS4_SH_SJ_SL_SQ_SO_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i4 = i2 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i6 | 0) == 0) {
   i7 = 8;
  } else {
   i8 = i6 << 1;
   i7 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i8 | 0) ? i6 : i8;
  }
  __ZN3WTF9HashTableINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENS_12KeyValuePairIS4_NSt3__110unique_ptrINS_6VectorINS7_INS2_10UserScriptENS6_14default_deleteIS9_EEEELj0ENS_15CrashOnOverflowEEENSA_ISE_EEEEEENS_24KeyValuePairKeyExtractorISH_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSN_ISG_EEEESO_E6rehashEiPSH_(i2, i7, 0) | 0;
  i9 = HEAP32[i4 >> 2] | 0;
 } else {
  i9 = i5;
 }
 i5 = HEAP32[i2 + 8 >> 2] | 0;
 i7 = HEAP32[i3 >> 2] | 0;
 i8 = i7;
 i6 = i8 + ~(i8 << 15) | 0;
 i8 = (i6 >>> 10 ^ i6) * 9 & -1;
 i6 = i8 >>> 6 ^ i8;
 i8 = i6 + ~(i6 << 11) | 0;
 i6 = i8 >>> 16 ^ i8;
 i8 = i6 & i5;
 i10 = i9 + (i8 << 3) | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i12 = i10;
   i13 = 11;
  } else {
   i14 = (i6 >>> 23) + ~i6 | 0;
   i15 = i14 << 12 ^ i14;
   i14 = i15 >>> 7 ^ i15;
   i15 = i14 << 2 ^ i14;
   i14 = i15 >>> 20 ^ i15 | 1;
   i15 = 0;
   i16 = 0;
   i17 = i8;
   i18 = i10;
   i19 = i11;
   while (1) {
    if ((i19 | 0) == (i7 | 0)) {
     i13 = 8;
     break;
    }
    i20 = (i19 | 0) == -1 ? i18 : i16;
    i21 = (i15 | 0) == 0 ? i14 : i15;
    i22 = i21 + i17 & i5;
    i23 = i9 + (i22 << 3) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    if ((i24 | 0) == 0) {
     i13 = 10;
     break;
    } else {
     i15 = i21;
     i16 = i20;
     i17 = i22;
     i18 = i23;
     i19 = i24;
    }
   }
   if ((i13 | 0) == 10) {
    if ((i20 | 0) == 0) {
     i12 = i23;
     i13 = 11;
     break;
    }
    i19 = i20;
    HEAP32[i19 >> 2] = 0;
    HEAP32[i19 + 4 >> 2] = 0;
    i19 = i2 + 16 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) - 1;
    i25 = i20;
    i26 = i19;
    break;
   } else if ((i13 | 0) == 8) {
    i19 = i9 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i17 = i1;
    HEAP32[i17 >> 2] = i18;
    HEAP32[i17 + 4 >> 2] = i19;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   }
  }
 } while (0);
 if ((i13 | 0) == 11) {
  i25 = i12;
  i26 = i2 + 16 | 0;
 }
 __ZN3WTF17HashMapTranslatorINS_22KeyValuePairHashTraitsINS_10HashTraitsINS_6RefPtrIN7WebCore15DOMWrapperWorldEEEEENS2_INSt3__110unique_ptrINS_6VectorINS9_INS4_10UserScriptENS8_14default_deleteISB_EEEELj0ENS_15CrashOnOverflowEEENSC_ISG_EEEEEEEENS_7PtrHashIS6_EEE9translateINS_12KeyValuePairIS6_SI_EERPS5_DnEEvRT_OT0_OT1_(i25, i3, 0);
 i3 = i2 + 12 | 0;
 i12 = (HEAP32[i3 >> 2] | 0) + 1 | 0;
 HEAP32[i3 >> 2] = i12;
 i3 = i2 + 4 | 0;
 i13 = HEAP32[i3 >> 2] | 0;
 if (((HEAP32[i26 >> 2] | 0) + i12 << 1 | 0) < (i13 | 0)) {
  i27 = i25;
  i28 = i13;
 } else {
  if ((i13 | 0) == 0) {
   i29 = 8;
  } else {
   i26 = i13 << 1;
   i29 = (i12 * 6 & -1 | 0) < (i26 | 0) ? i13 : i26;
  }
  i26 = __ZN3WTF9HashTableINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENS_12KeyValuePairIS4_NSt3__110unique_ptrINS_6VectorINS7_INS2_10UserScriptENS6_14default_deleteIS9_EEEELj0ENS_15CrashOnOverflowEEENSA_ISE_EEEEEENS_24KeyValuePairKeyExtractorISH_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSN_ISG_EEEESO_E6rehashEiPSH_(i2, i29, i25) | 0;
  i27 = i26;
  i28 = HEAP32[i3 >> 2] | 0;
 }
 i3 = (HEAP32[i4 >> 2] | 0) + (i28 << 3) | 0;
 i28 = i1;
 HEAP32[i28 >> 2] = i27;
 HEAP32[i28 + 4 >> 2] = i3;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableINS_6RefPtrIN7WebCore14SecurityOriginEEENS_12KeyValuePairIS4_NS1_INS2_16StorageNamespaceEEEEENS_24KeyValuePairKeyExtractorIS8_EENS2_18SecurityOriginHashENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSD_IS7_EEEESE_E3addINS_17HashMapTranslatorISG_SB_EERPS3_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS4_S8_SA_SB_SG_SE_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i4 = i2 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF9HashTableINS_6RefPtrIN7WebCore14SecurityOriginEEENS_12KeyValuePairIS4_NS1_INS2_16StorageNamespaceEEEEENS_24KeyValuePairKeyExtractorIS8_EENS2_18SecurityOriginHashENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSD_IS7_EEEESE_E6expandEPS8_(i2, 0) | 0;
  i6 = HEAP32[i4 >> 2] | 0;
 } else {
  i6 = i5;
 }
 i5 = HEAP32[i2 + 8 >> 2] | 0;
 i7 = __ZN7WebCore18SecurityOriginHash4hashEPNS_14SecurityOriginE(HEAP32[i3 >> 2] | 0) | 0;
 i8 = (i7 >>> 23) + ~i7 | 0;
 i9 = i8 << 12 ^ i8;
 i8 = i9 >>> 7 ^ i9;
 i9 = i8 << 2 ^ i8;
 i8 = i9 >>> 20 ^ i9 | 1;
 i9 = 0;
 i10 = i7;
 i7 = 0;
 L4 : while (1) {
  i11 = i10 & i5;
  i12 = i6 + (i11 << 3) | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  i14 = i13;
  do {
   if ((i14 | 0) == (-1 | 0)) {
    i15 = i12;
   } else if ((i14 | 0) == 0) {
    break L4;
   } else {
    i16 = HEAP32[i3 >> 2] | 0;
    if ((i13 | 0) == 0 | (i16 | 0) == 0) {
     if ((i13 | 0) == (i16 | 0)) {
      i17 = 8;
      break L4;
     } else {
      i15 = i9;
      break;
     }
    } else {
     if (__ZNK7WebCore14SecurityOrigin20isSameSchemeHostPortEPKS0_(i13, i16) | 0) {
      i17 = 8;
      break L4;
     } else {
      i15 = i9;
      break;
     }
    }
   }
  } while (0);
  i13 = (i7 | 0) == 0 ? i8 : i7;
  i9 = i15;
  i10 = i13 + i11 | 0;
  i7 = i13;
 }
 if ((i17 | 0) == 8) {
  i17 = (HEAP32[i4 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 3) | 0;
  i7 = i1;
  HEAP32[i7 >> 2] = i12;
  HEAP32[i7 + 4 >> 2] = i17;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i9 | 0) == 0) {
  i18 = i12;
 } else {
  i12 = i9;
  HEAP32[i12 >> 2] = 0;
  HEAP32[i12 + 4 >> 2] = 0;
  i12 = i2 + 16 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) - 1;
  i18 = i9;
 }
 i9 = HEAP32[i3 >> 2] | 0;
 if ((i9 | 0) != 0) {
  i3 = i9 | 0;
  tempValue = HEAP32[i3 >> 2] | 0, HEAP32[i3 >> 2] = tempValue + 1, tempValue;
 }
 i3 = i18 | 0;
 i12 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i9;
 do {
  if ((i12 | 0) != 0) {
   i9 = i12 | 0;
   if (((tempValue = HEAP32[i9 >> 2] | 0, HEAP32[i9 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN7WebCore14SecurityOriginD2Ev(i12);
   __ZN3WTF8fastFreeEPv(i12);
  }
 } while (0);
 i12 = i18 + 4 | 0;
 i9 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = 0;
 do {
  if ((i9 | 0) != 0) {
   i12 = i9 + 4 | 0;
   i3 = i12 | 0;
   i17 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i17 | 0) != 0) {
    HEAP32[i3 >> 2] = i17;
    break;
   }
   i17 = i12 - 4 | 0;
   if ((i17 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 4 >> 2] & 3](i17);
  }
 } while (0);
 i9 = i2 + 12 | 0;
 i17 = (HEAP32[i9 >> 2] | 0) + 1 | 0;
 HEAP32[i9 >> 2] = i17;
 i9 = i2 + 4 | 0;
 i12 = HEAP32[i9 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i17 << 1 | 0) < (i12 | 0)) {
  i19 = i18;
  i20 = i12;
 } else {
  i12 = __ZN3WTF9HashTableINS_6RefPtrIN7WebCore14SecurityOriginEEENS_12KeyValuePairIS4_NS1_INS2_16StorageNamespaceEEEEENS_24KeyValuePairKeyExtractorIS8_EENS2_18SecurityOriginHashENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSD_IS7_EEEESE_E6expandEPS8_(i2, i18) | 0;
  i19 = i12;
  i20 = HEAP32[i9 >> 2] | 0;
 }
 i9 = (HEAP32[i4 >> 2] | 0) + (i20 << 3) | 0;
 i20 = i1;
 HEAP32[i20 >> 2] = i19;
 HEAP32[i20 + 4 >> 2] = i9;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PN7WebCore9PageGroupEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKS1_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S6_S8_S9_SF_SC_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i4 = i2 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i6 | 0) == 0) {
   i7 = 8;
  } else {
   i8 = i6 << 1;
   i7 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i8 | 0) ? i6 : i8;
  }
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PN7WebCore9PageGroupEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E6rehashEiPS6_(i2, i7, 0) | 0;
  i9 = HEAP32[i4 >> 2] | 0;
 } else {
  i9 = i5;
 }
 i5 = HEAP32[i2 + 8 >> 2] | 0;
 i7 = i3 | 0;
 i3 = HEAP32[i7 >> 2] | 0;
 i8 = HEAP32[i3 + 16 >> 2] | 0;
 if (i8 >>> 0 > 127 >>> 0) {
  i10 = i8 >>> 7;
 } else {
  i10 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i3) | 0;
 }
 i3 = (i10 >>> 23) + ~i10 | 0;
 i8 = i3 << 12 ^ i3;
 i3 = i8 >>> 7 ^ i8;
 i8 = i3 << 2 ^ i3;
 i3 = i8 >>> 20 ^ i8 | 1;
 i8 = 0;
 i6 = i10;
 i10 = 0;
 while (1) {
  i11 = i6 & i5;
  i12 = i9 + (i11 << 3) | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == 0) {
   break;
  } else if ((i14 | 0) == (-1 | 0)) {
   i15 = i12;
  } else {
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i13, HEAP32[i7 >> 2] | 0) | 0) {
    i16 = 11;
    break;
   } else {
    i15 = i8;
   }
  }
  i13 = (i10 | 0) == 0 ? i3 : i10;
  i8 = i15;
  i6 = i13 + i11 | 0;
  i10 = i13;
 }
 if ((i16 | 0) == 11) {
  i16 = (HEAP32[i4 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 3) | 0;
  i10 = i1;
  HEAP32[i10 >> 2] = i12;
  HEAP32[i10 + 4 >> 2] = i16;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i8 | 0) == 0) {
  i17 = i12;
 } else {
  i12 = i8;
  HEAP32[i12 >> 2] = 0;
  HEAP32[i12 + 4 >> 2] = 0;
  i12 = i2 + 16 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) - 1;
  i17 = i8;
 }
 i8 = HEAP32[i7 >> 2] | 0;
 if ((i8 | 0) != 0) {
  i7 = i8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = i17 | 0;
 i12 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i8;
 do {
  if ((i12 | 0) != 0) {
   i8 = i12 | 0;
   i7 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i8 >> 2] = i7;
    break;
   }
  }
 } while (0);
 HEAP32[i17 + 4 >> 2] = 0;
 i12 = i2 + 12 | 0;
 i7 = (HEAP32[i12 >> 2] | 0) + 1 | 0;
 HEAP32[i12 >> 2] = i7;
 i12 = i2 + 4 | 0;
 i8 = HEAP32[i12 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i7 << 1 | 0) < (i8 | 0)) {
  i18 = i17;
  i19 = i8;
 } else {
  if ((i8 | 0) == 0) {
   i20 = 8;
  } else {
   i16 = i8 << 1;
   i20 = (i7 * 6 & -1 | 0) < (i16 | 0) ? i8 : i16;
  }
  i16 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PN7WebCore9PageGroupEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E6rehashEiPS6_(i2, i20, i17) | 0;
  i18 = i16;
  i19 = HEAP32[i12 >> 2] | 0;
 }
 i12 = (HEAP32[i4 >> 2] | 0) + (i19 << 3) | 0;
 i19 = i1;
 HEAP32[i19 >> 2] = i18;
 HEAP32[i19 + 4 >> 2] = i12;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableIyyNS_17IdentityExtractorEN7WebCore12LinkHashHashENS_10HashTraitsIyEES5_E3addINS_22IdentityHashTranslatorIS3_EERKySB_EENS_18HashTableAddResultINS_17HashTableIteratorIyyS1_S3_S5_S5_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0;
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
  __ZN3WTF9HashTableIyyNS_17IdentityExtractorEN7WebCore12LinkHashHashENS_10HashTraitsIyEES5_E6rehashEiPy(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i9 = HEAP32[i3 + 4 >> 2] | 0;
 i3 = i8;
 i7 = i3 & i6;
 i11 = i10 + (i7 << 3) | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 i13 = HEAP32[i11 + 4 >> 2] | 0;
 do {
  if ((i12 | 0) == 0 & (i13 | 0) == 0) {
   i14 = i11;
   i15 = 11;
  } else {
   i16 = (i3 >>> 23) + ~i3 | 0;
   i17 = i16 << 12 ^ i16;
   i16 = i17 >>> 7 ^ i17;
   i17 = i16 << 2 ^ i16;
   i16 = i17 >>> 20 ^ i17 | 1;
   i17 = 0;
   i18 = 0;
   i19 = i7;
   i20 = i11;
   i21 = i13;
   i22 = i12;
   while (1) {
    if ((i22 | 0) == (i8 | 0) & (i21 | 0) == (i9 | 0)) {
     i15 = 8;
     break;
    }
    i23 = (i22 | 0) == (-1 | 0) & (i21 | 0) == (-1 | 0) ? i20 : i18;
    i24 = (i17 | 0) == 0 ? i16 : i17;
    i25 = i24 + i19 & i6;
    i26 = i10 + (i25 << 3) | 0;
    i27 = HEAP32[i26 >> 2] | 0;
    i28 = HEAP32[i26 + 4 >> 2] | 0;
    if ((i27 | 0) == 0 & (i28 | 0) == 0) {
     i15 = 10;
     break;
    } else {
     i17 = i24;
     i18 = i23;
     i19 = i25;
     i20 = i26;
     i21 = i28;
     i22 = i27;
    }
   }
   if ((i15 | 0) == 10) {
    if ((i23 | 0) == 0) {
     i14 = i26;
     i15 = 11;
     break;
    }
    HEAP32[i23 >> 2] = 0;
    HEAP32[i23 + 4 >> 2] = 0;
    i22 = i2 + 16 | 0;
    HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) - 1;
    i29 = i23;
    i30 = i22;
    break;
   } else if ((i15 | 0) == 8) {
    i22 = i10 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i21 = i1;
    HEAP32[i21 >> 2] = i20;
    HEAP32[i21 + 4 >> 2] = i22;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   }
  }
 } while (0);
 if ((i15 | 0) == 11) {
  i29 = i14;
  i30 = i2 + 16 | 0;
 }
 i14 = HEAP32[i4 + 4 >> 2] | 0;
 HEAP32[i29 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i29 + 4 >> 2] = i14;
 i14 = i2 + 12 | 0;
 i4 = (HEAP32[i14 >> 2] | 0) + 1 | 0;
 HEAP32[i14 >> 2] = i4;
 i14 = i2 + 4 | 0;
 i15 = HEAP32[i14 >> 2] | 0;
 if (((HEAP32[i30 >> 2] | 0) + i4 << 1 | 0) < (i15 | 0)) {
  i31 = i29;
  i32 = i15;
 } else {
  if ((i15 | 0) == 0) {
   i33 = 8;
  } else {
   i30 = i15 << 1;
   i33 = (i4 * 6 & -1 | 0) < (i30 | 0) ? i15 : i30;
  }
  i30 = __ZN3WTF9HashTableIyyNS_17IdentityExtractorEN7WebCore12LinkHashHashENS_10HashTraitsIyEES5_E6rehashEiPy(i2, i33, i29) | 0;
  i31 = i30;
  i32 = HEAP32[i14 >> 2] | 0;
 }
 i14 = (HEAP32[i5 >> 2] | 0) + (i32 << 3) | 0;
 i32 = i1;
 HEAP32[i32 >> 2] = i31;
 HEAP32[i32 + 4 >> 2] = i14;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PN7WebCore9PageGroupEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E6rehashEiPS6_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
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
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i11;
  } else {
   i14 = HEAP32[i6 >> 2] | 0;
   i16 = HEAP32[i4 >> 2] | 0;
   i17 = HEAP32[i13 + 16 >> 2] | 0;
   if (i17 >>> 0 > 127 >>> 0) {
    i18 = i17 >>> 7;
   } else {
    i18 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i13) | 0;
   }
   i13 = (i18 >>> 23) + ~i18 | 0;
   i17 = i13 << 12 ^ i13;
   i13 = i17 >>> 7 ^ i17;
   i17 = i13 << 2 ^ i13;
   i13 = i17 >>> 20 ^ i17 | 1;
   i17 = i18;
   i19 = 0;
   i20 = 0;
   while (1) {
    i21 = i17 & i16;
    i22 = i14 + (i21 << 3) | 0;
    i23 = HEAP32[i22 >> 2] | 0;
    i24 = i23;
    if ((i24 | 0) == (-1 | 0)) {
     i25 = i22;
    } else if ((i24 | 0) == 0) {
     i26 = 9;
     break;
    } else {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i23, HEAP32[i12 >> 2] | 0) | 0) {
      i27 = i22;
      break;
     } else {
      i25 = i20;
     }
    }
    i23 = (i19 | 0) == 0 ? i13 : i19;
    i17 = i23 + i21 | 0;
    i19 = i23;
    i20 = i25;
   }
   if ((i26 | 0) == 9) {
    i26 = 0;
    i27 = (i20 | 0) != 0 ? i20 : i22;
   }
   i19 = i27 | 0;
   i17 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i13 = i17 | 0;
     i14 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i17);
      break;
     } else {
      HEAP32[i13 >> 2] = i14;
      break;
     }
    }
   } while (0);
   i17 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   HEAP32[i19 >> 2] = i17;
   HEAP32[i27 + 4 >> 2] = HEAP32[i7 + (i10 << 3) + 4 >> 2];
   i15 = (i2 | 0) == (i3 | 0) ? i27 : i11;
  }
  i17 = i10 + 1 | 0;
  if ((i17 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i17;
   i11 = i15;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i28 = 0;
 } else {
  i8 = i15;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  i1 = HEAP32[i7 + (i28 << 3) >> 2] | 0;
  i11 = i1;
  do {
   if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
    i10 = i1 | 0;
    i27 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
    if ((i27 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i1);
     break;
    } else {
     HEAP32[i10 >> 2] = i27;
     break;
    }
   }
  } while (0);
  i1 = i28 + 1 | 0;
  if ((i1 | 0) < (i5 | 0)) {
   i28 = i1;
  } else {
   i8 = i15;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN7WebCore9PageGroup25removeUserScriptFromWorldERNS_15DOMWrapperWorldERKNS_3URLE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i1 + 96 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3WTF7HashMapINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENSt3__110unique_ptrINS_6VectorINS6_INS2_10UserScriptENS5_14default_deleteIS8_EEEELj0ENS_15CrashOnOverflowEEENS9_ISD_EEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENSI_ISF_EEE4findEPS3_(i5, i1, i2);
 i2 = HEAP32[i6 >> 2] | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 if ((i1 | 0) == ((HEAP32[i2 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 3) | 0)) {
  STACKTOP = i4;
  return;
 }
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 i1 = i2 + 8 | 0;
 i7 = HEAP32[i1 >> 2] | 0;
 i8 = i7 - 1 | 0;
 L7 : do {
  if ((i8 | 0) > -1) {
   i9 = i2 | 0;
   i10 = i3 | 0;
   i11 = i7;
   i12 = i8;
   i13 = i7;
   while (1) {
    if (i13 >>> 0 <= i12 >>> 0) {
     break;
    }
    if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[(HEAP32[(HEAP32[i9 >> 2] | 0) + (i12 << 2) >> 2] | 0) + 4 >> 2] | 0, HEAP32[i10 >> 2] | 0) | 0) {
     i14 = HEAP32[i9 >> 2] | 0;
     i15 = i14 + (i12 << 2) | 0;
     i16 = i15 | 0;
     i17 = HEAP32[i16 >> 2] | 0;
     HEAP32[i16 >> 2] = 0;
     if ((i17 | 0) != 0) {
      __ZN7WebCore10UserScriptD2Ev(i17);
      __ZN3WTF8fastFreeEPv(i17);
     }
     __ZN3WTF11VectorMoverILb0ENSt3__110unique_ptrIN7WebCore10UserScriptENS1_14default_deleteIS4_EEEEE15moveOverlappingEPS7_S9_S9_(i14 + (i11 << 2) | 0, (HEAP32[i9 >> 2] | 0) + (HEAP32[i1 >> 2] << 2) | 0, i15);
     i15 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
     HEAP32[i1 >> 2] = i15;
     i18 = i15;
    } else {
     i18 = HEAP32[i1 >> 2] | 0;
    }
    i15 = i12 - 1 | 0;
    if ((i15 | 0) > -1) {
     i11 = i12;
     i12 = i15;
     i13 = i18;
    } else {
     i19 = i18;
     break L7;
    }
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  } else {
   i19 = i7;
  }
 } while (0);
 if ((i19 | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 i19 = HEAP32[i6 >> 2] | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i5 = i19 + 4 | 0;
 if ((i6 | 0) == ((HEAP32[i19 >> 2] | 0) + (HEAP32[i5 >> 2] << 3) | 0)) {
  STACKTOP = i4;
  return;
 }
 __ZN3WTF12KeyValuePairINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENSt3__110unique_ptrINS_6VectorINS6_INS2_10UserScriptENS5_14default_deleteIS8_EEEELj0ENS_15CrashOnOverflowEEENS9_ISD_EEEEED2Ev(i6);
 HEAP32[i6 >> 2] = -1;
 i6 = i19 + 16 | 0;
 HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 i6 = i19 + 12 | 0;
 i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 HEAP32[i6 >> 2] = i7;
 i6 = HEAP32[i5 >> 2] | 0;
 if (!((i7 * 6 & -1 | 0) < (i6 | 0) & (i6 | 0) > 8)) {
  STACKTOP = i4;
  return;
 }
 __ZN3WTF9HashTableINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENS_12KeyValuePairIS4_NSt3__110unique_ptrINS_6VectorINS7_INS2_10UserScriptENS6_14default_deleteIS9_EEEELj0ENS_15CrashOnOverflowEEENSA_ISE_EEEEEENS_24KeyValuePairKeyExtractorISH_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSN_ISG_EEEESO_E6rehashEiPSH_(i19 | 0, (i6 | 0) / 2 & -1, 0) | 0;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore9PageGroup29removeUserStyleSheetFromWorldERNS_15DOMWrapperWorldERKNS_3URLE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i1 + 100 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3WTF7HashMapINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENSt3__110unique_ptrINS_6VectorINS6_INS2_14UserStyleSheetENS5_14default_deleteIS8_EEEELj0ENS_15CrashOnOverflowEEENS9_ISD_EEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENSI_ISF_EEE4findEPS3_(i5, i7, i2);
 i2 = HEAP32[i6 >> 2] | 0;
 i7 = HEAP32[i5 >> 2] | 0;
 if ((i7 | 0) == ((HEAP32[i2 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 3) | 0)) {
  STACKTOP = i4;
  return;
 }
 i2 = HEAP32[i7 + 4 >> 2] | 0;
 i7 = i2 + 8 | 0;
 i8 = i2 | 0;
 i2 = i3 | 0;
 i3 = HEAP32[i7 >> 2] | 0;
 i9 = 0;
 L7 : while (1) {
  i10 = i3;
  while (1) {
   i11 = i10 - 1 | 0;
   if ((i11 | 0) <= -1) {
    break L7;
   }
   if ((HEAP32[i7 >> 2] | 0) >>> 0 <= i11 >>> 0) {
    i12 = 7;
    break L7;
   }
   if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[(HEAP32[(HEAP32[i8 >> 2] | 0) + (i11 << 2) >> 2] | 0) + 4 >> 2] | 0, HEAP32[i2 >> 2] | 0) | 0) {
    break;
   } else {
    i10 = i11;
   }
  }
  i13 = HEAP32[i8 >> 2] | 0;
  i14 = i13 + (i11 << 2) | 0;
  i15 = i14 | 0;
  i16 = HEAP32[i15 >> 2] | 0;
  HEAP32[i15 >> 2] = 0;
  if ((i16 | 0) != 0) {
   __ZN7WebCore14UserStyleSheetD2Ev(i16);
   __ZN3WTF8fastFreeEPv(i16);
  }
  __ZN3WTF11VectorMoverILb0ENSt3__110unique_ptrIN7WebCore14UserStyleSheetENS1_14default_deleteIS4_EEEEE15moveOverlappingEPS7_S9_S9_(i13 + (i10 << 2) | 0, (HEAP32[i8 >> 2] | 0) + (HEAP32[i7 >> 2] << 2) | 0, i14);
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) - 1;
  i3 = i11;
  i9 = 1;
 }
 if ((i12 | 0) == 7) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 if (!i9) {
  STACKTOP = i4;
  return;
 }
 do {
  if ((HEAP32[i7 >> 2] | 0) == 0) {
   i9 = HEAP32[i6 >> 2] | 0;
   i12 = HEAP32[i5 >> 2] | 0;
   i11 = i9 + 4 | 0;
   if ((i12 | 0) == ((HEAP32[i9 >> 2] | 0) + (HEAP32[i11 >> 2] << 3) | 0)) {
    break;
   }
   __ZN3WTF12KeyValuePairINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENSt3__110unique_ptrINS_6VectorINS6_INS2_14UserStyleSheetENS5_14default_deleteIS8_EEEELj0ENS_15CrashOnOverflowEEENS9_ISD_EEEEED2Ev(i12);
   HEAP32[i12 >> 2] = -1;
   i12 = i9 + 16 | 0;
   HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
   i12 = i9 + 12 | 0;
   i3 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   HEAP32[i12 >> 2] = i3;
   i12 = HEAP32[i11 >> 2] | 0;
   if (!((i3 * 6 & -1 | 0) < (i12 | 0) & (i12 | 0) > 8)) {
    break;
   }
   __ZN3WTF9HashTableINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENS_12KeyValuePairIS4_NSt3__110unique_ptrINS_6VectorINS7_INS2_14UserStyleSheetENS6_14default_deleteIS9_EEEELj0ENS_15CrashOnOverflowEEENSA_ISE_EEEEEENS_24KeyValuePairKeyExtractorISH_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSN_ISG_EEEESO_E6rehashEiPSH_(i9 | 0, (i12 | 0) / 2 & -1, 0) | 0;
  }
 } while (0);
 __ZN7WebCore9PageGroup44invalidateInjectedStyleSheetCacheInAllFramesEv(i1);
 STACKTOP = i4;
 return;
}
function __ZN3WTF9HashTableIPN7WebCore4PageES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableIPN7WebCore4PageES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i3 = i8;
 i9 = i3 + ~(i3 << 15) | 0;
 i3 = (i9 >>> 10 ^ i9) * 9 & -1;
 i9 = i3 >>> 6 ^ i3;
 i3 = i9 + ~(i9 << 11) | 0;
 i9 = i3 >>> 16 ^ i3;
 i3 = i9 & i6;
 i7 = i10 + (i3 << 2) | 0;
 i11 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i12 = i7;
   i13 = 11;
  } else {
   i14 = (i9 >>> 23) + ~i9 | 0;
   i15 = i14 << 12 ^ i14;
   i14 = i15 >>> 7 ^ i15;
   i15 = i14 << 2 ^ i14;
   i14 = i15 >>> 20 ^ i15 | 1;
   i15 = 0;
   i16 = 0;
   i17 = i3;
   i18 = i7;
   i19 = i11;
   while (1) {
    if ((i19 | 0) == (i8 | 0)) {
     i13 = 8;
     break;
    }
    i20 = (i19 | 0) == -1 ? i18 : i16;
    i21 = (i15 | 0) == 0 ? i14 : i15;
    i22 = i21 + i17 & i6;
    i23 = i10 + (i22 << 2) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    if ((i24 | 0) == 0) {
     i13 = 10;
     break;
    } else {
     i15 = i21;
     i16 = i20;
     i17 = i22;
     i18 = i23;
     i19 = i24;
    }
   }
   if ((i13 | 0) == 8) {
    i19 = i10 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
    i17 = i1;
    HEAP32[i17 >> 2] = i18;
    HEAP32[i17 + 4 >> 2] = i19;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i13 | 0) == 10) {
    if ((i20 | 0) == 0) {
     i12 = i23;
     i13 = 11;
     break;
    }
    HEAP32[i20 >> 2] = 0;
    i19 = i2 + 16 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) - 1;
    i25 = i20;
    i26 = i19;
    break;
   }
  }
 } while (0);
 if ((i13 | 0) == 11) {
  i25 = i12;
  i26 = i2 + 16 | 0;
 }
 HEAP32[i25 >> 2] = HEAP32[i4 >> 2];
 i4 = i2 + 12 | 0;
 i12 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i12;
 i4 = i2 + 4 | 0;
 i13 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i26 >> 2] | 0) + i12 << 1 | 0) < (i13 | 0)) {
  i27 = i25;
  i28 = i13;
 } else {
  if ((i13 | 0) == 0) {
   i29 = 8;
  } else {
   i26 = i13 << 1;
   i29 = (i12 * 6 & -1 | 0) < (i26 | 0) ? i13 : i26;
  }
  i26 = __ZN3WTF9HashTableIPN7WebCore4PageES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i29, i25) | 0;
  i27 = i26;
  i28 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i28 << 2) | 0;
 i28 = i1;
 HEAP32[i28 >> 2] = i27;
 HEAP32[i28 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore18SecurityOriginHash4hashEPNS_14SecurityOriginE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i2 = i1 + 4 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = (i3 | 0) == 0;
 do {
  if (i4) {
   i5 = 0;
   i6 = 0;
   i7 = 1;
   i8 = 0;
  } else {
   i9 = i3 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
   i9 = HEAP32[i2 >> 2] | 0;
   if ((i9 | 0) != 0) {
    i10 = i9 | 0;
    HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
   }
   i10 = HEAP32[i9 + 16 >> 2] | 0;
   if (i10 >>> 0 > 127 >>> 0) {
    i5 = i10 >>> 23 & 65535;
    i6 = i10 >>> 7 & 65535;
    i7 = 0;
    i8 = i9;
    break;
   } else {
    i10 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i9) | 0;
    i5 = i10 >>> 16 & 65535;
    i6 = i10 & 65535;
    i7 = 0;
    i8 = i9;
    break;
   }
  }
 } while (0);
 i2 = i1 + 8 | 0;
 i9 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i9 | 0) == 0) {
   i11 = HEAP16[i1 + 20 >> 1] | 0;
   i12 = 0;
   i13 = 0;
  } else {
   i10 = i9 | 0;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
   i14 = HEAP32[i2 >> 2] | 0;
   i15 = (i14 | 0) == 0;
   if (!i15) {
    i16 = i14 | 0;
    HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
   }
   i16 = HEAP32[i14 + 16 >> 2] | 0;
   if (i16 >>> 0 > 127 >>> 0) {
    i17 = i16 >>> 7 & 65535;
    i18 = i16 >>> 23 & 65535;
   } else {
    i16 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i14) | 0;
    i17 = i16 & 65535;
    i18 = i16 >>> 16 & 65535;
   }
   i16 = HEAP16[i1 + 20 >> 1] | 0;
   do {
    if (!i15) {
     i19 = i14 | 0;
     i20 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
     if ((i20 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i14);
      break;
     } else {
      HEAP32[i19 >> 2] = i20;
      break;
     }
    }
   } while (0);
   i14 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    i11 = i16;
    i12 = i18;
    i13 = i17;
    break;
   } else {
    HEAP32[i10 >> 2] = i14;
    i11 = i16;
    i12 = i18;
    i13 = i17;
    break;
   }
  }
 } while (0);
 do {
  if (!(i7 | (i8 | 0) == 0)) {
   i17 = i8 | 0;
   i18 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i18 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i17 >> 2] = i18;
    break;
   }
  }
 } while (0);
 do {
  if (!i4) {
   i8 = i3 | 0;
   i7 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i8 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i3 = (i6 & 65535) - 1640531527 | 0;
 i6 = (i5 & 65535) << 11 ^ i3 ^ i3 << 16;
 i3 = (i6 >>> 11) + i6 + (i13 & 65535) | 0;
 i13 = (i12 & 65535) << 11 ^ i3 ^ i3 << 16;
 i3 = i13 + (i11 & 65535) + (i13 >>> 11) | 0;
 i13 = i3 << 16 ^ i3;
 i3 = (i13 >>> 11) + i13 | 0;
 i13 = i3 << 3 ^ i3;
 i3 = (i13 >>> 5) + i13 | 0;
 i13 = i3 << 2 ^ i3;
 i3 = (i13 >>> 15) + i13 | 0;
 i13 = (i3 << 10 ^ i3) & 16777215;
 return ((i13 | 0) == 0 ? 8388608 : i13) | 0;
}
function __ZN3WTF9HashTableIyyNS_17IdentityExtractorEN7WebCore12LinkHashHashENS_10HashTraitsIyEES5_E6rehashEiPy(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 i4 = i1 + 8 | 0;
 HEAP32[i4 >> 2] = i2 - 1;
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 3) | 0;
 if ((i5 | 0) == 0) {
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
  i2 = i7 + (i11 << 3) | 0;
  i13 = HEAP32[i2 >> 2] | 0;
  i14 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i13 | 0) == (-1 | 0) & (i14 | 0) == (-1 | 0) | (i13 | 0) == 0 & (i14 | 0) == 0) {
   i15 = i12;
  } else {
   i16 = HEAP32[i6 >> 2] | 0;
   i17 = HEAP32[i4 >> 2] | 0;
   i18 = i13;
   i19 = i17 & i18;
   i20 = i16 + (i19 << 3) | 0;
   i21 = HEAP32[i20 >> 2] | 0;
   i22 = HEAP32[i20 + 4 >> 2] | 0;
   L7 : do {
    if ((i21 | 0) == 0 & (i22 | 0) == 0) {
     i23 = 0;
     i24 = i20;
     i25 = 5;
    } else {
     i26 = (i18 >>> 23) + ~i18 | 0;
     i27 = i26 << 12 ^ i26;
     i26 = i27 >>> 7 ^ i27;
     i27 = i26 << 2 ^ i26;
     i26 = i27 >>> 20 ^ i27 | 1;
     i27 = 0;
     i28 = 0;
     i29 = i19;
     i30 = i20;
     i31 = i22;
     i32 = i21;
     while (1) {
      if ((i32 | 0) == (i13 | 0) & (i31 | 0) == (i14 | 0)) {
       i33 = i30;
       break L7;
      }
      i34 = (i32 | 0) == (-1 | 0) & (i31 | 0) == (-1 | 0) ? i30 : i27;
      i35 = (i28 | 0) == 0 ? i26 : i28;
      i36 = i35 + i29 & i17;
      i37 = i16 + (i36 << 3) | 0;
      i38 = HEAP32[i37 >> 2] | 0;
      i39 = HEAP32[i37 + 4 >> 2] | 0;
      if ((i38 | 0) == 0 & (i39 | 0) == 0) {
       i23 = i34;
       i24 = i37;
       i25 = 5;
       break;
      } else {
       i27 = i34;
       i28 = i35;
       i29 = i36;
       i30 = i37;
       i31 = i39;
       i32 = i38;
      }
     }
    }
   } while (0);
   if ((i25 | 0) == 5) {
    i25 = 0;
    i33 = (i23 | 0) != 0 ? i23 : i24;
   }
   HEAP32[i33 >> 2] = i13;
   HEAP32[i33 + 4 >> 2] = i14;
   i15 = (i2 | 0) == (i3 | 0) ? i33 : i12;
  }
  i16 = i11 + 1 | 0;
  if ((i16 | 0) == (i5 | 0)) {
   i8 = i15;
   break;
  } else {
   i11 = i16;
   i12 = i15;
  }
 }
 i9 = i1 + 16 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i7;
 __ZN3WTF8fastFreeEPv(i10);
 return i8 | 0;
}
function __ZN3WTF9HashTableINS_6RefPtrIN7WebCore14SecurityOriginEEENS_12KeyValuePairIS4_NS1_INS2_16StorageNamespaceEEEEENS_24KeyValuePairKeyExtractorIS8_EENS2_18SecurityOriginHashENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSD_IS7_EEEESE_E6expandEPS8_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
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
 HEAP32[i1 + 8 >> 2] = i5 - 1;
 HEAP32[i4 >> 2] = __ZN3WTF16fastZeroedMallocEj(i5 << 3) | 0;
 if ((i6 | 0) == 0) {
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
  i5 = i7 + (i10 << 3) | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  if ((i4 | 0) == (-1 | 0) | (i4 | 0) == 0) {
   i12 = i11;
  } else {
   i4 = __ZN3WTF9HashTableINS_6RefPtrIN7WebCore14SecurityOriginEEENS_12KeyValuePairIS4_NS1_INS2_16StorageNamespaceEEEEENS_24KeyValuePairKeyExtractorIS8_EENS2_18SecurityOriginHashENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSD_IS7_EEEESE_E8reinsertEOS8_(i1, i5) | 0;
   i12 = (i5 | 0) == (i2 | 0) ? i4 : i11;
  }
  i4 = i10 + 1 | 0;
  if ((i4 | 0) == (i6 | 0)) {
   break;
  } else {
   i10 = i4;
   i11 = i12;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i6 | 0) > 0) {
  i13 = 0;
 } else {
  i8 = i12;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  i1 = i7 + (i13 << 3) | 0;
  do {
   if ((HEAP32[i1 >> 2] | 0) != -1) {
    i11 = HEAP32[i7 + (i13 << 3) + 4 >> 2] | 0;
    do {
     if ((i11 | 0) != 0) {
      i10 = i11 + 4 | 0;
      i2 = i10 | 0;
      i4 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
      if ((i4 | 0) != 0) {
       HEAP32[i2 >> 2] = i4;
       break;
      }
      i4 = i10 - 4 | 0;
      if ((i4 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 3](i4);
     }
    } while (0);
    i11 = HEAP32[i1 >> 2] | 0;
    if ((i11 | 0) == 0) {
     break;
    }
    i4 = i11 | 0;
    if (((tempValue = HEAP32[i4 >> 2] | 0, HEAP32[i4 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
     break;
    }
    __ZN7WebCore14SecurityOriginD2Ev(i11);
    __ZN3WTF8fastFreeEPv(i11);
   }
  } while (0);
  i1 = i13 + 1 | 0;
  if ((i1 | 0) < (i6 | 0)) {
   i13 = i1;
  } else {
   i8 = i12;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN3WTF9HashTableIPN7WebCore4PageES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 i4 = i1 + 8 | 0;
 HEAP32[i4 >> 2] = i2 - 1;
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 2) | 0;
 if ((i5 | 0) == 0) {
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
  i2 = i7 + (i11 << 2) | 0;
  i13 = HEAP32[i2 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i12;
  } else {
   i16 = HEAP32[i6 >> 2] | 0;
   i17 = HEAP32[i4 >> 2] | 0;
   i18 = i14 + ~(i14 << 15) | 0;
   i14 = (i18 >>> 10 ^ i18) * 9 & -1;
   i18 = i14 >>> 6 ^ i14;
   i14 = i18 + ~(i18 << 11) | 0;
   i18 = i14 >>> 16 ^ i14;
   i14 = i17 & i18;
   i19 = i16 + (i14 << 2) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L7 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 5;
    } else {
     i24 = (i18 >>> 23) + ~i18 | 0;
     i25 = i24 << 12 ^ i24;
     i24 = i25 >>> 7 ^ i25;
     i25 = i24 << 2 ^ i24;
     i24 = i25 >>> 20 ^ i25 | 1;
     i25 = 0;
     i26 = 0;
     i27 = i14;
     i28 = i19;
     i29 = i20;
     while (1) {
      if ((i29 | 0) == (i13 | 0)) {
       i30 = i28;
       break L7;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i17;
      i34 = i16 + (i33 << 2) | 0;
      i35 = HEAP32[i34 >> 2] | 0;
      if ((i35 | 0) == 0) {
       i21 = i31;
       i22 = i34;
       i23 = 5;
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
   if ((i23 | 0) == 5) {
    i23 = 0;
    i30 = (i21 | 0) != 0 ? i21 : i22;
   }
   HEAP32[i30 >> 2] = i13;
   i15 = (i2 | 0) == (i3 | 0) ? i30 : i12;
  }
  i16 = i11 + 1 | 0;
  if ((i16 | 0) == (i5 | 0)) {
   i8 = i15;
   break;
  } else {
   i11 = i16;
   i12 = i15;
  }
 }
 i9 = i1 + 16 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i7;
 __ZN3WTF8fastFreeEPv(i10);
 return i8 | 0;
}
function __ZN3WTF9HashTableINS_6RefPtrIN7WebCore14SecurityOriginEEENS_12KeyValuePairIS4_NS1_INS2_16StorageNamespaceEEEEENS_24KeyValuePairKeyExtractorIS8_EENS2_18SecurityOriginHashENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSD_IS7_EEEESE_E8reinsertEOS8_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i2 | 0;
 i5 = __ZN7WebCore18SecurityOriginHash4hashEPNS_14SecurityOriginE(HEAP32[i1 >> 2] | 0) | 0;
 i6 = (i5 >>> 23) + ~i5 | 0;
 i7 = i6 << 12 ^ i6;
 i6 = i7 >>> 7 ^ i7;
 i7 = i6 << 2 ^ i6;
 i6 = i7 >>> 20 ^ i7 | 1;
 i7 = i5;
 i5 = 0;
 i8 = 0;
 L1 : while (1) {
  i9 = i7 & i4;
  i10 = i3 + (i9 << 3) | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  i12 = i11;
  do {
   if ((i12 | 0) == (-1 | 0)) {
    i13 = i10;
   } else if ((i12 | 0) == 0) {
    i14 = 3;
    break L1;
   } else {
    i15 = HEAP32[i1 >> 2] | 0;
    if ((i11 | 0) == 0 | (i15 | 0) == 0) {
     if ((i11 | 0) == (i15 | 0)) {
      i16 = i10;
      break L1;
     } else {
      i13 = i8;
      break;
     }
    } else {
     if (__ZNK7WebCore14SecurityOrigin20isSameSchemeHostPortEPKS0_(i11, i15) | 0) {
      i16 = i10;
      break L1;
     } else {
      i13 = i8;
      break;
     }
    }
   }
  } while (0);
  i11 = (i5 | 0) == 0 ? i6 : i5;
  i7 = i11 + i9 | 0;
  i5 = i11;
  i8 = i13;
 }
 if ((i14 | 0) == 3) {
  i16 = (i8 | 0) != 0 ? i8 : i10;
 }
 i10 = i16 + 4 | 0;
 i8 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i14 = i8 + 4 | 0;
   i13 = i14 | 0;
   i5 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i13 >> 2] = i5;
    break;
   }
   i5 = i14 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 3](i5);
  }
 } while (0);
 i8 = i16 | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i14 = i5 | 0;
   if (((tempValue = HEAP32[i14 >> 2] | 0, HEAP32[i14 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN7WebCore14SecurityOriginD2Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  }
 } while (0);
 i5 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i8 >> 2] = i5;
 i5 = i2 + 4 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i10 >> 2] = i2;
 return i16 | 0;
}
function __ZN3WTF7HashSetIyN7WebCore12LinkHashHashENS_10HashTraitsIyEEE6removeERKy(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 L1 : do {
  if ((i3 | 0) == 0) {
   i4 = i1 + 4 | 0;
   i5 = HEAP32[i4 >> 2] << 3 | 0;
   i6 = i4;
  } else {
   i4 = HEAP32[i1 + 8 >> 2] | 0;
   i7 = HEAP32[i2 >> 2] | 0;
   i8 = HEAP32[i2 + 4 >> 2] | 0;
   i9 = i7;
   i10 = i9 & i4;
   i11 = i3 + (i10 << 3) | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   i13 = HEAP32[i11 + 4 >> 2] | 0;
   L4 : do {
    if ((i12 | 0) == (i7 | 0) & (i13 | 0) == (i8 | 0)) {
     i14 = i11;
     i15 = 7;
    } else {
     i16 = (i9 >>> 23) + ~i9 | 0;
     i17 = i16 << 12 ^ i16;
     i16 = i17 >>> 7 ^ i17;
     i17 = i16 << 2 ^ i16;
     i16 = i17 >>> 20 ^ i17 | 1;
     i17 = 0;
     i18 = i10;
     i19 = i13;
     i20 = i12;
     while (1) {
      if ((i20 | 0) == 0 & (i19 | 0) == 0) {
       break L4;
      }
      i21 = (i17 | 0) == 0 ? i16 : i17;
      i22 = i21 + i18 & i4;
      i23 = i3 + (i22 << 3) | 0;
      i24 = HEAP32[i23 >> 2] | 0;
      i25 = HEAP32[i23 + 4 >> 2] | 0;
      if ((i24 | 0) == (i7 | 0) & (i25 | 0) == (i8 | 0)) {
       i14 = i23;
       i15 = 7;
       break;
      } else {
       i17 = i21;
       i18 = i22;
       i19 = i25;
       i20 = i24;
      }
     }
    }
   } while (0);
   do {
    if ((i15 | 0) == 7) {
     if ((i14 | 0) == 0) {
      break;
     }
     i5 = i14;
     i6 = i1 + 4 | 0;
     break L1;
    }
   } while (0);
   i8 = i1 + 4 | 0;
   i5 = i3 + (HEAP32[i8 >> 2] << 3) | 0;
   i6 = i8;
  }
 } while (0);
 if ((i5 | 0) == (i3 + (HEAP32[i6 >> 2] << 3) | 0)) {
  i26 = 0;
  return i26 | 0;
 }
 HEAP32[i5 >> 2] = -1;
 HEAP32[i5 + 4 >> 2] = -1;
 i5 = i1 + 16 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 i5 = i1 + 12 | 0;
 i3 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i3;
 i5 = HEAP32[i6 >> 2] | 0;
 if (!((i3 * 6 & -1 | 0) < (i5 | 0) & (i5 | 0) > 8)) {
  i26 = 1;
  return i26 | 0;
 }
 __ZN3WTF9HashTableIyyNS_17IdentityExtractorEN7WebCore12LinkHashHashENS_10HashTraitsIyEES5_E6rehashEiPy(i1 | 0, (i5 | 0) / 2 & -1, 0) | 0;
 i26 = 1;
 return i26 | 0;
}
function __ZN3WTF9HashTableINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENS_12KeyValuePairIS4_NSt3__110unique_ptrINS_6VectorINS7_INS2_14UserStyleSheetENS6_14default_deleteIS9_EEEELj0ENS_15CrashOnOverflowEEENSA_ISE_EEEEEENS_24KeyValuePairKeyExtractorISH_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSN_ISG_EEEESO_E8reinsertEOSH_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i2 | 0;
 i5 = HEAP32[i1 >> 2] | 0;
 i6 = i5;
 i7 = i6 + ~(i6 << 15) | 0;
 i6 = (i7 >>> 10 ^ i7) * 9 & -1;
 i7 = i6 >>> 6 ^ i6;
 i6 = i7 + ~(i7 << 11) | 0;
 i7 = i6 >>> 16 ^ i6;
 i6 = i7 & i4;
 i8 = i3 + (i6 << 3) | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 L1 : do {
  if ((i9 | 0) == 0) {
   i10 = 0;
   i11 = i8;
   i12 = 3;
  } else {
   i13 = (i7 >>> 23) + ~i7 | 0;
   i14 = i13 << 12 ^ i13;
   i13 = i14 >>> 7 ^ i14;
   i14 = i13 << 2 ^ i13;
   i13 = i14 >>> 20 ^ i14 | 1;
   i14 = 0;
   i15 = 0;
   i16 = i6;
   i17 = i8;
   i18 = i9;
   while (1) {
    if ((i18 | 0) == (i5 | 0)) {
     i19 = i17;
     break L1;
    }
    i20 = (i18 | 0) == -1 ? i17 : i14;
    i21 = (i15 | 0) == 0 ? i13 : i15;
    i22 = i21 + i16 & i4;
    i23 = i3 + (i22 << 3) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    if ((i24 | 0) == 0) {
     i10 = i20;
     i11 = i23;
     i12 = 3;
     break;
    } else {
     i14 = i20;
     i15 = i21;
     i16 = i22;
     i17 = i23;
     i18 = i24;
    }
   }
  }
 } while (0);
 if ((i12 | 0) == 3) {
  i19 = (i10 | 0) != 0 ? i10 : i11;
 }
 __ZN3WTF12KeyValuePairINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENSt3__110unique_ptrINS_6VectorINS6_INS2_14UserStyleSheetENS5_14default_deleteIS8_EEEELj0ENS_15CrashOnOverflowEEENS9_ISD_EEEEED2Ev(i19);
 i11 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i19 >> 2] = i11;
 i11 = i2 + 4 | 0;
 i2 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i19 + 4 >> 2] = i2;
 return i19 | 0;
}
function __ZN3WTF9HashTableINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENS_12KeyValuePairIS4_NSt3__110unique_ptrINS_6VectorINS7_INS2_10UserScriptENS6_14default_deleteIS9_EEEELj0ENS_15CrashOnOverflowEEENSA_ISE_EEEEEENS_24KeyValuePairKeyExtractorISH_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSN_ISG_EEEESO_E8reinsertEOSH_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i2 | 0;
 i5 = HEAP32[i1 >> 2] | 0;
 i6 = i5;
 i7 = i6 + ~(i6 << 15) | 0;
 i6 = (i7 >>> 10 ^ i7) * 9 & -1;
 i7 = i6 >>> 6 ^ i6;
 i6 = i7 + ~(i7 << 11) | 0;
 i7 = i6 >>> 16 ^ i6;
 i6 = i7 & i4;
 i8 = i3 + (i6 << 3) | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 L1 : do {
  if ((i9 | 0) == 0) {
   i10 = 0;
   i11 = i8;
   i12 = 3;
  } else {
   i13 = (i7 >>> 23) + ~i7 | 0;
   i14 = i13 << 12 ^ i13;
   i13 = i14 >>> 7 ^ i14;
   i14 = i13 << 2 ^ i13;
   i13 = i14 >>> 20 ^ i14 | 1;
   i14 = 0;
   i15 = 0;
   i16 = i6;
   i17 = i8;
   i18 = i9;
   while (1) {
    if ((i18 | 0) == (i5 | 0)) {
     i19 = i17;
     break L1;
    }
    i20 = (i18 | 0) == -1 ? i17 : i14;
    i21 = (i15 | 0) == 0 ? i13 : i15;
    i22 = i21 + i16 & i4;
    i23 = i3 + (i22 << 3) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    if ((i24 | 0) == 0) {
     i10 = i20;
     i11 = i23;
     i12 = 3;
     break;
    } else {
     i14 = i20;
     i15 = i21;
     i16 = i22;
     i17 = i23;
     i18 = i24;
    }
   }
  }
 } while (0);
 if ((i12 | 0) == 3) {
  i19 = (i10 | 0) != 0 ? i10 : i11;
 }
 __ZN3WTF12KeyValuePairINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENSt3__110unique_ptrINS_6VectorINS6_INS2_10UserScriptENS5_14default_deleteIS8_EEEELj0ENS_15CrashOnOverflowEEENS9_ISD_EEEEED2Ev(i19);
 i11 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i19 >> 2] = i11;
 i11 = i2 + 4 | 0;
 i2 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i19 + 4 >> 2] = i2;
 return i19 | 0;
}
function __ZN3WTF9HashTableINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENS_12KeyValuePairIS4_NSt3__110unique_ptrINS_6VectorINS7_INS2_14UserStyleSheetENS6_14default_deleteIS9_EEEELj0ENS_15CrashOnOverflowEEENSA_ISE_EEEEEENS_24KeyValuePairKeyExtractorISH_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSN_ISG_EEEESO_E6rehashEiPSH_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = i2 - 1;
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
  i6 = HEAP32[i2 >> 2] | 0;
  if ((i6 | 0) == (-1 | 0) | (i6 | 0) == 0) {
   i12 = i11;
  } else {
   i6 = __ZN3WTF9HashTableINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENS_12KeyValuePairIS4_NSt3__110unique_ptrINS_6VectorINS7_INS2_14UserStyleSheetENS6_14default_deleteIS9_EEEELj0ENS_15CrashOnOverflowEEENSA_ISE_EEEEEENS_24KeyValuePairKeyExtractorISH_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSN_ISG_EEEESO_E8reinsertEOSH_(i1, i2) | 0;
   i12 = (i2 | 0) == (i3 | 0) ? i6 : i11;
  }
  i6 = i10 + 1 | 0;
  if ((i6 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i6;
   i11 = i12;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i13 = 0;
 } else {
  i8 = i12;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  i1 = i7 + (i13 << 3) | 0;
  if ((HEAP32[i1 >> 2] | 0) != -1) {
   __ZN3WTF12KeyValuePairINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENSt3__110unique_ptrINS_6VectorINS6_INS2_14UserStyleSheetENS5_14default_deleteIS8_EEEELj0ENS_15CrashOnOverflowEEENS9_ISD_EEEEED2Ev(i1);
  }
  i1 = i13 + 1 | 0;
  if ((i1 | 0) < (i5 | 0)) {
   i13 = i1;
  } else {
   i8 = i12;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN3WTF9HashTableINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENS_12KeyValuePairIS4_NSt3__110unique_ptrINS_6VectorINS7_INS2_10UserScriptENS6_14default_deleteIS9_EEEELj0ENS_15CrashOnOverflowEEENSA_ISE_EEEEEENS_24KeyValuePairKeyExtractorISH_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSN_ISG_EEEESO_E6rehashEiPSH_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = i2 - 1;
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
  i6 = HEAP32[i2 >> 2] | 0;
  if ((i6 | 0) == (-1 | 0) | (i6 | 0) == 0) {
   i12 = i11;
  } else {
   i6 = __ZN3WTF9HashTableINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENS_12KeyValuePairIS4_NSt3__110unique_ptrINS_6VectorINS7_INS2_10UserScriptENS6_14default_deleteIS9_EEEELj0ENS_15CrashOnOverflowEEENSA_ISE_EEEEEENS_24KeyValuePairKeyExtractorISH_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSN_ISG_EEEESO_E8reinsertEOSH_(i1, i2) | 0;
   i12 = (i2 | 0) == (i3 | 0) ? i6 : i11;
  }
  i6 = i10 + 1 | 0;
  if ((i6 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i6;
   i11 = i12;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i13 = 0;
 } else {
  i8 = i12;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  i1 = i7 + (i13 << 3) | 0;
  if ((HEAP32[i1 >> 2] | 0) != -1) {
   __ZN3WTF12KeyValuePairINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENSt3__110unique_ptrINS_6VectorINS6_INS2_10UserScriptENS5_14default_deleteIS8_EEEELj0ENS_15CrashOnOverflowEEENS9_ISD_EEEEED2Ev(i1);
  }
  i1 = i13 + 1 | 0;
  if ((i1 | 0) < (i5 | 0)) {
   i13 = i1;
  } else {
   i8 = i12;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN7WebCore9PageGroup21transientLocalStorageEPNS_14SecurityOriginE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 24 | 0;
 i7 = i3 + 32 | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i4 >> 2] = i2;
 __ZN3WTF9HashTableINS_6RefPtrIN7WebCore14SecurityOriginEEENS_12KeyValuePairIS4_NS1_INS2_16StorageNamespaceEEEEENS_24KeyValuePairKeyExtractorIS8_EENS2_18SecurityOriginHashENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSD_IS7_EEEESE_E3addINS_17HashMapTranslatorISG_SB_EERPS3_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS4_S8_SA_SB_SG_SE_EEEEOT0_OT1_(i5, i1 + 76 | 0, i4, i6);
 i6 = HEAP32[i5 >> 2] | 0;
 if ((HEAP8[i5 + 8 | 0] & 1) == 0) {
  i8 = i6 + 4 | 0;
  i9 = HEAP32[i8 >> 2] | 0;
  STACKTOP = i3;
  return i9 | 0;
 }
 __ZN7WebCore16StorageNamespace30transientLocalStorageNamespaceEPNS_9PageGroupEPNS_14SecurityOriginE(i7, i1, i2);
 i2 = i7 | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i1 = i6 + 4 | 0;
 i5 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = i7;
 do {
  if ((i5 | 0) != 0) {
   i7 = i5 + 4 | 0;
   i1 = i7 | 0;
   i4 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i1 >> 2] = i4;
    break;
   }
   i4 = i7 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 3](i4);
  }
 } while (0);
 i5 = HEAP32[i2 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i8 = i6 + 4 | 0;
  i9 = HEAP32[i8 >> 2] | 0;
  STACKTOP = i3;
  return i9 | 0;
 }
 i2 = i5 + 4 | 0;
 i5 = i2 | 0;
 i4 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i5 >> 2] = i4;
  i8 = i6 + 4 | 0;
  i9 = HEAP32[i8 >> 2] | 0;
  STACKTOP = i3;
  return i9 | 0;
 }
 i4 = i2 - 4 | 0;
 if ((i4 | 0) == 0) {
  i8 = i6 + 4 | 0;
  i9 = HEAP32[i8 >> 2] | 0;
  STACKTOP = i3;
  return i9 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 3](i4);
 i8 = i6 + 4 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 STACKTOP = i3;
 return i9 | 0;
}
function __ZN7WebCore9PageGroup13isLinkVisitedEy(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i4 = i1 + 64 | 0;
 if ((HEAP8[i4] & 1) == 0) {
  HEAP8[i4] = 1;
  i4 = HEAP32[i1 + 24 >> 2] | 0;
  i5 = HEAP32[i1 + 28 >> 2] | 0;
  i6 = i4 + (i5 << 2) | 0;
  L3 : do {
   if ((HEAP32[i1 + 36 >> 2] | 0) == 0) {
    i7 = i6;
   } else {
    if ((i5 | 0) == 0) {
     i7 = i4;
     break;
    } else {
     i8 = i4;
    }
    while (1) {
     i9 = HEAP32[i8 >> 2] | 0;
     if (!((i9 | 0) == (-1 | 0) | (i9 | 0) == 0)) {
      i7 = i8;
      break L3;
     }
     i9 = i8 + 4 | 0;
     if ((i9 | 0) == (i6 | 0)) {
      i7 = i6;
      break;
     } else {
      i8 = i9;
     }
    }
   }
  } while (0);
  i8 = HEAP32[(HEAP32[(HEAP32[i7 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 248 >> 2] & 3](i8);
 }
 i8 = HEAP32[i1 + 44 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i10 = 0;
  return i10 | 0;
 }
 i7 = HEAP32[i1 + 52 >> 2] | 0;
 i1 = i2;
 i6 = i7 & i1;
 i4 = i8 + (i6 << 3) | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i9 = HEAP32[i4 + 4 >> 2] | 0;
 L13 : do {
  if ((i5 | 0) == (i2 | 0) & (i9 | 0) == (i3 | 0)) {
   i11 = i4;
  } else {
   i12 = (i1 >>> 23) + ~i1 | 0;
   i13 = i12 << 12 ^ i12;
   i12 = i13 >>> 7 ^ i13;
   i13 = i12 << 2 ^ i12;
   i12 = i13 >>> 20 ^ i13 | 1;
   i13 = 0;
   i14 = i6;
   i15 = i9;
   i16 = i5;
   while (1) {
    if ((i16 | 0) == 0 & (i15 | 0) == 0) {
     i11 = 0;
     break L13;
    }
    i17 = (i13 | 0) == 0 ? i12 : i13;
    i18 = i17 + i14 & i7;
    i19 = i8 + (i18 << 3) | 0;
    i20 = HEAP32[i19 >> 2] | 0;
    i21 = HEAP32[i19 + 4 >> 2] | 0;
    if ((i20 | 0) == (i2 | 0) & (i21 | 0) == (i3 | 0)) {
     i11 = i19;
     break;
    } else {
     i13 = i17;
     i14 = i18;
     i15 = i21;
     i16 = i20;
    }
   }
  }
 } while (0);
 i10 = (i11 | 0) != 0;
 return i10 | 0;
}
function __ZN3WTF7HashSetIPN7WebCore4PageENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = HEAP32[i1 + 4 >> 2] | 0;
  i5 = i4 << 2 | 0;
  i6 = 0;
  i7 = i4;
 } else {
  i4 = HEAP32[i1 + 8 >> 2] | 0;
  i8 = HEAP32[i2 >> 2] | 0;
  i2 = i8;
  i9 = i2 + ~(i2 << 15) | 0;
  i2 = (i9 >>> 10 ^ i9) * 9 & -1;
  i9 = i2 >>> 6 ^ i2;
  i2 = i9 + ~(i9 << 11) | 0;
  i9 = i2 >>> 16 ^ i2;
  i2 = i9 & i4;
  i10 = i3 + (i2 << 2) | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  L3 : do {
   if ((i11 | 0) == (i8 | 0)) {
    i12 = i10;
   } else {
    i13 = (i9 >>> 23) + ~i9 | 0;
    i14 = i13 << 12 ^ i13;
    i13 = i14 >>> 7 ^ i14;
    i14 = i13 << 2 ^ i13;
    i13 = i14 >>> 20 ^ i14 | 1;
    i14 = 0;
    i15 = i2;
    i16 = i11;
    while (1) {
     if ((i16 | 0) == 0) {
      i12 = 0;
      break L3;
     }
     i17 = (i14 | 0) == 0 ? i13 : i14;
     i18 = i17 + i15 & i4;
     i19 = i3 + (i18 << 2) | 0;
     i20 = HEAP32[i19 >> 2] | 0;
     if ((i20 | 0) == (i8 | 0)) {
      i12 = i19;
      break;
     } else {
      i14 = i17;
      i15 = i18;
      i16 = i20;
     }
    }
   }
  } while (0);
  i8 = HEAP32[i1 + 4 >> 2] | 0;
  i5 = (i12 | 0) == 0 ? i3 + (i8 << 2) | 0 : i12;
  i6 = i3;
  i7 = i8;
 }
 if ((i5 | 0) == (i6 + (i7 << 2) | 0)) {
  i21 = 0;
  return i21 | 0;
 }
 HEAP32[i5 >> 2] = -1;
 i5 = i1 + 16 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 i5 = i1 + 12 | 0;
 i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i7;
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 if (!((i7 * 6 & -1 | 0) < (i5 | 0) & (i5 | 0) > 8)) {
  i21 = 1;
  return i21 | 0;
 }
 __ZN3WTF9HashTableIPN7WebCore4PageES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1 | 0, (i5 | 0) / 2 & -1, 0) | 0;
 i21 = 1;
 return i21 | 0;
}
function __ZN7WebCore14UserStyleSheetD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 + 72 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 64 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i7 = i5 | 0;
     i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i7 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 68 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = i1 + 60 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i6 = i1 + 52 | 0;
 if ((i4 | 0) != 0) {
  i3 = HEAP32[i6 >> 2] | 0;
  i5 = i3 + (i4 << 2) | 0;
  i4 = i3;
  while (1) {
   i3 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i3 | 0) != 0) {
     i8 = i3 | 0;
     i7 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
     if ((i7 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i3);
      break;
     } else {
      HEAP32[i8 >> 2] = i7;
      break;
     }
    }
   } while (0);
   i4 = i4 + 4 | 0;
   if ((i4 | 0) == (i5 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i6 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i6 >> 2] = 0;
  HEAP32[i1 + 56 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i6 = i2 | 0;
   i5 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i6 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i5 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i5;
  return;
 }
}
function __ZN7WebCore10UserScriptD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 + 72 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 64 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i7 = i5 | 0;
     i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i7 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 68 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = i1 + 60 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i6 = i1 + 52 | 0;
 if ((i4 | 0) != 0) {
  i3 = HEAP32[i6 >> 2] | 0;
  i5 = i3 + (i4 << 2) | 0;
  i4 = i3;
  while (1) {
   i3 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i3 | 0) != 0) {
     i8 = i3 | 0;
     i7 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
     if ((i7 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i3);
      break;
     } else {
      HEAP32[i8 >> 2] = i7;
      break;
     }
    }
   } while (0);
   i4 = i4 + 4 | 0;
   if ((i4 | 0) == (i5 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i6 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i6 >> 2] = 0;
  HEAP32[i1 + 56 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i6 = i2 | 0;
   i5 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i6 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i5 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i5;
  return;
 }
}
function __ZN3WTF7HashMapINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENSt3__110unique_ptrINS_6VectorINS6_INS2_14UserStyleSheetENS5_14default_deleteIS8_EEEELj0ENS_15CrashOnOverflowEEENS9_ISD_EEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENSI_ISF_EEE4findEPS3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 L1 : do {
  if ((i4 | 0) == 0) {
   i5 = HEAP32[i2 + 4 >> 2] << 3 | 0;
   i6 = i5;
   i7 = i5;
  } else {
   i5 = HEAP32[i2 + 8 >> 2] | 0;
   i8 = i3;
   i9 = i8 + ~(i8 << 15) | 0;
   i8 = (i9 >>> 10 ^ i9) * 9 & -1;
   i9 = i8 >>> 6 ^ i8;
   i8 = i9 + ~(i9 << 11) | 0;
   i9 = i8 >>> 16 ^ i8;
   i8 = i5 & i9;
   i10 = i4 + (i8 << 3) | 0;
   i11 = HEAP32[i10 >> 2] | 0;
   L3 : do {
    if ((i11 | 0) == (i3 | 0)) {
     i12 = i10;
    } else {
     i13 = (i9 >>> 23) + ~i9 | 0;
     i14 = i13 << 12 ^ i13;
     i13 = i14 >>> 7 ^ i14;
     i14 = i13 << 2 ^ i13;
     i13 = i14 >>> 20 ^ i14 | 1;
     i14 = 0;
     i15 = i8;
     i16 = i11;
     while (1) {
      if ((i16 | 0) == 0) {
       break;
      }
      i17 = (i14 | 0) == 0 ? i13 : i14;
      i18 = i17 + i15 & i5;
      i19 = i4 + (i18 << 3) | 0;
      i20 = HEAP32[i19 >> 2] | 0;
      if ((i20 | 0) == (i3 | 0)) {
       i12 = i19;
       break L3;
      } else {
       i14 = i17;
       i15 = i18;
       i16 = i20;
      }
     }
     i16 = i4 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
     i6 = i16;
     i7 = i16;
     break L1;
    }
   } while (0);
   i5 = i4 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
   i6 = (i12 | 0) == 0 ? i5 : i12;
   i7 = i5;
  }
 } while (0);
 i12 = i1;
 HEAP32[i12 >> 2] = i6;
 HEAP32[i12 + 4 >> 2] = i7;
 return;
}
function __ZN3WTF7HashMapINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENSt3__110unique_ptrINS_6VectorINS6_INS2_10UserScriptENS5_14default_deleteIS8_EEEELj0ENS_15CrashOnOverflowEEENS9_ISD_EEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENSI_ISF_EEE4findEPS3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 L1 : do {
  if ((i4 | 0) == 0) {
   i5 = HEAP32[i2 + 4 >> 2] << 3 | 0;
   i6 = i5;
   i7 = i5;
  } else {
   i5 = HEAP32[i2 + 8 >> 2] | 0;
   i8 = i3;
   i9 = i8 + ~(i8 << 15) | 0;
   i8 = (i9 >>> 10 ^ i9) * 9 & -1;
   i9 = i8 >>> 6 ^ i8;
   i8 = i9 + ~(i9 << 11) | 0;
   i9 = i8 >>> 16 ^ i8;
   i8 = i5 & i9;
   i10 = i4 + (i8 << 3) | 0;
   i11 = HEAP32[i10 >> 2] | 0;
   L3 : do {
    if ((i11 | 0) == (i3 | 0)) {
     i12 = i10;
    } else {
     i13 = (i9 >>> 23) + ~i9 | 0;
     i14 = i13 << 12 ^ i13;
     i13 = i14 >>> 7 ^ i14;
     i14 = i13 << 2 ^ i13;
     i13 = i14 >>> 20 ^ i14 | 1;
     i14 = 0;
     i15 = i8;
     i16 = i11;
     while (1) {
      if ((i16 | 0) == 0) {
       break;
      }
      i17 = (i14 | 0) == 0 ? i13 : i14;
      i18 = i17 + i15 & i5;
      i19 = i4 + (i18 << 3) | 0;
      i20 = HEAP32[i19 >> 2] | 0;
      if ((i20 | 0) == (i3 | 0)) {
       i12 = i19;
       break L3;
      } else {
       i14 = i17;
       i15 = i18;
       i16 = i20;
      }
     }
     i16 = i4 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
     i6 = i16;
     i7 = i16;
     break L1;
    }
   } while (0);
   i5 = i4 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
   i6 = (i12 | 0) == 0 ? i5 : i12;
   i7 = i5;
  }
 } while (0);
 i12 = i1;
 HEAP32[i12 >> 2] = i6;
 HEAP32[i12 + 4 >> 2] = i7;
 return;
}
function __ZN3WTF6VectorINSt3__110unique_ptrIN7WebCore14UserStyleSheetENS1_14default_deleteIS4_EEEELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS7_EEvOT_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i4 + 1 | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if (i7 >>> 0 <= i2 >>> 0) {
   if ((i7 + (i4 << 2) | 0) >>> 0 <= i2 >>> 0) {
    break;
   }
   i8 = HEAP32[i1 + 4 >> 2] | 0;
   i9 = i8 + 1 + (i8 >>> 2) | 0;
   i8 = i9 >>> 0 > 16 >>> 0 ? i9 : 16;
   __ZN3WTF6VectorINSt3__110unique_ptrIN7WebCore14UserStyleSheetENS1_14default_deleteIS4_EEEELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i8 >>> 0 > i5 >>> 0 ? i8 : i5);
   i8 = HEAP32[i6 >> 2] | 0;
   i10 = i8 + (i2 - i7 >> 2 << 2) | 0;
   i11 = i8;
   i12 = HEAP32[i3 >> 2] | 0;
   i13 = i10 | 0;
   i14 = HEAP32[i13 >> 2] | 0;
   HEAP32[i13 >> 2] = 0;
   i15 = i11 + (i12 << 2) | 0;
   HEAP32[i15 >> 2] = i14;
   i16 = HEAP32[i3 >> 2] | 0;
   i17 = i16 + 1 | 0;
   HEAP32[i3 >> 2] = i17;
   return;
  }
 } while (0);
 i7 = HEAP32[i1 + 4 >> 2] | 0;
 i4 = i7 + 1 + (i7 >>> 2) | 0;
 i7 = i4 >>> 0 > 16 >>> 0 ? i4 : 16;
 __ZN3WTF6VectorINSt3__110unique_ptrIN7WebCore14UserStyleSheetENS1_14default_deleteIS4_EEEELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i7 >>> 0 > i5 >>> 0 ? i7 : i5);
 i10 = i2;
 i11 = HEAP32[i6 >> 2] | 0;
 i12 = HEAP32[i3 >> 2] | 0;
 i13 = i10 | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 i15 = i11 + (i12 << 2) | 0;
 HEAP32[i15 >> 2] = i14;
 i16 = HEAP32[i3 >> 2] | 0;
 i17 = i16 + 1 | 0;
 HEAP32[i3 >> 2] = i17;
 return;
}
function __ZN7WebCore9PageGroup44invalidateInjectedStyleSheetCacheInAllFramesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 i3 = HEAP32[i1 + 28 >> 2] | 0;
 i4 = i2 + (i3 << 2) | 0;
 if ((HEAP32[i1 + 36 >> 2] | 0) == 0) {
  return;
 }
 L4 : do {
  if ((i3 | 0) == 0) {
   i5 = i2;
  } else {
   i1 = i2;
   while (1) {
    i6 = HEAP32[i1 >> 2] | 0;
    if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
     i5 = i1;
     break L4;
    }
    i1 = i1 + 4 | 0;
    if ((i1 | 0) == (i4 | 0)) {
     break;
    }
   }
   return;
  }
 } while (0);
 if ((i5 | 0) == (i4 | 0)) {
  return;
 } else {
  i7 = i5;
 }
 L12 : while (1) {
  i5 = HEAP32[(HEAP32[i7 >> 2] | 0) + 60 >> 2] | 0;
  if ((i5 | 0) != 0) {
   i2 = i5;
   while (1) {
    i5 = i2 + 456 | 0;
    __ZN7WebCore28DocumentStyleSheetCollection33invalidateInjectedStyleSheetCacheEv((HEAP32[i5 >> 2] | 0) + 772 | 0);
    __ZN7WebCore8Document20styleResolverChangedENS_23StyleResolverUpdateFlagE(HEAP32[i5 >> 2] | 0, 1);
    i2 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i2 + 40 | 0, 0) | 0;
    if ((i2 | 0) == 0) {
     break;
    }
   }
  }
  i2 = i7 + 4 | 0;
  if ((i2 | 0) == (i4 | 0)) {
   i8 = 16;
   break;
  } else {
   i9 = i2;
  }
  while (1) {
   i2 = HEAP32[i9 >> 2] | 0;
   if (!((i2 | 0) == (-1 | 0) | (i2 | 0) == 0)) {
    break;
   }
   i2 = i9 + 4 | 0;
   if ((i2 | 0) == (i4 | 0)) {
    i8 = 18;
    break L12;
   } else {
    i9 = i2;
   }
  }
  if ((i9 | 0) == (i4 | 0)) {
   i8 = 17;
   break;
  } else {
   i7 = i9;
  }
 }
 if ((i8 | 0) == 16) {
  return;
 } else if ((i8 | 0) == 17) {
  return;
 } else if ((i8 | 0) == 18) {
  return;
 }
}
function __ZN3WTF6VectorINSt3__110unique_ptrIN7WebCore10UserScriptENS1_14default_deleteIS4_EEEELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS7_EEvOT_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i4 + 1 | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if (i7 >>> 0 <= i2 >>> 0) {
   if ((i7 + (i4 << 2) | 0) >>> 0 <= i2 >>> 0) {
    break;
   }
   i8 = HEAP32[i1 + 4 >> 2] | 0;
   i9 = i8 + 1 + (i8 >>> 2) | 0;
   i8 = i9 >>> 0 > 16 >>> 0 ? i9 : 16;
   __ZN3WTF6VectorINSt3__110unique_ptrIN7WebCore10UserScriptENS1_14default_deleteIS4_EEEELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i8 >>> 0 > i5 >>> 0 ? i8 : i5);
   i8 = HEAP32[i6 >> 2] | 0;
   i10 = i8 + (i2 - i7 >> 2 << 2) | 0;
   i11 = i8;
   i12 = HEAP32[i3 >> 2] | 0;
   i13 = i10 | 0;
   i14 = HEAP32[i13 >> 2] | 0;
   HEAP32[i13 >> 2] = 0;
   i15 = i11 + (i12 << 2) | 0;
   HEAP32[i15 >> 2] = i14;
   i16 = HEAP32[i3 >> 2] | 0;
   i17 = i16 + 1 | 0;
   HEAP32[i3 >> 2] = i17;
   return;
  }
 } while (0);
 i7 = HEAP32[i1 + 4 >> 2] | 0;
 i4 = i7 + 1 + (i7 >>> 2) | 0;
 i7 = i4 >>> 0 > 16 >>> 0 ? i4 : 16;
 __ZN3WTF6VectorINSt3__110unique_ptrIN7WebCore10UserScriptENS1_14default_deleteIS4_EEEELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i7 >>> 0 > i5 >>> 0 ? i7 : i5);
 i10 = i2;
 i11 = HEAP32[i6 >> 2] | 0;
 i12 = HEAP32[i3 >> 2] | 0;
 i13 = i10 | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 i15 = i11 + (i12 << 2) | 0;
 HEAP32[i15 >> 2] = i14;
 i16 = HEAP32[i3 >> 2] | 0;
 i17 = i16 + 1 | 0;
 HEAP32[i3 >> 2] = i17;
 return;
}
function __ZN7WebCore9PageGroup30removeUserStyleSheetsFromWorldERNS_15DOMWrapperWorldE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i1 + 100 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN3WTF7HashMapINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENSt3__110unique_ptrINS_6VectorINS6_INS2_14UserStyleSheetENS5_14default_deleteIS8_EEEELj0ENS_15CrashOnOverflowEEENS9_ISD_EEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENSI_ISF_EEE4findEPS3_(i4, i5, i2);
 i2 = HEAP32[i4 >> 2] | 0;
 i4 = i5 + 4 | 0;
 if ((i2 | 0) == ((HEAP32[i5 >> 2] | 0) + (HEAP32[i4 >> 2] << 3) | 0)) {
  STACKTOP = i3;
  return;
 }
 __ZN3WTF12KeyValuePairINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENSt3__110unique_ptrINS_6VectorINS6_INS2_14UserStyleSheetENS5_14default_deleteIS8_EEEELj0ENS_15CrashOnOverflowEEENS9_ISD_EEEEED2Ev(i2);
 HEAP32[i2 >> 2] = -1;
 i2 = i5 + 16 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 i2 = i5 + 12 | 0;
 i6 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i6;
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i6 * 6 & -1 | 0) < (i2 | 0) & (i2 | 0) > 8) {
  __ZN3WTF9HashTableINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENS_12KeyValuePairIS4_NSt3__110unique_ptrINS_6VectorINS7_INS2_14UserStyleSheetENS6_14default_deleteIS9_EEEELj0ENS_15CrashOnOverflowEEENSA_ISE_EEEEEENS_24KeyValuePairKeyExtractorISH_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSN_ISG_EEEESO_E6rehashEiPSH_(i5 | 0, (i2 | 0) / 2 & -1, 0) | 0;
 }
 __ZN7WebCore9PageGroup44invalidateInjectedStyleSheetCacheInAllFramesEv(i1);
 STACKTOP = i3;
 return;
}
function __ZN3WTF17HashMapTranslatorINS_22KeyValuePairHashTraitsINS_10HashTraitsINS_6RefPtrIN7WebCore15DOMWrapperWorldEEEEENS2_INSt3__110unique_ptrINS_6VectorINS9_INS4_14UserStyleSheetENS8_14default_deleteISB_EEEELj0ENS_15CrashOnOverflowEEENSC_ISG_EEEEEEEENS_7PtrHashIS6_EEE9translateINS_12KeyValuePairIS6_SI_EERPS5_DnEEvRT_OT0_OT1_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i2 = i3 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 }
 i2 = i1 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i3;
 do {
  if ((i4 | 0) != 0) {
   i3 = i4 | 0;
   i2 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) == 0) {
    __ZN7WebCore15DOMWrapperWorldD1Ev(i4);
    __ZN3WTF8fastFreeEPv(i4);
    break;
   } else {
    HEAP32[i3 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i4 = i1 + 4 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i4 = i1 + 8 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 i3 = i1 | 0;
 if ((i2 | 0) != 0) {
  i5 = HEAP32[i3 >> 2] | 0;
  i6 = i5 + (i2 << 2) | 0;
  i2 = i5;
  while (1) {
   i5 = i2 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    __ZN7WebCore14UserStyleSheetD2Ev(i7);
    __ZN3WTF8fastFreeEPv(i7);
   }
   i2 = i2 + 4 | 0;
   if ((i2 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i4 >> 2] = 0;
 }
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i4);
 }
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore9PageGroup26removeUserScriptsFromWorldERNS_15DOMWrapperWorldE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i1 + 96 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN3WTF7HashMapINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENSt3__110unique_ptrINS_6VectorINS6_INS2_10UserScriptENS5_14default_deleteIS8_EEEELj0ENS_15CrashOnOverflowEEENS9_ISD_EEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENSI_ISF_EEE4findEPS3_(i4, i5, i2);
 i2 = HEAP32[i4 >> 2] | 0;
 i4 = i5 + 4 | 0;
 if ((i2 | 0) == ((HEAP32[i5 >> 2] | 0) + (HEAP32[i4 >> 2] << 3) | 0)) {
  STACKTOP = i3;
  return;
 }
 __ZN3WTF12KeyValuePairINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENSt3__110unique_ptrINS_6VectorINS6_INS2_10UserScriptENS5_14default_deleteIS8_EEEELj0ENS_15CrashOnOverflowEEENS9_ISD_EEEEED2Ev(i2);
 HEAP32[i2 >> 2] = -1;
 i2 = i5 + 16 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 i2 = i5 + 12 | 0;
 i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i1;
 i2 = HEAP32[i4 >> 2] | 0;
 if (!((i1 * 6 & -1 | 0) < (i2 | 0) & (i2 | 0) > 8)) {
  STACKTOP = i3;
  return;
 }
 __ZN3WTF9HashTableINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENS_12KeyValuePairIS4_NSt3__110unique_ptrINS_6VectorINS7_INS2_10UserScriptENS6_14default_deleteIS9_EEEELj0ENS_15CrashOnOverflowEEENSA_ISE_EEEEEENS_24KeyValuePairKeyExtractorISH_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSN_ISG_EEEESO_E6rehashEiPSH_(i5 | 0, (i2 | 0) / 2 & -1, 0) | 0;
 STACKTOP = i3;
 return;
}
function __ZN3WTF17HashMapTranslatorINS_22KeyValuePairHashTraitsINS_10HashTraitsINS_6RefPtrIN7WebCore15DOMWrapperWorldEEEEENS2_INSt3__110unique_ptrINS_6VectorINS9_INS4_10UserScriptENS8_14default_deleteISB_EEEELj0ENS_15CrashOnOverflowEEENSC_ISG_EEEEEEEENS_7PtrHashIS6_EEE9translateINS_12KeyValuePairIS6_SI_EERPS5_DnEEvRT_OT0_OT1_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i2 = i3 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 }
 i2 = i1 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i3;
 do {
  if ((i4 | 0) != 0) {
   i3 = i4 | 0;
   i2 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) == 0) {
    __ZN7WebCore15DOMWrapperWorldD1Ev(i4);
    __ZN3WTF8fastFreeEPv(i4);
    break;
   } else {
    HEAP32[i3 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i4 = i1 + 4 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i4 = i1 + 8 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 i3 = i1 | 0;
 if ((i2 | 0) != 0) {
  i5 = HEAP32[i3 >> 2] | 0;
  i6 = i5 + (i2 << 2) | 0;
  i2 = i5;
  while (1) {
   i5 = i2 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    __ZN7WebCore10UserScriptD2Ev(i7);
    __ZN3WTF8fastFreeEPv(i7);
   }
   i2 = i2 + 4 | 0;
   if ((i2 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i4 >> 2] = 0;
 }
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i4);
 }
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore9PageGroup9pageGroupERKN3WTF6StringE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = HEAP32[H_BASE + 24 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = __ZN3WTF10fastMallocEj(20) | 0;
  i7 = i6;
  _memset(i6 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 24 >> 2] = i7;
  i8 = i7;
 } else {
  i8 = i5;
 }
 HEAP32[i4 >> 2] = 0;
 __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PN7WebCore9PageGroupEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKS1_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S6_S8_S9_SF_SC_EEEEOT0_OT1_(i3, i8 | 0, i1, i4);
 if ((HEAP8[i3 + 8 | 0] & 1) == 0) {
  i9 = HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] | 0;
  STACKTOP = i2;
  return i9 | 0;
 }
 i4 = __ZN3WTF10fastMallocEj(108) | 0;
 i8 = i4;
 _memset(i4 | 0, 0, 20) | 0;
 i5 = HEAP32[i1 >> 2] | 0;
 HEAP32[i4 + 20 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i1 = i5 | 0;
  HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
 }
 _memset(i4 + 24 | 0, 0, 41) | 0;
 i1 = (HEAP32[H_BASE + 8 >> 2] | 0) + 1 | 0;
 HEAP32[H_BASE + 8 >> 2] = i1;
 HEAP32[i4 + 68 >> 2] = i1;
 _memset(i4 + 72 | 0, 0, 32) | 0;
 i1 = __ZN3WTF10fastMallocEj(16) | 0;
 __ZN7WebCore13GroupSettingsC1Ev(i1);
 HEAP32[i4 + 104 >> 2] = i1;
 HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] = i8;
 i9 = i8;
 STACKTOP = i2;
 return i9 | 0;
}
function __ZN7WebCore9PageGroup20removeAllUserContentEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 96 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) != 0) {
  i2 = HEAP32[i3 >> 2] | 0;
  if ((i2 | 0) != 0) {
   i4 = HEAP32[i3 + 4 >> 2] | 0;
   if ((i4 | 0) > 0) {
    i5 = 0;
    while (1) {
     i6 = i2 + (i5 << 3) | 0;
     if ((HEAP32[i6 >> 2] | 0) != -1) {
      __ZN3WTF12KeyValuePairINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENSt3__110unique_ptrINS_6VectorINS6_INS2_10UserScriptENS5_14default_deleteIS8_EEEELj0ENS_15CrashOnOverflowEEENS9_ISD_EEEEED2Ev(i6);
     }
     i5 = i5 + 1 | 0;
     if ((i5 | 0) >= (i4 | 0)) {
      break;
     }
    }
   }
   __ZN3WTF8fastFreeEPv(i2);
  }
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = i1 + 100 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i3 >> 2] = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i5 = 0;
   while (1) {
    i6 = i3 + (i5 << 3) | 0;
    if ((HEAP32[i6 >> 2] | 0) != -1) {
     __ZN3WTF12KeyValuePairINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENSt3__110unique_ptrINS_6VectorINS6_INS2_14UserStyleSheetENS5_14default_deleteIS8_EEEELj0ENS_15CrashOnOverflowEEENS9_ISD_EEEEED2Ev(i6);
    }
    i5 = i5 + 1 | 0;
    if ((i5 | 0) >= (i4 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i3);
 }
 __ZN3WTF8fastFreeEPv(i2);
 __ZN7WebCore9PageGroup44invalidateInjectedStyleSheetCacheInAllFramesEv(i1);
 return;
}
function __ZN7WebCore9PageGroup26clearLocalStorageForOriginEPNS_14SecurityOriginE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = HEAP32[H_BASE + 24 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = HEAP32[i2 + 4 >> 2] | 0;
 i5 = i3 + (i4 << 3) | 0;
 if ((HEAP32[i2 + 12 >> 2] | 0) == 0) {
  return;
 }
 L7 : do {
  if ((i4 | 0) == 0) {
   i6 = i3;
  } else {
   i2 = i3;
   while (1) {
    i7 = HEAP32[i2 >> 2] | 0;
    if (!((i7 | 0) == (-1 | 0) | (i7 | 0) == 0)) {
     i6 = i2;
     break L7;
    }
    i2 = i2 + 8 | 0;
    if ((i2 | 0) == (i5 | 0)) {
     break;
    }
   }
   return;
  }
 } while (0);
 if ((i6 | 0) == (i5 | 0)) {
  return;
 } else {
  i8 = i6;
 }
 L15 : while (1) {
  i6 = (HEAP32[i8 + 4 >> 2] | 0) + 72 | 0;
  if ((HEAP32[i6 >> 2] | 0) != 0) {
   i3 = HEAP32[i6 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 20 >> 2] & 7](i3, i1);
  }
  i3 = i8 + 8 | 0;
  if ((i3 | 0) == (i5 | 0)) {
   i9 = 18;
   break;
  } else {
   i10 = i3;
  }
  while (1) {
   i3 = HEAP32[i10 >> 2] | 0;
   if (!((i3 | 0) == (-1 | 0) | (i3 | 0) == 0)) {
    break;
   }
   i3 = i10 + 8 | 0;
   if ((i3 | 0) == (i5 | 0)) {
    i9 = 20;
    break L15;
   } else {
    i10 = i3;
   }
  }
  if ((i10 | 0) == (i5 | 0)) {
   i9 = 19;
   break;
  } else {
   i8 = i10;
  }
 }
 if ((i9 | 0) == 18) {
  return;
 } else if ((i9 | 0) == 19) {
  return;
 } else if ((i9 | 0) == 20) {
  return;
 }
}
function __ZN7WebCore9PageGroup30closeIdleLocalStorageDatabasesEv() {
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i1 = HEAP32[H_BASE + 24 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i2 = HEAP32[i1 >> 2] | 0;
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 i4 = i2 + (i3 << 3) | 0;
 if ((HEAP32[i1 + 12 >> 2] | 0) == 0) {
  return;
 }
 L7 : do {
  if ((i3 | 0) == 0) {
   i5 = i2;
  } else {
   i1 = i2;
   while (1) {
    i6 = HEAP32[i1 >> 2] | 0;
    if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
     i5 = i1;
     break L7;
    }
    i1 = i1 + 8 | 0;
    if ((i1 | 0) == (i4 | 0)) {
     break;
    }
   }
   return;
  }
 } while (0);
 if ((i5 | 0) == (i4 | 0)) {
  return;
 } else {
  i7 = i5;
 }
 L15 : while (1) {
  i5 = (HEAP32[i7 + 4 >> 2] | 0) + 72 | 0;
  if ((HEAP32[i5 >> 2] | 0) != 0) {
   i2 = HEAP32[i5 >> 2] | 0;
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 32 >> 2] & 3](i2);
  }
  i2 = i7 + 8 | 0;
  if ((i2 | 0) == (i4 | 0)) {
   i8 = 18;
   break;
  } else {
   i9 = i2;
  }
  while (1) {
   i2 = HEAP32[i9 >> 2] | 0;
   if (!((i2 | 0) == (-1 | 0) | (i2 | 0) == 0)) {
    break;
   }
   i2 = i9 + 8 | 0;
   if ((i2 | 0) == (i4 | 0)) {
    i8 = 20;
    break L15;
   } else {
    i9 = i2;
   }
  }
  if ((i9 | 0) == (i4 | 0)) {
   i8 = 19;
   break;
  } else {
   i7 = i9;
  }
 }
 if ((i8 | 0) == 20) {
  return;
 } else if ((i8 | 0) == 19) {
  return;
 } else if ((i8 | 0) == 18) {
  return;
 }
}
function __ZN7WebCore9PageGroup30clearLocalStorageForAllOriginsEv() {
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i1 = HEAP32[H_BASE + 24 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i2 = HEAP32[i1 >> 2] | 0;
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 i4 = i2 + (i3 << 3) | 0;
 if ((HEAP32[i1 + 12 >> 2] | 0) == 0) {
  return;
 }
 L7 : do {
  if ((i3 | 0) == 0) {
   i5 = i2;
  } else {
   i1 = i2;
   while (1) {
    i6 = HEAP32[i1 >> 2] | 0;
    if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
     i5 = i1;
     break L7;
    }
    i1 = i1 + 8 | 0;
    if ((i1 | 0) == (i4 | 0)) {
     break;
    }
   }
   return;
  }
 } while (0);
 if ((i5 | 0) == (i4 | 0)) {
  return;
 } else {
  i7 = i5;
 }
 L15 : while (1) {
  i5 = (HEAP32[i7 + 4 >> 2] | 0) + 72 | 0;
  if ((HEAP32[i5 >> 2] | 0) != 0) {
   i2 = HEAP32[i5 >> 2] | 0;
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 24 >> 2] & 3](i2);
  }
  i2 = i7 + 8 | 0;
  if ((i2 | 0) == (i4 | 0)) {
   i8 = 18;
   break;
  } else {
   i9 = i2;
  }
  while (1) {
   i2 = HEAP32[i9 >> 2] | 0;
   if (!((i2 | 0) == (-1 | 0) | (i2 | 0) == 0)) {
    break;
   }
   i2 = i9 + 8 | 0;
   if ((i2 | 0) == (i4 | 0)) {
    i8 = 20;
    break L15;
   } else {
    i9 = i2;
   }
  }
  if ((i9 | 0) == (i4 | 0)) {
   i8 = 19;
   break;
  } else {
   i7 = i9;
  }
 }
 if ((i8 | 0) == 18) {
  return;
 } else if ((i8 | 0) == 19) {
  return;
 } else if ((i8 | 0) == 20) {
  return;
 }
}
function __ZN7WebCore9PageGroup17closeLocalStorageEv() {
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i1 = HEAP32[H_BASE + 24 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i2 = HEAP32[i1 >> 2] | 0;
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 i4 = i2 + (i3 << 3) | 0;
 if ((HEAP32[i1 + 12 >> 2] | 0) == 0) {
  return;
 }
 L7 : do {
  if ((i3 | 0) == 0) {
   i5 = i2;
  } else {
   i1 = i2;
   while (1) {
    i6 = HEAP32[i1 >> 2] | 0;
    if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
     i5 = i1;
     break L7;
    }
    i1 = i1 + 8 | 0;
    if ((i1 | 0) == (i4 | 0)) {
     break;
    }
   }
   return;
  }
 } while (0);
 if ((i5 | 0) == (i4 | 0)) {
  return;
 } else {
  i7 = i5;
 }
 L15 : while (1) {
  i5 = (HEAP32[i7 + 4 >> 2] | 0) + 72 | 0;
  if ((HEAP32[i5 >> 2] | 0) != 0) {
   i2 = HEAP32[i5 >> 2] | 0;
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 3](i2);
  }
  i2 = i7 + 8 | 0;
  if ((i2 | 0) == (i4 | 0)) {
   i8 = 18;
   break;
  } else {
   i9 = i2;
  }
  while (1) {
   i2 = HEAP32[i9 >> 2] | 0;
   if (!((i2 | 0) == (-1 | 0) | (i2 | 0) == 0)) {
    break;
   }
   i2 = i9 + 8 | 0;
   if ((i2 | 0) == (i4 | 0)) {
    i8 = 20;
    break L15;
   } else {
    i9 = i2;
   }
  }
  if ((i9 | 0) == (i4 | 0)) {
   i8 = 19;
   break;
  } else {
   i7 = i9;
  }
 }
 if ((i8 | 0) == 18) {
  return;
 } else if ((i8 | 0) == 19) {
  return;
 } else if ((i8 | 0) == 20) {
  return;
 }
}
function __ZN7WebCore9PageGroup16syncLocalStorageEv() {
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i1 = HEAP32[H_BASE + 24 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i2 = HEAP32[i1 >> 2] | 0;
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 i4 = i2 + (i3 << 3) | 0;
 if ((HEAP32[i1 + 12 >> 2] | 0) == 0) {
  return;
 }
 L7 : do {
  if ((i3 | 0) == 0) {
   i5 = i2;
  } else {
   i1 = i2;
   while (1) {
    i6 = HEAP32[i1 >> 2] | 0;
    if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
     i5 = i1;
     break L7;
    }
    i1 = i1 + 8 | 0;
    if ((i1 | 0) == (i4 | 0)) {
     break;
    }
   }
   return;
  }
 } while (0);
 if ((i5 | 0) == (i4 | 0)) {
  return;
 } else {
  i7 = i5;
 }
 L15 : while (1) {
  i5 = (HEAP32[i7 + 4 >> 2] | 0) + 72 | 0;
  if ((HEAP32[i5 >> 2] | 0) != 0) {
   i2 = HEAP32[i5 >> 2] | 0;
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 28 >> 2] & 3](i2);
  }
  i2 = i7 + 8 | 0;
  if ((i2 | 0) == (i4 | 0)) {
   i8 = 19;
   break;
  } else {
   i9 = i2;
  }
  while (1) {
   i2 = HEAP32[i9 >> 2] | 0;
   if (!((i2 | 0) == (-1 | 0) | (i2 | 0) == 0)) {
    break;
   }
   i2 = i9 + 8 | 0;
   if ((i2 | 0) == (i4 | 0)) {
    i8 = 17;
    break L15;
   } else {
    i9 = i2;
   }
  }
  if ((i9 | 0) == (i4 | 0)) {
   i8 = 20;
   break;
  } else {
   i7 = i9;
  }
 }
 if ((i8 | 0) == 19) {
  return;
 } else if ((i8 | 0) == 20) {
  return;
 } else if ((i8 | 0) == 17) {
  return;
 }
}
function __ZN3WTF12KeyValuePairINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENSt3__110unique_ptrINS_6VectorINS6_INS2_14UserStyleSheetENS5_14default_deleteIS8_EEEELj0ENS_15CrashOnOverflowEEENS9_ISD_EEEEED2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 + 4 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) != 0) {
  i2 = i3 + 8 | 0;
  i4 = HEAP32[i2 >> 2] | 0;
  i5 = i3 | 0;
  if ((i4 | 0) != 0) {
   i6 = HEAP32[i5 >> 2] | 0;
   i7 = i6 + (i4 << 2) | 0;
   i4 = i6;
   while (1) {
    i6 = i4 | 0;
    i8 = HEAP32[i6 >> 2] | 0;
    HEAP32[i6 >> 2] = 0;
    if ((i8 | 0) != 0) {
     __ZN7WebCore14UserStyleSheetD2Ev(i8);
     __ZN3WTF8fastFreeEPv(i8);
    }
    i4 = i4 + 4 | 0;
    if ((i4 | 0) == (i7 | 0)) {
     break;
    }
   }
   HEAP32[i2 >> 2] = 0;
  }
  i2 = HEAP32[i5 >> 2] | 0;
  if ((i2 | 0) != 0) {
   HEAP32[i5 >> 2] = 0;
   HEAP32[i3 + 4 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i2);
  }
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = i3 | 0;
 i2 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) == 0) {
  __ZN7WebCore15DOMWrapperWorldD1Ev(i3);
  __ZN3WTF8fastFreeEPv(i3);
  return;
 } else {
  HEAP32[i1 >> 2] = i2;
  return;
 }
}
function __ZN3WTF12KeyValuePairINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENSt3__110unique_ptrINS_6VectorINS6_INS2_10UserScriptENS5_14default_deleteIS8_EEEELj0ENS_15CrashOnOverflowEEENS9_ISD_EEEEED2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 + 4 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) != 0) {
  i2 = i3 + 8 | 0;
  i4 = HEAP32[i2 >> 2] | 0;
  i5 = i3 | 0;
  if ((i4 | 0) != 0) {
   i6 = HEAP32[i5 >> 2] | 0;
   i7 = i6 + (i4 << 2) | 0;
   i4 = i6;
   while (1) {
    i6 = i4 | 0;
    i8 = HEAP32[i6 >> 2] | 0;
    HEAP32[i6 >> 2] = 0;
    if ((i8 | 0) != 0) {
     __ZN7WebCore10UserScriptD2Ev(i8);
     __ZN3WTF8fastFreeEPv(i8);
    }
    i4 = i4 + 4 | 0;
    if ((i4 | 0) == (i7 | 0)) {
     break;
    }
   }
   HEAP32[i2 >> 2] = 0;
  }
  i2 = HEAP32[i5 >> 2] | 0;
  if ((i2 | 0) != 0) {
   HEAP32[i5 >> 2] = 0;
   HEAP32[i3 + 4 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i2);
  }
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = i3 | 0;
 i2 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) == 0) {
  __ZN7WebCore15DOMWrapperWorldD1Ev(i3);
  __ZN3WTF8fastFreeEPv(i3);
  return;
 } else {
  HEAP32[i1 >> 2] = i2;
  return;
 }
}
function __ZN7WebCore9PageGroup12localStorageEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 72 | 0;
 do {
  if ((HEAP32[i4 >> 2] | 0) == 0) {
   __ZN7WebCore16StorageNamespace21localStorageNamespaceEPNS_9PageGroupE(i3, i1);
   i5 = i3 | 0;
   i6 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   i7 = HEAP32[i4 >> 2] | 0;
   HEAP32[i4 >> 2] = i6;
   do {
    if ((i7 | 0) != 0) {
     i6 = i7 + 4 | 0;
     i8 = i6 | 0;
     i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     if ((i9 | 0) != 0) {
      HEAP32[i8 >> 2] = i9;
      break;
     }
     i9 = i6 - 4 | 0;
     if ((i9 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 3](i9);
    }
   } while (0);
   i7 = HEAP32[i5 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   i9 = i7 + 4 | 0;
   i7 = i9 | 0;
   i6 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i7 >> 2] = i6;
    break;
   }
   i6 = i9 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 3](i6);
  }
 } while (0);
 STACKTOP = i2;
 return HEAP32[i4 >> 2] | 0;
}
function __ZN3WTF6VectorINSt3__110unique_ptrIN7WebCore14UserStyleSheetENS1_14default_deleteIS4_EEEELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i5;
 i7 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i5 + (i7 << 2) | 0;
 if (i2 >>> 0 > 1073741823 >>> 0) {
  _WTFCrash();
 }
 i8 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 2) | 0;
 HEAP32[i3 >> 2] = i8 >>> 2;
 i2 = __ZN3WTF10fastMallocEj(i8) | 0;
 HEAP32[i4 >> 2] = i2;
 if ((i7 | 0) != 0) {
  i7 = i5;
  i8 = i2;
  while (1) {
   i2 = i7 | 0;
   i9 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   HEAP32[i8 >> 2] = i9;
   i9 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   if ((i9 | 0) != 0) {
    __ZN7WebCore14UserStyleSheetD2Ev(i9);
    __ZN3WTF8fastFreeEPv(i9);
   }
   i9 = i7 + 4 | 0;
   if ((i9 | 0) == (i1 | 0)) {
    break;
   } else {
    i7 = i9;
    i8 = i8 + 4 | 0;
   }
  }
 }
 if ((i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i6);
 return;
}
function __ZN3WTF6VectorINSt3__110unique_ptrIN7WebCore10UserScriptENS1_14default_deleteIS4_EEEELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i5;
 i7 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i5 + (i7 << 2) | 0;
 if (i2 >>> 0 > 1073741823 >>> 0) {
  _WTFCrash();
 }
 i8 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 2) | 0;
 HEAP32[i3 >> 2] = i8 >>> 2;
 i2 = __ZN3WTF10fastMallocEj(i8) | 0;
 HEAP32[i4 >> 2] = i2;
 if ((i7 | 0) != 0) {
  i7 = i5;
  i8 = i2;
  while (1) {
   i2 = i7 | 0;
   i9 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   HEAP32[i8 >> 2] = i9;
   i9 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   if ((i9 | 0) != 0) {
    __ZN7WebCore10UserScriptD2Ev(i9);
    __ZN3WTF8fastFreeEPv(i9);
   }
   i9 = i7 + 4 | 0;
   if ((i9 | 0) == (i1 | 0)) {
    break;
   } else {
    i7 = i9;
    i8 = i8 + 4 | 0;
   }
  }
 }
 if ((i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i6);
 return;
}
function __ZN3WTF11VectorMoverILb0ENSt3__110unique_ptrIN7WebCore14UserStyleSheetENS1_14default_deleteIS4_EEEEE15moveOverlappingEPS7_S9_S9_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 if (i1 >>> 0 > i3 >>> 0) {
  if ((i1 | 0) == (i2 | 0)) {
   return;
  } else {
   i4 = i1;
   i5 = i3;
  }
  while (1) {
   i6 = i4 | 0;
   i7 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = 0;
   HEAP32[i5 >> 2] = i7;
   i7 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = 0;
   if ((i7 | 0) != 0) {
    __ZN7WebCore14UserStyleSheetD2Ev(i7);
    __ZN3WTF8fastFreeEPv(i7);
   }
   i7 = i4 + 4 | 0;
   if ((i7 | 0) == (i2 | 0)) {
    break;
   } else {
    i4 = i7;
    i5 = i5 + 4 | 0;
   }
  }
  return;
 }
 if ((i2 | 0) == (i1 | 0)) {
  return;
 }
 i5 = i2;
 i4 = i3 + (i2 - i1 >> 2 << 2) | 0;
 while (1) {
  i5 = i5 - 4 | 0;
  i4 = i4 - 4 | 0;
  i2 = i5 | 0;
  i3 = HEAP32[i2 >> 2] | 0;
  HEAP32[i2 >> 2] = 0;
  HEAP32[i4 >> 2] = i3;
  i3 = HEAP32[i2 >> 2] | 0;
  HEAP32[i2 >> 2] = 0;
  if ((i3 | 0) != 0) {
   __ZN7WebCore14UserStyleSheetD2Ev(i3);
   __ZN3WTF8fastFreeEPv(i3);
  }
  if ((i5 | 0) == (i1 | 0)) {
   break;
  }
 }
 return;
}
function __ZN3WTF11VectorMoverILb0ENSt3__110unique_ptrIN7WebCore10UserScriptENS1_14default_deleteIS4_EEEEE15moveOverlappingEPS7_S9_S9_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 if (i1 >>> 0 > i3 >>> 0) {
  if ((i1 | 0) == (i2 | 0)) {
   return;
  } else {
   i4 = i1;
   i5 = i3;
  }
  while (1) {
   i6 = i4 | 0;
   i7 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = 0;
   HEAP32[i5 >> 2] = i7;
   i7 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = 0;
   if ((i7 | 0) != 0) {
    __ZN7WebCore10UserScriptD2Ev(i7);
    __ZN3WTF8fastFreeEPv(i7);
   }
   i7 = i4 + 4 | 0;
   if ((i7 | 0) == (i2 | 0)) {
    break;
   } else {
    i4 = i7;
    i5 = i5 + 4 | 0;
   }
  }
  return;
 }
 if ((i2 | 0) == (i1 | 0)) {
  return;
 }
 i5 = i2;
 i4 = i3 + (i2 - i1 >> 2 << 2) | 0;
 while (1) {
  i5 = i5 - 4 | 0;
  i4 = i4 - 4 | 0;
  i2 = i5 | 0;
  i3 = HEAP32[i2 >> 2] | 0;
  HEAP32[i2 >> 2] = 0;
  HEAP32[i4 >> 2] = i3;
  i3 = HEAP32[i2 >> 2] | 0;
  HEAP32[i2 >> 2] = 0;
  if ((i3 | 0) != 0) {
   __ZN7WebCore10UserScriptD2Ev(i3);
   __ZN3WTF8fastFreeEPv(i3);
  }
  if ((i5 | 0) == (i1 | 0)) {
   break;
  }
 }
 return;
}
function __ZN7WebCore14SecurityOriginD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i4 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i4;
  return;
 }
}
function __ZN7WebCore9PageGroup14addVisitedLinkEPKtj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 if ((HEAP8[H_BASE + 16 | 0] & 1) == 0) {
  STACKTOP = i4;
  return;
 }
 i7 = __ZN7WebCore15visitedLinkHashEPKtj(i2, i3) | 0;
 HEAP32[i5 >> 2] = i7;
 HEAP32[i5 + 4 >> 2] = tempRet0;
 __ZN3WTF9HashTableIyyNS_17IdentityExtractorEN7WebCore12LinkHashHashENS_10HashTraitsIyEES5_E3addINS_22IdentityHashTranslatorIS3_EERKySB_EENS_18HashTableAddResultINS_17HashTableIteratorIyyS1_S3_S5_S5_EEEEOT0_OT1_(i6, i1 + 44 | 0, i5, i5);
 if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Page19visitedStateChangedEPNS_9PageGroupEy(i1, HEAP32[i5 >> 2] | 0, HEAP32[i5 + 4 >> 2] | 0);
 __ZN7WebCore9PageCache33markPagesForVistedLinkStyleRecalcEv(__ZN7WebCore9pageCacheEv() | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore9PageGroup14addVisitedLinkERKNS_3URLE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 if ((HEAP8[H_BASE + 16 | 0] & 1) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = __ZN7WebCore15visitedLinkHashERKN3WTF6StringE(i2 | 0) | 0;
 HEAP32[i4 >> 2] = i6;
 HEAP32[i4 + 4 >> 2] = tempRet0;
 __ZN3WTF9HashTableIyyNS_17IdentityExtractorEN7WebCore12LinkHashHashENS_10HashTraitsIyEES5_E3addINS_22IdentityHashTranslatorIS3_EERKySB_EENS_18HashTableAddResultINS_17HashTableIteratorIyyS1_S3_S5_S5_EEEEOT0_OT1_(i5, i1 + 44 | 0, i4, i4);
 if ((HEAP8[i5 + 8 | 0] & 1) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Page19visitedStateChangedEPNS_9PageGroupEy(i1, HEAP32[i4 >> 2] | 0, HEAP32[i4 + 4 >> 2] | 0);
 __ZN7WebCore9PageCache33markPagesForVistedLinkStyleRecalcEv(__ZN7WebCore9pageCacheEv() | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore9PageGroup18addVisitedLinkHashEy(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 if ((HEAP8[H_BASE + 16 | 0] & 1) == 0) {
  STACKTOP = i4;
  return;
 }
 HEAP32[i5 >> 2] = i2;
 HEAP32[i5 + 4 >> 2] = i3;
 __ZN3WTF9HashTableIyyNS_17IdentityExtractorEN7WebCore12LinkHashHashENS_10HashTraitsIyEES5_E3addINS_22IdentityHashTranslatorIS3_EERKySB_EENS_18HashTableAddResultINS_17HashTableIteratorIyyS1_S3_S5_S5_EEEEOT0_OT1_(i6, i1 + 44 | 0, i5, i5);
 if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Page19visitedStateChangedEPNS_9PageGroupEy(i1, HEAP32[i5 >> 2] | 0, HEAP32[i5 + 4 >> 2] | 0);
 __ZN7WebCore9PageCache33markPagesForVistedLinkStyleRecalcEv(__ZN7WebCore9pageCacheEv() | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore9PageGroupC2ERNS_4PageE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 _memset(i1 | 0, 0, 65) | 0;
 i5 = (HEAP32[H_BASE + 8 >> 2] | 0) + 1 | 0;
 HEAP32[H_BASE + 8 >> 2] = i5;
 HEAP32[i1 + 68 >> 2] = i5;
 _memset(i1 + 72 | 0, 0, 32) | 0;
 i5 = __ZN3WTF10fastMallocEj(16) | 0;
 __ZN7WebCore13GroupSettingsC1Ev(i5);
 HEAP32[i1 + 104 >> 2] = i5;
 HEAP32[i4 >> 2] = i2;
 __ZN3WTF9HashTableIPN7WebCore4PageES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i3 + 8 | 0, i1 + 24 | 0, i4, i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore9PageGroupC1ERNS_4PageE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 _memset(i1 | 0, 0, 65) | 0;
 i5 = (HEAP32[H_BASE + 8 >> 2] | 0) + 1 | 0;
 HEAP32[H_BASE + 8 >> 2] = i5;
 HEAP32[i1 + 68 >> 2] = i5;
 _memset(i1 + 72 | 0, 0, 32) | 0;
 i5 = __ZN3WTF10fastMallocEj(16) | 0;
 __ZN7WebCore13GroupSettingsC1Ev(i5);
 HEAP32[i1 + 104 >> 2] = i5;
 HEAP32[i4 >> 2] = i2;
 __ZN3WTF9HashTableIPN7WebCore4PageES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i3 + 8 | 0, i1 + 24 | 0, i4, i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore9PageGroup17removeVisitedLinkERKNS_3URLE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = __ZN7WebCore15visitedLinkHashERKN3WTF6StringE(i2 | 0) | 0;
 HEAP32[i4 >> 2] = i5;
 HEAP32[i4 + 4 >> 2] = tempRet0;
 __ZN3WTF7HashSetIyN7WebCore12LinkHashHashENS_10HashTraitsIyEEE6removeERKy(i1 + 44 | 0, i4) | 0;
 __ZN7WebCore4Page22allVisitedStateChangedEPNS_9PageGroupE(i1);
 __ZN7WebCore9PageCache33markPagesForVistedLinkStyleRecalcEv(__ZN7WebCore9pageCacheEv() | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore9PageGroupC2ERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 _memset(i1 | 0, 0, 20) | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 + 20 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i2 = i3 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 _memset(i1 + 24 | 0, 0, 41) | 0;
 i2 = (HEAP32[H_BASE + 8 >> 2] | 0) + 1 | 0;
 HEAP32[H_BASE + 8 >> 2] = i2;
 HEAP32[i1 + 68 >> 2] = i2;
 _memset(i1 + 72 | 0, 0, 32) | 0;
 i2 = __ZN3WTF10fastMallocEj(16) | 0;
 __ZN7WebCore13GroupSettingsC1Ev(i2);
 HEAP32[i1 + 104 >> 2] = i2;
 return;
}
function __ZN7WebCore9PageGroupC1ERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 _memset(i1 | 0, 0, 20) | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 + 20 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i2 = i3 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 _memset(i1 + 24 | 0, 0, 41) | 0;
 i2 = (HEAP32[H_BASE + 8 >> 2] | 0) + 1 | 0;
 HEAP32[H_BASE + 8 >> 2] = i2;
 HEAP32[i1 + 68 >> 2] = i2;
 _memset(i1 + 72 | 0, 0, 32) | 0;
 i2 = __ZN3WTF10fastMallocEj(16) | 0;
 __ZN7WebCore13GroupSettingsC1Ev(i2);
 HEAP32[i1 + 104 >> 2] = i2;
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
function __ZN7WebCore9PageGroup7addPageERNS_4PageE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i2;
 __ZN3WTF9HashTableIPN7WebCore4PageES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i3 + 8 | 0, i1 + 24 | 0, i4, i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore9PageGroup18removeVisitedLinksEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP8[i1 + 64 | 0] = 0;
 i2 = i1 + 44 | 0;
 if ((HEAP32[i1 + 56 >> 2] | 0) == 0) {
  return;
 }
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i3);
  _memset(i2 | 0, 0, 16) | 0;
 }
 __ZN7WebCore4Page22allVisitedStateChangedEPNS_9PageGroupE(i1);
 __ZN7WebCore9PageCache33markPagesForVistedLinkStyleRecalcEv(__ZN7WebCore9pageCacheEv() | 0);
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
function __ZN7WebCore9PageGroup26setShouldTrackVisitedLinksEb(i1) {
 i1 = i1 | 0;
 if ((HEAP8[H_BASE + 16 | 0] & 1 | 0) == (i1 & 1 | 0)) {
  return;
 }
 HEAP8[H_BASE + 16 | 0] = i1 & 1;
 if (i1) {
  return;
 }
 __ZN7WebCore4Page21removeAllVisitedLinksEv();
 __ZN7WebCore9PageCache33markPagesForVistedLinkStyleRecalcEv(__ZN7WebCore9pageCacheEv() | 0);
 return;
}
function __ZN7WebCore9PageGroup10removePageERNS_4PageE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i2;
 __ZN3WTF7HashSetIPN7WebCore4PageENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1 + 24 | 0, i4) | 0;
 STACKTOP = i3;
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore9PageGroup18numberOfPageGroupsEv() {
 var i1 = 0, i2 = 0;
 i1 = HEAP32[H_BASE + 24 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 return i2 | 0;
}
function __ZN7WebCore9PageGroup21removeAllVisitedLinksEv() {
 __ZN7WebCore4Page21removeAllVisitedLinksEv();
 __ZN7WebCore9PageCache33markPagesForVistedLinkStyleRecalcEv(__ZN7WebCore9pageCacheEv() | 0);
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
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 3](i2 | 0);
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
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore9PageGroupD2Ev,b0];
  var FUNCTION_TABLE_vii = [b1,b1,__ZN7WebCore9PageGroupC2ERNS_4PageE,b1,__ZN7WebCore9PageGroupC2ERKN3WTF6StringE,b1,b1,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_iii = [b4,b4];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN3WTF6VectorINSt3__110unique_ptrIN7WebCore14UserStyleSheetENS1_14default_deleteIS4_EEEELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS7_EEvOT_","__ZN3WTF9HashTableIPN7WebCore4PageES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_","__ZN3WTF7HashSetIyN7WebCore12LinkHashHashENS_10HashTraitsIyEEE6removeERKy","__ZN7WebCore9PageGroup21removeAllVisitedLinksEv","__ZN3WTF6VectorINSt3__110unique_ptrIN7WebCore10UserScriptENS1_14default_deleteIS4_EEEELj0ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN3WTF7HashSetIPN7WebCore4PageENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_","__ZN7WebCore9PageGroup9pageGroupERKN3WTF6StringE","__ZN3WTF9HashTableINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENS_12KeyValuePairIS4_NSt3__110unique_ptrINS_6VectorINS7_INS2_10UserScriptENS6_14default_deleteIS9_EEEELj0ENS_15CrashOnOverflowEEENSA_ISE_EEEEEENS_24KeyValuePairKeyExtractorISH_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSN_ISG_EEEESO_E8reinsertEOSH_","__ZN7WebCore9PageGroup20removeAllUserContentEv","__ZN7WebCore9PageGroup30removeUserStyleSheetsFromWorldERNS_15DOMWrapperWorldE","__ZN3WTF9HashTableINS_6RefPtrIN7WebCore14SecurityOriginEEENS_12KeyValuePairIS4_NS1_INS2_16StorageNamespaceEEEEENS_24KeyValuePairKeyExtractorIS8_EENS2_18SecurityOriginHashENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSD_IS7_EEEESE_E6expandEPS8_","__ZN3WTF6VectorINSt3__110unique_ptrIN7WebCore14UserStyleSheetENS1_14default_deleteIS4_EEEELj0ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN7WebCore14UserStyleSheetD2Ev","__ZN3WTF9HashTableINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENS_12KeyValuePairIS4_NSt3__110unique_ptrINS_6VectorINS7_INS2_10UserScriptENS6_14default_deleteIS9_EEEELj0ENS_15CrashOnOverflowEEENSA_ISE_EEEEEENS_24KeyValuePairKeyExtractorISH_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSN_ISG_EEEESO_E6rehashEiPSH_","_memcpy","__ZN7WebCore9PageGroup21transientLocalStorageEPNS_14SecurityOriginE","__ZN3WTF9HashTableINS_6RefPtrIN7WebCore14SecurityOriginEEENS_12KeyValuePairIS4_NS1_INS2_16StorageNamespaceEEEEENS_24KeyValuePairKeyExtractorIS8_EENS2_18SecurityOriginHashENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSD_IS7_EEEESE_E3addINS_17HashMapTranslatorISG_SB_EERPS3_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS4_S8_SA_SB_SG_SE_EEEEOT0_OT1_","__ZN7WebCore9PageGroup30clearLocalStorageForAllOriginsEv","__ZN7WebCore9PageGroup26clearLocalStorageForOriginEPNS_14SecurityOriginE","__ZN7WebCore9PageGroup18removeVisitedLinksEv","__ZN7WebCore18SecurityOriginHash4hashEPNS_14SecurityOriginE","__ZN7WebCore9PageGroup44invalidateInjectedStyleSheetCacheInAllFramesEv","__ZN7WebCore9PageGroup26removeUserScriptsFromWorldERNS_15DOMWrapperWorldE","__ZN3WTF7HashMapINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENSt3__110unique_ptrINS_6VectorINS6_INS2_14UserStyleSheetENS5_14default_deleteIS8_EEEELj0ENS_15CrashOnOverflowEEENS9_ISD_EEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENSI_ISF_EEE4findEPS3_","_memset","__ZN7WebCore9PageGroup12localStorageEv","__ZN3WTF12KeyValuePairINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENSt3__110unique_ptrINS_6VectorINS6_INS2_10UserScriptENS5_14default_deleteIS8_EEEELj0ENS_15CrashOnOverflowEEENS9_ISD_EEEEED2Ev","__ZN3WTF7HashMapINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENSt3__110unique_ptrINS_6VectorINS6_INS2_10UserScriptENS5_14default_deleteIS8_EEEELj0ENS_15CrashOnOverflowEEENS9_ISD_EEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENSI_ISF_EEE4findEPS3_","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PN7WebCore9PageGroupEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E6rehashEiPS6_","__ZN3WTF17HashMapTranslatorINS_22KeyValuePairHashTraitsINS_10HashTraitsINS_6RefPtrIN7WebCore15DOMWrapperWorldEEEEENS2_INSt3__110unique_ptrINS_6VectorINS9_INS4_10UserScriptENS8_14default_deleteISB_EEEELj0ENS_15CrashOnOverflowEEENSC_ISG_EEEEEEEENS_7PtrHashIS6_EEE9translateINS_12KeyValuePairIS6_SI_EERPS5_DnEEvRT_OT0_OT1_","__ZN7WebCore9PageGroup16syncLocalStorageEv","__ZN7WebCore9PageGroup13isLinkVisitedEy","__ZN7WebCore9PageGroupC2ERKN3WTF6StringE","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN3WTF9HashTableIPN7WebCore4PageES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_","__ZN3WTF9HashTableINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENS_12KeyValuePairIS4_NSt3__110unique_ptrINS_6VectorINS7_INS2_10UserScriptENS6_14default_deleteIS9_EEEELj0ENS_15CrashOnOverflowEEENSA_ISE_EEEEEENS_24KeyValuePairKeyExtractorISH_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSN_ISG_EEEESO_E3addINS_17HashMapTranslatorISQ_SL_EERPS3_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS4_SH_SJ_SL_SQ_SO_EEEEOT0_OT1_","__ZN7WebCore9PageGroup10removePageERNS_4PageE","__ZN7WebCore9PageGroup29removeUserStyleSheetFromWorldERNS_15DOMWrapperWorldERKNS_3URLE","__ZN7WebCore9PageGroup24addUserStyleSheetToWorldERNS_15DOMWrapperWorldERKN3WTF6StringERKNS_3URLERKNS3_6VectorIS4_Lj0ENS3_15CrashOnOverflowEEESE_NS_25UserContentInjectedFramesENS_14UserStyleLevelENS_22UserStyleInjectionTimeE","__ZN7WebCore9PageGroup18numberOfPageGroupsEv","__ZN3WTF9HashTableINS_6RefPtrIN7WebCore14SecurityOriginEEENS_12KeyValuePairIS4_NS1_INS2_16StorageNamespaceEEEEENS_24KeyValuePairKeyExtractorIS8_EENS2_18SecurityOriginHashENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSD_IS7_EEEESE_E8reinsertEOS8_","__ZN7WebCore10UserScriptD2Ev","__ZN7WebCore9PageGroup30closeIdleLocalStorageDatabasesEv","__ZN3WTF9HashTableINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENS_12KeyValuePairIS4_NSt3__110unique_ptrINS_6VectorINS7_INS2_14UserStyleSheetENS6_14default_deleteIS9_EEEELj0ENS_15CrashOnOverflowEEENSA_ISE_EEEEEENS_24KeyValuePairKeyExtractorISH_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSN_ISG_EEEESO_E6rehashEiPSH_","__ZN3WTF17HashMapTranslatorINS_22KeyValuePairHashTraitsINS_10HashTraitsINS_6RefPtrIN7WebCore15DOMWrapperWorldEEEEENS2_INSt3__110unique_ptrINS_6VectorINS9_INS4_14UserStyleSheetENS8_14default_deleteISB_EEEELj0ENS_15CrashOnOverflowEEENSC_ISG_EEEEEEEENS_7PtrHashIS6_EEE9translateINS_12KeyValuePairIS6_SI_EERPS5_DnEEvRT_OT0_OT1_","__ZN3WTF6VectorINSt3__110unique_ptrIN7WebCore10UserScriptENS1_14default_deleteIS4_EEEELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS7_EEvOT_","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PN7WebCore9PageGroupEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKS1_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S6_S8_S9_SF_SC_EEEEOT0_OT1_","__ZN7WebCore9PageGroup20addUserScriptToWorldERNS_15DOMWrapperWorldERKN3WTF6StringERKNS_3URLERKNS3_6VectorIS4_Lj0ENS3_15CrashOnOverflowEEESE_NS_23UserScriptInjectionTimeENS_25UserContentInjectedFramesE","__ZN7WebCore9PageGroup26setShouldTrackVisitedLinksEb","__ZN3WTF9HashTableINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENS_12KeyValuePairIS4_NSt3__110unique_ptrINS_6VectorINS7_INS2_14UserStyleSheetENS6_14default_deleteIS9_EEEELj0ENS_15CrashOnOverflowEEENSA_ISE_EEEEEENS_24KeyValuePairKeyExtractorISH_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSN_ISG_EEEESO_E3addINS_17HashMapTranslatorISQ_SL_EERPS3_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS4_SH_SJ_SL_SQ_SO_EEEEOT0_OT1_","__ZN3WTF11VectorMoverILb0ENSt3__110unique_ptrIN7WebCore14UserStyleSheetENS1_14default_deleteIS4_EEEEE15moveOverlappingEPS7_S9_S9_","__ZN7WebCore9PageGroup7addPageERNS_4PageE","_strlen","__ZN3WTF11VectorMoverILb0ENSt3__110unique_ptrIN7WebCore10UserScriptENS1_14default_deleteIS4_EEEEE15moveOverlappingEPS7_S9_S9_","__ZN3WTF9HashTableIyyNS_17IdentityExtractorEN7WebCore12LinkHashHashENS_10HashTraitsIyEES5_E6rehashEiPy","__ZN7WebCore9PageGroup17closeLocalStorageEv","__ZN7WebCore14SecurityOriginD2Ev","__ZN7WebCore9PageGroupC2ERNS_4PageE","__ZN3WTF12KeyValuePairINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENSt3__110unique_ptrINS_6VectorINS6_INS2_14UserStyleSheetENS5_14default_deleteIS8_EEEELj0ENS_15CrashOnOverflowEEENS9_ISD_EEEEED2Ev","__ZN7WebCore9PageGroup17removeVisitedLinkERKNS_3URLE","__ZN7WebCore9PageGroup18addVisitedLinkHashEy","__ZN7WebCore9PageGroup14addVisitedLinkEPKtj","__ZN7WebCore9PageGroup14addVisitedLinkERKNS_3URLE","__ZN7WebCore9PageGroupD2Ev","__ZN3WTF9HashTableINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENS_12KeyValuePairIS4_NSt3__110unique_ptrINS_6VectorINS7_INS2_14UserStyleSheetENS6_14default_deleteIS9_EEEELj0ENS_15CrashOnOverflowEEENSA_ISE_EEEEEENS_24KeyValuePairKeyExtractorISH_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSN_ISG_EEEESO_E8reinsertEOSH_","__ZN3WTF9HashTableIyyNS_17IdentityExtractorEN7WebCore12LinkHashHashENS_10HashTraitsIyEES5_E3addINS_22IdentityHashTranslatorIS3_EERKySB_EENS_18HashTableAddResultINS_17HashTableIteratorIyyS1_S3_S5_S5_EEEEOT0_OT1_","__ZN7WebCore9PageGroup25removeUserScriptFromWorldERNS_15DOMWrapperWorldERKNS_3URLE"]

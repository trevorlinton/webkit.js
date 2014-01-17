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
var __ZN7WebCore18ContentDistributorC1Ev;
var __ZN7WebCore18ContentDistributorD1Ev;
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
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore18ContentDistributor18ensureDistributionEPNS_10ShadowRootE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i3 = i2 | 0;
 i4 = i2 + 48 | 0;
 i5 = i3 + 12 | 0;
 i6 = i3 | 0;
 HEAP32[i6 >> 2] = i5;
 i7 = i3 + 4 | 0;
 HEAP32[i7 >> 2] = 8;
 i8 = i3 + 8 | 0;
 HEAP32[i8 >> 2] = 0;
 i3 = HEAP32[i1 + 92 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i1 = i4;
   i9 = i3;
   L3 : while (1) {
    i10 = __ZNK7WebCore7Element10shadowRootEv(i9) | 0;
    HEAP32[i4 >> 2] = i10;
    i11 = (HEAP32[i10 + 128 >> 2] | 0) >>> 8 & 3;
    if ((i11 | 0) == 2 | (i11 | 0) == 0) {
     i12 = 32;
     break;
    }
    i11 = HEAP32[i8 >> 2] | 0;
    if ((i11 | 0) == (HEAP32[i7 >> 2] | 0)) {
     i13 = i11 + 1 | 0;
     i14 = HEAP32[i6 >> 2] | 0;
     do {
      if (i14 >>> 0 > i4 >>> 0) {
       i12 = 8;
      } else {
       if ((i14 + (i11 << 2) | 0) >>> 0 <= i4 >>> 0) {
        i12 = 8;
        break;
       }
       i15 = i1 - i14 >> 2;
       i16 = i13 + (i11 >>> 2) | 0;
       i17 = i16 >>> 0 > 16 >>> 0 ? i16 : 16;
       i16 = i17 >>> 0 > i13 >>> 0 ? i17 : i13;
       do {
        if (i11 >>> 0 < i16 >>> 0) {
         if (i16 >>> 0 > 8 >>> 0) {
          if (i16 >>> 0 > 1073741823 >>> 0) {
           i12 = 22;
           break L3;
          }
          i17 = __ZN3WTF18fastMallocGoodSizeEj(i16 << 2) | 0;
          HEAP32[i7 >> 2] = i17 >>> 2;
          i18 = __ZN3WTF10fastMallocEj(i17) | 0;
          HEAP32[i6 >> 2] = i18;
          i19 = i18;
         } else {
          HEAP32[i6 >> 2] = i5;
          HEAP32[i7 >> 2] = 8;
          i19 = i5;
         }
         i18 = i14;
         _memcpy(i19 | 0, i18 | 0, i11 << 2) | 0;
         if ((i5 | 0) == (i14 | 0) | (i14 | 0) == 0) {
          break;
         }
         if ((HEAP32[i6 >> 2] | 0) == (i14 | 0)) {
          HEAP32[i6 >> 2] = 0;
          HEAP32[i7 >> 2] = 0;
         }
         __ZN3WTF8fastFreeEPv(i18);
        }
       } while (0);
       i16 = HEAP32[i6 >> 2] | 0;
       i20 = i16 + (i15 << 2) | 0;
       i21 = i16;
      }
     } while (0);
     if ((i12 | 0) == 8) {
      i12 = 0;
      i16 = i13 + (i11 >>> 2) | 0;
      i18 = i16 >>> 0 > 16 >>> 0 ? i16 : 16;
      i16 = i18 >>> 0 > i13 >>> 0 ? i18 : i13;
      do {
       if (i11 >>> 0 < i16 >>> 0) {
        if (i16 >>> 0 > 8 >>> 0) {
         if (i16 >>> 0 > 1073741823 >>> 0) {
          i12 = 11;
          break L3;
         }
         i18 = __ZN3WTF18fastMallocGoodSizeEj(i16 << 2) | 0;
         HEAP32[i7 >> 2] = i18 >>> 2;
         i17 = __ZN3WTF10fastMallocEj(i18) | 0;
         HEAP32[i6 >> 2] = i17;
         i22 = i17;
        } else {
         HEAP32[i6 >> 2] = i5;
         HEAP32[i7 >> 2] = 8;
         i22 = i5;
        }
        i17 = i14;
        _memcpy(i22 | 0, i17 | 0, i11 << 2) | 0;
        if ((i5 | 0) == (i14 | 0) | (i14 | 0) == 0) {
         break;
        }
        if ((HEAP32[i6 >> 2] | 0) == (i14 | 0)) {
         HEAP32[i6 >> 2] = 0;
         HEAP32[i7 >> 2] = 0;
        }
        __ZN3WTF8fastFreeEPv(i17);
       }
      } while (0);
      i20 = i4;
      i21 = HEAP32[i6 >> 2] | 0;
     }
     HEAP32[i21 + (HEAP32[i8 >> 2] << 2) >> 2] = HEAP32[i20 >> 2];
     i23 = HEAP32[i8 >> 2] | 0;
    } else {
     HEAP32[(HEAP32[i6 >> 2] | 0) + (i11 << 2) >> 2] = i10;
     i23 = HEAP32[i8 >> 2] | 0;
    }
    HEAP32[i8 >> 2] = i23 + 1;
    i14 = __ZNK7WebCore4Node10shadowHostEv(i9 | 0) | 0;
    if ((i14 | 0) == 0) {
     i12 = 32;
     break;
    } else {
     i9 = i14;
    }
   }
   if ((i12 | 0) == 22) {
    _WTFCrash();
   } else if ((i12 | 0) == 32) {
    i9 = HEAP32[i8 >> 2] | 0;
    if ((i9 | 0) == 0) {
     break;
    } else {
     i24 = i9;
     i25 = i9;
    }
    while (1) {
     i24 = i24 - 1 | 0;
     if (i25 >>> 0 <= i24 >>> 0) {
      i12 = 34;
      break;
     }
     i9 = HEAP32[(HEAP32[i6 >> 2] | 0) + (i24 << 2) >> 2] | 0;
     __ZN7WebCore18ContentDistributor10distributeEPNS_7ElementE(i9 + 96 | 0, HEAP32[i9 + 92 >> 2] | 0);
     i25 = HEAP32[i8 >> 2] | 0;
     if ((i24 | 0) == 0) {
      break;
     }
    }
    if ((i12 | 0) == 34) {
     __ZN3WTF15CrashOnOverflow10overflowedEv();
    }
    if ((i25 | 0) == 0) {
     break;
    }
    HEAP32[i8 >> 2] = 0;
    break;
   } else if ((i12 | 0) == 11) {
    _WTFCrash();
   }
  }
 } while (0);
 i12 = HEAP32[i6 >> 2] | 0;
 if ((i5 | 0) == (i12 | 0) | (i12 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 HEAP32[i6 >> 2] = 0;
 HEAP32[i7 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i12);
 STACKTOP = i2;
 return;
}
function __ZN3WTF9HashTableIPKN7WebCore4NodeENS_12KeyValuePairIS4_NS_6RefPtrINS1_14InsertionPointEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7PtrHashIS4_EENS_7HashMapIS4_S8_SD_NS_10HashTraitsIS4_EENSF_IS8_EEE18KeyValuePairTraitsESG_E3addINS_17HashMapTranslatorISJ_SD_EES4_RPS7_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S9_SB_SD_SJ_SG_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableIPKN7WebCore4NodeENS_12KeyValuePairIS4_NS_6RefPtrINS1_14InsertionPointEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7PtrHashIS4_EENS_7HashMapIS4_S8_SD_NS_10HashTraitsIS4_EENSF_IS8_EEE18KeyValuePairTraitsESG_E6rehashEiPS9_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i9 = i8;
 i7 = i9 + ~(i9 << 15) | 0;
 i9 = (i7 >>> 10 ^ i7) * 9 & -1;
 i7 = i9 >>> 6 ^ i9;
 i9 = i7 + ~(i7 << 11) | 0;
 i7 = i9 >>> 16 ^ i9;
 i9 = i7 & i6;
 i11 = i10 + (i9 << 3) | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i12 | 0) == 0) {
   i13 = i11;
   i14 = i8;
  } else {
   i15 = (i7 >>> 23) + ~i7 | 0;
   i16 = i15 << 12 ^ i15;
   i15 = i16 >>> 7 ^ i16;
   i16 = i15 << 2 ^ i15;
   i15 = i16 >>> 20 ^ i16 | 1;
   i16 = 0;
   i17 = 0;
   i18 = i9;
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
   if ((i21 | 0) == 8) {
    i20 = i10 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i18 = i1;
    HEAP32[i18 >> 2] = i19;
    HEAP32[i18 + 4 >> 2] = i20;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i21 | 0) == 10) {
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
   }
  }
 } while (0);
 HEAP32[i13 >> 2] = i14;
 i14 = HEAP32[i4 >> 2] | 0;
 if ((i14 | 0) != 0) {
  i4 = i14 + 8 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = i13 + 4 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i14;
 do {
  if ((i3 | 0) != 0) {
   i14 = i3 + 8 | 0;
   i4 = i14 | 0;
   i22 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i22;
   if ((i22 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
  }
 } while (0);
 i3 = i2 + 12 | 0;
 i14 = (HEAP32[i3 >> 2] | 0) + 1 | 0;
 HEAP32[i3 >> 2] = i14;
 i3 = i2 + 4 | 0;
 i22 = HEAP32[i3 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i14 << 1 | 0) < (i22 | 0)) {
  i27 = i13;
  i28 = i22;
 } else {
  if ((i22 | 0) == 0) {
   i29 = 8;
  } else {
   i4 = i22 << 1;
   i29 = (i14 * 6 & -1 | 0) < (i4 | 0) ? i22 : i4;
  }
  i4 = __ZN3WTF9HashTableIPKN7WebCore4NodeENS_12KeyValuePairIS4_NS_6RefPtrINS1_14InsertionPointEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7PtrHashIS4_EENS_7HashMapIS4_S8_SD_NS_10HashTraitsIS4_EENSF_IS8_EEE18KeyValuePairTraitsESG_E6rehashEiPS9_(i2, i29, i13) | 0;
  i27 = i4;
  i28 = HEAP32[i3 >> 2] | 0;
 }
 i3 = (HEAP32[i5 >> 2] | 0) + (i28 << 3) | 0;
 i28 = i1;
 HEAP32[i28 >> 2] = i27;
 HEAP32[i28 + 4 >> 2] = i3;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableIPKN7WebCore4NodeENS_12KeyValuePairIS4_NS_6RefPtrINS1_14InsertionPointEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7PtrHashIS4_EENS_7HashMapIS4_S8_SD_NS_10HashTraitsIS4_EENSF_IS8_EEE18KeyValuePairTraitsESG_E6rehashEiPS9_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0;
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
   i16 = HEAP32[i6 >> 2] | 0;
   i17 = HEAP32[i4 >> 2] | 0;
   i18 = i14 + ~(i14 << 15) | 0;
   i14 = (i18 >>> 10 ^ i18) * 9 & -1;
   i18 = i14 >>> 6 ^ i14;
   i14 = i18 + ~(i18 << 11) | 0;
   i18 = i14 >>> 16 ^ i14;
   i14 = i17 & i18;
   i19 = i16 + (i14 << 3) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L8 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 6;
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
       break L8;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i17;
      i34 = i16 + (i33 << 3) | 0;
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
   i16 = i30 + 4 | 0;
   i17 = HEAP32[i16 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i13 = i17 + 8 | 0;
     i20 = i13 | 0;
     i19 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
     HEAP32[i20 >> 2] = i19;
     if ((i19 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
    }
   } while (0);
   HEAP32[i30 >> 2] = HEAP32[i12 >> 2];
   i17 = i7 + (i10 << 3) + 4 | 0;
   i13 = HEAP32[i17 >> 2] | 0;
   HEAP32[i17 >> 2] = 0;
   HEAP32[i16 >> 2] = i13;
   i15 = (i2 | 0) == (i3 | 0) ? i30 : i11;
  }
  i13 = i10 + 1 | 0;
  if ((i13 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i13;
   i11 = i15;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i36 = 0;
 } else {
  i8 = i15;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  do {
   if ((HEAP32[i7 + (i36 << 3) >> 2] | 0) != -1) {
    i1 = HEAP32[i7 + (i36 << 3) + 4 >> 2] | 0;
    if ((i1 | 0) == 0) {
     break;
    }
    i11 = i1 + 8 | 0;
    i1 = i11 | 0;
    i10 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
    HEAP32[i1 >> 2] = i10;
    if ((i10 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
   }
  } while (0);
  i2 = i36 + 1 | 0;
  if ((i2 | 0) < (i5 | 0)) {
   i36 = i2;
  } else {
   i8 = i15;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN7WebCore18ContentDistributor24ensureInsertionPointListEPNS_10ShadowRootE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = i1 + 32 | 0;
 if ((HEAP8[i3] & 1) != 0) {
  i4 = i1 | 0;
  return i4 | 0;
 }
 HEAP8[i3] = 1;
 i3 = i2 + 36 | 0;
 while (1) {
  i5 = HEAP32[i3 >> 2] | 0;
  if ((i5 | 0) == 0) {
   i6 = 30;
   break;
  }
  if ((HEAP32[i5 + 12 >> 2] & 4 | 0) == 0) {
   i3 = i5 + 28 | 0;
  } else {
   break;
  }
 }
 if ((i6 | 0) == 30) {
  i4 = i1 | 0;
  return i4 | 0;
 }
 i3 = i2 | 0;
 i2 = i1 + 8 | 0;
 i7 = i1 + 4 | 0;
 i8 = i1 | 0;
 i9 = i1 | 0;
 i10 = i5;
 L10 : while (1) {
  do {
   if ((HEAP32[i10 + 12 >> 2] & 4194304 | 0) != 0) {
    if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 128 >> 2] & 1](i10) | 0)) {
     break;
    }
    i5 = i10;
    i11 = HEAP32[i2 >> 2] | 0;
    if ((i11 | 0) == (HEAP32[i7 >> 2] | 0)) {
     __ZN3WTF6VectorINS_6RefPtrIN7WebCore14InsertionPointEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i8, i11 + 1 | 0);
     HEAP32[(HEAP32[i9 >> 2] | 0) + (HEAP32[i2 >> 2] << 2) >> 2] = i5;
     if ((i10 | 0) != 0) {
      i12 = i10 + 8 | 0;
      HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
     }
     HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
     break;
    } else {
     HEAP32[(HEAP32[i9 >> 2] | 0) + (i11 << 2) >> 2] = i5;
     if ((i10 | 0) != 0) {
      i5 = i10 + 8 | 0;
      HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
     }
     HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
     break;
    }
   }
  } while (0);
  i5 = HEAP32[i10 + 36 >> 2] | 0;
  do {
   if ((i5 | 0) == 0) {
    if ((i10 | 0) == (i3 | 0)) {
     i6 = 28;
     break L10;
    }
    i11 = HEAP32[i10 + 28 >> 2] | 0;
    if ((i11 | 0) != 0) {
     i13 = i11;
     break;
    }
    i11 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i10, i3) | 0;
    if ((i11 | 0) == 0) {
     i6 = 25;
     break L10;
    } else {
     i13 = i11;
    }
   } else {
    i13 = i5;
   }
  } while (0);
  if ((HEAP32[i13 + 12 >> 2] & 4 | 0) == 0) {
   i14 = i13;
  } else {
   i10 = i13;
   continue;
  }
  while (1) {
   if ((i14 | 0) == (i3 | 0)) {
    i6 = 26;
    break L10;
   }
   i5 = HEAP32[i14 + 28 >> 2] | 0;
   if ((i5 | 0) == 0) {
    i11 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i14, i3) | 0;
    if ((i11 | 0) == 0) {
     i6 = 27;
     break L10;
    } else {
     i15 = i11;
    }
   } else {
    i15 = i5;
   }
   if ((HEAP32[i15 + 12 >> 2] & 4 | 0) == 0) {
    i14 = i15;
   } else {
    i10 = i15;
    continue L10;
   }
  }
 }
 if ((i6 | 0) == 25) {
  i4 = i1 | 0;
  return i4 | 0;
 } else if ((i6 | 0) == 26) {
  i4 = i1 | 0;
  return i4 | 0;
 } else if ((i6 | 0) == 27) {
  i4 = i1 | 0;
  return i4 | 0;
 } else if ((i6 | 0) == 28) {
  i4 = i1 | 0;
  return i4 | 0;
 }
 return 0;
}
function __ZN7WebCore18ContentDistributor10distributeEPNS_7ElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i1 + 32 | 0;
 HEAP32[i7 >> 2] = HEAP32[i7 >> 2] & -769;
 i7 = __ZNK7WebCore7Element10shadowRootEv(i2) | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i8 = __ZN7WebCore18ContentDistributor24ensureInsertionPointListEPNS_10ShadowRootE(i1, i7) | 0;
 i7 = i8 + 8 | 0;
 if ((HEAP32[i7 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i9 = i8 | 0;
 i8 = i2 + 36 | 0;
 i2 = i1 + 24 | 0;
 i10 = i1 + 12 | 0;
 i1 = 0;
 while (1) {
  i11 = HEAP32[(HEAP32[i9 >> 2] | 0) + (i1 << 2) >> 2] | 0;
  do {
   if (__ZNK7WebCore14InsertionPoint8isActiveEv(i11) | 0) {
    HEAP32[i4 >> 2] = i11;
    i12 = HEAP32[i8 >> 2] | 0;
    L11 : do {
     if ((i12 | 0) != 0) {
      i13 = i12;
      i14 = i11;
      while (1) {
       if ((FUNCTION_TABLE_iii[HEAP32[(HEAP32[i14 >> 2] | 0) + 604 >> 2] & 1](i14, i13) | 0) == 0) {
        HEAP32[i5 >> 2] = i13;
        __ZN3WTF9HashTableIPKN7WebCore4NodeENS_12KeyValuePairIS4_NS_6RefPtrINS1_14InsertionPointEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7PtrHashIS4_EENS_7HashMapIS4_S8_SD_NS_10HashTraitsIS4_EENSF_IS8_EEE18KeyValuePairTraitsESG_E3addINS_17HashMapTranslatorISJ_SD_EES4_RPS7_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S9_SB_SD_SJ_SG_EEEEOT0_OT1_(i6, i10, i5, i4);
       }
       i15 = HEAP32[i13 + 28 >> 2] | 0;
       if ((i15 | 0) == 0) {
        break L11;
       }
       i13 = i15;
       i14 = HEAP32[i4 >> 2] | 0;
      }
     }
    } while (0);
    if ((HEAP32[i2 >> 2] | 0) == 0) {
     break;
    }
    HEAP8[(HEAP32[i4 >> 2] | 0) + 52 | 0] = 1;
   }
  } while (0);
  i1 = i1 + 1 | 0;
  if (i1 >>> 0 >= (HEAP32[i7 >> 2] | 0) >>> 0) {
   break;
  }
 }
 STACKTOP = i3;
 return;
}
function __ZN7WebCore18ContentDistributor10invalidateEPNS_7ElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = i1 + 32 | 0;
 if ((HEAP32[i3 >> 2] & 768 | 0) == 768) {
  i4 = 1;
 } else {
  i4 = (HEAP32[i1 + 24 >> 2] | 0) != 0;
 }
 i5 = __ZNK7WebCore7Element10shadowRootEv(i2) | 0;
 do {
  if ((i5 | 0) == 0) {
   i6 = i4;
  } else {
   i2 = __ZN7WebCore18ContentDistributor24ensureInsertionPointListEPNS_10ShadowRootE(i1, i5) | 0;
   i7 = i2 + 8 | 0;
   if ((HEAP32[i7 >> 2] | 0) == 0) {
    i6 = i4;
    break;
   }
   i8 = i2 | 0;
   i2 = 0;
   while (1) {
    HEAP8[(HEAP32[(HEAP32[i8 >> 2] | 0) + (i2 << 2) >> 2] | 0) + 52 | 0] = 0;
    i9 = i2 + 1 | 0;
    if (i9 >>> 0 < (HEAP32[i7 >> 2] | 0) >>> 0) {
     i2 = i9;
    } else {
     i6 = 1;
     break;
    }
   }
  }
 } while (0);
 HEAP32[i3 >> 2] = HEAP32[i3 >> 2] & -769 | 512;
 i3 = i1 + 12 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return i6 | 0;
 }
 i5 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i5 | 0) > 0) {
  i1 = 0;
  while (1) {
   do {
    if ((HEAP32[i4 + (i1 << 3) >> 2] | 0) != -1) {
     i2 = HEAP32[i4 + (i1 << 3) + 4 >> 2] | 0;
     if ((i2 | 0) == 0) {
      break;
     }
     i7 = i2 + 8 | 0;
     i2 = i7 | 0;
     i8 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
     HEAP32[i2 >> 2] = i8;
     if ((i8 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
    }
   } while (0);
   i1 = i1 + 1 | 0;
   if ((i1 | 0) >= (i5 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i4);
 _memset(i3 | 0, 0, 16) | 0;
 return i6 | 0;
}
function __ZN7WebCore18ContentDistributorD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i1 + 16 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    do {
     if ((HEAP32[i2 + (i4 << 3) >> 2] | 0) != -1) {
      i5 = HEAP32[i2 + (i4 << 3) + 4 >> 2] | 0;
      if ((i5 | 0) == 0) {
       break;
      }
      i6 = i5 + 8 | 0;
      i5 = i6 | 0;
      i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
      HEAP32[i5 >> 2] = i7;
      if ((i7 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
     }
    } while (0);
    i4 = i4 + 1 | 0;
    if ((i4 | 0) >= (i3 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = i1 + 8 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 | 0;
 if ((i3 | 0) != 0) {
  i6 = HEAP32[i4 >> 2] | 0;
  i7 = i6 + (i3 << 2) | 0;
  i3 = i6;
  while (1) {
   i6 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i6 | 0) != 0) {
     i5 = i6 + 8 | 0;
     i8 = i5 | 0;
     i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     HEAP32[i8 >> 2] = i9;
     if ((i9 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
    }
   } while (0);
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i7 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore18ContentDistributorD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i1 + 16 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    do {
     if ((HEAP32[i2 + (i4 << 3) >> 2] | 0) != -1) {
      i5 = HEAP32[i2 + (i4 << 3) + 4 >> 2] | 0;
      if ((i5 | 0) == 0) {
       break;
      }
      i6 = i5 + 8 | 0;
      i5 = i6 | 0;
      i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
      HEAP32[i5 >> 2] = i7;
      if ((i7 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
     }
    } while (0);
    i4 = i4 + 1 | 0;
    if ((i4 | 0) >= (i3 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = i1 + 8 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 | 0;
 if ((i3 | 0) != 0) {
  i6 = HEAP32[i4 >> 2] | 0;
  i7 = i6 + (i3 << 2) | 0;
  i3 = i6;
  while (1) {
   i6 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i6 | 0) != 0) {
     i5 = i6 + 8 | 0;
     i8 = i5 | 0;
     i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     HEAP32[i8 >> 2] = i9;
     if ((i9 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
    }
   } while (0);
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i7 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZNK7WebCore18ContentDistributor21findInsertionPointForEPKNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = HEAP32[i1 + 20 >> 2] | 0;
 i4 = HEAP32[i1 + 12 >> 2] | 0;
 i1 = i2;
 i5 = i1 + ~(i1 << 15) | 0;
 i1 = (i5 >>> 10 ^ i5) * 9 & -1;
 i5 = i1 >>> 6 ^ i1;
 i1 = i5 + ~(i5 << 11) | 0;
 i5 = i1 >>> 16 ^ i1;
 if ((i4 | 0) == 0) {
  i6 = 0;
  return i6 | 0;
 }
 i1 = i3 & i5;
 i7 = i4 + (i1 << 3) | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 L4 : do {
  if ((i8 | 0) == (i2 | 0)) {
   i9 = i7;
  } else {
   i10 = (i5 >>> 23) + ~i5 | 0;
   i11 = i10 << 12 ^ i10;
   i10 = i11 >>> 7 ^ i11;
   i11 = i10 << 2 ^ i10;
   i10 = i11 >>> 20 ^ i11 | 1;
   i11 = 0;
   i12 = i1;
   i13 = i8;
   while (1) {
    if ((i13 | 0) == 0) {
     i6 = 0;
     break;
    }
    i14 = (i11 | 0) == 0 ? i10 : i11;
    i15 = i14 + i12 & i3;
    i16 = i4 + (i15 << 3) | 0;
    i17 = HEAP32[i16 >> 2] | 0;
    if ((i17 | 0) == (i2 | 0)) {
     i9 = i16;
     break L4;
    } else {
     i11 = i14;
     i12 = i15;
     i13 = i17;
    }
   }
   return i6 | 0;
  }
 } while (0);
 if ((i9 | 0) == 0) {
  i6 = 0;
  return i6 | 0;
 }
 i6 = HEAP32[i9 + 4 >> 2] | 0;
 return i6 | 0;
}
function __ZN7WebCore18ContentDistributor22distributeSelectionsToEPNS_14InsertionPointEPNS_7ElementE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 HEAP32[i5 >> 2] = i2;
 i8 = HEAP32[i3 + 36 >> 2] | 0;
 L1 : do {
  if ((i8 | 0) != 0) {
   i3 = i1 + 12 | 0;
   i9 = i8;
   i10 = i2;
   while (1) {
    if ((FUNCTION_TABLE_iii[HEAP32[(HEAP32[i10 >> 2] | 0) + 604 >> 2] & 1](i10, i9) | 0) == 0) {
     HEAP32[i6 >> 2] = i9;
     __ZN3WTF9HashTableIPKN7WebCore4NodeENS_12KeyValuePairIS4_NS_6RefPtrINS1_14InsertionPointEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7PtrHashIS4_EENS_7HashMapIS4_S8_SD_NS_10HashTraitsIS4_EENSF_IS8_EEE18KeyValuePairTraitsESG_E3addINS_17HashMapTranslatorISJ_SD_EES4_RPS7_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S9_SB_SD_SJ_SG_EEEEOT0_OT1_(i7, i3, i6, i5);
    }
    i11 = HEAP32[i9 + 28 >> 2] | 0;
    if ((i11 | 0) == 0) {
     break L1;
    }
    i9 = i11;
    i10 = HEAP32[i5 >> 2] | 0;
   }
  }
 } while (0);
 if ((HEAP32[i1 + 24 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 HEAP8[(HEAP32[i5 >> 2] | 0) + 52 | 0] = 1;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore18ContentDistributor28invalidateInsertionPointListEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 HEAP8[i1 + 32 | 0] = 0;
 i2 = i1 + 4 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  return;
 }
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i1 | 0;
 if ((i4 | 0) != 0) {
  i1 = HEAP32[i5 >> 2] | 0;
  i6 = i1 + (i4 << 2) | 0;
  i4 = i1;
  while (1) {
   i1 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i1 | 0) != 0) {
     i7 = i1 + 8 | 0;
     i8 = i7 | 0;
     i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     HEAP32[i8 >> 2] = i9;
     if ((i9 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
    }
   } while (0);
   i4 = i4 + 4 | 0;
   if ((i4 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i3 >> 2] = 0;
 }
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 HEAP32[i5 >> 2] = 0;
 HEAP32[i2 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i3);
 return;
}
function __ZN3WTF6VectorINS_6RefPtrIN7WebCore14InsertionPointEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i1 + 4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i4 + 1 + (i4 >>> 2) | 0;
 i6 = i5 >>> 0 > 16 >>> 0 ? i5 : 16;
 i5 = i6 >>> 0 > i2 >>> 0 ? i6 : i2;
 if (i4 >>> 0 >= i5 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 if (i5 >>> 0 > 1073741823 >>> 0) {
  _WTFCrash();
 }
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = __ZN3WTF18fastMallocGoodSizeEj(i5 << 2) | 0;
 HEAP32[i3 >> 2] = i1 >>> 2;
 i5 = __ZN3WTF10fastMallocEj(i1) | 0;
 HEAP32[i4 >> 2] = i5;
 i1 = i2;
 _memcpy(i5 | 0, i1 | 0, i6 << 2) | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i2 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i1);
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
function __ZN7WebCore18ContentDistributor22invalidateDistributionEPNS_7ElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 32 | 0;
 if ((HEAP32[i3 >> 2] & 768 | 0) == 256) {
  return;
 }
 if (__ZN7WebCore18ContentDistributor10invalidateEPNS_7ElementE(i1, i2) | 0) {
  __ZN7WebCore4Node19setNeedsStyleRecalcENS_15StyleChangeTypeE(i2 | 0, 65536);
 }
 HEAP32[i3 >> 2] = HEAP32[i3 >> 2] & -769 | 256;
 return;
}
function __ZN7WebCore18ContentDistributor23didShadowBoundaryChangeEPNS_7ElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 32 | 0;
 HEAP32[i3 >> 2] = HEAP32[i3 >> 2] | 768;
 if (__ZN7WebCore18ContentDistributor10invalidateEPNS_7ElementE(i1, i2) | 0) {
  __ZN7WebCore4Node19setNeedsStyleRecalcENS_15StyleChangeTypeE(i2 | 0, 65536);
 }
 HEAP32[i3 >> 2] = HEAP32[i3 >> 2] & -769 | 256;
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore18ContentDistributorC2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 32 | 0;
 _memset(i1 | 0, 0, 32) | 0;
 HEAP8[i2] = 1;
 i1 = i2;
 HEAP32[i1 >> 2] = HEAP32[i1 >> 2] | 768;
 return;
}
function __ZN7WebCore18ContentDistributorC1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 32 | 0;
 _memset(i1 | 0, 0, 32) | 0;
 HEAP8[i2] = 1;
 i1 = i2;
 HEAP32[i1 >> 2] = HEAP32[i1 >> 2] | 768;
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
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 7](i2 | 0);
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
function __ZN3WTF15CrashOnOverflow10overflowedEv() {
 _WTFCrash();
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
  var FUNCTION_TABLE_vi = [b3,b3,__ZN7WebCore18ContentDistributorD2Ev,b3,__ZN7WebCore18ContentDistributorC2Ev,b3,b3,b3];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_vi: dynCall_vi };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_vi": invoke_vi, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN3WTF9HashTableIPKN7WebCore4NodeENS_12KeyValuePairIS4_NS_6RefPtrINS1_14InsertionPointEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7PtrHashIS4_EENS_7HashMapIS4_S8_SD_NS_10HashTraitsIS4_EENSF_IS8_EEE18KeyValuePairTraitsESG_E3addINS_17HashMapTranslatorISJ_SD_EES4_RPS7_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S9_SB_SD_SJ_SG_EEEEOT0_OT1_","__ZNK7WebCore18ContentDistributor21findInsertionPointForEPKNS_4NodeE","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore18ContentDistributor24ensureInsertionPointListEPNS_10ShadowRootE","__ZN7WebCore18ContentDistributor28invalidateInsertionPointListEv","__ZN7WebCore18ContentDistributor23didShadowBoundaryChangeEPNS_7ElementE","__ZN3WTF6VectorINS_6RefPtrIN7WebCore14InsertionPointEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","_memset","__ZN7WebCore18ContentDistributor10invalidateEPNS_7ElementE","_memcpy","__ZN3WTF9HashTableIPKN7WebCore4NodeENS_12KeyValuePairIS4_NS_6RefPtrINS1_14InsertionPointEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7PtrHashIS4_EENS_7HashMapIS4_S8_SD_NS_10HashTraitsIS4_EENSF_IS8_EEE18KeyValuePairTraitsESG_E6rehashEiPS9_","_strlen","__ZN7WebCore18ContentDistributor22invalidateDistributionEPNS_7ElementE","__ZN7WebCore18ContentDistributor18ensureDistributionEPNS_10ShadowRootE","__ZN7WebCore18ContentDistributor10distributeEPNS_7ElementE","__ZN7WebCore18ContentDistributor22distributeSelectionsToEPNS_14InsertionPointEPNS_7ElementE","__ZN7WebCore18ContentDistributorD2Ev","__ZN7WebCore18ContentDistributorC2Ev"]

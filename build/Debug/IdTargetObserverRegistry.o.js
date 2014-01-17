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
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore24IdTargetObserverRegistry23notifyObserversInternalERKN3WTF16AtomicStringImplE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i7 = HEAP32[i1 >> 2] | 0;
 i8 = i2;
 i9 = i8 + ~(i8 << 15) | 0;
 i8 = (i9 >>> 10 ^ i9) * 9 & -1;
 i9 = i8 >>> 6 ^ i8;
 i8 = i9 + ~(i9 << 11) | 0;
 i9 = i8 >>> 16 ^ i8;
 L1 : do {
  if ((i7 | 0) != 0) {
   i8 = i6 & i9;
   i10 = i7 + (i8 << 3) | 0;
   i11 = HEAP32[i10 >> 2] | 0;
   if ((i11 | 0) == (i2 | 0)) {
    i12 = i10;
   } else {
    i10 = (i9 >>> 23) + ~i9 | 0;
    i13 = i10 << 12 ^ i10;
    i10 = i13 >>> 7 ^ i13;
    i13 = i10 << 2 ^ i10;
    i10 = i13 >>> 20 ^ i13 | 1;
    i13 = 0;
    i14 = i8;
    i8 = i11;
    while (1) {
     if ((i8 | 0) == 0) {
      break L1;
     }
     i11 = (i13 | 0) == 0 ? i10 : i13;
     i15 = i11 + i14 & i6;
     i16 = i7 + (i15 << 3) | 0;
     i17 = HEAP32[i16 >> 2] | 0;
     if ((i17 | 0) == (i2 | 0)) {
      i12 = i16;
      break;
     } else {
      i13 = i11;
      i14 = i15;
      i8 = i17;
     }
    }
   }
   if ((i12 | 0) == 0) {
    break;
   }
   i8 = HEAP32[i12 + 4 >> 2] | 0;
   i14 = i1 + 20 | 0;
   HEAP32[i14 >> 2] = i8;
   if ((i8 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   i13 = i8 + 12 | 0;
   i10 = HEAP32[i13 >> 2] | 0;
   i17 = (i10 | 0) == 0;
   do {
    if (i17) {
     i18 = HEAP32[i14 >> 2] | 0;
     i19 = 0;
    } else {
     i15 = i10 >>> 0 < 16 >>> 0 ? 16 : i10;
     do {
      if ((i15 | 0) == 0) {
       i11 = HEAP32[i8 >> 2] | 0;
       i16 = HEAP32[i8 + 4 >> 2] | 0;
       i20 = 0;
       i21 = i11;
       i22 = i16;
       i23 = i11 + (i16 << 2) | 0;
       i24 = 16;
      } else {
       if (i15 >>> 0 > 1073741823 >>> 0) {
        _WTFCrash();
       } else {
        i16 = __ZN3WTF10fastMallocEj(__ZN3WTF18fastMallocGoodSizeEj(i15 << 2) | 0) | 0;
        i11 = HEAP32[i8 >> 2] | 0;
        i25 = HEAP32[i8 + 4 >> 2] | 0;
        if ((HEAP32[i13 >> 2] | 0) == 0) {
         i26 = i16;
         break;
        } else {
         i20 = i16;
         i21 = i11;
         i22 = i25;
         i23 = i11 + (i25 << 2) | 0;
         i24 = 16;
         break;
        }
       }
      }
     } while (0);
     L22 : do {
      if ((i24 | 0) == 16) {
       L24 : do {
        if ((i22 | 0) == 0) {
         i27 = i21;
        } else {
         i15 = i21;
         while (1) {
          i25 = HEAP32[i15 >> 2] | 0;
          if (!((i25 | 0) == (-1 | 0) | (i25 | 0) == 0)) {
           i27 = i15;
           break L24;
          }
          i25 = i15 + 4 | 0;
          if ((i25 | 0) == (i23 | 0)) {
           i26 = i20;
           break L22;
          } else {
           i15 = i25;
          }
         }
        }
       } while (0);
       if ((i27 | 0) == (i23 | 0)) {
        i26 = i20;
        break;
       } else {
        i28 = i27;
        i29 = 0;
       }
       while (1) {
        if (i10 >>> 0 <= i29 >>> 0) {
         break;
        }
        HEAP32[i20 + (i29 << 2) >> 2] = HEAP32[i28 >> 2];
        i15 = i28 + 4 | 0;
        if ((i15 | 0) == (i23 | 0)) {
         i26 = i20;
         break L22;
        } else {
         i30 = i15;
        }
        while (1) {
         i15 = HEAP32[i30 >> 2] | 0;
         if (!((i15 | 0) == (-1 | 0) | (i15 | 0) == 0)) {
          break;
         }
         i15 = i30 + 4 | 0;
         if ((i15 | 0) == (i23 | 0)) {
          i26 = i20;
          break L22;
         } else {
          i30 = i15;
         }
        }
        if ((i30 | 0) == (i23 | 0)) {
         i26 = i20;
         break L22;
        } else {
         i28 = i30;
         i29 = i29 + 1 | 0;
        }
       }
       __ZN3WTF15CrashOnOverflow10overflowedEv();
      }
     } while (0);
     i15 = i26 + (i10 << 2) | 0;
     i25 = HEAP32[i14 >> 2] | 0;
     if (i17) {
      i18 = i25;
      i19 = i26;
      break;
     } else {
      i31 = i26;
      i32 = i25;
     }
     while (1) {
      i25 = HEAP32[i32 >> 2] | 0;
      L40 : do {
       if ((i25 | 0) == 0) {
        i33 = i32;
       } else {
        i11 = HEAP32[i32 + 8 >> 2] | 0;
        i16 = HEAP32[i31 >> 2] | 0;
        i34 = i16;
        i35 = i34 + ~(i34 << 15) | 0;
        i34 = (i35 >>> 10 ^ i35) * 9 & -1;
        i35 = i34 >>> 6 ^ i34;
        i34 = i35 + ~(i35 << 11) | 0;
        i35 = i34 >>> 16 ^ i34;
        i34 = i35 & i11;
        i36 = i25 + (i34 << 2) | 0;
        i37 = HEAP32[i36 >> 2] | 0;
        if ((i37 | 0) == (i16 | 0)) {
         i38 = i36;
        } else {
         i36 = (i35 >>> 23) + ~i35 | 0;
         i35 = i36 << 12 ^ i36;
         i36 = i35 >>> 7 ^ i35;
         i35 = i36 << 2 ^ i36;
         i36 = i35 >>> 20 ^ i35 | 1;
         i35 = 0;
         i39 = i34;
         i34 = i37;
         while (1) {
          if ((i34 | 0) == 0) {
           i33 = i32;
           break L40;
          }
          i37 = (i35 | 0) == 0 ? i36 : i35;
          i40 = i37 + i39 & i11;
          i41 = i25 + (i40 << 2) | 0;
          i42 = HEAP32[i41 >> 2] | 0;
          if ((i42 | 0) == (i16 | 0)) {
           i38 = i41;
           break;
          } else {
           i35 = i37;
           i39 = i40;
           i34 = i42;
          }
         }
        }
        if ((i38 | 0) == 0) {
         i33 = i32;
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 8 >> 2] & 1](i16);
        i33 = HEAP32[i14 >> 2] | 0;
       }
      } while (0);
      i25 = i31 + 4 | 0;
      if ((i25 | 0) == (i15 | 0)) {
       i18 = i33;
       i19 = i26;
       break;
      } else {
       i31 = i25;
       i32 = i33;
      }
     }
    }
   } while (0);
   if ((HEAP32[i18 + 12 >> 2] | 0) == 0) {
    HEAP32[i4 >> 2] = i2;
    __ZN3WTF7HashMapIPKNS_16AtomicStringImplENS_6OwnPtrINS_7HashSetIPN7WebCore16IdTargetObserverENS_7PtrHashIS8_EENS_10HashTraitsIS8_EEEEEENS9_IS3_EENSB_IS3_EENSB_ISE_EEE6removeERKS3_(i5, i4) | 0;
   }
   HEAP32[i14 >> 2] = 0;
   if ((i19 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   __ZN3WTF8fastFreeEPv(i19);
   STACKTOP = i3;
   return;
  }
 } while (0);
 HEAP32[i1 + 20 >> 2] = 0;
 STACKTOP = i3;
 return;
}
function __ZN3WTF9HashTableIPKNS_16AtomicStringImplENS_12KeyValuePairIS3_NS_6OwnPtrINS_7HashSetIPN7WebCore16IdTargetObserverENS_7PtrHashIS9_EENS_10HashTraitsIS9_EEEEEEEENS_24KeyValuePairKeyExtractorISG_EENSA_IS3_EENS_7HashMapIS3_SF_SJ_NSC_IS3_EENSC_ISF_EEE18KeyValuePairTraitsESL_E3addINS_17HashMapTranslatorISO_SJ_EES3_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS3_SG_SI_SJ_SO_SL_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
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
  __ZN3WTF9HashTableIPKNS_16AtomicStringImplENS_12KeyValuePairIS3_NS_6OwnPtrINS_7HashSetIPN7WebCore16IdTargetObserverENS_7PtrHashIS9_EENS_10HashTraitsIS9_EEEEEEEENS_24KeyValuePairKeyExtractorISG_EENSA_IS3_EENS_7HashMapIS3_SF_SJ_NSC_IS3_EENSC_ISF_EEE18KeyValuePairTraitsESL_E6rehashEiPSG_(i2, i7, 0) | 0;
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
   i13 = i7;
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
     i20 = 8;
     break;
    }
    i21 = (i19 | 0) == -1 ? i18 : i16;
    i22 = (i15 | 0) == 0 ? i14 : i15;
    i23 = i22 + i17 & i5;
    i24 = i9 + (i23 << 3) | 0;
    i25 = HEAP32[i24 >> 2] | 0;
    if ((i25 | 0) == 0) {
     i20 = 10;
     break;
    } else {
     i15 = i22;
     i16 = i21;
     i17 = i23;
     i18 = i24;
     i19 = i25;
    }
   }
   if ((i20 | 0) == 8) {
    i19 = i9 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i17 = i1;
    HEAP32[i17 >> 2] = i18;
    HEAP32[i17 + 4 >> 2] = i19;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i20 | 0) == 10) {
    if ((i21 | 0) == 0) {
     i12 = i24;
     i13 = i7;
     break;
    }
    i19 = i21;
    HEAP32[i19 >> 2] = 0;
    HEAP32[i19 + 4 >> 2] = 0;
    i19 = i2 + 16 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) - 1;
    i12 = i21;
    i13 = HEAP32[i3 >> 2] | 0;
    break;
   }
  }
 } while (0);
 HEAP32[i12 >> 2] = i13;
 i13 = i12 + 4 | 0;
 i3 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 if ((i3 | 0) != 0) {
  i13 = HEAP32[i3 >> 2] | 0;
  if ((i13 | 0) != 0) {
   __ZN3WTF8fastFreeEPv(i13);
  }
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = i2 + 12 | 0;
 i13 = (HEAP32[i3 >> 2] | 0) + 1 | 0;
 HEAP32[i3 >> 2] = i13;
 i3 = i2 + 4 | 0;
 i21 = HEAP32[i3 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i13 << 1 | 0) < (i21 | 0)) {
  i26 = i12;
  i27 = i21;
 } else {
  if ((i21 | 0) == 0) {
   i28 = 8;
  } else {
   i7 = i21 << 1;
   i28 = (i13 * 6 & -1 | 0) < (i7 | 0) ? i21 : i7;
  }
  i7 = __ZN3WTF9HashTableIPKNS_16AtomicStringImplENS_12KeyValuePairIS3_NS_6OwnPtrINS_7HashSetIPN7WebCore16IdTargetObserverENS_7PtrHashIS9_EENS_10HashTraitsIS9_EEEEEEEENS_24KeyValuePairKeyExtractorISG_EENSA_IS3_EENS_7HashMapIS3_SF_SJ_NSC_IS3_EENSC_ISF_EEE18KeyValuePairTraitsESL_E6rehashEiPSG_(i2, i28, i12) | 0;
  i26 = i7;
  i27 = HEAP32[i3 >> 2] | 0;
 }
 i3 = (HEAP32[i4 >> 2] | 0) + (i27 << 3) | 0;
 i27 = i1;
 HEAP32[i27 >> 2] = i26;
 HEAP32[i27 + 4 >> 2] = i3;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableIPKNS_16AtomicStringImplENS_12KeyValuePairIS3_NS_6OwnPtrINS_7HashSetIPN7WebCore16IdTargetObserverENS_7PtrHashIS9_EENS_10HashTraitsIS9_EEEEEEEENS_24KeyValuePairKeyExtractorISG_EENSA_IS3_EENS_7HashMapIS3_SF_SJ_NSC_IS3_EENSC_ISF_EEE18KeyValuePairTraitsESL_E6rehashEiPSG_(i1, i2, i3) {
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
   if ((i17 | 0) == 0) {
    i36 = i13;
   } else {
    i20 = HEAP32[i17 >> 2] | 0;
    if ((i20 | 0) != 0) {
     __ZN3WTF8fastFreeEPv(i20);
    }
    __ZN3WTF8fastFreeEPv(i17);
    i36 = HEAP32[i12 >> 2] | 0;
   }
   HEAP32[i30 >> 2] = i36;
   i17 = i7 + (i10 << 3) + 4 | 0;
   i20 = HEAP32[i17 >> 2] | 0;
   HEAP32[i17 >> 2] = 0;
   HEAP32[i16 >> 2] = i20;
   i15 = (i2 | 0) == (i3 | 0) ? i30 : i11;
  }
  i20 = i10 + 1 | 0;
  if ((i20 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i20;
   i11 = i15;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i37 = 0;
 } else {
  i8 = i15;
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
    i11 = HEAP32[i1 >> 2] | 0;
    if ((i11 | 0) != 0) {
     __ZN3WTF8fastFreeEPv(i11);
    }
    __ZN3WTF8fastFreeEPv(i1);
   }
  } while (0);
  i2 = i37 + 1 | 0;
  if ((i2 | 0) < (i5 | 0)) {
   i37 = i2;
  } else {
   i8 = i15;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN3WTF9HashTableIPN7WebCore16IdTargetObserverES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableIPN7WebCore16IdTargetObserverES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i8, 0) | 0;
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
  i26 = __ZN3WTF9HashTableIPN7WebCore16IdTargetObserverES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i29, i25) | 0;
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
function __ZN3WTF9HashTableIPN7WebCore16IdTargetObserverES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1, i2, i3) {
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
function __ZN7WebCore24IdTargetObserverRegistry14removeObserverERKN3WTF12AtomicStringEPNS_16IdTargetObserverE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i5 >> 2] = i3;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i3 + 4 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i2 = i1 + 12 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 HEAP32[i7 >> 2] = i3;
 __ZN3WTF7HashMapIPKNS_16AtomicStringImplENS_6OwnPtrINS_7HashSetIPN7WebCore16IdTargetObserverENS_7PtrHashIS8_EENS_10HashTraitsIS8_EEEEEENS9_IS3_EENSB_IS3_EENSB_ISE_EEE4findERKS3_(i6, i1 | 0, i7);
 i7 = HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] | 0;
 __ZN3WTF7HashSetIPN7WebCore16IdTargetObserverENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i7, i5) | 0;
 if ((HEAP32[i7 + 12 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 if ((i7 | 0) == (HEAP32[i1 + 20 >> 2] | 0)) {
  STACKTOP = i4;
  return;
 }
 i7 = HEAP32[i6 >> 2] | 0;
 i6 = i1 | 0;
 i5 = i1 + 4 | 0;
 if ((i7 | 0) == ((HEAP32[i1 >> 2] | 0) + (HEAP32[i5 >> 2] << 3) | 0)) {
  STACKTOP = i4;
  return;
 }
 i3 = HEAP32[i7 + 4 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i8 = HEAP32[i3 >> 2] | 0;
  if ((i8 | 0) != 0) {
   __ZN3WTF8fastFreeEPv(i8);
  }
  __ZN3WTF8fastFreeEPv(i3);
 }
 HEAP32[i7 >> 2] = -1;
 i7 = i1 + 16 | 0;
 HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 i7 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i7;
 i2 = HEAP32[i5 >> 2] | 0;
 if (!((i7 * 6 & -1 | 0) < (i2 | 0) & (i2 | 0) > 8)) {
  STACKTOP = i4;
  return;
 }
 __ZN3WTF9HashTableIPKNS_16AtomicStringImplENS_12KeyValuePairIS3_NS_6OwnPtrINS_7HashSetIPN7WebCore16IdTargetObserverENS_7PtrHashIS9_EENS_10HashTraitsIS9_EEEEEEEENS_24KeyValuePairKeyExtractorISG_EENSA_IS3_EENS_7HashMapIS3_SF_SJ_NSC_IS3_EENSC_ISF_EEE18KeyValuePairTraitsESL_E6rehashEiPSG_(i6, (i2 | 0) / 2 & -1, 0) | 0;
 STACKTOP = i4;
 return;
}
function __ZN3WTF7HashSetIPN7WebCore16IdTargetObserverENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1, i2) {
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
 __ZN3WTF9HashTableIPN7WebCore16IdTargetObserverES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1 | 0, (i5 | 0) / 2 & -1, 0) | 0;
 i21 = 1;
 return i21 | 0;
}
function __ZN3WTF7HashMapIPKNS_16AtomicStringImplENS_6OwnPtrINS_7HashSetIPN7WebCore16IdTargetObserverENS_7PtrHashIS8_EENS_10HashTraitsIS8_EEEEEENS9_IS3_EENSB_IS3_EENSB_ISE_EEE4findERKS3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 L1 : do {
  if ((i4 | 0) == 0) {
   i5 = HEAP32[i2 + 4 >> 2] << 3 | 0;
   i6 = i5;
   i7 = i5;
  } else {
   i5 = HEAP32[i2 + 8 >> 2] | 0;
   i8 = HEAP32[i3 >> 2] | 0;
   i9 = i8;
   i10 = i9 + ~(i9 << 15) | 0;
   i9 = (i10 >>> 10 ^ i10) * 9 & -1;
   i10 = i9 >>> 6 ^ i9;
   i9 = i10 + ~(i10 << 11) | 0;
   i10 = i9 >>> 16 ^ i9;
   i9 = i10 & i5;
   i11 = i4 + (i9 << 3) | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   L3 : do {
    if ((i12 | 0) == (i8 | 0)) {
     i13 = i11;
    } else {
     i14 = (i10 >>> 23) + ~i10 | 0;
     i15 = i14 << 12 ^ i14;
     i14 = i15 >>> 7 ^ i15;
     i15 = i14 << 2 ^ i14;
     i14 = i15 >>> 20 ^ i15 | 1;
     i15 = 0;
     i16 = i9;
     i17 = i12;
     while (1) {
      if ((i17 | 0) == 0) {
       break;
      }
      i18 = (i15 | 0) == 0 ? i14 : i15;
      i19 = i18 + i16 & i5;
      i20 = i4 + (i19 << 3) | 0;
      i21 = HEAP32[i20 >> 2] | 0;
      if ((i21 | 0) == (i8 | 0)) {
       i13 = i20;
       break L3;
      } else {
       i15 = i18;
       i16 = i19;
       i17 = i21;
      }
     }
     i17 = i4 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
     i6 = i17;
     i7 = i17;
     break L1;
    }
   } while (0);
   i8 = i4 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
   i6 = (i13 | 0) == 0 ? i8 : i13;
   i7 = i8;
  }
 } while (0);
 i13 = i1;
 HEAP32[i13 >> 2] = i6;
 HEAP32[i13 + 4 >> 2] = i7;
 return;
}
function __ZN7WebCore24IdTargetObserverRegistry11addObserverERKN3WTF12AtomicStringEPNS_16IdTargetObserverE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 HEAP32[i5 >> 2] = i3;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i3 + 4 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 HEAP32[i7 >> 2] = i3;
 HEAP32[i8 >> 2] = 0;
 __ZN3WTF9HashTableIPKNS_16AtomicStringImplENS_12KeyValuePairIS3_NS_6OwnPtrINS_7HashSetIPN7WebCore16IdTargetObserverENS_7PtrHashIS9_EENS_10HashTraitsIS9_EEEEEEEENS_24KeyValuePairKeyExtractorISG_EENSA_IS3_EENS_7HashMapIS3_SF_SJ_NSC_IS3_EENSC_ISF_EEE18KeyValuePairTraitsESL_E3addINS_17HashMapTranslatorISO_SJ_EES3_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS3_SG_SI_SJ_SO_SL_EEEEOT0_OT1_(i6, i1 | 0, i7, i8);
 i8 = HEAP32[i6 >> 2] | 0;
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) != 0) {
   i7 = __ZN3WTF10fastMallocEj(20) | 0;
   _memset(i7 | 0, 0, 20) | 0;
   i1 = i8 + 4 | 0;
   i3 = HEAP32[i1 >> 2] | 0;
   HEAP32[i1 >> 2] = i7;
   if ((i3 | 0) == 0) {
    break;
   }
   i7 = HEAP32[i3 >> 2] | 0;
   if ((i7 | 0) != 0) {
    __ZN3WTF8fastFreeEPv(i7);
   }
   __ZN3WTF8fastFreeEPv(i3);
  }
 } while (0);
 __ZN3WTF9HashTableIPN7WebCore16IdTargetObserverES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i9, HEAP32[i8 + 4 >> 2] | 0, i5, i5);
 STACKTOP = i4;
 return;
}
function __ZN3WTF7HashMapIPKNS_16AtomicStringImplENS_6OwnPtrINS_7HashSetIPN7WebCore16IdTargetObserverENS_7PtrHashIS8_EENS_10HashTraitsIS8_EEEEEENS9_IS3_EENSB_IS3_EENSB_ISE_EEE6removeERKS3_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 __ZN3WTF7HashMapIPKNS_16AtomicStringImplENS_6OwnPtrINS_7HashSetIPN7WebCore16IdTargetObserverENS_7PtrHashIS8_EENS_10HashTraitsIS8_EEEEEENS9_IS3_EENSB_IS3_EENSB_ISE_EEE4findERKS3_(i4, i1, i2);
 i2 = HEAP32[i4 >> 2] | 0;
 i4 = i1 | 0;
 i5 = i1 + 4 | 0;
 if ((i2 | 0) == ((HEAP32[i1 >> 2] | 0) + (HEAP32[i5 >> 2] << 3) | 0)) {
  i6 = 0;
  STACKTOP = i3;
  return i6 | 0;
 }
 i7 = HEAP32[i2 + 4 >> 2] | 0;
 if ((i7 | 0) != 0) {
  i8 = HEAP32[i7 >> 2] | 0;
  if ((i8 | 0) != 0) {
   __ZN3WTF8fastFreeEPv(i8);
  }
  __ZN3WTF8fastFreeEPv(i7);
 }
 HEAP32[i2 >> 2] = -1;
 i2 = i1 + 16 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 i2 = i1 + 12 | 0;
 i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i1;
 i2 = HEAP32[i5 >> 2] | 0;
 if (!((i1 * 6 & -1 | 0) < (i2 | 0) & (i2 | 0) > 8)) {
  i6 = 1;
  STACKTOP = i3;
  return i6 | 0;
 }
 __ZN3WTF9HashTableIPKNS_16AtomicStringImplENS_12KeyValuePairIS3_NS_6OwnPtrINS_7HashSetIPN7WebCore16IdTargetObserverENS_7PtrHashIS9_EENS_10HashTraitsIS9_EEEEEEEENS_24KeyValuePairKeyExtractorISG_EENSA_IS3_EENS_7HashMapIS3_SF_SJ_NSC_IS3_EENSC_ISF_EEE18KeyValuePairTraitsESL_E6rehashEiPSG_(i4, (i2 | 0) / 2 & -1, 0) | 0;
 i6 = 1;
 STACKTOP = i3;
 return i6 | 0;
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
function __ZN7WebCore24IdTargetObserverRegistry6createEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = __ZN3WTF10fastMallocEj(24) | 0;
 _memset(i2 | 0, 0, 24) | 0;
 HEAP32[i1 >> 2] = i2;
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
  var FUNCTION_TABLE_vi = [b3,b3];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_vi: dynCall_vi };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_vi": invoke_vi, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN3WTF9HashTableIPN7WebCore16IdTargetObserverES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_","_strlen","__ZN7WebCore24IdTargetObserverRegistry6createEv","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN3WTF9HashTableIPKNS_16AtomicStringImplENS_12KeyValuePairIS3_NS_6OwnPtrINS_7HashSetIPN7WebCore16IdTargetObserverENS_7PtrHashIS9_EENS_10HashTraitsIS9_EEEEEEEENS_24KeyValuePairKeyExtractorISG_EENSA_IS3_EENS_7HashMapIS3_SF_SJ_NSC_IS3_EENSC_ISF_EEE18KeyValuePairTraitsESL_E3addINS_17HashMapTranslatorISO_SJ_EES3_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS3_SG_SI_SJ_SO_SL_EEEEOT0_OT1_","__ZN3WTF7HashMapIPKNS_16AtomicStringImplENS_6OwnPtrINS_7HashSetIPN7WebCore16IdTargetObserverENS_7PtrHashIS8_EENS_10HashTraitsIS8_EEEEEENS9_IS3_EENSB_IS3_EENSB_ISE_EEE4findERKS3_","__ZN3WTF9HashTableIPN7WebCore16IdTargetObserverES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_","__ZN3WTF7HashMapIPKNS_16AtomicStringImplENS_6OwnPtrINS_7HashSetIPN7WebCore16IdTargetObserverENS_7PtrHashIS8_EENS_10HashTraitsIS8_EEEEEENS9_IS3_EENSB_IS3_EENSB_ISE_EEE6removeERKS3_","__ZN7WebCore24IdTargetObserverRegistry14removeObserverERKN3WTF12AtomicStringEPNS_16IdTargetObserverE","_memset","__ZN7WebCore24IdTargetObserverRegistry23notifyObserversInternalERKN3WTF16AtomicStringImplE","__ZN7WebCore24IdTargetObserverRegistry11addObserverERKN3WTF12AtomicStringEPNS_16IdTargetObserverE","__ZN3WTF7HashSetIPN7WebCore16IdTargetObserverENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_","_memcpy","__ZN3WTF9HashTableIPKNS_16AtomicStringImplENS_12KeyValuePairIS3_NS_6OwnPtrINS_7HashSetIPN7WebCore16IdTargetObserverENS_7PtrHashIS9_EENS_10HashTraitsIS9_EEEEEEEENS_24KeyValuePairKeyExtractorISG_EENSA_IS3_EENS_7HashMapIS3_SF_SJ_NSC_IS3_EENSC_ISF_EEE18KeyValuePairTraitsESL_E6rehashEiPSG_"]

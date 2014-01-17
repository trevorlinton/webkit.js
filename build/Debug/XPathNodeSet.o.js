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
  var _llvm_uadd_with_overflow_i32=env._llvm_uadd_with_overflow_i32;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZNK7WebCore5XPath7NodeSet13traversalSortEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i3 = i2 | 0;
 i4 = i2 + 24 | 0;
 i5 = i2 + 32 | 0;
 i6 = i2 + 48 | 0;
 _memset(i3 | 0, 0, 20) | 0;
 i7 = i1 + 4 | 0;
 i8 = i1 + 12 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = (i9 | 0) == 0;
 if (i10) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i11 = i7 | 0;
 i12 = i3 | 0;
 i13 = 0;
 i14 = 0;
 i15 = i9;
 while (1) {
  if (i15 >>> 0 <= i13 >>> 0) {
   i16 = 4;
   break;
  }
  HEAP32[i4 >> 2] = HEAP32[(HEAP32[i11 >> 2] | 0) + (i13 << 2) >> 2];
  __ZN3WTF9HashTableIPN7WebCore4NodeES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i5, i12, i4, i4);
  i17 = HEAP32[i4 >> 2] | 0;
  i18 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i17 >> 2] | 0) + 112 >> 2] & 1](i17) | 0 | i14;
  i17 = i13 + 1 | 0;
  if (i17 >>> 0 >= i9 >>> 0) {
   break;
  }
  i13 = i17;
  i14 = i18;
  i15 = HEAP32[i8 >> 2] | 0;
 }
 if ((i16 | 0) == 4) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 do {
  if (i10) {
   i19 = 0;
   i20 = 0;
  } else {
   if (i9 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   } else {
    i15 = __ZN3WTF18fastMallocGoodSizeEj(i9 << 2) | 0;
    i19 = __ZN3WTF10fastMallocEj(i15) | 0;
    i20 = i15 >>> 2;
    break;
   }
  }
 } while (0);
 if ((HEAP32[i8 >> 2] | 0) == 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i9 = i7 | 0;
 i7 = HEAP32[HEAP32[i9 >> 2] >> 2] | 0;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 112 >> 2] & 1](i7) | 0) {
  i21 = HEAP32[i7 + 44 >> 2] | 0;
 } else {
  i21 = i7;
 }
 if ((HEAP32[i21 + 12 >> 2] & 256 | 0) == 0) {
  i7 = i21;
  while (1) {
   i10 = HEAP32[i7 + 16 >> 2] | 0;
   if ((i10 | 0) == 0) {
    i22 = i7;
    break;
   } else {
    i7 = i10 | 0;
   }
  }
 } else {
  i22 = HEAP32[(HEAP32[i21 + 20 >> 2] | 0) + 8 >> 2] | 0;
 }
 L28 : do {
  if ((i22 | 0) == 0) {
   i23 = 0;
   i24 = i20;
   i25 = i19;
  } else {
   i21 = i3 | 0;
   i7 = i6 | 0;
   i10 = i3 + 8 | 0;
   i15 = 0;
   i14 = i20;
   i13 = i19;
   i4 = i22;
   L30 : while (1) {
    i12 = HEAP32[i21 >> 2] | 0;
    L32 : do {
     if ((i12 | 0) == 0) {
      i26 = i13;
      i27 = i14;
      i28 = i15;
     } else {
      i5 = HEAP32[i10 >> 2] | 0;
      i11 = i4;
      i17 = i11 + ~(i11 << 15) | 0;
      i11 = (i17 >>> 10 ^ i17) * 9 & -1;
      i17 = i11 >>> 6 ^ i11;
      i11 = i17 + ~(i17 << 11) | 0;
      i17 = i11 >>> 16 ^ i11;
      i11 = i5 & i17;
      i29 = i12 + (i11 << 2) | 0;
      i30 = HEAP32[i29 >> 2] | 0;
      if ((i30 | 0) == (i4 | 0)) {
       i31 = i29;
      } else {
       i29 = (i17 >>> 23) + ~i17 | 0;
       i17 = i29 << 12 ^ i29;
       i29 = i17 >>> 7 ^ i17;
       i17 = i29 << 2 ^ i29;
       i29 = i17 >>> 20 ^ i17 | 1;
       i17 = 0;
       i32 = i11;
       i11 = i30;
       while (1) {
        if ((i11 | 0) == 0) {
         i26 = i13;
         i27 = i14;
         i28 = i15;
         break L32;
        }
        i30 = (i17 | 0) == 0 ? i29 : i17;
        i33 = i30 + i32 & i5;
        i34 = i12 + (i33 << 2) | 0;
        i35 = HEAP32[i34 >> 2] | 0;
        if ((i35 | 0) == (i4 | 0)) {
         i31 = i34;
         break;
        } else {
         i17 = i30;
         i32 = i33;
         i11 = i35;
        }
       }
      }
      if ((i31 | 0) == 0) {
       i26 = i13;
       i27 = i14;
       i28 = i15;
       break;
      }
      if ((i15 | 0) != (i14 | 0)) {
       HEAP32[i13 + (i15 << 2) >> 2] = i4;
       i11 = i4 + 8 | 0;
       HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
       i26 = i13;
       i27 = i14;
       i28 = i15 + 1 | 0;
       break;
      }
      i11 = i14 + 1 | 0;
      i32 = i11 + (i14 >>> 2) | 0;
      i17 = i32 >>> 0 > 16 >>> 0 ? i32 : 16;
      i32 = i17 >>> 0 > i11 >>> 0 ? i17 : i11;
      do {
       if (i14 >>> 0 < i32 >>> 0) {
        if (i32 >>> 0 > 1073741823 >>> 0) {
         i16 = 30;
         break L30;
        }
        i17 = __ZN3WTF18fastMallocGoodSizeEj(i32 << 2) | 0;
        i5 = i17 >>> 2;
        i29 = __ZN3WTF10fastMallocEj(i17) | 0;
        i17 = i29;
        i35 = i13;
        _memcpy(i29 | 0, i35 | 0, i14 << 2) | 0;
        if ((i13 | 0) == 0) {
         i36 = i17;
         i37 = i5;
         break;
        }
        i29 = (i17 | 0) == (i13 | 0);
        __ZN3WTF8fastFreeEPv(i35);
        i36 = i29 ? 0 : i17;
        i37 = i29 ? 0 : i5;
       } else {
        i36 = i13;
        i37 = i14;
       }
      } while (0);
      HEAP32[i36 + (i14 << 2) >> 2] = i4;
      i32 = i4 + 8 | 0;
      HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + 1;
      i26 = i36;
      i27 = i37;
      i28 = i11;
     }
    } while (0);
    i12 = i4 + 12 | 0;
    L50 : do {
     if (i18) {
      if ((HEAP32[i12 >> 2] & 4 | 0) == 0) {
       i38 = i26;
       i39 = i27;
       i40 = i28;
       break;
      }
      i32 = i4;
      if (!(__ZNK7WebCore7Element13hasAttributesEv(i32) | 0)) {
       i38 = i26;
       i39 = i27;
       i40 = i28;
       break;
      }
      i5 = i4 + 48 | 0;
      i29 = HEAP32[i5 >> 2] | 0;
      i17 = HEAP32[i29 + 4 >> 2] | 0;
      if ((i17 & 1 | 0) == 0) {
       i41 = i17 >>> 1 & 134217727;
      } else {
       i41 = HEAP32[i29 + 32 >> 2] | 0;
      }
      if ((i41 | 0) == 0) {
       i38 = i26;
       i39 = i27;
       i40 = i28;
       break;
      } else {
       i42 = i28;
       i43 = i27;
       i44 = i26;
       i45 = 0;
       i46 = i29;
       i47 = i17;
      }
      while (1) {
       i17 = (i47 & 1 | 0) == 0;
       if (i17) {
        i48 = i47 >>> 1 & 134217727;
       } else {
        i48 = HEAP32[i46 + 32 >> 2] | 0;
       }
       if (i48 >>> 0 <= i45 >>> 0) {
        i16 = 45;
        break L30;
       }
       if (i17) {
        i49 = i46 + 20 | 0;
       } else {
        i49 = HEAP32[i46 + 24 >> 2] | 0;
       }
       __ZN7WebCore7Element12attrIfExistsERKNS_13QualifiedNameE(i6, i32, i49 + (i45 << 3) | 0);
       i17 = HEAP32[i7 >> 2] | 0;
       HEAP32[i7 >> 2] = 0;
       do {
        if ((i17 | 0) == 0) {
         i50 = i42;
         i51 = i43;
         i52 = i44;
        } else {
         i29 = i17 | 0;
         i35 = HEAP32[i21 >> 2] | 0;
         L71 : do {
          if ((i35 | 0) == 0) {
           i53 = i42;
           i54 = i43;
           i55 = i44;
          } else {
           i33 = HEAP32[i10 >> 2] | 0;
           i30 = i17;
           i34 = i30 + ~(i30 << 15) | 0;
           i30 = (i34 >>> 10 ^ i34) * 9 & -1;
           i34 = i30 >>> 6 ^ i30;
           i30 = i34 + ~(i34 << 11) | 0;
           i34 = i30 >>> 16 ^ i30;
           i30 = i33 & i34;
           i56 = i35 + (i30 << 2) | 0;
           i57 = HEAP32[i56 >> 2] | 0;
           if ((i57 | 0) == (i29 | 0)) {
            i58 = i56;
           } else {
            i56 = (i34 >>> 23) + ~i34 | 0;
            i34 = i56 << 12 ^ i56;
            i56 = i34 >>> 7 ^ i34;
            i34 = i56 << 2 ^ i56;
            i56 = i34 >>> 20 ^ i34 | 1;
            i34 = 0;
            i59 = i30;
            i30 = i57;
            while (1) {
             if ((i30 | 0) == 0) {
              i53 = i42;
              i54 = i43;
              i55 = i44;
              break L71;
             }
             i57 = (i34 | 0) == 0 ? i56 : i34;
             i60 = i57 + i59 & i33;
             i61 = i35 + (i60 << 2) | 0;
             i62 = HEAP32[i61 >> 2] | 0;
             if ((i62 | 0) == (i29 | 0)) {
              i58 = i61;
              break;
             } else {
              i34 = i57;
              i59 = i60;
              i30 = i62;
             }
            }
           }
           if ((i58 | 0) == 0) {
            i53 = i42;
            i54 = i43;
            i55 = i44;
            break;
           }
           if ((i42 | 0) != (i43 | 0)) {
            HEAP32[i44 + (i42 << 2) >> 2] = i29;
            i30 = i17 + 8 | 0;
            HEAP32[i30 >> 2] = (HEAP32[i30 >> 2] | 0) + 1;
            i53 = i42 + 1 | 0;
            i54 = i43;
            i55 = i44;
            break;
           }
           i30 = i43 + 1 | 0;
           i59 = i30 + (i43 >>> 2) | 0;
           i34 = i59 >>> 0 > 16 >>> 0 ? i59 : 16;
           i59 = i34 >>> 0 > i30 >>> 0 ? i34 : i30;
           do {
            if (i43 >>> 0 < i59 >>> 0) {
             if (i59 >>> 0 > 1073741823 >>> 0) {
              i16 = 60;
              break L30;
             }
             i34 = __ZN3WTF18fastMallocGoodSizeEj(i59 << 2) | 0;
             i33 = i34 >>> 2;
             i56 = __ZN3WTF10fastMallocEj(i34) | 0;
             i34 = i56;
             i62 = i44;
             _memcpy(i56 | 0, i62 | 0, i43 << 2) | 0;
             if ((i44 | 0) == 0) {
              i63 = i34;
              i64 = i33;
              break;
             }
             i56 = (i34 | 0) == (i44 | 0);
             __ZN3WTF8fastFreeEPv(i62);
             i63 = i56 ? 0 : i34;
             i64 = i56 ? 0 : i33;
            } else {
             i63 = i44;
             i64 = i43;
            }
           } while (0);
           HEAP32[i63 + (i43 << 2) >> 2] = i29;
           i59 = i17 + 8 | 0;
           HEAP32[i59 >> 2] = (HEAP32[i59 >> 2] | 0) + 1;
           i53 = i30;
           i54 = i64;
           i55 = i63;
          }
         } while (0);
         i29 = i17 + 8 | 0;
         i35 = i29 | 0;
         i59 = (HEAP32[i35 >> 2] | 0) - 1 | 0;
         HEAP32[i35 >> 2] = i59;
         if ((i59 | 0) >= 1) {
          i50 = i53;
          i51 = i54;
          i52 = i55;
          break;
         }
         if ((HEAP32[i29 + 8 >> 2] | 0) != 0) {
          i50 = i53;
          i51 = i54;
          i52 = i55;
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i29 - 8 | 0);
         i50 = i53;
         i51 = i54;
         i52 = i55;
        }
       } while (0);
       i17 = i45 + 1 | 0;
       if (i17 >>> 0 >= i41 >>> 0) {
        i38 = i52;
        i39 = i51;
        i40 = i50;
        break L50;
       }
       i29 = HEAP32[i5 >> 2] | 0;
       i42 = i50;
       i43 = i51;
       i44 = i52;
       i45 = i17;
       i46 = i29;
       i47 = HEAP32[i29 + 4 >> 2] | 0;
      }
     } else {
      i38 = i26;
      i39 = i27;
      i40 = i28;
     }
    } while (0);
    if ((HEAP32[i12 >> 2] & 2 | 0) != 0) {
     i5 = HEAP32[i4 + 36 >> 2] | 0;
     if ((i5 | 0) != 0) {
      i15 = i40;
      i14 = i39;
      i13 = i38;
      i4 = i5;
      continue;
     }
    }
    i5 = HEAP32[i4 + 28 >> 2] | 0;
    if ((i5 | 0) != 0) {
     i15 = i40;
     i14 = i39;
     i13 = i38;
     i4 = i5;
     continue;
    }
    i5 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeE(i4) | 0;
    if ((i5 | 0) == 0) {
     i23 = i40;
     i24 = i39;
     i25 = i38;
     break L28;
    } else {
     i15 = i40;
     i14 = i39;
     i13 = i38;
     i4 = i5;
    }
   }
   if ((i16 | 0) == 30) {
    _WTFCrash();
   } else if ((i16 | 0) == 45) {
    _WTFCrash();
   } else if ((i16 | 0) == 60) {
    _WTFCrash();
   }
  }
 } while (0);
 i16 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = i23;
 i23 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = i25;
 HEAP32[i1 + 8 >> 2] = i24;
 HEAP8[i1 | 0] = 1;
 if ((i16 | 0) != 0) {
  i1 = i23 + (i16 << 2) | 0;
  i16 = i23;
  while (1) {
   i24 = HEAP32[i16 >> 2] | 0;
   do {
    if ((i24 | 0) != 0) {
     i25 = i24 + 8 | 0;
     i9 = i25 | 0;
     i8 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
     HEAP32[i9 >> 2] = i8;
     if ((i8 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i25 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i25 - 8 | 0);
    }
   } while (0);
   i16 = i16 + 4 | 0;
   if ((i16 | 0) == (i1 | 0)) {
    break;
   }
  }
 }
 if ((i23 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i23);
 }
 i23 = HEAP32[i3 >> 2] | 0;
 if ((i23 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZN3WTF8fastFreeEPv(i23);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore5XPathL9sortBlockEjjRN3WTF6VectorINS2_IPNS_4NodeELj0ENS1_15CrashOnOverflowEEELj0ES5_EEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i6 = i5 | 0;
 i7 = i5 + 24 | 0;
 i8 = i5 + 32 | 0;
 i9 = i1 >>> 0 < i2 >>> 0;
 i10 = HEAP32[i3 + 8 >> 2] | 0;
 L1 : do {
  if (i9) {
   i11 = i3 | 0;
   i12 = i1;
   i13 = -1;
   while (1) {
    if (i10 >>> 0 <= i12 >>> 0) {
     break;
    }
    i14 = (HEAP32[(HEAP32[i11 >> 2] | 0) + (i12 * 12 & -1) + 8 >> 2] | 0) - 1 | 0;
    i15 = i13 >>> 0 > i14 >>> 0 ? i14 : i13;
    i14 = i12 + 1 | 0;
    if (i14 >>> 0 < i2 >>> 0) {
     i12 = i14;
     i13 = i15;
    } else {
     i16 = i15;
     break L1;
    }
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  } else {
   i16 = -1;
  }
 } while (0);
 i13 = i3 + 8 | 0;
 if (i10 >>> 0 <= i1 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i12 = i3 | 0;
 i11 = HEAP32[i12 >> 2] | 0;
 i15 = i11 + (i1 * 12 & -1) + 8 | 0;
 i14 = HEAP32[i15 >> 2] | 0;
 i17 = i11 + (i1 * 12 & -1) | 0;
 i18 = i16;
 L11 : while (1) {
  i19 = ~i18;
  i20 = _llvm_uadd_with_overflow_i32(i14 | 0, i19 | 0) | 0;
  if (!tempRet0) {
   i21 = 10;
   break;
  }
  i22 = HEAP32[(HEAP32[i17 >> 2] | 0) + (i20 << 2) >> 2] | 0;
  if ((i18 | 0) == 0) {
   i23 = 0;
   i21 = 19;
   break;
  } else {
   i24 = i1;
  }
  while (1) {
   i24 = i24 + 1 | 0;
   if (i24 >>> 0 >= i2 >>> 0) {
    i23 = i18;
    i21 = 19;
    break L11;
   }
   if (i10 >>> 0 <= i24 >>> 0) {
    i21 = 14;
    break L11;
   }
   i20 = _llvm_uadd_with_overflow_i32(HEAP32[i11 + (i24 * 12 & -1) + 8 >> 2] | 0, i19 | 0) | 0;
   if (!tempRet0) {
    i21 = 16;
    break L11;
   }
   if ((i22 | 0) != (HEAP32[(HEAP32[i11 + (i24 * 12 & -1) >> 2] | 0) + (i20 << 2) >> 2] | 0)) {
    break;
   }
  }
  i18 = i18 - 1 | 0;
 }
 if ((i21 | 0) == 10) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i21 | 0) == 14) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i21 | 0) == 16) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i21 | 0) == 19) {
  L25 : do {
   if ((i23 | 0) == (i16 | 0)) {
    i18 = i1;
    while (1) {
     if (i18 >>> 0 >= i2 >>> 0) {
      break L25;
     }
     if (i10 >>> 0 <= i18 >>> 0) {
      i21 = 22;
      break;
     }
     i25 = i11 + (i18 * 12 & -1) + 8 | 0;
     i26 = HEAP32[i25 >> 2] | 0;
     if ((i26 | 0) == 0) {
      i21 = 24;
      break;
     }
     i27 = i11 + (i18 * 12 & -1) | 0;
     if ((i22 | 0) == (HEAP32[HEAP32[i27 >> 2] >> 2] | 0)) {
      i21 = 26;
      break;
     } else {
      i18 = i18 + 1 | 0;
     }
    }
    if ((i21 | 0) == 22) {
     __ZN3WTF15CrashOnOverflow10overflowedEv();
    } else if ((i21 | 0) == 24) {
     __ZN3WTF15CrashOnOverflow10overflowedEv();
    } else if ((i21 | 0) == 26) {
     HEAP32[i25 >> 2] = i14;
     HEAP32[i15 >> 2] = i26;
     i24 = HEAP32[i27 >> 2] | 0;
     HEAP32[i27 >> 2] = HEAP32[i17 >> 2];
     HEAP32[i17 >> 2] = i24;
     i24 = i11 + (i18 * 12 & -1) + 4 | 0;
     i19 = i11 + (i1 * 12 & -1) + 4 | 0;
     i20 = HEAP32[i24 >> 2] | 0;
     HEAP32[i24 >> 2] = HEAP32[i19 >> 2];
     HEAP32[i19 >> 2] = i20;
     if ((i1 + 2 | 0) >>> 0 >= i2 >>> 0) {
      STACKTOP = i5;
      return;
     }
     __ZN7WebCore5XPathL9sortBlockEjjRN3WTF6VectorINS2_IPNS_4NodeELj0ENS1_15CrashOnOverflowEEELj0ES5_EEb(i1 + 1 | 0, i2, i3, i4);
     STACKTOP = i5;
     return;
    }
   }
  } while (0);
  do {
   if (i4) {
    if ((HEAP32[i22 + 12 >> 2] & 4 | 0) == 0) {
     i21 = 47;
     break;
    }
    if (i9) {
     i28 = i1;
     i29 = i1;
    } else {
     _memset(i6 | 0, 0, 20) | 0;
     break;
    }
    L45 : while (1) {
     if ((HEAP32[i13 >> 2] | 0) >>> 0 <= i29 >>> 0) {
      i21 = 33;
      break;
     }
     i11 = HEAP32[i12 >> 2] | 0;
     if ((HEAP32[i11 + (i29 * 12 & -1) + 8 >> 2] | 0) == 0) {
      i21 = 35;
      break;
     }
     i17 = HEAP32[HEAP32[i11 + (i29 * 12 & -1) >> 2] >> 2] | 0;
     do {
      if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i17 >> 2] | 0) + 112 >> 2] & 1](i17) | 0) {
       if ((HEAP32[i17 + 44 >> 2] | 0) != (i22 | 0)) {
        i30 = i28;
        break;
       }
       i11 = HEAP32[i13 >> 2] | 0;
       if (i11 >>> 0 <= i29 >>> 0) {
        i21 = 39;
        break L45;
       }
       i27 = HEAP32[i12 >> 2] | 0;
       if (i11 >>> 0 <= i28 >>> 0) {
        i21 = 41;
        break L45;
       }
       i11 = i27 + (i29 * 12 & -1) + 8 | 0;
       i26 = i27 + (i28 * 12 & -1) + 8 | 0;
       i15 = HEAP32[i11 >> 2] | 0;
       HEAP32[i11 >> 2] = HEAP32[i26 >> 2];
       HEAP32[i26 >> 2] = i15;
       i15 = i27 + (i29 * 12 & -1) | 0;
       i26 = i27 + (i28 * 12 & -1) | 0;
       i11 = HEAP32[i15 >> 2] | 0;
       HEAP32[i15 >> 2] = HEAP32[i26 >> 2];
       HEAP32[i26 >> 2] = i11;
       i11 = i27 + (i29 * 12 & -1) + 4 | 0;
       i26 = i27 + (i28 * 12 & -1) + 4 | 0;
       i27 = HEAP32[i11 >> 2] | 0;
       HEAP32[i11 >> 2] = HEAP32[i26 >> 2];
       HEAP32[i26 >> 2] = i27;
       i30 = i28 + 1 | 0;
      } else {
       i30 = i28;
      }
     } while (0);
     i17 = i29 + 1 | 0;
     if (i17 >>> 0 < i2 >>> 0) {
      i28 = i30;
      i29 = i17;
     } else {
      i21 = 44;
      break;
     }
    }
    if ((i21 | 0) == 33) {
     __ZN3WTF15CrashOnOverflow10overflowedEv();
    } else if ((i21 | 0) == 35) {
     __ZN3WTF15CrashOnOverflow10overflowedEv();
    } else if ((i21 | 0) == 39) {
     __ZN3WTF15CrashOnOverflow10overflowedEv();
    } else if ((i21 | 0) == 41) {
     __ZN3WTF15CrashOnOverflow10overflowedEv();
    } else if ((i21 | 0) == 44) {
     if ((i30 | 0) == (i1 | 0)) {
      i21 = 47;
      break;
     }
     if ((i2 - i30 | 0) >>> 0 <= 1 >>> 0) {
      STACKTOP = i5;
      return;
     }
     __ZN7WebCore5XPathL9sortBlockEjjRN3WTF6VectorINS2_IPNS_4NodeELj0ENS1_15CrashOnOverflowEEELj0ES5_EEb(i30, i2, i3, 1);
     STACKTOP = i5;
     return;
    }
   } else {
    i21 = 47;
   }
  } while (0);
  L66 : do {
   if ((i21 | 0) == 47) {
    _memset(i6 | 0, 0, 20) | 0;
    if (!i9) {
     break;
    }
    i30 = -2 - i23 | 0;
    i29 = i6 | 0;
    i28 = i1;
    while (1) {
     if ((HEAP32[i13 >> 2] | 0) >>> 0 <= i28 >>> 0) {
      i21 = 50;
      break;
     }
     i18 = HEAP32[i12 >> 2] | 0;
     i17 = _llvm_uadd_with_overflow_i32(HEAP32[i18 + (i28 * 12 & -1) + 8 >> 2] | 0, i30 | 0) | 0;
     if (!tempRet0) {
      i21 = 52;
      break;
     }
     HEAP32[i7 >> 2] = HEAP32[(HEAP32[i18 + (i28 * 12 & -1) >> 2] | 0) + (i17 << 2) >> 2];
     __ZN3WTF9HashTableIPN7WebCore4NodeES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i8, i29, i7, i7);
     i28 = i28 + 1 | 0;
     if (i28 >>> 0 >= i2 >>> 0) {
      break L66;
     }
    }
    if ((i21 | 0) == 50) {
     __ZN3WTF15CrashOnOverflow10overflowedEv();
    } else if ((i21 | 0) == 52) {
     __ZN3WTF15CrashOnOverflow10overflowedEv();
    }
   }
  } while (0);
  do {
   if ((HEAP32[i22 + 12 >> 2] & 2 | 0) == 0) {
    i7 = HEAP32[i6 >> 2] | 0;
    if ((i7 | 0) != 0) {
     i31 = i7;
     break;
    }
    STACKTOP = i5;
    return;
   } else {
    i7 = HEAP32[i22 + 36 >> 2] | 0;
    i8 = HEAP32[i6 >> 2] | 0;
    i9 = (i8 | 0) == 0;
    L81 : do {
     if ((i7 | 0) != 0) {
      i28 = i6 + 8 | 0;
      i29 = -2 - i23 | 0;
      i30 = i7;
      i17 = i1;
      i18 = i1;
      L83 : while (1) {
       L85 : do {
        if (i9) {
         i32 = i18;
         i33 = i17;
        } else {
         i27 = HEAP32[i28 >> 2] | 0;
         i26 = i30;
         i11 = i26 + ~(i26 << 15) | 0;
         i26 = (i11 >>> 10 ^ i11) * 9 & -1;
         i11 = i26 >>> 6 ^ i26;
         i26 = i11 + ~(i11 << 11) | 0;
         i11 = i26 >>> 16 ^ i26;
         i26 = i27 & i11;
         i15 = i8 + (i26 << 2) | 0;
         i14 = HEAP32[i15 >> 2] | 0;
         if ((i14 | 0) == (i30 | 0)) {
          i34 = i15;
         } else {
          i15 = (i11 >>> 23) + ~i11 | 0;
          i11 = i15 << 12 ^ i15;
          i15 = i11 >>> 7 ^ i11;
          i11 = i15 << 2 ^ i15;
          i15 = i11 >>> 20 ^ i11 | 1;
          i11 = 0;
          i25 = i26;
          i26 = i14;
          while (1) {
           if ((i26 | 0) == 0) {
            i32 = i18;
            i33 = i17;
            break L85;
           }
           i14 = (i11 | 0) == 0 ? i15 : i11;
           i10 = i14 + i25 & i27;
           i16 = i8 + (i10 << 2) | 0;
           i20 = HEAP32[i16 >> 2] | 0;
           if ((i20 | 0) == (i30 | 0)) {
            i34 = i16;
            break;
           } else {
            i11 = i14;
            i25 = i10;
            i26 = i20;
           }
          }
         }
         if ((i34 | 0) == 0) {
          i32 = i18;
          i33 = i17;
          break;
         }
         if (i18 >>> 0 < i2 >>> 0) {
          i26 = i18;
          i25 = i18;
          while (1) {
           i11 = HEAP32[i13 >> 2] | 0;
           if (i11 >>> 0 <= i25 >>> 0) {
            i21 = 66;
            break L83;
           }
           i27 = HEAP32[i12 >> 2] | 0;
           i15 = i27 + (i25 * 12 & -1) + 8 | 0;
           i20 = HEAP32[i15 >> 2] | 0;
           i10 = _llvm_uadd_with_overflow_i32(i20 | 0, i29 | 0) | 0;
           if (!tempRet0) {
            i21 = 68;
            break L83;
           }
           i14 = i27 + (i25 * 12 & -1) | 0;
           if ((HEAP32[(HEAP32[i14 >> 2] | 0) + (i10 << 2) >> 2] | 0) == (i30 | 0)) {
            if (i11 >>> 0 <= i26 >>> 0) {
             i21 = 71;
             break L83;
            }
            i11 = i27 + (i26 * 12 & -1) + 8 | 0;
            HEAP32[i15 >> 2] = HEAP32[i11 >> 2];
            HEAP32[i11 >> 2] = i20;
            i20 = i27 + (i26 * 12 & -1) | 0;
            i11 = HEAP32[i14 >> 2] | 0;
            HEAP32[i14 >> 2] = HEAP32[i20 >> 2];
            HEAP32[i20 >> 2] = i11;
            i11 = i27 + (i25 * 12 & -1) + 4 | 0;
            i20 = i27 + (i26 * 12 & -1) + 4 | 0;
            i27 = HEAP32[i11 >> 2] | 0;
            HEAP32[i11 >> 2] = HEAP32[i20 >> 2];
            HEAP32[i20 >> 2] = i27;
            i35 = i26 + 1 | 0;
           } else {
            i35 = i26;
           }
           i27 = i25 + 1 | 0;
           if (i27 >>> 0 < i2 >>> 0) {
            i26 = i35;
            i25 = i27;
           } else {
            i36 = i35;
            break;
           }
          }
         } else {
          i36 = i18;
         }
         if ((i36 - i17 | 0) >>> 0 <= 1 >>> 0) {
          i32 = i36;
          i33 = i36;
          break;
         }
         __ZN7WebCore5XPathL9sortBlockEjjRN3WTF6VectorINS2_IPNS_4NodeELj0ENS1_15CrashOnOverflowEEELj0ES5_EEb(i17, i36, i3, i4);
         i32 = i36;
         i33 = i36;
        }
       } while (0);
       i25 = HEAP32[i30 + 28 >> 2] | 0;
       if ((i25 | 0) == 0) {
        break L81;
       } else {
        i30 = i25;
        i17 = i33;
        i18 = i32;
       }
      }
      if ((i21 | 0) == 66) {
       __ZN3WTF15CrashOnOverflow10overflowedEv();
      } else if ((i21 | 0) == 68) {
       __ZN3WTF15CrashOnOverflow10overflowedEv();
      } else if ((i21 | 0) == 71) {
       __ZN3WTF15CrashOnOverflow10overflowedEv();
      }
     }
    } while (0);
    if (!i9) {
     i31 = i8;
     break;
    }
    STACKTOP = i5;
    return;
   }
  } while (0);
  __ZN3WTF8fastFreeEPv(i31);
  STACKTOP = i5;
  return;
 }
}
function __ZNK7WebCore5XPath7NodeSet4sortEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i1 | 0;
 if ((HEAP8[i5] & 1) != 0) {
  STACKTOP = i2;
  return;
 }
 i6 = i1 + 4 | 0;
 i7 = i1 + 12 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 if (i8 >>> 0 < 2 >>> 0) {
  HEAP8[i5] = 1;
  STACKTOP = i2;
  return;
 }
 if (i8 >>> 0 > 1e4 >>> 0) {
  __ZNK7WebCore5XPath7NodeSet13traversalSortEv(i1);
  STACKTOP = i2;
  return;
 }
 i9 = i3 | 0;
 i10 = i3 + 4 | 0;
 i11 = i3 + 8 | 0;
 HEAP32[i11 >> 2] = i8;
 i12 = __ZN3WTF18fastMallocGoodSizeEj(i8 * 12 & -1) | 0;
 HEAP32[i10 >> 2] = (i12 >>> 0) / 12 & -1;
 i13 = __ZN3WTF10fastMallocEj(i12) | 0;
 i12 = i13;
 HEAP32[i9 >> 2] = i12;
 do {
  if ((i13 | 0) == 0) {
   i14 = 9;
  } else {
   i15 = i12 + (i8 * 12 & -1) | 0;
   if ((i8 | 0) == 0) {
    i14 = 41;
    break;
   } else {
    i16 = i12;
   }
   while (1) {
    HEAP32[i16 >> 2] = 0;
    HEAP32[i16 + 4 >> 2] = 0;
    HEAP32[i16 + 8 >> 2] = 0;
    i17 = i16 + 12 | 0;
    if ((i17 | 0) == (i15 | 0)) {
     i14 = 9;
     break;
    } else {
     i16 = i17;
    }
   }
  }
 } while (0);
 do {
  if ((i14 | 0) == 9) {
   i16 = (i8 | 0) == 0;
   if (i16) {
    i14 = 41;
    break;
   }
   i12 = i6 | 0;
   i13 = i4;
   i15 = 0;
   i17 = 0;
   while (1) {
    if ((HEAP32[i11 >> 2] | 0) >>> 0 <= i15 >>> 0) {
     i14 = 12;
     break;
    }
    i18 = HEAP32[i9 >> 2] | 0;
    i19 = i18 + (i15 * 12 & -1) | 0;
    if ((HEAP32[i7 >> 2] | 0) >>> 0 <= i15 >>> 0) {
     i14 = 14;
     break;
    }
    i20 = HEAP32[(HEAP32[i12 >> 2] | 0) + (i15 << 2) >> 2] | 0;
    HEAP32[i4 >> 2] = i20;
    i21 = i18 + (i15 * 12 & -1) + 8 | 0;
    i22 = HEAP32[i21 >> 2] | 0;
    i23 = i18 + (i15 * 12 & -1) + 4 | 0;
    if ((i22 | 0) == (HEAP32[i23 >> 2] | 0)) {
     i18 = i22 + 1 | 0;
     i24 = i19 | 0;
     i25 = HEAP32[i24 >> 2] | 0;
     do {
      if (i25 >>> 0 > i4 >>> 0) {
       i14 = 19;
      } else {
       if ((i25 + (i22 << 2) | 0) >>> 0 <= i4 >>> 0) {
        i14 = 19;
        break;
       }
       __ZN3WTF6VectorIPN7WebCore4NodeELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i19, i18);
       i26 = HEAP32[i24 >> 2] | 0;
       i27 = i26 + (i13 - i25 >> 2 << 2) | 0;
       i28 = i26;
      }
     } while (0);
     if ((i14 | 0) == 19) {
      i14 = 0;
      __ZN3WTF6VectorIPN7WebCore4NodeELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i19, i18);
      i27 = i4;
      i28 = HEAP32[i24 >> 2] | 0;
     }
     HEAP32[i28 + (HEAP32[i21 >> 2] << 2) >> 2] = HEAP32[i27 >> 2];
    } else {
     HEAP32[(HEAP32[i19 >> 2] | 0) + (i22 << 2) >> 2] = i20;
    }
    HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
    i25 = HEAP32[i4 >> 2] | 0;
    do {
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i25 >> 2] | 0) + 112 >> 2] & 1](i25) | 0) {
      i26 = HEAP32[(HEAP32[i4 >> 2] | 0) + 44 >> 2] | 0;
      HEAP32[i4 >> 2] = i26;
      i29 = HEAP32[i21 >> 2] | 0;
      if ((i29 | 0) != (HEAP32[i23 >> 2] | 0)) {
       HEAP32[(HEAP32[i19 >> 2] | 0) + (i29 << 2) >> 2] = i26;
       HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
       i30 = 1;
       break;
      }
      i26 = i29 + 1 | 0;
      i31 = i19 | 0;
      i32 = HEAP32[i31 >> 2] | 0;
      do {
       if (i32 >>> 0 > i4 >>> 0) {
        i14 = 27;
       } else {
        if ((i32 + (i29 << 2) | 0) >>> 0 <= i4 >>> 0) {
         i14 = 27;
         break;
        }
        __ZN3WTF6VectorIPN7WebCore4NodeELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i19, i26);
        i33 = HEAP32[i31 >> 2] | 0;
        i34 = i33 + (i13 - i32 >> 2 << 2) | 0;
        i35 = i33;
       }
      } while (0);
      if ((i14 | 0) == 27) {
       i14 = 0;
       __ZN3WTF6VectorIPN7WebCore4NodeELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i19, i26);
       i34 = i4;
       i35 = HEAP32[i31 >> 2] | 0;
      }
      HEAP32[i35 + (HEAP32[i21 >> 2] << 2) >> 2] = HEAP32[i34 >> 2];
      HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
      i30 = 1;
     } else {
      i30 = i17;
     }
    } while (0);
    i25 = HEAP32[(HEAP32[i4 >> 2] | 0) + 16 >> 2] | 0;
    i20 = i25 | 0;
    HEAP32[i4 >> 2] = i20;
    if ((i25 | 0) != 0) {
     i25 = i19 | 0;
     i22 = i20;
     while (1) {
      i20 = HEAP32[i21 >> 2] | 0;
      if ((i20 | 0) == (HEAP32[i23 >> 2] | 0)) {
       i24 = i20 + 1 | 0;
       i18 = HEAP32[i25 >> 2] | 0;
       do {
        if (i18 >>> 0 > i4 >>> 0) {
         i14 = 36;
        } else {
         if ((i18 + (i20 << 2) | 0) >>> 0 <= i4 >>> 0) {
          i14 = 36;
          break;
         }
         __ZN3WTF6VectorIPN7WebCore4NodeELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i19, i24);
         i32 = HEAP32[i25 >> 2] | 0;
         i36 = i32 + (i13 - i18 >> 2 << 2) | 0;
         i37 = i32;
        }
       } while (0);
       if ((i14 | 0) == 36) {
        i14 = 0;
        __ZN3WTF6VectorIPN7WebCore4NodeELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i19, i24);
        i36 = i4;
        i37 = HEAP32[i25 >> 2] | 0;
       }
       HEAP32[i37 + (HEAP32[i21 >> 2] << 2) >> 2] = HEAP32[i36 >> 2];
      } else {
       HEAP32[(HEAP32[i25 >> 2] | 0) + (i20 << 2) >> 2] = i22;
      }
      HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
      i18 = HEAP32[(HEAP32[i4 >> 2] | 0) + 16 >> 2] | 0;
      i22 = i18 | 0;
      HEAP32[i4 >> 2] = i22;
      if ((i18 | 0) == 0) {
       break;
      }
     }
    }
    i22 = i15 + 1 | 0;
    if (i22 >>> 0 < i8 >>> 0) {
     i15 = i22;
     i17 = i30;
    } else {
     i14 = 42;
     break;
    }
   }
   if ((i14 | 0) == 12) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i14 | 0) == 14) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i14 | 0) == 42) {
    __ZN7WebCore5XPathL9sortBlockEjjRN3WTF6VectorINS2_IPNS_4NodeELj0ENS1_15CrashOnOverflowEEELj0ES5_EEb(0, i8, i3, i30);
    if (i8 >>> 0 <= 1073741823 >>> 0) {
     i38 = i16;
     break;
    }
    _WTFCrash();
   }
  }
 } while (0);
 if ((i14 | 0) == 41) {
  __ZN7WebCore5XPathL9sortBlockEjjRN3WTF6VectorINS2_IPNS_4NodeELj0ENS1_15CrashOnOverflowEEELj0ES5_EEb(0, i8, i3, 0);
  i38 = 1;
 }
 i3 = __ZN3WTF18fastMallocGoodSizeEj(i8 << 2) | 0;
 i30 = i3 >>> 2;
 i4 = __ZN3WTF10fastMallocEj(i3) | 0;
 L68 : do {
  if (i38) {
   i39 = 0;
   i40 = i30;
   i41 = i4;
  } else {
   i3 = 0;
   i36 = i30;
   i37 = i4;
   i34 = 0;
   L69 : while (1) {
    if ((HEAP32[i11 >> 2] | 0) >>> 0 <= i34 >>> 0) {
     i14 = 46;
     break;
    }
    i35 = HEAP32[i9 >> 2] | 0;
    if ((HEAP32[i35 + (i34 * 12 & -1) + 8 >> 2] | 0) == 0) {
     i14 = 48;
     break;
    }
    i27 = HEAP32[i35 + (i34 * 12 & -1) >> 2] | 0;
    do {
     if ((i3 | 0) == (i36 | 0)) {
      i35 = i36 + 1 | 0;
      i28 = i35 + (i36 >>> 2) | 0;
      i17 = i28 >>> 0 > 16 >>> 0 ? i28 : 16;
      i28 = i17 >>> 0 > i35 >>> 0 ? i17 : i35;
      do {
       if (i36 >>> 0 < i28 >>> 0) {
        if (i28 >>> 0 > 1073741823 >>> 0) {
         i14 = 55;
         break L69;
        }
        i17 = __ZN3WTF18fastMallocGoodSizeEj(i28 << 2) | 0;
        i15 = i17 >>> 2;
        i13 = __ZN3WTF10fastMallocEj(i17) | 0;
        i17 = i13;
        i12 = i37;
        _memcpy(i13 | 0, i12 | 0, i36 << 2) | 0;
        if ((i37 | 0) == 0) {
         i42 = i17;
         i43 = i15;
         break;
        }
        i13 = (i17 | 0) == (i37 | 0);
        __ZN3WTF8fastFreeEPv(i12);
        i42 = i13 ? 0 : i17;
        i43 = i13 ? 0 : i15;
       } else {
        i42 = i37;
        i43 = i36;
       }
      } while (0);
      i28 = HEAP32[i27 >> 2] | 0;
      HEAP32[i42 + (i36 << 2) >> 2] = i28;
      if ((i28 | 0) == 0) {
       i44 = i42;
       i45 = i43;
       i46 = i35;
       break;
      }
      i20 = i28 + 8 | 0;
      HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
      i44 = i42;
      i45 = i43;
      i46 = i35;
     } else {
      i20 = HEAP32[i27 >> 2] | 0;
      HEAP32[i37 + (i3 << 2) >> 2] = i20;
      if ((i20 | 0) != 0) {
       i28 = i20 + 8 | 0;
       HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 1;
      }
      i44 = i37;
      i45 = i36;
      i46 = i3 + 1 | 0;
     }
    } while (0);
    i27 = i34 + 1 | 0;
    if (i27 >>> 0 < i8 >>> 0) {
     i3 = i46;
     i36 = i45;
     i37 = i44;
     i34 = i27;
    } else {
     i39 = i46;
     i40 = i45;
     i41 = i44;
     break L68;
    }
   }
   if ((i14 | 0) == 46) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i14 | 0) == 48) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i14 | 0) == 55) {
    _WTFCrash();
   }
  }
 } while (0);
 i14 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i39;
 i39 = i6 | 0;
 i6 = HEAP32[i39 >> 2] | 0;
 HEAP32[i39 >> 2] = i41;
 HEAP32[i1 + 8 >> 2] = i40;
 HEAP8[i5] = 1;
 if ((i14 | 0) != 0) {
  i5 = i6 + (i14 << 2) | 0;
  i14 = i6;
  while (1) {
   i40 = HEAP32[i14 >> 2] | 0;
   do {
    if ((i40 | 0) != 0) {
     i1 = i40 + 8 | 0;
     i41 = i1 | 0;
     i39 = (HEAP32[i41 >> 2] | 0) - 1 | 0;
     HEAP32[i41 >> 2] = i39;
     if ((i39 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
    }
   } while (0);
   i14 = i14 + 4 | 0;
   if ((i14 | 0) == (i5 | 0)) {
    break;
   }
  }
 }
 if ((i6 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i6);
 }
 i6 = HEAP32[i11 >> 2] | 0;
 if ((i6 | 0) != 0) {
  i5 = HEAP32[i9 >> 2] | 0;
  i14 = i5 + (i6 * 12 & -1) | 0;
  i6 = i5;
  while (1) {
   i5 = i6 + 8 | 0;
   if ((HEAP32[i5 >> 2] | 0) != 0) {
    HEAP32[i5 >> 2] = 0;
   }
   i5 = i6 | 0;
   i40 = HEAP32[i5 >> 2] | 0;
   if ((i40 | 0) != 0) {
    HEAP32[i5 >> 2] = 0;
    HEAP32[i6 + 4 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i40);
   }
   i6 = i6 + 12 | 0;
   if ((i6 | 0) == (i14 | 0)) {
    break;
   }
  }
  HEAP32[i11 >> 2] = 0;
 }
 i11 = HEAP32[i9 >> 2] | 0;
 if ((i11 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 HEAP32[i9 >> 2] = 0;
 HEAP32[i10 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i11);
 STACKTOP = i2;
 return;
}
function __ZN3WTF9HashTableIPN7WebCore4NodeES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableIPN7WebCore4NodeES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6expandEPS3_(i2, 0) | 0;
  i7 = HEAP32[i5 >> 2] | 0;
 } else {
  i7 = i6;
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
 i10 = i7 + (i3 << 2) | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i12 = i10;
   i13 = 9;
  } else {
   i14 = (i9 >>> 23) + ~i9 | 0;
   i15 = i14 << 12 ^ i14;
   i14 = i15 >>> 7 ^ i15;
   i15 = i14 << 2 ^ i14;
   i14 = i15 >>> 20 ^ i15 | 1;
   i15 = 0;
   i16 = 0;
   i17 = i3;
   i18 = i10;
   i19 = i11;
   while (1) {
    if ((i19 | 0) == (i8 | 0)) {
     i13 = 6;
     break;
    }
    i20 = (i19 | 0) == -1 ? i18 : i16;
    i21 = (i15 | 0) == 0 ? i14 : i15;
    i22 = i21 + i17 & i6;
    i23 = i7 + (i22 << 2) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    if ((i24 | 0) == 0) {
     i13 = 8;
     break;
    } else {
     i15 = i21;
     i16 = i20;
     i17 = i22;
     i18 = i23;
     i19 = i24;
    }
   }
   if ((i13 | 0) == 6) {
    i19 = i7 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
    i17 = i1;
    HEAP32[i17 >> 2] = i18;
    HEAP32[i17 + 4 >> 2] = i19;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i13 | 0) == 8) {
    if ((i20 | 0) == 0) {
     i12 = i23;
     i13 = 9;
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
 if ((i13 | 0) == 9) {
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
  i13 = __ZN3WTF9HashTableIPN7WebCore4NodeES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6expandEPS3_(i2, i25) | 0;
  i27 = i13;
  i28 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i28 << 2) | 0;
 i28 = i1;
 HEAP32[i28 >> 2] = i27;
 HEAP32[i28 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableIPN7WebCore4NodeES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableIPN7WebCore4NodeES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6expandEPS3_(i2, 0) | 0;
  i7 = HEAP32[i5 >> 2] | 0;
 } else {
  i7 = i6;
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
 i10 = i7 + (i3 << 2) | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i12 = i10;
   i13 = 9;
  } else {
   i14 = (i9 >>> 23) + ~i9 | 0;
   i15 = i14 << 12 ^ i14;
   i14 = i15 >>> 7 ^ i15;
   i15 = i14 << 2 ^ i14;
   i14 = i15 >>> 20 ^ i15 | 1;
   i15 = 0;
   i16 = 0;
   i17 = i3;
   i18 = i10;
   i19 = i11;
   while (1) {
    if ((i19 | 0) == (i8 | 0)) {
     i13 = 6;
     break;
    }
    i20 = (i19 | 0) == -1 ? i18 : i16;
    i21 = (i15 | 0) == 0 ? i14 : i15;
    i22 = i21 + i17 & i6;
    i23 = i7 + (i22 << 2) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    if ((i24 | 0) == 0) {
     i13 = 8;
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
    if ((i20 | 0) == 0) {
     i12 = i23;
     i13 = 9;
     break;
    }
    HEAP32[i20 >> 2] = 0;
    i19 = i2 + 16 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) - 1;
    i25 = i20;
    i26 = i19;
    break;
   } else if ((i13 | 0) == 6) {
    i19 = i7 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
    i17 = i1;
    HEAP32[i17 >> 2] = i18;
    HEAP32[i17 + 4 >> 2] = i19;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   }
  }
 } while (0);
 if ((i13 | 0) == 9) {
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
  i13 = __ZN3WTF9HashTableIPN7WebCore4NodeES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6expandEPS3_(i2, i25) | 0;
  i27 = i13;
  i28 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i28 << 2) | 0;
 i28 = i1;
 HEAP32[i28 >> 2] = i27;
 HEAP32[i28 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableIPN7WebCore4NodeES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6expandEPS3_(i1, i2) {
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
 HEAP32[i4 >> 2] = __ZN3WTF16fastZeroedMallocEj(i5 << 2) | 0;
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
  i5 = i7 + (i11 << 2) | 0;
  i13 = HEAP32[i5 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i12;
  } else {
   i16 = HEAP32[i4 >> 2] | 0;
   i17 = HEAP32[i3 >> 2] | 0;
   i18 = i14 + ~(i14 << 15) | 0;
   i14 = (i18 >>> 10 ^ i18) * 9 & -1;
   i18 = i14 >>> 6 ^ i14;
   i14 = i18 + ~(i18 << 11) | 0;
   i18 = i14 >>> 16 ^ i14;
   i14 = i17 & i18;
   i19 = i16 + (i14 << 2) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L10 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 7;
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
       break L10;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i17;
      i34 = i16 + (i33 << 2) | 0;
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
   HEAP32[i30 >> 2] = i13;
   i15 = (i5 | 0) == (i2 | 0) ? i30 : i12;
  }
  i16 = i11 + 1 | 0;
  if ((i16 | 0) == (i6 | 0)) {
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
function __ZN3WTF6VectorIPN7WebCore4NodeELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZNK7WebCore5XPath7NodeSet9firstNodeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 12 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 __ZNK7WebCore5XPath7NodeSet4sortEv(i1);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 i3 = HEAP32[HEAP32[i1 + 4 >> 2] >> 2] | 0;
 return i3 | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZNK7WebCore5XPath7NodeSet7anyNodeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP32[i1 + 12 >> 2] | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = HEAP32[HEAP32[i1 + 4 >> 2] >> 2] | 0;
 return i2 | 0;
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
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_vi": invoke_vi, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN3WTF9HashTableIPN7WebCore4NodeES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_","__ZN3WTF9HashTableIPN7WebCore4NodeES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6expandEPS3_","__ZNK7WebCore5XPath7NodeSet4sortEv","__ZN3WTF15CrashOnOverflow10overflowedEv","_memset","__ZN3WTF9HashTableIPN7WebCore4NodeES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_","__ZNK7WebCore5XPath7NodeSet9firstNodeEv","_memcpy","__ZNK7WebCore5XPath7NodeSet7anyNodeEv","_strlen","__ZN3WTF6VectorIPN7WebCore4NodeELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZNK7WebCore5XPath7NodeSet13traversalSortEv","__ZN7WebCore5XPathL9sortBlockEjjRN3WTF6VectorINS2_IPNS_4NodeELj0ENS1_15CrashOnOverflowEEELj0ES5_EEb"]

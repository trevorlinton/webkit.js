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
H_BASE = parentModule["_malloc"](128 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 128;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore5XPath6FilterC1ENSt3__110unique_ptrINS0_10ExpressionENS2_14default_deleteIS4_EEEEN3WTF6VectorIS7_Lj0ENS8_15CrashOnOverflowEEE;
var __ZN7WebCore5XPath12LocationPathC1Ev;
var __ZN7WebCore5XPath4PathC1ENSt3__110unique_ptrINS0_10ExpressionENS2_14default_deleteIS4_EEEENS3_INS0_12LocationPathENS5_IS8_EEEE;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
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
function invoke_viii(index,a1,a2,a3) {
  try {
    Module["dynCall_viii"](index,a1,a2,a3);
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
  var __ZTVN7WebCore5XPath12LocationPathE=(H_BASE+72)|0;
  var __ZTVN7WebCore5XPath10ExpressionE=(H_BASE+104)|0;
  var __ZTVN7WebCore5XPath4PathE=(H_BASE+40)|0;
  var __ZTVN7WebCore5XPath6FilterE=(H_BASE+8)|0;
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
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___cxa_pure_virtual=env.___cxa_pure_virtual;
  var ___setErrNo=env.___setErrNo;
  var _llvm_uadd_with_overflow_i32=env._llvm_uadd_with_overflow_i32;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZNK7WebCore5XPath12LocationPath8evaluateERNS0_7NodeSetE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i4 = i3 | 0;
 i5 = i3 + 24 | 0;
 i6 = i3 + 40 | 0;
 i7 = i3 + 48 | 0;
 i8 = i2 | 0;
 if ((HEAP8[i8] & 1) == 0) {
  i9 = (HEAP32[i2 + 12 >> 2] | 0) >>> 0 < 2 >>> 0;
 } else {
  i9 = 1;
 }
 i10 = i1 + 28 | 0;
 if ((HEAP32[i10 >> 2] | 0) == 0) {
  i11 = i9;
  i12 = i11 & 1;
  HEAP8[i8] = i12;
  STACKTOP = i3;
  return;
 }
 i13 = i1 + 20 | 0;
 i1 = i4;
 i14 = i2 + 1 | 0;
 i15 = i2 + 12 | 0;
 i16 = i2 + 4 | 0;
 i17 = i2 + 8 | 0;
 i2 = i4 | 0;
 i18 = i5 | 0;
 i19 = i5 + 1 | 0;
 i20 = i5 + 4 | 0;
 i21 = i5 + 8 | 0;
 i22 = i5 + 12 | 0;
 i23 = i4 | 0;
 i4 = i7 + 8 | 0;
 i24 = 0;
 i25 = i9;
 L7 : while (1) {
  i9 = HEAP32[(HEAP32[i13 >> 2] | 0) + (i24 << 2) >> 2] | 0;
  _memset(i1 | 0, 0, 20) | 0;
  i26 = (HEAP8[i14] & 1) == 0;
  if (i26) {
   i27 = HEAP32[i15 >> 2] | 0;
   if (i27 >>> 0 < 2 >>> 0) {
    i28 = 7;
   } else {
    i29 = i27;
    i30 = 0;
    i31 = 1;
    i32 = 0;
    i28 = 14;
   }
  } else {
   i28 = 7;
  }
  do {
   if ((i28 | 0) == 7) {
    i28 = 0;
    switch (HEAP32[i9 >> 2] | 0) {
    case 3:
    case 12:
    case 4:
    case 5:
    case 2:
     {
      i33 = 0;
      break;
     }
    default:
     {
      i33 = 1;
     }
    }
    i27 = i25 & (i33 ^ 1);
    if (i26) {
     i34 = HEAP32[i15 >> 2] | 0;
     if (i34 >>> 0 >= 2 >>> 0) {
      i29 = i34;
      i30 = i27;
      i31 = i33;
      i32 = 0;
      i28 = 14;
      break;
     }
    }
    i34 = HEAP32[i9 >> 2] | 0;
    if ((i34 | 0) == 3 | (i34 | 0) == 12) {
     i35 = 1;
    } else {
     i35 = 0;
    }
    i34 = HEAP32[i15 >> 2] | 0;
    if ((i34 | 0) == 0) {
     i36 = 0;
     i37 = 0;
     i38 = 0;
     i39 = i27;
     i40 = 0;
     i41 = 0;
     i42 = i35;
    } else {
     i29 = i34;
     i30 = i27;
     i31 = i33;
     i32 = i35;
     i28 = 14;
    }
   }
  } while (0);
  if ((i28 | 0) == 14) {
   i28 = 0;
   i26 = 0;
   i27 = 0;
   i34 = 0;
   i43 = i30;
   i44 = 0;
   i45 = i29;
   while (1) {
    HEAP8[i18] = 1;
    HEAP8[i19] = 0;
    HEAP32[i20 >> 2] = 0;
    HEAP32[i21 >> 2] = 0;
    HEAP32[i22 >> 2] = 0;
    if (i45 >>> 0 <= i44 >>> 0) {
     i28 = 16;
     break L7;
    }
    __ZNK7WebCore5XPath4Step8evaluateERNS_4NodeERNS0_7NodeSetE(i9, HEAP32[(HEAP32[i16 >> 2] | 0) + (i44 << 2) >> 2] | 0, i5);
    i46 = HEAP32[i22 >> 2] | 0;
    i47 = (i46 >>> 0 < 2 >>> 0 | (HEAP8[i18] & 1) != 0) & i43;
    do {
     if ((i46 | 0) == 0) {
      i48 = i34;
      i49 = i27;
      i50 = i26;
     } else {
      if (i31) {
       i51 = i26;
       i52 = i27;
       i53 = i34;
       i54 = 0;
       while (1) {
        HEAP32[i6 >> 2] = HEAP32[(HEAP32[i20 >> 2] | 0) + (i54 << 2) >> 2];
        __ZN3WTF9HashTableIPN7WebCore4NodeES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i7, i23, i6, i6);
        if ((HEAP8[i4] & 1) == 0) {
         i55 = i53;
         i56 = i52;
         i57 = i51;
        } else {
         i58 = HEAP32[i6 >> 2] | 0;
         if ((i58 | 0) != 0) {
          i59 = i58 + 8 | 0;
          HEAP32[i59 >> 2] = (HEAP32[i59 >> 2] | 0) + 1;
         }
         if ((i51 | 0) == (i52 | 0)) {
          i59 = i52 + 1 | 0;
          i60 = i59 + (i52 >>> 2) | 0;
          i61 = i60 >>> 0 > 16 >>> 0 ? i60 : 16;
          i60 = i61 >>> 0 > i59 >>> 0 ? i61 : i59;
          do {
           if (i52 >>> 0 < i60 >>> 0) {
            if (i60 >>> 0 > 1073741823 >>> 0) {
             i28 = 68;
             break L7;
            }
            i59 = __ZN3WTF18fastMallocGoodSizeEj(i60 << 2) | 0;
            i61 = i59 >>> 2;
            i62 = __ZN3WTF10fastMallocEj(i59) | 0;
            i59 = i62;
            i63 = i53;
            _memcpy(i62 | 0, i63 | 0, i52 << 2) | 0;
            if ((i53 | 0) == 0) {
             i64 = i59;
             i65 = i61;
             break;
            }
            i62 = (i59 | 0) == (i53 | 0);
            __ZN3WTF8fastFreeEPv(i63);
            i64 = i62 ? 0 : i59;
            i65 = i62 ? 0 : i61;
           } else {
            i64 = i53;
            i65 = i52;
           }
          } while (0);
          HEAP32[i64 + (i52 << 2) >> 2] = i58;
          i66 = i64;
          i67 = i65;
         } else {
          HEAP32[i53 + (i51 << 2) >> 2] = i58;
          i66 = i53;
          i67 = i52;
         }
         i55 = i66;
         i56 = i67;
         i57 = i51 + 1 | 0;
        }
        i60 = i54 + 1 | 0;
        i61 = HEAP32[i22 >> 2] | 0;
        if (i60 >>> 0 < i61 >>> 0) {
         i51 = i57;
         i52 = i56;
         i53 = i55;
         i54 = i60;
        } else {
         i68 = i57;
         i69 = i56;
         i70 = i55;
         i71 = i61;
         break;
        }
       }
      } else {
       i54 = i26;
       i53 = i27;
       i52 = i34;
       i51 = 0;
       while (1) {
        i61 = HEAP32[(HEAP32[i20 >> 2] | 0) + (i51 << 2) >> 2] | 0;
        HEAP32[i6 >> 2] = i61;
        if ((i61 | 0) != 0) {
         i60 = i61 + 8 | 0;
         HEAP32[i60 >> 2] = (HEAP32[i60 >> 2] | 0) + 1;
        }
        if ((i54 | 0) == (i53 | 0)) {
         i60 = i53 + 1 | 0;
         i62 = i60 + (i53 >>> 2) | 0;
         i59 = i62 >>> 0 > 16 >>> 0 ? i62 : 16;
         i62 = i59 >>> 0 > i60 >>> 0 ? i59 : i60;
         do {
          if (i53 >>> 0 < i62 >>> 0) {
           if (i62 >>> 0 > 1073741823 >>> 0) {
            i28 = 67;
            break L7;
           }
           i60 = __ZN3WTF18fastMallocGoodSizeEj(i62 << 2) | 0;
           i59 = i60 >>> 2;
           i63 = __ZN3WTF10fastMallocEj(i60) | 0;
           i60 = i63;
           i72 = i52;
           _memcpy(i63 | 0, i72 | 0, i53 << 2) | 0;
           if ((i52 | 0) == 0) {
            i73 = i60;
            i74 = i59;
            break;
           }
           i63 = (i60 | 0) == (i52 | 0);
           __ZN3WTF8fastFreeEPv(i72);
           i73 = i63 ? 0 : i60;
           i74 = i63 ? 0 : i59;
          } else {
           i73 = i52;
           i74 = i53;
          }
         } while (0);
         HEAP32[i73 + (i53 << 2) >> 2] = i61;
         i75 = i73;
         i76 = i74;
        } else {
         HEAP32[i52 + (i54 << 2) >> 2] = i61;
         i75 = i52;
         i76 = i53;
        }
        i62 = i54 + 1 | 0;
        i58 = HEAP32[i22 >> 2] | 0;
        i59 = i51 + 1 | 0;
        if (i59 >>> 0 < i58 >>> 0) {
         i54 = i62;
         i53 = i76;
         i52 = i75;
         i51 = i59;
        } else {
         i68 = i62;
         i69 = i76;
         i70 = i75;
         i71 = i58;
         break;
        }
       }
      }
      if ((i71 | 0) == 0) {
       i48 = i70;
       i49 = i69;
       i50 = i68;
       break;
      }
      i51 = HEAP32[i20 >> 2] | 0;
      i52 = i51 + (i71 << 2) | 0;
      i53 = i51;
      while (1) {
       i51 = HEAP32[i53 >> 2] | 0;
       do {
        if ((i51 | 0) != 0) {
         i54 = i51 + 8 | 0;
         i58 = i54 | 0;
         i62 = (HEAP32[i58 >> 2] | 0) - 1 | 0;
         HEAP32[i58 >> 2] = i62;
         if ((i62 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i54 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i54 - 8 | 0);
        }
       } while (0);
       i53 = i53 + 4 | 0;
       if ((i53 | 0) == (i52 | 0)) {
        break;
       }
      }
      HEAP32[i22 >> 2] = 0;
      i48 = i70;
      i49 = i69;
      i50 = i68;
     }
    } while (0);
    i46 = HEAP32[i20 >> 2] | 0;
    if ((i46 | 0) != 0) {
     HEAP32[i20 >> 2] = 0;
     HEAP32[i21 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i46);
    }
    i46 = i44 + 1 | 0;
    i77 = HEAP32[i15 >> 2] | 0;
    if (i46 >>> 0 < i77 >>> 0) {
     i26 = i50;
     i27 = i49;
     i34 = i48;
     i43 = i47;
     i44 = i46;
     i45 = i77;
    } else {
     break;
    }
   }
   i36 = i50;
   i37 = i49;
   i38 = i48;
   i39 = i47;
   i40 = i77;
   i41 = HEAP32[i2 >> 2] | 0;
   i42 = i32;
  }
  HEAP8[i8] = 1;
  HEAP8[i14] = i42;
  HEAP32[i15 >> 2] = i36;
  i45 = HEAP32[i16 >> 2] | 0;
  HEAP32[i16 >> 2] = i38;
  HEAP32[i17 >> 2] = i37;
  if ((i41 | 0) != 0) {
   __ZN3WTF8fastFreeEPv(i41);
  }
  if ((i40 | 0) != 0) {
   i44 = i45 + (i40 << 2) | 0;
   i43 = i45;
   while (1) {
    i34 = HEAP32[i43 >> 2] | 0;
    do {
     if ((i34 | 0) != 0) {
      i27 = i34 + 8 | 0;
      i26 = i27 | 0;
      i9 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
      HEAP32[i26 >> 2] = i9;
      if ((i9 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i27 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i27 - 8 | 0);
     }
    } while (0);
    i43 = i43 + 4 | 0;
    if ((i43 | 0) == (i44 | 0)) {
     break;
    }
   }
  }
  if ((i45 | 0) != 0) {
   __ZN3WTF8fastFreeEPv(i45);
  }
  i44 = i24 + 1 | 0;
  if (i44 >>> 0 < (HEAP32[i10 >> 2] | 0) >>> 0) {
   i24 = i44;
   i25 = i39;
  } else {
   i11 = i39;
   i28 = 69;
   break;
  }
 }
 if ((i28 | 0) == 16) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i28 | 0) == 67) {
  _WTFCrash();
 } else if ((i28 | 0) == 68) {
  _WTFCrash();
 } else if ((i28 | 0) == 69) {
  i12 = i11 & 1;
  HEAP8[i8] = i12;
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore5XPath12LocationPath8evaluateEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 56 | 0;
 i7 = __ZN7WebCore5XPath10Expression17evaluationContextEv() | 0;
 i8 = i5 | 0;
 i9 = i7 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 HEAP32[i8 >> 2] = i10;
 if ((i10 | 0) != 0) {
  i11 = i10 + 8 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
 }
 i11 = i5 + 4 | 0;
 i10 = i7 + 4 | 0;
 HEAP32[i11 >> 2] = HEAP32[i10 >> 2];
 i12 = i5 + 8 | 0;
 i13 = i7 + 8 | 0;
 HEAP32[i12 >> 2] = HEAP32[i13 >> 2];
 i14 = i5 + 12 | 0;
 i15 = i14 | 0;
 _memset(i14 | 0, 0, 20) | 0;
 i16 = HEAP32[i7 + 12 >> 2] | 0;
 i17 = HEAP32[i7 + 16 >> 2] | 0;
 i18 = i16 + (i17 << 3) | 0;
 L4 : do {
  if ((HEAP32[i7 + 24 >> 2] | 0) != 0) {
   L6 : do {
    if ((i17 | 0) == 0) {
     i19 = i16;
    } else {
     i20 = i16;
     while (1) {
      i21 = HEAP32[i20 >> 2] | 0;
      if (!((i21 | 0) == (-1 | 0) | (i21 | 0) == 0)) {
       i19 = i20;
       break L6;
      }
      i20 = i20 + 8 | 0;
      if ((i20 | 0) == (i18 | 0)) {
       break L4;
      }
     }
    }
   } while (0);
   if ((i19 | 0) == (i18 | 0)) {
    break;
   } else {
    i22 = i19;
   }
   while (1) {
    __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_10StringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_E3addINS_22IdentityHashTranslatorIS6_EERKS1_RKS3_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S3_S5_S6_SB_S9_EEEEOT0_OT1_(i4, i15, i22 | 0, i22);
    i20 = i22 + 8 | 0;
    if ((i20 | 0) == (i18 | 0)) {
     break L4;
    } else {
     i23 = i20;
    }
    while (1) {
     i20 = HEAP32[i23 >> 2] | 0;
     if (!((i20 | 0) == (-1 | 0) | (i20 | 0) == 0)) {
      break;
     }
     i20 = i23 + 8 | 0;
     if ((i20 | 0) == (i18 | 0)) {
      break L4;
     } else {
      i23 = i20;
     }
    }
    if ((i23 | 0) == (i18 | 0)) {
     break;
    } else {
     i22 = i23;
    }
   }
  }
 } while (0);
 i23 = i5 + 32 | 0;
 i22 = i7 + 32 | 0;
 HEAP8[i23] = HEAP8[i22] & 1;
 i18 = HEAP32[i9 >> 2] | 0;
 do {
  if ((HEAP8[i2 + 32 | 0] & 1) == 0) {
   i24 = i18;
  } else {
   if ((HEAP32[(HEAP32[i18 + 20 >> 2] | 0) + 8 >> 2] | 0) == (i18 | 0)) {
    i24 = i18;
    break;
   }
   if ((HEAP32[i18 + 12 >> 2] & 256 | 0) != 0) {
    i24 = __ZNK7WebCore4Node13ownerDocumentEv(i18) | 0;
    break;
   }
   if ((i18 | 0) == 0) {
    i24 = 0;
    break;
   } else {
    i25 = i18;
   }
   while (1) {
    i15 = HEAP32[i25 + 16 >> 2] | 0;
    if ((i15 | 0) == 0) {
     i24 = i25;
     break;
    } else {
     i25 = i15 | 0;
    }
   }
  }
 } while (0);
 i25 = i6 | 0;
 HEAP8[i25] = 1;
 i18 = i6 + 1 | 0;
 HEAP8[i18] = 0;
 i15 = i6 + 4 | 0;
 HEAP32[i15 >> 2] = 0;
 i4 = i6 + 8 | 0;
 HEAP32[i4 >> 2] = 0;
 i19 = i6 + 12 | 0;
 HEAP32[i19 >> 2] = 0;
 do {
  if ((i24 | 0) == 0) {
   i26 = 0;
   i27 = 0;
   i28 = i6 + 4 | 0;
   i29 = 22;
  } else {
   i16 = i24 + 8 | 0;
   HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
   i16 = HEAP32[i19 >> 2] | 0;
   i17 = HEAP32[i4 >> 2] | 0;
   i20 = i6 + 4 | 0;
   if ((i16 | 0) == (i17 | 0)) {
    i26 = i17;
    i27 = i16;
    i28 = i20;
    i29 = 22;
    break;
   }
   HEAP32[(HEAP32[i20 >> 2] | 0) + (i16 << 2) >> 2] = i24;
   i30 = i16;
  }
 } while (0);
 if ((i29 | 0) == 22) {
  i29 = i26 + 1 | 0;
  i16 = i29 + (i26 >>> 2) | 0;
  i20 = i16 >>> 0 > 16 >>> 0 ? i16 : 16;
  i16 = i20 >>> 0 > i29 >>> 0 ? i20 : i29;
  i29 = i28 | 0;
  i28 = HEAP32[i29 >> 2] | 0;
  do {
   if (i26 >>> 0 < i16 >>> 0) {
    if (i16 >>> 0 > 1073741823 >>> 0) {
     _WTFCrash();
    }
    i20 = __ZN3WTF18fastMallocGoodSizeEj(i16 << 2) | 0;
    HEAP32[i4 >> 2] = i20 >>> 2;
    i17 = __ZN3WTF10fastMallocEj(i20) | 0;
    i20 = i17;
    HEAP32[i29 >> 2] = i20;
    i21 = i28;
    _memcpy(i17 | 0, i21 | 0, i26 << 2) | 0;
    if ((i28 | 0) == 0) {
     i31 = i20;
     break;
    }
    if ((i20 | 0) == (i28 | 0)) {
     HEAP32[i29 >> 2] = 0;
     HEAP32[i4 >> 2] = 0;
     i32 = 0;
    } else {
     i32 = i20;
    }
    __ZN3WTF8fastFreeEPv(i21);
    i31 = i32;
   } else {
    i31 = i28;
   }
  } while (0);
  HEAP32[i31 + (i26 << 2) >> 2] = i24;
  i30 = i27;
 }
 HEAP32[i19 >> 2] = i30 + 1;
 __ZNK7WebCore5XPath12LocationPath8evaluateERNS0_7NodeSetE(i2, i6);
 i6 = HEAP32[i8 >> 2] | 0;
 if ((i6 | 0) != 0) {
  i2 = i6 + 8 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 }
 i2 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = i6;
 do {
  if ((i2 | 0) != 0) {
   i6 = i2 + 8 | 0;
   i9 = i6 | 0;
   i30 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   HEAP32[i9 >> 2] = i30;
   if ((i30 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  }
 } while (0);
 HEAP32[i10 >> 2] = HEAP32[i11 >> 2];
 HEAP32[i13 >> 2] = HEAP32[i12 >> 2];
 __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_10StringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_EaSERKSC_(i7 + 12 | 0, i5 + 12 | 0) | 0;
 HEAP8[i22] = HEAP8[i23] & 1;
 i23 = HEAP8[i25] & 1;
 i25 = HEAP8[i18] & 1;
 i18 = HEAP32[i19 >> 2] | 0;
 HEAP32[i19 >> 2] = 0;
 i19 = HEAP32[i15 >> 2] | 0;
 HEAP32[i15 >> 2] = 0;
 i15 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 >> 2] = 0;
 i4 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i4 >> 2] = 1;
 HEAP32[i4 + 4 >> 2] = 0;
 HEAP8[i4 + 8 | 0] = i23;
 HEAP8[i4 + 9 | 0] = i25;
 HEAP32[i4 + 20 >> 2] = i18;
 HEAP32[i4 + 12 >> 2] = i19;
 HEAP32[i4 + 16 >> 2] = i15;
 HEAP32[i1 + 16 >> 2] = i4;
 i4 = HEAP32[i14 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i14 = HEAP32[i5 + 16 >> 2] | 0;
  if ((i14 | 0) > 0) {
   i5 = 0;
   while (1) {
    i1 = i4 + (i5 << 3) | 0;
    do {
     if ((HEAP32[i1 >> 2] | 0) != -1) {
      i15 = HEAP32[i4 + (i5 << 3) + 4 >> 2] | 0;
      do {
       if ((i15 | 0) != 0) {
        i19 = i15 | 0;
        i18 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
        if ((i18 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i15);
         break;
        } else {
         HEAP32[i19 >> 2] = i18;
         break;
        }
       }
      } while (0);
      i15 = HEAP32[i1 >> 2] | 0;
      if ((i15 | 0) == 0) {
       break;
      }
      i18 = i15 | 0;
      i19 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
      if ((i19 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i15);
       break;
      } else {
       HEAP32[i18 >> 2] = i19;
       break;
      }
     }
    } while (0);
    i5 = i5 + 1 | 0;
    if ((i5 | 0) >= (i14 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i4);
 }
 i4 = HEAP32[i8 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i8 = i4 + 8 | 0;
 i4 = i8 | 0;
 i14 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 HEAP32[i4 >> 2] = i14;
 if ((i14 | 0) >= 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore5XPath6Filter8evaluateEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0;
 i3 = HEAP32[i2 + 20 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] & 7](i1, i3);
 i3 = __ZN7WebCore5XPath5Value17modifiableNodeSetEv(i1) | 0;
 __ZNK7WebCore5XPath7NodeSet4sortEv(i3);
 i1 = __ZN7WebCore5XPath10Expression17evaluationContextEv() | 0;
 i4 = i2 + 32 | 0;
 if ((HEAP32[i4 >> 2] | 0) == 0) {
  return;
 }
 i5 = i3 + 12 | 0;
 i6 = i1 + 4 | 0;
 i7 = i1 + 8 | 0;
 i8 = i3 | 0;
 i9 = i3 + 1 | 0;
 i10 = i3 + 4 | 0;
 i11 = i3 + 8 | 0;
 i3 = i1 | 0;
 i1 = i2 + 24 | 0;
 i2 = 0;
 L4 : while (1) {
  HEAP32[i6 >> 2] = HEAP32[i5 >> 2];
  HEAP32[i7 >> 2] = 0;
  if ((HEAP32[i5 >> 2] | 0) == 0) {
   i12 = 0;
   i13 = 0;
   i14 = 0;
   i15 = 0;
  } else {
   i16 = 0;
   i17 = 0;
   i18 = 0;
   i19 = 0;
   while (1) {
    i20 = HEAP32[(HEAP32[i10 >> 2] | 0) + (i19 << 2) >> 2] | 0;
    i21 = (i20 | 0) == 0;
    if (!i21) {
     i22 = i20 + 8 | 0;
     HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
    }
    i22 = HEAP32[i3 >> 2] | 0;
    HEAP32[i3 >> 2] = i20;
    do {
     if ((i22 | 0) != 0) {
      i23 = i22 + 8 | 0;
      i24 = i23 | 0;
      i25 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
      HEAP32[i24 >> 2] = i25;
      if ((i25 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i23 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i23 - 8 | 0);
     }
    } while (0);
    HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
    if ((HEAP32[i4 >> 2] | 0) >>> 0 <= i2 >>> 0) {
     i26 = 11;
     break L4;
    }
    if (__ZN7WebCore5XPath17evaluatePredicateERKNS0_10ExpressionE(HEAP32[(HEAP32[i1 >> 2] | 0) + (i2 << 2) >> 2] | 0) | 0) {
     if (!i21) {
      i22 = i20 + 8 | 0;
      HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
     }
     if ((i16 | 0) == (i17 | 0)) {
      i22 = i17 + 1 | 0;
      i23 = i22 + (i17 >>> 2) | 0;
      i25 = i23 >>> 0 > 16 >>> 0 ? i23 : 16;
      i23 = i25 >>> 0 > i22 >>> 0 ? i25 : i22;
      do {
       if (i17 >>> 0 < i23 >>> 0) {
        if (i23 >>> 0 > 1073741823 >>> 0) {
         i26 = 19;
         break L4;
        }
        i22 = __ZN3WTF18fastMallocGoodSizeEj(i23 << 2) | 0;
        i25 = i22 >>> 2;
        i24 = __ZN3WTF10fastMallocEj(i22) | 0;
        i22 = i24;
        i27 = i18;
        _memcpy(i24 | 0, i27 | 0, i17 << 2) | 0;
        if ((i18 | 0) == 0) {
         i28 = i22;
         i29 = i25;
         break;
        }
        i24 = (i22 | 0) == (i18 | 0);
        __ZN3WTF8fastFreeEPv(i27);
        i28 = i24 ? 0 : i22;
        i29 = i24 ? 0 : i25;
       } else {
        i28 = i18;
        i29 = i17;
       }
      } while (0);
      HEAP32[i28 + (i17 << 2) >> 2] = i20;
      i30 = i28;
      i31 = i29;
     } else {
      HEAP32[i18 + (i16 << 2) >> 2] = i20;
      i30 = i18;
      i31 = i17;
     }
     i32 = i30;
     i33 = i31;
     i34 = i16 + 1 | 0;
    } else {
     i32 = i18;
     i33 = i17;
     i34 = i16;
    }
    i23 = i19 + 1 | 0;
    i21 = HEAP32[i5 >> 2] | 0;
    if (i23 >>> 0 < i21 >>> 0) {
     i16 = i34;
     i17 = i33;
     i18 = i32;
     i19 = i23;
    } else {
     i12 = i34;
     i13 = i33;
     i14 = i32;
     i15 = i21;
     break;
    }
   }
  }
  HEAP8[i8] = 1;
  HEAP8[i9] = 0;
  HEAP32[i5 >> 2] = i12;
  i19 = HEAP32[i10 >> 2] | 0;
  HEAP32[i10 >> 2] = i14;
  HEAP32[i11 >> 2] = i13;
  if ((i15 | 0) != 0) {
   i18 = i19 + (i15 << 2) | 0;
   i17 = i19;
   while (1) {
    i16 = HEAP32[i17 >> 2] | 0;
    do {
     if ((i16 | 0) != 0) {
      i21 = i16 + 8 | 0;
      i23 = i21 | 0;
      i25 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
      HEAP32[i23 >> 2] = i25;
      if ((i25 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i21 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i21 - 8 | 0);
     }
    } while (0);
    i17 = i17 + 4 | 0;
    if ((i17 | 0) == (i18 | 0)) {
     break;
    }
   }
  }
  if ((i19 | 0) != 0) {
   __ZN3WTF8fastFreeEPv(i19);
  }
  i18 = i2 + 1 | 0;
  if (i18 >>> 0 < (HEAP32[i4 >> 2] | 0) >>> 0) {
   i2 = i18;
  } else {
   i26 = 37;
   break;
  }
 }
 if ((i26 | 0) == 11) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i26 | 0) == 19) {
  _WTFCrash();
 } else if ((i26 | 0) == 37) {
  return;
 }
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_10StringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_E6expandEPS3_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
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
  i12 = i5 | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i11;
  } else {
   i14 = HEAP32[i4 >> 2] | 0;
   i16 = HEAP32[i3 >> 2] | 0;
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
    if ((i24 | 0) == 0) {
     i25 = 11;
     break;
    } else if ((i24 | 0) == (-1 | 0)) {
     i26 = i22;
    } else {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i23, HEAP32[i12 >> 2] | 0) | 0) {
      i27 = i22;
      break;
     } else {
      i26 = i20;
     }
    }
    i23 = (i19 | 0) == 0 ? i13 : i19;
    i17 = i23 + i21 | 0;
    i19 = i23;
    i20 = i26;
   }
   if ((i25 | 0) == 11) {
    i25 = 0;
    i27 = (i20 | 0) != 0 ? i20 : i22;
   }
   i19 = i27 + 4 | 0;
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
   i17 = i27 | 0;
   i20 = HEAP32[i17 >> 2] | 0;
   do {
    if ((i20 | 0) != 0) {
     i14 = i20 | 0;
     i13 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
     if ((i13 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i20);
      break;
     } else {
      HEAP32[i14 >> 2] = i13;
      break;
     }
    }
   } while (0);
   i20 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   HEAP32[i17 >> 2] = i20;
   i20 = i7 + (i10 << 3) + 4 | 0;
   i13 = HEAP32[i20 >> 2] | 0;
   HEAP32[i20 >> 2] = 0;
   HEAP32[i19 >> 2] = i13;
   i15 = (i5 | 0) == (i2 | 0) ? i27 : i11;
  }
  i13 = i10 + 1 | 0;
  if ((i13 | 0) == (i6 | 0)) {
   break;
  } else {
   i10 = i13;
   i11 = i15;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i6 | 0) > 0) {
  i28 = 0;
 } else {
  i8 = i15;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  i1 = i7 + (i28 << 3) | 0;
  do {
   if ((HEAP32[i1 >> 2] | 0) != -1) {
    i11 = HEAP32[i7 + (i28 << 3) + 4 >> 2] | 0;
    do {
     if ((i11 | 0) != 0) {
      i10 = i11 | 0;
      i27 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
      if ((i27 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i11);
       break;
      } else {
       HEAP32[i10 >> 2] = i27;
       break;
      }
     }
    } while (0);
    i11 = HEAP32[i1 >> 2] | 0;
    if ((i11 | 0) == 0) {
     break;
    }
    i27 = i11 | 0;
    i10 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
    if ((i10 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i11);
     break;
    } else {
     HEAP32[i27 >> 2] = i10;
     break;
    }
   }
  } while (0);
  i1 = i28 + 1 | 0;
  if ((i1 | 0) < (i6 | 0)) {
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
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_10StringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_E3addINS_22IdentityHashTranslatorIS6_EERKS1_RKS3_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S3_S5_S6_SB_S9_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_10StringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_E6expandEPS3_(i2, 0) | 0;
  i7 = HEAP32[i5 >> 2] | 0;
 } else {
  i7 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 i9 = HEAP32[i3 + 16 >> 2] | 0;
 if (i9 >>> 0 > 127 >>> 0) {
  i10 = i9 >>> 7;
 } else {
  i10 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i3) | 0;
 }
 i3 = (i10 >>> 23) + ~i10 | 0;
 i9 = i3 << 12 ^ i3;
 i3 = i9 >>> 7 ^ i9;
 i9 = i3 << 2 ^ i3;
 i3 = i9 >>> 20 ^ i9 | 1;
 i9 = 0;
 i11 = i10;
 i10 = 0;
 while (1) {
  i12 = i11 & i6;
  i13 = i7 + (i12 << 3) | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  i15 = i14;
  if ((i15 | 0) == (-1 | 0)) {
   i16 = i13;
  } else if ((i15 | 0) == 0) {
   break;
  } else {
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i14, HEAP32[i8 >> 2] | 0) | 0) {
    i17 = 9;
    break;
   } else {
    i16 = i9;
   }
  }
  i14 = (i10 | 0) == 0 ? i3 : i10;
  i9 = i16;
  i11 = i14 + i12 | 0;
  i10 = i14;
 }
 if ((i17 | 0) == 9) {
  i17 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 3) | 0;
  i10 = i1;
  HEAP32[i10 >> 2] = i13;
  HEAP32[i10 + 4 >> 2] = i17;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i9 | 0) == 0) {
  i18 = i13;
 } else {
  i13 = i9;
  HEAP32[i13 >> 2] = 0;
  HEAP32[i13 + 4 >> 2] = 0;
  i13 = i2 + 16 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) - 1;
  i18 = i9;
 }
 i9 = HEAP32[i4 >> 2] | 0;
 if ((i9 | 0) != 0) {
  i13 = i9 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
 }
 i13 = i18 | 0;
 i17 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = i9;
 do {
  if ((i17 | 0) != 0) {
   i9 = i17 | 0;
   i13 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    break;
   } else {
    HEAP32[i9 >> 2] = i13;
    break;
   }
  }
 } while (0);
 i17 = HEAP32[i4 + 4 >> 2] | 0;
 if ((i17 | 0) != 0) {
  i4 = i17 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i18 + 4 | 0;
 i13 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i17;
 do {
  if ((i13 | 0) != 0) {
   i17 = i13 | 0;
   i4 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i17 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i13 = i2 + 12 | 0;
 i4 = (HEAP32[i13 >> 2] | 0) + 1 | 0;
 HEAP32[i13 >> 2] = i4;
 i13 = i2 + 4 | 0;
 i17 = HEAP32[i13 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i4 << 1 | 0) < (i17 | 0)) {
  i19 = i18;
  i20 = i17;
 } else {
  i17 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_10StringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_E6expandEPS3_(i2, i18) | 0;
  i19 = i17;
  i20 = HEAP32[i13 >> 2] | 0;
 }
 i13 = (HEAP32[i5 >> 2] | 0) + (i20 << 3) | 0;
 i20 = i1;
 HEAP32[i20 >> 2] = i19;
 HEAP32[i20 + 4 >> 2] = i13;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_10StringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_EaSERKSC_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 _memset(i5 | 0, 0, 20) | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 i7 = HEAP32[i2 + 4 >> 2] | 0;
 i8 = i6 + (i7 << 3) | 0;
 L1 : do {
  if ((HEAP32[i2 + 12 >> 2] | 0) != 0) {
   L3 : do {
    if ((i7 | 0) == 0) {
     i9 = i6;
    } else {
     i10 = i6;
     while (1) {
      i11 = HEAP32[i10 >> 2] | 0;
      if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
       i9 = i10;
       break L3;
      }
      i10 = i10 + 8 | 0;
      if ((i10 | 0) == (i8 | 0)) {
       break L1;
      }
     }
    }
   } while (0);
   if ((i9 | 0) == (i8 | 0)) {
    break;
   } else {
    i12 = i9;
   }
   while (1) {
    __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_10StringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_E3addINS_22IdentityHashTranslatorIS6_EERKS1_RKS3_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S3_S5_S6_SB_S9_EEEEOT0_OT1_(i4, i5, i12 | 0, i12);
    i10 = i12 + 8 | 0;
    if ((i10 | 0) == (i8 | 0)) {
     break L1;
    } else {
     i13 = i10;
    }
    while (1) {
     i10 = HEAP32[i13 >> 2] | 0;
     if (!((i10 | 0) == (-1 | 0) | (i10 | 0) == 0)) {
      break;
     }
     i10 = i13 + 8 | 0;
     if ((i10 | 0) == (i8 | 0)) {
      break L1;
     } else {
      i13 = i10;
     }
    }
    if ((i13 | 0) == (i8 | 0)) {
     break;
    } else {
     i12 = i13;
    }
   }
  }
 } while (0);
 i13 = i1 | 0;
 i12 = HEAP32[i13 >> 2] | 0;
 i8 = i5 | 0;
 HEAP32[i13 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i8 >> 2] = i12;
 i8 = i1 + 4 | 0;
 i13 = HEAP32[i8 >> 2] | 0;
 i4 = i5 + 4 | 0;
 HEAP32[i8 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i4 >> 2] = i13;
 i4 = i1 + 8 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 i9 = i5 + 8 | 0;
 HEAP32[i4 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i9 >> 2] = i8;
 i8 = i1 + 12 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i4 = i5 + 12 | 0;
 HEAP32[i8 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i4 >> 2] = i9;
 i9 = i1 + 16 | 0;
 i4 = HEAP32[i9 >> 2] | 0;
 i8 = i5 + 16 | 0;
 HEAP32[i9 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i8 >> 2] = i4;
 if ((i12 | 0) == 0) {
  STACKTOP = i3;
  return i1 | 0;
 }
 if ((i13 | 0) > 0) {
  i4 = 0;
  while (1) {
   i8 = i12 + (i4 << 3) | 0;
   do {
    if ((HEAP32[i8 >> 2] | 0) != -1) {
     i9 = HEAP32[i12 + (i4 << 3) + 4 >> 2] | 0;
     do {
      if ((i9 | 0) != 0) {
       i5 = i9 | 0;
       i6 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
       if ((i6 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i9);
        break;
       } else {
        HEAP32[i5 >> 2] = i6;
        break;
       }
      }
     } while (0);
     i9 = HEAP32[i8 >> 2] | 0;
     if ((i9 | 0) == 0) {
      break;
     }
     i6 = i9 | 0;
     i5 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
     if ((i5 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i9);
      break;
     } else {
      HEAP32[i6 >> 2] = i5;
      break;
     }
    }
   } while (0);
   i4 = i4 + 1 | 0;
   if ((i4 | 0) >= (i13 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i12);
 STACKTOP = i3;
 return i1 | 0;
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
function __ZN7WebCore5XPath12LocationPath11prependStepENSt3__110unique_ptrINS0_4StepENS2_14default_deleteIS4_EEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 20 | 0;
 i6 = i1 + 28 | 0;
 i7 = i2 | 0;
 do {
  if ((HEAP32[i6 >> 2] | 0) != 0) {
   i8 = i5 | 0;
   __ZN7WebCore5XPath16optimizeStepPairERNS0_4StepES2_Rb(HEAP32[i7 >> 2] | 0, HEAP32[HEAP32[i8 >> 2] >> 2] | 0, i4);
   if ((HEAP8[i4] & 1) == 0) {
    break;
   }
   if ((HEAP32[i6 >> 2] | 0) == 0) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
   i9 = HEAP32[i8 >> 2] | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = 0;
   i10 = i9 | 0;
   i9 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = i8;
   if ((i9 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   __ZN7WebCore5XPath4StepD1Ev(i9);
   __ZN3WTF8fastFreeEPv(i9);
   STACKTOP = i3;
   return;
  }
 } while (0);
 __ZN7WebCore5XPath4Step8optimizeEv(HEAP32[i7 >> 2] | 0);
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) == (HEAP32[i1 + 24 >> 2] | 0)) {
  i1 = i7 + 1 | 0;
  i4 = i5 | 0;
  i9 = HEAP32[i4 >> 2] | 0;
  do {
   if (i9 >>> 0 > i2 >>> 0) {
    i11 = 11;
   } else {
    if ((i9 + (i7 << 2) | 0) >>> 0 <= i2 >>> 0) {
     i11 = 11;
     break;
    }
    i8 = i1 + (i7 >>> 2) | 0;
    i10 = i8 >>> 0 > 16 >>> 0 ? i8 : 16;
    __ZN3WTF6VectorINSt3__110unique_ptrIN7WebCore5XPath4StepENS1_14default_deleteIS5_EEEELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i5, i10 >>> 0 > i1 >>> 0 ? i10 : i1);
    i12 = (HEAP32[i4 >> 2] | 0) + (i2 - i9 >> 2 << 2) | 0;
   }
  } while (0);
  if ((i11 | 0) == 11) {
   i11 = i1 + (i7 >>> 2) | 0;
   i9 = i11 >>> 0 > 16 >>> 0 ? i11 : 16;
   __ZN3WTF6VectorINSt3__110unique_ptrIN7WebCore5XPath4StepENS1_14default_deleteIS5_EEEELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i5, i9 >>> 0 > i1 >>> 0 ? i9 : i1);
   i12 = i2;
  }
  i13 = i12;
  i14 = HEAP32[i6 >> 2] | 0;
  i15 = i4;
 } else {
  i13 = i2;
  i14 = i7;
  i15 = i5 | 0;
 }
 i5 = HEAP32[i15 >> 2] | 0;
 if ((i14 | 0) != 0) {
  i15 = i5 + (i14 << 2) | 0;
  i7 = i5 + ((i14 << 2 >> 2) + 1 << 2) | 0;
  while (1) {
   i15 = i15 - 4 | 0;
   i7 = i7 - 4 | 0;
   i14 = i15 | 0;
   i2 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = 0;
   HEAP32[i7 >> 2] = i2;
   i2 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = 0;
   if ((i2 | 0) != 0) {
    __ZN7WebCore5XPath4StepD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
   }
   if ((i15 | 0) == (i5 | 0)) {
    break;
   }
  }
 }
 i15 = i13 | 0;
 i13 = HEAP32[i15 >> 2] | 0;
 HEAP32[i15 >> 2] = 0;
 HEAP32[i5 >> 2] = i13;
 HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 STACKTOP = i3;
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
function __ZN3WTF6VectorINSt3__110unique_ptrIN7WebCore5XPath4StepENS1_14default_deleteIS5_EEEELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS8_EEvOT_(i1, i2) {
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
   __ZN3WTF6VectorINSt3__110unique_ptrIN7WebCore5XPath4StepENS1_14default_deleteIS5_EEEELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i8 >>> 0 > i5 >>> 0 ? i8 : i5);
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
 __ZN3WTF6VectorINSt3__110unique_ptrIN7WebCore5XPath4StepENS1_14default_deleteIS5_EEEELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i7 >>> 0 > i5 >>> 0 ? i7 : i5);
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
function __ZN7WebCore5XPath6FilterD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 | 0;
 HEAP32[i2 >> 2] = H_BASE + 16;
 i3 = i1 + 32 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i1 + 24 | 0;
 if ((i4 | 0) != 0) {
  i6 = HEAP32[i5 >> 2] | 0;
  i7 = i6 + (i4 << 2) | 0;
  i4 = i6;
  while (1) {
   i6 = i4 | 0;
   i8 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = 0;
   if ((i8 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 31](i8);
   }
   i4 = i4 + 4 | 0;
   if ((i4 | 0) == (i7 | 0)) {
    break;
   }
  }
  HEAP32[i3 >> 2] = 0;
 }
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i5 >> 2] = 0;
  HEAP32[i1 + 28 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = i1 + 20 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i5 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
 }
 HEAP32[i2 >> 2] = H_BASE + 112;
 i2 = i1 + 12 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 i3 = i1 + 4 | 0;
 if ((i5 | 0) != 0) {
  i7 = HEAP32[i3 >> 2] | 0;
  i4 = i7 + (i5 << 2) | 0;
  i5 = i7;
  while (1) {
   i7 = i5 | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = 0;
   if ((i8 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 31](i8);
   }
   i5 = i5 + 4 | 0;
   if ((i5 | 0) == (i4 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i3 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore5XPath12LocationPathD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 | 0;
 HEAP32[i2 >> 2] = H_BASE + 80;
 i3 = i1 + 28 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i1 + 20 | 0;
 if ((i4 | 0) != 0) {
  i6 = HEAP32[i5 >> 2] | 0;
  i7 = i6 + (i4 << 2) | 0;
  i4 = i6;
  while (1) {
   i6 = i4 | 0;
   i8 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = 0;
   if ((i8 | 0) != 0) {
    __ZN7WebCore5XPath4StepD1Ev(i8);
    __ZN3WTF8fastFreeEPv(i8);
   }
   i4 = i4 + 4 | 0;
   if ((i4 | 0) == (i7 | 0)) {
    break;
   }
  }
  HEAP32[i3 >> 2] = 0;
 }
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i5 >> 2] = 0;
  HEAP32[i1 + 24 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 HEAP32[i2 >> 2] = H_BASE + 112;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i5 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i7 = HEAP32[i5 >> 2] | 0;
  i4 = i7 + (i3 << 2) | 0;
  i3 = i7;
  while (1) {
   i7 = i3 | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = 0;
   if ((i8 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 31](i8);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i4 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i5 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i5 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore5XPath12LocationPath10appendStepENSt3__110unique_ptrINS0_4StepENS2_14default_deleteIS4_EEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 20 | 0;
 i6 = i1 + 28 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i7 | 0) == 0) {
   i8 = i2 | 0;
  } else {
   i9 = _llvm_uadd_with_overflow_i32(i7 | 0, -1 | 0) | 0;
   if (!tempRet0) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
   i10 = i2 | 0;
   __ZN7WebCore5XPath16optimizeStepPairERNS0_4StepES2_Rb(HEAP32[(HEAP32[i5 >> 2] | 0) + (i9 << 2) >> 2] | 0, HEAP32[i10 >> 2] | 0, i4);
   if ((HEAP8[i4] & 1) == 0) {
    i8 = i10;
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 __ZN7WebCore5XPath4Step8optimizeEv(HEAP32[i8 >> 2] | 0);
 i4 = HEAP32[i6 >> 2] | 0;
 if ((i4 | 0) == (HEAP32[i1 + 24 >> 2] | 0)) {
  __ZN3WTF6VectorINSt3__110unique_ptrIN7WebCore5XPath4StepENS1_14default_deleteIS5_EEEELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS8_EEvOT_(i5, i2);
  STACKTOP = i3;
  return;
 } else {
  i2 = HEAP32[i5 >> 2] | 0;
  i5 = HEAP32[i8 >> 2] | 0;
  HEAP32[i8 >> 2] = 0;
  HEAP32[i2 + (i4 << 2) >> 2] = i5;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
  STACKTOP = i3;
  return;
 }
}
function __ZN3WTF6VectorINSt3__110unique_ptrIN7WebCore5XPath4StepENS1_14default_deleteIS5_EEEELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
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
    __ZN7WebCore5XPath4StepD1Ev(i9);
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
function __ZN7WebCore5XPath4PathD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 | 0;
 HEAP32[i2 >> 2] = H_BASE + 48;
 i3 = i1 + 24 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i4 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 31](i4);
 }
 i4 = i1 + 20 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 if ((i3 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 31](i3);
 }
 HEAP32[i2 >> 2] = H_BASE + 112;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 31](i7);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i8 = i1;
  __ZN3WTF8fastFreeEPv(i8);
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 i8 = i1;
 __ZN3WTF8fastFreeEPv(i8);
 return;
}
function __ZN7WebCore5XPath4PathD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = i1 | 0;
 HEAP32[i2 >> 2] = H_BASE + 48;
 i3 = i1 + 24 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i4 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 31](i4);
 }
 i4 = i1 + 20 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 if ((i3 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 31](i3);
 }
 HEAP32[i2 >> 2] = H_BASE + 112;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 31](i7);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
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
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore5XPath6FilterC2ENSt3__110unique_ptrINS0_10ExpressionENS2_14default_deleteIS4_EEEEN3WTF6VectorIS7_Lj0ENS8_15CrashOnOverflowEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 __ZN7WebCore5XPath10ExpressionC2Ev(i1 | 0);
 HEAP32[i1 >> 2] = H_BASE + 16;
 i4 = i2 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 i4 = i1 + 20 | 0;
 HEAP32[i4 >> 2] = i2;
 i2 = i1 + 24 | 0;
 HEAP32[i2 >> 2] = 0;
 i5 = i1 + 28 | 0;
 HEAP32[i5 >> 2] = 0;
 i6 = i1 + 32 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i3 + 8 | 0;
 HEAP32[i6 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i7 >> 2] = 0;
 i7 = i3 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i7 >> 2] = i6;
 i6 = i3 + 4 | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i6 >> 2] = i3;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP8[i1 + 16 | 0] = HEAP8[i3 + 16 | 0] & 1;
 HEAP8[i1 + 17 | 0] = HEAP8[i3 + 17 | 0] & 1;
 HEAP8[i1 + 18 | 0] = HEAP8[i3 + 18 | 0] & 1;
 return;
}
function __ZN7WebCore5XPath6FilterC1ENSt3__110unique_ptrINS0_10ExpressionENS2_14default_deleteIS4_EEEEN3WTF6VectorIS7_Lj0ENS8_15CrashOnOverflowEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 __ZN7WebCore5XPath10ExpressionC2Ev(i1 | 0);
 HEAP32[i1 >> 2] = H_BASE + 16;
 i4 = i2 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 i4 = i1 + 20 | 0;
 HEAP32[i4 >> 2] = i2;
 i2 = i1 + 24 | 0;
 HEAP32[i2 >> 2] = 0;
 i5 = i1 + 28 | 0;
 HEAP32[i5 >> 2] = 0;
 i6 = i1 + 32 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i3 + 8 | 0;
 HEAP32[i6 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i7 >> 2] = 0;
 i7 = i3 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i7 >> 2] = i6;
 i6 = i3 + 4 | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i6 >> 2] = i3;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP8[i1 + 16 | 0] = HEAP8[i3 + 16 | 0] & 1;
 HEAP8[i1 + 17 | 0] = HEAP8[i3 + 17 | 0] & 1;
 HEAP8[i1 + 18 | 0] = HEAP8[i3 + 18 | 0] & 1;
 return;
}
function __ZN7WebCore5XPath10ExpressionD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 HEAP32[i1 >> 2] = H_BASE + 112;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 31](i7);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i8 = i1;
  __ZN3WTF8fastFreeEPv(i8);
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 i8 = i1;
 __ZN3WTF8fastFreeEPv(i8);
 return;
}
function __ZN7WebCore5XPath10ExpressionD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = H_BASE + 112;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 31](i7);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
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
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_v + 2;
}
function __ZN7WebCore5XPath4PathC2ENSt3__110unique_ptrINS0_10ExpressionENS2_14default_deleteIS4_EEEENS3_INS0_12LocationPathENS5_IS8_EEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 __ZN7WebCore5XPath10ExpressionC2Ev(i1 | 0);
 HEAP32[i1 >> 2] = H_BASE + 48;
 i4 = i2 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 i4 = i1 + 20 | 0;
 HEAP32[i4 >> 2] = i2;
 i2 = i3 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i1 + 24 >> 2] = i3;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP8[i1 + 16 | 0] = HEAP8[i3 + 16 | 0] & 1;
 HEAP8[i1 + 17 | 0] = HEAP8[i3 + 17 | 0] & 1;
 HEAP8[i1 + 18 | 0] = HEAP8[i3 + 18 | 0] & 1;
 return;
}
function __ZN7WebCore5XPath4PathC1ENSt3__110unique_ptrINS0_10ExpressionENS2_14default_deleteIS4_EEEENS3_INS0_12LocationPathENS5_IS8_EEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 __ZN7WebCore5XPath10ExpressionC2Ev(i1 | 0);
 HEAP32[i1 >> 2] = H_BASE + 48;
 i4 = i2 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 i4 = i1 + 20 | 0;
 HEAP32[i4 >> 2] = i2;
 i2 = i3 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i1 + 24 >> 2] = i3;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP8[i1 + 16 | 0] = HEAP8[i3 + 16 | 0] & 1;
 HEAP8[i1 + 17 | 0] = HEAP8[i3 + 17 | 0] & 1;
 HEAP8[i1 + 18 | 0] = HEAP8[i3 + 18 | 0] & 1;
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
function __ZNK7WebCore5XPath4Path8evaluateEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i2 + 20 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] & 7](i1, i3);
 i3 = __ZN7WebCore5XPath5Value17modifiableNodeSetEv(i1) | 0;
 __ZNK7WebCore5XPath12LocationPath8evaluateERNS0_7NodeSetE(HEAP32[i2 + 24 >> 2] | 0, i3);
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore5XPath12LocationPathC2Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore5XPath10ExpressionC2Ev(i1 | 0);
 HEAP32[i1 >> 2] = H_BASE + 80;
 _memset(i1 + 20 | 0, 0, 13) | 0;
 HEAP8[i1 + 16 | 0] = 1;
 return;
}
function __ZN7WebCore5XPath12LocationPathC1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore5XPath10ExpressionC2Ev(i1 | 0);
 HEAP32[i1 >> 2] = H_BASE + 80;
 _memset(i1 + 20 | 0, 0, 13) | 0;
 HEAP8[i1 + 16 | 0] = 1;
 return;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 7](i2 | 0, i3 | 0, i4 | 0);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function __ZN7WebCore5XPath12LocationPathD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore5XPath12LocationPathD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 1](i2 | 0, i3 | 0) | 0;
}
function __ZN7WebCore5XPath6FilterD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore5XPath6FilterD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
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
function __ZN7WebCore5XPath12LocationPathD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore5XPath12LocationPathD2Ev(i1);
 return;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 7](i2 | 0) | 0;
}
function __ZN7WebCore5XPath6FilterD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore5XPath6FilterD2Ev(i1);
 return;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 31](i2 | 0);
}
function __ZNK7WebCore5XPath12LocationPath10resultTypeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore5XPath6Filter10resultTypeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b3(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(3);
}
function __ZNK7WebCore5XPath4Path10resultTypeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b5(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(5);
 return 0;
}
function v____cxa_pure_virtual__wrapper() {
 ___cxa_pure_virtual();
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 3]();
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
function b4() {
 abort(4);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore5XPath10ExpressionD1Ev,b0,__ZN7WebCore5XPath4PathD1Ev,b0,__ZN7WebCore5XPath4PathD0Ev,b0,__ZN7WebCore5XPath6FilterD0Ev,b0,__ZN7WebCore5XPath12LocationPathC2Ev,b0,__ZN7WebCore5XPath10ExpressionD0Ev,b0,__ZN7WebCore5XPath12LocationPathD0Ev,b0,__ZN7WebCore5XPath6FilterD1Ev,b0,__ZN7WebCore5XPath12LocationPathD1Ev,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
  ,b0,b0,b0];
  var FUNCTION_TABLE_vii = [b1,b1,__ZNK7WebCore5XPath6Filter8evaluateEv,b1,__ZNK7WebCore5XPath12LocationPath8evaluateEv,b1,__ZNK7WebCore5XPath4Path8evaluateEv,b1];
  var FUNCTION_TABLE_ii = [b2,b2,__ZNK7WebCore5XPath4Path10resultTypeEv,b2,__ZNK7WebCore5XPath6Filter10resultTypeEv,b2,__ZNK7WebCore5XPath12LocationPath10resultTypeEv,b2];
  var FUNCTION_TABLE_viii = [b3,b3,__ZN7WebCore5XPath4PathC2ENSt3__110unique_ptrINS0_10ExpressionENS2_14default_deleteIS4_EEEENS3_INS0_12LocationPathENS5_IS8_EEEE,b3,__ZN7WebCore5XPath6FilterC2ENSt3__110unique_ptrINS0_10ExpressionENS2_14default_deleteIS4_EEEEN3WTF6VectorIS7_Lj0ENS8_15CrashOnOverflowEEE,b3,b3,b3];
  var FUNCTION_TABLE_v = [b4,b4,v____cxa_pure_virtual__wrapper,b4];
  var FUNCTION_TABLE_iii = [b5,b5];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___cxa_pure_virtual": ___cxa_pure_virtual, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZNK7WebCore5XPath6Filter8evaluateEv","__ZN7WebCore5XPath6FilterD2Ev","__ZN3WTF9HashTableIPN7WebCore4NodeES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6expandEPS3_","__ZNK7WebCore5XPath12LocationPath10resultTypeEv","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_10StringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_E3addINS_22IdentityHashTranslatorIS6_EERKS1_RKS3_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S3_S5_S6_SB_S9_EEEEOT0_OT1_","__ZN3WTF6VectorINSt3__110unique_ptrIN7WebCore5XPath4StepENS1_14default_deleteIS5_EEEELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS8_EEvOT_","__ZN7WebCore5XPath10ExpressionD1Ev","_memset","_memcpy","__ZN7WebCore5XPath10ExpressionD0Ev","__ZN7WebCore5XPath12LocationPath11prependStepENSt3__110unique_ptrINS0_4StepENS2_14default_deleteIS4_EEEE","__ZN7WebCore5XPath4PathD0Ev","__ZNK7WebCore5XPath12LocationPath8evaluateEv","__ZN7WebCore5XPath12LocationPathD2Ev","__ZN7WebCore5XPath4PathC2ENSt3__110unique_ptrINS0_10ExpressionENS2_14default_deleteIS4_EEEENS3_INS0_12LocationPathENS5_IS8_EEEE","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_10StringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_E6expandEPS3_","__ZN3WTF6VectorINSt3__110unique_ptrIN7WebCore5XPath4StepENS1_14default_deleteIS5_EEEELj0ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZNK7WebCore5XPath4Path8evaluateEv","__ZN3WTF9HashTableIPN7WebCore4NodeES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_","__ZNK7WebCore5XPath6Filter10resultTypeEv","__ZN7WebCore5XPath12LocationPathD1Ev","__ZNK7WebCore5XPath12LocationPath8evaluateERNS0_7NodeSetE","__ZN7WebCore5XPath12LocationPath10appendStepENSt3__110unique_ptrINS0_4StepENS2_14default_deleteIS4_EEEE","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_10StringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_EaSERKSC_","__ZN7WebCore5XPath4PathD1Ev","__ZN7WebCore5XPath6FilterD0Ev","__ZN7WebCore5XPath6FilterC2ENSt3__110unique_ptrINS0_10ExpressionENS2_14default_deleteIS4_EEEEN3WTF6VectorIS7_Lj0ENS8_15CrashOnOverflowEEE","__ZN7WebCore5XPath12LocationPathC2Ev","__ZNK7WebCore5XPath4Path10resultTypeEv","__ZN7WebCore5XPath12LocationPathD0Ev","__ZN7WebCore5XPath6FilterD1Ev"]

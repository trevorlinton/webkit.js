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
H_BASE = parentModule["_malloc"](56 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 56;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore25PageInjectedScriptManagerC1ERN9Inspector20InspectorEnvironmentEN3WTF10PassRefPtrINS1_18InjectedScriptHostEEE;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
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
  var __ZTVN10Deprecated11ScriptValueE=env.__ZTVN10Deprecated11ScriptValueE|0;
  var __ZTVN9Inspector14InjectedScriptE=env.__ZTVN9Inspector14InjectedScriptE|0;
  var __ZTVN9Inspector18InjectedScriptBaseE=env.__ZTVN9Inspector18InjectedScriptBaseE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN10Deprecated12ScriptObjectE=(H_BASE+40)|0;
  var __ZTVN7WebCore25PageInjectedScriptManagerE=(H_BASE+8)|0;
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
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore25PageInjectedScriptManager25discardInjectedScriptsForEPNS_9DOMWindowE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 + 24 | 0;
 i7 = i1 + 36 | 0;
 if ((HEAP32[i7 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i8 = i1 + 4 | 0;
 i9 = i1 + 16 | 0;
 i10 = i8 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 i12 = i1 + 8 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 i14 = i11 + (i13 * 28 & -1) | 0;
 L4 : do {
  if ((HEAP32[i9 >> 2] | 0) == 0) {
   i15 = 0;
  } else {
   L6 : do {
    if ((i13 | 0) == 0) {
     i16 = i11;
    } else {
     i17 = i11;
     while (1) {
      i18 = HEAP32[i17 >> 2] | 0;
      if (!((i18 | 0) == (-1 | 0) | (i18 | 0) == 0)) {
       i16 = i17;
       break L6;
      }
      i18 = i17 + 28 | 0;
      if ((i18 | 0) == (i14 | 0)) {
       i15 = 0;
       break L4;
      } else {
       i17 = i18;
      }
     }
    }
   } while (0);
   if ((i16 | 0) == (i14 | 0)) {
    i15 = 0;
    break;
   } else {
    i19 = 0;
    i20 = 0;
    i21 = 0;
    i22 = i16;
   }
   L11 : while (1) {
    i17 = HEAP32[i22 + 20 >> 2] | 0;
    HEAP32[i4 >> 2] = i17;
    do {
     if ((__ZN7WebCore22domWindowFromExecStateEPN3JSC9ExecStateE(i17) | 0) == (i2 | 0)) {
      __ZN3WTF7HashMapIPN3JSC9ExecStateEiNS_7PtrHashIS3_EENS_10HashTraitsIS3_EENS6_IiEEE6removeERKS3_(i6, i4) | 0;
      i18 = i22 | 0;
      if ((i19 | 0) != (i20 | 0)) {
       HEAP32[i21 + (i19 << 2) >> 2] = HEAP32[i18 >> 2];
       i23 = i21;
       i24 = i20;
       i25 = i19 + 1 | 0;
       break;
      }
      i26 = i20 + 1 | 0;
      i27 = i26 + (i20 >>> 2) | 0;
      i28 = i27 >>> 0 > 16 >>> 0 ? i27 : 16;
      i27 = i28 >>> 0 > i26 >>> 0 ? i28 : i26;
      do {
       if (i20 >>> 0 < i27 >>> 0) {
        if (i27 >>> 0 > 1073741823 >>> 0) {
         i29 = 14;
         break L11;
        }
        i28 = __ZN3WTF18fastMallocGoodSizeEj(i27 << 2) | 0;
        i30 = i28 >>> 2;
        i31 = __ZN3WTF10fastMallocEj(i28) | 0;
        i28 = i31;
        i32 = i21;
        _memcpy(i31 | 0, i32 | 0, i20 << 2) | 0;
        if ((i21 | 0) == 0) {
         i33 = i28;
         i34 = i30;
         break;
        }
        i31 = (i28 | 0) == (i21 | 0);
        __ZN3WTF8fastFreeEPv(i32);
        i33 = i31 ? 0 : i28;
        i34 = i31 ? 0 : i30;
       } else {
        i33 = i21;
        i34 = i20;
       }
      } while (0);
      HEAP32[i33 + (i20 << 2) >> 2] = HEAP32[i18 >> 2];
      i23 = i33;
      i24 = i34;
      i25 = i26;
     } else {
      i23 = i21;
      i24 = i20;
      i25 = i19;
     }
    } while (0);
    i17 = i22 + 28 | 0;
    if ((i17 | 0) == (i14 | 0)) {
     break;
    } else {
     i35 = i17;
    }
    while (1) {
     i17 = HEAP32[i35 >> 2] | 0;
     if (!((i17 | 0) == (-1 | 0) | (i17 | 0) == 0)) {
      break;
     }
     i17 = i35 + 28 | 0;
     if ((i17 | 0) == (i14 | 0)) {
      break L11;
     } else {
      i35 = i17;
     }
    }
    if ((i35 | 0) == (i14 | 0)) {
     break;
    } else {
     i19 = i25;
     i20 = i24;
     i21 = i23;
     i22 = i35;
    }
   }
   if ((i29 | 0) == 14) {
    _WTFCrash();
   }
   if ((i25 | 0) == 0) {
    i15 = i23;
    break;
   }
   i17 = i8 | 0;
   i27 = i1 + 20 | 0;
   i30 = i1 + 12 | 0;
   i31 = 0;
   while (1) {
    i28 = HEAP32[i23 + (i31 << 2) >> 2] | 0;
    i32 = HEAP32[i10 >> 2] | 0;
    if ((i32 | 0) == 0) {
     i36 = HEAP32[i12 >> 2] | 0;
     i37 = i36 * 28 & -1 | 0;
     i38 = 0;
     i39 = i36;
    } else {
     i36 = HEAP32[i30 >> 2] | 0;
     i40 = i28 + ~(i28 << 15) | 0;
     i41 = (i40 >>> 10 ^ i40) * 9 & -1;
     i40 = i41 >>> 6 ^ i41;
     i41 = i40 + ~(i40 << 11) | 0;
     i40 = i41 >>> 16 ^ i41;
     i41 = i36 & i40;
     i42 = i32 + (i41 * 28 & -1) | 0;
     i43 = HEAP32[i42 >> 2] | 0;
     L37 : do {
      if ((i43 | 0) == (i28 | 0)) {
       i44 = i42;
      } else {
       i45 = (i40 >>> 23) + ~i40 | 0;
       i46 = i45 << 12 ^ i45;
       i45 = i46 >>> 7 ^ i46;
       i46 = i45 << 2 ^ i45;
       i45 = i46 >>> 20 ^ i46 | 1;
       i46 = 0;
       i47 = i41;
       i48 = i43;
       while (1) {
        if ((i48 | 0) == 0) {
         i44 = 0;
         break L37;
        }
        i49 = (i46 | 0) == 0 ? i45 : i46;
        i50 = i49 + i47 & i36;
        i51 = i32 + (i50 * 28 & -1) | 0;
        i52 = HEAP32[i51 >> 2] | 0;
        if ((i52 | 0) == (i28 | 0)) {
         i44 = i51;
         break;
        } else {
         i46 = i49;
         i47 = i50;
         i48 = i52;
        }
       }
      }
     } while (0);
     i28 = HEAP32[i12 >> 2] | 0;
     i37 = (i44 | 0) == 0 ? i32 + (i28 * 28 & -1) | 0 : i44;
     i38 = i32;
     i39 = i28;
    }
    do {
     if ((i37 | 0) != (i38 + (i39 * 28 & -1) | 0)) {
      __ZN9Inspector14InjectedScriptD1Ev(i37 + 4 | 0);
      HEAP32[i37 >> 2] = -1;
      HEAP32[i27 >> 2] = (HEAP32[i27 >> 2] | 0) + 1;
      i28 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
      HEAP32[i9 >> 2] = i28;
      i36 = HEAP32[i12 >> 2] | 0;
      if (!((i28 * 6 & -1 | 0) < (i36 | 0) & (i36 | 0) > 8)) {
       break;
      }
      __ZN3WTF9HashTableIiNS_12KeyValuePairIiN9Inspector14InjectedScriptEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIjEENS_7HashMapIiS3_S8_NS_10HashTraitsIiEENSA_IS3_EEE18KeyValuePairTraitsESB_E6rehashEiPS4_(i17, (i36 | 0) / 2 & -1, 0) | 0;
     }
    } while (0);
    i32 = i31 + 1 | 0;
    if (i32 >>> 0 < i25 >>> 0) {
     i31 = i32;
    } else {
     i15 = i23;
     break;
    }
   }
  }
 } while (0);
 i23 = HEAP32[i6 >> 2] | 0;
 i25 = HEAP32[i1 + 28 >> 2] | 0;
 i1 = i23 + (i25 << 3) | 0;
 L49 : do {
  if ((HEAP32[i7 >> 2] | 0) != 0) {
   L51 : do {
    if ((i25 | 0) == 0) {
     i53 = i23;
    } else {
     i12 = i23;
     while (1) {
      i9 = HEAP32[i12 >> 2] | 0;
      if (!((i9 | 0) == (-1 | 0) | (i9 | 0) == 0)) {
       i53 = i12;
       break L51;
      }
      i12 = i12 + 8 | 0;
      if ((i12 | 0) == (i1 | 0)) {
       break L49;
      }
     }
    }
   } while (0);
   if ((i53 | 0) == (i1 | 0)) {
    break;
   }
   i12 = i5;
   i9 = 0;
   i37 = 0;
   i39 = 0;
   i38 = i53;
   L57 : while (1) {
    i44 = HEAP32[i38 >> 2] | 0;
    HEAP32[i5 >> 2] = i44;
    do {
     if ((__ZN7WebCore22domWindowFromExecStateEPN3JSC9ExecStateE(i44) | 0) == (i2 | 0)) {
      if ((i9 | 0) != (i37 | 0)) {
       HEAP32[i39 + (i9 << 2) >> 2] = HEAP32[i5 >> 2];
       i54 = i39;
       i55 = i37;
       i56 = i9 + 1 | 0;
       break;
      }
      i10 = i37 + 1 | 0;
      do {
       if (i39 >>> 0 > i5 >>> 0) {
        i29 = 45;
       } else {
        if ((i39 + (i37 << 2) | 0) >>> 0 <= i5 >>> 0) {
         i29 = 45;
         break;
        }
        i8 = i12 - i39 >> 2;
        i35 = i10 + (i37 >>> 2) | 0;
        i22 = i35 >>> 0 > 16 >>> 0 ? i35 : 16;
        i35 = i22 >>> 0 > i10 >>> 0 ? i22 : i10;
        do {
         if (i37 >>> 0 < i35 >>> 0) {
          if (i35 >>> 0 > 1073741823 >>> 0) {
           i29 = 52;
           break L57;
          }
          i22 = __ZN3WTF18fastMallocGoodSizeEj(i35 << 2) | 0;
          i21 = i22 >>> 2;
          i24 = __ZN3WTF10fastMallocEj(i22) | 0;
          i22 = i24;
          i20 = i39;
          _memcpy(i24 | 0, i20 | 0, i37 << 2) | 0;
          if ((i39 | 0) == 0) {
           i57 = i22;
           i58 = i21;
           break;
          }
          i24 = (i22 | 0) == (i39 | 0);
          __ZN3WTF8fastFreeEPv(i20);
          i57 = i24 ? 0 : i22;
          i58 = i24 ? 0 : i21;
         } else {
          i57 = i39;
          i58 = i37;
         }
        } while (0);
        i59 = i57 + (i8 << 2) | 0;
        i60 = i57;
        i61 = i58;
       }
      } while (0);
      do {
       if ((i29 | 0) == 45) {
        i29 = 0;
        i35 = i10 + (i37 >>> 2) | 0;
        i21 = i35 >>> 0 > 16 >>> 0 ? i35 : 16;
        i35 = i21 >>> 0 > i10 >>> 0 ? i21 : i10;
        if (i37 >>> 0 >= i35 >>> 0) {
         i59 = i5;
         i60 = i39;
         i61 = i37;
         break;
        }
        if (i35 >>> 0 > 1073741823 >>> 0) {
         i29 = 47;
         break L57;
        }
        i21 = __ZN3WTF18fastMallocGoodSizeEj(i35 << 2) | 0;
        i35 = i21 >>> 2;
        i24 = __ZN3WTF10fastMallocEj(i21) | 0;
        i21 = i24;
        i22 = i39;
        _memcpy(i24 | 0, i22 | 0, i37 << 2) | 0;
        if ((i39 | 0) == 0) {
         i59 = i5;
         i60 = i21;
         i61 = i35;
         break;
        }
        i24 = (i21 | 0) == (i39 | 0);
        __ZN3WTF8fastFreeEPv(i22);
        i59 = i5;
        i60 = i24 ? 0 : i21;
        i61 = i24 ? 0 : i35;
       }
      } while (0);
      HEAP32[i60 + (i37 << 2) >> 2] = HEAP32[i59 >> 2];
      i54 = i60;
      i55 = i61;
      i56 = i10;
     } else {
      i54 = i39;
      i55 = i37;
      i56 = i9;
     }
    } while (0);
    i44 = i38 + 8 | 0;
    if ((i44 | 0) == (i1 | 0)) {
     i29 = 39;
     break;
    } else {
     i62 = i44;
    }
    while (1) {
     i44 = HEAP32[i62 >> 2] | 0;
     if (!((i44 | 0) == (-1 | 0) | (i44 | 0) == 0)) {
      break;
     }
     i44 = i62 + 8 | 0;
     if ((i44 | 0) == (i1 | 0)) {
      i29 = 39;
      break L57;
     } else {
      i62 = i44;
     }
    }
    if ((i62 | 0) == (i1 | 0)) {
     i29 = 39;
     break;
    } else {
     i9 = i56;
     i37 = i55;
     i39 = i54;
     i38 = i62;
    }
   }
   if ((i29 | 0) == 39) {
    if ((i56 | 0) != 0) {
     i38 = 0;
     while (1) {
      __ZN3WTF7HashMapIPN3JSC9ExecStateEiNS_7PtrHashIS3_EENS_10HashTraitsIS3_EENS6_IiEEE6removeERKS3_(i6, i54 + (i38 << 2) | 0) | 0;
      i38 = i38 + 1 | 0;
      if (i38 >>> 0 >= i56 >>> 0) {
       break;
      }
     }
    }
    if ((i54 | 0) == 0) {
     break;
    }
    __ZN3WTF8fastFreeEPv(i54);
    break;
   } else if ((i29 | 0) == 47) {
    _WTFCrash();
   } else if ((i29 | 0) == 52) {
    _WTFCrash();
   }
  }
 } while (0);
 if ((i15 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN3WTF8fastFreeEPv(i15);
 STACKTOP = i3;
 return;
}
function __ZN3WTF9HashTableIPN3JSC9ExecStateENS_12KeyValuePairIS3_iEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_iS9_NS_10HashTraitsIS3_EENSB_IiEEE18KeyValuePairTraitsESC_E6removeEPS5_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 HEAP32[i2 >> 2] = -1;
 i2 = i1 + 16 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 i3 = i1 + 12 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 HEAP32[i3 >> 2] = i4;
 i3 = i1 + 4 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 if (!((i4 * 6 & -1 | 0) < (i5 | 0) & (i5 | 0) > 8)) {
  return;
 }
 i4 = (i5 | 0) / 2 & -1;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i3 >> 2] = i4;
 i3 = i1 + 8 | 0;
 HEAP32[i3 >> 2] = i4 - 1;
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i4 << 3) | 0;
 if ((i5 | 0) != 0) {
  i4 = 0;
  while (1) {
   i1 = i7 + (i4 << 3) | 0;
   i8 = HEAP32[i1 >> 2] | 0;
   i9 = i8;
   if (!((i9 | 0) == (-1 | 0) | (i9 | 0) == 0)) {
    i10 = HEAP32[i6 >> 2] | 0;
    i11 = HEAP32[i3 >> 2] | 0;
    i12 = i9 + ~(i9 << 15) | 0;
    i9 = (i12 >>> 10 ^ i12) * 9 & -1;
    i12 = i9 >>> 6 ^ i9;
    i9 = i12 + ~(i12 << 11) | 0;
    i12 = i9 >>> 16 ^ i9;
    i9 = i11 & i12;
    i13 = i10 + (i9 << 3) | 0;
    i14 = HEAP32[i13 >> 2] | 0;
    L9 : do {
     if ((i14 | 0) == 0) {
      i15 = 0;
      i16 = i13;
      i17 = 6;
     } else {
      i18 = (i12 >>> 23) + ~i12 | 0;
      i19 = i18 << 12 ^ i18;
      i18 = i19 >>> 7 ^ i19;
      i19 = i18 << 2 ^ i18;
      i18 = i19 >>> 20 ^ i19 | 1;
      i19 = 0;
      i20 = 0;
      i21 = i9;
      i22 = i13;
      i23 = i14;
      while (1) {
       if ((i23 | 0) == (i8 | 0)) {
        i24 = i22;
        break L9;
       }
       i25 = (i23 | 0) == -1 ? i22 : i19;
       i26 = (i20 | 0) == 0 ? i18 : i20;
       i27 = i26 + i21 & i11;
       i28 = i10 + (i27 << 3) | 0;
       i29 = HEAP32[i28 >> 2] | 0;
       if ((i29 | 0) == 0) {
        i15 = i25;
        i16 = i28;
        i17 = 6;
        break;
       } else {
        i19 = i25;
        i20 = i26;
        i21 = i27;
        i22 = i28;
        i23 = i29;
       }
      }
     }
    } while (0);
    if ((i17 | 0) == 6) {
     i17 = 0;
     i24 = (i15 | 0) != 0 ? i15 : i16;
    }
    i10 = i1;
    i11 = i24;
    i8 = HEAP32[i10 + 4 >> 2] | 0;
    HEAP32[i11 >> 2] = HEAP32[i10 >> 2];
    HEAP32[i11 + 4 >> 2] = i8;
   }
   i4 = i4 + 1 | 0;
   if ((i4 | 0) == (i5 | 0)) {
    break;
   }
  }
 }
 HEAP32[i2 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i7);
 return;
}
function __ZN3WTF9HashTableIiNS_12KeyValuePairIiN9Inspector14InjectedScriptEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIjEENS_7HashMapIiS3_S8_NS_10HashTraitsIiEENSA_IS3_EEE18KeyValuePairTraitsESB_E8reinsertEOS4_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i3 = i2 | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 i5 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 i6 = i1 + ~(i1 << 15) | 0;
 i7 = (i6 >>> 10 ^ i6) * 9 & -1;
 i6 = i7 >>> 6 ^ i7;
 i7 = i6 + ~(i6 << 11) | 0;
 i6 = i7 >>> 16 ^ i7;
 i7 = i6 & i5;
 i8 = i4 + (i7 * 28 & -1) | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 L1 : do {
  if ((i9 | 0) == 0) {
   i10 = 0;
   i11 = i8;
   i12 = 3;
  } else {
   i13 = (i6 >>> 23) + ~i6 | 0;
   i14 = i13 << 12 ^ i13;
   i13 = i14 >>> 7 ^ i14;
   i14 = i13 << 2 ^ i13;
   i13 = i14 >>> 20 ^ i14 | 1;
   i14 = 0;
   i15 = 0;
   i16 = i7;
   i17 = i8;
   i18 = i9;
   while (1) {
    if ((i18 | 0) == (i1 | 0)) {
     i19 = i17;
     break L1;
    }
    i20 = (i18 | 0) == -1 ? i17 : i14;
    i21 = (i15 | 0) == 0 ? i13 : i15;
    i22 = i21 + i16 & i5;
    i23 = i4 + (i22 * 28 & -1) | 0;
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
 __ZN9Inspector14InjectedScriptD1Ev(i19 + 4 | 0);
 HEAP32[i19 >> 2] = HEAP32[i3 >> 2];
 i3 = i19 + 4 | 0;
 HEAP32[i3 >> 2] = __ZTVN9Inspector18InjectedScriptBaseE + 8;
 i11 = HEAP32[i2 + 8 >> 2] | 0;
 HEAP32[i19 + 8 >> 2] = i11;
 if ((i11 | 0) != 0) {
  i10 = i11 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
 }
 i10 = i19 + 12 | 0;
 HEAP32[i10 >> 2] = __ZTVN10Deprecated11ScriptValueE + 8;
 __ZN3JSC6StrongINS_7UnknownEEC2ERKS2_(i19 + 16 | 0, i2 + 16 | 0);
 HEAP32[i10 >> 2] = H_BASE + 48;
 HEAP32[i19 + 20 >> 2] = HEAP32[i2 + 20 >> 2];
 HEAP32[i19 + 24 >> 2] = HEAP32[i2 + 24 >> 2];
 HEAP32[i3 >> 2] = __ZTVN9Inspector14InjectedScriptE + 8;
 return i19 | 0;
}
function __ZN3WTF9HashTableIiNS_12KeyValuePairIiN9Inspector14InjectedScriptEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIjEENS_7HashMapIiS3_S8_NS_10HashTraitsIiEENSA_IS3_EEE18KeyValuePairTraitsESB_E6rehashEiPS4_(i1, i2, i3) {
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
 HEAP32[i6 >> 2] = __ZN3WTF9HashTableIiNS_12KeyValuePairIiN9Inspector14InjectedScriptEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIjEENS_7HashMapIiS3_S8_NS_10HashTraitsIiEENSA_IS3_EEE18KeyValuePairTraitsESB_E13allocateTableEi(i2) | 0;
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
  i2 = i7 + (i10 * 28 & -1) | 0;
  i6 = HEAP32[i2 >> 2] | 0;
  if ((i6 | 0) == (-1 | 0) | (i6 | 0) == 0) {
   i12 = i11;
  } else {
   i6 = __ZN3WTF9HashTableIiNS_12KeyValuePairIiN9Inspector14InjectedScriptEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIjEENS_7HashMapIiS3_S8_NS_10HashTraitsIiEENSA_IS3_EEE18KeyValuePairTraitsESB_E8reinsertEOS4_(i1, i2) | 0;
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
  if ((HEAP32[i7 + (i13 * 28 & -1) >> 2] | 0) != -1) {
   __ZN9Inspector14InjectedScriptD1Ev(i7 + (i13 * 28 & -1) + 4 | 0);
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
function __ZN3WTF7HashMapIPN3JSC9ExecStateEiNS_7PtrHashIS3_EENS_10HashTraitsIS3_EENS6_IiEEE6removeERKS3_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = HEAP32[i1 + 4 >> 2] | 0;
  i5 = i4 << 3 | 0;
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
  i10 = i3 + (i2 << 3) | 0;
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
     i19 = i3 + (i18 << 3) | 0;
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
  i5 = (i12 | 0) == 0 ? i3 + (i8 << 3) | 0 : i12;
  i6 = i3;
  i7 = i8;
 }
 if ((i5 | 0) == (i6 + (i7 << 3) | 0)) {
  i21 = 0;
  return i21 | 0;
 }
 __ZN3WTF9HashTableIPN3JSC9ExecStateENS_12KeyValuePairIS3_iEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_iS9_NS_10HashTraitsIS3_EENSB_IiEEE18KeyValuePairTraitsESC_E6removeEPS5_(i1 | 0, i5);
 i21 = 1;
 return i21 | 0;
}
function __ZN3WTF22KeyValuePairHashTraitsINS_10HashTraitsIiEENS1_IN9Inspector14InjectedScriptEEEE10emptyValueEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i3 = i2 | 0;
 i4 = i2 + 32 | 0;
 __ZN9Inspector14InjectedScriptC1Ev(i4);
 i5 = i3 | 0;
 HEAP32[i5 >> 2] = 0;
 i6 = i3 + 4 | 0;
 HEAP32[i6 >> 2] = __ZTVN9Inspector18InjectedScriptBaseE + 8;
 i7 = i3 + 8 | 0;
 i8 = HEAP32[i4 + 4 >> 2] | 0;
 HEAP32[i7 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i9 = i8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
 }
 i9 = i3 + 12 | 0;
 HEAP32[i9 >> 2] = __ZTVN10Deprecated11ScriptValueE + 8;
 i8 = i3 + 16 | 0;
 __ZN3JSC6StrongINS_7UnknownEEC2ERKS2_(i8, i4 + 12 | 0);
 HEAP32[i9 >> 2] = H_BASE + 48;
 i9 = i3 + 20 | 0;
 HEAP32[i9 >> 2] = HEAP32[i4 + 16 >> 2];
 i10 = i3 + 24 | 0;
 HEAP32[i10 >> 2] = HEAP32[i4 + 20 >> 2];
 HEAP32[i6 >> 2] = __ZTVN9Inspector14InjectedScriptE + 8;
 HEAP32[i1 >> 2] = HEAP32[i5 >> 2];
 i5 = i1 + 4 | 0;
 HEAP32[i5 >> 2] = __ZTVN9Inspector18InjectedScriptBaseE + 8;
 i6 = HEAP32[i7 >> 2] | 0;
 HEAP32[i1 + 8 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i7 = i6 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = i1 + 12 | 0;
 HEAP32[i7 >> 2] = __ZTVN10Deprecated11ScriptValueE + 8;
 __ZN3JSC6StrongINS_7UnknownEEC2ERKS2_(i1 + 16 | 0, i8);
 HEAP32[i7 >> 2] = H_BASE + 48;
 HEAP32[i1 + 20 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i1 + 24 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i5 >> 2] = __ZTVN9Inspector14InjectedScriptE + 8;
 __ZN9Inspector14InjectedScriptD1Ev(i3 + 4 | 0);
 __ZN9Inspector14InjectedScriptD1Ev(i4);
 STACKTOP = i2;
 return;
}
function __ZN3WTF9HashTableIiNS_12KeyValuePairIiN9Inspector14InjectedScriptEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIjEENS_7HashMapIiS3_S8_NS_10HashTraitsIiEENSA_IS3_EEE18KeyValuePairTraitsESB_E13allocateTableEi(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = __ZN3WTF10fastMallocEj(i1 * 28 & -1) | 0;
 if ((i1 | 0) <= 0) {
  STACKTOP = i2;
  return i4 | 0;
 }
 i5 = i3 | 0;
 i6 = i3 + 8 | 0;
 i7 = i3 + 16 | 0;
 i8 = i3 + 20 | 0;
 i9 = i3 + 24 | 0;
 i10 = i3 + 4 | 0;
 i11 = 0;
 while (1) {
  __ZN3WTF22KeyValuePairHashTraitsINS_10HashTraitsIiEENS1_IN9Inspector14InjectedScriptEEEE10emptyValueEv(i3);
  HEAP32[i4 + (i11 * 28 & -1) >> 2] = HEAP32[i5 >> 2];
  i12 = i4 + (i11 * 28 & -1) + 4 | 0;
  HEAP32[i12 >> 2] = __ZTVN9Inspector18InjectedScriptBaseE + 8;
  i13 = HEAP32[i6 >> 2] | 0;
  HEAP32[i4 + (i11 * 28 & -1) + 8 >> 2] = i13;
  if ((i13 | 0) != 0) {
   i14 = i13 | 0;
   HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
  }
  i14 = i4 + (i11 * 28 & -1) + 12 | 0;
  HEAP32[i14 >> 2] = __ZTVN10Deprecated11ScriptValueE + 8;
  __ZN3JSC6StrongINS_7UnknownEEC2ERKS2_(i4 + (i11 * 28 & -1) + 16 | 0, i7);
  HEAP32[i14 >> 2] = H_BASE + 48;
  HEAP32[i4 + (i11 * 28 & -1) + 20 >> 2] = HEAP32[i8 >> 2];
  HEAP32[i4 + (i11 * 28 & -1) + 24 >> 2] = HEAP32[i9 >> 2];
  HEAP32[i12 >> 2] = __ZTVN9Inspector14InjectedScriptE + 8;
  __ZN9Inspector14InjectedScriptD1Ev(i10);
  i11 = i11 + 1 | 0;
  if ((i11 | 0) >= (i1 | 0)) {
   break;
  }
 }
 STACKTOP = i2;
 return i4 | 0;
}
function __ZN3JSC6StrongINS_7UnknownEEC2ERKS2_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 | 0;
 HEAP32[i5 >> 2] = 0;
 i1 = i2 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = HEAP32[(i2 & -4096) + 12 >> 2] | 0;
 if ((HEAP32[i6 + 84 >> 2] | 0) != 0) {
  _WTFCrash();
 }
 i2 = i6 + 80 | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 if ((i7 | 0) == 0) {
  __ZN3JSC9HandleSet4growEv(i6);
  i8 = HEAP32[i2 >> 2] | 0;
 } else {
  i8 = i7;
 }
 i7 = i8 + 12 | 0;
 HEAP32[i2 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i8 + 4 >> 2] = -6;
 HEAP32[i8 >> 2] = 0;
 i2 = i8 + 8 | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i7 >> 2] = 0;
 i9 = i6 + 60 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 HEAP32[i2 >> 2] = i6 + 48;
 HEAP32[i7 >> 2] = i10;
 HEAP32[i9 >> 2] = i8;
 HEAP32[i10 + 8 >> 2] = i8;
 i10 = i8 | 0;
 HEAP32[i5 >> 2] = i10;
 i9 = HEAP32[i1 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i11 = 0;
  i12 = 0;
  i13 = -6;
  i14 = 0;
 } else {
  i1 = i9 | 0;
  i9 = HEAP32[i1 >> 2] | 0;
  i7 = HEAP32[i1 + 4 >> 2] | 0;
  i11 = i7 & 0;
  i12 = i9 & -1;
  i13 = i7 & -1;
  i14 = i9 & 0;
 }
 i9 = i4 | 0;
 HEAP32[i9 >> 2] = i12 | i14;
 HEAP32[i9 + 4 >> 2] = i11 | i13;
 __ZN3JSC9HandleSet12writeBarrierEPNS_7JSValueERKS1_(HEAP32[(i8 & -4096) + 12 >> 2] | 0, i10, i4);
 i4 = HEAP32[i9 + 4 >> 2] | 0;
 i10 = HEAP32[i5 >> 2] | 0;
 HEAP32[i10 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i10 + 4 >> 2] = i4;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore25PageInjectedScriptManagerC2ERN9Inspector20InspectorEnvironmentEN3WTF10PassRefPtrINS1_18InjectedScriptHostEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i7 >> 2] = i3;
 __ZN9Inspector21InjectedScriptManagerC2ERNS_20InspectorEnvironmentEN3WTF10PassRefPtrINS_18InjectedScriptHostEEE(i1 | 0, i2, i5);
 i5 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i7 = i5 + 4 | 0;
   i2 = i7 | 0;
   i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i2 >> 2] = i3;
    break;
   }
   i3 = i7 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 15](i3);
  }
 } while (0);
 HEAP32[i1 >> 2] = H_BASE + 16;
 __ZN7WebCore18CommandLineAPIHost6createEv(i6);
 HEAP32[i1 + 56 >> 2] = HEAP32[i6 >> 2];
 STACKTOP = i4;
 return;
}
function __ZN7WebCore25PageInjectedScriptManagerC1ERN9Inspector20InspectorEnvironmentEN3WTF10PassRefPtrINS1_18InjectedScriptHostEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i7 >> 2] = i3;
 __ZN9Inspector21InjectedScriptManagerC2ERNS_20InspectorEnvironmentEN3WTF10PassRefPtrINS_18InjectedScriptHostEEE(i1 | 0, i2, i5);
 i5 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i7 = i5 + 4 | 0;
   i2 = i7 | 0;
   i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i2 >> 2] = i3;
    break;
   }
   i3 = i7 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 15](i3);
  }
 } while (0);
 HEAP32[i1 >> 2] = H_BASE + 16;
 __ZN7WebCore18CommandLineAPIHost6createEv(i6);
 HEAP32[i1 + 56 >> 2] = HEAP32[i6 >> 2];
 STACKTOP = i4;
 return;
}
function __ZN7WebCore25PageInjectedScriptManager23didCreateInjectedScriptEN9Inspector14InjectedScriptE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = __ZTVN9Inspector18InjectedScriptBaseE + 8;
 i6 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i4 + 4 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i7 = i6 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = i4 + 8 | 0;
 HEAP32[i7 >> 2] = __ZTVN10Deprecated11ScriptValueE + 8;
 __ZN3JSC6StrongINS_7UnknownEEC2ERKS2_(i4 + 12 | 0, i2 + 12 | 0);
 HEAP32[i7 >> 2] = H_BASE + 48;
 HEAP32[i4 + 16 >> 2] = HEAP32[i2 + 16 >> 2];
 HEAP32[i4 + 20 >> 2] = HEAP32[i2 + 20 >> 2];
 HEAP32[i5 >> 2] = __ZTVN9Inspector14InjectedScriptE + 8;
 __ZN7WebCore20CommandLineAPIModule14injectIfNeededEPN9Inspector21InjectedScriptManagerENS1_14InjectedScriptE(i1 | 0, i4);
 __ZN9Inspector14InjectedScriptD1Ev(i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore25PageInjectedScriptManager10disconnectEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 __ZN9Inspector21InjectedScriptManager10disconnectEv(i1 | 0);
 i2 = i1 + 56 | 0;
 __ZN7WebCore18CommandLineAPIHost10disconnectEv(HEAP32[i2 >> 2] | 0);
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore18CommandLineAPIHostD1Ev(i1);
  __ZN3WTF8fastFreeEPv(i1);
  return;
 } else {
  HEAP32[i2 >> 2] = i3;
  return;
 }
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
function __ZN7WebCore25PageInjectedScriptManagerD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = HEAP32[i1 + 56 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore18CommandLineAPIHostD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 __ZN9Inspector21InjectedScriptManagerD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore25PageInjectedScriptManagerD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = HEAP32[i1 + 56 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore18CommandLineAPIHostD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 __ZN9Inspector21InjectedScriptManagerD2Ev(i1 | 0);
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
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_vi + 2;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
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
function __ZN10Deprecated12ScriptObjectD0Ev(i1) {
 i1 = i1 | 0;
 __ZN10Deprecated11ScriptValueD2Ev(i1 | 0);
 __ZdlPv(i1);
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
 FUNCTION_TABLE_vii[i1 & 3](i2 | 0, i3 | 0);
}
function __ZN10Deprecated12ScriptObjectD1Ev(i1) {
 i1 = i1 | 0;
 __ZN10Deprecated11ScriptValueD2Ev(i1 | 0);
 return;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 15](i2 | 0);
}
function b3(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(3);
}
function b5(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(5);
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
function b4() {
 abort(4);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0,__ZN10Deprecated12ScriptObjectD0Ev,b0,__ZN10Deprecated12ScriptObjectD1Ev,b0,__ZN7WebCore25PageInjectedScriptManagerD1Ev,b0,__ZN7WebCore25PageInjectedScriptManager10disconnectEv,b0,__ZN7WebCore25PageInjectedScriptManagerD0Ev,b0,b0,b0,b0,b0];
  var FUNCTION_TABLE_vii = [b1,b1,__ZN7WebCore25PageInjectedScriptManager23didCreateInjectedScriptEN9Inspector14InjectedScriptE,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_viii = [b3,b3,__ZN7WebCore25PageInjectedScriptManagerC2ERN9Inspector20InspectorEnvironmentEN3WTF10PassRefPtrINS1_18InjectedScriptHostEEE,b3];
  var FUNCTION_TABLE_v = [b4,b4];
  var FUNCTION_TABLE_iii = [b5,b5];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZTVN10Deprecated11ScriptValueE": __ZTVN10Deprecated11ScriptValueE, "__ZTVN9Inspector14InjectedScriptE": __ZTVN9Inspector14InjectedScriptE, "__ZTVN9Inspector18InjectedScriptBaseE": __ZTVN9Inspector18InjectedScriptBaseE }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN3WTF9HashTableIiNS_12KeyValuePairIiN9Inspector14InjectedScriptEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIjEENS_7HashMapIiS3_S8_NS_10HashTraitsIiEENSA_IS3_EEE18KeyValuePairTraitsESB_E8reinsertEOS4_","_strlen","__ZN7WebCore25PageInjectedScriptManager25discardInjectedScriptsForEPNS_9DOMWindowE","__ZN3WTF7HashMapIPN3JSC9ExecStateEiNS_7PtrHashIS3_EENS_10HashTraitsIS3_EENS6_IiEEE6removeERKS3_","__ZN3JSC6StrongINS_7UnknownEEC2ERKS2_","__ZN3WTF22KeyValuePairHashTraitsINS_10HashTraitsIiEENS1_IN9Inspector14InjectedScriptEEEE10emptyValueEv","__ZN10Deprecated12ScriptObjectD0Ev","__ZN3WTF9HashTableIiNS_12KeyValuePairIiN9Inspector14InjectedScriptEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIjEENS_7HashMapIiS3_S8_NS_10HashTraitsIiEENSA_IS3_EEE18KeyValuePairTraitsESB_E6rehashEiPS4_","_memset","__ZN10Deprecated12ScriptObjectD1Ev","_memcpy","__ZN3WTF9HashTableIPN3JSC9ExecStateENS_12KeyValuePairIS3_iEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_iS9_NS_10HashTraitsIS3_EENSB_IiEEE18KeyValuePairTraitsESC_E6removeEPS5_","__ZN3WTF9HashTableIiNS_12KeyValuePairIiN9Inspector14InjectedScriptEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIjEENS_7HashMapIiS3_S8_NS_10HashTraitsIiEENSA_IS3_EEE18KeyValuePairTraitsESB_E13allocateTableEi","__ZN7WebCore25PageInjectedScriptManagerD1Ev","__ZN7WebCore25PageInjectedScriptManager10disconnectEv","__ZN7WebCore25PageInjectedScriptManagerD0Ev","__ZN7WebCore25PageInjectedScriptManager23didCreateInjectedScriptEN9Inspector14InjectedScriptE","__ZN7WebCore25PageInjectedScriptManagerC2ERN9Inspector20InspectorEnvironmentEN3WTF10PassRefPtrINS1_18InjectedScriptHostEEE"]

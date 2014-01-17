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
H_BASE = parentModule["_malloc"](752 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 752;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore15StorageAreaSyncD1Ev;
/* memory initializer */ allocate([83,69,76,69,67,84,32,107,101,121,44,32,118,97,108,117,101,32,70,82,79,77,32,73,116,101,109,84,97,98,108,101,0,0,0,0,0,0,0,0,65,76,84,69,82,32,84,65,66,76,69,32,73,116,101,109,84,97,98,108,101,32,82,69,78,65,77,69,32,84,79,32,66,97,99,107,117,112,95,73,116,101,109,84,97,98,108,101,0,0,0,0,0,0,0,0,65,76,84,69,82,32,84,65,66,76,69,32,73,116,101,109,84,97,98,108,101,50,32,82,69,78,65,77,69,32,84,79,32,73,116,101,109,84,97,98,108,101,0,0,0,0,0,0,68,82,79,80,32,84,65,66,76,69,32,73,116,101,109,84,97,98,108,101,0,0,0,0,73,78,83,69,82,84,32,73,78,84,79,32,73,116,101,109,84,97,98,108,101,50,32,83,69,76,69,67,84,32,42,32,102,114,111,109,32,73,116,101,109,84,97,98,108,101,0,0,67,82,69,65,84,69,32,84,65,66,76,69,32,73,116,101,109,84,97,98,108,101,50,32,40,107,101,121,32,84,69,88,84,32,85,78,73,81,85,69,32,79,78,32,67,79,78,70,76,73,67,84,32,82,69,80,76,65,67,69,44,32,118,97,108,117,101,32,66,76,79,66,32,78,79,84,32,78,85,76,76,32,79,78,32,67,79,78,70,76,73,67,84,32,70,65,73,76,41,0,0,0,0,0,68,82,79,80,32,84,65,66,76,69,32,73,70,32,69,88,73,83,84,83,32,73,116,101,109,84,97,98,108,101,50,0,83,69,76,69,67,84,32,118,97,108,117,101,32,70,82,79,77,32,73,116,101,109,84,97,98,108,101,32,76,73,77,73,84,32,49,0,0,0,0,0,83,69,76,69,67,84,32,67,79,85,78,84,40,42,41,32,70,82,79,77,32,73,116,101,109,84,97,98,108,101,0,0,68,69,76,69,84,69,32,70,82,79,77,32,73,116,101,109,84,97,98,108,101,32,87,72,69,82,69,32,107,101,121,61,63,0,0,0,0,0,0,0,73,78,83,69,82,84,32,73,78,84,79,32,73,116,101,109,84,97,98,108,101,32,86,65,76,85,69,83,32,40,63,44,32,63,41,0,0,0,0,0,68,69,76,69,84,69,32,70,82,79,77,32,73,116,101,109,84,97,98,108,101,0,0,0,73,116,101,109,84,97,98,108,101,0,0,0,0,0,0,0,67,82,69,65,84,69,32,84,65,66,76,69,32,73,70,32,78,79,84,32,69,88,73,83,84,83,32,73,116,101,109,84,97,98,108,101,32,40,107,101,121,32,84,69,88,84,32,85,78,73,81,85,69,32,79,78,32,67,79,78,70,76,73,67,84,32,82,69,80,76,65,67,69,44,32,118,97,108,117,101,32,66,76,79,66,32,78,79,84,32,78,85,76,76,32,79,78,32,67,79,78,70,76,73,67,84,32,70,65,73,76,41,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
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
function invoke_did(index,a1,a2) {
  try {
    return Module["dynCall_did"](index,a1,a2);
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
  var __ZN7WebCore13SQLResultDoneE=env.__ZN7WebCore13SQLResultDoneE|0;
  var __ZN7WebCore11SQLResultOkE=env.__ZN7WebCore11SQLResultOkE|0;
  var __ZN7WebCore12SQLResultRowE=env.__ZN7WebCore12SQLResultRowE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN3WTF17BoundFunctionImplINS_15FunctionWrapperIMN7WebCore15StorageAreaSyncEFvvEEEFvPS3_EEE=(H_BASE+728)|0;
  var __ZTVN7WebCore5TimerINS_15StorageAreaSyncEEE=(H_BASE+696)|0;
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
  var invoke_did=env.invoke_did;
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
function __ZN7WebCore15StorageAreaSync14syncTimerFiredEPNS_5TimerIS0_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 40 | 0;
 i8 = i1 + 208 | 0;
 i9 = (i8 | 0) == 0;
 if (!i9) {
  __ZN3WTF5Mutex4lockEv(i8);
 }
 do {
  if ((HEAP8[i1 + 254 | 0] & 1) == 0) {
   i10 = 6;
  } else {
   if ((HEAP8[i1 + 85 | 0] & 1) != 0) {
    i10 = 6;
    break;
   }
   __ZN7WebCore9TimerBase5startEdd(i1 + 8 | 0, +1, +0);
   i11 = 1;
   i12 = 0;
  }
 } while (0);
 do {
  if ((i10 | 0) == 6) {
   i13 = i1 + 84 | 0;
   if ((HEAP8[i13] & 1) != 0) {
    i14 = i1 + 232 | 0;
    i15 = HEAP32[i14 >> 2] | 0;
    if ((i15 | 0) != 0) {
     i16 = HEAP32[i1 + 236 >> 2] | 0;
     if ((i16 | 0) > 0) {
      i17 = 0;
      while (1) {
       i18 = i15 + (i17 << 3) | 0;
       do {
        if ((HEAP32[i18 >> 2] | 0) != -1) {
         i19 = HEAP32[i15 + (i17 << 3) + 4 >> 2] | 0;
         do {
          if ((i19 | 0) != 0) {
           i20 = i19 | 0;
           i21 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
           if ((i21 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i19);
            break;
           } else {
            HEAP32[i20 >> 2] = i21;
            break;
           }
          }
         } while (0);
         i19 = HEAP32[i18 >> 2] | 0;
         if ((i19 | 0) == 0) {
          break;
         }
         i21 = i19 | 0;
         i20 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
         if ((i20 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i19);
          break;
         } else {
          HEAP32[i21 >> 2] = i20;
          break;
         }
        }
       } while (0);
       i17 = i17 + 1 | 0;
       if ((i17 | 0) >= (i16 | 0)) {
        break;
       }
      }
     }
     __ZN3WTF8fastFreeEPv(i15);
     _memset(i14 | 0, 0, 16) | 0;
    }
    HEAP8[i1 + 252 | 0] = 1;
    HEAP8[i13] = 0;
   }
   i16 = i1 + 64 | 0;
   i17 = i16 | 0;
   i18 = HEAP32[i17 >> 2] | 0;
   i20 = i1 + 68 | 0;
   i21 = HEAP32[i20 >> 2] | 0;
   i19 = i18 + (i21 << 3) | 0;
   L32 : do {
    if ((HEAP32[i1 + 76 >> 2] | 0) == 0) {
     i22 = 0;
    } else {
     L34 : do {
      if ((i21 | 0) == 0) {
       i23 = i18;
      } else {
       i24 = i18;
       while (1) {
        i25 = HEAP32[i24 >> 2] | 0;
        if (!((i25 | 0) == (-1 | 0) | (i25 | 0) == 0)) {
         i23 = i24;
         break L34;
        }
        i25 = i24 + 8 | 0;
        if ((i25 | 0) == (i19 | 0)) {
         i22 = 0;
         break L32;
        } else {
         i24 = i25;
        }
       }
      }
     } while (0);
     if ((i23 | 0) == (i19 | 0)) {
      i22 = 0;
      break;
     }
     i24 = i1 + 85 | 0;
     i25 = i1 + 232 | 0;
     i26 = i6 + 8 | 0;
     i27 = i6 | 0;
     i28 = i5 | 0;
     i29 = i4 | 0;
     i30 = i23;
     i31 = 0;
     while (1) {
      if ((i31 | 0) > 99) {
       if ((HEAP8[i24] & 1) == 0) {
        break;
       }
      }
      __ZNKR3WTF6String12isolatedCopyEv(i4, i30 | 0);
      __ZNKR3WTF6String12isolatedCopyEv(i5, i30 + 4 | 0);
      __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_10StringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_E3addINS_17HashMapTranslatorISB_S6_EES1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S3_S5_S6_SB_S9_EEEEOT0_OT1_(i6, i25, i4, i5);
      do {
       if ((HEAP8[i26] & 1) == 0) {
        i32 = HEAP32[i27 >> 2] | 0;
        i33 = HEAP32[i28 >> 2] | 0;
        HEAP32[i28 >> 2] = 0;
        i34 = i32 + 4 | 0;
        i32 = HEAP32[i34 >> 2] | 0;
        HEAP32[i34 >> 2] = i33;
        if ((i32 | 0) == 0) {
         break;
        }
        i33 = i32 | 0;
        i34 = (HEAP32[i33 >> 2] | 0) - 2 | 0;
        if ((i34 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i32);
         break;
        } else {
         HEAP32[i33 >> 2] = i34;
         break;
        }
       }
      } while (0);
      i34 = HEAP32[i28 >> 2] | 0;
      do {
       if ((i34 | 0) != 0) {
        i33 = i34 | 0;
        i32 = (HEAP32[i33 >> 2] | 0) - 2 | 0;
        if ((i32 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i34);
         break;
        } else {
         HEAP32[i33 >> 2] = i32;
         break;
        }
       }
      } while (0);
      i34 = HEAP32[i29 >> 2] | 0;
      do {
       if ((i34 | 0) != 0) {
        i32 = i34 | 0;
        i33 = (HEAP32[i32 >> 2] | 0) - 2 | 0;
        if ((i33 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i34);
         break;
        } else {
         HEAP32[i32 >> 2] = i33;
         break;
        }
       }
      } while (0);
      i34 = i31 + 1 | 0;
      i33 = i30 + 8 | 0;
      if ((i33 | 0) == (i19 | 0)) {
       i22 = 0;
       break L32;
      } else {
       i35 = i33;
      }
      while (1) {
       i33 = HEAP32[i35 >> 2] | 0;
       if (!((i33 | 0) == (-1 | 0) | (i33 | 0) == 0)) {
        break;
       }
       i33 = i35 + 8 | 0;
       if ((i33 | 0) == (i19 | 0)) {
        i22 = 0;
        break L32;
       } else {
        i35 = i33;
       }
      }
      if ((i35 | 0) == (i19 | 0)) {
       i22 = 0;
       break L32;
      } else {
       i30 = i35;
       i31 = i34;
      }
     }
     i31 = HEAP32[i1 + 232 >> 2] | 0;
     i30 = HEAP32[i1 + 236 >> 2] | 0;
     i29 = i31 + (i30 << 3) | 0;
     if ((HEAP32[i1 + 244 >> 2] | 0) == 0) {
      i22 = 1;
      break;
     }
     L70 : do {
      if ((i30 | 0) == 0) {
       i36 = i31;
      } else {
       i28 = i31;
       while (1) {
        i27 = HEAP32[i28 >> 2] | 0;
        if (!((i27 | 0) == (-1 | 0) | (i27 | 0) == 0)) {
         i36 = i28;
         break L70;
        }
        i27 = i28 + 8 | 0;
        if ((i27 | 0) == (i29 | 0)) {
         i22 = 1;
         break L32;
        } else {
         i28 = i27;
        }
       }
      }
     } while (0);
     if ((i36 | 0) == (i29 | 0)) {
      i22 = 1;
      break;
     }
     i31 = i16 | 0;
     i30 = i3;
     i28 = i1 + 72 | 0;
     i34 = i36;
     while (1) {
      i27 = HEAP32[i17 >> 2] | 0;
      if ((i27 | 0) == 0) {
       i26 = HEAP32[i20 >> 2] | 0;
       i25 = i26 << 3 | 0;
       i37 = i25;
       i38 = i25;
       i39 = 0;
       i40 = i26;
      } else {
       i26 = HEAP32[i28 >> 2] | 0;
       i25 = i34 | 0;
       i24 = HEAP32[i25 >> 2] | 0;
       i33 = HEAP32[i24 + 16 >> 2] | 0;
       if (i33 >>> 0 > 127 >>> 0) {
        i41 = i33 >>> 7;
       } else {
        i41 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i24) | 0;
       }
       i24 = (i41 >>> 23) + ~i41 | 0;
       i33 = i24 << 12 ^ i24;
       i24 = i33 >>> 7 ^ i33;
       i33 = i24 << 2 ^ i24;
       i24 = i33 >>> 20 ^ i33 | 1;
       i33 = i41;
       i32 = 0;
       while (1) {
        i42 = i33 & i26;
        i43 = i27 + (i42 << 3) | 0;
        i44 = HEAP32[i43 >> 2] | 0;
        i45 = i44;
        if ((i45 | 0) == 0) {
         i46 = 0;
         break;
        } else if ((i45 | 0) != (-1 | 0)) {
         if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i44, HEAP32[i25 >> 2] | 0) | 0) {
          i46 = i43;
          break;
         }
        }
        i43 = (i32 | 0) == 0 ? i24 : i32;
        i33 = i43 + i42 | 0;
        i32 = i43;
       }
       i32 = HEAP32[i17 >> 2] | 0;
       i33 = HEAP32[i20 >> 2] | 0;
       i24 = i32 + (i33 << 3) | 0;
       i37 = (i46 | 0) == 0 ? i24 : i46;
       i38 = i24;
       i39 = i32;
       i40 = i33;
      }
      if ((i37 | 0) != (i39 + (i40 << 3) | 0)) {
       HEAP32[i3 >> 2] = i37;
       HEAP32[i3 + 4 >> 2] = i38;
       __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_10StringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_E34removeWithoutEntryConsistencyCheckENS_17HashTableIteratorIS1_S3_S5_S6_SB_S9_EE(i31, i30);
      }
      i33 = i34 + 8 | 0;
      if ((i33 | 0) == (i29 | 0)) {
       i22 = 1;
       break L32;
      } else {
       i47 = i33;
      }
      while (1) {
       i33 = HEAP32[i47 >> 2] | 0;
       if (!((i33 | 0) == (-1 | 0) | (i33 | 0) == 0)) {
        break;
       }
       i33 = i47 + 8 | 0;
       if ((i33 | 0) == (i29 | 0)) {
        i22 = 1;
        break L32;
       } else {
        i47 = i33;
       }
      }
      if ((i47 | 0) == (i29 | 0)) {
       i22 = 1;
       break;
      } else {
       i34 = i47;
      }
     }
    }
   } while (0);
   i20 = i1 + 253 | 0;
   if ((HEAP8[i20] & 1) != 0) {
    i11 = 0;
    i12 = i22;
    break;
   }
   HEAP8[i20] = 1;
   i20 = HEAP32[i1 + 92 >> 2] | 0;
   i17 = __ZN3WTF10fastMallocEj(20) | 0;
   HEAP32[i17 + 4 >> 2] = 1;
   HEAP32[i17 >> 2] = H_BASE + 736;
   i16 = i17 + 8 | 0;
   HEAP32[i16 >> 2] = F_BASE_vi + 10;
   HEAP32[i16 + 4 >> 2] = 0;
   HEAP32[i17 + 16 >> 2] = i1;
   i16 = i1 | 0;
   tempValue = HEAP32[i16 >> 2] | 0, HEAP32[i16 >> 2] = tempValue + 1, tempValue;
   i16 = i7 | 0;
   HEAP32[i16 >> 2] = i17;
   __ZN7WebCore18StorageSyncManager8dispatchERKN3WTF8FunctionIFvvEEE(i20, i7);
   i20 = HEAP32[i16 >> 2] | 0;
   if ((i20 | 0) == 0) {
    i11 = 0;
    i12 = i22;
    break;
   }
   i16 = i20 + 4 | 0;
   i20 = i16 | 0;
   if (((tempValue = HEAP32[i20 >> 2] | 0, HEAP32[i20 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
    i11 = 0;
    i12 = i22;
    break;
   }
   i20 = i16 - 4 | 0;
   if ((i20 | 0) == 0) {
    i11 = 0;
    i12 = i22;
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] & 31](i20);
   i11 = 0;
   i12 = i22;
  }
 } while (0);
 if (!i9) {
  __ZN3WTF5Mutex6unlockEv(i8);
 }
 if (i11) {
  STACKTOP = i2;
  return;
 }
 if (i12) {
  __ZN7WebCore9TimerBase5startEdd(i1 + 8 | 0, +1, +0);
  STACKTOP = i2;
  return;
 }
 i12 = i1 + 64 | 0;
 i11 = HEAP32[i12 >> 2] | 0;
 if ((i11 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i8 = HEAP32[i1 + 68 >> 2] | 0;
 if ((i8 | 0) > 0) {
  i1 = 0;
  while (1) {
   i9 = i11 + (i1 << 3) | 0;
   do {
    if ((HEAP32[i9 >> 2] | 0) != -1) {
     i22 = HEAP32[i11 + (i1 << 3) + 4 >> 2] | 0;
     do {
      if ((i22 | 0) != 0) {
       i7 = i22 | 0;
       i47 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
       if ((i47 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i22);
        break;
       } else {
        HEAP32[i7 >> 2] = i47;
        break;
       }
      }
     } while (0);
     i22 = HEAP32[i9 >> 2] | 0;
     if ((i22 | 0) == 0) {
      break;
     }
     i47 = i22 | 0;
     i7 = (HEAP32[i47 >> 2] | 0) - 2 | 0;
     if ((i7 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i22);
      break;
     } else {
      HEAP32[i47 >> 2] = i7;
      break;
     }
    }
   } while (0);
   i1 = i1 + 1 | 0;
   if ((i1 | 0) >= (i8 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i11);
 _memset(i12 | 0, 0, 16) | 0;
 STACKTOP = i2;
 return;
}
function __ZN7WebCore15StorageAreaSync13performImportEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i2 + 24 | 0;
 i6 = i2 + 48 | 0;
 i7 = i2 + 56 | 0;
 i8 = i2 + 64 | 0;
 __ZN7WebCore15StorageAreaSync12openDatabaseENS0_21OpenDatabaseParamTypeE(i1, 1);
 i9 = i1 + 96 | 0;
 if ((HEAP32[i9 >> 2] | 0) == 0) {
  i10 = i1 + 260 | 0;
  if ((i10 | 0) == 0) {
   HEAP8[i1 + 332 | 0] = 1;
   __ZN3WTF15ThreadCondition6signalEv(i1 + 284 | 0);
   STACKTOP = i2;
   return;
  } else {
   __ZN3WTF5Mutex4lockEv(i10);
   HEAP8[i1 + 332 | 0] = 1;
   __ZN3WTF15ThreadCondition6signalEv(i1 + 284 | 0);
   __ZN3WTF5Mutex6unlockEv(i10);
   STACKTOP = i2;
   return;
  }
 }
 __ZN3WTF6StringC1EPKc(i4, H_BASE + 8 | 0);
 __ZN7WebCore15SQLiteStatementC1ERNS_14SQLiteDatabaseERKN3WTF6StringE(i3, i9, i4);
 i9 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i4 = i9 | 0;
   i10 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i4 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i9 = __ZN7WebCore15SQLiteStatement7prepareEv(i3) | 0;
 do {
  if ((i9 | 0) == (HEAP32[__ZN7WebCore11SQLResultOkE >> 2] | 0)) {
   _memset(i5 | 0, 0, 20) | 0;
   i10 = __ZN7WebCore15SQLiteStatement4stepEv(i3) | 0;
   if ((i10 | 0) == (HEAP32[__ZN7WebCore12SQLResultRowE >> 2] | 0)) {
    i4 = i5 | 0;
    i11 = i8 + 8 | 0;
    i12 = i8 | 0;
    i13 = i7 | 0;
    i14 = i6 | 0;
    while (1) {
     __ZN7WebCore15SQLiteStatement13getColumnTextEi(i6, i3, 0);
     __ZN7WebCore15SQLiteStatement21getColumnBlobAsStringEi(i7, i3, 1);
     __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_10StringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_E3addINS_17HashMapTranslatorISB_S6_EES1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S3_S5_S6_SB_S9_EEEEOT0_OT1_(i8, i4, i6, i7);
     do {
      if ((HEAP8[i11] & 1) == 0) {
       i15 = HEAP32[i12 >> 2] | 0;
       i16 = HEAP32[i13 >> 2] | 0;
       HEAP32[i13 >> 2] = 0;
       i17 = i15 + 4 | 0;
       i15 = HEAP32[i17 >> 2] | 0;
       HEAP32[i17 >> 2] = i16;
       if ((i15 | 0) == 0) {
        break;
       }
       i16 = i15 | 0;
       i17 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
       if ((i17 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i15);
        break;
       } else {
        HEAP32[i16 >> 2] = i17;
        break;
       }
      }
     } while (0);
     i17 = HEAP32[i13 >> 2] | 0;
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
     i17 = HEAP32[i14 >> 2] | 0;
     do {
      if ((i17 | 0) != 0) {
       i15 = i17 | 0;
       i16 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
       if ((i16 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i17);
        break;
       } else {
        HEAP32[i15 >> 2] = i16;
        break;
       }
      }
     } while (0);
     i17 = __ZN7WebCore15SQLiteStatement4stepEv(i3) | 0;
     if ((i17 | 0) != (i10 | 0)) {
      i18 = i17;
      break;
     }
    }
   } else {
    i18 = i10;
   }
   do {
    if ((i18 | 0) == (HEAP32[__ZN7WebCore13SQLResultDoneE >> 2] | 0)) {
     __ZN7WebCore15StorageAreaImpl11importItemsERKN3WTF7HashMapINS1_6StringES3_NS1_10StringHashENS1_10HashTraitsIS3_EES6_EE(HEAP32[i1 + 88 >> 2] | 0, i5);
     i14 = i1 + 260 | 0;
     if ((i14 | 0) == 0) {
      HEAP8[i1 + 332 | 0] = 1;
      __ZN3WTF15ThreadCondition6signalEv(i1 + 284 | 0);
      break;
     } else {
      __ZN3WTF5Mutex4lockEv(i14);
      HEAP8[i1 + 332 | 0] = 1;
      __ZN3WTF15ThreadCondition6signalEv(i1 + 284 | 0);
      __ZN3WTF5Mutex6unlockEv(i14);
      break;
     }
    } else {
     i14 = i1 + 260 | 0;
     if ((i14 | 0) == 0) {
      HEAP8[i1 + 332 | 0] = 1;
      __ZN3WTF15ThreadCondition6signalEv(i1 + 284 | 0);
      break;
     } else {
      __ZN3WTF5Mutex4lockEv(i14);
      HEAP8[i1 + 332 | 0] = 1;
      __ZN3WTF15ThreadCondition6signalEv(i1 + 284 | 0);
      __ZN3WTF5Mutex6unlockEv(i14);
      break;
     }
    }
   } while (0);
   i10 = HEAP32[i5 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   i14 = HEAP32[i5 + 4 >> 2] | 0;
   if ((i14 | 0) > 0) {
    i13 = 0;
    while (1) {
     i12 = i10 + (i13 << 3) | 0;
     do {
      if ((HEAP32[i12 >> 2] | 0) != -1) {
       i11 = HEAP32[i10 + (i13 << 3) + 4 >> 2] | 0;
       do {
        if ((i11 | 0) != 0) {
         i4 = i11 | 0;
         i17 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
         if ((i17 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i11);
          break;
         } else {
          HEAP32[i4 >> 2] = i17;
          break;
         }
        }
       } while (0);
       i11 = HEAP32[i12 >> 2] | 0;
       if ((i11 | 0) == 0) {
        break;
       }
       i17 = i11 | 0;
       i4 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
       if ((i4 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i11);
        break;
       } else {
        HEAP32[i17 >> 2] = i4;
        break;
       }
      }
     } while (0);
     i13 = i13 + 1 | 0;
     if ((i13 | 0) >= (i14 | 0)) {
      break;
     }
    }
   }
   __ZN3WTF8fastFreeEPv(i10);
  } else {
   i14 = i1 + 260 | 0;
   if ((i14 | 0) == 0) {
    HEAP8[i1 + 332 | 0] = 1;
    __ZN3WTF15ThreadCondition6signalEv(i1 + 284 | 0);
    break;
   } else {
    __ZN3WTF5Mutex4lockEv(i14);
    HEAP8[i1 + 332 | 0] = 1;
    __ZN3WTF15ThreadCondition6signalEv(i1 + 284 | 0);
    __ZN3WTF5Mutex6unlockEv(i14);
    break;
   }
  }
 } while (0);
 __ZN7WebCore15SQLiteStatementD1Ev(i3);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore15StorageAreaSync4syncEbRKN3WTF7HashMapINS1_6StringES3_NS1_10StringHashENS1_10HashTraitsIS3_EES6_EE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 40 | 0;
 i9 = i4 + 48 | 0;
 i10 = i4 + 64 | 0;
 i11 = i4 + 72 | 0;
 i12 = i3 + 12 | 0;
 do {
  if (!((HEAP32[i12 >> 2] | 0) != 0 | i2)) {
   if ((HEAP8[i1 + 256 | 0] & 1) != 0) {
    break;
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 if ((HEAP8[i1 + 255 | 0] & 1) != 0) {
  STACKTOP = i4;
  return;
 }
 i13 = i1 + 96 | 0;
 i14 = i13 | 0;
 i15 = i1 + 256 | 0;
 do {
  if ((HEAP32[i14 >> 2] | 0) == 0) {
   if ((HEAP8[i15] & 1) == 0) {
    __ZN7WebCore15StorageAreaSync12openDatabaseENS0_21OpenDatabaseParamTypeE(i1, 0);
    if ((HEAP32[i14 >> 2] | 0) != 0) {
     break;
    }
    STACKTOP = i4;
    return;
   } else {
    HEAP8[i15] = 0;
    STACKTOP = i4;
    return;
   }
  }
 } while (0);
 if ((HEAP8[i15] & 1) != 0) {
  HEAP8[i15] = 0;
  __ZN7WebCore14SQLiteDatabase5closeEv(i13);
  STACKTOP = i4;
  return;
 }
 do {
  if (i2) {
   __ZN3WTF6StringC1EPKc(i6, H_BASE + 512 | 0);
   __ZN7WebCore15SQLiteStatementC1ERNS_14SQLiteDatabaseERKN3WTF6StringE(i5, i13, i6);
   i15 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i15 | 0) != 0) {
     i14 = i15 | 0;
     i1 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
     if ((i1 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i15);
      break;
     } else {
      HEAP32[i14 >> 2] = i1;
      break;
     }
    }
   } while (0);
   i15 = __ZN7WebCore15SQLiteStatement7prepareEv(i5) | 0;
   if ((i15 | 0) == (HEAP32[__ZN7WebCore11SQLResultOkE >> 2] | 0)) {
    i15 = __ZN7WebCore15SQLiteStatement4stepEv(i5) | 0;
    i1 = (i15 | 0) == (HEAP32[__ZN7WebCore13SQLResultDoneE >> 2] | 0);
    __ZN7WebCore15SQLiteStatementD1Ev(i5);
    if (i1) {
     break;
    }
    STACKTOP = i4;
    return;
   } else {
    __ZN7WebCore15SQLiteStatementD1Ev(i5);
    STACKTOP = i4;
    return;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i8, H_BASE + 472 | 0);
 __ZN7WebCore15SQLiteStatementC1ERNS_14SQLiteDatabaseERKN3WTF6StringE(i7, i13, i8);
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 | 0;
   i6 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i8 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i5 = __ZN7WebCore15SQLiteStatement7prepareEv(i7) | 0;
 if ((i5 | 0) == (HEAP32[__ZN7WebCore11SQLResultOkE >> 2] | 0)) {
  __ZN3WTF6StringC1EPKc(i10, H_BASE + 432 | 0);
  __ZN7WebCore15SQLiteStatementC1ERNS_14SQLiteDatabaseERKN3WTF6StringE(i9, i13, i10);
  i6 = HEAP32[i10 >> 2] | 0;
  do {
   if ((i6 | 0) != 0) {
    i10 = i6 | 0;
    i8 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
    if ((i8 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i6);
     break;
    } else {
     HEAP32[i10 >> 2] = i8;
     break;
    }
   }
  } while (0);
  if ((__ZN7WebCore15SQLiteStatement7prepareEv(i9) | 0) == (i5 | 0)) {
   i5 = i3 | 0;
   i6 = i3 + 4 | 0;
   i3 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i6 >> 2] << 3) | 0;
   __ZN7WebCore17SQLiteTransactionC1ERNS_14SQLiteDatabaseEb(i11, i13, 0);
   __ZN7WebCore17SQLiteTransaction5beginEv(i11);
   i13 = HEAP32[i5 >> 2] | 0;
   i5 = HEAP32[i6 >> 2] | 0;
   i6 = i13 + (i5 << 3) | 0;
   L50 : do {
    if ((HEAP32[i12 >> 2] | 0) == 0) {
     i16 = i6;
    } else {
     if ((i5 | 0) == 0) {
      i16 = i13;
      break;
     } else {
      i17 = i13;
     }
     while (1) {
      i8 = HEAP32[i17 >> 2] | 0;
      if (!((i8 | 0) == (-1 | 0) | (i8 | 0) == 0)) {
       i16 = i17;
       break L50;
      }
      i8 = i17 + 8 | 0;
      if ((i8 | 0) == (i6 | 0)) {
       i16 = i6;
       break;
      } else {
       i17 = i8;
      }
     }
    }
   } while (0);
   L56 : do {
    if ((i16 | 0) != (i3 | 0)) {
     i17 = HEAP32[__ZN7WebCore13SQLResultDoneE >> 2] | 0;
     i13 = i16;
     while (1) {
      i5 = i13 + 4 | 0;
      i12 = i5 | 0;
      i8 = (HEAP32[i12 >> 2] | 0) == 0 ? i9 : i7;
      __ZN7WebCore15SQLiteStatement8bindTextEiRKN3WTF6StringE(i8, 1, i13 | 0) | 0;
      if ((HEAP32[i12 >> 2] | 0) != 0) {
       __ZN7WebCore15SQLiteStatement8bindBlobEiRKN3WTF6StringE(i8, 2, i5) | 0;
      }
      if ((__ZN7WebCore15SQLiteStatement4stepEv(i8) | 0) != (i17 | 0)) {
       break L56;
      }
      __ZN7WebCore15SQLiteStatement5resetEv(i8) | 0;
      i8 = i13 + 8 | 0;
      L64 : do {
       if ((i8 | 0) == (i6 | 0)) {
        i18 = i6;
       } else {
        i5 = i8;
        while (1) {
         i12 = HEAP32[i5 >> 2] | 0;
         if (!((i12 | 0) == (-1 | 0) | (i12 | 0) == 0)) {
          i18 = i5;
          break L64;
         }
         i12 = i5 + 8 | 0;
         if ((i12 | 0) == (i6 | 0)) {
          i18 = i6;
          break;
         } else {
          i5 = i12;
         }
        }
       }
      } while (0);
      if ((i18 | 0) == (i3 | 0)) {
       break;
      } else {
       i13 = i18;
      }
     }
    }
   } while (0);
   __ZN7WebCore17SQLiteTransaction6commitEv(i11);
   __ZN7WebCore17SQLiteTransactionD1Ev(i11);
  }
  __ZN7WebCore15SQLiteStatementD1Ev(i9);
 }
 __ZN7WebCore15SQLiteStatementD1Ev(i7);
 STACKTOP = i4;
 return;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_10StringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_E6rehashEiPS3_(i1, i2, i3) {
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
    if ((i24 | 0) == 0) {
     i25 = 9;
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
   if ((i25 | 0) == 9) {
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
   i15 = (i2 | 0) == (i3 | 0) ? i27 : i11;
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
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_10StringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_E3addINS_17HashMapTranslatorISB_S6_EERKS1_SH_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S3_S5_S6_SB_S9_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_10StringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_E6rehashEiPS3_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 i9 = HEAP32[i3 + 16 >> 2] | 0;
 if (i9 >>> 0 > 127 >>> 0) {
  i11 = i9 >>> 7;
 } else {
  i11 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i3) | 0;
 }
 i3 = (i11 >>> 23) + ~i11 | 0;
 i9 = i3 << 12 ^ i3;
 i3 = i9 >>> 7 ^ i9;
 i9 = i3 << 2 ^ i3;
 i3 = i9 >>> 20 ^ i9 | 1;
 i9 = 0;
 i7 = i11;
 i11 = 0;
 while (1) {
  i12 = i7 & i6;
  i13 = i10 + (i12 << 3) | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  i15 = i14;
  if ((i15 | 0) == (-1 | 0)) {
   i16 = i13;
  } else if ((i15 | 0) == 0) {
   break;
  } else {
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i14, HEAP32[i8 >> 2] | 0) | 0) {
    i17 = 11;
    break;
   } else {
    i16 = i9;
   }
  }
  i14 = (i11 | 0) == 0 ? i3 : i11;
  i9 = i16;
  i7 = i14 + i12 | 0;
  i11 = i14;
 }
 if ((i17 | 0) == 11) {
  i17 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 3) | 0;
  i11 = i1;
  HEAP32[i11 >> 2] = i13;
  HEAP32[i11 + 4 >> 2] = i17;
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
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) != 0) {
  i8 = i9 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 i8 = i18 | 0;
 i13 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = i9;
 do {
  if ((i13 | 0) != 0) {
   i9 = i13 | 0;
   i8 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i9 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i13 = HEAP32[i4 >> 2] | 0;
 if ((i13 | 0) != 0) {
  i4 = i13 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i18 + 4 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i13;
 do {
  if ((i8 | 0) != 0) {
   i13 = i8 | 0;
   i4 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i13 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i8 = i2 + 12 | 0;
 i4 = (HEAP32[i8 >> 2] | 0) + 1 | 0;
 HEAP32[i8 >> 2] = i4;
 i8 = i2 + 4 | 0;
 i13 = HEAP32[i8 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i4 << 1 | 0) < (i13 | 0)) {
  i19 = i18;
  i20 = i13;
 } else {
  if ((i13 | 0) == 0) {
   i21 = 8;
  } else {
   i9 = i13 << 1;
   i21 = (i4 * 6 & -1 | 0) < (i9 | 0) ? i13 : i9;
  }
  i9 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_10StringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_E6rehashEiPS3_(i2, i21, i18) | 0;
  i19 = i9;
  i20 = HEAP32[i8 >> 2] | 0;
 }
 i8 = (HEAP32[i5 >> 2] | 0) + (i20 << 3) | 0;
 i20 = i1;
 HEAP32[i20 >> 2] = i19;
 HEAP32[i20 + 4 >> 2] = i8;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_10StringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_E3addINS_17HashMapTranslatorISB_S6_EES1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S3_S5_S6_SB_S9_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_10StringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_E6rehashEiPS3_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 i9 = HEAP32[i3 + 16 >> 2] | 0;
 if (i9 >>> 0 > 127 >>> 0) {
  i11 = i9 >>> 7;
 } else {
  i11 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i3) | 0;
 }
 i3 = (i11 >>> 23) + ~i11 | 0;
 i9 = i3 << 12 ^ i3;
 i3 = i9 >>> 7 ^ i9;
 i9 = i3 << 2 ^ i3;
 i3 = i9 >>> 20 ^ i9 | 1;
 i9 = 0;
 i7 = i11;
 i11 = 0;
 while (1) {
  i12 = i7 & i6;
  i13 = i10 + (i12 << 3) | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  i15 = i14;
  if ((i15 | 0) == 0) {
   break;
  } else if ((i15 | 0) == (-1 | 0)) {
   i16 = i13;
  } else {
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i14, HEAP32[i8 >> 2] | 0) | 0) {
    i17 = 11;
    break;
   } else {
    i16 = i9;
   }
  }
  i14 = (i11 | 0) == 0 ? i3 : i11;
  i9 = i16;
  i7 = i14 + i12 | 0;
  i11 = i14;
 }
 if ((i17 | 0) == 11) {
  i17 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 3) | 0;
  i11 = i1;
  HEAP32[i11 >> 2] = i13;
  HEAP32[i11 + 4 >> 2] = i17;
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
 i9 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 i8 = i18 | 0;
 i13 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = i9;
 do {
  if ((i13 | 0) != 0) {
   i9 = i13 | 0;
   i8 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i9 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i13 = i4 | 0;
 i4 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 i13 = i18 + 4 | 0;
 i8 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = i4;
 do {
  if ((i8 | 0) != 0) {
   i4 = i8 | 0;
   i13 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i4 >> 2] = i13;
    break;
   }
  }
 } while (0);
 i8 = i2 + 12 | 0;
 i13 = (HEAP32[i8 >> 2] | 0) + 1 | 0;
 HEAP32[i8 >> 2] = i13;
 i8 = i2 + 4 | 0;
 i4 = HEAP32[i8 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i13 << 1 | 0) < (i4 | 0)) {
  i19 = i18;
  i20 = i4;
 } else {
  if ((i4 | 0) == 0) {
   i21 = 8;
  } else {
   i9 = i4 << 1;
   i21 = (i13 * 6 & -1 | 0) < (i9 | 0) ? i4 : i9;
  }
  i9 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_10StringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_E6rehashEiPS3_(i2, i21, i18) | 0;
  i19 = i9;
  i20 = HEAP32[i8 >> 2] | 0;
 }
 i8 = (HEAP32[i5 >> 2] | 0) + (i20 << 3) | 0;
 i20 = i1;
 HEAP32[i20 >> 2] = i19;
 HEAP32[i20 + 4 >> 2] = i8;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore15StorageAreaSyncD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 __ZN3WTF15ThreadConditionD1Ev(i1 + 284 | 0);
 __ZN3WTF5MutexD1Ev(i1 + 260 | 0);
 i2 = HEAP32[i1 + 232 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i1 + 236 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    i5 = i2 + (i4 << 3) | 0;
    do {
     if ((HEAP32[i5 >> 2] | 0) != -1) {
      i6 = HEAP32[i2 + (i4 << 3) + 4 >> 2] | 0;
      do {
       if ((i6 | 0) != 0) {
        i7 = i6 | 0;
        i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
        if ((i8 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i6);
         break;
        } else {
         HEAP32[i7 >> 2] = i8;
         break;
        }
       }
      } while (0);
      i6 = HEAP32[i5 >> 2] | 0;
      if ((i6 | 0) == 0) {
       break;
      }
      i8 = i6 | 0;
      i7 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
      if ((i7 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i6);
       break;
      } else {
       HEAP32[i8 >> 2] = i7;
       break;
      }
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
 __ZN3WTF5MutexD1Ev(i1 + 208 | 0);
 i2 = HEAP32[i1 + 204 >> 2] | 0;
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
 __ZN7WebCore14SQLiteDatabaseD1Ev(i1 + 96 | 0);
 i2 = HEAP32[i1 + 92 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) == 0) {
    __ZN7WebCore18StorageSyncManagerD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 88 >> 2] | 0;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
  }
 } while (0);
 i2 = HEAP32[i1 + 64 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i9 = i1 + 8 | 0;
  i10 = i9;
  __ZN7WebCore9TimerBaseD2Ev(i10);
  return;
 }
 i5 = HEAP32[i1 + 68 >> 2] | 0;
 if ((i5 | 0) > 0) {
  i3 = 0;
  while (1) {
   i4 = i2 + (i3 << 3) | 0;
   do {
    if ((HEAP32[i4 >> 2] | 0) != -1) {
     i7 = HEAP32[i2 + (i3 << 3) + 4 >> 2] | 0;
     do {
      if ((i7 | 0) != 0) {
       i8 = i7 | 0;
       i6 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
       if ((i6 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i7);
        break;
       } else {
        HEAP32[i8 >> 2] = i6;
        break;
       }
      }
     } while (0);
     i7 = HEAP32[i4 >> 2] | 0;
     if ((i7 | 0) == 0) {
      break;
     }
     i6 = i7 | 0;
     i8 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i7);
      break;
     } else {
      HEAP32[i6 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i3 = i3 + 1 | 0;
   if ((i3 | 0) >= (i5 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i2);
 i9 = i1 + 8 | 0;
 i10 = i9;
 __ZN7WebCore9TimerBaseD2Ev(i10);
 return;
}
function __ZN7WebCore15StorageAreaSyncD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 __ZN3WTF15ThreadConditionD1Ev(i1 + 284 | 0);
 __ZN3WTF5MutexD1Ev(i1 + 260 | 0);
 i2 = HEAP32[i1 + 232 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i1 + 236 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    i5 = i2 + (i4 << 3) | 0;
    do {
     if ((HEAP32[i5 >> 2] | 0) != -1) {
      i6 = HEAP32[i2 + (i4 << 3) + 4 >> 2] | 0;
      do {
       if ((i6 | 0) != 0) {
        i7 = i6 | 0;
        i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
        if ((i8 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i6);
         break;
        } else {
         HEAP32[i7 >> 2] = i8;
         break;
        }
       }
      } while (0);
      i6 = HEAP32[i5 >> 2] | 0;
      if ((i6 | 0) == 0) {
       break;
      }
      i8 = i6 | 0;
      i7 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
      if ((i7 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i6);
       break;
      } else {
       HEAP32[i8 >> 2] = i7;
       break;
      }
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
 __ZN3WTF5MutexD1Ev(i1 + 208 | 0);
 i2 = HEAP32[i1 + 204 >> 2] | 0;
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
 __ZN7WebCore14SQLiteDatabaseD1Ev(i1 + 96 | 0);
 i2 = HEAP32[i1 + 92 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) == 0) {
    __ZN7WebCore18StorageSyncManagerD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 88 >> 2] | 0;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
  }
 } while (0);
 i2 = HEAP32[i1 + 64 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i9 = i1 + 8 | 0;
  i10 = i9;
  __ZN7WebCore9TimerBaseD2Ev(i10);
  return;
 }
 i5 = HEAP32[i1 + 68 >> 2] | 0;
 if ((i5 | 0) > 0) {
  i3 = 0;
  while (1) {
   i4 = i2 + (i3 << 3) | 0;
   do {
    if ((HEAP32[i4 >> 2] | 0) != -1) {
     i7 = HEAP32[i2 + (i3 << 3) + 4 >> 2] | 0;
     do {
      if ((i7 | 0) != 0) {
       i8 = i7 | 0;
       i6 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
       if ((i6 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i7);
        break;
       } else {
        HEAP32[i8 >> 2] = i6;
        break;
       }
      }
     } while (0);
     i7 = HEAP32[i4 >> 2] | 0;
     if ((i7 | 0) == 0) {
      break;
     }
     i6 = i7 | 0;
     i8 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i7);
      break;
     } else {
      HEAP32[i6 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i3 = i3 + 1 | 0;
   if ((i3 | 0) >= (i5 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i2);
 i9 = i1 + 8 | 0;
 i10 = i9;
 __ZN7WebCore9TimerBaseD2Ev(i10);
 return;
}
function __ZN7WebCore15StorageAreaSync12openDatabaseENS0_21OpenDatabaseParamTypeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 + 204 | 0;
 __ZN7WebCore18StorageSyncManager20fullDatabaseFilenameERKN3WTF6StringE(i4, HEAP32[i1 + 92 >> 2] | 0, i6);
 i7 = i4 | 0;
 L1 : do {
  if (!((i2 | 0) == 1 & ((__ZN7WebCore10fileExistsERKN3WTF6StringE(i4) | 0) ^ 1))) {
   i8 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i8 | 0) != 0) {
     if ((HEAP32[i8 + 4 >> 2] | 0) == 0) {
      break;
     }
     __ZN7WebCore14StorageTracker20cancelDeletingOriginERKN3WTF6StringE(__ZN7WebCore14StorageTracker7trackerEv() | 0, i6);
     i9 = i1 + 96 | 0;
     if (!(__ZN7WebCore14SQLiteDatabase4openERKN3WTF6StringEb(i9, i4, 0) | 0)) {
      i10 = i1 + 260 | 0;
      if ((i10 | 0) == 0) {
       HEAP8[i1 + 332 | 0] = 1;
       __ZN3WTF15ThreadCondition6signalEv(i1 + 284 | 0);
      } else {
       __ZN3WTF5Mutex4lockEv(i10);
       HEAP8[i1 + 332 | 0] = 1;
       __ZN3WTF15ThreadCondition6signalEv(i1 + 284 | 0);
       __ZN3WTF5Mutex6unlockEv(i10);
      }
      HEAP8[i1 + 255 | 0] = 1;
      break L1;
     }
     __ZN7WebCore15StorageAreaSync24migrateItemTableIfNeededEv(i1);
     __ZN3WTF6StringC1EPKc(i5, H_BASE + 552 | 0);
     i10 = __ZN7WebCore14SQLiteDatabase14executeCommandERKN3WTF6StringE(i9, i5) | 0;
     i9 = HEAP32[i5 >> 2] | 0;
     do {
      if ((i9 | 0) != 0) {
       i11 = i9 | 0;
       i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
       if ((i12 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i9);
        break;
       } else {
        HEAP32[i11 >> 2] = i12;
        break;
       }
      }
     } while (0);
     if (i10) {
      __ZN7WebCore14StorageTracker16setOriginDetailsERKN3WTF6StringES4_(__ZN7WebCore14StorageTracker7trackerEv() | 0, i6, i4);
      break L1;
     }
     i9 = i1 + 260 | 0;
     if ((i9 | 0) == 0) {
      HEAP8[i1 + 332 | 0] = 1;
      __ZN3WTF15ThreadCondition6signalEv(i1 + 284 | 0);
     } else {
      __ZN3WTF5Mutex4lockEv(i9);
      HEAP8[i1 + 332 | 0] = 1;
      __ZN3WTF15ThreadCondition6signalEv(i1 + 284 | 0);
      __ZN3WTF5Mutex6unlockEv(i9);
     }
     HEAP8[i1 + 255 | 0] = 1;
     break L1;
    }
   } while (0);
   i8 = i1 + 260 | 0;
   if ((i8 | 0) == 0) {
    HEAP8[i1 + 332 | 0] = 1;
    __ZN3WTF15ThreadCondition6signalEv(i1 + 284 | 0);
   } else {
    __ZN3WTF5Mutex4lockEv(i8);
    HEAP8[i1 + 332 | 0] = 1;
    __ZN3WTF15ThreadCondition6signalEv(i1 + 284 | 0);
    __ZN3WTF5Mutex6unlockEv(i8);
   }
   HEAP8[i1 + 255 | 0] = 1;
  }
 } while (0);
 i1 = HEAP32[i7 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i7 = i1 | 0;
 i4 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i7 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore15StorageAreaSync24migrateItemTableIfNeededEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 24 | 0;
 i6 = i2 + 32 | 0;
 i7 = i2 + 40 | 0;
 i8 = i2 + 48 | 0;
 i9 = i1 + 96 | 0;
 __ZN3WTF6StringC1EPKc(i3, H_BASE + 536 | 0);
 i1 = __ZN7WebCore14SQLiteDatabase11tableExistsERKN3WTF6StringE(i9, i3) | 0;
 i10 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i3 = i10 | 0;
   i11 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i3 >> 2] = i11;
    break;
   }
  }
 } while (0);
 if (!i1) {
  STACKTOP = i2;
  return;
 }
 __ZN3WTF6StringC1EPKc(i5, H_BASE + 360 | 0);
 __ZN7WebCore15SQLiteStatementC1ERNS_14SQLiteDatabaseERKN3WTF6StringE(i4, i9, i5);
 i1 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i5 = i1 | 0;
   i10 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i5 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i1 = __ZN7WebCore15SQLiteStatement22isColumnDeclaredAsBlobEi(i4, 0) | 0;
 __ZN7WebCore15SQLiteStatementD1Ev(i4);
 if (i1) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore17SQLiteTransactionC1ERNS_14SQLiteDatabaseEb(i6, i9, 0);
 __ZN7WebCore17SQLiteTransaction5beginEv(i6);
 i1 = i7 | 0;
 i4 = 0;
 while (1) {
  if ((i4 | 0) == 5) {
   i12 = 22;
   break;
  }
  __ZN3WTF6StringC1EPKc(i7, HEAP32[H_BASE + 672 + (i4 << 2) >> 2] | 0);
  i10 = __ZN7WebCore14SQLiteDatabase14executeCommandERKN3WTF6StringE(i9, i7) | 0;
  i5 = HEAP32[i1 >> 2] | 0;
  do {
   if ((i5 | 0) != 0) {
    i11 = i5 | 0;
    i3 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
    if ((i3 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i5);
     break;
    } else {
     HEAP32[i11 >> 2] = i3;
     break;
    }
   }
  } while (0);
  if (i10) {
   i4 = i4 + 1 | 0;
  } else {
   i12 = 18;
   break;
  }
 }
 do {
  if ((i12 | 0) == 18) {
   __ZN7WebCore17SQLiteTransaction8rollbackEv(i6);
   __ZN3WTF6StringC1EPKc(i8, H_BASE + 48 | 0);
   __ZN7WebCore14SQLiteDatabase14executeCommandERKN3WTF6StringE(i9, i8) | 0;
   i4 = HEAP32[i8 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   i1 = i4 | 0;
   i7 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i1 >> 2] = i7;
    break;
   }
  } else if ((i12 | 0) == 22) {
   __ZN7WebCore17SQLiteTransaction6commitEv(i6);
  }
 } while (0);
 __ZN7WebCore17SQLiteTransactionD1Ev(i6);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore15StorageAreaSync11performSyncEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 _memset(i3 | 0, 0, 20) | 0;
 i4 = i1 + 208 | 0;
 i5 = (i4 | 0) == 0;
 if (!i5) {
  __ZN3WTF5Mutex4lockEv(i4);
 }
 i6 = i1 + 252 | 0;
 i7 = (HEAP8[i6] & 1) != 0;
 i8 = i1 + 232 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = i3 | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i9;
 i9 = i1 + 236 | 0;
 i8 = HEAP32[i9 >> 2] | 0;
 i11 = i3 + 4 | 0;
 HEAP32[i9 >> 2] = 0;
 HEAP32[i11 >> 2] = i8;
 i8 = i1 + 240 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i3 + 8 >> 2] = i9;
 i9 = i1 + 244 | 0;
 i8 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 HEAP32[i3 + 12 >> 2] = i8;
 i8 = i1 + 248 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i3 + 16 >> 2] = i9;
 HEAP8[i6] = 0;
 HEAP8[i1 + 253 | 0] = 0;
 i6 = i1 + 254 | 0;
 HEAP8[i6] = 1;
 if (i5) {
  __ZN7WebCore15StorageAreaSync4syncEbRKN3WTF7HashMapINS1_6StringES3_NS1_10StringHashENS1_10HashTraitsIS3_EES6_EE(i1, i7, i3);
  HEAP8[i6] = 0;
 } else {
  __ZN3WTF5Mutex6unlockEv(i4);
  __ZN7WebCore15StorageAreaSync4syncEbRKN3WTF7HashMapINS1_6StringES3_NS1_10StringHashENS1_10HashTraitsIS3_EES6_EE(i1, i7, i3);
  __ZN3WTF5Mutex4lockEv(i4);
  HEAP8[i6] = 0;
  __ZN3WTF5Mutex6unlockEv(i4);
 }
 i4 = HEAP32[i10 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i10 = HEAP32[i11 >> 2] | 0;
 if ((i10 | 0) > 0) {
  i11 = 0;
  while (1) {
   i6 = i4 + (i11 << 3) | 0;
   do {
    if ((HEAP32[i6 >> 2] | 0) != -1) {
     i3 = HEAP32[i4 + (i11 << 3) + 4 >> 2] | 0;
     do {
      if ((i3 | 0) != 0) {
       i7 = i3 | 0;
       i1 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
       if ((i1 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i3);
        break;
       } else {
        HEAP32[i7 >> 2] = i1;
        break;
       }
      }
     } while (0);
     i3 = HEAP32[i6 >> 2] | 0;
     if ((i3 | 0) == 0) {
      break;
     }
     i1 = i3 | 0;
     i7 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
     if ((i7 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i3);
      break;
     } else {
      HEAP32[i1 >> 2] = i7;
      break;
     }
    }
   } while (0);
   i11 = i11 + 1 | 0;
   if ((i11 | 0) >= (i10 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i4);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore15StorageAreaSync19deleteEmptyDatabaseEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i2 + 24 | 0;
 i6 = i1 + 96 | 0;
 if ((HEAP32[i6 >> 2] | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZN3WTF6StringC1EPKc(i4, H_BASE + 400 | 0);
 __ZN7WebCore15SQLiteStatementC1ERNS_14SQLiteDatabaseERKN3WTF6StringE(i3, i6, i4);
 i7 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i4 = i7 | 0;
   i8 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i4 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i7 = __ZN7WebCore15SQLiteStatement7prepareEv(i3) | 0;
 do {
  if ((i7 | 0) == (HEAP32[__ZN7WebCore11SQLResultOkE >> 2] | 0)) {
   i8 = __ZN7WebCore15SQLiteStatement4stepEv(i3) | 0;
   if ((i8 | 0) != (HEAP32[__ZN7WebCore12SQLResultRowE >> 2] | 0)) {
    break;
   }
   if ((__ZN7WebCore15SQLiteStatement12getColumnIntEi(i3, 0) | 0) != 0) {
    break;
   }
   __ZN7WebCore15SQLiteStatement8finalizeEv(i3) | 0;
   __ZN7WebCore14SQLiteDatabase5closeEv(i6);
   if (__ZN7WebCore14StorageTracker8isActiveEv(__ZN7WebCore14StorageTracker7trackerEv() | 0) | 0) {
    __ZN7WebCore14StorageTracker26deleteOriginWithIdentifierERKN3WTF6StringE(__ZN7WebCore14StorageTracker7trackerEv() | 0, i1 + 204 | 0);
    break;
   }
   __ZN7WebCore18StorageSyncManager20fullDatabaseFilenameERKN3WTF6StringE(i5, HEAP32[i1 + 92 >> 2] | 0, i1 + 204 | 0);
   __ZN7WebCore16SQLiteFileSystem18deleteDatabaseFileERKN3WTF6StringE(i5) | 0;
   i8 = HEAP32[i5 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   i4 = i8 | 0;
   i9 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i4 >> 2] = i9;
    break;
   }
  }
 } while (0);
 __ZN7WebCore15SQLiteStatementD1Ev(i3);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore15StorageAreaSyncC2EN3WTF10PassRefPtrINS_18StorageSyncManagerEEENS2_INS_15StorageAreaImplEEERKNS1_6StringE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = i1 | 0;
 HEAP32[i7 >> 2] = 1;
 i8 = i1 + 8 | 0;
 __ZN7WebCore9TimerBaseC2Ev(i8);
 HEAP32[i8 >> 2] = H_BASE + 704;
 HEAP32[i1 + 52 >> 2] = i1;
 i8 = i1 + 56 | 0;
 HEAP32[i8 >> 2] = F_BASE_vii + 2;
 HEAP32[i8 + 4 >> 2] = 0;
 i8 = i3 | 0;
 _memset(i1 + 64 | 0, 0, 22) | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i1 + 88 >> 2] = i3;
 i3 = i1 + 92 | 0;
 i8 = i2 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i3 >> 2] = i2;
 __ZN7WebCore14SQLiteDatabaseC1Ev(i1 + 96 | 0);
 __ZNKR3WTF6String12isolatedCopyEv(i1 + 204 | 0, i4);
 __ZN3WTF5MutexC1Ev(i1 + 208 | 0);
 _memset(i1 + 232 | 0, 0, 25) | 0;
 __ZN3WTF5MutexC1Ev(i1 + 260 | 0);
 __ZN3WTF15ThreadConditionC1Ev(i1 + 284 | 0);
 HEAP8[i1 + 332 | 0] = 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i3 = __ZN3WTF10fastMallocEj(20) | 0;
 HEAP32[i3 + 4 >> 2] = 1;
 HEAP32[i3 >> 2] = H_BASE + 736;
 i2 = i3 + 8 | 0;
 HEAP32[i2 >> 2] = F_BASE_vi + 8;
 HEAP32[i2 + 4 >> 2] = 0;
 HEAP32[i3 + 16 >> 2] = i1;
 tempValue = HEAP32[i7 >> 2] | 0, HEAP32[i7 >> 2] = tempValue + 1, tempValue;
 i7 = i6 | 0;
 HEAP32[i7 >> 2] = i3;
 __ZN7WebCore18StorageSyncManager8dispatchERKN3WTF8FunctionIFvvEEE(i4, i6);
 i6 = HEAP32[i7 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i7 = i6 + 4 | 0;
 i6 = i7 | 0;
 if (((tempValue = HEAP32[i6 >> 2] | 0, HEAP32[i6 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
  STACKTOP = i5;
  return;
 }
 i6 = i7 - 4 | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
 STACKTOP = i5;
 return;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_10StringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_E34removeWithoutEntryConsistencyCheckENS_17HashTableIteratorIS1_S3_S5_S6_SB_S9_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 i4 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i2 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i4 + 4 >> 2];
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 if ((i5 | 0) == ((HEAP32[i1 >> 2] | 0) + (HEAP32[i4 >> 2] << 3) | 0)) {
  STACKTOP = i3;
  return;
 }
 i2 = HEAP32[i5 + 4 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i6 = i2 | 0;
   i7 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i6 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i2 = i5 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i7 = i5 | 0;
   i6 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i7 >> 2] = i6;
    break;
   }
  }
 } while (0);
 HEAP32[i2 >> 2] = -1;
 i2 = i1 + 16 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 i2 = i1 + 12 | 0;
 i5 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i5;
 i2 = HEAP32[i4 >> 2] | 0;
 if (!((i5 * 6 & -1 | 0) < (i2 | 0) & (i2 | 0) > 8)) {
  STACKTOP = i3;
  return;
 }
 __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_10StringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_E6rehashEiPS3_(i1, (i2 | 0) / 2 & -1, 0) | 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore15StorageAreaSync17scheduleFinalSyncEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 __ZN7WebCore15StorageAreaSync24blockUntilImportCompleteEv(i1);
 i4 = i1 + 88 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 + 4 | 0;
   i6 = i4 | 0;
   i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i6 >> 2] = i7;
    break;
   }
   i7 = i4 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 31](i7);
  }
 } while (0);
 if (+HEAPF64[i1 + 16 >> 3] != +0) {
  __ZN7WebCore9TimerBase4stopEv(i1 + 8 | 0);
 }
 HEAP8[i1 + 85 | 0] = 1;
 __ZN7WebCore15StorageAreaSync14syncTimerFiredEPNS_5TimerIS0_EE(i1, 0);
 i5 = HEAP32[i1 + 92 >> 2] | 0;
 i7 = __ZN3WTF10fastMallocEj(20) | 0;
 HEAP32[i7 + 4 >> 2] = 1;
 HEAP32[i7 >> 2] = H_BASE + 736;
 i4 = i7 + 8 | 0;
 HEAP32[i4 >> 2] = F_BASE_vi + 20;
 HEAP32[i4 + 4 >> 2] = 0;
 HEAP32[i7 + 16 >> 2] = i1;
 i4 = i1 | 0;
 tempValue = HEAP32[i4 >> 2] | 0, HEAP32[i4 >> 2] = tempValue + 1, tempValue;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i7;
 __ZN7WebCore18StorageSyncManager8dispatchERKN3WTF8FunctionIFvvEEE(i5, i3);
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i3 + 4 | 0;
 i3 = i4 | 0;
 if (((tempValue = HEAP32[i3 >> 2] | 0, HEAP32[i3 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
  STACKTOP = i2;
  return;
 }
 i3 = i4 - 4 | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 31](i3);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore15StorageAreaSync6createEN3WTF10PassRefPtrINS_18StorageSyncManagerEEENS2_INS_15StorageAreaImplEEERKNS1_6StringE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = __ZN3WTF10fastMallocEj(336) | 0;
 i9 = i6 | 0;
 i10 = i2 | 0;
 i2 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i9 >> 2] = i2;
 i2 = i7 | 0;
 i10 = i3 | 0;
 i3 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i2 >> 2] = i3;
 __ZN7WebCore15StorageAreaSyncC2EN3WTF10PassRefPtrINS_18StorageSyncManagerEEENS2_INS_15StorageAreaImplEEERKNS1_6StringE(i8, i6, i7, i4);
 i4 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 + 4 | 0;
   i7 = i2 | 0;
   i6 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i7 >> 2] = i6;
    break;
   }
   i6 = i2 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
  }
 } while (0);
 i4 = HEAP32[i9 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i11 = i1 | 0;
  HEAP32[i11 >> 2] = i8;
  STACKTOP = i5;
  return;
 }
 i9 = i4 | 0;
 i6 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
 if ((i6 | 0) == 0) {
  __ZN7WebCore18StorageSyncManagerD1Ev(i4);
  __ZN3WTF8fastFreeEPv(i4);
  i11 = i1 | 0;
  HEAP32[i11 >> 2] = i8;
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i9 >> 2] = i6;
  i11 = i1 | 0;
  HEAP32[i11 >> 2] = i8;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore15StorageAreaSync13scheduleClearEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = i1 + 64 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = HEAP32[i1 + 68 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i5 = 0;
   while (1) {
    i6 = i3 + (i5 << 3) | 0;
    do {
     if ((HEAP32[i6 >> 2] | 0) != -1) {
      i7 = HEAP32[i3 + (i5 << 3) + 4 >> 2] | 0;
      do {
       if ((i7 | 0) != 0) {
        i8 = i7 | 0;
        i9 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
        if ((i9 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i7);
         break;
        } else {
         HEAP32[i8 >> 2] = i9;
         break;
        }
       }
      } while (0);
      i7 = HEAP32[i6 >> 2] | 0;
      if ((i7 | 0) == 0) {
       break;
      }
      i9 = i7 | 0;
      i8 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
      if ((i8 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i7);
       break;
      } else {
       HEAP32[i9 >> 2] = i8;
       break;
      }
     }
    } while (0);
    i5 = i5 + 1 | 0;
    if ((i5 | 0) >= (i4 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i3);
  _memset(i2 | 0, 0, 16) | 0;
 }
 HEAP8[i1 + 84 | 0] = 1;
 if (+HEAPF64[i1 + 16 >> 3] != +0) {
  return;
 }
 __ZN7WebCore9TimerBase5startEdd(i1 + 8 | 0, +1, +0);
 return;
}
function __ZN7WebCore15StorageAreaSync19scheduleItemForSyncERKN3WTF6StringES4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_10StringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_E3addINS_17HashMapTranslatorISB_S6_EERKS1_SH_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S3_S5_S6_SB_S9_EEEEOT0_OT1_(i5, i1 + 64 | 0, i2, i3);
 do {
  if ((HEAP8[i5 + 8 | 0] & 1) == 0) {
   i2 = HEAP32[i5 >> 2] | 0;
   i6 = HEAP32[i3 >> 2] | 0;
   if ((i6 | 0) != 0) {
    i7 = i6 | 0;
    HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
   }
   i7 = i2 + 4 | 0;
   i2 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = i6;
   if ((i2 | 0) == 0) {
    break;
   }
   i6 = i2 | 0;
   i7 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i6 >> 2] = i7;
    break;
   }
  }
 } while (0);
 if (+HEAPF64[i1 + 16 >> 3] != +0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore9TimerBase5startEdd(i1 + 8 | 0, +1, +0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore15StorageAreaSync24blockUntilImportCompleteEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 88 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  return;
 }
 i3 = i1 + 260 | 0;
 i4 = (i3 | 0) == 0;
 if (!i4) {
  __ZN3WTF5Mutex4lockEv(i3);
 }
 i5 = i1 + 332 | 0;
 if ((HEAP8[i5] & 1) == 0) {
  i6 = i1 + 284 | 0;
  while (1) {
   __ZN3WTF15ThreadCondition4waitERNS_5MutexE(i6, i3);
   if ((HEAP8[i5] & 1) != 0) {
    break;
   }
  }
 }
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 do {
  if ((i5 | 0) != 0) {
   i2 = i5 + 4 | 0;
   i6 = i2 | 0;
   i1 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i1 | 0) != 0) {
    HEAP32[i6 >> 2] = i1;
    break;
   }
   i1 = i2 - 4 | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
  }
 } while (0);
 if (i4) {
  return;
 }
 __ZN3WTF5Mutex6unlockEv(i3);
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 672 >> 2] = H_BASE + 328;
 HEAP32[H_BASE + 676 >> 2] = H_BASE + 224;
 HEAP32[H_BASE + 680 >> 2] = H_BASE + 176;
 HEAP32[H_BASE + 684 >> 2] = H_BASE + 152;
 HEAP32[H_BASE + 688 >> 2] = H_BASE + 104;
 HEAP32[H_BASE + 704 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 708 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 712 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 716 >> 2] = F_BASE_did + 2;
 HEAP32[H_BASE + 736 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 740 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 744 >> 2] = F_BASE_vi + 18;
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
function __ZN3WTF17BoundFunctionImplINS_15FunctionWrapperIMN7WebCore15StorageAreaSyncEFvvEEEFvPS3_EED0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 736;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 i3 = i2 | 0;
 if (((tempValue = HEAP32[i3 >> 2] | 0, HEAP32[i3 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0 | (i2 | 0) == 0) {
  i4 = i1;
  __ZN3WTF8fastFreeEPv(i4);
  return;
 }
 __ZN7WebCore15StorageAreaSyncD2Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 i4 = i1;
 __ZN3WTF8fastFreeEPv(i4);
 return;
}
function __ZN3WTF17BoundFunctionImplINS_15FunctionWrapperIMN7WebCore15StorageAreaSyncEFvvEEEFvPS3_EEclEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 8 | 0;
 i3 = (HEAP32[i1 + 16 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] | 0) | 0;
 i1 = i3;
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 & 1 | 0) == 0) {
  i5 = i4;
  FUNCTION_TABLE_vi[i5 & 31](i1);
  return;
 } else {
  i5 = HEAP32[(HEAP32[i3 >> 2] | 0) + (i4 - 1) >> 2] | 0;
  FUNCTION_TABLE_vi[i5 & 31](i1);
  return;
 }
}
function __ZN7WebCore5TimerINS_15StorageAreaSyncEE5firedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 48 | 0;
 i3 = (HEAP32[i1 + 44 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] | 0) | 0;
 i4 = i3;
 i5 = HEAP32[i2 >> 2] | 0;
 if ((i5 & 1 | 0) == 0) {
  i6 = i5;
  FUNCTION_TABLE_vii[i6 & 3](i4, i1);
  return;
 } else {
  i6 = HEAP32[(HEAP32[i3 >> 2] | 0) + (i5 - 1) >> 2] | 0;
  FUNCTION_TABLE_vii[i6 & 3](i4, i1);
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
function __ZN3WTF17BoundFunctionImplINS_15FunctionWrapperIMN7WebCore15StorageAreaSyncEFvvEEEFvPS3_EED1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 736;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 i1 = i2 | 0;
 if (((tempValue = HEAP32[i1 >> 2] | 0, HEAP32[i1 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0 | (i2 | 0) == 0) {
  return;
 }
 __ZN7WebCore15StorageAreaSyncD2Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore15StorageAreaSync12markImportedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 260 | 0;
 if ((i2 | 0) == 0) {
  HEAP8[i1 + 332 | 0] = 1;
  __ZN3WTF15ThreadCondition6signalEv(i1 + 284 | 0);
  return;
 } else {
  __ZN3WTF5Mutex4lockEv(i2);
  HEAP8[i1 + 332 | 0] = 1;
  __ZN3WTF15ThreadCondition6signalEv(i1 + 284 | 0);
  __ZN3WTF5Mutex6unlockEv(i2);
  return;
 }
}
function __ZN7WebCore15StorageAreaSync21scheduleCloseDatabaseEv(i1) {
 i1 = i1 | 0;
 if ((HEAP32[i1 + 96 >> 2] | 0) == 0) {
  return;
 }
 HEAP8[i1 + 256 | 0] = 1;
 if (+HEAPF64[i1 + 16 >> 3] != +0) {
  return;
 }
 __ZN7WebCore9TimerBase5startEdd(i1 + 8 | 0, +1, +0);
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore15StorageAreaSync12scheduleSyncEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore15StorageAreaSync14syncTimerFiredEPNS_5TimerIS0_EE(i1, 0);
 return;
}
function __ZN7WebCore5TimerINS_15StorageAreaSyncEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBaseD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1 | 0);
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
function dynCall_did(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 return +FUNCTION_TABLE_did[i1 & 3](i2 | 0, +d3);
}
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 3](i2 | 0, i3 | 0);
}
function __ZN7WebCore5TimerINS_15StorageAreaSyncEED1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBaseD2Ev(i1);
 return;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function __ZNK7WebCore9TimerBase15alignedFireTimeEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 return +d2;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 31](i2 | 0);
}
function b5(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(5);
 return 0;
}
function b0(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 abort(0);
 return +0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
}
function b2(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(2);
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
function b3(i1) {
 i1 = i1 | 0;
 abort(3);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b1(i1) {
 i1 = i1 | 0;
 abort(1);
}
function b4() {
 abort(4);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_did = [b0,b0,__ZNK7WebCore9TimerBase15alignedFireTimeEd,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN3WTF17BoundFunctionImplINS_15FunctionWrapperIMN7WebCore15StorageAreaSyncEFvvEEEFvPS3_EED1Ev,b1,__ZN7WebCore5TimerINS_15StorageAreaSyncEED0Ev,b1,__ZN3WTF17BoundFunctionImplINS_15FunctionWrapperIMN7WebCore15StorageAreaSyncEFvvEEEFvPS3_EED0Ev,b1,__ZN7WebCore15StorageAreaSync13performImportEv,b1,__ZN7WebCore15StorageAreaSync11performSyncEv,b1,__ZN7WebCore5TimerINS_15StorageAreaSyncEED1Ev,b1,__ZN7WebCore15StorageAreaSyncD2Ev,b1,__ZN7WebCore5TimerINS_15StorageAreaSyncEE5firedEv,b1,__ZN3WTF17BoundFunctionImplINS_15FunctionWrapperIMN7WebCore15StorageAreaSyncEFvvEEEFvPS3_EEclEv,b1,__ZN7WebCore15StorageAreaSync19deleteEmptyDatabaseEv,b1,b1,b1,b1,b1,b1,b1,b1
  ,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,__ZN7WebCore15StorageAreaSync14syncTimerFiredEPNS_5TimerIS0_EE,b2];
  var FUNCTION_TABLE_ii = [b3,b3];
  var FUNCTION_TABLE_v = [b4,b4];
  var FUNCTION_TABLE_iii = [b5,b5];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_did: dynCall_did, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_did": invoke_did, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore13SQLResultDoneE": __ZN7WebCore13SQLResultDoneE, "__ZN7WebCore11SQLResultOkE": __ZN7WebCore11SQLResultOkE, "__ZN7WebCore12SQLResultRowE": __ZN7WebCore12SQLResultRowE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_did = Module["dynCall_did"] = asm["dynCall_did"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore15StorageAreaSync13scheduleClearEv","__ZN7WebCore15StorageAreaSync21scheduleCloseDatabaseEv","_strlen","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_10StringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_E6rehashEiPS3_","__ZN7WebCore15StorageAreaSync12scheduleSyncEv","__ZN7WebCore15StorageAreaSyncC2EN3WTF10PassRefPtrINS_18StorageSyncManagerEEENS2_INS_15StorageAreaImplEEERKNS1_6StringE","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_10StringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_E3addINS_17HashMapTranslatorISB_S6_EERKS1_SH_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S3_S5_S6_SB_S9_EEEEOT0_OT1_","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_10StringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_E34removeWithoutEntryConsistencyCheckENS_17HashTableIteratorIS1_S3_S5_S6_SB_S9_EE","__ZN7WebCore5TimerINS_15StorageAreaSyncEED1Ev","__ZN7WebCore15StorageAreaSync24migrateItemTableIfNeededEv","__ZNK7WebCore9TimerBase15alignedFireTimeEd","_memset","_memcpy","__ZN7WebCore15StorageAreaSync6createEN3WTF10PassRefPtrINS_18StorageSyncManagerEEENS2_INS_15StorageAreaImplEEERKNS1_6StringE","__ZN7WebCore15StorageAreaSync17scheduleFinalSyncEv","__ZN7WebCore15StorageAreaSync4syncEbRKN3WTF7HashMapINS1_6StringES3_NS1_10StringHashENS1_10HashTraitsIS3_EES6_EE","__ZN7WebCore15StorageAreaSync12openDatabaseENS0_21OpenDatabaseParamTypeE","__ZN7WebCore15StorageAreaSyncD2Ev","__ZN7WebCore15StorageAreaSync19deleteEmptyDatabaseEv","__ZN7WebCore15StorageAreaSync19scheduleItemForSyncERKN3WTF6StringES4_","__ZN7WebCore15StorageAreaSync14syncTimerFiredEPNS_5TimerIS0_EE","__ZN3WTF17BoundFunctionImplINS_15FunctionWrapperIMN7WebCore15StorageAreaSyncEFvvEEEFvPS3_EED1Ev","__ZN7WebCore5TimerINS_15StorageAreaSyncEED0Ev","__ZN7WebCore15StorageAreaSync12markImportedEv","__ZN7WebCore15StorageAreaSync24blockUntilImportCompleteEv","__ZN3WTF17BoundFunctionImplINS_15FunctionWrapperIMN7WebCore15StorageAreaSyncEFvvEEEFvPS3_EED0Ev","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_10StringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_E3addINS_17HashMapTranslatorISB_S6_EES1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S3_S5_S6_SB_S9_EEEEOT0_OT1_","__ZN7WebCore15StorageAreaSync13performImportEv","__ZN7WebCore15StorageAreaSync11performSyncEv","__ZN7WebCore5TimerINS_15StorageAreaSyncEE5firedEv","__ZN3WTF17BoundFunctionImplINS_15FunctionWrapperIMN7WebCore15StorageAreaSyncEFvvEEEFvPS3_EEclEv"]

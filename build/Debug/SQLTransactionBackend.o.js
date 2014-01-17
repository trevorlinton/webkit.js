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
H_BASE = parentModule["_malloc"](512 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 512;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore21SQLTransactionBackendC1EPNS_15DatabaseBackendEN3WTF10PassRefPtrINS_22AbstractSQLTransactionEEENS4_INS_21SQLTransactionWrapperEEEb;
var __ZN7WebCore21SQLTransactionBackendD1Ev;
/* memory initializer */ allocate([37,115,32,40,37,100,32,37,115,41,0,0,0,0,0,0,117,110,97,98,108,101,32,116,111,32,99,111,109,109,105,116,32,116,114,97,110,115,97,99,116,105,111,110,0,0,0,0,117,110,107,110,111,119,110,32,101,114,114,111,114,32,111,99,99,117,114,114,101,100,32,100,117,114,105,110,103,32,116,114,97,110,115,97,99,116,105,111,110,32,112,111,115,116,102,108,105,103,104,116,0,0,0,0,116,104,101,32,115,116,97,116,101,109,101,110,116,32,102,97,105,108,101,100,32,116,111,32,101,120,101,99,117,116,101,0,117,110,107,110,111,119,110,32,101,114,114,111,114,32,111,99,99,117,114,114,101,100,32,100,117,114,105,110,103,32,116,114,97,110,115,97,99,116,105,111,110,32,112,114,101,102,108,105,103,104,116,0,0,0,0,0,117,110,97,98,108,101,32,116,111,32,114,101,97,100,32,118,101,114,115,105,111,110,0,0,117,110,97,98,108,101,32,116,111,32,98,101,103,105,110,32,116,114,97,110,115,97,99,116,105,111,110,0,0,0,0,0,117,110,97,98,108,101,32,116,111,32,111,112,101,110,32,97,32,116,114,97,110,115,97,99,116,105,111,110,44,32,98,101,99,97,117,115,101,32,116,104,101,32,117,115,101,114,32,100,101,108,101,116,101,100,32,116,104,101,32,100,97,116,97,98,97,115,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,244,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
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
  var __ZTVN7WebCore21SQLTransactionBackendE=(H_BASE+432)|0;
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
  var invoke_viiiii=env.invoke_viiiii;
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
function __ZN7WebCore21SQLTransactionBackend27openTransactionAndPreflightEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i1 + 28 | 0;
 if ((HEAP8[(__ZN7WebCore8Database4fromEPNS_15DatabaseBackendE(HEAP32[i8 >> 2] | 0) | 0) + 220 | 0] & 1) != 0) {
  __ZN3WTF6StringC1EPKc(i5, H_BASE + 256 | 0);
  i9 = __ZN3WTF10fastMallocEj(12) | 0;
  HEAP32[i9 >> 2] = 1;
  HEAP32[i9 + 4 >> 2] = 0;
  __ZNKR3WTF6String12isolatedCopyEv(i9 + 8 | 0, i5);
  i10 = i1 + 36 | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  HEAP32[i10 >> 2] = i9;
  do {
   if ((i11 | 0) != 0) {
    i9 = i11 | 0;
    if (((tempValue = HEAP32[i9 >> 2] | 0, HEAP32[i9 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
     break;
    }
    i9 = HEAP32[i11 + 8 >> 2] | 0;
    do {
     if ((i9 | 0) != 0) {
      i10 = i9 | 0;
      i12 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
      if ((i12 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i9);
       break;
      } else {
       HEAP32[i10 >> 2] = i12;
       break;
      }
     }
    } while (0);
    __ZN3WTF8fastFreeEPv(i11);
   }
  } while (0);
  i11 = HEAP32[i5 >> 2] | 0;
  do {
   if ((i11 | 0) != 0) {
    i5 = i11 | 0;
    i9 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
    if ((i9 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i11);
     break;
    } else {
     HEAP32[i5 >> 2] = i9;
     break;
    }
   }
  } while (0);
  i13 = (HEAP8[i1 + 42 | 0] & 1) == 0 ? 7 : 9;
  STACKTOP = i2;
  return i13 | 0;
 }
 i11 = i1 + 46 | 0;
 if ((HEAP8[i11] & 1) == 0) {
  __ZN7WebCore21SQLTransactionBackend17acquireOriginLockEv(i1);
  i9 = HEAP32[i8 >> 2] | 0;
  i5 = __ZNK7WebCore19DatabaseBackendBase11maximumSizeEv(i9 | 0) | 0;
  __ZN7WebCore14SQLiteDatabase14setMaximumSizeEx(i9 + 48 | 0, i5, tempRet0);
 }
 i5 = __ZN3WTF10fastMallocEj(8) | 0;
 __ZN7WebCore17SQLiteTransactionC1ERNS_14SQLiteDatabaseEb(i5, (HEAP32[i8 >> 2] | 0) + 48 | 0, (HEAP8[i11] & 1) != 0);
 i11 = i1 + 92 | 0;
 i9 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = i5;
 if ((i9 | 0) != 0) {
  __ZN7WebCore17SQLiteTransactionD1Ev(i9);
  __ZN3WTF8fastFreeEPv(i9);
 }
 __ZN7WebCore19DatabaseBackendBase12resetDeletesEv(HEAP32[i8 >> 2] | 0);
 __ZN7WebCore19DatabaseBackendBase17disableAuthorizerEv(HEAP32[i8 >> 2] | 0);
 __ZN7WebCore17SQLiteTransaction5beginEv(HEAP32[i11 >> 2] | 0);
 __ZN7WebCore19DatabaseBackendBase16enableAuthorizerEv(HEAP32[i8 >> 2] | 0);
 if ((HEAP8[(HEAP32[i11 >> 2] | 0) + 4 | 0] & 1) == 0) {
  i9 = __ZN7WebCore14SQLiteDatabase9lastErrorEv((HEAP32[i8 >> 2] | 0) + 48 | 0) | 0;
  i5 = __ZN7WebCore14SQLiteDatabase12lastErrorMsgEv((HEAP32[i8 >> 2] | 0) + 48 | 0) | 0;
  __ZN3WTF6String6formatEPKcz(i4, H_BASE + 8 | 0, (i14 = STACKTOP, STACKTOP = STACKTOP + 24 | 0, HEAP32[i14 >> 2] = H_BASE + 224, HEAP32[i14 + 8 >> 2] = i9, HEAP32[i14 + 16 >> 2] = i5, i14) | 0);
  STACKTOP = i14;
  i5 = __ZN3WTF10fastMallocEj(12) | 0;
  i9 = i5;
  HEAP32[i5 >> 2] = 1;
  HEAP32[i5 + 4 >> 2] = 1;
  __ZNKR3WTF6String12isolatedCopyEv(i5 + 8 | 0, i4);
  i5 = HEAP32[i4 >> 2] | 0;
  do {
   if ((i5 | 0) != 0) {
    i4 = i5 | 0;
    i12 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
    if ((i12 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i5);
     break;
    } else {
     HEAP32[i4 >> 2] = i12;
     break;
    }
   }
  } while (0);
  i5 = i1 + 36 | 0;
  i12 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = i9;
  do {
   if ((i12 | 0) != 0) {
    i9 = i12 | 0;
    if (((tempValue = HEAP32[i9 >> 2] | 0, HEAP32[i9 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
     break;
    }
    i9 = HEAP32[i12 + 8 >> 2] | 0;
    do {
     if ((i9 | 0) != 0) {
      i5 = i9 | 0;
      i4 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
      if ((i4 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i9);
       break;
      } else {
       HEAP32[i5 >> 2] = i4;
       break;
      }
     }
    } while (0);
    __ZN3WTF8fastFreeEPv(i12);
   }
  } while (0);
  i12 = HEAP32[i11 >> 2] | 0;
  HEAP32[i11 >> 2] = 0;
  if ((i12 | 0) != 0) {
   __ZN7WebCore17SQLiteTransactionD1Ev(i12);
   __ZN3WTF8fastFreeEPv(i12);
  }
  i13 = (HEAP8[i1 + 42 | 0] & 1) == 0 ? 7 : 9;
  STACKTOP = i2;
  return i13 | 0;
 }
 i12 = i6 | 0;
 HEAP32[i12 >> 2] = 0;
 i9 = __ZN7WebCore19DatabaseBackendBase30getActualVersionForTransactionERN3WTF6StringE(HEAP32[i8 >> 2] | 0, i6) | 0;
 i6 = HEAP32[i8 >> 2] | 0;
 L50 : do {
  if (i9) {
   i4 = HEAP32[i6 + 20 >> 2] | 0;
   do {
    if ((i4 | 0) == 0) {
     i15 = 0;
    } else {
     if ((HEAP32[i4 + 4 >> 2] | 0) == 0) {
      i15 = 0;
      break;
     }
     i15 = (__ZN3WTF5equalEPKNS_10StringImplES2_(i4, HEAP32[i12 >> 2] | 0) | 0) & 1 ^ 1;
    }
   } while (0);
   HEAP8[i1 + 47 | 0] = i15;
   i4 = i1 + 32 | 0;
   i5 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 1](i5, i1) | 0) {
      break;
     }
     __ZN7WebCore19DatabaseBackendBase17disableAuthorizerEv(HEAP32[i8 >> 2] | 0);
     i10 = HEAP32[i11 >> 2] | 0;
     HEAP32[i11 >> 2] = 0;
     if ((i10 | 0) != 0) {
      __ZN7WebCore17SQLiteTransactionD1Ev(i10);
      __ZN3WTF8fastFreeEPv(i10);
     }
     __ZN7WebCore19DatabaseBackendBase16enableAuthorizerEv(HEAP32[i8 >> 2] | 0);
     i10 = HEAP32[i4 >> 2] | 0;
     i16 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 16 >> 2] & 31](i10) | 0;
     if ((i16 | 0) != 0) {
      i10 = i16 | 0;
      tempValue = HEAP32[i10 >> 2] | 0, HEAP32[i10 >> 2] = tempValue + 1, tempValue;
     }
     i10 = i1 + 36 | 0;
     i17 = HEAP32[i10 >> 2] | 0;
     HEAP32[i10 >> 2] = i16;
     if ((i17 | 0) == 0) {
      i18 = i16;
     } else {
      i16 = i17 | 0;
      if (((tempValue = HEAP32[i16 >> 2] | 0, HEAP32[i16 >> 2] = tempValue - 1, tempValue) - 1 | 0) <= 0) {
       i16 = HEAP32[i17 + 8 >> 2] | 0;
       do {
        if ((i16 | 0) != 0) {
         i19 = i16 | 0;
         i20 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
         if ((i20 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i16);
          break;
         } else {
          HEAP32[i19 >> 2] = i20;
          break;
         }
        }
       } while (0);
       __ZN3WTF8fastFreeEPv(i17);
      }
      i18 = HEAP32[i10 >> 2] | 0;
     }
     do {
      if ((i18 | 0) == 0) {
       __ZN3WTF6StringC1EPKc(i7, H_BASE + 144 | 0);
       i16 = __ZN3WTF10fastMallocEj(12) | 0;
       HEAP32[i16 >> 2] = 1;
       HEAP32[i16 + 4 >> 2] = 0;
       __ZNKR3WTF6String12isolatedCopyEv(i16 + 8 | 0, i7);
       i20 = HEAP32[i10 >> 2] | 0;
       HEAP32[i10 >> 2] = i16;
       do {
        if ((i20 | 0) != 0) {
         i16 = i20 | 0;
         if (((tempValue = HEAP32[i16 >> 2] | 0, HEAP32[i16 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
          break;
         }
         i16 = HEAP32[i20 + 8 >> 2] | 0;
         do {
          if ((i16 | 0) != 0) {
           i19 = i16 | 0;
           i21 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
           if ((i21 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i16);
            break;
           } else {
            HEAP32[i19 >> 2] = i21;
            break;
           }
          }
         } while (0);
         __ZN3WTF8fastFreeEPv(i20);
        }
       } while (0);
       i20 = HEAP32[i7 >> 2] | 0;
       if ((i20 | 0) == 0) {
        break;
       }
       i16 = i20 | 0;
       i21 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
       if ((i21 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i20);
        break;
       } else {
        HEAP32[i16 >> 2] = i21;
        break;
       }
      }
     } while (0);
     i22 = (HEAP8[i1 + 42 | 0] & 1) == 0 ? 7 : 9;
     break L50;
    }
   } while (0);
   i22 = (HEAP8[i1 + 40 | 0] & 1) == 0 ? 4 : 8;
  } else {
   i4 = __ZN7WebCore14SQLiteDatabase9lastErrorEv(i6 + 48 | 0) | 0;
   i5 = __ZN7WebCore14SQLiteDatabase12lastErrorMsgEv((HEAP32[i8 >> 2] | 0) + 48 | 0) | 0;
   __ZN3WTF6String6formatEPKcz(i3, H_BASE + 8 | 0, (i14 = STACKTOP, STACKTOP = STACKTOP + 24 | 0, HEAP32[i14 >> 2] = H_BASE + 200, HEAP32[i14 + 8 >> 2] = i4, HEAP32[i14 + 16 >> 2] = i5, i14) | 0);
   STACKTOP = i14;
   i5 = __ZN3WTF10fastMallocEj(12) | 0;
   i4 = i5;
   HEAP32[i5 >> 2] = 1;
   HEAP32[i5 + 4 >> 2] = 1;
   __ZNKR3WTF6String12isolatedCopyEv(i5 + 8 | 0, i3);
   i5 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i10 = i5 | 0;
     i17 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
     if ((i17 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i10 >> 2] = i17;
      break;
     }
    }
   } while (0);
   i5 = i1 + 36 | 0;
   i17 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = i4;
   do {
    if ((i17 | 0) != 0) {
     i5 = i17 | 0;
     if (((tempValue = HEAP32[i5 >> 2] | 0, HEAP32[i5 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
      break;
     }
     i5 = HEAP32[i17 + 8 >> 2] | 0;
     do {
      if ((i5 | 0) != 0) {
       i10 = i5 | 0;
       i21 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
       if ((i21 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i5);
        break;
       } else {
        HEAP32[i10 >> 2] = i21;
        break;
       }
      }
     } while (0);
     __ZN3WTF8fastFreeEPv(i17);
    }
   } while (0);
   __ZN7WebCore19DatabaseBackendBase17disableAuthorizerEv(HEAP32[i8 >> 2] | 0);
   i17 = HEAP32[i11 >> 2] | 0;
   HEAP32[i11 >> 2] = 0;
   if ((i17 | 0) != 0) {
    __ZN7WebCore17SQLiteTransactionD1Ev(i17);
    __ZN3WTF8fastFreeEPv(i17);
   }
   __ZN7WebCore19DatabaseBackendBase16enableAuthorizerEv(HEAP32[i8 >> 2] | 0);
   i22 = (HEAP8[i1 + 42 | 0] & 1) == 0 ? 7 : 9;
  }
 } while (0);
 i1 = HEAP32[i12 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i13 = i22;
  STACKTOP = i2;
  return i13 | 0;
 }
 i12 = i1 | 0;
 i8 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
 if ((i8 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  i13 = i22;
  STACKTOP = i2;
  return i13 | 0;
 } else {
  HEAP32[i12 >> 2] = i8;
  i13 = i22;
  STACKTOP = i2;
  return i13 | 0;
 }
 return 0;
}
function __ZN7WebCore21SQLTransactionBackend19postflightAndCommitEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i1 + 32 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i6 >> 2] | 0) + 12 >> 2] & 1](i6, i1) | 0) {
    break;
   }
   i7 = HEAP32[i5 >> 2] | 0;
   i8 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 16 >> 2] & 31](i7) | 0;
   if ((i8 | 0) != 0) {
    i7 = i8 | 0;
    tempValue = HEAP32[i7 >> 2] | 0, HEAP32[i7 >> 2] = tempValue + 1, tempValue;
   }
   i7 = i1 + 36 | 0;
   i9 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = i8;
   if ((i9 | 0) == 0) {
    i10 = i8;
   } else {
    i8 = i9 | 0;
    if (((tempValue = HEAP32[i8 >> 2] | 0, HEAP32[i8 >> 2] = tempValue - 1, tempValue) - 1 | 0) <= 0) {
     i8 = HEAP32[i9 + 8 >> 2] | 0;
     do {
      if ((i8 | 0) != 0) {
       i11 = i8 | 0;
       i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
       if ((i12 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i8);
        break;
       } else {
        HEAP32[i11 >> 2] = i12;
        break;
       }
      }
     } while (0);
     __ZN3WTF8fastFreeEPv(i9);
    }
    i10 = HEAP32[i7 >> 2] | 0;
   }
   do {
    if ((i10 | 0) == 0) {
     __ZN3WTF6StringC1EPKc(i4, H_BASE + 56 | 0);
     i8 = __ZN3WTF10fastMallocEj(12) | 0;
     HEAP32[i8 >> 2] = 1;
     HEAP32[i8 + 4 >> 2] = 0;
     __ZNKR3WTF6String12isolatedCopyEv(i8 + 8 | 0, i4);
     i12 = HEAP32[i7 >> 2] | 0;
     HEAP32[i7 >> 2] = i8;
     do {
      if ((i12 | 0) != 0) {
       i8 = i12 | 0;
       if (((tempValue = HEAP32[i8 >> 2] | 0, HEAP32[i8 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
        break;
       }
       i8 = HEAP32[i12 + 8 >> 2] | 0;
       do {
        if ((i8 | 0) != 0) {
         i11 = i8 | 0;
         i13 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
         if ((i13 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i8);
          break;
         } else {
          HEAP32[i11 >> 2] = i13;
          break;
         }
        }
       } while (0);
       __ZN3WTF8fastFreeEPv(i12);
      }
     } while (0);
     i12 = HEAP32[i4 >> 2] | 0;
     if ((i12 | 0) == 0) {
      break;
     }
     i8 = i12 | 0;
     i13 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
     if ((i13 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i12);
      break;
     } else {
      HEAP32[i8 >> 2] = i13;
      break;
     }
    }
   } while (0);
   i14 = (HEAP8[i1 + 42 | 0] & 1) == 0 ? 7 : 9;
   STACKTOP = i2;
   return i14 | 0;
  }
 } while (0);
 i4 = i1 + 28 | 0;
 __ZN7WebCore19DatabaseBackendBase17disableAuthorizerEv(HEAP32[i4 >> 2] | 0);
 i10 = i1 + 92 | 0;
 __ZN7WebCore17SQLiteTransaction6commitEv(HEAP32[i10 >> 2] | 0);
 __ZN7WebCore19DatabaseBackendBase16enableAuthorizerEv(HEAP32[i4 >> 2] | 0);
 i6 = i1 + 96 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   __ZN7WebCore10OriginLock6unlockEv(i7);
   i9 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = 0;
   if ((i9 | 0) == 0) {
    break;
   }
   i13 = i9 | 0;
   if (((tempValue = HEAP32[i13 >> 2] | 0, HEAP32[i13 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN7WebCore10OriginLockD1Ev(i9);
   __ZN3WTF8fastFreeEPv(i9);
  }
 } while (0);
 if ((HEAP8[(HEAP32[i10 >> 2] | 0) + 4 | 0] & 1) == 0) {
  if (__ZN7WebCore19DatabaseBackendBase10hadDeletesEv(HEAP32[i4 >> 2] | 0) | 0) {
   __ZN7WebCore19DatabaseBackendBase25incrementalVacuumIfNeededEv(HEAP32[i4 >> 2] | 0);
  }
  if ((HEAP8[i1 + 44 | 0] & 1) == 0) {
   i14 = 12;
   STACKTOP = i2;
   return i14 | 0;
  }
  i10 = __ZNK7WebCore15DatabaseBackend17transactionClientEv(HEAP32[i4 >> 2] | 0) | 0;
  __ZN7WebCore20SQLTransactionClient25didCommitWriteTransactionEPNS_19DatabaseBackendBaseE(i10, HEAP32[i4 >> 2] | 0);
  i14 = 12;
  STACKTOP = i2;
  return i14 | 0;
 }
 i10 = HEAP32[i5 >> 2] | 0;
 if ((i10 | 0) != 0) {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i10 >> 2] | 0) + 20 >> 2] & 15](i10, i1);
 }
 i10 = __ZN7WebCore14SQLiteDatabase9lastErrorEv((HEAP32[i4 >> 2] | 0) + 48 | 0) | 0;
 i5 = __ZN7WebCore14SQLiteDatabase12lastErrorMsgEv((HEAP32[i4 >> 2] | 0) + 48 | 0) | 0;
 __ZN3WTF6String6formatEPKcz(i3, H_BASE + 8 | 0, (i4 = STACKTOP, STACKTOP = STACKTOP + 24 | 0, HEAP32[i4 >> 2] = H_BASE + 24, HEAP32[i4 + 8 >> 2] = i10, HEAP32[i4 + 16 >> 2] = i5, i4) | 0);
 STACKTOP = i4;
 i4 = __ZN3WTF10fastMallocEj(12) | 0;
 i5 = i4;
 HEAP32[i4 >> 2] = 1;
 HEAP32[i4 + 4 >> 2] = 1;
 __ZNKR3WTF6String12isolatedCopyEv(i4 + 8 | 0, i3);
 i4 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i3 = i4 | 0;
   i10 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i3 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i4 = i1 + 36 | 0;
 i10 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i5;
 do {
  if ((i10 | 0) != 0) {
   i5 = i10 | 0;
   if (((tempValue = HEAP32[i5 >> 2] | 0, HEAP32[i5 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   i5 = HEAP32[i10 + 8 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i4 = i5 | 0;
     i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
     if ((i3 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i4 >> 2] = i3;
      break;
     }
    }
   } while (0);
   __ZN3WTF8fastFreeEPv(i10);
  }
 } while (0);
 i14 = (HEAP8[i1 + 42 | 0] & 1) == 0 ? 7 : 9;
 STACKTOP = i2;
 return i14 | 0;
}
function __ZN7WebCore21SQLTransactionBackend33nextStateForCurrentStatementErrorEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i1 + 24 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if ((HEAP8[i6 + 29 | 0] & 1) == 0) {
   i7 = i6;
  } else {
   if (__ZNK7WebCore17SQLiteTransaction21wasRolledBackBySqliteEv(HEAP32[i1 + 92 >> 2] | 0) | 0) {
    i7 = HEAP32[i5 >> 2] | 0;
    break;
   } else {
    i8 = 10;
    STACKTOP = i2;
    return i8 | 0;
   }
  }
 } while (0);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i7 >> 2] | 0) + 8 >> 2] & 15](i3, i7);
 i7 = i3 | 0;
 i3 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i5 = i1 + 36 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i3;
 do {
  if ((i6 | 0) != 0) {
   i3 = i6 | 0;
   if (((tempValue = HEAP32[i3 >> 2] | 0, HEAP32[i3 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   i3 = HEAP32[i6 + 8 >> 2] | 0;
   do {
    if ((i3 | 0) != 0) {
     i9 = i3 | 0;
     i10 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
     if ((i10 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i3);
      break;
     } else {
      HEAP32[i9 >> 2] = i10;
      break;
     }
    }
   } while (0);
   __ZN3WTF8fastFreeEPv(i6);
  }
 } while (0);
 i6 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i7 = i6 | 0;
   if (((tempValue = HEAP32[i7 >> 2] | 0, HEAP32[i7 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   i7 = HEAP32[i6 + 8 >> 2] | 0;
   do {
    if ((i7 | 0) != 0) {
     i3 = i7 | 0;
     i10 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
     if ((i10 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i7);
      break;
     } else {
      HEAP32[i3 >> 2] = i10;
      break;
     }
    }
   } while (0);
   __ZN3WTF8fastFreeEPv(i6);
  }
 } while (0);
 do {
  if ((HEAP32[i5 >> 2] | 0) == 0) {
   __ZN3WTF6StringC1EPKc(i4, H_BASE + 112 | 0);
   i6 = __ZN3WTF10fastMallocEj(12) | 0;
   HEAP32[i6 >> 2] = 1;
   HEAP32[i6 + 4 >> 2] = 1;
   __ZNKR3WTF6String12isolatedCopyEv(i6 + 8 | 0, i4);
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = i6;
   do {
    if ((i7 | 0) != 0) {
     i6 = i7 | 0;
     if (((tempValue = HEAP32[i6 >> 2] | 0, HEAP32[i6 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
      break;
     }
     i6 = HEAP32[i7 + 8 >> 2] | 0;
     do {
      if ((i6 | 0) != 0) {
       i10 = i6 | 0;
       i3 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
       if ((i3 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i6);
        break;
       } else {
        HEAP32[i10 >> 2] = i3;
        break;
       }
      }
     } while (0);
     __ZN3WTF8fastFreeEPv(i7);
    }
   } while (0);
   i7 = HEAP32[i4 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   i6 = i7 | 0;
   i3 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i6 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i8 = (HEAP8[i1 + 42 | 0] & 1) == 0 ? 7 : 9;
 STACKTOP = i2;
 return i8 | 0;
}
function __ZN7WebCore21SQLTransactionBackendD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 440;
 HEAP32[i1 + 12 >> 2] = H_BASE + 480;
 i2 = HEAP32[i1 + 96 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   if (((tempValue = HEAP32[i3 >> 2] | 0, HEAP32[i3 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN7WebCore10OriginLockD1Ev(i2);
   __ZN3WTF8fastFreeEPv(i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 92 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore17SQLiteTransactionD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 __ZN3WTF5DequeINS_6RefPtrIN7WebCore19SQLStatementBackendEEELj0EE10destroyAllEv(i1 + 72 | 0);
 i2 = i1 + 80 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i1 + 84 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 __ZN3WTF5MutexD1Ev(i1 + 48 | 0);
 i3 = HEAP32[i1 + 36 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 | 0;
   if (((tempValue = HEAP32[i2 >> 2] | 0, HEAP32[i2 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   i2 = HEAP32[i3 + 8 >> 2] | 0;
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
 } while (0);
 i3 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 + 4 | 0;
   i5 = i2 | 0;
   if (((tempValue = HEAP32[i5 >> 2] | 0, HEAP32[i5 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
    break;
   }
   i5 = i2 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 15](i5);
  }
 } while (0);
 i3 = HEAP32[i1 + 28 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 + 4 | 0;
   i2 = i5 | 0;
   if (((tempValue = HEAP32[i2 >> 2] | 0, HEAP32[i2 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
    break;
   }
   i2 = i5 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 15](i2);
  }
 } while (0);
 i3 = HEAP32[i1 + 24 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 + 4 | 0;
   i5 = i2 | 0;
   if (((tempValue = HEAP32[i5 >> 2] | 0, HEAP32[i5 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
    break;
   }
   i5 = i2 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 15](i5);
  }
 } while (0);
 i3 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = i3 + 4 | 0;
 i3 = i1 | 0;
 if (((tempValue = HEAP32[i3 >> 2] | 0, HEAP32[i3 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
  return;
 }
 i3 = i1 - 4 | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 15](i3);
 return;
}
function __ZN7WebCore21SQLTransactionBackendD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 440;
 HEAP32[i1 + 12 >> 2] = H_BASE + 480;
 i2 = HEAP32[i1 + 96 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   if (((tempValue = HEAP32[i3 >> 2] | 0, HEAP32[i3 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN7WebCore10OriginLockD1Ev(i2);
   __ZN3WTF8fastFreeEPv(i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 92 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore17SQLiteTransactionD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 __ZN3WTF5DequeINS_6RefPtrIN7WebCore19SQLStatementBackendEEELj0EE10destroyAllEv(i1 + 72 | 0);
 i2 = i1 + 80 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i1 + 84 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 __ZN3WTF5MutexD1Ev(i1 + 48 | 0);
 i3 = HEAP32[i1 + 36 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 | 0;
   if (((tempValue = HEAP32[i2 >> 2] | 0, HEAP32[i2 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   i2 = HEAP32[i3 + 8 >> 2] | 0;
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
 } while (0);
 i3 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 + 4 | 0;
   i5 = i2 | 0;
   if (((tempValue = HEAP32[i5 >> 2] | 0, HEAP32[i5 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
    break;
   }
   i5 = i2 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 15](i5);
  }
 } while (0);
 i3 = HEAP32[i1 + 28 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 + 4 | 0;
   i2 = i5 | 0;
   if (((tempValue = HEAP32[i2 >> 2] | 0, HEAP32[i2 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
    break;
   }
   i2 = i5 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 15](i2);
  }
 } while (0);
 i3 = HEAP32[i1 + 24 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 + 4 | 0;
   i5 = i2 | 0;
   if (((tempValue = HEAP32[i5 >> 2] | 0, HEAP32[i5 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
    break;
   }
   i5 = i2 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 15](i5);
  }
 } while (0);
 i3 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = i3 + 4 | 0;
 i3 = i1 | 0;
 if (((tempValue = HEAP32[i3 >> 2] | 0, HEAP32[i3 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
  return;
 }
 i3 = i1 - 4 | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 15](i3);
 return;
}
function __ZN7WebCore21SQLTransactionBackend10executeSQLEN3WTF10PassOwnPtrINS_20AbstractSQLStatementEEERKNS1_6StringERKNS1_6VectorINS_8SQLValueELj0ENS1_15CrashOnOverflowEEEi(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i8 | 0;
 i10 = i2 | 0;
 i2 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i9 >> 2] = i2;
 __ZN7WebCore19SQLStatementBackend6createEN3WTF10PassOwnPtrINS_20AbstractSQLStatementEEERKNS1_6StringERKNS1_6VectorINS_8SQLValueELj0ENS1_15CrashOnOverflowEEEi(i7, i8, i3, i4, i5);
 i5 = i7 | 0;
 i7 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 i5 = HEAP32[i9 >> 2] | 0;
 if ((i5 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 15](i5);
 }
 if ((HEAP8[(__ZN7WebCore8Database4fromEPNS_15DatabaseBackendE(HEAP32[i1 + 28 >> 2] | 0) | 0) + 220 | 0] & 1) != 0) {
  __ZN7WebCore19SQLStatementBackend23setDatabaseDeletedErrorEv(i7);
 }
 i5 = (i7 | 0) == 0;
 if (!i5) {
  i9 = i7 + 4 | 0;
  tempValue = HEAP32[i9 >> 2] | 0, HEAP32[i9 >> 2] = tempValue + 1, tempValue;
 }
 i9 = i1 + 48 | 0;
 i4 = (i9 | 0) == 0;
 if (!i4) {
  __ZN3WTF5Mutex4lockEv(i9);
 }
 i3 = i1 + 72 | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i2 = i1 + 76 | 0;
 i10 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i8 | 0) == 0) {
   i11 = HEAP32[i1 + 84 >> 2] | 0;
   if ((i10 | 0) == 0) {
    if ((i11 | 0) == 0) {
     i12 = 14;
     break;
    } else {
     i13 = 0;
     break;
    }
   } else {
    if ((i10 | 0) == (i11 - 1 | 0)) {
     i12 = 14;
     break;
    } else {
     i13 = i10;
     break;
    }
   }
  } else {
   if ((i10 + 1 | 0) == (i8 | 0)) {
    i12 = 14;
   } else {
    i13 = i10;
   }
  }
 } while (0);
 if ((i12 | 0) == 14) {
  __ZN3WTF5DequeINS_6RefPtrIN7WebCore19SQLStatementBackendEEELj0EE14expandCapacityEv(i3);
  i13 = HEAP32[i2 >> 2] | 0;
 }
 HEAP32[(HEAP32[i1 + 80 >> 2] | 0) + (i13 << 2) >> 2] = i7;
 i13 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = (i13 | 0) == ((HEAP32[i1 + 84 >> 2] | 0) - 1 | 0) ? 0 : i13 + 1 | 0;
 if (!i4) {
  __ZN3WTF5Mutex6unlockEv(i9);
 }
 if (i5) {
  STACKTOP = i6;
  return;
 }
 i5 = i7 + 4 | 0;
 i7 = i5 | 0;
 if (((tempValue = HEAP32[i7 >> 2] | 0, HEAP32[i7 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
  STACKTOP = i6;
  return;
 }
 i7 = i5 - 4 | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 15](i7);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore21SQLTransactionBackend9doCleanupEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 20 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = 0;
 i2 = i3 + 4 | 0;
 i3 = i2 | 0;
 do {
  if (((tempValue = HEAP32[i3 >> 2] | 0, HEAP32[i3 >> 2] = tempValue - 1, tempValue) - 1 | 0) < 1) {
   i4 = i2 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 15](i4);
  }
 } while (0);
 i2 = i1 + 96 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   __ZN7WebCore10OriginLock6unlockEv(i3);
   i4 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   if ((i4 | 0) == 0) {
    break;
   }
   i5 = i4 | 0;
   if (((tempValue = HEAP32[i5 >> 2] | 0, HEAP32[i5 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN7WebCore10OriginLockD1Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  }
 } while (0);
 i2 = i1 + 48 | 0;
 i3 = (i2 | 0) == 0;
 if (!i3) {
  __ZN3WTF5Mutex4lockEv(i2);
 }
 i4 = i1 + 72 | 0;
 __ZN3WTF5DequeINS_6RefPtrIN7WebCore19SQLStatementBackendEEELj0EE10destroyAllEv(i4);
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 76 >> 2] = 0;
 i4 = i1 + 80 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 84 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i5);
 }
 i5 = i1 + 92 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i5 >> 2] = 0;
  __ZN7WebCore17SQLiteTransactionD1Ev(i4);
  __ZN3WTF8fastFreeEPv(i4);
 }
 if ((HEAP8[i1 + 45 | 0] & 1) != 0) {
  __ZN7WebCore25SQLTransactionCoordinator11releaseLockEPNS_21SQLTransactionBackendE(__ZNK7WebCore15DatabaseBackend22transactionCoordinatorEv(HEAP32[i1 + 28 >> 2] | 0) | 0, i1);
 }
 i4 = i1 + 32 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 do {
  if ((i1 | 0) != 0) {
   i4 = i1 + 4 | 0;
   i5 = i4 | 0;
   if (((tempValue = HEAP32[i5 >> 2] | 0, HEAP32[i5 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
    break;
   }
   i5 = i4 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 15](i5);
  }
 } while (0);
 if (i3) {
  return;
 }
 __ZN3WTF5Mutex6unlockEv(i2);
 return;
}
function __ZN3WTF5DequeINS_6RefPtrIN7WebCore19SQLStatementBackendEEELj0EE10destroyAllEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = i1 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 i5 = i1 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = i6 + (i4 << 2) | 0;
 if (i3 >>> 0 <= i4 >>> 0) {
  if ((i3 | 0) == (i4 | 0)) {
   return;
  }
  i8 = i6 + (i3 << 2) | 0;
  while (1) {
   i9 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i10 = i9 + 4 | 0;
     i11 = i10 | 0;
     if (((tempValue = HEAP32[i11 >> 2] | 0, HEAP32[i11 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
      break;
     }
     i11 = i10 - 4 | 0;
     if ((i11 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 15](i11);
    }
   } while (0);
   i8 = i8 + 4 | 0;
   if ((i8 | 0) == (i7 | 0)) {
    break;
   }
  }
  return;
 }
 if ((i4 | 0) == 0) {
  i12 = i6;
  i13 = i3;
 } else {
  i3 = i6;
  while (1) {
   i6 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i6 | 0) != 0) {
     i4 = i6 + 4 | 0;
     i8 = i4 | 0;
     if (((tempValue = HEAP32[i8 >> 2] | 0, HEAP32[i8 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
      break;
     }
     i8 = i4 - 4 | 0;
     if ((i8 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 15](i8);
    }
   } while (0);
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i7 | 0)) {
    break;
   }
  }
  i12 = HEAP32[i5 >> 2] | 0;
  i13 = HEAP32[i2 >> 2] | 0;
 }
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 i1 = i12 + (i2 << 2) | 0;
 if ((i13 | 0) == (i2 | 0)) {
  return;
 }
 i2 = i12 + (i13 << 2) | 0;
 while (1) {
  i13 = HEAP32[i2 >> 2] | 0;
  do {
   if ((i13 | 0) != 0) {
    i12 = i13 + 4 | 0;
    i5 = i12 | 0;
    if (((tempValue = HEAP32[i5 >> 2] | 0, HEAP32[i5 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
     break;
    }
    i5 = i12 - 4 | 0;
    if ((i5 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 15](i5);
   }
  } while (0);
  i2 = i2 + 4 | 0;
  if ((i2 | 0) == (i1 | 0)) {
   break;
  }
 }
 return;
}
function __ZN7WebCore21SQLTransactionBackend16getNextStatementEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = i1 + 24 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 + 4 | 0;
   i5 = i4 | 0;
   if (((tempValue = HEAP32[i5 >> 2] | 0, HEAP32[i5 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
    break;
   }
   i5 = i4 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 15](i5);
  }
 } while (0);
 i3 = i1 + 48 | 0;
 i5 = (i3 | 0) == 0;
 if (!i5) {
  __ZN3WTF5Mutex4lockEv(i3);
 }
 i4 = i1 + 72 | 0;
 i6 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i6 | 0) != (HEAP32[i1 + 76 >> 2] | 0)) {
   i7 = i1 + 80 | 0;
   i8 = (HEAP32[i7 >> 2] | 0) + (i6 << 2) | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = 0;
   i8 = HEAP32[(HEAP32[i7 >> 2] | 0) + (HEAP32[i4 >> 2] << 2) >> 2] | 0;
   do {
    if ((i8 | 0) != 0) {
     i7 = i8 + 4 | 0;
     i10 = i7 | 0;
     if (((tempValue = HEAP32[i10 >> 2] | 0, HEAP32[i10 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
      break;
     }
     i10 = i7 - 4 | 0;
     if ((i10 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 15](i10);
    }
   } while (0);
   i8 = HEAP32[i4 >> 2] | 0;
   HEAP32[i4 >> 2] = (i8 | 0) == ((HEAP32[i1 + 84 >> 2] | 0) - 1 | 0) ? 0 : i8 + 1 | 0;
   i8 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = i9;
   if ((i8 | 0) == 0) {
    break;
   }
   i10 = i8 + 4 | 0;
   i8 = i10 | 0;
   if (((tempValue = HEAP32[i8 >> 2] | 0, HEAP32[i8 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
    break;
   }
   i8 = i10 - 4 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 15](i8);
  }
 } while (0);
 if (i5) {
  return;
 }
 __ZN3WTF5Mutex6unlockEv(i3);
 return;
}
function __ZN7WebCore21SQLTransactionBackend6createEPNS_15DatabaseBackendEN3WTF10PassRefPtrINS_22AbstractSQLTransactionEEENS4_INS_21SQLTransactionWrapperEEEb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i6 = __ZN3WTF10fastMallocEj(100) | 0;
 i7 = i3 | 0;
 i3 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i7 = i4 | 0;
 i4 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i6 + 4 >> 2] = 1;
 i7 = i6 + 8 | 0;
 HEAP32[i7 >> 2] = 1;
 i8 = i6 + 12 | 0;
 HEAP32[i6 + 16 >> 2] = 1;
 HEAP32[i6 >> 2] = H_BASE + 440;
 HEAP32[i8 >> 2] = H_BASE + 480;
 i9 = i6 + 20 | 0;
 HEAP32[i9 >> 2] = i3;
 HEAP32[i6 + 24 >> 2] = 0;
 HEAP32[i6 + 28 >> 2] = i2;
 if ((i2 | 0) == 0) {
  i10 = i3;
 } else {
  i3 = i2 + 4 | 0;
  tempValue = HEAP32[i3 >> 2] | 0, HEAP32[i3 >> 2] = tempValue + 1, tempValue;
  i10 = HEAP32[i9 >> 2] | 0;
 }
 HEAP32[i6 + 32 >> 2] = i4;
 HEAP32[i6 + 36 >> 2] = 0;
 HEAP8[i6 + 40 | 0] = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 12 >> 2] & 31](i10) | 0) & 1;
 i10 = HEAP32[i9 >> 2] | 0;
 HEAP8[i6 + 41 | 0] = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 16 >> 2] & 31](i10) | 0) & 1;
 i10 = HEAP32[i9 >> 2] | 0;
 HEAP8[i6 + 42 | 0] = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 20 >> 2] & 31](i10) | 0) & 1;
 HEAP8[i6 + 43 | 0] = 0;
 HEAP8[i6 + 44 | 0] = 0;
 HEAP8[i6 + 45 | 0] = 0;
 HEAP8[i6 + 46 | 0] = i5 & 1;
 HEAP8[i6 + 47 | 0] = 0;
 __ZN3WTF5MutexC1Ev(i6 + 48 | 0);
 _memset(i6 + 72 | 0, 0, 28) | 0;
 i5 = HEAP32[i9 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 24 >> 2] & 15](i5, i8);
 HEAP32[i7 >> 2] = 2;
 HEAP32[i1 >> 2] = i6;
 return;
}
function __ZN7WebCore21SQLTransactionBackendC2EPNS_15DatabaseBackendEN3WTF10PassRefPtrINS_22AbstractSQLTransactionEEENS4_INS_21SQLTransactionWrapperEEEb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 HEAP32[i1 + 4 >> 2] = 1;
 i6 = i1 + 8 | 0;
 HEAP32[i6 >> 2] = 1;
 i7 = i1 + 12 | 0;
 HEAP32[i1 + 16 >> 2] = 1;
 HEAP32[i1 >> 2] = H_BASE + 440;
 HEAP32[i7 >> 2] = H_BASE + 480;
 i8 = i1 + 20 | 0;
 i9 = i3 | 0;
 i3 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 HEAP32[i8 >> 2] = i3;
 HEAP32[i1 + 24 >> 2] = 0;
 HEAP32[i1 + 28 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i3 = i2 + 4 | 0;
  tempValue = HEAP32[i3 >> 2] | 0, HEAP32[i3 >> 2] = tempValue + 1, tempValue;
 }
 i3 = i4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i1 + 32 >> 2] = i4;
 HEAP32[i1 + 36 >> 2] = 0;
 i4 = HEAP32[i8 >> 2] | 0;
 HEAP8[i1 + 40 | 0] = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 31](i4) | 0) & 1;
 i4 = HEAP32[i8 >> 2] | 0;
 HEAP8[i1 + 41 | 0] = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 16 >> 2] & 31](i4) | 0) & 1;
 i4 = HEAP32[i8 >> 2] | 0;
 HEAP8[i1 + 42 | 0] = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 20 >> 2] & 31](i4) | 0) & 1;
 HEAP8[i1 + 43 | 0] = 0;
 HEAP8[i1 + 44 | 0] = 0;
 HEAP8[i1 + 45 | 0] = 0;
 HEAP8[i1 + 46 | 0] = i5 & 1;
 HEAP8[i1 + 47 | 0] = 0;
 __ZN3WTF5MutexC1Ev(i1 + 48 | 0);
 _memset(i1 + 72 | 0, 0, 28) | 0;
 i1 = HEAP32[i8 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 24 >> 2] & 15](i1, i7);
 HEAP32[i6 >> 2] = 2;
 return;
}
function __ZN7WebCore21SQLTransactionBackendC1EPNS_15DatabaseBackendEN3WTF10PassRefPtrINS_22AbstractSQLTransactionEEENS4_INS_21SQLTransactionWrapperEEEb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 HEAP32[i1 + 4 >> 2] = 1;
 i6 = i1 + 8 | 0;
 HEAP32[i6 >> 2] = 1;
 i7 = i1 + 12 | 0;
 HEAP32[i1 + 16 >> 2] = 1;
 HEAP32[i1 >> 2] = H_BASE + 440;
 HEAP32[i7 >> 2] = H_BASE + 480;
 i8 = i1 + 20 | 0;
 i9 = i3 | 0;
 i3 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 HEAP32[i8 >> 2] = i3;
 HEAP32[i1 + 24 >> 2] = 0;
 HEAP32[i1 + 28 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i3 = i2 + 4 | 0;
  tempValue = HEAP32[i3 >> 2] | 0, HEAP32[i3 >> 2] = tempValue + 1, tempValue;
 }
 i3 = i4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i1 + 32 >> 2] = i4;
 HEAP32[i1 + 36 >> 2] = 0;
 i4 = HEAP32[i8 >> 2] | 0;
 HEAP8[i1 + 40 | 0] = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 31](i4) | 0) & 1;
 i4 = HEAP32[i8 >> 2] | 0;
 HEAP8[i1 + 41 | 0] = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 16 >> 2] & 31](i4) | 0) & 1;
 i4 = HEAP32[i8 >> 2] | 0;
 HEAP8[i1 + 42 | 0] = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 20 >> 2] & 31](i4) | 0) & 1;
 HEAP8[i1 + 43 | 0] = 0;
 HEAP8[i1 + 44 | 0] = 0;
 HEAP8[i1 + 45 | 0] = 0;
 HEAP8[i1 + 46 | 0] = i5 & 1;
 HEAP8[i1 + 47 | 0] = 0;
 __ZN3WTF5MutexC1Ev(i1 + 48 | 0);
 _memset(i1 + 72 | 0, 0, 28) | 0;
 i1 = HEAP32[i8 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 24 >> 2] & 15](i1, i7);
 HEAP32[i6 >> 2] = 2;
 return;
}
function __ZN7WebCore21SQLTransactionBackend17acquireOriginLockEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = __ZN7WebCore15DatabaseTracker7trackerEv() | 0;
 i5 = HEAP32[i1 + 28 >> 2] | 0;
 __ZN7WebCore15DatabaseTracker13originLockForEPNS_14SecurityOriginE(i3, i4, FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 12 >> 2] & 31](i5 | 0) | 0);
 i5 = i3 | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 i4 = i1 + 96 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i3;
 do {
  if ((i1 | 0) != 0) {
   i3 = i1 | 0;
   if (((tempValue = HEAP32[i3 >> 2] | 0, HEAP32[i3 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN7WebCore10OriginLockD1Ev(i1);
   __ZN3WTF8fastFreeEPv(i1);
  }
 } while (0);
 i1 = HEAP32[i5 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i6 = HEAP32[i4 >> 2] | 0;
  __ZN7WebCore10OriginLock4lockEv(i6);
  STACKTOP = i2;
  return;
 }
 i5 = i1 | 0;
 if (((tempValue = HEAP32[i5 >> 2] | 0, HEAP32[i5 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  i6 = HEAP32[i4 >> 2] | 0;
  __ZN7WebCore10OriginLock4lockEv(i6);
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore10OriginLockD1Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 i6 = HEAP32[i4 >> 2] | 0;
 __ZN7WebCore10OriginLock4lockEv(i6);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore21SQLTransactionBackend23enqueueStatementBackendEN3WTF10PassRefPtrINS_19SQLStatementBackendEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = i1 + 48 | 0;
 i4 = (i3 | 0) == 0;
 if (!i4) {
  __ZN3WTF5Mutex4lockEv(i3);
 }
 i5 = i1 + 72 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = i1 + 76 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i6 | 0) == 0) {
   i9 = HEAP32[i1 + 84 >> 2] | 0;
   if ((i8 | 0) == 0) {
    if ((i9 | 0) == 0) {
     i10 = 8;
     break;
    } else {
     i11 = 0;
     break;
    }
   } else {
    if ((i8 | 0) == (i9 - 1 | 0)) {
     i10 = 8;
     break;
    } else {
     i11 = i8;
     break;
    }
   }
  } else {
   if ((i8 + 1 | 0) == (i6 | 0)) {
    i10 = 8;
   } else {
    i11 = i8;
   }
  }
 } while (0);
 if ((i10 | 0) == 8) {
  __ZN3WTF5DequeINS_6RefPtrIN7WebCore19SQLStatementBackendEEELj0EE14expandCapacityEv(i5);
  i11 = HEAP32[i7 >> 2] | 0;
 }
 i5 = (HEAP32[i1 + 80 >> 2] | 0) + (i11 << 2) | 0;
 i11 = i2 | 0;
 i2 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i5 >> 2] = i2;
 i2 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = (i2 | 0) == ((HEAP32[i1 + 84 >> 2] | 0) - 1 | 0) ? 0 : i2 + 1 | 0;
 if (i4) {
  return;
 }
 __ZN3WTF5Mutex6unlockEv(i3);
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 328 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 336 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 344 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 352 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 360 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 368 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 376 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 384 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 392 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 400 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 408 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 416 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 424 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 440 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 444 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 448 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 452 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 456 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 460 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 464 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 468 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 480 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 484 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 488 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 492 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 496 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 500 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 504 >> 2] = F_BASE_viiiii + 6;
}
function __ZN7WebCore21SQLTransactionBackend13runStatementsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = i1 + 43 | 0;
 i3 = i1 + 24 | 0;
 i4 = i1 + 92 | 0;
 i5 = i1 + 28 | 0;
 while (1) {
  do {
   if ((HEAP8[i2] & 1) == 0) {
    i6 = 5;
   } else {
    if (__ZNK7WebCore17SQLiteTransaction21wasRolledBackBySqliteEv(HEAP32[i4 >> 2] | 0) | 0) {
     i6 = 5;
     break;
    }
    HEAP8[i2] = 0;
    i7 = HEAP32[i5 >> 2] | 0;
    i8 = __ZNK7WebCore19DatabaseBackendBase11maximumSizeEv(i7 | 0) | 0;
    __ZN7WebCore14SQLiteDatabase14setMaximumSizeEx(i7 + 48 | 0, i8, tempRet0);
   }
  } while (0);
  if ((i6 | 0) == 5) {
   i6 = 0;
   i8 = HEAP32[i3 >> 2] | 0;
   if ((i8 | 0) != 0) {
    if (__ZNK7WebCore19SQLStatementBackend29lastExecutionFailedDueToQuotaEv(i8) | 0) {
     break;
    }
   }
   __ZN7WebCore21SQLTransactionBackend16getNextStatementEv(i1);
  }
  i8 = __ZN7WebCore21SQLTransactionBackend34runCurrentStatementAndGetNextStateEv(i1) | 0;
  if ((i8 | 0) != 4) {
   i9 = i8;
   i6 = 11;
   break;
  }
 }
 if ((i6 | 0) == 11) {
  return i9 | 0;
 }
 i9 = __ZN7WebCore21SQLTransactionBackend33nextStateForCurrentStatementErrorEv(i1) | 0;
 return i9 | 0;
}
function __ZN3WTF5DequeINS_6RefPtrIN7WebCore19SQLStatementBackendEEELj0EE14expandCapacityEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 8 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i3 + 1 + (i3 >>> 2) | 0;
 i7 = i6 >>> 0 > 16 >>> 0 ? i6 : 16;
 if (i7 >>> 0 > 1073741823 >>> 0) {
  _WTFCrash();
 }
 i6 = __ZN3WTF18fastMallocGoodSizeEj(i7 << 2) | 0;
 HEAP32[i2 >> 2] = i6 >>> 2;
 i7 = __ZN3WTF10fastMallocEj(i6) | 0;
 i6 = i7;
 HEAP32[i4 >> 2] = i6;
 i8 = i1 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = HEAP32[i1 + 4 >> 2] | 0;
 if (i9 >>> 0 > i10 >>> 0) {
  _memcpy(i7 | 0, i5 | 0, i10 << 2) | 0;
  i7 = HEAP32[i8 >> 2] | 0;
  i1 = i7 - i3 + (HEAP32[i2 >> 2] | 0) | 0;
  _memcpy((HEAP32[i4 >> 2] | 0) + (i1 << 2) | 0, i5 + (i7 << 2) | 0, i3 - i7 << 2) | 0;
  HEAP32[i8 >> 2] = i1;
 } else {
  _memcpy(i6 + (i9 << 2) | 0, i5 + (i9 << 2) | 0, i10 - i9 << 2) | 0;
 }
 if ((i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i2 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i5);
 return;
}
function __ZN7WebCore21SQLTransactionBackend36cleanupAfterTransactionErrorCallbackEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 28 | 0;
 __ZN7WebCore19DatabaseBackendBase17disableAuthorizerEv(HEAP32[i2 >> 2] | 0);
 i3 = i1 + 92 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   __ZN7WebCore17SQLiteTransaction8rollbackEv(i4);
   i5 = HEAP32[i3 >> 2] | 0;
   HEAP32[i3 >> 2] = 0;
   if ((i5 | 0) == 0) {
    break;
   }
   __ZN7WebCore17SQLiteTransactionD1Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  }
 } while (0);
 __ZN7WebCore19DatabaseBackendBase16enableAuthorizerEv(HEAP32[i2 >> 2] | 0);
 i2 = i1 + 96 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return 6;
 }
 __ZN7WebCore10OriginLock6unlockEv(i1);
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return 6;
 }
 i2 = i1 | 0;
 if (((tempValue = HEAP32[i2 >> 2] | 0, HEAP32[i2 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  return 6;
 }
 __ZN7WebCore10OriginLockD1Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return 6;
}
function __ZN7WebCore21SQLTransactionBackend34runCurrentStatementAndGetNextStateEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 + 24 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  i3 = 5;
  return i3 | 0;
 }
 i4 = i1 + 28 | 0;
 __ZN7WebCore19DatabaseBackendBase15resetAuthorizerEv(HEAP32[i4 >> 2] | 0);
 if ((HEAP8[i1 + 47 | 0] & 1) != 0) {
  __ZN7WebCore19SQLStatementBackend25setVersionMismatchedErrorEv(HEAP32[i2 >> 2] | 0);
 }
 if (__ZN7WebCore19SQLStatementBackend7executeEPNS_15DatabaseBackendE(HEAP32[i2 >> 2] | 0, HEAP32[i4 >> 2] | 0) | 0) {
  if (__ZN7WebCore19DatabaseBackendBase25lastActionChangedDatabaseEv(HEAP32[i4 >> 2] | 0) | 0) {
   HEAP8[i1 + 44 | 0] = 1;
  }
  i3 = (HEAP8[(HEAP32[i2 >> 2] | 0) + 28 | 0] & 1) != 0 ? 10 : 4;
  return i3 | 0;
 } else {
  if (__ZNK7WebCore19SQLStatementBackend29lastExecutionFailedDueToQuotaEv(HEAP32[i2 >> 2] | 0) | 0) {
   i3 = 11;
   return i3 | 0;
  }
  i3 = __ZN7WebCore21SQLTransactionBackend33nextStateForCurrentStatementErrorEv(i1) | 0;
  return i3 | 0;
 }
 return 0;
}
function __ZN7WebCore21SQLTransactionBackend34computeNextStateAndCleanupIfNeededEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 28 >> 2] | 0;
 do {
  if ((HEAP8[i2 + 44 | 0] & 1) != 0) {
   if (__ZN7WebCore19DatabaseBackendBase13isInterruptedEv(i2 | 0) | 0) {
    break;
   }
   i3 = i1 + 8 | 0;
   HEAP32[i1 + 4 >> 2] = HEAP32[i3 >> 2];
   HEAP32[i3 >> 2] = 1;
   return;
  }
 } while (0);
 i2 = i1 + 4 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = 0;
 i2 = i1 + 92 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   __ZN7WebCore17SQLiteTransaction4stopEv(i3);
   i4 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   if ((i4 | 0) == 0) {
    break;
   }
   __ZN7WebCore17SQLiteTransactionD1Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  }
 } while (0);
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 15](i2, 0);
 __ZN7WebCore21SQLTransactionBackend9doCleanupEv(i1);
 return;
}
function __ZN7WebCore21SQLTransactionBackend15performNextStepEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 __ZN7WebCore21SQLTransactionBackend34computeNextStateAndCleanupIfNeededEv(i1);
 i4 = i1 | 0;
 i5 = i1 + 4 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if (i6 >>> 0 <= 1 >>> 0) {
  STACKTOP = i2;
  return;
 }
 i7 = i1;
 i8 = i3 | 0;
 i9 = i3 + 4 | 0;
 i10 = i1;
 i1 = i6;
 while (1) {
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i7 >> 2] | 0) + 8 >> 2] & 3](i3, i4, i1);
  i6 = HEAP32[i8 >> 2] | 0;
  i11 = i10 + (HEAP32[i9 >> 2] | 0) | 0;
  if ((i6 & 1 | 0) == 0) {
   i12 = i6;
  } else {
   i12 = HEAP32[(HEAP32[i11 >> 2] | 0) + (i6 - 1) >> 2] | 0;
  }
  i1 = FUNCTION_TABLE_ii[i12 & 31](i11) | 0;
  HEAP32[i5 >> 2] = i1;
  if (i1 >>> 0 <= 1 >>> 0) {
   break;
  }
 }
 STACKTOP = i2;
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
function __ZN7WebCore21SQLTransactionBackend25releaseOriginLockIfNeededEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 96 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 __ZN7WebCore10OriginLock6unlockEv(i1);
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i2 = i1 | 0;
 if (((tempValue = HEAP32[i2 >> 2] | 0, HEAP32[i2 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  return;
 }
 __ZN7WebCore10OriginLockD1Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZThn12_N7WebCore21SQLTransactionBackend10executeSQLEN3WTF10PassOwnPtrINS_20AbstractSQLStatementEEERKNS1_6StringERKNS1_6VectorINS_8SQLValueELj0ENS1_15CrashOnOverflowEEEi(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZN7WebCore21SQLTransactionBackend10executeSQLEN3WTF10PassOwnPtrINS_20AbstractSQLStatementEEERKNS1_6StringERKNS1_6VectorINS_8SQLValueELj0ENS1_15CrashOnOverflowEEEi(i1 - 100 + 88 | 0, i2, i3, i4, i5);
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
function __ZThn12_N7WebCore21SQLTransactionBackend21requestTransitToStateENS_19SQLTransactionStateE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 - 100 + 88 | 0;
 HEAP32[i3 + 8 >> 2] = i2;
 __ZN7WebCore15DatabaseBackend23scheduleTransactionStepEPNS_21SQLTransactionBackendE(HEAP32[i3 + 28 >> 2] | 0, i3);
 return;
}
function __ZThn12_N7WebCore21SQLTransactionBackend16transactionErrorEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i2 - 100 + 124 >> 2] | 0;
 HEAP32[i1 >> 2] = i3;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = i3 | 0;
 tempValue = HEAP32[i1 >> 2] | 0, HEAP32[i1 >> 2] = tempValue + 1, tempValue;
 return;
}
function __ZN7WebCore21SQLTransactionBackend16transactionErrorEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i2 + 36 >> 2] | 0;
 HEAP32[i1 >> 2] = i3;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = i3 | 0;
 tempValue = HEAP32[i1 >> 2] | 0, HEAP32[i1 >> 2] = tempValue + 1, tempValue;
 return;
}
function __ZN7WebCore21SQLTransactionBackend21requestTransitToStateENS_19SQLTransactionStateE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 + 8 >> 2] = i2;
 __ZN7WebCore15DatabaseBackend23scheduleTransactionStepEPNS_21SQLTransactionBackendE(HEAP32[i1 + 28 >> 2] | 0, i1);
 return;
}
function __ZN7WebCore21SQLTransactionBackend16stateFunctionForENS_19SQLTransactionStateE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i2 = H_BASE + 328 + (i3 << 3) | 0;
 i3 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i1 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i1 + 4 >> 2] = i3;
 return;
}
function __ZN7WebCore21SQLTransactionBackend11acquireLockEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore25SQLTransactionCoordinator11acquireLockEPNS_21SQLTransactionBackendE(__ZNK7WebCore15DatabaseBackend22transactionCoordinatorEv(HEAP32[i1 + 28 >> 2] | 0) | 0, i1);
 return 1;
}
function __ZN7WebCore21SQLTransactionBackend19cleanupAndTerminateEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore21SQLTransactionBackend9doCleanupEv(i1);
 __ZN7WebCore15DatabaseBackend30inProgressTransactionCompletedEv(HEAP32[i1 + 28 >> 2] | 0);
 return 0;
}
function __ZN7WebCore21SQLTransactionBackend19sendToFrontendStateEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 15](i2, HEAP32[i1 + 4 >> 2] | 0);
 return 1;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function dynCall_viiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 FUNCTION_TABLE_viiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
}
function __ZThn12_N7WebCore21SQLTransactionBackendD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 100 + 88 | 0;
 __ZN7WebCore21SQLTransactionBackendD2Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore21SQLTransactionBackend12lockAcquiredEv(i1) {
 i1 = i1 | 0;
 HEAP8[i1 + 45 | 0] = 1;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 15](i1, 3);
 return;
}
function __ZThn12_N7WebCore21SQLTransactionBackend16currentStatementEv(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore19SQLStatementBackend8frontendEv(HEAP32[i1 - 100 + 112 >> 2] | 0) | 0;
}
function __ZThn12_N7WebCore21SQLTransactionBackend30setShouldRetryCurrentStatementEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP8[i1 - 100 + 131 | 0] = i2 & 1;
 return;
}
function __ZN7WebCore21SQLTransactionBackend16currentStatementEv(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore19SQLStatementBackend8frontendEv(HEAP32[i1 + 24 >> 2] | 0) | 0;
}
function __ZN7WebCore21SQLTransactionBackend34notifyDatabaseThreadIsShuttingDownEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore21SQLTransactionBackend9doCleanupEv(i1);
 return;
}
function __ZN7WebCore21SQLTransactionBackend30setShouldRetryCurrentStatementEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP8[i1 + 43 | 0] = i2 & 1;
 return;
}
function __ZN7WebCore21SQLTransactionBackendD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore21SQLTransactionBackendD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 3](i2 | 0, i3 | 0, i4 | 0);
}
function __ZN7WebCore21SQLTransactionBackend28nextStateForTransactionErrorEv(i1) {
 i1 = i1 | 0;
 return ((HEAP8[i1 + 42 | 0] & 1) == 0 ? 7 : 9) | 0;
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function __ZThn12_N7WebCore21SQLTransactionBackendD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore21SQLTransactionBackendD2Ev(i1 - 100 + 88 | 0);
 return;
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
 FUNCTION_TABLE_vii[i1 & 15](i2 | 0, i3 | 0);
}
function b0(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(0);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 31](i2 | 0) | 0;
}
function __ZN7WebCore21SQLTransactionBackend16unreachableStateEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 15](i2 | 0);
}
function b4(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(4);
}
function b6(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(6);
 return 0;
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
function b5() {
 abort(5);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_viiiii = [b0,b0,__ZN7WebCore21SQLTransactionBackend10executeSQLEN3WTF10PassOwnPtrINS_20AbstractSQLStatementEEERKNS1_6StringERKNS1_6VectorINS_8SQLValueELj0ENS1_15CrashOnOverflowEEEi,b0,__ZN7WebCore21SQLTransactionBackendC2EPNS_15DatabaseBackendEN3WTF10PassRefPtrINS_22AbstractSQLTransactionEEENS4_INS_21SQLTransactionWrapperEEEb,b0,__ZThn12_N7WebCore21SQLTransactionBackend10executeSQLEN3WTF10PassOwnPtrINS_20AbstractSQLStatementEEERKNS1_6StringERKNS1_6VectorINS_8SQLValueELj0ENS1_15CrashOnOverflowEEEi,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore21SQLTransactionBackendD2Ev,b1,__ZThn12_N7WebCore21SQLTransactionBackendD1Ev,b1,__ZThn12_N7WebCore21SQLTransactionBackendD0Ev,b1,__ZN7WebCore21SQLTransactionBackendD0Ev,b1,b1,b1,b1,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,__ZN7WebCore21SQLTransactionBackend21requestTransitToStateENS_19SQLTransactionStateE,b2,__ZThn12_N7WebCore21SQLTransactionBackend16transactionErrorEv,b2,__ZThn12_N7WebCore21SQLTransactionBackend30setShouldRetryCurrentStatementEb,b2,__ZN7WebCore21SQLTransactionBackend30setShouldRetryCurrentStatementEb,b2,__ZN7WebCore21SQLTransactionBackend16transactionErrorEv,b2,__ZThn12_N7WebCore21SQLTransactionBackend21requestTransitToStateENS_19SQLTransactionStateE,b2,b2,b2];
  var FUNCTION_TABLE_ii = [b3,b3,__ZN7WebCore21SQLTransactionBackend16unreachableStateEv,b3,__ZN7WebCore21SQLTransactionBackend27openTransactionAndPreflightEv,b3,__ZN7WebCore21SQLTransactionBackend19postflightAndCommitEv,b3,__ZN7WebCore21SQLTransactionBackend11acquireLockEv,b3,__ZN7WebCore21SQLTransactionBackend36cleanupAfterTransactionErrorCallbackEv,b3,__ZN7WebCore21SQLTransactionBackend16currentStatementEv,b3,__ZN7WebCore21SQLTransactionBackend19sendToFrontendStateEv,b3,__ZN7WebCore21SQLTransactionBackend13runStatementsEv,b3,__ZN7WebCore21SQLTransactionBackend19cleanupAndTerminateEv,b3,__ZThn12_N7WebCore21SQLTransactionBackend16currentStatementEv,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3];
  var FUNCTION_TABLE_viii = [b4,b4,__ZN7WebCore21SQLTransactionBackend16stateFunctionForENS_19SQLTransactionStateE,b4];
  var FUNCTION_TABLE_v = [b5,b5];
  var FUNCTION_TABLE_iii = [b6,b6];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore21SQLTransactionBackend21requestTransitToStateENS_19SQLTransactionStateE","_strlen","__ZN7WebCore21SQLTransactionBackend34notifyDatabaseThreadIsShuttingDownEv","__ZN7WebCore21SQLTransactionBackend16unreachableStateEv","__ZN7WebCore21SQLTransactionBackend23enqueueStatementBackendEN3WTF10PassRefPtrINS_19SQLStatementBackendEEE","__ZThn12_N7WebCore21SQLTransactionBackend16transactionErrorEv","__ZN7WebCore21SQLTransactionBackendD2Ev","__ZThn12_N7WebCore21SQLTransactionBackendD1Ev","__ZThn12_N7WebCore21SQLTransactionBackend30setShouldRetryCurrentStatementEb","__ZN7WebCore21SQLTransactionBackend27openTransactionAndPreflightEv","__ZN7WebCore21SQLTransactionBackend9doCleanupEv","__ZN7WebCore21SQLTransactionBackend19postflightAndCommitEv","__ZN7WebCore21SQLTransactionBackend11acquireLockEv","__ZN7WebCore21SQLTransactionBackend36cleanupAfterTransactionErrorCallbackEv","__ZN7WebCore21SQLTransactionBackend30setShouldRetryCurrentStatementEb","__ZN7WebCore21SQLTransactionBackend15performNextStepEv","_memset","__ZN7WebCore21SQLTransactionBackend10executeSQLEN3WTF10PassOwnPtrINS_20AbstractSQLStatementEEERKNS1_6StringERKNS1_6VectorINS_8SQLValueELj0ENS1_15CrashOnOverflowEEEi","__ZN7WebCore21SQLTransactionBackend16getNextStatementEv","_memcpy","__ZN7WebCore21SQLTransactionBackend33nextStateForCurrentStatementErrorEv","__ZN7WebCore21SQLTransactionBackend16currentStatementEv","__ZThn12_N7WebCore21SQLTransactionBackendD0Ev","__ZN7WebCore21SQLTransactionBackend34runCurrentStatementAndGetNextStateEv","__ZN7WebCore21SQLTransactionBackend19sendToFrontendStateEv","__ZN3WTF5DequeINS_6RefPtrIN7WebCore19SQLStatementBackendEEELj0EE10destroyAllEv","__ZN7WebCore21SQLTransactionBackend13runStatementsEv","__ZN7WebCore21SQLTransactionBackend28nextStateForTransactionErrorEv","__ZN7WebCore21SQLTransactionBackend6createEPNS_15DatabaseBackendEN3WTF10PassRefPtrINS_22AbstractSQLTransactionEEENS4_INS_21SQLTransactionWrapperEEEb","__ZN7WebCore21SQLTransactionBackend16transactionErrorEv","__ZN7WebCore21SQLTransactionBackend34computeNextStateAndCleanupIfNeededEv","__ZN3WTF5DequeINS_6RefPtrIN7WebCore19SQLStatementBackendEEELj0EE14expandCapacityEv","__ZThn12_N7WebCore21SQLTransactionBackend21requestTransitToStateENS_19SQLTransactionStateE","__ZN7WebCore21SQLTransactionBackend25releaseOriginLockIfNeededEv","__ZN7WebCore21SQLTransactionBackend19cleanupAndTerminateEv","__ZN7WebCore21SQLTransactionBackend17acquireOriginLockEv","__ZN7WebCore21SQLTransactionBackend16stateFunctionForENS_19SQLTransactionStateE","__ZN7WebCore21SQLTransactionBackendC2EPNS_15DatabaseBackendEN3WTF10PassRefPtrINS_22AbstractSQLTransactionEEENS4_INS_21SQLTransactionWrapperEEEb","__ZThn12_N7WebCore21SQLTransactionBackend16currentStatementEv","__ZThn12_N7WebCore21SQLTransactionBackend10executeSQLEN3WTF10PassOwnPtrINS_20AbstractSQLStatementEEERKNS1_6StringERKNS1_6VectorINS_8SQLValueELj0ENS1_15CrashOnOverflowEEEi","__ZN7WebCore21SQLTransactionBackend12lockAcquiredEv","__ZN7WebCore21SQLTransactionBackendD0Ev"]

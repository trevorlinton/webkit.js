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
H_BASE = parentModule["_malloc"](384 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 384;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore12DatabaseSyncC1EN3WTF10PassRefPtrINS_22DatabaseBackendContextEEERKNS1_6StringES7_S7_m;
var __ZN7WebCore12DatabaseSyncD1Ev;
/* memory initializer */ allocate([37,115,32,40,37,100,44,32,37,115,41,0,0,0,0,0,102,111,114,99,105,98,108,121,32,99,108,111,115,105,110,103,32,100,97,116,97,98,97,115,101,0,0,0,0,0,0,0,117,110,97,98,108,101,32,116,111,32,115,116,97,114,116,32,97,32,116,114,97,110,115,97,99,116,105,111,110,32,102,114,111,109,32,119,105,116,104,105,110,32,97,32,116,114,97,110,115,97,99,116,105,111,110,0,117,110,97,98,108,101,32,116,111,32,115,101,116,32,116,104,101,32,110,101,119,32,118,101,114,115,105,111,110,0,0,0,99,117,114,114,101,110,116,32,118,101,114,115,105,111,110,32,111,102,32,116,104,101,32,100,97,116,97,98,97,115,101,32,97,110,100,32,96,111,108,100,86,101,114,115,105,111,110,96,32,97,114,103,117,109,101,110,116,32,100,111,32,110,111,116,32,109,97,116,99,104,0,0,117,110,97,98,108,101,32,116,111,32,114,101,97,100,32,116,104,101,32,99,117,114,114,101,110,116,32,118,101,114,115,105,111,110,0,0,0,0,0,0,117,110,97,98,108,101,32,116,111,32,99,104,97,110,103,101,86,101,114,115,105,111,110,32,102,114,111,109,32,119,105,116,104,105,110,32,97,32,116,114,97,110,115,97,99,116,105,111,110,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
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
function invoke_iiiii(index,a1,a2,a3,a4) {
  try {
    return Module["dynCall_iiiii"](index,a1,a2,a3,a4);
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
function invoke_viiiiii(index,a1,a2,a3,a4,a5,a6) {
  try {
    Module["dynCall_viiiiii"](index,a1,a2,a3,a4,a5,a6);
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
  var __ZTVN7WebCore12DatabaseSyncE=(H_BASE+312)|0;
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
  var invoke_iiiii=env.invoke_iiiii;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_v=env.invoke_v;
  var invoke_viiiiii=env.invoke_viiiiii;
  var invoke_iii=env.invoke_iii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore12DatabaseSync13changeVersionERKN3WTF6StringES4_NS1_10PassRefPtrINS_26SQLTransactionSyncCallbackEEERi(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 i11 = i6 + 32 | 0;
 i12 = i6 + 40 | 0;
 i13 = i6 + 48 | 0;
 i14 = i6 + 56 | 0;
 i15 = i1 | 0;
 i16 = i1 + 48 | 0;
 if ((HEAP8[i1 + 56 | 0] & 1) != 0) {
  __ZN3WTF6StringC1EPKc(i9, H_BASE + 256 | 0);
  i17 = i9 | 0;
  i9 = HEAP32[i17 >> 2] | 0;
  if ((i9 | 0) != 0) {
   i18 = i9 | 0;
   HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 2;
  }
  i18 = i1 + 164 | 0;
  i19 = HEAP32[i18 >> 2] | 0;
  HEAP32[i18 >> 2] = i9;
  do {
   if ((i19 | 0) != 0) {
    i9 = i19 | 0;
    i18 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
    if ((i18 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i19);
     break;
    } else {
     HEAP32[i9 >> 2] = i18;
     break;
    }
   }
  } while (0);
  i19 = HEAP32[i17 >> 2] | 0;
  do {
   if ((i19 | 0) != 0) {
    i17 = i19 | 0;
    i18 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
    if ((i18 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i19);
     break;
    } else {
     HEAP32[i17 >> 2] = i18;
     break;
    }
   }
  } while (0);
  HEAP32[i5 >> 2] = 1001;
  STACKTOP = i6;
  return;
 }
 i19 = i11 | 0;
 i18 = i4 | 0;
 i4 = HEAP32[i18 >> 2] | 0;
 HEAP32[i18 >> 2] = 0;
 HEAP32[i19 >> 2] = i4;
 __ZN7WebCore18SQLTransactionSync6createEPNS_12DatabaseSyncEN3WTF10PassRefPtrINS_26SQLTransactionSyncCallbackEEEb(i10, i1, i11, 0);
 i11 = i10 | 0;
 i10 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 i11 = HEAP32[i19 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i19 = i11 + 4 | 0;
   i4 = i19 | 0;
   i18 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i18 | 0) != 0) {
    HEAP32[i4 >> 2] = i18;
    break;
   }
   i18 = i19 - 4 | 0;
   if ((i18 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 15](i18);
  }
 } while (0);
 i11 = i10 | 0;
 i18 = __ZN7WebCore25SQLTransactionBackendSync5beginEv(i11) | 0;
 HEAP32[i5 >> 2] = i18;
 do {
  if ((i18 | 0) == 0) {
   i19 = i12 | 0;
   HEAP32[i19 >> 2] = 0;
   do {
    if (__ZN7WebCore19DatabaseBackendBase22getVersionFromDatabaseERN3WTF6StringEb(i15, i12, 1) | 0) {
     if (!(__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i19 >> 2] | 0, HEAP32[i2 >> 2] | 0) | 0)) {
      __ZN3WTF6StringC1EPKc(i13, H_BASE + 144 | 0);
      i4 = i13 | 0;
      i17 = HEAP32[i4 >> 2] | 0;
      if ((i17 | 0) != 0) {
       i9 = i17 | 0;
       HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
      }
      i9 = i1 + 164 | 0;
      i20 = HEAP32[i9 >> 2] | 0;
      HEAP32[i9 >> 2] = i17;
      do {
       if ((i20 | 0) != 0) {
        i17 = i20 | 0;
        i9 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
        if ((i9 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i20);
         break;
        } else {
         HEAP32[i17 >> 2] = i9;
         break;
        }
       }
      } while (0);
      i20 = HEAP32[i4 >> 2] | 0;
      do {
       if ((i20 | 0) != 0) {
        i9 = i20 | 0;
        i17 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
        if ((i17 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i20);
         break;
        } else {
         HEAP32[i9 >> 2] = i17;
         break;
        }
       }
      } while (0);
      HEAP32[i5 >> 2] = 1002;
      break;
     }
     i20 = __ZN7WebCore25SQLTransactionBackendSync7executeEv(i11) | 0;
     HEAP32[i5 >> 2] = i20;
     if ((i20 | 0) != 0) {
      break;
     }
     if (!(__ZN7WebCore19DatabaseBackendBase20setVersionInDatabaseERKN3WTF6StringEb(i15, i3, 1) | 0)) {
      i20 = __ZN7WebCore14SQLiteDatabase9lastErrorEv(i16) | 0;
      i4 = __ZN7WebCore14SQLiteDatabase12lastErrorMsgEv(i16) | 0;
      __ZN3WTF6String6formatEPKcz(i8, H_BASE + 8 | 0, (i21 = STACKTOP, STACKTOP = STACKTOP + 24 | 0, HEAP32[i21 >> 2] = H_BASE + 112, HEAP32[i21 + 8 >> 2] = i20, HEAP32[i21 + 16 >> 2] = i4, i21) | 0);
      STACKTOP = i21;
      i4 = i8 | 0;
      i20 = HEAP32[i4 >> 2] | 0;
      if ((i20 | 0) != 0) {
       i17 = i20 | 0;
       HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 2;
      }
      i17 = i1 + 164 | 0;
      i9 = HEAP32[i17 >> 2] | 0;
      HEAP32[i17 >> 2] = i20;
      do {
       if ((i9 | 0) != 0) {
        i20 = i9 | 0;
        i17 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
        if ((i17 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i9);
         break;
        } else {
         HEAP32[i20 >> 2] = i17;
         break;
        }
       }
      } while (0);
      i9 = HEAP32[i4 >> 2] | 0;
      do {
       if ((i9 | 0) != 0) {
        i17 = i9 | 0;
        i20 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
        if ((i20 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i9);
         break;
        } else {
         HEAP32[i17 >> 2] = i20;
         break;
        }
       }
      } while (0);
      HEAP32[i5 >> 2] = 1e3;
      break;
     }
     i9 = __ZN7WebCore25SQLTransactionBackendSync6commitEv(i11) | 0;
     HEAP32[i5 >> 2] = i9;
     if ((i9 | 0) != 0) {
      __ZN7WebCore19DatabaseBackendBase16setCachedVersionERKN3WTF6StringE(i15, i2);
      break;
     }
     __ZN7WebCore19DatabaseBackendBase18setExpectedVersionERKN3WTF6StringE(i15, i3);
     __ZN3WTF6StringC1EPKc(i14, H_BASE + 384 | 0);
     i9 = i14 | 0;
     i4 = HEAP32[i9 >> 2] | 0;
     if ((i4 | 0) != 0) {
      i20 = i4 | 0;
      HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 2;
     }
     i20 = i1 + 164 | 0;
     i17 = HEAP32[i20 >> 2] | 0;
     HEAP32[i20 >> 2] = i4;
     do {
      if ((i17 | 0) != 0) {
       i4 = i17 | 0;
       i20 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
       if ((i20 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i17);
        break;
       } else {
        HEAP32[i4 >> 2] = i20;
        break;
       }
      }
     } while (0);
     i17 = HEAP32[i9 >> 2] | 0;
     if ((i17 | 0) == 0) {
      break;
     }
     i20 = i17 | 0;
     i4 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
     if ((i4 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i17);
      break;
     } else {
      HEAP32[i20 >> 2] = i4;
      break;
     }
    } else {
     i4 = __ZN7WebCore14SQLiteDatabase9lastErrorEv(i16) | 0;
     i20 = __ZN7WebCore14SQLiteDatabase12lastErrorMsgEv(i16) | 0;
     __ZN3WTF6String6formatEPKcz(i7, H_BASE + 8 | 0, (i21 = STACKTOP, STACKTOP = STACKTOP + 24 | 0, HEAP32[i21 >> 2] = H_BASE + 216, HEAP32[i21 + 8 >> 2] = i4, HEAP32[i21 + 16 >> 2] = i20, i21) | 0);
     STACKTOP = i21;
     i20 = i7 | 0;
     i4 = HEAP32[i20 >> 2] | 0;
     if ((i4 | 0) != 0) {
      i17 = i4 | 0;
      HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 2;
     }
     i17 = i1 + 164 | 0;
     i22 = HEAP32[i17 >> 2] | 0;
     HEAP32[i17 >> 2] = i4;
     do {
      if ((i22 | 0) != 0) {
       i4 = i22 | 0;
       i17 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
       if ((i17 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i22);
        break;
       } else {
        HEAP32[i4 >> 2] = i17;
        break;
       }
      }
     } while (0);
     i22 = HEAP32[i20 >> 2] | 0;
     do {
      if ((i22 | 0) != 0) {
       i9 = i22 | 0;
       i17 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
       if ((i17 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i22);
        break;
       } else {
        HEAP32[i9 >> 2] = i17;
        break;
       }
      }
     } while (0);
     HEAP32[i5 >> 2] = 1e3;
    }
   } while (0);
   i22 = HEAP32[i19 >> 2] | 0;
   if ((i22 | 0) == 0) {
    break;
   }
   i20 = i22 | 0;
   i17 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
   if ((i17 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i22);
    break;
   } else {
    HEAP32[i20 >> 2] = i17;
    break;
   }
  }
 } while (0);
 if ((i10 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i5 = i10 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) == 0) {
  __ZN7WebCore25SQLTransactionBackendSyncD1Ev(i11);
  __ZN3WTF8fastFreeEPv(i10);
  STACKTOP = i6;
  return;
 } else {
  HEAP32[i5 >> 2] = i1;
  STACKTOP = i6;
  return;
 }
}
function __ZN7WebCore12DatabaseSync14runTransactionEN3WTF10PassRefPtrINS_26SQLTransactionSyncCallbackEEEbRi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 if ((HEAP8[i1 + 56 | 0] & 1) != 0) {
  __ZN3WTF6StringC1EPKc(i6, H_BASE + 56 | 0);
  i10 = i6 | 0;
  i6 = HEAP32[i10 >> 2] | 0;
  if ((i6 | 0) != 0) {
   i11 = i6 | 0;
   HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
  }
  i11 = i1 + 164 | 0;
  i12 = HEAP32[i11 >> 2] | 0;
  HEAP32[i11 >> 2] = i6;
  do {
   if ((i12 | 0) != 0) {
    i6 = i12 | 0;
    i11 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
    if ((i11 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i12);
     break;
    } else {
     HEAP32[i6 >> 2] = i11;
     break;
    }
   }
  } while (0);
  i12 = HEAP32[i10 >> 2] | 0;
  do {
   if ((i12 | 0) != 0) {
    i10 = i12 | 0;
    i11 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
    if ((i11 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i12);
     break;
    } else {
     HEAP32[i10 >> 2] = i11;
     break;
    }
   }
  } while (0);
  HEAP32[i4 >> 2] = 1001;
  STACKTOP = i5;
  return;
 }
 i12 = i8 | 0;
 i11 = i2 | 0;
 i2 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i12 >> 2] = i2;
 __ZN7WebCore18SQLTransactionSync6createEPNS_12DatabaseSyncEN3WTF10PassRefPtrINS_26SQLTransactionSyncCallbackEEEb(i7, i1, i8, i3);
 i3 = i7 | 0;
 i7 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i3 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i12 = i3 + 4 | 0;
   i8 = i12 | 0;
   i2 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i8 >> 2] = i2;
    break;
   }
   i2 = i12 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 15](i2);
  }
 } while (0);
 i3 = i7 | 0;
 i2 = __ZN7WebCore25SQLTransactionBackendSync5beginEv(i3) | 0;
 HEAP32[i4 >> 2] = i2;
 do {
  if ((i2 | 0) == 0) {
   i12 = __ZN7WebCore25SQLTransactionBackendSync7executeEv(i3) | 0;
   HEAP32[i4 >> 2] = i12;
   if ((i12 | 0) != 0) {
    i13 = 21;
    break;
   }
   i12 = __ZN7WebCore25SQLTransactionBackendSync6commitEv(i3) | 0;
   HEAP32[i4 >> 2] = i12;
   if ((i12 | 0) != 0) {
    i13 = 21;
   }
  } else {
   i13 = 21;
  }
 } while (0);
 if ((i13 | 0) == 21) {
  __ZN7WebCore25SQLTransactionBackendSync8rollbackEv(i3);
 }
 __ZN3WTF6StringC1EPKc(i9, H_BASE + 384 | 0);
 i13 = i9 | 0;
 i9 = HEAP32[i13 >> 2] | 0;
 if ((i9 | 0) != 0) {
  i4 = i9 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i1 + 164 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i9;
 do {
  if ((i1 | 0) != 0) {
   i9 = i1 | 0;
   i4 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i9 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i13 = i1 | 0;
   i4 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i13 >> 2] = i4;
    break;
   }
  }
 } while (0);
 if ((i7 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i1 = i7 | 0;
 i4 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore25SQLTransactionBackendSyncD1Ev(i3);
  __ZN3WTF8fastFreeEPv(i7);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i1 >> 2] = i4;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore12DatabaseSyncC2EN3WTF10PassRefPtrINS_22DatabaseBackendContextEEERKNS1_6StringES7_S7_m(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i8 = i7 | 0;
 i9 = i1 + 160 | 0;
 i10 = i2 | 0;
 __ZN7WebCore12DatabaseBaseC2EPNS_22ScriptExecutionContextE(i9, HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] | 0);
 i2 = i8 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i2 >> 2] = i11;
 __ZN7WebCore19DatabaseBackendSyncC2EN3WTF10PassRefPtrINS_22DatabaseBackendContextEEERKNS1_6StringES7_S7_m(i1 | 0, i8, i3, i4, i5, i6);
 i6 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i2 = i6 + 12 | 0;
   i5 = i2 | 0;
   if (((tempValue = HEAP32[i5 >> 2] | 0, HEAP32[i5 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
    break;
   }
   i5 = i2 - 12 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 15](i5);
  }
 } while (0);
 HEAP32[i1 >> 2] = H_BASE + 320;
 HEAP32[i1 + 164 >> 2] = 0;
 HEAP32[i1 + 36 >> 2] = i9;
 STACKTOP = i7;
 return;
}
function __ZN7WebCore12DatabaseSyncC1EN3WTF10PassRefPtrINS_22DatabaseBackendContextEEERKNS1_6StringES7_S7_m(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i8 = i7 | 0;
 i9 = i1 + 160 | 0;
 i10 = i2 | 0;
 __ZN7WebCore12DatabaseBaseC2EPNS_22ScriptExecutionContextE(i9, HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] | 0);
 i2 = i8 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i2 >> 2] = i11;
 __ZN7WebCore19DatabaseBackendSyncC2EN3WTF10PassRefPtrINS_22DatabaseBackendContextEEERKNS1_6StringES7_S7_m(i1 | 0, i8, i3, i4, i5, i6);
 i6 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i2 = i6 + 12 | 0;
   i5 = i2 | 0;
   if (((tempValue = HEAP32[i5 >> 2] | 0, HEAP32[i5 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
    break;
   }
   i5 = i2 - 12 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 15](i5);
  }
 } while (0);
 HEAP32[i1 >> 2] = H_BASE + 320;
 HEAP32[i1 + 164 >> 2] = 0;
 HEAP32[i1 + 36 >> 2] = i9;
 STACKTOP = i7;
 return;
}
function __ZN7WebCore12DatabaseSync15readTransactionEN3WTF10PassRefPtrINS_26SQLTransactionSyncCallbackEEERi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i5 | 0;
 i7 = i2 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i6 >> 2] = i2;
 __ZN7WebCore12DatabaseSync14runTransactionEN3WTF10PassRefPtrINS_26SQLTransactionSyncCallbackEEEbRi(i1, i5, 1, i3);
 i3 = HEAP32[i6 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i6 = i3 + 4 | 0;
 i3 = i6 | 0;
 i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i3 >> 2] = i5;
  STACKTOP = i4;
  return;
 }
 i5 = i6 - 4 | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 15](i5);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12DatabaseSync11transactionEN3WTF10PassRefPtrINS_26SQLTransactionSyncCallbackEEERi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i5 | 0;
 i7 = i2 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i6 >> 2] = i2;
 __ZN7WebCore12DatabaseSync14runTransactionEN3WTF10PassRefPtrINS_26SQLTransactionSyncCallbackEEEbRi(i1, i5, 0, i3);
 i3 = HEAP32[i6 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i6 = i3 + 4 | 0;
 i3 = i6 | 0;
 i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i3 >> 2] = i5;
  STACKTOP = i4;
  return;
 }
 i5 = i6 - 4 | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 15](i5);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12DatabaseSync16closeImmediatelyEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 | 0;
 if ((HEAP8[i1 + 44 | 0] & 1) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZN3WTF6StringC1EPKc(i3, H_BASE + 24 | 0);
 __ZN7WebCore12DatabaseBase15logErrorMessageERKN3WTF6StringE(i1 + 160 | 0, i3);
 i1 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i3 = i1 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i3 >> 2] = i5;
    break;
   }
  }
 } while (0);
 __ZN7WebCore19DatabaseBackendBase13closeDatabaseEv(i4);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore12DatabaseSyncD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 320;
 i2 = HEAP32[i1 + 164 >> 2] | 0;
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
 __ZN7WebCore19DatabaseBackendSyncD2Ev(i1 | 0);
 i2 = HEAP32[i1 + 160 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i5 = i1;
  __ZN3WTF8fastFreeEPv(i5);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 92 >> 2] & 15](i2);
 i5 = i1;
 __ZN3WTF8fastFreeEPv(i5);
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 320 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 324 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 328 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 332 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 336 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 340 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 344 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 348 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 352 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 356 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 360 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 364 >> 2] = F_BASE_iiiii + 2;
 HEAP32[H_BASE + 368 >> 2] = F_BASE_iiiii + 4;
}
function __ZN7WebCore12DatabaseSyncD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 320;
 i2 = HEAP32[i1 + 164 >> 2] | 0;
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
 __ZN7WebCore19DatabaseBackendSyncD2Ev(i1 | 0);
 i2 = HEAP32[i1 + 160 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 92 >> 2] & 15](i2);
 return;
}
function __ZN7WebCore12DatabaseSyncD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 320;
 i2 = HEAP32[i1 + 164 >> 2] | 0;
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
 __ZN7WebCore19DatabaseBackendSyncD2Ev(i1 | 0);
 i2 = HEAP32[i1 + 160 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 92 >> 2] & 15](i2);
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
function __ZN7WebCore12DatabaseSync6createEPNS_22ScriptExecutionContextEN3WTF10PassRefPtrINS_19DatabaseBackendBaseEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i1 >> 2] = i2;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 4 | 0;
 tempValue = HEAP32[i1 >> 2] | 0, HEAP32[i1 >> 2] = tempValue + 1, tempValue;
 return;
}
function iiiii___ZN7WebCore19DatabaseBackendSync20openAndVerifyVersionEbRNS_13DatabaseErrorERN3WTF6StringE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZN7WebCore19DatabaseBackendSync20openAndVerifyVersionEbRNS_13DatabaseErrorERN3WTF6StringE(i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}
function iiiii___ZN7WebCore19DatabaseBackendBase20performOpenAndVerifyEbRNS_13DatabaseErrorERN3WTF6StringE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZN7WebCore19DatabaseBackendBase20performOpenAndVerifyEbRNS_13DatabaseErrorERN3WTF6StringE(i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}
function __ZN7WebCore12DatabaseSync7backendEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = i2;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 4 | 0;
 tempValue = HEAP32[i1 >> 2] | 0, HEAP32[i1 >> 2] = tempValue + 1, tempValue;
 return;
}
function dynCall_viiiiii(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 FUNCTION_TABLE_viiiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0);
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function dynCall_iiiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return FUNCTION_TABLE_iiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
}
function vii___ZNK7WebCore19DatabaseBackendBase16stringIdentifierEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore19DatabaseBackendBase16stringIdentifierEv(i1 | 0, i2 | 0);
}
function vii___ZNK7WebCore19DatabaseBackendBase11displayNameEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore19DatabaseBackendBase11displayNameEv(i1 | 0, i2 | 0);
}
function vii___ZNK7WebCore19DatabaseBackendBase8fileNameEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore19DatabaseBackendBase8fileNameEv(i1 | 0, i2 | 0);
}
function vii___ZNK7WebCore19DatabaseBackendBase7versionEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore19DatabaseBackendBase7versionEv(i1 | 0, i2 | 0);
}
function vii___ZNK7WebCore19DatabaseBackendBase7detailsEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore19DatabaseBackendBase7detailsEv(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore19DatabaseBackendBase14securityOriginEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore19DatabaseBackendBase14securityOriginEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore19DatabaseBackendBase13estimatedSizeEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore19DatabaseBackendBase13estimatedSizeEv(i1 | 0) | 0;
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
function b5(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(5);
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
function b0(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(0);
 return 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 7](i2 | 0) | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 15](i2 | 0);
}
function __ZN7WebCore12DatabaseSync21markAsDeletedAndCloseEv(i1) {
 i1 = i1 | 0;
 return;
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
function b4() {
 abort(4);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_iiiii = [b0,b0,iiiii___ZN7WebCore19DatabaseBackendSync20openAndVerifyVersionEbRNS_13DatabaseErrorERN3WTF6StringE__wrapper,b0,iiiii___ZN7WebCore19DatabaseBackendBase20performOpenAndVerifyEbRNS_13DatabaseErrorERN3WTF6StringE__wrapper,b0,b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore12DatabaseSync21markAsDeletedAndCloseEv,b1,__ZN7WebCore12DatabaseSyncD2Ev,b1,__ZN7WebCore12DatabaseSync16closeImmediatelyEv,b1,__ZN7WebCore12DatabaseSyncD0Ev,b1,b1,b1,b1,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,vii___ZNK7WebCore19DatabaseBackendBase16stringIdentifierEv__wrapper,b2,vii___ZNK7WebCore19DatabaseBackendBase11displayNameEv__wrapper,b2,vii___ZNK7WebCore19DatabaseBackendBase7detailsEv__wrapper,b2,vii___ZNK7WebCore19DatabaseBackendBase8fileNameEv__wrapper,b2,vii___ZNK7WebCore19DatabaseBackendBase7versionEv__wrapper,b2,b2,b2,b2,b2];
  var FUNCTION_TABLE_ii = [b3,b3,ii___ZNK7WebCore19DatabaseBackendBase14securityOriginEv__wrapper,b3,ii___ZNK7WebCore19DatabaseBackendBase13estimatedSizeEv__wrapper,b3,b3,b3];
  var FUNCTION_TABLE_v = [b4,b4];
  var FUNCTION_TABLE_viiiiii = [b5,b5,__ZN7WebCore12DatabaseSyncC2EN3WTF10PassRefPtrINS_22DatabaseBackendContextEEERKNS1_6StringES7_S7_m,b5];
  var FUNCTION_TABLE_iii = [b6,b6];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_iiiii: dynCall_iiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_viiiiii: dynCall_viiiiii, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_iiiii": invoke_iiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_viiiiii": invoke_viiiiii, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_iiiii = Module["dynCall_iiiii"] = asm["dynCall_iiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_viiiiii = Module["dynCall_viiiiii"] = asm["dynCall_viiiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore12DatabaseSync15readTransactionEN3WTF10PassRefPtrINS_26SQLTransactionSyncCallbackEEERi","_strlen","__ZN7WebCore12DatabaseSync13changeVersionERKN3WTF6StringES4_NS1_10PassRefPtrINS_26SQLTransactionSyncCallbackEEERi","__ZN7WebCore12DatabaseSyncD0Ev","__ZN7WebCore12DatabaseSync14runTransactionEN3WTF10PassRefPtrINS_26SQLTransactionSyncCallbackEEEbRi","__ZN7WebCore12DatabaseSync21markAsDeletedAndCloseEv","__ZN7WebCore12DatabaseSyncC2EN3WTF10PassRefPtrINS_22DatabaseBackendContextEEERKNS1_6StringES7_S7_m","_memset","_memcpy","__ZN7WebCore12DatabaseSyncD2Ev","__ZN7WebCore12DatabaseSync16closeImmediatelyEv","__ZN7WebCore12DatabaseSync6createEPNS_22ScriptExecutionContextEN3WTF10PassRefPtrINS_19DatabaseBackendBaseEEE","__ZN7WebCore12DatabaseSync7backendEv","__ZN7WebCore12DatabaseSync11transactionEN3WTF10PassRefPtrINS_26SQLTransactionSyncCallbackEEERi"]

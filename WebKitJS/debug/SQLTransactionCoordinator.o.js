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
var __ZN7WebCore25SQLTransactionCoordinatorC1Ev;
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
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore25SQLTransactionCoordinator8shutdownEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 HEAP8[i1 + 20 | 0] = 1;
 i2 = i1 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i3 + (i5 * 48 & -1) | 0;
 L1 : do {
  if ((HEAP32[i1 + 12 >> 2] | 0) == 0) {
   i7 = i3;
   i8 = i5;
  } else {
   L3 : do {
    if ((i5 | 0) == 0) {
     i9 = i3;
    } else {
     i10 = i3;
     while (1) {
      i11 = HEAP32[i10 >> 2] | 0;
      if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
       i9 = i10;
       break L3;
      }
      i11 = i10 + 48 | 0;
      if ((i11 | 0) == (i6 | 0)) {
       i7 = i3;
       i8 = i5;
       break L1;
      } else {
       i10 = i11;
      }
     }
    }
   } while (0);
   if ((i9 | 0) == (i6 | 0)) {
    i7 = i3;
    i8 = i5;
    break;
   } else {
    i12 = i9;
   }
   while (1) {
    i10 = HEAP32[i12 + 44 >> 2] | 0;
    if ((i10 | 0) != 0) {
     __ZN7WebCore21SQLTransactionBackend34notifyDatabaseThreadIsShuttingDownEv(i10);
    }
    i10 = i12 + 24 | 0;
    i11 = HEAP32[i10 >> 2] | 0;
    i13 = i12 + 28 | 0;
    i14 = HEAP32[i13 >> 2] | 0;
    i15 = i11 + (i14 << 2) | 0;
    L13 : do {
     if ((HEAP32[i12 + 36 >> 2] | 0) != 0) {
      L15 : do {
       if ((i14 | 0) == 0) {
        i16 = i11;
       } else {
        i17 = i11;
        while (1) {
         i18 = HEAP32[i17 >> 2] | 0;
         if (!((i18 | 0) == (-1 | 0) | (i18 | 0) == 0)) {
          i16 = i17;
          break L15;
         }
         i17 = i17 + 4 | 0;
         if ((i17 | 0) == (i15 | 0)) {
          break L13;
         }
        }
       }
      } while (0);
      if ((i16 | 0) == (i15 | 0)) {
       break;
      } else {
       i19 = i16;
      }
      while (1) {
       __ZN7WebCore21SQLTransactionBackend34notifyDatabaseThreadIsShuttingDownEv(HEAP32[i19 >> 2] | 0);
       i17 = i19 + 4 | 0;
       L22 : do {
        if ((i17 | 0) == (i15 | 0)) {
         i20 = i15;
        } else {
         i18 = i17;
         while (1) {
          i21 = HEAP32[i18 >> 2] | 0;
          if (!((i21 | 0) == (-1 | 0) | (i21 | 0) == 0)) {
           i20 = i18;
           break L22;
          }
          i21 = i18 + 4 | 0;
          if ((i21 | 0) == (i15 | 0)) {
           i20 = i15;
           break;
          } else {
           i18 = i21;
          }
         }
        }
       } while (0);
       if ((i20 | 0) == ((HEAP32[i10 >> 2] | 0) + (HEAP32[i13 >> 2] << 2) | 0)) {
        break;
       } else {
        i19 = i20;
       }
      }
     }
    } while (0);
    i13 = i12 + 4 | 0;
    i10 = HEAP32[i13 >> 2] | 0;
    i15 = i12 + 8 | 0;
    if ((i10 | 0) != (HEAP32[i15 >> 2] | 0)) {
     i11 = i12 + 12 | 0;
     i14 = i10;
     while (1) {
      i10 = HEAP32[(HEAP32[i11 >> 2] | 0) + (i14 << 2) >> 2] | 0;
      do {
       if ((i10 | 0) == 0) {
        __ZN7WebCore21SQLTransactionBackend34notifyDatabaseThreadIsShuttingDownEv(0);
       } else {
        i17 = i10 + 16 | 0;
        tempValue = HEAP32[i17 >> 2] | 0, HEAP32[i17 >> 2] = tempValue + 1, tempValue;
        __ZN7WebCore21SQLTransactionBackend34notifyDatabaseThreadIsShuttingDownEv(i10);
        i17 = i10 + 16 | 0;
        i18 = i17 | 0;
        if (((tempValue = HEAP32[i18 >> 2] | 0, HEAP32[i18 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
         break;
        }
        i18 = i17 - 4 | 0;
        if ((i18 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 3](i18);
       }
      } while (0);
      i14 = HEAP32[i13 >> 2] | 0;
      if ((i14 | 0) == (HEAP32[i15 >> 2] | 0)) {
       break;
      }
     }
    }
    i15 = i12 + 48 | 0;
    L39 : do {
     if ((i15 | 0) == (i6 | 0)) {
      i22 = i6;
     } else {
      i14 = i15;
      while (1) {
       i13 = HEAP32[i14 >> 2] | 0;
       if (!((i13 | 0) == (-1 | 0) | (i13 | 0) == 0)) {
        i22 = i14;
        break L39;
       }
       i13 = i14 + 48 | 0;
       if ((i13 | 0) == (i6 | 0)) {
        i22 = i6;
        break;
       } else {
        i14 = i13;
       }
      }
     }
    } while (0);
    i15 = HEAP32[i2 >> 2] | 0;
    i14 = HEAP32[i4 >> 2] | 0;
    if ((i22 | 0) == (i15 + (i14 * 48 & -1) | 0)) {
     i7 = i15;
     i8 = i14;
     break;
    } else {
     i12 = i22;
    }
   }
  }
 } while (0);
 if ((i7 | 0) == 0) {
  return;
 }
 if ((i8 | 0) > 0) {
  i22 = 0;
  while (1) {
   i12 = i7 + (i22 * 48 & -1) | 0;
   do {
    if ((HEAP32[i12 >> 2] | 0) != -1) {
     __ZN7WebCore25SQLTransactionCoordinator16CoordinationInfoD2Ev(i7 + (i22 * 48 & -1) + 4 | 0);
     i4 = HEAP32[i12 >> 2] | 0;
     if ((i4 | 0) == 0) {
      break;
     }
     i2 = i4 | 0;
     i6 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
     if ((i6 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i4);
      break;
     } else {
      HEAP32[i2 >> 2] = i6;
      break;
     }
    }
   } while (0);
   i22 = i22 + 1 | 0;
   if ((i22 | 0) >= (i8 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i7);
 _memset(i1 | 0, 0, 16) | 0;
 return;
}
function __ZN7WebCore25SQLTransactionCoordinator26processPendingTransactionsERNS0_16CoordinationInfoE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i1 | 0;
 i4 = i1 + 8 | 0;
 i5 = i2 + 40 | 0;
 if ((HEAP32[i5 >> 2] | 0) != 0) {
  STACKTOP = i1;
  return;
 }
 i6 = i2 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = i2 + 4 | 0;
 if ((i7 | 0) == (HEAP32[i8 >> 2] | 0)) {
  STACKTOP = i1;
  return;
 }
 i9 = i2 + 8 | 0;
 i10 = i3 | 0;
 i11 = HEAP32[(HEAP32[i9 >> 2] | 0) + (i7 << 2) >> 2] | 0;
 HEAP32[i10 >> 2] = i11;
 if ((i11 | 0) == 0) {
  i12 = 0;
 } else {
  i7 = i11 + 16 | 0;
  tempValue = HEAP32[i7 >> 2] | 0, HEAP32[i7 >> 2] = tempValue + 1, tempValue;
  i12 = HEAP32[i10 >> 2] | 0;
 }
 L10 : do {
  if ((HEAP8[i12 + 46 | 0] & 1) == 0) {
   if ((HEAP32[i2 + 32 >> 2] | 0) != 0) {
    i13 = i12;
    break;
   }
   i7 = HEAP32[(HEAP32[i9 >> 2] | 0) + (HEAP32[i6 >> 2] << 2) >> 2] | 0;
   do {
    if ((i7 | 0) != 0) {
     i11 = i7 + 16 | 0;
     i14 = i11 | 0;
     if (((tempValue = HEAP32[i14 >> 2] | 0, HEAP32[i14 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
      break;
     }
     i14 = i11 - 4 | 0;
     if ((i14 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 3](i14);
    }
   } while (0);
   i7 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = (i7 | 0) == ((HEAP32[i2 + 12 >> 2] | 0) - 1 | 0) ? 0 : i7 + 1 | 0;
   i7 = HEAP32[i10 >> 2] | 0;
   if ((i7 | 0) != 0) {
    i14 = i7 + 16 | 0;
    tempValue = HEAP32[i14 >> 2] | 0, HEAP32[i14 >> 2] = tempValue + 1, tempValue;
   }
   i14 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = i7;
   do {
    if ((i14 | 0) != 0) {
     i7 = i14 + 16 | 0;
     i11 = i7 | 0;
     if (((tempValue = HEAP32[i11 >> 2] | 0, HEAP32[i11 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
      break;
     }
     i11 = i7 - 4 | 0;
     if ((i11 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 3](i11);
    }
   } while (0);
   i14 = HEAP32[i10 >> 2] | 0;
   __ZN7WebCore21SQLTransactionBackend12lockAcquiredEv(i14);
   i13 = i14;
  } else {
   i14 = i2 + 12 | 0;
   i11 = i2 + 20 | 0;
   i7 = HEAP32[i6 >> 2] | 0;
   i15 = HEAP32[i9 >> 2] | 0;
   i16 = i7;
   i17 = i15;
   i18 = HEAP32[i15 + (i7 << 2) >> 2] | 0;
   while (1) {
    HEAP32[i17 + (i16 << 2) >> 2] = 0;
    i7 = HEAP32[(HEAP32[i9 >> 2] | 0) + (HEAP32[i6 >> 2] << 2) >> 2] | 0;
    do {
     if ((i7 | 0) != 0) {
      i15 = i7 + 16 | 0;
      i19 = i15 | 0;
      if (((tempValue = HEAP32[i19 >> 2] | 0, HEAP32[i19 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
       break;
      }
      i19 = i15 - 4 | 0;
      if ((i19 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 4 >> 2] & 3](i19);
     }
    } while (0);
    i7 = HEAP32[i6 >> 2] | 0;
    HEAP32[i6 >> 2] = (i7 | 0) == ((HEAP32[i14 >> 2] | 0) - 1 | 0) ? 0 : i7 + 1 | 0;
    i7 = HEAP32[i10 >> 2] | 0;
    HEAP32[i10 >> 2] = i18;
    do {
     if ((i7 | 0) != 0) {
      i19 = i7 + 16 | 0;
      i15 = i19 | 0;
      if (((tempValue = HEAP32[i15 >> 2] | 0, HEAP32[i15 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
       break;
      }
      i15 = i19 - 4 | 0;
      if ((i15 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 3](i15);
     }
    } while (0);
    __ZN3WTF9HashTableINS_6RefPtrIN7WebCore21SQLTransactionBackendEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_SF_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_(i4, i11, i3, i3);
    i7 = HEAP32[i10 >> 2] | 0;
    __ZN7WebCore21SQLTransactionBackend12lockAcquiredEv(i7);
    i15 = HEAP32[i6 >> 2] | 0;
    if ((i15 | 0) == (HEAP32[i8 >> 2] | 0)) {
     i13 = i7;
     break L10;
    }
    i19 = HEAP32[i9 >> 2] | 0;
    i20 = HEAP32[i19 + (i15 << 2) >> 2] | 0;
    if ((HEAP8[i20 + 46 | 0] & 1) == 0) {
     i13 = i7;
     break;
    } else {
     i16 = i15;
     i17 = i19;
     i18 = i20;
    }
   }
  }
 } while (0);
 if ((i13 | 0) == 0) {
  STACKTOP = i1;
  return;
 }
 i9 = i13 + 16 | 0;
 i13 = i9 | 0;
 if (((tempValue = HEAP32[i13 >> 2] | 0, HEAP32[i13 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
  STACKTOP = i1;
  return;
 }
 i13 = i9 - 4 | 0;
 if ((i13 | 0) == 0) {
  STACKTOP = i1;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 3](i13);
 STACKTOP = i1;
 return;
}
function __ZN7WebCore25SQLTransactionCoordinator11releaseLockEPNS_21SQLTransactionBackendE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 if ((HEAP8[i1 + 20 | 0] & 1) != 0) {
  STACKTOP = i3;
  return;
 }
 i6 = HEAP32[i2 + 28 >> 2] | 0;
 __ZNK7WebCore14SecurityOrigin18databaseIdentifierEv(i4, FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 12 >> 2] & 1](i6 | 0) | 0);
 __ZN3WTF7HashMapINS_6StringEN7WebCore25SQLTransactionCoordinator16CoordinationInfoENS_10StringHashENS_10HashTraitsIS1_EENS6_IS4_EEE4findERKS1_(i5, i1 | 0, i4);
 i1 = HEAP32[i5 >> 2] | 0;
 i5 = i1 + 4 | 0;
 do {
  if ((HEAP8[i2 + 46 | 0] & 1) == 0) {
   i6 = i1 + 44 | 0;
   i7 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = 0;
   if ((i7 | 0) == 0) {
    break;
   }
   i6 = i7 + 16 | 0;
   i7 = i6 | 0;
   if (((tempValue = HEAP32[i7 >> 2] | 0, HEAP32[i7 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
    break;
   }
   i7 = i6 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 3](i7);
  } else {
   i7 = i1 + 24 | 0;
   i6 = (i2 | 0) == 0;
   if (!i6) {
    i8 = i2 + 16 | 0;
    tempValue = HEAP32[i8 >> 2] | 0, HEAP32[i8 >> 2] = tempValue + 1, tempValue;
   }
   i8 = HEAP32[i7 >> 2] | 0;
   if ((i8 | 0) == 0) {
    i9 = HEAP32[i1 + 28 >> 2] | 0;
    i10 = i9 << 2 | 0;
    i11 = 0;
    i12 = i9;
   } else {
    i9 = HEAP32[i1 + 32 >> 2] | 0;
    i13 = i2;
    i14 = i13 + ~(i13 << 15) | 0;
    i13 = (i14 >>> 10 ^ i14) * 9 & -1;
    i14 = i13 >>> 6 ^ i13;
    i13 = i14 + ~(i14 << 11) | 0;
    i14 = i13 >>> 16 ^ i13;
    i13 = i9 & i14;
    i15 = i8 + (i13 << 2) | 0;
    i16 = HEAP32[i15 >> 2] | 0;
    L12 : do {
     if ((i16 | 0) == (i2 | 0)) {
      i17 = i15;
     } else {
      i18 = (i14 >>> 23) + ~i14 | 0;
      i19 = i18 << 12 ^ i18;
      i18 = i19 >>> 7 ^ i19;
      i19 = i18 << 2 ^ i18;
      i18 = i19 >>> 20 ^ i19 | 1;
      i19 = 0;
      i20 = i13;
      i21 = i16;
      while (1) {
       if ((i21 | 0) == 0) {
        i17 = 0;
        break L12;
       }
       i22 = (i19 | 0) == 0 ? i18 : i19;
       i23 = i22 + i20 & i9;
       i24 = i8 + (i23 << 2) | 0;
       i25 = HEAP32[i24 >> 2] | 0;
       if ((i25 | 0) == (i2 | 0)) {
        i17 = i24;
        break;
       } else {
        i19 = i22;
        i20 = i23;
        i21 = i25;
       }
      }
     }
    } while (0);
    i9 = HEAP32[i1 + 28 >> 2] | 0;
    i10 = (i17 | 0) == 0 ? i8 + (i9 << 2) | 0 : i17;
    i11 = i8;
    i12 = i9;
   }
   i9 = i7 | 0;
   i16 = i1 + 28 | 0;
   do {
    if ((i10 | 0) != (i11 + (i12 << 2) | 0)) {
     i13 = i10 | 0;
     i14 = HEAP32[i13 >> 2] | 0;
     do {
      if ((i14 | 0) != 0) {
       i15 = i14 + 16 | 0;
       i21 = i15 | 0;
       if (((tempValue = HEAP32[i21 >> 2] | 0, HEAP32[i21 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
        break;
       }
       i21 = i15 - 4 | 0;
       if ((i21 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 3](i21);
      }
     } while (0);
     HEAP32[i13 >> 2] = -1;
     i14 = i1 + 40 | 0;
     HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
     i14 = i1 + 36 | 0;
     i21 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
     HEAP32[i14 >> 2] = i21;
     i14 = HEAP32[i16 >> 2] | 0;
     if (!((i21 * 6 & -1 | 0) < (i14 | 0) & (i14 | 0) > 8)) {
      break;
     }
     __ZN3WTF9HashTableINS_6RefPtrIN7WebCore21SQLTransactionBackendEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6rehashEiPS4_(i9, (i14 | 0) / 2 & -1, 0) | 0;
    }
   } while (0);
   if (i6) {
    break;
   }
   i9 = i2 + 16 | 0;
   i16 = i9 | 0;
   if (((tempValue = HEAP32[i16 >> 2] | 0, HEAP32[i16 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
    break;
   }
   i16 = i9 - 4 | 0;
   if ((i16 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 3](i16);
  }
 } while (0);
 __ZN7WebCore25SQLTransactionCoordinator26processPendingTransactionsERNS0_16CoordinationInfoE(0, i5);
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = i5 | 0;
 i2 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i4 >> 2] = i2;
  STACKTOP = i3;
  return;
 }
}
function __ZN3WTF22KeyValuePairHashTraitsINS_10HashTraitsINS_6StringEEENS1_IN7WebCore25SQLTransactionCoordinator16CoordinationInfoEEEE10emptyValueEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i2 + 32 | 0;
 i6 = i2 + 80 | 0;
 _memset(i6 | 0, 0, 44) | 0;
 i7 = i5 | 0;
 HEAP32[i7 >> 2] = 0;
 i8 = i5 + 4 | 0;
 __ZN3WTF5DequeINS_6RefPtrIN7WebCore21SQLTransactionBackendEEELj0EEC2ERKS5_(i8, i6 | 0);
 i9 = i5 + 24 | 0;
 i10 = i9 | 0;
 _memset(i9 | 0, 0, 20) | 0;
 i9 = HEAP32[i6 + 20 >> 2] | 0;
 i11 = HEAP32[i6 + 24 >> 2] | 0;
 i12 = i9 + (i11 << 2) | 0;
 L1 : do {
  if ((HEAP32[i6 + 32 >> 2] | 0) != 0) {
   L3 : do {
    if ((i11 | 0) == 0) {
     i13 = i9;
    } else {
     i14 = i9;
     while (1) {
      i15 = HEAP32[i14 >> 2] | 0;
      if (!((i15 | 0) == (-1 | 0) | (i15 | 0) == 0)) {
       i13 = i14;
       break L3;
      }
      i14 = i14 + 4 | 0;
      if ((i14 | 0) == (i12 | 0)) {
       break L1;
      }
     }
    }
   } while (0);
   if ((i13 | 0) == (i12 | 0)) {
    break;
   } else {
    i16 = i13;
   }
   while (1) {
    __ZN3WTF9HashTableINS_6RefPtrIN7WebCore21SQLTransactionBackendEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_SF_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_(i4, i10, i16, i16);
    i14 = i16 + 4 | 0;
    if ((i14 | 0) == (i12 | 0)) {
     break L1;
    } else {
     i17 = i14;
    }
    while (1) {
     i14 = HEAP32[i17 >> 2] | 0;
     if (!((i14 | 0) == (-1 | 0) | (i14 | 0) == 0)) {
      break;
     }
     i14 = i17 + 4 | 0;
     if ((i14 | 0) == (i12 | 0)) {
      break L1;
     } else {
      i17 = i14;
     }
    }
    if ((i17 | 0) == (i12 | 0)) {
     break;
    } else {
     i16 = i17;
    }
   }
  }
 } while (0);
 i17 = i5 + 44 | 0;
 i16 = HEAP32[i6 + 40 >> 2] | 0;
 HEAP32[i17 >> 2] = i16;
 if ((i16 | 0) != 0) {
  i12 = i16 + 16 | 0;
  tempValue = HEAP32[i12 >> 2] | 0, HEAP32[i12 >> 2] = tempValue + 1, tempValue;
 }
 i12 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i1 >> 2] = i12;
 __ZN3WTF5DequeINS_6RefPtrIN7WebCore21SQLTransactionBackendEEELj0EEC2ERKS5_(i1 + 4 | 0, i8);
 i8 = i1 + 24 | 0;
 i12 = i8 | 0;
 _memset(i8 | 0, 0, 20) | 0;
 i8 = HEAP32[i5 + 24 >> 2] | 0;
 i16 = HEAP32[i5 + 28 >> 2] | 0;
 i10 = i8 + (i16 << 2) | 0;
 L18 : do {
  if ((HEAP32[i5 + 36 >> 2] | 0) != 0) {
   L20 : do {
    if ((i16 | 0) == 0) {
     i18 = i8;
    } else {
     i4 = i8;
     while (1) {
      i13 = HEAP32[i4 >> 2] | 0;
      if (!((i13 | 0) == (-1 | 0) | (i13 | 0) == 0)) {
       i18 = i4;
       break L20;
      }
      i4 = i4 + 4 | 0;
      if ((i4 | 0) == (i10 | 0)) {
       break L18;
      }
     }
    }
   } while (0);
   if ((i18 | 0) == (i10 | 0)) {
    break;
   } else {
    i19 = i18;
   }
   while (1) {
    __ZN3WTF9HashTableINS_6RefPtrIN7WebCore21SQLTransactionBackendEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_SF_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_(i3, i12, i19, i19);
    i4 = i19 + 4 | 0;
    if ((i4 | 0) == (i10 | 0)) {
     break L18;
    } else {
     i20 = i4;
    }
    while (1) {
     i4 = HEAP32[i20 >> 2] | 0;
     if (!((i4 | 0) == (-1 | 0) | (i4 | 0) == 0)) {
      break;
     }
     i4 = i20 + 4 | 0;
     if ((i4 | 0) == (i10 | 0)) {
      break L18;
     } else {
      i20 = i4;
     }
    }
    if ((i20 | 0) == (i10 | 0)) {
     break;
    } else {
     i19 = i20;
    }
   }
  }
 } while (0);
 i20 = HEAP32[i17 >> 2] | 0;
 HEAP32[i1 + 44 >> 2] = i20;
 if ((i20 | 0) != 0) {
  i1 = i20 + 16 | 0;
  tempValue = HEAP32[i1 >> 2] | 0, HEAP32[i1 >> 2] = tempValue + 1, tempValue;
 }
 __ZN7WebCore25SQLTransactionCoordinator16CoordinationInfoD2Ev(i5 + 4 | 0);
 i5 = HEAP32[i7 >> 2] | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore25SQLTransactionCoordinator16CoordinationInfoD2Ev(i6);
  STACKTOP = i2;
  return;
 }
 i7 = i5 | 0;
 i1 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  __ZN7WebCore25SQLTransactionCoordinator16CoordinationInfoD2Ev(i6);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i7 >> 2] = i1;
  __ZN7WebCore25SQLTransactionCoordinator16CoordinationInfoD2Ev(i6);
  STACKTOP = i2;
  return;
 }
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore25SQLTransactionCoordinator16CoordinationInfoEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKS1_S5_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S6_S8_S9_SF_SC_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore25SQLTransactionCoordinator16CoordinationInfoEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E6rehashEiPS6_(i2, i8, 0) | 0;
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
  i13 = i10 + (i12 * 48 & -1) | 0;
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
  i17 = (HEAP32[i5 >> 2] | 0) + ((HEAP32[i2 + 4 >> 2] | 0) * 48 & -1) | 0;
  i11 = i1;
  HEAP32[i11 >> 2] = i13;
  HEAP32[i11 + 4 >> 2] = i17;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i9 | 0) == 0) {
  i18 = i13;
 } else {
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore25SQLTransactionCoordinator16CoordinationInfoEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E16initializeBucketERS6_(i9);
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
 __ZN7WebCore25SQLTransactionCoordinator16CoordinationInfoaSERKS1_(i18 + 4 | 0, i4) | 0;
 i4 = i2 + 12 | 0;
 i13 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i13;
 i4 = i2 + 4 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i13 << 1 | 0) < (i8 | 0)) {
  i19 = i18;
  i20 = i8;
 } else {
  if ((i8 | 0) == 0) {
   i21 = 8;
  } else {
   i9 = i8 << 1;
   i21 = (i13 * 6 & -1 | 0) < (i9 | 0) ? i8 : i9;
  }
  i9 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore25SQLTransactionCoordinator16CoordinationInfoEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E6rehashEiPS6_(i2, i21, i18) | 0;
  i19 = i9;
  i20 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i20 * 48 & -1) | 0;
 i20 = i1;
 HEAP32[i20 >> 2] = i19;
 HEAP32[i20 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableINS_6RefPtrIN7WebCore21SQLTransactionBackendEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_SF_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
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
  __ZN3WTF9HashTableINS_6RefPtrIN7WebCore21SQLTransactionBackendEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6rehashEiPS4_(i2, i8, 0) | 0;
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
  } else {
   i13 = (i9 >>> 23) + ~i9 | 0;
   i14 = i13 << 12 ^ i13;
   i13 = i14 >>> 7 ^ i14;
   i14 = i13 << 2 ^ i13;
   i13 = i14 >>> 20 ^ i14 | 1;
   i14 = 0;
   i15 = 0;
   i16 = i3;
   i17 = i7;
   i18 = i11;
   while (1) {
    if ((i18 | 0) == (i8 | 0)) {
     i19 = 8;
     break;
    }
    i20 = (i18 | 0) == -1 ? i17 : i15;
    i21 = (i14 | 0) == 0 ? i13 : i14;
    i22 = i21 + i16 & i6;
    i23 = i10 + (i22 << 2) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    if ((i24 | 0) == 0) {
     i19 = 10;
     break;
    } else {
     i14 = i21;
     i15 = i20;
     i16 = i22;
     i17 = i23;
     i18 = i24;
    }
   }
   if ((i19 | 0) == 10) {
    if ((i20 | 0) == 0) {
     i12 = i23;
     break;
    }
    HEAP32[i20 >> 2] = 0;
    i18 = i2 + 16 | 0;
    HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) - 1;
    i12 = i20;
    break;
   } else if ((i19 | 0) == 8) {
    i18 = i10 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
    i16 = i1;
    HEAP32[i16 >> 2] = i17;
    HEAP32[i16 + 4 >> 2] = i18;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   }
  }
 } while (0);
 i10 = HEAP32[i4 >> 2] | 0;
 if ((i10 | 0) != 0) {
  i4 = i10 + 16 | 0;
  tempValue = HEAP32[i4 >> 2] | 0, HEAP32[i4 >> 2] = tempValue + 1, tempValue;
 }
 i4 = i12 | 0;
 i19 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i10;
 do {
  if ((i19 | 0) != 0) {
   i10 = i19 + 16 | 0;
   i4 = i10 | 0;
   if (((tempValue = HEAP32[i4 >> 2] | 0, HEAP32[i4 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
    break;
   }
   i4 = i10 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 3](i4);
  }
 } while (0);
 i19 = i2 + 12 | 0;
 i4 = (HEAP32[i19 >> 2] | 0) + 1 | 0;
 HEAP32[i19 >> 2] = i4;
 i19 = i2 + 4 | 0;
 i10 = HEAP32[i19 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i4 << 1 | 0) < (i10 | 0)) {
  i25 = i12;
  i26 = i10;
 } else {
  if ((i10 | 0) == 0) {
   i27 = 8;
  } else {
   i20 = i10 << 1;
   i27 = (i4 * 6 & -1 | 0) < (i20 | 0) ? i10 : i20;
  }
  i20 = __ZN3WTF9HashTableINS_6RefPtrIN7WebCore21SQLTransactionBackendEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6rehashEiPS4_(i2, i27, i12) | 0;
  i25 = i20;
  i26 = HEAP32[i19 >> 2] | 0;
 }
 i19 = (HEAP32[i5 >> 2] | 0) + (i26 << 2) | 0;
 i26 = i1;
 HEAP32[i26 >> 2] = i25;
 HEAP32[i26 + 4 >> 2] = i19;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore25SQLTransactionCoordinator16CoordinationInfoEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E8reinsertEOS6_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i1 >> 2] | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i2 | 0;
 i7 = HEAP32[i1 >> 2] | 0;
 i8 = HEAP32[i7 + 16 >> 2] | 0;
 if (i8 >>> 0 > 127 >>> 0) {
  i9 = i8 >>> 7;
 } else {
  i9 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i7) | 0;
 }
 i7 = (i9 >>> 23) + ~i9 | 0;
 i8 = i7 << 12 ^ i7;
 i7 = i8 >>> 7 ^ i8;
 i8 = i7 << 2 ^ i7;
 i7 = i8 >>> 20 ^ i8 | 1;
 i8 = i9;
 i9 = 0;
 i10 = 0;
 while (1) {
  i11 = i8 & i6;
  i12 = i5 + (i11 * 48 & -1) | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == 0) {
   i15 = 6;
   break;
  } else if ((i14 | 0) == (-1 | 0)) {
   i16 = i12;
  } else {
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i13, HEAP32[i1 >> 2] | 0) | 0) {
    i17 = i12;
    break;
   } else {
    i16 = i10;
   }
  }
  i13 = (i9 | 0) == 0 ? i7 : i9;
  i8 = i13 + i11 | 0;
  i9 = i13;
  i10 = i16;
 }
 if ((i15 | 0) == 6) {
  i17 = (i10 | 0) != 0 ? i10 : i12;
 }
 __ZN7WebCore25SQLTransactionCoordinator16CoordinationInfoD2Ev(i17 + 4 | 0);
 i12 = i17 | 0;
 i10 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i15 = i10 | 0;
   i16 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i15 >> 2] = i16;
    break;
   }
  }
 } while (0);
 i10 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i12 >> 2] = i10;
 __ZN3WTF5DequeINS_6RefPtrIN7WebCore21SQLTransactionBackendEEELj0EEC2ERKS5_(i17 + 4 | 0, i2 + 4 | 0);
 i10 = i17 + 24 | 0;
 i12 = i10 | 0;
 _memset(i10 | 0, 0, 20) | 0;
 i10 = HEAP32[i2 + 24 >> 2] | 0;
 i1 = HEAP32[i2 + 28 >> 2] | 0;
 i16 = i10 + (i1 << 2) | 0;
 L19 : do {
  if ((HEAP32[i2 + 36 >> 2] | 0) != 0) {
   L21 : do {
    if ((i1 | 0) == 0) {
     i18 = i10;
    } else {
     i15 = i10;
     while (1) {
      i9 = HEAP32[i15 >> 2] | 0;
      if (!((i9 | 0) == (-1 | 0) | (i9 | 0) == 0)) {
       i18 = i15;
       break L21;
      }
      i15 = i15 + 4 | 0;
      if ((i15 | 0) == (i16 | 0)) {
       break L19;
      }
     }
    }
   } while (0);
   if ((i18 | 0) == (i16 | 0)) {
    break;
   } else {
    i19 = i18;
   }
   while (1) {
    __ZN3WTF9HashTableINS_6RefPtrIN7WebCore21SQLTransactionBackendEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_SF_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_(i4, i12, i19, i19);
    i15 = i19 + 4 | 0;
    if ((i15 | 0) == (i16 | 0)) {
     break L19;
    } else {
     i20 = i15;
    }
    while (1) {
     i15 = HEAP32[i20 >> 2] | 0;
     if (!((i15 | 0) == (-1 | 0) | (i15 | 0) == 0)) {
      break;
     }
     i15 = i20 + 4 | 0;
     if ((i15 | 0) == (i16 | 0)) {
      break L19;
     } else {
      i20 = i15;
     }
    }
    if ((i20 | 0) == (i16 | 0)) {
     break;
    } else {
     i19 = i20;
    }
   }
  }
 } while (0);
 i20 = HEAP32[i2 + 44 >> 2] | 0;
 HEAP32[i17 + 44 >> 2] = i20;
 if ((i20 | 0) == 0) {
  STACKTOP = i3;
  return i17 | 0;
 }
 i2 = i20 + 16 | 0;
 tempValue = HEAP32[i2 >> 2] | 0, HEAP32[i2 >> 2] = tempValue + 1, tempValue;
 STACKTOP = i3;
 return i17 | 0;
}
function __ZN3WTF9HashTableINS_6RefPtrIN7WebCore21SQLTransactionBackendEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_EaSERKSA_(i1, i2) {
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
 i8 = i6 + (i7 << 2) | 0;
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
      i10 = i10 + 4 | 0;
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
    __ZN3WTF9HashTableINS_6RefPtrIN7WebCore21SQLTransactionBackendEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_SF_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_(i4, i5, i12, i12);
    i10 = i12 + 4 | 0;
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
     i10 = i13 + 4 | 0;
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
   i8 = HEAP32[i12 + (i4 << 2) >> 2] | 0;
   i9 = i8;
   do {
    if (!((i9 | 0) == (-1 | 0) | (i9 | 0) == 0)) {
     i5 = i8 + 16 | 0;
     i6 = i5 | 0;
     if (((tempValue = HEAP32[i6 >> 2] | 0, HEAP32[i6 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
      break;
     }
     i6 = i5 - 4 | 0;
     if ((i6 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 3](i6);
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
function __ZN7WebCore25SQLTransactionCoordinator11acquireLockEPNS_21SQLTransactionBackendE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 12 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 44 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i8 = HEAP32[i2 + 28 >> 2] | 0;
 __ZNK7WebCore14SecurityOrigin18databaseIdentifierEv(i4, FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 12 >> 2] & 1](i8 | 0) | 0);
 __ZN3WTF7HashMapINS_6StringEN7WebCore25SQLTransactionCoordinator16CoordinationInfoENS_10StringHashENS_10HashTraitsIS1_EENS6_IS4_EEE4findERKS1_(i5, i1 | 0, i4);
 i8 = HEAP32[i5 >> 2] | 0;
 if ((i8 | 0) == ((HEAP32[i1 >> 2] | 0) + ((HEAP32[i1 + 4 >> 2] | 0) * 48 & -1) | 0)) {
  _memset(i7 | 0, 0, 44) | 0;
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore25SQLTransactionCoordinator16CoordinationInfoEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKS1_S5_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S6_S8_S9_SF_SC_EEEEOT0_OT1_(i6, i1 | 0, i4, i7);
  i1 = i6;
  i6 = HEAP32[i1 >> 2] | 0;
  i9 = HEAP32[i1 + 4 >> 2] | 0;
  HEAP32[i5 >> 2] = i6;
  HEAP32[i5 + 4 >> 2] = i9;
  __ZN7WebCore25SQLTransactionCoordinator16CoordinationInfoD2Ev(i7);
  i10 = i6;
 } else {
  i10 = i8;
 }
 i8 = i10 + 4 | 0;
 i6 = i8 | 0;
 i7 = HEAP32[i8 >> 2] | 0;
 i9 = i10 + 8 | 0;
 i5 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i7 | 0) == 0) {
   i1 = HEAP32[i10 + 16 >> 2] | 0;
   if ((i5 | 0) == 0) {
    if ((i1 | 0) == 0) {
     i11 = 8;
     break;
    } else {
     i12 = 0;
     break;
    }
   } else {
    if ((i5 | 0) == (i1 - 1 | 0)) {
     i11 = 8;
     break;
    } else {
     i12 = i5;
     break;
    }
   }
  } else {
   if ((i5 + 1 | 0) == (i7 | 0)) {
    i11 = 8;
   } else {
    i12 = i5;
   }
  }
 } while (0);
 if ((i11 | 0) == 8) {
  __ZN3WTF5DequeINS_6RefPtrIN7WebCore21SQLTransactionBackendEEELj0EE14expandCapacityEv(i6);
  i12 = HEAP32[i9 >> 2] | 0;
 }
 HEAP32[(HEAP32[i10 + 12 >> 2] | 0) + (i12 << 2) >> 2] = i2;
 if ((i2 | 0) != 0) {
  i12 = i2 + 16 | 0;
  tempValue = HEAP32[i12 >> 2] | 0, HEAP32[i12 >> 2] = tempValue + 1, tempValue;
 }
 i12 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = (i12 | 0) == ((HEAP32[i10 + 16 >> 2] | 0) - 1 | 0) ? 0 : i12 + 1 | 0;
 __ZN7WebCore25SQLTransactionCoordinator26processPendingTransactionsERNS0_16CoordinationInfoE(0, i8);
 i8 = HEAP32[i4 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = i8 | 0;
 i12 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i12 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i8);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i4 >> 2] = i12;
  STACKTOP = i3;
  return;
 }
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore25SQLTransactionCoordinator16CoordinationInfoEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E16initializeBucketERS6_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 __ZN3WTF22KeyValuePairHashTraitsINS_10HashTraitsINS_6StringEEENS1_IN7WebCore25SQLTransactionCoordinator16CoordinationInfoEEEE10emptyValueEv(i4);
 i5 = i4 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i1 >> 2] = i6;
 __ZN3WTF5DequeINS_6RefPtrIN7WebCore21SQLTransactionBackendEEELj0EEC2ERKS5_(i1 + 4 | 0, i4 + 4 | 0);
 i6 = i1 + 24 | 0;
 i7 = i6 | 0;
 _memset(i6 | 0, 0, 20) | 0;
 i6 = HEAP32[i4 + 24 >> 2] | 0;
 i8 = HEAP32[i4 + 28 >> 2] | 0;
 i9 = i6 + (i8 << 2) | 0;
 L1 : do {
  if ((HEAP32[i4 + 36 >> 2] | 0) != 0) {
   L3 : do {
    if ((i8 | 0) == 0) {
     i10 = i6;
    } else {
     i11 = i6;
     while (1) {
      i12 = HEAP32[i11 >> 2] | 0;
      if (!((i12 | 0) == (-1 | 0) | (i12 | 0) == 0)) {
       i10 = i11;
       break L3;
      }
      i11 = i11 + 4 | 0;
      if ((i11 | 0) == (i9 | 0)) {
       break L1;
      }
     }
    }
   } while (0);
   if ((i10 | 0) == (i9 | 0)) {
    break;
   } else {
    i13 = i10;
   }
   while (1) {
    __ZN3WTF9HashTableINS_6RefPtrIN7WebCore21SQLTransactionBackendEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_SF_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_(i3, i7, i13, i13);
    i11 = i13 + 4 | 0;
    if ((i11 | 0) == (i9 | 0)) {
     break L1;
    } else {
     i14 = i11;
    }
    while (1) {
     i11 = HEAP32[i14 >> 2] | 0;
     if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
      break;
     }
     i11 = i14 + 4 | 0;
     if ((i11 | 0) == (i9 | 0)) {
      break L1;
     } else {
      i14 = i11;
     }
    }
    if ((i14 | 0) == (i9 | 0)) {
     break;
    } else {
     i13 = i14;
    }
   }
  }
 } while (0);
 i14 = HEAP32[i4 + 44 >> 2] | 0;
 HEAP32[i1 + 44 >> 2] = i14;
 if ((i14 | 0) != 0) {
  i1 = i14 + 16 | 0;
  tempValue = HEAP32[i1 >> 2] | 0, HEAP32[i1 >> 2] = tempValue + 1, tempValue;
 }
 __ZN7WebCore25SQLTransactionCoordinator16CoordinationInfoD2Ev(i4 + 4 | 0);
 i4 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i5 = i4 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i5 >> 2] = i1;
  STACKTOP = i2;
  return;
 }
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore25SQLTransactionCoordinator16CoordinationInfoEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E6rehashEiPS6_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = i2 - 1;
 i4 = __ZN3WTF10fastMallocEj(i2 * 48 & -1) | 0;
 if ((i2 | 0) > 0) {
  i8 = 0;
  while (1) {
   __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore25SQLTransactionCoordinator16CoordinationInfoEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E16initializeBucketERS6_(i4 + (i8 * 48 & -1) | 0);
   i8 = i8 + 1 | 0;
   if ((i8 | 0) >= (i2 | 0)) {
    break;
   }
  }
 }
 HEAP32[i6 >> 2] = i4;
 if ((i5 | 0) == 0) {
  HEAP32[i1 + 16 >> 2] = 0;
  i9 = 0;
  i10 = i7;
  __ZN3WTF8fastFreeEPv(i10);
  return i9 | 0;
 } else {
  i11 = 0;
  i12 = 0;
 }
 while (1) {
  i4 = i7 + (i11 * 48 & -1) | 0;
  i6 = HEAP32[i4 >> 2] | 0;
  if ((i6 | 0) == (-1 | 0) | (i6 | 0) == 0) {
   i13 = i12;
  } else {
   i6 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore25SQLTransactionCoordinator16CoordinationInfoEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E8reinsertEOS6_(i1, i4) | 0;
   i13 = (i4 | 0) == (i3 | 0) ? i6 : i12;
  }
  i6 = i11 + 1 | 0;
  if ((i6 | 0) == (i5 | 0)) {
   break;
  } else {
   i11 = i6;
   i12 = i13;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i14 = 0;
 } else {
  i9 = i13;
  i10 = i7;
  __ZN3WTF8fastFreeEPv(i10);
  return i9 | 0;
 }
 while (1) {
  i1 = i7 + (i14 * 48 & -1) | 0;
  do {
   if ((HEAP32[i1 >> 2] | 0) != -1) {
    __ZN7WebCore25SQLTransactionCoordinator16CoordinationInfoD2Ev(i7 + (i14 * 48 & -1) + 4 | 0);
    i12 = HEAP32[i1 >> 2] | 0;
    if ((i12 | 0) == 0) {
     break;
    }
    i11 = i12 | 0;
    i3 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
    if ((i3 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i12);
     break;
    } else {
     HEAP32[i11 >> 2] = i3;
     break;
    }
   }
  } while (0);
  i1 = i14 + 1 | 0;
  if ((i1 | 0) < (i5 | 0)) {
   i14 = i1;
  } else {
   i9 = i13;
   break;
  }
 }
 i10 = i7;
 __ZN3WTF8fastFreeEPv(i10);
 return i9 | 0;
}
function __ZN3WTF5DequeINS_6RefPtrIN7WebCore21SQLTransactionBackendEEELj0EEC2ERKS5_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = i1 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i3 >> 2] = i4;
 i5 = i1 + 4 | 0;
 i6 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = i6;
 i7 = HEAP32[i2 + 12 >> 2] | 0;
 i8 = i1 + 8 | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = i1 + 12 | 0;
 HEAP32[i9 >> 2] = 0;
 HEAP32[i1 + 16 >> 2] = 0;
 do {
  if ((i7 | 0) == 0) {
   i10 = i4;
   i11 = i6;
   i12 = 0;
  } else {
   if (i7 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   } else {
    i1 = __ZN3WTF18fastMallocGoodSizeEj(i7 << 2) | 0;
    HEAP32[i9 >> 2] = i1 >>> 2;
    i13 = __ZN3WTF10fastMallocEj(i1) | 0;
    HEAP32[i8 >> 2] = i13;
    i10 = HEAP32[i3 >> 2] | 0;
    i11 = HEAP32[i5 >> 2] | 0;
    i12 = i13;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = i5 + (i11 << 2) | 0;
 if (i10 >>> 0 <= i11 >>> 0) {
  if ((i10 | 0) == (i11 | 0)) {
   return;
  }
  i7 = i5 + (i10 << 2) | 0;
  i6 = i12 + (i10 << 2) | 0;
  while (1) {
   i4 = HEAP32[i7 >> 2] | 0;
   HEAP32[i6 >> 2] = i4;
   if ((i4 | 0) != 0) {
    i13 = i4 + 16 | 0;
    tempValue = HEAP32[i13 >> 2] | 0, HEAP32[i13 >> 2] = tempValue + 1, tempValue;
   }
   i13 = i7 + 4 | 0;
   if ((i13 | 0) == (i2 | 0)) {
    break;
   } else {
    i7 = i13;
    i6 = i6 + 4 | 0;
   }
  }
  return;
 }
 if ((i11 | 0) == 0) {
  i14 = i10;
 } else {
  i10 = i5;
  i11 = i12;
  while (1) {
   i12 = HEAP32[i10 >> 2] | 0;
   HEAP32[i11 >> 2] = i12;
   if ((i12 | 0) != 0) {
    i6 = i12 + 16 | 0;
    tempValue = HEAP32[i6 >> 2] | 0, HEAP32[i6 >> 2] = tempValue + 1, tempValue;
   }
   i6 = i10 + 4 | 0;
   if ((i6 | 0) == (i2 | 0)) {
    break;
   } else {
    i10 = i6;
    i11 = i11 + 4 | 0;
   }
  }
  i14 = HEAP32[i3 >> 2] | 0;
 }
 i3 = HEAP32[i9 >> 2] | 0;
 i9 = i5 + (i3 << 2) | 0;
 if ((i14 | 0) == (i3 | 0)) {
  return;
 }
 i3 = i5 + (i14 << 2) | 0;
 i5 = (HEAP32[i8 >> 2] | 0) + (i14 << 2) | 0;
 while (1) {
  i14 = HEAP32[i3 >> 2] | 0;
  HEAP32[i5 >> 2] = i14;
  if ((i14 | 0) != 0) {
   i8 = i14 + 16 | 0;
   tempValue = HEAP32[i8 >> 2] | 0, HEAP32[i8 >> 2] = tempValue + 1, tempValue;
  }
  i8 = i3 + 4 | 0;
  if ((i8 | 0) == (i9 | 0)) {
   break;
  } else {
   i3 = i8;
   i5 = i5 + 4 | 0;
  }
 }
 return;
}
function __ZN3WTF5DequeINS_6RefPtrIN7WebCore21SQLTransactionBackendEEELj0EE10destroyAllEv(i1) {
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
     i10 = i9 + 16 | 0;
     i11 = i10 | 0;
     if (((tempValue = HEAP32[i11 >> 2] | 0, HEAP32[i11 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
      break;
     }
     i11 = i10 - 4 | 0;
     if ((i11 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 3](i11);
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
     i4 = i6 + 16 | 0;
     i8 = i4 | 0;
     if (((tempValue = HEAP32[i8 >> 2] | 0, HEAP32[i8 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
      break;
     }
     i8 = i4 - 4 | 0;
     if ((i8 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 3](i8);
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
    i12 = i13 + 16 | 0;
    i5 = i12 | 0;
    if (((tempValue = HEAP32[i5 >> 2] | 0, HEAP32[i5 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
     break;
    }
    i5 = i12 - 4 | 0;
    if ((i5 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 3](i5);
   }
  } while (0);
  i2 = i2 + 4 | 0;
  if ((i2 | 0) == (i1 | 0)) {
   break;
  }
 }
 return;
}
function __ZN3WTF9HashTableINS_6RefPtrIN7WebCore21SQLTransactionBackendEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E8reinsertEOS4_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i2 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 i5 = i2;
 i6 = i5 + ~(i5 << 15) | 0;
 i5 = (i6 >>> 10 ^ i6) * 9 & -1;
 i6 = i5 >>> 6 ^ i5;
 i5 = i6 + ~(i6 << 11) | 0;
 i6 = i5 >>> 16 ^ i5;
 i5 = i6 & i4;
 i7 = i3 + (i5 << 2) | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 L1 : do {
  if ((i8 | 0) == 0) {
   i9 = 0;
   i10 = i7;
   i11 = 3;
  } else {
   i12 = (i6 >>> 23) + ~i6 | 0;
   i13 = i12 << 12 ^ i12;
   i12 = i13 >>> 7 ^ i13;
   i13 = i12 << 2 ^ i12;
   i12 = i13 >>> 20 ^ i13 | 1;
   i13 = 0;
   i14 = 0;
   i15 = i5;
   i16 = i7;
   i17 = i8;
   while (1) {
    if ((i17 | 0) == (i2 | 0)) {
     i18 = i16;
     break L1;
    }
    i19 = (i17 | 0) == -1 ? i16 : i13;
    i20 = (i14 | 0) == 0 ? i12 : i14;
    i21 = i20 + i15 & i4;
    i22 = i3 + (i21 << 2) | 0;
    i23 = HEAP32[i22 >> 2] | 0;
    if ((i23 | 0) == 0) {
     i9 = i19;
     i10 = i22;
     i11 = 3;
     break;
    } else {
     i13 = i19;
     i14 = i20;
     i15 = i21;
     i16 = i22;
     i17 = i23;
    }
   }
  }
 } while (0);
 if ((i11 | 0) == 3) {
  i18 = (i9 | 0) != 0 ? i9 : i10;
 }
 i10 = i18 | 0;
 i9 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i11 = i9 + 16 | 0;
   i3 = i11 | 0;
   if (((tempValue = HEAP32[i3 >> 2] | 0, HEAP32[i3 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
    break;
   }
   i3 = i11 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 3](i3);
  }
 } while (0);
 i9 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i10 >> 2] = i9;
 return i18 | 0;
}
function __ZN3WTF9HashTableINS_6RefPtrIN7WebCore21SQLTransactionBackendEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6rehashEiPS4_(i1, i2, i3) {
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
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 2) | 0;
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
  i2 = i7 + (i10 << 2) | 0;
  i6 = HEAP32[i2 >> 2] | 0;
  if ((i6 | 0) == (-1 | 0) | (i6 | 0) == 0) {
   i12 = i11;
  } else {
   i6 = __ZN3WTF9HashTableINS_6RefPtrIN7WebCore21SQLTransactionBackendEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E8reinsertEOS4_(i1, i2) | 0;
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
  i1 = HEAP32[i7 + (i13 << 2) >> 2] | 0;
  i11 = i1;
  do {
   if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
    i10 = i1 + 16 | 0;
    i3 = i10 | 0;
    if (((tempValue = HEAP32[i3 >> 2] | 0, HEAP32[i3 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
     break;
    }
    i3 = i10 - 4 | 0;
    if ((i3 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 3](i3);
   }
  } while (0);
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
function __ZN7WebCore25SQLTransactionCoordinator16CoordinationInfoaSERKS1_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 __ZN3WTF5DequeINS_6RefPtrIN7WebCore21SQLTransactionBackendEEELj0EEC2ERKS5_(i4, i2 | 0);
 i5 = i1 | 0;
 i6 = i4 | 0;
 i7 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i6 >> 2] = i7;
 i7 = i1 + 4 | 0;
 i6 = i4 + 4 | 0;
 i5 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i6 >> 2] = i5;
 i5 = i1 + 8 | 0;
 i6 = i4 + 8 | 0;
 i7 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i6 >> 2] = i7;
 i7 = i1 + 12 | 0;
 i5 = i4 + 12 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i5 >> 2] = i8;
 __ZN3WTF5DequeINS_6RefPtrIN7WebCore21SQLTransactionBackendEEELj0EE10destroyAllEv(i4);
 i4 = HEAP32[i6 >> 2] | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i6 >> 2] = 0;
  HEAP32[i5 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i4);
 }
 __ZN3WTF9HashTableINS_6RefPtrIN7WebCore21SQLTransactionBackendEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_EaSERKSA_(i1 + 20 | 0, i2 + 20 | 0) | 0;
 i4 = HEAP32[i2 + 40 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i2 = i4 + 16 | 0;
  tempValue = HEAP32[i2 >> 2] | 0, HEAP32[i2 >> 2] = tempValue + 1, tempValue;
 }
 i2 = i1 + 40 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i4;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return i1 | 0;
 }
 i4 = i5 + 16 | 0;
 i5 = i4 | 0;
 if (((tempValue = HEAP32[i5 >> 2] | 0, HEAP32[i5 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
  STACKTOP = i3;
  return i1 | 0;
 }
 i5 = i4 - 4 | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return i1 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 3](i5);
 STACKTOP = i3;
 return i1 | 0;
}
function __ZN3WTF7HashMapINS_6StringEN7WebCore25SQLTransactionCoordinator16CoordinationInfoENS_10StringHashENS_10HashTraitsIS1_EENS6_IS4_EEE4findERKS1_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i4 = i2 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   i6 = (HEAP32[i2 + 4 >> 2] | 0) * 48 & -1 | 0;
   i7 = i6;
   i8 = i6;
  } else {
   i6 = HEAP32[i2 + 8 >> 2] | 0;
   i9 = i3 | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   i11 = HEAP32[i10 + 16 >> 2] | 0;
   if (i11 >>> 0 > 127 >>> 0) {
    i12 = i11 >>> 7;
   } else {
    i12 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i10) | 0;
   }
   i10 = (i12 >>> 23) + ~i12 | 0;
   i11 = i10 << 12 ^ i10;
   i10 = i11 >>> 7 ^ i11;
   i11 = i10 << 2 ^ i10;
   i10 = i11 >>> 20 ^ i11 | 1;
   i11 = i12;
   i13 = 0;
   while (1) {
    i14 = i11 & i6;
    i15 = i5 + (i14 * 48 & -1) | 0;
    i16 = HEAP32[i15 >> 2] | 0;
    i17 = i16;
    if ((i17 | 0) == 0) {
     i18 = 8;
     break;
    } else if ((i17 | 0) != (-1 | 0)) {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i16, HEAP32[i9 >> 2] | 0) | 0) {
      i18 = 11;
      break;
     }
    }
    i16 = (i13 | 0) == 0 ? i10 : i13;
    i11 = i16 + i14 | 0;
    i13 = i16;
   }
   if ((i18 | 0) == 8) {
    i13 = (HEAP32[i4 >> 2] | 0) + ((HEAP32[i2 + 4 >> 2] | 0) * 48 & -1) | 0;
    i7 = i13;
    i8 = i13;
    break;
   } else if ((i18 | 0) == 11) {
    i13 = (HEAP32[i4 >> 2] | 0) + ((HEAP32[i2 + 4 >> 2] | 0) * 48 & -1) | 0;
    i7 = (i15 | 0) == 0 ? i13 : i15;
    i8 = i13;
    break;
   }
  }
 } while (0);
 i15 = i1;
 HEAP32[i15 >> 2] = i7;
 HEAP32[i15 + 4 >> 2] = i8;
 return;
}
function __ZN7WebCore25SQLTransactionCoordinator16CoordinationInfoD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = HEAP32[i1 + 40 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 16 | 0;
   i4 = i3 | 0;
   if (((tempValue = HEAP32[i4 >> 2] | 0, HEAP32[i4 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
    break;
   }
   i4 = i3 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 3](i4);
  }
 } while (0);
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i4 = HEAP32[i1 + 24 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i3 = 0;
   while (1) {
    i5 = HEAP32[i2 + (i3 << 2) >> 2] | 0;
    i6 = i5;
    do {
     if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
      i7 = i5 + 16 | 0;
      i8 = i7 | 0;
      if (((tempValue = HEAP32[i8 >> 2] | 0, HEAP32[i8 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
       break;
      }
      i8 = i7 - 4 | 0;
      if ((i8 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 3](i8);
     }
    } while (0);
    i3 = i3 + 1 | 0;
    if ((i3 | 0) >= (i4 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 __ZN3WTF5DequeINS_6RefPtrIN7WebCore21SQLTransactionBackendEEELj0EE10destroyAllEv(i1 | 0);
 i2 = i1 + 8 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i4);
 return;
}
function __ZN3WTF5DequeINS_6RefPtrIN7WebCore21SQLTransactionBackendEEELj0EE14expandCapacityEv(i1) {
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
function __ZN7WebCore25SQLTransactionCoordinatorC2Ev(i1) {
 i1 = i1 | 0;
 _memset(i1 | 0, 0, 21) | 0;
 return;
}
function __ZN7WebCore25SQLTransactionCoordinatorC1Ev(i1) {
 i1 = i1 | 0;
 _memset(i1 | 0, 0, 21) | 0;
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
 FUNCTION_TABLE_vi[i1 & 3](i2 | 0);
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
  var FUNCTION_TABLE_vi = [b3,b3,__ZN7WebCore25SQLTransactionCoordinatorC2Ev,b3];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_vi: dynCall_vi };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_vi": invoke_vi, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN3WTF22KeyValuePairHashTraitsINS_10HashTraitsINS_6StringEEENS1_IN7WebCore25SQLTransactionCoordinator16CoordinationInfoEEEE10emptyValueEv","_strlen","__ZN7WebCore25SQLTransactionCoordinator16CoordinationInfoD2Ev","__ZN3WTF5DequeINS_6RefPtrIN7WebCore21SQLTransactionBackendEEELj0EE10destroyAllEv","__ZN7WebCore25SQLTransactionCoordinator16CoordinationInfoaSERKS1_","__ZN3WTF9HashTableINS_6RefPtrIN7WebCore21SQLTransactionBackendEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_SF_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_","__ZN3WTF5DequeINS_6RefPtrIN7WebCore21SQLTransactionBackendEEELj0EE14expandCapacityEv","__ZN7WebCore25SQLTransactionCoordinator26processPendingTransactionsERNS0_16CoordinationInfoE","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore25SQLTransactionCoordinator16CoordinationInfoEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E16initializeBucketERS6_","__ZN7WebCore25SQLTransactionCoordinator11acquireLockEPNS_21SQLTransactionBackendE","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore25SQLTransactionCoordinator16CoordinationInfoEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E8reinsertEOS6_","__ZN3WTF9HashTableINS_6RefPtrIN7WebCore21SQLTransactionBackendEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_EaSERKSA_","_memset","_memcpy","__ZN3WTF9HashTableINS_6RefPtrIN7WebCore21SQLTransactionBackendEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E8reinsertEOS4_","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore25SQLTransactionCoordinator16CoordinationInfoEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKS1_S5_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S6_S8_S9_SF_SC_EEEEOT0_OT1_","__ZN7WebCore25SQLTransactionCoordinatorC2Ev","__ZN3WTF5DequeINS_6RefPtrIN7WebCore21SQLTransactionBackendEEELj0EEC2ERKS5_","__ZN7WebCore25SQLTransactionCoordinator8shutdownEv","__ZN3WTF7HashMapINS_6StringEN7WebCore25SQLTransactionCoordinator16CoordinationInfoENS_10StringHashENS_10HashTraitsIS1_EENS6_IS4_EEE4findERKS1_","__ZN7WebCore25SQLTransactionCoordinator11releaseLockEPNS_21SQLTransactionBackendE","__ZN3WTF9HashTableINS_6RefPtrIN7WebCore21SQLTransactionBackendEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6rehashEiPS4_","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore25SQLTransactionCoordinator16CoordinationInfoEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E6rehashEiPS6_"]

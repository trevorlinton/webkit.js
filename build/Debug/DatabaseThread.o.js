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
var __ZN7WebCore14DatabaseThreadC1Ev;
var __ZN7WebCore14DatabaseThreadD1Ev;
/* memory initializer */ allocate([87,101,98,67,111,114,101,58,32,68,97,116,97,98,97,115,101,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
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
function __ZN7WebCore14DatabaseThread14databaseThreadEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i1 + 4 | 0;
 if ((i6 | 0) != 0) {
  __ZN3WTF5Mutex4lockEv(i6);
  __ZN3WTF5Mutex6unlockEv(i6);
 }
 i6 = i1 + 36 | 0;
 __ZN3WTF12MessageQueueIN7WebCore12DatabaseTaskEE33waitForMessageFilteredWithTimeoutIZNS3_14waitForMessageEvEUlRKS2_E_EENSt3__110unique_ptrIS2_NS8_14default_deleteIS2_EEEERNS_22MessageQueueWaitResultEOT_d(i5, i6, i3, i4, 1.7976931348623157e+308);
 i7 = i5 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 if ((i8 | 0) != 0) {
  i9 = i8;
  while (1) {
   __ZN7WebCore12DatabaseTask11performTaskEv(i9);
   HEAP32[i7 >> 2] = 0;
   if ((i9 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 7](i9);
   }
   __ZN3WTF12MessageQueueIN7WebCore12DatabaseTaskEE33waitForMessageFilteredWithTimeoutIZNS3_14waitForMessageEvEUlRKS2_E_EENSt3__110unique_ptrIS2_NS8_14default_deleteIS2_EEEERNS_22MessageQueueWaitResultEOT_d(i5, i6, i3, i4, 1.7976931348623157e+308);
   i9 = HEAP32[i7 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
  }
 }
 HEAP32[i7 >> 2] = 0;
 __ZN7WebCore25SQLTransactionCoordinator8shutdownEv(HEAP32[i1 + 156 >> 2] | 0);
 do {
  if ((HEAP32[i1 + 144 >> 2] | 0) > 0) {
   i7 = i1 + 132 | 0;
   i9 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = 0;
   i7 = i1 + 136 | 0;
   i4 = HEAP32[i7 >> 2] | 0;
   i3 = i9 + (i4 << 2) | 0;
   _memset(i7 | 0, 0, 16) | 0;
   L13 : do {
    if ((i4 | 0) == 0) {
     i10 = i9;
     i11 = 11;
    } else {
     i7 = i9;
     while (1) {
      i6 = HEAP32[i7 >> 2] | 0;
      if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
       i10 = i7;
       i11 = 11;
       break L13;
      }
      i7 = i7 + 4 | 0;
      if ((i7 | 0) == (i3 | 0)) {
       break;
      }
     }
    }
   } while (0);
   L17 : do {
    if ((i11 | 0) == 11) {
     if ((i10 | 0) == (i3 | 0)) {
      break;
     } else {
      i12 = i10;
     }
     while (1) {
      __ZN7WebCore15DatabaseBackend5closeEv(HEAP32[i12 >> 2] | 0);
      i7 = i12 + 4 | 0;
      if ((i7 | 0) == (i3 | 0)) {
       break L17;
      } else {
       i13 = i7;
      }
      while (1) {
       i7 = HEAP32[i13 >> 2] | 0;
       if (!((i7 | 0) == (-1 | 0) | (i7 | 0) == 0)) {
        break;
       }
       i7 = i13 + 4 | 0;
       if ((i7 | 0) == (i3 | 0)) {
        break L17;
       } else {
        i13 = i7;
       }
      }
      if ((i13 | 0) == (i3 | 0)) {
       break;
      } else {
       i12 = i13;
      }
     }
    }
   } while (0);
   if ((i9 | 0) == 0) {
    break;
   }
   if ((i4 | 0) > 0) {
    i3 = 0;
    while (1) {
     i7 = HEAP32[i9 + (i3 << 2) >> 2] | 0;
     i6 = i7;
     do {
      if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
       i5 = i7 + 4 | 0;
       i8 = i5 | 0;
       if (((tempValue = HEAP32[i8 >> 2] | 0, HEAP32[i8 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
        break;
       }
       i8 = i5 - 4 | 0;
       if ((i8 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 7](i8);
      }
     } while (0);
     i3 = i3 + 1 | 0;
     if ((i3 | 0) >= (i4 | 0)) {
      break;
     }
    }
   }
   __ZN3WTF8fastFreeEPv(i9);
  }
 } while (0);
 __ZN3WTF12detachThreadEj(HEAP32[i1 + 28 >> 2] | 0);
 i13 = HEAP32[i1 + 160 >> 2] | 0;
 i12 = i1 + 32 | 0;
 i1 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = 0;
 do {
  if ((i1 | 0) != 0) {
   i12 = i1 | 0;
   if (((tempValue = HEAP32[i12 >> 2] | 0, HEAP32[i12 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN7WebCore14DatabaseThreadD2Ev(i1);
   __ZN3WTF8fastFreeEPv(i1);
  }
 } while (0);
 if ((i13 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore24DatabaseTaskSynchronizer13taskCompletedEv(i13);
 STACKTOP = i2;
 return;
}
function __ZN3WTF9HashTableINS_6RefPtrIN7WebCore15DatabaseBackendEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableINS_6RefPtrIN7WebCore15DatabaseBackendEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6rehashEiPS4_(i2, i8, 0) | 0;
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
 i10 = i4 | 0;
 i4 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 i10 = i12 | 0;
 i19 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = i4;
 do {
  if ((i19 | 0) != 0) {
   i4 = i19 + 4 | 0;
   i10 = i4 | 0;
   if (((tempValue = HEAP32[i10 >> 2] | 0, HEAP32[i10 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
    break;
   }
   i10 = i4 - 4 | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 7](i10);
  }
 } while (0);
 i19 = i2 + 12 | 0;
 i10 = (HEAP32[i19 >> 2] | 0) + 1 | 0;
 HEAP32[i19 >> 2] = i10;
 i19 = i2 + 4 | 0;
 i4 = HEAP32[i19 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i10 << 1 | 0) < (i4 | 0)) {
  i25 = i12;
  i26 = i4;
 } else {
  if ((i4 | 0) == 0) {
   i27 = 8;
  } else {
   i20 = i4 << 1;
   i27 = (i10 * 6 & -1 | 0) < (i20 | 0) ? i4 : i20;
  }
  i20 = __ZN3WTF9HashTableINS_6RefPtrIN7WebCore15DatabaseBackendEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6rehashEiPS4_(i2, i27, i12) | 0;
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
function __ZN3WTF5DequeINSt3__110unique_ptrIN7WebCore12DatabaseTaskENS1_14default_deleteIS4_EEEELj0EE6removeEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) == (i2 | 0)) {
  return;
 }
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 i5 = i4 + (i2 << 2) | 0;
 i6 = i2 + 1 | 0;
 i7 = i4 + (i6 << 2) | 0;
 i8 = i5 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 if ((i9 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 7](i9);
 }
 i9 = i1 | 0;
 i8 = HEAP32[i9 >> 2] | 0;
 if (i8 >>> 0 > i2 >>> 0) {
  i10 = HEAP32[i3 >> 2] | 0;
  i11 = i4 + (i10 << 2) | 0;
  do {
   if ((i2 | 0) == 2147483647) {
    if ((i10 | 0) == (i6 | 0)) {
     break;
    }
    i12 = i11;
    i13 = i4 + ((i11 - i7 >> 2) + 2147483647 << 2) | 0;
    while (1) {
     i12 = i12 - 4 | 0;
     i13 = i13 - 4 | 0;
     i14 = i12 | 0;
     i15 = HEAP32[i14 >> 2] | 0;
     HEAP32[i14 >> 2] = 0;
     HEAP32[i13 >> 2] = i15;
     i15 = HEAP32[i14 >> 2] | 0;
     HEAP32[i14 >> 2] = 0;
     if ((i15 | 0) != 0) {
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 7](i15);
     }
     if ((i12 | 0) == (i7 | 0)) {
      break;
     }
    }
   } else {
    if ((i6 | 0) == (i10 | 0)) {
     break;
    } else {
     i16 = i7;
     i17 = i5;
    }
    while (1) {
     i12 = i16 | 0;
     i13 = HEAP32[i12 >> 2] | 0;
     HEAP32[i12 >> 2] = 0;
     HEAP32[i17 >> 2] = i13;
     i13 = HEAP32[i12 >> 2] | 0;
     HEAP32[i12 >> 2] = 0;
     if ((i13 | 0) != 0) {
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 7](i13);
     }
     i13 = i16 + 4 | 0;
     if ((i13 | 0) == (i11 | 0)) {
      break;
     } else {
      i16 = i13;
      i17 = i17 + 4 | 0;
     }
    }
   }
  } while (0);
  i17 = HEAP32[i1 + 12 >> 2] | 0;
  HEAP32[i3 >> 2] = (((HEAP32[i3 >> 2] | 0) - 1 + i17 | 0) >>> 0) % (i17 >>> 0) & -1;
  return;
 }
 i17 = i4 + (i8 << 2) | 0;
 i3 = i8 + 1 | 0;
 do {
  if ((i8 | 0) == 2147483647) {
   if ((i2 | 0) == 2147483647) {
    break;
   }
   i16 = i17;
   i11 = i4 + (i3 << 2) | 0;
   while (1) {
    i7 = i16 | 0;
    i10 = HEAP32[i7 >> 2] | 0;
    HEAP32[i7 >> 2] = 0;
    HEAP32[i11 >> 2] = i10;
    i10 = HEAP32[i7 >> 2] | 0;
    HEAP32[i7 >> 2] = 0;
    if ((i10 | 0) != 0) {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 7](i10);
    }
    i10 = i16 + 4 | 0;
    if ((i10 | 0) == (i5 | 0)) {
     break;
    } else {
     i16 = i10;
     i11 = i11 + 4 | 0;
    }
   }
  } else {
   if ((i8 | 0) == (i2 | 0)) {
    break;
   }
   i11 = i5;
   i16 = i4 + ((i5 - i17 >> 2) + i3 << 2) | 0;
   while (1) {
    i11 = i11 - 4 | 0;
    i16 = i16 - 4 | 0;
    i10 = i11 | 0;
    i7 = HEAP32[i10 >> 2] | 0;
    HEAP32[i10 >> 2] = 0;
    HEAP32[i16 >> 2] = i7;
    i7 = HEAP32[i10 >> 2] | 0;
    HEAP32[i10 >> 2] = 0;
    if ((i7 | 0) != 0) {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 7](i7);
    }
    if ((i11 | 0) == (i17 | 0)) {
     break;
    }
   }
  }
 } while (0);
 HEAP32[i9 >> 2] = (((HEAP32[i9 >> 2] | 0) + 1 | 0) >>> 0) % ((HEAP32[i1 + 12 >> 2] | 0) >>> 0) & -1;
 return;
}
function __ZN7WebCore14DatabaseThreadD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 __ZN3WTF6OwnPtrIN7WebCore25SQLTransactionCoordinatorEED2Ev(i1 + 156 | 0);
 i2 = HEAP32[i1 + 152 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i2 | 0);
 }
 i2 = HEAP32[i1 + 132 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i1 + 136 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    i5 = HEAP32[i2 + (i4 << 2) >> 2] | 0;
    i6 = i5;
    do {
     if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
      i7 = i5 + 4 | 0;
      i8 = i7 | 0;
      if (((tempValue = HEAP32[i8 >> 2] | 0, HEAP32[i8 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
       break;
      }
      i8 = i7 - 4 | 0;
      if ((i8 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 7](i8);
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
 i2 = i1 + 108 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = HEAP32[i1 + 112 >> 2] | 0;
 i5 = i1 + 116 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i8 = i6 + (i4 << 2) | 0;
 do {
  if (i3 >>> 0 > i4 >>> 0) {
   if ((i4 | 0) == 0) {
    i9 = i6;
    i10 = i3;
   } else {
    i7 = i6;
    while (1) {
     i11 = i7 | 0;
     i12 = HEAP32[i11 >> 2] | 0;
     HEAP32[i11 >> 2] = 0;
     if ((i12 | 0) != 0) {
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 7](i12);
     }
     i7 = i7 + 4 | 0;
     if ((i7 | 0) == (i8 | 0)) {
      break;
     }
    }
    i9 = HEAP32[i5 >> 2] | 0;
    i10 = HEAP32[i2 >> 2] | 0;
   }
   i7 = HEAP32[i1 + 120 >> 2] | 0;
   i12 = i9 + (i7 << 2) | 0;
   if ((i10 | 0) == (i7 | 0)) {
    break;
   }
   i7 = i9 + (i10 << 2) | 0;
   while (1) {
    i11 = i7 | 0;
    i13 = HEAP32[i11 >> 2] | 0;
    HEAP32[i11 >> 2] = 0;
    if ((i13 | 0) != 0) {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 7](i13);
    }
    i7 = i7 + 4 | 0;
    if ((i7 | 0) == (i12 | 0)) {
     break;
    }
   }
  } else {
   if ((i3 | 0) == (i4 | 0)) {
    break;
   }
   i12 = i6 + (i3 << 2) | 0;
   while (1) {
    i7 = i12 | 0;
    i13 = HEAP32[i7 >> 2] | 0;
    HEAP32[i7 >> 2] = 0;
    if ((i13 | 0) != 0) {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 7](i13);
    }
    i12 = i12 + 4 | 0;
    if ((i12 | 0) == (i8 | 0)) {
     break;
    }
   }
  }
 } while (0);
 i8 = HEAP32[i5 >> 2] | 0;
 if ((i8 | 0) != 0) {
  HEAP32[i5 >> 2] = 0;
  HEAP32[i1 + 120 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i8);
 }
 __ZN3WTF15ThreadConditionD1Ev(i1 + 60 | 0);
 __ZN3WTF5MutexD1Ev(i1 + 36 | 0);
 i8 = HEAP32[i1 + 32 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i14 = i1 + 4 | 0;
  __ZN3WTF5MutexD1Ev(i14);
  return;
 }
 i5 = i8 | 0;
 if (((tempValue = HEAP32[i5 >> 2] | 0, HEAP32[i5 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  i14 = i1 + 4 | 0;
  __ZN3WTF5MutexD1Ev(i14);
  return;
 }
 __ZN7WebCore14DatabaseThreadD2Ev(i8);
 __ZN3WTF8fastFreeEPv(i8);
 i14 = i1 + 4 | 0;
 __ZN3WTF5MutexD1Ev(i14);
 return;
}
function __ZN7WebCore14DatabaseThreadD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 __ZN3WTF6OwnPtrIN7WebCore25SQLTransactionCoordinatorEED2Ev(i1 + 156 | 0);
 i2 = HEAP32[i1 + 152 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i2 | 0);
 }
 i2 = HEAP32[i1 + 132 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i1 + 136 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    i5 = HEAP32[i2 + (i4 << 2) >> 2] | 0;
    i6 = i5;
    do {
     if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
      i7 = i5 + 4 | 0;
      i8 = i7 | 0;
      if (((tempValue = HEAP32[i8 >> 2] | 0, HEAP32[i8 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
       break;
      }
      i8 = i7 - 4 | 0;
      if ((i8 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 7](i8);
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
 i2 = i1 + 108 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = HEAP32[i1 + 112 >> 2] | 0;
 i5 = i1 + 116 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i8 = i6 + (i4 << 2) | 0;
 do {
  if (i3 >>> 0 > i4 >>> 0) {
   if ((i4 | 0) == 0) {
    i9 = i6;
    i10 = i3;
   } else {
    i7 = i6;
    while (1) {
     i11 = i7 | 0;
     i12 = HEAP32[i11 >> 2] | 0;
     HEAP32[i11 >> 2] = 0;
     if ((i12 | 0) != 0) {
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 7](i12);
     }
     i7 = i7 + 4 | 0;
     if ((i7 | 0) == (i8 | 0)) {
      break;
     }
    }
    i9 = HEAP32[i5 >> 2] | 0;
    i10 = HEAP32[i2 >> 2] | 0;
   }
   i7 = HEAP32[i1 + 120 >> 2] | 0;
   i12 = i9 + (i7 << 2) | 0;
   if ((i10 | 0) == (i7 | 0)) {
    break;
   }
   i7 = i9 + (i10 << 2) | 0;
   while (1) {
    i11 = i7 | 0;
    i13 = HEAP32[i11 >> 2] | 0;
    HEAP32[i11 >> 2] = 0;
    if ((i13 | 0) != 0) {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 7](i13);
    }
    i7 = i7 + 4 | 0;
    if ((i7 | 0) == (i12 | 0)) {
     break;
    }
   }
  } else {
   if ((i3 | 0) == (i4 | 0)) {
    break;
   }
   i12 = i6 + (i3 << 2) | 0;
   while (1) {
    i7 = i12 | 0;
    i13 = HEAP32[i7 >> 2] | 0;
    HEAP32[i7 >> 2] = 0;
    if ((i13 | 0) != 0) {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 7](i13);
    }
    i12 = i12 + 4 | 0;
    if ((i12 | 0) == (i8 | 0)) {
     break;
    }
   }
  }
 } while (0);
 i8 = HEAP32[i5 >> 2] | 0;
 if ((i8 | 0) != 0) {
  HEAP32[i5 >> 2] = 0;
  HEAP32[i1 + 120 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i8);
 }
 __ZN3WTF15ThreadConditionD1Ev(i1 + 60 | 0);
 __ZN3WTF5MutexD1Ev(i1 + 36 | 0);
 i8 = HEAP32[i1 + 32 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i14 = i1 + 4 | 0;
  __ZN3WTF5MutexD1Ev(i14);
  return;
 }
 i5 = i8 | 0;
 if (((tempValue = HEAP32[i5 >> 2] | 0, HEAP32[i5 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  i14 = i1 + 4 | 0;
  __ZN3WTF5MutexD1Ev(i14);
  return;
 }
 __ZN7WebCore14DatabaseThreadD2Ev(i8);
 __ZN3WTF8fastFreeEPv(i8);
 i14 = i1 + 4 | 0;
 __ZN3WTF5MutexD1Ev(i14);
 return;
}
function __ZN7WebCore14DatabaseThread20recordDatabaseClosedEPNS_15DatabaseBackendE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i3 = i1 + 132 | 0;
 i4 = (i2 | 0) == 0;
 if (!i4) {
  i5 = i2 + 4 | 0;
  tempValue = HEAP32[i5 >> 2] | 0, HEAP32[i5 >> 2] = tempValue + 1, tempValue;
 }
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = HEAP32[i1 + 136 >> 2] | 0;
  i7 = i6 << 2 | 0;
  i8 = 0;
  i9 = i6;
 } else {
  i6 = HEAP32[i1 + 140 >> 2] | 0;
  i10 = i2;
  i11 = i10 + ~(i10 << 15) | 0;
  i10 = (i11 >>> 10 ^ i11) * 9 & -1;
  i11 = i10 >>> 6 ^ i10;
  i10 = i11 + ~(i11 << 11) | 0;
  i11 = i10 >>> 16 ^ i10;
  i10 = i6 & i11;
  i12 = i5 + (i10 << 2) | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  L7 : do {
   if ((i13 | 0) == (i2 | 0)) {
    i14 = i12;
   } else {
    i15 = (i11 >>> 23) + ~i11 | 0;
    i16 = i15 << 12 ^ i15;
    i15 = i16 >>> 7 ^ i16;
    i16 = i15 << 2 ^ i15;
    i15 = i16 >>> 20 ^ i16 | 1;
    i16 = 0;
    i17 = i10;
    i18 = i13;
    while (1) {
     if ((i18 | 0) == 0) {
      i14 = 0;
      break L7;
     }
     i19 = (i16 | 0) == 0 ? i15 : i16;
     i20 = i19 + i17 & i6;
     i21 = i5 + (i20 << 2) | 0;
     i22 = HEAP32[i21 >> 2] | 0;
     if ((i22 | 0) == (i2 | 0)) {
      i14 = i21;
      break;
     } else {
      i16 = i19;
      i17 = i20;
      i18 = i22;
     }
    }
   }
  } while (0);
  i6 = HEAP32[i1 + 136 >> 2] | 0;
  i7 = (i14 | 0) == 0 ? i5 + (i6 << 2) | 0 : i14;
  i8 = i5;
  i9 = i6;
 }
 i6 = i3 | 0;
 i3 = i1 + 136 | 0;
 do {
  if ((i7 | 0) != (i8 + (i9 << 2) | 0)) {
   i5 = i7 | 0;
   i14 = HEAP32[i5 >> 2] | 0;
   do {
    if ((i14 | 0) != 0) {
     i13 = i14 + 4 | 0;
     i10 = i13 | 0;
     if (((tempValue = HEAP32[i10 >> 2] | 0, HEAP32[i10 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
      break;
     }
     i10 = i13 - 4 | 0;
     if ((i10 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 7](i10);
    }
   } while (0);
   HEAP32[i5 >> 2] = -1;
   i14 = i1 + 148 | 0;
   HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
   i14 = i1 + 144 | 0;
   i10 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   HEAP32[i14 >> 2] = i10;
   i14 = HEAP32[i3 >> 2] | 0;
   if (!((i10 * 6 & -1 | 0) < (i14 | 0) & (i14 | 0) > 8)) {
    break;
   }
   __ZN3WTF9HashTableINS_6RefPtrIN7WebCore15DatabaseBackendEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6rehashEiPS4_(i6, (i14 | 0) / 2 & -1, 0) | 0;
  }
 } while (0);
 if (i4) {
  return;
 }
 i4 = i2 + 4 | 0;
 i2 = i4 | 0;
 if (((tempValue = HEAP32[i2 >> 2] | 0, HEAP32[i2 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
  return;
 }
 i2 = i4 - 4 | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 7](i2);
 return;
}
function __ZN3WTF5DequeINSt3__110unique_ptrIN7WebCore12DatabaseTaskENS1_14default_deleteIS4_EEEELj0EE14expandCapacityEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 8 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i5;
 i7 = i3 + 1 + (i3 >>> 2) | 0;
 i8 = i7 >>> 0 > 16 >>> 0 ? i7 : 16;
 if (i8 >>> 0 > 1073741823 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i8 << 2) | 0;
 HEAP32[i2 >> 2] = i7 >>> 2;
 i8 = __ZN3WTF10fastMallocEj(i7) | 0;
 HEAP32[i4 >> 2] = i8;
 i7 = i1 | 0;
 i9 = HEAP32[i7 >> 2] | 0;
 i10 = HEAP32[i1 + 4 >> 2] | 0;
 i1 = i5 + (i10 << 2) | 0;
 do {
  if (i9 >>> 0 > i10 >>> 0) {
   if ((i10 | 0) == 0) {
    i11 = i9;
   } else {
    i12 = i5;
    i13 = i8;
    while (1) {
     i14 = i12 | 0;
     i15 = HEAP32[i14 >> 2] | 0;
     HEAP32[i14 >> 2] = 0;
     HEAP32[i13 >> 2] = i15;
     i15 = HEAP32[i14 >> 2] | 0;
     HEAP32[i14 >> 2] = 0;
     if ((i15 | 0) != 0) {
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 7](i15);
     }
     i15 = i12 + 4 | 0;
     if ((i15 | 0) == (i1 | 0)) {
      break;
     } else {
      i12 = i15;
      i13 = i13 + 4 | 0;
     }
    }
    i11 = HEAP32[i7 >> 2] | 0;
   }
   i13 = i11 - i3 + (HEAP32[i2 >> 2] | 0) | 0;
   i12 = i5 + (i3 << 2) | 0;
   if ((i11 | 0) != (i3 | 0)) {
    i15 = i5 + (i11 << 2) | 0;
    i14 = (HEAP32[i4 >> 2] | 0) + (i13 << 2) | 0;
    while (1) {
     i16 = i15 | 0;
     i17 = HEAP32[i16 >> 2] | 0;
     HEAP32[i16 >> 2] = 0;
     HEAP32[i14 >> 2] = i17;
     i17 = HEAP32[i16 >> 2] | 0;
     HEAP32[i16 >> 2] = 0;
     if ((i17 | 0) != 0) {
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 4 >> 2] & 7](i17);
     }
     i17 = i15 + 4 | 0;
     if ((i17 | 0) == (i12 | 0)) {
      break;
     } else {
      i15 = i17;
      i14 = i14 + 4 | 0;
     }
    }
   }
   HEAP32[i7 >> 2] = i13;
  } else {
   if ((i9 | 0) == (i10 | 0)) {
    break;
   }
   i14 = i5 + (i9 << 2) | 0;
   i15 = i8 + (i9 << 2) | 0;
   while (1) {
    i12 = i14 | 0;
    i17 = HEAP32[i12 >> 2] | 0;
    HEAP32[i12 >> 2] = 0;
    HEAP32[i15 >> 2] = i17;
    i17 = HEAP32[i12 >> 2] | 0;
    HEAP32[i12 >> 2] = 0;
    if ((i17 | 0) != 0) {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 4 >> 2] & 7](i17);
    }
    i17 = i14 + 4 | 0;
    if ((i17 | 0) == (i1 | 0)) {
     break;
    } else {
     i14 = i17;
     i15 = i15 + 4 | 0;
    }
   }
  }
 } while (0);
 if ((i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i2 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i6);
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
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 7](i11);
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
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 7](i8);
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
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 7](i5);
   }
  } while (0);
  i2 = i2 + 4 | 0;
  if ((i2 | 0) == (i1 | 0)) {
   break;
  }
 }
 return;
}
function __ZN3WTF9HashTableINS_6RefPtrIN7WebCore15DatabaseBackendEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E8reinsertEOS4_(i1, i2) {
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
   i11 = i9 + 4 | 0;
   i3 = i11 | 0;
   if (((tempValue = HEAP32[i3 >> 2] | 0, HEAP32[i3 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
    break;
   }
   i3 = i11 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 7](i3);
  }
 } while (0);
 i9 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i10 >> 2] = i9;
 return i18 | 0;
}
function __ZN3WTF9HashTableINS_6RefPtrIN7WebCore15DatabaseBackendEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6rehashEiPS4_(i1, i2, i3) {
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
   i6 = __ZN3WTF9HashTableINS_6RefPtrIN7WebCore15DatabaseBackendEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E8reinsertEOS4_(i1, i2) | 0;
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
    i10 = i1 + 4 | 0;
    i3 = i10 | 0;
    if (((tempValue = HEAP32[i3 >> 2] | 0, HEAP32[i3 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
     break;
    }
    i3 = i10 - 4 | 0;
    if ((i3 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 7](i3);
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
function __ZN3WTF12MessageQueueIN7WebCore12DatabaseTaskEE33waitForMessageFilteredWithTimeoutIZNS3_14waitForMessageEvEUlRKS2_E_EENSt3__110unique_ptrIS2_NS8_14default_deleteIS2_EEEERNS_22MessageQueueWaitResultEOT_d(i1, i2, i3, i4, d5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i4 = i2 | 0;
 i6 = (i2 | 0) == 0;
 if (!i6) {
  __ZN3WTF5Mutex4lockEv(i4);
 }
 i7 = i2 + 72 | 0;
 i8 = i2 + 76 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = i7 | 0;
 i11 = i2 + 92 | 0;
 i12 = HEAP8[i11] | 0;
 L4 : do {
  if ((i12 & 1) == 0) {
   i13 = i2 + 24 | 0;
   i14 = i12;
   i15 = i9;
   while (1) {
    i16 = HEAP32[i10 >> 2] | 0;
    if ((i16 | 0) != (i15 | 0)) {
     i17 = i16;
     i18 = 0;
     i19 = i14;
     break L4;
    }
    i16 = (__ZN3WTF15ThreadCondition9timedWaitERNS_5MutexEd(i13, i4, d5) | 0) ^ 1;
    i20 = HEAP8[i11] | 0;
    if ((i20 & 1) != 0 | i16) {
     i17 = i15;
     i18 = i16;
     i19 = i20;
     break L4;
    }
    i14 = i20;
    i15 = HEAP32[i8 >> 2] | 0;
   }
  } else {
   i17 = i9;
   i18 = 0;
   i19 = i12;
  }
 } while (0);
 do {
  if ((i19 & 1) == 0) {
   if (i18) {
    HEAP32[i3 >> 2] = 1;
    HEAP32[i1 >> 2] = 0;
    break;
   } else {
    i12 = (HEAP32[i2 + 80 >> 2] | 0) + (i17 << 2) | 0;
    i9 = HEAP32[i12 >> 2] | 0;
    HEAP32[i12 >> 2] = 0;
    __ZN3WTF5DequeINSt3__110unique_ptrIN7WebCore12DatabaseTaskENS1_14default_deleteIS4_EEEELj0EE6removeEj(i7, i17);
    HEAP32[i3 >> 2] = 2;
    HEAP32[i1 >> 2] = i9;
    break;
   }
  } else {
   HEAP32[i3 >> 2] = 0;
   HEAP32[i1 >> 2] = 0;
  }
 } while (0);
 if (i6) {
  return;
 }
 __ZN3WTF5Mutex6unlockEv(i4);
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 7](i4);
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
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 7](i8);
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
function __ZN3WTF12MessageQueueIN7WebCore12DatabaseTaskEE7prependENSt3__110unique_ptrIS2_NS4_14default_deleteIS2_EEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = i1 | 0;
 i4 = (i1 | 0) == 0;
 if (!i4) {
  __ZN3WTF5Mutex4lockEv(i3);
 }
 i5 = i1 + 72 | 0;
 i6 = i5 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = HEAP32[i1 + 76 >> 2] | 0;
 do {
  if ((i7 | 0) == 0) {
   i9 = HEAP32[i1 + 84 >> 2] | 0;
   if ((i8 | 0) == 0) {
    if ((i9 | 0) == 0) {
     i10 = 8;
     break;
    } else {
     i11 = i9;
     break;
    }
   } else {
    if ((i8 | 0) == (i9 - 1 | 0)) {
     i10 = 8;
     break;
    } else {
     i11 = i9;
     break;
    }
   }
  } else {
   if ((i8 + 1 | 0) == (i7 | 0)) {
    i10 = 8;
   } else {
    i11 = i7;
   }
  }
 } while (0);
 do {
  if ((i10 | 0) == 8) {
   __ZN3WTF5DequeINSt3__110unique_ptrIN7WebCore12DatabaseTaskENS1_14default_deleteIS4_EEEELj0EE14expandCapacityEv(i5);
   i7 = HEAP32[i6 >> 2] | 0;
   if ((i7 | 0) != 0) {
    i11 = i7;
    break;
   }
   i11 = HEAP32[i1 + 84 >> 2] | 0;
  }
 } while (0);
 i5 = i11 - 1 | 0;
 HEAP32[i6 >> 2] = i5;
 i6 = HEAP32[i1 + 80 >> 2] | 0;
 i11 = i2 | 0;
 i2 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i6 + (i5 << 2) >> 2] = i2;
 __ZN3WTF15ThreadCondition6signalEv(i1 + 24 | 0);
 if (i4) {
  return;
 }
 __ZN3WTF5Mutex6unlockEv(i3);
 return;
}
function __ZN3WTF12MessageQueueIN7WebCore12DatabaseTaskEE6appendENSt3__110unique_ptrIS2_NS4_14default_deleteIS2_EEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = i1 | 0;
 i4 = (i1 | 0) == 0;
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
  __ZN3WTF5DequeINSt3__110unique_ptrIN7WebCore12DatabaseTaskENS1_14default_deleteIS4_EEEELj0EE14expandCapacityEv(i5);
  i11 = HEAP32[i7 >> 2] | 0;
 }
 i5 = HEAP32[i1 + 80 >> 2] | 0;
 i10 = i2 | 0;
 i2 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i5 + (i11 << 2) >> 2] = i2;
 i2 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = (i2 | 0) == ((HEAP32[i1 + 84 >> 2] | 0) - 1 | 0) ? 0 : i2 + 1 | 0;
 __ZN3WTF15ThreadCondition6signalEv(i1 + 24 | 0);
 if (i4) {
  return;
 }
 __ZN3WTF5Mutex6unlockEv(i3);
 return;
}
function __ZN7WebCore14DatabaseThread23unscheduleDatabaseTasksEPNS_15DatabaseBackendE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = i1 + 36 | 0;
 i4 = i3 | 0;
 i5 = (i3 | 0) == 0;
 if (!i5) {
  __ZN3WTF5Mutex4lockEv(i4);
 }
 i3 = i1 + 108 | 0;
 i6 = i1 + 112 | 0;
 i7 = i3 | 0;
 i8 = i1 + 116 | 0;
 i9 = i1 + 120 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 i10 = HEAP32[i7 >> 2] | 0;
 L4 : do {
  if ((i10 | 0) != (i1 | 0)) {
   i11 = i1;
   i12 = i10;
   while (1) {
    i13 = HEAP32[i8 >> 2] | 0;
    i14 = i12;
    while (1) {
     if ((HEAP32[(HEAP32[i13 + (i14 << 2) >> 2] | 0) + 4 >> 2] | 0) == (i2 | 0)) {
      break;
     }
     i15 = (i14 | 0) == ((HEAP32[i9 >> 2] | 0) - 1 | 0) ? 0 : i14 + 1 | 0;
     if ((i15 | 0) == (i11 | 0)) {
      break L4;
     } else {
      i14 = i15;
     }
    }
    if ((i14 | 0) == (i11 | 0)) {
     break L4;
    }
    __ZN3WTF5DequeINSt3__110unique_ptrIN7WebCore12DatabaseTaskENS1_14default_deleteIS4_EEEELj0EE6removeEj(i3, i14);
    i11 = HEAP32[i6 >> 2] | 0;
    i12 = HEAP32[i7 >> 2] | 0;
    if ((i12 | 0) == (i11 | 0)) {
     break;
    }
   }
  }
 } while (0);
 if (i5) {
  return;
 }
 __ZN3WTF5Mutex6unlockEv(i4);
 return;
}
function __ZN7WebCore14DatabaseThreadC2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 | 0;
 HEAP32[i4 >> 2] = 1;
 __ZN3WTF5MutexC1Ev(i1 + 4 | 0);
 HEAP32[i1 + 28 >> 2] = 0;
 i5 = i1 + 32 | 0;
 HEAP32[i5 >> 2] = 0;
 __ZN3WTF5MutexC1Ev(i1 + 36 | 0);
 __ZN3WTF15ThreadConditionC1Ev(i1 + 60 | 0);
 _memset(i1 + 108 | 0, 0, 21) | 0;
 _memset(i1 + 132 | 0, 0, 20) | 0;
 HEAP32[i1 + 152 >> 2] = __ZN3WTF10fastMallocEj(1) | 0;
 i6 = __ZN3WTF10fastMallocEj(24) | 0;
 __ZN7WebCore25SQLTransactionCoordinatorC1Ev(i6);
 HEAP32[i3 >> 2] = 0;
 HEAP32[i1 + 156 >> 2] = i6;
 __ZN3WTF10PassOwnPtrIN7WebCore25SQLTransactionCoordinatorEED2Ev(i3);
 HEAP32[i1 + 160 >> 2] = 0;
 if ((i1 | 0) != 0) {
  tempValue = HEAP32[i4 >> 2] | 0, HEAP32[i4 >> 2] = tempValue + 1, tempValue;
 }
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i1;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i1 = i4 | 0;
 if (((tempValue = HEAP32[i1 >> 2] | 0, HEAP32[i1 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore14DatabaseThreadD2Ev(i4);
 __ZN3WTF8fastFreeEPv(i4);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore14DatabaseThreadC1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 | 0;
 HEAP32[i4 >> 2] = 1;
 __ZN3WTF5MutexC1Ev(i1 + 4 | 0);
 HEAP32[i1 + 28 >> 2] = 0;
 i5 = i1 + 32 | 0;
 HEAP32[i5 >> 2] = 0;
 __ZN3WTF5MutexC1Ev(i1 + 36 | 0);
 __ZN3WTF15ThreadConditionC1Ev(i1 + 60 | 0);
 _memset(i1 + 108 | 0, 0, 21) | 0;
 _memset(i1 + 132 | 0, 0, 20) | 0;
 HEAP32[i1 + 152 >> 2] = __ZN3WTF10fastMallocEj(1) | 0;
 i6 = __ZN3WTF10fastMallocEj(24) | 0;
 __ZN7WebCore25SQLTransactionCoordinatorC1Ev(i6);
 HEAP32[i3 >> 2] = 0;
 HEAP32[i1 + 156 >> 2] = i6;
 __ZN3WTF10PassOwnPtrIN7WebCore25SQLTransactionCoordinatorEED2Ev(i3);
 HEAP32[i1 + 160 >> 2] = 0;
 if ((i1 | 0) != 0) {
  tempValue = HEAP32[i4 >> 2] | 0, HEAP32[i4 >> 2] = tempValue + 1, tempValue;
 }
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i1;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i1 = i4 | 0;
 if (((tempValue = HEAP32[i1 >> 2] | 0, HEAP32[i1 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore14DatabaseThreadD2Ev(i4);
 __ZN3WTF8fastFreeEPv(i4);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore14DatabaseThread18recordDatabaseOpenEPNS_15DatabaseBackendE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i6 = i2 + 4 | 0;
  tempValue = HEAP32[i6 >> 2] | 0, HEAP32[i6 >> 2] = tempValue + 1, tempValue;
 }
 __ZN3WTF9HashTableINS_6RefPtrIN7WebCore15DatabaseBackendEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_(i3 + 8 | 0, i1 + 132 | 0, i4, i4);
 i4 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = i4 + 4 | 0;
 i4 = i5 | 0;
 if (((tempValue = HEAP32[i4 >> 2] | 0, HEAP32[i4 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
  STACKTOP = i3;
  return;
 }
 i4 = i5 - 4 | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 7](i4);
 STACKTOP = i3;
 return;
}
function __ZN3WTF10PassOwnPtrIN7WebCore25SQLTransactionCoordinatorEED2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) != 0) {
  i3 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    i5 = i1 + (i4 * 48 & -1) | 0;
    do {
     if ((HEAP32[i5 >> 2] | 0) != -1) {
      __ZN7WebCore25SQLTransactionCoordinator16CoordinationInfoD2Ev(i1 + (i4 * 48 & -1) + 4 | 0);
      i6 = HEAP32[i5 >> 2] | 0;
      if ((i6 | 0) == 0) {
       break;
      }
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
    i4 = i4 + 1 | 0;
    if ((i4 | 0) >= (i3 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i1);
 }
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN3WTF6OwnPtrIN7WebCore25SQLTransactionCoordinatorEED2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) != 0) {
  i3 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    i5 = i1 + (i4 * 48 & -1) | 0;
    do {
     if ((HEAP32[i5 >> 2] | 0) != -1) {
      __ZN7WebCore25SQLTransactionCoordinator16CoordinationInfoD2Ev(i1 + (i4 * 48 & -1) + 4 | 0);
      i6 = HEAP32[i5 >> 2] | 0;
      if ((i6 | 0) == 0) {
       break;
      }
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
    i4 = i4 + 1 | 0;
    if ((i4 | 0) >= (i3 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i1);
 }
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore14DatabaseThread21scheduleImmediateTaskENSt3__110unique_ptrINS_12DatabaseTaskENS1_14default_deleteIS3_EEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i2 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = i2;
 __ZN3WTF12MessageQueueIN7WebCore12DatabaseTaskEE7prependENSt3__110unique_ptrIS2_NS4_14default_deleteIS2_EEEE(i1 + 36 | 0, i4);
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 7](i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore14DatabaseThread12scheduleTaskENSt3__110unique_ptrINS_12DatabaseTaskENS1_14default_deleteIS3_EEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i2 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = i2;
 __ZN3WTF12MessageQueueIN7WebCore12DatabaseTaskEE6appendENSt3__110unique_ptrIS2_NS4_14default_deleteIS2_EEEE(i1 + 36 | 0, i4);
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 7](i4);
 STACKTOP = i3;
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
function __ZN7WebCore14DatabaseThread5startEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 4 | 0;
 i3 = (i2 | 0) == 0;
 if (!i3) {
  __ZN3WTF5Mutex4lockEv(i2);
 }
 i4 = i1 + 28 | 0;
 if ((HEAP32[i4 >> 2] | 0) == 0) {
  i5 = __ZN3WTF12createThreadEPFvPvES0_PKc(F_BASE_vi + 6 | 0, i1, H_BASE + 8 | 0) | 0;
  HEAP32[i4 >> 2] = i5;
  i6 = (i5 | 0) != 0;
 } else {
  i6 = 1;
 }
 if (i3) {
  return i6 | 0;
 }
 __ZN3WTF5Mutex6unlockEv(i2);
 return i6 | 0;
}
function __ZN7WebCore14DatabaseThread18requestTerminationEPNS_24DatabaseTaskSynchronizerE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 HEAP32[i1 + 160 >> 2] = i2;
 i2 = i1 + 36 | 0;
 i3 = i2 | 0;
 if ((i2 | 0) == 0) {
  HEAP8[92] = 1;
  __ZN3WTF15ThreadCondition9broadcastEv(24);
  return;
 } else {
  __ZN3WTF5Mutex4lockEv(i3);
  HEAP8[i1 + 128 | 0] = 1;
  __ZN3WTF15ThreadCondition9broadcastEv(i1 + 60 | 0);
  __ZN3WTF5Mutex6unlockEv(i3);
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
function __ZNK7WebCore14DatabaseThread20terminationRequestedEPNS_24DatabaseTaskSynchronizerE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i2 = i1 + 36 | 0;
 i3 = i2 | 0;
 if ((i2 | 0) == 0) {
  i4 = abort(92) | 0;
 } else {
  __ZN3WTF5Mutex4lockEv(i3);
  i2 = HEAP8[i1 + 128 | 0] | 0;
  __ZN3WTF5Mutex6unlockEv(i3);
  i4 = i2;
 }
 return (i4 & 1) != 0 | 0;
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
function __ZN7WebCore14DatabaseThread19databaseThreadStartEPv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore14DatabaseThread14databaseThreadEv(i1);
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
  var FUNCTION_TABLE_vi = [b3,b3,__ZN7WebCore14DatabaseThreadC2Ev,b3,__ZN7WebCore14DatabaseThreadD2Ev,b3,__ZN7WebCore14DatabaseThread19databaseThreadStartEPv,b3];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN3WTF10PassOwnPtrIN7WebCore25SQLTransactionCoordinatorEED2Ev","__ZN7WebCore25SQLTransactionCoordinator16CoordinationInfoD2Ev","__ZN7WebCore14DatabaseThread21scheduleImmediateTaskENSt3__110unique_ptrINS_12DatabaseTaskENS1_14default_deleteIS3_EEEE","__ZN3WTF5DequeINS_6RefPtrIN7WebCore21SQLTransactionBackendEEELj0EE10destroyAllEv","__ZN7WebCore14DatabaseThreadD2Ev","_memset","__ZN3WTF12MessageQueueIN7WebCore12DatabaseTaskEE33waitForMessageFilteredWithTimeoutIZNS3_14waitForMessageEvEUlRKS2_E_EENSt3__110unique_ptrIS2_NS8_14default_deleteIS2_EEEERNS_22MessageQueueWaitResultEOT_d","__ZN7WebCore14DatabaseThread12scheduleTaskENSt3__110unique_ptrINS_12DatabaseTaskENS1_14default_deleteIS3_EEEE","__ZNK7WebCore14DatabaseThread20terminationRequestedEPNS_24DatabaseTaskSynchronizerE","__ZN7WebCore14DatabaseThreadC2Ev","__ZN3WTF9HashTableINS_6RefPtrIN7WebCore15DatabaseBackendEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6rehashEiPS4_","_memcpy","__ZN3WTF12MessageQueueIN7WebCore12DatabaseTaskEE7prependENSt3__110unique_ptrIS2_NS4_14default_deleteIS2_EEEE","__ZN3WTF9HashTableINS_6RefPtrIN7WebCore15DatabaseBackendEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_","__ZN3WTF12MessageQueueIN7WebCore12DatabaseTaskEE6appendENSt3__110unique_ptrIS2_NS4_14default_deleteIS2_EEEE","__ZN7WebCore14DatabaseThread23unscheduleDatabaseTasksEPNS_15DatabaseBackendE","__ZN3WTF9HashTableINS_6RefPtrIN7WebCore15DatabaseBackendEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E8reinsertEOS4_","__ZN7WebCore14DatabaseThread19databaseThreadStartEPv","__ZN7WebCore14DatabaseThread18requestTerminationEPNS_24DatabaseTaskSynchronizerE","__ZN7WebCore14DatabaseThread18recordDatabaseOpenEPNS_15DatabaseBackendE","__ZN3WTF5DequeINSt3__110unique_ptrIN7WebCore12DatabaseTaskENS1_14default_deleteIS4_EEEELj0EE6removeEj","__ZN7WebCore14DatabaseThread20recordDatabaseClosedEPNS_15DatabaseBackendE","__ZN7WebCore14DatabaseThread14databaseThreadEv","__ZN7WebCore14DatabaseThread5startEv","__ZN3WTF6OwnPtrIN7WebCore25SQLTransactionCoordinatorEED2Ev","__ZN3WTF5DequeINSt3__110unique_ptrIN7WebCore12DatabaseTaskENS1_14default_deleteIS4_EEEELj0EE14expandCapacityEv"]

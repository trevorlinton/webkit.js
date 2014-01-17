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
H_BASE = parentModule["_malloc"](448 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 448;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore14SQLTransactionC1EPNS_8DatabaseEN3WTF10PassRefPtrINS_22SQLTransactionCallbackEEENS4_INS_12VoidCallbackEEENS4_INS_27SQLTransactionErrorCallbackEEEb;
/* memory initializer */ allocate([116,104,101,32,115,116,97,116,101,109,101,110,116,32,99,97,108,108,98,97,99,107,32,114,97,105,115,101,100,32,97,110,32,101,120,99,101,112,116,105,111,110,32,111,114,32,115,116,97,116,101,109,101,110,116,32,101,114,114,111,114,32,99,97,108,108,98,97,99,107,32,100,105,100,32,110,111,116,32,114,101,116,117,114,110,32,102,97,108,115,101,0,0,0,0,0,116,104,101,32,83,81,76,84,114,97,110,115,97,99,116,105,111,110,67,97,108,108,98,97,99,107,32,119,97,115,32,110,117,108,108,32,111,114,32,116,104,114,101,119,32,97,110,32,101,120,99,101,112,116,105,111,110,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,244,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
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
  var __ZTVN7WebCore18SQLCallbackWrapperINS_12VoidCallbackEE15SafeReleaseTaskE=(H_BASE+336)|0;
  var __ZTVN7WebCore18SQLCallbackWrapperINS_22SQLTransactionCallbackEE15SafeReleaseTaskE=(H_BASE+304)|0;
  var __ZTVN7WebCore18SQLCallbackWrapperINS_27SQLTransactionErrorCallbackEE15SafeReleaseTaskE=(H_BASE+272)|0;
  var __ZTVN7WebCore14SQLTransactionE=(H_BASE+368)|0;
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
function __ZN7WebCore14SQLTransaction31deliverTransactionErrorCallbackEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 92 | 0;
 i5 = i4 | 0;
 i6 = (i4 | 0) == 0;
 if (!i6) {
  __ZN3WTF5Mutex4lockEv(i5);
 }
 i7 = i1 + 120 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 if ((i8 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 92 >> 2] & 31](i8);
 }
 i8 = i1 + 116 | 0;
 i7 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 if (!i6) {
  __ZN3WTF5Mutex6unlockEv(i5);
 }
 if ((i7 | 0) == 0) {
  __ZN7WebCore18SQLCallbackWrapperINS_22SQLTransactionCallbackEE5clearEv(i1 + 28 | 0);
  __ZN7WebCore18SQLCallbackWrapperINS_12VoidCallbackEE5clearEv(i1 + 60 | 0);
  __ZN7WebCore18SQLCallbackWrapperINS_27SQLTransactionErrorCallbackEE5clearEv(i4);
  STACKTOP = i2;
  return 7;
 }
 i5 = i1 + 128 | 0;
 do {
  if ((HEAP32[i5 >> 2] | 0) == 0) {
   i6 = HEAP32[i1 + 24 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i6 >> 2] | 0) + 12 >> 2] & 15](i3, i6);
   i6 = i3 | 0;
   i8 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = 0;
   i9 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = i8;
   do {
    if ((i9 | 0) != 0) {
     i8 = i9 | 0;
     if (((tempValue = HEAP32[i8 >> 2] | 0, HEAP32[i8 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
      break;
     }
     i8 = HEAP32[i9 + 8 >> 2] | 0;
     do {
      if ((i8 | 0) != 0) {
       i10 = i8 | 0;
       i11 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
       if ((i11 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i8);
        break;
       } else {
        HEAP32[i10 >> 2] = i11;
        break;
       }
      }
     } while (0);
     __ZN3WTF8fastFreeEPv(i9);
    }
   } while (0);
   i9 = HEAP32[i6 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   i8 = i9 | 0;
   if (((tempValue = HEAP32[i8 >> 2] | 0, HEAP32[i8 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   i8 = HEAP32[i9 + 8 >> 2] | 0;
   do {
    if ((i8 | 0) != 0) {
     i11 = i8 | 0;
     i10 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
     if ((i10 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i8);
      break;
     } else {
      HEAP32[i11 >> 2] = i10;
      break;
     }
    }
   } while (0);
   __ZN3WTF8fastFreeEPv(i9);
  }
 } while (0);
 FUNCTION_TABLE_iii[HEAP32[(HEAP32[i7 >> 2] | 0) + 8 >> 2] & 1](i7, HEAP32[i5 >> 2] | 0) | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 | 0;
   if (((tempValue = HEAP32[i5 >> 2] | 0, HEAP32[i5 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   i5 = HEAP32[i3 + 8 >> 2] | 0;
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
   __ZN3WTF8fastFreeEPv(i3);
  }
 } while (0);
 __ZN7WebCore18SQLCallbackWrapperINS_22SQLTransactionCallbackEE5clearEv(i1 + 28 | 0);
 __ZN7WebCore18SQLCallbackWrapperINS_12VoidCallbackEE5clearEv(i1 + 60 | 0);
 __ZN7WebCore18SQLCallbackWrapperINS_27SQLTransactionErrorCallbackEE5clearEv(i4);
 i4 = i7 + 4 | 0;
 i7 = i4 | 0;
 if (((tempValue = HEAP32[i7 >> 2] | 0, HEAP32[i7 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
  STACKTOP = i2;
  return 7;
 }
 i7 = i4 - 4 | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i2;
  return 7;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 31](i7);
 STACKTOP = i2;
 return 7;
}
function __ZN7WebCore14SQLTransactionD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 HEAP32[i1 >> 2] = H_BASE + 376;
 HEAP32[i1 + 12 >> 2] = H_BASE + 416;
 i2 = HEAP32[i1 + 128 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   if (((tempValue = HEAP32[i3 >> 2] | 0, HEAP32[i3 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   i3 = HEAP32[i2 + 8 >> 2] | 0;
   do {
    if ((i3 | 0) != 0) {
     i4 = i3 | 0;
     i5 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
     if ((i5 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i3);
      break;
     } else {
      HEAP32[i4 >> 2] = i5;
      break;
     }
    }
   } while (0);
   __ZN3WTF8fastFreeEPv(i2);
  }
 } while (0);
 i2 = i1 + 92 | 0;
 __ZN7WebCore18SQLCallbackWrapperINS_27SQLTransactionErrorCallbackEE5clearEv(i2);
 i3 = HEAP32[i1 + 120 >> 2] | 0;
 if ((i3 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 92 >> 2] & 31](i3);
 }
 i3 = HEAP32[i1 + 116 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 + 4 | 0;
   i4 = i5 | 0;
   if (((tempValue = HEAP32[i4 >> 2] | 0, HEAP32[i4 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
    break;
   }
   i4 = i5 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 31](i4);
  }
 } while (0);
 __ZN3WTF5MutexD1Ev(i2 | 0);
 i2 = i1 + 60 | 0;
 __ZN7WebCore18SQLCallbackWrapperINS_12VoidCallbackEE5clearEv(i2);
 i3 = HEAP32[i1 + 88 >> 2] | 0;
 if ((i3 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 92 >> 2] & 31](i3);
 }
 i3 = HEAP32[i1 + 84 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 + 4 | 0;
   i5 = i4 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i5 >> 2] = i6;
    break;
   }
   i6 = i4 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
  }
 } while (0);
 __ZN3WTF5MutexD1Ev(i2 | 0);
 i2 = i1 + 28 | 0;
 __ZN7WebCore18SQLCallbackWrapperINS_22SQLTransactionCallbackEE5clearEv(i2);
 i3 = HEAP32[i1 + 56 >> 2] | 0;
 if ((i3 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 92 >> 2] & 31](i3);
 }
 i3 = HEAP32[i1 + 52 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i6 = i3 + 4 | 0;
   i4 = i6 | 0;
   if (((tempValue = HEAP32[i4 >> 2] | 0, HEAP32[i4 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
    break;
   }
   i4 = i6 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 31](i4);
  }
 } while (0);
 __ZN3WTF5MutexD1Ev(i2 | 0);
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 4 | 0;
   i4 = i3 | 0;
   if (((tempValue = HEAP32[i4 >> 2] | 0, HEAP32[i4 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
    break;
   }
   i4 = i3 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 31](i4);
  }
 } while (0);
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 4 | 0;
 i2 = i1 | 0;
 if (((tempValue = HEAP32[i2 >> 2] | 0, HEAP32[i2 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
  return;
 }
 i2 = i1 - 4 | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 31](i2);
 return;
}
function __ZN7WebCore14SQLTransaction10executeSQLERKN3WTF6StringERKNS1_6VectorINS_8SQLValueELj0ENS1_15CrashOnOverflowEEENS1_10PassRefPtrINS_20SQLStatementCallbackEEENSB_INS_25SQLStatementErrorCallbackEEERi(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i7 + 16 | 0;
 i11 = i7 + 24 | 0;
 do {
  if ((HEAP8[i1 + 124 | 0] & 1) != 0) {
   i12 = i1 + 20 | 0;
   i13 = HEAP32[i12 >> 2] | 0;
   if ((HEAP8[i13 + 44 | 0] & 1) == 0) {
    break;
   }
   if (__ZNK7WebCore15DatabaseContext19allowDatabaseAccessEv(HEAP32[i13 + 216 >> 2] | 0) | 0) {
    i14 = (HEAP8[i1 + 132 | 0] & 1) == 0 ? 0 : 2;
   } else {
    i14 = 4;
   }
   i13 = HEAP32[i12 >> 2] | 0;
   i12 = i9 | 0;
   i15 = i4 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   HEAP32[i15 >> 2] = 0;
   HEAP32[i12 >> 2] = i16;
   i16 = i10 | 0;
   i15 = i5 | 0;
   i17 = HEAP32[i15 >> 2] | 0;
   HEAP32[i15 >> 2] = 0;
   HEAP32[i16 >> 2] = i17;
   __ZN7WebCore12SQLStatement6createEPNS_8DatabaseEN3WTF10PassRefPtrINS_20SQLStatementCallbackEEENS4_INS_25SQLStatementErrorCallbackEEE(i8, i13, i9, i10);
   i13 = i8 | 0;
   i17 = HEAP32[i13 >> 2] | 0;
   HEAP32[i13 >> 2] = 0;
   i13 = HEAP32[i16 >> 2] | 0;
   do {
    if ((i13 | 0) != 0) {
     i16 = i13 + 4 | 0;
     i15 = i16 | 0;
     if (((tempValue = HEAP32[i15 >> 2] | 0, HEAP32[i15 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
      break;
     }
     i15 = i16 - 4 | 0;
     if ((i15 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 31](i15);
    }
   } while (0);
   i13 = HEAP32[i12 >> 2] | 0;
   do {
    if ((i13 | 0) != 0) {
     i15 = i13 + 4 | 0;
     i16 = i15 | 0;
     if (((tempValue = HEAP32[i16 >> 2] | 0, HEAP32[i16 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
      break;
     }
     i16 = i15 - 4 | 0;
     if ((i16 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 31](i16);
    }
   } while (0);
   i13 = HEAP32[i1 + 24 >> 2] | 0;
   i12 = HEAP32[(HEAP32[i13 >> 2] | 0) + 24 >> 2] | 0;
   i16 = i11 | 0;
   HEAP32[i16 >> 2] = i17;
   FUNCTION_TABLE_viiiii[i12 & 1](i13, i11, i2, i3, i14);
   i13 = HEAP32[i16 >> 2] | 0;
   if ((i13 | 0) == 0) {
    STACKTOP = i7;
    return;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 31](i13);
   STACKTOP = i7;
   return;
  }
 } while (0);
 HEAP32[i6 >> 2] = 11;
 STACKTOP = i7;
 return;
}
function __ZN7WebCore14SQLTransaction26deliverTransactionCallbackEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 28 | 0;
 i5 = i4 | 0;
 i6 = (i4 | 0) == 0;
 if (!i6) {
  __ZN3WTF5Mutex4lockEv(i5);
 }
 i4 = i1 + 56 | 0;
 i7 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 if ((i7 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 92 >> 2] & 31](i7);
 }
 i7 = i1 + 52 | 0;
 i4 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 if (!i6) {
  __ZN3WTF5Mutex6unlockEv(i5);
 }
 if ((i4 | 0) == 0) {
  i8 = 4;
  STACKTOP = i2;
  return i8 | 0;
 }
 i5 = i1 + 124 | 0;
 HEAP8[i5] = 1;
 i6 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] & 1](i4, i1) | 0;
 HEAP8[i5] = 0;
 do {
  if (i6) {
   i9 = 4;
  } else {
   __ZN3WTF6StringC1EPKc(i3, H_BASE + 104 | 0);
   i5 = __ZN3WTF10fastMallocEj(12) | 0;
   HEAP32[i5 >> 2] = 1;
   HEAP32[i5 + 4 >> 2] = 0;
   __ZNKR3WTF6String12isolatedCopyEv(i5 + 8 | 0, i3);
   i7 = i1 + 128 | 0;
   i10 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = i5;
   do {
    if ((i10 | 0) != 0) {
     i5 = i10 | 0;
     if (((tempValue = HEAP32[i5 >> 2] | 0, HEAP32[i5 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
      break;
     }
     i5 = HEAP32[i10 + 8 >> 2] | 0;
     do {
      if ((i5 | 0) != 0) {
       i7 = i5 | 0;
       i11 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
       if ((i11 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i5);
        break;
       } else {
        HEAP32[i7 >> 2] = i11;
        break;
       }
      }
     } while (0);
     __ZN3WTF8fastFreeEPv(i10);
    }
   } while (0);
   i10 = HEAP32[i3 >> 2] | 0;
   if ((i10 | 0) == 0) {
    i9 = 9;
    break;
   }
   i5 = i10 | 0;
   i11 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    i9 = 9;
    break;
   } else {
    HEAP32[i5 >> 2] = i11;
    i9 = 9;
    break;
   }
  }
 } while (0);
 i3 = i4 + 4 | 0;
 i4 = i3 | 0;
 if (((tempValue = HEAP32[i4 >> 2] | 0, HEAP32[i4 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
  i8 = i9;
  STACKTOP = i2;
  return i8 | 0;
 }
 i4 = i3 - 4 | 0;
 if ((i4 | 0) == 0) {
  i8 = i9;
  STACKTOP = i2;
  return i8 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 31](i4);
 i8 = i9;
 STACKTOP = i2;
 return i8 | 0;
}
function __ZN7WebCore14SQLTransaction6createEPNS_8DatabaseEN3WTF10PassRefPtrINS_22SQLTransactionCallbackEEENS4_INS_12VoidCallbackEEENS4_INS_27SQLTransactionErrorCallbackEEEb(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i7 + 16 | 0;
 i11 = __ZN3WTF10fastMallocEj(136) | 0;
 i12 = i8 | 0;
 i13 = i3 | 0;
 i3 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 HEAP32[i12 >> 2] = i3;
 i3 = i9 | 0;
 i13 = i4 | 0;
 i4 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 HEAP32[i3 >> 2] = i4;
 i4 = i10 | 0;
 i13 = i5 | 0;
 i5 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 HEAP32[i4 >> 2] = i5;
 __ZN7WebCore14SQLTransactionC2EPNS_8DatabaseEN3WTF10PassRefPtrINS_22SQLTransactionCallbackEEENS4_INS_12VoidCallbackEEENS4_INS_27SQLTransactionErrorCallbackEEEb(i11, i2, i8, i9, i10, i6);
 HEAP32[i1 >> 2] = i11;
 i11 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i4 = i11 + 4 | 0;
   i1 = i4 | 0;
   if (((tempValue = HEAP32[i1 >> 2] | 0, HEAP32[i1 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
    break;
   }
   i1 = i4 - 4 | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
  }
 } while (0);
 i11 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i3 = i11 + 4 | 0;
   i1 = i3 | 0;
   i4 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i1 >> 2] = i4;
    break;
   }
   i4 = i3 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 31](i4);
  }
 } while (0);
 i11 = HEAP32[i12 >> 2] | 0;
 if ((i11 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i12 = i11 + 4 | 0;
 i11 = i12 | 0;
 if (((tempValue = HEAP32[i11 >> 2] | 0, HEAP32[i11 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
  STACKTOP = i7;
  return;
 }
 i11 = i12 - 4 | 0;
 if ((i11 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 31](i11);
 STACKTOP = i7;
 return;
}
function __ZN7WebCore14SQLTransactionC2EPNS_8DatabaseEN3WTF10PassRefPtrINS_22SQLTransactionCallbackEEENS4_INS_12VoidCallbackEEENS4_INS_27SQLTransactionErrorCallbackEEEb(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 HEAP32[i1 + 4 >> 2] = 1;
 HEAP32[i1 + 8 >> 2] = 1;
 HEAP32[i1 + 16 >> 2] = 1;
 HEAP32[i1 >> 2] = H_BASE + 376;
 HEAP32[i1 + 12 >> 2] = H_BASE + 416;
 HEAP32[i1 + 20 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i7 = i2 + 4 | 0;
  tempValue = HEAP32[i7 >> 2] | 0, HEAP32[i7 >> 2] = tempValue + 1, tempValue;
 }
 HEAP32[i1 + 24 >> 2] = 0;
 i7 = i3 | 0;
 i3 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i7 = i2 + 208 | 0;
 i2 = __ZNK7WebCore12DatabaseBase22scriptExecutionContextEv(i7) | 0;
 __ZN3WTF5MutexC1Ev(i1 + 28 | 0);
 HEAP32[i1 + 52 >> 2] = i3;
 i8 = (i3 | 0) != 0 ? i2 : 0;
 HEAP32[i1 + 56 >> 2] = i8;
 if ((i8 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 88 >> 2] & 31](i8);
 }
 i8 = i4 | 0;
 i4 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 i8 = __ZNK7WebCore12DatabaseBase22scriptExecutionContextEv(i7) | 0;
 __ZN3WTF5MutexC1Ev(i1 + 60 | 0);
 HEAP32[i1 + 84 >> 2] = i4;
 i2 = (i4 | 0) != 0 ? i8 : 0;
 HEAP32[i1 + 88 >> 2] = i2;
 if ((i2 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 88 >> 2] & 31](i2);
 }
 i2 = i5 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i2 = __ZNK7WebCore12DatabaseBase22scriptExecutionContextEv(i7) | 0;
 __ZN3WTF5MutexC1Ev(i1 + 92 | 0);
 HEAP32[i1 + 116 >> 2] = i5;
 i7 = (i5 | 0) != 0 ? i2 : 0;
 HEAP32[i1 + 120 >> 2] = i7;
 if ((i7 | 0) == 0) {
  i9 = i1 + 124 | 0;
  HEAP8[i9] = 0;
  i10 = i1 + 128 | 0;
  HEAP32[i10 >> 2] = 0;
  i11 = i1 + 132 | 0;
  i12 = i6 & 1;
  HEAP8[i11] = i12;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 88 >> 2] & 31](i7);
 i9 = i1 + 124 | 0;
 HEAP8[i9] = 0;
 i10 = i1 + 128 | 0;
 HEAP32[i10 >> 2] = 0;
 i11 = i1 + 132 | 0;
 i12 = i6 & 1;
 HEAP8[i11] = i12;
 return;
}
function __ZN7WebCore14SQLTransactionC1EPNS_8DatabaseEN3WTF10PassRefPtrINS_22SQLTransactionCallbackEEENS4_INS_12VoidCallbackEEENS4_INS_27SQLTransactionErrorCallbackEEEb(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 HEAP32[i1 + 4 >> 2] = 1;
 HEAP32[i1 + 8 >> 2] = 1;
 HEAP32[i1 + 16 >> 2] = 1;
 HEAP32[i1 >> 2] = H_BASE + 376;
 HEAP32[i1 + 12 >> 2] = H_BASE + 416;
 HEAP32[i1 + 20 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i7 = i2 + 4 | 0;
  tempValue = HEAP32[i7 >> 2] | 0, HEAP32[i7 >> 2] = tempValue + 1, tempValue;
 }
 HEAP32[i1 + 24 >> 2] = 0;
 i7 = i3 | 0;
 i3 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i7 = i2 + 208 | 0;
 i2 = __ZNK7WebCore12DatabaseBase22scriptExecutionContextEv(i7) | 0;
 __ZN3WTF5MutexC1Ev(i1 + 28 | 0);
 HEAP32[i1 + 52 >> 2] = i3;
 i8 = (i3 | 0) != 0 ? i2 : 0;
 HEAP32[i1 + 56 >> 2] = i8;
 if ((i8 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 88 >> 2] & 31](i8);
 }
 i8 = i4 | 0;
 i4 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 i8 = __ZNK7WebCore12DatabaseBase22scriptExecutionContextEv(i7) | 0;
 __ZN3WTF5MutexC1Ev(i1 + 60 | 0);
 HEAP32[i1 + 84 >> 2] = i4;
 i2 = (i4 | 0) != 0 ? i8 : 0;
 HEAP32[i1 + 88 >> 2] = i2;
 if ((i2 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 88 >> 2] & 31](i2);
 }
 i2 = i5 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i2 = __ZNK7WebCore12DatabaseBase22scriptExecutionContextEv(i7) | 0;
 __ZN3WTF5MutexC1Ev(i1 + 92 | 0);
 HEAP32[i1 + 116 >> 2] = i5;
 i7 = (i5 | 0) != 0 ? i2 : 0;
 HEAP32[i1 + 120 >> 2] = i7;
 if ((i7 | 0) == 0) {
  i9 = i1 + 124 | 0;
  HEAP8[i9] = 0;
  i10 = i1 + 128 | 0;
  HEAP32[i10 >> 2] = 0;
  i11 = i1 + 132 | 0;
  i12 = i6 & 1;
  HEAP8[i11] = i12;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 88 >> 2] & 31](i7);
 i9 = i1 + 124 | 0;
 HEAP8[i9] = 0;
 i10 = i1 + 128 | 0;
 HEAP32[i10 >> 2] = 0;
 i11 = i1 + 132 | 0;
 i12 = i6 & 1;
 HEAP8[i11] = i12;
 return;
}
function __ZN7WebCore18SQLCallbackWrapperINS_27SQLTransactionErrorCallbackEE5clearEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 | 0;
 i5 = (i1 | 0) == 0;
 if (!i5) {
  __ZN3WTF5Mutex4lockEv(i4);
 }
 i6 = i1 + 24 | 0;
 do {
  if ((HEAP32[i6 >> 2] | 0) == 0) {
   i7 = 1;
   i8 = 0;
   i9 = 0;
  } else {
   i10 = i1 + 28 | 0;
   i11 = HEAP32[i10 >> 2] | 0;
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i11 >> 2] | 0) + 16 >> 2] & 63](i11) | 0)) {
    i11 = HEAP32[i10 >> 2] | 0;
    HEAP32[i10 >> 2] = 0;
    i12 = HEAP32[i6 >> 2] | 0;
    HEAP32[i6 >> 2] = 0;
    i7 = 0;
    i8 = i12;
    i9 = i11;
    break;
   }
   i11 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = 0;
   do {
    if ((i11 | 0) != 0) {
     i12 = i11 + 4 | 0;
     i13 = i12 | 0;
     if (((tempValue = HEAP32[i13 >> 2] | 0, HEAP32[i13 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
      break;
     }
     i13 = i12 - 4 | 0;
     if ((i13 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 31](i13);
    }
   } while (0);
   i11 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = 0;
   if ((i11 | 0) == 0) {
    i7 = 1;
    i8 = 0;
    i9 = 0;
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 92 >> 2] & 31](i11);
   i7 = 1;
   i8 = 0;
   i9 = 0;
  }
 } while (0);
 if (!i5) {
  __ZN3WTF5Mutex6unlockEv(i4);
 }
 if (i7) {
  STACKTOP = i2;
  return;
 }
 i7 = HEAP32[(HEAP32[i9 >> 2] | 0) + 60 >> 2] | 0;
 i4 = __ZN3WTF10fastMallocEj(8) | 0;
 HEAP32[i4 >> 2] = H_BASE + 280;
 HEAP32[i4 + 4 >> 2] = i8;
 i8 = i3 | 0;
 HEAP32[i8 >> 2] = i4;
 FUNCTION_TABLE_vii[i7 & 15](i9, i3);
 i3 = HEAP32[i8 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 31](i3);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore18SQLCallbackWrapperINS_22SQLTransactionCallbackEE5clearEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 | 0;
 i5 = (i1 | 0) == 0;
 if (!i5) {
  __ZN3WTF5Mutex4lockEv(i4);
 }
 i6 = i1 + 24 | 0;
 do {
  if ((HEAP32[i6 >> 2] | 0) == 0) {
   i7 = 1;
   i8 = 0;
   i9 = 0;
  } else {
   i10 = i1 + 28 | 0;
   i11 = HEAP32[i10 >> 2] | 0;
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i11 >> 2] | 0) + 16 >> 2] & 63](i11) | 0)) {
    i11 = HEAP32[i10 >> 2] | 0;
    HEAP32[i10 >> 2] = 0;
    i12 = HEAP32[i6 >> 2] | 0;
    HEAP32[i6 >> 2] = 0;
    i7 = 0;
    i8 = i12;
    i9 = i11;
    break;
   }
   i11 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = 0;
   do {
    if ((i11 | 0) != 0) {
     i12 = i11 + 4 | 0;
     i13 = i12 | 0;
     if (((tempValue = HEAP32[i13 >> 2] | 0, HEAP32[i13 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
      break;
     }
     i13 = i12 - 4 | 0;
     if ((i13 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 31](i13);
    }
   } while (0);
   i11 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = 0;
   if ((i11 | 0) == 0) {
    i7 = 1;
    i8 = 0;
    i9 = 0;
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 92 >> 2] & 31](i11);
   i7 = 1;
   i8 = 0;
   i9 = 0;
  }
 } while (0);
 if (!i5) {
  __ZN3WTF5Mutex6unlockEv(i4);
 }
 if (i7) {
  STACKTOP = i2;
  return;
 }
 i7 = HEAP32[(HEAP32[i9 >> 2] | 0) + 60 >> 2] | 0;
 i4 = __ZN3WTF10fastMallocEj(8) | 0;
 HEAP32[i4 >> 2] = H_BASE + 312;
 HEAP32[i4 + 4 >> 2] = i8;
 i8 = i3 | 0;
 HEAP32[i8 >> 2] = i4;
 FUNCTION_TABLE_vii[i7 & 15](i9, i3);
 i3 = HEAP32[i8 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 31](i3);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore18SQLCallbackWrapperINS_12VoidCallbackEE5clearEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 | 0;
 i5 = (i1 | 0) == 0;
 if (!i5) {
  __ZN3WTF5Mutex4lockEv(i4);
 }
 i6 = i1 + 24 | 0;
 do {
  if ((HEAP32[i6 >> 2] | 0) == 0) {
   i7 = 1;
   i8 = 0;
   i9 = 0;
  } else {
   i10 = i1 + 28 | 0;
   i11 = HEAP32[i10 >> 2] | 0;
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i11 >> 2] | 0) + 16 >> 2] & 63](i11) | 0)) {
    i11 = HEAP32[i10 >> 2] | 0;
    HEAP32[i10 >> 2] = 0;
    i12 = HEAP32[i6 >> 2] | 0;
    HEAP32[i6 >> 2] = 0;
    i7 = 0;
    i8 = i12;
    i9 = i11;
    break;
   }
   i11 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = 0;
   do {
    if ((i11 | 0) != 0) {
     i12 = i11 + 4 | 0;
     i13 = i12 | 0;
     i14 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
     if ((i14 | 0) != 0) {
      HEAP32[i13 >> 2] = i14;
      break;
     }
     i14 = i12 - 4 | 0;
     if ((i14 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 31](i14);
    }
   } while (0);
   i11 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = 0;
   if ((i11 | 0) == 0) {
    i7 = 1;
    i8 = 0;
    i9 = 0;
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 92 >> 2] & 31](i11);
   i7 = 1;
   i8 = 0;
   i9 = 0;
  }
 } while (0);
 if (!i5) {
  __ZN3WTF5Mutex6unlockEv(i4);
 }
 if (i7) {
  STACKTOP = i2;
  return;
 }
 i7 = HEAP32[(HEAP32[i9 >> 2] | 0) + 60 >> 2] | 0;
 i4 = __ZN3WTF10fastMallocEj(8) | 0;
 HEAP32[i4 >> 2] = H_BASE + 344;
 HEAP32[i4 + 4 >> 2] = i8;
 i8 = i3 | 0;
 HEAP32[i8 >> 2] = i4;
 FUNCTION_TABLE_vii[i7 & 15](i9, i3);
 i3 = HEAP32[i8 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 31](i3);
 STACKTOP = i2;
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 168 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 208 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 216 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 224 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 232 >> 2] = F_BASE_ii + 30;
 HEAP32[H_BASE + 240 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 248 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 256 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 264 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 280 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 284 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 288 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 292 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 312 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 316 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 320 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 324 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 344 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 348 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 352 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 356 >> 2] = F_BASE_ii + 28;
 HEAP32[H_BASE + 376 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 380 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 384 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 388 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 392 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 396 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 400 >> 2] = F_BASE_ii + 32;
 HEAP32[H_BASE + 404 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 416 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 420 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 424 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 428 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 432 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 436 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 440 >> 2] = F_BASE_vii + 14;
}
function __ZN7WebCore14SQLTransaction24deliverStatementCallbackEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 124 | 0;
 HEAP8[i4] = 1;
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 i6 = __ZN7WebCore12SQLStatement15performCallbackEPNS_14SQLTransactionE(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 16 >> 2] & 63](i5) | 0, i1) | 0;
 HEAP8[i4] = 0;
 if (!i6) {
  i7 = 4;
  STACKTOP = i2;
  return i7 | 0;
 }
 __ZN3WTF6StringC1EPKc(i3, H_BASE + 8 | 0);
 i6 = __ZN3WTF10fastMallocEj(12) | 0;
 HEAP32[i6 >> 2] = 1;
 HEAP32[i6 + 4 >> 2] = 0;
 __ZNKR3WTF6String12isolatedCopyEv(i6 + 8 | 0, i3);
 i4 = i1 + 128 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i6;
 do {
  if ((i5 | 0) != 0) {
   i6 = i5 | 0;
   if (((tempValue = HEAP32[i6 >> 2] | 0, HEAP32[i6 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   i6 = HEAP32[i5 + 8 >> 2] | 0;
   do {
    if ((i6 | 0) != 0) {
     i4 = i6 | 0;
     i8 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i6);
      break;
     } else {
      HEAP32[i4 >> 2] = i8;
      break;
     }
    }
   } while (0);
   __ZN3WTF8fastFreeEPv(i5);
  }
 } while (0);
 i5 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 | 0;
   i6 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i3 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i7 = (HEAP32[i1 + 116 >> 2] | 0) != 0 ? 9 : 7;
 STACKTOP = i2;
 return i7 | 0;
}
function __ZN7WebCore14SQLTransaction22performPendingCallbackEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = HEAP32[i1 + 20 >> 2] | 0;
 do {
  if ((HEAP8[i4 + 44 | 0] & 1) == 0) {
   i5 = 3;
  } else {
   if (__ZN7WebCore19DatabaseBackendBase13isInterruptedEv(i4 | 0) | 0) {
    i5 = 3;
    break;
   }
   i6 = i1 + 8 | 0;
   i7 = HEAP32[i6 >> 2] | 0;
   HEAP32[i1 + 4 >> 2] = i7;
   HEAP32[i6 >> 2] = 1;
   i6 = i3;
   if (i7 >>> 0 > 1 >>> 0) {
    i8 = i7;
    i9 = i6;
    break;
   } else {
    i10 = i6;
   }
   STACKTOP = i2;
   return;
  }
 } while (0);
 if ((i5 | 0) == 3) {
  __ZN7WebCore18SQLCallbackWrapperINS_22SQLTransactionCallbackEE5clearEv(i1 + 28 | 0);
  __ZN7WebCore18SQLCallbackWrapperINS_12VoidCallbackEE5clearEv(i1 + 60 | 0);
  __ZN7WebCore18SQLCallbackWrapperINS_27SQLTransactionErrorCallbackEE5clearEv(i1 + 92 | 0);
  HEAP32[i1 + 4 >> 2] = 6;
  i8 = 6;
  i9 = i3;
 }
 i5 = i1 | 0;
 i4 = i1 + 4 | 0;
 i6 = i1;
 i7 = i3 | 0;
 i11 = i3 + 4 | 0;
 i12 = i1;
 i1 = i8;
 while (1) {
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] & 3](i3, i5, i1);
  i8 = HEAP32[i7 >> 2] | 0;
  i13 = i12 + (HEAP32[i11 >> 2] | 0) | 0;
  if ((i8 & 1 | 0) == 0) {
   i14 = i8;
  } else {
   i14 = HEAP32[(HEAP32[i13 >> 2] | 0) + (i8 - 1) >> 2] | 0;
  }
  i8 = FUNCTION_TABLE_ii[i14 & 63](i13) | 0;
  HEAP32[i4 >> 2] = i8;
  if (i8 >>> 0 > 1 >>> 0) {
   i1 = i8;
  } else {
   i10 = i9;
   break;
  }
 }
 STACKTOP = i2;
 return;
}
function __ZN7WebCore14SQLTransaction22deliverSuccessCallbackEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 60 | 0;
 i3 = i2 | 0;
 i4 = (i2 | 0) == 0;
 if (!i4) {
  __ZN3WTF5Mutex4lockEv(i3);
 }
 i5 = i1 + 88 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 if ((i6 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 92 >> 2] & 31](i6);
 }
 i6 = i1 + 84 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 if (!i4) {
  __ZN3WTF5Mutex6unlockEv(i3);
 }
 if ((i5 | 0) == 0) {
  __ZN7WebCore18SQLCallbackWrapperINS_22SQLTransactionCallbackEE5clearEv(i1 + 28 | 0);
  __ZN7WebCore18SQLCallbackWrapperINS_12VoidCallbackEE5clearEv(i2);
  __ZN7WebCore18SQLCallbackWrapperINS_27SQLTransactionErrorCallbackEE5clearEv(i1 + 92 | 0);
  return 6;
 }
 FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 63](i5) | 0;
 __ZN7WebCore18SQLCallbackWrapperINS_22SQLTransactionCallbackEE5clearEv(i1 + 28 | 0);
 __ZN7WebCore18SQLCallbackWrapperINS_12VoidCallbackEE5clearEv(i2);
 __ZN7WebCore18SQLCallbackWrapperINS_27SQLTransactionErrorCallbackEE5clearEv(i1 + 92 | 0);
 i1 = i5 + 4 | 0;
 i5 = i1 | 0;
 i2 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i5 >> 2] = i2;
  return 6;
 }
 i2 = i1 - 4 | 0;
 if ((i2 | 0) == 0) {
  return 6;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 31](i2);
 return 6;
}
function __ZN7WebCore14SQLTransaction34computeNextStateAndCleanupIfNeededEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 do {
  if ((HEAP8[i2 + 44 | 0] & 1) != 0) {
   if (__ZN7WebCore19DatabaseBackendBase13isInterruptedEv(i2 | 0) | 0) {
    break;
   }
   i3 = i1 + 8 | 0;
   HEAP32[i1 + 4 >> 2] = HEAP32[i3 >> 2];
   HEAP32[i3 >> 2] = 1;
   i4 = 0;
   return i4 | 0;
  }
 } while (0);
 __ZN7WebCore18SQLCallbackWrapperINS_22SQLTransactionCallbackEE5clearEv(i1 + 28 | 0);
 __ZN7WebCore18SQLCallbackWrapperINS_12VoidCallbackEE5clearEv(i1 + 60 | 0);
 __ZN7WebCore18SQLCallbackWrapperINS_27SQLTransactionErrorCallbackEE5clearEv(i1 + 92 | 0);
 HEAP32[i1 + 4 >> 2] = 6;
 i4 = 1;
 return i4 | 0;
}
function __ZThn12_N7WebCore14SQLTransaction10setBackendEPNS_29AbstractSQLTransactionBackendE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if ((i2 | 0) != 0) {
  i3 = i2 + 4 | 0;
  tempValue = HEAP32[i3 >> 2] | 0, HEAP32[i3 >> 2] = tempValue + 1, tempValue;
 }
 i3 = i1 - 136 + 148 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i2;
 if ((i1 | 0) == 0) {
  return;
 }
 i2 = i1 + 4 | 0;
 i1 = i2 | 0;
 if (((tempValue = HEAP32[i1 >> 2] | 0, HEAP32[i1 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
  return;
 }
 i1 = i2 - 4 | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
 return;
}
function __ZN7WebCore14SQLTransaction10setBackendEPNS_29AbstractSQLTransactionBackendE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if ((i2 | 0) != 0) {
  i3 = i2 + 4 | 0;
  tempValue = HEAP32[i3 >> 2] | 0, HEAP32[i3 >> 2] = tempValue + 1, tempValue;
 }
 i3 = i1 + 24 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i2;
 if ((i1 | 0) == 0) {
  return;
 }
 i2 = i1 + 4 | 0;
 i1 = i2 | 0;
 if (((tempValue = HEAP32[i1 >> 2] | 0, HEAP32[i1 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
  return;
 }
 i1 = i2 - 4 | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
 return;
}
function __ZN7WebCore18SQLCallbackWrapperINS_27SQLTransactionErrorCallbackEE15SafeReleaseTask11performTaskEPNS_22ScriptExecutionContextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = (HEAP32[i1 + 4 >> 2] | 0) + 4 | 0;
 i1 = i3 | 0;
 do {
  if (((tempValue = HEAP32[i1 >> 2] | 0, HEAP32[i1 >> 2] = tempValue - 1, tempValue) - 1 | 0) < 1) {
   i4 = i3 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 31](i4);
  }
 } while (0);
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 92 >> 2] & 31](i2);
 return;
}
function __ZN7WebCore18SQLCallbackWrapperINS_22SQLTransactionCallbackEE15SafeReleaseTask11performTaskEPNS_22ScriptExecutionContextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = (HEAP32[i1 + 4 >> 2] | 0) + 4 | 0;
 i1 = i3 | 0;
 do {
  if (((tempValue = HEAP32[i1 >> 2] | 0, HEAP32[i1 >> 2] = tempValue - 1, tempValue) - 1 | 0) < 1) {
   i4 = i3 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 31](i4);
  }
 } while (0);
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 92 >> 2] & 31](i2);
 return;
}
function __ZN7WebCore18SQLCallbackWrapperINS_12VoidCallbackEE15SafeReleaseTask11performTaskEPNS_22ScriptExecutionContextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = (HEAP32[i1 + 4 >> 2] | 0) + 4 | 0;
 i1 = i3 | 0;
 i4 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 do {
  if ((i4 | 0) == 0) {
   i5 = i3 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
  } else {
   HEAP32[i1 >> 2] = i4;
  }
 } while (0);
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 92 >> 2] & 31](i2);
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
function __ZN7WebCore14SQLTransaction28deliverQuotaIncreaseCallbackEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 + 20 | 0;
 i3 = __ZNK7WebCore15DatabaseBackend17transactionClientEv(HEAP32[i2 >> 2] | 0) | 0;
 i4 = __ZN7WebCore20SQLTransactionClient14didExceedQuotaEPNS_19DatabaseBackendBaseE(i3, HEAP32[i2 >> 2] | 0) | 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 15](i2, i4);
 return 4;
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
function __ZN7WebCore14SQLTransaction21clearCallbackWrappersEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore18SQLCallbackWrapperINS_22SQLTransactionCallbackEE5clearEv(i1 + 28 | 0);
 __ZN7WebCore18SQLCallbackWrapperINS_12VoidCallbackEE5clearEv(i1 + 60 | 0);
 __ZN7WebCore18SQLCallbackWrapperINS_27SQLTransactionErrorCallbackEE5clearEv(i1 + 92 | 0);
 return;
}
function __ZThn12_N7WebCore14SQLTransaction21requestTransitToStateENS_19SQLTransactionStateE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 - 136 + 124 | 0;
 HEAP32[i3 + 8 >> 2] = i2;
 __ZN7WebCore8Database27scheduleTransactionCallbackEPNS_14SQLTransactionE(HEAP32[i3 + 20 >> 2] | 0, i3);
 return;
}
function __ZN7WebCore14SQLTransaction16stateFunctionForENS_19SQLTransactionStateE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i2 = H_BASE + 168 + (i3 << 3) | 0;
 i3 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i1 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i1 + 4 >> 2] = i3;
 return;
}
function __ZN7WebCore14SQLTransaction21requestTransitToStateENS_19SQLTransactionStateE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 + 8 >> 2] = i2;
 __ZN7WebCore8Database27scheduleTransactionCallbackEPNS_14SQLTransactionE(HEAP32[i1 + 20 >> 2] | 0, i1);
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
function __ZN7WebCore14SQLTransaction18sendToBackendStateEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 15](i2, HEAP32[i1 + 4 >> 2] | 0);
 return 1;
}
function __ZN7WebCore18SQLCallbackWrapperINS_27SQLTransactionErrorCallbackEE15SafeReleaseTaskD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function dynCall_viiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 FUNCTION_TABLE_viiiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
}
function __ZN7WebCore18SQLCallbackWrapperINS_22SQLTransactionCallbackEE15SafeReleaseTaskD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore18SQLCallbackWrapperINS_12VoidCallbackEE15SafeReleaseTaskD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore18SQLCallbackWrapperINS_27SQLTransactionErrorCallbackEE15SafeReleaseTaskD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i1 | 0);
 return;
}
function __ZThn12_N7WebCore14SQLTransactionD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 136 + 124 | 0;
 __ZN7WebCore14SQLTransactionD2Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore18SQLCallbackWrapperINS_22SQLTransactionCallbackEE15SafeReleaseTaskD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i1 | 0);
 return;
}
function __ZN7WebCore18SQLCallbackWrapperINS_12VoidCallbackEE15SafeReleaseTaskD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i1 | 0);
 return;
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
function __ZN7WebCore14SQLTransaction28nextStateForTransactionErrorEv(i1) {
 i1 = i1 | 0;
 return ((HEAP32[i1 + 116 >> 2] | 0) != 0 ? 9 : 7) | 0;
}
function __ZNK7WebCore18SQLCallbackWrapperINS_27SQLTransactionErrorCallbackEE15SafeReleaseTask13isCleanupTaskEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZThn12_NK7WebCore14SQLTransaction18hasSuccessCallbackEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 - 136 + 208 >> 2] | 0) != 0 | 0;
}
function __ZNK7WebCore18SQLCallbackWrapperINS_22SQLTransactionCallbackEE15SafeReleaseTask13isCleanupTaskEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZThn12_NK7WebCore14SQLTransaction16hasErrorCallbackEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 - 136 + 240 >> 2] | 0) != 0 | 0;
}
function __ZN7WebCore14SQLTransactionD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore14SQLTransactionD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 1](i2 | 0, i3 | 0) | 0;
}
function b6(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(6);
}
function __ZThn12_NK7WebCore14SQLTransaction11hasCallbackEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 - 136 + 176 >> 2] | 0) != 0 | 0;
}
function __ZThn12_N7WebCore14SQLTransactionD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore14SQLTransactionD2Ev(i1 - 136 + 124 | 0);
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
function __ZNK7WebCore18SQLCallbackWrapperINS_12VoidCallbackEE15SafeReleaseTask13isCleanupTaskEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore14SQLTransaction18hasSuccessCallbackEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 84 >> 2] | 0) != 0 | 0;
}
function setThrew(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((__THREW__ | 0) == 0) {
  __THREW__ = i1;
  threwValue = i2;
 }
}
function __ZNK7WebCore14SQLTransaction16hasErrorCallbackEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 116 >> 2] | 0) != 0 | 0;
}
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 15](i2 | 0, i3 | 0);
}
function __ZNK7WebCore14SQLTransaction11hasCallbackEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 52 >> 2] | 0) != 0 | 0;
}
function b0(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(0);
}
function __ZN7WebCore14SQLTransactionD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore14SQLTransactionD2Ev(i1);
 return;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 63](i2 | 0) | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 31](i2 | 0);
}
function __ZN7WebCore14SQLTransaction16unreachableStateEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b4(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(4);
}
function b7(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(7);
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
  var FUNCTION_TABLE_viiiii = [b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore18SQLCallbackWrapperINS_12VoidCallbackEE15SafeReleaseTaskD0Ev,b1,__ZN7WebCore18SQLCallbackWrapperINS_12VoidCallbackEE15SafeReleaseTaskD1Ev,b1,__ZThn12_N7WebCore14SQLTransactionD1Ev,b1,__ZThn12_N7WebCore14SQLTransactionD0Ev,b1,__ZN7WebCore18SQLCallbackWrapperINS_27SQLTransactionErrorCallbackEE15SafeReleaseTaskD0Ev,b1,__ZN7WebCore14SQLTransactionD1Ev,b1,__ZN7WebCore14SQLTransactionD0Ev,b1,__ZN7WebCore18SQLCallbackWrapperINS_22SQLTransactionCallbackEE15SafeReleaseTaskD0Ev,b1,__ZN7WebCore18SQLCallbackWrapperINS_22SQLTransactionCallbackEE15SafeReleaseTaskD1Ev,b1,__ZN7WebCore18SQLCallbackWrapperINS_27SQLTransactionErrorCallbackEE15SafeReleaseTaskD1Ev,b1,b1,b1,b1,b1,b1,b1,b1
  ,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,__ZN7WebCore18SQLCallbackWrapperINS_12VoidCallbackEE15SafeReleaseTask11performTaskEPNS_22ScriptExecutionContextE,b2,__ZN7WebCore18SQLCallbackWrapperINS_22SQLTransactionCallbackEE15SafeReleaseTask11performTaskEPNS_22ScriptExecutionContextE,b2,__ZN7WebCore14SQLTransaction21requestTransitToStateENS_19SQLTransactionStateE,b2,__ZN7WebCore18SQLCallbackWrapperINS_27SQLTransactionErrorCallbackEE15SafeReleaseTask11performTaskEPNS_22ScriptExecutionContextE,b2,__ZThn12_N7WebCore14SQLTransaction21requestTransitToStateENS_19SQLTransactionStateE,b2,__ZN7WebCore14SQLTransaction10setBackendEPNS_29AbstractSQLTransactionBackendE,b2,__ZThn12_N7WebCore14SQLTransaction10setBackendEPNS_29AbstractSQLTransactionBackendE,b2];
  var FUNCTION_TABLE_ii = [b3,b3,__ZN7WebCore14SQLTransaction22deliverSuccessCallbackEv,b3,__ZNK7WebCore18SQLCallbackWrapperINS_22SQLTransactionCallbackEE15SafeReleaseTask13isCleanupTaskEv,b3,__ZN7WebCore14SQLTransaction28deliverQuotaIncreaseCallbackEv,b3,__ZThn12_NK7WebCore14SQLTransaction18hasSuccessCallbackEv,b3,__ZNK7WebCore14SQLTransaction18hasSuccessCallbackEv,b3,__ZThn12_NK7WebCore14SQLTransaction11hasCallbackEv,b3,__ZN7WebCore14SQLTransaction31deliverTransactionErrorCallbackEv,b3,__ZNK7WebCore14SQLTransaction11hasCallbackEv,b3,__ZN7WebCore14SQLTransaction24deliverStatementCallbackEv,b3,__ZThn12_NK7WebCore14SQLTransaction16hasErrorCallbackEv,b3,__ZNK7WebCore18SQLCallbackWrapperINS_27SQLTransactionErrorCallbackEE15SafeReleaseTask13isCleanupTaskEv,b3,__ZN7WebCore14SQLTransaction16unreachableStateEv,b3,__ZN7WebCore14SQLTransaction18sendToBackendStateEv,b3,__ZNK7WebCore18SQLCallbackWrapperINS_12VoidCallbackEE15SafeReleaseTask13isCleanupTaskEv
  ,b3,__ZN7WebCore14SQLTransaction26deliverTransactionCallbackEv,b3,__ZNK7WebCore14SQLTransaction16hasErrorCallbackEv,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3,b3,b3];
  var FUNCTION_TABLE_viii = [b4,b4,__ZN7WebCore14SQLTransaction16stateFunctionForENS_19SQLTransactionStateE,b4];
  var FUNCTION_TABLE_v = [b5,b5];
  var FUNCTION_TABLE_viiiiii = [b6,b6,__ZN7WebCore14SQLTransactionC2EPNS_8DatabaseEN3WTF10PassRefPtrINS_22SQLTransactionCallbackEEENS4_INS_12VoidCallbackEEENS4_INS_27SQLTransactionErrorCallbackEEEb,b6];
  var FUNCTION_TABLE_iii = [b7,b7];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_viiiiii: dynCall_viiiiii, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_viiiiii": invoke_viiiiii, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore18SQLCallbackWrapperINS_12VoidCallbackEE15SafeReleaseTaskD0Ev","_strlen","__ZN7WebCore18SQLCallbackWrapperINS_12VoidCallbackEE15SafeReleaseTaskD1Ev","__ZN7WebCore18SQLCallbackWrapperINS_12VoidCallbackEE15SafeReleaseTask11performTaskEPNS_22ScriptExecutionContextE","__ZN7WebCore14SQLTransaction22deliverSuccessCallbackEv","__ZThn12_N7WebCore14SQLTransactionD1Ev","__ZN7WebCore14SQLTransaction28nextStateForTransactionErrorEv","__ZThn12_N7WebCore14SQLTransactionD0Ev","_memset","__ZNK7WebCore18SQLCallbackWrapperINS_22SQLTransactionCallbackEE15SafeReleaseTask13isCleanupTaskEv","__ZN7WebCore14SQLTransaction10setBackendEPNS_29AbstractSQLTransactionBackendE","__ZN7WebCore14SQLTransaction26deliverTransactionCallbackEv","__ZN7WebCore18SQLCallbackWrapperINS_27SQLTransactionErrorCallbackEE15SafeReleaseTaskD0Ev","__ZN7WebCore14SQLTransactionD2Ev","__ZThn12_NK7WebCore14SQLTransaction18hasSuccessCallbackEv","__ZN7WebCore14SQLTransaction21requestTransitToStateENS_19SQLTransactionStateE","__ZN7WebCore14SQLTransactionD1Ev","__ZN7WebCore18SQLCallbackWrapperINS_27SQLTransactionErrorCallbackEE5clearEv","__ZN7WebCore14SQLTransaction34computeNextStateAndCleanupIfNeededEv","_memcpy","__ZN7WebCore18SQLCallbackWrapperINS_27SQLTransactionErrorCallbackEE15SafeReleaseTask11performTaskEPNS_22ScriptExecutionContextE","__ZN7WebCore14SQLTransaction22performPendingCallbackEv","__ZN7WebCore14SQLTransactionD0Ev","__ZNK7WebCore14SQLTransaction18hasSuccessCallbackEv","__ZThn12_NK7WebCore14SQLTransaction11hasCallbackEv","__ZN7WebCore18SQLCallbackWrapperINS_12VoidCallbackEE5clearEv","__ZN7WebCore18SQLCallbackWrapperINS_22SQLTransactionCallbackEE5clearEv","__ZN7WebCore14SQLTransaction16stateFunctionForENS_19SQLTransactionStateE","__ZNK7WebCore14SQLTransaction11hasCallbackEv","__ZN7WebCore14SQLTransaction10executeSQLERKN3WTF6StringERKNS1_6VectorINS_8SQLValueELj0ENS1_15CrashOnOverflowEEENS1_10PassRefPtrINS_20SQLStatementCallbackEEENSB_INS_25SQLStatementErrorCallbackEEERi","__ZN7WebCore14SQLTransaction21clearCallbackWrappersEv","__ZN7WebCore18SQLCallbackWrapperINS_27SQLTransactionErrorCallbackEE15SafeReleaseTaskD1Ev","__ZThn12_N7WebCore14SQLTransaction21requestTransitToStateENS_19SQLTransactionStateE","__ZN7WebCore14SQLTransaction28deliverQuotaIncreaseCallbackEv","__ZThn12_NK7WebCore14SQLTransaction16hasErrorCallbackEv","__ZN7WebCore18SQLCallbackWrapperINS_22SQLTransactionCallbackEE15SafeReleaseTaskD1Ev","__ZN7WebCore14SQLTransaction24deliverStatementCallbackEv","__ZN7WebCore14SQLTransactionC2EPNS_8DatabaseEN3WTF10PassRefPtrINS_22SQLTransactionCallbackEEENS4_INS_12VoidCallbackEEENS4_INS_27SQLTransactionErrorCallbackEEEb","__ZNK7WebCore18SQLCallbackWrapperINS_27SQLTransactionErrorCallbackEE15SafeReleaseTask13isCleanupTaskEv","__ZN7WebCore14SQLTransaction16unreachableStateEv","__ZN7WebCore18SQLCallbackWrapperINS_22SQLTransactionCallbackEE15SafeReleaseTaskD0Ev","__ZN7WebCore14SQLTransaction18sendToBackendStateEv","__ZThn12_N7WebCore14SQLTransaction10setBackendEPNS_29AbstractSQLTransactionBackendE","__ZNK7WebCore18SQLCallbackWrapperINS_12VoidCallbackEE15SafeReleaseTask13isCleanupTaskEv","__ZN7WebCore14SQLTransaction31deliverTransactionErrorCallbackEv","__ZN7WebCore18SQLCallbackWrapperINS_22SQLTransactionCallbackEE15SafeReleaseTask11performTaskEPNS_22ScriptExecutionContextE","__ZNK7WebCore14SQLTransaction16hasErrorCallbackEv","__ZN7WebCore14SQLTransaction6createEPNS_8DatabaseEN3WTF10PassRefPtrINS_22SQLTransactionCallbackEEENS4_INS_12VoidCallbackEEENS4_INS_27SQLTransactionErrorCallbackEEEb"]

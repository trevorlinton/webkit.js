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
H_BASE = parentModule["_malloc"](472 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 472;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore10IDBRequestC1EPNS_22ScriptExecutionContextEN3WTF10PassRefPtrINS_6IDBAnyEEENS_18IDBDatabaseBackend8TaskTypeEPNS_14IDBTransactionE;
var __ZN7WebCore10IDBRequestD1Ev;
/* memory initializer */ allocate([85,110,99,97,117,103,104,116,32,101,120,99,101,112,116,105,111,110,32,105,110,32,101,118,101,110,116,32,104,97,110,100,108,101,114,46,0,0,0,0,100,111,110,101,0,0,0,0,112,101,110,100,105,110,103,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,244,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,208,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
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
function invoke_iiiii(index,a1,a2,a3,a4) {
  try {
    return Module["dynCall_iiiii"](index,a1,a2,a3,a4);
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
function invoke_viiii(index,a1,a2,a3,a4) {
  try {
    Module["dynCall_viiii"](index,a1,a2,a3,a4);
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
  var __ZN3WTF13WTFThreadData10staticDataE=env.__ZN3WTF13WTFThreadData10staticDataE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore12IDBCallbacksE=(H_BASE+144)|0;
  var __ZTVN7WebCore25EventTargetWithInlineDataE=(H_BASE+64)|0;
  var __ZTVN7WebCore10IDBRequestE=(H_BASE+224)|0;
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
  var invoke_iiiii=env.invoke_iiiii;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _pthread_getspecific=env._pthread_getspecific;
  var ___cxa_pure_virtual=env.___cxa_pure_virtual;
  var ___setErrNo=env.___setErrNo;
  var _pthread_key_create=env._pthread_key_create;
  var _malloc=env._malloc;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _pthread_setspecific=env._pthread_setspecific;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore10IDBRequest13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 24 | 0;
 i7 = i3 + 40 | 0;
 i8 = i3 + 48 | 0;
 i9 = i3 + 56 | 0;
 i10 = i3 + 64 | 0;
 i11 = i3 + 72 | 0;
 i12 = i1 + 152 | 0;
 i13 = HEAP32[i1 + 156 >> 2] | 0;
 i14 = i13 + 16 | 0;
 i15 = HEAP32[(HEAP32[i14 >> 2] & -65536) + 1076 >> 2] | 0;
 HEAP32[i5 >> 2] = i15;
 if ((i15 | 0) != 0) {
  i16 = i15 | 0;
  tempValue = HEAP32[i16 >> 2] | 0, HEAP32[i16 >> 2] = tempValue + 1, tempValue;
 }
 i16 = __ZN3WTF13wtfThreadDataEv() | 0;
 i17 = i16 + 16 | 0;
 i16 = HEAP32[i17 >> 2] | 0;
 HEAP32[i17 >> 2] = HEAP32[i15 + 20880 >> 2];
 HEAP32[i5 + 4 >> 2] = i16;
 __ZN3JSC14MachineThreads16addCurrentThreadEv(i15 + 19828 | 0);
 __ZN3JSC12JSLockHolderC1EPNS_9ExecStateE(i5 + 8 | 0, (HEAP32[(HEAP32[(HEAP32[i14 >> 2] & -65536) + 1076 >> 2] | 0) + 24780 >> 2] | 0) != 0 ? 0 : i13);
 i13 = i2 | 0;
 i2 = HEAP32[i13 >> 2] | 0;
 i14 = HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0;
 if ((HEAP32[i2 + 12 >> 2] | 0) != (HEAP32[i14 + 28 >> 2] | 0)) {
  HEAP32[i1 + 84 >> 2] = 2;
 }
 i14 = i1 + 112 | 0;
 i2 = HEAP32[i14 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i15 = i1 + 104 | 0;
  i16 = 0;
  i17 = i2;
  while (1) {
   i2 = HEAP32[i15 >> 2] | 0;
   i18 = i2 + (i16 << 2) | 0;
   i19 = HEAP32[i18 >> 2] | 0;
   if ((i19 | 0) == (HEAP32[i13 >> 2] | 0)) {
    do {
     if ((i19 | 0) != 0) {
      i20 = i19 + 8 | 0;
      i21 = i20 | 0;
      i22 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
      if ((i22 | 0) != 0) {
       HEAP32[i21 >> 2] = i22;
       break;
      }
      i22 = i20 - 8 | 0;
      if ((i22 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i22 >> 2] | 0) + 4 >> 2] & 63](i22);
     }
    } while (0);
    i19 = i16 + 1 | 0;
    i22 = i2 + (i19 << 2) | 0;
    _memmove(i18 | 0, i22 | 0, (HEAP32[i15 >> 2] | 0) + (HEAP32[i14 >> 2] << 2) - i22 | 0) | 0;
    i22 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
    HEAP32[i14 >> 2] = i22;
    i23 = i22;
    i24 = i19;
   } else {
    i23 = i17;
    i24 = i16 + 1 | 0;
   }
   if (i24 >>> 0 < i23 >>> 0) {
    i16 = i24;
    i17 = i23;
   } else {
    break;
   }
  }
 }
 i23 = i6 | 0;
 i17 = i6 + 4 | 0;
 i24 = i6 + 8 | 0;
 HEAP32[i24 >> 2] = 0;
 i16 = __ZN3WTF18fastMallocGoodSizeEj(64) | 0;
 HEAP32[i17 >> 2] = i16 >>> 2;
 i14 = __ZN3WTF10fastMallocEj(i16) | 0;
 HEAP32[i23 >> 2] = i14;
 i16 = (i1 | 0) == 0 ? 0 : i1 + 12 | 0;
 HEAP32[i14 + (HEAP32[i24 >> 2] << 2) >> 2] = i16;
 if ((i16 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 56 >> 2] & 63](i16);
 }
 i16 = HEAP32[i24 >> 2] | 0;
 i14 = i16 + 1 | 0;
 HEAP32[i24 >> 2] = i14;
 i15 = i1 + 80 | 0;
 i19 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i19 | 0) != 0) {
   if ((HEAP8[i1 + 149 | 0] & 1) != 0) {
    break;
   }
   if ((i14 | 0) == (HEAP32[i17 >> 2] | 0)) {
    i22 = i16 + 2 | 0;
    i20 = i22 + (i14 >>> 2) | 0;
    i21 = i20 >>> 0 > 16 >>> 0 ? i20 : 16;
    i20 = i21 >>> 0 > i22 >>> 0 ? i21 : i22;
    do {
     if (i14 >>> 0 < i20 >>> 0) {
      i22 = HEAP32[i23 >> 2] | 0;
      if (i20 >>> 0 > 1073741823 >>> 0) {
       _WTFCrash();
       return 0;
      }
      i21 = __ZN3WTF18fastMallocGoodSizeEj(i20 << 2) | 0;
      HEAP32[i17 >> 2] = i21 >>> 2;
      i25 = __ZN3WTF10fastMallocEj(i21) | 0;
      HEAP32[i23 >> 2] = i25;
      i21 = i22;
      _memcpy(i25 | 0, i21 | 0, i14 << 2) | 0;
      if ((i22 | 0) == 0) {
       break;
      }
      if ((HEAP32[i23 >> 2] | 0) == (i22 | 0)) {
       HEAP32[i23 >> 2] = 0;
       HEAP32[i17 >> 2] = 0;
      }
      __ZN3WTF8fastFreeEPv(i21);
     }
    } while (0);
    i20 = HEAP32[i15 >> 2] | 0;
    i18 = i20 | 0;
    HEAP32[(HEAP32[i23 >> 2] | 0) + (HEAP32[i24 >> 2] << 2) >> 2] = i18;
    if ((i20 | 0) != 0) {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i20 >> 2] | 0) + 56 >> 2] & 63](i18);
    }
    i26 = HEAP32[i24 >> 2] | 0;
   } else {
    i18 = i19 | 0;
    HEAP32[(HEAP32[i23 >> 2] | 0) + (i14 << 2) >> 2] = i18;
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 56 >> 2] & 63](i18);
    i26 = HEAP32[i24 >> 2] | 0;
   }
   i18 = i26 + 1 | 0;
   HEAP32[i24 >> 2] = i18;
   i20 = HEAP32[(HEAP32[i15 >> 2] | 0) + 64 >> 2] | 0;
   if ((i18 | 0) != (HEAP32[i17 >> 2] | 0)) {
    i2 = i20 | 0;
    HEAP32[(HEAP32[i23 >> 2] | 0) + (i18 << 2) >> 2] = i2;
    if ((i20 | 0) != 0) {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i20 >> 2] | 0) + 56 >> 2] & 63](i2);
    }
    HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 1;
    break;
   }
   i2 = i26 + 2 | 0;
   i21 = i26 + 2 + (i18 >>> 2) | 0;
   i22 = i21 >>> 0 > 16 >>> 0 ? i21 : 16;
   i21 = i22 >>> 0 > i2 >>> 0 ? i22 : i2;
   do {
    if (i18 >>> 0 < i21 >>> 0) {
     i2 = HEAP32[i23 >> 2] | 0;
     if (i21 >>> 0 > 1073741823 >>> 0) {
      _WTFCrash();
      return 0;
     }
     i22 = __ZN3WTF18fastMallocGoodSizeEj(i21 << 2) | 0;
     HEAP32[i17 >> 2] = i22 >>> 2;
     i25 = __ZN3WTF10fastMallocEj(i22) | 0;
     HEAP32[i23 >> 2] = i25;
     i22 = i2;
     _memcpy(i25 | 0, i22 | 0, i18 << 2) | 0;
     if ((i2 | 0) == 0) {
      break;
     }
     if ((HEAP32[i23 >> 2] | 0) == (i2 | 0)) {
      HEAP32[i23 >> 2] = 0;
      HEAP32[i17 >> 2] = 0;
     }
     __ZN3WTF8fastFreeEPv(i22);
    }
   } while (0);
   i18 = i20 | 0;
   HEAP32[(HEAP32[i23 >> 2] | 0) + (HEAP32[i24 >> 2] << 2) >> 2] = i18;
   if ((i20 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i20 >> 2] | 0) + 56 >> 2] & 63](i18);
   }
   HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 1;
  }
 } while (0);
 i26 = HEAP32[i13 >> 2] | 0;
 i19 = HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0;
 L66 : do {
  if ((HEAP32[i26 + 12 >> 2] | 0) == (HEAP32[i19 + 648 >> 2] | 0)) {
   i14 = HEAP32[i1 + 60 >> 2] | 0;
   do {
    if ((i14 | 0) == 0) {
     HEAP32[i7 >> 2] = 0;
    } else {
     i16 = HEAP32[i14 + 8 >> 2] | 0;
     if ((i16 | 0) == 3) {
      __ZN7WebCore6IDBAny9idbCursorEv(i7, i14);
      i27 = HEAP32[i7 >> 2] | 0;
     } else if ((i16 | 0) == 4) {
      __ZN7WebCore6IDBAny18idbCursorWithValueEv(i4, i14);
      i16 = i4 | 0;
      i18 = HEAP32[i16 >> 2] | 0;
      HEAP32[i16 >> 2] = 0;
      i16 = i18 | 0;
      HEAP32[i7 >> 2] = i16;
      i27 = i16;
     } else {
      HEAP32[i7 >> 2] = 0;
      break;
     }
     HEAP32[i7 >> 2] = 0;
     if ((i27 | 0) == 0) {
      i28 = 0;
      break L66;
     }
     i16 = i1 + 132 | 0;
     i18 = i8 | 0;
     HEAP32[i18 >> 2] = HEAP32[i16 >> 2];
     HEAP32[i16 >> 2] = 0;
     i16 = i1 + 136 | 0;
     i21 = i9 | 0;
     HEAP32[i21 >> 2] = HEAP32[i16 >> 2];
     HEAP32[i16 >> 2] = 0;
     __ZN7WebCore9IDBCursor13setValueReadyEPNS_15DOMRequestStateEN3WTF10PassRefPtrINS_6IDBKeyEEES6_RN10Deprecated11ScriptValueE(i27, i12, i8, i9, i1 + 140 | 0);
     i16 = HEAP32[i21 >> 2] | 0;
     do {
      if ((i16 | 0) != 0) {
       i21 = i16 | 0;
       i22 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
       if ((i22 | 0) == 0) {
        __ZN7WebCore6IDBKeyD1Ev(i16);
        __ZN3WTF8fastFreeEPv(i16);
        break;
       } else {
        HEAP32[i21 >> 2] = i22;
        break;
       }
      }
     } while (0);
     i16 = HEAP32[i18 >> 2] | 0;
     do {
      if ((i16 | 0) != 0) {
       i22 = i16 | 0;
       i21 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
       if ((i21 | 0) == 0) {
        __ZN7WebCore6IDBKeyD1Ev(i16);
        __ZN3WTF8fastFreeEPv(i16);
        break;
       } else {
        HEAP32[i22 >> 2] = i21;
        break;
       }
      }
     } while (0);
     i16 = i1 + 144 | 0;
     i18 = HEAP32[i16 >> 2] | 0;
     if ((i18 | 0) == 0) {
      i28 = i27;
      break L66;
     }
     i21 = HEAP32[(i18 & -4096) + 12 >> 2] | 0;
     i22 = i18;
     i2 = i21 + 84 | 0;
     i25 = i22 + 12 | 0;
     if ((i22 | 0) == (HEAP32[i2 >> 2] | 0)) {
      HEAP32[i2 >> 2] = HEAP32[i25 >> 2];
     }
     i2 = i18 + 8 | 0;
     i18 = HEAP32[i2 >> 2] | 0;
     i29 = HEAP32[i25 >> 2] | 0;
     HEAP32[i18 + 12 >> 2] = i29;
     HEAP32[i29 + 8 >> 2] = i18;
     HEAP32[i2 >> 2] = 0;
     HEAP32[i25 >> 2] = 0;
     i2 = i21 + 80 | 0;
     HEAP32[i25 >> 2] = HEAP32[i2 >> 2];
     HEAP32[i2 >> 2] = i22;
     HEAP32[i16 >> 2] = 0;
     i28 = i27;
     break L66;
    }
   } while (0);
   HEAP32[i7 >> 2] = 0;
   i28 = 0;
  } else {
   i28 = 0;
  }
 } while (0);
 i7 = HEAP32[i13 >> 2] | 0;
 i27 = HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0;
 if ((HEAP32[i7 + 12 >> 2] | 0) == (HEAP32[i27 + 356 >> 2] | 0)) {
  HEAP8[i1 + 148 | 0] = 1;
 }
 i27 = HEAP32[i15 >> 2] | 0;
 L98 : do {
  if ((i27 | 0) == 0) {
   i30 = 0;
  } else {
   i7 = HEAP32[i13 >> 2] | 0;
   i9 = HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0;
   i8 = HEAP32[i7 + 12 >> 2] | 0;
   do {
    if ((i8 | 0) != (HEAP32[i9 + 648 >> 2] | 0)) {
     if ((i8 | 0) == (HEAP32[i9 + 356 >> 2] | 0)) {
      break;
     }
     if ((i8 | 0) != (HEAP32[i9 + 148 >> 2] | 0)) {
      i30 = 0;
      break L98;
     }
     if ((HEAP16[i1 + 64 >> 1] | 0) == 1210) {
      i30 = 0;
      break L98;
     }
    }
   } while (0);
   __ZN7WebCore14IDBTransaction9setActiveEb(i27, 1);
   i30 = 1;
  }
 } while (0);
 i27 = __ZN7WebCore18IDBEventDispatcher8dispatchEPNS_5EventERN3WTF6VectorINS3_6RefPtrINS_11EventTargetEEELj0ENS3_15CrashOnOverflowEEE(HEAP32[i13 >> 2] | 0, i6) | 0;
 i6 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   if ((HEAP32[i1 + 84 >> 2] | 0) == 2) {
    __ZN7WebCore14IDBTransaction17unregisterRequestEPNS_10IDBRequestE(i6, i1);
   }
   i9 = HEAP32[i13 >> 2] | 0;
   i8 = HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0;
   do {
    if (!((HEAP32[i9 + 12 >> 2] | 0) != (HEAP32[i8 + 148 >> 2] | 0) | i27 ^ 1)) {
     if ((HEAP8[i1 + 88 | 0] & 1) != 0) {
      break;
     }
     i7 = HEAP32[i15 >> 2] | 0;
     i12 = i10 | 0;
     i4 = HEAP32[i1 + 72 >> 2] | 0;
     HEAP32[i12 >> 2] = i4;
     if ((i4 | 0) != 0) {
      i19 = i4 + 4 | 0;
      HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
     }
     __ZN7WebCore14IDBTransaction8setErrorEN3WTF10PassRefPtrINS_8DOMErrorEEERKNS1_6StringE(i7, i10, i1 + 68 | 0);
     i7 = HEAP32[i12 >> 2] | 0;
     do {
      if ((i7 | 0) != 0) {
       i12 = i7 + 4 | 0;
       i19 = i12 | 0;
       i4 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
       if ((i4 | 0) != 0) {
        HEAP32[i19 >> 2] = i4;
        break;
       }
       i4 = i12 - 4 | 0;
       if ((i4 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 63](i4);
      }
     } while (0);
     i7 = HEAP32[i15 >> 2] | 0;
     i4 = i11 | 0;
     HEAP32[i4 >> 2] = 0;
     __ZN7WebCore14IDBTransaction5abortERi(i7, i4);
    }
   } while (0);
   if (!i30) {
    break;
   }
   __ZN7WebCore14IDBTransaction9setActiveEb(HEAP32[i15 >> 2] | 0, 0);
  }
 } while (0);
 i15 = (i28 | 0) == 0;
 if (!i15) {
  __ZN7WebCore9IDBCursor26postSuccessHandlerCallbackEv(i28);
 }
 do {
  if ((HEAP32[i1 + 84 >> 2] | 0) == 2) {
   if (!i15) {
    if ((HEAP8[i1 + 124 | 0] & 1) == 0) {
     i31 = 98;
     break;
    }
   }
   i30 = HEAP32[i13 >> 2] | 0;
   i11 = HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0;
   if ((HEAP32[i30 + 12 >> 2] | 0) == (HEAP32[i11 + 356 >> 2] | 0)) {
    i31 = 97;
    break;
   }
   HEAP8[i1 + 100 | 0] = 0;
   i31 = 97;
  } else {
   i31 = 97;
  }
 } while (0);
 if ((i31 | 0) == 97) {
  if (!i15) {
   i31 = 98;
  }
 }
 do {
  if ((i31 | 0) == 98) {
   i15 = i28 + 8 | 0;
   i1 = i15 | 0;
   i13 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i13 | 0) != 0) {
    HEAP32[i1 >> 2] = i13;
    break;
   }
   i13 = i15 - 8 | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 63](i13);
  }
 } while (0);
 i28 = HEAP32[i24 >> 2] | 0;
 if ((i28 | 0) != 0) {
  i31 = HEAP32[i23 >> 2] | 0;
  i13 = i31 + (i28 << 2) | 0;
  i28 = i31;
  while (1) {
   i31 = HEAP32[i28 >> 2] | 0;
   if ((i31 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i31 >> 2] | 0) + 60 >> 2] & 63](i31);
   }
   i28 = i28 + 4 | 0;
   if ((i28 | 0) == (i13 | 0)) {
    break;
   }
  }
  HEAP32[i24 >> 2] = 0;
 }
 i24 = HEAP32[i23 >> 2] | 0;
 if ((i24 | 0) == 0) {
  i32 = i5 | 0;
  __ZN3JSC12APIEntryShimD2Ev(i32);
  STACKTOP = i3;
  return i27 | 0;
 }
 HEAP32[i23 >> 2] = 0;
 HEAP32[i17 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i24);
 i32 = i5 | 0;
 __ZN3JSC12APIEntryShimD2Ev(i32);
 STACKTOP = i3;
 return i27 | 0;
}
function __ZN7WebCore10IDBRequest9onSuccessEN3WTF10PassRefPtrINS_16IDBCursorBackendEEENS2_INS_6IDBKeyEEES6_NS2_INS_12SharedBufferEEE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i7 = i6 | 0;
 i8 = i6 + 16 | 0;
 i9 = i6 + 24 | 0;
 i10 = i6 + 32 | 0;
 i11 = i6 + 40 | 0;
 i12 = i6 + 48 | 0;
 i13 = i6 + 56 | 0;
 i14 = i6 + 64 | 0;
 i15 = i6 + 72 | 0;
 i16 = i6 + 80 | 0;
 i17 = i6 + 88 | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 80 >> 2] & 31](i1) | 0)) {
  STACKTOP = i6;
  return;
 }
 i18 = HEAP32[i1 + 156 >> 2] | 0;
 i19 = i18 + 16 | 0;
 i20 = HEAP32[(HEAP32[i19 >> 2] & -65536) + 1076 >> 2] | 0;
 HEAP32[i7 >> 2] = i20;
 if ((i20 | 0) != 0) {
  i21 = i20 | 0;
  tempValue = HEAP32[i21 >> 2] | 0, HEAP32[i21 >> 2] = tempValue + 1, tempValue;
 }
 i21 = __ZN3WTF13wtfThreadDataEv() | 0;
 i22 = i21 + 16 | 0;
 i21 = HEAP32[i22 >> 2] | 0;
 HEAP32[i22 >> 2] = HEAP32[i20 + 20880 >> 2];
 HEAP32[i7 + 4 >> 2] = i21;
 __ZN3JSC14MachineThreads16addCurrentThreadEv(i20 + 19828 | 0);
 __ZN3JSC12JSLockHolderC1EPNS_9ExecStateE(i7 + 8 | 0, (HEAP32[(HEAP32[(HEAP32[i19 >> 2] & -65536) + 1076 >> 2] | 0) + 24780 >> 2] | 0) != 0 ? 0 : i18);
 i18 = i9 | 0;
 i19 = i5 | 0;
 i5 = HEAP32[i19 >> 2] | 0;
 HEAP32[i19 >> 2] = 0;
 HEAP32[i18 >> 2] = i5;
 __ZN7WebCore25deserializeIDBValueBufferEPNS_15DOMRequestStateEN3WTF10PassRefPtrINS_12SharedBufferEEE(i8, i1 + 152 | 0, i9);
 i9 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i18 = i9 | 0;
   i5 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) == 0) {
    __ZN7WebCore12SharedBufferD1Ev(i9);
    __ZN3WTF8fastFreeEPv(i9);
    break;
   } else {
    HEAP32[i18 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i9 = HEAP32[i1 + 116 >> 2] | 0;
 do {
  if ((i9 | 0) == 1) {
   i5 = i11 | 0;
   i18 = i2 | 0;
   i19 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = 0;
   HEAP32[i5 >> 2] = i19;
   __ZN7WebCore9IDBCursor6createEN3WTF10PassRefPtrINS_16IDBCursorBackendEEENS_9IndexedDB15CursorDirectionEPNS_10IDBRequestEPNS_6IDBAnyEPNS_14IDBTransactionE(i10, i11, HEAP32[i1 + 120 >> 2] | 0, i1, HEAP32[i1 + 92 >> 2] | 0, HEAP32[i1 + 80 >> 2] | 0);
   i19 = i10 | 0;
   i18 = HEAP32[i19 >> 2] | 0;
   HEAP32[i19 >> 2] = 0;
   i19 = HEAP32[i5 >> 2] | 0;
   if ((i19 | 0) == 0) {
    i23 = i18;
    i24 = 18;
    break;
   }
   i5 = i19 | 0;
   i20 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i20 | 0) == 0) {
    __ZN7WebCore16IDBCursorBackendD1Ev(i19);
    __ZN3WTF8fastFreeEPv(i19);
    i23 = i18;
    i24 = 18;
    break;
   } else {
    HEAP32[i5 >> 2] = i20;
    i23 = i18;
    i24 = 18;
    break;
   }
  } else if ((i9 | 0) == 0) {
   i18 = i13 | 0;
   i20 = i2 | 0;
   i5 = HEAP32[i20 >> 2] | 0;
   HEAP32[i20 >> 2] = 0;
   HEAP32[i18 >> 2] = i5;
   __ZN7WebCore18IDBCursorWithValue6createEN3WTF10PassRefPtrINS_16IDBCursorBackendEEENS_9IndexedDB15CursorDirectionEPNS_10IDBRequestEPNS_6IDBAnyEPNS_14IDBTransactionE(i12, i13, HEAP32[i1 + 120 >> 2] | 0, i1, HEAP32[i1 + 92 >> 2] | 0, HEAP32[i1 + 80 >> 2] | 0);
   i5 = i12 | 0;
   i20 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   i5 = i20 | 0;
   i20 = HEAP32[i18 >> 2] | 0;
   if ((i20 | 0) == 0) {
    i23 = i5;
    i24 = 18;
    break;
   }
   i18 = i20 | 0;
   i19 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
   if ((i19 | 0) == 0) {
    __ZN7WebCore16IDBCursorBackendD1Ev(i20);
    __ZN3WTF8fastFreeEPv(i20);
    i23 = i5;
    i24 = 18;
    break;
   } else {
    HEAP32[i18 >> 2] = i19;
    i23 = i5;
    i24 = 18;
    break;
   }
  } else {
   i5 = i14 | 0;
   HEAP32[i5 >> 2] = 0;
   i25 = 0;
   i26 = i5;
   i27 = 1;
  }
 } while (0);
 do {
  if ((i24 | 0) == 18) {
   i12 = i14 | 0;
   HEAP32[i12 >> 2] = i23;
   if ((i23 | 0) == 0) {
    i25 = 0;
    i26 = i12;
    i27 = 1;
    break;
   }
   i13 = i23 + 8 | 0;
   HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
   i25 = i23;
   i26 = i12;
   i27 = 0;
  }
 } while (0);
 i23 = i15 | 0;
 i24 = i3 | 0;
 i3 = HEAP32[i24 >> 2] | 0;
 HEAP32[i24 >> 2] = 0;
 HEAP32[i23 >> 2] = i3;
 i3 = i16 | 0;
 i24 = i4 | 0;
 i4 = HEAP32[i24 >> 2] | 0;
 HEAP32[i24 >> 2] = 0;
 HEAP32[i3 >> 2] = i4;
 __ZN7WebCore10IDBRequest15setResultCursorEN3WTF10PassRefPtrINS_9IDBCursorEEENS2_INS_6IDBKeyEEES6_RKN10Deprecated11ScriptValueE(i1, i14, i15, i16, i8);
 i16 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i16 | 0) != 0) {
   i3 = i16 | 0;
   i15 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) == 0) {
    __ZN7WebCore6IDBKeyD1Ev(i16);
    __ZN3WTF8fastFreeEPv(i16);
    break;
   } else {
    HEAP32[i3 >> 2] = i15;
    break;
   }
  }
 } while (0);
 i16 = HEAP32[i23 >> 2] | 0;
 do {
  if ((i16 | 0) != 0) {
   i23 = i16 | 0;
   i15 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) == 0) {
    __ZN7WebCore6IDBKeyD1Ev(i16);
    __ZN3WTF8fastFreeEPv(i16);
    break;
   } else {
    HEAP32[i23 >> 2] = i15;
    break;
   }
  }
 } while (0);
 i16 = HEAP32[i26 >> 2] | 0;
 do {
  if ((i16 | 0) != 0) {
   i26 = i16 + 8 | 0;
   i15 = i26 | 0;
   i23 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
   if ((i23 | 0) != 0) {
    HEAP32[i15 >> 2] = i23;
    break;
   }
   i23 = i26 - 8 | 0;
   if ((i23 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i23 >> 2] | 0) + 4 >> 2] & 63](i23);
  }
 } while (0);
 i16 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 648 | 0;
 i23 = __ZN3WTF10fastMallocEj(56) | 0;
 __ZN7WebCore5EventC1ERKN3WTF12AtomicStringEbb(i23, i16, 0, 0);
 i16 = i17 | 0;
 HEAP32[i16 >> 2] = i23;
 __ZN7WebCore10IDBRequest12enqueueEventEN3WTF10PassRefPtrINS_5EventEEE(i1, i17);
 i17 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i16 = i17 + 8 | 0;
   i1 = i16 | 0;
   i23 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i23 | 0) != 0) {
    HEAP32[i1 >> 2] = i23;
    break;
   }
   i23 = i16 - 8 | 0;
   if ((i23 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i23 >> 2] | 0) + 4 >> 2] & 63](i23);
  }
 } while (0);
 do {
  if (!i27) {
   i17 = i25 + 8 | 0;
   i23 = i17 | 0;
   i16 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
   if ((i16 | 0) != 0) {
    HEAP32[i23 >> 2] = i16;
    break;
   }
   i16 = i17 - 8 | 0;
   if ((i16 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 63](i16);
  }
 } while (0);
 __ZN10Deprecated11ScriptValueD1Ev(i8);
 __ZN3JSC12APIEntryShimD2Ev(i7 | 0);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore10IDBRequest5abortEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 if ((HEAP8[i1 + 76 | 0] & 1) != 0) {
  STACKTOP = i2;
  return;
 }
 i4 = HEAP32[i1 + 52 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i1 + 84 >> 2] | 0) == 2) {
  STACKTOP = i2;
  return;
 }
 i5 = (i1 | 0) != 0;
 if (i5) {
  i6 = i1 + 4 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 }
 i6 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 72 >> 2] & 31](i4) | 0;
 i4 = i1 + 104 | 0;
 i7 = i1 + 112 | 0;
 if ((HEAP32[i7 >> 2] | 0) == 0) {
  i8 = 0;
 } else {
  i9 = i6;
  i10 = i4 | 0;
  i11 = 0;
  while (1) {
   FUNCTION_TABLE_iii[HEAP32[(HEAP32[i9 >> 2] | 0) + 12 >> 2] & 7](i6, HEAP32[(HEAP32[i10 >> 2] | 0) + (i11 << 2) >> 2] | 0) | 0;
   i12 = i11 + 1 | 0;
   i13 = HEAP32[i7 >> 2] | 0;
   if (i12 >>> 0 < i13 >>> 0) {
    i11 = i12;
   } else {
    i8 = i13;
    break;
   }
  }
 }
 i11 = i1 + 108 | 0;
 do {
  if ((HEAP32[i11 >> 2] | 0) != 0) {
   i10 = i4 | 0;
   if ((i8 | 0) != 0) {
    i6 = HEAP32[i10 >> 2] | 0;
    i9 = i6 + (i8 << 2) | 0;
    i13 = i6;
    while (1) {
     i6 = HEAP32[i13 >> 2] | 0;
     do {
      if ((i6 | 0) != 0) {
       i12 = i6 + 8 | 0;
       i14 = i12 | 0;
       i15 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
       if ((i15 | 0) != 0) {
        HEAP32[i14 >> 2] = i15;
        break;
       }
       i15 = i12 - 8 | 0;
       if ((i15 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 63](i15);
      }
     } while (0);
     i13 = i13 + 4 | 0;
     if ((i13 | 0) == (i9 | 0)) {
      break;
     }
    }
    HEAP32[i7 >> 2] = 0;
   }
   i9 = HEAP32[i10 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   HEAP32[i10 >> 2] = 0;
   HEAP32[i11 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i9);
  }
 } while (0);
 HEAP16[i1 + 64 >> 1] = 0;
 i11 = i1 + 72 | 0;
 i7 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 do {
  if ((i7 | 0) != 0) {
   i11 = i7 + 4 | 0;
   i8 = i11 | 0;
   i4 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i8 >> 2] = i4;
    break;
   }
   i4 = i11 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 63](i4);
  }
 } while (0);
 i7 = i1 + 68 | 0;
 i4 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 do {
  if ((i4 | 0) != 0) {
   i7 = i4 | 0;
   i11 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i7 >> 2] = i11;
    break;
   }
  }
 } while (0);
 i4 = i1 + 60 | 0;
 i11 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 do {
  if ((i11 | 0) != 0) {
   i4 = i11 + 4 | 0;
   i7 = i4 | 0;
   i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i7 >> 2] = i8;
    break;
   }
   i8 = i4 - 4 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   __ZN7WebCore6IDBAnyD1Ev(i8);
   __ZN3WTF8fastFreeEPv(i8);
  }
 } while (0);
 i11 = HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] | 0;
 i8 = __ZN3WTF10fastMallocEj(12) | 0;
 HEAP32[i8 >> 2] = 1;
 HEAP16[i8 + 4 >> 1] = 1210;
 __ZN7WebCore20IDBDatabaseException19getErrorDescriptionEi(i8 + 8 | 0, 1210);
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i8;
 FUNCTION_TABLE_vii[i11 & 15](i1, i3);
 i3 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 | 0;
   i11 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) != 0) {
    HEAP32[i4 >> 2] = i11;
    break;
   }
   i11 = HEAP32[i3 + 8 >> 2] | 0;
   do {
    if ((i11 | 0) != 0) {
     i4 = i11 | 0;
     i8 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i11);
      break;
     } else {
      HEAP32[i4 >> 2] = i8;
      break;
     }
    }
   } while (0);
   __ZN3WTF8fastFreeEPv(i3);
  }
 } while (0);
 HEAP8[i1 + 88 | 0] = 1;
 if (!i5) {
  STACKTOP = i2;
  return;
 }
 i5 = i1 + 4 | 0;
 i1 = i5 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i1 >> 2] = i3;
  STACKTOP = i2;
  return;
 }
 i3 = i5 - 4 | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 63](i3);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore10IDBRequest15setResultCursorEN3WTF10PassRefPtrINS_9IDBCursorEEENS2_INS_6IDBKeyEEES6_RKN10Deprecated11ScriptValueE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 i11 = i3 | 0;
 i3 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 i11 = i1 + 132 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = i3;
 do {
  if ((i12 | 0) != 0) {
   i3 = i12 | 0;
   i11 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) == 0) {
    __ZN7WebCore6IDBKeyD1Ev(i12);
    __ZN3WTF8fastFreeEPv(i12);
    break;
   } else {
    HEAP32[i3 >> 2] = i11;
    break;
   }
  }
 } while (0);
 i12 = i4 | 0;
 i4 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = 0;
 i12 = i1 + 136 | 0;
 i11 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = i4;
 do {
  if ((i11 | 0) != 0) {
   i4 = i11 | 0;
   i12 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) == 0) {
    __ZN7WebCore6IDBKeyD1Ev(i11);
    __ZN3WTF8fastFreeEPv(i11);
    break;
   } else {
    HEAP32[i4 >> 2] = i12;
    break;
   }
  }
 } while (0);
 __ZN3JSC6StrongINS_7UnknownEEaSERKS2_(i1 + 144 | 0, i5 + 4 | 0) | 0;
 i5 = i1 + 60 | 0;
 if ((HEAP32[i1 + 116 >> 2] | 0) == 1) {
  i1 = i2 | 0;
  i11 = HEAP32[i1 >> 2] | 0;
  HEAP32[i1 >> 2] = 0;
  i1 = __ZN3WTF10fastMallocEj(88) | 0;
  i12 = i8 | 0;
  HEAP32[i12 >> 2] = i11;
  __ZN7WebCore6IDBAnyC1EN3WTF10PassRefPtrINS_9IDBCursorEEE(i1, i8);
  i8 = HEAP32[i12 >> 2] | 0;
  do {
   if ((i8 | 0) != 0) {
    i12 = i8 + 8 | 0;
    i11 = i12 | 0;
    i4 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
    if ((i4 | 0) != 0) {
     HEAP32[i11 >> 2] = i4;
     break;
    }
    i4 = i12 - 8 | 0;
    if ((i4 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 63](i4);
   }
  } while (0);
  i8 = i5 | 0;
  i4 = HEAP32[i8 >> 2] | 0;
  HEAP32[i8 >> 2] = i1;
  if ((i4 | 0) == 0) {
   STACKTOP = i6;
   return;
  }
  i1 = i4 + 4 | 0;
  i4 = i1 | 0;
  i8 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
  if ((i8 | 0) != 0) {
   HEAP32[i4 >> 2] = i8;
   STACKTOP = i6;
   return;
  }
  i8 = i1 - 4 | 0;
  if ((i8 | 0) == 0) {
   STACKTOP = i6;
   return;
  }
  __ZN7WebCore6IDBAnyD1Ev(i8);
  __ZN3WTF8fastFreeEPv(i8);
  STACKTOP = i6;
  return;
 }
 i8 = i10 | 0;
 i1 = i2 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i8 >> 2] = i2;
 __ZN7WebCore18IDBCursorWithValue10fromCursorEN3WTF10PassRefPtrINS_9IDBCursorEEE(i9, i10);
 i10 = __ZN3WTF10fastMallocEj(88) | 0;
 i2 = i7 | 0;
 i1 = i9 | 0;
 i9 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i2 >> 2] = i9;
 __ZN7WebCore6IDBAnyC1EN3WTF10PassRefPtrINS_18IDBCursorWithValueEEE(i10, i7);
 i7 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i2 = i7 + 8 | 0;
   i9 = i2 | 0;
   i4 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i9 >> 2] = i4;
    break;
   }
   i4 = i2 - 8 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 63](i4);
  }
 } while (0);
 i7 = i5 | 0;
 i5 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i10;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 4 | 0;
   i7 = i10 | 0;
   i4 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i7 >> 2] = i4;
    break;
   }
   i4 = i10 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   __ZN7WebCore6IDBAnyD1Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  }
 } while (0);
 i5 = HEAP32[i1 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i1 = i5 + 8 | 0;
   i4 = i1 | 0;
   i10 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) != 0) {
    HEAP32[i4 >> 2] = i10;
    break;
   }
   i10 = i1 - 8 | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 63](i10);
  }
 } while (0);
 i5 = HEAP32[i8 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i8 = i5 + 8 | 0;
 i5 = i8 | 0;
 i10 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i10 | 0) != 0) {
  HEAP32[i5 >> 2] = i10;
  STACKTOP = i6;
  return;
 }
 i10 = i8 - 8 | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 63](i10);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore10IDBRequest9onSuccessEN3WTF10PassRefPtrINS_6IDBKeyEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 24 | 0;
 i7 = i3 + 32 | 0;
 i8 = i3 + 40 | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 80 >> 2] & 31](i1) | 0)) {
  STACKTOP = i3;
  return;
 }
 i9 = i2 | 0;
 i2 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   i10 = 16;
  } else {
   if (!(__ZNK7WebCore6IDBKey7isValidEv(i2) | 0)) {
    i10 = 16;
    break;
   }
   i11 = HEAP32[i1 + 156 >> 2] | 0;
   i12 = i11 + 16 | 0;
   i13 = HEAP32[(HEAP32[i12 >> 2] & -65536) + 1076 >> 2] | 0;
   HEAP32[i4 >> 2] = i13;
   if ((i13 | 0) != 0) {
    i14 = i13 | 0;
    tempValue = HEAP32[i14 >> 2] | 0, HEAP32[i14 >> 2] = tempValue + 1, tempValue;
   }
   i14 = __ZN3WTF13wtfThreadDataEv() | 0;
   i15 = i14 + 16 | 0;
   i14 = HEAP32[i15 >> 2] | 0;
   HEAP32[i15 >> 2] = HEAP32[i13 + 20880 >> 2];
   HEAP32[i4 + 4 >> 2] = i14;
   __ZN3JSC14MachineThreads16addCurrentThreadEv(i13 + 19828 | 0);
   __ZN3JSC12JSLockHolderC1EPNS_9ExecStateE(i4 + 8 | 0, (HEAP32[(HEAP32[(HEAP32[i12 >> 2] & -65536) + 1076 >> 2] | 0) + 24780 >> 2] | 0) != 0 ? 0 : i11);
   i11 = i6 | 0;
   i12 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = 0;
   HEAP32[i11 >> 2] = i12;
   __ZN7WebCore19idbKeyToScriptValueEPNS_15DOMRequestStateEN3WTF10PassRefPtrINS_6IDBKeyEEE(i5, i1 + 152 | 0, i6);
   i12 = __ZN3WTF10fastMallocEj(88) | 0;
   __ZN7WebCore6IDBAnyC1ERKN10Deprecated11ScriptValueE(i12, i5);
   i13 = i1 + 60 | 0;
   i14 = HEAP32[i13 >> 2] | 0;
   HEAP32[i13 >> 2] = i12;
   do {
    if ((i14 | 0) != 0) {
     i12 = i14 + 4 | 0;
     i13 = i12 | 0;
     i15 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
     if ((i15 | 0) != 0) {
      HEAP32[i13 >> 2] = i15;
      break;
     }
     i15 = i12 - 4 | 0;
     if ((i15 | 0) == 0) {
      break;
     }
     __ZN7WebCore6IDBAnyD1Ev(i15);
     __ZN3WTF8fastFreeEPv(i15);
    }
   } while (0);
   __ZN10Deprecated11ScriptValueD1Ev(i5);
   i14 = HEAP32[i11 >> 2] | 0;
   do {
    if ((i14 | 0) != 0) {
     i15 = i14 | 0;
     i12 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
     if ((i12 | 0) == 0) {
      __ZN7WebCore6IDBKeyD1Ev(i14);
      __ZN3WTF8fastFreeEPv(i14);
      break;
     } else {
      HEAP32[i15 >> 2] = i12;
      break;
     }
    }
   } while (0);
   __ZN3JSC12APIEntryShimD2Ev(i4 | 0);
  }
 } while (0);
 do {
  if ((i10 | 0) == 16) {
   __ZN7WebCore6IDBAny13createInvalidEv(i7);
   i4 = i7 | 0;
   i5 = HEAP32[i4 >> 2] | 0;
   HEAP32[i4 >> 2] = 0;
   i6 = i1 + 60 | 0;
   i9 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = i5;
   do {
    if ((i9 | 0) != 0) {
     i5 = i9 + 4 | 0;
     i6 = i5 | 0;
     i2 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
     if ((i2 | 0) != 0) {
      HEAP32[i6 >> 2] = i2;
      break;
     }
     i2 = i5 - 4 | 0;
     if ((i2 | 0) == 0) {
      break;
     }
     __ZN7WebCore6IDBAnyD1Ev(i2);
     __ZN3WTF8fastFreeEPv(i2);
    }
   } while (0);
   i9 = HEAP32[i4 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   i2 = i9 + 4 | 0;
   i9 = i2 | 0;
   i5 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i9 >> 2] = i5;
    break;
   }
   i5 = i2 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   __ZN7WebCore6IDBAnyD1Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  }
 } while (0);
 i7 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 648 | 0;
 i10 = __ZN3WTF10fastMallocEj(56) | 0;
 __ZN7WebCore5EventC1ERKN3WTF12AtomicStringEbb(i10, i7, 0, 0);
 i7 = i8 | 0;
 HEAP32[i7 >> 2] = i10;
 __ZN7WebCore10IDBRequest12enqueueEventEN3WTF10PassRefPtrINS_5EventEEE(i1, i8);
 i8 = HEAP32[i7 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i7 = i8 + 8 | 0;
 i8 = i7 | 0;
 i1 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i8 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
 i1 = i7 - 8 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 63](i1);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore10IDBRequestD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 HEAP32[i1 >> 2] = H_BASE + 232;
 HEAP32[i1 + 12 >> 2] = H_BASE + 336;
 HEAP32[i1 + 48 >> 2] = H_BASE + 408;
 __ZN10Deprecated11ScriptValueD1Ev(i1 + 140 | 0);
 i2 = HEAP32[i1 + 136 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore6IDBKeyD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 132 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) == 0) {
    __ZN7WebCore6IDBKeyD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 128 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 8 | 0;
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    break;
   }
   i5 = i3 - 8 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 63](i5);
  }
 } while (0);
 i2 = i1 + 112 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 i3 = i1 + 104 | 0;
 if ((i5 | 0) != 0) {
  i4 = HEAP32[i3 >> 2] | 0;
  i6 = i4 + (i5 << 2) | 0;
  i5 = i4;
  while (1) {
   i4 = HEAP32[i5 >> 2] | 0;
   do {
    if ((i4 | 0) != 0) {
     i7 = i4 + 8 | 0;
     i8 = i7 | 0;
     i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     if ((i9 | 0) != 0) {
      HEAP32[i8 >> 2] = i9;
      break;
     }
     i9 = i7 - 8 | 0;
     if ((i9 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 63](i9);
    }
   } while (0);
   i5 = i5 + 4 | 0;
   if ((i5 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i1 + 108 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 92 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 4 | 0;
   i6 = i3 | 0;
   i5 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i6 >> 2] = i5;
    break;
   }
   i5 = i3 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   __ZN7WebCore6IDBAnyD1Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  }
 } while (0);
 i2 = HEAP32[i1 + 80 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 + 40 | 0;
   i3 = i5 | 0;
   i6 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i3 >> 2] = i6;
    break;
   }
   i6 = i5 - 40 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 44 >> 2] & 63](i6);
  }
 } while (0);
 i2 = HEAP32[i1 + 72 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i6 = i2 + 4 | 0;
   i5 = i6 | 0;
   i3 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i5 >> 2] = i3;
    break;
   }
   i3 = i6 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 63](i3);
  }
 } while (0);
 i2 = HEAP32[i1 + 68 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i6 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 60 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i6 = i2 + 4 | 0;
   i3 = i6 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i3 >> 2] = i5;
    break;
   }
   i5 = i6 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   __ZN7WebCore6IDBAnyD1Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  }
 } while (0);
 __ZN7WebCore15ActiveDOMObjectD2Ev(i1 + 48 | 0);
 i2 = i1 + 12 | 0;
 HEAP32[i2 >> 2] = H_BASE + 72;
 __ZN7WebCore15EventTargetDataD1Ev(i1 + 16 | 0);
 __ZN7WebCore11EventTargetD2Ev(i2 | 0);
 i2 = i1 + 8 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 return;
}
function __ZN7WebCore10IDBRequestD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 HEAP32[i1 >> 2] = H_BASE + 232;
 HEAP32[i1 + 12 >> 2] = H_BASE + 336;
 HEAP32[i1 + 48 >> 2] = H_BASE + 408;
 __ZN10Deprecated11ScriptValueD1Ev(i1 + 140 | 0);
 i2 = HEAP32[i1 + 136 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore6IDBKeyD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 132 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) == 0) {
    __ZN7WebCore6IDBKeyD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 128 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 8 | 0;
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    break;
   }
   i5 = i3 - 8 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 63](i5);
  }
 } while (0);
 i2 = i1 + 112 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 i3 = i1 + 104 | 0;
 if ((i5 | 0) != 0) {
  i4 = HEAP32[i3 >> 2] | 0;
  i6 = i4 + (i5 << 2) | 0;
  i5 = i4;
  while (1) {
   i4 = HEAP32[i5 >> 2] | 0;
   do {
    if ((i4 | 0) != 0) {
     i7 = i4 + 8 | 0;
     i8 = i7 | 0;
     i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     if ((i9 | 0) != 0) {
      HEAP32[i8 >> 2] = i9;
      break;
     }
     i9 = i7 - 8 | 0;
     if ((i9 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 63](i9);
    }
   } while (0);
   i5 = i5 + 4 | 0;
   if ((i5 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i1 + 108 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 92 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 4 | 0;
   i6 = i3 | 0;
   i5 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i6 >> 2] = i5;
    break;
   }
   i5 = i3 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   __ZN7WebCore6IDBAnyD1Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  }
 } while (0);
 i2 = HEAP32[i1 + 80 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 + 40 | 0;
   i3 = i5 | 0;
   i6 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i3 >> 2] = i6;
    break;
   }
   i6 = i5 - 40 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 44 >> 2] & 63](i6);
  }
 } while (0);
 i2 = HEAP32[i1 + 72 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i6 = i2 + 4 | 0;
   i5 = i6 | 0;
   i3 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i5 >> 2] = i3;
    break;
   }
   i3 = i6 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 63](i3);
  }
 } while (0);
 i2 = HEAP32[i1 + 68 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i6 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 60 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i6 = i2 + 4 | 0;
   i3 = i6 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i3 >> 2] = i5;
    break;
   }
   i5 = i6 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   __ZN7WebCore6IDBAnyD1Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  }
 } while (0);
 __ZN7WebCore15ActiveDOMObjectD2Ev(i1 + 48 | 0);
 i2 = i1 + 12 | 0;
 HEAP32[i2 >> 2] = H_BASE + 72;
 __ZN7WebCore15EventTargetDataD1Ev(i1 + 16 | 0);
 __ZN7WebCore11EventTargetD2Ev(i2 | 0);
 i2 = i1 + 8 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 return;
}
function __ZN7WebCore10IDBRequest9onSuccessEN3WTF10PassRefPtrINS_6IDBKeyEEES4_NS2_INS_12SharedBufferEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 i8 = i5 + 24 | 0;
 i9 = i5 + 32 | 0;
 i10 = i5 + 40 | 0;
 i11 = i5 + 48 | 0;
 i12 = i5 + 56 | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 80 >> 2] & 31](i1) | 0)) {
  STACKTOP = i5;
  return;
 }
 i13 = HEAP32[i1 + 156 >> 2] | 0;
 i14 = i13 + 16 | 0;
 i15 = HEAP32[(HEAP32[i14 >> 2] & -65536) + 1076 >> 2] | 0;
 HEAP32[i6 >> 2] = i15;
 if ((i15 | 0) != 0) {
  i16 = i15 | 0;
  tempValue = HEAP32[i16 >> 2] | 0, HEAP32[i16 >> 2] = tempValue + 1, tempValue;
 }
 i16 = __ZN3WTF13wtfThreadDataEv() | 0;
 i17 = i16 + 16 | 0;
 i16 = HEAP32[i17 >> 2] | 0;
 HEAP32[i17 >> 2] = HEAP32[i15 + 20880 >> 2];
 HEAP32[i6 + 4 >> 2] = i16;
 __ZN3JSC14MachineThreads16addCurrentThreadEv(i15 + 19828 | 0);
 __ZN3JSC12JSLockHolderC1EPNS_9ExecStateE(i6 + 8 | 0, (HEAP32[(HEAP32[(HEAP32[i14 >> 2] & -65536) + 1076 >> 2] | 0) + 24780 >> 2] | 0) != 0 ? 0 : i13);
 i13 = i8 | 0;
 i14 = i4 | 0;
 i4 = HEAP32[i14 >> 2] | 0;
 HEAP32[i14 >> 2] = 0;
 HEAP32[i13 >> 2] = i4;
 __ZN7WebCore25deserializeIDBValueBufferEPNS_15DOMRequestStateEN3WTF10PassRefPtrINS_12SharedBufferEEE(i7, i1 + 152 | 0, i8);
 i8 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i13 = i8 | 0;
   i4 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore12SharedBufferD1Ev(i8);
    __ZN3WTF8fastFreeEPv(i8);
    break;
   } else {
    HEAP32[i13 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i8 = i1 + 128 | 0;
 i4 = i9 | 0;
 HEAP32[i4 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i8 >> 2] = 0;
 i8 = i10 | 0;
 i13 = i2 | 0;
 i2 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 HEAP32[i8 >> 2] = i2;
 i2 = i11 | 0;
 i13 = i3 | 0;
 i3 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 HEAP32[i2 >> 2] = i3;
 __ZN7WebCore10IDBRequest15setResultCursorEN3WTF10PassRefPtrINS_9IDBCursorEEENS2_INS_6IDBKeyEEES6_RKN10Deprecated11ScriptValueE(i1, i9, i10, i11, i7);
 i11 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i2 = i11 | 0;
   i10 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) == 0) {
    __ZN7WebCore6IDBKeyD1Ev(i11);
    __ZN3WTF8fastFreeEPv(i11);
    break;
   } else {
    HEAP32[i2 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i11 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i8 = i11 | 0;
   i10 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) == 0) {
    __ZN7WebCore6IDBKeyD1Ev(i11);
    __ZN3WTF8fastFreeEPv(i11);
    break;
   } else {
    HEAP32[i8 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i11 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i4 = i11 + 8 | 0;
   i10 = i4 | 0;
   i8 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i10 >> 2] = i8;
    break;
   }
   i8 = i4 - 8 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 63](i8);
  }
 } while (0);
 i11 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 648 | 0;
 i8 = __ZN3WTF10fastMallocEj(56) | 0;
 __ZN7WebCore5EventC1ERKN3WTF12AtomicStringEbb(i8, i11, 0, 0);
 i11 = i12 | 0;
 HEAP32[i11 >> 2] = i8;
 __ZN7WebCore10IDBRequest12enqueueEventEN3WTF10PassRefPtrINS_5EventEEE(i1, i12);
 i12 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i11 = i12 + 8 | 0;
   i1 = i11 | 0;
   i8 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i1 >> 2] = i8;
    break;
   }
   i8 = i11 - 8 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 63](i8);
  }
 } while (0);
 __ZN10Deprecated11ScriptValueD1Ev(i7);
 __ZN3JSC12APIEntryShimD2Ev(i6 | 0);
 STACKTOP = i5;
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 72 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_iiiii + 4;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_iiiii + 2;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_vi + 40;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 204 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 208 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 232 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 236 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 240 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 244 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 248 >> 2] = F_BASE_viiiii + 6;
 HEAP32[H_BASE + 252 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 256 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 260 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 264 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 268 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 272 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 276 >> 2] = F_BASE_viiii + 6;
 HEAP32[H_BASE + 280 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 284 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 288 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 292 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 296 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 300 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 304 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 308 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 312 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 316 >> 2] = F_BASE_vi + 30;
 HEAP32[H_BASE + 320 >> 2] = F_BASE_vi + 48;
 HEAP32[H_BASE + 324 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 336 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 340 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 344 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 348 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 352 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 356 >> 2] = F_BASE_iiiii + 4;
 HEAP32[H_BASE + 360 >> 2] = F_BASE_iiiii + 2;
 HEAP32[H_BASE + 364 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 368 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 372 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 376 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 380 >> 2] = F_BASE_vi + 42;
 HEAP32[H_BASE + 384 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 388 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 392 >> 2] = F_BASE_vi + 32;
 HEAP32[H_BASE + 396 >> 2] = F_BASE_vi + 46;
 HEAP32[H_BASE + 408 >> 2] = F_BASE_vi + 44;
 HEAP32[H_BASE + 412 >> 2] = F_BASE_vi + 38;
 HEAP32[H_BASE + 416 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 420 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 424 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 428 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 432 >> 2] = F_BASE_vi + 28;
 HEAP32[H_BASE + 436 >> 2] = F_BASE_vi + 34;
}
function __ZN7WebCore10IDBRequest7onErrorEN3WTF10PassRefPtrINS_16IDBDatabaseErrorEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 80 >> 2] & 31](i1) | 0)) {
  STACKTOP = i3;
  return;
 }
 i6 = i2 | 0;
 HEAP16[i1 + 64 >> 1] = __ZN7WebCore20IDBDatabaseException18getLegacyErrorCodeEi(HEAPU16[(HEAP32[i6 >> 2] | 0) + 4 >> 1] | 0) | 0;
 i2 = HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i7 = i2 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = i1 + 68 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i2;
 do {
  if ((i8 | 0) != 0) {
   i2 = i8 | 0;
   i7 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i2 >> 2] = i7;
    break;
   }
  }
 } while (0);
 __ZN7WebCore20IDBDatabaseException12getErrorNameEi(i4, HEAPU16[(HEAP32[i6 >> 2] | 0) + 4 >> 1] | 0);
 i6 = __ZN3WTF10fastMallocEj(12) | 0;
 __ZN7WebCore8DOMErrorC1ERKN3WTF6StringE(i6, i4);
 i8 = i1 + 72 | 0;
 i7 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = i6;
 do {
  if ((i7 | 0) != 0) {
   i6 = i7 + 4 | 0;
   i8 = i6 | 0;
   i2 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i8 >> 2] = i2;
    break;
   }
   i2 = i6 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 63](i2);
  }
 } while (0);
 i7 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i4 = i7 | 0;
   i2 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i4 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i7 = i1 + 128 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 do {
  if ((i2 | 0) != 0) {
   i7 = i2 + 8 | 0;
   i4 = i7 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i4 >> 2] = i6;
    break;
   }
   i6 = i7 - 8 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 63](i6);
  }
 } while (0);
 i2 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 148 | 0;
 i6 = __ZN3WTF10fastMallocEj(56) | 0;
 __ZN7WebCore5EventC1ERKN3WTF12AtomicStringEbb(i6, i2, 1, 1);
 i2 = i5 | 0;
 HEAP32[i2 >> 2] = i6;
 __ZN7WebCore10IDBRequest12enqueueEventEN3WTF10PassRefPtrINS_5EventEEE(i1, i5);
 i5 = HEAP32[i2 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i2 = i5 + 8 | 0;
 i5 = i2 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i5 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
 i1 = i2 - 8 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 63](i1);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore10IDBRequest9onSuccessEN3WTF10PassRefPtrINS_12SharedBufferEEENS2_INS_6IDBKeyEEERKNS_10IDBKeyPathE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 i8 = i5 + 24 | 0;
 i9 = i5 + 32 | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 80 >> 2] & 31](i1) | 0)) {
  STACKTOP = i5;
  return;
 }
 i10 = i1 + 152 | 0;
 i11 = HEAP32[i1 + 156 >> 2] | 0;
 i12 = i11 + 16 | 0;
 i13 = HEAP32[(HEAP32[i12 >> 2] & -65536) + 1076 >> 2] | 0;
 HEAP32[i6 >> 2] = i13;
 if ((i13 | 0) != 0) {
  i14 = i13 | 0;
  tempValue = HEAP32[i14 >> 2] | 0, HEAP32[i14 >> 2] = tempValue + 1, tempValue;
 }
 i14 = __ZN3WTF13wtfThreadDataEv() | 0;
 i15 = i14 + 16 | 0;
 i14 = HEAP32[i15 >> 2] | 0;
 HEAP32[i15 >> 2] = HEAP32[i13 + 20880 >> 2];
 HEAP32[i6 + 4 >> 2] = i14;
 __ZN3JSC14MachineThreads16addCurrentThreadEv(i13 + 19828 | 0);
 __ZN3JSC12JSLockHolderC1EPNS_9ExecStateE(i6 + 8 | 0, (HEAP32[(HEAP32[(HEAP32[i12 >> 2] & -65536) + 1076 >> 2] | 0) + 24780 >> 2] | 0) != 0 ? 0 : i11);
 i11 = i8 | 0;
 i12 = i2 | 0;
 i2 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = 0;
 HEAP32[i11 >> 2] = i2;
 __ZN7WebCore25deserializeIDBValueBufferEPNS_15DOMRequestStateEN3WTF10PassRefPtrINS_12SharedBufferEEE(i7, i10, i8);
 i8 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i11 = i8 | 0;
   i2 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) == 0) {
    __ZN7WebCore12SharedBufferD1Ev(i8);
    __ZN3WTF8fastFreeEPv(i8);
    break;
   } else {
    HEAP32[i11 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 i8 = i9 | 0;
 HEAP32[i8 >> 2] = i3;
 i2 = (i3 | 0) == 0;
 if (!i2) {
  i11 = i3 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
 }
 __ZN7WebCore27injectIDBKeyIntoScriptValueEPNS_15DOMRequestStateEN3WTF10PassRefPtrINS_6IDBKeyEEERN10Deprecated11ScriptValueERKNS_10IDBKeyPathE(i10, i9, i7, i4) | 0;
 i4 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i8 = i4 | 0;
   i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) == 0) {
    __ZN7WebCore6IDBKeyD1Ev(i4);
    __ZN3WTF8fastFreeEPv(i4);
    break;
   } else {
    HEAP32[i8 >> 2] = i9;
    break;
   }
  }
 } while (0);
 __ZN7WebCore10IDBRequest17onSuccessInternalERKN10Deprecated11ScriptValueE(i1, i7);
 do {
  if (!i2) {
   i1 = i3 | 0;
   i4 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore6IDBKeyD1Ev(i3);
    __ZN3WTF8fastFreeEPv(i3);
    break;
   } else {
    HEAP32[i1 >> 2] = i4;
    break;
   }
  }
 } while (0);
 __ZN10Deprecated11ScriptValueD1Ev(i7);
 __ZN3JSC12APIEntryShimD2Ev(i6 | 0);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore10IDBRequest9onSuccessEN3WTF10PassRefPtrINS_13DOMStringListEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 80 >> 2] & 31](i1) | 0)) {
  STACKTOP = i3;
  return;
 }
 i6 = i2 | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 i6 = __ZN3WTF10fastMallocEj(88) | 0;
 i7 = i4 | 0;
 HEAP32[i7 >> 2] = i2;
 __ZN7WebCore6IDBAnyC1EN3WTF10PassRefPtrINS_13DOMStringListEEE(i6, i4);
 i4 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i7 = i4 | 0;
   i2 = i4 | 0;
   i8 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i2 >> 2] = i8;
    break;
   }
   i8 = i7 + 12 | 0;
   i2 = HEAP32[i8 >> 2] | 0;
   i9 = i7 + 4 | 0;
   i10 = i9;
   if ((i2 | 0) != 0) {
    i11 = HEAP32[i10 >> 2] | 0;
    i12 = i11 + (i2 << 2) | 0;
    i2 = i11;
    while (1) {
     i11 = HEAP32[i2 >> 2] | 0;
     do {
      if ((i11 | 0) != 0) {
       i13 = i11 | 0;
       i14 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
       if ((i14 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i11);
        break;
       } else {
        HEAP32[i13 >> 2] = i14;
        break;
       }
      }
     } while (0);
     i2 = i2 + 4 | 0;
     if ((i2 | 0) == (i12 | 0)) {
      break;
     }
    }
    HEAP32[i8 >> 2] = 0;
   }
   i12 = HEAP32[i10 >> 2] | 0;
   if ((i12 | 0) != 0) {
    HEAP32[i9 >> 2] = 0;
    HEAP32[i7 + 8 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i12);
   }
   __ZN3WTF8fastFreeEPv(i4);
  }
 } while (0);
 i4 = i1 + 60 | 0;
 i12 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i6;
 do {
  if ((i12 | 0) != 0) {
   i6 = i12 + 4 | 0;
   i4 = i6 | 0;
   i2 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i4 >> 2] = i2;
    break;
   }
   i2 = i6 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   __ZN7WebCore6IDBAnyD1Ev(i2);
   __ZN3WTF8fastFreeEPv(i2);
  }
 } while (0);
 i12 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 648 | 0;
 i2 = __ZN3WTF10fastMallocEj(56) | 0;
 __ZN7WebCore5EventC1ERKN3WTF12AtomicStringEbb(i2, i12, 0, 0);
 i12 = i5 | 0;
 HEAP32[i12 >> 2] = i2;
 __ZN7WebCore10IDBRequest12enqueueEventEN3WTF10PassRefPtrINS_5EventEEE(i1, i5);
 i5 = HEAP32[i12 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i12 = i5 + 8 | 0;
 i5 = i12 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i5 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
 i1 = i12 - 8 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 63](i1);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore10IDBRequest12enqueueEventEN3WTF10PassRefPtrINS_5EventEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 if ((HEAP8[i1 + 76 | 0] & 1) != 0) {
  STACKTOP = i3;
  return;
 }
 i6 = i1 + 52 | 0;
 if ((HEAP32[i6 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i7 = i2 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 i8 = i1 + 12 | 0;
 i9 = i4 | 0;
 HEAP32[i9 >> 2] = i8;
 if ((i8 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 56 >> 2] & 63](i8);
 }
 __ZN7WebCore5Event9setTargetEN3WTF10PassRefPtrINS_11EventTargetEEE(i2, i4);
 i4 = HEAP32[i9 >> 2] | 0;
 if ((i4 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 60 >> 2] & 63](i4);
 }
 i4 = HEAP32[i6 >> 2] | 0;
 i6 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 72 >> 2] & 31](i4) | 0;
 i4 = HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] | 0;
 i9 = HEAP32[i7 >> 2] | 0;
 i2 = i5 | 0;
 HEAP32[i2 >> 2] = i9;
 if ((i9 | 0) != 0) {
  i8 = i9 + 8 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 }
 i8 = FUNCTION_TABLE_iii[i4 & 7](i6, i5) | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i2 = i5 + 8 | 0;
   i6 = i2 | 0;
   i4 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i6 >> 2] = i4;
    break;
   }
   i4 = i2 - 8 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 63](i4);
  }
 } while (0);
 if (!i8) {
  STACKTOP = i3;
  return;
 }
 i8 = i1 + 104 | 0;
 i5 = i1 + 112 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) == (HEAP32[i1 + 108 >> 2] | 0)) {
  __ZN3WTF6VectorINS_6RefPtrIN7WebCore5EventEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i8, i4 + 1 | 0);
  i1 = (HEAP32[i8 >> 2] | 0) + (HEAP32[i5 >> 2] << 2) | 0;
  i2 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = 0;
  HEAP32[i1 >> 2] = i2;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
  STACKTOP = i3;
  return;
 } else {
  i2 = (HEAP32[i8 >> 2] | 0) + (i4 << 2) | 0;
  i4 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = 0;
  HEAP32[i2 >> 2] = i4;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
  STACKTOP = i3;
  return;
 }
}
function __ZN3JSC6StrongINS_7UnknownEEaSERKS2_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i2 = i1 | 0;
  i6 = HEAP32[i2 >> 2] | 0;
  if ((i6 | 0) == 0) {
   STACKTOP = i3;
   return i1 | 0;
  }
  i7 = HEAP32[(i6 & -4096) + 12 >> 2] | 0;
  i8 = i6;
  i9 = i7 + 84 | 0;
  i10 = i8 + 12 | 0;
  if ((i8 | 0) == (HEAP32[i9 >> 2] | 0)) {
   HEAP32[i9 >> 2] = HEAP32[i10 >> 2];
  }
  i9 = i6 + 8 | 0;
  i6 = HEAP32[i9 >> 2] | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  HEAP32[i6 + 12 >> 2] = i11;
  HEAP32[i11 + 8 >> 2] = i6;
  HEAP32[i9 >> 2] = 0;
  HEAP32[i10 >> 2] = 0;
  i9 = i7 + 80 | 0;
  HEAP32[i10 >> 2] = HEAP32[i9 >> 2];
  HEAP32[i9 >> 2] = i8;
  HEAP32[i2 >> 2] = 0;
  STACKTOP = i3;
  return i1 | 0;
 }
 i2 = HEAP32[HEAP32[(i5 & -4096) + 12 >> 2] >> 2] | 0;
 i8 = i5 | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 i9 = HEAP32[i8 + 4 >> 2] | 0;
 i8 = i1 | 0;
 i10 = HEAP32[i8 >> 2] | 0;
 if ((i10 | 0) == 0) {
  if ((HEAP32[i2 + 20444 >> 2] | 0) != 0) {
   _WTFCrash();
   return 0;
  }
  i7 = i2 + 20440 | 0;
  i6 = HEAP32[i7 >> 2] | 0;
  if ((i6 | 0) == 0) {
   __ZN3JSC9HandleSet4growEv(i2 + 20360 | 0);
   i12 = HEAP32[i7 >> 2] | 0;
  } else {
   i12 = i6;
  }
  i6 = i12 + 12 | 0;
  HEAP32[i7 >> 2] = HEAP32[i6 >> 2];
  HEAP32[i12 + 4 >> 2] = -6;
  HEAP32[i12 >> 2] = 0;
  i7 = i12 + 8 | 0;
  HEAP32[i7 >> 2] = 0;
  HEAP32[i6 >> 2] = 0;
  i11 = i2 + 20420 | 0;
  i13 = HEAP32[i11 >> 2] | 0;
  HEAP32[i7 >> 2] = i2 + 20408;
  HEAP32[i6 >> 2] = i13;
  HEAP32[i11 >> 2] = i12;
  HEAP32[i13 + 8 >> 2] = i12;
  i13 = i12 | 0;
  HEAP32[i8 >> 2] = i13;
  i14 = i13;
 } else {
  i14 = i10;
 }
 i10 = i4 | 0;
 HEAP32[i10 >> 2] = i5;
 HEAP32[i10 + 4 >> 2] = i9;
 __ZN3JSC9HandleSet12writeBarrierEPNS_7JSValueERKS1_(HEAP32[(i14 & -4096) + 12 >> 2] | 0, i14, i4);
 i4 = HEAP32[i10 + 4 >> 2] | 0;
 i14 = HEAP32[i8 >> 2] | 0;
 HEAP32[i14 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i14 + 4 >> 2] = i4;
 STACKTOP = i3;
 return i1 | 0;
}
function __ZN7WebCore10IDBRequest16setPendingCursorEN3WTF10PassRefPtrINS_9IDBCursorEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i3 = i1 + 128 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i2;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 + 8 | 0;
   i3 = i2 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i3 >> 2] = i5;
    break;
   }
   i5 = i2 - 8 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 63](i5);
  }
 } while (0);
 i4 = i1 + 60 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 + 4 | 0;
   i2 = i4 | 0;
   i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i2 >> 2] = i3;
    break;
   }
   i3 = i4 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   __ZN7WebCore6IDBAnyD1Ev(i3);
   __ZN3WTF8fastFreeEPv(i3);
  }
 } while (0);
 HEAP32[i1 + 84 >> 2] = 1;
 HEAP16[i1 + 64 >> 1] = 0;
 i5 = i1 + 72 | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 + 4 | 0;
   i4 = i5 | 0;
   i2 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i4 >> 2] = i2;
    break;
   }
   i2 = i5 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 63](i2);
  }
 } while (0);
 i3 = i1 + 68 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i2 | 0) == 0) {
  i6 = i1 + 80 | 0;
  i7 = HEAP32[i6 >> 2] | 0;
  __ZN7WebCore14IDBTransaction15registerRequestEPNS_10IDBRequestE(i7, i1);
  return;
 }
 i3 = i2 | 0;
 i5 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  i6 = i1 + 80 | 0;
  i7 = HEAP32[i6 >> 2] | 0;
  __ZN7WebCore14IDBTransaction15registerRequestEPNS_10IDBRequestE(i7, i1);
  return;
 } else {
  HEAP32[i3 >> 2] = i5;
  i6 = i1 + 80 | 0;
  i7 = HEAP32[i6 >> 2] | 0;
  __ZN7WebCore14IDBTransaction15registerRequestEPNS_10IDBRequestE(i7, i1);
  return;
 }
}
function __ZN7WebCore10IDBRequestC2EPNS_22ScriptExecutionContextEN3WTF10PassRefPtrINS_6IDBAnyEEENS_18IDBDatabaseBackend8TaskTypeEPNS_14IDBTransactionE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 1;
 i6 = i1 | 0;
 HEAP32[i6 >> 2] = H_BASE + 152;
 i7 = i1 + 12 | 0;
 HEAP32[i7 >> 2] = H_BASE + 72;
 __ZN7WebCore15EventTargetDataC1Ev(i1 + 16 | 0);
 __ZN7WebCore15ActiveDOMObjectC2EPNS_22ScriptExecutionContextE(i1 + 48 | 0, i2);
 HEAP32[i6 >> 2] = H_BASE + 232;
 HEAP32[i7 >> 2] = H_BASE + 336;
 HEAP32[i1 + 48 >> 2] = H_BASE + 408;
 HEAP32[i1 + 60 >> 2] = 0;
 HEAP16[i1 + 64 >> 1] = 0;
 HEAP32[i1 + 68 >> 2] = 0;
 HEAP32[i1 + 72 >> 2] = 0;
 HEAP8[i1 + 76 | 0] = 0;
 HEAP32[i1 + 80 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i7 = i5 + 40 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 84 >> 2] = 1;
 HEAP8[i1 + 88 | 0] = 0;
 i7 = i3 | 0;
 i3 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i1 + 92 >> 2] = i3;
 HEAP32[i1 + 96 >> 2] = i4;
 HEAP8[i1 + 100 | 0] = 1;
 HEAP32[i1 + 128 >> 2] = 0;
 HEAP32[i1 + 132 >> 2] = 0;
 HEAP32[i1 + 136 >> 2] = 0;
 _memset(i1 + 104 | 0, 0, 21) | 0;
 HEAP32[i1 + 140 >> 2] = __ZTVN10Deprecated11ScriptValueE + 8;
 HEAP32[i1 + 144 >> 2] = 0;
 HEAP8[i1 + 148 | 0] = 0;
 HEAP8[i1 + 149 | 0] = 0;
 i4 = i1 + 152 | 0;
 HEAP32[i4 >> 2] = i2;
 i3 = i1 + 156 | 0;
 HEAP32[i3 >> 2] = 0;
 i1 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 31](i2) | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 if (!i1) {
  i8 = __ZN7WebCore30execStateFromWorkerGlobalScopeEPNS_17WorkerGlobalScopeE(i2) | 0;
  HEAP32[i3 >> 2] = i8;
  return;
 }
 if ((i2 | 0) == 0) {
  i9 = 0;
 } else {
  i9 = i2 - 156 + 68 | 0;
 }
 i2 = __ZN7WebCore21mainThreadNormalWorldEv() | 0;
 i8 = __ZN7WebCore17execStateFromPageERNS_15DOMWrapperWorldEPNS_4PageE(i2, __ZNK7WebCore8Document4pageEv(i9) | 0) | 0;
 HEAP32[i3 >> 2] = i8;
 return;
}
function __ZN7WebCore10IDBRequestC1EPNS_22ScriptExecutionContextEN3WTF10PassRefPtrINS_6IDBAnyEEENS_18IDBDatabaseBackend8TaskTypeEPNS_14IDBTransactionE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 1;
 i6 = i1 | 0;
 HEAP32[i6 >> 2] = H_BASE + 152;
 i7 = i1 + 12 | 0;
 HEAP32[i7 >> 2] = H_BASE + 72;
 __ZN7WebCore15EventTargetDataC1Ev(i1 + 16 | 0);
 __ZN7WebCore15ActiveDOMObjectC2EPNS_22ScriptExecutionContextE(i1 + 48 | 0, i2);
 HEAP32[i6 >> 2] = H_BASE + 232;
 HEAP32[i7 >> 2] = H_BASE + 336;
 HEAP32[i1 + 48 >> 2] = H_BASE + 408;
 HEAP32[i1 + 60 >> 2] = 0;
 HEAP16[i1 + 64 >> 1] = 0;
 HEAP32[i1 + 68 >> 2] = 0;
 HEAP32[i1 + 72 >> 2] = 0;
 HEAP8[i1 + 76 | 0] = 0;
 HEAP32[i1 + 80 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i7 = i5 + 40 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 84 >> 2] = 1;
 HEAP8[i1 + 88 | 0] = 0;
 i7 = i3 | 0;
 i3 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i1 + 92 >> 2] = i3;
 HEAP32[i1 + 96 >> 2] = i4;
 HEAP8[i1 + 100 | 0] = 1;
 HEAP32[i1 + 128 >> 2] = 0;
 HEAP32[i1 + 132 >> 2] = 0;
 HEAP32[i1 + 136 >> 2] = 0;
 _memset(i1 + 104 | 0, 0, 21) | 0;
 HEAP32[i1 + 140 >> 2] = __ZTVN10Deprecated11ScriptValueE + 8;
 HEAP32[i1 + 144 >> 2] = 0;
 HEAP8[i1 + 148 | 0] = 0;
 HEAP8[i1 + 149 | 0] = 0;
 i4 = i1 + 152 | 0;
 HEAP32[i4 >> 2] = i2;
 i3 = i1 + 156 | 0;
 HEAP32[i3 >> 2] = 0;
 i1 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 31](i2) | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 if (!i1) {
  i8 = __ZN7WebCore30execStateFromWorkerGlobalScopeEPNS_17WorkerGlobalScopeE(i2) | 0;
  HEAP32[i3 >> 2] = i8;
  return;
 }
 if ((i2 | 0) == 0) {
  i9 = 0;
 } else {
  i9 = i2 - 156 + 68 | 0;
 }
 i2 = __ZN7WebCore21mainThreadNormalWorldEv() | 0;
 i8 = __ZN7WebCore17execStateFromPageERNS_15DOMWrapperWorldEPNS_4PageE(i2, __ZNK7WebCore8Document4pageEv(i9) | 0) | 0;
 HEAP32[i3 >> 2] = i8;
 return;
}
function __ZN7WebCore10IDBRequest17onSuccessInternalERKN10Deprecated11ScriptValueE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = __ZN3WTF10fastMallocEj(88) | 0;
 __ZN7WebCore6IDBAnyC1ERKN10Deprecated11ScriptValueE(i5, i2);
 i2 = i1 + 60 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i5;
 do {
  if ((i6 | 0) != 0) {
   i5 = i6 + 4 | 0;
   i2 = i5 | 0;
   i7 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i2 >> 2] = i7;
    break;
   }
   i7 = i5 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   __ZN7WebCore6IDBAnyD1Ev(i7);
   __ZN3WTF8fastFreeEPv(i7);
  }
 } while (0);
 i6 = i1 + 128 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   __ZN7WebCore9IDBCursor5closeEv(i7);
   i5 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = 0;
   if ((i5 | 0) == 0) {
    break;
   }
   i2 = i5 + 8 | 0;
   i5 = i2 | 0;
   i8 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i5 >> 2] = i8;
    break;
   }
   i8 = i2 - 8 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 63](i8);
  }
 } while (0);
 i6 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 648 | 0;
 i7 = __ZN3WTF10fastMallocEj(56) | 0;
 __ZN7WebCore5EventC1ERKN3WTF12AtomicStringEbb(i7, i6, 0, 0);
 i6 = i4 | 0;
 HEAP32[i6 >> 2] = i7;
 __ZN7WebCore10IDBRequest12enqueueEventEN3WTF10PassRefPtrINS_5EventEEE(i1, i4);
 i4 = HEAP32[i6 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = i4 + 8 | 0;
 i4 = i6 | 0;
 i1 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i4 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
 i1 = i6 - 8 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 63](i1);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore10IDBRequest17onSuccessInternalEN3WTF10PassRefPtrINS_21SerializedScriptValueEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 24 | 0;
 i7 = HEAP32[i1 + 156 >> 2] | 0;
 i8 = i7 + 16 | 0;
 i9 = HEAP32[(HEAP32[i8 >> 2] & -65536) + 1076 >> 2] | 0;
 HEAP32[i4 >> 2] = i9;
 if ((i9 | 0) != 0) {
  i10 = i9 | 0;
  tempValue = HEAP32[i10 >> 2] | 0, HEAP32[i10 >> 2] = tempValue + 1, tempValue;
 }
 i10 = __ZN3WTF13wtfThreadDataEv() | 0;
 i11 = i10 + 16 | 0;
 i10 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = HEAP32[i9 + 20880 >> 2];
 HEAP32[i4 + 4 >> 2] = i10;
 __ZN3JSC14MachineThreads16addCurrentThreadEv(i9 + 19828 | 0);
 __ZN3JSC12JSLockHolderC1EPNS_9ExecStateE(i4 + 8 | 0, (HEAP32[(HEAP32[(HEAP32[i8 >> 2] & -65536) + 1076 >> 2] | 0) + 24780 >> 2] | 0) != 0 ? 0 : i7);
 i7 = i6 | 0;
 i8 = i2 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i7 >> 2] = i2;
 __ZN7WebCore19deserializeIDBValueEPNS_15DOMRequestStateEN3WTF10PassRefPtrINS_21SerializedScriptValueEEE(i5, i1 + 152 | 0, i6);
 __ZN7WebCore10IDBRequest17onSuccessInternalERKN10Deprecated11ScriptValueE(i1, i5);
 __ZN10Deprecated11ScriptValueD1Ev(i5);
 i5 = HEAP32[i7 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i12 = i4 | 0;
  __ZN3JSC12APIEntryShimD2Ev(i12);
  STACKTOP = i3;
  return;
 }
 i7 = i5 | 0;
 if (((tempValue = HEAP32[i7 >> 2] | 0, HEAP32[i7 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  i12 = i4 | 0;
  __ZN3JSC12APIEntryShimD2Ev(i12);
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore21SerializedScriptValueD1Ev(i5);
 __ZN3WTF8fastFreeEPv(i5);
 i12 = i4 | 0;
 __ZN3JSC12APIEntryShimD2Ev(i12);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore10IDBRequest31uncaughtExceptionInEventHandlerEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i1 + 80 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP8[i1 + 88 | 0] & 1) != 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore20IDBDatabaseException12getErrorNameEi(i4, 1210);
 i1 = __ZN3WTF10fastMallocEj(12) | 0;
 __ZN7WebCore8DOMErrorC1ERKN3WTF6StringE(i1, i4);
 i9 = i3 | 0;
 HEAP32[i9 >> 2] = i1;
 __ZN3WTF6StringC1EPKc(i5, H_BASE + 8 | 0);
 __ZN7WebCore14IDBTransaction8setErrorEN3WTF10PassRefPtrINS_8DOMErrorEEERKNS1_6StringE(i8, i3, i5);
 i3 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 | 0;
   i8 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i5 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i9 = i3 + 4 | 0;
   i8 = i9 | 0;
   i5 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i8 >> 2] = i5;
    break;
   }
   i5 = i9 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 63](i5);
  }
 } while (0);
 i3 = HEAP32[i4 >> 2] | 0;
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
 i3 = HEAP32[i7 >> 2] | 0;
 i7 = i6 | 0;
 HEAP32[i7 >> 2] = 0;
 __ZN7WebCore14IDBTransaction5abortERi(i3, i7);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore10IDBRequest9onSuccessEN3WTF10PassRefPtrINS_12SharedBufferEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 24 | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 80 >> 2] & 31](i1) | 0)) {
  STACKTOP = i3;
  return;
 }
 i7 = HEAP32[i1 + 156 >> 2] | 0;
 i8 = i7 + 16 | 0;
 i9 = HEAP32[(HEAP32[i8 >> 2] & -65536) + 1076 >> 2] | 0;
 HEAP32[i4 >> 2] = i9;
 if ((i9 | 0) != 0) {
  i10 = i9 | 0;
  tempValue = HEAP32[i10 >> 2] | 0, HEAP32[i10 >> 2] = tempValue + 1, tempValue;
 }
 i10 = __ZN3WTF13wtfThreadDataEv() | 0;
 i11 = i10 + 16 | 0;
 i10 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = HEAP32[i9 + 20880 >> 2];
 HEAP32[i4 + 4 >> 2] = i10;
 __ZN3JSC14MachineThreads16addCurrentThreadEv(i9 + 19828 | 0);
 __ZN3JSC12JSLockHolderC1EPNS_9ExecStateE(i4 + 8 | 0, (HEAP32[(HEAP32[(HEAP32[i8 >> 2] & -65536) + 1076 >> 2] | 0) + 24780 >> 2] | 0) != 0 ? 0 : i7);
 i7 = i6 | 0;
 i8 = i2 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i7 >> 2] = i2;
 __ZN7WebCore25deserializeIDBValueBufferEPNS_15DOMRequestStateEN3WTF10PassRefPtrINS_12SharedBufferEEE(i5, i1 + 152 | 0, i6);
 i6 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i7 = i6 | 0;
   i2 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) == 0) {
    __ZN7WebCore12SharedBufferD1Ev(i6);
    __ZN3WTF8fastFreeEPv(i6);
    break;
   } else {
    HEAP32[i7 >> 2] = i2;
    break;
   }
  }
 } while (0);
 __ZN7WebCore10IDBRequest17onSuccessInternalERKN10Deprecated11ScriptValueE(i1, i5);
 __ZN10Deprecated11ScriptValueD1Ev(i5);
 __ZN3JSC12APIEntryShimD2Ev(i4 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore10IDBRequest6createEPNS_22ScriptExecutionContextEN3WTF10PassRefPtrINS_6IDBAnyEEENS_18IDBDatabaseBackend8TaskTypeEPNS_14IDBTransactionE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6 | 0;
 i8 = __ZN3WTF10fastMallocEj(160) | 0;
 i9 = i8;
 i10 = i7 | 0;
 i11 = i3 | 0;
 i3 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore10IDBRequestC2EPNS_22ScriptExecutionContextEN3WTF10PassRefPtrINS_6IDBAnyEEENS_18IDBDatabaseBackend8TaskTypeEPNS_14IDBTransactionE(i9, i2, i7, i4, i5);
 i4 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i10 = i4 + 4 | 0;
   i7 = i10 | 0;
   i2 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i7 >> 2] = i2;
    break;
   }
   i2 = i10 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   __ZN7WebCore6IDBAnyD1Ev(i2);
   __ZN3WTF8fastFreeEPv(i2);
  }
 } while (0);
 __ZN7WebCore15ActiveDOMObject15suspendIfNeededEv(i8 + 48 | 0);
 if ((i5 | 0) == 0) {
  i12 = i1 | 0;
  HEAP32[i12 >> 2] = i9;
  STACKTOP = i6;
  return;
 }
 __ZN7WebCore14IDBTransaction15registerRequestEPNS_10IDBRequestE(i5, i9);
 i12 = i1 | 0;
 HEAP32[i12 >> 2] = i9;
 STACKTOP = i6;
 return;
}
function __ZN7WebCore10IDBRequest6createEPNS_22ScriptExecutionContextEN3WTF10PassRefPtrINS_6IDBAnyEEEPNS_14IDBTransactionE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = __ZN3WTF10fastMallocEj(160) | 0;
 i8 = i7;
 i9 = i6 | 0;
 i10 = i3 | 0;
 i3 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i9 >> 2] = i3;
 __ZN7WebCore10IDBRequestC2EPNS_22ScriptExecutionContextEN3WTF10PassRefPtrINS_6IDBAnyEEENS_18IDBDatabaseBackend8TaskTypeEPNS_14IDBTransactionE(i8, i2, i6, 0, i4);
 i6 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i9 = i6 + 4 | 0;
   i2 = i9 | 0;
   i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i2 >> 2] = i3;
    break;
   }
   i3 = i9 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   __ZN7WebCore6IDBAnyD1Ev(i3);
   __ZN3WTF8fastFreeEPv(i3);
  }
 } while (0);
 __ZN7WebCore15ActiveDOMObject15suspendIfNeededEv(i7 + 48 | 0);
 if ((i4 | 0) == 0) {
  i11 = i1 | 0;
  HEAP32[i11 >> 2] = i8;
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore14IDBTransaction15registerRequestEPNS_10IDBRequestE(i4, i8);
 i11 = i1 | 0;
 HEAP32[i11 >> 2] = i8;
 STACKTOP = i5;
 return;
}
function __ZNK7WebCore10IDBRequest10readyStateEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 if (!(HEAP8[H_BASE + 448 | 0] | 0)) {
  i5 = __Znwj(4) | 0;
  __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i4, H_BASE + 56 | 0, 7);
  i6 = i4 | 0;
  i4 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = 0;
  HEAP32[i5 >> 2] = i4;
  HEAP32[H_BASE + 464 >> 2] = i5;
  HEAP8[H_BASE + 448 | 0] = 1;
 }
 if (HEAP8[H_BASE + 456 | 0] | 0) {
  i7 = HEAP32[H_BASE + 472 >> 2] | 0;
 } else {
  i5 = __Znwj(4) | 0;
  i4 = i5;
  __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i3, H_BASE + 48 | 0, 4);
  i6 = i3 | 0;
  i3 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = 0;
  HEAP32[i5 >> 2] = i3;
  HEAP32[H_BASE + 472 >> 2] = i4;
  HEAP8[H_BASE + 456 | 0] = 1;
  i7 = i4;
 }
 i4 = ((HEAP32[i1 + 84 >> 2] | 0) == 1 ? HEAP32[H_BASE + 464 >> 2] | 0 : i7) | 0;
 STACKTOP = i2;
 return i4 | 0;
}
function __ZN3WTF13wtfThreadDataEv() {
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i1 = HEAP32[__ZN3WTF13WTFThreadData10staticDataE >> 2] | 0;
 do {
  if ((i1 | 0) == 0) {
   i2 = __Znwj(4) | 0;
   if ((_pthread_key_create(i2 | 0, F_BASE_vi + 36 | 0) | 0) == 0) {
    i3 = i2;
    HEAP32[__ZN3WTF13WTFThreadData10staticDataE >> 2] = i3;
    i4 = i3;
    break;
   } else {
    _WTFCrash();
    return 0;
   }
  } else {
   i4 = i1;
  }
 } while (0);
 i1 = i4 | 0;
 i3 = _pthread_getspecific(HEAP32[i1 >> 2] | 0) | 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = HEAP32[i3 >> 2] | 0;
   if ((i2 | 0) == 0) {
    break;
   } else {
    i5 = i2;
   }
   return i5 | 0;
  }
 } while (0);
 i3 = __ZN3WTF16fastZeroedMallocEj(28) | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 i1 = __Znwj(8) | 0;
 HEAP32[i1 >> 2] = i3;
 HEAP32[i1 + 4 >> 2] = i4;
 _pthread_setspecific(i2 | 0, i1 | 0) | 0;
 __ZN3WTF13WTFThreadDataC1Ev(i3);
 i5 = i3;
 return i5 | 0;
}
function __ZN3WTF6VectorINS_6RefPtrIN7WebCore5EventEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN7WebCore10IDBRequest9onSuccessEx(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 80 >> 2] & 31](i1) | 0)) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore21SerializedScriptValue11numberValueEd(i5, +(i2 >>> 0) + +(i3 | 0) * +4294967296);
 __ZN7WebCore10IDBRequest17onSuccessInternalEN3WTF10PassRefPtrINS_21SerializedScriptValueEEE(i1, i5);
 i1 = HEAP32[i5 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i5 = i1 | 0;
 if (((tempValue = HEAP32[i5 >> 2] | 0, HEAP32[i5 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore21SerializedScriptValueD1Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 STACKTOP = i4;
 return;
}
function __ZN3JSC12APIEntryShimD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 | 0;
   if (((tempValue = HEAP32[i4 >> 2] | 0, HEAP32[i4 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN3JSC2VMD1Ev(i3);
   __ZN3WTF8fastFreeEPv(i3);
  }
 } while (0);
 __ZN3JSC12JSLockHolderD1Ev(i1 + 8 | 0);
 i3 = __ZN3WTF13wtfThreadDataEv() | 0;
 HEAP32[i3 + 16 >> 2] = HEAP32[i1 + 4 >> 2];
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i2 = i1 | 0;
 if (((tempValue = HEAP32[i2 >> 2] | 0, HEAP32[i2 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  return;
 }
 __ZN3JSC2VMD1Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore10IDBRequest9onSuccessEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 80 >> 2] & 31](i1) | 0)) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore21SerializedScriptValue14undefinedValueEv(i3);
 __ZN7WebCore10IDBRequest17onSuccessInternalEN3WTF10PassRefPtrINS_21SerializedScriptValueEEE(i1, i3);
 i1 = HEAP32[i3 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i3 = i1 | 0;
 if (((tempValue = HEAP32[i3 >> 2] | 0, HEAP32[i3 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore21SerializedScriptValueD1Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore10IDBRequest15getResultCursorEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i2 + 60 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i3;
  return;
 }
 i2 = HEAP32[i5 + 8 >> 2] | 0;
 if ((i2 | 0) == 3) {
  __ZN7WebCore6IDBAny9idbCursorEv(i1, i5);
  STACKTOP = i3;
  return;
 } else if ((i2 | 0) == 4) {
  __ZN7WebCore6IDBAny18idbCursorWithValueEv(i4, i5);
  i5 = i4 | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = 0;
  HEAP32[i1 >> 2] = i4;
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore10IDBRequest31transactionDidFinishAndDispatchEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 80 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 + 40 | 0;
   i4 = i2 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    break;
   }
   i5 = i2 - 40 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 44 >> 2] & 63](i5);
  }
 } while (0);
 HEAP32[i1 + 84 >> 2] = 1;
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
function __ZThn48_N7WebCore10IDBRequest4stopEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 160 + 112 | 0;
 i1 = i2 + 76 | 0;
 if ((HEAP8[i1] & 1) != 0) {
  return;
 }
 HEAP8[i1] = 1;
 HEAP32[i2 + 152 >> 2] = 0;
 HEAP32[i2 + 156 >> 2] = 0;
 i1 = i2 + 84 | 0;
 if ((HEAP32[i1 >> 2] | 0) != 1) {
  return;
 }
 HEAP32[i1 >> 2] = 3;
 i1 = HEAP32[i2 + 80 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 __ZN7WebCore14IDBTransaction17unregisterRequestEPNS_10IDBRequestE(i1, i2);
 return;
}
function __ZN7WebCore10IDBRequest4stopEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 76 | 0;
 if ((HEAP8[i2] & 1) != 0) {
  return;
 }
 HEAP8[i2] = 1;
 HEAP32[i1 + 152 >> 2] = 0;
 HEAP32[i1 + 156 >> 2] = 0;
 i2 = i1 + 84 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 1) {
  return;
 }
 HEAP32[i2 >> 2] = 3;
 i2 = HEAP32[i1 + 80 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN7WebCore14IDBTransaction17unregisterRequestEPNS_10IDBRequestE(i2, i1);
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
function __ZN3WTF14ThreadSpecificINS_13WTFThreadDataEE7destroyEPv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 4 | 0;
 _pthread_setspecific(HEAP32[HEAP32[i2 >> 2] >> 2] | 0, i1 | 0) | 0;
 i3 = i1;
 __ZN3WTF13WTFThreadDataD1Ev(HEAP32[i3 >> 2] | 0);
 __ZN3WTF8fastFreeEPv(HEAP32[i3 >> 2] | 0);
 _pthread_setspecific(HEAP32[HEAP32[i2 >> 2] >> 2] | 0, 0) | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 __ZdlPv(i1);
 return;
}
function _memmove(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 if ((i2 | 0) < (i1 | 0) & (i1 | 0) < (i2 + i3 | 0)) {
  i4 = i1;
  i2 = i2 + i3 | 0;
  i1 = i1 + i3 | 0;
  while ((i3 | 0) > 0) {
   i1 = i1 - 1 | 0;
   i2 = i2 - 1 | 0;
   i3 = i3 - 1 | 0;
   HEAP8[i1] = HEAP8[i2] | 0;
  }
  i1 = i4;
 } else {
  _memcpy(i1, i2, i3) | 0;
 }
 return i1 | 0;
}
function __ZNK7WebCore10IDBRequest6resultERi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if ((HEAP32[i2 + 84 >> 2] | 0) != 2) {
  HEAP32[i3 >> 2] = 1208;
  HEAP32[i1 >> 2] = 0;
  return;
 }
 i3 = HEAP32[i2 + 60 >> 2] | 0;
 HEAP32[i1 >> 2] = i3;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = i3 + 4 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 return;
}
function __ZNK7WebCore10IDBRequest5errorERi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if ((HEAP32[i2 + 84 >> 2] | 0) != 2) {
  HEAP32[i3 >> 2] = 1208;
  HEAP32[i1 >> 2] = 0;
  return;
 }
 i3 = HEAP32[i2 + 72 >> 2] | 0;
 HEAP32[i1 >> 2] = i3;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = i3 + 4 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 return;
}
function iiiii___ZN7WebCore11EventTarget16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZN7WebCore11EventTarget16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}
function __ZThn12_N7WebCore10IDBRequest16derefEventTargetEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 - 160 + 148 | 0;
 i1 = i2 + 4 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i1 >> 2] = i3;
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 63](i2);
 return;
}
function __ZN7WebCore10IDBRequest16derefEventTargetEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 4 | 0;
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i1 >> 2] = i3;
  return;
 }
 i3 = i2 - 4 | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 63](i3);
 return;
}
function iiiii___ZN7WebCore11EventTarget19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZN7WebCore11EventTarget19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}
function __ZNK7WebCore10IDBRequest18shouldEnqueueEventEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP8[i1 + 76 | 0] & 1) != 0) {
  i2 = 0;
  return i2 | 0;
 }
 if ((HEAP32[i1 + 52 >> 2] | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = (HEAP8[i1 + 88 | 0] & 1) == 0;
 return i2 | 0;
}
function __ZNK7WebCore10IDBRequest9errorCodeERi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if ((HEAP32[i1 + 84 >> 2] | 0) == 2) {
  i3 = HEAP16[i1 + 64 >> 1] | 0;
  return i3 | 0;
 } else {
  HEAP32[i2 >> 2] = 1208;
  i3 = 0;
  return i3 | 0;
 }
 return 0;
}
function __ZNK7WebCore10IDBRequest11transactionEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i2 + 80 >> 2] | 0;
 HEAP32[i1 >> 2] = i3;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = i3 + 40 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 return;
}
function __ZN7WebCore10IDBRequest14markEarlyDeathEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 + 84 >> 2] = 3;
 i2 = HEAP32[i1 + 80 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN7WebCore14IDBTransaction17unregisterRequestEPNS_10IDBRequestE(i2, i1);
 return;
}
function __ZNK7WebCore10IDBRequest6sourceEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i2 + 92 >> 2] | 0;
 HEAP32[i1 >> 2] = i3;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = i3 + 4 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 return;
}
function __ZN7WebCore10IDBRequest21onSuccessWithPrefetchERKN3WTF6VectorINS1_6RefPtrINS_6IDBKeyEEELj0ENS1_15CrashOnOverflowEEES9_RKNS2_INS3_INS_12SharedBufferEEELj0ES6_EE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return;
}
function __ZThn48_NK7WebCore10IDBRequest18hasPendingActivityEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 - 160 + 112 | 0;
 if ((HEAP8[i2 + 100 | 0] & 1) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (HEAP8[i2 + 76 | 0] & 1) == 0;
 return i3 | 0;
}
function iii___ZN7WebCore11EventTarget13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore11EventTarget13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE(i1 | 0, i2 | 0) | 0;
}
function __ZThn12_N7WebCore10IDBRequest13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore10IDBRequest13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE(i1 - 160 + 148 | 0, i2) | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore12IDBCallbacks15onUpgradeNeededEyN3WTF10PassRefPtrINS_18IDBDatabaseBackendEEERKNS_19IDBDatabaseMetadataE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return;
}
function __ZN7WebCore10IDBRequest16setCursorDetailsENS_9IndexedDB10CursorTypeENS1_15CursorDirectionE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i1 + 116 >> 2] = i2;
 HEAP32[i1 + 120 >> 2] = i3;
 return;
}
function __ZN7WebCore25EventTargetWithInlineDataD0Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = H_BASE + 72;
 __ZN7WebCore15EventTargetDataD1Ev(i1 + 4 | 0);
 __ZN7WebCore11EventTargetD2Ev(i1 | 0);
 __ZdlPv(i1);
 return;
}
function __ZNK7WebCore10IDBRequest18hasPendingActivityEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP8[i1 + 100 | 0] & 1) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = (HEAP8[i1 + 76 | 0] & 1) == 0;
 return i2 | 0;
}
function vii___ZN7WebCore15ActiveDOMObject7suspendENS0_19ReasonForSuspensionE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore15ActiveDOMObject7suspendENS0_19ReasonForSuspensionE(i1 | 0, i2 | 0);
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
function __ZN7WebCore25EventTargetWithInlineDataD1Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = H_BASE + 72;
 __ZN7WebCore15EventTargetDataD1Ev(i1 + 4 | 0);
 __ZN7WebCore11EventTargetD2Ev(i1 | 0);
 return;
}
function dynCall_iiiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return FUNCTION_TABLE_iiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
}
function __ZThn12_N7WebCore10IDBRequest31uncaughtExceptionInEventHandlerEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore10IDBRequest31uncaughtExceptionInEventHandlerEv(i1 - 160 + 148 | 0);
 return;
}
function __ZN7WebCore10IDBRequest12finishCursorEv(i1) {
 i1 = i1 | 0;
 HEAP8[i1 + 124 | 0] = 1;
 if ((HEAP32[i1 + 84 >> 2] | 0) == 1) {
  return;
 }
 HEAP8[i1 + 100 | 0] = 0;
 return;
}
function __ZN7WebCore12IDBCallbacks9onSuccessEN3WTF10PassRefPtrINS_18IDBDatabaseBackendEEERKNS_19IDBDatabaseMetadataE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function __ZThn48_N7WebCore10IDBRequestD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 160 + 112 | 0;
 __ZN7WebCore10IDBRequestD2Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZThn12_N7WebCore10IDBRequestD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 160 + 148 | 0;
 __ZN7WebCore10IDBRequestD2Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function vi___ZN7WebCore26ContextDestructionObserver16contextDestroyedEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore26ContextDestructionObserver16contextDestroyedEv(i1 | 0);
}
function vi___ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv(i1 | 0);
}
function __ZThn12_N7WebCore10IDBRequest14refEventTargetEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 160 + 152 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 return;
}
function __ZN7WebCore10IDBRequest14refEventTargetEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 4 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 return;
}
function vi___ZN7WebCore11EventTarget23removeAllEventListenersEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11EventTarget23removeAllEventListenersEv(i1 | 0);
}
function ii___ZNK7WebCore15ActiveDOMObject10canSuspendEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore15ActiveDOMObject10canSuspendEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore11EventTarget13isMessagePortEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore11EventTarget13isMessagePortEv(i1 | 0) | 0;
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
function ii___ZN7WebCore11EventTarget11toDOMWindowEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore11EventTarget11toDOMWindowEv(i1 | 0) | 0;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 7](i2 | 0, i3 | 0) | 0;
}
function ii___ZN7WebCore11EventTarget6toNodeEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore11EventTarget6toNodeEv(i1 | 0) | 0;
}
function vi___ZN7WebCore15ActiveDOMObject6resumeEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore15ActiveDOMObject6resumeEv(i1 | 0);
}
function __ZN7WebCore10IDBRequestD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore10IDBRequestD2Ev(i1);
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
function __ZThn12_NK7WebCore10IDBRequest22scriptExecutionContextEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 - 160 + 200 >> 2] | 0;
}
function setThrew(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((__THREW__ | 0) == 0) {
  __THREW__ = i1;
  threwValue = i2;
 }
}
function __ZThn48_N7WebCore10IDBRequestD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore10IDBRequestD2Ev(i1 - 160 + 112 | 0);
 return;
}
function __ZThn12_N7WebCore10IDBRequestD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore10IDBRequestD2Ev(i1 - 160 + 148 | 0);
 return;
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
function __ZNK7WebCore10IDBRequest22scriptExecutionContextEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 52 >> 2] | 0;
}
function __ZN7WebCore25EventTargetWithInlineData21ensureEventTargetDataEv(i1) {
 i1 = i1 | 0;
 return i1 + 4 | 0;
}
function __ZN7WebCore12IDBCallbacks9onBlockedEy(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return;
}
function b6(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(6);
 return 0;
}
function __ZN7WebCore25EventTargetWithInlineData15eventTargetDataEv(i1) {
 i1 = i1 | 0;
 return i1 + 4 | 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 31](i2 | 0) | 0;
}
function b8(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(8);
}
function __ZThn12_NK7WebCore10IDBRequest20eventTargetInterfaceEv(i1) {
 i1 = i1 | 0;
 return 13;
}
function __ZN7WebCore12IDBCallbacksD0Ev(i1) {
 i1 = i1 | 0;
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 63](i2 | 0);
}
function __ZNK7WebCore10IDBRequest20eventTargetInterfaceEv(i1) {
 i1 = i1 | 0;
 return 13;
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
function __ZN7WebCore12IDBCallbacksD1Ev(i1) {
 i1 = i1 | 0;
 return;
}
function v____cxa_pure_virtual__wrapper() {
 ___cxa_pure_virtual();
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 3]();
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
  var FUNCTION_TABLE_viiiii = [b0,b0,__ZN7WebCore12IDBCallbacks15onUpgradeNeededEyN3WTF10PassRefPtrINS_18IDBDatabaseBackendEEERKNS_19IDBDatabaseMetadataE,b0,__ZN7WebCore10IDBRequestC2EPNS_22ScriptExecutionContextEN3WTF10PassRefPtrINS_6IDBAnyEEENS_18IDBDatabaseBackend8TaskTypeEPNS_14IDBTransactionE,b0,__ZN7WebCore10IDBRequest9onSuccessEN3WTF10PassRefPtrINS_16IDBCursorBackendEEENS2_INS_6IDBKeyEEES6_NS2_INS_12SharedBufferEEE,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore10IDBRequestD0Ev,b1,__ZThn12_N7WebCore10IDBRequestD1Ev,b1,__ZN7WebCore10IDBRequestD2Ev,b1,__ZN7WebCore10IDBRequest9onSuccessEv,b1,__ZN7WebCore25EventTargetWithInlineDataD0Ev,b1,__ZN7WebCore12IDBCallbacksD0Ev,b1,vi___ZN7WebCore11EventTarget23removeAllEventListenersEv__wrapper,b1,__ZN7WebCore10IDBRequest31uncaughtExceptionInEventHandlerEv,b1,__ZN7WebCore12IDBCallbacksD1Ev,b1,vi___ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv__wrapper,b1,__ZN7WebCore10IDBRequest16derefEventTargetEv,b1,__ZThn12_N7WebCore10IDBRequest31uncaughtExceptionInEventHandlerEv,b1,__ZThn48_N7WebCore10IDBRequestD0Ev,b1,vi___ZN7WebCore15ActiveDOMObject6resumeEv__wrapper
  ,b1,__ZN7WebCore10IDBRequest4stopEv,b1,__ZThn12_N7WebCore10IDBRequest14refEventTargetEv,b1,__ZThn48_N7WebCore10IDBRequest4stopEv,b1,__ZN3WTF14ThreadSpecificINS_13WTFThreadDataEE7destroyEPv,b1,__ZThn48_N7WebCore10IDBRequestD1Ev,b1,__ZN7WebCore25EventTargetWithInlineDataD1Ev,b1,__ZThn12_N7WebCore10IDBRequestD0Ev,b1,vi___ZN7WebCore26ContextDestructionObserver16contextDestroyedEv__wrapper,b1,__ZThn12_N7WebCore10IDBRequest16derefEventTargetEv,b1,__ZN7WebCore10IDBRequest14refEventTargetEv,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1
  ,b1,b1,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,__ZN7WebCore10IDBRequest9onSuccessEN3WTF10PassRefPtrINS_12SharedBufferEEE,b2,__ZN7WebCore10IDBRequest9onSuccessEN3WTF10PassRefPtrINS_13DOMStringListEEE,b2,__ZN7WebCore10IDBRequest9onSuccessEN3WTF10PassRefPtrINS_6IDBKeyEEE,b2,__ZN7WebCore10IDBRequest7onErrorEN3WTF10PassRefPtrINS_16IDBDatabaseErrorEEE,b2,vii___ZN7WebCore15ActiveDOMObject7suspendENS0_19ReasonForSuspensionE__wrapper,b2,b2,b2,b2,b2];
  var FUNCTION_TABLE_ii = [b3,b3,__ZNK7WebCore10IDBRequest18shouldEnqueueEventEv,b3,__ZThn48_NK7WebCore10IDBRequest18hasPendingActivityEv,b3,__ZThn12_NK7WebCore10IDBRequest20eventTargetInterfaceEv,b3,__ZN7WebCore25EventTargetWithInlineData21ensureEventTargetDataEv,b3,ii___ZN7WebCore11EventTarget6toNodeEv__wrapper,b3,__ZNK7WebCore10IDBRequest18hasPendingActivityEv,b3,ii___ZNK7WebCore11EventTarget13isMessagePortEv__wrapper,b3,__ZN7WebCore25EventTargetWithInlineData15eventTargetDataEv,b3,__ZThn12_NK7WebCore10IDBRequest22scriptExecutionContextEv,b3,__ZNK7WebCore10IDBRequest20eventTargetInterfaceEv,b3,ii___ZNK7WebCore15ActiveDOMObject10canSuspendEv__wrapper,b3,__ZNK7WebCore10IDBRequest22scriptExecutionContextEv,b3,ii___ZN7WebCore11EventTarget11toDOMWindowEv__wrapper,b3,b3
  ,b3,b3,b3];
  var FUNCTION_TABLE_viii = [b4,b4,__ZN7WebCore12IDBCallbacks9onSuccessEN3WTF10PassRefPtrINS_18IDBDatabaseBackendEEERKNS_19IDBDatabaseMetadataE,b4,__ZN7WebCore12IDBCallbacks9onBlockedEy,b4,__ZN7WebCore10IDBRequest9onSuccessEx,b4];
  var FUNCTION_TABLE_v = [b5,b5,v____cxa_pure_virtual__wrapper,b5];
  var FUNCTION_TABLE_iiiii = [b6,b6,iiiii___ZN7WebCore11EventTarget19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb__wrapper,b6,iiiii___ZN7WebCore11EventTarget16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb__wrapper,b6,b6,b6];
  var FUNCTION_TABLE_iii = [b7,b7,__ZThn12_N7WebCore10IDBRequest13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE,b7,__ZN7WebCore10IDBRequest13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE,b7,iii___ZN7WebCore11EventTarget13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE__wrapper,b7];
  var FUNCTION_TABLE_viiii = [b8,b8,__ZN7WebCore10IDBRequest9onSuccessEN3WTF10PassRefPtrINS_12SharedBufferEEENS2_INS_6IDBKeyEEERKNS_10IDBKeyPathE,b8,__ZN7WebCore10IDBRequest9onSuccessEN3WTF10PassRefPtrINS_6IDBKeyEEES4_NS2_INS_12SharedBufferEEE,b8,__ZN7WebCore10IDBRequest21onSuccessWithPrefetchERKN3WTF6VectorINS1_6RefPtrINS_6IDBKeyEEELj0ENS1_15CrashOnOverflowEEES9_RKNS2_INS3_INS_12SharedBufferEEELj0ES6_EE,b8];
  return { _memmove: _memmove, _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iiiii: dynCall_iiiii, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iiiii": invoke_iiiii, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_pthread_getspecific": _pthread_getspecific, "___cxa_pure_virtual": ___cxa_pure_virtual, "___setErrNo": ___setErrNo, "_pthread_key_create": _pthread_key_create, "_malloc": _malloc, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_pthread_setspecific": _pthread_setspecific, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZTVN10Deprecated11ScriptValueE": __ZTVN10Deprecated11ScriptValueE, "__ZN3WTF13WTFThreadData10staticDataE": __ZN3WTF13WTFThreadData10staticDataE }, buffer);
var _memmove = Module["_memmove"] = asm["_memmove"];
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
var dynCall_iiiii = Module["dynCall_iiiii"] = asm["dynCall_iiiii"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
var dynCall_viiii = Module["dynCall_viiii"] = asm["dynCall_viiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZThn12_N7WebCore10IDBRequest14refEventTargetEv","_strlen","__ZN7WebCore10IDBRequest16setCursorDetailsENS_9IndexedDB10CursorTypeENS1_15CursorDirectionE","__ZN7WebCore25EventTargetWithInlineData21ensureEventTargetDataEv","__ZN7WebCore10IDBRequest9onSuccessEN3WTF10PassRefPtrINS_12SharedBufferEEENS2_INS_6IDBKeyEEERKNS_10IDBKeyPathE","__ZN7WebCore10IDBRequestD0Ev","__ZN7WebCore10IDBRequest17onSuccessInternalEN3WTF10PassRefPtrINS_21SerializedScriptValueEEE","__ZN7WebCore10IDBRequest9onSuccessEN3WTF10PassRefPtrINS_13DOMStringListEEE","__ZNK7WebCore10IDBRequest18shouldEnqueueEventEv","__ZThn12_N7WebCore10IDBRequestD1Ev","__ZN7WebCore10IDBRequest9onSuccessEN3WTF10PassRefPtrINS_12SharedBufferEEE","__ZN7WebCore10IDBRequest12finishCursorEv","__ZThn48_NK7WebCore10IDBRequest18hasPendingActivityEv","__ZN7WebCore12IDBCallbacks9onSuccessEN3WTF10PassRefPtrINS_18IDBDatabaseBackendEEERKNS_19IDBDatabaseMetadataE","__ZThn12_NK7WebCore10IDBRequest20eventTargetInterfaceEv","__ZN7WebCore10IDBRequest6createEPNS_22ScriptExecutionContextEN3WTF10PassRefPtrINS_6IDBAnyEEENS_18IDBDatabaseBackend8TaskTypeEPNS_14IDBTransactionE","__ZN7WebCore10IDBRequestD2Ev","__ZN7WebCore25EventTargetWithInlineDataD0Ev","__ZThn12_N7WebCore10IDBRequest13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE","__ZN7WebCore10IDBRequest6createEPNS_22ScriptExecutionContextEN3WTF10PassRefPtrINS_6IDBAnyEEEPNS_14IDBTransactionE","__ZN7WebCore12IDBCallbacks15onUpgradeNeededEyN3WTF10PassRefPtrINS_18IDBDatabaseBackendEEERKNS_19IDBDatabaseMetadataE","__ZN7WebCore10IDBRequest13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE","__ZN7WebCore10IDBRequest15setResultCursorEN3WTF10PassRefPtrINS_9IDBCursorEEENS2_INS_6IDBKeyEEES6_RKN10Deprecated11ScriptValueE","__ZNK7WebCore10IDBRequest5errorERi","__ZN3WTF13wtfThreadDataEv","__ZN7WebCore10IDBRequest9onSuccessEN3WTF10PassRefPtrINS_6IDBKeyEEE","_memset","__ZN7WebCore10IDBRequest16setPendingCursorEN3WTF10PassRefPtrINS_9IDBCursorEEE","__ZN7WebCore10IDBRequest21onSuccessWithPrefetchERKN3WTF6VectorINS1_6RefPtrINS_6IDBKeyEEELj0ENS1_15CrashOnOverflowEEES9_RKNS2_INS3_INS_12SharedBufferEEELj0ES6_EE","__ZThn12_N7WebCore10IDBRequest31uncaughtExceptionInEventHandlerEv","_memcpy","__ZN7WebCore10IDBRequest9onSuccessEN3WTF10PassRefPtrINS_16IDBCursorBackendEEENS2_INS_6IDBKeyEEES6_NS2_INS_12SharedBufferEEE","__ZN7WebCore10IDBRequest16derefEventTargetEv","__ZN7WebCore10IDBRequest17onSuccessInternalERKN10Deprecated11ScriptValueE","__ZNK7WebCore10IDBRequest18hasPendingActivityEv","__ZN7WebCore10IDBRequest15getResultCursorEv","__ZNK7WebCore10IDBRequest10readyStateEv","__ZN7WebCore25EventTargetWithInlineData15eventTargetDataEv","__ZN7WebCore12IDBCallbacksD1Ev","__ZN7WebCore10IDBRequest7onErrorEN3WTF10PassRefPtrINS_16IDBDatabaseErrorEEE","__ZN7WebCore10IDBRequest5abortEv","__ZNK7WebCore10IDBRequest6sourceEv","__ZThn12_NK7WebCore10IDBRequest22scriptExecutionContextEv","__ZN7WebCore10IDBRequest14markEarlyDeathEv","__ZThn48_N7WebCore10IDBRequestD0Ev","__ZN3WTF6VectorINS_6RefPtrIN7WebCore5EventEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore12IDBCallbacksD0Ev","__ZN7WebCore12IDBCallbacks9onBlockedEy","__ZN7WebCore10IDBRequest31uncaughtExceptionInEventHandlerEv","__ZThn12_N7WebCore10IDBRequest16derefEventTargetEv","__ZNK7WebCore10IDBRequest6resultERi","__ZN7WebCore10IDBRequest4stopEv","__ZN7WebCore10IDBRequest12enqueueEventEN3WTF10PassRefPtrINS_5EventEEE","__ZN7WebCore10IDBRequest9onSuccessEN3WTF10PassRefPtrINS_6IDBKeyEEES4_NS2_INS_12SharedBufferEEE","__ZNK7WebCore10IDBRequest9errorCodeERi","__ZN7WebCore10IDBRequest14refEventTargetEv","__ZThn48_N7WebCore10IDBRequest4stopEv","__ZN3WTF14ThreadSpecificINS_13WTFThreadDataEE7destroyEPv","__ZThn48_N7WebCore10IDBRequestD1Ev","__ZN7WebCore25EventTargetWithInlineDataD1Ev","__ZThn12_N7WebCore10IDBRequestD0Ev","__ZN7WebCore10IDBRequest9onSuccessEx","__ZN3JSC6StrongINS_7UnknownEEaSERKS2_","__ZNK7WebCore10IDBRequest11transactionEv","__ZN7WebCore10IDBRequest31transactionDidFinishAndDispatchEv","__ZN7WebCore10IDBRequest9onSuccessEv","__ZN3JSC12APIEntryShimD2Ev","__ZNK7WebCore10IDBRequest22scriptExecutionContextEv","_memmove","__ZNK7WebCore10IDBRequest20eventTargetInterfaceEv","__ZN7WebCore10IDBRequestC2EPNS_22ScriptExecutionContextEN3WTF10PassRefPtrINS_6IDBAnyEEENS_18IDBDatabaseBackend8TaskTypeEPNS_14IDBTransactionE"]

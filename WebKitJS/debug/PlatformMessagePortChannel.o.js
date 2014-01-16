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
var __ZN7WebCore26PlatformMessagePortChannel9EventDataC1EN3WTF10PassRefPtrINS_21SerializedScriptValueEEENS2_10PassOwnPtrINS2_6VectorINS2_6OwnPtrINS_18MessagePortChannelEEELj1ENS2_15CrashOnOverflowEEEEE;
var __ZN7WebCore18MessagePortChannelC1EN3WTF10PassRefPtrINS_26PlatformMessagePortChannelEEE;
var __ZN7WebCore18MessagePortChannelD1Ev;
var __ZN7WebCore26PlatformMessagePortChannelC1EN3WTF10PassRefPtrINS0_16MessagePortQueueEEES4_;
var __ZN7WebCore26PlatformMessagePortChannelD1Ev;
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
function __ZN3WTF5DequeINSt3__110unique_ptrIN7WebCore26PlatformMessagePortChannel9EventDataENS1_14default_deleteIS5_EEEELj0EE10destroyAllEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
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
   i9 = i8 | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = 0;
   if ((i10 | 0) != 0) {
    i9 = HEAP32[i10 + 4 >> 2] | 0;
    if ((i9 | 0) != 0) {
     i11 = i9 + 8 | 0;
     i12 = HEAP32[i11 >> 2] | 0;
     i13 = i9 | 0;
     if ((i12 | 0) != 0) {
      i14 = HEAP32[i13 >> 2] | 0;
      i15 = i14 + (i12 << 2) | 0;
      i12 = i14;
      while (1) {
       i14 = HEAP32[i12 >> 2] | 0;
       if ((i14 | 0) != 0) {
        __ZN7WebCore18MessagePortChannel5closeEv(i14);
        i16 = HEAP32[i14 >> 2] | 0;
        do {
         if ((i16 | 0) != 0) {
          i17 = i16 | 0;
          if (((tempValue = HEAP32[i17 >> 2] | 0, HEAP32[i17 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
           break;
          }
          __ZN7WebCore26PlatformMessagePortChannelD2Ev(i16);
          __ZN3WTF8fastFreeEPv(i16);
         }
        } while (0);
        __ZN3WTF8fastFreeEPv(i14);
       }
       i12 = i12 + 4 | 0;
       if ((i12 | 0) == (i15 | 0)) {
        break;
       }
      }
      HEAP32[i11 >> 2] = 0;
     }
     i15 = HEAP32[i13 >> 2] | 0;
     if (!((i9 + 12 | 0) == (i15 | 0) | (i15 | 0) == 0)) {
      HEAP32[i13 >> 2] = 0;
      HEAP32[i9 + 4 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i15);
     }
     __ZN3WTF8fastFreeEPv(i9);
    }
    i15 = HEAP32[i10 >> 2] | 0;
    do {
     if ((i15 | 0) != 0) {
      i12 = i15 | 0;
      if (((tempValue = HEAP32[i12 >> 2] | 0, HEAP32[i12 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
       break;
      }
      __ZN7WebCore21SerializedScriptValueD1Ev(i15);
      __ZN3WTF8fastFreeEPv(i15);
     }
    } while (0);
    __ZN3WTF8fastFreeEPv(i10);
   }
   i8 = i8 + 4 | 0;
   if ((i8 | 0) == (i7 | 0)) {
    break;
   }
  }
  return;
 }
 if ((i4 | 0) == 0) {
  i18 = i6;
  i19 = i3;
 } else {
  i3 = i6;
  while (1) {
   i6 = i3 | 0;
   i4 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = 0;
   if ((i4 | 0) != 0) {
    i6 = HEAP32[i4 + 4 >> 2] | 0;
    if ((i6 | 0) != 0) {
     i8 = i6 + 8 | 0;
     i15 = HEAP32[i8 >> 2] | 0;
     i9 = i6 | 0;
     if ((i15 | 0) != 0) {
      i13 = HEAP32[i9 >> 2] | 0;
      i11 = i13 + (i15 << 2) | 0;
      i15 = i13;
      while (1) {
       i13 = HEAP32[i15 >> 2] | 0;
       if ((i13 | 0) != 0) {
        __ZN7WebCore18MessagePortChannel5closeEv(i13);
        i12 = HEAP32[i13 >> 2] | 0;
        do {
         if ((i12 | 0) != 0) {
          i16 = i12 | 0;
          if (((tempValue = HEAP32[i16 >> 2] | 0, HEAP32[i16 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
           break;
          }
          __ZN7WebCore26PlatformMessagePortChannelD2Ev(i12);
          __ZN3WTF8fastFreeEPv(i12);
         }
        } while (0);
        __ZN3WTF8fastFreeEPv(i13);
       }
       i15 = i15 + 4 | 0;
       if ((i15 | 0) == (i11 | 0)) {
        break;
       }
      }
      HEAP32[i8 >> 2] = 0;
     }
     i11 = HEAP32[i9 >> 2] | 0;
     if (!((i6 + 12 | 0) == (i11 | 0) | (i11 | 0) == 0)) {
      HEAP32[i9 >> 2] = 0;
      HEAP32[i6 + 4 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i11);
     }
     __ZN3WTF8fastFreeEPv(i6);
    }
    i11 = HEAP32[i4 >> 2] | 0;
    do {
     if ((i11 | 0) != 0) {
      i15 = i11 | 0;
      if (((tempValue = HEAP32[i15 >> 2] | 0, HEAP32[i15 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
       break;
      }
      __ZN7WebCore21SerializedScriptValueD1Ev(i11);
      __ZN3WTF8fastFreeEPv(i11);
     }
    } while (0);
    __ZN3WTF8fastFreeEPv(i4);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i7 | 0)) {
    break;
   }
  }
  i18 = HEAP32[i5 >> 2] | 0;
  i19 = HEAP32[i2 >> 2] | 0;
 }
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 i1 = i18 + (i2 << 2) | 0;
 if ((i19 | 0) == (i2 | 0)) {
  return;
 }
 i2 = i18 + (i19 << 2) | 0;
 while (1) {
  i19 = i2 | 0;
  i18 = HEAP32[i19 >> 2] | 0;
  HEAP32[i19 >> 2] = 0;
  if ((i18 | 0) != 0) {
   i19 = HEAP32[i18 + 4 >> 2] | 0;
   if ((i19 | 0) != 0) {
    i5 = i19 + 8 | 0;
    i7 = HEAP32[i5 >> 2] | 0;
    i3 = i19 | 0;
    if ((i7 | 0) != 0) {
     i11 = HEAP32[i3 >> 2] | 0;
     i6 = i11 + (i7 << 2) | 0;
     i7 = i11;
     while (1) {
      i11 = HEAP32[i7 >> 2] | 0;
      if ((i11 | 0) != 0) {
       __ZN7WebCore18MessagePortChannel5closeEv(i11);
       i9 = HEAP32[i11 >> 2] | 0;
       do {
        if ((i9 | 0) != 0) {
         i8 = i9 | 0;
         if (((tempValue = HEAP32[i8 >> 2] | 0, HEAP32[i8 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
          break;
         }
         __ZN7WebCore26PlatformMessagePortChannelD2Ev(i9);
         __ZN3WTF8fastFreeEPv(i9);
        }
       } while (0);
       __ZN3WTF8fastFreeEPv(i11);
      }
      i7 = i7 + 4 | 0;
      if ((i7 | 0) == (i6 | 0)) {
       break;
      }
     }
     HEAP32[i5 >> 2] = 0;
    }
    i6 = HEAP32[i3 >> 2] | 0;
    if (!((i19 + 12 | 0) == (i6 | 0) | (i6 | 0) == 0)) {
     HEAP32[i3 >> 2] = 0;
     HEAP32[i19 + 4 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i6);
    }
    __ZN3WTF8fastFreeEPv(i19);
   }
   i6 = HEAP32[i18 >> 2] | 0;
   do {
    if ((i6 | 0) != 0) {
     i7 = i6 | 0;
     if (((tempValue = HEAP32[i7 >> 2] | 0, HEAP32[i7 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
      break;
     }
     __ZN7WebCore21SerializedScriptValueD1Ev(i6);
     __ZN3WTF8fastFreeEPv(i6);
    }
   } while (0);
   __ZN3WTF8fastFreeEPv(i18);
  }
  i2 = i2 + 4 | 0;
  if ((i2 | 0) == (i1 | 0)) {
   break;
  }
 }
 return;
}
function __ZN7WebCore18MessagePortChannel13createChannelEN3WTF10PassRefPtrINS_11MessagePortEEES4_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN3WTF10fastMallocEj(100) | 0;
 i7 = i6;
 i8 = i6;
 HEAP32[i8 >> 2] = 1;
 i9 = i6 + 4 | 0;
 __ZN3WTF5MutexC1Ev(i9);
 i10 = i6 + 28 | 0;
 __ZN3WTF15ThreadConditionC1Ev(i10);
 i11 = i6 + 76 | 0;
 _memset(i11 | 0, 0, 21) | 0;
 i12 = __ZN3WTF10fastMallocEj(100) | 0;
 i13 = i12;
 i14 = i12;
 HEAP32[i14 >> 2] = 1;
 i15 = i12 + 4 | 0;
 __ZN3WTF5MutexC1Ev(i15);
 i16 = i12 + 28 | 0;
 __ZN3WTF15ThreadConditionC1Ev(i16);
 i17 = i12 + 76 | 0;
 _memset(i17 | 0, 0, 21) | 0;
 i18 = __ZN3WTF10fastMallocEj(4) | 0;
 i19 = i18;
 i20 = (i6 | 0) == 0;
 if (!i20) {
  tempValue = HEAP32[i8 >> 2] | 0, HEAP32[i8 >> 2] = tempValue + 1, tempValue;
 }
 i21 = (i12 | 0) == 0;
 if (!i21) {
  tempValue = HEAP32[i14 >> 2] | 0, HEAP32[i14 >> 2] = tempValue + 1, tempValue;
 }
 i22 = __ZN3WTF10fastMallocEj(44) | 0;
 HEAP32[i22 >> 2] = 1;
 __ZN3WTF5MutexC1Ev(i22 + 4 | 0);
 HEAP32[i22 + 28 >> 2] = 0;
 HEAP32[i22 + 32 >> 2] = i7;
 HEAP32[i22 + 36 >> 2] = i13;
 HEAP32[i22 + 40 >> 2] = 0;
 i23 = i18;
 HEAP32[i23 >> 2] = i22;
 i22 = __ZN3WTF10fastMallocEj(4) | 0;
 i18 = i22;
 if (!i21) {
  tempValue = HEAP32[i14 >> 2] | 0, HEAP32[i14 >> 2] = tempValue + 1, tempValue;
 }
 if (!i20) {
  tempValue = HEAP32[i8 >> 2] | 0, HEAP32[i8 >> 2] = tempValue + 1, tempValue;
 }
 i24 = __ZN3WTF10fastMallocEj(44) | 0;
 i25 = i24;
 i26 = i24;
 HEAP32[i26 >> 2] = 1;
 __ZN3WTF5MutexC1Ev(i24 + 4 | 0);
 HEAP32[i24 + 28 >> 2] = 0;
 HEAP32[i24 + 32 >> 2] = i13;
 HEAP32[i24 + 36 >> 2] = i7;
 HEAP32[i24 + 40 >> 2] = 0;
 i7 = i22;
 HEAP32[i7 >> 2] = i25;
 i22 = HEAP32[i23 >> 2] | 0;
 if ((i24 | 0) != 0) {
  tempValue = HEAP32[i26 >> 2] | 0, HEAP32[i26 >> 2] = tempValue + 1, tempValue;
 }
 i26 = i22 + 28 | 0;
 i22 = HEAP32[i26 >> 2] | 0;
 HEAP32[i26 >> 2] = i25;
 do {
  if ((i22 | 0) != 0) {
   i25 = i22 | 0;
   if (((tempValue = HEAP32[i25 >> 2] | 0, HEAP32[i25 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN7WebCore26PlatformMessagePortChannelD2Ev(i22);
   __ZN3WTF8fastFreeEPv(i22);
  }
 } while (0);
 i22 = HEAP32[i7 >> 2] | 0;
 i7 = HEAP32[i23 >> 2] | 0;
 if ((i7 | 0) != 0) {
  i23 = i7 | 0;
  tempValue = HEAP32[i23 >> 2] | 0, HEAP32[i23 >> 2] = tempValue + 1, tempValue;
 }
 i23 = i22 + 28 | 0;
 i22 = HEAP32[i23 >> 2] | 0;
 HEAP32[i23 >> 2] = i7;
 do {
  if ((i22 | 0) != 0) {
   i7 = i22 | 0;
   if (((tempValue = HEAP32[i7 >> 2] | 0, HEAP32[i7 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN7WebCore26PlatformMessagePortChannelD2Ev(i22);
   __ZN3WTF8fastFreeEPv(i22);
  }
 } while (0);
 i22 = HEAP32[i1 >> 2] | 0;
 i1 = i4 | 0;
 HEAP32[i1 >> 2] = i18;
 __ZN7WebCore11MessagePort8entangleEN3WTF10PassOwnPtrINS_18MessagePortChannelEEE(i22, i4);
 i4 = HEAP32[i1 >> 2] | 0;
 if ((i4 | 0) != 0) {
  __ZN7WebCore18MessagePortChannel5closeEv(i4);
  i1 = HEAP32[i4 >> 2] | 0;
  do {
   if ((i1 | 0) != 0) {
    i22 = i1 | 0;
    if (((tempValue = HEAP32[i22 >> 2] | 0, HEAP32[i22 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
     break;
    }
    __ZN7WebCore26PlatformMessagePortChannelD2Ev(i1);
    __ZN3WTF8fastFreeEPv(i1);
   }
  } while (0);
  __ZN3WTF8fastFreeEPv(i4);
 }
 i4 = HEAP32[i2 >> 2] | 0;
 i2 = i5 | 0;
 HEAP32[i2 >> 2] = i19;
 __ZN7WebCore11MessagePort8entangleEN3WTF10PassOwnPtrINS_18MessagePortChannelEEE(i4, i5);
 i5 = HEAP32[i2 >> 2] | 0;
 if ((i5 | 0) != 0) {
  __ZN7WebCore18MessagePortChannel5closeEv(i5);
  i2 = HEAP32[i5 >> 2] | 0;
  do {
   if ((i2 | 0) != 0) {
    i4 = i2 | 0;
    if (((tempValue = HEAP32[i4 >> 2] | 0, HEAP32[i4 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
     break;
    }
    __ZN7WebCore26PlatformMessagePortChannelD2Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
   }
  } while (0);
  __ZN3WTF8fastFreeEPv(i5);
 }
 do {
  if (!i21) {
   if (((tempValue = HEAP32[i14 >> 2] | 0, HEAP32[i14 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN3WTF5DequeINSt3__110unique_ptrIN7WebCore26PlatformMessagePortChannel9EventDataENS1_14default_deleteIS5_EEEELj0EE10destroyAllEv(i17);
   i5 = i12 + 84 | 0;
   i2 = HEAP32[i5 >> 2] | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i5 >> 2] = 0;
    HEAP32[i12 + 88 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i2);
   }
   __ZN3WTF15ThreadConditionD1Ev(i16);
   __ZN3WTF5MutexD1Ev(i15);
   __ZN3WTF8fastFreeEPv(i12);
  }
 } while (0);
 if (i20) {
  STACKTOP = i3;
  return;
 }
 if (((tempValue = HEAP32[i8 >> 2] | 0, HEAP32[i8 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  STACKTOP = i3;
  return;
 }
 __ZN3WTF5DequeINSt3__110unique_ptrIN7WebCore26PlatformMessagePortChannel9EventDataENS1_14default_deleteIS5_EEEELj0EE10destroyAllEv(i11);
 i11 = i6 + 84 | 0;
 i8 = HEAP32[i11 >> 2] | 0;
 if ((i8 | 0) != 0) {
  HEAP32[i11 >> 2] = 0;
  HEAP32[i6 + 88 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i8);
 }
 __ZN3WTF15ThreadConditionD1Ev(i10);
 __ZN3WTF5MutexD1Ev(i9);
 __ZN3WTF8fastFreeEPv(i6);
 STACKTOP = i3;
 return;
}
function __ZN3WTF5DequeINSt3__110unique_ptrIN7WebCore26PlatformMessagePortChannel9EventDataENS1_14default_deleteIS5_EEEELj0EE14expandCapacityEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
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
      __ZN3WTF14deleteOwnedPtrINS_6VectorINS_6OwnPtrIN7WebCore18MessagePortChannelEEELj1ENS_15CrashOnOverflowEEEEEvPT_(HEAP32[i15 + 4 >> 2] | 0);
      i14 = HEAP32[i15 >> 2] | 0;
      do {
       if ((i14 | 0) != 0) {
        i16 = i14 | 0;
        if (((tempValue = HEAP32[i16 >> 2] | 0, HEAP32[i16 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
         break;
        }
        __ZN7WebCore21SerializedScriptValueD1Ev(i14);
        __ZN3WTF8fastFreeEPv(i14);
       }
      } while (0);
      __ZN3WTF8fastFreeEPv(i15);
     }
     i14 = i12 + 4 | 0;
     if ((i14 | 0) == (i1 | 0)) {
      break;
     } else {
      i12 = i14;
      i13 = i13 + 4 | 0;
     }
    }
    i11 = HEAP32[i7 >> 2] | 0;
   }
   i13 = i11 - i3 + (HEAP32[i2 >> 2] | 0) | 0;
   i12 = i5 + (i3 << 2) | 0;
   if ((i11 | 0) != (i3 | 0)) {
    i14 = i5 + (i11 << 2) | 0;
    i16 = (HEAP32[i4 >> 2] | 0) + (i13 << 2) | 0;
    while (1) {
     i17 = i14 | 0;
     i18 = HEAP32[i17 >> 2] | 0;
     HEAP32[i17 >> 2] = 0;
     HEAP32[i16 >> 2] = i18;
     i18 = HEAP32[i17 >> 2] | 0;
     HEAP32[i17 >> 2] = 0;
     if ((i18 | 0) != 0) {
      __ZN3WTF14deleteOwnedPtrINS_6VectorINS_6OwnPtrIN7WebCore18MessagePortChannelEEELj1ENS_15CrashOnOverflowEEEEEvPT_(HEAP32[i18 + 4 >> 2] | 0);
      i17 = HEAP32[i18 >> 2] | 0;
      do {
       if ((i17 | 0) != 0) {
        i19 = i17 | 0;
        if (((tempValue = HEAP32[i19 >> 2] | 0, HEAP32[i19 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
         break;
        }
        __ZN7WebCore21SerializedScriptValueD1Ev(i17);
        __ZN3WTF8fastFreeEPv(i17);
       }
      } while (0);
      __ZN3WTF8fastFreeEPv(i18);
     }
     i17 = i14 + 4 | 0;
     if ((i17 | 0) == (i12 | 0)) {
      break;
     } else {
      i14 = i17;
      i16 = i16 + 4 | 0;
     }
    }
   }
   HEAP32[i7 >> 2] = i13;
  } else {
   if ((i9 | 0) == (i10 | 0)) {
    break;
   }
   i16 = i5 + (i9 << 2) | 0;
   i14 = i8 + (i9 << 2) | 0;
   while (1) {
    i12 = i16 | 0;
    i17 = HEAP32[i12 >> 2] | 0;
    HEAP32[i12 >> 2] = 0;
    HEAP32[i14 >> 2] = i17;
    i17 = HEAP32[i12 >> 2] | 0;
    HEAP32[i12 >> 2] = 0;
    if ((i17 | 0) != 0) {
     __ZN3WTF14deleteOwnedPtrINS_6VectorINS_6OwnPtrIN7WebCore18MessagePortChannelEEELj1ENS_15CrashOnOverflowEEEEEvPT_(HEAP32[i17 + 4 >> 2] | 0);
     i12 = HEAP32[i17 >> 2] | 0;
     do {
      if ((i12 | 0) != 0) {
       i15 = i12 | 0;
       if (((tempValue = HEAP32[i15 >> 2] | 0, HEAP32[i15 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
        break;
       }
       __ZN7WebCore21SerializedScriptValueD1Ev(i12);
       __ZN3WTF8fastFreeEPv(i12);
      }
     } while (0);
     __ZN3WTF8fastFreeEPv(i17);
    }
    i12 = i16 + 4 | 0;
    if ((i12 | 0) == (i1 | 0)) {
     break;
    } else {
     i16 = i12;
     i14 = i14 + 4 | 0;
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
function __ZN7WebCore18MessagePortChannel5closeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 i3 = i1 + 4 | 0;
 i4 = (i3 | 0) == 0;
 if (!i4) {
  __ZN3WTF5Mutex4lockEv(i3);
 }
 i5 = HEAP32[i1 + 28 >> 2] | 0;
 i1 = (i5 | 0) == 0;
 if (!i1) {
  i6 = i5 | 0;
  tempValue = HEAP32[i6 >> 2] | 0, HEAP32[i6 >> 2] = tempValue + 1, tempValue;
 }
 if (!i4) {
  __ZN3WTF5Mutex6unlockEv(i3);
 }
 if (i1) {
  return;
 }
 i1 = HEAP32[i2 >> 2] | 0;
 i2 = i1 + 4 | 0;
 i3 = (i2 | 0) == 0;
 if (!i3) {
  __ZN3WTF5Mutex4lockEv(i2);
 }
 HEAP32[i1 + 40 >> 2] = 0;
 i4 = i1 + 28 | 0;
 i6 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 do {
  if ((i6 | 0) != 0) {
   i4 = i6 | 0;
   if (((tempValue = HEAP32[i4 >> 2] | 0, HEAP32[i4 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN7WebCore26PlatformMessagePortChannelD2Ev(i6);
   __ZN3WTF8fastFreeEPv(i6);
  }
 } while (0);
 i6 = i1 + 36 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 do {
  if ((i1 | 0) != 0) {
   i6 = i1 | 0;
   if (((tempValue = HEAP32[i6 >> 2] | 0, HEAP32[i6 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN3WTF5DequeINSt3__110unique_ptrIN7WebCore26PlatformMessagePortChannel9EventDataENS1_14default_deleteIS5_EEEELj0EE10destroyAllEv(i1 + 76 | 0);
   i6 = i1 + 84 | 0;
   i4 = HEAP32[i6 >> 2] | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i6 >> 2] = 0;
    HEAP32[i1 + 88 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i4);
   }
   __ZN3WTF15ThreadConditionD1Ev(i1 + 28 | 0);
   __ZN3WTF5MutexD1Ev(i1 + 4 | 0);
   __ZN3WTF8fastFreeEPv(i1);
  }
 } while (0);
 if (!i3) {
  __ZN3WTF5Mutex6unlockEv(i2);
 }
 i2 = i5 + 4 | 0;
 i3 = (i2 | 0) == 0;
 if (!i3) {
  __ZN3WTF5Mutex4lockEv(i2);
 }
 HEAP32[i5 + 40 >> 2] = 0;
 i1 = i5 + 28 | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 do {
  if ((i4 | 0) != 0) {
   i1 = i4 | 0;
   if (((tempValue = HEAP32[i1 >> 2] | 0, HEAP32[i1 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN7WebCore26PlatformMessagePortChannelD2Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  }
 } while (0);
 i4 = i5 + 36 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 do {
  if ((i1 | 0) != 0) {
   i4 = i1 | 0;
   if (((tempValue = HEAP32[i4 >> 2] | 0, HEAP32[i4 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN3WTF5DequeINSt3__110unique_ptrIN7WebCore26PlatformMessagePortChannel9EventDataENS1_14default_deleteIS5_EEEELj0EE10destroyAllEv(i1 + 76 | 0);
   i4 = i1 + 84 | 0;
   i6 = HEAP32[i4 >> 2] | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i4 >> 2] = 0;
    HEAP32[i1 + 88 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i6);
   }
   __ZN3WTF15ThreadConditionD1Ev(i1 + 28 | 0);
   __ZN3WTF5MutexD1Ev(i1 + 4 | 0);
   __ZN3WTF8fastFreeEPv(i1);
  }
 } while (0);
 if (!i3) {
  __ZN3WTF5Mutex6unlockEv(i2);
 }
 i2 = i5 | 0;
 if (((tempValue = HEAP32[i2 >> 2] | 0, HEAP32[i2 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  return;
 }
 __ZN7WebCore26PlatformMessagePortChannelD2Ev(i5);
 __ZN3WTF8fastFreeEPv(i5);
 return;
}
function __ZN7WebCore18MessagePortChannel23tryGetMessageFromRemoteERN3WTF6RefPtrINS_21SerializedScriptValueEEERNS1_6OwnPtrINS1_6VectorINS6_IS0_EELj1ENS1_15CrashOnOverflowEEEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i1 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 i7 = i1 + 4 | 0;
 i8 = (i7 | 0) == 0;
 if (i8) {
  i9 = i1;
 } else {
  __ZN3WTF5Mutex4lockEv(i7);
  i9 = HEAP32[i6 >> 2] | 0;
 }
 __ZN3WTF12MessageQueueIN7WebCore26PlatformMessagePortChannel9EventDataEE13tryGetMessageEv(i5, (HEAP32[i9 + 32 >> 2] | 0) + 4 | 0);
 i9 = i5 | 0;
 i5 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   HEAP32[i9 >> 2] = 0;
   i10 = 0;
  } else {
   i6 = HEAP32[i5 >> 2] | 0;
   if ((i6 | 0) != 0) {
    i1 = i6 | 0;
    tempValue = HEAP32[i1 >> 2] | 0, HEAP32[i1 >> 2] = tempValue + 1, tempValue;
   }
   i1 = i2 | 0;
   i11 = HEAP32[i1 >> 2] | 0;
   HEAP32[i1 >> 2] = i6;
   do {
    if ((i11 | 0) != 0) {
     i6 = i11 | 0;
     if (((tempValue = HEAP32[i6 >> 2] | 0, HEAP32[i6 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
      break;
     }
     __ZN7WebCore21SerializedScriptValueD1Ev(i11);
     __ZN3WTF8fastFreeEPv(i11);
    }
   } while (0);
   i11 = HEAP32[i9 >> 2] | 0;
   i6 = i11 + 4 | 0;
   i1 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = 0;
   i12 = i3 | 0;
   i13 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = i1;
   __ZN3WTF14deleteOwnedPtrINS_6VectorINS_6OwnPtrIN7WebCore18MessagePortChannelEEELj1ENS_15CrashOnOverflowEEEEEvPT_(i13);
   __ZN3WTF14deleteOwnedPtrINS_6VectorINS_6OwnPtrIN7WebCore18MessagePortChannelEEELj1ENS_15CrashOnOverflowEEEEEvPT_(0);
   HEAP32[i9 >> 2] = 0;
   if ((i11 | 0) == 0) {
    i10 = 1;
    break;
   }
   __ZN3WTF14deleteOwnedPtrINS_6VectorINS_6OwnPtrIN7WebCore18MessagePortChannelEEELj1ENS_15CrashOnOverflowEEEEEvPT_(HEAP32[i6 >> 2] | 0);
   i6 = HEAP32[i11 >> 2] | 0;
   do {
    if ((i6 | 0) != 0) {
     i13 = i6 | 0;
     if (((tempValue = HEAP32[i13 >> 2] | 0, HEAP32[i13 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
      break;
     }
     __ZN7WebCore21SerializedScriptValueD1Ev(i6);
     __ZN3WTF8fastFreeEPv(i6);
    }
   } while (0);
   __ZN3WTF8fastFreeEPv(i11);
   i10 = 1;
  }
 } while (0);
 if (i8) {
  STACKTOP = i4;
  return i10 | 0;
 }
 __ZN3WTF5Mutex6unlockEv(i7);
 STACKTOP = i4;
 return i10 | 0;
}
function __ZN7WebCore18MessagePortChannel19postMessageToRemoteEN3WTF10PassRefPtrINS_21SerializedScriptValueEEENS1_10PassOwnPtrINS1_6VectorINS1_6OwnPtrIS0_EELj1ENS1_15CrashOnOverflowEEEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i1 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 i7 = i1 + 4 | 0;
 i8 = (i7 | 0) == 0;
 if (i8) {
  i9 = i1;
 } else {
  __ZN3WTF5Mutex4lockEv(i7);
  i9 = HEAP32[i6 >> 2] | 0;
 }
 i1 = HEAP32[i9 + 36 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i9 = i2 | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = 0;
   i9 = i3 | 0;
   i11 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = 0;
   i9 = __ZN3WTF10fastMallocEj(8) | 0;
   HEAP32[i9 >> 2] = i10;
   HEAP32[i9 + 4 >> 2] = i11;
   i11 = i5 | 0;
   HEAP32[i11 >> 2] = i9;
   i9 = __ZN3WTF12MessageQueueIN7WebCore26PlatformMessagePortChannel9EventDataEE19appendAndCheckEmptyENSt3__110unique_ptrIS3_NS5_14default_deleteIS3_EEEE(i1 + 4 | 0, i5) | 0;
   i10 = HEAP32[i11 >> 2] | 0;
   HEAP32[i11 >> 2] = 0;
   if ((i10 | 0) != 0) {
    __ZN3WTF14deleteOwnedPtrINS_6VectorINS_6OwnPtrIN7WebCore18MessagePortChannelEEELj1ENS_15CrashOnOverflowEEEEEvPT_(HEAP32[i10 + 4 >> 2] | 0);
    i11 = HEAP32[i10 >> 2] | 0;
    do {
     if ((i11 | 0) != 0) {
      i12 = i11 | 0;
      if (((tempValue = HEAP32[i12 >> 2] | 0, HEAP32[i12 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
       break;
      }
      __ZN7WebCore21SerializedScriptValueD1Ev(i11);
      __ZN3WTF8fastFreeEPv(i11);
     }
    } while (0);
    __ZN3WTF8fastFreeEPv(i10);
   }
   __ZN3WTF14deleteOwnedPtrINS_6VectorINS_6OwnPtrIN7WebCore18MessagePortChannelEEELj1ENS_15CrashOnOverflowEEEEEvPT_(0);
   if (!i9) {
    break;
   }
   i11 = HEAP32[(HEAP32[i6 >> 2] | 0) + 40 >> 2] | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   __ZN7WebCore11MessagePort16messageAvailableEv(i11);
  }
 } while (0);
 if (i8) {
  STACKTOP = i4;
  return;
 }
 __ZN3WTF5Mutex6unlockEv(i7);
 STACKTOP = i4;
 return;
}
function __ZN3WTF20VectorTypeOperationsINSt3__110unique_ptrIN7WebCore26PlatformMessagePortChannel9EventDataENS1_14default_deleteIS5_EEEEE8destructEPS8_SA_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 if ((i1 | 0) == (i2 | 0)) {
  return;
 } else {
  i3 = i1;
 }
 while (1) {
  i1 = i3 | 0;
  i4 = HEAP32[i1 >> 2] | 0;
  HEAP32[i1 >> 2] = 0;
  if ((i4 | 0) != 0) {
   i1 = HEAP32[i4 + 4 >> 2] | 0;
   if ((i1 | 0) != 0) {
    i5 = i1 + 8 | 0;
    i6 = HEAP32[i5 >> 2] | 0;
    i7 = i1 | 0;
    if ((i6 | 0) != 0) {
     i8 = HEAP32[i7 >> 2] | 0;
     i9 = i8 + (i6 << 2) | 0;
     i6 = i8;
     while (1) {
      i8 = HEAP32[i6 >> 2] | 0;
      if ((i8 | 0) != 0) {
       __ZN7WebCore18MessagePortChannel5closeEv(i8);
       i10 = HEAP32[i8 >> 2] | 0;
       do {
        if ((i10 | 0) != 0) {
         i11 = i10 | 0;
         if (((tempValue = HEAP32[i11 >> 2] | 0, HEAP32[i11 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
          break;
         }
         __ZN7WebCore26PlatformMessagePortChannelD2Ev(i10);
         __ZN3WTF8fastFreeEPv(i10);
        }
       } while (0);
       __ZN3WTF8fastFreeEPv(i8);
      }
      i6 = i6 + 4 | 0;
      if ((i6 | 0) == (i9 | 0)) {
       break;
      }
     }
     HEAP32[i5 >> 2] = 0;
    }
    i9 = HEAP32[i7 >> 2] | 0;
    if (!((i1 + 12 | 0) == (i9 | 0) | (i9 | 0) == 0)) {
     HEAP32[i7 >> 2] = 0;
     HEAP32[i1 + 4 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i9);
    }
    __ZN3WTF8fastFreeEPv(i1);
   }
   i9 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i6 = i9 | 0;
     if (((tempValue = HEAP32[i6 >> 2] | 0, HEAP32[i6 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
      break;
     }
     __ZN7WebCore21SerializedScriptValueD1Ev(i9);
     __ZN3WTF8fastFreeEPv(i9);
    }
   } while (0);
   __ZN3WTF8fastFreeEPv(i4);
  }
  i3 = i3 + 4 | 0;
  if ((i3 | 0) == (i2 | 0)) {
   break;
  }
 }
 return;
}
function __ZN7WebCore26PlatformMessagePortChannelD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 36 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   if (((tempValue = HEAP32[i3 >> 2] | 0, HEAP32[i3 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN3WTF5DequeINSt3__110unique_ptrIN7WebCore26PlatformMessagePortChannel9EventDataENS1_14default_deleteIS5_EEEELj0EE10destroyAllEv(i2 + 76 | 0);
   i3 = i2 + 84 | 0;
   i4 = HEAP32[i3 >> 2] | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i3 >> 2] = 0;
    HEAP32[i2 + 88 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i4);
   }
   __ZN3WTF15ThreadConditionD1Ev(i2 + 28 | 0);
   __ZN3WTF5MutexD1Ev(i2 + 4 | 0);
   __ZN3WTF8fastFreeEPv(i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   if (((tempValue = HEAP32[i4 >> 2] | 0, HEAP32[i4 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN3WTF5DequeINSt3__110unique_ptrIN7WebCore26PlatformMessagePortChannel9EventDataENS1_14default_deleteIS5_EEEELj0EE10destroyAllEv(i2 + 76 | 0);
   i4 = i2 + 84 | 0;
   i3 = HEAP32[i4 >> 2] | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i4 >> 2] = 0;
    HEAP32[i2 + 88 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i3);
   }
   __ZN3WTF15ThreadConditionD1Ev(i2 + 28 | 0);
   __ZN3WTF5MutexD1Ev(i2 + 4 | 0);
   __ZN3WTF8fastFreeEPv(i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 28 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i5 = i1 + 4 | 0;
  __ZN3WTF5MutexD1Ev(i5);
  return;
 }
 i3 = i2 | 0;
 if (((tempValue = HEAP32[i3 >> 2] | 0, HEAP32[i3 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  i5 = i1 + 4 | 0;
  __ZN3WTF5MutexD1Ev(i5);
  return;
 }
 __ZN7WebCore26PlatformMessagePortChannelD2Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 i5 = i1 + 4 | 0;
 __ZN3WTF5MutexD1Ev(i5);
 return;
}
function __ZN7WebCore26PlatformMessagePortChannelD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 36 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   if (((tempValue = HEAP32[i3 >> 2] | 0, HEAP32[i3 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN3WTF5DequeINSt3__110unique_ptrIN7WebCore26PlatformMessagePortChannel9EventDataENS1_14default_deleteIS5_EEEELj0EE10destroyAllEv(i2 + 76 | 0);
   i3 = i2 + 84 | 0;
   i4 = HEAP32[i3 >> 2] | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i3 >> 2] = 0;
    HEAP32[i2 + 88 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i4);
   }
   __ZN3WTF15ThreadConditionD1Ev(i2 + 28 | 0);
   __ZN3WTF5MutexD1Ev(i2 + 4 | 0);
   __ZN3WTF8fastFreeEPv(i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   if (((tempValue = HEAP32[i4 >> 2] | 0, HEAP32[i4 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN3WTF5DequeINSt3__110unique_ptrIN7WebCore26PlatformMessagePortChannel9EventDataENS1_14default_deleteIS5_EEEELj0EE10destroyAllEv(i2 + 76 | 0);
   i4 = i2 + 84 | 0;
   i3 = HEAP32[i4 >> 2] | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i4 >> 2] = 0;
    HEAP32[i2 + 88 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i3);
   }
   __ZN3WTF15ThreadConditionD1Ev(i2 + 28 | 0);
   __ZN3WTF5MutexD1Ev(i2 + 4 | 0);
   __ZN3WTF8fastFreeEPv(i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 28 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i5 = i1 + 4 | 0;
  __ZN3WTF5MutexD1Ev(i5);
  return;
 }
 i3 = i2 | 0;
 if (((tempValue = HEAP32[i3 >> 2] | 0, HEAP32[i3 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  i5 = i1 + 4 | 0;
  __ZN3WTF5MutexD1Ev(i5);
  return;
 }
 __ZN7WebCore26PlatformMessagePortChannelD2Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 i5 = i1 + 4 | 0;
 __ZN3WTF5MutexD1Ev(i5);
 return;
}
function __ZN3WTF12MessageQueueIN7WebCore26PlatformMessagePortChannel9EventDataEE19appendAndCheckEmptyENSt3__110unique_ptrIS3_NS5_14default_deleteIS3_EEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = i1 | 0;
 i4 = (i1 | 0) == 0;
 if (!i4) {
  __ZN3WTF5Mutex4lockEv(i3);
 }
 i5 = i1 + 72 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = i1 + 76 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = (i6 | 0) == (i8 | 0);
 do {
  if ((i6 | 0) == 0) {
   i10 = HEAP32[i1 + 84 >> 2] | 0;
   if ((i8 | 0) == 0) {
    if ((i10 | 0) == 0) {
     i11 = 8;
     break;
    } else {
     i12 = 0;
     break;
    }
   } else {
    if ((i8 | 0) == (i10 - 1 | 0)) {
     i11 = 8;
     break;
    } else {
     i12 = i8;
     break;
    }
   }
  } else {
   if ((i8 + 1 | 0) == (i6 | 0)) {
    i11 = 8;
   } else {
    i12 = i8;
   }
  }
 } while (0);
 if ((i11 | 0) == 8) {
  __ZN3WTF5DequeINSt3__110unique_ptrIN7WebCore26PlatformMessagePortChannel9EventDataENS1_14default_deleteIS5_EEEELj0EE14expandCapacityEv(i5);
  i12 = HEAP32[i7 >> 2] | 0;
 }
 i5 = HEAP32[i1 + 80 >> 2] | 0;
 i11 = i2 | 0;
 i2 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i5 + (i12 << 2) >> 2] = i2;
 i2 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = (i2 | 0) == ((HEAP32[i1 + 84 >> 2] | 0) - 1 | 0) ? 0 : i2 + 1 | 0;
 __ZN3WTF15ThreadCondition6signalEv(i1 + 24 | 0);
 if (i4) {
  return i9 | 0;
 }
 __ZN3WTF5Mutex6unlockEv(i3);
 return i9 | 0;
}
function __ZN7WebCore26PlatformMessagePortChannel13closeInternalEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 4 | 0;
 i3 = (i2 | 0) == 0;
 if (!i3) {
  __ZN3WTF5Mutex4lockEv(i2);
 }
 HEAP32[i1 + 40 >> 2] = 0;
 i4 = i1 + 28 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 | 0;
   if (((tempValue = HEAP32[i4 >> 2] | 0, HEAP32[i4 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN7WebCore26PlatformMessagePortChannelD2Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  }
 } while (0);
 i5 = i1 + 36 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 do {
  if ((i1 | 0) != 0) {
   i5 = i1 | 0;
   if (((tempValue = HEAP32[i5 >> 2] | 0, HEAP32[i5 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN3WTF5DequeINSt3__110unique_ptrIN7WebCore26PlatformMessagePortChannel9EventDataENS1_14default_deleteIS5_EEEELj0EE10destroyAllEv(i1 + 76 | 0);
   i5 = i1 + 84 | 0;
   i4 = HEAP32[i5 >> 2] | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i5 >> 2] = 0;
    HEAP32[i1 + 88 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i4);
   }
   __ZN3WTF15ThreadConditionD1Ev(i1 + 28 | 0);
   __ZN3WTF5MutexD1Ev(i1 + 4 | 0);
   __ZN3WTF8fastFreeEPv(i1);
  }
 } while (0);
 if (i3) {
  return;
 }
 __ZN3WTF5Mutex6unlockEv(i2);
 return;
}
function __ZN3WTF14deleteOwnedPtrINS_6VectorINS_6OwnPtrIN7WebCore18MessagePortChannelEEELj1ENS_15CrashOnOverflowEEEEEvPT_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i2 = i1 + 8 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 >> 2] | 0;
   if ((i5 | 0) != 0) {
    __ZN7WebCore18MessagePortChannel5closeEv(i5);
    i7 = HEAP32[i5 >> 2] | 0;
    do {
     if ((i7 | 0) != 0) {
      i8 = i7 | 0;
      if (((tempValue = HEAP32[i8 >> 2] | 0, HEAP32[i8 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
       break;
      }
      __ZN7WebCore26PlatformMessagePortChannelD2Ev(i7);
      __ZN3WTF8fastFreeEPv(i7);
     }
    } while (0);
    __ZN3WTF8fastFreeEPv(i5);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if (!((i1 + 12 | 0) == (i2 | 0) | (i2 | 0) == 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN3WTF12MessageQueueIN7WebCore26PlatformMessagePortChannel9EventDataEE13tryGetMessageEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = i2 | 0;
 i4 = (i2 | 0) == 0;
 if (!i4) {
  __ZN3WTF5Mutex4lockEv(i3);
 }
 do {
  if ((HEAP8[i2 + 92 | 0] & 1) == 0) {
   i5 = i2 + 72 | 0;
   i6 = HEAP32[i5 >> 2] | 0;
   if ((i6 | 0) == (HEAP32[i2 + 76 >> 2] | 0)) {
    HEAP32[i1 >> 2] = 0;
    break;
   } else {
    i7 = i2 + 80 | 0;
    i8 = (HEAP32[i7 >> 2] | 0) + (i6 << 2) | 0;
    i6 = HEAP32[i8 >> 2] | 0;
    HEAP32[i8 >> 2] = 0;
    HEAP32[i1 >> 2] = i6;
    i6 = HEAP32[i5 >> 2] | 0;
    i8 = HEAP32[i7 >> 2] | 0;
    __ZN3WTF20VectorTypeOperationsINSt3__110unique_ptrIN7WebCore26PlatformMessagePortChannel9EventDataENS1_14default_deleteIS5_EEEEE8destructEPS8_SA_(i8 + (i6 << 2) | 0, i8 + (i6 + 1 << 2) | 0);
    i6 = HEAP32[i5 >> 2] | 0;
    HEAP32[i5 >> 2] = (i6 | 0) == ((HEAP32[i2 + 84 >> 2] | 0) - 1 | 0) ? 0 : i6 + 1 | 0;
    break;
   }
  } else {
   HEAP32[i1 >> 2] = 0;
  }
 } while (0);
 if (i4) {
  return;
 }
 __ZN3WTF5Mutex6unlockEv(i3);
 return;
}
function __ZN7WebCore18MessagePortChannel20locallyEntangledPortEPKNS_22ScriptExecutionContextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = i1 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 i4 = i1 + 4 | 0;
 i5 = (i4 | 0) == 0;
 if (i5) {
  i6 = i1;
 } else {
  __ZN3WTF5Mutex4lockEv(i4);
  i6 = HEAP32[i3 >> 2] | 0;
 }
 i1 = HEAP32[i6 + 40 >> 2] | 0;
 do {
  if ((i1 | 0) == 0) {
   i7 = 0;
  } else {
   i6 = HEAP32[i1 + 48 >> 2] | 0;
   if ((i6 | 0) == (i2 | 0)) {
    i7 = i1;
    break;
   }
   if ((i6 | 0) == 0) {
    i7 = 0;
    break;
   }
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] & 1](i6) | 0)) {
    i7 = 0;
    break;
   }
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 1](i2) | 0)) {
    i7 = 0;
    break;
   }
   i7 = HEAP32[(HEAP32[i3 >> 2] | 0) + 40 >> 2] | 0;
  }
 } while (0);
 if (i5) {
  return i7 | 0;
 }
 __ZN3WTF5Mutex6unlockEv(i4);
 return i7 | 0;
}
function __ZN7WebCore18MessagePortChannel14entangleIfOpenEPNS_11MessagePortE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 i1 = i3 + 4 | 0;
 i4 = (i1 | 0) == 0;
 if (!i4) {
  __ZN3WTF5Mutex4lockEv(i1);
 }
 i5 = HEAP32[i3 + 28 >> 2] | 0;
 i3 = (i5 | 0) == 0;
 if (!i3) {
  i6 = i5 | 0;
  tempValue = HEAP32[i6 >> 2] | 0, HEAP32[i6 >> 2] = tempValue + 1, tempValue;
 }
 if (!i4) {
  __ZN3WTF5Mutex6unlockEv(i1);
 }
 if (i3) {
  i7 = 0;
  return i7 | 0;
 }
 i3 = i5 + 4 | 0;
 if ((i3 | 0) == 0) {
  HEAP32[i5 + 40 >> 2] = i2;
 } else {
  __ZN3WTF5Mutex4lockEv(i3);
  HEAP32[i5 + 40 >> 2] = i2;
  __ZN3WTF5Mutex6unlockEv(i3);
 }
 i3 = i5 | 0;
 if (((tempValue = HEAP32[i3 >> 2] | 0, HEAP32[i3 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  i7 = 1;
  return i7 | 0;
 }
 __ZN7WebCore26PlatformMessagePortChannelD2Ev(i5);
 __ZN3WTF8fastFreeEPv(i5);
 i7 = 1;
 return i7 | 0;
}
function __ZN7WebCore18MessagePortChannel11disentangleEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 i1 = i2 + 4 | 0;
 i3 = (i1 | 0) == 0;
 if (!i3) {
  __ZN3WTF5Mutex4lockEv(i1);
 }
 i4 = HEAP32[i2 + 28 >> 2] | 0;
 i2 = (i4 | 0) == 0;
 if (!i2) {
  i5 = i4 | 0;
  tempValue = HEAP32[i5 >> 2] | 0, HEAP32[i5 >> 2] = tempValue + 1, tempValue;
 }
 if (!i3) {
  __ZN3WTF5Mutex6unlockEv(i1);
 }
 if (i2) {
  return;
 }
 i2 = i4 + 4 | 0;
 if ((i2 | 0) == 0) {
  HEAP32[i4 + 40 >> 2] = 0;
 } else {
  __ZN3WTF5Mutex4lockEv(i2);
  HEAP32[i4 + 40 >> 2] = 0;
  __ZN3WTF5Mutex6unlockEv(i2);
 }
 i2 = i4 | 0;
 if (((tempValue = HEAP32[i2 >> 2] | 0, HEAP32[i2 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  return;
 }
 __ZN7WebCore26PlatformMessagePortChannelD2Ev(i4);
 __ZN3WTF8fastFreeEPv(i4);
 return;
}
function __ZN7WebCore18MessagePortChannel18hasPendingActivityEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = i1 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 i3 = i1 + 4 | 0;
 i4 = (i3 | 0) == 0;
 if (i4) {
  i5 = i1;
 } else {
  __ZN3WTF5Mutex4lockEv(i3);
  i5 = HEAP32[i2 >> 2] | 0;
 }
 i2 = HEAP32[i5 + 32 >> 2] | 0;
 i5 = i2 + 4 | 0;
 i1 = i5 | 0;
 i6 = (i5 | 0) == 0;
 if (!i6) {
  __ZN3WTF5Mutex4lockEv(i1);
 }
 if ((HEAP8[i2 + 96 | 0] & 1) == 0) {
  i7 = (HEAP32[i2 + 76 >> 2] | 0) != (HEAP32[i2 + 80 >> 2] | 0);
 } else {
  i7 = 0;
 }
 if (!i6) {
  __ZN3WTF5Mutex6unlockEv(i1);
 }
 if (i4) {
  return i7 | 0;
 }
 __ZN3WTF5Mutex6unlockEv(i3);
 return i7 | 0;
}
function __ZN7WebCore26PlatformMessagePortChannel9EventData6createEN3WTF10PassRefPtrINS_21SerializedScriptValueEEENS2_10PassOwnPtrINS2_6VectorINS2_6OwnPtrINS_18MessagePortChannelEEELj1ENS2_15CrashOnOverflowEEEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = __ZN3WTF10fastMallocEj(8) | 0;
 i5 = i2 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 i5 = i3 | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i4 >> 2] = i2;
 HEAP32[i4 + 4 >> 2] = i3;
 HEAP32[i1 >> 2] = i4;
 __ZN3WTF14deleteOwnedPtrINS_6VectorINS_6OwnPtrIN7WebCore18MessagePortChannelEEELj1ENS_15CrashOnOverflowEEEEEvPT_(0);
 return;
}
function __ZN7WebCore26PlatformMessagePortChannel6createEN3WTF10PassRefPtrINS0_16MessagePortQueueEEES4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = __ZN3WTF10fastMallocEj(44) | 0;
 i5 = i2 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 i5 = i3 | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i4 >> 2] = 1;
 __ZN3WTF5MutexC1Ev(i4 + 4 | 0);
 HEAP32[i4 + 28 >> 2] = 0;
 HEAP32[i4 + 32 >> 2] = i2;
 HEAP32[i4 + 36 >> 2] = i3;
 HEAP32[i4 + 40 >> 2] = 0;
 HEAP32[i1 >> 2] = i4;
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
function __ZN7WebCore18MessagePortChannel13isConnectedToEPNS_11MessagePortE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i1 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i4 | 0) == 0) {
  i5 = HEAP32[i1 + 40 >> 2] | 0;
  i6 = (i5 | 0) == (i2 | 0);
  return i6 | 0;
 } else {
  __ZN3WTF5Mutex4lockEv(i4);
  i1 = HEAP32[(HEAP32[i3 >> 2] | 0) + 40 >> 2] | 0;
  __ZN3WTF5Mutex6unlockEv(i4);
  i5 = i1;
  i6 = (i5 | 0) == (i2 | 0);
  return i6 | 0;
 }
 return 0;
}
function __ZN7WebCore26PlatformMessagePortChannelC2EN3WTF10PassRefPtrINS0_16MessagePortQueueEEES4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 HEAP32[i1 >> 2] = 1;
 __ZN3WTF5MutexC1Ev(i1 + 4 | 0);
 HEAP32[i1 + 28 >> 2] = 0;
 i4 = i2 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 32 >> 2] = i2;
 i2 = i3 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i1 + 36 >> 2] = i3;
 HEAP32[i1 + 40 >> 2] = 0;
 return;
}
function __ZN7WebCore26PlatformMessagePortChannelC1EN3WTF10PassRefPtrINS0_16MessagePortQueueEEES4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 HEAP32[i1 >> 2] = 1;
 __ZN3WTF5MutexC1Ev(i1 + 4 | 0);
 HEAP32[i1 + 28 >> 2] = 0;
 i4 = i2 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 32 >> 2] = i2;
 i2 = i3 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i1 + 36 >> 2] = i3;
 HEAP32[i1 + 40 >> 2] = 0;
 return;
}
function __ZN7WebCore26PlatformMessagePortChannel9EventDataC2EN3WTF10PassRefPtrINS_21SerializedScriptValueEEENS2_10PassOwnPtrINS2_6VectorINS2_6OwnPtrINS_18MessagePortChannelEEELj1ENS2_15CrashOnOverflowEEEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = i2 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 >> 2] = i2;
 i2 = i3 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = i3;
 return;
}
function __ZN7WebCore26PlatformMessagePortChannel9EventDataC1EN3WTF10PassRefPtrINS_21SerializedScriptValueEEENS2_10PassOwnPtrINS2_6VectorINS2_6OwnPtrINS_18MessagePortChannelEEELj1ENS2_15CrashOnOverflowEEEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = i2 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 >> 2] = i2;
 i2 = i3 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = i3;
 return;
}
function __ZN7WebCore26PlatformMessagePortChannel16entangledChannelEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = i2 + 4 | 0;
 i4 = (i3 | 0) == 0;
 if (!i4) {
  __ZN3WTF5Mutex4lockEv(i3);
 }
 i5 = HEAP32[i2 + 28 >> 2] | 0;
 HEAP32[i1 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i1 = i5 | 0;
  tempValue = HEAP32[i1 >> 2] | 0, HEAP32[i1 >> 2] = tempValue + 1, tempValue;
 }
 if (i4) {
  return;
 }
 __ZN3WTF5Mutex6unlockEv(i3);
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
function __ZN7WebCore18MessagePortChannelD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 __ZN7WebCore18MessagePortChannel5closeEv(i1);
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 if (((tempValue = HEAP32[i1 >> 2] | 0, HEAP32[i1 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  return;
 }
 __ZN7WebCore26PlatformMessagePortChannelD2Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore18MessagePortChannelD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 __ZN7WebCore18MessagePortChannel5closeEv(i1);
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 if (((tempValue = HEAP32[i1 >> 2] | 0, HEAP32[i1 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  return;
 }
 __ZN7WebCore26PlatformMessagePortChannelD2Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore26PlatformMessagePortChannel13setRemotePortEPNS_11MessagePortE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 4 | 0;
 if ((i3 | 0) == 0) {
  HEAP32[i1 + 40 >> 2] = i2;
  return;
 } else {
  __ZN3WTF5Mutex4lockEv(i3);
  HEAP32[i1 + 40 >> 2] = i2;
  __ZN3WTF5Mutex6unlockEv(i3);
  return;
 }
}
function __ZN7WebCore18MessagePortChannelC2EN3WTF10PassRefPtrINS_26PlatformMessagePortChannelEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i1 >> 2] = i2;
 return;
}
function __ZN7WebCore18MessagePortChannelC1EN3WTF10PassRefPtrINS_26PlatformMessagePortChannelEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i1 >> 2] = i2;
 return;
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
 FUNCTION_TABLE_vii[i1 & 3](i2 | 0, i3 | 0);
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
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore26PlatformMessagePortChannelD2Ev,b0,__ZN7WebCore18MessagePortChannelD2Ev,b0,b0,b0];
  var FUNCTION_TABLE_vii = [b1,b1,__ZN7WebCore18MessagePortChannelC2EN3WTF10PassRefPtrINS_26PlatformMessagePortChannelEEE,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_viii = [b3,b3,__ZN7WebCore26PlatformMessagePortChannel9EventDataC2EN3WTF10PassRefPtrINS_21SerializedScriptValueEEENS2_10PassOwnPtrINS2_6VectorINS2_6OwnPtrINS_18MessagePortChannelEEELj1ENS2_15CrashOnOverflowEEEEE,b3,__ZN7WebCore26PlatformMessagePortChannelC2EN3WTF10PassRefPtrINS0_16MessagePortQueueEEES4_,b3,b3,b3];
  var FUNCTION_TABLE_v = [b4,b4];
  var FUNCTION_TABLE_iii = [b5,b5];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore18MessagePortChannel11disentangleEv","__ZN7WebCore26PlatformMessagePortChannelD2Ev","__ZN7WebCore18MessagePortChannel13isConnectedToEPNS_11MessagePortE","__ZN7WebCore18MessagePortChannel13createChannelEN3WTF10PassRefPtrINS_11MessagePortEEES4_","__ZN7WebCore18MessagePortChannel19postMessageToRemoteEN3WTF10PassRefPtrINS_21SerializedScriptValueEEENS1_10PassOwnPtrINS1_6VectorINS1_6OwnPtrIS0_EELj1ENS1_15CrashOnOverflowEEEEE","__ZN3WTF14deleteOwnedPtrINS_6VectorINS_6OwnPtrIN7WebCore18MessagePortChannelEEELj1ENS_15CrashOnOverflowEEEEEvPT_","__ZN7WebCore26PlatformMessagePortChannel9EventDataC2EN3WTF10PassRefPtrINS_21SerializedScriptValueEEENS2_10PassOwnPtrINS2_6VectorINS2_6OwnPtrINS_18MessagePortChannelEEELj1ENS2_15CrashOnOverflowEEEEE","__ZN7WebCore18MessagePortChannel20locallyEntangledPortEPKNS_22ScriptExecutionContextE","__ZN7WebCore26PlatformMessagePortChannel9EventData6createEN3WTF10PassRefPtrINS_21SerializedScriptValueEEENS2_10PassOwnPtrINS2_6VectorINS2_6OwnPtrINS_18MessagePortChannelEEELj1ENS2_15CrashOnOverflowEEEEE","__ZN3WTF12MessageQueueIN7WebCore26PlatformMessagePortChannel9EventDataEE13tryGetMessageEv","_memset","__ZN7WebCore26PlatformMessagePortChannel16entangledChannelEv","_memcpy","__ZN7WebCore18MessagePortChannel14entangleIfOpenEPNS_11MessagePortE","__ZN7WebCore26PlatformMessagePortChannel13closeInternalEv","__ZN3WTF20VectorTypeOperationsINSt3__110unique_ptrIN7WebCore26PlatformMessagePortChannel9EventDataENS1_14default_deleteIS5_EEEEE8destructEPS8_SA_","__ZN7WebCore26PlatformMessagePortChannelC2EN3WTF10PassRefPtrINS0_16MessagePortQueueEEES4_","__ZN7WebCore26PlatformMessagePortChannel6createEN3WTF10PassRefPtrINS0_16MessagePortQueueEEES4_","__ZN7WebCore18MessagePortChannel23tryGetMessageFromRemoteERN3WTF6RefPtrINS_21SerializedScriptValueEEERNS1_6OwnPtrINS1_6VectorINS6_IS0_EELj1ENS1_15CrashOnOverflowEEEEE","__ZN7WebCore18MessagePortChannelD2Ev","__ZN3WTF5DequeINSt3__110unique_ptrIN7WebCore26PlatformMessagePortChannel9EventDataENS1_14default_deleteIS5_EEEELj0EE14expandCapacityEv","__ZN7WebCore18MessagePortChannelC2EN3WTF10PassRefPtrINS_26PlatformMessagePortChannelEEE","_strlen","__ZN7WebCore26PlatformMessagePortChannel13setRemotePortEPNS_11MessagePortE","__ZN7WebCore18MessagePortChannel18hasPendingActivityEv","__ZN7WebCore18MessagePortChannel5closeEv","__ZN3WTF12MessageQueueIN7WebCore26PlatformMessagePortChannel9EventDataEE19appendAndCheckEmptyENSt3__110unique_ptrIS3_NS5_14default_deleteIS3_EEEE","__ZN3WTF5DequeINSt3__110unique_ptrIN7WebCore26PlatformMessagePortChannel9EventDataENS1_14default_deleteIS5_EEEELj0EE10destroyAllEv"]

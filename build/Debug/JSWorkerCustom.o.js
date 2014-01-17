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
function __ZN7WebCore17handlePostMessageINS_6WorkerEEEN3JSC7JSValueEPNS2_9ExecStateEPT_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 32 | 0;
 i8 = i4 + 40 | 0;
 i9 = i4 + 48 | 0;
 i10 = i4 + 56 | 0;
 i11 = i4 + 64 | 0;
 i12 = i5 + 12 | 0;
 i13 = i5 | 0;
 HEAP32[i13 >> 2] = i12;
 i14 = i5 + 4 | 0;
 HEAP32[i14 >> 2] = 1;
 i15 = i5 + 8 | 0;
 HEAP32[i15 >> 2] = 0;
 i16 = i6 + 12 | 0;
 i17 = i6 | 0;
 HEAP32[i17 >> 2] = i16;
 i18 = i6 + 4 | 0;
 HEAP32[i18 >> 2] = 1;
 i19 = i6 + 8 | 0;
 HEAP32[i19 >> 2] = 0;
 i20 = i2 + 32 | 0;
 if (((HEAP32[i20 >> 2] | 0) - 1 | 0) >>> 0 > 1 >>> 0) {
  i21 = i2 + 56 | 0;
  i22 = HEAP32[i21 + 4 >> 2] | 0;
  i23 = i7 | 0;
  HEAP32[i23 >> 2] = HEAP32[i21 >> 2];
  HEAP32[i23 + 4 >> 2] = i22;
 } else {
  HEAP32[i7 + 4 >> 2] = -4;
  HEAP32[i7 >> 2] = 0;
 }
 __ZN7WebCore20fillMessagePortArrayEPN3JSC9ExecStateENS0_7JSValueERN3WTF6VectorINS4_6RefPtrINS_11MessagePortEEELj1ENS4_15CrashOnOverflowEEERNS5_INS6_INS0_11ArrayBufferEEELj1ES9_EE(i2, i7, i5, i6);
 if ((HEAP32[i20 >> 2] | 0) == 1) {
  HEAP32[i9 + 4 >> 2] = -4;
  HEAP32[i9 >> 2] = 0;
 } else {
  i20 = i2 + 48 | 0;
  i7 = HEAP32[i20 + 4 >> 2] | 0;
  i22 = i9 | 0;
  HEAP32[i22 >> 2] = HEAP32[i20 >> 2];
  HEAP32[i22 + 4 >> 2] = i7;
 }
 __ZN7WebCore21SerializedScriptValue6createEPN3JSC9ExecStateENS1_7JSValueEPN3WTF6VectorINS5_6RefPtrINS_11MessagePortEEELj1ENS5_15CrashOnOverflowEEEPNS6_INS7_INS1_11ArrayBufferEEELj1ESA_EENS_22SerializationErrorModeE(i8, i2, i9, i5, i6, 1);
 i6 = i8 | 0;
 i8 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 i6 = (HEAP32[(HEAP32[i2 + 16 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
 do {
  if ((HEAP32[i6 >> 2] & 0 | 0) == 0 & (HEAP32[i6 + 4 >> 2] & -1 | 0) == (-6 | 0)) {
   HEAP32[i10 >> 2] = 0;
   i9 = i11 | 0;
   HEAP32[i9 >> 2] = i8;
   __ZN7WebCore6Worker11postMessageEN3WTF10PassRefPtrINS_21SerializedScriptValueEEEPKNS1_6VectorINS1_6RefPtrINS_11MessagePortEEELj1ENS1_15CrashOnOverflowEEERi(i3, i11, i5, i10);
   i7 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i7 | 0) != 0) {
     i9 = i7 | 0;
     if (((tempValue = HEAP32[i9 >> 2] | 0, HEAP32[i9 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
      break;
     }
     __ZN7WebCore21SerializedScriptValueD1Ev(i7);
     __ZN3WTF8fastFreeEPv(i7);
    }
   } while (0);
   __ZN7WebCore15setDOMExceptionEPN3JSC9ExecStateEi(i2, HEAP32[i10 >> 2] | 0);
   HEAP32[i1 + 4 >> 2] = -4;
   HEAP32[i1 >> 2] = 0;
  } else {
   HEAP32[i1 + 4 >> 2] = -4;
   HEAP32[i1 >> 2] = 0;
   if ((i8 | 0) == 0) {
    break;
   }
   i7 = i8 | 0;
   if (((tempValue = HEAP32[i7 >> 2] | 0, HEAP32[i7 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN7WebCore21SerializedScriptValueD1Ev(i8);
   __ZN3WTF8fastFreeEPv(i8);
  }
 } while (0);
 i8 = HEAP32[i19 >> 2] | 0;
 if ((i8 | 0) != 0) {
  i1 = HEAP32[i17 >> 2] | 0;
  i10 = i1 + (i8 << 2) | 0;
  i8 = i1;
  while (1) {
   i1 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i1 | 0) != 0) {
     i2 = i1 | 0;
     i5 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
     HEAP32[i2 >> 2] = i5;
     if ((i5 | 0) != 0) {
      break;
     }
     i5 = i1 + 20 | 0;
     if ((HEAP32[i5 >> 2] | 0) != 0) {
      __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i5);
     }
     __ZN3WTF8fastFreeEPv(HEAP32[i1 + 12 >> 2] | 0);
     i5 = HEAP32[i1 + 4 >> 2] | 0;
     do {
      if ((i5 & 1 | 0) == 0) {
       i2 = i5;
       if ((i5 | 0) == 0) {
        break;
       }
       i11 = i2 + 8 | 0;
       if ((HEAP32[i11 >> 2] | 0) != 0) {
        HEAP32[i11 >> 2] = 0;
       }
       i11 = i2 | 0;
       i3 = HEAP32[i11 >> 2] | 0;
       if ((i3 | 0) != 0) {
        HEAP32[i11 >> 2] = 0;
        HEAP32[i2 + 4 >> 2] = 0;
        __ZN3WTF8fastFreeEPv(i3);
       }
       __ZN3WTF8fastFreeEPv(i5);
      }
     } while (0);
     __ZN3WTF8fastFreeEPv(i1);
    }
   } while (0);
   i8 = i8 + 4 | 0;
   if ((i8 | 0) == (i10 | 0)) {
    break;
   }
  }
  HEAP32[i19 >> 2] = 0;
 }
 i19 = HEAP32[i17 >> 2] | 0;
 if (!((i16 | 0) == (i19 | 0) | (i19 | 0) == 0)) {
  HEAP32[i17 >> 2] = 0;
  HEAP32[i18 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i19);
 }
 i19 = HEAP32[i15 >> 2] | 0;
 if ((i19 | 0) != 0) {
  i18 = HEAP32[i13 >> 2] | 0;
  i17 = i18 + (i19 << 2) | 0;
  i19 = i18;
  while (1) {
   i18 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i18 | 0) != 0) {
     i16 = i18 + 36 | 0;
     i10 = i16 | 0;
     i8 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
     if ((i8 | 0) != 0) {
      HEAP32[i10 >> 2] = i8;
      break;
     }
     i8 = i16 - 36 | 0;
     if ((i8 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 44 >> 2] & 1](i8);
    }
   } while (0);
   i19 = i19 + 4 | 0;
   if ((i19 | 0) == (i17 | 0)) {
    break;
   }
  }
  HEAP32[i15 >> 2] = 0;
 }
 i15 = HEAP32[i13 >> 2] | 0;
 if ((i12 | 0) == (i15 | 0) | (i15 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 HEAP32[i13 >> 2] = 0;
 HEAP32[i14 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i15);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore19JSWorkerConstructor17constructJSWorkerEPN3JSC9ExecStateE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 40 | 0;
 i9 = i2 + 48 | 0;
 i10 = i1 + 24 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 if ((i11 & 0 | 0) == 0 & (HEAP32[i10 + 4 >> 2] & -1 | 0) == (-6 | 0)) {
  i12 = 0;
 } else {
  i12 = i11;
 }
 if ((HEAP32[i1 + 32 >> 2] | 0) == 1) {
  i11 = __ZN3JSC29createNotEnoughArgumentsErrorEPNS_9ExecStateE(i1) | 0;
  i10 = (i11 | 0) == 0;
  i13 = HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
  i14 = i4 | 0;
  HEAP32[i14 >> 2] = (i10 ? 0 : 0) | i11;
  HEAP32[i14 + 4 >> 2] = i10 ? -6 : -5;
  __ZN3JSC2VM14throwExceptionEPNS_9ExecStateENS_7JSValueE(i3, i13, i1, i4);
  i4 = i3 | 0;
  i15 = HEAP32[i4 + 4 >> 2] | 0;
  i16 = HEAP32[i4 >> 2] | 0;
  STACKTOP = i2;
  return (tempRet0 = i15, i16) | 0;
 }
 i4 = i1 + 48 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 i13 = HEAP32[i4 + 4 >> 2] | 0;
 i4 = i6 | 0;
 HEAP32[i4 >> 2] = i3;
 HEAP32[i4 + 4 >> 2] = i13;
 i4 = i3;
 do {
  if ((i3 & 0 | 0) == 0 & (i13 & -1 | 0) == (-5 | 0)) {
   if ((HEAP8[(HEAP32[i4 >> 2] | 0) + 52 | 0] | 0) != 5) {
    i17 = 8;
    break;
   }
   i18 = i4;
  } else {
   i17 = 8;
  }
 } while (0);
 if ((i17 | 0) == 8) {
  i18 = __ZNK3JSC7JSValue16toStringSlowCaseEPNS_9ExecStateE(i6, i1) | 0;
 }
 i6 = i18 + 12 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 if ((i4 | 0) == 0) {
  __ZNK3JSC12JSRopeString11resolveRopeEPNS_9ExecStateE(i18, i1);
  i18 = HEAP32[i6 >> 2] | 0;
  i6 = i5 | 0;
  HEAP32[i6 >> 2] = i18;
  if ((i18 | 0) == 0) {
   i19 = i6;
  } else {
   i20 = i18;
   i21 = i6;
   i17 = 12;
  }
 } else {
  i6 = i5 | 0;
  HEAP32[i6 >> 2] = i4;
  i20 = i4;
  i21 = i6;
  i17 = 12;
 }
 if ((i17 | 0) == 12) {
  i17 = i20 | 0;
  HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 2;
  i19 = i21;
 }
 i21 = HEAP32[i1 + 16 >> 2] | 0;
 i17 = (HEAP32[(i21 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
 do {
  if ((HEAP32[i17 >> 2] & 0 | 0) == 0 & (HEAP32[i17 + 4 >> 2] & -1 | 0) == (-6 | 0)) {
   i20 = HEAP32[(HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] | 0) + 660 >> 2] | 0;
   HEAP32[i7 >> 2] = 0;
   __ZN7WebCore6Worker6createERNS_22ScriptExecutionContextERKN3WTF6StringERi(i8, (__ZNK7WebCore9DOMWindow8documentEv(i20) | 0) + 88 | 0, i5, i7);
   i20 = i8 | 0;
   i6 = HEAP32[i20 >> 2] | 0;
   HEAP32[i20 >> 2] = 0;
   i20 = HEAP32[i7 >> 2] | 0;
   if ((i20 | 0) == 0) {
    __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_6WorkerE(i9, i1, HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] | 0, i6);
    i4 = HEAP32[i9 >> 2] | 0;
    i18 = (i4 | 0) == 0;
    i13 = (i18 ? 0 : 0) | i4;
    i4 = (i18 ? -6 : -5) | 0;
    if ((i6 | 0) == 0) {
     i22 = i4;
     i23 = i13;
     break;
    }
    i18 = i6 + 12 | 0;
    i3 = i18 | 0;
    i10 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
    if ((i10 | 0) != 0) {
     HEAP32[i3 >> 2] = i10;
     i22 = i4;
     i23 = i13;
     break;
    }
    i10 = i18 - 12 | 0;
    if ((i10 | 0) == 0) {
     i22 = i4;
     i23 = i13;
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 8 >> 2] & 1](i10);
    i22 = i4;
    i23 = i13;
    break;
   } else {
    __ZN7WebCore15setDOMExceptionEPN3JSC9ExecStateEi(i1, i20);
    if ((i6 | 0) == 0) {
     i22 = -6;
     i23 = 0;
     break;
    }
    i20 = i6 + 12 | 0;
    i6 = i20 | 0;
    i13 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
    if ((i13 | 0) != 0) {
     HEAP32[i6 >> 2] = i13;
     i22 = -6;
     i23 = 0;
     break;
    }
    i13 = i20 - 12 | 0;
    if ((i13 | 0) == 0) {
     i22 = -6;
     i23 = 0;
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 8 >> 2] & 1](i13);
    i22 = -6;
    i23 = 0;
    break;
   }
  } else {
   i22 = -6;
   i23 = 0;
  }
 } while (0);
 i1 = HEAP32[i19 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i15 = i22;
  i16 = i23;
  STACKTOP = i2;
  return (tempRet0 = i15, i16) | 0;
 }
 i19 = i1 | 0;
 i9 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
 if ((i9 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  i15 = i22;
  i16 = i23;
  STACKTOP = i2;
  return (tempRet0 = i15, i16) | 0;
 } else {
  HEAP32[i19 >> 2] = i9;
  i15 = i22;
  i16 = i23;
  STACKTOP = i2;
  return (tempRet0 = i15, i16) | 0;
 }
 return 0;
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
function __ZN7WebCore8JSWorker11postMessageEPN3JSC9ExecStateE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore17handlePostMessageINS_6WorkerEEEN3JSC7JSValueEPNS2_9ExecStateEPT_(i1, i3, (HEAP32[i2 + 12 >> 2] | 0) - 16 | 0);
 return;
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
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 1](i2 | 0);
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
  var FUNCTION_TABLE_vi = [b3,b3];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","_memset","_memcpy","__ZN7WebCore8JSWorker11postMessageEPN3JSC9ExecStateE","__ZN7WebCore19JSWorkerConstructor17constructJSWorkerEPN3JSC9ExecStateE","__ZN7WebCore17handlePostMessageINS_6WorkerEEEN3JSC7JSValueEPNS2_9ExecStateEPT_"]
